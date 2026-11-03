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

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
layout(location = 7) in vec4 texcoord5;
layout(location = 8) in vec4 texcoord6;
layout(location = 10) in float fog0;
layout(location = 13) in vec4 wxlGBuf;
layout(location = 1) out vec4 wxlAlbedo;
layout(location = 14) flat in float wxlGClass;
layout(location = 15) in float wxlGPlain;
layout(location = 2) out vec4 wxlNormal;
layout(location = 3) out vec4 wxlLight;
layout(location = 4) out vec4 hdLow;
layout(location = 5) out vec4 hdHigh;
int hdOverride;
bool hdKilled;
float _RESERVED_IDENTIFIER_FIXUP_3246;
vec4 _RESERVED_IDENTIFIER_FIXUP_3247;


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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _61 = hdOverride >= 0;
    bool _81;
    if (_61)
    {
        _81 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _81 = _61;
    }
    vec4 _82;
    if (_81)
    {
        _82 = vec4(float(hdOverride));
    }
    else
    {
        _82 = value;
    }
    return _82;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _99 = hdOverride >= 0;
    bool _108;
    if (_99)
    {
        _108 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _108 = _99;
    }
    vec4 _109;
    if (_108)
    {
        _109 = vec4(float(hdOverride));
    }
    else
    {
        _109 = value;
    }
    return _109;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _126 = hdOverride >= 0;
    bool _136;
    if (_126)
    {
        _136 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _136 = _126;
    }
    vec4 _137;
    if (_136)
    {
        _137 = vec4(float(hdOverride));
    }
    else
    {
        _137 = value;
    }
    return _137;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _155 = hdOverride >= 0;
    bool _165;
    if (_155)
    {
        _165 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _165 = _155;
    }
    vec4 _166;
    if (_165)
    {
        _166 = vec4(float(hdOverride));
    }
    else
    {
        _166 = value;
    }
    return _166;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _184 = hdOverride >= 0;
    bool _194;
    if (_184)
    {
        _194 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _194 = _184;
    }
    vec4 _195;
    if (_194)
    {
        _195 = vec4(float(hdOverride));
    }
    else
    {
        _195 = value;
    }
    return _195;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _213 = hdOverride >= 0;
    bool _223;
    if (_213)
    {
        _223 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _223 = _213;
    }
    vec4 _224;
    if (_223)
    {
        _224 = vec4(float(hdOverride));
    }
    else
    {
        _224 = value;
    }
    return _224;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _242 = hdOverride >= 0;
    bool _252;
    if (_242)
    {
        _252 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _252 = _242;
    }
    vec4 _253;
    if (_252)
    {
        _253 = vec4(float(hdOverride));
    }
    else
    {
        _253 = value;
    }
    return _253;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1027 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1031 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1035 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1047 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2589 = _RESERVED_IDENTIFIER_FIXUP_1027;
    _RESERVED_IDENTIFIER_FIXUP_2589.x = _RESERVED_IDENTIFIER_FIXUP_1047;
    float _RESERVED_IDENTIFIER_FIXUP_1053 = clamp((_RESERVED_IDENTIFIER_FIXUP_1047 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2589.x = _RESERVED_IDENTIFIER_FIXUP_1053;
    float _RESERVED_IDENTIFIER_FIXUP_1059 = ((-_RESERVED_IDENTIFIER_FIXUP_1053) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2589.y = _RESERVED_IDENTIFIER_FIXUP_1059;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3248;
    if (_RESERVED_IDENTIFIER_FIXUP_1059 != (-_RESERVED_IDENTIFIER_FIXUP_1059))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1071 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1081 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1083 = _RESERVED_IDENTIFIER_FIXUP_1081.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2602 = _RESERVED_IDENTIFIER_FIXUP_2589;
        _RESERVED_IDENTIFIER_FIXUP_2602.y = _RESERVED_IDENTIFIER_FIXUP_1083;
        _RESERVED_IDENTIFIER_FIXUP_2602.z = _RESERVED_IDENTIFIER_FIXUP_1081.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1091 = _RESERVED_IDENTIFIER_FIXUP_2602.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2606;
        _RESERVED_IDENTIFIER_FIXUP_2606.x = _RESERVED_IDENTIFIER_FIXUP_1091.x;
        _RESERVED_IDENTIFIER_FIXUP_2606.y = _RESERVED_IDENTIFIER_FIXUP_1091.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1098 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1102 = _RESERVED_IDENTIFIER_FIXUP_1098.y;
        _RESERVED_IDENTIFIER_FIXUP_2606.w = _RESERVED_IDENTIFIER_FIXUP_1102;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1071.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1071.w;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2606.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1102;
        float _RESERVED_IDENTIFIER_FIXUP_1113 = hdLod5(param_3, param_4).x + hdLod5(param_5, param_6).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3268 = vec4(_RESERVED_IDENTIFIER_FIXUP_1053, _RESERVED_IDENTIFIER_FIXUP_1083, _RESERVED_IDENTIFIER_FIXUP_1081.y, _RESERVED_IDENTIFIER_FIXUP_1113);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_3268.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2619;
        _RESERVED_IDENTIFIER_FIXUP_2619.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
        _RESERVED_IDENTIFIER_FIXUP_2619.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
        _RESERVED_IDENTIFIER_FIXUP_2619.w = _RESERVED_IDENTIFIER_FIXUP_1102;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2619.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1102;
        float _RESERVED_IDENTIFIER_FIXUP_1142 = _RESERVED_IDENTIFIER_FIXUP_1113 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3268.w = _RESERVED_IDENTIFIER_FIXUP_1142;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1149 = _RESERVED_IDENTIFIER_FIXUP_3268.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2632;
        _RESERVED_IDENTIFIER_FIXUP_2632.x = _RESERVED_IDENTIFIER_FIXUP_1149.x;
        _RESERVED_IDENTIFIER_FIXUP_2632.y = _RESERVED_IDENTIFIER_FIXUP_1149.y;
        _RESERVED_IDENTIFIER_FIXUP_2632.w = _RESERVED_IDENTIFIER_FIXUP_1102;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2632.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1102;
        float _RESERVED_IDENTIFIER_FIXUP_1171 = _RESERVED_IDENTIFIER_FIXUP_1142 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3268.w = _RESERVED_IDENTIFIER_FIXUP_1171;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1178 = _RESERVED_IDENTIFIER_FIXUP_3268.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2645;
        _RESERVED_IDENTIFIER_FIXUP_2645.x = _RESERVED_IDENTIFIER_FIXUP_1178.x;
        _RESERVED_IDENTIFIER_FIXUP_2645.y = _RESERVED_IDENTIFIER_FIXUP_1178.y;
        _RESERVED_IDENTIFIER_FIXUP_2645.w = _RESERVED_IDENTIFIER_FIXUP_1102;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2645.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1102;
        float _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_1171 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3268.y = _RESERVED_IDENTIFIER_FIXUP_1200;
        float _RESERVED_IDENTIFIER_FIXUP_1205 = (_RESERVED_IDENTIFIER_FIXUP_1200 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3268.y = _RESERVED_IDENTIFIER_FIXUP_1205;
        _RESERVED_IDENTIFIER_FIXUP_3268.x = (_RESERVED_IDENTIFIER_FIXUP_1053 * _RESERVED_IDENTIFIER_FIXUP_1205) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3248 = _RESERVED_IDENTIFIER_FIXUP_3268;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2599 = _RESERVED_IDENTIFIER_FIXUP_2589;
        _RESERVED_IDENTIFIER_FIXUP_2599.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3248 = _RESERVED_IDENTIFIER_FIXUP_2599;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1223 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2667 = _RESERVED_IDENTIFIER_FIXUP_3248;
    _RESERVED_IDENTIFIER_FIXUP_2667.y = _RESERVED_IDENTIFIER_FIXUP_1223;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3251;
    if (_RESERVED_IDENTIFIER_FIXUP_1223 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1232 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1242 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2807 = _RESERVED_IDENTIFIER_FIXUP_2667;
        _RESERVED_IDENTIFIER_FIXUP_2807.y = _RESERVED_IDENTIFIER_FIXUP_1242.x;
        _RESERVED_IDENTIFIER_FIXUP_2807.z = _RESERVED_IDENTIFIER_FIXUP_1242.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1252 = _RESERVED_IDENTIFIER_FIXUP_2807.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2811;
        _RESERVED_IDENTIFIER_FIXUP_2811.x = _RESERVED_IDENTIFIER_FIXUP_1252.x;
        _RESERVED_IDENTIFIER_FIXUP_2811.y = _RESERVED_IDENTIFIER_FIXUP_1252.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1259 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1263 = _RESERVED_IDENTIFIER_FIXUP_1259.y;
        _RESERVED_IDENTIFIER_FIXUP_2811.w = _RESERVED_IDENTIFIER_FIXUP_1263;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1232.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1232.w;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_2811.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1263;
        float _RESERVED_IDENTIFIER_FIXUP_1274 = hdLod6(param_13, param_14).x + hdLod6(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_2807.w = _RESERVED_IDENTIFIER_FIXUP_1274;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1281 = _RESERVED_IDENTIFIER_FIXUP_2807.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2824;
        _RESERVED_IDENTIFIER_FIXUP_2824.x = _RESERVED_IDENTIFIER_FIXUP_1281.x;
        _RESERVED_IDENTIFIER_FIXUP_2824.y = _RESERVED_IDENTIFIER_FIXUP_1281.y;
        _RESERVED_IDENTIFIER_FIXUP_2824.w = _RESERVED_IDENTIFIER_FIXUP_1263;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2824.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1263;
        float _RESERVED_IDENTIFIER_FIXUP_1303 = _RESERVED_IDENTIFIER_FIXUP_1274 + hdLod6(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_2807.w = _RESERVED_IDENTIFIER_FIXUP_1303;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1310 = _RESERVED_IDENTIFIER_FIXUP_2807.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2837;
        _RESERVED_IDENTIFIER_FIXUP_2837.x = _RESERVED_IDENTIFIER_FIXUP_1310.x;
        _RESERVED_IDENTIFIER_FIXUP_2837.y = _RESERVED_IDENTIFIER_FIXUP_1310.y;
        _RESERVED_IDENTIFIER_FIXUP_2837.w = _RESERVED_IDENTIFIER_FIXUP_1263;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2837.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1263;
        float _RESERVED_IDENTIFIER_FIXUP_1332 = _RESERVED_IDENTIFIER_FIXUP_1303 + hdLod6(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_2807.w = _RESERVED_IDENTIFIER_FIXUP_1332;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_2807.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2850;
        _RESERVED_IDENTIFIER_FIXUP_2850.x = _RESERVED_IDENTIFIER_FIXUP_1339.x;
        _RESERVED_IDENTIFIER_FIXUP_2850.y = _RESERVED_IDENTIFIER_FIXUP_1339.y;
        _RESERVED_IDENTIFIER_FIXUP_2850.w = _RESERVED_IDENTIFIER_FIXUP_1263;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_2850.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1263;
        float _RESERVED_IDENTIFIER_FIXUP_1361 = _RESERVED_IDENTIFIER_FIXUP_1332 + hdLod6(param_21, param_22).x;
        _RESERVED_IDENTIFIER_FIXUP_2807.y = _RESERVED_IDENTIFIER_FIXUP_1361;
        _RESERVED_IDENTIFIER_FIXUP_2807.y = _RESERVED_IDENTIFIER_FIXUP_1361 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3251 = _RESERVED_IDENTIFIER_FIXUP_2807;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1374 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2672 = _RESERVED_IDENTIFIER_FIXUP_2667;
        _RESERVED_IDENTIFIER_FIXUP_2672.z = _RESERVED_IDENTIFIER_FIXUP_1374;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3252;
        if (_RESERVED_IDENTIFIER_FIXUP_1374 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1383 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1393 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2747 = _RESERVED_IDENTIFIER_FIXUP_2672;
            _RESERVED_IDENTIFIER_FIXUP_2747.z = _RESERVED_IDENTIFIER_FIXUP_1393.x;
            _RESERVED_IDENTIFIER_FIXUP_2747.w = _RESERVED_IDENTIFIER_FIXUP_1393.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1403 = _RESERVED_IDENTIFIER_FIXUP_2747.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2751;
            _RESERVED_IDENTIFIER_FIXUP_2751.x = _RESERVED_IDENTIFIER_FIXUP_1403.x;
            _RESERVED_IDENTIFIER_FIXUP_2751.y = _RESERVED_IDENTIFIER_FIXUP_1403.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1410 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1414 = _RESERVED_IDENTIFIER_FIXUP_1410.y;
            _RESERVED_IDENTIFIER_FIXUP_2751.w = _RESERVED_IDENTIFIER_FIXUP_1414;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_2747.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2764;
            _RESERVED_IDENTIFIER_FIXUP_2764.x = _RESERVED_IDENTIFIER_FIXUP_1432.x;
            _RESERVED_IDENTIFIER_FIXUP_2764.y = _RESERVED_IDENTIFIER_FIXUP_1432.y;
            _RESERVED_IDENTIFIER_FIXUP_2764.w = _RESERVED_IDENTIFIER_FIXUP_1414;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1461 = _RESERVED_IDENTIFIER_FIXUP_2747.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2777;
            _RESERVED_IDENTIFIER_FIXUP_2777.x = _RESERVED_IDENTIFIER_FIXUP_1461.x;
            _RESERVED_IDENTIFIER_FIXUP_2777.y = _RESERVED_IDENTIFIER_FIXUP_1461.y;
            _RESERVED_IDENTIFIER_FIXUP_2777.w = _RESERVED_IDENTIFIER_FIXUP_1414;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1490 = _RESERVED_IDENTIFIER_FIXUP_2747.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2790;
            _RESERVED_IDENTIFIER_FIXUP_2790.x = _RESERVED_IDENTIFIER_FIXUP_1490.x;
            _RESERVED_IDENTIFIER_FIXUP_2790.y = _RESERVED_IDENTIFIER_FIXUP_1490.y;
            _RESERVED_IDENTIFIER_FIXUP_2790.w = _RESERVED_IDENTIFIER_FIXUP_1414;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1383.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1383.w;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_2751.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1414;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2764.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1414;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2777.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1414;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2790.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1414;
            float _RESERVED_IDENTIFIER_FIXUP_1512 = (((hdLod7(param_23, param_24).x + hdLod7(param_25, param_26).x) + hdLod7(param_27, param_28).x) + hdLod7(param_29, param_30).x) + hdLod7(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_2747.z = _RESERVED_IDENTIFIER_FIXUP_1512;
            _RESERVED_IDENTIFIER_FIXUP_2747.y = _RESERVED_IDENTIFIER_FIXUP_1512 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3252 = _RESERVED_IDENTIFIER_FIXUP_2747;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2676 = _RESERVED_IDENTIFIER_FIXUP_2672;
            _RESERVED_IDENTIFIER_FIXUP_2676.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2676.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1528 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1532 = _RESERVED_IDENTIFIER_FIXUP_1528.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3269 = vec4(_RESERVED_IDENTIFIER_FIXUP_1528.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1532);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_3269.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3270 = vec4(_RESERVED_IDENTIFIER_FIXUP_1543 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1532);
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1543;
            float param_34 = _RESERVED_IDENTIFIER_FIXUP_1532;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3270.xy;
            float param_36 = _RESERVED_IDENTIFIER_FIXUP_1532;
            float _RESERVED_IDENTIFIER_FIXUP_1573 = hdLod8(param_33, param_34).x + hdLod8(param_35, param_36).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2703 = _RESERVED_IDENTIFIER_FIXUP_3269;
            _RESERVED_IDENTIFIER_FIXUP_2703.z = _RESERVED_IDENTIFIER_FIXUP_1573;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1580 = _RESERVED_IDENTIFIER_FIXUP_2703.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2705 = _RESERVED_IDENTIFIER_FIXUP_3270;
            _RESERVED_IDENTIFIER_FIXUP_2705.x = _RESERVED_IDENTIFIER_FIXUP_1580.x;
            _RESERVED_IDENTIFIER_FIXUP_2705.y = _RESERVED_IDENTIFIER_FIXUP_1580.y;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2705.xy;
            float param_38 = _RESERVED_IDENTIFIER_FIXUP_1532;
            float _RESERVED_IDENTIFIER_FIXUP_1595 = _RESERVED_IDENTIFIER_FIXUP_1573 + hdLod8(param_37, param_38).x;
            _RESERVED_IDENTIFIER_FIXUP_2703.z = _RESERVED_IDENTIFIER_FIXUP_1595;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1602 = _RESERVED_IDENTIFIER_FIXUP_2703.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2714 = _RESERVED_IDENTIFIER_FIXUP_2705;
            _RESERVED_IDENTIFIER_FIXUP_2714.x = _RESERVED_IDENTIFIER_FIXUP_1602.x;
            _RESERVED_IDENTIFIER_FIXUP_2714.y = _RESERVED_IDENTIFIER_FIXUP_1602.y;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2714.xy;
            float param_40 = _RESERVED_IDENTIFIER_FIXUP_1532;
            float _RESERVED_IDENTIFIER_FIXUP_1617 = _RESERVED_IDENTIFIER_FIXUP_1595 + hdLod8(param_39, param_40).x;
            _RESERVED_IDENTIFIER_FIXUP_2703.z = _RESERVED_IDENTIFIER_FIXUP_1617;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1624 = _RESERVED_IDENTIFIER_FIXUP_2703.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2723 = _RESERVED_IDENTIFIER_FIXUP_2714;
            _RESERVED_IDENTIFIER_FIXUP_2723.x = _RESERVED_IDENTIFIER_FIXUP_1624.x;
            _RESERVED_IDENTIFIER_FIXUP_2723.y = _RESERVED_IDENTIFIER_FIXUP_1624.y;
            float _RESERVED_IDENTIFIER_FIXUP_1653 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2676.z = _RESERVED_IDENTIFIER_FIXUP_1653;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2723.xy;
            float param_42 = _RESERVED_IDENTIFIER_FIXUP_1532;
            float _RESERVED_IDENTIFIER_FIXUP_1658 = ((_RESERVED_IDENTIFIER_FIXUP_1617 + hdLod8(param_41, param_42).x) * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2676.w = _RESERVED_IDENTIFIER_FIXUP_1658;
            _RESERVED_IDENTIFIER_FIXUP_2676.y = (_RESERVED_IDENTIFIER_FIXUP_1653 * _RESERVED_IDENTIFIER_FIXUP_1658) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3252 = _RESERVED_IDENTIFIER_FIXUP_2676;
        }
        _RESERVED_IDENTIFIER_FIXUP_3251 = _RESERVED_IDENTIFIER_FIXUP_3252;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1673 = min(_RESERVED_IDENTIFIER_FIXUP_3251.y, _RESERVED_IDENTIFIER_FIXUP_3251.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2871 = _RESERVED_IDENTIFIER_FIXUP_3251;
    _RESERVED_IDENTIFIER_FIXUP_2871.x = (_RESERVED_IDENTIFIER_FIXUP_1673 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1684 = mix(_RESERVED_IDENTIFIER_FIXUP_1027, _RESERVED_IDENTIFIER_FIXUP_1031, _RESERVED_IDENTIFIER_FIXUP_1035.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_2871.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2873 = _RESERVED_IDENTIFIER_FIXUP_2871;
    _RESERVED_IDENTIFIER_FIXUP_2873.x = _RESERVED_IDENTIFIER_FIXUP_1684.x;
    _RESERVED_IDENTIFIER_FIXUP_2873.y = _RESERVED_IDENTIFIER_FIXUP_1684.y;
    _RESERVED_IDENTIFIER_FIXUP_2873.z = _RESERVED_IDENTIFIER_FIXUP_1684.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1695 = _RESERVED_IDENTIFIER_FIXUP_2873.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3246).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2879 = _RESERVED_IDENTIFIER_FIXUP_2873;
    _RESERVED_IDENTIFIER_FIXUP_2879.x = _RESERVED_IDENTIFIER_FIXUP_1695.x;
    _RESERVED_IDENTIFIER_FIXUP_2879.y = _RESERVED_IDENTIFIER_FIXUP_1695.y;
    _RESERVED_IDENTIFIER_FIXUP_2879.z = _RESERVED_IDENTIFIER_FIXUP_1695.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1706 = _RESERVED_IDENTIFIER_FIXUP_2879.xyz + _RESERVED_IDENTIFIER_FIXUP_2879.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2885 = _RESERVED_IDENTIFIER_FIXUP_2879;
    _RESERVED_IDENTIFIER_FIXUP_2885.x = _RESERVED_IDENTIFIER_FIXUP_1706.x;
    _RESERVED_IDENTIFIER_FIXUP_2885.y = _RESERVED_IDENTIFIER_FIXUP_1706.y;
    _RESERVED_IDENTIFIER_FIXUP_2885.z = _RESERVED_IDENTIFIER_FIXUP_1706.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3271 = vec4(_RESERVED_IDENTIFIER_FIXUP_1673, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1731 = (_RESERVED_IDENTIFIER_FIXUP_3271.yzw * _RESERVED_IDENTIFIER_FIXUP_3271.xxx) + _RESERVED_IDENTIFIER_FIXUP_2885.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2897 = _RESERVED_IDENTIFIER_FIXUP_2885;
    _RESERVED_IDENTIFIER_FIXUP_2897.x = _RESERVED_IDENTIFIER_FIXUP_1731.x;
    _RESERVED_IDENTIFIER_FIXUP_2897.y = _RESERVED_IDENTIFIER_FIXUP_1731.y;
    _RESERVED_IDENTIFIER_FIXUP_2897.z = _RESERVED_IDENTIFIER_FIXUP_1731.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_2897.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2903 = _RESERVED_IDENTIFIER_FIXUP_2897;
    _RESERVED_IDENTIFIER_FIXUP_2903.x = _RESERVED_IDENTIFIER_FIXUP_1744.x;
    _RESERVED_IDENTIFIER_FIXUP_2903.y = _RESERVED_IDENTIFIER_FIXUP_1744.y;
    _RESERVED_IDENTIFIER_FIXUP_2903.z = _RESERVED_IDENTIFIER_FIXUP_1744.z;
    vec2 param_43 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1797 = hdTex0(param_43);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1801 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1805 = hdTex2(param_45);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1810 = mix(_RESERVED_IDENTIFIER_FIXUP_1797, _RESERVED_IDENTIFIER_FIXUP_1801, _RESERVED_IDENTIFIER_FIXUP_1805.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2919 = _RESERVED_IDENTIFIER_FIXUP_1797;
    _RESERVED_IDENTIFIER_FIXUP_2919.x = _RESERVED_IDENTIFIER_FIXUP_1047;
    float _RESERVED_IDENTIFIER_FIXUP_1823 = clamp((_RESERVED_IDENTIFIER_FIXUP_1047 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2919.x = _RESERVED_IDENTIFIER_FIXUP_1823;
    float _RESERVED_IDENTIFIER_FIXUP_1829 = ((-_RESERVED_IDENTIFIER_FIXUP_1823) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2919.y = _RESERVED_IDENTIFIER_FIXUP_1829;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3258;
    if (_RESERVED_IDENTIFIER_FIXUP_1829 != (-_RESERVED_IDENTIFIER_FIXUP_1829))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1841 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1851 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1853 = _RESERVED_IDENTIFIER_FIXUP_1851.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2932 = _RESERVED_IDENTIFIER_FIXUP_2919;
        _RESERVED_IDENTIFIER_FIXUP_2932.y = _RESERVED_IDENTIFIER_FIXUP_1853;
        _RESERVED_IDENTIFIER_FIXUP_2932.z = _RESERVED_IDENTIFIER_FIXUP_1851.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1861 = _RESERVED_IDENTIFIER_FIXUP_2932.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2936;
        _RESERVED_IDENTIFIER_FIXUP_2936.x = _RESERVED_IDENTIFIER_FIXUP_1861.x;
        _RESERVED_IDENTIFIER_FIXUP_2936.y = _RESERVED_IDENTIFIER_FIXUP_1861.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1868 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1872 = _RESERVED_IDENTIFIER_FIXUP_1868.y;
        _RESERVED_IDENTIFIER_FIXUP_2936.w = _RESERVED_IDENTIFIER_FIXUP_1872;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_1841.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_1841.w;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2936.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1872;
        float _RESERVED_IDENTIFIER_FIXUP_1883 = hdLod5(param_46, param_47).x + hdLod5(param_48, param_49).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3273 = vec4(_RESERVED_IDENTIFIER_FIXUP_1823, _RESERVED_IDENTIFIER_FIXUP_1853, _RESERVED_IDENTIFIER_FIXUP_1851.y, _RESERVED_IDENTIFIER_FIXUP_1883);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1890 = _RESERVED_IDENTIFIER_FIXUP_3273.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2949;
        _RESERVED_IDENTIFIER_FIXUP_2949.x = _RESERVED_IDENTIFIER_FIXUP_1890.x;
        _RESERVED_IDENTIFIER_FIXUP_2949.y = _RESERVED_IDENTIFIER_FIXUP_1890.y;
        _RESERVED_IDENTIFIER_FIXUP_2949.w = _RESERVED_IDENTIFIER_FIXUP_1872;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2949.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1872;
        float _RESERVED_IDENTIFIER_FIXUP_1912 = _RESERVED_IDENTIFIER_FIXUP_1883 + hdLod5(param_50, param_51).x;
        _RESERVED_IDENTIFIER_FIXUP_3273.w = _RESERVED_IDENTIFIER_FIXUP_1912;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1919 = _RESERVED_IDENTIFIER_FIXUP_3273.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2962;
        _RESERVED_IDENTIFIER_FIXUP_2962.x = _RESERVED_IDENTIFIER_FIXUP_1919.x;
        _RESERVED_IDENTIFIER_FIXUP_2962.y = _RESERVED_IDENTIFIER_FIXUP_1919.y;
        _RESERVED_IDENTIFIER_FIXUP_2962.w = _RESERVED_IDENTIFIER_FIXUP_1872;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2962.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1872;
        float _RESERVED_IDENTIFIER_FIXUP_1941 = _RESERVED_IDENTIFIER_FIXUP_1912 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3273.w = _RESERVED_IDENTIFIER_FIXUP_1941;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1948 = _RESERVED_IDENTIFIER_FIXUP_3273.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2975;
        _RESERVED_IDENTIFIER_FIXUP_2975.x = _RESERVED_IDENTIFIER_FIXUP_1948.x;
        _RESERVED_IDENTIFIER_FIXUP_2975.y = _RESERVED_IDENTIFIER_FIXUP_1948.y;
        _RESERVED_IDENTIFIER_FIXUP_2975.w = _RESERVED_IDENTIFIER_FIXUP_1872;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2975.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_1872;
        float _RESERVED_IDENTIFIER_FIXUP_1970 = _RESERVED_IDENTIFIER_FIXUP_1941 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1970;
        float _RESERVED_IDENTIFIER_FIXUP_1975 = (_RESERVED_IDENTIFIER_FIXUP_1970 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1975;
        _RESERVED_IDENTIFIER_FIXUP_3273.x = (_RESERVED_IDENTIFIER_FIXUP_1823 * _RESERVED_IDENTIFIER_FIXUP_1975) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3258 = _RESERVED_IDENTIFIER_FIXUP_3273;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2929 = _RESERVED_IDENTIFIER_FIXUP_2919;
        _RESERVED_IDENTIFIER_FIXUP_2929.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3258 = _RESERVED_IDENTIFIER_FIXUP_2929;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_2997 = _RESERVED_IDENTIFIER_FIXUP_3258;
    _RESERVED_IDENTIFIER_FIXUP_2997.y = _RESERVED_IDENTIFIER_FIXUP_1223;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3261;
    if (_RESERVED_IDENTIFIER_FIXUP_1223 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2002 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2012 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3137 = _RESERVED_IDENTIFIER_FIXUP_2997;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_2012.x;
        _RESERVED_IDENTIFIER_FIXUP_3137.z = _RESERVED_IDENTIFIER_FIXUP_2012.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2022 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3141;
        _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_2022.x;
        _RESERVED_IDENTIFIER_FIXUP_3141.y = _RESERVED_IDENTIFIER_FIXUP_2022.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2029 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2033 = _RESERVED_IDENTIFIER_FIXUP_2029.y;
        _RESERVED_IDENTIFIER_FIXUP_3141.w = _RESERVED_IDENTIFIER_FIXUP_2033;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2002.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2002.w;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3141.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2033;
        float _RESERVED_IDENTIFIER_FIXUP_2044 = hdLod6(param_56, param_57).x + hdLod6(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3137.w = _RESERVED_IDENTIFIER_FIXUP_2044;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2051 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3154;
        _RESERVED_IDENTIFIER_FIXUP_3154.x = _RESERVED_IDENTIFIER_FIXUP_2051.x;
        _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_2051.y;
        _RESERVED_IDENTIFIER_FIXUP_3154.w = _RESERVED_IDENTIFIER_FIXUP_2033;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3154.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2033;
        float _RESERVED_IDENTIFIER_FIXUP_2073 = _RESERVED_IDENTIFIER_FIXUP_2044 + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3137.w = _RESERVED_IDENTIFIER_FIXUP_2073;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2080 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3167;
        _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_2080.x;
        _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_2080.y;
        _RESERVED_IDENTIFIER_FIXUP_3167.w = _RESERVED_IDENTIFIER_FIXUP_2033;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3167.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2033;
        float _RESERVED_IDENTIFIER_FIXUP_2102 = _RESERVED_IDENTIFIER_FIXUP_2073 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3137.w = _RESERVED_IDENTIFIER_FIXUP_2102;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2109 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3180;
        _RESERVED_IDENTIFIER_FIXUP_3180.x = _RESERVED_IDENTIFIER_FIXUP_2109.x;
        _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_2109.y;
        _RESERVED_IDENTIFIER_FIXUP_3180.w = _RESERVED_IDENTIFIER_FIXUP_2033;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3180.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2033;
        float _RESERVED_IDENTIFIER_FIXUP_2131 = _RESERVED_IDENTIFIER_FIXUP_2102 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_2131;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_2131 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3261 = _RESERVED_IDENTIFIER_FIXUP_3137;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2144 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3002 = _RESERVED_IDENTIFIER_FIXUP_2997;
        _RESERVED_IDENTIFIER_FIXUP_3002.z = _RESERVED_IDENTIFIER_FIXUP_2144;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3262;
        if (_RESERVED_IDENTIFIER_FIXUP_2144 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2153 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2163 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3077 = _RESERVED_IDENTIFIER_FIXUP_3002;
            _RESERVED_IDENTIFIER_FIXUP_3077.z = _RESERVED_IDENTIFIER_FIXUP_2163.x;
            _RESERVED_IDENTIFIER_FIXUP_3077.w = _RESERVED_IDENTIFIER_FIXUP_2163.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2173 = _RESERVED_IDENTIFIER_FIXUP_3077.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3081;
            _RESERVED_IDENTIFIER_FIXUP_3081.x = _RESERVED_IDENTIFIER_FIXUP_2173.x;
            _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_2173.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2180 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2184 = _RESERVED_IDENTIFIER_FIXUP_2180.y;
            _RESERVED_IDENTIFIER_FIXUP_3081.w = _RESERVED_IDENTIFIER_FIXUP_2184;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2202 = _RESERVED_IDENTIFIER_FIXUP_3077.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3094;
            _RESERVED_IDENTIFIER_FIXUP_3094.x = _RESERVED_IDENTIFIER_FIXUP_2202.x;
            _RESERVED_IDENTIFIER_FIXUP_3094.y = _RESERVED_IDENTIFIER_FIXUP_2202.y;
            _RESERVED_IDENTIFIER_FIXUP_3094.w = _RESERVED_IDENTIFIER_FIXUP_2184;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2231 = _RESERVED_IDENTIFIER_FIXUP_3077.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3107;
            _RESERVED_IDENTIFIER_FIXUP_3107.x = _RESERVED_IDENTIFIER_FIXUP_2231.x;
            _RESERVED_IDENTIFIER_FIXUP_3107.y = _RESERVED_IDENTIFIER_FIXUP_2231.y;
            _RESERVED_IDENTIFIER_FIXUP_3107.w = _RESERVED_IDENTIFIER_FIXUP_2184;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2260 = _RESERVED_IDENTIFIER_FIXUP_3077.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3120;
            _RESERVED_IDENTIFIER_FIXUP_3120.x = _RESERVED_IDENTIFIER_FIXUP_2260.x;
            _RESERVED_IDENTIFIER_FIXUP_3120.y = _RESERVED_IDENTIFIER_FIXUP_2260.y;
            _RESERVED_IDENTIFIER_FIXUP_3120.w = _RESERVED_IDENTIFIER_FIXUP_2184;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2153.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2153.w;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3081.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2184;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3094.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2184;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3107.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2184;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3120.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2184;
            float _RESERVED_IDENTIFIER_FIXUP_2282 = (((hdLod7(param_66, param_67).x + hdLod7(param_68, param_69).x) + hdLod7(param_70, param_71).x) + hdLod7(param_72, param_73).x) + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3077.z = _RESERVED_IDENTIFIER_FIXUP_2282;
            _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_2282 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3262 = _RESERVED_IDENTIFIER_FIXUP_3077;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3006 = _RESERVED_IDENTIFIER_FIXUP_3002;
            _RESERVED_IDENTIFIER_FIXUP_3006.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3006.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2298 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2302 = _RESERVED_IDENTIFIER_FIXUP_2298.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3274 = vec4(_RESERVED_IDENTIFIER_FIXUP_2298.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2302);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2313 = _RESERVED_IDENTIFIER_FIXUP_3274.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3275 = vec4(_RESERVED_IDENTIFIER_FIXUP_2313 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2302);
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2313;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2302;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3275.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2302;
            float _RESERVED_IDENTIFIER_FIXUP_2343 = hdLod8(param_76, param_77).x + hdLod8(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3033 = _RESERVED_IDENTIFIER_FIXUP_3274;
            _RESERVED_IDENTIFIER_FIXUP_3033.z = _RESERVED_IDENTIFIER_FIXUP_2343;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2350 = _RESERVED_IDENTIFIER_FIXUP_3033.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3035 = _RESERVED_IDENTIFIER_FIXUP_3275;
            _RESERVED_IDENTIFIER_FIXUP_3035.x = _RESERVED_IDENTIFIER_FIXUP_2350.x;
            _RESERVED_IDENTIFIER_FIXUP_3035.y = _RESERVED_IDENTIFIER_FIXUP_2350.y;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3035.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2302;
            float _RESERVED_IDENTIFIER_FIXUP_2365 = _RESERVED_IDENTIFIER_FIXUP_2343 + hdLod8(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3033.z = _RESERVED_IDENTIFIER_FIXUP_2365;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2372 = _RESERVED_IDENTIFIER_FIXUP_3033.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3044 = _RESERVED_IDENTIFIER_FIXUP_3035;
            _RESERVED_IDENTIFIER_FIXUP_3044.x = _RESERVED_IDENTIFIER_FIXUP_2372.x;
            _RESERVED_IDENTIFIER_FIXUP_3044.y = _RESERVED_IDENTIFIER_FIXUP_2372.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3044.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2302;
            float _RESERVED_IDENTIFIER_FIXUP_2387 = _RESERVED_IDENTIFIER_FIXUP_2365 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3033.z = _RESERVED_IDENTIFIER_FIXUP_2387;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2394 = _RESERVED_IDENTIFIER_FIXUP_3033.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3053 = _RESERVED_IDENTIFIER_FIXUP_3044;
            _RESERVED_IDENTIFIER_FIXUP_3053.x = _RESERVED_IDENTIFIER_FIXUP_2394.x;
            _RESERVED_IDENTIFIER_FIXUP_3053.y = _RESERVED_IDENTIFIER_FIXUP_2394.y;
            float _RESERVED_IDENTIFIER_FIXUP_2423 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3006.z = _RESERVED_IDENTIFIER_FIXUP_2423;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3053.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2302;
            float _RESERVED_IDENTIFIER_FIXUP_2428 = ((_RESERVED_IDENTIFIER_FIXUP_2387 + hdLod8(param_84, param_85).x) * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3006.w = _RESERVED_IDENTIFIER_FIXUP_2428;
            _RESERVED_IDENTIFIER_FIXUP_3006.y = (_RESERVED_IDENTIFIER_FIXUP_2423 * _RESERVED_IDENTIFIER_FIXUP_2428) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3262 = _RESERVED_IDENTIFIER_FIXUP_3006;
        }
        _RESERVED_IDENTIFIER_FIXUP_3261 = _RESERVED_IDENTIFIER_FIXUP_3262;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2443 = min(_RESERVED_IDENTIFIER_FIXUP_3261.y, _RESERVED_IDENTIFIER_FIXUP_3261.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3201 = _RESERVED_IDENTIFIER_FIXUP_3261;
    _RESERVED_IDENTIFIER_FIXUP_3201.x = (_RESERVED_IDENTIFIER_FIXUP_2443 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2454 = _RESERVED_IDENTIFIER_FIXUP_1810.xyz * _RESERVED_IDENTIFIER_FIXUP_3201.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3203 = _RESERVED_IDENTIFIER_FIXUP_3201;
    _RESERVED_IDENTIFIER_FIXUP_3203.x = _RESERVED_IDENTIFIER_FIXUP_2454.x;
    _RESERVED_IDENTIFIER_FIXUP_3203.y = _RESERVED_IDENTIFIER_FIXUP_2454.y;
    _RESERVED_IDENTIFIER_FIXUP_3203.z = _RESERVED_IDENTIFIER_FIXUP_2454.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2465 = _RESERVED_IDENTIFIER_FIXUP_3203.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3209 = _RESERVED_IDENTIFIER_FIXUP_3203;
    _RESERVED_IDENTIFIER_FIXUP_3209.x = _RESERVED_IDENTIFIER_FIXUP_2465.x;
    _RESERVED_IDENTIFIER_FIXUP_3209.y = _RESERVED_IDENTIFIER_FIXUP_2465.y;
    _RESERVED_IDENTIFIER_FIXUP_3209.z = _RESERVED_IDENTIFIER_FIXUP_2465.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2476 = _RESERVED_IDENTIFIER_FIXUP_3209.xyz + _RESERVED_IDENTIFIER_FIXUP_3209.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3215 = _RESERVED_IDENTIFIER_FIXUP_3209;
    _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_2476.x;
    _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_2476.y;
    _RESERVED_IDENTIFIER_FIXUP_3215.z = _RESERVED_IDENTIFIER_FIXUP_2476.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3276 = vec4(_RESERVED_IDENTIFIER_FIXUP_2443, _RESERVED_IDENTIFIER_FIXUP_1810.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2501 = (_RESERVED_IDENTIFIER_FIXUP_3276.yzw * _RESERVED_IDENTIFIER_FIXUP_3276.xxx) + _RESERVED_IDENTIFIER_FIXUP_3215.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3227 = _RESERVED_IDENTIFIER_FIXUP_3215;
    _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_2501.x;
    _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2501.y;
    _RESERVED_IDENTIFIER_FIXUP_3227.z = _RESERVED_IDENTIFIER_FIXUP_2501.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2514 = _RESERVED_IDENTIFIER_FIXUP_3227.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3233 = _RESERVED_IDENTIFIER_FIXUP_3227;
    _RESERVED_IDENTIFIER_FIXUP_3233.x = _RESERVED_IDENTIFIER_FIXUP_2514.x;
    _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_2514.y;
    _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_2514.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3233.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_888 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_897;
    if (_RESERVED_IDENTIFIER_FIXUP_888)
    {
        _RESERVED_IDENTIFIER_FIXUP_897 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_897 = _RESERVED_IDENTIFIER_FIXUP_888;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_897)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_934 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2903.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_961 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2579;
    if (_RESERVED_IDENTIFIER_FIXUP_934 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2579 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_934), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_961);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2579 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_961);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2579;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r1.xy;
        float param_4 = r1.w;
        r1 = hdLod5(param_3, param_4);
        vec2 hdB125 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB125.x;
        r0.z = hdB125.y;
        vec2 hdB147 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB147.x;
        r2.y = hdB147.y;
        vec2 hdB155 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB155.x;
        r2.w = hdB155.y;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r0.w = r1.x + r2.x;
        vec2 hdB178 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB178.x;
        r1.y = hdB178.y;
        vec2 hdB185 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB185.x;
        r1.w = hdB185.y;
        vec2 param_7 = r1.xy;
        float param_8 = r1.w;
        r1 = hdLod5(param_7, param_8);
        r0.w += r1.x;
        vec2 hdB208 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB208.x;
        r1.y = hdB208.y;
        vec2 hdB215 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB215.x;
        r1.w = hdB215.y;
        vec2 param_9 = r1.xy;
        float param_10 = r1.w;
        r1 = hdLod5(param_9, param_10);
        r0.w += r1.x;
        vec2 hdB238 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB238.x;
        r1.y = hdB238.y;
        vec2 hdB245 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB245.x;
        r1.w = hdB245.y;
        vec2 param_11 = r1.xy;
        float param_12 = r1.w;
        r1 = hdLod5(param_11, param_12);
        r0.y = r0.w + r1.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v5.x), abs(v5.y));
    if (r0.y < 1.0)
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = r1.xy;
        float param_14 = r1.w;
        r1 = hdLod6(param_13, param_14);
        vec2 hdB305 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB305.x;
        r0.z = hdB305.y;
        vec2 hdB315 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB315.x;
        r2.y = hdB315.y;
        vec2 hdB322 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB322.x;
        r2.w = hdB322.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod6(param_15, param_16);
        r0.w = r1.x + r2.x;
        vec2 hdB344 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB344.x;
        r1.y = hdB344.y;
        vec2 hdB351 = vec2(1.0, 0.0) * v5.zx;
        r1.z = hdB351.x;
        r1.w = hdB351.y;
        vec2 param_17 = r1.xy;
        float param_18 = r1.w;
        r1 = hdLod6(param_17, param_18);
        r0.w += r1.x;
        vec2 hdB373 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB373.x;
        r1.y = hdB373.y;
        vec2 hdB380 = vec2(1.0, 0.0) * v5.zx;
        r1.z = hdB380.x;
        r1.w = hdB380.y;
        vec2 param_19 = r1.xy;
        float param_20 = r1.w;
        r1 = hdLod6(param_19, param_20);
        r0.w += r1.x;
        vec2 hdB402 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB402.x;
        r1.y = hdB402.y;
        vec2 hdB409 = vec2(1.0, 0.0) * v5.zx;
        r1.z = hdB409.x;
        r1.w = hdB409.y;
        vec2 param_21 = r1.xy;
        float param_22 = r1.w;
        r1 = hdLod6(param_21, param_22);
        r0.y = r0.w + r1.x;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v6.x), abs(v6.y));
        if (r0.z < 1.0)
        {
            r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r1.xy;
            float param_24 = r1.w;
            r1 = hdLod7(param_23, param_24);
            vec2 hdB458 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB458.x;
            r0.w = hdB458.y;
            vec2 hdB468 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB468.x;
            r2.y = hdB468.y;
            vec2 hdB475 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB475.x;
            r2.w = hdB475.y;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod7(param_25, param_26);
            r1.x += r2.x;
            vec2 hdB497 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB497.x;
            r2.y = hdB497.y;
            vec2 hdB504 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB504.x;
            r2.w = hdB504.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod7(param_27, param_28);
            r1.x += r2.x;
            vec2 hdB526 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB526.x;
            r2.y = hdB526.y;
            vec2 hdB533 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB533.x;
            r2.w = hdB533.y;
            vec2 param_29 = r2.xy;
            float param_30 = r2.w;
            r2 = hdLod7(param_29, param_30);
            r1.x += r2.x;
            vec2 hdB555 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB555.x;
            r2.y = hdB555.y;
            vec2 hdB562 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB562.x;
            r2.w = hdB562.y;
            vec2 param_31 = r2.xy;
            float param_32 = r2.w;
            r2 = hdLod7(param_31, param_32);
            r0.z = r1.x + r2.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v4.w;
            r0.w = v5.w;
            vec2 hdB594 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = hdB594.x;
            r1.w = hdB594.y;
            r1.y = (v5.w * 0.5) + 0.5;
            r1.z = v6.w;
            vec2 param_33 = r1.xy;
            float param_34 = r1.w;
            r2 = hdLod8(param_33, param_34);
            vec2 hdB619 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB619.x;
            r4.y = hdB619.y;
            r4.z = r1.z;
            r4.w = r1.w;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r5 = hdLod8(param_35, param_36);
            r1.z = r2.x + r5.x;
            vec2 hdB647 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB647.x;
            r4.y = hdB647.y;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r2 = hdLod8(param_37, param_38);
            r1.z += r2.x;
            vec2 hdB669 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB669.x;
            r4.y = hdB669.y;
            vec2 param_39 = r4.xy;
            float param_40 = r4.w;
            r2 = hdLod8(param_39, param_40);
            r1.z += r2.x;
            vec2 hdB691 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB691.x;
            r4.y = hdB691.y;
            vec2 param_41 = r4.xy;
            float param_42 = r4.w;
            r2 = hdLod8(param_41, param_42);
            r1.x = r1.z + r2.x;
            r1.y = max(abs(r0.z), abs(r0.w));
            r0.z = clamp((r1.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.w = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.z * r0.w) + 1.0;
        }
    }
    r1.x = min(r0.y, r0.x);
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB752 = r0;
    vec3 hdB754 = r3.xyz * hdB752.xxx;
    r0.x = hdB754.x;
    r0.y = hdB754.y;
    r0.z = hdB754.z;
    vec4 hdB761 = r0;
    vec3 hdB765 = hdB761.xyz * v0.xyz;
    r0.x = hdB765.x;
    r0.y = hdB765.y;
    r0.z = hdB765.z;
    vec4 hdB772 = r0;
    vec4 hdB774 = r0;
    vec3 hdB776 = hdB772.xyz + hdB774.xyz;
    r0.x = hdB776.x;
    r0.y = hdB776.y;
    r0.z = hdB776.z;
    vec3 hdB787 = r3.www * v1.xyz;
    r1.y = hdB787.x;
    r1.z = hdB787.y;
    r1.w = hdB787.z;
    vec4 hdB799 = r0;
    vec3 hdB801 = (r1.yzw * r1.xxx) + hdB799.xyz;
    r0.x = hdB801.x;
    r0.y = hdB801.y;
    r0.z = hdB801.z;
    vec4 hdB808 = r0;
    vec3 hdB815 = hdB808.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB815.x;
    r0.y = hdB815.y;
    r0.z = hdB815.z;
    vec3 hdB830 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB830.x;
    oC0.y = hdB830.y;
    oC0.z = hdB830.z;
    oC0.w = 1.0;
    bool hdB843 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB851;
    if (hdB843)
    {
        hdB851 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB851 = hdB843;
    }
    if (hdB851)
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
    vec4 hdSaved1 = wxlAlbedo;
    vec4 hdSaved2 = wxlNormal;
    vec4 hdSaved3 = wxlLight;
    hdLow = vec4(0.0);
    hdHigh = vec4(0.0);
    bool _3008 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3018;
    if (_3008)
    {
        _3018 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3018 = _3008;
    }
    if (_3018)
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
        bool _3043 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3058;
        if (!_3043)
        {
            _3058 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3058 = _3043;
        }
        if (_3058)
        {
            tag = -tag;
        }
        vec3 hdStored = clamp(hdSaved0.xyz, vec3(0.0), vec3(1.0));
        hdLow = vec4(clamp(lo, vec3(0.0), vec3(1.0)) - hdStored, tag);
        hdHigh = vec4(clamp(hi, vec3(0.0), vec3(1.0)) - hdStored, tag);
    }
    oC0 = hdSaved0;
    wxlAlbedo = hdSaved1;
    wxlNormal = hdSaved2;
    wxlLight = hdSaved3;
    if (hdDiscardActual)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
