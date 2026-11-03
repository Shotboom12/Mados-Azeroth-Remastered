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
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _253 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _253.x;
        r1.z = _253.y;
        vec2 _264 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _264.x;
        r2.y = _264.y;
        vec2 _272 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _272.x;
        r2.w = _272.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _295 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _295.x;
        r2.y = _295.y;
        vec2 _302 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _302.x;
        r2.w = _302.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _325 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _325.x;
        r2.y = _325.y;
        vec2 _332 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _332.x;
        r2.w = _332.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _355 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _355.x;
        r2.y = _355.y;
        vec2 _362 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _362.x;
        r2.w = _362.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _385 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _385.x;
        r2.y = _385.y;
        vec2 _392 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _392.x;
        r2.w = _392.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _415 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _415.x;
        r2.y = _415.y;
        vec2 _422 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _422.x;
        r2.w = _422.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _445 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _445.x;
        r2.y = _445.y;
        vec2 _452 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _452.x;
        r2.w = _452.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _475 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _475.x;
        r2.y = _475.y;
        vec2 _482 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _482.x;
        r2.w = _482.y;
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
            vec2 _532 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _532.x;
            r1.z = _532.y;
            vec2 _542 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _542.x;
            r3.y = _542.y;
            vec2 _549 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _549.x;
            r3.w = _549.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _571 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _571.x;
            r2.y = _571.y;
            vec2 _578 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _578.x;
            r2.w = _578.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _600 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _600.x;
            r2.y = _600.y;
            vec2 _607 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _607.x;
            r2.w = _607.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _629 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _629.x;
            r2.y = _629.y;
            vec2 _636 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _636.x;
            r2.w = _636.y;
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
                vec2 _686 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _686.x;
                r1.z = _686.y;
                vec2 _696 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _696.x;
                r3.y = _696.y;
                vec2 _703 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _703.x;
                r3.w = _703.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _725 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _725.x;
                r2.y = _725.y;
                vec2 _732 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _732.x;
                r2.w = _732.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _754 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _754.x;
                r2.y = _754.y;
                vec2 _761 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _761.x;
                r2.w = _761.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _783 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _783.x;
                r2.y = _783.y;
                vec2 _790 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _790.x;
                r2.w = _790.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 _822 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _822.x;
                r2.w = _822.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _847 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _847.x;
                r4.y = _847.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _875 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _875.x;
                r4.y = _875.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _897 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _897.x;
                r4.y = _897.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _919 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _919.x;
                r4.y = _919.y;
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
    vec3 _976 = r0.www * v1.xyz;
    r2.x = _976.x;
    r2.y = _976.y;
    r2.z = _976.z;
    vec4 _983 = r1;
    vec3 _987 = _983.xxx * r2.xyz;
    r1.x = _987.x;
    r1.z = _987.y;
    r1.w = _987.z;
    vec4 _994 = r0;
    vec3 _1001 = (_994.xyz * r1.yyy) + r1.xzw;
    r0.x = _1001.x;
    r0.y = _1001.y;
    r0.z = _1001.z;
    vec4 _1008 = r0;
    vec3 _1015 = _1008.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _1015.x;
    r0.y = _1015.y;
    r0.z = _1015.z;
    vec3 _1030 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1030.x;
    oC0.y = _1030.y;
    oC0.z = _1030.z;
    oC0.w = 1.0;
    bool _1042 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1050;
    if (_1042)
    {
        _1050 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1050 = _1042;
    }
    if (_1050)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
