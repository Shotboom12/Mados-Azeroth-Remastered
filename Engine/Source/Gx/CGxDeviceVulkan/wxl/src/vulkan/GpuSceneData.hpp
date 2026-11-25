// Claude voie B, B2 (23 nov 2026): what one GPU-driven draw of fixed scene doodads carries beside its indirect commands
// (WoW/Source/WorldClient/HD/HdGpuScene.cpp writes it, kept for the frames in flight). Plain data, no dependency.
#pragma once

#include <cstdint>

namespace HD::GpuSceneData
{
    /// One mesh section of the draw and its copies (one VkDrawIndexedIndirectCommand).
    struct Cmd
    {
        uint32_t indexCount;
        uint32_t firstIndex;
        int32_t  vertexOffset;
        uint32_t firstCopy;     ///< into Draw::copies
        uint32_t copies;
    };

    /// One copy's bounds in view space, as the capture of its own draw would compute them (Record.cpp ModelBound and
    /// ExactModelBound on the section's own bones).
    struct Copy
    {
        float    bound[4];      ///< exact: the bones' box and the section's reach; [3] < 0: unknown (boundOld then)
        float    boundOld[4];   ///< 30 yd times the scale
        uint32_t at;            ///< its rows: Draw::rowsAt + at * 48 bytes
    };

    /// One set of local lights as the vertex shader reads it, c17 .. c27 (LocalLights), and a row of padding.
    struct Lights { float row[12][4]; };

    struct Draw
    {
        const Cmd*  cmds = nullptr;
        uint32_t    cmdCount = 0;
        const Copy* copies = nullptr;
        uint32_t    lit = 0;         ///< 1 .. 4: the copies' lights are in the palette, 12 rows before their own (the .gpul twin)
        uint32_t    rowsAt = 0;      ///< bytes into the palette buffer of row 0
        uint32_t    replay = 1;      ///< 0: no capture record (the copies another issue already noted)
    };
}

// Claude voie B, B3 (23 nov 2026): one GPU-driven draw of terrain chunks (WoW/Source/WorldClient/HD/HdGpuTerrain.cpp).
namespace HD::GpuTerrainData
{
    constexpr uint32_t kRows = 96;   ///< vec4 rows a chunk (outils-shaders/voie-b/faire-variantes-terrain-gpu.py)
    constexpr uint32_t kRowLighting = 20, kRowMover = 21, kRowTextures = 22, kRowLamps = 25;

    /// One chunk (one VkDrawIndexedIndirectCommand).
    struct Chunk
    {
        uint32_t indexCount;
        uint32_t firstIndex;
        int32_t  vertexOffset;
        uint32_t instance;      ///< its rows: instance * kRows rows into the palette buffer
        float*   rows;          ///< the same, mapped (written only)
        uint32_t lampSlots;     ///< HD::Lamp::Native's slots of its lamps (its mover row's metadata)
    };

    struct Draw
    {
        const Chunk* chunks = nullptr;
        uint32_t     count = 0;
        bool         lighting = false;   ///< the chunks wrote row kRowLighting; else it is the draw's own p1
    };
}
