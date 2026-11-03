#pragma once
#include "CataTerrain4.h"
#include "CataGrass.h"
#include "wxl/VkRenderApi.h"
namespace HD::CataOptim {
enum class Kind:uint32_t {Terrain4,GrassLossless,GrassPacked};
struct Handle {uint32_t index=~0u,generation=0;explicit operator bool()const{return index!=~0u;}};
inline bool operator==(Handle a,Handle b){return a.index==b.index&&a.generation==b.generation;}
struct Config {uint32_t maxBuffers=8192,maxPrograms=256,maxMaterials=2048,maxDrawsPerSlot=2048;};
struct Code {const uint32_t*words=nullptr;size_t bytes=0;};
struct ProgramDesc {
 Kind kind=Kind::Terrain4;Code vertex,fragment;VkRenderPass pass=VK_NULL_HANDLE;
 uint32_t inputMask=0,samplerMask=0,cubeMask=0,colorAttachments=6;bool shadow=false;
 VkSampleCountFlagBits samples=VK_SAMPLE_COUNT_1_BIT;VkCullModeFlags cull=VK_CULL_MODE_NONE;VkFrontFace front=VK_FRONT_FACE_CLOCKWISE;
 VkCompareOp depthCompare=VK_COMPARE_OP_LESS_OR_EQUAL;bool depthTest=true,depthWrite=true;
 bool depthBias=false;float constantBias=0,slopeBias=0;float blendConstants[4]{};
 VkPipelineColorBlendAttachmentState colors[6]{};
 ProgramDesc(){for(auto&c:colors)c.colorWriteMask=VK_COLOR_COMPONENT_R_BIT|VK_COLOR_COMPONENT_G_BIT|VK_COLOR_COMPONENT_B_BIT|VK_COLOR_COMPONENT_A_BIT;}
};
// Acquire retains the owner through Release; Valid must safely check identity/generation, including native texture eviction.
// No texture pointer may be destroyed while acquired. Samplers must also outlive the last completed use.
struct Texture {
 VkImageView view=VK_NULL_HANDLE;VkSampler sampler=VK_NULL_HANDLE;VkImageLayout layout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;
 uint64_t identity=0;bool cube=false;void*owner=nullptr;
 bool(*Acquire)(void*,uint64_t)=nullptr;bool(*Valid)(void*,uint64_t)=nullptr;void(*Release)(void*,uint64_t)=nullptr;
};
struct MaterialDesc {Handle program;uint32_t tiles=4;Texture textures[4][16]{};};
struct Context {
 VkCommandBuffer cmd=VK_NULL_HANDLE;VkRenderPass pass=VK_NULL_HANDLE;VkViewport viewport{};VkRect2D scissor{};
 uint32_t slot=0;uint64_t serial=0;Push push{};
};
struct Stats {uint64_t draws=0,instances=0,triangles=0,fallbacks=0,uploads=0,bufferAllocations=0,pipelines=0,materials=0;};
class Renderer {
public:
 Renderer()=default;Renderer(const Renderer&)=delete;Renderer&operator=(const Renderer&)=delete;
 bool Init(const WXL_VkRenderApi*,const Config&config=Config{});
 Handle CreateTerrain(const Terrain::Mesh&);
 Handle CreateGrassMesh(const Grass::Vertex*,uint32_t vertexCount,const uint16_t*,uint32_t indexCount);
 Handle CreateInstances(const void*,uint32_t count,Kind);
 Handle WarmProgram(const ProgramDesc&); // load/initialization phase, NEVER from Record
 Handle CreateMaterial(const MaterialDesc&); // persistent descriptor set, NEVER allocated by Record
 bool ReleaseBuffer(Handle);bool ReleaseMaterial(Handle);bool ReleaseProgram(Handle);
 void Collect(uint64_t completedSerial);
 bool BeginFrame(uint32_t slot,uint64_t serial,uint64_t completedSerial);
 bool PrepareUploads(VkCommandBuffer,uint64_t serial,uint64_t completedSerial); // outside any render pass, before main draws
 bool RecordTerrain(const Context&,Handle mesh,Handle program,Handle material,const RegisterBlock registers[4],uint32_t visibleMask);
 bool RecordGrass(const Context&,Handle mesh,Handle instances,Handle program,Handle material,const RegisterBlock&,uint32_t firstInstance=0,uint32_t instanceCount=0);
 // Returns false without destroying anything until all module commands have completed.
 bool Shutdown(uint64_t completedSerial);
 bool BufferReady(Handle,uint64_t serial)const;
 uint64_t LastUsed()const;Stats Counters()const;const char*Error()const{return error_;}
private:
 struct Impl;Impl*state_=nullptr;char error_[256]{};
 bool Fail(const char*);Handle Upload(const void*,VkDeviceSize,const void*,VkDeviceSize,Kind,uint32_t,uint32_t,bool);
 bool Record(const Context&,Handle,Handle,Handle,Handle,const RegisterBlock*,uint32_t,uint32_t,uint32_t,uint32_t);
};
}
