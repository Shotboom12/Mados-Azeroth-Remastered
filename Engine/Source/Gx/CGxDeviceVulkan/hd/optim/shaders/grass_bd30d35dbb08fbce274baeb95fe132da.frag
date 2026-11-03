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
    r1.x = (-r0.w) + 0.00999999977648258209228515625;
    r1.x = (r1.x >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        if (10.0 < v3.z)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_1 = r1.xy;
            float param_2 = r1.w;
            r1 = hdLod4(param_1, param_2);
            vec2 _RESERVED_IDENTIFIER_FIXUP_132 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _RESERVED_IDENTIFIER_FIXUP_132.x;
            r1.z = _RESERVED_IDENTIFIER_FIXUP_132.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_153 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_153.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_153.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_161 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_161.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_161.y;
            vec2 param_3 = r2.xy;
            float param_4 = r2.w;
            r2 = hdLod4(param_3, param_4);
            r1.x += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_184 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_184.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_184.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_191 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_191.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_191.y;
            vec2 param_5 = r2.xy;
            float param_6 = r2.w;
            r2 = hdLod4(param_5, param_6);
            r1.x += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_214 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_214.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_214.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_221 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_221.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_221.y;
            vec2 param_7 = r2.xy;
            float param_8 = r2.w;
            r2 = hdLod4(param_7, param_8);
            r1.x += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_244 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_244.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_244.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_251 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_251.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_251.y;
            vec2 param_9 = r2.xy;
            float param_10 = r2.w;
            r2 = hdLod4(param_9, param_10);
            r1.x += r2.x;
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r1.x = (r0.w * r1.x) + 1.0;
        }
        else
        {
            r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r2.xy;
            float param_12 = r2.w;
            r2 = hdLod4(param_11, param_12);
            vec2 _RESERVED_IDENTIFIER_FIXUP_296 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _RESERVED_IDENTIFIER_FIXUP_296.x;
            r1.z = _RESERVED_IDENTIFIER_FIXUP_296.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_306 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_306.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_306.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_313 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_313.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_313.y;
            vec2 param_13 = r3.xy;
            float param_14 = r3.w;
            r3 = hdLod4(param_13, param_14);
            r1.w = r2.x + r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_336 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_336.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_336.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_343 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_343.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_343.y;
            vec2 param_15 = r2.xy;
            float param_16 = r2.w;
            r2 = hdLod4(param_15, param_16);
            r1.w += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_365 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_365.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_365.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_372 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_372.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_372.y;
            vec2 param_17 = r2.xy;
            float param_18 = r2.w;
            r2 = hdLod4(param_17, param_18);
            r1.w += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_395 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_395.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_395.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_402 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_402.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_402.y;
            vec2 param_19 = r2.xy;
            float param_20 = r2.w;
            r2 = hdLod4(param_19, param_20);
            r1.w += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_424 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_424.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_424.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_431 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_431.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_431.y;
            vec2 param_21 = r2.xy;
            float param_22 = r2.w;
            r2 = hdLod4(param_21, param_22);
            r1.w += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_454 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_454.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_454.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_461 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_461.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_461.y;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod4(param_23, param_24);
            r1.w += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_483 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_483.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_483.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_490 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_490.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_490.y;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod4(param_25, param_26);
            r1.w += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_513 = r1.yz + optRegs.rows[optTile*82u+uint(12)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_513.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_513.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_520 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_520.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_520.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod4(param_27, param_28);
            r1.y = r1.w + r2.x;
            r1.y = (r1.y * 0.111111111938953399658203125) + (-1.0);
            r1.x = (r0.w * r1.y) + 1.0;
        }
    }
    else
    {
        r1.x = 1.0;
    }
    r0.w = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r0.w = clamp(r0.w + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = max(abs(v6.x), abs(v6.y));
    if (r0.w < 1.0)
    {
        r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_29 = r1.xy;
        float param_30 = r1.w;
        r1 = hdLod5(param_29, param_30);
        vec2 _RESERVED_IDENTIFIER_FIXUP_602 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _RESERVED_IDENTIFIER_FIXUP_602.x;
        r1.z = _RESERVED_IDENTIFIER_FIXUP_602.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_612 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _RESERVED_IDENTIFIER_FIXUP_612.x;
        r3.y = _RESERVED_IDENTIFIER_FIXUP_612.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_619 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _RESERVED_IDENTIFIER_FIXUP_619.x;
        r3.w = _RESERVED_IDENTIFIER_FIXUP_619.y;
        vec2 param_31 = r3.xy;
        float param_32 = r3.w;
        r3 = hdLod5(param_31, param_32);
        r0.w = r1.x + r3.x;
        vec2 _RESERVED_IDENTIFIER_FIXUP_641 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
        r3.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_648 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _RESERVED_IDENTIFIER_FIXUP_648.x;
        r3.w = _RESERVED_IDENTIFIER_FIXUP_648.y;
        vec2 param_33 = r3.xy;
        float param_34 = r3.w;
        r3 = hdLod5(param_33, param_34);
        r0.w += r3.x;
        vec2 _RESERVED_IDENTIFIER_FIXUP_670 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = _RESERVED_IDENTIFIER_FIXUP_670.x;
        r3.y = _RESERVED_IDENTIFIER_FIXUP_670.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_677 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _RESERVED_IDENTIFIER_FIXUP_677.x;
        r3.w = _RESERVED_IDENTIFIER_FIXUP_677.y;
        vec2 param_35 = r3.xy;
        float param_36 = r3.w;
        r3 = hdLod5(param_35, param_36);
        r0.w += r3.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_694 = r1;
        vec2 _RESERVED_IDENTIFIER_FIXUP_699 = _RESERVED_IDENTIFIER_FIXUP_694.yz + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = _RESERVED_IDENTIFIER_FIXUP_699.x;
        r1.y = _RESERVED_IDENTIFIER_FIXUP_699.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_706 = vec2(1.0, 0.0) * v6.zx;
        r1.z = _RESERVED_IDENTIFIER_FIXUP_706.x;
        r1.w = _RESERVED_IDENTIFIER_FIXUP_706.y;
        vec2 param_37 = r1.xy;
        float param_38 = r1.w;
        r1 = hdLod5(param_37, param_38);
        r0.w += r1.x;
        r0.w *= 0.20000000298023223876953125;
    }
    else
    {
        r1.x = max(abs(v7.x), abs(v7.y));
        if (r1.x < 1.0)
        {
            r1 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_39 = r1.xy;
            float param_40 = r1.w;
            r1 = hdLod6(param_39, param_40);
            vec2 _RESERVED_IDENTIFIER_FIXUP_755 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _RESERVED_IDENTIFIER_FIXUP_755.x;
            r1.z = _RESERVED_IDENTIFIER_FIXUP_755.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_765 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_765.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_765.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_772 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_772.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_772.y;
            vec2 param_41 = r3.xy;
            float param_42 = r3.w;
            r3 = hdLod6(param_41, param_42);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_794 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_794.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_794.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_801 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_801.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_801.y;
            vec2 param_43 = r3.xy;
            float param_44 = r3.w;
            r3 = hdLod6(param_43, param_44);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_823 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_823.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_823.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_830 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_830.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_830.y;
            vec2 param_45 = r3.xy;
            float param_46 = r3.w;
            r3 = hdLod6(param_45, param_46);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_852 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_852.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_852.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_859 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_859.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_859.y;
            vec2 param_47 = r3.xy;
            float param_48 = r3.w;
            r3 = hdLod6(param_47, param_48);
            r1.x += r3.x;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_885 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = _RESERVED_IDENTIFIER_FIXUP_885.x;
            r1.w = _RESERVED_IDENTIFIER_FIXUP_885.y;
            r1.y = (v6.w * 0.5) + 0.5;
            r1.z = v7.w;
            vec2 param_49 = r1.xy;
            float param_50 = r1.w;
            r3 = hdLod7(param_49, param_50);
            vec2 _RESERVED_IDENTIFIER_FIXUP_910 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_910.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_910.y;
            r4.z = r1.z;
            r4.w = r1.w;
            vec2 param_51 = r4.xy;
            float param_52 = r4.w;
            r5 = hdLod7(param_51, param_52);
            r1.z = r3.x + r5.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_938 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_938.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_938.y;
            vec2 param_53 = r4.xy;
            float param_54 = r4.w;
            r3 = hdLod7(param_53, param_54);
            r1.z += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_960 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_960.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_960.y;
            vec2 param_55 = r4.xy;
            float param_56 = r4.w;
            r3 = hdLod7(param_55, param_56);
            r1.z += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_982 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_982.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_982.y;
            vec2 param_57 = r4.xy;
            float param_58 = r4.w;
            r3 = hdLod7(param_57, param_58);
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
    vec3 _RESERVED_IDENTIFIER_FIXUP_1084 = r0.www * v0.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_1084.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_1084.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_1084.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1091 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1101 = (_RESERVED_IDENTIFIER_FIXUP_1091.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _RESERVED_IDENTIFIER_FIXUP_1101.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_1101.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_1101.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1116 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _RESERVED_IDENTIFIER_FIXUP_1116.x;
    oC0.y = _RESERVED_IDENTIFIER_FIXUP_1116.y;
    oC0.z = _RESERVED_IDENTIFIER_FIXUP_1116.z;
    bool _RESERVED_IDENTIFIER_FIXUP_1126 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1134;
    if (_RESERVED_IDENTIFIER_FIXUP_1126)
    {
        _RESERVED_IDENTIFIER_FIXUP_1134 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1134 = _RESERVED_IDENTIFIER_FIXUP_1126;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1134)
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
    r1.x = (-r0.w) + 0.00999999977648258209228515625;
    r1.x = (r1.x >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        if (10.0 < v3.z)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_1 = r1.xy;
            float param_2 = r1.w;
            r1 = hdLod4(param_1, param_2);
            vec2 hdB132 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB132.x;
            r1.z = hdB132.y;
            vec2 hdB153 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB153.x;
            r2.y = hdB153.y;
            vec2 hdB161 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB161.x;
            r2.w = hdB161.y;
            vec2 param_3 = r2.xy;
            float param_4 = r2.w;
            r2 = hdLod4(param_3, param_4);
            r1.x += r2.x;
            vec2 hdB184 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB184.x;
            r2.y = hdB184.y;
            vec2 hdB191 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB191.x;
            r2.w = hdB191.y;
            vec2 param_5 = r2.xy;
            float param_6 = r2.w;
            r2 = hdLod4(param_5, param_6);
            r1.x += r2.x;
            vec2 hdB214 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB214.x;
            r2.y = hdB214.y;
            vec2 hdB221 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB221.x;
            r2.w = hdB221.y;
            vec2 param_7 = r2.xy;
            float param_8 = r2.w;
            r2 = hdLod4(param_7, param_8);
            r1.x += r2.x;
            vec2 hdB244 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = hdB244.x;
            r2.y = hdB244.y;
            vec2 hdB251 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB251.x;
            r2.w = hdB251.y;
            vec2 param_9 = r2.xy;
            float param_10 = r2.w;
            r2 = hdLod4(param_9, param_10);
            r1.x += r2.x;
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r1.x = (r0.w * r1.x) + 1.0;
        }
        else
        {
            r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r2.xy;
            float param_12 = r2.w;
            r2 = hdLod4(param_11, param_12);
            vec2 hdB296 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB296.x;
            r1.z = hdB296.y;
            vec2 hdB306 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB306.x;
            r3.y = hdB306.y;
            vec2 hdB313 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB313.x;
            r3.w = hdB313.y;
            vec2 param_13 = r3.xy;
            float param_14 = r3.w;
            r3 = hdLod4(param_13, param_14);
            r1.w = r2.x + r3.x;
            vec2 hdB336 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
            r2.x = hdB336.x;
            r2.y = hdB336.y;
            vec2 hdB343 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB343.x;
            r2.w = hdB343.y;
            vec2 param_15 = r2.xy;
            float param_16 = r2.w;
            r2 = hdLod4(param_15, param_16);
            r1.w += r2.x;
            vec2 hdB365 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB365.x;
            r2.y = hdB365.y;
            vec2 hdB372 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB372.x;
            r2.w = hdB372.y;
            vec2 param_17 = r2.xy;
            float param_18 = r2.w;
            r2 = hdLod4(param_17, param_18);
            r1.w += r2.x;
            vec2 hdB395 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
            r2.x = hdB395.x;
            r2.y = hdB395.y;
            vec2 hdB402 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB402.x;
            r2.w = hdB402.y;
            vec2 param_19 = r2.xy;
            float param_20 = r2.w;
            r2 = hdLod4(param_19, param_20);
            r1.w += r2.x;
            vec2 hdB424 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB424.x;
            r2.y = hdB424.y;
            vec2 hdB431 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB431.x;
            r2.w = hdB431.y;
            vec2 param_21 = r2.xy;
            float param_22 = r2.w;
            r2 = hdLod4(param_21, param_22);
            r1.w += r2.x;
            vec2 hdB454 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
            r2.x = hdB454.x;
            r2.y = hdB454.y;
            vec2 hdB461 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB461.x;
            r2.w = hdB461.y;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod4(param_23, param_24);
            r1.w += r2.x;
            vec2 hdB483 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = hdB483.x;
            r2.y = hdB483.y;
            vec2 hdB490 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB490.x;
            r2.w = hdB490.y;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod4(param_25, param_26);
            r1.w += r2.x;
            vec2 hdB513 = r1.yz + optRegs.rows[optTile*82u+uint(12)].xy;
            r2.x = hdB513.x;
            r2.y = hdB513.y;
            vec2 hdB520 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB520.x;
            r2.w = hdB520.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod4(param_27, param_28);
            r1.y = r1.w + r2.x;
            r1.y = (r1.y * 0.111111111938953399658203125) + (-1.0);
            r1.x = (r0.w * r1.y) + 1.0;
        }
    }
    else
    {
        r1.x = 1.0;
    }
    r0.w = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r0.w = clamp(r0.w + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = max(abs(v6.x), abs(v6.y));
    if (r0.w < 1.0)
    {
        r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_29 = r1.xy;
        float param_30 = r1.w;
        r1 = hdLod5(param_29, param_30);
        vec2 hdB602 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB602.x;
        r1.z = hdB602.y;
        vec2 hdB612 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB612.x;
        r3.y = hdB612.y;
        vec2 hdB619 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB619.x;
        r3.w = hdB619.y;
        vec2 param_31 = r3.xy;
        float param_32 = r3.w;
        r3 = hdLod5(param_31, param_32);
        r0.w = r1.x + r3.x;
        vec2 hdB641 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB641.x;
        r3.y = hdB641.y;
        vec2 hdB648 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB648.x;
        r3.w = hdB648.y;
        vec2 param_33 = r3.xy;
        float param_34 = r3.w;
        r3 = hdLod5(param_33, param_34);
        r0.w += r3.x;
        vec2 hdB670 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB670.x;
        r3.y = hdB670.y;
        vec2 hdB677 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB677.x;
        r3.w = hdB677.y;
        vec2 param_35 = r3.xy;
        float param_36 = r3.w;
        r3 = hdLod5(param_35, param_36);
        r0.w += r3.x;
        vec4 hdB694 = r1;
        vec2 hdB699 = hdB694.yz + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = hdB699.x;
        r1.y = hdB699.y;
        vec2 hdB706 = vec2(1.0, 0.0) * v6.zx;
        r1.z = hdB706.x;
        r1.w = hdB706.y;
        vec2 param_37 = r1.xy;
        float param_38 = r1.w;
        r1 = hdLod5(param_37, param_38);
        r0.w += r1.x;
        r0.w *= 0.20000000298023223876953125;
    }
    else
    {
        r1.x = max(abs(v7.x), abs(v7.y));
        if (r1.x < 1.0)
        {
            r1 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_39 = r1.xy;
            float param_40 = r1.w;
            r1 = hdLod6(param_39, param_40);
            vec2 hdB755 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB755.x;
            r1.z = hdB755.y;
            vec2 hdB765 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB765.x;
            r3.y = hdB765.y;
            vec2 hdB772 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB772.x;
            r3.w = hdB772.y;
            vec2 param_41 = r3.xy;
            float param_42 = r3.w;
            r3 = hdLod6(param_41, param_42);
            r1.x += r3.x;
            vec2 hdB794 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB794.x;
            r3.y = hdB794.y;
            vec2 hdB801 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB801.x;
            r3.w = hdB801.y;
            vec2 param_43 = r3.xy;
            float param_44 = r3.w;
            r3 = hdLod6(param_43, param_44);
            r1.x += r3.x;
            vec2 hdB823 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB823.x;
            r3.y = hdB823.y;
            vec2 hdB830 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB830.x;
            r3.w = hdB830.y;
            vec2 param_45 = r3.xy;
            float param_46 = r3.w;
            r3 = hdLod6(param_45, param_46);
            r1.x += r3.x;
            vec2 hdB852 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r3.x = hdB852.x;
            r3.y = hdB852.y;
            vec2 hdB859 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB859.x;
            r3.w = hdB859.y;
            vec2 param_47 = r3.xy;
            float param_48 = r3.w;
            r3 = hdLod6(param_47, param_48);
            r1.x += r3.x;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            vec2 hdB885 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = hdB885.x;
            r1.w = hdB885.y;
            r1.y = (v6.w * 0.5) + 0.5;
            r1.z = v7.w;
            vec2 param_49 = r1.xy;
            float param_50 = r1.w;
            r3 = hdLod7(param_49, param_50);
            vec2 hdB910 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB910.x;
            r4.y = hdB910.y;
            r4.z = r1.z;
            r4.w = r1.w;
            vec2 param_51 = r4.xy;
            float param_52 = r4.w;
            r5 = hdLod7(param_51, param_52);
            r1.z = r3.x + r5.x;
            vec2 hdB938 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB938.x;
            r4.y = hdB938.y;
            vec2 param_53 = r4.xy;
            float param_54 = r4.w;
            r3 = hdLod7(param_53, param_54);
            r1.z += r3.x;
            vec2 hdB960 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB960.x;
            r4.y = hdB960.y;
            vec2 param_55 = r4.xy;
            float param_56 = r4.w;
            r3 = hdLod7(param_55, param_56);
            r1.z += r3.x;
            vec2 hdB982 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r4.x = hdB982.x;
            r4.y = hdB982.y;
            vec2 param_57 = r4.xy;
            float param_58 = r4.w;
            r3 = hdLod7(param_57, param_58);
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
    vec3 hdB1084 = r0.www * v0.xyz;
    r1.x = hdB1084.x;
    r1.y = hdB1084.y;
    r1.z = hdB1084.z;
    vec4 hdB1091 = r0;
    vec3 hdB1101 = (hdB1091.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1101.x;
    r0.y = hdB1101.y;
    r0.z = hdB1101.z;
    vec3 hdB1116 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1116.x;
    oC0.y = hdB1116.y;
    oC0.z = hdB1116.z;
    bool hdB1126 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1134;
    if (hdB1126)
    {
        hdB1134 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1134 = hdB1126;
    }
    if (hdB1134)
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
    bool _2795 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _2805;
    if (_2795)
    {
        _2805 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 241u) != 0u;
    }
    else
    {
        _2805 = _2795;
    }
    if (_2805)
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
        bool _2829 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _2844;
        if (!_2829)
        {
            _2844 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 241u) != 0u;
        }
        else
        {
            _2844 = _2829;
        }
        if (_2844)
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
