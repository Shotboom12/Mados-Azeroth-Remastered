#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

layout(location = 0) out vec4 oC0;
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
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
    r4 = OptTex4( v4.wz);
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r0 = OptTex5Lod( r0.xy, r0.w);
        vec2 _152 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _152.x;
        r0.z = _152.y;
        vec2 _174 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _174.x;
        r2.y = _174.y;
        vec2 _182 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _182.x;
        r2.w = _182.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _205 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _205.x;
        r2.y = _205.y;
        vec2 _212 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _212.x;
        r2.w = _212.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _235 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _235.x;
        r2.y = _235.y;
        vec2 _242 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _242.x;
        r2.w = _242.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _265 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _265.x;
        r2.y = _265.y;
        vec2 _272 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _272.x;
        r2.w = _272.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _295 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _295.x;
        r2.y = _295.y;
        vec2 _302 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _302.x;
        r2.w = _302.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _325 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _325.x;
        r2.y = _325.y;
        vec2 _332 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _332.x;
        r2.w = _332.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _355 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _355.x;
        r2.y = _355.y;
        vec2 _362 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _362.x;
        r2.w = _362.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _385 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _385.x;
        r2.y = _385.y;
        vec2 _392 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _392.x;
        r2.w = _392.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v6.x), abs(v6.y));
        if (r0.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex6Lod( r2.xy, r2.w);
            vec2 _442 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = _442.x;
            r0.z = _442.y;
            vec2 _452 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _452.x;
            r3.y = _452.y;
            vec2 _459 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _459.x;
            r3.w = _459.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r0.w = r2.x + r3.x;
            vec2 _481 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _481.x;
            r2.y = _481.y;
            vec2 _488 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _488.x;
            r2.w = _488.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w += r2.x;
            vec2 _510 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _510.x;
            r2.y = _510.y;
            vec2 _517 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _517.x;
            r2.w = _517.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w += r2.x;
            vec2 _539 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _539.x;
            r2.y = _539.y;
            vec2 _546 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _546.x;
            r2.w = _546.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.y = r0.w + r2.x;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v7.x), abs(v7.y));
            if (r0.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r2 = OptTex7Lod( r2.xy, r2.w);
                vec2 _596 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = _596.x;
                r0.z = _596.y;
                vec2 _606 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _606.x;
                r3.y = _606.y;
                vec2 _613 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _613.x;
                r3.w = _613.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r0.w = r2.x + r3.x;
                vec2 _635 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _635.x;
                r2.y = _635.y;
                vec2 _642 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _642.x;
                r2.w = _642.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w += r2.x;
                vec2 _664 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _664.x;
                r2.y = _664.y;
                vec2 _671 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _671.x;
                r2.w = _671.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w += r2.x;
                vec2 _693 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _693.x;
                r2.y = _693.y;
                vec2 _700 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _700.x;
                r2.w = _700.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.y = r0.w + r2.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v5.w;
                r0.z = v6.w;
                vec2 _732 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _732.x;
                r2.w = _732.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _757 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _757.x;
                r4.y = _757.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r0.w = r3.x + r5.x;
                vec2 _785 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _785.x;
                r4.y = _785.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r3.x;
                vec2 _807 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _807.x;
                r4.y = _807.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r3.x;
                vec2 _829 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _829.x;
                r4.y = _829.y;
                r2 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r2.x;
                r2.x = max(abs(r0.y), abs(r0.z));
                r0.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.z = (r0.w * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.y * r0.z) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _884 = r0;
    vec3 _886 = r1.xyz * _884.yyy;
    r0.y = _886.x;
    r0.z = _886.y;
    r0.w = _886.z;
    vec4 _893 = r0;
    vec3 _897 = _893.yzw * v0.xyz;
    r0.y = _897.x;
    r0.z = _897.y;
    r0.w = _897.z;
    vec4 _904 = r0;
    vec4 _906 = r0;
    vec3 _908 = _904.yzw + _906.yzw;
    r0.y = _908.x;
    r0.z = _908.y;
    r0.w = _908.z;
    vec4 _915 = r1;
    vec3 _919 = _915.www * v1.xyz;
    r1.x = _919.x;
    r1.y = _919.y;
    r1.z = _919.z;
    vec4 _928 = r0;
    vec4 _931 = r0;
    vec3 _933 = (r1.xyz * _928.xxx) + _931.yzw;
    r0.x = _933.x;
    r0.y = _933.y;
    r0.z = _933.z;
    vec4 _940 = r0;
    vec3 _947 = _940.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _947.x;
    r0.y = _947.y;
    r0.z = _947.z;
    vec3 _962 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _962.x;
    oC0.y = _962.y;
    oC0.z = _962.z;
    oC0.w = 1.0;
    bool _975 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _983;
    if (_975)
    {
        _983 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _983 = _975;
    }
    if (_983)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
