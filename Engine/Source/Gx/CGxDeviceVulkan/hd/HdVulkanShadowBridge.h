// SPDX-License-Identifier: GPL-3.0-or-later
#pragma once
#include <cstdint>
#include "vulkan/Texture.hpp"
#include <cstdio>
#include <cstring>
namespace HD::VulkanShadows::Bridge {
// Render-thread only. Image IDs never repeat within a device session. No pointer/offset tricks.
inline bool enabled = false;
inline uint32_t ids[5]{};
inline uint32_t Mask(const wxlvk::vk::texture::Image* const* textures) {
    if (!enabled) return 0;
    uint32_t mask=0;
    for(uint32_t slot=0;slot<16;++slot) if(textures[slot] && textures[slot]->id)
        for(uint32_t i=0;i<5;++i) if(ids[i] && textures[slot]->id==ids[i]) {mask|=1u<<slot;break;}
    return mask;
}
inline uint32_t InteriorMask(const wxlvk::vk::texture::Image* const* textures) {
 if(!enabled||!ids[4])return 0;uint32_t mask=0;for(uint32_t slot=0;slot<16;++slot)if(textures[slot]&&textures[slot]->id==ids[4])mask|=1u<<slot;return mask;
}
// HD diagnostic (hdSunInfo, text only): what the terrain draws since the last shadow stage bound in slots 5..8
// (the native shadow maps) and which of them the mask above recognised.
inline uint32_t diagDraws=0,diagOr=0,diagAnd=0xFFFFFFFFu,diagBound=0,diagUnknown=0,diagUnknownId=0;
inline char diagPs[2][24]{};
inline float diagRows[12][4]{};          // s_shadowMatrices as CaptureNativeMaps took them
inline float diagMaxDiff=0,diagDrawRow[4]{},diagCapRow[4]{};
inline uint32_t diagRecGbuf=0,diagRecNull=0,diagRecPlain=0; // terrain draws recorded with the G-buffer variant / masked / outside the G-buffer pass
inline float diagNear[4]{1e30f,1e30f,1e30f,1e30f}; // smallest max(|x|,|y|) of a terrain chunk origin per band (dyn, b0, b1, b2)
inline int diagNan=0;inline float diagCam[3]{};
inline float diagZ[4][2]{};        // light-space depth of the chunk origins per band: min, max
inline float diagC49[2]{},diagC50[2]{}; // c49.z (Forever flag) and c50.x (ambient strength) over the terrain draws: min, max
inline uint32_t diagZn=0;
inline void DiagReset(){for(float& n:diagNear)n=1e30f;diagNan=0;diagZn=0;diagDraws=0;diagOr=0;diagAnd=0xFFFFFFFFu;diagBound=0;diagUnknown=0;diagUnknownId=0;diagPs[0][0]=diagPs[1][0]=0;diagMaxDiff=0;diagRecGbuf=diagRecNull=diagRecPlain=0;}
inline void DiagTerrain(const wxlvk::vk::texture::Image* const* textures,uint32_t mask,const char* ps,const float (*v)[4]) {
 if(!enabled)return;++diagDraws;diagOr|=mask;diagAnd&=mask;
 for(uint32_t slot=5;slot<9;++slot)if(textures[slot]&&textures[slot]->id){diagBound|=1u<<slot;if(!(mask&(1u<<slot))){diagUnknown|=1u<<slot;diagUnknownId=textures[slot]->id;}}
 // the draw's shadow matrices (vertex c37..c48) against the captured ones
 if(v){float d=0;for(int r=0;r<12;++r)for(int k=0;k<4;++k){float e=v[37+r][k]-diagRows[r][k];if(e<0)e=-e;if(!(e<=d))d=e;}
  if(!(d<=diagMaxDiff)||diagDraws==1){diagMaxDiff=d;for(int k=0;k<4;++k){diagDrawRow[k]=v[37][k];diagCapRow[k]=diagRows[0][k];}}}
 // where the chunk origin (c23) falls in each band, with this draw's view (c0..c3) and shadow rows
 if(v){float vp[4];for(int k=0;k<3;++k)vp[k]=v[23][0]*v[0][k]+v[23][1]*v[1][k]+v[23][2]*v[2][k]+v[3][k];vp[3]=1.0f;
  auto row=[&](int r){return vp[0]*v[37+r][0]+vp[1]*v[37+r][1]+vp[2]*v[37+r][2]+vp[3]*v[37+r][3];};
  const int rx[4]={0,3,6,9},ry[4]={1,4,7,10};
  for(int b=0;b<4;++b){float x=row(rx[b]),y=row(ry[b]);if(x<0)x=-x;if(y<0)y=-y;float m=x>y?x:y;if(m!=m){++diagNan;continue;}if(m<diagNear[b])diagNear[b]=m;}
  const int rz[4]={2,5,8,11};
  for(int b=0;b<4;++b){float z=row(rz[b]);if(!diagZn||z<diagZ[b][0])diagZ[b][0]=z;if(!diagZn||z>diagZ[b][1])diagZ[b][1]=z;}
  if(!diagZn||v[49][2]<diagC49[0])diagC49[0]=v[49][2];if(!diagZn||v[49][2]>diagC49[1])diagC49[1]=v[49][2];
  if(!diagZn||v[50][0]<diagC50[0])diagC50[0]=v[50][0];if(!diagZn||v[50][0]>diagC50[1])diagC50[1]=v[50][0];
  ++diagZn;
  for(int k=0;k<3;++k)diagCam[k]=v[53][k];}
 for(int i=0;i<2;++i){if(!diagPs[i][0]){std::snprintf(diagPs[i],sizeof diagPs[i],"%s",ps);break;}if(!std::strncmp(diagPs[i],ps,sizeof diagPs[i]-1))break;}
}
}
