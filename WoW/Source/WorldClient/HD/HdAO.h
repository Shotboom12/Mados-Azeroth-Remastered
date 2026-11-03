#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDAO_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDAO_H

// Waystone HD: ambient occlusion (not part of the original client). D3D9 only, off by default.
// Screen-space AO (8 samples per pixel, normals rebuilt from the depth, 2 blur passes that stop at depth edges),
// multiplied into the opaque world (terrain, buildings, models of the first pass, grass) before the water, the
// transparent models, the weather and the spells are drawn. Not a port of WoW Forever's ASSAO (its D3D12 shaders
// cannot run here): it darkens creases, corners and contact areas in the same spirit.
// Reads the world depth that HdFog captures (INTZ, multisampling 1x), as hdWater and hdRays do.
//   hdAO          0 = off (default), 1 = on
//   hdAORadius    reach in yards, 1.5 = normal (0.25 to 6)
//   hdAOStrength  1 = normal (0 to 3)
//   hdAODebug     1 = test view: the AO alone in grey (white = no occlusion)
//   hdAOInfo      read only, status:  /run print(GetCVar("hdAOInfo"))

namespace HD {
    // True when hdAO needs the world depth this frame (HdFog::FogBeginWorld).
    bool AOWantsDepth();
    // Called by CGWorldFrame::OnWorldRender after CWorldScene::RenderDetailDoodads (the opaque world is drawn).
    // Does nothing at all when hdAO is 0.
    void AORenderOpaque();
    // Called by the D3D9 device before it releases its resources (through HD::FogReleaseDeviceResources).
    void AOReleaseDeviceResources();
}

#endif
