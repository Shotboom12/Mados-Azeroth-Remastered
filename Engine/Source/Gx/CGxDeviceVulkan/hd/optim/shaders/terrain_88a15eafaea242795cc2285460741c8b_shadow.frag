#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r0 = OptTex5Lod( r0.xy, r0.w);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 _69 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = _69.x;
    r2.y = _69.y;
    vec2 _92 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = _92.x;
    r1.y = _92.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 _116 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = _116.x;
    r1.y = _116.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.z = r1.x;
    vec2 _136 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = _136.x;
    r1.y = _136.y;
    vec4 _141 = r2;
    vec2 _147 = _141.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = _147.x;
    r2.y = _147.y;
    r1.z = 0.0;
    r1.w = 0.0;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.w = r1.x;
    r0 += (-v4.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    r1 = OptTex5Lod( r2.xy, r2.w);
    r0.y = r1.x + (-v4.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    r1 = OptTex2( v3.wz);
    r2.x = min(r0.x, r1.w);
    vec2 _253 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.x = _253.x;
    r0.y = _253.y;
    vec3 _263 = v0.xyz + v0.xyz;
    r1.y = _263.x;
    r1.z = _263.y;
    r1.w = _263.z;
    r3 = OptTex0( v2.xy);
    vec3 _279 = r1.yzw * r3.xyz;
    r2.y = _279.x;
    r2.z = _279.y;
    r2.w = _279.z;
    vec4 _288 = r3;
    vec3 _296 = mix(r2.yzw, _288.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r3.x = _296.x;
    r3.y = _296.y;
    r3.z = _296.z;
    r4 = OptTex1( v3.xy);
    vec3 _312 = r1.yzw * r4.xyz;
    r0.x = _312.x;
    r0.z = _312.y;
    r0.w = _312.z;
    vec4 _321 = r4;
    vec3 _327 = mix(r0.xzw, _321.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = _327.x;
    r4.y = _327.y;
    r4.z = _327.z;
    r0 = mix(r3, r4, r1.xxxx);
    vec3 _343 = r0.www * v1.xyz;
    r1.x = _343.x;
    r1.y = _343.y;
    r1.z = _343.z;
    vec4 _352 = r1;
    vec3 _354 = r2.xxx * _352.xyz;
    r1.x = _354.x;
    r1.y = _354.y;
    r1.z = _354.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _368 = r0;
    vec4 _370 = r0;
    vec3 _375 = (_368.xyz * _370.www) + r1.xyz;
    r0.x = _375.x;
    r0.y = _375.y;
    r0.z = _375.z;
    vec4 _382 = r0;
    vec3 _389 = _382.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _389.x;
    r0.y = _389.y;
    r0.z = _389.z;
    vec3 _404 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _404.x;
    oC0.y = _404.y;
    oC0.z = _404.z;
    oC0.w = 1.0;
    bool _416 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _424;
    if (_416)
    {
        _424 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _424 = _416;
    }
    if (_424)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
