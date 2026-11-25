#include "native/record/RecordThread.hpp"
// The frame's opaque world draws, captured as the pipelines record them, for the shadow replay.
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

#include "capture/Capture.hpp"

#include "native/Present.hpp"

namespace
{
    using wxlvk::capture::Draw;
    using wxlvk::capture::kMaxDraws;

    struct State
    {
        uint32_t requests = 0;
        bool     inWorld  = false;
        bool     closed   = false;   ///< AfterOpaqueWorld fired in the frame being captured
        uint64_t serial   = 0;       ///< the frame the list belongs to
        uint32_t count    = 0;
        Draw     draws[kMaxDraws];
        uint32_t movers[kMaxDraws];   ///< Claude CPU-C: Movers()
        uint32_t moverCount = 0;
        wxlvk::capture::Stats stats = {};
    };
    State g;

    /// A new frame's list starts empty.
    void Roll()
    {
        const uint64_t now = wxlvk::native::present::Serial();
        if (g.serial == now) return;
        if (g.count) ++g.stats.frames;
        g.serial          = now;
        g.count           = 0;
        g.moverCount      = 0;   // Claude CPU-C
        g.closed          = false;
        g.stats.lastFrame = 0;
    }
}

namespace wxlvk::capture
{
    void Request(bool wanted)
    {
        if (recordthread::Async()) { recordthread::DrainTag("capture (demande)"); recordthread::Drain(); }   // HD MT2: Open() is read on the record thread
        if (wanted) ++g.requests;
        else if (g.requests) --g.requests;
    }

    void BeginWorld()
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Capture);
        if (!g.requests) return;
        Roll();
        g.inWorld = true;
    }

    void EndWorld() { if(recordthread::Enabled())recordthread::Observe(recordthread::Boundary::Capture); g.inWorld = false; }

    void CloseOpaque()
    {
        if(recordthread::Enabled())recordthread::Observe(recordthread::Boundary::Capture);
        if (g.inWorld) g.closed = true;
    }

    bool Open(int onBack)
    {
        // Claude CPU-B: `onBack` is the pass's side as the engine thread stamped it when the draw was queued (the
        // pass may have moved on since, without a drain); -1 reads it now. The rest changes only behind drains.
        if (!g.requests || !g.inWorld || g.closed || !(onBack < 0 ? native::present::OnBackBuffer() : onBack != 0)) return false;
        Roll();
        if (g.count < kMaxDraws) return true;
        ++g.stats.overflow;
        return false;
    }

    uint32_t Room() { return kMaxDraws - g.count; }

    void Note(const Draw& d)
    {
        if (g.count >= kMaxDraws)   // Claude B3: a group's records past the first (Open() asked once for the group)
        {
            ++g.stats.overflow;
            return;
        }
        if (d.live || d.wind) g.movers[g.moverCount++] = g.count;   // Claude CPU-C: what a DYNAMIC_ONLY walk can keep
        g.draws[g.count++] = d;
        g.stats.lastFrame = g.count;
        ++g.stats.taken;
        if (d.live) ++g.stats.movers;
    }

    const Draw* Draws(uint32_t& count)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Capture);
        count = g.serial == native::present::Serial() ? g.count : 0;
        return g.draws;
    }

    const uint32_t* Movers(uint32_t& count)
    {
        count = g.serial == native::present::Serial() ? g.moverCount : 0;   // read after Draws() (its drain)
        return g.movers;
    }

    uint64_t Serial() { return g.serial; }

    void GetStats(Stats& out) { out = g.stats; }
}
