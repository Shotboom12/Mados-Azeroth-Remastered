#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDBLOOM_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDBLOOM_H

// Waystone HD: bloom (halo around bright parts) and sun rays (not part of the original client). D3D9 only.
//   hdBloom           0 = off (default); 1 = halo around bright parts of the world
//   hdBloomStrength   halo strength, 1 = normal (0 to 5)
//   hdBloomThreshold  how bright a pixel must be to glow, 0.7 = normal (0 to 1)
//   hdRays            0 = off (default); 1 = sun rays through leaves and buildings (needs the world depth,
//                     captured by HdFog even when hdFog is 0)
//   hdRaysStrength    sun rays strength, 1 = normal (0 to 5)
//   hdBloomDebug      test view: 1 = where the rays start (x4), 2 = rays only, 3 = halo only; red dot = sun
//   hdBloomInfo       read only, status:  /run print(GetCVar("hdBloomInfo"))
//
// Drawn over the finished world (spells, particles and glares included), before chat bubbles and the UI.

namespace HD {
    // Called by CGWorldFrame::OnWorldRender after the glares, before the render states are popped.
    void BloomWorld();
    // True when hdRays needs the world depth this frame.
    bool BloomWantsDepth();
    // Called by the D3D9 device before it releases its resources (through HD::FogReleaseDeviceResources).
    void BloomReleaseDeviceResources();
}

#endif
