#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDWATERRIPPLES_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDWATERRIPPLES_H

// Waystone HD: ripples on hdWater 1's water around units that walk, swim, turn or jump into it (not part of the
// original client). The 3.3.5 client already decides when and where a ripple is born (CGUnit_C::CreateRipple ->
// WaterRipple.cpp, the same rules for every unit); 3.3.5 only lays a flat splash texture on the water there.
// Here each live ripple also becomes a ring of small waves in the water's surface, as WoW Forever does (its
// waterripples shader draws ripples into a texture the water reads): once per frame, one ps_3_0 pass draws the
// rings into a 512 x 512 top-down texture of 32 x 32 yards around the camera, and the water pixel shader (FFT
// variant, hdWaterWaves 1) adds their slopes to the waves, so reflections and refraction bend around them.
//   hdWaterRipples         1 = on (default), 0 = off
//   hdWaterRippleStrength  1 = normal (0 to 4)
// The 3.3.5 console command "waterRipples 0" stops the ripples being born at all (both kinds).

struct IDirect3DDevice9;
struct IDirect3DSurface9;
struct IDirect3DTexture9;

namespace HD {
    // Once per liquid pass (HD::WaterBeginLiquidPass, after the depth pass): draws this frame's ripple texture, then
    // puts worldColor and the depth buffer that is bound back, and makes the client send its state again.
    void WaterRipplesRender(IDirect3DDevice9* device, IDirect3DSurface9* worldColor);
    // The ripple texture (null when there is none this frame).
    IDirect3DTexture9* WaterRipplesTexture();
    // c36, c37 of the water pixel shader: out[0..3] = world xy -> texture uv (scale, scale, offset x, offset y),
    // out[4] = strength (0 when there is no ripple texture this frame).
    void WaterRipplesConstants(float* out);
    // Called with HD::WaterReleaseDeviceResources (device lost, resize).
    void WaterRipplesRelease();
}

#endif
