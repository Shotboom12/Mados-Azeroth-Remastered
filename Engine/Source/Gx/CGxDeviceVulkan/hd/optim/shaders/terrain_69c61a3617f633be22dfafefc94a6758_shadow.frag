#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r0 = OptTex5Lod( r0.xy, r0.w);
    vec2 _64 = vec2(1.0, 0.0) * v4.zx;
    r1.z = _64.x;
    r1.w = _64.y;
    vec2 _74 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = _74.x;
    r0.z = _74.y;
    vec2 _96 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = _96.x;
    r1.y = _96.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _116 = vec2(1.0, 0.0) * v4.zx;
    r1.z = _116.x;
    r1.w = _116.y;
    vec2 _127 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = _127.x;
    r1.y = _127.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _150 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = _150.x;
    r1.y = _150.y;
    vec2 _161 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = _161.x;
    r2.y = _161.y;
    vec2 _168 = vec2(1.0, 0.0) * v4.zx;
    r1.z = _168.x;
    r1.w = _168.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _187 = vec2(1.0, 0.0) * v4.zx;
    r2.z = _187.x;
    r2.w = _187.y;
    r1 = OptTex5Lod( r2.xy, r2.w);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    r1 = OptTex2( v3.wz);
    r2.x = min(r0.x, r1.w);
    r0.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    vec2 _261 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.y = _261.x;
    r0.z = _261.y;
    vec3 _270 = v0.xyz + v0.xyz;
    r1.y = _270.x;
    r1.z = _270.y;
    r1.w = _270.z;
    r3 = OptTex1( v3.xy);
    vec3 _286 = r1.yzw * r3.xyz;
    r2.y = _286.x;
    r2.z = _286.y;
    r2.w = _286.z;
    vec4 _295 = r3;
    vec3 _304 = mix(r2.yzw, _295.xyz, greaterThanEqual(-r0.zzz, vec3(0.0)));
    r3.x = _304.x;
    r3.y = _304.y;
    r3.z = _304.z;
    r3 = r1.xxxx * r3;
    r4 = OptTex0( v2.xyz);
    vec4 _323 = r1;
    vec3 _327 = _323.yzw * r4.xyz;
    r1.x = _327.x;
    r1.y = _327.y;
    r1.z = _327.z;
    vec4 _336 = r4;
    vec3 _342 = mix(r1.xyz, _336.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = _342.x;
    r4.y = _342.y;
    r4.z = _342.z;
    r0 = (r4 * r0.xxxx) + r3;
    vec3 _359 = r0.www * v1.xyz;
    r1.x = _359.x;
    r1.y = _359.y;
    r1.z = _359.z;
    vec4 _368 = r1;
    vec3 _370 = r2.xxx * _368.xyz;
    r1.x = _370.x;
    r1.y = _370.y;
    r1.z = _370.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _384 = r0;
    vec4 _386 = r0;
    vec3 _391 = (_384.xyz * _386.www) + r1.xyz;
    r0.x = _391.x;
    r0.y = _391.y;
    r0.z = _391.z;
    vec4 _398 = r0;
    vec3 _405 = _398.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _405.x;
    r0.y = _405.y;
    r0.z = _405.z;
    vec3 _420 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _420.x;
    oC0.y = _420.y;
    oC0.z = _420.z;
    oC0.w = 1.0;
    bool _432 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _440;
    if (_432)
    {
        _440 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _440 = _432;
    }
    if (_440)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
