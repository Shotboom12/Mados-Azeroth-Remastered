// HD: Waystone HD planar water reflection, stage 1 (see HdWaterPlanar.h). First written by ChatGPT from Cataclysm's
// CWorldScene::RenderReflection, checked and corrected against this client. The raw D3D9 work and the state reset after
// it follow hdGI / hdWater (no Get* of render states and no state block: the client makes a PURE device,
// CGxDeviceD3d::ICreateD3dDevice); everything else goes through Gx, whose CPU-side state is saved and put back.
#include "HdWaterPlanar.h"
#include "HdWaterPlanarMath.h"
#include <algorithm>
#include <cfloat>
#include <cmath>
#include <cstdio>
#include <cstring>
#include <map>
#include <set>
#include <vector>
#include <d3d9.h>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxDeviceD3d/CGxDeviceD3d.h"
#include "Engine/Source/Gx/Gx.h"
#include "Engine/Source/ShaderEffect/ShaderEffect.h"
#include "Engine/Source/ShaderEffect/ShadowCache.h"
#include "Engine/Source/Tempest/CFrustum.h"
#include "WoW/Source/LiquidSystem/Liquid.h"
#include "WoW/Source/WorldClient/CChunkLiquid.h"
#include "WoW/Source/WorldClient/CPortalView.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "WoW/Source/WorldClient/HD/HdFog.h"
#include "WoW/Source/WorldClient/Map.h"
#include "WoW/Source/WorldClient/MapChunk.h"
#include "WoW/Source/WorldClient/World.h"

namespace {
    CVar* s_enabled = nullptr;
    CVar* s_info = nullptr;
    char s_lastInfo[200] = "";
    IDirect3DTexture9* s_texture = nullptr;
    IDirect3DSurface9* s_color = nullptr;
    IDirect3DSurface9* s_depth = nullptr;
    UINT s_width = 0, s_height = 0;
    bool s_ready = false;
    float s_planeHeight = 0.0f;
    C44Matrix s_mainToMirror;
    std::set<const CAaSphere*> s_waterBounds;
    const float kHeightTolerance = 0.05f; // yards: one water instance must be this flat to be mirrored
    const float kClipBias = 0.02f;        // yards above the plane where the mirrored world starts

    void RegisterCVars() {
        if (s_enabled) return;
        s_enabled = CVar::Register("hdWaterPlanar", "HD: planar reflection of the sky and terrain on flat outdoor water (half resolution), 1 = on, 0 = screen-space only", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_info = CVar::Register("hdWaterPlanarInfo", "HD: planar water reflection status (read only)", 0, "off", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    }

    void Info(const char* value) {
        if (!s_info || !strcmp(value, s_lastInfo)) return;
        snprintf(s_lastInfo, sizeof(s_lastInfo), "%s", value);
        s_info->Set(s_lastInfo, true, false, false, false);
    }

    void ReleaseTargets() {
        if (s_depth) { s_depth->Release(); s_depth = nullptr; }
        if (s_color) { s_color->Release(); s_color = nullptr; }
        if (s_texture) { s_texture->Release(); s_texture = nullptr; }
        s_width = s_height = 0;
        s_ready = false;
    }

    bool EnsureTargets(IDirect3DDevice9* device, UINT width, UINT height) {
        if (s_color && s_depth && s_width == width && s_height == height) return true;
        ReleaseTargets();
        if (FAILED(device->CreateTexture(width, height, 1, D3DUSAGE_RENDERTARGET, D3DFMT_A8R8G8B8,
                                        D3DPOOL_DEFAULT, &s_texture, nullptr)) ||
            FAILED(s_texture->GetSurfaceLevel(0, &s_color))) { ReleaseTargets(); return false; }
        // our own depth buffer: never hdFog's INTZ world depth (hdWater, hdGI, hdContactShadow, the fog read that one)
        if (FAILED(device->CreateDepthStencilSurface(width, height, D3DFMT_D24S8, D3DMULTISAMPLE_NONE,
                                                    0, TRUE, &s_depth, nullptr)) &&
            FAILED(device->CreateDepthStencilSurface(width, height, D3DFMT_D16, D3DMULTISAMPLE_NONE,
                                                    0, TRUE, &s_depth, nullptr))) { ReleaseTargets(); return false; }
        s_width = width; s_height = height;
        return true;
    }

    // Only queued outdoor procedural WATER instances, never lava, slime, WMO pools or waterfalls.
    // Aggregate the whole instance: its centre alone cannot prove that every piece has the same height.
    bool ChoosePlane() {
        struct Range { float low, high, distance; };
        std::map<Liquid::CInstance*, Range> candidates;
        const C3Vector& camera = CWorldScene::s_activeWorldView;
        for (CChunkLiquid* water = CMap::s_mapChunkLiquidUpdateList.Head(); water;
             water = CMap::s_mapChunkLiquidUpdateList.Next(water)) {
            Liquid::CInstance* instance = water->m_instance;
            if (!water->m_owner || !instance || !instance->m_queued || !instance->m_settings ||
                !instance->m_settings->m_transparent || !dynamic_cast<Liquid::CMaterialProcWater*>(instance->m_material)) continue;
            CAaBox box;
            water->GetAaBox(box);
            float dx = std::max(std::max(box.b.x - camera.x, camera.x - box.t.x), 0.0f);
            float dy = std::max(std::max(box.b.y - camera.y, camera.y - box.t.y), 0.0f);
            float dz = camera.z - box.t.z;
            float distance = dx * dx + dy * dy + dz * dz;
            auto entry = candidates.find(instance);
            if (entry == candidates.end()) candidates.emplace(instance, Range{box.b.z, box.t.z, distance});
            else {
                entry->second.low = std::min(entry->second.low, box.b.z);
                entry->second.high = std::max(entry->second.high, box.t.z);
                entry->second.distance = std::min(entry->second.distance, distance);
            }
        }
        float best = FLT_MAX;
        bool found = false;
        for (const auto& entry : candidates) {
            const Range& range = entry.second;
            if (!std::isfinite(range.low) || !std::isfinite(range.high) ||
                range.high - range.low > kHeightTolerance || camera.z <= range.high + kClipBias) continue;
            if (range.distance < best) {
                best = range.distance;
                s_planeHeight = (range.low + range.high) * 0.5f;
                found = true;
            }
        }
        if (!found) return false;
        for (const auto& entry : candidates) {
            if (fabsf(entry.second.low - s_planeHeight) <= kHeightTolerance &&
                fabsf(entry.second.high - s_planeHeight) <= kHeightTolerance)
                s_waterBounds.insert(&entry.first->m_bounds);
        }
        return true;
    }

    // Gx's RsPush alone does not cover matrices, lights, shader constants, the viewport or the targets. Everything this
    // pass changes is kept here on the CPU side and put back; then the device cache is told to send it all again
    // (HD::FogInvalidateClientState), as hdGI and hdWater do after their raw draws. No world sort table, frustum stack,
    // portal list or M2 scene is touched.
    class SavedState {
        CGxDeviceD3d* gx;
        IDirect3DDevice9* device;
        IDirect3DSurface9* color = nullptr;
        IDirect3DSurface9* depth = nullptr;
        CBoundingBox gxViewport;
        CRect window, gxScissor;
        C44Matrix projection, nativeProjection;
        CGxMatrixStack xforms[11], texGen[8];
        CGxApiLight lights[4];
        C4Plane planes[6];
        ShadowConstants constants[2];
        std::vector<CGxAppRenderState> states;
        C3Vector camera;
        CMapRenderChunk::SVertexShaderConstants terrainConstants;
        CImVector terrainFog;
        EShadowMode shadowMode;
        CGxShader* terrainShaders[10];
        CMapRenderChunk::RenderLayersFunc terrainLayers;
        CGxVertexAttrib primitiveAttribs[14];
        CGxBuf* primitiveBufs[14];
        uint32_t primitiveMask, primitiveSize;
        EGxVertexBufferFormat primitiveFormat;
        CGxBuf* vertexBuf;
        CGxBuf* indexBuf;
    public:
        bool valid = false;
        explicit SavedState(IDirect3DDevice9* d) : gx(static_cast<CGxDeviceD3d*>(g_theGxDevicePtr)), device(d) {
            // the targets are the only device state read back (allowed on a PURE device)
            if (FAILED(device->GetRenderTarget(0, &color)) || !color) return;
            device->GetDepthStencilSurface(&depth);
            gxViewport = gx->m_viewport; window = gx->m_curWindowRect; gxScissor = gx->m_scissorRect;
            projection = gx->m_projection; nativeProjection = gx->m_projNative;
            memcpy(xforms, gx->m_xforms, sizeof(xforms)); memcpy(texGen, gx->m_texGen, sizeof(texGen));
            memcpy(lights, gx->m_lights, sizeof(lights)); memcpy(planes, gx->m_clipPlane, sizeof(planes));
            memcpy(constants, CGxDevice::s_shadowConstants, sizeof(constants));
            states.assign(gx->m_appRenderStates.m_data, gx->m_appRenderStates.m_data + gx->m_appRenderStates.Count());
            camera = CWorldScene::s_activeWorldView;
            terrainConstants = CMapRenderChunk::s_vertexShaderConsts; terrainFog = CMapRenderChunk::s_fogColor;
            shadowMode = CShadowCache::s_shadowMode;
            memcpy(terrainShaders, CMapRenderChunk::s_currentShader, 4 * sizeof(CGxShader*));
            memcpy(terrainShaders + 4, CMapRenderChunk::s_currentShaderX, 4 * sizeof(CGxShader*));
            memcpy(terrainShaders + 8, CMapRenderChunk::s_pixelShader, 2 * sizeof(CGxShader*));
            terrainLayers = CMapRenderChunk::s_renderLayersFunc;
            memcpy(primitiveAttribs, gx->m_primVertexFormatAttrib, sizeof(primitiveAttribs));
            memcpy(primitiveBufs, gx->m_primVertexFormatBuf, sizeof(primitiveBufs));
            primitiveMask = gx->m_primVertexMask; primitiveSize = gx->m_primVertexSize;
            primitiveFormat = gx->m_primVertexFormat; vertexBuf = gx->m_primVertexBuf; indexBuf = gx->m_primIndexBuf;
            gx->RsPush();
            valid = true;
        }
        ~SavedState() {
            if (valid) {
                gx->RsPop();
                // the world's targets back (SetRenderTarget reset the viewport and the scissor rectangle)
                device->SetRenderTarget(0, color);
                device->SetDepthStencilSurface(depth);
                gx->m_viewport = gxViewport; gx->m_curWindowRect = window; gx->m_scissorRect = gxScissor;
                gx->m_projection = projection; gx->m_projNative = nativeProjection;
                memcpy(gx->m_xforms, xforms, sizeof(xforms)); memcpy(gx->m_texGen, texGen, sizeof(texGen));
                memcpy(gx->m_lights, lights, sizeof(lights)); memcpy(gx->m_clipPlane, planes, sizeof(planes));
                memcpy(CGxDevice::s_shadowConstants, constants, sizeof(constants));
                memcpy(gx->m_appRenderStates.m_data, states.data(), states.size() * sizeof(states[0]));
                CWorldScene::s_activeWorldView = camera;
                CMapRenderChunk::s_vertexShaderConsts = terrainConstants; CMapRenderChunk::s_fogColor = terrainFog;
                CShadowCache::s_shadowMode = shadowMode;
                memcpy(CMapRenderChunk::s_currentShader, terrainShaders, 4 * sizeof(CGxShader*));
                memcpy(CMapRenderChunk::s_currentShaderX, terrainShaders + 4, 4 * sizeof(CGxShader*));
                memcpy(CMapRenderChunk::s_pixelShader, terrainShaders + 8, 2 * sizeof(CGxShader*));
                CMapRenderChunk::s_renderLayersFunc = terrainLayers;
                memcpy(gx->m_primVertexFormatAttrib, primitiveAttribs, sizeof(primitiveAttribs));
                memcpy(gx->m_primVertexFormatBuf, primitiveBufs, sizeof(primitiveBufs));
                gx->m_primVertexMask = primitiveMask; gx->m_primVertexSize = primitiveSize;
                gx->m_primVertexFormat = primitiveFormat; gx->m_primVertexBuf = vertexBuf; gx->m_primIndexBuf = indexBuf;
                gx->m_clipPlaneMask = 0x3F; gx->m_viewportDirty = gx->m_scissorRectDirty = 1;
                for (auto& matrix : gx->m_xforms) matrix.m_dirty = 1;
                for (auto& matrix : gx->m_texGen) matrix.m_dirty = 1;
                for (auto& light : gx->m_lights) light.m_flags = 0xFF;
                // HD: the client turns the depth test on once at start-up and never again (see HdFog.cpp)
                device->SetRenderState(D3DRS_ZENABLE, D3DZB_TRUE);
                HD::FogInvalidateClientState(); // every device state sent again, the vertex streams too
                // FogInvalidateClientState only dirties a small PS range. Terrain changed VS constants too.
                CGxDevice::s_shadowConstants[0].dirtyMin = 0;
                CGxDevice::s_shadowConstants[0].dirtyMax = 223; // ps_3_0 has 224 float registers
                CGxDevice::s_shadowConstants[1].dirtyMin = 0;
                CGxDevice::s_shadowConstants[1].dirtyMax = 255;
                gx->m_primVertexDirty = 1; gx->m_primIndexDirty = 1;
            }
            if (color) color->Release();
            if (depth) depth->Release();
        }
    };

    // The terrain as CWorldScene::RenderChunks / RenderChunksSinglePass / RenderChunksSolid draw it (World.cpp), for the
    // resident chunks inside the mirrored frustum, without the main view's sort table or occlusion.
    uint32_t DrawTerrain(CFrustum& frustum) {
        std::vector<CMapRenderChunk*> buckets[20];
        std::set<CMapRenderChunk*> seen;
        for (CMapChunk* chunk = CMap::s_mapChunkList.Head(); chunk; chunk = CMap::s_mapChunkList.Next(chunk)) {
            if (!chunk->m_header || chunk->m_header->m_holes == 0xFFFF ||
                chunk->m_bbox2.t.z < s_planeHeight + kClipBias || !frustum.Cull(chunk->m_bbox2)) continue;
            // the terrain buffers only (CMapChunk::RenderPrep would also queue grass in the MAIN sort table)
            if (!chunk->m_renderChunk) chunk->Batch();
            CMapRenderChunk* render = chunk->m_renderChunk;
            if (!render || !seen.insert(render).second) continue;
            render->RenderPrep();
            // HD: no buffer left in the terrain pool (CMapRenderChunk::AllocBuf returns none): skip it, else the draw
            // would use whatever buffers the previous chunk left bound
            if (!render->m_chunkBuf) continue;
            uint32_t layers = (render->m_unkFlags & 8) ? render->m_layersCount : 0;
            if (layers > 4) continue;
            uint32_t flags = render->m_renderFlags;
            uint32_t variant = layers ? ((flags & 1) ? ((flags & 4) | 2) >> 1 : (flags >> 1) & 2) : 0;
            buckets[4 * layers + variant].push_back(render);
        }
        C44Matrix world;
        world.Translate(-CWorldScene::s_activeWorldView);
        C44Matrix view;
        GxXformView(view);
        CMapRenderChunk::InitializeVertexShaderConstants(world, view);
        // the fog as CWorldScene::RenderChunks sets it
        const DayNight::DNInfo* info = DayNight::GetInfo();
        CMapRenderChunk::s_fogColor = info->m_fog.m_color;
        if (g_theGxDevicePtr->Caps().unk_0134) {
            GxRsSet(GxRs_FogColor, *reinterpret_cast<const int32_t*>(&info->m_fog.m_color));
        } else {
            C4Vector fog(info->m_fog.m_color);
            g_theGxDevicePtr->ShaderConstantsSet(GxSh_Pixel, 2, reinterpret_cast<const float*>(&fog), 1);
        }
        if (g_theGxDevicePtr->Caps().unk_0138) GxRsSet(GxRs_Fog, 1);
        // Stage 1 draws no shadow on the reflected terrain: the shadow maps and their matrices are the main camera's.
        CShadowCache::s_shadowMode = SHADOW_LOWEST;
        uint32_t draws = 0;
        auto done = [](CMapRenderChunk* render) {
            // HD: as the main pass: back in the pool's update list, so its buffers are freed when no view uses it
            render->m_renderChunkLink.Unlink();
            CMap::s_mapRenderChunkUpdateList.LinkToTail(render);
        };
        for (uint32_t pass = 0; pass < 4; pass++) {
            CMapRenderChunk::SetShaders((pass >> 1) & 1, pass & 1);
            for (uint32_t layers = 1; layers <= 4; layers++) {
                CGxShader* shader = CMapRenderChunk::s_currentShaderX[layers - 1];
                if (!shader) continue; // no fixed-function fallback: its clip-plane space differs
                g_theGxDevicePtr->RsSet(GxRs_PixelShader, shader);
                for (CMapRenderChunk* render : buckets[4 * layers + pass]) {
                    render->RenderSetup(1); render->RenderSinglePassVertexPixelShader(); done(render); draws++;
                }
            }
        }
        CMapRenderChunk::SetShaders(0, 0);
        if (CMapRenderChunk::s_currentShaderX[0]) {
            g_theGxDevicePtr->RsSet(GxRs_PixelShader, CMapRenderChunk::s_currentShaderX[0]);
            for (CMapRenderChunk* render : buckets[0]) {
                render->RenderSetup(1); render->RenderSolidVertexPixelShader(); done(render); draws++;
            }
        }
        return draws;
    }
}

void HD::WaterPlanarReset() {
    RegisterCVars();
    s_ready = false;
    s_waterBounds.clear();
    if (!s_enabled || !s_enabled->m_intValue) {
        if (s_texture) ReleaseTargets();
        Info("off (SSR)");
    } else Info("waiting for the HD water pass (SSR)");
}

void HD::WaterPlanarRender(IDirect3DDevice9* device, unsigned int width, unsigned int height) {
    if (!s_enabled || !s_enabled->m_intValue) return;
    if (!device || !World::s_m2Scene || CWorldScene::s_viewerMapObjDef ||
        !(CWorld::enables & Enable_Chunks) || !CMap::enableTerrainShaderVertex || !CMap::gTerrainPixelShadersValid) {
        Info("indoors, or terrain shaders off (SSR)"); return;
    }
    const DayNight::DNInfo* skyInfo = DayNight::GetInfo();
    if ((skyInfo->m_skybox && skyInfo->m_skyboxWeight > 0.01f) ||
        (skyInfo->m_blendSkybox[0] && skyInfo->m_blendSkyboxWeight[0] > 0.01f) ||
        (skyInfo->m_blendSkybox[1] && skyInfo->m_blendSkyboxWeight[1] > 0.01f) ||
        (skyInfo->m_blendSkybox[2] && skyInfo->m_blendSkyboxWeight[2] > 0.01f)) {
        Info("zone skybox, not reflected yet (SSR)"); return;
    }
    D3DCAPS9 caps = {};
    if (FAILED(device->GetDeviceCaps(&caps)) || !caps.MaxUserClipPlanes ||
        caps.VertexShaderVersion < D3DVS_VERSION(3, 0) || caps.PixelShaderVersion < D3DPS_VERSION(3, 0)) {
        Info("card without user clip planes or shader model 3 (SSR)"); return;
    }
    if (!ChoosePlane()) { Info("no flat outdoor water under the camera (SSR)"); return; }
    if (!width || !height || !EnsureTargets(device, std::max(1u, width / 2), std::max(1u, height / 2))) {
        Info("reflection targets unavailable (SSR)"); return;
    }
    bool rendered = false;
    uint32_t draws = 0;
    {
        SavedState saved(device);
        if (!saved.valid) { Info("cannot read the world target (SSR)"); return; }
        CGxDevice* gx = g_theGxDevicePtr;
        C44Matrix mainView;
        GxXformView(mainView);
        // Camera-relative engine: mirror the camera ORIGIN as well as the world-Z row of the view.
        C44Matrix reflectedView = HD::PlanarMath::ReflectedView(mainView);
        const C3Vector camera = CWorldScene::s_activeWorldView;
        C3Vector mirrorCamera = HD::PlanarMath::ReflectedCamera(camera, s_planeHeight);
        s_mainToMirror = HD::PlanarMath::MainToMirror(mainView, gx->m_projNative, camera, s_planeHeight);

        // Row vectors: p_clip = p_relative * view * projection, plane_clip = inverse(VP) * plane. Kept: world
        // z >= height + bias. D3D9 takes user clip planes in clip space when a vertex shader draws (the terrain does).
        C4Plane clipPlane = HD::PlanarMath::ClipPlane(reflectedView, gx->m_projNative, mirrorCamera.z, s_planeHeight, kClipBias);

        if (FAILED(device->SetRenderTarget(0, s_color)) || FAILED(device->SetDepthStencilSurface(s_depth))) {
            Info("cannot bind the reflection targets (SSR)"); return;
        }
        gx->m_curWindowRect = CRect{0.0f, 0.0f, static_cast<float>(s_width), static_cast<float>(s_height)};
        gx->m_viewportDirty = gx->m_scissorRectDirty = 1;
        GxXformSetViewport(0, 1, 0, 1, 0, 1);
        gx->XformSetView(reflectedView);
        CWorldScene::s_activeWorldView = mirrorCamera;
        GxRsSet(GxRs_ScissorTest, 0); GxRsSet(GxRs_ClipPlaneMask, 0);
        GxRsSet(GxRs_ColorWrite, 15); GxRsSet(GxRs_DepthTest, 1); GxRsSet(GxRs_DepthWrite, 1);
        GxRsSet(GxRs_Culling, 0);
        device->SetRenderState(D3DRS_ZENABLE, D3DZB_TRUE);
        device->SetRenderState(D3DRS_SCISSORTESTENABLE, FALSE);
        const CImVector& fog = skyInfo->m_fog.m_color;
        // as CWorldScene::Render clears: black under the sky (the dome blends over it), else the fog colour
        D3DCOLOR clear = skyInfo->m_showSky ? 0xff000000u : D3DCOLOR_ARGB(255, fog.r, fog.g, fog.b);
        if (FAILED(device->Clear(0, nullptr, D3DCLEAR_TARGET | D3DCLEAR_ZBUFFER, clear, 1.0f, 0))) {
            Info("cannot clear the reflection (SSR)"); return;
        }
        // The sky first, as DayNight::RenderSky draws it (its fixed-function and hdSky draws: no clip plane), from the
        // sky geometry already updated this frame.
        if (skyInfo->m_showSky) {
            GxRsSet(GxRs_DepthWrite, 0); GxRsSet(GxRs_DepthTest, 0);
            DayNight::g_planets.m_sun.Render(); DayNight::g_planets.m_moon.Render(); DayNight::g_planets.m_moon2.Render();
            DayNight::g_sky.Render(); DayNight::g_clouds.Render();
        }
        gx->XformSetView(reflectedView); // DNPlanet::Render sets the view back to the one it found: ours, to be sure
        GxRsSet(GxRs_DepthWrite, 1); GxRsSet(GxRs_DepthTest, 1);
        // the main terrain draws with GxRs_Culling 1 (CW, the device default); the mirror turns the triangles round
        GxRsSet(GxRs_Culling, 2);
        gx->ClipPlaneSet(0, clipPlane); GxRsSet(GxRs_ClipPlaneMask, 1);
        CShaderEffect::UpdateProjMatrix();
        // Mirror the frustum PLANES (world space, s_frustumCorners): mirrored corners would turn them inside out.
        CFrustum frustum(CWorldScene::s_frustumCorners);
        HD::PlanarMath::ReflectFrustum(frustum, s_planeHeight);
        draws = DrawTerrain(frustum);
        rendered = SUCCEEDED(device->TestCooperativeLevel());
    }
    s_ready = rendered;
    char status[200];
    snprintf(status, sizeof(status), rendered ? "on: sky + terrain %ux%u | water z %.2f | %u terrain draws" : "device lost (SSR)",
             s_width, s_height, s_planeHeight, draws);
    Info(status);
}

bool HD::WaterPlanarForBounds(const CAaSphere* bounds) { return s_ready && s_waterBounds.count(bounds) != 0; }
IDirect3DTexture9* HD::WaterPlanarTexture() { return s_ready ? s_texture : nullptr; }
void HD::WaterPlanarConstants(float* constants) {
    constants[0] = 1.0f / s_width; constants[1] = 1.0f / s_height; constants[2] = constants[3] = 0.0f;
    memcpy(constants + 4, &s_mainToMirror, sizeof(s_mainToMirror));
}
void HD::WaterPlanarRelease() { ReleaseTargets(); s_waterBounds.clear(); }
