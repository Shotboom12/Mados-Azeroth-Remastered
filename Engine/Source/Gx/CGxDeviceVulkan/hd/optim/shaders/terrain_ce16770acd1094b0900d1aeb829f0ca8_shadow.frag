#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
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
    r0 = OptTex0( v2.xy);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r3 = OptTex3( v4.xy);
    vec3 _90 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = _90.x;
    r4.y = _90.y;
    r4.z = _90.z;
    vec3 _105 = v0.xyz + v0.xyz;
    r5.x = _105.x;
    r5.y = _105.y;
    r5.z = _105.z;
    vec3 _116 = r0.xyz * r5.xyz;
    r6.x = _116.x;
    r6.y = _116.y;
    r6.z = _116.z;
    vec4 _125 = r0;
    vec3 _134 = mix(r6.xyz, _125.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = _134.x;
    r0.y = _134.y;
    r0.z = _134.z;
    vec3 _145 = r1.xyz * r5.xyz;
    r6.x = _145.x;
    r6.y = _145.y;
    r6.z = _145.z;
    vec4 _154 = r1;
    vec3 _160 = mix(r6.xyz, _154.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = _160.x;
    r1.y = _160.y;
    r1.z = _160.z;
    vec3 _171 = r2.xyz * r5.xyz;
    r4.x = _171.x;
    r4.y = _171.y;
    r4.w = _171.z;
    vec4 _181 = r2;
    vec3 _187 = mix(r4.xyw, _181.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = _187.x;
    r2.y = _187.y;
    r2.z = _187.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _253 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _253.x;
        r1.z = _253.y;
        vec2 _264 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _264.x;
        r3.y = _264.y;
        vec2 _272 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _272.x;
        r3.w = _272.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _295 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _295.x;
        r2.y = _295.y;
        vec2 _302 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _302.x;
        r2.w = _302.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _325 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _325.x;
        r2.y = _325.y;
        vec2 _332 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _332.x;
        r2.w = _332.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _355 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _355.x;
        r2.y = _355.y;
        vec2 _362 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _362.x;
        r2.w = _362.y;
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
        vec2 _422 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _422.x;
        r1.z = _422.y;
        vec2 _432 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _432.x;
        r3.y = _432.y;
        vec2 _439 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _439.x;
        r3.w = _439.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _461 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _461.x;
        r2.y = _461.y;
        vec2 _468 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _468.x;
        r2.w = _468.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _490 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _490.x;
        r2.y = _490.y;
        vec2 _497 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _497.x;
        r2.w = _497.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _519 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _519.x;
        r2.y = _519.y;
        vec2 _526 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _526.x;
        r2.w = _526.y;
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
            vec2 _575 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _575.x;
            r1.w = _575.y;
            vec2 _585 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _585.x;
            r3.y = _585.y;
            vec2 _592 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _592.x;
            r3.w = _592.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _614 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _614.x;
            r3.y = _614.y;
            vec2 _621 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _621.x;
            r3.w = _621.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _643 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _643.x;
            r3.y = _643.y;
            vec2 _650 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _650.x;
            r3.w = _650.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _672 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _672.x;
            r3.y = _672.y;
            vec2 _679 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _679.x;
            r3.w = _679.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 _711 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _711.x;
            r2.w = _711.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _736 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _736.x;
            r4.y = _736.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _764 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _764.x;
            r4.y = _764.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _786 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _786.x;
            r4.y = _786.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _808 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _808.x;
            r4.y = _808.y;
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
    vec3 _870 = r0.www * v1.xyz;
    r1.y = _870.x;
    r1.z = _870.y;
    r1.w = _870.z;
    vec4 _879 = r1;
    vec3 _881 = r2.xxx * _879.yzw;
    r1.y = _881.x;
    r1.z = _881.y;
    r1.w = _881.z;
    vec4 _888 = r0;
    vec3 _895 = (_888.xyz * r1.xxx) + r1.yzw;
    r0.x = _895.x;
    r0.y = _895.y;
    r0.z = _895.z;
    vec4 _902 = r0;
    vec3 _909 = _902.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _909.x;
    r0.y = _909.y;
    r0.z = _909.z;
    vec3 _924 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _924.x;
    oC0.y = _924.y;
    oC0.z = _924.z;
    oC0.w = 1.0;
    bool _936 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _944;
    if (_936)
    {
        _944 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _944 = _936;
    }
    if (_944)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
