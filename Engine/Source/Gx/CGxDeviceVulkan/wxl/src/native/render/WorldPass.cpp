// The world scene pass's seam: where BeforeUi fires, where the capture and the jitter open and close.
// Copyright (C) 2026 WarcraftXL
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

#include "Engine/Source/Gx/CGxDeviceVulkan/hd/lamp/HdLampHooks.h"
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/lamp/HdLampOwner.h"
#include "WoW/Source/WorldClient/World.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "native/render/WorldPass.hpp"
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanShadows.h" // HD: step 4 sun shadows
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanAO.h" // HD: hdAO
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanFog.h" // HD: hdFog
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanBloom.h" // HD: hdBloom
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanGrade.h" // HD: hdGrade
#ifdef WOWDECOMP_LUMEN
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdLumenBridge.h" // HD 2026-11-02 kit R1 lot L1: R2 snapshot
#endif
#ifdef WOWDECOMP_FSR
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/fsr/HdFsrRuntime.h" // HD: FSR statuses (step A)
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/fsr/HdFsrPass.h" // HD: FSR world target and upscale (steps B, C)
#endif

#include "capture/Capture.hpp"
#include "native/Present.hpp"
#include "native/render/Jitter.hpp"
#include "stages/Chain.hpp"

#include "wxl/Script.hpp"

namespace
{
    constexpr const char* kWorldScenePoint = "Gx.WorldOnRender";
    using WorldSceneFn = void(__fastcall*)(void* worldFrame, void* edx);

    WorldSceneFn g_worldScene = nullptr;

    void __fastcall WorldScene(void* worldFrame, void* edx)
    {
        auto lampCamera=DayNight::g_dnInfo.m_cameraPos;
        HD::Lamp::Native::BeginFrame(wxlvk::native::present::Serial(),reinterpret_cast<uintptr_t>(World::s_m2Scene),lampCamera.x,lampCamera.y,lampCamera.z);
        HD::Lamp::Owner::Prepare();
#ifdef WOWDECOMP_FSR
        // Before the effects' Resize: with the world target begun they size themselves to the render size.
        HD::Fsr::Runtime::Frame(); // HD: what each FSR request gets this frame, before the jitter is chosen
        HD::Fsr::Pass::BeforeWorld(); // HD: world target at the render size + the FSR jitter sample
#endif
        HD::VulkanShadows::Resize(); // HD step 4: hdSunShadows cvars + G-buffer request, before the world
        HD::VulkanAO::Resize(); // HD: reads the hdAO cvars and asks for the G-buffer before the world is drawn
        HD::VulkanFog::Resize(); // HD: hdFog
        HD::VulkanBloom::Resize(); // HD: hdBloom / hdRays
        HD::VulkanGrade::Resize(); // HD: hdGrade
#ifdef WOWDECOMP_LUMEN
        HD::LumenBridge::Frame(); // HD 2026-11-02 kit R1 lot L1: R2 snapshot at the render size, nothing when every hdLv* case is off
#endif
        wxlvk::native::present::NoteWorld(true);   // the G-buffer class may be taken from here to AfterOpaqueWorld
        wxlvk::native::render::jitter::BeginWorld();
        wxlvk::capture::BeginWorld();
        g_worldScene(worldFrame, edx);
        wxlvk::capture::EndWorld();
        wxlvk::native::render::jitter::EndWorld();
        wxlvk::native::present::NoteWorld(false);
        wxlvk::stages::chain::Run(wxlvk::stages::Point::BeforeUi);
#ifdef WOWDECOMP_FSR
        HD::Fsr::Pass::AfterWorld(); // HD: upscale (or plain stretch) onto the native back buffer; the interface follows
#endif
    }
}

namespace wxlvk::native::render::worldpass
{
    bool Install()
    {
        static bool installed = false, ok = false;
        if (installed) return ok;
        installed = true;
        const WXL_Api* api = wxl::ScriptMgr::Api();
        if (!api) return false;
        ok = api->HookAttachByName(kWorldScenePoint, reinterpret_cast<void*>(&WorldScene),
                                   reinterpret_cast<void**>(&g_worldScene), WXL_HOOK_DEFAULT_PRIORITY) != 0;
        if (!ok)
            wxl::ScriptMgr::Log(WXL_LOG_WARN, "render: the hook point %s could not be attached: no BeforeUi stage, no "
                                "draw capture, no jitter, no G-buffer", kWorldScenePoint);
        return ok;
    }
}
