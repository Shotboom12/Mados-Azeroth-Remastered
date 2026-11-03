#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1720;
vec4 _RESERVED_IDENTIFIER_FIXUP_1721;


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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _49 = hdOverride >= 0;
    bool _69;
    if (_49)
    {
        _69 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _69 = _49;
    }
    vec4 _70;
    if (_69)
    {
        _70 = vec4(float(hdOverride));
    }
    else
    {
        _70 = value;
    }
    return _70;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _87 = hdOverride >= 0;
    bool _96;
    if (_87)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _96 = _87;
    }
    vec4 _97;
    if (_96)
    {
        _97 = vec4(float(hdOverride));
    }
    else
    {
        _97 = value;
    }
    return _97;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _114 = hdOverride >= 0;
    bool _124;
    if (_114)
    {
        _124 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _124 = _114;
    }
    vec4 _125;
    if (_124)
    {
        _125 = vec4(float(hdOverride));
    }
    else
    {
        _125 = value;
    }
    return _125;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_634 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_638 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_642 = hdTex2(param_2);
    vec2 _RESERVED_IDENTIFIER_FIXUP_646 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1401 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1401.x = _RESERVED_IDENTIFIER_FIXUP_646.x;
    float _RESERVED_IDENTIFIER_FIXUP_650 = _RESERVED_IDENTIFIER_FIXUP_646.y;
    _RESERVED_IDENTIFIER_FIXUP_1401.y = _RESERVED_IDENTIFIER_FIXUP_650;
    vec3 _RESERVED_IDENTIFIER_FIXUP_652 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1720).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_655 = _RESERVED_IDENTIFIER_FIXUP_652 + _RESERVED_IDENTIFIER_FIXUP_652;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1405 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1405.x = _RESERVED_IDENTIFIER_FIXUP_655.x;
    _RESERVED_IDENTIFIER_FIXUP_1405.y = _RESERVED_IDENTIFIER_FIXUP_655.y;
    _RESERVED_IDENTIFIER_FIXUP_1405.z = _RESERVED_IDENTIFIER_FIXUP_655.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_663 = _RESERVED_IDENTIFIER_FIXUP_634.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_666 = _RESERVED_IDENTIFIER_FIXUP_663 * _RESERVED_IDENTIFIER_FIXUP_1405.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1411;
    _RESERVED_IDENTIFIER_FIXUP_1411.x = _RESERVED_IDENTIFIER_FIXUP_666.x;
    _RESERVED_IDENTIFIER_FIXUP_1411.y = _RESERVED_IDENTIFIER_FIXUP_666.y;
    _RESERVED_IDENTIFIER_FIXUP_1411.z = _RESERVED_IDENTIFIER_FIXUP_666.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_680 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1401.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_681 = mix(_RESERVED_IDENTIFIER_FIXUP_1411.xyz, _RESERVED_IDENTIFIER_FIXUP_663, _RESERVED_IDENTIFIER_FIXUP_680);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_634;
    _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_681.x;
    _RESERVED_IDENTIFIER_FIXUP_1417.y = _RESERVED_IDENTIFIER_FIXUP_681.y;
    _RESERVED_IDENTIFIER_FIXUP_1417.z = _RESERVED_IDENTIFIER_FIXUP_681.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_689 = _RESERVED_IDENTIFIER_FIXUP_638.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_692 = _RESERVED_IDENTIFIER_FIXUP_689 * _RESERVED_IDENTIFIER_FIXUP_1405.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1730 = vec4(_RESERVED_IDENTIFIER_FIXUP_692.x, _RESERVED_IDENTIFIER_FIXUP_650, _RESERVED_IDENTIFIER_FIXUP_692.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_707 = mix(_RESERVED_IDENTIFIER_FIXUP_1730.xzw, _RESERVED_IDENTIFIER_FIXUP_689, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1730.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1429 = _RESERVED_IDENTIFIER_FIXUP_638;
    _RESERVED_IDENTIFIER_FIXUP_1429.x = _RESERVED_IDENTIFIER_FIXUP_707.x;
    _RESERVED_IDENTIFIER_FIXUP_1429.y = _RESERVED_IDENTIFIER_FIXUP_707.y;
    _RESERVED_IDENTIFIER_FIXUP_1429.z = _RESERVED_IDENTIFIER_FIXUP_707.z;
    float _RESERVED_IDENTIFIER_FIXUP_717 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_642.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1435 = _RESERVED_IDENTIFIER_FIXUP_642;
    _RESERVED_IDENTIFIER_FIXUP_1435.y = _RESERVED_IDENTIFIER_FIXUP_717;
    _RESERVED_IDENTIFIER_FIXUP_1435.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_717;
    vec4 _RESERVED_IDENTIFIER_FIXUP_733 = (_RESERVED_IDENTIFIER_FIXUP_1417 * _RESERVED_IDENTIFIER_FIXUP_1435.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1435.xxxx * _RESERVED_IDENTIFIER_FIXUP_1429);
    float _RESERVED_IDENTIFIER_FIXUP_740 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_733;
    _RESERVED_IDENTIFIER_FIXUP_1540.x = _RESERVED_IDENTIFIER_FIXUP_733.x;
    _RESERVED_IDENTIFIER_FIXUP_1540.y = _RESERVED_IDENTIFIER_FIXUP_733.y;
    _RESERVED_IDENTIFIER_FIXUP_1540.z = _RESERVED_IDENTIFIER_FIXUP_733.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_972 = _RESERVED_IDENTIFIER_FIXUP_1540.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1540;
    _RESERVED_IDENTIFIER_FIXUP_1546.x = _RESERVED_IDENTIFIER_FIXUP_972.x;
    _RESERVED_IDENTIFIER_FIXUP_1546.y = _RESERVED_IDENTIFIER_FIXUP_972.y;
    _RESERVED_IDENTIFIER_FIXUP_1546.z = _RESERVED_IDENTIFIER_FIXUP_972.z;
    vec2 param_3 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1021 = hdTex0(param_3);
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1025 = hdTex1(param_4);
    vec2 param_5 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1029 = hdTex2(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1042 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1564.x = _RESERVED_IDENTIFIER_FIXUP_1042.x;
    _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_1042.y;
    _RESERVED_IDENTIFIER_FIXUP_1564.z = _RESERVED_IDENTIFIER_FIXUP_1042.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1050 = _RESERVED_IDENTIFIER_FIXUP_1021.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1053 = _RESERVED_IDENTIFIER_FIXUP_1050 * _RESERVED_IDENTIFIER_FIXUP_1564.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1570;
    _RESERVED_IDENTIFIER_FIXUP_1570.x = _RESERVED_IDENTIFIER_FIXUP_1053.x;
    _RESERVED_IDENTIFIER_FIXUP_1570.y = _RESERVED_IDENTIFIER_FIXUP_1053.y;
    _RESERVED_IDENTIFIER_FIXUP_1570.z = _RESERVED_IDENTIFIER_FIXUP_1053.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1068 = mix(_RESERVED_IDENTIFIER_FIXUP_1570.xyz, _RESERVED_IDENTIFIER_FIXUP_1050, _RESERVED_IDENTIFIER_FIXUP_680);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1576 = _RESERVED_IDENTIFIER_FIXUP_1021;
    _RESERVED_IDENTIFIER_FIXUP_1576.x = _RESERVED_IDENTIFIER_FIXUP_1068.x;
    _RESERVED_IDENTIFIER_FIXUP_1576.y = _RESERVED_IDENTIFIER_FIXUP_1068.y;
    _RESERVED_IDENTIFIER_FIXUP_1576.z = _RESERVED_IDENTIFIER_FIXUP_1068.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1076 = _RESERVED_IDENTIFIER_FIXUP_1025.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1079 = _RESERVED_IDENTIFIER_FIXUP_1076 * _RESERVED_IDENTIFIER_FIXUP_1564.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1734 = vec4(_RESERVED_IDENTIFIER_FIXUP_1079.x, _RESERVED_IDENTIFIER_FIXUP_650, _RESERVED_IDENTIFIER_FIXUP_1079.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1094 = mix(_RESERVED_IDENTIFIER_FIXUP_1734.xzw, _RESERVED_IDENTIFIER_FIXUP_1076, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1734.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1588 = _RESERVED_IDENTIFIER_FIXUP_1025;
    _RESERVED_IDENTIFIER_FIXUP_1588.x = _RESERVED_IDENTIFIER_FIXUP_1094.x;
    _RESERVED_IDENTIFIER_FIXUP_1588.y = _RESERVED_IDENTIFIER_FIXUP_1094.y;
    _RESERVED_IDENTIFIER_FIXUP_1588.z = _RESERVED_IDENTIFIER_FIXUP_1094.z;
    float _RESERVED_IDENTIFIER_FIXUP_1104 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1029.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1594 = _RESERVED_IDENTIFIER_FIXUP_1029;
    _RESERVED_IDENTIFIER_FIXUP_1594.y = _RESERVED_IDENTIFIER_FIXUP_1104;
    _RESERVED_IDENTIFIER_FIXUP_1594.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1104;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_1594.xxxx * _RESERVED_IDENTIFIER_FIXUP_1588;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1120 = (_RESERVED_IDENTIFIER_FIXUP_1576 * _RESERVED_IDENTIFIER_FIXUP_1594.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1114;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_1601.x = _RESERVED_IDENTIFIER_FIXUP_740;
    float _RESERVED_IDENTIFIER_FIXUP_1133 = clamp((_RESERVED_IDENTIFIER_FIXUP_740 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1601.x = _RESERVED_IDENTIFIER_FIXUP_1133;
    float _RESERVED_IDENTIFIER_FIXUP_1139 = ((-_RESERVED_IDENTIFIER_FIXUP_1133) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1601.y = _RESERVED_IDENTIFIER_FIXUP_1139;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1726;
    if (_RESERVED_IDENTIFIER_FIXUP_1139 != (-_RESERVED_IDENTIFIER_FIXUP_1139))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1151 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1161 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1163 = _RESERVED_IDENTIFIER_FIXUP_1161.x;
        _RESERVED_IDENTIFIER_FIXUP_1601.y = _RESERVED_IDENTIFIER_FIXUP_1163;
        _RESERVED_IDENTIFIER_FIXUP_1601.z = _RESERVED_IDENTIFIER_FIXUP_1161.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1171 = _RESERVED_IDENTIFIER_FIXUP_1601.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1619;
        _RESERVED_IDENTIFIER_FIXUP_1619.x = _RESERVED_IDENTIFIER_FIXUP_1171.x;
        _RESERVED_IDENTIFIER_FIXUP_1619.y = _RESERVED_IDENTIFIER_FIXUP_1171.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1178 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1182 = _RESERVED_IDENTIFIER_FIXUP_1178.y;
        _RESERVED_IDENTIFIER_FIXUP_1619.w = _RESERVED_IDENTIFIER_FIXUP_1182;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1151.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1151.w;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1619.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1182;
        float _RESERVED_IDENTIFIER_FIXUP_1193 = hdLod5(param_6, param_7).x + hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1735 = vec4(_RESERVED_IDENTIFIER_FIXUP_1133, _RESERVED_IDENTIFIER_FIXUP_1163, _RESERVED_IDENTIFIER_FIXUP_1161.y, _RESERVED_IDENTIFIER_FIXUP_1193);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_1735.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1632;
        _RESERVED_IDENTIFIER_FIXUP_1632.x = _RESERVED_IDENTIFIER_FIXUP_1200.x;
        _RESERVED_IDENTIFIER_FIXUP_1632.y = _RESERVED_IDENTIFIER_FIXUP_1200.y;
        _RESERVED_IDENTIFIER_FIXUP_1632.w = _RESERVED_IDENTIFIER_FIXUP_1182;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1632.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1182;
        float _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1193 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1735.w = _RESERVED_IDENTIFIER_FIXUP_1222;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1229 = _RESERVED_IDENTIFIER_FIXUP_1735.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1645;
        _RESERVED_IDENTIFIER_FIXUP_1645.x = _RESERVED_IDENTIFIER_FIXUP_1229.x;
        _RESERVED_IDENTIFIER_FIXUP_1645.y = _RESERVED_IDENTIFIER_FIXUP_1229.y;
        _RESERVED_IDENTIFIER_FIXUP_1645.w = _RESERVED_IDENTIFIER_FIXUP_1182;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1645.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1182;
        float _RESERVED_IDENTIFIER_FIXUP_1251 = _RESERVED_IDENTIFIER_FIXUP_1222 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_1735.w = _RESERVED_IDENTIFIER_FIXUP_1251;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_1735.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1658;
        _RESERVED_IDENTIFIER_FIXUP_1658.x = _RESERVED_IDENTIFIER_FIXUP_1258.x;
        _RESERVED_IDENTIFIER_FIXUP_1658.y = _RESERVED_IDENTIFIER_FIXUP_1258.y;
        _RESERVED_IDENTIFIER_FIXUP_1658.w = _RESERVED_IDENTIFIER_FIXUP_1182;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1658.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1182;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1275 = hdLod5(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_1275.x = min((_RESERVED_IDENTIFIER_FIXUP_1133 * (((_RESERVED_IDENTIFIER_FIXUP_1251 + _RESERVED_IDENTIFIER_FIXUP_1275.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1029.w);
        _RESERVED_IDENTIFIER_FIXUP_1726 = _RESERVED_IDENTIFIER_FIXUP_1275;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1734.x = _RESERVED_IDENTIFIER_FIXUP_1029.w;
        _RESERVED_IDENTIFIER_FIXUP_1726 = _RESERVED_IDENTIFIER_FIXUP_1734;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1308 = (_RESERVED_IDENTIFIER_FIXUP_1726.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1736 = vec4(_RESERVED_IDENTIFIER_FIXUP_1308, _RESERVED_IDENTIFIER_FIXUP_1120.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1332 = _RESERVED_IDENTIFIER_FIXUP_1726.xxx * _RESERVED_IDENTIFIER_FIXUP_1736.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1695 = _RESERVED_IDENTIFIER_FIXUP_1736;
    _RESERVED_IDENTIFIER_FIXUP_1695.y = _RESERVED_IDENTIFIER_FIXUP_1332.x;
    _RESERVED_IDENTIFIER_FIXUP_1695.z = _RESERVED_IDENTIFIER_FIXUP_1332.y;
    _RESERVED_IDENTIFIER_FIXUP_1695.w = _RESERVED_IDENTIFIER_FIXUP_1332.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1346 = (_RESERVED_IDENTIFIER_FIXUP_1120.xyz * _RESERVED_IDENTIFIER_FIXUP_1695.xxx) + _RESERVED_IDENTIFIER_FIXUP_1695.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1701 = _RESERVED_IDENTIFIER_FIXUP_1120;
    _RESERVED_IDENTIFIER_FIXUP_1701.x = _RESERVED_IDENTIFIER_FIXUP_1346.x;
    _RESERVED_IDENTIFIER_FIXUP_1701.y = _RESERVED_IDENTIFIER_FIXUP_1346.y;
    _RESERVED_IDENTIFIER_FIXUP_1701.z = _RESERVED_IDENTIFIER_FIXUP_1346.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_1701.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_1701;
    _RESERVED_IDENTIFIER_FIXUP_1707.x = _RESERVED_IDENTIFIER_FIXUP_1359.x;
    _RESERVED_IDENTIFIER_FIXUP_1707.y = _RESERVED_IDENTIFIER_FIXUP_1359.y;
    _RESERVED_IDENTIFIER_FIXUP_1707.z = _RESERVED_IDENTIFIER_FIXUP_1359.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1707.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_500 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_509;
    if (_RESERVED_IDENTIFIER_FIXUP_500)
    {
        _RESERVED_IDENTIFIER_FIXUP_509 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_509 = _RESERVED_IDENTIFIER_FIXUP_500;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_509)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_546 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1546.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_572 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1394;
    if (_RESERVED_IDENTIFIER_FIXUP_546 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1394 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_546), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_572);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1394 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_572);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1394;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1308);
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
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 hdB74 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = hdB74.x;
    r3.y = hdB74.y;
    vec3 hdB87 = v0.xyz + v0.xyz;
    r4.x = hdB87.x;
    r4.y = hdB87.y;
    r4.z = hdB87.z;
    vec3 hdB99 = r0.xyz * r4.xyz;
    r5.x = hdB99.x;
    r5.y = hdB99.y;
    r5.z = hdB99.z;
    vec4 hdB108 = r0;
    vec3 hdB117 = mix(r5.xyz, hdB108.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB117.x;
    r0.y = hdB117.y;
    r0.z = hdB117.z;
    vec3 hdB128 = r1.xyz * r4.xyz;
    r3.x = hdB128.x;
    r3.z = hdB128.y;
    r3.w = hdB128.z;
    vec4 hdB138 = r1;
    vec3 hdB144 = mix(r3.xzw, hdB138.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = hdB144.x;
    r1.y = hdB144.y;
    r1.z = hdB144.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r3 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r3.xy;
        float param_4 = r3.w;
        r3 = hdLod5(param_3, param_4);
        vec2 hdB221 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB221.x;
        r1.z = hdB221.y;
        vec2 hdB232 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB232.x;
        r4.y = hdB232.y;
        vec2 hdB240 = vec2(1.0, 0.0) * v4.zx;
        r4.z = hdB240.x;
        r4.w = hdB240.y;
        vec2 param_5 = r4.xy;
        float param_6 = r4.w;
        r4 = hdLod5(param_5, param_6);
        r1.w = r3.x + r4.x;
        vec2 hdB263 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB263.x;
        r3.y = hdB263.y;
        vec2 hdB270 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB270.x;
        r3.w = hdB270.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r1.w += r3.x;
        vec2 hdB293 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB293.x;
        r3.y = hdB293.y;
        vec2 hdB300 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB300.x;
        r3.w = hdB300.y;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
        r1.w += r3.x;
        vec2 hdB323 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB323.x;
        r3.y = hdB323.y;
        vec2 hdB330 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB330.x;
        r3.w = hdB330.y;
        vec2 param_11 = r3.xy;
        float param_12 = r3.w;
        r3 = hdLod5(param_11, param_12);
        r1.y = r1.w + r3.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r3.x = min(r1.x, r2.w);
    }
    else
    {
        r3.x = r2.w;
    }
    r1.x = (r3.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB382 = r0.www * v1.xyz;
    r1.y = hdB382.x;
    r1.z = hdB382.y;
    r1.w = hdB382.z;
    vec4 hdB391 = r1;
    vec3 hdB393 = r3.xxx * hdB391.yzw;
    r1.y = hdB393.x;
    r1.z = hdB393.y;
    r1.w = hdB393.z;
    vec4 hdB400 = r0;
    vec3 hdB407 = (hdB400.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB407.x;
    r0.y = hdB407.y;
    r0.z = hdB407.z;
    vec4 hdB414 = r0;
    vec3 hdB421 = hdB414.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB421.x;
    r0.y = hdB421.y;
    r0.z = hdB421.z;
    vec3 hdB436 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB436.x;
    oC0.y = hdB436.y;
    oC0.z = hdB436.z;
    oC0.w = 1.0;
    bool hdB448 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB456;
    if (hdB448)
    {
        hdB456 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB456 = hdB448;
    }
    if (hdB456)
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
    bool _1405 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1415;
    if (_1405)
    {
        _1415 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1415 = _1405;
    }
    if (_1415)
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
        bool _1440 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1455;
        if (!_1440)
        {
            _1455 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1455 = _1440;
        }
        if (_1455)
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
