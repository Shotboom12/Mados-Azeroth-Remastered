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
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
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
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _105 = v0.xyz + v0.xyz;
    r6.x = _105.x;
    r6.y = _105.y;
    r6.z = _105.z;
    vec3 _120 = r0.xyz * r6.xyz;
    r7.x = _120.x;
    r7.y = _120.y;
    r7.z = _120.z;
    vec4 _129 = r0;
    vec3 _138 = mix(r7.xyz, _129.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = _138.x;
    r0.y = _138.y;
    r0.z = _138.z;
    vec3 _149 = r1.xyz * r6.xyz;
    r7.x = _149.x;
    r7.y = _149.y;
    r7.z = _149.z;
    vec4 _158 = r1;
    vec3 _164 = mix(r7.xyz, _158.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = _164.x;
    r1.y = _164.y;
    r1.z = _164.z;
    vec3 _175 = r2.xyz * r6.xyz;
    r7.x = _175.x;
    r7.y = _175.y;
    r7.z = _175.z;
    vec4 _184 = r2;
    vec3 _190 = mix(r7.xyz, _184.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = _190.x;
    r2.y = _190.y;
    r2.z = _190.z;
    vec3 _201 = r3.xyz * r6.xyz;
    r5.x = _201.x;
    r5.y = _201.y;
    r5.z = _201.z;
    vec4 _210 = r3;
    vec3 _216 = mix(r5.xyz, _210.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = _216.x;
    r3.y = _216.y;
    r3.z = _216.z;
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
        vec2 _293 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = _293.x;
        r1.y = _293.y;
        vec2 _304 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _304.x;
        r2.y = _304.y;
        vec2 _315 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = _315.x;
        r3.y = _315.y;
        vec2 _326 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = _326.x;
        r4.y = _326.y;
        vec2 _337 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = _337.x;
        r5.y = _337.y;
        vec2 _348 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = _348.x;
        r6.y = _348.y;
        vec2 _359 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = _359.x;
        r7.y = _359.y;
        vec2 _370 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = _370.x;
        r8.y = _370.y;
        vec4 _375 = r1;
        vec2 _381 = _375.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = _381.x;
        r1.y = _381.y;
        r9 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r9 = OptTex5Lod( r9.xy, r9.w);
        r2.z = 0.0;
        r2.w = 0.0;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r3.z = 0.0;
        r3.w = 0.0;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r4.z = 0.0;
        r4.w = 0.0;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r5.z = 0.0;
        r5.w = 0.0;
        r5 = OptTex5Lod( r5.xy, r5.w);
        r6.z = 0.0;
        r6.w = 0.0;
        r6 = OptTex5Lod( r6.xy, r6.w);
        r7.z = 0.0;
        r7.w = 0.0;
        r7 = OptTex5Lod( r7.xy, r7.w);
        r8.z = 0.0;
        r8.w = 0.0;
        r8 = OptTex5Lod( r8.xy, r8.w);
        r1.z = 0.0;
        r1.w = 0.0;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r9.y = r2.x;
        r9.z = r3.x;
        r9.w = r4.x;
        r2 = r9 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v5.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.x += (-v5.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            vec2 _567 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _567.x;
            r1.z = _567.y;
            vec2 _577 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _577.x;
            r2.y = _577.y;
            vec2 _587 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _587.x;
            r3.y = _587.y;
            vec2 _597 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _597.x;
            r4.y = _597.y;
            vec2 _607 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _607.x;
            r5.y = _607.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r6 = OptTex6Lod( r6.xy, r6.w);
            r2.z = 0.0;
            r2.w = 0.0;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r3.z = 0.0;
            r3.w = 0.0;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r4.z = 0.0;
            r4.w = 0.0;
            r4 = OptTex6Lod( r4.xy, r4.w);
            r5.z = 0.0;
            r5.w = 0.0;
            r5 = OptTex6Lod( r5.xy, r5.w);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v6.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                vec2 _723 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _723.x;
                r1.z = _723.y;
                vec2 _733 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = _733.x;
                r2.y = _733.y;
                vec2 _743 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = _743.x;
                r3.y = _743.y;
                vec2 _753 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _753.x;
                r4.y = _753.y;
                vec2 _763 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = _763.x;
                r5.y = _763.y;
                r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r6 = OptTex7Lod( r6.xy, r6.w);
                r2.z = 0.0;
                r2.w = 0.0;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r3.z = 0.0;
                r3.w = 0.0;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r4.z = 0.0;
                r4.w = 0.0;
                r4 = OptTex7Lod( r4.xy, r4.w);
                r5.z = 0.0;
                r5.w = 0.0;
                r5 = OptTex7Lod( r5.xy, r5.w);
                r6.y = r2.x;
                r6.z = r3.x;
                r6.w = r4.x;
                r2 = r6 + (-v7.zzzz);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r1.y = r5.x + (-v7.z);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r2, vec4(1.0));
                r1.y += r1.z;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v5.w;
                r2.y = v6.w;
                vec2 _871 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = _871.x;
                r3.y = _871.y;
                vec2 _881 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _881.x;
                r4.y = _881.y;
                vec2 _891 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = _891.x;
                r5.y = _891.y;
                vec2 _901 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = _901.x;
                r6.y = _901.y;
                vec2 _911 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = _911.x;
                r7.y = _911.y;
                r3.z = 0.0;
                r3.w = 0.0;
                r3 = OptTex8Lod( r3.xy, r3.w);
                r4.z = 0.0;
                r4.w = 0.0;
                r4 = OptTex8Lod( r4.xy, r4.w);
                r5.z = 0.0;
                r5.w = 0.0;
                r5 = OptTex8Lod( r5.xy, r5.w);
                r6.z = 0.0;
                r6.w = 0.0;
                r6 = OptTex8Lod( r6.xy, r6.w);
                r7.z = 0.0;
                r7.w = 0.0;
                r7 = OptTex8Lod( r7.xy, r7.w);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v7.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v7.w);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r3, vec4(1.0));
                r1.y += r1.z;
                r1.z = max(abs(r2.x), abs(r2.y));
                r1.z = clamp((r1.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.z * r1.y) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _1045 = r0.www * v1.xyz;
    r2.x = _1045.x;
    r2.y = _1045.y;
    r2.z = _1045.z;
    vec4 _1052 = r1;
    vec3 _1056 = _1052.xxx * r2.xyz;
    r1.x = _1056.x;
    r1.z = _1056.y;
    r1.w = _1056.z;
    vec4 _1063 = r0;
    vec3 _1070 = (_1063.xyz * r1.yyy) + r1.xzw;
    r0.x = _1070.x;
    r0.y = _1070.y;
    r0.z = _1070.z;
    vec4 _1077 = r0;
    vec3 _1084 = _1077.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _1084.x;
    r0.y = _1084.y;
    r0.z = _1084.z;
    vec3 _1099 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1099.x;
    oC0.y = _1099.y;
    oC0.z = _1099.z;
    oC0.w = 1.0;
    bool _1111 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1119;
    if (_1111)
    {
        _1119 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1119 = _1111;
    }
    if (_1119)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
