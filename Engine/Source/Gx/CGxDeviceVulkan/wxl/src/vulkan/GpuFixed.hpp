// Claude voie B (23 nov 2026): the GPU keeps the fixed map doodads, chooses those of each sun shadow band (compute,
// GpuFixedCull.comp) and draws them (vkCmdDrawIndexedIndirect over the commands it wrote).
//
// The engine side (WoW/Source/WorldClient/HD/HdGpuFixed.cpp) keeps the registry and calls the HdGpuFixedDev* functions
// below (plain C++ linkage, declared again there). This module owns the GPU side:
//   - two shared buffers holding the first copy of each registered model file (vertices as CM2Shared::SetVertices(0)
//     writes copy 0, indices as SetIndices writes copy 0), grown by copy when full;
//   - the registry tables (doodads, entries, commands, chunk links), uploaded whole when the engine changed them;
//   - per frame: the band parameters and the chunk / disabled bits, the compute dispatch in the frame's pre-pass, then
//     the indirect commands and the bone palette the draws read.
// The draws are the engine's own (one representative CGxBatch per draw group, M2Model.cpp): while armed (Arm / Disarm),
// draw::BuildCmd turns the draw into a GPU-driven one (Cmd::gpuIndirect, pipelines take the .bones.gpu twin).
#pragma once

#include "vulkan/Vk.hpp"
#include "vulkan/GpuSceneData.hpp"

#include <cstdint>

namespace wxlvk::vk::gpufixed
{
    /// What draw::BuildCmd copies into the Cmd while the engine draws a voie B group (main thread only).
    struct Armed
    {
        bool            on = false;
        VkBuffer        args = VK_NULL_HANDLE;
        uint32_t        argsOffset = 0;
        uint32_t        drawCount = 0;
        VkDescriptorSet palette = VK_NULL_HANDLE;
        VkBuffer        vertices = VK_NULL_HANDLE;
        VkBuffer        indices = VK_NULL_HANDLE;
        uint32_t        vertexBytes = 0;
        uint32_t        indexBytes = 0;
        uint32_t        rows = 3;   ///< palette rows a copy (3 per bone of the section)
        /// Claude B2: a group of the main scene (its copies for the capture), and the palette's set of 3600 bytes the
        /// replays bind at a copy's rows. Null: a sun-shadow group (B1).
        const HD::GpuSceneData::Draw* scene = nullptr;
        VkDescriptorSet replay = VK_NULL_HANDLE;
        uint32_t        stream = 0;
        bool multi = false;   ///< Claude B3: the draw's own buffers and state, the commands in place of its one draw
        const HD::GpuTerrainData::Draw* terrain = nullptr;   ///< Claude B3: a group of terrain chunks (the draw's own buffers)
    };

    /// Null when no voie B draw is armed.
    const Armed* Current();
    /// Claude B2: c224 .. c235 (CShadowCache's shadow matrices), that the scene's modules read at a fixed place of the
    /// palette, b[193 .. 204]: kept at the head of the stream (its first 225 rows are nobody's).
    void SceneHead(const void* shadowRows);
}

// --- the engine's interface (HD/HdGpuFixed.cpp) ------------------------------------------------------------------------

/// The device can do it: Vulkan up, multiDrawIndirect and drawIndirectFirstInstance, the palette layout, the .gpu twins.
bool HdGpuFixedDevReady();
/// Appends a model file's first copy to the shared buffers (uploaded at the next frame). False when out of memory.
bool HdGpuFixedDevMesh(const void* vertices, uint32_t vertexCount, uint32_t vertexStride, const uint16_t* indices,
                       uint32_t indexCount, int32_t& vertexBase, uint32_t& indexBase);
/// Forgets every mesh (the registry was emptied): the next meshes start at 0 again.
void HdGpuFixedDevResetMeshes();
/// The registry tables, uploaded whole at the next frame (copied here). Claude B4: `anim` the animated models' bones and
/// keys, their doodads (GpuFixedCull.comp's D); their bones' rows; the rows of the three bands' palettes.
void HdGpuFixedDevTables(const void* objects, uint32_t objectCount, const uint32_t* entries, uint32_t entryCount,
                         const void* commands, uint32_t commandCount, const uint32_t* links, uint32_t linkCount,
                         const uint32_t* anim, uint32_t animWords, uint32_t animObjects, uint32_t boneRows, uint32_t paletteRows);
/// This frame's choice: the band parameters (GpuFixedCull.comp FrameB) and the bits. Records the uploads, the dispatch
/// and its barriers into the frame's pre-pass. `readback`: the chosen flags are copied for HdGpuFixedDevTakeReadback.
/// False when nothing was recorded (no frame, no command, a failure): the engine draws none of them this frame.
bool HdGpuFixedDevFrame(const void* frame, uint32_t frameBytes, const uint32_t* bits, uint32_t bitWords, bool readback,
                        uint64_t tag);
/// The chosen flags ([band][entry]) of the last readback once its frame completed: true once, with its tag.
bool HdGpuFixedDevTakeReadback(uint32_t* out, uint32_t words, uint64_t& tag);
/// Arms the next engine draw: commands [first, first + count) of `band` in this frame's indirect buffer.
/// `rows`: palette rows a copy (3 per bone of the group's sections).
bool HdGpuFixedDevArm(uint32_t band, uint32_t first, uint32_t count, uint32_t rows);

/// The CPU-chosen casters (animated, several bones, billboards): the engine writes their bone rows and their indirect
/// commands itself into this frame's stream memory. One allocation = one draw group: `rows` palette rows a copy,
/// `copies` copies, `commands` commands. `palette` / `args` are where to write; `firstInstance` is the copy index of the
/// first row (each command's firstInstance = it + the copies before it in the group).
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
/// Arms the next engine draw with a span written by the engine.
bool HdGpuFixedDevArmCpu(const HdGpuFixedCpuSpan& span);
/// The shared geometry's meshes are uploaded even with no GPU-tested command this frame.
bool HdGpuFixedDevUploadMeshes();
void HdGpuFixedDevDisarm();

/// Claude B3: the terrain's groups (HD/HdGpuTerrain.cpp). Ready: the device has the texture table, the modules their twins.
bool HdGpuTerrainDevReady();
/// This frame's draws may be grouped (no consumer drops draws by their state, no FSR motion).
bool HdGpuTerrainDevFrame();
/// A layer's texture, made ready as a draw would, and its place in the table. cube: not in the table, the draw's own set
/// holds it (its place is 0). False: the chunk must be drawn by itself.
bool HdGpuTerrainDevTexture(void* device, void* tex, float& place, bool& cube);
/// The chunk's buffers, as a draw reads them, noted as drawn. False: the chunk must be drawn by itself.
bool HdGpuTerrainDevGeometry(const void* vertexBuf, const void* indexBuf, uint32_t start, uint32_t& firstIndex, int32_t& vertexOffset);
/// The next engine draw is the span's commands instead (the water: the same state, the draw's own buffers).
bool HdGpuMultiDevArm(const HdGpuFixedCpuSpan& span);
/// Arms the next engine draw with commands [first, first + count) of the span (rows = HD::GpuTerrainData::kRows).
bool HdGpuTerrainDevArm(const HdGpuFixedCpuSpan& span, uint32_t first, uint32_t count, const HD::GpuTerrainData::Draw* draw);
/// The GPU time of the voie B dispatch is not measured here; these are the counters for the log.
void HdGpuFixedDevStats(uint64_t& uploads, uint64_t& uploadBytes, uint64_t& dispatches, uint64_t& growths);
