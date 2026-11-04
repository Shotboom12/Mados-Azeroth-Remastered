#include "WoW/Source/WorldClient/HD/HdTime.h"
#include "WoW/Source/WorldClient/HD/HdFog.h"
#include <cmath>
#include <cstdio>
#include <cstring>
#include <windows.h>
#include <d3d9.h>
#include <d3dcompiler.h>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/CGxDeviceD3d/CGxDeviceD3d.h"
#include "Engine/Source/Gx/Types.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "WoW/Source/WorldClient/HD/HdBloom.h"
#include "WoW/Source/WorldClient/HD/HdGrade.h"
#include "WoW/Source/WorldClient/HD/HdForever.h"
#include "WoW/Source/WorldClient/HD/HdWater.h" // HD: hdWater needs the world depth too
#include "WoW/Source/WorldClient/HD/HdGI.h" // HD: hdGI needs the world depth too
#include "WoW/Source/WorldClient/HD/HdContactShadow.h" // HD: hdContactShadow needs the world depth too
#include "WoW/Source/DB/Rec/LightRec.h"
#include "Engine/Source/Gx/CGxTex.h"
#include "Engine/Source/Services/Texture.h"
#include "Engine/Source/ShaderEffect/ShadowCache.h"

// Defined in CGxDeviceD3d.cpp: called before the D3D9 device releases its resources.
extern void (*g_hdBeforeReleaseD3d)();
// Defined in CGxDeviceD3d.cpp: lets us choose the depth buffer when the client switches render targets.
extern IDirect3DSurface9* (*g_hdDepthOverride)(IDirect3DSurface9* color, IDirect3DSurface9* depth);
// Defined in CGxDeviceD3d.cpp: true while DeviceRestoreDepthSurface calls g_hdDepthOverride.
extern bool g_hdDepthRestoring;
// Defined in CGxDeviceD3d.cpp: called before every scene clear.
extern void (*g_hdOnClear)(DWORD flags);

namespace {
    // Pixel shader registers c0..c33 (see kShader).
    const UINT kConstRegs = 34;
    const D3DFORMAT kIntz = static_cast<D3DFORMAT>(MAKEFOURCC('I', 'N', 'T', 'Z'));
    // HD: Forever's fog range (yards): the distance ramp runs over it and the sky is fogged up to it
    const float kFogRange = 5000.0f;
    // HD: Forever draws its fog in HDR (the sun scatter carries the sun's strength) and then exposes the frame;
    // our image is not HDR, so both colour terms get a fixed scale, measured on the Forever capture at Amani Pass
    // 5:48 (setting 7624): the haze there has exactly the sun colour's ratios (G/R 0.55-0.60 at 25-45 degrees
    // from the sun, no trace of the teal base colour), which needs the sun term about 26x the base colour,
    // and the haze 25 degrees from the sun is 0.71 (linear red). One capture: check against a second time of day.
    // 2026-10-19 second pass: with these first values the frame was far brighter and hazier than Forever's
    // (brightness percentiles 50/75 = 139/228 against Forever's 78/150); max's slider test (density 0.2, sun 0.45,
    // base 0.6) gave 80/125. The defaults now sit between the two, at about Forever's distribution.
    const float kFogBaseScale = 0.034f;
    const float kFogSunScale = 0.88f;
    // Forever's density column per yard (coa-vfog reads it as x 0.01; that fogged everything past 40 yards here)
    const float kFogDensityScale = 0.0035f;

    // HD: WoW Forever's global fog, as its own shader computes it (volumefogglobalfog + volumefogcomposite,
    // extracted from the Forever client). Per layer (LightDataGlobalVolumeFog, forever_data\hd_forever_fog.txt):
    //   density d = density * coverage past the start distance * (1 + strength * (share of the fog range)^exponent)
    //               * top fade exp(-topRate * (z - topHeight)) * bottom fade exp(bottomRate * (z - bottomHeight))
    //   colour    = base colour + sun colour * intensity * phase(toward the sun, g)
    // The layers add up, the ray is integrated like Forever's froxel volume (L += T * colour * (1 - e^-d), T *= e^-d),
    // and the scene becomes scene * T + L, in linear light.
    // Forever marches a froxel volume with a sun shadow map and a phase table; here the march is per pixel
    // (32 steps, denser near the camera like Forever's slices) and the phase is Henyey-Greenstein scaled to 1
    // toward the sun. HD: layers with the sun shadow flag use the client's own sun shadow maps (CShadowCache,
    // 3 cascades of 40, 160 and 640 yards) at every step, like Forever's shader: in shadow the layer takes its
    // shadow colour and shadow density and loses the sun colour, which draws the light shafts.
    const char* kShader = R"HLSL(
sampler2D depthTex : register(s0);
sampler2D sceneTex : register(s1);
sampler2D shadow0 : register(s2); // the client's sun shadow cascades (40, 160, 640 yards)
sampler2D shadow1 : register(s3);
sampler2D shadow2 : register(s4);
float4 c_screen : register(c0);  // 1/width, 1/height, proj c2, proj d2
float4 c_proj   : register(c1);  // proj a0, proj b1, proj c0, proj c1
float4 c_rot0   : register(c2);  // view -> world rotation, row 0
float4 c_rot1   : register(c3);  // row 1
float4 c_rot2   : register(c4);  // row 2
float4 c_cam    : register(c5);  // camera position (z = height), far clip
float4 c_sun    : register(c6);  // direction to the sun
float4 c_vp     : register(c7);  // viewport depth range min z, max z, debug mode, unused
float4 c_range  : register(c8);  // fog range (yards), 1 / fog range
float4 c_layer[15] : register(c9); // per layer, 5 registers:
                                   // base colour (linear) + density per yard,
                                   // sun colour (linear, x intensity) + g,
                                   // start, ramp strength, ramp exponent, 1 = sun shadow,
                                   // top rate per yard, top height, bottom rate per yard, bottom height,
                                   // base colour in shadow + density factor in shadow
float4 c_smat[9]   : register(c24); // view space -> shadow map, 3 rows per cascade (CShadowCache::s_shadowMatrices 3..11)
float4 c_shadow    : register(c33); // 1 = shadow maps bound, 1 = hardware depth compare (D24), sun up 0..1

// one cascade: x, y = -1..1 across the map, z = depth to compare (lit when not deeper than the map)
float ShadowSample(sampler2D map, float3 c) {
    float2 uv = c.xy * 0.5 + 0.5;
    if (c_shadow.y > 0.5) return tex2Dlod(map, float4(uv, c.z, 0)).r;
    return c.z <= tex2Dlod(map, float4(uv, 0, 0)).r ? 1.0 : 0.0;
}

// sun light reaching this view-space point: 1 = lit, 0 = in shadow (the nearest cascade that holds it)
float SunVisible(float3 p) {
    if (c_shadow.x < 0.5) return 1.0;
    float4 q = float4(p, 1.0);
    float3 c = float3(dot(q, c_smat[0]), dot(q, c_smat[1]), dot(q, c_smat[2]));
    if (max(abs(c.x), abs(c.y)) < 0.98) return ShadowSample(shadow0, c);
    c = float3(dot(q, c_smat[3]), dot(q, c_smat[4]), dot(q, c_smat[5]));
    if (max(abs(c.x), abs(c.y)) < 0.98) return ShadowSample(shadow1, c);
    c = float3(dot(q, c_smat[6]), dot(q, c_smat[7]), dot(q, c_smat[8]));
    if (max(abs(c.x), abs(c.y)) < 0.98) return ShadowSample(shadow2, c);
    return 1.0;
}

// Henyey-Greenstein, 1 toward the sun
float Phase(float c, float g) {
    g = clamp(g, -0.95, 0.95);
    float k = (1.0 - g) / sqrt(max(1.0 + g * g - 2.0 * g * c, 1e-4));
    return k * k * k;
}

float4 main(float2 vpos : VPOS) : COLOR0 {
    float2 uv = (vpos + 0.5) * c_screen.xy;
    float raw = tex2D(depthTex, uv).r;
    // the world viewport only uses depth c_vp.x..c_vp.y (0..0.94): back to the projection's 0..1
    float z = saturate((raw - c_vp.x) / max(c_vp.y - c_vp.x, 1e-4));
    float2 ndc = float2(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0);
    float3 v = float3((ndc.x - c_proj.z) / c_proj.x, (ndc.y - c_proj.w) / c_proj.y, 1.0);
    // view depth from the depth buffer: z = c2 + d2 / zv
    float denom = z - c_screen.z;
    float zv = abs(c_screen.w / (abs(denom) < 1e-7 ? 1e-7 : denom));
    bool sky = raw >= 0.99999 || zv >= c_cam.w;
    zv = min(zv, c_cam.w);
    float3 w = v.x * c_rot0.xyz + v.y * c_rot1.xyz + v.z * c_rot2.xyz;
    float dist = zv * length(w);
    float3 dir = normalize(w);

    if (c_vp.z > 1.5 && c_vp.z < 2.5) {
        // hdFogDebug 2: raw depth buffer value (white = near), pure blue where nothing was drawn
        return raw >= 0.999999 ? float4(0, 0, 1, 1) : float4(saturate((1.0 - raw) * 200.0).xxx, 1);
    }
    float3 vdir = v / length(v); // view-space direction (same length as the world one)
    if (c_vp.z > 3.5) {
        // hdFogDebug 4: the sun shadow the fog sees on each surface (black = shadow), must match the world's shadows
        return sky ? float4(0, 0, 1, 1) : float4(SunVisible(v * zv).xxx, 1);
    }
    if (c_vp.z > 0.5 && c_vp.z < 1.5) {
        // hdFogDebug 1: distance in grey (black = near, white = far clip), sky in red
        return sky ? float4(1, 0, 0, 1) : float4(saturate(dist / c_cam.w).xxx, 1);
    }

    // each layer's colour only depends on the direction
    float cosSun = dot(dir, c_sun.xyz);
    float3 sun0 = c_layer[1].rgb * Phase(cosSun, c_layer[1].w);
    float3 sun1 = c_layer[6].rgb * Phase(cosSun, c_layer[6].w);
    float3 sun2 = c_layer[11].rgb * Phase(cosSun, c_layer[11].w);
    float3 useShadow = float3(c_layer[2].w, c_layer[7].w, c_layer[12].w);

    // the sky is fogged up to the fog range, like Forever's volume behind the far clip
    float D = sky ? c_range.x : min(dist, c_range.x);
    // where in each step the shadow is tested: dithered per pixel (interleaved gradient noise), so 32 steps
    // give fine grain instead of bands across the light shafts
    float jitter = frac(52.9829189 * frac(dot(vpos, float2(0.06711056, 0.00583715))));
    float T = 1.0;
    float3 L = 0.0;
    float t0 = 0.0;
    [loop] for (int s = 1; s <= 32; s++) {
        float u = s / 32.0;
        float t1 = D * u * u;
        float seg = max(t1 - t0, 1e-3);
        float tm = 0.5 * (t0 + t1);
        float h = c_cam.z + dir.z * tm;
        float3 d;
        float3 start = float3(c_layer[2].x, c_layer[7].x, c_layer[12].x);
        // part of this step past each layer's start distance
        float3 cov = saturate((t1 - start) / seg);
        float3 x = saturate((tm - start) * c_range.y);
        float3 strength = float3(c_layer[2].y, c_layer[7].y, c_layer[12].y);
        float3 expo = float3(c_layer[2].z, c_layer[7].z, c_layer[12].z);
        float3 ramp = 1.0 + strength * pow(max(x, 1e-6), expo);
        float3 topRate = float3(c_layer[3].x, c_layer[8].x, c_layer[13].x);
        float3 topH = float3(c_layer[3].y, c_layer[8].y, c_layer[13].y);
        float3 botRate = float3(c_layer[3].z, c_layer[8].z, c_layer[13].z);
        float3 botH = float3(c_layer[3].w, c_layer[8].w, c_layer[13].w);
        float3 fade = saturate(exp(-topRate * (h - topH))) * saturate(exp(botRate * (h - botH)));
        float3 density = float3(c_layer[0].w, c_layer[5].w, c_layer[10].w);
        // sun at this step: the shadow maps and the sun being up; layers without the shadow flag stay lit
        float lit = SunVisible(vdir * (t0 + (t1 - t0) * jitter)) * c_shadow.z;
        float3 S = lerp(1.0, lit, useShadow);
        float3 shadowMul = float3(c_layer[4].w, c_layer[9].w, c_layer[14].w);
        d = density * cov * ramp * fade * seg * lerp(shadowMul, 1.0, S);
        float3 col0 = lerp(c_layer[4].rgb, c_layer[0].rgb, S.x) + sun0 * S.x;
        float3 col1 = lerp(c_layer[9].rgb, c_layer[5].rgb, S.y) + sun1 * S.y;
        float3 col2 = lerp(c_layer[14].rgb, c_layer[10].rgb, S.z) + sun2 * S.z;
        float sigma = d.x + d.y + d.z;
        float3 rgb = col0 * d.x + col1 * d.y + col2 * d.z;
        float Ts = exp(-sigma);
        L += T * rgb * ((1.0 - Ts) / max(sigma, 1e-6));
        T *= Ts;
        t0 = t1;
    }

    float3 scene = c_vp.z > 2.5 ? 0.0 : pow(tex2D(sceneTex, uv).rgb, 2.2); // hdFogDebug 3: the fog alone
    // HD: Forever draws in HDR and tone maps, so the haze around the sun rolls off in its own colour (orange, as
    // in the Forever capture: 247,209,151) instead of clipping to white. Same here: above 0.7 (linear) the
    // brightest channel is compressed smoothly toward 1 and the others scaled with it, which keeps the hue.
    float3 col = max(scene * T + L, 0.0);
    float peak = max(col.r, max(col.g, col.b));
    if (peak > 0.7) col *= (0.7 + 0.3 * (1.0 - exp(-(peak - 0.7) / 0.3))) / peak;
    return float4(pow(saturate(col), 1.0 / 2.2), 1);
}
)HLSL";

    typedef HRESULT(WINAPI* D3DCompileFn)(LPCVOID, SIZE_T, LPCSTR, const D3D_SHADER_MACRO*, ID3DInclude*, LPCSTR, LPCSTR, UINT, UINT, ID3DBlob**, ID3DBlob**);

    CVar* s_enabled = nullptr;
    CVar* s_density = nullptr;
    CVar* s_sun = nullptr;
    CVar* s_ambient = nullptr; // HD: hdFogAmbient
    CVar* s_shadow = nullptr;  // HD: hdFogShadow
    CVar* s_debug = nullptr;
    CVar* s_info = nullptr;

    IDirect3DPixelShader9* s_shader = nullptr;
    bool s_shaderFailed = false;
    IDirect3DTexture9* s_depthTex = nullptr;
    IDirect3DSurface9* s_depthSurf = nullptr;
    IDirect3DSurface9* s_realDepth = nullptr; // the client's own depth surface (we hold a reference)
    IDirect3DTexture9* s_sceneTex = nullptr; // HD: copy of the world image (the fog is mixed in linear light)
    IDirect3DSurface9* s_sceneSurf = nullptr;
    UINT s_width = 0;
    UINT s_height = 0;
    bool s_active = false;
    bool s_swappedDepth = false;        // client's m_defDepthSurface points to our texture
    bool s_swappedDepthStencil = false; // client's m_defDepthStencilSurface points to our texture
    IDirect3DSurface9* s_worldColor = nullptr; // the world's colour target (pointer compare only, no reference)
    char s_lastInfo[260] = "";
    HD::FogPostFrame s_post = {};  // HD: for HdBloom (sun rays)
    bool s_postValid = false;

    // HD: depth diagnostic (shown in hdFogInfo): what the client binds while the world is drawn.
    // Colour: W = world target, B = back buffer, T = other texture. Depth: I = our INTZ,
    // R = the depth we saw at the start, D = back buffer depth, S = shared off-screen depth, O = other, 0 = none.
    int s_diagCalls = 0;
    int s_diagSwaps = 0;
    char s_diagTrace[150] = "";
    int s_diagDepthClears = 0; // clears that wiped our INTZ while the world was drawn
    char s_diagBegin[4] = "";

    char ColorTag(IDirect3DSurface9* p) {
        CGxDeviceD3d* gx = static_cast<CGxDeviceD3d*>(g_theGxDevicePtr);
        if (!p) return '0';
        if (p == s_worldColor) return 'W';
        if (p == gx->m_defColorSurface) return 'B';
        return 'T';
    }

    char DepthTag(IDirect3DSurface9* p) {
        CGxDeviceD3d* gx = static_cast<CGxDeviceD3d*>(g_theGxDevicePtr);
        if (!p) return '0';
        if (s_depthSurf && p == s_depthSurf) return 'I';
        if (p == s_realDepth) return 'R';
        if (p == gx->m_defDepthSurface) return 'D';
        if (p == gx->m_defDepthStencilSurface) return 'S';
        return 'O';
    }

    // While the world is drawn: whenever the client binds the world's colour target with the world's
    // depth buffer, use our INTZ copy instead. Other targets (shadow textures etc.) keep their own depth.
    IDirect3DSurface9* DepthOverride(IDirect3DSurface9* color, IDirect3DSurface9* depth) {
        // HD: outside the world our texture never stays bound (a late restore could hand it back)
        if (!s_active && s_depthSurf && depth == s_depthSurf && s_realDepth) return s_realDepth;
        // HD: the shadow passes leave their own depth texture bound when they hand the world target back
        // (CShadowQuery only restores the colour target), so the world is then drawn with that depth.
        // Whatever depth comes with the world's colour target, the world gets our INTZ copy.
        bool swap = s_active && s_depthSurf && color == s_worldColor && depth != s_depthSurf;
        if (s_active) {
            // HD: depth diagnostic, one "colour depth" pair per bind (lower case = swapped to INTZ)
            s_diagCalls++;
            if (swap) s_diagSwaps++;
            size_t len = strlen(s_diagTrace);
            if (len + 4 < sizeof(s_diagTrace)) {
                // restores (the client putting a saved depth back) are written with a leading '+'
                if (g_hdDepthRestoring) s_diagTrace[len++] = '+';
                s_diagTrace[len] = ColorTag(color);
                s_diagTrace[len + 1] = swap ? 'i' : DepthTag(depth);
                s_diagTrace[len + 2] = ' ';
                s_diagTrace[len + 3] = 0;
            }
        }
        if (swap) return s_depthSurf;
        return depth;
    }

    // HD: depth diagnostic, a clear is written as "c<depth>" ("C" when it wipes the depth buffer)
    void OnClear(DWORD flags) {
        if (!s_active) return;
        IDirect3DDevice9* device = static_cast<CGxDeviceD3d*>(g_theGxDevicePtr)->m_d3dDevice;
        IDirect3DSurface9* cur = nullptr;
        char tag = '0';
        if (device && SUCCEEDED(device->GetDepthStencilSurface(&cur)) && cur) { tag = DepthTag(cur); cur->Release(); }
        bool z = (flags & D3DCLEAR_ZBUFFER) != 0;
        if (z && tag == 'I') s_diagDepthClears++;
        size_t len = strlen(s_diagTrace);
        if (len + 3 < sizeof(s_diagTrace)) {
            s_diagTrace[len] = z ? 'C' : 'c';
            s_diagTrace[len + 1] = tag;
            s_diagTrace[len + 2] = ' ';
            s_diagTrace[len + 3] = 0;
        }
    }

    void RegisterCVars() {
        static bool registered = false;
        if (registered) return;
        registered = true;
        s_enabled = CVar::Register("hdFog", "HD: 1 = Forever style fog, 0 = original", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_density = CVar::Register("hdFogDensity", "HD: fog amount, 1 = Forever", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_sun = CVar::Register("hdFogSun", "HD: sun colour in the fog, 1 = Forever", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_ambient = CVar::Register("hdFogAmbient", "HD: base colour of the fog, 1 = Forever", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_shadow = CVar::Register("hdFogShadow", "HD: 1 = sun shadows in the fog (light shafts, like Forever), 0 = off", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        // HD: hdFogDebug 1 = distance in grey, 2 = raw depth, 3 = the fog alone on black
        s_debug = CVar::Register("hdFogDebug", "HD: 1 = distance, 2 = depth, 3 = fog alone, 4 = sun shadow (test views)", 0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        g_hdBeforeReleaseD3d = &HD::FogReleaseDeviceResources;
        g_hdDepthOverride = &DepthOverride;
        g_hdOnClear = &OnClear;
        s_info = CVar::Register("hdFogInfo", "HD: hdFog status (read only)", 0, "off", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    }

    void SetInfo(const char* text) {
        if (!s_info || !strcmp(s_lastInfo, text)) return;
        snprintf(s_lastInfo, sizeof(s_lastInfo), "%s", text);
        s_info->Set(text, true, false, false, false);
    }

    float Clamp(float v, float lo, float hi) {
        return v < lo ? lo : (v > hi ? hi : v);
    }

    float CVarValue(CVar* cvar, float fallback) {
        return cvar ? Clamp(cvar->m_floatValue, 0.0f, 5.0f) : fallback;
    }

    IDirect3DDevice9* Device() {
        if (!g_theGxDevicePtr || g_theGxDevicePtr->DeviceApi() != GxApi_D3d9) return nullptr;
        return static_cast<CGxDeviceD3d*>(g_theGxDevicePtr)->m_d3dDevice;
    }

    // Give the client its own depth surface pointers back.
    void RestoreClientPointers() {
        CGxDeviceD3d* gx = static_cast<CGxDeviceD3d*>(g_theGxDevicePtr);
        if (s_swappedDepth) {
            if (gx->m_defDepthSurface == s_depthSurf) { gx->m_defDepthSurface = s_realDepth; s_depthSurf->Release(); }
            s_swappedDepth = false;
        }
        if (s_swappedDepthStencil) {
            if (gx->m_defDepthStencilSurface == s_depthSurf) { gx->m_defDepthStencilSurface = s_realDepth; s_depthSurf->Release(); }
            s_swappedDepthStencil = false;
        }
    }

    void ReleaseTargets() {
        IDirect3DDevice9* device = Device();
        if (device && s_realDepth && s_depthSurf) RestoreClientPointers();
        if (device && s_realDepth && s_depthSurf) {
            IDirect3DSurface9* current = nullptr;
            if (SUCCEEDED(device->GetDepthStencilSurface(&current)) && current) {
                if (current == s_depthSurf) device->SetDepthStencilSurface(s_realDepth);
                current->Release();
            }
        }
        if (s_depthSurf) { s_depthSurf->Release(); s_depthSurf = nullptr; }
        if (s_depthTex) { s_depthTex->Release(); s_depthTex = nullptr; }
        if (s_sceneSurf) { s_sceneSurf->Release(); s_sceneSurf = nullptr; }
        if (s_sceneTex) { s_sceneTex->Release(); s_sceneTex = nullptr; }
        if (s_realDepth) { s_realDepth->Release(); s_realDepth = nullptr; }
        s_width = 0;
        s_height = 0;
        s_active = false;
    }

    bool EnsureShader(IDirect3DDevice9* device) {
        if (s_shader) return true;
        if (s_shaderFailed) return false;
        s_shaderFailed = true;

        HMODULE module = LoadLibraryA("d3dcompiler_47.dll");
        D3DCompileFn compile = module ? reinterpret_cast<D3DCompileFn>(GetProcAddress(module, "D3DCompile")) : nullptr;
        if (!compile) {
            SetInfo("ERROR: d3dcompiler_47.dll not found");
            return false;
        }

        ID3DBlob* code = nullptr;
        ID3DBlob* errors = nullptr;
        HRESULT hr = compile(kShader, strlen(kShader), "HdFog", nullptr, nullptr, "main", "ps_3_0", D3DCOMPILE_OPTIMIZATION_LEVEL3, 0, &code, &errors);
        if (FAILED(hr) || !code) {
            char text[160];
            snprintf(text, sizeof(text), "ERROR: shader: %s", errors ? static_cast<const char*>(errors->GetBufferPointer()) : "unknown");
            SetInfo(text);
            if (errors) errors->Release();
            if (code) code->Release();
            return false;
        }
        if (errors) errors->Release();

        hr = device->CreatePixelShader(static_cast<const DWORD*>(code->GetBufferPointer()), &s_shader);
        code->Release();
        if (FAILED(hr)) {
            SetInfo("ERROR: CreatePixelShader failed");
            s_shader = nullptr;
            return false;
        }
        s_shaderFailed = false;
        return true;
    }

    // Row-vector 4x4 inverse (D3D layout). Returns false if singular.
    bool Invert(const float* m, float* out) {
        float inv[16];
        inv[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] + m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
        inv[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] - m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
        inv[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] + m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
        inv[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] - m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
        inv[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] - m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
        inv[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] + m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
        inv[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] - m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
        inv[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] + m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
        inv[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] + m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
        inv[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] - m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
        inv[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] + m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
        inv[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] - m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
        inv[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] - m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
        inv[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] + m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
        inv[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] - m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
        inv[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] + m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];
        float det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];
        if (fabsf(det) < 1e-12f) return false;
        det = 1.0f / det;
        for (int i = 0; i < 16; i++) out[i] = inv[i] * det;
        return true;
    }

    // HD: blend two Forever fogs, t = 0 keeps a, 1 gives b
    void LerpFog(HD::ForeverFog& a, const HD::ForeverFog& b, float t) {
        for (int i = 0; i < 3; i++) HD::LerpFogLayer(a.layers[i], b.layers[i], t);
        if (b.count > a.count) a.count = b.count;
    }

    // HD: Forever's fog for one light, clear weather blended to storm like the client's colours.
    bool LightFog(const LightRec* light, float time, float storm, HD::ForeverFog& out) {
        if (!HD::ForeverFogAt(light, 0, time, &out)) return false;
        if (storm > 0.0f) {
            HD::ForeverFog stormFog;
            if (HD::ForeverFogAt(light, 2, time, &stormFog)) LerpFog(out, stormFog, storm);
        }
        return true;
    }

    // HD: the fog where the camera is: the zone light, then the nearby area lights blended in by
    // distance (same falloff as DayNight::BlendAreaLight). Lights Forever does not have fade the fog out.
    // Returns how much Forever fog there is here (0 = none).
    float CurrentForeverFog(HD::ForeverFog& fog) {
        const DayNight::DNInfo& info = DayNight::g_dnInfo;
        const TSGrowableArray<const LightRec*>& lights = DayNight::g_areaLights;
        if (!lights.m_count) return 0.0f;
        float time = HD::DayNightBandTime(info.m_dayProgression * 2880.0f);
        float storm = info.m_stormBlend;

        bool have = LightFog(lights.m_data[0], time, storm, fog);
        float strength = have ? 1.0f : 0.0f;

        struct Near { const LightRec* light; float distSq; float weight; };
        Near nearLights[32];
        int32_t count = 0;
        for (uint32_t i = 1; i < lights.m_count && count < 32; i++) {
            const LightRec* light = lights.m_data[i];
            float dx = info.m_lightRefPos.x - light->m_gameCoords[0];
            float dy = info.m_lightRefPos.y - light->m_gameCoords[1];
            float dz = info.m_lightRefPos.z - light->m_gameCoords[2];
            float distSq = dx * dx + dy * dy + dz * dz;
            if (distSq >= light->m_gameFalloffEnd * light->m_gameFalloffEnd) continue;
            float distance = sqrtf(distSq);
            float weight = 1.0f;
            if (distance > light->m_gameFalloffStart) {
                float span = light->m_gameFalloffEnd - light->m_gameFalloffStart;
                weight = span > 0.0f ? Clamp(1.0f - (distance - light->m_gameFalloffStart) / span, 0.0f, 1.0f) : 0.0f;
            }
            if (weight <= 0.0f) continue;
            nearLights[count].light = light;
            nearLights[count].distSq = distSq;
            nearLights[count].weight = weight;
            count++;
        }
        // farthest first, so the nearest light wins
        for (int32_t i = 1; i < count; i++) {
            Near n = nearLights[i];
            int32_t j = i - 1;
            while (j >= 0 && nearLights[j].distSq < n.distSq) { nearLights[j + 1] = nearLights[j]; j--; }
            nearLights[j + 1] = n;
        }
        for (int32_t i = 0; i < count; i++) {
            HD::ForeverFog other;
            float w = nearLights[i].weight;
            if (LightFog(nearLights[i].light, time, storm, other)) {
                if (!have) { fog = other; have = true; strength = w; }
                else { LerpFog(fog, other, w); strength += (1.0f - strength) * w; }
            } else {
                strength *= 1.0f - w;
            }
        }
        return have ? strength : 0.0f;
    }

    // HD: the client's sun shadow cascade i (CShadowCache, shadow quality high or very high), as SetShadowMapGenericGlobal
    // binds it; depthCompare = a D24 depth map (sampled with the hardware compare), else R32F distances.
    IDirect3DBaseTexture9* ShadowBand(int32_t i, bool* depthCompare) {
        if (CShadowCache::GetShadowMode() <= SHADOW_MEDIUM) return nullptr;
        CShadowBand& band = CShadowCache::s_extShadowBands[i];
        CTexture* texture = band.m_textures[band.m_current];
        if (!texture) return nullptr;
        CGxTex* gx = TextureGetGxTex(texture, 1, nullptr);
        if (!gx || gx->m_needsCreation || !gx->m_apiSpecificData) return nullptr;
        *depthCompare = gx->m_format == GxTex_D24X8;
        return static_cast<IDirect3DBaseTexture9*>(gx->m_apiSpecificData);
    }

    // Our draw changed D3D state behind the client's back: make it send everything again.
    void InvalidateClientState() {
        CGxDeviceD3d* gx = static_cast<CGxDeviceD3d*>(g_theGxDevicePtr);
        memset(gx->m_deviceStates, 0xFF, sizeof(gx->m_deviceStates));
        gx->m_d3dCurrentVertexDecl = nullptr;
        gx->m_d3dCurrentIndexBuf = nullptr;
        for (int i = 0; i < 8; i++) gx->m_d3dVertexStreamBuf[i] = nullptr;
        ShadowConstants& ps = CGxDevice::s_shadowConstants[0];
        ps.dirtyMin = 0;
        if (ps.dirtyMax < kConstRegs - 1) ps.dirtyMax = kConstRegs - 1;
        gx->IRsForceUpdate();
    }

    // HD: copy a colour target into s_sceneTex (made or remade at that size). Was inline in FogEndWorld; hdWater uses
    // it too (the world before the liquids).
    bool CopySceneTo(IDirect3DDevice9* device, IDirect3DSurface9* scene, UINT width, UINT height) {
        if (s_sceneTex) {
            D3DSURFACE_DESC have;
            s_sceneSurf->GetDesc(&have);
            if (have.Width != width || have.Height != height) {
                s_sceneSurf->Release(); s_sceneSurf = nullptr;
                s_sceneTex->Release(); s_sceneTex = nullptr;
            }
        }
        if (!s_sceneTex) {
            if (FAILED(device->CreateTexture(width, height, 1, D3DUSAGE_RENDERTARGET, D3DFMT_A8R8G8B8, D3DPOOL_DEFAULT, &s_sceneTex, nullptr)) || !s_sceneTex) {
                s_sceneTex = nullptr;
                return false;
            }
            s_sceneTex->GetSurfaceLevel(0, &s_sceneSurf);
        }
        return SUCCEEDED(device->StretchRect(scene, nullptr, s_sceneSurf, nullptr, D3DTEXF_POINT));
    }
}

void HD::FogBeginWorld() {
    RegisterCVars();
    s_active = false;
    s_postValid = false;
    // HD: the sun rays (HdBloom) need the world depth even with the fog off
    // HD: so does hdWater 1 (HdWater.cpp)
    // HD: and hdGI 1 (HdGI.cpp)
    // HD: and hdContactShadow 1 (HdContactShadow.cpp)
    if ((!s_enabled || !s_enabled->m_intValue) && !HD::BloomWantsDepth() && !HD::WaterWantsDepth() && !HD::GIWantsDepth() &&
        !HD::ContactShadowWantsDepth()) {
        if (s_depthTex) ReleaseTargets();
        SetInfo("off");
        return;
    }

    IDirect3DDevice9* device = Device();
    if (!device) {
        SetInfo("ERROR: needs gxApi d3d9");
        return;
    }
    if (device->TestCooperativeLevel() != D3D_OK) {
        ReleaseTargets();
        return;
    }
    if (!EnsureShader(device)) return;

    CGxDeviceD3d* gx = static_cast<CGxDeviceD3d*>(g_theGxDevicePtr);
    // The depth surface the world is about to use (the glow effect may have switched targets).
    IDirect3DSurface9* clientDepth = nullptr;
    if (FAILED(device->GetDepthStencilSurface(&clientDepth)) || !clientDepth) return;
    if (clientDepth == s_depthSurf) {
        // Still ours from a frame that did not finish: hand everything back first.
        clientDepth->Release();
        RestoreClientPointers();
        if (!s_realDepth) return;
        device->SetDepthStencilSurface(s_realDepth);
        clientDepth = s_realDepth;
        clientDepth->AddRef();
    }
    if (s_realDepth) s_realDepth->Release();
    s_realDepth = clientDepth; // keep this reference

    D3DSURFACE_DESC desc;
    s_realDepth->GetDesc(&desc);
    if (desc.MultiSampleType != D3DMULTISAMPLE_NONE) {
        SetInfo("ERROR: turn multisampling off (1x) for hdFog");
        return;
    }

    if (!s_depthSurf || desc.Width != s_width || desc.Height != s_height) {
        IDirect3DSurface9* keep = s_realDepth;
        keep->AddRef();
        ReleaseTargets();
        s_realDepth = keep;
        if (FAILED(device->CreateTexture(desc.Width, desc.Height, 1, D3DUSAGE_DEPTHSTENCIL, kIntz, D3DPOOL_DEFAULT, &s_depthTex, nullptr)) || !s_depthTex) {
            s_depthTex = nullptr;
            SetInfo("ERROR: INTZ depth texture not supported");
            return;
        }
        s_depthTex->GetSurfaceLevel(0, &s_depthSurf);
        s_width = desc.Width;
        s_height = desc.Height;
    }

    // The world's colour target: when the client comes back to it after a shadow pass, DepthOverride
    // gives it our INTZ depth again.
    IDirect3DSurface9* color = nullptr;
    if (FAILED(device->GetRenderTarget(0, &color)) || !color) return;
    s_worldColor = color;
    color->Release();
    (void)gx;
    // HD: depth diagnostic, reset for this frame
    s_diagCalls = 0;
    s_diagSwaps = 0;
    s_diagDepthClears = 0;
    s_diagTrace[0] = 0;
    s_diagBegin[0] = color == gx->m_defColorSurface ? 'B' : 'T'; // the world target itself
    {
        // what the depth we replace really is (R would hide it)
        char t = 'O';
        if (s_realDepth == gx->m_defDepthSurface) t = 'D';
        else if (s_realDepth == gx->m_defDepthStencilSurface) t = 'S';
        s_diagBegin[1] = t;
        s_diagBegin[2] = 0;
    }
    device->SetDepthStencilSurface(s_depthSurf);
    s_active = true;
}

void HD::FogEndWorld() {
    if (!s_active) return;

    IDirect3DDevice9* device = Device();
    if (!device || !s_realDepth || !s_depthTex) return;

    // Stop writing to our depth texture so the shader can read it.
    device->SetDepthStencilSurface(s_realDepth);

    IDirect3DSurface9* target = nullptr;
    D3DSURFACE_DESC rt;
    if (FAILED(device->GetRenderTarget(0, &target)) || !target) return;
    target->GetDesc(&rt);
    target->Release();

    DayNight::DNInfo& info = DayNight::g_dnInfo;
    const C44Matrix& proj = g_theGxDevicePtr->m_projNative;
    const CGxMatrixStack& viewStack = g_theGxDevicePtr->m_xforms[GxXform_View];
    float view[16];
    memcpy(view, &viewStack.m_mtx[viewStack.m_level], sizeof(view));
    float inv[16];
    if (!Invert(view, inv)) {
        device->SetDepthStencilSurface(s_depthSurf);
        return;
    }

    float farClip = info.m_farClip > 50.0f ? info.m_farClip : 1000.0f;

    // Direction to the visible sun disc; its light fades out below the horizon.
    C3Vector sun = DayNight::g_planets.m_sun.m_position;
    float sx = sun.x - info.m_cameraPos.x;
    float sy = sun.y - info.m_cameraPos.y;
    float sz = sun.z - info.m_cameraPos.z;
    float sl = sqrtf(sx * sx + sy * sy + sz * sz);
    if (sl < 1e-4f) { sx = 0.0f; sy = 0.0f; sz = 1.0f; sl = 1.0f; }
    sx /= sl; sy /= sl; sz /= sl;
    float sunUp = Clamp(sz * 4.0f + 0.2f, 0.0f, 1.0f);

    // HD: the sun on screen for the rays (HdBloom). Built from the client's own camera direction
    // (DNInfo::m_cameraDir, world space: x north, y west, z up) and the projection's field of view.
    {
        C3Vector f = info.m_cameraDir;
        float fl = sqrtf(f.x * f.x + f.y * f.y + f.z * f.z);
        if (fl < 1e-4f) { f.x = 1.0f; f.y = 0.0f; f.z = 0.0f; fl = 1.0f; }
        f.x /= fl; f.y /= fl; f.z /= fl;
        // right = forward x up, then the camera's own up = right x forward
        float rx = f.y, ry = -f.x, rz = 0.0f;
        float rl = sqrtf(rx * rx + ry * ry);
        if (rl < 1e-4f) { rx = 0.0f; ry = -1.0f; rl = 1.0f; }
        rx /= rl; ry /= rl;
        float ux = ry * f.z - rz * f.y, uy = rz * f.x - rx * f.z, uz = rx * f.y - ry * f.x;
        float vx = sx * rx + sy * ry + sz * rz;
        float vy = sx * ux + sy * uy + sz * uz;
        float vz = sx * f.x + sy * f.y + sz * f.z;
        s_post.depth = s_depthTex;
        s_post.vpMin = g_theGxDevicePtr->m_viewport.m_z.m_l;
        s_post.vpMax = g_theGxDevicePtr->m_viewport.m_z.m_h;
        s_post.projC2 = proj.c2;
        s_post.projD2 = proj.d2;
        s_post.farClip = farClip;
        s_post.sunU = 0.5f;
        s_post.sunV = 0.5f;
        s_post.sunVisible = 0.0f;
        if (vz > 0.05f) {
            float nx = proj.a0 * vx / vz + proj.c0;
            float ny = proj.b1 * vy / vz + proj.c1;
            s_post.sunU = nx * 0.5f + 0.5f;
            s_post.sunV = 0.5f - ny * 0.5f;
            float edge = fabsf(nx) > fabsf(ny) ? fabsf(nx) : fabsf(ny);
            s_post.sunVisible = sunUp * Clamp((1.6f - edge) / 0.6f, 0.0f, 1.0f);
        }
        // HD: diagnostic for hdBloomInfo: sun direction, camera forward, and the forward the view matrix gives
        snprintf(s_post.diag, sizeof(s_post.diag), "sunDir %.2f %.2f %.2f cam %.2f %.2f %.2f view %.2f %.2f %.2f",
                 sx, sy, sz, f.x, f.y, f.z, inv[8], inv[9], inv[10]);
        s_postValid = true;
    }
    if (!s_enabled || !s_enabled->m_intValue) {
        // HD: fog off, the depth was only kept for the sun rays
        SetInfo("off (depth kept for hdRays / hdWater)"); // HD: hdWater
        device->SetDepthStencilSurface(s_depthSurf);
        return;
    }

    // HD: WoW Forever's fog for this place and time
    HD::ForeverFog fog;
    memset(&fog, 0, sizeof(fog));
    float strength = CurrentForeverFog(fog);
    int32_t debug = s_debug ? s_debug->m_intValue : 0;
    if (strength <= 0.0f && !debug) {
        SetInfo("on, no Forever fog for this light (TBC, WotLK or Turtle zone)");
        device->SetDepthStencilSurface(s_depthSurf);
        return;
    }

    // HD: the fog is mixed with the scene in linear light (Forever: scene * T + L), so the shader reads a copy
    IDirect3DSurface9* scene = nullptr;
    if (FAILED(device->GetRenderTarget(0, &scene)) || !scene) {
        device->SetDepthStencilSurface(s_depthSurf);
        return;
    }
    // HD: shared with hdWater (FogCopyWorldColor)
    if (!CopySceneTo(device, scene, rt.Width, rt.Height)) {
        scene->Release();
        SetInfo("ERROR: scene copy texture");
        device->SetDepthStencilSurface(s_depthSurf);
        return;
    }
    scene->Release();

    float c[kConstRegs * 4];
    memset(c, 0, sizeof(c));
    c[0] = 1.0f / rt.Width; c[1] = 1.0f / rt.Height; c[2] = proj.c2; c[3] = proj.d2;
    c[4] = proj.a0; c[5] = proj.b1; c[6] = proj.c0; c[7] = proj.c1;
    // view -> world rotation rows (row-vector convention), camera position from the inverse
    c[8] = inv[0]; c[9] = inv[1]; c[10] = inv[2];
    c[12] = inv[4]; c[13] = inv[5]; c[14] = inv[6];
    c[16] = inv[8]; c[17] = inv[9]; c[18] = inv[10];
    // camera height in the same space as the player position (only z is used: fog height)
    c[20] = info.m_cameraPos.x; c[21] = info.m_cameraPos.y; c[22] = info.m_cameraPos.z; c[23] = farClip;
    c[24] = sx; c[25] = sy; c[26] = sz;
    c[28] = g_theGxDevicePtr->m_viewport.m_z.m_l; c[29] = g_theGxDevicePtr->m_viewport.m_z.m_h;
    c[30] = static_cast<float>(debug);
    c[32] = kFogRange; c[33] = 1.0f / kFogRange;

    // HD: Forever's layers, with the changes Forever's client makes before its shader: density x kFogDensityScale and
    // rates x 0.01 (per yard), heights relative to the player for flag 2, and for flag 1 the shadow colour and density
    // while the sun is down (Forever uses its sun shadow map there; here the sun being up or not).
    float density = CVarValue(s_density, 1.0f) * strength;
    float sunScale = CVarValue(s_sun, 1.0f) * kFogSunScale;
    float baseScale = CVarValue(s_ambient, 1.0f) * kFogBaseScale;
    float playerZ = info.m_playerPos.z;
    char layerInfo[3][48] = { "-", "-", "-" };
    for (int32_t i = 0; i < 3 && i < fog.count; i++) {
        const HD::ForeverFogLayer& l = fog.layers[i];
        if (!l.flags || l.density <= 0.0f) continue;
        float* r = &c[36 + i * 20];
        for (int32_t k = 0; k < 3; k++) {
            r[k] = powf(l.emissive[k], 2.2f) * baseScale;
            r[4 + k] = powf(l.diffuse[k], 2.2f) * l.intensity * sunScale;
            r[16 + k] = powf(l.shadow[k], 2.2f) * baseScale;
        }
        r[3] = l.density * kFogDensityScale * density;
        r[7] = l.g;
        r[8] = l.start; r[9] = l.strength; r[10] = l.exponent;
        r[11] = HD::SmoothFogFeatures()?HD::FogShadowWeight(l):((l.flags & 1)?1.0f:0.0f); // sun shadow: shadow maps and the sun being down
        float rel = (HD::SmoothFogFeatures()?HD::FogRelativeHeightWeight(l):((l.flags & 2)?1.0f:0.0f))*playerZ;
        r[12] = l.topRate * 0.01f; r[13] = l.topHeight + rel;
        r[14] = l.bottomRate * 0.01f; r[15] = l.bottomHeight + rel;
        r[19] = l.shadowMul;
        snprintf(layerInfo[i], sizeof(layerInfo[i]), "f%d d%.2f s%.0f g%.2f i%.1f", l.flags, l.density, l.start, l.g, l.intensity);
    }

    // HD: the client's sun shadow cascades (view space -> map, rows 3..11), for the light shafts
    IDirect3DBaseTexture9* shadowTex[3] = { nullptr, nullptr, nullptr };
    bool depthCompare = false;
    bool shadows = s_shadow && s_shadow->m_intValue;
    for (int32_t i = 0; shadows && i < 3; i++) {
        shadowTex[i] = ShadowBand(i, &depthCompare);
        if (!shadowTex[i]) shadows = false;
    }
    if (shadows) memcpy(&c[96], &CShadowCache::s_shadowMatrices[3].x, 9 * 4 * sizeof(float));
    c[132] = shadows ? 1.0f : 0.0f;
    c[133] = depthCompare ? 1.0f : 0.0f;
    c[134] = sunUp;
    {
        char text[260];
        snprintf(text, sizeof(text), "on Forever setting %d time %d strength %.2f sun %.2f shadows %s | %s | %s | %s", fog.setting, static_cast<int>(info.m_dayProgression * 2880.0f), strength, sunUp, shadows ? (depthCompare ? "D24" : "R32F") : "off", layerInfo[0], layerInfo[1], layerInfo[2]);
        SetInfo(text);
    }

    // Full-screen pass, pre-transformed vertices, no depth, no blending (the shader mixes the scene copy),
    // keep alpha (used by the glow).
    device->SetRenderState(D3DRS_ZENABLE, FALSE);
    device->SetRenderState(D3DRS_ZWRITEENABLE, FALSE);
    device->SetRenderState(D3DRS_STENCILENABLE, FALSE);
    device->SetRenderState(D3DRS_ALPHATESTENABLE, FALSE);
    device->SetRenderState(D3DRS_ALPHABLENDENABLE, FALSE);
    device->SetRenderState(D3DRS_SEPARATEALPHABLENDENABLE, FALSE);
    device->SetRenderState(D3DRS_CULLMODE, D3DCULL_NONE);
    device->SetRenderState(D3DRS_FOGENABLE, FALSE);
    device->SetRenderState(D3DRS_SCISSORTESTENABLE, FALSE);
    device->SetRenderState(D3DRS_CLIPPLANEENABLE, 0);
    device->SetRenderState(D3DRS_SRGBWRITEENABLE, FALSE);
    device->SetRenderState(D3DRS_COLORWRITEENABLE, D3DCOLORWRITEENABLE_RED | D3DCOLORWRITEENABLE_GREEN | D3DCOLORWRITEENABLE_BLUE);
    device->SetVertexShader(nullptr);
    device->SetPixelShader(s_shader);
    device->SetFVF(D3DFVF_XYZRHW);
    IDirect3DBaseTexture9* textures[2] = { s_depthTex, s_sceneTex };
    for (DWORD i = 0; i < 2; i++) {
        device->SetTexture(i, textures[i]);
        device->SetSamplerState(i, D3DSAMP_MINFILTER, D3DTEXF_POINT);
        device->SetSamplerState(i, D3DSAMP_MAGFILTER, D3DTEXF_POINT);
        device->SetSamplerState(i, D3DSAMP_MIPFILTER, D3DTEXF_NONE);
        device->SetSamplerState(i, D3DSAMP_ADDRESSU, D3DTADDRESS_CLAMP);
        device->SetSamplerState(i, D3DSAMP_ADDRESSV, D3DTADDRESS_CLAMP);
        device->SetSamplerState(i, D3DSAMP_SRGBTEXTURE, FALSE);
    }
    for (DWORD i = 0; i < 3; i++) {
        // HD: a D24 map is filtered (the hardware compare then gives soft edges); R32F distances are not
        DWORD filter = depthCompare ? D3DTEXF_LINEAR : D3DTEXF_POINT;
        device->SetTexture(2 + i, shadowTex[i]);
        device->SetSamplerState(2 + i, D3DSAMP_MINFILTER, filter);
        device->SetSamplerState(2 + i, D3DSAMP_MAGFILTER, filter);
        device->SetSamplerState(2 + i, D3DSAMP_MIPFILTER, D3DTEXF_NONE);
        device->SetSamplerState(2 + i, D3DSAMP_ADDRESSU, D3DTADDRESS_CLAMP);
        device->SetSamplerState(2 + i, D3DSAMP_ADDRESSV, D3DTADDRESS_CLAMP);
        device->SetSamplerState(2 + i, D3DSAMP_SRGBTEXTURE, FALSE);
    }
    device->SetPixelShaderConstantF(0, c, kConstRegs);

    float w = static_cast<float>(rt.Width) - 0.5f;
    float h = static_cast<float>(rt.Height) - 0.5f;
    float quad[16] = {
        -0.5f, -0.5f, 0.0f, 1.0f,
        w, -0.5f, 0.0f, 1.0f,
        -0.5f, h, 0.0f, 1.0f,
        w, h, 0.0f, 1.0f,
    };
    device->DrawPrimitiveUP(D3DPT_TRIANGLESTRIP, 2, quad, 4 * sizeof(float));

    device->SetTexture(1, nullptr);
    for (DWORD i = 2; i < 5; i++) device->SetTexture(i, nullptr);
    device->SetTexture(0, nullptr);
    device->SetRenderState(D3DRS_COLORWRITEENABLE, 0x0F);
    // HD: the client turns the depth buffer on once at start-up (IStateSetD3DDefaults) and never again,
    // so it would stay off for the whole game: no depth test and nothing written to our INTZ.
    device->SetRenderState(D3DRS_ZENABLE, D3DZB_TRUE);
    // Keep the world depth for what the client draws after this (spells, glares, chat bubbles).
    device->SetDepthStencilSurface(s_depthSurf);
    InvalidateClientState();
    s_active = true; // FogFinishWorld still has to hand the depth buffer back
}

void HD::FogFinishWorld() {
    if (!s_active) return;
    s_active = false;
    IDirect3DDevice9* device = Device();
    if (!device || !s_realDepth) return;
    RestoreClientPointers();
    IDirect3DSurface9* current = nullptr;
    if (SUCCEEDED(device->GetDepthStencilSurface(&current)) && current) {
        if (current == s_depthSurf) device->SetDepthStencilSurface(s_realDepth);
        current->Release();
    }
}

void HD::FogReleaseDeviceResources() {
    ReleaseTargets();
    s_postValid = false;
    HD::BloomReleaseDeviceResources(); // HD: hdBloom textures go with the device too
    HD::GradeReleaseDeviceResources(); // HD: hdGrade textures too
    HD::WaterReleaseDeviceResources(); // HD: hdWater targets and shaders too
    HD::GIReleaseDeviceResources(); // HD: hdGI targets and shaders too
    HD::ContactShadowReleaseDeviceResources(); // HD: hdContactShadow targets and shaders too
}

bool HD::FogGetPostFrame(HD::FogPostFrame* out) {
    if (!s_postValid || !s_depthTex) return false;
    *out = s_post;
    return true;
}

// HD: hdWater (HdWater.cpp) reads the world depth before the liquids are drawn
bool HD::FogGetWorldDepth(HD::FogWorldDepth* out) {
    if (!s_active || !s_depthTex || !s_depthSurf || !g_theGxDevicePtr) return false;
    out->texture = s_depthTex;
    out->width = s_width;
    out->height = s_height;
    out->projC2 = g_theGxDevicePtr->m_projNative.c2;
    out->projD2 = g_theGxDevicePtr->m_projNative.d2;
    out->vpMin = g_theGxDevicePtr->m_viewport.m_z.m_l;
    out->vpMax = g_theGxDevicePtr->m_viewport.m_z.m_h;
    return true;
}

// HD: hdWater's copy of the world before the liquids (hdFog's scene texture: FogEndWorld copies the finished world later)
IDirect3DTexture9* HD::FogCopyWorldColor(IDirect3DSurface9* from, unsigned int width, unsigned int height) {
    IDirect3DDevice9* device = Device();
    if (!device || !from) return nullptr;
    return CopySceneTo(device, from, width, height) ? s_sceneTex : nullptr;
}

// HD: hdWater's raw draws use the same reset as the fog's pass
void HD::FogInvalidateClientState() {
    if (!g_theGxDevicePtr || g_theGxDevicePtr->DeviceApi() != GxApi_D3d9) return;
    InvalidateClientState();
}
