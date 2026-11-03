#include "CataShaderStore.h"
#include <fstream>
#include <vector>
#include <cstdio>
namespace HD::CataOptim {
namespace {
struct CatalogEntry {const char*name;uint32_t bytes,inputMask,samplerMask,cubeMask,outputs;uint64_t fingerprint;const char*nativePath;uint32_t nativeBytes;uint64_t nativeFingerprint;};
#include "shaders/CataShaderCatalog.inc"
bool Hash(const char*s){if(!s||std::strlen(s)!=32)return false;for(uint32_t i=0;i<32;++i)if(!((s[i]>='0'&&s[i]<='9')||(s[i]>='a'&&s[i]<='f')))return false;return true;}
const CatalogEntry*Find(const char*s){for(const auto&e:Entries)if(std::strcmp(s,e.name)==0)return &e;return nullptr;}
bool NativeMatches(const std::filesystem::path&root,const CatalogEntry&e){
 // The MD5 identifies original DX9 bytecode; injected HD/G-buffer SPIR-V can change under that same MD5.
 std::ifstream f(root/e.nativePath,std::ios::binary|std::ios::ate);if(!f||uint64_t(f.tellg())!=e.nativeBytes)return false;f.seekg(0);
 uint64_t h=14695981039346656037ull;char chunk[4096];uint32_t remaining=e.nativeBytes;
 while(remaining){uint32_t n=std::min<uint32_t>(remaining,sizeof chunk);if(!f.read(chunk,n))return false;for(uint32_t i=0;i<n;++i)h=(h^uint8_t(chunk[i]))*1099511628211ull;remaining-=n;}
 return h==e.nativeFingerprint;
}
bool Read(const std::filesystem::path&root,const CatalogEntry&e,std::vector<uint32_t>&words){
 if(e.bytes<20||e.bytes%4)return false;std::ifstream f(root/e.name,std::ios::binary|std::ios::ate);if(!f||uint64_t(f.tellg())!=e.bytes)return false;words.resize(e.bytes/4);f.seekg(0);if(!f.read(reinterpret_cast<char*>(words.data()),e.bytes))return false;
 uint64_t h=14695981039346656037ull;auto*p=reinterpret_cast<const uint8_t*>(words.data());for(uint32_t i=0;i<e.bytes;++i)h=(h^p[i])*1099511628211ull;return h==e.fingerprint&&words[0]==0x07230203u;
}
}
bool WarmNativePair(Renderer&r,const std::filesystem::path&root,const std::filesystem::path&nativeRoot,const char*vs,const char*ps,View view,ProgramDesc state,Handle&result,char*error,size_t errorBytes){
 result={};auto fail=[&](const char*s){if(error&&errorBytes)std::snprintf(error,errorBytes,"%s",s);return false;};
 if(!Hash(vs)||!Hash(ps))return fail("native shader MD5 required");
 const char*kind=state.kind==Kind::Terrain4?"terrain":state.kind==Kind::GrassPacked?"packed":"grass";
 const char*pixelKind=state.kind==Kind::Terrain4?"terrain":"grass";char vname[128],pname[128];
 std::snprintf(vname,sizeof vname,"%s_%s%s.vert.spv",kind,vs,view==View::World?"":"_shadow");
 std::snprintf(pname,sizeof pname,"%s_%s%s.frag.spv",pixelKind,ps,view==View::World?"":view==View::Mirror?"_mirror":"_shadow");
 const auto*v=Find(vname),*p=Find(pname);if(!v||!p)return fail("native shader pair not in this compiled corpus; regenerate, keep native fallback");
 const uint32_t outputs=view==View::World?6:view==View::Mirror?1:0;if(p->outputs!=outputs)return fail("shader output contract differs from requested view");
 std::vector<uint32_t>vertex,pixel;try{if(!NativeMatches(nativeRoot,*v)||!NativeMatches(nativeRoot,*p))return fail("native translated shader changed under same DX9 MD5; regenerate optimization shaders");if(!Read(root,*v,vertex)||!Read(root,*p,pixel))return fail("shader missing, changed or truncated");}catch(...){return fail("shader staging allocation failed");}
 state.vertex={vertex.data(),v->bytes};state.fragment={pixel.data(),p->bytes};state.inputMask=v->inputMask;state.samplerMask=p->samplerMask;state.cubeMask=p->cubeMask;state.shadow=view!=View::World;state.colorAttachments=outputs;
 result=r.WarmProgram(state);if(!result)return fail(r.Error());if(error&&errorBytes)error[0]=0;return true;
}
}
