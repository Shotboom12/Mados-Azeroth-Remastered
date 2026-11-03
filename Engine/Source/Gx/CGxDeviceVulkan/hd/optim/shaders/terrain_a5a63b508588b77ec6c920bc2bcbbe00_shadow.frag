#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
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
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _84 = r0.xyz * v0.xyz;
    r2.x = _84.x;
    r2.y = _84.y;
    r2.z = _84.z;
    vec4 _93 = r2;
    vec4 _95 = r2;
    vec3 _97 = _93.xyz + _95.xyz;
    r2.x = _97.x;
    r2.y = _97.y;
    r2.z = _97.z;
    vec4 _106 = r0;
    vec3 _115 = mix(r2.xyz, _106.xyz, greaterThanEqual(-r1.www, vec3(0.0)));
    r0.x = _115.x;
    r0.y = _115.y;
    r0.z = _115.z;
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
        vec2 _186 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _186.x;
        r1.z = _186.y;
        vec2 _198 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _198.x;
        r3.y = _198.y;
        vec2 _206 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _206.x;
        r3.w = _206.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _229 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _229.x;
        r2.y = _229.y;
        vec2 _236 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _236.x;
        r2.w = _236.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _259 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _259.x;
        r2.y = _259.y;
        vec2 _266 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _266.x;
        r2.w = _266.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _289 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _289.x;
        r2.y = _289.y;
        vec2 _296 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _296.x;
        r2.w = _296.y;
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
        vec2 _356 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _356.x;
        r1.z = _356.y;
        vec2 _366 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _366.x;
        r3.y = _366.y;
        vec2 _373 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _373.x;
        r3.w = _373.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _395 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _395.x;
        r2.y = _395.y;
        vec2 _402 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _402.x;
        r2.w = _402.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _424 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _424.x;
        r2.y = _424.y;
        vec2 _431 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _431.x;
        r2.w = _431.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _453 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _453.x;
        r2.y = _453.y;
        vec2 _460 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _460.x;
        r2.w = _460.y;
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
            vec2 _509 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _509.x;
            r1.w = _509.y;
            vec2 _519 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _519.x;
            r3.y = _519.y;
            vec2 _526 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _526.x;
            r3.w = _526.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _548 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _548.x;
            r3.y = _548.y;
            vec2 _555 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _555.x;
            r3.w = _555.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _577 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _577.x;
            r3.y = _577.y;
            vec2 _584 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _584.x;
            r3.w = _584.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _606 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _606.x;
            r3.y = _606.y;
            vec2 _613 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _613.x;
            r3.w = _613.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v4.w;
            r1.w = v5.w;
            vec2 _645 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _645.x;
            r2.w = _645.y;
            r2.y = (v5.w * 0.5) + 0.5;
            r2.z = v6.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _670 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _670.x;
            r4.y = _670.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _698 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _698.x;
            r4.y = _698.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _720 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _720.x;
            r4.y = _720.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _742 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _742.x;
            r4.y = _742.y;
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
    vec3 _804 = r0.www * v1.xyz;
    r1.y = _804.x;
    r1.z = _804.y;
    r1.w = _804.z;
    vec4 _813 = r1;
    vec3 _815 = r2.xxx * _813.yzw;
    r1.y = _815.x;
    r1.z = _815.y;
    r1.w = _815.z;
    vec4 _822 = r0;
    vec3 _829 = (_822.xyz * r1.xxx) + r1.yzw;
    r0.x = _829.x;
    r0.y = _829.y;
    r0.z = _829.z;
    vec4 _836 = r0;
    vec3 _843 = _836.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _843.x;
    r0.y = _843.y;
    r0.z = _843.z;
    vec3 _858 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _858.x;
    oC0.y = _858.y;
    oC0.z = _858.z;
    oC0.w = 1.0;
    bool _869 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _877;
    if (_869)
    {
        _877 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _877 = _869;
    }
    if (_877)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
