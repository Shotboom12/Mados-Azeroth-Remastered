// HD: the engine functions and statics wxl-vulkan-api reached by 32-bit address (wxlcompat/Engine.hpp),
// as calls into the recompiled x64 client. Part of the wxl-vulkan-api port (WarcraftXL, GPL-3.0).

#include "wxlcompat/Engine.hpp"

#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/CGxDevice/EmergencyMem.h"
#include "Engine/Source/Gx/CGxDeviceVulkan/CGxDeviceVulkan.h"
#include "Engine/Source/Gx/CGxPool.h"
#include "Engine/Source/Gx/CGxTex.h"
#include "Engine/Source/Gx/Gx.h"
#include "Engine/Source/Services/Texture.h"
#include "Engine/Source/Services/TextureBlob.h"
#include "Engine/Source/ShaderEffect/ShaderEffect.h"
#include "WoW/Source/WorldClient/World.h"

#include <cstring>

namespace
{
    CGxDevice* Dev(void* device) { return static_cast<CGxDevice*>(device); }

    template <class Fn>
    uintptr_t FnAddress(Fn fn) { return reinterpret_cast<uintptr_t>(fn); }
}

namespace wxlcompat
{
    // --- engine statics ---------------------------------------------------------------------------------
    uintptr_t GxDevicePtrAddress()     { return reinterpret_cast<uintptr_t>(&g_theGxDevicePtr); }
    uintptr_t PsConstCacheAddress()    { return reinterpret_cast<uintptr_t>(CGxDevice::s_shadowConstants[0].constants); }
    uintptr_t PsDirtyRegEndAddress()   { return reinterpret_cast<uintptr_t>(&CGxDevice::s_shadowConstants[0].dirtyMax); }
    uintptr_t PsDirtyRegStartAddress() { return reinterpret_cast<uintptr_t>(&CGxDevice::s_shadowConstants[0].dirtyMin); }
    uintptr_t VsConstCacheAddress()    { return reinterpret_cast<uintptr_t>(CGxDevice::s_shadowConstants[1].constants); }
    uintptr_t VsDirtyRegEndAddress()   { return reinterpret_cast<uintptr_t>(&CGxDevice::s_shadowConstants[1].dirtyMax); }
    uintptr_t VsDirtyRegStartAddress() { return reinterpret_cast<uintptr_t>(&CGxDevice::s_shadowConstants[1].dirtyMin); }
    uintptr_t UiVertexShaderAddress()  { return reinterpret_cast<uintptr_t>(CGxDevice::s_uiVertexShader); }
    uintptr_t UiPixelShaderAddress()   { return reinterpret_cast<uintptr_t>(&CGxDevice::s_uiPixelShader); }
    uintptr_t EffectFogColorAlphaRefAddress() { return reinterpret_cast<uintptr_t>(&CShaderEffect::s_fogColorAlphaRef); }
    uintptr_t EffectFogParamsAddress()        { return reinterpret_cast<uintptr_t>(&CShaderEffect::s_fogParams); }
    uintptr_t CameraViewAddress()      { return reinterpret_cast<uintptr_t>(&CWorldScene::viewMatrix); }
    uintptr_t CameraPosAddress()       { return reinterpret_cast<uintptr_t>(&CWorldScene::s_activeWorldView); }
    uintptr_t TexFillBlpAddress()      { return FnAddress(&UpdateBlpTextureAsync); }
    uintptr_t TexFillTgaAddress()      { return FnAddress(&UpdateTgaTexture); }
    uintptr_t TexFillBlobAddress()     { return FnAddress(&UpdateBlobTexture); }
    size_t    TextureFileNameOffset()  { return offsetof(CTexture, m_filename); }

    // --- CGxDevice members --------------------------------------------------------------------------------
    void IRsForceUpdate(void* device)            { Dev(device)->IRsForceUpdate(); }
    void IRsSync(void* device, int force)        { Dev(device)->IRsSync(force); }
    void InitLights(void* device)                { Dev(device)->InitLights(); }
    void ShaderConstantsClear()                  { g_theGxDevicePtr->ShaderConstantsClear(); }
    void WaitForFpsCap(void* device)             { Dev(device)->WaitForFPSCap(); }
    void DeviceScreenShot(void* device)          { Dev(device)->DeviceScreenShot(); }
    void DeviceSetDefWindow(void* device, const float* rect)
    {
        Dev(device)->DeviceSetDefWindow(*reinterpret_cast<const CRect*>(rect));
    }
    void ClampRectToWindow(void* device, int32_t* rect)
    {
        Dev(device)->ClampRectToWindow(*reinterpret_cast<CiRect*>(rect));
    }
    void ITexWHDStartEnd(void* device, void* tex, uint32_t* width, uint32_t* height, uint32_t* start,
                         uint32_t* end)
    {
        Dev(device)->ITexWHDStartEnd(static_cast<CGxTex*>(tex), *width, *height, *start, *end);
    }

    // --- CGxDeviceVulkan ----------------------------------------------------------------------------------
    uint16_t WindowClassCreate() { return CGxDeviceVulkan::WindowClassCreate(); }
    bool CreateGameWindow(void* device, void* format)
    {
        return static_cast<CGxDeviceVulkan*>(Dev(device))->ICreateWindow(*static_cast<CGxFormat*>(format)) != 0;
    }

    // --- other engine objects ----------------------------------------------------------------------------
    void CImVectorArraySetCount(void* array, uint32_t count)
    {
        static_cast<TSGrowableArray<CImVector>*>(array)->SetCount(count);
    }
    void* EmergencyMemLock(void* emergency, uint32_t size) { return static_cast<EmergencyMem*>(emergency)->Lock(size); }
    void  PoolDiscard(void* pool)    { static_cast<CGxPool*>(pool)->Discard(); }
    void  PoolInvalidate(void* pool) { static_cast<CGxPool*>(pool)->Invalidate(); }

    int GxTexCreate(uint32_t width, uint32_t height, uint32_t format, uint32_t flags, void* userArg,
                    TexFillFn fill, void** out)
    {
        static_assert(sizeof(CGxTexFlags) == sizeof(uint32_t), "the flags travel as one dword");
        CGxTexFlags texFlags;
        std::memcpy(&texFlags, &flags, sizeof texFlags);
        return ::GxTexCreate(width, height, static_cast<EGxTexFormat>(format), texFlags, userArg,
                             reinterpret_cast<GxTexUserFunc>(fill), *reinterpret_cast<CGxTex**>(out));
    }
    void GxTexUpdate(void* tex, int32_t minX, int32_t minY, int32_t maxX, int32_t maxY, int immediate)
    {
        ::GxTexUpdate(static_cast<CGxTex*>(tex), minX, minY, maxX, maxY, immediate);
    }
    TexFillFn PlaceholderTexFill() { return reinterpret_cast<TexFillFn>(&CGxDeviceVulkan::DefaultTexUserFunc); }
}
