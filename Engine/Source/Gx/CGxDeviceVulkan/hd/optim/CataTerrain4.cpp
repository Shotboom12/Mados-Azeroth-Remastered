#include "CataTerrain4.h"
namespace HD::CataOptim::Terrain {
bool CanBatch(const std::array<ChunkRules,4>&chunks,uint32_t mask,bool multiPass,bool enabled){
 if(!enabled||!mask||(mask&~15u))return false;
 const ChunkRules*base=nullptr;bool hasMaterial=false;
 for(uint32_t i=0;i<4;++i)if(mask&(1u<<i)){
  const auto&c=chunks[i];if(!c.ready||c.count>4)return false;
  // Preserve Cata CanBatchChunks' base choice, including its material test after the first chunk.
  if(!base)base=&c;else if(c.material){hasMaterial=true;if(c.count>base->count)base=&c;}
 }
 if(!base||!base->count)return false;
 if(multiPass){uint32_t layers=base->count;
  for(uint32_t i=0;i<4;++i)if(mask&(1u<<i)){
   const auto&c=chunks[i];if(&c==base)continue;if(c.material!=base->material)return false;
   for(uint32_t j=0;j<c.count;++j){const auto&layer=c.layers[j];if(layer.flags&0x4c0)return false;
    uint32_t k=0;for(;k<base->count;++k){if(base->layers[k].flags&0x4c0)return false;if(base->layers[k].texture==layer.texture)break;}
    if(k==base->count){if(hasMaterial)return false;++layers;}
   }
  }return layers<=4;
 }
 for(uint32_t i=0;i<4;++i)if(mask&(1u<<i)){
  const auto&c=chunks[i];if(&c==base)continue;if(c.count!=base->count)return false;
  for(uint32_t j=0;j<c.count;++j)if((c.layers[j].flags&0xc0)||(base->layers[j].flags&0xc0)||c.layers[j].texture!=base->layers[j].texture)return false;
 }return true;
}
Plan BuildPlan(const std::array<ChunkRules,4>&c,bool multiPass,uint32_t allowed,bool enabled){
 Plan p;for(const auto&x:c)if(!x.ready||x.count>4)return p;
 if(allowed==3&&CanBatch(c,15,multiPass,enabled)){p.batches[0]={15,3};p.count=1;p.ready=true;return p;}
 bool left=false,right=false,top=false,bottom=false;
 if(allowed&1){left=CanBatch(c,5,multiPass,enabled);right=CanBatch(c,10,multiPass,enabled);}
 if(allowed&2){top=CanBatch(c,3,multiPass,enabled);bottom=CanBatch(c,12,multiPass,enabled);}
 uint8_t flags=2;
 if(uint32_t(left)+right>uint32_t(top)+bottom){std::swap(p.order[1],p.order[2]);top=left;bottom=right;flags=1;}
 if(top)p.batches[p.count++]={3,flags};else{p.batches[p.count++]={1,0};p.batches[p.count++]={2,0};}
 if(bottom)p.batches[p.count++]={12,flags};else{p.batches[p.count++]={4,0};p.batches[p.count++]={8,0};}
 p.ready=true;return p;
}
bool BuildMesh(const std::array<Chunk,4>&chunks,const Plan&p,Mesh&out){
 out.ready=false;if(!p.ready||!p.count||p.count>4)return false;
 uint32_t permutation=0;for(uint32_t i:p.order){if(i>=4||(permutation&(1u<<i)))return false;permutation|=1u<<i;}
 for(const auto&c:chunks){if(!c.vertices||(c.indexCount&&!c.indices)||c.vertexCount!=Vertices||c.indexCount>MaxIndices||c.indexCount%3||!Valid(c.worldBounds))return false;
  for(uint32_t j=0;j<c.indexCount;++j)if(c.indices[j]>=Vertices)return false;
  for(uint32_t j=0;j<Vertices;++j)if(!Finite(c.vertices[j].position)||!Finite(c.vertices[j].normal))return false;
 }
 out.indexCount=0;out.order=p.order;out.bounds=chunks[0].worldBounds;
 for(uint32_t i=0;i<4;++i){const auto&c=chunks[p.order[i]];Union(out.bounds,c.worldBounds);
  std::copy_n(c.vertices,Vertices,out.vertices.data()+i*Vertices);out.ranges[i]={out.indexCount,c.indexCount};
  for(uint32_t j=0;j<c.indexCount;++j)out.indices[out.indexCount++]=uint16_t(c.indices[j]+i*Vertices);
 }out.ready=true;return true;
}
uint32_t VisibleRuns(const std::array<Range,4>&r,uint32_t mask,std::array<Range,2>&out){
 uint32_t n=0;bool open=false;for(uint32_t i=0;i<4;++i){if(!(mask&(1u<<i))){open=false;continue;}
  if(!r[i].count)continue;
  if(open&&out[n-1].first+out[n-1].count==r[i].first)out[n-1].count+=r[i].count;
  else{if(n==2)return 0;out[n++]=r[i];open=true;}
 }return n;
}
uint32_t RemapVisibility(uint32_t mask,const Plan&p){uint32_t out=0;for(uint32_t i=0;i<4;++i)if(p.order[i]<4&&(mask&(1u<<p.order[i])))out|=1u<<i;return out;}
}
