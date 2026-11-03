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
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 = r3.xxxx * r1;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _270 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _270.x;
        r1.z = _270.y;
        vec2 _281 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _281.x;
        r2.y = _281.y;
        vec2 _289 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _289.x;
        r2.w = _289.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _312 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _312.x;
        r2.y = _312.y;
        vec2 _319 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _319.x;
        r2.w = _319.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _342 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _342.x;
        r2.y = _342.y;
        vec2 _349 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _349.x;
        r2.w = _349.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _372 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _372.x;
        r2.y = _372.y;
        vec2 _379 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _379.x;
        r2.w = _379.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _402 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _402.x;
        r2.y = _402.y;
        vec2 _409 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _409.x;
        r2.w = _409.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _432 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _432.x;
        r2.y = _432.y;
        vec2 _439 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _439.x;
        r2.w = _439.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _462 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _462.x;
        r2.y = _462.y;
        vec2 _469 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _469.x;
        r2.w = _469.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _492 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _492.x;
        r2.y = _492.y;
        vec2 _499 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _499.x;
        r2.w = _499.y;
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
            vec2 _549 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _549.x;
            r1.z = _549.y;
            vec2 _559 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _559.x;
            r3.y = _559.y;
            vec2 _566 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _566.x;
            r3.w = _566.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _588 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _588.x;
            r2.y = _588.y;
            vec2 _595 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _595.x;
            r2.w = _595.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _617 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _617.x;
            r2.y = _617.y;
            vec2 _624 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _624.x;
            r2.w = _624.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _646 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _646.x;
            r2.y = _646.y;
            vec2 _653 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _653.x;
            r2.w = _653.y;
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
                vec2 _703 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _703.x;
                r1.z = _703.y;
                vec2 _713 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _713.x;
                r3.y = _713.y;
                vec2 _720 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _720.x;
                r3.w = _720.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _742 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _742.x;
                r2.y = _742.y;
                vec2 _749 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _749.x;
                r2.w = _749.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _771 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _771.x;
                r2.y = _771.y;
                vec2 _778 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _778.x;
                r2.w = _778.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _800 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _800.x;
                r2.y = _800.y;
                vec2 _807 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _807.x;
                r2.w = _807.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 _839 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _839.x;
                r2.w = _839.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _864 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _864.x;
                r4.y = _864.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _892 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _892.x;
                r4.y = _892.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _914 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _914.x;
                r4.y = _914.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _936 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _936.x;
                r4.y = _936.y;
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
    vec3 _993 = r0.www * v1.xyz;
    r2.x = _993.x;
    r2.y = _993.y;
    r2.z = _993.z;
    vec4 _1000 = r1;
    vec3 _1004 = _1000.xxx * r2.xyz;
    r1.x = _1004.x;
    r1.z = _1004.y;
    r1.w = _1004.z;
    vec4 _1011 = r0;
    vec3 _1018 = (_1011.xyz * r1.yyy) + r1.xzw;
    r0.x = _1018.x;
    r0.y = _1018.y;
    r0.z = _1018.z;
    vec4 _1025 = r0;
    vec3 _1032 = _1025.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _1032.x;
    r0.y = _1032.y;
    r0.z = _1032.z;
    vec3 _1047 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1047.x;
    oC0.y = _1047.y;
    oC0.z = _1047.z;
    oC0.w = 1.0;
    bool _1059 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1067;
    if (_1059)
    {
        _1067 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1067 = _1059;
    }
    if (_1067)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
