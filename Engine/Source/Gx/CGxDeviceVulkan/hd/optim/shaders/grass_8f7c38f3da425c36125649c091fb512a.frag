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
    vec4 r6 = vec4(0.0);
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
            vec2 _RESERVED_IDENTIFIER_FIXUP_115 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _RESERVED_IDENTIFIER_FIXUP_115.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_115.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_136 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_136.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_136.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_147 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_147.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_147.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_158 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_158.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_158.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_163 = r1;
            vec2 _RESERVED_IDENTIFIER_FIXUP_169 = _RESERVED_IDENTIFIER_FIXUP_163.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _RESERVED_IDENTIFIER_FIXUP_169.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_169.y;
            r5 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_1 = r5.xy;
            float param_2 = r5.w;
            r5 = hdLod4(param_1, param_2);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_3 = r2.xy;
            float param_4 = r2.w;
            r2 = hdLod4(param_3, param_4);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_5 = r3.xy;
            float param_6 = r3.w;
            r3 = hdLod4(param_5, param_6);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_7 = r4.xy;
            float param_8 = r4.w;
            r4 = hdLod4(param_7, param_8);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_9 = r1.xy;
            float param_10 = r1.w;
            r1 = hdLod4(param_9, param_10);
            r5.y = r2.x;
            r5.z = r3.x;
            r5.w = r4.x;
            r2 = r5 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r0.w = r1.x + (-v5.z);
            r0.w = float(r0.w >= 0.0);
            r1.x = dot(r2, vec4(1.0));
            r0.w += r1.x;
            r0.w *= 0.20000000298023223876953125;
        }
        else
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_276 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _RESERVED_IDENTIFIER_FIXUP_276.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_276.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_286 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_286.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_286.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_296 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_296.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_296.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_306 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_306.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_306.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_311 = r1;
            vec2 _RESERVED_IDENTIFIER_FIXUP_316 = _RESERVED_IDENTIFIER_FIXUP_311.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _RESERVED_IDENTIFIER_FIXUP_316.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_316.y;
            r5 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r5.xy;
            float param_12 = r5.w;
            r5 = hdLod4(param_11, param_12);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_13 = r2.xy;
            float param_14 = r2.w;
            r2 = hdLod4(param_13, param_14);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_15 = r3.xy;
            float param_16 = r3.w;
            r3 = hdLod4(param_15, param_16);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_17 = r4.xy;
            float param_18 = r4.w;
            r4 = hdLod4(param_17, param_18);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_19 = r1.xy;
            float param_20 = r1.w;
            r1 = hdLod4(param_19, param_20);
            r5.y = r2.x;
            r5.z = r3.x;
            r5.w = r4.x;
            r2 = r5 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.x += (-v5.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r2, vec4(1.0));
            r1.x += r1.y;
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
        vec2 _RESERVED_IDENTIFIER_FIXUP_454 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.x = _RESERVED_IDENTIFIER_FIXUP_454.x;
        r1.y = _RESERVED_IDENTIFIER_FIXUP_454.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_464 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _RESERVED_IDENTIFIER_FIXUP_464.x;
        r3.y = _RESERVED_IDENTIFIER_FIXUP_464.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_474 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _RESERVED_IDENTIFIER_FIXUP_474.x;
        r4.y = _RESERVED_IDENTIFIER_FIXUP_474.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_484 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _RESERVED_IDENTIFIER_FIXUP_484.x;
        r5.y = _RESERVED_IDENTIFIER_FIXUP_484.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_489 = r1;
        vec2 _RESERVED_IDENTIFIER_FIXUP_494 = _RESERVED_IDENTIFIER_FIXUP_489.xy + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = _RESERVED_IDENTIFIER_FIXUP_494.x;
        r1.y = _RESERVED_IDENTIFIER_FIXUP_494.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_21 = r6.xy;
        float param_22 = r6.w;
        r6 = hdLod5(param_21, param_22);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_23 = r3.xy;
        float param_24 = r3.w;
        r3 = hdLod5(param_23, param_24);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_25 = r4.xy;
        float param_26 = r4.w;
        r4 = hdLod5(param_25, param_26);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_27 = r5.xy;
        float param_28 = r5.w;
        r5 = hdLod5(param_27, param_28);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_29 = r1.xy;
        float param_30 = r1.w;
        r1 = hdLod5(param_29, param_30);
        r6.y = r3.x;
        r6.z = r4.x;
        r6.w = r5.x;
        r3 = r6 + (-v6.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r0.w = r1.x + (-v6.z);
        r0.w = float(r0.w >= 0.0);
        r1.x = dot(r3, vec4(1.0));
        r0.w += r1.x;
        r0.w *= 0.20000000298023223876953125;
    }
    else
    {
        r1.x = max(abs(v7.x), abs(v7.y));
        if (r1.x < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_609 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _RESERVED_IDENTIFIER_FIXUP_609.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_609.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_619 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_619.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_619.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_629 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_629.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_629.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_639 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _RESERVED_IDENTIFIER_FIXUP_639.x;
            r5.y = _RESERVED_IDENTIFIER_FIXUP_639.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_644 = r1;
            vec2 _RESERVED_IDENTIFIER_FIXUP_649 = _RESERVED_IDENTIFIER_FIXUP_644.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _RESERVED_IDENTIFIER_FIXUP_649.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_649.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_31 = r6.xy;
            float param_32 = r6.w;
            r6 = hdLod6(param_31, param_32);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod6(param_33, param_34);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r4 = hdLod6(param_35, param_36);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_37 = r5.xy;
            float param_38 = r5.w;
            r5 = hdLod6(param_37, param_38);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_39 = r1.xy;
            float param_40 = r1.w;
            r1 = hdLod6(param_39, param_40);
            r6.y = r3.x;
            r6.z = r4.x;
            r6.w = r5.x;
            r3 = r6 + (-v7.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.x += (-v7.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r3, vec4(1.0));
            r1.x += r1.y;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            r1.x = (v5.w * 0.5) + 0.5;
            r1.y = (v6.w * 0.5) + 0.5;
            vec2 _RESERVED_IDENTIFIER_FIXUP_763 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_763.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_763.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_773 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_773.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_773.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_783 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _RESERVED_IDENTIFIER_FIXUP_783.x;
            r5.y = _RESERVED_IDENTIFIER_FIXUP_783.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_793 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r6.x = _RESERVED_IDENTIFIER_FIXUP_793.x;
            r6.y = _RESERVED_IDENTIFIER_FIXUP_793.y;
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_41 = r1.xy;
            float param_42 = r1.w;
            r1 = hdLod7(param_41, param_42);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_43 = r3.xy;
            float param_44 = r3.w;
            r3 = hdLod7(param_43, param_44);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_45 = r4.xy;
            float param_46 = r4.w;
            r4 = hdLod7(param_45, param_46);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_47 = r5.xy;
            float param_48 = r5.w;
            r5 = hdLod7(param_47, param_48);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_49 = r6.xy;
            float param_50 = r6.w;
            r6 = hdLod7(param_49, param_50);
            r1.y = r3.x;
            r1.z = r4.x;
            r1.w = r5.x;
            r1 += (-v7.wwww);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r2.y = r6.x + (-v7.w);
            r2.y = float(r2.y >= 0.0);
            r1.x = dot(r1, vec4(1.0));
            r1.x = r2.y + r1.x;
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
    vec3 _RESERVED_IDENTIFIER_FIXUP_973 = r0.www * v0.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_973.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_973.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_973.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_980 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_990 = (_RESERVED_IDENTIFIER_FIXUP_980.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _RESERVED_IDENTIFIER_FIXUP_990.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_990.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_990.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1005 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _RESERVED_IDENTIFIER_FIXUP_1005.x;
    oC0.y = _RESERVED_IDENTIFIER_FIXUP_1005.y;
    oC0.z = _RESERVED_IDENTIFIER_FIXUP_1005.z;
    bool _RESERVED_IDENTIFIER_FIXUP_1015 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1023;
    if (_RESERVED_IDENTIFIER_FIXUP_1015)
    {
        _RESERVED_IDENTIFIER_FIXUP_1023 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1023 = _RESERVED_IDENTIFIER_FIXUP_1015;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1023)
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
    vec4 r6 = vec4(0.0);
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
            vec2 hdB115 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = hdB115.x;
            r1.y = hdB115.y;
            vec2 hdB136 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB136.x;
            r2.y = hdB136.y;
            vec2 hdB147 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB147.x;
            r3.y = hdB147.y;
            vec2 hdB158 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB158.x;
            r4.y = hdB158.y;
            vec4 hdB163 = r1;
            vec2 hdB169 = hdB163.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = hdB169.x;
            r1.y = hdB169.y;
            r5 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_1 = r5.xy;
            float param_2 = r5.w;
            r5 = hdLod4(param_1, param_2);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_3 = r2.xy;
            float param_4 = r2.w;
            r2 = hdLod4(param_3, param_4);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_5 = r3.xy;
            float param_6 = r3.w;
            r3 = hdLod4(param_5, param_6);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_7 = r4.xy;
            float param_8 = r4.w;
            r4 = hdLod4(param_7, param_8);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_9 = r1.xy;
            float param_10 = r1.w;
            r1 = hdLod4(param_9, param_10);
            r5.y = r2.x;
            r5.z = r3.x;
            r5.w = r4.x;
            r2 = r5 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r0.w = r1.x + (-v5.z);
            r0.w = float(r0.w >= 0.0);
            r1.x = dot(r2, vec4(1.0));
            r0.w += r1.x;
            r0.w *= 0.20000000298023223876953125;
        }
        else
        {
            vec2 hdB276 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = hdB276.x;
            r1.y = hdB276.y;
            vec2 hdB286 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB286.x;
            r2.y = hdB286.y;
            vec2 hdB296 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB296.x;
            r3.y = hdB296.y;
            vec2 hdB306 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB306.x;
            r4.y = hdB306.y;
            vec4 hdB311 = r1;
            vec2 hdB316 = hdB311.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = hdB316.x;
            r1.y = hdB316.y;
            r5 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r5.xy;
            float param_12 = r5.w;
            r5 = hdLod4(param_11, param_12);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_13 = r2.xy;
            float param_14 = r2.w;
            r2 = hdLod4(param_13, param_14);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_15 = r3.xy;
            float param_16 = r3.w;
            r3 = hdLod4(param_15, param_16);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_17 = r4.xy;
            float param_18 = r4.w;
            r4 = hdLod4(param_17, param_18);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_19 = r1.xy;
            float param_20 = r1.w;
            r1 = hdLod4(param_19, param_20);
            r5.y = r2.x;
            r5.z = r3.x;
            r5.w = r4.x;
            r2 = r5 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.x += (-v5.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r2, vec4(1.0));
            r1.x += r1.y;
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
        vec2 hdB454 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB454.x;
        r1.y = hdB454.y;
        vec2 hdB464 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB464.x;
        r3.y = hdB464.y;
        vec2 hdB474 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB474.x;
        r4.y = hdB474.y;
        vec2 hdB484 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB484.x;
        r5.y = hdB484.y;
        vec4 hdB489 = r1;
        vec2 hdB494 = hdB489.xy + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = hdB494.x;
        r1.y = hdB494.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_21 = r6.xy;
        float param_22 = r6.w;
        r6 = hdLod5(param_21, param_22);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_23 = r3.xy;
        float param_24 = r3.w;
        r3 = hdLod5(param_23, param_24);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_25 = r4.xy;
        float param_26 = r4.w;
        r4 = hdLod5(param_25, param_26);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_27 = r5.xy;
        float param_28 = r5.w;
        r5 = hdLod5(param_27, param_28);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_29 = r1.xy;
        float param_30 = r1.w;
        r1 = hdLod5(param_29, param_30);
        r6.y = r3.x;
        r6.z = r4.x;
        r6.w = r5.x;
        r3 = r6 + (-v6.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r0.w = r1.x + (-v6.z);
        r0.w = float(r0.w >= 0.0);
        r1.x = dot(r3, vec4(1.0));
        r0.w += r1.x;
        r0.w *= 0.20000000298023223876953125;
    }
    else
    {
        r1.x = max(abs(v7.x), abs(v7.y));
        if (r1.x < 1.0)
        {
            vec2 hdB609 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.x = hdB609.x;
            r1.y = hdB609.y;
            vec2 hdB619 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB619.x;
            r3.y = hdB619.y;
            vec2 hdB629 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB629.x;
            r4.y = hdB629.y;
            vec2 hdB639 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB639.x;
            r5.y = hdB639.y;
            vec4 hdB644 = r1;
            vec2 hdB649 = hdB644.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = hdB649.x;
            r1.y = hdB649.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_31 = r6.xy;
            float param_32 = r6.w;
            r6 = hdLod6(param_31, param_32);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod6(param_33, param_34);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r4 = hdLod6(param_35, param_36);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_37 = r5.xy;
            float param_38 = r5.w;
            r5 = hdLod6(param_37, param_38);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_39 = r1.xy;
            float param_40 = r1.w;
            r1 = hdLod6(param_39, param_40);
            r6.y = r3.x;
            r6.z = r4.x;
            r6.w = r5.x;
            r3 = r6 + (-v7.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.x += (-v7.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r3, vec4(1.0));
            r1.x += r1.y;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            r1.x = (v5.w * 0.5) + 0.5;
            r1.y = (v6.w * 0.5) + 0.5;
            vec2 hdB763 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB763.x;
            r3.y = hdB763.y;
            vec2 hdB773 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB773.x;
            r4.y = hdB773.y;
            vec2 hdB783 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB783.x;
            r5.y = hdB783.y;
            vec2 hdB793 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r6.x = hdB793.x;
            r6.y = hdB793.y;
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_41 = r1.xy;
            float param_42 = r1.w;
            r1 = hdLod7(param_41, param_42);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_43 = r3.xy;
            float param_44 = r3.w;
            r3 = hdLod7(param_43, param_44);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_45 = r4.xy;
            float param_46 = r4.w;
            r4 = hdLod7(param_45, param_46);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_47 = r5.xy;
            float param_48 = r5.w;
            r5 = hdLod7(param_47, param_48);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_49 = r6.xy;
            float param_50 = r6.w;
            r6 = hdLod7(param_49, param_50);
            r1.y = r3.x;
            r1.z = r4.x;
            r1.w = r5.x;
            r1 += (-v7.wwww);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r2.y = r6.x + (-v7.w);
            r2.y = float(r2.y >= 0.0);
            r1.x = dot(r1, vec4(1.0));
            r1.x = r2.y + r1.x;
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
    vec3 hdB973 = r0.www * v0.xyz;
    r1.x = hdB973.x;
    r1.y = hdB973.y;
    r1.z = hdB973.z;
    vec4 hdB980 = r0;
    vec3 hdB990 = (hdB980.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB990.x;
    r0.y = hdB990.y;
    r0.z = hdB990.z;
    vec3 hdB1005 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1005.x;
    oC0.y = hdB1005.y;
    oC0.z = hdB1005.z;
    bool hdB1015 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1023;
    if (hdB1015)
    {
        hdB1023 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1023 = hdB1015;
    }
    if (hdB1023)
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
    bool _2348 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _2358;
    if (_2348)
    {
        _2358 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 241u) != 0u;
    }
    else
    {
        _2358 = _2348;
    }
    if (_2358)
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
        bool _2382 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _2397;
        if (!_2382)
        {
            _2397 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 241u) != 0u;
        }
        else
        {
            _2397 = _2382;
        }
        if (_2397)
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
