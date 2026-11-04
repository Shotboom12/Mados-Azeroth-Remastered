// SPDX-License-Identifier: GPL-3.0-or-later
// Native, isolated mathematics adapted from the user-provided Seyris sources.
// No binary offsets, injection, weather setter, water renderer, or second draw system.
#pragma once
#include <array>
#include <cstddef>
#include <cstdint>
#include <string>
#include <vector>
namespace HD::Seyris {
struct V3 {float x=0,y=0,z=0;};
struct alignas(16) V4 {float x=0,y=0,z=0,w=0;};
float Saturate(float);float SmoothStep(float);bool Finite(V3);
enum Feature:uint32_t {Wind=1,Actors=2,Roots=4,Density=8,Batching=16,Thinning=32,Wetness=64,Snow=128,FogFields=256,FogWake=512,LightPolicy=1024,Editor=2048};
constexpr uint32_t AllFeatures=4095;
struct Gates {uint32_t requested=0,rendererVerified=0;uint32_t Active()const{return requested&rendererVerified&AllFeatures;}bool Needs(uint32_t x)const{return(Active()&x)!=0;}};
// Reading a table does NOT certify a renderer. Only the verified bridge sets rendererVerified.
class Cdbc {
public:bool Parse(const void*,size_t);bool Load(const char*);uint32_t Rows()const{return rows_;}uint32_t Columns()const{return columns_;}uint32_t U32(uint32_t,uint32_t,uint32_t fallback=0)const;float F32(uint32_t,uint32_t,float fallback=0)const;const char*Text(uint32_t,uint32_t)const;
 const std::string&Error()const{return error_;}
private:std::vector<uint8_t>bytes_;uint32_t rows_=0,columns_=0,stride_=0,strings_=0;std::string error_;
};
struct Place {int map=-1;uint32_t areas[16]{};uint32_t areaCount=0;}; // subarea -> zone -> parent
struct DensityValues {float multiplier=1,radius=0,spread=1;};
DensityValues ResolveDensity(const Cdbc&,const Place&,uint32_t doodad,uint32_t effect);
DensityValues CapDensity(DensityValues,float multiplierMax=4,float radiusMax=150,float spreadMax=3);
float ThinShare(float distance,float start=150,float end=800,float minimum=.25f);
uint32_t ThinCount(uint32_t,float share);uint32_t DensityCopies(float multiplier);uint32_t CopiesAtDistance(DensityValues,float distance,bool originValid=true);
struct MeshPoint {V3 position;float u=0,v=0;};
struct RootMapping {float rootV=1,inverseSpan=-1,wind=1,push=1,height=0;bool valid=false,flat=false;};
RootMapping AnalyzeRoots(const MeshPoint*,size_t,const uint16_t*,size_t);
float BendWeight(float uvV,V4 mapping,float anchor=.15f);
struct Actor {V3 position;float radius=.5f;uint64_t key=0;bool mounted=false;};
uint32_t SelectActors(const Actor*,size_t,V3 player,std::array<V4,16>&,float radiusScale=2,float mountedScale=2,float minimum=.5f);
enum WindField {GroundMin,GroundMax,AloftMin,AloftMax,AloftHeight,WeatherInfluence,GustStrength,GustFrequency,TerrainWeight,LockedDirection,LockStrength,WindFields};
struct WindProfile {float p[WindFields]{};};
WindProfile ResolveWind(const Cdbc&,const Place&);
struct WindSample {float x=0,y=0,gust=0;};
class WindModel {
public:void Reset();void Update(const WindProfile&,int map,float weather,double seconds,double dt);WindSample At(V3,float open=1,float lee=1,float height=0)const;
private:WindProfile current_{};bool initialized_=false;int map_=-1;double seconds_=0;float ground_=0,aloft_=0,bearing_=0;
};
// Exact std140 layout, 4 parameter rows + 64 grid samples + 16 actor rows.
struct alignas(16) MotionBlock {V4 gridInfo{},sway{.35f,.08f,.5f,.15f},player{},options{};std::array<V4,64>grid{};std::array<V4,16>actors{};};
static_assert(sizeof(MotionBlock)==1344&&offsetof(MotionBlock,grid)==64&&offsetof(MotionBlock,actors)==1088,"native GLSL layout");
// Feed UNWEIGHTED native components, so selecting candidates never doubles the old motion.
V3 EvaluateMotion(const MotionBlock&,V3 world,float uvV,V4 mapping,V3 legacyWind,V3 legacyActors,float legacyWeight);
void BuildGrid(const WindModel&,V3 player,double seconds,float flutterSpeed,MotionBlock&,const float*openness=nullptr,const float*lee=nullptr);
// Fixed world-cell cache for the source's .35-second wind easing. No hash-map growth.
class GridHistory {
public:void Reset();void Apply(MotionBlock&,int map,double seconds,double dt);
private:struct Cell{int x=0,y=0;bool valid=false;V4 value{};};std::array<Cell,256>cells_{};int map_=-1;double seconds_=-1;
};
struct BatchKey {uint64_t texture=0,model=0,material=0,pipeline=0;uint32_t page=0,shadowVariant=0,flags=0;};
bool SameBatch(const BatchKey&,const BatchKey&);
struct DrawRange {BatchKey key;uint32_t first=0,count=0;};
// Caller supplies scratch/output; no allocations. flags bit0 = order-sensitive: no sorting.
size_t PlanBatches(const DrawRange*,size_t,DrawRange*scratch,size_t capacity,uint32_t maxRanges=32);
struct CacheKey {uint64_t sceneEpoch=0,stableModel=0,placementGeneration=0,materialGeneration=0;uint32_t densityGeneration=0,formatVersion=0;};
bool SameCache(const CacheKey&,const CacheKey&);
class Budget {public:void Begin(double nowMs,double limitMs,size_t bytes,size_t maxBytes);bool CanBuild(double nowMs,size_t newBytes)const;private:double start_=0,limit_=0;size_t bytes_=0,max_=0;};
}
