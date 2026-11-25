#include "Engine/Source/Base/HdCpuF.h" // CPU-F R2
#include <cstring>
// HD: the engine side of the Cata water's reflection under Vulkan (see HdCataMirror.h). The plane choice follows
// hdWaterPlanar's (HdWaterPlanar.cpp ChoosePlane): only queued outdoor procedural water, the whole instance
// aggregated, flat within kHeightTolerance, the camera above it.
#include "HdCataMirror.h"
#include <algorithm>
#include <cfloat>
#include <climits>
#include <cmath>
#include <map>
#include <typeinfo>
#include <utility>
#include <vector>
#include "Engine/Source/Gx/GxSeam.h"
#include "Engine/Source/ConsoleBase/ConsoleVar.h"   // Claude LV31: hdCataMirrorUnion
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Tempest/CFrustum.h"
#include "WoW/Source/LiquidSystem/Liquid.h"
#include "WoW/Source/WorldClient/CChunkLiquid.h"
#include "WoW/Source/WorldClient/LiquidGeomFactories.h"
#include "WoW/Source/WorldClient/Map.h"
#include "WoW/Source/WorldClient/MapObjGroup.h"
#include "WoW/Source/WorldClient/World.h"

namespace {
    const float kHeightTolerance = 0.05f; // yards: one water instance must be this flat to be mirrored
    const float kClipBias = 0.02f;        // yards: the camera must be this far above the water

    const float kBoxBelow = 1000.0f; // yards under the lowest frustum corner the widened box reaches
    const float kBoxAbove = 4000.0f; // yards over the highest one (tall things far away still reflect)

    // HD L19: every queued chunk water instance's height range this frame, by its geometry factory (read by HdCataWater).
    // Claude B3: sorted by factory (they were a map and a set).
    std::vector<std::pair<const Liquid::IGeomFactory*, std::pair<float, float>>> s_chunkRanges;
    // HD L19b: the batches joined to the plane's water this frame (CataMirrorInChain).
    std::vector<const Liquid::IGeomFactory*> s_chain;

    void SortChain() {
        std::sort(s_chain.begin(), s_chain.end());
        s_chain.erase(std::unique(s_chain.begin(), s_chain.end()), s_chain.end());
    }

    // Sorted by factory; of two ranges of one factory the last is kept.
    void SortRanges() {
        auto& r = s_chunkRanges;
        std::stable_sort(r.begin(), r.end(), [](const auto& a, const auto& b) { return a.first < b.first; });
        size_t kept = 0;
        for (size_t i = 0; i < r.size(); i++) {
            if (kept && r[kept - 1].first == r[i].first) r[kept - 1] = r[i];
            else r[kept++] = r[i];
        }
        r.resize(kept);
    }

    // The material says it is procedural water (one answer a material object).
    bool ProcWater(Liquid::IMaterial* material, Liquid::IMaterial*& last, bool& answer) {
        if (material != last || !last) {
            last = material;
            answer = dynamic_cast<Liquid::CMaterialProcWater*>(material) != nullptr;
        }
        return answer;
    }
    // Claude LV31: what the widened culling stands for: the main frustum, and the main frustum reflected in the plane
    // (the mirror's view), kept while the widening is on (CataMirrorWidenCulling, every main cull of the frame).
    bool s_union = false;
    float s_unionHeight = 0.0f;
    CFrustum s_main, s_mirror;

    // The frustum of these corners with its planes facing inwards: a reflection turns the corners' winding over, and
    // the top and bottom corners swapped turn it back. False if neither winding holds the centre.
    bool InwardFrustum(const C3Vector* corners, CFrustum& out) {
        C3Vector center(0.0f, 0.0f, 0.0f);
        for (uint32_t i = 0; i < 8; i++) center = center + corners[i];
        center = center * 0.125f;
        for (uint32_t swap = 0; swap < 2; swap++) {
            C3Vector c[8];
            for (uint32_t i = 0; i < 8; i++) c[i] = corners[swap ? (i ^ 1) : i];   // 0<->1, 2<->3: bottom <-> top
            out.CalcPlanesFromCorners(c);
            bool inside = true;
            for (uint32_t i = 0; i < 6; i++) {
                const C4Plane& plane = out.planes[i];
                if (plane.n.x * center.x + plane.n.y * center.y + plane.n.z * center.z + plane.d <= 0.0f) inside = false;
            }
            if (inside) return true;
        }
        return false;
    }
    const float kChainGap = 1.0f;     // yards: two batches whose chunk boxes are this close are neighbours
    const float kChainHeight = 0.25f; // yards: their water ranges must meet within this
    const size_t kChainMax = 1024;    // batches looked at (a frame queues far fewer)

    // The widened culling volume as 8 corners in CFrustum's layout (0..3 near, 4..7 far; left-bottom, left-top,
    // right-top, right-bottom): a box around the main frustum, its long axis the camera's ground direction, reaching
    // kBoxBelow under and kBoxAbove over it. It must be corners, not planes: CFrustum::Transform (the map object groups' batches,
    // CWorldScene::FrustumXform) and Translate rebuild the planes from the corners.
    bool WidenedBox(const C3Vector* corners, float forwardX, float forwardY, C3Vector* out) {
        float length = std::sqrt(forwardX * forwardX + forwardY * forwardY);
        if (!(length > 1e-3f)) { forwardX = 1.0f; forwardY = 0.0f; length = 1.0f; } // looking straight down
        forwardX /= length; forwardY /= length;
        float fMin = FLT_MAX, fMax = -FLT_MAX, rMin = FLT_MAX, rMax = -FLT_MAX, zMin = FLT_MAX, zMax = -FLT_MAX;
        for (uint32_t i = 0; i < 8; i++) {
            float f = corners[i].x * forwardX + corners[i].y * forwardY;
            float r = corners[i].x * forwardY - corners[i].y * forwardX;
            fMin = std::min(fMin, f); fMax = std::max(fMax, f);
            rMin = std::min(rMin, r); rMax = std::max(rMax, r);
            zMin = std::min(zMin, corners[i].z); zMax = std::max(zMax, corners[i].z);
        }
        if (!std::isfinite(fMin + fMax + rMin + rMax + zMin + zMax)) return false;
        zMin -= kBoxBelow; zMax += kBoxAbove;
        for (uint32_t mirror = 0; mirror < 2; mirror++) {
            float left = mirror ? rMax : rMin, right = mirror ? rMin : rMax;
            auto at = [&](float f, float r, float z) {
                return C3Vector(f * forwardX + r * forwardY, f * forwardY - r * forwardX, z);
            };
            for (uint32_t q = 0; q < 2; q++) {
                float f = q ? fMax : fMin;
                out[4 * q + 0] = at(f, left, zMin);
                out[4 * q + 1] = at(f, left, zMax);
                out[4 * q + 2] = at(f, right, zMax);
                out[4 * q + 3] = at(f, right, zMin);
            }
            // The planes must face inwards (Cull: n.p + d >= 0); one winding is right, the mirrored one is not.
            CFrustum test;
            test.CalcPlanesFromCorners(out);
            C3Vector center = at((fMin + fMax) * 0.5f, (rMin + rMax) * 0.5f, (zMin + zMax) * 0.5f);
            bool inside = true;
            for (uint32_t i = 0; i < 6; i++) {
                const C4Plane& plane = test.planes[i];
                if (plane.n.x * center.x + plane.n.y * center.y + plane.n.z * center.z + plane.d <= 0.0f) inside = false;
            }
            if (inside) return true;
        }
        return false;
    }
}

static void CpuFMirrorOriginal() {
    GxCataPlane& plane = g_gxCataPlane;
    s_chunkRanges.clear();   // HD L19
    s_chain.clear();         // HD L19b
    if (!plane.m_wanted) {
        plane.m_valid = 0;
        return;
    }
    plane.m_frame++;
    plane.m_valid = 0;
    // HD: tranche 3, a plane inside map objects too (Cata reflects in the canals and halls): the mirror replays what the
    // portals let through; only the culling is left alone indoors (CataMirrorWidenCulling).

    struct Range { float low, high, distance; };
    std::map<Liquid::CInstance*, Range> candidates;
    std::map<Liquid::CInstance*, CAaBox> chunkBoxes;   // HD L19b: the batch's ground footprint (its chunks' boxes)
    const C3Vector& camera = CWorldScene::s_activeWorldView;
    for (CChunkLiquid* water = CMap::s_mapChunkLiquidUpdateList.Head(); water;
         water = CMap::s_mapChunkLiquidUpdateList.Next(water)) {
        Liquid::CInstance* instance = water->m_instance;
        if (!water->m_owner || !instance || !instance->m_queued || !instance->m_settings ||
            !instance->m_settings->m_transparent || !dynamic_cast<Liquid::CMaterialProcWater*>(instance->m_material)) continue;
        CAaBox box;
        water->GetAaBox(box);
        float dx = std::max(std::max(box.b.x - camera.x, camera.x - box.t.x), 0.0f);
        float dy = std::max(std::max(box.b.y - camera.y, camera.y - box.t.y), 0.0f);
        float dz = camera.z - box.t.z;
        float distance = dx * dx + dy * dy + dz * dz;
        {   // HD L19b
            auto footprint = chunkBoxes.find(instance);
            if (footprint == chunkBoxes.end()) chunkBoxes.emplace(instance, box);
            else {
                footprint->second.b.x = std::min(footprint->second.b.x, box.b.x); footprint->second.b.y = std::min(footprint->second.b.y, box.b.y);
                footprint->second.t.x = std::max(footprint->second.t.x, box.t.x); footprint->second.t.y = std::max(footprint->second.t.y, box.t.y);
            }
        }
        auto entry = candidates.find(instance);
        if (entry == candidates.end()) candidates.emplace(instance, Range{box.b.z, box.t.z, distance});
        else {
            entry->second.low = std::min(entry->second.low, box.b.z);
            entry->second.high = std::max(entry->second.high, box.t.z);
            entry->second.distance = std::min(entry->second.distance, distance);
        }
    }
    // HD L19: the same ranges by geometry factory, for HdCataWater's reflection test (chunk water only).
    for (const auto& entry : candidates) {
        if (entry.first->m_geomFactory) s_chunkRanges.emplace_back(entry.first->m_geomFactory, std::make_pair(entry.second.low, entry.second.high));
    }
    SortRanges();
    // Map object water (Stormwind's canals, harbours inside a map object): the queued transparent instances whose
    // factory is a group's mesh, at their real height (CataMirrorMeshWaterBox), not the group sphere's centre.
    if (CWorldScene::s_liquidRenderer) {
        const auto& queued = CWorldScene::s_liquidRenderer->m_instances[1];
        for (uint32_t i = 0; i < queued.m_count; i++) {
            Liquid::CInstance* instance = queued.m_data[i];
            if (!instance || !instance->m_queued || !instance->m_settings || !instance->m_settings->m_transparent ||
                !dynamic_cast<Liquid::CMaterialProcWater*>(instance->m_material)) continue;
            CAaBox box;
            if (!HD::CataMirrorMeshWaterBox(instance->m_geomFactory, instance->m_transform, box)) continue;
            float dx = std::max(std::max(box.b.x - camera.x, camera.x - box.t.x), 0.0f);
            float dy = std::max(std::max(box.b.y - camera.y, camera.y - box.t.y), 0.0f);
            float dz = camera.z - box.t.z;
            candidates[instance] = Range{box.b.z, box.t.z, dx * dx + dy * dy + dz * dz};
        }
    }
    float best = FLT_MAX;
    for (const auto& entry : candidates) {
        const Range& range = entry.second;
        if (!std::isfinite(range.low) || !std::isfinite(range.high) ||
            range.high - range.low > kHeightTolerance || camera.z <= range.high + kClipBias) continue;
        if (range.distance < best) {
            best = range.distance;
            plane.m_height = (range.low + range.high) * 0.5f;
            plane.m_eyeZ = camera.z;
            plane.m_valid = 1;
        }
    }
    // HD L19b: the chunk batches joined to the plane's water, neighbour after neighbour (see CataMirrorInChain).
    if (plane.m_valid) {
        struct Node { const Liquid::IGeomFactory* factory; float low, high, bx, by, tx, ty; bool joined; };
        std::vector<Node> nodes;
        for (const auto& entry : chunkBoxes) {
            if (nodes.size() >= kChainMax) break;
            auto range = candidates.find(entry.first);
            if (range == candidates.end() || !entry.first->m_geomFactory) continue;
            const float low = range->second.low, high = range->second.high;
            if (!std::isfinite(low) || !std::isfinite(high)) continue;
            nodes.push_back(Node{entry.first->m_geomFactory, low, high, entry.second.b.x, entry.second.b.y, entry.second.t.x, entry.second.t.y,
                                 plane.m_height >= low - kChainHeight && plane.m_height <= high + kChainHeight});
        }
        bool grew = true;
        while (grew) {
            grew = false;
            for (Node& n : nodes) {
                if (n.joined) continue;
                for (const Node& m : nodes) {
                    if (!m.joined) continue;
                    const bool besides = n.bx <= m.tx + kChainGap && m.bx <= n.tx + kChainGap && n.by <= m.ty + kChainGap && m.by <= n.ty + kChainGap;
                    const bool heightsMeet = n.low <= m.high + kChainHeight && m.low <= n.high + kChainHeight;
                    if (besides && heightsMeet) { n.joined = true; grew = true; break; }
                }
            }
        }
        for (const Node& n : nodes) if (n.joined) s_chain.push_back(n.factory);
        SortChain();
    }
}

static void CpuFMirrorFast() {
    GxCataPlane& plane = g_gxCataPlane;
    s_chunkRanges.clear();   // HD L19
    s_chain.clear();         // HD L19b
    if (!plane.m_wanted) {
        plane.m_valid = 0;
        return;
    }
    plane.m_frame++;
    plane.m_valid = 0;
    // HD: tranche 3, a plane inside map objects too (Cata reflects in the canals and halls): the mirror replays what the
    // portals let through; only the culling is left alone indoors (CataMirrorWidenCulling).

    struct Range { float low=0, high=0, distance=0; bool hasChunk=false; CAaBox box; };
    // Claude B3: the waters as they come, then one entry an instance, by its address (a map's order).
    typedef std::pair<Liquid::CInstance*, Range> Candidate;
    static std::vector<Candidate> found, candidates;
    static std::vector<std::pair<Liquid::CInstance*, uint32_t>> order;
    found.clear();
    candidates.clear();
    order.clear();
    Liquid::IMaterial* lastMaterial = nullptr;
    bool lastAnswer = false;
    const C3Vector& camera = CWorldScene::s_activeWorldView;
    for (CChunkLiquid* water = CMap::s_mapChunkLiquidUpdateList.Head(); water;
         water = CMap::s_mapChunkLiquidUpdateList.Next(water)) {
        Liquid::CInstance* instance = water->m_instance;
        if (!water->m_owner || !instance || !instance->m_queued || !instance->m_settings ||
            !instance->m_settings->m_transparent || !ProcWater(instance->m_material, lastMaterial, lastAnswer)) continue;
        CAaBox box;
        water->GetAaBox(box);
        float dx = std::max(std::max(box.b.x - camera.x, camera.x - box.t.x), 0.0f);
        float dy = std::max(std::max(box.b.y - camera.y, camera.y - box.t.y), 0.0f);
        float dz = camera.z - box.t.z;
        float distance = dx * dx + dy * dy + dz * dz;
        order.emplace_back(instance, static_cast<uint32_t>(found.size()));
        found.emplace_back(instance, Range{box.b.z, box.t.z, distance, true, box});
    }
    std::sort(order.begin(), order.end());
    for (const auto& o : order) {
        const Candidate& c = found[o.second];
        if (candidates.empty() || candidates.back().first != c.first) {
            candidates.push_back(c);
            continue;
        }
        Range& r = candidates.back().second;
        const CAaBox& box = c.second.box;
        r.box.b.x = std::min(r.box.b.x, box.b.x); r.box.b.y = std::min(r.box.b.y, box.b.y);
        r.box.t.x = std::max(r.box.t.x, box.t.x); r.box.t.y = std::max(r.box.t.y, box.t.y);
        r.low = std::min(r.low, box.b.z); r.high = std::max(r.high, box.t.z);
        r.distance = std::min(r.distance, c.second.distance);
    }
    // HD L19: the same ranges by geometry factory, for HdCataWater's reflection test (chunk water only).
    for (const auto& entry : candidates) {
        if (entry.first->m_geomFactory) s_chunkRanges.emplace_back(entry.first->m_geomFactory, std::make_pair(entry.second.low, entry.second.high));
    }
    SortRanges();
    // Map object water (Stormwind's canals, harbours inside a map object): the queued transparent instances whose
    // factory is a group's mesh, at their real height (CataMirrorMeshWaterBox), not the group sphere's centre.
    if (CWorldScene::s_liquidRenderer) {
        const auto& queued = CWorldScene::s_liquidRenderer->m_instances[1];
        for (uint32_t i = 0; i < queued.m_count; i++) {
            Liquid::CInstance* instance = queued.m_data[i];
            if (!instance || !instance->m_queued || !instance->m_settings || !instance->m_settings->m_transparent ||
                !instance->m_geomFactory || typeid(*instance->m_geomFactory) == typeid(Liquid::CChunkGeomFactory) ||
                !ProcWater(instance->m_material, lastMaterial, lastAnswer)) continue;
            CAaBox box;
            if (!HD::CataMirrorMeshWaterBox(instance->m_geomFactory, instance->m_transform, box)) continue;
            float dx = std::max(std::max(box.b.x - camera.x, camera.x - box.t.x), 0.0f);
            float dy = std::max(std::max(box.b.y - camera.y, camera.y - box.t.y), 0.0f);
            float dz = camera.z - box.t.z;
            auto place = std::lower_bound(candidates.begin(), candidates.end(), instance, [](const Candidate& c, Liquid::CInstance* p) { return c.first < p; });
            if (place == candidates.end() || place->first != instance) place = candidates.insert(place, Candidate(instance, Range()));
            Range& r = place->second;
            r.low=box.b.z; r.high=box.t.z; r.distance=dx * dx + dy * dy + dz * dz;
        }
    }
    float best = FLT_MAX;
    for (const auto& entry : candidates) {
        const Range& range = entry.second;
        if (!std::isfinite(range.low) || !std::isfinite(range.high) ||
            range.high - range.low > kHeightTolerance || camera.z <= range.high + kClipBias) continue;
        if (range.distance < best) {
            best = range.distance;
            plane.m_height = (range.low + range.high) * 0.5f;
            plane.m_eyeZ = camera.z;
            plane.m_valid = 1;
        }
    }
    // HD L19b: the chunk batches joined to the plane's water, neighbour after neighbour (see CataMirrorInChain).
    if (plane.m_valid) {
        struct Node { const Liquid::IGeomFactory* factory; float low, high, bx, by, tx, ty; bool joined; };
        std::vector<Node> nodes;
        for (const auto& entry : candidates) {
            if (!entry.second.hasChunk) continue;
            if (nodes.size() >= kChainMax) break;
            if (!entry.first->m_geomFactory) continue;
            const float low = entry.second.low, high = entry.second.high;
            if (!std::isfinite(low) || !std::isfinite(high)) continue;
            nodes.push_back(Node{entry.first->m_geomFactory, low, high, entry.second.box.b.x, entry.second.box.b.y, entry.second.box.t.x, entry.second.box.t.y,
                                 plane.m_height >= low - kChainHeight && plane.m_height <= high + kChainHeight});
        }
        // Same graph closure, O(n^2) worst case instead of repeated full sweeps.
        size_t remaining = 0;
        for (const Node& n:nodes) remaining += !n.joined;
        if (remaining && remaining<nodes.size()) {
        std::vector<size_t> frontier, apart;   // Claude B3: only the ones not joined yet are looked at
        frontier.reserve(nodes.size());
        for (size_t i=0;i<nodes.size();++i) (nodes[i].joined ? frontier : apart).push_back(i);
        for (size_t cursor=0;cursor<frontier.size() && remaining;++cursor) {
            const Node& m=nodes[frontier[cursor]];
            for (size_t a=0;a<apart.size();) {
                const size_t i=apart[a];
                Node& n=nodes[i];
                const bool besides = n.bx <= m.tx + kChainGap && m.bx <= n.tx + kChainGap && n.by <= m.ty + kChainGap && m.by <= n.ty + kChainGap;
                const bool heightsMeet = n.low <= m.high + kChainHeight && m.low <= n.high + kChainHeight;
                if (besides && heightsMeet) { n.joined=true;frontier.push_back(i);--remaining;apart[a]=apart.back();apart.pop_back(); }
                else ++a;
            }
        }
        }
        for (const Node& n : nodes) if (n.joined) s_chain.push_back(n.factory);
        SortChain();
    }
}

void HD::CataMirrorChoosePlane() {
    if (!HD::CpuF::On(HD::CpuF::Mirror)) { CpuFMirrorOriginal(); return; }
    const uint32_t check = HD::CpuF::proof.load(std::memory_order_relaxed);
    if (!check) { CpuFMirrorFast(); return; }
    const GxCataPlane before=g_gxCataPlane;
    CpuFMirrorFast();
    const GxCataPlane expected=g_gxCataPlane;
    const auto ranges=s_chunkRanges;
    const auto chain=s_chain;
    g_gxCataPlane=before;
    CpuFMirrorOriginal(); // leave all engine-visible state exactly as the original for proof
    bool same=expected.m_valid==g_gxCataPlane.m_valid && expected.m_frame==g_gxCataPlane.m_frame &&
        std::memcmp(&expected.m_height,&g_gxCataPlane.m_height,sizeof(float))==0 &&
        std::memcmp(&expected.m_eyeZ,&g_gxCataPlane.m_eyeZ,sizeof(float))==0 && ranges.size()==s_chunkRanges.size() && chain==s_chain;
    auto x=ranges.cbegin(),y=s_chunkRanges.cbegin();
    for (;same && x!=ranges.end();++x,++y)
        same=x->first==y->first && std::memcmp(&x->second.first,&y->second.first,sizeof(float))==0 &&
            std::memcmp(&x->second.second,&y->second.second,sizeof(float))==0;
    HD::CpuF::Record(check,same);
}


void HD::CataMirrorWidenCulling() {
    const GxCataPlane& plane = g_gxCataPlane;
    s_union = false;   // Claude LV31
    if (!plane.m_wanted || !plane.m_valid || CWorldScene::s_viewerMapObjDef) return;
    C3Vector box[8];
    if (!WidenedBox(CWorldScene::s_frustumCorners, CWorldScene::camVec.x, CWorldScene::camVec.y, box)) return;
    CWorldScene::frustumStack[CWorldScene::frustumIndex].CalcPlanesFromCorners(box);
    // Claude LV31: the two frustums the box stands for, for CataMirrorOutside. hdCataMirrorUnion 0 = the whole box (LV30).
    static CVar* unionCvar = CVar::Register("hdCataMirrorUnion", "HD (Claude LV31): 1 = with the Cata water's mirror on, cull what neither the "
                                            "camera nor its reflection in the water sees (the widened box only fills the lists); 0 = the whole box (before LV31)",
                                            1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    if (unionCvar && unionCvar->m_intValue == 0) return;
    C3Vector mirrored[8];
    for (uint32_t i = 0; i < 8; i++) {
        mirrored[i] = CWorldScene::s_frustumCorners[i];
        mirrored[i].z = 2.0f * plane.m_height - mirrored[i].z;
    }
    if (InwardFrustum(CWorldScene::s_frustumCorners, s_main) && InwardFrustum(mirrored, s_mirror)) {
        s_unionHeight = plane.m_height;
        s_union = true;
    }
}

bool HD::CataMirrorUnion(const CFrustum*& camera, const CFrustum*& mirror, float& height) {
    camera = &s_main;
    mirror = &s_mirror;
    height = s_unionHeight;
    return s_union;
}

bool HD::CataMirrorOutside(const CAaBox& box) {
    if (!s_union) return false;
    if (s_main.Cull(box)) return false;
    return !(box.t.z >= s_unionHeight && s_mirror.Cull(box));
}

bool HD::CataMirrorOutside(const C3Vector& center, float radius) {
    if (!s_union) return false;
    if (s_main.Cull(center, radius)) return false;
    return !(center.z + radius >= s_unionHeight && s_mirror.Cull(center, radius));
}

void HD::CataMirrorWidenFrustumSet(const C3Vector* corners, float minX, float minY, float maxX, float maxY) {
    if (corners != CWorldScene::s_frustumCorners) return;          // the horizon's corners (CullHorizon)
    if (minX > 0.0f || minY > 0.0f || maxX < 1.0f || maxY < 1.0f) return; // a portal's part of the screen
    HD::CataMirrorWidenCulling();
}

bool HD::CataMirrorInstanceRange(const Liquid::IGeomFactory* factory, float& low, float& high) {
    auto entry = std::lower_bound(s_chunkRanges.begin(), s_chunkRanges.end(), factory, [](const auto& a, const Liquid::IGeomFactory* f) { return a.first < f; });
    if (entry == s_chunkRanges.end() || entry->first != factory) return false;
    low = entry->second.first;
    high = entry->second.second;
    return std::isfinite(low) && std::isfinite(high) && low <= high;
}

bool HD::CataMirrorInChain(const Liquid::IGeomFactory* factory) { return std::binary_search(s_chain.begin(), s_chain.end(), factory); }

bool HD::CataMirrorMeshWaterBox(const Liquid::IGeomFactory* factory, const C44Matrix& transform, CAaBox& box) {
    const auto* mesh = dynamic_cast<const Liquid::CMeshGeomFactory*>(factory);
    const CMapObjGroup* group = mesh ? mesh->m_mapObjGroup : nullptr;
    if (!group || !group->m_liquidVertexList || !group->m_liquidTileList || group->m_liquidTiles.x <= 0 ||
        group->m_liquidTiles.y <= 0) return false;
    // The box of the tiles that hold water ((flags & 0xF) != 0xF, CMapObjGroup's liquid queries): the vertices of
    // the empty tiles carry any height. Its 8 corners into the world: a tilted map object comes out thick and is
    // not mirrored (the mirror is horizontal).
    const int32_t vertsX = group->m_liquidVerts.x;
    if (vertsX != group->m_liquidTiles.x + 1 || group->m_liquidVerts.y != group->m_liquidTiles.y + 1) return false;
    float low = FLT_MAX, high = -FLT_MAX;
    int32_t minX = INT32_MAX, minY = INT32_MAX, maxX = -1, maxY = -1;
    for (int32_t y = 0; y < group->m_liquidTiles.y; y++) {
        for (int32_t x = 0; x < group->m_liquidTiles.x; x++) {
            if ((group->m_liquidTileList[y * group->m_liquidTiles.x + x].m_flags & 0xF) == 0xF) continue;
            minX = std::min(minX, x); maxX = std::max(maxX, x);
            minY = std::min(minY, y); maxY = std::max(maxY, y);
            for (int32_t v = 0; v < 4; v++) {
                float h = group->m_liquidVertexList[(y + (v >> 1)) * vertsX + x + (v & 1)].m_waterVert.m_height;
                low = std::min(low, h); high = std::max(high, h);
            }
        }
    }
    if (maxX < 0) return false;
    const C3Vector& corner = group->m_liquidCorner;
    box.b = C3Vector(FLT_MAX, FLT_MAX, FLT_MAX);
    box.t = C3Vector(-FLT_MAX, -FLT_MAX, -FLT_MAX);
    for (uint32_t i = 0; i < 8; i++) {
        C3Vector local(corner.x + ((i & 1) ? maxX + 1 : minX) * 4.1666665f, corner.y + ((i & 2) ? maxY + 1 : minY) * 4.1666665f,
                       (i & 4) ? high : low);
        C3Vector world = local * transform;
        box.b.x = std::min(box.b.x, world.x); box.b.y = std::min(box.b.y, world.y); box.b.z = std::min(box.b.z, world.z);
        box.t.x = std::max(box.t.x, world.x); box.t.y = std::max(box.t.y, world.y); box.t.z = std::max(box.t.z, world.z);
    }
    return std::isfinite(box.b.z) && std::isfinite(box.t.z);
}
