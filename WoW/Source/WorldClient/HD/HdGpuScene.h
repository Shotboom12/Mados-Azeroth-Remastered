// Claude voie B, B2 (23 nov 2026): the fixed map doodads of the main M2 scene, drawn by the GPU.
//
// The CPU keeps its own tests (frustum, horizon, mirror, fade): a registered doodad reaching
// CWorldScene::AddDoodadDefModelToModelScene at full alpha is Taken instead of being animated, lit, sorted and drawn one
// by one. At the end of CM2Scene::Animate the frame's copies are counted per mesh section, their bone 0 (world x view, the
// same matrix product) is written once into the frame's stream, and each group of sections with the same state is one
// vkCmdDrawIndexedIndirect. What makes a doodad fixed and plain is checked every frame; anything else is the original.
//
// hdGpuScene: 0 = the original, 1 = voie B (default), 2 = voie B with the two-phase depth pyramid (Hi-Z), 3 = the taken
// doodads are not drawn at all (the ceiling of the gain, never for playing).
#pragma once

#include <cstdint>

class CMapDoodadDef;

namespace HD::GpuScene
{
    int Mode();
    /// The doodad enters the frame's scene at full alpha. True: voie B draws it (the caller does nothing more).
    bool Take(CMapDoodadDef* doodad);
    /// Claude B4: what Take will read of a registered doodad, fetched from memory ahead (prefetch only).
    void Ahead(CMapDoodadDef* doodad);
    /// The doodad is freed or linked again: out of the registry.
    void Forget(CMapDoodadDef* doodad);
    /// Between OnAnimate and the end of the draw the shared meshes must stay (HdGpuFixed.cpp's reset waits).
    bool FrameBusy();
}
