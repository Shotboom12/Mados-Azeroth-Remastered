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
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 *= r3.xxxx;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _160 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _160.x;
        r1.z = _160.y;
        vec2 _181 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _181.x;
        r2.y = _181.y;
        vec2 _189 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _189.x;
        r2.w = _189.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _212 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _212.x;
        r2.y = _212.y;
        vec2 _219 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _219.x;
        r2.w = _219.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _242 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _242.x;
        r2.y = _242.y;
        vec2 _249 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _249.x;
        r2.w = _249.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _272 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _272.x;
        r2.y = _272.y;
        vec2 _279 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _279.x;
        r2.w = _279.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _302 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _302.x;
        r2.y = _302.y;
        vec2 _309 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _309.x;
        r2.w = _309.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _332 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _332.x;
        r2.y = _332.y;
        vec2 _339 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _339.x;
        r2.w = _339.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _362 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _362.x;
        r2.y = _362.y;
        vec2 _369 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _369.x;
        r2.w = _369.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _392 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _392.x;
        r2.y = _392.y;
        vec2 _399 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _399.x;
        r2.w = _399.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex6Lod( r2.xy, r2.w);
            vec2 _449 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _449.x;
            r1.z = _449.y;
            vec2 _459 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _459.x;
            r3.y = _459.y;
            vec2 _466 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _466.x;
            r3.w = _466.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _488 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _488.x;
            r2.y = _488.y;
            vec2 _495 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _495.x;
            r2.w = _495.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _517 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _517.x;
            r2.y = _517.y;
            vec2 _524 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _524.x;
            r2.w = _524.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _546 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _546.x;
            r2.y = _546.y;
            vec2 _553 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _553.x;
            r2.w = _553.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r2 = OptTex7Lod( r2.xy, r2.w);
                vec2 _603 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _603.x;
                r1.z = _603.y;
                vec2 _613 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _613.x;
                r3.y = _613.y;
                vec2 _620 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _620.x;
                r3.w = _620.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _642 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _642.x;
                r2.y = _642.y;
                vec2 _649 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _649.x;
                r2.w = _649.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _671 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _671.x;
                r2.y = _671.y;
                vec2 _678 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _678.x;
                r2.w = _678.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _700 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _700.x;
                r2.y = _700.y;
                vec2 _707 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _707.x;
                r2.w = _707.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 _739 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _739.x;
                r2.w = _739.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _764 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _764.x;
                r4.y = _764.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _792 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _792.x;
                r4.y = _792.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _814 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _814.x;
                r4.y = _814.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _836 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _836.x;
                r4.y = _836.y;
                r2 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _889 = r0;
    vec3 _893 = _889.xyz * r1.yyy;
    r0.x = _893.x;
    r0.y = _893.y;
    r0.z = _893.z;
    vec4 _900 = r0;
    vec3 _904 = _900.xyz * v0.xyz;
    r0.x = _904.x;
    r0.y = _904.y;
    r0.z = _904.z;
    vec4 _911 = r0;
    vec4 _913 = r0;
    vec3 _915 = _911.xyz + _913.xyz;
    r0.x = _915.x;
    r0.y = _915.y;
    r0.z = _915.z;
    vec3 _926 = r0.www * v1.xyz;
    r1.y = _926.x;
    r1.z = _926.y;
    r1.w = _926.z;
    vec4 _938 = r0;
    vec3 _940 = (r1.yzw * r1.xxx) + _938.xyz;
    r0.x = _940.x;
    r0.y = _940.y;
    r0.z = _940.z;
    vec4 _947 = r0;
    vec3 _954 = _947.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _954.x;
    r0.y = _954.y;
    r0.z = _954.z;
    vec3 _969 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _969.x;
    oC0.y = _969.y;
    oC0.z = _969.z;
    oC0.w = 1.0;
    bool _982 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _990;
    if (_982)
    {
        _990 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _990 = _982;
    }
    if (_990)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
