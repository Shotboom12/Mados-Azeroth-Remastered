// The pipeline of a key: the hashed table, the pre-warmed entries' check.
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
#include "shaders/Translated.hpp" // Claude 2026-11-05 lot SOL1

namespace wxlvk::vk::pipelines::detail
{
    /**
     * The sources an entry was built from against what Source() resolves for its key now, through
     * the shaders this session created. Equal: the entry is the one a draw-time build would make
     * now, and is kept. Different: the key is built again, so a draw never runs on a module its
     * shader names no longer give.
     * - The first draw of a pre-warmed entry (the persisted md5s against a manifest or a name that
     *   may have moved since the list was written): the old pipeline, never bound, is destroyed.
     * - Claude PIPE1: a built entry, once per move of translated::Generation(). The HD terrain
     *   shaders (HdTerrain.cpp) are compiled on a thread and put in with SetCode on the SAME
     *   CGxShader, under the same name, some 45 s after the world loads: a key first drawn before
     *   that kept Blizzard's modules for good (64 rows, no HD constants), the keys first drawn after
     *   got the HD modules, and the ground showed both side by side (golden and pink chunks, Savage
     *   Coast 20 nov). The old pipeline may sit in a frame still in flight: it is retired, and
     *   destroyed by BeginFrame() once every slot has been waited on.
     *
     * @param uint32 i : the entry, pre-warmed or built (not a failed one: RetryFailed)
     */
    void VerifySources(uint32_t i)
    {
        PipelineEntry& e = s.pipelines[i];
        const bool prewarmed = e.prewarmed;
        e.prewarmed = false;
        // Taken before Source(): a record resolved during the check moves it again, and the next
        // draw checks again.
        const uint32_t generation = wxlvk::shaders::translated::Generation(); // Claude 2026-11-05 lot SOL1
        e.builtGeneration = generation;
        Sources     now;
        const char* why = "";
        if (Source(e.key, now.row, now.vr, now.pr, now.ffVertex, now.companion, why) && now.row == e.row
            && now.vr == e.vrec && now.pr == e.prec && now.ffVertex == e.ffVertex && now.companion == e.companion)
        {
            if (prewarmed) ++s.stats.prewarmVerified;
            return;
        }

        PipelineEntry built;
        LARGE_INTEGER t0 = {}, t1 = {};
        QueryPerformanceCounter(&t0);
        const bool ok = Build(e.key, e.pass, built, why, nullptr);
        QueryPerformanceCounter(&t1);
        s.buildTicks += static_cast<uint64_t>(t1.QuadPart - t0.QuadPart);
        ++s.buildCount;
        if (prewarmed) ++s.stats.prewarmRebuilt;
        else ++s.stats.sourcesRebuilt; // Claude PIPE1
        if (e.pipeline != VK_NULL_HANDLE)
        {
            if (prewarmed) s.dapi->DestroyPipeline(s.device, e.pipeline, nullptr);
            else s.retired.push_back({e.pipeline, kFrameSlots + 1}); // Claude PIPE1
        }
        if (e.translated && s.translatedCount) --s.translatedCount;
        if (e.companion && s.companionCount) --s.companionCount;
        const Key          key  = e.key;
        const VkRenderPass pass = e.pass;
        if (ok)
        {
            e      = built;
            e.key  = key;
            e.pass = pass;
            e.builtGeneration = generation; // Claude PIPE1
            if (e.translated) ++s.translatedCount;
            if (e.companion) ++s.companionCount;
        }
        else
        {
            e      = PipelineEntry();
            e.key  = key;
            e.pass = pass;
            e.why  = why;
            e.failedGeneration = generation; // Claude 2026-11-05 lot SOL1
            ++s.failedCount;
        }
        s.stats.pipelines = s.pipelineCount - s.failedCount;
        wxl::ScriptMgr::Log(WXL_LOG_DEBUG,
                            "vulkan: pipelines: %s vs=\"%s\" ps=\"%s\" format=%u resolved to other "
                            "sources; rebuilt%s",
                            prewarmed ? "pre-warmed (first draw)" : "built (its shaders changed, PIPE1)",
                            key.vs, key.ps, key.vertexFormat, ok ? "" : " and failed (skipped like any failed key)");
    }

    /**
     * Claude 2026-11-05 lot SOL1: a failed entry is built again once, when a shader record has been
     * resolved to a module since its build was tried (translated::Generation() moved). The HD terrain
     * shaders (hdTerrainLight) are swapped in shader by shader at their first use: a draw between the
     * vertex swap and the pixel swap asked for a pair that does not link (the pixel module reads fog0,
     * the Blizzard vertex module does not write it), the failure was remembered for good, and those
     * terrain chunks were never drawn again (the ground missing, one launch in two or three). A key
     * whose shaders have not changed is not built again: the same failure, the same cost as before.
     *
     * @param uint32 i : the entry, failed (no pipeline)
     * @return bool built : true when the entry now has a pipeline
     */
    bool RetryFailed(uint32_t i)
    {
        PipelineEntry& e = s.pipelines[i];
        const uint32_t generation = wxlvk::shaders::translated::Generation();
        if (e.pipeline != VK_NULL_HANDLE || e.failedGeneration == generation) return false;
        e.failedGeneration = generation;

        PipelineEntry built;
        const char*   why = "";
        LARGE_INTEGER t0 = {}, t1 = {};
        QueryPerformanceCounter(&t0);
        const bool ok = Build(e.key, e.pass, built, why, nullptr);
        QueryPerformanceCounter(&t1);
        s.buildTicks += static_cast<uint64_t>(t1.QuadPart - t0.QuadPart);
        ++s.buildCount;
        ++s.stats.buildsAtDraw;
        if (!ok)
        {
            e.why = why;
            return false;
        }

        const Key          key  = e.key;
        const VkRenderPass pass = e.pass;
        e      = built;
        e.key  = key;
        e.pass = pass;
        e.builtGeneration = generation; // Claude PIPE1
        if (s.failedCount) --s.failedCount;
        s.stats.pipelines = s.pipelineCount - s.failedCount;
        if (e.translated) s.stats.translatedPipelines = ++s.translatedCount;
        if (e.companion)  s.stats.companionPipelines  = ++s.companionCount;
        if (e.gbuf)       ++s.stats.gbufferPipelines;
        if (e.gbufNull)   ++s.stats.gbufferNullPipelines;
        wxl::ScriptMgr::Log(WXL_LOG_INFO,
                            "vulkan: pipelines: vs=\"%s\" ps=\"%s\" format=%u failed before and is built now, "
                            "its shaders having changed since (lot SOL1)",
                            key.vs, key.ps, key.vertexFormat);
        return true;
    }

    /// Claude PIPE1: a pre-warmed entry at its first draw, or a built one whose shaders may have
    /// changed since (translated::Generation() moved): VerifySources.
    static bool NeedsCheck(const PipelineEntry& e)
    {
        return e.prewarmed
            || (e.pipeline != VK_NULL_HANDLE && e.builtGeneration != wxlvk::shaders::translated::Generation());
    }

    /**
     * The cached pipeline for a key and pass, built on first use.
     *
     * @param Key& k : the key
     * @param VkRenderPass pass : the pass
     * @return pointer entry : null when it cannot be built; the skip is counted and the key
     *         logged once
     */
    const PipelineEntry* Pipeline(const Key& k, VkRenderPass pass, const char*& failed)
    {
        // An in-world frame is thousands of draws over a few hundred keys, mostly in runs: one
        // compare for the run, the scan only at a change.
        if (s.pipelineLast < s.pipelineCount && s.pipelines[s.pipelineLast].pass == pass
            && SameKey(s.pipelines[s.pipelineLast].key, k))
        {
            if (NeedsCheck(s.pipelines[s.pipelineLast])) VerifySources(s.pipelineLast); // Claude PIPE1
            if (s.pipelines[s.pipelineLast].pipeline == VK_NULL_HANDLE && !RetryFailed(s.pipelineLast)) // Claude 2026-11-05 lot SOL1
            {
                failed = s.pipelines[s.pipelineLast].why;
                SkipUnsupported(k, "the build failed before (see the first line for this key)");
                return nullptr;
            }
            return &s.pipelines[s.pipelineLast];
        }
        // The index instead of a scan of the table.
        const uint32_t home = KeyHash(k, pass);
        for (uint32_t p = home; s.pipeHash[p] != 0; p = (p + 1) & (kPipeHashSlots - 1))
        {
            const uint32_t i = s.pipeHash[p] - 1;
            if (s.pipelines[i].pass == pass && SameKey(s.pipelines[i].key, k))
            {
                s.pipelineLast = i;
                if (NeedsCheck(s.pipelines[i])) VerifySources(i); // Claude PIPE1
                if (s.pipelines[i].pipeline == VK_NULL_HANDLE && !RetryFailed(i)) // Claude 2026-11-05 lot SOL1
                {
                    // A key whose build failed is remembered, not rebuilt per draw.
                    failed = s.pipelines[i].why;
                    SkipUnsupported(k, "the build failed before (see the first line for this key)");
                    return nullptr;
                }
                return &s.pipelines[i];
            }
        }

        // Before building: a key the cache will never accept should not be built and then thrown
        // away, and the failure should say which key it was.
        if (s.pipelineCount >= kMaxPipelines)
        {
            if (!s.loggedPipelinesFull)
            {
                s.loggedPipelinesFull = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN,
                                    "vulkan: pipelines: the cache holds %u pipelines (kMaxPipelines); "
                                    "further keys are skipped (logged once)",
                                    kMaxPipelines);
            }
            failed = "the pipeline cache is full";
            SkipUnsupported(k, failed);
            return nullptr;
        }

        PipelineEntry built;
        const char*   why = "";
        const uint32_t generation = wxlvk::shaders::translated::Generation(); // Claude 2026-11-05 lot SOL1
        LARGE_INTEGER t0 = {}, t1 = {};
        QueryPerformanceCounter(&t0);
        const bool ok = Build(k, pass, built, why, nullptr);
        QueryPerformanceCounter(&t1);
        s.buildTicks += static_cast<uint64_t>(t1.QuadPart - t0.QuadPart);
        ++s.buildCount;
        ++s.stats.buildsAtDraw;
        if (!ok)
        {
            failed = why;
            SkipUnsupported(k, why);
            // Remembered as a failed entry (no pipeline), so the next draw of the key is a lookup and
            // not another build attempt.
            PipelineEntry& f = s.pipelines[s.pipelineCount];
            f      = PipelineEntry();
            f.key  = k;
            f.pass = pass;
            f.why  = why;
            f.failedGeneration = generation; // Claude 2026-11-05 lot SOL1
            uint32_t p = home;
            while (s.pipeHash[p] != 0) p = (p + 1) & (kPipeHashSlots - 1);
            s.pipeHash[p] = ++s.pipelineCount;
            ++s.failedCount;
            return nullptr;
        }

        PipelineEntry& e = s.pipelines[s.pipelineCount++];
        e      = built;
        e.key  = k;
        e.pass = pass;
        e.builtGeneration = generation; // Claude PIPE1
        {
            uint32_t p = home;
            while (s.pipeHash[p] != 0) p = (p + 1) & (kPipeHashSlots - 1);
            s.pipeHash[p] = s.pipelineCount;   // dense index + 1
        }
        s.stats.pipelines = s.pipelineCount - s.failedCount;
        if (e.translated) s.stats.translatedPipelines = ++s.translatedCount;
        if (e.companion)  s.stats.companionPipelines  = ++s.companionCount;
        if (e.gbuf)       ++s.stats.gbufferPipelines;
        if (e.gbufNull)   ++s.stats.gbufferNullPipelines;

        // The same two tables Build() consulted, so the line says what the pipeline was given
        // and not what the key said. Build() succeeded, so neither lookup can fail here.
        VkCullModeFlags cullMode  = VK_CULL_MODE_NONE;
        VkFrontFace     frontFace = VK_FRONT_FACE_COUNTER_CLOCKWISE;
        const char*     cullName  = "?";
        CullState(k.cull, cullMode, frontFace, cullName);
        VkCompareOp depthOp   = VK_COMPARE_OP_LESS_OR_EQUAL;
        const char* depthName = "?";
        DepthOp(k.depthFunc, depthOp, depthName);

        char source[256];
        if (e.companion)
            std::snprintf(source, sizeof source,
                          "translated vertex %s + ff companion %s (%s%s), class %u, samplers 0x%04X%s",
                          e.vrec->spv, e.prec->spv, manifest::FirstName(*e.prec),
                          e.prec->pointSprite ? ", point_sprite" : (e.prec->fixedFog ? ", fixed_fog" : ""),
                          e.vconst, e.writeMask,
                          e.pointList ? ", point list (gl_PointSize)" : "");
        else if (e.translated)
            std::snprintf(source, sizeof source,
                          "translated modules %s + %s, class %u, samplers 0x%04X (cube 0x%04X)%s%s",
                          e.bones ? (e.wind ? e.vrec->windBones : e.vrec->bones) : (e.wind ? e.vrec->wind : e.vrec->spv),
                          e.prec->spv, e.vconst,
                          e.writeMask, e.cubeMask,
                          e.bones ? ", bone palette in set 2"
                                  : (e.wind ? ", tree wind in set 3" : (e.pointList ? ", point list (gl_PointSize)" : "")),
                          e.gbuf ? ", G-buffer variants" : "");
        else if (e.ffVertex)
            std::snprintf(source, sizeof source,
                          "fixed-function vertex stage %s + translated pixel module %s, samplers 0x%04X (cube 0x%04X)",
                          kFfSemanticVertStem, e.prec->spv, e.writeMask, e.cubeMask);
        else
            std::snprintf(source, sizeof source, "hand-written row, constants via %s",
                          e.usesRing ? "the uniform ring" : "push constants");
        if (k.vertexFormat == Cmd::kVertexFormatCustom)
        {
            // The custom layout the pipeline was laid out for, element by element, in the
            // engine's encodings (Cmd::VertexElement): a<attrib>:fmt<format>@<offset>.
            size_t n = std::strlen(source);
            int    w = std::snprintf(source + n, sizeof source - n, ", custom layout stride %u:", k.customStride);
            if (w > 0) n += static_cast<size_t>(w) < sizeof source - n ? static_cast<size_t>(w) : sizeof source - n - 1;
            for (uint32_t i = 0; i < k.customCount && n < sizeof source - 1; ++i)
            {
                w = std::snprintf(source + n, sizeof source - n, " a%u:fmt%u@%u", k.custom[i] & 0xFFu,
                                  (k.custom[i] >> 8) & 0xFFu, (k.custom[i] >> 16) & 0xFFu);
                if (w > 0) n += static_cast<size_t>(w) < sizeof source - n ? static_cast<size_t>(w) : sizeof source - n - 1;
            }
        }

        wxl::ScriptMgr::Log(WXL_LOG_DEBUG,
                            "vulkan: pipelines: built #%u: vs=\"%s\" ps=\"%s\" format=%u blend=%u "
                            "topology=%u write=0x%X, %s, cull %u -> %s, depth test "
                            "%s func %s write %s%s%s, %u stream(s)",
                            s.pipelineCount, k.vs, k.ps, k.vertexFormat, k.blend, k.topology,
                            k.colorWrite, source, k.cull, cullName, k.depthTest ? "on" : "off",
                            depthName, k.depthWrite ? "on" : "off",
                            e.dynamicBias ? ", dynamic depth bias" : "",
                            e.dynamicBlend ? ", dynamic blend constant" : "", e.streams);
        return &e;
    }
}
