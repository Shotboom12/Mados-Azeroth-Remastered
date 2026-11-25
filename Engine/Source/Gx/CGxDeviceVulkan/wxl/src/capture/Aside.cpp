#include "Engine/Source/Base/HdCpuF.h" // CPU-F R2
// SPDX-License-Identifier: GPL-3.0-or-later
// Claude CPU-A (2026-11-17): the replay thread (Aside.hpp).
#include "capture/Aside.hpp"

#include "native/Present.hpp"
#include "vulkan/Context.hpp"
#include "vulkan/Pipelines.hpp"
#include "wxl/Script.hpp"

#include <chrono>
#include <condition_variable>
#include <mutex>
#include <thread>
#ifdef _WIN32
#ifndef NOMINMAX
#define NOMINMAX
#endif
#include <windows.h>
#endif

namespace
{
    namespace context = wxlvk::vk::context;
    using Clock = std::chrono::steady_clock;

    constexpr uint32_t kSlots = wxlvk::vk::pipelines::kFrameSlots;
    constexpr uint32_t kSegs  = wxlvk::native::present::kMaxAsideSegments;
    constexpr uint32_t kQueue = 256;   // items; a frame queues about ten

    enum class Op : uint8_t { Open, Run, Close };
    struct Item
    {
        Op              op  = Op::Run;
        VkCommandBuffer cb  = nullptr;
        void (*run)(void*, VkCommandBuffer) = nullptr;
        void*           arg = nullptr;
    };

    struct State
    {
        std::mutex              m;
        std::condition_variable work;   // the replay thread waits: an item, or the engine's answer
        std::condition_variable done;   // the engine thread waits: items done, or a call asked of it
        Item     q[kQueue];
        uint64_t tail = 0;              // items pushed (engine thread, under m)
        uint64_t head = 0;              // items done (replay thread, under m)
        void (*engineFn)(void*) = nullptr;
        void*    engineArg  = nullptr;
        bool     engineDone = false;
        bool     failed     = false;    // a segment's begin or end failed (replay thread)
        double   workMs     = 0;        // under m

        // Engine thread only.
        std::thread*    thread = nullptr;   // never joined: the process ends with it parked
        VkDevice        device = VK_NULL_HANDLE;
        VkCommandPool   pools[kSlots] = {};
        VkCommandBuffer cbs[kSlots][kSegs] = {};
        uint64_t        usedSerial[kSlots] = {};
        uint32_t        used[kSlots] = {};
        bool            open = false;
        bool            unsettled = false;   // replays pushed since the last settle
        void (*settle)() = nullptr;
        double   waitMs = 0;
        uint64_t segments = 0, items = 0, early = 0, engineCalls = 0;
        bool     saidFirst = false, saidRefused = false;
    };
    State& g = *new State();   // never destroyed: the thread may still be parked on its condition at exit
    thread_local bool onWorker = false;

    void Worker()
    {
        onWorker = true;
        VkCommandBuffer cur = nullptr;
        std::unique_lock<std::mutex> l(g.m);
        for (;;)
        {
            g.work.wait(l, [] { return g.head != g.tail; });
            const Item it = g.q[g.head % kQueue];
            l.unlock();
            const auto t0 = Clock::now();
            const context::Handles* h = context::Get();
            bool ok = true;
            if (it.op == Op::Open)
            {
                VkCommandBufferBeginInfo begin = {};
                begin.sType = VK_STRUCTURE_TYPE_COMMAND_BUFFER_BEGIN_INFO;
                begin.flags = VK_COMMAND_BUFFER_USAGE_ONE_TIME_SUBMIT_BIT;
                ok  = h && h->dapi && h->dapi->BeginCommandBuffer(it.cb, &begin) == VK_SUCCESS;
                cur = ok ? it.cb : nullptr;
            }
            else if (it.op == Op::Run)
            {
                if (cur && it.run) it.run(it.arg, cur);
            }
            else
            {
                if (cur) ok = h && h->dapi && h->dapi->EndCommandBuffer(cur) == VK_SUCCESS;
                cur = nullptr;
            }
            HD::CpuF::PublishHostWrites(); // order this worker's writes before the engine sees completion
            const double ms = std::chrono::duration<double, std::milli>(Clock::now() - t0).count();
            l.lock();
            if (!ok) g.failed = true;
            g.workMs += ms;
            ++g.head;
            g.done.notify_all();
        }
    }

    bool EnsureThread()
    {
        const context::Handles* h = context::Get();
        if (!h || !h->device || !h->dapi) return false;
        if (g.device != h->device)
        {
            // A new device: the old one's pools went with it (never destroyed here, as the frame's own).
            for (uint32_t i = 0; i < kSlots; ++i)
            {
                g.pools[i] = VK_NULL_HANDLE;
                for (uint32_t k = 0; k < kSegs; ++k) g.cbs[i][k] = nullptr;
                g.usedSerial[i] = 0;
                g.used[i]       = 0;
            }
            g.device = VK_NULL_HANDLE;
            for (uint32_t i = 0; i < kSlots; ++i)
            {
                // One pool a frame slot, the replay thread's alone to record from (a pool is externally synchronised).
                VkCommandPoolCreateInfo pool = {};
                pool.sType            = VK_STRUCTURE_TYPE_COMMAND_POOL_CREATE_INFO;
                pool.flags            = VK_COMMAND_POOL_CREATE_RESET_COMMAND_BUFFER_BIT;
                pool.queueFamilyIndex = h->graphicsFamily;
                if (h->dapi->CreateCommandPool(h->device, &pool, nullptr, &g.pools[i]) != VK_SUCCESS) return false;
                VkCommandBufferAllocateInfo alloc = {};
                alloc.sType              = VK_STRUCTURE_TYPE_COMMAND_BUFFER_ALLOCATE_INFO;
                alloc.commandPool        = g.pools[i];
                alloc.level              = VK_COMMAND_BUFFER_LEVEL_PRIMARY;
                alloc.commandBufferCount = kSegs;
                if (h->dapi->AllocateCommandBuffers(h->device, &alloc, g.cbs[i]) != VK_SUCCESS) return false;
            }
            g.device = h->device;
        }
        if (!g.thread)
        {
            try
            {
                g.thread = new std::thread(Worker);
            }
            catch (...)
            {
                g.thread = nullptr;
                return false;
            }
#ifdef _WIN32
            SetThreadPriority(g.thread->native_handle(), GetThreadPriority(GetCurrentThread()));
#endif
            g.thread->detach();
        }
        return true;
    }

    void Enqueue(const Item& it)
    {
        {
            std::unique_lock<std::mutex> l(g.m);
            while (g.tail - g.head >= kQueue)
            {
                g.done.wait(l, [] { return g.tail - g.head < kQueue || g.engineFn; });
                if (g.engineFn)
                {
                    void (*fn)(void*) = g.engineFn;
                    void* arg = g.engineArg;
                    g.engineFn = nullptr;
                    l.unlock();
                    fn(arg);
                    l.lock();
                    ++g.engineCalls;
                    g.engineDone = true;
                    g.work.notify_all();
                }
            }
            g.q[g.tail % kQueue] = it;
            ++g.tail;
        }
        ++g.items;
        g.work.notify_all();
    }
}

namespace wxlvk::capture::aside
{
    VkCommandBuffer Begin() noexcept
    {
        if (onWorker) return nullptr;
        if (!EnsureThread())
        {
            if (!g.saidRefused)
            {
                g.saidRefused = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN, "CPU-A: the replay thread could not be started; the replays stay inline");
            }
            return nullptr;
        }
        if (g.open) EndMidPass();
        const uint32_t slot   = wxlvk::native::present::Slot() % kSlots;
        const uint64_t serial = wxlvk::native::present::Serial();
        if (g.usedSerial[slot] != serial)
        {
            g.usedSerial[slot] = serial;
            g.used[slot]       = 0;
        }
        if (g.used[slot] >= kSegs) return nullptr;
        VkCommandBuffer cb   = g.cbs[slot][g.used[slot]];
        VkCommandBuffer main = wxlvk::native::present::SplitForAside(cb);
        if (!main) return nullptr;
        ++g.used[slot];
        ++g.segments;
        Item it;
        it.op = Op::Open;
        it.cb = cb;
        Enqueue(it);
        g.open = true;
        if (!g.saidFirst)
        {
            g.saidFirst = true;
            wxl::ScriptMgr::Log(WXL_LOG_INFO, "CPU-A: first aside segment (frame %llu): the replays are recorded on the replay thread",
                                static_cast<unsigned long long>(serial));
        }
        return main;
    }

    bool Open() noexcept { return g.open && !onWorker; }

    void Push(void (*run)(void*, VkCommandBuffer), void* arg) noexcept
    {
        if (onWorker || !g.open || !run) return;
        Item it;
        it.op  = Op::Run;
        it.run = run;
        it.arg = arg;
        Enqueue(it);
        g.unsettled = true;
    }

    bool EndMidPass() noexcept
    {
        if (onWorker || !g.open) return false;
        Item it;
        it.op = Op::Close;
        Enqueue(it);
        g.open = false;
        return true;
    }

    bool Join(bool early) noexcept
    {
        if (onWorker) return true;
        if (g.open) EndMidPass();
        bool failed;
        {
            std::unique_lock<std::mutex> l(g.m);
            if (g.head == g.tail)
            {
                // Done already: settled all the same (the replay module's calls are free again only then).
                failed   = g.failed;
                g.failed = false;
                l.unlock();
                if (g.unsettled && g.settle) g.settle();
                g.unsettled = false;
                return !failed;
            }
            if (early) ++g.early;
            const auto t0 = Clock::now();
            for (;;)
            {
                g.done.wait(l, [] { return g.head == g.tail || g.engineFn; });
                if (!g.engineFn) break;
                void (*fn)(void*) = g.engineFn;
                void* arg = g.engineArg;
                g.engineFn = nullptr;
                l.unlock();
                fn(arg);
                l.lock();
                ++g.engineCalls;
                g.engineDone = true;
                g.work.notify_all();
            }
            g.waitMs += std::chrono::duration<double, std::milli>(Clock::now() - t0).count();
            failed   = g.failed;
            g.failed = false;
        }
        if (g.settle) g.settle();
        g.unsettled = false;
        return !failed;
    }

    bool Busy() noexcept
    {
        if (onWorker) return true;
        std::lock_guard<std::mutex> l(g.m);
        return g.head != g.tail;
    }

    bool OnWorker() noexcept { return onWorker; }

    void OnEngine(void (*fn)(void*), void* arg) noexcept
    {
        if (!onWorker)
        {
            fn(arg);
            return;
        }
        std::unique_lock<std::mutex> l(g.m);
        g.engineFn   = fn;
        g.engineArg  = arg;
        g.engineDone = false;
        g.done.notify_all();
        g.work.wait(l, [] { return g.engineDone; });
    }

    void SetSettle(void (*settle)()) noexcept { g.settle = settle; }

    void TakeStats(Stats& out) noexcept
    {
        {
            std::lock_guard<std::mutex> l(g.m);
            out.workMs = g.workMs;
            g.workMs   = 0;
        }
        out.waitMs      = g.waitMs;
        out.segments    = g.segments;
        out.items       = g.items;
        out.early       = g.early;
        out.engineCalls = g.engineCalls;
        g.waitMs = 0;
        g.segments = g.items = g.early = g.engineCalls = 0;
    }
}
