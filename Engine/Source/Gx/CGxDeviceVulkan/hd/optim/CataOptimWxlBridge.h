#pragma once
#include "CataOptimRenderer.h"
namespace wxlvk::draw {struct Cmd;}
namespace wxlvk::vk::pipelines::detail {struct Draft;}
namespace HD::CataOptim::WxlBridge {
// Snapshot synchronously while Cmd rows still exist. Reject bone/high-window and fixed-function paths.
bool Registers(const wxlvk::draw::Cmd&,RegisterBlock&);
bool ShaderHashes(const wxlvk::vk::pipelines::detail::Draft&,char vertexMd5[33],char pixelMd5[33]);
bool CompatibleDrawState(const wxlvk::draw::Cmd&,const wxlvk::draw::Cmd&);
// Reuses wxl's ACTUAL render-state tables. Set shader code/masks/kind/pass separately from shaders.json.
bool RenderState(const wxlvk::draw::Cmd&,ProgramDesc&,bool mirror=false);
// Called after native Textures() resolved replacement/idle stages. Host supplies retained image ownership by identity.
using BorrowTexture=bool(*)(void*user,uint32_t slot,uint64_t identity,Texture&owner);
bool Textures(const wxlvk::vk::pipelines::detail::Draft&,uint32_t cubeMask,BorrowTexture,void*user,Texture output[16]);
// Safe before the first takeover draw, not only in an AfterOpaqueWorld callback.
bool PrepareNativeFrame(Renderer&);
Context DrawContext(const wxlvk::draw::Cmd&,VkCommandBuffer,VkRenderPass);
void InvalidateNativeBindings(); // call after any successful replacement draw or replay callback
}
