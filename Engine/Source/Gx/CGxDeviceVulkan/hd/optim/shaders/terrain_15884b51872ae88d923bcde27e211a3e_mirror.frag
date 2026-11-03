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
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 *= r3.xxxx;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _157 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _157.x;
        r1.z = _157.y;
        vec2 _178 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _178.x;
        r2.y = _178.y;
        vec2 _186 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _186.x;
        r2.w = _186.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _209 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _209.x;
        r2.y = _209.y;
        vec2 _216 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _216.x;
        r2.w = _216.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _239 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _239.x;
        r2.y = _239.y;
        vec2 _246 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _246.x;
        r2.w = _246.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _269 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _269.x;
        r2.y = _269.y;
        vec2 _276 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _276.x;
        r2.w = _276.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _299 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _299.x;
        r2.y = _299.y;
        vec2 _306 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _306.x;
        r2.w = _306.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _329 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _329.x;
        r2.y = _329.y;
        vec2 _336 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _336.x;
        r2.w = _336.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _359 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _359.x;
        r2.y = _359.y;
        vec2 _366 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _366.x;
        r2.w = _366.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _389 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _389.x;
        r2.y = _389.y;
        vec2 _396 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _396.x;
        r2.w = _396.y;
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
            vec2 _446 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _446.x;
            r1.z = _446.y;
            vec2 _456 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _456.x;
            r3.y = _456.y;
            vec2 _463 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _463.x;
            r3.w = _463.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _485 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _485.x;
            r2.y = _485.y;
            vec2 _492 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _492.x;
            r2.w = _492.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _514 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _514.x;
            r2.y = _514.y;
            vec2 _521 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _521.x;
            r2.w = _521.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _543 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _543.x;
            r2.y = _543.y;
            vec2 _550 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _550.x;
            r2.w = _550.y;
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
                vec2 _600 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _600.x;
                r1.z = _600.y;
                vec2 _610 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _610.x;
                r3.y = _610.y;
                vec2 _617 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _617.x;
                r3.w = _617.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _639 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _639.x;
                r2.y = _639.y;
                vec2 _646 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _646.x;
                r2.w = _646.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _668 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _668.x;
                r2.y = _668.y;
                vec2 _675 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _675.x;
                r2.w = _675.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _697 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _697.x;
                r2.y = _697.y;
                vec2 _704 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _704.x;
                r2.w = _704.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 _736 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _736.x;
                r2.w = _736.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _761 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _761.x;
                r4.y = _761.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _789 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _789.x;
                r4.y = _789.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _811 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _811.x;
                r4.y = _811.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _833 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _833.x;
                r4.y = _833.y;
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
    vec4 _886 = r0;
    vec3 _890 = _886.xyz * r1.yyy;
    r0.x = _890.x;
    r0.y = _890.y;
    r0.z = _890.z;
    vec4 _897 = r0;
    vec3 _901 = _897.xyz * v0.xyz;
    r0.x = _901.x;
    r0.y = _901.y;
    r0.z = _901.z;
    vec4 _908 = r0;
    vec4 _910 = r0;
    vec3 _912 = _908.xyz + _910.xyz;
    r0.x = _912.x;
    r0.y = _912.y;
    r0.z = _912.z;
    vec3 _923 = r0.www * v1.xyz;
    r1.y = _923.x;
    r1.z = _923.y;
    r1.w = _923.z;
    vec4 _935 = r0;
    vec3 _937 = (r1.yzw * r1.xxx) + _935.xyz;
    r0.x = _937.x;
    r0.y = _937.y;
    r0.z = _937.z;
    vec4 _944 = r0;
    vec3 _951 = _944.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _951.x;
    r0.y = _951.y;
    r0.z = _951.z;
    vec3 _966 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _966.x;
    oC0.y = _966.y;
    oC0.z = _966.z;
    oC0.w = 1.0;
    bool _979 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _987;
    if (_979)
    {
        _987 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _987 = _979;
    }
    if (_987)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
