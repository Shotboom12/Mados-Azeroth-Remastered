#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1894;
vec4 _RESERVED_IDENTIFIER_FIXUP_1895;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _89 = hdOverride >= 0;
    bool _98;
    if (_89)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _98 = _89;
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
    bool _116 = hdOverride >= 0;
    bool _126;
    if (_116)
    {
        _126 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _126 = _116;
    }
    vec4 _127;
    if (_126)
    {
        _127 = vec4(float(hdOverride));
    }
    else
    {
        _127 = value;
    }
    return _127;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _144 = hdOverride >= 0;
    bool _154;
    if (_144)
    {
        _154 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _154 = _144;
    }
    vec4 _155;
    if (_154)
    {
        _155 = vec4(float(hdOverride));
    }
    else
    {
        _155 = value;
    }
    return _155;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _173 = hdOverride >= 0;
    bool _183;
    if (_173)
    {
        _183 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _183 = _173;
    }
    vec4 _184;
    if (_183)
    {
        _184 = vec4(float(hdOverride));
    }
    else
    {
        _184 = value;
    }
    return _184;
}

void HDActual()
{
    vec3 _RESERVED_IDENTIFIER_FIXUP_699 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1894).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_702 = _RESERVED_IDENTIFIER_FIXUP_699 + _RESERVED_IDENTIFIER_FIXUP_699;
    float _RESERVED_IDENTIFIER_FIXUP_704 = _RESERVED_IDENTIFIER_FIXUP_702.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1551;
    _RESERVED_IDENTIFIER_FIXUP_1551.x = _RESERVED_IDENTIFIER_FIXUP_704;
    _RESERVED_IDENTIFIER_FIXUP_1551.y = _RESERVED_IDENTIFIER_FIXUP_702.y;
    _RESERVED_IDENTIFIER_FIXUP_1551.z = _RESERVED_IDENTIFIER_FIXUP_702.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_710 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_713 = _RESERVED_IDENTIFIER_FIXUP_710 * _RESERVED_IDENTIFIER_FIXUP_1551.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1557;
    _RESERVED_IDENTIFIER_FIXUP_1557.x = _RESERVED_IDENTIFIER_FIXUP_713.x;
    _RESERVED_IDENTIFIER_FIXUP_1557.y = _RESERVED_IDENTIFIER_FIXUP_713.y;
    _RESERVED_IDENTIFIER_FIXUP_1557.z = _RESERVED_IDENTIFIER_FIXUP_713.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_722 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_730 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_722.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_731 = mix(_RESERVED_IDENTIFIER_FIXUP_1557.xyz, _RESERVED_IDENTIFIER_FIXUP_710, _RESERVED_IDENTIFIER_FIXUP_730);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1563;
    _RESERVED_IDENTIFIER_FIXUP_1563.x = _RESERVED_IDENTIFIER_FIXUP_731.x;
    _RESERVED_IDENTIFIER_FIXUP_1563.y = _RESERVED_IDENTIFIER_FIXUP_731.y;
    _RESERVED_IDENTIFIER_FIXUP_1563.z = _RESERVED_IDENTIFIER_FIXUP_731.z;
    vec2 param_1 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_741 = hdTex4(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_749 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_741.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1896 = vec4(_RESERVED_IDENTIFIER_FIXUP_704, _RESERVED_IDENTIFIER_FIXUP_702.yz, _RESERVED_IDENTIFIER_FIXUP_749);
    _RESERVED_IDENTIFIER_FIXUP_1896.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_749;
    vec3 _RESERVED_IDENTIFIER_FIXUP_757 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_760 = _RESERVED_IDENTIFIER_FIXUP_757 * _RESERVED_IDENTIFIER_FIXUP_1896.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1574;
    _RESERVED_IDENTIFIER_FIXUP_1574.x = _RESERVED_IDENTIFIER_FIXUP_760.x;
    _RESERVED_IDENTIFIER_FIXUP_1574.y = _RESERVED_IDENTIFIER_FIXUP_760.y;
    _RESERVED_IDENTIFIER_FIXUP_1574.z = _RESERVED_IDENTIFIER_FIXUP_760.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_774 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_722.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = mix(_RESERVED_IDENTIFIER_FIXUP_1574.xyz, _RESERVED_IDENTIFIER_FIXUP_757, _RESERVED_IDENTIFIER_FIXUP_774);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1580;
    _RESERVED_IDENTIFIER_FIXUP_1580.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1580.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1580.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    vec2 param_2 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_795 = hdTex2(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_796 = _RESERVED_IDENTIFIER_FIXUP_1896.xyz * _RESERVED_IDENTIFIER_FIXUP_795;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1586;
    _RESERVED_IDENTIFIER_FIXUP_1586.x = _RESERVED_IDENTIFIER_FIXUP_796.x;
    _RESERVED_IDENTIFIER_FIXUP_1586.y = _RESERVED_IDENTIFIER_FIXUP_796.y;
    _RESERVED_IDENTIFIER_FIXUP_1586.z = _RESERVED_IDENTIFIER_FIXUP_796.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_810 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_722.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_811 = mix(_RESERVED_IDENTIFIER_FIXUP_1586.xyz, _RESERVED_IDENTIFIER_FIXUP_795, _RESERVED_IDENTIFIER_FIXUP_810);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1592;
    _RESERVED_IDENTIFIER_FIXUP_1592.x = _RESERVED_IDENTIFIER_FIXUP_811.x;
    _RESERVED_IDENTIFIER_FIXUP_1592.y = _RESERVED_IDENTIFIER_FIXUP_811.y;
    _RESERVED_IDENTIFIER_FIXUP_1592.z = _RESERVED_IDENTIFIER_FIXUP_811.z;
    vec2 param_3 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_831 = hdTex3(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_832 = _RESERVED_IDENTIFIER_FIXUP_1896.xyz * _RESERVED_IDENTIFIER_FIXUP_831;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1598;
    _RESERVED_IDENTIFIER_FIXUP_1598.x = _RESERVED_IDENTIFIER_FIXUP_832.x;
    _RESERVED_IDENTIFIER_FIXUP_1598.y = _RESERVED_IDENTIFIER_FIXUP_832.y;
    _RESERVED_IDENTIFIER_FIXUP_1598.z = _RESERVED_IDENTIFIER_FIXUP_832.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_846 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_722.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_847 = mix(_RESERVED_IDENTIFIER_FIXUP_1598.xyz, _RESERVED_IDENTIFIER_FIXUP_831, _RESERVED_IDENTIFIER_FIXUP_846);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1604;
    _RESERVED_IDENTIFIER_FIXUP_1604.x = _RESERVED_IDENTIFIER_FIXUP_847.x;
    _RESERVED_IDENTIFIER_FIXUP_1604.y = _RESERVED_IDENTIFIER_FIXUP_847.y;
    _RESERVED_IDENTIFIER_FIXUP_1604.z = _RESERVED_IDENTIFIER_FIXUP_847.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_859 = (_RESERVED_IDENTIFIER_FIXUP_1604 * _RESERVED_IDENTIFIER_FIXUP_741.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1592 * _RESERVED_IDENTIFIER_FIXUP_741.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1580 * _RESERVED_IDENTIFIER_FIXUP_1896.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1563 * _RESERVED_IDENTIFIER_FIXUP_741.xxxx)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_874 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_877 = _RESERVED_IDENTIFIER_FIXUP_874.xy;
    float _RESERVED_IDENTIFIER_FIXUP_879 = _RESERVED_IDENTIFIER_FIXUP_874.w;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_877;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_879;
    vec4 _RESERVED_IDENTIFIER_FIXUP_880 = hdLod5(param_4, param_5);
    vec2 _RESERVED_IDENTIFIER_FIXUP_883 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_887 = _RESERVED_IDENTIFIER_FIXUP_883.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1619;
    _RESERVED_IDENTIFIER_FIXUP_1619.w = _RESERVED_IDENTIFIER_FIXUP_887;
    vec2 _RESERVED_IDENTIFIER_FIXUP_891 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_893 = _RESERVED_IDENTIFIER_FIXUP_891.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1621 = _RESERVED_IDENTIFIER_FIXUP_880;
    _RESERVED_IDENTIFIER_FIXUP_1621.y = _RESERVED_IDENTIFIER_FIXUP_893;
    float _RESERVED_IDENTIFIER_FIXUP_895 = _RESERVED_IDENTIFIER_FIXUP_891.y;
    _RESERVED_IDENTIFIER_FIXUP_1621.z = _RESERVED_IDENTIFIER_FIXUP_895;
    vec2 _RESERVED_IDENTIFIER_FIXUP_901 = _RESERVED_IDENTIFIER_FIXUP_1621.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1625 = _RESERVED_IDENTIFIER_FIXUP_1619;
    _RESERVED_IDENTIFIER_FIXUP_1625.x = _RESERVED_IDENTIFIER_FIXUP_901.x;
    _RESERVED_IDENTIFIER_FIXUP_1625.y = _RESERVED_IDENTIFIER_FIXUP_901.y;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1625.xy;
    float param_7 = _RESERVED_IDENTIFIER_FIXUP_887;
    float _RESERVED_IDENTIFIER_FIXUP_916 = _RESERVED_IDENTIFIER_FIXUP_880.x + hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_859.w = _RESERVED_IDENTIFIER_FIXUP_916;
    vec2 _RESERVED_IDENTIFIER_FIXUP_930 = _RESERVED_IDENTIFIER_FIXUP_1621.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1638 = _RESERVED_IDENTIFIER_FIXUP_1619;
    _RESERVED_IDENTIFIER_FIXUP_1638.x = _RESERVED_IDENTIFIER_FIXUP_930.x;
    _RESERVED_IDENTIFIER_FIXUP_1638.y = _RESERVED_IDENTIFIER_FIXUP_930.y;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1638.xy;
    float param_9 = _RESERVED_IDENTIFIER_FIXUP_887;
    float _RESERVED_IDENTIFIER_FIXUP_945 = _RESERVED_IDENTIFIER_FIXUP_916 + hdLod5(param_8, param_9).x;
    _RESERVED_IDENTIFIER_FIXUP_859.w = _RESERVED_IDENTIFIER_FIXUP_945;
    vec2 _RESERVED_IDENTIFIER_FIXUP_952 = _RESERVED_IDENTIFIER_FIXUP_1621.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1647;
    _RESERVED_IDENTIFIER_FIXUP_1647.x = _RESERVED_IDENTIFIER_FIXUP_952.x;
    _RESERVED_IDENTIFIER_FIXUP_1647.y = _RESERVED_IDENTIFIER_FIXUP_952.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_962 = _RESERVED_IDENTIFIER_FIXUP_1621.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1651;
    _RESERVED_IDENTIFIER_FIXUP_1651.x = _RESERVED_IDENTIFIER_FIXUP_962.x;
    _RESERVED_IDENTIFIER_FIXUP_1651.y = _RESERVED_IDENTIFIER_FIXUP_962.y;
    _RESERVED_IDENTIFIER_FIXUP_1647.w = _RESERVED_IDENTIFIER_FIXUP_887;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1647.xy;
    float param_11 = _RESERVED_IDENTIFIER_FIXUP_887;
    float _RESERVED_IDENTIFIER_FIXUP_984 = _RESERVED_IDENTIFIER_FIXUP_945 + hdLod5(param_10, param_11).x;
    _RESERVED_IDENTIFIER_FIXUP_859.w = _RESERVED_IDENTIFIER_FIXUP_984;
    _RESERVED_IDENTIFIER_FIXUP_1651.w = _RESERVED_IDENTIFIER_FIXUP_887;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1651.xy;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_887;
    float _RESERVED_IDENTIFIER_FIXUP_1003 = _RESERVED_IDENTIFIER_FIXUP_984 + hdLod5(param_12, param_13).x;
    _RESERVED_IDENTIFIER_FIXUP_859.w = _RESERVED_IDENTIFIER_FIXUP_1003;
    float _RESERVED_IDENTIFIER_FIXUP_1008 = (_RESERVED_IDENTIFIER_FIXUP_1003 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_859.w = _RESERVED_IDENTIFIER_FIXUP_1008;
    float _RESERVED_IDENTIFIER_FIXUP_1016 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1897 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_1016);
    float _RESERVED_IDENTIFIER_FIXUP_1022 = clamp((_RESERVED_IDENTIFIER_FIXUP_1016 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1897.w = _RESERVED_IDENTIFIER_FIXUP_1022;
    float _RESERVED_IDENTIFIER_FIXUP_1029 = (_RESERVED_IDENTIFIER_FIXUP_1022 * _RESERVED_IDENTIFIER_FIXUP_1008) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_859.w = _RESERVED_IDENTIFIER_FIXUP_1029;
    _RESERVED_IDENTIFIER_FIXUP_1897.w = min(_RESERVED_IDENTIFIER_FIXUP_1029, _RESERVED_IDENTIFIER_FIXUP_741.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1041 = _RESERVED_IDENTIFIER_FIXUP_1897.xyz * _RESERVED_IDENTIFIER_FIXUP_1897.www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1691;
    _RESERVED_IDENTIFIER_FIXUP_1691.x = _RESERVED_IDENTIFIER_FIXUP_1041.x;
    _RESERVED_IDENTIFIER_FIXUP_1691.y = _RESERVED_IDENTIFIER_FIXUP_1041.y;
    _RESERVED_IDENTIFIER_FIXUP_1691.z = _RESERVED_IDENTIFIER_FIXUP_1041.z;
    _RESERVED_IDENTIFIER_FIXUP_859.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1067 = (_RESERVED_IDENTIFIER_FIXUP_859.xyz * _RESERVED_IDENTIFIER_FIXUP_859.www) + _RESERVED_IDENTIFIER_FIXUP_1691.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1702;
    _RESERVED_IDENTIFIER_FIXUP_1702.x = _RESERVED_IDENTIFIER_FIXUP_1067.x;
    _RESERVED_IDENTIFIER_FIXUP_1702.y = _RESERVED_IDENTIFIER_FIXUP_1067.y;
    _RESERVED_IDENTIFIER_FIXUP_1702.z = _RESERVED_IDENTIFIER_FIXUP_1067.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1080 = _RESERVED_IDENTIFIER_FIXUP_1702.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1708;
    _RESERVED_IDENTIFIER_FIXUP_1708.x = _RESERVED_IDENTIFIER_FIXUP_1080.x;
    _RESERVED_IDENTIFIER_FIXUP_1708.y = _RESERVED_IDENTIFIER_FIXUP_1080.y;
    _RESERVED_IDENTIFIER_FIXUP_1708.z = _RESERVED_IDENTIFIER_FIXUP_1080.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1095 = _RESERVED_IDENTIFIER_FIXUP_1708.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1714;
    _RESERVED_IDENTIFIER_FIXUP_1714.x = _RESERVED_IDENTIFIER_FIXUP_1095.x;
    _RESERVED_IDENTIFIER_FIXUP_1714.y = _RESERVED_IDENTIFIER_FIXUP_1095.y;
    _RESERVED_IDENTIFIER_FIXUP_1714.z = _RESERVED_IDENTIFIER_FIXUP_1095.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1131 = OptTex0( texcoord0.xyz);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1135 = hdTex1(param_14);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1140 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_1142 = _RESERVED_IDENTIFIER_FIXUP_1140.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1722;
    _RESERVED_IDENTIFIER_FIXUP_1722.x = _RESERVED_IDENTIFIER_FIXUP_1142;
    _RESERVED_IDENTIFIER_FIXUP_1722.y = _RESERVED_IDENTIFIER_FIXUP_1140.y;
    _RESERVED_IDENTIFIER_FIXUP_1722.z = _RESERVED_IDENTIFIER_FIXUP_1140.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1148 = _RESERVED_IDENTIFIER_FIXUP_1135.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_1148 * _RESERVED_IDENTIFIER_FIXUP_1722.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1728;
    _RESERVED_IDENTIFIER_FIXUP_1728.x = _RESERVED_IDENTIFIER_FIXUP_1151.x;
    _RESERVED_IDENTIFIER_FIXUP_1728.y = _RESERVED_IDENTIFIER_FIXUP_1151.y;
    _RESERVED_IDENTIFIER_FIXUP_1728.z = _RESERVED_IDENTIFIER_FIXUP_1151.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1169 = mix(_RESERVED_IDENTIFIER_FIXUP_1728.xyz, _RESERVED_IDENTIFIER_FIXUP_1148, _RESERVED_IDENTIFIER_FIXUP_730);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1734 = _RESERVED_IDENTIFIER_FIXUP_1135;
    _RESERVED_IDENTIFIER_FIXUP_1734.x = _RESERVED_IDENTIFIER_FIXUP_1169.x;
    _RESERVED_IDENTIFIER_FIXUP_1734.y = _RESERVED_IDENTIFIER_FIXUP_1169.y;
    _RESERVED_IDENTIFIER_FIXUP_1734.z = _RESERVED_IDENTIFIER_FIXUP_1169.z;
    vec2 param_15 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1179 = hdTex4(param_15);
    float _RESERVED_IDENTIFIER_FIXUP_1187 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1179.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1898 = vec4(_RESERVED_IDENTIFIER_FIXUP_1142, _RESERVED_IDENTIFIER_FIXUP_1140.yz, _RESERVED_IDENTIFIER_FIXUP_1187);
    _RESERVED_IDENTIFIER_FIXUP_1898.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1187;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_1131.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_1195 * _RESERVED_IDENTIFIER_FIXUP_1898.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1745;
    _RESERVED_IDENTIFIER_FIXUP_1745.x = _RESERVED_IDENTIFIER_FIXUP_1198.x;
    _RESERVED_IDENTIFIER_FIXUP_1745.y = _RESERVED_IDENTIFIER_FIXUP_1198.y;
    _RESERVED_IDENTIFIER_FIXUP_1745.z = _RESERVED_IDENTIFIER_FIXUP_1198.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1213 = mix(_RESERVED_IDENTIFIER_FIXUP_1745.xyz, _RESERVED_IDENTIFIER_FIXUP_1195, _RESERVED_IDENTIFIER_FIXUP_774);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1751 = _RESERVED_IDENTIFIER_FIXUP_1131;
    _RESERVED_IDENTIFIER_FIXUP_1751.x = _RESERVED_IDENTIFIER_FIXUP_1213.x;
    _RESERVED_IDENTIFIER_FIXUP_1751.y = _RESERVED_IDENTIFIER_FIXUP_1213.y;
    _RESERVED_IDENTIFIER_FIXUP_1751.z = _RESERVED_IDENTIFIER_FIXUP_1213.z;
    vec2 param_16 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1229 = hdTex2(param_16);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1233 = _RESERVED_IDENTIFIER_FIXUP_1229.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1234 = _RESERVED_IDENTIFIER_FIXUP_1898.xyz * _RESERVED_IDENTIFIER_FIXUP_1233;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1757;
    _RESERVED_IDENTIFIER_FIXUP_1757.x = _RESERVED_IDENTIFIER_FIXUP_1234.x;
    _RESERVED_IDENTIFIER_FIXUP_1757.y = _RESERVED_IDENTIFIER_FIXUP_1234.y;
    _RESERVED_IDENTIFIER_FIXUP_1757.z = _RESERVED_IDENTIFIER_FIXUP_1234.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1249 = mix(_RESERVED_IDENTIFIER_FIXUP_1757.xyz, _RESERVED_IDENTIFIER_FIXUP_1233, _RESERVED_IDENTIFIER_FIXUP_810);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1763 = _RESERVED_IDENTIFIER_FIXUP_1229;
    _RESERVED_IDENTIFIER_FIXUP_1763.x = _RESERVED_IDENTIFIER_FIXUP_1249.x;
    _RESERVED_IDENTIFIER_FIXUP_1763.y = _RESERVED_IDENTIFIER_FIXUP_1249.y;
    _RESERVED_IDENTIFIER_FIXUP_1763.z = _RESERVED_IDENTIFIER_FIXUP_1249.z;
    vec2 param_17 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1265 = hdTex3(param_17);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1269 = _RESERVED_IDENTIFIER_FIXUP_1265.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1270 = _RESERVED_IDENTIFIER_FIXUP_1898.xyz * _RESERVED_IDENTIFIER_FIXUP_1269;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1769;
    _RESERVED_IDENTIFIER_FIXUP_1769.x = _RESERVED_IDENTIFIER_FIXUP_1270.x;
    _RESERVED_IDENTIFIER_FIXUP_1769.y = _RESERVED_IDENTIFIER_FIXUP_1270.y;
    _RESERVED_IDENTIFIER_FIXUP_1769.z = _RESERVED_IDENTIFIER_FIXUP_1270.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1285 = mix(_RESERVED_IDENTIFIER_FIXUP_1769.xyz, _RESERVED_IDENTIFIER_FIXUP_1269, _RESERVED_IDENTIFIER_FIXUP_846);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1775 = _RESERVED_IDENTIFIER_FIXUP_1265;
    _RESERVED_IDENTIFIER_FIXUP_1775.x = _RESERVED_IDENTIFIER_FIXUP_1285.x;
    _RESERVED_IDENTIFIER_FIXUP_1775.y = _RESERVED_IDENTIFIER_FIXUP_1285.y;
    _RESERVED_IDENTIFIER_FIXUP_1775.z = _RESERVED_IDENTIFIER_FIXUP_1285.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297 = (_RESERVED_IDENTIFIER_FIXUP_1775 * _RESERVED_IDENTIFIER_FIXUP_1179.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1763 * _RESERVED_IDENTIFIER_FIXUP_1179.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1751 * _RESERVED_IDENTIFIER_FIXUP_1898.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1734 * _RESERVED_IDENTIFIER_FIXUP_1179.xxxx)));
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_877;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_879;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1318 = hdLod5(param_18, param_19);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1792 = _RESERVED_IDENTIFIER_FIXUP_1318;
    _RESERVED_IDENTIFIER_FIXUP_1792.y = _RESERVED_IDENTIFIER_FIXUP_893;
    _RESERVED_IDENTIFIER_FIXUP_1792.z = _RESERVED_IDENTIFIER_FIXUP_895;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_1792.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1796 = _RESERVED_IDENTIFIER_FIXUP_1619;
    _RESERVED_IDENTIFIER_FIXUP_1796.x = _RESERVED_IDENTIFIER_FIXUP_1339.x;
    _RESERVED_IDENTIFIER_FIXUP_1796.y = _RESERVED_IDENTIFIER_FIXUP_1339.y;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1796.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_887;
    float _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_1318.x + hdLod5(param_20, param_21).x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1803 = _RESERVED_IDENTIFIER_FIXUP_1297;
    _RESERVED_IDENTIFIER_FIXUP_1803.w = _RESERVED_IDENTIFIER_FIXUP_1354;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1368 = _RESERVED_IDENTIFIER_FIXUP_1792.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1809 = _RESERVED_IDENTIFIER_FIXUP_1619;
    _RESERVED_IDENTIFIER_FIXUP_1809.x = _RESERVED_IDENTIFIER_FIXUP_1368.x;
    _RESERVED_IDENTIFIER_FIXUP_1809.y = _RESERVED_IDENTIFIER_FIXUP_1368.y;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1809.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_887;
    float _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_1354 + hdLod5(param_22, param_23).x;
    _RESERVED_IDENTIFIER_FIXUP_1803.w = _RESERVED_IDENTIFIER_FIXUP_1383;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1390 = _RESERVED_IDENTIFIER_FIXUP_1792.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1818;
    _RESERVED_IDENTIFIER_FIXUP_1818.x = _RESERVED_IDENTIFIER_FIXUP_1390.x;
    _RESERVED_IDENTIFIER_FIXUP_1818.y = _RESERVED_IDENTIFIER_FIXUP_1390.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1400 = _RESERVED_IDENTIFIER_FIXUP_1792.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1822;
    _RESERVED_IDENTIFIER_FIXUP_1822.x = _RESERVED_IDENTIFIER_FIXUP_1400.x;
    _RESERVED_IDENTIFIER_FIXUP_1822.y = _RESERVED_IDENTIFIER_FIXUP_1400.y;
    _RESERVED_IDENTIFIER_FIXUP_1818.w = _RESERVED_IDENTIFIER_FIXUP_887;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1818.xy;
    float param_25 = _RESERVED_IDENTIFIER_FIXUP_887;
    float _RESERVED_IDENTIFIER_FIXUP_1422 = _RESERVED_IDENTIFIER_FIXUP_1383 + hdLod5(param_24, param_25).x;
    _RESERVED_IDENTIFIER_FIXUP_1803.w = _RESERVED_IDENTIFIER_FIXUP_1422;
    _RESERVED_IDENTIFIER_FIXUP_1822.w = _RESERVED_IDENTIFIER_FIXUP_887;
    vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1822.xy;
    float param_27 = _RESERVED_IDENTIFIER_FIXUP_887;
    float _RESERVED_IDENTIFIER_FIXUP_1441 = _RESERVED_IDENTIFIER_FIXUP_1422 + hdLod5(param_26, param_27).x;
    _RESERVED_IDENTIFIER_FIXUP_1803.w = _RESERVED_IDENTIFIER_FIXUP_1441;
    float _RESERVED_IDENTIFIER_FIXUP_1446 = (_RESERVED_IDENTIFIER_FIXUP_1441 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1803.w = _RESERVED_IDENTIFIER_FIXUP_1446;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1899 = vec4(_RESERVED_IDENTIFIER_FIXUP_1297.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_1016);
    float _RESERVED_IDENTIFIER_FIXUP_1460 = clamp((_RESERVED_IDENTIFIER_FIXUP_1016 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1899.w = _RESERVED_IDENTIFIER_FIXUP_1460;
    float _RESERVED_IDENTIFIER_FIXUP_1467 = (_RESERVED_IDENTIFIER_FIXUP_1460 * _RESERVED_IDENTIFIER_FIXUP_1446) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1803.w = _RESERVED_IDENTIFIER_FIXUP_1467;
    float _RESERVED_IDENTIFIER_FIXUP_1473 = min(_RESERVED_IDENTIFIER_FIXUP_1467, _RESERVED_IDENTIFIER_FIXUP_1179.w);
    _RESERVED_IDENTIFIER_FIXUP_1899.w = _RESERVED_IDENTIFIER_FIXUP_1473;
    float _RESERVED_IDENTIFIER_FIXUP_1489 = (_RESERVED_IDENTIFIER_FIXUP_1473 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1803.w = _RESERVED_IDENTIFIER_FIXUP_1489;
    _RESERVED_IDENTIFIER_FIXUP_1803.w = _RESERVED_IDENTIFIER_FIXUP_1489;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1505 = (_RESERVED_IDENTIFIER_FIXUP_1803.xyz * _RESERVED_IDENTIFIER_FIXUP_1803.www) + vec4(_RESERVED_IDENTIFIER_FIXUP_1899.xyz * _RESERVED_IDENTIFIER_FIXUP_1899.www, _RESERVED_IDENTIFIER_FIXUP_1473).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1875;
    _RESERVED_IDENTIFIER_FIXUP_1875.x = _RESERVED_IDENTIFIER_FIXUP_1505.x;
    _RESERVED_IDENTIFIER_FIXUP_1875.y = _RESERVED_IDENTIFIER_FIXUP_1505.y;
    _RESERVED_IDENTIFIER_FIXUP_1875.z = _RESERVED_IDENTIFIER_FIXUP_1505.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1518 = _RESERVED_IDENTIFIER_FIXUP_1875.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1881;
    _RESERVED_IDENTIFIER_FIXUP_1881.x = _RESERVED_IDENTIFIER_FIXUP_1518.x;
    _RESERVED_IDENTIFIER_FIXUP_1881.y = _RESERVED_IDENTIFIER_FIXUP_1518.y;
    _RESERVED_IDENTIFIER_FIXUP_1881.z = _RESERVED_IDENTIFIER_FIXUP_1518.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1881.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_557 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_566;
    if (_RESERVED_IDENTIFIER_FIXUP_557)
    {
        _RESERVED_IDENTIFIER_FIXUP_566 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_566 = _RESERVED_IDENTIFIER_FIXUP_557;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_566)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_603 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1714.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_629 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1544;
    if (_RESERVED_IDENTIFIER_FIXUP_603 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1544 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_603), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_629);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1544 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_629);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1544;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1489);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec3 hdB65 = v0.xyz + v0.xyz;
    r2.x = hdB65.x;
    r2.y = hdB65.y;
    r2.z = hdB65.z;
    vec3 hdB81 = r1.xyz * r2.xyz;
    r3.x = hdB81.x;
    r3.y = hdB81.y;
    r3.z = hdB81.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB104 = r1;
    vec3 hdB113 = mix(r3.xyz, hdB104.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB113.x;
    r1.y = hdB113.y;
    r1.z = hdB113.z;
    vec2 param_1 = v4.wz;
    r3 = hdTex4(param_1);
    r1 *= r3.xxxx;
    r2.w = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r2.w = (-r2.w) + 1.0;
    vec3 hdB146 = r0.xyz * r2.xyz;
    r5.x = hdB146.x;
    r5.y = hdB146.y;
    r5.z = hdB146.z;
    vec4 hdB155 = r0;
    vec3 hdB161 = mix(r5.xyz, hdB155.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB161.x;
    r0.y = hdB161.y;
    r0.z = hdB161.z;
    r0 = (r0 * r2.wwww) + r1;
    vec2 param_2 = v3.wz;
    r1 = hdTex2(param_2);
    vec3 hdB183 = r2.xyz * r1.xyz;
    r5.x = hdB183.x;
    r5.y = hdB183.y;
    r5.z = hdB183.z;
    vec4 hdB192 = r1;
    vec3 hdB198 = mix(r5.xyz, hdB192.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r1.x = hdB198.x;
    r1.y = hdB198.y;
    r1.z = hdB198.z;
    r0 = (r1 * r3.yyyy) + r0;
    vec2 param_3 = v4.xy;
    r1 = hdTex3(param_3);
    vec4 hdB216 = r2;
    vec3 hdB220 = hdB216.xyz * r1.xyz;
    r2.x = hdB220.x;
    r2.y = hdB220.y;
    r2.z = hdB220.z;
    vec4 hdB229 = r1;
    vec3 hdB235 = mix(r2.xyz, hdB229.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r1.x = hdB235.x;
    r1.y = hdB235.y;
    r1.z = hdB235.z;
    r0 = (r1 * r3.zzzz) + r0;
    vec3 hdB252 = r0.www * v1.xyz;
    r1.x = hdB252.x;
    r1.y = hdB252.y;
    r1.z = hdB252.z;
    r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_4 = r2.xy;
    float param_5 = r2.w;
    r2 = hdLod5(param_4, param_5);
    vec2 hdB276 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB276.x;
    r4.w = hdB276.y;
    vec2 hdB285 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.y = hdB285.x;
    r2.z = hdB285.y;
    vec2 hdB296 = r2.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB296.x;
    r4.y = hdB296.y;
    vec2 param_6 = r4.xy;
    float param_7 = r4.w;
    r4 = hdLod5(param_6, param_7);
    r0.w = r2.x + r4.x;
    vec2 hdB315 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB315.x;
    r4.w = hdB315.y;
    vec2 hdB326 = r2.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = hdB326.x;
    r4.y = hdB326.y;
    vec2 param_8 = r4.xy;
    float param_9 = r4.w;
    r4 = hdLod5(param_8, param_9);
    r0.w += r4.x;
    vec2 hdB349 = r2.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = hdB349.x;
    r4.y = hdB349.y;
    vec4 hdB354 = r2;
    vec2 hdB360 = hdB354.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB360.x;
    r2.y = hdB360.y;
    vec2 hdB367 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB367.x;
    r4.w = hdB367.y;
    vec2 param_10 = r4.xy;
    float param_11 = r4.w;
    r4 = hdLod5(param_10, param_11);
    r0.w += r4.x;
    vec2 hdB386 = vec2(1.0, 0.0) * v5.zx;
    r2.z = hdB386.x;
    r2.w = hdB386.y;
    vec2 param_12 = r2.xy;
    float param_13 = r2.w;
    r2 = hdLod5(param_12, param_13);
    r0.w += r2.x;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.w = max(abs(v5.x), abs(v5.y));
    r1.w = clamp((r1.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.w * r0.w) + 1.0;
    r1.w = min(r0.w, r3.w);
    vec4 hdB439 = r1;
    vec4 hdB441 = r1;
    vec3 hdB443 = hdB439.xyz * hdB441.www;
    r1.x = hdB443.x;
    r1.y = hdB443.y;
    r1.z = hdB443.z;
    r0.w = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB457 = r0;
    vec4 hdB459 = r0;
    vec3 hdB464 = (hdB457.xyz * hdB459.www) + r1.xyz;
    r0.x = hdB464.x;
    r0.y = hdB464.y;
    r0.z = hdB464.z;
    vec4 hdB471 = r0;
    vec3 hdB478 = hdB471.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB478.x;
    r0.y = hdB478.y;
    r0.z = hdB478.z;
    vec3 hdB493 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB493.x;
    oC0.y = hdB493.y;
    oC0.z = hdB493.z;
    oC0.w = 1.0;
    bool hdB505 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB513;
    if (hdB505)
    {
        hdB513 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB513 = hdB505;
    }
    if (hdB513)
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
    bool _1868 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1878;
    if (_1868)
    {
        _1878 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1878 = _1868;
    }
    if (_1878)
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
        bool _1903 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1918;
        if (!_1903)
        {
            _1918 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1918 = _1903;
        }
        if (_1918)
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
