#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDCONTACTSHADOW_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDCONTACTSHADOW_H

// Waystone HD: screen-space contact shadows (not part of the original client). D3D9 only, off by default.
// The small shadows the sun shadow maps are too coarse for (the foot of a crate, a character's feet, a rail on a
// wall, the gap under a cart): from every pixel a short ray is marched toward the world light in the world depth,
// as Days Gone did (Bend Studio, "screen space shadows"). Where it passes behind something drawn on screen, the
// pixel loses its share of the world light (what the client's direct light adds over its ambient), never more.
// HD: no double shadow: the client's own sun shadow maps (CShadowCache, the cascades hdFog reads too) are looked up
// first; where they already shadow, nothing is added. The light is the one the shadow maps use (CShadowCache::
// s_sunDir, the client's world light, hdShadowSun included) and its colours are DayNight's (m_light1 at the hdTime
// hour): at night the client's light is the moon's, and the shadows follow its strength.
// HD (v3, max's in-game tests, 2026-10-25): a contact shadow has exactly the darkness of the shaders' own shadow-map
// shadow (70% kept by the 3.3.5 shaders, the ambient alone on WoW Forever ground, hdTerrainLight 1), so both are one
// shadow with no step where they meet; characters (players, creatures, NPCs) cast no contact shadows.
// HD (v4, max's in-game test of v3): characters receive the world's contact shadows like the ground they stand on;
// the shadow goes right into an object's corner and never onto its face; it softens away from the contact instead
// of ending like a stamp.
// Drawn on the opaque world (terrain, buildings, models of the first pass, grass) before hdGI, so the bounce sees
// the shadows and nothing is darkened twice. Only what is on screen casts (the limit of every screen-space method);
// it fades out from 80 to 120 yards. Reads the world depth that HdFog captures (INTZ, multisampling 1x).
//   hdContactShadow          0 = off (default), 1 = on
//   hdContactShadowLength    ray length in yards, 1.5 = normal (0.25 to 6)
//   hdContactShadowStrength  1 = as dark as the shaders' own shadows (normal), 0 = none (0 to 1)
//   hdContactShadowUnits     0 = characters only receive (default), 1 = characters cast contact shadows too
//   hdContactShadowDebug     1 = test view: the shadow alone (white = untouched), 2 = the same without the
//                            shadow-map check (red where the shadow maps already shadow)
//   hdContactShadowInfo      read only, status:  /run print(GetCVar("hdContactShadowInfo"))

namespace HD {
    // HD: a character for the contact shadows: feet position relative to the camera (world axes: x north, y west,
    // z up, yards) and its height
    struct ContactShadowUnit {
        float x, y, z;
        float height;
    };
    // HD: the visible characters nearest to the camera, at most max of them (HdContactShadowUnits.cpp). Returns how many.
    int ContactShadowGatherUnits(ContactShadowUnit* out, int max);
    // True when hdContactShadow needs the world depth this frame (HdFog::FogBeginWorld).
    bool ContactShadowWantsDepth();
    // Called by CGWorldFrame::OnWorldRender after CWorldScene::RenderDetailDoodads, before HD::GIRenderOpaque.
    // Does nothing at all when hdContactShadow is 0.
    void ContactShadowRenderOpaque();
    // Called by the D3D9 device before it releases its resources (through HD::FogReleaseDeviceResources).
    void ContactShadowReleaseDeviceResources();
}

#endif
