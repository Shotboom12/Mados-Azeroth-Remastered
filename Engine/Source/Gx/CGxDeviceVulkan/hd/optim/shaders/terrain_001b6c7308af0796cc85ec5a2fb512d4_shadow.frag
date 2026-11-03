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
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _189 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _189.x;
        r1.z = _189.y;
        vec2 _201 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _201.x;
        r2.y = _201.y;
        vec2 _209 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _209.x;
        r2.w = _209.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _232 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _232.x;
        r2.y = _232.y;
        vec2 _239 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _239.x;
        r2.w = _239.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _262 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _262.x;
        r2.y = _262.y;
        vec2 _269 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _269.x;
        r2.w = _269.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _292 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _292.x;
        r2.y = _292.y;
        vec2 _299 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _299.x;
        r2.w = _299.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _322 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _322.x;
        r2.y = _322.y;
        vec2 _329 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _329.x;
        r2.w = _329.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _352 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _352.x;
        r2.y = _352.y;
        vec2 _359 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _359.x;
        r2.w = _359.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _382 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _382.x;
        r2.y = _382.y;
        vec2 _389 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _389.x;
        r2.w = _389.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _412 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _412.x;
        r2.y = _412.y;
        vec2 _419 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _419.x;
        r2.w = _419.y;
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
            vec2 _469 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _469.x;
            r1.z = _469.y;
            vec2 _479 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _479.x;
            r3.y = _479.y;
            vec2 _486 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _486.x;
            r3.w = _486.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _508 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _508.x;
            r2.y = _508.y;
            vec2 _515 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _515.x;
            r2.w = _515.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _537 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _537.x;
            r2.y = _537.y;
            vec2 _544 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _544.x;
            r2.w = _544.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _566 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _566.x;
            r2.y = _566.y;
            vec2 _573 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _573.x;
            r2.w = _573.y;
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
                vec2 _623 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _623.x;
                r1.z = _623.y;
                vec2 _633 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _633.x;
                r3.y = _633.y;
                vec2 _640 = vec2(1.0, 0.0) * v6.zx;
                r3.z = _640.x;
                r3.w = _640.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _662 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _662.x;
                r2.y = _662.y;
                vec2 _669 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _669.x;
                r2.w = _669.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _691 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _691.x;
                r2.y = _691.y;
                vec2 _698 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _698.x;
                r2.w = _698.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _720 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _720.x;
                r2.y = _720.y;
                vec2 _727 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _727.x;
                r2.w = _727.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 _759 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _759.x;
                r2.w = _759.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _784 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _784.x;
                r4.y = _784.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _812 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _812.x;
                r4.y = _812.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _834 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _834.x;
                r4.y = _834.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _856 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _856.x;
                r4.y = _856.y;
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
    vec3 _913 = r0.www * v1.xyz;
    r2.x = _913.x;
    r2.y = _913.y;
    r2.z = _913.z;
    vec4 _920 = r1;
    vec3 _924 = _920.xxx * r2.xyz;
    r1.x = _924.x;
    r1.z = _924.y;
    r1.w = _924.z;
    vec4 _931 = r0;
    vec3 _938 = (_931.xyz * r1.yyy) + r1.xzw;
    r0.x = _938.x;
    r0.y = _938.y;
    r0.z = _938.z;
    vec4 _945 = r0;
    vec3 _952 = _945.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _952.x;
    r0.y = _952.y;
    r0.z = _952.z;
    vec3 _967 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _967.x;
    oC0.y = _967.y;
    oC0.z = _967.z;
    oC0.w = 1.0;
    bool _978 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _986;
    if (_978)
    {
        _986 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _986 = _978;
    }
    if (_986)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
