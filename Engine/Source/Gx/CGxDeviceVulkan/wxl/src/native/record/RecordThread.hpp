// SPDX-License-Identifier: GPL-3.0-or-later
#pragma once
#include "draw/Cmd.hpp"
#include <cstdint>
namespace wxlvk::recordthread {
// Engine (producer) thread only, except where said. hdVkRecordThread:
//   0  native: one ordinary branch on each site, then the original code (no packet, lock or atomic);
//   1  MT1: the draw's Cmd copied into a packet and recorded from it at once, on the engine thread (test of the copy);
//   2  MT2 (Claude 2026-11-04): Record()'s front on the engine thread, its back on one record thread, in order.
//      Every site below waits for the record thread to be idle (a drain) before it reads or records anything.
inline int mode=0;
inline bool enabled=false;           ///< mode != 0 (kept for the kit's sites)
inline bool inDraw=false;            ///< slot 42 asking for its pass: Pass() does not drain for the draw's own request
inline bool Enabled() noexcept {return enabled;}
inline bool Async() noexcept {return mode==2;}
enum class Boundary:uint32_t {Draw,Pass,Outside,PrePass,Submit,Query,Stats,Stage,Capture,Invalidate,Shutdown,Count};
struct AuditStats {
    uint64_t sites[static_cast<uint32_t>(Boundary::Count)]{};
    uint64_t snapshots=0,fallbacks=0,copiedBytesEstimate=0;
    uint64_t hypotheticalDrains=0,pending=0,maxPending=0;
    uint64_t queued=0,syncDraws=0,drains=0,drainsWaited=0,fullWaits=0;   ///< MT2
};
/// Claude CPU-B (hdVkPassQueue): a pass's end and begin, and a clear in it, go through the queue in order like the
/// draws instead of draining first. 0 = the original (drain, then recorded here); 1 = queued (default); 2 = queued with the
/// proof (every item's place and every op's bytes checked on the record thread; Logs\preuve-passes.txt).
/// 3 = the proof's control: as 2, with the draw's texture copies taken from the live layouts (the fault found on the
/// way, a pass end still queued), which the proof must count.
inline int passQueue=1;
/// Claude CPU-E (hdVkCopyQueue): the sun shadow layers' copy (CopySunShadowLayers) queued in order as an op instead of
/// draining (needs hdVkPassQueue on). 0 = the original (drain, then recorded here); 1 = queued (default); 2 = queued with
/// the proof (each copied image's layout as the engine thread read it in the queue, compared on the record thread with the
/// image's real layout when the op runs; Logs\preuve-copies.txt); 3 = the proof's control (the engine thread reads the
/// live layouts, not the queue's: the fault CPU-B met, which the proof must count).
inline int copyQueue=1;
void SetCopyQueue(int v) noexcept;

constexpr uint32_t kOpBytes=1536;   ///< the largest op (present's PassOp)
/// Engine thread: an op can be queued now (MT2 running and not stepped aside, hdVkPassQueue on).
bool OpsQueued() noexcept;
/// Engine thread: `run(cmd, data)` runs on the record thread after every item queued before it, on a copy of `size`
/// bytes of `data`. False: nothing queued (the caller drains and records it itself).
bool QueueOp(void(*run)(VkCommandBuffer,const void*),VkCommandBuffer cmd,const void* data,uint32_t size) noexcept;
void SetPassQueue(int v) noexcept;
/// Claude CPU-B: called on the engine thread after every drain (the record thread idle): present's overlay emptied.
inline void (*idleHook)()=nullptr;
/// Claude CPU-B (measure): the site the next Drain() waits for, when a caller drains without Observe().
void DrainFor(Boundary site) noexcept;
/// Claude CPU-B (measure): a name for the next Drain()'s wait (a string literal), over the site.
void DrainTag(const char* label) noexcept;
/// Claude CPU-B (record thread, proof only): a queued draw's capture decision, as stamped at the queue and as live now.
void NoteCaptureStamp(bool live,bool stamped) noexcept;
/// A boundary: mode 1 counts it; mode 2 drains first. A no-op on the record thread itself.
void Observe(Boundary site) noexcept;
/// Mode 2: returns once every queued draw is recorded. Anywhere else (or on the record thread): nothing.
void Drain() noexcept;
void GetAudit(AuditStats& out) noexcept;
void ResetAudit() noexcept;
void EndAuditFrame() noexcept;
bool Init() noexcept;
void Shutdown() noexcept;
bool SetMode(int wanted) noexcept;
bool SetEnabled(bool wanted) noexcept;   ///< the kit's 0/1
/// True: the draw was taken (queued, recorded, or skipped as Record() would). False: the caller runs Record().
bool TryRecord(VkCommandBuffer,VkRenderPass,uint32_t,const draw::Cmd&, bool inQuery=false) noexcept;
/// Claude MT5 (hdVkDeltaRegs, hdVkDeltaCheck; engine thread): a queued draw carries only the vertex registers written
/// since the previous one, the record thread keeping its own copy of the file (on by default); and the proof, which
/// also sends the whole file with every draw and compares it with that copy (Vulkan.log, every 120 frames).
void SetDeltaRegs(bool on) noexcept;
void SetDeltaCheck(bool on) noexcept;
/// RAII for slot 42's own Pass() request.
struct DrawPassScope { bool old; DrawPassScope() noexcept:old(inDraw){inDraw=true;} ~DrawPassScope(){inDraw=old;} };
/// Mode 2: the memory module's lock (the record thread can make a ring spill buffer). Unlocked in modes 0/1.
struct MemoryGuard { bool locked; MemoryGuard() noexcept; ~MemoryGuard(); MemoryGuard(const MemoryGuard&)=delete; MemoryGuard& operator=(const MemoryGuard&)=delete; };
}
