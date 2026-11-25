#include "native/record/RecordThread.hpp"
// The Vulkan half of a draw: pipelines, samplers, descriptor sets, and the one function that binds
// everything a draw::Cmd names and issues it.
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

#include "vulkan/pipelines/Internal.hpp"

#include <intrin.h>

#include <atomic>
#include <string>
#include <thread>
#include <vector>

using namespace wxlvk::vk::pipelines::detail;

namespace wxlvk::vk::pipelines
{
    bool RecordSplit(double (&usPerDraw)[6], uint64_t& draws, double& tscMhz)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);
        if (!s.split || !s.splitDraws) return false;
        LARGE_INTEGER q = {}, f = {};
        QueryPerformanceCounter(&q);
        QueryPerformanceFrequency(&f);
        const double seconds = f.QuadPart ? static_cast<double>(q.QuadPart - s.splitQpc0) / static_cast<double>(f.QuadPart) : 0.0;
        if (seconds < 1.0) return false;
        const double hz = static_cast<double>(__rdtsc() - s.splitTsc0) / seconds;
        if (hz <= 0.0) return false;
        for (uint32_t i = 0; i < 6; ++i)
            usPerDraw[i] = static_cast<double>(s.splitTicks[i]) * 1.0e6 / hz / static_cast<double>(s.splitDraws);
        draws  = s.splitDraws;
        tscMhz = hz / 1.0e6;
        return true;
    }

    void BuildCounters(uint64_t& ticks, uint64_t& builds)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);
        ticks  = s.buildTicks;
        builds = s.buildCount;
    }

    void PassCreated(VkRenderPass pass, VkFormat colour, VkFormat depth, bool gbuffer)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);   // HD MT2: drains
        if (pass == VK_NULL_HANDLE) return;
        // The class's description first, whatever the state: Build() reads the G-buffer flag for every
        // pipeline of the pass, and a pass made before Init() would otherwise be taken for a plain one.
        if (s.passInfoCount < sizeof s.passInfo / sizeof s.passInfo[0])
        {
            State::PassInfo& p = s.passInfo[s.passInfoCount++];
            p.pass    = pass;
            p.colour  = static_cast<uint32_t>(colour);
            p.depth   = static_cast<uint32_t>(depth);
            p.gbuffer = gbuffer ? 1u : 0u;
        }
        if (!s.ready) return;
        Prewarm(pass, static_cast<uint32_t>(colour), static_cast<uint32_t>(depth), gbuffer);
    }

    VkPipelineCache PipelineCache() { return s.ready ? s.cache : VK_NULL_HANDLE; }

    // Claude SAUV1 (22 nov 2026): the save runs on a thread of its own. vkGetPipelineCacheData needs no
    // host synchronization of the cache (it was not made EXTERNALLY_SYNCHRONIZED), so pipelines may be
    // built meanwhile; the key list is gathered on the caller after the MT2 drain, only its writing moves.
    namespace
    {
        // Detached, not a global std::thread: one still joinable when the process ends would abort it.
        std::atomic<bool>     g_saveBusy{false};
        std::atomic<uint32_t> g_saveFailed{0};   ///< bit 0: the cache, bit 1: the key list, bit 2: cache over the limit

        bool WriteAtomic(const std::string& path, const void* data, size_t size)
        {
            const std::string tmp = path + ".tmp";
            bool ok = false;
            if (FILE* f = std::fopen(tmp.c_str(), "wb"))
            {
                ok = std::fwrite(data, 1, size, f) == size;
                ok = std::fclose(f) == 0 && ok;
            }
            ok = ok && MoveFileExA(tmp.c_str(), path.c_str(), MOVEFILE_REPLACE_EXISTING) != 0;
            if (!ok) DeleteFileA(tmp.c_str());
            return ok;
        }

        struct SaveJob
        {
            VkDevice                  device = VK_NULL_HANDLE;
            VkPipelineCache           cache  = VK_NULL_HANDLE;
            PFN_vkGetPipelineCacheData get   = nullptr;
            std::vector<uint8_t>      keys;
            bool                      wantKeys = false;
            std::string               cachePath, keysPath;

            void Run() const
            {
                uint32_t failed = 0;
                if (wantKeys && !WriteAtomic(keysPath, keys.data(), keys.size())) failed |= 2u;
                if (cache != VK_NULL_HANDLE && get)
                {
                    size_t size = 0;
                    VkResult r = get(device, cache, &size, nullptr);
                    if (r == VK_SUCCESS && size > kCacheMaxBytes)
                    {
                        // Claude B3: the pipelines of old modules are never dropped from it; the next start makes it anew.
                        DeleteFileA(cachePath.c_str());
                        failed |= 4u;
                    }
                    else if (r == VK_SUCCESS && size)
                    {
                        std::vector<uint8_t> data(size);
                        r = get(device, cache, &size, data.data());
                        if ((r != VK_SUCCESS && r != VK_INCOMPLETE) || size == 0 || !WriteAtomic(cachePath, data.data(), size))
                            failed |= 1u;
                    }
                }
                if (failed) g_saveFailed.fetch_or(failed);
            }
        };

        void ReportSaveFailures()
        {
            const uint32_t f = g_saveFailed.exchange(0);
            if (f & 1u) wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: the pipeline cache could not be written");
            if (f & 2u) wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: the key list could not be written");
            if (f & 4u) wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: the pipeline cache is over its %llu byte limit, dropped (the next start makes a new one)",
                                            static_cast<unsigned long long>(kCacheMaxBytes));
        }
    }

    void SavePipelineCache(bool background)
    {
        ReportSaveFailures();
        if (background && g_saveBusy.load(std::memory_order_acquire)) return;   // the last one still writing: next line
        while (g_saveBusy.load(std::memory_order_acquire)) Sleep(1);   // exit: the running save first
        ReportSaveFailures();
        if (!s.ready) return;
        const bool canCache = s.cache != VK_NULL_HANDLE && s.dapi->GetPipelineCacheData;
        // A plain read to skip the MT2 drain when nothing was built: the drain then settles it.
        if (s.buildCount == s.keysSavedAt && (!canCache || s.buildCount == s.cacheSavedAt)) return;
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);   // HD MT2: drains
        SaveJob job;
        job.device = s.device;
        if (s.buildCount != s.keysSavedAt)
        {
            BuildKeys(job.keys);
            job.wantKeys = true;
            job.keysPath = wxlvk::path::Resolve(KeysFile());
        }
        if (canCache && s.buildCount != s.cacheSavedAt)
        {
            job.cache     = s.cache;
            job.get       = s.dapi->GetPipelineCacheData;
            job.cachePath = wxlvk::path::Resolve(kCacheFile);
            s.cacheSavedAt = s.buildCount;   // not retried every line when it fails
        }
        if (!job.wantKeys && job.cache == VK_NULL_HANDLE) return;
        if (!background)
        {
            job.Run();
            ReportSaveFailures();
            return;
        }
        g_saveBusy.store(true, std::memory_order_release);
        std::thread([job = std::move(job)] {
            SetThreadPriority(GetCurrentThread(), THREAD_PRIORITY_BELOW_NORMAL);
            job.Run();
            g_saveBusy.store(false, std::memory_order_release);
        }).detach();
    }

    bool Init()
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);   // HD MT2: drains
        const context::Handles* h = context::Get();
        if (!h || !h->device || !h->dapi)
        {
            wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: Init() without a live context");
            return false;
        }

        if (s.ready)
        {
            if (s.device == h->device) return true;

            // As in texture::Init(): a different VkDevice means ours is gone.
            wxl::ScriptMgr::Log(WXL_LOG_WARN,
                                "vulkan: pipelines: the context reports a different VkDevice than "
                                "the one these objects were built on; forgetting %u pipeline(s) and "
                                "%u sampler(s) rather than destroying them",
                                s.pipelineCount, s.samplerCount);
            s = State();
        }

        // Set-0 descriptors belong to the old pools/device, while this cache lives
        // outside State. A genuine initialization (not the same-device early out)
        // must forget them, including retries after a partial initialization.
        for (SetCache& cache : g_setCache)
        {
            if (++cache.gen == 0)
            {
                for (SetEntry& e : cache.table) e = SetEntry();
                cache.gen = 1;
            }
            cache.used = 0;
            cache.count = 0;
        }

        if (!HaveEntryPoints(*h->dapi)) return false;

        s.device     = h->device;
        s.dapi       = h->dapi;
        s.mode   = settings::TranslatedMode();

        const loader::Device& d = *s.dapi;

        // Set 1, binding 0: one slice of the uniform ring, both stages, since the vertex shaders
        // read regs.v and the fragment shaders regs.p and regs.misc. It is created first because
        // every pipeline layout names it; set 0's layouts come from LayoutFor() as pairs ask for
        // them, the hand-written rows' {s0} one right here so Init's line can name it.
        VkDescriptorSetLayoutBinding regsBinding = {};
        regsBinding.binding         = 0;
        regsBinding.descriptorType  = VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER_DYNAMIC;
        regsBinding.descriptorCount = 1;
        regsBinding.stageFlags      = VK_SHADER_STAGE_VERTEX_BIT | VK_SHADER_STAGE_FRAGMENT_BIT;

        VkDescriptorSetLayoutCreateInfo regsLayout = {};
        regsLayout.sType        = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO;
        regsLayout.bindingCount = 1;
        regsLayout.pBindings    = &regsBinding;

        VkResult r = d.CreateDescriptorSetLayout(s.device, &regsLayout, nullptr, &s.regsLayout);
        if (r != VK_SUCCESS)
        {
            s.regsLayout = VK_NULL_HANDLE;
            Fail("vkCreateDescriptorSetLayout (set 1)", r);
            s = State();
            return false;
        }

        uint32_t rowLayout = 0;
        if (!LayoutFor(kRowSamplerMask, rowLayout))
        {
            DropLayoutsAndPools(d, s.device);
            s = State();
            return false;
        }

        // One pool per frame-in-flight slot, each large enough for a full frame of draws with one
        // set each and, on average, four samplers per set (the UI binds one, terrain nine; a
        // frame that exceeds the average is counted as descriptorExhausted, not drawn wrong).
        // Reset whole in BeginFrame(). No FREE_DESCRIPTOR_SET_BIT: sets are never freed one at a
        // time, and a pool without the bit is allowed to be a bump allocator.
        VkDescriptorPoolSize size = {};
        size.type            = VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;
        size.descriptorCount = kSetsPerPool * 4;

        VkDescriptorPoolCreateInfo pool = {};
        pool.sType         = VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO;
        pool.flags         = 0;
        pool.maxSets       = kSetsPerPool;
        pool.poolSizeCount = 1;
        pool.pPoolSizes    = &size;

        for (uint32_t i = 0; i < kFrameSlots; ++i)
        {
            r = d.CreateDescriptorPool(s.device, &pool, nullptr, &s.pools[i]);
            if (r != VK_SUCCESS)
            {
                s.pools[i] = VK_NULL_HANDLE;
                Fail("vkCreateDescriptorPool", r);
                DropLayoutsAndPools(d, s.device);
                s = State();
                return false;
            }
        }

        if (!CreateRing(*h))
        {
            DropRing();
            DropLayoutsAndPools(d, s.device);
            s = State();
            return false;
        }

        // The constant vertex stream (kConstVbBytes), written once. Not fatal: without it only the
        // fixed-function draws on a layout no row is declared for go unbuilt, as before it existed.
        if (memory::CreateBuffer(kConstVbBytes, VK_BUFFER_USAGE_VERTEX_BUFFER_BIT, memory::Where::HostVisible, s.constVb)
            && s.constVb.block.mapped)
        {
            uint8_t* bytes = static_cast<uint8_t*>(s.constVb.block.mapped);
            std::memset(bytes, 0, kConstVbBytes);
            std::memset(bytes + kConstWhiteOffset, 0xFF, 4);
            memory::FlushHost(s.constVb.block);
        }
        else
        {
            memory::DestroyBuffer(s.constVb);
            s.constVb = memory::Buffer();
            wxl::ScriptMgr::Log(WXL_LOG_WARN,
                                "vulkan: pipelines: the constant vertex stream could not be made; fixed-function "
                                "draws on a layout no row is declared for are skipped");
        }

        // The idle-stage image (kFillerColour), made and cleared once and kept for the device's
        // life like the constant stream. Not fatal: without it a fixed-function draw whose stage 0
        // is disabled on a row that declares a sampler is skipped as "no texture".
        {
            texture::Image filler;
            filler.wanted = VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;
            if (texture::CreateMipped(1, 1, 1, VK_FORMAT_R8G8B8A8_UNORM, filler))
            {
                if (texture::ClearAll(filler, kFillerColour)) s.filler = filler;
                else texture::DestroyIdle(filler);
            }
            if (s.filler.handle == VK_NULL_HANDLE)
                wxl::ScriptMgr::Log(WXL_LOG_WARN,
                                    "vulkan: pipelines: the idle-stage image could not be made; fixed-function "
                                    "draws with a disabled stage 0 on a row that declares a sampler are skipped");
        }
        s.census = settings::StatsWanted();
        s.split  = settings::RecordSplitWanted();
        if (s.split)
        {
            LARGE_INTEGER q = {};
            QueryPerformanceCounter(&q);
            s.splitQpc0 = q.QuadPart;
            s.splitTsc0 = __rdtsc();
        }

        // Not fatal: without it every 256-row draw keeps its 256-row module.
        if (settings::BonesWanted()) CreateBones(*h);
        else wxl::ScriptMgr::Log(WXL_LOG_DEBUG, "vulkan: pipelines: %s=0: 256-row draws keep the 256-row modules",
                                 settings::kBonesKey);

        if (h->samplerAnisotropy && h->iapi && h->iapi->GetPhysicalDeviceProperties)
        {
            VkPhysicalDeviceProperties props = {};
            h->iapi->GetPhysicalDeviceProperties(h->physical, &props);
            s.anisoMax = props.limits.maxSamplerAnisotropy;
        }

        // The world variant of the samplers (Samplers.cpp): the device's own anisotropy, within the
        // adapter's limit (none without samplerAnisotropy), and mip LOD bias, for the world's mipmapped
        // textures only.
        {
            const float asked = settings::AnisotropyWanted();
            s.worldAniso  = asked > 1.0f ? (asked < s.anisoMax ? asked : s.anisoMax) : 0.0f;
            if (s.worldAniso <= 1.0f) s.worldAniso = 0.0f;
            s.worldBias   = settings::MipBiasWanted();
            s.worldFilter = s.worldAniso > 1.0f || s.worldBias != 0.0f;
            char aniso[96];
            if (s.worldAniso > 1.0f)
                std::snprintf(aniso, sizeof aniso, "anisotropy %.0fx (%s %.0f, the adapter's limit %.0f)",
                              static_cast<double>(s.worldAniso), settings::kAnisotropyKey, static_cast<double>(asked),
                              static_cast<double>(s.anisoMax));
            else if (asked > 1.0f)
                std::snprintf(aniso, sizeof aniso, "no anisotropy (%s %.0f; the adapter has no samplerAnisotropy)",
                              settings::kAnisotropyKey, static_cast<double>(asked));
            else
                std::snprintf(aniso, sizeof aniso, "no anisotropy of the device's own (%s off)", settings::kAnisotropyKey);
            wxl::ScriptMgr::Log(WXL_LOG_INFO,
                                "vulkan: pipelines: the world's mipmapped textures: %s, mip LOD bias %+.2f (%s); the "
                                "interface, the text and render targets keep the engine's sampling",
                                aniso, static_cast<double>(s.worldBias), settings::kMipBiasKey);
        }

        LoadPipelineCache(*h);
        LoadKeys();

        s.ready = true;

        const char* modeName = s.mode == settings::kTranslatedOff    ? "0, hand-written rows only"
                             : s.mode == settings::kTranslatedPrefer ? "2, translated modules preferred over the rows"
                                                                     : "1, translated modules fill in where no row exists";
        wxl::ScriptMgr::Log(WXL_LOG_DEBUG,
                            "vulkan: pipelines: ready -- set 0 (combined image samplers by slot, "
                            "fragment; layouts cached by slot set, %u max), set 1 (dynamic uniform "
                            "buffer, vertex + fragment), a %u-byte vertex push range, %u descriptor "
                            "pool(s) of %u sets, caches of %u pipelines and %u samplers, %u "
                            "hand-written shader pair(s); %s=%s; manifest %s",
                            kMaxLayouts, kPushBytes, kFrameSlots, kSetsPerPool,
                            kMaxPipelines, kMaxSamplers, kShaderRowCount, settings::kTranslatedKey,
                            modeName, manifest::Loaded() ? "loaded" : "absent");
        return true;
    }

    void BeginFrame(uint32_t frameSlot)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Submit);
        if (!s.ready) return;
        wxlvk::vk::wind::BeginFrame(frameSlot);

        if (frameSlot >= kFrameSlots)
        {
            if (!s.loggedBadSlot)
            {
                s.loggedBadSlot = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN,
                                    "vulkan: pipelines: BeginFrame(%u) but only %u slot(s) exist "
                                    "(kFrameSlots); Present.cpp's kFramesInFlight has drifted. No "
                                    "draw will be recorded for this slot (logged once)",
                                    frameSlot, kFrameSlots);
            }
            return;
        }

        // Claude PIPE1: pipelines replaced by VerifySources. Each BeginFrame() follows the wait on
        // its slot's fence; after kFrameSlots + 1 of them no frame that could have bound one is in flight.
        for (size_t i = 0; i < s.retired.size();)
        {
            if (--s.retired[i].framesLeft == 0)
            {
                s.dapi->DestroyPipeline(s.device, s.retired[i].pipeline, nullptr);
                s.retired[i] = s.retired.back();
                s.retired.pop_back();
            }
            else ++i;
        }

        // The slot's set-0 sets and their cache live across its frames (kSetCacheSlots): the pool
        // is reset whole, and the cache forgotten with it, only once the cache is nearly full or
        // the last frame of the slot spilled past the pool -- everything allocated from either
        // belongs to frames whose fences the frame has waited on. The ring's bytes for this slot
        // are free again for the same reason, every frame.
        SetCache& cache = g_setCache[frameSlot];
        if (s.poolActive[frameSlot] != 0 || cache.count >= kSetCacheFlushEntries || cache.used >= kSetCacheFlushWords)
        {
            const VkResult r = s.dapi->ResetDescriptorPool(s.device, s.pools[frameSlot], 0);
            if (r != VK_SUCCESS && !s.loggedPoolReset)
            {
                s.loggedPoolReset = true;
                Fail("vkResetDescriptorPool (logged once)", r);
            }
            for (uint32_t i = 0; i < s.poolActive[frameSlot] && i < s.poolSpill[frameSlot].size(); ++i)   // Claude RING1
                s.dapi->ResetDescriptorPool(s.device, s.poolSpill[frameSlot][i], 0);
            s.poolActive[frameSlot] = 0;
            // The cached sets went with the pool reset: a new generation forgets them all.
            if (++cache.gen == 0)
            {
                for (SetEntry& e : cache.table) e = SetEntry();
                cache.gen = 1;
            }
            cache.used  = 0;
            cache.count = 0;
            ++s.stats.setCacheFlushes;
        }
        s.ringActive[frameSlot] = 0;
        s.ringCursor[frameSlot] = 0;
        s.lastSlice[frameSlot].valid = false;   // its bytes are about to be rewritten
        // Claude OS2: the slot's last frame asked for palettes past its ring (drawn on the 256-row module,
        // and refused to the record thread): the ring grows to fit what was used plus what was asked, with a
        // quarter more, by doubling. The slot's fence was waited on and the record thread drained above.
        if (s.boneWanted[frameSlot] && s.bonesReady)
        {
            const uint64_t need = (static_cast<uint64_t>(s.boneCursor[frameSlot]) + s.boneWanted[frameSlot]) * 5u / 4u;
            uint64_t size = s.boneBytes[frameSlot];
            while (size < need && size < (1ull << 30)) size *= 2u;
            GrowBones(frameSlot, static_cast<uint32_t>(size));
            s.boneWanted[frameSlot] = 0;
        }
        s.boneCursor[frameSlot]  = 0;
        s.lastPalette[frameSlot] = State::LastPalette();
        // A new command buffer: nothing bound is trusted.
        s.bound = State::Bound();
    }

    void InvalidateBindings() { if(recordthread::Enabled())recordthread::Observe(recordthread::Boundary::Invalidate); s.bound = State::Bound(); }
    void ResetBindings() { s.bound = State::Bound(); }   // Claude CPU-B: a queued pass begin, on the record thread, in order

    void LogUnsupported()
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);   // HD MT2: drains
        if (s.unsupportedCount == 0) return;
        uint64_t other = 0;
        for (uint32_t b = 0; b < kSkipBuckets; ++b) other += s.unsupportedOther[b];
        wxl::ScriptMgr::Log(WXL_LOG_INFO,
                            "native: skipped keys: %u (bucket, key) pair(s) named (at most %u), %llu skip(s) of "
                            "further pairs (unsupported %llu / no texture %llu / not ready %llu / sampler type "
                            "%llu / descriptors %llu / uniforms %llu)",
                            s.unsupportedCount, kMaxUnsupported, static_cast<unsigned long long>(other),
                            static_cast<unsigned long long>(s.unsupportedOther[kSkipUnsupported]),
                            static_cast<unsigned long long>(s.unsupportedOther[kSkipNoTexture]),
                            static_cast<unsigned long long>(s.unsupportedOther[kSkipNotReady]),
                            static_cast<unsigned long long>(s.unsupportedOther[kSkipSamplerType]),
                            static_cast<unsigned long long>(s.unsupportedOther[kSkipDescriptors]),
                            static_cast<unsigned long long>(s.unsupportedOther[kSkipUniforms]));
        static constexpr const char* kSourceNames[] = { "row", "modules", "ff vertex + module",
                                                        "module + ff companion", "none" };
        for (uint32_t i = 0; i < s.unsupportedCount; ++i)
        {
            const State::Unsupported& u = s.unsupported[i];
            const Key&                k = u.key;
            // The custom layout as attrib:format@offset/stream, the way Key packs it.
            char layout[160] = "";
            if (k.vertexFormat == Cmd::kVertexFormatCustom)
            {
                int n = std::snprintf(layout, sizeof layout, " (stride %u:", k.customStride);
                for (uint32_t e = 0; e < k.customCount && n > 0 && n < static_cast<int>(sizeof layout); ++e)
                    n += std::snprintf(layout + n, sizeof layout - n, " %u:%u@%u/%u", k.custom[e] & 0xFFu,
                                       (k.custom[e] >> 8) & 0xFFu, (k.custom[e] >> 16) & 0xFFu, k.custom[e] >> 24);
                if (n > 0 && n < static_cast<int>(sizeof layout)) std::snprintf(layout + n, sizeof layout - n, ")");
            }
            char samplers[48] = "none (no pipeline)";
            if (u.samplers != 0xFFFFFFFFu)
                std::snprintf(samplers, sizeof samplers, "0x%04X (cube 0x%04X)", u.samplers, u.cubes);
            char at[48] = "";
            if (u.slot >= 0)
            {
                if (u.bucket == kSkipNotReady)
                    std::snprintf(at, sizeof at, ", at slot %d (layout %u)", static_cast<int>(u.slot), u.detail);
                else if (u.bucket == kSkipSamplerType)
                    std::snprintf(at, sizeof at, ", at slot %d (image %s)", static_cast<int>(u.slot),
                                  u.detail ? "cube" : "2D");
                else
                    std::snprintf(at, sizeof at, ", at slot %d", static_cast<int>(u.slot));
            }
            // Selectors: 0..5 EGxTexOp, 6 the stage is disabled (no texture), 7 not carried.
            wxl::ScriptMgr::Log(WXL_LOG_INFO,
                                "native: skipped %s: %llu draw(s) vs=\"%s\" ps=\"%s\" format=%u%s prim=%u "
                                "blend=%u cull=%u depth=%u/%u/%u write=0x%X bias=%u ffTextured=%u bones=%u; "
                                "source %s; ff %s, stage-0 ops %u/%u, stage-1 ops %u/%u, colour mode %u; stage "
                                "images 0x%04X, engine-bound 0x%04X, pipeline samplers %s%s: %s",
                                kSkipBucketNames[u.bucket], static_cast<unsigned long long>(u.draws), k.vs, k.ps,
                                k.vertexFormat, layout, k.topology, k.blend, k.cull, k.depthTest, k.depthFunc,
                                k.depthWrite, k.colorWrite, k.depthBias, k.ffTextured, k.bones,
                                kSourceNames[u.source < 5 ? u.source : 4], ((u.ff >> 24) & 1u) ? "vertex" : "off",
                                u.ff & 0xFFu, (u.ff >> 8) & 0xFFu, (u.ff >> 25) & 7u, (u.ff >> 28) & 7u,
                                (u.ff >> 16) & 0xFFu, u.textures, u.engine, samplers, at, u.why);
        }
    }


    bool HandWrittenRow(const char* name, bool pixel)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);   // HD MT2: drains
        if (!name || !*name) return false;
        for (const ShaderRow& r : kShaderRows)
            if (std::strcmp(pixel ? r.ps : r.vs, name) == 0) return true;
        return false;
    }

    uint64_t DrawnCount() { if(recordthread::Enabled())recordthread::Observe(recordthread::Boundary::Stats); return s.stats.drawn; }

    void GetStats(Stats& out)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);
        out = s.stats;
        out.pipelines           = s.pipelineCount - s.failedCount;
        out.translatedPipelines = s.translatedCount;
        out.companionPipelines  = s.companionCount;
        out.samplers            = s.samplerCount;
        out.layouts             = s.layoutCount;
    }

    // --- the shadow replay's sources (src/capture/ShadowPipelines.cpp builds the pipelines) ---------

    bool ShadowSourceFor(uint32_t entryIndex, bool alphaTest, ShadowSource& out, bool multiFaces)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);   // HD MT2: drains
        if (!s.ready || entryIndex >= s.pipelineCount) return false;
        const PipelineEntry& e = s.pipelines[entryIndex];
        const manifest::Record* vr = e.vrec;
        if (!e.translated || !vr || e.pipeline == VK_NULL_HANDLE || e.pointList) return false;
        const bool palette = e.bones && !e.table;   // Claude B3: a terrain group's rows in set 2 are not a bone variant
        if (e.wind ? (e.bones ? !vr->shadowWindBones : !vr->shadowWind) : (palette ? !vr->shadowBones : !vr->shadow))
            return false;
        out = ShadowSource();
        VertexLayout layout;
        uint32_t     missing = 0;
        const char*  why     = "";
        if (!TranslatedVertexLayout(e.key, vr->inputMask, layout, missing, why)) return false;
        if (!Topology(e.key.topology, out.topology)) return false;
        static_assert(sizeof out.attrs / sizeof out.attrs[0] >= sizeof layout.attrs / sizeof layout.attrs[0],
                      "every attribute a translated layout declares");
        for (uint32_t i = 0; i < layout.count; ++i) out.attrs[i] = layout.attrs[i];
        out.attrCount = layout.count;
        // The draw's own streams, as Build() declares them.
        out.bindings[0] = { 0, layout.stride, VK_VERTEX_INPUT_RATE_VERTEX };
        out.bindingCount = 1;
        for (uint32_t i = 0; i < Cmd::kMaxStreams - 1 && e.key.streamStride[i] != 0; ++i)
        {
            out.bindings[out.bindingCount] = { out.bindingCount, e.key.streamStride[i], VK_VERTEX_INPUT_RATE_VERTEX };
            ++out.bindingCount;
        }
        // "vertex/<md5>.spv" (or its `bones`, `wind`, `windbones` variant) -> the same with ".shadow.spv".
        const char*  spv = e.wind ? (e.bones ? vr->windBones : vr->wind) : (palette ? vr->bones : vr->spv);
        const size_t len = std::strlen(spv);
        if (len < 4 || len + 22 >= sizeof out.vertPath) return false;
        std::snprintf(out.vertPath, sizeof out.vertPath, multiFaces ? "translated/%.*s.shadowmv.spv" : "translated/%.*s.shadow.spv",
                      static_cast<int>(len - 4), spv);   // Claude CUBES1: the multi-faces variant (shadowmvgen.py)
        if (e.table)   // Claude B3: the chunk's position read from set 2 at the record's offset
        {
            std::strcpy(out.vertPath + std::strlen(out.vertPath) - 4, ".gputr.spv");
            out.table = true;
            if (BonesLayoutFor(e.layout) == VK_NULL_HANDLE) return false;
        }
        if (alphaTest && e.prec)
        {
            // A module that reads stage 0 at texcoord0 (the leaves, the cards) is cut out by the
            // replay's one-texture cutout; any other keeps its own module (the alpha test is in it).
            const uint32_t tc0 = 1u << manifest::kTexcoord0;
            const LayoutEntry& lay = s.layouts[e.layout];
            const bool cutout = (e.prec->samplerMask & 1u) && !(e.prec->cubeMask & 1u) && (e.prec->readsMask & tc0)
                                && (vr->outputMask & tc0) && (lay.mask & 1u);
            if (cutout) std::snprintf(out.fragPath, sizeof out.fragPath, "shadow_cutout_frag.spv");
            else std::snprintf(out.fragPath, sizeof out.fragPath, "translated/%s", e.prec->spv);
        }
        const LayoutEntry& le = s.layouts[e.layout];
        out.layout = e.wind ? WindLayoutFor(e.layout, e.bones, true) : (e.bones ? le.bones : le.pipeline);
        out.bones  = e.bones;
        out.wind   = e.wind;
        return out.layout != VK_NULL_HANDLE;
    }

    bool ShadowSkinSourceFor(uint32_t entryIndex, ShadowSource& out, VkDescriptorSetLayout sets[3])
    {
        // Claude ANIM1
        if (!ShadowSourceFor(entryIndex, false, out, false)) return false;
        const PipelineEntry& e = s.pipelines[entryIndex];
        if (e.wind || !s.bonesReady || s.bonesLayout == VK_NULL_HANDLE) return false;
        char* at = std::strstr(out.vertPath, ".shadow.spv");
        if (!at || std::strlen(out.vertPath) + 5 >= sizeof out.vertPath) return false;
        std::snprintf(at, sizeof out.vertPath - size_t(at - out.vertPath), ".shadowskin.spv");
        sets[0] = s.layouts[e.layout].set0;
        sets[1] = s.regsLayout;
        sets[2] = s.bonesLayout;
        return sets[0] != VK_NULL_HANDLE && sets[1] != VK_NULL_HANDLE;
    }

    // Claude LV25: the entry's own culling for the lamps' shadow cubes (WXL_VK_REPLAY_OWN_CULL).
    bool ShadowCullFor(uint32_t entryIndex, VkCullModeFlags& mode, VkFrontFace& front)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);   // HD MT2: drains
        mode  = VK_CULL_MODE_NONE;
        front = VK_FRONT_FACE_COUNTER_CLOCKWISE;
        if (!s.ready || entryIndex >= s.pipelineCount) return false;
        const char* name = "";
        if (CullState(s.pipelines[entryIndex].key.cull, mode, front, name)) return true;
        mode  = VK_CULL_MODE_NONE;
        front = VK_FRONT_FACE_COUNTER_CLOCKWISE;
        return false;
    }
}

// HD: the Cata water's mirror replay (hd/CataMirror.cpp); see MirrorSource in Pipelines.hpp.
namespace wxlvk::vk::pipelines
{
    bool MirrorSourceFor(uint32_t entryIndex, MirrorSource& out)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Stats);   // HD MT2: drains
        out = MirrorSource();
        if (!ShadowSourceFor(entryIndex, false, out.base)) return false;
        const PipelineEntry& e = s.pipelines[entryIndex];
        if (!e.prec || !e.prec->spv[0] || e.companion || e.ffVertex) return false;
        // Claude B3: a terrain group, drawn by its own indirect commands: the .gput twins, the rows and the texture table.
        if (e.table)
        {
            std::snprintf(out.base.vertPath, sizeof out.base.vertPath, "translated/%.*s.shadow.gput.spv",
                          static_cast<int>(std::strlen(e.vrec->spv) - 4), e.vrec->spv);
            out.base.layout = s.layouts[e.layout].table;
            if (out.base.layout == VK_NULL_HANDLE) return false;
        }
        // Claude B2: a scene doodad's copies, drawn with the palette and the instance of their own draw: the shadow variant's
        // twin (it lights them from the palette as theirs does).
        if (e.key.bones & 512u)
        {
            const size_t n = std::strlen(out.base.vertPath);
            if (n < 4 || n + 6 >= sizeof out.base.vertPath) return false;
            std::strcpy(out.base.vertPath + n - 4, e.key.bones & 1024u ? ".gpul.spv" : ".gpus.spv");
        }
        if (std::strlen(e.prec->spv) + 12 >= sizeof out.fragPath) return false;
        std::snprintf(out.fragPath, sizeof out.fragPath, "translated/%s", e.prec->spv);
        if (e.table)   // Claude B3
        {
            const size_t n = std::strlen(out.fragPath);
            if (n < 4 || n + 6 >= sizeof out.fragPath) return false;
            std::strcpy(out.fragPath + n - 4, ".gput.spv");
        }
        if (!BlendState(e.key.blend, out.blend)) return false;
        out.blend.colorWriteMask = WriteMask(e.key.colorWrite);
        const char* name = "";
        VkFrontFace front = VK_FRONT_FACE_COUNTER_CLOCKWISE;
        if (!CullState(e.key.cull, out.cullMode, front, name)) return false;
        out.frontFace = front == VK_FRONT_FACE_COUNTER_CLOCKWISE ? VK_FRONT_FACE_CLOCKWISE : VK_FRONT_FACE_COUNTER_CLOCKWISE;
        if (!DepthOp(e.key.depthFunc, out.depthOp, name)) return false;
        out.depthTest  = e.key.depthTest ? VK_TRUE : VK_FALSE;
        out.depthWrite = e.key.depthWrite ? VK_TRUE : VK_FALSE;
        return true;
    }
}
