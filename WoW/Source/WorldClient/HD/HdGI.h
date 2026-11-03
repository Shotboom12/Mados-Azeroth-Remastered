#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDGI_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDGI_H

// Waystone HD: screen-space global illumination, one colour bounce (not part of the original client). D3D9 only,
// off by default. The light that the opaque world already shows on screen is bounced once onto its neighbours: a red
// wall tints the ground next to it, a lit sandy floor warms the underside of a bridge. 8 samples per pixel taken in
// 3D around the surface (in the half sphere over its normal, so the reach does not shrink when the ground is seen at
// a grazing angle), normals rebuilt from the depth, 2 blur passes that stop at depth edges, then added to the opaque
// world (terrain, buildings, models of the first pass, grass) before the water and the transparent models.
// Only what is on screen can bounce (the limit of every screen-space method); it fades out from 150 to 250 yards.
// HD: it follows the hour (hdTime, DayNight): what bounces is the light of the surfaces around beyond the client's
// ambient light of the moment (the ambient is already in the image), added in linear times an estimate of the
// receiving surface's own colour. At night only what is lit more than the ambient bounces (torch- and lamp-lit
// surfaces, hdLights' light on the ground); the flames themselves are drawn after this pass and do not bounce.
// Reads the world depth that HdFog captures (INTZ, multisampling 1x), as hdWater and hdRays do.
//   hdGI          0 = off (default), 1 = on
//   hdGIRadius    reach in yards, 4 = normal (0.5 to 12)
//   hdGIStrength  1 = normal (0 to 4)
//   hdGIDebug     1 = test view: the bounced light alone (x4), 2 = test view: the surface colour estimate
//   hdGIInfo      read only, status:  /run print(GetCVar("hdGIInfo"))

namespace HD {
    // True when hdGI needs the world depth this frame (HdFog::FogBeginWorld).
    bool GIWantsDepth();
    // Called by CGWorldFrame::OnWorldRender after CWorldScene::RenderDetailDoodads (the opaque world is drawn).
    // Does nothing at all when hdGI is 0.
    void GIRenderOpaque();
    // Called by the D3D9 device before it releases its resources (through HD::FogReleaseDeviceResources).
    void GIReleaseDeviceResources();
}

#endif
