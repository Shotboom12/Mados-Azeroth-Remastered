#include "WoW/Source/WorldClient/HD/HdTime.h"
#include "WoW/Source/WorldClient/HD/HdGrade.h"
#include <cmath>
#include <cstdio>
#include <cstring>
#include <unordered_map>
#include <vector>
#include <windows.h>
#include <d3d9.h>
#include <d3dcompiler.h>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/CGxDeviceD3d/CGxDeviceD3d.h"
#include "Engine/Source/Gx/Types.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "WoW/Source/WorldClient/HD/HdForever.h"
#include "WoW/Source/DB/Rec/LightRec.h"

namespace {
    // Pixel shader registers c0..c1 (see kShader).
    const UINT kConstRegs = 2;
    const int32_t kLutWidth = 1024;
    const int32_t kLutHeight = 32;

    // HD: a 32x32x32 LUT laid out as 32 slices side by side: x = red + 32 * blue, y = green (checked on
    // Forever's files: their corners are exact identity values). Two LUTs blended (two lights or two times).
    const char* kShader = R"HLSL(
sampler2D sceneTex : register(s0);
sampler2D lutA : register(s1);
sampler2D lutB : register(s2);
float4 c_screen : register(c0); // 1/width, 1/height
float4 c_grade  : register(c1); // blend lutA -> lutB, strength, debug (1 = split screen), unused

float3 Lut(sampler2D lut, float3 c) {
    float b = saturate(c.b) * 31.0;
    float b0 = floor(b);
    float b1 = min(b0 + 1.0, 31.0);
    float2 uv = float2((saturate(c.r) * 31.0 + 0.5) / 1024.0, (saturate(c.g) * 31.0 + 0.5) / 32.0);
    float3 x0 = tex2D(lut, uv + float2(b0 * 32.0 / 1024.0, 0)).rgb;
    float3 x1 = tex2D(lut, uv + float2(b1 * 32.0 / 1024.0, 0)).rgb;
    return lerp(x0, x1, b - b0);
}

float4 main(float2 vpos : VPOS) : COLOR0 {
    float2 uv = (vpos + 0.5) * c_screen.xy;
    float3 c = tex2D(sceneTex, uv).rgb;
    if (c_grade.z > 0.5 && uv.x < 0.5) {
        // split screen: a thin white line in the middle
        return float4(uv.x > 0.5 - c_screen.x * 2.0 ? float3(1, 1, 1) : c, 1);
    }
    float3 g = lerp(Lut(lutA, c), Lut(lutB, c), c_grade.x);
    return float4(saturate(lerp(c, g, c_grade.y)), 1);
}
)HLSL";

    typedef HRESULT(WINAPI* D3DCompileFn)(LPCVOID, SIZE_T, LPCSTR, const D3D_SHADER_MACRO*, ID3DInclude*, LPCSTR, LPCSTR, UINT, UINT, ID3DBlob**, ID3DBlob**);

    CVar* s_enabled = nullptr;
    CVar* s_strength = nullptr;
    CVar* s_debug = nullptr;
    CVar* s_force = nullptr;
    CVar* s_info = nullptr;

    IDirect3DPixelShader9* s_shader = nullptr;
    bool s_shaderFailed = false;
    IDirect3DTexture9* s_sceneTex = nullptr; // copy of the world image
    IDirect3DSurface9* s_sceneSurf = nullptr;
    UINT s_width = 0;
    UINT s_height = 0;
    std::unordered_map<int32_t, IDirect3DTexture9*> s_luts; // LUT id -> texture (nullptr = file missing); 0 = identity
    char s_lastInfo[200] = "";

    void RegisterCVars() {
        static bool registered = false;
        if (registered) return;
        registered = true;
        s_enabled = CVar::Register("hdGrade", "HD: 1 = WoW Forever colour grading, 0 = original", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_strength = CVar::Register("hdGradeStrength", "HD: colour grading strength, 1 = Forever", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_debug = CVar::Register("hdGradeDebug", "HD: 1 = split screen, left original, right graded", 0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_force = CVar::Register("hdGradeLut", "HD: 0 = Forever's LUT for this place, else force this LUT id everywhere", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_info = CVar::Register("hdGradeInfo", "HD: hdGrade status (read only)", 0, "off", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    }

    void SetInfo(const char* text) {
        if (!s_info || !strcmp(s_lastInfo, text)) return;
        snprintf(s_lastInfo, sizeof(s_lastInfo), "%s", text);
        s_info->Set(text, true, false, false, false);
    }

    float Clamp(float v, float lo, float hi) {
        return v < lo ? lo : (v > hi ? hi : v);
    }

    IDirect3DDevice9* Device() {
        if (!g_theGxDevicePtr || g_theGxDevicePtr->DeviceApi() != GxApi_D3d9) return nullptr;
        return static_cast<CGxDeviceD3d*>(g_theGxDevicePtr)->m_d3dDevice;
    }

    void ReleaseScene() {
        if (s_sceneSurf) { s_sceneSurf->Release(); s_sceneSurf = nullptr; }
        if (s_sceneTex) { s_sceneTex->Release(); s_sceneTex = nullptr; }
        s_width = 0;
        s_height = 0;
    }

    void ReleaseLuts() {
        for (auto& lut : s_luts) {
            if (lut.second) lut.second->Release();
        }
        s_luts.clear();
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
        HRESULT hr = compile(kShader, strlen(kShader), "HdGrade", nullptr, nullptr, "main", "ps_3_0", D3DCOMPILE_OPTIMIZATION_LEVEL3, 0, &code, &errors);
        if (FAILED(hr) || !code) {
            char text[200];
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
            s_shader = nullptr;
            SetInfo("ERROR: CreatePixelShader failed");
            return false;
        }
        s_shaderFailed = false;
        return true;
    }

    // Reads forever_data\grading\<id>.blp (BLP2, uncompressed BGRA, 1024x32) into texels (BGRA, 1024x32).
    bool ReadLutFile(int32_t id, std::vector<uint8_t>& texels) {
        char path[2][96];
        snprintf(path[0], sizeof(path[0]), "forever_data\\grading\\%d.blp", id);
        snprintf(path[1], sizeof(path[1]), "..\\..\\forever_data\\grading\\%d.blp", id);
        FILE* file = nullptr;
        for (int i = 0; i < 2 && !file; i++) file = fopen(path[i], "rb");
        if (!file) return false;
        std::vector<uint8_t> data;
        uint8_t buffer[4096];
        size_t got;
        while ((got = fread(buffer, 1, sizeof(buffer), file)) > 0) data.insert(data.end(), buffer, buffer + got);
        fclose(file);

        const size_t size = static_cast<size_t>(kLutWidth) * kLutHeight * 4;
        if (data.size() < 148 || memcmp(data.data(), "BLP2", 4) != 0 || data[8] != 3) return false;
        uint32_t width, height, offset;
        memcpy(&width, &data[12], 4);
        memcpy(&height, &data[16], 4);
        memcpy(&offset, &data[20], 4);
        if (width != kLutWidth || height != kLutHeight || offset + size > data.size()) return false;
        texels.assign(data.begin() + offset, data.begin() + offset + size);
        return true;
    }

    // The LUT texture for this id (0 = identity, no change). nullptr when the file is missing or broken.
    IDirect3DTexture9* Lut(IDirect3DDevice9* device, int32_t id) {
        auto found = s_luts.find(id);
        if (found != s_luts.end()) return found->second;

        std::vector<uint8_t> texels;
        bool ok = true;
        if (id == 0) {
            texels.resize(static_cast<size_t>(kLutWidth) * kLutHeight * 4);
            for (int32_t y = 0; y < kLutHeight; y++) {
                for (int32_t x = 0; x < kLutWidth; x++) {
                    uint8_t* t = &texels[(static_cast<size_t>(y) * kLutWidth + x) * 4];
                    t[0] = static_cast<uint8_t>(((x / 32) * 255 + 15) / 31); // blue
                    t[1] = static_cast<uint8_t>((y * 255 + 15) / 31);        // green
                    t[2] = static_cast<uint8_t>(((x % 32) * 255 + 15) / 31); // red
                    t[3] = 255;
                }
            }
        } else {
            ok = ReadLutFile(id, texels);
        }

        IDirect3DTexture9* tex = nullptr;
        if (ok && SUCCEEDED(device->CreateTexture(kLutWidth, kLutHeight, 1, 0, D3DFMT_A8R8G8B8, D3DPOOL_MANAGED, &tex, nullptr)) && tex) {
            D3DLOCKED_RECT rect;
            if (SUCCEEDED(tex->LockRect(0, &rect, nullptr, 0))) {
                for (int32_t y = 0; y < kLutHeight; y++) {
                    memcpy(static_cast<uint8_t*>(rect.pBits) + y * rect.Pitch, &texels[static_cast<size_t>(y) * kLutWidth * 4], kLutWidth * 4);
                }
                tex->UnlockRect(0);
            } else {
                tex->Release();
                tex = nullptr;
            }
        }
        s_luts[id] = tex;
        return tex;
    }

    // HD: how much of each LUT is wanted here. Up to 16 LUTs, then the two strongest are drawn.
    struct LutWeights {
        int32_t id[16];
        float weight[16];
        int32_t count = 0;

        void Add(int32_t lut, float w) {
            if (w <= 0.0f) return;
            for (int32_t i = 0; i < count; i++) {
                if (id[i] == lut) { weight[i] += w; return; }
            }
            if (count < 16) { id[count] = lut; weight[count] = w; count++; }
        }

        void Scale(float f) {
            for (int32_t i = 0; i < count; i++) weight[i] *= f;
        }
    };

    // One light's grading (clear weather blended to storm), as weights. No Forever grading = identity (0).
    void AddLight(LutWeights& luts, const LightRec* light, float time, float storm, float weight) {
        for (int32_t pass = 0; pass < 2; pass++) {
            float w = weight * (pass == 0 ? 1.0f - storm : storm);
            if (w <= 0.0f) continue;
            int32_t a, b;
            float t;
            if (HD::ForeverGradingAt(light, pass == 0 ? 0 : 2, time, &a, &b, &t)) {
                luts.Add(a, w * (1.0f - t));
                luts.Add(b, w * t);
            } else {
                luts.Add(0, w);
            }
        }
    }

    // Same light choice as the fog (HdFog CurrentForeverFog): the zone light, then the nearby area lights
    // blended in by distance like DayNight::BlendAreaLight, farthest first so the nearest wins.
    void CurrentLuts(LutWeights& luts) {
        const DayNight::DNInfo& info = DayNight::g_dnInfo;
        const TSGrowableArray<const LightRec*>& lights = DayNight::g_areaLights;
        if (!lights.m_count) return;
        float time = HD::DayNightBandTime(info.m_dayProgression * 2880.0f);
        float storm = Clamp(info.m_stormBlend, 0.0f, 1.0f);
        AddLight(luts, lights.m_data[0], time, storm, 1.0f);

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
        for (int32_t i = 1; i < count; i++) {
            Near n = nearLights[i];
            int32_t j = i - 1;
            while (j >= 0 && nearLights[j].distSq < n.distSq) { nearLights[j + 1] = nearLights[j]; j--; }
            nearLights[j + 1] = n;
        }
        for (int32_t i = 0; i < count; i++) {
            luts.Scale(1.0f - nearLights[i].weight);
            AddLight(luts, nearLights[i].light, time, storm, nearLights[i].weight);
        }
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

void HD::GradeWorld() {
    RegisterCVars();
    if (!s_enabled || !s_enabled->m_intValue) {
        if (s_sceneTex) ReleaseScene();
        SetInfo("off");
        return;
    }

    IDirect3DDevice9* device = Device();
    if (!device) {
        SetInfo("ERROR: needs gxApi d3d9");
        return;
    }
    if (device->TestCooperativeLevel() != D3D_OK) {
        ReleaseScene();
        return;
    }
    if (!EnsureShader(device)) return;

    // HD: which Forever LUTs here, the two strongest
    LutWeights luts;
    int32_t forced = s_force ? s_force->m_intValue : 0;
    if (forced > 0) luts.Add(forced, 1.0f); // HD: test a LUT anywhere (e.g. zones Forever has no data for)
    else CurrentLuts(luts);
    int32_t first = -1, second = -1;
    for (int32_t i = 0; i < luts.count; i++) {
        if (first < 0 || luts.weight[i] > luts.weight[first]) { second = first; first = i; }
        else if (second < 0 || luts.weight[i] > luts.weight[second]) second = i;
    }
    int32_t debug = s_debug ? s_debug->m_intValue : 0;
    if (first < 0 || (luts.id[first] == 0 && (second < 0 || luts.id[second] == 0))) {
        SetInfo("on, no Forever grading for this light (TBC, WotLK or Turtle zone)");
        if (!debug) return;
    }
    int32_t idA = first >= 0 ? luts.id[first] : 0;
    int32_t idB = second >= 0 ? luts.id[second] : idA;
    float wA = first >= 0 ? luts.weight[first] : 1.0f;
    float wB = second >= 0 ? luts.weight[second] : 0.0f;
    float blend = wA + wB > 0.0f ? wB / (wA + wB) : 0.0f;
    IDirect3DTexture9* texA = Lut(device, idA);
    IDirect3DTexture9* texB = Lut(device, idB);
    if (!texA || !texB) {
        char text[200];
        snprintf(text, sizeof(text), "ERROR: forever_data\\grading\\%d.blp missing or not a 1024x32 BGRA BLP", texA ? idB : idA);
        SetInfo(text);
        return;
    }

    IDirect3DSurface9* target = nullptr;
    if (FAILED(device->GetRenderTarget(0, &target)) || !target) return;
    D3DSURFACE_DESC desc;
    target->GetDesc(&desc);
    if (!s_sceneTex || desc.Width != s_width || desc.Height != s_height) {
        ReleaseScene();
        if (FAILED(device->CreateTexture(desc.Width, desc.Height, 1, D3DUSAGE_RENDERTARGET, D3DFMT_A8R8G8B8, D3DPOOL_DEFAULT, &s_sceneTex, nullptr)) || !s_sceneTex) {
            s_sceneTex = nullptr;
            target->Release();
            SetInfo("ERROR: could not create the grading texture");
            return;
        }
        s_sceneTex->GetSurfaceLevel(0, &s_sceneSurf);
        s_width = desc.Width;
        s_height = desc.Height;
    }

    D3DVIEWPORT9 viewport;
    device->GetViewport(&viewport);
    device->StretchRect(target, nullptr, s_sceneSurf, nullptr, D3DTEXF_POINT);

    float strength = s_strength ? Clamp(s_strength->m_floatValue, 0.0f, 2.0f) : 1.0f;
    float c[kConstRegs * 4] = {
        1.0f / desc.Width, 1.0f / desc.Height, 0.0f, 0.0f,
        blend, strength, static_cast<float>(debug), 0.0f,
    };

    // Full-screen pass over the world, no depth, no blend, keep alpha (used by the glow).
    device->SetRenderState(D3DRS_ZENABLE, FALSE);
    device->SetRenderState(D3DRS_ZWRITEENABLE, FALSE);
    device->SetRenderState(D3DRS_STENCILENABLE, FALSE);
    device->SetRenderState(D3DRS_ALPHATESTENABLE, FALSE);
    device->SetRenderState(D3DRS_ALPHABLENDENABLE, FALSE);
    device->SetRenderState(D3DRS_CULLMODE, D3DCULL_NONE);
    device->SetRenderState(D3DRS_FOGENABLE, FALSE);
    device->SetRenderState(D3DRS_SCISSORTESTENABLE, FALSE);
    device->SetRenderState(D3DRS_CLIPPLANEENABLE, 0);
    device->SetRenderState(D3DRS_SRGBWRITEENABLE, FALSE);
    device->SetRenderState(D3DRS_COLORWRITEENABLE, D3DCOLORWRITEENABLE_RED | D3DCOLORWRITEENABLE_GREEN | D3DCOLORWRITEENABLE_BLUE);
    device->SetVertexShader(nullptr);
    device->SetPixelShader(s_shader);
    device->SetFVF(D3DFVF_XYZRHW);
    IDirect3DBaseTexture9* textures[3] = { s_sceneTex, texA, texB };
    for (DWORD i = 0; i < 3; i++) {
        device->SetTexture(i, textures[i]);
        D3DTEXTUREFILTERTYPE filter = i == 0 ? D3DTEXF_POINT : D3DTEXF_LINEAR;
        device->SetSamplerState(i, D3DSAMP_MINFILTER, filter);
        device->SetSamplerState(i, D3DSAMP_MAGFILTER, filter);
        device->SetSamplerState(i, D3DSAMP_MIPFILTER, D3DTEXF_NONE);
        device->SetSamplerState(i, D3DSAMP_ADDRESSU, D3DTADDRESS_CLAMP);
        device->SetSamplerState(i, D3DSAMP_ADDRESSV, D3DTADDRESS_CLAMP);
        device->SetSamplerState(i, D3DSAMP_SRGBTEXTURE, FALSE);
    }
    device->SetPixelShaderConstantF(0, c, kConstRegs);
    device->SetRenderTarget(0, target); // same target, but this also sets the viewport to all of it

    float w = static_cast<float>(desc.Width) - 0.5f;
    float h = static_cast<float>(desc.Height) - 0.5f;
    float quad[16] = {
        -0.5f, -0.5f, 0.0f, 1.0f,
        w, -0.5f, 0.0f, 1.0f,
        -0.5f, h, 0.0f, 1.0f,
        w, h, 0.0f, 1.0f,
    };
    device->DrawPrimitiveUP(D3DPT_TRIANGLESTRIP, 2, quad, 4 * sizeof(float));

    for (DWORD i = 0; i < 3; i++) device->SetTexture(i, nullptr);
    device->SetRenderState(D3DRS_COLORWRITEENABLE, 0x0F);
    // HD: the client turns the depth buffer on once at start-up and never again (see HdFog.cpp)
    device->SetRenderState(D3DRS_ZENABLE, D3DZB_TRUE);
    device->SetViewport(&viewport);
    target->Release();
    InvalidateClientState();

    char text[200];
    snprintf(text, sizeof(text), "on, LUT %d (%.0f%%) + LUT %d (%.0f%%), strength %.2f%s", idA, (1.0f - blend) * 100.0f, idB, blend * 100.0f, strength, debug ? ", split screen" : "");
    SetInfo(text);
}

void HD::GradeReleaseDeviceResources() {
    ReleaseScene();
    ReleaseLuts();
}
