#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 6) in vec4 texcoord4;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    vec3 _65 = v0.xyz + v0.xyz;
    r2.x = _65.x;
    r2.y = _65.y;
    r2.z = _65.z;
    vec3 _81 = r0.xyz * r2.xyz;
    r3.x = _81.x;
    r3.y = _81.y;
    r3.z = _81.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 _104 = r0;
    vec3 _113 = mix(r3.xyz, _104.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = _113.x;
    r0.y = _113.y;
    r0.z = _113.z;
    vec3 _124 = r1.xyz * r2.xyz;
    r3.x = _124.x;
    r3.y = _124.y;
    r3.z = _124.z;
    vec4 _133 = r1;
    vec3 _139 = mix(r3.xyz, _133.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = _139.x;
    r1.y = _139.y;
    r1.z = _139.z;
    r3 = OptTex4( v4.wz);
    r5 = mix(r0, r1, r3.xxxx);
    r0 = OptTex2( v3.wz);
    vec3 _165 = r2.xyz * r0.xyz;
    r1.x = _165.x;
    r1.y = _165.y;
    r1.z = _165.z;
    vec4 _174 = r0;
    vec3 _180 = mix(r1.xyz, _174.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = _180.x;
    r0.y = _180.y;
    r0.z = _180.z;
    r1 = mix(r5, r0, r3.yyyy);
    r0 = OptTex3( v4.xy);
    vec4 _197 = r2;
    vec3 _201 = _197.xyz * r0.xyz;
    r2.x = _201.x;
    r2.y = _201.y;
    r2.z = _201.z;
    vec4 _210 = r0;
    vec3 _216 = mix(r2.xyz, _210.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r0.x = _216.x;
    r0.y = _216.y;
    r0.z = _216.z;
    r2 = mix(r1, r0, r3.zzzz);
    vec3 _232 = r2.www * v1.xyz;
    r0.x = _232.x;
    r0.y = _232.y;
    r0.z = _232.z;
    r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r1 = OptTex5Lod( r1.xy, r1.w);
    vec2 _258 = vec2(1.0, 0.0) * v5.zx;
    r4.z = _258.x;
    r4.w = _258.y;
    vec2 _267 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r1.y = _267.x;
    r1.z = _267.y;
    vec2 _278 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = _278.x;
    r4.y = _278.y;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r0.w = r1.x + r4.x;
    vec2 _297 = vec2(1.0, 0.0) * v5.zx;
    r4.z = _297.x;
    r4.w = _297.y;
    vec2 _308 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = _308.x;
    r4.y = _308.y;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r0.w += r4.x;
    vec2 _331 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = _331.x;
    r4.y = _331.y;
    vec4 _336 = r1;
    vec2 _342 = _336.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r1.x = _342.x;
    r1.y = _342.y;
    vec2 _349 = vec2(1.0, 0.0) * v5.zx;
    r4.z = _349.x;
    r4.w = _349.y;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r0.w += r4.x;
    vec2 _368 = vec2(1.0, 0.0) * v5.zx;
    r1.z = _368.x;
    r1.w = _368.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.w += r1.x;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.x * r0.w) + 1.0;
    r1.x = min(r0.w, r3.w);
    vec4 _421 = r0;
    vec3 _425 = _421.xyz * r1.xxx;
    r0.x = _425.x;
    r0.y = _425.y;
    r0.z = _425.z;
    r0.w = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _441 = r0;
    vec4 _444 = r0;
    vec3 _446 = (r2.xyz * _441.www) + _444.xyz;
    r0.x = _446.x;
    r0.y = _446.y;
    r0.z = _446.z;
    vec4 _453 = r0;
    vec3 _460 = _453.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _460.x;
    r0.y = _460.y;
    r0.z = _460.z;
    vec3 _475 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _475.x;
    oC0.y = _475.y;
    oC0.z = _475.z;
    oC0.w = 1.0;
    bool _487 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _495;
    if (_487)
    {
        _495 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _495 = _487;
    }
    if (_495)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
