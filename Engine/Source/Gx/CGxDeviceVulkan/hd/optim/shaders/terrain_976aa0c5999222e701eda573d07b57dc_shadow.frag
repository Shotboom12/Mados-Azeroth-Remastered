#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

vec4 oC0;
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
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r0 = OptTex5Lod( r0.xy, r0.w);
        vec2 _129 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _129.x;
        r0.z = _129.y;
        vec2 _151 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = _151.x;
        r1.y = _151.y;
        vec2 _159 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _159.x;
        r1.w = _159.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _182 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r1.x = _182.x;
        r1.y = _182.y;
        vec2 _189 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _189.x;
        r1.w = _189.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _212 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _212.x;
        r1.y = _212.y;
        vec2 _219 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _219.x;
        r1.w = _219.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _242 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r1.x = _242.x;
        r1.y = _242.y;
        vec2 _249 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _249.x;
        r1.w = _249.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _272 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _272.x;
        r1.y = _272.y;
        vec2 _279 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _279.x;
        r1.w = _279.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _302 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r1.x = _302.x;
        r1.y = _302.y;
        vec2 _309 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _309.x;
        r1.w = _309.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _332 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _332.x;
        r1.y = _332.y;
        vec2 _339 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _339.x;
        r1.w = _339.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _362 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = _362.x;
        r1.y = _362.y;
        vec2 _369 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _369.x;
        r1.w = _369.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex6Lod( r1.xy, r1.w);
            vec2 _419 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = _419.x;
            r0.z = _419.y;
            vec2 _429 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _429.x;
            r2.y = _429.y;
            vec2 _436 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _436.x;
            r2.w = _436.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w = r1.x + r2.x;
            vec2 _458 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r1.x = _458.x;
            r1.y = _458.y;
            vec2 _465 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _465.x;
            r1.w = _465.y;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r0.w += r1.x;
            vec2 _487 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r1.x = _487.x;
            r1.y = _487.y;
            vec2 _494 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _494.x;
            r1.w = _494.y;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r0.w += r1.x;
            vec2 _516 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r1.x = _516.x;
            r1.y = _516.y;
            vec2 _523 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _523.x;
            r1.w = _523.y;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r0.y = r0.w + r1.x;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r1 = OptTex7Lod( r1.xy, r1.w);
                vec2 _573 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = _573.x;
                r0.z = _573.y;
                vec2 _583 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = _583.x;
                r2.y = _583.y;
                vec2 _590 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _590.x;
                r2.w = _590.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w = r1.x + r2.x;
                vec2 _612 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r1.x = _612.x;
                r1.y = _612.y;
                vec2 _619 = vec2(1.0, 0.0) * v6.zx;
                r1.z = _619.x;
                r1.w = _619.y;
                r1 = OptTex7Lod( r1.xy, r1.w);
                r0.w += r1.x;
                vec2 _641 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r1.x = _641.x;
                r1.y = _641.y;
                vec2 _648 = vec2(1.0, 0.0) * v6.zx;
                r1.z = _648.x;
                r1.w = _648.y;
                r1 = OptTex7Lod( r1.xy, r1.w);
                r0.w += r1.x;
                vec2 _670 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r1.x = _670.x;
                r1.y = _670.y;
                vec2 _677 = vec2(1.0, 0.0) * v6.zx;
                r1.z = _677.x;
                r1.w = _677.y;
                r1 = OptTex7Lod( r1.xy, r1.w);
                r0.y = r0.w + r1.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v4.w;
                r0.z = v5.w;
                vec2 _709 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r1.x = _709.x;
                r1.w = _709.y;
                r1.y = (v5.w * 0.5) + 0.5;
                r1.z = v6.w;
                r2 = OptTex8Lod( r1.xy, r1.w);
                vec2 _734 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _734.x;
                r4.y = _734.y;
                r4.z = r1.zw.x;
                r4.w = r1.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r0.w = r2.x + r5.x;
                vec2 _762 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _762.x;
                r4.y = _762.y;
                r2 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r2.x;
                vec2 _784 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _784.x;
                r4.y = _784.y;
                r2 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r2.x;
                vec2 _806 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _806.x;
                r4.y = _806.y;
                r1 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r1.x;
                r1.x = max(abs(r0.y), abs(r0.z));
                r0.y = clamp((r1.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.z = (r0.w * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.y * r0.z) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _861 = r0;
    vec3 _863 = r3.xyz * _861.yyy;
    r0.y = _863.x;
    r0.z = _863.y;
    r0.w = _863.z;
    vec4 _870 = r0;
    vec3 _874 = _870.yzw * v0.xyz;
    r0.y = _874.x;
    r0.z = _874.y;
    r0.w = _874.z;
    vec4 _881 = r0;
    vec4 _883 = r0;
    vec3 _885 = _881.yzw + _883.yzw;
    r0.y = _885.x;
    r0.z = _885.y;
    r0.w = _885.z;
    vec3 _896 = r3.www * v1.xyz;
    r1.x = _896.x;
    r1.y = _896.y;
    r1.z = _896.z;
    vec4 _905 = r0;
    vec4 _908 = r0;
    vec3 _910 = (r1.xyz * _905.xxx) + _908.yzw;
    r0.x = _910.x;
    r0.y = _910.y;
    r0.z = _910.z;
    vec4 _917 = r0;
    vec3 _924 = _917.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _924.x;
    r0.y = _924.y;
    r0.z = _924.z;
    vec3 _939 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _939.x;
    oC0.y = _939.y;
    oC0.z = _939.z;
    oC0.w = 1.0;
    bool _952 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _960;
    if (_952)
    {
        _960 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _960 = _952;
    }
    if (_960)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
