#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1891;
vec4 _RESERVED_IDENTIFIER_FIXUP_1892;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _93 = hdOverride >= 0;
    bool _102;
    if (_93)
    {
        _102 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _102 = _93;
    }
    vec4 _103;
    if (_102)
    {
        _103 = vec4(float(hdOverride));
    }
    else
    {
        _103 = value;
    }
    return _103;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _120 = hdOverride >= 0;
    bool _129;
    if (_120)
    {
        _129 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _129 = _120;
    }
    vec4 _130;
    if (_129)
    {
        _130 = vec4(float(hdOverride));
    }
    else
    {
        _130 = value;
    }
    return _130;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _55 = hdOverride >= 0;
    bool _75;
    if (_55)
    {
        _75 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _75 = _55;
    }
    vec4 _76;
    if (_75)
    {
        _76 = vec4(float(hdOverride));
    }
    else
    {
        _76 = value;
    }
    return _76;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _147 = hdOverride >= 0;
    bool _157;
    if (_147)
    {
        _157 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _157 = _147;
    }
    vec4 _158;
    if (_157)
    {
        _158 = vec4(float(hdOverride));
    }
    else
    {
        _158 = value;
    }
    return _158;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _175 = hdOverride >= 0;
    bool _185;
    if (_175)
    {
        _185 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _185 = _175;
    }
    vec4 _186;
    if (_185)
    {
        _186 = vec4(float(hdOverride));
    }
    else
    {
        _186 = value;
    }
    return _186;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _204 = hdOverride >= 0;
    bool _214;
    if (_204)
    {
        _214 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _214 = _204;
    }
    vec4 _215;
    if (_214)
    {
        _215 = vec4(float(hdOverride));
    }
    else
    {
        _215 = value;
    }
    return _215;
}

void HDActual()
{
    vec3 _RESERVED_IDENTIFIER_FIXUP_696 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1891).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_699 = _RESERVED_IDENTIFIER_FIXUP_696 + _RESERVED_IDENTIFIER_FIXUP_696;
    float _RESERVED_IDENTIFIER_FIXUP_701 = _RESERVED_IDENTIFIER_FIXUP_699.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1548;
    _RESERVED_IDENTIFIER_FIXUP_1548.x = _RESERVED_IDENTIFIER_FIXUP_701;
    _RESERVED_IDENTIFIER_FIXUP_1548.y = _RESERVED_IDENTIFIER_FIXUP_699.y;
    _RESERVED_IDENTIFIER_FIXUP_1548.z = _RESERVED_IDENTIFIER_FIXUP_699.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_707 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_710 = _RESERVED_IDENTIFIER_FIXUP_707 * _RESERVED_IDENTIFIER_FIXUP_1548.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1554;
    _RESERVED_IDENTIFIER_FIXUP_1554.x = _RESERVED_IDENTIFIER_FIXUP_710.x;
    _RESERVED_IDENTIFIER_FIXUP_1554.y = _RESERVED_IDENTIFIER_FIXUP_710.y;
    _RESERVED_IDENTIFIER_FIXUP_1554.z = _RESERVED_IDENTIFIER_FIXUP_710.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_719 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_727 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_719.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_728 = mix(_RESERVED_IDENTIFIER_FIXUP_1554.xyz, _RESERVED_IDENTIFIER_FIXUP_707, _RESERVED_IDENTIFIER_FIXUP_727);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1560;
    _RESERVED_IDENTIFIER_FIXUP_1560.x = _RESERVED_IDENTIFIER_FIXUP_728.x;
    _RESERVED_IDENTIFIER_FIXUP_1560.y = _RESERVED_IDENTIFIER_FIXUP_728.y;
    _RESERVED_IDENTIFIER_FIXUP_1560.z = _RESERVED_IDENTIFIER_FIXUP_728.z;
    vec2 param_1 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_738 = hdTex4(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_746 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_738.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1893 = vec4(_RESERVED_IDENTIFIER_FIXUP_701, _RESERVED_IDENTIFIER_FIXUP_699.yz, _RESERVED_IDENTIFIER_FIXUP_746);
    _RESERVED_IDENTIFIER_FIXUP_1893.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_746;
    vec2 param_2 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_754 = hdTex0(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_757 = _RESERVED_IDENTIFIER_FIXUP_754 * _RESERVED_IDENTIFIER_FIXUP_1893.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1571;
    _RESERVED_IDENTIFIER_FIXUP_1571.x = _RESERVED_IDENTIFIER_FIXUP_757.x;
    _RESERVED_IDENTIFIER_FIXUP_1571.y = _RESERVED_IDENTIFIER_FIXUP_757.y;
    _RESERVED_IDENTIFIER_FIXUP_1571.z = _RESERVED_IDENTIFIER_FIXUP_757.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_771 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_719.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = mix(_RESERVED_IDENTIFIER_FIXUP_1571.xyz, _RESERVED_IDENTIFIER_FIXUP_754, _RESERVED_IDENTIFIER_FIXUP_771);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1577;
    _RESERVED_IDENTIFIER_FIXUP_1577.x = _RESERVED_IDENTIFIER_FIXUP_772.x;
    _RESERVED_IDENTIFIER_FIXUP_1577.y = _RESERVED_IDENTIFIER_FIXUP_772.y;
    _RESERVED_IDENTIFIER_FIXUP_1577.z = _RESERVED_IDENTIFIER_FIXUP_772.z;
    vec2 param_3 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_792 = hdTex2(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_793 = _RESERVED_IDENTIFIER_FIXUP_1893.xyz * _RESERVED_IDENTIFIER_FIXUP_792;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1583;
    _RESERVED_IDENTIFIER_FIXUP_1583.x = _RESERVED_IDENTIFIER_FIXUP_793.x;
    _RESERVED_IDENTIFIER_FIXUP_1583.y = _RESERVED_IDENTIFIER_FIXUP_793.y;
    _RESERVED_IDENTIFIER_FIXUP_1583.z = _RESERVED_IDENTIFIER_FIXUP_793.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_807 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_719.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_808 = mix(_RESERVED_IDENTIFIER_FIXUP_1583.xyz, _RESERVED_IDENTIFIER_FIXUP_792, _RESERVED_IDENTIFIER_FIXUP_807);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1589;
    _RESERVED_IDENTIFIER_FIXUP_1589.x = _RESERVED_IDENTIFIER_FIXUP_808.x;
    _RESERVED_IDENTIFIER_FIXUP_1589.y = _RESERVED_IDENTIFIER_FIXUP_808.y;
    _RESERVED_IDENTIFIER_FIXUP_1589.z = _RESERVED_IDENTIFIER_FIXUP_808.z;
    vec2 param_4 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_828 = hdTex3(param_4).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_829 = _RESERVED_IDENTIFIER_FIXUP_1893.xyz * _RESERVED_IDENTIFIER_FIXUP_828;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1595;
    _RESERVED_IDENTIFIER_FIXUP_1595.x = _RESERVED_IDENTIFIER_FIXUP_829.x;
    _RESERVED_IDENTIFIER_FIXUP_1595.y = _RESERVED_IDENTIFIER_FIXUP_829.y;
    _RESERVED_IDENTIFIER_FIXUP_1595.z = _RESERVED_IDENTIFIER_FIXUP_829.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_843 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_719.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_844 = mix(_RESERVED_IDENTIFIER_FIXUP_1595.xyz, _RESERVED_IDENTIFIER_FIXUP_828, _RESERVED_IDENTIFIER_FIXUP_843);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1601;
    _RESERVED_IDENTIFIER_FIXUP_1601.x = _RESERVED_IDENTIFIER_FIXUP_844.x;
    _RESERVED_IDENTIFIER_FIXUP_1601.y = _RESERVED_IDENTIFIER_FIXUP_844.y;
    _RESERVED_IDENTIFIER_FIXUP_1601.z = _RESERVED_IDENTIFIER_FIXUP_844.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_856 = (_RESERVED_IDENTIFIER_FIXUP_1601 * _RESERVED_IDENTIFIER_FIXUP_738.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1589 * _RESERVED_IDENTIFIER_FIXUP_738.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1577 * _RESERVED_IDENTIFIER_FIXUP_1893.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1560 * _RESERVED_IDENTIFIER_FIXUP_738.xxxx)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_871 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_874 = _RESERVED_IDENTIFIER_FIXUP_871.xy;
    float _RESERVED_IDENTIFIER_FIXUP_876 = _RESERVED_IDENTIFIER_FIXUP_871.w;
    vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_874;
    float param_6 = _RESERVED_IDENTIFIER_FIXUP_876;
    vec4 _RESERVED_IDENTIFIER_FIXUP_877 = hdLod5(param_5, param_6);
    vec2 _RESERVED_IDENTIFIER_FIXUP_880 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_884 = _RESERVED_IDENTIFIER_FIXUP_880.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1616;
    _RESERVED_IDENTIFIER_FIXUP_1616.w = _RESERVED_IDENTIFIER_FIXUP_884;
    vec2 _RESERVED_IDENTIFIER_FIXUP_888 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_890 = _RESERVED_IDENTIFIER_FIXUP_888.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1618 = _RESERVED_IDENTIFIER_FIXUP_877;
    _RESERVED_IDENTIFIER_FIXUP_1618.y = _RESERVED_IDENTIFIER_FIXUP_890;
    float _RESERVED_IDENTIFIER_FIXUP_892 = _RESERVED_IDENTIFIER_FIXUP_888.y;
    _RESERVED_IDENTIFIER_FIXUP_1618.z = _RESERVED_IDENTIFIER_FIXUP_892;
    vec2 _RESERVED_IDENTIFIER_FIXUP_898 = _RESERVED_IDENTIFIER_FIXUP_1618.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1622 = _RESERVED_IDENTIFIER_FIXUP_1616;
    _RESERVED_IDENTIFIER_FIXUP_1622.x = _RESERVED_IDENTIFIER_FIXUP_898.x;
    _RESERVED_IDENTIFIER_FIXUP_1622.y = _RESERVED_IDENTIFIER_FIXUP_898.y;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1622.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_884;
    float _RESERVED_IDENTIFIER_FIXUP_913 = _RESERVED_IDENTIFIER_FIXUP_877.x + hdLod5(param_7, param_8).x;
    _RESERVED_IDENTIFIER_FIXUP_856.w = _RESERVED_IDENTIFIER_FIXUP_913;
    vec2 _RESERVED_IDENTIFIER_FIXUP_927 = _RESERVED_IDENTIFIER_FIXUP_1618.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1635 = _RESERVED_IDENTIFIER_FIXUP_1616;
    _RESERVED_IDENTIFIER_FIXUP_1635.x = _RESERVED_IDENTIFIER_FIXUP_927.x;
    _RESERVED_IDENTIFIER_FIXUP_1635.y = _RESERVED_IDENTIFIER_FIXUP_927.y;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1635.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_884;
    float _RESERVED_IDENTIFIER_FIXUP_942 = _RESERVED_IDENTIFIER_FIXUP_913 + hdLod5(param_9, param_10).x;
    _RESERVED_IDENTIFIER_FIXUP_856.w = _RESERVED_IDENTIFIER_FIXUP_942;
    vec2 _RESERVED_IDENTIFIER_FIXUP_949 = _RESERVED_IDENTIFIER_FIXUP_1618.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1644;
    _RESERVED_IDENTIFIER_FIXUP_1644.x = _RESERVED_IDENTIFIER_FIXUP_949.x;
    _RESERVED_IDENTIFIER_FIXUP_1644.y = _RESERVED_IDENTIFIER_FIXUP_949.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_959 = _RESERVED_IDENTIFIER_FIXUP_1618.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1648;
    _RESERVED_IDENTIFIER_FIXUP_1648.x = _RESERVED_IDENTIFIER_FIXUP_959.x;
    _RESERVED_IDENTIFIER_FIXUP_1648.y = _RESERVED_IDENTIFIER_FIXUP_959.y;
    _RESERVED_IDENTIFIER_FIXUP_1644.w = _RESERVED_IDENTIFIER_FIXUP_884;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1644.xy;
    float param_12 = _RESERVED_IDENTIFIER_FIXUP_884;
    float _RESERVED_IDENTIFIER_FIXUP_981 = _RESERVED_IDENTIFIER_FIXUP_942 + hdLod5(param_11, param_12).x;
    _RESERVED_IDENTIFIER_FIXUP_856.w = _RESERVED_IDENTIFIER_FIXUP_981;
    _RESERVED_IDENTIFIER_FIXUP_1648.w = _RESERVED_IDENTIFIER_FIXUP_884;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1648.xy;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_884;
    float _RESERVED_IDENTIFIER_FIXUP_1000 = _RESERVED_IDENTIFIER_FIXUP_981 + hdLod5(param_13, param_14).x;
    _RESERVED_IDENTIFIER_FIXUP_856.w = _RESERVED_IDENTIFIER_FIXUP_1000;
    float _RESERVED_IDENTIFIER_FIXUP_1005 = (_RESERVED_IDENTIFIER_FIXUP_1000 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_856.w = _RESERVED_IDENTIFIER_FIXUP_1005;
    float _RESERVED_IDENTIFIER_FIXUP_1013 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1894 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_1013);
    float _RESERVED_IDENTIFIER_FIXUP_1019 = clamp((_RESERVED_IDENTIFIER_FIXUP_1013 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1894.w = _RESERVED_IDENTIFIER_FIXUP_1019;
    float _RESERVED_IDENTIFIER_FIXUP_1026 = (_RESERVED_IDENTIFIER_FIXUP_1019 * _RESERVED_IDENTIFIER_FIXUP_1005) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_856.w = _RESERVED_IDENTIFIER_FIXUP_1026;
    _RESERVED_IDENTIFIER_FIXUP_1894.w = min(_RESERVED_IDENTIFIER_FIXUP_1026, _RESERVED_IDENTIFIER_FIXUP_738.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1038 = _RESERVED_IDENTIFIER_FIXUP_1894.xyz * _RESERVED_IDENTIFIER_FIXUP_1894.www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1688;
    _RESERVED_IDENTIFIER_FIXUP_1688.x = _RESERVED_IDENTIFIER_FIXUP_1038.x;
    _RESERVED_IDENTIFIER_FIXUP_1688.y = _RESERVED_IDENTIFIER_FIXUP_1038.y;
    _RESERVED_IDENTIFIER_FIXUP_1688.z = _RESERVED_IDENTIFIER_FIXUP_1038.z;
    _RESERVED_IDENTIFIER_FIXUP_856.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1064 = (_RESERVED_IDENTIFIER_FIXUP_856.xyz * _RESERVED_IDENTIFIER_FIXUP_856.www) + _RESERVED_IDENTIFIER_FIXUP_1688.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1699;
    _RESERVED_IDENTIFIER_FIXUP_1699.x = _RESERVED_IDENTIFIER_FIXUP_1064.x;
    _RESERVED_IDENTIFIER_FIXUP_1699.y = _RESERVED_IDENTIFIER_FIXUP_1064.y;
    _RESERVED_IDENTIFIER_FIXUP_1699.z = _RESERVED_IDENTIFIER_FIXUP_1064.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1077 = _RESERVED_IDENTIFIER_FIXUP_1699.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1705;
    _RESERVED_IDENTIFIER_FIXUP_1705.x = _RESERVED_IDENTIFIER_FIXUP_1077.x;
    _RESERVED_IDENTIFIER_FIXUP_1705.y = _RESERVED_IDENTIFIER_FIXUP_1077.y;
    _RESERVED_IDENTIFIER_FIXUP_1705.z = _RESERVED_IDENTIFIER_FIXUP_1077.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1092 = _RESERVED_IDENTIFIER_FIXUP_1705.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1711;
    _RESERVED_IDENTIFIER_FIXUP_1711.x = _RESERVED_IDENTIFIER_FIXUP_1092.x;
    _RESERVED_IDENTIFIER_FIXUP_1711.y = _RESERVED_IDENTIFIER_FIXUP_1092.y;
    _RESERVED_IDENTIFIER_FIXUP_1711.z = _RESERVED_IDENTIFIER_FIXUP_1092.z;
    vec2 param_15 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1128 = hdTex0(param_15);
    vec2 param_16 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1132 = hdTex1(param_16);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1137 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1137.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1719;
    _RESERVED_IDENTIFIER_FIXUP_1719.x = _RESERVED_IDENTIFIER_FIXUP_1139;
    _RESERVED_IDENTIFIER_FIXUP_1719.y = _RESERVED_IDENTIFIER_FIXUP_1137.y;
    _RESERVED_IDENTIFIER_FIXUP_1719.z = _RESERVED_IDENTIFIER_FIXUP_1137.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1145 = _RESERVED_IDENTIFIER_FIXUP_1132.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1148 = _RESERVED_IDENTIFIER_FIXUP_1145 * _RESERVED_IDENTIFIER_FIXUP_1719.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1725;
    _RESERVED_IDENTIFIER_FIXUP_1725.x = _RESERVED_IDENTIFIER_FIXUP_1148.x;
    _RESERVED_IDENTIFIER_FIXUP_1725.y = _RESERVED_IDENTIFIER_FIXUP_1148.y;
    _RESERVED_IDENTIFIER_FIXUP_1725.z = _RESERVED_IDENTIFIER_FIXUP_1148.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1166 = mix(_RESERVED_IDENTIFIER_FIXUP_1725.xyz, _RESERVED_IDENTIFIER_FIXUP_1145, _RESERVED_IDENTIFIER_FIXUP_727);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1731 = _RESERVED_IDENTIFIER_FIXUP_1132;
    _RESERVED_IDENTIFIER_FIXUP_1731.x = _RESERVED_IDENTIFIER_FIXUP_1166.x;
    _RESERVED_IDENTIFIER_FIXUP_1731.y = _RESERVED_IDENTIFIER_FIXUP_1166.y;
    _RESERVED_IDENTIFIER_FIXUP_1731.z = _RESERVED_IDENTIFIER_FIXUP_1166.z;
    vec2 param_17 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1176 = hdTex4(param_17);
    float _RESERVED_IDENTIFIER_FIXUP_1184 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1176.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1895 = vec4(_RESERVED_IDENTIFIER_FIXUP_1139, _RESERVED_IDENTIFIER_FIXUP_1137.yz, _RESERVED_IDENTIFIER_FIXUP_1184);
    _RESERVED_IDENTIFIER_FIXUP_1895.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1184;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1192 = _RESERVED_IDENTIFIER_FIXUP_1128.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_1192 * _RESERVED_IDENTIFIER_FIXUP_1895.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1742;
    _RESERVED_IDENTIFIER_FIXUP_1742.x = _RESERVED_IDENTIFIER_FIXUP_1195.x;
    _RESERVED_IDENTIFIER_FIXUP_1742.y = _RESERVED_IDENTIFIER_FIXUP_1195.y;
    _RESERVED_IDENTIFIER_FIXUP_1742.z = _RESERVED_IDENTIFIER_FIXUP_1195.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1210 = mix(_RESERVED_IDENTIFIER_FIXUP_1742.xyz, _RESERVED_IDENTIFIER_FIXUP_1192, _RESERVED_IDENTIFIER_FIXUP_771);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1748 = _RESERVED_IDENTIFIER_FIXUP_1128;
    _RESERVED_IDENTIFIER_FIXUP_1748.x = _RESERVED_IDENTIFIER_FIXUP_1210.x;
    _RESERVED_IDENTIFIER_FIXUP_1748.y = _RESERVED_IDENTIFIER_FIXUP_1210.y;
    _RESERVED_IDENTIFIER_FIXUP_1748.z = _RESERVED_IDENTIFIER_FIXUP_1210.z;
    vec2 param_18 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1226 = hdTex2(param_18);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_1226.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1895.xyz * _RESERVED_IDENTIFIER_FIXUP_1230;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1754;
    _RESERVED_IDENTIFIER_FIXUP_1754.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
    _RESERVED_IDENTIFIER_FIXUP_1754.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
    _RESERVED_IDENTIFIER_FIXUP_1754.z = _RESERVED_IDENTIFIER_FIXUP_1231.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1246 = mix(_RESERVED_IDENTIFIER_FIXUP_1754.xyz, _RESERVED_IDENTIFIER_FIXUP_1230, _RESERVED_IDENTIFIER_FIXUP_807);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1760 = _RESERVED_IDENTIFIER_FIXUP_1226;
    _RESERVED_IDENTIFIER_FIXUP_1760.x = _RESERVED_IDENTIFIER_FIXUP_1246.x;
    _RESERVED_IDENTIFIER_FIXUP_1760.y = _RESERVED_IDENTIFIER_FIXUP_1246.y;
    _RESERVED_IDENTIFIER_FIXUP_1760.z = _RESERVED_IDENTIFIER_FIXUP_1246.z;
    vec2 param_19 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1262 = hdTex3(param_19);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1266 = _RESERVED_IDENTIFIER_FIXUP_1262.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1267 = _RESERVED_IDENTIFIER_FIXUP_1895.xyz * _RESERVED_IDENTIFIER_FIXUP_1266;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1766;
    _RESERVED_IDENTIFIER_FIXUP_1766.x = _RESERVED_IDENTIFIER_FIXUP_1267.x;
    _RESERVED_IDENTIFIER_FIXUP_1766.y = _RESERVED_IDENTIFIER_FIXUP_1267.y;
    _RESERVED_IDENTIFIER_FIXUP_1766.z = _RESERVED_IDENTIFIER_FIXUP_1267.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1282 = mix(_RESERVED_IDENTIFIER_FIXUP_1766.xyz, _RESERVED_IDENTIFIER_FIXUP_1266, _RESERVED_IDENTIFIER_FIXUP_843);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1772 = _RESERVED_IDENTIFIER_FIXUP_1262;
    _RESERVED_IDENTIFIER_FIXUP_1772.x = _RESERVED_IDENTIFIER_FIXUP_1282.x;
    _RESERVED_IDENTIFIER_FIXUP_1772.y = _RESERVED_IDENTIFIER_FIXUP_1282.y;
    _RESERVED_IDENTIFIER_FIXUP_1772.z = _RESERVED_IDENTIFIER_FIXUP_1282.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1294 = (_RESERVED_IDENTIFIER_FIXUP_1772 * _RESERVED_IDENTIFIER_FIXUP_1176.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1760 * _RESERVED_IDENTIFIER_FIXUP_1176.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1748 * _RESERVED_IDENTIFIER_FIXUP_1895.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1731 * _RESERVED_IDENTIFIER_FIXUP_1176.xxxx)));
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_874;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_876;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315 = hdLod5(param_20, param_21);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1789 = _RESERVED_IDENTIFIER_FIXUP_1315;
    _RESERVED_IDENTIFIER_FIXUP_1789.y = _RESERVED_IDENTIFIER_FIXUP_890;
    _RESERVED_IDENTIFIER_FIXUP_1789.z = _RESERVED_IDENTIFIER_FIXUP_892;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1336 = _RESERVED_IDENTIFIER_FIXUP_1789.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1793 = _RESERVED_IDENTIFIER_FIXUP_1616;
    _RESERVED_IDENTIFIER_FIXUP_1793.x = _RESERVED_IDENTIFIER_FIXUP_1336.x;
    _RESERVED_IDENTIFIER_FIXUP_1793.y = _RESERVED_IDENTIFIER_FIXUP_1336.y;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1793.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_884;
    float _RESERVED_IDENTIFIER_FIXUP_1351 = _RESERVED_IDENTIFIER_FIXUP_1315.x + hdLod5(param_22, param_23).x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1800 = _RESERVED_IDENTIFIER_FIXUP_1294;
    _RESERVED_IDENTIFIER_FIXUP_1800.w = _RESERVED_IDENTIFIER_FIXUP_1351;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1365 = _RESERVED_IDENTIFIER_FIXUP_1789.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1806 = _RESERVED_IDENTIFIER_FIXUP_1616;
    _RESERVED_IDENTIFIER_FIXUP_1806.x = _RESERVED_IDENTIFIER_FIXUP_1365.x;
    _RESERVED_IDENTIFIER_FIXUP_1806.y = _RESERVED_IDENTIFIER_FIXUP_1365.y;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1806.xy;
    float param_25 = _RESERVED_IDENTIFIER_FIXUP_884;
    float _RESERVED_IDENTIFIER_FIXUP_1380 = _RESERVED_IDENTIFIER_FIXUP_1351 + hdLod5(param_24, param_25).x;
    _RESERVED_IDENTIFIER_FIXUP_1800.w = _RESERVED_IDENTIFIER_FIXUP_1380;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1387 = _RESERVED_IDENTIFIER_FIXUP_1789.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1815;
    _RESERVED_IDENTIFIER_FIXUP_1815.x = _RESERVED_IDENTIFIER_FIXUP_1387.x;
    _RESERVED_IDENTIFIER_FIXUP_1815.y = _RESERVED_IDENTIFIER_FIXUP_1387.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1397 = _RESERVED_IDENTIFIER_FIXUP_1789.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1819;
    _RESERVED_IDENTIFIER_FIXUP_1819.x = _RESERVED_IDENTIFIER_FIXUP_1397.x;
    _RESERVED_IDENTIFIER_FIXUP_1819.y = _RESERVED_IDENTIFIER_FIXUP_1397.y;
    _RESERVED_IDENTIFIER_FIXUP_1815.w = _RESERVED_IDENTIFIER_FIXUP_884;
    vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1815.xy;
    float param_27 = _RESERVED_IDENTIFIER_FIXUP_884;
    float _RESERVED_IDENTIFIER_FIXUP_1419 = _RESERVED_IDENTIFIER_FIXUP_1380 + hdLod5(param_26, param_27).x;
    _RESERVED_IDENTIFIER_FIXUP_1800.w = _RESERVED_IDENTIFIER_FIXUP_1419;
    _RESERVED_IDENTIFIER_FIXUP_1819.w = _RESERVED_IDENTIFIER_FIXUP_884;
    vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_1819.xy;
    float param_29 = _RESERVED_IDENTIFIER_FIXUP_884;
    float _RESERVED_IDENTIFIER_FIXUP_1438 = _RESERVED_IDENTIFIER_FIXUP_1419 + hdLod5(param_28, param_29).x;
    _RESERVED_IDENTIFIER_FIXUP_1800.w = _RESERVED_IDENTIFIER_FIXUP_1438;
    float _RESERVED_IDENTIFIER_FIXUP_1443 = (_RESERVED_IDENTIFIER_FIXUP_1438 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1800.w = _RESERVED_IDENTIFIER_FIXUP_1443;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1896 = vec4(_RESERVED_IDENTIFIER_FIXUP_1294.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_1013);
    float _RESERVED_IDENTIFIER_FIXUP_1457 = clamp((_RESERVED_IDENTIFIER_FIXUP_1013 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1896.w = _RESERVED_IDENTIFIER_FIXUP_1457;
    float _RESERVED_IDENTIFIER_FIXUP_1464 = (_RESERVED_IDENTIFIER_FIXUP_1457 * _RESERVED_IDENTIFIER_FIXUP_1443) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1800.w = _RESERVED_IDENTIFIER_FIXUP_1464;
    float _RESERVED_IDENTIFIER_FIXUP_1470 = min(_RESERVED_IDENTIFIER_FIXUP_1464, _RESERVED_IDENTIFIER_FIXUP_1176.w);
    _RESERVED_IDENTIFIER_FIXUP_1896.w = _RESERVED_IDENTIFIER_FIXUP_1470;
    float _RESERVED_IDENTIFIER_FIXUP_1486 = (_RESERVED_IDENTIFIER_FIXUP_1470 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1800.w = _RESERVED_IDENTIFIER_FIXUP_1486;
    _RESERVED_IDENTIFIER_FIXUP_1800.w = _RESERVED_IDENTIFIER_FIXUP_1486;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1502 = (_RESERVED_IDENTIFIER_FIXUP_1800.xyz * _RESERVED_IDENTIFIER_FIXUP_1800.www) + vec4(_RESERVED_IDENTIFIER_FIXUP_1896.xyz * _RESERVED_IDENTIFIER_FIXUP_1896.www, _RESERVED_IDENTIFIER_FIXUP_1470).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1872;
    _RESERVED_IDENTIFIER_FIXUP_1872.x = _RESERVED_IDENTIFIER_FIXUP_1502.x;
    _RESERVED_IDENTIFIER_FIXUP_1872.y = _RESERVED_IDENTIFIER_FIXUP_1502.y;
    _RESERVED_IDENTIFIER_FIXUP_1872.z = _RESERVED_IDENTIFIER_FIXUP_1502.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1515 = _RESERVED_IDENTIFIER_FIXUP_1872.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1878;
    _RESERVED_IDENTIFIER_FIXUP_1878.x = _RESERVED_IDENTIFIER_FIXUP_1515.x;
    _RESERVED_IDENTIFIER_FIXUP_1878.y = _RESERVED_IDENTIFIER_FIXUP_1515.y;
    _RESERVED_IDENTIFIER_FIXUP_1878.z = _RESERVED_IDENTIFIER_FIXUP_1515.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1878.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_554 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_563;
    if (_RESERVED_IDENTIFIER_FIXUP_554)
    {
        _RESERVED_IDENTIFIER_FIXUP_563 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_563 = _RESERVED_IDENTIFIER_FIXUP_554;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_563)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_600 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1711.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_626 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1541;
    if (_RESERVED_IDENTIFIER_FIXUP_600 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1541 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_600), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_626);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1541 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_626);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1541;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1486);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec3 hdB62 = v0.xyz + v0.xyz;
    r2.x = hdB62.x;
    r2.y = hdB62.y;
    r2.z = hdB62.z;
    vec3 hdB78 = r1.xyz * r2.xyz;
    r3.x = hdB78.x;
    r3.y = hdB78.y;
    r3.z = hdB78.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB101 = r1;
    vec3 hdB110 = mix(r3.xyz, hdB101.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB110.x;
    r1.y = hdB110.y;
    r1.z = hdB110.z;
    vec2 param_2 = v4.wz;
    r3 = hdTex4(param_2);
    r1 *= r3.xxxx;
    r2.w = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r2.w = (-r2.w) + 1.0;
    vec3 hdB143 = r0.xyz * r2.xyz;
    r5.x = hdB143.x;
    r5.y = hdB143.y;
    r5.z = hdB143.z;
    vec4 hdB152 = r0;
    vec3 hdB158 = mix(r5.xyz, hdB152.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB158.x;
    r0.y = hdB158.y;
    r0.z = hdB158.z;
    r0 = (r0 * r2.wwww) + r1;
    vec2 param_3 = v3.wz;
    r1 = hdTex2(param_3);
    vec3 hdB180 = r2.xyz * r1.xyz;
    r5.x = hdB180.x;
    r5.y = hdB180.y;
    r5.z = hdB180.z;
    vec4 hdB189 = r1;
    vec3 hdB195 = mix(r5.xyz, hdB189.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r1.x = hdB195.x;
    r1.y = hdB195.y;
    r1.z = hdB195.z;
    r0 = (r1 * r3.yyyy) + r0;
    vec2 param_4 = v4.xy;
    r1 = hdTex3(param_4);
    vec4 hdB213 = r2;
    vec3 hdB217 = hdB213.xyz * r1.xyz;
    r2.x = hdB217.x;
    r2.y = hdB217.y;
    r2.z = hdB217.z;
    vec4 hdB226 = r1;
    vec3 hdB232 = mix(r2.xyz, hdB226.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r1.x = hdB232.x;
    r1.y = hdB232.y;
    r1.z = hdB232.z;
    r0 = (r1 * r3.zzzz) + r0;
    vec3 hdB249 = r0.www * v1.xyz;
    r1.x = hdB249.x;
    r1.y = hdB249.y;
    r1.z = hdB249.z;
    r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_5 = r2.xy;
    float param_6 = r2.w;
    r2 = hdLod5(param_5, param_6);
    vec2 hdB273 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB273.x;
    r4.w = hdB273.y;
    vec2 hdB282 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.y = hdB282.x;
    r2.z = hdB282.y;
    vec2 hdB293 = r2.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB293.x;
    r4.y = hdB293.y;
    vec2 param_7 = r4.xy;
    float param_8 = r4.w;
    r4 = hdLod5(param_7, param_8);
    r0.w = r2.x + r4.x;
    vec2 hdB312 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB312.x;
    r4.w = hdB312.y;
    vec2 hdB323 = r2.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = hdB323.x;
    r4.y = hdB323.y;
    vec2 param_9 = r4.xy;
    float param_10 = r4.w;
    r4 = hdLod5(param_9, param_10);
    r0.w += r4.x;
    vec2 hdB346 = r2.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = hdB346.x;
    r4.y = hdB346.y;
    vec4 hdB351 = r2;
    vec2 hdB357 = hdB351.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB357.x;
    r2.y = hdB357.y;
    vec2 hdB364 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB364.x;
    r4.w = hdB364.y;
    vec2 param_11 = r4.xy;
    float param_12 = r4.w;
    r4 = hdLod5(param_11, param_12);
    r0.w += r4.x;
    vec2 hdB383 = vec2(1.0, 0.0) * v5.zx;
    r2.z = hdB383.x;
    r2.w = hdB383.y;
    vec2 param_13 = r2.xy;
    float param_14 = r2.w;
    r2 = hdLod5(param_13, param_14);
    r0.w += r2.x;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.w = max(abs(v5.x), abs(v5.y));
    r1.w = clamp((r1.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.w * r0.w) + 1.0;
    r1.w = min(r0.w, r3.w);
    vec4 hdB436 = r1;
    vec4 hdB438 = r1;
    vec3 hdB440 = hdB436.xyz * hdB438.www;
    r1.x = hdB440.x;
    r1.y = hdB440.y;
    r1.z = hdB440.z;
    r0.w = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB454 = r0;
    vec4 hdB456 = r0;
    vec3 hdB461 = (hdB454.xyz * hdB456.www) + r1.xyz;
    r0.x = hdB461.x;
    r0.y = hdB461.y;
    r0.z = hdB461.z;
    vec4 hdB468 = r0;
    vec3 hdB475 = hdB468.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB475.x;
    r0.y = hdB475.y;
    r0.z = hdB475.z;
    vec3 hdB490 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB490.x;
    oC0.y = hdB490.y;
    oC0.z = hdB490.z;
    oC0.w = 1.0;
    bool hdB502 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB510;
    if (hdB502)
    {
        hdB510 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB510 = hdB502;
    }
    if (hdB510)
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
    bool _1894 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1904;
    if (_1894)
    {
        _1904 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1904 = _1894;
    }
    if (_1904)
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
        bool _1929 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1944;
        if (!_1929)
        {
            _1944 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1944 = _1929;
        }
        if (_1944)
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
