#include "WoW/Source/WorldClient/HD/HdGpuFixed.h" // Claude voie B
#include "Engine/Source/Base/HdCpuF.h" // CPU-F
#include <array>
#include <cstdlib>
#include "WoW/Source/WorldClient/ShadowQuery.h"
#ifdef WOWDECOMP_VULKAN
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanShadowHooks.h"
#endif
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Storm/H/storm.h"
#include <cmath>
#include <cstring>
#include <algorithm> // HD: hdShadowBillboard
#include <vector> // HD: hdShadowBillboard
#include <cstdio> // Claude 2026-11-08 lot RM1: hdSunBigRockList
#include <unordered_map> // Claude 2026-11-08 lot RM2: buried rocks
#include <string> // Claude 2026-11-13 lot LV5-SH1: vegetation names
#include <cctype> // Claude 2026-11-13 lot LV5-SH1
#include "Engine/Source/Model2/M2Data.h" // Claude 2026-11-13 lot LV5-SH1: leaf-card materials
#include "Engine/Source/Tempest/CMath.h" // Claude 2026-11-08 lot RM2
#include <xmmintrin.h> // Claude 2026-11-05 lot S4: _mm_prefetch
#include "Engine/Source/Model2/M2Light.h"
#include "Engine/Source/Model2/M2Scene.h" // GPT CACHE1b: viewInv
#include "Engine/Source/Services/Texture.h" // GPT CACHE1b: TextureGetGxTex
#include "Engine/Source/Gx/CGxTex.h" // Claude CACHE1d: texture content generation
#include "Engine/Source/ShaderEffect/ShadowCache.h"
#include "WoW/Source/WorldClient/HD/HdCataRenderPerf.h" // Claude 2026-11-04 lot S1
#include "WoW/Source/WorldClient/HD/HdParallel.h" // Claude PARQ1
#include <unordered_set> // Claude PARQ1: check
#include <intrin.h> // Claude PARQ1: _InterlockedExchange8
#include "WoW/Source/ObjectMgrClient/ObjectMgrClient.h"
#include "WoW/Source/Object/ObjectClient/Object_C.h"
#include "WoW/Source/UIUtil/Camera.h"
#include "WoW/Source/Ui/WorldFrame.h"
#include "WoW/Source/WorldClient/CPortalView.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "WoW/Source/WorldClient/Map.h"
#include "WoW/Source/WorldClient/MapLight.h"
#include "WoW/Source/WorldClient/World.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gxu/Gxu.h"
#include "Engine/Source/ShaderEffect/ShaderEffect.h"
#include "Engine/Source/Tempest/CAaBox.h"
#include "WoW/Source/WorldClient/CWorldOcclusion.h"
#include "Engine/Source/Gx/Gx.h"
#include "Engine/Source/ShaderEffect/ShaderEffectManager.h"
#include "Engine/Source/Tempest/CRect.h"
#include "WoW/Source/WorldClient/MapObj.h"
#include "Engine/Source/Model2/M2Shared.h"
#include "Engine/Source/Tempest/CFrustum.h"
#include "WoW/Source/WorldClient/MapEntity.h"
#include "Engine/Source/Tempest/CiRect.h"
#include "WoW/Source/WorldClient/MapArea.h"
#include "WoW/Source/WorldClient/MapChunk.h"
#include "WoW/Source/WorldClient/MapDoodadDef.h"
#include "WoW/Source/WorldClient/MapObjDef.h"
#include "WoW/Source/WorldClient/MapObjGroup.h"
#include "WoW/Source/WorldClient/CMapBaseObjLink.h"
#include "WoW/Source/WorldClient/HD/HdTime.h"
#include "WoW/Source/WorldClient/HD/HdLightTrace.h" // Claude LT2
extern void (*g_hdShadowTrace)(const char*,float); // Claude LT2 (ShadowCache.cpp)

// STATIC: 0x00D25300
uint8_t CShadowQuery::s_stamp;

// STATIC: 0x00D2538C
static uint32_t s_maxTexturedBatches;

// STATIC: 0x00D25390
static uint32_t s_maxUntexturedBatches;

// STATIC: 0x00D25304
float CShadowQuery::s_cutoffHeight;

// STATIC: 0x00D25320
ShadowQueryBuffers CShadowQuery::s_bandBuffers[3];

// Claude 2026-11-08 lot RM1: the terrain itself is never drawn in the sun shadow maps (RenderCallback only draws WMO
// groups and M2 batches). The dark zigzags at the foot of the hills (Tanaris) come from big rock / cliff M2 models set
// into the hills: their parts under the ground still cast in the map, since the ground does not hide them there.
//   hdSunBigRock N     : with the Vulkan sun shadows, an M2 doodad without leaf cards (no billboard bone: not a tree) whose
//                        radius is above N yards casts no sun shadow. 0 = off (exactly as before RM1). Default 15.
//   hdSunBigRockList 1 : once, writes Logs\soleil-gros-modeles.txt (every caster of 4 yd or more: band, radius, leaves,
//                        removed or kept, file name), then goes back to 0.
// Small rocks, trees, buildings (WMO), characters and the grass (detail doodads, not in these maps) are not touched.
// Claude 2026-11-08 lot RM2: the Tanaris hills are terrain with the SAME small rocks (tanarisrock02/03, 5 to 8 yd) sunk into
// them (hdSunBigRockList, 8 nov). Their sunk parts cast the zigzags; their size alone cannot tell them from a rock lying on
// the sand. So, anywhere in the world:
//   hdSunBuriedRock F  : an M2 doodad without leaf cards whose box is buried in the terrain by at least F of its height
//                        (highest ground under 9 points of its footprint) casts no sun shadow. 0 = off. Default .5.
//                        A rock lying on the ground (sunk 10 to 30 %) keeps its shadow. Computed once per doodad.
namespace {
    CVar* s_hdSunBigRock = nullptr;
    CVar* s_hdSunBigRockList = nullptr;
    CVar* s_hdSunBuriedRock = nullptr; // Claude 2026-11-08 lot RM2
    // Claude 2026-11-08 lot RM4: hdSunCasters, which kinds of objects go into the sun shadow maps (Vulkan sun shadows only).
    //   1 = models on the ground (rocks, props), 2 = buildings/WMO pieces, 4 = models inside a WMO, 8 = units and game
    //   objects. Default 15 = all, as before. Any change of hdSunCasters/hdSunBigRock/hdSunBuriedRock redraws every band
    //   at once (no need to walk). hdSunBigRockList now lists every band and the WMO pieces and objects too.
    CVar* s_hdSunCasters = nullptr;
    CVar* s_hdSunBuriedSlope = nullptr; // Claude 2026-11-12 lot OB1
    FILE* s_hdBigRockFile = nullptr;
    // Claude 2026-11-13 lot LV5-SH1: hdSunTreeNames 1 (default) = a model counts as a tree/vegetation, and is never
    // removed by hdSunBigRock/hdSunBuriedRock, if it has billboard bones OR its file name / folder names vegetation
    // (tree, pine, palm, bush...) OR it has an alpha-key material (leaf cards) and its name is not a rock/cliff.
    // 0 = before LV5-SH1 (billboard bones only: many trees without billboard bones lost their sun shadow).
    CVar* s_hdSunTreeNames = nullptr;
    std::unordered_map<const CM2Shared*, bool> s_hdVegetation;

    bool HdHasWord(const std::string& s, const char* const* words, size_t count) {
        for (size_t i = 0; i < count; ++i) if (s.find(words[i]) != std::string::npos) return true;
        return false;
    }

    // Vegetation by name: file name (not the zone folders: "Stranglethorn" is not a thorn bush) and its own folder.
    // A rock/cliff/boulder name wins over a weak plant word (CrystalSongAspenRock), but never over "tree" (RockTree).
    int HdNameKind(const char* path, bool& rockName) {
        rockName = false;
        if (!path || !*path) return 0;
        std::string p(path);
        for (char& ch : p) { if (ch == '/') ch = '\\'; ch = static_cast<char>(std::tolower(static_cast<unsigned char>(ch))); }
        const size_t slash = p.find_last_of('\\');
        const std::string file = slash == std::string::npos ? p : p.substr(slash + 1);
        std::string folder;
        if (slash != std::string::npos && slash > 0) {
            const size_t prev = p.find_last_of('\\', slash - 1);
            folder = p.substr(prev == std::string::npos ? 0 : prev + 1, slash - (prev == std::string::npos ? 0 : prev + 1));
        }
        static const char* const kRock[] = { "rock", "cliff", "boulder", "crag", "mesa", "mountain" };
        static const char* const kVeg[] = { "tree", "pine", "palm", "bush", "shrub", "plant", "fern", "willow", "oak", "birch",
            "cedar", "conifer", "canopy", "foliage", "leaf", "leaves", "bamboo", "cactus", "cacti", "mushroom", "shroom", "sapling",
            "hedge", "kelp", "seaweed", "flower", "frond", "branch", "grass", "bramble", "stump", "trunk", "sequoia", "redwood",
            "maple", "spruce", "juniper", "aspen", "mangrove", "weed", "lily", "cattail", "sunflower", "wheat", "pumpkin",
            "thornbush", "briar", "reeds", "toadstool" };
        static const char* const kVegFolder[] = { "tree", "bush", "plant", "shrub", "shroom", "fern", "foliage", "palm", "cact",
            "canop", "leaves", "grass", "stump", "kelp", "seaweed", "bamboo", "reed", "hedge", "sapling", "flower" };
        rockName = HdHasWord(file, kRock, sizeof(kRock) / sizeof(kRock[0]));
        const bool vine = file.find("vine") != std::string::npos && file.find("ravine") == std::string::npos;
        bool veg = HdHasWord(file, kVeg, sizeof(kVeg) / sizeof(kVeg[0])) || vine ||
                   (!folder.empty() && HdHasWord(folder, kVegFolder, sizeof(kVegFolder) / sizeof(kVegFolder[0])));
        // a rock word only beats a weak plant word (CrystalSongAspenRock), never a clear one (RockTree, MountainBush)
        static const char* const kStrong[] = { "tree", "bush", "palm", "pine", "shrub", "fern", "plant", "mushroom", "cact" };
        if (rockName && !HdHasWord(file, kStrong, sizeof(kStrong) / sizeof(kStrong[0]))) veg = false;
        return veg ? 1 : 0;
    }

    // Claude CPU-D: bumped whenever a cache below is emptied (a decision read from it before then is not reused).
    uint32_t s_hdSkipCacheGen = 0;

    // true = tree/vegetation: hdSunBigRock/hdSunBuriedRock never remove it. Not cached until the model is loaded.
    bool HdIsVegetation(CM2Model* model) {
        if (model->GetBillboardBoneCount() != 0) return true;
        if (!s_hdSunTreeNames || s_hdSunTreeNames->m_intValue == 0) return false;
        const CM2Shared* shared = model->m_shared;
        if (!shared) return false;
        auto it = s_hdVegetation.find(shared);
        if (it != s_hdVegetation.end()) return it->second;
        bool rockName = false;
        bool veg = HdNameKind(shared->m_fileName, rockName) != 0;
        if (!veg && !rockName) {
            const M2Data* data = shared->m_data;
            if (!data) return false; // not loaded yet: decided at a later query
            for (uint32_t i = 0; i < data->m_materials.m_count; ++i)
                if (data->m_materials[i].m_blendMode == 1) { veg = true; break; } // alpha key: leaf cards
        }
        if (s_hdVegetation.size() > 65536) { s_hdVegetation.clear(); ++s_hdSkipCacheGen; }   // Claude CPU-D
        s_hdVegetation[shared] = veg;
        return veg;
    }

    // Claude 2026-11-08 lot RM2: ground height at (x, y), terrain triangles only (same steps as the Lumen relief probe,
    // HdLumenBridge.cpp ProbeHeight, minus the buildings). false: area not loaded, a hole, outside the world, a dungeon.
    bool HdGroundHeight(float x, float y, float top, float& height) {
        if (CMap::bDungeon || !std::isfinite(x) || !std::isfinite(y)) return false;
        const float chunkY = -(y - 17066.666f) * .24f;
        const float chunkX = .24f * -(x - 17066.666f);
        if (!(chunkX >= .5f && chunkY >= .5f && chunkX < 8191.5f && chunkY < 8191.5f)) return false;
        const int32_t cellY = CMath::fint_(chunkY - .5f);
        const int32_t cellX = CMath::fint_(chunkX - .5f);
        CMapArea* area = CMap::m_areaTable[64 * ((cellX >> 7) & 0x3F) + ((cellY >> 7) & 0x3F)];
        if (!area || area->m_asyncObject) return false;
        CMapChunk* chunk = area->m_mapChunks[((cellY >> 3) & 0xF) + 16 * ((cellX >> 3) & 0xF)];
        if (!chunk) return false;
        C3Vector pos(x, y, top);
        float h = -100000.0f;
        if (!CMap::GetHeightTerrain(chunk, pos, cellY, cellX, &h) || !std::isfinite(h)) return false;
        height = h;
        return true;
    }

    // Claude 2026-11-12 lot OB1: + slope, the relief under the doodad (height range / footprint width, 5 x 5 points
    // over the whole footprint). A part sunk in FLAT ground can never cast a false shadow: a ray from a lit ground point
    // toward the sun only goes up and never meets it. Only a doodad set into a slope (rocks in the Tanaris hills) can.
    struct HdBuriedEntry { float bottom; float top; float fraction; float slope; };
    std::unordered_map<const CMapDoodadDef*, HdBuriedEntry> s_hdBuried;

    // Fraction of the doodad's box height under the highest ground of its footprint (0 = on the ground or unknown).
    // Claude OB1: also gives the slope of the ground under it (0 = flat or unknown).
    float HdBuriedFraction(const CMapDoodadDef* doodad, float* slopeOut = nullptr) {
        if (slopeOut) *slopeOut = 0.0f;
        const CAaBox& box = doodad->m_bbox;
        const float height = box.t.z - box.b.z;
        if (!(height > .25f)) return 0.0f;
        auto it = s_hdBuried.find(doodad);
        if (it != s_hdBuried.end() && it->second.bottom == box.b.z && it->second.top == box.t.z) {
            if (slopeOut) *slopeOut = it->second.slope;
            return it->second.fraction;
        }
        const float cx = (box.b.x + box.t.x) * .5f, cy = (box.b.y + box.t.y) * .5f;
        const float hx = (box.t.x - box.b.x) * .35f, hy = (box.t.y - box.b.y) * .35f; // inside the footprint, not the neighbours
        static const float kOffsets[9][2] = { {0, 0}, {-1, -1}, {0, -1}, {1, -1}, {-1, 0}, {1, 0}, {-1, 1}, {0, 1}, {1, 1} };
        float ground = -100000.0f;
        int found = 0;
        for (const auto& o : kOffsets) {
            float h;
            if (HdGroundHeight(cx + o[0] * hx, cy + o[1] * hy, box.t.z + 500.0f, h)) { ground = std::max(ground, h); ++found; }
        }
        if (found < 5) return 0.0f; // ground not loaded yet: not cached, asked again at the next query
        const float fraction = std::clamp((ground - box.b.z) / height, 0.0f, 1.0f);
        // Claude OB1: relief over the whole footprint (5 x 5 points, edges included)
        const float ex = (box.t.x - box.b.x) * .5f, ey = (box.t.y - box.b.y) * .5f;
        float lo = 100000.0f, hi = -100000.0f;
        int slopeFound = 0;
        for (int i = -2; i <= 2; ++i) {
            for (int j = -2; j <= 2; ++j) {
                float h;
                if (HdGroundHeight(cx + i * .5f * ex, cy + j * .5f * ey, box.t.z + 500.0f, h)) { lo = std::min(lo, h); hi = std::max(hi, h); ++slopeFound; }
            }
        }
        const float width = 2.0f * std::max(std::max(ex, ey), .5f);
        const float slope = slopeFound >= 9 ? (hi - lo) / width : 0.0f;
        if (s_hdBuried.size() > 65536) { s_hdBuried.clear(); ++s_hdSkipCacheGen; }   // Claude CPU-D
        s_hdBuried[doodad] = HdBuriedEntry{ box.b.z, box.t.z, fraction, slope };
        if (slopeOut) *slopeOut = slope;
        return fraction;
    }

    void HdBigRockRegister() {
        static bool registered = false;
        if (registered) return;
        registered = true;
        s_hdSunBigRock = CVar::Register("hdSunBigRock", "HD (Claude RM1): rocks and cliffs (models without leaves) larger than this radius in yards cast no sun shadow (zigzags at the foot of the hills); 0 = off", 1, "15", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_hdSunCasters = CVar::Register("hdSunCasters", "HD (Claude RM4): what casts sun shadows, add up: 1 models on the ground (rocks), 2 buildings/WMO, 4 models inside WMO, 8 units/objects; 15 = all", 1, "15", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_hdSunBuriedRock = CVar::Register("hdSunBuriedRock", "HD (Claude RM2): rocks and cliffs (models without leaves) buried in the ground by at least this fraction of their height cast no sun shadow (the zigzags along the hills); 0 = off, default .5", 1, "0.5", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_hdSunBuriedSlope = CVar::Register("hdSunBuriedSlope", "HD (Claude OB1): hdSunBigRock/hdSunBuriedRock only remove a model set into a slope steeper than this (height / width under it); on flatter ground it keeps its shadow (bones, cacti, fences in the sand); 0 = remove everywhere (before OB1), default .35", 1, "0.35", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_hdSunBigRockList = CVar::Register("hdSunBigRockList", "HD (Claude RM1): 1 = write once the big shadow casters around you in Logs\\soleil-gros-modeles.txt", 0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        // Claude 2026-11-13 lot LV5-SH1
        s_hdSunTreeNames = CVar::Register("hdSunTreeNames", "HD (Claude LV5-SH1): 1 = trees/vegetation (billboard bones, vegetation name, or leaf-card material) never lose their sun shadow to hdSunBigRock/hdSunBuriedRock; 0 = billboard bones only (before)", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    }

    bool HdCasterKind(int32_t kind) {
#ifdef WOWDECOMP_VULKAN
        if (!HD::VulkanShadows::FullCasters()) return true;
        HdBigRockRegister();
        return !s_hdSunCasters || (s_hdSunCasters->m_intValue & kind) != 0;
#else
        (void)kind;
        return true;
#endif
    }

    bool HdSkipBigRock(const CShadowCacheQueryData& data, int32_t band, const CMapDoodadDef* doodad, CM2Model* model) {
#ifdef WOWDECOMP_VULKAN
        if (!HD::VulkanShadows::FullCasters()) return false;
        HdBigRockRegister();
        const float limit = s_hdSunBigRock ? s_hdSunBigRock->m_floatValue : 0.0f;
        const float radius = doodad->m_sphere.r;
        const bool leaves = HdIsVegetation(model); // Claude 2026-11-13 lot LV5-SH1 (was: model->GetBillboardBoneCount() != 0)
        const float buriedLimit = s_hdSunBuriedRock ? s_hdSunBuriedRock->m_floatValue : 0.0f;
        const bool buriedOn = std::isfinite(buriedLimit) && buriedLimit > 0.0f && !leaves;
        const bool bigOn = std::isfinite(limit) && limit > 0.0f && !leaves && radius > limit;
        const float slopeLimit = s_hdSunBuriedSlope ? s_hdSunBuriedSlope->m_floatValue : 0.0f;
        const bool slopeOn = std::isfinite(slopeLimit) && slopeLimit > 0.0f; // Claude OB1
        float slope = 0.0f;
        const float buried = buriedOn || bigOn || s_hdBigRockFile ? HdBuriedFraction(doodad, &slope) : 0.0f;
        // Claude OB1: a big or sunk model on flat ground keeps its shadow (its sunk part cannot cast a false one there)
        const bool onSlope = !slopeOn || slope >= slopeLimit;
        const bool skip = onSlope && (bigOn || (buriedOn && buried >= buriedLimit));
        if (s_hdBigRockFile) {
            const C3Vector& c = doodad->m_sphere.c;
            const C3Vector& o = data.m_pos[band];
            const float dx = c.x - o.x, dy = c.y - o.y;
            const char* name = model->m_shared ? model->m_shared->m_fileName : "?";
            std::fprintf(s_hdBigRockFile, "bande %d | rayon %6.1f yd | a %6.0f yd | enterre %3.0f %% | pente %4.2f | vegetation %s | %s | %s\n", band, radius, std::sqrt(dx * dx + dy * dy), buried * 100.0f, slope, leaves ? "oui" : "non", skip ? "RETIRE" : "garde ", name);
        }
        return skip;
#else
        (void)data; (void)band; (void)doodad; (void)model;
        return false;
#endif
    }

    // Claude voie B: what the registry's answers rest on. HdSkipBigRock's answer for a doodad (its caches, its cvars): a
    // change empties the registry. The band parameters of the GPU's tests, from the same data the CPU tests read.
    uint32_t HdGpuFixedSkipGen() {
        HdBigRockRegister();
        uint32_t h = s_hdSkipCacheGen * 2654435761u;
        auto mix = [&h](float v) { uint32_t u; std::memcpy(&u, &v, 4); h = (h ^ u) * 16777619u; };
        mix(s_hdSunBigRock ? s_hdSunBigRock->m_floatValue : 0.0f);
        mix(s_hdSunBuriedRock ? s_hdSunBuriedRock->m_floatValue : 0.0f);
        mix(s_hdSunBuriedSlope ? s_hdSunBuriedSlope->m_floatValue : 0.0f);
        h = (h ^ (s_hdSunCasters ? static_cast<uint32_t>(s_hdSunCasters->m_intValue) : 0xFFFFFFFFu)) * 16777619u;
        return h;
    }

    // Claude CPU-D: HdSkipBigRock's answer read without writing anything, for the query's worker threads (phase A, while
    // the main thread only reads too): the same statements on the same values, the caches only looked up. -1 = it is
    // not known so (a cache would have to be filled, or the list file is open): the main thread asks HdSkipBigRock.
    // HdBigRockRegister has run on the main thread before. `control` (the proof's control): the burial limit and the slope
    // rule forgotten (every model that is no plant and has a burial known is removed), which the proof must count.
    int HdSkipBigRockPeek(const CMapDoodadDef* doodad, CM2Model* model, bool control) {
#ifdef WOWDECOMP_VULKAN
        if (!HD::VulkanShadows::FullCasters()) return 0;
        if (s_hdBigRockFile) return -1;
        const float limit = s_hdSunBigRock ? s_hdSunBigRock->m_floatValue : 0.0f;
        const float radius = doodad->m_sphere.r;
        bool leaves = false;
        if (model->GetBillboardBoneCount() != 0) leaves = true;
        else if (s_hdSunTreeNames && s_hdSunTreeNames->m_intValue != 0) {
            const CM2Shared* shared = model->m_shared;
            if (shared) {
                auto it = s_hdVegetation.find(shared);
                if (it == s_hdVegetation.end()) return -1;
                leaves = it->second;
            }
        }
        const float buriedLimit = s_hdSunBuriedRock ? s_hdSunBuriedRock->m_floatValue : 0.0f;
        const bool buriedOn = std::isfinite(buriedLimit) && buriedLimit > 0.0f && !leaves;
        const bool bigOn = std::isfinite(limit) && limit > 0.0f && !leaves && radius > limit;
        const float slopeLimit = s_hdSunBuriedSlope ? s_hdSunBuriedSlope->m_floatValue : 0.0f;
        const bool slopeOn = std::isfinite(slopeLimit) && slopeLimit > 0.0f;
        float slope = 0.0f;
        float buried = 0.0f;
        if (buriedOn || bigOn) {
            const CAaBox& box = doodad->m_bbox;
            const float height = box.t.z - box.b.z;
            if (height > .25f) {
                auto it = s_hdBuried.find(doodad);
                if (it == s_hdBuried.end() || it->second.bottom != box.b.z || it->second.top != box.t.z) return -1;
                slope = it->second.slope;
                buried = it->second.fraction;
            }
        }
        const bool onSlope = !slopeOn || slope >= slopeLimit;
        const bool skip = control ? (bigOn || (buriedOn && buried >= 0.0f)) : onSlope && (bigOn || (buriedOn && buried >= buriedLimit));
        return skip ? 1 : 0;
#else
        (void)doodad; (void)model; (void)control;
        return 0;
#endif
    }
}


namespace {
    CVar* s_farShadowCheck = nullptr;
    CVar* s_shadowStaticProfile = nullptr;
    CVar* s_shadowStaticCache = nullptr;
    CVar* s_shadowStaticSunDeg = nullptr;
    CVar* s_shadowStaticCheck = nullptr;
    CVar* s_shadowStaticShow = nullptr;
    CVar* s_shadowStaticGroups = nullptr;

    struct ShadowCandidateFlags {
        std::vector<uint8_t> untextured;
        std::vector<uint8_t> textured;
    };
    ShadowCandidateFlags s_shadowCandidateFlags[3];

    // Claude CACHE1d: while the static cache is on, the fixed models (same test as the cache) are drawn
    // camera-independent in every sun shadow pass (HD::ShadowWorld). Filled by the gathers of this frame.
    bool s_worldFrame = false;
    // Claude CACHE1e: a 64-bit frame stamp in two spare words of the model (zeroed by its constructor) instead of a
    // hash set: same answer, without the 8k inserts and lookups per frame. It never wraps.
    // unused_0016 holds what was decided for the model in the frame of the stamp: bit 0 decided, bit 1 fixed
    // (IsStaticShadowCandidate), bit 2 drawn camera-independent. The answer cannot change inside one frame: the
    // shadow passes do not animate or move anything.
    uint64_t s_worldStamp = 0;
    bool SeenThisFrame(const CM2Model* model) {
        return s_worldStamp && model->unused_02EC == uint32_t(s_worldStamp) && model->unused_007C == uint32_t(s_worldStamp >> 32);
    }
    bool IsWorldShadowModel(const CM2Model* model) { return SeenThisFrame(model) && (model->unused_0016 & 4); }
    // Claude CACHE1d (diagnostic): light view * projection around the band centre, as last drawn, to find the models
    // under the texels of a failed proof.
    C44Matrix s_lastOriginViewProj[3];
    C3Vector s_lastOrigin[3];

    template<class T>
    bool FixedShadowTrack(const M2Track<T>& track) {
        const auto& keys = track.m_sequenceKeys;
        return keys.m_count == 0 || (track.m_loopIndex == 0xFFFF && keys.m_count == 1
            && keys[0].m_count <= 1);
    }

    // GPT CACHE1b: the animation tracks of a model file never change once it is loaded, so the answer is kept per
    // CM2Shared in a small direct-mapped table (no hashing: the lookup must cost less than the check itself).
    struct SharedFixedEntry { const CM2Shared* shared; const M2Data* data; uint8_t fixed; };
    thread_local SharedFixedEntry s_sharedFixed[4096]; // Claude PARQ2: one per thread (the gather workers decide too)

    bool SharedTracksFixed(const CM2Shared* shared, const M2Data& data) {
        SharedFixedEntry& entry = s_sharedFixed[(reinterpret_cast<uintptr_t>(shared) >> 5) & 4095];
        if (entry.shared == shared && entry.data == &data) return entry.fixed != 0;
        bool fixed = true;
        // Only bone 0 matters here. A batch that draws with other bones is refused one level down, so a tree
        // whose trunk is on bone 0 keeps its trunk in the layer while its swaying leaves stay in the dynamic pass.
        if (data.m_bones.m_count) {
            const auto& bone = data.m_bones[0];
            fixed = FixedShadowTrack(bone.m_translationTrack) && FixedShadowTrack(bone.m_rotationTrack)
                && FixedShadowTrack(bone.m_scaleTrack);
        }
        for (uint32_t i = 0; fixed && i < data.m_colors.m_count; ++i)
            fixed = FixedShadowTrack(data.m_colors[i].m_alpha);
        for (uint32_t i = 0; fixed && i < data.m_textureWeights.m_count; ++i)
            fixed = FixedShadowTrack(data.m_textureWeights[i].m_weight);
        for (uint32_t i = 0; fixed && i < data.m_textureTransforms.m_count; ++i) {
            const auto& track = data.m_textureTransforms[i];
            fixed = FixedShadowTrack(track.m_translation) && FixedShadowTrack(track.m_rotation)
                && FixedShadowTrack(track.m_scaling);
        }
        entry = { shared, &data, static_cast<uint8_t>(fixed) };
        return fixed;
    }

    // GPT CACHE1: only consider map doodads and exclude ambiguous animation tracks.
    // mainAnimated: the main render already ran the full Animate on this model this frame, so bone 0 may carry a
    // bone transform. Otherwise AnimateSM has just written bone 0 = world * view exactly and no check is needed.
    bool IsStaticShadowCandidate(const CM2Model& model, bool mainAnimated) {
        if (!(model.m_fFlags & 1) || model.m_alpha != 1.0f || model.m_attachParent
            || !model.m_shared || !model.m_shared->m_data || model.GetBillboardBoneCount())
            return false;
        if (!model.m_boneMatrices || !model.m_scene) return false;
        if (!SharedTracksFixed(model.m_shared, *model.m_shared->m_data)) return false;
        // GPT CACHE1b: bone 0 must be the plain world * view matrix. Compared back in world space so the
        // camera does not matter: the camera only adds float noise, which is far below these limits.
        if (mainAnimated) {
            const C44Matrix back = model.m_boneMatrices[0] * model.m_scene->m_viewInv;
            const C44Matrix& w = model.m_worldTransform;
            const float rows[12][2] = {
                { back.a0, w.a0 }, { back.a1, w.a1 }, { back.a2, w.a2 },
                { back.b0, w.b0 }, { back.b1, w.b1 }, { back.b2, w.b2 },
                { back.c0, w.c0 }, { back.c1, w.c1 }, { back.c2, w.c2 },
                { back.d0, w.d0 }, { back.d1, w.d1 }, { back.d2, w.d2 } };
            for (int i = 0; i < 12; ++i) {
                const float limit = i >= 9 ? 0.05f : 0.001f;
                if (!(std::fabs(rows[i][0] - rows[i][1]) <= limit)) return false;
            }
        }
        return true;
    }

    // Claude PARQ2: while the query defers its gathers, a gather is only written down here (same arguments, same order)
    // and done at the end of the query by HdRunDeferredGathers.
    struct HdGatherReq {
        CM2Model* model;
        int32_t band;
        bool mapDoodad;
        bool candidate;        // the cache decision of the original, made in the serial pass
        bool modelCacheable;
        uint32_t u0, u1, t0, t1; // the request's batches in its group's lists
        uint32_t part;           // its group (kHdParts = main thread)
    };
    bool s_hdDefer = false;
    std::vector<HdGatherReq> s_hdReqs;

    void GatherShadowBatches(CM2Model* model, int32_t band, bool mapDoodad) {
        if (s_hdDefer) {
            s_hdReqs.push_back({ model, band, mapDoodad, false, false, 0, 0, 0, 0, 0 });
            return;
        }
        using namespace HD::CataRenderPerf;
        Scope timer(Stage::ShadowQGatherCall);
        Add(Counter::ShadowQGathers);
        auto& buffers = CShadowQuery::s_bandBuffers[band];
        const uint32_t firstUntextured = buffers.m_untextured.m_count;
        const uint32_t firstTextured = buffers.m_textured.m_count;
        const bool mainAnimated = model->m_scene && model->m_frameStamp == model->m_scene->m_frameStamp;
        model->GatherModelBatchesShadowMap(buffers.m_untextured, buffers.m_textured);

        const bool cache = CShadowCache::IsCollectingStaticLayers();
        const bool split = CShadowCache::IsSplitCheckFrame() || cache;
        const bool profile = s_shadowStaticProfile && s_shadowStaticProfile->m_intValue && Enabled();
        if (!split && !profile && !s_worldFrame) return;

        bool candidate = false;
        if (mapDoodad) {
            if (!s_worldFrame) {
                candidate = IsStaticShadowCandidate(*model, mainAnimated);
            } else if (SeenThisFrame(model) && (model->unused_0016 & 1)) {
                candidate = (model->unused_0016 & 2) != 0; // Claude CACHE1e: already decided in another band
            } else {
                candidate = IsStaticShadowCandidate(*model, mainAnimated);
                model->unused_02EC = uint32_t(s_worldStamp);
                model->unused_007C = uint32_t(s_worldStamp >> 32);
                // Claude CACHE1d: a fixed model is drawn camera-independent in all the passes of this frame.
                model->unused_0016 = uint16_t(1 | (candidate ? 2 : 0)
                    | (candidate && !model->m_optGeo && model->m_boneMatrices ? 4 : 0));
            }
        }
        if (!split && !profile) return;
        auto& flags = s_shadowCandidateFlags[band];
        // Claude CACHE1e: what does not depend on the batch is decided once per model (same result as before).
        bool modelCacheable = false;
        if (cache && candidate && s_worldFrame && !model->m_optGeo && model->m_boneMatrices) {
            const auto* shared = model->m_shared;
            // Do not cache a missing draw while meshes are being initialized or reset.
            modelCacheable = shared->m_indexBuf && shared->m_indexBuf->m_valid && shared->m_indexBuf->m_hasData
                && shared->m_vertexBuf && shared->m_vertexBuf->m_valid && shared->m_vertexBuf->m_hasData;
        }
        const bool counting = Enabled();
        auto classify = [&](const CModelBatchList& list, uint32_t first, std::vector<uint8_t>& result) {
            if (split) result.resize(list.m_count);
            if (!split && !candidate) {
                if (counting) Add(Counter::ShadowDynamicCandidates, list.m_count - first);
                return;
            }
            uint32_t fixed = 0, cacheableCount = 0;
            const auto* shared = model->m_shared;
            for (uint32_t i = first; i < list.m_count; ++i) {
                const bool isFixed = candidate && list.m_batches[i].m_model == model;
                fixed += isFixed;
                if (split) {
                    bool cacheable = false;
                    // GPT CACHE1b: alpha-tested batches (textured list) are cached too. Their texture is part of
                    // the key (StaticShadowKey), so a texture that finishes loading rebuilds the layer.
                    if (modelCacheable && isFixed) {
                        const auto& batch = shared->m_skinData->m_batches[list.m_batches[i].m_batchIndex];
                        const auto& section = shared->m_skinSections[batch.m_skinSectionIndex];
                        const auto& combos = shared->m_data->m_boneCombos;
                        // Claude CACHE1d: bone 0 alone, the sections drawn camera-independent
                        // (HD::ShadowWorld::WorldSection). A section without bone draws with whatever
                        // world-view matrix the previous draw left, so it stays with the mobile casters.
                        cacheable = section.m_boneCount == 1 && section.m_boneComboIndex < combos.m_count
                            && combos[section.m_boneComboIndex] == 0;
                    }
                    cacheableCount += cacheable;
                    result[i] = cache ? cacheable : isFixed;
                }
            }
            if (counting) {
                Add(Counter::ShadowStaticCacheable, cacheableCount);
                Add(Counter::ShadowStaticCandidates, fixed);
                Add(Counter::ShadowDynamicCandidates, list.m_count - first - fixed);
            }
        };
        classify(buffers.m_untextured, firstUntextured, flags.untextured);
        classify(buffers.m_textured, firstTextured, flags.textured);
    }

    // ---------------------------------------------------------------------------------------------------------------
    // Claude PARQ2 (17 nov 2026): the sun gathers on several cores, same lists to the bit.
    // The query writes its gathers down (s_hdReqs) instead of doing them (same arguments, same order). At its end:
    //   1. workers: the models are split into 8 groups by their address, so a model always goes to the same worker,
    //      which does its requests in the original order. For a "simple" model (no attach parent, no attached child,
    //      no billboard bone, loaded) everything its gather writes is in itself (AnimateSM: bone 0, alpha, its own
    //      tracks; the CACHE1e decision in its spare words): the worker does the whole original gather of each request
    //      (HdPrepareShadowGather then HdCollectShadowBatches, the cache decision with the original statements) into
    //      its group's lists. A model's state when its batches are chosen is what it is in the original at that moment:
    //      only its own earlier requests wrote it.
    //   2. main thread, in the original order: the same for the other models (attachments, billboards, models still
    //      loading), whose gathers write into other models or allocate.
    //   3. main thread: every request's batches appended to its band list in the original order (same Add, same 0x2000
    //      cap), then the original classification (flags and counters) over its range.
    // hdShadowGatherThreads 0 = the original gathers inside the query. hdShadowGatherCheck 1 = every 121 queries (all
    // the queries of a frame in turn), the whole query is done again the original way and every list and flag is
    // compared (Logs\preuve-soleil.txt).
    CVar* s_hdGatherThreads = nullptr;
    CVar* s_hdGatherCheck = nullptr;

    uint32_t HdGatherThreads() {
        if (!s_hdGatherThreads) {
            s_hdGatherThreads = CVar::Register("hdShadowGatherThreads", "HD (Claude PARQ2): threads that help the sun gathers (same batches, same order, same lists); 0 = the original gathers on the main thread only", 1, "4", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
            s_hdGatherCheck = CVar::Register("hdShadowGatherCheck", "HD (Claude PARQ2, mesure seulement): 1 = toutes les 121 requetes, refait la requete d'origine et compare les listes (Logs\\preuve-soleil.txt); 0 = arret", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        }
        const int32_t n = s_hdGatherThreads->m_intValue;
        return n <= 0 ? 0u : (n > 15 ? 15u : static_cast<uint32_t>(n));
    }

    constexpr uint32_t kHdParts = 8;          // groups of models (worker jobs); group kHdParts = main thread
    constexpr uint32_t kHdChunkCap = 0x10000; // never reached (a band list stops at 0x2000); full = the original path
    struct HdChunkOut {
        std::vector<CModelBatch> u, t;
        std::vector<uint8_t> uCache, tCache; // the cacheable test of each batch (only while split)
        uint32_t uCount = 0, tCount = 0;
        bool full = false;
    };
    HdChunkOut s_hdChunks[kHdParts + 1];
    std::vector<uint32_t> s_cpuFRequests[kHdParts];
    HdChunkOut s_cpuFProofChunks[kHdParts];

    struct HdGatherCtx {
        bool split, cache, profile;
    };

    uint32_t HdPartOf(const CM2Model* model) {
        return static_cast<uint32_t>(((reinterpret_cast<uintptr_t>(model) >> 4) * 0x9E3779B97F4A7C15ull) >> 61);
    }

    // Everything the gather of this model writes is in the model itself (see AnimateSM, HdPrepareShadowGather).
    bool HdSimpleGather(const CM2Model* model) {
        return !model->m_attachParent && !model->m_attachList && (model->m_fFlags & 1) && model->m_shared
            && !model->m_shared->m_billboardBoneCount;
    }

    // The cacheable test of the original classify for one batch of the request (pure).
    bool HdBatchCacheable(const HdGatherReq& r, const CModelBatch& b) {
        if (!(r.modelCacheable && r.candidate && b.m_model == r.model)) return false;
        const auto* shared = r.model->m_shared;
        const auto& batch = shared->m_skinData->m_batches[b.m_batchIndex];
        const auto& section = shared->m_skinSections[batch.m_skinSectionIndex];
        const auto& combos = shared->m_data->m_boneCombos;
        return section.m_boneCount == 1 && section.m_boneComboIndex < combos.m_count && combos[section.m_boneComboIndex] == 0;
    }

    // One request: the original GatherShadowBatches, its batches into the group's lists instead of the band's.
    void HdGatherOne(HdGatherReq& r, const HdGatherCtx& ctx, HdChunkOut& out) {
        CM2Model* model = r.model;
        const bool mainAnimated = model->m_scene && model->m_frameStamp == model->m_scene->m_frameStamp;
        r.candidate = false;
        r.modelCacheable = false;
        model->HdPrepareShadowGather();
        if (ctx.split || ctx.profile || s_worldFrame) {
            bool candidate = false;
            if (r.mapDoodad) {
                if (!s_worldFrame) {
                    candidate = IsStaticShadowCandidate(*model, mainAnimated);
                } else if (SeenThisFrame(model) && (model->unused_0016 & 1)) {
                    candidate = (model->unused_0016 & 2) != 0;
                } else {
                    candidate = IsStaticShadowCandidate(*model, mainAnimated);
                    model->unused_02EC = uint32_t(s_worldStamp);
                    model->unused_007C = uint32_t(s_worldStamp >> 32);
                    model->unused_0016 = uint16_t(1 | (candidate ? 2 : 0)
                        | (candidate && !model->m_optGeo && model->m_boneMatrices ? 4 : 0));
                }
            }
            r.candidate = candidate;
            if (ctx.cache && candidate && s_worldFrame && !model->m_optGeo && model->m_boneMatrices) {
                const auto* shared = model->m_shared;
                r.modelCacheable = shared->m_indexBuf && shared->m_indexBuf->m_valid && shared->m_indexBuf->m_hasData
                    && shared->m_vertexBuf && shared->m_vertexBuf->m_valid && shared->m_vertexBuf->m_hasData;
            }
        }
        CModelBatchList u{ out.u.data(), out.uCount, kHdChunkCap };
        CModelBatchList t{ out.t.data(), out.tCount, kHdChunkCap };
        r.u0 = u.m_count;
        r.t0 = t.m_count;
        model->HdCollectShadowBatches(u, t);
        r.u1 = u.m_count;
        r.t1 = t.m_count;
        out.uCount = u.m_count;
        out.tCount = t.m_count;
        if (u.m_count >= kHdChunkCap || t.m_count >= kHdChunkCap) out.full = true;
        if (ctx.split) {
            for (uint32_t i = r.u0; i < r.u1; ++i) out.uCache[i] = HdBatchCacheable(r, out.u[i]);
            for (uint32_t i = r.t0; i < r.t1; ++i) out.tCache[i] = HdBatchCacheable(r, out.t[i]);
        }
    }

    void HdPrepareChunk(HdChunkOut& out) {
        if (out.u.size() < kHdChunkCap) {
            out.u.resize(kHdChunkCap);
            out.t.resize(kHdChunkCap);
            out.uCache.resize(kHdChunkCap);
            out.tCache.resize(kHdChunkCap);
        }
        out.uCount = out.tCount = 0;
        out.full = false;
    }

    bool CpuFReuse(HdGatherReq& r, const HdGatherReq& before, const HdGatherCtx& ctx, HdChunkOut& out) {
        if (r.model != before.model || r.mapDoodad != before.mapDoodad || out.full) return false;
        const uint32_t un = before.u1 - before.u0, tn = before.t1 - before.t0;
        // Keep the original capacity accounting and full-group fallback exactly.
        if (un >= kHdChunkCap - out.uCount || tn >= kHdChunkCap - out.tCount) return false;
        r.candidate = before.candidate;
        r.modelCacheable = before.modelCacheable;
        r.u0 = out.uCount; r.t0 = out.tCount;
        std::copy_n(out.u.data() + before.u0, un, out.u.data() + r.u0);
        std::copy_n(out.t.data() + before.t0, tn, out.t.data() + r.t0);
        out.uCount += un; out.tCount += tn;
        r.u1 = out.uCount; r.t1 = out.tCount;
        if (ctx.split) {
            std::copy_n(out.uCache.data() + before.u0, un, out.uCache.data() + r.u0);
            std::copy_n(out.tCache.data() + before.t0, tn, out.tCache.data() + r.t0);
        }
        // No global hit counter on the hot path: counters are proof-only.
        const uint32_t check = HD::CpuF::proof.load(std::memory_order_relaxed);
        if (check) {
            HdChunkOut& expected = s_cpuFProofChunks[r.part];
            HdPrepareChunk(expected);
            HdGatherReq reference = r;
            HdGatherOne(reference, ctx, expected);
            const bool equal = reference.candidate == r.candidate && reference.modelCacheable == r.modelCacheable
                && expected.uCount == un && expected.tCount == tn
                && (!un || std::memcmp(expected.u.data(), out.u.data() + r.u0, un * sizeof(CModelBatch)) == 0)
                && (!tn || std::memcmp(expected.t.data(), out.t.data() + r.t0, tn * sizeof(CModelBatch)) == 0)
                && (!ctx.split || ((!un || std::memcmp(expected.uCache.data(), out.uCache.data() + r.u0, un) == 0)
                    && (!tn || std::memcmp(expected.tCache.data(), out.tCache.data() + r.t0, tn) == 0)));
            HD::CpuF::reused.fetch_add(1, std::memory_order_relaxed);
            HD::CpuF::Record(check, equal);
            if (!equal) out.full = true; // whole query falls back to the original gathers
        }
        return true;
    }

    // Step 1 for one group of models (a worker or the main thread). Writes only its group's lists, its requests and
    // its own models. part = kHdParts marks a request left to the main thread (step 2).
    __declspec(noinline) void CpuFGatherPart(void* p, uint32_t part) {
        const HdGatherCtx& ctx = *static_cast<const HdGatherCtx*>(p);
        HdChunkOut& out = s_hdChunks[part];
        HdPrepareChunk(out);
        {
            // A collision overwrites only the memo. The old request remains in the ordered output.
            std::array<uint32_t, 2048> previous{};
            for (uint32_t index : s_cpuFRequests[part]) {
                HdGatherReq& r = s_hdReqs[index];
                if (!HdSimpleGather(r.model)) { r.part = kHdParts; continue; }
                r.part = part;
                const size_t slot = HD::CpuF::RowSeen<CM2Model, 2048>::Slot(r.model);
                const uint32_t prev = previous[slot];
                if (!prev || !CpuFReuse(r, s_hdReqs[prev - 1], ctx, out)) HdGatherOne(r, ctx, out);
                previous[slot] = index + 1;
            }
            return;
        }
    }

    void HdGatherPart(void* p, uint32_t part) {
        if (HD::CpuF::On(HD::CpuF::Gather)) { CpuFGatherPart(p, part); return; }
        const HdGatherCtx& ctx = *static_cast<const HdGatherCtx*>(p);
        HdChunkOut& out = s_hdChunks[part];
        HdPrepareChunk(out);
        for (HdGatherReq& r : s_hdReqs) {
            if (HdPartOf(r.model) != part) continue;
            if (!HdSimpleGather(r.model)) {
                r.part = kHdParts;
                continue;
            }
            r.part = part;
            HdGatherOne(r, ctx, out);
        }
    }

    bool HdSameBatches(const std::vector<CModelBatch>& v, const CModelBatchList& list) {
        return v.size() == list.m_count && (!list.m_count || std::memcmp(v.data(), list.m_batches, list.m_count * sizeof(CModelBatch)) == 0);
    }

    // Steps 1 to 3. If a group's lists were full, the original gathers are done instead (same result: their writes are
    // the same values again).
    void HdRunDeferredGathers(uint32_t threads) {
        using namespace HD::CataRenderPerf;
        Scope timer(Stage::ShadowQGatherCall);
        const uint32_t count = static_cast<uint32_t>(s_hdReqs.size());
        if (Enabled()) Add(Counter::ShadowQGathers, count);
        const bool cache = CShadowCache::IsCollectingStaticLayers();
        const bool split = CShadowCache::IsSplitCheckFrame() || cache;
        const bool profile = s_shadowStaticProfile && s_shadowStaticProfile->m_intValue && Enabled();
        HdGatherCtx ctx{ split, cache, profile };

        // 1. The simple models, on the workers.
        if (HD::CpuF::On(HD::CpuF::Gather)) {
            for (auto& indices : s_cpuFRequests) indices.clear();
            for (uint32_t i = 0; i < count; ++i) s_cpuFRequests[HdPartOf(s_hdReqs[i].model)].push_back(i);
        }
        HD::Parallel::For(kHdParts, HdGatherPart, &ctx, threads);
        if (HD::CpuF::proof.load(std::memory_order_relaxed)) {
            static uint64_t queries = 0;
            if ((++queries % 120) == 0) {
                if (FILE* f = std::fopen("Logs\\cpu-f-preuve.txt", "a")) {
                    std::fprintf(f, "CPU-F mode=%u proof=%u checked=%llu bad=%llu gather_reused_checked=%llu flush_coherent_checked=%llu controls=%llu\n",
                        HD::CpuF::mode.load(), HD::CpuF::proof.load(), HD::CpuF::checked.load(),
                        HD::CpuF::bad.load(), HD::CpuF::reused.load(), HD::CpuF::flushChecked.load(), HD::CpuF::controls.load());
                    std::fclose(f);
                }
            }
        }
        // 2. The others, here, in the original order.
        HdChunkOut& mine = s_hdChunks[kHdParts];
        HdPrepareChunk(mine);
        for (HdGatherReq& r : s_hdReqs) {
            if (r.part == kHdParts) HdGatherOne(r, ctx, mine);
        }
        bool full = false;
        for (const HdChunkOut& c : s_hdChunks) full |= c.full;
        if (full) {
            s_hdDefer = false;
            for (const HdGatherReq& r : s_hdReqs) GatherShadowBatches(r.model, r.band, r.mapDoodad);
            return;
        }

        // 3. Appended in the original order, then the original classify over each request's range.
        const bool counting = Enabled();
        for (uint32_t k = 0; k < count; ++k) {
            const HdGatherReq& r = s_hdReqs[k];
            const HdChunkOut& out = s_hdChunks[r.part];
            auto& buffers = CShadowQuery::s_bandBuffers[r.band];
            const uint32_t firstUntextured = buffers.m_untextured.m_count;
            const uint32_t firstTextured = buffers.m_textured.m_count;
            for (uint32_t i = r.u0; i < r.u1; ++i) buffers.m_untextured.Add(out.u[i].m_model, out.u[i].m_batchIndex);
            for (uint32_t i = r.t0; i < r.t1; ++i) buffers.m_textured.Add(out.t[i].m_model, out.t[i].m_batchIndex);
            if (!split && !profile) continue;
            auto& flags = s_shadowCandidateFlags[r.band];
            const bool candidate = r.candidate;
            auto classify = [&](const CModelBatchList& list, uint32_t first, std::vector<uint8_t>& result, const std::vector<uint8_t>& cacheBits, uint32_t c0) {
                if (split) result.resize(list.m_count);
                if (!split && !candidate) {
                    if (counting) Add(Counter::ShadowDynamicCandidates, list.m_count - first);
                    return;
                }
                uint32_t fixed = 0, cacheableCount = 0;
                for (uint32_t i = first; i < list.m_count; ++i) {
                    const bool isFixed = candidate && list.m_batches[i].m_model == r.model;
                    fixed += isFixed;
                    if (split) {
                        const bool cacheable = cacheBits[c0 + (i - first)] != 0;
                        cacheableCount += cacheable;
                        result[i] = cache ? cacheable : isFixed;
                    }
                }
                if (counting) {
                    Add(Counter::ShadowStaticCacheable, cacheableCount);
                    Add(Counter::ShadowStaticCandidates, fixed);
                    Add(Counter::ShadowDynamicCandidates, list.m_count - first - fixed);
                }
            };
            classify(buffers.m_untextured, firstUntextured, flags.untextured, out.uCache, r.u0);
            classify(buffers.m_textured, firstTextured, flags.textured, out.tCache, r.t0);
        }
    }

#ifdef WOWDECOMP_VULKAN
    // GPT CACHE1b: the texture a textured shadow batch is drawn with, exactly as RenderBatchShadowMap picks it
    // (nullptr = the draw is skipped, for example while the texture is still streaming).
    // Claude CACHE1d: what a texture gives the alpha test of a shadow draw besides its pointer: its content
    // generation (a streamed texture keeps its pointer) and its sampler flags. The main render sets the wrap mode
    // of a texture from the material of each model it draws (CM2SceneRender, MapObj), so a texture the camera
    // starts to see can change from clamp to repeat and move the cut of an alpha-tested edge by a texel.
    uint64_t StaticShadowTextureState(const CGxTex* texture) {
        uint32_t flags = 0;
        static_assert(sizeof(texture->m_flags) == sizeof(flags));
        std::memcpy(&flags, &texture->m_flags, sizeof(flags));
        return (uint64_t(texture->unused_0054) | (uint64_t(texture->m_needsUpdate & 1) << 63)) ^ (uint64_t(flags) << 32);
    }

    const CGxTex* StaticShadowTexture(CM2Model* model, const M2Batch& batch) {
        const M2Data* data = model->m_shared->m_data;
        const uint16_t textureIndex = data->m_textureCombos[batch.m_textureComboIndex];
        if (textureIndex >= data->m_textures.m_count) return nullptr;
        CTexture* texture = model->m_textures[textureIndex];
        return texture ? TextureGetGxTex(texture, 0, nullptr) : nullptr;
    }

    // Claude CACHE1c: vertex constants c0..c30 as the static layer pass (1) leaves them just before the M2 draws,
    // for the last two pass-1 draws of each band (latest = the redraw of the diagnostic, previous = the kept layer).
    struct PassConstants { float v[31 * 4]; bool set; };
    PassConstants s_pass1Latest[3] = {}, s_pass1Previous[3] = {};
    void SnapshotPass1Constants(int32_t band) {
        if (band < 0 || band > 2) return;
        s_pass1Previous[band] = s_pass1Latest[band];
        std::memcpy(s_pass1Latest[band].v, g_theGxDevicePtr->ShaderConstantsLock(GxSh_Vertex), sizeof(s_pass1Latest[band].v));
        s_pass1Latest[band].set = true;
    }

    // GPT CACHE1b: called by the proof (band passed as -1 - band) when a comparison failed: what is in the band lists.
    void StaticShadowDiagnostic(int32_t band) {
        const ShadowQueryBuffers& buffers = CShadowQuery::s_bandBuffers[band];
        FILE* log = std::fopen("Logs\\preuve-soleil.txt", "a");
        if (!log) return;
        uint32_t fixedUntextured = 0, fixedTextured = 0, fixedTexturedNoTexture = 0, dynamicBatches = 0;
        const auto& flags = s_shadowCandidateFlags[band];
        for (uint32_t i = 0; i < buffers.m_untextured.m_count; ++i)
            (i < flags.untextured.size() && flags.untextured[i] ? fixedUntextured : dynamicBatches)++;
        for (uint32_t i = 0; i < buffers.m_textured.m_count; ++i) {
            if (i < flags.textured.size() && flags.textured[i]) {
                ++fixedTextured;
                CM2Model* model = buffers.m_textured.m_batches[i].m_model;
                const auto& m2Batch = model->m_shared->m_skinData->m_batches[buffers.m_textured.m_batches[i].m_batchIndex];
                if (!StaticShadowTexture(model, m2Batch)) ++fixedTexturedNoTexture;
            } else ++dynamicBatches;
        }
        std::fprintf(log, "  DIAGNOSTIC liste bande %d : %u groupes de batiments, lots fixes opaques %u, "
            "lots fixes transparents %u (dont %u sans texture chargee), lots mobiles %u\n", band, buffers.m_groupCount,
            fixedUntextured, fixedTextured, fixedTexturedNoTexture, dynamicBatches);
        if (s_pass1Latest[band].set && s_pass1Previous[band].set) {
            uint32_t changed = 0;
            for (int r = 0; r < 31; ++r) {
                const float* a = &s_pass1Previous[band].v[r * 4];
                const float* b = &s_pass1Latest[band].v[r * 4];
                if (a[0] == b[0] && a[1] == b[1] && a[2] == b[2] && a[3] == b[3]) continue;
                ++changed;
                std::fprintf(log, "    constante c%d : calque garde (%.6g %.6g %.6g %.6g), redessine (%.6g %.6g %.6g %.6g)\n",
                    r, a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3]);
            }
            if (!changed) std::fprintf(log, "    constantes c0..c30 identiques entre le calque garde et le redessin\n");
        }
        // Claude CACHE1c: is bone 0 of the fixed models what the shadow pass assumes? The pass draws bone 0 (world *
        // scene view) with the inverse of the current Gx view, which must give world - camera whatever the rotation.
        {
            CGxMatrixStack& stack = g_theGxDevicePtr->m_xforms[GxXform_View];
            const C44Matrix gxView = stack.m_mtx[stack.m_level];
            C44Matrix copy = gxView;
            const C44Matrix gxInverse = copy.Inverse(copy.Determinant());
            C3Vector camera(0.0f, 0.0f, 0.0f);
            CGWorldFrame::GetCameraPosition(&camera);
            uint32_t shown = 0;
            const CM2Model* previous = nullptr;
            for (uint32_t i = 0; i < buffers.m_untextured.m_count && shown < 4; ++i) {
                if (!(i < flags.untextured.size() && flags.untextured[i])) continue;
                CM2Model* model = buffers.m_untextured.m_batches[i].m_model;
                if (model == previous || !model->m_boneMatrices || !model->m_scene) continue;
                previous = model;
                ++shown;
                const C44Matrix back = model->m_boneMatrices[0] * gxInverse;
                const C44Matrix& w = model->m_worldTransform;
                const float pairs[12][2] = { { back.a0, w.a0 }, { back.a1, w.a1 }, { back.a2, w.a2 },
                    { back.b0, w.b0 }, { back.b1, w.b1 }, { back.b2, w.b2 }, { back.c0, w.c0 }, { back.c1, w.c1 },
                    { back.c2, w.c2 }, { back.d0, w.d0 - camera.x }, { back.d1, w.d1 - camera.y }, { back.d2, w.d2 - camera.z } };
                double rotation = 0.0, translation = 0.0;
                for (int k = 0; k < 12; ++k) {
                    const double d = std::fabs(double(pairs[k][0]) - pairs[k][1]);
                    if (k >= 9) { if (d > translation) translation = d; } else if (d > rotation) rotation = d;
                }
                const C44Matrix& sv = model->m_scene->m_view;
                const float viewPairs[9][2] = { { sv.a0, gxView.a0 }, { sv.a1, gxView.a1 }, { sv.a2, gxView.a2 },
                    { sv.b0, gxView.b0 }, { sv.b1, gxView.b1 }, { sv.b2, gxView.b2 },
                    { sv.c0, gxView.c0 }, { sv.c1, gxView.c1 }, { sv.c2, gxView.c2 } };
                double sceneRotation = 0.0;
                for (const auto& p : viewPairs) sceneRotation = std::max(sceneRotation, std::fabs(double(p[0]) - p[1]));
                std::fprintf(log, "    modele fixe %u : %s, anime par le rendu principal %d, os 0 / vue Gx contre monde - camera : "
                    "rotation %.6g, translation %.6g yd ; vue de la scene contre vue Gx : rotation %.6g\n", shown,
                    model->m_shared->m_fileNameWithoutPath ? model->m_shared->m_fileNameWithoutPath : "?",
                    model->m_frameStamp == model->m_scene->m_frameStamp ? 1 : 0, rotation, translation, sceneRotation);
            }
        }
        // Claude CACHE1d: the models whose origin falls near the texels of the failed proof (box +-40 texels).
        {
            const int32_t* box = CShadowCache::s_failBox;
            const float size = static_cast<float>(CShadowCache::s_shadowSize);
            const C44Matrix& m = s_lastOriginViewProj[band];
            const C3Vector& o = s_lastOrigin[band];
            const CM2Model* listed[24] = {};
            uint32_t shown = 0;
            std::fprintf(log, "    texels fautifs x %d..%d y %d..%d ; modeles proches :\n", box[0], box[1], box[2], box[3]);
            for (int material = 0; material < 2; ++material) {
                const CModelBatchList& list = material ? buffers.m_textured : buffers.m_untextured;
                const std::vector<uint8_t>& fixed = material ? flags.textured : flags.untextured;
                for (uint32_t i = 0; i < list.m_count && shown < 24; ++i) {
                    CM2Model* model = list.m_batches[i].m_model;
                    const C44Matrix& w = model->m_worldTransform;
                    const float x = w.d0 - o.x, y = w.d1 - o.y, z = w.d2 - o.z;
                    const float cx = x * m.a0 + y * m.b0 + z * m.c0 + m.d0;
                    const float cy = x * m.a1 + y * m.b1 + z * m.c1 + m.d1;
                    const float cw = x * m.a3 + y * m.b3 + z * m.c3 + m.d3;
                    if (!(cw != 0.0f)) continue;
                    const float tx = (cx / cw * 0.5f + 0.5f) * size;
                    const float ty1 = (0.5f - cy / cw * 0.5f) * size, ty2 = (cy / cw * 0.5f + 0.5f) * size;
                    const bool inX = tx >= box[0] - 40 && tx <= box[1] + 40;
                    const bool inY = (ty1 >= box[2] - 40 && ty1 <= box[3] + 40) || (ty2 >= box[2] - 40 && ty2 <= box[3] + 40);
                    if (!inX || !inY) continue;
                    const auto& m2Batch = model->m_shared->m_skinData->m_batches[list.m_batches[i].m_batchIndex];
                    const auto& section = model->m_shared->m_skinSections[m2Batch.m_skinSectionIndex];
                    std::fprintf(log, "      %s (%p) lot %u %s, fixe %d, dessin sans camera %d, anime par le rendu principal %d, alpha %.3f, os %u influences %u, texel %.1f %.1f/%.1f, monde %.2f %.2f %.2f\n",
                        model->m_shared->m_fileNameWithoutPath ? model->m_shared->m_fileNameWithoutPath : "?", static_cast<const void*>(model),
                        list.m_batches[i].m_batchIndex, material ? "transparent" : "opaque", i < fixed.size() ? fixed[i] : -1,
                        IsWorldShadowModel(model) ? 1 : 0, model->m_scene && model->m_frameStamp == model->m_scene->m_frameStamp ? 1 : 0,
                        model->m_alpha, static_cast<unsigned>(section.m_boneCount), static_cast<unsigned>(section.m_boneInfluences),
                        tx, ty1, ty2, w.d0, w.d1, w.d2);
                    ++shown;
                    (void)listed;
                }
            }
        }
        auto** groups = static_cast<CMapObjGroup**>(buffers.m_groups);
        for (uint32_t i = 0; i < buffers.m_groupCount && i < 16; ++i) {
            CMapObjGroup* group = groups[i];
            uint32_t noTexture = 0;
            if (group->m_batchListCount && !(group->m_unkLoadedFlag & 0x4)) {
                CMapObj* mapObj = group->m_parent;
                for (int32_t j = 0; j < group->m_batchListCount; ++j) {
                    SMOMaterial& material = mapObj->m_materialList[group->m_batchList[j].m_texture];
                    if (!TextureGetGxTex(material.Textures()[0], 0, nullptr)) ++noTexture;
                }
            }
            std::fprintf(log, "    groupe %u : %p, etat 0x%x, lots %d, sans texture %u, bat %s\n", i,
                static_cast<void*>(group), static_cast<unsigned>(group->m_unkLoadedFlag),
                static_cast<int>(group->m_batchListCount), noTexture,
                group->m_parent && group->m_parent->m_wmoName ? group->m_parent->m_wmoName : "?");
        }
        std::fclose(log);
    }

    bool StaticShadowKey(int32_t band, uint64_t& key) {
        if (band < 0) { StaticShadowDiagnostic(-1 - band); return false; }
        const auto& flags = s_shadowCandidateFlags[band].untextured;
        const auto& list = CShadowQuery::s_bandBuffers[band].m_untextured;
        const auto& texturedFlags = s_shadowCandidateFlags[band].textured;
        const auto& texturedList = CShadowQuery::s_bandBuffers[band].m_textured;
        const ShadowQueryBuffers& buffers = CShadowQuery::s_bandBuffers[band];
        key = UINT64_C(14695981039346656037);
        auto mix = [&](uint64_t value) { key = (key ^ value) * UINT64_C(1099511628211); };
        auto hashMatrix = [&](const C44Matrix& matrix) {
            uint64_t words[sizeof(C44Matrix) / sizeof(uint64_t)];
            static_assert(sizeof(words) == sizeof(C44Matrix));
            std::memcpy(words, &matrix, sizeof(words));
            for (uint64_t word : words) mix(word);
        };
        mix(g_shadowInstancing->m_intValue);
        for (const auto state : { GxRs_DepthTest, GxRs_DepthFunc, GxRs_DepthWrite, GxRs_ColorWrite })
            mix(g_theGxDevicePtr->m_appRenderStates.m_data[state].m_value.m_data.i[0]);

        bool found = false;
        // GPT CACHE1b: untextured then alpha-tested batches, each in collection order. Bone 0 is world * view
        // (camera dependent), so only the world transform is hashed: the view is checked at classification.
        for (int material = 0; material < 2; ++material) {
            const auto& fixedFlags = material ? texturedFlags : flags;
            const auto& batches = material ? texturedList : list;
            mix(0x9E3779B97F4A7C15ull + material);
            const CM2Model* previous = nullptr;
            for (uint32_t i = 0; i < batches.m_count && i < fixedFlags.size(); ++i) {
                if (!fixedFlags[i]) continue;
                found = true;
                const auto& batch = batches.m_batches[i];
                CM2Model* model = batch.m_model;
                const auto* shared = model->m_shared;
                mix(reinterpret_cast<uintptr_t>(model));
                mix(batch.m_batchIndex);
                if (material) {
                    const auto& m2Batch = shared->m_skinData->m_batches[batch.m_batchIndex];
                    const CGxTex* texture = StaticShadowTexture(model, m2Batch);
                    mix(reinterpret_cast<uintptr_t>(texture));
                    // Claude CACHE1d: what the texture holds (a streamed texture keeps its pointer).
                    if (texture) mix(StaticShadowTextureState(texture));
                }
                if (model != previous) {
                    mix(reinterpret_cast<uintptr_t>(shared));
                    mix(reinterpret_cast<uintptr_t>(shared->m_data));
                    mix(reinterpret_cast<uintptr_t>(shared->m_skinData));
                    mix(reinterpret_cast<uintptr_t>(shared->m_indexBuf));
                    mix(reinterpret_cast<uintptr_t>(shared->m_vertexBuf));
                    mix(shared->m_fileNameHash);
                    hashMatrix(model->m_worldTransform);
                    previous = model;
                }
            }
        }

        // GPT CACHE1b: WMO groups are part of the layer. What RenderMapObjGroupsShadowMap draws depends on the
        // group, its placement matrix, its load state and the texture of each batch; all of it is hashed.
        const uint32_t groupCount = !s_shadowStaticGroups || s_shadowStaticGroups->m_intValue ? buffers.m_groupCount : 0;
        mix(0xC2B2AE3D27D4EB4Full + groupCount);
        auto** groups = static_cast<CMapObjGroup**>(buffers.m_groups);
        auto** matrices = static_cast<C44Matrix**>(buffers.m_groupData);
        for (uint32_t i = 0; i < groupCount; ++i) {
            CMapObjGroup* group = groups[i];
            found = true;
            // The original draw resets this timer; without it the vertex buffer of a cached group would be
            // freed after 5 s and rebuilt in one go at the next redraw of the layer.
            group->m_timer = 0.0f;
            mix(reinterpret_cast<uintptr_t>(group));
            mix(reinterpret_cast<uintptr_t>(group->m_parent));
            hashMatrix(*matrices[i]);
            mix(group->m_unkLoadedFlag);
            mix(group->m_batchListCount);
            mix(reinterpret_cast<uintptr_t>(group->m_batchList));
            if (group->m_batchListCount && !(group->m_unkLoadedFlag & 0x4)) {
                CMapObj* mapObj = group->m_parent;
                for (int32_t j = 0; j < group->m_batchListCount; ++j) {
                    SMOMaterial& material = mapObj->m_materialList[group->m_batchList[j].m_texture];
                    const CGxTex* texture = TextureGetGxTex(material.Textures()[0], 0, nullptr);
                    mix(reinterpret_cast<uintptr_t>(texture));
                    if (texture) mix(StaticShadowTextureState(texture)); // Claude CACHE1d
                    mix(material.m_blendMode == 1);
                }
            }
        }
        return found;
    }
#endif

    void RenderSplitShadowBatches(const ShadowQueryBuffers& buffers, int32_t band, int32_t layerPass) {
        // GPT CACHE1: preserve the source lists so the regular render still does its original sort.
        const auto& flags = s_shadowCandidateFlags[band];
        static thread_local std::vector<CModelBatch> batches[2][2];
        for (auto& phase : batches) {
            for (auto& material : phase) material.clear();
        }
        const int32_t wantedPhase = layerPass == 3 ? 2 : layerPass; // 3 = dynamic only, with its own clear
        auto split = [&](const CModelBatchList& input, const std::vector<uint8_t>& fixed, int32_t material) {
            for (uint32_t i = 0; i < input.m_count; ++i) {
                const int32_t phase = i < fixed.size() && fixed[i] ? 0 : 1;
                if (wantedPhase && wantedPhase != phase + 1) continue;
                batches[phase][material].push_back(input.m_batches[i]);
            }
        };
        split(buffers.m_untextured, flags.untextured, 0);
        split(buffers.m_textured, flags.textured, 1);
        for (auto& phase : batches) {
            const auto u = static_cast<uint32_t>(phase[0].size());
            const auto t = static_cast<uint32_t>(phase[1].size());
            if (!u && !t) continue;
            CModelBatchList untextured{phase[0].data(), u, u};
            CModelBatchList textured{phase[1].data(), t, t};
            if (g_shadowInstancing->m_intValue) {
                untextured.Optimize();
                textured.Optimize();
            }
            CM2Model::RenderModelBatchesShadowMap(untextured, textured);
        }
    }
}

// VERIFY: a0192ad6 auto
// OFFSET: 0x007BD3A0
namespace {
    bool CpuFToggle(CVar*, const char*, const char* value, void*) {
        if (!value || value[0] < '0' || value[0] > '9') return false;
        char* end = nullptr;
        const unsigned long mode = std::strtoul(value, &end, 10);
        if (!end || *end || mode > HD::CpuF::All) return false;
        HD::CpuF::mode.store(uint32_t(mode), std::memory_order_relaxed);
        return true;
    }
    bool CpuFProofToggle(CVar*, const char*, const char* value, void*) {
        if (!value || value[0] < '0' || value[0] > '2' || value[1]) return false;
        // R2: monotonic counters; no reset can race an in-flight record worker.
        // The auto-test uses controls, never the real-error counter bad.
        HD::CpuF::proof.store(uint32_t(value[0] - '0'), std::memory_order_relaxed);
        return true;
    }
}

void CShadowQuery::Initialize() {
    CVar* cpuMode = CVar::Register("hdCpuF", "CPU-F: bit 1 constantes SSE, bit 2 requetes uniques par ligne, bit 4 collectes reutilisees dans la requete, bit 8 FlushHost coherent sans verrou, bit 16 choix eau/reflet; 0 original, 31 tous. Claude CPUF-ON (23 nov 2026) : 31 par defaut, preuve 0 sur 357 M verifications aux 4 heures, -1,4 a -1,6 ms a Grom'gol", 0, "31", CpuFToggle, CATEGORY_GRAPHICS, false, nullptr, false);
    CVar* cpuProof = CVar::Register("hdCpuFProof", "CPU-F: 0 arret, 1 comparaison constantes et collectes, 2 auto-test du compteur (incremente controls sans polluer bad ni changer le rendu). Logs/cpu-f-preuve.txt; jamais pendant les mesures de vitesse", 0, "0", CpuFProofToggle, CATEGORY_GRAPHICS, false, nullptr, false);
    // Never leave a previous diagnostic or optimization active across client starts.
    if (cpuMode) cpuMode->InternalSet("31", true, false, false, false); // Claude CPUF-ON : was "0"
    if (cpuProof) cpuProof->InternalSet("0", true, false, false, false);
    HD::CpuF::mode.store(HD::CpuF::All); HD::CpuF::proof.store(0); // Claude CPUF-ON : mode was 0

    CShadowCache::SetMatrixCallback(CShadowQuery::MatrixCallback);
    CShadowCache::SetFrustumCallback(CShadowQuery::FrustumCallback);
    CShadowCache::SetQueryCallback(CShadowQuery::QueryCallback);
    CShadowCache::SetRenderCallback(CShadowQuery::RenderCallback);

    g_shadowCull = CVar::Register("shadowCull", "enable shadow frustum culling", 0, "1", nullptr, CATEGORY_DEFAULT, false, nullptr, false);
    g_shadowScissor = CVar::Register("shadowScissor", "enable scissoring when rendering shadowmaps", 0, "1", nullptr, CATEGORY_DEFAULT, false, nullptr, false);
    g_shadowInstancing = CVar::Register("shadowInstancing", "enable instancing when rendering shadowmaps", 0, "1", nullptr, CATEGORY_DEFAULT, false, nullptr, false);
    s_farShadowCheck = CVar::Register("hdShadowFarCheck",
        "Comparaison des bandes d'ombre : 0 = arret, 1 = projection gardee, 2 = projection courante, 3 = listes separees, 4 = copie couleur et profondeur",
        0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_shadowStaticProfile = CVar::Register("hdShadowStaticProfile",
        "Compte les lots candidats au cache statique des ombres dans CataRenderPerf",
        0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_shadowStaticCache = CVar::Register("hdShadowStaticCache",
        "Reutilise le calque des ombres fixes opaques du soleil (Vulkan)",
        0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_shadowStaticSunDeg = CVar::Register("hdShadowStaticSunDeg",
        "Deplacement maximum du soleil de bande avant rafraichissement, en degres",
        0, "0.01", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_shadowStaticCheck = CVar::Register("hdShadowStaticCheck",
        "Compare le cache des ombres au dessin original dans la meme image (2 = journalise les echecs sans couper le cache)",
        0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_shadowStaticGroups = CVar::Register("hdShadowStaticGroups",
        "Cache des ombres : 1 = les groupes de batiments (WMO) sont dans le calque fixe, 0 = redessines a chaque image (diagnostic)",
        0, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_shadowStaticShow = CVar::Register("hdShadowStaticShow",
        "Diagnostic du cache des ombres : 0 = normal, 1 = seulement le decor fixe (calque), 2 = seulement les projeteurs mobiles",
        0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);

    CShadowCache::Initialize();
}

// OFFSET: 0x007BA7D0
void CShadowQuery::FreeBuffers() {
    for (ShadowQueryBuffers* buffers = CShadowQuery::s_bandBuffers; buffers < CShadowQuery::s_bandBuffers + sizeof(CShadowQuery::s_bandBuffers) / sizeof(CShadowQuery::s_bandBuffers[0]); buffers++) {
        if (buffers->m_groups) {
            SMemFree(buffers->m_groups, nullptr, 0, 0);
        }

        if (buffers->m_groupData) {
            SMemFree(buffers->m_groupData, nullptr, 0, 0);
        }

        // Claude BANDE1: SMemAlloc'd (AllocBuffers, CModelBatchList::Grow), so SMemFree; everything reset so a
        // later AllocBuffers starts over instead of reusing freed arrays.
        if (buffers->m_untextured.m_batches) {
            SMemFree(buffers->m_untextured.m_batches, nullptr, 0, 0);
        }

        if (buffers->m_textured.m_batches) {
            SMemFree(buffers->m_textured.m_batches, nullptr, 0, 0);
        }

        *buffers = ShadowQueryBuffers{};
    }
}

// VERIFY: 11a5d7a4 manual
// OFFSET: 0x007BB3E0
static void GetViewerPosition(C3Vector* position) {
    *position = DayNight::GetInfo()->m_cameraPos;
    CGCamera* camera = CGWorldFrame::GetActiveCamera();

    if (!camera) {
        return;
    }

    CGObject_C* object = ClntObjMgrObjectPtr(camera->m_targetGUID, TYPEMASK_OBJECT, __FILE__, __LINE__);

    if (object) {
        *position = object->GetPosition();
    }
}

// VERIFY: aa0465cc auto
// OFFSET: 0x007BB570
void CShadowQuery::Update() {
    C3Vector direction = CMap::s_mapLight->m_light.m_dir;
    int32_t useCullFrustum = CWorldScene::frustumPortalView.m_maxViewDepth >= 0.0f || CWorldScene::s_hasPendingExteriorGroups;
    ++(useCullFrustum ? HDShadowDiag::cullOn : HDShadowDiag::cullOff); // HD diagnostic (temporary)
    if (CWorldScene::s_viewerMapObjDef) ++HDShadowDiag::inWmo;
    float z = direction.z; // AR1: always the real sun height (the original x 5 short shadows are gone)

    if (z < -1.2f) {
        z = -1.2f;
    }

    float inv = 1.0f / std::sqrt(direction.y * direction.y + direction.x * direction.x + z * z);
    direction.x = direction.x * inv;
    direction.y = direction.y * inv;
    direction.z = z * inv;
    // HD: hdShadowSunMin: the sun for the shadow maps no lower than this above the horizon
    float minElevation = HD::ShadowMinElevation();
    if (minElevation > 0.0f) {
        float lowest = std::sin(minElevation * 0.0174532925f);
        if (-direction.z < lowest) {
            float flat = std::sqrt(direction.x * direction.x + direction.y * direction.y);
            float keep = flat > 1e-6f ? std::sqrt(1.0f - lowest * lowest) / flat : 0.0f;
            direction.x = direction.x * keep;
            direction.y = direction.y * keep;
            direction.z = -lowest;
        }
    }
    CShadowCache::ConfigureSunCache(true, HD::ShadowSunRefreshDegrees()); // HD (AR1: real-sun cache always)
    CShadowCache::ConfigureTexelSnap(HD::ShadowTexelSnap()); // HD: hdShadowTexelSnap
    CShadowCache::ConfigureFarEvery(HD::ShadowFarEvery()); // Claude 2026-11-04 lot S3: hdShadowFarEvery
#ifdef WOWDECOMP_VULKAN
    CShadowCache::ConfigureFarCheck(s_farShadowCheck && HD::VulkanShadows::FullCasters()
        ? s_farShadowCheck->m_intValue : 0);
    CShadowCache::ConfigureStaticLayers(s_shadowStaticCache && s_shadowStaticCache->m_intValue
            && HD::VulkanShadows::FullCasters(),
        s_shadowStaticSunDeg ? s_shadowStaticSunDeg->m_floatValue : 0.01f,
        s_shadowStaticCheck && s_shadowStaticCheck->m_intValue, s_mapId, &StaticShadowKey,
        [](int32_t cause) {
            using HD::CataRenderPerf::Counter;
            if (!cause) { HD::CataRenderPerf::Add(Counter::ShadowStaticLayerHits); return; }
            HD::CataRenderPerf::Add(Counter::ShadowStaticLayerBuilds);
            HD::CataRenderPerf::Add(cause == 1 ? Counter::ShadowStaticBuildSun
                : cause == 2 ? Counter::ShadowStaticBuildCenter
                : cause == 3 ? Counter::ShadowStaticBuildList : Counter::ShadowStaticBuildSettings);
        },
        s_shadowStaticShow ? s_shadowStaticShow->m_intValue : 0,
        s_shadowStaticCheck && s_shadowStaticCheck->m_intValue == 2);
#endif
    g_hdShadowTrace = HD::LightTrace::Active() ? &HD::LightTrace::Set : nullptr; // Claude LT2: sun shadow state in hdLightTrace
    CShadowCache::PreUpdate(direction);
    C3Vector viewer(0.0f, 0.0f, 0.0f);
    GetViewerPosition(&viewer);
    // Claude 2026-11-04 lot S1: CShadowCache times its parts through these (hdCataRenderPerf); Begin() is 0 when it is off.
    HDShadowDiag::perfBegin = &HD::CataRenderPerf::Begin;
    HDShadowDiag::perfEnd = [](int phase, uint64_t start) {
        static constexpr HD::CataRenderPerf::Stage kStages[5] = { HD::CataRenderPerf::Stage::ShadowDyn, HD::CataRenderPerf::Stage::ShadowGather, HD::CataRenderPerf::Stage::ShadowBand0, HD::CataRenderPerf::Stage::ShadowBand1, HD::CataRenderPerf::Stage::ShadowBand2 };
        if (phase >= 0 && phase < 5) HD::CataRenderPerf::End(kStages[phase], start);
    };
    HDShadowDiag::zone = &HD::CataRenderPerf::ZoneBand;   // Claude GPU0 (mesure) : les bandes dans le chrono GPU
    CShadowCache::SetDebugParams(1.0f, 0);
    // Claude 2026-11-08 lot RM4: a change of the caster settings, or a list, redraws every band now
    {
        HdBigRockRegister();
        static float lastRock = -1.0f, lastBuried = -1.0f, lastSlope = -1.0f; // Claude OB1: + slope
        const float slopeSetting = s_hdSunBuriedSlope ? s_hdSunBuriedSlope->m_floatValue : 0.0f;
        static int32_t lastKinds = -1;
        const float rock = s_hdSunBigRock ? s_hdSunBigRock->m_floatValue : 0.0f;
        const float buried = s_hdSunBuriedRock ? s_hdSunBuriedRock->m_floatValue : 0.0f;
        const int32_t kinds = s_hdSunCasters ? s_hdSunCasters->m_intValue : 15;
        static int32_t lastTreeNames = -1; // Claude 2026-11-13 lot LV5-SH1
        const int32_t treeNames = s_hdSunTreeNames ? s_hdSunTreeNames->m_intValue : 1;
        if (rock != lastRock || buried != lastBuried || kinds != lastKinds || slopeSetting != lastSlope || treeNames != lastTreeNames) {
            if (lastKinds != -1) CShadowCache::s_needsRebuild = 1;
            lastRock = rock; lastBuried = buried; lastKinds = kinds; lastSlope = slopeSetting; lastTreeNames = treeNames;
        }
        if (s_hdSunBigRockList && s_hdSunBigRockList->m_intValue != 0 && !s_hdBigRockFile) {
            s_hdBigRockFile = std::fopen("Logs\\soleil-gros-modeles.txt", "w");
            if (s_hdBigRockFile) std::fprintf(s_hdBigRockFile, "hdSunCasters = %d, hdSunBigRock = %.1f yd, hdSunBuriedRock = %.2f. Bandes : 0 = 40 yd, 1 = 160 yd, 2 = 640 yd. 'a' = distance au centre de la bande (toi).\n", kinds, rock, buried);
            CShadowCache::s_needsRebuild = 1;
        }
    }
    CShadowCache::Update(viewer, useCullFrustum);
    if (s_hdBigRockFile) { // Claude 2026-11-08 lot RM4
        std::fclose(s_hdBigRockFile);
        s_hdBigRockFile = nullptr;
        if (s_hdSunBigRockList) s_hdSunBigRockList->Set("0", true, false, false, false);
    }
    CShadowCache::PostUpdate();
#ifdef WOWDECOMP_VULKAN
    if (HD::VulkanShadows::TakePcfReload()) {
        CMap::InitializePCFShaders(); // HD: hdSunShadows switched PCF filtering, as the hwPCF callback does
    }
    HD::VulkanShadows::CaptureNativeMaps();
#endif
}

// VERIFY: 7421bb67 manual
// OFFSET: 0x007BAC10
void CShadowQuery::MatrixCallback(C3Vector& center, float radius, C44Matrix& matrix, C3Vector& direction, int32_t band, const C3Vector& sun) {
    if (radius <= 0.0f) {
        return;
    }

    C44Matrix ortho;
    C44Matrix view;
    C44Matrix inverseView;
    C44Matrix lookAt;
    C3Vector eye(0.0f, 0.0f, 0.0f);
    C3Vector target(0.0f, 0.0f, 0.0f);
    C3Vector camera(0.0f, 0.0f, 0.0f);
    CGWorldFrame::GetCameraPosition(&camera);

    eye.x = center.x - sun.x * 2000.0f - camera.x;
    eye.y = center.y - sun.y * 2000.0f - camera.y;
    eye.z = center.z - 2000.0f * sun.z - camera.z;
    target.x = center.x - camera.x;
    target.y = center.y - camera.y;
    target.z = center.z - camera.z;

    CGxMatrixStack& stack = g_theGxDevicePtr->m_xforms[GxXform_View];
    view = stack.m_mtx[stack.m_level];
    C44Matrix copy = view;
    float determinant = copy.Determinant();
    view = copy.Inverse(determinant);
    inverseView = view;

    GxuXformCreateOrtho(-radius, radius, -radius, radius, 1.0f, 4000.0f, ortho);
    GxuXformCreateLookAtXXX(eye, target, direction, lookAt);
    matrix = inverseView * lookAt * ortho;

    C44Matrix depth = inverseView * lookAt;
    matrix.a2 = depth.a2;
    matrix.b2 = depth.b2;
    matrix.c2 = depth.c2;
    matrix.d2 = depth.d2;

    float bias = CShaderEffect::s_usePcfFiltering ? 0.5f : 0.0f;
    float scale;

    if (band == 0) {
        scale = 2.0f;
    } else if (band == 1) {
        matrix.d2 = depth.d2 - (bias + 4.0f * 0.2f);
        return;
    } else if (band == 2) {
        matrix.d2 = depth.d2 - (bias + 8.0f * 0.2f);
        return;
    } else {
        scale = 0.5f;
    }

    matrix.d2 = depth.d2 - (bias + scale * 0.2f);
}

// VERIFY: de87a831 manual
// OFFSET: 0x007BAFD0
void CShadowQuery::FrustumCallback(CFrustum& frustum, C44Matrix& matrix, const C3Vector& direction, CShadowCacheQueryData& data, int32_t band, const C3Vector& sun) {
    C3Vector& pos = data.m_pos[band];
    float* bounds = data.m_bounds[band];
    C3Vector eye;
    eye.x = pos.x - sun.x * 2000.0f;
    eye.y = pos.y - sun.y * 2000.0f;
    eye.z = pos.z - 2000.0f * sun.z;

    GxuXformCreateOrtho(bounds[0], bounds[1], bounds[2], bounds[3], 1.0f, 4000.0f, matrix);

    C44Matrix view;
    C3Vector corners[8];

    for (uint32_t i = 0; i < 8; i++) {
        corners[i] = C3Vector(0.0f, 0.0f, 0.0f);
    }

    GxuXformCreateLookAtXXX(eye, pos, direction, view);
    GxuXformCalcFrustumCorners(view, matrix, corners);
    frustum.CalcPlanesFromCorners(corners);
    frustum.InvertPlanes();
    frustum.SwapCorners();

    float* rect = data.m_cullRects[band];
    rect[0] = -1.0f;
    rect[1] = -1.0f;
    rect[2] = 1.0f;
    rect[3] = 1.0f;

    CFrustum& cull = data.m_bandFrustums[band];
    cull = frustum;

    if (data.m_queryFlags[band] == 8 || !g_shadowCull->m_intValue) {
        return;
    }
#ifdef WOWDECOMP_VULKAN
    // HD: full band with the Vulkan shadows: the camera's view no longer narrows which casters a band takes (the
    // narrowed band changed with every camera move and the shadows on screen flickered with it)
    if (HD::VulkanShadows::FullCasters()) {
        return;
    }
#endif

    CFrustum clip = CWorldScene::s_clipFrustum;
    clip.Transform(view * matrix);
    CAaBox box = CAaBox::Bounding(clip.corners, 8);
    box.b = C3Vector::Max(box.b, C3Vector(-1.0f, -1.0f, -1.0f));
    box.b = C3Vector::Min(box.b, C3Vector(1.0f, 1.0f, 1.0f));
    box.t = C3Vector::Max(box.t, C3Vector(-1.0f, -1.0f, -1.0f));
    box.t = C3Vector::Min(box.t, C3Vector(1.0f, 1.0f, 1.0f));

    if (box.t.x > box.b.x && box.t.y > box.b.y && box.t.z > box.b.z) {
        C44Matrix ortho;
        GxuXformCreateOrtho(-(bounds[0] * box.b.x), bounds[1] * box.t.x, -(bounds[2] * box.b.y), box.t.y * bounds[3], 1.0f, 4000.0f, ortho);
        GxuXformCalcFrustumCorners(view, ortho, corners);
        cull.CalcPlanesFromCorners(corners);
        cull.InvertPlanes();
        cull.SwapCorners();
        rect[1] = box.b.x;
        rect[3] = box.t.x;
        rect[0] = -box.t.y;
        rect[2] = -box.b.y;
    }
}

// VERIFY: dc5e2519 manual
// OFFSET: 0x007BA840
void CShadowQuery::AllocBuffers() {
    for (uint32_t i = 0; i < 3; i++) {
        ShadowQueryBuffers& buffers = CShadowQuery::s_bandBuffers[i];
        buffers.m_groupCount = 0;
        buffers.m_untextured.m_count = 0;
        buffers.m_textured.m_count = 0;
        // Claude BANDE1: the lists grow instead of stopping at 0x2000 batches / 0x800 groups (Darkshire square at
        // Extreme: ~10 400 model batches in the far band, the rest dropped, which ones depending on the camera: the
        // ground's sun shadow flickered). A grown capacity is kept from frame to frame.
        buffers.m_untextured.m_grows = true;
        buffers.m_textured.m_grows = true;

        if (!buffers.m_groups || !buffers.m_groupData) {
            if (buffers.m_groups) SMemFree(buffers.m_groups, nullptr, 0, 0);
            if (buffers.m_groupData) SMemFree(buffers.m_groupData, nullptr, 0, 0);
            buffers.m_groups = SMemAlloc(0x800 * sizeof(CMapObjGroup*), __FILE__, __LINE__, 0);
            buffers.m_groupData = SMemAlloc(0x800 * sizeof(C44Matrix*), __FILE__, __LINE__, 0);
            buffers.m_groupMax = buffers.m_groups && buffers.m_groupData ? 0x800 : 0;
        }

        if (!buffers.m_untextured.m_batches) {
            buffers.m_untextured.m_batches = static_cast<CModelBatch*>(SMemAlloc(sizeof(CModelBatch) * 0x2000, __FILE__, __LINE__, 0));
            buffers.m_untextured.m_maxCount = buffers.m_untextured.m_batches ? 0x2000 : 0;
        }

        if (!buffers.m_textured.m_batches) {
            buffers.m_textured.m_batches = static_cast<CModelBatch*>(SMemAlloc(sizeof(CModelBatch) * 0x2000, __FILE__, __LINE__, 0));
            buffers.m_textured.m_maxCount = buffers.m_textured.m_batches ? 0x2000 : 0;
        }
    }
}

// Claude BANDE1: room for one more WMO group in a band (doubles both arrays, the groups kept in order).
static bool HdBandGroupRoom(ShadowQueryBuffers& buffers) {
    if (buffers.m_groupCount < buffers.m_groupMax) {
        return true;
    }
    const uint32_t capacity = buffers.m_groupMax ? buffers.m_groupMax * 2u : 0x800u;
    if (capacity <= buffers.m_groupMax || capacity > 0x1000000u) {
        return false;
    }
    void* groups = SMemAlloc(capacity * sizeof(CMapObjGroup*), __FILE__, __LINE__, 0);
    void* groupData = SMemAlloc(capacity * sizeof(C44Matrix*), __FILE__, __LINE__, 0);
    if (!groups || !groupData) {
        if (groups) SMemFree(groups, nullptr, 0, 0);
        if (groupData) SMemFree(groupData, nullptr, 0, 0);
        return false;
    }
    if (buffers.m_groupCount) {
        std::memcpy(groups, buffers.m_groups, buffers.m_groupCount * sizeof(CMapObjGroup*));
        std::memcpy(groupData, buffers.m_groupData, buffers.m_groupCount * sizeof(C44Matrix*));
    }
    if (buffers.m_groups) SMemFree(buffers.m_groups, nullptr, 0, 0);
    if (buffers.m_groupData) SMemFree(buffers.m_groupData, nullptr, 0, 0);
    buffers.m_groups = groups;
    buffers.m_groupData = groupData;
    buffers.m_groupMax = capacity;
    return true;
}


// VERIFY: 3e3dfd04 manual
// OFFSET: 0x007BD200
// Claude MESB1 (22 nov 2026, mesure seulement, avec hdCataRenderPerf 1): for each sun band, how often its caster
// lists are byte for byte those of the previous band query, and how often its centre and the sun are the same.
// Decides whether keeping a band's lists from one frame to the next can pay. Logs\mesure-bandes.txt every 1000 queries.
namespace {
    struct HdBandMemo { std::vector<CModelBatch> u, t; C3Vector pos, sun; bool valid = false; };
    HdBandMemo s_hdBandMemo[3];
    uint64_t s_hdBandQueries[3] = {}, s_hdBandSameList[3] = {}, s_hdBandSameKey[3] = {}, s_hdBandSameKeyList[3] = {}, s_hdBandBatches[3] = {};
    uint64_t s_hdBandLogged = 0;
    bool HdSameVec(const C3Vector& a, const C3Vector& b) { return std::memcmp(&a, &b, sizeof a) == 0; }
    void HdMeasureBandReuse(const CShadowCacheQueryData& data) {
        if (!HD::CataRenderPerf::Enabled() || data.m_lastBand < 1) return; // band queries only (the dynamic one has band 0 alone)
        for (int b = 0; b <= data.m_lastBand && b < 3; ++b) {
            if (!data.m_active[b]) continue;
            const ShadowQueryBuffers& bb = CShadowQuery::s_bandBuffers[b];
            HdBandMemo& m = s_hdBandMemo[b];
            const bool sameKey = m.valid && HdSameVec(m.pos, data.m_pos[b]) && HdSameVec(m.sun, CShadowCache::s_sunDir);
            const bool sameList = m.valid && HdSameBatches(m.u, bb.m_untextured) && HdSameBatches(m.t, bb.m_textured);
            ++s_hdBandQueries[b];
            s_hdBandBatches[b] += bb.m_untextured.m_count + bb.m_textured.m_count;
            if (sameList) ++s_hdBandSameList[b];
            if (sameKey) { ++s_hdBandSameKey[b]; if (sameList) ++s_hdBandSameKeyList[b]; }
            m.u.assign(bb.m_untextured.m_batches, bb.m_untextured.m_batches + bb.m_untextured.m_count);
            m.t.assign(bb.m_textured.m_batches, bb.m_textured.m_batches + bb.m_textured.m_count);
            m.pos = data.m_pos[b]; m.sun = CShadowCache::s_sunDir; m.valid = true;
        }
        if (s_hdBandQueries[0] - s_hdBandLogged < 1000) return;
        s_hdBandLogged = s_hdBandQueries[0];
        if (FILE* f = std::fopen("Logs\\mesure-bandes.txt", "a")) {
            for (int b = 0; b < 3; ++b) {
                const double q = s_hdBandQueries[b] ? double(s_hdBandQueries[b]) : 1.0;
                std::fprintf(f, "MESB1 bande %d : %llu requetes, liste identique %.1f %%, centre+soleil identiques %.1f %% (dont liste identique %.1f %%), %.0f batchs/requete\n",
                    b, (unsigned long long)s_hdBandQueries[b], 100.0 * s_hdBandSameList[b] / q, 100.0 * s_hdBandSameKey[b] / q,
                    s_hdBandSameKey[b] ? 100.0 * s_hdBandSameKeyList[b] / s_hdBandSameKey[b] : 0.0, s_hdBandBatches[b] / q);
            }
            std::fclose(f);
        }
        for (int b = 0; b < 3; ++b) s_hdBandQueries[b] = s_hdBandSameList[b] = s_hdBandSameKey[b] = s_hdBandSameKeyList[b] = s_hdBandBatches[b] = 0;
        s_hdBandLogged = 0;
    }
}

// Claude voie B: the end of the sun query, the band parameters of the GPU's tests.
static void HdGpuFixedEnd(CShadowCacheQueryData& data) {
    HD::GpuFixed::BandIn bands[3];
    int32_t flags = 0;
    for (int32_t i = 0; i <= data.m_lastBand && i < 3; i++) flags |= data.m_queryFlags[i];
    for (int32_t b = 0; b < 3; ++b) {
        HD::GpuFixed::BandIn& in = bands[b];
        in.on = b <= data.m_lastBand && (flags & 0xC) && (data.m_queryFlags[b] & 0x8) && HdCasterKind(1);
        in.onAnim = b <= data.m_lastBand && (flags & 0xC) && (data.m_queryFlags[b] & 0x4) && HdCasterKind(1);   // Claude B4
        if (!in.on && !in.onAnim) continue;
        in.frustum = &data.m_bandFrustums[b];
        in.cull = &data.m_cullFrustums[b];
        in.useCull = data.m_useCullFrustum[b] != 0;
        in.extents = &data.m_extents[b];
        float minSize = 0.0f, maxSize = 0.0f;
        CShadowQuery::GetSize(data, b, &minSize, &maxSize);
        in.maxSize = maxSize;
        bool fromBand = false;
#ifdef WOWDECOMP_VULKAN
        fromBand = HD::VulkanShadows::FullCasters();
#endif
        if (fromBand) {
            const C3Vector& c = data.m_pos[b];
            in.pos[0] = c.x; in.pos[1] = c.y; in.pos[2] = c.z;
            const bool casterFade = HD::ShadowCasterFade();
            in.fadeMode = casterFade && b == 0 ? 2u : 1u;
            for (int lv = 0; lv < 5; ++lv) {
                float limit = CWorldScene::s_fadeDistMinSqr[lv];
                if (casterFade && b == 1) {
                    const float reach = sqrtf(limit) + 40.0f;
                    limit = reach * reach;
                }
                in.fade[lv] = limit;
            }
        } else {
            const C3Vector& c = CWorldScene::s_activeWorldView;
            in.pos[0] = c.x; in.pos[1] = c.y; in.pos[2] = c.z;
            in.fadeMode = 0u;
            for (int lv = 0; lv < 5; ++lv) in.fade[lv] = CWorldScene::s_fadeDistMinSqr[lv];
        }
    }
    HD::GpuFixed::EndQuery(bands);
}

namespace { uint32_t HdQueryThreads(); }   // Claude B4

int32_t CShadowQuery::QueryCallback(CShadowCacheQueryData& data, uint32_t frame) {
    // Claude CACHE1d: camera-independent fixed models while the static cache is on (every pass, the cached layer
    // and the original draw used by the proof alike).
    s_worldFrame = CShadowCache::IsCollectingStaticLayers();
    ++s_worldStamp; // Claude CACHE1e: forgets the fixed models of the previous frame
    if (CShadowCache::IsSplitCheckFrame() || CShadowCache::IsCollectingStaticLayers()) {
        for (auto& flags : s_shadowCandidateFlags) {
            flags.untextured.clear();
            flags.textured.clear();
        }
    }
#ifdef WOWDECOMP_VULKAN
    if (HD::VulkanShadows::FullCasters()) {
        data.m_useFrustum = 0;
        for (int i=0; i<3; ++i) data.m_useCullFrustum[i] = 0;
    }
#endif
    CShadowQuery::AllocBuffers();

    if (!++CShadowQuery::s_stamp) {
        CShadowQuery::s_stamp = 1;
    }

    // Claude voie B: the sun bands' query (not the dynamic shadow's, not the static layers'): the registered fixed
    // doodads are left to the GPU (HD/HdGpuFixed.h).
    const bool hdGpuFixed = CShadowCache::HdSunQuery() && !data.m_useFrustum && !s_worldFrame && g_shadowInstancing->m_intValue
        && !s_hdBigRockFile && HdCasterKind(1);
    HD::GpuFixed::BeginQuery(hdGpuFixed, CShadowCache::IsSplitCheckFrame(), hdGpuFixed ? HdGpuFixedSkipGen() : 0u, HdQueryThreads());

    // Claude PARQ2: the gathers of this query are written down and done at its end on several cores (see
    // HdRunDeferredGathers); hdShadowGatherThreads 0 = done inside the query as before.
    const uint32_t hdGatherThreads = HdGatherThreads();
    if (!hdGatherThreads) {
        CShadowQuery::QueryBands(data);
        HdGpuFixedEnd(data);
        return 1;
    }
    s_hdReqs.clear();
    s_hdDefer = true;
    CShadowQuery::QueryBands(data);
    s_hdDefer = false;
    HdRunDeferredGathers(hdGatherThreads);
    s_hdDefer = false;
    HdMeasureBandReuse(data); // Claude MESB1 (mesure)

    static uint32_t s_hdGatherChecks = 0;
    if (s_hdGatherCheck->m_intValue && (s_hdGatherChecks++ % 121) == 0) { // 121: several queries a frame (one per band), all of them in turn
        // The proof: the same query again the original way (gathers inside the query), from the same world, with fresh
        // stamps; its lists are the ones kept. Every list and flag of the parallel path must be the same.
        static std::vector<CModelBatch> gotU[3], gotT[3];
        static std::vector<uint8_t> gotFU[3], gotFT[3];
        static uint64_t s_chkQueries = 0, s_chkReqs = 0, s_chkBatches = 0, s_chkListBad = 0, s_chkFlagBad = 0, s_chkWorkers = 0;
        for (int b = 0; b < 3; ++b) {
            const ShadowQueryBuffers& bb = CShadowQuery::s_bandBuffers[b];
            gotU[b].assign(bb.m_untextured.m_batches, bb.m_untextured.m_batches + bb.m_untextured.m_count);
            gotT[b].assign(bb.m_textured.m_batches, bb.m_textured.m_batches + bb.m_textured.m_count);
            gotFU[b] = s_shadowCandidateFlags[b].untextured;
            gotFT[b] = s_shadowCandidateFlags[b].textured;
        }
        s_chkReqs += s_hdReqs.size();
        for (const HdGatherReq& r : s_hdReqs) s_chkWorkers += r.part != kHdParts;
        if (CShadowCache::IsSplitCheckFrame() || CShadowCache::IsCollectingStaticLayers()) {
            for (auto& f : s_shadowCandidateFlags) {
                f.untextured.clear();
                f.textured.clear();
            }
        }
        CShadowQuery::AllocBuffers();
        if (!++CShadowQuery::s_stamp) CShadowQuery::s_stamp = 1;
        ++s_worldStamp; // the CACHE1e decisions are made again too
        CShadowQuery::QueryBands(data);
        ++s_chkQueries;
        for (int b = 0; b < 3; ++b) {
            const ShadowQueryBuffers& bb = CShadowQuery::s_bandBuffers[b];
            s_chkBatches += bb.m_untextured.m_count + bb.m_textured.m_count;
            if (!HdSameBatches(gotU[b], bb.m_untextured) || !HdSameBatches(gotT[b], bb.m_textured)) ++s_chkListBad;
            if (gotFU[b] != s_shadowCandidateFlags[b].untextured || gotFT[b] != s_shadowCandidateFlags[b].textured) ++s_chkFlagBad;
        }
        if (FILE* f = std::fopen("Logs\\preuve-soleil.txt", "a")) {
            std::fprintf(f, "PREUVE collecte soleil en parallele (PARQ2) : %llu requetes refaites, %llu collectes (%llu sur les coeurs), %llu batchs compares, %llu listes differentes, %llu drapeaux differents\n",
                s_chkQueries, s_chkReqs, s_chkWorkers, s_chkBatches, s_chkListBad, s_chkFlagBad);
            std::fclose(f);
        }
    }
    HdGpuFixedEnd(data);
    return 1;
}

// Claude PARQ2: the band queries of QueryCallback (its original statements, moved here so the proof can run them twice).
void CShadowQuery::QueryBands(CShadowCacheQueryData& data) {
    int32_t flags = 0;

    for (int32_t i = 0; i <= data.m_lastBand; i++) {
        flags |= data.m_queryFlags[i];
    }

    { HD::CataRenderPerf::Scope hdQe(HD::CataRenderPerf::Stage::ShadowQEntities); CShadowQuery::GatherShadowCasters(data, 0, data.m_lastBand); } // Claude QPROF1

    if (data.m_useFrustum) {
        if (flags & 0xC) {
            CFrustum& frustum = data.m_frustums[data.m_lastBand];
            C3Vector center(0.0f, 0.0f, 0.0f);
            center.x = frustum.corners[0].x;
            center.y = frustum.corners[0].y;
            center.z = frustum.corners[0].z;
            center.x = center.x + frustum.corners[3].x;
            center.y = center.y + frustum.corners[3].y;
            center.z = center.z + frustum.corners[3].z;
            center.x = center.x + frustum.corners[1].x;
            center.y = center.y + frustum.corners[1].y;
            center.z = center.z + frustum.corners[1].z;
            center.x = center.x + frustum.corners[2].x;
            center.y = center.y + frustum.corners[2].y;
            center.z = center.z + frustum.corners[2].z;
            center.x = center.x * 0.25f;
            center.y = center.y * 0.25f;
            center.z = center.z * 0.25f;
            CWorldScene::CreateOcclusionVolumes(&center, frustum.corners, 1);
            CShadowQuery::QueryMapObjDefs(data, 0, data.m_lastBand);
            CShadowQuery::QueryTerrain(data, 0, data.m_lastBand);
        }
    } else {
        for (int32_t band = 0; band <= data.m_lastBand; band++) {
            if (flags & 0xC) {
                CWorldOcclusion::ClearVolumes();
                { HD::CataRenderPerf::Scope hdQm(HD::CataRenderPerf::Stage::ShadowQMapObj); CShadowQuery::QueryMapObjDefsBand(data, band); } // Claude QPROF1
                CShadowQuery::QueryTerrainBand(data, band);
            }
        }
    }
}

// HD: hdShadowBillboard. Billboarded M2 parts (the leaf cards of big trees) get their bones turned toward the
// camera in CM2Model::Animate, and the shadow pass reused those bones, so their shadow turned with the camera.
// During the shadow pass only, turn them toward the sun instead (1), or hide them (2, test), then put the
// camera bones back for the normal render. 0 = original.
namespace {
    struct HdSavedBone {
        C44Matrix* bone;
        C44Matrix saved;
    };

    std::vector<HdSavedBone> s_hdSavedBones;
    std::vector<CM2Model*> s_hdBillboardModels;
    std::vector<C44Matrix> s_hdBoneDelta;
    std::vector<uint8_t> s_hdBoneMoved;

    // Same math as the billboard block of CM2Model::Animate, done in a camera placed at the sun.
    void HdSunBillboard(C44Matrix& m, uint32_t billboard, const C3Vector& p, const C44Matrix& toSun, const C44Matrix& fromSun) {
        C44Matrix s = m * toSun;
        C3Vector& rowA = *reinterpret_cast<C3Vector*>(&s.a0);
        C3Vector& rowB = *reinterpret_cast<C3Vector*>(&s.b0);
        C3Vector& rowC = *reinterpret_cast<C3Vector*>(&s.c0);
        C3Vector scale;
        scale.x = sqrtf(s.a0 * s.a0 + s.a1 * s.a1 + s.a2 * s.a2);
        scale.y = sqrtf(s.b0 * s.b0 + s.b1 * s.b1 + s.b2 * s.b2);
        scale.z = sqrtf(s.c0 * s.c0 + s.c1 * s.c1 + s.c2 * s.c2);
        C3Vector pivot = p * s;

        switch (billboard) {
            case 16: {
                rowA.NormalizeSafe();
                float x = rowA.x;
                rowB.x = rowA.y;
                rowB.y = -x;
                rowB.z = 0.0f;
                rowB.NormalizeSafe();
                float cx = rowA.z * rowB.y - rowB.z * rowA.y;
                float cy = rowA.x * rowB.z - rowB.x * rowA.z;
                rowC.x = cx;
                rowC.y = cy;
                rowC.z = rowB.x * rowA.y - rowA.x * rowB.y;
                break;
            }

            case 32: {
                rowB.NormalizeSafe();
                float x = rowB.x;
                rowA.x = -rowB.y;
                rowA.y = x;
                rowA.z = 0.0f;
                rowA.NormalizeSafe();
                float cx = rowA.z * rowB.y - rowB.z * rowA.y;
                float cy = rowA.x * rowB.z - rowB.x * rowA.z;
                rowC.x = cx;
                rowC.y = cy;
                rowC.z = rowB.x * rowA.y - rowA.x * rowB.y;
                break;
            }

            case 64: {
                rowC.NormalizeSafe();
                float x = rowC.x;
                rowB.x = rowC.y;
                rowB.y = -x;
                rowB.z = 0.0f;
                rowB.NormalizeSafe();
                float ax = rowC.y * rowB.z - rowC.z * rowB.y;
                float ay = rowB.x * rowC.z - rowB.z * rowC.x;
                rowA.x = ax;
                rowA.y = ay;
                rowA.z = rowB.y * rowC.x - rowB.x * rowC.y;
                break;
            }

            default: {
                // 8 (and mixed flags): face the camera, here the sun. The animated twist of case 8 is left out.
                rowA = C3Vector(0.0f, 0.0f, -1.0f);
                rowB = C3Vector(1.0f, 0.0f, 0.0f);
                rowC = C3Vector(0.0f, 1.0f, 0.0f);
                break;
            }
        }

        s.Scale(scale);
        s.d0 = pivot.x - (s.a0 * p.x + s.b0 * p.y + s.c0 * p.z);
        s.d1 = pivot.y - (s.a1 * p.x + s.b1 * p.y + s.c1 * p.z);
        s.d2 = pivot.z - (s.a2 * p.x + s.b2 * p.y + s.c2 * p.z);
        s.a3 = 0.0f;
        s.b3 = 0.0f;
        s.c3 = 0.0f;
        s.d3 = 1.0f;
        m = s * fromSun;
    }

    void HdCollectBillboardModels(const CModelBatchList& list) {
        for (uint32_t i = 0; i < list.m_count; i++) {
            CM2Model* model = list.m_batches[i].m_model;

            if (model && model->GetBillboardBoneCount() && model->m_boneMatrices && std::find(s_hdBillboardModels.begin(), s_hdBillboardModels.end(), model) == s_hdBillboardModels.end()) {
                s_hdBillboardModels.push_back(model);
            }
        }
    }

    // Rewrites the billboard bones (and the bones hanging under them) of the models about to cast; RestoreBillboards undoes it.
    void HdApplyBillboards(const C44Matrix& inverseView, int32_t mode, const C3Vector& sun);

    void HdShadowBillboards(const ShadowQueryBuffers& buffers, const C44Matrix& inverseView, int32_t mode, const C3Vector& sun) {
        s_hdSavedBones.clear();
        s_hdBillboardModels.clear();

        if (mode <= 0) {
            return;
        }

        HdCollectBillboardModels(buffers.m_untextured);
        HdCollectBillboardModels(buffers.m_textured);
        HdApplyBillboards(inverseView, mode, sun);
    }

    // Claude voie B: the same rewrite for the casters the GPU draws from CPU-written bone rows.
    void HdShadowBillboardModels(const std::vector<CM2Model*>& models, const C44Matrix& inverseView, int32_t mode, const C3Vector& sun) {
        s_hdSavedBones.clear();
        s_hdBillboardModels.clear();

        if (mode <= 0) {
            return;
        }

        for (CM2Model* model : models) {
            if (model && model->GetBillboardBoneCount() && model->m_boneMatrices && std::find(s_hdBillboardModels.begin(), s_hdBillboardModels.end(), model) == s_hdBillboardModels.end()) {
                s_hdBillboardModels.push_back(model);
            }
        }
        HdApplyBillboards(inverseView, mode, sun);
    }

    void HdApplyBillboards(const C44Matrix& inverseView, int32_t mode, const C3Vector& sun) {
        if (s_hdBillboardModels.empty()) {
            return;
        }

        // A camera at the sun, built like the game camera (GxuXformCreateLookAtSgCompat), world up when it can.
        C3Vector sunDir = sun; // HD: the same frozen direction as this tile
        C3Vector up(0.0f, 0.0f, 1.0f);

        if (sunDir.SquaredMag() < 0.0001f) {
            return;
        }

        if (fabsf(sunDir.z) > 0.99f * sqrtf(sunDir.SquaredMag())) {
            up = C3Vector(1.0f, 0.0f, 0.0f);
        }

        C44Matrix sunView;
        GxuXformCreateLookAtSgCompat(C3Vector(0.0f, 0.0f, 0.0f), sunDir, up, sunView);
        C44Matrix toSun = inverseView * sunView;
        float toSunDet = toSun.Determinant();

        if (fabsf(toSunDet) < 0.000001f) {
            return;
        }

        C44Matrix fromSun = toSun.Inverse(toSunDet);

        for (CM2Model* model : s_hdBillboardModels) {
            M2Data* data = model->m_shared->m_data;
            uint32_t count = data->m_bones.m_count;
            s_hdBoneDelta.resize(count);
            s_hdBoneMoved.assign(count, 0);

            for (uint32_t i = 0; i < count; i++) {
                M2CompBone& boneData = data->m_bones[i];
                uint32_t billboard = boneData.m_flags & 0x78;
                uint16_t parent = boneData.m_parentIndex;
                bool parentMoved = parent < count && parent < i && s_hdBoneMoved[parent];

                if (!billboard && !parentMoved) {
                    continue;
                }

                C44Matrix& bone = model->m_boneMatrices[i];
                C44Matrix original = bone;
                s_hdSavedBones.push_back({ &bone, original });

                if (mode == 2) {
                    // Test: the billboard parts cast nothing (all their vertices fall on one point).
                    bone.a0 = bone.a1 = bone.a2 = 0.0f;
                    bone.b0 = bone.b1 = bone.b2 = 0.0f;
                    bone.c0 = bone.c1 = bone.c2 = 0.0f;
                    s_hdBoneMoved[i] = 1;
                    continue;
                }

                if (parentMoved) {
                    // Child of a turned bone: follow it, like Animate does with the parent matrix.
                    bone = bone * s_hdBoneDelta[parent];
                }

                if (billboard) {
                    HdSunBillboard(bone, billboard, boneData.m_pivot, toSun, fromSun);
                }

                float det = original.Determinant();

                if (fabsf(det) > 0.0000001f) {
                    s_hdBoneDelta[i] = original.Inverse(det) * bone;
                    s_hdBoneMoved[i] = 1;
                }
            }
        }
    }

    void HdRestoreBillboards() {
        for (auto it = s_hdSavedBones.rbegin(); it != s_hdSavedBones.rend(); ++it) {
            *it->bone = it->saved;
        }

        s_hdSavedBones.clear();
        s_hdBillboardModels.clear();
    }
}

// VERIFY: 2abab737 manual
// OFFSET: 0x007BBC50
int32_t CShadowQuery::RenderCallback(CShadowCacheQueryData& data, int32_t band, CGxTex* target, CGxTex* colorTarget, C3Vector& direction, const C3Vector& sun) {
    ShadowQueryBuffers& buffers = CShadowQuery::s_bandBuffers[band];
    int32_t layerPass = CShadowCache::ShadowLayerPass();
    // Claude CACHE1c (diagnostic): pass 4 = pass 1 drawn with the light matrix (c14..c16) of the last real pass 1.
    const bool keptLightMatrix = layerPass == 4;
    if (keptLightMatrix) layerPass = 1;
    if (HDShadowDiag::calls < 8) { // HD diagnostic (temporary): casters per render call this frame
        HDShadowDiag::groups[HDShadowDiag::calls] = buffers.m_groupCount;
        HDShadowDiag::m2[HDShadowDiag::calls++] = buffers.m_untextured.m_count + buffers.m_textured.m_count;
    }

    // The generic Clear helper rebinds depth. Keep the dedicated attachment for a static layer,
    // including the empty case, so its clear is what gets copied into the composition.
    // GPT CACHE1b: WMO groups are drawn in pass 1 only, so the dynamic passes (2, 3) ignore them here.
    // hdShadowStaticGroups 0: the groups are drawn in the dynamic pass instead (the layer then holds only M2 batches).
    const bool groupsInLayer = !s_shadowStaticGroups || s_shadowStaticGroups->m_intValue;
    const bool staticDraw = CShadowCache::IsDrawingStaticLayers();
    const uint32_t groupsInPass = !staticDraw ? ((layerPass == 2 || layerPass == 3) ? 0 : buffers.m_groupCount)
        : ((layerPass == 1) == groupsInLayer ? buffers.m_groupCount : 0);
    if (layerPass != 1 && !groupsInPass && !buffers.m_untextured.m_count && !buffers.m_textured.m_count
        && !(layerPass == 0 && HD::GpuFixed::BandOn(band))) { // Claude voie B: the GPU may have doodads to draw
        if (layerPass != 2) CShadowQuery::Clear(target, colorTarget, data.m_texBounds[band]);
        return 1;
    }

    if (colorTarget) {
        GxRenderTargetSet(GxBuffers_Depth, colorTarget, 0);
    }

    g_theGxDevicePtr->RsPush();
    GxRsSet(GxRs_Culling, 0);
    CShaderEffect::SetTexMtx_Identity(0);

    C44Matrix projection;
    C3Vector eye(0.0f, 0.0f, 0.0f);
    C3Vector center(0.0f, 0.0f, 0.0f);
    C44Matrix lookAt;
    C44Matrix view;
    C44Matrix inverseView;
    C3Vector camera(0.0f, 0.0f, 0.0f);
    CGxTex* oldTarget;
    g_theGxDevicePtr->DeviceGetRenderTarget(GxBuffers_Color, oldTarget);
    GxRsSet(GxRs_Fog, 0);

    CShaderEffect* effect = CShaderEffectManager::GetEffect("ShadowMapRenderSL");
    CGWorldFrame::GetCameraPosition(&camera);
    C3Vector& pos = data.m_pos[band];
    eye.x = pos.x - sun.x * 2000.0f - camera.x;
    eye.y = pos.y - sun.y * 2000.0f - camera.y;
    eye.z = pos.z - 2000.0f * sun.z - camera.z;
    center.x = pos.x - camera.x;
    center.y = pos.y - camera.y;
    center.z = pos.z - camera.z;

    C44Matrix translation;
    translation.d0 = -camera.x;
    translation.d1 = -camera.y;
    translation.d2 = -camera.z;

    CGxDevice* device = g_theGxDevicePtr;
    projection = device->m_projection;
    float viewportMinX = device->m_viewport.m_x.m_l;
    float viewportMaxX = device->m_viewport.m_x.m_h;
    float viewportMinY = device->m_viewport.m_y.m_l;
    float viewportMaxY = device->m_viewport.m_y.m_h;
    float viewportMinZ = device->m_viewport.m_z.m_l;
    float viewportMaxZ = device->m_viewport.m_z.m_h;
    GxXformSetViewport(data.m_texBounds[band][0], data.m_texBounds[band][1], data.m_texBounds[band][2], data.m_texBounds[band][3], 0.0f, 1.0f);

    CGxMatrixStack& stack = g_theGxDevicePtr->m_xforms[GxXform_View];
    view = stack.m_mtx[stack.m_level];
    C44Matrix copy = view;
    float determinant = copy.Determinant();
    inverseView = copy.Inverse(determinant);

    effect->SetCurrent();
    float constants[4] = { 0.0f, 0.0f, 0.0f, 0.00025000001f };
    CShadowCache::SetShadowScale(0.00025000001f);
    g_theGxDevicePtr->ShaderConstantsSet(GxSh_Pixel, 0, constants, 1);
    CShaderEffect::s_shadowValue = CShadowCache::GetShadowValue();
    // Claude CACHE1d: the shadow vertex shader is chosen by SetDefaultShaders from the lighting state the last
    // lit draw of the main render left (lit or not, local light count): it changes with what the camera looks at
    // and moves the cut of alpha-tested leaves by a texel. While the cache is on the shadow pass picks it from a
    // fixed state (unlit, no local light), restored after the pass.
    const int32_t savedLightEnabled = CShaderEffect::s_lightEnabled;
    const uint32_t savedLocalLights = CShaderEffect::s_localLightCount;
    const bool fixedShaderState = s_worldFrame;
    if (fixedShaderState) {
        CShaderEffect::s_lightEnabled = 0;
        CShaderEffect::s_localLightCount = 0;
    }
    g_theGxDevicePtr->XformSetProjection(data.m_matrices[band]);
    CShaderEffect::UpdateProjMatrix();
    GxRsSet(GxRs_ScissorTest, 0);
    g_theGxDevicePtr->DeviceSetRenderTarget(GxBuffers_Color, target, 0);
    if (layerPass != 2) GxSceneClear(3, CImVector(0xFF, 0xFF, 0xFF, 0xFF));

    if (g_shadowScissor->m_intValue
#ifdef WOWDECOMP_VULKAN
        && !HD::VulkanShadows::FullCasters()
#endif
    ) {
        GxRsSet(GxRs_ScissorTest, 1);
        float* rect = data.m_cullRects[band];
        CRect scissor;
        scissor.minY = (rect[0] + 1.0f) * 0.5f;
        scissor.minX = (rect[1] + 1.0f) * 0.5f;
        scissor.maxY = (rect[2] + 1.0f) * 0.5f;
        scissor.maxX = 0.5f * (rect[3] + 1.0f);
        g_theGxDevicePtr->SetScissor(scissor);
    }

    GxuXformCreateLookAtXXX(eye, center, direction, lookAt);
    g_theGxDevicePtr->XformSetView(lookAt);
    C44Matrix texMatrix = (inverseView * lookAt).Transpose();
#ifdef WOWDECOMP_VULKAN
    {
        static C44Matrix s_lastPass1Tex[3];
        if (band >= 0 && band < 3) {
            if (keptLightMatrix) texMatrix = s_lastPass1Tex[band];
            else if (layerPass == 1) s_lastPass1Tex[band] = texMatrix;
        }
    }
#endif
    g_theGxDevicePtr->ShaderConstantsSet(GxSh_Vertex, 14, &texMatrix.a0, 3);

    // Claude CACHE1d: the same light matrix built around the band centre instead of the camera, for the fixed
    // models and the buildings (HD::ShadowWorld). Equal in exact arithmetic to the camera-relative one.
    C44Matrix originLookAt;
    C44Matrix originTranslation;
    const bool worldPath = s_worldFrame;
    if (worldPath) {
        const C3Vector originEye(-sun.x * 2000.0f, -sun.y * 2000.0f, -2000.0f * sun.z);
        const C3Vector originCenter(0.0f, 0.0f, 0.0f);
        GxuXformCreateLookAtXXX(originEye, originCenter, direction, originLookAt);
        originTranslation.d0 = -pos.x;
        originTranslation.d1 = -pos.y;
        originTranslation.d2 = -pos.z;
        auto& sw = HD::ShadowWorld::g_state;
        const C44Matrix light = originLookAt.Transpose();
        std::memcpy(sw.light, &light.a0, sizeof(sw.light));
        std::memcpy(sw.camera, &texMatrix.a0, sizeof(sw.camera));
        sw.origin = pos;
        sw.current = 1;
        sw.isWorld = &IsWorldShadowModel;
        sw.active = true;
        if (band >= 0 && band < 3) {
            s_lastOriginViewProj[band] = originLookAt * data.m_matrices[band]; // diagnostic
            s_lastOrigin[band] = pos;
        }
    }

    if (HD::CataRenderPerf::Enabled()) { // Claude QPROF2
        HD::CataRenderPerf::Add(HD::CataRenderPerf::Counter::ShadowBandGroups, buffers.m_groupCount);
        for (const CModelBatchList* list : { &buffers.m_untextured, &buffers.m_textured })
            for (uint32_t k = 0; k < list->m_count; ++k) {
                const CM2Model* m = list->m_batches[k].m_model;
                const bool boned = m && m->m_shared && m->m_shared->m_data && m->m_shared->m_data->m_bones.m_count > 1;
                HD::CataRenderPerf::Add(boned ? HD::CataRenderPerf::Counter::ShadowBatchBoned : HD::CataRenderPerf::Counter::ShadowBatchOneBone);
            }
    }
    // GPT CACHE1b: WMO groups belong to the static layer (pass 1). The dynamic pass (2) and the dynamic-only
    // diagnostic (3) never draw them; the plain path and the split-check modes draw them as before.
    const bool drawGroups = groupsInPass != 0;
    if (drawGroups && groupsInPass) {
        HD::CataRenderPerf::Scope hdRg(HD::CataRenderPerf::Stage::ShadowRGroups); // Claude QPROF1
        if (worldPath) {
            // Claude CACHE1d: buildings around the band centre too (world * -centre * light matrix around the centre).
            g_theGxDevicePtr->XformSetView(originLookAt);
            CMapObj::RenderMapObjGroupsShadowMap(buffers.m_groups, buffers.m_groupCount, buffers.m_groupData, originTranslation, data.m_frustums[band]);
            g_theGxDevicePtr->XformSetView(lookAt);
        } else {
            CMapObj::RenderMapObjGroupsShadowMap(buffers.m_groups, buffers.m_groupCount, buffers.m_groupData, translation, data.m_frustums[band]);
        }
    }

    // Claude voie B: on its proof frames the CPU lists hold every doodad (the reference draws them all); the real pass
    // leaves out those the GPU draws.
    const bool hdGpuDraw = !worldPath && layerPass == 0 && HD::GpuFixed::BandOn(band)
        && !(CShadowCache::IsDrawingSplitReference() && HD::GpuFixed::ProofFrame());
    if (hdGpuDraw && HD::GpuFixed::ProofFrame()) {
        for (CModelBatchList* list : { &buffers.m_untextured, &buffers.m_textured }) {
            uint32_t kept = 0;
            for (uint32_t i = 0; i < list->m_count; ++i)
                if (!HD::GpuFixed::DrawnByGpu(list->m_batches[i].m_model)) list->m_batches[kept++] = list->m_batches[i];
            list->m_count = kept;
        }
    }

    if (buffers.m_untextured.m_count || buffers.m_textured.m_count) {
        const bool splitReference = CShadowCache::IsDrawingSplitReference();
        if (!splitReference && worldPath && g_shadowInstancing->m_intValue) {
            // Claude CACHE1d: sort copies, not the band lists: the cache flags of this frame (s_shadowCandidateFlags)
            // follow the collection order and are read again after this draw (proof diagnostic). Same draws.
            static thread_local std::vector<CModelBatch> sorted[2];
            sorted[0].assign(buffers.m_untextured.m_batches, buffers.m_untextured.m_batches + buffers.m_untextured.m_count);
            sorted[1].assign(buffers.m_textured.m_batches, buffers.m_textured.m_batches + buffers.m_textured.m_count);
            CModelBatchList untextured{sorted[0].data(), static_cast<uint32_t>(sorted[0].size()), static_cast<uint32_t>(sorted[0].size())};
            CModelBatchList textured{sorted[1].data(), static_cast<uint32_t>(sorted[1].size()), static_cast<uint32_t>(sorted[1].size())};
            {
                HD::CataRenderPerf::Scope hdRo(HD::CataRenderPerf::Stage::ShadowROptimize);
                untextured.Optimize();
                textured.Optimize();
            }
            if (layerPass != 1) HdShadowBillboards(buffers, inverseView, HD::ShadowBillboardMode(), sun);
            {
                HD::CataRenderPerf::Scope hdRm(HD::CataRenderPerf::Stage::ShadowRModels);
                CM2Model::RenderModelBatchesShadowMap(untextured, textured);
            }
            if (layerPass != 1) HdRestoreBillboards();
        } else {
        if (!splitReference && g_shadowInstancing->m_intValue) {
            HD::CataRenderPerf::Scope hdRo(HD::CataRenderPerf::Stage::ShadowROptimize); // Claude QPROF1
            buffers.m_untextured.Optimize();
            buffers.m_textured.Optimize();
        }

        if (buffers.m_untextured.m_count > s_maxUntexturedBatches) {
            s_maxUntexturedBatches = buffers.m_untextured.m_count;
        }

        if (buffers.m_textured.m_count > s_maxTexturedBatches) {
            s_maxTexturedBatches = buffers.m_textured.m_count;
        }

        if (layerPass != 1) {
            HD::CataRenderPerf::Scope hdRb(HD::CataRenderPerf::Stage::ShadowRBillboards);
            HdShadowBillboards(buffers, inverseView, HD::ShadowBillboardMode(), sun);
        }
        {
            HD::CataRenderPerf::Scope hdRm(HD::CataRenderPerf::Stage::ShadowRModels);
#ifdef WOWDECOMP_VULKAN
            if (layerPass == 1 && !keptLightMatrix) SnapshotPass1Constants(band); // Claude CACHE1c (diagnostic)
#endif
            if (splitReference) RenderSplitShadowBatches(buffers, band, layerPass);
            else CM2Model::RenderModelBatchesShadowMap(buffers.m_untextured, buffers.m_textured);
        }
        if (layerPass != 1) {
            HD::CataRenderPerf::Scope hdRb2(HD::CataRenderPerf::Stage::ShadowRBillboards);
            HdRestoreBillboards();
        }
        } // Claude CACHE1d: else of the sorted copies
    }

    if (hdGpuDraw) {   // Claude voie B: the doodads the GPU draws for this band (fixed ones, then the CPU-chosen ones)
        const std::vector<CM2Model*>& hdCpuModels = HD::GpuFixed::CpuModels(band);
        if (!hdCpuModels.empty()) {
            HD::CataRenderPerf::Scope hdRb(HD::CataRenderPerf::Stage::ShadowRBillboards);
            HdShadowBillboardModels(hdCpuModels, inverseView, HD::ShadowBillboardMode(), sun);
        }
        {
            HD::CataRenderPerf::Scope hdRm(HD::CataRenderPerf::Stage::ShadowRModels);
            HD::GpuFixed::DrawBand(band);
        }
        if (!hdCpuModels.empty()) {
            HD::CataRenderPerf::Scope hdRb2(HD::CataRenderPerf::Stage::ShadowRBillboards);
            HdRestoreBillboards();
        }
    }

    if (fixedShaderState) {
        CShaderEffect::s_lightEnabled = savedLightEnabled;
        CShaderEffect::s_localLightCount = savedLocalLights;
    }
    // Claude CACHE1d: the camera-independent draw ends with this pass.
    HD::ShadowWorld::g_state.active = false;
    HD::ShadowWorld::g_state.current = -1;

    g_theGxDevicePtr->RsPop();
    GxXformSetViewport(viewportMinX, viewportMaxX, viewportMinY, viewportMaxY, viewportMinZ, viewportMaxZ);
    g_theGxDevicePtr->XformSetView(view);
    GxRsSet(GxRs_ScissorTest, 0);
    g_theGxDevicePtr->DeviceSetRenderTarget(GxBuffers_Color, oldTarget, 0);
    g_theGxDevicePtr->XformSetProjection(projection);
    CShaderEffect::UpdateProjMatrix();
    return 1;
}

// VERIFY: f464b8c3 manual
// OFFSET: 0x007BB9D0
void CShadowQuery::GatherShadowCasters(CShadowCacheQueryData& data, int32_t firstBand, int32_t lastBand) {
    float maxRadius[3];
    float minRadius[3];
    maxRadius[0] = 10000.0f;

    if ((data.m_queryFlags[0] & 0xC) == 4) {
        maxRadius[0] = 25.0f;
    }

    minRadius[0] = 0.25f;
    maxRadius[1] = 10000.0f;
    minRadius[1] = 2.0f;
    maxRadius[2] = 10000.0f;
    minRadius[2] = 10.0f;

    for (CMapEntity* entity = CMap::entityList.Head(); entity; entity = CMap::entityList.Next(entity)) {
        if (entity->m_staticFlags & 0x4) {
            continue;
        }

        CM2Model* model = entity->m_model;

        if (!model) {
            continue;
        }

        int32_t isUnit = 1;

        if (!(entity->m_type & 0x20) || (entity->m_staticFlags & 0x2000)) {
            isUnit = 0;
        }

        uint32_t doodad = (model->m_fFlags & 0x1) ? model->m_shared->m_billboardBoneCount : 0;

        for (int32_t band = firstBand; band <= lastBand; band++) {
            int32_t queryFlags = data.m_queryFlags[band];
            uint32_t flags;

            if (queryFlags & 0x2) {
                if (!isUnit) {
                    continue;
                }

                flags = entity->m_flags;

                if (flags & 0x4) {
                    continue;
                }

                if (CShadowQuery::s_cutoffHeight < entity->m_position.z) {
                    continue;
                }
            } else {
                flags = entity->m_flags;

                if (flags & 0x2) {
                    if (!(entity->m_staticFlags & 0x1000)) {
                        continue;
                    }

                    if (CShadowQuery::s_cutoffHeight < entity->m_position.z) {
                        continue;
                    }
                }
            }

            int32_t wanted;

            if (isUnit) {
                wanted = queryFlags & 0x1;
            } else if (doodad) {
                wanted = queryFlags & 0x4;
            } else {
                wanted = queryFlags & 0x8;
            }

            if (!wanted) {
                continue;
            }

            CAaBox& extents = data.m_extents[band];
            CAaBox& bbox = entity->m_bbox;

            if (extents.t.x >= bbox.b.x && extents.t.y >= bbox.b.y && extents.t.z >= bbox.b.z && extents.b.x <= bbox.t.x && extents.b.y <= bbox.t.y && extents.b.z <= bbox.t.z && minRadius[band] <= entity->m_sphere.r && ((flags & 0x20000) || maxRadius[band] >= entity->m_sphere.r)) {
                if (data.m_bandFrustums[band].Cull(bbox) && (!data.m_useCullFrustum[band] || data.m_cullFrustums[band].CullInv(bbox) != 3)) {
                    if (s_hdBigRockFile) std::fprintf(s_hdBigRockFile, "bande %d | OBJET/UNITE rayon %6.1f yd | %s | %s\n", band, entity->m_sphere.r, HdCasterKind(8) ? "garde " : "RETIRE", model->m_shared ? model->m_shared->m_fileName : "?"); // Claude RM4
                    if (!HdCasterKind(8)) continue; // Claude 2026-11-08 lot RM4
                    GatherShadowBatches(model, band, false);
                }
            }
        }
    }
}

// VERIFY: 7278bb56 manual
// OFFSET: 0x007BB830
void CShadowQuery::Clear(CGxTex* target, CGxTex* depthTarget, float* rect) {
    CGxTex* oldTarget = nullptr;
    g_theGxDevicePtr->DeviceGetRenderTarget(GxBuffers_Color, oldTarget);
    CGxDevice* device = g_theGxDevicePtr;
    float viewportMinX = device->m_viewport.m_x.m_l;
    float viewportMaxX = device->m_viewport.m_x.m_h;
    float viewportMinY = device->m_viewport.m_y.m_l;
    float viewportMaxY = device->m_viewport.m_y.m_h;
    float viewportMinZ = device->m_viewport.m_z.m_l;
    float viewportMaxZ = device->m_viewport.m_z.m_h;
    GxRenderTargetSet(GxBuffers_Depth, depthTarget, 0);
    GxRenderTargetSet(GxBuffers_Color, target, 0);
    GxXformSetViewport(rect[0], rect[1], rect[2], rect[3], 0.0f, 1.0f);
    GxSceneClear(3, CImVector(0xFF, 0xFF, 0xFF, 0xFF));
    GxXformSetViewport(viewportMinX, viewportMaxX, viewportMinY, viewportMaxY, viewportMinZ, viewportMaxZ);
    GxRenderTargetSet(GxBuffers_Color, oldTarget, 0);
}

// VERIFY: 89a7afcf auto
// OFFSET: 0x007BA8F0
void CShadowQuery::GetSize(CShadowCacheQueryData& data, int32_t band, float* minSize, float* maxSize) {
    *maxSize = 10000.0f;

    if (band == 0) {
        if ((data.m_queryFlags[0] & 0xC) == 4) {
            *maxSize = 25.0f;
            *minSize = 0.25f;
            return;
        }

        *minSize = 0.25f;
        return;
    }

    if (band < 1) {
        *minSize = 0.25f;
        return;
    }

    *minSize = band >= 2 ? 10.0f : 2.0f;
}

// VERIFY: 69b3a5e2 auto
// OFFSET: 0x007BABC0
bool CWorldScene::IsBeyondFadeDistance(const C3Vector& position, uint32_t fadeLevel) {
    float dz = position.z - CWorldScene::s_activeWorldView.z;
    float dy = position.y - CWorldScene::s_activeWorldView.y;
    float dx = position.x - CWorldScene::s_activeWorldView.x;
    return dx * dx + (dy * dy + dz * dz) > CWorldScene::s_fadeDistMinSqr[fadeLevel];
}

// HD: which doodads a shadow band takes must not depend on the camera. The engine measured the fade distance from
// the camera (s_activeWorldView): a camera a few yards away (collision, zoom, a turn) dropped a third of the trees
// from the shadow maps, and every shadow on screen changed at once (flicker with a still view). With the Vulkan
// shadows (full casters) the distance is taken from the band's own centre, which only moves with the player.
static bool ShadowBeyondFade(const CShadowCacheQueryData& data, int32_t band, const C3Vector& position, uint32_t fadeLevel) {
#ifdef WOWDECOMP_VULKAN
    if (HD::VulkanShadows::FullCasters()) {
        const C3Vector& centre = data.m_pos[band];
        float dx = position.x - centre.x;
        float dy = position.y - centre.y;
        float dz = position.z - centre.z;
        float limit = CWorldScene::s_fadeDistMinSqr[fadeLevel];
        // HD: hdShadowCasterFade. The fade distance (25 yd for small doodads, 90 for trees) measured from the band's
        // centre, which follows the player in 2..16 yd steps: a bush or a tree near that distance left the shadow map
        // and came back at each step, so its shadow blinked at precise places as the player moved (where it fell
        // depended on the sun). Band 0 now keeps every caster in its box; band 1 keeps them 40 yd past the fade
        // distance, beyond band 0 where its own shadows show.
        if (HD::ShadowCasterFade()) {
            if (band == 0) return false;
            if (band == 1) {
                float reach = sqrtf(limit) + 40.0f;
                limit = reach * reach;
            }
        }
        return dx * dx + dy * dy + dz * dz > limit;
    }
#endif
    return CWorldScene::IsBeyondFadeDistance(position, fadeLevel);
}

// VERIFY: 18313b4e auto
// OFFSET: 0x007BB460
static void GetChunkRect(const CAaBox& box, CiRect& rect) {
    float minY = -(box.t.x - 17066.666f);
    float minX = -(box.t.y - 17066.666f);
    float maxY = -(box.b.x - 17066.666f);
    float maxX = -(box.b.y - 17066.666f);

    if (minX < 0.0f) {
        minX = 0.0f;
    }

    if (minY < 0.0f) {
        minY = 0.0f;
    }

    if (maxX >= 34133.332f) {
        maxX = 34132.332f;
    }

    if (maxY >= 34133.332f) {
        maxY = 34132.332f;
    }

    int32_t cellMaxX = CMath::fint_(maxX * 0.23999999f - 0.5f);
    int32_t cellMaxY = CMath::fint_(maxY * 0.23999999f - 0.5f);
    int32_t cellMinX = CMath::fint_(minX * 0.23999999f - 0.5f);
    int32_t cellMinY = CMath::fint_(minY * 0.23999999f - 0.5f);
    rect.minY = cellMinY >> 3;
    rect.minX = cellMinX >> 3;
    rect.maxY = cellMaxY >> 3;
    rect.maxX = cellMaxX >> 3;
}

// VERIFY: 9b4413e5 manual
// OFFSET: 0x007BC890
void CShadowQuery::QueryMapObjDefsBand(CShadowCacheQueryData& data, int32_t band) {
    float minSize;
    float maxSize;
    CShadowQuery::GetSize(data, band, &minSize, &maxSize);

    for (CMapObjDef* def = CMap::mapObjDefHash.m_fulllist.Head(); def; def = CMap::mapObjDefHash.Next(def)) {
        uint32_t flags = def->m_flags;

        if (flags & 0x20) {
            continue;
        }

        float maxDoodadSize = maxSize;
        int32_t interior = 0;
        int32_t castDoodads = 0;
        int32_t castOther = 0;

        if (flags & 0x400) {
            if (!(data.m_queryFlags[band] & 0x4)) {
                continue;
            }

            maxDoodadSize = 100000.0f;
            castDoodads = 1;
            castOther = 1;
            interior = 1;
        } else {
            int32_t queryFlags = data.m_queryFlags[band];

            if (queryFlags & 0x8) {
                castOther = 1;
            }

            if (queryFlags & 0x4) {
                castDoodads = 1;
            }
        }

        CAaBox& extents = data.m_extents[band];

        if (!extents.Intersects(def->m_bbox)) {
            continue;
        }

        if (!data.m_bandFrustums[band].Cull(def->m_bbox) || (data.m_useCullFrustum[band] && data.m_cullFrustums[band].CullInv(def->m_bbox) == 3)) {
            continue;
        }

        uint32_t groupCount = def->m_defGroups.m_count == 0xFFFFFFFF ? def->m_defGroups.m_dynamic.m_count : def->m_defGroups.m_count;

        for (uint32_t i = 0; i < groupCount; i++) {
            CMapObjDefGroup* defGroup = def->m_defGroups[i];
            CMapObjGroup* group = def->m_owner->GetGroup(i, 0);

            if (!group || !(group->m_flags & 0x48)) {
                continue;
            }

            if (!extents.Intersects(defGroup->m_bbox) || !data.m_bandFrustums[band].Cull(defGroup->m_bbox)) {
                continue;
            }

            if (data.m_useCullFrustum[band] && data.m_cullFrustums[band].CullInv(defGroup->m_bbox) == 3) {
                continue;
            }

            if ((interior ? (data.m_queryFlags[band] & 0x4) : (data.m_queryFlags[band] & 0x8)) && HdCasterKind(2)) { // Claude RM4: hdSunCasters 2
                ShadowQueryBuffers& buffers = CShadowQuery::s_bandBuffers[band];
                if (s_hdBigRockFile) { const CAaBox& g = defGroup->m_bbox; std::fprintf(s_hdBigRockFile, "bande %d | WMO groupe %u | taille %5.0f x %5.0f x %5.0f yd | %s\n", band, i, g.t.x - g.b.x, g.t.y - g.b.y, g.t.z - g.b.z, def->m_owner ? def->m_owner->m_wmoName : "?"); } // Claude RM4

                if (!HdBandGroupRoom(buffers)) { // Claude BANDE1: was >= 0x800
                    break;
                }

                static_cast<C44Matrix**>(buffers.m_groupData)[buffers.m_groupCount] = &def->m_mat;
                static_cast<CMapObjGroup**>(buffers.m_groups)[buffers.m_groupCount++] = group;
            }

            HD::GpuFixed::NoteGroup(band, defGroup, interior != 0 || !HdCasterKind(4));   // Claude voie B (other tests: CPU)
            for (CMapBaseObjLink* link = defGroup->m_doodadDefLinkList.Head(); link; link = defGroup->m_doodadDefLinkList.Next(link)) {
                CMapDoodadDef* doodad = static_cast<CMapDoodadDef*>(link->m_owner);

                if (doodad->m_shadowStamps[band] == CShadowQuery::s_stamp) {
                    continue;
                }

                if (HD::GpuFixed::Skip(band, doodad)) {   // Claude voie B: the GPU tests and draws it (never s_stamp)
                    doodad->m_shadowStamps[band] = static_cast<uint8_t>(CShadowQuery::s_stamp ^ 0x40);
                    continue;
                }

                doodad->m_shadowStamps[band] = CShadowQuery::s_stamp;
                CM2Model* model = doodad->m_model;

                if (!model || !(doodad->m_flags & 0x80) || ShadowBeyondFade(data, band, doodad->m_sphere.c, doodad->m_fadeLevel) || maxDoodadSize < doodad->m_sphere.r) {
                    continue;
                }

                if (!HdCasterKind(4)) {
                    continue; // Claude 2026-11-08 lot RM4: hdSunCasters 4
                }

                if (HdSkipBigRock(data, band, doodad, model)) {
                    continue; // Claude 2026-11-08 lot RM1: big rock / cliff, no sun shadow
                }

                int32_t wanted = model->GetBillboardBoneCount() ? castDoodads : castOther;

                if (wanted && extents.Intersects(doodad->m_bbox) && data.m_bandFrustums[band].Cull(doodad->m_bbox) && (!data.m_useCullFrustum[band] || data.m_cullFrustums[band].CullInv(doodad->m_bbox) != 3)) {
                    if (!HD::GpuFixed::Take(band, doodad))   // Claude voie B: true = the GPU draws it from the CPU's rows
                        GatherShadowBatches(model, band, true);
                }
            }
        }
    }
}

// VERIFY: 34693e83 manual
// OFFSET: 0x007BC490
void CShadowQuery::QueryMapObjDefs(CShadowCacheQueryData& data, int32_t firstBand, int32_t lastBand) {
    for (CMapObjDef* def = CMap::mapObjDefHash.m_fulllist.Head(); def; def = CMap::mapObjDefHash.Next(def)) {
        if (def->m_flags & 0x20) {
            continue;
        }

        CAaBox& lastExtents = data.m_extents[lastBand];

        if (!(lastExtents.t.x >= def->m_bbox.b.x && lastExtents.t.y >= def->m_bbox.b.y && lastExtents.t.z >= def->m_bbox.b.z && lastExtents.b.x <= def->m_bbox.t.x && lastExtents.b.y <= def->m_bbox.t.y && lastExtents.b.z <= def->m_bbox.t.z)) {
            continue;
        }

        CFrustum& lastFrustum = data.m_bandFrustums[lastBand];

        if (!lastFrustum.Cull(def->m_bbox)) {
            continue;
        }

        uint32_t groupCount = def->m_defGroups.m_count == 0xFFFFFFFF ? def->m_defGroups.m_dynamic.m_count : def->m_defGroups.m_count;

        for (uint32_t i = 0; i < groupCount; i++) {
            CMapObjDefGroup* defGroup = def->m_defGroups[i];
            CMapObjGroup* group = def->m_owner->GetGroup(i, 0);

            if (!group || !(group->m_flags & 0x48)) {
                continue;
            }

            if (!lastExtents.Intersects(defGroup->m_bbox) || !lastFrustum.Cull(defGroup->m_bbox)) {
                continue;
            }

            for (int32_t band = firstBand; band <= lastBand; band++) {
                if (data.m_extents[band].Intersects(defGroup->m_bbox) && data.m_bandFrustums[band].Cull(defGroup->m_bbox) && (!data.m_useCullFrustum[band] || data.m_cullFrustums[band].CullInv(defGroup->m_bbox) != 3)) {
                    ShadowQueryBuffers& buffers = CShadowQuery::s_bandBuffers[band];

                    if (!HdBandGroupRoom(buffers)) { // Claude BANDE1: was >= 0x800
                        break;
                    }

                    static_cast<C44Matrix**>(buffers.m_groupData)[buffers.m_groupCount] = &def->m_mat;
                    static_cast<CMapObjGroup**>(buffers.m_groups)[buffers.m_groupCount++] = group;
                }
            }

            for (CMapBaseObjLink* link = defGroup->m_doodadDefLinkList.Head(); link; link = defGroup->m_doodadDefLinkList.Next(link)) {
                CMapDoodadDef* doodad = static_cast<CMapDoodadDef*>(link->m_owner);

                if (!doodad->m_model || !(doodad->m_flags & 0x80)) {
                    continue;
                }

                for (int32_t band = firstBand; band <= lastBand; band++) {
                    if (doodad->m_shadowStamps[band] == CShadowQuery::s_stamp) {
                        continue;
                    }

                    doodad->m_shadowStamps[band] = CShadowQuery::s_stamp;

                    if (!CWorldScene::IsBeyondFadeDistance(doodad->m_sphere.c, doodad->m_fadeLevel) && data.m_extents[band].Intersects(doodad->m_bbox) && data.m_bandFrustums[band].Cull(doodad->m_bbox) && (!data.m_useCullFrustum[band] || data.m_cullFrustums[band].CullInv(doodad->m_bbox) != 3)) {
                        GatherShadowBatches(doodad->m_model, band, true);
                    }
                }
            }
        }
    }
}

// Claude PARQ1 (16 nov 2026): the sun terrain query of a band on several threads, same result. QueryTerrainBand walks
// the band's chunk rectangle row by row; for each chunk that passes the box and frustum tests, each linked doodad not yet
// stamped in this band is stamped, counted, and goes through a series of tests; those that pass them all reach
// HdCasterKind, HdSkipBigRock and the gather. Every test only reads (boxes, band frustums, fade distance, the model's
// billboard count), so they give the same answer at every visit of a doodad.
// Phase A (workers, one row each): every link is tested. A doodad stamped before this query step (s_stamp) is left as the
// original leaves it. A doodad that fails the tests gets its stamp (s_stamp) and is counted once (an atomic exchange
// tells which visit stamped it). A doodad that passes gets the mark W (s_stamp ^ 0x80, never s_stamp) and goes into
// its row's list, at every visit.
// Phase B (this thread): the lists in row order, then column, then link order (the original order); the first time a
// doodad shows (still W) it gets its stamp and goes through HdCasterKind, HdSkipBigRock and the gather, with the
// original statements; a later time (stamp already s_stamp) is skipped, as the original skips it. So the same doodads
// reach the skip tests and the gathers, in the same order, and every visited doodad ends with stamp s_stamp.
// hdShadowQueryThreads = worker threads (0 = the original loop); hdShadowQueryCheck 1 = before phase A, the original
// walk again without any write (its own seen set), and afterwards its ordered list of doodads that reach the skip tests,
// its counters and the final stamps compared to phase B's (Logs\preuve-soleil.txt).
namespace {
    CVar* s_hdQueryThreads = nullptr;
    CVar* s_hdQueryCheck = nullptr;

    enum : uint8_t { kHdQModel = 1, kHdQFlag = 2, kHdQBeyond = 4, kHdQBig = 8, kHdQWanted = 16,
                     kHdQTests = 31,                    // the bits HdQBits gives
                     kHdQSkipKnown = 32, kHdQSkip = 64  // Claude CPU-D: HdSkipBigRockPeek's answer, when known
    };

    struct HdQEntry {
        CMapDoodadDef* doodad;
        uint8_t bits;
    };

    struct HdQRowOut {
        std::vector<HdQEntry> list;
        int tq[4] = {};   // HDShadowDiag::tq[band][0..3] for the doodads this row stamped as failing
    };

    struct HdQCtx {
        CShadowCacheQueryData* data;
        int32_t band;
        float maxSize;
        const CAaBox* extents;
        CiRect rect;
        HdQRowOut* rows;
        uint8_t stamp;
        uint8_t mark;
        int skipAhead;   ///< Claude CPU-D: hdShadowSkipAhead as the main thread read it
    };

    std::vector<HdQRowOut> s_hdQRows;
    std::vector<CMapDoodadDef*> s_hdQDone;        // check: the doodads phase B sent to the skip tests, in order
    std::vector<CMapDoodadDef*> s_hdQExpected;    // check: the same from the original walk
    std::vector<CMapDoodadDef*> s_hdQVisited;     // check: every doodad the original walk stamps
    // Claude CPU-D (hdShadowSkipAhead): 1 = the skip test's answer (HdSkipBigRock) read on the workers in phase A when its
    // caches have it; 0 = asked on the main thread in phase B (before); 2 = 1 with the proof (each answer read ahead
    // compared with HdSkipBigRock's at its use; Logs\preuve-soleil.txt); 3 = the proof's control (read ahead with the
    // burial limit and the slope rule forgotten: it must count differences).
    CVar* s_hdSkipAhead = nullptr;
    uint64_t s_hdSkChkUses = 0, s_hdSkChkBad = 0, s_hdSkChkAsked = 0, s_hdSkChkQueries = 0;
    uint64_t s_hdQChkQueries = 0, s_hdQChkDoodads = 0, s_hdQChkListBad = 0, s_hdQChkTqBad = 0, s_hdQChkStampBad = 0, s_hdQChkUses = 0, s_hdQChkUseBad = 0;

    uint32_t HdQueryThreads() {
        if (!s_hdQueryThreads) {
            s_hdQueryThreads = CVar::Register("hdShadowQueryThreads", "HD (Claude PARQ1): threads that help the sun terrain query with its tests (same doodads, same order, same batches); 0 = the original loop on the main thread only", 1, "4", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
            s_hdSkipAhead = CVar::Register("hdShadowSkipAhead", "HD (Claude CPU-D): 1 = le test des gros rochers (HdSkipBigRock) lu d'avance sur les coeurs quand ses caches le connaissent ; 0 = l'original (sur le thread principal) ; 2 = avec la preuve (Logs\\preuve-soleil.txt) ; 3 = temoin de la preuve (limite d'enfouissement et pente oubliees, doit compter des differences)", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
            s_hdQueryCheck = CVar::Register("hdShadowQueryCheck", "HD (Claude PARQ1, mesure seulement): 1 = refait la boucle d'origine sans rien ecrire et compare (Logs\\preuve-soleil.txt); 0 = arret", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        }
        const int32_t n = s_hdQueryThreads->m_intValue;
        return n <= 0 ? 0u : (n > 15 ? 15u : static_cast<uint32_t>(n));
    }

    // The tests of the original loop for one doodad, as bits (kHdQBeyond only when it has a model and flag 0x80).
    uint8_t HdQBits(CShadowCacheQueryData& data, int32_t band, float maxSize, const CAaBox& extents, const CMapDoodadDef* doodad, bool cheap = false) {
        CM2Model* model = doodad->m_model;
        if (!model) return 0;
        uint8_t bits = kHdQModel;
        if (doodad->m_flags & 0x80) {
            bits |= kHdQFlag;
            if (ShadowBeyondFade(data, band, doodad->m_sphere.c, doodad->m_fadeLevel)) bits |= kHdQBeyond;
        }
        if (maxSize < doodad->m_sphere.r) bits |= kHdQBig;
        if (cheap &&
            (!(bits & kHdQFlag) || (bits & (kHdQBeyond | kHdQBig)))) return bits;
        const int32_t wanted = model->GetBillboardBoneCount() ? (data.m_queryFlags[band] & 0x4) : (data.m_queryFlags[band] & 0x8);
        if (wanted && extents.Intersects(doodad->m_bbox) && data.m_bandFrustums[band].Cull(doodad->m_bbox) && (!data.m_useCullFrustum[band] || data.m_cullFrustums[band].CullInv(doodad->m_bbox) != 3)) bits |= kHdQWanted;
        return bits;
    }

    // The original's first-visit test chain up to the skip tests: true = the doodad reaches HdCasterKind.
    bool HdQPasses(uint8_t bits) {
        return (bits & kHdQModel) && (bits & kHdQFlag) && !(bits & kHdQBeyond) && !(bits & kHdQBig);
    }

    // HDShadowDiag::tq[band][0..3] of the original for a doodad that does not pass.
    void HdQCountFail(int* tq, uint8_t bits) {
        const bool hasModel = (bits & kHdQModel) != 0;
        ++tq[0];
        if (hasModel && !(bits & kHdQFlag)) ++tq[1];
        else if (bits & kHdQBeyond) ++tq[2];
        else if (hasModel && (bits & kHdQBig)) ++tq[3];
    }

    // The band's chunk at (row, col) when it passes the original chunk tests, else nullptr.
    CMapChunk* HdQChunk(CShadowCacheQueryData& data, int32_t band, const CAaBox& extents, int32_t row, int32_t col) {
        CMapArea* area = CMap::m_areaTable[(((row >> 4) & 0x3F) << 6) + ((col >> 4) & 0x3F)];
        CMapChunk* chunk = (!area || area->m_asyncObject) ? nullptr : area->m_mapChunks[(col & 0xF) + 16 * (row & 0xF)];
        if (!chunk) return nullptr;
        if (!(extents.t.x >= chunk->m_bbox.b.x && extents.t.y >= chunk->m_bbox.b.y && extents.t.z >= chunk->m_bbox.b.z && extents.b.x <= chunk->m_bbox.t.x && extents.b.y <= chunk->m_bbox.t.y && extents.b.z <= chunk->m_bbox.t.z)) return nullptr;
        if (!data.m_bandFrustums[band].Cull(chunk->m_bbox) || (data.m_useCullFrustum[band] && data.m_cullFrustums[band].CullInv(chunk->m_bbox) == 3)) return nullptr;
        return chunk;
    }

    // Phase A for one row of chunks.
    __declspec(noinline) void CpuFQRow(void* p, uint32_t item) {
        HdQCtx& c = *static_cast<HdQCtx*>(p);
        CShadowCacheQueryData& data = *c.data;
        HdQRowOut& out = c.rows[item];
        out.list.clear();
        out.tq[0] = out.tq[1] = out.tq[2] = out.tq[3] = 0;
        const bool unique = true;
        HD::CpuF::RowSeen<CMapDoodadDef> passed;
        if (unique) passed.Clear();
        const int32_t row = c.rect.minY + static_cast<int32_t>(item);
        for (int32_t col = c.rect.minX; col <= c.rect.maxX; col++) {
            CMapChunk* chunk = HdQChunk(data, c.band, *c.extents, row, col);
            if (!chunk) continue;
            HD::GpuFixed::NoteChunk(c.band, row, col);   // Claude voie B
            // Claude B4: the chunk's doodads the GPU does not have (same order), or all of them.
            const std::vector<CMapDoodadDef*>* hdList = HD::GpuFixed::WalkList(row, col, chunk);
            CMapBaseObjLink* link = hdList ? nullptr : chunk->m_doodadDefLinkList.Head();
            for (size_t hdAt = 0; hdList ? hdAt < hdList->size() : link != nullptr;) {
                CMapDoodadDef* doodad;
                if (hdList) {
                    doodad = (*hdList)[hdAt++];
                } else {
                    doodad = static_cast<CMapDoodadDef*>(link->m_owner);
                    link = chunk->m_doodadDefLinkList.Next(link);
                }
                char* stamp = reinterpret_cast<char*>(&doodad->m_shadowStamps[c.band]);
                // s_stamp here is either from before this step (the original skips it) or written by a worker for a
                // doodad that fails (it fails at every visit): skipped either way. Workers never write s_stamp to one that passes.
                if (static_cast<uint8_t>(*reinterpret_cast<volatile char*>(stamp)) == c.stamp) continue;
                if (HD::GpuFixed::Skip(c.band, doodad)) {   // Claude voie B: the GPU tests and draws it (never s_stamp, never W)
                    _InterlockedExchange8(stamp, static_cast<char>(c.stamp ^ 0x40));
                    continue;
                }
                // Earliest link in THIS row wins, as in phase B. Other rows keep their own
                // earliest link, so serial phase B still resolves the original global order.
                if (unique && passed.Has(doodad)) continue;
                uint8_t bits = HdQBits(data, c.band, c.maxSize, *c.extents, doodad, unique);
                if (HdQPasses(bits)) {
                    if (c.skipAhead) {   // Claude CPU-D
                        const int skip = HdSkipBigRockPeek(doodad, doodad->m_model, c.skipAhead == 3);
                        if (skip >= 0) bits |= kHdQSkipKnown | (skip ? kHdQSkip : 0);
                    }
                    _InterlockedExchange8(stamp, static_cast<char>(c.mark));
                    out.list.push_back({ doodad, bits });
                    if (unique) passed.Put(doodad);
                } else if (static_cast<uint8_t>(_InterlockedExchange8(stamp, static_cast<char>(c.stamp))) != c.stamp) {
                    HdQCountFail(out.tq, bits);   // this visit stamped it: counted once, as the original counts it
                }
            }
        }
    }

    void HdQRow(void* p, uint32_t item) {
        if (HD::CpuF::On(HD::CpuF::Query)) { CpuFQRow(p, item); return; }
        HdQCtx& c = *static_cast<HdQCtx*>(p);
        CShadowCacheQueryData& data = *c.data;
        HdQRowOut& out = c.rows[item];
        out.list.clear();
        out.tq[0] = out.tq[1] = out.tq[2] = out.tq[3] = 0;
        const int32_t row = c.rect.minY + static_cast<int32_t>(item);
        for (int32_t col = c.rect.minX; col <= c.rect.maxX; col++) {
            CMapChunk* chunk = HdQChunk(data, c.band, *c.extents, row, col);
            if (!chunk) continue;
            HD::GpuFixed::NoteChunk(c.band, row, col);   // Claude voie B
            // Claude B4: the chunk's doodads the GPU does not have (same order), or all of them.
            const std::vector<CMapDoodadDef*>* hdList = HD::GpuFixed::WalkList(row, col, chunk);
            CMapBaseObjLink* link = hdList ? nullptr : chunk->m_doodadDefLinkList.Head();
            for (size_t hdAt = 0; hdList ? hdAt < hdList->size() : link != nullptr;) {
                CMapDoodadDef* doodad;
                if (hdList) {
                    doodad = (*hdList)[hdAt++];
                } else {
                    doodad = static_cast<CMapDoodadDef*>(link->m_owner);
                    link = chunk->m_doodadDefLinkList.Next(link);
                }
                char* stamp = reinterpret_cast<char*>(&doodad->m_shadowStamps[c.band]);
                // s_stamp here is either from before this step (the original skips it) or written by a worker for a
                // doodad that fails (it fails at every visit): skipped either way. Workers never write s_stamp to one that passes.
                if (static_cast<uint8_t>(*reinterpret_cast<volatile char*>(stamp)) == c.stamp) continue;
                if (HD::GpuFixed::Skip(c.band, doodad)) {   // Claude voie B: the GPU tests and draws it (never s_stamp, never W)
                    _InterlockedExchange8(stamp, static_cast<char>(c.stamp ^ 0x40));
                    continue;
                }
                uint8_t bits = HdQBits(data, c.band, c.maxSize, *c.extents, doodad);
                if (HdQPasses(bits)) {
                    if (c.skipAhead) {   // Claude CPU-D
                        const int skip = HdSkipBigRockPeek(doodad, doodad->m_model, c.skipAhead == 3);
                        if (skip >= 0) bits |= kHdQSkipKnown | (skip ? kHdQSkip : 0);
                    }
                    _InterlockedExchange8(stamp, static_cast<char>(c.mark));
                    out.list.push_back({ doodad, bits });
                } else if (static_cast<uint8_t>(_InterlockedExchange8(stamp, static_cast<char>(c.stamp))) != c.stamp) {
                    HdQCountFail(out.tq, bits);   // this visit stamped it: counted once, as the original counts it
                }
            }
        }
    }

    // Check: the original walk, without writing anything (a seen set stands in for the stamps). Fills s_hdQExpected,
    // s_hdQVisited and the expected tq[0..3] (fails) and tq[0] of the passing ones.
    void HdQDryOriginal(CShadowCacheQueryData& data, int32_t band, const CAaBox& extents, const CiRect& rect, float maxSize, uint8_t stamp, int* tq) {
        static std::unordered_set<const CMapDoodadDef*> seen;
        seen.clear();
        s_hdQExpected.clear();
        s_hdQVisited.clear();
        for (int32_t row = rect.minY; row <= rect.maxY; row++) {
            for (int32_t col = rect.minX; col <= rect.maxX; col++) {
                CMapChunk* chunk = HdQChunk(data, band, extents, row, col);
                if (!chunk) continue;
                for (CMapBaseObjLink* link = chunk->m_doodadDefLinkList.Head(); link; link = chunk->m_doodadDefLinkList.Next(link)) {
                    CMapDoodadDef* doodad = static_cast<CMapDoodadDef*>(link->m_owner);
                    if (doodad->m_shadowStamps[band] == stamp || !seen.insert(doodad).second) continue;
                    if (HD::GpuFixed::Skip(band, doodad)) continue;   // Claude voie B: as phase A leaves it
                    s_hdQVisited.push_back(doodad);
                    const uint8_t bits = HdQBits(data, band, maxSize, extents, doodad);
                    if (HdQPasses(bits)) {
                        ++tq[0];
                        s_hdQExpected.push_back(doodad);
                    } else {
                        HdQCountFail(tq, bits);
                    }
                }
            }
        }
    }

    void HdQCheckLog() {
        if (s_hdQChkQueries % 120) return;
        if (FILE* f = std::fopen("Logs\\preuve-soleil.txt", "a")) {
            std::fprintf(f, "PREUVE soleil en parallele (PARQ1b) : %llu requetes de bande, %llu doodads compares, %llu listes differentes, %llu compteurs differents, %llu marques finales differentes ; %llu tests refaits a l'usage, %llu differents\n",
                s_hdQChkQueries, s_hdQChkDoodads, s_hdQChkListBad, s_hdQChkTqBad, s_hdQChkStampBad, s_hdQChkUses, s_hdQChkUseBad);
            std::fclose(f);
        }
    }

    // Phase A on the workers and this thread; returns the number of rows in s_hdQRows.
    uint32_t HdQPhaseA(CShadowCacheQueryData& data, int32_t band, const CAaBox& extents, const CiRect& rect, float maxSize, uint32_t threads, uint8_t stamp) {
        const uint32_t rows = rect.maxY >= rect.minY ? static_cast<uint32_t>(rect.maxY - rect.minY + 1) : 0u;
        if (s_hdQRows.size() < rows) s_hdQRows.resize(rows);
        (void)HD::ShadowCasterFade(); // its cvar registered here, on the main thread, before the workers read it
        int skipAhead = s_hdSkipAhead ? s_hdSkipAhead->m_intValue : 0;   // Claude CPU-D
        if (skipAhead < 0 || skipAhead > 3) skipAhead = 0;
        if (skipAhead) HdBigRockRegister();   // its cvars, here on the main thread, before the workers read them
        HdQCtx c{ &data, band, maxSize, &extents, rect, s_hdQRows.data(), stamp, static_cast<uint8_t>(stamp ^ 0x80), skipAhead };
        HD::Parallel::For(rows, HdQRow, &c, threads);
        return rows;
    }
}

// VERIFY: 896bfb08 manual
// OFFSET: 0x007BCF20
void CShadowQuery::QueryTerrainBand(CShadowCacheQueryData& data, int32_t band) {
    HD::CataRenderPerf::Scope hdPerf(band == 0 ? HD::CataRenderPerf::Stage::ShadowTerrainQ0 : band == 1 ? HD::CataRenderPerf::Stage::ShadowTerrainQ1 : HD::CataRenderPerf::Stage::ShadowTerrainQ2); // Claude 2026-11-04 lot S1
    float minSize;
    float maxSize;
    CShadowQuery::GetSize(data, band, &minSize, &maxSize);
    CAaBox& extents = data.m_extents[band];
    CiRect rect;
    rect.minY = 0;
    rect.minX = 0;
    rect.maxY = 0;
    rect.maxX = 0;
    GetChunkRect(extents, rect);

    if (const uint32_t hdThreads = HdQueryThreads()) {
        // Claude PARQ1: phase A (the tests, the stamps of the doodads that fail) on the workers, phase B (the doodads
        // that pass: stamp, counters, skip tests, gathers) here, in the original order with the original statements.
        const bool hdCheck = s_hdQueryCheck->m_intValue != 0;
        const uint8_t hdStamp = CShadowQuery::s_stamp;
        int* hdTq = HDShadowDiag::tq[band < 3 ? band : 2];
        int hdExpectTq[4] = {}, hdGotTq[4] = {};
        if (hdCheck) {
            HdQDryOriginal(data, band, extents, rect, maxSize, hdStamp, hdExpectTq);
            s_hdQDone.clear();
        }
        const uint32_t hdSkipGen = s_hdSkipCacheGen;   // Claude CPU-D: the caches the workers read
        const uint32_t hdRows = HdQPhaseA(data, band, extents, rect, maxSize, hdThreads, hdStamp);
        const int hdSkipProof = s_hdSkipAhead ? s_hdSkipAhead->m_intValue : 0;
        {   // Claude CPU-D: the proof's counters start afresh with each mode (the control's never mix with the proof's)
            static int hdSkipLast = -1;
            if (hdSkipProof != hdSkipLast) { hdSkipLast = hdSkipProof; s_hdSkChkUses = s_hdSkChkBad = s_hdSkChkAsked = s_hdSkChkQueries = 0; }
        }
        for (uint32_t r = 0; r < hdRows; ++r) {
            const HdQRowOut& out = s_hdQRows[r];
            for (int k = 0; k < 4; ++k) { hdTq[k] += out.tq[k]; hdGotTq[k] += out.tq[k]; }
            for (const HdQEntry& e : out.list) {
                CMapDoodadDef* doodad = e.doodad;

                if (doodad->m_shadowStamps[band] == CShadowQuery::s_stamp) {
                    continue;
                }

                doodad->m_shadowStamps[band] = CShadowQuery::s_stamp;
                CM2Model* model = doodad->m_model;
                const uint8_t bits = e.bits;
                ++hdTq[0];
                if (hdCheck) {
                    ++hdGotTq[0];
                    s_hdQDone.push_back(doodad);
                    ++s_hdQChkUses;
                    if (HdQBits(data, band, maxSize, extents, doodad) != (bits & kHdQTests)) ++s_hdQChkUseBad;
                }

                if (!HdCasterKind(1)) {
                    continue; // Claude 2026-11-08 lot RM4: hdSunCasters 1
                }

                // Claude CPU-D: the answer read ahead by the workers, when they had it and no cache was emptied since.
                bool hdSkip;
                if ((bits & kHdQSkipKnown) && s_hdSkipCacheGen == hdSkipGen) {
                    hdSkip = (bits & kHdQSkip) != 0;
                    if (hdSkipProof >= 2) {
                        ++s_hdSkChkUses;
                        if (HdSkipBigRock(data, band, doodad, model) != hdSkip) ++s_hdSkChkBad;
                    }
                } else {
                    hdSkip = HdSkipBigRock(data, band, doodad, model);
                    if (hdSkipProof >= 2) ++s_hdSkChkAsked;
                }
                if (hdSkip) {
                    continue; // Claude 2026-11-08 lot RM1: big rock / cliff, no sun shadow
                }

                if (bits & kHdQWanted) {
                    ++hdTq[5];
                    if (!HD::GpuFixed::Take(band, doodad))   // Claude voie B: true = the GPU draws it from the CPU's rows
                        GatherShadowBatches(model, band, true);
                }
            }
        }
        if (hdSkipProof >= 2 && (++s_hdSkChkQueries % 360) == 0) {   // Claude CPU-D: about every 120 frames (3 bands)
            if (FILE* f = std::fopen("Logs\\preuve-soleil.txt", "a")) {
                std::fprintf(f, "%s gros rochers lus d'avance (CPU-D) : %llu requetes de bande, %llu reponses lues d'avance comparees a HdSkipBigRock, %llu differentes ; %llu demandees au thread principal (caches a remplir)\n",
                    hdSkipProof == 3 ? "TEMOIN (limite d'enfouissement et pente oubliees)" : "PREUVE", s_hdSkChkQueries, s_hdSkChkUses, s_hdSkChkBad, s_hdSkChkAsked);
                std::fclose(f);
            }
        }
        if (hdCheck) {
            ++s_hdQChkQueries;
            s_hdQChkDoodads += s_hdQVisited.size();
            if (s_hdQDone != s_hdQExpected) ++s_hdQChkListBad;
            if (hdGotTq[0] != hdExpectTq[0] || hdGotTq[1] != hdExpectTq[1] || hdGotTq[2] != hdExpectTq[2] || hdGotTq[3] != hdExpectTq[3]) ++s_hdQChkTqBad;
            for (const CMapDoodadDef* d : s_hdQVisited) if (d->m_shadowStamps[band] != hdStamp) { ++s_hdQChkStampBad; break; }
            HdQCheckLog();
        }
        return;
    }

    for (int32_t row = rect.minY; row <= rect.maxY; row++) {
        // Claude 2026-11-05 lot S4: the chunk boxes of this row are fetched from memory ahead (prefetch only), in groups
        // of kHdAhead, then tested in the same order as before: same chunks, same doodads, same stamps, same batches.
        constexpr int32_t kHdAhead = 32;
        CMapChunk* hdChunks[kHdAhead];
        for (int32_t colStart = rect.minX; colStart <= rect.maxX; colStart += kHdAhead) {
        const int32_t colEnd = std::min(rect.maxX, colStart + kHdAhead - 1);
        for (int32_t col = colStart; col <= colEnd; col++) {
            CMapArea* area = CMap::m_areaTable[(((row >> 4) & 0x3F) << 6) + ((col >> 4) & 0x3F)];
            CMapChunk* chunk = (!area || area->m_asyncObject) ? nullptr : area->m_mapChunks[(col & 0xF) + 16 * (row & 0xF)];
            hdChunks[col - colStart] = chunk;
            if (chunk) {
                _mm_prefetch(reinterpret_cast<const char*>(&chunk->m_bbox), _MM_HINT_T0);
            }
        }
        for (int32_t col = colStart; col <= colEnd; col++) {
            CMapChunk* chunk = hdChunks[col - colStart];

            if (!chunk) {
                continue;
            }

            if (!(extents.t.x >= chunk->m_bbox.b.x && extents.t.y >= chunk->m_bbox.b.y && extents.t.z >= chunk->m_bbox.b.z && extents.b.x <= chunk->m_bbox.t.x && extents.b.y <= chunk->m_bbox.t.y && extents.b.z <= chunk->m_bbox.t.z)) {
                continue;
            }

            if (!data.m_bandFrustums[band].Cull(chunk->m_bbox) || (data.m_useCullFrustum[band] && data.m_cullFrustums[band].CullInv(chunk->m_bbox) == 3)) {
                continue;
            }

            HD::CataRenderPerf::Add(HD::CataRenderPerf::Counter::ShadowQChunks); // Claude QPROF1
            HD::GpuFixed::NoteChunk(band, row, col);   // Claude voie B
            for (CMapBaseObjLink* link = chunk->m_doodadDefLinkList.Head(); link; link = chunk->m_doodadDefLinkList.Next(link)) {
                CMapDoodadDef* doodad = static_cast<CMapDoodadDef*>(link->m_owner);

                HD::CataRenderPerf::Add(HD::CataRenderPerf::Counter::ShadowQDoodads); // Claude QPROF1
                if (doodad->m_shadowStamps[band] == CShadowQuery::s_stamp) {
                    continue;
                }

                if (HD::GpuFixed::Skip(band, doodad)) {   // Claude voie B: the GPU tests and draws it
                    doodad->m_shadowStamps[band] = static_cast<uint8_t>(CShadowQuery::s_stamp ^ 0x40);
                    continue;
                }

                doodad->m_shadowStamps[band] = CShadowQuery::s_stamp;
                CM2Model* model = doodad->m_model;

                // HD diagnostic (temporary): why terrain doodads are left out of this band
                // Claude 2026-11-04 lot S1: ShadowBeyondFade (pure) computed once for the diagnostic and the test, same results.
                const bool hdBeyond = model && (doodad->m_flags & 0x80) && ShadowBeyondFade(data, band, doodad->m_sphere.c, doodad->m_fadeLevel);
                int* hdTq = HDShadowDiag::tq[band < 3 ? band : 2];
                ++hdTq[0];
                if (model && !(doodad->m_flags & 0x80)) ++hdTq[1];
                else if (hdBeyond) ++hdTq[2];
                else if (model && maxSize < doodad->m_sphere.r) ++hdTq[3];

                if (!model || !(doodad->m_flags & 0x80) || hdBeyond || maxSize < doodad->m_sphere.r) {
                    continue;
                }

                if (!HdCasterKind(1)) {
                    continue; // Claude 2026-11-08 lot RM4: hdSunCasters 1
                }

                if (HdSkipBigRock(data, band, doodad, model)) {
                    continue; // Claude 2026-11-08 lot RM1: big rock / cliff, no sun shadow
                }

                int32_t wanted = model->GetBillboardBoneCount() ? (data.m_queryFlags[band] & 0x4) : (data.m_queryFlags[band] & 0x8);

                if (wanted && extents.Intersects(doodad->m_bbox) && data.m_bandFrustums[band].Cull(doodad->m_bbox) && (!data.m_useCullFrustum[band] || data.m_cullFrustums[band].CullInv(doodad->m_bbox) != 3)) {
                    ++hdTq[5];
                    if (!HD::GpuFixed::Take(band, doodad))   // Claude voie B: true = the GPU draws it from the CPU's rows
                        GatherShadowBatches(model, band, true);
                }
            }
        }
        }
    }
}

// VERIFY: ba8a3951 manual
// OFFSET: 0x007BCC00
void CShadowQuery::QueryTerrain(CShadowCacheQueryData& data, int32_t firstBand, int32_t lastBand) {
    CiRect rect;
    rect.minY = 0;
    rect.minX = 0;
    rect.maxY = 0;
    rect.maxX = 0;
    GetChunkRect(data.m_extents[data.m_lastBand], rect);

    for (int32_t row = rect.minY; row <= rect.maxY; row++) {
        for (int32_t col = rect.minX; col <= rect.maxX; col++) {
            CMapArea* area = CMap::m_areaTable[(((row >> 4) & 0x3F) << 6) + ((col >> 4) & 0x3F)];

            if (!area || area->m_asyncObject) {
                continue;
            }

            CMapChunk* chunk = area->m_mapChunks[(col & 0xF) + 16 * (row & 0xF)];

            if (!chunk) {
                continue;
            }

            CAaBox& lastExtents = data.m_extents[lastBand];

            if (!(lastExtents.t.x >= chunk->m_bbox.b.x && lastExtents.t.y >= chunk->m_bbox.b.y && lastExtents.t.z >= chunk->m_bbox.b.z && lastExtents.b.x <= chunk->m_bbox.t.x && lastExtents.b.y <= chunk->m_bbox.t.y && lastExtents.b.z <= chunk->m_bbox.t.z)) {
                continue;
            }

            if (!data.m_bandFrustums[lastBand].Cull(chunk->m_bbox) || CWorldOcclusion::QueryVolumes(&chunk->m_sphere)) {
                continue;
            }

            for (CMapBaseObjLink* link = chunk->m_doodadDefLinkList.Head(); link; link = chunk->m_doodadDefLinkList.Next(link)) {
                CMapDoodadDef* doodad = static_cast<CMapDoodadDef*>(link->m_owner);
                CM2Model* model = doodad->m_model;

                if (!model || !(doodad->m_flags & 0x80)) {
                    continue;
                }

                uint32_t doodadFlag = model->GetBillboardBoneCount();

                for (int32_t band = firstBand; band <= lastBand; band++) {
                    if (doodad->m_shadowStamps[band] == CShadowQuery::s_stamp) {
                        continue;
                    }

                    doodad->m_shadowStamps[band] = CShadowQuery::s_stamp;

                    if (CWorldScene::IsBeyondFadeDistance(doodad->m_sphere.c, doodad->m_fadeLevel)) {
                        continue;
                    }

                    if (!(doodadFlag ? (data.m_queryFlags[band] & 0x4) : (data.m_queryFlags[band] & 0x8))) {
                        continue;
                    }

                    if (data.m_extents[band].Intersects(doodad->m_bbox) && data.m_bandFrustums[band].Cull(doodad->m_bbox) && (!data.m_useCullFrustum[band] || data.m_cullFrustums[band].CullInv(doodad->m_bbox) != 3)) {
                        GatherShadowBatches(model, band, true);
                    }
                }
            }
        }
    }
}
