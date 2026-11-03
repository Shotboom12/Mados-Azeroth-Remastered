#pragma once
#include "CataOptimTypes.h"
namespace HD::CataOptim::Terrain {
constexpr uint32_t Vertices=145,MaxIndices=768;
struct Layer {uint32_t texture=0,flags=0;};
struct ChunkRules {bool ready=false;uint32_t material=0,count=0;Layer layers[4]{};};
struct Batch {uint8_t mask=0,flags=0;};
struct Plan {std::array<uint8_t,4>order{0,1,2,3};std::array<Batch,4>batches{};uint32_t count=0;bool ready=false;};
bool CanBatch(const std::array<ChunkRules,4>&,uint32_t mask,bool multiPass,bool batching=true);
Plan BuildPlan(const std::array<ChunkRules,4>&,bool multiPass,uint32_t batchMask=3,bool batching=true);
struct Vertex {Vec3 position,normal;uint32_t color=0xff7f7f7f;};
static_assert(sizeof(Vertex)==28,"native PNC without x86 pointers");
struct Chunk {
 const Vertex*vertices=nullptr;const uint16_t*indices=nullptr;uint32_t vertexCount=0,indexCount=0;Box worldBounds{};uint64_t identity=0;
};
struct Range {uint32_t first=0,count=0;};
struct Mesh {
 std::array<Vertex,4*Vertices>vertices{};std::array<uint16_t,4*MaxIndices>indices{};
 std::array<Range,4>ranges{};std::array<uint8_t,4>order{};uint32_t indexCount=0;Box bounds{};bool ready=false;
};
// Copies native vertices/indices as-is. Native alpha/shadow atlases and shader register snapshots remain per tile.
bool BuildMesh(const std::array<Chunk,4>&,const Plan&,Mesh&);
// At most two disjoint visible runs for four tiles. Hidden/portal/occluded tiles are NEVER drawn for batching.
uint32_t VisibleRuns(const std::array<Range,4>&,uint32_t mask,std::array<Range,2>&);
uint32_t RemapVisibility(uint32_t originalMask,const Plan&);
}
