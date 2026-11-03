#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
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
    r4 = OptTex4( v4.wz);
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _148 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _148.x;
        r0.z = _148.y;
        vec2 _170 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _170.x;
        r3.y = _170.y;
        vec2 _178 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _178.x;
        r3.w = _178.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r0.w = r2.x + r3.x;
        vec2 _201 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _201.x;
        r2.y = _201.y;
        vec2 _208 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _208.x;
        r2.w = _208.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.w += r2.x;
        vec2 _231 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _231.x;
        r2.y = _231.y;
        vec2 _238 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _238.x;
        r2.w = _238.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.w += r2.x;
        vec2 _261 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _261.x;
        r2.y = _261.y;
        vec2 _268 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _268.x;
        r2.w = _268.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.y = r0.w + r2.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v6.x), abs(v6.y));
    if (r0.y < 1.0)
    {
        r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex6Lod( r2.xy, r2.w);
        vec2 _328 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _328.x;
        r0.z = _328.y;
        vec2 _338 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _338.x;
        r3.y = _338.y;
        vec2 _345 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _345.x;
        r3.w = _345.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r0.w = r2.x + r3.x;
        vec2 _367 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _367.x;
        r2.y = _367.y;
        vec2 _374 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _374.x;
        r2.w = _374.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r0.w += r2.x;
        vec2 _396 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _396.x;
        r2.y = _396.y;
        vec2 _403 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _403.x;
        r2.w = _403.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r0.w += r2.x;
        vec2 _425 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _425.x;
        r2.y = _425.y;
        vec2 _432 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _432.x;
        r2.w = _432.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r0.y = r0.w + r2.x;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v7.x), abs(v7.y));
        if (r0.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex7Lod( r2.xy, r2.w);
            vec2 _481 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r0.z = _481.x;
            r0.w = _481.y;
            vec2 _491 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _491.x;
            r3.y = _491.y;
            vec2 _498 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _498.x;
            r3.w = _498.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _520 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _520.x;
            r3.y = _520.y;
            vec2 _527 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _527.x;
            r3.w = _527.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _549 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _549.x;
            r3.y = _549.y;
            vec2 _556 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _556.x;
            r3.w = _556.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _578 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _578.x;
            r3.y = _578.y;
            vec2 _585 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _585.x;
            r3.w = _585.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r0.z = r2.x + r3.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v5.w;
            r0.w = v6.w;
            vec2 _617 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _617.x;
            r2.w = _617.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _642 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _642.x;
            r4.y = _642.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _670 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _670.x;
            r4.y = _670.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _692 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _692.x;
            r4.y = _692.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _714 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _714.x;
            r4.y = _714.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r0.z), abs(r0.w));
            r0.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.z * r0.w) + 1.0;
        }
    }
    r2.x = min(r0.y, r0.x);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _775 = r0;
    vec3 _777 = r1.xyz * _775.xxx;
    r0.x = _777.x;
    r0.y = _777.y;
    r0.z = _777.z;
    vec4 _784 = r0;
    vec3 _788 = _784.xyz * v0.xyz;
    r0.x = _788.x;
    r0.y = _788.y;
    r0.z = _788.z;
    vec4 _795 = r0;
    vec4 _797 = r0;
    vec3 _799 = _795.xyz + _797.xyz;
    r0.x = _799.x;
    r0.y = _799.y;
    r0.z = _799.z;
    vec4 _806 = r1;
    vec3 _810 = _806.www * v1.xyz;
    r1.x = _810.x;
    r1.y = _810.y;
    r1.z = _810.z;
    vec4 _822 = r0;
    vec3 _824 = (r1.xyz * r2.xxx) + _822.xyz;
    r0.x = _824.x;
    r0.y = _824.y;
    r0.z = _824.z;
    vec4 _831 = r0;
    vec3 _838 = _831.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _838.x;
    r0.y = _838.y;
    r0.z = _838.z;
    vec3 _853 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _853.x;
    oC0.y = _853.y;
    oC0.z = _853.z;
    oC0.w = 1.0;
    bool _866 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _874;
    if (_866)
    {
        _874 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _874 = _866;
    }
    if (_874)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
