#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

vec4 oC0;
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
    r0 = OptTex0( v2.xy);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r3 = OptTex3( v4.xy);
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _138 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _138.x;
        r1.z = _138.y;
        vec2 _160 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _160.x;
        r2.y = _160.y;
        vec2 _168 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _168.x;
        r2.w = _168.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _191 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _191.x;
        r2.y = _191.y;
        vec2 _198 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _198.x;
        r2.w = _198.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _221 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _221.x;
        r2.y = _221.y;
        vec2 _228 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _228.x;
        r2.w = _228.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _251 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _251.x;
        r2.y = _251.y;
        vec2 _258 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _258.x;
        r2.w = _258.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _281 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _281.x;
        r2.y = _281.y;
        vec2 _288 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _288.x;
        r2.w = _288.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _311 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _311.x;
        r2.y = _311.y;
        vec2 _318 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _318.x;
        r2.w = _318.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _341 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _341.x;
        r2.y = _341.y;
        vec2 _348 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _348.x;
        r2.w = _348.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _371 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _371.x;
        r2.y = _371.y;
        vec2 _378 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _378.x;
        r2.w = _378.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex6Lod( r2.xy, r2.w);
            vec2 _428 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _428.x;
            r1.z = _428.y;
            vec2 _438 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _438.x;
            r3.y = _438.y;
            vec2 _445 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _445.x;
            r3.w = _445.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _467 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _467.x;
            r2.y = _467.y;
            vec2 _474 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _474.x;
            r2.w = _474.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _496 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _496.x;
            r2.y = _496.y;
            vec2 _503 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _503.x;
            r2.w = _503.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _525 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _525.x;
            r2.y = _525.y;
            vec2 _532 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _532.x;
            r2.w = _532.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r2 = OptTex7Lod( r2.xy, r2.w);
                vec2 _582 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _582.x;
                r1.z = _582.y;
                vec2 _592 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _592.x;
                r3.y = _592.y;
                vec2 _599 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _599.x;
                r3.w = _599.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _621 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _621.x;
                r2.y = _621.y;
                vec2 _628 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _628.x;
                r2.w = _628.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _650 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _650.x;
                r2.y = _650.y;
                vec2 _657 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _657.x;
                r2.w = _657.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _679 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _679.x;
                r2.y = _679.y;
                vec2 _686 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _686.x;
                r2.w = _686.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 _718 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _718.x;
                r2.w = _718.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _743 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _743.x;
                r4.y = _743.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _771 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _771.x;
                r4.y = _771.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _793 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _793.x;
                r4.y = _793.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _815 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _815.x;
                r4.y = _815.y;
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
    vec4 _869 = r0;
    vec3 _873 = _869.xyz * r1.yyy;
    r0.x = _873.x;
    r0.y = _873.y;
    r0.z = _873.z;
    vec4 _880 = r0;
    vec3 _884 = _880.xyz * v0.xyz;
    r0.x = _884.x;
    r0.y = _884.y;
    r0.z = _884.z;
    vec4 _891 = r0;
    vec4 _893 = r0;
    vec3 _895 = _891.xyz + _893.xyz;
    r0.x = _895.x;
    r0.y = _895.y;
    r0.z = _895.z;
    vec3 _906 = r0.www * v1.xyz;
    r1.y = _906.x;
    r1.z = _906.y;
    r1.w = _906.z;
    vec4 _918 = r0;
    vec3 _920 = (r1.yzw * r1.xxx) + _918.xyz;
    r0.x = _920.x;
    r0.y = _920.y;
    r0.z = _920.z;
    vec4 _927 = r0;
    vec3 _934 = _927.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _934.x;
    r0.y = _934.y;
    r0.z = _934.z;
    vec3 _949 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _949.x;
    oC0.y = _949.y;
    oC0.z = _949.z;
    oC0.w = 1.0;
    bool _962 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _970;
    if (_962)
    {
        _970 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _970 = _962;
    }
    if (_970)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
