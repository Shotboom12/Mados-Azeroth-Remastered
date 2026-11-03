#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1810;
vec4 _RESERVED_IDENTIFIER_FIXUP_1811;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _52 = hdOverride >= 0;
    bool _71;
    if (_52)
    {
        _71 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _71 = _52;
    }
    vec4 _72;
    if (_71)
    {
        _72 = vec4(float(hdOverride));
    }
    else
    {
        _72 = value;
    }
    return _72;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _89 = hdOverride >= 0;
    bool _99;
    if (_89)
    {
        _99 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _99 = _89;
    }
    vec4 _100;
    if (_99)
    {
        _100 = vec4(float(hdOverride));
    }
    else
    {
        _100 = value;
    }
    return _100;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _117 = hdOverride >= 0;
    bool _127;
    if (_117)
    {
        _127 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _127 = _117;
    }
    vec4 _128;
    if (_127)
    {
        _128 = vec4(float(hdOverride));
    }
    else
    {
        _128 = value;
    }
    return _128;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _145 = hdOverride >= 0;
    bool _155;
    if (_145)
    {
        _155 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _155 = _145;
    }
    vec4 _156;
    if (_155)
    {
        _156 = vec4(float(hdOverride));
    }
    else
    {
        _156 = value;
    }
    return _156;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _174 = hdOverride >= 0;
    bool _184;
    if (_174)
    {
        _184 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _184 = _174;
    }
    vec4 _185;
    if (_184)
    {
        _185 = vec4(float(hdOverride));
    }
    else
    {
        _185 = value;
    }
    return _185;
}

void HDActual()
{
    vec3 _RESERVED_IDENTIFIER_FIXUP_665 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1810).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_668 = _RESERVED_IDENTIFIER_FIXUP_665 + _RESERVED_IDENTIFIER_FIXUP_665;
    float _RESERVED_IDENTIFIER_FIXUP_670 = _RESERVED_IDENTIFIER_FIXUP_668.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1467;
    _RESERVED_IDENTIFIER_FIXUP_1467.x = _RESERVED_IDENTIFIER_FIXUP_670;
    _RESERVED_IDENTIFIER_FIXUP_1467.y = _RESERVED_IDENTIFIER_FIXUP_668.y;
    _RESERVED_IDENTIFIER_FIXUP_1467.z = _RESERVED_IDENTIFIER_FIXUP_668.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_676 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_679 = _RESERVED_IDENTIFIER_FIXUP_676 * _RESERVED_IDENTIFIER_FIXUP_1467.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1473;
    _RESERVED_IDENTIFIER_FIXUP_1473.x = _RESERVED_IDENTIFIER_FIXUP_679.x;
    _RESERVED_IDENTIFIER_FIXUP_1473.y = _RESERVED_IDENTIFIER_FIXUP_679.y;
    _RESERVED_IDENTIFIER_FIXUP_1473.z = _RESERVED_IDENTIFIER_FIXUP_679.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_689 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1479;
    _RESERVED_IDENTIFIER_FIXUP_1479.x = _RESERVED_IDENTIFIER_FIXUP_689.x;
    _RESERVED_IDENTIFIER_FIXUP_1479.y = _RESERVED_IDENTIFIER_FIXUP_689.y;
    _RESERVED_IDENTIFIER_FIXUP_1479.z = _RESERVED_IDENTIFIER_FIXUP_689.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_703 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1479.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_704 = mix(_RESERVED_IDENTIFIER_FIXUP_1473.xyz, _RESERVED_IDENTIFIER_FIXUP_676, _RESERVED_IDENTIFIER_FIXUP_703);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1485;
    _RESERVED_IDENTIFIER_FIXUP_1485.x = _RESERVED_IDENTIFIER_FIXUP_704.x;
    _RESERVED_IDENTIFIER_FIXUP_1485.y = _RESERVED_IDENTIFIER_FIXUP_704.y;
    _RESERVED_IDENTIFIER_FIXUP_1485.z = _RESERVED_IDENTIFIER_FIXUP_704.z;
    vec2 param_1 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_714 = hdTex3(param_1);
    vec2 param_2 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_726 = hdTex0(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_727 = _RESERVED_IDENTIFIER_FIXUP_1467.xyz * _RESERVED_IDENTIFIER_FIXUP_726;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1491;
    _RESERVED_IDENTIFIER_FIXUP_1491.x = _RESERVED_IDENTIFIER_FIXUP_727.x;
    _RESERVED_IDENTIFIER_FIXUP_1491.y = _RESERVED_IDENTIFIER_FIXUP_727.y;
    _RESERVED_IDENTIFIER_FIXUP_1491.z = _RESERVED_IDENTIFIER_FIXUP_727.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_741 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1479.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_742 = mix(_RESERVED_IDENTIFIER_FIXUP_1491.xyz, _RESERVED_IDENTIFIER_FIXUP_726, _RESERVED_IDENTIFIER_FIXUP_741);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1497;
    _RESERVED_IDENTIFIER_FIXUP_1497.x = _RESERVED_IDENTIFIER_FIXUP_742.x;
    _RESERVED_IDENTIFIER_FIXUP_1497.y = _RESERVED_IDENTIFIER_FIXUP_742.y;
    _RESERVED_IDENTIFIER_FIXUP_1497.z = _RESERVED_IDENTIFIER_FIXUP_742.z;
    float _RESERVED_IDENTIFIER_FIXUP_752 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_714.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1812 = vec4(_RESERVED_IDENTIFIER_FIXUP_670, _RESERVED_IDENTIFIER_FIXUP_668.yz, _RESERVED_IDENTIFIER_FIXUP_752);
    _RESERVED_IDENTIFIER_FIXUP_1812.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_752;
    vec2 param_3 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = hdTex2(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_773 = _RESERVED_IDENTIFIER_FIXUP_1812.xyz * _RESERVED_IDENTIFIER_FIXUP_772;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1508;
    _RESERVED_IDENTIFIER_FIXUP_1508.x = _RESERVED_IDENTIFIER_FIXUP_773.x;
    _RESERVED_IDENTIFIER_FIXUP_1508.y = _RESERVED_IDENTIFIER_FIXUP_773.y;
    _RESERVED_IDENTIFIER_FIXUP_1508.z = _RESERVED_IDENTIFIER_FIXUP_773.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_787 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1479.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_788 = mix(_RESERVED_IDENTIFIER_FIXUP_1508.xyz, _RESERVED_IDENTIFIER_FIXUP_772, _RESERVED_IDENTIFIER_FIXUP_787);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1514;
    _RESERVED_IDENTIFIER_FIXUP_1514.x = _RESERVED_IDENTIFIER_FIXUP_788.x;
    _RESERVED_IDENTIFIER_FIXUP_1514.y = _RESERVED_IDENTIFIER_FIXUP_788.y;
    _RESERVED_IDENTIFIER_FIXUP_1514.z = _RESERVED_IDENTIFIER_FIXUP_788.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_800 = (_RESERVED_IDENTIFIER_FIXUP_1514 * _RESERVED_IDENTIFIER_FIXUP_714.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1497 * _RESERVED_IDENTIFIER_FIXUP_1812.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1485 * _RESERVED_IDENTIFIER_FIXUP_714.xxxx));
    vec4 _RESERVED_IDENTIFIER_FIXUP_815 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_818 = _RESERVED_IDENTIFIER_FIXUP_815.xy;
    float _RESERVED_IDENTIFIER_FIXUP_820 = _RESERVED_IDENTIFIER_FIXUP_815.w;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_818;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_820;
    vec4 _RESERVED_IDENTIFIER_FIXUP_821 = hdLod5(param_4, param_5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1529;
    _RESERVED_IDENTIFIER_FIXUP_1529.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_829 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_831 = _RESERVED_IDENTIFIER_FIXUP_829.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_714;
    _RESERVED_IDENTIFIER_FIXUP_1531.x = _RESERVED_IDENTIFIER_FIXUP_831;
    float _RESERVED_IDENTIFIER_FIXUP_833 = _RESERVED_IDENTIFIER_FIXUP_829.y;
    _RESERVED_IDENTIFIER_FIXUP_1531.y = _RESERVED_IDENTIFIER_FIXUP_833;
    vec2 _RESERVED_IDENTIFIER_FIXUP_839 = _RESERVED_IDENTIFIER_FIXUP_1531.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1535 = _RESERVED_IDENTIFIER_FIXUP_1529;
    _RESERVED_IDENTIFIER_FIXUP_1535.x = _RESERVED_IDENTIFIER_FIXUP_839.x;
    _RESERVED_IDENTIFIER_FIXUP_1535.y = _RESERVED_IDENTIFIER_FIXUP_839.y;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1535.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_821.y = hdLod5(param_6, param_7).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_862 = _RESERVED_IDENTIFIER_FIXUP_1531.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1547 = _RESERVED_IDENTIFIER_FIXUP_1529;
    _RESERVED_IDENTIFIER_FIXUP_1547.x = _RESERVED_IDENTIFIER_FIXUP_862.x;
    _RESERVED_IDENTIFIER_FIXUP_1547.y = _RESERVED_IDENTIFIER_FIXUP_862.y;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1547.xy;
    float param_9 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_821.z = hdLod5(param_8, param_9).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_881 = _RESERVED_IDENTIFIER_FIXUP_1531.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1555;
    _RESERVED_IDENTIFIER_FIXUP_1555.x = _RESERVED_IDENTIFIER_FIXUP_881.x;
    _RESERVED_IDENTIFIER_FIXUP_1555.y = _RESERVED_IDENTIFIER_FIXUP_881.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_891 = _RESERVED_IDENTIFIER_FIXUP_1531.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1559;
    _RESERVED_IDENTIFIER_FIXUP_1559.x = _RESERVED_IDENTIFIER_FIXUP_891.x;
    _RESERVED_IDENTIFIER_FIXUP_1559.y = _RESERVED_IDENTIFIER_FIXUP_891.y;
    _RESERVED_IDENTIFIER_FIXUP_1555.w = 0.0;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1555.xy;
    float param_11 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_821.w = hdLod5(param_10, param_11).x;
    float _RESERVED_IDENTIFIER_FIXUP_918 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_821 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    _RESERVED_IDENTIFIER_FIXUP_800.w = _RESERVED_IDENTIFIER_FIXUP_918;
    _RESERVED_IDENTIFIER_FIXUP_1559.w = 0.0;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1559.xy;
    float param_13 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_935 = hdLod5(param_12, param_13).x - texcoord4.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1813 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_935);
    float _RESERVED_IDENTIFIER_FIXUP_940 = float(_RESERVED_IDENTIFIER_FIXUP_935 >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1813.w = _RESERVED_IDENTIFIER_FIXUP_940;
    float _RESERVED_IDENTIFIER_FIXUP_946 = _RESERVED_IDENTIFIER_FIXUP_918 + _RESERVED_IDENTIFIER_FIXUP_940;
    _RESERVED_IDENTIFIER_FIXUP_800.w = _RESERVED_IDENTIFIER_FIXUP_946;
    float _RESERVED_IDENTIFIER_FIXUP_951 = (_RESERVED_IDENTIFIER_FIXUP_946 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_800.w = _RESERVED_IDENTIFIER_FIXUP_951;
    float _RESERVED_IDENTIFIER_FIXUP_959 = max(abs(texcoord4.x), abs(texcoord4.y));
    _RESERVED_IDENTIFIER_FIXUP_1813.w = _RESERVED_IDENTIFIER_FIXUP_959;
    float _RESERVED_IDENTIFIER_FIXUP_965 = clamp((_RESERVED_IDENTIFIER_FIXUP_959 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1813.w = _RESERVED_IDENTIFIER_FIXUP_965;
    float _RESERVED_IDENTIFIER_FIXUP_972 = (_RESERVED_IDENTIFIER_FIXUP_965 * _RESERVED_IDENTIFIER_FIXUP_951) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_800.w = _RESERVED_IDENTIFIER_FIXUP_972;
    _RESERVED_IDENTIFIER_FIXUP_1813.w = min(_RESERVED_IDENTIFIER_FIXUP_972, _RESERVED_IDENTIFIER_FIXUP_714.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_984 = _RESERVED_IDENTIFIER_FIXUP_1813.xyz * _RESERVED_IDENTIFIER_FIXUP_1813.www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1607;
    _RESERVED_IDENTIFIER_FIXUP_1607.x = _RESERVED_IDENTIFIER_FIXUP_984.x;
    _RESERVED_IDENTIFIER_FIXUP_1607.y = _RESERVED_IDENTIFIER_FIXUP_984.y;
    _RESERVED_IDENTIFIER_FIXUP_1607.z = _RESERVED_IDENTIFIER_FIXUP_984.z;
    _RESERVED_IDENTIFIER_FIXUP_800.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1010 = (_RESERVED_IDENTIFIER_FIXUP_800.xyz * _RESERVED_IDENTIFIER_FIXUP_800.www) + _RESERVED_IDENTIFIER_FIXUP_1607.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1618;
    _RESERVED_IDENTIFIER_FIXUP_1618.x = _RESERVED_IDENTIFIER_FIXUP_1010.x;
    _RESERVED_IDENTIFIER_FIXUP_1618.y = _RESERVED_IDENTIFIER_FIXUP_1010.y;
    _RESERVED_IDENTIFIER_FIXUP_1618.z = _RESERVED_IDENTIFIER_FIXUP_1010.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1023 = _RESERVED_IDENTIFIER_FIXUP_1618.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1624;
    _RESERVED_IDENTIFIER_FIXUP_1624.x = _RESERVED_IDENTIFIER_FIXUP_1023.x;
    _RESERVED_IDENTIFIER_FIXUP_1624.y = _RESERVED_IDENTIFIER_FIXUP_1023.y;
    _RESERVED_IDENTIFIER_FIXUP_1624.z = _RESERVED_IDENTIFIER_FIXUP_1023.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1038 = _RESERVED_IDENTIFIER_FIXUP_1624.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1630;
    _RESERVED_IDENTIFIER_FIXUP_1630.x = _RESERVED_IDENTIFIER_FIXUP_1038.x;
    _RESERVED_IDENTIFIER_FIXUP_1630.y = _RESERVED_IDENTIFIER_FIXUP_1038.y;
    _RESERVED_IDENTIFIER_FIXUP_1630.z = _RESERVED_IDENTIFIER_FIXUP_1038.z;
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1074 = hdTex1(param_14);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1079 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_1081 = _RESERVED_IDENTIFIER_FIXUP_1079.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1638;
    _RESERVED_IDENTIFIER_FIXUP_1638.x = _RESERVED_IDENTIFIER_FIXUP_1081;
    _RESERVED_IDENTIFIER_FIXUP_1638.y = _RESERVED_IDENTIFIER_FIXUP_1079.y;
    _RESERVED_IDENTIFIER_FIXUP_1638.z = _RESERVED_IDENTIFIER_FIXUP_1079.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1087 = _RESERVED_IDENTIFIER_FIXUP_1074.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1090 = _RESERVED_IDENTIFIER_FIXUP_1087 * _RESERVED_IDENTIFIER_FIXUP_1638.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1644;
    _RESERVED_IDENTIFIER_FIXUP_1644.x = _RESERVED_IDENTIFIER_FIXUP_1090.x;
    _RESERVED_IDENTIFIER_FIXUP_1644.y = _RESERVED_IDENTIFIER_FIXUP_1090.y;
    _RESERVED_IDENTIFIER_FIXUP_1644.z = _RESERVED_IDENTIFIER_FIXUP_1090.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1115 = mix(_RESERVED_IDENTIFIER_FIXUP_1644.xyz, _RESERVED_IDENTIFIER_FIXUP_1087, _RESERVED_IDENTIFIER_FIXUP_703);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1656 = _RESERVED_IDENTIFIER_FIXUP_1074;
    _RESERVED_IDENTIFIER_FIXUP_1656.x = _RESERVED_IDENTIFIER_FIXUP_1115.x;
    _RESERVED_IDENTIFIER_FIXUP_1656.y = _RESERVED_IDENTIFIER_FIXUP_1115.y;
    _RESERVED_IDENTIFIER_FIXUP_1656.z = _RESERVED_IDENTIFIER_FIXUP_1115.z;
    vec2 param_15 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1125 = hdTex3(param_15);
    vec2 param_16 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1133 = hdTex0(param_16);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1137 = _RESERVED_IDENTIFIER_FIXUP_1133.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1138 = _RESERVED_IDENTIFIER_FIXUP_1638.xyz * _RESERVED_IDENTIFIER_FIXUP_1137;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1662;
    _RESERVED_IDENTIFIER_FIXUP_1662.x = _RESERVED_IDENTIFIER_FIXUP_1138.x;
    _RESERVED_IDENTIFIER_FIXUP_1662.y = _RESERVED_IDENTIFIER_FIXUP_1138.y;
    _RESERVED_IDENTIFIER_FIXUP_1662.z = _RESERVED_IDENTIFIER_FIXUP_1138.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1153 = mix(_RESERVED_IDENTIFIER_FIXUP_1662.xyz, _RESERVED_IDENTIFIER_FIXUP_1137, _RESERVED_IDENTIFIER_FIXUP_741);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_1133;
    _RESERVED_IDENTIFIER_FIXUP_1668.x = _RESERVED_IDENTIFIER_FIXUP_1153.x;
    _RESERVED_IDENTIFIER_FIXUP_1668.y = _RESERVED_IDENTIFIER_FIXUP_1153.y;
    _RESERVED_IDENTIFIER_FIXUP_1668.z = _RESERVED_IDENTIFIER_FIXUP_1153.z;
    float _RESERVED_IDENTIFIER_FIXUP_1163 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1125.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1814 = vec4(_RESERVED_IDENTIFIER_FIXUP_1081, _RESERVED_IDENTIFIER_FIXUP_1079.yz, _RESERVED_IDENTIFIER_FIXUP_1163);
    _RESERVED_IDENTIFIER_FIXUP_1814.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1163;
    vec2 param_17 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1179 = hdTex2(param_17);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_1179.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_1814.xyz * _RESERVED_IDENTIFIER_FIXUP_1183;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1679;
    _RESERVED_IDENTIFIER_FIXUP_1679.x = _RESERVED_IDENTIFIER_FIXUP_1184.x;
    _RESERVED_IDENTIFIER_FIXUP_1679.y = _RESERVED_IDENTIFIER_FIXUP_1184.y;
    _RESERVED_IDENTIFIER_FIXUP_1679.z = _RESERVED_IDENTIFIER_FIXUP_1184.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = mix(_RESERVED_IDENTIFIER_FIXUP_1679.xyz, _RESERVED_IDENTIFIER_FIXUP_1183, _RESERVED_IDENTIFIER_FIXUP_787);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1685 = _RESERVED_IDENTIFIER_FIXUP_1179;
    _RESERVED_IDENTIFIER_FIXUP_1685.x = _RESERVED_IDENTIFIER_FIXUP_1199.x;
    _RESERVED_IDENTIFIER_FIXUP_1685.y = _RESERVED_IDENTIFIER_FIXUP_1199.y;
    _RESERVED_IDENTIFIER_FIXUP_1685.z = _RESERVED_IDENTIFIER_FIXUP_1199.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211 = (_RESERVED_IDENTIFIER_FIXUP_1685 * _RESERVED_IDENTIFIER_FIXUP_1125.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1668 * _RESERVED_IDENTIFIER_FIXUP_1814.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1656 * _RESERVED_IDENTIFIER_FIXUP_1125.xxxx));
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_818;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_820;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1232 = hdLod5(param_18, param_19);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1702 = _RESERVED_IDENTIFIER_FIXUP_1125;
    _RESERVED_IDENTIFIER_FIXUP_1702.x = _RESERVED_IDENTIFIER_FIXUP_831;
    _RESERVED_IDENTIFIER_FIXUP_1702.y = _RESERVED_IDENTIFIER_FIXUP_833;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1250 = _RESERVED_IDENTIFIER_FIXUP_1702.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1706 = _RESERVED_IDENTIFIER_FIXUP_1529;
    _RESERVED_IDENTIFIER_FIXUP_1706.x = _RESERVED_IDENTIFIER_FIXUP_1250.x;
    _RESERVED_IDENTIFIER_FIXUP_1706.y = _RESERVED_IDENTIFIER_FIXUP_1250.y;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1706.xy;
    float param_21 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1232.y = hdLod5(param_20, param_21).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1273 = _RESERVED_IDENTIFIER_FIXUP_1702.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1718 = _RESERVED_IDENTIFIER_FIXUP_1529;
    _RESERVED_IDENTIFIER_FIXUP_1718.x = _RESERVED_IDENTIFIER_FIXUP_1273.x;
    _RESERVED_IDENTIFIER_FIXUP_1718.y = _RESERVED_IDENTIFIER_FIXUP_1273.y;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1718.xy;
    float param_23 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1232.z = hdLod5(param_22, param_23).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1292 = _RESERVED_IDENTIFIER_FIXUP_1702.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1726;
    _RESERVED_IDENTIFIER_FIXUP_1726.x = _RESERVED_IDENTIFIER_FIXUP_1292.x;
    _RESERVED_IDENTIFIER_FIXUP_1726.y = _RESERVED_IDENTIFIER_FIXUP_1292.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_1702.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1730;
    _RESERVED_IDENTIFIER_FIXUP_1730.x = _RESERVED_IDENTIFIER_FIXUP_1302.x;
    _RESERVED_IDENTIFIER_FIXUP_1730.y = _RESERVED_IDENTIFIER_FIXUP_1302.y;
    _RESERVED_IDENTIFIER_FIXUP_1726.w = 0.0;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1726.xy;
    float param_25 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1232.w = hdLod5(param_24, param_25).x;
    float _RESERVED_IDENTIFIER_FIXUP_1329 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1232 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1742 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1742.w = _RESERVED_IDENTIFIER_FIXUP_1329;
    _RESERVED_IDENTIFIER_FIXUP_1730.w = 0.0;
    vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1730.xy;
    float param_27 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1346 = hdLod5(param_26, param_27).x - texcoord4.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1815 = vec4(_RESERVED_IDENTIFIER_FIXUP_1211.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_1346);
    float _RESERVED_IDENTIFIER_FIXUP_1351 = float(_RESERVED_IDENTIFIER_FIXUP_1346 >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1815.w = _RESERVED_IDENTIFIER_FIXUP_1351;
    float _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_1329 + _RESERVED_IDENTIFIER_FIXUP_1351;
    _RESERVED_IDENTIFIER_FIXUP_1742.w = _RESERVED_IDENTIFIER_FIXUP_1357;
    float _RESERVED_IDENTIFIER_FIXUP_1362 = (_RESERVED_IDENTIFIER_FIXUP_1357 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1742.w = _RESERVED_IDENTIFIER_FIXUP_1362;
    _RESERVED_IDENTIFIER_FIXUP_1815.w = _RESERVED_IDENTIFIER_FIXUP_959;
    float _RESERVED_IDENTIFIER_FIXUP_1376 = clamp((_RESERVED_IDENTIFIER_FIXUP_959 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1815.w = _RESERVED_IDENTIFIER_FIXUP_1376;
    float _RESERVED_IDENTIFIER_FIXUP_1383 = (_RESERVED_IDENTIFIER_FIXUP_1376 * _RESERVED_IDENTIFIER_FIXUP_1362) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1742.w = _RESERVED_IDENTIFIER_FIXUP_1383;
    float _RESERVED_IDENTIFIER_FIXUP_1389 = min(_RESERVED_IDENTIFIER_FIXUP_1383, _RESERVED_IDENTIFIER_FIXUP_1125.w);
    _RESERVED_IDENTIFIER_FIXUP_1815.w = _RESERVED_IDENTIFIER_FIXUP_1389;
    float _RESERVED_IDENTIFIER_FIXUP_1405 = (_RESERVED_IDENTIFIER_FIXUP_1389 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1742.w = _RESERVED_IDENTIFIER_FIXUP_1405;
    _RESERVED_IDENTIFIER_FIXUP_1742.w = _RESERVED_IDENTIFIER_FIXUP_1405;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1421 = (_RESERVED_IDENTIFIER_FIXUP_1742.xyz * _RESERVED_IDENTIFIER_FIXUP_1742.www) + vec4(_RESERVED_IDENTIFIER_FIXUP_1815.xyz * _RESERVED_IDENTIFIER_FIXUP_1815.www, _RESERVED_IDENTIFIER_FIXUP_1389).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1791;
    _RESERVED_IDENTIFIER_FIXUP_1791.x = _RESERVED_IDENTIFIER_FIXUP_1421.x;
    _RESERVED_IDENTIFIER_FIXUP_1791.y = _RESERVED_IDENTIFIER_FIXUP_1421.y;
    _RESERVED_IDENTIFIER_FIXUP_1791.z = _RESERVED_IDENTIFIER_FIXUP_1421.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1434 = _RESERVED_IDENTIFIER_FIXUP_1791.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1797;
    _RESERVED_IDENTIFIER_FIXUP_1797.x = _RESERVED_IDENTIFIER_FIXUP_1434.x;
    _RESERVED_IDENTIFIER_FIXUP_1797.y = _RESERVED_IDENTIFIER_FIXUP_1434.y;
    _RESERVED_IDENTIFIER_FIXUP_1797.z = _RESERVED_IDENTIFIER_FIXUP_1434.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1797.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_527 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_536;
    if (_RESERVED_IDENTIFIER_FIXUP_527)
    {
        _RESERVED_IDENTIFIER_FIXUP_536 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_536 = _RESERVED_IDENTIFIER_FIXUP_527;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_536)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_573 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1630.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_599 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1460;
    if (_RESERVED_IDENTIFIER_FIXUP_573 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1460 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_573), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_599);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1460 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_599);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1460;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1405);
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v3.xy;
    r0 = hdTex1(param);
    vec3 hdB57 = v0.xyz + v0.xyz;
    r1.x = hdB57.x;
    r1.y = hdB57.y;
    r1.z = hdB57.z;
    vec3 hdB73 = r0.xyz * r1.xyz;
    r2.x = hdB73.x;
    r2.y = hdB73.y;
    r2.z = hdB73.z;
    vec3 hdB94 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r3.x = hdB94.x;
    r3.y = hdB94.y;
    r3.z = hdB94.z;
    vec4 hdB103 = r0;
    vec3 hdB112 = mix(r2.xyz, hdB103.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r0.x = hdB112.x;
    r0.y = hdB112.y;
    r0.z = hdB112.z;
    vec2 param_1 = v4.xy;
    r2 = hdTex3(param_1);
    r0 *= r2.xxxx;
    vec2 param_2 = v2.xy;
    r4 = hdTex0(param_2);
    vec3 hdB137 = r1.xyz * r4.xyz;
    r5.x = hdB137.x;
    r5.y = hdB137.y;
    r5.z = hdB137.z;
    vec4 hdB146 = r4;
    vec3 hdB152 = mix(r5.xyz, hdB146.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r4.x = hdB152.x;
    r4.y = hdB152.y;
    r4.z = hdB152.z;
    r1.w = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r4 * r1.wwww) + r0;
    vec2 param_3 = v3.wz;
    r4 = hdTex2(param_3);
    vec4 hdB183 = r1;
    vec3 hdB187 = hdB183.xyz * r4.xyz;
    r1.x = hdB187.x;
    r1.y = hdB187.y;
    r1.z = hdB187.z;
    vec4 hdB196 = r4;
    vec3 hdB202 = mix(r1.xyz, hdB196.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r4.x = hdB202.x;
    r4.y = hdB202.y;
    r4.z = hdB202.z;
    r0 = (r4 * r2.yyyy) + r0;
    vec3 hdB219 = r0.www * v1.xyz;
    r1.x = hdB219.x;
    r1.y = hdB219.y;
    r1.z = hdB219.z;
    r3 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_4 = r3.xy;
    float param_5 = r3.w;
    r3 = hdLod5(param_4, param_5);
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB248 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB248.x;
    r2.y = hdB248.y;
    vec2 hdB259 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB259.x;
    r4.y = hdB259.y;
    vec2 param_6 = r4.xy;
    float param_7 = r4.w;
    r4 = hdLod5(param_6, param_7);
    r3.y = r4.x;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB283 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = hdB283.x;
    r4.y = hdB283.y;
    vec2 param_8 = r4.xy;
    float param_9 = r4.w;
    r4 = hdLod5(param_8, param_9);
    r3.z = r4.x;
    vec2 hdB303 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = hdB303.x;
    r4.y = hdB303.y;
    vec2 hdB314 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r5.x = hdB314.x;
    r5.y = hdB314.y;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 param_10 = r4.xy;
    float param_11 = r4.w;
    r4 = hdLod5(param_10, param_11);
    r3.w = r4.x;
    r3 += (-v5.zzzz);
    r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
    r0.w = dot(r3, vec4(1.0));
    r5.z = 0.0;
    r5.w = 0.0;
    vec2 param_12 = r5.xy;
    float param_13 = r5.w;
    r3 = hdLod5(param_12, param_13);
    r1.w = r3.x + (-v5.z);
    r1.w = float(r1.w >= 0.0);
    r0.w += r1.w;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.w = max(abs(v5.x), abs(v5.y));
    r1.w = clamp((r1.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.w * r0.w) + 1.0;
    r1.w = min(r0.w, r2.w);
    vec4 hdB409 = r1;
    vec4 hdB411 = r1;
    vec3 hdB413 = hdB409.xyz * hdB411.www;
    r1.x = hdB413.x;
    r1.y = hdB413.y;
    r1.z = hdB413.z;
    r0.w = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB427 = r0;
    vec4 hdB429 = r0;
    vec3 hdB434 = (hdB427.xyz * hdB429.www) + r1.xyz;
    r0.x = hdB434.x;
    r0.y = hdB434.y;
    r0.z = hdB434.z;
    vec4 hdB441 = r0;
    vec3 hdB448 = hdB441.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB448.x;
    r0.y = hdB448.y;
    r0.z = hdB448.z;
    vec3 hdB463 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB463.x;
    oC0.y = hdB463.y;
    oC0.z = hdB463.z;
    oC0.w = 1.0;
    bool hdB475 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB483;
    if (hdB475)
    {
        hdB483 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB483 = hdB475;
    }
    if (hdB483)
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
    bool _1728 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1738;
    if (_1728)
    {
        _1738 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1738 = _1728;
    }
    if (_1738)
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
        bool _1763 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1778;
        if (!_1763)
        {
            _1778 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1778 = _1763;
        }
        if (_1778)
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
