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
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _87 = r0.xyz * v0.xyz;
    r2.x = _87.x;
    r2.y = _87.y;
    r2.z = _87.z;
    vec4 _96 = r2;
    vec4 _98 = r2;
    vec3 _100 = _96.xyz + _98.xyz;
    r2.x = _100.x;
    r2.y = _100.y;
    r2.z = _100.z;
    vec4 _109 = r0;
    vec3 _118 = mix(r2.xyz, _109.xyz, greaterThanEqual(-r1.www, vec3(0.0)));
    r0.x = _118.x;
    r0.y = _118.y;
    r0.z = _118.z;
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
        vec2 _189 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _189.x;
        r1.z = _189.y;
        vec2 _201 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _201.x;
        r3.y = _201.y;
        vec2 _209 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _209.x;
        r3.w = _209.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _232 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _232.x;
        r2.y = _232.y;
        vec2 _239 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _239.x;
        r2.w = _239.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _262 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _262.x;
        r2.y = _262.y;
        vec2 _269 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _269.x;
        r2.w = _269.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _292 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _292.x;
        r2.y = _292.y;
        vec2 _299 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _299.x;
        r2.w = _299.y;
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
        vec2 _359 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _359.x;
        r1.z = _359.y;
        vec2 _369 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _369.x;
        r3.y = _369.y;
        vec2 _376 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _376.x;
        r3.w = _376.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _398 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _398.x;
        r2.y = _398.y;
        vec2 _405 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _405.x;
        r2.w = _405.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _427 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _427.x;
        r2.y = _427.y;
        vec2 _434 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _434.x;
        r2.w = _434.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _456 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _456.x;
        r2.y = _456.y;
        vec2 _463 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _463.x;
        r2.w = _463.y;
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
            vec2 _512 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _512.x;
            r1.w = _512.y;
            vec2 _522 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _522.x;
            r3.y = _522.y;
            vec2 _529 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _529.x;
            r3.w = _529.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _551 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _551.x;
            r3.y = _551.y;
            vec2 _558 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _558.x;
            r3.w = _558.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _580 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _580.x;
            r3.y = _580.y;
            vec2 _587 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _587.x;
            r3.w = _587.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _609 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _609.x;
            r3.y = _609.y;
            vec2 _616 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _616.x;
            r3.w = _616.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v4.w;
            r1.w = v5.w;
            vec2 _648 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _648.x;
            r2.w = _648.y;
            r2.y = (v5.w * 0.5) + 0.5;
            r2.z = v6.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _673 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _673.x;
            r4.y = _673.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _701 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _701.x;
            r4.y = _701.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _723 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _723.x;
            r4.y = _723.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _745 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _745.x;
            r4.y = _745.y;
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
    vec3 _807 = r0.www * v1.xyz;
    r1.y = _807.x;
    r1.z = _807.y;
    r1.w = _807.z;
    vec4 _816 = r1;
    vec3 _818 = r2.xxx * _816.yzw;
    r1.y = _818.x;
    r1.z = _818.y;
    r1.w = _818.z;
    vec4 _825 = r0;
    vec3 _832 = (_825.xyz * r1.xxx) + r1.yzw;
    r0.x = _832.x;
    r0.y = _832.y;
    r0.z = _832.z;
    vec4 _839 = r0;
    vec3 _846 = _839.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _846.x;
    r0.y = _846.y;
    r0.z = _846.z;
    vec3 _861 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _861.x;
    oC0.y = _861.y;
    oC0.z = _861.z;
    oC0.w = 1.0;
    bool _872 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _880;
    if (_872)
    {
        _880 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _880 = _872;
    }
    if (_880)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
