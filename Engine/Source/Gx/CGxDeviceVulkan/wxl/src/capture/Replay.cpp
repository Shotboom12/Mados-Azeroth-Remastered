#include "native/record/RecordThread.hpp"
// The shadow replay: the frame's captured opaque world drawn again, depth only, from a light.
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

#include "capture/Replay.hpp"
#include "capture/Aside.hpp"   // Claude CPU-A

#include "capture/Capture.hpp"
#include "capture/ShadowPass.hpp"
#include "capture/ShadowPipelines.hpp"
#include "native/Present.hpp"
#include "native/Render.hpp"
#include "vulkan/Context.hpp"
#include "vulkan/Pipelines.hpp"
#include "vulkan/Memory.hpp"   // Claude CUBES1: the per-instance ring
#include "vulkan/Shaders.hpp"  // Claude ANIM1

#include "wxl/Script.hpp"

#include <climits>
#include <cstdio>
#include <cmath>
#include <cstddef>
#include <cstring>
#include <memory>
#include <vector>
#include <new>         // Claude ANIM1
#include <algorithm>   // Claude ANIM1
#include <intrin.h>
#include <chrono>
// Claude PERF2: where a several-view replay spends its CPU (read by LvStages.cpp)
double g_wxlViewsWalkMs=0,g_wxlViewsRecMs=0;unsigned long long g_wxlViewsKept=0,g_wxlViewsCaptured=0,g_wxlViewsLive=0;
unsigned long long g_wxlViewsCalls=0,g_wxlViewsMultiDraws=0; // Claude CUBES1: vkCmdDraw* recorded; kept draws drawn instanced
// Claude CPU-A: the replay thread's calls (read by LvStages.cpp): their draws (0 kept scenery, 1 movers), the pipelines the engine thread
// built for them, the instance lists that found the ring full (drawn per view instead), and the thread's figures (Aside.hpp).
unsigned long long g_wxlAsideDraws[2]={0,0},g_wxlAsideBuilds=0,g_wxlAsideRingFull=0,g_wxlAsideCalls=0,g_wxlAsideEarly=0;
double g_wxlAsideWorkMs=0,g_wxlAsideWaitMs=0;
// Claude ANIM1 (read by LvStages.cpp): draws animated, faces' draws reading them back, draws that found no room in the buffer.
unsigned long long g_wxlSkinDraws=0,g_wxlSkinLite=0,g_wxlSkinRefused=0;

namespace
{
    namespace context  = wxlvk::vk::context;
    namespace pipes    = wxlvk::capture::shadowpipes;
    using wxlvk::capture::Draw;

    struct Totals
    {
        uint64_t replays  = 0;
        uint64_t drawn    = 0;
        uint64_t skipped  = 0;
        uint64_t alpha    = 0;
        uint64_t refused  = 0;   ///< calls that could not record (no pass, no scene)
        uint64_t culled   = 0;   ///< draws left out by their bounds (WXL_VK_REPLAY_CULL_FRUSTUM, cullSphere)
        uint64_t multi    = 0;   ///< ReplayWorldViews calls (their views counted in `replays`)
        bool     saidFirst = false;
    };
    Totals g;

    /// What the replay has bound, so a run of draws of one material binds once.
    struct Bound
    {
        VkPipeline       pipeline = VK_NULL_HANDLE;
        VkPipelineLayout layout   = VK_NULL_HANDLE;
        VkDescriptorSet  set0     = VK_NULL_HANDLE;
        VkDescriptorSet  ring     = VK_NULL_HANDLE;
        uint32_t         ringOffset = 0xFFFFFFFFu;
        VkDescriptorSet  bones    = VK_NULL_HANDLE;
        uint32_t         bonesOffset = 0xFFFFFFFFu;
        VkBuffer         vbs[4]   = {};
        uint32_t         vbCount  = 0;
        VkBuffer         ib       = VK_NULL_HANDLE;
    };

    /// The inverse of a 4x4 (row-major) in double, by Gauss-Jordan with partial pivoting.
    bool InvertDouble(const float m[16], double out[16])
    {
        double a[4][8];
        for (int r = 0; r < 4; ++r)
            for (int c = 0; c < 4; ++c)
            {
                a[r][c]     = m[r * 4 + c];
                a[r][c + 4] = r == c ? 1.0 : 0.0;
            }
        for (int col = 0; col < 4; ++col)
        {
            int pivot = col;
            for (int r = col + 1; r < 4; ++r)
                if (std::fabs(a[r][col]) > std::fabs(a[pivot][col])) pivot = r;
            if (std::fabs(a[pivot][col]) < 1e-30) return false;
            for (int c = 0; c < 8; ++c)
            {
                const double t = a[col][c];
                a[col][c]   = a[pivot][c];
                a[pivot][c] = t;
            }
            const double inv = 1.0 / a[col][col];
            for (int c = 0; c < 8; ++c) a[col][c] *= inv;
            for (int r = 0; r < 4; ++r)
            {
                if (r == col) continue;
                const double f = a[r][col];
                for (int c = 0; c < 8; ++c) a[r][c] -= f * a[col][c];
            }
        }
        for (int r = 0; r < 4; ++r)
            for (int c = 0; c < 4; ++c) out[r * 4 + c] = a[r][c + 4];
        return true;
    }

    /**
     * inverse(projection) x inverse(view) x the light's, in double, rounded once: false without the
     * frame's scene.
     *
     * Not inverse(viewProj): the frame's view-projection is a float product whose translation row
     * carries the world's coordinates (thousands of yards), and its float inverse is off by several
     * shadow texels once multiplied out. The draws form clip space from a view-space position and the
     * projection; undoing exactly those two, in double, lands within a hundredth of a texel
     * (a cascade probe measures 4.5 texels the first way, 0.003 this way).
     */
    bool SceneInverse(double t[16], double iv[16])
    {
        VkFormat   format = VK_FORMAT_UNDEFINED;
        VkExtent2D extent = {};
        if (!wxlvk::native::present::BackBufferInfo(format, extent)) return false;
        WXL_VkSceneConstants scene = {};
        VkViewport           viewport = {};
        float                jitter[2];
        if (!wxlvk::native::render::SceneNow(extent, scene, viewport, jitter)) return false;
        double ip[16];
        if (!InvertDouble(scene.projection, ip) || !InvertDouble(scene.view, iv)) return false;
        for (int r = 0; r < 4; ++r)
            for (int c = 0; c < 4; ++c)
            {
                double s = 0.0;
                for (int k = 0; k < 4; ++k) s += ip[r * 4 + k] * iv[k * 4 + c];
                t[r * 4 + c] = s;
            }
        return true;
    }

    /// inverse(projection) x inverse(view) (SceneInverse's `t`) x the light's, rounded once.
    void Compose(const double t[16], const float lightViewProj[16], float out[16])
    {
        for (int r = 0; r < 4; ++r)
            for (int c = 0; c < 4; ++c)
            {
                double s = 0.0;
                for (int k = 0; k < 4; ++k) s += t[r * 4 + k] * static_cast<double>(lightViewProj[k * 4 + c]);
                out[r * 4 + c] = static_cast<float>(s);
            }
    }

    bool ClipToLight(const float lightViewProj[16], float out[16], double iv[16])
    {
        double t[16];
        if (!SceneInverse(t, iv)) return false;
        Compose(t, lightViewProj, out);
        return true;
    }

    void Begin(const WXL_VkReplayDesc& desc, VkRenderPass pass, const wxlvk::vk::loader::Device& d)
    {
        VkClearValue clear = {};
        clear.depthStencil.depth = 1.0f;
        VkRenderPassBeginInfo begin = {};
        begin.sType           = VK_STRUCTURE_TYPE_RENDER_PASS_BEGIN_INFO;
        begin.renderPass      = pass;
        begin.framebuffer     = desc.framebuffer;
        begin.renderArea      = desc.area;
        begin.clearValueCount = 1;
        begin.pClearValues    = &clear;
        d.CmdBeginRenderPass(desc.cmd, &begin, VK_SUBPASS_CONTENTS_INLINE);
        VkViewport vp = {};
        vp.x        = static_cast<float>(desc.area.offset.x);
        vp.y        = static_cast<float>(desc.area.offset.y);
        vp.width    = static_cast<float>(desc.area.extent.width);
        vp.height   = static_cast<float>(desc.area.extent.height);
        vp.maxDepth = 1.0f;
        d.CmdSetViewport(desc.cmd, 0, 1, &vp);
        d.CmdSetScissor(desc.cmd, 0, 1, &desc.area);
    }

    /// The draw's sets, its push matrix when the layout changed, its buffers. `alpha`: its textures bound (the
    /// alpha-tested casters a replay keeps as such); `windPush`: the wind values pushed (the draw's, or the still ones).
    void BindDraw(VkCommandBuffer cmd, const Draw& dr, bool alpha, const int32_t* windPush, const pipes::Pipe& p,
                  const float m[16], const WXL_VkReplayDesc& desc, Bound& b, const wxlvk::vk::loader::Device& d)
    {
        if (b.pipeline != p.pipeline)
        {
            d.CmdBindPipeline(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, p.pipeline);
            // Binding a pipeline with a dynamic bias keeps the value; set once per pipeline bind anyway.
            d.CmdSetDepthBias(cmd, desc.depthBias, 0.0f, desc.slopeBias);
            b.pipeline = p.pipeline;
        }
        if (b.layout != p.layout)
        {
            b = Bound{ b.pipeline, p.layout };
            // A tree-wind pipeline's matrix follows the wind's values (shadowgen.py).
            d.CmdPushConstants(cmd, p.layout, VK_SHADER_STAGE_VERTEX_BIT, p.wind ? sizeof dr.windPush : 0u,
                               16 * sizeof(float), m);
        }
        if (p.wind)
        {
            d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, p.layout, 3, 1, &dr.windSet, 0, nullptr);
            d.CmdPushConstants(cmd, p.layout, VK_SHADER_STAGE_VERTEX_BIT, 0, sizeof dr.windPush, windPush);
        }
        if (alpha && b.set0 != dr.set0)
        {
            const VkDescriptorSet sets[2] = { dr.set0, dr.ring };
            d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, p.layout, 0, 2, sets, 1, &dr.ringOffset);
            b.set0       = dr.set0;
            b.ring       = dr.ring;
            b.ringOffset = dr.ringOffset;
        }
        else if (b.ring != dr.ring || b.ringOffset != dr.ringOffset)
        {
            d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, p.layout, 1, 1, &dr.ring, 1, &dr.ringOffset);
            b.ring       = dr.ring;
            b.ringOffset = dr.ringOffset;
        }
        if (p.bones && (b.bones != dr.bones || b.bonesOffset != dr.bonesOffset))
        {
            d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, p.layout, 2, 1, &dr.bones, 1, &dr.bonesOffset);
            b.bones       = dr.bones;
            b.bonesOffset = dr.bonesOffset;
        }
        bool same = b.vbCount == dr.vbCount;
        for (uint32_t i = 0; same && i < dr.vbCount; ++i) same = b.vbs[i] == dr.vbs[i];
        if (!same)
        {
            const VkDeviceSize zeros[4] = {};
            d.CmdBindVertexBuffers(cmd, 0, dr.vbCount, dr.vbs, zeros);
            b.vbCount = dr.vbCount;
            for (uint32_t i = 0; i < dr.vbCount; ++i) b.vbs[i] = dr.vbs[i];
        }
        if (dr.indexed && b.ib != dr.ib)
        {
            d.CmdBindIndexBuffer(cmd, dr.ib, 0, VK_INDEX_TYPE_UINT16);
            b.ib = dr.ib;
        }
    }

    /**
     * The culling of a replay: lightViewProj's side and far planes in world space (row vectors: clip = p M, the planes
     * w + x, w - x, w + y, w - y, w - z of its columns; never the near plane z >= 0, so a caster between the light and
     * it is kept as the depth clip treats it), and the caller's sphere. A draw's bound (capture::Draw::bound, the
     * frame's view space) is taken to world through the view's inverse (double: the world's coordinates are large).
     */
    struct Cull
    {
        bool   frustum = false, sphere = false;
        double planes[5][4] = {};
        double centre[3] = {}, radius = 0.0;
        double iv[16] = {};

        void Make(const WXL_VkReplayDesc& desc, const double inverseView[16])
        {
            const bool hasSphere = desc.structSize >= offsetof(WXL_VkReplayDesc, cullSphere) + sizeof desc.cullSphere;
            MakeView(desc.flags, desc.lightViewProj, hasSphere ? desc.cullSphere : nullptr, inverseView);
            if (desc.structSize >= offsetof(WXL_VkReplayDesc, excludeBoxCount) + sizeof desc.excludeBoxCount && desc.excludeBoxes
                && desc.excludeBoxCount)
            {
                boxes    = desc.excludeBoxes;
                boxCount = desc.excludeBoxCount;
                keep     = (desc.flags & WXL_VK_REPLAY_BOXES_KEEP) != 0;
            }
        }

        /// The planes of `lightViewProj` (with WXL_VK_REPLAY_CULL_FRUSTUM) and the sphere (`cullSphere`, may be null).
        void MakeView(uint32_t flags, const float lightViewProj[16], const float* cullSphere, const double inverseView[16])
        {
            std::memcpy(iv, inverseView, sizeof iv);
            frustum = sphere = false;
            if (flags & WXL_VK_REPLAY_CULL_FRUSTUM)
            {
                const float* M = lightViewProj;
                const int    pick[5][2] = { { 0, 1 }, { 0, -1 }, { 1, 1 }, { 1, -1 }, { 2, -1 } };
                frustum = true;
                for (int p = 0; p < 5; ++p)
                {
                    double v[4];
                    for (int i = 0; i < 4; ++i) v[i] = double(M[i * 4 + 3]) + pick[p][1] * double(M[i * 4 + pick[p][0]]);
                    const double len = std::sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
                    if (!(len > 1e-12))
                    {
                        frustum = false;   // a degenerate matrix: nothing culled by it
                        break;
                    }
                    for (int i = 0; i < 4; ++i) planes[p][i] = v[i] / len;
                }
            }
            if (cullSphere && cullSphere[3] > 0.0f && std::isfinite(cullSphere[0]) && std::isfinite(cullSphere[1])
                && std::isfinite(cullSphere[2]))
            {
                sphere = true;
                for (int k = 0; k < 3; ++k) centre[k] = cullSphere[k];
                radius = cullSphere[3];
            }
        }

        bool Active() const { return frustum || sphere; }

        /// The caller's boxes (WXL_VkReplayDesc::excludeBoxes): whether a draw that is no unit's and no map object's is
        /// left out by them -- its bound's centre inside one (outside them all with WXL_VK_REPLAY_BOXES_KEEP). A draw
        /// without a bound is never left out by an exclusion, and never kept by a KEEP.
        bool Excluded(const float b[4]) const
        {
            if (!boxCount) return false;
            if (!(b[3] > 0.0f)) return keep;
            double w[3];
            for (int j = 0; j < 3; ++j) w[j] = double(b[0]) * iv[0 * 4 + j] + double(b[1]) * iv[1 * 4 + j] + double(b[2]) * iv[2 * 4 + j] + iv[3 * 4 + j];
            bool inside = false;
            for (uint32_t i = 0; i < boxCount && !inside; ++i)
            {
                const float* x = boxes + i * 6;
                inside = w[0] >= x[0] && w[1] >= x[1] && w[2] >= x[2] && w[0] <= x[3] && w[1] <= x[4] && w[2] <= x[5];
            }
            return keep ? !inside : inside;
        }

        const float* boxes = nullptr;
        uint32_t     boxCount = 0;
        bool         keep = false;

        /// Whether a draw's bound lies wholly outside: its view-space sphere taken to world, against the planes and
        /// the sphere. A draw without a bound is never out.
        bool Out(const float b[4]) const
        {
            if (!(b[3] > 0.0f)) return false;
            double w[3];
            ToWorld(b, w);
            return OutWorld(w, b[3]);
        }

        /// Claude PREUVE1: the light's sphere tested with `ball` (the bound before PERF2: what it kept, it keeps), the
        /// view's planes (its four sides and its far plane, the rasteriser's own clip volume) with `planes` (the exact
        /// bound). A draw only the exact planes leave out has no fragment inside the view: the target is the same, bit
        /// for bit, as with the old bound. A bound with radius <= 0 is never out by its test.
        bool OutSplit(const float ball[4], const float planes[4]) const
        {
            if (sphere && ball[3] > 0.0f)
            {
                double w[3];
                ToWorld(ball, w);
                const double dx = w[0] - centre[0], dy = w[1] - centre[1], dz = w[2] - centre[2], reach = radius + ball[3];
                if (dx * dx + dy * dy + dz * dz > reach * reach) return true;
            }
            if (frustum && planes[3] > 0.0f)
            {
                double w[3];
                ToWorld(planes, w);
                for (int p = 0; p < 5; ++p)
                    if (this->planes[p][0] * w[0] + this->planes[p][1] * w[1] + this->planes[p][2] * w[2] + this->planes[p][3] < -double(planes[3])) return true;
            }
            return false;
        }

        /// Claude CPU-C: OutSplit() with both bounds' centres already taken to world (ToWorld: `wb` the ball's, `wp` the
        /// planes' bound's) -- the same tests on the same values, the centres computed once for every view of a call.
        bool OutSplitWorld(const double wb[3], float rb, const double wp[3], float rp) const
        {
            if (sphere && rb > 0.0f)
            {
                const double dx = wb[0] - centre[0], dy = wb[1] - centre[1], dz = wb[2] - centre[2], reach = radius + rb;
                if (dx * dx + dy * dy + dz * dz > reach * reach) return true;
            }
            if (frustum && rp > 0.0f)
                for (int p = 0; p < 5; ++p)
                    if (this->planes[p][0] * wp[0] + this->planes[p][1] * wp[1] + this->planes[p][2] * wp[2] + this->planes[p][3] < -double(rp)) return true;
            return false;
        }

        /// A bound's view-space centre taken to world (the frame's inverse view).
        void ToWorld(const float b[4], double w[3]) const
        {
            for (int j = 0; j < 3; ++j) w[j] = double(b[0]) * iv[0 * 4 + j] + double(b[1]) * iv[1 * 4 + j] + double(b[2]) * iv[2 * 4 + j] + iv[3 * 4 + j];
        }

        /// Out() for a bound already in world space (`w` its centre, `r` its radius > 0).
        bool OutWorld(const double w[3], double r) const
        {
            if (sphere)
            {
                const double dx = w[0] - centre[0], dy = w[1] - centre[1], dz = w[2] - centre[2], reach = radius + r;
                if (dx * dx + dy * dy + dz * dz > reach * reach) return true;
            }
            if (frustum)
                for (int p = 0; p < 5; ++p)
                    if (planes[p][0] * w[0] + planes[p][1] * w[1] + planes[p][2] * w[2] + planes[p][3] < -r) return true;
            return false;
        }
    };

    /// What a replay's flags keep of the capture (one rule for ReplayWorld and ReplayWorldViews).
    struct Filter
    {
        bool     alphaWanted, asOpaque, dynamicOnly, noSkinned, noWind, windStill, terrainOnly, withDoodads, withMapObjs;
        uint32_t minCount;
        uint32_t cull;   ///< Claude LV25: 0 both faces, 1 the draw's own culling, 2 the same, front face reversed

        Filter(uint32_t flags, uint32_t minIndexCount)
        {
            cull        = (flags & WXL_VK_REPLAY_OWN_CULL) ? ((flags & WXL_VK_REPLAY_OWN_CULL_MIRRORED) ? 2u : 1u) : 0u;
            alphaWanted = (flags & WXL_VK_REPLAY_ALPHA_TESTED) != 0;
            asOpaque    = !alphaWanted && (flags & WXL_VK_REPLAY_ALPHA_AS_OPAQUE) != 0;
            dynamicOnly = (flags & WXL_VK_REPLAY_DYNAMIC_ONLY) != 0;
            noSkinned   = (flags & WXL_VK_REPLAY_NO_SKINNED) != 0;
            noWind      = (flags & WXL_VK_REPLAY_NO_WIND) != 0;
            windStill   = (flags & WXL_VK_REPLAY_WIND_STILL) != 0;
            terrainOnly = (flags & WXL_VK_REPLAY_TERRAIN_ONLY) != 0;
            withDoodads = dynamicOnly && (flags & WXL_VK_REPLAY_WITH_DOODADS) != 0;
            withMapObjs = dynamicOnly && (flags & WXL_VK_REPLAY_WITH_MAPOBJECTS) != 0;
            minCount    = minIndexCount;
        }

        /// Whether the flags keep a draw (false: skipped).
        bool Keeps(const Draw& dr) const
        {
            // A mover: a unit's draw (a character's, a creature's or an item's texture: pipelines/Record.cpp)
            // -- what a cached map must never hold. The bone palette alone makes none: the world's animated
            // doodads (banners, lanterns, bushes) are skinned too, and a cached map holds them still, in the
            // pose they were captured in; kept out of the caches they were drawn from each frame's capture
            // alone, and their shadows popped with the camera.
            const bool moving = dr.live != 0u;
            // WITH_DOODADS: a static M2 doodad's opaque draw joins the movers; its alpha-tested draws (a crown's
            // leaves, a card) stay out whatever the flags say.
            const bool doodad = withDoodads && dr.doodad != 0u && !dr.alphaTest;
            // WITH_MAPOBJECTS: a map object's draw joins them too, alpha-tested ones under the flags' rule (a railing).
            const bool mapobj = withMapObjs && dr.mapobj != 0u;
            return !((dr.alphaTest && !alphaWanted && !asOpaque) || dr.count < minCount
                     || (dynamicOnly && !moving && !dr.wind && !doodad && !mapobj) || (noSkinned && moving) || (noWind && dr.wind)
                     || (terrainOnly && !dr.terrain));
        }
    };

    /// Records one kept draw: its state bound (the wind at rest when asked), the draw. The capture's record is read as
    /// it is (no copy of it a draw and a view).
    void Record(VkCommandBuffer cmd, const Draw& dr, bool alpha, const pipes::Pipe& p, const float m[16], bool windStill,
                const WXL_VkReplayDesc& desc, Bound& b, WXL_VkReplayStats& st, const wxlvk::vk::loader::Device& d)
    {
        static const int32_t kStill[4] = {};
        BindDraw(cmd, dr, alpha, dr.wind && windStill ? kStill : dr.windPush, p, m, desc, b, d);
        if (dr.indexed) d.CmdDrawIndexed(cmd, dr.count, 1, dr.firstIndex, dr.vertexOffset, 0);
        else d.CmdDraw(cmd, dr.count, 1, static_cast<uint32_t>(dr.vertexOffset), 0);
        ++st.replayed;
        if (alpha) ++st.alphaTested;
        if (dr.mapobj) ++st.mapObjects;
    }

    void DrawAll(const WXL_VkReplayDesc& desc, const float m[16], const Cull& cull, WXL_VkReplayStats& st,
                 const wxlvk::vk::loader::Device& d)
    {
        uint32_t    count = 0;
        const Draw* draws = wxlvk::capture::Draws(count);
        st.captured = count;
        const uint32_t minCount =
            desc.structSize >= offsetof(WXL_VkReplayDesc, minIndexCount) + sizeof desc.minIndexCount ? desc.minIndexCount : 0u;
        const Filter f(desc.flags, minCount);
        Bound b;
        for (uint32_t i = 0; i < count; ++i)
        {
            const Draw& dr = draws[i];
            const bool  alpha = dr.alphaTest && f.alphaWanted;
            const bool  moving = dr.live != 0u;
            if (!f.Keeps(dr))
            {
                ++st.skipped;
                continue;
            }
            if (cull.Active() && !((desc.flags & WXL_VK_REPLAY_NO_MODEL_CULL) && (dr.live || dr.doodad)) && cull.OutSplit(dr.boundOld, (desc.flags & WXL_VK_REPLAY_OLD_BOUNDS) ? dr.boundOld : dr.bound))   // Claude PREUVE1
            {
                ++st.culled;
                continue;
            }
            // The caller's boxes: a light's own model, what a unit carries that was not drawn as the unit's (a cached map's).
            if (!moving && !dr.mapobj && !dr.terrain && cull.Excluded(dr.boundOld))   // Claude PREUVE1: the centre before PERF2
            {
                ++st.excluded;
                continue;
            }
            pipes::Pipe p;
            if ((dr.wind && !dr.windSet) || !pipes::Get(dr.entry, alpha, p, f.cull))
            {
                ++st.skipped;
                continue;
            }
            Record(desc.cmd, dr, alpha, p, m, f.windStill, desc, b, st, d);
        }
    }

    // Claude ANIM1 (WXL_VK_REPLAY_PRESKIN, hdLvCubeSkin): the units' animation kept. A unit's opaque draw kept by a multi-faces call
    // is animated ONCE a frame, whatever the number of calls and faces it is drawn into: its module's .shadowskin.spv variant
    // (shadowskingen.py: the shadow variant word for word, plus one store) is drawn without pixels (rasterizer discard) and keeps its
    // clip positions P in this frame slot's buffer; the faces then draw it with one small shader (shadow_skin_lite_vert.spv) that
    // reads P back and does exactly the multi-faces variant's end (the per-instance matrix times P, y flipped, the viewport index).
    // A model instance's draws share one region (its vertex buffer, its base vertex and its palette, or its ring slice without
    // one), the buffer's vertex count long; a draw that finds no room, no pipeline or no feature keeps the multi-faces path.
    namespace skin
    {
        namespace memory  = wxlvk::vk::memory;
        namespace present = wxlvk::native::present;
        namespace vkp     = wxlvk::vk::pipelines;

        struct Pipes
        {
            VkPipeline       pre     = VK_NULL_HANDLE;   ///< the .shadowskin.spv variant, no pixel
            VkPipelineLayout layout  = VK_NULL_HANDLE;   ///< the entry's sets 0..2, set 3 the positions, the 64-byte push range
            bool             bones   = false;            ///< binds set 2 (the palette)
            VkPipeline       lite    = VK_NULL_HANDLE;   ///< the faces' small shader with the entry's culling and topology
            uint32_t         liteKey = 0;
        };
        struct EntrySlot
        {
            uint32_t key    = 0xFFFFFFFFu;
            Pipes    p;
            bool     failed = false;
        };
        struct Frame
        {
            memory::Buffer  buf;
            VkDescriptorSet set  = VK_NULL_HANDLE;
            uint32_t        used = 0;   ///< vec4s handed out this frame
        };
        struct RegionKey
        {
            VkBuffer        vbs[4];
            uint32_t        vbCount;
            int32_t         vertexOffset;
            VkDescriptorSet bones;
            uint32_t        bonesOffset;
            uint32_t        ringOffset;   ///< without a palette only (the rigid rows are in the ring slice)
            VkDescriptorSet ring;
            bool operator==(const RegionKey& o) const { return std::memcmp(this, &o, sizeof o) == 0; }
        };
        struct Region
        {
            RegionKey key;
            uint32_t  start = 0, size = 0;
            uint64_t  frame = UINT64_MAX;
        };
        constexpr uint32_t kSlots = 4096;
        constexpr uint32_t kMaxItems = 1u << 20;
        struct State
        {
            VkDevice              device     = VK_NULL_HANDLE;
            bool                  broken     = false;
            VkDescriptorSetLayout setLayout  = VK_NULL_HANDLE;
            VkDescriptorPool      pool       = VK_NULL_HANDLE;
            VkPipelineLayout      liteLayout = VK_NULL_HANDLE;
            struct LayoutOf { VkDescriptorSetLayout set0; VkPipelineLayout layout; };
            std::vector<LayoutOf> layouts;
            EntrySlot             slots[kSlots];
            bool                  full = false;
            VkPipeline            lite[64]       = {};
            bool                  liteFailed[64] = {};
            Frame                 frames[vkp::kFrameSlots];
            uint32_t              peak = 0;   ///< the most vec4s a frame asked (the recording thread's; read by Reserve after the join)
            // The recording thread's, per frame.
            uint64_t              frame = UINT64_MAX;
            std::vector<uint64_t> stamp;      ///< per capture record: the frame its positions were kept in
            std::vector<uint32_t> start;      ///< ... and their first vec4
            std::vector<Region>   regions;    ///< open addressing, a power of two
            uint32_t              regionCount = 0;
        };
        State S;

        uint64_t Hash(const RegionKey& k)
        {
            uint64_t hh = 1469598103934665603ull;
            const uint8_t* p = reinterpret_cast<const uint8_t*>(&k);
            for (size_t b = 0; b < sizeof k; ++b) hh = (hh ^ p[b]) * 1099511628211ull;
            return hh;
        }

        bool Ready(const context::Handles& h)
        {
            if (S.device != h.device)
            {
                // A new device: the old one's objects are gone with it, never destroyed here.
                S.~State();
                new (&S) State();
                S.device = h.device;
            }
            if (S.broken) return false;
            if (S.liteLayout != VK_NULL_HANDLE) return true;
            const uint32_t need = wxlvk::vk::kCapVertexStores;
            if ((context::Caps().enabled & need) != need || pipes::MultiViewports() == 0
                || wxlvk::vk::shaders::GetPath("shadow_skin_lite_vert.spv") == VK_NULL_HANDLE)
            {
                S.broken = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN, "capture: ANIM1 unavailable (vertex stores %s, multi-viewport %u)",
                                    (context::Caps().enabled & need) ? "on" : "off", pipes::MultiViewports());
                return false;
            }
            const wxlvk::vk::loader::Device& d = *h.dapi;
            VkDescriptorSetLayoutBinding b = {};
            b.binding         = 0;
            b.descriptorType  = VK_DESCRIPTOR_TYPE_STORAGE_BUFFER;
            b.descriptorCount = 1;
            b.stageFlags      = VK_SHADER_STAGE_VERTEX_BIT;
            VkDescriptorSetLayoutCreateInfo li = {};
            li.sType        = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO;
            li.bindingCount = 1;
            li.pBindings    = &b;
            VkDescriptorPoolSize ps = { VK_DESCRIPTOR_TYPE_STORAGE_BUFFER, vkp::kFrameSlots };
            VkDescriptorPoolCreateInfo pi = {};
            pi.sType         = VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO;
            pi.maxSets       = vkp::kFrameSlots;
            pi.poolSizeCount = 1;
            pi.pPoolSizes    = &ps;
            if (d.CreateDescriptorSetLayout(h.device, &li, nullptr, &S.setLayout) != VK_SUCCESS
                || d.CreateDescriptorPool(h.device, &pi, nullptr, &S.pool) != VK_SUCCESS)
            {
                S.broken = true;
                return false;
            }
            VkDescriptorSetLayout layouts[vkp::kFrameSlots];
            for (uint32_t i = 0; i < vkp::kFrameSlots; ++i) layouts[i] = S.setLayout;
            VkDescriptorSet sets[vkp::kFrameSlots] = {};
            VkDescriptorSetAllocateInfo ai = {};
            ai.sType              = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO;
            ai.descriptorPool     = S.pool;
            ai.descriptorSetCount = vkp::kFrameSlots;
            ai.pSetLayouts        = layouts;
            VkPipelineLayoutCreateInfo pl = {};
            pl.sType          = VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO;
            pl.setLayoutCount = 1;
            pl.pSetLayouts    = &S.setLayout;
            if (d.AllocateDescriptorSets(h.device, &ai, sets) != VK_SUCCESS
                || d.CreatePipelineLayout(h.device, &pl, nullptr, &S.liteLayout) != VK_SUCCESS)
            {
                S.liteLayout = VK_NULL_HANDLE;
                S.broken     = true;
                return false;
            }
            for (uint32_t i = 0; i < vkp::kFrameSlots; ++i) S.frames[i].set = sets[i];
            wxl::ScriptMgr::Log(WXL_LOG_INFO, "capture: ANIM1, the units' animation kept for the lamp cubes");
            return true;
        }

        VkPipelineLayout LayoutFor(const VkDescriptorSetLayout sets[3], const context::Handles& h)
        {
            for (const State::LayoutOf& l : S.layouts)
                if (l.set0 == sets[0]) return l.layout;
            VkPushConstantRange push = { VK_SHADER_STAGE_VERTEX_BIT, 0, 64 };
            const VkDescriptorSetLayout all[4] = { sets[0], sets[1], sets[2], S.setLayout };
            VkPipelineLayoutCreateInfo info = {};
            info.sType                  = VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO;
            info.setLayoutCount         = 4;
            info.pSetLayouts            = all;
            info.pushConstantRangeCount = 1;
            info.pPushConstantRanges    = &push;
            VkPipelineLayout out = VK_NULL_HANDLE;
            if (h.dapi->CreatePipelineLayout(h.device, &info, nullptr, &out) != VK_SUCCESS) return VK_NULL_HANDLE;
            S.layouts.push_back({ sets[0], out });
            return out;
        }

        VkPipeline BuildPre(const vkp::ShadowSource& src, VkPipelineLayout layout, const context::Handles& h)
        {
            const VkShaderModule vert = wxlvk::vk::shaders::GetPath(src.vertPath);
            if (vert == VK_NULL_HANDLE) return VK_NULL_HANDLE;
            VkPipelineShaderStageCreateInfo stage = {};
            stage.sType  = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
            stage.stage  = VK_SHADER_STAGE_VERTEX_BIT;
            stage.module = vert;
            stage.pName  = "main";
            VkPipelineVertexInputStateCreateInfo input = {};
            input.sType                           = VK_STRUCTURE_TYPE_PIPELINE_VERTEX_INPUT_STATE_CREATE_INFO;
            input.vertexBindingDescriptionCount   = src.bindingCount;
            input.pVertexBindingDescriptions      = src.bindings;
            input.vertexAttributeDescriptionCount = src.attrCount;
            input.pVertexAttributeDescriptions    = src.attrs;
            VkPipelineInputAssemblyStateCreateInfo assembly = {};
            assembly.sType    = VK_STRUCTURE_TYPE_PIPELINE_INPUT_ASSEMBLY_STATE_CREATE_INFO;
            assembly.topology = src.topology;
            VkPipelineRasterizationStateCreateInfo raster = {};
            raster.sType                   = VK_STRUCTURE_TYPE_PIPELINE_RASTERIZATION_STATE_CREATE_INFO;
            raster.rasterizerDiscardEnable = VK_TRUE;   // the vertex stage alone: the positions are kept, nothing is drawn
            raster.polygonMode             = VK_POLYGON_MODE_FILL;
            raster.lineWidth               = 1.0f;
            VkGraphicsPipelineCreateInfo info = {};
            info.sType               = VK_STRUCTURE_TYPE_GRAPHICS_PIPELINE_CREATE_INFO;
            info.stageCount          = 1;
            info.pStages             = &stage;
            info.pVertexInputState   = &input;
            info.pInputAssemblyState = &assembly;
            info.pRasterizationState = &raster;
            info.layout              = layout;
            info.renderPass          = wxlvk::capture::shadowpass::Get();
            info.basePipelineIndex   = -1;
            VkPipeline pipe = VK_NULL_HANDLE;
            if (h.dapi->CreateGraphicsPipelines(h.device, vkp::PipelineCache(), 1, &info, nullptr, &pipe) != VK_SUCCESS)
                return VK_NULL_HANDLE;
            return pipe;
        }

        /// The faces' pipeline: the multi-faces pipeline's state (ShadowPipelines.cpp Build) with the small shader alone as input.
        VkPipeline BuildLite(VkPrimitiveTopology topology, VkCullModeFlags cullMode, VkFrontFace front, const context::Handles& h)
        {
            const VkShaderModule vert = wxlvk::vk::shaders::GetPath("shadow_skin_lite_vert.spv");
            const uint32_t viewports = pipes::MultiViewports();
            if (vert == VK_NULL_HANDLE || viewports < 2) return VK_NULL_HANDLE;
            VkPipelineShaderStageCreateInfo stage = {};
            stage.sType  = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
            stage.stage  = VK_SHADER_STAGE_VERTEX_BIT;
            stage.module = vert;
            stage.pName  = "main";
            const VkVertexInputBindingDescription bind = { pipes::kMultiBinding, pipes::kMultiStride, VK_VERTEX_INPUT_RATE_INSTANCE };
            VkVertexInputAttributeDescription attrs[5];
            for (uint32_t c = 0; c < 4; ++c) attrs[c] = { 28 + c, pipes::kMultiBinding, VK_FORMAT_R32G32B32A32_SFLOAT, 16 * c };
            attrs[4] = { 27, pipes::kMultiBinding, VK_FORMAT_R32_SINT, 64 };
            VkPipelineVertexInputStateCreateInfo input = {};
            input.sType                           = VK_STRUCTURE_TYPE_PIPELINE_VERTEX_INPUT_STATE_CREATE_INFO;
            input.vertexBindingDescriptionCount   = 1;
            input.pVertexBindingDescriptions      = &bind;
            input.vertexAttributeDescriptionCount = 5;
            input.pVertexAttributeDescriptions    = attrs;
            VkPipelineInputAssemblyStateCreateInfo assembly = {};
            assembly.sType    = VK_STRUCTURE_TYPE_PIPELINE_INPUT_ASSEMBLY_STATE_CREATE_INFO;
            assembly.topology = topology;
            VkPipelineViewportStateCreateInfo viewport = {};
            viewport.sType         = VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_STATE_CREATE_INFO;
            viewport.viewportCount = viewports;
            viewport.scissorCount  = viewports;
            VkPipelineRasterizationStateCreateInfo raster = {};
            raster.sType           = VK_STRUCTURE_TYPE_PIPELINE_RASTERIZATION_STATE_CREATE_INFO;
            raster.polygonMode     = VK_POLYGON_MODE_FILL;
            raster.cullMode        = cullMode;
            raster.frontFace       = front;
            raster.depthBiasEnable = VK_TRUE;
            raster.lineWidth       = 1.0f;
            VkPipelineMultisampleStateCreateInfo multisample = {};
            multisample.sType                = VK_STRUCTURE_TYPE_PIPELINE_MULTISAMPLE_STATE_CREATE_INFO;
            multisample.rasterizationSamples = VK_SAMPLE_COUNT_1_BIT;
            VkPipelineDepthStencilStateCreateInfo depth = {};
            depth.sType            = VK_STRUCTURE_TYPE_PIPELINE_DEPTH_STENCIL_STATE_CREATE_INFO;
            depth.depthTestEnable  = VK_TRUE;
            depth.depthWriteEnable = VK_TRUE;
            depth.depthCompareOp   = VK_COMPARE_OP_LESS_OR_EQUAL;
            depth.maxDepthBounds   = 1.0f;
            VkPipelineColorBlendStateCreateInfo blend = {};
            blend.sType = VK_STRUCTURE_TYPE_PIPELINE_COLOR_BLEND_STATE_CREATE_INFO;
            const VkDynamicState dynamics[3] = { VK_DYNAMIC_STATE_VIEWPORT, VK_DYNAMIC_STATE_SCISSOR, VK_DYNAMIC_STATE_DEPTH_BIAS };
            VkPipelineDynamicStateCreateInfo dynamic = {};
            dynamic.sType             = VK_STRUCTURE_TYPE_PIPELINE_DYNAMIC_STATE_CREATE_INFO;
            dynamic.dynamicStateCount = 3;
            dynamic.pDynamicStates    = dynamics;
            VkGraphicsPipelineCreateInfo info = {};
            info.sType               = VK_STRUCTURE_TYPE_GRAPHICS_PIPELINE_CREATE_INFO;
            info.stageCount          = 1;
            info.pStages             = &stage;
            info.pVertexInputState   = &input;
            info.pInputAssemblyState = &assembly;
            info.pViewportState      = &viewport;
            info.pRasterizationState = &raster;
            info.pMultisampleState   = &multisample;
            info.pDepthStencilState  = &depth;
            info.pColorBlendState    = &blend;
            info.pDynamicState       = &dynamic;
            info.layout              = S.liteLayout;
            info.renderPass          = wxlvk::capture::shadowpass::Get();
            info.basePipelineIndex   = -1;
            VkPipeline pipe = VK_NULL_HANDLE;
            if (h.dapi->CreateGraphicsPipelines(h.device, vkp::PipelineCache(), 1, &info, nullptr, &pipe) != VK_SUCCESS)
                return VK_NULL_HANDLE;
            return pipe;
        }

        EntrySlot* Find(uint32_t key, bool insert)
        {
            uint32_t i = (key * 2654435761u) & (kSlots - 1);
            for (uint32_t probe = 0; probe < kSlots; ++probe, i = (i + 1) & (kSlots - 1))
            {
                if (S.slots[i].key == key) return &S.slots[i];
                if (S.slots[i].key == 0xFFFFFFFFu) return insert ? &S.slots[i] : nullptr;
            }
            return nullptr;
        }

        void Fill(EntrySlot& slot, uint32_t entry, uint32_t cull, const context::Handles& h)
        {
            vkp::ShadowSource     src;
            VkDescriptorSetLayout sets[3] = {};
            if (!vkp::ShadowSkinSourceFor(entry, src, sets) || wxlvk::vk::shaders::GetPath(src.vertPath) == VK_NULL_HANDLE) return;
            // The entry's culling exactly as its multi-faces pipeline has it (ShadowPipelines.cpp Fill).
            VkCullModeFlags mode  = VK_CULL_MODE_NONE;
            VkFrontFace     front = VK_FRONT_FACE_COUNTER_CLOCKWISE;
            if (cull != 0u && vkp::ShadowCullFor(entry, mode, front) && cull == 2u)
                front = front == VK_FRONT_FACE_COUNTER_CLOCKWISE ? VK_FRONT_FACE_CLOCKWISE : VK_FRONT_FACE_COUNTER_CLOCKWISE;
            if (uint32_t(src.topology) > 7u || mode > 3u) return;
            const uint32_t key = uint32_t(src.topology) | (uint32_t(mode) << 3) | (front == VK_FRONT_FACE_CLOCKWISE ? 32u : 0u);
            if (S.lite[key] == VK_NULL_HANDLE && !S.liteFailed[key])
            {
                S.lite[key] = BuildLite(src.topology, mode, front, h);
                S.liteFailed[key] = S.lite[key] == VK_NULL_HANDLE;
            }
            if (S.lite[key] == VK_NULL_HANDLE) return;
            const VkPipelineLayout layout = LayoutFor(sets, h);
            if (layout == VK_NULL_HANDLE) return;
            const VkPipeline pre = BuildPre(src, layout, h);
            if (pre == VK_NULL_HANDLE) return;
            slot.p = { pre, layout, src.bones, S.lite[key], key };
        }

        /// Engine thread: the entry's pipelines, built now if they are not. False: the draw keeps the multi-faces path.
        bool Get(uint32_t entry, uint32_t cull, Pipes& out)
        {
            const context::Handles* h = context::Get();
            if (!h || !h->device || !h->dapi || !Ready(*h)) return false;
            const uint32_t key = (entry << 2) | (cull & 3u);
            EntrySlot* slot = Find(key, true);
            if (!slot)
            {
                S.full = true;
                return false;
            }
            if (slot->key != key)
            {
                slot->key = key;
                Fill(*slot, entry, cull, *h);
                slot->failed = slot->p.pre == VK_NULL_HANDLE;
            }
            if (slot->failed) return false;
            out = slot->p;
            return true;
        }

        /// Any thread, while no Get runs: 1 = `out` set, 0 = none, -1 = not built yet (Get, on the engine thread, would build it).
        int Peek(uint32_t entry, uint32_t cull, Pipes& out)
        {
            const context::Handles* h = context::Get();
            if (!h || !h->device || S.broken) return 0;
            if (S.device != h->device || S.liteLayout == VK_NULL_HANDLE) return -1;
            const uint32_t key = (entry << 2) | (cull & 3u);
            const EntrySlot* slot = Find(key, false);
            if (!slot) return S.full ? 0 : -1;
            if (slot->failed) return 0;
            out = slot->p;
            return 1;
        }

        /// Engine thread, the frame's first PRESKIN call: this frame slot's buffer twice the most a frame asked (the replay thread
        /// never grows it). The slot's previous frame was waited for when the frame opened: its buffer and its set are free.
        void Reserve()
        {
            const context::Handles* h = context::Get();
            if (!h || !h->device || !h->dapi || !Ready(*h)) return;
            Frame& f = S.frames[present::Slot() % vkp::kFrameSlots];
            const VkDeviceSize want = (VkDeviceSize(S.peak) * 2 + 65536) * 16;
            if (f.buf.handle != VK_NULL_HANDLE && f.buf.size >= want) return;
            VkDeviceSize size = VkDeviceSize(4) << 20;
            while (size < want) size *= 2;
            if (f.buf.handle != VK_NULL_HANDLE) present::RetireBuffer(f.buf, present::Serial());
            f.buf = memory::Buffer();
            if (!memory::CreateBuffer(size, VK_BUFFER_USAGE_STORAGE_BUFFER_BIT, memory::Where::DeviceLocal, f.buf))
            {
                memory::DestroyBuffer(f.buf);
                f.buf = memory::Buffer();
                return;
            }
            VkDescriptorBufferInfo bi = { f.buf.handle, 0, VK_WHOLE_SIZE };
            VkWriteDescriptorSet w = {};
            w.sType           = VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;
            w.dstSet          = f.set;
            w.dstBinding      = 0;
            w.descriptorCount = 1;
            w.descriptorType  = VK_DESCRIPTOR_TYPE_STORAGE_BUFFER;
            w.pBufferInfo     = &bi;
            h->dapi->UpdateDescriptorSets(h->device, 1, &w, 0, nullptr);
        }

        /// The recording thread: this frame's slot, its per-frame tables reset on the frame's first use.
        Frame* Open(uint32_t records)
        {
            if (S.broken || S.liteLayout == VK_NULL_HANDLE) return nullptr;
            Frame& f = S.frames[present::Slot() % vkp::kFrameSlots];
            if (f.buf.handle == VK_NULL_HANDLE || f.set == VK_NULL_HANDLE) return nullptr;
            const uint64_t now = present::Serial();
            if (S.frame != now)
            {
                S.frame       = now;
                f.used        = 0;
                S.regionCount = 0;
            }
            if (S.stamp.size() < records)
            {
                S.stamp.resize(records, UINT64_MAX);
                S.start.resize(records, 0);
            }
            return &f;
        }

        /// The first vec4 of the draw's model instance's region this frame (made now if it has none); UINT32_MAX: no room.
        uint32_t RegionFor(const Draw& dr, Frame& f)
        {
            RegionKey k;
            std::memset(&k, 0, sizeof k);
            for (uint32_t i = 0; i < dr.vbCount && i < 4; ++i) k.vbs[i] = dr.vbs[i];
            k.vbCount      = dr.vbCount;
            k.vertexOffset = dr.vertexOffset;
            k.bones        = dr.bones;
            k.bonesOffset  = dr.bones != VK_NULL_HANDLE ? dr.bonesOffset : 0u;
            k.ring         = dr.bones != VK_NULL_HANDLE ? VK_NULL_HANDLE : dr.ring;
            k.ringOffset   = dr.bones != VK_NULL_HANDLE ? 0u : dr.ringOffset;
            const uint32_t size = dr.indexed ? dr.items : (dr.items > dr.count ? dr.items : dr.count);
            if (size == 0 || size > kMaxItems) return UINT32_MAX;
            if (S.regions.size() < 2 * (size_t(S.regionCount) + 1))
            {
                // Grown: this frame's regions put back (an older frame's are free slots).
                std::vector<Region> old;
                old.swap(S.regions);
                S.regions.assign(old.size() ? old.size() * 2 : 1024, Region());
                for (const Region& r : old)
                    if (r.frame == S.frame)
                    {
                        size_t at = size_t(Hash(r.key)) & (S.regions.size() - 1);
                        while (S.regions[at].frame == S.frame) at = (at + 1) & (S.regions.size() - 1);
                        S.regions[at] = r;
                    }
            }
            size_t at = size_t(Hash(k)) & (S.regions.size() - 1);
            for (;;)
            {
                const Region& r = S.regions[at];
                if (r.frame != S.frame) break;
                if (r.key == k) return r.size >= size ? r.start : UINT32_MAX;
                at = (at + 1) & (S.regions.size() - 1);
            }
            const uint64_t capacity = f.buf.size / 16;
            const uint64_t end = uint64_t(f.used) + size;
            if (end + 1 > capacity)   // + 1: the control (WXL_VK_REPLAY_PRESKIN_CONTROL) reads one vec4 past a region
            {
                if (end > S.peak) S.peak = static_cast<uint32_t>(end < 0xFFFFFFFFull ? end : 0xFFFFFFFFull);
                return UINT32_MAX;
            }
            Region& r = S.regions[at];
            r.key   = k;
            r.start = f.used;
            r.size  = size;
            r.frame = S.frame;
            ++S.regionCount;
            f.used = static_cast<uint32_t>(end);
            if (f.used > S.peak) S.peak = f.used;
            return r.start;
        }
    }

    /// A draw ReplayWorldViews keeps, and the views it is drawn into (bit v: view v).
    struct Kept
    {
        uint32_t    index;
        uint32_t    views;
        pipes::Pipe pipe;
        bool        alpha;
        bool        multi = false;   ///< Claude CPU-A: the multi-faces variant looked up in the walk (was in the recording)
        pipes::Pipe multiPipe;
        bool        skin = false;   ///< Claude ANIM1: animated once a frame (WXL_VK_REPLAY_PRESKIN), skinPipes looked up in the walk
        skin::Pipes skinPipes;
    };

    /// The lowest set bit's index (x != 0). Claude PERF2.
    inline uint32_t LowBit(uint32_t x)
    {
        unsigned long i = 0;
        _BitScanForward(&i, x);
        return static_cast<uint32_t>(i);
    }

    // Claude CUBES1: the multi-faces draws' per-instance ring, one per frame slot (that slot's previous frame was waited for
    // when the frame opened, as the overlay's ring): a call's views (matrix, viewport index) appended, grown by doubling, a
    // grown-out buffer retired at the open frame's serial (this frame's earlier commands still read it).
    struct InstanceRing
    {
        wxlvk::vk::memory::Buffer buf;
        uint64_t                  serial = UINT64_MAX;
        VkDeviceSize              used   = 0;
    };
    InstanceRing g_instances[wxlvk::vk::pipelines::kFrameSlots];

    bool InstanceRoom(VkDeviceSize bytes, uint8_t*& dst, VkBuffer& buffer, VkDeviceSize& offset)
    {
        namespace present = wxlvk::native::present;
        namespace memory  = wxlvk::vk::memory;
        InstanceRing&  r   = g_instances[present::Slot() % wxlvk::vk::pipelines::kFrameSlots];
        const uint64_t now = present::Serial();
        if (r.serial != now)
        {
            r.serial = now;
            r.used   = 0;
        }
        if (r.buf.handle == VK_NULL_HANDLE || r.used + bytes > r.buf.size)
        {
            // Claude CPU-A: the replay thread never grows the ring (the memory module and the retire list are the engine
            // thread's): the list is refused, and the call goes on per view, as when a growth fails. The engine thread reserves
            // before a frame's first aside call (InstanceReserve), so this stays rare.
            if (wxlvk::capture::aside::OnWorker()) return false;
            VkDeviceSize size = r.buf.size ? r.buf.size * 2 : VkDeviceSize(256 * 1024);
            while (size < bytes) size *= 2;
            if (r.buf.handle != VK_NULL_HANDLE) present::RetireBuffer(r.buf, now);
            r.buf  = memory::Buffer();
            r.used = 0;
            if (!memory::CreateBuffer(size, VK_BUFFER_USAGE_VERTEX_BUFFER_BIT, memory::Where::HostVisible, r.buf) || !r.buf.block.mapped)
            {
                memory::DestroyBuffer(r.buf);
                r.buf = memory::Buffer();
                return false;
            }
        }
        offset = r.used;
        dst    = static_cast<uint8_t*>(r.buf.block.mapped) + r.used;
        buffer = r.buf.handle;
        r.used += bytes;
        return true;
    }

    /// Claude CPU-A, engine thread: room for `bytes` more in this frame's ring (grown now if it lacks it).
    uint64_t g_instPeak = 0;   // the most a frame's ring held (engine thread; the replay thread writes it only while it owns the ring)
    void InstanceReserve(VkDeviceSize bytes)
    {
        uint8_t* dst = nullptr; VkBuffer buf = VK_NULL_HANDLE; VkDeviceSize off = 0;
        InstanceRing& r = g_instances[wxlvk::native::present::Slot() % wxlvk::vk::pipelines::kFrameSlots];
        const uint64_t now = wxlvk::native::present::Serial();
        const VkDeviceSize used = r.serial == now ? r.used : 0;
        if (r.buf.handle != VK_NULL_HANDLE && used + bytes <= r.buf.size) return;
        if (InstanceRoom(bytes, dst, buf, off)) r.used -= bytes;   // grown: the room given back, kept free
    }

    void InstanceFlush()
    {
        InstanceRing& r = g_instances[wxlvk::native::present::Slot() % wxlvk::vk::pipelines::kFrameSlots];
        if (r.buf.handle != VK_NULL_HANDLE) wxlvk::vk::memory::FlushHost(r.buf.block);
    }

    uint32_t Bits(uint32_t x)
    {
        uint32_t n = 0;
        for (; x; x &= x - 1) ++n;
        return n;
    }
}

namespace
{
    // Claude CPU-A: one ReplayWorldViews call, as the engine thread decides it (the views, their matrices and their culling,
    // the boxes, this frame's capture), then walked and recorded -- at once on the engine thread, or on the replay thread
    // (WXL_VK_REPLAY_ASIDE) from these copies alone: the replay thread reads no state of the engine thread's but the capture,
    // which no draw writes before the next frame, and the shadow pipeline table, which only the engine thread writes and only
    // while the replay thread waits (a pipeline not built yet is asked of the engine thread: BuildMisses).
    struct View
    {
        WXL_VkReplayView v;
        float            m[16];
        Cull             cull;
    };
    struct Miss
    {
        uint32_t entry;
        uint32_t cull;
        bool     alpha, multi;
        bool     skin = false;   ///< Claude ANIM1: the entry's animation pipelines (skin::Get)
    };
    struct ViewsCall
    {
        View               views[WXL_VK_REPLAY_MAX_VIEWS];
        uint32_t           n = 0;
        Cull               boxes;
        std::vector<float> boxCopy;   ///< the caller's boxes (an aside call outlives the caller's array)
        VkClearRect        clears[WXL_VK_REPLAY_MAX_VIEWS];
        uint32_t           clearCount = 0;
        VkRect2D           area = {};
        VkRenderPass       pass = VK_NULL_HANDLE;
        VkFramebuffer      framebuffer = VK_NULL_HANDLE;
        VkCommandBuffer    cmd = nullptr;
        float              depthBias = 0.0f, slopeBias = 0.0f;
        uint32_t           flags = 0, minIndexCount = 0;
        const Draw*        draws = nullptr;
        uint32_t           count = 0;
        const uint32_t*    movers = nullptr;   ///< Claude CPU-C: capture::Movers() when the call's filter keeps nothing else
        uint32_t           moverCount = 0;
        int                walkMode = 0;       ///< Claude CPU-C: capture::cubeWalk as the engine thread read it
        uint64_t           read = 0, proofWalks = 0, proofItems = 0, proofBad = 0;   ///< Claude CPU-C: records read; the proof
        uint32_t           G = 0;   ///< MultiViewports() with WXL_VK_REPLAY_MULTI_FACES, else 0
        const wxlvk::vk::loader::Device* d = nullptr;
        WXL_VkReplayStats  st = {};
        double             walkMs = 0, recMs = 0;
        uint64_t           kept = 0, live = 0, calls = 0, multiDraws = 0, builds = 0, ringFull = 0;
    };

    /// The engine thread's part: what ReplayViews checked and computed before its walk. False: refused (nothing recorded).
    bool Prepare(const WXL_VkReplayViewsDesc& desc, ViewsCall& c)
    {
        const context::Handles* h = context::Get();
        const VkRenderPass pass = wxlvk::capture::shadowpass::GetLoad();
        const uint32_t     n = desc.views && desc.viewStride >= sizeof(WXL_VkReplayView) ? desc.viewCount : 0u;
        double t[16], iv[16];
        if (!h || !h->dapi || pass == VK_NULL_HANDLE || !desc.cmd || desc.framebuffer == VK_NULL_HANDLE || n == 0
            || n > WXL_VK_REPLAY_MAX_VIEWS || !SceneInverse(t, iv))
            return false;
        c.d             = h->dapi;
        c.pass          = pass;
        c.n             = n;
        c.cmd           = desc.cmd;
        c.framebuffer   = desc.framebuffer;
        c.depthBias     = desc.depthBias;
        c.slopeBias     = desc.slopeBias;
        c.flags         = desc.flags;
        c.minIndexCount = desc.minIndexCount;
        c.st            = {};
        c.st.structSize = sizeof c.st;
        c.walkMs = c.recMs = 0;
        c.kept = c.live = c.calls = c.multiDraws = c.builds = c.ringFull = 0;

        // Each view: its matrix from the engine's clip (the scene's inverse taken once), its culling, its rectangle; the
        // render area is the rectangles' bounding box (the LOAD class touches nothing it does not draw or clear).
        int32_t x0 = INT32_MAX, y0 = INT32_MAX, x1 = INT32_MIN, y1 = INT32_MIN;
        c.clearCount = 0;
        const uint8_t* at = reinterpret_cast<const uint8_t*>(desc.views);
        for (uint32_t k = 0; k < n; ++k, at += desc.viewStride)
        {
            View& w = c.views[k];
            std::memcpy(&w.v, at, sizeof w.v);
            Compose(t, w.v.lightViewProj, w.m);
            w.cull = Cull();
            w.cull.MakeView(desc.flags, w.v.lightViewProj, w.v.cullSphere, iv);
            const VkRect2D& r = w.v.area;
            x0 = r.offset.x < x0 ? r.offset.x : x0;
            y0 = r.offset.y < y0 ? r.offset.y : y0;
            x1 = r.offset.x + int32_t(r.extent.width) > x1 ? r.offset.x + int32_t(r.extent.width) : x1;
            y1 = r.offset.y + int32_t(r.extent.height) > y1 ? r.offset.y + int32_t(r.extent.height) : y1;
            if (w.v.clear) c.clears[c.clearCount++] = { r, 0, 1 };
        }
        c.area = { { x0, y0 }, { static_cast<uint32_t>(x1 - x0), static_cast<uint32_t>(y1 - y0) } };
        // The boxes are every view's (view-independent).
        c.boxes = Cull();
        c.boxes.MakeView(0u, c.views[0].v.lightViewProj, nullptr, iv);
        if (desc.excludeBoxes && desc.excludeBoxCount)
        {
            c.boxes.boxes    = desc.excludeBoxes;
            c.boxes.boxCount = desc.excludeBoxCount;
            c.boxes.keep     = (desc.flags & WXL_VK_REPLAY_BOXES_KEEP) != 0;
        }
        c.draws       = wxlvk::capture::Draws(c.count);
        c.st.captured = c.count;
        // Claude CPU-C: a DYNAMIC_ONLY call without doodads or map objects keeps a unit's or a tree-wind draw alone.
        c.walkMode = wxlvk::capture::cubeWalk;
        c.read = c.proofWalks = c.proofItems = c.proofBad = 0;
        c.movers = nullptr;
        c.moverCount = 0;
        if (c.walkMode != 0 && (desc.flags & WXL_VK_REPLAY_DYNAMIC_ONLY)
            && !(desc.flags & (WXL_VK_REPLAY_WITH_DOODADS | WXL_VK_REPLAY_WITH_MAPOBJECTS)))
            c.movers = wxlvk::capture::Movers(c.moverCount);
        c.G           = (desc.flags & WXL_VK_REPLAY_MULTI_FACES) ? pipes::MultiViewports() : 0u;
        return true;
    }

    /// ONE walk of the capture: each draw the flags keep is taken to world once and tested against every view, in the order
    /// ReplayWorld tests it (the flags, the view's culling, the boxes, a pipeline) -- the counts add up as the views'
    /// ReplayWorld calls would. `misses` (the replay thread): the pipelines are only looked up; false when one is not built
    /// yet, `misses` then listing them (the call is walked again once the engine thread has built them).
    /// Claude CPU-C: one walk. `fast`: the index (c.movers, when set; `forget` drops its last entry: the proof's control)
    /// and the bounds taken to world once per draw; else the original walk, record by record, the bounds per view.
    bool WalkPass(ViewsCall& c, std::vector<Kept>& kept, std::vector<Miss>* misses, bool fast, bool forget)
    {
        WXL_VkReplayStats& st = c.st;
        st.skipped = st.culled = st.excluded = 0;
        const uint32_t n = c.n;
        const Filter   f(c.flags, c.minIndexCount);
        kept.clear();
        const uint32_t all = n >= 32 ? 0xFFFFFFFFu : ((1u << n) - 1u);
        const bool     indexed = fast && c.movers;
        uint32_t       walked  = indexed ? c.moverCount : c.count;
        if (indexed && forget && walked) --walked;
        // Every record the index leaves out fails the filter (Capture.hpp Movers()): skipped in every view, as the walk would.
        if (indexed) st.skipped += (c.count - walked) * n;
        c.read += walked;
        for (uint32_t j = 0; j < walked; ++j)
        {
            const uint32_t i = indexed ? c.movers[j] : j;
            const Draw& dr = c.draws[i];
            if (!f.Keeps(dr))
            {
                st.skipped += n;
                continue;
            }
            uint32_t mask = all;
            // Claude PREUVE1: the light's sphere with the bound before PERF2, each face's planes with the exact one (OutSplit).
            const float* bnd = (c.flags & WXL_VK_REPLAY_OLD_BOUNDS) ? dr.boundOld : dr.bound;
            const bool noCull = (c.flags & WXL_VK_REPLAY_NO_MODEL_CULL) && (dr.live || dr.doodad);   // Claude INST1-CUBES: the proof's reference
            if (noCull) {}
            else if (fast && (dr.boundOld[3] > 0.0f || bnd[3] > 0.0f))
            {
                // Claude CPU-C: the centres taken to world once (every view's inverse is the frame's: Prepare's `iv`).
                double wb[3], wp[3];
                c.views[0].cull.ToWorld(dr.boundOld, wb);
                c.views[0].cull.ToWorld(bnd, wp);
                for (uint32_t k = 0; k < n; ++k)
                    if (c.views[k].cull.Active() && c.views[k].cull.OutSplitWorld(wb, dr.boundOld[3], wp, bnd[3]))
                    {
                        mask &= ~(1u << k);
                        ++st.culled;
                    }
            }
            else if (dr.boundOld[3] > 0.0f || bnd[3] > 0.0f)
            {
                for (uint32_t k = 0; k < n; ++k)
                    if (c.views[k].cull.Active() && c.views[k].cull.OutSplit(dr.boundOld, bnd))
                    {
                        mask &= ~(1u << k);
                        ++st.culled;
                    }
            }
            if (!mask) continue;
            const bool moving = dr.live != 0u;
            if (!moving && !dr.mapobj && !dr.terrain && c.boxes.Excluded(dr.boundOld))   // Claude PREUVE1: the centre before PERF2
            {
                st.excluded += Bits(mask);
                continue;
            }
            const bool  alpha = dr.alphaTest && f.alphaWanted;
            pipes::Pipe p;
            if (dr.wind && !dr.windSet)
            {
                st.skipped += Bits(mask);
                continue;
            }
            if (misses)
            {
                const int r = pipes::Peek(dr.entry, alpha, p, f.cull, false, 1u);
                if (r < 0)
                {
                    misses->push_back({ dr.entry, f.cull, alpha, false });
                    continue;
                }
                if (r == 0)
                {
                    st.skipped += Bits(mask);
                    continue;
                }
            }
            else if (!pipes::Get(dr.entry, alpha, p, f.cull))
            {
                st.skipped += Bits(mask);
                continue;
            }
            Kept e{ i, mask, p, alpha };
            if (c.G)
            {
                // Claude CUBES1's lookup of the multi-faces variant, made here (the recording reads e.multi).
                pipes::Pipe pm;
                const int r = misses ? pipes::Peek(dr.entry, alpha, pm, f.cull, true, c.G)
                                     : (pipes::Get(dr.entry, alpha, pm, f.cull, true) ? 1 : 0);
                if (r < 0)
                {
                    misses->push_back({ dr.entry, f.cull, alpha, true });
                    continue;
                }
                e.multi     = r == 1;
                e.multiPipe = pm;
                // Claude ANIM1: a unit's opaque draw drawn multi-faces may be animated once a frame.
                if (e.multi && !alpha && (c.flags & WXL_VK_REPLAY_PRESKIN) && dr.live && !dr.wind && dr.items > 0
                    && dr.items <= skin::kMaxItems)
                {
                    const int rs = misses ? skin::Peek(dr.entry, f.cull, e.skinPipes)
                                          : (skin::Get(dr.entry, f.cull, e.skinPipes) ? 1 : 0);
                    if (rs < 0)
                    {
                        misses->push_back({ dr.entry, f.cull, false, true, true });
                        continue;
                    }
                    e.skin = rs == 1;
                }
            }
            kept.push_back(e);
        }
        return !misses || misses->empty();
    }

    /// ONE walk (WalkPass), timed. Claude CPU-C proof (hdVkCubeWalk 2 / 3): the original walk made after it, on the same
    /// thread and the same capture, and compared -- every kept draw (its record, its views, its pipelines) and the counts.
    bool Walk(ViewsCall& c, std::vector<Kept>& kept, std::vector<Miss>* misses)
    {
        const auto perfT0 = std::chrono::steady_clock::now();   // Claude PERF2
        const bool ok = WalkPass(c, kept, misses, c.walkMode != 0, c.walkMode == 3);
        c.walkMs += std::chrono::duration<double, std::milli>(std::chrono::steady_clock::now() - perfT0).count();
        if (ok && c.walkMode >= 2)
        {
            thread_local std::vector<Kept> ref;
            thread_local std::vector<Miss> refMisses;
            refMisses.clear();
            const WXL_VkReplayStats mine = c.st;
            const uint64_t read = c.read;
            if (WalkPass(c, ref, misses ? &refMisses : nullptr, false, false))
            {
                uint64_t bad = 0;
                const size_t common = ref.size() < kept.size() ? ref.size() : kept.size();
                bad += (ref.size() > kept.size() ? ref.size() - kept.size() : kept.size() - ref.size());
                for (size_t i = 0; i < common; ++i)
                {
                    const Kept& a = kept[i];
                    const Kept& b = ref[i];
                    if (a.index != b.index || a.views != b.views || a.alpha != b.alpha || a.multi != b.multi
                        || a.pipe.pipeline != b.pipe.pipeline || a.pipe.layout != b.pipe.layout || a.pipe.wind != b.pipe.wind
                        || a.pipe.bones != b.pipe.bones || (a.multi && a.multiPipe.pipeline != b.multiPipe.pipeline))
                        ++bad;
                }
                bad += (mine.skipped != c.st.skipped) + (mine.culled != c.st.culled) + (mine.excluded != c.st.excluded);
                ++c.proofWalks;
                c.proofItems += ref.size();
                c.proofBad += bad;
            }
            c.st   = mine;   // the call's own counts
            c.read = read;
        }
        return ok;
    }

    /// Claude ANIM1: the call's units animated (each kept draw with e.skin not yet animated this frame), BEFORE its render pass: a
    /// pass of no pixel on the call's framebuffer (one texel of its area, loaded and stored as it was), then the barrier that makes
    /// the positions visible to the faces' vertex stage. `starts[k]`: kept[k]'s region this frame, UINT32_MAX for the old path.
    void Preskin(ViewsCall& c, const std::vector<Kept>& kept, std::vector<uint32_t>& starts)
    {
        skin::Frame* f = skin::Open(c.count);
        if (!f) return;
        const wxlvk::vk::loader::Device& d = *c.d;
        skin::State& S = skin::S;
        bool             open = false;
        VkPipeline       pipe = VK_NULL_HANDLE;
        VkPipelineLayout layout = VK_NULL_HANDLE;
        VkDescriptorSet  ring = VK_NULL_HANDLE, bones = VK_NULL_HANDLE;
        uint32_t         ringOffset = 0xFFFFFFFFu, bonesOffset = 0xFFFFFFFFu, vbCount = 0;
        VkBuffer         vbs[4] = {}, ib = VK_NULL_HANDLE;
        for (size_t k = 0; k < kept.size(); ++k)
        {
            const Kept& e = kept[k];
            if (!e.skin) continue;
            const Draw& dr = c.draws[e.index];
            if (S.stamp[e.index] == S.frame)
            {
                starts[k] = S.start[e.index];
                continue;
            }
            const uint32_t at = skin::RegionFor(dr, *f);
            if (at == UINT32_MAX)
            {
                ++g_wxlSkinRefused;
                continue;
            }
            if (!open)
            {
                VkRenderPassBeginInfo begin = {};
                begin.sType       = VK_STRUCTURE_TYPE_RENDER_PASS_BEGIN_INFO;
                begin.renderPass  = c.pass;
                begin.framebuffer = c.framebuffer;
                begin.renderArea  = { c.area.offset, { 1, 1 } };
                d.CmdBeginRenderPass(c.cmd, &begin, VK_SUBPASS_CONTENTS_INLINE);
                open = true;
            }
            if (pipe != e.skinPipes.pre)
            {
                d.CmdBindPipeline(c.cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, e.skinPipes.pre);
                pipe = e.skinPipes.pre;
            }
            if (layout != e.skinPipes.layout)
            {
                // Another pipeline layout (another set 0 layout): every set bound afresh.
                layout = e.skinPipes.layout;
                d.CmdBindDescriptorSets(c.cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, layout, 3, 1, &f->set, 0, nullptr);
                ring  = bones = VK_NULL_HANDLE;
                ringOffset = bonesOffset = 0xFFFFFFFFu;
            }
            if (ring != dr.ring || ringOffset != dr.ringOffset)
            {
                d.CmdBindDescriptorSets(c.cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, layout, 1, 1, &dr.ring, 1, &dr.ringOffset);
                ring       = dr.ring;
                ringOffset = dr.ringOffset;
            }
            if (e.skinPipes.bones && (bones != dr.bones || bonesOffset != dr.bonesOffset))
            {
                d.CmdBindDescriptorSets(c.cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, layout, 2, 1, &dr.bones, 1, &dr.bonesOffset);
                bones       = dr.bones;
                bonesOffset = dr.bonesOffset;
            }
            // The push range: delta (region start - the draw's base vertex) in the first float's bits, the rest unread.
            float push[16] = {};
            const int32_t delta = static_cast<int32_t>(at) - dr.vertexOffset;
            std::memcpy(push, &delta, sizeof delta);
            d.CmdPushConstants(c.cmd, layout, VK_SHADER_STAGE_VERTEX_BIT, 0, sizeof push, push);
            bool same = vbCount == dr.vbCount;
            for (uint32_t i = 0; same && i < dr.vbCount; ++i) same = vbs[i] == dr.vbs[i];
            if (!same)
            {
                const VkDeviceSize zeros[4] = {};
                d.CmdBindVertexBuffers(c.cmd, 0, dr.vbCount, dr.vbs, zeros);
                vbCount = dr.vbCount;
                for (uint32_t i = 0; i < dr.vbCount; ++i) vbs[i] = dr.vbs[i];
            }
            if (dr.indexed)
            {
                if (ib != dr.ib)
                {
                    d.CmdBindIndexBuffer(c.cmd, dr.ib, 0, VK_INDEX_TYPE_UINT16);
                    ib = dr.ib;
                }
                d.CmdDrawIndexed(c.cmd, dr.count, 1, dr.firstIndex, dr.vertexOffset, 0);
            }
            else d.CmdDraw(c.cmd, dr.count, 1, static_cast<uint32_t>(dr.vertexOffset), 0);
            S.stamp[e.index] = S.frame;
            S.start[e.index] = at;
            starts[k] = at;
            ++g_wxlSkinDraws;
        }
        if (!open) return;
        d.CmdEndRenderPass(c.cmd);
        VkMemoryBarrier mb = {};
        mb.sType         = VK_STRUCTURE_TYPE_MEMORY_BARRIER;
        mb.srcAccessMask = VK_ACCESS_SHADER_WRITE_BIT;
        mb.dstAccessMask = VK_ACCESS_SHADER_READ_BIT;
        d.CmdPipelineBarrier(c.cmd, VK_PIPELINE_STAGE_VERTEX_SHADER_BIT, VK_PIPELINE_STAGE_VERTEX_SHADER_BIT, 0, 1, &mb, 0, nullptr, 0, nullptr);
    }

    /// The recording: ONE render pass over the views' bounding box, the views asked cleared, then the kept draws (Claude PERF2:
    /// draw-major; CUBES1: instanced per group of viewports), into c.cmd.
    void RecordViews(ViewsCall& c, const std::vector<Kept>& kept)
    {
        const auto perfT1 = std::chrono::steady_clock::now();   // Claude PERF2
        const wxlvk::vk::loader::Device& d = *c.d;
        WXL_VkReplayStats& st = c.st;
        const uint32_t n = c.n;
        const Filter   f(c.flags, c.minIndexCount);
        View* const    views = c.views;
        c.kept += kept.size();
        for (const Kept& e : kept) c.live += c.draws[e.index].live != 0u;
        // Claude ANIM1: the units animated first, outside the pass.
        thread_local std::vector<uint32_t> starts;
        starts.assign(kept.size(), UINT32_MAX);
        if ((c.flags & WXL_VK_REPLAY_PRESKIN) && c.G) Preskin(c, kept, starts);
        struct Lite
        {
            const Draw* dr;
            uint32_t    start, views, key;
            VkPipeline  pipe;
            VkBuffer    inst;
            uint32_t    firsts[WXL_VK_REPLAY_MAX_VIEWS / 2];
        };
        thread_local std::vector<Lite> lites;
        lites.clear();
        const uint32_t liteShift = (c.flags & WXL_VK_REPLAY_PRESKIN_CONTROL) ? 1u : 0u;   // the control: every vertex's neighbour
        // ONE render pass over the views' bounding box: the views asked cleared, then each view's draws in the capture's
        // order (its viewport, its scissor, its matrix; the bindings started afresh, as a ReplayWorld of its own would).
        VkRenderPassBeginInfo begin = {};
        begin.sType       = VK_STRUCTURE_TYPE_RENDER_PASS_BEGIN_INFO;
        begin.renderPass  = c.pass;
        begin.framebuffer = c.framebuffer;
        begin.renderArea  = c.area;
        d.CmdBeginRenderPass(c.cmd, &begin, VK_SUBPASS_CONTENTS_INLINE);
        if (c.clearCount)
        {
            VkClearAttachment clear = {};
            clear.aspectMask              = VK_IMAGE_ASPECT_DEPTH_BIT;
            clear.clearValue.depthStencil = { 1.0f, 0 };
            d.CmdClearAttachments(c.cmd, 1, &clear, c.clearCount, c.clears);
        }
        WXL_VkReplayDesc shared = {};   // what BindDraw reads: the command buffer and the bias
        shared.structSize = sizeof shared;
        shared.cmd        = c.cmd;
        shared.depthBias  = c.depthBias;
        shared.slopeBias  = c.slopeBias;
        shared.flags      = c.flags;
        // Claude PERF2: draw-major. Each kept draw is bound ONCE (its pipeline, sets, buffers: BindDraw) and then drawn
        // into every view of its mask (that view's viewport, scissor and matrix). The views' depth is the same: a depth
        // pass's result does not depend on the order of its draws, and every view keeps exactly its draws.
        VkViewport vps[WXL_VK_REPLAY_MAX_VIEWS];
        for (uint32_t k = 0; k < n; ++k)
        {
            const View& w = views[k];
            VkViewport& vp = vps[k];
            vp = {};
            vp.x        = static_cast<float>(w.v.area.offset.x);
            vp.y        = static_cast<float>(w.v.area.offset.y);
            vp.width    = static_cast<float>(w.v.area.extent.width);
            vp.height   = static_cast<float>(w.v.area.extent.height);
            vp.maxDepth = 1.0f;
        }
        // Claude CUBES1 (WXL_VK_REPLAY_MULTI_FACES): the viewports in groups of G (gl_ViewportIndex = k % G, the group's
        // viewports and scissors set as one array). A kept draw whose module has the multi-faces variant is drawn ONCE per group
        // its mask touches, instanced: the instances are its views of that group in increasing order, each a (matrix, viewport
        // index) entry of the per-instance ring. A list is written once per (group, mask) of the call and shared by every draw
        // with that mask. The same primitives, the same matrices, the same rectangles, and in each view the same draws in the
        // same order: the per-view result. Any other draw keeps the per-view draws below.
        uint32_t   G = c.G;
        VkViewport gvps[WXL_VK_REPLAY_MAX_VIEWS + 16];
        VkRect2D   grects[WXL_VK_REPLAY_MAX_VIEWS + 16];
        struct MaskList
        {
            uint64_t key   = 0;
            uint32_t gen   = 0;
            uint32_t first = 0;
        };
        constexpr uint32_t kMaskSlots = 4096;
        static MaskList  masks[kMaskSlots];   // one recording at a time (the engine thread's waits for the replay thread's)
        static uint32_t  maskGen   = 0;
        static VkBuffer  instBound = VK_NULL_HANDLE;
        bool             instWritten = false;
        if (++maskGen == 0) { for (MaskList& m : masks) m = MaskList(); maskGen = 1; }
        instBound = VK_NULL_HANDLE;   // the binding is bound afresh in each call
        // The first instance of the list for (group gi, mask gm), written on first use; false when the ring cannot have it.
        auto listFor = [&](uint32_t gi, uint32_t gm, uint32_t& first) -> bool {
            const uint64_t key = (uint64_t(gi) << 32) | gm;
            uint32_t slot = static_cast<uint32_t>((key * 0x9E3779B97F4A7C15ull) >> 52) & (kMaskSlots - 1);
            for (uint32_t probe = 0; probe < kMaskSlots; ++probe, slot = (slot + 1) & (kMaskSlots - 1))
            {
                MaskList& m = masks[slot];
                if (m.gen == maskGen && m.key == key)
                {
                    first = m.first;
                    return true;
                }
                if (m.gen != maskGen) break;
            }
            uint8_t*       dst = nullptr;
            VkBuffer       buf = VK_NULL_HANDLE;
            VkDeviceSize   off = 0;
            const uint32_t cnt = Bits(gm);
            if (!InstanceRoom(VkDeviceSize(cnt) * pipes::kMultiStride, dst, buf, off))
            {
                ++c.ringFull;
                return false;
            }
            if (buf != instBound)
            {
                // A new buffer (the ring grew): bound at 0, firstInstance indexes it; the lists of the old one are forgotten.
                const VkDeviceSize zero = 0;
                d.CmdBindVertexBuffers(c.cmd, pipes::kMultiBinding, 1, &buf, &zero);
                if (instBound != VK_NULL_HANDLE && ++maskGen == 0) { for (MaskList& m : masks) m = MaskList(); maskGen = 1; }
                instBound = buf;
            }
            uint8_t* at = dst;
            for (uint32_t bits = gm; bits; bits &= bits - 1u, at += pipes::kMultiStride)
            {
                const uint32_t local = LowBit(bits);
                std::memset(at, 0, pipes::kMultiStride);
                std::memcpy(at, views[gi * G + local].m, 16 * sizeof(float));   // the bytes the per-view path pushes
                const int32_t index = static_cast<int32_t>(local);
                std::memcpy(at + 64, &index, sizeof index);
            }
            instWritten = true;
            first = static_cast<uint32_t>(off / pipes::kMultiStride);
            slot = static_cast<uint32_t>((key * 0x9E3779B97F4A7C15ull) >> 52) & (kMaskSlots - 1);
            for (uint32_t probe = 0; probe < kMaskSlots; ++probe, slot = (slot + 1) & (kMaskSlots - 1))
                if (masks[slot].gen != maskGen)
                {
                    masks[slot] = { key, maskGen, first };
                    break;
                }
            return true;
        };
        if (G)
            for (uint32_t k = 0; k < n + 16; ++k)
            {
                gvps[k]   = vps[k < n ? k : n - 1];
                grects[k] = views[k < n ? k : n - 1].v.area;
            }
        {
            static const int32_t kStill[4] = {};
            Bound    b;
            uint32_t current = UINT32_MAX;   // the view whose viewport and scissor are set
            uint32_t group   = UINT32_MAX;   // Claude CUBES1: the group whose G viewports are set
            const uint32_t groupBits = G >= 32 ? 0xFFFFFFFFu : ((1u << G) - 1u);
            for (size_t ki = 0; ki < kept.size(); ++ki)
            {
                const Kept&    e    = kept[ki];
                const Draw&    dr   = c.draws[e.index];
                const uint32_t lead = static_cast<uint32_t>(LowBit(e.views));
                uint32_t       firsts[WXL_VK_REPLAY_MAX_VIEWS / 2];
                bool           multi = G && e.multi;
                for (uint32_t gi = 0; multi && gi * G < n; ++gi)
                {
                    const uint32_t gm = (e.views >> (gi * G)) & groupBits;
                    if (gm && !listFor(gi, gm, firsts[gi]))
                    {
                        multi = false;
                        G     = 0;   // the ring cannot grow: the rest of the call per view
                    }
                }
                if (multi && starts[ki] != UINT32_MAX)
                {
                    // Claude ANIM1: animated this frame: drawn after the others by the faces' small shader (a depth pass's result
                    // does not depend on the order of its draws).
                    Lite l;
                    l.dr    = &dr;
                    l.start = starts[ki] + liteShift;
                    l.views = e.views;
                    l.key   = e.skinPipes.liteKey;
                    l.pipe  = e.skinPipes.lite;
                    l.inst  = instBound;
                    for (uint32_t gi = 0; gi * G < n; ++gi) l.firsts[gi] = firsts[gi];
                    lites.push_back(l);
                    continue;
                }
                if (multi)
                {
                    BindDraw(c.cmd, dr, e.alpha, dr.wind && f.windStill ? kStill : dr.windPush, e.multiPipe, views[lead].m, shared, b, d);
                    ++c.multiDraws;
                    for (uint32_t gi = 0; gi * G < n; ++gi)
                    {
                        const uint32_t gm = (e.views >> (gi * G)) & groupBits;
                        if (!gm) continue;
                        if (group != gi)
                        {
                            d.CmdSetViewport(c.cmd, 0, G, &gvps[gi * G]);
                            d.CmdSetScissor(c.cmd, 0, G, &grects[gi * G]);
                            group   = gi;
                            current = UINT32_MAX;
                        }
                        const uint32_t cnt = Bits(gm);
                        if (dr.indexed) d.CmdDrawIndexed(c.cmd, dr.count, cnt, dr.firstIndex, dr.vertexOffset, firsts[gi]);
                        else d.CmdDraw(c.cmd, dr.count, cnt, static_cast<uint32_t>(dr.vertexOffset), firsts[gi]);
                        ++c.calls;
                        st.replayed += cnt;
                        if (e.alpha) st.alphaTested += cnt;
                        if (dr.mapobj) st.mapObjects += cnt;
                    }
                    continue;
                }
                BindDraw(c.cmd, dr, e.alpha, dr.wind && f.windStill ? kStill : dr.windPush, e.pipe, views[lead].m, shared, b, d);
                for (uint32_t bits = e.views; bits; bits &= bits - 1u)
                {
                    const uint32_t k = static_cast<uint32_t>(LowBit(bits));
                    if (k != current)
                    {
                        d.CmdSetViewport(c.cmd, 0, 1, &vps[k]);
                        d.CmdSetScissor(c.cmd, 0, 1, &views[k].v.area);
                        current = k;
                        group   = UINT32_MAX;   // Claude CUBES1: viewport 0 changed
                    }
                    // The view's matrix (BindDraw pushes it only when the layout changes: pushed here for every view).
                    d.CmdPushConstants(c.cmd, e.pipe.layout, VK_SHADER_STAGE_VERTEX_BIT, e.pipe.wind ? sizeof dr.windPush : 0u,
                                       16 * sizeof(float), views[k].m);
                    if (dr.indexed) d.CmdDrawIndexed(c.cmd, dr.count, 1, dr.firstIndex, dr.vertexOffset, 0);
                    else d.CmdDraw(c.cmd, dr.count, 1, static_cast<uint32_t>(dr.vertexOffset), 0);
                    ++c.calls;   // Claude CUBES1
                    ++st.replayed;
                    if (e.alpha) ++st.alphaTested;
                    if (dr.mapobj) ++st.mapObjects;
                }
            }
            // Claude ANIM1: the animated units, by pipeline then index buffer: one set (the positions), the instance lists as
            // the multi-faces path wrote them, the region's start as the base vertex (gl_VertexIndex = its index + start).
            if (!lites.empty())
            {
                std::sort(lites.begin(), lites.end(), [](const Lite& a, const Lite& b) {
                    return a.key != b.key ? a.key < b.key : a.dr->ib < b.dr->ib;
                });
                skin::Frame& sf = skin::S.frames[wxlvk::native::present::Slot() % wxlvk::vk::pipelines::kFrameSlots];
                d.CmdBindDescriptorSets(c.cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, skin::S.liteLayout, 0, 1, &sf.set, 0, nullptr);
                VkPipeline lp = VK_NULL_HANDLE;
                VkBuffer   ib = VK_NULL_HANDLE, inst = instBound;
                for (const Lite& l : lites)
                {
                    const Draw& dr = *l.dr;
                    if (lp != l.pipe)
                    {
                        d.CmdBindPipeline(c.cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, l.pipe);
                        d.CmdSetDepthBias(c.cmd, c.depthBias, 0.0f, c.slopeBias);
                        lp = l.pipe;
                    }
                    if (inst != l.inst)
                    {
                        const VkDeviceSize zero = 0;
                        d.CmdBindVertexBuffers(c.cmd, pipes::kMultiBinding, 1, &l.inst, &zero);
                        inst = l.inst;
                    }
                    if (dr.indexed && ib != dr.ib)
                    {
                        d.CmdBindIndexBuffer(c.cmd, dr.ib, 0, VK_INDEX_TYPE_UINT16);
                        ib = dr.ib;
                    }
                    ++c.multiDraws;
                    for (uint32_t gi = 0; gi * G < n; ++gi)
                    {
                        const uint32_t gm = (l.views >> (gi * G)) & groupBits;
                        if (!gm) continue;
                        if (group != gi)
                        {
                            d.CmdSetViewport(c.cmd, 0, G, &gvps[gi * G]);
                            d.CmdSetScissor(c.cmd, 0, G, &grects[gi * G]);
                            group   = gi;
                            current = UINT32_MAX;
                        }
                        const uint32_t cnt = Bits(gm);
                        if (dr.indexed) d.CmdDrawIndexed(c.cmd, dr.count, cnt, dr.firstIndex, static_cast<int32_t>(l.start), l.firsts[gi]);
                        else d.CmdDraw(c.cmd, dr.count, cnt, l.start, l.firsts[gi]);
                        ++c.calls;
                        ++g_wxlSkinLite;
                        st.replayed += cnt;
                    }
                }
            }
        }
        if (instWritten) InstanceFlush();   // Claude CUBES1: the lists written, before the submit
        {
            // Claude CPU-A: the most this frame's ring has held, for the next frame's reservation.
            const InstanceRing& r = g_instances[wxlvk::native::present::Slot() % wxlvk::vk::pipelines::kFrameSlots];
            if (r.used > g_instPeak) g_instPeak = r.used;
        }
        if (!(c.flags & WXL_VK_REPLAY_NO_CASTERS))   // the engine thread's alone (an aside call has NO_CASTERS)
            for (uint32_t k = 0; k < n; ++k)
            {
                d.CmdSetViewport(c.cmd, 0, 1, &vps[k]);
                d.CmdSetScissor(c.cmd, 0, 1, &views[k].v.area);
                st.casters += wxlvk::native::render::RecordShadowCasters(c.cmd, c.pass, vps[k], views[k].v.area, views[k].v.lightViewProj, views[k].v.cascade);
            }
        d.CmdEndRenderPass(c.cmd);
        c.recMs += std::chrono::duration<double, std::milli>(std::chrono::steady_clock::now() - perfT1).count();
    }

    /// Claude CPU-C (engine thread): the proof's totals, written to Logs\preuve-cubes.txt every 120 frames (reset when
    /// hdVkCubeWalk changes).
    void ProofNote(const ViewsCall& c)
    {
        static int      mode = -1;
        static uint64_t serial = 0, frames = 0, calls = 0, walks = 0, items = 0, bad = 0, read = 0, records = 0;
        if (mode != c.walkMode) { mode = c.walkMode; frames = calls = walks = items = bad = read = records = 0; serial = 0; }
        if (mode < 2) return;
        ++calls;
        walks += c.proofWalks;
        items += c.proofItems;
        bad   += c.proofBad;
        read  += c.read;
        records += c.count;
        const uint64_t now = wxlvk::native::present::Serial();
        if (now == serial) return;
        serial = now;
        if (++frames % 120) return;
        if (std::FILE* fl = std::fopen("Logs\\preuve-cubes.txt", "a"))
        {
            std::fprintf(fl, "%s images %llu : %llu rejeux de cubes, %llu parcours compares a l'original, "
                             "%llu dessins gardes, %llu differents (dessin, faces, pipeline ou compte) ; lus %llu enregistrements sur %llu\n",
                         mode == 3 ? "TEMOIN (dernier mobile oublie)" : "PREUVE", (unsigned long long)frames, (unsigned long long)calls,
                         (unsigned long long)walks, (unsigned long long)items, (unsigned long long)bad, (unsigned long long)read,
                         (unsigned long long)records);
            std::fclose(fl);
        }
    }

    /// A call's figures into the totals and the PERF2 / CUBES1 counters (engine thread).
    void Merge(const ViewsCall& c)
    {
        g_wxlViewsCaptured += c.read;   // Claude CPU-C: the records the walk read (the index's alone when it walks it)
        ProofNote(c);
        g_wxlViewsWalkMs += c.walkMs;
        g_wxlViewsRecMs  += c.recMs;
        g_wxlViewsKept   += c.kept;
        g_wxlViewsLive   += c.live;
        g_wxlViewsCalls  += c.calls;
        g_wxlViewsMultiDraws += c.multiDraws;
        g.replays += c.n;
        g.drawn   += c.st.replayed;
        g.skipped += c.st.skipped;
        g.alpha   += c.st.alphaTested;
        g.culled  += c.st.culled;
        ++g.multi;
    }

    // The aside calls of the frame (engine thread; a call is the replay thread's from its Push to the next Join).
    std::vector<std::unique_ptr<ViewsCall>> g_calls;
    uint32_t g_callsUsed = 0;
    uint64_t g_reservedSerial = 0;
    uint64_t g_skinReservedSerial = 0;   // Claude ANIM1

    void Settle()
    {
        for (uint32_t i = 0; i < g_callsUsed; ++i)
        {
            const ViewsCall& c = *g_calls[i];
            Merge(c);
            g_wxlAsideDraws[(c.flags & WXL_VK_REPLAY_DYNAMIC_ONLY) ? 1 : 0] += c.st.replayed;
            g_wxlAsideBuilds   += c.builds;
            g_wxlAsideRingFull += c.ringFull;
            ++g_wxlAsideCalls;
        }
        g_callsUsed = 0;
        wxlvk::capture::aside::Stats a;
        wxlvk::capture::aside::TakeStats(a);
        g_wxlAsideWorkMs += a.workMs;
        g_wxlAsideWaitMs += a.waitMs;
        g_wxlAsideEarly  += a.early;
    }

    /// Engine thread (asked by the replay thread, which waits): the pipelines a walk found not built yet, built.
    void BuildMisses(void* arg)
    {
        if (wxlvk::recordthread::Async()) { wxlvk::recordthread::DrainTag("rejeu des cubes (tables)"); wxlvk::recordthread::Drain(); }   // the pipelines' tables idle
        const std::vector<Miss>& misses = *static_cast<const std::vector<Miss>*>(arg);
        for (const Miss& m : misses)
        {
            if (m.skin)   // Claude ANIM1
            {
                skin::Pipes sp;
                skin::Get(m.entry, m.cull, sp);
                continue;
            }
            pipes::Pipe p;
            pipes::Get(m.entry, m.alpha, p, m.cull, m.multi);
        }
    }

    /// The replay thread: an aside call walked and recorded into its segment.
    void RunCall(void* arg, VkCommandBuffer cmd)
    {
        ViewsCall& c = *static_cast<ViewsCall*>(arg);
        c.cmd = cmd;
        thread_local std::vector<Kept> kept;
        thread_local std::vector<Miss> misses;
        misses.clear();
        while (!Walk(c, kept, &misses))
        {
            c.builds += misses.size();
            wxlvk::capture::aside::OnEngine(&BuildMisses, &misses);
            misses.clear();
        }
        RecordViews(c, kept);
    }
}

namespace wxlvk::capture
{
    bool Replay(const WXL_VkReplayDesc& desc, WXL_VkReplayStats* stats)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Capture);
        wxlvk::capture::aside::Join(true);   // Claude CPU-A: the replay thread done first (the pipelines, the ring)
        WXL_VkReplayStats st = {};
        st.structSize = sizeof st;
        const context::Handles* h = context::Get();
        const bool         load = (desc.flags & WXL_VK_REPLAY_LOAD) != 0;
        const VkRenderPass pass = load ? shadowpass::GetLoad() : shadowpass::Get();
        float  m[16];
        double iv[16];
        if (!h || !h->dapi || pass == VK_NULL_HANDLE || !desc.cmd || desc.framebuffer == VK_NULL_HANDLE
            || !ClipToLight(desc.lightViewProj, m, iv))
        {
            ++g.refused;
            return false;
        }
        const wxlvk::vk::loader::Device& d = *h->dapi;
        Cull cull;
        cull.Make(desc, iv);
        Begin(desc, pass, d);
        DrawAll(desc, m, cull, st, d);
        VkViewport vp = {};
        vp.x = static_cast<float>(desc.area.offset.x);
        vp.y = static_cast<float>(desc.area.offset.y);
        vp.width  = static_cast<float>(desc.area.extent.width);
        vp.height = static_cast<float>(desc.area.extent.height);
        vp.maxDepth = 1.0f;
        if (!(desc.flags & WXL_VK_REPLAY_NO_CASTERS))
            st.casters = native::render::RecordShadowCasters(desc.cmd, pass, vp, desc.area, desc.lightViewProj, desc.cascade);
        d.CmdEndRenderPass(desc.cmd);
        // The draws' bind tracking knows nothing of what was bound here.
        wxlvk::vk::pipelines::InvalidateBindings();

        ++g.replays;
        g.drawn   += st.replayed;
        g.skipped += st.skipped;
        g.alpha   += st.alphaTested;
        g.culled  += st.culled;
        if (!g.saidFirst)
        {
            g.saidFirst = true;
            wxl::ScriptMgr::Log(WXL_LOG_INFO, "capture: first shadow replay (frame %llu): %u of %u captured draw(s) "
                                "replayed (%u alpha-tested), %u skipped, %u caster pass(es)",
                                static_cast<unsigned long long>(Serial()), st.replayed, st.captured, st.alphaTested,
                                st.skipped, st.casters);
        }
        if (stats)
        {
            const uint32_t n = stats->structSize < sizeof st ? stats->structSize : static_cast<uint32_t>(sizeof st);
            std::memcpy(stats, &st, n);
            stats->structSize = n;
        }
        return true;
    }

    bool ReplayViews(const WXL_VkReplayViewsDesc& desc, WXL_VkReplayStats* stats)
    {
        if (wxlvk::recordthread::Enabled()) wxlvk::recordthread::Observe(wxlvk::recordthread::Boundary::Capture);
        // Claude CPU-A: WXL_VK_REPLAY_ASIDE with a segment open (aside::Begin, from this MidPass) and no casters to draw (their
        // passes are the engine thread's): prepared here, walked and recorded on the replay thread. Any other call waits for the
        // replay thread first (the walk's and the recording's state is then this thread's alone).
        const bool aside = (desc.flags & WXL_VK_REPLAY_ASIDE) && (desc.flags & WXL_VK_REPLAY_NO_CASTERS) && wxlvk::capture::aside::Open();
        if (!aside) wxlvk::capture::aside::Join(true);
        static ViewsCall direct;   // the engine thread's
        ViewsCall* c = &direct;
        if (aside)
        {
            if (g_callsUsed == g_calls.size()) g_calls.push_back(std::make_unique<ViewsCall>());
            c = g_calls[g_callsUsed].get();
        }
        if (!Prepare(desc, *c))
        {
            ++g.refused;
            return false;
        }
        if (aside)
        {
            ++g_callsUsed;
            static bool settleSet = false;
            if (!settleSet)
            {
                wxlvk::capture::aside::SetSettle(&Settle);
                settleSet = true;
            }
            if (c->boxes.boxCount)   // the caller's boxes copied: the call outlives its array
            {
                c->boxCopy.assign(c->boxes.boxes, c->boxes.boxes + 6u * c->boxes.boxCount);
                c->boxes.boxes = c->boxCopy.data();
            }
            // The frame's first aside call: the replay thread has not touched the ring this frame, the engine thread grows it
            // now to twice the most a frame used (the replay thread never grows it).
            const uint64_t now = wxlvk::native::present::Serial();
            if (c->G && g_reservedSerial != now)
            {
                g_reservedSerial = now;
                InstanceReserve(VkDeviceSize(2 * g_instPeak + 256 * 1024));
            }
            if (c->G && (desc.flags & WXL_VK_REPLAY_PRESKIN) && g_skinReservedSerial != now)   // Claude ANIM1
            {
                g_skinReservedSerial = now;
                skin::Reserve();
            }
            wxlvk::capture::aside::Push(&RunCall, c);
            if (stats)
            {
                // What the engine thread knows now: the call is taken and the capture's count. The rest is the replay
                // thread's, in the totals once joined.
                WXL_VkReplayStats st = {};
                st.structSize = sizeof st;
                st.captured   = c->count;
                const uint32_t sz = stats->structSize < sizeof st ? stats->structSize : static_cast<uint32_t>(sizeof st);
                std::memcpy(stats, &st, sz);
                stats->structSize = sz;
            }
            return true;
        }
        static std::vector<Kept> kept;   // the engine thread's
        if (c->G && (desc.flags & WXL_VK_REPLAY_PRESKIN) && g_skinReservedSerial != wxlvk::native::present::Serial())   // Claude ANIM1
        {
            g_skinReservedSerial = wxlvk::native::present::Serial();
            skin::Reserve();
        }
        Walk(*c, kept, nullptr);
        RecordViews(*c, kept);
        wxlvk::vk::pipelines::InvalidateBindings();
        Merge(*c);
        if (stats)
        {
            const uint32_t sz = stats->structSize < sizeof c->st ? stats->structSize : static_cast<uint32_t>(sizeof c->st);
            std::memcpy(stats, &c->st, sz);
            stats->structSize = sz;
        }
        return true;
    }

    void LogStats()
    {
        Stats cs;
        GetStats(cs);
        uint32_t built = 0, failed = 0;
        shadowpipes::Counts(built, failed);
        if (!cs.taken && !g.replays) return;
        wxl::ScriptMgr::Log(WXL_LOG_INFO,
                            "capture: %llu frame(s) captured, %llu draw(s) (%u last frame, %llu past the table, %llu movers); "
                            "%llu replay(s) (%llu several-view pass(es) among them): %llu draw(s), %llu alpha-tested, %llu skipped, "
                            "%llu culled by their bounds, %llu refused; shadow pipelines %u built, %u failed",
                            static_cast<unsigned long long>(cs.frames), static_cast<unsigned long long>(cs.taken),
                            cs.lastFrame, static_cast<unsigned long long>(cs.overflow), static_cast<unsigned long long>(cs.movers),
                            static_cast<unsigned long long>(g.replays), static_cast<unsigned long long>(g.multi),
                            static_cast<unsigned long long>(g.drawn),
                            static_cast<unsigned long long>(g.alpha), static_cast<unsigned long long>(g.skipped),
                            static_cast<unsigned long long>(g.culled), static_cast<unsigned long long>(g.refused), built, failed);
    }
}
