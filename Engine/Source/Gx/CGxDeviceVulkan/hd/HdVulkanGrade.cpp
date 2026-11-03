// SPDX-License-Identifier: GPL-3.0-or-later
// Isolated port of the existing client's HdGrade.cpp. No water or fog module dependency.
#include "HdVulkanGrade.h"
#include <algorithm>
#include <cmath>
#include <cstring>
#include <map>
#include <new>
#ifndef HD_GRADE_STANDALONE
#include <cstdio>
#include <charconv>
#include <filesystem>
#include <set>
#include <vector>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/Types.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "WoW/Source/WorldClient/HD/HdForever.h"
#include "WoW/Source/WorldClient/HD/HdGrade.h"
#include "WoW/Source/DB/Rec/LightRec.h"
#include "native/Present.hpp"
#include "stages/Chain.hpp"
#include "wxl/Script.hpp"
#endif
namespace HD::VulkanGrade {
namespace {
#include "shaders/grade/HdVulkanGrade.spv.h"
float Sat(float v) {return std::clamp(v,0.0f,1.0f);}
}
void LutWeights::Add(int32_t lut,float w) {
    if(w<=0) return;
    for(int32_t i=0;i<count;++i) if(id[i]==lut) {weight[i]+=w;return;}
    if(count<16) {id[count]=lut;weight[count]=w;++count;}
}
void LutWeights::Scale(float f) {for(int32_t i=0;i<count;++i) weight[i]*=f;}
Selection Select(const LutWeights& weights) {
    int32_t first=-1,second=-1;
    for(int32_t i=0;i<weights.count;++i) {
        if(first<0 || weights.weight[i]>weights.weight[first]) {second=first;first=i;}
        else if(second<0 || weights.weight[i]>weights.weight[second]) second=i;
    }
    Selection out;out.a=first>=0?weights.id[first]:0;out.b=second>=0?weights.id[second]:out.a;
    float a=first>=0?weights.weight[first]:1,b=second>=0?weights.weight[second]:0;
    out.blend=a+b>0?b/(a+b):0;out.hasGrade=first>=0 && (out.a!=0 || out.b!=0);return out;
}
void Identity(Texels& pixels) {
    for(uint32_t y=0;y<LutHeight;++y) for(uint32_t x=0;x<LutWidth;++x) {
        uint8_t* t=&pixels[(size_t(y)*LutWidth+x)*4];
        t[0]=uint8_t(((x/32)*255+15)/31);t[1]=uint8_t((y*255+15)/31);t[2]=uint8_t(((x%32)*255+15)/31);t[3]=255;
    }
}
bool DecodeLut(const uint8_t* data,size_t size,Texels& pixels) {
    if(!data || size<148 || std::memcmp(data,"BLP2",4) || data[8]!=3) return false;
    // BLP offsets are FILE-FORMAT uint32 fields, not x86 object offsets. Windows target is little endian.
    uint32_t w=0,h=0,offset=0;std::memcpy(&w,data+12,4);std::memcpy(&h,data+16,4);std::memcpy(&offset,data+20,4);
    if(w!=LutWidth || h!=LutHeight || offset<148 || size_t(offset)>size || LutBytes>size-size_t(offset)) return false;
    std::memcpy(pixels.data(),data+offset,LutBytes);return true;
}
std::array<float,3> Sample(const Texels& lut,std::array<float,3> rgb) {
    float r=Sat(rgb[0])*31,g=Sat(rgb[1])*31,b=Sat(rgb[2])*31;
    uint32_t lo[3]={uint32_t(r),uint32_t(g),uint32_t(b)},hi[3];float share[3]={r-lo[0],g-lo[1],b-lo[2]};
    for(int k=0;k<3;++k)hi[k]=std::min(lo[k]+1,31u);
    std::array<float,3> out{};
    for(int z=0;z<2;++z)for(int y=0;y<2;++y)for(int x=0;x<2;++x) {
        float w=(x?share[0]:1-share[0])*(y?share[1]:1-share[1])*(z?share[2]:1-share[2]);
        size_t offset=(size_t(y?hi[1]:lo[1])*1024+(z?hi[2]:lo[2])*32+(x?hi[0]:lo[0]))*4;
        for(int k=0;k<3;++k)out[k]+=lut[offset+2-k]*(w/255.0f);
    }
    return out;
}
struct Effect::Impl {
    const WXL_VkRenderApi* api=nullptr;WXL_VkDeviceInfo device{};
    const char* error="";uint32_t width=0,height=0;uint64_t last=0;
    VkDescriptorSetLayout setLayout{};VkPipelineLayout layout{};VkPipeline pipeline{};VkDescriptorPool pool{};VkSampler linear{};
    struct Slot {VkDescriptorSet set{};uint64_t serial=0;};std::array<Slot,8> slots{};
    struct Lut {void* handle=nullptr;WXL_VkImageInfo image{};void* staging=nullptr;WXL_VkBufferInfo buffer{};uint64_t serial=0;bool uploaded=false;};
    std::map<int32_t,Lut> luts;
#define GRADE_FUNCTIONS(X) X(CreateDescriptorSetLayout) X(DestroyDescriptorSetLayout) X(CreatePipelineLayout) X(DestroyPipelineLayout) \
    X(CreateDescriptorPool) X(DestroyDescriptorPool) X(AllocateDescriptorSets) X(UpdateDescriptorSets) \
    X(CreateSampler) X(DestroySampler) X(CreateShaderModule) X(DestroyShaderModule) X(CreateComputePipelines) X(DestroyPipeline) \
    X(CmdPipelineBarrier) X(CmdBindPipeline) X(CmdBindDescriptorSets) X(CmdDispatch) X(CmdPushConstants) X(CmdCopyBufferToImage)
#define DECL(n) PFN_vk##n n=nullptr;
    GRADE_FUNCTIONS(DECL)
#undef DECL
};
bool Effect::Init(const WXL_VkRenderApi* api) {
    if(state_) return true;
    if(!api || api->apiVersion!=WXL_VK_RENDER_API_VERSION || api->structSize<offsetof(WXL_VkRenderApi,RetireImage)+sizeof(api->RetireImage) ||
       !api->GetDeviceInfo || !api->CreateBuffer || !api->RetireBuffer || !api->FlushBuffer || !api->CreateImage || !api->RetireImage) return false;
    auto* s=new(std::nothrow) Impl();if(!s)return false;s->device.structSize=sizeof s->device;
    if(!api->GetDeviceInfo(&s->device)||!s->device.device||!s->device.getDeviceProcAddr||!s->device.frameSlots||s->device.frameSlots>8) {delete s;return false;}
#define LOAD(n) s->n=reinterpret_cast<PFN_vk##n>(s->device.getDeviceProcAddr(s->device.device,"vk" #n));if(!s->n){delete s;return false;}
    GRADE_FUNCTIONS(LOAD)
#undef LOAD
    s->api=api;state_=s;auto fail=[&](){Shutdown(0);return false;};
    VkDescriptorSetLayoutBinding bindings[3]{};
    for(uint32_t i=0;i<3;++i){auto& b=bindings[i];b.binding=i;b.descriptorCount=1;b.stageFlags=VK_SHADER_STAGE_COMPUTE_BIT;b.descriptorType=i?VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER:VK_DESCRIPTOR_TYPE_STORAGE_IMAGE;}
    VkDescriptorSetLayoutCreateInfo sl{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO};sl.bindingCount=3;sl.pBindings=bindings;
    if(s->CreateDescriptorSetLayout(s->device.device,&sl,nullptr,&s->setLayout)!=VK_SUCCESS) return fail();
    VkPushConstantRange range{VK_SHADER_STAGE_COMPUTE_BIT,0,sizeof(Parameters)};
    VkPipelineLayoutCreateInfo pl{VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO};pl.setLayoutCount=1;pl.pSetLayouts=&s->setLayout;pl.pushConstantRangeCount=1;pl.pPushConstantRanges=&range;
    if(s->CreatePipelineLayout(s->device.device,&pl,nullptr,&s->layout)!=VK_SUCCESS) return fail();
    VkShaderModuleCreateInfo sm{VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO};sm.codeSize=sizeof kHdVulkanGrade;sm.pCode=kHdVulkanGrade;
    VkShaderModule module{};if(s->CreateShaderModule(s->device.device,&sm,nullptr,&module)!=VK_SUCCESS) return fail();
    VkComputePipelineCreateInfo cp{VK_STRUCTURE_TYPE_COMPUTE_PIPELINE_CREATE_INFO};cp.stage.sType=VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
    cp.stage.stage=VK_SHADER_STAGE_COMPUTE_BIT;cp.stage.module=module;cp.stage.pName="main";cp.layout=s->layout;
    VkResult result=s->CreateComputePipelines(s->device.device,s->device.pipelineCache,1,&cp,nullptr,&s->pipeline);
    s->DestroyShaderModule(s->device.device,module,nullptr);if(result!=VK_SUCCESS)return fail();
    VkSamplerCreateInfo si{VK_STRUCTURE_TYPE_SAMPLER_CREATE_INFO};si.magFilter=si.minFilter=VK_FILTER_LINEAR;si.mipmapMode=VK_SAMPLER_MIPMAP_MODE_NEAREST;
    si.addressModeU=si.addressModeV=si.addressModeW=VK_SAMPLER_ADDRESS_MODE_CLAMP_TO_EDGE;
    if(s->CreateSampler(s->device.device,&si,nullptr,&s->linear)!=VK_SUCCESS)return fail();
    uint32_t n=s->device.frameSlots;VkDescriptorPoolSize sizes[2]={{VK_DESCRIPTOR_TYPE_STORAGE_IMAGE,n},{VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER,n*2}};
    VkDescriptorPoolCreateInfo pi{VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO};pi.maxSets=n;pi.poolSizeCount=2;pi.pPoolSizes=sizes;
    if(s->CreateDescriptorPool(s->device.device,&pi,nullptr,&s->pool)!=VK_SUCCESS)return fail();
    std::array<VkDescriptorSetLayout,8> layouts{};layouts.fill(s->setLayout);std::array<VkDescriptorSet,8> sets{};
    VkDescriptorSetAllocateInfo ai{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO};ai.descriptorPool=s->pool;ai.descriptorSetCount=n;ai.pSetLayouts=layouts.data();
    if(s->AllocateDescriptorSets(s->device.device,&ai,sets.data())!=VK_SUCCESS)return fail();
    for(uint32_t i=0;i<n;++i)s->slots[i].set=sets[i];return true;
}
bool Effect::Resize(uint32_t w,uint32_t h) {if(!state_||!w||!h||w>16384||h>16384)return false;state_->width=w;state_->height=h;return true;}
bool Effect::HasLut(int32_t id) const {return state_ && state_->luts.find(id)!=state_->luts.end();}
bool Effect::AddLut(int32_t id,const Texels& pixels) {
    auto* s=state_;if(!s || id<0)return false;if(HasLut(id))return true;
    Impl::Lut lut;
    WXL_VkImageDesc desc{VK_FORMAT_R8G8B8A8_UNORM,LutWidth,LutHeight,1,VK_IMAGE_USAGE_SAMPLED_BIT|VK_IMAGE_USAGE_TRANSFER_DST_BIT,VK_IMAGE_ASPECT_COLOR_BIT};
    lut.handle=s->api->CreateImage(&desc,&lut.image);if(!lut.handle){s->error="grade LUT image allocation failed";return false;}
    WXL_VkBufferDesc bd{LutBytes,VK_BUFFER_USAGE_TRANSFER_SRC_BIT,WXL_VK_MEMORY_HOST};lut.staging=s->api->CreateBuffer(&bd,&lut.buffer);
    if(!lut.staging || !lut.buffer.mapped){if(lut.staging)s->api->RetireBuffer(lut.staging,0);s->api->RetireImage(lut.handle,0);s->error="grade LUT upload allocation failed";return false;}
    auto* rgba=static_cast<uint8_t*>(lut.buffer.mapped);
    for(size_t i=0;i<LutBytes;i+=4){rgba[i]=pixels[i+2];rgba[i+1]=pixels[i+1];rgba[i+2]=pixels[i];rgba[i+3]=pixels[i+3];}
    s->api->FlushBuffer(lut.staging);
    try {s->luts.emplace(id,lut);}catch(...) {s->api->RetireBuffer(lut.staging,0);s->api->RetireImage(lut.handle,0);s->error="grade LUT CPU cache allocation failed";return false;}
    s->error="";return true;
}
bool Effect::Record(const WXL_VkStageContext& ctx,int32_t a,int32_t b,const Parameters& parameters) {
    auto* s=state_;if(!s)return false;
    if(ctx.structSize<sizeof ctx || ctx.point!=Point || !ctx.cmd || !ctx.colorView || !ctx.serial || ctx.colorFormat!=VK_FORMAT_R8G8B8A8_UNORM ||
       ctx.colorLayout!=VK_IMAGE_LAYOUT_GENERAL || ctx.frameSlots!=s->device.frameSlots || ctx.frameSlot>=s->device.frameSlots || ctx.extent.width!=s->width || ctx.extent.height!=s->height) {s->error="grade frame/extent unavailable";return false;}
    auto& slot=s->slots[ctx.frameSlot];if(slot.serial==ctx.serial || slot.serial>ctx.completedSerial){s->error="grade slot in flight/duplicate";return false;}
    auto ia=s->luts.find(a),ib=s->luts.find(b);if(ia==s->luts.end()||ib==s->luts.end()){s->error="grade LUT not prepared";return false;}
    Parameters p=parameters;if(!std::isfinite(p.blend)||!std::isfinite(p.strength)||!std::isfinite(p.debug)){s->error="grade non-finite parameters";return false;}
    p.blend=Sat(p.blend);p.strength=std::clamp(p.strength,0.0f,2.0f);p.swapRB=ctx.swapRB;
    for(auto* lut:{&ia->second,&ib->second}) {
        if(!lut->uploaded) {
            VkImageMemoryBarrier barrier{VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER};barrier.oldLayout=VK_IMAGE_LAYOUT_UNDEFINED;barrier.newLayout=VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;
            barrier.srcQueueFamilyIndex=barrier.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;barrier.image=lut->image.image;barrier.subresourceRange={VK_IMAGE_ASPECT_COLOR_BIT,0,1,0,1};barrier.dstAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;
            s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT,VK_PIPELINE_STAGE_TRANSFER_BIT,0,0,nullptr,0,nullptr,1,&barrier);
            VkBufferImageCopy copy{};copy.imageSubresource={VK_IMAGE_ASPECT_COLOR_BIT,0,0,1};copy.imageExtent={LutWidth,LutHeight,1};
            s->CmdCopyBufferToImage(ctx.cmd,lut->buffer.buffer,lut->image.image,VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,1,&copy);
            barrier.oldLayout=VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;barrier.newLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;barrier.srcAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;barrier.dstAccessMask=VK_ACCESS_SHADER_READ_BIT;
            s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_TRANSFER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,0,nullptr,0,nullptr,1,&barrier);
            lut->uploaded=true;
        }
        lut->serial=ctx.serial;
    }
    VkDescriptorImageInfo images[3]={{VK_NULL_HANDLE,ctx.colorView,ctx.colorLayout},{s->linear,ia->second.image.view,VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL},{s->linear,ib->second.image.view,VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL}};
    VkWriteDescriptorSet writes[3]{};for(uint32_t i=0;i<3;++i){auto& w=writes[i];w.sType=VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;w.dstSet=slot.set;w.dstBinding=i;w.descriptorCount=1;w.descriptorType=i?VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER:VK_DESCRIPTOR_TYPE_STORAGE_IMAGE;w.pImageInfo=&images[i];}
    s->UpdateDescriptorSets(s->device.device,3,writes,0,nullptr);
    VkMemoryBarrier barrier{VK_STRUCTURE_TYPE_MEMORY_BARRIER};barrier.srcAccessMask=VK_ACCESS_MEMORY_WRITE_BIT;barrier.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_SHADER_WRITE_BIT;
    s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_ALL_COMMANDS_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,1,&barrier,0,nullptr,0,nullptr);
    s->CmdBindPipeline(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->pipeline);s->CmdBindDescriptorSets(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->layout,0,1,&slot.set,0,nullptr);
    s->CmdPushConstants(ctx.cmd,s->layout,VK_SHADER_STAGE_COMPUTE_BIT,0,sizeof p,&p);s->CmdDispatch(ctx.cmd,(s->width+7)/8,(s->height+7)/8,1);
    barrier.srcAccessMask=VK_ACCESS_SHADER_WRITE_BIT;barrier.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_TRANSFER_READ_BIT;
    s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT|VK_PIPELINE_STAGE_TRANSFER_BIT,0,1,&barrier,0,nullptr,0,nullptr);
    slot.serial=s->last=ctx.serial;s->error="";return true;
}
bool Effect::Shutdown(uint64_t completed) {
    auto* s=state_;if(!s)return true;if(completed<s->last){s->error="grade shutdown pending serial";return false;}
    for(auto& entry:s->luts){auto& lut=entry.second;if(lut.staging)s->api->RetireBuffer(lut.staging,lut.serial);if(lut.handle)s->api->RetireImage(lut.handle,lut.serial);}
    if(s->pool)s->DestroyDescriptorPool(s->device.device,s->pool,nullptr);if(s->linear)s->DestroySampler(s->device.device,s->linear,nullptr);
    if(s->pipeline)s->DestroyPipeline(s->device.device,s->pipeline,nullptr);if(s->layout)s->DestroyPipelineLayout(s->device.device,s->layout,nullptr);
    if(s->setLayout)s->DestroyDescriptorSetLayout(s->device.device,s->setLayout,nullptr);delete s;state_=nullptr;return true;
}
uint64_t Effect::LastUsed() const {return state_?state_->last:0;}
const char* Effect::Error() const {return state_?state_->error:"grade not initialized";}
#ifndef HD_GRADE_STANDALONE
namespace {
Effect effect;const WXL_VkRenderApi* api=nullptr;void* stage=nullptr;
CVar *enabled=nullptr,*strength=nullptr,*debug=nullptr,*forced=nullptr,*info=nullptr;
bool wanted=false,sawRecord=false;Parameters current;Selection selected;char lastInfo[240]{};
std::set<int32_t> missing;
void Info(const char* value){if(info && std::strcmp(lastInfo,value)){std::snprintf(lastInfo,sizeof lastInfo,"%s",value);info->Set(lastInfo,true,false,false,false);}}
CVar* Var(const char* name,const char* help,const char* value,uint32_t flags=1){if(auto* old=CVar::LookupRegistered(name))return old;return CVar::Register(name,help,flags,value,nullptr,CATEGORY_GRAPHICS,false,nullptr,false);}
float Clamp(float v,float lo,float hi){return std::isfinite(v)?std::clamp(v,lo,hi):lo;}
    // One light's grading (clear weather blended to storm), as weights. No Forever grading = identity (0).
    void AddLight(LutWeights& luts, const LightRec* light, int32_t time, float storm, float weight) {
        for (int32_t pass = 0; pass < 2; pass++) {
            float w = weight * (pass == 0 ? 1.0f - storm : storm);
            if (w <= 0.0f) continue;
            int32_t a, b;
            float t;
            if (HD::ForeverGradingAt(light, pass == 0 ? 0 : 2, time, &a, &b, &t)) {
                luts.Add(a, w * (1.0f - t));
                luts.Add(b, w * t);
            } else {
                luts.Add(0, w);
            }
        }
    }

    // Same light choice as the fog (HdFog CurrentForeverFog): the zone light, then the nearby area lights
    // blended in by distance like DayNight::BlendAreaLight, farthest first so the nearest wins.
    void CurrentLuts(LutWeights& luts) {
        const DayNight::DNInfo& info = DayNight::g_dnInfo;
        const TSGrowableArray<const LightRec*>& lights = DayNight::g_areaLights;
        if (!lights.m_count) return;
        int32_t time = static_cast<int32_t>(info.m_dayProgression * 2880.0f);
        float storm = Clamp(info.m_stormBlend, 0.0f, 1.0f);
        AddLight(luts, lights.m_data[0], time, storm, 1.0f);

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
        for (int32_t i = 1; i < count; i++) {
            Near n = nearLights[i];
            int32_t j = i - 1;
            while (j >= 0 && nearLights[j].distSq < n.distSq) { nearLights[j + 1] = nearLights[j]; j--; }
            nearLights[j + 1] = n;
        }
        for (int32_t i = 0; i < count; i++) {
            luts.Scale(1.0f - nearLights[i].weight);
            AddLight(luts, nearLights[i].light, time, storm, nearLights[i].weight);
        }
    }


bool Cache(int32_t id) {
    if(effect.HasLut(id))return true;if(id<0 || missing.count(id))return false;
    Texels pixels{};
    if(id==0)Identity(pixels);else {
        char paths[2][96];std::snprintf(paths[0],sizeof paths[0],"forever_data\\grading\\%d.blp",id);std::snprintf(paths[1],sizeof paths[1],"..\\..\\forever_data\\grading\\%d.blp",id);
        FILE* file=nullptr;for(int i=0;i<2 && !file;++i)file=std::fopen(paths[i],"rb");
        if(!file){missing.insert(id);return false;}
        // Bounded BLP read; the reference needs only the first uncompressed mip.
        std::vector<uint8_t> data(2*1024*1024);size_t got=std::fread(data.data(),1,data.size(),file);bool bad=std::ferror(file)!=0;std::fclose(file);
        if(bad || !DecodeLut(data.data(),got,pixels)){missing.insert(id);return false;}
    }
    if(!effect.AddLut(id,pixels))return false;return true;
}
void Prewarm() {
    for(const char* directory:{"forever_data/grading","../../forever_data/grading"}) {
        std::error_code error;std::filesystem::directory_iterator it(directory,error),end;
        while(!error && it!=end) {
            auto path=it->path();if(path.extension()==".blp") {
                auto name=path.stem().string();int32_t id=0;auto parsed=std::from_chars(name.data(),name.data()+name.size(),id);
                if(parsed.ec==std::errc{} && parsed.ptr==name.data()+name.size() && id>0)Cache(id);
            }
            it.increment(error);
        }
    }
}
int __cdecl Wanted(void*){return wanted?1:0;}
void __cdecl Stage(void*,const WXL_VkStageContext* ctx) {
    if(!ctx)return;sawRecord=true;
    if(!effect.Record(*ctx,selected.a,selected.b,current)){Info(effect.Error());return;}
    char text[240];std::snprintf(text,sizeof text,"Vulkan grade: LUT %d (%.0f%%) + LUT %d (%.0f%%), strength %.2f%s",selected.a,(1-selected.blend)*100,selected.b,selected.blend*100,current.strength,current.debug>.5f?", split screen":"");Info(text);
}
}
bool Init() {
    if(stage)return true;
    enabled=Var("hdGrade","HD: colour grading, 0 off / 1 on","0");strength=Var("hdGradeStrength","HD: grading strength 0..2","1");
    debug=Var("hdGradeDebug","HD: left original / right graded","0",0);forced=Var("hdGradeLut","HD: positive LUT ID overrides zone choice","0");info=Var("hdGradeInfo","HD: grading status","off",0);
    api=wxl::ScriptMgr::GetInterface<const WXL_VkRenderApi>(WXL_VK_RENDER_API_NAME,WXL_VK_RENDER_API_VERSION);
    if(!api || api->structSize<offsetof(WXL_VkRenderApi,UnregisterStage)+sizeof(api->UnregisterStage) || !api->RegisterStage || !api->UnregisterStage || !effect.Init(api)){Info("Vulkan grade: Init failed");return false;}
    if(!Cache(0)){effect.Shutdown(0);Info("Vulkan grade: identity LUT failed");return false;}
    WXL_VkStageDesc desc{};desc.structSize=sizeof desc;desc.point=Point;desc.order=100;desc.flags=WXL_VK_STAGE_WRITES_COLOR;desc.Wanted=Wanted;desc.Run=Stage;
    stage=api->RegisterStage(&desc,"HD.Grade");if(!stage){effect.Shutdown(0);missing.clear();Info("Vulkan grade: exact after-bloom point not installed");return false;}
    Prewarm();Info("off");return true;
}
void Resize() {if(!stage || !enabled || !enabled->m_intValue)return;VkFormat format{};VkExtent2D extent{};if(wxlvk::native::present::BackBufferInfo(format,extent))effect.Resize(extent.width,extent.height);}
void World() {
    if(!g_theGxDevicePtr || g_theGxDevicePtr->DeviceApi()!=GxApi_Vulkan){HD::GradeWorld();return;}
    wanted=false;if(!stage)return;if(!enabled || !enabled->m_intValue){Info("off");return;}
    LutWeights weights;if(forced && forced->m_intValue>0)weights.Add(forced->m_intValue,1);else CurrentLuts(weights);
    selected=Select(weights);current={};current.blend=selected.blend;current.strength=Clamp(strength?strength->m_floatValue:1,0,2);current.debug=debug?float(debug->m_intValue):0;
    if(!selected.hasGrade && current.debug<=.5f){Info("Vulkan grade: no grading for this light");return;}
    if(!Cache(selected.a)||!Cache(selected.b)){Info("Vulkan grade: LUT missing, invalid or allocation failed; image unchanged");return;}
    wanted=true;sawRecord=false;wxlvk::stages::chain::Run(static_cast<wxlvk::stages::Point>(PrivatePoint));wanted=false;
    if(!sawRecord)Info("Vulkan grade skipped: exact boundary/backbuffer unavailable");
}
void SetSubpixelOffset(float,float) {} // pointwise RGB lookup; independent of depth, camera and spatial jitter
bool Shutdown() {
    if(!api && !stage)return true;wanted=false;if(stage){api->UnregisterStage(stage);stage=nullptr;}
    if(effect.LastUsed()>wxlvk::native::present::Completed()) {
        if(wxlvk::native::present::FrameOpen() && !wxlvk::native::present::FlushAndWait())return false;
        if(!wxlvk::native::present::WaitSerial(effect.LastUsed()))return false;
    }
    bool okay=effect.Shutdown(wxlvk::native::present::Completed());if(okay){api=nullptr;missing.clear();Info("off");}return okay;
}
#endif
}
