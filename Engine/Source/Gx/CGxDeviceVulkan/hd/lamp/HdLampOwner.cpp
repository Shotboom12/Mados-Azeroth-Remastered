// SPDX-License-Identifier: GPL-3.0-or-later
#include "HdLampOwner.h"
#include "wxl/VkRenderApi.h"
#ifdef WXL_VK_LAMP_DELTA_CONTRACT
#include "HdLampHooks.h"
#include "../HdVulkanLocalShadow.h"
#include "../HdVulkanLocalShadowReceiver.h"
#include "wxl/Script.hpp"
#include "common/ModulePath.hpp"
#include "native/Present.hpp"
#include "WoW/Source/WorldClient/World.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include <fstream>
#include <iterator>
namespace HD::Lamp::Owner {
namespace {
const WXL_VkRenderApi*api=nullptr;void*pin=nullptr,*publisher=nullptr;bool requested=false,shaders=false;PFN_vkCmdPipelineBarrier barrier=nullptr;
namespace LS=HD::VulkanLocalShadow;namespace RX=HD::VulkanLocalShadowReceiver;
bool Want(){return shaders&&Native::ProducerEnabled()&&RX::WantsContribution();}
LS::Light Light(){LS::Light l;float xyz[3]{};float radius=12;l.key=Native::FrameLight(xyz,radius);l.position={xyz[0],xyz[1],xyz[2]};l.radius=radius;return l;}
void __cdecl Pin(void*,const WXL_VkRenderContext*ctx){if(ctx&&Want())LS::SetFrameLight(ctx->serial,Light());}
int __cdecl Wanted(void*){return Want()&&Native::FrameSafe()?1:0;}
void __cdecl Publish(void*,const WXL_VkStageContext*ctx){
 if(!ctx||!Want()||!Native::FrameSafe())return;WXL_VkGBuffer g{};g.structSize=sizeof g;
 if(!api->GetGBuffer(&g)||g.structSize<offsetof(WXL_VkGBuffer,lampDeltaContract)+sizeof(g.lampDeltaContract)||g.serial!=ctx->serial||!g.lampDeltaView||g.lampDeltaFormat!=VK_FORMAT_R32G32B32A32_UINT||g.lampDeltaContract!=RX::kPackedSunLampV3||g.layout!=VK_IMAGE_LAYOUT_GENERAL||g.extent.width!=ctx->extent.width||g.extent.height!=ctx->extent.height)return;
 LS::Snapshot map;if(!LS::GetFrameMap(ctx->serial,map))return;auto light=Light();if(!light.key||light.key!=map.key)return;
 RX::Contribution delta;if(!RX::MakeToken(*ctx,light,delta.token))return;
 if(!barrier)return;VkMemoryBarrier b{VK_STRUCTURE_TYPE_MEMORY_BARRIER};b.srcAccessMask=VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT;
 barrier(ctx->cmd,VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,0,1,&b,0,nullptr,0,nullptr);
 delta.view=g.lampDeltaView;delta.format=g.lampDeltaFormat;delta.layout=g.layout;delta.contract=g.lampDeltaContract;RX::PublishDelta(delta);
}
}
bool Init(){if(api)return true;Native::Init();
 std::ifstream f(wxlvk::path::Resolve("shaders\\translated\\manifest.txt"),std::ios::binary);std::string text((std::istreambuf_iterator<char>(f)),{});shaders=text.find("# HD-LAMP-DELTA 3")!=std::string::npos;
 api=wxl::ScriptMgr::GetInterface<const WXL_VkRenderApi>(WXL_VK_RENDER_API_NAME,WXL_VK_RENDER_API_VERSION);if(!api||api->structSize<offsetof(WXL_VkRenderApi,ReplayWorldViews)+sizeof api->ReplayWorldViews||!api->RegisterPass||!api->RegisterStage||!api->RequestGBuffer||!api->GetGBuffer){api=nullptr;return false;}
 WXL_VkDeviceInfo device{};device.structSize=sizeof device;if(!api->GetDeviceInfo||!api->GetDeviceInfo(&device)){api=nullptr;return false;}
 barrier=reinterpret_cast<PFN_vkCmdPipelineBarrier>(device.getDeviceProcAddr(device.device,"vkCmdPipelineBarrier"));if(!barrier){api=nullptr;return false;}
 Native::SetProducerReady(shaders);
 // Pin must be registered BEFORE the atlas build pass, whose MidPass reads the same exact light.
 WXL_VkRenderPassDesc p{};p.structSize=sizeof p;p.MidPass=Pin;pin=api->RegisterPass(WXL_VK_POINT_AFTER_OPAQUE_WORLD,&p,"HD.Lamp.Pin");
 if(!pin||!LS::Init()||!RX::Init()){Shutdown();return false;}
 WXL_VkStageDesc d{};d.structSize=sizeof d;d.point=WXL_VK_POINT_AFTER_OPAQUE_WORLD;d.order=45;d.Wanted=Wanted;d.Run=Publish;publisher=api->RegisterStage(&d,"HD.Lamp.Publish");if(!publisher){Shutdown();return false;}return true;
}
void Prepare(){if(!api)return;auto p=DayNight::g_dnInfo.m_cameraPos;Native::BeginFrame(wxlvk::native::present::Serial(),reinterpret_cast<uintptr_t>(World::s_m2Scene),p.x,p.y,p.z);
 bool want=Want();if(requested!=want){api->RequestGBuffer(want?1:0);requested=want;}LS::Resize();
}
bool Shutdown(){Native::SetProducerReady(false);if(!api)return true;if(requested){api->RequestGBuffer(0);requested=false;}if(publisher){api->UnregisterStage(publisher);publisher=nullptr;}if(pin){api->UnregisterPass(pin);pin=nullptr;}
 bool a=RX::Shutdown(),b=LS::Shutdown();if(a&&b){api=nullptr;shaders=false;return true;}return false;
}
}
#else
namespace HD::Lamp::Owner {bool Init(){return true;}void Prepare(){}bool Shutdown(){return true;}}
#endif
