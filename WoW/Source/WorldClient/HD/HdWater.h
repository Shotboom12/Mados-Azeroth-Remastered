#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDWATER_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDWATER_H

// Waystone HD: WoW Forever's PBR water on the 3.3.5 water (not part of the original client). D3D9, shader model 3.
//   hdWater       0 = Blizzard's water shaders, untouched (default)
//                 1 = Forever's PBR water: the lighting of Forever's deferred water shader (PBRWater) ported into
//                     the 3.3.5 forward water pass: absorption over the real water depth (Beer-Lambert), refraction,
//                     single scattering with the crest / base colours, reflections with Forever's EnvBRDF
//                     (F0 0.02): the world by a screen-space march, the sky drawn on screen, else the DayNight sky
//                     colours (HD), sun / moon highlight, soft shoreline, depth and shore foam. Colours and strengths per
//                     water type from forever_data\hd_forever_liquid.txt (forever_tools\make_hd_forever_liquid.py),
//                     built-in values when the file is missing.
//                     Needs the world depth (taken like hdFog does it, multisampling 1x). Without it, under water
//                     (camera in the liquid), and for magma and slime, the Blizzard shaders draw.
//                 2 = our shaders with the 3.3.5 look: must look exactly like 0 (proves the swap changes nothing)
//   hdWaterDebug  test views (hdWater 1): 1 = water depth (white = 10 yards), 2 = scattering alone,
//                 3 = reflections alone, 4 = foam, 5 = roughness, 6 = world depth under the water (white = 100
//                 yards), 7 = the world under the water with the fog taken out (HD)
//   hdWaterBody   strength of the water's own colour (scattering), 1 = Forever's (0 to 5)
//   hdWaterReflect screen-space reflections of the world, 1 = on (Forever), 0 = sky only (0 to 1) (HD)
//   hdWaterPlanar HD: 1 = planar reflection of the sky and terrain on flat outdoor water, the screen-space one on top
//                 (HdWaterPlanar.h), 0 = screen-space only (default)
//   hdWaterWaves, hdWaterWaveScale: HD: FFT waves instead of the 3.3.5 normal maps, see HdWaterWaves.h
//   hdWaterInfo   read only, status:  /run print(GetCVar("hdWaterInfo"))

#include <cstdint>

class CAaSphere;

namespace Liquid {
    class CMaterialSettings;
}

namespace HD {
    // Called by CWorldScene::RenderLiquidPass before the liquids are drawn: with hdWater 1, turns the world depth
    // into linear depth and copies the world image (the water reads both). cameraInLiquid: the 3.3.5 shader is kept.
    void WaterBeginLiquidPass(bool cameraInLiquid);

    // Called by CWorldScene::RenderLiquidPass after the liquids are drawn.
    void WaterEndLiquidPass();

    // Called by Liquid::CMaterialProcWater::Render instead of binding its two shaders (inside its RsPush scope,
    // after its constants): binds ours and their constants and returns true, or returns false (hdWater 0, not ready,
    // no depth...) and the caller binds Blizzard's. lightCount: the vertex shader permutation the client picked.
    // HD: bounds = the instance's bounds (Liquid::CRenderer::Flush), for hdWaterPlanar's plane
    bool WaterBindProcWater(Liquid::CMaterialSettings* settings, uint32_t lightCount, const CAaSphere* bounds = nullptr);

    // Called by Liquid::CMaterialProcWater::Render right after its Draw when WaterBindProcWater returned true.
    void WaterAfterDraw();

    // For hdFog (FogBeginWorld): hdWater 1 needs the world depth even with the fog off.
    bool WaterWantsDepth();

    // Called by hdFog's device release hook (window resize, device lost).
    void WaterReleaseDeviceResources();
}

#endif
