// HD: the base and own slot thunks wxl-vulkan-api calls (wxlcompat/Slots.hpp). Part of the
// wxl-vulkan-api port (WarcraftXL, GPL-3.0).
//
// Each thunk has the slot's wxl signature, (device, edx, args...), and calls the x64 member: Base
// thunks call CGxDevice::X() without virtual dispatch (what the 32-bit code reached through the
// base vtable), Own thunks call this->X() (what it reached through the device's own vtable).
// wxl's opaque types are reinterpreted as the real ones; the slot arguments carry the same values.

#include "wxlcompat/Slots.hpp"

#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"

namespace
{
    namespace wd = wxlvk::device;

    CGxDevice* Dev(void* device) { return static_cast<CGxDevice*>(device); }

    template <class T, class U>
    T* As(U* p) { return reinterpret_cast<T*>(p); }

    template <class T, class U>
    const T* As(const U* p) { return reinterpret_cast<const T*>(p); }

    // --- base ---------------------------------------------------------------------------------------------
    void __fastcall B0(void* d, void*, wd::CGxTex* tex) { Dev(d)->CGxDevice::ITexMarkAsUpdated(As<CGxTex>(tex)); }
    void __fastcall B2(void* d, void*, const wd::CGxFormat* f) { Dev(d)->CGxDevice::ICursorCreate(*As<CGxFormat>(f)); }
    void __fastcall B4(void* d, void*) { Dev(d)->CGxDevice::ICursorDraw(); }
    int __fastcall B10(void* d, void*, WNDPROC proc, const wd::CGxFormat* f)
    {
        return Dev(d)->CGxDevice::DeviceCreate(reinterpret_cast<GxWindowProc>(proc), *As<CGxFormat>(f));
    }
    void __fastcall B11(void* d, void*) { Dev(d)->CGxDevice::DeviceDestroy(); }
    int __fastcall B13(void* d, void*, const wd::CGxFormat* f) { return Dev(d)->CGxDevice::DeviceSetFormat(*As<CGxFormat>(f)); }
    void __fastcall B14(void* d, void*, uint32_t level) { Dev(d)->CGxDevice::DeviceSetBaseMipLevel(level); }
    void __fastcall B15(void* d, void*, const wd::CGxGammaRamp* r) { Dev(d)->CGxDevice::DeviceSetGamma(*As<CGxGammaRamp>(r)); }
    void __fastcall B16(void* d, void*, float level) { Dev(d)->CGxDevice::DeviceSetGamma(level); }
    void __fastcall B23(void* d, void*, uint32_t buffer, wd::CGxTex* tex, uint32_t face)
    {
        Dev(d)->CGxDevice::DeviceSetRenderTarget(static_cast<EGxBuffer>(buffer), As<CGxTex>(tex), face);
    }
    void __fastcall B38(void* d, void*) { Dev(d)->CGxDevice::ScenePresent(); }
    void __fastcall B53(void* d, void*, wd::CGxPool* pool) { Dev(d)->CGxDevice::PoolDestroy(As<CGxPool>(pool)); }
    char* __fastcall B54(void* d, void*, wd::CGxBuf* buf) { return Dev(d)->CGxDevice::BufLock(As<CGxBuf>(buf)); }
    int __fastcall B55(void* d, void*, wd::CGxBuf* buf, uint32_t bytes) { return Dev(d)->CGxDevice::BufUnlock(As<CGxBuf>(buf), bytes); }
    void __fastcall B56(void* d, void*, wd::CGxBuf* buf, const void* data, uint32_t size, uint32_t offset)
    {
        Dev(d)->CGxDevice::BufData(As<CGxBuf>(buf), data, size, offset);
    }
    void __fastcall B58(void* d, void*, wd::CGxTex* tex) { Dev(d)->CGxDevice::TexDestroy(As<CGxTex>(tex)); }
    void __fastcall B62(void* d, void*, wd::CGxQuery** out, uint32_t type)
    {
        Dev(d)->CGxDevice::QueryCreate(*reinterpret_cast<CGxQuery**>(out), static_cast<EGxQueryType>(type));
    }
    void __fastcall B63(void* d, void*, wd::CGxQuery** query) { Dev(d)->CGxDevice::QueryDestroy(*reinterpret_cast<CGxQuery**>(query)); }
    void __fastcall B68(void* d, void*, wd::CGxShader** out, uint32_t target, const char* dir, const char* name,
                        uint32_t permutations)
    {
        Dev(d)->CGxDevice::ShaderCreate(reinterpret_cast<CGxShader**>(out), static_cast<EGxShTarget>(target), dir, name,
                                        permutations);
    }
    void __fastcall B69(void* d, void*, wd::CGxShader** shader) { Dev(d)->CGxDevice::ShaderDestroy(*reinterpret_cast<CGxShader**>(shader)); }
    void __fastcall B73(void* d, void*, int visible) { Dev(d)->CGxDevice::CursorSetVisible(visible); }

    // --- own ----------------------------------------------------------------------------------------------
    void __fastcall O0(void* d, void*, wd::CGxTex* tex) { Dev(d)->ITexMarkAsUpdated(As<CGxTex>(tex)); }
    void __fastcall O2(void* d, void*, const wd::CGxFormat* f) { Dev(d)->ICursorCreate(*As<CGxFormat>(f)); }
    void __fastcall O3(void* d, void*) { Dev(d)->ICursorDestroy(); }
    void __fastcall O4(void* d, void*) { Dev(d)->ICursorDraw(); }
    void __fastcall O5(void* d, void*) { Dev(d)->NotifyOnDeviceRestored(); }
    void __fastcall O6(void* d, void*) { Dev(d)->NotifyOnTextureRecreation(); }
    void __fastcall O11(void* d, void*) { Dev(d)->DeviceDestroy(); }
    void __fastcall O15(void* d, void*, const wd::CGxGammaRamp* r) { Dev(d)->DeviceSetGamma(*As<CGxGammaRamp>(r)); }
    void __fastcall O58(void* d, void*, wd::CGxTex* tex) { Dev(d)->TexDestroy(As<CGxTex>(tex)); }
    void __fastcall O68(void* d, void*, wd::CGxShader** out, uint32_t target, const char* dir, const char* name,
                        uint32_t permutations)
    {
        Dev(d)->ShaderCreate(reinterpret_cast<CGxShader**>(out), static_cast<EGxShTarget>(target), dir, name, permutations);
    }
    void __fastcall O69(void* d, void*, wd::CGxShader** shader) { Dev(d)->ShaderDestroy(*reinterpret_cast<CGxShader**>(shader)); }
    void __fastcall O72(void* d, void*, wd::CGxShader* shader) { Dev(d)->IShaderCreate(As<CGxShader>(shader)); }
}

namespace wxlcompat
{
    #define WXLCOMPAT_DEFINE_BASE(slot) \
        template <> typename wxlvk::device::SlotTraits<slot>::Fn BaseSlot<slot>() { return &B##slot; }
    #define WXLCOMPAT_DEFINE_OWN(slot) \
        template <> typename wxlvk::device::SlotTraits<slot>::Fn OwnSlot<slot>() { return &O##slot; }
    WXLCOMPAT_BASE_SLOTS(WXLCOMPAT_DEFINE_BASE)
    WXLCOMPAT_OWN_SLOTS(WXLCOMPAT_DEFINE_OWN)
}
