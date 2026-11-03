#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _134 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _134.x;
        r1.z = _134.y;
        vec2 _156 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _156.x;
        r2.y = _156.y;
        vec2 _164 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _164.x;
        r2.w = _164.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _187 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _187.x;
        r2.y = _187.y;
        vec2 _194 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _194.x;
        r2.w = _194.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _217 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _217.x;
        r2.y = _217.y;
        vec2 _224 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _224.x;
        r2.w = _224.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _247 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _247.x;
        r2.y = _247.y;
        vec2 _254 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _254.x;
        r2.w = _254.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _277 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _277.x;
        r2.y = _277.y;
        vec2 _284 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _284.x;
        r2.w = _284.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _307 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _307.x;
        r2.y = _307.y;
        vec2 _314 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _314.x;
        r2.w = _314.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _337 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _337.x;
        r2.y = _337.y;
        vec2 _344 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _344.x;
        r2.w = _344.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _367 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _367.x;
        r2.y = _367.y;
        vec2 _374 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _374.x;
        r2.w = _374.y;
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
            vec2 _424 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _424.x;
            r1.z = _424.y;
            vec2 _434 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _434.x;
            r3.y = _434.y;
            vec2 _441 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _441.x;
            r3.w = _441.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _463 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _463.x;
            r2.y = _463.y;
            vec2 _470 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _470.x;
            r2.w = _470.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _492 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _492.x;
            r2.y = _492.y;
            vec2 _499 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _499.x;
            r2.w = _499.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _521 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _521.x;
            r2.y = _521.y;
            vec2 _528 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _528.x;
            r2.w = _528.y;
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
                vec2 _578 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _578.x;
                r1.z = _578.y;
                vec2 _588 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _588.x;
                r3.y = _588.y;
                vec2 _595 = vec2(1.0, 0.0) * v6.zx;
                r3.z = _595.x;
                r3.w = _595.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _617 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _617.x;
                r2.y = _617.y;
                vec2 _624 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _624.x;
                r2.w = _624.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _646 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _646.x;
                r2.y = _646.y;
                vec2 _653 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _653.x;
                r2.w = _653.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _675 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _675.x;
                r2.y = _675.y;
                vec2 _682 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _682.x;
                r2.w = _682.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 _714 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _714.x;
                r2.w = _714.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _739 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _739.x;
                r4.y = _739.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _767 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _767.x;
                r4.y = _767.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _789 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _789.x;
                r4.y = _789.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _811 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _811.x;
                r4.y = _811.y;
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
    vec4 _864 = r0;
    vec3 _868 = _864.xyz * r1.yyy;
    r0.x = _868.x;
    r0.y = _868.y;
    r0.z = _868.z;
    vec4 _875 = r0;
    vec3 _879 = _875.xyz * v0.xyz;
    r0.x = _879.x;
    r0.y = _879.y;
    r0.z = _879.z;
    vec4 _886 = r0;
    vec4 _888 = r0;
    vec3 _890 = _886.xyz + _888.xyz;
    r0.x = _890.x;
    r0.y = _890.y;
    r0.z = _890.z;
    vec3 _901 = r0.www * v1.xyz;
    r1.y = _901.x;
    r1.z = _901.y;
    r1.w = _901.z;
    vec4 _913 = r0;
    vec3 _915 = (r1.yzw * r1.xxx) + _913.xyz;
    r0.x = _915.x;
    r0.y = _915.y;
    r0.z = _915.z;
    vec4 _922 = r0;
    vec3 _929 = _922.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _929.x;
    r0.y = _929.y;
    r0.z = _929.z;
    vec3 _944 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _944.x;
    oC0.y = _944.y;
    oC0.z = _944.z;
    oC0.w = 1.0;
    bool _957 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _965;
    if (_957)
    {
        _965 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _965 = _957;
    }
    if (_965)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
