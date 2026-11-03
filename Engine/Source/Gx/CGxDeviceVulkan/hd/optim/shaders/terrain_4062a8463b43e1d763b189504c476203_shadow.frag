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
    r3.x = _84.x;
    r3.y = _84.y;
    vec3 _96 = v0.xyz + v0.xyz;
    r4.x = _96.x;
    r4.y = _96.y;
    r4.z = _96.z;
    vec3 _108 = r0.xyz * r4.xyz;
    r5.x = _108.x;
    r5.y = _108.y;
    r5.z = _108.z;
    vec4 _117 = r0;
    vec3 _126 = mix(r5.xyz, _117.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = _126.x;
    r0.y = _126.y;
    r0.z = _126.z;
    vec3 _137 = r1.xyz * r4.xyz;
    r3.x = _137.x;
    r3.z = _137.y;
    r3.w = _137.z;
    vec4 _147 = r1;
    vec3 _153 = mix(r3.xzw, _147.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = _153.x;
    r1.y = _153.y;
    r1.z = _153.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _230 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _230.x;
        r1.z = _230.y;
        vec2 _241 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _241.x;
        r2.y = _241.y;
        vec2 _249 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _249.x;
        r2.w = _249.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _272 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _272.x;
        r2.y = _272.y;
        vec2 _279 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _279.x;
        r2.w = _279.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _302 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _302.x;
        r2.y = _302.y;
        vec2 _309 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _309.x;
        r2.w = _309.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _332 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _332.x;
        r2.y = _332.y;
        vec2 _339 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _339.x;
        r2.w = _339.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _362 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _362.x;
        r2.y = _362.y;
        vec2 _369 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _369.x;
        r2.w = _369.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _392 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _392.x;
        r2.y = _392.y;
        vec2 _399 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _399.x;
        r2.w = _399.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _422 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _422.x;
        r2.y = _422.y;
        vec2 _429 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _429.x;
        r2.w = _429.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _452 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _452.x;
        r2.y = _452.y;
        vec2 _459 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _459.x;
        r2.w = _459.y;
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
            vec2 _509 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _509.x;
            r1.z = _509.y;
            vec2 _519 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _519.x;
            r3.y = _519.y;
            vec2 _526 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _526.x;
            r3.w = _526.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _548 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _548.x;
            r2.y = _548.y;
            vec2 _555 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _555.x;
            r2.w = _555.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _577 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _577.x;
            r2.y = _577.y;
            vec2 _584 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _584.x;
            r2.w = _584.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _606 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _606.x;
            r2.y = _606.y;
            vec2 _613 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _613.x;
            r2.w = _613.y;
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
                vec2 _663 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _663.x;
                r1.z = _663.y;
                vec2 _673 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _673.x;
                r3.y = _673.y;
                vec2 _680 = vec2(1.0, 0.0) * v6.zx;
                r3.z = _680.x;
                r3.w = _680.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _702 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _702.x;
                r2.y = _702.y;
                vec2 _709 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _709.x;
                r2.w = _709.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _731 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _731.x;
                r2.y = _731.y;
                vec2 _738 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _738.x;
                r2.w = _738.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _760 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _760.x;
                r2.y = _760.y;
                vec2 _767 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _767.x;
                r2.w = _767.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 _799 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _799.x;
                r2.w = _799.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _824 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _824.x;
                r4.y = _824.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _852 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _852.x;
                r4.y = _852.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _874 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _874.x;
                r4.y = _874.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _896 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _896.x;
                r4.y = _896.y;
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
    vec3 _953 = r0.www * v1.xyz;
    r2.x = _953.x;
    r2.y = _953.y;
    r2.z = _953.z;
    vec4 _960 = r1;
    vec3 _964 = _960.xxx * r2.xyz;
    r1.x = _964.x;
    r1.z = _964.y;
    r1.w = _964.z;
    vec4 _971 = r0;
    vec3 _978 = (_971.xyz * r1.yyy) + r1.xzw;
    r0.x = _978.x;
    r0.y = _978.y;
    r0.z = _978.z;
    vec4 _985 = r0;
    vec3 _992 = _985.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _992.x;
    r0.y = _992.y;
    r0.z = _992.z;
    vec3 _1007 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1007.x;
    oC0.y = _1007.y;
    oC0.z = _1007.z;
    oC0.w = 1.0;
    bool _1019 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1027;
    if (_1019)
    {
        _1027 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1027 = _1019;
    }
    if (_1027)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
