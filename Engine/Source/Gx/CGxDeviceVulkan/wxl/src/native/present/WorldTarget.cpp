// The FSR world target: the world scene drawn at the render size, the interface at the native size.
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

#ifdef WOWDECOMP_FSR
#include "native/present/Internal.hpp"
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/fsr/HdFsrMotionPolicy.h"

#include <utility>

// The world set is swapped with the back buffer rather than taught to every path: between WorldTargetBegin and
// WorldTargetEnd, State's back colour, back depth, extent and G-buffer ARE the world set's, so PlaceD3d (viewport and
// scissor from Extent()), the jitter (OnBackBuffer), SceneDepth, the G-buffer class, the stages and the HD effects'
// Resize (BackBufferInfo) all work at the render size unchanged. Nothing here runs unless the FSR pass asks for it.
namespace wxlvk::native::present::detail
{
    namespace
    {
        void Swap()
        {
            WorldSet& w = s.world;
            std::swap(s.backImage, w.colour);
            std::swap(s.backView, w.colourView);
            std::swap(s.backBlock, w.colourBlock);
            std::swap(s.backLayout, w.colourLayout);
            std::swap(s.depthImage, w.depth);
            std::swap(s.depthView, w.depthView);
            std::swap(s.depthBlock, w.depthBlock);
            std::swap(s.depthLayout, w.depthLayout);
            std::swap(s.extent, w.extent);
            for (uint32_t i = 0; i < kGBufferAttachments; ++i)
            {
                std::swap(s.gbufImage[i], w.gbufImage[i]);
                std::swap(s.gbufView[i], w.gbufView[i]);
                std::swap(s.gbufBlock[i], w.gbufBlock[i]);
            }
            std::swap(s.gbufLayout, w.gbufLayout);
            std::swap(s.gbufDrawn, w.gbufDrawn);
            std::swap(s.gbufSerial, w.gbufSerial);
        }

        /// One image retired by `serial` (now: destroyed at once, the device being idle).
        void Release(VkImage& image, VkImageView& view, memory::Block& block, uint64_t serial, bool now)
        {
            if (image == VK_NULL_HANDLE && view == VK_NULL_HANDLE) return;
            DropFramebuffersNaming(view, serial, now);
            Retired e;
            e.kind     = Kind::Raw;
            e.raw      = image;
            e.view     = view;
            e.rawBlock = block;
            e.serial   = now ? 0 : serial;
            if (now) DestroyRetired(e);
            else Retire(e);
            image = VK_NULL_HANDLE;
            view  = VK_NULL_HANDLE;
            block = memory::Block();
        }

        void Release(WorldImage& img, uint64_t serial, bool now)
        {
            Release(img.image, img.view, img.block, serial, now);
            img = WorldImage();
        }

        /// Everything of the world set (never while it is swapped in).
        void ReleaseAll(uint64_t serial, bool now)
        {
            WorldSet& w = s.world;
            Release(w.colour, w.colourView, w.colourBlock, serial, now);
            Release(w.depth, w.depthView, w.depthBlock, serial, now);
            for (uint32_t i = 0; i < kGBufferAttachments; ++i) Release(w.gbufImage[i], w.gbufView[i], w.gbufBlock[i], serial, now);
            Release(w.fsrDepth, serial, now);
            Release(w.motion, serial, now);
            Release(w.objectMotion,serial,now);w.motionReady=false;w.motionRefused=false;
            Release(w.output, serial, now);
            w.colourLayout = w.depthLayout = w.gbufLayout = VK_IMAGE_LAYOUT_UNDEFINED;
            w.gbufDrawn  = false;
            w.gbufSerial = 0;
            w.extent     = VkExtent2D{ 0, 0 };
        }

        bool Make(WorldImage& img, VkFormat format, VkExtent2D extent, VkImageUsageFlags usage, const char* what)
        {
            img = WorldImage();
            if (!MakeRaw(format, extent, usage, img.image, img.view, img.block, what)) return false;
            img.format = format;
            img.extent = extent;
            img.usage  = usage;
            img.layout = VK_IMAGE_LAYOUT_UNDEFINED;
            return true;
        }

        /// The world set at `render` with the FSR output at `native`. False: nothing left made (logged by MakeRaw).
        bool EnsureSet(VkExtent2D render, VkExtent2D native)
        {
            WorldSet& w = s.world;
            const bool same = w.colour != VK_NULL_HANDLE && w.extent.width == render.width && w.extent.height == render.height
                              && w.output.extent.width == native.width && w.output.extent.height == native.height;
            if (same) return true;
            // Earlier frames in flight may still read the old set: retired by the open frame's serial.
            ReleaseAll(s.serial, false);
            WorldImage colour, depth;
            const bool ok =
                Make(colour, s.colourFormat, render,
                     VK_IMAGE_USAGE_COLOR_ATTACHMENT_BIT | VK_IMAGE_USAGE_TRANSFER_SRC_BIT | VK_IMAGE_USAGE_TRANSFER_DST_BIT |
                         VK_IMAGE_USAGE_SAMPLED_BIT,
                     "FSR world colour")
                && Make(depth, s.depthFormat, render, VK_IMAGE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT | VK_IMAGE_USAGE_SAMPLED_BIT,
                        "FSR world depth")
                && Make(w.fsrDepth, VK_FORMAT_R32_SFLOAT, render, VK_IMAGE_USAGE_STORAGE_BIT | VK_IMAGE_USAGE_SAMPLED_BIT,
                        "FSR normalized depth")
                && Make(w.motion, VK_FORMAT_R16G16_SFLOAT, render, VK_IMAGE_USAGE_STORAGE_BIT | VK_IMAGE_USAGE_SAMPLED_BIT,
                        "FSR motion vectors")
                && Make(w.output, VK_FORMAT_R8G8B8A8_UNORM, native,
                        VK_IMAGE_USAGE_STORAGE_BIT | VK_IMAGE_USAGE_SAMPLED_BIT | VK_IMAGE_USAGE_TRANSFER_SRC_BIT,
                        "FSR output");
            w.colour = colour.image;
            w.colourView = colour.view;
            w.colourBlock = colour.block;
            w.depth = depth.image;
            w.depthView = depth.view;
            w.depthBlock = depth.block;
            w.extent = render;
            if (!ok)
            {
                // Nothing of a half-made set was used: destroyed at once.
                ReleaseAll(0, true);
                return false;
            }
            wxl::ScriptMgr::Log(WXL_LOG_INFO, "native: frame: FSR world target %ux%u (%s, depth %s) for a %ux%u back buffer",
                                render.width, render.height, wxlvk::vk::FormatName(s.colourFormat),
                                wxlvk::vk::FormatName(s.depthFormat), native.width, native.height);
            return true;
        }

        // Optional M1 resource: failures never poison the existing FSR world set or six-target HD effects.
        bool EnsureObjectMotion(bool requested,VkExtent2D extent){
            WorldSet&w=s.world;
            if(!requested){Release(w.objectMotion,s.serial,false);w.motionReady=false;w.motionRefused=false;return false;}
            if(w.motionRefused){Release(w.objectMotion,s.serial,false);w.motionReady=false;return false;}
            if(w.objectMotion.image){w.motionReady=true;return true;}
            const auto*h=context::Get();VkPhysicalDeviceProperties props{};VkFormatProperties fp{};
            if(!h||!h->iapi||!h->iapi->GetPhysicalDeviceProperties||!h->iapi->GetPhysicalDeviceFormatProperties)return false;
            h->iapi->GetPhysicalDeviceProperties(h->physical,&props);
            h->iapi->GetPhysicalDeviceFormatProperties(h->physical,VK_FORMAT_R16G16B16A16_SFLOAT,&fp);
            const VkFormatFeatureFlags features=VK_FORMAT_FEATURE_COLOR_ATTACHMENT_BIT|VK_FORMAT_FEATURE_STORAGE_IMAGE_BIT|VK_FORMAT_FEATURE_SAMPLED_IMAGE_BIT|VK_FORMAT_FEATURE_TRANSFER_DST_BIT;
            if(!HD::Fsr::ObjectMotion::AttachmentLimit(props.limits.maxColorAttachments,props.limits.maxFragmentOutputAttachments,props.limits.maxFragmentCombinedOutputResources)||
                (fp.optimalTilingFeatures&features)!=features){
                w.motionRefused=true;w.motionReady=false;
                wxl::ScriptMgr::Log(WXL_LOG_WARN,"fsr: M1 object attachment unsupported (colour %u, fragment %u, combined %u, RGBA16F features 0x%X): camera motion retained",
                    props.limits.maxColorAttachments,props.limits.maxFragmentOutputAttachments,props.limits.maxFragmentCombinedOutputResources,unsigned(fp.optimalTilingFeatures));return false;
            }
            if(!Make(w.objectMotion,VK_FORMAT_R16G16B16A16_SFLOAT,extent,VK_IMAGE_USAGE_COLOR_ATTACHMENT_BIT|VK_IMAGE_USAGE_STORAGE_BIT|VK_IMAGE_USAGE_SAMPLED_BIT|VK_IMAGE_USAGE_TRANSFER_DST_BIT,"FSR M1 object motion")){
                w.motionRefused=true;w.motionReady=false;return false;
            }
            w.motionReady=true;
            wxl::ScriptMgr::Log(WXL_LOG_INFO,"fsr: M1 RGBA16F object motion %ux%u, %llu allocated bytes; location 6; no writers until M2",
                extent.width,extent.height,static_cast<unsigned long long>(w.objectMotion.block.size));return true;
        }

        /// Whether the back buffer's format can be blitted with a linear filter (else nearest).
        VkFilter BlitFilter()
        {
            static VkFormat checked = VK_FORMAT_UNDEFINED;
            static VkFilter filter  = VK_FILTER_NEAREST;
            if (checked == s.colourFormat) return filter;
            checked = s.colourFormat;
            filter  = VK_FILTER_NEAREST;
            const context::Handles* h = context::Get();
            if (h && h->iapi && h->iapi->GetPhysicalDeviceFormatProperties)
            {
                VkFormatProperties fp = {};
                h->iapi->GetPhysicalDeviceFormatProperties(h->physical, s.colourFormat, &fp);
                if (fp.optimalTilingFeatures & VK_FORMAT_FEATURE_SAMPLED_IMAGE_FILTER_LINEAR_BIT) filter = VK_FILTER_LINEAR;
            }
            return filter;
        }

        void Blit(VkCommandBuffer cmd, VkImage from, VkExtent2D fromExtent, VkImage to, VkExtent2D toExtent)
        {
            VkImageBlit b = {};
            b.srcSubresource.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
            b.srcSubresource.layerCount = 1;
            b.dstSubresource            = b.srcSubresource;
            b.srcOffsets[1] = VkOffset3D{ static_cast<int32_t>(fromExtent.width), static_cast<int32_t>(fromExtent.height), 1 };
            b.dstOffsets[1] = VkOffset3D{ static_cast<int32_t>(toExtent.width), static_cast<int32_t>(toExtent.height), 1 };
            s.dapi->CmdBlitImage(cmd, from, VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL, to, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, 1, &b,
                                 BlitFilter());
        }

        /// Any open pass ends (the copies below are transfers, never inside a render pass); the next draw begins again.
        void EndOpenPass()
        {
            if (s.passOpen) EndPass();
        }
    }

    void WorldTargetAbortInternal()
    {
        WorldSet& w = s.world;
        if (!w.active) return;
        if (s.passOpen) EndPass();
        Swap();
        w.active     = false;
        s.depthFresh = true;
        static bool said = false;
        if (!said) wxl::ScriptMgr::Log(WXL_LOG_WARN, "native: frame: a frame ended with the FSR world target still in place; "
                                       "its world was not shown (logged once)");
        said = true;
    }

    void WorldTargetDestroyNow()
    {
        WorldTargetAbortInternal();
        ReleaseAll(0, true);
        // The caller drained the generation's presents (DropImageObjects: context::DrainSwapchain) and the device.
        for (WorldImage& h : s.world.hudless) Release(h, 0, true);
    }
}

using namespace wxlvk::native::present::detail;

namespace wxlvk::native::present
{
    bool WorldTargetBegin(VkExtent2D render, bool objectMotion)
    {
        WorldSet& w = s.world;
        if (w.active || !s.open || s.failed || s.noImage || render.width == 0 || render.height == 0) return false;
        if (!BackBufferReadable() || !s.depthSampled || s.depthImage == VK_NULL_HANDLE) return false;
        const VkExtent2D native = s.extent;
        if (render.width > native.width || render.height > native.height) return false;
        if (!EnsureSet(render, native)) return false;

        VkCommandBuffer cmd = s.slots[s.fi].main;
        EndOpenPass();
        if(EnsureObjectMotion(objectMotion,render)){
            auto& m=w.objectMotion;
            Barrier(cmd,m.image,VK_IMAGE_ASPECT_COLOR_BIT,1,1,m.layout,VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,true);
            VkClearColorValue zero{};VkImageSubresourceRange range{VK_IMAGE_ASPECT_COLOR_BIT,0,1,0,1};
            s.dapi->CmdClearColorImage(cmd,m.image,VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,&zero,1,&range);
            Barrier(cmd,m.image,VK_IMAGE_ASPECT_COLOR_BIT,1,1,VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,VK_IMAGE_LAYOUT_GENERAL,false);
            m.layout=VK_IMAGE_LAYOUT_GENERAL;
        }
        // The world starts on what the frame drew so far (the engine's own clear, whatever came before the world
        // scene), scaled to the render size: the same first state the world would have found on the back buffer.
        // The previous frame's FSR read of the world colour is ordered before this write by the layout's scope.
        const bool backDrawn = s.backLayout != VK_IMAGE_LAYOUT_UNDEFINED;
        Barriers in;
        if (backDrawn && s.backLayout != VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL)
            in.Add(s.backImage, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, s.backLayout, VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL, false);
        in.Add(w.colour, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, w.colourLayout, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, true);
        in.Record(cmd);
        if (backDrawn)
        {
            s.backLayout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;
            Blit(cmd, s.backImage, native, w.colour, render);
        }
        else
        {
            VkClearColorValue black = {};
            black.float32[3] = 1.0f;
            VkImageSubresourceRange range = {};
            range.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
            range.levelCount = 1;
            range.layerCount = 1;
            s.dapi->CmdClearColorImage(cmd, w.colour, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, &black, 1, &range);
        }
        w.colourLayout = VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;

        Swap();
        w.active      = true;
        w.serial      = s.serial;
        s.depthFresh  = true;    // the world depth: discarded and cleared to the far plane at its first use
        s.backTouched = true;    // a swapchain change now waits for the frame's end (EnsureImageObjects)
        return true;
    }

    bool WorldTargetMaskSource(VkImageLayout layout,VkCommandBuffer& cmd,WorldImageDesc& out)
    {
        cmd=VK_NULL_HANDLE;out={};
        // Never end a live occlusion query, touch an auxiliary target, or invent a frame.
        if(!s.world.active||s.world.serial!=Serial()||!FrameOpen()||!OnBackBuffer()||s.activeRun)return false;
        if(layout!=VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL&&layout!=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL)return false;
        cmd=Outside();VkImage image{};VkFormat format{};VkExtent2D extent{};
        if(!cmd||!BackBuffer(cmd,layout,image,format,extent))return false;
        out.image=image;out.view=s.backView;out.format=format;out.extent=extent;
        out.usage=VK_IMAGE_USAGE_SAMPLED_BIT|VK_IMAGE_USAGE_TRANSFER_SRC_BIT;
        return image&&out.view;
    }

    bool WorldTargetActive() { return s.world.active; }
    bool WorldObjectMotionActive(){return s.world.active&&s.world.motionReady&&s.world.objectMotion.image!=VK_NULL_HANDLE;}
    void WorldObjectMotionRefuse(){s.world.motionReady=false;s.world.motionRefused=true;}
    bool WorldObjectMotionPass(VkRenderPass pass){for(uint32_t i=0;i<s.classCount;++i)if(s.classes[i].pass==pass)return s.classes[i].objectMotion;return false;}
    bool WorldTargetDebugOutput(const WorldImages& in){
        if(!in.cmd||s.world.active||in.back!=s.backImage||!s.world.output.image)return false;
        auto&o=s.world.output;
        if(o.layout!=VK_IMAGE_LAYOUT_GENERAL)Barrier(in.cmd,o.image,VK_IMAGE_ASPECT_COLOR_BIT,1,1,o.layout,VK_IMAGE_LAYOUT_GENERAL,o.layout==VK_IMAGE_LAYOUT_UNDEFINED);
        o.layout=VK_IMAGE_LAYOUT_GENERAL;return true;
    }


    bool WorldTargetScale(float& x, float& y)
    {
        const WorldSet& w = s.world;
        if (!w.active || w.extent.width == 0 || w.extent.height == 0) return false;
        // While active, s.extent is the render size and w.extent the native one.
        x = static_cast<float>(s.extent.width) / static_cast<float>(w.extent.width);
        y = static_cast<float>(s.extent.height) / static_cast<float>(w.extent.height);
        return true;
    }

    bool WorldTargetEnd(WorldImages& out)
    {
        out = WorldImages();
        WorldSet& w = s.world;
        if (!w.active) return false;
        VkCommandBuffer cmd = s.slots[s.fi].main;
        EndOpenPass();

        // The world's colour and depth for the compute reads; a depth the frame never wrote has nothing to give.
        const bool depthValid = !s.depthFresh && s.depthLayout != VK_IMAGE_LAYOUT_UNDEFINED;
        Barriers in;
        if (s.backLayout != VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL)
            in.Add(s.backImage, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, s.backLayout, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, false);
        s.backLayout = VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;
        if (depthValid && s.depthLayout != VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL)
        {
            in.Add(s.depthImage, AspectOf(s.depthFormat), 1, 1, s.depthLayout, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, false);
            s.depthLayout = VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;
        }
        in.Record(cmd);

        Swap();
        w.active      = false;
        s.depthFresh  = true;   // the interface finds a cleared native depth, as on the native path after the world
        s.backTouched = true;

        // The native back buffer is overwritten whole by the caller's copy: its contents are discarded.
        Barrier(cmd, s.backImage, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, s.backLayout, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, true);
        s.backLayout = VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;

        out.cmd    = cmd;
        out.colour = WorldImageDesc{ w.colour, w.colourView, s.colourFormat, w.extent,
                                     VK_IMAGE_USAGE_COLOR_ATTACHMENT_BIT | VK_IMAGE_USAGE_TRANSFER_SRC_BIT |
                                         VK_IMAGE_USAGE_TRANSFER_DST_BIT | VK_IMAGE_USAGE_SAMPLED_BIT };
        if (depthValid)
            out.depth = WorldImageDesc{ w.depth, w.depthView, s.depthFormat, w.extent,
                                        VK_IMAGE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT | VK_IMAGE_USAGE_SAMPLED_BIT };
        out.fsrDepth   = WorldImageDesc{ w.fsrDepth.image, w.fsrDepth.view, w.fsrDepth.format, w.fsrDepth.extent, w.fsrDepth.usage };
        out.motion     = WorldImageDesc{ w.motion.image, w.motion.view, w.motion.format, w.motion.extent, w.motion.usage };
        if(w.motionReady)out.objectMotion=WorldImageDesc{w.objectMotion.image,w.objectMotion.view,w.objectMotion.format,w.objectMotion.extent,w.objectMotion.usage};
        out.output     = WorldImageDesc{ w.output.image, w.output.view, w.output.format, w.output.extent, w.output.usage };
        out.back       = s.backImage;
        out.backFormat = s.colourFormat;
        out.native     = s.extent;
        return true;
    }

    void WorldTargetBlit(const WorldImages& in, bool fromOutput, VkImageLayout outputLayout)
    {
        WorldSet& w = s.world;
        if (!in.cmd || w.active || in.back != s.backImage) return;
        VkImage       from   = fromOutput ? w.output.image : w.colour;
        VkExtent2D    extent = fromOutput ? w.output.extent : w.extent;
        VkImageLayout& layout = fromOutput ? w.output.layout : w.colourLayout;
        if (fromOutput) layout = outputLayout;
        if (from == VK_NULL_HANDLE) return;
        if (layout != VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL)
            Barrier(in.cmd, from, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, layout, VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL, false);
        layout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;
        if (s.backLayout != VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL)
            Barrier(in.cmd, s.backImage, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, s.backLayout, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, false);
        s.backLayout = VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;
        Blit(in.cmd, from, extent, s.backImage, s.extent);
    }

    bool WorldTargetHudless(const WorldImages& in, uint32_t index, WorldImageDesc& out)
    {
        out = WorldImageDesc();
        WorldSet& w = s.world;
        if (!in.cmd || w.active || in.back != s.backImage || index >= 2 || s.backLayout != VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL)
            return false;
        WorldImage& h = w.hudless[index];
        if (h.image != VK_NULL_HANDLE && (h.extent.width != s.extent.width || h.extent.height != s.extent.height
                                          || h.format != s.colourFormat))
            return false;   // a resize: the rebuild drains and remakes them (WorldTargetDestroyNow)
        if (h.image == VK_NULL_HANDLE
            && !Make(h, s.colourFormat, s.extent, VK_IMAGE_USAGE_TRANSFER_DST_BIT | VK_IMAGE_USAGE_SAMPLED_BIT, "FSR hudless"))
            return false;
        // The back buffer holds the world alone (the copy just written); the interface is drawn on it after this.
        Barrier(in.cmd, s.backImage, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,
                VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL, false);
        s.backLayout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;
        // Discarded: the frame two before, which read it at its present, finished before this frame was begun.
        Barrier(in.cmd, h.image, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, VK_IMAGE_LAYOUT_UNDEFINED, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,
                true);
        VkImageCopy c = {};
        c.srcSubresource.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
        c.srcSubresource.layerCount = 1;
        c.dstSubresource            = c.srcSubresource;
        c.extent                    = VkExtent3D{ s.extent.width, s.extent.height, 1 };
        s.dapi->CmdCopyImage(in.cmd, s.backImage, VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL, h.image,
                             VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, 1, &c);
        Barrier(in.cmd, h.image, VK_IMAGE_ASPECT_COLOR_BIT, 1, 1, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,
                VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, false);
        h.layout = VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;
        out = WorldImageDesc{ h.image, h.view, h.format, h.extent, h.usage };
        return true;
    }

    void WorldTargetHudlessDrop()
    {
        bool any = false;
        for (WorldImage& h : s.world.hudless)
        {
            any = any || h.image != VK_NULL_HANDLE;
            Release(h, 0, true);
        }
        if (any) wxl::ScriptMgr::Log(WXL_LOG_INFO, "native: frame: FSR hudless images released");
    }

    bool PresentCopiesBackBuffer()
    {
        return !s.gamma && s.ownBack && s.extent.width == s.swapExtent.width && s.extent.height == s.swapExtent.height;
    }

    void WorldTargetDrop()
    {
        WorldTargetAbortInternal();
        if (s.world.colour == VK_NULL_HANDLE && s.world.output.image == VK_NULL_HANDLE) return;
        ReleaseAll(s.open ? s.serial : s.submitted, false);
        wxl::ScriptMgr::Log(WXL_LOG_INFO, "native: frame: FSR world target released");
    }
}
#endif // WOWDECOMP_FSR
