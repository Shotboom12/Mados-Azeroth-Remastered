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
    r3.x = _80.x;
    r3.y = _80.y;
    vec3 _93 = v0.xyz + v0.xyz;
    r4.x = _93.x;
    r4.y = _93.y;
    r4.z = _93.z;
    vec3 _105 = r0.xyz * r4.xyz;
    r5.x = _105.x;
    r5.y = _105.y;
    r5.z = _105.z;
    vec4 _114 = r0;
    vec3 _123 = mix(r5.xyz, _114.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = _123.x;
    r0.y = _123.y;
    r0.z = _123.z;
    vec3 _134 = r1.xyz * r4.xyz;
    r3.x = _134.x;
    r3.z = _134.y;
    r3.w = _134.z;
    vec4 _144 = r1;
    vec3 _150 = mix(r3.xzw, _144.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = _150.x;
    r1.y = _150.y;
    r1.z = _150.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _227 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _227.x;
        r1.z = _227.y;
        vec2 _238 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _238.x;
        r2.y = _238.y;
        vec2 _246 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _246.x;
        r2.w = _246.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _269 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _269.x;
        r2.y = _269.y;
        vec2 _276 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _276.x;
        r2.w = _276.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _299 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _299.x;
        r2.y = _299.y;
        vec2 _306 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _306.x;
        r2.w = _306.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _329 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _329.x;
        r2.y = _329.y;
        vec2 _336 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _336.x;
        r2.w = _336.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _359 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _359.x;
        r2.y = _359.y;
        vec2 _366 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _366.x;
        r2.w = _366.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _389 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _389.x;
        r2.y = _389.y;
        vec2 _396 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _396.x;
        r2.w = _396.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _419 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _419.x;
        r2.y = _419.y;
        vec2 _426 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _426.x;
        r2.w = _426.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _449 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _449.x;
        r2.y = _449.y;
        vec2 _456 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _456.x;
        r2.w = _456.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v5.x), abs(v5.y));
        if (r1.y < 1.0)
        {
            r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex6Lod( r2.xy, r2.w);
            vec2 _506 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _506.x;
            r1.z = _506.y;
            vec2 _516 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _516.x;
            r3.y = _516.y;
            vec2 _523 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _523.x;
            r3.w = _523.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _545 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _545.x;
            r2.y = _545.y;
            vec2 _552 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _552.x;
            r2.w = _552.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _574 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _574.x;
            r2.y = _574.y;
            vec2 _581 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _581.x;
            r2.w = _581.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _603 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _603.x;
            r2.y = _603.y;
            vec2 _610 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _610.x;
            r2.w = _610.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v6.x), abs(v6.y));
            if (r1.y < 1.0)
            {
                r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r2 = OptTex7Lod( r2.xy, r2.w);
                vec2 _660 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _660.x;
                r1.z = _660.y;
                vec2 _670 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _670.x;
                r3.y = _670.y;
                vec2 _677 = vec2(1.0, 0.0) * v6.zx;
                r3.z = _677.x;
                r3.w = _677.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _699 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _699.x;
                r2.y = _699.y;
                vec2 _706 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _706.x;
                r2.w = _706.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _728 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _728.x;
                r2.y = _728.y;
                vec2 _735 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _735.x;
                r2.w = _735.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _757 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _757.x;
                r2.y = _757.y;
                vec2 _764 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _764.x;
                r2.w = _764.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 _796 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _796.x;
                r2.w = _796.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _821 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _821.x;
                r4.y = _821.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _849 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _849.x;
                r4.y = _849.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _871 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _871.x;
                r4.y = _871.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _893 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _893.x;
                r4.y = _893.y;
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
    vec3 _950 = r0.www * v1.xyz;
    r2.x = _950.x;
    r2.y = _950.y;
    r2.z = _950.z;
    vec4 _957 = r1;
    vec3 _961 = _957.xxx * r2.xyz;
    r1.x = _961.x;
    r1.z = _961.y;
    r1.w = _961.z;
    vec4 _968 = r0;
    vec3 _975 = (_968.xyz * r1.yyy) + r1.xzw;
    r0.x = _975.x;
    r0.y = _975.y;
    r0.z = _975.z;
    vec4 _982 = r0;
    vec3 _989 = _982.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _989.x;
    r0.y = _989.y;
    r0.z = _989.z;
    vec3 _1004 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1004.x;
    oC0.y = _1004.y;
    oC0.z = _1004.z;
    oC0.w = 1.0;
    bool _1016 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1024;
    if (_1016)
    {
        _1024 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1024 = _1016;
    }
    if (_1024)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
