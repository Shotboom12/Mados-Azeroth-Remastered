// HD: Waystone HD screen-space GI, one colour bounce (see HdGI.h). Written for this client on the frame of hdAO; the
// order of the raw D3D9 work and the state reset afterwards are the ones hdWater's depth pass uses in the same place
// of the frame (HdWater.cpp LineariseDepth), which is known to work in game: no Get* of render states and no state
// block, because the client makes a PURE device (CGxDeviceD3d::ICreateD3dDevice), where Direct3D does not promise
// either.
#include "WoW/Source/WorldClient/HD/HdGI.h"
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
#include "WoW/Source/WorldClient/DayNight__DNInfo.h" // HD: the ambient light now (follows hdTime)
#include "WoW/Source/WorldClient/HD/HdFog.h"

namespace {
    // HD: checked with d3dcompiler_47 (ps_3_0, optimisation level 3, as below): Generate 238 instruction slots,
    // Blur 143, Apply 44 (ps_3_0 guarantees 512).
    const char kShader[] = R"HLSL(// Waystone HD screen-space GI (ps_3_0, D3D9). Three entry points over the whole world target:
//   Generate: the light bounced once onto this pixel by what is around it on screen (8 samples in 3D, in the half
//             sphere over the normal rebuilt from the depth), linear colour
//   Blur:     5-tap blur that stops at depth edges (run twice: across, then down)
//   Apply:    the world's colour with the bounce added, in linear: colour + albedo * bounce * strength
// HD: the bounce is what the surfaces around send beyond the client's ambient light: the ambient term of the image
// already stands for an average light coming from all around (sky and ground), so only the part of a neighbour's
// light above that ambient is added (counted once). At night the ambient and the surfaces are both dark: nothing is
// added, except next to surfaces that are lit more than the ambient (torch-lit walls, lit windows, the sunlit side at
// dawn). Nothing is taken away either (the part below the ambient would darken corners, an ambient occlusion).
// The world depth is hdFog's INTZ copy of the client's depth buffer (HD::FogGetWorldDepth); the colours are a copy of
// the world target as drawn so far (HD::FogCopyWorldColor).
sampler2D DepthTex : register(s0); // INTZ world depth, point, clamp
sampler2D GITex    : register(s1); // the bounce (rgb), point, clamp
sampler2D SceneTex : register(s2); // the world drawn so far (gamma), point, clamp
float4 cScreen : register(c0); // 1/width, 1/height of the target, depth scale A, depth offset B (z01 = raw * A + B)
float4 cView   : register(c1); // view xy = (local uv * xy + zw) * view z  (from projection a0, b1, c0, c1)
float4 cRect   : register(c2); // world viewport in target uv: offset xy, 1 / size zw
float4 cDepth  : register(c3); // projection c2, -d2, sky threshold, unused
float4 cParams : register(c4); // radius (yards), strength, debug (1 = test view), blur sharpness (1/yards)
float4 cBlur   : register(c5); // blur step in uv (xy), fade start (yards), 1 / fade length
float4 cLight  : register(c6); // HD: rgb = the client's ambient light now (DayNight, linear), a = brightest albedo

// View-space position of the surface seen at uv (camera at 0, +z forward), w = 1; w = 0 for the sky and for
// pixels outside the world viewport.
float4 ViewPos(float2 uv)
{
    float2 local = (uv - cRect.xy) * cRect.zw;
    float raw = tex2Dlod(DepthTex, float4(uv, 0, 0)).r;
    float z01 = raw * cScreen.z + cScreen.w;           // back to the projection's 0..1 (world uses 0..0.94)
    float z = cDepth.y / max(cDepth.x - z01, 1e-7);    // zv = d2 / (z01 - c2)
    bool inside = all(local == saturate(local));
    float w = (inside && z01 < cDepth.z) ? 1.0 : 0.0;
    return float4((local * cView.xy + cView.zw) * z, z, w);
}

// Where a view-space point (in front of the eye) is in the target (uv): ViewPos backwards
float2 TargetUv(float3 q)
{
    return ((q.xy / q.z - cView.zw) / cView.xy) / cRect.zw + cRect.xy;
}

// Interleaved gradient noise (Jimenez 2014): per-pixel rotation, removed by the blur.
float Noise(float2 vpos)
{
    return frac(52.9829189 * frac(dot(vpos, float2(0.06711056, 0.00583715))));
}

float4 Generate(float2 vpos : VPOS) : COLOR0
{
    float2 uv = (vpos + 0.5) * cScreen.xy;
    float4 c = ViewPos(uv);
    if (c.w < 0.5) return float4(0, 0, 0, 1);
    float3 p = c.xyz;

    // normal from the neighbours on the side closest in depth (does not bend across silhouettes)
    float4 l = ViewPos(uv - float2(cScreen.x, 0));
    float4 r = ViewPos(uv + float2(cScreen.x, 0));
    float4 u = ViewPos(uv - float2(0, cScreen.y));
    float4 d = ViewPos(uv + float2(0, cScreen.y));
    float3 dx = (abs(p.z - l.z) * l.w + (1.0 - l.w) * 1e9 < abs(r.z - p.z) * r.w + (1.0 - r.w) * 1e9) ? p - l.xyz : r.xyz - p;
    float3 dy = (abs(p.z - u.z) * u.w + (1.0 - u.w) * 1e9 < abs(d.z - p.z) * d.w + (1.0 - d.w) * 1e9) ? p - u.xyz : d.xyz - p;
    float3 n = cross(dx, dy);
    n = dot(n, n) > 1e-12 ? normalize(n) : -normalize(p);
    n = dot(n, p) > 0.0 ? -n : n;                        // facing the camera
    // a frame around the normal: the samples are spread over the surface, then lifted off it
    float3 t = normalize(cross(n, abs(n.y) < 0.9 ? float3(0, 1, 0) : float3(1, 0, 0)));
    float3 b = cross(n, t);

    float noise = Noise(vpos);
    float sa, ca;
    sincos(noise * 0.78539816, sa, ca);                  // the first direction turned by 0..45 degrees per pixel
    float scale = noise;
    float3 sum = 0.0;
    float cover = 0.0;                                   // HD: how much of the view around is taken by those surfaces
    [loop] for (int i = 0; i < 8; ++i) {
        scale = frac(scale + 0.618034);                  // 0.25..1 of the radius, below
        float3 s = p + ((t * ca + b * sa) * 0.8 + n * 0.6) * (cParams.x * (scale * 0.75 + 0.25));
        float2 uvS = TargetUv(float3(s.xy, max(s.z, 0.2)));
        float4 q = ViewPos(uvS);
        float3 v = q.xyz - p;
        float dist2 = max(dot(v, v), 1e-4);
        float facing = saturate(dot(n, v) * rsqrt(dist2));       // light arriving from the sample's direction
        float falloff = saturate(1.0 - dist2 / (cParams.x * cParams.x));
        float3 col = tex2Dlod(SceneTex, float4(uvS, 0, 0)).rgb;  // the surface seen there
        float wgt = facing * falloff * q.w;
        sum += col * col * wgt;                                  // gamma 2 to linear (cheap)
        cover += wgt;
        float c2 = ca * 0.70710678 - sa * 0.70710678;            // next direction, 45 degrees on
        sa = ca * 0.70710678 + sa * 0.70710678;
        ca = c2;
    }
    // 8 samples, cosine weighted: x 2 / 8. HD: minus the ambient the image already has from those directions
    float3 gi = max(sum - cLight.rgb * cover, 0.0) * 0.25;
    // fade out with distance (the depth gets coarse far away, and far scenery is already fogged)
    gi *= 1.0 - saturate((p.z - cBlur.z) * cBlur.w);
    return float4(sqrt(saturate(gi)), 1.0);                      // stored with gamma 2 (8-bit target)
}

float4 Blur(float2 vpos : VPOS) : COLOR0
{
    float2 uv = (vpos + 0.5) * cScreen.xy;
    float4 c = ViewPos(uv);
    if (c.w < 0.5) return float4(0, 0, 0, 1);
    float sharp = cParams.w / (1.0 + 0.02 * c.z);       // depth tolerance grows with distance
    float3 total = 0.0;
    float weights = 0.0;
    [unroll] for (int i = -2; i <= 2; ++i) {
        float2 tuv = uv + cBlur.xy * i;
        float4 q = ViewPos(tuv);
        const float spatial = (i == 0) ? 6.0 : ((i == -1 || i == 1) ? 4.0 : 1.0);
        float weight = spatial * exp2(-abs(q.z - c.z) * sharp) * q.w;
        total += tex2Dlod(GITex, float4(tuv, 0, 0)).rgb * weight;
        weights += weight;
    }
    return float4(total / max(weights, 1e-6), 1.0);
}

// HD: the receiving surface's own colour (albedo) is not kept by this renderer (it draws lit colours straight
// away). Estimate: its colour divided by the ambient light (exact for a surface lit by the ambient alone, the shaded
// side, where a bounce shows most), held at cLight.a of brightness at most (keeping its hue), which also covers the
// sunlit and torch-lit surfaces, whose colour is more than the ambient. Never a division by a light close to 0.
float4 Apply(float2 vpos : VPOS) : COLOR0
{
    float2 uv = (vpos + 0.5) * cScreen.xy;
    float3 g = tex2Dlod(GITex, float4(uv, 0, 0)).rgb;
    float3 gi = g * g;                                           // back to linear
    float3 c = tex2Dlod(SceneTex, float4(uv, 0, 0)).rgb;
    float3 lin = c * c;
    float lum = dot(lin, float3(0.2126, 0.7152, 0.0722));
    float3 albedo = lin / max(max(cLight.rgb, lum / cLight.a), 1e-4);
    float3 o = sqrt(lin + albedo * gi * cParams.y);             // the target is 8-bit gamma (no sRGB write)
    // test views: 1 = the bounce alone (x 4), 2 = the albedo estimate
    if (cParams.z > 0.5) o = sqrt(saturate(gi * 4.0));
    if (cParams.z > 1.5) o = sqrt(albedo);
    return float4(o, 1.0);
}
)HLSL";

    enum { PS_Generate, PS_Blur, PS_Apply, PS_Count };
    const char* const kEntry[PS_Count] = { "Generate", "Blur", "Apply" };
    const UINT kConstRegs = 7; // c0..c6 (HD::FogInvalidateClientState re-sends c0..c33)
    const float kSkyDepth = 0.99999f;
    const float kFadeStart = 150.0f; // yards: the bounce fades out from here...
    const float kFadeLength = 100.0f; // ...over this distance
    const float kMaxAlbedo = 0.5f; // HD: brightest albedo assumed for a receiving surface (linear; 0.71 in gamma)

    typedef HRESULT(WINAPI* D3DCompileFn)(LPCVOID, SIZE_T, LPCSTR, const D3D_SHADER_MACRO*, ID3DInclude*, LPCSTR, LPCSTR, UINT, UINT, ID3DBlob**, ID3DBlob**);

    struct Target {
        IDirect3DTexture9* tex = nullptr;
        IDirect3DSurface9* surf = nullptr;
    };

    CVar* s_enabled = nullptr;
    CVar* s_radius = nullptr;
    CVar* s_strength = nullptr;
    CVar* s_debug = nullptr;
    CVar* s_info = nullptr;
    char s_lastInfo[160] = "";

    std::vector<DWORD> s_code[PS_Count]; // compiled once; the shader objects are remade after a device reset
    bool s_compileFailed = false;
    IDirect3DPixelShader9* s_ps[PS_Count] = {};
    Target s_gi[2];
    UINT s_width = 0;
    UINT s_height = 0;

    void RegisterCVars() {
        static bool registered = false;
        if (registered) return;
        registered = true;
        s_enabled = CVar::Register("hdGI", "HD: 1 = screen-space global illumination (one colour bounce), 0 = off", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_radius = CVar::Register("hdGIRadius", "HD: bounce reach in yards, 4 = normal", 1, "4", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_strength = CVar::Register("hdGIStrength", "HD: bounce strength, 1 = normal", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_debug = CVar::Register("hdGIDebug", "HD: 1 = test view, the bounced light alone, 2 = test view, the surface colour estimate", 0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_info = CVar::Register("hdGIInfo", "HD: hdGI status (read only)", 0, "off", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
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
        for (Target& t : s_gi) {
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
        if (s_gi[0].surf && s_gi[1].surf && s_width == width && s_height == height) return true;
        ReleaseTargets();
        for (Target& t : s_gi) {
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
        if (s_ps[PS_Generate] && s_ps[PS_Blur] && s_ps[PS_Apply]) return true;
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
                HRESULT hr = compile(kShader, strlen(kShader), "HdGI", nullptr, nullptr, kEntry[i], "ps_3_0", D3DCOMPILE_OPTIMIZATION_LEVEL3, 0, &code, &errors);
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

    // The world viewport in pixels, as CGxDeviceD3d::IXformSetViewport sets it from the client's viewport.
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

    // One full-target pass. SetRenderTarget also sets the viewport to the whole target.
    void Pass(IDirect3DDevice9* device, IDirect3DSurface9* target, int shader, IDirect3DTexture9* gi, UINT width, UINT height) {
        device->SetRenderTarget(0, target);
        device->SetPixelShader(s_ps[shader]);
        device->SetTexture(1, gi);
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

bool HD::GIWantsDepth() {
    RegisterCVars();
    return s_enabled && s_enabled->m_intValue != 0;
}

void HD::GIRenderOpaque() {
    RegisterCVars();
    if (!s_enabled || !s_enabled->m_intValue) {
        // HD: off: no Direct3D call at all (only our own textures are let go, once)
        if (s_gi[0].tex || s_gi[1].tex) ReleaseTargets();
        SetInfo("off");
        return;
    }
    IDirect3DDevice9* device = Device();
    if (!device) { SetInfo("ERROR: needs gxApi d3d9"); return; }
    HD::FogWorldDepth depth;
    if (!HD::FogGetWorldDepth(&depth)) {
        SetInfo("no world depth (multisampling must be 1x, INTZ needed): GI skipped");
        return;
    }
    const C44Matrix& proj = g_theGxDevicePtr->m_projNative;
    // a perspective projection (zv = d2 / (z - c2), w = view z); anything else (orthographic views) is skipped
    if (proj.a0 == 0.0f || proj.b1 == 0.0f || proj.c3 != 1.0f || proj.d3 != 0.0f || !(proj.c2 > 0.0f) || !(proj.d2 < 0.0f) ||
        !(depth.vpMax > depth.vpMin)) {
        SetInfo("on, projection not supported this frame: GI skipped");
        return;
    }
    if (!EnsureShaders(device)) return;

    IDirect3DSurface9* color = nullptr;
    if (FAILED(device->GetRenderTarget(0, &color)) || !color) return;
    D3DSURFACE_DESC desc;
    color->GetDesc(&desc);
    if (desc.Width != depth.width || desc.Height != depth.height || desc.MultiSampleType != D3DMULTISAMPLE_NONE) {
        color->Release();
        SetInfo("on, world target and depth differ in size: GI skipped");
        return;
    }
    if (!EnsureTargets(device, desc.Width, desc.Height)) {
        color->Release();
        SetInfo("ERROR: GI render target not supported");
        return;
    }
    // the colours that bounce: the world as drawn so far (hdFog's scene texture, which hdWater fills again later)
    IDirect3DTexture9* scene = HD::FogCopyWorldColor(color, desc.Width, desc.Height);
    if (!scene) {
        color->Release();
        SetInfo("ERROR: GI scene copy failed: GI skipped");
        return;
    }
    IDirect3DSurface9* worldDepth = nullptr;
    device->GetDepthStencilSurface(&worldDepth);

    float vx, vy, vw, vh;
    WorldViewport(&vx, &vy, &vw, &vh);
    if (vw < 1.0f || vh < 1.0f) { vx = 0.0f; vy = 0.0f; vw = static_cast<float>(desc.Width); vh = static_cast<float>(desc.Height); }
    const float radius = CVarValue(s_radius, 4.0f, 0.5f, 12.0f);
    const float strength = CVarValue(s_strength, 1.0f, 0.0f, 4.0f);
    const int32_t debug = s_debug ? (s_debug->m_intValue < 0 ? 0 : (s_debug->m_intValue > 2 ? 2 : s_debug->m_intValue)) : 0;
    // HD: the client's ambient light this frame (CWorldScene's map light, m_light1: DayNight at the hdTime hour, after
    // the zone lights and the sun glare), made linear like the shader's colours (gamma 2)
    const CImVector& amb = DayNight::g_dnInfo.m_light1.m_ambient;
    const float ambR = amb.r * (1.0f / 255.0f), ambG = amb.g * (1.0f / 255.0f), ambB = amb.b * (1.0f / 255.0f);
    const float depthScale = 1.0f / (depth.vpMax - depth.vpMin);
    float c[kConstRegs * 4] = {
        1.0f / desc.Width, 1.0f / desc.Height, depthScale, -depth.vpMin * depthScale,
        2.0f / proj.a0, -2.0f / proj.b1, (-1.0f - proj.c0) / proj.a0, (1.0f - proj.c1) / proj.b1,
        vx / desc.Width, vy / desc.Height, desc.Width / vw, desc.Height / vh,
        proj.c2, -proj.d2, kSkyDepth, 0.0f,
        radius, strength, static_cast<float>(debug), 1.0f / (radius * 0.2f),
        0.0f, 0.0f, kFadeStart, 1.0f / kFadeLength,
        ambR * ambR, ambG * ambG, ambB * ambB, kMaxAlbedo,
    };

    // HD: the same states hdWater's depth pass sets here (all re-sent by the client afterwards), plus the blend
    device->SetDepthStencilSurface(nullptr); // the depth texture cannot be read while it is the depth buffer
    device->SetRenderState(D3DRS_ZENABLE, FALSE);
    device->SetRenderState(D3DRS_ZWRITEENABLE, FALSE);
    device->SetRenderState(D3DRS_ALPHATESTENABLE, FALSE);
    device->SetRenderState(D3DRS_ALPHABLENDENABLE, FALSE);
    device->SetRenderState(D3DRS_CULLMODE, D3DCULL_NONE);
    device->SetRenderState(D3DRS_FOGENABLE, FALSE);
    device->SetRenderState(D3DRS_SCISSORTESTENABLE, FALSE);
    device->SetRenderState(D3DRS_CLIPPLANEENABLE, 0);
    device->SetRenderState(D3DRS_COLORWRITEENABLE, 0x0F);
    device->SetVertexShader(nullptr);
    device->SetFVF(D3DFVF_XYZRHW);
    device->SetTexture(0, depth.texture);
    device->SetTexture(2, scene);
    for (DWORD i = 0; i < 3; i++) {
        device->SetSamplerState(i, D3DSAMP_MINFILTER, D3DTEXF_POINT);
        device->SetSamplerState(i, D3DSAMP_MAGFILTER, D3DTEXF_POINT);
        device->SetSamplerState(i, D3DSAMP_MIPFILTER, D3DTEXF_NONE);
        device->SetSamplerState(i, D3DSAMP_ADDRESSU, D3DTADDRESS_CLAMP);
        device->SetSamplerState(i, D3DSAMP_ADDRESSV, D3DTADDRESS_CLAMP);
    }
    device->SetPixelShaderConstantF(0, c, kConstRegs);
    Pass(device, s_gi[0].surf, PS_Generate, nullptr, desc.Width, desc.Height);
    c[20] = 1.0f / desc.Width; c[21] = 0.0f;
    device->SetPixelShaderConstantF(5, &c[20], 1);
    Pass(device, s_gi[1].surf, PS_Blur, s_gi[0].tex, desc.Width, desc.Height);
    c[20] = 0.0f; c[21] = 1.0f / desc.Height;
    device->SetPixelShaderConstantF(5, &c[20], 1);
    Pass(device, s_gi[0].surf, PS_Blur, s_gi[1].tex, desc.Width, desc.Height);

    // HD: the world's colour written again with the bounce in it (Apply reads the copy, s2; no blending: was
    // dst + dst * bounce, which scaled the bounce by the light the surface already had, so shaded surfaces got
    // almost none); the alpha (glow mask) is kept
    device->SetRenderState(D3DRS_COLORWRITEENABLE, D3DCOLORWRITEENABLE_RED | D3DCOLORWRITEENABLE_GREEN | D3DCOLORWRITEENABLE_BLUE);
    Pass(device, color, PS_Apply, s_gi[0].tex, desc.Width, desc.Height);
    device->SetTexture(0, nullptr);
    device->SetTexture(2, nullptr);
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
    SetInfo(debug == 2 ? "on, test view (hdGIDebug 2)" : (debug ? "on, test view (hdGIDebug 1)" : "on"));
}

void HD::GIReleaseDeviceResources() {
    ReleaseTargets();
    ReleaseShaders();
}
