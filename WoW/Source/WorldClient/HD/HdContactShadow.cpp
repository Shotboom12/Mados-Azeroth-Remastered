// HD: Waystone HD screen-space contact shadows (see HdContactShadow.h). Written for this client on the frame of hdGI
// (HdGI.cpp): same world depth, same view-space rebuild, same raw D3D9 work and state reset afterwards (no Get* of
// render states and no state block: the client makes a PURE device, CGxDeviceD3d::ICreateD3dDevice). The sun shadow
// cascades are read the way hdFog reads them for its light shafts (HdFog.cpp ShadowBand, SunVisible).
#include "WoW/Source/WorldClient/HD/HdContactShadow.h"
#include <cmath>
#include <cstdio>
#include <cstring>
#include <vector>
#include <windows.h>
#include <d3d9.h>
#include <d3dcompiler.h>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/CGxDeviceD3d/CGxDeviceD3d.h"
#include "Engine/Source/Gx/Types.h"
#include "Engine/Source/Gx/CGxTex.h"
#include "Engine/Source/Services/Texture.h"
#include "Engine/Source/ShaderEffect/ShadowCache.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h" // HD: the world light's colours now (follows hdTime)
#include "WoW/Source/WorldClient/HD/HdFog.h"

namespace {
    // HD: checked with d3dcompiler_47 (ps_3_0, optimisation level 3, as below): Visibility 427 instruction slots,
    // Generate 336, Blur 179, Apply 21 (ps_3_0 guarantees 512).
    const char kShader[] = R"HLSL(// Waystone HD contact shadows (ps_3_0, D3D9). Four entry points over the whole world target:
//   Visibility: (HD v3, its own pass so each shader stays under 512 slots) what the sun shadow maps say here, the
//             way the HD shaders read them (5 taps), 1 = lit, in all four channels
//   Generate: rgb = the share of this pixel's light that a contact shadow takes away (linear), a = what the sun
//             shadow maps say (1 = lit); a short ray toward the world light, marched in the world depth
//   Blur:     5-tap blur of rgb that stops at depth edges and at the shadow maps' edges (run twice: across, then
//             down); a is kept
//   Apply:    the world's colour times what is left of its light (multiplied by the blend unit)
// HD (v3, max's in-game test, 2026-10-25): a contact shadow is the shaders' own shadow, the same darkness, so both
// make one shadow. The shaders light in gamma: colour = albedo * (ambient + sun * N.L), and a shadow-map shadow
// (S = 0) leaves of it k = 70% (3.3.5 shaders: models, grass, hdTerrainLight 2: f = S * 0.3 + 0.7) or, with WoW
// Forever lighting on the ground (hdTerrainLight 1, HdTerrain.cpp), only the ambient: k = ambient / (ambient + sun * N.L).
// Where the shadow maps say vis (1 = lit), the shaders already left lerp(k, 1, vis); the union with a contact shadow
// occ is lerp(k, 1, vis * (1 - occ)), so this pass multiplies by the ratio of the two: 1 inside a shadow-map shadow
// (nothing twice), lerp(1, k, occ) in the open, and no step in between. Surfaces turned away from the light are left
// as they are. Characters (units) cast no contact shadows: each one is a capsule (feet, height) that the ray's hits
// are tested against, from just above the ground up (the ground around the feet keeps its contact shadows). HD (v4):
// they receive the world's contact shadows, as the ground they stand on does.
// The world depth is hdFog's INTZ copy of the client's depth buffer (HD::FogGetWorldDepth).
sampler2D DepthTex : register(s0); // INTZ world depth, point, clamp
sampler2D MaskTex  : register(s1); // Visibility's (for Generate) / Generate's / Blur's result, point, clamp
sampler2D Shadow0  : register(s2); // the client's sun shadow cascades (40, 160, 640 yards), as hdFog binds them
sampler2D Shadow1  : register(s3);
sampler2D Shadow2  : register(s4);
float4 cScreen  : register(c0); // 1/width, 1/height of the target, depth scale A, depth offset B (z01 = raw * A + B)
float4 cView    : register(c1); // view xy = (local uv * xy + zw) * view z  (from projection a0, b1, c0, c1)
float4 cRect    : register(c2); // world viewport in target uv: offset xy, 1 / size zw
float4 cDepth   : register(c3); // projection c2, -d2, sky threshold, unused
float4 cParams  : register(c4); // ray length (yards), strength, debug, occluder thickness (yards)
float4 cBlur    : register(c5); // blur step in uv (xy), fade start (yards), 1 / fade length
float4 cLight   : register(c6); // view-space direction to the world light (the shadow maps' light), unused
float4 cAmbient : register(c7); // the client's ambient light now (gamma, as the shaders), 1 = Forever ground lighting
float4 cDiffuse : register(c8); // the client's world light colour now (gamma, as the shaders), unused
float4 cShadow  : register(c9); // 1 = shadow maps bound, 1 = hardware depth compare (D24), unused, unused
float4 cSmat[9] : register(c10); // view space -> shadow map, 3 rows per cascade (CShadowCache::s_shadowMatrices 3..11)
float4 cUnit[16] : register(c19); // HD: characters near the camera: view-space feet xyz, height (yards)
float4 cUp      : register(c35); // HD: view-space world up (xyz), number of characters in cUnit (w)
float4 cPcf[2]  : register(c36); // HD (v3): the shaders' 5-tap PCF offsets in map uv (CShadowCache::s_pcfOffsets 0, 2 | 4, 6)

// View-space position of the surface seen at uv (camera at 0, +z forward), w = 1; w = 0 for the sky and for
// pixels outside the world viewport. (HdGI.cpp ViewPos)
float4 ViewPos(float2 uv)
{
    float2 local = (uv - cRect.xy) * cRect.zw;
    float raw = tex2Dlod(DepthTex, float4(uv, 0, 0)).r;
    float z01 = raw * cScreen.z + cScreen.w;
    float z = cDepth.y / max(cDepth.x - z01, 1e-7);
    bool inside = all(local == saturate(local));
    float w = (inside && z01 < cDepth.z) ? 1.0 : 0.0;
    return float4((local * cView.xy + cView.zw) * z, z, w);
}

// Where a view-space point (in front of the eye) is in the target (uv): ViewPos backwards
float2 TargetUv(float3 q)
{
    return ((q.xy / q.z - cView.zw) / cView.xy) / cRect.zw + cRect.xy;
}

// Interleaved gradient noise (Jimenez 2014): per-pixel start of the ray, removed by the blur.
float Noise(float2 vpos)
{
    return frac(52.9829189 * frac(dot(vpos, float2(0.06711056, 0.00583715))));
}

// one tap: lit when not deeper than the map (HdFog.cpp)
float ShadowTap(sampler2D map, float2 uv, float z)
{
    if (cShadow.y > 0.5) return tex2Dlod(map, float4(uv, z, 0)).r;
    return z <= tex2Dlod(map, float4(uv, 0, 0)).r ? 1.0 : 0.0;
}

// one cascade: x, y = -1..1 across the map, z = depth to compare. HD (v3): the 5 taps the HD shaders take (HdTerrain.cpp
// Sum5), so where their shadow ends ours ends too, with the same soft edge (no seam where the two shadows meet)
float ShadowSample(sampler2D map, float3 c)
{
    float2 uv = c.xy * 0.5 + 0.5;
    float sum = ShadowTap(map, uv, c.z);
    sum += ShadowTap(map, uv + cPcf[0].xy, c.z);
    sum += ShadowTap(map, uv + cPcf[0].zw, c.z);
    sum += ShadowTap(map, uv + cPcf[1].xy, c.z);
    sum += ShadowTap(map, uv + cPcf[1].zw, c.z);
    return sum * 0.2;
}

// the client's sun shadow at this view-space point: 1 = lit, 0 = in shadow (the nearest cascade that holds it)
float SunVisible(float3 p)
{
    if (cShadow.x < 0.5) return 1.0;
    float4 q = float4(p, 1.0);
    float3 c = float3(dot(q, cSmat[0]), dot(q, cSmat[1]), dot(q, cSmat[2]));
    if (max(abs(c.x), abs(c.y)) < 0.98) return ShadowSample(Shadow0, c);
    c = float3(dot(q, cSmat[3]), dot(q, cSmat[4]), dot(q, cSmat[5]));
    if (max(abs(c.x), abs(c.y)) < 0.98) return ShadowSample(Shadow1, c);
    c = float3(dot(q, cSmat[6]), dot(q, cSmat[7]), dot(q, cSmat[8]));
    if (max(abs(c.x), abs(c.y)) < 0.98) return ShadowSample(Shadow2, c);
    return 1.0;
}

// HD (v3): how much the view-space point p belongs to a character, 0..1: inside a capsule around its body (radius
// 0.22 x its height, 0.3 to 1.2 yards, plus 0.1 for weapons and cloaks, soft over its outer third), and only from
// 0.08 yards above its feet (soft up to 0.28): the ground it stands on is never taken for the character
float InUnit(float3 p)
{
    float inside = 0.0;
    [loop] for (int i = 0; i < 16; ++i) {
        if (i >= cUp.w) break;
        float4 u = cUnit[i];
        float3 d = p - u.xyz;
        float h = dot(d, cUp.xyz);
        float3 q = d - cUp.xyz * clamp(h, 0.0, u.w);
        float r = clamp(u.w * 0.22, 0.3, 1.2) + 0.1;
        float w = saturate((r - length(q)) / (r * 0.35)) * saturate((h - 0.08) * 5.0);
        inside = max(inside, w);
    }
    return inside;
}

// the raw depth at uv (z / w: along a flat surface it changes linearly across the screen)
float RawDepth(float2 uv)
{
    return tex2Dlod(DepthTex, float4(uv, 0, 0)).r;
}

// view-space normal at uv, facing the camera. HD (v4, max's "paper" edges): on each axis the side whose depth goes on
// in a straight line over two pixels is taken (the same surface, Bend Studio's choice); the nearest-depth side of
// v1..v3 took the wall's depth for the ground pixel right in the corner, so its normal was wrong and its shadow went.
float3 ViewNormal(float2 uv, float3 p)
{
    float2 ex = float2(cScreen.x, 0);
    float2 ey = float2(0, cScreen.y);
    float4 l = ViewPos(uv - ex);
    float4 r = ViewPos(uv + ex);
    float4 u = ViewPos(uv - ey);
    float4 d = ViewPos(uv + ey);
    float c0 = RawDepth(uv);
    float el = abs(2.0 * RawDepth(uv - ex) - RawDepth(uv - 2.0 * ex) - c0) + (1.0 - l.w) * 1e9;
    float er = abs(2.0 * RawDepth(uv + ex) - RawDepth(uv + 2.0 * ex) - c0) + (1.0 - r.w) * 1e9;
    float eu = abs(2.0 * RawDepth(uv - ey) - RawDepth(uv - 2.0 * ey) - c0) + (1.0 - u.w) * 1e9;
    float ed = abs(2.0 * RawDepth(uv + ey) - RawDepth(uv + 2.0 * ey) - c0) + (1.0 - d.w) * 1e9;
    float3 dx = el < er ? p - l.xyz : r.xyz - p;
    float3 dy = eu < ed ? p - u.xyz : d.xyz - p;
    float3 n = cross(dx, dy);
    n = dot(n, n) > 1e-12 ? normalize(n) : -normalize(p);
    return dot(n, p) > 0.0 ? -n : n;
}

// HD (v3): the client's shadow maps at this pixel, a little off the surface (an error there only removes a contact shadow)
float4 Visibility(float2 vpos : VPOS) : COLOR0
{
    float2 uv = (vpos + 0.5) * cScreen.xy;
    float4 c = ViewPos(uv);
    if (c.w < 0.5) return 1.0;
    float3 n = ViewNormal(uv, c.xyz);
    return SunVisible(c.xyz + n * (0.05 + 0.004 * c.z));
}

float4 Generate(float2 vpos : VPOS) : COLOR0
{
    float2 uv = (vpos + 0.5) * cScreen.xy;
    float4 c = ViewPos(uv);
    if (c.w < 0.5) return 0.0;
    float3 p = c.xyz;
    float3 n = ViewNormal(uv, p);

    // turned away from the light (or grazing): no direct light to take away
    float ndl = dot(n, cLight.xyz);
    if (ndl < 0.02) return 0.0;
    // HD (v4, max's test: "the shadow goes when I walk into it"): the characters receive the contact shadows of the
    // world again, like the ground they stand on; they still cast none, on themselves neither (hits on them are passed)
    // HD: the client's shadow maps first (the Visibility pass)
    float vis = tex2Dlod(MaskTex, float4(uv, 0, 0)).a;

    // the ray: from just off the surface toward the light; an occluder is a surface on screen in front of the ray
    // by more than the depth's precision and less than an object's thickness (deeper = something behind, not on it)
    float len = cParams.x;
    float stepLen = len * (1.0 / 24.0);
    float bias = 0.01 + 0.0015 * p.z;
    float thick = cParams.w * (1.0 + 0.02 * p.z);
    float3 o = p + n * (0.02 + 0.002 * p.z);
    float noise = Noise(vpos);
    float occ = 0.0;
    [loop] for (int i = 0; i < 24; ++i) {               // HD (v4): 24 steps, finer than 16 (less noise to blur)
        float t = (i + noise) * stepLen;
        float3 q = o + cLight.xyz * t;
        if (q.z < 0.25) break;                           // the ray left the view toward the camera
        float4 s = ViewPos(TargetUv(q));
        float delta = q.z - s.z;
        // HD: the characters cast no contact shadow (a hit on one is passed through)
        if (s.w > 0.5 && delta > bias && delta < thick && InUnit(s.xyz) < 0.5) {
            // HD (v4, max's "printed" shadows): full at the contact, then fading over the far 60% of the ray, as a
            // real contact shadow softens away from the contact (v1..v3 kept it full to 75%: a flat stamp that popped)
            occ = 1.0 - smoothstep(0.4, 1.0, t / len);
            break;
        }
    }
    // fade out with distance (the depth gets coarse far away, and far scenery is fogged)
    occ *= (1.0 - saturate((p.z - cBlur.z) * cBlur.w)) * cParams.y;
    // HD (v3): k = what the shaders' own shadow leaves of this colour (gamma): Forever ground lighting keeps the
    // ambient on the ground (facing up), the 3.3.5 shaders keep 70% (everything else)
    float3 forever = cAmbient.rgb / max(cAmbient.rgb + cDiffuse.rgb * ndl, 1e-4);
    float3 k = lerp(0.7, forever, cAmbient.w * saturate((dot(n, cUp.xyz) - 0.55) * 3.3));
    float s = cParams.z > 1.5 ? 1.0 : vis;                 // test view 2: without the shadow-map check
    // the shadows' union over what the shaders drew: lerp(k, 1, s * (1 - occ)) / lerp(k, 1, s)
    float3 keep = (k + (1.0 - k) * s * (1.0 - occ)) / (k + (1.0 - k) * s);
    // HD (v4): a = 0.5 + vis / 2 marks a pixel that takes contact shadows (0 = sky, turned away), for the blur
    return float4(1.0 - keep * keep, 0.5 + 0.5 * vis);
}

float4 Blur(float2 vpos : VPOS) : COLOR0
{
    float2 uv = (vpos + 0.5) * cScreen.xy;
    float4 m = tex2Dlod(MaskTex, float4(uv, 0, 0));
    if (m.a < 0.25) return 0.0;                         // takes no contact shadow: stays so
    float4 q[5];
    [unroll] for (int j = 0; j < 5; ++j) q[j] = ViewPos(uv + cBlur.xy * (j - 2));
    float z = q[2].z;
    // HD (v4, max's "printed" shadows): the depth is followed along the surface (its slope from the nearer neighbour)
    // instead of a fixed tolerance, so ground seen at a grazing angle is blurred too and the ray noise goes away
    float slope = abs(q[3].z - z) < abs(z - q[1].z) ? q[3].z - z : z - q[1].z;
    float sharp = 1.0 / (0.03 + 0.01 * z);
    float3 total = 0.0;
    float weights = 0.0;
    [unroll] for (int i = 0; i < 5; ++i) {
        float4 t = tex2Dlod(MaskTex, float4(uv + cBlur.xy * (i - 2), 0, 0));
        const float spatial = (i == 2) ? 6.0 : ((i == 1 || i == 3) ? 4.0 : 1.0);
        float weight = spatial * exp2(-abs(q[i].z - (z + slope * (i - 2))) * sharp) * q[i].w;
        // HD (v4): only pixels that take contact shadows (the ones that take none would lighten an object's foot)
        weight *= t.a >= 0.25 ? 1.0 : 0.0;
        // HD (v3): nor across the shadow maps' edge (inside, the mask is 0: the shaders' shadow is already there)
        weight *= saturate(1.0 - 2.0 * abs(t.a - m.a));
        total += t.rgb * weight;
        weights += weight;
    }
    return float4(total / max(weights, 1e-6), m.a);
}

// The target is 8-bit gamma (gamma 2, as hdGI): the light left, sqrt(1 - share), is the factor in gamma too.
float4 Apply(float2 vpos : VPOS) : COLOR0
{
    float2 uv = (vpos + 0.5) * cScreen.xy;
    float4 m = tex2Dlod(MaskTex, float4(uv, 0, 0));
    float3 keep = sqrt(saturate(1.0 - m.rgb));
    // test view 2: red where the shadow maps already shadow
    if (cParams.z > 1.5 && m.a >= 0.25 && m.a < 0.75) keep = float3(keep.r, keep.g * 0.35, keep.b * 0.35);
    return float4(keep, 1.0);
}
)HLSL";

    enum { PS_Visibility, PS_Generate, PS_Blur, PS_Apply, PS_Count };
    const char* const kEntry[PS_Count] = { "Visibility", "Generate", "Blur", "Apply" };
    const UINT kConstRegs = 38; // c0..c37 (HD::FogInvalidateClientState re-sends c0..c33, c34..c37 are marked below)
    const int kMaxUnits = 16; // HD: characters nearest to the camera kept out of the contact shadows
    const float kSkyDepth = 0.99999f;
    const float kFadeStart = 80.0f; // yards: the contact shadows fade out from here...
    const float kFadeLength = 40.0f; // ...over this distance
    const float kThickness = 1.0f; // yards: how thick an occluder is taken to be near the camera (a crate, a body)

    typedef HRESULT(WINAPI* D3DCompileFn)(LPCVOID, SIZE_T, LPCSTR, const D3D_SHADER_MACRO*, ID3DInclude*, LPCSTR, LPCSTR, UINT, UINT, ID3DBlob**, ID3DBlob**);

    struct Target {
        IDirect3DTexture9* tex = nullptr;
        IDirect3DSurface9* surf = nullptr;
    };

    CVar* s_enabled = nullptr;
    CVar* s_length = nullptr;
    CVar* s_strength = nullptr;
    CVar* s_units = nullptr; // HD: hdContactShadowUnits
    CVar* s_debug = nullptr;
    CVar* s_info = nullptr;
    CVar* s_terrainLight = nullptr; // HD: hdTerrainLight (HdTerrain.cpp), 1 = Forever ground lighting
    char s_lastInfo[160] = "";

    std::vector<DWORD> s_code[PS_Count]; // compiled once; the shader objects are remade after a device reset
    bool s_compileFailed = false;
    IDirect3DPixelShader9* s_ps[PS_Count] = {};
    Target s_mask[2];
    UINT s_width = 0;
    UINT s_height = 0;

    void RegisterCVars() {
        static bool registered = false;
        if (registered) return;
        registered = true;
        s_enabled = CVar::Register("hdContactShadow", "HD: 1 = screen-space contact shadows, 0 = off", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_length = CVar::Register("hdContactShadowLength", "HD: contact shadow ray length in yards, 1.5 = normal", 1, "1.5", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_strength = CVar::Register("hdContactShadowStrength", "HD: contact shadow strength, 1 = as dark as the shaders' own shadows (normal), 0 = none", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_units = CVar::Register("hdContactShadowUnits", "HD: 1 = characters cast contact shadows too, 0 = they only receive them (default)", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_debug = CVar::Register("hdContactShadowDebug", "HD: 1 = test view, the shadow alone, 2 = the same without the shadow-map check (red = shadow maps)", 0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_info = CVar::Register("hdContactShadowInfo", "HD: hdContactShadow status (read only)", 0, "off", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    }

    void SetInfo(const char* text) {
        if (!s_info || !strcmp(s_lastInfo, text)) return;
        snprintf(s_lastInfo, sizeof(s_lastInfo), "%s", text);
        s_info->Set(text, true, false, false, false);
    }

    float CVarValue(CVar* cvar, float fallback, float lo, float hi) {
        float v = cvar ? cvar->m_floatValue : fallback;
        if (!(v == v)) return fallback; // NaN
        return v < lo ? lo : (v > hi ? hi : v);
    }

    IDirect3DDevice9* Device() {
        if (!g_theGxDevicePtr || g_theGxDevicePtr->DeviceApi() != GxApi_D3d9) return nullptr;
        return static_cast<CGxDeviceD3d*>(g_theGxDevicePtr)->m_d3dDevice;
    }

    void ReleaseTargets() {
        for (Target& t : s_mask) {
            if (t.surf) { t.surf->Release(); t.surf = nullptr; }
            if (t.tex) { t.tex->Release(); t.tex = nullptr; }
        }
        s_width = 0;
        s_height = 0;
    }

    void ReleaseShaders() {
        for (IDirect3DPixelShader9*& ps : s_ps) {
            if (ps) { ps->Release(); ps = nullptr; }
        }
    }

    bool EnsureTargets(IDirect3DDevice9* device, UINT width, UINT height) {
        if (s_mask[0].surf && s_mask[1].surf && s_width == width && s_height == height) return true;
        ReleaseTargets();
        for (Target& t : s_mask) {
            if (FAILED(device->CreateTexture(width, height, 1, D3DUSAGE_RENDERTARGET, D3DFMT_A8R8G8B8, D3DPOOL_DEFAULT, &t.tex, nullptr)) || !t.tex) {
                t.tex = nullptr;
                ReleaseTargets();
                return false;
            }
            if (FAILED(t.tex->GetSurfaceLevel(0, &t.surf)) || !t.surf) {
                t.surf = nullptr;
                ReleaseTargets();
                return false;
            }
        }
        s_width = width;
        s_height = height;
        return true;
    }

    bool EnsureShaders(IDirect3DDevice9* device) {
        if (s_ps[PS_Visibility] && s_ps[PS_Generate] && s_ps[PS_Blur] && s_ps[PS_Apply]) return true;
        if (s_compileFailed) return false;
        if (s_code[0].empty()) {
            s_compileFailed = true;
            HMODULE module = LoadLibraryA("d3dcompiler_47.dll");
            D3DCompileFn compile = module ? reinterpret_cast<D3DCompileFn>(GetProcAddress(module, "D3DCompile")) : nullptr;
            if (!compile) {
                SetInfo("ERROR: d3dcompiler_47.dll not found");
                return false;
            }
            for (int i = 0; i < PS_Count; i++) {
                ID3DBlob* code = nullptr;
                ID3DBlob* errors = nullptr;
                HRESULT hr = compile(kShader, strlen(kShader), "HdContactShadow", nullptr, nullptr, kEntry[i], "ps_3_0", D3DCOMPILE_OPTIMIZATION_LEVEL3, 0, &code, &errors);
                if (FAILED(hr) || !code) {
                    char text[160];
                    snprintf(text, sizeof(text), "ERROR: shader %s: %s", kEntry[i], errors ? static_cast<const char*>(errors->GetBufferPointer()) : "unknown");
                    SetInfo(text);
                    if (errors) errors->Release();
                    if (code) code->Release();
                    for (std::vector<DWORD>& c : s_code) c.clear();
                    return false;
                }
                if (errors) errors->Release();
                const DWORD* p = static_cast<const DWORD*>(code->GetBufferPointer());
                s_code[i].assign(p, p + code->GetBufferSize() / sizeof(DWORD));
                code->Release();
            }
            s_compileFailed = false;
        }
        for (int i = 0; i < PS_Count; i++) {
            if (!s_ps[i] && FAILED(device->CreatePixelShader(s_code[i].data(), &s_ps[i]))) {
                s_ps[i] = nullptr;
                ReleaseShaders();
                s_compileFailed = true;
                SetInfo("ERROR: CreatePixelShader failed");
                return false;
            }
        }
        return true;
    }

    // The world viewport in pixels, as CGxDeviceD3d::IXformSetViewport sets it from the client's viewport. (HdGI.cpp)
    void WorldViewport(float* x, float* y, float* w, float* h) {
        CGxDevice* gx = g_theGxDevicePtr;
        const CRect& window = gx->DeviceCurWindow();
        const CBoundingBox& vp = gx->m_viewport;
        DWORD vx = static_cast<DWORD>(vp.m_x.m_l * window.maxX + 0.5f);
        DWORD vy = static_cast<DWORD>((1.0f - vp.m_y.m_h) * window.maxY + 0.5f);
        DWORD vw = static_cast<DWORD>(vp.m_x.m_h * window.maxX - vx + 0.5f);
        DWORD vh = static_cast<DWORD>((1.0f - vp.m_y.m_l) * window.maxY - vy + 0.5f);
        if (gx->m_textureTarget[0].m_apiSpecific || gx->m_textureTarget[1].m_apiSpecific) {
            vy = static_cast<DWORD>(window.maxY * vp.m_y.m_l);
        }
        *x = static_cast<float>(vx);
        *y = static_cast<float>(vy);
        *w = static_cast<float>(vw);
        *h = static_cast<float>(vh);
    }

    // HD: the client's sun shadow cascade i (CShadowCache, shadow quality high or very high), as hdFog takes it
    // (HdFog.cpp ShadowBand); depthCompare = a D24 depth map (sampled with the hardware compare), else R32F distances.
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

    // One full-target pass. SetRenderTarget also sets the viewport to the whole target.
    void Pass(IDirect3DDevice9* device, IDirect3DSurface9* target, int shader, IDirect3DTexture9* mask, UINT width, UINT height) {
        device->SetRenderTarget(0, target);
        device->SetPixelShader(s_ps[shader]);
        device->SetTexture(1, mask);
        float w = static_cast<float>(width) - 0.5f;
        float h = static_cast<float>(height) - 0.5f;
        float quad[16] = {
            -0.5f, -0.5f, 0.0f, 1.0f,
            w, -0.5f, 0.0f, 1.0f,
            -0.5f, h, 0.0f, 1.0f,
            w, h, 0.0f, 1.0f,
        };
        device->DrawPrimitiveUP(D3DPT_TRIANGLESTRIP, 2, quad, 4 * sizeof(float));
        device->SetTexture(1, nullptr);
    }
}

bool HD::ContactShadowWantsDepth() {
    RegisterCVars();
    return s_enabled && s_enabled->m_intValue != 0;
}

void HD::ContactShadowRenderOpaque() {
    RegisterCVars();
    if (!s_enabled || !s_enabled->m_intValue) {
        // HD: off: no Direct3D call at all (only our own textures are let go, once)
        if (s_mask[0].tex || s_mask[1].tex) ReleaseTargets();
        SetInfo("off");
        return;
    }
    IDirect3DDevice9* device = Device();
    if (!device) { SetInfo("ERROR: needs gxApi d3d9"); return; }
    HD::FogWorldDepth depth;
    if (!HD::FogGetWorldDepth(&depth)) {
        SetInfo("no world depth (multisampling must be 1x, INTZ needed): contact shadows skipped");
        return;
    }
    const C44Matrix& proj = g_theGxDevicePtr->m_projNative;
    // a perspective projection (zv = d2 / (z - c2), w = view z); anything else (orthographic views) is skipped
    if (proj.a0 == 0.0f || proj.b1 == 0.0f || proj.c3 != 1.0f || proj.d3 != 0.0f || !(proj.c2 > 0.0f) || !(proj.d2 < 0.0f) ||
        !(depth.vpMax > depth.vpMin)) {
        SetInfo("on, projection not supported this frame: contact shadows skipped");
        return;
    }
    // HD: the light the shadow maps use (CShadowQuery::Update: the client's world light, z scaled by hdShadowSun),
    // which falls along s_sunDir; into view space with this frame's view matrix (row vectors, as hdFog), reversed
    const C3Vector& fall = CShadowCache::s_sunDir;
    const CGxMatrixStack& viewStack = g_theGxDevicePtr->m_xforms[GxXform_View];
    float view[16];
    memcpy(view, &viewStack.m_mtx[viewStack.m_level], sizeof(view));
    float lx = -(fall.x * view[0] + fall.y * view[4] + fall.z * view[8]);
    float ly = -(fall.x * view[1] + fall.y * view[5] + fall.z * view[9]);
    float lz = -(fall.x * view[2] + fall.y * view[6] + fall.z * view[10]);
    float ll = sqrtf(lx * lx + ly * ly + lz * lz);
    if (!(ll > 1e-4f)) {
        SetInfo("on, no world light direction yet: contact shadows skipped");
        return;
    }
    lx /= ll; ly /= ll; lz /= ll;
    if (!EnsureShaders(device)) return;

    IDirect3DSurface9* color = nullptr;
    if (FAILED(device->GetRenderTarget(0, &color)) || !color) return;
    D3DSURFACE_DESC desc;
    color->GetDesc(&desc);
    if (desc.Width != depth.width || desc.Height != depth.height || desc.MultiSampleType != D3DMULTISAMPLE_NONE) {
        color->Release();
        SetInfo("on, world target and depth differ in size: contact shadows skipped");
        return;
    }
    if (!EnsureTargets(device, desc.Width, desc.Height)) {
        color->Release();
        SetInfo("ERROR: contact shadow render target not supported");
        return;
    }
    IDirect3DSurface9* worldDepth = nullptr;
    device->GetDepthStencilSurface(&worldDepth);

    float vx, vy, vw, vh;
    WorldViewport(&vx, &vy, &vw, &vh);
    if (vw < 1.0f || vh < 1.0f) { vx = 0.0f; vy = 0.0f; vw = static_cast<float>(desc.Width); vh = static_cast<float>(desc.Height); }
    const float length = CVarValue(s_length, 1.5f, 0.25f, 6.0f);
    const float strength = CVarValue(s_strength, 1.0f, 0.0f, 1.0f);
    const int32_t debug = s_debug ? (s_debug->m_intValue < 0 ? 0 : (s_debug->m_intValue > 2 ? 2 : s_debug->m_intValue)) : 0;
    // HD: the client's light this frame (CWorldScene's map light, m_light1: DayNight at the hdTime hour), in gamma
    // as the shaders use it; and whether the ground has WoW Forever's lighting (its shadow then keeps the ambient only)
    if (!s_terrainLight) s_terrainLight = CVar::Lookup("hdTerrainLight");
    const bool forever = s_terrainLight && s_terrainLight->m_intValue == 1;
    const CImVector& amb = DayNight::g_dnInfo.m_light1.m_ambient;
    const CImVector& dif = DayNight::g_dnInfo.m_light1.m_diffuse;
    const float ambR = amb.r * (1.0f / 255.0f), ambG = amb.g * (1.0f / 255.0f), ambB = amb.b * (1.0f / 255.0f);
    const float difR = dif.r * (1.0f / 255.0f), difG = dif.g * (1.0f / 255.0f), difB = dif.b * (1.0f / 255.0f);

    // HD: the client's sun shadow cascades (view space -> map), so what they already shadow is not shadowed again
    IDirect3DBaseTexture9* shadowTex[3] = { nullptr, nullptr, nullptr };
    bool depthCompare = false;
    bool shadows = true;
    for (int32_t i = 0; shadows && i < 3; i++) {
        shadowTex[i] = ShadowBand(i, &depthCompare);
        if (!shadowTex[i]) shadows = false;
    }

    const float depthScale = 1.0f / (depth.vpMax - depth.vpMin);
    float c[kConstRegs * 4] = {
        1.0f / desc.Width, 1.0f / desc.Height, depthScale, -depth.vpMin * depthScale,
        2.0f / proj.a0, -2.0f / proj.b1, (-1.0f - proj.c0) / proj.a0, (1.0f - proj.c1) / proj.b1,
        vx / desc.Width, vy / desc.Height, desc.Width / vw, desc.Height / vh,
        proj.c2, -proj.d2, kSkyDepth, 0.0f,
        length, strength, static_cast<float>(debug), kThickness,
        0.0f, 0.0f, kFadeStart, 1.0f / kFadeLength,
        lx, ly, lz, 0.0f,
        ambR, ambG, ambB, forever ? 1.0f : 0.0f,
        difR, difG, difB, 0.0f,
        shadows ? 1.0f : 0.0f, depthCompare ? 1.0f : 0.0f, 0.0f, 0.0f,
    };
    if (shadows) memcpy(&c[40], &CShadowCache::s_shadowMatrices[3].x, 9 * 4 * sizeof(float));
    // HD: the characters near the camera (camera-relative world -> view space, rotation only), and the world's up
    int32_t unitCount = 0;
    if (!s_units || !s_units->m_intValue) {
        HD::ContactShadowUnit units[kMaxUnits];
        unitCount = HD::ContactShadowGatherUnits(units, kMaxUnits);
        for (int32_t i = 0; i < unitCount; i++) {
            const HD::ContactShadowUnit& u = units[i];
            float* r = &c[(19 + i) * 4];
            for (int32_t j = 0; j < 3; j++) r[j] = u.x * view[j] + u.y * view[4 + j] + u.z * view[8 + j];
            r[3] = u.height;
        }
    }
    {
        float ux = view[8], uy = view[9], uz = view[10];
        float ul = sqrtf(ux * ux + uy * uy + uz * uz);
        if (!(ul > 1e-6f)) { ux = 0.0f; uy = 1.0f; uz = 0.0f; ul = 1.0f; }
        c[140] = ux / ul; c[141] = uy / ul; c[142] = uz / ul; c[143] = static_cast<float>(unitCount);
    }
    // HD (v3): the shaders' PCF taps (CShadowCache::InitPcfOffsets: texel steps of this shadow map size)
    {
        const C4Vector* o = CShadowCache::s_pcfOffsets;
        float pcf[8] = { o[0].x, o[0].y, o[2].x, o[2].y, o[4].x, o[4].y, o[6].x, o[6].y };
        memcpy(&c[144], pcf, sizeof(pcf));
    }

    // HD: the same states hdGI sets here (all re-sent by the client afterwards)
    device->SetDepthStencilSurface(nullptr); // the depth texture cannot be read while it is the depth buffer
    device->SetRenderState(D3DRS_ZENABLE, FALSE);
    device->SetRenderState(D3DRS_ZWRITEENABLE, FALSE);
    device->SetRenderState(D3DRS_ALPHATESTENABLE, FALSE);
    device->SetRenderState(D3DRS_ALPHABLENDENABLE, FALSE);
    device->SetRenderState(D3DRS_CULLMODE, D3DCULL_NONE);
    device->SetRenderState(D3DRS_FOGENABLE, FALSE);
    device->SetRenderState(D3DRS_SCISSORTESTENABLE, FALSE);
    device->SetRenderState(D3DRS_CLIPPLANEENABLE, 0);
    device->SetRenderState(D3DRS_SRGBWRITEENABLE, FALSE);
    device->SetRenderState(D3DRS_COLORWRITEENABLE, 0x0F);
    device->SetVertexShader(nullptr);
    device->SetFVF(D3DFVF_XYZRHW);
    device->SetTexture(0, depth.texture);
    for (DWORD i = 0; i < 2; i++) {
        device->SetSamplerState(i, D3DSAMP_MINFILTER, D3DTEXF_POINT);
        device->SetSamplerState(i, D3DSAMP_MAGFILTER, D3DTEXF_POINT);
        device->SetSamplerState(i, D3DSAMP_MIPFILTER, D3DTEXF_NONE);
        device->SetSamplerState(i, D3DSAMP_ADDRESSU, D3DTADDRESS_CLAMP);
        device->SetSamplerState(i, D3DSAMP_ADDRESSV, D3DTADDRESS_CLAMP);
        device->SetSamplerState(i, D3DSAMP_SRGBTEXTURE, FALSE);
    }
    for (DWORD i = 0; i < 3; i++) {
        // HD: as hdFog: a D24 map is filtered (the hardware compare then gives soft edges); R32F distances are not
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
    Pass(device, s_mask[1].surf, PS_Visibility, nullptr, desc.Width, desc.Height); // HD (v3): the shadow maps' answer first
    Pass(device, s_mask[0].surf, PS_Generate, s_mask[1].tex, desc.Width, desc.Height);
    c[20] = 1.0f / desc.Width; c[21] = 0.0f;
    device->SetPixelShaderConstantF(5, &c[20], 1);
    Pass(device, s_mask[1].surf, PS_Blur, s_mask[0].tex, desc.Width, desc.Height);
    c[20] = 0.0f; c[21] = 1.0f / desc.Height;
    device->SetPixelShaderConstantF(5, &c[20], 1);
    Pass(device, s_mask[0].surf, PS_Blur, s_mask[1].tex, desc.Width, desc.Height);

    // HD: the world's colour times what is left of its light (blend: colour * source); the test views write the
    // shadow alone; the alpha (glow mask) is kept
    device->SetRenderState(D3DRS_COLORWRITEENABLE, D3DCOLORWRITEENABLE_RED | D3DCOLORWRITEENABLE_GREEN | D3DCOLORWRITEENABLE_BLUE);
    if (!debug) {
        device->SetRenderState(D3DRS_ALPHABLENDENABLE, TRUE);
        device->SetRenderState(D3DRS_SEPARATEALPHABLENDENABLE, FALSE);
        device->SetRenderState(D3DRS_BLENDOP, D3DBLENDOP_ADD);
        device->SetRenderState(D3DRS_SRCBLEND, D3DBLEND_ZERO);
        device->SetRenderState(D3DRS_DESTBLEND, D3DBLEND_SRCCOLOR);
    }
    Pass(device, color, PS_Apply, s_mask[0].tex, desc.Width, desc.Height);
    device->SetTexture(0, nullptr);
    for (DWORD i = 2; i < 5; i++) device->SetTexture(i, nullptr);
    device->SetRenderState(D3DRS_ALPHABLENDENABLE, FALSE);
    device->SetRenderState(D3DRS_COLORWRITEENABLE, 0x0F);

    // the world's targets back (SetRenderTarget reset the viewport and the scissor rectangle)
    device->SetRenderTarget(0, color);
    device->SetDepthStencilSurface(worldDepth);
    color->Release();
    if (worldDepth) worldDepth->Release();
    // HD: the client turns the depth test on once at start-up and never again (see HdFog.cpp)
    device->SetRenderState(D3DRS_ZENABLE, D3DZB_TRUE);
    CGxDeviceD3d* gx = static_cast<CGxDeviceD3d*>(g_theGxDevicePtr);
    gx->m_viewportDirty = 1;
    gx->m_scissorRectDirty = 1;
    HD::FogInvalidateClientState();
    // HD: our constants go past the c0..c33 hdFog marks: make the client send c34..c37 again too
    ShadowConstants& ps = CGxDevice::s_shadowConstants[0];
    ps.dirtyMin = 0;
    if (ps.dirtyMax < kConstRegs - 1) ps.dirtyMax = kConstRegs - 1;
    char text[160];
    snprintf(text, sizeof(text), "on%s, shadow maps %s, ground shadow %s, characters %s, v4",
             debug == 2 ? ", test view (hdContactShadowDebug 2)" : (debug ? ", test view (hdContactShadowDebug 1)" : ""),
             shadows ? (depthCompare ? "D24" : "R32F") : "none (shadow quality below high: no check)",
             forever ? "Forever (ambient)" : "3.3.5 (70%)",
             (s_units && s_units->m_intValue) ? "cast too" : "receive only");
    SetInfo(text);
}

void HD::ContactShadowReleaseDeviceResources() {
    ReleaseTargets();
    ReleaseShaders();
}
