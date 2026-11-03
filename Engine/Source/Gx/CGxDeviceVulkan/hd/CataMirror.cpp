// SPDX-License-Identifier: GPL-3.0-or-later
// HD: the Cata water's reflection under Vulkan, step B (see CataMirror.h). A BeforeLiquids stage, after the scene copy:
// the opaque world is complete and captured, the water not drawn yet. It records its own render pass into the frame's
// command buffer outside the world pass (as wxl's shadow replay does, src/capture/Replay.cpp) and leaves its colour in
// SHADER_READ_ONLY_OPTIMAL for the water (step C) and hdCataDebug 3.
#include "CataMirror.h"

#include <cmath>
#include <cstring>

#include "Engine/Source/Gx/GxSeam.h"
#include "capture/Capture.hpp"
#include "vulkan/Context.hpp"
#include "vulkan/Pipelines.hpp"
#include "vulkan/Shaders.hpp"
#include "wxl/Script.hpp"
#include "shaders/CataSky.frag.spv.h"
#include "shaders/CataSky.vert.spv.h"
#include "shaders/CataSkyTex.frag.spv.h"   // HD: tranche 3
#include "vulkan/Texture.hpp"

// HD: tranche 3. The native device's own lookup of an engine texture's image (src/native/Textures.cpp; declared in
// src/native/Slots.hpp, which this does not include for its windows.h).
namespace wxlvk::native::impl {
bool ResolveTexture(const void* tex, const wxlvk::vk::texture::Image*& image);
}

namespace HD::CataWater {
namespace {
namespace context = wxlvk::vk::context;
namespace pipelines = wxlvk::vk::pipelines;
using wxlvk::capture::Draw;

constexpr uint32_t kPipeSlots = 4096;            // a zone has a few hundred pipeline entries
constexpr VkFormat kColorFormat = VK_FORMAT_R8G8B8A8_UNORM;
constexpr VkFormat kDepthFormat = VK_FORMAT_D32_SFLOAT;
constexpr double kClipBias = 0.05;               // yards under the water still mirrored: no gap along the shores

bool Invert(const double m[16], double out[16]) {
    double a[4][8];
    for (int r = 0; r < 4; ++r)
        for (int c = 0; c < 4; ++c) {
            a[r][c] = m[r * 4 + c];
            a[r][c + 4] = r == c ? 1.0 : 0.0;
        }
    for (int col = 0; col < 4; ++col) {
        int pivot = col;
        for (int r = col + 1; r < 4; ++r)
            if (std::fabs(a[r][col]) > std::fabs(a[pivot][col])) pivot = r;
        if (std::fabs(a[pivot][col]) < 1e-30) return false;
        for (int c = 0; c < 8; ++c) std::swap(a[col][c], a[pivot][c]);
        const double inv = 1.0 / a[col][col];
        for (int c = 0; c < 8; ++c) a[col][c] *= inv;
        for (int r = 0; r < 4; ++r) {
            if (r == col) continue;
            const double f = a[r][col];
            for (int c = 0; c < 8; ++c) a[r][c] -= f * a[col][c];
        }
    }
    for (int r = 0; r < 4; ++r)
        for (int c = 0; c < 4; ++c) out[r * 4 + c] = a[r][c + 4];
    return true;
}

void Mul(const double a[16], const double b[16], double out[16]) {
    double t[16];
    for (int r = 0; r < 4; ++r)
        for (int c = 0; c < 4; ++c) {
            double s = 0.0;
            for (int k = 0; k < 4; ++k) s += a[r * 4 + k] * b[k * 4 + c];
            t[r * 4 + c] = s;
        }
    std::memcpy(out, t, sizeof t);
}
}

bool Mirror::Initialize(const WXL_VkRenderApi* api) {
    const context::Handles* h = context::Get();
    if (api_ || !api || !api->GetDeviceInfo || !api->CreateImage || !api->RetireImage || !api->RegisterStage ||
        !api->UnregisterStage || !api->RequestDrawCapture || !h || !h->dapi) {
        error_ = "mirror: API missing, or already initialized";
        return false;
    }
    device_.structSize = sizeof device_;
    if (!api->GetDeviceInfo(&device_) || !device_.device || !device_.frameSlots || device_.frameSlots > 8) {
        error_ = "mirror: device unavailable";
        return false;
    }
    api_ = api;
    const wxlvk::vk::loader::Device& d = *h->dapi;

    // One pass: the colour cleared and kept for sampling, the depth our own (never the scene's).
    VkAttachmentDescription att[2] = {};
    att[0].format = kColorFormat;
    att[0].samples = VK_SAMPLE_COUNT_1_BIT;
    att[0].loadOp = VK_ATTACHMENT_LOAD_OP_CLEAR;
    att[0].storeOp = VK_ATTACHMENT_STORE_OP_STORE;
    att[0].stencilLoadOp = VK_ATTACHMENT_LOAD_OP_DONT_CARE;
    att[0].stencilStoreOp = VK_ATTACHMENT_STORE_OP_DONT_CARE;
    att[0].initialLayout = VK_IMAGE_LAYOUT_UNDEFINED;
    att[0].finalLayout = VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;
    att[1] = att[0];
    att[1].format = kDepthFormat;
    att[1].storeOp = VK_ATTACHMENT_STORE_OP_DONT_CARE;
    att[1].finalLayout = VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL;
    VkAttachmentReference colorRef{0, VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL};
    VkAttachmentReference depthRef{1, VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL};
    VkSubpassDescription sub = {};
    sub.pipelineBindPoint = VK_PIPELINE_BIND_POINT_GRAPHICS;
    sub.colorAttachmentCount = 1;
    sub.pColorAttachments = &colorRef;
    sub.pDepthStencilAttachment = &depthRef;
    VkSubpassDependency dep[2] = {};
    // Before: the previous reading of this slot's colour (a fragment or compute read) is done before the clear.
    dep[0].srcSubpass = VK_SUBPASS_EXTERNAL;
    dep[0].dstSubpass = 0;
    dep[0].srcStageMask = VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT | VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT;
    dep[0].dstStageMask = VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT | VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT;
    dep[0].srcAccessMask = 0;
    dep[0].dstAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT | VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;
    // After: the water's fragments and the debug view's compute read the colour.
    dep[1].srcSubpass = 0;
    dep[1].dstSubpass = VK_SUBPASS_EXTERNAL;
    dep[1].srcStageMask = VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT;
    dep[1].dstStageMask = VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT | VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT;
    dep[1].srcAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;
    dep[1].dstAccessMask = VK_ACCESS_SHADER_READ_BIT;
    VkRenderPassCreateInfo rp = {};
    rp.sType = VK_STRUCTURE_TYPE_RENDER_PASS_CREATE_INFO;
    rp.attachmentCount = 2;
    rp.pAttachments = att;
    rp.subpassCount = 1;
    rp.pSubpasses = &sub;
    rp.dependencyCount = 2;
    rp.pDependencies = dep;
    if (d.CreateRenderPass(device_.device, &rp, nullptr, &pass_) != VK_SUCCESS) {
        error_ = "mirror: render pass";
        api_ = nullptr;
        return false;
    }
    // The sky alone: the same colour attachment, no depth.
    sub.pDepthStencilAttachment = nullptr;
    rp.attachmentCount = 1;
    if (d.CreateRenderPass(device_.device, &rp, nullptr, &skyPass_) != VK_SUCCESS) skyPass_ = VK_NULL_HANDLE;
    if (!SkyPipelines())
        wxl::ScriptMgr::Log(WXL_LOG_WARN, "cata water: the sky in the reflections is not available (its pipelines failed)");
    slots_.assign(device_.frameSlots, Slot());
    pipes_.assign(kPipeSlots, Pipe());

    WXL_VkStageDesc stage{};
    stage.structSize = sizeof stage;
    stage.user = this;
    stage.point = WXL_VK_POINT_BEFORE_LIQUIDS;
    stage.order = 10010;   // after CataWater.SceneCapture (10000): the copy is the scene without the mirror's work
    stage.flags = 0;       // its own pass: neither the frame's colour nor its depth
    stage.Wanted = Wanted;
    stage.Run = Run;
    registration_ = api_->RegisterStage(&stage, "CataWater.Mirror");
    if (!registration_) {
        StopAndDestroy();
        error_ = "mirror: BeforeLiquids stage refused";
        return false;
    }
    error_ = "";
    return true;
}

void Mirror::Enable(bool enabled) {
    if (!api_ || enabled == enabled_) return;
    enabled_ = enabled;
    g_gxCataPlane.m_wanted = enabled ? 1 : 0;   // the engine chooses a plane and widens its culling from now on
    api_->RequestDrawCapture(enabled ? 1 : 0);
}

int __cdecl Mirror::Wanted(void* self) {
    Mirror* m = static_cast<Mirror*>(self);
    if (!m->enabled_) return 0;
    if (!g_gxCataPlane.m_valid) ++m->stats_.noPlane;   // the sky alone is still drawn
    return 1;
}

void __cdecl Mirror::Run(void* self, const WXL_VkStageContext* ctx) {
    if (ctx) static_cast<Mirror*>(self)->Record(*ctx);
}

void Mirror::Retire(Slot& s) {
    const context::Handles* h = context::Get();
    // The framebuffer: its last frame is complete when the slot comes round again (Record checks), or the device idles
    // (StopAndDestroy).
    if (s.framebuffer && h && h->dapi) h->dapi->DestroyFramebuffer(device_.device, s.framebuffer, nullptr);
    if (s.skyFramebuffer && h && h->dapi) h->dapi->DestroyFramebuffer(device_.device, s.skyFramebuffer, nullptr);
    if (s.skyHandle) api_->RetireImage(s.skyHandle, s.lastSerial);
    if (s.colorHandle) api_->RetireImage(s.colorHandle, s.lastSerial);
    if (s.depthHandle) api_->RetireImage(s.depthHandle, s.lastSerial);
    s = Slot();
}

bool Mirror::Targets(Slot& slot, VkExtent2D extent) {
    if (slot.framebuffer && slot.extent.width == extent.width && slot.extent.height == extent.height) return true;
    Retire(slot);
    WXL_VkImageDesc desc{};
    desc.width = extent.width;
    desc.height = extent.height;
    desc.mipLevels = 1;
    desc.format = kColorFormat;
    desc.usage = VK_IMAGE_USAGE_COLOR_ATTACHMENT_BIT | VK_IMAGE_USAGE_SAMPLED_BIT;
    desc.aspect = VK_IMAGE_ASPECT_COLOR_BIT;
    slot.colorHandle = api_->CreateImage(&desc, &slot.color);
    desc.format = kDepthFormat;
    desc.usage = VK_IMAGE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT;
    desc.aspect = VK_IMAGE_ASPECT_DEPTH_BIT;
    slot.depthHandle = api_->CreateImage(&desc, &slot.depth);
    const context::Handles* h = context::Get();
    if (!slot.colorHandle || !slot.depthHandle || !h || !h->dapi) {
        Retire(slot);
        error_ = "mirror: target allocation failed";
        return false;
    }
    const VkImageView views[2] = {slot.color.view, slot.depth.view};
    VkFramebufferCreateInfo fb = {};
    fb.sType = VK_STRUCTURE_TYPE_FRAMEBUFFER_CREATE_INFO;
    fb.renderPass = pass_;
    fb.attachmentCount = 2;
    fb.pAttachments = views;
    fb.width = extent.width;
    fb.height = extent.height;
    fb.layers = 1;
    if (h->dapi->CreateFramebuffer(device_.device, &fb, nullptr, &slot.framebuffer) != VK_SUCCESS) {
        slot.framebuffer = VK_NULL_HANDLE;
        Retire(slot);
        error_ = "mirror: framebuffer";
        return false;
    }
    // The sky alone (no pass, no sky).
    if (skyPass_) {
        desc.format = kColorFormat;
        desc.usage = VK_IMAGE_USAGE_COLOR_ATTACHMENT_BIT | VK_IMAGE_USAGE_SAMPLED_BIT;
        desc.aspect = VK_IMAGE_ASPECT_COLOR_BIT;
        slot.skyHandle = api_->CreateImage(&desc, &slot.sky);
        fb.renderPass = skyPass_;
        fb.attachmentCount = 1;
        fb.pAttachments = &slot.sky.view;
        if (!slot.skyHandle || h->dapi->CreateFramebuffer(device_.device, &fb, nullptr, &slot.skyFramebuffer) != VK_SUCCESS)
            slot.skyFramebuffer = VK_NULL_HANDLE;
    }
    slot.extent = extent;
    return true;
}

bool Mirror::SkyPipelines() {
    const context::Handles* h = context::Get();
    if (!h || !h->dapi || !pass_ || !skyPass_) return false;
    const wxlvk::vk::loader::Device& d = *h->dapi;
    VkShaderModuleCreateInfo module = {};
    module.sType = VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO;
    module.codeSize = sizeof kCataSkyVertSpv;
    module.pCode = kCataSkyVertSpv;
    if (d.CreateShaderModule(device_.device, &module, nullptr, &skyVert_) != VK_SUCCESS) return false;
    module.codeSize = sizeof kCataSkyFragSpv;
    module.pCode = kCataSkyFragSpv;
    if (d.CreateShaderModule(device_.device, &module, nullptr, &skyFrag_) != VK_SUCCESS) return false;
    VkPushConstantRange range = {VK_SHADER_STAGE_FRAGMENT_BIT, 0, sizeof(SkyPush)};
    VkPipelineLayoutCreateInfo layout = {};
    layout.sType = VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO;
    layout.pushConstantRangeCount = 1;
    layout.pPushConstantRanges = &range;
    if (d.CreatePipelineLayout(device_.device, &layout, nullptr, &skyLayout_) != VK_SUCCESS) return false;

    VkPipelineShaderStageCreateInfo stages[2] = {};
    stages[0].sType = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
    stages[0].stage = VK_SHADER_STAGE_VERTEX_BIT;
    stages[0].module = skyVert_;
    stages[0].pName = "main";
    stages[1] = stages[0];
    stages[1].stage = VK_SHADER_STAGE_FRAGMENT_BIT;
    stages[1].module = skyFrag_;
    VkPipelineVertexInputStateCreateInfo input = {};
    input.sType = VK_STRUCTURE_TYPE_PIPELINE_VERTEX_INPUT_STATE_CREATE_INFO;
    VkPipelineInputAssemblyStateCreateInfo assembly = {};
    assembly.sType = VK_STRUCTURE_TYPE_PIPELINE_INPUT_ASSEMBLY_STATE_CREATE_INFO;
    assembly.topology = VK_PRIMITIVE_TOPOLOGY_TRIANGLE_LIST;
    VkPipelineViewportStateCreateInfo viewport = {};
    viewport.sType = VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_STATE_CREATE_INFO;
    viewport.viewportCount = 1;
    viewport.scissorCount = 1;
    VkPipelineRasterizationStateCreateInfo raster = {};
    raster.sType = VK_STRUCTURE_TYPE_PIPELINE_RASTERIZATION_STATE_CREATE_INFO;
    raster.polygonMode = VK_POLYGON_MODE_FILL;
    raster.cullMode = VK_CULL_MODE_NONE;
    raster.frontFace = VK_FRONT_FACE_COUNTER_CLOCKWISE;
    raster.lineWidth = 1.0f;
    VkPipelineMultisampleStateCreateInfo multisample = {};
    multisample.sType = VK_STRUCTURE_TYPE_PIPELINE_MULTISAMPLE_STATE_CREATE_INFO;
    multisample.rasterizationSamples = VK_SAMPLE_COUNT_1_BIT;
    VkPipelineDepthStencilStateCreateInfo depth = {};   // the sky neither tests nor writes the mirror's depth
    depth.sType = VK_STRUCTURE_TYPE_PIPELINE_DEPTH_STENCIL_STATE_CREATE_INFO;
    depth.depthCompareOp = VK_COMPARE_OP_ALWAYS;
    depth.maxDepthBounds = 1.0f;
    VkPipelineColorBlendAttachmentState attachment = {};
    attachment.colorWriteMask = VK_COLOR_COMPONENT_R_BIT | VK_COLOR_COMPONENT_G_BIT | VK_COLOR_COMPONENT_B_BIT | VK_COLOR_COMPONENT_A_BIT;
    VkPipelineColorBlendStateCreateInfo blend = {};
    blend.sType = VK_STRUCTURE_TYPE_PIPELINE_COLOR_BLEND_STATE_CREATE_INFO;
    blend.attachmentCount = 1;
    blend.pAttachments = &attachment;
    const VkDynamicState dynamics[2] = {VK_DYNAMIC_STATE_VIEWPORT, VK_DYNAMIC_STATE_SCISSOR};
    VkPipelineDynamicStateCreateInfo dynamic = {};
    dynamic.sType = VK_STRUCTURE_TYPE_PIPELINE_DYNAMIC_STATE_CREATE_INFO;
    dynamic.dynamicStateCount = 2;
    dynamic.pDynamicStates = dynamics;
    VkGraphicsPipelineCreateInfo info = {};
    info.sType = VK_STRUCTURE_TYPE_GRAPHICS_PIPELINE_CREATE_INFO;
    info.stageCount = 2;
    info.pStages = stages;
    info.pVertexInputState = &input;
    info.pInputAssemblyState = &assembly;
    info.pViewportState = &viewport;
    info.pRasterizationState = &raster;
    info.pMultisampleState = &multisample;
    info.pDepthStencilState = &depth;
    info.pColorBlendState = &blend;
    info.pDynamicState = &dynamic;
    info.layout = skyLayout_;
    info.renderPass = pass_;
    info.basePipelineIndex = -1;
    if (d.CreateGraphicsPipelines(device_.device, pipelines::PipelineCache(), 1, &info, nullptr, &skyUnder_) != VK_SUCCESS) {
        skyUnder_ = VK_NULL_HANDLE;
        return false;
    }
    info.renderPass = skyPass_;
    info.pDepthStencilState = nullptr;
    if (d.CreateGraphicsPipelines(device_.device, pipelines::PipelineCache(), 1, &info, nullptr, &skyAlone_) != VK_SUCCESS) {
        skyAlone_ = VK_NULL_HANDLE;
        return false;
    }
    // HD: tranche 3, optional: without them the rings stay.
    info.pDepthStencilState = &depth;
    if (!SkyTexPipelines(info))
        wxl::ScriptMgr::Log(WXL_LOG_WARN, "cata water: the game's sky in the reflections is not available (its pipelines failed): the rings stay");
    return true;
}

// HD: tranche 3. `base` is the rings' pipeline for pass_ (its fixed state); the fragment module, the layout and the
// render pass differ.
bool Mirror::SkyTexPipelines(const VkGraphicsPipelineCreateInfo& base) {
    const context::Handles* h = context::Get();
    if (!h || !h->dapi || slots_.size() > 8) return false;
    const wxlvk::vk::loader::Device& d = *h->dapi;
    const uint32_t sets = device_.frameSlots;
    VkShaderModuleCreateInfo module = {};
    module.sType = VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO;
    module.codeSize = sizeof kCataSkyTexFragSpv;
    module.pCode = kCataSkyTexFragSpv;
    if (d.CreateShaderModule(device_.device, &module, nullptr, &skyTexFrag_) != VK_SUCCESS) return false;
    VkDescriptorSetLayoutBinding binding = {};
    binding.binding = 0;
    binding.descriptorType = VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;
    binding.descriptorCount = 1;
    binding.stageFlags = VK_SHADER_STAGE_FRAGMENT_BIT;
    VkDescriptorSetLayoutCreateInfo setLayout = {};
    setLayout.sType = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO;
    setLayout.bindingCount = 1;
    setLayout.pBindings = &binding;
    if (d.CreateDescriptorSetLayout(device_.device, &setLayout, nullptr, &skyTexSetLayout_) != VK_SUCCESS) return false;
    VkPushConstantRange range = {VK_SHADER_STAGE_FRAGMENT_BIT, 0, 16};
    VkPipelineLayoutCreateInfo layout = {};
    layout.sType = VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO;
    layout.setLayoutCount = 1;
    layout.pSetLayouts = &skyTexSetLayout_;
    layout.pushConstantRangeCount = 1;
    layout.pPushConstantRanges = &range;
    if (d.CreatePipelineLayout(device_.device, &layout, nullptr, &skyTexLayout_) != VK_SUCCESS) return false;
    VkSamplerCreateInfo sampler = {};
    sampler.sType = VK_STRUCTURE_TYPE_SAMPLER_CREATE_INFO;
    sampler.magFilter = sampler.minFilter = VK_FILTER_LINEAR;
    sampler.mipmapMode = VK_SAMPLER_MIPMAP_MODE_NEAREST;
    sampler.addressModeU = sampler.addressModeV = sampler.addressModeW = VK_SAMPLER_ADDRESS_MODE_CLAMP_TO_EDGE;
    if (d.CreateSampler(device_.device, &sampler, nullptr, &skyTexSampler_) != VK_SUCCESS) return false;
    VkDescriptorPoolSize size = {VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER, sets};
    VkDescriptorPoolCreateInfo pool = {};
    pool.sType = VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO;
    pool.maxSets = sets;
    pool.poolSizeCount = 1;
    pool.pPoolSizes = &size;
    if (d.CreateDescriptorPool(device_.device, &pool, nullptr, &skyTexPool_) != VK_SUCCESS) return false;
    std::vector<VkDescriptorSetLayout> layouts(sets, skyTexSetLayout_);
    skyTexSets_.assign(sets, VK_NULL_HANDLE);
    VkDescriptorSetAllocateInfo allocate = {};
    allocate.sType = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO;
    allocate.descriptorPool = skyTexPool_;
    allocate.descriptorSetCount = sets;
    allocate.pSetLayouts = layouts.data();
    if (d.AllocateDescriptorSets(device_.device, &allocate, skyTexSets_.data()) != VK_SUCCESS) {
        skyTexSets_.clear();
        return false;
    }
    VkPipelineShaderStageCreateInfo stages[2] = {base.pStages[0], base.pStages[1]};
    stages[1].module = skyTexFrag_;
    VkGraphicsPipelineCreateInfo info = base;
    info.pStages = stages;
    info.layout = skyTexLayout_;
    info.renderPass = pass_;
    if (d.CreateGraphicsPipelines(device_.device, pipelines::PipelineCache(), 1, &info, nullptr, &skyTexUnder_) != VK_SUCCESS) {
        skyTexUnder_ = VK_NULL_HANDLE;
        return false;
    }
    info.renderPass = skyPass_;
    info.pDepthStencilState = nullptr;
    if (d.CreateGraphicsPipelines(device_.device, pipelines::PipelineCache(), 1, &info, nullptr, &skyTexAlone_) != VK_SUCCESS) {
        skyTexAlone_ = VK_NULL_HANDLE;
        return false;
    }
    return true;
}

void Mirror::DrawSkyTex(VkCommandBuffer cmd, VkPipeline pipeline, VkDescriptorSet set, VkExtent2D extent) {
    const wxlvk::vk::loader::Device& d = *context::Get()->dapi;
    const float push[4] = {1.0f / static_cast<float>(extent.width), 1.0f / static_cast<float>(extent.height), 0.0f, 0.0f};
    d.CmdBindPipeline(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, pipeline);
    d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, skyTexLayout_, 0, 1, &set, 0, nullptr);
    d.CmdPushConstants(cmd, skyTexLayout_, VK_SHADER_STAGE_FRAGMENT_BIT, 0, sizeof push, push);
    d.CmdDraw(cmd, 3, 1, 0, 0);
}

// The sky's constants for a target of `extent` pixels aligned with the screen: for a pixel (x, y), its D3D NDC
// (2x / w - 1, 1 - 2y / h: the device's shaders flip y, Sources.cpp), the view ray through it (the inverse
// projection), turned into the world's axes (the view's rotation, transposed). Linear in x and y: the projection's
// w does not depend on them.
bool Mirror::SkyConstants(const WXL_VkSceneConstants& scene, VkExtent2D extent, SkyPush& out) const {
    const GxCataSky& sky = g_gxCataSky;
    if (sky.m_count < 2 || sky.m_count > 8 || !extent.width || !extent.height) return false;
    double P[16], iP[16];
    for (int i = 0; i < 16; ++i) P[i] = scene.projection[i];
    if (!Invert(P, iP)) return false;
    auto ray = [&](double px, double py, double outRay[3]) {
        const double v[4] = {px * 2.0 / extent.width - 1.0, 1.0 - py * 2.0 / extent.height, 0.5, 1.0};
        double hv[4];
        for (int c = 0; c < 4; ++c) hv[c] = v[0] * iP[c] + v[1] * iP[4 + c] + v[2] * iP[8 + c] + v[3] * iP[12 + c];
        if (!(std::fabs(hv[3]) > 1e-12)) return false;
        for (int j = 0; j < 3; ++j)
            outRay[j] = (hv[0] * scene.view[j * 4 + 0] + hv[1] * scene.view[j * 4 + 1] + hv[2] * scene.view[j * 4 + 2]) / hv[3];
        return true;
    };
    double o[3], x[3], y[3];
    if (!ray(0.0, 0.0, o) || !ray(1.0, 0.0, x) || !ray(0.0, 1.0, y)) return false;
    for (int j = 0; j < 3; ++j) {
        out.rayO[j] = static_cast<float>(o[j]);
        out.rayX[j] = static_cast<float>(x[j] - o[j]);
        out.rayY[j] = static_cast<float>(y[j] - o[j]);
        if (!std::isfinite(out.rayO[j]) || !std::isfinite(out.rayX[j]) || !std::isfinite(out.rayY[j])) return false;
    }
    out.rayX[3] = static_cast<float>(sky.m_count);
    out.rayY[3] = out.rayO[3] = 0.0f;
    for (uint32_t i = 0; i < 8; ++i) {
        out.sinElevation[i] = i < sky.m_count ? sky.m_sinElevation[i] : -2.0f;
        out.color[i] = i < sky.m_count ? sky.m_color[i] : 0u;
    }
    return true;
}

void Mirror::DrawSky(VkCommandBuffer cmd, VkPipeline pipeline, const SkyPush& push) {
    const wxlvk::vk::loader::Device& d = *context::Get()->dapi;
    d.CmdBindPipeline(cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, pipeline);
    d.CmdPushConstants(cmd, skyLayout_, VK_SHADER_STAGE_FRAGMENT_BIT, 0, sizeof push, &push);
    d.CmdDraw(cmd, 3, 1, 0, 0);
}

const Mirror::Pipe* Mirror::PipeFor(uint32_t entry) {
    uint32_t i = (entry * 2654435761u) & (kPipeSlots - 1);
    for (uint32_t probe = 0; probe < kPipeSlots; ++probe, i = (i + 1) & (kPipeSlots - 1)) {
        Pipe& p = pipes_[i];
        if (p.entry == entry) return p.failed ? nullptr : &p;
        if (p.entry != 0xFFFFFFFFu) continue;
        // First use of this entry: build it.
        p.entry = entry;
        p.failed = true;
        const context::Handles* h = context::Get();
        pipelines::MirrorSource src;
        if (!h || !h->dapi || !pipelines::MirrorSourceFor(entry, src)) {
            ++stats_.failedPipelines;
            return nullptr;
        }
        namespace shaders = wxlvk::vk::shaders;
        const VkShaderModule vert = shaders::GetPath(src.base.vertPath);
        const VkShaderModule frag = shaders::GetPath(src.fragPath);
        if (vert == VK_NULL_HANDLE || frag == VK_NULL_HANDLE) {
            ++stats_.failedPipelines;
            return nullptr;
        }
        VkPipelineShaderStageCreateInfo stages[2] = {};
        stages[0].sType = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
        stages[0].stage = VK_SHADER_STAGE_VERTEX_BIT;
        stages[0].module = vert;
        stages[0].pName = "main";
        stages[1] = stages[0];
        stages[1].stage = VK_SHADER_STAGE_FRAGMENT_BIT;
        stages[1].module = frag;
        VkPipelineVertexInputStateCreateInfo input = {};
        input.sType = VK_STRUCTURE_TYPE_PIPELINE_VERTEX_INPUT_STATE_CREATE_INFO;
        input.vertexBindingDescriptionCount = src.base.bindingCount;
        input.pVertexBindingDescriptions = src.base.bindings;
        input.vertexAttributeDescriptionCount = src.base.attrCount;
        input.pVertexAttributeDescriptions = src.base.attrs;
        VkPipelineInputAssemblyStateCreateInfo assembly = {};
        assembly.sType = VK_STRUCTURE_TYPE_PIPELINE_INPUT_ASSEMBLY_STATE_CREATE_INFO;
        assembly.topology = src.base.topology;
        VkPipelineViewportStateCreateInfo viewport = {};
        viewport.sType = VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_STATE_CREATE_INFO;
        viewport.viewportCount = 1;
        viewport.scissorCount = 1;
        VkPipelineRasterizationStateCreateInfo raster = {};
        raster.sType = VK_STRUCTURE_TYPE_PIPELINE_RASTERIZATION_STATE_CREATE_INFO;
        raster.polygonMode = VK_POLYGON_MODE_FILL;
        raster.cullMode = src.cullMode;
        raster.frontFace = src.frontFace;
        raster.lineWidth = 1.0f;
        VkPipelineMultisampleStateCreateInfo multisample = {};
        multisample.sType = VK_STRUCTURE_TYPE_PIPELINE_MULTISAMPLE_STATE_CREATE_INFO;
        multisample.rasterizationSamples = VK_SAMPLE_COUNT_1_BIT;
        VkPipelineDepthStencilStateCreateInfo depth = {};
        depth.sType = VK_STRUCTURE_TYPE_PIPELINE_DEPTH_STENCIL_STATE_CREATE_INFO;
        depth.depthTestEnable = src.depthTest;
        depth.depthWriteEnable = src.depthWrite;
        depth.depthCompareOp = src.depthOp;
        depth.maxDepthBounds = 1.0f;
        VkPipelineColorBlendStateCreateInfo blend = {};
        blend.sType = VK_STRUCTURE_TYPE_PIPELINE_COLOR_BLEND_STATE_CREATE_INFO;
        blend.attachmentCount = 1;
        blend.pAttachments = &src.blend;
        const VkDynamicState dynamics[2] = {VK_DYNAMIC_STATE_VIEWPORT, VK_DYNAMIC_STATE_SCISSOR};
        VkPipelineDynamicStateCreateInfo dynamic = {};
        dynamic.sType = VK_STRUCTURE_TYPE_PIPELINE_DYNAMIC_STATE_CREATE_INFO;
        dynamic.dynamicStateCount = 2;
        dynamic.pDynamicStates = dynamics;
        VkGraphicsPipelineCreateInfo info = {};
        info.sType = VK_STRUCTURE_TYPE_GRAPHICS_PIPELINE_CREATE_INFO;
        info.stageCount = 2;
        info.pStages = stages;
        info.pVertexInputState = &input;
        info.pInputAssemblyState = &assembly;
        info.pViewportState = &viewport;
        info.pRasterizationState = &raster;
        info.pMultisampleState = &multisample;
        info.pDepthStencilState = &depth;
        info.pColorBlendState = &blend;
        info.pDynamicState = &dynamic;
        info.layout = src.base.layout;
        info.renderPass = pass_;
        info.basePipelineIndex = -1;
        if (h->dapi->CreateGraphicsPipelines(device_.device, pipelines::PipelineCache(), 1, &info, nullptr, &p.pipeline) != VK_SUCCESS) {
            p.pipeline = VK_NULL_HANDLE;
            ++stats_.failedPipelines;
            return nullptr;
        }
        p.layout = src.base.layout;
        p.bones = src.base.bones;
        p.wind = src.base.wind;
        p.failed = false;
        ++stats_.pipelines;
        return &p;
    }
    return nullptr;   // the table is full: later entries are not mirrored
}

// main clip -> view (the inverse projection) -> the view mirrored in the water plane -> an oblique projection whose
// near plane is the water (Lengyel's, for D3D's 0..1 depth). Row vectors, as the engine's matrices. In VIEW space only:
// the world's coordinates never enter, so the float rounding is that of a view-space product.
bool Mirror::Matrix(const WXL_VkSceneConstants& scene, float height, float out[16]) const {
    double V[16], P[16];
    for (int i = 0; i < 16; ++i) {
        V[i] = scene.view[i];
        P[i] = scene.projection[i];
    }
    // The world's up in view space: row 2 of the view's rotation (e_z times the matrix).
    double n[3] = {V[8], V[9], V[10]};
    const double len = std::sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    if (!(len > 1e-6)) return false;
    for (double& x : n) x /= len;
    const double dh = static_cast<double>(g_gxCataPlane.m_eyeZ) - height;   // the eye above the water
    if (!(dh > kClipBias * 2.0)) return false;
    // p' = p - 2 (p.n + dh) n
    double R[16] = {};
    for (int i = 0; i < 3; ++i)
        for (int j = 0; j < 3; ++j) R[i * 4 + j] = (i == j ? 1.0 : 0.0) - 2.0 * n[i] * n[j];
    for (int j = 0; j < 3; ++j) R[12 + j] = -2.0 * dh * n[j];
    R[15] = 1.0;
    // Keep the mirrored points at or under the plane (the world above the water): -p'.n - dh + bias >= 0.
    const double C[4] = {-n[0], -n[1], -n[2], kClipBias - dh};
    double iP[16];
    if (!Invert(P, iP)) return false;
    double Cc[4];   // the plane in clip space: inverse(P) C
    for (int r = 0; r < 4; ++r) Cc[r] = iP[r * 4 + 0] * C[0] + iP[r * 4 + 1] * C[1] + iP[r * 4 + 2] * C[2] + iP[r * 4 + 3] * C[3];
    const double qc[4] = {Cc[0] >= 0.0 ? 1.0 : -1.0, Cc[1] >= 0.0 ? 1.0 : -1.0, 1.0, 1.0};
    double q[4];    // the far corner opposite the plane, in view space: qc inverse(P)
    for (int c = 0; c < 4; ++c) q[c] = qc[0] * iP[0 * 4 + c] + qc[1] * iP[1 * 4 + c] + qc[2] * iP[2 * 4 + c] + qc[3] * iP[3 * 4 + c];
    const double qw = q[0] * P[0 * 4 + 3] + q[1] * P[1 * 4 + 3] + q[2] * P[2 * 4 + 3] + q[3] * P[3 * 4 + 3];
    const double qC = q[0] * C[0] + q[1] * C[1] + q[2] * C[2] + q[3] * C[3];
    if (!(std::fabs(qC) > 1e-12)) return false;
    double O[16];
    std::memcpy(O, P, sizeof O);
    for (int r = 0; r < 4; ++r) O[r * 4 + 2] = C[r] * (qw / qC);
    double M[16];
    Mul(iP, R, M);
    Mul(M, O, M);
    for (int i = 0; i < 16; ++i) {
        out[i] = static_cast<float>(M[i]);
        if (!std::isfinite(out[i])) return false;
    }
    return true;
}

void Mirror::Record(const WXL_VkStageContext& ctx) {
    const context::Handles* h = context::Get();
    if (!enabled_ || ctx.structSize < sizeof ctx || ctx.frameSlot >= slots_.size() || !ctx.cmd ||
        !ctx.sceneValid || !ctx.scene || !h || !h->dapi || ctx.extent.width < 16 || ctx.extent.height < 16) {
        return;
    }
    Slot& slot = slots_[ctx.frameSlot];
    slot.valid = false;
    if (slot.lastSerial > ctx.completedSerial) {
        error_ = "mirror: slot still in flight";
        return;
    }
    const VkExtent2D extent{(ctx.extent.width + 1) / 2, (ctx.extent.height + 1) / 2};   // half resolution, like Cata's
    if (!Targets(slot, extent)) return;
    const wxlvk::vk::loader::Device& d = *h->dapi;

    VkClearValue clear[2] = {};
    // Under the sky (and without one): the fog's colour, which is what the horizon fades to.
    clear[0].color.float32[0] = ctx.scene->fogColor[0];
    clear[0].color.float32[1] = ctx.scene->fogColor[1];
    clear[0].color.float32[2] = ctx.scene->fogColor[2];
    clear[0].color.float32[3] = 1.0f;
    clear[1].depthStencil.depth = 1.0f;
    VkViewport vp = {};
    vp.width = static_cast<float>(extent.width);
    vp.height = static_cast<float>(extent.height);
    vp.maxDepth = 1.0f;
    const VkRect2D scissor{{0, 0}, extent};
    SkyPush sky;
    bool hasSky = skyUnder_ && skyAlone_ && SkyConstants(*ctx.scene, extent, sky);
    // HD: tranche 3, the game's sky as the engine drew it mirrored this frame (in its render target, left
    // SHADER_READ_ONLY when its pass ended: src/native/Present.hpp), else the rings.
    VkDescriptorSet skyTexSet = VK_NULL_HANDLE;
    {
        const wxlvk::vk::texture::Image* rt = nullptr;
        if (g_gxCataSky.m_tex && skyTexUnder_ && skyTexAlone_ && ctx.frameSlot < skyTexSets_.size() &&
            wxlvk::native::impl::ResolveTexture(g_gxCataSky.m_tex, rt) && rt && rt->view && !rt->cube &&
            (rt->layout == VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL || rt->layout == VK_IMAGE_LAYOUT_GENERAL)) {
            skyTexSet = skyTexSets_[ctx.frameSlot];
            VkDescriptorImageInfo image = {skyTexSampler_, rt->view, rt->layout};
            VkWriteDescriptorSet write = {};
            write.sType = VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;
            write.dstSet = skyTexSet;
            write.descriptorCount = 1;
            write.descriptorType = VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;
            write.pImageInfo = &image;
            d.UpdateDescriptorSets(device_.device, 1, &write, 0, nullptr);
            hasSky = true;
            ++stats_.skyTexFrames;
            if (stats_.skyTexFrames == 1)
                wxl::ScriptMgr::Log(WXL_LOG_INFO, "cata water: the game's sky in the reflections (%ux%u, mirrored by the engine)",
                                    rt->extent.width, rt->extent.height);
        }
    }

    // The sky alone: the reflection of the water without a mirror.
    bool skyDrawn = false;
    if (hasSky && slot.skyFramebuffer) {
        VkRenderPassBeginInfo begin = {};
        begin.sType = VK_STRUCTURE_TYPE_RENDER_PASS_BEGIN_INFO;
        begin.renderPass = skyPass_;
        begin.framebuffer = slot.skyFramebuffer;
        begin.renderArea.extent = extent;
        begin.clearValueCount = 1;
        begin.pClearValues = clear;
        d.CmdBeginRenderPass(ctx.cmd, &begin, VK_SUBPASS_CONTENTS_INLINE);
        d.CmdSetViewport(ctx.cmd, 0, 1, &vp);
        d.CmdSetScissor(ctx.cmd, 0, 1, &scissor);
        if (skyTexSet) DrawSkyTex(ctx.cmd, skyTexAlone_, skyTexSet, extent);   // HD: tranche 3
        else DrawSky(ctx.cmd, skyAlone_, sky);
        d.CmdEndRenderPass(ctx.cmd);
        skyDrawn = true;
        ++stats_.skyFrames;
    }

    // The mirror: the sky, then the captured world mirrored in this frame's plane.
    bool mirrored = false;
    uint32_t count = 0, drawn = 0;
    const float height = g_gxCataPlane.m_height;
    float m[16];
    const Draw* draws = nullptr;
    if (g_gxCataPlane.m_valid) {
        draws = wxlvk::capture::Draws(count);
        if (wxlvk::capture::Serial() != ctx.serial || !draws) {
            ++stats_.noCapture;
            error_ = "mirror: no capture of this frame";
            draws = nullptr;
        } else if (!Matrix(*ctx.scene, height, m)) {
            error_ = "mirror: no matrix (camera at the water, or a degenerate projection)";
            draws = nullptr;
        }
    }
    if (draws) {
        VkRenderPassBeginInfo begin = {};
        begin.sType = VK_STRUCTURE_TYPE_RENDER_PASS_BEGIN_INFO;
        begin.renderPass = pass_;
        begin.framebuffer = slot.framebuffer;
        begin.renderArea.extent = extent;
        begin.clearValueCount = 2;
        begin.pClearValues = clear;
        d.CmdBeginRenderPass(ctx.cmd, &begin, VK_SUBPASS_CONTENTS_INLINE);
        d.CmdSetViewport(ctx.cmd, 0, 1, &vp);
        d.CmdSetScissor(ctx.cmd, 0, 1, &scissor);
        if (skyTexSet) DrawSkyTex(ctx.cmd, skyTexUnder_, skyTexSet, extent);   // HD: tranche 3
        else if (hasSky) DrawSky(ctx.cmd, skyUnder_, sky);

        VkPipeline boundPipe = VK_NULL_HANDLE;
        VkPipelineLayout boundLayout = VK_NULL_HANDLE;
        VkDescriptorSet boundSet0 = VK_NULL_HANDLE, boundRing = VK_NULL_HANDLE, boundBones = VK_NULL_HANDLE;
        uint32_t boundRingOffset = 0xFFFFFFFFu, boundBonesOffset = 0xFFFFFFFFu;
        for (uint32_t i = 0; i < count; ++i) {
            const Draw& dr = draws[i];
            const Pipe* p = (dr.wind && !dr.windSet) ? nullptr : PipeFor(dr.entry);
            if (!p || !dr.set0 || !dr.ring) {
                ++stats_.skipped;
                continue;
            }
            if (boundPipe != p->pipeline) {
                d.CmdBindPipeline(ctx.cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, p->pipeline);
                boundPipe = p->pipeline;
            }
            if (boundLayout != p->layout) {
                // A new layout disturbs every set and the push range: bind and push them all again.
                boundLayout = p->layout;
                boundSet0 = boundRing = boundBones = VK_NULL_HANDLE;
                boundRingOffset = boundBonesOffset = 0xFFFFFFFFu;
                d.CmdPushConstants(ctx.cmd, p->layout, VK_SHADER_STAGE_VERTEX_BIT, p->wind ? sizeof dr.windPush : 0u,
                                   16 * sizeof(float), m);
            }
            if (boundSet0 != dr.set0 || boundRing != dr.ring || boundRingOffset != dr.ringOffset) {
                const VkDescriptorSet sets[2] = {dr.set0, dr.ring};
                d.CmdBindDescriptorSets(ctx.cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, p->layout, 0, 2, sets, 1, &dr.ringOffset);
                boundSet0 = dr.set0;
                boundRing = dr.ring;
                boundRingOffset = dr.ringOffset;
            }
            if (p->bones && (boundBones != dr.bones || boundBonesOffset != dr.bonesOffset)) {
                d.CmdBindDescriptorSets(ctx.cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, p->layout, 2, 1, &dr.bones, 1, &dr.bonesOffset);
                boundBones = dr.bones;
                boundBonesOffset = dr.bonesOffset;
            }
            if (p->wind) {
                d.CmdBindDescriptorSets(ctx.cmd, VK_PIPELINE_BIND_POINT_GRAPHICS, p->layout, 3, 1, &dr.windSet, 0, nullptr);
                d.CmdPushConstants(ctx.cmd, p->layout, VK_SHADER_STAGE_VERTEX_BIT, 0, sizeof dr.windPush, dr.windPush);
            }
            const VkDeviceSize zeros[4] = {};
            d.CmdBindVertexBuffers(ctx.cmd, 0, dr.vbCount, dr.vbs, zeros);
            if (dr.indexed) {
                d.CmdBindIndexBuffer(ctx.cmd, dr.ib, 0, VK_INDEX_TYPE_UINT16);
                d.CmdDrawIndexed(ctx.cmd, dr.count, 1, dr.firstIndex, dr.vertexOffset, 0);
            } else {
                d.CmdDraw(ctx.cmd, dr.count, 1, static_cast<uint32_t>(dr.vertexOffset), 0);
            }
            ++drawn;
        }
        d.CmdEndRenderPass(ctx.cmd);
        mirrored = true;
    }
    if (!skyDrawn && !mirrored) return;
    // The draws' bind tracking knows nothing of what was bound here (the chain also invalidates after its stages).
    pipelines::InvalidateBindings();

    slot.valid = true;
    slot.lastSerial = ctx.serial;
    slot.snapshot.serial = ctx.serial;
    slot.snapshot.extent = extent;
    slot.snapshot.color = mirrored ? slot.color.view : VK_NULL_HANDLE;
    slot.snapshot.image = mirrored ? slot.color.image : VK_NULL_HANDLE;
    slot.snapshot.sky = skyDrawn ? slot.sky.view : VK_NULL_HANDLE;
    slot.snapshot.skyImage = skyDrawn ? slot.sky.image : VK_NULL_HANDLE;
    slot.snapshot.height = height;
    if (mirrored) std::memcpy(slot.snapshot.mainToMirror, m, sizeof m);
    if (!mirrored) {
        error_ = "";
        return;
    }
    ++stats_.frames;
    stats_.drawn += drawn;
    stats_.lastDrawn = drawn;
    stats_.lastCaptured = count;
    if (stats_.frames == 1) {
        wxl::ScriptMgr::Log(WXL_LOG_INFO, "cata water: first mirror (frame %llu): water z %.2f, eye %.2f above it, %u of %u "
                            "captured draw(s) mirrored into %ux%u, %s",
                            static_cast<unsigned long long>(ctx.serial), height, g_gxCataPlane.m_eyeZ - height, drawn, count,
                            extent.width, extent.height, hasSky ? "over the sky" : "over the fog colour (no sky)");
    }
    error_ = "";
}

const Mirror::Snapshot* Mirror::Get(uint64_t serial) const {
    if (!enabled_) return nullptr;
    for (const Slot& s : slots_)
        if (s.valid && s.snapshot.serial == serial) return &s.snapshot;
    return nullptr;
}

void Mirror::StopAndDestroy() {
    if (!api_) return;
    if (enabled_) {
        api_->RequestDrawCapture(0);
        enabled_ = false;
    }
    g_gxCataPlane.m_wanted = 0;
    g_gxCataPlane.m_valid = 0;
    if (registration_) {
        api_->UnregisterStage(registration_);
        registration_ = nullptr;
    }
    for (Slot& s : slots_) Retire(s);
    const context::Handles* h = context::Get();
    if (h && h->dapi) {
        for (Pipe& p : pipes_)
            if (p.pipeline) h->dapi->DestroyPipeline(device_.device, p.pipeline, nullptr);
        if (pass_) h->dapi->DestroyRenderPass(device_.device, pass_, nullptr);
        if (skyTexUnder_) h->dapi->DestroyPipeline(device_.device, skyTexUnder_, nullptr);   // HD: tranche 3
        if (skyTexAlone_) h->dapi->DestroyPipeline(device_.device, skyTexAlone_, nullptr);
        if (skyTexLayout_) h->dapi->DestroyPipelineLayout(device_.device, skyTexLayout_, nullptr);
        if (skyTexSetLayout_) h->dapi->DestroyDescriptorSetLayout(device_.device, skyTexSetLayout_, nullptr);
        if (skyTexPool_) h->dapi->DestroyDescriptorPool(device_.device, skyTexPool_, nullptr);
        if (skyTexSampler_) h->dapi->DestroySampler(device_.device, skyTexSampler_, nullptr);
        if (skyTexFrag_) h->dapi->DestroyShaderModule(device_.device, skyTexFrag_, nullptr);
        if (skyUnder_) h->dapi->DestroyPipeline(device_.device, skyUnder_, nullptr);
        if (skyAlone_) h->dapi->DestroyPipeline(device_.device, skyAlone_, nullptr);
        if (skyLayout_) h->dapi->DestroyPipelineLayout(device_.device, skyLayout_, nullptr);
        if (skyVert_) h->dapi->DestroyShaderModule(device_.device, skyVert_, nullptr);
        if (skyFrag_) h->dapi->DestroyShaderModule(device_.device, skyFrag_, nullptr);
        if (skyPass_) h->dapi->DestroyRenderPass(device_.device, skyPass_, nullptr);
    }
    if (stats_.frames || stats_.noPlane || stats_.skyFrames) {
        wxl::ScriptMgr::Log(WXL_LOG_INFO, "cata water: mirror: %llu frame(s), %llu draw(s) mirrored, %llu skipped, %u pipeline(s) "
                            "(%u failed), %llu frame(s) without a plane, %llu without a capture; sky alone in %llu frame(s)",
                            static_cast<unsigned long long>(stats_.frames), static_cast<unsigned long long>(stats_.drawn),
                            static_cast<unsigned long long>(stats_.skipped), stats_.pipelines, stats_.failedPipelines,
                            static_cast<unsigned long long>(stats_.noPlane), static_cast<unsigned long long>(stats_.noCapture),
                            static_cast<unsigned long long>(stats_.skyFrames));
    }
    pass_ = VK_NULL_HANDLE;
    skyPass_ = VK_NULL_HANDLE;
    skyVert_ = skyFrag_ = VK_NULL_HANDLE;
    skyLayout_ = VK_NULL_HANDLE;
    skyUnder_ = skyAlone_ = VK_NULL_HANDLE;
    skyTexUnder_ = skyTexAlone_ = VK_NULL_HANDLE;   // HD: tranche 3
    skyTexLayout_ = VK_NULL_HANDLE;
    skyTexSetLayout_ = VK_NULL_HANDLE;
    skyTexPool_ = VK_NULL_HANDLE;
    skyTexSampler_ = VK_NULL_HANDLE;
    skyTexFrag_ = VK_NULL_HANDLE;
    skyTexSets_.clear();
    slots_.clear();
    pipes_.clear();
    api_ = nullptr;
    device_ = {};
    stats_ = Stats();
}
}
