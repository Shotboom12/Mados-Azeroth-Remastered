// The shadow replay's pipelines: one per captured pipeline entry (and alpha test), depth only.
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

#include "capture/ShadowPipelines.hpp"

#include "capture/ShadowPass.hpp"
#include "vulkan/Context.hpp"
#include "vulkan/Pipelines.hpp"
#include "vulkan/Shaders.hpp"

#include "wxl/Script.hpp"

namespace
{
    namespace context   = wxlvk::vk::context;
    namespace pipelines = wxlvk::vk::pipelines;
    using wxlvk::capture::shadowpipes::Pipe;

    /// An open-addressed table over (entry << 1 | alphaTest): a zone has a few hundred entries.
    constexpr uint32_t kSlots = 4096;

    struct Slot
    {
        uint32_t key    = 0xFFFFFFFFu;
        Pipe     pipe;
        bool     failed = false;
    };

    struct State
    {
        VkDevice device = nullptr;
        Slot     slots[kSlots];
        uint32_t built  = 0;
        uint32_t failed = 0;
        bool     full   = false;
    };
    State g;

    VkPipeline Build(const pipelines::ShadowSource& src, VkRenderPass pass, const context::Handles& h,
                     VkCullModeFlags cullMode = VK_CULL_MODE_NONE, VkFrontFace frontFace = VK_FRONT_FACE_COUNTER_CLOCKWISE,
                     uint32_t viewports = 1)
    {
        namespace shaders = wxlvk::vk::shaders;
        const VkShaderModule vert = shaders::GetPath(src.vertPath);
        const VkShaderModule frag = src.fragPath[0] ? shaders::GetPath(src.fragPath) : VK_NULL_HANDLE;
        if (vert == VK_NULL_HANDLE || (src.fragPath[0] && frag == VK_NULL_HANDLE)) return VK_NULL_HANDLE;
        VkPipelineShaderStageCreateInfo stages[2] = {};
        stages[0].sType  = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
        stages[0].stage  = VK_SHADER_STAGE_VERTEX_BIT;
        stages[0].module = vert;
        stages[0].pName  = "main";
        stages[1]        = stages[0];
        stages[1].stage  = VK_SHADER_STAGE_FRAGMENT_BIT;
        stages[1].module = frag;

        VkPipelineVertexInputStateCreateInfo input = {};
        input.sType                           = VK_STRUCTURE_TYPE_PIPELINE_VERTEX_INPUT_STATE_CREATE_INFO;
        input.vertexBindingDescriptionCount   = src.bindingCount;
        input.pVertexBindingDescriptions      = src.bindings;
        input.vertexAttributeDescriptionCount = src.attrCount;
        input.pVertexAttributeDescriptions    = src.attrs;
        // Claude CUBES1: the multi-faces variant's per-instance stream: the matrix's 4 columns (locations 28..31) and the
        // viewport index (27), as shadowmvgen.py declares them.
        VkVertexInputBindingDescription   binds[5];
        VkVertexInputAttributeDescription attrs[16 + 5];
        if (viewports > 1)
        {
            for (uint32_t i = 0; i < src.bindingCount; ++i) binds[i] = src.bindings[i];
            for (uint32_t i = 0; i < src.attrCount; ++i) attrs[i] = src.attrs[i];
            binds[src.bindingCount] = { wxlvk::capture::shadowpipes::kMultiBinding, wxlvk::capture::shadowpipes::kMultiStride,
                                        VK_VERTEX_INPUT_RATE_INSTANCE };
            for (uint32_t c = 0; c < 4; ++c)
                attrs[src.attrCount + c] = { 28 + c, wxlvk::capture::shadowpipes::kMultiBinding, VK_FORMAT_R32G32B32A32_SFLOAT, 16 * c };
            attrs[src.attrCount + 4] = { 27, wxlvk::capture::shadowpipes::kMultiBinding, VK_FORMAT_R32_SINT, 64 };
            input.vertexBindingDescriptionCount   = src.bindingCount + 1;
            input.pVertexBindingDescriptions      = binds;
            input.vertexAttributeDescriptionCount = src.attrCount + 5;
            input.pVertexAttributeDescriptions    = attrs;
        }
        VkPipelineInputAssemblyStateCreateInfo assembly = {};
        assembly.sType    = VK_STRUCTURE_TYPE_PIPELINE_INPUT_ASSEMBLY_STATE_CREATE_INFO;
        assembly.topology = src.topology;
        VkPipelineViewportStateCreateInfo viewport = {};
        viewport.sType         = VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_STATE_CREATE_INFO;
        viewport.viewportCount = viewports;   // Claude CUBES1: the multi-faces variant's, MultiViewports()
        viewport.scissorCount  = viewports;
        VkPipelineRasterizationStateCreateInfo raster = {};
        raster.sType           = VK_STRUCTURE_TYPE_PIPELINE_RASTERIZATION_STATE_CREATE_INFO;
        raster.polygonMode     = VK_POLYGON_MODE_FILL;
        raster.cullMode        = cullMode;    // Claude LV25: NONE unless WXL_VK_REPLAY_OWN_CULL (the entry's own)
        raster.frontFace       = frontFace;
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
        info.stageCount          = frag != VK_NULL_HANDLE ? 2u : 1u;
        info.pStages             = stages;
        info.pVertexInputState   = &input;
        info.pInputAssemblyState = &assembly;
        info.pViewportState      = &viewport;
        info.pRasterizationState = &raster;
        info.pMultisampleState   = &multisample;
        info.pDepthStencilState  = &depth;
        info.pColorBlendState    = &blend;
        info.pDynamicState       = &dynamic;
        info.layout              = src.layout;
        info.renderPass          = pass;
        info.basePipelineIndex   = -1;
        VkPipeline pipe = VK_NULL_HANDLE;
        if (h.dapi->CreateGraphicsPipelines(h.device, pipelines::PipelineCache(), 1, &info, nullptr, &pipe) != VK_SUCCESS)
            return VK_NULL_HANDLE;
        return pipe;
    }

    Slot* Find(uint32_t key, bool insert)
    {
        uint32_t i = (key * 2654435761u) & (kSlots - 1);
        for (uint32_t probe = 0; probe < kSlots; ++probe, i = (i + 1) & (kSlots - 1))
        {
            if (g.slots[i].key == key) return &g.slots[i];
            if (g.slots[i].key == 0xFFFFFFFFu) return insert ? &g.slots[i] : nullptr;
        }
        return nullptr;
    }

    void Fill(Slot& slot, uint32_t entry, bool alphaTest, uint32_t cull, const context::Handles& h, uint32_t viewports)
    {
        pipelines::ShadowSource src;
        const VkRenderPass pass = wxlvk::capture::shadowpass::Get();
        if (pass == VK_NULL_HANDLE || !pipelines::ShadowSourceFor(entry, alphaTest, src, viewports > 1)) return;
        // Claude CUBES1: a module without its multi-faces variant has none (its draws keep the per-view path).
        if (viewports > 1 && wxlvk::vk::shaders::GetPath(src.vertPath) == VK_NULL_HANDLE) return;
        // Claude LV25: the entry's own culling (a two-sided material stays NONE); 2 reverses the front face. An entry
        // whose culling cannot be read keeps both faces.
        VkCullModeFlags mode  = VK_CULL_MODE_NONE;
        VkFrontFace     front = VK_FRONT_FACE_COUNTER_CLOCKWISE;
        if (cull != 0u && pipelines::ShadowCullFor(entry, mode, front) && cull == 2u)
            front = front == VK_FRONT_FACE_COUNTER_CLOCKWISE ? VK_FRONT_FACE_CLOCKWISE : VK_FRONT_FACE_COUNTER_CLOCKWISE;
        slot.pipe.pipeline = Build(src, pass, h, mode, front, viewports);
        slot.pipe.multi    = viewports > 1;
        slot.pipe.layout   = src.layout;
        slot.pipe.bones    = src.bones;
        slot.pipe.wind     = src.wind;
    }
}

namespace wxlvk::capture::shadowpipes
{
    uint32_t MultiViewports()
    {
        // Claude CUBES1: multi-viewport and gl_ViewportIndex from the vertex stage enabled on the device, 16 at most (the
        // usual maxViewports; a call's 32 views are two groups of 16).
        static VkDevice device = VK_NULL_HANDLE;
        static uint32_t count  = 0;
        const context::Handles* h = context::Get();
        if (!h || !h->device || !h->iapi) return 0;
        if (device != h->device)
        {
            device = h->device;
            count  = 0;
            const uint32_t need = wxlvk::vk::kCapMultiViewport | wxlvk::vk::kCapLayerFromVertex;
            if ((context::Caps().enabled & need) == need)
            {
                VkPhysicalDeviceProperties props = {};
                h->iapi->GetPhysicalDeviceProperties(h->physical, &props);
                count = props.limits.maxViewports < 16u ? props.limits.maxViewports : 16u;
                if (count < 2) count = 0;
            }
        }
        return count;
    }

    bool Get(uint32_t entry, bool alphaTest, Pipe& out, uint32_t cull, bool multiFaces)
    {
        const uint32_t viewports = multiFaces ? MultiViewports() : 1u;   // Claude CUBES1
        if (viewports == 0) return false;
        const context::Handles* h = context::Get();
        if (!h || !h->device) return false;
        if (g.device != h->device)
        {
            // A new device: the old one's pipelines are gone with it, never destroyed here.
            for (Slot& s : g.slots) s = Slot();
            g.built  = 0;
            g.failed = 0;
            g.full   = false;
            g.device = h->device;
        }
        // Claude LV25: (entry << 3 | cull << 1 | alphaTest); cull 0 keeps every pipeline the replay had before.
        if (cull > 2u) cull = 0u;
        const uint32_t key = (entry << 4) | (multiFaces ? 8u : 0u) | (cull << 1) | (alphaTest ? 1u : 0u);   // Claude CUBES1: bit 3
        Slot* slot = Find(key, true);
        if (!slot)
        {
            if (!g.full)
            {
                g.full = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN, "capture: the shadow pipeline table is full (%u); later "
                                    "casters are not replayed (logged once)", kSlots);
            }
            return false;
        }
        if (slot->key != key)
        {
            slot->key = key;
            Fill(*slot, entry, alphaTest, cull, *h, viewports);
            slot->failed = slot->pipe.pipeline == VK_NULL_HANDLE;
            if (slot->failed) ++g.failed;
            else ++g.built;
        }
        if (slot->failed) return false;
        out = slot->pipe;
        return true;
    }

    int Peek(uint32_t entry, bool alphaTest, Pipe& out, uint32_t cull, bool multiFaces, uint32_t viewports)
    {
        // Claude CPU-A: Get's lookup alone, never writing the table (the replay thread reads it while the engine thread builds none).
        if (viewports == 0) return 0;
        const context::Handles* h = context::Get();
        if (!h || !h->device) return 0;
        if (g.device != h->device) return -1;
        if (cull > 2u) cull = 0u;
        const uint32_t key = (entry << 4) | (multiFaces ? 8u : 0u) | (cull << 1) | (alphaTest ? 1u : 0u);
        const Slot* slot = Find(key, false);
        if (!slot) return g.full ? 0 : -1;   // a full table: Get finds no room either and returns false
        if (slot->failed) return 0;
        out = slot->pipe;
        return 1;
    }

    void Counts(uint32_t& built, uint32_t& failed)
    {
        built  = g.built;
        failed = g.failed;
    }
}
