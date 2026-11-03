// SPDX-License-Identifier: GPL-3.0-or-later
// HD: extracted policy from wowdecomp15595; no backend-specific graphics calls.
#include "HdCataViewDistance.h"
#include <cmath>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "WoW/Source/WorldClient/World.h"
#include "WoW/Source/WorldClient/WorldParam.h"
#include "WoW/Source/WorldClient/MapChunk.h"
namespace HD::CataViewDistance {
namespace {
bool initialized=false,enabled=false,applying=false;uint32_t preset=4;float customFar=0;
CVar *toggle=nullptr,*quality=nullptr,*info=nullptr,*farOverride=nullptr;char previousInfo[256]{};
void Status(const char*value){if(info&&std::strcmp(value,previousInfo)){std::snprintf(previousInfo,sizeof previousInfo,"%s",value);info->Set(previousInfo,true,false,false,false);}}
bool Parse(const char*s,uint32_t maximum,uint32_t&out){if(!s||!*s)return false;char*end=nullptr;long n=std::strtol(s,&end,10);if(end==s||*end||n<0||n>long(maximum))return false;out=uint32_t(n);return true;}
void Apply(){
 if(!initialized||applying)return;applying=true;
 // Original CVars are READ, never overwritten or archived by this module. Disarming uses their latest values.
 // Same clamps as the native HorizonFarClipScale/EnvironmentDetail callbacks.
 if(CWorldParam::cvar_horizonFarClip)World::SetHorizonFarClipScale(std::clamp(CWorldParam::cvar_horizonFarClip->m_floatValue,3.0f,6.0f));
 if(CWorldParam::cvar_environmentDetail)CWorldScene::ScaleFadeDist(std::clamp(CWorldParam::cvar_environmentDetail->m_floatValue,.5f,1.5f));
 if(CWorldParam::cvar_farClip)World::SetFarClip(CWorldParam::cvar_farClip->m_floatValue);
 if(!enabled)Status("off; native settings active");applying=false;
}
bool Toggle(CVar*,const char*,const char*value,void*){uint32_t n;if(!Parse(value,1,n))return false;if(initialized){enabled=n!=0;Apply();}return true;}
bool Quality(CVar*,const char*,const char*value,void*){uint32_t n;if(!Parse(value,4,n))return false;if(initialized){preset=n;Apply();}return true;}
bool ParseFar(const char*s,float&out){if(!s||!*s)return false;char*end=nullptr;double v=std::strtod(s,&end);if(end==s||*end||!std::isfinite(v)||v<0||v>ExtendedFar)return false;out=v>0?std::max(float(v),MinimumFar):0.0f;return true;}
bool Far(CVar*,const char*,const char*value,void*){float f;if(!ParseFar(value,f))return false;if(initialized){customFar=f;Apply();}return true;}
CVar*Register(const char*name,const char*help,const char*value,bool(*callback)(CVar*,const char*,const char*,void*),uint32_t flags=1){return CVar::Register(name,help,flags,value,callback,CATEGORY_GRAPHICS,false,nullptr,false);}
}
void Initialize(){
 if(initialized)return;
 toggle=Register("hdCataViewDistance","HD: Cata terrain/horizon/large-object view policy, 0 native / 1 Cata","0",Toggle);
 quality=Register("hdCataViewQuality","HD: Cata presets 0 low, 1 fair, 2 good, 3 high, 4 ultra","4",Quality);
 farOverride=Register("hdCataViewFar","HD: exact Cata-mode far clip in yards, 0 = quality preset, max 1583","0",Far);
 info=Register("hdCataViewInfo","HD: effective view policy and pool estimate","off",nullptr,0);
 initialized=true;uint32_t n=0;enabled=toggle&&Parse(toggle->m_stringValue.m_str,1,n)&&n!=0;
 preset=4;if(quality&&Parse(quality->m_stringValue.m_str,4,n))preset=n;
 customFar=0;if(farOverride)ParseFar(farOverride->m_stringValue.m_str,customFar);
 if(enabled)Apply();else Status("off; native settings active");
}
void Shutdown(){if(!initialized)return;enabled=false;Apply();initialized=false;toggle=quality=info=farOverride=nullptr;previousInfo[0]=0;}
bool Enabled(){return initialized&&enabled;}
float ResolveFarClip(float requested,int32_t mapId,uint64_t memoryBytes,bool mapKnown,bool restricted,float nativeMaximum){
 if(!Enabled())return requested;
 float result=customFar>0?ClampFar(customFar,memoryBytes,restricted,ExtendedFar):ClampFar(Profiles[preset].farClip,memoryBytes,restricted);
 // The 15595 Map.dbc flag 0x10000 cannot be assumed to have the same meaning in 12340.
 // Keep a conservative native cap until a 3.3.5 map record is available. Non-outdoor maps use 727.
 if(mapId>=0&&!mapKnown)result=std::min(result,nativeMaximum);
 auto pool=EstimatePools(result,sizeof(CGxVertexPNC));char text[256];
 std::snprintf(text,sizeof text,"Cata q=%u%s map=%d far=%.2f horizon=%.2f largeM2=2050 poolPNC=%.2fMiB%s",preset,customFar>0?" custom":"",mapId,result,result*4,double(pool.vertexBytes+pool.indexBytes)/(1024*1024),restricted?" restricted-map":"");
 Status(text);return result;
}
float StreamingDistance(float farClip,float cornerDistance,float nativeDistance){return Enabled()?CataStreamDistance(farClip,cornerDistance):nativeDistance;}
float EnvironmentScale(float nativeScale){return Enabled()?Profiles[preset].environmentScale:nativeScale;}
float HorizonScale(float nativeScale){return Enabled()?4.0f:nativeScale;}
float LargeObjectFadeEnd(float nativeEnd){return Enabled()?FadeEnds[4]:nativeEnd;}
}
