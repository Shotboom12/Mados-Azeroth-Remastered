#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 6) in vec4 texcoord4;
layout(location = 7) in vec4 texcoord5;
layout(location = 8) in vec4 texcoord6;
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
vec4 OptTex6Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s6[0],uv,dx,dy);if(optTile==1u)return textureGrad(s6[1],uv,dx,dy);if(optTile==2u)return textureGrad(s6[2],uv,dx,dy);return textureGrad(s6[3],uv,dx,dy);}
vec4 OptTex6(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex6Grad(uv,dx,dy);}
vec4 OptTex6(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex6Grad(uv,dx,dy);}
vec4 OptTex6Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s6[0],uv,lod);if(optTile==1u)return textureLod(s6[1],uv,lod);if(optTile==2u)return textureLod(s6[2],uv,lod);return textureLod(s6[3],uv,lod);}
vec4 OptTex7Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s7[0],uv,dx,dy);if(optTile==1u)return textureGrad(s7[1],uv,dx,dy);if(optTile==2u)return textureGrad(s7[2],uv,dx,dy);return textureGrad(s7[3],uv,dx,dy);}
vec4 OptTex7(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex7Grad(uv,dx,dy);}
vec4 OptTex7(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex7Grad(uv,dx,dy);}
vec4 OptTex7Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s7[0],uv,lod);if(optTile==1u)return textureLod(s7[1],uv,lod);if(optTile==2u)return textureLod(s7[2],uv,lod);return textureLod(s7[3],uv,lod);}
vec4 OptTex8Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s8[0],uv,dx,dy);if(optTile==1u)return textureGrad(s8[1],uv,dx,dy);if(optTile==2u)return textureGrad(s8[2],uv,dx,dy);return textureGrad(s8[3],uv,dx,dy);}
vec4 OptTex8(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex8Grad(uv,dx,dy);}
vec4 OptTex8(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex8Grad(uv,dx,dy);}
vec4 OptTex8Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s8[0],uv,lod);if(optTile==1u)return textureLod(s8[1],uv,lod);if(optTile==2u)return textureLod(s8[2],uv,lod);return textureLod(s8[3],uv,lod);}
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    vec4 r6 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = texcoord5;
    vec4 v7 = texcoord6;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r3 = OptTex3( v4.xy);
    vec3 _93 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = _93.x;
    r4.y = _93.y;
    r4.z = _93.z;
    vec3 _108 = v0.xyz + v0.xyz;
    r5.x = _108.x;
    r5.y = _108.y;
    r5.z = _108.z;
    vec3 _119 = r0.xyz * r5.xyz;
    r6.x = _119.x;
    r6.y = _119.y;
    r6.z = _119.z;
    vec4 _128 = r0;
    vec3 _137 = mix(r6.xyz, _128.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = _137.x;
    r0.y = _137.y;
    r0.z = _137.z;
    vec3 _148 = r1.xyz * r5.xyz;
    r6.x = _148.x;
    r6.y = _148.y;
    r6.z = _148.z;
    vec4 _157 = r1;
    vec3 _163 = mix(r6.xyz, _157.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = _163.x;
    r1.y = _163.y;
    r1.z = _163.z;
    vec3 _174 = r2.xyz * r5.xyz;
    r4.x = _174.x;
    r4.y = _174.y;
    r4.w = _174.z;
    vec4 _184 = r2;
    vec3 _190 = mix(r4.xyw, _184.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = _190.x;
    r2.y = _190.y;
    r2.z = _190.z;
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 = r3.xxxx * r1;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _273 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _273.x;
        r1.z = _273.y;
        vec2 _284 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _284.x;
        r3.y = _284.y;
        vec2 _292 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _292.x;
        r3.w = _292.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _315 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _315.x;
        r2.y = _315.y;
        vec2 _322 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _322.x;
        r2.w = _322.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _345 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _345.x;
        r2.y = _345.y;
        vec2 _352 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _352.x;
        r2.w = _352.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _375 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _375.x;
        r2.y = _375.y;
        vec2 _382 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _382.x;
        r2.w = _382.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v6.x), abs(v6.y));
    if (r1.y < 1.0)
    {
        r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex6Lod( r2.xy, r2.w);
        vec2 _442 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _442.x;
        r1.z = _442.y;
        vec2 _452 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _452.x;
        r3.y = _452.y;
        vec2 _459 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _459.x;
        r3.w = _459.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _481 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _481.x;
        r2.y = _481.y;
        vec2 _488 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _488.x;
        r2.w = _488.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _510 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _510.x;
        r2.y = _510.y;
        vec2 _517 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _517.x;
        r2.w = _517.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _539 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _539.x;
        r2.y = _539.y;
        vec2 _546 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _546.x;
        r2.w = _546.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex7Lod( r2.xy, r2.w);
            vec2 _595 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _595.x;
            r1.w = _595.y;
            vec2 _605 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _605.x;
            r3.y = _605.y;
            vec2 _612 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _612.x;
            r3.w = _612.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _634 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _634.x;
            r3.y = _634.y;
            vec2 _641 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _641.x;
            r3.w = _641.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _663 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _663.x;
            r3.y = _663.y;
            vec2 _670 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _670.x;
            r3.w = _670.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _692 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _692.x;
            r3.y = _692.y;
            vec2 _699 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _699.x;
            r3.w = _699.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 _731 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _731.x;
            r2.w = _731.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _756 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _756.x;
            r4.y = _756.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _784 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _784.x;
            r4.y = _784.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _806 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _806.x;
            r4.y = _806.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _828 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _828.x;
            r4.y = _828.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _890 = r0.www * v1.xyz;
    r1.y = _890.x;
    r1.z = _890.y;
    r1.w = _890.z;
    vec4 _899 = r1;
    vec3 _901 = r2.xxx * _899.yzw;
    r1.y = _901.x;
    r1.z = _901.y;
    r1.w = _901.z;
    vec4 _908 = r0;
    vec3 _915 = (_908.xyz * r1.xxx) + r1.yzw;
    r0.x = _915.x;
    r0.y = _915.y;
    r0.z = _915.z;
    vec4 _922 = r0;
    vec3 _929 = _922.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _929.x;
    r0.y = _929.y;
    r0.z = _929.z;
    vec3 _944 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _944.x;
    oC0.y = _944.y;
    oC0.z = _944.z;
    oC0.w = 1.0;
    bool _956 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _964;
    if (_956)
    {
        _964 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _964 = _956;
    }
    if (_964)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
