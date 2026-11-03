#include "CataOptimRenderer.h"
#include <cstdio>
#include <vector>
#include <limits>
#include <new>
namespace HD::CataOptim {
namespace {
constexpr VkShaderStageFlags Both=VK_SHADER_STAGE_VERTEX_BIT|VK_SHADER_STAGE_FRAGMENT_BIT;
uint32_t Bits(uint32_t n){uint32_t out=0;while(n){++out;n&=n-1;}return out;}
uint64_t Align(uint64_t n,uint64_t a){return (n+a-1)/a*a;}
struct Buffer {
 uint32_t generation=0;bool alive=false,instanced=false,pending=false;Kind kind=Kind::Terrain4;
 void*vertexHandle=nullptr,*indexHandle=nullptr,*stagingHandle=nullptr;
 WXL_VkBufferInfo vertex{},index{},staging{};VkDeviceSize vertexBytes=0,indexBytes=0;
 uint32_t vertices=0,indices=0,instances=0;uint64_t ready=0,last=0;
 std::array<Terrain::Range,4>ranges{};
};
struct Program {
 uint32_t generation=0;bool alive=false,retiring=false;Kind kind=Kind::Terrain4;bool shadow=false;
 VkPipeline pipeline=VK_NULL_HANDLE;VkPipelineLayout layout=VK_NULL_HANDLE;VkDescriptorSetLayout textures=VK_NULL_HANDLE;
 VkRenderPass pass=VK_NULL_HANDLE;uint32_t mask=0,cubeMask=0,materialRefs=0;uint64_t last=0;
};
struct Material {
 uint32_t generation=0;bool alive=false,retiring=false;Handle program;uint32_t tiles=0,acquired=0;
 VkDescriptorSet set=VK_NULL_HANDLE;Texture held[64]{};uint64_t last=0;
};
struct Slot {void*handle=nullptr;WXL_VkBufferInfo buffer{};VkDescriptorSet set=VK_NULL_HANDLE;uint64_t serial=0;uint32_t cursor=0;};
template<class T>T*At(std::vector<T>&v,Handle h){return h.index<v.size()&&v[h.index].generation==h.generation&&v[h.index].alive?&v[h.index]:nullptr;}
uint32_t Next(uint32_t n){++n;return n?n:1;}
}
struct Renderer::Impl {
 const WXL_VkRenderApi*api=nullptr;WXL_VkDeviceInfo info{};Config config;VkPhysicalDeviceProperties properties{};
 std::vector<Buffer>buffers;std::vector<Program>programs;std::vector<Material>materials;std::vector<Handle>pending;uint32_t pendingCount=0;
 std::array<Slot,4>slots{};VkDescriptorPool texturePool=VK_NULL_HANDLE,registerPool=VK_NULL_HANDLE;VkDescriptorSetLayout registerLayout=VK_NULL_HANDLE;
 VkDeviceSize stride=0;uint64_t last=0,completed=0,lastUploadSerial=0;Stats stats{};
#define OPT_GPU(X) X(CreateDescriptorSetLayout) X(DestroyDescriptorSetLayout) X(CreateDescriptorPool) X(DestroyDescriptorPool) \
 X(AllocateDescriptorSets) X(FreeDescriptorSets) X(UpdateDescriptorSets) X(CreatePipelineLayout) X(DestroyPipelineLayout) X(CreateShaderModule) X(DestroyShaderModule) \
 X(CreateGraphicsPipelines) X(DestroyPipeline) X(CmdCopyBuffer) X(CmdPipelineBarrier) X(CmdBindPipeline) X(CmdBindDescriptorSets) X(CmdBindVertexBuffers) \
 X(CmdBindIndexBuffer) X(CmdPushConstants) X(CmdSetViewport) X(CmdSetScissor) X(CmdDrawIndexed)
#define DECLARE(n) PFN_vk##n n=nullptr;
 OPT_GPU(DECLARE)
#undef DECLARE
 bool Allocate(VkDeviceSize size,VkBufferUsageFlags usage,uint32_t memory,void*&handle,WXL_VkBufferInfo&out){
  WXL_VkBufferDesc desc{size,usage,memory};handle=api->CreateBuffer(&desc,&out);if(handle)++stats.bufferAllocations;
  return handle&&out.buffer&&out.size>=size;
 }
 void Retire(void*&handle,uint64_t serial){if(handle){api->RetireBuffer(handle,serial);handle=nullptr;}}
 void DeleteProgram(Program&p){if(p.pipeline)DestroyPipeline(info.device,p.pipeline,nullptr);if(p.layout)DestroyPipelineLayout(info.device,p.layout,nullptr);if(p.textures)DestroyDescriptorSetLayout(info.device,p.textures,nullptr);uint32_t gen=p.generation;p={};p.generation=gen;}
 void DeleteMaterial(Material&m){if(m.set)FreeDescriptorSets(info.device,texturePool,1,&m.set);for(uint32_t i=0;i<m.acquired;++i)m.held[i].Release(m.held[i].owner,m.held[i].identity);
  if(m.program.index<programs.size()&&programs[m.program.index].generation==m.program.generation&&programs[m.program.index].materialRefs)--programs[m.program.index].materialRefs;
  uint32_t gen=m.generation;m={};m.generation=gen;
 }
};
bool Renderer::Fail(const char*s){std::snprintf(error_,sizeof error_,"%s",s);return false;}
bool Renderer::Init(const WXL_VkRenderApi*api,const Config&config){
 if(state_)return true;
 if(!api||api->apiVersion!=WXL_VK_RENDER_API_VERSION||api->structSize<offsetof(WXL_VkRenderApi,FlushBuffer)+sizeof(api->FlushBuffer)||!api->GetDeviceInfo||!api->CreateBuffer||!api->RetireBuffer||!api->FlushBuffer)return Fail("Vulkan allocator API unavailable");
 if(!config.maxBuffers||!config.maxPrograms||!config.maxMaterials||!config.maxDrawsPerSlot||config.maxBuffers>65536||config.maxPrograms>4096||config.maxMaterials>65536||config.maxDrawsPerSlot>65536)return Fail("invalid initialization capacities");
 Impl*p=nullptr;try{p=new Impl;p->buffers.resize(config.maxBuffers);p->programs.resize(config.maxPrograms);p->materials.resize(config.maxMaterials);p->pending.resize(config.maxBuffers);}catch(...){delete p;return Fail("CPU pool allocation failed");}
 p->api=api;p->config=config;p->info.structSize=sizeof p->info;
 if(!api->GetDeviceInfo(&p->info)||!p->info.device||!p->info.physicalDevice||!p->info.getDeviceProcAddr||!p->info.getInstanceProcAddr||!p->info.frameSlots||p->info.frameSlots>4){delete p;return Fail("Vulkan device unavailable");}
#define LOAD(n) p->n=reinterpret_cast<PFN_vk##n>(p->info.getDeviceProcAddr(p->info.device,"vk"#n));if(!p->n){delete p;return Fail("missing Vulkan function: vk"#n);}
 OPT_GPU(LOAD)
#undef LOAD
 auto props=reinterpret_cast<PFN_vkGetPhysicalDeviceProperties>(p->info.getInstanceProcAddr(p->info.instance,"vkGetPhysicalDeviceProperties"));if(!props){delete p;return Fail("physical device limits unavailable");}props(p->info.physicalDevice,&p->properties);
 const auto&limits=p->properties.limits;
 p->stride=Align(4*sizeof(RegisterBlock),std::max<VkDeviceSize>(16,limits.minStorageBufferOffsetAlignment));
 if(limits.maxPushConstantsSize<sizeof(Push)||limits.maxPerStageDescriptorStorageBuffers<1||limits.maxDescriptorSetStorageBuffersDynamic<1||limits.maxStorageBufferRange<4*sizeof(RegisterBlock)||p->stride*config.maxDrawsPerSlot>UINT32_MAX){delete p;return Fail("device limits do not cover optimization ABI");}
 state_=p;
 VkDescriptorSetLayoutBinding rb{0,VK_DESCRIPTOR_TYPE_STORAGE_BUFFER_DYNAMIC,1,Both,nullptr};VkDescriptorSetLayoutCreateInfo li{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO};li.bindingCount=1;li.pBindings=&rb;
 if(p->CreateDescriptorSetLayout(p->info.device,&li,nullptr,&p->registerLayout)!=VK_SUCCESS){Shutdown(0);return Fail("register layout creation failed");}
 VkDescriptorPoolSize sizes[1]{{VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER,config.maxMaterials*64}};VkDescriptorPoolCreateInfo pi{VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO};pi.flags=VK_DESCRIPTOR_POOL_CREATE_FREE_DESCRIPTOR_SET_BIT;pi.maxSets=config.maxMaterials;pi.poolSizeCount=1;pi.pPoolSizes=sizes;
 if(p->CreateDescriptorPool(p->info.device,&pi,nullptr,&p->texturePool)!=VK_SUCCESS){Shutdown(0);return Fail("texture descriptor pool creation failed");}
 sizes[0]={VK_DESCRIPTOR_TYPE_STORAGE_BUFFER_DYNAMIC,p->info.frameSlots};pi.maxSets=p->info.frameSlots;
 if(p->CreateDescriptorPool(p->info.device,&pi,nullptr,&p->registerPool)!=VK_SUCCESS){Shutdown(0);return Fail("register descriptor pool creation failed");}
 for(uint32_t i=0;i<p->info.frameSlots;++i){auto&s=p->slots[i];
  if(!p->Allocate(p->stride*config.maxDrawsPerSlot,VK_BUFFER_USAGE_STORAGE_BUFFER_BIT,WXL_VK_MEMORY_STREAM,s.handle,s.buffer)||!s.buffer.mapped){Shutdown(0);return Fail("frame register ring allocation failed");}
  VkDescriptorSetAllocateInfo ai{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO};ai.descriptorPool=p->registerPool;ai.descriptorSetCount=1;ai.pSetLayouts=&p->registerLayout;
  if(p->AllocateDescriptorSets(p->info.device,&ai,&s.set)!=VK_SUCCESS){Shutdown(0);return Fail("frame descriptor allocation failed");}
  VkDescriptorBufferInfo bi{s.buffer.buffer,0,4*sizeof(RegisterBlock)};VkWriteDescriptorSet w{VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET};w.dstSet=s.set;w.dstBinding=0;w.descriptorCount=1;w.descriptorType=VK_DESCRIPTOR_TYPE_STORAGE_BUFFER_DYNAMIC;w.pBufferInfo=&bi;p->UpdateDescriptorSets(p->info.device,1,&w,0,nullptr);
 }error_[0]=0;return true;
}
Handle Renderer::Upload(const void*vertices,VkDeviceSize vb,const void*indices,VkDeviceSize ib,Kind kind,uint32_t vertexCount,uint32_t indexCount,bool instance){
 if(!state_||!vertices||!vb||(ib&&!indices)||vb>SIZE_MAX||ib>SIZE_MAX||vb>UINT64_MAX-ib){Fail("invalid static geometry upload");return {};}
 auto&p=*state_;if(p.pendingCount>=p.pending.size()){Fail("pending upload pool full");return {};}
 uint32_t index=0;for(;index<p.buffers.size();++index)if(!p.buffers[index].alive)break;
 if(index==p.buffers.size()){Fail("geometry pool full");return {};}
 auto&b=p.buffers[index];uint32_t gen=Next(b.generation);b={};b.generation=gen;b.kind=kind;b.instanced=instance;b.vertices=vertexCount;b.indices=indexCount;b.instances=instance?vertexCount:0;b.vertexBytes=vb;b.indexBytes=Align(ib,4);
 if(!p.Allocate(vb,VK_BUFFER_USAGE_TRANSFER_DST_BIT|VK_BUFFER_USAGE_VERTEX_BUFFER_BIT,WXL_VK_MEMORY_DEVICE_LOCAL,b.vertexHandle,b.vertex)||
    (ib&&!p.Allocate(b.indexBytes,VK_BUFFER_USAGE_TRANSFER_DST_BIT|VK_BUFFER_USAGE_INDEX_BUFFER_BIT,WXL_VK_MEMORY_DEVICE_LOCAL,b.indexHandle,b.index))||
    !p.Allocate(vb+b.indexBytes,VK_BUFFER_USAGE_TRANSFER_SRC_BIT,WXL_VK_MEMORY_HOST,b.stagingHandle,b.staging)||!b.staging.mapped){p.Retire(b.vertexHandle,0);p.Retire(b.indexHandle,0);p.Retire(b.stagingHandle,0);Fail("partial static upload allocation failed");return {};}
 std::memcpy(b.staging.mapped,vertices,size_t(vb));if(ib){std::memcpy(static_cast<uint8_t*>(b.staging.mapped)+vb,indices,size_t(ib));std::memset(static_cast<uint8_t*>(b.staging.mapped)+vb+ib,0,size_t(b.indexBytes-ib));}p.api->FlushBuffer(b.stagingHandle);
 b.alive=b.pending=true;Handle h{index,gen};p.pending[p.pendingCount++]=h;return h;
}
Handle Renderer::CreateTerrain(const Terrain::Mesh&m){
 if(!m.ready||!m.indexCount||m.indexCount>4*Terrain::MaxIndices){Fail("invalid terrain mesh");return {};}
 for(uint32_t i=0;i<m.indexCount;++i)if(m.indices[i]>=4*Terrain::Vertices){Fail("invalid terrain index");return {};}
 uint32_t end=0,tile=0;for(const auto&r:m.ranges){if(r.first!=end||r.count%3||r.count>Terrain::MaxIndices||end+r.count>m.indexCount){Fail("terrain ranges must preserve four ordered chunks");return {};}for(uint32_t j=0;j<r.count;++j)if(m.indices[r.first+j]/145!=tile){Fail("terrain index selects a different tile's registers");return {};}end+=r.count;++tile;}
 if(end!=m.indexCount){Fail("terrain ranges do not cover the index buffer");return {};}
 Handle h=Upload(m.vertices.data(),sizeof(Terrain::Vertex)*m.vertices.size(),m.indices.data(),2*m.indexCount,Kind::Terrain4,4*Terrain::Vertices,m.indexCount,false);if(h)state_->buffers[h.index].ranges=m.ranges;return h;
}
Handle Renderer::CreateGrassMesh(const Grass::Vertex*v,uint32_t n,const uint16_t*i,uint32_t count){
 if(!v||!i||!n||n>65536||!count||count%3){Fail("invalid grass mesh");return {};}
 for(uint32_t j=0;j<n;++j)if(!Finite(v[j].position)||!std::isfinite(v[j].uv[0])||!std::isfinite(v[j].uv[1])){Fail("invalid grass vertex");return {};}
 for(uint32_t j=0;j<count;++j)if(i[j]>=n){Fail("invalid grass index");return {};}
 return Upload(v,VkDeviceSize(n)*sizeof(*v),i,VkDeviceSize(count)*2,Kind::GrassLossless,n,count,false);
}
Handle Renderer::CreateInstances(const void*data,uint32_t n,Kind kind){
 if(!n||n>1048576||(kind!=Kind::GrassLossless&&kind!=Kind::GrassPacked)){Fail("invalid instance stream");return {};}
 return Upload(data,VkDeviceSize(n)*(kind==Kind::GrassPacked?sizeof(Grass::PackedInstance):sizeof(Grass::Instance)),nullptr,0,kind,n,0,true);
}
Handle Renderer::WarmProgram(const ProgramDesc&d){
 if(!state_||!d.pass||!d.vertex.words||!d.fragment.words||d.vertex.bytes<20||d.fragment.bytes<20||d.vertex.bytes%4||d.fragment.bytes%4||d.colorAttachments>6||(d.cubeMask&~d.samplerMask)||(d.samplerMask&~65535u)||uint32_t(d.kind)>uint32_t(Kind::GrassPacked)||!std::isfinite(d.constantBias)||!std::isfinite(d.slopeBias)){Fail("invalid optimization program");return {};}
 auto&p=*state_;const auto&limits=p.properties.limits;const uint32_t samplers=4*Bits(d.samplerMask);
 if(samplers>limits.maxPerStageDescriptorSamplers||samplers>limits.maxDescriptorSetSamplers||samplers>limits.maxPerStageDescriptorSampledImages||samplers>limits.maxDescriptorSetSampledImages||d.colorAttachments>limits.maxColorAttachments){Fail("texture array exceeds this GPU's limits; keep native drawing");return {};}
 uint32_t index=0;for(;index<p.programs.size();++index)if(!p.programs[index].alive&&!p.programs[index].retiring)break;
 if(index==p.programs.size()){Fail("program pool full");return {};}
 auto&program=p.programs[index];uint32_t gen=Next(program.generation);program={};program.generation=gen;program.kind=d.kind;program.shadow=d.shadow;program.pass=d.pass;program.mask=d.samplerMask;program.cubeMask=d.cubeMask;
 VkVertexInputBindingDescription bindings[2]{};VkVertexInputAttributeDescription attrs[16]{};uint32_t ac=0,bc=1;
 auto attribute=[&](uint32_t location,uint32_t binding,VkFormat format,uint32_t offset){if(d.inputMask&(1u<<location))attrs[ac++]={location,binding,format,offset};};
 if(d.kind==Kind::Terrain4){if(d.inputMask&~7u){Fail("terrain native shader expects unsupported vertex attributes");return {};}bindings[0]={0,sizeof(Terrain::Vertex),VK_VERTEX_INPUT_RATE_VERTEX};attribute(0,0,VK_FORMAT_R32G32B32_SFLOAT,0);attribute(1,0,VK_FORMAT_R32G32B32_SFLOAT,12);attribute(2,0,VK_FORMAT_B8G8R8A8_UNORM,24);}
 else{
  const uint32_t allowed=d.kind==Kind::GrassPacked?((1u<<0)|(1u<<4)|(1u<<5)|(63u<<8)):((1u<<0)|(1u<<4)|(1u<<5)|(127u<<8));
  if(d.inputMask&~allowed){Fail("grass native shader expects unsupported attributes");return {};}
  bc=2;bindings[0]={0,sizeof(Grass::Vertex),VK_VERTEX_INPUT_RATE_VERTEX};bindings[1]={1,uint32_t(d.kind==Kind::GrassPacked?sizeof(Grass::PackedInstance):sizeof(Grass::Instance)),VK_VERTEX_INPUT_RATE_INSTANCE};
  attribute(0,0,VK_FORMAT_R32G32B32_SFLOAT,0);attribute(4,0,VK_FORMAT_R32G32_SFLOAT,12);attribute(5,0,VK_FORMAT_R32G32_SFLOAT,20);
  if(d.kind==Kind::GrassPacked){attribute(8,1,VK_FORMAT_R8G8B8A8_UINT,0);attribute(9,1,VK_FORMAT_R8G8B8A8_UNORM,4);attribute(10,1,VK_FORMAT_R8G8B8A8_UNORM,8);attribute(11,1,VK_FORMAT_R32G32B32_SFLOAT,12);attribute(12,1,VK_FORMAT_R8G8B8A8_UINT,24);attribute(13,1,VK_FORMAT_R8G8B8A8_UINT,28);}
  else for(uint32_t i=0;i<7;++i)attribute(8+i,1,VK_FORMAT_R32G32B32A32_SFLOAT,16*i);
 }
 VkDescriptorSetLayoutBinding tb[16]{};uint32_t n=0;for(uint32_t i=0;i<16;++i)if(d.samplerMask&(1u<<i))tb[n++]={i,VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER,4,VK_SHADER_STAGE_FRAGMENT_BIT,nullptr};
 VkDescriptorSetLayoutCreateInfo li{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO};li.bindingCount=n;li.pBindings=tb;
 if(p.CreateDescriptorSetLayout(p.info.device,&li,nullptr,&program.textures)!=VK_SUCCESS){Fail("program texture layout failed");return {};}
 VkDescriptorSetLayout layouts[2]{program.textures,p.registerLayout};VkPushConstantRange push{Both,0,sizeof(Push)};VkPipelineLayoutCreateInfo pli{VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO};pli.setLayoutCount=2;pli.pSetLayouts=layouts;pli.pushConstantRangeCount=1;pli.pPushConstantRanges=&push;
 if(p.CreatePipelineLayout(p.info.device,&pli,nullptr,&program.layout)!=VK_SUCCESS){p.DeleteProgram(program);Fail("program layout failed");return {};}
 VkShaderModule modules[2]{};VkShaderModuleCreateInfo sm{VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO};sm.codeSize=d.vertex.bytes;sm.pCode=d.vertex.words;
 if(p.CreateShaderModule(p.info.device,&sm,nullptr,&modules[0])!=VK_SUCCESS){p.DeleteProgram(program);Fail("vertex module failed");return {};}
 sm.codeSize=d.fragment.bytes;sm.pCode=d.fragment.words;
 if(p.CreateShaderModule(p.info.device,&sm,nullptr,&modules[1])!=VK_SUCCESS){p.DestroyShaderModule(p.info.device,modules[0],nullptr);p.DeleteProgram(program);Fail("fragment module failed");return {};}
 VkPipelineShaderStageCreateInfo stages[2]{};for(uint32_t i=0;i<2;++i){stages[i].sType=VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;stages[i].stage=i?VK_SHADER_STAGE_FRAGMENT_BIT:VK_SHADER_STAGE_VERTEX_BIT;stages[i].module=modules[i];stages[i].pName="main";}
 VkPipelineVertexInputStateCreateInfo vi{VK_STRUCTURE_TYPE_PIPELINE_VERTEX_INPUT_STATE_CREATE_INFO};vi.vertexBindingDescriptionCount=bc;vi.pVertexBindingDescriptions=bindings;vi.vertexAttributeDescriptionCount=ac;vi.pVertexAttributeDescriptions=attrs;
 VkPipelineInputAssemblyStateCreateInfo ia{VK_STRUCTURE_TYPE_PIPELINE_INPUT_ASSEMBLY_STATE_CREATE_INFO};ia.topology=VK_PRIMITIVE_TOPOLOGY_TRIANGLE_LIST;
 VkPipelineViewportStateCreateInfo vp{VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_STATE_CREATE_INFO};vp.viewportCount=vp.scissorCount=1;
 VkPipelineRasterizationStateCreateInfo rs{VK_STRUCTURE_TYPE_PIPELINE_RASTERIZATION_STATE_CREATE_INFO};rs.polygonMode=VK_POLYGON_MODE_FILL;rs.cullMode=d.cull;rs.frontFace=d.front;rs.lineWidth=1;rs.depthBiasEnable=d.depthBias;rs.depthBiasConstantFactor=d.constantBias;rs.depthBiasSlopeFactor=d.slopeBias;
 VkPipelineMultisampleStateCreateInfo ms{VK_STRUCTURE_TYPE_PIPELINE_MULTISAMPLE_STATE_CREATE_INFO};ms.rasterizationSamples=d.samples;
 VkPipelineDepthStencilStateCreateInfo ds{VK_STRUCTURE_TYPE_PIPELINE_DEPTH_STENCIL_STATE_CREATE_INFO};ds.depthTestEnable=d.depthTest;ds.depthWriteEnable=d.depthWrite;ds.depthCompareOp=d.depthCompare;
 VkPipelineColorBlendStateCreateInfo blend{VK_STRUCTURE_TYPE_PIPELINE_COLOR_BLEND_STATE_CREATE_INFO};blend.attachmentCount=d.colorAttachments;blend.pAttachments=d.colors;std::copy_n(d.blendConstants,4,blend.blendConstants);
 VkDynamicState dyn[2]{VK_DYNAMIC_STATE_VIEWPORT,VK_DYNAMIC_STATE_SCISSOR};VkPipelineDynamicStateCreateInfo dynamic{VK_STRUCTURE_TYPE_PIPELINE_DYNAMIC_STATE_CREATE_INFO};dynamic.dynamicStateCount=2;dynamic.pDynamicStates=dyn;
 VkGraphicsPipelineCreateInfo ci{VK_STRUCTURE_TYPE_GRAPHICS_PIPELINE_CREATE_INFO};ci.stageCount=2;ci.pStages=stages;ci.pVertexInputState=&vi;ci.pInputAssemblyState=&ia;ci.pViewportState=&vp;ci.pRasterizationState=&rs;ci.pMultisampleState=&ms;ci.pDepthStencilState=&ds;ci.pColorBlendState=&blend;ci.pDynamicState=&dynamic;ci.layout=program.layout;ci.renderPass=d.pass;
 VkResult result=p.CreateGraphicsPipelines(p.info.device,p.info.pipelineCache,1,&ci,nullptr,&program.pipeline);
 for(auto m:modules)p.DestroyShaderModule(p.info.device,m,nullptr);
 if(result!=VK_SUCCESS){p.DeleteProgram(program);Fail("optimization pipeline failed");return {};}
 program.alive=true;++p.stats.pipelines;return {index,gen};
}
Handle Renderer::CreateMaterial(const MaterialDesc&d){
 if(!state_||!d.tiles||d.tiles>4){Fail("invalid material tile count");return {};}
 auto&p=*state_;auto*program=At(p.programs,d.program);if(!program){Fail("material program unavailable");return {};}
 if((program->kind==Kind::Terrain4&&d.tiles!=4)||(program->kind!=Kind::Terrain4&&d.tiles!=1)){Fail("material tile count and shader kind differ");return {};}
 uint32_t index=0;for(;index<p.materials.size();++index)if(!p.materials[index].alive&&!p.materials[index].retiring)break;
 if(index==p.materials.size()){Fail("material pool full");return {};}
 auto&m=p.materials[index];uint32_t gen=Next(m.generation);m={};m.generation=gen;m.program=d.program;m.tiles=d.tiles;
 // Increment before any fallible operation so the unified rollback decrements exactly once.
 ++program->materialRefs;
 VkDescriptorImageInfo images[64]{};VkWriteDescriptorSet writes[16]{};uint32_t n=0;
 for(uint32_t slot=0;slot<16;++slot)if(program->mask&(1u<<slot)){
  for(uint32_t tile=0;tile<4;++tile){const Texture&t=d.textures[tile<d.tiles?tile:0][slot];
   if(!t.view||!t.sampler||!t.identity||!t.Acquire||!t.Valid||!t.Release||t.cube!=bool(program->cubeMask&(1u<<slot))||(t.layout!=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL&&t.layout!=VK_IMAGE_LAYOUT_GENERAL)||!t.Valid(t.owner,t.identity)||!t.Acquire(t.owner,t.identity)){p.DeleteMaterial(m);Fail("material texture unavailable or cannot be retained");return {};}
   m.held[m.acquired++]=t;images[4*n+tile]={t.sampler,t.view,t.layout};
  }
  auto&w=writes[n];w.sType=VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;w.dstBinding=slot;w.descriptorCount=4;w.descriptorType=VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;w.pImageInfo=&images[4*n];++n;
 }
 VkDescriptorSetAllocateInfo ai{VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO};ai.descriptorPool=p.texturePool;ai.descriptorSetCount=1;ai.pSetLayouts=&program->textures;
 if(p.AllocateDescriptorSets(p.info.device,&ai,&m.set)!=VK_SUCCESS){p.DeleteMaterial(m);Fail("persistent material descriptor pool full");return {};}
 for(uint32_t i=0;i<n;++i)writes[i].dstSet=m.set;p.UpdateDescriptorSets(p.info.device,n,writes,0,nullptr);
 m.alive=true;++p.stats.materials;return {index,gen};
}
bool Renderer::ReleaseBuffer(Handle h){
 if(!state_)return false;auto&p=*state_;auto*b=At(p.buffers,h);if(!b)return false;
 const auto serial=std::max(b->last,b->ready);p.Retire(b->vertexHandle,serial);p.Retire(b->indexHandle,serial);p.Retire(b->stagingHandle,0);b->alive=false;return true;
}
bool Renderer::ReleaseMaterial(Handle h){if(!state_)return false;auto*m=At(state_->materials,h);if(!m)return false;m->alive=false;m->retiring=true;return true;}
bool Renderer::ReleaseProgram(Handle h){if(!state_)return false;auto*p=At(state_->programs,h);if(!p)return false;p->alive=false;p->retiring=true;return true;}
void Renderer::Collect(uint64_t completed){
 if(!state_)return;auto&p=*state_;p.completed=std::max(p.completed,completed);
 for(auto&m:p.materials)if(m.retiring&&m.last<=p.completed)p.DeleteMaterial(m);
 for(auto&program:p.programs)if(program.retiring&&!program.materialRefs&&program.last<=p.completed)p.DeleteProgram(program);
}
bool Renderer::BeginFrame(uint32_t slot,uint64_t serial,uint64_t completed){
 if(!state_||!serial||slot>=state_->info.frameSlots)return Fail("invalid frame slot/serial");
 auto&p=*state_;auto&s=p.slots[slot];if(s.serial==serial)return true;
 if(serial<s.serial||completed<s.serial)return Fail("frame slot still in flight; do not overwrite register arena");
 Collect(completed);s.serial=serial;s.cursor=0;return true;
}
bool Renderer::PrepareUploads(VkCommandBuffer cmd,uint64_t serial,uint64_t completed){
 if(!state_||!cmd||!serial)return Fail("invalid pre-pass upload context");auto&p=*state_;Collect(completed);
 // A repeated insertion point must never put a second upload after some draws in the same frame.
 if(serial==p.lastUploadSerial)return true;if(serial<p.lastUploadSerial)return Fail("upload serial went backwards");p.lastUploadSerial=serial;
 bool copied=false;
 for(uint32_t i=0;i<p.pendingCount;++i){auto*b=At(p.buffers,p.pending[i]);if(!b||!b->pending)continue;
  VkBufferCopy copy{0,0,b->vertexBytes};p.CmdCopyBuffer(cmd,b->staging.buffer,b->vertex.buffer,1,&copy);
  if(b->indexBytes){copy={b->vertexBytes,0,b->indexBytes};p.CmdCopyBuffer(cmd,b->staging.buffer,b->index.buffer,1,&copy);}
  b->pending=false;b->ready=serial;p.Retire(b->stagingHandle,serial);++p.stats.uploads;copied=true;
 }
 p.pendingCount=0;
 if(copied){VkMemoryBarrier barrier{VK_STRUCTURE_TYPE_MEMORY_BARRIER};barrier.srcAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;barrier.dstAccessMask=VK_ACCESS_VERTEX_ATTRIBUTE_READ_BIT|VK_ACCESS_INDEX_READ_BIT;
  p.CmdPipelineBarrier(cmd,VK_PIPELINE_STAGE_TRANSFER_BIT,VK_PIPELINE_STAGE_VERTEX_INPUT_BIT,0,1,&barrier,0,nullptr,0,nullptr);p.last=std::max(p.last,serial);}
 return true;
}
bool Renderer::BufferReady(Handle h,uint64_t serial)const{
 if(!state_)return false;auto*b=At(state_->buffers,h);return b&&!b->pending&&b->ready&&b->ready<=serial;
}
bool Renderer::Record(const Context&ctx,Handle mesh,Handle instances,Handle program,Handle material,const RegisterBlock*regs,uint32_t tileCount,uint32_t mask,uint32_t firstInstance,uint32_t instanceCount){
 if(!state_)return false;auto&p=*state_;auto*b=At(p.buffers,mesh);auto*pr=At(p.programs,program);auto*m=At(p.materials,material);
 auto reject=[&](const char*why){++p.stats.fallbacks;return Fail(why);};
 if(!b||!pr||!m||!(m->program==program)||b->instanced||!BufferReady(mesh,ctx.serial)||!regs||!ctx.cmd||ctx.pass!=pr->pass||ctx.slot>=p.info.frameSlots||!ctx.serial||p.slots[ctx.slot].serial!=ctx.serial||!std::isfinite(ctx.viewport.x)||!std::isfinite(ctx.viewport.y)||!std::isfinite(ctx.viewport.width)||!std::isfinite(ctx.viewport.height)||ctx.viewport.width<=0||ctx.viewport.height<=0||!std::isfinite(ctx.viewport.minDepth)||!std::isfinite(ctx.viewport.maxDepth)||ctx.viewport.minDepth<0||ctx.viewport.maxDepth>1||ctx.viewport.minDepth>ctx.viewport.maxDepth||ctx.scissor.offset.x<0||ctx.scissor.offset.y<0||uint64_t(ctx.scissor.offset.x)+ctx.scissor.extent.width>INT32_MAX||uint64_t(ctx.scissor.offset.y)+ctx.scissor.extent.height>INT32_MAX||ctx.scissor.extent.width==0||ctx.scissor.extent.height==0)return reject("draw is not ready; keep native drawing");
 Buffer*inst=nullptr;std::array<Terrain::Range,2>runs{};uint32_t runCount=1;
 if(pr->kind==Kind::Terrain4){if(b->kind!=Kind::Terrain4||tileCount!=4||m->tiles!=4||(mask&~15u))return reject("invalid terrain draw kind/mask");runCount=Terrain::VisibleRuns(b->ranges,mask,runs);if(!runCount)return mask?reject("terrain has no drawable visible ranges"):true;}
 else{inst=At(p.buffers,instances);if(b->kind==Kind::Terrain4||!inst||!inst->instanced||inst->kind!=pr->kind||!BufferReady(instances,ctx.serial)||tileCount!=1||m->tiles!=1||firstInstance>inst->instances)return reject("instance stream unavailable");const uint32_t available=inst->instances-firstInstance;if(instanceCount>available)return reject("instance range outside retained stream");instanceCount=instanceCount?instanceCount:available;if(!instanceCount)return true;runs[0]={0,b->indices};}
 for(uint32_t i=0;i<m->acquired;++i)if(!m->held[i].Valid(m->held[i].owner,m->held[i].identity))return reject("retained native texture changed identity; rebuild material");
 auto&slot=p.slots[ctx.slot];if(slot.cursor>=p.config.maxDrawsPerSlot)return reject("frame register arena full; keep native drawing");
 const uint32_t offset=uint32_t(slot.cursor*p.stride);auto*dest=static_cast<uint8_t*>(slot.buffer.mapped)+offset;
 // Grass shaders select tile 0 only. Unused rows are never read, so do not upload/zero three extra blocks.
 std::memcpy(dest,regs,tileCount*sizeof(RegisterBlock));p.api->FlushBuffer(slot.handle);++slot.cursor;
 // Every failure path is above this line. Once native drawing is replaced, the complete packet is emitted.
 p.CmdBindPipeline(ctx.cmd,VK_PIPELINE_BIND_POINT_GRAPHICS,pr->pipeline);VkDescriptorSet sets[2]{m->set,slot.set};p.CmdBindDescriptorSets(ctx.cmd,VK_PIPELINE_BIND_POINT_GRAPHICS,pr->layout,0,2,sets,1,&offset);
 p.CmdSetViewport(ctx.cmd,0,1,&ctx.viewport);p.CmdSetScissor(ctx.cmd,0,1,&ctx.scissor);Push push=ctx.push;push.verticesPerTile=145;if(pr->shadow)push.flags&=~uint32_t(PushFlags::Reproject);p.CmdPushConstants(ctx.cmd,pr->layout,Both,0,sizeof push,&push);
 VkBuffer vb[2]{b->vertex.buffer,inst?inst->vertex.buffer:VK_NULL_HANDLE};VkDeviceSize offsets[2]{};p.CmdBindVertexBuffers(ctx.cmd,0,inst?2:1,vb,offsets);p.CmdBindIndexBuffer(ctx.cmd,b->index.buffer,0,VK_INDEX_TYPE_UINT16);
 for(uint32_t i=0;i<runCount;++i){const uint32_t n=inst?instanceCount:1;p.CmdDrawIndexed(ctx.cmd,runs[i].count,n,runs[i].first,0,inst?firstInstance:0);++p.stats.draws;p.stats.instances+=n;p.stats.triangles+=uint64_t(runs[i].count/3)*n;}
 b->last=std::max(b->last,ctx.serial);if(inst)inst->last=std::max(inst->last,ctx.serial);m->last=std::max(m->last,ctx.serial);pr->last=std::max(pr->last,ctx.serial);p.last=std::max(p.last,ctx.serial);return true;
}
bool Renderer::RecordTerrain(const Context&ctx,Handle mesh,Handle program,Handle material,const RegisterBlock regs[4],uint32_t mask){return Record(ctx,mesh,{},program,material,regs,4,mask,0,0);}
bool Renderer::RecordGrass(const Context&ctx,Handle mesh,Handle instances,Handle program,Handle material,const RegisterBlock&regs,uint32_t first,uint32_t count){return Record(ctx,mesh,instances,program,material,&regs,1,1,first,count);}
bool Renderer::Shutdown(uint64_t completed){
 if(!state_)return true;auto&p=*state_;if(completed<p.last)return Fail("module still has GPU work in flight");
 for(auto&m:p.materials)if(m.alive||m.retiring)p.DeleteMaterial(m);
 for(auto&program:p.programs)if(program.alive||program.retiring||program.pipeline||program.layout||program.textures)p.DeleteProgram(program);
 for(auto&b:p.buffers){p.Retire(b.vertexHandle,std::max(b.ready,b.last));p.Retire(b.indexHandle,std::max(b.ready,b.last));p.Retire(b.stagingHandle,0);}
 for(auto&s:p.slots)p.Retire(s.handle,p.last);
 if(p.texturePool)p.DestroyDescriptorPool(p.info.device,p.texturePool,nullptr);if(p.registerPool)p.DestroyDescriptorPool(p.info.device,p.registerPool,nullptr);if(p.registerLayout)p.DestroyDescriptorSetLayout(p.info.device,p.registerLayout,nullptr);
 delete state_;state_=nullptr;return true;
}
uint64_t Renderer::LastUsed()const{return state_?state_->last:0;}
Stats Renderer::Counters()const{return state_?state_->stats:Stats{};}
}
