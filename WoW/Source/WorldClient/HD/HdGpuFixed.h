// Claude voie B (23 nov 2026): the fixed map doodads of the sun shadow bands, chosen and drawn by the GPU.
//
// The registry (HdGpuFixed.cpp) takes a terrain doodad the first time the sun query sends it to the gather and every one
// of its shadow batches can go to the GPU (CM2Model::HdGpuFixedBatches). From the next frame on, the query skips it
// (phase A: no test, no stamp, no gather, no sort, no draw on the CPU); the GPU runs the same tests per band
// (vulkan/GpuFixedCull.comp), writes its bone 0 and its indirect commands, and RenderCallback draws each group of
// commands with one vkCmdDrawIndexedIndirect. A doodad that changes (model, box, alpha, flag 0x80) goes back to the CPU
// path that frame (disabled bit) and leaves the registry when the change is structural.
//
// hdGpuFixed: 0 = the original (default), 1 = voie B, 2 = voie B with its proofs (lists every 60 frames; the texels with
// hdShadowFarCheck 3, Logs\preuve-soleil.txt), 3 = the proofs' control (the GPU leaves out every 50th doodad).
#pragma once

#include <cstdint>
#include <vector>

class CMapDoodadDef;
class CMapChunk;
class CM2Model;
class CM2Shared;
class CFrustum;
class CAaBox;

namespace HD::GpuFixed
{
    struct BandIn
    {
        bool            on = false;      ///< queried this frame, terrain doodads wanted (flags 8), HdCasterKind(1)
        bool            onAnim = false;  ///< Claude B4: the same, the animated ones (flags 4: GetBillboardBoneCount)
        const CFrustum* frustum = nullptr;
        const CFrustum* cull = nullptr;
        bool            useCull = false;
        const CAaBox*   extents = nullptr;
        float           maxSize = 0.0f;
        float           pos[3] = {};     ///< the fade origin (band centre, or the camera in mode 0)
        uint32_t        fadeMode = 1;    ///< 0 camera order, 1 band-centre order, 2 never beyond
        float           fade[5] = {};    ///< the limit of each fade level for this band
    };

    int Mode();

    /// Start of a sun query. `sunBands`: the band query of the sun (not the dynamic one, no frustum query, no cache);
    /// `splitCheck`: CShadowCache's texel proof frame; `skipGen`: HdSkipBigRock's cache generation (a change empties
    /// the registry).
    /// `threads`: workers for the registry's sweep (Claude B4).
    void BeginQuery(bool sunBands, bool splitCheck, uint32_t skipGen, uint32_t threads);
    /// Phase A (any thread): true = a registered doodad the GPU draws this frame (the CPU leaves it alone).
    bool Skip(int band, CMapDoodadDef* doodad);
    /// Claude B4, phase A (any thread, a chunk by one thread at a time): the chunk's doodads the CPU still has to look at,
    /// in link order (those the GPU has are left out). Null: the whole list.
    const std::vector<CMapDoodadDef*>* WalkList(int row, int col, const CMapChunk* chunk);
    /// Phase A (any thread): the chunk (row, col) passed HdQChunk in this band.
    void NoteChunk(int band, int row, int col);
    /// QueryMapObjDefsBand (main thread): the building group passed its tests in this band and its doodads are walked
    /// (`interior`: its building has flag 0x400, whose doodads get other tests).
    void NoteGroup(int band, const void* group, bool interior);
    /// Main thread, at the gather of the doodad in this band (registration; the proof's expected lists). True: voie B
    /// draws it (a CPU-chosen caster: animated here, its bone rows written at the draw), the caller does not gather it.
    bool Take(int band, CMapDoodadDef* doodad);
    /// End of the sun query: the GPU's choice is recorded (compute in the frame's pre-pass).
    void EndQuery(const BandIn bands[3]);

    /// RenderBands is drawing the sun bands (CShadowCache::HdSunRender) and the GPU chose this band's doodads this frame.
    bool BandOn(int band);
    /// RenderCallback: the GPU groups of this band, after the CPU's models (the CPU-chosen casters' billboards already
    /// turned to the sun, CpuModels).
    void DrawBand(int band);
    /// The CPU-chosen casters of this band (their billboard bones are turned to the sun before DrawBand).
    const std::vector<CM2Model*>& CpuModels(int band);
    /// Proof frames: this model's batches in the CPU lists are drawn by the GPU (left out of the CPU draw).
    bool DrawnByGpu(const CM2Model* model);
    bool ProofFrame();

    /// Claude B4: the chunks' lists (WalkList, CullDoodadsExterior's) are void when this moves (or the chunk's m_hdLinkGen).
    uint32_t ListGeneration();
    void Touch();
    bool B4();   ///< hdB4

    /// The doodad is freed or linked again: out of the registry.
    void Forget(CMapDoodadDef* doodad);

    /// Claude B2: the shared store's mesh of a model file (its first copy), for the scene's draws. A reference keeps it
    /// counted as live. False: none. `MeshGeneration` moves when the store is emptied (every id is void then).
    struct MeshPlace
    {
        uint32_t        id = 0;
        int32_t         vertexBase = 0;
        uint32_t        indexBase = 0;
        const uint32_t* sectionFirst = nullptr;
        uint32_t        sections = 0;
    };
    bool SceneMesh(const CM2Shared* shared, MeshPlace& place);
    void SceneMeshRef(uint32_t id, int delta);
    uint32_t MeshGeneration();
}
