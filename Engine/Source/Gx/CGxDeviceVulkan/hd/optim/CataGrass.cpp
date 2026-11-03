#include "CataGrass.h"
namespace HD::CataOptim::Grass {
float WindWeight(float z,float scale){return std::clamp(z*.66666669f,0.f,1.f)*scale;}
float Fade(float distance,float farDistance){if(!std::isfinite(distance)||!std::isfinite(farDistance)||farDistance<=0)return 0;const float k=1/(farDistance-farDistance*.85000002f);return std::clamp(-distance*k+farDistance*k,0.f,1.f);}
bool BuildMesh(const ModelVertex*source,uint32_t sourceCount,const uint16_t*skin,uint32_t vertices,const uint16_t*idx,uint32_t count,float windScale,Vertex*out,uint16_t*outIdx){
 if(!source||!skin||!out||!outIdx||!vertices||vertices>65536||!idx||!count||count%3||!std::isfinite(windScale)||windScale<0)return false;
 for(uint32_t i=0;i<vertices;++i)if(skin[i]>=sourceCount||!Finite(source[skin[i]].position)||!std::isfinite(source[skin[i]].uv[0])||!std::isfinite(source[skin[i]].uv[1]))return false;
 for(uint32_t i=0;i<count;++i)if(idx[i]>=vertices)return false;
 for(uint32_t i=0;i<vertices;++i){const auto&s=source[skin[i]];const float w=WindWeight(s.position.z,windScale);out[i]={s.position,{s.uv[0],s.uv[1]},{w,w}};}
 std::copy_n(idx,count,outIdx);return true;
}
namespace {
bool Valid(const Add&a){return Finite(a.position)&&Finite(a.normal)&&Dot(a.normal,a.normal)>1e-12f&&std::isfinite(a.rotation)&&std::isfinite(a.scale)&&a.scale>=0&&std::isfinite(a.phase);}
uint8_t ByteTrunc(float x){return uint8_t(uint32_t(std::clamp(x,0.f,255.f)));}
void ColorFloats(Color c,float*out){out[0]=c.r*(1/255.f);out[1]=c.g*(1/255.f);out[2]=c.b*(1/255.f);out[3]=c.a*(1/255.f);}
struct Matrix {Vec3 a{1,0,0},b{0,1,0},c{0,0,1};};
Matrix Rotate(Vec3 normal,float angle,bool sloped){
 const float c=std::cos(angle),s=std::sin(angle);if(!sloped)return {{c,s,0},{-s,c,0},{0,0,1}};
 const float d=normal.y*normal.y+normal.z*normal.z;
 // Original normalization is singular for a horizontal x-axis normal. Keep geometry finite on corrupt/vertical inputs.
 const Vec3 tangent=d>1e-12f?Vec3{0,normal.z,-normal.y}*(1/std::sqrt(d)):Vec3{0,1,0};
 const Vec3 binormal=Cross(normal,tangent);return {binormal*c+tangent*s,binormal*(-s)+tangent*c,normal};
}
void Write(const Add&a,const Matrix&m,Instance&o){
 o={};o.rows[0][0]=m.a.x*a.scale;o.rows[0][1]=m.b.x*a.scale;o.rows[0][2]=m.c.x*a.scale;o.rows[0][3]=a.position.x;
 o.rows[1][0]=m.a.y*a.scale;o.rows[1][1]=m.b.y*a.scale;o.rows[1][2]=m.c.y*a.scale;o.rows[1][3]=a.position.y;
 o.rows[2][0]=m.a.z*a.scale;o.rows[2][1]=m.b.z*a.scale;o.rows[2][2]=m.c.z*a.scale;o.rows[2][3]=a.position.z;
 o.normal[0]=a.normal.x;o.normal[1]=a.normal.y;o.normal[2]=a.normal.z;o.normal[3]=1;ColorFloats(a.color,o.color);ColorFloats(a.light,o.light);o.wind[0]=a.phase;o.wind[1]=a.scale;
}
}
bool PackCata(const Add&a,Vec3 origin,PackedInstance&o){
 if(!Valid(a)||!Finite(origin)||a.scale>2.f||std::abs(a.normal.x)>1||std::abs(a.normal.y)>1||std::abs(a.normal.z)>1||!std::isfinite(a.rotation*40.584511f)||!std::isfinite(a.phase*40.584511f))return false;
 // Source bytes are canonical RGBA here; the native CImVector/format conversion stays at the bridge boundary.
 o={};o.normal[0]=ByteTrunc((a.normal.x+1)*127.5f);o.normal[1]=ByteTrunc((a.normal.y+1)*127.5f);o.normal[2]=ByteTrunc((a.normal.z+1)*127.5f);
 o.color=a.color;o.light=a.light;o.position=a.position+origin;
 if(a.flags&1)std::copy_n(o.normal,3,o.up);else{o.up[0]=127;o.up[1]=127;o.up[2]=255;}
 // Cata truncates and wraps rotations/phases. Reduce in double before the cast to avoid C++ overflow UB.
 const auto phase=[](float v){double n=std::trunc(double(v*40.584511f));n=std::fmod(n,256.);if(n<0)n+=256.;return uint8_t(n);};
 o.rotation=phase(a.rotation);o.scale=ByteTrunc(a.scale*127.5f);o.phase=phase(a.phase);return Finite(o.position);
}
bool ExpandCata(const PackedInstance&p,Instance&o){
 if(!Finite(p.position))return false;Add a;a.position=p.position;a.normal={p.normal[0]*(2/255.f)-1,p.normal[1]*(2/255.f)-1,p.normal[2]*(2/255.f)-1};
 a.color=p.color;a.light=p.light;a.scale=p.scale/127.5f;a.rotation=p.rotation/40.584511f;a.phase=p.phase/40.584511f;
 const Vec3 up=Normalize({p.up[0]*(2/255.f)-1,p.up[1]*(2/255.f)-1,p.up[2]*(2/255.f)-1});Write(a,Rotate(up,a.rotation,true),o);return true;
}
bool BuildLegacyInstances(const Add*a,uint32_t n,Instance*out,uint32_t capacity,bool shaderColors){
 if((n&&(!a||!out))||n>capacity)return false;for(uint32_t i=0;i<n;++i)if(!Valid(a[i]))return false;
 Matrix cache[4];uint32_t cell=0xffff,built=0;
 for(uint32_t i=0;i<n;++i){auto value=a[i];Matrix m;
  if(!shaderColors){const uint32_t s=76*value.color.a+45874;value.color={uint8_t((s*value.color.r)>>16),uint8_t((s*value.color.g)>>16),uint8_t((s*value.color.b)>>16),255};}
  if(value.flags&1){if((value.triangle&0xfc)!=cell){cell=value.triangle&0xfc;built=0;}const uint32_t fan=value.triangle&3;
   if(!(built&(1u<<fan))){cache[fan]=Rotate(value.normal,value.rotation,true);built|=1u<<fan;}m=cache[fan];
  }else m=Rotate(value.normal,value.rotation,false);
  Write(value,m,out[i]);
 }return true;
}
Vec3 Transform(const Instance&i,Vec3 p){return {i.rows[0][0]*p.x+i.rows[0][1]*p.y+i.rows[0][2]*p.z+i.rows[0][3],i.rows[1][0]*p.x+i.rows[1][1]*p.y+i.rows[1][2]*p.z+i.rows[1][3],i.rows[2][0]*p.x+i.rows[2][1]*p.y+i.rows[2][2]*p.z+i.rows[2][3]};}
}
