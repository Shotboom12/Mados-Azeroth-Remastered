// HD: Waystone HD water ripples (see HdWaterRipples.h). The raw D3D9 pass and the state reset after it are the ones
// hdWater's depth pass uses at the same place (HdWater.cpp LineariseDepth).
// HD: 2026-10-25 fix: the first version looped over the ripples in one pass; d3dcompiler_47 turned the looped
// constant reads into compare chains and took about 13 s to compile it, on the render thread at the first contact
// with water (Windows: "not responding"). Now one square per ripple with additive blending (48 slots, compiled in
// well under a second), and the shader is made at the first liquid pass, not at the first ripple.
#include "WoW/Source/WorldClient/HD/HdWaterRipples.h"
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
#include "WoW/Source/WorldClient/WaterRipple.h"
#include "WoW/Source/WorldClient/World.h"
#include "WoW/Source/WorldClient/HD/HdFog.h"
#include "WoW/Source/WorldClient/HD/HdWaterWaves.h"

namespace {
    // HD: checked with d3dcompiler_47 (ps_3_0, optimisation level 3): 48 instruction slots (ps_3_0 guarantees 512)
    const char kShader[] = R"HLSL(// Waystone HD water ripples (ps_3_0): every live 3.3.5 ripple (WaterRipple.cpp: units walking, swimming, turning or
// entering the water) is drawn as one square into a top-down texture centred on the camera and adds a ring of small
// waves there; additive blending sums the rings. No loop: the shader sees one ripple at a time.
// Signed slopes in an 8-bit texture: r = +dh/dx, g = -dh/dx, b = +dh/dy, a = -dh/dy (x 2, calm water = 0).
float4 cArea : register(c0);          // x = strength, y = half the area (yards)

float4 main(float4 iLocal : TEXCOORD0, float4 iRipple : TEXCOORD1, float4 iDir : TEXCOORD2) : COLOR0
{
    // iLocal.xy = this texel from the ripple's centre (yards), zw = from the area's centre;
    // iRipple = ring radius, alpha, packet width, 1 = directional (wake); iDir.xy = the unit's forward direction
    float2 d = iLocal.xy;
    float r = max(length(d), 1e-4);
    float w = iRipple.z;
    float x = (r - iRipple.x) / w;                       // across the packet, in packet widths
    float env = exp2(-1.4427 * x * x) * iRipple.y;
    // directional ripples (moving): mostly ahead and to the sides, the trailing arcs make the wake
    env *= lerp(1.0, saturate(0.35 + 0.65 * dot(d / r, iDir.xy)), iRipple.w);
    float k = 6.2831853 / (w * 1.6);                     // about two crests per packet
    float sn, cs;
    sincos(k * (r - iRipple.x), sn, cs);
    float s = env * (-2.0 * x / w * cs - k * sn);
    // fade out at the area's edge (the texture is clamped beyond it)
    float edge = saturate((cArea.y - max(abs(iLocal.z), abs(iLocal.w))) * 0.5);
    float2 slope = s * d / r * (cArea.x * 0.02 * 2.0 * edge);
    return float4(max(slope.x, 0.0), max(-slope.x, 0.0), max(slope.y, 0.0), max(-slope.y, 0.0));
}
)HLSL";

    const UINT kSize = 512;          // texels
    const float kArea = 32.0f;       // yards
    const int32_t kMaxRipples = 128; // the whole 3.3.5 pool (32 for the player, 96 for other units)
    const UINT kConstRegs = 1;       // c0

    // one corner of a ripple's square: screen position (texels), then TEXCOORD0..2 as the shader reads them
    struct Vertex {
        float x, y, z, rhw;
        float local[4];  // from the ripple's centre (yards), from the area's centre (yards)
        float ripple[4]; // ring radius, alpha, packet width, 1 = directional
        float dir[4];    // forward x, forward y
    };
    const DWORD kFvf = D3DFVF_XYZRHW | D3DFVF_TEX3 | D3DFVF_TEXCOORDSIZE4(0) | D3DFVF_TEXCOORDSIZE4(1) | D3DFVF_TEXCOORDSIZE4(2);

    typedef HRESULT(WINAPI* D3DCompileFn)(LPCVOID, SIZE_T, LPCSTR, const D3D_SHADER_MACRO*, ID3DInclude*, LPCSTR, LPCSTR, UINT, UINT, ID3DBlob**, ID3DBlob**);

    CVar* s_enabled = nullptr;
    CVar* s_strength = nullptr;

    std::vector<DWORD> s_code;       // compiled once; the shader object is remade after a device reset
    bool s_compileFailed = false;
    IDirect3DPixelShader9* s_ps = nullptr;
    IDirect3DTexture9* s_tex = nullptr;
    IDirect3DSurface9* s_surf = nullptr;
    bool s_valid = false;            // s_tex holds this frame's ripples
    float s_centerX = 0.0f;
    float s_centerY = 0.0f;

    void RegisterCVars() {
        static bool registered = false;
        if (registered) return;
        registered = true;
        s_enabled = CVar::Register("hdWaterRipples", "HD: 1 = ripples on hdWater's water around units in it, 0 = off", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_strength = CVar::Register("hdWaterRippleStrength", "HD: water ripple strength, 1 = normal", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    }

    float Strength() {
        float v = s_strength ? s_strength->m_floatValue : 1.0f;
        if (!(v == v)) return 1.0f; // NaN
        return v < 0.0f ? 0.0f : (v > 4.0f ? 4.0f : v);
    }

    bool EnsureResources(IDirect3DDevice9* device) {
        if (!s_ps) {
            if (s_compileFailed) return false;
            if (s_code.empty()) {
                s_compileFailed = true;
                HMODULE module = LoadLibraryA("d3dcompiler_47.dll");
                D3DCompileFn compile = module ? reinterpret_cast<D3DCompileFn>(GetProcAddress(module, "D3DCompile")) : nullptr;
                if (!compile) return false;
                ID3DBlob* code = nullptr;
                ID3DBlob* errors = nullptr;
                HRESULT hr = compile(kShader, strlen(kShader), "HdWaterRipples", nullptr, nullptr, "main", "ps_3_0", D3DCOMPILE_OPTIMIZATION_LEVEL3, 0, &code, &errors);
                if (errors) {
                    OutputDebugStringA(static_cast<const char*>(errors->GetBufferPointer()));
                    errors->Release();
                }
                if (FAILED(hr) || !code) {
                    if (code) code->Release();
                    return false;
                }
                const DWORD* p = static_cast<const DWORD*>(code->GetBufferPointer());
                s_code.assign(p, p + code->GetBufferSize() / sizeof(DWORD));
                code->Release();
                s_compileFailed = false;
            }
            if (FAILED(device->CreatePixelShader(s_code.data(), &s_ps))) {
                s_ps = nullptr;
                s_compileFailed = true;
                return false;
            }
        }
        if (!s_tex) {
            if (FAILED(device->CreateTexture(kSize, kSize, 1, D3DUSAGE_RENDERTARGET, D3DFMT_A8R8G8B8, D3DPOOL_DEFAULT, &s_tex, nullptr)) || !s_tex) {
                s_tex = nullptr;
                return false;
            }
            if (FAILED(s_tex->GetSurfaceLevel(0, &s_surf)) || !s_surf) {
                s_surf = nullptr;
                s_tex->Release();
                s_tex = nullptr;
                return false;
            }
        }
        return true;
    }
}

void HD::WaterRipplesRender(IDirect3DDevice9* device, IDirect3DSurface9* worldColor) {
    RegisterCVars();
    s_valid = false;
    // only the FFT variant of the water shader reads the ripples (hdWaterWaves 1)
    if (!device || !worldColor || !s_enabled || !s_enabled->m_intValue || Strength() <= 0.0f || !HD::WaterWavesEnabled()) return;

    // the area: 32 yards around the camera, its centre on whole texels (the rings do not crawl as the camera moves)
    const float texel = kArea / kSize;
    float cx = floorf(CWorldScene::s_activeWorldView.x / texel) * texel;
    float cy = floorf(CWorldScene::s_activeWorldView.y / texel) * texel;

    // HD: the shader and the texture are made at the first liquid pass, before any ripple (a short hitch while
    // the world loads, never at the first contact with water)
    if (!EnsureResources(device)) return;

    static float live[kMaxRipples * 8];
    static Vertex verts[kMaxRipples * 6];
    int32_t n = WaterRipple::HdActiveRipples(live, kMaxRipples);
    const float half = kArea * 0.5f;
    const float toTexel = kSize / kArea;
    int32_t count = 0;
    for (int32_t i = 0; i < n; i++) {
        const float* r = &live[i * 8];
        float dx = r[0] - cx;
        float dy = r[1] - cy;
        float radius = r[2] * 0.75f;            // the ring in the 3.3.5 splash texture sits near its edge
        float width = 0.1f + 0.12f * radius;    // the packet widens as the ring grows
        float reach = radius + 3.0f * width;    // the square covers the ring and its packet
        if (fabsf(dx) > half + reach || fabsf(dy) > half + reach || r[3] <= 0.0f) continue;
        float alpha = r[3] > 1.0f ? 1.0f : r[3];
        float fx = cosf(r[4]);                  // forward: the ripple's rotation is minus the unit's facing
        float fy = -sinf(r[4]);
        float dir = r[5] != 0.0f ? 1.0f : 0.0f;
        static const float corner[6][2] = { { -1, -1 }, { 1, -1 }, { -1, 1 }, { 1, -1 }, { 1, 1 }, { -1, 1 } };
        for (int32_t k = 0; k < 6; k++) {
            Vertex& v = verts[count * 6 + k];
            float lx = corner[k][0] * reach;
            float ly = corner[k][1] * reach;
            float ax = dx + lx;                 // from the area's centre
            float ay = dy + ly;
            v.x = (ax + half) * toTexel - 0.5f;
            v.y = (ay + half) * toTexel - 0.5f;
            v.z = 0.0f;
            v.rhw = 1.0f;
            v.local[0] = lx; v.local[1] = ly; v.local[2] = ax; v.local[3] = ay;
            v.ripple[0] = radius; v.ripple[1] = alpha; v.ripple[2] = width; v.ripple[3] = dir;
            v.dir[0] = fx; v.dir[1] = fy; v.dir[2] = 0.0f; v.dir[3] = 0.0f;
        }
        count++;
    }
    if (!count) return;                         // no ripple near: the water shader gets strength 0
    float c[kConstRegs * 4] = { Strength(), half, 0.0f, 0.0f };

    IDirect3DSurface9* worldDepth = nullptr;
    device->GetDepthStencilSurface(&worldDepth);
    device->SetDepthStencilSurface(nullptr);
    device->SetRenderTarget(0, s_surf);
    device->Clear(0, nullptr, D3DCLEAR_TARGET, 0x00000000, 1.0f, 0); // calm water: no slope
    device->SetRenderState(D3DRS_ZENABLE, FALSE);
    device->SetRenderState(D3DRS_ZWRITEENABLE, FALSE);
    device->SetRenderState(D3DRS_ALPHATESTENABLE, FALSE);
    device->SetRenderState(D3DRS_CULLMODE, D3DCULL_NONE);
    device->SetRenderState(D3DRS_FOGENABLE, FALSE);
    device->SetRenderState(D3DRS_SCISSORTESTENABLE, FALSE);
    device->SetRenderState(D3DRS_CLIPPLANEENABLE, 0);
    device->SetRenderState(D3DRS_COLORWRITEENABLE, 0x0F);
    // the rings add up (each channel holds one sign of one slope)
    device->SetRenderState(D3DRS_ALPHABLENDENABLE, TRUE);
    device->SetRenderState(D3DRS_BLENDOP, D3DBLENDOP_ADD); // the client never changes it (HdBloom sets it too)
    device->SetRenderState(D3DRS_SRCBLEND, D3DBLEND_ONE);
    device->SetRenderState(D3DRS_DESTBLEND, D3DBLEND_ONE);
    device->SetVertexShader(nullptr);
    device->SetPixelShader(s_ps);
    device->SetFVF(kFvf);
    device->SetPixelShaderConstantF(0, c, kConstRegs);
    device->DrawPrimitiveUP(D3DPT_TRIANGLELIST, count * 2, verts, sizeof(Vertex));
    device->SetRenderState(D3DRS_ALPHABLENDENABLE, FALSE);

    device->SetRenderTarget(0, worldColor);
    device->SetDepthStencilSurface(worldDepth);
    if (worldDepth) worldDepth->Release();
    // HD: the client turns the depth test on once at start-up and never again (see HdFog.cpp)
    device->SetRenderState(D3DRS_ZENABLE, D3DZB_TRUE);
    CGxDeviceD3d* gx = static_cast<CGxDeviceD3d*>(g_theGxDevicePtr);
    gx->m_viewportDirty = 1;     // SetRenderTarget reset the viewport and the scissor rectangle
    gx->m_scissorRectDirty = 1;
    HD::FogInvalidateClientState();
    // HD: FogInvalidateClientState re-sends c0..c33 (this pass only wrote c0)

    s_centerX = cx;
    s_centerY = cy;
    s_valid = true;
}

IDirect3DTexture9* HD::WaterRipplesTexture() {
    return s_valid ? s_tex : nullptr;
}

void HD::WaterRipplesConstants(float* out) {
    // uv = (world - (centre - area / 2)) / area
    out[0] = 1.0f / kArea;
    out[1] = 1.0f / kArea;
    out[2] = 0.5f - s_centerX / kArea;
    out[3] = 0.5f - s_centerY / kArea;
    out[4] = s_valid ? 1.0f : 0.0f;
    out[5] = 0.0f;
    out[6] = 0.0f;
    out[7] = 0.0f;
}

void HD::WaterRipplesRelease() {
    if (s_surf) { s_surf->Release(); s_surf = nullptr; }
    if (s_tex) { s_tex->Release(); s_tex = nullptr; }
    if (s_ps) { s_ps->Release(); s_ps = nullptr; }
    s_valid = false;
}
