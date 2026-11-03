#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
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
    r0 = OptTex0( v2.xy);
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
        vec2 _148 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _148.x;
        r0.z = _148.y;
        vec2 _170 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _170.x;
        r2.y = _170.y;
        vec2 _178 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _178.x;
        r2.w = _178.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _201 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _201.x;
        r2.y = _201.y;
        vec2 _208 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _208.x;
        r2.w = _208.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _231 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _231.x;
        r2.y = _231.y;
        vec2 _238 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _238.x;
        r2.w = _238.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _261 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _261.x;
        r2.y = _261.y;
        vec2 _268 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _268.x;
        r2.w = _268.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _291 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _291.x;
        r2.y = _291.y;
        vec2 _298 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _298.x;
        r2.w = _298.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _321 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _321.x;
        r2.y = _321.y;
        vec2 _328 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _328.x;
        r2.w = _328.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _351 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _351.x;
        r2.y = _351.y;
        vec2 _358 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _358.x;
        r2.w = _358.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _381 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _381.x;
        r2.y = _381.y;
        vec2 _388 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _388.x;
        r2.w = _388.y;
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
            vec2 _438 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = _438.x;
            r0.z = _438.y;
            vec2 _448 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _448.x;
            r3.y = _448.y;
            vec2 _455 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _455.x;
            r3.w = _455.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r0.w = r2.x + r3.x;
            vec2 _477 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _477.x;
            r2.y = _477.y;
            vec2 _484 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _484.x;
            r2.w = _484.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w += r2.x;
            vec2 _506 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _506.x;
            r2.y = _506.y;
            vec2 _513 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _513.x;
            r2.w = _513.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w += r2.x;
            vec2 _535 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _535.x;
            r2.y = _535.y;
            vec2 _542 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _542.x;
            r2.w = _542.y;
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
                vec2 _592 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = _592.x;
                r0.z = _592.y;
                vec2 _602 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _602.x;
                r3.y = _602.y;
                vec2 _609 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _609.x;
                r3.w = _609.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r0.w = r2.x + r3.x;
                vec2 _631 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _631.x;
                r2.y = _631.y;
                vec2 _638 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _638.x;
                r2.w = _638.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w += r2.x;
                vec2 _660 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _660.x;
                r2.y = _660.y;
                vec2 _667 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _667.x;
                r2.w = _667.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w += r2.x;
                vec2 _689 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _689.x;
                r2.y = _689.y;
                vec2 _696 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _696.x;
                r2.w = _696.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.y = r0.w + r2.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v5.w;
                r0.z = v6.w;
                vec2 _728 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _728.x;
                r2.w = _728.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _753 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _753.x;
                r4.y = _753.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r0.w = r3.x + r5.x;
                vec2 _781 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _781.x;
                r4.y = _781.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r3.x;
                vec2 _803 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _803.x;
                r4.y = _803.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r3.x;
                vec2 _825 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _825.x;
                r4.y = _825.y;
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
    vec4 _881 = r0;
    vec3 _883 = r1.xyz * _881.yyy;
    r0.y = _883.x;
    r0.z = _883.y;
    r0.w = _883.z;
    vec4 _890 = r0;
    vec3 _894 = _890.yzw * v0.xyz;
    r0.y = _894.x;
    r0.z = _894.y;
    r0.w = _894.z;
    vec4 _901 = r0;
    vec4 _903 = r0;
    vec3 _905 = _901.yzw + _903.yzw;
    r0.y = _905.x;
    r0.z = _905.y;
    r0.w = _905.z;
    vec4 _912 = r1;
    vec3 _916 = _912.www * v1.xyz;
    r1.x = _916.x;
    r1.y = _916.y;
    r1.z = _916.z;
    vec4 _925 = r0;
    vec4 _928 = r0;
    vec3 _930 = (r1.xyz * _925.xxx) + _928.yzw;
    r0.x = _930.x;
    r0.y = _930.y;
    r0.z = _930.z;
    vec4 _937 = r0;
    vec3 _944 = _937.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _944.x;
    r0.y = _944.y;
    r0.z = _944.z;
    vec3 _959 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _959.x;
    oC0.y = _959.y;
    oC0.z = _959.z;
    oC0.w = 1.0;
    bool _972 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _980;
    if (_972)
    {
        _980 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _980 = _972;
    }
    if (_980)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
