#include "Engine/Source/Base/HdCpuF.h" // CPU-F R2
// SPDX-License-Identifier: GPL-3.0-or-later
// The record thread's queue: one producer (the engine thread), one consumer, in order. From the kit's
// OrderedWorker (ChatGPT, 2026-11-04, tested on 2 million packets), with (Claude 2026-11-04): the producer
// publishes every packet; each side spins briefly before it sleeps, and wakes the other only when that one
// sleeps (seq_cst flag / re-check, so a wake cannot be lost); Pending().
#pragma once
#include <atomic>
#include <cstdint>
#include <memory>
#include <new>
#include <thread>
#include <immintrin.h>
#ifdef _WIN32
#ifndef NOMINMAX
#define NOMINMAX
#endif
#include <windows.h>
#endif

namespace wxlvk::recordthread {
template<class Packet, uint32_t Capacity=1024, uint32_t Batch=8>
class OrderedWorker {
    static_assert(Capacity>=2 && (Capacity&(Capacity-1))==0 && Batch>0 && (Batch&(Batch-1))==0 && Batch<=Capacity);
    static constexpr uint32_t kSpinConsumer=4096;   // pauses before the record thread sleeps
    static constexpr uint32_t kSpinProducer=8192;   // pauses before the engine thread sleeps in a drain
public:
    using Consume=void(*)(void*,Packet&) noexcept;
    struct Counters { uint64_t submitted=0,drains=0,fullWaits=0,wakes=0,peak=0; };
    OrderedWorker()=default;
    OrderedWorker(const OrderedWorker&)=delete;
    OrderedWorker& operator=(const OrderedWorker&)=delete;
    ~OrderedWorker(){Stop();}
    bool Start(Consume consume,void* user) noexcept {
        if(running_ || !consume) return false;
        try { slots_=std::make_unique<Packet[]>(Capacity); } catch(...) { return false; }
        consume_=consume; user_=user; produced_=0; stats_={}; reserved_=false;
        cachedConsumed_=0; publishedLocal_=0;   // HD (Claude) lot MT3
        published_.store(0); consumed_.store(0); kick_.store(0); stop_.store(false);
        consumerSleeping_.store(false); producerSleeping_.store(false);
#ifdef _WIN32
        const int priority=GetThreadPriority(GetCurrentThread());   // the worker runs at the engine thread's priority
#else
        const int priority=0;
#endif
        try { worker_=std::thread([this,priority]{
#ifdef _WIN32
            SetThreadPriority(GetCurrentThread(),priority);
#else
            (void)priority;
#endif
            Run(); }); } catch(...) { slots_.reset(); return false; }
        running_=true; return true;
    }
    /// Producer: the next slot, waiting while the queue is full. Write it, then Commit or Cancel.
    Packet* Reserve() noexcept {
        if(!running_ || reserved_) return nullptr;
        // HD (Claude) lot MT3: the consumed count is read again only when the cached one says full (one
        // cross-core read per lap of the queue instead of one per packet); a stale count is only lower.
        if(produced_-cachedConsumed_>=Capacity){
            cachedConsumed_=consumed_.load(std::memory_order_acquire);
            if(produced_-cachedConsumed_>=Capacity){
                ++stats_.fullWaits;
                Flush();   // every reserved slot published before waiting on the consumer
                WaitConsumed([this](uint64_t done){return produced_-done<Capacity;});
            }
        }
        reserved_=true; return &slots_[produced_&(Capacity-1)];
    }
    void Cancel() noexcept {reserved_=false;}
    void Commit() noexcept {
        if(!reserved_) return;
        reserved_=false; ++produced_; ++stats_.submitted;
        const uint64_t depth=produced_-cachedConsumed_;
        if(depth>stats_.peak) stats_.peak=depth;
        // HD (Claude) lot MT3: published every Batch packets (one store to the line the consumer polls instead
        // of one per packet), at once when the consumer sleeps, and always before any wait (Flush). The cached
        // consumed count is refreshed with it.
        if(produced_-publishedLocal_>=Batch || consumerSleeping_.load(std::memory_order_relaxed)){
            Flush();
            cachedConsumed_=consumed_.load(std::memory_order_acquire);
        }
    }
    /// Producer (HD lot MT3): every committed packet visible to the consumer, which is woken if it sleeps.
    void Flush() noexcept {
        if(publishedLocal_==produced_) return;
        publishedLocal_=produced_;
        published_.store(produced_,std::memory_order_seq_cst);
        if(consumerSleeping_.load(std::memory_order_seq_cst)){
            kick_.fetch_add(1,std::memory_order_seq_cst); kick_.notify_one(); ++stats_.wakes;
        }
    }
    /// Producer: every committed packet consumed (its effects visible here) on return.
    void Drain() noexcept {
        if(!running_) return;
        ++stats_.drains;
        Flush();   // HD (Claude) lot MT3: the batched tail published first
        if(consumed_.load(std::memory_order_acquire)==produced_){ cachedConsumed_=produced_; return; }
        WaitConsumed([this](uint64_t done){return done==produced_;});
        cachedConsumed_=produced_;
    }
    void Stop() noexcept {
        if(!running_) return;
        reserved_=false; Drain();
        stop_.store(true,std::memory_order_seq_cst);
        kick_.fetch_add(1,std::memory_order_seq_cst); kick_.notify_one();
        worker_.join(); slots_.reset(); running_=false;
    }
    /// Producer: committed and not yet consumed (an acquire of the consumed count).
    uint64_t Pending() const noexcept { return running_ ? produced_-consumed_.load(std::memory_order_acquire) : 0; }
    /// Producer (HD lot MT3): Pending from the cached consumed count, never lower than the true one; 0 only
    /// when that count was acquired equal to produced (the consumer's writes are then visible here).
    uint64_t PendingCached() const noexcept { return running_ ? produced_-cachedConsumed_ : 0; }
    Counters GetCounters() const noexcept {return stats_;}
    bool Running() const noexcept {return running_;}
private:
    template<class Ready>
    void WaitConsumed(Ready ready) noexcept {
        uint64_t done=consumed_.load(std::memory_order_acquire);
        for(uint32_t n=0;n<kSpinProducer && !ready(done);++n){ _mm_pause(); done=consumed_.load(std::memory_order_acquire); }
        while(!ready(done)){
            producerSleeping_.store(true,std::memory_order_seq_cst);
            done=consumed_.load(std::memory_order_seq_cst);
            if(ready(done)) break;
            consumed_.wait(done,std::memory_order_acquire);   // returns once consumed_ != done
            done=consumed_.load(std::memory_order_acquire);
        }
        producerSleeping_.store(false,std::memory_order_relaxed);
    }
    void PublishConsumed(uint64_t next) noexcept {
        HD::CpuF::PublishHostWrites(); // fence on the WRITING thread, before completion is visible
        consumed_.store(next,std::memory_order_seq_cst);
        if(producerSleeping_.load(std::memory_order_seq_cst)) consumed_.notify_all();
    }
    void Run() noexcept {
        uint64_t next=0;
        for(;;){
            uint64_t end=published_.load(std::memory_order_acquire);
            if(next!=end){
                while(next!=end){
                    consume_(user_,slots_[next&(Capacity-1)]); ++next;
                    if((next&(Batch-1))==0) PublishConsumed(next);
                    if(next==end) end=published_.load(std::memory_order_acquire);
                }
                PublishConsumed(next);
                continue;
            }
            uint32_t n=0;
            while(n<kSpinConsumer && published_.load(std::memory_order_acquire)==next){ _mm_pause(); ++n; }
            if(published_.load(std::memory_order_acquire)!=next) continue;
            const uint64_t ticket=kick_.load(std::memory_order_seq_cst);
            consumerSleeping_.store(true,std::memory_order_seq_cst);
            if(published_.load(std::memory_order_seq_cst)!=next || stop_.load(std::memory_order_seq_cst)){
                consumerSleeping_.store(false,std::memory_order_relaxed);
                if(stop_.load(std::memory_order_acquire) && published_.load(std::memory_order_acquire)==next) break;
                continue;
            }
            kick_.wait(ticket,std::memory_order_seq_cst);
            consumerSleeping_.store(false,std::memory_order_relaxed);
        }
    }
    std::unique_ptr<Packet[]> slots_;
    std::thread worker_;
    Consume consume_=nullptr; void* user_=nullptr;
    alignas(64) std::atomic<uint64_t> published_{0};
    alignas(64) std::atomic<uint64_t> consumed_{0};
    alignas(64) std::atomic<uint64_t> kick_{0};
    alignas(64) std::atomic<bool> consumerSleeping_{false};
    alignas(64) std::atomic<bool> producerSleeping_{false};
    std::atomic<bool> stop_{false};
    uint64_t produced_=0;
    uint64_t cachedConsumed_=0,publishedLocal_=0;   // HD (Claude) lot MT3: producer-only
    bool running_=false,reserved_=false;
    Counters stats_;
};
}
