// SPDX-License-Identifier: GPL-3.0-or-later
layout(local_size_x=8,local_size_y=8) in;
layout(set=0,binding=0) uniform sampler2D sceneDepth;
layout(set=0,binding=1) uniform sampler2D sceneNormal;
layout(set=0,binding=2) uniform sampler2D lowEndpoint;
layout(set=0,binding=3) uniform sampler2D highEndpoint;
layout(set=0,binding=4) uniform sampler2D shadow0;
layout(set=0,binding=5) uniform sampler2D shadow1;
layout(set=0,binding=6) uniform sampler2D shadow2;
layout(set=0,binding=7) uniform sampler2D shadow3;
layout(set=0,binding=8) uniform sampler2D shadow4;
layout(set=0,binding=9) uniform sampler2D contactSource;
layout(rgba8,set=0,binding=10) uniform writeonly image2D contactTarget;
layout(rgba8,set=0,binding=11) uniform image2D sceneColour;
layout(std140,set=0,binding=12) uniform Params {
 vec4 screen,view,rect,projection,depth,sun,settings,contact,jitter;
 vec4 rows[15];vec4 maps[5];
 vec4 extra; // HD (Claude) O1: x = render size / display size (1 without FSR), y = 1 O1 corrections on (hdSunFarFix), z = hdSunFarBias, w = SH3 hdSunPenumbraMin (yards)
} c;
layout(push_constant) uniform Pass {uvec4 flags;} pc;
// HD (Claude) O1: one D32 step of the stored depth at view depth z, in yards (forward Z: grows with z*z)
float depthStep(float z) {return z*z/c.depth.y*5.9604645e-8*c.screen.z;}
float linearDepth(ivec2 p) {float d=texelFetch(sceneDepth,clamp(p,ivec2(0),textureSize(sceneDepth,0)-1),0).r*c.screen.z+c.screen.w;return d>=c.depth.z?0:c.depth.y/max(c.depth.x-d,1e-8);}
vec3 pointAt(vec2 uv,float z) {
 vec2 v=(uv-c.rect.xy)*c.rect.zw;
 v-=c.jitter.xy*c.screen.xy*c.rect.zw;
 return vec3(v*c.view.xy+c.view.zw,1)*z;
}
vec2 project(vec3 p) {vec2 ndc=p.xy/p.z*c.projection.xy+c.projection.zw;return (vec2(ndc.x*.5+.5,.5-ndc.y*.5))/c.rect.zw+c.rect.xy+c.jitter.xy*c.screen.xy;}
bool matching(float tag,float z) {return abs(abs(tag)-(.505+.49*clamp((log2(max(z,.0625))+4)/16,0,1)))<c.depth.w;}
// HD: the depth a record was written at, from its tag (the inverse of the tag's log2 scale)
float tagDepth(float tag) {return exp2((abs(tag)-.505)/.49*16-4);}
// HD: a draw without a G-buffer variant (the grass) over another surface's record, that surface close behind it
// (the record's depth read from the normal's tag: SNORM, 0.1 %, finer than the endpoints' SFLOAT, so the blade's foot
// already counts as grass, not as the ground; the endpoints must be the same record)
float recordDepth(ivec2 px) {return tagDepth(texelFetch(sceneNormal,px,0).w);}
bool overRecord(ivec2 px,vec4 lo,vec4 hi,float z) {float t=texelFetch(sceneNormal,px,0).w,r=tagDepth(t);return z>0&&abs(t)>.5&&abs(t)<.999&&abs(lo.a)>.5&&lo.a*hi.a>0&&matching(lo.a,r)&&r>z*1.003&&r-z<max(c.jitter.w,z*.5);} // seen low, a tall blade stands far in front of the ground behind it
bool ownRecord(vec4 lo,vec4 hi,float z) {return z>0&&matching(lo.a,z)&&matching(hi.a,z)&&lo.a*hi.a>0;}
// HD: grass with no ground close behind it (against the sky, a far slope): no record to borrow, its own sun is taken
bool looseGrass(ivec2 px,vec4 lo,vec4 hi,float z) {return z>0&&z<300&&!ownRecord(lo,hi,z)&&!overRecord(px,lo,hi,z);}
// HD (Claude) O1: the true local plane, from the depth alone (the shading normal is smooth or baked and can disagree with the
// facet that is on screen). Same neighbour choice as the fallback in normalAt.
vec3 geometricNormal(ivec2 px,vec3 p) {
 vec2 uv=(vec2(px)+.5)*c.screen.xy;
 float l=linearDepth(px-ivec2(1,0)),r=linearDepth(px+ivec2(1,0)),u=linearDepth(px-ivec2(0,1)),d=linearDepth(px+ivec2(0,1));
 vec3 dx=abs(l-p.z)<abs(r-p.z)?p-pointAt(uv-vec2(c.screen.x,0),l):pointAt(uv+vec2(c.screen.x,0),r)-p;
 vec3 dy=abs(u-p.z)<abs(d-p.z)?p-pointAt(uv-vec2(0,c.screen.y),u):pointAt(uv+vec2(0,c.screen.y),d)-p;
 vec3 nn=cross(dx,dy);if(dot(nn,nn)<1e-12)return vec3(0);nn=normalize(nn);return dot(nn,p)>0?-nn:nn;
}
vec3 normalAt(ivec2 px,vec3 p) {
 vec4 n=texelFetch(sceneNormal,px,0);if(matching(n.w,p.z)&&dot(n.xyz,n.xyz)>.25)return normalize(n.xyz);
 vec2 uv=(vec2(px)+.5)*c.screen.xy;
 float l=linearDepth(px-ivec2(1,0)),r=linearDepth(px+ivec2(1,0)),u=linearDepth(px-ivec2(0,1)),d=linearDepth(px+ivec2(0,1));
 vec3 dx=abs(l-p.z)<abs(r-p.z)?p-pointAt(uv-vec2(c.screen.x,0),l):pointAt(uv+vec2(c.screen.x,0),r)-p;
 vec3 dy=abs(u-p.z)<abs(d-p.z)?p-pointAt(uv-vec2(0,c.screen.y),u):pointAt(uv+vec2(0,c.screen.y),d)-p;
 vec3 nn=cross(dx,dy);if(dot(nn,nn)<1e-12)return vec3(0,0,-1);nn=normalize(nn);return dot(nn,p)>0?-nn:nn;
}
float mapDepth(int i,vec2 uv) {if(i==0)return textureLod(shadow0,uv,0).r;if(i==1)return textureLod(shadow1,uv,0).r;if(i==2)return textureLod(shadow2,uv,0).r;if(i==3)return textureLod(shadow3,uv,0).r;return textureLod(shadow4,uv,0).r;}
vec3 shadowCoord(int i,vec3 p){vec4 q=vec4(p,1);return vec3(dot(q,c.rows[3*i]),dot(q,c.rows[3*i+1]),dot(q,c.rows[3*i+2]));}
const vec2 disk[24]=vec2[24](vec2(.143,.123),vec2(-.203,.245),vec2(.044,-.397),vec2(.31,.35),vec2(-.53,-.094),vec2(.507,-.311),vec2(-.139,.63),vec2(-.326,-.613),vec2(.697,.233),vec2(-.73,.264),vec2(.388,-.718),vec2(.21,.827),vec2(-.739,-.5),vec2(.897,-.245),vec2(-.515,.82),vec2(-.07,-.978),vec2(.72,.62),vec2(-.944,.06),vec2(.628,-.711),vec2(-.36,-.24),vec2(.03,.054),vec2(.025,.79),vec2(.62,-.08),vec2(-.5,.36));
// HD (Claude) O1: receiver-plane depth bias. Each tap is compared with the receiver's own plane at that tap, not
// with the receiver's depth: a slope lit at a grazing angle no longer shadows itself in the 160/640 yd bands (the
// 'waves' on far rock faces). Slope from the receiver normal through this band's own rows, capped at 85 degrees;
// plus half a texel diagonal of that slope (nearest taps) and two D32 steps of the reconstructed receiver.
// n = 0: no plane (loose grass), the plain receiver depth as before.
vec3 receiverPlane(int i,vec3 n,float z) {
 if(dot(n,n)<.25||c.extra.y<.5)return vec3(0);
 vec3 t1=normalize(cross(n,abs(n.z)<.9?vec3(0,0,1):vec3(1,0,0))),t2=cross(n,t1);
 vec3 a=vec3(dot(c.rows[3*i].xyz,t1),dot(c.rows[3*i+1].xyz,t1),dot(c.rows[3*i+2].xyz,t1));
 vec3 b=vec3(dot(c.rows[3*i].xyz,t2),dot(c.rows[3*i+1].xyz,t2),dot(c.rows[3*i+2].xyz,t2));
 mat2 m=mat2(a.xy*.5,b.xy*.5);float det=determinant(m);
 float zs=length(c.rows[3*i+2].xyz),us=.5*length(c.rows[3*i].xyz);
 vec2 g=abs(det)>1e-20?vec2(a.z,b.z)*inverse(m):vec2(0);
 float cap=11.43*zs/max(us,1e-12),len=length(g);if(len>cap)g*=cap/len;
 return vec3(g,length(g)*c.maps[i].y*c.extra.z+2*depthStep(z)*zs); // extra.z = hdSunFarBias, fraction of a texel of slope
}
// HD (Claude) O1: the map is read with a nearest sampler, so a tap holds the depth of its texel's CENTRE: the
// receiver plane is evaluated there, which removes the half-texel quantisation and lets the bias stay small
// (a large bias erased the real shadows of small far rocks).
vec2 texelCentre(vec2 tap,float texel) {return (floor(clamp(tap,vec2(0),vec2(.99999))/texel)+.5)*texel;}
// HD (Claude) SH3, 7 nov 2026: the map's 2x2 depths around a tap (gather ignores the nearest filter), for a bilinear
// comparison: the visible fraction moves smoothly with the tap instead of jumping texel by texel (no stair-stepped
// gradient once the penumbra is wide).
vec4 mapGather(int i,vec2 uv) {if(i==0)return textureGather(shadow0,uv,0);if(i==1)return textureGather(shadow1,uv,0);if(i==2)return textureGather(shadow2,uv,0);if(i==3)return textureGather(shadow3,uv,0);return textureGather(shadow4,uv,0);}
// HD (Claude) SH3: per-pixel rotation of the tap disk, set by the contact pass (the screen blur and FSR then smooth the
// noise into a gradient instead of 24 fixed contour lines). Only the contact pass defines HD_SUN_ROT and calls pcss(), so
// the blur and apply passes compile exactly as before.
#ifdef HD_SUN_ROT
vec2 sunRot=vec2(1,0);
// HD (Claude) RM6, 8 nov 2026: the G-buffer albedo (class in alpha bits 0..4, 1 = terrain), contact pass only.
layout(set=0,binding=13) uniform sampler2D sceneAlbedo;
// The pixel is the TERRAIN itself: class 1 and its record is its own (depth tag matching the depth there). Grass and
// other draws without a G-buffer variant keep the record of the ground behind them: their tag does not match.
// HD (Claude) RM7, 9 nov 2026: For Ever's own terrain shaders (HdTerrain:vs/ps, the translated manifest) carry a G-buffer
// variant that writes the depth tag but class 0 and an empty albedo (alpha byte 0, no bit): RM6 never saw them as terrain.
// A record of its own (tag matching) with an alpha byte of exactly 0 is that terrain: a draw without a variant keeps the
// record behind it (tag does not match), and every other variant writes a class above 0.
bool terrainAt(ivec2 sp,float z){uint a=uint(texelFetch(sceneAlbedo,sp,0).a*255.0+.5);return ((a&31u)==1u||a==0u)&&matching(texelFetch(sceneNormal,sp,0).w,z);}
#define HD_SUN_ROT_MAT mat2(sunRot.x,sunRot.y,-sunRot.y,sunRot.x)
#else
#define HD_SUN_ROT_MAT mat2(1)
#endif
#ifdef HD_SUN_LAT1
// Claude LAT1, 18 nov 2026 (same image, less waiting): Nsight showed the pass waiting on each map read in turn (the
// filter's gather 23 %, the blocker read 16 %), because each tap's read was used at once and the bounds 'continue' kept
// the compiler from issuing the next read early. Here LAT1_K reads of one band's own map are issued first (no band
// branch between them), then tested and summed exactly as before, tap by tap in the same order: same values, same
// operations, same order of the sums. A tap off the map is still read (the value is never used) and counted as before.
#ifndef LAT1_K
#define LAT1_K 4
#endif
// Claude SOLMM1, 19 nov 2026 (same image, fewer reads): each map's dilated tiles (HdSunTiles.comp), the least and the greatest
// depth of every texel within k tiles of a tile, k covering the farthest tap of this band plus 3 texels. pc.flags.y bit 8 + i:
// band i's tiles are ready this frame; bits 17 + 3i: the log2 of their side in texels (Claude OMBRE1); bit 16: the control (the region taken 2 texels wide: must differ).
layout(set=0,binding=15) uniform sampler2D tiles0;
layout(set=0,binding=16) uniform sampler2D tiles1;
layout(set=0,binding=17) uniform sampler2D tiles2;
layout(set=0,binding=18) uniform sampler2D tiles3;
layout(set=0,binding=19) uniform sampler2D tiles4;
vec2 tileAt(int i,ivec2 t){if(i==0)return texelFetch(tiles0,t,0).rg;if(i==1)return texelFetch(tiles1,t,0).rg;if(i==2)return texelFetch(tiles2,t,0).rg;if(i==3)return texelFetch(tiles3,t,0).rg;return texelFetch(tiles4,t,0).rg;}
#define LAT1_OFF(t) (any(lessThan(t,vec2(0)))||any(greaterThan(t,vec2(1))))
#define LAT1_BLOCKERS(S) for(int n0=0;n0<blockers;n0+=LAT1_K){vec2 tp[LAT1_K];float dd[LAT1_K]; \
  [[unroll]] for(int k=0;k<LAT1_K;++k){tp[k]=uv+rot*disk[n0+k]*max(search,texel);dd[k]=textureLod(S,tp[k],0).r;} \
  [[unroll]] for(int k=0;k<LAT1_K;++k){vec2 tap=tp[k];if(LAT1_OFF(tap))continue;float d=dd[k]; \
   if(d<q.z+dot(rp.xy,texelCentre(tap,texel)-uv)-rp.z){sum+=d;count++;}}}
#define LAT1_FILTER(S) for(int n0=0;n0<filters;n0+=LAT1_K){vec2 tp[LAT1_K];vec4 dd[LAT1_K]; \
  [[unroll]] for(int k=0;k<LAT1_K;++k){tp[k]=uv+rot*disk[n0+k]*radius;dd[k]=textureGather(S,tp[k],0);} \
  [[unroll]] for(int k=0;k<LAT1_K;++k){vec2 tap=tp[k];if(LAT1_OFF(tap)){visible+=1;continue;} \
   vec2 f=tap/texel-.5,b=floor(f),w=f-b;vec4 d=dd[k]; \
   float ref=q.z-rp.z+dot(rp.xy,(b+.5)*texel-uv),sx=rp.x*texel,sy=rp.y*texel; \
   vec4 lit=step(vec4(ref+sy,ref+sx+sy,ref+sx,ref),d); \
   visible+=mix(mix(lit.w,lit.z,w.x),mix(lit.x,lit.y,w.x),w.y);}}
#endif
float pcss(int i,vec3 p,vec3 n,float z) {
 if(c.maps[i].z<.5)return 1;
 vec3 q=shadowCoord(i,p);vec2 uv=q.xy*.5+.5;
 if(max(abs(q.x),abs(q.y))>=.995||q.z<=0||q.z>=1)return 1;
 vec3 rp=receiverPlane(i,n,z);
 // HD (Claude) SH3: yard = one yard in map uv (the map spans 2 x radius yards)
 float texel=c.maps[i].y,yard=1/(2*c.maps[i].x),search=min(c.settings.z*yard,.06);
 int blockers=pc.flags.z==0u?8:12,filters=pc.flags.z==0u?16:24;
#ifdef HD_SUN_LAT1
 // Claude SOLMM1: every tap below (blockers) is within max(search, texel) of uv (|disk| < 1), every filter tap within
 // wide <= max(search, texel), its gather and its texel centre within one texel more: R holds them all, with a texel to spare.
 // Each reference is q.z - rp.z + dot(rp.xy, an offset of at most R a side) (+ rp.xy texel for the gather's corners), so it
 // lies within base +- slope. All texels at or above the highest reference: no blocker, the loop below ends with count 0 and
 // the PCSS returns 1. All below the lowest: every blocker tap counts, every filter corner is shadowed, visible stays 0 and
 // it returns 0. Anything else (or the region not wholly on the map): the taps are read as before.
 if(((pc.flags.y>>(8+i))&1u)!=0u){
  float R=(pc.flags.y&65536u)!=0u?2*texel:max(search,texel)+3*texel;
  if(uv.x-R>=0&&uv.y-R>=0&&uv.x+R<=1&&uv.y+R<=1){
   vec2 mm=tileAt(i,ivec2(uv/texel)>>int((pc.flags.y>>(17+3*i))&7u));
   float base=q.z-rp.z,slope=(abs(rp.x)+abs(rp.y))*R,eps=1e-5*(1+slope+abs(base));
   if(mm.x>=base+slope+eps)return 1;
   if(mm.y<base-slope-eps)return 0;
  }
 }
#endif
 mat2 rot=HD_SUN_ROT_MAT;
 float sum=0,count=0;
#ifdef HD_SUN_LAT1
 if(i==0){LAT1_BLOCKERS(shadow0)}else if(i==1){LAT1_BLOCKERS(shadow1)}else if(i==2){LAT1_BLOCKERS(shadow2)}else if(i==3){LAT1_BLOCKERS(shadow3)}else{LAT1_BLOCKERS(shadow4)}
#else
 for(int n=0;n<blockers;++n){vec2 tap=uv+rot*disk[n]*max(search,texel);if(any(lessThan(tap,vec2(0)))||any(greaterThan(tap,vec2(1))))continue;float d=mapDepth(i,tap);if(d<q.z+dot(rp.xy,texelCentre(tap,texel)-uv)-rp.z){sum+=d;count++;}}
#endif
 if(count==0)return 1;
 // Native R32F stores linear light-view Z / 4000. Directional emitter: no perspective blocker division.
 // HD (Claude) SH3: the penumbra never narrower than hdSunPenumbraMin yards (extra.w): the foot of a hill no longer starts
 // with a cut edge; it still widens with the distance to the blocker (hdSunAngle), up to hdSunPenumbra.
 float wide=max(search,texel*.65),radius=clamp((q.z-sum/count)*c.maps[i].w*c.settings.x*yard,min(max(texel*.65,c.extra.w*yard),wide),wide);
 float visible=0;
#ifdef HD_SUN_LAT1
 if(i==0){LAT1_FILTER(shadow0)}else if(i==1){LAT1_FILTER(shadow1)}else if(i==2){LAT1_FILTER(shadow2)}else if(i==3){LAT1_FILTER(shadow3)}else{LAT1_FILTER(shadow4)}
#else
 for(int n=0;n<filters;++n){vec2 tap=uv+rot*disk[n]*radius;if(any(lessThan(tap,vec2(0)))||any(greaterThan(tap,vec2(1)))){visible+=1;continue;}
  vec2 f=tap/texel-.5,b=floor(f),w=f-b;vec4 d=mapGather(i,tap); // x (0,1) y (1,1) z (1,0) w (0,0)
  float ref=q.z-rp.z+dot(rp.xy,(b+.5)*texel-uv),sx=rp.x*texel,sy=rp.y*texel;
  vec4 lit=step(vec4(ref+sy,ref+sx+sy,ref+sx,ref),d);
  visible+=mix(mix(lit.w,lit.z,w.x),mix(lit.x,lit.y,w.x),w.y);}
#endif
 return visible/float(filters);
}
float environment(vec3 p,vec3 n,float z) {
 // HD: same result as blending bands 3..1, but a band that fully holds the point (inside its .85 edge) hides the
 // bands after it, so their PCSS is not computed (2 = band not used, as before)
 float s[4];int last=0;
 for(int i=1;i<=3;++i){s[i]=2;if(c.maps[i].z>.5){vec3 q=shadowCoord(i,p);float edge=max(abs(q.x),abs(q.y));if(edge<.98)s[i]=smoothstep(.85,.98,edge);}last=i;if(s[i]==0)break;}
 float v=1;
 for(int i=last;i>=1;--i)if(s[i]<1.5)v=mix(pcss(i,p,n,z),v,s[i]);
 return v;
}
float visibility(vec3 p,bool interior,vec3 n,float z) {
 if(interior)return pcss(4,p,n,z);
 vec3 q=shadowCoord(0,p);float edge=max(abs(q.x),abs(q.y));
 if(!(c.maps[0].z>.5&&edge<.98))return environment(p,n,z);
 // HD (Claude) S5, 5 nov 2026: same result, less work. The 40 yd band is read first; where it is fully dark and holds
 // the point inside its .85 edge (blend weight exactly 0), the result is min(env,0)=0 whatever env is (env is in [0,1]),
 // so the 160/640 yd bands are not read there.
 float near=pcss(0,p,n,z),w=smoothstep(.85,.98,edge);
 if(near==0.0&&w==0.0)return 0.0;
 float env=environment(p,n,z);
 return mix(min(env,near),env,w);
}
