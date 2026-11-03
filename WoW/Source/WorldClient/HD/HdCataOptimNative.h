#pragma once
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/optim/CataTerrain4.h"
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/optim/CataGrass.h"
#include <vector>
class CMapChunk;class CDetailDoodadData;class CDetailDoodadInstBatch;
namespace HD::CataOptim::Native335 {
struct ChunkStorage {std::array<Terrain::Vertex,145>vertices{};std::array<uint16_t,768>indices{};};
struct ModelStorage {std::vector<Grass::Vertex>vertices;std::vector<uint16_t>indices;};
struct InstanceRange {uint32_t model=0,first=0,count=0;};
struct BatchStorage {std::vector<Grass::Add>adds;std::vector<Grass::Instance>instances;std::vector<InstanceRange>ranges;};
// Load/preparation phase only. Offset must be the original pair's offset from RenderPrepBufs.
bool ReadChunk(CMapChunk*,Vec3 originalOffset,ChunkStorage&,Terrain::Chunk&,Terrain::ChunkRules&);
bool ReadGrassModel(CDetailDoodadData*,ModelStorage&,float windScale=0);
bool ReadGrassBatch(const CDetailDoodadInstBatch*,BatchStorage&,bool allowMixedModels=false);
void InitializeSettings();void ShutdownSettings();
bool TerrainEnabled();bool GrassEnabled();bool PackedGrassEnabled();bool ResidencyEnabled();
}
