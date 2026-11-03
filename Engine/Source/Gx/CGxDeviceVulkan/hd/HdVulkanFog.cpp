// SPDX-License-Identifier: GPL-3.0-or-later
// HD: HdFog.cpp port. No dependency on the Cata water or the AO module.
#include "HdVulkanFog.h"
#include <algorithm>
#include <cmath>
#include <cstring>
#include <initializer_list>
#include <new>
#ifndef HD_FOG_STANDALONE
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxTex.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/Types.h"
#include "Engine/Source/Gx/GxSeam.h" // HD (Claude): g_gxCataPlane, read only
#include "Engine/Source/Services/Texture.h"
#include "Engine/Source/ShaderEffect/ShadowCache.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "WoW/Source/WorldClient/HD/HdForever.h"
#include "WoW/Source/WorldClient/HD/HdFog.h"
#include "WoW/Source/DB/Rec/LightRec.h"
#include "native/Slots.hpp"
#include "native/Present.hpp"
#include "stages/Chain.hpp"
#include "wxl/Script.hpp"
#endif

namespace HD::VulkanFog {
namespace {
#include "shaders/fog/HdVulkanFog.spv.h"
    bool Invert(const float* m, float* out) {
        float inv[16];
        inv[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] + m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
        inv[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] - m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
        inv[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] + m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
        inv[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] - m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
        inv[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] - m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
        inv[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] + m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
        inv[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] - m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
        inv[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] + m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
        inv[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] + m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
        inv[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] - m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
        inv[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] + m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
        inv[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] - m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
        inv[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] - m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
        inv[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] + m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
        inv[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] - m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
        inv[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] + m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];
        float det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];
        if (fabsf(det) < 1e-12f) return false;
        det = 1.0f / det;
        for (int i = 0; i < 16; i++) out[i] = inv[i] * det;
        return true;
    }


}
float Phase(float cosine,float g) {
    g=std::clamp(g,-.95f,.95f);
    float k=(1-g)/std::sqrt(std::max(1+g*g-2*g*cosine,1e-4f));return k*k*k;
}
float TonePeak(float peak) {return peak>.7f?.7f+.3f*(1-std::exp(-(peak-.7f)/.3f)):peak;}
bool Prepare(const WXL_VkStageContext& ctx,Parameters& parameters) {
    if(!ctx.sceneValid || !ctx.scene || !ctx.extent.width || !ctx.extent.height || ctx.extent.width>16384 || ctx.extent.height>16384) return false;
    const float* p=ctx.scene->projection;const auto& vp=ctx.viewport;
    for(int i=0;i<16;++i) if(!std::isfinite(p[i]) || !std::isfinite(ctx.scene->view[i])) return false;
    if(p[0]==0 || p[5]==0 || p[11]!=1 || p[15]!=0 || p[10]<=0 || p[14]>=0 ||
       !std::isfinite(vp.minDepth) || !std::isfinite(vp.maxDepth) || vp.maxDepth<=vp.minDepth ||
       !std::isfinite(vp.width) || !std::isfinite(vp.height) || vp.width<=0 || vp.height<=0 ||
       !std::isfinite(vp.x) || !std::isfinite(vp.y)) return false;
    float inv[16];if(!Invert(ctx.scene->view,inv)) return false;
    Parameters next=parameters;
    next.r[0]={1.0f/float(ctx.extent.width),1.0f/float(ctx.extent.height),p[10],p[14]};
    next.r[1]={p[0],p[5],p[8],p[9]};
    for(int i=0;i<3;++i) next.r[2+i]={inv[i*4],inv[i*4+1],inv[i*4+2],0};
    next.r[7].x=vp.minDepth;next.r[7].y=vp.maxDepth;
    next.viewport={vp.x/float(ctx.extent.width),vp.y/float(ctx.extent.height),float(ctx.extent.width)/vp.width,float(ctx.extent.height)/vp.height};
    next.flags[0]=ctx.swapRB;
    if(next.r[5].w<=0 || next.r[8].x<=0 || next.r[8].y<=0) return false;
    for(const Row& r:next.r) if(!std::isfinite(r.x)||!std::isfinite(r.y)||!std::isfinite(r.z)||!std::isfinite(r.w)) return false;
    if(!std::isfinite(next.extra.x)||!std::isfinite(next.extra.y)) return false;
    parameters=next;return true;
}
struct Effect::Impl {
    const WXL_VkRenderApi* api=nullptr;WXL_VkDeviceInfo device{};
    const char* error="";uint32_t width=0,height=0;uint64_t last=0;
    VkDescriptorSetLayout setLayout{};VkPipelineLayout layout{};VkPipeline pipeline{};VkDescriptorPool pool{};
    VkPipeline march{},blurH{},composite{}; // HD: the march + two depth-aware blurs (the shafts' grain)
    VkSampler point{},comparison{};
    uint32_t failedWidth=0,failedHeight=0;
    struct Slot {void* handle=nullptr;WXL_VkBufferInfo buffer{};VkDescriptorSet set{};uint64_t serial=0;
        void* scatter[2]{};WXL_VkImageInfo scatterInfo[2]{};}; // HD: RGBA16F in-scatter + transmittance, A then B
    std::array<Slot,8> slots{};
#define FOG_FUNCTIONS(X) X(CreateDescriptorSetLayout) X(DestroyDescriptorSetLayout) X(CreatePipelineLayout) X(DestroyPipelineLayout) \
    X(CreateDescriptorPool) X(DestroyDescriptorPool) X(AllocateDescriptorSets) X(UpdateDescriptorSets) \
    X(CreateSampler) X(DestroySampler) X(CreateShaderModule) X(DestroyShaderModule) X(CreateComputePipelines) X(DestroyPipeline) \
    X(CmdPipelineBarrier) X(CmdBindPipeline) X(CmdBindDescriptorSets) X(CmdDispatch)
#define DECL(n) PFN_vk##n n=nullptr;
    FOG_FUNCTIONS(DECL)
#undef DECL
};
bool Effect::Init(const WXL_VkRenderApi* api) {
    if(state_) return true;
    if(!api || api->apiVersion!=WXL_VK_RENDER_API_VERSION || api->structSize<offsetof(WXL_VkRenderApi,RetireImage)+sizeof(api->RetireImage) ||
       !api->GetDeviceInfo || !api->CreateBuffer || !api->RetireBuffer || !api->FlushBuffer || !api->CreateImage || !api->RetireImage) return false;
    auto* s=new(std::nothrow) Impl();if(!s) return false;
    s->device.structSize=sizeof s->device;
    if(!api->GetDeviceInfo(&s->device)||!s->device.device||!s->device.getDeviceProcAddr||!s->device.frameSlots||s->device.frameSlots>8) {delete s;return false;}
#define LOAD(n) s->n=reinterpret_cast<PFN_vk##n>(s->device.getDeviceProcAddr(s->device.device,"vk" #n));if(!s->n){delete s;return false;}
    FOG_FUNCTIONS(LOAD)
#undef LOAD
    s->api=api;state_=s;
    auto fail=[&](){Shutdown(0);return false;};
    std::array<VkDescriptorSetLayoutBinding,11> bindings{};
    for(uint32_t i=0;i<11;++i) {
        auto& b=bindings[i];b.binding=i;b.descriptorCount=1;b.stageFlags=VK_SHADER_STAGE_COMPUTE_BIT;
        b.descriptorType=i==0?VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER:((i==2||i>=9)?VK_DESCRIPTOR_TYPE_STORAGE_IMAGE:VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER);
    }
    VkDescriptorSetLayoutCreateInfo sl{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO};sl.bindingCount=11;sl.pBindings=bindings.data();
    if(s->CreateDescriptorSetLayout(s->device.device,&sl,nullptr,&s->setLayout)!=VK_SUCCESS) return fail();
    VkPipelineLayoutCreateInfo pl{VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO};pl.setLayoutCount=1;pl.pSetLayouts=&s->setLayout;
    if(s->CreatePipelineLayout(s->device.device,&pl,nullptr,&s->layout)!=VK_SUCCESS) return fail();
    const uint32_t* codes[4]={kHdVulkanFog,kHdVulkanFogMarch,kHdVulkanFogBlurH,kHdVulkanFogComposite};
    const size_t bytes[4]={sizeof kHdVulkanFog,sizeof kHdVulkanFogMarch,sizeof kHdVulkanFogBlurH,sizeof kHdVulkanFogComposite};
    VkPipeline* targets[4]={&s->pipeline,&s->march,&s->blurH,&s->composite};
    for(int i=0;i<4;++i) {
        VkShaderModuleCreateInfo sm{VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO};sm.codeSize=bytes[i];sm.pCode=codes[i];
        VkShaderModule module{};if(s->CreateShaderModule(s->device.device,&sm,nullptr,&module)!=VK_SUCCESS) return fail();
        VkComputePipelineCreateInfo cp{VK_STRUCTURE_TYPE_COMPUTE_PIPELINE_CREATE_INFO};cp.stage.sType=VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
        cp.stage.stage=VK_SHADER_STAGE_COMPUTE_BIT;cp.stage.module=module;cp.stage.pName="main";cp.layout=s->layout;
        VkResult result=s->CreateComputePipelines(s->device.device,s->device.pipelineCache,1,&cp,nullptr,targets[i]);
        s->DestroyShaderModule(s->device.device,module,nullptr);if(result!=VK_SUCCESS) return fail();
    }
    VkSamplerCreateInfo si{VK_STRUCTURE_TYPE_SAMPLER_CREATE_INFO};si.magFilter=si.minFilter=VK_FILTER_NEAREST;si.mipmapMode=VK_SAMPLER_MIPMAP_MODE_NEAREST;
    si.addressModeU=si.addressModeV=si.addressModeW=VK_SAMPLER_ADDRESS_MODE_CLAMP_TO_EDGE;
    if(s->CreateSampler(s->device.device,&si,nullptr,&s->point)!=VK_SUCCESS) return fail();
    si.compareEnable=VK_TRUE;si.compareOp=VK_COMPARE_OP_LESS_OR_EQUAL;si.magFilter=si.minFilter=VK_FILTER_LINEAR;
    if(s->CreateSampler(s->device.device,&si,nullptr,&s->comparison)!=VK_SUCCESS) return fail();
    const uint32_t n=s->device.frameSlots;
    VkDescriptorPoolSize sizes[3]={{VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER,n},{VK_DESCRIPTOR_TYPE_STORAGE_IMAGE,n*3},{VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER,n*7}};
    VkDescriptorPoolCreateInfo pi{VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO};pi.maxSets=n;pi.poolSizeCount=3;pi.pPoolSizes=sizes;
    if(s->CreateDescriptorPool(s->device.device,&pi,nullptr,&s->pool)!=VK_SUCCESS) return fail();
    std::array<VkDescriptorSetLayout,8> layouts{};layouts.fill(s->setLayout);std::array<VkDescriptorSet,8> sets{};
    VkDescriptorSetAllocateInfo ai{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO};ai.descriptorPool=s->pool;ai.descriptorSetCount=n;ai.pSetLayouts=layouts.data();
    if(s->AllocateDescriptorSets(s->device.device,&ai,sets.data())!=VK_SUCCESS) return fail();
    WXL_VkBufferDesc bd{sizeof(Parameters),VK_BUFFER_USAGE_UNIFORM_BUFFER_BIT,WXL_VK_MEMORY_STREAM};
    for(uint32_t i=0;i<n;++i) {
        auto& slot=s->slots[i];slot.set=sets[i];slot.handle=api->CreateBuffer(&bd,&slot.buffer);
        if(!slot.handle || !slot.buffer.mapped) return fail();
    }
    return true;
}
bool Effect::Resize(uint32_t w,uint32_t h) {
    if(!state_ || !w || !h || w>16384 || h>16384) return false;
    auto* s=state_;
    // HD: the two scatter images per slot follow the back buffer. On a failed allocation the previous ones (or none:
    // then Record uses the original single pass) are kept, and the same size is not retried every frame.
    bool have=s->slots[0].scatter[0]!=nullptr;
    if(s->width==w && s->height==h && (have || (s->failedWidth==w && s->failedHeight==h))) return true;
    std::array<std::array<void*,2>,8> handles{};std::array<std::array<WXL_VkImageInfo,2>,8> infos{};bool okay=true;
    WXL_VkImageDesc desc{VK_FORMAT_R16G16B16A16_SFLOAT,w,h,1,VK_IMAGE_USAGE_STORAGE_BIT,VK_IMAGE_ASPECT_COLOR_BIT};
    for(uint32_t i=0;i<s->device.frameSlots && okay;++i) for(uint32_t j=0;j<2;++j) {
        handles[i][j]=s->api->CreateImage(&desc,&infos[i][j]);if(!handles[i][j]) {okay=false;break;}
    }
    if(!okay) {
        for(auto& slot:handles) for(auto handle:slot) if(handle) s->api->RetireImage(handle,0);
        s->failedWidth=w;s->failedHeight=h;
        for(auto& slot:s->slots) for(auto& handle:slot.scatter) if(handle) {s->api->RetireImage(handle,slot.serial);handle=nullptr;}
    } else {
        for(uint32_t i=0;i<s->device.frameSlots;++i) for(uint32_t j=0;j<2;++j) {
            auto& slot=s->slots[i];if(slot.scatter[j]) s->api->RetireImage(slot.scatter[j],slot.serial);
            slot.scatter[j]=handles[i][j];slot.scatterInfo[j]=infos[i][j];
        }
        s->failedWidth=s->failedHeight=0;
    }
    s->width=w;s->height=h;return true;
}
bool Effect::Record(const WXL_VkStageContext& ctx,const Parameters& parameters,const ShadowMaps& maps) {
    auto* s=state_;if(!s) return false;
    if(ctx.structSize<sizeof ctx || ctx.point!=Point || !ctx.cmd || !ctx.depthView || !ctx.colorView || !ctx.serial ||
       ctx.colorFormat!=VK_FORMAT_R8G8B8A8_UNORM || ctx.colorLayout!=VK_IMAGE_LAYOUT_GENERAL ||
       ctx.frameSlots!=s->device.frameSlots || ctx.frameSlot>=s->device.frameSlots || ctx.extent.width!=s->width || ctx.extent.height!=s->height) {
        s->error="fog frame/extent unavailable";return false;
    }
    auto& slot=s->slots[ctx.frameSlot];if(slot.serial==ctx.serial || slot.serial>ctx.completedSerial) {s->error="fog slot in flight/duplicate";return false;}
    Parameters p=parameters;if(!Prepare(ctx,p)) {s->error="unsupported fog projection/parameters";return false;}
    bool shadows=maps.serial==ctx.serial;
    for(int i=0;i<3;++i) shadows=shadows && maps.view[i] && (maps.layout[i]==VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL ||
        maps.layout[i]==VK_IMAGE_LAYOUT_GENERAL || maps.layout[i]==VK_IMAGE_LAYOUT_DEPTH_STENCIL_READ_ONLY_OPTIMAL);
    p.r[33].x=shadows?1.0f:0;p.r[33].y=shadows&&maps.comparison?1.0f:0;
    // HD (Claude): this frame's water plane (the liquids write no depth): the fog stops at the surface.
    const bool plane=g_gxCataPlane.m_valid&&std::isfinite(g_gxCataPlane.m_height);
    p.extra.z=plane?g_gxCataPlane.m_height:0;p.extra.w=plane?1.0f:0;
    std::memcpy(slot.buffer.mapped,&p,sizeof p);s->api->FlushBuffer(slot.handle);
    VkDescriptorBufferInfo uniform{slot.buffer.buffer,0,sizeof p};
    std::array<VkDescriptorImageInfo,9> images{};
    images[1]={s->point,ctx.depthView,ctx.depthLayout};images[2]={VK_NULL_HANDLE,ctx.colorView,ctx.colorLayout};
    for(int i=0;i<3;++i) {
        images[3+i]={s->point,shadows&&!maps.comparison?maps.view[i]:ctx.depthView,shadows&&!maps.comparison?maps.layout[i]:ctx.depthLayout};
        images[6+i]={s->comparison,shadows&&maps.comparison?maps.view[i]:ctx.depthView,shadows&&maps.comparison?maps.layout[i]:ctx.depthLayout};
    }
    // HD: the debug views 1, 2 and 4 show raw data: the original single pass. So does a missing scatter image.
    const int mode=int(p.r[7].z+.5f);
    const bool split=slot.scatter[0] && slot.scatter[1] && mode!=1 && mode!=2 && mode!=4;
    std::array<VkDescriptorImageInfo,11> all{};for(int i=0;i<9;++i) all[i]=images[i];
    if(split) for(int j=0;j<2;++j) all[9+j]={VK_NULL_HANDLE,slot.scatterInfo[j].view,VK_IMAGE_LAYOUT_GENERAL};
    const uint32_t count=split?11:9;
    std::array<VkWriteDescriptorSet,11> writes{};
    for(uint32_t i=0;i<count;++i) {
        auto& w=writes[i];w.sType=VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;w.dstSet=slot.set;w.dstBinding=i;w.descriptorCount=1;
        w.descriptorType=i==0?VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER:((i==2||i>=9)?VK_DESCRIPTOR_TYPE_STORAGE_IMAGE:VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER);
        if(i==0) w.pBufferInfo=&uniform;else w.pImageInfo=&all[i];
    }
    s->UpdateDescriptorSets(s->device.device,count,writes.data(),0,nullptr);
    VkMemoryBarrier barrier{VK_STRUCTURE_TYPE_MEMORY_BARRIER};barrier.srcAccessMask=VK_ACCESS_MEMORY_WRITE_BIT;barrier.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_SHADER_WRITE_BIT;
    s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_ALL_COMMANDS_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,1,&barrier,0,nullptr,0,nullptr);
    s->CmdBindDescriptorSets(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->layout,0,1,&slot.set,0,nullptr);
    if(split) {
        // HD: this frame rewrites both scatter images whole: their old content is discarded (UNDEFINED -> GENERAL).
        std::array<VkImageMemoryBarrier,2> layouts{};
        for(int j=0;j<2;++j) {
            auto& b=layouts[j];b.sType=VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;b.oldLayout=VK_IMAGE_LAYOUT_UNDEFINED;b.newLayout=VK_IMAGE_LAYOUT_GENERAL;
            b.srcQueueFamilyIndex=b.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;b.image=slot.scatterInfo[j].image;
            b.subresourceRange.aspectMask=VK_IMAGE_ASPECT_COLOR_BIT;b.subresourceRange.levelCount=b.subresourceRange.layerCount=1;
            b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_SHADER_WRITE_BIT;
        }
        s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,0,nullptr,0,nullptr,2,layouts.data());
        VkMemoryBarrier between{VK_STRUCTURE_TYPE_MEMORY_BARRIER};between.srcAccessMask=VK_ACCESS_SHADER_WRITE_BIT;between.dstAccessMask=VK_ACCESS_SHADER_READ_BIT;
        VkPipeline passes[3]={s->march,s->blurH,s->composite};
        for(int i=0;i<3;++i) {
            if(i) s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,1,&between,0,nullptr,0,nullptr);
            s->CmdBindPipeline(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,passes[i]);
            s->CmdDispatch(ctx.cmd,(s->width+7)/8,(s->height+7)/8,1);
        }
    } else {
        s->CmdBindPipeline(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->pipeline);
        s->CmdDispatch(ctx.cmd,(s->width+7)/8,(s->height+7)/8,1);
    }
    barrier.srcAccessMask=VK_ACCESS_SHADER_WRITE_BIT;barrier.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_TRANSFER_READ_BIT;
    s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT|VK_PIPELINE_STAGE_TRANSFER_BIT,0,1,&barrier,0,nullptr,0,nullptr);
    slot.serial=s->last=ctx.serial;s->error="";return true;
}
bool Effect::Shutdown(uint64_t completed) {
    auto* s=state_;if(!s) return true;if(completed<s->last) {s->error="fog shutdown pending serial";return false;}
    for(auto& slot:s->slots) {
        if(slot.handle) s->api->RetireBuffer(slot.handle,slot.serial);
        for(auto handle:slot.scatter) if(handle) s->api->RetireImage(handle,slot.serial);
    }
    if(s->pool) s->DestroyDescriptorPool(s->device.device,s->pool,nullptr);
    if(s->point) s->DestroySampler(s->device.device,s->point,nullptr);
    if(s->comparison) s->DestroySampler(s->device.device,s->comparison,nullptr);
    if(s->pipeline) s->DestroyPipeline(s->device.device,s->pipeline,nullptr);
    for(VkPipeline extra:{s->march,s->blurH,s->composite}) if(extra) s->DestroyPipeline(s->device.device,extra,nullptr);
    if(s->layout) s->DestroyPipelineLayout(s->device.device,s->layout,nullptr);
    if(s->setLayout) s->DestroyDescriptorSetLayout(s->device.device,s->setLayout,nullptr);
    delete s;state_=nullptr;return true;
}
uint64_t Effect::LastUsed() const {return state_?state_->last:0;}
const char* Effect::Error() const {return state_?state_->error:"fog not initialized";}

#ifndef HD_FOG_STANDALONE

namespace {
Effect effect;
const WXL_VkRenderApi* api=nullptr;
void* stage=nullptr;
CVar *enabled=nullptr,*density=nullptr,*sunScale=nullptr,*ambient=nullptr,*shadow=nullptr,*debug=nullptr,*info=nullptr;
Parameters current;
ShadowMaps currentMaps;
bool wanted=false;
bool sawRecord=false;
const char* lastInfo="";
float extraX=0,extraY=0;
float Clamp(float x,float lo,float hi) {return std::isfinite(x)?std::clamp(x,lo,hi):lo;}
    // HD: blend two Forever fogs, t = 0 keeps a, 1 gives b
    void LerpFog(HD::ForeverFog& a, const HD::ForeverFog& b, float t) {
        for (int i = 0; i < 3; i++) HD::LerpFogLayer(a.layers[i], b.layers[i], t);
        if (b.count > a.count) a.count = b.count;
    }

    // HD: Forever's fog for one light, clear weather blended to storm like the client's colours.
    bool LightFog(const LightRec* light, int32_t time, float storm, HD::ForeverFog& out) {
        if (!HD::ForeverFogAt(light, 0, time, &out)) return false;
        if (storm > 0.0f) {
            HD::ForeverFog stormFog;
            if (HD::ForeverFogAt(light, 2, time, &stormFog)) LerpFog(out, stormFog, storm);
        }
        return true;
    }

    // HD: the fog where the camera is: the zone light, then the nearby area lights blended in by
    // distance (same falloff as DayNight::BlendAreaLight). Lights Forever does not have fade the fog out.
    // Returns how much Forever fog there is here (0 = none).
    float CurrentForeverFog(HD::ForeverFog& fog) {
        const DayNight::DNInfo& info = DayNight::g_dnInfo;
        const TSGrowableArray<const LightRec*>& lights = DayNight::g_areaLights;
        if (!lights.m_count) return 0.0f;
        int32_t time = static_cast<int32_t>(info.m_dayProgression * 2880.0f);
        float storm = info.m_stormBlend;

        bool have = LightFog(lights.m_data[0], time, storm, fog);
        float strength = have ? 1.0f : 0.0f;

        struct Near { const LightRec* light; float distSq; float weight; };
        Near nearLights[32];
        int32_t count = 0;
        for (uint32_t i = 1; i < lights.m_count && count < 32; i++) {
            const LightRec* light = lights.m_data[i];
            float dx = info.m_lightRefPos.x - light->m_gameCoords[0];
            float dy = info.m_lightRefPos.y - light->m_gameCoords[1];
            float dz = info.m_lightRefPos.z - light->m_gameCoords[2];
            float distSq = dx * dx + dy * dy + dz * dz;
            if (distSq >= light->m_gameFalloffEnd * light->m_gameFalloffEnd) continue;
            float distance = sqrtf(distSq);
            float weight = 1.0f;
            if (distance > light->m_gameFalloffStart) {
                float span = light->m_gameFalloffEnd - light->m_gameFalloffStart;
                weight = span > 0.0f ? Clamp(1.0f - (distance - light->m_gameFalloffStart) / span, 0.0f, 1.0f) : 0.0f;
            }
            if (weight <= 0.0f) continue;
            nearLights[count].light = light;
            nearLights[count].distSq = distSq;
            nearLights[count].weight = weight;
            count++;
        }
        // farthest first, so the nearest light wins
        for (int32_t i = 1; i < count; i++) {
            Near n = nearLights[i];
            int32_t j = i - 1;
            while (j >= 0 && nearLights[j].distSq < n.distSq) { nearLights[j + 1] = nearLights[j]; j--; }
            nearLights[j + 1] = n;
        }
        for (int32_t i = 0; i < count; i++) {
            HD::ForeverFog other;
            float w = nearLights[i].weight;
            if (LightFog(nearLights[i].light, time, storm, other)) {
                if (!have) { fog = other; have = true; strength = w; }
                else { LerpFog(fog, other, w); strength += (1.0f - strength) * w; }
            } else {
                strength *= 1.0f - w;
            }
        }
        return have ? strength : 0.0f;
    }


void Info(const char* value) {if(info && std::strcmp(lastInfo,value)){info->Set(value,true,false,false,false);lastInfo=value;}}
CVar* Var(const char* name,const char* help,const char* value,uint32_t flags=1) {
    if(auto* existing=CVar::LookupRegistered(name)) return existing;
    return CVar::Register(name,help,flags,value,nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
}
int __cdecl Wanted(void*) {return wanted?1:0;}
void __cdecl Stage(void*,const WXL_VkStageContext* ctx) {if(ctx) {sawRecord=true;Record(*ctx);}}
bool IsVulkan() {return g_theGxDevicePtr && g_theGxDevicePtr->DeviceApi()==GxApi_Vulkan;}
ShadowMaps Maps(uint64_t serial) {
    ShadowMaps result;
    if(!shadow || !shadow->m_intValue || CShadowCache::GetShadowMode()<=SHADOW_MEDIUM) return result;
    for(int i=0;i<3;++i) {
        auto& band=CShadowCache::s_extShadowBands[i];
        CTexture* texture=band.m_textures[band.m_current];if(!texture) return {};
        CGxTex* gx=TextureGetGxTex(texture,1,nullptr);
        const wxlvk::vk::texture::Image* image=nullptr;
        if(!gx || gx->m_needsCreation || !wxlvk::native::impl::ResolveTexture(gx,image) || !image || image->cube || image->layers!=1) return {};
        bool compare=gx->m_format==GxTex_D24X8;
        bool depth=image->format==VK_FORMAT_D16_UNORM || image->format==VK_FORMAT_D32_SFLOAT || image->format==VK_FORMAT_D24_UNORM_S8_UINT || image->format==VK_FORMAT_D32_SFLOAT_S8_UINT;
        if(compare && !depth) return {};
        if(i && compare!=result.comparison) return {};
        result.comparison=compare;result.view[i]=image->view;result.layout[i]=image->layout;
        if(result.layout[i]!=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL && result.layout[i]!=VK_IMAGE_LAYOUT_DEPTH_STENCIL_READ_ONLY_OPTIMAL && result.layout[i]!=VK_IMAGE_LAYOUT_GENERAL) return {};
    }
    result.serial=serial;return result;
}
bool BuildLive() {
    current={};currentMaps={};wanted=enabled && enabled->m_intValue!=0;
    if(!wanted) {Info("off");return false;}
    HD::ForeverFog fog{};float weight=CurrentForeverFog(fog);
    int mode=debug?std::clamp(debug->m_intValue,0,4):0;
    if(weight<=0 && !mode) {wanted=false;Info("Vulkan fog: no fog data for this light");return false;}
    auto& dn=DayNight::g_dnInfo;
    current.r[5]={dn.m_cameraPos.x,dn.m_cameraPos.y,dn.m_cameraPos.z,dn.m_farClip>50?dn.m_farClip:1000};
    auto sun=DayNight::g_planets.m_sun.m_position-dn.m_cameraPos;
    float length=std::sqrt(sun.x*sun.x+sun.y*sun.y+sun.z*sun.z);
    if(length<1e-4f) {sun.x=0;sun.y=0;sun.z=1;length=1;}
    sun.x/=length;sun.y/=length;sun.z/=length;current.r[6]={sun.x,sun.y,sun.z,0};
    current.r[7].z=float(mode);current.r[8]={5000,1.0f/5000,0,0};current.extra={extraX,extraY,0,0};
    float den=Clamp(density?density->m_floatValue:1,0,5)*weight;
    float lit=Clamp(sunScale?sunScale->m_floatValue:1,0,5)*.88f;
    float base=Clamp(ambient?ambient->m_floatValue:1,0,5)*.034f;
    for(int i=0;i<3 && i<fog.count;++i) {
        const auto& l=fog.layers[i];if(!l.flags || l.density<=0) continue;
        auto& a=current.r[9+i*5];auto& b=current.r[10+i*5];auto& c=current.r[11+i*5];auto& d=current.r[12+i*5];auto& e=current.r[13+i*5];
        a={std::pow(l.emissive[0],2.2f)*base,std::pow(l.emissive[1],2.2f)*base,std::pow(l.emissive[2],2.2f)*base,l.density*.0035f*den};
        b={std::pow(l.diffuse[0],2.2f)*l.intensity*lit,std::pow(l.diffuse[1],2.2f)*l.intensity*lit,std::pow(l.diffuse[2],2.2f)*l.intensity*lit,l.g};
        c={l.start,l.strength,l.exponent,(l.flags&1)?1.0f:0};
        float rel=(l.flags&2)?dn.m_playerPos.z:0;
        d={l.topRate*.01f,l.topHeight+rel,l.bottomRate*.01f,l.bottomHeight+rel};
        e={std::pow(l.shadow[0],2.2f)*base,std::pow(l.shadow[1],2.2f)*base,std::pow(l.shadow[2],2.2f)*base,l.shadowMul};
    }
    current.r[33].z=Clamp(sun.z*4+.2f,0,1);
    return true;
}
}
bool Init() {
    if(stage) return true;
    enabled=Var("hdFog","HD: global volumetric fog, 0 off / 1 on","0");
    density=Var("hdFogDensity","HD: fog density multiplier, 0..5","1");sunScale=Var("hdFogSun","HD: sun scattering multiplier, 0..5","1");
    ambient=Var("hdFogAmbient","HD: ambient fog multiplier, 0..5","1");shadow=Var("hdFogShadow","HD: sun shadow cascades in the fog","1");
    debug=Var("hdFogDebug","HD: 1 distance, 2 depth, 3 fog alone, 4 sun shadows","0",0);info=Var("hdFogInfo","HD: fog status","off",0);
    api=wxl::ScriptMgr::GetInterface<const WXL_VkRenderApi>(WXL_VK_RENDER_API_NAME,WXL_VK_RENDER_API_VERSION);
    if(!api || api->structSize<offsetof(WXL_VkRenderApi,UnregisterStage)+sizeof(api->UnregisterStage) || !api->RegisterStage || !api->UnregisterStage || !effect.Init(api)) {Info("Vulkan fog: Init failed");return false;}
    WXL_VkStageDesc desc{};desc.structSize=sizeof desc;desc.point=Point;desc.order=100;
    desc.flags=WXL_VK_STAGE_NEEDS_DEPTH|WXL_VK_STAGE_WRITES_COLOR;desc.Wanted=Wanted;desc.Run=Stage;
    stage=api->RegisterStage(&desc,"HD.Fog");
    if(!stage) {effect.Shutdown(0);Info("Vulkan fog: exact before-spells point not installed");return false;}
    Info("off");return true;
}
void Resize() {
    if(!stage || !enabled || !enabled->m_intValue) return;
    VkFormat format{};VkExtent2D extent{};
    if(wxlvk::native::present::BackBufferInfo(format,extent)) effect.Resize(extent.width,extent.height);
}
void ReachBoundary() {
    if(!stage || !BuildLive()) return;
    sawRecord=false;
    // Appended private Point index 4 corresponds to public point 5; see INTEGRATION.md.
    wxlvk::stages::chain::Run(static_cast<wxlvk::stages::Point>(4));
    wanted=false; // never request this effect from a different engine boundary
    if(!sawRecord) Info("Vulkan fog skipped: exact boundary/backbuffer/depth unavailable");
}
void BeginWorld() {if(!IsVulkan()) HD::FogBeginWorld();}
void EndWorld() {if(IsVulkan()) ReachBoundary();else HD::FogEndWorld();}
void FinishWorld() {if(!IsVulkan()) HD::FogFinishWorld();}
void Record(const WXL_VkStageContext& ctx) {
    currentMaps=Maps(ctx.serial);
    if(currentMaps.serial==ctx.serial) std::memcpy(&current.r[24],&CShadowCache::s_shadowMatrices[3].x,9*sizeof(Row));
    if(!effect.Record(ctx,current,currentMaps)) {Info(effect.Error());return;}
    Info(currentMaps.serial?"Vulkan fog: 3 layers / 32 steps, shadow maps":"Vulkan fog: 3 layers / 32 steps, no shadow maps (sun height retained)");
}
void SetSubpixelOffset(float x,float y) {extraX=x;extraY=y;}
bool Shutdown() {
    if(!api && !stage) return true;
    wanted=false;if(stage) {api->UnregisterStage(stage);stage=nullptr;}
    if(effect.LastUsed()>wxlvk::native::present::Completed()) {
        if(wxlvk::native::present::FrameOpen() && !wxlvk::native::present::FlushAndWait()) return false;
        if(!wxlvk::native::present::WaitSerial(effect.LastUsed())) return false;
    }
    bool okay=effect.Shutdown(wxlvk::native::present::Completed());if(okay) {api=nullptr;Info("off");}return okay;
}

#endif
}
