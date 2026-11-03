#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
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
    vec4 v3 = texcoord4;
    vec4 v4 = texcoord5;
    vec4 v5 = texcoord6;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _77 = r0.xyz * v0.xyz;
    r1.y = _77.x;
    r1.z = _77.y;
    r1.w = _77.z;
    vec4 _87 = r1;
    vec4 _89 = r1;
    vec3 _91 = _87.yzw + _89.yzw;
    r1.y = _91.x;
    r1.z = _91.y;
    r1.w = _91.z;
    vec4 _100 = r0;
    vec3 _109 = mix(r1.yzw, _100.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = _109.x;
    r0.y = _109.y;
    r0.z = _109.z;
    r1.x = max(abs(v3.x), abs(v3.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 _152 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _152.x;
        r1.z = _152.y;
        vec2 _164 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _164.x;
        r2.y = _164.y;
        vec2 _175 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _175.x;
        r3.y = _175.y;
        vec2 _186 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _186.x;
        r4.y = _186.y;
        vec2 _197 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _197.x;
        r5.y = _197.y;
        r6 = (v3.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
        r2 = r6 + (-v3.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v3.z);
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
    r1.y = max(abs(v4.x), abs(v4.y));
    if (r1.y < 1.0)
    {
        vec2 _327 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _327.x;
        r1.z = _327.y;
        vec2 _337 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _337.x;
        r2.y = _337.y;
        vec2 _347 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _347.x;
        r3.y = _347.y;
        vec2 _357 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _357.x;
        r4.y = _357.y;
        vec2 _367 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _367.x;
        r5.y = _367.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v5.x), abs(v5.y));
        if (r1.z < 1.0)
        {
            vec2 _482 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _482.x;
            r1.w = _482.y;
            vec2 _492 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _492.x;
            r2.y = _492.y;
            vec2 _502 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _502.x;
            r3.y = _502.y;
            vec2 _512 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _512.x;
            r4.y = _512.y;
            vec2 _522 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _522.x;
            r5.y = _522.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
            r2 = r6 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v5.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v3.w;
            r2.y = v4.w;
            vec2 _630 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = _630.x;
            r3.y = _630.y;
            vec2 _640 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _640.x;
            r4.y = _640.y;
            vec2 _650 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = _650.x;
            r5.y = _650.y;
            vec2 _660 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = _660.x;
            r6.y = _660.y;
            vec2 _670 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = _670.x;
            r7.y = _670.y;
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
            r3 += (-v5.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v5.w);
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
    vec3 _809 = r0.www * v1.xyz;
    r1.y = _809.x;
    r1.z = _809.y;
    r1.w = _809.z;
    vec4 _818 = r1;
    vec3 _820 = r2.xxx * _818.yzw;
    r1.y = _820.x;
    r1.z = _820.y;
    r1.w = _820.z;
    vec4 _827 = r0;
    vec3 _834 = (_827.xyz * r1.xxx) + r1.yzw;
    r0.x = _834.x;
    r0.y = _834.y;
    r0.z = _834.z;
    vec4 _841 = r0;
    vec3 _848 = _841.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _848.x;
    r0.y = _848.y;
    r0.z = _848.z;
    vec3 _863 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _863.x;
    oC0.y = _863.y;
    oC0.z = _863.z;
    oC0.w = 1.0;
    bool _874 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _882;
    if (_874)
    {
        _882 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _882 = _874;
    }
    if (_882)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
