#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];

vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 6) in vec4 texcoord4;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
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
    r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r0 = OptTex5Lod( r0.xy, r0.w);
    vec2 _68 = vec2(1.0, 0.0) * v5.zx;
    r1.z = _68.x;
    r1.w = _68.y;
    vec2 _78 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r0.y = _78.x;
    r0.z = _78.y;
    vec2 _100 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = _100.x;
    r1.y = _100.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _120 = vec2(1.0, 0.0) * v5.zx;
    r1.z = _120.x;
    r1.w = _120.y;
    vec2 _131 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = _131.x;
    r1.y = _131.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _154 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = _154.x;
    r1.y = _154.y;
    vec2 _165 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = _165.x;
    r2.y = _165.y;
    vec2 _172 = vec2(1.0, 0.0) * v5.zx;
    r1.z = _172.x;
    r1.w = _172.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _191 = vec2(1.0, 0.0) * v5.zx;
    r2.z = _191.x;
    r2.w = _191.y;
    r1 = OptTex5Lod( r2.xy, r2.w);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    r1 = OptTex4( v4.wz);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r3 = OptTex0( v2.xy);
    r4 = OptTex1( v3.xy);
    r5 = mix(r3, r4, r1.xxxx);
    r3 = OptTex2( v3.wz);
    r4 = mix(r5, r3, r1.yyyy);
    r3 = OptTex3( v4.xy);
    r5 = mix(r4, r3, r1.zzzz);
    vec4 _292 = r0;
    vec3 _296 = _292.xxx * r5.xyz;
    r0.x = _296.x;
    r0.y = _296.y;
    r0.z = _296.z;
    vec3 _307 = r5.www * v1.xyz;
    r1.x = _307.x;
    r1.y = _307.y;
    r1.z = _307.z;
    vec4 _314 = r0;
    vec3 _318 = _314.xyz * v0.xyz;
    r0.x = _318.x;
    r0.y = _318.y;
    r0.z = _318.z;
    vec4 _325 = r0;
    vec4 _327 = r0;
    vec3 _329 = _325.xyz + _327.xyz;
    r0.x = _329.x;
    r0.y = _329.y;
    r0.z = _329.z;
    vec4 _341 = r0;
    vec3 _343 = (r1.xyz * r2.xxx) + _341.xyz;
    r0.x = _343.x;
    r0.y = _343.y;
    r0.z = _343.z;
    vec4 _350 = r0;
    vec3 _357 = _350.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _357.x;
    r0.y = _357.y;
    r0.z = _357.z;
    vec3 _372 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _372.x;
    oC0.y = _372.y;
    oC0.z = _372.z;
    oC0.w = 1.0;
    bool _386 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _394;
    if (_386)
    {
        _394 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _394 = _386;
    }
    if (_394)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
