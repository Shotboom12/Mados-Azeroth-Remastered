#include "HdCataHorizonIndex.h"
#include "HdCataSpatialGrid.h"
#include "HdCataRenderPerf.h"
#include <cstdio>
#include <cstring>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "WoW/Source/WorldClient/MapLowDetail.h"
#include "WoW/Source/WorldClient/MapObjDef.h"
#include "WoW/Source/WorldClient/MapObj.h"
#include "WoW/Source/WorldClient/World.h"
namespace HD::CataHorizonIndex {
namespace {
using namespace CataSpatial;
Grid grid;CMapLowDetail*owner=nullptr;CMapObjDef**list=nullptr;uint32_t count=0;
struct Member {uintptr_t address;Box bounds;};std::vector<Member> members;
bool initialized=false,enabled=false,verify=false;CVar*info=nullptr;
void Status(const char*reason){
 if(!info)return;char text[256];std::snprintf(text,sizeof text,"%s; enabled=%d ready=%d defs=%u refs=%u memory=%.3fMiB; stable native order",reason,int(enabled),int(grid.Ready()),count,grid.ReferenceCount(),(grid.MemoryBytes()+sizeof(Member)*members.capacity())/1048576.0);info->Set(text,true,false,false,false);
}
bool Toggle(CVar*,const char*,const char*s,void*){if(!s||!(std::strcmp(s,"0")==0||std::strcmp(s,"1")==0))return false;enabled=s[0]=='1';Status("setting changed");return true;}
bool Verify(CVar*,const char*,const char*s,void*){if(!s||!(std::strcmp(s,"0")==0||std::strcmp(s,"1")==0))return false;verify=s[0]=='1';return true;}
bool Cull(Box b){CAaBox box;box.b=C3Vector(b.b.x,b.b.y,b.b.z);box.t=C3Vector(b.t.x,b.t.y,b.t.z);return CWorldScene::FrustumCull(&box)!=0;}
}
void Initialize(){
 if(initialized)return;
 auto*t=CVar::Register("hdCataHorizonIndex","HD: Cata-style WDL WMO spatial selection, 0 native; built at map load",1,"0",Toggle,CATEGORY_GRAPHICS,false,nullptr,false);
 auto*v=CVar::Register("hdCataHorizonVerify","HD: compare every omitted WDL WMO to native frustum; fallback on first mismatch (debug cost)",1,"0",Verify,CATEGORY_GRAPHICS,false,nullptr,false);
 info=CVar::Register("hdCataHorizonInfo","HD: index status and memory",0,"not loaded",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
 initialized=true;enabled=t&&t->m_intValue!=0;verify=v&&v->m_intValue!=0;Status("initialized");
}
void Shutdown(){Clear(owner);enabled=verify=initialized=false;info=nullptr;}
void Build(CMapLowDetail*o){
 Clear(owner);if(!o)return;owner=o;list=o->m_mapObjDefList.m_data;count=o->m_mapObjDefList.Count();
 if(count<64||count>65536){Status("linear: small list or safety limit");return;}
 try{
  members.resize(count);for(uint32_t i=0;i<count;++i){if(!list[i]){members.clear();Status("linear: null definition");return;}members[i]={reinterpret_cast<uintptr_t>(list[i]),Convert(list[i]->m_bbox)};}
  std::sort(members.begin(),members.end(),[](const Member&a,const Member&b){return a.address<b.address;});
  const size_t budget=8u*1024*1024-sizeof(Member)*members.capacity();
  if(!grid.Build(count,[&](uint32_t i){return Convert(list[i]->m_bbox);},budget)){std::vector<Member>().swap(members);Status("linear: index budget/build limit");return;}
  Status("built at map load");
 }catch(...){grid.Clear();std::vector<Member>().swap(members);Status("linear: allocation failed");}
}
void Clear(CMapLowDetail*o){
 if(o!=owner)return;grid.Clear();std::vector<Member>().swap(members);owner=nullptr;list=nullptr;count=0;
}
void NotifyBoundsChanged(CMapObjDef*object){
 if(!grid.Ready()||!object)return;const auto address=reinterpret_cast<uintptr_t>(object);
 auto it=std::lower_bound(members.begin(),members.end(),address,[](const Member&m,uintptr_t p){return m.address<p;});
 for(;it!=members.end()&&it->address==address;++it)if(!Same(it->bounds,Convert(object->m_bbox))){grid.Invalidate();Status("linear: indexed object bounds changed; rebuild on next map load");return;}
}
Selection Select(CMapLowDetail*o){
 const uint32_t total=o?o->m_mapObjDefList.Count():0;
 CataRenderPerf::Add(CataRenderPerf::Counter::HorizonAll,total);
 if(!initialized||!enabled||o!=owner||!grid.Ready()||list!=o->m_mapObjDefList.m_data||count!=total){
  CataRenderPerf::Add(CataRenderPerf::Counter::HorizonCandidates,total);if(enabled)CataRenderPerf::Add(CataRenderPerf::Counter::HorizonFallbacks);return {};
 }
 const auto result=grid.Query(Cull);
 if(verify){
  for(uint32_t i=0;i<count;++i)if(!grid.Contains(i)&&list[i]->m_owner->m_isGroupLoaded&&!CWorldScene::FrustumCull(&list[i]->m_bbox)){
   grid.Invalidate();CataRenderPerf::Add(CataRenderPerf::Counter::HorizonMismatch);CataRenderPerf::Add(CataRenderPerf::Counter::HorizonCandidates,total);Status("linear: VERIFY MISMATCH, disabled until next map load");return {};
  }
 }
 CataRenderPerf::Add(CataRenderPerf::Counter::HorizonCandidates,result.count);return {result.ids,result.count,true};
}
}
