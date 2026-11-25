#include "LvNativeData.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "WoW/Source/WorldClient/HD/HdForever.h"
#include "WoW/Source/WorldClient/HD/HdDayNightMath.h"
#include <algorithm>
#include <cmath>
namespace HD::Lumen {
namespace {uint32_t Pack(const CImVector&v){return uint32_t(v.a)<<24|uint32_t(v.r)<<16|uint32_t(v.g)<<8|v.b;}}
void EnvironmentFromDayNight(const DayNight::DNInfo& d, double seconds, int map, int zone,
                             const float* light, Source::WeatherKind weather, NativeFrame& n) {
    auto& f = n.environment;
    f.seconds = seconds; f.mapId = map; f.zoneId = zone; f.dayFraction = d.m_dayProgression;
    f.camPos[0] = d.m_cameraPos.x; f.camPos[1] = d.m_cameraPos.y; f.camPos[2] = d.m_cameraPos.z;
    f.playerPos[0] = d.m_playerPos.x; f.playerPos[1] = d.m_playerPos.y; f.playerPos[2] = d.m_playerPos.z;
    f.playerKnown = true; f.playerFacing = d.m_faceAngle;
    f.farClip = f.clientFarClip = d.m_farClip;
    const auto& fog = d.m_fogInterior;
    f.fogStart = fog.m_start; f.fogEnd = fog.m_end; f.fogColor = Pack(fog.m_color);
    // Volumetric-fog intensity is still on its compatibility adapter until its migration.
    const float fogScale = HD::ForeverIntensityHere();
    if (fogScale != 1.f) {
        auto c = fog.m_color;
        auto channel = [&](uint8_t v) { return uint8_t(std::min(float(v)*fogScale,255.f)); };
        c.r = channel(c.r); c.g = channel(c.g); c.b = channel(c.b);
        f.fogColor = Pack(c);
    }
    f.directColor = f.sunColor = Pack(d.m_light0.m_diffuse);
    f.ambientColor = Pack(d.m_light0.m_ambient);
    // AR1 fix: the world model never scales sky RGB by the light intensity (only sun and ambients),
    // so Lumenveil's sky colours keep the same intensity as its fog (Claude INT1 / LV3, as before Codex).
    auto sky = [&](CImVector c) {
        if (fogScale != 1.f) {
            auto channel = [&](uint8_t v) { return uint8_t(std::min(float(v)*fogScale,255.f)); };
            c.r = channel(c.r); c.g = channel(c.g); c.b = channel(c.b);
        }
        return Pack(c);
    };
    f.skyHorizonColor = sky(d.m_bands.m_skyColors[4]);
    f.skyAboveHorizonColor = sky(d.m_bands.m_skyColors[3]);
    f.zoneFogDistance = d.m_bands.m_fogEnd;
    const int32_t slot = int32_t(d.m_overrideLightParamsId);
    f.lightParams.screenEffectSlot = slot >= 0 && slot < 8 ? slot : -1;
    f.indoors = std::clamp(d.m_interiorFogBlend,0.f,1.f);
    f.weather = weather; f.weatherIntensity = std::clamp(d.m_weatherIntensity,0.f,1.f);
    f.lightParams.stormBlend = std::clamp(d.m_stormBlend,0.f,1.f);
    const float length = std::sqrt(light[0]*light[0]+light[1]*light[1]+light[2]*light[2]);
    for (int i = 0; i < 3; ++i) f.toLight[i] = length > 1e-6f ? light[i]/length : (i == 2 ? 1.f : 0.f);
    f.sunElevation = f.toLight[2]; f.moonElevation = -f.toLight[2]; f.lightIsMoon = false;
}
void EnvironmentFromPlanets(const DayNight::DNInfo&d,const DayNight::DNPlanets&p,float weight,double seconds,int map,int zone,Source::WeatherKind weather,NativeFrame&n){auto vector=[&](const DayNight::DNPlanet&v){return HD::DayNightMath::Direction{v.m_position.x-d.m_cameraPos.x,v.m_position.y-d.m_cameraPos.y,v.m_position.z-d.m_cameraPos.z};};auto sun=HD::DayNightMath::Normalize(vector(p.m_sun));auto moon=HD::DayNightMath::Normalize(vector(p.m_moon));float w=std::isfinite(weight)?std::clamp(weight,0.f,1.f):0;auto light=HD::DayNightMath::Blend(moon,sun,w);float l[3]={float(light.x),float(light.y),float(light.z)};EnvironmentFromDayNight(d,seconds,map,zone,l,weather,n);n.environment.sunElevation=float(sun.z);n.environment.moonElevation=float(moon.z);n.environment.lightIsMoon=w<.5f;n.dayLightWeight=w;}
void AdaptForeverFog(const HD::ForeverFog&fog,float w,const float*player,NativeFrame&n,float den,float sun,float ambient){n.authored={};n.authored.layerCount=std::clamp(fog.count,0,3);n.authored.coverage=std::clamp(w,0.f,1.f);n.hasAuthored=n.authored.layerCount>0&&w>0;n.smoothAuthoredWeights=true;
 for(int i=0;i<n.authored.layerCount;++i){auto&from=fog.layers[i];auto&to=n.authored.layers[i];float relative=HD::FogRelativeHeightWeight(from);for(int k=0;k<3;++k){to.diffuse[k]=from.diffuse[k]*std::pow(.88f*std::clamp(sun,0.f,5.f),1/2.2f);to.emissive[k]=from.emissive[k]*std::pow(.034f*std::clamp(ambient,0.f,5.f),1/2.2f);to.shadowEmissive[k]=from.shadow[k]*std::pow(.034f*std::clamp(ambient,0.f,5.f),1/2.2f);}to.flags=uint32_t(from.flags)&~2u;to.start=from.start;to.density=from.density*.35f*std::clamp(den,0.f,5.f)*std::clamp(w,0.f,1.f);to.shadowMultiplier=from.shadowMul;to.upperDensity=from.topRate;to.upperHeight=from.topHeight+relative*player[2];to.lowerDensity=from.bottomRate;to.lowerHeight=from.bottomHeight+relative*player[2];to.intensity=from.intensity;to.g=from.g;to.strength=from.strength;to.exponent=from.exponent;n.shadowWeights[i]=HD::FogShadowWeight(from);}
}
bool MatchCatalogueEmitter(const Source::LampCatalog&cat,int map,const float*p,uint32_t&id,float tolerance){if(!p||!std::isfinite(tolerance)||tolerance<=0||tolerance>1)return false;for(int k=0;k<3;++k)if(!std::isfinite(p[k]))return false;auto*m=cat.Map(map);if(!m)return false;unsigned matches=0;Source::ForEachLampNear(*m,p[0],p[1],tolerance,[&](uint32_t i,const Source::lampfile::Lamp&l){float d=0;for(int k=0;k<3;++k){float a=p[k]-l.position[k];d+=a*a;}if(d<=tolerance*tolerance){id=i;++matches;}});return matches==1;}
}
