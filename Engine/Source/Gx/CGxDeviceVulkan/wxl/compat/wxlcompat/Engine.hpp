// HD: the engine functions and statics wxl-vulkan-api reached by 32-bit address, as calls into the
// recompiled x64 client. Part of the wxl-vulkan-api port (WarcraftXL, GPL-3.0).
//
// This header includes no engine header on purpose: the wxl sources keep their own opaque type names
// (wxlvk::device::CGxTex, ...), and the definitions in Engine.cpp do the casts to the real types.
// Each function takes what the original __fastcall typedef took, minus the dummy edx.

#pragma once

#include <cstddef>
#include <cstdint>

namespace wxlcompat
{
    // --- engine statics ---------------------------------------------------------------------------------
    uintptr_t GxDevicePtrAddress();        // &g_theGxDevicePtr
    uintptr_t PsConstCacheAddress();       // CGxDevice::s_shadowConstants[0].constants
    uintptr_t PsDirtyRegEndAddress();      //   .dirtyMax
    uintptr_t PsDirtyRegStartAddress();    //   .dirtyMin
    uintptr_t VsConstCacheAddress();       // CGxDevice::s_shadowConstants[1].constants
    uintptr_t VsDirtyRegEndAddress();
    uintptr_t VsDirtyRegStartAddress();
    uintptr_t UiVertexShaderAddress();     // CGxDevice::s_uiVertexShader (CGxShader*[2])
    uintptr_t UiPixelShaderAddress();      // &CGxDevice::s_uiPixelShader
    uintptr_t EffectFogColorAlphaRefAddress();   // &CShaderEffect::s_fogColorAlphaRef
    uintptr_t EffectFogParamsAddress();          // &CShaderEffect::s_fogParams
    uintptr_t CameraViewAddress();         // &CWorldScene::viewMatrix
    uintptr_t CameraPosAddress();          // &CWorldScene::s_activeWorldView
    uintptr_t TexFillBlpAddress();         // UpdateBlpTextureAsync
    uintptr_t TexFillTgaAddress();         // UpdateTgaTexture
    uintptr_t TexFillBlobAddress();        // UpdateBlobTexture
    size_t    TextureFileNameOffset();     // offsetof(CTexture, m_filename)

    // --- CGxDevice members --------------------------------------------------------------------------------
    void IRsForceUpdate(void* device);
    void IRsSync(void* device, int force);
    void InitLights(void* device);
    void ShaderConstantsClear();
    void WaitForFpsCap(void* device);
    void DeviceScreenShot(void* device);
    void DeviceSetDefWindow(void* device, const float* rect);   // CRect
    void ClampRectToWindow(void* device, int32_t* rect);         // CiRect
    void ITexWHDStartEnd(void* device, void* tex, uint32_t* width, uint32_t* height, uint32_t* start,
                         uint32_t* end);

    // --- CGxDeviceVulkan (the D3D window code, copied) -----------------------------------------------------
    uint16_t WindowClassCreate();
    bool     CreateGameWindow(void* device, void* format);           // CGxFormat, updated in place

    // --- other engine objects ----------------------------------------------------------------------------
    void  CImVectorArraySetCount(void* array, uint32_t count);  // TSGrowableArray<CImVector>
    void* EmergencyMemLock(void* emergency, uint32_t size);
    void  PoolDiscard(void* pool);
    void  PoolInvalidate(void* pool);

    using TexFillFn = void(__cdecl*)(uint32_t cmd, uint32_t width, uint32_t height, uint32_t face, uint32_t level,
                                     void* userArg, uint32_t* pitch, const void** data);
    int  GxTexCreate(uint32_t width, uint32_t height, uint32_t format, uint32_t flags, void* userArg,
                     TexFillFn fill, void** out);
    void GxTexUpdate(void* tex, int32_t minX, int32_t minY, int32_t maxX, int32_t maxY, int immediate);
    TexFillFn PlaceholderTexFill();

    // --- the wxl core's services, here in the client ------------------------------------------------------
    /// One line of Logs\Vulkan.log ("tag: text"), flushed.
    void Log(int level, const char* tag, const char* text);
}
