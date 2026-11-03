#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3415;
vec4 _RESERVED_IDENTIFIER_FIXUP_3416;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
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
    bool _58 = hdOverride >= 0;
    bool _78;
    if (_58)
    {
        _78 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _78 = _58;
    }
    vec4 _79;
    if (_78)
    {
        _79 = vec4(float(hdOverride));
    }
    else
    {
        _79 = value;
    }
    return _79;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _96 = hdOverride >= 0;
    bool _105;
    if (_96)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
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
    bool _163;
    if (_153)
    {
        _163 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _163 = _153;
    }
    vec4 _164;
    if (_163)
    {
        _164 = vec4(float(hdOverride));
    }
    else
    {
        _164 = value;
    }
    return _164;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _182 = hdOverride >= 0;
    bool _192;
    if (_182)
    {
        _192 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _192 = _182;
    }
    vec4 _193;
    if (_192)
    {
        _193 = vec4(float(hdOverride));
    }
    else
    {
        _193 = value;
    }
    return _193;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _211 = hdOverride >= 0;
    bool _221;
    if (_211)
    {
        _221 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _221 = _211;
    }
    vec4 _222;
    if (_221)
    {
        _222 = vec4(float(hdOverride));
    }
    else
    {
        _222 = value;
    }
    return _222;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1061 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1065 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1069 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1065.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2678 = _RESERVED_IDENTIFIER_FIXUP_1065;
    _RESERVED_IDENTIFIER_FIXUP_2678.x = _RESERVED_IDENTIFIER_FIXUP_1069;
    _RESERVED_IDENTIFIER_FIXUP_2678.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1069;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1079 = _RESERVED_IDENTIFIER_FIXUP_1061 * _RESERVED_IDENTIFIER_FIXUP_2678.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_1086 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2685 = _RESERVED_IDENTIFIER_FIXUP_2678;
    _RESERVED_IDENTIFIER_FIXUP_2685.x = _RESERVED_IDENTIFIER_FIXUP_1086;
    float _RESERVED_IDENTIFIER_FIXUP_1092 = clamp((_RESERVED_IDENTIFIER_FIXUP_1086 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2685.x = _RESERVED_IDENTIFIER_FIXUP_1092;
    float _RESERVED_IDENTIFIER_FIXUP_1098 = ((-_RESERVED_IDENTIFIER_FIXUP_1092) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2685.y = _RESERVED_IDENTIFIER_FIXUP_1098;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3418;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3417;
    if (_RESERVED_IDENTIFIER_FIXUP_1098 != (-_RESERVED_IDENTIFIER_FIXUP_1098))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1110 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2697 = _RESERVED_IDENTIFIER_FIXUP_2685;
        _RESERVED_IDENTIFIER_FIXUP_2697.y = _RESERVED_IDENTIFIER_FIXUP_1110.x;
        _RESERVED_IDENTIFIER_FIXUP_2697.z = _RESERVED_IDENTIFIER_FIXUP_1110.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_2697.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2701;
        _RESERVED_IDENTIFIER_FIXUP_2701.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
        _RESERVED_IDENTIFIER_FIXUP_2701.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1130 = _RESERVED_IDENTIFIER_FIXUP_2697.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2705;
        _RESERVED_IDENTIFIER_FIXUP_2705.x = _RESERVED_IDENTIFIER_FIXUP_1130.x;
        _RESERVED_IDENTIFIER_FIXUP_2705.y = _RESERVED_IDENTIFIER_FIXUP_1130.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1140 = _RESERVED_IDENTIFIER_FIXUP_2697.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2709;
        _RESERVED_IDENTIFIER_FIXUP_2709.x = _RESERVED_IDENTIFIER_FIXUP_1140.x;
        _RESERVED_IDENTIFIER_FIXUP_2709.y = _RESERVED_IDENTIFIER_FIXUP_1140.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1150 = _RESERVED_IDENTIFIER_FIXUP_2697.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2713;
        _RESERVED_IDENTIFIER_FIXUP_2713.x = _RESERVED_IDENTIFIER_FIXUP_1150.x;
        _RESERVED_IDENTIFIER_FIXUP_2713.y = _RESERVED_IDENTIFIER_FIXUP_1150.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1158 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1158.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1158.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1164 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_2701.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2705.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2709.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2713.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_2701.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1164.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2705.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1164.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2709.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1164.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1221 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1164 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2713.xy;
        float param_11 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1227 = hdLod5(param_10, param_11).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2697.y = _RESERVED_IDENTIFIER_FIXUP_1227;
        float _RESERVED_IDENTIFIER_FIXUP_1232 = float(_RESERVED_IDENTIFIER_FIXUP_1227 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2697.y = _RESERVED_IDENTIFIER_FIXUP_1232;
        float _RESERVED_IDENTIFIER_FIXUP_1235 = dot(_RESERVED_IDENTIFIER_FIXUP_1221, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2697.z = _RESERVED_IDENTIFIER_FIXUP_1235;
        float _RESERVED_IDENTIFIER_FIXUP_1241 = _RESERVED_IDENTIFIER_FIXUP_1232 + _RESERVED_IDENTIFIER_FIXUP_1235;
        _RESERVED_IDENTIFIER_FIXUP_2697.y = _RESERVED_IDENTIFIER_FIXUP_1241;
        float _RESERVED_IDENTIFIER_FIXUP_1246 = (_RESERVED_IDENTIFIER_FIXUP_1241 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2697.y = _RESERVED_IDENTIFIER_FIXUP_1246;
        _RESERVED_IDENTIFIER_FIXUP_2697.x = (_RESERVED_IDENTIFIER_FIXUP_1092 * _RESERVED_IDENTIFIER_FIXUP_1246) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3418 = _RESERVED_IDENTIFIER_FIXUP_1221;
        _RESERVED_IDENTIFIER_FIXUP_3417 = _RESERVED_IDENTIFIER_FIXUP_2697;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2695 = _RESERVED_IDENTIFIER_FIXUP_2685;
        _RESERVED_IDENTIFIER_FIXUP_2695.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3418 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_3417 = _RESERVED_IDENTIFIER_FIXUP_2695;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1264 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2769 = _RESERVED_IDENTIFIER_FIXUP_3417;
    _RESERVED_IDENTIFIER_FIXUP_2769.y = _RESERVED_IDENTIFIER_FIXUP_1264;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3421;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3419;
    if (_RESERVED_IDENTIFIER_FIXUP_1264 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1273 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2930 = _RESERVED_IDENTIFIER_FIXUP_2769;
        _RESERVED_IDENTIFIER_FIXUP_2930.y = _RESERVED_IDENTIFIER_FIXUP_1273.x;
        _RESERVED_IDENTIFIER_FIXUP_2930.z = _RESERVED_IDENTIFIER_FIXUP_1273.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_2930.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2934;
        _RESERVED_IDENTIFIER_FIXUP_2934.x = _RESERVED_IDENTIFIER_FIXUP_1283.x;
        _RESERVED_IDENTIFIER_FIXUP_2934.y = _RESERVED_IDENTIFIER_FIXUP_1283.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1293 = _RESERVED_IDENTIFIER_FIXUP_2930.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2938;
        _RESERVED_IDENTIFIER_FIXUP_2938.x = _RESERVED_IDENTIFIER_FIXUP_1293.x;
        _RESERVED_IDENTIFIER_FIXUP_2938.y = _RESERVED_IDENTIFIER_FIXUP_1293.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1303 = _RESERVED_IDENTIFIER_FIXUP_2930.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2942;
        _RESERVED_IDENTIFIER_FIXUP_2942.x = _RESERVED_IDENTIFIER_FIXUP_1303.x;
        _RESERVED_IDENTIFIER_FIXUP_2942.y = _RESERVED_IDENTIFIER_FIXUP_1303.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1313 = _RESERVED_IDENTIFIER_FIXUP_2930.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2946;
        _RESERVED_IDENTIFIER_FIXUP_2946.x = _RESERVED_IDENTIFIER_FIXUP_1313.x;
        _RESERVED_IDENTIFIER_FIXUP_2946.y = _RESERVED_IDENTIFIER_FIXUP_1313.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1321 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1321.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1321.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1327 = hdLod6(param_12, param_13);
        _RESERVED_IDENTIFIER_FIXUP_2934.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2938.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2942.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2946.w = 0.0;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_2934.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1327.y = hdLod6(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2938.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1327.z = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2942.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1327.w = hdLod6(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1384 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1327 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2946.xy;
        float param_21 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1390 = hdLod6(param_20, param_21).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2930.y = _RESERVED_IDENTIFIER_FIXUP_1390;
        float _RESERVED_IDENTIFIER_FIXUP_1395 = float(_RESERVED_IDENTIFIER_FIXUP_1390 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2930.y = _RESERVED_IDENTIFIER_FIXUP_1395;
        float _RESERVED_IDENTIFIER_FIXUP_1398 = dot(_RESERVED_IDENTIFIER_FIXUP_1384, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2930.z = _RESERVED_IDENTIFIER_FIXUP_1398;
        float _RESERVED_IDENTIFIER_FIXUP_1404 = _RESERVED_IDENTIFIER_FIXUP_1395 + _RESERVED_IDENTIFIER_FIXUP_1398;
        _RESERVED_IDENTIFIER_FIXUP_2930.y = _RESERVED_IDENTIFIER_FIXUP_1404;
        _RESERVED_IDENTIFIER_FIXUP_2930.y = _RESERVED_IDENTIFIER_FIXUP_1404 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3421 = _RESERVED_IDENTIFIER_FIXUP_1384;
        _RESERVED_IDENTIFIER_FIXUP_3419 = _RESERVED_IDENTIFIER_FIXUP_2930;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1417 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2774 = _RESERVED_IDENTIFIER_FIXUP_2769;
        _RESERVED_IDENTIFIER_FIXUP_2774.z = _RESERVED_IDENTIFIER_FIXUP_1417;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3422;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3420;
        if (_RESERVED_IDENTIFIER_FIXUP_1417 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1426 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2864 = _RESERVED_IDENTIFIER_FIXUP_2774;
            _RESERVED_IDENTIFIER_FIXUP_2864.z = _RESERVED_IDENTIFIER_FIXUP_1426.x;
            _RESERVED_IDENTIFIER_FIXUP_2864.w = _RESERVED_IDENTIFIER_FIXUP_1426.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1436 = _RESERVED_IDENTIFIER_FIXUP_2864.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2868;
            _RESERVED_IDENTIFIER_FIXUP_2868.x = _RESERVED_IDENTIFIER_FIXUP_1436.x;
            _RESERVED_IDENTIFIER_FIXUP_2868.y = _RESERVED_IDENTIFIER_FIXUP_1436.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_2864.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2872;
            _RESERVED_IDENTIFIER_FIXUP_2872.x = _RESERVED_IDENTIFIER_FIXUP_1446.x;
            _RESERVED_IDENTIFIER_FIXUP_2872.y = _RESERVED_IDENTIFIER_FIXUP_1446.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1456 = _RESERVED_IDENTIFIER_FIXUP_2864.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2876;
            _RESERVED_IDENTIFIER_FIXUP_2876.x = _RESERVED_IDENTIFIER_FIXUP_1456.x;
            _RESERVED_IDENTIFIER_FIXUP_2876.y = _RESERVED_IDENTIFIER_FIXUP_1456.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1466 = _RESERVED_IDENTIFIER_FIXUP_2864.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2880;
            _RESERVED_IDENTIFIER_FIXUP_2880.x = _RESERVED_IDENTIFIER_FIXUP_1466.x;
            _RESERVED_IDENTIFIER_FIXUP_2880.y = _RESERVED_IDENTIFIER_FIXUP_1466.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1474 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1474.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1474.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1480 = hdLod7(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_2868.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2872.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2876.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2880.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_2868.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1480.y = hdLod7(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2872.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1480.z = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2876.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1480.w = hdLod7(param_28, param_29).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1537 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1480 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2880.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1543 = hdLod7(param_30, param_31).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2864.z = _RESERVED_IDENTIFIER_FIXUP_1543;
            float _RESERVED_IDENTIFIER_FIXUP_1548 = float(_RESERVED_IDENTIFIER_FIXUP_1543 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2864.z = _RESERVED_IDENTIFIER_FIXUP_1548;
            float _RESERVED_IDENTIFIER_FIXUP_1551 = dot(_RESERVED_IDENTIFIER_FIXUP_1537, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2864.w = _RESERVED_IDENTIFIER_FIXUP_1551;
            float _RESERVED_IDENTIFIER_FIXUP_1557 = _RESERVED_IDENTIFIER_FIXUP_1548 + _RESERVED_IDENTIFIER_FIXUP_1551;
            _RESERVED_IDENTIFIER_FIXUP_2864.z = _RESERVED_IDENTIFIER_FIXUP_1557;
            _RESERVED_IDENTIFIER_FIXUP_2864.y = _RESERVED_IDENTIFIER_FIXUP_1557 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3422 = _RESERVED_IDENTIFIER_FIXUP_1537;
            _RESERVED_IDENTIFIER_FIXUP_3420 = _RESERVED_IDENTIFIER_FIXUP_2864;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2778 = _RESERVED_IDENTIFIER_FIXUP_3418;
            _RESERVED_IDENTIFIER_FIXUP_2778.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2778.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1573 = (_RESERVED_IDENTIFIER_FIXUP_2778.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2783;
            _RESERVED_IDENTIFIER_FIXUP_2783.x = _RESERVED_IDENTIFIER_FIXUP_1573.x;
            _RESERVED_IDENTIFIER_FIXUP_2783.y = _RESERVED_IDENTIFIER_FIXUP_1573.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1583 = _RESERVED_IDENTIFIER_FIXUP_2783.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2787;
            _RESERVED_IDENTIFIER_FIXUP_2787.x = _RESERVED_IDENTIFIER_FIXUP_1583.x;
            _RESERVED_IDENTIFIER_FIXUP_2787.y = _RESERVED_IDENTIFIER_FIXUP_1583.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1593 = _RESERVED_IDENTIFIER_FIXUP_2783.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2791;
            _RESERVED_IDENTIFIER_FIXUP_2791.x = _RESERVED_IDENTIFIER_FIXUP_1593.x;
            _RESERVED_IDENTIFIER_FIXUP_2791.y = _RESERVED_IDENTIFIER_FIXUP_1593.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1603 = _RESERVED_IDENTIFIER_FIXUP_2783.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2795;
            _RESERVED_IDENTIFIER_FIXUP_2795.x = _RESERVED_IDENTIFIER_FIXUP_1603.x;
            _RESERVED_IDENTIFIER_FIXUP_2795.y = _RESERVED_IDENTIFIER_FIXUP_1603.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1613 = _RESERVED_IDENTIFIER_FIXUP_2783.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2799;
            _RESERVED_IDENTIFIER_FIXUP_2799.x = _RESERVED_IDENTIFIER_FIXUP_1613.x;
            _RESERVED_IDENTIFIER_FIXUP_2799.y = _RESERVED_IDENTIFIER_FIXUP_1613.y;
            _RESERVED_IDENTIFIER_FIXUP_2783.w = 0.0;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2783.xy;
            float param_33 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1627 = hdLod8(param_32, param_33);
            _RESERVED_IDENTIFIER_FIXUP_2787.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2791.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2795.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2799.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_2787.xy;
            float param_35 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1627.y = hdLod8(param_34, param_35).x;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2791.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1627.z = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2795.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1627.w = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2799.xy;
            float param_41 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1690 = hdLod8(param_40, param_41).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2839 = _RESERVED_IDENTIFIER_FIXUP_2774;
            _RESERVED_IDENTIFIER_FIXUP_2839.z = _RESERVED_IDENTIFIER_FIXUP_1690;
            float _RESERVED_IDENTIFIER_FIXUP_1695 = float(_RESERVED_IDENTIFIER_FIXUP_1690 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2839.z = _RESERVED_IDENTIFIER_FIXUP_1695;
            float _RESERVED_IDENTIFIER_FIXUP_1698 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1627 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2839.w = _RESERVED_IDENTIFIER_FIXUP_1698;
            float _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_1695 + _RESERVED_IDENTIFIER_FIXUP_1698;
            _RESERVED_IDENTIFIER_FIXUP_2839.z = _RESERVED_IDENTIFIER_FIXUP_1704;
            float _RESERVED_IDENTIFIER_FIXUP_1712 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2839.w = _RESERVED_IDENTIFIER_FIXUP_1712;
            float _RESERVED_IDENTIFIER_FIXUP_1718 = clamp((_RESERVED_IDENTIFIER_FIXUP_1712 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2839.w = _RESERVED_IDENTIFIER_FIXUP_1718;
            float _RESERVED_IDENTIFIER_FIXUP_1723 = (_RESERVED_IDENTIFIER_FIXUP_1704 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2839.z = _RESERVED_IDENTIFIER_FIXUP_1723;
            _RESERVED_IDENTIFIER_FIXUP_2839.y = (_RESERVED_IDENTIFIER_FIXUP_1718 * _RESERVED_IDENTIFIER_FIXUP_1723) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3422 = _RESERVED_IDENTIFIER_FIXUP_2778;
            _RESERVED_IDENTIFIER_FIXUP_3420 = _RESERVED_IDENTIFIER_FIXUP_2839;
        }
        _RESERVED_IDENTIFIER_FIXUP_3421 = _RESERVED_IDENTIFIER_FIXUP_3422;
        _RESERVED_IDENTIFIER_FIXUP_3419 = _RESERVED_IDENTIFIER_FIXUP_3420;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1738 = min(_RESERVED_IDENTIFIER_FIXUP_3419.y, _RESERVED_IDENTIFIER_FIXUP_3419.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2998 = _RESERVED_IDENTIFIER_FIXUP_3421;
    _RESERVED_IDENTIFIER_FIXUP_2998.x = _RESERVED_IDENTIFIER_FIXUP_1738;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3001 = _RESERVED_IDENTIFIER_FIXUP_3419;
    _RESERVED_IDENTIFIER_FIXUP_3001.x = (_RESERVED_IDENTIFIER_FIXUP_1738 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1749 = _RESERVED_IDENTIFIER_FIXUP_1079.xyz * _RESERVED_IDENTIFIER_FIXUP_3001.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3003 = _RESERVED_IDENTIFIER_FIXUP_1079;
    _RESERVED_IDENTIFIER_FIXUP_3003.x = _RESERVED_IDENTIFIER_FIXUP_1749.x;
    _RESERVED_IDENTIFIER_FIXUP_3003.y = _RESERVED_IDENTIFIER_FIXUP_1749.y;
    _RESERVED_IDENTIFIER_FIXUP_3003.z = _RESERVED_IDENTIFIER_FIXUP_1749.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1760 = _RESERVED_IDENTIFIER_FIXUP_3003.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3415).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3009 = _RESERVED_IDENTIFIER_FIXUP_3003;
    _RESERVED_IDENTIFIER_FIXUP_3009.x = _RESERVED_IDENTIFIER_FIXUP_1760.x;
    _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1760.y;
    _RESERVED_IDENTIFIER_FIXUP_3009.z = _RESERVED_IDENTIFIER_FIXUP_1760.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1771 = _RESERVED_IDENTIFIER_FIXUP_3009.xyz + _RESERVED_IDENTIFIER_FIXUP_3009.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3015 = _RESERVED_IDENTIFIER_FIXUP_3009;
    _RESERVED_IDENTIFIER_FIXUP_3015.x = _RESERVED_IDENTIFIER_FIXUP_1771.x;
    _RESERVED_IDENTIFIER_FIXUP_3015.y = _RESERVED_IDENTIFIER_FIXUP_1771.y;
    _RESERVED_IDENTIFIER_FIXUP_3015.z = _RESERVED_IDENTIFIER_FIXUP_1771.z;
    _RESERVED_IDENTIFIER_FIXUP_3001.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3001.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3001.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1796 = (_RESERVED_IDENTIFIER_FIXUP_3001.xyz * _RESERVED_IDENTIFIER_FIXUP_2998.xxx) + _RESERVED_IDENTIFIER_FIXUP_3015.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3027 = _RESERVED_IDENTIFIER_FIXUP_3015;
    _RESERVED_IDENTIFIER_FIXUP_3027.x = _RESERVED_IDENTIFIER_FIXUP_1796.x;
    _RESERVED_IDENTIFIER_FIXUP_3027.y = _RESERVED_IDENTIFIER_FIXUP_1796.y;
    _RESERVED_IDENTIFIER_FIXUP_3027.z = _RESERVED_IDENTIFIER_FIXUP_1796.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1809 = _RESERVED_IDENTIFIER_FIXUP_3027.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3033 = _RESERVED_IDENTIFIER_FIXUP_3027;
    _RESERVED_IDENTIFIER_FIXUP_3033.x = _RESERVED_IDENTIFIER_FIXUP_1809.x;
    _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1809.y;
    _RESERVED_IDENTIFIER_FIXUP_3033.z = _RESERVED_IDENTIFIER_FIXUP_1809.z;
    vec2 param_42 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1864 = hdTex0(param_42);
    vec2 param_43 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1868 = hdTex1(param_43);
    float _RESERVED_IDENTIFIER_FIXUP_1872 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1868.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3047 = _RESERVED_IDENTIFIER_FIXUP_1868;
    _RESERVED_IDENTIFIER_FIXUP_3047.x = _RESERVED_IDENTIFIER_FIXUP_1872;
    _RESERVED_IDENTIFIER_FIXUP_3047.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1872;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1882 = _RESERVED_IDENTIFIER_FIXUP_1864 * _RESERVED_IDENTIFIER_FIXUP_3047.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3054 = _RESERVED_IDENTIFIER_FIXUP_3047;
    _RESERVED_IDENTIFIER_FIXUP_3054.x = _RESERVED_IDENTIFIER_FIXUP_1086;
    float _RESERVED_IDENTIFIER_FIXUP_1895 = clamp((_RESERVED_IDENTIFIER_FIXUP_1086 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3054.x = _RESERVED_IDENTIFIER_FIXUP_1895;
    float _RESERVED_IDENTIFIER_FIXUP_1901 = ((-_RESERVED_IDENTIFIER_FIXUP_1895) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3054.y = _RESERVED_IDENTIFIER_FIXUP_1901;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3430;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3429;
    if (_RESERVED_IDENTIFIER_FIXUP_1901 != (-_RESERVED_IDENTIFIER_FIXUP_1901))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1913 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3066 = _RESERVED_IDENTIFIER_FIXUP_3054;
        _RESERVED_IDENTIFIER_FIXUP_3066.y = _RESERVED_IDENTIFIER_FIXUP_1913.x;
        _RESERVED_IDENTIFIER_FIXUP_3066.z = _RESERVED_IDENTIFIER_FIXUP_1913.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1923 = _RESERVED_IDENTIFIER_FIXUP_3066.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3070;
        _RESERVED_IDENTIFIER_FIXUP_3070.x = _RESERVED_IDENTIFIER_FIXUP_1923.x;
        _RESERVED_IDENTIFIER_FIXUP_3070.y = _RESERVED_IDENTIFIER_FIXUP_1923.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1933 = _RESERVED_IDENTIFIER_FIXUP_3066.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3074;
        _RESERVED_IDENTIFIER_FIXUP_3074.x = _RESERVED_IDENTIFIER_FIXUP_1933.x;
        _RESERVED_IDENTIFIER_FIXUP_3074.y = _RESERVED_IDENTIFIER_FIXUP_1933.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1943 = _RESERVED_IDENTIFIER_FIXUP_3066.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3078;
        _RESERVED_IDENTIFIER_FIXUP_3078.x = _RESERVED_IDENTIFIER_FIXUP_1943.x;
        _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1943.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1953 = _RESERVED_IDENTIFIER_FIXUP_3066.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3082;
        _RESERVED_IDENTIFIER_FIXUP_3082.x = _RESERVED_IDENTIFIER_FIXUP_1953.x;
        _RESERVED_IDENTIFIER_FIXUP_3082.y = _RESERVED_IDENTIFIER_FIXUP_1953.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1961 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_1961.xy;
        float param_45 = _RESERVED_IDENTIFIER_FIXUP_1961.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1967 = hdLod5(param_44, param_45);
        _RESERVED_IDENTIFIER_FIXUP_3070.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3074.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3078.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3082.w = 0.0;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3070.xy;
        float param_47 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1967.y = hdLod5(param_46, param_47).x;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3074.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1967.z = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3078.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1967.w = hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2024 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1967 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3082.xy;
        float param_53 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2030 = hdLod5(param_52, param_53).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3066.y = _RESERVED_IDENTIFIER_FIXUP_2030;
        float _RESERVED_IDENTIFIER_FIXUP_2035 = float(_RESERVED_IDENTIFIER_FIXUP_2030 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3066.y = _RESERVED_IDENTIFIER_FIXUP_2035;
        float _RESERVED_IDENTIFIER_FIXUP_2038 = dot(_RESERVED_IDENTIFIER_FIXUP_2024, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3066.z = _RESERVED_IDENTIFIER_FIXUP_2038;
        float _RESERVED_IDENTIFIER_FIXUP_2044 = _RESERVED_IDENTIFIER_FIXUP_2035 + _RESERVED_IDENTIFIER_FIXUP_2038;
        _RESERVED_IDENTIFIER_FIXUP_3066.y = _RESERVED_IDENTIFIER_FIXUP_2044;
        float _RESERVED_IDENTIFIER_FIXUP_2049 = (_RESERVED_IDENTIFIER_FIXUP_2044 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3066.y = _RESERVED_IDENTIFIER_FIXUP_2049;
        _RESERVED_IDENTIFIER_FIXUP_3066.x = (_RESERVED_IDENTIFIER_FIXUP_1895 * _RESERVED_IDENTIFIER_FIXUP_2049) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3430 = _RESERVED_IDENTIFIER_FIXUP_2024;
        _RESERVED_IDENTIFIER_FIXUP_3429 = _RESERVED_IDENTIFIER_FIXUP_3066;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3064 = _RESERVED_IDENTIFIER_FIXUP_3054;
        _RESERVED_IDENTIFIER_FIXUP_3064.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3430 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_3429 = _RESERVED_IDENTIFIER_FIXUP_3064;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3138 = _RESERVED_IDENTIFIER_FIXUP_3429;
    _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_1264;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3433;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3431;
    if (_RESERVED_IDENTIFIER_FIXUP_1264 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2076 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3299 = _RESERVED_IDENTIFIER_FIXUP_3138;
        _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_2076.x;
        _RESERVED_IDENTIFIER_FIXUP_3299.z = _RESERVED_IDENTIFIER_FIXUP_2076.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2086 = _RESERVED_IDENTIFIER_FIXUP_3299.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3303;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_2086.x;
        _RESERVED_IDENTIFIER_FIXUP_3303.y = _RESERVED_IDENTIFIER_FIXUP_2086.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2096 = _RESERVED_IDENTIFIER_FIXUP_3299.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3307;
        _RESERVED_IDENTIFIER_FIXUP_3307.x = _RESERVED_IDENTIFIER_FIXUP_2096.x;
        _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_2096.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2106 = _RESERVED_IDENTIFIER_FIXUP_3299.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3311;
        _RESERVED_IDENTIFIER_FIXUP_3311.x = _RESERVED_IDENTIFIER_FIXUP_2106.x;
        _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_2106.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2116 = _RESERVED_IDENTIFIER_FIXUP_3299.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3315;
        _RESERVED_IDENTIFIER_FIXUP_3315.x = _RESERVED_IDENTIFIER_FIXUP_2116.x;
        _RESERVED_IDENTIFIER_FIXUP_3315.y = _RESERVED_IDENTIFIER_FIXUP_2116.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2124 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2124.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2124.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2130 = hdLod6(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3303.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3307.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3311.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3315.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3303.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2130.y = hdLod6(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3307.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2130.z = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3311.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2130.w = hdLod6(param_60, param_61).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2187 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2130 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3315.xy;
        float param_63 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2193 = hdLod6(param_62, param_63).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_2193;
        float _RESERVED_IDENTIFIER_FIXUP_2198 = float(_RESERVED_IDENTIFIER_FIXUP_2193 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_2198;
        float _RESERVED_IDENTIFIER_FIXUP_2201 = dot(_RESERVED_IDENTIFIER_FIXUP_2187, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3299.z = _RESERVED_IDENTIFIER_FIXUP_2201;
        float _RESERVED_IDENTIFIER_FIXUP_2207 = _RESERVED_IDENTIFIER_FIXUP_2198 + _RESERVED_IDENTIFIER_FIXUP_2201;
        _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_2207;
        _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_2207 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_2187;
        _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_3299;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2220 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3143 = _RESERVED_IDENTIFIER_FIXUP_3138;
        _RESERVED_IDENTIFIER_FIXUP_3143.z = _RESERVED_IDENTIFIER_FIXUP_2220;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3434;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3432;
        if (_RESERVED_IDENTIFIER_FIXUP_2220 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2229 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3233 = _RESERVED_IDENTIFIER_FIXUP_3143;
            _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_2229.x;
            _RESERVED_IDENTIFIER_FIXUP_3233.w = _RESERVED_IDENTIFIER_FIXUP_2229.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2239 = _RESERVED_IDENTIFIER_FIXUP_3233.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3237;
            _RESERVED_IDENTIFIER_FIXUP_3237.x = _RESERVED_IDENTIFIER_FIXUP_2239.x;
            _RESERVED_IDENTIFIER_FIXUP_3237.y = _RESERVED_IDENTIFIER_FIXUP_2239.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2249 = _RESERVED_IDENTIFIER_FIXUP_3233.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3241;
            _RESERVED_IDENTIFIER_FIXUP_3241.x = _RESERVED_IDENTIFIER_FIXUP_2249.x;
            _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_2249.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2259 = _RESERVED_IDENTIFIER_FIXUP_3233.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3245;
            _RESERVED_IDENTIFIER_FIXUP_3245.x = _RESERVED_IDENTIFIER_FIXUP_2259.x;
            _RESERVED_IDENTIFIER_FIXUP_3245.y = _RESERVED_IDENTIFIER_FIXUP_2259.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2269 = _RESERVED_IDENTIFIER_FIXUP_3233.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3249;
            _RESERVED_IDENTIFIER_FIXUP_3249.x = _RESERVED_IDENTIFIER_FIXUP_2269.x;
            _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_2269.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2277 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_2277.xy;
            float param_65 = _RESERVED_IDENTIFIER_FIXUP_2277.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2283 = hdLod7(param_64, param_65);
            _RESERVED_IDENTIFIER_FIXUP_3237.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3241.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3245.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3249.w = 0.0;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3237.xy;
            float param_67 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2283.y = hdLod7(param_66, param_67).x;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3241.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2283.z = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3245.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2283.w = hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2340 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2283 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3249.xy;
            float param_73 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2346 = hdLod7(param_72, param_73).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_2346;
            float _RESERVED_IDENTIFIER_FIXUP_2351 = float(_RESERVED_IDENTIFIER_FIXUP_2346 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_2351;
            float _RESERVED_IDENTIFIER_FIXUP_2354 = dot(_RESERVED_IDENTIFIER_FIXUP_2340, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3233.w = _RESERVED_IDENTIFIER_FIXUP_2354;
            float _RESERVED_IDENTIFIER_FIXUP_2360 = _RESERVED_IDENTIFIER_FIXUP_2351 + _RESERVED_IDENTIFIER_FIXUP_2354;
            _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_2360;
            _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_2360 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3434 = _RESERVED_IDENTIFIER_FIXUP_2340;
            _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_3233;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3147 = _RESERVED_IDENTIFIER_FIXUP_3430;
            _RESERVED_IDENTIFIER_FIXUP_3147.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3147.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2376 = (_RESERVED_IDENTIFIER_FIXUP_3147.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3152;
            _RESERVED_IDENTIFIER_FIXUP_3152.x = _RESERVED_IDENTIFIER_FIXUP_2376.x;
            _RESERVED_IDENTIFIER_FIXUP_3152.y = _RESERVED_IDENTIFIER_FIXUP_2376.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2386 = _RESERVED_IDENTIFIER_FIXUP_3152.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3156;
            _RESERVED_IDENTIFIER_FIXUP_3156.x = _RESERVED_IDENTIFIER_FIXUP_2386.x;
            _RESERVED_IDENTIFIER_FIXUP_3156.y = _RESERVED_IDENTIFIER_FIXUP_2386.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2396 = _RESERVED_IDENTIFIER_FIXUP_3152.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3160;
            _RESERVED_IDENTIFIER_FIXUP_3160.x = _RESERVED_IDENTIFIER_FIXUP_2396.x;
            _RESERVED_IDENTIFIER_FIXUP_3160.y = _RESERVED_IDENTIFIER_FIXUP_2396.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2406 = _RESERVED_IDENTIFIER_FIXUP_3152.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3164;
            _RESERVED_IDENTIFIER_FIXUP_3164.x = _RESERVED_IDENTIFIER_FIXUP_2406.x;
            _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_2406.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2416 = _RESERVED_IDENTIFIER_FIXUP_3152.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3168;
            _RESERVED_IDENTIFIER_FIXUP_3168.x = _RESERVED_IDENTIFIER_FIXUP_2416.x;
            _RESERVED_IDENTIFIER_FIXUP_3168.y = _RESERVED_IDENTIFIER_FIXUP_2416.y;
            _RESERVED_IDENTIFIER_FIXUP_3152.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3152.xy;
            float param_75 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2430 = hdLod8(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3156.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3160.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3164.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3168.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3156.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2430.y = hdLod8(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3160.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2430.z = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3164.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2430.w = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3168.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2493 = hdLod8(param_82, param_83).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3208 = _RESERVED_IDENTIFIER_FIXUP_3143;
            _RESERVED_IDENTIFIER_FIXUP_3208.z = _RESERVED_IDENTIFIER_FIXUP_2493;
            float _RESERVED_IDENTIFIER_FIXUP_2498 = float(_RESERVED_IDENTIFIER_FIXUP_2493 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3208.z = _RESERVED_IDENTIFIER_FIXUP_2498;
            float _RESERVED_IDENTIFIER_FIXUP_2501 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2430 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3208.w = _RESERVED_IDENTIFIER_FIXUP_2501;
            float _RESERVED_IDENTIFIER_FIXUP_2507 = _RESERVED_IDENTIFIER_FIXUP_2498 + _RESERVED_IDENTIFIER_FIXUP_2501;
            _RESERVED_IDENTIFIER_FIXUP_3208.z = _RESERVED_IDENTIFIER_FIXUP_2507;
            float _RESERVED_IDENTIFIER_FIXUP_2515 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3208.w = _RESERVED_IDENTIFIER_FIXUP_2515;
            float _RESERVED_IDENTIFIER_FIXUP_2521 = clamp((_RESERVED_IDENTIFIER_FIXUP_2515 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3208.w = _RESERVED_IDENTIFIER_FIXUP_2521;
            float _RESERVED_IDENTIFIER_FIXUP_2526 = (_RESERVED_IDENTIFIER_FIXUP_2507 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3208.z = _RESERVED_IDENTIFIER_FIXUP_2526;
            _RESERVED_IDENTIFIER_FIXUP_3208.y = (_RESERVED_IDENTIFIER_FIXUP_2521 * _RESERVED_IDENTIFIER_FIXUP_2526) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3434 = _RESERVED_IDENTIFIER_FIXUP_3147;
            _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_3208;
        }
        _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_3434;
        _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_3432;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2541 = min(_RESERVED_IDENTIFIER_FIXUP_3431.y, _RESERVED_IDENTIFIER_FIXUP_3431.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3367 = _RESERVED_IDENTIFIER_FIXUP_3433;
    _RESERVED_IDENTIFIER_FIXUP_3367.x = _RESERVED_IDENTIFIER_FIXUP_2541;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3370 = _RESERVED_IDENTIFIER_FIXUP_3431;
    _RESERVED_IDENTIFIER_FIXUP_3370.x = (_RESERVED_IDENTIFIER_FIXUP_2541 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2552 = _RESERVED_IDENTIFIER_FIXUP_1882.xyz * _RESERVED_IDENTIFIER_FIXUP_3370.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_1882;
    _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_2552.x;
    _RESERVED_IDENTIFIER_FIXUP_3372.y = _RESERVED_IDENTIFIER_FIXUP_2552.y;
    _RESERVED_IDENTIFIER_FIXUP_3372.z = _RESERVED_IDENTIFIER_FIXUP_2552.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2563 = _RESERVED_IDENTIFIER_FIXUP_3372.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3378 = _RESERVED_IDENTIFIER_FIXUP_3372;
    _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_2563.x;
    _RESERVED_IDENTIFIER_FIXUP_3378.y = _RESERVED_IDENTIFIER_FIXUP_2563.y;
    _RESERVED_IDENTIFIER_FIXUP_3378.z = _RESERVED_IDENTIFIER_FIXUP_2563.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2574 = _RESERVED_IDENTIFIER_FIXUP_3378.xyz + _RESERVED_IDENTIFIER_FIXUP_3378.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3384 = _RESERVED_IDENTIFIER_FIXUP_3378;
    _RESERVED_IDENTIFIER_FIXUP_3384.x = _RESERVED_IDENTIFIER_FIXUP_2574.x;
    _RESERVED_IDENTIFIER_FIXUP_3384.y = _RESERVED_IDENTIFIER_FIXUP_2574.y;
    _RESERVED_IDENTIFIER_FIXUP_3384.z = _RESERVED_IDENTIFIER_FIXUP_2574.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2585 = _RESERVED_IDENTIFIER_FIXUP_3384.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3370.x = _RESERVED_IDENTIFIER_FIXUP_2585.x;
    _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_2585.y;
    _RESERVED_IDENTIFIER_FIXUP_3370.z = _RESERVED_IDENTIFIER_FIXUP_2585.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2599 = (_RESERVED_IDENTIFIER_FIXUP_3370.xyz * _RESERVED_IDENTIFIER_FIXUP_3367.xxx) + _RESERVED_IDENTIFIER_FIXUP_3384.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3396 = _RESERVED_IDENTIFIER_FIXUP_3384;
    _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_2599.x;
    _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_2599.y;
    _RESERVED_IDENTIFIER_FIXUP_3396.z = _RESERVED_IDENTIFIER_FIXUP_2599.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2612 = _RESERVED_IDENTIFIER_FIXUP_3396.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_3396;
    _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_2612.x;
    _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2612.y;
    _RESERVED_IDENTIFIER_FIXUP_3402.z = _RESERVED_IDENTIFIER_FIXUP_2612.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3402.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_921 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_930;
    if (_RESERVED_IDENTIFIER_FIXUP_921)
    {
        _RESERVED_IDENTIFIER_FIXUP_930 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_930 = _RESERVED_IDENTIFIER_FIXUP_921;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_930)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_967 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3033.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_994 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2671;
    if (_RESERVED_IDENTIFIER_FIXUP_967 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2671 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_967), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_994);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2671 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_994);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2671;
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
    vec4 r6 = vec4(0.0);
    vec4 r7 = vec4(0.0);
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
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB119 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB119.x;
        r1.z = hdB119.y;
        vec2 hdB141 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB141.x;
        r2.y = hdB141.y;
        vec2 hdB152 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB152.x;
        r3.y = hdB152.y;
        vec2 hdB163 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB163.x;
        r4.y = hdB163.y;
        vec2 hdB174 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB174.x;
        r5.y = hdB174.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r6.xy;
        float param_3 = r6.w;
        r6 = hdLod5(param_2, param_3);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_8 = r4.xy;
        float param_9 = r4.w;
        r4 = hdLod5(param_8, param_9);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_10 = r5.xy;
        float param_11 = r5.w;
        r5 = hdLod5(param_10, param_11);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v5.x), abs(v5.y));
    if (r1.y < 1.0)
    {
        vec2 hdB305 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB305.x;
        r1.z = hdB305.y;
        vec2 hdB315 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB315.x;
        r2.y = hdB315.y;
        vec2 hdB325 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB325.x;
        r3.y = hdB325.y;
        vec2 hdB335 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB335.x;
        r4.y = hdB335.y;
        vec2 hdB345 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB345.x;
        r5.y = hdB345.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod6(param_12, param_13);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_18 = r4.xy;
        float param_19 = r4.w;
        r4 = hdLod6(param_18, param_19);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_20 = r5.xy;
        float param_21 = r5.w;
        r5 = hdLod6(param_20, param_21);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            vec2 hdB460 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB460.x;
            r1.w = hdB460.y;
            vec2 hdB470 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB470.x;
            r2.y = hdB470.y;
            vec2 hdB480 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB480.x;
            r3.y = hdB480.y;
            vec2 hdB490 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB490.x;
            r4.y = hdB490.y;
            vec2 hdB500 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB500.x;
            r5.y = hdB500.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r6.xy;
            float param_23 = r6.w;
            r6 = hdLod7(param_22, param_23);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_28 = r4.xy;
            float param_29 = r4.w;
            r4 = hdLod7(param_28, param_29);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_30 = r5.xy;
            float param_31 = r5.w;
            r5 = hdLod7(param_30, param_31);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v6.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v4.w;
            r2.y = v5.w;
            vec2 hdB608 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB608.x;
            r3.y = hdB608.y;
            vec2 hdB618 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB618.x;
            r4.y = hdB618.y;
            vec2 hdB628 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB628.x;
            r5.y = hdB628.y;
            vec2 hdB638 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB638.x;
            r6.y = hdB638.y;
            vec2 hdB648 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB648.x;
            r7.y = hdB648.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod8(param_32, param_33);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_34 = r4.xy;
            float param_35 = r4.w;
            r4 = hdLod8(param_34, param_35);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_36 = r5.xy;
            float param_37 = r5.w;
            r5 = hdLod8(param_36, param_37);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_38 = r6.xy;
            float param_39 = r6.w;
            r6 = hdLod8(param_38, param_39);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_40 = r7.xy;
            float param_41 = r7.w;
            r7 = hdLod8(param_40, param_41);
            r3.y = r4.x;
            r3.z = r5.x;
            r3.w = r6.x;
            r3 += (-v6.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v6.w);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r3, vec4(1.0));
            r1.z += r1.w;
            r1.w = max(abs(r2.x), abs(r2.y));
            r1.w = clamp((r1.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.z = (r1.z * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.w * r1.z) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB783 = r0;
    vec3 hdB787 = hdB783.xyz * r1.xxx;
    r0.x = hdB787.x;
    r0.y = hdB787.y;
    r0.z = hdB787.z;
    vec4 hdB794 = r0;
    vec3 hdB798 = hdB794.xyz * v0.xyz;
    r0.x = hdB798.x;
    r0.y = hdB798.y;
    r0.z = hdB798.z;
    vec4 hdB805 = r0;
    vec4 hdB807 = r0;
    vec3 hdB809 = hdB805.xyz + hdB807.xyz;
    r0.x = hdB809.x;
    r0.y = hdB809.y;
    r0.z = hdB809.z;
    vec3 hdB820 = r0.www * v1.xyz;
    r1.x = hdB820.x;
    r1.y = hdB820.y;
    r1.z = hdB820.z;
    vec4 hdB832 = r0;
    vec3 hdB834 = (r1.xyz * r2.xxx) + hdB832.xyz;
    r0.x = hdB834.x;
    r0.y = hdB834.y;
    r0.z = hdB834.z;
    vec4 hdB841 = r0;
    vec3 hdB848 = hdB841.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB848.x;
    r0.y = hdB848.y;
    r0.z = hdB848.z;
    vec3 hdB863 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB863.x;
    oC0.y = hdB863.y;
    oC0.z = hdB863.z;
    oC0.w = 1.0;
    bool hdB876 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB884;
    if (hdB876)
    {
        hdB884 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB884 = hdB876;
    }
    if (hdB884)
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
    bool _3006 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3016;
    if (_3006)
    {
        _3016 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 483u) != 0u;
    }
    else
    {
        _3016 = _3006;
    }
    if (_3016)
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
        bool _3041 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3056;
        if (!_3041)
        {
            _3056 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 483u) != 0u;
        }
        else
        {
            _3056 = _3041;
        }
        if (_3056)
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
