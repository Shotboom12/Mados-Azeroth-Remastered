// SPDX-License-Identifier: GPL-3.0-or-later
// Claude 2026-11-02, kit commun R1 lot L1. See HdLumenBridge.h. Compiled only with WOWDECOMP_LUMEN.
#ifdef WOWDECOMP_LUMEN
#include "HdLumenBridge.h"
#include "HdVulkanFog.h"
#include "lumen/LvClient.h"
#include "lumen/LvNativeData.h"
#include "Engine/Source/Gx/GxSeam.h"
#include "WoW/Source/WorldClient/DayNight.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "WoW/Source/WorldClient/HD/HdForever.h"
#include "WoW/Source/WorldClient/HD/HdTime.h"
#include "WoW/Source/WorldClient/Map.h"
#include "WoW/Source/WorldClient/MapWeather.h"
#include "WoW/Source/WorldClient/World.h"
#include "WoW/Source/WorldClient/HD/HdLights.h"
#include "WoW/Source/WorldClient/MapArea.h"
#include "WoW/Source/WorldClient/MapChunk.h"
#include "Engine/Source/Model2/M2Scene.h"
#include "Engine/Source/Tempest/CMath.h"
#include "native/Present.hpp"
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "WoW/Source/Object/ObjectClient/Player_C.h"
#include "WoW/Source/Object/ObjectClient/Unit_C.h"
#include "WoW/Source/ObjectMgrClient/ObjectMgrClient.h"
#include "WoW/Source/Ui/GameUI.h"
#include "WoW/Source/Object/ObjectClient/Missile_C.h"
#include "WoW/Source/DB/DBClient/DBClient.h"
#include "WoW/Source/DB/Rec/SpellRec.h"
#include "WoW/Source/DB/Rec/LightRec.h" // Claude L17: light ids for the fog journal
#include "WoW/Source/DB/Rec/MapRec.h" // Claude 2026-11-13 lot LV5-SH1: instance maps
#include "Engine/Source/ConsoleBase/Types.h"
#include <algorithm>
#include <array>
#include <vector>
#include <chrono>
#include <cmath>
#include <cstdio>
#include <cstring>
namespace HD::LumenBridge {
namespace {
// Lives for the whole frame: the reference-fog reader is called later, from the stages.
struct Persistent {VkRect2D world{};};
Persistent persistent;
HD::Lumen::NativeFrame frame;
bool ReadNativeFog(void* user,uint64_t serial,HD::Lumen::FogSnapshot& out) {
    auto& p=*static_cast<Persistent*>(user);
    VkImageView view{};VkExtent2D extent{};
    if(!HD::VulkanFog::CurrentScatter(serial,view,extent)||!extent.width||!extent.height) return false;
    out.image={view,VK_IMAGE_LAYOUT_GENERAL};out.transmittance=true;
    out.uv={float(p.world.offset.x)/extent.width,float(p.world.offset.y)/extent.height,
            float(p.world.extent.width)/extent.width,float(p.world.extent.height)/extent.height};
    return true;
}
HD::Lumen::Source::WeatherKind Weather() {
    // Native weather read only (MapWeather.cpp Weather::GetType: 1 rain, 2 snow, 3 sand).
    switch(World::s_weather?World::s_weather->GetType():0u) {
    case 1: return HD::Lumen::Source::WeatherKind::Rain;
    case 2: return HD::Lumen::Source::WeatherKind::Snow;
    case 3: return HD::Lumen::Source::WeatherKind::Sand;
    default: return HD::Lumen::Source::WeatherKind::Clear;
    }
}
// The four cases that make R2 draw (LvClient: frameWanted). Read without registering anything.
bool AnyCaseOn() {
    for(const char* name:{"hdLvLamps","hdLvFog","hdLvHalos","hdLvSpells"}) {
        auto* v=CVar::LookupRegistered(name);
        if(v&&std::isfinite(v->m_floatValue)&&v->m_floatValue!=0) return true;
    }
    return false;
}
bool lastAny=true; // one "off" Prepare after the last case goes off, so R2 hands back its G-buffer/depth requests
// The light weight the client itself uses (DayNight.cpp, light position): the smoothed weight when the corrected
// day/night is on, otherwise the native sun/moon switch. Never a new threshold.
float DayWeight() {
    if(HD::DayNightSmoothingEnabled()) return HD::DayNightBlendWeight();
    const float p=DayNight::g_dnInfo.m_dayProgression;
    return (p<.2013889f||p>.9236111f)?0.f:1.f;
}
double Seconds() {
    static const auto start=std::chrono::steady_clock::now();
    return std::chrono::duration<double>(std::chrono::steady_clock::now()-start).count();
}

// ---- Claude 2026-11-02, lot L2: R2 lamps with the For Ever colours, without double light ----
// Who already lights what with the client's own lamps (CM2Light), read in the code, not guessed:
//   terrain (bit 1<<1): HdLights (hdLights 1, per pixel) or 3.3.5 per vertex; models (1<<4): CM2Scene::SelectLights
//   (CWorldScene::SetupLighting); WMO walls (1<<2) and interiors (1<<3): CMapObjDefGroup::SelectLights only gives the
//   map light and the WMO's own lights, never a lamp's CM2Light, and interiors have their light baked in.
// hdLvLampClasses = the classes R2 lamps may light (default 4 = WMO walls only). Every other class is marked
// "already lit" for every lamp. A catalogue lamp that IS one of this frame's native lights (HdLights cache, exact
// emitter position, MatchCatalogueEmitter .05 yd, unique) also keeps terrain and models marked whatever the setting,
// and takes the native light's colour (For Ever chroma: colour / brightest channel; R2 keeps the catalogue intensity).
constexpr uint32_t kTerrain=1u<<1,kWmo=1u<<2,kInterior=1u<<3,kModel=1u<<4,kAllClasses=kTerrain|kWmo|kInterior|kModel;
CVar* lampClasses=nullptr;
CVar* lampInfo=nullptr;
CVar* terrainBuildings=nullptr;
// Claude 2026-11-03, lot L4: hdLvLampForever 0 = R2 lamps keep their own (catalogue) colours and light every class of
// hdLvLampClasses even with hdLights 1, so the For Ever ground light and the R2 lamps can be shown together.
CVar* lampForever=nullptr;
// Lot L6 (2026-11-03): hdLvLampScan 1 writes every lit native lamp the R2 catalogue does not know (no catalogue lamp
// within 1 yd) to Logs\lumen-lampes-manquantes.txt, once per position, so the missing lamps can be added to lampdata.bin.
CVar* lampScan=nullptr;
// Claude LV39: hdLightsLumen 1 = hdLights 1 leaves out of the ground the native lights Lumen lights itself with shadows (a catalogue
// lamp within 1 yd, Lumen lamps on, terrain in hdLvLampClasses, hdLvLampForever 0): the ground keeps Lumen's lamp shadows AND
// every other native light per pixel (NPC torches lit only squares of terrain under hdLights 0, 3.3.5's per-vertex light).
CVar* lightsLumen=nullptr;
int lumenMap=-1;
// Lot L7 (2026-11-03): hdLvSpellGround 1 = R2 spell lights (colour measured from the spell itself) and the lantern
// light every surface, ground included, whatever hdLvLampClasses keeps for the lamps.
CVar* spellGround=nullptr;
CVar* spellSource=nullptr;
CVar* fogWaterCut=nullptr;
CVar* missileLight=nullptr;
CVar* missileReach=nullptr;
CVar* missileImpact=nullptr;
CVar* spellGain=nullptr;
CVar* spellPure=nullptr;
struct ScanState {const HD::Lumen::Source::LampCatalog* catalogue=nullptr;int map=-1;};
std::vector<std::array<int32_t,4>> scanSeen;
bool ScanLight(void* user,const HD::CachedLight& light) {
    auto& s=*static_cast<ScanState*>(user);
    const float* c=light.colourTimesIntensity;const float* p=light.position;
    const float top=std::max({c[0],c[1],c[2]});
    if(!(top>1e-4f)||!std::isfinite(top)||!std::isfinite(p[0])||!std::isfinite(p[1])||!std::isfinite(p[2])) return true;
    const std::array<int32_t,4> key{s.map,int32_t(std::lround(p[0]*10)),int32_t(std::lround(p[1]*10)),int32_t(std::lround(p[2]*10))};
    if(std::find(scanSeen.begin(),scanSeen.end(),key)!=scanSeen.end()||scanSeen.size()>=8192) return true;
    scanSeen.push_back(key);
    float nearest=1e9f;
    if(auto* m=s.catalogue?s.catalogue->Map(s.map):nullptr)
        HD::Lumen::Source::ForEachLampNear(*m,p[0],p[1],3.f,[&](uint32_t,const HD::Lumen::Source::lampfile::Lamp& l){
            float d=0;for(int k=0;k<3;++k){float a=p[k]-l.position[k];d+=a*a;}nearest=std::min(nearest,std::sqrt(d));});
    if(nearest<=1.f) return true; // the catalogue has it (position slightly off at most): R2 already lights it
    if(std::FILE* f=std::fopen("Logs\\lumen-lampes-manquantes.txt","a")) {
        std::fprintf(f,"map %d pos %.3f %.3f %.3f couleur %.3f %.3f %.3f rayon %.2f catalogue_plus_proche %s\n",s.map,p[0],p[1],p[2],
                     c[0]/top,c[1]/top,c[2]/top,light.radius,nearest<1e8f?"1-3 m":"plus de 3 m");
        std::fclose(f);
    }
    return true;
}
bool LumenLightsGround(const float* p); // Claude LV39: below
CVar* Register(const char* name,const char* help,const char* value,bool save) {
    if(auto* v=CVar::LookupRegistered(name)) return v;
    return CVar::Register(name,help,save?1:0,value,nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
}
void Status(CVar* v,const char* text) {
    if(!v) return;
    if(!v->m_stringValue.m_str||std::strcmp(v->m_stringValue.m_str,text)) {v->SetReadOnly(false);v->InternalSet(text,true,false,false,false);} // read-only cvars ignore InternalSet
    v->SetReadOnly(true);
}
void RegisterOnce() {
    if(lampClasses) return;
    lampClasses=Register("hdLvLampClasses","Lumen R2 lamps: classes they may light, 2 terrain + 4 WMO walls + 8 interiors + 16 models (default 4)","4",true);
    lampInfo=Register("hdLvLampInfo","Lumen R2 lamps: native lights read, recognised and recoloured this frame (read only)","off",false);
    terrainBuildings=Register("hdLvTerrainWmo","Lumen R2 relief shadow: 1 = ground and buildings (default), 0 = ground only","1",true);
    spellGain=Register("hdLvSpellGain","Lumen R2: multiplier on spell light intensity (default 8; 1 = original, very dim)","8",true);
    spellPure=Register("hdLvSpellPure","Lumen R2: 1 = spell light keeps the measured colour (no lift toward white), default 1","1",true);
    fogWaterCut=Register("hdLvFogWaterCut","Lumen R2: 1 = stop the fog at the height of the nearest water everywhere (kit, cuts the fog with the camera angle), 0 = never (default)","0",true);
    spellSource=Register("hdLvSpellSource","Lumen R2 spell lights: 0 = image detector (kit), 1 = the game's own projectiles with the colour of the spell school (default), 2 = both","1",true);
    missileLight=Register("hdLvMissileLight","Lumen R2: light of a flying spell (fireball...), lamps are 1.5 (default 2)","2",true);
    missileReach=Register("hdLvMissileReach","Lumen R2: reach in yards of a flying spell light (default 10)","10",true);
    missileImpact=Register("hdLvMissileImpact","Lumen R2: seconds of light where a spell hits (0 = none, default 0.5)","0.5",true);
    spellGround=Register("hdLvSpellGround","Lumen R2: 1 = spell lights and the lantern light the ground and every surface, whatever hdLvLampClasses (default 0)","0",true);
    lampScan=Register("hdLvLampScan","Lumen R2 lamps: 1 = write the lit native lamps missing from the R2 catalogue to Logs\\lumen-lampes-manquantes.txt (default 0)","0",false);
    {static bool hdDef1Once=false;if(!hdDef1Once){hdDef1Once=true;if(lampScan&&lampScan->m_intValue!=0)lampScan->InternalSet("0",true,false,false,false);}} // Claude DEF1: diagnostic journal off at every start (a test never leaves it on)
    lampForever=Register("hdLvLampForever","Lumen R2 lamps: 1 = recognised lamps take the For Ever colour and leave ground and models to For Ever (default), 0 = R2 keeps its own colours and lights every class of hdLvLampClasses","1",true);
    lightsLumen=Register("hdLightsLumen","HD + Lumen (Claude LV39): 1 = hdLights 1 leaves out of the ground the lamps Lumen lights itself with their shadows (catalogue lamps), keeps every other native light (NPC torches, fires) per pixel; 0 = hdLights lights every lamp, the For Ever light doubled with Lumen's (default, Max's choice 16 nov)","0",true);
    HD::SetLumenLampTest(LumenLightsGround);
    Status(lampInfo,"off");
}
uint32_t AllowedClasses();
// Claude LV39: see lightsLumen. Called by HdLights while it gathers the frame's native lights.
bool LumenLightsGround(const float* p) {
    if(!lightsLumen||lightsLumen->m_intValue!=1||lumenMap<0||!p) return false;
    if(lampForever&&lampForever->m_intValue!=0) return false; // For Ever mode: recognised lamps leave the ground to the natives
    static CVar* lamps=nullptr;if(!lamps) lamps=CVar::LookupRegistered("hdLvLamps");
    if(!lamps||lamps->m_intValue==0||!(AllowedClasses()&kTerrain)) return false;
    const auto* cat=HD::Lumen::Client::Catalogue();
    // any catalogue lamp within 1 yd (as hdLvLampScan counts a lamp known): two lamps of one post count too
    const auto* m=cat?cat->Map(lumenMap):nullptr;if(!m) return false;
    bool found=false;
    HD::Lumen::Source::ForEachLampNear(*m,p[0],p[1],1.f,[&](uint32_t,const HD::Lumen::Source::lampfile::Lamp& l){
        float d=0;for(int k=0;k<3;++k){float a=p[k]-l.position[k];d+=a*a;}if(d<=1.f) found=true;});
    return found;
}
uint32_t AllowedClasses() {
    int v=lampClasses?lampClasses->m_intValue:4;
    return uint32_t(std::clamp(v,0,int(kAllClasses)))&kAllClasses;
}
struct LampAudit {
    const HD::Lumen::Source::LampCatalog* catalogue=nullptr;HD::Lumen::NativeFrame* out=nullptr;int map=-1;uint32_t applied=0;
    uint32_t natives=0,dark=0,recognised=0,unknown=0,overflow=0;
};
bool VisitLight(void* user,const HD::CachedLight& light) {
    auto& a=*static_cast<LampAudit*>(user);
    ++a.natives;
    const float* c=light.colourTimesIntensity;
    const float top=std::max({c[0],c[1],c[2]});
    if(!(top>1e-4f)||!std::isfinite(top)) {++a.dark;return true;} // switched off (day lamp, fade): no colour to give
    uint32_t id=0;
    if(!HD::Lumen::MatchCatalogueEmitter(*a.catalogue,a.map,light.position,id)) {++a.unknown;return true;}
    if(a.out->policyCount>=a.out->policies.size()) {++a.overflow;return true;}
    auto& p=a.out->policies[a.out->policyCount++];
    p.catalogueIdentity=id;p.alreadyAppliedClasses=a.applied|kTerrain|kModel;p.nativeColour=true;
    for(int k=0;k<3;++k) p.rgb[k]=std::clamp(c[k]/top,0.f,1.f);
    ++a.recognised;
    return true;
}
// Lot L4 (2026-11-03): the HdLights cache is not readable on every frame (frame stamp check). Without a fallback a
// recognised lamp lit models and terrain on the frames where the cache was missed and not on the others: the lamp
// posts and the horses flashed orange / dark (Max's video 2026-11-02 22:29). Keep the last good audit for a short time.
struct LastAudit {std::array<HD::Lumen::SurfacePolicy,1024> policies{};uint32_t count=0,applied=0;int age=1000;};
LastAudit lastAudit;
constexpr int kKeepAuditFrames=120;
// Called by R2 after the opaque world (same thread, same frame as HdLights' gather).
bool RefreshPolicy(void*,uint64_t,HD::Lumen::NativeFrame& n) {
    LampAudit a;a.catalogue=HD::Lumen::Client::Catalogue();a.out=&n;a.map=n.environment.mapId;
    lumenMap=a.map; // Claude LV39: the map LumenLightsGround matches in
    a.applied=kAllClasses&~AllowedClasses();
    n.defaultAppliedClasses=a.applied;n.policyCount=0;
    n.effectsAllClasses=spellGround&&spellGround->m_intValue!=0;
    n.spellGain=spellGain?spellGain->m_floatValue:1.0f;n.spellPure=spellPure&&spellPure->m_intValue!=0;
    HD::CachedLightsInfo info{};
    const bool forever=!lampForever||lampForever->m_intValue!=0;
    if(lampScan&&lampScan->m_intValue!=0&&a.catalogue&&World::s_m2Scene) {
        ScanState scan;scan.catalogue=a.catalogue;scan.map=a.map;HD::CachedLightsInfo scanInfo{};
        HD::ReadCachedLights(World::s_m2Scene,World::s_m2Scene->m_frameStamp,ScanLight,&scan,scanInfo);
    }
    bool cache=forever&&a.catalogue&&World::s_m2Scene&&HD::ReadCachedLights(World::s_m2Scene,World::s_m2Scene->m_frameStamp,VisitLight,&a,info);
    if(a.overflow) n.defaultAppliedClasses|=kTerrain|kModel; // a recognised lamp left out must not light twice
    bool kept=false;
    if(forever&&cache) {lastAudit.policies=n.policies;lastAudit.count=n.policyCount;lastAudit.applied=n.defaultAppliedClasses;lastAudit.age=0;}
    else if(forever&&!cache) {
        const bool nativeOn=HD::LightsMode()==1; // AR1
        if(nativeOn&&lastAudit.age<kKeepAuditFrames) {
            ++lastAudit.age;n.policies=lastAudit.policies;n.policyCount=lastAudit.count;n.defaultAppliedClasses=lastAudit.applied;kept=true;
        } else if(nativeOn) n.defaultAppliedClasses|=kTerrain|kModel; // For Ever lights them: never twice, never flashing
    }
    char text[200];
    if(!forever) std::snprintf(text,sizeof text,"classes %u, couleurs Lumenveil (hdLvLampForever 0 : pas de couleur For Ever, rien de reserve a For Ever)",AllowedClasses());
    else if(kept) std::snprintf(text,sizeof text,"classes %u, audit precedent garde (%d images), reconnues %u",AllowedClasses(),lastAudit.age,lastAudit.count);
    else if(cache) std::snprintf(text,sizeof text,"classes %u, natives %u (eteintes %u), reconnues %u, sans lampe catalogue %u%s",AllowedClasses(),a.natives,a.dark,a.recognised,a.unknown,a.overflow?", liste pleine":"");
    else std::snprintf(text,sizeof text,"classes %u, couleurs For Ever indisponibles (hdLights %d : cache des lampes natives non lu cette image)",AllowedClasses(),info.nativeMode);
    Status(lampInfo,text);
    return true; // the class mask itself is the audit above; recolouring is extra when the cache is readable
}

// ---- Claude 2026-11-02, lot L3: relief shadow (hdLvTerrain) from the game's own heights ----
// Same steps as CMap::QueryHeight (Map.cpp, used by the weather) minus the water surface (the kit forbids a liquid
// probe: R2's fog already stops at the existing water plane) and minus the chunk's loose doodads (trees, props: not
// relief). hdLvTerrainWmo 0 = ground triangles only. An area that is not loaded gives no answer (empty cell).
// R2 calls it from Prepare on this thread, before the world is drawn, at most .5 ms per frame (terrain_shadow.cpp).
bool ProbeHeight(void*,float x,float y,float top,float bottom,float& height) {
    if(!std::isfinite(x)||!std::isfinite(y)||!std::isfinite(top)||!std::isfinite(bottom)||!(top>bottom)) return false;
    float best=-100000.f;bool found=false;CMapChunk* chunk=nullptr;
    if(!CMap::bDungeon) {
        float chunkY=-(y-17066.666f)*.24f;
        float chunkX=.24f*-(x-17066.666f);
        if(!(chunkX>=.5f&&chunkY>=.5f&&chunkX<8191.5f&&chunkY<8191.5f)) return false; // outside the world: no wrap
        int32_t cellY=CMath::fint_(chunkY-.5f);
        int32_t cellX=CMath::fint_(chunkX-.5f);
        CMapArea* area=CMap::m_areaTable[64*((cellX>>7)&0x3F)+((cellY>>7)&0x3F)];
        if(!area||area->m_asyncObject) return false;
        chunk=area->m_mapChunks[((cellY>>3)&0xF)+16*((cellX>>3)&0xF)];
        if(chunk) {C3Vector pos(x,y,top);found=CMap::GetHeightTerrain(chunk,pos,cellY,cellX,&best);}
    }
    if((!terrainBuildings||terrainBuildings->m_intValue!=0)&&World::s_m2Scene) {
        C3Vector start(x,y,top),end(x,y,bottom);
        CMap::s_queryTag++;
        World::s_m2Scene->BeginHitTest();
        float t=1.f;
        CMap::VectorIntersectMapObjs(chunk,start,end,&t);
        World::s_m2Scene->EndHitTestCollisionWorld(start,end,t);
        if(t<1.f) {float h=top-t*(top-bottom);if(!found||h>best) best=h;found=true;}
    }
    if(!found||!std::isfinite(best)) return false;
    height=best;
    return true;
}
}
// Claude L13: the game's own spell projectiles become Lumenveil effect lights, coloured by spell school.
// Read only: walks CMissile::s_inFlightMissileList, never changes a missile.
struct SchoolCache { uint32_t spell=0; int32_t mask=0; };
SchoolCache schoolCache[64];
int32_t SchoolOf(uint32_t spellId) {
    SchoolCache& c=schoolCache[spellId&63u];
    if(c.spell==spellId&&spellId) return c.mask;
    static SpellRec rec;
    int32_t mask=g_spellDB.GetRecord(spellId,&rec)?rec.m_schoolMask:0;
    c.spell=spellId;c.mask=mask;
    return mask;
}
bool SchoolColour(int32_t mask,float* rgb) {
    struct S{int32_t bit;float c[3];};
    static const S order[]={{4,{1.0f,0.55f,0.18f}},{16,{0.30f,0.58f,1.0f}},{32,{0.62f,0.22f,1.0f}},{64,{0.95f,0.40f,1.0f}},{8,{0.40f,1.0f,0.30f}},{2,{1.0f,0.88f,0.50f}}};
    for(const S& s:order) if(mask&s.bit){rgb[0]=s.c[0];rgb[1]=s.c[1];rgb[2]=s.c[2];return true;}
    return false; // physical (arrows, bullets): no light
}
struct MissileSeen { const CMissile* ptr=nullptr; uint32_t spell=0; uint8_t cast=0; uint64_t caster=0; float pos[3]={}; float rgb[3]={}; uint32_t id=0; bool alive=false; double impactUntil=-1; };
std::vector<MissileSeen> missilesSeen;
bool spellsOn(){auto* v=CVar::LookupRegistered("hdLvSpells");return v&&v->m_intValue!=0;}
std::vector<HD::Lumen::Source::EffectLamp> gameSpellLights;
uint32_t nextMissileId=1;
double lastMissileLog=-1;
int loggedMissileLines=0;
void FillGameSpells(const float* camPos,double now) {
    gameSpellLights.clear();
    const float light=missileLight?std::clamp(missileLight->m_floatValue,0.f,10.f):2.f;
    const float reach=missileReach?std::clamp(missileReach->m_floatValue,1.f,40.f):10.f;
    const float impact=missileImpact?std::clamp(missileImpact->m_floatValue,0.f,3.f):0.5f;
    for(auto& m:missilesSeen) m.alive=false;
    int walked=0;
    for(CMissile* mi=CMissile::s_inFlightMissileList; mi&&walked<256; mi=mi->m_next,++walked) {
        if(mi->m_transportGuid) continue;
        const C3Vector p=mi->m_position;
        if(!std::isfinite(p.x)||!std::isfinite(p.y)||!std::isfinite(p.z)||(p.x==0&&p.y==0&&p.z==0)) continue;
        float rgb[3];
        if(!SchoolColour(SchoolOf(mi->m_spellID),rgb)) continue;
        MissileSeen* seen=nullptr;
        for(auto& m:missilesSeen) if(m.ptr==mi&&m.spell==mi->m_spellID&&m.cast==mi->m_castID&&m.caster==mi->m_casterGuid.m_guid&&m.impactUntil<0){seen=&m;break;}
        if(!seen){missilesSeen.push_back({});seen=&missilesSeen.back();seen->ptr=mi;seen->spell=mi->m_spellID;seen->cast=mi->m_castID;seen->caster=mi->m_casterGuid.m_guid;seen->id=0x08000000u|(nextMissileId++&0x00FFFFFFu);}
        seen->alive=true;seen->pos[0]=p.x;seen->pos[1]=p.y;seen->pos[2]=p.z;std::memcpy(seen->rgb,rgb,sizeof rgb);
    }
    for(auto& m:missilesSeen) {
        if(m.alive||m.impactUntil>=0) continue;
        m.impactUntil=impact>0?now+impact:now; // gone this frame: it hit (or fizzled) here
    }
    for(auto& m:missilesSeen) {
        float k=0;
        if(m.alive) k=1;
        else if(m.impactUntil>now&&impact>0) k=1.6f*float((m.impactUntil-now)/impact);
        if(k<=0) continue;
        HD::Lumen::Source::EffectLamp l{};
        l.id=m.id;std::memcpy(l.position,m.pos,sizeof l.position);std::memcpy(l.colour,m.rgb,sizeof l.colour);
        l.intensity=light*k;l.nearYards=0.5f;l.surfaceReach=m.alive?reach:reach*1.3f;
        gameSpellLights.push_back(l);
    }
    missilesSeen.erase(std::remove_if(missilesSeen.begin(),missilesSeen.end(),[&](const MissileSeen& m){return !m.alive&&m.impactUntil<=now;}),missilesSeen.end());
    std::sort(gameSpellLights.begin(),gameSpellLights.end(),[&](const auto& a,const auto& b){
        auto d=[&](const float* q){float x=q[0]-camPos[0],y=q[1]-camPos[1],z=q[2]-camPos[2];return x*x+y*y+z*z;};
        return d(a.position)<d(b.position);});
    if(gameSpellLights.size()>12) gameSpellLights.resize(12);
    // journal Logs\lumen-projectiles.txt (proof for each test), at most 3000 lines, 0.1 s apart
    // REL1 (2026-11-06): written only when hdLvSpellLog is 1 (off by default for players).
    const CVar* spellLog=CVar::LookupRegistered("hdLvSpellLog");
    if(spellLog&&spellLog->m_intValue!=0&&!gameSpellLights.empty()&&loggedMissileLines<3000&&now-lastMissileLog>=0.1) {
        lastMissileLog=now;
        if(std::FILE* f=std::fopen("Logs\\lumen-projectiles.txt","a")) {
            for(const auto& m:missilesSeen) {
                const bool lit=m.alive||m.impactUntil>now;
                if(!lit) continue;
                std::fprintf(f,"t %.2f sort %u ecole %d %s pos %.2f %.2f %.2f couleur %.2f %.2f %.2f source %d sorts %d\n",now,m.spell,SchoolOf(m.spell),m.alive?"vol":"impact",m.pos[0],m.pos[1],m.pos[2],m.rgb[0],m.rgb[1],m.rgb[2],spellSource?spellSource->m_intValue:-1,spellsOn()?1:0);
                ++loggedMissileLines;
            }
            std::fclose(f);
        }
    }
}
// Claude L11: player, class and current target for the spell light detector
// (selection circle filter, missile path player -> target). Read only.
void FillUnits(HD::Lumen::Source::FrameInputs& e) {
    e.targetKnown=false;e.unitCount=0;
    CGPlayer_C* p=ClntObjMgrGetActivePlayerObj();
    if(!p) return;
    CGUnit_C* me=static_cast<CGUnit_C*>(p);
    if(!me->m_unit) return;
    const C3Vector mp=me->GetPosition();
    e.playerClass=me->m_unit->m_unitFieldBytes0[1];
    auto& u0=e.units[0];
    u0.feet[0]=mp.x;u0.feet[1]=mp.y;u0.feet[2]=mp.z;u0.boundingRadius=me->m_unit->m_unitFieldBoundingradius;u0.target=-1;u0.guid=me->m_obj?me->m_obj->m_guid.m_guid:0;
    e.unitCount=1;
    if(!CGGameUI::m_lockedTarget) return;
    CGUnit_C* t=static_cast<CGUnit_C*>(ClntObjMgrObjectPtr(CGGameUI::m_lockedTarget,TYPEMASK_UNIT,__FILE__,__LINE__));
    if(!t||!t->m_unit||t==me) return;
    const C3Vector tp=t->GetPosition();
    if(!std::isfinite(tp.x)||!std::isfinite(tp.y)||!std::isfinite(tp.z)) return;
    e.targetKnown=true;e.targetPos[0]=tp.x;e.targetPos[1]=tp.y;e.targetPos[2]=tp.z;
    e.targetBoundingRadius=t->m_unit->m_unitFieldBoundingradius;
    auto& u1=e.units[1];
    u1.feet[0]=tp.x;u1.feet[1]=tp.y;u1.feet[2]=tp.z;u1.boundingRadius=e.targetBoundingRadius;u1.guid=CGGameUI::m_lockedTarget.m_guid;
    u1.target=(t->m_unit->m_unitFieldTarget.m_guid==u0.guid&&u0.guid)?0:-1;
    u0.target=1;
    e.unitCount=2;
}
// Claude 2026-11-15 lot LV23: every unit within 120 yd of the camera (feet, bounding radius) for the lamps' shadow cubes: a box
// round each keeps what it carries without bones (a weapon, a fishing rod) out of the kept cubes. Read only.
struct ShadowUnitScan {HD::Lumen::NativeFrame* frame;float camera[3];};
int32_t ShadowUnitFound(WOWGUID guid,void* param) {
    auto* scan=static_cast<ShadowUnitScan*>(param);auto& f=*scan->frame;
    CGUnit_C* u=static_cast<CGUnit_C*>(ClntObjMgrObjectPtr(guid,TYPEMASK_UNIT,__FILE__,__LINE__));
    if(!u||!u->m_unit) return 1;
    const C3Vector p=u->GetPosition();
    if(!std::isfinite(p.x)||!std::isfinite(p.y)||!std::isfinite(p.z)) return 1;
    const float dx=p.x-scan->camera[0],dy=p.y-scan->camera[1],dz=p.z-scan->camera[2];
    if(dx*dx+dy*dy+dz*dz>120.f*120.f) return 1;
    float r=u->m_unit->m_unitFieldBoundingradius;if(!std::isfinite(r)||r<0) r=0;
    // Claude LV41: the nearest kShadowUnits (was: the first 64 the enumeration gave, far ones included): when full, the
    // farthest kept unit gives its place to a nearer one.
    const float d2=dx*dx+dy*dy+dz*dz;int at=f.shadowUnitCount;
    if(at>=HD::Lumen::NativeFrame::kShadowUnits){
        at=-1;float worst=d2;
        for(int i=0;i<f.shadowUnitCount;++i){const auto& q=f.shadowUnits[i];const float ex=q[0]-scan->camera[0],ey=q[1]-scan->camera[1],ez=q[2]-scan->camera[2];const float e2=ex*ex+ey*ey+ez*ez;if(e2>worst){worst=e2;at=i;}}
        if(at<0) return 1;
    } else ++f.shadowUnitCount;
    auto& o=f.shadowUnits[at];o[0]=p.x;o[1]=p.y;o[2]=p.z;o[3]=r;
    return 1;
}
void FillShadowUnits(HD::Lumen::NativeFrame& f) {
    f.shadowUnitCount=0;
    const auto& cam=DayNight::g_dnInfo.m_cameraPos;ShadowUnitScan scan{&f,{cam.x,cam.y,cam.z}};
    ClntObjMgrEnumVisibleObjects(ShadowUnitFound,&scan);
}
// Claude 2026-11-13 lot LV10 (hdLvDensityAdapt): the fog of this place over its whole day, clear weather.
// For Ever: near-ground density (layers starting within 100 yards) per unit of Lumenveil density, as AdaptForeverFog
// and AuthoredLayers write it (x0.35 x weight x 0.01). 3.3.5: the zone fog distance, same light blend as
// DayNight::BlendAreaLight. Read only: nothing in the client changes.
float DayFogDistanceAt(float time) {
    const auto& info=DayNight::g_dnInfo;const auto& lights=DayNight::g_areaLights;
    if(!lights.m_count||!lights.m_data[0]) return 0.0f;
    auto one=[&](const LightRec* l){const LightParamsRec* p=DayNight::GetLightParams(l,0);return p?DayNight::CalcIndividualColorFromDBRec(time,p,0):0.0f;};
    float end=one(lights.m_data[0]);
    struct Near {const LightRec* light;float distSq;float weight;};
    Near nearLights[32];int count=0;
    for(uint32_t i=1;i<lights.m_count&&count<32;++i) {
        const LightRec* l=lights.m_data[i];if(!l) continue;
        float dx=info.m_lightRefPos.x-l->m_gameCoords[0],dy=info.m_lightRefPos.y-l->m_gameCoords[1],dz=info.m_lightRefPos.z-l->m_gameCoords[2];
        float d2=dx*dx+dy*dy+dz*dz;
        if(d2>=l->m_gameFalloffEnd*l->m_gameFalloffEnd) continue;
        float d=std::sqrt(d2),w=1.0f;
        if(d>l->m_gameFalloffStart) {float span=l->m_gameFalloffEnd-l->m_gameFalloffStart;w=span>0?std::clamp(1.0f-(d-l->m_gameFalloffStart)/span,0.0f,1.0f):0.0f;}
        if(w<=0) continue;
        nearLights[count++]={l,d2,w};
    }
    for(int i=1;i<count;++i) {Near n=nearLights[i];int j=i-1;while(j>=0&&nearLights[j].distSq<n.distSq) {nearLights[j+1]=nearLights[j];--j;}nearLights[j+1]=n;}
    for(int i=0;i<count;++i) end+=(one(nearLights[i].light)-end)*nearLights[i].weight;
    return std::isfinite(end)?end:0.0f;
}
float DayAuthoredNearAt(float time) {
    HD::ForeverFog fog{};const float w=HD::VulkanFog::ForeverFogHereAt(fog,time);
    if(!(w>0.0f)) return 0.0f;
    float n=0.0f;const int layers=std::clamp(fog.count,0,3);
    for(int i=0;i<layers;++i) if(fog.layers[i].start<=100.0f&&fog.layers[i].density>0.0f) n+=fog.layers[i].density*0.35f*std::min(w,1.0f)*0.01f;
    return std::isfinite(n)?n:0.0f;
}
void FillDayCurve(HD::Lumen::NativeFrame& frame) {
    static double last=-10.0;static std::array<float,48> authored{},distance{};static bool valid=false;
    const double now=Seconds();
    if(now-last>=0.25||now<last) {
        last=now;valid=true;
        for(int k=0;k<48;++k) {
            const float t=float(k*60);
            authored[k]=DayAuthoredNearAt(t);distance[k]=DayFogDistanceAt(t);
            if(!(authored[k]>0.0f)&&!(distance[k]>0.0f)) valid=false;
        }
    }
    for(int k=0;k<48;++k) {frame.dayAuthoredNear[k]=authored[k];frame.dayFogDistance[k]=distance[k];}
    const float t=HD::DayNightBandTime(DayNight::g_dnInfo.m_dayProgression*2880.0f);
    frame.dayAuthoredNear[48]=DayAuthoredNearAt(t);frame.dayFogDistance[48]=DayFogDistanceAt(t);
    frame.dayCurveValid=valid&&(frame.dayAuthoredNear[48]>0.0f||frame.dayFogDistance[48]>0.0f);
}
void Frame() {
    VkFormat format{};VkExtent2D extent{};
    if(!wxlvk::native::present::BackBufferInfo(format,extent)||!extent.width||!extent.height) return; // no world image this frame
    RegisterOnce();
    const bool any=AnyCaseOn();
    if(!any&&!lastAny) return; // everything off: no snapshot, no cost
    lastAny=any;
    frame=HD::Lumen::NativeFrame{};
    if(!any) {HD::Lumen::Client::Prepare(frame,extent,{{0,0},extent},wxlvk::native::present::Completed());return;}
    const auto& dn=DayNight::g_dnInfo;
    // Claude 2026-11-13 lot LV3: zone reelle = CGGameUI::m_areaID (STATIC 0x00BD080C, ecrite par NewZoneFeedback 0x005204C0),
    // exactement ce que lit Lumenveil 0.1.1 (kZoneId) : ID de ZONE (1519 Stormwind, 12 Elwynn), pas de sous-zone. Avant : 0.
    const int zoneId=CGGameUI::m_areaID>0?int(CGGameUI::m_areaID):0;
    HD::Lumen::EnvironmentFromPlanets(dn,DayNight::g_planets,DayWeight(),Seconds(),s_mapId,zoneId,Weather(),frame);
    // Claude 2026-11-13 lot LV3: interieur = test du jeu CGUnit_C::IsOutdoors (0x0071B7F0) sur le joueur, fondu 0,5 s,
    // comme ReadIndoorWeight de Lumenveil 0.1.1 ; avant : m_interiorFogBlend de DayNight.
    {
        static double indoorSeconds=-1.0;static float indoorWeight=0.0f;
        bool indoors=false;
        if(CGPlayer_C* p=ClntObjMgrGetActivePlayerObj()) indoors=!p->IsOutdoors();
        const double now=Seconds();
        const double step=indoorSeconds<0.0?0.5:std::clamp(now-indoorSeconds,0.0,0.25);
        indoorSeconds=now;
        const float change=float(step/0.5);
        indoorWeight=indoors?std::min(indoorWeight+change,1.0f):std::max(indoorWeight-change,0.0f);
        frame.environment.indoors=indoorWeight;
    }
    // Claude 2026-11-13 lot LV5-SH1: instance/donjon = la carte courante a un type d'instance (Map.dbc m_instanceType != 0 :
    // donjon, raid, champ de bataille, arene), comme HdCataViewDistance. Continents (0, 1, 530, 571...) : type 0.
    {
        const MapRec* mapRec=s_mapId>=0&&g_mapDB.m_loaded&&g_mapDB.m_recordsById?g_mapDB.GetRecord(s_mapId):nullptr;
        frame.numericBase.instanceMap=mapRec&&mapRec->m_instanceType!=0;
    }
    frame.environment.inLiquid=s_liquidTypeId!=0;
    FillUnits(frame.environment);
    FillShadowUnits(frame); // Claude LV23
    frame.spellSource=spellSource?std::clamp(spellSource->m_intValue,0,2):1;
    if(frame.spellSource!=0) {FillGameSpells(frame.environment.playerPos,Seconds());frame.gameSpells=&gameSpellLights;}
    HD::ForeverFog fog{};
    float weight=HD::VulkanFog::ForeverFogHere(fog);
    if(weight>0) HD::Lumen::AdaptForeverFog(fog,weight,frame.environment.playerPos,frame);
    FillDayCurve(frame); // Claude 2026-11-13 lot LV10: hdLvDensityAdapt
    // Claude L17: read-only journal context: zone, sub-zone and the lights around the camera with their weight
    // (same distance falloff as CurrentForeverFog). Only written to Logs\\lumen-brume.txt by LvClient.
    {
        const char* zone=CGGameUI::m_realZoneText?CGGameUI::m_realZoneText:"";
        const char* sub=CGGameUI::m_subZoneText?CGGameUI::m_subZoneText:"";
        const int size=int(sizeof frame.journalPlace);
        int at=std::snprintf(frame.journalPlace,size,"zone \"%.40s\" sous-zone \"%.40s\" carte %d part ForEver %.2f lumieres",zone,sub,s_mapId,weight);
        const auto& lights=DayNight::g_areaLights;
        for(uint32_t i=0;i<lights.m_count&&at>0&&at<size-24;++i) {
            const LightRec* l=lights.m_data[i];if(!l) continue;
            float w=1.0f;
            if(i>0) {
                float dx=dn.m_lightRefPos.x-l->m_gameCoords[0],dy=dn.m_lightRefPos.y-l->m_gameCoords[1],dz=dn.m_lightRefPos.z-l->m_gameCoords[2];
                float d2=dx*dx+dy*dy+dz*dz;
                if(d2>=l->m_gameFalloffEnd*l->m_gameFalloffEnd) continue;
                float d=std::sqrt(d2);
                if(d>l->m_gameFalloffStart) {float span=l->m_gameFalloffEnd-l->m_gameFalloffStart;w=span>0?std::clamp(1.0f-(d-l->m_gameFalloffStart)/span,0.0f,1.0f):0.0f;}
                if(w<=0) continue;
            }
            at+=std::snprintf(frame.journalPlace+at,size-at," %d:%.2f",l->m_id,w);
        }
    }
    frame.nativeFogEnabled=HD::VulkanFog::ReferenceRequested();
    // Read-only snapshot of the existing water owner's plane (never a new liquid collection).
    // Claude L16: the shaders stop the fog march at this plane for EVERY ray, as if the nearest river were an
    // endless sheet of water: below its height the fog vanished, and where depended on the camera angle. Off by default.
    frame.liquidPlaneValid=fogWaterCut&&fogWaterCut->m_intValue!=0&&g_gxCataPlane.m_valid!=0&&std::isfinite(g_gxCataPlane.m_height);
    frame.liquidPlaneHeight=frame.liquidPlaneValid?g_gxCataPlane.m_height:0.f;
    persistent.world={{0,0},extent};
    frame.readReferenceFog=ReadNativeFog;frame.fogUser=&persistent;
    // Lot L2: lamp classes (see RefreshPolicy). Lot L3: relief heights. Still not supplied: units/corpses (counts 0).
    frame.defaultAppliedClasses=kAllClasses&~AllowedClasses();
    frame.surfacePolicyComplete=true;
    frame.refreshSurfacePolicy=RefreshPolicy;
    frame.height={ProbeHeight,nullptr};
    HD::Lumen::Client::Prepare(frame,extent,persistent.world,wxlvk::native::present::Completed());
}
}
#endif
