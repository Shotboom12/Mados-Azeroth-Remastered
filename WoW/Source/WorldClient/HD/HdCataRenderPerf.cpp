#include "Engine/Source/Base/HdCpuF.h" // CPU-F
#include <windows.h>
// HD: main-thread CPU times, inclusive scopes; no Vulkan queries or presentation waits.
#include "HdCataRenderPerf.h"
#include <array>
#include <chrono>
#include <cstdio>
#include <cstring>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Event/EvtPerf.h"
#include "Engine/Source/Model2/HdM2Count.h"
#include <string>
namespace HD::CataRenderPerf {
namespace {
constexpr size_t NS=size_t(Stage::Count),NC=size_t(Counter::Count);
struct Timing {uint64_t ns=0,calls=0,maximum=0;};
std::array<Timing,NS> timing{};std::array<uint64_t,NC> counters{};
bool enabled=false,initialized=false;uint64_t window=0,frames=0,lastFrame=0;CVar*info=nullptr;FILE*logFile=nullptr;
constexpr const char* names[NS]={"render","prepareMap","wmoPrepare","terrain","wmoDraw","horizon","horizonCull","sortCull","entities","detailDoodads","m2Animate","shadows","rootWait","groupWait",
 "frame","worldFrame","m2Opaque","m2Alpha","drawLists","hdOpaque","liquid","spells","postFx",
 "grassLights","grassConstants","grassDraw","grassFill",
 "cullVolumes","cullChunks","cullGroups","cullLiquid","cullEntitys","cullDoodads","cullOcclusion","cullHorizon","cullChunkDoodads","cullChunkPrep",
 "loopWait","loopUpdate","loopTimer","loopInput","loopPoll","loopQueue","loopIdle","loopPaint","present",
 "idleWorld","idleUi","luaGc","pollNet",
 "shadowDyn","shadowGather","shadowTerrainQ0","shadowTerrainQ1","shadowTerrainQ2","shadowBand0","shadowBand1","shadowBand2","grassBake","shadowQGatherCall","shadowQEntities","shadowQMapObj","shadowRGroups","shadowROptimize","shadowRBillboards","shadowRModels"}; // lot H2: grassBake
static_assert(size_t(Stage::Present)-size_t(Stage::LoopWait)==EVTPERF_PRESENT,"Stage loop order must follow EvtPerfPhase");
constexpr const char* counterNames[NC]={"wmoDefs","wmoGroups","rootWaits","groupWaits","asyncReads","horizonAll","horizonCandidates","horizonFallbacks","horizonMismatch","grassChunks","grassDraws","grassFills","grassSingleModel","grassMixedModels","grassInsts","grassPackVertices","grassPackAcquires","grassPackFull","grassPackIndices","grassPackIndexFull","grassPackEvicts","grassFillSkipped","cullChunksTested","cullChunksKept","cullClipUpdates","cullDoodadsTested","terrainStreamed","terrainPoolFull",
 "m2Batchable","m2NoCacheFlag","m2NoModelFlag","m2OneBoneOnly","m2NoBatchFlag","m2LocalLights","m2Transparent","m2Projected","m2BatchDraws","m2BatchInstances","m2ShadowDraws","m2ShadowDrawNs","m2ShadowConstNs",
 "doodadsTo100","doodads100To300","doodads300To600","doodadsBeyond600","shadowQChunks","shadowQDoodads","shadowQGathers","shadowBatchOneBone","shadowBatchBoned","shadowBandGroups",
 "shadowStaticCandidates","shadowDynamicCandidates","shadowStaticLayerHits","shadowStaticLayerBuilds",
 "shadowStaticBuildSun","shadowStaticBuildCenter","shadowStaticBuildList","shadowStaticBuildSettings","shadowStaticCacheable"};
static_assert(size_t(Counter::M2ShadowConstNs)-size_t(Counter::M2Batchable)+1==HDM2Count::Count,"lot I1: Counter::M2* must follow HDM2Count order");
// Spike recorder: per scheduler pass sums; a pass much longer than the usual one is written to
// Logs/CataRenderSpikes.log with every stage and counter of that pass (lines kept in memory, written every 2 s).
std::array<uint64_t,NS> passNs{};std::array<uint64_t,NC> passCounters{};uint64_t lastPass=0,enabledAt=0;double usualMs=0.0;
std::string spikes;unsigned spikeLines=0,spikeDropped=0;FILE*spikeFile=nullptr;
constexpr unsigned kSpikeLinesPerWindow=40;
uint64_t Now(){return uint64_t(std::chrono::duration_cast<std::chrono::nanoseconds>(std::chrono::steady_clock::now().time_since_epoch()).count());}
struct CpuFSnapshot { uint64_t main=0, process=0, cycles=0, session=0; bool valid=false; };
CpuFSnapshot cpuFStart; uint32_t cpuFMode=0,cpuFProof=0;
uint64_t CpuFTicks(const FILETIME& t) { return (uint64_t(t.dwHighDateTime)<<32)|t.dwLowDateTime; }
CpuFSnapshot CpuFRead() {
 CpuFSnapshot out; FILETIME created,exited,kernel,user;
 if(!GetThreadTimes(GetCurrentThread(),&created,&exited,&kernel,&user))return out;
 out.main=CpuFTicks(kernel)+CpuFTicks(user);
 if(!GetProcessTimes(GetCurrentProcess(),&created,&exited,&kernel,&user))return out;
 out.process=CpuFTicks(kernel)+CpuFTicks(user);out.session=CpuFTicks(created);
 ULONG64 cycles=0;if(!QueryThreadCycleTime(GetCurrentThread(),&cycles))return out;
 out.cycles=cycles;out.valid=true;return out;
}
void Reset(){
 timing={};counters={};frames=0;window=Now();
 cpuFMode=HD::CpuF::mode.load();cpuFProof=HD::CpuF::proof.load();cpuFStart=CpuFRead();
}
void ResetPass(){passNs={};passCounters={};}
void CloseLog(){if(logFile){std::fclose(logFile);logFile=nullptr;}if(spikeFile){std::fclose(spikeFile);spikeFile=nullptr;}}
void WriteSpikes(){
 if(spikes.empty()&&!spikeDropped)return;
 if(!spikeFile)spikeFile=std::fopen("Logs/CataRenderSpikes.log","ab");
 if(spikeFile){
  std::fputs(spikes.c_str(),spikeFile);
  if(spikeDropped)std::fprintf(spikeFile,"(%u more spike(s) in this window not written)\r\n",spikeDropped);
  std::fflush(spikeFile);
 }
 spikes.clear();spikeLines=0;spikeDropped=0;
}
// Start of a main-thread scheduler pass: the previous pass (sleep included) is checked against the usual pass time.
void LoopStart(){
 if(!enabled){lastPass=0;return;}
 const uint64_t now=Now();
 if(lastPass){
  const double ms=(now-lastPass)/1e6;
  const bool sleeping=passNs[size_t(Stage::LoopWait)]>uint64_t(ms*0.5e6); // FPS cap or background: not a hitch
  if(usualMs>0.0&&ms>16.0&&ms>1.4*usualMs&&!sleeping){ // Claude 2026-11-04 lot C2: was 25 ms and 2x, the turning hitches are 16-18 ms
   if(spikeLines<kSpikeLinesPerWindow){
    char line[256];
    std::snprintf(line,sizeof line,"t=%.3fs pass_ms=%.2f usual_ms=%.2f |",(lastPass-enabledAt)/1e9,ms,usualMs);
    spikes+=line;
    for(size_t i=0;i<NS;++i)if(passNs[i]>=200000){std::snprintf(line,sizeof line," %s=%.2f",names[i],passNs[i]/1e6);spikes+=line;}
    spikes+=" |";
    for(size_t i=0;i<NC;++i)if(passCounters[i]){std::snprintf(line,sizeof line," %s=%llu",counterNames[i],static_cast<unsigned long long>(passCounters[i]));spikes+=line;}
    spikes+="\r\n";++spikeLines;
   }else ++spikeDropped;
  }else usualMs=usualMs>0.0?usualMs*0.95+ms*0.05:ms; // spikes do not raise the usual time
 }
 lastPass=now;ResetPass();
}
uint64_t HookBegin(){return enabled?Now():0;}
void HookEnd(uint32_t phase,uint64_t start){if(phase<EVTPERF_COUNT)End(Stage(size_t(Stage::LoopWait)+phase),start);}
bool Toggle(CVar*,const char*,const char*s,void*){
 if(!s||!(std::strcmp(s,"0")==0||std::strcmp(s,"1")==0))return false;
 enabled=s[0]=='1';HDM2Count::on=enabled;for(auto&x:HDM2Count::n)x=0;Reset();lastFrame=0;lastPass=0;usualMs=0.0;enabledAt=Now();ResetPass();
 if(!enabled)WriteSpikes();
 if(!enabled){CloseLog();if(info)info->Set("off",true,false,false,false);}return true;
}
double Ms(Stage s,double f){return timing[size_t(s)].ns/1e6/f;}
// Claude GPU0 (mesure) : la pile des zones du moteur, sur le thread principal seulement.
constexpr int kZoneDepth=16;Stage zoneStack[kZoneDepth];int zoneDepth=0;int zoneBand=-1;
const char* ZoneName(Stage s){
 switch(s){
  case Stage::WorldFrame: return "moteur : monde (autre)";
  case Stage::Terrain: return "moteur : terrain";
  case Stage::WmoDraw: return "moteur : WMO (batiments)";
  case Stage::Horizon: return "moteur : horizon";
  case Stage::DetailDoodads: return "moteur : herbe";
  case Stage::M2Opaque: return "moteur : M2 opaques";
  case Stage::M2Alpha: return "moteur : M2 transparents";
  case Stage::DrawLists: return "moteur : listes de dessin";
  case Stage::HdOpaque: return "moteur : HD opaque";
  case Stage::Liquid: return "moteur : eau";
  case Stage::Spells: return "moteur : sorts";
  case Stage::PostFx: return "moteur : post-traitement";
  case Stage::Shadows: return "ombres soleil : hors bandes";
  default: return nullptr;
 }
}
const char* const kBandNames[3]={"ombres soleil : bande 0 (40 yd)","ombres soleil : bande 1 (160 yd)","ombres soleil : bande 2 (640 yd)"};
const char* ZoneTop(){
 if(zoneBand>=0&&zoneBand<3)return kBandNames[zoneBand];
 return zoneDepth?ZoneName(zoneStack[zoneDepth-1]):"hors monde (interface, presentation)";
}
}
bool ZonePush(Stage s){
 const char* n=ZoneName(s);
 if(!n||zoneDepth>=kZoneDepth||!HD::GpuZones::OnMain())return false;
 zoneStack[zoneDepth++]=s;HD::GpuZones::Zone(ZoneTop());return true;
}
void ZonePop(){if(zoneDepth>0)--zoneDepth;HD::GpuZones::Zone(ZoneTop());}
void ZoneBand(int band){
 if(!HD::GpuZones::on||!HD::GpuZones::OnMain()){zoneBand=-1;return;}
 zoneBand=band;HD::GpuZones::Zone(ZoneTop());
}
void Initialize(){
 if(initialized)return;
 CVar*toggle=CVar::Register("hdCataRenderPerf","HD: CPU stages; Logs/CataRenderPerf.log every 2s, no FPS limit changes",1,"0",Toggle,CATEGORY_GRAPHICS,false,nullptr,false);
 {static bool hdDef1Once=false;if(!hdDef1Once){hdDef1Once=true;if(toggle&&toggle->m_intValue!=0)toggle->InternalSet("0",true,false,false,false);}} // Claude DEF1: diagnostic journal off at every start (a test never leaves it on)
 info=CVar::Register("hdCataRenderPerfInfo","HD: last CPU measurements (milliseconds per scene render)",0,"off",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
 initialized=true;enabled=toggle&&toggle->m_intValue!=0;HDM2Count::on=enabled;Reset();enabledAt=Now();
 g_evtPerf={HookBegin,HookEnd,LoopStart};
}
void Shutdown(){g_evtPerf={};HDM2Count::on=false;WriteSpikes();enabled=false;initialized=false;CloseLog();info=nullptr;Reset();}
bool Enabled(){return enabled;}
uint64_t Begin(){return enabled?Now():0;}
void End(Stage stage,uint64_t start){
 if(!enabled||!start||size_t(stage)>=NS)return;
 const auto elapsed=Now()-start;auto&t=timing[size_t(stage)];t.ns+=elapsed;++t.calls;if(elapsed>t.maximum)t.maximum=elapsed;
 passNs[size_t(stage)]+=elapsed;
}
void Add(Counter c,uint64_t n){if(enabled&&size_t(c)<NC){counters[size_t(c)]+=n;passCounters[size_t(c)]+=n;}}
// Wall time from one scene render to the next: everything the client does for one image, present and caps included.
void FrameStart(){
 if(!enabled){lastFrame=0;return;}
 const uint64_t now=Now();if(lastFrame)End(Stage::Frame,lastFrame);lastFrame=now;
}
void FrameEnd(){
 if(!enabled)return;
 // Never label a window containing both optimization modes as a clean A/B sample.
 if(cpuFMode!=HD::CpuF::mode.load()||cpuFProof!=HD::CpuF::proof.load()){Reset();return;}
 ++frames;const uint64_t now=Now();if(now-window<2000000000ull)return;
 const CpuFSnapshot cpuFEnd=CpuFRead();
 const double f=frames?double(frames):1.0;char text[768];
 for(uint32_t i=0;i<HDM2Count::Count;++i){counters[size_t(Counter::M2Batchable)+i]+=HDM2Count::n[i];HDM2Count::n[i]=0;} // lot I1
 std::snprintf(text,sizeof text,"image %.2fms; world %.2f (scene %.2f, M2 %.2f+%.2f, lists %.2f, grass %.2f, HD %.2f, liquid %.2f, spells %.2f, post %.2f); outside world %.2f; grass: lights %.2f, consts %.2f, draw %.2f, fill %.2f, %.0f chunks %.0f draws %.1f fills; frames %llu",
 Ms(Stage::Frame,f),Ms(Stage::WorldFrame,f),Ms(Stage::Render,f),Ms(Stage::M2Opaque,f),Ms(Stage::M2Alpha,f),Ms(Stage::DrawLists,f),Ms(Stage::DetailDoodads,f),
 Ms(Stage::HdOpaque,f),Ms(Stage::Liquid,f),Ms(Stage::Spells,f),Ms(Stage::PostFx,f),Ms(Stage::Frame,f)-Ms(Stage::WorldFrame,f),
 Ms(Stage::GrassLights,f),Ms(Stage::GrassConstants,f),Ms(Stage::GrassDraw,f),Ms(Stage::GrassFill,f),
 counters[size_t(Counter::GrassChunks)]/f,counters[size_t(Counter::GrassDraws)]/f,counters[size_t(Counter::GrassFills)]/f,static_cast<unsigned long long>(frames));
 if(info)info->Set(text,true,false,false,false);
 if(!logFile)logFile=std::fopen("Logs/CataRenderPerf.log","ab");
 if(logFile){
  const uint64_t presents=timing[size_t(Stage::Present)].calls;
  const bool valid=cpuFStart.valid&&cpuFEnd.valid&&presents&&cpuFEnd.main>=cpuFStart.main&&cpuFEnd.process>=cpuFStart.process&&cpuFEnd.cycles>=cpuFStart.cycles;
  const double denom=presents?double(presents):1.0;
  std::fprintf(logFile,"CPUF_CPU pid=%lu session=%llu window_ms=%.3f presents=%llu scenes=%llu mode=%u proof=%u valid=%u main_ms_per_present=%.6f process_ms_per_present=%.6f main_cycles_per_present=%.3f\r\n",
   GetCurrentProcessId(),static_cast<unsigned long long>(cpuFEnd.session),(now-window)/1e6,static_cast<unsigned long long>(presents),static_cast<unsigned long long>(frames),cpuFMode,cpuFProof,unsigned(valid),
   valid?(cpuFEnd.main-cpuFStart.main)/10000.0/denom:0.0,
   valid?(cpuFEnd.process-cpuFStart.process)/10000.0/denom:0.0,
   valid?(cpuFEnd.cycles-cpuFStart.cycles)/denom:0.0);
  std::fprintf(logFile,"window_ms=%.3f scenes=%llu; inclusive CPU scopes, render excludes present/cap\r\n",(now-window)/1e6,static_cast<unsigned long long>(frames));
  for(size_t i=0;i<NS;++i)std::fprintf(logFile,"%s ms/scene=%.5f max_call_ms=%.5f calls=%llu\r\n",names[i],timing[i].ns/1e6/f,timing[i].maximum/1e6,static_cast<unsigned long long>(timing[i].calls));
  for(size_t i=0;i<NC;++i)std::fprintf(logFile,"%s=%llu ",counterNames[i],static_cast<unsigned long long>(counters[i]));
  std::fputs("\r\n",logFile);std::fflush(logFile);
 }
 WriteSpikes();
 Reset();
}
}
