#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    r1 = OptTex1( v3.xy);
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 _119 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _119.x;
        r1.z = _119.y;
        vec2 _141 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _141.x;
        r2.y = _141.y;
        vec2 _152 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _152.x;
        r3.y = _152.y;
        vec2 _163 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _163.x;
        r4.y = _163.y;
        vec2 _174 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _174.x;
        r5.y = _174.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r6 = OptTex5Lod( r6.xy, r6.w);
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
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v5.x), abs(v5.y));
    if (r1.y < 1.0)
    {
        vec2 _305 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _305.x;
        r1.z = _305.y;
        vec2 _315 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _315.x;
        r2.y = _315.y;
        vec2 _325 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _325.x;
        r3.y = _325.y;
        vec2 _335 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _335.x;
        r4.y = _335.y;
        vec2 _345 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _345.x;
        r5.y = _345.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            vec2 _460 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _460.x;
            r1.w = _460.y;
            vec2 _470 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _470.x;
            r2.y = _470.y;
            vec2 _480 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _480.x;
            r3.y = _480.y;
            vec2 _490 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _490.x;
            r4.y = _490.y;
            vec2 _500 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _500.x;
            r5.y = _500.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v6.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v4.w;
            r2.y = v5.w;
            vec2 _608 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = _608.x;
            r3.y = _608.y;
            vec2 _618 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _618.x;
            r4.y = _618.y;
            vec2 _628 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = _628.x;
            r5.y = _628.y;
            vec2 _638 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = _638.x;
            r6.y = _638.y;
            vec2 _648 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = _648.x;
            r7.y = _648.y;
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
            r3 += (-v6.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v6.w);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r3, vec4(1.0));
            r1.z += r1.w;
            r1.w = max(abs(r2.x), abs(r2.y));
            r1.w = clamp((r1.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.z = (r1.z * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.w * r1.z) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _783 = r0;
    vec3 _787 = _783.xyz * r1.xxx;
    r0.x = _787.x;
    r0.y = _787.y;
    r0.z = _787.z;
    vec4 _794 = r0;
    vec3 _798 = _794.xyz * v0.xyz;
    r0.x = _798.x;
    r0.y = _798.y;
    r0.z = _798.z;
    vec4 _805 = r0;
    vec4 _807 = r0;
    vec3 _809 = _805.xyz + _807.xyz;
    r0.x = _809.x;
    r0.y = _809.y;
    r0.z = _809.z;
    vec3 _820 = r0.www * v1.xyz;
    r1.x = _820.x;
    r1.y = _820.y;
    r1.z = _820.z;
    vec4 _832 = r0;
    vec3 _834 = (r1.xyz * r2.xxx) + _832.xyz;
    r0.x = _834.x;
    r0.y = _834.y;
    r0.z = _834.z;
    vec4 _841 = r0;
    vec3 _848 = _841.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _848.x;
    r0.y = _848.y;
    r0.z = _848.z;
    vec3 _863 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _863.x;
    oC0.y = _863.y;
    oC0.z = _863.z;
    oC0.w = 1.0;
    bool _876 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _884;
    if (_876)
    {
        _884 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _884 = _876;
    }
    if (_884)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
