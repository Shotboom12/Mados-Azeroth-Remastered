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
    vec2 _80 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = _80.x;
    r2.z = _80.y;
    vec3 _93 = v0.xyz + v0.xyz;
    r3.x = _93.x;
    r3.y = _93.y;
    r3.z = _93.z;
    vec3 _105 = r0.xyz * r3.xyz;
    r4.x = _105.x;
    r4.y = _105.y;
    r4.z = _105.z;
    vec4 _114 = r0;
    vec3 _123 = mix(r4.xyz, _114.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = _123.x;
    r0.y = _123.y;
    r0.z = _123.z;
    vec4 _132 = r3;
    vec3 _134 = r1.xyz * _132.xyz;
    r3.x = _134.x;
    r3.y = _134.y;
    r3.z = _134.z;
    vec4 _143 = r1;
    vec3 _149 = mix(r3.xyz, _143.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = _149.x;
    r1.y = _149.y;
    r1.z = _149.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r0 = OptTex5Lod( r0.xy, r0.w);
        vec2 _211 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _211.x;
        r0.z = _211.y;
        vec2 _222 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = _222.x;
        r1.y = _222.y;
        vec2 _230 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _230.x;
        r1.w = _230.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _253 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r1.x = _253.x;
        r1.y = _253.y;
        vec2 _260 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _260.x;
        r1.w = _260.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _283 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _283.x;
        r1.y = _283.y;
        vec2 _290 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _290.x;
        r1.w = _290.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _313 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r1.x = _313.x;
        r1.y = _313.y;
        vec2 _320 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _320.x;
        r1.w = _320.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _343 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _343.x;
        r1.y = _343.y;
        vec2 _350 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _350.x;
        r1.w = _350.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _373 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r1.x = _373.x;
        r1.y = _373.y;
        vec2 _380 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _380.x;
        r1.w = _380.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _403 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _403.x;
        r1.y = _403.y;
        vec2 _410 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _410.x;
        r1.w = _410.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _433 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = _433.x;
        r1.y = _433.y;
        vec2 _440 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _440.x;
        r1.w = _440.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex6Lod( r1.xy, r1.w);
            vec2 _490 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = _490.x;
            r0.z = _490.y;
            vec2 _500 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _500.x;
            r2.y = _500.y;
            vec2 _507 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _507.x;
            r2.w = _507.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w = r1.x + r2.x;
            vec2 _529 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r1.x = _529.x;
            r1.y = _529.y;
            vec2 _536 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _536.x;
            r1.w = _536.y;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r0.w += r1.x;
            vec2 _558 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r1.x = _558.x;
            r1.y = _558.y;
            vec2 _565 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _565.x;
            r1.w = _565.y;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r0.w += r1.x;
            vec2 _587 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r1.x = _587.x;
            r1.y = _587.y;
            vec2 _594 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _594.x;
            r1.w = _594.y;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r0.y = r0.w + r1.x;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r1 = OptTex7Lod( r1.xy, r1.w);
                vec2 _644 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = _644.x;
                r0.z = _644.y;
                vec2 _654 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = _654.x;
                r2.y = _654.y;
                vec2 _661 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _661.x;
                r2.w = _661.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w = r1.x + r2.x;
                vec2 _683 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r1.x = _683.x;
                r1.y = _683.y;
                vec2 _690 = vec2(1.0, 0.0) * v6.zx;
                r1.z = _690.x;
                r1.w = _690.y;
                r1 = OptTex7Lod( r1.xy, r1.w);
                r0.w += r1.x;
                vec2 _712 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r1.x = _712.x;
                r1.y = _712.y;
                vec2 _719 = vec2(1.0, 0.0) * v6.zx;
                r1.z = _719.x;
                r1.w = _719.y;
                r1 = OptTex7Lod( r1.xy, r1.w);
                r0.w += r1.x;
                vec2 _741 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r1.x = _741.x;
                r1.y = _741.y;
                vec2 _748 = vec2(1.0, 0.0) * v6.zx;
                r1.z = _748.x;
                r1.w = _748.y;
                r1 = OptTex7Lod( r1.xy, r1.w);
                r0.y = r0.w + r1.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v4.w;
                r0.z = v5.w;
                vec2 _780 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r1.x = _780.x;
                r1.w = _780.y;
                r1.y = (v5.w * 0.5) + 0.5;
                r1.z = v6.w;
                r2 = OptTex8Lod( r1.xy, r1.w);
                vec2 _805 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _805.x;
                r4.y = _805.y;
                r4.z = r1.zw.x;
                r4.w = r1.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r0.w = r2.x + r5.x;
                vec2 _833 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _833.x;
                r4.y = _833.y;
                r2 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r2.x;
                vec2 _855 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _855.x;
                r4.y = _855.y;
                r2 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r2.x;
                vec2 _877 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _877.x;
                r4.y = _877.y;
                r1 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r1.x;
                r1.x = max(abs(r0.y), abs(r0.z));
                r0.y = clamp((r1.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.z = (r0.w * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.y * r0.z) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _934 = r3.www * v1.xyz;
    r1.x = _934.x;
    r1.y = _934.y;
    r1.z = _934.z;
    vec4 _941 = r0;
    vec3 _945 = _941.xxx * r1.xyz;
    r0.x = _945.x;
    r0.z = _945.y;
    r0.w = _945.z;
    vec4 _954 = r0;
    vec4 _957 = r0;
    vec3 _959 = (r3.xyz * _954.yyy) + _957.xzw;
    r0.x = _959.x;
    r0.y = _959.y;
    r0.z = _959.z;
    vec4 _966 = r0;
    vec3 _973 = _966.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _973.x;
    r0.y = _973.y;
    r0.z = _973.z;
    vec3 _988 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _988.x;
    oC0.y = _988.y;
    oC0.z = _988.z;
    oC0.w = 1.0;
    bool _1000 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1008;
    if (_1000)
    {
        _1008 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1008 = _1000;
    }
    if (_1008)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
