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
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r0 = OptTex5Lod( r0.xy, r0.w);
    vec2 _62 = vec2(1.0, 0.0) * v4.zx;
    r1.z = _62.x;
    r1.w = _62.y;
    vec2 _72 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = _72.x;
    r0.z = _72.y;
    vec2 _94 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = _94.x;
    r1.y = _94.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _114 = vec2(1.0, 0.0) * v4.zx;
    r1.z = _114.x;
    r1.w = _114.y;
    vec2 _125 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = _125.x;
    r1.y = _125.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _148 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = _148.x;
    r1.y = _148.y;
    vec2 _159 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = _159.x;
    r2.y = _159.y;
    vec2 _166 = vec2(1.0, 0.0) * v4.zx;
    r1.z = _166.x;
    r1.w = _166.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _185 = vec2(1.0, 0.0) * v4.zx;
    r2.z = _185.x;
    r2.w = _185.y;
    r1 = OptTex5Lod( r2.xy, r2.w);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    r1 = OptTex1( v3.xy);
    r2.x = min(r0.x, r1.w);
    r0.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r0.y = abs(optRegs.rows[optTile*82u+uint(1)].x);
    r1 = OptTex0( v2.xy);
    vec3 _270 = r1.xyz * v0.xyz;
    r2.y = _270.x;
    r2.z = _270.y;
    r2.w = _270.z;
    vec4 _277 = r2;
    vec4 _279 = r2;
    vec3 _281 = _277.yzw + _279.yzw;
    r2.y = _281.x;
    r2.z = _281.y;
    r2.w = _281.z;
    vec4 _290 = r1;
    vec3 _299 = mix(r2.yzw, _290.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r1.x = _299.x;
    r1.y = _299.y;
    r1.z = _299.z;
    r0 = r0.xxxx * r1;
    vec3 _314 = r0.www * v1.xyz;
    r1.x = _314.x;
    r1.y = _314.y;
    r1.z = _314.z;
    vec4 _323 = r1;
    vec3 _325 = r2.xxx * _323.xyz;
    r1.x = _325.x;
    r1.y = _325.y;
    r1.z = _325.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _339 = r0;
    vec4 _341 = r0;
    vec3 _346 = (_339.xyz * _341.www) + r1.xyz;
    r0.x = _346.x;
    r0.y = _346.y;
    r0.z = _346.z;
    vec4 _353 = r0;
    vec3 _360 = _353.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _360.x;
    r0.y = _360.y;
    r0.z = _360.z;
    vec3 _375 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _375.x;
    oC0.y = _375.y;
    oC0.z = _375.z;
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
