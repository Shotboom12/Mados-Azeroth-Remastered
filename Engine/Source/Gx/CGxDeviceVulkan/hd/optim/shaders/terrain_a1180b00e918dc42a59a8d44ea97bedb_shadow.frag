#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _134 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _134.x;
        r1.z = _134.y;
        vec2 _156 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _156.x;
        r3.y = _156.y;
        vec2 _164 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _164.x;
        r3.w = _164.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _187 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _187.x;
        r2.y = _187.y;
        vec2 _194 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _194.x;
        r2.w = _194.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _217 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _217.x;
        r2.y = _217.y;
        vec2 _224 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _224.x;
        r2.w = _224.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _247 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _247.x;
        r2.y = _247.y;
        vec2 _254 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _254.x;
        r2.w = _254.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex6Lod( r2.xy, r2.w);
        vec2 _314 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _314.x;
        r1.z = _314.y;
        vec2 _324 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _324.x;
        r3.y = _324.y;
        vec2 _331 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _331.x;
        r3.w = _331.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _353 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _353.x;
        r2.y = _353.y;
        vec2 _360 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _360.x;
        r2.w = _360.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _382 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _382.x;
        r2.y = _382.y;
        vec2 _389 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _389.x;
        r2.w = _389.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _411 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _411.x;
        r2.y = _411.y;
        vec2 _418 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _418.x;
        r2.w = _418.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex7Lod( r2.xy, r2.w);
            vec2 _467 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _467.x;
            r1.w = _467.y;
            vec2 _477 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _477.x;
            r3.y = _477.y;
            vec2 _484 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _484.x;
            r3.w = _484.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _506 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _506.x;
            r3.y = _506.y;
            vec2 _513 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _513.x;
            r3.w = _513.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _535 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _535.x;
            r3.y = _535.y;
            vec2 _542 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _542.x;
            r3.w = _542.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _564 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _564.x;
            r3.y = _564.y;
            vec2 _571 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _571.x;
            r3.w = _571.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v4.w;
            r1.w = v5.w;
            vec2 _603 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _603.x;
            r2.w = _603.y;
            r2.y = (v5.w * 0.5) + 0.5;
            r2.z = v6.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _628 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _628.x;
            r4.y = _628.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _656 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _656.x;
            r4.y = _656.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _678 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _678.x;
            r4.y = _678.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _700 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _700.x;
            r4.y = _700.y;
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
    vec4 _758 = r0;
    vec3 _762 = _758.xyz * r1.xxx;
    r0.x = _762.x;
    r0.y = _762.y;
    r0.z = _762.z;
    vec4 _769 = r0;
    vec3 _773 = _769.xyz * v0.xyz;
    r0.x = _773.x;
    r0.y = _773.y;
    r0.z = _773.z;
    vec4 _780 = r0;
    vec4 _782 = r0;
    vec3 _784 = _780.xyz + _782.xyz;
    r0.x = _784.x;
    r0.y = _784.y;
    r0.z = _784.z;
    vec3 _795 = r0.www * v1.xyz;
    r1.x = _795.x;
    r1.y = _795.y;
    r1.z = _795.z;
    vec4 _807 = r0;
    vec3 _809 = (r1.xyz * r2.xxx) + _807.xyz;
    r0.x = _809.x;
    r0.y = _809.y;
    r0.z = _809.z;
    vec4 _816 = r0;
    vec3 _823 = _816.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _823.x;
    r0.y = _823.y;
    r0.z = _823.z;
    vec3 _838 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _838.x;
    oC0.y = _838.y;
    oC0.z = _838.z;
    oC0.w = 1.0;
    bool _851 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _859;
    if (_851)
    {
        _859 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _859 = _851;
    }
    if (_859)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
