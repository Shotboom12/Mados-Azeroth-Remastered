// HD: the wxl hook points as engine seams (Engine/Source/Gx/GxSeam.h). Part of the wxl-vulkan-api
// port (WarcraftXL, GPL-3.0).

#pragma once

namespace wxlcompat
{
    /// HookAttachByName for the six points the engine has a seam for (and HookAttach by its name for the late liquid
    /// pass). Same chaining as the core: lower priority runs first, equal values keep attach order, *original receives
    /// the next link, the last link is the engine function itself. False for any other name.
    bool SeamAttach(const char* name, void* detour, void** original, int priority);

    /// Arms (or disarms) every attached seam in the engine: on once the Vulkan device is up, off when it goes, so a
    /// client that fell back to D3D9 never runs a bracket.
    void SeamsEnable(bool on);
}
