#include "WoW/Source/WorldClient/HD/HdBloom.h"
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
#include "WoW/Source/WorldClient/HD/HdFog.h"

namespace {
    // Pixel shader registers c0..c3 (see kShader).
    const UINT kConstRegs = 4;

    // HD: one source, one entry point per pass. Every pass draws a full-screen quad into a smaller target:
    // bright parts -> blur (quarter and eighth size) for the halo, bright sky near the sun -> blur toward the
    // sun for the rays, then everything is added over the world with a "screen" blend (never brighter than white).
    const char* kShader = R"HLSL(
sampler2D tex0 : register(s0);
sampler2D tex1 : register(s1);
sampler2D tex2 : register(s2);
float4 c_target : register(c0); // 1/width, 1/height of the target being drawn
float4 c_a      : register(c1); // per pass, see each entry point
float4 c_b      : register(c2);
float4 c_c      : register(c3);

float2 UV(float2 vpos) { return (vpos + 0.5) * c_target.xy; }

float3 Box4(float2 uv, float2 texel) {
    return (tex2D(tex0, uv + texel * float2(-1, -1)).rgb + tex2D(tex0, uv + texel * float2(1, -1)).rgb +
            tex2D(tex0, uv + texel * float2(-1, 1)).rgb + tex2D(tex0, uv + texel * float2(1, 1)).rgb) * 0.25;
}

// bright parts only, shrunk. c_a.xy = source texel, c_b.x = threshold, c_b.y = soft knee
float4 Bright(float2 vpos : VPOS) : COLOR0 {
    float3 c = Box4(UV(vpos), c_a.xy);
    float l = max(c.r, max(c.g, c.b));
    float k = c_b.y;
    float soft = clamp(l - c_b.x + k, 0.0, 2.0 * k);
    soft = soft * soft / (4.0 * k + 1e-4);
    return float4(c * (max(soft, l - c_b.x) / max(l, 1e-4)), 1);
}

// shrink. c_a.xy = source texel
float4 Down(float2 vpos : VPOS) : COLOR0 {
    return float4(Box4(UV(vpos), c_a.xy), 1);
}

// 9 tap gaussian in one direction (5 filtered taps). c_a.xy = step
float4 Blur(float2 vpos : VPOS) : COLOR0 {
    float2 uv = UV(vpos);
    float3 c = tex2D(tex0, uv).rgb * 0.2270270;
    c += (tex2D(tex0, uv + c_a.xy * 1.3846154).rgb + tex2D(tex0, uv - c_a.xy * 1.3846154).rgb) * 0.3162162;
    c += (tex2D(tex0, uv + c_a.xy * 3.2307692).rgb + tex2D(tex0, uv - c_a.xy * 3.2307692).rgb) * 0.0702703;
    return float4(c, 1);
}

// where rays start: bright sky around the sun. tex0 = world (half size), tex1 = world depth.
// c_a.xy = sun position on screen, c_a.z = width / height, c_a.w = radius; c_b.x = threshold, c_b.y = far clip;
// c_c = world viewport depth min, max, projection c2, d2
float4 RayMask(float2 vpos : VPOS) : COLOR0 {
    float2 uv = UV(vpos);
    // HD: same sky test as the fog: nothing drawn, or at the far clip (the sky dome is drawn there, ~0.94)
    float raw = tex2D(tex1, uv).r;
    float z = saturate((raw - c_c.x) / max(c_c.y - c_c.x, 1e-4));
    float denom = z - c_c.z;
    float zv = abs(c_c.w / (abs(denom) < 1e-7 ? 1e-7 : denom));
    float sky = (raw >= 0.99999 || zv >= c_b.y * 0.98) ? 1.0 : 0.0;
    float3 c = tex2D(tex0, uv).rgb;
    float fall = saturate(1.0 - length((uv - c_a.xy) * float2(c_a.z, 1.0)) / c_a.w);
    float l = max(c.r, max(c.g, c.b));
    float b = saturate((l - c_b.x) / max(1.0 - c_b.x, 1e-3));
    return float4(c * (sky * fall * fall * (0.25 + 0.75 * b)), 1);
}

// rays: average along the line toward the sun. c_a.xy = sun position, c_a.z = length, c_a.w = decay;
// c_b.x = exposure
float4 Radial(float2 vpos : VPOS) : COLOR0 {
    float2 uv = UV(vpos);
    float2 stepUv = (uv - c_a.xy) * (c_a.z / 48.0);
    float3 sum = 0.0;
    float w = 1.0;
    float total = 0.0;
    [loop] for (int i = 0; i < 48; i++) {
        sum += tex2D(tex0, uv).rgb * w;
        total += w;
        uv -= stepUv;
        w *= c_a.w;
    }
    return float4(sum / total * c_b.x, 1);
}

// over the world. tex0 = halo, tex1 = wide halo, tex2 = rays. c_a.x = halo strength, c_a.y = rays strength,
// c_a.z = hdBloomDebug; c_b.xy = sun position, c_b.z = width / height
float4 Composite(float2 vpos : VPOS) : COLOR0 {
    float2 uv = UV(vpos);
    float3 halo = (tex2D(tex0, uv).rgb * 0.6 + tex2D(tex1, uv).rgb * 0.8) * c_a.x;
    float3 rays = tex2D(tex2, uv).rgb * c_a.y;
    if (c_a.z > 0.5) {
        // HD: test views (drawn opaque): 1 = where rays start (x4), 2 = rays only, 3 = halo only; red dot = sun
        float3 col = c_a.z > 2.5 ? halo : (c_a.z > 1.5 ? rays : tex2D(tex2, uv).rgb * 4.0);
        if (length((uv - c_b.xy) * float2(c_b.z, 1.0)) < 0.012) col = float3(1, 0, 0);
        return float4(saturate(col), 1);
    }
    return float4(saturate(halo + rays), 1);
}
)HLSL";

    enum { PS_Bright, PS_Down, PS_Blur, PS_RayMask, PS_Radial, PS_Composite, PS_Count };
    const char* const kEntry[PS_Count] = { "Bright", "Down", "Blur", "RayMask", "Radial", "Composite" };

    typedef HRESULT(WINAPI* D3DCompileFn)(LPCVOID, SIZE_T, LPCSTR, const D3D_SHADER_MACRO*, ID3DInclude*, LPCSTR, LPCSTR, UINT, UINT, ID3DBlob**, ID3DBlob**);

    struct Target {
        IDirect3DTexture9* tex = nullptr;
        IDirect3DSurface9* surf = nullptr;
        UINT w = 0;
        UINT h = 0;
    };

    CVar* s_bloom = nullptr;
    CVar* s_strength = nullptr;
    CVar* s_threshold = nullptr;
    CVar* s_rays = nullptr;
    CVar* s_raysStrength = nullptr;
    CVar* s_debug = nullptr;
    CVar* s_info = nullptr;

    IDirect3DPixelShader9* s_ps[PS_Count] = {};
    bool s_shaderFailed = false;
    Target s_half;    // the world, half size
    Target s_quarter[2];
    Target s_eighth[2];
    Target s_rays2[2]; // quarter size
    UINT s_width = 0;
    UINT s_height = 0;
    char s_lastInfo[256] = "";

    void RegisterCVars() {
        static bool registered = false;
        if (registered) return;
        registered = true;
        s_bloom = CVar::Register("hdBloom", "HD: 1 = halo around bright parts of the world", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_strength = CVar::Register("hdBloomStrength", "HD: halo strength, 1 = normal", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_threshold = CVar::Register("hdBloomThreshold", "HD: how bright a pixel must be to glow (0 to 1)", 1, "0.7", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_rays = CVar::Register("hdRays", "HD: 1 = sun rays", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_raysStrength = CVar::Register("hdRaysStrength", "HD: sun rays strength, 1 = normal", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_debug = CVar::Register("hdBloomDebug", "HD: test view, 1 = where rays start, 2 = rays only, 3 = halo only", 0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_info = CVar::Register("hdBloomInfo", "HD: hdBloom status (read only)", 0, "off", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    }

    void SetInfo(const char* text) {
        if (!s_info || !strcmp(s_lastInfo, text)) return;
        snprintf(s_lastInfo, sizeof(s_lastInfo), "%s", text);
        s_info->Set(text, true, false, false, false);
    }

    float Clamp(float v, float lo, float hi) {
        return v < lo ? lo : (v > hi ? hi : v);
    }

    float CVarValue(CVar* cvar, float fallback, float hi) {
        return cvar ? Clamp(cvar->m_floatValue, 0.0f, hi) : fallback;
    }

    IDirect3DDevice9* Device() {
        if (!g_theGxDevicePtr || g_theGxDevicePtr->DeviceApi() != GxApi_D3d9) return nullptr;
        return static_cast<CGxDeviceD3d*>(g_theGxDevicePtr)->m_d3dDevice;
    }

    void ReleaseTarget(Target& t) {
        if (t.surf) { t.surf->Release(); t.surf = nullptr; }
        if (t.tex) { t.tex->Release(); t.tex = nullptr; }
        t.w = 0;
        t.h = 0;
    }

    void ReleaseTargets() {
        ReleaseTarget(s_half);
        for (int i = 0; i < 2; i++) {
            ReleaseTarget(s_quarter[i]);
            ReleaseTarget(s_eighth[i]);
            ReleaseTarget(s_rays2[i]);
        }
        s_width = 0;
        s_height = 0;
    }

    bool CreateTarget(IDirect3DDevice9* device, Target& t, UINT w, UINT h, D3DFORMAT format) {
        if (w < 1) w = 1;
        if (h < 1) h = 1;
        if (FAILED(device->CreateTexture(w, h, 1, D3DUSAGE_RENDERTARGET, format, D3DPOOL_DEFAULT, &t.tex, nullptr)) || !t.tex) {
            t.tex = nullptr;
            return false;
        }
        t.tex->GetSurfaceLevel(0, &t.surf);
        t.w = w;
        t.h = h;
        return t.surf != nullptr;
    }

    bool CreateTargets(IDirect3DDevice9* device, UINT w, UINT h) {
        ReleaseTargets();
        bool ok = CreateTarget(device, s_half, w / 2, h / 2, D3DFMT_A8R8G8B8);
        for (int i = 0; i < 2 && ok; i++) {
            ok = CreateTarget(device, s_quarter[i], w / 4, h / 4, D3DFMT_A16B16G16R16F)
                && CreateTarget(device, s_eighth[i], w / 8, h / 8, D3DFMT_A16B16G16R16F)
                && CreateTarget(device, s_rays2[i], w / 4, h / 4, D3DFMT_A16B16G16R16F);
        }
        if (!ok) {
            ReleaseTargets();
            return false;
        }
        s_width = w;
        s_height = h;
        return true;
    }

    bool EnsureShaders(IDirect3DDevice9* device) {
        if (s_ps[PS_Count - 1]) return true;
        if (s_shaderFailed) return false;
        s_shaderFailed = true;

        HMODULE module = LoadLibraryA("d3dcompiler_47.dll");
        D3DCompileFn compile = module ? reinterpret_cast<D3DCompileFn>(GetProcAddress(module, "D3DCompile")) : nullptr;
        if (!compile) {
            SetInfo("ERROR: d3dcompiler_47.dll not found");
            return false;
        }
        for (int i = 0; i < PS_Count; i++) {
            ID3DBlob* code = nullptr;
            ID3DBlob* errors = nullptr;
            HRESULT hr = compile(kShader, strlen(kShader), "HdBloom", nullptr, nullptr, kEntry[i], "ps_3_0", D3DCOMPILE_OPTIMIZATION_LEVEL3, 0, &code, &errors);
            if (FAILED(hr) || !code) {
                char text[256];
                snprintf(text, sizeof(text), "ERROR: shader %s: %s", kEntry[i], errors ? static_cast<const char*>(errors->GetBufferPointer()) : "unknown");
                SetInfo(text);
                if (errors) errors->Release();
                if (code) code->Release();
                return false;
            }
            if (errors) errors->Release();
            hr = device->CreatePixelShader(static_cast<const DWORD*>(code->GetBufferPointer()), &s_ps[i]);
            code->Release();
            if (FAILED(hr)) {
                s_ps[i] = nullptr;
                SetInfo("ERROR: CreatePixelShader failed");
                return false;
            }
        }
        s_shaderFailed = false;
        return true;
    }

    // One full-screen pass into dst. a and b go to c1 and c2.
    void Pass(IDirect3DDevice9* device, int ps, IDirect3DSurface9* dst, UINT w, UINT h,
              IDirect3DBaseTexture9* t0, IDirect3DBaseTexture9* t1, IDirect3DBaseTexture9* t2,
              float a0, float a1, float a2, float a3, float b0 = 0.0f, float b1 = 0.0f, float b2 = 0.0f,
              const float* cc = nullptr) {
        device->SetRenderTarget(0, dst); // also sets the viewport to the whole target
        float c[kConstRegs * 4] = {
            1.0f / w, 1.0f / h, 0.0f, 0.0f,
            a0, a1, a2, a3,
            b0, b1, b2, 0.0f,
            cc ? cc[0] : 0.0f, cc ? cc[1] : 0.0f, cc ? cc[2] : 0.0f, cc ? cc[3] : 0.0f,
        };
        device->SetPixelShader(s_ps[ps]);
        device->SetPixelShaderConstantF(0, c, kConstRegs);
        device->SetTexture(0, t0);
        device->SetTexture(1, t1);
        device->SetTexture(2, t2);
        float fw = static_cast<float>(w) - 0.5f;
        float fh = static_cast<float>(h) - 0.5f;
        float quad[16] = {
            -0.5f, -0.5f, 0.0f, 1.0f,
            fw, -0.5f, 0.0f, 1.0f,
            -0.5f, fh, 0.0f, 1.0f,
            fw, fh, 0.0f, 1.0f,
        };
        device->DrawPrimitiveUP(D3DPT_TRIANGLESTRIP, 2, quad, 4 * sizeof(float));
    }

    void Blur2(IDirect3DDevice9* device, Target* t, float spread) {
        Pass(device, PS_Blur, t[1].surf, t[1].w, t[1].h, t[0].tex, nullptr, nullptr, spread / t[0].w, 0.0f, 0.0f, 0.0f);
        Pass(device, PS_Blur, t[0].surf, t[0].w, t[0].h, t[1].tex, nullptr, nullptr, 0.0f, spread / t[1].h, 0.0f, 0.0f);
    }

    void SetSampler(IDirect3DDevice9* device, DWORD stage, D3DTEXTUREFILTERTYPE filter) {
        device->SetSamplerState(stage, D3DSAMP_MINFILTER, filter);
        device->SetSamplerState(stage, D3DSAMP_MAGFILTER, filter);
        device->SetSamplerState(stage, D3DSAMP_MIPFILTER, D3DTEXF_NONE);
        device->SetSamplerState(stage, D3DSAMP_ADDRESSU, D3DTADDRESS_CLAMP);
        device->SetSamplerState(stage, D3DSAMP_ADDRESSV, D3DTADDRESS_CLAMP);
        device->SetSamplerState(stage, D3DSAMP_SRGBTEXTURE, FALSE);
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
}

bool HD::BloomWantsDepth() {
    RegisterCVars();
    return s_rays && s_rays->m_intValue;
}

void HD::BloomWorld() {
    RegisterCVars();
    bool bloom = s_bloom && s_bloom->m_intValue;
    bool rays = s_rays && s_rays->m_intValue;
    if (!bloom && !rays) {
        if (s_half.tex) ReleaseTargets();
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
    if (!EnsureShaders(device)) return;

    IDirect3DSurface9* target = nullptr;
    if (FAILED(device->GetRenderTarget(0, &target)) || !target) return;
    D3DSURFACE_DESC desc;
    target->GetDesc(&desc);
    if ((desc.Width != s_width || desc.Height != s_height || !s_half.tex) && !CreateTargets(device, desc.Width, desc.Height)) {
        target->Release();
        SetInfo("ERROR: could not create the bloom textures");
        return;
    }

    // HD: the sun rays need the world depth and where the sun is (both from HdFog)
    HD::FogPostFrame post;
    memset(&post, 0, sizeof(post));
    int32_t debug = s_debug ? s_debug->m_intValue : 0;
    bool havePost = HD::FogGetPostFrame(&post);
    // HD: in the test views the rays are drawn even when the sun is off screen (to see where it is)
    bool haveRays = rays && havePost && (post.sunVisible > 0.001f || debug > 0);

    if (!bloom && !haveRays) {
        target->Release();
        SetInfo("on, rays: no sun on screen");
        return;
    }

    D3DVIEWPORT9 viewport;
    device->GetViewport(&viewport);
    IDirect3DSurface9* depth = nullptr;
    device->GetDepthStencilSurface(&depth);
    // no depth while we draw: the world depth texture is read by the rays
    device->SetDepthStencilSurface(nullptr);

    device->StretchRect(target, nullptr, s_half.surf, nullptr, D3DTEXF_LINEAR);

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
    device->SetRenderState(D3DRS_COLORWRITEENABLE, 0x0F);
    device->SetVertexShader(nullptr);
    device->SetFVF(D3DFVF_XYZRHW);
    for (DWORD i = 0; i < 3; i++) SetSampler(device, i, D3DTEXF_LINEAR);

    float threshold = CVarValue(s_threshold, 0.7f, 1.0f);
    if (bloom) {
        float knee = threshold * 0.5f > 0.05f ? threshold * 0.5f : 0.05f;
        Pass(device, PS_Bright, s_quarter[0].surf, s_quarter[0].w, s_quarter[0].h, s_half.tex, nullptr, nullptr,
             1.0f / s_half.w, 1.0f / s_half.h, 0.0f, 0.0f, threshold, knee);
        Blur2(device, s_quarter, 1.0f);
        Blur2(device, s_quarter, 2.0f);
        Pass(device, PS_Down, s_eighth[0].surf, s_eighth[0].w, s_eighth[0].h, s_quarter[0].tex, nullptr, nullptr,
             1.0f / s_quarter[0].w, 1.0f / s_quarter[0].h, 0.0f, 0.0f);
        Blur2(device, s_eighth, 1.0f);
        Blur2(device, s_eighth, 2.0f);
    }
    if (haveRays) {
        SetSampler(device, 1, D3DTEXF_POINT);
        float aspect = static_cast<float>(desc.Width) / static_cast<float>(desc.Height);
        float depthRange[4] = { post.vpMin, post.vpMax, post.projC2, post.projD2 };
        Pass(device, PS_RayMask, s_rays2[0].surf, s_rays2[0].w, s_rays2[0].h, s_half.tex, post.depth, nullptr,
             post.sunU, post.sunV, aspect, 0.6f, 0.5f, post.farClip, 0.0f, depthRange);
        SetSampler(device, 1, D3DTEXF_LINEAR);
        Pass(device, PS_Radial, s_rays2[1].surf, s_rays2[1].w, s_rays2[1].h, s_rays2[0].tex, nullptr, nullptr,
             post.sunU, post.sunV, 0.9f, 0.97f, 1.5f);
    }

    // Over the world with a screen blend: src + dst * (1 - src). Keep alpha (used by the glow).
    IDirect3DBaseTexture9* halo = bloom ? s_quarter[0].tex : s_rays2[1].tex;
    IDirect3DBaseTexture9* wide = bloom ? s_eighth[0].tex : s_rays2[1].tex;
    IDirect3DBaseTexture9* rayTex = haveRays ? s_rays2[debug == 1 ? 0 : 1].tex : halo;
    float haloStrength = bloom ? CVarValue(s_strength, 1.0f, 5.0f) : 0.0f;
    float rayStrength = haveRays ? CVarValue(s_raysStrength, 1.0f, 5.0f) * (debug > 0 ? 1.0f : post.sunVisible) : 0.0f;
    float aspectRatio = static_cast<float>(desc.Width) / static_cast<float>(desc.Height);
    device->SetRenderState(D3DRS_ALPHABLENDENABLE, debug > 0 ? FALSE : TRUE);
    device->SetRenderState(D3DRS_SRCBLEND, D3DBLEND_ONE);
    device->SetRenderState(D3DRS_DESTBLEND, D3DBLEND_INVSRCCOLOR);
    device->SetRenderState(D3DRS_BLENDOP, D3DBLENDOP_ADD);
    device->SetRenderState(D3DRS_COLORWRITEENABLE, D3DCOLORWRITEENABLE_RED | D3DCOLORWRITEENABLE_GREEN | D3DCOLORWRITEENABLE_BLUE);
    Pass(device, PS_Composite, target, desc.Width, desc.Height, halo, wide, rayTex, haloStrength, rayStrength,
         static_cast<float>(debug), 0.0f, post.sunU, post.sunV, aspectRatio);

    for (DWORD i = 0; i < 3; i++) device->SetTexture(i, nullptr);
    device->SetRenderState(D3DRS_COLORWRITEENABLE, 0x0F);
    device->SetRenderState(D3DRS_ALPHABLENDENABLE, FALSE);
    // HD: the client turns the depth buffer on once at start-up and never again (see HdFog.cpp)
    device->SetRenderState(D3DRS_ZENABLE, D3DZB_TRUE);
    device->SetDepthStencilSurface(depth);
    device->SetViewport(&viewport);
    if (depth) depth->Release();
    target->Release();
    InvalidateClientState();

    char text[256];
    if (rays && !havePost) snprintf(text, sizeof(text), "on%s, rays: no world depth this frame", bloom ? ", bloom" : "");
    else if (rays && !haveRays) snprintf(text, sizeof(text), "on%s, rays: no sun on screen", bloom ? ", bloom" : "");
    else snprintf(text, sizeof(text), "on%s%s", bloom ? ", bloom" : "", haveRays ? ", rays" : "");
    if (havePost) {
        size_t len = strlen(text);
        snprintf(text + len, sizeof(text) - len, " (sun %.2f %.2f, %.2f) %s", post.sunU, post.sunV, post.sunVisible, post.diag);
    }
    SetInfo(text);
}

void HD::BloomReleaseDeviceResources() {
    ReleaseTargets();
}
