#include "HdCataOptimNative.h"
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
namespace HD::CataOptim::Native335 {
namespace {
bool initialized=false,terrain=false,grass=false,packed=false,residency=false;
bool Toggle(CVar*,const char*,const char*s,void*value){if(!s||!(std::strcmp(s,"0")==0||std::strcmp(s,"1")==0))return false;*static_cast<bool*>(value)=s[0]=='1';return true;}
void Register(const char*name,const char*help,bool&value){auto*c=CVar::Register(name,help,1,"0",Toggle,CATEGORY_GRAPHICS,false,&value,false);value=c&&c->m_intValue==1;}
}
void InitializeSettings(){if(initialized)return;
 Register("hdCataTerrainBatch","HD: detached Cata terrain four-chunk renderer; native fallback until bridge is ready",terrain);
 Register("hdCataDoodadInstancing","HD: shared grass geometry with lossless native instances",grass);
 Register("hdCataPackedGrass","HD: optional Cata 32-byte quantized instances; visual quantization, default off",packed);
 Register("hdCataResidency","HD: Cata 120-frame reference grace with collision/view/GPU pins",residency);initialized=true;
}
void ShutdownSettings(){initialized=terrain=grass=packed=residency=false;}
bool TerrainEnabled(){return initialized&&terrain;}bool GrassEnabled(){return initialized&&grass;}bool PackedGrassEnabled(){return initialized&&grass&&packed;}bool ResidencyEnabled(){return initialized&&residency;}
}
