// HD: the wxl-core service table, built into the client for the wxl-vulkan-api port (WarcraftXL,
// GPL-3.0). wxl-vulkan-api ran as a DLL the WarcraftXL core loaded and handed a WXL_Api; here it is
// compiled into the client, so this file answers the same calls:
//
//   Log               Logs\Vulkan.log, one line per call, flushed (the device can crash the client)
//   HookAttach*       the six engine seams (Seams.cpp, Engine/Source/Gx/GxSeam.h), by point name; anything else
//                     is declined (0)
//   GetInterface      nothing is published (no ImGui overlay, no core device factory)
//   PublishInterface  kept, so the rendering API (wxl.vk.render) can be looked up by the HD code
//   everything else   no-ops

#include "wxl/PluginApi.h"
#include "wxl/Script.hpp"
#include "wxlcompat/Engine.hpp"
#include "wxlcompat/Seams.hpp"

#include <windows.h>

#include <cstdarg>
#include <cstdio>
#include <cstring>

namespace
{
    FILE* g_log = nullptr;
    bool  g_logTried = false;
    CRITICAL_SECTION g_logLock;

    struct Published
    {
        const char* name;
        uint32_t    version;
        void*       iface;
    };
    Published g_published[16];
    uint32_t  g_publishedCount = 0;

    const char* LevelName(int level)
    {
        switch (level)
        {
            case WXL_LOG_TRACE: return "TRACE";
            case WXL_LOG_DEBUG: return "DEBUG";
            case WXL_LOG_INFO:  return "INFO";
            case WXL_LOG_WARN:  return "WARN";
            case WXL_LOG_ERROR: return "ERROR";
            default:            return "?";
        }
    }

    void __cdecl ApiLog(int level, const char* tag, const char* fmt, ...)
    {
        char line[1024];
        va_list args;
        va_start(args, fmt);
        std::vsnprintf(line, sizeof line, fmt, args);
        va_end(args);
        wxlcompat::Log(level, tag, line);
    }

    void __cdecl ApiSubscribe(uint32_t, WXL_EventFn, void*) {}
    void __cdecl ApiEmit(uint32_t, const void*) {}

    // There are no addresses to detour in this client: a hook by address is taken by its name, which only the late
    // liquid pass's has a seam for.
    int __cdecl ApiHookAttach(const char* name, uintptr_t, void* detour, void** original, int priority)
    {
        return wxlcompat::SeamAttach(name, detour, original, priority) ? 1 : 0;
    }

    int __cdecl ApiHookAttachByName(const char* pointName, void* detour, void** original, int priority)
    {
        return wxlcompat::SeamAttach(pointName, detour, original, priority) ? 1 : 0;
    }

    void __cdecl ApiPublishInterface(const char* name, uint32_t version, void* iface)
    {
        if (!name || g_publishedCount >= sizeof g_published / sizeof *g_published) return;
        g_published[g_publishedCount++] = { name, version, iface };
    }

    void* __cdecl ApiGetInterface(const char* name, uint32_t version)
    {
        if (!name) return nullptr;
        for (uint32_t i = 0; i < g_publishedCount; ++i)
            if (g_published[i].version == version && std::strcmp(g_published[i].name, name) == 0)
                return g_published[i].iface;
        return nullptr;
    }

    void __cdecl ApiUiAddPanel(const char*, WXL_PanelFn, void*) {}
    int  __cdecl ApiUiIsOpen() { return 0; }
    void __cdecl ApiUiText(const char*) {}
    void __cdecl ApiUiSeparator() {}
    int  __cdecl ApiUiButton(const char*) { return 0; }
    int  __cdecl ApiUiCheckbox(const char*, int*) { return 0; }
    int  __cdecl ApiUiSliderFloat(const char*, float*, float, float) { return 0; }
    int  __cdecl ApiUiSliderInt(const char*, int*, int, int) { return 0; }
    int  __cdecl ApiUiColorEdit(const char*, float*) { return 0; }
    void __cdecl ApiUiSameLine() {}
    int  __cdecl ApiUiCombo(const char*, int*, const char* const*, int) { return 0; }
    int  __cdecl ApiUiCollapsingHeader(const char*) { return 0; }
    int  __cdecl ApiUiInputText(const char*, char*, size_t) { return 0; }

    const WXL_Api g_api = {
        sizeof(WXL_Api), WXL_API_VERSION,
        &ApiLog, &ApiSubscribe, &ApiEmit, &ApiHookAttach, &ApiHookAttachByName,
        &ApiPublishInterface, &ApiGetInterface,
        &ApiUiAddPanel, &ApiUiIsOpen, &ApiUiText, &ApiUiSeparator, &ApiUiButton, &ApiUiCheckbox,
        &ApiUiSliderFloat, &ApiUiSliderInt, &ApiUiColorEdit, &ApiUiSameLine, &ApiUiCombo,
        &ApiUiCollapsingHeader, &ApiUiInputText,
    };

    struct LockInit
    {
        LockInit() { InitializeCriticalSection(&g_logLock); }
    } g_lockInit;
}

namespace wxlcompat
{
    const WXL_Api* CoreApi() { return &g_api; }

    void Log(int level, const char* tag, const char* text)
    {
        EnterCriticalSection(&g_logLock);
        if (!g_log && !g_logTried)
        {
            g_logTried = true;
            CreateDirectoryA("Logs", nullptr);
            g_log = std::fopen("Logs\\Vulkan.log", "w");
        }
        if (g_log)
        {
            SYSTEMTIME t;
            GetLocalTime(&t);
            std::fprintf(g_log, "%02u:%02u:%02u.%03u %-5s %s: %s\n", t.wHour, t.wMinute, t.wSecond,
                         t.wMilliseconds, LevelName(level), tag ? tag : "", text ? text : "");
            std::fflush(g_log);
        }
        LeaveCriticalSection(&g_logLock);
    }
}
