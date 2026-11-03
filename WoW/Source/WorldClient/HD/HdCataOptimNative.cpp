#include "HdCataOptimNative.h"
#if defined(WOWDECOMP_VULKAN)
#include "WoW/Source/WorldClient/MapChunk.h"
#include "WoW/Source/WorldClient/DetailDoodad.h"
#include "WoW/Source/WorldClient/CDetailDoodadData.h"
#include "WoW/Source/WorldClient/Types.h"
#include "WoW/Source/DB/Rec/GroundEffectDoodadRec.h"
#include "Engine/Source/Model2/M2Data.h"
#include "Engine/Source/Model2/M2Model.h"
#include "Engine/Source/Model2/M2Shared.h"
namespace HD::CataOptim::Native335 {
bool ReadChunk(CMapChunk*c,Vec3 offset,ChunkStorage&store,Terrain::Chunk&view,Terrain::ChunkRules&rules){
 view={};rules={};if(!c||!c->m_bLoaded||!c->m_header||!c->m_height||!c->m_normals||!Finite(offset)||c->m_header->m_nLayers>4||(c->m_header->m_nLayers&&!c->m_layers))return false;
 static_assert(sizeof(CGxVertexPNC)==sizeof(Terrain::Vertex),"typed native PNC layout");
 if(c->m_vertexShading){std::array<CGxVertexPNC,145>v{};c->CreateVerticesLocal(v.data());std::memcpy(store.vertices.data(),v.data(),sizeof v);}
 else{std::array<CGxVertexPN,145>v{};c->CreateVerticesLocal(v.data());for(uint32_t i=0;i<145;++i)store.vertices[i]={{v[i].m_position.x,v[i].m_position.y,v[i].m_position.z},{v[i].m_normal.x,v[i].m_normal.y,v[i].m_normal.z},0xff7f7f7f};}
 for(auto&v:store.vertices)v.position=v.position+offset;
 int32_t n=c->CreateIndices(reinterpret_cast<char*>(store.indices.data()),0);if(n<0||n>768||n%3)return false;
 Box bounds{{c->m_bbox.b.x,c->m_bbox.b.y,c->m_bbox.b.z},{c->m_bbox.t.x,c->m_bbox.t.y,c->m_bbox.t.z}};
 if(!Valid(bounds))return false;
 view={store.vertices.data(),store.indices.data(),145,uint32_t(n),bounds,uint64_t(reinterpret_cast<uintptr_t>(c))};
 rules.ready=true;rules.count=c->m_header->m_nLayers;rules.material=0; // 3.3.5 has no Cata material id; native shader/texture state remains per tile.
 for(uint32_t i=0;i<rules.count;++i)rules.layers[i]={c->m_layers[i].m_textureId,c->m_layers[i].m_flags};return true;
}
bool ReadGrassModel(CDetailDoodadData*d,ModelStorage&out,float windScale){
 if(!d||!d->m_model||!(d->m_model->m_fFlags&1)||!d->m_model->m_shared||!d->m_model->m_shared->m_data||!d->m_model->m_shared->m_skinData||!std::isfinite(windScale)||windScale<0)return false;
 auto*data=d->m_model->m_shared->m_data;auto*skin=d->m_model->m_shared->m_skinData;uint32_t n=skin->m_vertices.m_count,count=skin->m_indices.m_count;
 if(!n||n>65536||!count||count%3)return false;
 for(uint32_t i=0;i<n;++i)if(skin->m_vertices[i]>=data->m_vertices.m_count)return false;
 for(uint32_t i=0;i<count;++i)if(skin->m_indices[i]>=n)return false;
 try{out.vertices.resize(n);out.indices.resize(count);}catch(...){return false;}
 for(uint32_t i=0;i<n;++i){const auto&s=data->m_vertices[skin->m_vertices[i]];auto&v=out.vertices[i];v.position={s.m_position.x,s.m_position.y,s.m_position.z};v.uv[0]=s.m_texcoord[0].x;v.uv[1]=s.m_texcoord[0].y;v.wind[0]=v.wind[1]=Grass::WindWeight(v.position.z,windScale);if(!Finite(v.position))return false;}
 for(uint32_t i=0;i<count;++i)out.indices[i]=skin->m_indices[i];return true;
}
bool ReadGrassBatch(const CDetailDoodadInstBatch*b,BatchStorage&out,bool allowMixedModels){
 if(!b||!CDetailDoodad::s_bUseShaders||b->m_adds.m_count>1048576||(b->m_adds.m_count&&!b->m_adds.m_data))return false;const uint32_t n=b->m_adds.m_count;
 try{out.adds.resize(n);out.instances.resize(n);out.ranges.clear();out.ranges.reserve(n);}catch(...){return false;}
 for(uint32_t i=0;i<n;++i){const auto&a=b->m_adds.m_data[i];if(a.m_doodadId>=CDetailDoodad::s_doodadList.Count())return false;auto*d=CDetailDoodad::s_doodadList[a.m_doodadId];if(!d||!d->m_record)return false;
  auto&o=out.adds[i];o.position={a.m_position.x,a.m_position.y,a.m_position.z};o.normal={a.m_normal.x,a.m_normal.y,a.m_normal.z};o.color={a.m_color.r,a.m_color.g,a.m_color.b,a.m_color.a};o.model=a.m_doodadId;o.rotation=a.m_rotation;o.scale=a.m_scale;o.triangle=a.m_triIndex;o.flags=d->m_record->m_flags;
  if(out.ranges.empty()||out.ranges.back().model!=o.model)out.ranges.push_back({o.model,i,1});else ++out.ranges.back().count;
 }
 // Native 3.3.5 can already combine different models with one texture in one draw.
 // Splitting A/B/A/B into instanced draws would regress CPU cost. Keep its native batch by default.
 if(!allowMixedModels&&out.ranges.size()!=1)return false;
 return Grass::BuildLegacyInstances(out.adds.data(),n,out.instances.data(),n,true);
}
}
#else
namespace HD::CataOptim::Native335 {
bool ReadChunk(CMapChunk*,Vec3,ChunkStorage&,Terrain::Chunk&,Terrain::ChunkRules&){return false;}
bool ReadGrassModel(CDetailDoodadData*,ModelStorage&,float){return false;}
bool ReadGrassBatch(const CDetailDoodadInstBatch*,BatchStorage&,bool){return false;}
}
#endif
