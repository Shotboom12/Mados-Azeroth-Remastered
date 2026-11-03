#pragma once
#include "CataOptimTypes.h"
#include <vector>
namespace HD::CataOptim {
// Cata's 120-frame grace, guarded for native references and in-flight GPU use.
struct Residency {
 uint32_t lastSeenFrame=0;uint64_t lastGpuSerial=0;bool hasReferences=false,cpuPinned=false;
 void Touch(uint32_t frame){lastSeenFrame=frame;}
 bool CanRelease(uint32_t frame,uint64_t completed,bool insideAnyGuard,uint32_t visibleViews)const{
  const uint32_t age=frame-lastSeenFrame; // unsigned frame wrap is intentional; old epochs >2^31 fail safe
  return hasReferences&&!cpuPinned&&!insideAnyGuard&&!visibleViews&&age>=120&&age<0x80000000u&&completed>=lastGpuSerial;
 }
 template<class Release>bool ReleaseIfUnused(uint32_t frame,uint64_t completed,bool guard,uint32_t views,Release release){
  if(!CanRelease(frame,completed,guard,views))return false;if(!release())return false;hasReferences=false;return true;
 }
};
}
