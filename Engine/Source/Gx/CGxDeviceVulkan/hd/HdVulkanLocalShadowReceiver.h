// SPDX-License-Identifier: GPL-3.0-or-later
#pragma once
#include "HdVulkanLocalShadow.h"
namespace HD::VulkanLocalShadowReceiver {
using Light=HD::VulkanLocalShadow::Light;
using Snapshot=HD::VulkanLocalShadow::Snapshot;
using Parameters=HD::VulkanLocalShadow::Parameters;
// RGB: final encoded material colour WITH this lamp minus WITHOUT this lamp.
// A: >= .5 = covered by a supported material; clear to 0 every frame.
constexpr uint32_t kEncodedMaterialDifferenceV1=0x48444c31u;
constexpr uint32_t kEncodedMaterialDifferenceDepthV2=0x48444c32u;
constexpr uint32_t kPackedSunLampV3=0x48444c33u;
struct SunInput {VkImageView view{};VkImageLayout layout=VK_IMAGE_LAYOUT_GENERAL;uint64_t serial=0;VkExtent2D extent{};float strength=0;};
struct Token {
    uint64_t serial=0,sceneHash=0;uint32_t frameSlot=0;VkExtent2D extent{};Light light;
};
struct Contribution {
    Token token;VkImageView view{};VkFormat format=VK_FORMAT_UNDEFINED;
    VkImageLayout layout=VK_IMAGE_LAYOUT_UNDEFINED;uint32_t contract=0;
};
// Call on the render thread with the SAME actual world view/projection/viewport as the opaque draws.
// Tokens are metadata consistency checks, not proof of what a material wrote into its image.
bool MakeToken(const WXL_VkStageContext& context,const Light& light,Token& token);
bool Validate(const WXL_VkStageContext& context,const Snapshot& map,const Contribution& delta,
              uint32_t mode,float bias,Parameters& parameters,const char** reason=nullptr);
std::array<float,4> MakeDelta(std::array<float,4> withLamp,std::array<float,4> withoutLamp,bool covered);
std::array<float,4> Compose(std::array<float,4> scene,std::array<float,4> delta,float visibility);
class Effect {
public:
    Effect()=default;Effect(const Effect&)=delete;Effect&operator=(const Effect&)=delete;
    bool Init(const WXL_VkRenderApi* api);
    bool Resize(VkExtent2D extent); // metadata only: no GPU image allocation
    bool Record(const WXL_VkStageContext& context,const Snapshot& map,const Contribution& delta,
                uint32_t mode=1,float bias=.001f,float missingSubpixelX=0,float missingSubpixelY=0,const SunInput* sun=nullptr);
    bool Shutdown(uint64_t completedSerial);
    uint64_t LastUsed() const;const char* Error() const;
private:
    struct Impl;Impl*state_=nullptr;
};
// Engine wrapper: default OFF, consumes only an explicitly published current-frame delta.
bool Init();bool Shutdown();
bool WantsContribution(); // false when OFF or not registered; avoid any producer work
bool PublishDelta(const Contribution& delta); // no ownership transfer; render thread only
uint64_t LastDeltaUse(); // producer must retain image/view until this serial completes
void SetSubpixelOffset(float x,float y); // only jitter missing from matrices/viewport; normally 0
}
