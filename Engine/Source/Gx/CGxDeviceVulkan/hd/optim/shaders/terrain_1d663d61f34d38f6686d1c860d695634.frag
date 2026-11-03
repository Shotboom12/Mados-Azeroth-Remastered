#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
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
float _RESERVED_IDENTIFIER_FIXUP_1471;
vec4 _RESERVED_IDENTIFIER_FIXUP_1472;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _43 = hdOverride >= 0;
    bool _62;
    if (_43)
    {
        _62 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _62 = _43;
    }
    vec4 _63;
    if (_62)
    {
        _63 = vec4(float(hdOverride));
    }
    else
    {
        _63 = value;
    }
    return _63;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _81 = hdOverride >= 0;
    bool _91;
    if (_81)
    {
        _91 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _91 = _81;
    }
    vec4 _92;
    if (_91)
    {
        _92 = vec4(float(hdOverride));
    }
    else
    {
        _92 = value;
    }
    return _92;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_565 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_569 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_576 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196 = _RESERVED_IDENTIFIER_FIXUP_569;
    _RESERVED_IDENTIFIER_FIXUP_1196.x = _RESERVED_IDENTIFIER_FIXUP_576;
    float _RESERVED_IDENTIFIER_FIXUP_582 = clamp((_RESERVED_IDENTIFIER_FIXUP_576 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1196.x = _RESERVED_IDENTIFIER_FIXUP_582;
    float _RESERVED_IDENTIFIER_FIXUP_588 = ((-_RESERVED_IDENTIFIER_FIXUP_582) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1196.y = _RESERVED_IDENTIFIER_FIXUP_588;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1474;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1473;
    if (_RESERVED_IDENTIFIER_FIXUP_588 != (-_RESERVED_IDENTIFIER_FIXUP_588))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_600 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_1196;
        _RESERVED_IDENTIFIER_FIXUP_1209.y = _RESERVED_IDENTIFIER_FIXUP_600.x;
        _RESERVED_IDENTIFIER_FIXUP_1209.z = _RESERVED_IDENTIFIER_FIXUP_600.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_610 = _RESERVED_IDENTIFIER_FIXUP_1209.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1213;
        _RESERVED_IDENTIFIER_FIXUP_1213.x = _RESERVED_IDENTIFIER_FIXUP_610.x;
        _RESERVED_IDENTIFIER_FIXUP_1213.y = _RESERVED_IDENTIFIER_FIXUP_610.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_620 = _RESERVED_IDENTIFIER_FIXUP_1209.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1217;
        _RESERVED_IDENTIFIER_FIXUP_1217.x = _RESERVED_IDENTIFIER_FIXUP_620.x;
        _RESERVED_IDENTIFIER_FIXUP_1217.y = _RESERVED_IDENTIFIER_FIXUP_620.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_630 = _RESERVED_IDENTIFIER_FIXUP_1209.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1221;
        _RESERVED_IDENTIFIER_FIXUP_1221.x = _RESERVED_IDENTIFIER_FIXUP_630.x;
        _RESERVED_IDENTIFIER_FIXUP_1221.y = _RESERVED_IDENTIFIER_FIXUP_630.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_1209.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1225;
        _RESERVED_IDENTIFIER_FIXUP_1225.x = _RESERVED_IDENTIFIER_FIXUP_640.x;
        _RESERVED_IDENTIFIER_FIXUP_1225.y = _RESERVED_IDENTIFIER_FIXUP_640.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_648 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_648.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_648.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_654 = hdLod5(param_1, param_2);
        _RESERVED_IDENTIFIER_FIXUP_1213.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1217.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1221.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1225.w = 0.0;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1213.xy;
        float param_4 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_654.y = hdLod5(param_3, param_4).x;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1217.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_654.z = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1221.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_654.w = hdLod5(param_7, param_8).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_711 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_654 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1225.xy;
        float param_10 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_717 = hdLod5(param_9, param_10).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1209.y = _RESERVED_IDENTIFIER_FIXUP_717;
        float _RESERVED_IDENTIFIER_FIXUP_722 = float(_RESERVED_IDENTIFIER_FIXUP_717 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1209.y = _RESERVED_IDENTIFIER_FIXUP_722;
        float _RESERVED_IDENTIFIER_FIXUP_725 = dot(_RESERVED_IDENTIFIER_FIXUP_711, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1209.z = _RESERVED_IDENTIFIER_FIXUP_725;
        float _RESERVED_IDENTIFIER_FIXUP_731 = _RESERVED_IDENTIFIER_FIXUP_722 + _RESERVED_IDENTIFIER_FIXUP_725;
        _RESERVED_IDENTIFIER_FIXUP_1209.y = _RESERVED_IDENTIFIER_FIXUP_731;
        float _RESERVED_IDENTIFIER_FIXUP_736 = (_RESERVED_IDENTIFIER_FIXUP_731 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1209.y = _RESERVED_IDENTIFIER_FIXUP_736;
        float _RESERVED_IDENTIFIER_FIXUP_743 = (_RESERVED_IDENTIFIER_FIXUP_582 * _RESERVED_IDENTIFIER_FIXUP_736) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1209.x = _RESERVED_IDENTIFIER_FIXUP_743;
        _RESERVED_IDENTIFIER_FIXUP_711.x = min(_RESERVED_IDENTIFIER_FIXUP_743, _RESERVED_IDENTIFIER_FIXUP_569.w);
        _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_1209;
        _RESERVED_IDENTIFIER_FIXUP_1473 = _RESERVED_IDENTIFIER_FIXUP_711;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1207 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1207.x = _RESERVED_IDENTIFIER_FIXUP_569.w;
        _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_1196;
        _RESERVED_IDENTIFIER_FIXUP_1473 = _RESERVED_IDENTIFIER_FIXUP_1207;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_1474;
    _RESERVED_IDENTIFIER_FIXUP_1286.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = _RESERVED_IDENTIFIER_FIXUP_565.xyz * _RESERVED_IDENTIFIER_FIXUP_1286.xxx;
    _RESERVED_IDENTIFIER_FIXUP_565.x = _RESERVED_IDENTIFIER_FIXUP_772.x;
    _RESERVED_IDENTIFIER_FIXUP_565.y = _RESERVED_IDENTIFIER_FIXUP_772.y;
    _RESERVED_IDENTIFIER_FIXUP_565.z = _RESERVED_IDENTIFIER_FIXUP_772.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_783 = _RESERVED_IDENTIFIER_FIXUP_565.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1471).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_565;
    _RESERVED_IDENTIFIER_FIXUP_1294.x = _RESERVED_IDENTIFIER_FIXUP_783.x;
    _RESERVED_IDENTIFIER_FIXUP_1294.y = _RESERVED_IDENTIFIER_FIXUP_783.y;
    _RESERVED_IDENTIFIER_FIXUP_1294.z = _RESERVED_IDENTIFIER_FIXUP_783.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_794 = _RESERVED_IDENTIFIER_FIXUP_1294.xyz + _RESERVED_IDENTIFIER_FIXUP_1294.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1300 = _RESERVED_IDENTIFIER_FIXUP_1294;
    _RESERVED_IDENTIFIER_FIXUP_1300.x = _RESERVED_IDENTIFIER_FIXUP_794.x;
    _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_794.y;
    _RESERVED_IDENTIFIER_FIXUP_1300.z = _RESERVED_IDENTIFIER_FIXUP_794.z;
    _RESERVED_IDENTIFIER_FIXUP_1286.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1286.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1286.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_819 = (_RESERVED_IDENTIFIER_FIXUP_1286.xyz * _RESERVED_IDENTIFIER_FIXUP_1473.xxx) + _RESERVED_IDENTIFIER_FIXUP_1300.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1300;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_819.x;
    _RESERVED_IDENTIFIER_FIXUP_1312.y = _RESERVED_IDENTIFIER_FIXUP_819.y;
    _RESERVED_IDENTIFIER_FIXUP_1312.z = _RESERVED_IDENTIFIER_FIXUP_819.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_832 = _RESERVED_IDENTIFIER_FIXUP_1312.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1318 = _RESERVED_IDENTIFIER_FIXUP_1312;
    _RESERVED_IDENTIFIER_FIXUP_1318.x = _RESERVED_IDENTIFIER_FIXUP_832.x;
    _RESERVED_IDENTIFIER_FIXUP_1318.y = _RESERVED_IDENTIFIER_FIXUP_832.y;
    _RESERVED_IDENTIFIER_FIXUP_1318.z = _RESERVED_IDENTIFIER_FIXUP_832.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_882 = OptTex0( texcoord0.xyz);
    vec2 param_11 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_886 = hdTex1(param_11);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_886;
    _RESERVED_IDENTIFIER_FIXUP_1334.x = _RESERVED_IDENTIFIER_FIXUP_576;
    float _RESERVED_IDENTIFIER_FIXUP_899 = clamp((_RESERVED_IDENTIFIER_FIXUP_576 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1334.x = _RESERVED_IDENTIFIER_FIXUP_899;
    float _RESERVED_IDENTIFIER_FIXUP_905 = ((-_RESERVED_IDENTIFIER_FIXUP_899) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1334.y = _RESERVED_IDENTIFIER_FIXUP_905;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1478;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1477;
    if (_RESERVED_IDENTIFIER_FIXUP_905 != (-_RESERVED_IDENTIFIER_FIXUP_905))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_917 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1334;
        _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_917.x;
        _RESERVED_IDENTIFIER_FIXUP_1347.z = _RESERVED_IDENTIFIER_FIXUP_917.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_927 = _RESERVED_IDENTIFIER_FIXUP_1347.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1351;
        _RESERVED_IDENTIFIER_FIXUP_1351.x = _RESERVED_IDENTIFIER_FIXUP_927.x;
        _RESERVED_IDENTIFIER_FIXUP_1351.y = _RESERVED_IDENTIFIER_FIXUP_927.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_937 = _RESERVED_IDENTIFIER_FIXUP_1347.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1355;
        _RESERVED_IDENTIFIER_FIXUP_1355.x = _RESERVED_IDENTIFIER_FIXUP_937.x;
        _RESERVED_IDENTIFIER_FIXUP_1355.y = _RESERVED_IDENTIFIER_FIXUP_937.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_947 = _RESERVED_IDENTIFIER_FIXUP_1347.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1359;
        _RESERVED_IDENTIFIER_FIXUP_1359.x = _RESERVED_IDENTIFIER_FIXUP_947.x;
        _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_947.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_957 = _RESERVED_IDENTIFIER_FIXUP_1347.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1363;
        _RESERVED_IDENTIFIER_FIXUP_1363.x = _RESERVED_IDENTIFIER_FIXUP_957.x;
        _RESERVED_IDENTIFIER_FIXUP_1363.y = _RESERVED_IDENTIFIER_FIXUP_957.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_965 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_965.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_965.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_971 = hdLod5(param_12, param_13);
        _RESERVED_IDENTIFIER_FIXUP_1351.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1355.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1359.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1363.w = 0.0;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1351.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_971.y = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1355.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_971.z = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1359.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_971.w = hdLod5(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1028 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_971 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1363.xy;
        float param_21 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1034 = hdLod5(param_20, param_21).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_1034;
        float _RESERVED_IDENTIFIER_FIXUP_1039 = float(_RESERVED_IDENTIFIER_FIXUP_1034 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_1039;
        float _RESERVED_IDENTIFIER_FIXUP_1042 = dot(_RESERVED_IDENTIFIER_FIXUP_1028, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1347.z = _RESERVED_IDENTIFIER_FIXUP_1042;
        float _RESERVED_IDENTIFIER_FIXUP_1048 = _RESERVED_IDENTIFIER_FIXUP_1039 + _RESERVED_IDENTIFIER_FIXUP_1042;
        _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_1048;
        float _RESERVED_IDENTIFIER_FIXUP_1053 = (_RESERVED_IDENTIFIER_FIXUP_1048 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_1053;
        float _RESERVED_IDENTIFIER_FIXUP_1060 = (_RESERVED_IDENTIFIER_FIXUP_899 * _RESERVED_IDENTIFIER_FIXUP_1053) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1347.x = _RESERVED_IDENTIFIER_FIXUP_1060;
        _RESERVED_IDENTIFIER_FIXUP_1028.x = min(_RESERVED_IDENTIFIER_FIXUP_1060, _RESERVED_IDENTIFIER_FIXUP_886.w);
        _RESERVED_IDENTIFIER_FIXUP_1478 = _RESERVED_IDENTIFIER_FIXUP_1347;
        _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_1028;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1345 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1345.x = _RESERVED_IDENTIFIER_FIXUP_886.w;
        _RESERVED_IDENTIFIER_FIXUP_1478 = _RESERVED_IDENTIFIER_FIXUP_1334;
        _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_1345;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1076 = (_RESERVED_IDENTIFIER_FIXUP_1477.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1422 = _RESERVED_IDENTIFIER_FIXUP_1478;
    _RESERVED_IDENTIFIER_FIXUP_1422.x = _RESERVED_IDENTIFIER_FIXUP_1076;
    _RESERVED_IDENTIFIER_FIXUP_1422.x = _RESERVED_IDENTIFIER_FIXUP_1076;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1089 = _RESERVED_IDENTIFIER_FIXUP_882.xyz * _RESERVED_IDENTIFIER_FIXUP_1422.xxx;
    _RESERVED_IDENTIFIER_FIXUP_882.x = _RESERVED_IDENTIFIER_FIXUP_1089.x;
    _RESERVED_IDENTIFIER_FIXUP_882.y = _RESERVED_IDENTIFIER_FIXUP_1089.y;
    _RESERVED_IDENTIFIER_FIXUP_882.z = _RESERVED_IDENTIFIER_FIXUP_1089.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1100 = _RESERVED_IDENTIFIER_FIXUP_882.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434 = _RESERVED_IDENTIFIER_FIXUP_882;
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_1100.x;
    _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_1100.y;
    _RESERVED_IDENTIFIER_FIXUP_1434.z = _RESERVED_IDENTIFIER_FIXUP_1100.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1111 = _RESERVED_IDENTIFIER_FIXUP_1434.xyz + _RESERVED_IDENTIFIER_FIXUP_1434.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1440 = _RESERVED_IDENTIFIER_FIXUP_1434;
    _RESERVED_IDENTIFIER_FIXUP_1440.x = _RESERVED_IDENTIFIER_FIXUP_1111.x;
    _RESERVED_IDENTIFIER_FIXUP_1440.y = _RESERVED_IDENTIFIER_FIXUP_1111.y;
    _RESERVED_IDENTIFIER_FIXUP_1440.z = _RESERVED_IDENTIFIER_FIXUP_1111.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1122 = _RESERVED_IDENTIFIER_FIXUP_1440.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1422.x = _RESERVED_IDENTIFIER_FIXUP_1122.x;
    _RESERVED_IDENTIFIER_FIXUP_1422.y = _RESERVED_IDENTIFIER_FIXUP_1122.y;
    _RESERVED_IDENTIFIER_FIXUP_1422.z = _RESERVED_IDENTIFIER_FIXUP_1122.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1136 = (_RESERVED_IDENTIFIER_FIXUP_1422.xyz * _RESERVED_IDENTIFIER_FIXUP_1477.xxx) + _RESERVED_IDENTIFIER_FIXUP_1440.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1452 = _RESERVED_IDENTIFIER_FIXUP_1440;
    _RESERVED_IDENTIFIER_FIXUP_1452.x = _RESERVED_IDENTIFIER_FIXUP_1136.x;
    _RESERVED_IDENTIFIER_FIXUP_1452.y = _RESERVED_IDENTIFIER_FIXUP_1136.y;
    _RESERVED_IDENTIFIER_FIXUP_1452.z = _RESERVED_IDENTIFIER_FIXUP_1136.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1149 = _RESERVED_IDENTIFIER_FIXUP_1452.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_1452;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_1149.x;
    _RESERVED_IDENTIFIER_FIXUP_1458.y = _RESERVED_IDENTIFIER_FIXUP_1149.y;
    _RESERVED_IDENTIFIER_FIXUP_1458.z = _RESERVED_IDENTIFIER_FIXUP_1149.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1458.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_430 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_439;
    if (_RESERVED_IDENTIFIER_FIXUP_430)
    {
        _RESERVED_IDENTIFIER_FIXUP_439 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_439 = _RESERVED_IDENTIFIER_FIXUP_430;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_439)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_476 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1318.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_503 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1186;
    if (_RESERVED_IDENTIFIER_FIXUP_476 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1186 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_476), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_503);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1186 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_503);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1186;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1076);
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
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB100 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB100.x;
        r1.z = hdB100.y;
        vec2 hdB122 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB122.x;
        r2.y = hdB122.y;
        vec2 hdB133 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB133.x;
        r3.y = hdB133.y;
        vec2 hdB144 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB144.x;
        r4.y = hdB144.y;
        vec2 hdB155 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB155.x;
        r5.y = hdB155.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r6.xy;
        float param_2 = r6.w;
        r6 = hdLod5(param_1, param_2);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_7 = r4.xy;
        float param_8 = r4.w;
        r4 = hdLod5(param_7, param_8);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_9 = r5.xy;
        float param_10 = r5.w;
        r5 = hdLod5(param_9, param_10);
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
        r2.x = min(r1.x, r1.w);
    }
    else
    {
        r2.x = r1.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB285 = r0;
    vec3 hdB289 = hdB285.xyz * r1.xxx;
    r0.x = hdB289.x;
    r0.y = hdB289.y;
    r0.z = hdB289.z;
    vec4 hdB296 = r0;
    vec3 hdB300 = hdB296.xyz * v0.xyz;
    r0.x = hdB300.x;
    r0.y = hdB300.y;
    r0.z = hdB300.z;
    vec4 hdB307 = r0;
    vec4 hdB309 = r0;
    vec3 hdB311 = hdB307.xyz + hdB309.xyz;
    r0.x = hdB311.x;
    r0.y = hdB311.y;
    r0.z = hdB311.z;
    vec3 hdB322 = r0.www * v1.xyz;
    r1.x = hdB322.x;
    r1.y = hdB322.y;
    r1.z = hdB322.z;
    vec4 hdB334 = r0;
    vec3 hdB336 = (r1.xyz * r2.xxx) + hdB334.xyz;
    r0.x = hdB336.x;
    r0.y = hdB336.y;
    r0.z = hdB336.z;
    vec4 hdB343 = r0;
    vec3 hdB350 = hdB343.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB350.x;
    r0.y = hdB350.y;
    r0.z = hdB350.z;
    vec3 hdB365 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB365.x;
    oC0.y = hdB365.y;
    oC0.z = hdB365.z;
    oC0.w = 1.0;
    bool hdB378 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB386;
    if (hdB378)
    {
        hdB386 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB386 = hdB378;
    }
    if (hdB386)
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
    bool _1300 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1310;
    if (_1300)
    {
        _1310 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1310 = _1300;
    }
    if (_1310)
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
        bool _1335 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1350;
        if (!_1335)
        {
            _1350 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1350 = _1335;
        }
        if (_1350)
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
