#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
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
float _RESERVED_IDENTIFIER_FIXUP_3740;
vec4 _RESERVED_IDENTIFIER_FIXUP_3741;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _52 = hdOverride >= 0;
    bool _72;
    if (_52)
    {
        _72 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _72 = _52;
    }
    vec4 _73;
    if (_72)
    {
        _73 = vec4(float(hdOverride));
    }
    else
    {
        _73 = value;
    }
    return _73;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _91 = hdOverride >= 0;
    bool _101;
    if (_91)
    {
        _101 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _101 = _91;
    }
    vec4 _102;
    if (_101)
    {
        _102 = vec4(float(hdOverride));
    }
    else
    {
        _102 = value;
    }
    return _102;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _120 = hdOverride >= 0;
    bool _130;
    if (_120)
    {
        _130 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _130 = _120;
    }
    vec4 _131;
    if (_130)
    {
        _131 = vec4(float(hdOverride));
    }
    else
    {
        _131 = value;
    }
    return _131;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _149 = hdOverride >= 0;
    bool _159;
    if (_149)
    {
        _159 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _159 = _149;
    }
    vec4 _160;
    if (_159)
    {
        _160 = vec4(float(hdOverride));
    }
    else
    {
        _160 = value;
    }
    return _160;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1147 = OptTex0( texcoord0.xyz);
    float _RESERVED_IDENTIFIER_FIXUP_1154 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2927 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2927.x = _RESERVED_IDENTIFIER_FIXUP_1154;
    float _RESERVED_IDENTIFIER_FIXUP_1160 = clamp((_RESERVED_IDENTIFIER_FIXUP_1154 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2927.x = _RESERVED_IDENTIFIER_FIXUP_1160;
    float _RESERVED_IDENTIFIER_FIXUP_1166 = ((-_RESERVED_IDENTIFIER_FIXUP_1160) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2927.x = _RESERVED_IDENTIFIER_FIXUP_1166;
    bool _RESERVED_IDENTIFIER_FIXUP_1173 = _RESERVED_IDENTIFIER_FIXUP_1166 != (-_RESERVED_IDENTIFIER_FIXUP_1166);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3742;
    if (_RESERVED_IDENTIFIER_FIXUP_1173)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1178 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3166;
        _RESERVED_IDENTIFIER_FIXUP_3166.x = _RESERVED_IDENTIFIER_FIXUP_1178.x;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_1178.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3170;
        _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_1188.x;
        _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1188.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3174;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1198.x;
        _RESERVED_IDENTIFIER_FIXUP_3174.y = _RESERVED_IDENTIFIER_FIXUP_1198.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1208 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3178;
        _RESERVED_IDENTIFIER_FIXUP_3178.x = _RESERVED_IDENTIFIER_FIXUP_1208.x;
        _RESERVED_IDENTIFIER_FIXUP_3178.y = _RESERVED_IDENTIFIER_FIXUP_1208.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1218 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3182;
        _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_1218.x;
        _RESERVED_IDENTIFIER_FIXUP_3182.y = _RESERVED_IDENTIFIER_FIXUP_1218.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3186;
        _RESERVED_IDENTIFIER_FIXUP_3186.x = _RESERVED_IDENTIFIER_FIXUP_1228.x;
        _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_1228.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3190;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1238.x;
        _RESERVED_IDENTIFIER_FIXUP_3190.y = _RESERVED_IDENTIFIER_FIXUP_1238.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1248 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3194;
        _RESERVED_IDENTIFIER_FIXUP_3194.x = _RESERVED_IDENTIFIER_FIXUP_1248.x;
        _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_1248.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3198;
        _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_1258.x;
        _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1258.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1266 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param = _RESERVED_IDENTIFIER_FIXUP_1266.xy;
        float param_1 = _RESERVED_IDENTIFIER_FIXUP_1266.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1272 = hdLod5(param, param_1);
        _RESERVED_IDENTIFIER_FIXUP_3170.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3174.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3178.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3182.w = 0.0;
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_3182.xy;
        float param_3 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_3186.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3190.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3194.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3198.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3198.xy;
        float param_5 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1352 = hdLod5(param_4, param_5);
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3170.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1272.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3174.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1272.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3178.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1272.w = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3186.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1312.y = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3190.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1312.z = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3194.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1312.w = hdLod5(param_16, param_17).x;
        float _RESERVED_IDENTIFIER_FIXUP_1392 = _RESERVED_IDENTIFIER_FIXUP_1352.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3263 = _RESERVED_IDENTIFIER_FIXUP_1352;
        _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_1392;
        float _RESERVED_IDENTIFIER_FIXUP_1397 = float(_RESERVED_IDENTIFIER_FIXUP_1392 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_1397;
        float _RESERVED_IDENTIFIER_FIXUP_1400 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1272 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_1400;
        float _RESERVED_IDENTIFIER_FIXUP_1403 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1312 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3263.z = _RESERVED_IDENTIFIER_FIXUP_1403;
        float _RESERVED_IDENTIFIER_FIXUP_1409 = _RESERVED_IDENTIFIER_FIXUP_1400 + _RESERVED_IDENTIFIER_FIXUP_1403;
        _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_1409;
        float _RESERVED_IDENTIFIER_FIXUP_1415 = _RESERVED_IDENTIFIER_FIXUP_1397 + _RESERVED_IDENTIFIER_FIXUP_1409;
        _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_1415;
        _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_1415 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3263;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1428 = max(abs(texcoord5.x), abs(texcoord5.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2939 = _RESERVED_IDENTIFIER_FIXUP_2927;
        _RESERVED_IDENTIFIER_FIXUP_2939.y = _RESERVED_IDENTIFIER_FIXUP_1428;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3743;
        if (_RESERVED_IDENTIFIER_FIXUP_1428 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1437 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3100 = _RESERVED_IDENTIFIER_FIXUP_2939;
            _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1437.x;
            _RESERVED_IDENTIFIER_FIXUP_3100.z = _RESERVED_IDENTIFIER_FIXUP_1437.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1447 = _RESERVED_IDENTIFIER_FIXUP_3100.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3104;
            _RESERVED_IDENTIFIER_FIXUP_3104.x = _RESERVED_IDENTIFIER_FIXUP_1447.x;
            _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_1447.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1457 = _RESERVED_IDENTIFIER_FIXUP_3100.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3108;
            _RESERVED_IDENTIFIER_FIXUP_3108.x = _RESERVED_IDENTIFIER_FIXUP_1457.x;
            _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_1457.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1467 = _RESERVED_IDENTIFIER_FIXUP_3100.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3112;
            _RESERVED_IDENTIFIER_FIXUP_3112.x = _RESERVED_IDENTIFIER_FIXUP_1467.x;
            _RESERVED_IDENTIFIER_FIXUP_3112.y = _RESERVED_IDENTIFIER_FIXUP_1467.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_3100.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3116;
            _RESERVED_IDENTIFIER_FIXUP_3116.x = _RESERVED_IDENTIFIER_FIXUP_1477.x;
            _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1477.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1485 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1485.xy;
            float param_19 = _RESERVED_IDENTIFIER_FIXUP_1485.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1491 = hdLod6(param_18, param_19);
            _RESERVED_IDENTIFIER_FIXUP_3104.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3108.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3112.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3116.w = 0.0;
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3104.xy;
            float param_21 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1491.y = hdLod6(param_20, param_21).x;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3108.xy;
            float param_23 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1491.z = hdLod6(param_22, param_23).x;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3112.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1491.w = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3116.xy;
            float param_27 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1554 = hdLod6(param_26, param_27).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1554;
            float _RESERVED_IDENTIFIER_FIXUP_1559 = float(_RESERVED_IDENTIFIER_FIXUP_1554 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1559;
            float _RESERVED_IDENTIFIER_FIXUP_1562 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1491 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3100.z = _RESERVED_IDENTIFIER_FIXUP_1562;
            float _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1559 + _RESERVED_IDENTIFIER_FIXUP_1562;
            _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1568;
            _RESERVED_IDENTIFIER_FIXUP_3100.x = _RESERVED_IDENTIFIER_FIXUP_1568 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3743 = _RESERVED_IDENTIFIER_FIXUP_3100;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1581 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2944 = _RESERVED_IDENTIFIER_FIXUP_2939;
            _RESERVED_IDENTIFIER_FIXUP_2944.y = _RESERVED_IDENTIFIER_FIXUP_1581;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3744;
            if (_RESERVED_IDENTIFIER_FIXUP_1581 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1590 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3034 = _RESERVED_IDENTIFIER_FIXUP_2944;
                _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1590.x;
                _RESERVED_IDENTIFIER_FIXUP_3034.z = _RESERVED_IDENTIFIER_FIXUP_1590.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1600 = _RESERVED_IDENTIFIER_FIXUP_3034.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3038;
                _RESERVED_IDENTIFIER_FIXUP_3038.x = _RESERVED_IDENTIFIER_FIXUP_1600.x;
                _RESERVED_IDENTIFIER_FIXUP_3038.y = _RESERVED_IDENTIFIER_FIXUP_1600.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1610 = _RESERVED_IDENTIFIER_FIXUP_3034.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3042;
                _RESERVED_IDENTIFIER_FIXUP_3042.x = _RESERVED_IDENTIFIER_FIXUP_1610.x;
                _RESERVED_IDENTIFIER_FIXUP_3042.y = _RESERVED_IDENTIFIER_FIXUP_1610.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1620 = _RESERVED_IDENTIFIER_FIXUP_3034.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3046;
                _RESERVED_IDENTIFIER_FIXUP_3046.x = _RESERVED_IDENTIFIER_FIXUP_1620.x;
                _RESERVED_IDENTIFIER_FIXUP_3046.y = _RESERVED_IDENTIFIER_FIXUP_1620.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1630 = _RESERVED_IDENTIFIER_FIXUP_3034.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3050;
                _RESERVED_IDENTIFIER_FIXUP_3050.x = _RESERVED_IDENTIFIER_FIXUP_1630.x;
                _RESERVED_IDENTIFIER_FIXUP_3050.y = _RESERVED_IDENTIFIER_FIXUP_1630.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1638 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_1638.xy;
                float param_29 = _RESERVED_IDENTIFIER_FIXUP_1638.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1644 = hdLod7(param_28, param_29);
                _RESERVED_IDENTIFIER_FIXUP_3038.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3042.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3046.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3050.w = 0.0;
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3038.xy;
                float param_31 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1644.y = hdLod7(param_30, param_31).x;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3042.xy;
                float param_33 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1644.z = hdLod7(param_32, param_33).x;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3046.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1644.w = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3050.xy;
                float param_37 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1707 = hdLod7(param_36, param_37).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1707;
                float _RESERVED_IDENTIFIER_FIXUP_1712 = float(_RESERVED_IDENTIFIER_FIXUP_1707 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1712;
                float _RESERVED_IDENTIFIER_FIXUP_1715 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1644 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3034.z = _RESERVED_IDENTIFIER_FIXUP_1715;
                float _RESERVED_IDENTIFIER_FIXUP_1721 = _RESERVED_IDENTIFIER_FIXUP_1712 + _RESERVED_IDENTIFIER_FIXUP_1715;
                _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1721;
                _RESERVED_IDENTIFIER_FIXUP_3034.x = _RESERVED_IDENTIFIER_FIXUP_1721 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3744 = _RESERVED_IDENTIFIER_FIXUP_3034;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2948 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_2948.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2948.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1737 = (_RESERVED_IDENTIFIER_FIXUP_2948.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_2953;
                _RESERVED_IDENTIFIER_FIXUP_2953.x = _RESERVED_IDENTIFIER_FIXUP_1737.x;
                _RESERVED_IDENTIFIER_FIXUP_2953.y = _RESERVED_IDENTIFIER_FIXUP_1737.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1747 = _RESERVED_IDENTIFIER_FIXUP_2953.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2957;
                _RESERVED_IDENTIFIER_FIXUP_2957.x = _RESERVED_IDENTIFIER_FIXUP_1747.x;
                _RESERVED_IDENTIFIER_FIXUP_2957.y = _RESERVED_IDENTIFIER_FIXUP_1747.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1757 = _RESERVED_IDENTIFIER_FIXUP_2953.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2961;
                _RESERVED_IDENTIFIER_FIXUP_2961.x = _RESERVED_IDENTIFIER_FIXUP_1757.x;
                _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1757.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1767 = _RESERVED_IDENTIFIER_FIXUP_2953.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2965;
                _RESERVED_IDENTIFIER_FIXUP_2965.x = _RESERVED_IDENTIFIER_FIXUP_1767.x;
                _RESERVED_IDENTIFIER_FIXUP_2965.y = _RESERVED_IDENTIFIER_FIXUP_1767.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1777 = _RESERVED_IDENTIFIER_FIXUP_2953.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2969;
                _RESERVED_IDENTIFIER_FIXUP_2969.x = _RESERVED_IDENTIFIER_FIXUP_1777.x;
                _RESERVED_IDENTIFIER_FIXUP_2969.y = _RESERVED_IDENTIFIER_FIXUP_1777.y;
                _RESERVED_IDENTIFIER_FIXUP_2953.w = 0.0;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2953.xy;
                float param_39 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1791 = hdLod8(param_38, param_39);
                _RESERVED_IDENTIFIER_FIXUP_2957.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2961.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2965.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2969.w = 0.0;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2957.xy;
                float param_41 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1791.y = hdLod8(param_40, param_41).x;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_2961.xy;
                float param_43 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1791.z = hdLod8(param_42, param_43).x;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_2965.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1791.w = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2969.xy;
                float param_47 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1854 = hdLod8(param_46, param_47).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3009 = _RESERVED_IDENTIFIER_FIXUP_2944;
                _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1854;
                float _RESERVED_IDENTIFIER_FIXUP_1859 = float(_RESERVED_IDENTIFIER_FIXUP_1854 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1859;
                float _RESERVED_IDENTIFIER_FIXUP_1862 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1791 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3009.z = _RESERVED_IDENTIFIER_FIXUP_1862;
                float _RESERVED_IDENTIFIER_FIXUP_1868 = _RESERVED_IDENTIFIER_FIXUP_1859 + _RESERVED_IDENTIFIER_FIXUP_1862;
                _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1868;
                float _RESERVED_IDENTIFIER_FIXUP_1876 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3009.z = _RESERVED_IDENTIFIER_FIXUP_1876;
                float _RESERVED_IDENTIFIER_FIXUP_1882 = clamp((_RESERVED_IDENTIFIER_FIXUP_1876 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3009.z = _RESERVED_IDENTIFIER_FIXUP_1882;
                float _RESERVED_IDENTIFIER_FIXUP_1887 = (_RESERVED_IDENTIFIER_FIXUP_1868 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1887;
                _RESERVED_IDENTIFIER_FIXUP_3009.x = (_RESERVED_IDENTIFIER_FIXUP_1882 * _RESERVED_IDENTIFIER_FIXUP_1887) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3744 = _RESERVED_IDENTIFIER_FIXUP_3009;
            }
            _RESERVED_IDENTIFIER_FIXUP_3743 = _RESERVED_IDENTIFIER_FIXUP_3744;
        }
        _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3743;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3286 = _RESERVED_IDENTIFIER_FIXUP_3742;
    _RESERVED_IDENTIFIER_FIXUP_3286.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1915 = _RESERVED_IDENTIFIER_FIXUP_1147.xyz * _RESERVED_IDENTIFIER_FIXUP_3286.yyy;
    _RESERVED_IDENTIFIER_FIXUP_1147.x = _RESERVED_IDENTIFIER_FIXUP_1915.x;
    _RESERVED_IDENTIFIER_FIXUP_1147.y = _RESERVED_IDENTIFIER_FIXUP_1915.y;
    _RESERVED_IDENTIFIER_FIXUP_1147.z = _RESERVED_IDENTIFIER_FIXUP_1915.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1926 = _RESERVED_IDENTIFIER_FIXUP_1147.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3740).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3294 = _RESERVED_IDENTIFIER_FIXUP_1147;
    _RESERVED_IDENTIFIER_FIXUP_3294.x = _RESERVED_IDENTIFIER_FIXUP_1926.x;
    _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_1926.y;
    _RESERVED_IDENTIFIER_FIXUP_3294.z = _RESERVED_IDENTIFIER_FIXUP_1926.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1937 = _RESERVED_IDENTIFIER_FIXUP_3294.xyz + _RESERVED_IDENTIFIER_FIXUP_3294.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3300 = _RESERVED_IDENTIFIER_FIXUP_3294;
    _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1937.x;
    _RESERVED_IDENTIFIER_FIXUP_3300.y = _RESERVED_IDENTIFIER_FIXUP_1937.y;
    _RESERVED_IDENTIFIER_FIXUP_3300.z = _RESERVED_IDENTIFIER_FIXUP_1937.z;
    _RESERVED_IDENTIFIER_FIXUP_3286.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3286.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3286.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1962 = (_RESERVED_IDENTIFIER_FIXUP_3286.yzw * _RESERVED_IDENTIFIER_FIXUP_3286.xxx) + _RESERVED_IDENTIFIER_FIXUP_3300.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3312 = _RESERVED_IDENTIFIER_FIXUP_3300;
    _RESERVED_IDENTIFIER_FIXUP_3312.x = _RESERVED_IDENTIFIER_FIXUP_1962.x;
    _RESERVED_IDENTIFIER_FIXUP_3312.y = _RESERVED_IDENTIFIER_FIXUP_1962.y;
    _RESERVED_IDENTIFIER_FIXUP_3312.z = _RESERVED_IDENTIFIER_FIXUP_1962.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1975 = _RESERVED_IDENTIFIER_FIXUP_3312.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3318 = _RESERVED_IDENTIFIER_FIXUP_3312;
    _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_1975.x;
    _RESERVED_IDENTIFIER_FIXUP_3318.y = _RESERVED_IDENTIFIER_FIXUP_1975.y;
    _RESERVED_IDENTIFIER_FIXUP_3318.z = _RESERVED_IDENTIFIER_FIXUP_1975.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2030 = OptTex0( texcoord0.xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3751;
    if (_RESERVED_IDENTIFIER_FIXUP_1173)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2061 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3573;
        _RESERVED_IDENTIFIER_FIXUP_3573.x = _RESERVED_IDENTIFIER_FIXUP_2061.x;
        _RESERVED_IDENTIFIER_FIXUP_3573.y = _RESERVED_IDENTIFIER_FIXUP_2061.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2071 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3577;
        _RESERVED_IDENTIFIER_FIXUP_3577.x = _RESERVED_IDENTIFIER_FIXUP_2071.x;
        _RESERVED_IDENTIFIER_FIXUP_3577.y = _RESERVED_IDENTIFIER_FIXUP_2071.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2081 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3581;
        _RESERVED_IDENTIFIER_FIXUP_3581.x = _RESERVED_IDENTIFIER_FIXUP_2081.x;
        _RESERVED_IDENTIFIER_FIXUP_3581.y = _RESERVED_IDENTIFIER_FIXUP_2081.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2091 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3585;
        _RESERVED_IDENTIFIER_FIXUP_3585.x = _RESERVED_IDENTIFIER_FIXUP_2091.x;
        _RESERVED_IDENTIFIER_FIXUP_3585.y = _RESERVED_IDENTIFIER_FIXUP_2091.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2101 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3589;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_2101.x;
        _RESERVED_IDENTIFIER_FIXUP_3589.y = _RESERVED_IDENTIFIER_FIXUP_2101.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2111 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3593;
        _RESERVED_IDENTIFIER_FIXUP_3593.x = _RESERVED_IDENTIFIER_FIXUP_2111.x;
        _RESERVED_IDENTIFIER_FIXUP_3593.y = _RESERVED_IDENTIFIER_FIXUP_2111.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2121 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3597;
        _RESERVED_IDENTIFIER_FIXUP_3597.x = _RESERVED_IDENTIFIER_FIXUP_2121.x;
        _RESERVED_IDENTIFIER_FIXUP_3597.y = _RESERVED_IDENTIFIER_FIXUP_2121.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2131 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3601;
        _RESERVED_IDENTIFIER_FIXUP_3601.x = _RESERVED_IDENTIFIER_FIXUP_2131.x;
        _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_2131.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2141 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3605;
        _RESERVED_IDENTIFIER_FIXUP_3605.x = _RESERVED_IDENTIFIER_FIXUP_2141.x;
        _RESERVED_IDENTIFIER_FIXUP_3605.y = _RESERVED_IDENTIFIER_FIXUP_2141.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2149 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2149.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2149.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2155 = hdLod5(param_48, param_49);
        _RESERVED_IDENTIFIER_FIXUP_3577.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3581.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3585.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3589.w = 0.0;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3589.xy;
        float param_51 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2195 = hdLod5(param_50, param_51);
        _RESERVED_IDENTIFIER_FIXUP_3593.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3597.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3601.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3605.w = 0.0;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3605.xy;
        float param_53 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2235 = hdLod5(param_52, param_53);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3577.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2155.y = hdLod5(param_54, param_55).x;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3581.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2155.z = hdLod5(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3585.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2155.w = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3593.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2195.y = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3597.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2195.z = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3601.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2195.w = hdLod5(param_64, param_65).x;
        float _RESERVED_IDENTIFIER_FIXUP_2275 = _RESERVED_IDENTIFIER_FIXUP_2235.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3670 = _RESERVED_IDENTIFIER_FIXUP_2235;
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2275;
        float _RESERVED_IDENTIFIER_FIXUP_2280 = float(_RESERVED_IDENTIFIER_FIXUP_2275 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2280;
        float _RESERVED_IDENTIFIER_FIXUP_2283 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2155 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_2283;
        float _RESERVED_IDENTIFIER_FIXUP_2286 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2195 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3670.z = _RESERVED_IDENTIFIER_FIXUP_2286;
        float _RESERVED_IDENTIFIER_FIXUP_2292 = _RESERVED_IDENTIFIER_FIXUP_2283 + _RESERVED_IDENTIFIER_FIXUP_2286;
        _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_2292;
        float _RESERVED_IDENTIFIER_FIXUP_2298 = _RESERVED_IDENTIFIER_FIXUP_2280 + _RESERVED_IDENTIFIER_FIXUP_2292;
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2298;
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2298 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3751 = _RESERVED_IDENTIFIER_FIXUP_3670;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2311 = max(abs(texcoord5.x), abs(texcoord5.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3346 = _RESERVED_IDENTIFIER_FIXUP_2927;
        _RESERVED_IDENTIFIER_FIXUP_3346.y = _RESERVED_IDENTIFIER_FIXUP_2311;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3752;
        if (_RESERVED_IDENTIFIER_FIXUP_2311 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2320 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3507 = _RESERVED_IDENTIFIER_FIXUP_3346;
            _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_2320.x;
            _RESERVED_IDENTIFIER_FIXUP_3507.z = _RESERVED_IDENTIFIER_FIXUP_2320.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2330 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3511;
            _RESERVED_IDENTIFIER_FIXUP_3511.x = _RESERVED_IDENTIFIER_FIXUP_2330.x;
            _RESERVED_IDENTIFIER_FIXUP_3511.y = _RESERVED_IDENTIFIER_FIXUP_2330.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2340 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3515;
            _RESERVED_IDENTIFIER_FIXUP_3515.x = _RESERVED_IDENTIFIER_FIXUP_2340.x;
            _RESERVED_IDENTIFIER_FIXUP_3515.y = _RESERVED_IDENTIFIER_FIXUP_2340.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2350 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3519;
            _RESERVED_IDENTIFIER_FIXUP_3519.x = _RESERVED_IDENTIFIER_FIXUP_2350.x;
            _RESERVED_IDENTIFIER_FIXUP_3519.y = _RESERVED_IDENTIFIER_FIXUP_2350.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2360 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3523;
            _RESERVED_IDENTIFIER_FIXUP_3523.x = _RESERVED_IDENTIFIER_FIXUP_2360.x;
            _RESERVED_IDENTIFIER_FIXUP_3523.y = _RESERVED_IDENTIFIER_FIXUP_2360.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2368 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2368.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2368.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2374 = hdLod6(param_66, param_67);
            _RESERVED_IDENTIFIER_FIXUP_3511.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3515.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3519.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3523.w = 0.0;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3511.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2374.y = hdLod6(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3515.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2374.z = hdLod6(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3519.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2374.w = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3523.xy;
            float param_75 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2437 = hdLod6(param_74, param_75).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_2437;
            float _RESERVED_IDENTIFIER_FIXUP_2442 = float(_RESERVED_IDENTIFIER_FIXUP_2437 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_2442;
            float _RESERVED_IDENTIFIER_FIXUP_2445 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2374 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3507.z = _RESERVED_IDENTIFIER_FIXUP_2445;
            float _RESERVED_IDENTIFIER_FIXUP_2451 = _RESERVED_IDENTIFIER_FIXUP_2442 + _RESERVED_IDENTIFIER_FIXUP_2445;
            _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_2451;
            _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2451 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3752 = _RESERVED_IDENTIFIER_FIXUP_3507;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2464 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3351 = _RESERVED_IDENTIFIER_FIXUP_3346;
            _RESERVED_IDENTIFIER_FIXUP_3351.y = _RESERVED_IDENTIFIER_FIXUP_2464;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3753;
            if (_RESERVED_IDENTIFIER_FIXUP_2464 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2473 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3441 = _RESERVED_IDENTIFIER_FIXUP_3351;
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_2473.x;
                _RESERVED_IDENTIFIER_FIXUP_3441.z = _RESERVED_IDENTIFIER_FIXUP_2473.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2483 = _RESERVED_IDENTIFIER_FIXUP_3441.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3445;
                _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_2483.x;
                _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2483.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2493 = _RESERVED_IDENTIFIER_FIXUP_3441.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3449;
                _RESERVED_IDENTIFIER_FIXUP_3449.x = _RESERVED_IDENTIFIER_FIXUP_2493.x;
                _RESERVED_IDENTIFIER_FIXUP_3449.y = _RESERVED_IDENTIFIER_FIXUP_2493.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2503 = _RESERVED_IDENTIFIER_FIXUP_3441.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3453;
                _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_2503.x;
                _RESERVED_IDENTIFIER_FIXUP_3453.y = _RESERVED_IDENTIFIER_FIXUP_2503.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2513 = _RESERVED_IDENTIFIER_FIXUP_3441.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3457;
                _RESERVED_IDENTIFIER_FIXUP_3457.x = _RESERVED_IDENTIFIER_FIXUP_2513.x;
                _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_2513.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2521 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2521.xy;
                float param_77 = _RESERVED_IDENTIFIER_FIXUP_2521.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2527 = hdLod7(param_76, param_77);
                _RESERVED_IDENTIFIER_FIXUP_3445.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3449.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3453.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3457.w = 0.0;
                vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3445.xy;
                float param_79 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2527.y = hdLod7(param_78, param_79).x;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3449.xy;
                float param_81 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2527.z = hdLod7(param_80, param_81).x;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3453.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2527.w = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3457.xy;
                float param_85 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2590 = hdLod7(param_84, param_85).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_2590;
                float _RESERVED_IDENTIFIER_FIXUP_2595 = float(_RESERVED_IDENTIFIER_FIXUP_2590 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_2595;
                float _RESERVED_IDENTIFIER_FIXUP_2598 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2527 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3441.z = _RESERVED_IDENTIFIER_FIXUP_2598;
                float _RESERVED_IDENTIFIER_FIXUP_2604 = _RESERVED_IDENTIFIER_FIXUP_2595 + _RESERVED_IDENTIFIER_FIXUP_2598;
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_2604;
                _RESERVED_IDENTIFIER_FIXUP_3441.x = _RESERVED_IDENTIFIER_FIXUP_2604 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3753 = _RESERVED_IDENTIFIER_FIXUP_3441;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3355 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_3355.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3355.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2620 = (_RESERVED_IDENTIFIER_FIXUP_3355.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3360;
                _RESERVED_IDENTIFIER_FIXUP_3360.x = _RESERVED_IDENTIFIER_FIXUP_2620.x;
                _RESERVED_IDENTIFIER_FIXUP_3360.y = _RESERVED_IDENTIFIER_FIXUP_2620.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2630 = _RESERVED_IDENTIFIER_FIXUP_3360.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3364;
                _RESERVED_IDENTIFIER_FIXUP_3364.x = _RESERVED_IDENTIFIER_FIXUP_2630.x;
                _RESERVED_IDENTIFIER_FIXUP_3364.y = _RESERVED_IDENTIFIER_FIXUP_2630.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2640 = _RESERVED_IDENTIFIER_FIXUP_3360.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3368;
                _RESERVED_IDENTIFIER_FIXUP_3368.x = _RESERVED_IDENTIFIER_FIXUP_2640.x;
                _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_2640.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2650 = _RESERVED_IDENTIFIER_FIXUP_3360.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3372;
                _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_2650.x;
                _RESERVED_IDENTIFIER_FIXUP_3372.y = _RESERVED_IDENTIFIER_FIXUP_2650.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2660 = _RESERVED_IDENTIFIER_FIXUP_3360.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3376;
                _RESERVED_IDENTIFIER_FIXUP_3376.x = _RESERVED_IDENTIFIER_FIXUP_2660.x;
                _RESERVED_IDENTIFIER_FIXUP_3376.y = _RESERVED_IDENTIFIER_FIXUP_2660.y;
                _RESERVED_IDENTIFIER_FIXUP_3360.w = 0.0;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3360.xy;
                float param_87 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2674 = hdLod8(param_86, param_87);
                _RESERVED_IDENTIFIER_FIXUP_3364.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3368.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3372.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3376.w = 0.0;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3364.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2674.y = hdLod8(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3368.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2674.z = hdLod8(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3372.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2674.w = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3376.xy;
                float param_95 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2737 = hdLod8(param_94, param_95).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3416 = _RESERVED_IDENTIFIER_FIXUP_3351;
                _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2737;
                float _RESERVED_IDENTIFIER_FIXUP_2742 = float(_RESERVED_IDENTIFIER_FIXUP_2737 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2742;
                float _RESERVED_IDENTIFIER_FIXUP_2745 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2674 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3416.z = _RESERVED_IDENTIFIER_FIXUP_2745;
                float _RESERVED_IDENTIFIER_FIXUP_2751 = _RESERVED_IDENTIFIER_FIXUP_2742 + _RESERVED_IDENTIFIER_FIXUP_2745;
                _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2751;
                float _RESERVED_IDENTIFIER_FIXUP_2759 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3416.z = _RESERVED_IDENTIFIER_FIXUP_2759;
                float _RESERVED_IDENTIFIER_FIXUP_2765 = clamp((_RESERVED_IDENTIFIER_FIXUP_2759 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3416.z = _RESERVED_IDENTIFIER_FIXUP_2765;
                float _RESERVED_IDENTIFIER_FIXUP_2770 = (_RESERVED_IDENTIFIER_FIXUP_2751 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2770;
                _RESERVED_IDENTIFIER_FIXUP_3416.x = (_RESERVED_IDENTIFIER_FIXUP_2765 * _RESERVED_IDENTIFIER_FIXUP_2770) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3753 = _RESERVED_IDENTIFIER_FIXUP_3416;
            }
            _RESERVED_IDENTIFIER_FIXUP_3752 = _RESERVED_IDENTIFIER_FIXUP_3753;
        }
        _RESERVED_IDENTIFIER_FIXUP_3751 = _RESERVED_IDENTIFIER_FIXUP_3752;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2785 = (_RESERVED_IDENTIFIER_FIXUP_3751.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3691 = _RESERVED_IDENTIFIER_FIXUP_3751;
    _RESERVED_IDENTIFIER_FIXUP_3691.y = _RESERVED_IDENTIFIER_FIXUP_2785;
    _RESERVED_IDENTIFIER_FIXUP_3691.y = _RESERVED_IDENTIFIER_FIXUP_2785;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2798 = _RESERVED_IDENTIFIER_FIXUP_2030.xyz * _RESERVED_IDENTIFIER_FIXUP_3691.yyy;
    _RESERVED_IDENTIFIER_FIXUP_2030.x = _RESERVED_IDENTIFIER_FIXUP_2798.x;
    _RESERVED_IDENTIFIER_FIXUP_2030.y = _RESERVED_IDENTIFIER_FIXUP_2798.y;
    _RESERVED_IDENTIFIER_FIXUP_2030.z = _RESERVED_IDENTIFIER_FIXUP_2798.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2809 = _RESERVED_IDENTIFIER_FIXUP_2030.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3703 = _RESERVED_IDENTIFIER_FIXUP_2030;
    _RESERVED_IDENTIFIER_FIXUP_3703.x = _RESERVED_IDENTIFIER_FIXUP_2809.x;
    _RESERVED_IDENTIFIER_FIXUP_3703.y = _RESERVED_IDENTIFIER_FIXUP_2809.y;
    _RESERVED_IDENTIFIER_FIXUP_3703.z = _RESERVED_IDENTIFIER_FIXUP_2809.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2820 = _RESERVED_IDENTIFIER_FIXUP_3703.xyz + _RESERVED_IDENTIFIER_FIXUP_3703.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3709 = _RESERVED_IDENTIFIER_FIXUP_3703;
    _RESERVED_IDENTIFIER_FIXUP_3709.x = _RESERVED_IDENTIFIER_FIXUP_2820.x;
    _RESERVED_IDENTIFIER_FIXUP_3709.y = _RESERVED_IDENTIFIER_FIXUP_2820.y;
    _RESERVED_IDENTIFIER_FIXUP_3709.z = _RESERVED_IDENTIFIER_FIXUP_2820.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2831 = _RESERVED_IDENTIFIER_FIXUP_3709.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3691.y = _RESERVED_IDENTIFIER_FIXUP_2831.x;
    _RESERVED_IDENTIFIER_FIXUP_3691.z = _RESERVED_IDENTIFIER_FIXUP_2831.y;
    _RESERVED_IDENTIFIER_FIXUP_3691.w = _RESERVED_IDENTIFIER_FIXUP_2831.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2845 = (_RESERVED_IDENTIFIER_FIXUP_3691.yzw * _RESERVED_IDENTIFIER_FIXUP_3691.xxx) + _RESERVED_IDENTIFIER_FIXUP_3709.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3721 = _RESERVED_IDENTIFIER_FIXUP_3709;
    _RESERVED_IDENTIFIER_FIXUP_3721.x = _RESERVED_IDENTIFIER_FIXUP_2845.x;
    _RESERVED_IDENTIFIER_FIXUP_3721.y = _RESERVED_IDENTIFIER_FIXUP_2845.y;
    _RESERVED_IDENTIFIER_FIXUP_3721.z = _RESERVED_IDENTIFIER_FIXUP_2845.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2858 = _RESERVED_IDENTIFIER_FIXUP_3721.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3727 = _RESERVED_IDENTIFIER_FIXUP_3721;
    _RESERVED_IDENTIFIER_FIXUP_3727.x = _RESERVED_IDENTIFIER_FIXUP_2858.x;
    _RESERVED_IDENTIFIER_FIXUP_3727.y = _RESERVED_IDENTIFIER_FIXUP_2858.y;
    _RESERVED_IDENTIFIER_FIXUP_3727.z = _RESERVED_IDENTIFIER_FIXUP_2858.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3727.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1006 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1015;
    if (_RESERVED_IDENTIFIER_FIXUP_1006)
    {
        _RESERVED_IDENTIFIER_FIXUP_1015 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1015 = _RESERVED_IDENTIFIER_FIXUP_1006;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1015)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1052 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3318.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1079 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2917;
    if (_RESERVED_IDENTIFIER_FIXUP_1052 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2917 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1052), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1079);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2917 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1079);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2917;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2785);
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
    vec4 r7 = vec4(0.0);
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord4;
    vec4 v4 = texcoord5;
    vec4 v5 = texcoord6;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1.x = max(abs(v3.x), abs(v3.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB98 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB98.x;
        r1.y = hdB98.y;
        vec2 hdB119 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB119.x;
        r2.y = hdB119.y;
        vec2 hdB130 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB130.x;
        r3.y = hdB130.y;
        vec2 hdB141 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB141.x;
        r4.y = hdB141.y;
        vec2 hdB152 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB152.x;
        r5.y = hdB152.y;
        vec2 hdB163 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB163.x;
        r6.y = hdB163.y;
        vec2 hdB174 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB174.x;
        r7.y = hdB174.y;
        vec2 hdB185 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB185.x;
        r8.y = hdB185.y;
        vec4 hdB190 = r1;
        vec2 hdB196 = hdB190.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB196.x;
        r1.y = hdB196.y;
        r9 = (v3.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param = r9.xy;
        float param_1 = r9.w;
        r9 = hdLod5(param, param_1);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_2 = r2.xy;
        float param_3 = r2.w;
        r2 = hdLod5(param_2, param_3);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_4 = r3.xy;
        float param_5 = r3.w;
        r3 = hdLod5(param_4, param_5);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_6 = r4.xy;
        float param_7 = r4.w;
        r4 = hdLod5(param_6, param_7);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_8 = r5.xy;
        float param_9 = r5.w;
        r5 = hdLod5(param_8, param_9);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_10 = r6.xy;
        float param_11 = r6.w;
        r6 = hdLod5(param_10, param_11);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_12 = r7.xy;
        float param_13 = r7.w;
        r7 = hdLod5(param_12, param_13);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_14 = r8.xy;
        float param_15 = r8.w;
        r8 = hdLod5(param_14, param_15);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_16 = r1.xy;
        float param_17 = r1.w;
        r1 = hdLod5(param_16, param_17);
        r9.y = r2.x;
        r9.z = r3.x;
        r9.w = r4.x;
        r2 = r9 + (-v3.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v3.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.x += (-v3.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v4.x), abs(v4.y));
        if (r1.y < 1.0)
        {
            vec2 hdB387 = (v4.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB387.x;
            r1.z = hdB387.y;
            vec2 hdB397 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB397.x;
            r2.y = hdB397.y;
            vec2 hdB407 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB407.x;
            r3.y = hdB407.y;
            vec2 hdB417 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB417.x;
            r4.y = hdB417.y;
            vec2 hdB427 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB427.x;
            r5.y = hdB427.y;
            r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_18 = r6.xy;
            float param_19 = r6.w;
            r6 = hdLod6(param_18, param_19);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_20 = r2.xy;
            float param_21 = r2.w;
            r2 = hdLod6(param_20, param_21);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_22 = r3.xy;
            float param_23 = r3.w;
            r3 = hdLod6(param_22, param_23);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_24 = r4.xy;
            float param_25 = r4.w;
            r4 = hdLod6(param_24, param_25);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_26 = r5.xy;
            float param_27 = r5.w;
            r5 = hdLod6(param_26, param_27);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v4.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v4.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v5.x), abs(v5.y));
            if (r1.y < 1.0)
            {
                vec2 hdB543 = (v5.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB543.x;
                r1.z = hdB543.y;
                vec2 hdB553 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB553.x;
                r2.y = hdB553.y;
                vec2 hdB563 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB563.x;
                r3.y = hdB563.y;
                vec2 hdB573 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB573.x;
                r4.y = hdB573.y;
                vec2 hdB583 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB583.x;
                r5.y = hdB583.y;
                r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_28 = r6.xy;
                float param_29 = r6.w;
                r6 = hdLod7(param_28, param_29);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_30 = r2.xy;
                float param_31 = r2.w;
                r2 = hdLod7(param_30, param_31);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_32 = r3.xy;
                float param_33 = r3.w;
                r3 = hdLod7(param_32, param_33);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_34 = r4.xy;
                float param_35 = r4.w;
                r4 = hdLod7(param_34, param_35);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_36 = r5.xy;
                float param_37 = r5.w;
                r5 = hdLod7(param_36, param_37);
                r6.y = r2.x;
                r6.z = r3.x;
                r6.w = r4.x;
                r2 = r6 + (-v5.zzzz);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r1.y = r5.x + (-v5.z);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r2, vec4(1.0));
                r1.y += r1.z;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v3.w;
                r2.y = v4.w;
                vec2 hdB691 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB691.x;
                r3.y = hdB691.y;
                vec2 hdB701 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB701.x;
                r4.y = hdB701.y;
                vec2 hdB711 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB711.x;
                r5.y = hdB711.y;
                vec2 hdB721 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB721.x;
                r6.y = hdB721.y;
                vec2 hdB731 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB731.x;
                r7.y = hdB731.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_38 = r3.xy;
                float param_39 = r3.w;
                r3 = hdLod8(param_38, param_39);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_40 = r4.xy;
                float param_41 = r4.w;
                r4 = hdLod8(param_40, param_41);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_42 = r5.xy;
                float param_43 = r5.w;
                r5 = hdLod8(param_42, param_43);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_44 = r6.xy;
                float param_45 = r6.w;
                r6 = hdLod8(param_44, param_45);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_46 = r7.xy;
                float param_47 = r7.w;
                r7 = hdLod8(param_46, param_47);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v5.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v5.w);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r3, vec4(1.0));
                r1.y += r1.z;
                r1.z = max(abs(r2.x), abs(r2.y));
                r1.z = clamp((r1.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.z * r1.y) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB861 = r0;
    vec3 hdB865 = hdB861.xyz * r1.yyy;
    r0.x = hdB865.x;
    r0.y = hdB865.y;
    r0.z = hdB865.z;
    vec4 hdB872 = r0;
    vec3 hdB876 = hdB872.xyz * v0.xyz;
    r0.x = hdB876.x;
    r0.y = hdB876.y;
    r0.z = hdB876.z;
    vec4 hdB883 = r0;
    vec4 hdB885 = r0;
    vec3 hdB887 = hdB883.xyz + hdB885.xyz;
    r0.x = hdB887.x;
    r0.y = hdB887.y;
    r0.z = hdB887.z;
    vec3 hdB898 = r0.www * v1.xyz;
    r1.y = hdB898.x;
    r1.z = hdB898.y;
    r1.w = hdB898.z;
    vec4 hdB910 = r0;
    vec3 hdB912 = (r1.yzw * r1.xxx) + hdB910.xyz;
    r0.x = hdB912.x;
    r0.y = hdB912.y;
    r0.z = hdB912.z;
    vec4 hdB919 = r0;
    vec3 hdB926 = hdB919.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB926.x;
    r0.y = hdB926.y;
    r0.z = hdB926.z;
    vec3 hdB941 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB941.x;
    oC0.y = hdB941.y;
    oC0.z = hdB941.z;
    oC0.w = 1.0;
    bool hdB954 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB962;
    if (hdB954)
    {
        hdB962 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB962 = hdB954;
    }
    if (hdB962)
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
    bool _3118 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3128;
    if (_3118)
    {
        _3128 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 480u) != 0u;
    }
    else
    {
        _3128 = _3118;
    }
    if (_3128)
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
        bool _3153 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3168;
        if (!_3153)
        {
            _3168 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 480u) != 0u;
        }
        else
        {
            _3168 = _3153;
        }
        if (_3168)
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
