// SPDX-License-Identifier: GPL-3.0-or-later
#include "HdVulkanModelLights.h"
#include <algorithm>
#include <cmath>
#include <cstring>
#ifndef HD_MODEL_LIGHTS_STANDALONE
#include <cstdio>
#include <windows.h>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/Types.h"
#include "Engine/Source/ShaderEffect/ShaderEffect.h"
#endif
namespace HD::VulkanModelLights {
void Process(Block& b,uint32_t selected,Mode mode,float gain,Stats& stats){
    if(mode==Mode::Off || uint32_t(mode)>3)return;
    ++stats.blocks;if(selected>4)++stats.invalid;uint32_t count=std::min(selected,4u);stats.maxSelected=std::max(stats.maxSelected,count);
    bool lit=false;float scale=std::isfinite(gain)?std::clamp(gain,0.0f,4.0f):1.0f;
    for(uint32_t i=0;i<count;++i){auto&c=b.color[i];
        // Unused/non-point slots can contain stale position/attenuation fields; never inspect them.
        if(c.w<=0 || (c.x==0 && c.y==0 && c.z==0))continue;
        if(!std::isfinite(c.x)||!std::isfinite(c.y)||!std::isfinite(c.z)||!std::isfinite(c.w)){++stats.invalid;continue;}
        float peak=std::max({c.x,c.y,c.z});if(peak>0){lit=true;++stats.activeSlots;stats.peak=std::max(stats.peak,peak);}
        if(mode==Mode::Cut){c.x=c.y=c.z=0;}
        else if(mode==Mode::Gain){float r=c.x*scale,g=c.y*scale,bl=c.z*scale;if(std::isfinite(r)&&std::isfinite(g)&&std::isfinite(bl)){c.x=r;c.y=g;c.z=bl;}else ++stats.invalid;}
    }
    if(lit)++stats.litBlocks;
}
#ifndef HD_MODEL_LIGHTS_STANDALONE
// These are checks of the ACTUAL compiled types, not the x86 offsets in old comments.
static_assert(sizeof(LocalLights)==sizeof(Block),"native light block size changed");
static_assert(sizeof(C4Vector)==sizeof(Vec4),"native vector layout changed");
static_assert(offsetof(LocalLights,m_color)==offsetof(Block,color),"native colour layout changed");
static_assert(offsetof(LocalLights,m_position)==offsetof(Block,position),"native position layout changed");
static_assert(offsetof(LocalLights,m_constantAttenuation)==offsetof(Block,constant),"native attenuation layout changed");
static_assert(offsetof(LocalLights,m_linearAttenuation)==offsetof(Block,linear),"native attenuation layout changed");
static_assert(offsetof(LocalLights,m_quadraticAttenuation)==offsetof(Block,quadratic),"native attenuation layout changed");
namespace {
CVar *mode=nullptr,*gain=nullptr,*info=nullptr;Stats window;bool active=false;ULONGLONG lastReport=0;uint32_t lastMode=0;char lastInfo[256]{};
CVar* Var(const char*name,const char*help,const char*value,uint32_t flags){if(auto*old=CVar::LookupRegistered(name))return old;return CVar::Register(name,help,flags,value,nullptr,CATEGORY_GRAPHICS,false,nullptr,false);}
void Info(const char*value){if(info && std::strcmp(lastInfo,value)){std::snprintf(lastInfo,sizeof lastInfo,"%s",value);info->Set(lastInfo,true,false,false,false);}}
uint32_t CurrentMode(){int value=mode?mode->m_intValue:0;return value>=0&&value<=3?uint32_t(value):0;}
bool Vulkan(){return active && g_theGxDevicePtr && g_theGxDevicePtr->DeviceApi()==GxApi_Vulkan;}
}
void Init(){
    mode=Var("hdModelLightTest","HD: existing M2 point-light diagnostic: 0 off, 1 observe, 2 cut lamps, 3 gain","0",0);
    gain=Var("hdModelLightGain","HD: diagnostic gain in mode 3, 0..4 (1 unchanged)","1",0);
    info=Var("hdModelLightInfo","HD: local model-light diagnostics (constant blocks, not draw counts)","off",0);
    active=true;window={};lastReport=0;lastMode=0;Info("off");
}
void InspectAndFilter(LocalLights& native,uint32_t selected){
    if(!Vulkan())return;auto value=CurrentMode();if(!value)return;
    Block copy;std::memcpy(&copy,&native,sizeof copy);Process(copy,selected,Mode(value),gain?gain->m_floatValue:1,window);
    if(value==2 || value==3)for(uint32_t i=0;i<std::min(selected,4u);++i){native.m_color[i].x=copy.color[i].x;native.m_color[i].y=copy.color[i].y;native.m_color[i].z=copy.color[i].z;}
}
void Tick(){
    if(!Vulkan())return;auto value=CurrentMode();ULONGLONG now=GetTickCount64();
    if(!value){window={};lastMode=0;lastReport=now;Info("off");return;}
    if(value!=lastMode){window={};lastMode=value;lastReport=now;Info("M2 lamps: collecting 500ms of constant blocks");return;}
    if(now-lastReport<500)return;lastReport=now;
    char text[256];const char*name=value==1?"observe (unchanged)":(value==2?"lamps cut":"gain test");
    std::snprintf(text,sizeof text,"M2 %s: %llu blocks, %llu with lamps, max %u selected, peak %.3f, invalid %llu; GPU passes +0",name,
        static_cast<unsigned long long>(window.blocks),static_cast<unsigned long long>(window.litBlocks),window.maxSelected,window.peak,static_cast<unsigned long long>(window.invalid));Info(text);window={};
}
void Shutdown(){active=false;window={};lastReport=0;lastMode=0;Info("off");}
#endif
}
