#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDFOG_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDFOG_H

// Waystone HD: WoW Forever fog (not part of the original client). D3D9 only.
//   hdFog         0 = off, original image (default); 1 = on
//   hdFogDensity  multiplies Forever's fog density, 1 = Forever's values (0 to 5)
//   hdFogSun      sun colour in the fog, 1 = Forever's values (0 to 5)
//   hdFogAmbient  base (ambient) colour of the fog, 1 = Forever's values (0 to 5)
//   hdFogShadow   1 = the client's sun shadow maps darken the fog (light shafts, like Forever), 0 = off
//   hdFogDebug    test views: 1 = distance in grey, sky in red; 2 = raw depth (blue = nothing drawn);
//                 3 = the fog alone on black; 4 = the sun shadow the fog sees (black = shadow, must match the world)
//   hdFogInfo     read only, status and the Forever layers in use:  /run print(GetCVar("hdFogInfo"))
//
// The layers come from WoW Forever's LightDataGlobalVolumeFog (forever_data\hd_forever_fog.txt, made by
// forever_tools\make_hd_forever_fog.py), picked like the client picks its light colours: the zone light,
// nearby area lights blended in by distance, clear weather blended to storm. Lights Forever does not have
// (TBC, WotLK, Turtle) get no fog. The formula is Forever's own global fog shader (volumefogglobalfog),
// read from the shaders forever_tools\RUN_EXTRACT_SHADERS.bat copies out of the Forever client.
// Needs the world depth: while the world is drawn, the depth goes to an INTZ texture (also done when only
// hdRays is on, see HdBloom.h).

struct IDirect3DTexture9;
struct IDirect3DSurface9; // HD: hdWater (FogCopyWorldColor)

namespace HD {
    // HD: what the post passes after the fog (HdBloom) need from this frame.
    struct FogPostFrame {
        IDirect3DTexture9* depth; // the world depth (INTZ), only readable while it is not bound
        float sunU, sunV;         // the sun on screen (0..1, can be outside)
        float sunVisible;         // 0 = no sun (night, behind the camera, far off screen) .. 1
        float vpMin, vpMax;       // world viewport depth range (0..0.94)
        float projC2, projD2;     // projection terms to turn depth into distance (zv = d2 / (z - c2))
        float farClip;            // the sky is at (or past) the far clip
        char diag[96];            // sun and camera directions, shown in hdBloomInfo
    };
    // False when the world depth was not captured this frame (hdFog and hdRays both off).
    bool FogGetPostFrame(FogPostFrame* out);
    // Called by CGWorldFrame::OnWorldRender right after FFX::Start (before the world is drawn).
    void FogBeginWorld();
    // Called by CGWorldFrame::OnWorldRender after the world, models, water and weather are drawn.
    void FogEndWorld();
    // Called by CGWorldFrame::OnWorldRender after FFX::Finish: hands the depth buffer back.
    void FogFinishWorld();
    // Called by the D3D9 device before it releases its resources (window resize, device lost).
    void FogReleaseDeviceResources();

    // HD: hdWater (HdWater.cpp) reads the world depth while the world is still being drawn (before the liquids).
    struct FogWorldDepth {
        IDirect3DTexture9* texture; // the world depth (INTZ); bound as the depth buffer: unbind it before reading it
        unsigned int width, height;
        float projC2, projD2;       // view depth zv = d2 / (z - c2), z = the projection's 0..1
        float vpMin, vpMax;         // world viewport depth range
    };
    // HD: false when the world depth is not being captured right now (between FogBeginWorld and FogEndWorld).
    bool FogGetWorldDepth(FogWorldDepth* out);
    // HD: copies the colour target 'from' (width x height) into hdFog's scene texture and returns it (owned by hdFog,
    // valid until the device releases its resources; FogEndWorld overwrites it with the finished world). Null on failure.
    IDirect3DTexture9* FogCopyWorldColor(IDirect3DSurface9* from, unsigned int width, unsigned int height);
    // HD: after a raw D3D draw: makes the client send all its device state again.
    void FogInvalidateClientState();
}

#endif
