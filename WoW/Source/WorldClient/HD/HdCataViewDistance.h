// SPDX-License-Identifier: GPL-3.0-or-later
// HD: Cata 15595 view-distance policy, adapted to the 3.3.5 streaming and CVar owners.
#pragma once
#include <algorithm>
#include <array>
#include <cmath>
#include <cstddef>
#include <cstdint>
namespace HD::CataViewDistance {
constexpr uint64_t OneGiB=0x40000000ull;
constexpr float MinimumFar=183.33333f,MaximumFar=1250.0f,RestrictedFar=727.0f;
// HD: hdCataViewFar may go past Cata's 1250 up to the native 3.3.5 engine maximum (4750/3).
constexpr float ExtendedFar=4750.0f/3.0f;
struct Profile {float farClip, environmentScale;};
// Extracted from Cata WorldParam.cpp. environmentDetail is percent in Cata, a factor in 3.3.5.
inline constexpr Profile Profiles[5]={{185,.5f},{507,.75f},{727,1},{1057,1.25f},{1250,1.5f}};
inline constexpr float FadeEnds[5]={30,100,200,750,2050};
inline constexpr float FadeRanges[5]={5,10,15,20,50};
inline constexpr float FadeSizes[5]={1,4,15,100,100000};
inline float ClampFar(float requested,uint64_t memoryBytes,bool restricted,float normalMaximum=MaximumFar) {
 const float maximum=memoryBytes<=OneGiB||restricted?RestrictedFar:normalMaximum;
 if(!std::isfinite(requested))requested=MinimumFar;
 return std::clamp(requested,MinimumFar,maximum);
}
inline float CataStreamDistance(float farClip,float cornerDistance) {
 // Cata World::PrepareAreaOfInterest: 1.33 rather than 3.3.5's 1.25, 2*far maximum, 266.66666 floor.
 float distance=std::isfinite(cornerDistance)&&cornerDistance>=0?cornerDistance:farClip;
 if(farClip>distance)distance=farClip*1.33f;
 else if(distance>farClip*2)distance=farClip*2;
 return std::max(distance,266.66666f);
}
inline float CataFadeEnd(uint32_t category,float environmentScale) {
 category=std::min(category,4u);return FadeEnds[category]*(category>=1&&category<=3?environmentScale:1.0f);
}
struct PoolEstimate {uint32_t radius=0,chunks=0;uint64_t vertexBytes=0,indexBytes=0;};
inline PoolEstimate EstimatePools(float farClip,uint32_t stride) {
 if(!std::isfinite(farClip)||farClip<MinimumFar||farClip>ExtendedFar)return {};
 PoolEstimate e;e.radius=1+static_cast<uint32_t>(farClip*.03f);e.chunks=(2*e.radius*e.radius+1)&~1u;
 e.vertexBytes=uint64_t(145)*e.chunks*stride;e.indexBytes=uint64_t(768)*e.chunks*2;return e;
}
// The original horizon renderer overran two 256-element arrays when gathering more groups.
// Keep stable input order and flush fixed-capacity batches. No heap allocation, no silent truncation.
template<typename Group,typename Matrix,size_t Capacity=256> struct FixedBatch {
 static_assert(Capacity>0&&Capacity<=0xffffffffu,"valid render batch capacity");
 std::array<Group,Capacity> groups{};std::array<Matrix,Capacity> matrices{};uint32_t count=0;
 template<typename Emit>void Flush(Emit&&emit){if(count){emit(groups.data(),count,matrices.data());count=0;}}
 template<typename Emit>void Push(Group group,Matrix matrix,Emit&&emit){if(count==Capacity)Flush(emit);groups[count]=group;matrices[count]=matrix;++count;}
};
void Initialize();void Shutdown();bool Enabled();
float ResolveFarClip(float requested,int32_t mapId,uint64_t memoryBytes,bool mapKnown,bool restricted,float nativeMaximum);
float StreamingDistance(float farClip,float cornerDistance,float nativeDistance);
float EnvironmentScale(float nativeScale);
float HorizonScale(float nativeScale);
float LargeObjectFadeEnd(float nativeEnd);
}
