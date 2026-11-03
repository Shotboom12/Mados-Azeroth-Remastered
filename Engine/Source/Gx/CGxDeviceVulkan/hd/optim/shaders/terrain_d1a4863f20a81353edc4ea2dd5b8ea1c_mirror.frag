#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
    vec4 v3 = texcoord4;
    vec4 v4 = texcoord5;
    vec4 v5 = texcoord6;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _74 = r0.xyz * v0.xyz;
    r1.y = _74.x;
    r1.z = _74.y;
    r1.w = _74.z;
    vec4 _84 = r1;
    vec4 _86 = r1;
    vec3 _88 = _84.yzw + _86.yzw;
    r1.y = _88.x;
    r1.z = _88.y;
    r1.w = _88.z;
    vec4 _97 = r0;
    vec3 _106 = mix(r1.yzw, _97.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = _106.x;
    r0.y = _106.y;
    r0.z = _106.z;
    r1.x = max(abs(v3.x), abs(v3.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v3.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _166 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _166.x;
        r1.z = _166.y;
        vec2 _178 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _178.x;
        r3.y = _178.y;
        vec2 _186 = vec2(1.0, 0.0) * v3.zx;
        r3.z = _186.x;
        r3.w = _186.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _209 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _209.x;
        r2.y = _209.y;
        vec2 _216 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _216.x;
        r2.w = _216.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _239 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _239.x;
        r2.y = _239.y;
        vec2 _246 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _246.x;
        r2.w = _246.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _269 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _269.x;
        r2.y = _269.y;
        vec2 _276 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _276.x;
        r2.w = _276.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
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
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex6Lod( r2.xy, r2.w);
        vec2 _336 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _336.x;
        r1.z = _336.y;
        vec2 _346 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _346.x;
        r3.y = _346.y;
        vec2 _353 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _353.x;
        r3.w = _353.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _375 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _375.x;
        r2.y = _375.y;
        vec2 _382 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _382.x;
        r2.w = _382.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _404 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _404.x;
        r2.y = _404.y;
        vec2 _411 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _411.x;
        r2.w = _411.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _433 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _433.x;
        r2.y = _433.y;
        vec2 _440 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _440.x;
        r2.w = _440.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v5.x), abs(v5.y));
        if (r1.z < 1.0)
        {
            r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex7Lod( r2.xy, r2.w);
            vec2 _489 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _489.x;
            r1.w = _489.y;
            vec2 _499 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _499.x;
            r3.y = _499.y;
            vec2 _506 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _506.x;
            r3.w = _506.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _528 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _528.x;
            r3.y = _528.y;
            vec2 _535 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _535.x;
            r3.w = _535.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _557 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _557.x;
            r3.y = _557.y;
            vec2 _564 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _564.x;
            r3.w = _564.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _586 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _586.x;
            r3.y = _586.y;
            vec2 _593 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _593.x;
            r3.w = _593.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v3.w;
            r1.w = v4.w;
            vec2 _625 = (v3.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _625.x;
            r2.w = _625.y;
            r2.y = (v4.w * 0.5) + 0.5;
            r2.z = v5.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _650 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _650.x;
            r4.y = _650.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _678 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _678.x;
            r4.y = _678.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _700 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _700.x;
            r4.y = _700.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _722 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _722.x;
            r4.y = _722.y;
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
    vec3 _784 = r0.www * v1.xyz;
    r1.y = _784.x;
    r1.z = _784.y;
    r1.w = _784.z;
    vec4 _793 = r1;
    vec3 _795 = r2.xxx * _793.yzw;
    r1.y = _795.x;
    r1.z = _795.y;
    r1.w = _795.z;
    vec4 _802 = r0;
    vec3 _809 = (_802.xyz * r1.xxx) + r1.yzw;
    r0.x = _809.x;
    r0.y = _809.y;
    r0.z = _809.z;
    vec4 _816 = r0;
    vec3 _823 = _816.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _823.x;
    r0.y = _823.y;
    r0.z = _823.z;
    vec3 _838 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _838.x;
    oC0.y = _838.y;
    oC0.z = _838.z;
    oC0.w = 1.0;
    bool _849 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _857;
    if (_849)
    {
        _857 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _857 = _849;
    }
    if (_857)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
