// Claude OMBRE1, 24 nov 2026: one line of the shadow blur (HdSunBlur.comp), red and green only (blue repeats green). A window of five
// equal texels is its own average (the pixel's own weight is 1, so the total is never 0, and the 8-bit result is that value): nothing
// else is read there.
vec2 flou(ivec2 px,ivec2 axis,ivec2 last,float z,float la){
 vec2 s0=texelFetch(contactSource,clamp(px-2*axis,ivec2(0),last),0).rg,s1=texelFetch(contactSource,clamp(px-axis,ivec2(0),last),0).rg,
  s2=texelFetch(contactSource,px,0).rg,s3=texelFetch(contactSource,clamp(px+axis,ivec2(0),last),0).rg,s4=texelFetch(contactSource,clamp(px+2*axis,ivec2(0),last),0).rg;
 if(s0==s2&&s1==s2&&s3==s2&&s4==s2)return s2;
 float sigma=c.extra.y>.5?max(c.extra.x*c.extra.x,.0625):1.0,range=max(.015,z*.002),total=0;vec2 value=vec2(0);
#define FLOU(i,s) {ivec2 tap=clamp(px+axis*(i),ivec2(0),last);float d=linearDepth(tap);float w=exp(-float((i)*(i))*.5/sigma)*exp(-abs(z-d)/range);\
 if((z==0)!=(d==0)||la*texelFetch(lowEndpoint,tap,0).a<0)w=0;value+=s*w;total+=w;}
 FLOU(-2,s0) FLOU(-1,s1) FLOU(0,s2) FLOU(1,s3) FLOU(2,s4)
 return total>0?value/total:vec2(1);
}
