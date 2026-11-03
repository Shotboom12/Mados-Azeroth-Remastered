#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
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
    vec4 r6 = vec4(0.0);
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
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r3 = OptTex3( v4.xy);
    vec3 _93 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = _93.x;
    r4.y = _93.y;
    r4.z = _93.z;
    vec3 _108 = v0.xyz + v0.xyz;
    r5.x = _108.x;
    r5.y = _108.y;
    r5.z = _108.z;
    vec3 _119 = r0.xyz * r5.xyz;
    r6.x = _119.x;
    r6.y = _119.y;
    r6.z = _119.z;
    vec4 _128 = r0;
    vec3 _137 = mix(r6.xyz, _128.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = _137.x;
    r0.y = _137.y;
    r0.z = _137.z;
    vec3 _148 = r1.xyz * r5.xyz;
    r6.x = _148.x;
    r6.y = _148.y;
    r6.z = _148.z;
    vec4 _157 = r1;
    vec3 _163 = mix(r6.xyz, _157.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = _163.x;
    r1.y = _163.y;
    r1.z = _163.z;
    vec3 _174 = r2.xyz * r5.xyz;
    r4.x = _174.x;
    r4.y = _174.y;
    r4.w = _174.z;
    vec4 _184 = r2;
    vec3 _190 = mix(r4.xyw, _184.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = _190.x;
    r2.y = _190.y;
    r2.z = _190.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _256 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _256.x;
        r1.z = _256.y;
        vec2 _267 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _267.x;
        r3.y = _267.y;
        vec2 _275 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _275.x;
        r3.w = _275.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _298 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _298.x;
        r2.y = _298.y;
        vec2 _305 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _305.x;
        r2.w = _305.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _328 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _328.x;
        r2.y = _328.y;
        vec2 _335 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _335.x;
        r2.w = _335.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _358 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _358.x;
        r2.y = _358.y;
        vec2 _365 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _365.x;
        r2.w = _365.y;
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
        vec2 _425 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _425.x;
        r1.z = _425.y;
        vec2 _435 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _435.x;
        r3.y = _435.y;
        vec2 _442 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _442.x;
        r3.w = _442.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _464 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _464.x;
        r2.y = _464.y;
        vec2 _471 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _471.x;
        r2.w = _471.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _493 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _493.x;
        r2.y = _493.y;
        vec2 _500 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _500.x;
        r2.w = _500.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _522 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _522.x;
        r2.y = _522.y;
        vec2 _529 = vec2(1.0, 0.0) * v6.zx;
        r2.z = _529.x;
        r2.w = _529.y;
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
            vec2 _578 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _578.x;
            r1.w = _578.y;
            vec2 _588 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _588.x;
            r3.y = _588.y;
            vec2 _595 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _595.x;
            r3.w = _595.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _617 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _617.x;
            r3.y = _617.y;
            vec2 _624 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _624.x;
            r3.w = _624.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _646 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _646.x;
            r3.y = _646.y;
            vec2 _653 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _653.x;
            r3.w = _653.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _675 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _675.x;
            r3.y = _675.y;
            vec2 _682 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _682.x;
            r3.w = _682.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 _714 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _714.x;
            r2.w = _714.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _739 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _739.x;
            r4.y = _739.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _767 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _767.x;
            r4.y = _767.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _789 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _789.x;
            r4.y = _789.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _811 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _811.x;
            r4.y = _811.y;
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
    vec3 _873 = r0.www * v1.xyz;
    r1.y = _873.x;
    r1.z = _873.y;
    r1.w = _873.z;
    vec4 _882 = r1;
    vec3 _884 = r2.xxx * _882.yzw;
    r1.y = _884.x;
    r1.z = _884.y;
    r1.w = _884.z;
    vec4 _891 = r0;
    vec3 _898 = (_891.xyz * r1.xxx) + r1.yzw;
    r0.x = _898.x;
    r0.y = _898.y;
    r0.z = _898.z;
    vec4 _905 = r0;
    vec3 _912 = _905.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _912.x;
    r0.y = _912.y;
    r0.z = _912.z;
    vec3 _927 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _927.x;
    oC0.y = _927.y;
    oC0.z = _927.z;
    oC0.w = 1.0;
    bool _939 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _947;
    if (_939)
    {
        _947 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _947 = _939;
    }
    if (_947)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
