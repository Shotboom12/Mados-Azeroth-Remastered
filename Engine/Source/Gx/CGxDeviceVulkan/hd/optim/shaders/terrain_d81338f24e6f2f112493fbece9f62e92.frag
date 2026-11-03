#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1660;
vec4 _RESERVED_IDENTIFIER_FIXUP_1661;


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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _47 = hdOverride >= 0;
    bool _67;
    if (_47)
    {
        _67 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _67 = _47;
    }
    vec4 _68;
    if (_67)
    {
        _68 = vec4(float(hdOverride));
    }
    else
    {
        _68 = value;
    }
    return _68;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _85 = hdOverride >= 0;
    bool _95;
    if (_85)
    {
        _95 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _95 = _85;
    }
    vec4 _96;
    if (_95)
    {
        _96 = vec4(float(hdOverride));
    }
    else
    {
        _96 = value;
    }
    return _96;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _113 = hdOverride >= 0;
    bool _122;
    if (_113)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _122 = _113;
    }
    vec4 _123;
    if (_122)
    {
        _123 = vec4(float(hdOverride));
    }
    else
    {
        _123 = value;
    }
    return _123;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_620 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_623 = _RESERVED_IDENTIFIER_FIXUP_620.xy;
    float _RESERVED_IDENTIFIER_FIXUP_625 = _RESERVED_IDENTIFIER_FIXUP_620.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_623;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_625;
    vec4 _RESERVED_IDENTIFIER_FIXUP_626 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1348;
    _RESERVED_IDENTIFIER_FIXUP_1348.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_634 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1350;
    _RESERVED_IDENTIFIER_FIXUP_1350.x = _RESERVED_IDENTIFIER_FIXUP_634.x;
    _RESERVED_IDENTIFIER_FIXUP_1350.y = _RESERVED_IDENTIFIER_FIXUP_634.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_644 = _RESERVED_IDENTIFIER_FIXUP_1350.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_1348;
    _RESERVED_IDENTIFIER_FIXUP_1354.x = _RESERVED_IDENTIFIER_FIXUP_644.x;
    _RESERVED_IDENTIFIER_FIXUP_1354.y = _RESERVED_IDENTIFIER_FIXUP_644.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1354.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_626.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_667 = _RESERVED_IDENTIFIER_FIXUP_1350.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1366 = _RESERVED_IDENTIFIER_FIXUP_1348;
    _RESERVED_IDENTIFIER_FIXUP_1366.x = _RESERVED_IDENTIFIER_FIXUP_667.x;
    _RESERVED_IDENTIFIER_FIXUP_1366.y = _RESERVED_IDENTIFIER_FIXUP_667.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1366.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_626.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_686 = _RESERVED_IDENTIFIER_FIXUP_1350.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1374;
    _RESERVED_IDENTIFIER_FIXUP_1374.x = _RESERVED_IDENTIFIER_FIXUP_686.x;
    _RESERVED_IDENTIFIER_FIXUP_1374.y = _RESERVED_IDENTIFIER_FIXUP_686.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_696 = _RESERVED_IDENTIFIER_FIXUP_1350.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378;
    _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_696.x;
    _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_696.y;
    _RESERVED_IDENTIFIER_FIXUP_1374.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1374.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_626.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1378.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_764 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_782 = hdTex2(param_8);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1429;
    _RESERVED_IDENTIFIER_FIXUP_1429.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_782.xyz, vec3(1.0)), 0.0, 1.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_802 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_804 = _RESERVED_IDENTIFIER_FIXUP_802.x;
    _RESERVED_IDENTIFIER_FIXUP_1429.y = _RESERVED_IDENTIFIER_FIXUP_804;
    float _RESERVED_IDENTIFIER_FIXUP_806 = _RESERVED_IDENTIFIER_FIXUP_802.y;
    _RESERVED_IDENTIFIER_FIXUP_1429.z = _RESERVED_IDENTIFIER_FIXUP_806;
    vec3 _RESERVED_IDENTIFIER_FIXUP_808 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1660).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_811 = _RESERVED_IDENTIFIER_FIXUP_808 + _RESERVED_IDENTIFIER_FIXUP_808;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1435 = _RESERVED_IDENTIFIER_FIXUP_782;
    _RESERVED_IDENTIFIER_FIXUP_1435.y = _RESERVED_IDENTIFIER_FIXUP_811.x;
    _RESERVED_IDENTIFIER_FIXUP_1435.z = _RESERVED_IDENTIFIER_FIXUP_811.y;
    _RESERVED_IDENTIFIER_FIXUP_1435.w = _RESERVED_IDENTIFIER_FIXUP_811.z;
    vec2 param_9 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = hdTex1(param_9).xyz;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1378.xy;
    float param_11 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1662 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_764 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_626 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_10, param_11).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_782.w), _RESERVED_IDENTIFIER_FIXUP_1435.yzw * _RESERVED_IDENTIFIER_FIXUP_825);
    vec3 _RESERVED_IDENTIFIER_FIXUP_841 = mix(_RESERVED_IDENTIFIER_FIXUP_1662.yzw, _RESERVED_IDENTIFIER_FIXUP_825, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1429.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_841.x;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_841.y;
    _RESERVED_IDENTIFIER_FIXUP_1447.z = _RESERVED_IDENTIFIER_FIXUP_841.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_859 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_860 = _RESERVED_IDENTIFIER_FIXUP_1435.yzw * _RESERVED_IDENTIFIER_FIXUP_859;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1453;
    _RESERVED_IDENTIFIER_FIXUP_1453.x = _RESERVED_IDENTIFIER_FIXUP_860.x;
    _RESERVED_IDENTIFIER_FIXUP_1453.y = _RESERVED_IDENTIFIER_FIXUP_860.y;
    _RESERVED_IDENTIFIER_FIXUP_1453.z = _RESERVED_IDENTIFIER_FIXUP_860.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_875 = mix(_RESERVED_IDENTIFIER_FIXUP_1453.xyz, _RESERVED_IDENTIFIER_FIXUP_859, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1429.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1459;
    _RESERVED_IDENTIFIER_FIXUP_1459.x = _RESERVED_IDENTIFIER_FIXUP_875.x;
    _RESERVED_IDENTIFIER_FIXUP_1459.y = _RESERVED_IDENTIFIER_FIXUP_875.y;
    _RESERVED_IDENTIFIER_FIXUP_1459.z = _RESERVED_IDENTIFIER_FIXUP_875.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_887 = (_RESERVED_IDENTIFIER_FIXUP_1459 * _RESERVED_IDENTIFIER_FIXUP_1429.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_1435.xxxx * _RESERVED_IDENTIFIER_FIXUP_1447);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1465;
    _RESERVED_IDENTIFIER_FIXUP_1465.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1465.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1465.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_903 = _RESERVED_IDENTIFIER_FIXUP_1662.xxx * _RESERVED_IDENTIFIER_FIXUP_1465.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1471;
    _RESERVED_IDENTIFIER_FIXUP_1471.x = _RESERVED_IDENTIFIER_FIXUP_903.x;
    _RESERVED_IDENTIFIER_FIXUP_1471.y = _RESERVED_IDENTIFIER_FIXUP_903.y;
    _RESERVED_IDENTIFIER_FIXUP_1471.z = _RESERVED_IDENTIFIER_FIXUP_903.z;
    _RESERVED_IDENTIFIER_FIXUP_887.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_929 = (_RESERVED_IDENTIFIER_FIXUP_887.xyz * _RESERVED_IDENTIFIER_FIXUP_887.www) + _RESERVED_IDENTIFIER_FIXUP_1471.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1482;
    _RESERVED_IDENTIFIER_FIXUP_1482.x = _RESERVED_IDENTIFIER_FIXUP_929.x;
    _RESERVED_IDENTIFIER_FIXUP_1482.y = _RESERVED_IDENTIFIER_FIXUP_929.y;
    _RESERVED_IDENTIFIER_FIXUP_1482.z = _RESERVED_IDENTIFIER_FIXUP_929.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_942 = _RESERVED_IDENTIFIER_FIXUP_1482.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1488;
    _RESERVED_IDENTIFIER_FIXUP_1488.x = _RESERVED_IDENTIFIER_FIXUP_942.x;
    _RESERVED_IDENTIFIER_FIXUP_1488.y = _RESERVED_IDENTIFIER_FIXUP_942.y;
    _RESERVED_IDENTIFIER_FIXUP_1488.z = _RESERVED_IDENTIFIER_FIXUP_942.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_957 = _RESERVED_IDENTIFIER_FIXUP_1488.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1494;
    _RESERVED_IDENTIFIER_FIXUP_1494.x = _RESERVED_IDENTIFIER_FIXUP_957.x;
    _RESERVED_IDENTIFIER_FIXUP_1494.y = _RESERVED_IDENTIFIER_FIXUP_957.y;
    _RESERVED_IDENTIFIER_FIXUP_1494.z = _RESERVED_IDENTIFIER_FIXUP_957.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_623;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_625;
    vec4 _RESERVED_IDENTIFIER_FIXUP_996 = hdLod5(param_12, param_13);
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1354.xy;
    float param_15 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_996.y = hdLod5(param_14, param_15).x;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1366.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_996.z = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1374.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_996.w = hdLod5(param_18, param_19).x;
    vec2 param_20 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1152 = hdTex2(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1378.xy;
    float param_22 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1157 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_764 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_996 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_21, param_22).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1152.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1586;
    _RESERVED_IDENTIFIER_FIXUP_1586.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1152.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1586.y = _RESERVED_IDENTIFIER_FIXUP_804;
    _RESERVED_IDENTIFIER_FIXUP_1586.z = _RESERVED_IDENTIFIER_FIXUP_806;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1181 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1592 = _RESERVED_IDENTIFIER_FIXUP_1152;
    _RESERVED_IDENTIFIER_FIXUP_1592.y = _RESERVED_IDENTIFIER_FIXUP_1181.x;
    _RESERVED_IDENTIFIER_FIXUP_1592.z = _RESERVED_IDENTIFIER_FIXUP_1181.y;
    _RESERVED_IDENTIFIER_FIXUP_1592.w = _RESERVED_IDENTIFIER_FIXUP_1181.z;
    vec2 param_23 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1191 = hdTex1(param_23);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_1191.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1663 = vec4(_RESERVED_IDENTIFIER_FIXUP_1157, _RESERVED_IDENTIFIER_FIXUP_1592.yzw * _RESERVED_IDENTIFIER_FIXUP_1195);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1211 = mix(_RESERVED_IDENTIFIER_FIXUP_1663.yzw, _RESERVED_IDENTIFIER_FIXUP_1195, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1586.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_1191;
    _RESERVED_IDENTIFIER_FIXUP_1604.x = _RESERVED_IDENTIFIER_FIXUP_1211.x;
    _RESERVED_IDENTIFIER_FIXUP_1604.y = _RESERVED_IDENTIFIER_FIXUP_1211.y;
    _RESERVED_IDENTIFIER_FIXUP_1604.z = _RESERVED_IDENTIFIER_FIXUP_1211.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1225 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1229 = _RESERVED_IDENTIFIER_FIXUP_1225.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_1592.yzw * _RESERVED_IDENTIFIER_FIXUP_1229;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1610;
    _RESERVED_IDENTIFIER_FIXUP_1610.x = _RESERVED_IDENTIFIER_FIXUP_1230.x;
    _RESERVED_IDENTIFIER_FIXUP_1610.y = _RESERVED_IDENTIFIER_FIXUP_1230.y;
    _RESERVED_IDENTIFIER_FIXUP_1610.z = _RESERVED_IDENTIFIER_FIXUP_1230.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1245 = mix(_RESERVED_IDENTIFIER_FIXUP_1610.xyz, _RESERVED_IDENTIFIER_FIXUP_1229, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1586.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1616 = _RESERVED_IDENTIFIER_FIXUP_1225;
    _RESERVED_IDENTIFIER_FIXUP_1616.x = _RESERVED_IDENTIFIER_FIXUP_1245.x;
    _RESERVED_IDENTIFIER_FIXUP_1616.y = _RESERVED_IDENTIFIER_FIXUP_1245.y;
    _RESERVED_IDENTIFIER_FIXUP_1616.z = _RESERVED_IDENTIFIER_FIXUP_1245.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1257 = (_RESERVED_IDENTIFIER_FIXUP_1616 * _RESERVED_IDENTIFIER_FIXUP_1586.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_1592.xxxx * _RESERVED_IDENTIFIER_FIXUP_1604);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_1257.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1622;
    _RESERVED_IDENTIFIER_FIXUP_1622.x = _RESERVED_IDENTIFIER_FIXUP_1262.x;
    _RESERVED_IDENTIFIER_FIXUP_1622.y = _RESERVED_IDENTIFIER_FIXUP_1262.y;
    _RESERVED_IDENTIFIER_FIXUP_1622.z = _RESERVED_IDENTIFIER_FIXUP_1262.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1273 = _RESERVED_IDENTIFIER_FIXUP_1663.xxx * _RESERVED_IDENTIFIER_FIXUP_1622.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1628;
    _RESERVED_IDENTIFIER_FIXUP_1628.x = _RESERVED_IDENTIFIER_FIXUP_1273.x;
    _RESERVED_IDENTIFIER_FIXUP_1628.y = _RESERVED_IDENTIFIER_FIXUP_1273.y;
    _RESERVED_IDENTIFIER_FIXUP_1628.z = _RESERVED_IDENTIFIER_FIXUP_1273.z;
    float _RESERVED_IDENTIFIER_FIXUP_1283 = (_RESERVED_IDENTIFIER_FIXUP_1157 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1257.w = _RESERVED_IDENTIFIER_FIXUP_1283;
    _RESERVED_IDENTIFIER_FIXUP_1257.w = _RESERVED_IDENTIFIER_FIXUP_1283;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1299 = (_RESERVED_IDENTIFIER_FIXUP_1257.xyz * _RESERVED_IDENTIFIER_FIXUP_1257.www) + _RESERVED_IDENTIFIER_FIXUP_1628.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1641;
    _RESERVED_IDENTIFIER_FIXUP_1641.x = _RESERVED_IDENTIFIER_FIXUP_1299.x;
    _RESERVED_IDENTIFIER_FIXUP_1641.y = _RESERVED_IDENTIFIER_FIXUP_1299.y;
    _RESERVED_IDENTIFIER_FIXUP_1641.z = _RESERVED_IDENTIFIER_FIXUP_1299.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1641.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1647;
    _RESERVED_IDENTIFIER_FIXUP_1647.x = _RESERVED_IDENTIFIER_FIXUP_1312.x;
    _RESERVED_IDENTIFIER_FIXUP_1647.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
    _RESERVED_IDENTIFIER_FIXUP_1647.z = _RESERVED_IDENTIFIER_FIXUP_1312.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1647.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_487 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_496;
    if (_RESERVED_IDENTIFIER_FIXUP_487)
    {
        _RESERVED_IDENTIFIER_FIXUP_496 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_496 = _RESERVED_IDENTIFIER_FIXUP_487;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_496)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_533 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1494.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_559 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1338;
    if (_RESERVED_IDENTIFIER_FIXUP_533 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1338 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_533), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_559);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1338 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_559);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1338;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1283);
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
    r4 = OptTex0( v2.xyz);
    vec4 hdB326 = r1;
    vec3 hdB330 = hdB326.yzw * r4.xyz;
    r1.x = hdB330.x;
    r1.y = hdB330.y;
    r1.z = hdB330.z;
    vec4 hdB339 = r4;
    vec3 hdB345 = mix(r1.xyz, hdB339.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = hdB345.x;
    r4.y = hdB345.y;
    r4.z = hdB345.z;
    r0 = (r4 * r0.xxxx) + r3;
    vec3 hdB362 = r0.www * v1.xyz;
    r1.x = hdB362.x;
    r1.y = hdB362.y;
    r1.z = hdB362.z;
    vec4 hdB371 = r1;
    vec3 hdB373 = r2.xxx * hdB371.xyz;
    r1.x = hdB373.x;
    r1.y = hdB373.y;
    r1.z = hdB373.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB387 = r0;
    vec4 hdB389 = r0;
    vec3 hdB394 = (hdB387.xyz * hdB389.www) + r1.xyz;
    r0.x = hdB394.x;
    r0.y = hdB394.y;
    r0.z = hdB394.z;
    vec4 hdB401 = r0;
    vec3 hdB408 = hdB401.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB408.x;
    r0.y = hdB408.y;
    r0.z = hdB408.z;
    vec3 hdB423 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB423.x;
    oC0.y = hdB423.y;
    oC0.z = hdB423.z;
    oC0.w = 1.0;
    bool hdB435 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB443;
    if (hdB435)
    {
        hdB443 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB443 = hdB435;
    }
    if (hdB443)
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
    bool _1381 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1391;
    if (_1381)
    {
        _1391 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1391 = _1381;
    }
    if (_1391)
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
        bool _1416 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1431;
        if (!_1416)
        {
            _1431 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1431 = _1416;
        }
        if (_1431)
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
