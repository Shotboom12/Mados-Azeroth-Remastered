#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
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
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    r1 = OptTex1( v3.xy);
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _75 = r0.xyz * v0.xyz;
    r2.x = _75.x;
    r2.y = _75.y;
    r2.z = _75.z;
    vec4 _84 = r2;
    vec4 _86 = r2;
    vec3 _88 = _84.xyz + _86.xyz;
    r2.x = _88.x;
    r2.y = _88.y;
    r2.z = _88.z;
    vec4 _97 = r0;
    vec3 _106 = mix(r2.xyz, _97.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = _106.x;
    r0.y = _106.y;
    r0.z = _106.z;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _163 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _163.x;
        r1.z = _163.y;
        vec2 _175 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _175.x;
        r3.y = _175.y;
        vec2 _183 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _183.x;
        r3.w = _183.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r2.x += r3.x;
        vec2 _206 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _206.x;
        r3.y = _206.y;
        vec2 _213 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _213.x;
        r3.w = _213.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r2.x += r3.x;
        vec2 _236 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = _236.x;
        r3.y = _236.y;
        vec2 _243 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _243.x;
        r3.w = _243.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r2.x += r3.x;
        vec2 _266 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = _266.x;
        r3.y = _266.y;
        vec2 _273 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _273.x;
        r3.w = _273.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.y = r2.x + r3.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r1.w);
    }
    else
    {
        r2.x = r1.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _325 = r0.www * v1.xyz;
    r1.y = _325.x;
    r1.z = _325.y;
    r1.w = _325.z;
    vec4 _334 = r1;
    vec3 _336 = r2.xxx * _334.yzw;
    r1.y = _336.x;
    r1.z = _336.y;
    r1.w = _336.z;
    vec4 _343 = r0;
    vec3 _350 = (_343.xyz * r1.xxx) + r1.yzw;
    r0.x = _350.x;
    r0.y = _350.y;
    r0.z = _350.z;
    vec4 _357 = r0;
    vec3 _364 = _357.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _364.x;
    r0.y = _364.y;
    r0.z = _364.z;
    vec3 _379 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _379.x;
    oC0.y = _379.y;
    oC0.z = _379.z;
    oC0.w = 1.0;
    bool _390 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _398;
    if (_390)
    {
        _398 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _398 = _390;
    }
    if (_398)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
