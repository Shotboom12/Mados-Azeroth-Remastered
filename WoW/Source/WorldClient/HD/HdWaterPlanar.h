#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDWATERPLANAR_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDWATERPLANAR_H

// Waystone HD: planar reflection of the water, stage 1 (not part of the original client). D3D9 only, off by default.
// Like Cataclysm's CWorldScene::RenderReflection: the world drawn again with the camera mirrored under ONE water
// plane, into a texture of half the screen's size, which hdWater 1 reads where its screen-space march finds nothing.
// 3.3.5 has no second CWorldView to cull for, so this pass draws, on its own: the sky (dome, clouds, sun, moons) and the
// resident terrain chunks the mirrored camera sees. Not yet: buildings (WMO), models (M2), grass, stars, horizon,
// zone skyboxes (the pass is then skipped) and shadows in the reflection.
// The plane: the nearest outdoor flat lake / sea (procedural water) the camera is above; other heights keep the SSR.
// Cards whose pixel shaders are limited to 512 instruction slots get the planar image alone (no SSR on top).
//   hdWaterPlanar      0 = screen-space reflections only (default), 1 = planar sky + terrain + the SSR on top
//   hdWaterPlanarInfo  read only, status:  /run print(GetCVar("hdWaterPlanarInfo"))

struct IDirect3DDevice9;
struct IDirect3DTexture9;
class CAaSphere;

namespace HD {
    // Called at the start of every liquid pass (HD::WaterBeginLiquidPass), even when it returns early: forgets the
    // last frame's reflection so it is never sampled again.
    void WaterPlanarReset();
    // Called by HD::WaterBeginLiquidPass before it copies the world image and depth; width, height = the world target.
    void WaterPlanarRender(IDirect3DDevice9* device, unsigned int width, unsigned int height);
    // True when this water instance (its bounds, as Liquid::CRenderer::Flush passes them) lies on this frame's plane.
    bool WaterPlanarForBounds(const CAaSphere* bounds);
    IDirect3DTexture9* WaterPlanarTexture();
    // Pixel constants c38 (1 / texture size) and c39..c42 (main view -> mirror clip rows), 20 floats.
    void WaterPlanarConstants(float* constants);
    // Called by hdWater's device release hook (window resize, device lost).
    void WaterPlanarRelease();
}

#endif
