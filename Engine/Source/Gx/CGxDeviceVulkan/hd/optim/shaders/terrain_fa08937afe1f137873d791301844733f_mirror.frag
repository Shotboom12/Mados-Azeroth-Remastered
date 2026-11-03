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
    vec2 _84 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = _84.x;
    r2.z = _84.y;
    vec3 _96 = v0.xyz + v0.xyz;
    r3.x = _96.x;
    r3.y = _96.y;
    r3.z = _96.z;
    vec3 _108 = r0.xyz * r3.xyz;
    r4.x = _108.x;
    r4.y = _108.y;
    r4.z = _108.z;
    vec4 _117 = r0;
    vec3 _126 = mix(r4.xyz, _117.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = _126.x;
    r0.y = _126.y;
    r0.z = _126.z;
    vec4 _135 = r3;
    vec3 _137 = r1.xyz * _135.xyz;
    r3.x = _137.x;
    r3.y = _137.y;
    r3.z = _137.z;
    vec4 _146 = r1;
    vec3 _152 = mix(r3.xyz, _146.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = _152.x;
    r1.y = _152.y;
    r1.z = _152.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _214 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _214.x;
        r0.z = _214.y;
        vec2 _225 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _225.x;
        r2.y = _225.y;
        vec2 _233 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _233.x;
        r2.w = _233.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.w = r1.x + r2.x;
        vec2 _256 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _256.x;
        r1.y = _256.y;
        vec2 _263 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _263.x;
        r1.w = _263.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _286 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _286.x;
        r1.y = _286.y;
        vec2 _293 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _293.x;
        r1.w = _293.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _316 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _316.x;
        r1.y = _316.y;
        vec2 _323 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _323.x;
        r1.w = _323.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.y = r0.w + r1.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v5.x), abs(v5.y));
    if (r0.y < 1.0)
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex6Lod( r1.xy, r1.w);
        vec2 _383 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _383.x;
        r0.z = _383.y;
        vec2 _393 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _393.x;
        r2.y = _393.y;
        vec2 _400 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _400.x;
        r2.w = _400.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r0.w = r1.x + r2.x;
        vec2 _422 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _422.x;
        r1.y = _422.y;
        vec2 _429 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _429.x;
        r1.w = _429.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _451 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _451.x;
        r1.y = _451.y;
        vec2 _458 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _458.x;
        r1.w = _458.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _480 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _480.x;
        r1.y = _480.y;
        vec2 _487 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _487.x;
        r1.w = _487.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.y = r0.w + r1.x;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v6.x), abs(v6.y));
        if (r0.z < 1.0)
        {
            r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex7Lod( r1.xy, r1.w);
            vec2 _536 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = _536.x;
            r0.w = _536.y;
            vec2 _546 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _546.x;
            r2.y = _546.y;
            vec2 _553 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _553.x;
            r2.w = _553.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _575 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _575.x;
            r2.y = _575.y;
            vec2 _582 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _582.x;
            r2.w = _582.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _604 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _604.x;
            r2.y = _604.y;
            vec2 _611 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _611.x;
            r2.w = _611.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _633 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _633.x;
            r2.y = _633.y;
            vec2 _640 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _640.x;
            r2.w = _640.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r0.z = r1.x + r2.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v4.w;
            r0.w = v5.w;
            vec2 _672 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = _672.x;
            r1.w = _672.y;
            r1.y = (v5.w * 0.5) + 0.5;
            r1.z = v6.w;
            r2 = OptTex8Lod( r1.xy, r1.w);
            vec2 _697 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _697.x;
            r4.y = _697.y;
            r4.z = r1.zw.x;
            r4.w = r1.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r1.z = r2.x + r5.x;
            vec2 _725 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _725.x;
            r4.y = _725.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.z += r2.x;
            vec2 _747 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _747.x;
            r4.y = _747.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.z += r2.x;
            vec2 _769 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _769.x;
            r4.y = _769.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.x = r1.z + r2.x;
            r1.y = max(abs(r0.z), abs(r0.w));
            r0.z = clamp((r1.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.w = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.z * r0.w) + 1.0;
        }
    }
    r1.x = min(r0.y, r0.x);
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _831 = r3.www * v1.xyz;
    r0.y = _831.x;
    r0.z = _831.y;
    r0.w = _831.z;
    vec4 _840 = r0;
    vec3 _842 = r1.xxx * _840.yzw;
    r0.y = _842.x;
    r0.z = _842.y;
    r0.w = _842.z;
    vec4 _851 = r0;
    vec4 _854 = r0;
    vec3 _856 = (r3.xyz * _851.xxx) + _854.yzw;
    r0.x = _856.x;
    r0.y = _856.y;
    r0.z = _856.z;
    vec4 _863 = r0;
    vec3 _870 = _863.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _870.x;
    r0.y = _870.y;
    r0.z = _870.z;
    vec3 _885 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _885.x;
    oC0.y = _885.y;
    oC0.z = _885.z;
    oC0.w = 1.0;
    bool _897 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _905;
    if (_897)
    {
        _905 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _905 = _897;
    }
    if (_905)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
