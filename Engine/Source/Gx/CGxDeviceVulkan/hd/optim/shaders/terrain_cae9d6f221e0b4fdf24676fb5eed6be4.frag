#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1657;
vec4 _RESERVED_IDENTIFIER_FIXUP_1658;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _50 = hdOverride >= 0;
    bool _70;
    if (_50)
    {
        _70 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _70 = _50;
    }
    vec4 _71;
    if (_70)
    {
        _71 = vec4(float(hdOverride));
    }
    else
    {
        _71 = value;
    }
    return _71;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _88 = hdOverride >= 0;
    bool _98;
    if (_88)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _98 = _88;
    }
    vec4 _99;
    if (_98)
    {
        _99 = vec4(float(hdOverride));
    }
    else
    {
        _99 = value;
    }
    return _99;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _116 = hdOverride >= 0;
    bool _125;
    if (_116)
    {
        _125 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _125 = _116;
    }
    vec4 _126;
    if (_125)
    {
        _126 = vec4(float(hdOverride));
    }
    else
    {
        _126 = value;
    }
    return _126;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _153 = _143;
    }
    vec4 _154;
    if (_153)
    {
        _154 = vec4(float(hdOverride));
    }
    else
    {
        _154 = value;
    }
    return _154;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_617 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_620 = _RESERVED_IDENTIFIER_FIXUP_617.xy;
    float _RESERVED_IDENTIFIER_FIXUP_622 = _RESERVED_IDENTIFIER_FIXUP_617.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_620;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_622;
    vec4 _RESERVED_IDENTIFIER_FIXUP_623 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1345;
    _RESERVED_IDENTIFIER_FIXUP_1345.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_631 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347;
    _RESERVED_IDENTIFIER_FIXUP_1347.x = _RESERVED_IDENTIFIER_FIXUP_631.x;
    _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_631.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_1347.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1351 = _RESERVED_IDENTIFIER_FIXUP_1345;
    _RESERVED_IDENTIFIER_FIXUP_1351.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
    _RESERVED_IDENTIFIER_FIXUP_1351.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1351.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_623.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_664 = _RESERVED_IDENTIFIER_FIXUP_1347.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1363 = _RESERVED_IDENTIFIER_FIXUP_1345;
    _RESERVED_IDENTIFIER_FIXUP_1363.x = _RESERVED_IDENTIFIER_FIXUP_664.x;
    _RESERVED_IDENTIFIER_FIXUP_1363.y = _RESERVED_IDENTIFIER_FIXUP_664.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1363.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_623.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_683 = _RESERVED_IDENTIFIER_FIXUP_1347.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1371;
    _RESERVED_IDENTIFIER_FIXUP_1371.x = _RESERVED_IDENTIFIER_FIXUP_683.x;
    _RESERVED_IDENTIFIER_FIXUP_1371.y = _RESERVED_IDENTIFIER_FIXUP_683.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_693 = _RESERVED_IDENTIFIER_FIXUP_1347.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_693.x;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_693.y;
    _RESERVED_IDENTIFIER_FIXUP_1371.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1371.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_623.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1375.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_761 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_779 = hdTex2(param_8);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1426;
    _RESERVED_IDENTIFIER_FIXUP_1426.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_779.xyz, vec3(1.0)), 0.0, 1.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_799 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_801 = _RESERVED_IDENTIFIER_FIXUP_799.x;
    _RESERVED_IDENTIFIER_FIXUP_1426.y = _RESERVED_IDENTIFIER_FIXUP_801;
    float _RESERVED_IDENTIFIER_FIXUP_803 = _RESERVED_IDENTIFIER_FIXUP_799.y;
    _RESERVED_IDENTIFIER_FIXUP_1426.z = _RESERVED_IDENTIFIER_FIXUP_803;
    vec3 _RESERVED_IDENTIFIER_FIXUP_805 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1657).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_808 = _RESERVED_IDENTIFIER_FIXUP_805 + _RESERVED_IDENTIFIER_FIXUP_805;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_779;
    _RESERVED_IDENTIFIER_FIXUP_1432.y = _RESERVED_IDENTIFIER_FIXUP_808.x;
    _RESERVED_IDENTIFIER_FIXUP_1432.z = _RESERVED_IDENTIFIER_FIXUP_808.y;
    _RESERVED_IDENTIFIER_FIXUP_1432.w = _RESERVED_IDENTIFIER_FIXUP_808.z;
    vec2 param_9 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_822 = hdTex1(param_9).xyz;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1375.xy;
    float param_11 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1659 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_761 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_623 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_10, param_11).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_779.w), _RESERVED_IDENTIFIER_FIXUP_1432.yzw * _RESERVED_IDENTIFIER_FIXUP_822);
    vec3 _RESERVED_IDENTIFIER_FIXUP_838 = mix(_RESERVED_IDENTIFIER_FIXUP_1659.yzw, _RESERVED_IDENTIFIER_FIXUP_822, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1426.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1444;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_838.x;
    _RESERVED_IDENTIFIER_FIXUP_1444.y = _RESERVED_IDENTIFIER_FIXUP_838.y;
    _RESERVED_IDENTIFIER_FIXUP_1444.z = _RESERVED_IDENTIFIER_FIXUP_838.z;
    vec2 param_12 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_856 = hdTex0(param_12).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_857 = _RESERVED_IDENTIFIER_FIXUP_1432.yzw * _RESERVED_IDENTIFIER_FIXUP_856;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450;
    _RESERVED_IDENTIFIER_FIXUP_1450.x = _RESERVED_IDENTIFIER_FIXUP_857.x;
    _RESERVED_IDENTIFIER_FIXUP_1450.y = _RESERVED_IDENTIFIER_FIXUP_857.y;
    _RESERVED_IDENTIFIER_FIXUP_1450.z = _RESERVED_IDENTIFIER_FIXUP_857.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_872 = mix(_RESERVED_IDENTIFIER_FIXUP_1450.xyz, _RESERVED_IDENTIFIER_FIXUP_856, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1426.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1456;
    _RESERVED_IDENTIFIER_FIXUP_1456.x = _RESERVED_IDENTIFIER_FIXUP_872.x;
    _RESERVED_IDENTIFIER_FIXUP_1456.y = _RESERVED_IDENTIFIER_FIXUP_872.y;
    _RESERVED_IDENTIFIER_FIXUP_1456.z = _RESERVED_IDENTIFIER_FIXUP_872.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_884 = (_RESERVED_IDENTIFIER_FIXUP_1456 * _RESERVED_IDENTIFIER_FIXUP_1426.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_1432.xxxx * _RESERVED_IDENTIFIER_FIXUP_1444);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1462;
    _RESERVED_IDENTIFIER_FIXUP_1462.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1462.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1462.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_900 = _RESERVED_IDENTIFIER_FIXUP_1659.xxx * _RESERVED_IDENTIFIER_FIXUP_1462.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1468;
    _RESERVED_IDENTIFIER_FIXUP_1468.x = _RESERVED_IDENTIFIER_FIXUP_900.x;
    _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_900.y;
    _RESERVED_IDENTIFIER_FIXUP_1468.z = _RESERVED_IDENTIFIER_FIXUP_900.z;
    _RESERVED_IDENTIFIER_FIXUP_884.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_926 = (_RESERVED_IDENTIFIER_FIXUP_884.xyz * _RESERVED_IDENTIFIER_FIXUP_884.www) + _RESERVED_IDENTIFIER_FIXUP_1468.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1479;
    _RESERVED_IDENTIFIER_FIXUP_1479.x = _RESERVED_IDENTIFIER_FIXUP_926.x;
    _RESERVED_IDENTIFIER_FIXUP_1479.y = _RESERVED_IDENTIFIER_FIXUP_926.y;
    _RESERVED_IDENTIFIER_FIXUP_1479.z = _RESERVED_IDENTIFIER_FIXUP_926.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_939 = _RESERVED_IDENTIFIER_FIXUP_1479.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1485;
    _RESERVED_IDENTIFIER_FIXUP_1485.x = _RESERVED_IDENTIFIER_FIXUP_939.x;
    _RESERVED_IDENTIFIER_FIXUP_1485.y = _RESERVED_IDENTIFIER_FIXUP_939.y;
    _RESERVED_IDENTIFIER_FIXUP_1485.z = _RESERVED_IDENTIFIER_FIXUP_939.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_954 = _RESERVED_IDENTIFIER_FIXUP_1485.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1491;
    _RESERVED_IDENTIFIER_FIXUP_1491.x = _RESERVED_IDENTIFIER_FIXUP_954.x;
    _RESERVED_IDENTIFIER_FIXUP_1491.y = _RESERVED_IDENTIFIER_FIXUP_954.y;
    _RESERVED_IDENTIFIER_FIXUP_1491.z = _RESERVED_IDENTIFIER_FIXUP_954.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_620;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_622;
    vec4 _RESERVED_IDENTIFIER_FIXUP_993 = hdLod5(param_13, param_14);
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1351.xy;
    float param_16 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_993.y = hdLod5(param_15, param_16).x;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1363.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_993.z = hdLod5(param_17, param_18).x;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1371.xy;
    float param_20 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_993.w = hdLod5(param_19, param_20).x;
    vec2 param_21 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1149 = hdTex2(param_21);
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1375.xy;
    float param_23 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1154 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_761 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_993 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_22, param_23).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1149.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1583;
    _RESERVED_IDENTIFIER_FIXUP_1583.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1149.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1583.y = _RESERVED_IDENTIFIER_FIXUP_801;
    _RESERVED_IDENTIFIER_FIXUP_1583.z = _RESERVED_IDENTIFIER_FIXUP_803;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1178 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1589 = _RESERVED_IDENTIFIER_FIXUP_1149;
    _RESERVED_IDENTIFIER_FIXUP_1589.y = _RESERVED_IDENTIFIER_FIXUP_1178.x;
    _RESERVED_IDENTIFIER_FIXUP_1589.z = _RESERVED_IDENTIFIER_FIXUP_1178.y;
    _RESERVED_IDENTIFIER_FIXUP_1589.w = _RESERVED_IDENTIFIER_FIXUP_1178.z;
    vec2 param_24 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1188 = hdTex1(param_24);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1192 = _RESERVED_IDENTIFIER_FIXUP_1188.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1660 = vec4(_RESERVED_IDENTIFIER_FIXUP_1154, _RESERVED_IDENTIFIER_FIXUP_1589.yzw * _RESERVED_IDENTIFIER_FIXUP_1192);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1208 = mix(_RESERVED_IDENTIFIER_FIXUP_1660.yzw, _RESERVED_IDENTIFIER_FIXUP_1192, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1583.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_1188;
    _RESERVED_IDENTIFIER_FIXUP_1601.x = _RESERVED_IDENTIFIER_FIXUP_1208.x;
    _RESERVED_IDENTIFIER_FIXUP_1601.y = _RESERVED_IDENTIFIER_FIXUP_1208.y;
    _RESERVED_IDENTIFIER_FIXUP_1601.z = _RESERVED_IDENTIFIER_FIXUP_1208.z;
    vec2 param_25 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1222 = hdTex0(param_25);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_1222.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1227 = _RESERVED_IDENTIFIER_FIXUP_1589.yzw * _RESERVED_IDENTIFIER_FIXUP_1226;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1607;
    _RESERVED_IDENTIFIER_FIXUP_1607.x = _RESERVED_IDENTIFIER_FIXUP_1227.x;
    _RESERVED_IDENTIFIER_FIXUP_1607.y = _RESERVED_IDENTIFIER_FIXUP_1227.y;
    _RESERVED_IDENTIFIER_FIXUP_1607.z = _RESERVED_IDENTIFIER_FIXUP_1227.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1242 = mix(_RESERVED_IDENTIFIER_FIXUP_1607.xyz, _RESERVED_IDENTIFIER_FIXUP_1226, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1583.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1613 = _RESERVED_IDENTIFIER_FIXUP_1222;
    _RESERVED_IDENTIFIER_FIXUP_1613.x = _RESERVED_IDENTIFIER_FIXUP_1242.x;
    _RESERVED_IDENTIFIER_FIXUP_1613.y = _RESERVED_IDENTIFIER_FIXUP_1242.y;
    _RESERVED_IDENTIFIER_FIXUP_1613.z = _RESERVED_IDENTIFIER_FIXUP_1242.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1254 = (_RESERVED_IDENTIFIER_FIXUP_1613 * _RESERVED_IDENTIFIER_FIXUP_1583.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_1589.xxxx * _RESERVED_IDENTIFIER_FIXUP_1601);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1259 = _RESERVED_IDENTIFIER_FIXUP_1254.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1619;
    _RESERVED_IDENTIFIER_FIXUP_1619.x = _RESERVED_IDENTIFIER_FIXUP_1259.x;
    _RESERVED_IDENTIFIER_FIXUP_1619.y = _RESERVED_IDENTIFIER_FIXUP_1259.y;
    _RESERVED_IDENTIFIER_FIXUP_1619.z = _RESERVED_IDENTIFIER_FIXUP_1259.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1270 = _RESERVED_IDENTIFIER_FIXUP_1660.xxx * _RESERVED_IDENTIFIER_FIXUP_1619.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1625;
    _RESERVED_IDENTIFIER_FIXUP_1625.x = _RESERVED_IDENTIFIER_FIXUP_1270.x;
    _RESERVED_IDENTIFIER_FIXUP_1625.y = _RESERVED_IDENTIFIER_FIXUP_1270.y;
    _RESERVED_IDENTIFIER_FIXUP_1625.z = _RESERVED_IDENTIFIER_FIXUP_1270.z;
    float _RESERVED_IDENTIFIER_FIXUP_1280 = (_RESERVED_IDENTIFIER_FIXUP_1154 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1254.w = _RESERVED_IDENTIFIER_FIXUP_1280;
    _RESERVED_IDENTIFIER_FIXUP_1254.w = _RESERVED_IDENTIFIER_FIXUP_1280;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1296 = (_RESERVED_IDENTIFIER_FIXUP_1254.xyz * _RESERVED_IDENTIFIER_FIXUP_1254.www) + _RESERVED_IDENTIFIER_FIXUP_1625.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1638;
    _RESERVED_IDENTIFIER_FIXUP_1638.x = _RESERVED_IDENTIFIER_FIXUP_1296.x;
    _RESERVED_IDENTIFIER_FIXUP_1638.y = _RESERVED_IDENTIFIER_FIXUP_1296.y;
    _RESERVED_IDENTIFIER_FIXUP_1638.z = _RESERVED_IDENTIFIER_FIXUP_1296.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1638.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1644;
    _RESERVED_IDENTIFIER_FIXUP_1644.x = _RESERVED_IDENTIFIER_FIXUP_1309.x;
    _RESERVED_IDENTIFIER_FIXUP_1644.y = _RESERVED_IDENTIFIER_FIXUP_1309.y;
    _RESERVED_IDENTIFIER_FIXUP_1644.z = _RESERVED_IDENTIFIER_FIXUP_1309.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1644.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_484 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_493;
    if (_RESERVED_IDENTIFIER_FIXUP_484)
    {
        _RESERVED_IDENTIFIER_FIXUP_493 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_493 = _RESERVED_IDENTIFIER_FIXUP_484;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_493)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_530 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1491.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_556 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1335;
    if (_RESERVED_IDENTIFIER_FIXUP_530 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1335 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_530), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_556);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1335 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_556);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1335;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1280);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB69 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB69.x;
    r2.y = hdB69.y;
    vec2 hdB92 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB92.x;
    r1.y = hdB92.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB116 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB116.x;
    r1.y = hdB116.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB136 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB136.x;
    r1.y = hdB136.y;
    vec4 hdB141 = r2;
    vec2 hdB147 = hdB141.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB147.x;
    r2.y = hdB147.y;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.w = r1.x;
    r0 += (-v4.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.y = r1.x + (-v4.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v3.wz;
    r1 = hdTex2(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    vec2 hdB265 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.y = hdB265.x;
    r0.z = hdB265.y;
    vec3 hdB274 = v0.xyz + v0.xyz;
    r1.y = hdB274.x;
    r1.z = hdB274.y;
    r1.w = hdB274.z;
    vec2 param_11 = v3.xy;
    r3 = hdTex1(param_11);
    vec3 hdB290 = r1.yzw * r3.xyz;
    r2.y = hdB290.x;
    r2.z = hdB290.y;
    r2.w = hdB290.z;
    vec4 hdB299 = r3;
    vec3 hdB307 = mix(r2.yzw, hdB299.xyz, greaterThanEqual(-r0.zzz, vec3(0.0)));
    r3.x = hdB307.x;
    r3.y = hdB307.y;
    r3.z = hdB307.z;
    r3 = r1.xxxx * r3;
    vec2 param_12 = v2.xy;
    r4 = hdTex0(param_12);
    vec4 hdB323 = r1;
    vec3 hdB327 = hdB323.yzw * r4.xyz;
    r1.x = hdB327.x;
    r1.y = hdB327.y;
    r1.z = hdB327.z;
    vec4 hdB336 = r4;
    vec3 hdB342 = mix(r1.xyz, hdB336.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = hdB342.x;
    r4.y = hdB342.y;
    r4.z = hdB342.z;
    r0 = (r4 * r0.xxxx) + r3;
    vec3 hdB359 = r0.www * v1.xyz;
    r1.x = hdB359.x;
    r1.y = hdB359.y;
    r1.z = hdB359.z;
    vec4 hdB368 = r1;
    vec3 hdB370 = r2.xxx * hdB368.xyz;
    r1.x = hdB370.x;
    r1.y = hdB370.y;
    r1.z = hdB370.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB384 = r0;
    vec4 hdB386 = r0;
    vec3 hdB391 = (hdB384.xyz * hdB386.www) + r1.xyz;
    r0.x = hdB391.x;
    r0.y = hdB391.y;
    r0.z = hdB391.z;
    vec4 hdB398 = r0;
    vec3 hdB405 = hdB398.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB405.x;
    r0.y = hdB405.y;
    r0.z = hdB405.z;
    vec3 hdB420 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB420.x;
    oC0.y = hdB420.y;
    oC0.z = hdB420.z;
    oC0.w = 1.0;
    bool hdB432 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB440;
    if (hdB432)
    {
        hdB440 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB440 = hdB432;
    }
    if (hdB440)
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
    bool _1407 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1417;
    if (_1407)
    {
        _1417 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1417 = _1407;
    }
    if (_1417)
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
        bool _1442 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1457;
        if (!_1442)
        {
            _1457 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1457 = _1442;
        }
        if (_1457)
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
