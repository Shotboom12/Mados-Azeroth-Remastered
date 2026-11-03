#pragma once
#include "CataOptimTypes.h"
namespace HD::CataOptim::Grass {
struct Vertex {Vec3 position;float uv[2]{};float wind[2]{};};
static_assert(sizeof(Vertex)==28,"Cata instanced mesh layout");
struct PackedInstance {
 uint8_t normal[4]{};Color color,light;Vec3 position;uint8_t up[3]{},rotation=0,scale=0,phase=0,pad[2]{};
};
static_assert(sizeof(PackedInstance)==32&&offsetof(PackedInstance,position)==12&&offsetof(PackedInstance,up)==24,"Cata packed instance layout");
struct alignas(16) Instance {
 float rows[3][4]{};float normal[4]{},color[4]{},light[4]{},wind[4]{};
};
static_assert(sizeof(Instance)==112,"lossless instance layout");
struct Add {
 Vec3 position,normal{0,0,1};Color color,light;float rotation=0,scale=1,phase=0;uint32_t model=0,flags=0;uint16_t triangle=0;
};
struct ModelVertex {Vec3 position;float uv[2]{};};
// Native 3.3.5 geometry and HD shaders are kept; Cata stores one mesh per model rather than per tuft.
bool BuildMesh(const ModelVertex*source,uint32_t sourceCount,const uint16_t*skinVertices,uint32_t vertexCount,const uint16_t*indices,uint32_t indexCount,float windScale,Vertex*outVertices,uint16_t*outIndices);
bool PackCata(const Add&,Vec3 chunkOrigin,PackedInstance&);
bool ExpandCata(const PackedInstance&,Instance&);
// Matches the 3.3.5 fan cache (including the first rotation for the same fan), once per instance, not per vertex.
bool BuildLegacyInstances(const Add*,uint32_t count,Instance*output,uint32_t capacity,bool shaderColors=true);
Vec3 Transform(const Instance&,Vec3);
float WindWeight(float height,float windScale);
float Fade(float distance,float farDistance);
}
