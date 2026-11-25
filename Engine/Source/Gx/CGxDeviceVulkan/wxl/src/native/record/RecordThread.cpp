// SPDX-License-Identifier: GPL-3.0-or-later
// MT0/MT1: the kit's (ChatGPT, 2026-11-04). MT2, the record thread: Claude 2026-11-04.
#include "native/record/RecordThread.hpp"
#include "native/record/DrawPacket.hpp"
#include "native/record/OrderedWorker.hpp"
#include "vulkan/Pipelines.hpp"
#include "vulkan/pipelines/Async.hpp"
#include "wxl/Script.hpp"
#include <atomic>
#include <intrin.h>
#include <chrono>
#include <cstddef>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <memory>
#include <mutex>
#ifndef WXL_MT_PHASE
#define WXL_MT_PHASE 2
#endif
static_assert(WXL_MT_PHASE>=0 && WXL_MT_PHASE<=2, "WXL_MT_PHASE is 0, 1 or 2");
namespace wxlvk::recordthread {
namespace {
    /// One queued draw: the Cmd and the CPU data it points at (the kit's DrawPacket), and the front's decisions.
    struct alignas(64) Job {
        DrawPacket packet;
        vk::pipelines::AsyncFront front;
        // Claude CPU-B: an op instead of a draw (a pass's end or begin, a clear), run on a copy of its bytes.
        void (*op)(VkCommandBuffer,const void*)=nullptr;
        VkCommandBuffer opCmd=nullptr;
        uint32_t opSize=0;
        uint64_t seq=0, hash=0;   // the proof's: the item's place in the engine thread's order, the op's bytes
        alignas(16) unsigned char opData[kOpBytes];
    };
    constexpr uint32_t kQueue = 1024;   // ~12 MB of packets; a full queue only makes the engine thread wait

    std::unique_ptr<DrawPacket> packet;   // MT1: the one packet
    OrderedWorker<Job,kQueue,8>* worker=nullptr;   // MT2: started on the first switch to 2; never freed while running
    AuditStats stats;
    uint64_t frames=0;
    thread_local bool onWorker=false;
    // Claude MT5: the record thread's copy of the native vertex register file (written by the record thread only,
    // from the delta packets, in order), the switches (engine thread), and the proof's counts (record thread).
    alignas(64) float s_mirror[draw::Cmd::kVertexRegsHigh][4]{};
    bool s_delta=true, s_deltaCheck=false;
    std::atomic<uint64_t> s_checkPackets{0}, s_checkBadPackets{0}, s_checkBadRows{0};
    uint64_t s_deltaRowsSent=0, s_deltaPackets=0;   // engine thread, for the proof line
    // Claude RPROF2: the engine thread's share of a queued draw, with the counters only: the front, the snapshot, its bytes.
    uint64_t rpFrontNs=0, rpSnapNs=0, rpBytes=0, rpHigh=0, rpQueued=0;
    inline uint64_t RpNow() noexcept { return static_cast<uint64_t>(std::chrono::duration_cast<std::chrono::nanoseconds>(std::chrono::steady_clock::now().time_since_epoch()).count()); }
    std::recursive_mutex memoryLock;
    std::atomic<bool> memoryLocking{false};
    // HD (Claude) lot MT4 2026-11-06: while FSR/DLSS motion keeps most draws on the engine thread, MT2 steps aside
    // (the draws go straight to Record(), as with MT2 off) and tries again every 120 frames.
    bool bypass=false; bool bypassDrained=false; uint32_t bypassFrames=0;
    // The audit lines go to Vulkan.log only with the counters (WXL_VK_STATS=1): nothing written while playing.
    bool AuditLog() noexcept { static const bool on=[]{const char* e=std::getenv("WXL_VK_STATS");return e&&e[0]=='1';}(); return on; }

    // Claude CPU-B: the proof's counts (record thread; read by the engine thread after a drain) and the measure's.
    std::atomic<uint64_t> s_pqItems{0}, s_pqBadOrder{0}, s_pqOps{0}, s_pqBadBytes{0}, s_pqCapLive{0}, s_pqCapDiffer{0}, s_pqTex{0}, s_pqTexBad{0};
    uint64_t s_pqWorkSeq=0;      // record thread
    uint64_t s_pqEngSeq=0;       // engine thread
    uint64_t s_pqFrames=0;
    uint64_t s_opsQueued=0;      // engine thread, this frame
    Boundary s_drainFor=Boundary::Count;
    const char* s_drainLabel=nullptr;   // a named caller (DrainTag), over the site
    constexpr uint32_t kWaitRows=24;
    struct Waits { const char* label[kWaitRows]={}; double ms[kWaitRows]={}; uint64_t n[kWaitRows]={}; uint32_t rows=0; uint64_t drains=0, ops=0, frames=0; } s_waits;
    const char* const kSiteNames[]={"dessin","passe","hors-passe","pre-passe","fin d'image","requete","stats","etape","capture","liaisons","arret","autre"};
    static_assert(sizeof kSiteNames/sizeof kSiteNames[0]==static_cast<uint32_t>(Boundary::Count)+1,"a name per site");
    void NoteWait(const char* label,double ms) noexcept {
        uint32_t i=0; while(i<s_waits.rows && s_waits.label[i]!=label) ++i;
        if(i==s_waits.rows){ if(s_waits.rows==kWaitRows) i=kWaitRows-1; else s_waits.label[s_waits.rows++]=label; }
        s_waits.ms[i]+=ms; ++s_waits.n[i];
    }
    uint64_t Fnv(const unsigned char* p,uint32_t n) noexcept { uint64_t h=1469598103934665603ull; for(uint32_t i=0;i<n;++i){h^=p[i];h*=1099511628211ull;} return h; }
    bool FrameLog() noexcept { static const bool on=[]{const char* e=std::getenv("WXL_VK_FRAME_LOG");return e&&e[0]=='1';}(); return on; }

    void Consume(void*, Job& job) noexcept {
        onWorker=true;
        if(passQueue>=2){   // Claude CPU-B: the items come in the engine thread's order, none lost, none doubled
            s_pqItems.fetch_add(1,std::memory_order_relaxed);
            if(job.seq!=++s_pqWorkSeq){ s_pqBadOrder.fetch_add(1,std::memory_order_relaxed); s_pqWorkSeq=job.seq; }
        }
        if(job.op){
            if(passQueue>=2){
                s_pqOps.fetch_add(1,std::memory_order_relaxed);
                if(Fnv(job.opData,job.opSize)!=job.hash) s_pqBadBytes.fetch_add(1,std::memory_order_relaxed);
            }
            job.op(job.opCmd,job.opData);
            return;
        }
        DrawPacket& p=job.packet;
        if(passQueue>=2){   // Claude CPU-B: each texture's layout as copied at the draw = the image's own now, in the stream
            for(uint32_t m=p.textureMask;m;m&=m-1){
                unsigned long i=0; _BitScanForward(&i,m);
                s_pqTex.fetch_add(1,std::memory_order_relaxed);
                if(p.images[i].layout!=p.origin[i]->layout) s_pqTexBad.fetch_add(1,std::memory_order_relaxed);
            }
        }
        if(p.delta){   // Claude MT5: the copy brought up to this draw, then read through it
            if(p.deltaLo<=p.deltaHi) std::memcpy(s_mirror[p.deltaLo],p.deltaRows[p.deltaLo],(p.deltaHi-p.deltaLo+1u)*16u);
            if(p.check){
                uint64_t bad=0;
                for(uint32_t r=0;r<draw::Cmd::kVertexRegsHigh;++r) if(std::memcmp(s_mirror[r],p.checkRows[r],16)!=0) ++bad;
                s_checkPackets.fetch_add(1,std::memory_order_relaxed);
                if(bad){ s_checkBadPackets.fetch_add(1,std::memory_order_relaxed); s_checkBadRows.fetch_add(bad,std::memory_order_relaxed); }
            }
            p.Rebase(s_mirror);
        } else
        job.packet.Rebase();
        vk::pipelines::RecordBack(job.packet.buffer, job.packet.cmd, job.front);
    }
    bool StartWorker() noexcept {
        if(worker && worker->Running()) return true;
        if(!worker){ worker=new(std::nothrow) OrderedWorker<Job,kQueue,8>(); if(!worker) return false; }
        if(!worker->Start(&Consume,nullptr)){
            wxl::ScriptMgr::Log(WXL_LOG_WARN,"MT2: the record thread could not be started; hdVkRecordThread stays as it was");
            return false;
        }
        native::impl::VsDeltaAll();   // Claude MT5: the first delta packet carries the whole file
        wxl::ScriptMgr::Log(WXL_LOG_INFO,"MT2: record thread started (queue %u draws)",kQueue);
        return true;
    }
}
MemoryGuard::MemoryGuard() noexcept : locked(memoryLocking.load(std::memory_order_acquire)) { if(locked) memoryLock.lock(); }
MemoryGuard::~MemoryGuard() { if(locked) memoryLock.unlock(); }

bool Init() noexcept {
    if(!packet){try{packet=std::make_unique<DrawPacket>();}catch(...){return false;}}
    return true;
}
void Drain() noexcept {
    if(onWorker || mode!=2 || !worker || !worker->Running()) return;
    ++stats.drains;
    const char* label=s_drainLabel?s_drainLabel:kSiteNames[static_cast<uint32_t>(s_drainFor)];
    s_drainFor=Boundary::Count; s_drainLabel=nullptr;
    if(worker->Pending()){
        ++stats.drainsWaited;
        if(FrameLog()){   // Claude CPU-B: how long the engine thread waits, and for which site
            const uint64_t t0=RpNow();
            worker->Drain();
            NoteWait(label,(RpNow()-t0)/1e6);
        } else worker->Drain();
    } else
    worker->Drain();
    if(idleHook) idleHook();        // Claude CPU-B
    vk::pipelines::FrontResync();   // idle: the real palette cursor is this thread's to read again
}
void Shutdown() noexcept {
    if(!onWorker && worker && worker->Running()){ worker->Drain(); worker->Stop(); }
    memoryLocking.store(false,std::memory_order_release);
    mode=0; enabled=false; packet.reset();
}
bool SetMode(int wanted) noexcept {
    if(onWorker || wanted<0 || wanted>2) return false;
    if(wanted>=1 && !packet) return false;
    if(wanted==2 && WXL_MT_PHASE<2) return false;
    if(mode==2) Drain();                 // the record thread idle before anything changes
    if(wanted==2){
        memoryLocking.store(true,std::memory_order_release);   // before the first draw is queued
        if(!StartWorker()){ memoryLocking.store(mode==2,std::memory_order_release); return false; }
        vk::pipelines::FrontResync();
    } else memoryLocking.store(false,std::memory_order_release);
    mode=wanted; enabled=wanted!=0;
    stats={};
    return true;
}
bool SetEnabled(bool wanted) noexcept { return SetMode(wanted?1:0); }
void SetDeltaRegs(bool on) noexcept { if(!onWorker) s_delta=on; }   // packets already queued keep their own kind
void SetDeltaCheck(bool on) noexcept {
    if(onWorker) return;
    if(on && !s_deltaCheck){ Drain(); s_checkPackets=0; s_checkBadPackets=0; s_checkBadRows=0; s_deltaRowsSent=0; s_deltaPackets=0; }
    s_deltaCheck=on;
}
void DrainFor(Boundary site) noexcept { if(!onWorker) s_drainFor=site; }
void DrainTag(const char* label) noexcept { if(!onWorker) s_drainLabel=label; }
bool OpsQueued() noexcept { return !onWorker && mode==2 && passQueue!=0 && worker && worker->Running() && !bypass; }
bool QueueOp(void(*run)(VkCommandBuffer,const void*),VkCommandBuffer cmd,const void* data,uint32_t size) noexcept {
    if(!OpsQueued() || !run || size>kOpBytes) return false;
    Job* job=worker->Reserve();
    if(!job) return false;
    job->op=run; job->opCmd=cmd; job->opSize=size;
    std::memcpy(job->opData,data,size);
    if(passQueue>=2){ job->seq=++s_pqEngSeq; job->hash=Fnv(job->opData,size); }
    worker->Commit(); ++stats.queued; ++s_opsQueued;
    return true;
}
void SetCopyQueue(int v) noexcept {   // Claude CPU-E
    if(onWorker || v<0 || v>3) return;
    if(mode==2) Drain();   // no op of the previous mode left in the queue
    copyQueue=v;
}
void SetPassQueue(int v) noexcept {
    if(onWorker || v<0 || v>3) return;
    if(mode==2) Drain();   // the record thread idle: the proof's counts start together
    if(v>=2 && passQueue!=v){ s_pqItems=0; s_pqBadOrder=0; s_pqOps=0; s_pqBadBytes=0; s_pqCapLive=0; s_pqCapDiffer=0; s_pqTex=0; s_pqTexBad=0; s_pqWorkSeq=0; s_pqEngSeq=0; s_pqFrames=0; }
    passQueue=v;
}
void NoteCaptureStamp(bool live,bool stamped) noexcept {
    if(passQueue<2) return;
    if(stamped) s_pqCapLive.fetch_add(1,std::memory_order_relaxed);
    if(live!=stamped) s_pqCapDiffer.fetch_add(1,std::memory_order_relaxed);
}
void Observe(Boundary site) noexcept {
    if(onWorker) return;
    if(mode==2){ s_drainFor=site; Drain(); }
    ++stats.sites[static_cast<uint32_t>(site)];
    if(site==Boundary::Draw){
        ++stats.pending; if(stats.pending>stats.maxPending)stats.maxPending=stats.pending;
    } else {
        if(stats.pending){++stats.hypotheticalDrains; stats.pending=0;}
    }
}
void GetAudit(AuditStats& out) noexcept {out=stats;}
void ResetAudit() noexcept {stats={};}
void EndAuditFrame() noexcept {
    Observe(Boundary::Submit);
    if(mode==2){   // HD lot MT4: step aside while FSR/DLSS motion sends most draws back to this thread
        if(bypass){ if(++bypassFrames>=120u){ bypass=false; bypassFrames=0; } }
        else if(stats.sites[0]>=64u && stats.syncDraws*2u>stats.sites[0]){ bypass=true; bypassFrames=0; }
        bypassDrained=false;
    }
    if(frames%120u==119u && s_deltaCheck && mode==2){   // Claude MT5: the proof, with or without the counters
        Drain();
        wxl::ScriptMgr::Log(WXL_LOG_INFO,"PREUVE MT5 registres par difference : %llu dessins compares (banc entier de 256 registres), %llu dessins differents, %llu registres differents; %.1f registres envoyes par dessin au lieu de 256",
          static_cast<unsigned long long>(s_checkPackets.load()),static_cast<unsigned long long>(s_checkBadPackets.load()),
          static_cast<unsigned long long>(s_checkBadRows.load()),s_deltaPackets?double(s_deltaRowsSent)/s_deltaPackets:0.0);
    }
    if(mode==2 && passQueue>=2 && ++s_pqFrames%120u==0u){   // Claude CPU-B: the proof (drained just above, at the submit)
        if(std::FILE* f=std::fopen("Logs\\preuve-passes.txt","a")){
            std::fprintf(f,"%s passes en file (CPU-B) : %llu images, %llu elements recus dans l'ordre du thread principal (dont %llu fins/debuts de passe et effacements), %llu hors ordre, %llu ops alterees ; capture : %llu dessins pris, %llu dont l'etat en direct differait de la decision figee a la mise en file (pris selon la decision figee, comme sans file) ; textures : %llu layouts copies au dessin, %llu differents du flux\n",
              passQueue==3?"TEMOIN (copie du layout vivant, l'ancien defaut)":"PREUVE",static_cast<unsigned long long>(s_pqFrames),static_cast<unsigned long long>(s_pqItems.load()),static_cast<unsigned long long>(s_pqOps.load()),
              static_cast<unsigned long long>(s_pqBadOrder.load()),static_cast<unsigned long long>(s_pqBadBytes.load()),
              static_cast<unsigned long long>(s_pqCapLive.load()),static_cast<unsigned long long>(s_pqCapDiffer.load()),
              static_cast<unsigned long long>(s_pqTex.load()),static_cast<unsigned long long>(s_pqTexBad.load()));
            std::fclose(f);
        }
    }
    if(mode==2 && FrameLog()){   // Claude CPU-B: the engine thread's waits on the record thread, every 64 frames
        s_waits.drains+=stats.drainsWaited; s_waits.ops+=s_opsQueued; ++s_waits.frames;
        if(s_waits.frames==64){
            if(std::FILE* f=std::fopen("Logs\\mt2-attentes.txt","a")){
                double total=0; for(uint32_t i=0;i<s_waits.rows;++i) total+=s_waits.ms[i];
                std::fprintf(f,"passes en file %d | attente du thread d'enregistrement %.3f ms/image (%.1f vidages attendus), %.1f ops en file/image |",passQueue,total/64,double(s_waits.drains)/64,double(s_waits.ops)/64);
                for(uint32_t i=0;i<s_waits.rows;++i) std::fprintf(f," %s %.3f ms (%.1f)",s_waits.label[i],s_waits.ms[i]/64,double(s_waits.n[i])/64);
                std::fprintf(f,"\n"); std::fclose(f);
            }
            s_waits=Waits();
        }
    }
    s_opsQueued=0;
    if(++frames%120u==0u && AuditLog()){
        if(mode==2){
            const uint64_t full=worker?worker->GetCounters().fullWaits:0;
            wxl::ScriptMgr::Log(WXL_LOG_INFO,
              "MT2 audit frame %llu: draws %llu, on the record thread %llu, on the engine thread %llu (query/FSR/other), drains %llu (%llu waited), pending peak %llu; queue full since start %llu",
              static_cast<unsigned long long>(frames),static_cast<unsigned long long>(stats.sites[0]),
              static_cast<unsigned long long>(stats.queued),static_cast<unsigned long long>(stats.syncDraws),
              static_cast<unsigned long long>(stats.drains),static_cast<unsigned long long>(stats.drainsWaited),
              static_cast<unsigned long long>(stats.maxPending),static_cast<unsigned long long>(full));
            if(rpQueued) wxl::ScriptMgr::Log(WXL_LOG_INFO,"RPROF2: %llu queued draws: front %.3f us, snapshot %.3f us a draw; %.0f bytes a draw, %.1f%% with the 256-row file",
              static_cast<unsigned long long>(rpQueued),rpFrontNs/1000.0/rpQueued,rpSnapNs/1000.0/rpQueued,double(rpBytes)/rpQueued,100.0*rpHigh/rpQueued);
            rpFrontNs=rpSnapNs=rpBytes=rpHigh=rpQueued=0;
        } else
        wxl::ScriptMgr::Log(WXL_LOG_INFO,
          "MT%d audit frame %llu: draws %llu, snapshots %llu, fallbacks %llu, hypothetical drains %llu, pending peak %llu; CPU bytes estimate %llu (not GPU/FPS)",
          mode,static_cast<unsigned long long>(frames),static_cast<unsigned long long>(stats.sites[0]),
          static_cast<unsigned long long>(stats.snapshots),static_cast<unsigned long long>(stats.fallbacks),
          static_cast<unsigned long long>(stats.hypotheticalDrains),static_cast<unsigned long long>(stats.maxPending),
          static_cast<unsigned long long>(stats.copiedBytesEstimate));
    }
    ResetAudit();   // as the kit: the line shows one frame
}
bool TryRecord(VkCommandBuffer buffer,VkRenderPass pass,uint32_t slot,const draw::Cmd& cmd,bool inQuery) noexcept {
    if(mode==2){
        ++stats.sites[0];
        if(bypass){ if(!bypassDrained){ DrainTag("dessin (FSR, mis de cote)"); Drain(); bypassDrained=true; } ++stats.syncDraws; return false; }   // HD lot MT4
        // A draw an occlusion query counts reads DrawnCount() right after: it stays on this thread, after a drain.
        if(inQuery || !worker || !worker->Running()){ DrainTag(inQuery?"dessin compte par une requete":"dessin (fil arrete)"); Drain(); ++stats.syncDraws; return false; }
        if(!worker->PendingCached()) vk::pipelines::FrontResync();   // the queue is done (its writes acquired with the count; HD lot MT3: the producer's cached count)
        Job* job=worker->Reserve();
        if(!job){ DrainTag("dessin (file refusee)"); Drain(); ++stats.syncDraws; return false; }
        job->op=nullptr;   // Claude CPU-B: a draw
        const bool rp=AuditLog();
        const uint64_t rp0=rp?RpNow():0;
        const auto front=vk::pipelines::RecordFront(buffer,pass,slot,cmd,job->front);
        const uint64_t rp1=rp?RpNow():0;
        switch(front){
        case vk::pipelines::FrontResult::Queue: {
            if(rp){
                rpFrontNs+=rp1-rp0; ++rpQueued;
                rpBytes+=offsetof(draw::Cmd,vertexConst);
                if(s_delta){ uint32_t lo,hi; if(native::impl::VsDelta(lo,hi)) rpBytes+=(hi-lo+1u)*16u; }
                else rpBytes+=(cmd.vertexRows?draw::Cmd::kVertexRegs*16u:0u)+(cmd.vertexConstHigh && cmd.vconst==draw::Cmd::kVertexRegsHigh?cmd.highRows*16u:0u);
                if(cmd.vertexConstHigh && cmd.vconst==draw::Cmd::kVertexRegsHigh) ++rpHigh;
            }
            uint32_t dLo=1,dHi=0;
            const bool useDelta=s_delta;
            if(useDelta) native::impl::VsDelta(dLo,dHi);
            if(useDelta ? !job->packet.SnapshotDelta(buffer,pass,slot,cmd,native::impl::VsRegisterFile(),dLo,dHi,s_deltaCheck)
                        : !job->packet.Snapshot(buffer,pass,slot,cmd)){
                // The front has run (Accept's effects are done): the back runs here, after the queue, in order.
                worker->Cancel(); DrainTag("dessin (copie refusee)"); Drain(); ++stats.syncDraws;
                vk::pipelines::RecordBack(buffer,cmd,job->front);   // the cancelled slot is still this thread's
                return true;
            }
            if(rp) rpSnapNs+=RpNow()-rp1;
            if(useDelta){   // Claude MT5: these rows are now on their way to the record thread's copy
                native::impl::VsDeltaTaken();
                if(s_deltaCheck){ ++s_deltaPackets; if(dLo<=dHi) s_deltaRowsSent+=dHi-dLo+1u; }
            }
            if(passQueue>=2) job->seq=++s_pqEngSeq;   // Claude CPU-B: the proof's order
            worker->Commit(); ++stats.queued;
            if(worker->PendingCached()>stats.maxPending) stats.maxPending=worker->PendingCached();   // HD lot MT3: no cross-core read per draw
            return true;
        }
        case vk::pipelines::FrontResult::Skipped:
            worker->Cancel(); return true;   // Accept() refused it on this thread, counted, exactly as Record()
        default:
            worker->Cancel(); DrainTag("dessin non eligible (palette, decoupe)"); Drain(); ++stats.syncDraws; return false;   // FSR motion, split timing, not ready
        }
    }
    Observe(Boundary::Draw);
#if WXL_MT_PHASE == 0
    return false;
#else
    if(!packet || !packet->Snapshot(buffer,pass,slot,cmd)) {++stats.fallbacks;return false;}
    ++stats.snapshots;
    stats.copiedBytesEstimate+=sizeof(draw::Cmd)+draw::Cmd::kVertexRegs*16u;
    if(cmd.vconst==draw::Cmd::kVertexRegsHigh && cmd.vertexConstHigh)stats.copiedBytesEstimate+=cmd.highRows*16u;
    if(cmd.paletteRows)stats.copiedBytesEstimate+=cmd.paletteCount*16u;
    for(auto* p:cmd.texture)if(p)stats.copiedBytesEstimate+=sizeof(vk::texture::Image);
    packet->Rebase();
    vk::pipelines::Record(packet->buffer,packet->pass,packet->frameSlot,packet->cmd);
    return true;
#endif
}
}
