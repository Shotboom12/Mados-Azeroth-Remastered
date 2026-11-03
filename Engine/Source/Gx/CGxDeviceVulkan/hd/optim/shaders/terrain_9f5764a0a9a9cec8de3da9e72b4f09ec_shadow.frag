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
    vec4 r6 = vec4(0.0);
    vec4 r7 = vec4(0.0);
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
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _100 = v0.xyz + v0.xyz;
    r6.x = _100.x;
    r6.y = _100.y;
    r6.z = _100.z;
    vec3 _115 = r0.xyz * r6.xyz;
    r7.x = _115.x;
    r7.y = _115.y;
    r7.z = _115.z;
    vec4 _124 = r0;
    vec3 _133 = mix(r7.xyz, _124.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = _133.x;
    r0.y = _133.y;
    r0.z = _133.z;
    vec3 _144 = r1.xyz * r6.xyz;
    r7.x = _144.x;
    r7.y = _144.y;
    r7.z = _144.z;
    vec4 _153 = r1;
    vec3 _159 = mix(r7.xyz, _153.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = _159.x;
    r1.y = _159.y;
    r1.z = _159.z;
    vec3 _170 = r2.xyz * r6.xyz;
    r7.x = _170.x;
    r7.y = _170.y;
    r7.z = _170.z;
    vec4 _179 = r2;
    vec3 _185 = mix(r7.xyz, _179.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = _185.x;
    r2.y = _185.y;
    r2.z = _185.z;
    vec3 _196 = r3.xyz * r6.xyz;
    r5.x = _196.x;
    r5.y = _196.y;
    r5.z = _196.z;
    vec4 _205 = r3;
    vec3 _211 = mix(r5.xyz, _205.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = _211.x;
    r3.y = _211.y;
    r3.z = _211.z;
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
        vec2 _283 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _283.x;
        r0.z = _283.y;
        vec2 _294 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _294.x;
        r2.y = _294.y;
        vec2 _302 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _302.x;
        r2.w = _302.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _325 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _325.x;
        r2.y = _325.y;
        vec2 _332 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _332.x;
        r2.w = _332.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _355 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _355.x;
        r2.y = _355.y;
        vec2 _362 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _362.x;
        r2.w = _362.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _385 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _385.x;
        r2.y = _385.y;
        vec2 _392 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _392.x;
        r2.w = _392.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _415 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _415.x;
        r2.y = _415.y;
        vec2 _422 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _422.x;
        r2.w = _422.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _445 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _445.x;
        r2.y = _445.y;
        vec2 _452 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _452.x;
        r2.w = _452.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _475 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _475.x;
        r2.y = _475.y;
        vec2 _482 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _482.x;
        r2.w = _482.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _505 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _505.x;
        r2.y = _505.y;
        vec2 _512 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _512.x;
        r2.w = _512.y;
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
            vec2 _562 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = _562.x;
            r0.z = _562.y;
            vec2 _572 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _572.x;
            r3.y = _572.y;
            vec2 _579 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _579.x;
            r3.w = _579.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r0.w = r2.x + r3.x;
            vec2 _601 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _601.x;
            r2.y = _601.y;
            vec2 _608 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _608.x;
            r2.w = _608.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w += r2.x;
            vec2 _630 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _630.x;
            r2.y = _630.y;
            vec2 _637 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _637.x;
            r2.w = _637.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w += r2.x;
            vec2 _659 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _659.x;
            r2.y = _659.y;
            vec2 _666 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _666.x;
            r2.w = _666.y;
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
                vec2 _716 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = _716.x;
                r0.z = _716.y;
                vec2 _726 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _726.x;
                r3.y = _726.y;
                vec2 _733 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _733.x;
                r3.w = _733.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r0.w = r2.x + r3.x;
                vec2 _755 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _755.x;
                r2.y = _755.y;
                vec2 _762 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _762.x;
                r2.w = _762.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w += r2.x;
                vec2 _784 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _784.x;
                r2.y = _784.y;
                vec2 _791 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _791.x;
                r2.w = _791.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w += r2.x;
                vec2 _813 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _813.x;
                r2.y = _813.y;
                vec2 _820 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _820.x;
                r2.w = _820.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.y = r0.w + r2.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v5.w;
                r0.z = v6.w;
                vec2 _852 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _852.x;
                r2.w = _852.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _877 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _877.x;
                r4.y = _877.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r0.w = r3.x + r5.x;
                vec2 _905 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _905.x;
                r4.y = _905.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r3.x;
                vec2 _927 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _927.x;
                r4.y = _927.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r3.x;
                vec2 _949 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _949.x;
                r4.y = _949.y;
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
    vec3 _1006 = r1.www * v1.xyz;
    r2.x = _1006.x;
    r2.y = _1006.y;
    r2.z = _1006.z;
    vec4 _1013 = r0;
    vec3 _1017 = _1013.xxx * r2.xyz;
    r0.x = _1017.x;
    r0.z = _1017.y;
    r0.w = _1017.z;
    vec4 _1026 = r0;
    vec4 _1029 = r0;
    vec3 _1031 = (r1.xyz * _1026.yyy) + _1029.xzw;
    r0.x = _1031.x;
    r0.y = _1031.y;
    r0.z = _1031.z;
    vec4 _1038 = r0;
    vec3 _1045 = _1038.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _1045.x;
    r0.y = _1045.y;
    r0.z = _1045.z;
    vec3 _1060 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1060.x;
    oC0.y = _1060.y;
    oC0.z = _1060.z;
    oC0.w = 1.0;
    bool _1072 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1080;
    if (_1072)
    {
        _1080 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1080 = _1072;
    }
    if (_1080)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
