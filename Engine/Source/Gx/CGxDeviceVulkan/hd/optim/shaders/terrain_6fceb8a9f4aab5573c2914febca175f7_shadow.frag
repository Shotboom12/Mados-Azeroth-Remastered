#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

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
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
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
    vec2 _67 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = _67.x;
    r2.y = _67.y;
    vec2 _90 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = _90.x;
    r1.y = _90.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 _114 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = _114.x;
    r1.y = _114.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.z = r1.x;
    vec2 _134 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = _134.x;
    r1.y = _134.y;
    vec4 _139 = r2;
    vec2 _145 = _139.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = _145.x;
    r2.y = _145.y;
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
    r1 = OptTex1( v3.xy);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r1 = OptTex0( v2.xy);
    vec3 _264 = r1.www * v1.xyz;
    r0.y = _264.x;
    r0.z = _264.y;
    r0.w = _264.z;
    vec4 _273 = r0;
    vec3 _275 = r2.xxx * _273.yzw;
    r0.y = _275.x;
    r0.z = _275.y;
    r0.w = _275.z;
    vec3 _286 = r1.xyz * v0.xyz;
    r2.x = _286.x;
    r2.y = _286.y;
    r2.z = _286.z;
    vec4 _293 = r2;
    vec4 _295 = r2;
    vec3 _297 = _293.xyz + _295.xyz;
    r2.x = _297.x;
    r2.y = _297.y;
    r2.z = _297.z;
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec4 _312 = r1;
    vec4 _314 = r1;
    vec3 _320 = mix(r2.xyz, _312.xyz, greaterThanEqual(-_314.www, vec3(0.0)));
    r1.x = _320.x;
    r1.y = _320.y;
    r1.z = _320.z;
    vec4 _329 = r0;
    vec4 _332 = r0;
    vec3 _334 = (r1.xyz * _329.xxx) + _332.yzw;
    r0.x = _334.x;
    r0.y = _334.y;
    r0.z = _334.z;
    vec4 _341 = r0;
    vec3 _348 = _341.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _348.x;
    r0.y = _348.y;
    r0.z = _348.z;
    vec3 _363 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _363.x;
    oC0.y = _363.y;
    oC0.z = _363.z;
    oC0.w = 1.0;
    bool _374 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _382;
    if (_374)
    {
        _382 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _382 = _374;
    }
    if (_382)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
