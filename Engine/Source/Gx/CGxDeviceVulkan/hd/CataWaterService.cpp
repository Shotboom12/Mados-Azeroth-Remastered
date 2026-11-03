// SPDX-License-Identifier: GPL-3.0-or-later
// HD: the Cata water's device-side services (CataWaterService.h). Step A: the copy of the scene before the water
// (CataSceneCapture, kit by ChatGPT, reviewed) and hdCataDebug, a picture-in-picture of that copy drawn at BeforeUi so
// the copy can be checked in game before any material reads it. Step B: the reflection (CataMirror), shown by
// hdCataDebug 3. Step C: the bridge to the material (WoW/Source/WorldClient/HD/HdCataWater.cpp): the engine's three
// proxy textures sample this frame's copy, depth and reflection (wxl draw/Proxy.hpp).
//
//   hdCataWater 0|1     1 = the Cata water material: copies the scene before the water, draws its reflection, and
//                       the engine draws flat outdoor water with Cataclysm's shaders
//   hdCataDebug 0|1|2|3 1 = show the copied colour in the lower right third, 2 = its depth, 3 = the reflection
//                       (each implies what it shows)
#include "CataWaterService.h"

#include <array>
#include <atomic>
#include <cstdio>
#include <cstring>
#include <vector>

#include "CataMirror.h"
#include "CataRipples.h"
#include "CataSceneCapture.h"
#include "draw/Proxy.hpp"
#include "Engine/Source/Gx/GxSeam.h"
#include "wxl/Script.hpp"
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"

namespace HD::CataWater {
namespace {
#include "shaders/CaptureScene.spv.h"
#include "shaders/CataDebugView.spv.h"

// The inset of hdCataDebug: one compute stage at BeforeUi that reads the capture of the same frame.
class DebugView {
public:
    bool Initialize(const WXL_VkRenderApi* api, SceneCapture* capture, const Mirror* mirror);
    void Enable(uint32_t mode) { mode_ = mode; }
    void StopAndDestroy();
    const char* Error() const { return error_; }

private:
    static int __cdecl Wanted(void* self) { return static_cast<DebugView*>(self)->mode_ ? 1 : 0; }
    static void __cdecl Run(void* self, const WXL_VkStageContext* ctx) {
        if (ctx) static_cast<DebugView*>(self)->Record(*ctx);
    }
    void Record(const WXL_VkStageContext& ctx);

    const WXL_VkRenderApi* api_ = nullptr;
    SceneCapture* capture_ = nullptr;
    const Mirror* mirror_ = nullptr;
    WXL_VkDeviceInfo device_{};
    void* registration_ = nullptr;
    uint32_t mode_ = 0;
    const char* error_ = "";
    std::vector<VkDescriptorSet> sets_;
    VkDescriptorSetLayout descriptorLayout_ = VK_NULL_HANDLE;
    VkPipelineLayout pipelineLayout_ = VK_NULL_HANDLE;
    VkPipeline pipeline_ = VK_NULL_HANDLE;
    VkDescriptorPool pool_ = VK_NULL_HANDLE;
    VkSampler sampler_ = VK_NULL_HANDLE;
#define CATA_DEBUG_FUNCTIONS(X) \
    X(CreateDescriptorSetLayout) X(DestroyDescriptorSetLayout) X(CreatePipelineLayout) X(DestroyPipelineLayout) \
    X(CreateDescriptorPool) X(DestroyDescriptorPool) X(AllocateDescriptorSets) X(UpdateDescriptorSets) \
    X(CreateSampler) X(DestroySampler) X(CreateShaderModule) X(DestroyShaderModule) \
    X(CreateComputePipelines) X(DestroyPipeline) X(CmdBindPipeline) X(CmdBindDescriptorSets) \
    X(CmdPushConstants) X(CmdDispatch) X(DeviceWaitIdle)
#define CATA_DECLARE(name) PFN_vk##name name = nullptr;
    CATA_DEBUG_FUNCTIONS(CATA_DECLARE)
#undef CATA_DECLARE
};

struct DebugPush {
    int32_t origin[2];
    int32_t size[2];
    uint32_t mode;
    uint32_t swapRB;
    float pad[2];
    float depthParams[4];
    float depthParams2[4];
};
static_assert(sizeof(DebugPush) == 64, "the push block of CataDebugView.comp");

bool DebugView::Initialize(const WXL_VkRenderApi* api, SceneCapture* capture, const Mirror* mirror) {
    if (api_ || !api || !capture || !api->GetDeviceInfo || !api->RegisterStage || !api->UnregisterStage) {
        error_ = "debug view: API missing, or already initialized";
        return false;
    }
    device_.structSize = sizeof device_;
    if (!api->GetDeviceInfo(&device_) || !device_.device || !device_.getDeviceProcAddr || !device_.frameSlots ||
        device_.frameSlots > 8) {
        error_ = "debug view: device unavailable";
        return false;
    }
#define CATA_LOAD(name) name = reinterpret_cast<PFN_vk##name>(device_.getDeviceProcAddr(device_.device, "vk" #name)); \
    if (!name) { error_ = "debug view: missing vk" #name; return false; }
    CATA_DEBUG_FUNCTIONS(CATA_LOAD)
#undef CATA_LOAD
    api_ = api;
    capture_ = capture;
    mirror_ = mirror;
    auto failed = [&](const char* why) { StopAndDestroy(); error_ = why; return false; };

    std::array<VkDescriptorSetLayoutBinding, 3> bindings{};
    for (uint32_t i = 0; i < 3; ++i) {
        bindings[i].binding = i;
        bindings[i].descriptorCount = 1;
        bindings[i].stageFlags = VK_SHADER_STAGE_COMPUTE_BIT;
        bindings[i].descriptorType = i == 0 ? VK_DESCRIPTOR_TYPE_STORAGE_IMAGE : VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;
    }
    VkDescriptorSetLayoutCreateInfo layout{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO};
    layout.bindingCount = 3;
    layout.pBindings = bindings.data();
    if (CreateDescriptorSetLayout(device_.device, &layout, nullptr, &descriptorLayout_) != VK_SUCCESS)
        return failed("debug view: descriptor layout");
    VkPushConstantRange push{VK_SHADER_STAGE_COMPUTE_BIT, 0, sizeof(DebugPush)};
    VkPipelineLayoutCreateInfo pl{VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO};
    pl.setLayoutCount = 1;
    pl.pSetLayouts = &descriptorLayout_;
    pl.pushConstantRangeCount = 1;
    pl.pPushConstantRanges = &push;
    if (CreatePipelineLayout(device_.device, &pl, nullptr, &pipelineLayout_) != VK_SUCCESS)
        return failed("debug view: pipeline layout");
    VkShaderModule module = VK_NULL_HANDLE;
    VkShaderModuleCreateInfo shader{VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO};
    shader.codeSize = sizeof kCataDebugViewSpv;
    shader.pCode = kCataDebugViewSpv;
    if (CreateShaderModule(device_.device, &shader, nullptr, &module) != VK_SUCCESS)
        return failed("debug view: shader module");
    VkComputePipelineCreateInfo cp{VK_STRUCTURE_TYPE_COMPUTE_PIPELINE_CREATE_INFO};
    cp.stage.sType = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
    cp.stage.stage = VK_SHADER_STAGE_COMPUTE_BIT;
    cp.stage.module = module;
    cp.stage.pName = "main";
    cp.layout = pipelineLayout_;
    const VkResult result = CreateComputePipelines(device_.device, device_.pipelineCache, 1, &cp, nullptr, &pipeline_);
    DestroyShaderModule(device_.device, module, nullptr);
    if (result != VK_SUCCESS) return failed("debug view: compute pipeline");
    VkSamplerCreateInfo sampler{VK_STRUCTURE_TYPE_SAMPLER_CREATE_INFO};
    sampler.magFilter = sampler.minFilter = VK_FILTER_LINEAR;   // the inset is a third of the frame: filtered
    sampler.mipmapMode = VK_SAMPLER_MIPMAP_MODE_NEAREST;
    sampler.addressModeU = sampler.addressModeV = sampler.addressModeW = VK_SAMPLER_ADDRESS_MODE_CLAMP_TO_EDGE;
    if (CreateSampler(device_.device, &sampler, nullptr, &sampler_) != VK_SUCCESS) return failed("debug view: sampler");
    std::array<VkDescriptorPoolSize, 2> sizes{{{VK_DESCRIPTOR_TYPE_STORAGE_IMAGE, device_.frameSlots},
                                               {VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER, 2 * device_.frameSlots}}};
    VkDescriptorPoolCreateInfo pool{VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO};
    pool.maxSets = device_.frameSlots;
    pool.poolSizeCount = 2;
    pool.pPoolSizes = sizes.data();
    if (CreateDescriptorPool(device_.device, &pool, nullptr, &pool_) != VK_SUCCESS) return failed("debug view: pool");
    sets_.resize(device_.frameSlots);
    std::vector<VkDescriptorSetLayout> layouts(device_.frameSlots, descriptorLayout_);
    VkDescriptorSetAllocateInfo allocate{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO};
    allocate.descriptorPool = pool_;
    allocate.descriptorSetCount = device_.frameSlots;
    allocate.pSetLayouts = layouts.data();
    if (AllocateDescriptorSets(device_.device, &allocate, sets_.data()) != VK_SUCCESS) return failed("debug view: sets");

    WXL_VkStageDesc stage{};
    stage.structSize = sizeof stage;
    stage.user = this;
    stage.point = WXL_VK_POINT_BEFORE_UI;
    stage.order = 100000;   // after every other BeforeUi stage: it shows the copy over the finished world
    stage.flags = WXL_VK_STAGE_WRITES_COLOR;
    stage.Wanted = Wanted;
    stage.Run = Run;
    registration_ = api_->RegisterStage(&stage, "CataWater.DebugView");
    if (!registration_) return failed("debug view: BeforeUi stage refused");
    error_ = "";
    return true;
}

void DebugView::Record(const WXL_VkStageContext& ctx) {
    if (!mode_ || ctx.structSize < sizeof ctx || ctx.frameSlot >= sets_.size() || !ctx.cmd || !ctx.colorView ||
        ctx.colorFormat != VK_FORMAT_R8G8B8A8_UNORM || ctx.extent.width < 64 || ctx.extent.height < 64) {
        return;
    }
    const SceneCapture::Snapshot* snap = capture_->Get(ctx.serial, ctx.extent);
    if (!snap || !snap->color || !snap->rawDepth) {
        error_ = "debug view: no capture this frame (camera off the world, or the copy failed)";
        return;   // nothing to show: the frame stays as it is
    }
    const VkDescriptorSet set = sets_[ctx.frameSlot];
    std::array<VkDescriptorImageInfo, 3> images{{{VK_NULL_HANDLE, ctx.colorView, ctx.colorLayout},
                                                 {sampler_, snap->color, snap->layout},
                                                 {sampler_, snap->rawDepth, snap->layout}}};
    if (mode_ == 3) {
        // The reflection as the water will see it (upside down): true RGBA like the copy, left SHADER_READ_ONLY_OPTIMAL
        // by its own render pass. Binding 2 is not read in this mode; it keeps the copy's depth.
        const Mirror::Snapshot* mirror = mirror_ ? mirror_->Get(ctx.serial) : nullptr;
        if (!mirror || !mirror->color) {
            error_ = "debug view: no reflection this frame (no water plane in view, camera under the water or indoors)";
            return;
        }
        images[1] = {sampler_, mirror->color, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL};
    }
    std::array<VkWriteDescriptorSet, 3> writes{};
    for (uint32_t i = 0; i < 3; ++i) {
        VkWriteDescriptorSet& w = writes[i];
        w.sType = VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;
        w.dstSet = set;
        w.dstBinding = i;
        w.descriptorCount = 1;
        w.descriptorType = i == 0 ? VK_DESCRIPTOR_TYPE_STORAGE_IMAGE : VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;
        w.pImageInfo = &images[i];
    }
    UpdateDescriptorSets(device_.device, 3, writes.data(), 0, nullptr);

    DebugPush push{};
    push.size[0] = static_cast<int32_t>(ctx.extent.width / 3);
    push.size[1] = static_cast<int32_t>(ctx.extent.height / 3);
    push.origin[0] = static_cast<int32_t>(ctx.extent.width) - push.size[0] - 16;
    push.origin[1] = static_cast<int32_t>(ctx.extent.height) - push.size[1] - 16;
    push.mode = mode_ == 2 ? 2u : 1u;
    push.swapRB = ctx.swapRB;
    push.depthParams[0] = snap->viewport.minDepth;
    push.depthParams[1] = snap->viewport.maxDepth > snap->viewport.minDepth ? snap->viewport.maxDepth : 1.0f;
    push.depthParams[2] = snap->scene.projection[10];   // row vectors: clip z = z * P[2][2] + P[3][2], w = z
    push.depthParams[3] = snap->scene.projection[14];
    push.depthParams2[0] = snap->scene.fogRange[1] > 1.0f ? snap->scene.fogRange[1] : 500.0f;   // black at the fog's end
    CmdBindPipeline(ctx.cmd, VK_PIPELINE_BIND_POINT_COMPUTE, pipeline_);
    CmdBindDescriptorSets(ctx.cmd, VK_PIPELINE_BIND_POINT_COMPUTE, pipelineLayout_, 0, 1, &set, 0, nullptr);
    CmdPushConstants(ctx.cmd, pipelineLayout_, VK_SHADER_STAGE_COMPUTE_BIT, 0, sizeof push, &push);
    CmdDispatch(ctx.cmd, (static_cast<uint32_t>(push.size[0]) + 7) / 8, (static_cast<uint32_t>(push.size[1]) + 7) / 8, 1);
    error_ = "";
}

void DebugView::StopAndDestroy() {
    mode_ = 0;
    if (!api_) return;
    if (registration_) {
        api_->UnregisterStage(registration_);
        registration_ = nullptr;
    }
    if (pool_) DestroyDescriptorPool(device_.device, pool_, nullptr);
    if (sampler_) DestroySampler(device_.device, sampler_, nullptr);
    if (pipeline_) DestroyPipeline(device_.device, pipeline_, nullptr);
    if (pipelineLayout_) DestroyPipelineLayout(device_.device, pipelineLayout_, nullptr);
    if (descriptorLayout_) DestroyDescriptorSetLayout(device_.device, descriptorLayout_, nullptr);
    pool_ = VK_NULL_HANDLE;
    sampler_ = VK_NULL_HANDLE;
    pipeline_ = VK_NULL_HANDLE;
    pipelineLayout_ = VK_NULL_HANDLE;
    descriptorLayout_ = VK_NULL_HANDLE;
    sets_.clear();
    api_ = nullptr;
    capture_ = nullptr;
    mirror_ = nullptr;
}

// --- the bridge to the material ------------------------------------------------------------------------------------

// The last BeforeLiquids stage (after the copy, 10000, and the mirror, 10010): hands this frame's images to the
// engine's proxy textures and says so in g_gxCataWater. The engine cleared m_ready before the chain ran
// (HD::CataWaterBeginLiquidPass), so a frame where this does not run draws the 3.3.5 water.
class Bridge {
public:
    bool Initialize(const WXL_VkRenderApi* api, const SceneCapture* capture, const Mirror* mirror) {
        if (api_ || !api || !capture || !api->RegisterStage || !api->UnregisterStage) return false;
        api_ = api;
        capture_ = capture;
        mirror_ = mirror;
        WXL_VkStageDesc stage{};
        stage.structSize = sizeof stage;
        stage.user = this;
        stage.point = WXL_VK_POINT_BEFORE_LIQUIDS;
        stage.order = 10020;
        stage.flags = 0;
        stage.Wanted = Wanted;
        stage.Run = Run;
        registration_ = api_->RegisterStage(&stage, "CataWater.Bridge");
        if (!registration_) {
            api_ = nullptr;
            return false;
        }
        return true;
    }
    void Enable(bool enabled) {
        enabled_ = enabled && api_;
        g_gxCataWater.m_enabled = enabled_ ? 1 : 0;
        if (!enabled_) Unbind();
    }
    void StopAndDestroy() {
        Enable(false);
        if (api_ && registration_) api_->UnregisterStage(registration_);
        registration_ = nullptr;
        api_ = nullptr;
        if (frames_) {
            wxl::ScriptMgr::Log(WXL_LOG_INFO, "cata water: material inputs: %llu frame(s) handed over (%llu with the reflection), "
                                "%llu without the scene copy, %llu with the blur", static_cast<unsigned long long>(frames_),
                                static_cast<unsigned long long>(mirrored_), static_cast<unsigned long long>(missing_),
                                static_cast<unsigned long long>(blurred_));   // HD: + the blur
        }
        LogMaterial();
        frames_ = mirrored_ = missing_ = blurred_ = 0;
    }

private:
    static int __cdecl Wanted(void* self) { return static_cast<Bridge*>(self)->enabled_ ? 1 : 0; }
    static void __cdecl Run(void* self, const WXL_VkStageContext* ctx) {
        if (ctx) static_cast<Bridge*>(self)->Record(*ctx);
    }
    static void Unbind() {
        wxlvk::draw::proxy::ClearAll();
        g_gxCataWater.m_ready = 0;
        g_gxCataWater.m_mirror = 0;
        g_gxCataWater.m_sky = 0;
    }
    // What the engine's material did with the water (WoW/Source/WorldClient/HD/HdCataWater.cpp): its status line when
    // it changes (the first 40 changes), its counters every 600 frames.
    static void LogMaterial() {
        static const char* const kKept[] = {"camera in a liquid", "runtime files or shaders", "proxy textures", "no scene copy",
                                            "not a Cata water type", "WMO water", "textures", "constants", "vertex buffers"};
        char kept[512];
        size_t used = 0;
        kept[0] = 0;
        for (size_t i = 0; i < sizeof(kKept) / sizeof(kKept[0]) && used < sizeof(kept); i++) {
            if (g_gxCataWater.m_kept[i]) {
                int n = snprintf(kept + used, sizeof(kept) - used, "%s%s %u", used ? ", " : "", kKept[i], g_gxCataWater.m_kept[i]);
                if (n > 0) used += static_cast<size_t>(n);
            }
        }
        wxl::ScriptMgr::Log(WXL_LOG_INFO, "cata water: material: %u water draw(s) with the Cata shaders; kept 3.3.5: %s; status \"%s\"",
                            g_gxCataWater.m_drawn, used ? kept : "none", g_gxCataWater.m_info);
    }
    void Record(const WXL_VkStageContext& ctx) {
        namespace proxy = wxlvk::draw::proxy;
        if (strcmp(lastInfo_, g_gxCataWater.m_info) != 0) {
            snprintf(lastInfo_, sizeof(lastInfo_), "%s", g_gxCataWater.m_info);
            if (infoLogs_ < 40) {
                ++infoLogs_;
                wxl::ScriptMgr::Log(WXL_LOG_INFO, "cata water: material status: \"%s\"", lastInfo_);
            }
        }
        if (++ticks_ % 600 == 0) LogMaterial();
        g_gxCataWater.m_ready = 0;
        g_gxCataWater.m_mirror = 0;
        g_gxCataWater.m_sky = 0;
        const SceneCapture::Snapshot* snap = capture_->Get(ctx.serial, ctx.extent);
        if (!snap || !snap->color || !snap->rawDepth || !snap->colorImage || !snap->rawDepthImage) {
            ++missing_;
            for (uint32_t slot = 0; slot < 5; ++slot) proxy::Set(slot, nullptr, proxy::View(), 0);   // HD: its own slots only (5, 6: the ripples)
            return;
        }
        proxy::View color{snap->colorImage, snap->color, snap->layout, VK_FORMAT_R8G8B8A8_UNORM, snap->extent};
        proxy::View depth{snap->rawDepthImage, snap->rawDepth, snap->layout, VK_FORMAT_R32_SFLOAT, snap->extent};
        proxy::View reflection = color;   // without a mirror, the material's "fake reflection" path does not sample it
        const Mirror::Snapshot* mirror = mirror_ ? mirror_->Get(ctx.serial) : nullptr;
        if (mirror && mirror->color && mirror->image) {
            reflection = {mirror->image, mirror->color, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, VK_FORMAT_R8G8B8A8_UNORM, mirror->extent};
            g_gxCataWater.m_mirror = 1;
            ++mirrored_;
        }
        proxy::Set(0, g_gxCataWater.m_proxy[0], color, ctx.serial);
        proxy::Set(1, g_gxCataWater.m_proxy[1], reflection, ctx.serial);
        proxy::Set(2, g_gxCataWater.m_proxy[2], depth, ctx.serial);
        // The sky alone (CataMirror.h): s1 of the water without a mirror.
        if (mirror && mirror->sky && mirror->skyImage) {
            proxy::Set(3, g_gxCataWater.m_proxySky,
                       {mirror->skyImage, mirror->sky, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL, VK_FORMAT_R8G8B8A8_UNORM, mirror->extent},
                       ctx.serial);
            g_gxCataWater.m_sky = 1;
        } else {
            proxy::Set(3, g_gxCataWater.m_proxySky, color, ctx.serial);
        }
        // HD: s3, Cata's blurred back buffer; the sharp copy when the blur is not there.
        if (snap->blurred && snap->blurredImage) {
            proxy::Set(4, g_gxCataWater.m_proxyBlur,
                       {snap->blurredImage, snap->blurred, snap->layout, VK_FORMAT_R8G8B8A8_UNORM, {512, 512}}, ctx.serial);
            if (!blurred_) wxl::ScriptMgr::Log(WXL_LOG_INFO, "cata water: blurred back buffer (512x512 Kawase) ready");
            ++blurred_;
        } else {
            proxy::Set(4, g_gxCataWater.m_proxyBlur, color, ctx.serial);
        }
        g_gxCataWater.m_ready = 1;
        ++frames_;
    }

    const WXL_VkRenderApi* api_ = nullptr;
    const SceneCapture* capture_ = nullptr;
    const Mirror* mirror_ = nullptr;
    void* registration_ = nullptr;
    bool enabled_ = false;
    uint64_t frames_ = 0, mirrored_ = 0, missing_ = 0, blurred_ = 0;
    char lastInfo_[256] = "";
    unsigned infoLogs_ = 0;
    unsigned long long ticks_ = 0;
};

// --- the cvars and the owner ---------------------------------------------------------------------------------------

SceneCapture g_capture;
Mirror g_mirror;
Bridge g_bridge;
DebugView g_debug;
Ripples g_ripples;   // HD: tranche 2
bool g_ripplesUp = false;
bool g_up = false;
std::atomic<int32_t> g_water(0);
std::atomic<int32_t> g_debugMode(0);
PFN_vkDeviceWaitIdle g_waitIdle = nullptr;
VkDevice g_device = VK_NULL_HANDLE;

void Apply() {
    if (!g_up) return;
    const int32_t debug = g_debugMode.load();
    const bool water = g_water.load() != 0;
    g_capture.Enable(water || debug != 0);
    g_mirror.Enable(water || debug == 3);
    g_bridge.Enable(water);
    if (g_ripplesUp) g_ripples.Enable(water);   // HD: tranche 2
    g_debug.Enable(debug >= 1 && debug <= 3 ? static_cast<uint32_t>(debug) : 0u);
}

bool WaterCallback(CVar*, const char*, const char* value, void*) {
    g_water.store(value && value[0] == '1' ? 1 : 0);
    Apply();
    return true;
}

bool DebugCallback(CVar*, const char*, const char* value, void*) {
    g_debugMode.store(value && value[0] >= '1' && value[0] <= '3' ? value[0] - '0' : 0);
    Apply();
    return true;
}

void RegisterCVars() {
    static bool registered = false;
    if (registered) return;
    registered = true;
    CVar* water = CVar::Register("hdCataWater", "HD: 1 = Cata water (Vulkan; steps A-B: copies the scene before the water and draws its reflection)",
                                 1, "0", WaterCallback, CATEGORY_GRAPHICS, false, nullptr, false);
    CVar* debug = CVar::Register("hdCataDebug", "HD: Cata water check (Vulkan): 1 = the copied scene in the lower right, 2 = its depth, 3 = the reflection",
                                 1, "0", DebugCallback, CATEGORY_GRAPHICS, false, nullptr, false);
    if (water) g_water.store(water->m_intValue == 1 ? 1 : 0);
    if (debug) g_debugMode.store(debug->m_intValue >= 1 && debug->m_intValue <= 3 ? debug->m_intValue : 0);
}
}

void Service::Startup() {
    RegisterCVars();
    if (g_up) return;
    const auto* api = wxl::ScriptMgr::GetInterface<const WXL_VkRenderApi>(WXL_VK_RENDER_API_NAME, WXL_VK_RENDER_API_VERSION);
    if (!api) {
        wxl::ScriptMgr::Log(WXL_LOG_WARN, "cata water: %s is not published; hdCataWater / hdCataDebug do nothing", WXL_VK_RENDER_API_NAME);
        return;
    }
    const std::vector<uint32_t> spv(kCaptureSceneSpv, kCaptureSceneSpv + sizeof kCaptureSceneSpv / sizeof kCaptureSceneSpv[0]);
    if (!g_capture.Initialize(api, spv)) {
        wxl::ScriptMgr::Log(WXL_LOG_WARN, "cata water: scene copy not available: %s", g_capture.Error().c_str());
        return;
    }
    const bool mirror = g_mirror.Initialize(api);
    if (!mirror) {
        wxl::ScriptMgr::Log(WXL_LOG_WARN, "cata water: reflection not available: %s (the copy itself works)", g_mirror.Error());
    }
    if (!g_bridge.Initialize(api, &g_capture, mirror ? &g_mirror : nullptr)) {
        wxl::ScriptMgr::Log(WXL_LOG_WARN, "cata water: the material's bridge stage was refused (the water keeps the 3.3.5 shaders)");
    }
    // HD: tranche 2, the dynamic displacement map (optional: without it the water keeps its waves without ripples).
    g_ripplesUp = g_ripples.Initialize(api);
    if (!g_ripplesUp) wxl::ScriptMgr::Log(WXL_LOG_WARN, "cata water: %s (the water draws without the ripples)", g_ripples.Error());
    else wxl::ScriptMgr::Log(WXL_LOG_INFO, "cata water: ripples ready (2 maps 1024x1024 RG16F, 128 yards around the player)");
    if (!g_debug.Initialize(api, &g_capture, mirror ? &g_mirror : nullptr)) {
        wxl::ScriptMgr::Log(WXL_LOG_WARN, "cata water: %s (the copy itself works)", g_debug.Error());
    }
    WXL_VkDeviceInfo info{};
    info.structSize = sizeof info;
    if (api->GetDeviceInfo(&info) && info.device && info.getDeviceProcAddr) {
        g_device = info.device;
        g_waitIdle = reinterpret_cast<PFN_vkDeviceWaitIdle>(info.getDeviceProcAddr(info.device, "vkDeviceWaitIdle"));
    }
    g_up = true;
    Apply();
    wxl::ScriptMgr::Log(WXL_LOG_INFO, "cata water: steps A-B up: scene copy and reflection at BeforeLiquids (%s), reflection %s, "
                        "hdCataDebug %d", g_water.load() || g_debugMode.load() ? "on" : "off until hdCataWater 1 or hdCataDebug 1/2/3",
                        mirror ? "ready" : "unavailable", g_debugMode.load());
}

void Service::Shutdown() {
    if (!g_up) return;
    g_up = false;
    // At the device's end only: the stages' last frames must be finished before their objects go.
    if (g_waitIdle && g_device) g_waitIdle(g_device);
    g_debug.StopAndDestroy();
    if (g_ripplesUp) {   // HD: tranche 2
        wxl::ScriptMgr::Log(WXL_LOG_INFO, "cata water: ripples: %llu propagation step(s)%s%s", static_cast<unsigned long long>(g_ripples.Steps()),
                            g_ripples.Error()[0] ? ", last error: " : "", g_ripples.Error());
        g_ripples.StopAndDestroy();
        g_ripplesUp = false;
    }
    g_bridge.StopAndDestroy();
    g_mirror.StopAndDestroy();
    if (!g_capture.StopAndDestroy(UINT64_MAX)) {
        wxl::ScriptMgr::Log(WXL_LOG_WARN, "cata water: scene copy shutdown: %s", g_capture.Error().c_str());
    }
    g_device = VK_NULL_HANDLE;
    g_waitIdle = nullptr;
}
}
