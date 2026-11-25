// HD: fixed-storage CPU instrumentation for the Cata optimization integration.
#pragma once
#include <cstdint>
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdGpuZones.h"   // Claude GPU0
namespace HD::CataRenderPerf {
enum class Stage:uint32_t {Render,PrepareMap,WmoPrepare,Terrain,WmoDraw,Horizon,HorizonCull,SortCull,Entities,DetailDoodads,M2Animate,Shadows,RootWait,GroupWait,
 // Whole image: wall time between two scene renders, and the world frame's parts outside CWorldScene::Render.
 Frame,WorldFrame,M2Opaque,M2Alpha,DrawLists,HdOpaque,Liquid,Spells,PostFx,
 // Inside the grass pass: per-chunk lights, shader constants, draws, and vertex/index refills.
 GrassLights,GrassConstants,GrassDraw,GrassFill,
 // Inside sortCull (CWorldScene::CullSortTable): its parts, summed over the 64 distance buckets.
 CullVolumes,CullChunks,CullGroups,CullLiquid,CullEntitys,CullDoodads,CullOcclusion,CullHorizon,
 // Inside cullChunks: the chunk's doodads (CullDoodadsExterior) and its render prep (terrain batch, grass creation).
 CullChunkDoodads,CullChunkPrep,
 // Main-thread scheduler pass (Engine/Source/Event/EvtPerf.h, same order as EvtPerfPhase): sleep, update, timers, input,
 // poll handlers, queued events, idle handlers, paint, and the present inside the paint.
 LoopWait,LoopUpdate,LoopTimer,LoopInput,LoopPoll,LoopQueue,LoopIdle,LoopPaint,Present,
 // Inside them: CGWorldFrame::Update and CGGameUI::Idle (idle), the Lua GC step in CGGameUI::Idle, PollNet (poll).
 IdleWorld,IdleUi,LuaGc,PollNet,
 // Claude 2026-11-04 lot S1: native shadows (CShadowCache::Update) split: dynamic part, band gather+query, terrain query per band, render per band.
 ShadowDyn,ShadowGather,ShadowTerrainQ0,ShadowTerrainQ1,ShadowTerrainQ2,ShadowBand0,ShadowBand1,ShadowBand2,
 // Claude 2026-11-05 lot H2: grass vertex/index bake alone (FillVertices + FillIndices). Before H2 they also added to
 // GrassFill inside DetailDoodadPrepareBuffers, so a refill was counted twice there.
 GrassBake,
 // Claude QPROF1: inside the sun query: every GatherModelBatchesShadowMap of the band queries, the entities' gather, the map objects' query.
 ShadowQGatherCall,ShadowQEntities,ShadowQMapObj,
 // Claude QPROF1: inside the sun band render: map object groups, Optimize, billboard turn and restore, model batches.
 ShadowRGroups,ShadowROptimize,ShadowRBillboards,ShadowRModels,Count};
enum class Counter:uint32_t {WmoDefs,WmoGroups,RootWaits,GroupWaits,AsyncReads,HorizonAll,HorizonCandidates,HorizonFallbacks,HorizonMismatch,GrassChunks,GrassDraws,GrassFills,
 // Grass batches by models: one model (the Cata instancing can take them) or several sharing a texture (it cannot).
 GrassSingleModel,GrassMixedModels,GrassInsts,
 // hdGrassPack: vertices given to acquired pairs, and batches that did not fit (stream buffers instead).
 GrassPackVertices,GrassPackAcquires,GrassPackFull,GrassPackIndices,GrassPackIndexFull,GrassPackEvicts,GrassFillSkipped,
 // sortCull work: chunks tested, chunks kept, horizon buffer updates, doodads tested.
 CullChunksTested,CullChunksKept,CullClipUpdates,CullDoodadsTested,
 // Claude 2026-11-04 lot C2: terrain batches without a pool buffer (vertices rebuilt every frame), and AllocBuf failures.
 TerrainStreamed,TerrainPoolFull,
 // Claude 2026-11-04 lot I1: M2 elements by batching verdict (same order as HDM2Count, Engine/Source/Model2/HdM2Count.h),
 // batched draws and their instances, then doodads added to the M2 scene by distance (yards).
 M2Batchable,M2NoCacheFlag,M2NoModelFlag,M2OneBoneOnly,M2NoBatchFlag,M2LocalLights,M2Transparent,M2Projected,M2BatchDraws,M2BatchInstances,M2ShadowDraws,M2ShadowDrawNs,M2ShadowConstNs,
 DoodadsTo100,Doodads100To300,Doodads300To600,DoodadsBeyond600,
 // Claude QPROF1: sun terrain query: chunks kept, doodad links walked, gathers called (all bands).
 ShadowQChunks,ShadowQDoodads,ShadowQGathers,
 // Claude QPROF2: sun band batches drawn, by model: no bones or one bone (no skeleton to animate) / several bones; WMO groups drawn.
 ShadowBatchOneBone,ShadowBatchBoned,ShadowBandGroups,ShadowStaticCandidates,ShadowDynamicCandidates,
 ShadowStaticLayerHits,ShadowStaticLayerBuilds,
 // GPT CACHE1b: layer rebuilds by cause (sun, band centre, list, settings), batches really kept in a layer.
 ShadowStaticBuildSun,ShadowStaticBuildCenter,ShadowStaticBuildList,ShadowStaticBuildSettings,ShadowStaticCacheable,Count};
void Initialize(); void Shutdown(); bool Enabled();
uint64_t Begin(); void End(Stage,uint64_t start); void Add(Counter,uint64_t amount=1); void FrameEnd(); void FrameStart();
// Claude GPU0 (mesure) : les etapes du moteur qui dessinent sont aussi des zones du chrono GPU (hdGpuZones).
bool ZonePush(Stage); void ZonePop(); void ZoneBand(int band);
struct Scope {
 Stage stage;uint64_t start;bool zone;
 explicit Scope(Stage s):stage(s),start(Begin()),zone(HD::GpuZones::on&&ZonePush(s)){}
 ~Scope(){if(start)End(stage,start);if(zone)ZonePop();}
 Scope(const Scope&)=delete;Scope&operator=(const Scope&)=delete;
};
struct FrameScope {
 uint64_t start=(FrameStart(),Begin());
 ~FrameScope(){if(start){End(Stage::Render,start);FrameEnd();}}
};
}
