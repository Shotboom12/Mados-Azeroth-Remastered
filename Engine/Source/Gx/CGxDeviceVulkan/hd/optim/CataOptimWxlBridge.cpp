#include "CataOptimWxlBridge.h"
#include "draw/Cmd.hpp"
#include "vulkan/pipelines/Internal.hpp"
#include "vulkan/Pipelines.hpp"
#include "native/Present.hpp"
namespace HD::CataOptim::WxlBridge {
bool Registers(const wxlvk::draw::Cmd&c,RegisterBlock&o){
 if(c.vconst>64||!c.vertexRows||c.fixedFunction||!c.vs[0]||!c.ps[0])return false;
 o={};std::memcpy(o.p,c.pixelConst,sizeof o.p);std::memcpy(o.v,c.vertexRows,sizeof o.v);
 o.misc[0]=c.alphaRef?c.alphaRef/255.f:0;o.misc[1]=float(c.ffColorMode);o.misc[2]=float(c.ffColorOp);o.misc[3]=float(c.ffAlphaOp);return true;
}
bool ShaderHashes(const wxlvk::vk::pipelines::detail::Draft&d,char vertex[33],char pixel[33]){
 if(!d.entry||!d.entry->vrec||!d.entry->prec||d.entry->bones||d.entry->wind||d.entry->ffVertex||d.entry->companion)return false;
 std::memcpy(vertex,d.entry->vrec->md5,33);std::memcpy(pixel,d.entry->prec->md5,33);return true;
}
bool CompatibleDrawState(const wxlvk::draw::Cmd&a,const wxlvk::draw::Cmd&b){
 return a.indexed&&b.indexed&&a.topology==3&&b.topology==3&&a.vconst<=64&&b.vconst<=64&&a.blend==b.blend&&a.depthTest==b.depthTest&&a.depthWrite==b.depthWrite&&a.depthFunc==b.depthFunc&&a.cull==b.cull&&a.colorWrite==b.colorWrite&&a.depthBias==b.depthBias&&a.blendFactor==b.blendFactor&&std::memcmp(&a.viewport,&b.viewport,sizeof a.viewport)==0&&std::memcmp(&a.scissor,&b.scissor,sizeof a.scissor)==0&&std::strcmp(a.vs,b.vs)==0&&std::strcmp(a.ps,b.ps)==0;
}
bool RenderState(const wxlvk::draw::Cmd&c,ProgramDesc&o,bool mirror){
 using namespace wxlvk::vk::pipelines::detail;const char*why="";
 if(!c.indexed||c.topology!=3||!BlendState(c.blend,o.colors[0])||!CullState(c.cull,o.cull,o.front,why)||!DepthOp(c.depthFunc,o.depthCompare,why))return false;
 o.colors[0].colorWriteMask=WriteMask(c.colorWrite);o.depthTest=c.depthTest;o.depthWrite=c.depthWrite;
 if(mirror)o.front=o.front==VK_FRONT_FACE_CLOCKWISE?VK_FRONT_FACE_COUNTER_CLOCKWISE:VK_FRONT_FACE_CLOCKWISE;
 o.depthBias=c.depthBias!=0;o.constantBias=c.depthBias*kDepthBiasUnits;o.slopeBias=0;for(auto&v:o.blendConstants)v=c.blendFactor;
 return true;
}
bool Textures(const wxlvk::vk::pipelines::detail::Draft&d,uint32_t cubes,BorrowTexture borrow,void*user,Texture out[16]){
 if(!borrow||d.writeCount>16)return false;for(uint32_t i=0;i<16;++i)out[i]={};
 for(uint32_t i=0;i<d.writeCount;++i){const uint32_t slot=d.bindings[i];const uint64_t identity=d.setWords[1+i]&0xffffffffull;if(slot>=16||!identity||!borrow(user,slot,identity,out[slot]))return false;
  auto&t=out[slot];t.view=d.images[i].imageView;t.sampler=d.images[i].sampler;t.layout=d.images[i].imageLayout;t.identity=identity;t.cube=(cubes&(1u<<slot))!=0;
 }return true;
}
bool PrepareNativeFrame(Renderer&r){
 namespace present=wxlvk::native::present;if(!present::FrameOpen())return false;
 if(!r.BeginFrame(present::Slot(),present::Serial(),present::Completed()))return false;
 return r.PrepareUploads(present::PrePass(),present::Serial(),present::Completed());
}
Context DrawContext(const wxlvk::draw::Cmd&c,VkCommandBuffer cmd,VkRenderPass pass){
 Context out;out.cmd=cmd;out.pass=pass;out.slot=wxlvk::native::present::Slot();out.serial=wxlvk::native::present::Serial();out.viewport=c.viewport;out.scissor=c.scissor;return out;
}
void InvalidateNativeBindings(){wxlvk::vk::pipelines::InvalidateBindings();}
}
