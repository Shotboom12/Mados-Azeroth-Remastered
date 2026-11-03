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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _138 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _138.x;
        r1.z = _138.y;
        vec2 _160 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _160.x;
        r3.y = _160.y;
        vec2 _168 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _168.x;
        r3.w = _168.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _191 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _191.x;
        r2.y = _191.y;
        vec2 _198 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _198.x;
        r2.w = _198.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _221 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _221.x;
        r2.y = _221.y;
        vec2 _228 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _228.x;
        r2.w = _228.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _251 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _251.x;
        r2.y = _251.y;
        vec2 _258 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _258.x;
        r2.w = _258.y;
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
        vec2 _318 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _318.x;
        r1.z = _318.y;
        vec2 _328 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _328.x;
        r3.y = _328.y;
        vec2 _335 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _335.x;
        r3.w = _335.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _357 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _357.x;
        r2.y = _357.y;
        vec2 _364 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _364.x;
        r2.w = _364.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _386 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _386.x;
        r2.y = _386.y;
        vec2 _393 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _393.x;
        r2.w = _393.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _415 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _415.x;
        r2.y = _415.y;
        vec2 _422 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _422.x;
        r2.w = _422.y;
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
            vec2 _471 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _471.x;
            r1.w = _471.y;
            vec2 _481 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _481.x;
            r3.y = _481.y;
            vec2 _488 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _488.x;
            r3.w = _488.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _510 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _510.x;
            r3.y = _510.y;
            vec2 _517 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _517.x;
            r3.w = _517.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _539 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _539.x;
            r3.y = _539.y;
            vec2 _546 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _546.x;
            r3.w = _546.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _568 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _568.x;
            r3.y = _568.y;
            vec2 _575 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _575.x;
            r3.w = _575.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 _607 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _607.x;
            r2.w = _607.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _632 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _632.x;
            r4.y = _632.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _660 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _660.x;
            r4.y = _660.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _682 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _682.x;
            r4.y = _682.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _704 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _704.x;
            r4.y = _704.y;
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
    vec4 _763 = r0;
    vec3 _767 = _763.xyz * r1.xxx;
    r0.x = _767.x;
    r0.y = _767.y;
    r0.z = _767.z;
    vec4 _774 = r0;
    vec3 _778 = _774.xyz * v0.xyz;
    r0.x = _778.x;
    r0.y = _778.y;
    r0.z = _778.z;
    vec4 _785 = r0;
    vec4 _787 = r0;
    vec3 _789 = _785.xyz + _787.xyz;
    r0.x = _789.x;
    r0.y = _789.y;
    r0.z = _789.z;
    vec3 _800 = r0.www * v1.xyz;
    r1.x = _800.x;
    r1.y = _800.y;
    r1.z = _800.z;
    vec4 _812 = r0;
    vec3 _814 = (r1.xyz * r2.xxx) + _812.xyz;
    r0.x = _814.x;
    r0.y = _814.y;
    r0.z = _814.z;
    vec4 _821 = r0;
    vec3 _828 = _821.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _828.x;
    r0.y = _828.y;
    r0.z = _828.z;
    vec3 _843 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _843.x;
    oC0.y = _843.y;
    oC0.z = _843.z;
    oC0.w = 1.0;
    bool _856 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _864;
    if (_856)
    {
        _864 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _864 = _856;
    }
    if (_864)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
