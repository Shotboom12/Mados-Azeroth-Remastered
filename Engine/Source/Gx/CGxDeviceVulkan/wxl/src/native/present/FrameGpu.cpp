// The frame's GPU time and the device's shared work, from timestamp queries (wxl.vk.render GetFrameStats).
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

#include "native/present/Internal.hpp"
#include "native/record/RecordThread.hpp"   // Claude GPU0
#include <algorithm>
#include <chrono>
#include <cstdio>
#include <cstring>

extern PFN_vkCmdBeginDebugUtilsLabelEXT g_gpu0BeginLabel;   // Claude GPU0 : vulkan/context/Instance.cpp (null sans WXL_VK_LABELS=1)
extern PFN_vkCmdEndDebugUtilsLabelEXT   g_gpu0EndLabel;

// One query pool per frame slot, kQueries timestamps: the main buffer's start (TOP_OF_PIPE, at the frame's open), the
// frame's end (BOTTOM_OF_PIPE, after its last pass: the present's copy and its wait for the swapchain image are left out,
// so vsync does not read as GPU time), the pre-pass's start (the pre-pass is submitted first; it resets its own query,
// since a reset recorded in the main buffer would run after it), and two per lane. A slot's results are read at its next
// open, after its fence: they are there, and a result that is not is skipped, never waited for. The frame's span is from
// the earlier start to the end -- what the GPU spent on the frame's submission, the modules' work included; a mid-frame
// flush (a read-back) puts its CPU wait into that frame's span, which the line's maximum then shows. Kept for the device's
// life, as the stages' pools (src/stages/Timing.cpp): nothing Vulkan runs at exit.
namespace wxlvk::native::present::detail
{
    namespace
    {
        enum Query : uint32_t
        {
            kMainStart = 0,
            kFrameEnd,
            kLaneFirst,                                   ///< lane L's ends at kLaneFirst + 2 L, + 1
            kPreStart = kLaneFirst + 2 * kGpuLaneCount,   ///< reset and written in the pre-pass
            kQueries
        };

        struct GpuSlot
        {
            VkQueryPool pool     = VK_NULL_HANDLE;
            bool        open     = false;   ///< the frame's start was written (kMainStart)
            bool        ended    = false;   ///< kFrameEnd written
            bool        pre      = false;   ///< kPreStart written
            uint32_t    lanes    = 0;       ///< lanes both of whose ends were written
            uint32_t    breaks   = 0;
        };

        struct Ring
        {
            double   ms[kGpuWindow] = {};
            uint32_t count = 0, next = 0;
            double   last  = -1.0;
            uint64_t at    = 0;   ///< the harvest that noted the latest value
            void Note(double v, uint64_t harvest)
            {
                at = harvest;
                ms[next] = v;
                next     = (next + 1) % kGpuWindow;
                if (count < kGpuWindow) ++count;
                last = v;
            }
            double Avg() const
            {
                if (!count) return -1.0;
                double sum = 0.0;
                for (uint32_t i = 0; i < count; ++i) sum += ms[i];
                return sum / count;
            }
            double Max() const
            {
                if (!count) return -1.0;
                double m = 0.0;
                for (uint32_t i = 0; i < count; ++i) m = ms[i] > m ? ms[i] : m;
                return m;
            }
        };

        struct State
        {
            bool     tried     = false;
            bool     available = false;
            double   nsPerTick = 1.0;
            uint64_t mask      = ~0ull;
            GpuSlot  slots[kFramesInFlight];
            uint32_t current   = 0;     ///< the slot of the frame being recorded
            bool     recording = false; ///< a frame is open (its main start written)
            Ring     frame;
            Ring     lanes[kGpuLaneCount];
            uint32_t breaks    = 0;
            uint64_t harvests  = 0;   ///< frames read so far
            double   sessionSum = 0.0, sessionMax = 0.0;
            uint64_t sessionCount = 0;
        };
        State t;

// --- Claude GPU0 (17 nov 2026, MESURE SEULEMENT) : le temps GPU zone par zone ----------------------------------------
// Une reserve de kMarks horodatages par emplacement d'image. Chaque repere (BOTTOM_OF_PIPE) note la fin de tout ce qui le
// precede dans les commandes ; la zone d'un repere dure jusqu'au repere suivant. Les reperes du moteur passent par la
// file du thread d'enregistrement (une op, a sa place parmi les dessins) ; ceux des etapes HD et des MidPasses sont
// ecrits directement (le principal enregistre lui-meme a ce moment, apres une attente). Relus a la reouverture de
// l'emplacement (sa barriere attendue). Avec WXL_VK_LABELS=1 au lancement, chaque repere porte aussi une etiquette
// VK_EXT_debug_utils (Nsight, VulkanProfiler). Eteint : rien n'est ecrit, rien n'est cree.
        constexpr uint32_t kMarks = 384, kLabel = 48, kRows = 128;
        struct MarkSlot
        {
            VkQueryPool pool  = VK_NULL_HANDLE;
            uint32_t    count = 0;
            char        label[kMarks][kLabel] = {};
        };
        struct Row
        {
            char   label[kLabel] = {};
            double ms = 0.0, n = 0.0;
        };
        struct Zones
        {
            bool     on = false, tried = false, ok = false, active = false;
            uint32_t slot = 0;
            MarkSlot slots[kFramesInFlight];
            char     zone[kLabel] = "hors monde (interface, presentation)";
            Row      rows[kRows];
            uint32_t rowCount = 0;
            uint64_t frames = 0, skipped = 0, overflow = 0, refused = 0;
            double   span = 0.0, gpu = 0.0;
            uint64_t gpuFrames = 0;
            std::chrono::steady_clock::time_point last = std::chrono::steady_clock::now();
        };
        Zones z;

        struct MarkOp
        {
            VkQueryPool pool;
            uint32_t    index;
            char        label[kLabel];
        };

        // Chaque repere ferme la plage de la zone precedente et ouvre la sienne (memes regles que les horodatages : les
        // reperes sont enregistres dans l'ordre de la file). ZonesEnd ferme la derniere. Une plage peut passer d'un
        // tampon principal a l'autre de la meme file, ce que VK_EXT_debug_utils permet.
        bool labelOpen = false;

        void LabelClose(VkCommandBuffer cmd)
        {
            if (!labelOpen || !g_gpu0EndLabel) return;
            g_gpu0EndLabel(cmd);
            labelOpen = false;
        }

        void Label(VkCommandBuffer cmd, const char* text)
        {
            if (!g_gpu0BeginLabel) return;
            LabelClose(cmd);
            VkDebugUtilsLabelEXT l = {};
            l.sType      = VK_STRUCTURE_TYPE_DEBUG_UTILS_LABEL_EXT;
            l.pLabelName = text;
            g_gpu0BeginLabel(cmd, &l);
            labelOpen = true;
        }

        void RunMarkOp(VkCommandBuffer cmd, const void* data)
        {
            const MarkOp& o = *static_cast<const MarkOp*>(data);
            s.dapi->CmdWriteTimestamp(cmd, VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT, o.pool, o.index);
            Label(cmd, o.label);
        }

        void Copy(char* to, const char* from)
        {
            std::strncpy(to, from ? from : "?", kLabel - 1);
            to[kLabel - 1] = '\0';
        }

        bool ZonesInit()
        {
            z.tried = true;
            if (!t.available) return false;
            VkQueryPoolCreateInfo info = {};
            info.sType      = VK_STRUCTURE_TYPE_QUERY_POOL_CREATE_INFO;
            info.queryType  = VK_QUERY_TYPE_TIMESTAMP;
            info.queryCount = kMarks;
            for (MarkSlot& m : z.slots)
                if (s.dapi->CreateQueryPool(s.device, &info, nullptr, &m.pool) != VK_SUCCESS)
                {
                    m.pool = VK_NULL_HANDLE;
                    return false;
                }
            return true;
        }

        void ZonesClear()
        {
            z.rowCount = 0;
            z.frames = z.skipped = z.overflow = z.refused = z.gpuFrames = 0;
            z.span = z.gpu = 0.0;
            z.last = std::chrono::steady_clock::now();
        }

        void AddRow(const char* label, double ms)
        {
            for (int pass = 0; pass < 2; ++pass)
            {
                for (uint32_t i = 0; i < z.rowCount; ++i)
                    if (!std::strcmp(z.rows[i].label, label))
                    {
                        z.rows[i].ms += ms;
                        z.rows[i].n += 1.0;
                        return;
                    }
                if (z.rowCount < kRows) break;
                label = "(autres zones)";
            }
            if (z.rowCount >= kRows) return;
            Row& r = z.rows[z.rowCount++];
            Copy(r.label, label);
            r.ms = ms;
            r.n  = 1.0;
        }

        /// L'image precedente de cet emplacement : ses zones ajoutees aux totaux.
        void ZonesHarvest(MarkSlot& m)
        {
            const uint32_t n = m.count;
            m.count = 0;
            if (n < 2 || !m.pool) return;
            static uint64_t r[2 * kMarks];
            const VkResult got = s.dapi->GetQueryPoolResults(s.device, m.pool, 0, n, sizeof(uint64_t) * 2 * n, r,
                                                             2 * sizeof(uint64_t),
                                                             VK_QUERY_RESULT_64_BIT | VK_QUERY_RESULT_WITH_AVAILABILITY_BIT);
            if (got != VK_SUCCESS && got != VK_NOT_READY) { ++z.skipped; return; }
            for (uint32_t i = 0; i < n; ++i)
                if (!r[2 * i + 1]) { ++z.skipped; return; }
            for (uint32_t i = 0; i + 1 < n; ++i)
            {
                const uint64_t d  = (r[2 * (i + 1)] - r[2 * i]) & t.mask;
                const double   ms = d > (t.mask >> 1) ? 0.0 : static_cast<double>(d) * t.nsPerTick / 1.0e6;
                AddRow(m.label[i], ms);
            }
            const uint64_t all = (r[2 * (n - 1)] - r[0]) & t.mask;
            z.span += all > (t.mask >> 1) ? 0.0 : static_cast<double>(all) * t.nsPerTick / 1.0e6;
            ++z.frames;
            if (t.frame.last >= 0.0) { z.gpu += t.frame.last; ++z.gpuFrames; }
        }

        void ZonesWrite()
        {
            const auto now = std::chrono::steady_clock::now();
            if (std::chrono::duration<double>(now - z.last).count() < 2.0) return;
            if (z.frames)
            {
                static Row sorted[kRows];
                std::copy(z.rows, z.rows + z.rowCount, sorted);
                std::sort(sorted, sorted + z.rowCount, [](const Row& a, const Row& b) { return a.ms > b.ms; });
                const double f = static_cast<double>(z.frames);
                if (std::FILE* out = std::fopen("Logs/gpu-zones.txt", "ab"))
                {
                    std::fprintf(out, "GPU0 images %llu | du premier au dernier repere %.3f ms/image | image GPU entiere %.3f ms/image | "
                                      "images sautees %llu, reperes en trop %llu, reperes hors file %llu\r\n",
                                 static_cast<unsigned long long>(z.frames), z.span / f,
                                 z.gpuFrames ? z.gpu / static_cast<double>(z.gpuFrames) : -1.0,
                                 static_cast<unsigned long long>(z.skipped), static_cast<unsigned long long>(z.overflow),
                                 static_cast<unsigned long long>(z.refused));
                    for (uint32_t i = 0; i < z.rowCount; ++i)
                        std::fprintf(out, "   %-46s %7.3f ms/image  (%.1f fois/image)\r\n", sorted[i].label, sorted[i].ms / f,
                                     sorted[i].n / f);
                    std::fclose(out);
                }
            }
            ZonesClear();
        }

        bool Take(const char* name, uint32_t& index)
        {
            if (!z.active || !t.recording) return false;
            MarkSlot& m = z.slots[z.slot];
            if (m.count >= kMarks)
            {
                ++z.overflow;
                return false;
            }
            index = m.count++;
            Copy(m.label[index], name);
            return true;
        }

        void Direct(VkCommandBuffer cmd, const char* name)
        {
            uint32_t i = 0;
            if (!cmd || !Take(name, i)) return;
            s.dapi->CmdWriteTimestamp(cmd, VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT, z.slots[z.slot].pool, i);
            Label(cmd, z.slots[z.slot].label[i]);
        }

        /// A l'ouverture de l'image (FrameGpuOpen) : l'image precedente de l'emplacement relue, sa reserve remise a zero,
        /// le premier repere (la zone en cours).
        void ZonesOpen(VkCommandBuffer main, uint32_t slot)
        {
            z.active = false;
            LabelClose(main);   // une plage restee ouverte (image abandonnee) ne deborde pas sur la suivante
            if (!z.on)
            {
                for (MarkSlot& m : z.slots) m.count = 0;
                return;
            }
            if (!z.tried) z.ok = ZonesInit();
            if (!z.ok || slot >= kFramesInFlight) return;
            MarkSlot& m = z.slots[slot];
            ZonesHarvest(m);
            ZonesWrite();
            s.dapi->CmdResetQueryPool(main, m.pool, 0, kMarks);
            z.slot   = slot;
            z.active = true;
            Direct(main, z.zone);
        }

        /// A la fin de l'image (FrameGpuEnd, apres l'attente du thread d'enregistrement) : le dernier repere.
        void ZonesEnd(VkCommandBuffer main)
        {
            if (!z.active) return;
            Direct(main, "fin");
            LabelClose(main);
            z.active = false;
        }

        /// A lane that has not run for a whole window reads as not run (-1), not as its old figures.
        bool Stale(const Ring& r) { return r.count == 0 || t.harvests > r.at + kGpuWindow; }

        bool Init()
        {
            t.tried = true;
            const context::Handles* h = context::Get();
            if (!h || !h->iapi || !h->iapi->GetPhysicalDeviceProperties || !h->dapi->CreateQueryPool
                || !h->dapi->CmdWriteTimestamp || !h->dapi->GetQueryPoolResults)
                return false;
            VkPhysicalDeviceProperties props = {};
            h->iapi->GetPhysicalDeviceProperties(h->physical, &props);
            uint32_t count = 0;
            h->iapi->GetPhysicalDeviceQueueFamilyProperties(h->physical, &count, nullptr);
            VkQueueFamilyProperties families[16] = {};
            if (count > 16) count = 16;
            h->iapi->GetPhysicalDeviceQueueFamilyProperties(h->physical, &count, families);
            const uint32_t bits = h->graphicsFamily < count ? families[h->graphicsFamily].timestampValidBits : 0;
            if (bits == 0 || props.limits.timestampPeriod <= 0.0f) return false;
            t.mask      = bits >= 64 ? ~0ull : ((1ull << bits) - 1);
            t.nsPerTick = props.limits.timestampPeriod;
            VkQueryPoolCreateInfo info = {};
            info.sType      = VK_STRUCTURE_TYPE_QUERY_POOL_CREATE_INFO;
            info.queryType  = VK_QUERY_TYPE_TIMESTAMP;
            info.queryCount = kQueries;
            for (GpuSlot& sl : t.slots)
                if (h->dapi->CreateQueryPool(h->device, &info, nullptr, &sl.pool) != VK_SUCCESS)
                {
                    sl.pool = VK_NULL_HANDLE;
                    return false;
                }
            return true;
        }

        bool Read(const GpuSlot& sl, uint32_t first, uint32_t n, uint64_t* out)
        {
            return s.dapi->GetQueryPoolResults(s.device, sl.pool, first, n, n * sizeof(uint64_t), out, sizeof(uint64_t),
                                               VK_QUERY_RESULT_64_BIT) == VK_SUCCESS;
        }

        double Ms(uint64_t a, uint64_t b) { return static_cast<double>((b - a) & t.mask) * t.nsPerTick / 1.0e6; }

        /// The slot's previous frame, read (its fence was just waited).
        void Harvest(GpuSlot& sl)
        {
            ++t.harvests;
            if (sl.open && sl.ended)
            {
                alignas(8) uint64_t ends[2] = {}; // HD: Vulkan requires 8-byte pData alignment with QUERY_RESULT_64_BIT on Win32 too.
                alignas(8) uint64_t pre     = 0; // HD: scalar timestamp read has the same alignment requirement.
                if (Read(sl, kMainStart, 2, ends))
                {
                    uint64_t start = ends[0];
                    // The pre-pass ran first: its start, when it is the earlier one (a wrap of the counter aside).
                    if (sl.pre && Read(sl, kPreStart, 1, &pre) && ((ends[0] - pre) & t.mask) < (t.mask >> 1)) start = pre;
                    const double ms = Ms(start, ends[1]);
                    t.frame.Note(ms, t.harvests);
                    t.sessionSum += ms;
                    t.sessionMax = ms > t.sessionMax ? ms : t.sessionMax;
                    ++t.sessionCount;
                    t.breaks = sl.breaks;
                }
            }
            for (uint32_t lane = 0; lane < kGpuLaneCount; ++lane)
            {
                if (!(sl.lanes & (1u << lane))) continue;
                alignas(8) uint64_t ends[2] = {}; // HD: preserve Vulkan's 64-bit result alignment in every lane.
                if (Read(sl, kLaneFirst + 2 * lane, 2, ends)) t.lanes[lane].Note(Ms(ends[0], ends[1]), t.harvests);
            }
            sl.open = sl.ended = sl.pre = false;
            sl.lanes = 0;
        }
    }

    void FrameGpuOpen(VkCommandBuffer main, uint32_t slot, uint64_t /*serial*/)
    {
        t.recording = false;
        if (!t.tried) t.available = Init();
        if (!t.available || slot >= kFramesInFlight || !main) return;
        GpuSlot& sl = t.slots[slot];
        Harvest(sl);
        t.current = slot;
        // Every query but the pre-pass's, which the pre-pass resets itself.
        s.dapi->CmdResetQueryPool(main, sl.pool, 0, kPreStart);
        s.dapi->CmdWriteTimestamp(main, VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT, sl.pool, kMainStart);
        sl.open     = true;
        t.recording = true;
        ZonesOpen(main, slot);   // Claude GPU0
    }

    void FrameGpuPrePass(VkCommandBuffer pre, uint32_t slot)
    {
        if (!t.recording || slot != t.current || !pre) return;
        GpuSlot& sl = t.slots[slot];
        s.dapi->CmdResetQueryPool(pre, sl.pool, kPreStart, 1);
        s.dapi->CmdWriteTimestamp(pre, VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT, sl.pool, kPreStart);
        sl.pre = true;
    }

    void FrameGpuEnd(VkCommandBuffer main, uint32_t slot)
    {
        if (!t.recording || slot != t.current || !main) return;
        GpuSlot& sl = t.slots[slot];
        ZonesEnd(main);   // Claude GPU0
        s.dapi->CmdWriteTimestamp(main, VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT, sl.pool, kFrameEnd);
        sl.ended    = true;
        sl.breaks   = s.breaksThisFrame;
        t.recording = false;
    }
}

namespace wxlvk::native::present
{
    void GpuLaneBegin(VkCommandBuffer cmd, uint32_t lane)
    {
        using namespace detail;
        if (!t.recording || lane >= kGpuLaneCount || !cmd) return;
        s.dapi->CmdWriteTimestamp(cmd, VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT, t.slots[t.current].pool, kLaneFirst + 2 * lane);
    }

    void GpuLaneEnd(VkCommandBuffer cmd, uint32_t lane)
    {
        using namespace detail;
        if (!t.recording || lane >= kGpuLaneCount || !cmd) return;
        GpuSlot& sl = t.slots[t.current];
        s.dapi->CmdWriteTimestamp(cmd, VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT, sl.pool, kLaneFirst + 2 * lane + 1);
        sl.lanes |= 1u << lane;
    }

    // Claude GPU0 (mesure seulement)
    void SetGpuZones(bool on)
    {
        using namespace detail;
        if (on == z.on) return;
        z.on = on;   // pris en compte a l'ouverture de l'image suivante (sa reserve remise a zero d'abord)
        ZonesClear();
    }
    bool GpuZonesOn() { return detail::z.on; }

    void GpuZone(const char* name)
    {
        using namespace detail;
        if (!z.on) return;
        Copy(z.zone, name);
        if (!z.active || !t.recording || !s.open || s.failed) return;
        uint32_t i = 0;
        if (!Take(name, i)) return;
        MarkOp op = {};
        op.pool  = z.slots[z.slot].pool;
        op.index = i;
        Copy(op.label, name);
        VkCommandBuffer cmd = s.slots[s.fi].main;
        if (wxlvk::recordthread::QueueOp(&RunMarkOp, cmd, &op, sizeof op)) return;
        ++z.refused;
        if (wxlvk::recordthread::Async())
        {
            wxlvk::recordthread::DrainTag("chrono GPU (repere hors file)");
            wxlvk::recordthread::Drain();
        }
        RunMarkOp(cmd, &op);
    }

    void GpuMarkDirect(VkCommandBuffer cmd, const char* name)
    {
        using namespace detail;
        if (!z.active) return;
        Direct(cmd, name ? name : z.zone);
    }

    void GetGpuTimes(GpuTimes& out)
    {
        using namespace detail;
        out = GpuTimes();
        out.timed = t.available;
        if (!t.available) return;
        out.frameLast = t.frame.last;
        out.frameAvg  = t.frame.Avg();
        out.frameMax  = t.frame.Max();
        out.frameSessionCount = t.sessionCount;
        if (t.sessionCount)
        {
            out.frameSessionAvg = t.sessionSum / static_cast<double>(t.sessionCount);
            out.frameSessionMax = t.sessionMax;
        }
        for (uint32_t i = 0; i < kGpuLaneCount; ++i)
        {
            if (Stale(t.lanes[i])) continue;
            out.laneAvg[i]  = t.lanes[i].Avg();
            out.laneLast[i] = t.lanes[i].last;
        }
        out.passBreaks = t.breaks;
    }
}
