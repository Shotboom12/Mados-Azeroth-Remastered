#ifdef WOWDECOMP_FSR
#include "../../../../hd/fsr/HdFsrRigid.h"
#include "native/Present.hpp"
#endif
// Recording one draw: its key and pipeline, what it reads (src/vulkan/pipelines/RecordInputs.cpp), its
// binds, the shadow capture, and the draw itself.
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

#include "native/render/WmoGroups.hpp"
#include "vulkan/pipelines/Async.hpp" // HD MT2 (Claude 2026-11-04): the record split between the engine thread and the record thread
#include "native/record/RecordThread.hpp" // Claude CPU-B: the proof's count of capture stamps
#include "../../../../hd/HdVulkanShadowBridge.h"

#include <intrin.h>

#include <cmath>
#include <cstring>
#ifdef WOWDECOMP_FSR
#include <initializer_list>
#include <cstdio>
namespace {
// DIAG M2 (Claude, 2026-10-31): names the programs that make a frame unsafe (each distinct reason+vs+ps logged once, 64 max).
void FsrUnsafeNote(const char*why,const wxlvk::draw::Cmd&c,const wxlvk::vk::pipelines::detail::PipelineEntry*entry,unsigned mode,unsigned blend,int colorWrite){
 static unsigned long long seen[64],hits[64],total=0;static unsigned count=0;
 unsigned long long h=1469598103934665603ULL;for(const char*t:{why,(const char*)c.vs,(const char*)c.ps})for(const char*q=t;q&&*q;++q){h^=(unsigned char)*q;h*=1099511628211ULL;}h^=blend*31u+unsigned(colorWrite)+c.vertexFormat*977u;
 unsigned i=0;for(;i<count;++i)if(seen[i]==h)break;
 if(i==count){if(count>=64)return;seen[count]=h;hits[count]=0;++count;
  const char*rv=entry&&entry->row&&entry->row->vertSpv?entry->row->vertSpv:"-";const char*rf=entry&&entry->row&&entry->row->fragSpv?entry->row->fragSpv:"-";
  wxl::ScriptMgr::Log(WXL_LOG_WARN,"fsr: M2 DIAG unsafe #%u (%s): vs=\"%s\" ps=\"%s\" mode %u blend %u colorWrite %d format %u stride %u textures 0x%x indices %u; source %s row %s/%s gbufNull %d",
   count,why,c.vs,c.ps,mode,blend,colorWrite,c.vertexFormat,c.vertexStride,c.engineTexMask,c.indexCount,!entry?"no pipeline":entry->row?"hand-written row":entry->vrec?"translated modules":"fixed-function",rv,rf,entry?int(entry->gbufNull):-1);}
 ++hits[i];
 if(++total%20000==0){char line[900];int n=std::snprintf(line,sizeof line,"fsr: M2 DIAG unsafe totals after %llu:",total);for(unsigned k=0;k<count&&n>0&&n<int(sizeof line)-24;++k)n+=std::snprintf(line+n,sizeof line-n," #%u=%llu",k+1,hits[k]);wxl::ScriptMgr::Log(WXL_LOG_WARN,"%s",line);}
}
// DIAG M3 (Claude 2026-10-31): every distinct (model file, vs, ps, final mode, reasons) of a depth-writing draw on the motion pass,
// logged once: which model parts get a motion writer (mode 2 rigid / 3 skin) and why the others do not. Read only.
bool FsrDiagNamed(const char*n){static const char*k[]={"transport","zeppelin","ship","boat","gunship","elevator"};
 for(const char*w:k){const size_t l=std::strlen(w);for(const char*p=n;p&&*p;++p){size_t j=0;while(j<l&&p[j]&&(p[j]|32)==w[j])++j;if(j==l)return true;}}return false;}
void FsrModelNote(const wxlvk::draw::Cmd&c,unsigned bits,int mode,const char*whyRigid,const char*whySkin){
 static unsigned long long seen[640];static unsigned count=0,named=0,other=0;
 const char*name=HD::Fsr::Rigid::DiagModelName();const bool priority=name&&FsrDiagNamed(name);
 unsigned long long h=1469598103934665603ULL;for(const char*t:{name,(const char*)c.vs,(const char*)c.ps,whyRigid,whySkin})for(const char*q=t;q&&*q;++q){h^=(unsigned char)*q;h*=1099511628211ULL;}h^=unsigned(mode+1)*131u+bits*7u+c.blend*977u;
 for(unsigned i=0;i<count;++i)if(seen[i]==h)return;
 if(count>=640||(priority?named>=240:other>=400))return;seen[count++]=h;if(priority)++named;else ++other;
 wxl::ScriptMgr::Log(WXL_LOG_WARN,"fsr: M3 DIAG %s model \"%s\" (section bones %u, model bones %u, scope %u): vs=\"%s\" ps=\"%s\" mode %d rigid %s skin %s wind %s | why not rigid: %s | why not skin: %s | blend %u colorWrite %d topology %u vconst %u paletteCount %u indices %u",
  priority?"TRANSPORT":"model",name?name:"(no DrawBatch)",HD::Fsr::Rigid::DiagSectionBones(),HD::Fsr::Rigid::DiagModelBones(),HD::Fsr::Rigid::DiagScopeKind(),c.vs,c.ps,mode,(bits&8u)?"yes":"no",(bits&32u)?"yes":"no",(bits&64u)?"yes":"no",whyRigid,whySkin,c.blend,c.colorWrite,c.topology,c.vconst,c.paletteCount,c.indexCount);
}
// DIAG herbe M4 (Claude 2026-10-31): every distinct grass draw on the motion pass (HdGrass/DetailDoodad), logged once with
// the first CanDraw condition that refuses it. Read only.
void FsrGrassNote(const wxlvk::draw::Cmd&c,unsigned bits,int mode){
 static unsigned long long seen[96];static unsigned count=0;
 const bool scope=HD::Fsr::Rigid::GrassScope();const bool owner=HD::Fsr::Rigid::MotionOwner()!=0;
 const char*why=!owner?(scope?"grass scope without owner (M4 off or not collecting)":"no grass scope (draw outside CDetailDoodad scope)"):!scope?"owner but not grass scope":!c.vertexRows?"no vertex rows":!c.depthWrite||!c.depthTest?"no depth write/test":c.blend>1?"blended (blend > 1)":!c.colorWrite?"no colour write":c.topology!=3?"not triangle list":"ok (or viewport/vs family, see values)";
 unsigned long long h=1469598103934665603ULL;for(const char*t:{(const char*)c.vs,(const char*)c.ps,why})for(const char*q=t;q&&*q;++q){h^=(unsigned char)*q;h*=1099511628211ULL;}h^=unsigned(mode+1)*131u+bits*7u+c.blend*977u+unsigned(c.depthWrite)*3u;
 for(unsigned i=0;i<count;++i)if(seen[i]==h)return;if(count>=96)return;seen[count++]=h;
 wxl::ScriptMgr::Log(WXL_LOG_WARN,"fsr: M4 DIAG herbe #%u: vs=\"%s\" ps=\"%s\" mode %d wind-bit %s | why not M4: %s | grass scope %d owner %d blend %u depthWrite %d colorWrite %d topology %u viewport %gx%g indices %u",
  count,c.vs,c.ps,mode,(bits&64u)?"yes":"no",why,int(scope),int(owner),c.blend,int(c.depthWrite),c.colorWrite,c.topology,double(c.viewport.width),double(c.viewport.height),c.indexCount);
}
}
#endif


using namespace wxlvk::vk::pipelines::detail;

// A draw goes through these phases, each of which may skip it (counted, and named once in the log):
//
//   Accept         the Cmd can be drawn at all, its key, its pipeline, the pipeline fits the Cmd
//   Textures       one image per sampler slot the pixel shader declares       (RecordInputs.cpp)
//   PlanSlice      the ring slice: reuse the previous one, or is there room   (RecordInputs.cpp)
//   DescriptorSet  set 0 from the frame's cache, or allocated and written      (RecordInputs.cpp)
//   WriteSlice / WritePalette   the constants and the bone palette written     (RecordInputs.cpp)
//   Bind           pipeline, dynamic state, buffers, sets, push values -- what changed since the
//                  previous draw only (State::Bound)
//   Capture        an opaque world draw noted for the shadow replay (src/capture/)
//   Issue          the draw
//
// Nothing is recorded into the command buffer before Bind, so a skip is whole.
namespace
{
    /// The Cmd can be drawn, and its pipeline is the one for it. False: skipped (counted).
    bool Accept(VkRenderPass pass, const Cmd& c, Draft& dr)
    {
        // Tree wind: the draw noted against the watched models; its push values when it is a windy one.
        dr.windDraw = wxlvk::vk::wind::Observe(c, dr.frameSlot);
        MakeKey(c, dr.frameSlot, dr.windDraw != nullptr, IsGBufferPass(pass), dr.key);
        Key& key = dr.key;
#ifdef WOWDECOMP_FSR
        if(HD::Fsr::Rigid::Active()&&wxlvk::native::present::WorldObjectMotionPass(pass)){
            key.bones|=16u;
            if(!c.gpuScene){ // Claude B2: a scene group's copies are still: the zero marker (the camera's own motion)
            if(HD::Fsr::WindMotion::Global().CanDraw(c,dr.windDraw))key.bones|=64u;
            if(HD::Fsr::Skin::Global().CanDraw(c,dr.windDraw!=nullptr))key.bones|=32u;
            if(HD::Fsr::Rigid::Prepare(c,dr.windDraw!=nullptr,dr.rigidReprojection,&dr.rigidCookie))key.bones|=8u;
            }
        }
#endif

        // --- what cannot be drawn, decided before anything is bound -----------------------------
        if (c.vertexBuffer == VK_NULL_HANDLE || (c.indexed && c.indexBuffer == VK_NULL_HANDLE) || c.indexCount == 0
            || (!c.indexed && c.vertexOffset < 0) || !c.vertexRows)
        {
            if (!s.loggedNoBuffers)
            {
                s.loggedNoBuffers = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: a draw with no vertex buffer, no index buffer, no "
                                    "count, no vertex rows or a negative first vertex; skipped (logged once)");
            }
            ++s.stats.skippedUnsupported;
            CountUnsupported(key, c, "no vertex buffer, index buffer, count or vertex rows, or a negative first vertex");
            return false;
        }
        // Vulkan 1.0 wants a positive width and a positive height; a negative height is the
        // VK_KHR_maintenance1 flip this file does not use (the vertex shaders flip instead).
        if (c.viewport.width <= 0.0f || c.viewport.height <= 0.0f)
        {
            if (!s.loggedBadViewport)
            {
                s.loggedBadViewport = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: a draw with a %gx%g viewport; skipped (logged once)",
                                    static_cast<double>(c.viewport.width), static_cast<double>(c.viewport.height));
            }
            ++s.stats.skippedUnsupported;
            CountUnsupported(key, c, "an empty or negative viewport");
            return false;
        }

        // --- the pipeline ----------------------------------------------------------------------
        const char* failed = nullptr;
        dr.entry = Pipeline(key, pass, failed);
#ifdef WOWDECOMP_FSR
        if(!dr.entry&&(key.bones&16u)){
            FsrUnsafeNote("velocity pipeline failed",c,nullptr,0,c.blend,c.colorWrite);
            HD::Fsr::Rigid::UnsafeFrame();key.bones&=~120u;failed=nullptr;
            dr.entry=Pipeline(key,pass,failed); // optional velocity may fail; preserve original colour draw
        }
        if((key.bones&16u)&&(!std::strncmp(c.vs,"HdGrass",7)||!std::strncmp(c.vs,"DetailDoodad",12))) // DIAG herbe M4 (Claude 2026-10-31)
            FsrGrassNote(c,key.bones,dr.entry?int(dr.entry->velocityMode):-1);
        if((key.bones&16u)&&c.depthWrite&&c.depthTest&&HD::Fsr::Rigid::DiagModelName()) // DIAG M3 (Claude 2026-10-31)
            FsrModelNote(c,key.bones,dr.entry?int(dr.entry->velocityMode):-1,HD::Fsr::Rigid::WhyNoRigid(c,dr.windDraw!=nullptr),HD::Fsr::Skin::Global().WhyNot(c,dr.windDraw!=nullptr));
#endif
        if (!dr.entry && (key.bones & 2u))
        {
            // The wind key could not be had (no room, a failed build): the draw as it was, still.
            wxlvk::vk::wind::FellBack(failed);
            key.bones &= ~2u;
            dr.windDraw = nullptr;
            failed      = nullptr;
            dr.entry    = Pipeline(key, pass, failed);
        }
        if (!dr.entry && (key.bones & 4u))
        {
            // The G-buffer variant could not be had (no room in the module cache, a failed build): the pass
            // class's plain pipeline, the draw still drawn, its G-buffer record zeroed as any draw without
            // a variant (Build.cpp).
            static bool said = false;
            if (!said)
            {
                said = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: a G-buffer variant could not be had (%s); such draws take "
                                    "the class's plain pipeline (logged once)", failed ? failed : "?");
            }
            key.bones &= ~4u;
            failed   = nullptr;
            dr.entry = Pipeline(key, pass, failed);
        }
        if (!dr.entry)
        {
            CountUnsupported(key, c, failed);   // counted and logged by Pipeline()
            return false;
        }
        const PipelineEntry* entry = dr.entry;

        // A format this file lays out has one stride, and a Vulkan 1.0 pipeline bakes it in; a Cmd
        // whose stride disagrees cannot use the pipeline. Checked after the pipeline is resolved so
        // that an unknown key is named by Pipeline() and not lost here.
        if (c.vertexStride != entry->stride)
        {
            if (!s.loggedBadStride)
            {
                s.loggedBadStride = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: a format-%u draw with stride %u, not %u; the stride "
                                    "is baked into the pipeline, so it is skipped (logged once)",
                                    c.vertexFormat, c.vertexStride, entry->stride);
            }
            ++s.stats.skippedUnsupported;
            CountUnsupported(key, c, "the vertex stride is not the one the pipeline baked in", entry);
            return false;
        }

        // --- the slice class: the Cmd's rows must be the pipeline's class ------------------------
        //
        // Both come from the same registry lookup by vertex shader name, so a mismatch means the
        // registry answered differently at record time and at build time (a name resolved by the
        // manifest's name table rather than by a create). The draw is skipped rather than issued with
        // a stale palette.
        if (entry->vconst == Cmd::kVertexRegsHigh)
        {
            if (c.vconst != Cmd::kVertexRegsHigh)
            {
                if (!s.loggedClassMismatch)
                {
                    s.loggedClassMismatch = true;
                    wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: vs=\"%s\" builds as the 256-row class but the "
                                        "reader recorded it as 64 rows; skipped (logged once)", c.vs);
                }
                ++s.stats.skippedUnsupported;
                CountUnsupported(key, c, "the pipeline is of the 256-row class and the draw of the 64-row one", entry);
                return false;
            }
            if (!c.vertexConstHigh)
            {
                if (!s.loggedNoHighRows)
                {
                    s.loggedNoHighRows = true;
                    wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: a 256-row draw arrived without its high rows; "
                                        "skipped and counted under the ring (logged once)");
                }
                ++s.stats.uniformExhausted;
                CountSkip(kSkipUniforms, key, c, entry, -1, 0, "a 256-row draw without its high rows");
                return false;
            }
        }
        return true;
    }

    /**
     * Binds everything the draw needs, against State::Bound: a bind or a dynamic state equal to what
     * this command buffer already holds from the previous draw is not recorded again. The Vulkan rules
     * the tracking keeps:
     *   - binding a pipeline whose depth bias (blend constants) is static replaces that dynamic state,
     *     so the value must be set again for the next pipeline that has it dynamic; viewport and
     *     scissor are dynamic in every pipeline built here;
     *   - descriptor sets bound through another pipeline layout are disturbed (the set-0 layouts differ
     *     between layouts, and set 1 follows set 0), so a layout change rebinds both, and the push
     *     constants are pushed again with it.
     *
     * Offset 0 on every buffer, as the Cmd's contract says: the pool buffers are bound whole and
     * addressed the way D3D addresses them, by vertexOffset (BaseVertexIndex) and firstIndex (the index
     * buffer's byte offset in 16-bit units plus the batch start). A multi-stream layout's extra streams
     * too: D3D's stream-offset mode 0 (Cmd.hpp).
     *
     * @return bool ok : false when the draw is skipped after all (the streams disagree, a wind pipeline
     *         without its set)
     */
    bool Bind(VkCommandBuffer cmd, const Cmd& c, const Draft& dr, VkBuffer (&vbs)[Cmd::kMaxStreams + 1], uint32_t& vbCount)
    {
        const loader::Device&  d      = *s.dapi;
        const PipelineEntry*   entry  = dr.entry;
        const LayoutEntry&     layout = s.layouts[entry->layout];
        const uint32_t         frameSlot  = dr.frameSlot;
        const VkPipelineLayout pipeLayout =
#ifdef WOWDECOMP_FSR
            entry->velocityMode==4?(entry->bones?layout.motionWindBones:layout.motionWind):
            entry->velocityMode==3?layout.skinBones:
#endif
            entry->table ? layout.table :   // Claude B3
            entry->bones ? (entry->wind ? layout.windBones : layout.bones)
                                                         : (entry->wind ? layout.wind : layout.pipeline);

#ifdef WOWDECOMP_FSR
        const VkPipelineLayout skinLayout=entry->velocityMode==3?layout.skinBones:VK_NULL_HANDLE;
#endif
        static const VkDeviceSize zeros[Cmd::kMaxStreams + 1] = {};
        vbs[0]  = c.vertexBuffer;
        vbCount = 1;
        for (uint32_t i = 0; i < c.extraStreams && vbCount < entry->streams; ++i) vbs[vbCount++] = c.extraBuffer[i];
        if (vbCount != entry->streams)
        {
            ++s.stats.skippedUnsupported;   // cannot happen: the key carries the strides
            CountUnsupported(dr.key, c, "the draw's streams are not the pipeline's", entry);
            return false;
        }
        // The constant stream after the draw's own (Build() left a binding for it).
        if (entry->constStream) vbs[vbCount++] = s.constVb.handle;

        State::Bound& b = s.bound;
        if (b.cmd != cmd)
        {
            b     = State::Bound();
            b.cmd = cmd;
        }

        if (b.pipeline != entry->pipeline)
        {
            d.CmdBindPipeline(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, entry->pipeline);
            b.pipeline = entry->pipeline;
            if (!entry->dynamicBias) b.bias = false;
            if (!entry->dynamicBlend) b.blend = false;
            ++s.stats.pipelineBinds;
        }
        else
            ++s.stats.pipelineBindsSkipped;

        if (!b.viewport || std::memcmp(&b.viewportValue, &c.viewport, sizeof c.viewport) != 0)
        {
            d.CmdSetViewport(cmd, 0, 1, &c.viewport);
            b.viewport      = true;
            b.viewportValue = c.viewport;
            ++s.stats.dynamicSets;
        }
        else
            ++s.stats.dynamicSkipped;
        if (!b.scissor || std::memcmp(&b.scissorValue, &c.scissor, sizeof c.scissor) != 0)
        {
            d.CmdSetScissor(cmd, 0, 1, &c.scissor);
            b.scissor      = true;
            b.scissorValue = c.scissor;
            ++s.stats.dynamicSets;
        }
        else
            ++s.stats.dynamicSkipped;
        if (entry->dynamicBias)
        {
            // D3DRS_DEPTHBIAS in Vulkan's r units (kDepthBiasUnits); no slope term, as D3D's
            // SLOPESCALEDEPTHBIAS is never set by the engine; no clamp (that needs a feature).
            const float bias = c.depthBias * kDepthBiasUnits;
            if (!b.bias || b.biasValue != bias)
            {
                d.CmdSetDepthBias(cmd, bias, 0.0f, 0.0f);
                b.bias      = true;
                b.biasValue = bias;
                ++s.stats.dynamicSets;
            }
            else
                ++s.stats.dynamicSkipped;
            ++s.stats.depthBiasDraws;
        }
        if (entry->dynamicBlend)
        {
            if (!b.blend || b.blendValue != c.blendFactor)
            {
                const float f[4] = { c.blendFactor, c.blendFactor, c.blendFactor, c.blendFactor };
                d.CmdSetBlendConstants(cmd, f);
                b.blend      = true;
                b.blendValue = c.blendFactor;
                ++s.stats.dynamicSets;
            }
            else
                ++s.stats.dynamicSkipped;
            ++s.stats.blendFactorDraws;
        }

        bool sameVbs = b.vbCount == vbCount;
        for (uint32_t i = 0; sameVbs && i < vbCount; ++i) sameVbs = b.vbs[i] == vbs[i];
        if (!sameVbs)
        {
            d.CmdBindVertexBuffers(cmd, 0, vbCount, vbs, zeros);
            b.vbCount = vbCount;
            for (uint32_t i = 0; i < vbCount; ++i) b.vbs[i] = vbs[i];
            ++s.stats.bufferBinds;
        }
        else
            ++s.stats.bufferBindsSkipped;
        if (entry->streams > 1) ++s.stats.multiStreamDraws;
        if (entry->constStream) ++s.stats.coveredDraws;
        if (dr.idleUsed) ++s.stats.idleStageDraws;

        if (b.layout != pipeLayout)
        {
            // Another layout: every set and the push range are rebound through it.
            b.layout = pipeLayout;
            b.set0   = VK_NULL_HANDLE;
            b.set1   = VK_NULL_HANDLE;
            b.set2   = VK_NULL_HANDLE;
            b.set3   = VK_NULL_HANDLE;
            b.push   = false;
        }
        if (!entry->usesRing)
        {
            // The UI's path, as it shipped: set 0 and the first four registers pushed.
            if (b.set0 != dr.set)
            {
                d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, pipeLayout, 0, 1, &dr.set, 0, nullptr);
                b.set0 = dr.set;
                ++s.stats.setBinds;
            }
            else
                ++s.stats.setBindsSkipped;
            if (!b.push || !wxlvk::simd::EqualRows(b.pushValue, c.vertexRows, kPushBytes / 16))
            {
                d.CmdPushConstants(cmd, pipeLayout, VK_SHADER_STAGE_VERTEX_BIT, 0, kPushBytes, c.vertexRows);
                b.push = true;
                std::memcpy(b.pushValue, c.vertexRows, kPushBytes);
                ++s.stats.pushes;
            }
            else
                ++s.stats.pushesSkipped;
            return true;
        }

        const VkDescriptorSet ringSet = RingSet(frameSlot);
        if (b.set0 != dr.set)
        {
            // Set 0 and set 1 in one call; the one dynamic offset is set 1's slice.
            const VkDescriptorSet sets[2] = { dr.set, ringSet };
            d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, pipeLayout, 0, 2, sets, 1, &dr.dynamicOffset);
            ++s.stats.setBinds;
        }
        else if (b.set1 != ringSet || b.set1Offset != dr.dynamicOffset)
        {
            // The same textures: only the slice moves.
            d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, pipeLayout, 1, 1, &ringSet, 1, &dr.dynamicOffset);
            ++s.stats.setBinds;
        }
        else
            ++s.stats.setBindsSkipped;
        b.set0       = dr.set;
        b.set1       = ringSet;
        b.set1Offset = dr.dynamicOffset;

        if (entry->bones)
        {
            // Set 2, the palette: set 0 and 1 above leave it bound (same layout), so only a palette
            // change rebinds it.
            const VkDescriptorSet boneSet = c.gpuIndirect ? c.gpuPaletteSet : s.bonesSets[frameSlot];   // Claude voie B
            if (b.set2 != boneSet || b.set2Offset != dr.paletteOffset)
            {
                d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, pipeLayout, 2, 1, &boneSet, 1,
                                        &dr.paletteOffset);
                b.set2       = boneSet;
                b.set2Offset = dr.paletteOffset;
                ++s.stats.setBinds;
            }
            else
                ++s.stats.setBindsSkipped;
            ++s.stats.bonesDraws;
        }
        if (entry->table && b.set3 != wxlvk::vk::pipelines::TableSet())   // Claude B3
        {
            b.set3 = wxlvk::vk::pipelines::TableSet();
            d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, pipeLayout, 3, 1, &b.set3, 0, nullptr);
            ++s.stats.setBinds;
        }
        if (entry->wind
#ifdef WOWDECOMP_FSR
            &&entry->velocityMode!=4
#endif
        )
        {
            // Set 3 (the wind block and the per-vertex data) and the model's push values. The push
            // range is the UI's, unused by every other pair, so what the UI cached is stale. Never a
            // wind pipeline without its set: the draw is skipped rather than read nothing.
            const VkDescriptorSet windSet = wxlvk::vk::wind::Set(frameSlot);
            if (windSet == VK_NULL_HANDLE)
            {
                ++s.stats.skippedUnsupported;
                return false;
            }
            d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, pipeLayout, 3, 1, &windSet, 0, nullptr);
            const wxlvk::vk::wind::Draw still = {};
            d.CmdPushConstants(cmd, pipeLayout, VK_SHADER_STAGE_VERTEX_BIT, 0, sizeof(wxlvk::vk::wind::Draw),
                               dr.windDraw ? dr.windDraw : &still);
            b.push = false;
            if (dr.windDraw) wxlvk::vk::wind::Drawn();
        }
#ifdef WOWDECOMP_FSR
        if(entry->velocityMode==4){
            const VkDescriptorSet set=HD::Fsr::WindMotion::Global().Set(frameSlot);
            d.CmdBindDescriptorSets(cmd,VK_PIPELINE_BIND_POINT_GRAPHICS,pipeLayout,3,1,&set,3,dr.windData.offsets);
            if(entry->wind){const wxlvk::vk::wind::Draw still{};d.CmdPushConstants(cmd,pipeLayout,VK_SHADER_STAGE_VERTEX_BIT,0,sizeof still,dr.windDraw?dr.windDraw:&still);if(dr.windDraw)wxlvk::vk::wind::Drawn();}
            d.CmdPushConstants(cmd,pipeLayout,VK_SHADER_STAGE_VERTEX_BIT,16,4,&dr.windData.valid);b.push=false;
        }
        if(entry->velocityMode==3){
            const VkDescriptorSet previous=HD::Fsr::Skin::Global().Set(frameSlot);
            d.CmdBindDescriptorSets(cmd,VK_PIPELINE_BIND_POINT_GRAPHICS,pipeLayout,3,1,&previous,2,dr.skinData.offsets);
            d.CmdPushConstants(cmd,pipeLayout,VK_SHADER_STAGE_VERTEX_BIT,0,4,&dr.skinData.valid);b.push=false;
        }
        if(entry->velocityMode==2){
            d.CmdPushConstants(cmd,pipeLayout,VK_SHADER_STAGE_VERTEX_BIT,0,64,dr.rigidReprojection);
            b.push=false; // the UI push-constant cache must not claim these values
        }
#endif
        if (c.instanceCount > 1u || (c.gpuIndirect && !c.gpuScene && !c.gpuTerrain))   // Claude B2: the .gpus twins take no push value (nor B3's)
        {
            // Claude INST1: the .inst twin's one push value, the palette rows between two copies (voie B: its .gpu twin).
            d.CmdPushConstants(cmd, pipeLayout, VK_SHADER_STAGE_VERTEX_BIT, 0, sizeof c.instanceRows, &c.instanceRows);
            b.push = false;
        }
        return true;
    }

    /// A model-view 3 x 4 (three rows: view = (r0.v, r1.v, r2.v)) that is a real transform: its scale (the longest
    /// row) between 1/50 and 50 and a non-flat 3 x 3 (vulkan/Wind.cpp's test). 0 when it is not.
    float TransformScale(const float* r0, const float* r1, const float* r2)
    {
        const float s0 = r0[0] * r0[0] + r0[1] * r0[1] + r0[2] * r0[2];
        const float s1 = r1[0] * r1[0] + r1[1] * r1[1] + r1[2] * r1[2];
        const float s2 = r2[0] * r2[0] + r2[1] * r2[1] + r2[2] * r2[2];
        const float det = r0[0] * (r1[1] * r2[2] - r1[2] * r2[1]) - r0[1] * (r1[0] * r2[2] - r1[2] * r2[0])
                          + r0[2] * (r1[0] * r2[1] - r1[1] * r2[0]);
        const float big = s0 > s1 ? (s0 > s2 ? s0 : s2) : (s1 > s2 ? s1 : s2);
        if (!(big > 4e-4f && big < 2500.0f) || !(std::fabs(det) > 1e-6f)) return 0.0f;
        return std::sqrt(big);
    }

    /**
     * Claude PERF2: an M2 batch whose own extent the engine gave (c.modelReach, c.modelBones): exact and tight. Every
     * vertex is sum w_i (A_i v + t_i) over the section's bones (weights summing to 1), and each component of A_i v is at
     * most |row_k of A_i| |v|: the vertex lies in the box of the bones' translations widened by |row_k| * modelReach on
     * each view axis -- its sphere's radius is the box's half-diagonal plus modelReach * sqrt(|r0|^2 + |r1|^2 + |r2|^2).
     * Only the section's own rows (c31 .. c31 + 3 n), never the palette's stale high-water rows of earlier models. A
     * bone scaled to nothing still places its vertices at its translation: kept in the box. False (the fixed reach
     * then) when anything is missing. The fixed kModelReach (30 yd) put a unit's draws into every face of every lamp
     * cube round it (measured: 16 views a draw, 6 ms a frame in Darkshire at night). Not for a swaying tree (the
     * wind moves its vertices past the bind pose).
     */
    bool ExactModelBound(const Cmd& c, const PipelineEntry* entry, bool skinned, float out[4])
    {
        constexpr float kMaxRadius = 250.0f;
        if (!(c.modelBones > 0 && c.modelReach >= 0.0f && std::isfinite(c.modelReach))) return false;
        const uint32_t n = c.modelBones;
        const float (*rows)[4] = c.vertexRows + Cmd::kPaletteBase;
        if (skinned && entry->bones)
        {
            if (!c.paletteRows || c.paletteCount < 3 * n) return false;
            rows = c.paletteRows;
        }
        else if (skinned ? Cmd::kPaletteBase + 3 * n > Cmd::kVertexRegs : n != 1)
            return false;
        float lo[3] = { 3.0e38f, 3.0e38f, 3.0e38f }, hi[3] = { -3.0e38f, -3.0e38f, -3.0e38f };
        float frob = 0.0f;
        for (uint32_t b = 0; b < n; ++b)
        {
            float f2 = 0.0f;
            for (int k = 0; k < 3; ++k)
            {
                const float* r = rows[b * 3 + k];
                const float  t = r[3];
                if (!std::isfinite(t)) return false;
                lo[k] = t < lo[k] ? t : lo[k];
                hi[k] = t > hi[k] ? t : hi[k];
                f2 += r[0] * r[0] + r[1] * r[1] + r[2] * r[2];
            }
            if (!std::isfinite(f2)) return false;
            frob = f2 > frob ? f2 : frob;
        }
        float h2 = 0.0f, centre[3];
        for (int k = 0; k < 3; ++k)
        {
            centre[k] = 0.5f * (lo[k] + hi[k]);
            const float h = 0.5f * (hi[k] - lo[k]);
            h2 += h * h;
        }
        const float radius = std::sqrt(h2) + c.modelReach * std::sqrt(frob) + 0.05f;
        if (!std::isfinite(radius) || !(radius < kMaxRadius)) return false;
        out[0] = centre[0]; out[1] = centre[1]; out[2] = centre[2]; out[3] = radius;
        return true;
    }

    /**
     * A model draw's bounding sphere in view space (the replay's culling, WXL_VK_REPLAY_CULL_FRUSTUM), conservative:
     * the model's own extent is not known here, so round where its transforms put the model's origin -- the static
     * model's c31..c33, or, skinned, every bone's rows (c31 + 3 i: the bone palette's high-water rows, stale ones
     * included, which only widens it) -- a reach of kModelReach yards times the largest scale (a doodad, a unit, a
     * mount, a large creature fit in it; a huge one past it would lose the part of its shadow that falls in a light
     * whose frustum misses its sphere). Radius < 0 (never culled) for a draw with no model rows or a sphere so wide the
     * test would be worth nothing.
     */
    void ModelBound(const Cmd& c, const PipelineEntry* entry, float out[4], bool exact = true, uint32_t own = 0)   // Claude PREUVE1: exact = false, the bound before PERF2
    {
        constexpr float    kModelReach = 30.0f;    ///< yd round a model's transforms its geometry is taken to stay within
        constexpr float    kMaxRadius  = 250.0f;   ///< past this the bound is dropped (unknown)
        constexpr uint32_t kMaxBones   = 256;   // HD LV41 (Claude): was 64, a 75-bone palette lost its last bones from the bound
        out[0] = out[1] = out[2] = 0.0f;
        out[3] = -1.0f;
        if (!c.vertexRows || !entry->vrec) return;
        const bool skinned = (entry->vrec->inputMask & (1u << wxlvk::vk::manifest::kBlendWeight0)) != 0u;
        // Claude PERF2: an M2 batch whose own extent the engine gave (c.modelReach, c.modelBones): exact and tight. Every
        // vertex is sum w_i (A_i v + t_i) over the section's bones (weights summing to 1), and each component of A_i v is
        // at most |row_k of A_i| |v|: the vertex lies in the box of the bones' translations widened by
        // |row_k| * modelReach on each view axis -- its sphere's radius is the box's half-diagonal plus
        // modelReach * sqrt(|r0|^2 + |r1|^2 + |r2|^2). Only the section's own rows (c31 .. c31 + 3 n), never the
        // palette's stale high-water rows of earlier models. A bone scaled to nothing still places its vertices at
        // its translation: kept in the box. The fixed kModelReach (30 yd) made a unit's shadow drawn into every face
        // of every lamp cube round it (measured: 16 views a draw, 6 ms a frame in Darkshire at night).
        if (exact && !entry->wind && ExactModelBound(c, entry, skinned, out)) return;
        const float (*rows)[4] = c.vertexRows + Cmd::kPaletteBase;
        uint32_t bones = 1;
        // Claude INST1-CUBES: `own` = the section's bone count (the engine gave it, c.modelBones): the same 30 yd round
        // the section's own rows alone -- its bones read through indices, weights or not -- never the palette's stale
        // high-water rows past them, which held whatever model wrote them last (with INST1 the sun shadows' instanced
        // copies, scattered over 640 yd: a sphere past kMaxRadius, none at all, the draw in every cube).
        const bool ownSkinned = own > 0u && (entry->vrec->inputMask & ((1u << wxlvk::vk::manifest::kBlendWeight0)
                                                                    | (1u << wxlvk::vk::manifest::kBlendIndices0))) != 0u;
        if (ownSkinned)
        {
            if (!entry->bones || !c.paletteRows || c.paletteCount < 3 * own) return;
            rows  = c.paletteRows;
            bones = own;
        }
        else if (own > 0u)
            bones = 1;
        else if (skinned)
        {
            if (entry->bones && c.paletteRows && c.paletteCount >= 3)
            {
                rows  = c.paletteRows;
                bones = c.paletteCount / 3;
            }
            else
                bones = (Cmd::kVertexRegs - Cmd::kPaletteBase) / 3;
            if (bones > kMaxBones) bones = kMaxBones;
        }
        float lo[3] = { 3.0e38f, 3.0e38f, 3.0e38f }, hi[3] = { -3.0e38f, -3.0e38f, -3.0e38f };
        float scale = 0.0f;
        bool  any   = false;
        for (uint32_t b = 0; b < bones; ++b)
        {
            const float* r0 = rows[b * 3 + 0];
            const float* r1 = rows[b * 3 + 1];
            const float* r2 = rows[b * 3 + 2];
            const float  s  = TransformScale(r0, r1, r2);
            if (s <= 0.0f) continue;   // a hidden bone scaled to nothing, an unwritten row
            const float t[3] = { r0[3], r1[3], r2[3] };
            if (!std::isfinite(t[0]) || !std::isfinite(t[1]) || !std::isfinite(t[2])) continue;
            for (int k = 0; k < 3; ++k)
            {
                lo[k] = t[k] < lo[k] ? t[k] : lo[k];
                hi[k] = t[k] > hi[k] ? t[k] : hi[k];
            }
            scale = s > scale ? s : scale;
            any   = true;
        }
        if (!any) return;
        float half2 = 0.0f;
        for (int k = 0; k < 3; ++k)
        {
            out[k] = 0.5f * (lo[k] + hi[k]);
            const float h = 0.5f * (hi[k] - lo[k]);
            half2 += h * h;
        }
        const float radius = std::sqrt(half2) + kModelReach * (scale > 1.0f ? scale : 1.0f);
        if (radius < kMaxRadius) out[3] = radius;
    }

    /// The shadow replay's capture (src/capture/): an opaque world draw, as bound.
    void Capture(const Cmd& c, const Draft& dr, const VkBuffer* vbs, uint32_t vbCount, const float* wmoBound = nullptr, int onBack = -1)
    {
        const PipelineEntry* entry = dr.entry;
        const Key&           key   = dr.key;
        if (onBack >= 0 && wxlvk::recordthread::passQueue >= 2)   // Claude CPU-B: the proof's count
            wxlvk::recordthread::NoteCaptureStamp(wxlvk::capture::Open(-1), wxlvk::capture::Open(onBack));
        if (!wxlvk::capture::Open(onBack) || !entry->usesRing || !entry->translated || !entry->vrec) return;
        if (c.instanceCount > 1u || (c.gpuIndirect && !c.gpuScene && !c.gpuTerrain)) return;   // Claude INST1: a replay would draw copy 0 alone (voie B: its GPU commands)
        const bool variant = entry->wind ? (entry->bones ? entry->vrec->shadowWindBones : entry->vrec->shadowWind)
                                         : (entry->bones && !entry->table ? entry->vrec->shadowBones : entry->vrec->shadow);
        if (!variant || !key.depthWrite || !key.depthTest || key.blend > 1u || key.colorWrite == 0u || entry->pointList)
            return;
        wxlvk::capture::Draw cd = {};
        cd.entry       = static_cast<uint32_t>(entry - s.pipelines);
        cd.set0        = dr.set;
        cd.ring        = RingSet(dr.frameSlot);
        cd.ringOffset  = dr.dynamicOffset;
        cd.bones       = entry->bones ? s.bonesSets[dr.frameSlot] : VK_NULL_HANDLE;
        cd.bonesOffset = dr.paletteOffset;
        static_assert(sizeof cd.vbs / sizeof cd.vbs[0] >= Cmd::kMaxStreams, "every stream of a draw");
        for (uint32_t i = 0; i < vbCount && i < sizeof cd.vbs / sizeof cd.vbs[0]; ++i) cd.vbs[i] = vbs[i];
        cd.vbCount      = vbCount;
        cd.ib           = c.indexBuffer;
        cd.firstIndex   = c.firstIndex;
        cd.count        = c.indexCount;
        cd.vertexOffset = c.vertexOffset;
        cd.indexed      = c.indexed ? 1u : 0u;
        cd.items        = c.vertexItems;   // Claude ANIM1
        cd.alphaTest    = (key.blend == 1u || c.alphaRef != 0u) ? 1u : 0u;
        // A mover: a model draw (its vertex layout carries bone weights, which the terrain and the map
        // objects have not) of a UNIT -- a model one of whose draws wears a character's, a creature's or
        // an item's texture, which vulkan/Wind.cpp reads off every file texture's path (a body's own skin
        // is composited and has none) -- and not a swaying tree. The bone
        // palette marks the rest of what moves (capture/Replay.cpp). The world's doodads, batched or
        // not, are never movers: taking the unbatched ones for movers (an earlier rule)
        // kept them out of the cached maps and their shadows flickered with the camera. A skinned model
        // whose texture has no name at all -- a character's composited skin -- is a unit's too: its body's
        // draws come before its hair's in the frame and were taken for the world's (a snow cap on the
        // player's head).
        // The reader decided it (draw/Reader.cpp WriteMoverRow, the row the G-buffer variants read too).
        cd.live = c.pixelConst[Cmd::kMoverRow][0] > 0.5f && !entry->wind ? 1u : 0u;
        // The terrain's draws, for a replay that wants the ground alone (WXL_VK_REPLAY_TERRAIN_ONLY).
        cd.terrain = std::strncmp(c.vs, "Terrain", 7) == 0 ? 1u : 0u;
        // A static M2 doodad (the engine's M2 draws go through the Diffuse_ vertex family; vulkan/Wind.cpp reads them
        // the same way): what a DYNAMIC_ONLY replay adds with WXL_VK_REPLAY_WITH_DOODADS (a units' shadow
        // map: the small doodads the light bake leaves out cast their own silhouette round the player).
        cd.doodad = cd.live == 0u && !entry->wind && std::strncmp(c.vs, "Diffuse_", 8) == 0 ? 1u : 0u;
        // A map object's draw (every MapObj vertex family, exterior and interior groups): what a DYNAMIC_ONLY replay adds
        // with WXL_VK_REPLAY_WITH_MAPOBJECTS (the units' map round the player: the roofs' real shadow).
        cd.mapobj = cd.live == 0u && !entry->wind && std::strncmp(c.vs, "MapObj", 6) == 0 ? 1u : 0u;
        // Its bound for the replay's culling: the units' and the M2 doodads' (and the swaying trees'); a map object's its
        // group's box (the engine's group renderer runs round this draw: native/render/WmoGroups.cpp); none for the terrain.
        cd.bound[3] = -1.0f;
        if (c.gpuTerrain)
        {
            // Claude B3: one record a chunk, as its own draw would give: the engine's own buffers, its rows at set 2's
            // offset (the .gputr shadow twins); the water's mirror draws the whole group by its indirect commands.
            const HD::GpuTerrainData::Draw& g = *c.gpuTerrain;
            std::memcpy(cd.boundOld, cd.bound, sizeof cd.boundOld);
            cd.bones     = c.gpuReplaySet;
            cd.palette   = c.gpuPaletteSet;
            cd.groupArgs = wxlvk::capture::Room() >= g.count ? c.gpuArgs : VK_NULL_HANDLE;
            for (uint32_t n = 0; n < g.count; ++n)
            {
                const HD::GpuTerrainData::Chunk& m = g.chunks[n];
                cd.groupOffset   = c.gpuArgsOffset;
                cd.groupCommands = c.gpuDrawCount;
                cd.groupRecords  = n == 0u ? g.count : 0u;
                cd.firstIndex    = m.firstIndex;
                cd.count         = m.indexCount;
                cd.vertexOffset  = m.vertexOffset;
                cd.instance      = m.instance;
                cd.bonesOffset   = m.instance * HD::GpuTerrainData::kRows * 16u;
                wxlvk::capture::Note(cd);
            }
            return;
        }
        if (c.gpuScene)
        {
            // Claude B2: one record a copy, as the copy's own draw would give: the shared store's section, the copy's
            // three rows at the palette's start (the stream's 3600-byte set at their offset), its one-bone bounds.
            const HD::GpuSceneData::Draw& g = *c.gpuScene;
            if (!g.replay) return;
            cd.bones = c.gpuReplaySet;
            cd.palette = c.gpuPaletteSet;
            // Claude B3: the water's mirror draws the group whole, by the same indirect commands.
            uint32_t records = 0;
            for (uint32_t n = 0; n < g.cmdCount; ++n) records += g.cmds[n].copies;
            cd.groupArgs     = wxlvk::capture::Room() >= records ? c.gpuArgs : VK_NULL_HANDLE;
            cd.groupOffset   = c.gpuArgsOffset;
            cd.groupCommands = c.gpuDrawCount;
            cd.groupRecords  = records;
            for (uint32_t n = 0; n < g.cmdCount; ++n)
            {
                const HD::GpuSceneData::Cmd& m = g.cmds[n];
                cd.firstIndex   = m.firstIndex;
                cd.count        = m.indexCount;
                cd.vertexOffset = m.vertexOffset;
                for (uint32_t i = m.firstCopy; i < m.firstCopy + m.copies; ++i)
                {
                    const HD::GpuSceneData::Copy& p = g.copies[i];
                    cd.bonesOffset = g.rowsAt + p.at * 48u;
                    std::memcpy(cd.boundOld, p.boundOld, sizeof cd.boundOld);
                    std::memcpy(cd.bound, p.bound[3] >= 0.0f ? p.bound : p.boundOld, sizeof cd.bound);
                    cd.instance = g.rowsAt / 48u + p.at;
                    wxlvk::capture::Note(cd);
                    cd.groupRecords = 0u;
                }
            }
            return;
        }
        if (cd.live || cd.doodad || entry->wind)
        {
            // A bone-palette draw's bound is a function of its palette (the serial moves whenever a row from c31 up
            // changes, WritePalette's own test): a model's batches share it, so it is computed once for the run.
            const bool palette = entry->bones && c.paletteRows && c.paletteCount >= 3
                                 && (entry->vrec->inputMask & (1u << wxlvk::vk::manifest::kBlendWeight0)) != 0u;
            // Claude PREUVE1: the bound before PERF2, exactly as it was made and cached then (the exclusion boxes test its centre).
            // Claude INST1-CUBES: a section whose bone count the engine gave: its own rows only (ModelBound's `own`).
            const uint32_t own = !entry->wind && c.modelBones > 0 && c.modelReach >= 0.0f ? c.modelBones : 0u;
            const bool ownPalette = own > 0u && entry->bones && c.paletteRows && c.paletteCount >= 3
                                    && (entry->vrec->inputMask & ((1u << wxlvk::vk::manifest::kBlendWeight0)
                                                                | (1u << wxlvk::vk::manifest::kBlendIndices0))) != 0u;
            const bool cached = own > 0u ? ownPalette : palette;
            if (cached && s.boundValid && s.boundSerial == c.paletteSerial && s.boundCount == c.paletteCount && s.boundOwn == own)
                std::memcpy(cd.boundOld, s.boundValue, sizeof cd.boundOld);
            else
            {
                ModelBound(c, entry, cd.boundOld, false, own);
                s.boundValid = cached;
                if (cached)
                {
                    s.boundSerial = c.paletteSerial;
                    s.boundCount  = c.paletteCount;
                    s.boundOwn    = own;
                    std::memcpy(s.boundValue, cd.boundOld, sizeof cd.boundOld);
                }
            }
            // Claude PERF2: the exact bound (the section's own bones and reach) for the views' culling; the old one when it has none.
            std::memcpy(cd.bound, cd.boundOld, sizeof cd.bound);
            if (!entry->wind && c.modelBones > 0 && c.modelReach >= 0.0f)
            {
                // Claude INST1-CUBES: a draw reads the palette by its bone indices, weights or not (Diffuse_T1:11, a doodad
                // with one influence a vertex: indices and no weights). Taken for a rigid one (c31 alone), its exact bound
                // was refused (n > 1) and its fallback read the stale c31 rows: a sphere off the model, or none at all
                // when those rows held the instanced sun-shadow bones (INST1), and it went into every cube.
                const bool skinned = (entry->vrec->inputMask & ((1u << wxlvk::vk::manifest::kBlendWeight0)
                                                              | (1u << wxlvk::vk::manifest::kBlendIndices0))) != 0u;
                const bool paletteExact = entry->bones && c.paletteRows && c.paletteCount >= 3 && skinned;
                if (paletteExact && s.exactValid && s.exactSerial == c.paletteSerial && s.exactCount == c.paletteCount
                    && s.exactBones == c.modelBones && s.exactReach == c.modelReach)
                {
                    if (s.exactFound) std::memcpy(cd.bound, s.exactValue, sizeof cd.bound);
                }
                else
                {
                    float e[4];
                    const bool found = ExactModelBound(c, entry, skinned, e);
                    if (found) std::memcpy(cd.bound, e, sizeof cd.bound);
                    s.exactValid = paletteExact;
                    if (paletteExact)
                    {
                        s.exactSerial = c.paletteSerial; s.exactCount = c.paletteCount;
                        s.exactBones = c.modelBones; s.exactReach = c.modelReach;
                        s.exactFound = found;
                        if (found) std::memcpy(s.exactValue, e, sizeof s.exactValue);
                    }
                }
            }
        }
        else if (cd.mapobj && c.vertexRows)
        {
            // HD MT2 (Claude 2026-11-04): on the record thread, the bound the engine thread computed while the group was current.
            if (wmoBound) std::memcpy(cd.bound, wmoBound, sizeof cd.bound);
            else wxlvk::native::render::wmogroups::DrawBound(c.vertexRows, cd.bound);
        }
        if (!(cd.live || cd.doodad || entry->wind)) std::memcpy(cd.boundOld, cd.bound, sizeof cd.boundOld);   // Claude PREUVE1: unchanged by PERF2
        if (entry->wind)
        {
            // A swaying tree's shadow sways with it: the same set 3 and the same model values.
            static_assert(sizeof cd.windPush == sizeof(wxlvk::vk::wind::Draw), "the wind's push values");
            const wxlvk::vk::wind::Draw still = {};
            cd.wind    = 1u;
            cd.windSet = wxlvk::vk::wind::Set(dr.frameSlot);
            std::memcpy(cd.windPush, dr.windDraw ? dr.windDraw : &still, sizeof cd.windPush);
        }
        wxlvk::capture::Note(cd);
    }

    /// The draw itself, and its counts.
    void Issue(VkCommandBuffer cmd, const Cmd& c, const PipelineEntry* entry
#ifdef WOWDECOMP_FSR
        ,uint32_t rigidCookie,const HD::Fsr::Skin::DrawData&skinData,const HD::Fsr::WindMotion::DrawData&windData,bool fsrRigid
#endif
    )
    {
#ifdef WOWDECOMP_FSR
        if(fsrRigid&&entry->motionPass&&c.depthWrite&&c.depthTest){
            // FIX Claude 2026-10-31: a blended or colourless depth writer with its zero marker is safe (Build.cpp).
            if(!entry->velocityMode)FsrUnsafeNote(!HD::Fsr::Rigid::WroteMotion()?"no marker variant, before any motion writer (safe)":c.colorWrite&&c.blend<=1?"no zero/velocity variant AFTER a motion writer (unsafe)":"blend or no colour, no zero variant, AFTER a motion writer (unsafe)",c,entry,entry->velocityMode,c.blend,c.colorWrite);
            HD::Fsr::Rigid::Issued(entry->velocityMode,rigidCookie);
        }
#endif
        const loader::Device& d = *s.dapi;
        State::Bound&         b = s.bound;
        if (c.indexed)
        {
            if (b.ib != c.indexBuffer)
            {
                d.CmdBindIndexBuffer(cmd, c.indexBuffer, 0, VK_INDEX_TYPE_UINT16);
                b.ib = c.indexBuffer;
                ++s.stats.bufferBinds;
            }
            else
                ++s.stats.bufferBindsSkipped;
            if (c.gpuIndirect || c.gpuMulti)   // Claude voie B: the commands the GPU wrote (count, first index, vertex offset, first copy)
                d.CmdDrawIndexedIndirect(cmd, c.gpuArgs, c.gpuArgsOffset, c.gpuDrawCount, sizeof(VkDrawIndexedIndirectCommand));
            else
            d.CmdDrawIndexed(cmd, c.indexCount, c.instanceCount > 1u ? c.instanceCount : 1u, c.firstIndex, c.vertexOffset, 0);   // Claude INST1
        }
        else
        {
            // indexCount is the vertex count for a non-indexed draw, and vertexOffset the first vertex;
            // its sign was checked by Accept().
            d.CmdDraw(cmd, c.indexCount, c.instanceCount > 1u ? c.instanceCount : 1u, static_cast<uint32_t>(c.vertexOffset), 0);   // Claude INST1
        }

#ifdef WOWDECOMP_FSR
        if(entry->velocityMode==3)HD::Fsr::Skin::Global().Commit(skinData);
        if(entry->velocityMode==4)HD::Fsr::WindMotion::Global().Commit(windData);
#endif
        ++s.stats.drawn;
        if (entry->vconst == Cmd::kVertexRegsHigh) ++s.stats.class256;
        else                                        ++s.stats.class64;
        if (entry->companion) ++s.stats.companionDraws;
        if (entry->gbuf) ++s.stats.gbufferDraws;
        else if (entry->gbufNull) ++s.stats.gbufferNullDraws;
        // HD diagnostic (hdSunInfo): how the terrain's draws reached the G-buffer
        if (std::strncmp(c.ps, "Terrain", 7) == 0)
        {
            namespace B = ::HD::VulkanShadows::Bridge;
            if (entry->gbuf) ++B::diagRecGbuf;
            else if (entry->gbufNull) ++B::diagRecNull;
            else ++B::diagRecPlain;
        }
    }
}

namespace wxlvk::vk::pipelines
{
    namespace
    {
        uint32_t g_frontBoneBound[kFrameSlots] = {};   ///< engine thread: >= the slot's palette cursor once the queue is done

        // Claude OS1 (2026-11-18): a draw Record() records itself (the record thread idle: after a drain, or no record
        // thread) moves the real palette cursor. The front's bound must follow it at once. Without this, a pass end or
        // begin queued right after (CPU-B) kept the queue non-empty, TryRecord did not resync, the bound fell behind the
        // cursor, and the record thread wrote palettes past the 8 MiB ring (Darkshire square at Extreme: crash in
        // simd::CopyRows from WritePalette, and the GPU memory after the ring overwritten).
        struct BoundFollowsCursor
        {
            uint32_t slot;
            ~BoundFollowsCursor()
            {
                if (slot < kFrameSlots && g_frontBoneBound[slot] < s.boneCursor[slot]) g_frontBoneBound[slot] = s.boneCursor[slot];
            }
        };
    }

    void Record(VkCommandBuffer cmd, VkRenderPass pass, uint32_t frameSlot, const Cmd& c)
    {
        const BoundFollowsCursor follow{frameSlot};   // Claude OS1
        if (!s.ready || !cmd || pass == VK_NULL_HANDLE)
        {
            if (!s.loggedNotReady)
            {
                s.loggedNotReady = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: pipelines: Record() %s; every draw is skipped (logged once)",
                                    !s.ready ? "before Init()" : "with a null command buffer or pass");
            }
            ++s.stats.skippedUnsupported;
            return;
        }
        if (frameSlot >= kFrameSlots)
        {
            ++s.stats.skippedUnsupported;   // BeginFrame has logged it
            return;
        }

        Draft dr;
        dr.frameSlot = frameSlot;
        if (s.split)
        {
            // The same phases, each timed with the time-stamp counter (WXL_VK_RECORD_SPLIT): what a draw's recording
            // costs, phase by phase, for the stats block. A skipped draw files what it spent.
            uint64_t t = __rdtsc(), n;
            const auto mark = [&t, &n](uint32_t phase) { n = __rdtsc(); s.splitTicks[phase] += n - t; t = n; };
            ++s.splitDraws;
            const bool accepted = Accept(pass, c, dr);
            mark(0);
            if (!accepted) return;
            const bool inputs = Textures(c, dr) && PlanSlice(c, dr) && DescriptorSet(c, dr);
            mark(1);
            if (!inputs) return;
            WriteSlice(dr);
            WritePalette(c, dr);
#ifdef WOWDECOMP_FSR
            if(dr.entry->velocityMode==3)dr.skinData=HD::Fsr::Skin::Global().Record(c,dr.misc);
        if(dr.entry->velocityMode==4)dr.windData=HD::Fsr::WindMotion::Global().Record(c,dr.misc,dr.entry->bones,dr.windDraw);
#endif
            mark(2);
            VkBuffer vbs[Cmd::kMaxStreams + 1] = {};
            uint32_t vbCount = 0;
            const bool bound = Bind(cmd, c, dr, vbs, vbCount);
            mark(3);
            if (!bound) return;
            Capture(c, dr, vbs, vbCount);
            mark(4);
            Issue(cmd, c, dr.entry
#ifdef WOWDECOMP_FSR
                ,dr.rigidCookie,dr.skinData,dr.windData,HD::Fsr::Rigid::Active()
#endif
            );
            mark(5);
            return;
        }
        if (!Accept(pass, c, dr) || !Textures(c, dr) || !PlanSlice(c, dr) || !DescriptorSet(c, dr)) return;
        WriteSlice(dr);
        WritePalette(c, dr);
#ifdef WOWDECOMP_FSR
        if(dr.entry->velocityMode==3)dr.skinData=HD::Fsr::Skin::Global().Record(c,dr.misc);
        if(dr.entry->velocityMode==4)dr.windData=HD::Fsr::WindMotion::Global().Record(c,dr.misc,dr.entry->bones,dr.windDraw);
#endif

        VkBuffer vbs[Cmd::kMaxStreams + 1] = {};
        uint32_t vbCount = 0;
        if (!Bind(cmd, c, dr, vbs, vbCount)) return;
        Capture(c, dr, vbs, vbCount);
        Issue(cmd, c, dr.entry
#ifdef WOWDECOMP_FSR
                ,dr.rigidCookie,dr.skinData,dr.windData,HD::Fsr::Rigid::Active()
#endif
            );
    }

    void FrontResync()
    {
        for (uint32_t i = 0; i < kFrameSlots; ++i) g_frontBoneBound[i] = s.boneCursor[i];
    }

    // HD MT2 (Claude 2026-11-04): Record() cut in two at the end of Accept. The front runs on the engine thread,
    // exactly where Record() ran: everything that reads or writes state the engine thread shares (the wind
    // module's models, the pipeline table and its builds, the shader registry, the WMO group being drawn).
    // The back is the rest of Record(), unchanged, run on the record thread from a copy of the Cmd.
    // Not eligible (nothing done): the caller runs Record() itself, after a drain.
    FrontResult RecordFront(VkCommandBuffer cmd, VkRenderPass pass, uint32_t frameSlot, const Cmd& c, AsyncFront& a)
    {
        if (!s.ready || !cmd || pass == VK_NULL_HANDLE || frameSlot >= kFrameSlots || s.split) return FrontResult::NotEligible;
#ifdef WOWDECOMP_FSR
        if (HD::Fsr::Rigid::Active()) return FrontResult::NotEligible;   // FSR motion: its history is shared, kept on one thread
#endif
        // MakeKey asks PaletteFits for a skinned 256-row draw: answered from the front's own bound of the cursor
        // (every queued bones draw counted as a full write), never from the cursor the record thread moves. When
        // the bound cannot prove the room, the draw is not eligible: after the drain, Record() asks the real cursor.
        const bool paletteAsked = s.bonesReady && c.vconst == Cmd::kVertexRegsHigh && c.paletteRows;
        if (paletteAsked && g_frontBoneBound[frameSlot] + kBoneRange > s.boneBytes[frameSlot]) return FrontResult::NotEligible;   // Claude OS2: the slot's size
        Draft dr;
        dr.frameSlot = frameSlot;
        g_frontPaletteFits = paletteAsked;
        const bool accepted = Accept(pass, c, dr);
        g_frontPaletteFits = false;
        if (!accepted) return FrontResult::Skipped;
        // WritePalette advances the cursor by at most kBoneRange rounded up to boneAlign (less on a reuse).
        if (dr.entry->bones) g_frontBoneBound[frameSlot] += (kBoneRange + s.boneAlign - 1) / s.boneAlign * s.boneAlign;
        a.key       = dr.key;
        a.entry     = dr.entry;
        a.frameSlot = frameSlot;
        a.hasWind   = dr.windDraw != nullptr;
        if (a.hasWind) a.wind = *dr.windDraw;
        else a.wind = wxlvk::vk::wind::Draw{};
        a.wmoBound[0] = a.wmoBound[1] = a.wmoBound[2] = 0.0f;
        a.wmoBound[3] = -1.0f;   // Capture's own start value (cd.bound) when DrawBound has nothing
        if (c.vertexRows && std::strncmp(c.vs, "MapObj", 6) == 0)
            wxlvk::native::render::wmogroups::DrawBound(c.vertexRows, a.wmoBound);
        a.onBack = wxlvk::native::present::OnBackBuffer();   // Claude CPU-B: the pass's side now, for the capture
        return FrontResult::Queue;
    }

    void RecordBack(VkCommandBuffer cmd, const Cmd& c, const AsyncFront& a)
    {
        Draft dr;
        dr.frameSlot = a.frameSlot;
        dr.key       = a.key;
        dr.entry     = a.entry;
        dr.windDraw  = a.hasWind ? &a.wind : nullptr;
        if (!Textures(c, dr) || !PlanSlice(c, dr) || !DescriptorSet(c, dr)) return;
        WriteSlice(dr);
        WritePalette(c, dr);
#ifdef WOWDECOMP_FSR
        if(dr.entry->velocityMode==3)dr.skinData=HD::Fsr::Skin::Global().Record(c,dr.misc);
        if(dr.entry->velocityMode==4)dr.windData=HD::Fsr::WindMotion::Global().Record(c,dr.misc,dr.entry->bones,dr.windDraw);
#endif
        VkBuffer vbs[Cmd::kMaxStreams + 1] = {};
        uint32_t vbCount = 0;
        if (!Bind(cmd, c, dr, vbs, vbCount)) return;
        Capture(c, dr, vbs, vbCount, a.wmoBound, a.onBack ? 1 : 0);
        Issue(cmd, c, dr.entry
#ifdef WOWDECOMP_FSR
                ,dr.rigidCookie,dr.skinData,dr.windData,false
#endif
            );
    }
}
