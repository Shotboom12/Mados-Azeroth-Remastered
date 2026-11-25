// SPDX-License-Identifier: GPL-3.0-or-later
// HD MT2 (Claude 2026-11-04): pipelines::Record() cut in two, so its second half can run on the record thread
// (src/native/record/RecordThread.cpp). Record() itself is unchanged and stays the path of every draw the
// record thread does not take.
#pragma once

#include "vulkan/pipelines/Internal.hpp"
#include "vulkan/Wind.hpp"

namespace wxlvk::vk::pipelines
{
    /// What the front decided for one draw: everything the back needs that does not live in the Cmd.
    struct AsyncFront
    {
        detail::Key                  key;
        const detail::PipelineEntry* entry     = nullptr;   ///< s.pipelines is a fixed array: the address stays
        wxlvk::vk::wind::Draw        wind      = {};        ///< a copy: the wind module's storage moves
        bool                         hasWind   = false;
        uint32_t                     frameSlot = 0;
        float                        wmoBound[4] = { 0.0f, 0.0f, 0.0f, -1.0f };   ///< DrawBound while the group was current
        bool                         onBack    = false;   ///< Claude CPU-B: present::OnBackBuffer() when queued (capture::Open)
    };

    enum class FrontResult : uint32_t
    {
        NotEligible,   ///< nothing done: the caller drains and runs Record()
        Skipped,       ///< Accept() refused the draw (counted, as Record() would)
        Queue,         ///< the back half is to run, with this front
    };

    /// Engine thread: the checks Record() starts with, then Accept(). Never records into the command buffer.
    FrontResult RecordFront(VkCommandBuffer cmd, VkRenderPass pass, uint32_t frameSlot, const wxlvk::draw::Cmd& c, AsyncFront& out);
    /// Engine thread, record thread idle (after a drain): the front's palette bound back to the real cursor.
    void FrontResync();
    /// Record thread (or the engine thread after a drain): Textures() .. Issue(), as Record() runs them.
    void RecordBack(VkCommandBuffer cmd, const wxlvk::draw::Cmd& c, const AsyncFront& front);
}
