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
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _270 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _270.x;
        r1.z = _270.y;
        vec2 _281 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _281.x;
        r3.y = _281.y;
        vec2 _289 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _289.x;
        r3.w = _289.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _312 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _312.x;
        r2.y = _312.y;
        vec2 _319 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _319.x;
        r2.w = _319.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _342 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _342.x;
        r2.y = _342.y;
        vec2 _349 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _349.x;
        r2.w = _349.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _372 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _372.x;
        r2.y = _372.y;
        vec2 _379 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _379.x;
        r2.w = _379.y;
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
        vec2 _439 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _439.x;
        r1.z = _439.y;
        vec2 _449 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _449.x;
        r3.y = _449.y;
        vec2 _456 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _456.x;
        r3.w = _456.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _478 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _478.x;
        r2.y = _478.y;
        vec2 _485 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _485.x;
        r2.w = _485.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _507 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _507.x;
        r2.y = _507.y;
        vec2 _514 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _514.x;
        r2.w = _514.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _536 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _536.x;
        r2.y = _536.y;
        vec2 _543 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _543.x;
        r2.w = _543.y;
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
            vec2 _592 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _592.x;
            r1.w = _592.y;
            vec2 _602 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _602.x;
            r3.y = _602.y;
            vec2 _609 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _609.x;
            r3.w = _609.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _631 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _631.x;
            r3.y = _631.y;
            vec2 _638 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _638.x;
            r3.w = _638.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _660 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _660.x;
            r3.y = _660.y;
            vec2 _667 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _667.x;
            r3.w = _667.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _689 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _689.x;
            r3.y = _689.y;
            vec2 _696 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _696.x;
            r3.w = _696.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
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
            r2.z = r3.x + r5.x;
            vec2 _781 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _781.x;
            r4.y = _781.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _803 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _803.x;
            r4.y = _803.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _825 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _825.x;
            r4.y = _825.y;
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
    vec3 _887 = r0.www * v1.xyz;
    r1.y = _887.x;
    r1.z = _887.y;
    r1.w = _887.z;
    vec4 _896 = r1;
    vec3 _898 = r2.xxx * _896.yzw;
    r1.y = _898.x;
    r1.z = _898.y;
    r1.w = _898.z;
    vec4 _905 = r0;
    vec3 _912 = (_905.xyz * r1.xxx) + r1.yzw;
    r0.x = _912.x;
    r0.y = _912.y;
    r0.z = _912.z;
    vec4 _919 = r0;
    vec3 _926 = _919.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _926.x;
    r0.y = _926.y;
    r0.z = _926.z;
    vec3 _941 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _941.x;
    oC0.y = _941.y;
    oC0.z = _941.z;
    oC0.w = 1.0;
    bool _953 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _961;
    if (_953)
    {
        _961 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _961 = _953;
    }
    if (_961)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
