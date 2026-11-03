// SPDX-License-Identifier: GPL-3.0-or-later
// HD: the Cata water's reflection under Vulkan (step B, method 1): the frame's captured opaque world (wxl's draw capture,
// src/capture/Capture.hpp) drawn again, in colour, from the camera mirrored in the water plane the engine chose
// (g_gxCataPlane, WoW/Source/WorldClient/HD/HdCataMirror.cpp), into a half-resolution target of its own. The engine
// widened its culling to the mirror's view, so what the mirror sees above the top of the screen is in the capture.
//
// Each draw keeps its own pixel module, textures, constants and blend; its vertex side is the module's shadow variant
// (tools/bls_tools/shadowgen.py: the clip position re-projected by one push matrix), here clip -> view -> mirrored
// view -> an oblique projection whose near plane is the water, so nothing under the water is reflected. The winding
// is reversed. Under the world, the sky (CataSky.frag, from the engine's GxCataSky): the main camera's ray mirrored.
//
// Every frame, plane or not, the sky alone is also drawn into a target of its own: Cata's reflection for the water
// without a mirror (CWorldScene::RenderReflection's second view, mode 0: the sky only).
//
// HD: tranche 3. When the engine drew the game's own sky mirrored this frame (GxCataSky::m_tex, a render target of the
// engine's), that sky is what lies under the mirror and in the sky alone (CataSkyTex.frag); the rings are the fallback.
#pragma once

#include <cstdint>
#include <vector>

#include "wxl/VkRenderApi.h"

namespace HD::CataWater {
class Mirror {
public:
    struct Snapshot {
        uint64_t serial = 0;
        VkExtent2D extent{};
        VkImageView color = VK_NULL_HANDLE;   ///< the mirror, SHADER_READ_ONLY_OPTIMAL after the stage; none without a plane
        VkImage image = VK_NULL_HANDLE;       ///< its image (the material's proxy)
        VkImageView sky = VK_NULL_HANDLE;     ///< the sky alone, SHADER_READ_ONLY_OPTIMAL; none without GxCataSky
        VkImage skyImage = VK_NULL_HANDLE;
        float height = 0;                     ///< the plane it was drawn for
        float mainToMirror[16]{};             ///< main clip -> mirror clip (row vectors), for the water's lookup
    };
    struct Stats {
        uint64_t frames = 0, drawn = 0, skipped = 0, noPlane = 0, noCapture = 0, skyFrames = 0, skyTexFrames = 0;   // HD: + tranche 3
        uint32_t lastDrawn = 0, lastCaptured = 0, pipelines = 0, failedPipelines = 0;
    };

    bool Initialize(const WXL_VkRenderApi* api);
    void Enable(bool enabled);
    const Snapshot* Get(uint64_t serial) const;
    void StopAndDestroy();   ///< after the GPU is idle (CataWaterService.cpp)
    const char* Error() const { return error_; }
    const Stats& GetStats() const { return stats_; }

private:
    struct Slot {
        void* colorHandle = nullptr;
        void* depthHandle = nullptr;
        WXL_VkImageInfo color{}, depth{};
        VkFramebuffer framebuffer = VK_NULL_HANDLE;
        void* skyHandle = nullptr;
        WXL_VkImageInfo sky{};
        VkFramebuffer skyFramebuffer = VK_NULL_HANDLE;
        VkExtent2D extent{};
        uint64_t lastSerial = 0;
        bool valid = false;
        Snapshot snapshot;
    };
    struct Pipe {
        uint32_t entry = 0xFFFFFFFFu;
        VkPipeline pipeline = VK_NULL_HANDLE;
        VkPipelineLayout layout = VK_NULL_HANDLE;
        bool bones = false, wind = false, failed = false;
    };

    static int __cdecl Wanted(void* self);
    static void __cdecl Run(void* self, const WXL_VkStageContext* ctx);
    void Record(const WXL_VkStageContext& ctx);
    bool Targets(Slot& slot, VkExtent2D extent);
    void Retire(Slot& slot);
    const Pipe* PipeFor(uint32_t entry);
    bool Matrix(const WXL_VkSceneConstants& scene, float height, float out[16]) const;
    struct SkyPush {
        float rayX[4], rayY[4], rayO[4];
        float sinElevation[8];
        uint32_t color[8];
    };
    bool SkyConstants(const WXL_VkSceneConstants& scene, VkExtent2D extent, SkyPush& out) const;
    bool SkyPipelines();
    void DrawSky(VkCommandBuffer cmd, VkPipeline pipeline, const SkyPush& push);
    // HD: tranche 3, the engine's mirrored sky.
    bool SkyTexPipelines(const VkGraphicsPipelineCreateInfo& base);
    void DrawSkyTex(VkCommandBuffer cmd, VkPipeline pipeline, VkDescriptorSet set, VkExtent2D extent);

    const WXL_VkRenderApi* api_ = nullptr;
    WXL_VkDeviceInfo device_{};
    void* registration_ = nullptr;
    bool enabled_ = false;
    const char* error_ = "";
    std::vector<Slot> slots_;
    std::vector<Pipe> pipes_;   ///< open addressing by entry
    VkRenderPass pass_ = VK_NULL_HANDLE;
    VkRenderPass skyPass_ = VK_NULL_HANDLE;           ///< the sky alone: colour only
    VkShaderModule skyVert_ = VK_NULL_HANDLE, skyFrag_ = VK_NULL_HANDLE;
    VkPipelineLayout skyLayout_ = VK_NULL_HANDLE;
    VkPipeline skyUnder_ = VK_NULL_HANDLE;            ///< in pass_, under the mirrored world
    VkPipeline skyAlone_ = VK_NULL_HANDLE;            ///< in skyPass_
    // HD: tranche 3, the same two from the engine's render of the sky (one sampler set per frame slot).
    VkShaderModule skyTexFrag_ = VK_NULL_HANDLE;
    VkDescriptorSetLayout skyTexSetLayout_ = VK_NULL_HANDLE;
    VkPipelineLayout skyTexLayout_ = VK_NULL_HANDLE;
    VkPipeline skyTexUnder_ = VK_NULL_HANDLE, skyTexAlone_ = VK_NULL_HANDLE;
    VkDescriptorPool skyTexPool_ = VK_NULL_HANDLE;
    VkSampler skyTexSampler_ = VK_NULL_HANDLE;
    std::vector<VkDescriptorSet> skyTexSets_;
    Stats stats_;
};
}
