// SPDX-License-Identifier: GPL-3.0-or-later
#include "HdVulkanLocalShadowReceiver.h"
#include <algorithm>
#include <cmath>
#include <cstring>
#include <new>
#ifndef HD_LOCAL_SHADOW_RECEIVER_STANDALONE
#include <cstdio>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "native/Present.hpp"
#include "HdVulkanShadows.h"
#include "wxl/Script.hpp"
#endif
namespace HD::VulkanLocalShadowReceiver {
namespace {
#include "shaders/local-shadow-receiver/HdVulkanLocalShadowReceiver.spv.h"
bool SameLight(const Light&a,const Light&b){return a.key==b.key&&a.position.x==b.position.x&&a.position.y==b.position.y&&a.position.z==b.position.z&&a.radius==b.radius&&a.nearPlane==b.nearPlane;}
bool ReadLayout(VkImageLayout l){return l==VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL||l==VK_IMAGE_LAYOUT_GENERAL||l==VK_IMAGE_LAYOUT_DEPTH_STENCIL_READ_ONLY_OPTIMAL;}
uint64_t HashByte(uint64_t h,uint8_t b){return(h^b)*1099511628211ull;}
uint64_t HashFloat(uint64_t h,float x){if(x==0)x=0;uint32_t bits;std::memcpy(&bits,&x,4);for(int i=0;i<4;++i)h=HashByte(h,uint8_t(bits>>(i*8)));return h;}
}
bool MakeToken(const WXL_VkStageContext&ctx,const Light&light,Token&out){
    if(ctx.structSize<sizeof ctx||!ctx.serial||!ctx.sceneValid||!ctx.scene||!ctx.extent.width||!ctx.extent.height||ctx.extent.width>16384||ctx.extent.height>16384||!ctx.frameSlots||ctx.frameSlot>=ctx.frameSlots)return false;
    float matrices[6][16];if(!HD::VulkanLocalShadow::BuildMatrices(light,matrices))return false;
    uint64_t h=14695981039346656037ull;for(int i=0;i<16;++i){float v=ctx.scene->view[i],p=ctx.scene->projection[i];if(!std::isfinite(v)||!std::isfinite(p))return false;h=HashFloat(HashFloat(h,v),p);}
    const float vp[6]={ctx.viewport.x,ctx.viewport.y,ctx.viewport.width,ctx.viewport.height,ctx.viewport.minDepth,ctx.viewport.maxDepth};
    for(float x:vp){if(!std::isfinite(x))return false;h=HashFloat(h,x);}
    if(ctx.viewport.width<=0||ctx.viewport.height<=0||ctx.viewport.maxDepth<=ctx.viewport.minDepth)return false;
    Token t;t.serial=ctx.serial;t.frameSlot=ctx.frameSlot;t.extent=ctx.extent;t.sceneHash=h;t.light=light;out=t;return true;
}
bool Validate(const WXL_VkStageContext&ctx,const Snapshot&map,const Contribution&delta,uint32_t mode,float bias,Parameters&out,const char**reason){
    auto fail=[&](const char*r){if(reason)*reason=r;return false;};
    if(ctx.structSize<sizeof ctx||ctx.point!=WXL_VK_POINT_AFTER_OPAQUE_WORLD||!ctx.cmd||!ctx.colorView||ctx.colorFormat!=VK_FORMAT_R8G8B8A8_UNORM||ctx.colorLayout!=VK_IMAGE_LAYOUT_GENERAL||mode<1||mode>3)return fail("receiver: incompatible stage/colour/mode");
    if(!ctx.depthView||!ReadLayout(ctx.depthLayout)||(ctx.depthFormat!=VK_FORMAT_D32_SFLOAT&&ctx.depthFormat!=VK_FORMAT_D16_UNORM&&ctx.depthFormat!=VK_FORMAT_D24_UNORM_S8_UINT&&ctx.depthFormat!=VK_FORMAT_D32_SFLOAT_S8_UINT))return fail("receiver: readable world depth required");
    if(!map.view||!ReadLayout(map.layout)||(map.format!=VK_FORMAT_D32_SFLOAT&&map.format!=VK_FORMAT_D16_UNORM)||(map.faceSize!=128&&map.faceSize!=256&&map.faceSize!=512)||map.serial!=ctx.serial||map.key!=map.light.key)return fail("receiver: current shadow atlas required");
    if(!delta.view||delta.view==ctx.colorView||delta.view==ctx.depthView||delta.view==map.view||delta.contract!=kPackedSunLampV3||delta.format!=VK_FORMAT_R32G32B32A32_UINT||!ReadLayout(delta.layout)||delta.layout==VK_IMAGE_LAYOUT_DEPTH_STENCIL_READ_ONLY_OPTIMAL)return fail("receiver: signed isolated material delta required");
    Token expected;if(!MakeToken(ctx,map.light,expected))return fail("receiver: invalid scene/light token");
    const auto&t=delta.token;
    if(t.serial!=expected.serial||t.frameSlot!=expected.frameSlot||t.sceneHash!=expected.sceneHash||t.extent.width!=expected.extent.width||t.extent.height!=expected.extent.height||!SameLight(t.light,expected.light))return fail("receiver: delta frame/camera/light mismatch");
    // Reject corrupted/stale matrices even when a caller accidentally kept the same key.
    float matrices[6][16];if(!HD::VulkanLocalShadow::BuildMatrices(map.light,matrices))return fail("receiver: invalid atlas light");
    if(std::memcmp(matrices,map.matrices,sizeof matrices))return fail("receiver: atlas matrices do not match light");
    Parameters p;if(!HD::VulkanLocalShadow::Prepare(ctx,map,2,bias,p))return fail("receiver: unsupported depth projection");
    p.flags[0]=mode;p.flags[2]=delta.contract;out=p;if(reason)*reason="";return true;
}
std::array<float,4> MakeDelta(std::array<float,4>a,std::array<float,4>b,bool covered){
    if(!covered)return {};for(int i=0;i<4;++i)if(!std::isfinite(a[i])||!std::isfinite(b[i]))return {};
    if(a[3]!=b[3])return {};for(int i=0;i<3;++i)if(a[i]<0||a[i]>1||b[i]<0||b[i]>1)return {};
    return {a[0]-b[0],a[1]-b[1],a[2]-b[2],1};
}
std::array<float,4> Compose(std::array<float,4>s,std::array<float,4>d,float visibility){
    if(!std::isfinite(visibility)||!std::isfinite(d[3])||d[3]<.5f)return s;
    for(int i=0;i<3;++i)if(!std::isfinite(d[i])||std::abs(d[i])>1)return s;
    visibility=std::clamp(visibility,0.0f,1.0f);if(visibility==1)return s;
    for(int i=0;i<3;++i)s[i]=std::clamp(s[i]-d[i]*(1-visibility),0.0f,1.0f);return s;
}
struct Effect::Impl {
    const WXL_VkRenderApi*api=nullptr;WXL_VkDeviceInfo device{};VkExtent2D extent{};uint64_t last=0;const char*error="";
    VkDescriptorSetLayout setLayout{};VkPipelineLayout layout{};VkPipeline pipeline{};VkDescriptorPool pool{};VkSampler sampler{};
    struct Slot {void*uniform=nullptr;WXL_VkBufferInfo buffer{};VkDescriptorSet set{};uint64_t used=0,debugSerial=0;};std::array<Slot,8>slots{};
#define RECEIVER_FUNCTIONS(X) X(CreateDescriptorSetLayout) X(DestroyDescriptorSetLayout) X(CreatePipelineLayout) X(DestroyPipelineLayout) X(CreateComputePipelines) X(DestroyPipeline) X(CreateShaderModule) X(DestroyShaderModule) X(CreateDescriptorPool) X(DestroyDescriptorPool) X(AllocateDescriptorSets) X(UpdateDescriptorSets) X(CreateSampler) X(DestroySampler) X(CmdPipelineBarrier) X(CmdBindPipeline) X(CmdBindDescriptorSets) X(CmdDispatch)
#define DECL(n) PFN_vk##n n=nullptr;
    RECEIVER_FUNCTIONS(DECL)
#undef DECL
};
bool Effect::Init(const WXL_VkRenderApi*api){
    if(state_)return true;
    if(!api||api->apiVersion!=WXL_VK_RENDER_API_VERSION||api->structSize<offsetof(WXL_VkRenderApi,FlushBuffer)+sizeof(api->FlushBuffer)||!api->GetDeviceInfo||!api->CreateBuffer||!api->RetireBuffer||!api->FlushBuffer)return false;
    auto*s=new(std::nothrow)Impl();if(!s)return false;s->device.structSize=sizeof s->device;
    if(!api->GetDeviceInfo(&s->device)||!s->device.device||!s->device.getDeviceProcAddr||!s->device.frameSlots||s->device.frameSlots>8){delete s;return false;}
#define LOAD(n) s->n=reinterpret_cast<PFN_vk##n>(s->device.getDeviceProcAddr(s->device.device,"vk" #n));if(!s->n){delete s;return false;}
    RECEIVER_FUNCTIONS(LOAD)
#undef LOAD
    state_=s;s->api=api;auto fail=[&](){Shutdown(0);return false;};
    VkDescriptorSetLayoutBinding bindings[6]{};for(uint32_t i=0;i<6;++i){auto&b=bindings[i];b.binding=i;b.descriptorCount=1;b.stageFlags=VK_SHADER_STAGE_COMPUTE_BIT;b.descriptorType=i==3?VK_DESCRIPTOR_TYPE_STORAGE_IMAGE:(i==4?VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER:VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER);}
    VkDescriptorSetLayoutCreateInfo sl{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO};sl.bindingCount=6;sl.pBindings=bindings;if(s->CreateDescriptorSetLayout(s->device.device,&sl,nullptr,&s->setLayout)!=VK_SUCCESS)return fail();
    VkPipelineLayoutCreateInfo pl{VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO};pl.setLayoutCount=1;pl.pSetLayouts=&s->setLayout;if(s->CreatePipelineLayout(s->device.device,&pl,nullptr,&s->layout)!=VK_SUCCESS)return fail();
    VkShaderModuleCreateInfo sm{VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO};sm.codeSize=sizeof kHdVulkanLocalShadowReceiver;sm.pCode=kHdVulkanLocalShadowReceiver;VkShaderModule module{};if(s->CreateShaderModule(s->device.device,&sm,nullptr,&module)!=VK_SUCCESS)return fail();
    VkComputePipelineCreateInfo cp{VK_STRUCTURE_TYPE_COMPUTE_PIPELINE_CREATE_INFO};cp.stage.sType=VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;cp.stage.stage=VK_SHADER_STAGE_COMPUTE_BIT;cp.stage.module=module;cp.stage.pName="main";cp.layout=s->layout;
    auto result=s->CreateComputePipelines(s->device.device,s->device.pipelineCache,1,&cp,nullptr,&s->pipeline);s->DestroyShaderModule(s->device.device,module,nullptr);if(result!=VK_SUCCESS)return fail();
    VkSamplerCreateInfo si{VK_STRUCTURE_TYPE_SAMPLER_CREATE_INFO};si.magFilter=si.minFilter=VK_FILTER_NEAREST;si.mipmapMode=VK_SAMPLER_MIPMAP_MODE_NEAREST;si.addressModeU=si.addressModeV=si.addressModeW=VK_SAMPLER_ADDRESS_MODE_CLAMP_TO_EDGE;if(s->CreateSampler(s->device.device,&si,nullptr,&s->sampler)!=VK_SUCCESS)return fail();
    uint32_t n=s->device.frameSlots;VkDescriptorPoolSize sizes[3]={{VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER,n*4},{VK_DESCRIPTOR_TYPE_STORAGE_IMAGE,n},{VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER,n}};VkDescriptorPoolCreateInfo pi{VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO};pi.poolSizeCount=3;pi.pPoolSizes=sizes;pi.maxSets=n;if(s->CreateDescriptorPool(s->device.device,&pi,nullptr,&s->pool)!=VK_SUCCESS)return fail();
    std::array<VkDescriptorSetLayout,8>layouts{};layouts.fill(s->setLayout);std::array<VkDescriptorSet,8>sets{};VkDescriptorSetAllocateInfo ai{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO};ai.descriptorPool=s->pool;ai.descriptorSetCount=n;ai.pSetLayouts=layouts.data();if(s->AllocateDescriptorSets(s->device.device,&ai,sets.data())!=VK_SUCCESS)return fail();
    WXL_VkBufferDesc bd{sizeof(Parameters),VK_BUFFER_USAGE_UNIFORM_BUFFER_BIT,WXL_VK_MEMORY_STREAM};for(uint32_t i=0;i<n;++i){auto&slot=s->slots[i];slot.set=sets[i];slot.uniform=api->CreateBuffer(&bd,&slot.buffer);if(!slot.uniform||!slot.buffer.mapped)return fail();}return true;
}

bool Effect::Resize(VkExtent2D extent){if(!state_)return false;if(!extent.width||!extent.height||extent.width>16384||extent.height>16384){state_->error="receiver: invalid extent";return false;}state_->extent=extent;return true;}
bool Effect::Record(const WXL_VkStageContext&ctx,const Snapshot&map,const Contribution&delta,uint32_t mode,float bias,float offsetX,float offsetY,const SunInput*sun){
    auto*s=state_;if(!s)return false;
    if(ctx.frameSlots!=s->device.frameSlots||ctx.frameSlot>=s->device.frameSlots||ctx.extent.width!=s->extent.width||ctx.extent.height!=s->extent.height||!std::isfinite(offsetX)||!std::isfinite(offsetY)||std::abs(offsetX)>2||std::abs(offsetY)>2){s->error="receiver: resize/slot/offset mismatch";return false;}
    auto&slot=s->slots[ctx.frameSlot];if(!ctx.serial||ctx.serial<=s->last||slot.used>ctx.completedSerial){s->error="receiver: duplicate/backdated frame or slot in flight";return false;}
    Parameters p;const char*reason=nullptr;if(!Validate(ctx,map,delta,mode,bias,p,&reason)){s->error=reason;return false;}
    // Metadata hashes the real raster viewport. Add ONLY explicitly missing jitter for reconstruction.
    p.view[0]+=offsetX/ctx.extent.width;p.view[1]+=offsetY/ctx.extent.height;
    float strength=-1;bool validSun=sun&&sun->view&&sun->serial==ctx.serial&&sun->extent.width==ctx.extent.width&&sun->extent.height==ctx.extent.height&&ReadLayout(sun->layout)&&std::isfinite(sun->strength)&&sun->strength>=0&&sun->strength<=1;
    if(validSun)strength=sun->strength;std::memcpy(&p.flags[3],&strength,sizeof strength);
    std::memcpy(slot.buffer.mapped,&p,sizeof p);s->api->FlushBuffer(slot.uniform);
    VkDescriptorImageInfo images[6]={{s->sampler,ctx.depthView,ctx.depthLayout},{s->sampler,map.view,map.layout},{s->sampler,delta.view,delta.layout},{VK_NULL_HANDLE,ctx.colorView,ctx.colorLayout},{},{s->sampler,validSun?sun->view:ctx.depthView,validSun?sun->layout:ctx.depthLayout}};
    VkDescriptorBufferInfo buffer{slot.buffer.buffer,0,sizeof p};VkWriteDescriptorSet writes[6]{};
    for(uint32_t i=0;i<6;++i){auto&w=writes[i];w.sType=VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;w.dstSet=slot.set;w.dstBinding=i;w.descriptorCount=1;w.descriptorType=i==3?VK_DESCRIPTOR_TYPE_STORAGE_IMAGE:(i==4?VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER:VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER);if(i==4)w.pBufferInfo=&buffer;else w.pImageInfo=&images[i];}
    s->UpdateDescriptorSets(s->device.device,6,writes,0,nullptr);slot.used=s->last=ctx.serial;
    s->CmdBindPipeline(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->pipeline);s->CmdBindDescriptorSets(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->layout,0,1,&slot.set,0,nullptr);s->CmdDispatch(ctx.cmd,(ctx.extent.width+7)/8,(ctx.extent.height+7)/8,1);
    VkMemoryBarrier b{VK_STRUCTURE_TYPE_MEMORY_BARRIER};b.srcAccessMask=VK_ACCESS_SHADER_WRITE_BIT;b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_SHADER_WRITE_BIT|VK_ACCESS_TRANSFER_READ_BIT;
    s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT|VK_PIPELINE_STAGE_TRANSFER_BIT,0,1,&b,0,nullptr,0,nullptr);
    s->error="receiver: current isolated delta consumed";return true;
}
bool Effect::Shutdown(uint64_t completed){auto*s=state_;if(!s)return true;if(completed<s->last){s->error="receiver: shutdown pending serial";return false;}
    for(auto&slot:s->slots)if(slot.uniform)s->api->RetireBuffer(slot.uniform,slot.used);
    if(s->pool)s->DestroyDescriptorPool(s->device.device,s->pool,nullptr);if(s->sampler)s->DestroySampler(s->device.device,s->sampler,nullptr);if(s->pipeline)s->DestroyPipeline(s->device.device,s->pipeline,nullptr);if(s->layout)s->DestroyPipelineLayout(s->device.device,s->layout,nullptr);if(s->setLayout)s->DestroyDescriptorSetLayout(s->device.device,s->setLayout,nullptr);delete s;state_=nullptr;return true;
}
uint64_t Effect::LastUsed()const{return state_?state_->last:0;}
const char*Effect::Error()const{return state_?state_->error:"receiver not initialized";}
#ifndef HD_LOCAL_SHADOW_RECEIVER_STANDALONE
namespace {
Effect effect;const WXL_VkRenderApi*api=nullptr;void*stage=nullptr;CVar *mode=nullptr,*bias=nullptr,*info=nullptr;
std::array<Contribution,8>pending{};uint64_t lastPublished=0;char lastInfo[256]{};float extraX=0,extraY=0;
void Info(const char*x){if(info&&std::strcmp(lastInfo,x)){std::snprintf(lastInfo,sizeof lastInfo,"%s",x);info->Set(lastInfo,true,false,false,false);}}
CVar*Var(const char*n,const char*h,const char*v){if(auto*c=CVar::LookupRegistered(n))return c;return CVar::Register(n,h,0,v,nullptr,CATEGORY_GRAPHICS,false,nullptr,false);}
uint32_t Mode(){return mode?uint32_t(std::clamp(mode->m_intValue,0,3)):0;}
float Bias(){float x=bias?bias->m_floatValue:.001f;return std::isfinite(x)?std::clamp(x,0.0f,.02f):.001f;}
const Contribution*Current(uint64_t serial){for(const auto&d:pending)if(d.token.serial==serial)return &d;return nullptr;}
int __cdecl Wanted(void*){if(!Mode())return 0;auto serial=wxlvk::native::present::Serial();Snapshot map;
    if(!Current(serial)){Info("receiver: waiting for isolated MATERIAL delta; normal image unchanged");return 0;}
    if(!HD::VulkanLocalShadow::GetFrameMap(serial,map)){Info("receiver: waiting for current atlas (hdLocalShadowTest 3)");return 0;}return 1;
}
void __cdecl Run(void*,const WXL_VkStageContext*source){if(!source)return;auto ctx=*source;auto*d=Current(ctx.serial);Snapshot map;if(!d||!HD::VulkanLocalShadow::GetFrameMap(ctx.serial,map))return;
    ctx.depthView=VK_NULL_HANDLE;if(!wxlvk::native::present::SceneDepth(ctx.cmd,VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL,ctx.depthView,ctx.depthFormat)){Info("receiver: scene depth unavailable");return;}ctx.depthLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;
    SunInput sun;const SunInput*selected=nullptr;
#ifdef WXL_VK_LAMP_DELTA_CONTRACT
    HD::VulkanShadows::LampVisibility sourceSun;if(HD::VulkanShadows::GetLampVisibility(ctx.serial,sourceSun)){sun={sourceSun.view,sourceSun.layout,sourceSun.serial,sourceSun.extent,sourceSun.strength};selected=&sun;}
#endif
    if(effect.Resize(ctx.extent))effect.Record(ctx,map,*d,Mode(),Bias(),extraX,extraY,selected);Info(effect.Error());
}
}
bool Init(){if(stage)return true;mode=Var("hdLocalShadowReceive","HD: 0 off, 1 isolated lamp shadows, 2 signed delta, 3 material coverage","0");bias=Var("hdLocalShadowReceiveBias","HD: receiver comparison depth bias 0..0.02","0.001");info=Var("hdLocalShadowReceiveInfo","HD: receiver/producer status","off");
    api=wxl::ScriptMgr::GetInterface<const WXL_VkRenderApi>(WXL_VK_RENDER_API_NAME,WXL_VK_RENDER_API_VERSION);
    if(!api||api->structSize<offsetof(WXL_VkRenderApi,UnregisterStage)+sizeof(api->UnregisterStage)||!api->RegisterStage||!api->UnregisterStage||!effect.Init(api)){Info("receiver: API/init unavailable");return false;}
    WXL_VkStageDesc d{};d.structSize=sizeof d;d.point=WXL_VK_POINT_AFTER_OPAQUE_WORLD;d.order=60;d.flags=WXL_VK_STAGE_WRITES_COLOR;d.Wanted=Wanted;d.Run=Run;stage=api->RegisterStage(&d,"HD.LocalShadow.Receive");if(!stage){Shutdown();Info("receiver: stage registration failed");return false;}Info("off");return true;
}
bool WantsContribution(){return stage&&Mode()!=0;}
bool PublishDelta(const Contribution&delta){if(!stage||!Mode()||!delta.token.serial||delta.token.serial!=wxlvk::native::present::Serial()||delta.token.serial<=lastPublished||delta.token.frameSlot>=pending.size()||!delta.view||delta.contract!=kPackedSunLampV3||delta.format!=VK_FORMAT_R32G32B32A32_UINT)return false;
    pending[delta.token.frameSlot]=delta;lastPublished=delta.token.serial;return true;
}
uint64_t LastDeltaUse(){return effect.LastUsed();}
void SetSubpixelOffset(float x,float y){extraX=x;extraY=y;}
bool Shutdown(){if(stage){api->UnregisterStage(stage);stage=nullptr;}if(!api)return true;
    if(effect.LastUsed()>wxlvk::native::present::Completed()){if(wxlvk::native::present::FrameOpen()&&!wxlvk::native::present::FlushAndWait())return false;if(!wxlvk::native::present::WaitSerial(effect.LastUsed()))return false;}
    if(!effect.Shutdown(wxlvk::native::present::Completed()))return false;api=nullptr;pending={};lastPublished=0;extraX=extraY=0;Info("off");return true;
}
#endif
}
