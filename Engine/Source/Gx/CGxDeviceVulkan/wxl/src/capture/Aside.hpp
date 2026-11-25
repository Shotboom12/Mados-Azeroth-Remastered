// SPDX-License-Identifier: GPL-3.0-or-later
// Claude CPU-A (2026-11-17): the replay thread. A MidPass opens an aside segment (Begin): the frame's main command buffer
// is ended there and continued in a new one, and a command buffer of this module's, recorded by its own thread, is
// submitted between the two. ReplayWorldViews with WXL_VK_REPLAY_ASIDE queue their walk and their recording into it, in
// order, and the engine thread goes on with the frame; FinishFrame (and every other point that needs the replays done)
// joins. The GPU runs the same commands in the same order as when they were recorded inline.
#pragma once
#include "wxl/VkRenderApi.h"
#include <cstdint>

namespace wxlvk::capture::aside
{
    /// Engine thread, from a MidPass outside any pass: opens a segment here. Returns the main command buffer to go on
    /// with (the old one ended), or null (no segment: record inline, as before).
    VkCommandBuffer Begin() noexcept;
    /// A segment is open (ASIDE replays go to it).
    bool Open() noexcept;
    /// Engine thread: run(arg, segment) on the replay thread, after everything queued before it.
    void Push(void (*run)(void*, VkCommandBuffer), void* arg) noexcept;
    /// Engine thread, when a MidPass returns: the open segment is closed (its command buffer ended on the replay thread).
    /// True when one was.
    bool EndMidPass() noexcept;
    /// Engine thread: every queued replay recorded and every segment ended on return (false: a segment could not be
    /// recorded, the frame must not be submitted). `early`: counted as a join before the frame's end.
    bool Join(bool early = false) noexcept;
    /// Engine thread: queued work not yet joined.
    bool Busy() noexcept;
    /// The calling thread is the replay thread.
    bool OnWorker() noexcept;
    /// Replay thread: fn(arg) run on the engine thread (at its next Join) and returned from once done.
    void OnEngine(void (*fn)(void*), void* arg) noexcept;
    /// Engine thread: called at the end of every Join that waited for work (the replay module's stats and its calls).
    void SetSettle(void (*settle)()) noexcept;

    struct Stats
    {
        double   workMs  = 0;   ///< the replay thread's busy time
        double   waitMs  = 0;   ///< the engine thread's time blocked in Join
        uint64_t segments = 0, items = 0, early = 0, engineCalls = 0;
    };
    /// Engine thread: the counts since the last call, then reset.
    void TakeStats(Stats& out) noexcept;
}
