#pragma once
#include "source/config.h"
#include "source/engine.h"
#include <array>
#include <cstdint>
namespace HD::Lumen {
struct Controls {
 bool lamps=false,fog=false,halos=false,ambiance=false,spells=false,shafts=false,memory=false,terrain=false;
 int quality=2,lampCount=32,lantern=0;bool tileLists=true,blur=true;
 float lampGain=1,haloGain=1,spellGain=1,density=1,shaftGain=1,temporal=.85f;
 int lampView=0; // Claude LV11: hdLvLampView, 1 = lamp diagnostic view on the lit surfaces
 int lampOpt=0,lampOptCheck=0;
 int cubeAside=1; // Claude CPU-A hdLvCubeAside: 0 inline, 1 the cubes' replays on the replay thread, 2 proof, 3 control
 int fogFast=1; // Claude BRUME1 hdBrume1: 1 = the fog march without what is worth nothing (same image), 0 = before
 int cubeSkin=1; // Claude ANIM1 hdLvCubeSkin: 1 = each unit animated once a frame for the lamp cubes, 0 = before (animated per face), 2 proof, 3 control
 int cubePersos=1; // Claude MESURE hdLvCubePersos: 0 = no unit drawn in the lamp cubes (their shadows gone), to measure the cost
 int waterCull=1; // Claude EAU3 hdLvWaterCull: 1 = skip the lamps whose glint is exactly 0 at a pixel, 0 = before (EAU2), 2 proof, 3 control
 int waterTiles=1; // Claude EAU4 hdLvWaterTiles: 1 = the same skip once per 8x8 tile (bounded test), 0 = before (EAU3), 2 proof, 3 control
 int waterOpt=1; // Claude EAU1 hdLvWaterOpt: 1 = each 8x8 group keeps once the lamps that light the water (same test, same order), 0 = before, 2 proof, 3 control
 int persoReach=1; // Claude PERSO2 hdLvPersoReach: 1 = the units' layer of a lamp cube only within the light's reach on surfaces, 0 = the whole cube (before)
 int normalCheck=2; // Claude LV18/LV20: hdLvNormalCheck (default 2 since LV21: ground and buildings take the shape's normal)
 float lampPostClear=.7f; // Claude LV21: hdLvLampPostClear, yards around a lamp's own post that never shadow its light
 // Claude LV22 hdLvLampCubes: 0 = screen-space lamp shadow (before LV22), 1 = shadow cubes (a lamp without its cube: no shadow),
 // 2 = shadow cubes, the screen-space shadow for a lamp without its cube. Size/updates/range/near: hdLvLampCube*.
 int lampCubes=1,lampCubeSize=256,lampCubeUpdates=2;float lampCubeRange=32,lampCubeNear=.5f;
 float lampCubeOwn=1.5f; // Claude LV23: hdLvLampCubeOwn, yards under a lamp's light whose model (its brazier, its cage) stays out of its cube
 // Claude LV24: hdLvLampCubeNearZ, yards left out of the cube's up and down faces only (0 = hdLvLampCubeNear, LV23 exact);
 // hdLvLampCubeProbe: each new value writes the nearest lamp's cube to Logs\lumen-cube-N.bin/.txt (measure only, 0 at every start).
 float lampCubeNearZ=0;int lampCubeProbe=0;float lampSource=1; // Claude LV39: hdLvLampSource, 0 hard .. 4
 float carrierClear=1.2f; // Claude LV39: hdLvCarrierClear
 // Claude LV25: hdLvLampCubeCull, the cube drawn with each draw's own face culling (its material's): 0 = both faces (LV24),
 // 1 = own culling, 2 = own culling with the front face reversed (the cube views' winding). A lamp sees its lantern from inside.
 // Measured 2026-11-15: 2 is the right winding (1 drops the ground and the walls, 2 keeps them and drops only the lanterns).
 int lampCubeCull=2;
 int boundsCheck=0; // Claude PREUVE1: hdShadowBoundsCheck, the cubes drawn again with the bound before PERF2 and compared bit for bit
 // Claude LV27: hdLvWaterLamps, the lamps reflected on the water (Lumenveil 0.1.1 water_lamps): 1 = the Cata water writes its
 // depth and a pass after the liquids adds each lamp's glint; 0 = before LV27 (the water draws exactly as before).
 int waterLamps=1;float waterLampGain=.35f,waterLampRough=.02f;int waterLampWaves=1; /* Claude LV28: the Cata water's own waves */
 // Claude LV29: hdLvWaterLampShadow, a reflection only where its lamp sees the water: 1 = hidden by the scenery, 0 = never
 // hidden (to compare), 2 = hidden, and the light taken away painted red (to see what the scenery hides).
 int waterLampShadow=1;
 // Preserved palette: these values belong to the player/native scene, not a foreign grade.
 std::array<float,3> lanternColour{1,.55f,.2f};
 void Clamp();
};
struct ControlSpec {const char*name;float initial,low,high;const char*label;};
const ControlSpec* ControlSpecs(size_t& count);
Source::Config SourceConfig(const Controls&,const Source::Config* numericAmbiance=nullptr);
enum ResetReason:uint32_t {First=1,Extent=2,Map=4,Clock=8,Camera=16,Mode=32,Light=64,Jitter=128};
struct HistoryKey {uint32_t width=0,height=0,mode=0;int map=0;double seconds=0;float position[3]{},direction[3]{0,0,1};uint32_t jitterConvention=0;};
class HistoryGuard {public:uint32_t Step(const HistoryKey&);void Reset(){valid_=false;}private:HistoryKey prev_{};bool valid_=false;};
struct DepthMapping {float atInfinity=0,perInverseDepth=0,deepest=1;bool reversed=false;};
// Native wxl projection is D3D 0..1. Upstream FrameInputs uses the equivalent GL -1..1 z mapping.
bool MapNativeProjection(const float* d3dProjection,float minZ,float maxZ,float* glProjection,DepthMapping&);
// Generic async CPU metadata ring: never waits and never consumes an unfinished or overwritten capture.
class ReadbackRing {
public:static constexpr unsigned Count=3;int Acquire(uint64_t completed);bool Submit(unsigned,uint64_t serial);int OldestReady(uint64_t completed)const;void Consume(unsigned);bool Empty()const;
private:std::array<uint64_t,Count> serials_{};std::array<bool,Count> reserved_{};
};
}
