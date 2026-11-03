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
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 *= r2.xxxx;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _142 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _142.x;
        r1.z = _142.y;
        vec2 _164 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _164.x;
        r2.y = _164.y;
        vec2 _172 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _172.x;
        r2.w = _172.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _195 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _195.x;
        r2.y = _195.y;
        vec2 _202 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _202.x;
        r2.w = _202.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _225 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _225.x;
        r2.y = _225.y;
        vec2 _232 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _232.x;
        r2.w = _232.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _255 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _255.x;
        r2.y = _255.y;
        vec2 _262 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _262.x;
        r2.w = _262.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _285 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _285.x;
        r2.y = _285.y;
        vec2 _292 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _292.x;
        r2.w = _292.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _315 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _315.x;
        r2.y = _315.y;
        vec2 _322 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _322.x;
        r2.w = _322.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _345 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _345.x;
        r2.y = _345.y;
        vec2 _352 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _352.x;
        r2.w = _352.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _375 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _375.x;
        r2.y = _375.y;
        vec2 _382 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _382.x;
        r2.w = _382.y;
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
            vec2 _432 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _432.x;
            r1.z = _432.y;
            vec2 _442 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _442.x;
            r3.y = _442.y;
            vec2 _449 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _449.x;
            r3.w = _449.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _471 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _471.x;
            r2.y = _471.y;
            vec2 _478 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _478.x;
            r2.w = _478.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _500 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _500.x;
            r2.y = _500.y;
            vec2 _507 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _507.x;
            r2.w = _507.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _529 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _529.x;
            r2.y = _529.y;
            vec2 _536 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _536.x;
            r2.w = _536.y;
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
                vec2 _586 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _586.x;
                r1.z = _586.y;
                vec2 _596 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _596.x;
                r3.y = _596.y;
                vec2 _603 = vec2(1.0, 0.0) * v6.zx;
                r3.z = _603.x;
                r3.w = _603.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _625 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _625.x;
                r2.y = _625.y;
                vec2 _632 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _632.x;
                r2.w = _632.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _654 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _654.x;
                r2.y = _654.y;
                vec2 _661 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _661.x;
                r2.w = _661.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _683 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _683.x;
                r2.y = _683.y;
                vec2 _690 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _690.x;
                r2.w = _690.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 _722 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _722.x;
                r2.w = _722.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _747 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _747.x;
                r4.y = _747.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _775 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _775.x;
                r4.y = _775.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _797 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _797.x;
                r4.y = _797.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _819 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _819.x;
                r4.y = _819.y;
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
    vec4 _872 = r0;
    vec3 _876 = _872.xyz * r1.yyy;
    r0.x = _876.x;
    r0.y = _876.y;
    r0.z = _876.z;
    vec4 _883 = r0;
    vec3 _887 = _883.xyz * v0.xyz;
    r0.x = _887.x;
    r0.y = _887.y;
    r0.z = _887.z;
    vec4 _894 = r0;
    vec4 _896 = r0;
    vec3 _898 = _894.xyz + _896.xyz;
    r0.x = _898.x;
    r0.y = _898.y;
    r0.z = _898.z;
    vec3 _909 = r0.www * v1.xyz;
    r1.y = _909.x;
    r1.z = _909.y;
    r1.w = _909.z;
    vec4 _921 = r0;
    vec3 _923 = (r1.yzw * r1.xxx) + _921.xyz;
    r0.x = _923.x;
    r0.y = _923.y;
    r0.z = _923.z;
    vec4 _930 = r0;
    vec3 _937 = _930.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _937.x;
    r0.y = _937.y;
    r0.z = _937.z;
    vec3 _952 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _952.x;
    oC0.y = _952.y;
    oC0.z = _952.z;
    oC0.w = 1.0;
    bool _965 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _973;
    if (_965)
    {
        _973 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _973 = _965;
    }
    if (_973)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
