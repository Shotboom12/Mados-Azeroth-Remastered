#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
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
float _RESERVED_IDENTIFIER_FIXUP_1487;
vec4 _RESERVED_IDENTIFIER_FIXUP_1488;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _88 = hdOverride >= 0;
    bool _98;
    if (_88)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_583 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_586 = _RESERVED_IDENTIFIER_FIXUP_583.xy;
    float _RESERVED_IDENTIFIER_FIXUP_588 = _RESERVED_IDENTIFIER_FIXUP_583.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_586;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_588;
    vec4 _RESERVED_IDENTIFIER_FIXUP_589 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_592 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_596 = _RESERVED_IDENTIFIER_FIXUP_592.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1231;
    _RESERVED_IDENTIFIER_FIXUP_1231.w = _RESERVED_IDENTIFIER_FIXUP_596;
    vec2 _RESERVED_IDENTIFIER_FIXUP_600 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_602 = _RESERVED_IDENTIFIER_FIXUP_600.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1233 = _RESERVED_IDENTIFIER_FIXUP_589;
    _RESERVED_IDENTIFIER_FIXUP_1233.y = _RESERVED_IDENTIFIER_FIXUP_602;
    float _RESERVED_IDENTIFIER_FIXUP_604 = _RESERVED_IDENTIFIER_FIXUP_600.y;
    _RESERVED_IDENTIFIER_FIXUP_1233.z = _RESERVED_IDENTIFIER_FIXUP_604;
    vec2 _RESERVED_IDENTIFIER_FIXUP_610 = _RESERVED_IDENTIFIER_FIXUP_1233.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1237 = _RESERVED_IDENTIFIER_FIXUP_1231;
    _RESERVED_IDENTIFIER_FIXUP_1237.x = _RESERVED_IDENTIFIER_FIXUP_610.x;
    _RESERVED_IDENTIFIER_FIXUP_1237.y = _RESERVED_IDENTIFIER_FIXUP_610.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1237.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_596;
    float _RESERVED_IDENTIFIER_FIXUP_625 = _RESERVED_IDENTIFIER_FIXUP_589.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1233.x = _RESERVED_IDENTIFIER_FIXUP_625;
    vec2 _RESERVED_IDENTIFIER_FIXUP_639 = _RESERVED_IDENTIFIER_FIXUP_1233.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1250 = _RESERVED_IDENTIFIER_FIXUP_1231;
    _RESERVED_IDENTIFIER_FIXUP_1250.x = _RESERVED_IDENTIFIER_FIXUP_639.x;
    _RESERVED_IDENTIFIER_FIXUP_1250.y = _RESERVED_IDENTIFIER_FIXUP_639.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1250.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_596;
    float _RESERVED_IDENTIFIER_FIXUP_654 = _RESERVED_IDENTIFIER_FIXUP_625 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1233.x = _RESERVED_IDENTIFIER_FIXUP_654;
    vec2 _RESERVED_IDENTIFIER_FIXUP_661 = _RESERVED_IDENTIFIER_FIXUP_1233.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1259;
    _RESERVED_IDENTIFIER_FIXUP_1259.x = _RESERVED_IDENTIFIER_FIXUP_661.x;
    _RESERVED_IDENTIFIER_FIXUP_1259.y = _RESERVED_IDENTIFIER_FIXUP_661.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_671 = _RESERVED_IDENTIFIER_FIXUP_1233.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1263;
    _RESERVED_IDENTIFIER_FIXUP_1263.x = _RESERVED_IDENTIFIER_FIXUP_671.x;
    _RESERVED_IDENTIFIER_FIXUP_1263.y = _RESERVED_IDENTIFIER_FIXUP_671.y;
    _RESERVED_IDENTIFIER_FIXUP_1259.w = _RESERVED_IDENTIFIER_FIXUP_596;
    _RESERVED_IDENTIFIER_FIXUP_1263.w = _RESERVED_IDENTIFIER_FIXUP_596;
    float _RESERVED_IDENTIFIER_FIXUP_725 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_743 = hdTex3(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1259.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_596;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1263.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_596;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1301;
    _RESERVED_IDENTIFIER_FIXUP_1301.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_725 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_654 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_743.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1306;
    _RESERVED_IDENTIFIER_FIXUP_1306.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_769 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_743.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1306.y = _RESERVED_IDENTIFIER_FIXUP_769;
    _RESERVED_IDENTIFIER_FIXUP_1306.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_769;
    vec2 param_11 = texcoord1.wz;
    vec2 param_12 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_804 = _RESERVED_IDENTIFIER_FIXUP_1306.xxx * ((hdTex2(param_11) * _RESERVED_IDENTIFIER_FIXUP_743.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1306.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_743.xxxx * hdTex1(param_12)))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1313;
    _RESERVED_IDENTIFIER_FIXUP_1313.x = _RESERVED_IDENTIFIER_FIXUP_804.x;
    _RESERVED_IDENTIFIER_FIXUP_1313.y = _RESERVED_IDENTIFIER_FIXUP_804.y;
    _RESERVED_IDENTIFIER_FIXUP_1313.z = _RESERVED_IDENTIFIER_FIXUP_804.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1319;
    _RESERVED_IDENTIFIER_FIXUP_1319.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1319.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1319.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_826 = _RESERVED_IDENTIFIER_FIXUP_1313.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1487).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1325;
    _RESERVED_IDENTIFIER_FIXUP_1325.x = _RESERVED_IDENTIFIER_FIXUP_826.x;
    _RESERVED_IDENTIFIER_FIXUP_1325.y = _RESERVED_IDENTIFIER_FIXUP_826.y;
    _RESERVED_IDENTIFIER_FIXUP_1325.z = _RESERVED_IDENTIFIER_FIXUP_826.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_837 = _RESERVED_IDENTIFIER_FIXUP_1325.xyz + _RESERVED_IDENTIFIER_FIXUP_1325.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1331;
    _RESERVED_IDENTIFIER_FIXUP_1331.x = _RESERVED_IDENTIFIER_FIXUP_837.x;
    _RESERVED_IDENTIFIER_FIXUP_1331.y = _RESERVED_IDENTIFIER_FIXUP_837.y;
    _RESERVED_IDENTIFIER_FIXUP_1331.z = _RESERVED_IDENTIFIER_FIXUP_837.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_851 = (_RESERVED_IDENTIFIER_FIXUP_1319.xyz * _RESERVED_IDENTIFIER_FIXUP_1301.xxx) + _RESERVED_IDENTIFIER_FIXUP_1331.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1337;
    _RESERVED_IDENTIFIER_FIXUP_1337.x = _RESERVED_IDENTIFIER_FIXUP_851.x;
    _RESERVED_IDENTIFIER_FIXUP_1337.y = _RESERVED_IDENTIFIER_FIXUP_851.y;
    _RESERVED_IDENTIFIER_FIXUP_1337.z = _RESERVED_IDENTIFIER_FIXUP_851.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_864 = _RESERVED_IDENTIFIER_FIXUP_1337.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1343;
    _RESERVED_IDENTIFIER_FIXUP_1343.x = _RESERVED_IDENTIFIER_FIXUP_864.x;
    _RESERVED_IDENTIFIER_FIXUP_1343.y = _RESERVED_IDENTIFIER_FIXUP_864.y;
    _RESERVED_IDENTIFIER_FIXUP_1343.z = _RESERVED_IDENTIFIER_FIXUP_864.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_879 = _RESERVED_IDENTIFIER_FIXUP_1343.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1349;
    _RESERVED_IDENTIFIER_FIXUP_1349.x = _RESERVED_IDENTIFIER_FIXUP_879.x;
    _RESERVED_IDENTIFIER_FIXUP_1349.y = _RESERVED_IDENTIFIER_FIXUP_879.y;
    _RESERVED_IDENTIFIER_FIXUP_1349.z = _RESERVED_IDENTIFIER_FIXUP_879.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_586;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_588;
    vec4 _RESERVED_IDENTIFIER_FIXUP_920 = hdLod5(param_13, param_14);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_920;
    _RESERVED_IDENTIFIER_FIXUP_1362.y = _RESERVED_IDENTIFIER_FIXUP_602;
    _RESERVED_IDENTIFIER_FIXUP_1362.z = _RESERVED_IDENTIFIER_FIXUP_604;
    vec2 _RESERVED_IDENTIFIER_FIXUP_941 = _RESERVED_IDENTIFIER_FIXUP_1362.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1366 = _RESERVED_IDENTIFIER_FIXUP_1231;
    _RESERVED_IDENTIFIER_FIXUP_1366.x = _RESERVED_IDENTIFIER_FIXUP_941.x;
    _RESERVED_IDENTIFIER_FIXUP_1366.y = _RESERVED_IDENTIFIER_FIXUP_941.y;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1366.xy;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_596;
    float _RESERVED_IDENTIFIER_FIXUP_956 = _RESERVED_IDENTIFIER_FIXUP_920.x + hdLod5(param_15, param_16).x;
    _RESERVED_IDENTIFIER_FIXUP_1362.x = _RESERVED_IDENTIFIER_FIXUP_956;
    vec2 _RESERVED_IDENTIFIER_FIXUP_970 = _RESERVED_IDENTIFIER_FIXUP_1362.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_1231;
    _RESERVED_IDENTIFIER_FIXUP_1379.x = _RESERVED_IDENTIFIER_FIXUP_970.x;
    _RESERVED_IDENTIFIER_FIXUP_1379.y = _RESERVED_IDENTIFIER_FIXUP_970.y;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1379.xy;
    float param_18 = _RESERVED_IDENTIFIER_FIXUP_596;
    float _RESERVED_IDENTIFIER_FIXUP_985 = _RESERVED_IDENTIFIER_FIXUP_956 + hdLod5(param_17, param_18).x;
    _RESERVED_IDENTIFIER_FIXUP_1362.x = _RESERVED_IDENTIFIER_FIXUP_985;
    vec2 _RESERVED_IDENTIFIER_FIXUP_992 = _RESERVED_IDENTIFIER_FIXUP_1362.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1388;
    _RESERVED_IDENTIFIER_FIXUP_1388.x = _RESERVED_IDENTIFIER_FIXUP_992.x;
    _RESERVED_IDENTIFIER_FIXUP_1388.y = _RESERVED_IDENTIFIER_FIXUP_992.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1002 = _RESERVED_IDENTIFIER_FIXUP_1362.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1392;
    _RESERVED_IDENTIFIER_FIXUP_1392.x = _RESERVED_IDENTIFIER_FIXUP_1002.x;
    _RESERVED_IDENTIFIER_FIXUP_1392.y = _RESERVED_IDENTIFIER_FIXUP_1002.y;
    _RESERVED_IDENTIFIER_FIXUP_1388.w = _RESERVED_IDENTIFIER_FIXUP_596;
    _RESERVED_IDENTIFIER_FIXUP_1392.w = _RESERVED_IDENTIFIER_FIXUP_596;
    vec2 param_19 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1074 = hdTex3(param_19);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1388.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_596;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1392.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_596;
    float _RESERVED_IDENTIFIER_FIXUP_1079 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_725 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_985 + hdLod5(param_20, param_21).x) + hdLod5(param_22, param_23).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1074.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1430;
    _RESERVED_IDENTIFIER_FIXUP_1430.x = _RESERVED_IDENTIFIER_FIXUP_1079;
    float _RESERVED_IDENTIFIER_FIXUP_1084 = (_RESERVED_IDENTIFIER_FIXUP_1079 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437;
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_1084;
    float _RESERVED_IDENTIFIER_FIXUP_1100 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1074.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_1100;
    _RESERVED_IDENTIFIER_FIXUP_1437.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1100;
    vec2 param_24 = texcoord1.wz;
    vec2 param_25 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1130 = (hdTex2(param_24) * _RESERVED_IDENTIFIER_FIXUP_1074.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1437.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1074.xxxx * hdTex1(param_25)));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1135 = _RESERVED_IDENTIFIER_FIXUP_1437.xxx * _RESERVED_IDENTIFIER_FIXUP_1130.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1444;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_1135.x;
    _RESERVED_IDENTIFIER_FIXUP_1444.y = _RESERVED_IDENTIFIER_FIXUP_1135.y;
    _RESERVED_IDENTIFIER_FIXUP_1444.z = _RESERVED_IDENTIFIER_FIXUP_1135.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1130.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450;
    _RESERVED_IDENTIFIER_FIXUP_1450.x = _RESERVED_IDENTIFIER_FIXUP_1146.x;
    _RESERVED_IDENTIFIER_FIXUP_1450.y = _RESERVED_IDENTIFIER_FIXUP_1146.y;
    _RESERVED_IDENTIFIER_FIXUP_1450.z = _RESERVED_IDENTIFIER_FIXUP_1146.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1157 = _RESERVED_IDENTIFIER_FIXUP_1444.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1456;
    _RESERVED_IDENTIFIER_FIXUP_1456.x = _RESERVED_IDENTIFIER_FIXUP_1157.x;
    _RESERVED_IDENTIFIER_FIXUP_1456.y = _RESERVED_IDENTIFIER_FIXUP_1157.y;
    _RESERVED_IDENTIFIER_FIXUP_1456.z = _RESERVED_IDENTIFIER_FIXUP_1157.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1168 = _RESERVED_IDENTIFIER_FIXUP_1456.xyz + _RESERVED_IDENTIFIER_FIXUP_1456.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1462;
    _RESERVED_IDENTIFIER_FIXUP_1462.x = _RESERVED_IDENTIFIER_FIXUP_1168.x;
    _RESERVED_IDENTIFIER_FIXUP_1462.y = _RESERVED_IDENTIFIER_FIXUP_1168.y;
    _RESERVED_IDENTIFIER_FIXUP_1462.z = _RESERVED_IDENTIFIER_FIXUP_1168.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1182 = (_RESERVED_IDENTIFIER_FIXUP_1450.xyz * _RESERVED_IDENTIFIER_FIXUP_1430.xxx) + _RESERVED_IDENTIFIER_FIXUP_1462.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1468;
    _RESERVED_IDENTIFIER_FIXUP_1468.x = _RESERVED_IDENTIFIER_FIXUP_1182.x;
    _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_1182.y;
    _RESERVED_IDENTIFIER_FIXUP_1468.z = _RESERVED_IDENTIFIER_FIXUP_1182.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_1468.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1474;
    _RESERVED_IDENTIFIER_FIXUP_1474.x = _RESERVED_IDENTIFIER_FIXUP_1195.x;
    _RESERVED_IDENTIFIER_FIXUP_1474.y = _RESERVED_IDENTIFIER_FIXUP_1195.y;
    _RESERVED_IDENTIFIER_FIXUP_1474.z = _RESERVED_IDENTIFIER_FIXUP_1195.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1474.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_447 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_456;
    if (_RESERVED_IDENTIFIER_FIXUP_447)
    {
        _RESERVED_IDENTIFIER_FIXUP_456 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_456 = _RESERVED_IDENTIFIER_FIXUP_447;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_456)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_493 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1349.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_520 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1221;
    if (_RESERVED_IDENTIFIER_FIXUP_493 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1221 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_493), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_520);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1221 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_520);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1221;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1084);
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB67 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB67.x;
    r1.w = hdB67.y;
    vec2 hdB77 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB77.x;
    r0.z = hdB77.y;
    vec2 hdB99 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB99.x;
    r1.y = hdB99.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB119 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB119.x;
    r1.w = hdB119.y;
    vec2 hdB130 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB130.x;
    r1.y = hdB130.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB153 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB153.x;
    r1.y = hdB153.y;
    vec2 hdB164 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB164.x;
    r2.y = hdB164.y;
    vec2 hdB171 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB171.x;
    r1.w = hdB171.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB190 = vec2(1.0, 0.0) * v5.zx;
    r2.z = hdB190.x;
    r2.w = hdB190.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v4.xy;
    r1 = hdTex3(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r3 = OptTex0( v2.xyz);
    r0.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.y = (-r0.y) + 1.0;
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    r4 = r1.xxxx * r4;
    r3 = (r3 * r0.yyyy) + r4;
    vec2 param_12 = v3.wz;
    r4 = hdTex2(param_12);
    r1 = (r4 * r1.yyyy) + r3;
    vec4 hdB301 = r0;
    vec3 hdB305 = hdB301.xxx * r1.xyz;
    r0.x = hdB305.x;
    r0.y = hdB305.y;
    r0.z = hdB305.z;
    vec4 hdB312 = r1;
    vec3 hdB316 = hdB312.www * v1.xyz;
    r1.x = hdB316.x;
    r1.y = hdB316.y;
    r1.z = hdB316.z;
    vec4 hdB323 = r0;
    vec3 hdB327 = hdB323.xyz * v0.xyz;
    r0.x = hdB327.x;
    r0.y = hdB327.y;
    r0.z = hdB327.z;
    vec4 hdB334 = r0;
    vec4 hdB336 = r0;
    vec3 hdB338 = hdB334.xyz + hdB336.xyz;
    r0.x = hdB338.x;
    r0.y = hdB338.y;
    r0.z = hdB338.z;
    vec4 hdB350 = r0;
    vec3 hdB352 = (r1.xyz * r2.xxx) + hdB350.xyz;
    r0.x = hdB352.x;
    r0.y = hdB352.y;
    r0.z = hdB352.z;
    vec4 hdB359 = r0;
    vec3 hdB366 = hdB359.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB366.x;
    r0.y = hdB366.y;
    r0.z = hdB366.z;
    vec3 hdB381 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB381.x;
    oC0.y = hdB381.y;
    oC0.z = hdB381.z;
    oC0.w = 1.0;
    bool hdB395 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB403;
    if (hdB395)
    {
        hdB403 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB403 = hdB395;
    }
    if (hdB403)
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
    bool _1355 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1365;
    if (_1355)
    {
        _1365 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1365 = _1355;
    }
    if (_1365)
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
        bool _1390 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1405;
        if (!_1390)
        {
            _1405 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1405 = _1390;
        }
        if (_1405)
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
