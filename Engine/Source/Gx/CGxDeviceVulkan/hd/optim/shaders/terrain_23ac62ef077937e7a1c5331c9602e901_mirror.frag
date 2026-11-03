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
        vec2 _145 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _145.x;
        r1.z = _145.y;
        vec2 _167 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _167.x;
        r2.y = _167.y;
        vec2 _175 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _175.x;
        r2.w = _175.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _198 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _198.x;
        r2.y = _198.y;
        vec2 _205 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _205.x;
        r2.w = _205.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _228 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _228.x;
        r2.y = _228.y;
        vec2 _235 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _235.x;
        r2.w = _235.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _258 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _258.x;
        r2.y = _258.y;
        vec2 _265 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _265.x;
        r2.w = _265.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _288 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _288.x;
        r2.y = _288.y;
        vec2 _295 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _295.x;
        r2.w = _295.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _318 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _318.x;
        r2.y = _318.y;
        vec2 _325 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _325.x;
        r2.w = _325.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _348 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _348.x;
        r2.y = _348.y;
        vec2 _355 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _355.x;
        r2.w = _355.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _378 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _378.x;
        r2.y = _378.y;
        vec2 _385 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _385.x;
        r2.w = _385.y;
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
            vec2 _435 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _435.x;
            r1.z = _435.y;
            vec2 _445 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _445.x;
            r3.y = _445.y;
            vec2 _452 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _452.x;
            r3.w = _452.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _474 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _474.x;
            r2.y = _474.y;
            vec2 _481 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _481.x;
            r2.w = _481.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _503 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _503.x;
            r2.y = _503.y;
            vec2 _510 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _510.x;
            r2.w = _510.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _532 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _532.x;
            r2.y = _532.y;
            vec2 _539 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _539.x;
            r2.w = _539.y;
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
                vec2 _589 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _589.x;
                r1.z = _589.y;
                vec2 _599 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _599.x;
                r3.y = _599.y;
                vec2 _606 = vec2(1.0, 0.0) * v6.zx;
                r3.z = _606.x;
                r3.w = _606.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _628 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _628.x;
                r2.y = _628.y;
                vec2 _635 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _635.x;
                r2.w = _635.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _657 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _657.x;
                r2.y = _657.y;
                vec2 _664 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _664.x;
                r2.w = _664.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _686 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _686.x;
                r2.y = _686.y;
                vec2 _693 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _693.x;
                r2.w = _693.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 _725 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _725.x;
                r2.w = _725.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _750 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _750.x;
                r4.y = _750.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _778 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _778.x;
                r4.y = _778.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _800 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _800.x;
                r4.y = _800.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _822 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _822.x;
                r4.y = _822.y;
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
    vec4 _875 = r0;
    vec3 _879 = _875.xyz * r1.yyy;
    r0.x = _879.x;
    r0.y = _879.y;
    r0.z = _879.z;
    vec4 _886 = r0;
    vec3 _890 = _886.xyz * v0.xyz;
    r0.x = _890.x;
    r0.y = _890.y;
    r0.z = _890.z;
    vec4 _897 = r0;
    vec4 _899 = r0;
    vec3 _901 = _897.xyz + _899.xyz;
    r0.x = _901.x;
    r0.y = _901.y;
    r0.z = _901.z;
    vec3 _912 = r0.www * v1.xyz;
    r1.y = _912.x;
    r1.z = _912.y;
    r1.w = _912.z;
    vec4 _924 = r0;
    vec3 _926 = (r1.yzw * r1.xxx) + _924.xyz;
    r0.x = _926.x;
    r0.y = _926.y;
    r0.z = _926.z;
    vec4 _933 = r0;
    vec3 _940 = _933.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _940.x;
    r0.y = _940.y;
    r0.z = _940.z;
    vec3 _955 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _955.x;
    oC0.y = _955.y;
    oC0.z = _955.z;
    oC0.w = 1.0;
    bool _968 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _976;
    if (_968)
    {
        _976 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _976 = _968;
    }
    if (_976)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
