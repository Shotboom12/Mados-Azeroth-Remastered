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
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r3 = OptTex3( v4.xy);
    r4 = OptTex4( v4.wz);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _103 = v0.xyz + v0.xyz;
    r6.x = _103.x;
    r6.y = _103.y;
    r6.z = _103.z;
    vec3 _118 = r0.xyz * r6.xyz;
    r7.x = _118.x;
    r7.y = _118.y;
    r7.z = _118.z;
    vec4 _127 = r0;
    vec3 _136 = mix(r7.xyz, _127.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = _136.x;
    r0.y = _136.y;
    r0.z = _136.z;
    vec3 _147 = r1.xyz * r6.xyz;
    r7.x = _147.x;
    r7.y = _147.y;
    r7.z = _147.z;
    vec4 _156 = r1;
    vec3 _162 = mix(r7.xyz, _156.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = _162.x;
    r1.y = _162.y;
    r1.z = _162.z;
    vec3 _173 = r2.xyz * r6.xyz;
    r7.x = _173.x;
    r7.y = _173.y;
    r7.z = _173.z;
    vec4 _182 = r2;
    vec3 _188 = mix(r7.xyz, _182.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = _188.x;
    r2.y = _188.y;
    r2.z = _188.z;
    vec3 _199 = r3.xyz * r6.xyz;
    r5.x = _199.x;
    r5.y = _199.y;
    r5.z = _199.z;
    vec4 _208 = r3;
    vec3 _214 = mix(r5.xyz, _208.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = _214.x;
    r3.y = _214.y;
    r3.z = _214.z;
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
        vec2 _286 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _286.x;
        r0.z = _286.y;
        vec2 _297 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _297.x;
        r2.y = _297.y;
        vec2 _305 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _305.x;
        r2.w = _305.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _328 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _328.x;
        r2.y = _328.y;
        vec2 _335 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _335.x;
        r2.w = _335.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _358 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _358.x;
        r2.y = _358.y;
        vec2 _365 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _365.x;
        r2.w = _365.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _388 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _388.x;
        r2.y = _388.y;
        vec2 _395 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _395.x;
        r2.w = _395.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _418 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _418.x;
        r2.y = _418.y;
        vec2 _425 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _425.x;
        r2.w = _425.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _448 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _448.x;
        r2.y = _448.y;
        vec2 _455 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _455.x;
        r2.w = _455.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _478 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _478.x;
        r2.y = _478.y;
        vec2 _485 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _485.x;
        r2.w = _485.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.x += r2.x;
        vec2 _508 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _508.x;
        r2.y = _508.y;
        vec2 _515 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _515.x;
        r2.w = _515.y;
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
            vec2 _565 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = _565.x;
            r0.z = _565.y;
            vec2 _575 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _575.x;
            r3.y = _575.y;
            vec2 _582 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _582.x;
            r3.w = _582.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r0.w = r2.x + r3.x;
            vec2 _604 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _604.x;
            r2.y = _604.y;
            vec2 _611 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _611.x;
            r2.w = _611.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w += r2.x;
            vec2 _633 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _633.x;
            r2.y = _633.y;
            vec2 _640 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _640.x;
            r2.w = _640.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w += r2.x;
            vec2 _662 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _662.x;
            r2.y = _662.y;
            vec2 _669 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _669.x;
            r2.w = _669.y;
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
                vec2 _719 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = _719.x;
                r0.z = _719.y;
                vec2 _729 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _729.x;
                r3.y = _729.y;
                vec2 _736 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _736.x;
                r3.w = _736.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r0.w = r2.x + r3.x;
                vec2 _758 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _758.x;
                r2.y = _758.y;
                vec2 _765 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _765.x;
                r2.w = _765.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w += r2.x;
                vec2 _787 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _787.x;
                r2.y = _787.y;
                vec2 _794 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _794.x;
                r2.w = _794.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w += r2.x;
                vec2 _816 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _816.x;
                r2.y = _816.y;
                vec2 _823 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _823.x;
                r2.w = _823.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.y = r0.w + r2.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v5.w;
                r0.z = v6.w;
                vec2 _855 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _855.x;
                r2.w = _855.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _880 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _880.x;
                r4.y = _880.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r0.w = r3.x + r5.x;
                vec2 _908 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _908.x;
                r4.y = _908.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r3.x;
                vec2 _930 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _930.x;
                r4.y = _930.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r3.x;
                vec2 _952 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _952.x;
                r4.y = _952.y;
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
    vec3 _1009 = r1.www * v1.xyz;
    r2.x = _1009.x;
    r2.y = _1009.y;
    r2.z = _1009.z;
    vec4 _1016 = r0;
    vec3 _1020 = _1016.xxx * r2.xyz;
    r0.x = _1020.x;
    r0.z = _1020.y;
    r0.w = _1020.z;
    vec4 _1029 = r0;
    vec4 _1032 = r0;
    vec3 _1034 = (r1.xyz * _1029.yyy) + _1032.xzw;
    r0.x = _1034.x;
    r0.y = _1034.y;
    r0.z = _1034.z;
    vec4 _1041 = r0;
    vec3 _1048 = _1041.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _1048.x;
    r0.y = _1048.y;
    r0.z = _1048.z;
    vec3 _1063 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1063.x;
    oC0.y = _1063.y;
    oC0.z = _1063.z;
    oC0.w = 1.0;
    bool _1075 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1083;
    if (_1075)
    {
        _1083 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1083 = _1075;
    }
    if (_1083)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
