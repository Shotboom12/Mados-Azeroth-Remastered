// Detached, typed Cata -> 3.3.5 x64 optimization core. No native struct offsets.
#pragma once
#include <algorithm>
#include <array>
#include <cmath>
#include <cstddef>
#include <cstdint>
#include <cstring>
namespace HD::CataOptim {
struct Vec3 {float x=0,y=0,z=0;};
inline Vec3 operator+(Vec3 a,Vec3 b){return {a.x+b.x,a.y+b.y,a.z+b.z};}
inline Vec3 operator*(Vec3 a,float s){return {a.x*s,a.y*s,a.z*s};}
inline float Dot(Vec3 a,Vec3 b){return a.x*b.x+a.y*b.y+a.z*b.z;}
inline Vec3 Cross(Vec3 a,Vec3 b){return {a.y*b.z-a.z*b.y,a.z*b.x-a.x*b.z,a.x*b.y-a.y*b.x};}
inline bool Finite(Vec3 p){return std::isfinite(p.x)&&std::isfinite(p.y)&&std::isfinite(p.z);}
inline Vec3 Normalize(Vec3 p){float s=Dot(p,p);return std::isfinite(s)&&s>1e-12f?p*(1/std::sqrt(s)):Vec3{0,0,1};}
struct Box {Vec3 lo,hi;};
inline bool Valid(Box b){return Finite(b.lo)&&Finite(b.hi)&&b.lo.x<=b.hi.x&&b.lo.y<=b.hi.y&&b.lo.z<=b.hi.z;}
inline void Union(Box&a,Box b){a.lo={std::min(a.lo.x,b.lo.x),std::min(a.lo.y,b.lo.y),std::min(a.lo.z,b.lo.z)};a.hi={std::max(a.hi.x,b.hi.x),std::max(a.hi.y,b.hi.y),std::max(a.hi.z,b.hi.z)};}
struct Color {uint8_t r=255,g=255,b=255,a=255;};
struct alignas(16) RegisterBlock {
 // Exact native layout: p[16], misc, v[64]. Added last row: clip plane in THIS tile's vertex input space.
 float p[16][4]{},misc[4]{},v[64][4]{},plane[4]{};
};
static_assert(sizeof(RegisterBlock)==82*16,"std430 rows; native rows are never reinterpreted as x86 layouts");
struct alignas(16) Push {
 float clipToTarget[16]{1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1};
 uint32_t verticesPerTile=145,flags=0,pad[2]{};
};
static_assert(sizeof(Push)==80,"shared GLSL push contract");
enum PushFlags:uint32_t {Reproject=1,ClipPlane=2};
}
