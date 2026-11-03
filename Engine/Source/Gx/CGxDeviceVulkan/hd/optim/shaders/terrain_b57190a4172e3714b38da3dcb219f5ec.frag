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
float _RESERVED_IDENTIFIER_FIXUP_1689;
vec4 _RESERVED_IDENTIFIER_FIXUP_1690;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_624 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_628 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_632 = hdTex2(param_2);
    vec2 _RESERVED_IDENTIFIER_FIXUP_636 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_638 = _RESERVED_IDENTIFIER_FIXUP_636.x;
    _RESERVED_IDENTIFIER_FIXUP_632.y = _RESERVED_IDENTIFIER_FIXUP_638;
    float _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_636.y;
    _RESERVED_IDENTIFIER_FIXUP_632.z = _RESERVED_IDENTIFIER_FIXUP_640;
    vec3 _RESERVED_IDENTIFIER_FIXUP_642 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1689).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_645 = _RESERVED_IDENTIFIER_FIXUP_642 + _RESERVED_IDENTIFIER_FIXUP_642;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1372;
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_645.x;
    _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_645.y;
    _RESERVED_IDENTIFIER_FIXUP_1372.z = _RESERVED_IDENTIFIER_FIXUP_645.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_653 = _RESERVED_IDENTIFIER_FIXUP_624.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_653 * _RESERVED_IDENTIFIER_FIXUP_1372.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_656.x;
    _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_656.y;
    _RESERVED_IDENTIFIER_FIXUP_1378.z = _RESERVED_IDENTIFIER_FIXUP_656.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_671 = mix(_RESERVED_IDENTIFIER_FIXUP_1378.xyz, _RESERVED_IDENTIFIER_FIXUP_653, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_632.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_624;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = _RESERVED_IDENTIFIER_FIXUP_671.x;
    _RESERVED_IDENTIFIER_FIXUP_1384.y = _RESERVED_IDENTIFIER_FIXUP_671.y;
    _RESERVED_IDENTIFIER_FIXUP_1384.z = _RESERVED_IDENTIFIER_FIXUP_671.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_679 = _RESERVED_IDENTIFIER_FIXUP_628.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_682 = _RESERVED_IDENTIFIER_FIXUP_679 * _RESERVED_IDENTIFIER_FIXUP_1372.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1390;
    _RESERVED_IDENTIFIER_FIXUP_1390.x = _RESERVED_IDENTIFIER_FIXUP_682.x;
    _RESERVED_IDENTIFIER_FIXUP_1390.y = _RESERVED_IDENTIFIER_FIXUP_682.y;
    _RESERVED_IDENTIFIER_FIXUP_1390.z = _RESERVED_IDENTIFIER_FIXUP_682.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_697 = mix(_RESERVED_IDENTIFIER_FIXUP_1390.xyz, _RESERVED_IDENTIFIER_FIXUP_679, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_632.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1396 = _RESERVED_IDENTIFIER_FIXUP_628;
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_697.x;
    _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_697.y;
    _RESERVED_IDENTIFIER_FIXUP_1396.z = _RESERVED_IDENTIFIER_FIXUP_697.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_708 = mix(_RESERVED_IDENTIFIER_FIXUP_1384, _RESERVED_IDENTIFIER_FIXUP_1396, _RESERVED_IDENTIFIER_FIXUP_632.xxxx);
    float _RESERVED_IDENTIFIER_FIXUP_715 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1698 = vec4(_RESERVED_IDENTIFIER_FIXUP_708.x, 0.0, 0.0, 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1698.y = _RESERVED_IDENTIFIER_FIXUP_708.y;
    _RESERVED_IDENTIFIER_FIXUP_1698.z = _RESERVED_IDENTIFIER_FIXUP_708.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_949 = _RESERVED_IDENTIFIER_FIXUP_1698.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_1698;
    _RESERVED_IDENTIFIER_FIXUP_1514.x = _RESERVED_IDENTIFIER_FIXUP_949.x;
    _RESERVED_IDENTIFIER_FIXUP_1514.y = _RESERVED_IDENTIFIER_FIXUP_949.y;
    _RESERVED_IDENTIFIER_FIXUP_1514.z = _RESERVED_IDENTIFIER_FIXUP_949.z;
    vec2 param_3 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1000 = hdTex0(param_3);
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1004 = hdTex1(param_4);
    vec2 param_5 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1008 = hdTex2(param_5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_1008;
    _RESERVED_IDENTIFIER_FIXUP_1528.y = _RESERVED_IDENTIFIER_FIXUP_638;
    _RESERVED_IDENTIFIER_FIXUP_1528.z = _RESERVED_IDENTIFIER_FIXUP_640;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1021 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1532;
    _RESERVED_IDENTIFIER_FIXUP_1532.x = _RESERVED_IDENTIFIER_FIXUP_1021.x;
    _RESERVED_IDENTIFIER_FIXUP_1532.y = _RESERVED_IDENTIFIER_FIXUP_1021.y;
    _RESERVED_IDENTIFIER_FIXUP_1532.z = _RESERVED_IDENTIFIER_FIXUP_1021.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1029 = _RESERVED_IDENTIFIER_FIXUP_1000.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1032 = _RESERVED_IDENTIFIER_FIXUP_1029 * _RESERVED_IDENTIFIER_FIXUP_1532.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1538 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1538.x = _RESERVED_IDENTIFIER_FIXUP_1032.x;
    _RESERVED_IDENTIFIER_FIXUP_1538.y = _RESERVED_IDENTIFIER_FIXUP_1032.y;
    _RESERVED_IDENTIFIER_FIXUP_1538.z = _RESERVED_IDENTIFIER_FIXUP_1032.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1047 = mix(_RESERVED_IDENTIFIER_FIXUP_1538.xyz, _RESERVED_IDENTIFIER_FIXUP_1029, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1528.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_1000;
    _RESERVED_IDENTIFIER_FIXUP_1544.x = _RESERVED_IDENTIFIER_FIXUP_1047.x;
    _RESERVED_IDENTIFIER_FIXUP_1544.y = _RESERVED_IDENTIFIER_FIXUP_1047.y;
    _RESERVED_IDENTIFIER_FIXUP_1544.z = _RESERVED_IDENTIFIER_FIXUP_1047.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1055 = _RESERVED_IDENTIFIER_FIXUP_1004.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1058 = _RESERVED_IDENTIFIER_FIXUP_1055 * _RESERVED_IDENTIFIER_FIXUP_1532.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1550;
    _RESERVED_IDENTIFIER_FIXUP_1550.x = _RESERVED_IDENTIFIER_FIXUP_1058.x;
    _RESERVED_IDENTIFIER_FIXUP_1550.y = _RESERVED_IDENTIFIER_FIXUP_1058.y;
    _RESERVED_IDENTIFIER_FIXUP_1550.z = _RESERVED_IDENTIFIER_FIXUP_1058.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1073 = mix(_RESERVED_IDENTIFIER_FIXUP_1550.xyz, _RESERVED_IDENTIFIER_FIXUP_1055, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1528.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_1004;
    _RESERVED_IDENTIFIER_FIXUP_1556.x = _RESERVED_IDENTIFIER_FIXUP_1073.x;
    _RESERVED_IDENTIFIER_FIXUP_1556.y = _RESERVED_IDENTIFIER_FIXUP_1073.y;
    _RESERVED_IDENTIFIER_FIXUP_1556.z = _RESERVED_IDENTIFIER_FIXUP_1073.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1084 = mix(_RESERVED_IDENTIFIER_FIXUP_1544, _RESERVED_IDENTIFIER_FIXUP_1556, _RESERVED_IDENTIFIER_FIXUP_1528.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_1544;
    _RESERVED_IDENTIFIER_FIXUP_1564.x = _RESERVED_IDENTIFIER_FIXUP_715;
    float _RESERVED_IDENTIFIER_FIXUP_1097 = clamp((_RESERVED_IDENTIFIER_FIXUP_715 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1564.x = _RESERVED_IDENTIFIER_FIXUP_1097;
    float _RESERVED_IDENTIFIER_FIXUP_1103 = ((-_RESERVED_IDENTIFIER_FIXUP_1097) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_1103;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1694;
    if (_RESERVED_IDENTIFIER_FIXUP_1103 != (-_RESERVED_IDENTIFIER_FIXUP_1103))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1115 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_1115.x;
        _RESERVED_IDENTIFIER_FIXUP_1564.z = _RESERVED_IDENTIFIER_FIXUP_1115.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1125 = _RESERVED_IDENTIFIER_FIXUP_1564.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1581;
        _RESERVED_IDENTIFIER_FIXUP_1581.x = _RESERVED_IDENTIFIER_FIXUP_1125.x;
        _RESERVED_IDENTIFIER_FIXUP_1581.y = _RESERVED_IDENTIFIER_FIXUP_1125.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1135 = _RESERVED_IDENTIFIER_FIXUP_1564.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1585;
        _RESERVED_IDENTIFIER_FIXUP_1585.x = _RESERVED_IDENTIFIER_FIXUP_1135.x;
        _RESERVED_IDENTIFIER_FIXUP_1585.y = _RESERVED_IDENTIFIER_FIXUP_1135.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1145 = _RESERVED_IDENTIFIER_FIXUP_1564.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1589;
        _RESERVED_IDENTIFIER_FIXUP_1589.x = _RESERVED_IDENTIFIER_FIXUP_1145.x;
        _RESERVED_IDENTIFIER_FIXUP_1589.y = _RESERVED_IDENTIFIER_FIXUP_1145.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1155 = _RESERVED_IDENTIFIER_FIXUP_1564.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1593;
        _RESERVED_IDENTIFIER_FIXUP_1593.x = _RESERVED_IDENTIFIER_FIXUP_1155.x;
        _RESERVED_IDENTIFIER_FIXUP_1593.y = _RESERVED_IDENTIFIER_FIXUP_1155.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1163 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1163.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1163.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1169 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_1581.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1585.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1589.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1593.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1581.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1169.y = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1585.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1169.z = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1589.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1169.w = hdLod5(param_12, param_13).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1226 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1169 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1593.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1226.x = min((_RESERVED_IDENTIFIER_FIXUP_1097 * (((float((hdLod5(param_14, param_15).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1226, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1008.w);
        _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_1226;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_1556;
        _RESERVED_IDENTIFIER_FIXUP_1575.x = _RESERVED_IDENTIFIER_FIXUP_1008.w;
        _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_1575;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1274 = (_RESERVED_IDENTIFIER_FIXUP_1694.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1700 = vec4(_RESERVED_IDENTIFIER_FIXUP_1274, _RESERVED_IDENTIFIER_FIXUP_1084.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1298 = _RESERVED_IDENTIFIER_FIXUP_1694.xxx * _RESERVED_IDENTIFIER_FIXUP_1700.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1300 = _RESERVED_IDENTIFIER_FIXUP_1298.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1664 = _RESERVED_IDENTIFIER_FIXUP_1700;
    _RESERVED_IDENTIFIER_FIXUP_1664.y = _RESERVED_IDENTIFIER_FIXUP_1300;
    _RESERVED_IDENTIFIER_FIXUP_1664.z = _RESERVED_IDENTIFIER_FIXUP_1298.y;
    _RESERVED_IDENTIFIER_FIXUP_1664.w = _RESERVED_IDENTIFIER_FIXUP_1298.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1312 = (_RESERVED_IDENTIFIER_FIXUP_1084.xyz * _RESERVED_IDENTIFIER_FIXUP_1664.xxx) + _RESERVED_IDENTIFIER_FIXUP_1664.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1701 = vec4(_RESERVED_IDENTIFIER_FIXUP_1312.x, _RESERVED_IDENTIFIER_FIXUP_1300, _RESERVED_IDENTIFIER_FIXUP_1298.yz);
    _RESERVED_IDENTIFIER_FIXUP_1701.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
    _RESERVED_IDENTIFIER_FIXUP_1701.z = _RESERVED_IDENTIFIER_FIXUP_1312.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1325 = _RESERVED_IDENTIFIER_FIXUP_1701.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1676 = _RESERVED_IDENTIFIER_FIXUP_1701;
    _RESERVED_IDENTIFIER_FIXUP_1676.x = _RESERVED_IDENTIFIER_FIXUP_1325.x;
    _RESERVED_IDENTIFIER_FIXUP_1676.y = _RESERVED_IDENTIFIER_FIXUP_1325.y;
    _RESERVED_IDENTIFIER_FIXUP_1676.z = _RESERVED_IDENTIFIER_FIXUP_1325.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1676.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_489 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_498;
    if (_RESERVED_IDENTIFIER_FIXUP_489)
    {
        _RESERVED_IDENTIFIER_FIXUP_498 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_498 = _RESERVED_IDENTIFIER_FIXUP_489;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_498)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_535 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1514.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_561 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1360;
    if (_RESERVED_IDENTIFIER_FIXUP_535 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1360 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_535), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_561);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1360 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_561);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1360;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1274);
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
    r2.y = hdB76.x;
    r2.z = hdB76.y;
    vec3 hdB89 = v0.xyz + v0.xyz;
    r3.x = hdB89.x;
    r3.y = hdB89.y;
    r3.z = hdB89.z;
    vec3 hdB101 = r0.xyz * r3.xyz;
    r4.x = hdB101.x;
    r4.y = hdB101.y;
    r4.z = hdB101.z;
    vec4 hdB110 = r0;
    vec3 hdB119 = mix(r4.xyz, hdB110.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = hdB119.x;
    r0.y = hdB119.y;
    r0.z = hdB119.z;
    vec4 hdB128 = r3;
    vec3 hdB130 = r1.xyz * hdB128.xyz;
    r3.x = hdB130.x;
    r3.y = hdB130.y;
    r3.z = hdB130.z;
    vec4 hdB139 = r1;
    vec3 hdB145 = mix(r3.xyz, hdB139.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = hdB145.x;
    r1.y = hdB145.y;
    r1.z = hdB145.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB193 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB193.x;
        r0.z = hdB193.y;
        vec2 hdB204 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB204.x;
        r1.y = hdB204.y;
        vec2 hdB215 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB215.x;
        r4.y = hdB215.y;
        vec2 hdB226 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB226.x;
        r5.y = hdB226.y;
        vec2 hdB237 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB237.x;
        r6.y = hdB237.y;
        r7 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r7.xy;
        float param_4 = r7.w;
        r7 = hdLod5(param_3, param_4);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_5 = r1.xy;
        float param_6 = r1.w;
        r1 = hdLod5(param_5, param_6);
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
        r7.y = r1.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r1 = r7 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r0.y = r6.x + (-v4.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r1, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r1.x = min(r0.x, r2.w);
    }
    else
    {
        r1.x = r2.w;
    }
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB371 = r3.www * v1.xyz;
    r0.y = hdB371.x;
    r0.z = hdB371.y;
    r0.w = hdB371.z;
    vec4 hdB380 = r0;
    vec3 hdB382 = r1.xxx * hdB380.yzw;
    r0.y = hdB382.x;
    r0.z = hdB382.y;
    r0.w = hdB382.z;
    vec4 hdB391 = r0;
    vec4 hdB394 = r0;
    vec3 hdB396 = (r3.xyz * hdB391.xxx) + hdB394.yzw;
    r0.x = hdB396.x;
    r0.y = hdB396.y;
    r0.z = hdB396.z;
    vec4 hdB403 = r0;
    vec3 hdB410 = hdB403.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB410.x;
    r0.y = hdB410.y;
    r0.z = hdB410.z;
    vec3 hdB425 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB425.x;
    oC0.y = hdB425.y;
    oC0.z = hdB425.z;
    oC0.w = 1.0;
    bool hdB437 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB445;
    if (hdB437)
    {
        hdB445 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB445 = hdB437;
    }
    if (hdB445)
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
    bool _1337 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1347;
    if (_1337)
    {
        _1347 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1347 = _1337;
    }
    if (_1347)
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
        bool _1372 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1387;
        if (!_1372)
        {
            _1387 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1387 = _1372;
        }
        if (_1387)
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
