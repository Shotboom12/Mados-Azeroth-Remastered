// SPDX-License-Identifier: GPL-3.0-or-later
// HD: Vulkan AO port. Original equations/constants: WoW/Source/WorldClient/HD/HdAO.cpp.
#include "HdVulkanShadows.h"
#include "HdPassTimer.h" // HD (Claude) lot D1
#include <cstring>
#include <new>
#include <cstdio>
#include <chrono>
#include <cmath>
#include <fstream>
#include <string>

#ifndef HD_SHADOWS_STANDALONE
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "native/Present.hpp"
#include "wxl/Script.hpp"
#include "HdVulkanShadowBridge.h"
#include "native/Slots.hpp"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/Types.h"
#include "Engine/Source/Services/Texture.h"
#include "Engine/Source/ShaderEffect/ShaderEffect.h"
#include "Engine/Source/ShaderEffect/ShadowCache.h"
#endif

extern void (*g_hdShadowTrace)(const char*,float); // Claude LT2 (ShadowCache.cpp)
namespace HD::VulkanShadows {
namespace {
#include "shaders/shadows/HdSunContact.spv.h"
#include "shaders/shadows/HdSunContactOptimized.spv.h"
#include "shaders/shadows/HdSunContactCompare.spv.h"
#include "shaders/shadows/HdSunContactGpu1.spv.h" // Claude LAT1: the optimized pass as it was before LAT1 (A/B bench)
#include "shaders/shadows/HdSunBlur.spv.h"
#include "shaders/shadows/HdSunApply.spv.h"
#include "shaders/shadows/HdSunTiles.spv.h" // Claude SOLMM1
#include "shaders/shadows/HdSunBlurFast.spv.h" // Claude OMBRE1
#include "shaders/shadows/HdSunApplyFused.spv.h"
PassTimer::Timer s_passTimer; // HD (Claude) lot D1: GPU time of each sun shadow pass, measure only (hdGpuPasses)
constexpr uint32_t MaxSlots = 8, PassCount = 4;
}
struct Effect::Impl {
    const WXL_VkRenderApi* api = nullptr;
    WXL_VkDeviceInfo device{};
    const char* error = "";
    VkDescriptorSetLayout setLayout = VK_NULL_HANDLE;
    VkPipelineLayout pipelineLayout = VK_NULL_HANDLE;
    VkDescriptorPool pool = VK_NULL_HANDLE;
    VkSampler sampler = VK_NULL_HANDLE;
    VkPipeline pipeline[8]{}; // Claude OMBRE1: [6] the fast blur, [7] the vertical blur and the apply pass in one; Claude LAT1: [5] = the GPU1 pass without LAT1 (hdSunContactOpt 4, A/B bench)
    struct Slot {
        void* handles[2]{};
        WXL_VkImageInfo images[2]{};
        VkDescriptorSet sets[PassCount]{};
        void* uniform=nullptr;WXL_VkBufferInfo buffer{};
        void* proofHandle=nullptr;WXL_VkBufferInfo proofBuffer{};bool proofPending=false;uint64_t proofPixels=0;uint32_t proofMode=0; // Claude GPU1: the proof's count
        bool initialized = false;
        uint64_t serial = 0;
        // Claude SOLMM1: each band's tiles (min/max of 4 x 4, 8 x 8 or 16 x 16 texels, Claude OMBRE1) and dilated tiles, RG32F, with their two sets.
        struct Tiles {void* handles[2]{};WXL_VkImageInfo images[2]{};uint32_t w=0,h=0;bool ready=false;VkDescriptorSet sets[3]{};}; // sets: reduce (map > 0), across (0 > 1), down (1 > 0)
        Tiles tiles[5];
    };
    std::array<Slot,MaxSlots> slots{};
    uint32_t width = 0,height = 0,aoWidth = 0,aoHeight = 0;
    bool half = true;
    uint32_t failedWidth=0,failedHeight=0;
    bool failedHalf=true;
    uint64_t lastSerial = 0, allocations = 0;
    // Claude SOLMM1: the tile passes' own layout, pool and pipeline; a 1 x 1 image bound where a band has no tiles (never read).
    VkDescriptorSetLayout tileSetLayout = VK_NULL_HANDLE;
    VkPipelineLayout tilePipelineLayout = VK_NULL_HANDLE;
    VkDescriptorPool tilePool = VK_NULL_HANDLE;
    VkPipeline tilePipeline = VK_NULL_HANDLE;
    void* dummyHandle = nullptr;WXL_VkImageInfo dummy{};bool dummyReady=false;
#define AO_FUNCTIONS(X) \
    X(CreateDescriptorSetLayout) X(DestroyDescriptorSetLayout) X(CreatePipelineLayout) X(DestroyPipelineLayout) \
    X(CreateDescriptorPool) X(DestroyDescriptorPool) X(AllocateDescriptorSets) X(UpdateDescriptorSets) \
    X(CreateSampler) X(DestroySampler) X(CreateShaderModule) X(DestroyShaderModule) \
    X(CreateComputePipelines) X(DestroyPipeline) X(CmdPipelineBarrier) X(CmdBindPipeline) \
    X(CmdBindDescriptorSets) X(CmdPushConstants) X(CmdDispatch)
#define AO_DECLARE(n) PFN_vk##n n = nullptr;
    AO_FUNCTIONS(AO_DECLARE)
#undef AO_DECLARE
    void Barrier(VkCommandBuffer cmd,const Slot& slot) {
        std::array<VkImageMemoryBarrier,2> barriers{};
        for(uint32_t i=0;i<2;++i) {
            auto& b=barriers[i]; b.sType=VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;
            b.oldLayout=slot.initialized?VK_IMAGE_LAYOUT_GENERAL:VK_IMAGE_LAYOUT_UNDEFINED;
            b.newLayout=VK_IMAGE_LAYOUT_GENERAL; b.image=slot.images[i].image;
            b.srcQueueFamilyIndex=b.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;
            b.subresourceRange.aspectMask=VK_IMAGE_ASPECT_COLOR_BIT;
            b.subresourceRange.levelCount=b.subresourceRange.layerCount=1;
            b.srcAccessMask=slot.initialized?VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_SHADER_WRITE_BIT:0;
            b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_SHADER_WRITE_BIT;
        }
        CmdPipelineBarrier(cmd,slot.initialized?VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT:VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT,
                           VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,0,nullptr,0,nullptr,2,barriers.data());
    }
    void Between(VkCommandBuffer cmd) {
        VkMemoryBarrier b{VK_STRUCTURE_TYPE_MEMORY_BARRIER};
        b.srcAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_SHADER_WRITE_BIT;
        b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_SHADER_WRITE_BIT;
        CmdPipelineBarrier(cmd,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,1,&b,0,nullptr,0,nullptr);
    }
};

// Claude GPU1: hdSunContactOpt 2 is the proof that the optimized contact pass writes the same pixels as the original. Both
// run on the same frame, before the blur; the compare pass counts the pixels that differ in any channel, bit for bit.
// One line every 120 compared frames in Logs\preuve-contact.txt.
// hdSunContactOpt 3 is the control: the original against itself (must give 0, or the proof itself is not reliable).
static uint64_t s_proofFrames=0,s_proofPixels=0,s_proofDiffer=0,s_proofBadFrames=0,s_proofContactOff=0,s_proofR=0,s_proofG=0;
static uint32_t s_proofMode=0;
static void ProofResult(const uint32_t* count,uint64_t pixels,bool contact,uint32_t mode){
 if(mode!=s_proofMode){s_proofMode=mode;s_proofFrames=s_proofPixels=s_proofDiffer=s_proofBadFrames=s_proofContactOff=s_proofR=s_proofG=0;}
 const uint32_t differ=count[0];
 ++s_proofFrames;s_proofPixels+=pixels;s_proofDiffer+=differ;s_proofR+=count[1];s_proofG+=count[2];if(differ)++s_proofBadFrames;if(!contact)++s_proofContactOff;
 if(s_proofFrames%120u)return;
 CVar* t=CVar::LookupRegistered("hdTime");
 if(std::FILE* f=std::fopen("Logs\\preuve-contact.txt","a")){
  std::fprintf(f,"PREUVE GPU1 %s (hdTime %.1f) : %llu images comparees, %llu pixels compares, %llu pixels differents (contact %llu, soleil %llu), %llu images avec difference%s\n",
   s_proofMode==3?"TEMOIN original contre original":(s_proofMode==5?"LAT1 contre GPU1 (avant LAT1)":"contact optimise contre original"), // Claude LAT1: 5
   t?double(t->m_floatValue):-99.0,static_cast<unsigned long long>(s_proofFrames),static_cast<unsigned long long>(s_proofPixels),
   static_cast<unsigned long long>(s_proofDiffer),static_cast<unsigned long long>(s_proofR),static_cast<unsigned long long>(s_proofG),
   static_cast<unsigned long long>(s_proofBadFrames),s_proofContactOff?" (ATTENTION : hdSunContact 0 sur une partie des images)":"");
  std::fclose(f);}
}
bool Effect::Init(const WXL_VkRenderApi* api) {
    if(state_) return true;
    if(!api || api->structSize<offsetof(WXL_VkRenderApi,RetireImage)+sizeof(api->RetireImage) ||
        api->apiVersion!=WXL_VK_RENDER_API_VERSION || !api->GetDeviceInfo || !api->CreateImage || !api->RetireImage || !api->CreateBuffer || !api->RetireBuffer || !api->FlushBuffer) return false;
    auto* s=new(std::nothrow) Impl(); if(!s) return false;
    s->api=api; s->device.structSize=sizeof s->device;
    if(!api->GetDeviceInfo(&s->device) || !s->device.device || !s->device.getDeviceProcAddr || !s->device.getInstanceProcAddr ||
        !s->device.frameSlots || s->device.frameSlots>MaxSlots) { delete s;return false; }
#define AO_LOAD(n) s->n=reinterpret_cast<PFN_vk##n>(s->device.getDeviceProcAddr(s->device.device,"vk" #n)); \
    if(!s->n) { delete s;return false; }
    AO_FUNCTIONS(AO_LOAD)
#undef AO_LOAD
    state_=s;
    s_passTimer.Init(s->device); // HD (Claude) lot D1
    auto fail=[&](const char* why) { s->error=why;Shutdown(0);return false; };
    auto formats=reinterpret_cast<PFN_vkGetPhysicalDeviceFormatProperties>(s->device.getInstanceProcAddr(s->device.instance,"vkGetPhysicalDeviceFormatProperties"));
    if(!formats) return fail("format query missing");
    VkFormatProperties format{};formats(s->device.physicalDevice,VK_FORMAT_R8G8B8A8_UNORM,&format);
    constexpr auto required=VK_FORMAT_FEATURE_STORAGE_IMAGE_BIT|VK_FORMAT_FEATURE_SAMPLED_IMAGE_BIT;
    if((format.optimalTilingFeatures&required)!=required) return fail("RGBA8 storage/sample format unavailable");
    std::array<VkDescriptorSetLayoutBinding,20> bindings{}; // HD (Claude) RM6: binding 13 = G-buffer albedo (class: terrain); Claude SOLMM1: 15..19 = the bands' dilated tiles
    for(uint32_t i=0;i<20;++i) {
        bindings[i].binding=i;bindings[i].descriptorCount=1;bindings[i].stageFlags=VK_SHADER_STAGE_COMPUTE_BIT;
        bindings[i].descriptorType=(i<10||i==13)?VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER:(i<12?VK_DESCRIPTOR_TYPE_STORAGE_IMAGE:VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER);
    }
    bindings[14].descriptorType=VK_DESCRIPTOR_TYPE_STORAGE_BUFFER; // Claude GPU1: the proof's count (written only in hdSunContactOpt 2)
    for(uint32_t i=15;i<20;++i)bindings[i].descriptorType=VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER; // Claude SOLMM1
    VkDescriptorSetLayoutCreateInfo sl{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO};
    sl.bindingCount=20;sl.pBindings=bindings.data();
    if(s->CreateDescriptorSetLayout(s->device.device,&sl,nullptr,&s->setLayout)!=VK_SUCCESS) return fail("descriptor layout");
    VkPushConstantRange push{VK_SHADER_STAGE_COMPUTE_BIT,0,16};
    VkPipelineLayoutCreateInfo pl{VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO};
    pl.setLayoutCount=1;pl.pSetLayouts=&s->setLayout;pl.pushConstantRangeCount=1;pl.pPushConstantRanges=&push;
    if(s->CreatePipelineLayout(s->device.device,&pl,nullptr,&s->pipelineLayout)!=VK_SUCCESS) return fail("pipeline layout");
    const uint32_t* code[]={kHdSunContact,kHdSunBlur,kHdSunApply,kHdSunContactOptimized,kHdSunContactCompare,kHdSunContactGpu1,kHdSunBlurFast,kHdSunApplyFused};
    const size_t bytes[]={sizeof kHdSunContact,sizeof kHdSunBlur,sizeof kHdSunApply,
        sizeof kHdSunContactOptimized,sizeof kHdSunContactCompare,sizeof kHdSunContactGpu1,sizeof kHdSunBlurFast,sizeof kHdSunApplyFused}; // Claude LAT1: [5] = GPU1 without LAT1 (bench)
    for(uint32_t i=0;i<8;++i) {
        VkShaderModuleCreateInfo ci{VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO};ci.codeSize=bytes[i];ci.pCode=code[i];
        VkShaderModule module=VK_NULL_HANDLE;
        if(s->CreateShaderModule(s->device.device,&ci,nullptr,&module)!=VK_SUCCESS) {
            if(i<3) return fail("shader module");
            continue;
        }
        VkComputePipelineCreateInfo cp{VK_STRUCTURE_TYPE_COMPUTE_PIPELINE_CREATE_INFO};
        cp.stage.sType=VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;cp.stage.stage=VK_SHADER_STAGE_COMPUTE_BIT;
        cp.stage.module=module;cp.stage.pName="main";cp.layout=s->pipelineLayout;
        VkResult result=s->CreateComputePipelines(s->device.device,s->device.pipelineCache,1,&cp,nullptr,&s->pipeline[i]);
        s->DestroyShaderModule(s->device.device,module,nullptr);
        if(result!=VK_SUCCESS) {
            if(i<3) return fail("compute pipeline");
            if(s->pipeline[i]) s->DestroyPipeline(s->device.device,s->pipeline[i],nullptr);
            s->pipeline[i]=VK_NULL_HANDLE;
        }
    }
    VkSamplerCreateInfo sampler{VK_STRUCTURE_TYPE_SAMPLER_CREATE_INFO};
    sampler.magFilter=sampler.minFilter=VK_FILTER_NEAREST;sampler.mipmapMode=VK_SAMPLER_MIPMAP_MODE_NEAREST;
    sampler.addressModeU=sampler.addressModeV=sampler.addressModeW=VK_SAMPLER_ADDRESS_MODE_CLAMP_TO_EDGE;
    if(s->CreateSampler(s->device.device,&sampler,nullptr,&s->sampler)!=VK_SUCCESS) return fail("nearest sampler");
    uint32_t count=PassCount*s->device.frameSlots;
    VkDescriptorPoolSize sizes[4]={{VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER,16*count},{VK_DESCRIPTOR_TYPE_STORAGE_IMAGE,2*count},{VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER,count},{VK_DESCRIPTOR_TYPE_STORAGE_BUFFER,count}};
    VkDescriptorPoolCreateInfo pool{VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO};pool.maxSets=count;pool.poolSizeCount=4;pool.pPoolSizes=sizes;
    if(s->CreateDescriptorPool(s->device.device,&pool,nullptr,&s->pool)!=VK_SUCCESS) return fail("descriptor pool");
    std::array<VkDescriptorSetLayout,MaxSlots*PassCount> layouts{};layouts.fill(s->setLayout);
    std::array<VkDescriptorSet,MaxSlots*PassCount> sets{};
    VkDescriptorSetAllocateInfo alloc{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO};
    alloc.descriptorPool=s->pool;alloc.descriptorSetCount=count;alloc.pSetLayouts=layouts.data();
    if(s->AllocateDescriptorSets(s->device.device,&alloc,sets.data())!=VK_SUCCESS) return fail("descriptor sets");
    for(uint32_t i=0;i<s->device.frameSlots;++i) for(uint32_t j=0;j<PassCount;++j) s->slots[i].sets[j]=sets[i*PassCount+j];
    for(uint32_t i=0;i<s->device.frameSlots;++i){
        WXL_VkBufferDesc desc{sizeof(Constants),VK_BUFFER_USAGE_UNIFORM_BUFFER_BIT,WXL_VK_MEMORY_HOST};
        auto& slot=s->slots[i];slot.uniform=api->CreateBuffer(&desc,&slot.buffer);
        if(!slot.uniform || !slot.buffer.mapped)return fail("shadow constant buffer");
        WXL_VkBufferDesc proofDesc{16,VK_BUFFER_USAGE_STORAGE_BUFFER_BIT,WXL_VK_MEMORY_HOST}; // Claude GPU1
        slot.proofHandle=api->CreateBuffer(&proofDesc,&slot.proofBuffer);
        if(slot.proofHandle && slot.proofBuffer.mapped) std::memset(slot.proofBuffer.mapped,0,16);
        else { if(slot.proofHandle) api->RetireBuffer(slot.proofHandle,0); slot.proofHandle=nullptr; }   // proof unavailable, shadows unaffected
    }
    // Claude SOLMM1: the tiles' pipeline. Any failure leaves the tiles off (the contact pass reads every tap, as before).
    {
        VkFormatProperties rg{};formats(s->device.physicalDevice,VK_FORMAT_R32G32_SFLOAT,&rg);
        bool ok=(rg.optimalTilingFeatures&required)==required;
        VkDescriptorSetLayoutBinding tb[2]{};
        for(uint32_t i=0;i<2;++i){tb[i].binding=i;tb[i].descriptorCount=1;tb[i].stageFlags=VK_SHADER_STAGE_COMPUTE_BIT;tb[i].descriptorType=i?VK_DESCRIPTOR_TYPE_STORAGE_IMAGE:VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;}
        VkDescriptorSetLayoutCreateInfo tl{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO};tl.bindingCount=2;tl.pBindings=tb;
        ok=ok&&s->CreateDescriptorSetLayout(s->device.device,&tl,nullptr,&s->tileSetLayout)==VK_SUCCESS;
        VkPushConstantRange tpush{VK_SHADER_STAGE_COMPUTE_BIT,0,16};
        VkPipelineLayoutCreateInfo tpl{VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO};tpl.setLayoutCount=1;tpl.pSetLayouts=&s->tileSetLayout;tpl.pushConstantRangeCount=1;tpl.pPushConstantRanges=&tpush;
        ok=ok&&s->CreatePipelineLayout(s->device.device,&tpl,nullptr,&s->tilePipelineLayout)==VK_SUCCESS;
        const uint32_t tileSets=s->device.frameSlots*15;
        VkDescriptorPoolSize tsizes[2]={{VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER,tileSets},{VK_DESCRIPTOR_TYPE_STORAGE_IMAGE,tileSets}};
        VkDescriptorPoolCreateInfo tpool{VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO};tpool.maxSets=tileSets;tpool.poolSizeCount=2;tpool.pPoolSizes=tsizes;
        ok=ok&&s->CreateDescriptorPool(s->device.device,&tpool,nullptr,&s->tilePool)==VK_SUCCESS;
        if(ok){
            std::array<VkDescriptorSetLayout,MaxSlots*15> tl2{};tl2.fill(s->tileSetLayout);std::array<VkDescriptorSet,MaxSlots*15> ts{};
            VkDescriptorSetAllocateInfo ta{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO};ta.descriptorPool=s->tilePool;ta.descriptorSetCount=tileSets;ta.pSetLayouts=tl2.data();
            ok=s->AllocateDescriptorSets(s->device.device,&ta,ts.data())==VK_SUCCESS;
            if(ok)for(uint32_t i=0;i<s->device.frameSlots;++i)for(uint32_t b=0;b<5;++b)for(uint32_t j=0;j<3;++j)s->slots[i].tiles[b].sets[j]=ts[i*15+b*3+j];
        }
        if(ok){
            VkShaderModuleCreateInfo ci{VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO};ci.codeSize=sizeof kHdSunTiles;ci.pCode=kHdSunTiles;
            VkShaderModule module=VK_NULL_HANDLE;ok=s->CreateShaderModule(s->device.device,&ci,nullptr,&module)==VK_SUCCESS;
            if(ok){VkComputePipelineCreateInfo cp{VK_STRUCTURE_TYPE_COMPUTE_PIPELINE_CREATE_INFO};cp.stage.sType=VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;cp.stage.stage=VK_SHADER_STAGE_COMPUTE_BIT;
                cp.stage.module=module;cp.stage.pName="main";cp.layout=s->tilePipelineLayout;
                ok=s->CreateComputePipelines(s->device.device,s->device.pipelineCache,1,&cp,nullptr,&s->tilePipeline)==VK_SUCCESS;s->DestroyShaderModule(s->device.device,module,nullptr);}
        }
        if(ok){WXL_VkImageDesc dd{VK_FORMAT_R32G32_SFLOAT,1,1,1,VK_IMAGE_USAGE_SAMPLED_BIT|VK_IMAGE_USAGE_STORAGE_BIT,VK_IMAGE_ASPECT_COLOR_BIT};s->dummyHandle=api->CreateImage(&dd,&s->dummy);ok=s->dummyHandle!=nullptr;}
        if(!ok&&s->tilePipeline){s->DestroyPipeline(s->device.device,s->tilePipeline,nullptr);s->tilePipeline=VK_NULL_HANDLE;}
    }
    return true;
}
bool Effect::Resize(uint32_t w,uint32_t h) {
    constexpr bool half=false;
    auto* s=state_;if(!s) return false;
    if(!w || !h || w>16384 || h>16384) {s->error="invalid extent";return false;}
    if(s->width==w && s->height==h && s->half==half) return true;
    if(s->failedWidth==w && s->failedHeight==h && s->failedHalf==half) return false; // no per-frame OOM retry
    const uint32_t aw=half?(w+1)/2:w,ah=half?(h+1)/2:h;
    std::array<std::array<void*,2>,MaxSlots> handles{};
    std::array<std::array<WXL_VkImageInfo,2>,MaxSlots> images{};
    bool okay=true;
    WXL_VkImageDesc desc{VK_FORMAT_R8G8B8A8_UNORM,aw,ah,1,VK_IMAGE_USAGE_SAMPLED_BIT|VK_IMAGE_USAGE_STORAGE_BIT,VK_IMAGE_ASPECT_COLOR_BIT};
    for(uint32_t i=0;i<s->device.frameSlots && okay;++i) for(uint32_t j=0;j<2;++j) {
        handles[i][j]=s->api->CreateImage(&desc,&images[i][j]);
        if(!handles[i][j]) {okay=false;break;} ++s->allocations;
    }
    if(!okay) {
        for(auto& slot:handles) for(auto handle:slot) if(handle) s->api->RetireImage(handle,0);
        s->failedWidth=w;s->failedHeight=h;s->failedHalf=half;
        s->error="AO image allocation failed (previous extent retained)";return false;
    }
    for(uint32_t i=0;i<s->device.frameSlots;++i) {
        auto& slot=s->slots[i];
        for(uint32_t j=0;j<2;++j) {
            if(slot.handles[j]) s->api->RetireImage(slot.handles[j],slot.serial);
            slot.handles[j]=handles[i][j];slot.images[j]=images[i][j];
        }
        slot.initialized=false; // descriptor sets are updated only once this slot's fence completed.
    }
    s->width=w;s->height=h;s->aoWidth=aw;s->aoHeight=ah;s->half=half;s->failedWidth=s->failedHeight=0;s->error="";return true;
}
bool BuildConstants(const WXL_VkStageContext& ctx,const Settings& settings,const NativeMaps& maps,Constants& out) {
 if(!ctx.sceneValid || !ctx.scene || !ctx.extent.width || !ctx.extent.height)return false;
 const float* p=ctx.scene->projection;const auto& vp=ctx.viewport;
 for(int i=0;i<16;++i)if(!std::isfinite(p[i]))return false;
 if(p[0]==0||p[5]==0||p[11]!=1||p[15]!=0||p[10]<=0||p[14]>=0||vp.width<=0||vp.height<=0||vp.maxDepth<=vp.minDepth)return false;
 auto clamp=[](float v,float d,float a,float b){return std::isfinite(v)?std::clamp(v,a,b):d;};
 Constants c{};c.screen[0]=1.0f/ctx.extent.width;c.screen[1]=1.0f/ctx.extent.height;c.screen[2]=1/(vp.maxDepth-vp.minDepth);c.screen[3]=-vp.minDepth*c.screen[2];
 c.view[0]=2/p[0];c.view[1]=-2/p[5];c.view[2]=(-1-p[8])/p[0];c.view[3]=(1-p[9])/p[5];
 c.rect[0]=vp.x*c.screen[0];c.rect[1]=vp.y*c.screen[1];c.rect[2]=ctx.extent.width/vp.width;c.rect[3]=ctx.extent.height/vp.height;
 c.projection[0]=p[0];c.projection[1]=p[5];c.projection[2]=p[8];c.projection[3]=p[9];
 c.depth[0]=p[10];c.depth[1]=-p[14];c.depth[2]=.99999f;c.depth[3]=clamp(settings.tagTolerance,WXL_VK_GBUFFER_TAG_TOLERANCE,.001f,1)*WXL_VK_GBUFFER_TAG_SPAN/16; // log2 units -> tag units (the tag spans 16 log2 units)
 for(int i=0;i<3;++i)c.sun[i]=maps.towardLight[i];c.sun[3]=clamp(settings.contactLength,1.5f,0,4);
 // HD (Claude) SH3, 7 nov 2026: the sun never smaller than the real one (a saved hdSunAngle 0 gave razor edges) and up to
 // 0.1 rad for a visible, widening penumbra; the widest penumbra from 0.5 to 6 yd (a saved 0 gave 0.05 yd).
 c.settings[0]=std::tan(clamp(settings.sunAngle,.04f,.00465f,.1f));c.settings[1]=clamp(settings.normalBias,.015f,0,.15f);
 c.settings[2]=clamp(settings.maxPenumbra,3,.5f,6);c.settings[3]=clamp(settings.strength,1,0,1);
 c.contact[0]=clamp(settings.contactThickness,.08f,.005f,.3f);c.contact[1]=clamp(settings.contactStart,.035f,.005f,.2f);c.contact[2]=clamp(settings.contactStrength,1,0,1);c.contact[3]=clamp(settings.grassShade,1,0,1);c.jitter[3]=4; // grass: shade in the ground's shadow, up to 4 yd in front of it
 c.jitter[0]=settings.extraJitterX;c.jitter[1]=settings.extraJitterY;c.jitter[2]=ctx.swapRB?1.0f:0.0f;
 std::memcpy(c.rows,maps.rows,sizeof c.rows);std::memcpy(c.maps,maps.meta,sizeof c.maps);
 c.extra[0]=clamp(settings.pixelScale,1,.25f,1);c.extra[1]=settings.farFix?1.0f:0.0f;c.extra[2]=clamp(settings.farBias,.25f,0,1);c.extra[3]=clamp(settings.penumbraMin,.3f,0,1); /* HD (Claude) SH3: hdSunPenumbraMin */ // HD (Claude) O1: 1 = no FSR, the blur exactly as before
 const float* f=reinterpret_cast<const float*>(&c);for(size_t i=0;i<sizeof c/sizeof(float);++i)if(!std::isfinite(f[i]))return false;
 float l=c.sun[0]*c.sun[0]+c.sun[1]*c.sun[1]+c.sun[2]*c.sun[2];if(l<.01f)return false;
 out=c;return true;
}
bool Effect::Record(const WXL_VkStageContext& ctx,const Settings& settings,const NativeMaps& maps,const WXL_VkGBuffer& gb) {
 auto* s=state_;if(!s||!settings.enabled)return false;
 if(ctx.structSize<offsetof(WXL_VkStageContext,jitter)||!ctx.cmd||!ctx.colorView||!ctx.depthView||!ctx.serial||
  ctx.point!=WXL_VK_POINT_AFTER_OPAQUE_WORLD||ctx.frameSlot>=s->device.frameSlots||ctx.frameSlots!=s->device.frameSlots||
  ctx.extent.width!=s->width||ctx.extent.height!=s->height||ctx.colorFormat!=VK_FORMAT_R8G8B8A8_UNORM||ctx.colorLayout!=VK_IMAGE_LAYOUT_GENERAL||
  gb.structSize<sizeof gb||!gb.valid||gb.serial!=ctx.serial||gb.shadowEndpointContract!=0x53484434||!gb.shadowLowView||!gb.shadowHighView||!gb.normalView||!gb.albedoView||
  gb.shadowEndpointFormat!=VK_FORMAT_R16G16B16A16_SFLOAT||gb.layout!=VK_IMAGE_LAYOUT_GENERAL||gb.extent.width!=s->width||gb.extent.height!=s->height||maps.serial!=ctx.serial){s->error="shadow frame/G-buffer/native maps unavailable";return false;}
 auto& slot=s->slots[ctx.frameSlot];if(slot.serial==ctx.serial||slot.serial>ctx.completedSerial){s->error="shadow slot duplicate/in flight";return false;}
 Constants c{};if(!BuildConstants(ctx,settings,maps,c)){s->error="shadow projection/depth/constants unsupported";return false;}
 for(int i=0;i<5;++i)if(c.maps[i][2]>.5f&&(!maps.views[i]||(maps.layouts[i]!=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL&&maps.layouts[i]!=VK_IMAGE_LAYOUT_GENERAL))){s->error="shadow map not sampleable";return false;}
 std::memcpy(slot.buffer.mapped,&c,sizeof c);s->api->FlushBuffer(slot.uniform);
 const bool optimized=settings.contactOpt!=0&&s->pipeline[3];
 const bool proof=(settings.contactOpt==2||settings.contactOpt==3||(settings.contactOpt==5&&s->pipeline[5]))&&optimized&&s->pipeline[4]&&settings.debug==0&&slot.proofHandle; // Claude LAT1: 4 is no proof
 // Claude GPU1: this slot's last frame has completed (checked above), so its count of differing pixels is final.
 if(slot.proofPending){ProofResult(static_cast<const uint32_t*>(slot.proofBuffer.mapped),slot.proofPixels,settings.contact,slot.proofMode);slot.proofPending=false;}
 if(proof){std::memset(slot.proofBuffer.mapped,0,16);s->api->FlushBuffer(slot.proofHandle);}
 s_passTimer.Begin(ctx.cmd,ctx.frameSlot); // HD (Claude) lot D1
 s->Barrier(ctx.cmd,slot);
 VkMemoryBarrier start{VK_STRUCTURE_TYPE_MEMORY_BARRIER};start.srcAccessMask=VK_ACCESS_MEMORY_WRITE_BIT;start.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_SHADER_WRITE_BIT|VK_ACCESS_UNIFORM_READ_BIT;
 s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_ALL_COMMANDS_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,1,&start,0,nullptr,0,nullptr);
 // Claude SOLMM1 (hdSunTiles): each band's tiles, then its dilated tiles, before the contact pass (counted in its time). k covers
 // the farthest tap the PCSS of this band reads (max(search, texel) + 3 texels, as the shader's R) plus a tile for the rounding.
 // Claude OMBRE1: a band's tiles are of 4, 8 or 16 texels (the finest with at most 8 tiles to cover R and 512 tiles a side): the
 // region read is then close to the taps' own, and far more PCSS calls end there. The tile rounding is exact: the 3 texels of R
 // hold at most 2 texels of taps (the gather and the texel centre), so no tile is added for it.
 uint32_t tileMask=0,ts[5]{};
 if(settings.tiles&&optimized&&s->tilePipeline&&s->dummyHandle&&settings.debug==0){
  std::array<VkImageMemoryBarrier,11> first{};uint32_t firstCount=0;
  auto fresh=[&](VkImage image){auto&b=first[firstCount++];b.sType=VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;b.oldLayout=VK_IMAGE_LAYOUT_UNDEFINED;b.newLayout=VK_IMAGE_LAYOUT_GENERAL;b.image=image;
   b.srcQueueFamilyIndex=b.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;b.subresourceRange={VK_IMAGE_ASPECT_COLOR_BIT,0,1,0,1};b.srcAccessMask=0;b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_SHADER_WRITE_BIT;};
  if(!s->dummyReady){fresh(s->dummy.image);s->dummyReady=true;}
  int k[5]{};uint32_t tw[5]{};
  for(int i=0;i<5;++i){
   if(!(c.maps[i][2]>.5f)||!maps.views[i]||!(c.maps[i][1]>0)||!(c.maps[i][0]>0))continue;
   const double texel=c.maps[i][1],size=std::floor(1.0/texel+.5),yard=1.0/(2.0*c.maps[i][0]),search=std::min(double(c.settings[2])*yard,.06);
   const double R=std::max(search,texel)+3*texel;uint32_t shift=4;if(settings.light)for(shift=2;shift<4&&(R*size>double(8u<<shift)||size>double(512u<<shift));)++shift;
   const double side=double(1u<<shift),kk=std::ceil(R*size/side+(settings.light?.05:1.0));
   if(!(size>=16&&size<=16384)||!(kk>=1&&kk<=48))continue;
   const uint32_t n=uint32_t((size+side-1)/side);auto& t=slot.tiles[i];
   if(t.w!=n||t.h!=n||!t.handles[0]||!t.handles[1]){
    for(auto& h:t.handles)if(h){s->api->RetireImage(h,slot.serial);h=nullptr;}t.ready=false;t.w=t.h=0;
    WXL_VkImageDesc td{VK_FORMAT_R32G32_SFLOAT,n,n,1,VK_IMAGE_USAGE_SAMPLED_BIT|VK_IMAGE_USAGE_STORAGE_BIT,VK_IMAGE_ASPECT_COLOR_BIT};
    bool made=true;for(int j=0;j<2;++j){t.handles[j]=s->api->CreateImage(&td,&t.images[j]);if(!t.handles[j])made=false;else ++s->allocations;}
    if(!made){for(auto& h:t.handles)if(h){s->api->RetireImage(h,slot.serial);h=nullptr;}continue;}
    t.w=t.h=n;}
   if(!t.ready){fresh(t.images[0].image);fresh(t.images[1].image);t.ready=true;}
   VkDescriptorImageInfo ti[6]={{s->sampler,maps.views[i],maps.layouts[i]},{VK_NULL_HANDLE,t.images[0].view,VK_IMAGE_LAYOUT_GENERAL},
                                {s->sampler,t.images[0].view,VK_IMAGE_LAYOUT_GENERAL},{VK_NULL_HANDLE,t.images[1].view,VK_IMAGE_LAYOUT_GENERAL},
                                {s->sampler,t.images[1].view,VK_IMAGE_LAYOUT_GENERAL},{VK_NULL_HANDLE,t.images[0].view,VK_IMAGE_LAYOUT_GENERAL}};
   VkWriteDescriptorSet tw4[6]{};
   for(int j=0;j<6;++j){auto&w=tw4[j];w.sType=VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;w.dstSet=t.sets[j/2];w.dstBinding=uint32_t(j&1);w.descriptorCount=1;
    w.descriptorType=(j&1)?VK_DESCRIPTOR_TYPE_STORAGE_IMAGE:VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;w.pImageInfo=&ti[j];}
   s->UpdateDescriptorSets(s->device.device,6,tw4,0,nullptr);
   k[i]=int(kk);tw[i]=n;ts[i]=shift;tileMask|=1u<<i;}
  if(firstCount)s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,0,nullptr,0,nullptr,firstCount,first.data());
  if(tileMask){
   VkMemoryBarrier mid{VK_STRUCTURE_TYPE_MEMORY_BARRIER};mid.srcAccessMask=VK_ACCESS_SHADER_WRITE_BIT;mid.dstAccessMask=VK_ACCESS_SHADER_READ_BIT;
   s->CmdBindPipeline(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->tilePipeline);
   for(int pass=0;pass<3;++pass){ // reduce, then the dilation across and down (min and max over a square are separable: same tiles)
    for(int i=0;i<5;++i){if(!(tileMask>>i&1u))continue;const int32_t push[4]={pass,k[i],int32_t(ts[i]),0};
     s->CmdBindDescriptorSets(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->tilePipelineLayout,0,1,&slot.tiles[i].sets[pass],0,nullptr);
     s->CmdPushConstants(ctx.cmd,s->tilePipelineLayout,VK_SHADER_STAGE_COMPUTE_BIT,0,sizeof push,push);
     if(pass==0)s->CmdDispatch(ctx.cmd,(tw[i]+7)/8,(tw[i]+7)/8,1);else if(pass==1)s->CmdDispatch(ctx.cmd,(tw[i]+63)/64,tw[i],1);else s->CmdDispatch(ctx.cmd,tw[i],(tw[i]+63)/64,1);} // Claude OMBRE1: 8 x 8 tiles per group, then runs of 64 tiles along the axis
    s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,1,&mid,0,nullptr,0,nullptr);}
  }
 }
 uint32_t tileShifts=0;for(int i=0;i<5;++i)if(tileMask>>i&1u)tileShifts|=ts[i]<<(17+3*i); // Claude OMBRE1
 const bool fused=settings.light&&!proof&&settings.debug==0&&s->pipeline[6]&&s->pipeline[7]; // Claude OMBRE1
 for(uint32_t pass=0;pass<4;++pass){
  if(proof&&pass==2)continue;
  if(fused&&pass==2){s_passTimer.Stamp(ctx.cmd,ctx.frameSlot);continue;} // Claude OMBRE1: inside the apply pass
  uint32_t src=pass==2||(fused&&pass==3)?1:0,dst=pass==1?1:0;
  VkDescriptorImageInfo images[14]{};
  images[0]={s->sampler,ctx.depthView,ctx.depthLayout};images[1]={s->sampler,gb.normalView,gb.layout};
  images[2]={s->sampler,gb.shadowLowView,gb.layout};images[3]={s->sampler,gb.shadowHighView,gb.layout};
  for(int i=0;i<5;++i)images[4+i]=c.maps[i][2]>.5f?VkDescriptorImageInfo{s->sampler,maps.views[i],maps.layouts[i]}:VkDescriptorImageInfo{s->sampler,ctx.depthView,ctx.depthLayout};
  images[9]={s->sampler,slot.images[src].view,VK_IMAGE_LAYOUT_GENERAL};images[10]={VK_NULL_HANDLE,slot.images[dst].view,VK_IMAGE_LAYOUT_GENERAL};images[11]={VK_NULL_HANDLE,ctx.colorView,ctx.colorLayout};
  images[13]=proof&&pass==3?VkDescriptorImageInfo{s->sampler,slot.images[1].view,VK_IMAGE_LAYOUT_GENERAL}
    :VkDescriptorImageInfo{s->sampler,gb.albedoView,gb.layout}; // HD (Claude) RM6
  VkDescriptorBufferInfo buffer{slot.buffer.buffer,0,sizeof c};VkWriteDescriptorSet writes[20]{};
  VkDescriptorBufferInfo proofInfo{slot.proofBuffer.buffer,0,16}; // Claude GPU1
  writes[14].sType=VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;writes[14].dstSet=slot.sets[pass];writes[14].dstBinding=14;writes[14].descriptorCount=1;
  writes[14].descriptorType=VK_DESCRIPTOR_TYPE_STORAGE_BUFFER;writes[14].pBufferInfo=&proofInfo;
  for(uint32_t i=0;i<14;++i){auto&w=writes[i];w.sType=VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;w.dstSet=slot.sets[pass];w.dstBinding=i;w.descriptorCount=1;
   w.descriptorType=(i<10||i==13)?VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER:(i<12?VK_DESCRIPTOR_TYPE_STORAGE_IMAGE:VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER);if(i!=12)w.pImageInfo=&images[i];else w.pBufferInfo=&buffer;}
  s->UpdateDescriptorSets(s->device.device,proof?15:14,writes,0,nullptr);
  VkDescriptorImageInfo tileInfo[5]; // Claude SOLMM1: bindings 15..19, the dilated tiles (or the never-read 1 x 1 image)
  if(s->dummyHandle){
   for(uint32_t i=0;i<5;++i){tileInfo[i]=(tileMask>>i&1u)?VkDescriptorImageInfo{s->sampler,slot.tiles[i].images[0].view,VK_IMAGE_LAYOUT_GENERAL}:VkDescriptorImageInfo{s->sampler,s->dummy.view,VK_IMAGE_LAYOUT_GENERAL};
    auto&w=writes[15+i];w.sType=VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;w.dstSet=slot.sets[pass];w.dstBinding=15+i;w.descriptorCount=1;w.descriptorType=VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;w.pImageInfo=&tileInfo[i];}
   s->UpdateDescriptorSets(s->device.device,5,&writes[15],0,nullptr);}
  uint32_t flags[4]={settings.debug,pass==2?1u:0u,std::min(settings.quality,1u),settings.contact?1u:0u};
  if(pass==0&&tileMask)flags[1]=(tileMask<<8)|tileShifts|(settings.tiles==3?65536u:0u); // Claude SOLMM1: the bands with tiles; 3 = the control
  uint32_t pipeline=pass==0?(optimized&&settings.contactOpt!=3?3:0):(pass==3?2:1);
  if(pass==0&&settings.contactOpt==4&&s->pipeline[5])pipeline=5; // Claude LAT1: GPU1 without LAT1 (A/B bench)
  if(proof&&pass==1)pipeline=settings.contactOpt==5?5:0; // Claude LAT1: 5 = the reference is GPU1 before LAT1
  if(proof&&pass==3)pipeline=4;
  if(fused&&pass==1)pipeline=6;if(fused&&pass==3)pipeline=7; // Claude OMBRE1
  s->CmdBindPipeline(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->pipeline[pipeline]);s->CmdBindDescriptorSets(ctx.cmd,VK_PIPELINE_BIND_POINT_COMPUTE,s->pipelineLayout,0,1,&slot.sets[pass],0,nullptr);
  s->CmdPushConstants(ctx.cmd,s->pipelineLayout,VK_SHADER_STAGE_COMPUTE_BIT,0,sizeof flags,flags);s->CmdDispatch(ctx.cmd,(s->width+7)/8,(s->height+7)/8,1);s->Between(ctx.cmd);if(!proof)s_passTimer.Stamp(ctx.cmd,ctx.frameSlot); // HD (Claude) lot D1
 }
 if(proof){ // Claude GPU1: the count reaches the CPU once this frame has completed (read at this slot's next use)
  VkMemoryBarrier toHost{VK_STRUCTURE_TYPE_MEMORY_BARRIER};toHost.srcAccessMask=VK_ACCESS_SHADER_WRITE_BIT;toHost.dstAccessMask=VK_ACCESS_HOST_READ_BIT;
  s->CmdPipelineBarrier(ctx.cmd,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,VK_PIPELINE_STAGE_HOST_BIT,0,1,&toHost,0,nullptr,0,nullptr);
  slot.proofPending=true;slot.proofPixels=uint64_t(s->width)*s->height;slot.proofMode=settings.contactOpt;
 }
 slot.initialized=true;slot.serial=s->lastSerial=ctx.serial;
 s->error=(settings.contactOpt==2||settings.contactOpt==3||settings.contactOpt==5)&&!proof?"Comparaison PCSS/contact indisponible"
     :(settings.contactOpt==1&&!optimized?"Optimisation PCSS/contact indisponible":"");
 return true;
}
bool Effect::Shutdown(uint64_t completed) {
    auto* s=state_;if(!s) return true;
    if(completed<s->lastSerial) {s->error="shutdown pending completed serial";return false;}
    for(auto& slot:s->slots) {for(auto& t:slot.tiles)for(auto handle:t.handles)if(handle)s->api->RetireImage(handle,slot.serial); // Claude SOLMM1
        for(auto handle:slot.handles)if(handle)s->api->RetireImage(handle,slot.serial);if(slot.uniform)s->api->RetireBuffer(slot.uniform,slot.serial);if(slot.proofHandle)s->api->RetireBuffer(slot.proofHandle,slot.serial);}
    if(s->pool) s->DestroyDescriptorPool(s->device.device,s->pool,nullptr);
    if(s->dummyHandle) s->api->RetireImage(s->dummyHandle,s->lastSerial); // Claude SOLMM1
    if(s->tilePipeline) s->DestroyPipeline(s->device.device,s->tilePipeline,nullptr);
    if(s->tilePool) s->DestroyDescriptorPool(s->device.device,s->tilePool,nullptr);
    if(s->tilePipelineLayout) s->DestroyPipelineLayout(s->device.device,s->tilePipelineLayout,nullptr);
    if(s->tileSetLayout) s->DestroyDescriptorSetLayout(s->device.device,s->tileSetLayout,nullptr);
    if(s->sampler) s->DestroySampler(s->device.device,s->sampler,nullptr);
    for(auto pipeline:s->pipeline) if(pipeline) s->DestroyPipeline(s->device.device,pipeline,nullptr);
    if(s->pipelineLayout) s->DestroyPipelineLayout(s->device.device,s->pipelineLayout,nullptr);
    if(s->setLayout) s->DestroyDescriptorSetLayout(s->device.device,s->setLayout,nullptr);
    s_passTimer.Shutdown(); // HD (Claude) lot D1
    delete s;state_=nullptr;return true;
}
uint64_t Effect::LastUsed() const {return state_?state_->lastSerial:0;}
uint64_t Effect::ImageAllocations() const {return state_?state_->allocations:0;}
const char* Effect::Error() const {return state_?state_->error:"not initialized";}


#ifndef HD_SHADOWS_STANDALONE
namespace {
Effect effect;Settings config;NativeMaps nativeMaps;
const WXL_VkRenderApi* renderApi=nullptr;void* registration=nullptr;bool requested=false,active=false,receiverReady=false;
EShadowMode oldMode=SHADOW_LOWEST;bool oldPcf=false,pcfReload=false;
CVar *enabled=nullptr,*contact=nullptr,*quality=nullptr,*debug=nullptr,*strength=nullptr,*angle=nullptr,*penumbra=nullptr,*bias=nullptr,*length=nullptr,*thickness=nullptr,*contactStrength=nullptr,*tagTolerance=nullptr,*grassShade=nullptr,*info=nullptr,*farFix=nullptr,*farBias=nullptr,*penumbraMin=nullptr;
CVar* telemetry=nullptr; // Expensive text/file diagnostics only when explicitly requested.
CVar* contactOpt=nullptr;CVar* tilesVar=nullptr; // Claude SOLMM1
CVar* lightVar=nullptr; // Claude OMBRE1
char lastInfo[256]{};
int diagFrames=0,diagFail=0,diagGbFail=0,diagUncaptured=0;char diagErr[96]{}; // HD diagnostic: frames since the last hdSunDiag line
void Info(const char*s){if(!info||!s)return;char next[sizeof lastInfo]{};std::snprintf(next,sizeof next,"%s",s);if(std::strcmp(next,lastInfo)){std::memcpy(lastInfo,next,sizeof lastInfo);info->Set(lastInfo,true,false,false,false);}}
bool WantDiagnostics(){return config.debug!=0||(telemetry&&telemetry->m_intValue!=0);}
CVar* Var(const char*n,const char*h,const char*v,uint32_t flags=1){if(auto*c=CVar::LookupRegistered(n))return c;return CVar::Register(n,h,flags,v,nullptr,CATEGORY_GRAPHICS,false,nullptr,false);}
int __cdecl Wanted(void*){return config.enabled?1:0;}void __cdecl Stage(void*,const WXL_VkStageContext*c){if(c)Record(*c);}
void Mode(bool on){
 if(on==active)return;
 if(on){oldMode=CShadowCache::s_shadowMode;oldPcf=CShaderEffect::s_usePcfFiltering;CShaderEffect::s_usePcfFiltering=0;CShadowCache::SetShadowMode(std::max(oldMode,SHADOW_MEDIUM_HIGH));CShadowCache::NotifyTexturesRecreate();}
 else {CShaderEffect::s_usePcfFiltering=oldPcf;CShadowCache::SetShadowMode(oldMode);CShadowCache::NotifyTexturesRecreate();}
 // HD: like the hwPCF callback, the terrain must swap Terrain2/3 <-> Terrain2/3_pcf with the flag, or it keeps
 // sampling the R32F maps through its PCF shaders (shadow tint changing with the camera). Done at a safe point.
 pcfReload=true;
 active=on;Bridge::enabled=on;for(auto&id:Bridge::ids)id=0;
}
}
bool TakePcfReload(){bool reload=pcfReload;pcfReload=false;return reload;}
bool FullCasters(){return active && g_theGxDevicePtr && g_theGxDevicePtr->m_api==GxApi_Vulkan;}
void CaptureNativeMaps(){
 if(!FullCasters())return;nativeMaps={};nativeMaps.serial=wxlvk::native::present::Serial();for(auto&id:Bridge::ids)id=0;
 if(CShadowCache::s_recreateTextures||CShaderEffect::s_usePcfFiltering)return;
 CTexture* textures[5]={CShadowCache::s_extDynShadow.m_textures[0],nullptr,nullptr,nullptr,CShadowCache::s_intDynShadow};
 for(int i=0;i<3;++i){auto&b=CShadowCache::s_extShadowBands[i];textures[i+1]=b.m_textures[b.m_current];}
 std::memcpy(nativeMaps.rows,&CShadowCache::s_shadowMatrices[0].x,12*4*sizeof(float));
 std::memcpy(nativeMaps.rows[12],&CShadowCache::s_shadowMatrices[0].x,3*4*sizeof(float));
 std::memcpy(Bridge::diagRows,nativeMaps.rows,sizeof Bridge::diagRows); // HD diagnostic
 for(int i=0;i<3;++i)nativeMaps.towardLight[i]=-(&CShadowCache::s_sunDirViewSpace.x)[i];
 for(int i=0;i<5;++i){if(!textures[i])continue;const wxlvk::vk::texture::Image* image=nullptr;
  auto* gx=TextureGetGxTex(textures[i],1,nullptr);if(!gx||!wxlvk::native::impl::ResolveTexture(gx,image)||!image||image->format!=VK_FORMAT_R32_SFLOAT)continue;
  // HD: no layout test here. A map just rendered this frame may not be SHADER_READ_ONLY yet, but the world shaders
  // still sample it: its id must be in the Bridge mask, or its native shadow leaks through the endpoints.
  if(image->layout!=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL)nativeMaps.late|=1u<<i;
  Bridge::ids[i]=image->id;nativeMaps.views[i]=image->view;nativeMaps.layouts[i]=image->layout;nativeMaps.images[i]=image;nativeMaps.captured|=1u<<i;
  nativeMaps.meta[i][0]=i==0||i==4?CShadowCache::s_extDynShadow.m_radius:CShadowCache::s_extShadowBands[i-1].m_radius;
  nativeMaps.meta[i][1]=1.0f/image->extent.width;nativeMaps.meta[i][2]=1;nativeMaps.meta[i][3]=4000;
 }
 if(g_hdShadowTrace){g_hdShadowTrace("sh.captured",float(nativeMaps.captured));g_hdShadowTrace("sh.late",float(nativeMaps.late)); // Claude LT2: which image each map is, its layout, its rows
  for(int i=0;i<5;++i){char k[32];auto*im=static_cast<const wxlvk::vk::texture::Image*>(nativeMaps.images[i]);std::snprintf(k,sizeof k,"sh.m%d.id",i);g_hdShadowTrace(k,im?float(im->id):-1.f);
   std::snprintf(k,sizeof k,"sh.m%d.layout",i);g_hdShadowTrace(k,im?float(im->layout):-1.f);std::snprintf(k,sizeof k,"sh.m%d.radius",i);g_hdShadowTrace(k,nativeMaps.meta[i][0]);}
  for(int r=0;r<15;++r)for(int c=0;c<4;++c){char k[24];std::snprintf(k,sizeof k,"sh.row%d.%c",r,"xyzw"[c]);g_hdShadowTrace(k,nativeMaps.rows[r][c]);}}
}
bool Init(){
 if(registration)return true;
 telemetry=Var("hdSunTelemetry","HD: sun diagnostic text/file, 0 quiet / 1 detailed; hdSunDebug also enables it","0",0);
 {static bool hdDef1Once=false;if(!hdDef1Once){hdDef1Once=true;if(telemetry&&telemetry->m_intValue!=0)telemetry->InternalSet("0",true,false,false,false);}} // Claude DEF1: diagnostic journal off at every start (a test never leaves it on)
 enabled=Var("hdSunShadows","HD Vulkan: PCSS sun + contact shadows","0");contact=Var("hdSunContact","HD Vulkan: contact shadow supplement","1");quality=Var("hdSunQuality","HD Vulkan: 0 8/16 taps, 1 12/24 taps","1");
 debug=Var("hdSunDebug","0 normal, 1 sun, 2 contact, 3 combined, 4 coverage, 5 shaded colour, 6 sunlit colour, 7 engine colour","0",0);strength=Var("hdSunStrength","HD Vulkan shadow replacement strength 0..1","1");
 angle=Var("hdSunAngle","HD Vulkan sun angular radius (radians): penumbra growth with distance (SH3: 0.00465..0.1)","0.04");penumbra=Var("hdSunPenumbra","HD Vulkan maximum penumbra radius (yards, SH3: 0.5..6)","3");
 penumbraMin=Var("hdSunPenumbraMin","HD Vulkan (SH3): narrowest penumbra radius in yards, soft start of a hill's shadow (0..1)","0.3");bias=Var("hdSunNormalBias","HD Vulkan receiver normal bias (yards)","0.015");
 length=Var("hdSunContactLength","HD Vulkan contact ray length (yards)","2.5");thickness=Var("hdSunContactThickness","HD Vulkan contact thickness (yards)","0.08");contactStrength=Var("hdSunContactStrength","HD Vulkan contact shadow darkness 0..1 (thin grass blades lets light through: lower = lighter)","1");tagTolerance=Var("hdSunTagTolerance","HD Vulkan: how far (log2 depth units) a G-buffer record may be from the pixel and still be its own; 1 = old loose test (grass took the terrain's shading)","0.03");grassShade=Var("hdSunGrassShade","HD Vulkan: grass brightness in the sun's shadow 0..1 (1 = grass left to its own shader)","1");info=Var("hdSunInfo","HD Vulkan shadow status","off",0);
 farBias=Var("hdSunFarBias","HD Vulkan (O1): far shadow self-shadowing margin in texels, 0 = keep every small shadow (waves may return), 0.71 = no waves at all","0.25");
 farFix=Var("hdSunFarFix","HD Vulkan (O1): 1 far shadows without self-shadowing + FSR-independent blur / 0 as before (A/B)","1");
 renderApi=wxl::ScriptMgr::GetInterface<const WXL_VkRenderApi>(WXL_VK_RENDER_API_NAME,WXL_VK_RENDER_API_VERSION);
 if(!renderApi||renderApi->structSize<offsetof(WXL_VkRenderApi,GetGBuffer)+sizeof(renderApi->GetGBuffer)||!renderApi->RegisterStage||!renderApi->RequestGBuffer||!renderApi->GetGBuffer||!effect.Init(renderApi)){Info("shadow Init failed");return false;}
 WXL_VkStageDesc desc{};desc.structSize=sizeof desc;desc.point=WXL_VK_POINT_AFTER_OPAQUE_WORLD;desc.order=50;desc.flags=WXL_VK_STAGE_NEEDS_DEPTH|WXL_VK_STAGE_WRITES_COLOR;desc.Wanted=Wanted;desc.Run=Stage;
 registration=renderApi->RegisterStage(&desc,"HD.SunShadows");if(!registration){effect.Shutdown(0);return false;}
 std::ifstream manifest("Vulkan/shaders/translated/manifest.txt");std::string first;std::getline(manifest,first);
 receiverReady=first=="# HD-SUN-RECEIVERS 4"||first=="# HD-SUN-RECEIVERS 4\r";
 Info(receiverReady?"off":"receiver shaders missing: run generation + restart");return true;
}
void Resize(){
 if(!registration)return;
 if(!contactOpt)contactOpt=Var("hdSunContactOpt","HD (GPU1) ombres de contact : 1 = le rayon saute les pixels deja a l ombre de la carte (meme image), 0 = original, 2 = preuve (vert = egal, magenta = different, Logs\\preuve-contact.txt), 3 = temoin de la preuve (original contre original), 4 = optimise sans LAT1 (banc A/B), 5 = preuve LAT1 contre l optimise d avant LAT1","1",0);
 if(!tilesVar)tilesVar=Var("hdSunTiles","HD (Claude SOLMM1) ombres du soleil : 1 = les pixels dont toute la zone de la carte est sans bloqueur (ou toute a l ombre) ne lisent pas les 12 + 24 echantillons de la penombre (meme image : preuve avec hdSunContactOpt 2), 0 = avant, 3 = temoin (zone trop petite : la preuve doit trouver des differences)","1",0);
 if(!lightVar)lightVar=Var("hdOmbre1","HD (Claude OMBRE1) ombres douces du soleil : 1 = flous fusionnes et tuiles fines (image identique), 0 = avant","1",0);
 config.light=!lightVar||lightVar->m_intValue!=0; // Claude OMBRE1
 config.tiles=tilesVar?static_cast<uint32_t>(std::clamp(tilesVar->m_intValue,0,3)):0;
 config.contactOpt=contactOpt?static_cast<uint32_t>(std::clamp(contactOpt->m_intValue,0,5)):0; // Claude LAT1: 4 = GPU1 without LAT1, 5 = proof LAT1 vs GPU1
 config.enabled=enabled&&enabled->m_intValue!=0&&receiverReady;config.contact=contact&&contact->m_intValue!=0;config.quality=quality?quality->m_intValue:1;config.debug=debug?std::clamp(debug->m_intValue,0,25):0; // HD (Claude) RM7 diag: 8..25
 config.strength=strength?strength->m_floatValue:1;config.sunAngle=angle?angle->m_floatValue:.04f;config.maxPenumbra=penumbra?penumbra->m_floatValue:3.0f;config.normalBias=bias?bias->m_floatValue:.015f;
 config.contactLength=length?length->m_floatValue:1.5f;config.contactThickness=thickness?thickness->m_floatValue:.08f;config.contactStrength=contactStrength?contactStrength->m_floatValue:1.0f;config.tagTolerance=tagTolerance?tagTolerance->m_floatValue:.03f;config.grassShade=grassShade?grassShade->m_floatValue:1.0f;
 config.farFix=!farFix||farFix->m_intValue!=0;config.farBias=farBias?farBias->m_floatValue:.25f;config.penumbraMin=penumbraMin?penumbraMin->m_floatValue:.3f; // HD (Claude) SH3
 Mode(config.enabled);
 config.pixelScale=1.0f;
#ifdef WOWDECOMP_FSR
 {float sx=1,sy=1;if(wxlvk::native::present::WorldTargetScale(sx,sy))config.pixelScale=std::min(sx,sy);} // HD (Claude) O1: FSR render/display
#endif
 if(config.enabled!=requested){renderApi->RequestGBuffer(config.enabled?1:0);requested=config.enabled;}
 if(!config.enabled){Info(enabled&&enabled->m_intValue&&!receiverReady?"receiver shaders missing: run generation + restart":"off");return;}VkFormat format{};VkExtent2D extent{};
 if(!wxlvk::native::present::BackBufferInfo(format,extent)||!effect.Resize(extent.width,extent.height))Info("shadow Resize failed");
}
void Record(const WXL_VkStageContext&ctx){{static const char* const names[4]={"contact + soleil (PCSS)","flou horizontal","flou vertical","application"};CVar* d1=CVar::LookupRegistered("hdGpuPasses");s_passTimer.Poll(d1&&d1->m_intValue!=0,"Logs\\soleil-gpu.txt","Soleil",names,4);} /* HD (Claude) lot D1 */WXL_VkGBuffer gb{};gb.structSize=sizeof gb;
 // HD: layouts as they are now, after the opaque world sampled the maps. A map still not readable is left out of PCSS only.
 for(int i=0;i<5;++i)if(nativeMaps.images[i]){auto* image=static_cast<const wxlvk::vk::texture::Image*>(nativeMaps.images[i]);nativeMaps.layouts[i]=image->layout;
  if(image->layout!=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL&&image->layout!=VK_IMAGE_LAYOUT_GENERAL)nativeMaps.meta[i][2]=0;}
 ++diagFrames;if(!nativeMaps.captured)++diagUncaptured;
 if(g_hdShadowTrace)for(int i=0;i<5;++i){char k[32];std::snprintf(k,sizeof k,"sh.m%d.recLayout",i);g_hdShadowTrace(k,float(nativeMaps.layouts[i]));std::snprintf(k,sizeof k,"sh.m%d.usable",i);g_hdShadowTrace(k,nativeMaps.meta[i][2]);} // Claude LT2
 if(!renderApi->GetGBuffer(&gb)){++diagGbFail;Info("shadow G-buffer unavailable (request/MRT/format)");return;}
 if(!effect.Record(ctx,config,nativeMaps,gb)){++diagFail;std::snprintf(diagErr,sizeof diagErr,"%s",effect.Error());Info(effect.Error());return;}
 // The rendering above is unchanged. Only optional CPU/file diagnostics are skipped.
 Bridge::diagWanted=WantDiagnostics(); // Claude 2026-11-04 lot T1: terrain diagnostics gathered only when they are shown
 if(!WantDiagnostics()){
  Info(*effect.Error()?effect.Error():"Vulkan sun shadows: PCSS + contact");
  Bridge::DiagReset();HDShadowDiag::cullOff=HDShadowDiag::cullOn=HDShadowDiag::inWmo=HDShadowDiag::calls=0;
  for(auto&r:HDShadowDiag::tq)for(int&k:r)k=0;
  diagFrames=diagFail=diagGbFail=diagUncaptured=0;diagErr[0]=0;
  HDShadowDiag::glareMin=1e30f;HDShadowDiag::glareMax=HDShadowDiag::glareUsed=0.0f;
  return;
 }
 char text[128];std::snprintf(text,sizeof text,"Vulkan sun shadows: %s, maps %u%u%u%u%u late %u%u%u%u%u",config.debug?"debug":"PCSS + contact",
  nativeMaps.captured&1,nativeMaps.captured>>1&1,nativeMaps.captured>>2&1,nativeMaps.captured>>3&1,nativeMaps.captured>>4&1,
  nativeMaps.late&1,nativeMaps.late>>1&1,nativeMaps.late>>2&1,nativeMaps.late>>3&1,nativeMaps.late>>4&1);
 // HD diagnostic: the terrain draws since the last run (slot bits 5..8 as 4 digits: s5 s6 s7 s8)
 namespace B=Bridge;auto bits=[](uint32_t m,char* o){for(int k=0;k<4;++k)o[k]=(m>>(5+k)&1)?'1':'0';o[4]=0;};
 char bOr[5],bAnd[5],bBound[5],bUnk[5];bits(B::diagOr,bOr);bits(B::diagDraws?B::diagAnd:0,bAnd);bits(B::diagBound,bBound);bits(B::diagUnknown,bUnk);
 const C3Vector& sun=CShadowCache::s_sunDir;float elev=-sun.z;elev=elev>1?1:elev<-1?-1:elev;elev=std::asin(elev)*57.2957795f;
 auto& b0=CShadowCache::s_extShadowBands[0];auto& b1=CShadowCache::s_extShadowBands[1];auto& b2=CShadowCache::s_extShadowBands[2];
 char full[1200];std::snprintf(full,sizeof full,"%s | mode %d, cull 0:%d 1:%d, wmo %d | rendus %d: %d/%d %d/%d %d/%d %d/%d %d/%d | arbres b0 %d n%d f%d t%d ok%d, b1 %d n%d f%d t%d ok%d, b2 %d n%d f%d t%d ok%d | soleil %.1f deg (%.3f %.3f %.3f) | sol %u draws, nan %d, plus proche dyn %.2f b0 %.2f b1 %.2f b2 %.2f | z dyn %.3f..%.3f b0 %.3f..%.3f b1 %.3f..%.3f b2 %.3f..%.3f | c49z %.2f..%.2f c50x %.2f..%.2f | camera %.0f %.0f %.0f | centres b0 %.0f %.0f %.0f r%.0f, b1 %.0f %.0f %.0f r%.0f, b2 %.0f %.0f %.0f r%.0f | ecart %.3g, gbuffer %u/%u/%u | eblouissement %.2f..%.2f, applique %.2f",
  text,(int)CShadowCache::s_shadowMode,HDShadowDiag::cullOff,HDShadowDiag::cullOn,HDShadowDiag::inWmo,HDShadowDiag::calls,HDShadowDiag::groups[0],HDShadowDiag::m2[0],HDShadowDiag::groups[1],HDShadowDiag::m2[1],HDShadowDiag::groups[2],HDShadowDiag::m2[2],HDShadowDiag::groups[3],HDShadowDiag::m2[3],HDShadowDiag::groups[4],HDShadowDiag::m2[4],HDShadowDiag::tq[0][0],HDShadowDiag::tq[0][1],HDShadowDiag::tq[0][2],HDShadowDiag::tq[0][3],HDShadowDiag::tq[0][5],HDShadowDiag::tq[1][0],HDShadowDiag::tq[1][1],HDShadowDiag::tq[1][2],HDShadowDiag::tq[1][3],HDShadowDiag::tq[1][5],HDShadowDiag::tq[2][0],HDShadowDiag::tq[2][1],HDShadowDiag::tq[2][2],HDShadowDiag::tq[2][3],HDShadowDiag::tq[2][5],elev,sun.x,sun.y,sun.z,B::diagDraws,B::diagNan,B::diagNear[0],B::diagNear[1],B::diagNear[2],B::diagNear[3],B::diagZ[0][0],B::diagZ[0][1],B::diagZ[1][0],B::diagZ[1][1],B::diagZ[2][0],B::diagZ[2][1],B::diagZ[3][0],B::diagZ[3][1],B::diagC49[0],B::diagC49[1],B::diagC50[0],B::diagC50[1],B::diagCam[0],B::diagCam[1],B::diagCam[2],
  b0.m_lastPos.x,b0.m_lastPos.y,b0.m_lastPos.z,b0.m_radius,b1.m_lastPos.x,b1.m_lastPos.y,b1.m_lastPos.z,b1.m_radius,b2.m_lastPos.x,b2.m_lastPos.y,b2.m_lastPos.z,b2.m_radius,
  B::diagMaxDiff,B::diagRecGbuf,B::diagRecNull,B::diagRecPlain,HDShadowDiag::glareMin<1e29f?HDShadowDiag::glareMin:0.0f,HDShadowDiag::glareMax,HDShadowDiag::glareUsed);
 // HD diagnostic: the same line into Logs\hdSunDiag.txt twice a second (new file each session, 4000 lines at most)
 {static std::chrono::steady_clock::time_point start=std::chrono::steady_clock::now(),last{};static int lines=0;auto now=std::chrono::steady_clock::now();
  if(lines<4000&&(lines==0||now-last>=std::chrono::milliseconds(500))){last=now;
   if(FILE*f=std::fopen("Logs\\hdSunDiag.txt",lines?"a":"w")){std::fprintf(f,"%.1f s  [images %d, echecs %d (%s), gbuffer %d, sans cartes %d] %s\n",std::chrono::duration<double>(now-start).count(),diagFrames,diagFail,diagErr,diagGbFail,diagUncaptured,full);std::fclose(f);++lines;}diagFrames=diagFail=diagGbFail=diagUncaptured=0;diagErr[0]=0;HDShadowDiag::glareMin=1e30f;HDShadowDiag::glareMax=HDShadowDiag::glareUsed=0.0f;}}
 B::DiagReset();HDShadowDiag::cullOff=HDShadowDiag::cullOn=HDShadowDiag::inWmo=HDShadowDiag::calls=0;for(auto&r:HDShadowDiag::tq)for(int&k:r)k=0;Info(full);}
void SetSubpixelOffset(float x,float y){config.extraJitterX=x;config.extraJitterY=y;}
bool Shutdown(){
 if(!renderApi&&!registration)return true;if(registration){renderApi->UnregisterStage(registration);registration=nullptr;}if(requested){renderApi->RequestGBuffer(0);requested=false;}Mode(false);
 if(effect.LastUsed()>wxlvk::native::present::Completed()){if(wxlvk::native::present::FrameOpen()&&!wxlvk::native::present::FlushAndWait())return false;if(!wxlvk::native::present::WaitSerial(effect.LastUsed()))return false;}
 if(!effect.Shutdown(wxlvk::native::present::Completed()))return false;renderApi=nullptr;config.enabled=false;nativeMaps={};Info("off");return true;
}
#endif
}
