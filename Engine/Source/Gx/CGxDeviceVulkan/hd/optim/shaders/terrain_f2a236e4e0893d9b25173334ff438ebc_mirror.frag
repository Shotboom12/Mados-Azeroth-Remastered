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
    r4.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r4.w = (-r4.w) + 1.0;
    r1 = r4.xxxx * r1;
    r0 = (r0 * r4.wwww) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _301 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _301.x;
        r1.z = _301.y;
        vec2 _312 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _312.x;
        r2.y = _312.y;
        vec2 _320 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _320.x;
        r2.w = _320.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _343 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _343.x;
        r2.y = _343.y;
        vec2 _350 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _350.x;
        r2.w = _350.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _373 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _373.x;
        r2.y = _373.y;
        vec2 _380 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _380.x;
        r2.w = _380.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _403 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _403.x;
        r2.y = _403.y;
        vec2 _410 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _410.x;
        r2.w = _410.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _433 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _433.x;
        r2.y = _433.y;
        vec2 _440 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _440.x;
        r2.w = _440.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _463 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _463.x;
        r2.y = _463.y;
        vec2 _470 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _470.x;
        r2.w = _470.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _493 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _493.x;
        r2.y = _493.y;
        vec2 _500 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _500.x;
        r2.w = _500.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _523 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _523.x;
        r2.y = _523.y;
        vec2 _530 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _530.x;
        r2.w = _530.y;
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
            vec2 _580 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _580.x;
            r1.z = _580.y;
            vec2 _590 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _590.x;
            r3.y = _590.y;
            vec2 _597 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _597.x;
            r3.w = _597.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _619 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _619.x;
            r2.y = _619.y;
            vec2 _626 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _626.x;
            r2.w = _626.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _648 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _648.x;
            r2.y = _648.y;
            vec2 _655 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _655.x;
            r2.w = _655.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _677 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _677.x;
            r2.y = _677.y;
            vec2 _684 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _684.x;
            r2.w = _684.y;
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
                vec2 _734 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _734.x;
                r1.z = _734.y;
                vec2 _744 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _744.x;
                r3.y = _744.y;
                vec2 _751 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _751.x;
                r3.w = _751.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _773 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _773.x;
                r2.y = _773.y;
                vec2 _780 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _780.x;
                r2.w = _780.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _802 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _802.x;
                r2.y = _802.y;
                vec2 _809 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _809.x;
                r2.w = _809.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _831 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _831.x;
                r2.y = _831.y;
                vec2 _838 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _838.x;
                r2.w = _838.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 _870 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _870.x;
                r2.w = _870.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _895 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _895.x;
                r4.y = _895.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _923 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _923.x;
                r4.y = _923.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _945 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _945.x;
                r4.y = _945.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _967 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _967.x;
                r4.y = _967.y;
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
    vec3 _1024 = r0.www * v1.xyz;
    r2.x = _1024.x;
    r2.y = _1024.y;
    r2.z = _1024.z;
    vec4 _1031 = r1;
    vec3 _1035 = _1031.xxx * r2.xyz;
    r1.x = _1035.x;
    r1.z = _1035.y;
    r1.w = _1035.z;
    vec4 _1042 = r0;
    vec3 _1049 = (_1042.xyz * r1.yyy) + r1.xzw;
    r0.x = _1049.x;
    r0.y = _1049.y;
    r0.z = _1049.z;
    vec4 _1056 = r0;
    vec3 _1063 = _1056.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _1063.x;
    r0.y = _1063.y;
    r0.z = _1063.z;
    vec3 _1078 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1078.x;
    oC0.y = _1078.y;
    oC0.z = _1078.z;
    oC0.w = 1.0;
    bool _1090 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1098;
    if (_1090)
    {
        _1098 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1098 = _1090;
    }
    if (_1098)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
