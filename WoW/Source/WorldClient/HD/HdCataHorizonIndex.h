// HD: Cata-style area index of WDL WMO definitions, separate from rendering and streaming.
#pragma once
#include <cstdint>
class CMapLowDetail;class CMapObjDef;
namespace HD::CataHorizonIndex {
struct Selection {const uint32_t*ids=nullptr;uint32_t count=0;bool indexed=false;};
void Initialize();void Shutdown();void Build(CMapLowDetail*);void Clear(CMapLowDetail*);
Selection Select(CMapLowDetail*);void NotifyBoundsChanged(CMapObjDef*);
struct BoundsEditScope {
 CMapObjDef*object;explicit BoundsEditScope(CMapObjDef*p):object(p){}
 ~BoundsEditScope(){NotifyBoundsChanged(object);}
 BoundsEditScope(const BoundsEditScope&)=delete;BoundsEditScope&operator=(const BoundsEditScope&)=delete;
};
}
