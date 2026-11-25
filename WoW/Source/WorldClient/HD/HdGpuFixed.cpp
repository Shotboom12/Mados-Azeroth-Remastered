// Claude voie B (23 nov 2026): the registry of the fixed sun-shadow casters. See HdGpuFixed.h.
#include "WoW/Source/WorldClient/HD/HdGpuFixed.h"
#include "WoW/Source/WorldClient/HD/HdGpuScene.h"
#include "WoW/Source/WorldClient/HD/HdParallel.h"

#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/Gx.h"
#include "Engine/Source/Gx/Types.h"
#include "Engine/Source/Model2/M2Data.h"
#include "Engine/Source/Model2/M2Model.h"
#include "Engine/Source/Model2/M2Scene.h"
#include "Engine/Source/Model2/M2Shared.h"
#include "Engine/Source/Services/Texture.h"
#include "Engine/Source/ShaderEffect/ShaderEffect.h"
#include "Engine/Source/ShaderEffect/ShadowCache.h"
#include "Engine/Source/Tempest/CAaBox.h"
#include "Engine/Source/Tempest/CFrustum.h"
#include "WoW/Source/WorldClient/CMapBaseObjLink.h"
#include "WoW/Source/WorldClient/Map.h"
#include "WoW/Source/WorldClient/MapArea.h"
#include "WoW/Source/WorldClient/MapChunk.h"
#include "WoW/Source/WorldClient/MapDoodadDef.h"

#include <intrin.h>

#include <algorithm>
#include <cmath>
#include <cstdio>
#include <cstring>
#include <iterator>
#include <unordered_map>
#include <unordered_set>
#include <vector>

// vulkan/GpuFixed.cpp (wxl)
bool HdGpuFixedDevReady();
bool HdGpuFixedDevMesh(const void* vertices, uint32_t vertexCount, uint32_t vertexStride, const uint16_t* indices,
                       uint32_t indexCount, int32_t& vertexBase, uint32_t& indexBase);
void HdGpuFixedDevResetMeshes();
void HdGpuFixedDevTables(const void* objects, uint32_t objectCount, const uint32_t* entries, uint32_t entryCount,
                         const void* commands, uint32_t commandCount, const uint32_t* links, uint32_t linkCount,
                         const uint32_t* anim, uint32_t animWords, uint32_t animObjects, uint32_t boneRows, uint32_t paletteRows);
bool HdGpuFixedDevFrame(const void* frame, uint32_t frameBytes, const uint32_t* bits, uint32_t bitWords, bool readback,
                        uint64_t tag);
bool HdGpuFixedDevTakeReadback(uint32_t* out, uint32_t words, uint64_t& tag);
bool HdGpuFixedDevArm(uint32_t band, uint32_t first, uint32_t count, uint32_t rows);
void HdGpuFixedDevDisarm();
struct HdGpuFixedCpuSpan
{
    void*    palette = nullptr;
    void*    args = nullptr;
    uint32_t firstInstance = 0;
    uint32_t commands = 0;
    uint32_t rows = 0;
    uint32_t slot = 0;
    uint32_t argsOffset = 0;
};
bool HdGpuFixedDevCpuAlloc(uint32_t rows, uint32_t copies, uint32_t commands, HdGpuFixedCpuSpan& span);
bool HdGpuFixedDevArmCpu(const HdGpuFixedCpuSpan& span);
bool HdGpuFixedDevUploadMeshes();

namespace HD::GpuFixed { int Mode(); }

namespace
{
    constexpr uint32_t kMaxChunks = 256;  // links of a doodad (terrain chunks and building groups); 32 before Claude B4
    constexpr uint32_t kMaxChunksB3 = 32;
    constexpr uint32_t kMaxItems = 16;
    constexpr uint32_t kGrid = 1024;   // chunk rows and columns of the world (HdQChunk's row, col)
    constexpr uint64_t kGroupTag = 1ull << 63;

    CVar* s_cvar = nullptr;

    struct Item
    {
        uint16_t  batch;
        uint8_t   textured;
        uint16_t  influences;
        CTexture* texture;
        uint16_t  bones;       // Claude B4
    };

    // Claude B4: an animated model's bones and keys (CM2Model::HdGpuAnimRecord), shared by the doodads that have the same.
    struct AnimRec
    {
        std::vector<uint32_t> words, relocs;
        std::vector<uint16_t> slots;
    };
    constexpr uint32_t kNoAnim = UINT32_MAX;

    struct Reg
    {
        CMapDoodadDef*   doodad;
        CM2Model*        model;
        const CM2Shared* shared;
        const CM2Scene*  scene;
        CAaBox           bbox;
        CAaSphere        sphere;
        uint8_t          fadeLevel;
        uint32_t         mesh;
        uint32_t         anim;      // Claude B4: its record in s_anim (kNoAnim: fixed)
        std::vector<uint64_t> chunkKey;   // a chunk: row * 1024 + col; a building group: its address | kGroupTag
        C44Matrix        world;
        uint32_t         items;
        Item             item[kMaxItems];
        uint32_t         born;     // the query generation it was registered in (not in the GPU tables before the next)
        volatile uint8_t bad;      // a structural change seen in phase A: out at the next rebuild
        bool             dead;     // Forget
    };

    struct Mesh
    {
        const CM2Shared* shared;
        const void*      data;
        const void*      skin;
        uint32_t         vertexCount;
        int32_t          vertexBase;
        uint32_t         indexBase;
        uint32_t         bytes;
        std::vector<uint32_t> sectionFirst;
        uint32_t sceneRefs = 0;   // Claude B2: the scene registry's doodads of this mesh
    };

    struct Group
    {
        uint32_t  first, count;
        bool      textured;
        uint16_t  influences;
        uint16_t  bones;
        CTexture* texture;
        uint32_t  firstEntry, entryCount;   // its entries (to find a live member)
    };

    // GpuFixedCull.comp's FrameB
    struct BandF
    {
        float    planes[6][4];
        float    cull[6][4];
        float    extB[4];
        float    extT[4];
        float    pos[4];
        float    fadeA[4];
        float    fadeB[4];
        uint32_t flags[4];
    };
    struct FrameF
    {
        float    view[4][4];
        uint32_t counts[4];
        uint32_t anim[4];
        float    thr[4];
        float    norm[4];
        float    quat[4];
        BandF    band[3];
    };
    static_assert(sizeof(BandF) == 288 && sizeof(FrameF) == 1008, "GpuFixedCull.comp's layout");

    struct ObjF
    {
        float    sphere[4];
        float    boxB[4];
        float    boxT[4];
        float    world[16];
        uint32_t info[4];
    };
    static_assert(sizeof(ObjF) == 128, "GpuFixedCull.comp's Obj");

    struct CmdF
    {
        uint32_t indexCount, firstIndex;
        int32_t  vertexOffset;
        uint32_t entryStart, entryCount, paletteBase[3];   // each band's first row
        uint32_t rows, combo, pad[2];
    };
    static_assert(sizeof(CmdF) == 48, "GpuFixedCull.comp's Cmd");

    std::vector<Reg>   s_reg;          // index + 1 in CMapDoodadDef::unused_00B4

    // Claude B4 -----------------------------------------------------------------------------------------------------
    CVar* s_cvarB4 = nullptr;
    int   s_b4 = 1, s_b4Last = -1;
    std::vector<AnimRec> s_anim;
    std::unordered_multimap<uint64_t, uint32_t> s_animOf;   // the hash of a record's words
    // What the per-frame check reads of a registered doodad in the tables, and where its answer goes.
    struct Sweep
    {
        CMapDoodadDef*   doodad;
        CM2Model*        model;
        const CM2Shared* shared;
        const CM2Scene*  scene;
        CAaBox           bbox;
        CAaSphere        sphere;
        uint8_t          fadeLevel;
        bool             anim;
        uint32_t         frame;        // its words (animated), after s_animBase
        uint32_t         firstLink, links;
    };
    std::vector<Sweep>    s_sweep;
    std::vector<uint8_t>  s_ok;        // by index: 1 = the GPU has it this frame
    std::vector<uint32_t> s_links;     // the links table (chunk slots)
    std::vector<long>     s_slotFull;  // a chunk whose whole list is walked this frame (one of its doodads is back on the CPU)
    uint32_t s_animObjects = 0, s_animTable = 0, s_animFrameWords = 0;
    uint32_t s_animBase = 0;           // the frame words' place in s_bits
    struct Walk
    {
        uint32_t gen = 0, linkGen = 0;
        const CMapChunk* chunk = nullptr;
        std::vector<CMapDoodadDef*> list;
    };
    std::vector<Walk> s_walk;          // by chunk slot
    uint32_t s_walkGen = 1;
    uint64_t s_walkUses = 0, s_walkBuilds = 0, s_otherQueries = 0;   // (the registry's log line)
    // ---------------------------------------------------------------------------------------------------------------

    // The CPU-chosen casters (animated, several bones, billboards): kCpuBase + index + 1 in unused_00B4. The query tests
    // them as before; at their gather they are animated (as the gather does) and listed for the band; the draw writes
    // their bone rows (as RenderBatchShadowMap writes them) and their indirect commands into the frame's stream memory.
    constexpr int32_t kCpuBase = 0x20000000;
    struct Cpu
    {
        CMapDoodadDef*   doodad;
        CM2Model*        model;
        const CM2Shared* shared;
        uint32_t         mesh;
        bool             dead;
        uint32_t         prepared;   // the query it was animated in (HdPrepareShadowGather writes the same values again)
    };
    std::vector<Cpu> s_cpu;
    std::vector<uint32_t> s_cpuFree;
    std::vector<uint32_t> s_cpuChosen[3];
    std::vector<CM2Model*> s_cpuModels[3];
    bool s_meshesOk = false;
    std::vector<Mesh>  s_mesh;
    std::unordered_map<const CM2Shared*, uint32_t> s_meshOf;
    uint64_t           s_meshBytes = 0, s_liveMeshBytes = 0;
    uint64_t           s_sceneMeshBytes = 0;   // Claude B2: of the meshes the scene registry holds
    uint32_t           s_meshGeneration = 1;   // Claude B2
    std::vector<uint16_t> s_chunkSlot;  // [row * 1024 + col]: slot + 1 of the chunks the registry's doodads link to
    std::unordered_map<uint64_t, uint16_t> s_groupSlot;   // the building groups': slot + 1
    std::unordered_map<const void*, uint8_t> s_groupKind; // 1 exterior, 2 interior (seen by NoteGroup)
    bool s_groupKindChanged = false;    // a slotted group turned out interior (an address reused): the registry is emptied
    std::vector<uint64_t> s_slotKeys;   // the keys with a slot
    std::vector<Group> s_groups;
    std::vector<uint32_t> s_tableEntries;   // the entries table as uploaded (the proof maps an entry to its doodad)
    uint32_t s_tableObjects = 0, s_tableCommands = 0;
    bool     s_dirty = false;
    bool     s_tablesUp = false;
    uint32_t s_gen = 1;
    uint32_t s_skipGen = 0;
    bool     s_skipGenKnown = false;

    // this query
    bool     s_inQuery = false;     // a sun band query is running
    bool     s_active = false;      // registered doodads skipped (the GPU draws them)
    bool     s_proof = false;       // nothing skipped, the expected lists kept
    bool     s_listProof = false;
    std::vector<long> s_bits;       // 3 x chunk words, then the disabled words
    uint32_t s_chunkWords = 1;
    bool     s_frameOk = false;
    bool     s_bandOn[3] = {};
    bool     s_forgotSinceEnd = false;
    std::vector<uint32_t> s_expected[3];
    std::unordered_set<const CM2Model*> s_gpuModels;

    // the list proof waiting for its readback
    struct Pending
    {
        uint64_t tag = 0;
        std::vector<uint32_t> expected[3];
        std::vector<uint32_t> entries;
        uint32_t objects = 0;
        bool waiting = false;
    } s_pending;
    uint64_t s_tag = 0, s_proofFrames = 0, s_proofBands = 0, s_proofBad = 0, s_proofDoodads = 0, s_proofMissing = 0, s_proofExtra = 0;
    uint64_t s_listCounter = 0;
    // A doodad refused by TryRegister keeps -(query number + 1) in unused_00B4 and is asked again 240 queries later.
    uint32_t s_queryNo = 0;
    constexpr uint32_t kRetry = 240;
    uint64_t s_refused[32] = {}, s_asked = 0, s_registered = 0, s_registeredCpu = 0;
    uint64_t s_bandExpected[3] = {}, s_bandMissing[3] = {}, s_bandCalls[3] = {}, s_bandDraws[3] = {};   // proof diagnostic
    int      s_lastMode = -1;

    void ClearSlots()
    {
        for (uint64_t k : s_slotKeys)
            if (!(k & kGroupTag)) s_chunkSlot[static_cast<size_t>(k)] = 0;
        s_groupSlot.clear();
        s_slotKeys.clear();
    }

    void ResetStamps(CMapDoodadDef* d)
    {
        d->m_shadowStamps[0] = d->m_shadowStamps[1] = d->m_shadowStamps[2] = 0;
    }

    /// `meshes` false (Claude B2): the registry and its tables only; the shared store stays (the scene draws from it).
    void ClearAll(bool meshes = true)
    {
        for (Reg& r : s_reg)
            if (!r.dead && r.doodad)
            {
                r.doodad->unused_00B4 = 0;
                ResetStamps(r.doodad);
            }
        s_reg.clear();
        for (Cpu& c : s_cpu)
            if (!c.dead && c.doodad)
            {
                c.doodad->unused_00B4 = 0;
                ResetStamps(c.doodad);
            }
        s_cpu.clear();
        s_cpuFree.clear();
        for (int b = 0; b < 3; ++b) { s_cpuChosen[b].clear(); s_cpuModels[b].clear(); }
        if (meshes)
        {
            s_mesh.clear();
            s_meshOf.clear();
            s_meshBytes = s_liveMeshBytes = s_sceneMeshBytes = 0;
            ++s_meshGeneration;
        }
        ClearSlots();
        s_groups.clear();
        s_tableEntries.clear();
        s_tableObjects = s_tableCommands = 0;
        s_tablesUp = false;
        s_dirty = false;
        s_groupKindChanged = false;
        if (meshes) HdGpuFixedDevResetMeshes();
        s_anim.clear();
        s_animOf.clear();
        s_sweep.clear();
        s_ok.clear();
        s_links.clear();
        s_walk.clear();
        ++s_walkGen;
        s_animObjects = s_animTable = s_animFrameWords = 0;
        HdGpuFixedDevTables(nullptr, 0, nullptr, 0, nullptr, 0, nullptr, 0, nullptr, 0, 0, 0, 0);
    }

    bool Same(const CAaBox& a, const CAaBox& b) { return std::memcmp(&a, &b, sizeof a) == 0; }
    bool Same(const CAaSphere& a, const CAaSphere& b) { return std::memcmp(&a, &b, sizeof a) == 0; }

    /// The registry's per-frame check. 0: valid; 1: not for the GPU this frame (alpha, flag 0x80); 2: structural.
    int Check(const CMapDoodadDef* d, const Reg& r)
    {
        const CM2Model* m = d->m_model;
        if (m != r.model || !m || m->m_shared != r.shared || m->m_scene != r.scene || m->m_attachParent || m->m_attachList
            || !(m->m_fFlags & 1) || d->m_fadeLevel != r.fadeLevel || !Same(d->m_bbox, r.bbox) || !Same(d->m_sphere, r.sphere))
            return 2;
        if (!(d->m_flags & 0x80) || m->m_baseAlpha != 1.0f || m->m_fadeAlpha != 1.0f) return 1;
        return 0;
    }

    /// Claude B4: the check of a block of the registry's doodads, the animated ones' words of this frame. Workers: each
    /// doodad once; the shared bits by interlocked operations.
    constexpr uint32_t kSweepBlock = 128;
    long s_anyBad = 0;
    void Disable(uint32_t index);
    void SweepBlock(void*, uint32_t block)
    {
        const uint32_t from = block * kSweepBlock;
        const uint32_t to = std::min(from + kSweepBlock, static_cast<uint32_t>(std::min(s_sweep.size(), s_reg.size())));
        for (uint32_t i = from; i < to; ++i)
        {
            if (i + 8u < to)
            {
                const Sweep& p = s_sweep[i + 8u];
                _mm_prefetch(reinterpret_cast<const char*>(&p.doodad->m_bbox), _MM_HINT_T0);
                _mm_prefetch(reinterpret_cast<const char*>(&p.doodad->m_model), _MM_HINT_T0);
                _mm_prefetch(reinterpret_cast<const char*>(&p.model->m_shared), _MM_HINT_T0);
                _mm_prefetch(reinterpret_cast<const char*>(&p.model->m_attachParent), _MM_HINT_T0);
                _mm_prefetch(reinterpret_cast<const char*>(&p.model->m_fadeAlpha), _MM_HINT_T0);
            }
            if (i + 4u < to && s_sweep[i + 4u].anim) _mm_prefetch(reinterpret_cast<const char*>(&s_sweep[i + 4u].model->m_bones), _MM_HINT_T0);
            s_ok[i] = 0;
            Reg& r = s_reg[i];
            if (r.dead) continue;   // Forget: disabled by BeginQuery, the doodad may be gone
            const Sweep& s = s_sweep[i];
            CMapDoodadDef* d = s.doodad;
            ResetStamps(d);   // the lists leave it out: no mark older than this frame (a stamp is 8 bits)
            const CM2Model* m = d->m_model;
            bool ok = true;
            if (m != s.model || !m || m->m_shared != s.shared || m->m_scene != s.scene || m->m_attachParent || m->m_attachList
                || !(m->m_fFlags & 1) || d->m_fadeLevel != s.fadeLevel || !Same(d->m_bbox, s.bbox) || !Same(d->m_sphere, s.sphere))
            {
                r.bad = 1;
                _InterlockedExchange(&s_anyBad, 1);
                ok = false;
            }
            else if (!(d->m_flags & 0x80) || m->m_baseAlpha != 1.0f || m->m_fadeAlpha != 1.0f) ok = false;
            else if (s.anim && !m->HdGpuAnimFrame(reinterpret_cast<uint32_t*>(&s_bits[s_animBase + s.frame]))) ok = false;
            if (r.bad) ok = false;
            if (ok) { s_ok[i] = 1; continue; }
            // On the CPU this frame: its chunks' whole lists are walked.
            Disable(i);
            for (uint32_t k = 0; k < s.links; ++k)
            {
                const uint32_t slot = s_links[s.firstLink + k];
                _InterlockedOr(&s_slotFull[slot >> 5], long(1u << (slot & 31u)));
            }
        }
    }

    void Disable(uint32_t index)
    {
        const uint32_t at = 3u * s_chunkWords + (index >> 5);
        if (at < s_bits.size()) _InterlockedOr(&s_bits[at], long(1u << (index & 31u)));
    }

    /// A chunk link's (row, col), from the chunk's box centre, checked against the map's own table.
    bool ChunkKey(const CMapChunk* chunk, uint32_t& key)
    {
        const float cx = (chunk->m_bbox.b.x + chunk->m_bbox.t.x) * 0.5f;
        const float cy = (chunk->m_bbox.b.y + chunk->m_bbox.t.y) * 0.5f;
        const int row = static_cast<int>(std::floor((17066.666f - cx) / (100.0f / 3.0f)));
        const int col = static_cast<int>(std::floor((17066.666f - cy) / (100.0f / 3.0f)));
        if (row < 0 || col < 0 || row >= int(kGrid) || col >= int(kGrid)) return false;
        CMapArea* area = CMap::m_areaTable[(((row >> 4) & 0x3F) << 6) + ((col >> 4) & 0x3F)];
        const CMapChunk* found = (!area || area->m_asyncObject) ? nullptr : area->m_mapChunks[(col & 0xF) + 16 * (row & 0xF)];
        if (found != chunk) return false;
        key = uint32_t(row) * kGrid + uint32_t(col);
        return true;
    }

    uint32_t MeshFor(const CM2Shared* shared)
    {
        auto it = s_meshOf.find(shared);
        if (it != s_meshOf.end())
        {
            const Mesh& m = s_mesh[it->second];
            if (m.data == shared->m_data && m.skin == shared->m_skinData && m.vertexCount == shared->m_skinData->m_vertices.m_count)
                return it->second;
        }
        std::vector<uint8_t> vertices;
        std::vector<uint16_t> indices;
        Mesh m;
        if (!shared->HdGpuFixedMesh(vertices, indices, m.sectionFirst)) return UINT32_MAX;
        m.shared = shared;
        m.data = shared->m_data;
        m.skin = shared->m_skinData;
        m.vertexCount = shared->m_skinData->m_vertices.m_count;
        if (!HdGpuFixedDevMesh(vertices.data(), m.vertexCount, sizeof(M2Vertex), indices.data(),
                               static_cast<uint32_t>(indices.size()), m.vertexBase, m.indexBase))
            return UINT32_MAX;
        m.bytes = static_cast<uint32_t>(vertices.size() + indices.size() * 2u);
        s_meshBytes += m.bytes;
        s_mesh.push_back(std::move(m));
        const uint32_t id = static_cast<uint32_t>(s_mesh.size() - 1);
        s_meshOf[shared] = id;
        return id;
    }

    const CM2Scene* s_scene0 = nullptr;

    void Refuse(CMapDoodadDef* d, int reason)
    {
        ++s_refused[reason < 0 ? 0 : reason > 31 ? 31 : reason];
        d->unused_00B4 = -static_cast<int32_t>(s_queryNo & 0x3FFFFFFFu) - 1;
    }

    /// Claude B4: the record of an animated model (shared by those that have the same). False: the CPU keeps the model.
    bool AnimFor(const CM2Model* model, const uint16_t* batches, uint32_t count, uint32_t& id)
    {
        AnimRec rec;
        if (!model->HdGpuAnimRecord(batches, count, rec.words, rec.relocs, rec.slots)) return false;
        if (s_anim.size() >= 4096) { g_hdGpuFixedReason = 28; return false; }
        uint64_t h = 1469598103934665603ull;
        for (uint32_t w : rec.words) h = (h ^ w) * 1099511628211ull;
        for (auto range = s_animOf.equal_range(h); range.first != range.second; ++range.first)
        {
            const AnimRec& have = s_anim[range.first->second];
            if (have.words == rec.words && have.relocs == rec.relocs && have.slots == rec.slots) { id = range.first->second; return true; }
        }
        id = static_cast<uint32_t>(s_anim.size());
        s_animOf.emplace(h, id);
        s_anim.push_back(std::move(rec));
        return true;
    }

    void TryRegister(CMapDoodadDef* d)
    {
        if (!(d->m_type & 0x40) || d->unused_00B4 > 0) return;
        if (!s_scene0 && d->m_model) s_scene0 = d->m_model->m_scene;
        if (d->unused_00B4 < 0 && s_queryNo - static_cast<uint32_t>(-d->unused_00B4 - 1) < kRetry) return;
        ++s_asked;
        CM2Model* model = d->m_model;
        if (!model || !(d->m_flags & 0x80) || !model->m_scene) { Refuse(d, 0); return; }
        // The CPU-chosen path: the CPU's query still tests it (any link: chunks, buildings), the GPU draws its rows.
        auto takeCpu = [&](int notFixed) {
            if (!model->HdGpuFixedCpuOk()) { Refuse(d, g_hdGpuFixedReason); return; }
            const uint32_t cpuMesh = MeshFor(model->m_shared);
            if (cpuMesh == UINT32_MAX) { Refuse(d, 15); return; }
            ++s_refused[notFixed < 0 ? 0 : notFixed > 31 ? 31 : notFixed];   // why it is not a fixed one
            ++s_registeredCpu;
            uint32_t at;
            if (!s_cpuFree.empty()) { at = s_cpuFree.back(); s_cpuFree.pop_back(); }
            else { at = static_cast<uint32_t>(s_cpu.size()); s_cpu.push_back({}); }
            s_cpu[at] = { d, model, model->m_shared, cpuMesh, false, 0 };
            d->unused_00B4 = kCpuBase + static_cast<int32_t>(at) + 1;
        };
        if (!s_reg.empty())
        {
            // one M2 scene for the fixed registry (its view is bone 0's)
            for (const Reg& r : s_reg)
                if (!r.dead) { if (r.scene != model->m_scene) { takeCpu(0); return; } break; }
        }
        Reg r = {};
        // Fixed: linked to terrain chunks and to groups of outdoor buildings. A building group is walked first and
        // stamps its doodads, but with the same tests as the terrain (QueryMapObjDefsBand without flag 0x400: the
        // band maxSize, flags 4 / 8 of the band), so the answer is the same whichever visit comes first.
        for (CMapBaseObjLink* link = d->m_parentLinkList.Head(); link; link = d->m_parentLinkList.Next(link))
        {
            const CMapBaseObj* ref = link->m_ref;
            if (!ref) { takeCpu(26); return; }
            if (r.chunkKey.size() == (s_b4 ? kMaxChunks : kMaxChunksB3)) { takeCpu(12); return; }
            if (ref->m_type & 4)
            {
                uint32_t key;
                if (!ChunkKey(static_cast<const CMapChunk*>(ref), key)) { takeCpu(13); return; }
                r.chunkKey.push_back(key);
                continue;
            }
            if (!(ref->m_type & 0x10)) { takeCpu(27); return; }
            const auto kind = s_groupKind.find(ref);
            if (kind == s_groupKind.end()) { Refuse(d, 21); return; }   // not walked yet: asked again later
            if (kind->second != 1) { takeCpu(22); return; }             // indoor building: other tests
            r.chunkKey.push_back(reinterpret_cast<uintptr_t>(ref) | kGroupTag);
        }
        if (r.chunkKey.empty()) { takeCpu(13); return; }
        uint16_t batches[kMaxItems], influences[kMaxItems], bones[kMaxItems];
        uint8_t textured[kMaxItems];
        CTexture* textures[kMaxItems];
        uint32_t count = 0;
        bool fixedOk = model->HdGpuFixedBatches(batches, textured, textures, influences, kMaxItems, count);
        std::fill(std::begin(bones), std::end(bones), uint16_t(1));
        r.anim = kNoAnim;
        if (!fixedOk && s_b4 && model->m_shared && model->m_shared->m_billboardBoneCount)
        {
            fixedOk = model->HdGpuFixedBatches(batches, textured, textures, influences, kMaxItems, count, bones);
            if (fixedOk && count && !AnimFor(model, batches, count, r.anim)) fixedOk = false;
        }
        if (!fixedOk || !count)
        {
            takeCpu(fixedOk ? 14 : g_hdGpuFixedReason);
            return;
        }
        const uint32_t mesh = MeshFor(model->m_shared);
        if (mesh == UINT32_MAX) { Refuse(d, 15); return; }
        ++s_registered;
        r.doodad = d;
        r.model = model;
        r.shared = model->m_shared;
        r.scene = model->m_scene;
        r.bbox = d->m_bbox;
        r.sphere = d->m_sphere;
        r.fadeLevel = d->m_fadeLevel;
        r.mesh = mesh;
        r.world = model->m_worldTransform;
        r.items = count;
        for (uint32_t i = 0; i < count; ++i) r.item[i] = { batches[i], textured[i], influences[i], textures[i], bones[i] };
        r.born = s_gen;
        s_reg.push_back(r);
        d->unused_00B4 = static_cast<int32_t>(s_reg.size());
        s_dirty = true;
    }

    /// The registry compacted (dead and changed doodads out), its chunk slots, its GPU tables.
    void Rebuild()
    {
        std::vector<Reg> kept;
        kept.reserve(s_reg.size());
        for (Reg& r : s_reg)
        {
            if (r.dead) continue;
            if (r.bad)
            {
                r.doodad->unused_00B4 = 0;
                ResetStamps(r.doodad);
                continue;
            }
            kept.push_back(std::move(r));
        }
        s_reg.swap(kept);
        ClearSlots();
        if (s_chunkSlot.empty()) s_chunkSlot.assign(size_t(kGrid) * kGrid, 0);
        s_liveMeshBytes = 0;
        std::vector<uint8_t> meshLive(s_mesh.size(), 0);
        for (size_t i = 0; i < s_reg.size(); ++i)
        {
            Reg& r = s_reg[i];
            r.doodad->unused_00B4 = static_cast<int32_t>(i + 1);
            if (!meshLive[r.mesh]) { meshLive[r.mesh] = 1; s_liveMeshBytes += s_mesh[r.mesh].bytes; }
            for (const uint64_t key : r.chunkKey)
            {
                uint16_t& slot = (key & kGroupTag) ? s_groupSlot[key] : s_chunkSlot[static_cast<size_t>(key)];
                if (!slot)
                {
                    s_slotKeys.push_back(key);
                    slot = static_cast<uint16_t>(s_slotKeys.size());
                }
            }
        }
        if (s_slotKeys.size() >= 0xFFFF)
        {
            ClearAll(false);
            return;
        }

        // Commands: one per (textured, influences, bones, texture, mesh, record, batch), in that order; their entries in registry order.
        struct Key
        {
            uint8_t textured; uint16_t influences; CTexture* texture; uint32_t mesh; uint16_t batch; uint16_t bones; uint32_t anim;
            bool operator<(const Key& o) const
            {
                if (textured != o.textured) return textured < o.textured;
                if (influences != o.influences) return influences < o.influences;
                if (bones != o.bones) return bones < o.bones;
                if (texture != o.texture) return std::less<CTexture*>()(texture, o.texture);
                if (mesh != o.mesh) return mesh < o.mesh;
                if (anim != o.anim) return anim < o.anim;
                return batch < o.batch;
            }
            bool SameGroup(const Key& o) const { return textured == o.textured && influences == o.influences && bones == o.bones && texture == o.texture; }
        };
        struct Use { Key key; uint32_t obj; };
        std::vector<Use> uses;
        for (uint32_t i = 0; i < s_reg.size(); ++i)
            for (uint32_t k = 0; k < s_reg[i].items; ++k)
            {
                const Item& it = s_reg[i].item[k];
                uses.push_back({ { it.textured, it.influences, it.textured ? it.texture : nullptr, s_reg[i].mesh, it.batch, it.bones, s_reg[i].anim }, i });
            }
        std::stable_sort(uses.begin(), uses.end(), [](const Use& a, const Use& b) { return a.key < b.key; });

        std::vector<ObjF> objs(s_reg.size());
        std::vector<uint32_t> links;
        // Claude B4: the records of the live animated doodads, one after another, their offsets made absolute; then the
        // commands' bones; then the doodads' table (object, record, first bone row, frame words).
        std::vector<uint32_t> animWords, animObjs, animAt(s_anim.size(), UINT32_MAX);
        uint32_t boneRows = 0, frameWords = 0;
        s_sweep.assign(s_reg.size(), {});
        for (uint32_t i = 0; i < s_reg.size(); ++i)
        {
            const Reg& r = s_reg[i];
            ObjF& o = objs[i];
            o.sphere[0] = r.sphere.c.x; o.sphere[1] = r.sphere.c.y; o.sphere[2] = r.sphere.c.z; o.sphere[3] = r.sphere.r;
            o.boxB[0] = r.bbox.b.x; o.boxB[1] = r.bbox.b.y; o.boxB[2] = r.bbox.b.z; o.boxB[3] = 0.0f;
            o.boxT[0] = r.bbox.t.x; o.boxT[1] = r.bbox.t.y; o.boxT[2] = r.bbox.t.z; o.boxT[3] = 0.0f;
            std::memcpy(o.world, &r.world, sizeof o.world);
            o.info[0] = r.fadeLevel;
            o.info[1] = static_cast<uint32_t>(links.size());
            o.info[2] = static_cast<uint32_t>(r.chunkKey.size());
            o.info[3] = 0;
            Sweep& w = s_sweep[i];
            w = { r.doodad, r.model, r.shared, r.scene, r.bbox, r.sphere, r.fadeLevel, r.anim != kNoAnim, 0, o.info[1], o.info[2] };
            if (r.anim != kNoAnim)
            {
                const AnimRec& rec = s_anim[r.anim];
                if (animAt[r.anim] == UINT32_MAX)
                {
                    const uint32_t at = static_cast<uint32_t>(animWords.size());
                    animAt[r.anim] = at;
                    animWords.insert(animWords.end(), rec.words.begin(), rec.words.end());
                    for (uint32_t p : rec.relocs) animWords[at + p] += at;
                }
                o.info[3] = 1u + boneRows;
                w.frame = frameWords;
                animObjs.insert(animObjs.end(), { i, animAt[r.anim], boneRows, frameWords });
                boneRows += 3u * rec.words[0];
                frameWords += 2u + r.shared->m_data->m_loops.m_count;
            }
            for (const uint64_t key : r.chunkKey)
            {
                links.push_back(uint32_t((key & kGroupTag) ? s_groupSlot[key] : s_chunkSlot[static_cast<size_t>(key)]) - 1u);
            }
        }
        std::vector<uint32_t> entries;
        std::vector<CmdF> cmds;
        uint32_t paletteRows = 0;
        s_groups.clear();
        for (size_t u = 0; u < uses.size();)
        {
            size_t v = u;
            while (v < uses.size() && !(uses[u].key < uses[v].key) && !(uses[v].key < uses[u].key)) ++v;
            const Key& key = uses[u].key;
            const Mesh& mesh = s_mesh[key.mesh];
            const CM2Shared* shared = s_reg[uses[u].obj].shared;
            const M2Batch& batch = shared->m_skinData->m_batches[key.batch];
            const uint32_t section = batch.m_skinSectionIndex;
            CmdF c = {};
            c.indexCount   = shared->m_skinSections[section].m_indexCount;
            c.firstIndex   = mesh.indexBase + mesh.sectionFirst[section];
            c.vertexOffset = mesh.vertexBase;
            c.entryStart   = static_cast<uint32_t>(entries.size());
            c.entryCount   = static_cast<uint32_t>(v - u);
            c.rows         = 3u * key.bones;
            c.combo        = static_cast<uint32_t>(animWords.size());
            if (key.anim != kNoAnim)
            {
                const M2SkinSection& sec = shared->m_skinSections[section];
                for (uint32_t k = 0; k < key.bones; ++k)
                    animWords.push_back(s_anim[key.anim].slots[shared->m_data->m_boneCombos[sec.m_boneComboIndex + k]]);
            }
            for (uint32_t& base : c.paletteBase)   // whole copies: firstInstance * rows is the first row
            {
                base = (paletteRows + c.rows - 1u) / c.rows * c.rows;
                paletteRows = base + c.entryCount * c.rows;
            }
            for (size_t w = u; w < v; ++w) entries.push_back(uses[w].obj);
            if (s_groups.empty() || !uses[u].key.SameGroup(uses[s_groups.back().firstEntry].key))
                s_groups.push_back({ static_cast<uint32_t>(cmds.size()), 0, key.textured != 0, key.influences, key.bones, key.texture,
                                     static_cast<uint32_t>(u), 0 });
            ++s_groups.back().count;
            s_groups.back().entryCount += c.entryCount;
            cmds.push_back(c);
            u = v;
        }
        s_animTable = static_cast<uint32_t>(animWords.size());
        animWords.insert(animWords.end(), animObjs.begin(), animObjs.end());
        s_animObjects = static_cast<uint32_t>(animObjs.size() / 4u);
        s_animFrameWords = frameWords;
        // Group::firstEntry was the first use's index while building; uses and entries share their order.
        HdGpuFixedDevTables(objs.data(), static_cast<uint32_t>(objs.size()), entries.data(), static_cast<uint32_t>(entries.size()),
                            cmds.data(), static_cast<uint32_t>(cmds.size()), links.data(), static_cast<uint32_t>(links.size()),
                            animWords.data(), static_cast<uint32_t>(animWords.size()), s_animObjects, boneRows, paletteRows);
        s_links.swap(links);
        s_ok.assign(s_reg.size(), 0);
        s_walk.clear();
        s_walk.resize(s_slotKeys.size());
        ++s_walkGen;
        s_tableEntries.swap(entries);
        s_tableObjects = static_cast<uint32_t>(objs.size());
        s_tableCommands = static_cast<uint32_t>(cmds.size());
        s_tablesUp = true;
        s_dirty = false;
        ++s_gen;   // the doodads registered so far are in the tables
    }

    void LogProof(const char* what)
    {
        if (FILE* f = std::fopen("Logs\\preuve-soleil.txt", "a"))
        {
            std::fprintf(f, "%s voie B listes : %llu images, %llu bandes comparees, %llu doodads choisis par le processeur, "
                         "%llu bandes differentes (%llu manquants sur la carte, %llu en trop) ; registre %u doodads, %u commandes, %u groupes\n",
                         what, static_cast<unsigned long long>(s_proofFrames), static_cast<unsigned long long>(s_proofBands),
                         static_cast<unsigned long long>(s_proofDoodads), static_cast<unsigned long long>(s_proofBad),
                         static_cast<unsigned long long>(s_proofMissing), static_cast<unsigned long long>(s_proofExtra),
                         s_tableObjects, s_tableCommands, static_cast<unsigned>(s_groups.size()));
            for (int b = 0; b < 3; ++b)
                std::fprintf(f, "    bande %d : %llu doodads attendus, %llu manquants ; DrawBand %llu fois, %llu dessins indirects\n", b,
                             static_cast<unsigned long long>(s_bandExpected[b]), static_cast<unsigned long long>(s_bandMissing[b]),
                             static_cast<unsigned long long>(s_bandCalls[b]), static_cast<unsigned long long>(s_bandDraws[b]));
            std::fclose(f);
        }
    }

    void CompareReadback()
    {
        if (!s_pending.waiting) return;
        std::vector<uint32_t> chosen(s_pending.entries.size() * 3u);
        uint64_t tag = 0;
        if (!HdGpuFixedDevTakeReadback(chosen.data(), static_cast<uint32_t>(chosen.size()), tag)) return;
        s_pending.waiting = false;
        if (tag != s_pending.tag) return;
        const uint32_t entries = static_cast<uint32_t>(s_pending.entries.size());
        for (uint32_t b = 0; b < 3; ++b)
        {
            std::vector<uint32_t> gpu;
            for (uint32_t e = 0; e < entries; ++e)
                if (chosen[b * entries + e]) gpu.push_back(s_pending.entries[e]);
            std::sort(gpu.begin(), gpu.end());
            gpu.erase(std::unique(gpu.begin(), gpu.end()), gpu.end());
            std::vector<uint32_t>& cpu = s_pending.expected[b];
            std::sort(cpu.begin(), cpu.end());
            cpu.erase(std::unique(cpu.begin(), cpu.end()), cpu.end());
            ++s_proofBands;
            s_proofDoodads += cpu.size();
            s_bandExpected[b] += cpu.size();
            if (gpu != cpu)
            {
                ++s_proofBad;
                std::vector<uint32_t> d;
                std::set_difference(cpu.begin(), cpu.end(), gpu.begin(), gpu.end(), std::back_inserter(d));
                s_proofMissing += d.size();
                s_bandMissing[b] += d.size();
                d.clear();
                std::set_difference(gpu.begin(), gpu.end(), cpu.begin(), cpu.end(), std::back_inserter(d));
                s_proofExtra += d.size();
            }
        }
        ++s_proofFrames;
        if (s_proofFrames % 5 == 1) LogProof(HD::GpuFixed::Mode() == 3 ? "TEMOIN (1 doodad sur 50 oublie par la carte)" : "PREUVE");
    }
}

namespace HD::GpuFixed
{
    int Mode()
    {
        if (!s_cvar)
            s_cvar = CVar::Register("hdGpuFixed",
                "HD (Claude voie B) : 1 = la carte graphique choisit et dessine les ombres du soleil des objets fixes du decor ; "
                "0 = le processeur (l'original) ; defaut 1 depuis le 23 nov (B1 garde) ; 2 = avec les preuves (listes, et texels avec hdShadowFarCheck 3, Logs\\preuve-soleil.txt) ; "
                "3 = temoin des preuves (la carte oublie 1 objet sur 50)",
                1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        const int v = s_cvar->m_intValue;
        return v < 0 || v > 3 ? 0 : v;
    }

    bool ProofFrame() { return s_proof; }

    const std::vector<CMapDoodadDef*>* WalkList(int row, int col, const CMapChunk* chunk)
    {
        if (!s_b4 || !s_active || s_walk.empty() || row < 0 || col < 0 || row >= int(kGrid) || col >= int(kGrid)) return nullptr;
        const uint16_t slot = s_chunkSlot[uint32_t(row) * kGrid + uint32_t(col)];
        if (!slot || slot > s_walk.size()) return nullptr;
        const uint32_t s = slot - 1u;
        if ((static_cast<uint32_t>(s_slotFull[s >> 5]) >> (s & 31u)) & 1u) return nullptr;
        Walk& w = s_walk[s];
        if (w.gen != s_walkGen || w.chunk != chunk || w.linkGen != chunk->m_hdLinkGen)
        {
            w.list.clear();
            auto& links = const_cast<CMapChunk*>(chunk)->m_doodadDefLinkList;   // (TSList has no const Head)
            for (CMapBaseObjLink* link = links.Head(); link; link = links.Next(link))
            {
                CMapDoodadDef* d = static_cast<CMapDoodadDef*>(link->m_owner);
                const int32_t id = d->unused_00B4;
                if (id > 0 && id <= kCpuBase && s_reg[static_cast<uint32_t>(id - 1)].born != s_gen) continue;
                w.list.push_back(d);
            }
            w.chunk = chunk;
            w.gen = s_walkGen;
            w.linkGen = chunk->m_hdLinkGen;
            _InterlockedIncrement64(reinterpret_cast<volatile long long*>(&s_walkBuilds));
        }
        return &w.list;
    }

    void BeginQuery(bool sunBands, bool splitCheck, uint32_t skipGen, uint32_t threads)
    {
        const int mode = Mode();
        s_b4 = B4();
        if (s_b4 != s_b4Last)
        {
            s_b4Last = s_b4;
            ClearAll(false);
        }
        ++s_queryNo;
        if (mode && (s_queryNo % 1800) == 0)
            if (FILE* f = std::fopen("Logs\\preuve-soleil.txt", "a"))
            {
                uint32_t cpuLive = 0;
                for (const Cpu& c : s_cpu) cpuLive += c.dead ? 0u : 1u;
                std::fprintf(f, "voie B registre : %u fixes (%u commandes), %u choisis par le processeur ; %llu demandes, %llu fixes inscrits, %llu processeur inscrits ; raisons :",
                             s_tableObjects, s_tableCommands, cpuLive, static_cast<unsigned long long>(s_asked),
                             static_cast<unsigned long long>(s_registered), static_cast<unsigned long long>(s_registeredCpu));
                for (int k = 0; k < 32; ++k) if (s_refused[k]) std::fprintf(f, " %d=%llu", k, static_cast<unsigned long long>(s_refused[k]));
                std::fprintf(f, " ; B4 : %u animes, %u fiches, %llu listes refaites, %llu autres requetes\n", s_animObjects, static_cast<unsigned>(s_anim.size()),
                             static_cast<unsigned long long>(s_walkBuilds), static_cast<unsigned long long>(s_otherQueries));
                std::fclose(f);
            }
        if (mode != s_lastMode)
        {
            s_lastMode = mode;
            s_proofFrames = s_proofBands = s_proofBad = s_proofDoodads = s_proofMissing = s_proofExtra = 0;
            for (int b = 0; b < 3; ++b) s_bandExpected[b] = s_bandMissing[b] = s_bandCalls[b] = s_bandDraws[b] = 0;
            s_pending.waiting = false;
        }
        s_inQuery = false;
        s_active = s_proof = s_listProof = false;
        if (!mode)
        {
            // Off: everything given back (the doodads' marks and stamps, the meshes, the tables), as before voie B.
            if ((!s_reg.empty() || !s_cpu.empty() || s_tablesUp || !s_mesh.empty()) && !HD::GpuScene::FrameBusy()) ClearAll();
            return;
        }
        if (!sunBands || !HdGpuFixedDevReady())
        {
            ++s_otherQueries;
            return;
        }
        if (s_groupKindChanged) ClearAll(false);
        if (s_skipGenKnown && skipGen != s_skipGen) ClearAll(false);   // HdSkipBigRock's answers changed
        s_skipGen = skipGen;
        s_skipGenKnown = true;
        if (s_liveMeshBytes && s_meshBytes > 2 * (s_liveMeshBytes + s_sceneMeshBytes) + (64u << 20) && !HD::GpuScene::FrameBusy())
            ClearAll();   // the shared buffers' dead meshes
        if (s_dirty) Rebuild();
        CompareReadback();
        s_inQuery = true;
        s_listProof = mode >= 2 && (s_listCounter++ % 60) == 0 && !s_pending.waiting;
        s_proof = mode >= 2 && (splitCheck || s_listProof);
        s_active = !s_proof;
        s_chunkWords = (static_cast<uint32_t>(s_slotKeys.size()) + 31u) / 32u;
        if (!s_chunkWords) s_chunkWords = 1;
        s_animBase = 3u * s_chunkWords + (s_tableObjects + 31u) / 32u + 1u;
        s_bits.assign(s_animBase + s_animFrameWords, 0);
        for (auto& e : s_expected) e.clear();
        for (int b = 0; b < 3; ++b) { s_cpuChosen[b].clear(); s_cpuModels[b].clear(); }
        s_meshesOk = false;
        s_gpuModels.clear();
        s_frameOk = false;
        s_bandOn[0] = s_bandOn[1] = s_bandOn[2] = false;
        s_forgotSinceEnd = false;
        // the doodads Forget took out since the tables were built: disabled until the rebuild
        for (uint32_t i = 0; i < s_tableObjects && i < s_reg.size(); ++i)
            if (s_reg[i].dead || s_reg[i].bad) Disable(i);
        if (s_b4)
        {
            s_slotFull.assign((s_slotKeys.size() + 31u) / 32u + 1u, 0);
            HD::Parallel::For((static_cast<uint32_t>(s_sweep.size()) + kSweepBlock - 1u) / kSweepBlock, SweepBlock, nullptr, threads);
            // A changed doodad leaves the registry (and is asked again) at a rebuild, not more than once every 64 queries.
            if (s_anyBad && (s_queryNo & 63u) == 0) { s_dirty = true; s_anyBad = 0; }
        }
    }

    bool Skip(int band, CMapDoodadDef* doodad)
    {
        const int32_t id = doodad->unused_00B4;
        if (id <= 0 || id > kCpuBase || !s_inQuery) return false;
        Reg& r = s_reg[static_cast<uint32_t>(id - 1)];
        if (r.born == s_gen) return false;   // not in the GPU tables yet: the CPU draws it this frame
        if (s_b4) return s_active && s_ok[static_cast<uint32_t>(id - 1)];   // BeginQuery's sweep
        const int check = Check(doodad, r);
        if (check)
        {
            Disable(static_cast<uint32_t>(id - 1));
            if (check == 2) r.bad = 1;
            return false;
        }
        (void)band;
        return s_active;
    }

    void NoteChunk(int band, int row, int col)
    {
        if (!s_inQuery || s_slotKeys.empty() || row < 0 || col < 0 || row >= int(kGrid) || col >= int(kGrid)) return;
        const uint16_t slot = s_chunkSlot[uint32_t(row) * kGrid + uint32_t(col)];
        if (!slot) return;
        const uint32_t s = slot - 1u;
        _InterlockedOr(&s_bits[uint32_t(band) * s_chunkWords + (s >> 5)], long(1u << (s & 31u)));
    }

    void NoteGroup(int band, const void* group, bool interior)
    {
        if (!s_inQuery || band < 0 || band > 2) return;
        const uint8_t kind = interior ? 2 : 1;
        auto it = s_groupKind.emplace(group, kind).first;
        if (it->second != kind)
        {
            it->second = kind;
            if (interior && s_groupSlot.count(reinterpret_cast<uintptr_t>(group) | kGroupTag)) s_groupKindChanged = true;
        }
        if (interior || s_groupSlot.empty()) return;
        const auto slot = s_groupSlot.find(reinterpret_cast<uintptr_t>(group) | kGroupTag);
        if (slot == s_groupSlot.end()) return;
        const uint32_t s = slot->second - 1u;
        _InterlockedOr(&s_bits[uint32_t(band) * s_chunkWords + (s >> 5)], long(1u << (s & 31u)));
    }

    bool Take(int band, CMapDoodadDef* doodad)
    {
        if (!s_inQuery || band < 0 || band > 2) return false;
        int32_t id = doodad->unused_00B4;
        if (id > 0 && id <= kCpuBase)
        {
            const uint32_t i = static_cast<uint32_t>(id - 1);
            if (s_proof && s_reg[i].born != s_gen && i < s_tableObjects
                && !((s_bits[3u * s_chunkWords + (i >> 5)] >> (i & 31u)) & 1))
                s_expected[band].push_back(i);
            return false;
        }
        if (id <= 0)
        {
            TryRegister(doodad);
            id = doodad->unused_00B4;
            if (id <= kCpuBase) return false;   // fixed from the next frame on, or refused
        }
        const uint32_t i = static_cast<uint32_t>(id - kCpuBase - 1);
        if (i >= s_cpu.size() || s_cpu[i].dead || s_cpu[i].doodad != doodad) { doodad->unused_00B4 = 0; return false; }
        Cpu& c = s_cpu[i];
        CM2Model* model = doodad->m_model;
        if (model != c.model || !model || model->m_shared != c.shared || model->m_optGeo || model->m_attachParent
            || model->m_attachList || !(model->m_fFlags & 1))
        {
            // Changed: out of the registry, asked again from scratch.
            c.dead = true;
            s_cpuFree.push_back(i);
            doodad->unused_00B4 = 0;
            return false;
        }
        // The gather's own preparation (InitializeLoaded is not needed: loaded), in the order the gathers come.
        if (c.prepared != s_queryNo)
        {
            model->HdPrepareShadowGather();
            c.prepared = s_queryNo;
        }
        s_cpuChosen[band].push_back(i);
        s_cpuModels[band].push_back(model);
        if (s_proof) { s_gpuModels.insert(model); return false; }   // the CPU lists keep it for the reference
        return true;
    }

    void EndQuery(const BandIn bands[3])
    {
        if (!s_inQuery) return;
        s_inQuery = false;
        s_frameOk = false;
        const bool anyCpu = !s_cpuChosen[0].empty() || !s_cpuChosen[1].empty() || !s_cpuChosen[2].empty();
        if (!s_tablesUp || !s_tableCommands)
        {
            s_meshesOk = anyCpu && HdGpuFixedDevUploadMeshes();
            return;
        }
        const CM2Scene* scene = nullptr;
        for (uint32_t i = 0; i < s_tableObjects && i < s_reg.size(); ++i)
            if (!s_reg[i].dead) { scene = s_reg[i].scene; break; }
        if (!scene) return;

        FrameF f = {};
        std::memcpy(f.view, &scene->m_view, sizeof f.view);
        f.counts[0] = s_tableCommands;
        f.counts[1] = 3u * s_chunkWords;
        f.counts[2] = Mode() == 3 ? 1u : 0u;
        f.counts[3] = static_cast<uint32_t>(s_tableEntries.size());
        f.anim[0] = s_animObjects;
        f.anim[1] = s_animTable;
        f.anim[2] = s_animBase;
        f.norm[0] = 1.021435f; f.norm[1] = 0.95906597f; f.norm[2] = 0.532516f; f.norm[3] = 0.91521198f;
        f.quat[0] = 0.000030518044f; f.quat[1] = 0.6521197f;
        const float lo = -0.019444443f, hi = 0.019444443f;
        f.thr[0] = lo;
        f.thr[1] = hi;
        for (int b = 0; b < 3; ++b)
        {
            const BandIn& in = bands[b];
            BandF& o = f.band[b];
            if ((!in.on && !in.onAnim) || !in.frustum || !in.extents) continue;
            std::memcpy(o.planes, in.frustum->planes, sizeof o.planes);
            if (in.useCull && in.cull) std::memcpy(o.cull, in.cull->planes, sizeof o.cull);
            o.extB[0] = in.extents->b.x; o.extB[1] = in.extents->b.y; o.extB[2] = in.extents->b.z; o.extB[3] = in.maxSize;
            o.extT[0] = in.extents->t.x; o.extT[1] = in.extents->t.y; o.extT[2] = in.extents->t.z;
            o.pos[0] = in.pos[0]; o.pos[1] = in.pos[1]; o.pos[2] = in.pos[2];
            o.fadeA[0] = in.fade[0]; o.fadeA[1] = in.fade[1]; o.fadeA[2] = in.fade[2]; o.fadeA[3] = in.fade[3];
            o.fadeB[0] = in.fade[4];
            o.flags[0] = (in.on ? 1u : 0u) | (in.onAnim ? 2u : 0u);
            o.flags[1] = in.useCull ? 1u : 0u;
            o.flags[2] = in.fadeMode;
            o.flags[3] = static_cast<uint32_t>(b) * s_chunkWords;
        }
        const bool readback = s_listProof;
        ++s_tag;
        s_frameOk = HdGpuFixedDevFrame(&f, sizeof f, reinterpret_cast<const uint32_t*>(s_bits.data()),
                                       static_cast<uint32_t>(s_bits.size()), readback, s_tag);
        for (int b = 0; b < 3; ++b) s_bandOn[b] = s_frameOk && (bands[b].on || bands[b].onAnim);
        s_meshesOk = s_frameOk || (anyCpu && HdGpuFixedDevUploadMeshes());
        if (s_frameOk && readback)
        {
            s_pending.tag = s_tag;
            for (int b = 0; b < 3; ++b) s_pending.expected[b] = s_expected[b];
            s_pending.entries = s_tableEntries;
            s_pending.objects = s_tableObjects;
            s_pending.waiting = true;
        }
        if (s_frameOk && s_proof)
            for (uint32_t i = 0; i < s_tableObjects && i < s_reg.size(); ++i)
                if (!s_reg[i].dead && !((s_bits[3u * s_chunkWords + (i >> 5)] >> (i & 31u)) & 1)) s_gpuModels.insert(s_reg[i].model);
    }

    bool CpuBandOn(int band) { return CShadowCache::HdSunRender() && band >= 0 && band < 3 && s_meshesOk && !s_cpuChosen[band].empty(); }

    bool BandOn(int band)
    {
        return CShadowCache::HdSunRender() && band >= 0 && band < 3 && (s_bandOn[band] || CpuBandOn(band));
    }

    const std::vector<CM2Model*>& CpuModels(int band)
    {
        static const std::vector<CM2Model*> none;
        return CpuBandOn(band) ? s_cpuModels[band] : none;
    }

    bool DrawnByGpu(const CM2Model* model) { return s_proof && s_gpuModels.count(model) != 0; }

    /// One CPU-chosen batch copy: its draw group and command keys, its model.
    struct CpuUse
    {
        uint8_t   textured;
        CTexture* texture;
        uint16_t  influences;
        uint16_t  bones;
        uint32_t  mesh;
        uint32_t  batch;
        CM2Model* model;
        bool SameCommand(const CpuUse& o) const
        {
            return textured == o.textured && texture == o.texture && influences == o.influences && bones == o.bones
                && mesh == o.mesh && batch == o.batch;
        }
        bool SameGroup(const CpuUse& o) const
        {
            return textured == o.textured && texture == o.texture && influences == o.influences && bones == o.bones;
        }
    };
    std::vector<CpuUse> s_uses;

    void DrawCpu(int band, CGxBatch& batch)
    {
        // The batch choice of the gather (HdCollectShadowBatches: the same tests, now that the bones are final).
        s_uses.clear();
        CModelBatch local[2][256];
        for (uint32_t i : s_cpuChosen[band])
        {
            const Cpu& c = s_cpu[i];
            if (c.dead) continue;
            CM2Model* model = c.model;
            CModelBatchList lists[2];
            for (int k = 0; k < 2; ++k) { lists[k].m_batches = local[k]; lists[k].m_count = 0; lists[k].m_maxCount = 256; }
            model->HdCollectShadowBatches(lists[0], lists[1]);
            const CM2Shared* shared = c.shared;
            const M2Data* data = shared->m_data;
            for (int k = 0; k < 2; ++k)
                for (uint32_t n = 0; n < lists[k].m_count; ++n)
                {
                    const uint32_t bi = lists[k].m_batches[n].m_batchIndex;
                    const M2Batch& mb = shared->m_skinData->m_batches[bi];
                    const M2SkinSection& section = shared->m_skinSections[mb.m_skinSectionIndex];
                    CTexture* texture = nullptr;
                    if (k == 1)
                    {
                        // RenderBatchShadowMap: no texture, no draw.
                        const uint16_t textureIndex = data->m_textureCombos[mb.m_textureComboIndex];
                        if (textureIndex >= data->m_textures.m_count || !(texture = model->m_textures[textureIndex])) continue;
                    }
                    s_uses.push_back({ static_cast<uint8_t>(k), texture, section.m_boneInfluences, section.m_boneCount, c.mesh, bi, model });
                }
        }
        if (s_uses.empty()) return;
        std::stable_sort(s_uses.begin(), s_uses.end(), [](const CpuUse& a, const CpuUse& b) {
            if (a.textured != b.textured) return a.textured < b.textured;
            if (a.texture != b.texture) return std::less<CTexture*>()(a.texture, b.texture);
            if (a.influences != b.influences) return a.influences < b.influences;
            if (a.bones != b.bones) return a.bones < b.bones;
            if (a.mesh != b.mesh) return a.mesh < b.mesh;
            return a.batch < b.batch;
        });
        bool texturedPhase = false;
        CShaderEffect::SetAlphaRef(0.0f);
        CShaderEffect::SetDefaultShaders(0);
        for (size_t u = 0; u < s_uses.size();)
        {
            size_t v = u;
            uint32_t commands = 0;
            while (v < s_uses.size() && s_uses[v].SameGroup(s_uses[u]))
            {
                if (v == u || !s_uses[v].SameCommand(s_uses[v - 1])) ++commands;
                ++v;
            }
            const CpuUse& g = s_uses[u];
            const uint32_t rows = 3u * g.bones;
            if (g.textured && !texturedPhase)
            {
                CShaderEffect::SetAlphaRef(0.50196081f);
                CShaderEffect::SetDefaultShaders(0);
                texturedPhase = true;
            }
            CGxTex* gxTex = nullptr;
            if (g.textured && !(gxTex = TextureGetGxTex(g.texture, 0, nullptr))) { u = v; continue; }
            HdGpuFixedCpuSpan span;
            if (!HdGpuFixedDevCpuAlloc(rows, static_cast<uint32_t>(v - u), commands, span)) { u = v; continue; }
            float* rowsOut = static_cast<float*>(span.palette);
            // The commands are built here, in cached memory, and copied once: the stream is write-combined (a read
            // back from it, as ++ is, costs a bus round trip each).
            static std::vector<uint32_t> s_args;
            s_args.assign(5u * commands, 0u);
            uint32_t* args = s_args.data();
            uint32_t copy = 0, cmd = 0;
            for (size_t w = u; w < v; ++w)
            {
                const CpuUse& it = s_uses[w];
                const CM2Shared* shared = it.model->m_shared;
                const M2Batch& mb = shared->m_skinData->m_batches[it.batch];
                const uint32_t sectionIndex = mb.m_skinSectionIndex;
                const M2SkinSection& section = shared->m_skinSections[sectionIndex];
                if (w == u || !it.SameCommand(s_uses[w - 1]))
                {
                    const Mesh& mesh = s_mesh[it.mesh];
                    uint32_t* a = args + 5u * cmd++;
                    a[0] = section.m_indexCount;
                    a[1] = 0;
                    a[2] = mesh.indexBase + mesh.sectionFirst[sectionIndex];
                    a[3] = static_cast<uint32_t>(mesh.vertexBase);
                    a[4] = span.firstInstance + copy;
                }
                ++args[5u * (cmd - 1) + 1];
                // RenderBatchShadowMap's rows for this copy (INST1: the same registers, the same order).
                const uint16_t* combos = &shared->m_data->m_boneCombos[section.m_boneComboIndex];
                for (uint32_t k = 0; k < it.bones; ++k)
                {
                    const C44Matrix& bone = it.model->m_boneMatrices[combos[k]];
                    float r[12] = { bone.a0, bone.b0, bone.c0, bone.d0, bone.a1, bone.b1, bone.c1, bone.d1,
                                    bone.a2, bone.b2, bone.c2, bone.d2 };
                    std::memcpy(rowsOut, r, sizeof r);
                    rowsOut += 12;
                }
                ++copy;
            }
            std::memcpy(span.args, s_args.data(), s_args.size() * sizeof(uint32_t));
            if (gxTex) g_theGxDevicePtr->RsSet(GxRs_Texture0, gxTex);
            CShaderEffect::SetDefaultShaders(g.influences);
            if (HdGpuFixedDevArmCpu(span))
            {
                g_theGxDevicePtr->Draw(&batch, 1);
                ++s_bandDraws[band];
                HdGpuFixedDevDisarm();
            }
            u = v;
        }
    }

    void DrawBand(int band)
    {
        if (!BandOn(band)) return;
        ++s_bandCalls[band];
        // A live registered model for the device's buffer bindings (any M2 vertex buffer: the draw takes the shared ones).
        CM2Shared* rep = nullptr;
        for (uint32_t i = 0; i < s_tableObjects && i < s_reg.size() && !rep; ++i)
            if (!s_reg[i].dead && s_reg[i].doodad->m_model == s_reg[i].model && s_reg[i].model->m_shared == s_reg[i].shared)
                rep = s_reg[i].model->m_shared;
        for (uint32_t i = 0; i < s_cpuChosen[band].size() && !rep; ++i)
            if (!s_cpu[s_cpuChosen[band][i]].dead) rep = s_cpu[s_cpuChosen[band][i]].model->m_shared;
        if (!rep || !rep->SetIndices() || !rep->SetVertices(0)) return;

        GxRsSet(GxRs_BlendingMode, static_cast<int32_t>(0));
        CShaderEffect::SetAlphaRef(0.0f);
        CShaderEffect::SetDefaultShaders(0);
        bool texturedPhase = false;
        CGxBatch batch;
        batch.m_primType = GxPrim_Triangles;
        batch.m_start = 0;
        batch.m_count = 3;
        batch.m_minIndex = 0;
        batch.m_maxIndex = 2;
        if (CpuBandOn(band)) DrawCpu(band, batch);
        if (!s_bandOn[band]) return;
        CShaderEffect::SetAlphaRef(0.0f);
        CShaderEffect::SetDefaultShaders(0);
        for (const Group& g : s_groups)
        {
            if (g.textured && !texturedPhase)
            {
                CShaderEffect::SetAlphaRef(0.50196081f);
                CShaderEffect::SetDefaultShaders(0);
                texturedPhase = true;
            }
            if (g.textured)
            {
                // The texture belongs to the models: one member still holding its model keeps it alive.
                bool live = false;
                for (uint32_t e = g.firstEntry; e < g.firstEntry + g.entryCount && !live; ++e)
                {
                    const Reg& r = s_reg[s_tableEntries[e]];
                    live = !r.dead && r.doodad->m_model == r.model;
                }
                if (!live) continue;
                CGxTex* gxTex = TextureGetGxTex(g.texture, 0, nullptr);
                if (!gxTex) continue;
                g_theGxDevicePtr->RsSet(GxRs_Texture0, gxTex);
            }
            CShaderEffect::SetDefaultShaders(g.influences);
            if (!HdGpuFixedDevArm(static_cast<uint32_t>(band), g.first, g.count, 3u * g.bones)) continue;
            g_theGxDevicePtr->Draw(&batch, 1);
            ++s_bandDraws[band];
            HdGpuFixedDevDisarm();
        }
    }

    void Forget(CMapDoodadDef* doodad)
    {
        if (!doodad) return;
        const int32_t id = doodad->unused_00B4;
        if (id < 0) { doodad->unused_00B4 = 0; return; }   // a refusal: asked again from scratch
        if (!id) return;
        if (id > kCpuBase)
        {
            const uint32_t c = static_cast<uint32_t>(id - kCpuBase - 1);
            if (c < s_cpu.size() && s_cpu[c].doodad == doodad && !s_cpu[c].dead)
            {
                s_cpu[c].dead = true;
                s_cpuFree.push_back(c);
            }
            doodad->unused_00B4 = 0;
            return;
        }
        const uint32_t i = static_cast<uint32_t>(id - 1);
        if (i < s_reg.size() && s_reg[i].doodad == doodad)
        {
            s_reg[i].dead = true;
            s_reg[i].model = nullptr;
            if (s_inQuery) Disable(i);
        }
        doodad->unused_00B4 = 0;
        ResetStamps(doodad);
        s_dirty = true;
        s_forgotSinceEnd = true;
    }

    bool SceneMesh(const CM2Shared* shared, MeshPlace& place)
    {
        if (!shared || !shared->m_data || !shared->m_skinData) return false;
        const uint32_t id = MeshFor(shared);
        if (id == UINT32_MAX) return false;
        const Mesh& m = s_mesh[id];
        place = { id, m.vertexBase, m.indexBase, m.sectionFirst.data(), static_cast<uint32_t>(m.sectionFirst.size()) };
        return true;
    }

    void SceneMeshRef(uint32_t id, int delta)
    {
        if (id >= s_mesh.size()) return;
        Mesh& m = s_mesh[id];
        if (delta > 0) { if (m.sceneRefs++ == 0) s_sceneMeshBytes += m.bytes; }
        else if (m.sceneRefs && --m.sceneRefs == 0) s_sceneMeshBytes -= m.bytes;
    }

    uint32_t MeshGeneration() { return s_meshGeneration; }

    uint32_t ListGeneration() { return s_walkGen; }
    void Touch() { ++s_walkGen; }
    bool B4()
    {
        if (!s_cvarB4)
            s_cvarB4 = CVar::Register("hdB4",
                "HD (Claude voie B4) : 1 = la carte graphique choisit, anime et dessine aussi les ombres du soleil des arbres qui bougent, des oiseaux et "
                "des poissons, et le processeur ne parcourt plus les objets de la carte ; 0 = comme B3",
                1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        return s_cvarB4->m_intValue != 0;
    }
}
