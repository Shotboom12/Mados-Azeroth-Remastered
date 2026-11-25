// SPDX-License-Identifier: GPL-3.0-or-later
// HD (Claude) lot D1, 5 nov 2026: GPU time of each compute pass of one effect (AO, sun shadows), MEASURE ONLY.
// Off unless hdGpuPasses is 1 (set back to 0 at every start): then a timestamp after each pass, read back when
// the frame slot comes round again (its frame has completed), and every 2 s one block of lines in a Logs\ file.
// Nothing is changed in what the passes compute or draw.
#pragma once
#include <array>
#include <chrono>
#include <cstdint>
#include <cstdio>
#include <vector>
#include "wxl/VkRenderApi.h"

namespace HD::PassTimer {
constexpr uint32_t kSlots = 8, kStamps = 16;

struct Timer {
    PFN_vkCreateQueryPool CreateQueryPool = nullptr;
    PFN_vkDestroyQueryPool DestroyQueryPool = nullptr;
    PFN_vkCmdResetQueryPool CmdResetQueryPool = nullptr;
    PFN_vkCmdWriteTimestamp CmdWriteTimestamp = nullptr;
    PFN_vkGetQueryPoolResults GetQueryPoolResults = nullptr;
    VkDevice device = VK_NULL_HANDLE;
    double period = 0;          // ns per tick
    uint64_t mask = ~uint64_t(0);
    std::array<VkQueryPool, kSlots> pools{};
    std::array<uint32_t, kSlots> written{};
    double ms[kStamps]{};
    uint32_t passes = 0;        // most passes seen in one frame
    uint64_t frames = 0;
    bool available = false, on = false;
    double last = -1;

    void Init(const WXL_VkDeviceInfo& d) {
        if (available || !d.device || !d.getDeviceProcAddr || !d.getInstanceProcAddr || !d.frameSlots || d.frameSlots > kSlots) return;
        CreateQueryPool = reinterpret_cast<PFN_vkCreateQueryPool>(d.getDeviceProcAddr(d.device, "vkCreateQueryPool"));
        DestroyQueryPool = reinterpret_cast<PFN_vkDestroyQueryPool>(d.getDeviceProcAddr(d.device, "vkDestroyQueryPool"));
        CmdResetQueryPool = reinterpret_cast<PFN_vkCmdResetQueryPool>(d.getDeviceProcAddr(d.device, "vkCmdResetQueryPool"));
        CmdWriteTimestamp = reinterpret_cast<PFN_vkCmdWriteTimestamp>(d.getDeviceProcAddr(d.device, "vkCmdWriteTimestamp"));
        GetQueryPoolResults = reinterpret_cast<PFN_vkGetQueryPoolResults>(d.getDeviceProcAddr(d.device, "vkGetQueryPoolResults"));
        auto props = reinterpret_cast<PFN_vkGetPhysicalDeviceProperties>(d.getInstanceProcAddr(d.instance, "vkGetPhysicalDeviceProperties"));
        auto queues = reinterpret_cast<PFN_vkGetPhysicalDeviceQueueFamilyProperties>(d.getInstanceProcAddr(d.instance, "vkGetPhysicalDeviceQueueFamilyProperties"));
        if (!CreateQueryPool || !DestroyQueryPool || !CmdResetQueryPool || !CmdWriteTimestamp || !GetQueryPoolResults || !props || !queues) return;
        VkPhysicalDeviceProperties limits{};
        props(d.physicalDevice, &limits);
        uint32_t count = 0;
        queues(d.physicalDevice, &count, nullptr);
        std::vector<VkQueueFamilyProperties> families(count);
        queues(d.physicalDevice, &count, families.data());
        if (d.queueFamily >= count || !families[d.queueFamily].timestampValidBits || !limits.limits.timestampComputeAndGraphics || limits.limits.timestampPeriod <= 0) return;
        const uint32_t bits = families[d.queueFamily].timestampValidBits;
        mask = bits >= 64 ? ~uint64_t(0) : ((uint64_t(1) << bits) - 1);
        period = limits.limits.timestampPeriod;
        device = d.device;
        for (uint32_t i = 0; i < d.frameSlots; ++i) {
            VkQueryPoolCreateInfo qp{VK_STRUCTURE_TYPE_QUERY_POOL_CREATE_INFO};
            qp.queryType = VK_QUERY_TYPE_TIMESTAMP;
            qp.queryCount = kStamps;
            if (CreateQueryPool(device, &qp, nullptr, &pools[i]) != VK_SUCCESS) {
                Shutdown();
                return;
            }
        }
        available = true;
    }

    // At the start of the effect's commands for this slot (outside a render pass, the slot's last frame completed).
    void Begin(VkCommandBuffer cmd, uint32_t slot) {
        if (!available || slot >= kSlots || !pools[slot]) return;
        const uint32_t n = written[slot];
        if (n > 1) {
            uint64_t r[2 * kStamps]{};
            const VkResult got = GetQueryPoolResults(device, pools[slot], 0, n, sizeof r, r, 2 * sizeof(uint64_t), VK_QUERY_RESULT_64_BIT | VK_QUERY_RESULT_WITH_AVAILABILITY_BIT);
            bool all = got == VK_SUCCESS || got == VK_NOT_READY;
            for (uint32_t i = 0; i < n && all; ++i) all = r[2 * i + 1] != 0;
            if (all) {
                for (uint32_t i = 1; i < n; ++i) ms[i - 1] += double((r[2 * i] - r[2 * i - 2]) & mask) * period * 1e-6;
                if (n - 1 > passes) passes = n - 1;
                ++frames;
            }
        }
        written[slot] = 0;
        if (!on) return;
        CmdResetQueryPool(cmd, pools[slot], 0, kStamps);
        CmdWriteTimestamp(cmd, VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT, pools[slot], 0);
        written[slot] = 1;
    }

    // After each pass (after its barrier).
    void Stamp(VkCommandBuffer cmd, uint32_t slot) {
        if (!available || !on || slot >= kSlots || !written[slot] || written[slot] >= kStamps) return;
        CmdWriteTimestamp(cmd, VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT, pools[slot], written[slot]);
        ++written[slot];
    }

    void Clear() {
        for (double& v : ms) v = 0;
        frames = 0;
        passes = 0;
    }

    // Once per frame, from the module's Record: follows hdGpuPasses, writes a block every 2 s.
    void Poll(bool want, const char* file, const char* title, const char* const* names, uint32_t count) {
        const double now = std::chrono::duration<double>(std::chrono::steady_clock::now().time_since_epoch()).count();
        if (want != on) {
            on = want;
            for (auto& w : written) w = 0;
            Clear();
            last = now;
            return;
        }
        if (!on || now - last < 2.0) return;
        last = now;
        if (std::FILE* f = std::fopen(file, "a")) {
            if (!available) {
                std::fprintf(f, "t %.1f %s : pas d'horodatage GPU sur cette file\n", now, title);
            } else if (frames) {
                double total = 0;
                for (uint32_t i = 0; i < passes; ++i) total += ms[i];
                std::fprintf(f, "t %.1f %s : images %llu | total %.3f ms/image\n", now, title, static_cast<unsigned long long>(frames), total / double(frames));
                for (uint32_t i = 0; i < passes; ++i)
                    std::fprintf(f, "   %-24s %.3f ms/image\n", i < count ? names[i] : "?", ms[i] / double(frames));
            }
            std::fclose(f);
        }
        Clear();
    }

    void Shutdown() {
        for (auto& p : pools) {
            if (p && DestroyQueryPool) DestroyQueryPool(device, p, nullptr);
            p = VK_NULL_HANDLE;
        }
        for (auto& w : written) w = 0;
        available = false;
    }
};
}
