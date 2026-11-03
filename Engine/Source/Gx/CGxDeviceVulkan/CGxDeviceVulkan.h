// HD: Vulkan backend (gxApi vulkan), built only with -DWOWDECOMP_VULKAN=ON.
//
// The slot plan comes from wxl-vulkan-api (WarcraftXL, GPL-3.0), src/native/Table.cpp: 39 slots are ported from
// its native device, 3 are stubs, and the rest are either CGxDevice's own or the D3D-free half of CGxDeviceD3d,
// copied below. Files adapted from wxl-vulkan-api keep its GPL-3.0 header and say so.
//
// Step 2.1/2.2 state: the class is complete and compiles, but DeviceCreate declines, so CreateGxDevice falls back
// to D3D9. The bodies marked "step 2.3" are placeholders the wxl port replaces.

#ifndef ENGINE_SOURCE_GX_CGXDEVICEVULKAN_CGXDEVICEVULKAN_H
#define ENGINE_SOURCE_GX_CGXDEVICEVULKAN_CGXDEVICEVULKAN_H

#include <cstddef>
#include <cstdint>
#include <windows.h>
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"

class CGxDeviceVulkan : public CGxDevice {
    public:
    // Fields wxl reads from CGxDeviceD3d (+0x3968.. on x86); here they belong to this class.
    HWND m_hwnd;
    ATOM m_hwndClass;
    int32_t m_ownhwnd;
    int32_t m_hwCursorDirty;
    CGxTex* m_placeholderTex;
    float m_stereoConvergence;
    float m_stereoSeparation;

    // The window, as CGxDeviceD3d makes it (copied: the D3D versions write CGxDeviceD3d's fields and
    // its window procedure touches the IDirect3DDevice9). The class is "GxWindowClassVulkan".
    static ATOM WindowClassCreate();
    static LRESULT CALLBACK WindowProcVulkan(HWND hwnd, UINT message, WPARAM wparam, LPARAM lparam);
    int32_t ICreateWindow(CGxFormat& format);
    // The 8x8 placeholder texture's fill (CGxDeviceD3d's DefaultTexUserFunc).
    static void DefaultTexUserFunc(EGxTexCommand command, uint32_t width, uint32_t height, uint32_t face, uint32_t level, void* userArg, uint32_t& texelStrideInBytes, const void*& texels);

    CGxDeviceVulkan();
    virtual ~CGxDeviceVulkan();

    // Ported from wxl-vulkan-api (step 2.3 / 2.4)
    virtual void ITexMarkAsUpdated(CGxTex* texId);
    virtual void IRsSendToHw(EGxRenderState which);
    virtual void ICursorCreate(const CGxFormat& format);
    virtual void ICursorDraw();
    virtual int32_t DeviceCreate(GxWindowProc windowProc, const CGxFormat& format);
    virtual void DeviceDestroy();
    virtual void DeviceEvictResources();
    virtual int32_t DeviceSetFormat(const CGxFormat& format);
    virtual void DeviceSetBaseMipLevel(uint32_t level);
    virtual void DeviceSetGamma(float gamma);
    virtual void DeviceSetGamma(const CGxGammaRamp& ramp);
    virtual void DeviceReadPixels(CiRect& rect, TSGrowableArray<CImVector>& pixels);
    virtual int32_t DeviceWM(EGxWM wm, uintptr_t param1, uintptr_t param2);
    virtual void DeviceSetRenderTarget(EGxBuffer buffer, CGxTex* texture, uint32_t plane);
    virtual void DeviceSaveDepthSurface();
    virtual void DeviceRestoreDepthSurface();
    virtual void DeviceResolveDepthBuffer(CGxTex* texture);
    virtual void DeviceCopyTex(CGxTex* source, uint32_t sourcePlane, CGxTex* dest, uint32_t destPlane);
    virtual void ScenePresent();
    virtual void SceneClear(uint32_t mask, CImVector color);
    virtual void Draw(CGxBatch* batch, int32_t count);
    virtual void PoolSizeSet(CGxPool* pool, uint32_t size);
    virtual void PoolDestroy(CGxPool* pool);
    virtual char* BufLock(CGxBuf* buf);
    virtual int32_t BufUnlock(CGxBuf* buf, uint32_t size);
    virtual void BufData(CGxBuf* buf, const void* data, uint32_t size, uint32_t offset);
    virtual void TexDestroy(CGxTex* texId);
    virtual int32_t TexCopy(CGxTex* dest, const C2iVector& destPos, const C2iVector& sourcePos, const C2iVector& size, uint32_t level, uint32_t plane);
    virtual int32_t TexStretch(CGxTex* dest, const CiRect* destRect, const CiRect* sourceRect, uint32_t level, uint32_t face);
    virtual void QueryCreate(CGxQuery*& query, EGxQueryType type);
    virtual void QueryDestroy(CGxQuery*& query);
    virtual bool QueryBegin(CGxQuery* query);
    virtual bool QueryEnd(CGxQuery* query);
    virtual bool QueryGetParam(CGxQuery* query, EGxQueryParam param, uint32_t& data);
    virtual bool QueryGetData(CGxQuery* query, uint32_t& data);
    virtual void ShaderCreate(CGxShader** shaders, EGxShTarget target, const char* path, const char* name, uint32_t permutations);
    virtual void ShaderDestroy(CGxShader*& shader);
    virtual void IShaderCreate(CGxShader* shader);
    virtual void CursorSetVisible(int32_t visible);

    // Stubs, as in wxl (src/native/Stubs.cpp)
    virtual int32_t DeviceCreate(void* window, const CGxFormat& format);
    virtual void LogCrashInfo(char* buffer, uint32_t size);
    virtual void IShaderReload(CGxShader* shader, const char* path, const char* name);

    // The D3D-free half of CGxDeviceD3d, which wxl leaves stock
    virtual void ICursorDestroy();
    virtual void* DeviceWindow();
    virtual void DeviceReadDepths(CiRect& rect, TSGrowableArray<float>& depths);
    virtual void DeviceOverride(EGxOverride override, uint32_t value);
    virtual void CapsWindowSize(CRect& rect);
    virtual void CapsWindowSizeInScreenCoords(CRect& rect);
    virtual void XformSetProjection(const C44Matrix& matrix);
    virtual void XformSetView(const C44Matrix& matrix);
    virtual void CursorUnlock(uint32_t x, uint32_t y);
    virtual void StereoSetConvergence(float convergence);
    virtual float StereoGetConvergence();
    virtual void StereoSetSeparation(float separation);
    virtual float StereoGetSeparation();
    virtual bool StereoEnabled();
    virtual void DeviceUnk81(uint32_t a, uint32_t b);
    virtual void DeviceUnk82();
    virtual void DeviceUnk83(uint32_t a, uint32_t b);
};

CGxDevice* CreateCGxDeviceVulkan();

#endif
