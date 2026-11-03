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
float _RESERVED_IDENTIFIER_FIXUP_1830;
vec4 _RESERVED_IDENTIFIER_FIXUP_1831;


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
    vec3 _RESERVED_IDENTIFIER_FIXUP_678 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1830).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_681 = _RESERVED_IDENTIFIER_FIXUP_678 + _RESERVED_IDENTIFIER_FIXUP_678;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1497;
    _RESERVED_IDENTIFIER_FIXUP_1497.x = _RESERVED_IDENTIFIER_FIXUP_681.x;
    _RESERVED_IDENTIFIER_FIXUP_1497.y = _RESERVED_IDENTIFIER_FIXUP_681.y;
    _RESERVED_IDENTIFIER_FIXUP_1497.z = _RESERVED_IDENTIFIER_FIXUP_681.z;
    vec2 param = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_689 = hdTex0(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_692 = _RESERVED_IDENTIFIER_FIXUP_689 * _RESERVED_IDENTIFIER_FIXUP_1497.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1503;
    _RESERVED_IDENTIFIER_FIXUP_1503.x = _RESERVED_IDENTIFIER_FIXUP_692.x;
    _RESERVED_IDENTIFIER_FIXUP_1503.y = _RESERVED_IDENTIFIER_FIXUP_692.y;
    _RESERVED_IDENTIFIER_FIXUP_1503.z = _RESERVED_IDENTIFIER_FIXUP_692.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_701 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_709 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_701.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_710 = mix(_RESERVED_IDENTIFIER_FIXUP_1503.xyz, _RESERVED_IDENTIFIER_FIXUP_689, _RESERVED_IDENTIFIER_FIXUP_709);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1509;
    _RESERVED_IDENTIFIER_FIXUP_1509.x = _RESERVED_IDENTIFIER_FIXUP_710.x;
    _RESERVED_IDENTIFIER_FIXUP_1509.y = _RESERVED_IDENTIFIER_FIXUP_710.y;
    _RESERVED_IDENTIFIER_FIXUP_1509.z = _RESERVED_IDENTIFIER_FIXUP_710.z;
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_718 = hdTex1(param_1).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_721 = _RESERVED_IDENTIFIER_FIXUP_718 * _RESERVED_IDENTIFIER_FIXUP_1497.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1515;
    _RESERVED_IDENTIFIER_FIXUP_1515.x = _RESERVED_IDENTIFIER_FIXUP_721.x;
    _RESERVED_IDENTIFIER_FIXUP_1515.y = _RESERVED_IDENTIFIER_FIXUP_721.y;
    _RESERVED_IDENTIFIER_FIXUP_1515.z = _RESERVED_IDENTIFIER_FIXUP_721.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_735 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_701.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_736 = mix(_RESERVED_IDENTIFIER_FIXUP_1515.xyz, _RESERVED_IDENTIFIER_FIXUP_718, _RESERVED_IDENTIFIER_FIXUP_735);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1521;
    _RESERVED_IDENTIFIER_FIXUP_1521.x = _RESERVED_IDENTIFIER_FIXUP_736.x;
    _RESERVED_IDENTIFIER_FIXUP_1521.y = _RESERVED_IDENTIFIER_FIXUP_736.y;
    _RESERVED_IDENTIFIER_FIXUP_1521.z = _RESERVED_IDENTIFIER_FIXUP_736.z;
    vec2 param_2 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_746 = hdTex4(param_2);
    vec2 param_3 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_759 = hdTex2(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_760 = _RESERVED_IDENTIFIER_FIXUP_1497.xyz * _RESERVED_IDENTIFIER_FIXUP_759;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1527;
    _RESERVED_IDENTIFIER_FIXUP_1527.x = _RESERVED_IDENTIFIER_FIXUP_760.x;
    _RESERVED_IDENTIFIER_FIXUP_1527.y = _RESERVED_IDENTIFIER_FIXUP_760.y;
    _RESERVED_IDENTIFIER_FIXUP_1527.z = _RESERVED_IDENTIFIER_FIXUP_760.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_774 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_701.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = mix(_RESERVED_IDENTIFIER_FIXUP_1527.xyz, _RESERVED_IDENTIFIER_FIXUP_759, _RESERVED_IDENTIFIER_FIXUP_774);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1533;
    _RESERVED_IDENTIFIER_FIXUP_1533.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1533.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1533.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    vec2 param_4 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_794 = hdTex3(param_4).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_795 = _RESERVED_IDENTIFIER_FIXUP_1497.xyz * _RESERVED_IDENTIFIER_FIXUP_794;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1539;
    _RESERVED_IDENTIFIER_FIXUP_1539.x = _RESERVED_IDENTIFIER_FIXUP_795.x;
    _RESERVED_IDENTIFIER_FIXUP_1539.y = _RESERVED_IDENTIFIER_FIXUP_795.y;
    _RESERVED_IDENTIFIER_FIXUP_1539.z = _RESERVED_IDENTIFIER_FIXUP_795.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_809 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_701.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_810 = mix(_RESERVED_IDENTIFIER_FIXUP_1539.xyz, _RESERVED_IDENTIFIER_FIXUP_794, _RESERVED_IDENTIFIER_FIXUP_809);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1545;
    _RESERVED_IDENTIFIER_FIXUP_1545.x = _RESERVED_IDENTIFIER_FIXUP_810.x;
    _RESERVED_IDENTIFIER_FIXUP_1545.y = _RESERVED_IDENTIFIER_FIXUP_810.y;
    _RESERVED_IDENTIFIER_FIXUP_1545.z = _RESERVED_IDENTIFIER_FIXUP_810.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_836 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_839 = _RESERVED_IDENTIFIER_FIXUP_836.xy;
    float _RESERVED_IDENTIFIER_FIXUP_841 = _RESERVED_IDENTIFIER_FIXUP_836.w;
    vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_839;
    float param_6 = _RESERVED_IDENTIFIER_FIXUP_841;
    vec4 _RESERVED_IDENTIFIER_FIXUP_842 = hdLod5(param_5, param_6);
    vec2 _RESERVED_IDENTIFIER_FIXUP_845 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_849 = _RESERVED_IDENTIFIER_FIXUP_845.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1560;
    _RESERVED_IDENTIFIER_FIXUP_1560.w = _RESERVED_IDENTIFIER_FIXUP_849;
    vec2 _RESERVED_IDENTIFIER_FIXUP_853 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_855 = _RESERVED_IDENTIFIER_FIXUP_853.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1562 = _RESERVED_IDENTIFIER_FIXUP_842;
    _RESERVED_IDENTIFIER_FIXUP_1562.y = _RESERVED_IDENTIFIER_FIXUP_855;
    float _RESERVED_IDENTIFIER_FIXUP_857 = _RESERVED_IDENTIFIER_FIXUP_853.y;
    _RESERVED_IDENTIFIER_FIXUP_1562.z = _RESERVED_IDENTIFIER_FIXUP_857;
    vec2 _RESERVED_IDENTIFIER_FIXUP_863 = _RESERVED_IDENTIFIER_FIXUP_1562.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1566 = _RESERVED_IDENTIFIER_FIXUP_1560;
    _RESERVED_IDENTIFIER_FIXUP_1566.x = _RESERVED_IDENTIFIER_FIXUP_863.x;
    _RESERVED_IDENTIFIER_FIXUP_1566.y = _RESERVED_IDENTIFIER_FIXUP_863.y;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1566.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_849;
    float _RESERVED_IDENTIFIER_FIXUP_878 = _RESERVED_IDENTIFIER_FIXUP_842.x + hdLod5(param_7, param_8).x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1832 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_878);
    vec2 _RESERVED_IDENTIFIER_FIXUP_892 = _RESERVED_IDENTIFIER_FIXUP_1562.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1579 = _RESERVED_IDENTIFIER_FIXUP_1560;
    _RESERVED_IDENTIFIER_FIXUP_1579.x = _RESERVED_IDENTIFIER_FIXUP_892.x;
    _RESERVED_IDENTIFIER_FIXUP_1579.y = _RESERVED_IDENTIFIER_FIXUP_892.y;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1579.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_849;
    float _RESERVED_IDENTIFIER_FIXUP_907 = _RESERVED_IDENTIFIER_FIXUP_878 + hdLod5(param_9, param_10).x;
    _RESERVED_IDENTIFIER_FIXUP_1832.w = _RESERVED_IDENTIFIER_FIXUP_907;
    vec2 _RESERVED_IDENTIFIER_FIXUP_914 = _RESERVED_IDENTIFIER_FIXUP_1562.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1588;
    _RESERVED_IDENTIFIER_FIXUP_1588.x = _RESERVED_IDENTIFIER_FIXUP_914.x;
    _RESERVED_IDENTIFIER_FIXUP_1588.y = _RESERVED_IDENTIFIER_FIXUP_914.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_924 = _RESERVED_IDENTIFIER_FIXUP_1562.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1592;
    _RESERVED_IDENTIFIER_FIXUP_1592.x = _RESERVED_IDENTIFIER_FIXUP_924.x;
    _RESERVED_IDENTIFIER_FIXUP_1592.y = _RESERVED_IDENTIFIER_FIXUP_924.y;
    _RESERVED_IDENTIFIER_FIXUP_1588.w = _RESERVED_IDENTIFIER_FIXUP_849;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1588.xy;
    float param_12 = _RESERVED_IDENTIFIER_FIXUP_849;
    float _RESERVED_IDENTIFIER_FIXUP_946 = _RESERVED_IDENTIFIER_FIXUP_907 + hdLod5(param_11, param_12).x;
    _RESERVED_IDENTIFIER_FIXUP_1832.w = _RESERVED_IDENTIFIER_FIXUP_946;
    _RESERVED_IDENTIFIER_FIXUP_1592.w = _RESERVED_IDENTIFIER_FIXUP_849;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1592.xy;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_849;
    float _RESERVED_IDENTIFIER_FIXUP_965 = _RESERVED_IDENTIFIER_FIXUP_946 + hdLod5(param_13, param_14).x;
    _RESERVED_IDENTIFIER_FIXUP_1832.w = _RESERVED_IDENTIFIER_FIXUP_965;
    float _RESERVED_IDENTIFIER_FIXUP_970 = (_RESERVED_IDENTIFIER_FIXUP_965 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1832.w = _RESERVED_IDENTIFIER_FIXUP_970;
    float _RESERVED_IDENTIFIER_FIXUP_984 = clamp((max(abs(texcoord4.x), abs(texcoord4.y)) * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_991 = (_RESERVED_IDENTIFIER_FIXUP_984 * _RESERVED_IDENTIFIER_FIXUP_970) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1832.w = _RESERVED_IDENTIFIER_FIXUP_991;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1630;
    _RESERVED_IDENTIFIER_FIXUP_1630.x = min(_RESERVED_IDENTIFIER_FIXUP_991, _RESERVED_IDENTIFIER_FIXUP_746.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1833 = vec4(_RESERVED_IDENTIFIER_FIXUP_1832.xyz * _RESERVED_IDENTIFIER_FIXUP_1630.xxx, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1029 = (mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1509, _RESERVED_IDENTIFIER_FIXUP_1521, _RESERVED_IDENTIFIER_FIXUP_746.xxxx), _RESERVED_IDENTIFIER_FIXUP_1533, _RESERVED_IDENTIFIER_FIXUP_746.yyyy), _RESERVED_IDENTIFIER_FIXUP_1545, _RESERVED_IDENTIFIER_FIXUP_746.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_1833.www) + _RESERVED_IDENTIFIER_FIXUP_1833.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1643;
    _RESERVED_IDENTIFIER_FIXUP_1643.x = _RESERVED_IDENTIFIER_FIXUP_1029.x;
    _RESERVED_IDENTIFIER_FIXUP_1643.y = _RESERVED_IDENTIFIER_FIXUP_1029.y;
    _RESERVED_IDENTIFIER_FIXUP_1643.z = _RESERVED_IDENTIFIER_FIXUP_1029.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1042 = _RESERVED_IDENTIFIER_FIXUP_1643.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1649;
    _RESERVED_IDENTIFIER_FIXUP_1649.x = _RESERVED_IDENTIFIER_FIXUP_1042.x;
    _RESERVED_IDENTIFIER_FIXUP_1649.y = _RESERVED_IDENTIFIER_FIXUP_1042.y;
    _RESERVED_IDENTIFIER_FIXUP_1649.z = _RESERVED_IDENTIFIER_FIXUP_1042.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1057 = _RESERVED_IDENTIFIER_FIXUP_1649.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1655;
    _RESERVED_IDENTIFIER_FIXUP_1655.x = _RESERVED_IDENTIFIER_FIXUP_1057.x;
    _RESERVED_IDENTIFIER_FIXUP_1655.y = _RESERVED_IDENTIFIER_FIXUP_1057.y;
    _RESERVED_IDENTIFIER_FIXUP_1655.z = _RESERVED_IDENTIFIER_FIXUP_1057.z;
    vec2 param_15 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1093 = hdTex0(param_15);
    vec2 param_16 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1097 = hdTex1(param_16);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1102 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1663;
    _RESERVED_IDENTIFIER_FIXUP_1663.x = _RESERVED_IDENTIFIER_FIXUP_1102.x;
    _RESERVED_IDENTIFIER_FIXUP_1663.y = _RESERVED_IDENTIFIER_FIXUP_1102.y;
    _RESERVED_IDENTIFIER_FIXUP_1663.z = _RESERVED_IDENTIFIER_FIXUP_1102.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1110 = _RESERVED_IDENTIFIER_FIXUP_1093.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1113 = _RESERVED_IDENTIFIER_FIXUP_1110 * _RESERVED_IDENTIFIER_FIXUP_1663.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1669;
    _RESERVED_IDENTIFIER_FIXUP_1669.x = _RESERVED_IDENTIFIER_FIXUP_1113.x;
    _RESERVED_IDENTIFIER_FIXUP_1669.y = _RESERVED_IDENTIFIER_FIXUP_1113.y;
    _RESERVED_IDENTIFIER_FIXUP_1669.z = _RESERVED_IDENTIFIER_FIXUP_1113.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1131 = mix(_RESERVED_IDENTIFIER_FIXUP_1669.xyz, _RESERVED_IDENTIFIER_FIXUP_1110, _RESERVED_IDENTIFIER_FIXUP_709);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1675 = _RESERVED_IDENTIFIER_FIXUP_1093;
    _RESERVED_IDENTIFIER_FIXUP_1675.x = _RESERVED_IDENTIFIER_FIXUP_1131.x;
    _RESERVED_IDENTIFIER_FIXUP_1675.y = _RESERVED_IDENTIFIER_FIXUP_1131.y;
    _RESERVED_IDENTIFIER_FIXUP_1675.z = _RESERVED_IDENTIFIER_FIXUP_1131.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1097.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1142 = _RESERVED_IDENTIFIER_FIXUP_1139 * _RESERVED_IDENTIFIER_FIXUP_1663.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1681;
    _RESERVED_IDENTIFIER_FIXUP_1681.x = _RESERVED_IDENTIFIER_FIXUP_1142.x;
    _RESERVED_IDENTIFIER_FIXUP_1681.y = _RESERVED_IDENTIFIER_FIXUP_1142.y;
    _RESERVED_IDENTIFIER_FIXUP_1681.z = _RESERVED_IDENTIFIER_FIXUP_1142.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1157 = mix(_RESERVED_IDENTIFIER_FIXUP_1681.xyz, _RESERVED_IDENTIFIER_FIXUP_1139, _RESERVED_IDENTIFIER_FIXUP_735);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1687 = _RESERVED_IDENTIFIER_FIXUP_1097;
    _RESERVED_IDENTIFIER_FIXUP_1687.x = _RESERVED_IDENTIFIER_FIXUP_1157.x;
    _RESERVED_IDENTIFIER_FIXUP_1687.y = _RESERVED_IDENTIFIER_FIXUP_1157.y;
    _RESERVED_IDENTIFIER_FIXUP_1687.z = _RESERVED_IDENTIFIER_FIXUP_1157.z;
    vec2 param_17 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1167 = hdTex4(param_17);
    vec2 param_18 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1176 = hdTex2(param_18);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_1176.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_1663.xyz * _RESERVED_IDENTIFIER_FIXUP_1180;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1693;
    _RESERVED_IDENTIFIER_FIXUP_1693.x = _RESERVED_IDENTIFIER_FIXUP_1181.x;
    _RESERVED_IDENTIFIER_FIXUP_1693.y = _RESERVED_IDENTIFIER_FIXUP_1181.y;
    _RESERVED_IDENTIFIER_FIXUP_1693.z = _RESERVED_IDENTIFIER_FIXUP_1181.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1196 = mix(_RESERVED_IDENTIFIER_FIXUP_1693.xyz, _RESERVED_IDENTIFIER_FIXUP_1180, _RESERVED_IDENTIFIER_FIXUP_774);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1699 = _RESERVED_IDENTIFIER_FIXUP_1176;
    _RESERVED_IDENTIFIER_FIXUP_1699.x = _RESERVED_IDENTIFIER_FIXUP_1196.x;
    _RESERVED_IDENTIFIER_FIXUP_1699.y = _RESERVED_IDENTIFIER_FIXUP_1196.y;
    _RESERVED_IDENTIFIER_FIXUP_1699.z = _RESERVED_IDENTIFIER_FIXUP_1196.z;
    vec2 param_19 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211 = hdTex3(param_19);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1215 = _RESERVED_IDENTIFIER_FIXUP_1211.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1216 = _RESERVED_IDENTIFIER_FIXUP_1663.xyz * _RESERVED_IDENTIFIER_FIXUP_1215;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1705;
    _RESERVED_IDENTIFIER_FIXUP_1705.x = _RESERVED_IDENTIFIER_FIXUP_1216.x;
    _RESERVED_IDENTIFIER_FIXUP_1705.y = _RESERVED_IDENTIFIER_FIXUP_1216.y;
    _RESERVED_IDENTIFIER_FIXUP_1705.z = _RESERVED_IDENTIFIER_FIXUP_1216.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = mix(_RESERVED_IDENTIFIER_FIXUP_1705.xyz, _RESERVED_IDENTIFIER_FIXUP_1215, _RESERVED_IDENTIFIER_FIXUP_809);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1711.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
    _RESERVED_IDENTIFIER_FIXUP_1711.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
    _RESERVED_IDENTIFIER_FIXUP_1711.z = _RESERVED_IDENTIFIER_FIXUP_1231.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1242 = mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1675, _RESERVED_IDENTIFIER_FIXUP_1687, _RESERVED_IDENTIFIER_FIXUP_1167.xxxx), _RESERVED_IDENTIFIER_FIXUP_1699, _RESERVED_IDENTIFIER_FIXUP_1167.yyyy), _RESERVED_IDENTIFIER_FIXUP_1711, _RESERVED_IDENTIFIER_FIXUP_1167.zzzz);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_839;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_841;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1263 = hdLod5(param_20, param_21);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1728 = _RESERVED_IDENTIFIER_FIXUP_1263;
    _RESERVED_IDENTIFIER_FIXUP_1728.y = _RESERVED_IDENTIFIER_FIXUP_855;
    _RESERVED_IDENTIFIER_FIXUP_1728.z = _RESERVED_IDENTIFIER_FIXUP_857;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1284 = _RESERVED_IDENTIFIER_FIXUP_1728.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1732 = _RESERVED_IDENTIFIER_FIXUP_1560;
    _RESERVED_IDENTIFIER_FIXUP_1732.x = _RESERVED_IDENTIFIER_FIXUP_1284.x;
    _RESERVED_IDENTIFIER_FIXUP_1732.y = _RESERVED_IDENTIFIER_FIXUP_1284.y;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1732.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_849;
    float _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_1263.x + hdLod5(param_22, param_23).x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1834 = vec4(_RESERVED_IDENTIFIER_FIXUP_1242.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_1299);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1313 = _RESERVED_IDENTIFIER_FIXUP_1728.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1745 = _RESERVED_IDENTIFIER_FIXUP_1560;
    _RESERVED_IDENTIFIER_FIXUP_1745.x = _RESERVED_IDENTIFIER_FIXUP_1313.x;
    _RESERVED_IDENTIFIER_FIXUP_1745.y = _RESERVED_IDENTIFIER_FIXUP_1313.y;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1745.xy;
    float param_25 = _RESERVED_IDENTIFIER_FIXUP_849;
    float _RESERVED_IDENTIFIER_FIXUP_1328 = _RESERVED_IDENTIFIER_FIXUP_1299 + hdLod5(param_24, param_25).x;
    _RESERVED_IDENTIFIER_FIXUP_1834.w = _RESERVED_IDENTIFIER_FIXUP_1328;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1335 = _RESERVED_IDENTIFIER_FIXUP_1728.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1754;
    _RESERVED_IDENTIFIER_FIXUP_1754.x = _RESERVED_IDENTIFIER_FIXUP_1335.x;
    _RESERVED_IDENTIFIER_FIXUP_1754.y = _RESERVED_IDENTIFIER_FIXUP_1335.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_1728.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1758;
    _RESERVED_IDENTIFIER_FIXUP_1758.x = _RESERVED_IDENTIFIER_FIXUP_1345.x;
    _RESERVED_IDENTIFIER_FIXUP_1758.y = _RESERVED_IDENTIFIER_FIXUP_1345.y;
    _RESERVED_IDENTIFIER_FIXUP_1754.w = _RESERVED_IDENTIFIER_FIXUP_849;
    vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1754.xy;
    float param_27 = _RESERVED_IDENTIFIER_FIXUP_849;
    float _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_1328 + hdLod5(param_26, param_27).x;
    _RESERVED_IDENTIFIER_FIXUP_1834.w = _RESERVED_IDENTIFIER_FIXUP_1367;
    _RESERVED_IDENTIFIER_FIXUP_1758.w = _RESERVED_IDENTIFIER_FIXUP_849;
    vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_1758.xy;
    float param_29 = _RESERVED_IDENTIFIER_FIXUP_849;
    float _RESERVED_IDENTIFIER_FIXUP_1386 = _RESERVED_IDENTIFIER_FIXUP_1367 + hdLod5(param_28, param_29).x;
    _RESERVED_IDENTIFIER_FIXUP_1834.w = _RESERVED_IDENTIFIER_FIXUP_1386;
    float _RESERVED_IDENTIFIER_FIXUP_1391 = (_RESERVED_IDENTIFIER_FIXUP_1386 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1834.w = _RESERVED_IDENTIFIER_FIXUP_1391;
    float _RESERVED_IDENTIFIER_FIXUP_1412 = (_RESERVED_IDENTIFIER_FIXUP_984 * _RESERVED_IDENTIFIER_FIXUP_1391) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1834.w = _RESERVED_IDENTIFIER_FIXUP_1412;
    float _RESERVED_IDENTIFIER_FIXUP_1418 = min(_RESERVED_IDENTIFIER_FIXUP_1412, _RESERVED_IDENTIFIER_FIXUP_1167.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1796;
    _RESERVED_IDENTIFIER_FIXUP_1796.x = _RESERVED_IDENTIFIER_FIXUP_1418;
    float _RESERVED_IDENTIFIER_FIXUP_1434 = (_RESERVED_IDENTIFIER_FIXUP_1418 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1835 = vec4(_RESERVED_IDENTIFIER_FIXUP_1834.xyz * _RESERVED_IDENTIFIER_FIXUP_1796.xxx, _RESERVED_IDENTIFIER_FIXUP_1434);
    _RESERVED_IDENTIFIER_FIXUP_1835.w = _RESERVED_IDENTIFIER_FIXUP_1434;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1450 = (_RESERVED_IDENTIFIER_FIXUP_1242.xyz * _RESERVED_IDENTIFIER_FIXUP_1835.www) + _RESERVED_IDENTIFIER_FIXUP_1835.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1811;
    _RESERVED_IDENTIFIER_FIXUP_1811.x = _RESERVED_IDENTIFIER_FIXUP_1450.x;
    _RESERVED_IDENTIFIER_FIXUP_1811.y = _RESERVED_IDENTIFIER_FIXUP_1450.y;
    _RESERVED_IDENTIFIER_FIXUP_1811.z = _RESERVED_IDENTIFIER_FIXUP_1450.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1463 = _RESERVED_IDENTIFIER_FIXUP_1811.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1817;
    _RESERVED_IDENTIFIER_FIXUP_1817.x = _RESERVED_IDENTIFIER_FIXUP_1463.x;
    _RESERVED_IDENTIFIER_FIXUP_1817.y = _RESERVED_IDENTIFIER_FIXUP_1463.y;
    _RESERVED_IDENTIFIER_FIXUP_1817.z = _RESERVED_IDENTIFIER_FIXUP_1463.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1817.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_536 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_545;
    if (_RESERVED_IDENTIFIER_FIXUP_536)
    {
        _RESERVED_IDENTIFIER_FIXUP_545 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_545 = _RESERVED_IDENTIFIER_FIXUP_536;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_545)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_582 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1655.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_608 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1489;
    if (_RESERVED_IDENTIFIER_FIXUP_582 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1489 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_582), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_608);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1489 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_608);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1489;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1434);
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
    vec3 hdB78 = r0.xyz * r2.xyz;
    r3.x = hdB78.x;
    r3.y = hdB78.y;
    r3.z = hdB78.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB101 = r0;
    vec3 hdB110 = mix(r3.xyz, hdB101.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB110.x;
    r0.y = hdB110.y;
    r0.z = hdB110.z;
    vec3 hdB121 = r1.xyz * r2.xyz;
    r3.x = hdB121.x;
    r3.y = hdB121.y;
    r3.z = hdB121.z;
    vec4 hdB130 = r1;
    vec3 hdB136 = mix(r3.xyz, hdB130.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB136.x;
    r1.y = hdB136.y;
    r1.z = hdB136.z;
    vec2 param_2 = v4.wz;
    r3 = hdTex4(param_2);
    r5 = mix(r0, r1, r3.xxxx);
    vec2 param_3 = v3.wz;
    r0 = hdTex2(param_3);
    vec3 hdB162 = r2.xyz * r0.xyz;
    r1.x = hdB162.x;
    r1.y = hdB162.y;
    r1.z = hdB162.z;
    vec4 hdB171 = r0;
    vec3 hdB177 = mix(r1.xyz, hdB171.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = hdB177.x;
    r0.y = hdB177.y;
    r0.z = hdB177.z;
    r1 = mix(r5, r0, r3.yyyy);
    vec2 param_4 = v4.xy;
    r0 = hdTex3(param_4);
    vec4 hdB194 = r2;
    vec3 hdB198 = hdB194.xyz * r0.xyz;
    r2.x = hdB198.x;
    r2.y = hdB198.y;
    r2.z = hdB198.z;
    vec4 hdB207 = r0;
    vec3 hdB213 = mix(r2.xyz, hdB207.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r0.x = hdB213.x;
    r0.y = hdB213.y;
    r0.z = hdB213.z;
    r2 = mix(r1, r0, r3.zzzz);
    vec3 hdB229 = r2.www * v1.xyz;
    r0.x = hdB229.x;
    r0.y = hdB229.y;
    r0.z = hdB229.z;
    r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_5 = r1.xy;
    float param_6 = r1.w;
    r1 = hdLod5(param_5, param_6);
    vec2 hdB255 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB255.x;
    r4.w = hdB255.y;
    vec2 hdB264 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r1.y = hdB264.x;
    r1.z = hdB264.y;
    vec2 hdB275 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB275.x;
    r4.y = hdB275.y;
    vec2 param_7 = r4.xy;
    float param_8 = r4.w;
    r4 = hdLod5(param_7, param_8);
    r0.w = r1.x + r4.x;
    vec2 hdB294 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB294.x;
    r4.w = hdB294.y;
    vec2 hdB305 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = hdB305.x;
    r4.y = hdB305.y;
    vec2 param_9 = r4.xy;
    float param_10 = r4.w;
    r4 = hdLod5(param_9, param_10);
    r0.w += r4.x;
    vec2 hdB328 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = hdB328.x;
    r4.y = hdB328.y;
    vec4 hdB333 = r1;
    vec2 hdB339 = hdB333.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r1.x = hdB339.x;
    r1.y = hdB339.y;
    vec2 hdB346 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB346.x;
    r4.w = hdB346.y;
    vec2 param_11 = r4.xy;
    float param_12 = r4.w;
    r4 = hdLod5(param_11, param_12);
    r0.w += r4.x;
    vec2 hdB365 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB365.x;
    r1.w = hdB365.y;
    vec2 param_13 = r1.xy;
    float param_14 = r1.w;
    r1 = hdLod5(param_13, param_14);
    r0.w += r1.x;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.x * r0.w) + 1.0;
    r1.x = min(r0.w, r3.w);
    vec4 hdB418 = r0;
    vec3 hdB422 = hdB418.xyz * r1.xxx;
    r0.x = hdB422.x;
    r0.y = hdB422.y;
    r0.z = hdB422.z;
    r0.w = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB438 = r0;
    vec4 hdB441 = r0;
    vec3 hdB443 = (r2.xyz * hdB438.www) + hdB441.xyz;
    r0.x = hdB443.x;
    r0.y = hdB443.y;
    r0.z = hdB443.z;
    vec4 hdB450 = r0;
    vec3 hdB457 = hdB450.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB457.x;
    r0.y = hdB457.y;
    r0.z = hdB457.z;
    vec3 hdB472 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB472.x;
    oC0.y = hdB472.y;
    oC0.z = hdB472.z;
    oC0.w = 1.0;
    bool hdB484 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB492;
    if (hdB484)
    {
        hdB492 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB492 = hdB484;
    }
    if (hdB492)
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
    bool _1802 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1812;
    if (_1802)
    {
        _1812 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1812 = _1802;
    }
    if (_1812)
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
        bool _1837 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1852;
        if (!_1837)
        {
            _1852 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1852 = _1837;
        }
        if (_1852)
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
