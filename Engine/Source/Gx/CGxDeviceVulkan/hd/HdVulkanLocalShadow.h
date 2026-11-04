// SPDX-License-Identifier: GPL-3.0-or-later
#pragma once
#include <array>
#include <cstddef>
#include <cstdint>
#include "wxl/VkRenderApi.h"
namespace HD::VulkanLocalShadow {
struct Vec3 {float x=0,y=0,z=0;};
struct Light {uint64_t key=0;Vec3 position;float radius=12,nearPlane=.05f;};
struct Snapshot {
    uint64_t serial=0,key=0;VkImageView view{};VkFormat format{};VkImageLayout layout{};
    uint32_t faceSize=0;float matrices[6][16]{};Light light;
};
struct alignas(16) Parameters {
    float worldFromView[16]{};float matrices[6][16]{};
    float screen[4]{},view[4]{},depth[4]{},light[4]{},atlas[4]{};
    uint32_t flags[4]{}; // mode, swapRB, reserved, reserved
};
static_assert(sizeof(Parameters)==544 && offsetof(Parameters,flags)==528,"std140 local shadow parameters");
bool BuildMatrices(const Light& light,float (&matrices)[6][16]);
uint32_t Face(Vec3 direction);
bool Project(const Light& light,const float (&matrices)[6][16],Vec3 point,uint32_t& face,float& u,float& v,float& depth);
bool Prepare(const WXL_VkStageContext& ctx,const Snapshot& map,uint32_t mode,float compareBias,Parameters& params);
// Future receiver contract: delta = THIS lamp's exact contribution in the scene's encoded RGB,
// including its material/fog/clipping. It is NOT the full lit scene or an albedo estimate.
std::array<float,3> ApplyIsolatedDelta(std::array<float,3> scene,std::array<float,3> delta,float visibility);
class Effect {
public:
    Effect()=default;Effect(const Effect&)=delete;Effect&operator=(const Effect&)=delete;
    bool Init(const WXL_VkRenderApi* api);
    bool Resize(uint32_t faceSize); // 128,256,512; changing it after first use requires Shutdown/reinit
    bool Build(const WXL_VkRenderContext& ctx,const Light& light,float rasterBias=0,float slopeBias=0);
    bool Get(uint64_t serial,Snapshot& snapshot) const;
    bool RecordDebug(const WXL_VkStageContext& ctx,uint32_t mode,float compareBias=.001f);
    bool Shutdown(uint64_t completedSerial);
    uint64_t LastUsed() const;
    const char* Error() const;
private:
    struct Impl;Impl*state_=nullptr;
};
bool Init();void Resize();bool Shutdown();
// Future same-frame producer: pin BEFORE opaque drawing; the later build must use this exact lamp.
void SetFrameLight(uint64_t serial,const Light& light);
bool GetFrameMap(uint64_t serial,Snapshot& snapshot);
void SetSubpixelOffset(float x,float y); // debug receiver offset only, missing from projection/viewport
}
