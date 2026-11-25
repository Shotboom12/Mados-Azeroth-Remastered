#include "native/record/RecordThread.hpp"
// Opening and closing the engine's pass, the pre-pass, the present copy.
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
#include "native/record/RecordThread.hpp"
#include "vulkan/Pipelines.hpp"
#include <type_traits>
#include <atomic>
#include <cstdio>

namespace wxlvk::native::present::detail
{
    // --- the pass ------------------------------------------------------------------------------------

    bool GBufferWanted()
    {
        // The G-buffer class is for the opaque world's pass: a consumer asks, the setting allows, the
        // images were not refused, and the engine is between its world scene pass's start and
        // AfterOpaqueWorld. Before the world (the engine's clear), after the point (the transparents,
        // the consumers' own draws, the interface): the plain class, whose pipelines name one attachment.
        return
#ifdef WOWDECOMP_FSR
            (s.gbufRequests>0||WorldObjectMotionActive())
#else
            s.gbufRequests > 0
#endif
            && !s.gbufFailed && s.worldOpen && !s.opaqueDone && wxlvk::settings::GBufferAllowed();
    }

#ifdef WOWDECOMP_FSR
    static bool EnsureOptionalMotionGBuffer(){
        const bool optional=s.gbufRequests==0&&WorldObjectMotionActive();
        const bool failed=s.gbufFailed;
        if(EnsureGBufferImages())return true;
        if(optional){s.gbufFailed=failed;WorldObjectMotionRefuse();}
        return false;
    }
#endif
    // --- Claude CPU-B (hdVkPassQueue): a pass's end and begin queued in order, as the draws are ----------------
    //
    // What the engine thread decides stays here, unchanged; only the recording (the end, the barriers, the begin, the
    // clears) goes to the record thread, after the draws queued before it, so main receives the same commands in the
    // same order. Two things the record thread reads would otherwise run ahead: the bindings (reset by the op itself)
    // and a texture's layout (a queued draw tests it: the op writes it, in order). Until the next drain, this thread
    // reads a texture target's layout through the overlay, the value the queue will have left at that point.
    namespace
    {
        struct PassOp
        {
            struct Write { VkImageLayout* at; VkImageLayout to; };
            uint8_t  end = 0, endGBuffer = 0, begin = 0, invalidate = 0;
            Barriers out, in;
            VkRenderPassBeginInfo info = {};
            VkClearValue values[2 + kGBufferAttachments
#ifdef WOWDECOMP_FSR
                +1
#endif
            ] = {};
            uint32_t          clearN = 0;
            VkClearAttachment clearA[2] = {};
            VkClearRect       clearR = {};
            Write    writes[4] = {};
            uint32_t writeCount = 0;
        };
        static_assert(sizeof(PassOp) <= wxlvk::recordthread::kOpBytes, "a pass op fits a queue slot");
        static_assert(std::is_trivially_copyable<PassOp>::value, "a pass op is copied as bytes");

        constexpr uint32_t kOverlay = 64;
        VkImageLayout* g_ovAt[kOverlay] = {};
        VkImageLayout  g_ovTo[kOverlay] = {};
        uint32_t       g_ovCount = 0;
        bool           g_beginQueued = false;

        void OverlayClear() { g_ovCount = 0; }
        bool OverlayRoom() { return g_ovCount + 4 <= kOverlay; }
        VkImageLayout Layout(const Side& side, bool q)
        {
            if (q && side.tex)
                for (uint32_t i = g_ovCount; i-- > 0;)
                    if (g_ovAt[i] == side.layout) return g_ovTo[i];
            return *side.layout;
        }
        /// A texture's layout: the op writes it on the record thread; this thread sees it through the overlay.
        /// Present's own images (the back buffer, the depths) are read by this thread only: written here.
        void SetLayout(const Side& side, VkImageLayout to, bool q, PassOp& op)
        {
            if (!q || !side.tex)
            {
                *side.layout = to;
                return;
            }
            uint32_t i = 0;
            while (i < g_ovCount && g_ovAt[i] != side.layout) ++i;
            if (i == g_ovCount) g_ovAt[g_ovCount++] = side.layout;
            g_ovTo[i] = to;
            op.writes[op.writeCount++] = PassOp::Write{ side.layout, to };
        }
        void Keep(Barriers& b, Barriers& kept)
        {
            kept = b;   // counted as Record() counts them
            if (b.count)
            {
                ++s.stats.barrierCalls;
                s.stats.barriers += b.count;
            }
            b.count = 0;
            b.srcStage = b.dstStage = 0;
        }
        void GBufferEndBarrier(VkCommandBuffer cmd)
        {
            VkMemoryBarrier m = {};
            m.sType         = VK_STRUCTURE_TYPE_MEMORY_BARRIER;
            m.srcAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;
            m.dstAccessMask = VK_ACCESS_SHADER_READ_BIT | VK_ACCESS_COLOR_ATTACHMENT_READ_BIT | VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;
            s.dapi->CmdPipelineBarrier(cmd, VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,
                                       VK_PIPELINE_STAGE_VERTEX_SHADER_BIT | VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT |
                                           VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT | VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,
                                       0, 1, &m, 0, nullptr, 0, nullptr);
        }
        void RawBarriers(VkCommandBuffer cmd, const Barriers& b)
        {
            if (b.count)
                s.dapi->CmdPipelineBarrier(cmd, b.srcStage, b.dstStage, 0, 0, nullptr, 0, nullptr, b.count, b.b);
        }
        /// The record thread (or this one, after a drain, when the queue refused): the op's commands, in the order
        /// EndPass / BeginPass record them directly, then its layouts.
        void RunPassOp(VkCommandBuffer cmd, const void* data)
        {
            const PassOp& o = *static_cast<const PassOp*>(data);
            if (o.end)
            {
                s.dapi->CmdEndRenderPass(cmd);
                if (o.endGBuffer) GBufferEndBarrier(cmd);
                RawBarriers(cmd, o.out);
            }
            if (o.begin)
            {
                RawBarriers(cmd, o.in);
                VkRenderPassBeginInfo b = o.info;
                b.pClearValues = b.clearValueCount ? o.values : nullptr;
                s.dapi->CmdBeginRenderPass(cmd, &b, VK_SUBPASS_CONTENTS_INLINE);
                if (o.invalidate) pipelines::ResetBindings();
            }
            if (o.clearN) s.dapi->CmdClearAttachments(cmd, o.clearN, o.clearA, 1, &o.clearR);
            for (uint32_t i = 0; i < o.writeCount; ++i) *o.writes[i].at = o.writes[i].to;
        }
        void Send(VkCommandBuffer cmd, const PassOp& op)
        {
            if (wxlvk::recordthread::QueueOp(&RunPassOp, cmd, &op, sizeof op)) return;
            wxlvk::recordthread::DrainFor(wxlvk::recordthread::Boundary::Pass);   // refused: as the original, here
            wxlvk::recordthread::Drain();
            RunPassOp(cmd, &op);
        }
        struct HookSet { HookSet() { wxlvk::recordthread::idleHook = &OverlayClear; } } g_hookSet;
        bool Queueable(bool queue) { return queue && !s.activeRun && OverlayRoom() && wxlvk::recordthread::OpsQueued(); }
    }

    // --- Claude CPU-E (hdVkCopyQueue): CopySunShadowLayers' copy, queued in order ------------------------------------
    namespace
    {
        struct CopyOp
        {
            struct Bar { VkImageMemoryBarrier b; VkPipelineStageFlags src, dst; };
            struct Half
            {
                Bar      pre[2], post[2];
                uint32_t preN = 0, postN = 0;
                VkImage  from = VK_NULL_HANDLE, to = VK_NULL_HANDLE;
                VkImageCopy region = {};
            };
            Half                       half[2];
            wxlvk::vk::texture::Image* images[4] = {};
            VkImageLayout              start[4] = {}, end[4] = {};
            uint8_t                    proof = 0;
        };
        static_assert(sizeof(CopyOp) <= wxlvk::recordthread::kOpBytes, "a copy op fits a queue slot");
        static_assert(std::is_trivially_copyable<CopyOp>::value, "a copy op is copied as bytes");

        std::atomic<uint64_t> g_cqImages{ 0 }, g_cqBad{ 0 };   // the proof (record thread)
        uint64_t g_cqOps = 0, g_cqFrames = 0, g_cqSerial = 0;  // engine thread
        int      g_cqMode = -1;

        /// The record thread (or this one, after a drain, when the queue refused): the proof's check, the commands in
        /// CopySunShadowLayers' order, then the layouts.
        void RunCopyOp(VkCommandBuffer cmd, const void* data)
        {
            const CopyOp& o = *static_cast<const CopyOp*>(data);
            if (o.proof)
            {
                uint64_t bad = 0;
                for (uint32_t k = 0; k < 4; ++k) bad += o.images[k]->layout != o.start[k];
                g_cqImages.fetch_add(4, std::memory_order_relaxed);
                if (bad) g_cqBad.fetch_add(bad, std::memory_order_relaxed);
            }
            for (const CopyOp::Half& h : o.half)
            {
                for (uint32_t i = 0; i < h.preN; ++i)
                    s.dapi->CmdPipelineBarrier(cmd, h.pre[i].src, h.pre[i].dst, 0, 0, nullptr, 0, nullptr, 1, &h.pre[i].b);
                s.dapi->CmdCopyImage(cmd, h.from, VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL, h.to, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, 1,
                                     &h.region);
                for (uint32_t i = 0; i < h.postN; ++i)
                    s.dapi->CmdPipelineBarrier(cmd, h.post[i].src, h.post[i].dst, 0, 0, nullptr, 0, nullptr, 1, &h.post[i].b);
            }
            for (uint32_t k = 0; k < 4; ++k) o.images[k]->layout = o.end[k];
        }

        /// The layout the queue will have left (the overlay), else the image's own.
        VkImageLayout QueuedLayout(wxlvk::vk::texture::Image* img)
        {
            for (uint32_t i = g_ovCount; i-- > 0;)
                if (g_ovAt[i] == &img->layout) return g_ovTo[i];
            return img->layout;
        }
        void OverlaySet(VkImageLayout* at, VkImageLayout to)
        {
            uint32_t i = 0;
            while (i < g_ovCount && g_ovAt[i] != at) ++i;
            if (i == g_ovCount) g_ovAt[g_ovCount++] = at;
            g_ovTo[i] = to;
        }
        void CopyProofLog()
        {
            const int mode = wxlvk::recordthread::copyQueue;
            if (mode != g_cqMode) { g_cqMode = mode; g_cqOps = g_cqFrames = 0; g_cqImages = 0; g_cqBad = 0; g_cqSerial = 0; }
            if (mode < 2) return;
            ++g_cqOps;
            if (s.serial == g_cqSerial) return;
            g_cqSerial = s.serial;
            if (++g_cqFrames % 120) return;
            if (std::FILE* f = std::fopen("Logs\\preuve-copies.txt", "a"))
            {
                std::fprintf(f, "%s images %llu : %llu copies de couches du soleil mises en file, %llu layouts compares sur le thread d'enregistrement, %llu differents\n",
                             mode == 3 ? "TEMOIN (layouts lus en direct)" : "PREUVE", (unsigned long long)g_cqFrames,
                             (unsigned long long)g_cqOps, (unsigned long long)g_cqImages.load(), (unsigned long long)g_cqBad.load());
                std::fclose(f);
            }
        }
    }

    bool CopyQueueable()
    {
        return wxlvk::recordthread::copyQueue != 0 && !s.activeRun && g_ovCount + 8 <= kOverlay && wxlvk::recordthread::OpsQueued();
    }

    bool QueueLayerCopies(wxlvk::vk::texture::Image* const images[4])
    {
        const bool control = wxlvk::recordthread::copyQueue == 3;
        CopyOp op;
        VkImageLayout cur[4];
        for (uint32_t k = 0; k < 4; ++k)
        {
            op.images[k] = images[k];
            cur[k] = control ? images[k]->layout : QueuedLayout(images[k]);   // the control: the live layout (the fault)
            op.start[k] = cur[k];
        }
        if (cur[0] == VK_IMAGE_LAYOUT_UNDEFINED || cur[1] == VK_IMAGE_LAYOUT_UNDEFINED) return false;
        // Transition()'s barrier for image k, from the layout it will be in, counted as Record() counts it.
        auto step = [&](uint32_t k, VkImageLayout to, CopyOp::Bar* out, uint32_t& n) {
            wxlvk::vk::texture::Image& img = *images[k];
            if (img.handle == VK_NULL_HANDLE || cur[k] == to) return;
            Barriers one;
            one.Add(img.handle, AspectOf(img.format), img.levels, img.layers, cur[k], to, cur[k] == VK_IMAGE_LAYOUT_UNDEFINED);
            out[n].b   = one.b[0];
            out[n].src = one.srcStage;
            out[n].dst = one.dstStage;
            ++n;
            ++s.stats.barrierCalls;
            ++s.stats.barriers;
            cur[k] = to;
        };
        const VkExtent2D& extent = images[0]->extent;
        for (uint32_t i = 0; i < 2; ++i)
        {
            CopyOp::Half& h = op.half[i];
            step(i, VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL, h.pre, h.preN);
            step(2 + i, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, h.pre, h.preN);
            const VkImageAspectFlags aspect = i ? VK_IMAGE_ASPECT_DEPTH_BIT : VK_IMAGE_ASPECT_COLOR_BIT;
            h.region.srcSubresource = { aspect, 0, 0, 1 };
            h.region.dstSubresource = h.region.srcSubresource;
            h.region.extent = { extent.width, extent.height, 1 };
            h.from = images[i]->handle;
            h.to   = images[2 + i]->handle;
            step(i, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, h.post, h.postN);
            step(2 + i, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, h.post, h.postN);
        }
        for (uint32_t k = 0; k < 4; ++k)
        {
            op.end[k] = cur[k];
            OverlaySet(&images[k]->layout, cur[k]);
        }
        op.proof = wxlvk::recordthread::copyQueue >= 2;
        CopyProofLog();
        VkCommandBuffer cmd = s.slots[s.fi].main;
        if (wxlvk::recordthread::QueueOp(&RunCopyOp, cmd, &op, sizeof op)) return true;
        wxlvk::recordthread::DrainTag("copie des couches (file pleine)");   // refused: as the original, here
        wxlvk::recordthread::Drain();
        RunCopyOp(cmd, &op);
        return true;
    }

    bool BeginQueued() { return g_beginQueued; }

    bool StreamLayout(const void* at, uint32_t& out) noexcept
    {
        if (wxlvk::recordthread::passQueue == 3) return false;   // the control: the live layout, the old fault
        for (uint32_t i = g_ovCount; i-- > 0;)
            if (g_ovAt[i] == at)
            {
                out = static_cast<uint32_t>(g_ovTo[i]);
                return true;
            }
        return false;
    }

    bool QueueClear(uint32_t n, const VkClearAttachment* a, const VkClearRect& r)
    {
        if (!n || n > 2 || !s.open || !wxlvk::recordthread::OpsQueued()) return false;
        PassOp op;
        op.clearN = n;
        for (uint32_t i = 0; i < n; ++i) op.clearA[i] = a[i];
        op.clearR = r;
        return wxlvk::recordthread::QueueOp(&RunPassOp, s.slots[s.fi].main, &op, sizeof op);
    }

    void EndPass(bool queue)
    {
        const bool q = Queueable(queue);   // Claude CPU-B
        if (!q && wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Pass);
        if (!s.passOpen) return;
        VkCommandBuffer cmd = s.slots[s.fi].main;
        PassOp op;
        if (s.activeRun) QueryEndVk(*s.activeRun);
        if (q) op.end = 1;
        else s.dapi->CmdEndRenderPass(cmd);
        s.passOpen = false;
        if (s.passGBuffer)
        {
            if (q)
            {
                op.endGBuffer = 1;
                ++s.stats.barrierCalls;
                s.passGBuffer = false;
            }
            else
            {
            // The G-buffer's writes, visible to the consumers' reads (a MidPass, a stage: vertex, fragment
            // and compute) and ordered before the next pass's writes. The images stay in GENERAL.
            VkMemoryBarrier m = {};
            m.sType         = VK_STRUCTURE_TYPE_MEMORY_BARRIER;
            m.srcAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;
            m.dstAccessMask = VK_ACCESS_SHADER_READ_BIT | VK_ACCESS_COLOR_ATTACHMENT_READ_BIT | VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;
            s.dapi->CmdPipelineBarrier(cmd, VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,
                                       VK_PIPELINE_STAGE_VERTEX_SHADER_BIT | VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT |
                                           VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT | VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,
                                       0, 1, &m, 0, nullptr, 0, nullptr);
            ++s.stats.barrierCalls;
            s.passGBuffer = false;
            }
        }
        // A texture target is sampled next, or copied: SHADER_READ_ONLY is where everything finds it.
        // Both attachments in one barrier call.
        Barriers out;
        if (s.passColour.tex)
        {
            out.Add(s.passColour.image, s.passColour.aspect, s.passColour.levels, s.passColour.layers,
                    VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, false);
            SetLayout(s.passColour, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, q, op);
        }
        if (s.passHasDepth && s.passDepth.tex)
        {
            out.Add(s.passDepth.image, s.passDepth.aspect, s.passDepth.levels, s.passDepth.layers,
                    VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, false);
            SetLayout(s.passDepth, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, q, op);
        }
        if (q)
        {
            Keep(out, op.out);
            Send(cmd, op);
        }
        else
        out.Record(cmd);
        s.passColour = Side();
        s.passDepth  = Side();
    }

    /**
     * Begins a pass on the current target. Null when it cannot be drawn into this frame.
     *
     * The clears due at the pass's start become its load ops where they cover the whole area: a
     * first use (black, the far plane) always, and `pending` -- the engine's slot-39 clear that
     * asked for this pass -- when its rectangle is the pass area. CLEAR then replaces LOAD for that
     * attachment, with the value the clears recorded in order would have left (the engine's over a
     * first use). A depth format with stencil keeps its clears inside the pass (the load op would
     * need the stencil's too), and so does any clear of less than the area.
     *
     * @param PassClear* pending : the slot-39 clear, or null
     * @param uint32* folded : receives the aspects of `pending` the load op took (with pending)
     */
    VkCommandBuffer BeginPass(const present::PassClear* pending, uint32_t* folded, bool queue)
    {
        const bool q = Queueable(queue);   // Claude CPU-B
        g_beginQueued = q;
        if (!q && wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Pass);
        if (folded) *folded = 0;
        PassOp op;
        const TargetDesc& t   = s.target;
        VkCommandBuffer   cmd = s.slots[s.fi].main;
        if (t.invalid)
        {
            ++s.stats.noTarget;
            return nullptr;
        }
        Side c, d;
        if (!t.colour)
        {
            if (!BackColour(c)) return nullptr;
        }
        else
        {
            if (t.colourView == VK_NULL_HANDLE || t.colour->handle == VK_NULL_HANDLE)
            {
                ++s.stats.noTarget;
                return nullptr;
            }
            TextureSide(t.colour, t.colourView, t.colourStamp, c);
            if (q)
            {
                // Claude CPU-B: TextureSide read the layout the record thread has now; the stream's is the overlay's.
                c.discard = Layout(c, q) == VK_IMAGE_LAYOUT_UNDEFINED;
                c.clear   = c.discard && IsDepth(c.format);
            }
        }
        VkExtent2D area = c.extent;
        if (t.extent.width && t.extent.height) area = Min(area, t.extent);

        bool hasDepth = false;
        switch (t.depth)
        {
            case TargetDesc::Depth::Back:      hasDepth = BackDepth(d); break;
            case TargetDesc::Depth::Offscreen: hasDepth = Offscreen(d, area); break;
            case TargetDesc::Depth::Texture:
                if (t.depthImage && t.depthImage->handle != VK_NULL_HANDLE && t.depthView != VK_NULL_HANDLE)
                {
                    TextureSide(t.depthImage, t.depthView, t.depthStamp, d);
                    if (q)
                    {
                        d.discard = Layout(d, q) == VK_IMAGE_LAYOUT_UNDEFINED;   // Claude CPU-B
                        d.clear   = d.discard && IsDepth(d.format);
                    }
                    hasDepth = true;
                }
                break;
            case TargetDesc::Depth::None: break;
        }
        if (hasDepth) area = Min(area, d.extent);
        if (area.width == 0 || area.height == 0)
        {
            ++s.stats.noTarget;
            return nullptr;
        }

        // The G-buffer class for the opaque world's pass on the back buffer, while a consumer asks and the
        // images can be had (docs/architecture.md "The G-buffer").
        const bool gbuffer = c.back && hasDepth && d.back && GBufferWanted() &&
#ifdef WOWDECOMP_FSR
            EnsureOptionalMotionGBuffer();
#else
            EnsureGBufferImages();
#endif
#ifdef WOWDECOMP_FSR
        VkRenderPass pass=ClassPass(c.format,hasDepth?d.format:VK_FORMAT_UNDEFINED,gbuffer);
        if(!pass&&WorldObjectMotionActive()){WorldObjectMotionRefuse();pass=ClassPass(c.format,hasDepth?d.format:VK_FORMAT_UNDEFINED,gbuffer);}
        if(!pass)return nullptr;
        const bool hadMotion=WorldObjectMotionPass(pass);
        VkFramebuffer fb=FramebufferFor(pass,c.view,hasDepth?d.view:VK_NULL_HANDLE,area);
        if(!fb&&hadMotion){WorldObjectMotionRefuse();pass=ClassPass(c.format,hasDepth?d.format:VK_FORMAT_UNDEFINED,gbuffer);if(pass)fb=FramebufferFor(pass,c.view,hasDepth?d.view:VK_NULL_HANDLE,area);}
        if(!fb)return nullptr;
#else
        const VkRenderPass pass = ClassPass(c.format, hasDepth ? d.format : VK_FORMAT_UNDEFINED, gbuffer);
        if (pass == VK_NULL_HANDLE) return nullptr;
        const VkFramebuffer fb = FramebufferFor(pass, c.view, hasDepth ? d.view : VK_NULL_HANDLE, area);
        if (fb == VK_NULL_HANDLE) return nullptr;
#endif

        Barriers in;
        if (gbuffer && (s.gbufLayout == VK_IMAGE_LAYOUT_UNDEFINED || s.gbufFresh))
        {
            // The G-buffer's attachments stay in GENERAL: their first pass takes them from UNDEFINED (the
            // load op clears what they hold); the frame's first G-buffer pass orders itself after the reads
            // of the frame before -- a consumer's stage, the other frame in flight -- through the layout's
            // full scope. The frame's later G-buffer passes need nothing here: EndPass's barrier already
            // orders each one after the one before (the full scope would drain the GPU at every pass break).
            const bool first = s.gbufLayout == VK_IMAGE_LAYOUT_UNDEFINED;
            for (uint32_t i = 0; i < kGBufferAttachments; ++i)
                in.Add(s.gbufImage[i], VK_IMAGE_ASPECT_COLOR_BIT, 1, 1,
                       first ? VK_IMAGE_LAYOUT_UNDEFINED : VK_IMAGE_LAYOUT_GENERAL, VK_IMAGE_LAYOUT_GENERAL, first);
            s.gbufLayout = VK_IMAGE_LAYOUT_GENERAL;
        }
        const VkImageLayout cNow = Layout(c, q);
        if (cNow != VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL || c.discard)
            in.Add(c.image, c.aspect, c.levels, c.layers, cNow, VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL, c.discard);
        SetLayout(c, VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL, q, op);
        if (hasDepth)
        {
            const VkImageLayout dNow = Layout(d, q);
            if (dNow != VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL || d.discard)
                in.Add(d.image, d.aspect, d.levels, d.layers, dNow, VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL,
                       d.discard);
            SetLayout(d, VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL, q, op);
            if (d.back) s.depthFresh = false;
        }
        if (q) Keep(in, op.in);
        else
        in.Record(cmd);

        // The clears due at the start: first uses (black and the far plane, for a frame the engine
        // did not clear itself) and the engine's own clear that asked for this pass. Each becomes
        // the attachment's load op when it covers the area; what cannot is recorded in the pass,
        // first uses before the engine's, as they would have been.
        const bool depthPlain = hasDepth && (d.aspect & VK_IMAGE_ASPECT_STENCIL_BIT) == 0;
        // The clear values follow the class's attachment order: the colour, a G-buffer class's three
        // (zero: class 0, no normal), the depth. The G-buffer is cleared by the frame's first pass of
        // its class and kept by the later ones.
        const uint32_t depthAt = (gbuffer ? 1 + kGBufferAttachments : 1)
#ifdef WOWDECOMP_FSR
            +(WorldObjectMotionPass(pass)?1u:0u)
#endif
        ;
        VkClearValue values[2 + kGBufferAttachments
#ifdef WOWDECOMP_FSR
            +1
#endif
        ] = {};
        values[0].color.float32[3]         = 1.0f;
        values[depthAt].depthStencil.depth = 1.0f;
        bool clearColour  = c.clear;
        bool clearDepth   = hasDepth && d.clear && depthPlain;
        const bool clearGBuffer = gbuffer && s.gbufFresh;
        uint32_t engineFolded = 0;
        if (pending && pending->place && folded)
        {
            VkRect2D rect = {};
            if (pending->place(pending->device, area, rect) && rect.offset.x == 0 && rect.offset.y == 0
                && rect.extent.width == area.width && rect.extent.height == area.height)
            {
                if (pending->mask & 1u)
                {
                    clearColour = true;
                    for (uint32_t i = 0; i < 4; ++i) values[0].color.float32[i] = pending->colour[i];
                    engineFolded |= 1u;
                }
                if ((pending->mask & 2u) && depthPlain)
                {
                    clearDepth = true;
                    values[depthAt].depthStencil.depth = 1.0f;
                    engineFolded |= 2u;
                }
            }
        }
        const uint32_t which    = (clearColour ? 1u : 0u) | (clearDepth ? 2u : 0u) | (clearGBuffer ? 4u : 0u);
        bool           clearing = false;
        const VkRenderPass beginPass = which ? ClearingPass(pass, which, clearing) : pass;
        if (clearing)
        {
            // What the load op took: the caller records the engine's clear only for the rest.
            if (folded) *folded = engineFolded;
            if (c.clear) ++s.stats.firstUseFolded;
            if (hasDepth && d.clear && clearDepth) ++s.stats.firstUseFolded;
            s.stats.engineClearsFolded += (engineFolded & 1u) + ((engineFolded >> 1) & 1u);
        }

        VkRenderPassBeginInfo begin = {};
        begin.sType             = VK_STRUCTURE_TYPE_RENDER_PASS_BEGIN_INFO;
        begin.renderPass        = beginPass;
        begin.framebuffer       = fb;
        begin.renderArea.extent = area;
        begin.clearValueCount   = clearing ? depthAt + (hasDepth ? 1u : 0u) : 0u;
        begin.pClearValues      = clearing ? values : nullptr;
        if (q)
        {
            op.begin = 1;
            op.info  = begin;
            for (uint32_t i = 0; i < sizeof values / sizeof values[0]; ++i) op.values[i] = values[i];
        }
        else
        s.dapi->CmdBeginRenderPass(cmd, &begin, VK_SUBPASS_CONTENTS_INLINE);
        if (clearing) ++s.stats.clearLoadPasses;
        // A pass may follow a flush (a fresh command buffer) or the present pass's binds: the draws'
        // bind tracking starts over.
        if (q) op.invalidate = 1;   // Claude CPU-B: on the record thread, in order (it owns the bindings)
        else
        pipelines::InvalidateBindings();

        // The first-use clears the load op did not take.
        VkClearAttachment a[2] = {};
        uint32_t          n    = 0;
        if (c.clear && !(clearing && clearColour))
        {
            a[n].aspectMask                  = VK_IMAGE_ASPECT_COLOR_BIT;
            a[n].colorAttachment             = 0;
            a[n].clearValue.color.float32[3] = 1.0f;
            ++n;
        }
        if (hasDepth && d.clear && !(clearing && clearDepth))
        {
            a[n].aspectMask                      = d.aspect;
            a[n].clearValue.depthStencil.depth   = 1.0f;
            a[n].clearValue.depthStencil.stencil = 0;
            ++n;
        }
        if (n)
        {
            VkClearRect r = {};
            r.rect.extent = area;
            r.layerCount  = 1;
            if (q)
            {
                op.clearN = n;
                op.clearA[0] = a[0];
                op.clearA[1] = a[1];
                op.clearR = r;
            }
            else
            s.dapi->CmdClearAttachments(cmd, n, a, 1, &r);
        }
        if (q) Send(cmd, op);   // Claude CPU-B: the barriers, the begin, the bindings' reset, the first-use clears
        if (s.breakView != VK_NULL_HANDLE)
        {
            // The pass after a break: on the same view it reloads what the break stored.
            if (s.breakView == c.view) ++s.stats.breaksResumed;
            s.breakView = VK_NULL_HANDLE;
        }

        if (c.stamp) *c.stamp = s.serial;
        if (hasDepth && d.stamp) *d.stamp = s.serial;
        if (c.back || (hasDepth && d.back)) s.backTouched = true;
        s.passColour   = c;
        s.passDepth    = hasDepth ? d : Side();
        s.passHasDepth = hasDepth;
        s.passGBuffer  = gbuffer;
        s.passClass    = pass;
        s.passExtent   = area;
        s.passOpen     = true;
        ++s.stats.passes;
        if (gbuffer)
        {
            s.gbufFresh  = false;
            s.gbufDrawn  = true;
            s.gbufSerial = s.serial;
            ++s.stats.gbufferPasses;
        }
        if (t.colour) ++s.stats.targetPasses;
        if (s.activeRun && s.activeRun->active) QueryBeginVk(*s.activeRun);
        return cmd;
    }

    /// The pre-pass buffer's end: its copies made visible to every reader in the main buffer.
    void EndPrePass(FrameSlot& slot)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::PrePass);
        VkMemoryBarrier m = {};
        m.sType         = VK_STRUCTURE_TYPE_MEMORY_BARRIER;
        m.srcAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
        m.dstAccessMask = VK_ACCESS_VERTEX_ATTRIBUTE_READ_BIT | VK_ACCESS_INDEX_READ_BIT |
                          VK_ACCESS_SHADER_READ_BIT | VK_ACCESS_TRANSFER_READ_BIT |
                          VK_ACCESS_TRANSFER_WRITE_BIT;
        s.dapi->CmdPipelineBarrier(slot.pre, VK_PIPELINE_STAGE_TRANSFER_BIT,
                                   VK_PIPELINE_STAGE_VERTEX_INPUT_BIT | VK_PIPELINE_STAGE_VERTEX_SHADER_BIT |
                                       VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT | VK_PIPELINE_STAGE_TRANSFER_BIT,
                                   0, 1, &m, 0, nullptr, 0, nullptr);
    }

    /// The present's copy of the own back buffer onto the acquired swapchain image.
    void RecordPresentCopy(VkCommandBuffer cmd)
    {
        const VkImage swap = s.images[s.image];
        if (s.backLayout == VK_IMAGE_LAYOUT_UNDEFINED)
        {
            // Never drawn into: black.
            Barrier(cmd, s.backImage, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, VK_IMAGE_LAYOUT_UNDEFINED,
                    VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, true);
            VkClearColorValue black = {};
            black.float32[3] = 1.0f;
            VkImageSubresourceRange range = {};
            range.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
            range.levelCount = 1;
            range.layerCount = 1;
            s.dapi->CmdClearColorImage(cmd, s.backImage, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, &black, 1, &range);
            s.backLayout = VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;
        }
        if (s.backLayout != VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL)
            Barrier(cmd, s.backImage, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, s.backLayout,
                    VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL, false);
        s.backLayout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;

        // The swapchain image: its contents are discarded; the submit waits on the acquire at the
        // TRANSFER stage, which this barrier's source stage names, so the two chain.
        VkImageMemoryBarrier b = {};
        b.sType               = VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;
        b.srcAccessMask       = 0;
        b.dstAccessMask       = VK_ACCESS_TRANSFER_WRITE_BIT;
        b.oldLayout           = VK_IMAGE_LAYOUT_UNDEFINED;
        b.newLayout           = VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;
        b.srcQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;
        b.dstQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;
        b.image               = swap;
        b.subresourceRange.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
        b.subresourceRange.levelCount = 1;
        b.subresourceRange.layerCount = 1;
        s.dapi->CmdPipelineBarrier(cmd, VK_PIPELINE_STAGE_TRANSFER_BIT, VK_PIPELINE_STAGE_TRANSFER_BIT, 0, 0,
                                   nullptr, 0, nullptr, 1, &b);

        // Same format and, between rebuilds, the same extent: a straight copy. Never past either
        // image (the present pass's fallback when the two differ crops rather than overruns).
        VkImageCopy copy = {};
        copy.srcSubresource.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
        copy.srcSubresource.layerCount = 1;
        copy.dstSubresource            = copy.srcSubresource;
        copy.extent                    = VkExtent3D{ s.extent.width < s.swapExtent.width ? s.extent.width : s.swapExtent.width,
                                                     s.extent.height < s.swapExtent.height ? s.extent.height : s.swapExtent.height, 1 };
        s.dapi->CmdCopyImage(cmd, s.backImage, VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL, swap,
                             VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, 1, &copy);
        ++s.stats.presentCopies;

        b.srcAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
        b.dstAccessMask = 0;
        b.oldLayout     = VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;
        b.newLayout     = VK_IMAGE_LAYOUT_PRESENT_SRC_KHR;
        s.dapi->CmdPipelineBarrier(cmd, VK_PIPELINE_STAGE_TRANSFER_BIT, VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT, 0,
                                   0, nullptr, 0, nullptr, 1, &b);
    }
}

namespace wxlvk::native::present
{
    // Claude CPU-E: Present.hpp's entry (the work is detail's, beside the overlay).
    bool QueueLayerCopies(wxlvk::vk::texture::Image* const images[4]) { return detail::QueueLayerCopies(images); }
}
