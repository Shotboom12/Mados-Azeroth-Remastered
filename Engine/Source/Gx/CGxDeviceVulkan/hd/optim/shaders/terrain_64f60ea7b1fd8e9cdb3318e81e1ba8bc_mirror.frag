#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    vec2 _80 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = _80.x;
    r2.z = _80.y;
    vec3 _93 = v0.xyz + v0.xyz;
    r3.x = _93.x;
    r3.y = _93.y;
    r3.z = _93.z;
    vec3 _105 = r0.xyz * r3.xyz;
    r4.x = _105.x;
    r4.y = _105.y;
    r4.z = _105.z;
    vec4 _114 = r0;
    vec3 _123 = mix(r4.xyz, _114.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = _123.x;
    r0.y = _123.y;
    r0.z = _123.z;
    vec4 _132 = r3;
    vec3 _134 = r1.xyz * _132.xyz;
    r3.x = _134.x;
    r3.y = _134.y;
    r3.z = _134.z;
    vec4 _143 = r1;
    vec3 _149 = mix(r3.xyz, _143.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = _149.x;
    r1.y = _149.y;
    r1.z = _149.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _211 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _211.x;
        r0.z = _211.y;
        vec2 _222 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _222.x;
        r2.y = _222.y;
        vec2 _230 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _230.x;
        r2.w = _230.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.w = r1.x + r2.x;
        vec2 _253 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _253.x;
        r1.y = _253.y;
        vec2 _260 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _260.x;
        r1.w = _260.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _283 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _283.x;
        r1.y = _283.y;
        vec2 _290 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _290.x;
        r1.w = _290.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _313 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _313.x;
        r1.y = _313.y;
        vec2 _320 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _320.x;
        r1.w = _320.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.y = r0.w + r1.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v5.x), abs(v5.y));
    if (r0.y < 1.0)
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex6Lod( r1.xy, r1.w);
        vec2 _380 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _380.x;
        r0.z = _380.y;
        vec2 _390 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _390.x;
        r2.y = _390.y;
        vec2 _397 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _397.x;
        r2.w = _397.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r0.w = r1.x + r2.x;
        vec2 _419 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _419.x;
        r1.y = _419.y;
        vec2 _426 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _426.x;
        r1.w = _426.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _448 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _448.x;
        r1.y = _448.y;
        vec2 _455 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _455.x;
        r1.w = _455.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _477 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _477.x;
        r1.y = _477.y;
        vec2 _484 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _484.x;
        r1.w = _484.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.y = r0.w + r1.x;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v6.x), abs(v6.y));
        if (r0.z < 1.0)
        {
            r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex7Lod( r1.xy, r1.w);
            vec2 _533 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = _533.x;
            r0.w = _533.y;
            vec2 _543 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _543.x;
            r2.y = _543.y;
            vec2 _550 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _550.x;
            r2.w = _550.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _572 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _572.x;
            r2.y = _572.y;
            vec2 _579 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _579.x;
            r2.w = _579.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _601 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _601.x;
            r2.y = _601.y;
            vec2 _608 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _608.x;
            r2.w = _608.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _630 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _630.x;
            r2.y = _630.y;
            vec2 _637 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _637.x;
            r2.w = _637.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r0.z = r1.x + r2.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v4.w;
            r0.w = v5.w;
            vec2 _669 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = _669.x;
            r1.w = _669.y;
            r1.y = (v5.w * 0.5) + 0.5;
            r1.z = v6.w;
            r2 = OptTex8Lod( r1.xy, r1.w);
            vec2 _694 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _694.x;
            r4.y = _694.y;
            r4.z = r1.zw.x;
            r4.w = r1.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r1.z = r2.x + r5.x;
            vec2 _722 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _722.x;
            r4.y = _722.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.z += r2.x;
            vec2 _744 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _744.x;
            r4.y = _744.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.z += r2.x;
            vec2 _766 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _766.x;
            r4.y = _766.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.x = r1.z + r2.x;
            r1.y = max(abs(r0.z), abs(r0.w));
            r0.z = clamp((r1.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.w = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.z * r0.w) + 1.0;
        }
    }
    r1.x = min(r0.y, r0.x);
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _828 = r3.www * v1.xyz;
    r0.y = _828.x;
    r0.z = _828.y;
    r0.w = _828.z;
    vec4 _837 = r0;
    vec3 _839 = r1.xxx * _837.yzw;
    r0.y = _839.x;
    r0.z = _839.y;
    r0.w = _839.z;
    vec4 _848 = r0;
    vec4 _851 = r0;
    vec3 _853 = (r3.xyz * _848.xxx) + _851.yzw;
    r0.x = _853.x;
    r0.y = _853.y;
    r0.z = _853.z;
    vec4 _860 = r0;
    vec3 _867 = _860.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _867.x;
    r0.y = _867.y;
    r0.z = _867.z;
    vec3 _882 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _882.x;
    oC0.y = _882.y;
    oC0.z = _882.z;
    oC0.w = 1.0;
    bool _894 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _902;
    if (_894)
    {
        _902 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _902 = _894;
    }
    if (_902)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
