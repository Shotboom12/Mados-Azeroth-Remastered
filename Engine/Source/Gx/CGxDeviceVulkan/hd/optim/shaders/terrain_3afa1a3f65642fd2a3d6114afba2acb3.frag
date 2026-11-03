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
float _RESERVED_IDENTIFIER_FIXUP_1744;
vec4 _RESERVED_IDENTIFIER_FIXUP_1745;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_640 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_644 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_648 = hdTex2(param_2);
    vec2 _RESERVED_IDENTIFIER_FIXUP_652 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1413.x = _RESERVED_IDENTIFIER_FIXUP_652.x;
    float _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_652.y;
    _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_656;
    vec3 _RESERVED_IDENTIFIER_FIXUP_658 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1744).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_661 = _RESERVED_IDENTIFIER_FIXUP_658 + _RESERVED_IDENTIFIER_FIXUP_658;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1417 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_661.x;
    _RESERVED_IDENTIFIER_FIXUP_1417.y = _RESERVED_IDENTIFIER_FIXUP_661.y;
    _RESERVED_IDENTIFIER_FIXUP_1417.z = _RESERVED_IDENTIFIER_FIXUP_661.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_669 = _RESERVED_IDENTIFIER_FIXUP_640.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_672 = _RESERVED_IDENTIFIER_FIXUP_669 * _RESERVED_IDENTIFIER_FIXUP_1417.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1423 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_672.x;
    _RESERVED_IDENTIFIER_FIXUP_1423.y = _RESERVED_IDENTIFIER_FIXUP_672.y;
    _RESERVED_IDENTIFIER_FIXUP_1423.z = _RESERVED_IDENTIFIER_FIXUP_672.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_686 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1413.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_687 = mix(_RESERVED_IDENTIFIER_FIXUP_1423.xyz, _RESERVED_IDENTIFIER_FIXUP_669, _RESERVED_IDENTIFIER_FIXUP_686);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1429 = _RESERVED_IDENTIFIER_FIXUP_640;
    _RESERVED_IDENTIFIER_FIXUP_1429.x = _RESERVED_IDENTIFIER_FIXUP_687.x;
    _RESERVED_IDENTIFIER_FIXUP_1429.y = _RESERVED_IDENTIFIER_FIXUP_687.y;
    _RESERVED_IDENTIFIER_FIXUP_1429.z = _RESERVED_IDENTIFIER_FIXUP_687.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_695 = _RESERVED_IDENTIFIER_FIXUP_644.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_698 = _RESERVED_IDENTIFIER_FIXUP_695 * _RESERVED_IDENTIFIER_FIXUP_1417.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1754 = vec4(_RESERVED_IDENTIFIER_FIXUP_698.x, _RESERVED_IDENTIFIER_FIXUP_656, _RESERVED_IDENTIFIER_FIXUP_698.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_713 = mix(_RESERVED_IDENTIFIER_FIXUP_1754.xzw, _RESERVED_IDENTIFIER_FIXUP_695, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1754.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1441 = _RESERVED_IDENTIFIER_FIXUP_644;
    _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_713.x;
    _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_713.y;
    _RESERVED_IDENTIFIER_FIXUP_1441.z = _RESERVED_IDENTIFIER_FIXUP_713.z;
    float _RESERVED_IDENTIFIER_FIXUP_723 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_648.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447 = _RESERVED_IDENTIFIER_FIXUP_648;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_723;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_723;
    vec4 _RESERVED_IDENTIFIER_FIXUP_739 = (_RESERVED_IDENTIFIER_FIXUP_1429 * _RESERVED_IDENTIFIER_FIXUP_1447.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1447.xxxx * _RESERVED_IDENTIFIER_FIXUP_1441);
    float _RESERVED_IDENTIFIER_FIXUP_746 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1558 = _RESERVED_IDENTIFIER_FIXUP_739;
    _RESERVED_IDENTIFIER_FIXUP_1558.x = _RESERVED_IDENTIFIER_FIXUP_739.x;
    _RESERVED_IDENTIFIER_FIXUP_1558.y = _RESERVED_IDENTIFIER_FIXUP_739.y;
    _RESERVED_IDENTIFIER_FIXUP_1558.z = _RESERVED_IDENTIFIER_FIXUP_739.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_980 = _RESERVED_IDENTIFIER_FIXUP_1558.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_1558;
    _RESERVED_IDENTIFIER_FIXUP_1564.x = _RESERVED_IDENTIFIER_FIXUP_980.x;
    _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_980.y;
    _RESERVED_IDENTIFIER_FIXUP_1564.z = _RESERVED_IDENTIFIER_FIXUP_980.z;
    vec2 param_3 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1031 = hdTex0(param_3);
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1035 = hdTex1(param_4);
    vec2 param_5 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1039 = hdTex2(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1052 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1582 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1582.x = _RESERVED_IDENTIFIER_FIXUP_1052.x;
    _RESERVED_IDENTIFIER_FIXUP_1582.y = _RESERVED_IDENTIFIER_FIXUP_1052.y;
    _RESERVED_IDENTIFIER_FIXUP_1582.z = _RESERVED_IDENTIFIER_FIXUP_1052.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1060 = _RESERVED_IDENTIFIER_FIXUP_1031.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1063 = _RESERVED_IDENTIFIER_FIXUP_1060 * _RESERVED_IDENTIFIER_FIXUP_1582.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1588 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1588.x = _RESERVED_IDENTIFIER_FIXUP_1063.x;
    _RESERVED_IDENTIFIER_FIXUP_1588.y = _RESERVED_IDENTIFIER_FIXUP_1063.y;
    _RESERVED_IDENTIFIER_FIXUP_1588.z = _RESERVED_IDENTIFIER_FIXUP_1063.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1078 = mix(_RESERVED_IDENTIFIER_FIXUP_1588.xyz, _RESERVED_IDENTIFIER_FIXUP_1060, _RESERVED_IDENTIFIER_FIXUP_686);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1594 = _RESERVED_IDENTIFIER_FIXUP_1031;
    _RESERVED_IDENTIFIER_FIXUP_1594.x = _RESERVED_IDENTIFIER_FIXUP_1078.x;
    _RESERVED_IDENTIFIER_FIXUP_1594.y = _RESERVED_IDENTIFIER_FIXUP_1078.y;
    _RESERVED_IDENTIFIER_FIXUP_1594.z = _RESERVED_IDENTIFIER_FIXUP_1078.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1086 = _RESERVED_IDENTIFIER_FIXUP_1035.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1089 = _RESERVED_IDENTIFIER_FIXUP_1086 * _RESERVED_IDENTIFIER_FIXUP_1582.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1757 = vec4(_RESERVED_IDENTIFIER_FIXUP_1089.x, _RESERVED_IDENTIFIER_FIXUP_656, _RESERVED_IDENTIFIER_FIXUP_1089.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1104 = mix(_RESERVED_IDENTIFIER_FIXUP_1757.xzw, _RESERVED_IDENTIFIER_FIXUP_1086, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1757.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1606 = _RESERVED_IDENTIFIER_FIXUP_1035;
    _RESERVED_IDENTIFIER_FIXUP_1606.x = _RESERVED_IDENTIFIER_FIXUP_1104.x;
    _RESERVED_IDENTIFIER_FIXUP_1606.y = _RESERVED_IDENTIFIER_FIXUP_1104.y;
    _RESERVED_IDENTIFIER_FIXUP_1606.z = _RESERVED_IDENTIFIER_FIXUP_1104.z;
    float _RESERVED_IDENTIFIER_FIXUP_1114 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1039.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1612 = _RESERVED_IDENTIFIER_FIXUP_1039;
    _RESERVED_IDENTIFIER_FIXUP_1612.y = _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_1612.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1114;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1124 = _RESERVED_IDENTIFIER_FIXUP_1612.xxxx * _RESERVED_IDENTIFIER_FIXUP_1606;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1130 = (_RESERVED_IDENTIFIER_FIXUP_1594 * _RESERVED_IDENTIFIER_FIXUP_1612.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1124;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1619 = _RESERVED_IDENTIFIER_FIXUP_1124;
    _RESERVED_IDENTIFIER_FIXUP_1619.x = _RESERVED_IDENTIFIER_FIXUP_746;
    float _RESERVED_IDENTIFIER_FIXUP_1143 = clamp((_RESERVED_IDENTIFIER_FIXUP_746 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1619.x = _RESERVED_IDENTIFIER_FIXUP_1143;
    float _RESERVED_IDENTIFIER_FIXUP_1149 = ((-_RESERVED_IDENTIFIER_FIXUP_1143) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1619.y = _RESERVED_IDENTIFIER_FIXUP_1149;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1750;
    if (_RESERVED_IDENTIFIER_FIXUP_1149 != (-_RESERVED_IDENTIFIER_FIXUP_1149))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1161 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1619.y = _RESERVED_IDENTIFIER_FIXUP_1161.x;
        _RESERVED_IDENTIFIER_FIXUP_1619.z = _RESERVED_IDENTIFIER_FIXUP_1161.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1171 = _RESERVED_IDENTIFIER_FIXUP_1619.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1636;
        _RESERVED_IDENTIFIER_FIXUP_1636.x = _RESERVED_IDENTIFIER_FIXUP_1171.x;
        _RESERVED_IDENTIFIER_FIXUP_1636.y = _RESERVED_IDENTIFIER_FIXUP_1171.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_1619.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1640;
        _RESERVED_IDENTIFIER_FIXUP_1640.x = _RESERVED_IDENTIFIER_FIXUP_1181.x;
        _RESERVED_IDENTIFIER_FIXUP_1640.y = _RESERVED_IDENTIFIER_FIXUP_1181.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1191 = _RESERVED_IDENTIFIER_FIXUP_1619.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1644;
        _RESERVED_IDENTIFIER_FIXUP_1644.x = _RESERVED_IDENTIFIER_FIXUP_1191.x;
        _RESERVED_IDENTIFIER_FIXUP_1644.y = _RESERVED_IDENTIFIER_FIXUP_1191.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1201 = _RESERVED_IDENTIFIER_FIXUP_1619.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1648;
        _RESERVED_IDENTIFIER_FIXUP_1648.x = _RESERVED_IDENTIFIER_FIXUP_1201.x;
        _RESERVED_IDENTIFIER_FIXUP_1648.y = _RESERVED_IDENTIFIER_FIXUP_1201.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1209 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1209.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1209.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_1636.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1640.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1644.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1648.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1636.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1215.y = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1640.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1215.z = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1644.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1215.w = hdLod5(param_12, param_13).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1272 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1215 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1648.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1272.x = min((_RESERVED_IDENTIFIER_FIXUP_1143 * (((float((hdLod5(param_14, param_15).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1272, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1039.w);
        _RESERVED_IDENTIFIER_FIXUP_1750 = _RESERVED_IDENTIFIER_FIXUP_1272;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1757.x = _RESERVED_IDENTIFIER_FIXUP_1039.w;
        _RESERVED_IDENTIFIER_FIXUP_1750 = _RESERVED_IDENTIFIER_FIXUP_1757;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1320 = (_RESERVED_IDENTIFIER_FIXUP_1750.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1758 = vec4(_RESERVED_IDENTIFIER_FIXUP_1320, _RESERVED_IDENTIFIER_FIXUP_1130.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1750.xxx * _RESERVED_IDENTIFIER_FIXUP_1758.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1719 = _RESERVED_IDENTIFIER_FIXUP_1758;
    _RESERVED_IDENTIFIER_FIXUP_1719.y = _RESERVED_IDENTIFIER_FIXUP_1344.x;
    _RESERVED_IDENTIFIER_FIXUP_1719.z = _RESERVED_IDENTIFIER_FIXUP_1344.y;
    _RESERVED_IDENTIFIER_FIXUP_1719.w = _RESERVED_IDENTIFIER_FIXUP_1344.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1358 = (_RESERVED_IDENTIFIER_FIXUP_1130.xyz * _RESERVED_IDENTIFIER_FIXUP_1719.xxx) + _RESERVED_IDENTIFIER_FIXUP_1719.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1725 = _RESERVED_IDENTIFIER_FIXUP_1130;
    _RESERVED_IDENTIFIER_FIXUP_1725.x = _RESERVED_IDENTIFIER_FIXUP_1358.x;
    _RESERVED_IDENTIFIER_FIXUP_1725.y = _RESERVED_IDENTIFIER_FIXUP_1358.y;
    _RESERVED_IDENTIFIER_FIXUP_1725.z = _RESERVED_IDENTIFIER_FIXUP_1358.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1371 = _RESERVED_IDENTIFIER_FIXUP_1725.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1731 = _RESERVED_IDENTIFIER_FIXUP_1725;
    _RESERVED_IDENTIFIER_FIXUP_1731.x = _RESERVED_IDENTIFIER_FIXUP_1371.x;
    _RESERVED_IDENTIFIER_FIXUP_1731.y = _RESERVED_IDENTIFIER_FIXUP_1371.y;
    _RESERVED_IDENTIFIER_FIXUP_1731.z = _RESERVED_IDENTIFIER_FIXUP_1371.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1731.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_505 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_514;
    if (_RESERVED_IDENTIFIER_FIXUP_505)
    {
        _RESERVED_IDENTIFIER_FIXUP_514 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_514 = _RESERVED_IDENTIFIER_FIXUP_505;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_514)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_551 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1564.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_577 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1406;
    if (_RESERVED_IDENTIFIER_FIXUP_551 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1406 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_551), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_577);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1406 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_577);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1406;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1320);
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
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 hdB76 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = hdB76.x;
    r3.y = hdB76.y;
    vec3 hdB89 = v0.xyz + v0.xyz;
    r4.x = hdB89.x;
    r4.y = hdB89.y;
    r4.z = hdB89.z;
    vec3 hdB101 = r0.xyz * r4.xyz;
    r5.x = hdB101.x;
    r5.y = hdB101.y;
    r5.z = hdB101.z;
    vec4 hdB110 = r0;
    vec3 hdB119 = mix(r5.xyz, hdB110.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB119.x;
    r0.y = hdB119.y;
    r0.z = hdB119.z;
    vec3 hdB130 = r1.xyz * r4.xyz;
    r3.x = hdB130.x;
    r3.z = hdB130.y;
    r3.w = hdB130.z;
    vec4 hdB140 = r1;
    vec3 hdB146 = mix(r3.xzw, hdB140.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = hdB146.x;
    r1.y = hdB146.y;
    r1.z = hdB146.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB210 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB210.x;
        r1.z = hdB210.y;
        vec2 hdB221 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB221.x;
        r3.y = hdB221.y;
        vec2 hdB232 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB232.x;
        r4.y = hdB232.y;
        vec2 hdB243 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB243.x;
        r5.y = hdB243.y;
        vec2 hdB254 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB254.x;
        r6.y = hdB254.y;
        r7 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r7.xy;
        float param_4 = r7.w;
        r7 = hdLod5(param_3, param_4);
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
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_11 = r6.xy;
        float param_12 = r6.w;
        r6 = hdLod5(param_11, param_12);
        r7.y = r3.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r3 = r7 + (-v4.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.y = r6.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r3.x = min(r1.x, r2.w);
    }
    else
    {
        r3.x = r2.w;
    }
    r1.x = (r3.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB387 = r0.www * v1.xyz;
    r1.y = hdB387.x;
    r1.z = hdB387.y;
    r1.w = hdB387.z;
    vec4 hdB396 = r1;
    vec3 hdB398 = r3.xxx * hdB396.yzw;
    r1.y = hdB398.x;
    r1.z = hdB398.y;
    r1.w = hdB398.z;
    vec4 hdB405 = r0;
    vec3 hdB412 = (hdB405.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB412.x;
    r0.y = hdB412.y;
    r0.z = hdB412.z;
    vec4 hdB419 = r0;
    vec3 hdB426 = hdB419.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB426.x;
    r0.y = hdB426.y;
    r0.z = hdB426.z;
    vec3 hdB441 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB441.x;
    oC0.y = hdB441.y;
    oC0.z = hdB441.z;
    oC0.w = 1.0;
    bool hdB453 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB461;
    if (hdB453)
    {
        hdB461 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB461 = hdB453;
    }
    if (hdB461)
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
    bool _1367 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1377;
    if (_1367)
    {
        _1377 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1377 = _1367;
    }
    if (_1377)
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
        bool _1402 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1417;
        if (!_1402)
        {
            _1417 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1417 = _1402;
        }
        if (_1417)
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
