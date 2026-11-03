// HD: Vulkan backend (gxApi vulkan). See CGxDeviceVulkan.h for the slot plan.
//
// The slots wxl-vulkan-api (WarcraftXL, GPL-3.0) implements forward to its functions in wxl/src/native/
// (namespace wxlvk::native::impl), which keep the 32-bit extension's (device, edx, ...) signatures; the
// D3D-free half of CGxDeviceD3d and the window code are copied from Engine/Source/Gx/CGxDeviceD3d.

#include "Engine/Source/Gx/CGxDeviceVulkan/CGxDeviceVulkan.h"
#include <cmath>
#include <cstring>
#include <new>
#include "Engine/Source/Gx/Gx.h"
#include "Engine/Source/Storm/H/storm.h"

#include "native/Perf.hpp"
#include "native/Render.hpp"
#include "native/Slots.hpp"
#include "native/render/DoodadBatch.hpp"
#include "native/render/WmoGroups.hpp"
#include "native/render/WorldPass.hpp"
#include "host/Host.hpp"
#include "hd/CataWaterService.h" // HD: Cata water
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanShadows.h" // HD: step 4 sun shadows (hdSunShadows)
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanAO.h" // HD: hdAO
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanModelLights.h" // HD: hdModelLightTest
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanFog.h" // HD: hdFog
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanBloom.h" // HD: hdBloom / hdRays
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanGrade.h" // HD: hdGrade
#include "wxlcompat/Seams.hpp"

namespace {
    namespace wd = wxlvk::device;
    namespace impl = wxlvk::native::impl;

    template <class To, class From>
    To* W(From* p) {
        return reinterpret_cast<To*>(p);
    }

    template <class To, class From>
    To* W(const From* p) {
        return reinterpret_cast<To*>(const_cast<From*>(p));
    }

    // What wxl's WXL_Load did once per process (src/Extension.cpp, AddScripts), before the first slot.
    void StartOnce() {
        static bool s_started = false;
        if (s_started) {
            return;
        }
        s_started = true;

        wxlvk::native::perf::Init();
        // The world seams: wxl's hook points as direct calls from the engine (Engine/Source/Gx/GxSeam.h), armed by
        // DeviceCreate once the device is up.
        wxlvk::native::render::Install();
        wxlvk::native::render::worldpass::Install();
        wxlvk::native::render::doodadbatch::Install();
        wxlvk::native::render::wmogroups::Install();
        wxlvk::host::Install();
    }
}

CGxDevice* CreateCGxDeviceVulkan() {
    void* mem = SMemAlloc(sizeof(CGxDeviceVulkan), __FILE__, __LINE__, 0);

    if (!mem) {
        return nullptr;
    }

    return new (mem) CGxDeviceVulkan();
}

// Same set-up as CGxDeviceD3d::CGxDeviceD3d minus the D3D objects: wxl's native device runs on an object the D3D
// constructor built, so its pools and stream buffers already exist when its slots run.
CGxDeviceVulkan::CGxDeviceVulkan() {
    this->m_api = GxApi_Vulkan;
    this->m_hwnd = nullptr;
    this->m_hwndClass = 0;
    this->m_ownhwnd = 0;
    this->m_hwCursorDirty = 1;
    this->m_placeholderTex = nullptr;
    this->m_stereoConvergence = 1.0f;
    this->m_stereoSeparation = 25.0f;
    this->m_caps.m_colorFormat = GxCF_argb;
    this->m_caps.unk_0018 = 1;
    this->DeviceCreatePools();
    this->DeviceCreateStreamBufs();
    StartOnce();
}

CGxDeviceVulkan::~CGxDeviceVulkan() {
    HD::VulkanShadows::Shutdown(); // HD step 4: idempotent after DeviceDestroy
    HD::VulkanAO::Shutdown(); // HD: idempotent after DeviceDestroy
    HD::VulkanFog::Shutdown(); // HD: idempotent
    HD::VulkanBloom::Shutdown(); // HD: idempotent
    HD::VulkanGrade::Shutdown(); // HD: idempotent
    HD::VulkanModelLights::Shutdown(); // HD: idempotent
    HD::CataWater::Service::Shutdown(); // HD: a no-op once DeviceDestroy ran
    wxlcompat::SeamsEnable(false);
}

// --- the window, copied from CGxDeviceD3d ----------------------------------------------------------------------------

ATOM CGxDeviceVulkan::WindowClassCreate() {
    HINSTANCE instance = GetModuleHandleA(nullptr);

    WNDCLASSEXA windowClass;
    memset(&windowClass, 0, sizeof(windowClass));
    windowClass.cbSize = sizeof(windowClass);
    windowClass.style = CS_OWNDC;
    windowClass.lpfnWndProc = CGxDeviceVulkan::WindowProcVulkan;
    windowClass.hInstance = instance;
    windowClass.lpszClassName = "GxWindowClassVulkan";
    windowClass.hIcon = static_cast<HICON>(LoadImageA(instance, "BlizzardIcon.ico", IMAGE_ICON, 0, 0, LR_DEFAULTSIZE));
    windowClass.hCursor = LoadCursorA(instance, "BlizzardCursor.cur");

    if (!windowClass.hCursor) {
        windowClass.hCursor = LoadCursorA(instance, IDC_ARROW);
    }

    return RegisterClassExA(&windowClass);
}

int32_t CGxDeviceVulkan::ICreateWindow(CGxFormat& format) {
    HINSTANCE instance = GetModuleHandleA(nullptr);
    DWORD style;

    if (!format.m_window) {
        style = WS_POPUP | WS_CLIPSIBLINGS | WS_CLIPCHILDREN | WS_SYSMENU;
    } else if (format.m_maximize == 1) {
        style = WS_POPUP | WS_VISIBLE;
    } else if (format.m_maximize == 2) {
        style = WS_POPUP;
    } else {
        style = WS_OVERLAPPEDWINDOW | WS_CLIPSIBLINGS | WS_CLIPCHILDREN;
    }

    float aspectRatio = 0.0f;

    if (format.m_aspect) {
        int32_t width = format.m_size.x;

        if (width) {
            int32_t height = format.m_size.y;

            if (height) {
                aspectRatio = static_cast<float>(width) / height;
            }
        }
    }

    RECT clientRect;
    clientRect.right = format.m_size.x;
    clientRect.left = 0;
    clientRect.top = 0;
    clientRect.bottom = format.m_size.y;
    AdjustWindowRectEx(&clientRect, style, FALSE, 0);

    CGxDevice::s_clientAdjust.x = clientRect.right - format.m_size.x - clientRect.left;
    CGxDevice::s_clientAdjust.y = clientRect.bottom - format.m_size.y - clientRect.top;

    if (format.m_window) {
        if (format.m_maximize == 1) {
            format.m_pos.x = 0;
            format.m_pos.y = 0;
            format.m_size.x = GetSystemMetrics(SM_CXSCREEN);
            format.m_size.y = GetSystemMetrics(SM_CYSCREEN);
        } else {
            RECT windowRect;
            windowRect.left = 0;
            windowRect.top = 0;
            windowRect.right = format.m_size.x;
            windowRect.bottom = format.m_size.y;

            if (CGxDevice::AdjustWindowRectToWorkArea(aspectRatio, &CGxDevice::s_clientAdjust, &windowRect)) {
                format.m_pos.x = windowRect.left;
                format.m_pos.y = windowRect.top;
                format.m_size.x = windowRect.right - windowRect.left;
                format.m_size.y = windowRect.bottom - windowRect.top;
            } else {
                format.m_pos.x = 0;
                format.m_pos.y = 0;
            }
        }
    }

    int32_t width = format.m_size.x;
    int32_t height = format.m_size.y;

    if (!width) {
        width = CW_USEDEFAULT;
    }

    if (!height) {
        height = CW_USEDEFAULT;
    }

    if (format.m_window && format.m_maximize != 1 && format.m_size.x && format.m_size.y) {
        width += CGxDevice::s_clientAdjust.x;
        height += CGxDevice::s_clientAdjust.y;
    }

    this->m_hwnd = CreateWindowExA(WS_EX_APPWINDOW, "GxWindowClassVulkan", "World of Warcraft", style, format.m_pos.x, format.m_pos.y, width, height, nullptr, nullptr, instance, this);

    if (this->m_hwnd && format.m_maximize != 2) {
        ShowWindow(this->m_hwnd, SW_SHOWNORMAL);
    }

    return this->m_hwnd != nullptr;
}

// CGxDeviceD3d::WindowProcD3d without its D3D cursor branch: wxl's cursor code subclasses the window and
// answers WM_SETCURSOR itself (wxl/src/native/Cursor.cpp).
LRESULT CALLBACK CGxDeviceVulkan::WindowProcVulkan(HWND hwnd, UINT message, WPARAM wparam, LPARAM lparam) {
    CGxDeviceVulkan* device = reinterpret_cast<CGxDeviceVulkan*>(GetWindowLongPtrA(hwnd, GWLP_USERDATA));

    switch (message) {
        case WM_CREATE:
            SetWindowLongPtrA(hwnd, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(reinterpret_cast<CREATESTRUCTA*>(lparam)->lpCreateParams));
            return 0;

        case WM_DESTROY:
            if (device) {
                device->DeviceWM(GxWM_Destroy, 0, 0);
            }
            return 0;

        case WM_SIZE: {
            if (!device) {
                break;
            }

            CRect rect;
            rect.minY = 0.0f;
            rect.minX = 0.0f;
            rect.maxY = HIWORD(lparam);
            rect.maxX = LOWORD(lparam);

            uint32_t resizeType = 0;

            if (wparam == SIZE_MINIMIZED) {
                resizeType = 1;
            } else if (wparam == SIZE_MAXHIDE) {
                resizeType = 2;
            }

            device->DeviceWM(GxWM_Size, reinterpret_cast<uintptr_t>(&rect), resizeType);
            break;
        }

        case WM_ACTIVATE:
            if (!device) {
                break;
            }

            if (LOWORD(wparam) == WA_INACTIVE) {
                if (!device->IDevIsWindowed()) {
                    CRect rect;
                    rect.minY = 0.0f;
                    rect.minX = 0.0f;
                    rect.maxY = 0.0f;
                    rect.maxX = 0.0f;
                    device->DeviceWM(GxWM_Size, reinterpret_cast<uintptr_t>(&rect), 1);
                }
            } else if (LOWORD(wparam) == WA_ACTIVE && !device->IDevIsWindowed()) {
                CRect rect;
                rect.minY = 0.0f;
                rect.minX = 0.0f;
                rect.maxY = 0.0f;
                rect.maxX = 0.0f;
                GxCapsWindowSizeInScreenCoords(rect);
                device->DeviceWM(GxWM_Size, reinterpret_cast<uintptr_t>(&rect), 3);
            }

            break;

        case WM_SETFOCUS:
            if (device) {
                device->DeviceWM(GxWM_SetFocus, 0, 0);
            }
            return 0;

        case WM_KILLFOCUS:
            if (device) {
                device->DeviceWM(GxWM_KillFocus, 0, 0);
            }
            return 0;

        case WM_PAINT: {
            PAINTSTRUCT paint;
            BeginPaint(hwnd, &paint);
            EndPaint(hwnd, &paint);
            return 0;
        }

        case WM_ERASEBKGND:
            return 0;

        case WM_SETCURSOR:
            if (!device) {
                return DefWindowProcA(hwnd, message, wparam, lparam);
            }

            break;

        case WM_DISPLAYCHANGE:
            if (device && !device->IDevIsWindowed()) {
                CRect rect;
                rect.minY = 0.0f;
                rect.minX = 0.0f;
                rect.maxY = HIWORD(lparam);
                rect.maxX = LOWORD(lparam);
                device->DeviceWM(GxWM_DisplayChange, reinterpret_cast<uintptr_t>(&rect), 0);
            }

            break;

        case WM_SYSCOMMAND:
            if (wparam == SC_SCREENSAVE || wparam == SC_MONITORPOWER) {
                return 0;
            }

            break;

        case WM_SIZING: {
            RECT* sizingRect = reinterpret_cast<RECT*>(lparam);

            CiRect rect;
            rect.minX = sizingRect->left;
            rect.minY = sizingRect->top;
            rect.maxX = sizingRect->right;
            rect.maxY = sizingRect->bottom;

            if (rect.maxX - rect.minX <= 0 || rect.maxY - rect.minY <= 0) {
                return 0;
            }

            switch (wparam) {
                case WMSZ_LEFT:
                    CGxDevice::ClampRectLeft(rect);
                    CGxDevice::ClampRectTopByAspect(rect);
                    break;

                case WMSZ_RIGHT:
                    CGxDevice::ClampRectRight(rect);
                    CGxDevice::ClampRectBottomByAspect(rect);
                    break;

                case WMSZ_TOP:
                    CGxDevice::ClampRectTop(rect);
                    CGxDevice::ClampRectLeftByAspect(rect);
                    break;

                case WMSZ_TOPLEFT:
                    CGxDevice::ClampRectTop(rect);
                    CGxDevice::ClampRectLeft(rect);
                    CGxDevice::ClampRectTopByAspect(rect);
                    CGxDevice::ClampRectLeftByAspect(rect);
                    break;

                case WMSZ_TOPRIGHT:
                    CGxDevice::ClampRectTop(rect);
                    CGxDevice::ClampRectRight(rect);
                    CGxDevice::ClampRectTopByAspect(rect);
                    CGxDevice::ClampRectRightByAspect(rect);
                    break;

                case WMSZ_BOTTOM:
                    CGxDevice::ClampRectBottom(rect);
                    CGxDevice::ClampRectRightByAspect(rect);
                    break;

                case WMSZ_BOTTOMLEFT:
                    CGxDevice::ClampRectBottom(rect);
                    CGxDevice::ClampRectLeft(rect);
                    CGxDevice::ClampRectLeftByAspect(rect);
                    CGxDevice::ClampRectBottomByAspect(rect);
                    break;

                case WMSZ_BOTTOMRIGHT:
                    CGxDevice::ClampRectBottom(rect);
                    CGxDevice::ClampRectRight(rect);
                    CGxDevice::ClampRectBottomByAspect(rect);
                    CGxDevice::ClampRectRightByAspect(rect);
                    break;

                default:
                    break;
            }

            sizingRect->left = rect.minX;
            sizingRect->bottom = rect.maxY;
            sizingRect->top = rect.minY;
            sizingRect->right = rect.maxX;

            return 1;
        }

        default:
            break;
    }

    if (device && device->m_windowProc) {
        return device->m_windowProc(hwnd, message, wparam, lparam);
    }

    return DefWindowProcA(hwnd, message, wparam, lparam);
}

void CGxDeviceVulkan::DefaultTexUserFunc(EGxTexCommand command, uint32_t width, uint32_t height, uint32_t face, uint32_t level, void* userArg, uint32_t& texelStrideInBytes, const void*& texels) {
    static CImVector s_texels[64];

    switch (command) {
        case GxTex_Lock: {
            uint32_t color = static_cast<uint32_t>(reinterpret_cast<uintptr_t>(userArg));

            for (uint32_t i = 0; i < 64; i++) {
                *reinterpret_cast<uint32_t*>(&s_texels[i]) = color;
            }

            break;
        }

        case GxTex_Latch:
            texelStrideInBytes = 4 * width;
            texels = s_texels;
            break;

        default:
            break;
    }
}

// --- ported from wxl-vulkan-api (wxl/src/native/<file>.cpp) ----------------------------------------------------------

void CGxDeviceVulkan::ITexMarkAsUpdated(CGxTex* texId) {
    impl::ITexMarkAsUpdated(this, nullptr, W<wd::CGxTex>(texId));               // Textures.cpp
}

void CGxDeviceVulkan::IRsSendToHw(EGxRenderState which) {
    impl::IRsSendToHw(this, nullptr, static_cast<uint32_t>(which));               // Draw.cpp
}

void CGxDeviceVulkan::ICursorCreate(const CGxFormat& format) {
    impl::ICursorCreate(this, nullptr, W<const wd::CGxFormat>(&format));          // Cursor.cpp
}

void CGxDeviceVulkan::ICursorDraw() {
    impl::ICursorDraw(this, nullptr);                                            // Scene.cpp
}

int32_t CGxDeviceVulkan::DeviceCreate(GxWindowProc windowProc, const CGxFormat& format) {
    CGxDevice::Log("CGxDeviceVulkan::DeviceCreate(): Vulkan device, log in Logs\\Vulkan.log");
    int32_t created = impl::DeviceCreate(this, nullptr, reinterpret_cast<WNDPROC>(windowProc), W<const wd::CGxFormat>(&format));   // Device.cpp
    wxlcompat::SeamsEnable(created != 0);
    if (created) HD::CataWater::Service::Startup(); // HD: Cata water, step A (hd/CataWaterService.h)
    if (created) HD::VulkanModelLights::Init(); // HD: hdModelLightTest diagnostic (hd/HdVulkanModelLights.h)
    if (created && !HD::VulkanShadows::Init()) { // HD step 4: hdSunShadows (hd/HdVulkanShadows.h)
        CGxDevice::Log("HD Vulkan sun shadows: initialization failed");
    }
    if (created && !HD::VulkanAO::Init()) { // HD: hdAO under Vulkan (hd/HdVulkanAO.h)
        CGxDevice::Log("HD Vulkan AO: initialization failed; AO stays unavailable");
    }
    if (created && !HD::VulkanFog::Init()) { // HD: hdFog under Vulkan (hd/HdVulkanFog.h)
        CGxDevice::Log("HD Vulkan fog: initialization failed; fog unavailable");
    }
    if (created && !HD::VulkanBloom::Init()) { // HD: hdBloom / hdRays under Vulkan (hd/HdVulkanBloom.h)
        CGxDevice::Log("HD Vulkan bloom: initialization failed; bloom unavailable");
    }
    if (created && !HD::VulkanGrade::Init()) { // HD: hdGrade under Vulkan (hd/HdVulkanGrade.h)
        CGxDevice::Log("HD Vulkan grade: initialization failed; grade unavailable");
    }
    return created;
}

void CGxDeviceVulkan::DeviceDestroy() {
    if (!HD::VulkanShadows::Shutdown()) { // HD step 4: its serial must finish before the device goes
        CGxDevice::Log("HD Vulkan sun shadows: shutdown could not finish its serial; retry before device destruction");
        return;
    }
    if (!HD::VulkanAO::Shutdown()) { // HD: its serial must finish before the device goes
        CGxDevice::Log("HD Vulkan AO: shutdown could not finish its serial; retry before device destruction");
        return;
    }
    if (!HD::VulkanFog::Shutdown()) { // HD
        CGxDevice::Log("HD Vulkan fog: outstanding serial; retry before device destruction");
        return;
    }
    if (!HD::VulkanBloom::Shutdown()) { // HD
        CGxDevice::Log("HD Vulkan bloom: outstanding serial; retry before device destruction");
        return;
    }
    if (!HD::VulkanGrade::Shutdown()) { // HD
        CGxDevice::Log("HD Vulkan grade: outstanding serial; retry before device destruction");
        return;
    }
    HD::VulkanModelLights::Shutdown(); // HD
    HD::CataWater::Service::Shutdown(); // HD: its stages and images go before the device
    wxlcompat::SeamsEnable(false);
    impl::DeviceDestroy(this, nullptr);                                          // Device.cpp
}

void CGxDeviceVulkan::DeviceEvictResources() {
    impl::DeviceEvictResources(this, nullptr);                                   // Device.cpp
}

int32_t CGxDeviceVulkan::DeviceSetFormat(const CGxFormat& format) {
    return impl::DeviceSetFormat(this, nullptr, W<const wd::CGxFormat>(&format)); // Device.cpp
}

void CGxDeviceVulkan::DeviceSetBaseMipLevel(uint32_t level) {
    impl::DeviceSetBaseMipLevel(this, nullptr, level);                           // Textures.cpp
}

void CGxDeviceVulkan::DeviceSetGamma(float gamma) {
    impl::DeviceSetGammaLevel(this, nullptr, gamma);                             // Device.cpp
}

void CGxDeviceVulkan::DeviceSetGamma(const CGxGammaRamp& ramp) {
    impl::DeviceSetGammaRamp(this, nullptr, W<const wd::CGxGammaRamp>(&ramp));   // Device.cpp
}

void CGxDeviceVulkan::DeviceReadPixels(CiRect& rect, TSGrowableArray<CImVector>& pixels) {
    impl::DeviceReadPixels(this, nullptr, W<wd::CiRect>(&rect), W<wd::TSGrowableArray>(&pixels));   // Targets.cpp
}

int32_t CGxDeviceVulkan::DeviceWM(EGxWM wm, uintptr_t param1, uintptr_t param2) {
    impl::DeviceWM(this, nullptr, static_cast<uint32_t>(wm), param1, param2);    // Device.cpp
    return 0;
}

void CGxDeviceVulkan::DeviceSetRenderTarget(EGxBuffer buffer, CGxTex* texture, uint32_t plane) {
    impl::DeviceSetRenderTarget(this, nullptr, static_cast<uint32_t>(buffer), W<wd::CGxTex>(texture), plane);   // Targets.cpp
}

void CGxDeviceVulkan::DeviceSaveDepthSurface() {
    impl::CaptureDepthStencilSurface(this, nullptr);                             // Targets.cpp
}

void CGxDeviceVulkan::DeviceRestoreDepthSurface() {
    impl::BindDepthStencilSurface(this, nullptr);                                // Targets.cpp
}

void CGxDeviceVulkan::DeviceResolveDepthBuffer(CGxTex* texture) {
    impl::DeviceResolveDepthBuffer(this, nullptr, W<wd::CGxTex>(texture));       // Targets.cpp
}

void CGxDeviceVulkan::DeviceCopyTex(CGxTex* source, uint32_t sourcePlane, CGxTex* dest, uint32_t destPlane) {
    impl::DeviceCopyTex(this, nullptr, W<wd::CGxTex>(source), sourcePlane, W<wd::CGxTex>(dest), destPlane);   // Targets.cpp
}

void CGxDeviceVulkan::ScenePresent() {
    HD::VulkanModelLights::Tick(); // HD: hdModelLightInfo status, no rendering
    impl::ScenePresent(this, nullptr);                                           // Scene.cpp
}

void CGxDeviceVulkan::SceneClear(uint32_t mask, CImVector color) {
    uint32_t bits;
    memcpy(&bits, &color, sizeof(bits));
    impl::SceneClear(this, nullptr, mask, bits);                                 // Scene.cpp
}

void CGxDeviceVulkan::Draw(CGxBatch* batch, int32_t count) {
    impl::Draw(this, nullptr, W<wd::CGxBatch>(batch), count);                    // Draw.cpp
}

void CGxDeviceVulkan::PoolSizeSet(CGxPool* pool, uint32_t size) {
    impl::PoolSizeSet(this, nullptr, W<wd::CGxPool>(pool), size);                // Pools.cpp
}

void CGxDeviceVulkan::PoolDestroy(CGxPool* pool) {
    impl::PoolDestroy(this, nullptr, W<wd::CGxPool>(pool));                      // Pools.cpp
}

char* CGxDeviceVulkan::BufLock(CGxBuf* buf) {
    return impl::BufLock(this, nullptr, W<wd::CGxBuf>(buf));                     // Pools.cpp
}

int32_t CGxDeviceVulkan::BufUnlock(CGxBuf* buf, uint32_t size) {
    return impl::BufUnlock(this, nullptr, W<wd::CGxBuf>(buf), size);             // Pools.cpp
}

void CGxDeviceVulkan::BufData(CGxBuf* buf, const void* data, uint32_t size, uint32_t offset) {
    impl::BufData(this, nullptr, W<wd::CGxBuf>(buf), data, size, offset);       // Pools.cpp
}

void CGxDeviceVulkan::TexDestroy(CGxTex* texId) {
    impl::TexDestroy(this, nullptr, W<wd::CGxTex>(texId));                       // Textures.cpp
}

int32_t CGxDeviceVulkan::TexCopy(CGxTex* dest, const C2iVector& destPos, const C2iVector& sourcePos, const C2iVector& size, uint32_t level, uint32_t plane) {
    return impl::TexCopy(this, nullptr, W<wd::CGxTex>(dest), W<wd::C2iVector>(&destPos), W<wd::C2iVector>(&sourcePos), W<wd::C2iVector>(&size), level, plane) ? 1 : 0;   // Targets.cpp
}

int32_t CGxDeviceVulkan::TexStretch(CGxTex* dest, const CiRect* destRect, const CiRect* sourceRect, uint32_t level, uint32_t face) {
    return impl::TexStretch(this, nullptr, W<wd::CGxTex>(dest), W<wd::CiRect>(destRect), W<wd::CiRect>(sourceRect), level, face) ? 1 : 0;   // Targets.cpp
}

void CGxDeviceVulkan::QueryCreate(CGxQuery*& query, EGxQueryType type) {
    impl::QueryCreate(this, nullptr, reinterpret_cast<wd::CGxQuery**>(&query), static_cast<uint32_t>(type));   // Queries.cpp
}

void CGxDeviceVulkan::QueryDestroy(CGxQuery*& query) {
    impl::QueryDestroy(this, nullptr, reinterpret_cast<wd::CGxQuery**>(&query));   // Queries.cpp
}

bool CGxDeviceVulkan::QueryBegin(CGxQuery* query) {
    return impl::QueryBegin(this, nullptr, W<wd::CGxQuery>(query));              // Queries.cpp
}

bool CGxDeviceVulkan::QueryEnd(CGxQuery* query) {
    return impl::QueryEnd(this, nullptr, W<wd::CGxQuery>(query)) != 0;          // Queries.cpp
}

bool CGxDeviceVulkan::QueryGetParam(CGxQuery* query, EGxQueryParam param, uint32_t& data) {
    return impl::QueryGetParam(this, nullptr, W<wd::CGxQuery>(query), static_cast<uint32_t>(param), &data) != 0;   // Queries.cpp
}

bool CGxDeviceVulkan::QueryGetData(CGxQuery* query, uint32_t& data) {
    return impl::QueryGetData(this, nullptr, W<wd::CGxQuery>(query), &data);     // Queries.cpp
}

void CGxDeviceVulkan::ShaderCreate(CGxShader** shaders, EGxShTarget target, const char* path, const char* name, uint32_t permutations) {
    impl::ShaderCreate(this, nullptr, reinterpret_cast<wd::CGxShader**>(shaders), static_cast<uint32_t>(target), path, name, permutations);   // Shaders.cpp
}

void CGxDeviceVulkan::ShaderDestroy(CGxShader*& shader) {
    impl::ShaderDestroy(this, nullptr, reinterpret_cast<wd::CGxShader**>(&shader));   // Shaders.cpp
}

void CGxDeviceVulkan::IShaderCreate(CGxShader* shader) {
    impl::IShaderCreate(this, nullptr, W<wd::CGxShader>(shader));                // Shaders.cpp
}

void CGxDeviceVulkan::CursorSetVisible(int32_t visible) {
    impl::CursorSetVisible(this, nullptr, visible);                              // Cursor.cpp
}

// --- stubs (wxl/src/native/Stubs.cpp) --------------------------------------------------------------------------------

int32_t CGxDeviceVulkan::DeviceCreate(void* window, const CGxFormat& format) {
    int32_t created = impl::DeviceCreateOnWindow(this, nullptr, static_cast<HWND>(window), W<const wd::CGxFormat>(&format));
    wxlcompat::SeamsEnable(created != 0);
    if (created) HD::CataWater::Service::Startup(); // HD: Cata water, step A (hd/CataWaterService.h)
    if (created) HD::VulkanModelLights::Init(); // HD: hdModelLightTest diagnostic (hd/HdVulkanModelLights.h)
    if (created && !HD::VulkanShadows::Init()) { // HD step 4: hdSunShadows (hd/HdVulkanShadows.h)
        CGxDevice::Log("HD Vulkan sun shadows: initialization failed");
    }
    if (created && !HD::VulkanAO::Init()) { // HD: hdAO under Vulkan (hd/HdVulkanAO.h)
        CGxDevice::Log("HD Vulkan AO: initialization failed; AO stays unavailable");
    }
    if (created && !HD::VulkanFog::Init()) { // HD: hdFog under Vulkan (hd/HdVulkanFog.h)
        CGxDevice::Log("HD Vulkan fog: initialization failed; fog unavailable");
    }
    if (created && !HD::VulkanBloom::Init()) { // HD: hdBloom / hdRays under Vulkan (hd/HdVulkanBloom.h)
        CGxDevice::Log("HD Vulkan bloom: initialization failed; bloom unavailable");
    }
    if (created && !HD::VulkanGrade::Init()) { // HD: hdGrade under Vulkan (hd/HdVulkanGrade.h)
        CGxDevice::Log("HD Vulkan grade: initialization failed; grade unavailable");
    }
    return created;
}

void CGxDeviceVulkan::LogCrashInfo(char* buffer, uint32_t size) {
    impl::LogCrashInfo(this, nullptr, buffer, size);
}

void CGxDeviceVulkan::IShaderReload(CGxShader* shader, const char* path, const char* name) {
    impl::IShaderReload(this, nullptr, W<wd::CGxShader>(shader), path, name);
}

// --- the D3D-free half of CGxDeviceD3d -------------------------------------------------------------------------------

void CGxDeviceVulkan::ICursorDestroy() {
    CGxDevice::ICursorDestroy();
}

void* CGxDeviceVulkan::DeviceWindow() {
    return this->m_hwnd;
}

void CGxDeviceVulkan::DeviceReadDepths(CiRect& rect, TSGrowableArray<float>& depths) {
    this->ClampRectToWindow(rect);

    uint32_t count = (rect.maxY - rect.minY) * (rect.maxX - rect.minX);
    depths.SetCount(count);
    memset(depths.Ptr(), 0, sizeof(float) * count);
}

void CGxDeviceVulkan::DeviceOverride(EGxOverride override, uint32_t value) {
    CGxDevice::DeviceOverride(override, value);

    if (override == GxOverride_PixelShader) {
        this->m_caps.m_shaderTargets[GxSh_Pixel] = value;
    } else if (override == GxOverride_Unk7) {
        this->m_caps.m_texNonPow2 = value != 0;
    }
}

void CGxDeviceVulkan::CapsWindowSize(CRect& rect) {
    rect = this->DeviceCurWindow();
}

void CGxDeviceVulkan::CapsWindowSizeInScreenCoords(CRect& rect) {
    if (this->IDevIsWindowed()) {
        const CRect& window = this->DeviceCurWindow();
        POINT points[2];
        points[0].x = 0;
        points[0].y = 0;
        points[1].x = static_cast<LONG>(window.maxX);
        points[1].y = static_cast<LONG>(window.maxY);
        MapWindowPoints(this->m_hwnd, nullptr, points, 2);
        rect.minY = static_cast<float>(points[0].y);
        rect.minX = static_cast<float>(points[0].x);
        rect.maxY = static_cast<float>(points[1].y);
        rect.maxX = static_cast<float>(points[1].x);
    } else {
        rect = this->DeviceCurWindow();
    }
}

// D3D's native projection (depth 0..1), kept as is: the translated shaders and wxl's draw reader expect it in
// m_projNative, and the viewport flip happens on the Vulkan side.
void CGxDeviceVulkan::XformSetProjection(const C44Matrix& matrix) {
    CGxDevice::XformSetProjection(matrix);

    C44Matrix projNative = matrix;

    if (!(fabs(projNative.c3 - 1.0f) < 0.00000023841858f) && !(fabs(projNative.c3) < 0.00000023841858f)) {
        projNative *= 1.0f / projNative.c3;
    }

    if (projNative.d3 == 0.0f) {
        float minZ = -(projNative.d2 / (projNative.c2 + 1.0f));
        float maxZ = -(projNative.d2 / (projNative.c2 - 1.0f));
        projNative.c2 = maxZ / (maxZ - minZ);
        projNative.d2 = maxZ * minZ / (minZ - maxZ);
    } else {
        float invC2 = 1.0f / projNative.c2;
        float minZ = (-1.0f - projNative.d2) * invC2;
        float maxZ = (1.0f - projNative.d2) * invC2;
        projNative.c2 = 1.0f / (maxZ - minZ);
        projNative.d2 = minZ / (minZ - maxZ);
    }

    if (!(this->m_appMasterEnables & (1 << GxMasterEnable_NormalProjection)) && projNative.d3 != 1.0f) {
        C44Matrix scale;
        scale.a0 = 0.2f;
        scale.b1 = 0.2f;
        scale.c2 = 0.2f;
        projNative = projNative * scale;
    }

    this->m_xforms[GxXform_Projection].m_dirty = 1;
    this->m_projNative = projNative;
}

void CGxDeviceVulkan::XformSetView(const C44Matrix& matrix) {
    CGxDevice::XformSetView(matrix);
}

void CGxDeviceVulkan::CursorUnlock(uint32_t x, uint32_t y) {
    CGxDevice::CursorUnlock(x, y);
    this->m_hwCursorDirty = 1;
}

void CGxDeviceVulkan::StereoSetConvergence(float convergence) {
    this->m_stereoConvergence = convergence;
}

float CGxDeviceVulkan::StereoGetConvergence() {
    return this->m_stereoConvergence;
}

void CGxDeviceVulkan::StereoSetSeparation(float separation) {
    this->m_stereoSeparation = separation;
}

float CGxDeviceVulkan::StereoGetSeparation() {
    return this->m_stereoSeparation;
}

bool CGxDeviceVulkan::StereoEnabled() {
    return false;
}

void CGxDeviceVulkan::DeviceUnk81(uint32_t a, uint32_t b) {
}

void CGxDeviceVulkan::DeviceUnk82() {
}

void CGxDeviceVulkan::DeviceUnk83(uint32_t a, uint32_t b) {
}
