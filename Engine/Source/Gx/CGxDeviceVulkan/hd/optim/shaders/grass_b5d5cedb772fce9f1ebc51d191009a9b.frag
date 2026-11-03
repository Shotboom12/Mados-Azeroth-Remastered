#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
layout(location = 6) in vec4 texcoord4;
layout(location = 7) in vec4 texcoord5;
layout(location = 10) in float fog0;
layout(location = 1) out vec4 hdAlbedo;
layout(location = 2) out vec4 hdNormal;
layout(location = 3) out vec4 hdLight;
layout(location = 4) out vec4 hdLow;
layout(location = 5) out vec4 hdHigh;
int hdOverride;
bool hdKilled;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _55 = hdOverride >= 0;
    bool _77;
    if (_55)
    {
        _77 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _77 = _55;
    }
    vec4 _78;
    if (_77)
    {
        _78 = vec4(float(hdOverride));
    }
    else
    {
        _78 = value;
    }
    return _78;
}

vec4 hdLod4(vec2 uv, float lod)
{
    vec4 value = OptTex4Lod( uv, lod);
    bool _96 = hdOverride >= 0;
    bool _105;
    if (_96)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _105 = _96;
    }
    vec4 _106;
    if (_105)
    {
        _106 = vec4(float(hdOverride));
    }
    else
    {
        _106 = value;
    }
    return _106;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _124 = hdOverride >= 0;
    bool _134;
    if (_124)
    {
        _134 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _134 = _124;
    }
    vec4 _135;
    if (_134)
    {
        _135 = vec4(float(hdOverride));
    }
    else
    {
        _135 = value;
    }
    return _135;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _153 = hdOverride >= 0;
    bool _162;
    if (_153)
    {
        _162 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _162 = _153;
    }
    vec4 _163;
    if (_162)
    {
        _163 = vec4(float(hdOverride));
    }
    else
    {
        _163 = value;
    }
    return _163;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _181 = hdOverride >= 0;
    bool _191;
    if (_181)
    {
        _191 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _191 = _181;
    }
    vec4 _192;
    if (_191)
    {
        _192 = vec4(float(hdOverride));
    }
    else
    {
        _192 = value;
    }
    return _192;
}

void HDActual()
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
    vec4 v5 = texcoord3;
    vec4 v6 = texcoord4;
    vec4 v7 = texcoord5;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    oC0.w = r0.w * v1.x;
    r0.w = max(abs(v5.x), abs(v5.y));
    r0.w = clamp((r0.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = ((-r0.w) >= 0.0) ? 0.0 : 1.0;
    if (r0.w != (-r0.w))
    {
        if (10.0 < v3.z)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_1 = r1.xy;
            float param_2 = r1.w;
            r1 = hdLod4(param_1, param_2);
            vec2 _RESERVED_IDENTIFIER_FIXUP_127 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _RESERVED_IDENTIFIER_FIXUP_127.x;
            r1.z = _RESERVED_IDENTIFIER_FIXUP_127.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_148 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_148.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_148.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_156 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_156.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_156.y;
            vec2 param_3 = r2.xy;
            float param_4 = r2.w;
            r2 = hdLod4(param_3, param_4);
            r0.w = r1.x + r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_179 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_179.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_179.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_186 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_186.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_186.y;
            vec2 param_5 = r2.xy;
            float param_6 = r2.w;
            r2 = hdLod4(param_5, param_6);
            r0.w += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_209 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_209.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_209.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_216 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_216.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_216.y;
            vec2 param_7 = r2.xy;
            float param_8 = r2.w;
            r2 = hdLod4(param_7, param_8);
            r0.w += r2.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_233 = r1;
            vec2 _RESERVED_IDENTIFIER_FIXUP_239 = _RESERVED_IDENTIFIER_FIXUP_233.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _RESERVED_IDENTIFIER_FIXUP_239.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_239.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_246 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _RESERVED_IDENTIFIER_FIXUP_246.x;
            r1.w = _RESERVED_IDENTIFIER_FIXUP_246.y;
            vec2 param_9 = r1.xy;
            float param_10 = r1.w;
            r1 = hdLod4(param_9, param_10);
            r0.w += r1.x;
            r0.w *= 0.20000000298023223876953125;
        }
        else
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r1.xy;
            float param_12 = r1.w;
            r1 = hdLod4(param_11, param_12);
            vec2 _RESERVED_IDENTIFIER_FIXUP_282 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _RESERVED_IDENTIFIER_FIXUP_282.x;
            r1.z = _RESERVED_IDENTIFIER_FIXUP_282.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_292 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_292.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_292.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_299 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_299.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_299.y;
            vec2 param_13 = r2.xy;
            float param_14 = r2.w;
            r2 = hdLod4(param_13, param_14);
            r1.x += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_321 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_321.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_321.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_328 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_328.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_328.y;
            vec2 param_15 = r2.xy;
            float param_16 = r2.w;
            r2 = hdLod4(param_15, param_16);
            r1.x += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_350 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_350.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_350.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_357 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_357.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_357.y;
            vec2 param_17 = r2.xy;
            float param_18 = r2.w;
            r2 = hdLod4(param_17, param_18);
            r1.x += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_379 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_379.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_379.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_386 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_386.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_386.y;
            vec2 param_19 = r2.xy;
            float param_20 = r2.w;
            r2 = hdLod4(param_19, param_20);
            r1.x += r2.x;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
    }
    else
    {
        r0.w = 1.0;
    }
    r1.x = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r1.x = clamp(r1.x + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r2.x = mix(r0.w, 1.0, r1.x);
    r0.w = max(abs(v6.x), abs(v6.y));
    if (r0.w < 1.0)
    {
        r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_21 = r1.xy;
        float param_22 = r1.w;
        r1 = hdLod5(param_21, param_22);
        vec2 _RESERVED_IDENTIFIER_FIXUP_459 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _RESERVED_IDENTIFIER_FIXUP_459.x;
        r1.z = _RESERVED_IDENTIFIER_FIXUP_459.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_469 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _RESERVED_IDENTIFIER_FIXUP_469.x;
        r3.y = _RESERVED_IDENTIFIER_FIXUP_469.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_476 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _RESERVED_IDENTIFIER_FIXUP_476.x;
        r3.w = _RESERVED_IDENTIFIER_FIXUP_476.y;
        vec2 param_23 = r3.xy;
        float param_24 = r3.w;
        r3 = hdLod5(param_23, param_24);
        r0.w = r1.x + r3.x;
        vec2 _RESERVED_IDENTIFIER_FIXUP_498 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = _RESERVED_IDENTIFIER_FIXUP_498.x;
        r3.y = _RESERVED_IDENTIFIER_FIXUP_498.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_505 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _RESERVED_IDENTIFIER_FIXUP_505.x;
        r3.w = _RESERVED_IDENTIFIER_FIXUP_505.y;
        vec2 param_25 = r3.xy;
        float param_26 = r3.w;
        r3 = hdLod5(param_25, param_26);
        r0.w += r3.x;
        vec2 _RESERVED_IDENTIFIER_FIXUP_527 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = _RESERVED_IDENTIFIER_FIXUP_527.x;
        r3.y = _RESERVED_IDENTIFIER_FIXUP_527.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_534 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _RESERVED_IDENTIFIER_FIXUP_534.x;
        r3.w = _RESERVED_IDENTIFIER_FIXUP_534.y;
        vec2 param_27 = r3.xy;
        float param_28 = r3.w;
        r3 = hdLod5(param_27, param_28);
        r0.w += r3.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_551 = r1;
        vec2 _RESERVED_IDENTIFIER_FIXUP_556 = _RESERVED_IDENTIFIER_FIXUP_551.yz + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = _RESERVED_IDENTIFIER_FIXUP_556.x;
        r1.y = _RESERVED_IDENTIFIER_FIXUP_556.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_563 = vec2(1.0, 0.0) * v6.zx;
        r1.z = _RESERVED_IDENTIFIER_FIXUP_563.x;
        r1.w = _RESERVED_IDENTIFIER_FIXUP_563.y;
        vec2 param_29 = r1.xy;
        float param_30 = r1.w;
        r1 = hdLod5(param_29, param_30);
        r0.w += r1.x;
        r0.w *= 0.20000000298023223876953125;
    }
    else
    {
        r1.x = max(abs(v7.x), abs(v7.y));
        if (r1.x < 1.0)
        {
            r1 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_31 = r1.xy;
            float param_32 = r1.w;
            r1 = hdLod6(param_31, param_32);
            vec2 _RESERVED_IDENTIFIER_FIXUP_612 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _RESERVED_IDENTIFIER_FIXUP_612.x;
            r1.z = _RESERVED_IDENTIFIER_FIXUP_612.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_622 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_622.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_622.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_629 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_629.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_629.y;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod6(param_33, param_34);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_651 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_651.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_651.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_658 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_658.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_658.y;
            vec2 param_35 = r3.xy;
            float param_36 = r3.w;
            r3 = hdLod6(param_35, param_36);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_680 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_680.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_680.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_687 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_687.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_687.y;
            vec2 param_37 = r3.xy;
            float param_38 = r3.w;
            r3 = hdLod6(param_37, param_38);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_709 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_709.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_709.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_716 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_716.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_716.y;
            vec2 param_39 = r3.xy;
            float param_40 = r3.w;
            r3 = hdLod6(param_39, param_40);
            r1.x += r3.x;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_742 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = _RESERVED_IDENTIFIER_FIXUP_742.x;
            r1.w = _RESERVED_IDENTIFIER_FIXUP_742.y;
            r1.y = (v6.w * 0.5) + 0.5;
            r1.z = v7.w;
            vec2 param_41 = r1.xy;
            float param_42 = r1.w;
            r3 = hdLod7(param_41, param_42);
            vec2 _RESERVED_IDENTIFIER_FIXUP_767 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_767.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_767.y;
            r4.z = r1.z;
            r4.w = r1.w;
            vec2 param_43 = r4.xy;
            float param_44 = r4.w;
            r5 = hdLod7(param_43, param_44);
            r1.z = r3.x + r5.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_795 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_795.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_795.y;
            vec2 param_45 = r4.xy;
            float param_46 = r4.w;
            r3 = hdLod7(param_45, param_46);
            r1.z += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_817 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_817.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_817.y;
            vec2 param_47 = r4.xy;
            float param_48 = r4.w;
            r3 = hdLod7(param_47, param_48);
            r1.z += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_839 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_839.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_839.y;
            vec2 param_49 = r4.xy;
            float param_50 = r4.w;
            r3 = hdLod7(param_49, param_50);
            r1.x = r1.z + r3.x;
            r1.y = v5.w;
            r1.z = v6.w;
            r2.y = max(abs(r1.y), abs(r1.z));
            r1.y = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.w = (r1.y * r1.x) + 1.0;
        }
    }
    r1.x = min(r0.w, r2.x);
    r0.w = dot(optRegs.rows[optTile*82u+uint(4)].xyz, v4.xyz);
    r0.w = (-abs(r0.w)) + 1.2000000476837158203125;
    r0.w *= r0.w;
    r0.w = clamp(r0.w * r0.w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_942 = r0.www * v0.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_942.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_942.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_942.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_949 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_959 = (_RESERVED_IDENTIFIER_FIXUP_949.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _RESERVED_IDENTIFIER_FIXUP_959.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_959.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_959.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_974 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _RESERVED_IDENTIFIER_FIXUP_974.x;
    oC0.y = _RESERVED_IDENTIFIER_FIXUP_974.y;
    oC0.z = _RESERVED_IDENTIFIER_FIXUP_974.z;
    bool _RESERVED_IDENTIFIER_FIXUP_984 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_992;
    if (_RESERVED_IDENTIFIER_FIXUP_984)
    {
        _RESERVED_IDENTIFIER_FIXUP_992 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_992 = _RESERVED_IDENTIFIER_FIXUP_984;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_992)
    {
        hdKilled = true;
        return;
    }
    hdAlbedo = vec4(0.0);
    hdNormal = vec4(0.0, 0.0, 0.0, -(0.50499999523162841796875 + (0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) / 16.0, 0.0, 1.0))));
    hdLight = vec4(0.0);
}

void HDEndpoint()
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
    vec4 v5 = texcoord3;
    vec4 v6 = texcoord4;
    vec4 v7 = texcoord5;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    oC0.w = r0.w * v1.x;
    r0.w = max(abs(v5.x), abs(v5.y));
    r0.w = clamp((r0.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = ((-r0.w) >= 0.0) ? 0.0 : 1.0;
    if (r0.w != (-r0.w))
    {
        if (10.0 < v3.z)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_1 = r1.xy;
            float param_2 = r1.w;
            r1 = hdLod4(param_1, param_2);
            vec2 hdB127 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB127.x;
            r1.z = hdB127.y;
            vec2 hdB148 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB148.x;
            r2.y = hdB148.y;
            vec2 hdB156 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB156.x;
            r2.w = hdB156.y;
            vec2 param_3 = r2.xy;
            float param_4 = r2.w;
            r2 = hdLod4(param_3, param_4);
            r0.w = r1.x + r2.x;
            vec2 hdB179 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB179.x;
            r2.y = hdB179.y;
            vec2 hdB186 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB186.x;
            r2.w = hdB186.y;
            vec2 param_5 = r2.xy;
            float param_6 = r2.w;
            r2 = hdLod4(param_5, param_6);
            r0.w += r2.x;
            vec2 hdB209 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB209.x;
            r2.y = hdB209.y;
            vec2 hdB216 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB216.x;
            r2.w = hdB216.y;
            vec2 param_7 = r2.xy;
            float param_8 = r2.w;
            r2 = hdLod4(param_7, param_8);
            r0.w += r2.x;
            vec4 hdB233 = r1;
            vec2 hdB239 = hdB233.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = hdB239.x;
            r1.y = hdB239.y;
            vec2 hdB246 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB246.x;
            r1.w = hdB246.y;
            vec2 param_9 = r1.xy;
            float param_10 = r1.w;
            r1 = hdLod4(param_9, param_10);
            r0.w += r1.x;
            r0.w *= 0.20000000298023223876953125;
        }
        else
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r1.xy;
            float param_12 = r1.w;
            r1 = hdLod4(param_11, param_12);
            vec2 hdB282 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB282.x;
            r1.z = hdB282.y;
            vec2 hdB292 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB292.x;
            r2.y = hdB292.y;
            vec2 hdB299 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB299.x;
            r2.w = hdB299.y;
            vec2 param_13 = r2.xy;
            float param_14 = r2.w;
            r2 = hdLod4(param_13, param_14);
            r1.x += r2.x;
            vec2 hdB321 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB321.x;
            r2.y = hdB321.y;
            vec2 hdB328 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB328.x;
            r2.w = hdB328.y;
            vec2 param_15 = r2.xy;
            float param_16 = r2.w;
            r2 = hdLod4(param_15, param_16);
            r1.x += r2.x;
            vec2 hdB350 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB350.x;
            r2.y = hdB350.y;
            vec2 hdB357 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB357.x;
            r2.w = hdB357.y;
            vec2 param_17 = r2.xy;
            float param_18 = r2.w;
            r2 = hdLod4(param_17, param_18);
            r1.x += r2.x;
            vec2 hdB379 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = hdB379.x;
            r2.y = hdB379.y;
            vec2 hdB386 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB386.x;
            r2.w = hdB386.y;
            vec2 param_19 = r2.xy;
            float param_20 = r2.w;
            r2 = hdLod4(param_19, param_20);
            r1.x += r2.x;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
    }
    else
    {
        r0.w = 1.0;
    }
    r1.x = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r1.x = clamp(r1.x + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r2.x = mix(r0.w, 1.0, r1.x);
    r0.w = max(abs(v6.x), abs(v6.y));
    if (r0.w < 1.0)
    {
        r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_21 = r1.xy;
        float param_22 = r1.w;
        r1 = hdLod5(param_21, param_22);
        vec2 hdB459 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB459.x;
        r1.z = hdB459.y;
        vec2 hdB469 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB469.x;
        r3.y = hdB469.y;
        vec2 hdB476 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB476.x;
        r3.w = hdB476.y;
        vec2 param_23 = r3.xy;
        float param_24 = r3.w;
        r3 = hdLod5(param_23, param_24);
        r0.w = r1.x + r3.x;
        vec2 hdB498 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB498.x;
        r3.y = hdB498.y;
        vec2 hdB505 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB505.x;
        r3.w = hdB505.y;
        vec2 param_25 = r3.xy;
        float param_26 = r3.w;
        r3 = hdLod5(param_25, param_26);
        r0.w += r3.x;
        vec2 hdB527 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB527.x;
        r3.y = hdB527.y;
        vec2 hdB534 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB534.x;
        r3.w = hdB534.y;
        vec2 param_27 = r3.xy;
        float param_28 = r3.w;
        r3 = hdLod5(param_27, param_28);
        r0.w += r3.x;
        vec4 hdB551 = r1;
        vec2 hdB556 = hdB551.yz + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = hdB556.x;
        r1.y = hdB556.y;
        vec2 hdB563 = vec2(1.0, 0.0) * v6.zx;
        r1.z = hdB563.x;
        r1.w = hdB563.y;
        vec2 param_29 = r1.xy;
        float param_30 = r1.w;
        r1 = hdLod5(param_29, param_30);
        r0.w += r1.x;
        r0.w *= 0.20000000298023223876953125;
    }
    else
    {
        r1.x = max(abs(v7.x), abs(v7.y));
        if (r1.x < 1.0)
        {
            r1 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_31 = r1.xy;
            float param_32 = r1.w;
            r1 = hdLod6(param_31, param_32);
            vec2 hdB612 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB612.x;
            r1.z = hdB612.y;
            vec2 hdB622 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB622.x;
            r3.y = hdB622.y;
            vec2 hdB629 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB629.x;
            r3.w = hdB629.y;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod6(param_33, param_34);
            r1.x += r3.x;
            vec2 hdB651 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB651.x;
            r3.y = hdB651.y;
            vec2 hdB658 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB658.x;
            r3.w = hdB658.y;
            vec2 param_35 = r3.xy;
            float param_36 = r3.w;
            r3 = hdLod6(param_35, param_36);
            r1.x += r3.x;
            vec2 hdB680 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB680.x;
            r3.y = hdB680.y;
            vec2 hdB687 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB687.x;
            r3.w = hdB687.y;
            vec2 param_37 = r3.xy;
            float param_38 = r3.w;
            r3 = hdLod6(param_37, param_38);
            r1.x += r3.x;
            vec2 hdB709 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r3.x = hdB709.x;
            r3.y = hdB709.y;
            vec2 hdB716 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB716.x;
            r3.w = hdB716.y;
            vec2 param_39 = r3.xy;
            float param_40 = r3.w;
            r3 = hdLod6(param_39, param_40);
            r1.x += r3.x;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            vec2 hdB742 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = hdB742.x;
            r1.w = hdB742.y;
            r1.y = (v6.w * 0.5) + 0.5;
            r1.z = v7.w;
            vec2 param_41 = r1.xy;
            float param_42 = r1.w;
            r3 = hdLod7(param_41, param_42);
            vec2 hdB767 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB767.x;
            r4.y = hdB767.y;
            r4.z = r1.z;
            r4.w = r1.w;
            vec2 param_43 = r4.xy;
            float param_44 = r4.w;
            r5 = hdLod7(param_43, param_44);
            r1.z = r3.x + r5.x;
            vec2 hdB795 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB795.x;
            r4.y = hdB795.y;
            vec2 param_45 = r4.xy;
            float param_46 = r4.w;
            r3 = hdLod7(param_45, param_46);
            r1.z += r3.x;
            vec2 hdB817 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB817.x;
            r4.y = hdB817.y;
            vec2 param_47 = r4.xy;
            float param_48 = r4.w;
            r3 = hdLod7(param_47, param_48);
            r1.z += r3.x;
            vec2 hdB839 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r4.x = hdB839.x;
            r4.y = hdB839.y;
            vec2 param_49 = r4.xy;
            float param_50 = r4.w;
            r3 = hdLod7(param_49, param_50);
            r1.x = r1.z + r3.x;
            r1.y = v5.w;
            r1.z = v6.w;
            r2.y = max(abs(r1.y), abs(r1.z));
            r1.y = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.w = (r1.y * r1.x) + 1.0;
        }
    }
    r1.x = min(r0.w, r2.x);
    r0.w = dot(optRegs.rows[optTile*82u+uint(4)].xyz, v4.xyz);
    r0.w = (-abs(r0.w)) + 1.2000000476837158203125;
    r0.w *= r0.w;
    r0.w = clamp(r0.w * r0.w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB942 = r0.www * v0.xyz;
    r1.x = hdB942.x;
    r1.y = hdB942.y;
    r1.z = hdB942.z;
    vec4 hdB949 = r0;
    vec3 hdB959 = (hdB949.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB959.x;
    r0.y = hdB959.y;
    r0.z = hdB959.z;
    vec3 hdB974 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB974.x;
    oC0.y = hdB974.y;
    oC0.z = hdB974.z;
    bool hdB984 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB992;
    if (hdB984)
    {
        hdB992 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB992 = hdB984;
    }
    if (hdB992)
    {
        hdKilled = true;
        return;
    }
}


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;
void OptNativeMain()
{
    hdOverride = -1;
    hdKilled = false;
    hdOverride = -1;
    hdKilled = false;
    HDActual();
    bool hdDiscardActual = hdKilled;
    vec4 hdSaved0 = oC0;
    vec4 hdSaved1 = hdAlbedo;
    vec4 hdSaved2 = hdNormal;
    vec4 hdSaved3 = hdLight;
    hdLow = vec4(0.0);
    hdHigh = vec4(0.0);
    bool _2465 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _2475;
    if (_2465)
    {
        _2475 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 241u) != 0u;
    }
    else
    {
        _2475 = _2465;
    }
    if (_2475)
    {
        hdOverride = 0;
        hdKilled = false;
        HDEndpoint();
        vec3 lo = oC0.xyz;
        hdOverride = 1;
        hdKilled = false;
        HDEndpoint();
        vec3 hi = oC0.xyz;
        float tag = 0.50499999523162841796875 + (0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) / 16.0, 0.0, 1.0));
        bool _2499 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _2514;
        if (!_2499)
        {
            _2514 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 241u) != 0u;
        }
        else
        {
            _2514 = _2499;
        }
        if (_2514)
        {
            tag = -tag;
        }
        vec3 hdStored = clamp(hdSaved0.xyz, vec3(0.0), vec3(1.0));
        hdLow = vec4(clamp(lo, vec3(0.0), vec3(1.0)) - hdStored, tag);
        hdHigh = vec4(clamp(hi, vec3(0.0), vec3(1.0)) - hdStored, tag);
    }
    oC0 = hdSaved0;
    hdAlbedo = hdSaved1;
    hdNormal = hdSaved2;
    hdLight = hdSaved3;
    if (hdDiscardActual)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
