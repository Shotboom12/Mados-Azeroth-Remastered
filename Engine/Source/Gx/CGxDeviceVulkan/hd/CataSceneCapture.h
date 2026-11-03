// SPDX-License-Identifier: GPL-3.0-or-later
// HD: from ChatGPT's Cata water kit (2026-10-26), reviewed; owned and enabled by CataWaterService.cpp.
#pragma once
#include <cstdint>
#include <string>
#include <vector>
#include "wxl/VkRenderApi.h"

namespace HD::CataWater {
// Candidate GPU service. Compile-checked, NOT executed on the GPU or integrated into the game.
// All calls on the render thread. The owner must outlive registration and call StopAndDestroy
// before the device disappears; explicit retirement, never a device/queue wait in a destructor.
class SceneCapture {
public:
    struct Snapshot {
        uint64_t serial = 0;
        VkExtent2D extent{};
        VkImageView color = VK_NULL_HANDLE, rawDepth = VK_NULL_HANDLE;
        VkImage colorImage = VK_NULL_HANDLE, rawDepthImage = VK_NULL_HANDLE;   // HD: for the material's proxies
        VkImageLayout layout = VK_IMAGE_LAYOUT_GENERAL;
        VkImageView blurred = VK_NULL_HANDLE;   // HD: Cata's blurred back buffer, 512x512, GENERAL; null without it
        VkImage blurredImage = VK_NULL_HANDLE;
        WXL_VkSceneConstants scene{};
        VkViewport viewport{};
        float jitter[2]{};
    };
    bool Initialize(const WXL_VkRenderApi* api, const std::vector<uint32_t>& captureSpirv);
    void Enable(bool enabled) { enabled_ = enabled; }
    const Snapshot* Get(uint64_t serial, VkExtent2D extent) const;
    // Unregisters immediately; returns false until resources' last serial has completed. Retry later.
    bool StopAndDestroy(uint64_t completedSerial);
    const std::string& Error() const { return error_; }
    SceneCapture() = default;
    SceneCapture(const SceneCapture&) = delete;
    SceneCapture& operator=(const SceneCapture&) = delete;
private:
    struct Slot {
        void* colorHandle = nullptr;
        void* depthHandle = nullptr;
        WXL_VkImageInfo color{}, depth{};
        VkDescriptorSet descriptors = VK_NULL_HANDLE;
        void* blurHandle[2] = {};              // HD: the blur's ping-pong pair (Cata's target and temp)
        WXL_VkImageInfo blur[2]{};
        VkDescriptorSet blurSets[5] = {};
        bool blurInitialized = false;
        VkExtent2D extent{};
        uint64_t lastSerial = 0;
        bool initialized = false, valid = false;
        Snapshot snapshot;
    };
    static int __cdecl Wanted(void* self);
    static void __cdecl Run(void* self, const WXL_VkStageContext* ctx);
    void Record(const WXL_VkStageContext& ctx);
    bool Targets(Slot& slot, VkExtent2D extent);
    void Retire(Slot& slot);
    void Barrier(VkCommandBuffer cmd, const Slot& slot, bool before);
    bool BlurPipeline();                                   // HD
    bool Blur(VkCommandBuffer cmd, Slot& slot);            // HD: after the copy, into slot.blur[0]
    const WXL_VkRenderApi* api_ = nullptr;
    WXL_VkDeviceInfo device_{};
    void* registration_ = nullptr;
    bool enabled_ = false;
    uint64_t lastSerial_ = 0;
    std::string error_;
    std::vector<Slot> slots_;
    VkDescriptorSetLayout descriptorLayout_ = VK_NULL_HANDLE;
    VkPipelineLayout pipelineLayout_ = VK_NULL_HANDLE;
    VkPipeline pipeline_ = VK_NULL_HANDLE;
    VkDescriptorPool pool_ = VK_NULL_HANDLE;
    VkSampler sampler_ = VK_NULL_HANDLE;
    // HD: the blur (CataBlur.comp). Optional: without it the water samples the sharp copy.
    VkDescriptorSetLayout blurLayout_ = VK_NULL_HANDLE;
    VkPipelineLayout blurPipelineLayout_ = VK_NULL_HANDLE;
    VkPipeline blurPipeline_ = VK_NULL_HANDLE;
    VkDescriptorPool blurPool_ = VK_NULL_HANDLE;
    VkSampler linear_ = VK_NULL_HANDLE;
    bool blurReady_ = false;
    static constexpr uint32_t kBlurSize = 512;             // Cata: KawaseBlur's 512x512 target
#define CATA_VK_FUNCTIONS(X) \
    X(CreateDescriptorSetLayout) X(DestroyDescriptorSetLayout) X(CreatePipelineLayout) X(DestroyPipelineLayout) \
    X(CreateDescriptorPool) X(DestroyDescriptorPool) X(AllocateDescriptorSets) X(UpdateDescriptorSets) \
    X(CreateSampler) X(DestroySampler) X(CreateShaderModule) X(DestroyShaderModule) \
    X(CreateComputePipelines) X(DestroyPipeline) X(CmdPipelineBarrier) X(CmdBindPipeline) \
    X(CmdBindDescriptorSets) X(CmdPushConstants) X(CmdDispatch)
#define CATA_DECLARE(name) PFN_vk##name name = nullptr;
    CATA_VK_FUNCTIONS(CATA_DECLARE)
#undef CATA_DECLARE
};
}
