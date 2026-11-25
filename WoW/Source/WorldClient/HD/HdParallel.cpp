// Claude PARQ1: see HdParallel.h.
#include "WoW/Source/WorldClient/HD/HdParallel.h"

#include <atomic>
#include <condition_variable>
#include <immintrin.h>
#include <mutex>
#include <thread>
#include <vector>

namespace HD::Parallel {
namespace {
    constexpr uint32_t kMaxWorkers = 15;

    struct Job {
        Fn fn = nullptr;
        void* ctx = nullptr;
        uint32_t count = 0;
        std::atomic<uint32_t> next{0};
        std::atomic<uint32_t> busy{0};        // workers of this job not finished yet
    };

    Job s_job;
    // Never destroyed: the detached workers may still wait on them while the process exits.
    std::mutex& s_mutex = *new std::mutex;
    std::condition_variable& s_wake = *new std::condition_variable;
    std::atomic<uint64_t> s_seq{0};
    std::vector<std::thread> s_threads;

    void RunItems() {
        for (;;) {
            const uint32_t i = s_job.next.fetch_add(1, std::memory_order_relaxed);
            if (i >= s_job.count) return;
            s_job.fn(s_job.ctx, i);
        }
    }

    // seen = the sequence when the worker was made (no job runs then), so the next job is never missed.
    void Worker(uint64_t seen) {
        for (;;) {
            uint64_t seq = s_seq.load(std::memory_order_acquire);
            for (int spin = 0; seq == seen && spin < 256; ++spin) {
                _mm_pause();
                seq = s_seq.load(std::memory_order_acquire);
            }
            if (seq == seen) {
                std::unique_lock<std::mutex> lock(s_mutex);
                s_wake.wait(lock, [&] { return s_seq.load(std::memory_order_acquire) != seen; });
                seq = s_seq.load(std::memory_order_acquire);
            }
            seen = seq;
            // Every worker of the pool takes part in every job (it may find no item left).
            RunItems();
            s_job.busy.fetch_sub(1, std::memory_order_acq_rel);
        }
    }
}

void For(uint32_t count, Fn fn, void* ctx, uint32_t workers) {
    if (!count) return;
    if (workers > kMaxWorkers) workers = kMaxWorkers;
    if (workers + 1 > count) workers = count - 1;
    if (!workers) {
        for (uint32_t i = 0; i < count; ++i) fn(ctx, i);
        return;
    }
    while (s_threads.size() < workers) {
        // Started here, on the main thread, with no job running: a new worker sees the current sequence as already done.
        s_threads.emplace_back(Worker, s_seq.load(std::memory_order_acquire));
        s_threads.back().detach();
    }
    s_job.fn = fn;
    s_job.ctx = ctx;
    s_job.count = count;
    s_job.next.store(0, std::memory_order_relaxed);
    s_job.busy.store(static_cast<uint32_t>(s_threads.size()), std::memory_order_relaxed);
    {
        std::lock_guard<std::mutex> lock(s_mutex);
        s_seq.fetch_add(1, std::memory_order_acq_rel);
    }
    s_wake.notify_all();
    RunItems();
    while (s_job.busy.load(std::memory_order_acquire)) _mm_pause();
}
}
