// HD: Cata's area-linked WDL selection, adapted to 3.3.5 without changing native layouts.
// Cata MapLowDetail::LinkMapObjDefToAreas / WorldMap::GatherLowDetail are the reference.
// Added: hierarchical aggregate bounds, stable order, bounded storage and conservative fallbacks.
#pragma once
#include <algorithm>
#include <array>
#include <cmath>
#include <cstdint>
#include <cstddef>
#include <limits>
#include <vector>
#if defined(_MSC_VER)
#include <intrin.h>
#endif
namespace HD::CataSpatial {
struct Point {float x=0,y=0,z=0;};
struct Box {Point b,t;};
inline bool Valid(Box b){return std::isfinite(b.b.x)&&std::isfinite(b.b.y)&&std::isfinite(b.b.z)&&std::isfinite(b.t.x)&&std::isfinite(b.t.y)&&std::isfinite(b.t.z)&&b.b.x<=b.t.x&&b.b.y<=b.t.y&&b.b.z<=b.t.z;}
inline bool Same(Box a,Box b){return a.b.x==b.b.x&&a.b.y==b.b.y&&a.b.z==b.b.z&&a.t.x==b.t.x&&a.t.y==b.t.y&&a.t.z==b.t.z;}
template<class EngineBox>inline Box Convert(const EngineBox&box){return {{box.b.x,box.b.y,box.b.z},{box.t.x,box.t.y,box.t.z}};}
inline void Union(Box&a,Box b){a.b.x=std::min(a.b.x,b.b.x);a.b.y=std::min(a.b.y,b.b.y);a.b.z=std::min(a.b.z,b.b.z);a.t.x=std::max(a.t.x,b.t.x);a.t.y=std::max(a.t.y,b.t.y);a.t.z=std::max(a.t.z,b.t.z);}
struct Rect {int x0=0,y0=0,x1=-1,y1=-1;bool global=true;};
inline Rect AreaRect(Box b){
 // ADT axes are swapped and reversed. Pad one cell against conversion/border roundoff.
 if(!Valid(b))return {};
 const auto cell=[](double p){return std::floor((17066.666-double(p))*.029999999/16.0);};
 const double x0=cell(b.t.y)-1,x1=cell(b.b.y)+1,y0=cell(b.t.x)-1,y1=cell(b.b.x)+1;
 // Huge/out-of-map/unknown bounds always remain candidates, never silently clipped.
 if(x0<0||y0<0||x1>63||y1>63||!std::isfinite(x0+x1+y0+y1)||(x1-x0+1)*(y1-y0+1)>64)return {};
 return {int(x0),int(y0),int(x1),int(y1),false};
}
inline uint32_t Morton(uint32_t x,uint32_t y){uint32_t n=0;for(uint32_t bit=0;bit<6;++bit)n|=((x>>bit)&1)<<(2*bit)|((y>>bit)&1)<<(2*bit+1);return n;}
inline unsigned FirstBit(uint64_t bits){
#if defined(_MSC_VER) && defined(_M_X64)
 unsigned long bit;_BitScanForward64(&bit,bits);return unsigned(bit);
#else
 unsigned bit=0;while(!(bits&1)){bits>>=1;++bit;}return bit;
#endif
}
class Grid {
 static constexpr uint32_t Leaves=4096,LeafStart=1365,Nodes=5461;
 struct Node {Box bounds{};bool occupied=false;};
 std::array<Node,Nodes> nodes{};std::array<uint32_t,Leaves+1> starts{};
 std::vector<uint32_t> references,globals,output;std::vector<uint64_t> selected;
 uint32_t size=0,visited=0;bool ready=false;
 void Include(uint32_t node,Box b){if(nodes[node].occupied)Union(nodes[node].bounds,b);else{nodes[node].bounds=b;nodes[node].occupied=true;}}
 void Mark(uint32_t i){selected[i/64]|=uint64_t(1)<<(i%64);}
public:
 struct Result {const uint32_t*ids=nullptr;uint32_t count=0;};
 void Clear(){ready=false;size=visited=0;nodes={};starts={};std::vector<uint32_t>().swap(references);std::vector<uint32_t>().swap(globals);std::vector<uint32_t>().swap(output);std::vector<uint64_t>().swap(selected);}
 void Invalidate(){ready=false;}
 bool Ready()const{return ready;}
 uint32_t Size()const{return size;}
 uint32_t VisitedNodes()const{return visited;}
 size_t MemoryBytes()const{return sizeof(*this)+4*(references.capacity()+globals.capacity()+output.capacity())+8*selected.capacity();}
 uint32_t ReferenceCount()const{return uint32_t(references.size());}
 bool Contains(uint32_t id)const{return id<size&&(selected[id/64]&(uint64_t(1)<<(id%64)))!=0;}
 template<class GetBox>bool Build(uint32_t count,GetBox getBox,size_t budget=8u*1024*1024){
  Clear();if(count<64||count>65536)return false;
  try{
   uint32_t globalCount=0;uint64_t total=0;
   for(uint32_t i=0;i<count;++i){
    const Rect r=AreaRect(getBox(i));if(r.global){++globalCount;continue;}
    for(int y=r.y0;y<=r.y1;++y)for(int x=r.x0;x<=r.x1;++x){++starts[Morton(x,y)+1];++total;}
   }
   if(total>1048576||sizeof(*this)+4*(total+globalCount+count)+8*((count+63)/64)>budget)return false;
   for(uint32_t i=1;i<=Leaves;++i)starts[i]+=starts[i-1];
   references.resize(size_t(total));globals.resize(globalCount);output.resize(count);selected.resize((count+63)/64);
   std::array<uint32_t,Leaves> cursor{};for(uint32_t i=0;i<Leaves;++i)cursor[i]=starts[i];
   globalCount=0;
   for(uint32_t i=0;i<count;++i){
    const Box box=getBox(i);const Rect r=AreaRect(box);if(r.global){globals[globalCount++]=i;continue;}
    for(int y=r.y0;y<=r.y1;++y)for(int x=r.x0;x<=r.x1;++x){const uint32_t cell=Morton(x,y);references[cursor[cell]++]=i;Include(LeafStart+cell,box);}
   }
   for(int32_t parent=int32_t(LeafStart)-1;parent>=0;--parent)for(uint32_t j=1;j<=4;++j){const auto&child=nodes[4*parent+j];if(child.occupied)Include(uint32_t(parent),child.bounds);}
   size=count;ready=true;return true;
  }catch(...){Clear();return false;}
 }
 template<class Cull>Result Query(Cull culled){
  if(!ready)return {};
  std::fill(selected.begin(),selected.end(),uint64_t(0));for(uint32_t i:globals)Mark(i);
  // Six quadtree levels: at most 1+3*6 = 19 pending nodes. No per-query allocation.
  std::array<uint32_t,32> stack{};uint32_t depth=0;stack[depth++]=0;visited=0;
  while(depth){
   const uint32_t n=stack[--depth];const auto&node=nodes[n];if(!node.occupied)continue;++visited;
   // Test the FULL aggregate object bounds, not the tile, distance, or main camera footprint.
   // If the native plane test rejects this union, it also rejects every member's bounds.
   if(culled(node.bounds))continue;
   if(n>=LeafStart){const uint32_t cell=n-LeafStart;for(uint32_t j=starts[cell];j<starts[cell+1];++j)Mark(references[j]);}
   else for(uint32_t j=4;j>=1;--j)stack[depth++]=4*n+j;
  }
  uint32_t n=0;for(uint32_t word=0;word<selected.size();++word){uint64_t bits=selected[word];while(bits){const uint32_t id=64*word+FirstBit(bits);if(id<size)output[n++]=id;bits&=bits-1;}}
  return {output.data(),n};
 }
};
}
