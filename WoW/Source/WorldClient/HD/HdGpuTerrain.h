// Claude voie B, B3 (23 nov 2026): the terrain chunks of the main scene, one indirect draw per group of chunks.
//
// The sort table's lists keep their order and their shaders. A chunk whose textures and buffers are ready leaves its own
// constants (position, texture scales and offsets, point lights, lamps, texture places) in the frame's rows and one
// command; the group's last chunk then draws them all with the original code, armed (vulkan/GpuFixed.cpp). Any other
// chunk is drawn by the original path.
//
// hdGpuTerrain: 0 = the original, 1 = voie B.
#pragma once

#include <cstdint>
#include <vector>

class CMapRenderChunk;

namespace HD::GpuTerrain
{
    int Mode();
    /// CWorldScene::RenderChunksSinglePass starts, with the chunks its lists will draw, in order. False: the original.
    bool Begin(const std::vector<CMapRenderChunk*>& chunks);
    /// The chunk enters a group (Flush draws it). False: the caller draws it.
    bool Add(CMapRenderChunk* chunk, int32_t layers);
    /// The end of a list: its groups are drawn (the list's pixel shader is still set).
    void Flush();
}
