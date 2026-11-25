// CPU-F, 18 November 2026. No GPU change; all modes OFF until measured in game.
#pragma once
#include <atomic>
#include <cstddef>
#include <cstdint>
#include <cstring>
#include <xmmintrin.h>

namespace HD::CpuF {
enum : uint32_t { Constants = 1, Query = 2, Gather = 4, Coherent = 8, Mirror = 16, All = 31 };
inline std::atomic<uint32_t> mode{0}, proof{0};
inline std::atomic<uint64_t> checked{0}, bad{0}, reused{0};
inline std::atomic<uint64_t> flushChecked{0}, controls{0};
inline void Record(uint32_t check, bool equal) {
    checked.fetch_add(1, std::memory_order_relaxed);
    if (!equal) bad.fetch_add(1, std::memory_order_relaxed);
    if (check == 2) controls.fetch_add(1, std::memory_order_relaxed);
}
inline bool On(uint32_t bit) { return (mode.load(std::memory_order_relaxed) & bit) != 0; }

// Coherency and host-store ordering are separate. Remember skipped flushes per
// writing thread, then fence BEFORE it publishes completion or submits its commands.
// The pending flag survives a runtime mode change until the writes are ordered.
inline thread_local bool pendingHostWrites = false;
inline void CoherentWrite() noexcept { pendingHostWrites = true; }
inline void PublishHostWrites() noexcept {
    if (pendingHostWrites) { _mm_sfence(); pendingHostWrites = false; }
}

// The scalar reference intentionally keeps the original component-by-component stores.
inline void SetScalar(float* dest, const float* src, uint32_t index, uint32_t count,
                      uint32_t& lo, uint32_t& hi) {
    for (uint32_t i = index; i < index + count; ++i, dest += 4, src += 4) {
        bool changed = false;
        for (uint32_t c = 0; c < 4; ++c) {
            if (src[c] != dest[c]) { dest[c] = src[c]; changed = true; }
        }
        if (changed) { if (lo > i) lo = i; if (hi < i) hi = i; }
    }
}

inline bool PartialOverlap(const float* dest, const float* src, uint32_t count) {
    const auto d = reinterpret_cast<uintptr_t>(dest), s = reinterpret_cast<uintptr_t>(src);
    const auto bytes = size_t(count) * 4 * sizeof(float);
    return d != s && (d < s ? s - d < bytes : d - s < bytes);
}

inline void SetFast(float* dest, const float* src, uint32_t index, uint32_t count,
                    uint32_t& lo, uint32_t& hi) {
    // Preserve the original's sequential aliasing when a caller passes overlapping spans.
    if (PartialOverlap(dest, src, count)) { SetScalar(dest, src, index, count, lo, hi); return; }
    for (uint32_t i = index; i < index + count; ++i, dest += 4, src += 4) {
        const __m128 oldValue = _mm_loadu_ps(dest), newValue = _mm_loadu_ps(src);
        const __m128 changed = _mm_cmpneq_ps(newValue, oldValue);
        if (_mm_movemask_ps(changed)) {
            // Float comparison, not memcmp: equal signed zero keeps the OLD bits, as before.
            // Unordered (NaN) lanes are changed and receive exactly the source payload.
            _mm_storeu_ps(dest, _mm_or_ps(_mm_and_ps(changed, newValue), _mm_andnot_ps(changed, oldValue)));
            if (lo > i) lo = i;
            if (hi < i) hi = i;
        }
    }
}

__declspec(noinline) inline void SetProof(float* dest, const float* src, uint32_t index, uint32_t count,
                uint32_t& lo, uint32_t& hi) {
    const uint32_t check = proof.load(std::memory_order_relaxed);
    // Proof is intentionally expensive and must be OFF during performance measurements.
    if (!check || count > 256 || PartialOverlap(dest, src, count)) {
        SetFast(dest, src, index, count, lo, hi); return;
    }
    float expected[1024];
    std::memcpy(expected, dest, size_t(count) * 16);
    uint32_t expectedLo = lo, expectedHi = hi;
    // src==dest must read the original bytes, including signalling/quiet NaN payloads.
    SetScalar(expected, src == dest ? expected : src, index, count, expectedLo, expectedHi);
    SetFast(dest, src, index, count, lo, hi);
    const bool equal = lo == expectedLo && hi == expectedHi &&
        std::memcmp(dest, expected, size_t(count) * 16) == 0;
    Record(check, equal);
    if (!equal) { std::memcpy(dest, expected, size_t(count) * 16); lo = expectedLo; hi = expectedHi; }
}

inline void Set(float* dest, const float* src, uint32_t index, uint32_t count,
                uint32_t& lo, uint32_t& hi) {
    if (!proof.load(std::memory_order_relaxed)) SetFast(dest, src, index, count, lo, hi);
    else SetProof(dest, src, index, count, lo, hi);
}

// The key is the existing allocation owner+generation. No Block layout change,
// no mutable allocator table read, and no cached pointer to a freed allocation.
template<size_t N> struct CoherentMemo {
    std::atomic<uint64_t> tags[N]{};
    void Publish(uint32_t owner, uint32_t generation, bool coherent) {
        tags[owner].store((uint64_t(generation)<<1)|uint64_t(coherent), std::memory_order_release);
    }
    bool Matches(uint32_t owner, uint32_t generation) const {
        return owner<N && tags[owner].load(std::memory_order_acquire)==((uint64_t(generation)<<1)|1);
    }
};

// Query-local, row-local cache. Collisions merely lose a hit. No pointer outlives the row.
template<class T, size_t N = 512> struct RowSeen {
    static_assert(N && (N & (N - 1)) == 0);
    T* slots[N];
    void Clear() { std::memset(slots, 0, sizeof(slots)); }
    static size_t Slot(const T* ptr) {
        return size_t(((reinterpret_cast<uintptr_t>(ptr) >> 4) * UINT64_C(0x9e3779b97f4a7c15)) >> 32) & (N - 1);
    }
    bool Has(T* ptr) const { return slots[Slot(ptr)] == ptr; }
    void Put(T* ptr) { slots[Slot(ptr)] = ptr; }
};
}
