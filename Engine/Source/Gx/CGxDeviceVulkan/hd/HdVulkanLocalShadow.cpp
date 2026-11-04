// SPDX-License-Identifier: GPL-3.0-or-later
// One local light: six depth views and visibility diagnostics. Normal scene composition is deliberately gated.
#include "HdVulkanLocalShadow.h"
#include <algorithm>
#include <cmath>
#include <cstring>
#include <new>
#ifndef HD_LOCAL_SHADOW_STANDALONE
#include <cstdio>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Model2/M2Scene.h"
#include "Engine/Source/Model2/M2Light.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "native/Present.hpp"
#include "wxl/Script.hpp"
namespace World {extern CM2Scene* s_m2Scene;}
#endif
namespace HD::VulkanLocalShadow {
namespace {
#include "shaders/local-shadow/HdVulkanLocalShadow.spv.h"
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
Vec3 Sub(Vec3 a,Vec3 b){return {a.x-b.x,a.y-b.y,a.z-b.z};}
float Dot(Vec3 a,Vec3 b){return a.x*b.x+a.y*b.y+a.z*b.z;}
Vec3 Cross(Vec3 a,Vec3 b){return {a.y*b.z-a.z*b.y,a.z*b.x-a.x*b.z,a.x*b.y-a.y*b.x};}
bool Finite(Vec3 a){return std::isfinite(a.x)&&std::isfinite(a.y)&&std::isfinite(a.z);}
}
uint32_t Face(Vec3 d){float x=std::abs(d.x),y=std::abs(d.y),z=std::abs(d.z);if(x>=y && x>=z)return d.x>=0?0:1;if(y>=z)return d.y>=0?2:3;return d.z>=0?4:5;}
bool BuildMatrices(const Light&light,float(&out)[6][16]){
    if(!light.key || !Finite(light.position)||!std::isfinite(light.radius)||!std::isfinite(light.nearPlane)||light.nearPlane<.01f||light.radius<=light.nearPlane||light.radius>64)return false;
    const Vec3 directions[6]={{1,0,0},{-1,0,0},{0,1,0},{0,-1,0},{0,0,1},{0,0,-1}},ups[6]={{0,0,1},{0,0,1},{0,0,1},{0,0,1},{0,-1,0},{0,1,0}};
    float c=light.radius/(light.radius-light.nearPlane),d=-light.nearPlane*c;
    for(int f=0;f<6;++f){Vec3 z=directions[f],x=Cross(ups[f],z),y=Cross(z,x);float view[16]={x.x,y.x,z.x,0,x.y,y.y,z.y,0,x.z,y.z,z.z,0,-Dot(x,light.position),-Dot(y,light.position),-Dot(z,light.position),1};
        float projection[16]={1,0,0,0,0,1,0,0,0,0,c,1,0,0,d,0};
        for(int r=0;r<4;++r)for(int col=0;col<4;++col){out[f][r*4+col]=0;for(int k=0;k<4;++k)out[f][r*4+col]+=view[r*4+k]*projection[k*4+col];}}
    return true;
}
bool Project(const Light&light,const float(&matrices)[6][16],Vec3 point,uint32_t&face,float&u,float&v,float&depth){
    Vec3 delta=Sub(point,light.position);float length=Dot(delta,delta);if(!Finite(point)||length<1e-10f||length>=light.radius*light.radius)return false;
    face=Face(delta);auto&m=matrices[face];float q[4]{};float input[4]={point.x,point.y,point.z,1};for(int col=0;col<4;++col)for(int r=0;r<4;++r)q[col]+=input[r]*m[r*4+col];
    if(q[3]<=0)return false;depth=q[2]/q[3];u=q[0]/q[3]*.5f+.5f;v=.5f-q[1]/q[3]*.5f;return depth>=0 && depth<=1;
}
std::array<float,3> ApplyIsolatedDelta(std::array<float,3>scene,std::array<float,3>delta,float v){v=std::clamp(v,0.0f,1.0f);for(int i=0;i<3;++i)scene[i]=std::clamp(scene[i]-delta[i]*(1-v),0.0f,1.0f);return scene;}
bool Prepare(const WXL_VkStageContext&ctx,const Snapshot&map,uint32_t mode,float bias,Parameters&out){
    if(!ctx.extent.width||!ctx.extent.height||!map.faceSize||mode<1||mode>2||!std::isfinite(bias)||bias<0||bias>.02f)return false;
    Parameters p{};p.screen[0]=1.0f/ctx.extent.width;p.screen[1]=1.0f/ctx.extent.height;std::memcpy(p.matrices,map.matrices,sizeof p.matrices);
    p.light[0]=map.light.position.x;p.light[1]=map.light.position.y;p.light[2]=map.light.position.z;p.light[3]=map.light.radius;p.atlas[2]=bias;p.atlas[3]=float(map.faceSize);p.flags[0]=mode;p.flags[1]=ctx.swapRB;
    if(mode==2){
        if(!ctx.sceneValid||!ctx.scene)return false;const auto&vp=ctx.viewport;const float*q=ctx.scene->projection;
        for(int i=0;i<16;++i)if(!std::isfinite(q[i])||!std::isfinite(ctx.scene->view[i]))return false;
        if(q[0]==0||q[5]==0||q[11]!=1||q[15]!=0||q[10]<=0||q[14]>=0||!std::isfinite(vp.x)||!std::isfinite(vp.y)||!std::isfinite(vp.width)||!std::isfinite(vp.height)||vp.width<=0||vp.height<=0||!std::isfinite(vp.minDepth)||!std::isfinite(vp.maxDepth)||vp.maxDepth<=vp.minDepth||!Invert(ctx.scene->view,p.worldFromView))return false;
        p.screen[2]=2/q[0];p.screen[3]=-2/q[5];p.atlas[0]=(-1-q[8])/q[0];p.atlas[1]=(1-q[9])/q[5];p.depth[0]=vp.minDepth;p.depth[1]=vp.maxDepth;p.depth[2]=q[10];p.depth[3]=q[14];
        p.view[0]=vp.x/ctx.extent.width;p.view[1]=vp.y/ctx.extent.height;p.view[2]=ctx.extent.width/vp.width;p.view[3]=ctx.extent.height/vp.height;
    }
    out=p;return true;
}
struct Effect::Impl {
    const WXL_VkRenderApi*api=nullptr;WXL_VkDeviceInfo device{};WXL_VkShadowPass pass{};uint32_t size=0,failedSize=0;uint64_t last=0;const char*error="";
    VkDescriptorSetLayout setLayout{};VkPipelineLayout layout{};VkPipeline pipeline{};VkDescriptorPool pool{};VkSampler sampler{};
    struct Slot {void*handle=nullptr;WXL_VkImageInfo image{};VkFramebuffer framebuffer{};void*uniform=nullptr;WXL_VkBufferInfo buffer{};VkDescriptorSet set{};uint64_t used=0,debugSerial=0;bool initialized=false,valid=false;Snapshot snapshot;};std::array<Slot,8>slots{};
#define LS_FUNCTIONS(X) X(CreateFramebuffer) X(DestroyFramebuffer) X(CreateDescriptorSetLayout) X(DestroyDescriptorSetLayout) X(CreatePipelineLayout) X(DestroyPipelineLayout) X(CreateComputePipelines) X(DestroyPipeline) X(CreateShaderModule) X(DestroyShaderModule) X(CreateDescriptorPool) X(DestroyDescriptorPool) X(AllocateDescriptorSets) X(UpdateDescriptorSets) X(CreateSampler) X(DestroySampler) X(CmdPipelineBarrier) X(CmdClearDepthStencilImage) X(CmdBindPipeline) X(CmdBindDescriptorSets) X(CmdDispatch)
#define DECL(n) PFN_vk##n n=nullptr;
    LS_FUNCTIONS(DECL)
#undef DECL
};
bool Effect::Init(const WXL_VkRenderApi*api){
    if(state_)return true;
    if(!api||api->apiVersion!=WXL_VK_RENDER_API_VERSION||api->structSize<offsetof(WXL_VkRenderApi,ReplayWorldViews)+sizeof(api->ReplayWorldViews)||!api->GetDeviceInfo||!api->GetShadowPass||!api->ReplayWorldViews||!api->CreateImage||!api->RetireImage||!api->CreateBuffer||!api->RetireBuffer||!api->FlushBuffer)return false;
    auto*s=new(std::nothrow)Impl();if(!s)return false;s->device.structSize=sizeof s->device;s->pass.structSize=sizeof s->pass;
    if(!api->GetDeviceInfo(&s->device)||!s->device.device||!s->device.getDeviceProcAddr||!s->device.frameSlots||s->device.frameSlots>8||!api->GetShadowPass(&s->pass)||!s->pass.loadPass||!s->pass.renderPass||(s->pass.depthFormat!=VK_FORMAT_D32_SFLOAT && s->pass.depthFormat!=VK_FORMAT_D16_UNORM)){delete s;return false;}
#define LOAD(n) s->n=reinterpret_cast<PFN_vk##n>(s->device.getDeviceProcAddr(s->device.device,"vk" #n));if(!s->n){delete s;return false;}
    LS_FUNCTIONS(LOAD)
#undef LOAD
    state_=s;s->api=api;auto fail=[&](){Shutdown(0);return false;};
    VkDescriptorSetLayoutBinding bindings[4]{};for(uint32_t i=0;i<4;++i){auto&b=bindings[i];b.binding=i;b.descriptorCount=1;b.stageFlags=VK_SHADER_STAGE_COMPUTE_BIT;b.descriptorType=i==2?VK_DESCRIPTOR_TYPE_STORAGE_IMAGE:(i==3?VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER:VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER);}
    VkDescriptorSetLayoutCreateInfo sl{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO};sl.bindingCount=4;sl.pBindings=bindings;if(s->CreateDescriptorSetLayout(s->device.device,&sl,nullptr,&s->setLayout)!=VK_SUCCESS)return fail();
    VkPipelineLayoutCreateInfo pl{VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO};pl.setLayoutCount=1;pl.pSetLayouts=&s->setLayout;if(s->CreatePipelineLayout(s->device.device,&pl,nullptr,&s->layout)!=VK_SUCCESS)return fail();
    VkShaderModuleCreateInfo sm{VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO};sm.codeSize=sizeof kHdVulkanLocalShadow;sm.pCode=kHdVulkanLocalShadow;VkShaderModule module{};if(s->CreateShaderModule(s->device.device,&sm,nullptr,&module)!=VK_SUCCESS)return fail();
    VkComputePipelineCreateInfo cp{VK_STRUCTURE_TYPE_COMPUTE_PIPELINE_CREATE_INFO};cp.stage.sType=VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;cp.stage.stage=VK_SHADER_STAGE_COMPUTE_BIT;cp.stage.module=module;cp.stage.pName="main";cp.layout=s->layout;
    auto result=s->CreateComputePipelines(s->device.device,s->device.pipelineCache,1,&cp,nullptr,&s->pipeline);s->DestroyShaderModule(s->device.device,module,nullptr);if(result!=VK_SUCCESS)return fail();
    VkSamplerCreateInfo si{VK_STRUCTURE_TYPE_SAMPLER_CREATE_INFO};si.magFilter=si.minFilter=VK_FILTER_NEAREST;si.mipmapMode=VK_SAMPLER_MIPMAP_MODE_NEAREST;si.addressModeU=si.addressModeV=si.addressModeW=VK_SAMPLER_ADDRESS_MODE_CLAMP_TO_EDGE;if(s->CreateSampler(s->device.device,&si,nullptr,&s->sampler)!=VK_SUCCESS)return fail();
    uint32_t n=s->device.frameSlots;VkDescriptorPoolSize sizes[3]={{VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER,n*2},{VK_DESCRIPTOR_TYPE_STORAGE_IMAGE,n},{VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER,n}};VkDescriptorPoolCreateInfo pi{VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO};pi.poolSizeCount=3;pi.pPoolSizes=sizes;pi.maxSets=n;if(s->CreateDescriptorPool(s->device.device,&pi,nullptr,&s->pool)!=VK_SUCCESS)return fail();
    std::array<VkDescriptorSetLayout,8>layouts{};layouts.fill(s->setLayout);std::array<VkDescriptorSet,8>sets{};VkDescriptorSetAllocateInfo ai{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO};ai.descriptorPool=s->pool;ai.descriptorSetCount=n;ai.pSetLayouts=layouts.data();if(s->AllocateDescriptorSets(s->device.device,&ai,sets.data())!=VK_SUCCESS)return fail();
    WXL_VkBufferDesc bd{sizeof(Parameters),VK_BUFFER_USAGE_UNIFORM_BUFFER_BIT,WXL_VK_MEMORY_STREAM};for(uint32_t i=0;i<n;++i){auto&slot=s->slots[i];slot.set=sets[i];slot.uniform=api->CreateBuffer(&bd,&slot.buffer);if(!slot.uniform||!slot.buffer.mapped)return fail();}return true;
}
bool Effect::Resize(uint32_t size){
    auto*s=state_;if(!s)return false;if(size!=128&&size!=256&&size!=512){s->error="local shadow: face size must be 128/256/512";return false;}if(size==s->size)return true;if(size==s->failedSize)return false;
    // Framebuffers are not owned by wxl's retire queue. Keep the old set until all its users finish.
    for(auto&slot:s->slots)if(slot.used>s->last)s->last=slot.used;
    std::array<void*,8>handles{};std::array<WXL_VkImageInfo,8>images{};std::array<VkFramebuffer,8>frames{};bool okay=true;
    // Caller must finish outstanding uses before replacing framebuffers; do not wait here.
    if(s->last){s->error="local shadow: resolution change requires shutdown/reinit after GPU completion";return false;}
    WXL_VkImageDesc desc{s->pass.depthFormat,size*3,size*2,1,VK_IMAGE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT|VK_IMAGE_USAGE_SAMPLED_BIT|VK_IMAGE_USAGE_TRANSFER_DST_BIT,VK_IMAGE_ASPECT_DEPTH_BIT};
    for(uint32_t i=0;i<s->device.frameSlots;++i){handles[i]=s->api->CreateImage(&desc,&images[i]);if(!handles[i]){okay=false;break;}VkFramebufferCreateInfo fi{VK_STRUCTURE_TYPE_FRAMEBUFFER_CREATE_INFO};fi.renderPass=s->pass.renderPass;fi.attachmentCount=1;fi.pAttachments=&images[i].view;fi.width=size*3;fi.height=size*2;fi.layers=1;if(s->CreateFramebuffer(s->device.device,&fi,nullptr,&frames[i])!=VK_SUCCESS){okay=false;break;}}
    if(!okay){for(uint32_t i=0;i<8;++i){if(frames[i])s->DestroyFramebuffer(s->device.device,frames[i],nullptr);if(handles[i])s->api->RetireImage(handles[i],0);}s->failedSize=size;s->error="local shadow: atlas allocation failed; retry blocked for size";return false;}
    for(uint32_t i=0;i<s->device.frameSlots;++i){auto&slot=s->slots[i];if(slot.framebuffer)s->DestroyFramebuffer(s->device.device,slot.framebuffer,nullptr);if(slot.handle)s->api->RetireImage(slot.handle,slot.used);slot.handle=handles[i];slot.image=images[i];slot.framebuffer=frames[i];slot.initialized=slot.valid=false;}
    s->size=size;s->failedSize=0;s->error="";return true;
}
bool Effect::Build(const WXL_VkRenderContext&ctx,const Light&light,float bias,float slope){
    auto*s=state_;if(!s)return false;
    if(ctx.structSize<sizeof ctx||ctx.point!=WXL_VK_POINT_AFTER_OPAQUE_WORLD||!ctx.cmd||!ctx.serial||!s->size||ctx.frameSlots!=s->device.frameSlots||ctx.frameSlot>=s->device.frameSlots||!std::isfinite(bias)||!std::isfinite(slope)||std::abs(bias)>16||std::abs(slope)>16){s->error="local shadow: build context unavailable";return false;}
    auto&slot=s->slots[ctx.frameSlot];if(slot.used==ctx.serial||slot.used>ctx.completedSerial){s->error="local shadow: build duplicated or slot in flight";return false;}
    slot.valid=false;Snapshot snapshot;if(!BuildMatrices(light,snapshot.matrices)){s->error="local shadow: invalid light";return false;}
    slot.used=s->last=ctx.serial; // Even a replay refusal follows recorded initialization commands.
    if(!slot.initialized){VkImageMemoryBarrier b{VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER};b.oldLayout=VK_IMAGE_LAYOUT_UNDEFINED;b.newLayout=VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;b.image=slot.image.image;b.srcQueueFamilyIndex=b.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;b.subresourceRange={VK_IMAGE_ASPECT_DEPTH_BIT,0,1,0,1};b.dstAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;
        s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT,VK_PIPELINE_STAGE_TRANSFER_BIT,0,0,nullptr,0,nullptr,1,&b);VkClearDepthStencilValue clear{1,0};s->CmdClearDepthStencilImage(ctx.cmd,slot.image.image,VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,&clear,1,&b.subresourceRange);
        b.oldLayout=VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;b.newLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;b.srcAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;
        s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_TRANSFER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT|VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT|VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT|VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT,0,0,nullptr,0,nullptr,1,&b);slot.initialized=true;
    }
    WXL_VkReplayView views[6]{};for(uint32_t f=0;f<6;++f){auto&v=views[f];v.area={{int32_t(f%3*s->size),int32_t(f/3*s->size)},{s->size,s->size}};std::memcpy(v.lightViewProj,snapshot.matrices[f],sizeof v.lightViewProj);v.cullSphere[0]=light.position.x;v.cullSphere[1]=light.position.y;v.cullSphere[2]=light.position.z;v.cullSphere[3]=light.radius;v.cascade=f;v.clear=1;}
    WXL_VkReplayViewsDesc desc{};desc.structSize=sizeof desc;desc.cmd=ctx.cmd;desc.framebuffer=slot.framebuffer;desc.depthBias=bias;desc.slopeBias=slope;desc.flags=WXL_VK_REPLAY_ALPHA_TESTED|WXL_VK_REPLAY_CULL_FRUSTUM|WXL_VK_REPLAY_NO_CASTERS;desc.flags|=0x2000u;desc.views=views;desc.viewCount=6;desc.viewStride=sizeof(WXL_VkReplayView);
    WXL_VkReplayStats stats{};stats.structSize=sizeof stats;
    if(!s->api->ReplayWorldViews(&desc,&stats)||!stats.captured){s->error="local shadow: replay/capture unavailable; map not published";return false;}
    snapshot.serial=ctx.serial;snapshot.key=light.key;snapshot.view=slot.image.view;snapshot.layout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;snapshot.format=s->pass.depthFormat;snapshot.faceSize=s->size;snapshot.light=light;slot.snapshot=snapshot;slot.valid=true;s->error="local shadow: six faces, capture-visible casters only";return true;
}
bool Effect::Get(uint64_t serial,Snapshot&snapshot)const{if(state_)for(auto&slot:state_->slots)if(slot.valid&&slot.snapshot.serial==serial){snapshot=slot.snapshot;return true;}return false;}
bool Effect::RecordDebug(const WXL_VkStageContext&ctx,uint32_t mode,float bias){
    auto*s=state_;if(!s)return false;if(ctx.structSize<sizeof ctx||ctx.point!=WXL_VK_POINT_AFTER_OPAQUE_WORLD||!ctx.cmd||!ctx.colorView||ctx.colorFormat!=VK_FORMAT_R8G8B8A8_UNORM||ctx.colorLayout!=VK_IMAGE_LAYOUT_GENERAL||ctx.frameSlot>=s->device.frameSlots||ctx.frameSlots!=s->device.frameSlots||!ctx.serial){s->error="local shadow: debug context unavailable";return false;}
    auto&slot=s->slots[ctx.frameSlot];if(!slot.valid||slot.snapshot.serial!=ctx.serial||slot.debugSerial==ctx.serial){s->error="local shadow: stale or duplicate debug map";return false;}
    bool readable=ctx.depthView&&(ctx.depthLayout==VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL||ctx.depthLayout==VK_IMAGE_LAYOUT_GENERAL||ctx.depthLayout==VK_IMAGE_LAYOUT_DEPTH_STENCIL_READ_ONLY_OPTIMAL);if(mode==2&&!readable){s->error="local shadow: debug receiver depth unavailable";return false;}
    Parameters p;if(!Prepare(ctx,slot.snapshot,mode,bias,p)){s->error="local shadow: unsupported debug scene";return false;}std::memcpy(slot.buffer.mapped,&p,sizeof p);s->api->FlushBuffer(slot.uniform);
    VkDescriptorImageInfo images[3]={{s->sampler,mode==2?ctx.depthView:slot.image.view,mode==2?ctx.depthLayout:VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL},{s->sampler,slot.image.view,VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL},{VK_NULL_HANDLE,ctx.colorView,ctx.colorLayout}};VkDescriptorBufferInfo buffer{slot.buffer.buffer,0,sizeof p};VkWriteDescriptorSet writes[4]{};
    for(uint32_t i=0;i<4;++i){auto&w=writes[i];w.sType=VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;w.dstSet=slot.set;w.dstBinding=i;w.descriptorCount=1;w.descriptorType=i==2?VK_DESCRIPTOR_TYPE_STORAGE_IMAGE:(i==3?VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER:VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER);if(i==3)w.pBufferInfo=&buffer;else w.pImageInfo=&images[i];}
    s->UpdateDescriptorSets(s->device.device,4,writes,0,nullptr);s->CmdBindPipeline(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->pipeline);s->CmdBindDescriptorSets(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->layout,0,1,&slot.set,0,nullptr);s->CmdDispatch(ctx.cmd,(ctx.extent.width+7)/8,(ctx.extent.height+7)/8,1);
    VkMemoryBarrier b{VK_STRUCTURE_TYPE_MEMORY_BARRIER};b.srcAccessMask=VK_ACCESS_SHADER_WRITE_BIT;b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_TRANSFER_READ_BIT;s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT|VK_PIPELINE_STAGE_TRANSFER_BIT,0,1,&b,0,nullptr,0,nullptr);slot.debugSerial=ctx.serial;s->error="local shadow: diagnostic only; normal lighting unchanged";return true;
}
bool Effect::Shutdown(uint64_t completed){auto*s=state_;if(!s)return true;if(completed<s->last){s->error="local shadow: shutdown pending serial";return false;}for(auto&slot:s->slots){if(slot.framebuffer)s->DestroyFramebuffer(s->device.device,slot.framebuffer,nullptr);if(slot.handle)s->api->RetireImage(slot.handle,slot.used);if(slot.uniform)s->api->RetireBuffer(slot.uniform,slot.used);}
    if(s->pool)s->DestroyDescriptorPool(s->device.device,s->pool,nullptr);if(s->sampler)s->DestroySampler(s->device.device,s->sampler,nullptr);if(s->pipeline)s->DestroyPipeline(s->device.device,s->pipeline,nullptr);if(s->layout)s->DestroyPipelineLayout(s->device.device,s->layout,nullptr);if(s->setLayout)s->DestroyDescriptorSetLayout(s->device.device,s->setLayout,nullptr);delete s;state_=nullptr;return true;}
uint64_t Effect::LastUsed()const{return state_?state_->last:0;}
const char*Effect::Error()const{return state_?state_->error:"local shadow not initialized";}
#ifndef HD_LOCAL_SHADOW_STANDALONE
namespace {
Effect effect;const WXL_VkRenderApi*api=nullptr;void*pass=nullptr,*stage=nullptr;CVar *mode=nullptr,*size=nullptr,*range=nullptr,*distance=nullptr,*bias=nullptr,*info=nullptr;bool capture=false,ready=false;uint64_t previous=0,pinnedSerial=0;Light pinnedLight;char lastInfo[256]{};float extraX=0,extraY=0;
void Info(const char*x){if(info&&std::strcmp(lastInfo,x)){std::snprintf(lastInfo,sizeof lastInfo,"%s",x);info->Set(lastInfo,true,false,false,false);}}
CVar*Var(const char*n,const char*h,const char*v,uint32_t f=0){if(auto*c=CVar::LookupRegistered(n))return c;return CVar::Register(n,h,f,v,nullptr,CATEGORY_GRAPHICS,false,nullptr,false);}
uint32_t Mode(){return mode?uint32_t(std::clamp(mode->m_intValue,0,3)):0;}
float Value(CVar*v,float d,float lo,float hi){float x=v?v->m_floatValue:d;return std::isfinite(x)?std::clamp(x,lo,hi):d;}
bool Pick(Light&out){
    auto*scene=World::s_m2Scene;if(!scene||!scene->m_lightGrid)return false;auto camera=DayNight::g_dnInfo.m_cameraPos;float maxDistance=Value(distance,12,2,24),best=-1,oldScore=-1;Light chosen,old;uint32_t examined=0;
    for(uint32_t cell=0;cell<64*64;++cell)for(const CM2Light*l=scene->m_lightGrid[cell];l&&examined<16384;l=l->m_lightNext){++examined;if(!l->m_visible||l->m_type!=M2LIGHT_POINT||(l->m_scene&&l->m_stamp!=scene->m_frameStamp))continue;
        Vec3 position{l->m_pos.x,l->m_pos.y,l->m_pos.z},d{position.x-camera.x,position.y-camera.y,position.z-camera.z};float ds=Dot(d,d),peak=std::max({l->m_dirColor.x,l->m_dirColor.y,l->m_dirColor.z});if(!Finite(position)||!std::isfinite(ds)||ds>maxDistance*maxDistance||!std::isfinite(peak)||peak<=0)continue;
        float denominator=l->m_constantAttenuation+l->m_linearAttenuation*std::sqrt(std::max(ds,.01f))+l->m_quadraticAttenuation*ds;float score=peak/std::max(denominator,.01f);if(!std::isfinite(score))continue;
        Light candidate;candidate.key=uint64_t(reinterpret_cast<uintptr_t>(l));candidate.position=position;candidate.radius=Value(range,12,2,24);
        if(candidate.key==previous){old=candidate;oldScore=score;}if(score>best){best=score;chosen=candidate;}}
    if(best<0)return false;out=oldScore>=best*.85f?old:chosen;previous=out.key;return true;
}
void __cdecl Build(void*,const WXL_VkRenderContext*ctx){if(!Mode()||!ready||!ctx)return;Light light;if(pinnedSerial==ctx->serial)light=pinnedLight;else if(!Pick(light)){Info("local shadow: no active point light nearby");return;}effect.Build(*ctx,light);Info(effect.Error());}
int __cdecl Wanted(void*){Snapshot map;auto mode=Mode();return (mode==1||mode==2)&&effect.Get(wxlvk::native::present::Serial(),map)?1:0;}
void __cdecl Debug(void*,const WXL_VkStageContext*source){if(!source)return;auto ctx=*source;if(Mode()==2){ctx.depthView=VK_NULL_HANDLE;if(wxlvk::native::present::SceneDepth(ctx.cmd,VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL,ctx.depthView,ctx.depthFormat))ctx.depthLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;else ctx.depthView=VK_NULL_HANDLE;ctx.viewport.x+=extraX;ctx.viewport.y+=extraY;}
    effect.RecordDebug(ctx,Mode(),Value(bias,.001f,0,.02f));Info(effect.Error());}
}
bool Init(){if(pass&&stage)return true;mode=Var("hdLocalShadowTest","HD: 0 off, 1 atlas, 2 visibility, 3 capture only; no normal composition","0");size=Var("hdLocalShadowSize","HD: face size 128/256/512, restart required after use","256",1);range=Var("hdLocalShadowRange","HD: one local light range 2..24 yd","12",1);distance=Var("hdLocalShadowDistance","HD: pick one point within 2..24 yd of camera","12",1);bias=Var("hdLocalShadowBias","HD: depth comparison bias 0..0.02","0.001",1);info=Var("hdLocalShadowInfo","HD: local shadow status","off");
    api=wxl::ScriptMgr::GetInterface<const WXL_VkRenderApi>(WXL_VK_RENDER_API_NAME,WXL_VK_RENDER_API_VERSION);if(!api||api->structSize<offsetof(WXL_VkRenderApi,ReplayWorldViews)+sizeof(api->ReplayWorldViews)||!api->RegisterPass||!api->UnregisterPass||!api->RegisterStage||!api->UnregisterStage||!api->RequestDrawCapture||!effect.Init(api)){Info("local shadow: API/init unavailable");return false;}
    WXL_VkRenderPassDesc p{};p.structSize=sizeof p;p.MidPass=Build;pass=api->RegisterPass(WXL_VK_POINT_AFTER_OPAQUE_WORLD,&p,"HD.LocalShadow.Build");WXL_VkStageDesc d{};d.structSize=sizeof d;d.point=WXL_VK_POINT_AFTER_OPAQUE_WORLD;d.order=300;d.flags=WXL_VK_STAGE_WRITES_COLOR;d.Wanted=Wanted;d.Run=Debug;stage=api->RegisterStage(&d,"HD.LocalShadow.Debug");
    if(!pass||!stage){Shutdown();Info("local shadow: registration failed");return false;}Info("off");return true;}
void Resize(){if(!api||!pass||!stage)return;bool want=Mode()!=0;ready=false;if(want){uint32_t value=size?uint32_t(size->m_intValue):256;ready=effect.Resize(value);if(!ready)Info(effect.Error());}else Info("off");bool request=want&&ready;if(request!=capture){api->RequestDrawCapture(request?1:0);capture=request;if(request)Info("local shadow: waiting for current opaque capture");}}
void SetSubpixelOffset(float x,float y){extraX=x;extraY=y;}
void SetFrameLight(uint64_t serial,const Light&light){pinnedSerial=serial;pinnedLight=light;}
bool GetFrameMap(uint64_t serial,Snapshot&snapshot){return effect.Get(serial,snapshot);}
bool Shutdown(){if(!api)return true;ready=false;if(capture){api->RequestDrawCapture(0);capture=false;}if(stage){api->UnregisterStage(stage);stage=nullptr;}if(pass){api->UnregisterPass(pass);pass=nullptr;}
    if(effect.LastUsed()>wxlvk::native::present::Completed()){if(wxlvk::native::present::FrameOpen()&&!wxlvk::native::present::FlushAndWait())return false;if(!wxlvk::native::present::WaitSerial(effect.LastUsed()))return false;}bool okay=effect.Shutdown(wxlvk::native::present::Completed());if(okay){api=nullptr;previous=pinnedSerial=0;Info("off");}return okay;}
#endif
}
