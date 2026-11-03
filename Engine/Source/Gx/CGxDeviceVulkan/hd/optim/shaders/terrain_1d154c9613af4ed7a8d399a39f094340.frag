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
float _RESERVED_IDENTIFIER_FIXUP_1851;
vec4 _RESERVED_IDENTIFIER_FIXUP_1852;


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
    vec3 _RESERVED_IDENTIFIER_FIXUP_683 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1851).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_686 = _RESERVED_IDENTIFIER_FIXUP_683 + _RESERVED_IDENTIFIER_FIXUP_683;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1506;
    _RESERVED_IDENTIFIER_FIXUP_1506.x = _RESERVED_IDENTIFIER_FIXUP_686.x;
    _RESERVED_IDENTIFIER_FIXUP_1506.y = _RESERVED_IDENTIFIER_FIXUP_686.y;
    _RESERVED_IDENTIFIER_FIXUP_1506.z = _RESERVED_IDENTIFIER_FIXUP_686.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_694 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_697 = _RESERVED_IDENTIFIER_FIXUP_694 * _RESERVED_IDENTIFIER_FIXUP_1506.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1512;
    _RESERVED_IDENTIFIER_FIXUP_1512.x = _RESERVED_IDENTIFIER_FIXUP_697.x;
    _RESERVED_IDENTIFIER_FIXUP_1512.y = _RESERVED_IDENTIFIER_FIXUP_697.y;
    _RESERVED_IDENTIFIER_FIXUP_1512.z = _RESERVED_IDENTIFIER_FIXUP_697.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_706 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_714 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_706.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_715 = mix(_RESERVED_IDENTIFIER_FIXUP_1512.xyz, _RESERVED_IDENTIFIER_FIXUP_694, _RESERVED_IDENTIFIER_FIXUP_714);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1518;
    _RESERVED_IDENTIFIER_FIXUP_1518.x = _RESERVED_IDENTIFIER_FIXUP_715.x;
    _RESERVED_IDENTIFIER_FIXUP_1518.y = _RESERVED_IDENTIFIER_FIXUP_715.y;
    _RESERVED_IDENTIFIER_FIXUP_1518.z = _RESERVED_IDENTIFIER_FIXUP_715.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_723 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_726 = _RESERVED_IDENTIFIER_FIXUP_723 * _RESERVED_IDENTIFIER_FIXUP_1506.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1524;
    _RESERVED_IDENTIFIER_FIXUP_1524.x = _RESERVED_IDENTIFIER_FIXUP_726.x;
    _RESERVED_IDENTIFIER_FIXUP_1524.y = _RESERVED_IDENTIFIER_FIXUP_726.y;
    _RESERVED_IDENTIFIER_FIXUP_1524.z = _RESERVED_IDENTIFIER_FIXUP_726.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_740 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_706.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_741 = mix(_RESERVED_IDENTIFIER_FIXUP_1524.xyz, _RESERVED_IDENTIFIER_FIXUP_723, _RESERVED_IDENTIFIER_FIXUP_740);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1530;
    _RESERVED_IDENTIFIER_FIXUP_1530.x = _RESERVED_IDENTIFIER_FIXUP_741.x;
    _RESERVED_IDENTIFIER_FIXUP_1530.y = _RESERVED_IDENTIFIER_FIXUP_741.y;
    _RESERVED_IDENTIFIER_FIXUP_1530.z = _RESERVED_IDENTIFIER_FIXUP_741.z;
    vec2 param_1 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_751 = hdTex4(param_1);
    vec2 param_2 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_764 = hdTex2(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_765 = _RESERVED_IDENTIFIER_FIXUP_1506.xyz * _RESERVED_IDENTIFIER_FIXUP_764;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1536;
    _RESERVED_IDENTIFIER_FIXUP_1536.x = _RESERVED_IDENTIFIER_FIXUP_765.x;
    _RESERVED_IDENTIFIER_FIXUP_1536.y = _RESERVED_IDENTIFIER_FIXUP_765.y;
    _RESERVED_IDENTIFIER_FIXUP_1536.z = _RESERVED_IDENTIFIER_FIXUP_765.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_779 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_706.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_780 = mix(_RESERVED_IDENTIFIER_FIXUP_1536.xyz, _RESERVED_IDENTIFIER_FIXUP_764, _RESERVED_IDENTIFIER_FIXUP_779);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1542;
    _RESERVED_IDENTIFIER_FIXUP_1542.x = _RESERVED_IDENTIFIER_FIXUP_780.x;
    _RESERVED_IDENTIFIER_FIXUP_1542.y = _RESERVED_IDENTIFIER_FIXUP_780.y;
    _RESERVED_IDENTIFIER_FIXUP_1542.z = _RESERVED_IDENTIFIER_FIXUP_780.z;
    vec2 param_3 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_799 = hdTex3(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_800 = _RESERVED_IDENTIFIER_FIXUP_1506.xyz * _RESERVED_IDENTIFIER_FIXUP_799;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1548;
    _RESERVED_IDENTIFIER_FIXUP_1548.x = _RESERVED_IDENTIFIER_FIXUP_800.x;
    _RESERVED_IDENTIFIER_FIXUP_1548.y = _RESERVED_IDENTIFIER_FIXUP_800.y;
    _RESERVED_IDENTIFIER_FIXUP_1548.z = _RESERVED_IDENTIFIER_FIXUP_800.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_814 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_706.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_815 = mix(_RESERVED_IDENTIFIER_FIXUP_1548.xyz, _RESERVED_IDENTIFIER_FIXUP_799, _RESERVED_IDENTIFIER_FIXUP_814);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1554;
    _RESERVED_IDENTIFIER_FIXUP_1554.x = _RESERVED_IDENTIFIER_FIXUP_815.x;
    _RESERVED_IDENTIFIER_FIXUP_1554.y = _RESERVED_IDENTIFIER_FIXUP_815.y;
    _RESERVED_IDENTIFIER_FIXUP_1554.z = _RESERVED_IDENTIFIER_FIXUP_815.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_841 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_844 = _RESERVED_IDENTIFIER_FIXUP_841.xy;
    float _RESERVED_IDENTIFIER_FIXUP_846 = _RESERVED_IDENTIFIER_FIXUP_841.w;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_844;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_846;
    vec4 _RESERVED_IDENTIFIER_FIXUP_847 = hdLod5(param_4, param_5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1569;
    _RESERVED_IDENTIFIER_FIXUP_1569.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_855 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_857 = _RESERVED_IDENTIFIER_FIXUP_855.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_751;
    _RESERVED_IDENTIFIER_FIXUP_1571.x = _RESERVED_IDENTIFIER_FIXUP_857;
    float _RESERVED_IDENTIFIER_FIXUP_859 = _RESERVED_IDENTIFIER_FIXUP_855.y;
    _RESERVED_IDENTIFIER_FIXUP_1571.y = _RESERVED_IDENTIFIER_FIXUP_859;
    vec2 _RESERVED_IDENTIFIER_FIXUP_865 = _RESERVED_IDENTIFIER_FIXUP_1571.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_1569;
    _RESERVED_IDENTIFIER_FIXUP_1575.x = _RESERVED_IDENTIFIER_FIXUP_865.x;
    _RESERVED_IDENTIFIER_FIXUP_1575.y = _RESERVED_IDENTIFIER_FIXUP_865.y;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1575.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_847.y = hdLod5(param_6, param_7).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_888 = _RESERVED_IDENTIFIER_FIXUP_1571.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1587 = _RESERVED_IDENTIFIER_FIXUP_1569;
    _RESERVED_IDENTIFIER_FIXUP_1587.x = _RESERVED_IDENTIFIER_FIXUP_888.x;
    _RESERVED_IDENTIFIER_FIXUP_1587.y = _RESERVED_IDENTIFIER_FIXUP_888.y;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1587.xy;
    float param_9 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_847.z = hdLod5(param_8, param_9).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_907 = _RESERVED_IDENTIFIER_FIXUP_1571.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1595;
    _RESERVED_IDENTIFIER_FIXUP_1595.x = _RESERVED_IDENTIFIER_FIXUP_907.x;
    _RESERVED_IDENTIFIER_FIXUP_1595.y = _RESERVED_IDENTIFIER_FIXUP_907.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_917 = _RESERVED_IDENTIFIER_FIXUP_1571.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1599;
    _RESERVED_IDENTIFIER_FIXUP_1599.x = _RESERVED_IDENTIFIER_FIXUP_917.x;
    _RESERVED_IDENTIFIER_FIXUP_1599.y = _RESERVED_IDENTIFIER_FIXUP_917.y;
    _RESERVED_IDENTIFIER_FIXUP_1595.w = 0.0;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1595.xy;
    float param_11 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_847.w = hdLod5(param_10, param_11).x;
    float _RESERVED_IDENTIFIER_FIXUP_944 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_847 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1853 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_944);
    _RESERVED_IDENTIFIER_FIXUP_1599.w = 0.0;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1599.xy;
    float param_13 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_972 = _RESERVED_IDENTIFIER_FIXUP_944 + float((hdLod5(param_12, param_13).x - texcoord4.z) >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1853.w = _RESERVED_IDENTIFIER_FIXUP_972;
    float _RESERVED_IDENTIFIER_FIXUP_977 = (_RESERVED_IDENTIFIER_FIXUP_972 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1853.w = _RESERVED_IDENTIFIER_FIXUP_977;
    float _RESERVED_IDENTIFIER_FIXUP_991 = clamp((max(abs(texcoord4.x), abs(texcoord4.y)) * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_998 = (_RESERVED_IDENTIFIER_FIXUP_991 * _RESERVED_IDENTIFIER_FIXUP_977) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1853.w = _RESERVED_IDENTIFIER_FIXUP_998;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1645;
    _RESERVED_IDENTIFIER_FIXUP_1645.x = min(_RESERVED_IDENTIFIER_FIXUP_998, _RESERVED_IDENTIFIER_FIXUP_751.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1854 = vec4(_RESERVED_IDENTIFIER_FIXUP_1853.xyz * _RESERVED_IDENTIFIER_FIXUP_1645.xxx, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1036 = (mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1518, _RESERVED_IDENTIFIER_FIXUP_1530, _RESERVED_IDENTIFIER_FIXUP_751.xxxx), _RESERVED_IDENTIFIER_FIXUP_1542, _RESERVED_IDENTIFIER_FIXUP_751.yyyy), _RESERVED_IDENTIFIER_FIXUP_1554, _RESERVED_IDENTIFIER_FIXUP_751.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_1854.www) + _RESERVED_IDENTIFIER_FIXUP_1854.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1658;
    _RESERVED_IDENTIFIER_FIXUP_1658.x = _RESERVED_IDENTIFIER_FIXUP_1036.x;
    _RESERVED_IDENTIFIER_FIXUP_1658.y = _RESERVED_IDENTIFIER_FIXUP_1036.y;
    _RESERVED_IDENTIFIER_FIXUP_1658.z = _RESERVED_IDENTIFIER_FIXUP_1036.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1049 = _RESERVED_IDENTIFIER_FIXUP_1658.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1664;
    _RESERVED_IDENTIFIER_FIXUP_1664.x = _RESERVED_IDENTIFIER_FIXUP_1049.x;
    _RESERVED_IDENTIFIER_FIXUP_1664.y = _RESERVED_IDENTIFIER_FIXUP_1049.y;
    _RESERVED_IDENTIFIER_FIXUP_1664.z = _RESERVED_IDENTIFIER_FIXUP_1049.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1064 = _RESERVED_IDENTIFIER_FIXUP_1664.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1670;
    _RESERVED_IDENTIFIER_FIXUP_1670.x = _RESERVED_IDENTIFIER_FIXUP_1064.x;
    _RESERVED_IDENTIFIER_FIXUP_1670.y = _RESERVED_IDENTIFIER_FIXUP_1064.y;
    _RESERVED_IDENTIFIER_FIXUP_1670.z = _RESERVED_IDENTIFIER_FIXUP_1064.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1100 = OptTex0( texcoord0.xyz);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1104 = hdTex1(param_14);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1109 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1678;
    _RESERVED_IDENTIFIER_FIXUP_1678.x = _RESERVED_IDENTIFIER_FIXUP_1109.x;
    _RESERVED_IDENTIFIER_FIXUP_1678.y = _RESERVED_IDENTIFIER_FIXUP_1109.y;
    _RESERVED_IDENTIFIER_FIXUP_1678.z = _RESERVED_IDENTIFIER_FIXUP_1109.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1100.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1117 * _RESERVED_IDENTIFIER_FIXUP_1678.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1684;
    _RESERVED_IDENTIFIER_FIXUP_1684.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
    _RESERVED_IDENTIFIER_FIXUP_1684.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
    _RESERVED_IDENTIFIER_FIXUP_1684.z = _RESERVED_IDENTIFIER_FIXUP_1120.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1138 = mix(_RESERVED_IDENTIFIER_FIXUP_1684.xyz, _RESERVED_IDENTIFIER_FIXUP_1117, _RESERVED_IDENTIFIER_FIXUP_714);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1690 = _RESERVED_IDENTIFIER_FIXUP_1100;
    _RESERVED_IDENTIFIER_FIXUP_1690.x = _RESERVED_IDENTIFIER_FIXUP_1138.x;
    _RESERVED_IDENTIFIER_FIXUP_1690.y = _RESERVED_IDENTIFIER_FIXUP_1138.y;
    _RESERVED_IDENTIFIER_FIXUP_1690.z = _RESERVED_IDENTIFIER_FIXUP_1138.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1104.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1149 = _RESERVED_IDENTIFIER_FIXUP_1146 * _RESERVED_IDENTIFIER_FIXUP_1678.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1696;
    _RESERVED_IDENTIFIER_FIXUP_1696.x = _RESERVED_IDENTIFIER_FIXUP_1149.x;
    _RESERVED_IDENTIFIER_FIXUP_1696.y = _RESERVED_IDENTIFIER_FIXUP_1149.y;
    _RESERVED_IDENTIFIER_FIXUP_1696.z = _RESERVED_IDENTIFIER_FIXUP_1149.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1164 = mix(_RESERVED_IDENTIFIER_FIXUP_1696.xyz, _RESERVED_IDENTIFIER_FIXUP_1146, _RESERVED_IDENTIFIER_FIXUP_740);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1702 = _RESERVED_IDENTIFIER_FIXUP_1104;
    _RESERVED_IDENTIFIER_FIXUP_1702.x = _RESERVED_IDENTIFIER_FIXUP_1164.x;
    _RESERVED_IDENTIFIER_FIXUP_1702.y = _RESERVED_IDENTIFIER_FIXUP_1164.y;
    _RESERVED_IDENTIFIER_FIXUP_1702.z = _RESERVED_IDENTIFIER_FIXUP_1164.z;
    vec2 param_15 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1174 = hdTex4(param_15);
    vec2 param_16 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1183 = hdTex2(param_16);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1187 = _RESERVED_IDENTIFIER_FIXUP_1183.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_1678.xyz * _RESERVED_IDENTIFIER_FIXUP_1187;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1708;
    _RESERVED_IDENTIFIER_FIXUP_1708.x = _RESERVED_IDENTIFIER_FIXUP_1188.x;
    _RESERVED_IDENTIFIER_FIXUP_1708.y = _RESERVED_IDENTIFIER_FIXUP_1188.y;
    _RESERVED_IDENTIFIER_FIXUP_1708.z = _RESERVED_IDENTIFIER_FIXUP_1188.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1203 = mix(_RESERVED_IDENTIFIER_FIXUP_1708.xyz, _RESERVED_IDENTIFIER_FIXUP_1187, _RESERVED_IDENTIFIER_FIXUP_779);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1714 = _RESERVED_IDENTIFIER_FIXUP_1183;
    _RESERVED_IDENTIFIER_FIXUP_1714.x = _RESERVED_IDENTIFIER_FIXUP_1203.x;
    _RESERVED_IDENTIFIER_FIXUP_1714.y = _RESERVED_IDENTIFIER_FIXUP_1203.y;
    _RESERVED_IDENTIFIER_FIXUP_1714.z = _RESERVED_IDENTIFIER_FIXUP_1203.z;
    vec2 param_17 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218 = hdTex3(param_17);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1218.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1678.xyz * _RESERVED_IDENTIFIER_FIXUP_1222;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1720;
    _RESERVED_IDENTIFIER_FIXUP_1720.x = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_1720.y = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_1720.z = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1238 = mix(_RESERVED_IDENTIFIER_FIXUP_1720.xyz, _RESERVED_IDENTIFIER_FIXUP_1222, _RESERVED_IDENTIFIER_FIXUP_814);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1726 = _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1726.x = _RESERVED_IDENTIFIER_FIXUP_1238.x;
    _RESERVED_IDENTIFIER_FIXUP_1726.y = _RESERVED_IDENTIFIER_FIXUP_1238.y;
    _RESERVED_IDENTIFIER_FIXUP_1726.z = _RESERVED_IDENTIFIER_FIXUP_1238.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1249 = mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1690, _RESERVED_IDENTIFIER_FIXUP_1702, _RESERVED_IDENTIFIER_FIXUP_1174.xxxx), _RESERVED_IDENTIFIER_FIXUP_1714, _RESERVED_IDENTIFIER_FIXUP_1174.yyyy), _RESERVED_IDENTIFIER_FIXUP_1726, _RESERVED_IDENTIFIER_FIXUP_1174.zzzz);
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_844;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_846;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270 = hdLod5(param_18, param_19);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1743 = _RESERVED_IDENTIFIER_FIXUP_1174;
    _RESERVED_IDENTIFIER_FIXUP_1743.x = _RESERVED_IDENTIFIER_FIXUP_857;
    _RESERVED_IDENTIFIER_FIXUP_1743.y = _RESERVED_IDENTIFIER_FIXUP_859;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_1743.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1747 = _RESERVED_IDENTIFIER_FIXUP_1569;
    _RESERVED_IDENTIFIER_FIXUP_1747.x = _RESERVED_IDENTIFIER_FIXUP_1288.x;
    _RESERVED_IDENTIFIER_FIXUP_1747.y = _RESERVED_IDENTIFIER_FIXUP_1288.y;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1747.xy;
    float param_21 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1270.y = hdLod5(param_20, param_21).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1311 = _RESERVED_IDENTIFIER_FIXUP_1743.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1759 = _RESERVED_IDENTIFIER_FIXUP_1569;
    _RESERVED_IDENTIFIER_FIXUP_1759.x = _RESERVED_IDENTIFIER_FIXUP_1311.x;
    _RESERVED_IDENTIFIER_FIXUP_1759.y = _RESERVED_IDENTIFIER_FIXUP_1311.y;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1759.xy;
    float param_23 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1270.z = hdLod5(param_22, param_23).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_1743.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1767;
    _RESERVED_IDENTIFIER_FIXUP_1767.x = _RESERVED_IDENTIFIER_FIXUP_1330.x;
    _RESERVED_IDENTIFIER_FIXUP_1767.y = _RESERVED_IDENTIFIER_FIXUP_1330.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1340 = _RESERVED_IDENTIFIER_FIXUP_1743.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1771;
    _RESERVED_IDENTIFIER_FIXUP_1771.x = _RESERVED_IDENTIFIER_FIXUP_1340.x;
    _RESERVED_IDENTIFIER_FIXUP_1771.y = _RESERVED_IDENTIFIER_FIXUP_1340.y;
    _RESERVED_IDENTIFIER_FIXUP_1767.w = 0.0;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1767.xy;
    float param_25 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1270.w = hdLod5(param_24, param_25).x;
    float _RESERVED_IDENTIFIER_FIXUP_1367 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1270 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1855 = vec4(_RESERVED_IDENTIFIER_FIXUP_1249.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_1367);
    _RESERVED_IDENTIFIER_FIXUP_1771.w = 0.0;
    vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1771.xy;
    float param_27 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1395 = _RESERVED_IDENTIFIER_FIXUP_1367 + float((hdLod5(param_26, param_27).x - texcoord4.z) >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1855.w = _RESERVED_IDENTIFIER_FIXUP_1395;
    float _RESERVED_IDENTIFIER_FIXUP_1400 = (_RESERVED_IDENTIFIER_FIXUP_1395 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1855.w = _RESERVED_IDENTIFIER_FIXUP_1400;
    float _RESERVED_IDENTIFIER_FIXUP_1421 = (_RESERVED_IDENTIFIER_FIXUP_991 * _RESERVED_IDENTIFIER_FIXUP_1400) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1855.w = _RESERVED_IDENTIFIER_FIXUP_1421;
    float _RESERVED_IDENTIFIER_FIXUP_1427 = min(_RESERVED_IDENTIFIER_FIXUP_1421, _RESERVED_IDENTIFIER_FIXUP_1174.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1817;
    _RESERVED_IDENTIFIER_FIXUP_1817.x = _RESERVED_IDENTIFIER_FIXUP_1427;
    float _RESERVED_IDENTIFIER_FIXUP_1443 = (_RESERVED_IDENTIFIER_FIXUP_1427 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1856 = vec4(_RESERVED_IDENTIFIER_FIXUP_1855.xyz * _RESERVED_IDENTIFIER_FIXUP_1817.xxx, _RESERVED_IDENTIFIER_FIXUP_1443);
    _RESERVED_IDENTIFIER_FIXUP_1856.w = _RESERVED_IDENTIFIER_FIXUP_1443;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1459 = (_RESERVED_IDENTIFIER_FIXUP_1249.xyz * _RESERVED_IDENTIFIER_FIXUP_1856.www) + _RESERVED_IDENTIFIER_FIXUP_1856.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1832;
    _RESERVED_IDENTIFIER_FIXUP_1832.x = _RESERVED_IDENTIFIER_FIXUP_1459.x;
    _RESERVED_IDENTIFIER_FIXUP_1832.y = _RESERVED_IDENTIFIER_FIXUP_1459.y;
    _RESERVED_IDENTIFIER_FIXUP_1832.z = _RESERVED_IDENTIFIER_FIXUP_1459.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1472 = _RESERVED_IDENTIFIER_FIXUP_1832.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1838;
    _RESERVED_IDENTIFIER_FIXUP_1838.x = _RESERVED_IDENTIFIER_FIXUP_1472.x;
    _RESERVED_IDENTIFIER_FIXUP_1838.y = _RESERVED_IDENTIFIER_FIXUP_1472.y;
    _RESERVED_IDENTIFIER_FIXUP_1838.z = _RESERVED_IDENTIFIER_FIXUP_1472.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1838.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_542 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_551;
    if (_RESERVED_IDENTIFIER_FIXUP_542)
    {
        _RESERVED_IDENTIFIER_FIXUP_551 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_551 = _RESERVED_IDENTIFIER_FIXUP_542;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_551)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_588 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1670.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_614 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1498;
    if (_RESERVED_IDENTIFIER_FIXUP_588 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1498 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_588), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_614);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1498 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_614);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1498;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1443);
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
    vec3 hdB81 = r0.xyz * r2.xyz;
    r3.x = hdB81.x;
    r3.y = hdB81.y;
    r3.z = hdB81.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB104 = r0;
    vec3 hdB113 = mix(r3.xyz, hdB104.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB113.x;
    r0.y = hdB113.y;
    r0.z = hdB113.z;
    vec3 hdB124 = r1.xyz * r2.xyz;
    r3.x = hdB124.x;
    r3.y = hdB124.y;
    r3.z = hdB124.z;
    vec4 hdB133 = r1;
    vec3 hdB139 = mix(r3.xyz, hdB133.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB139.x;
    r1.y = hdB139.y;
    r1.z = hdB139.z;
    vec2 param_1 = v4.wz;
    r3 = hdTex4(param_1);
    r5 = mix(r0, r1, r3.xxxx);
    vec2 param_2 = v3.wz;
    r0 = hdTex2(param_2);
    vec3 hdB165 = r2.xyz * r0.xyz;
    r1.x = hdB165.x;
    r1.y = hdB165.y;
    r1.z = hdB165.z;
    vec4 hdB174 = r0;
    vec3 hdB180 = mix(r1.xyz, hdB174.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = hdB180.x;
    r0.y = hdB180.y;
    r0.z = hdB180.z;
    r1 = mix(r5, r0, r3.yyyy);
    vec2 param_3 = v4.xy;
    r0 = hdTex3(param_3);
    vec4 hdB197 = r2;
    vec3 hdB201 = hdB197.xyz * r0.xyz;
    r2.x = hdB201.x;
    r2.y = hdB201.y;
    r2.z = hdB201.z;
    vec4 hdB210 = r0;
    vec3 hdB216 = mix(r2.xyz, hdB210.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r0.x = hdB216.x;
    r0.y = hdB216.y;
    r0.z = hdB216.z;
    r2 = mix(r1, r0, r3.zzzz);
    vec3 hdB232 = r2.www * v1.xyz;
    r0.x = hdB232.x;
    r0.y = hdB232.y;
    r0.z = hdB232.z;
    r1 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB262 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r3.x = hdB262.x;
    r3.y = hdB262.y;
    vec2 hdB273 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB273.x;
    r4.y = hdB273.y;
    vec2 param_6 = r4.xy;
    float param_7 = r4.w;
    r4 = hdLod5(param_6, param_7);
    r1.y = r4.x;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB297 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = hdB297.x;
    r4.y = hdB297.y;
    vec2 param_8 = r4.xy;
    float param_9 = r4.w;
    r4 = hdLod5(param_8, param_9);
    r1.z = r4.x;
    vec2 hdB317 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = hdB317.x;
    r4.y = hdB317.y;
    vec2 hdB328 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r5.x = hdB328.x;
    r5.y = hdB328.y;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 param_10 = r4.xy;
    float param_11 = r4.w;
    r4 = hdLod5(param_10, param_11);
    r1.w = r4.x;
    r1 += (-v5.zzzz);
    r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
    r0.w = dot(r1, vec4(1.0));
    r5.z = 0.0;
    r5.w = 0.0;
    vec2 param_12 = r5.xy;
    float param_13 = r5.w;
    r1 = hdLod5(param_12, param_13);
    r1.x += (-v5.z);
    r1.x = float(r1.x >= 0.0);
    r0.w += r1.x;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.x * r0.w) + 1.0;
    r1.x = min(r0.w, r3.w);
    vec4 hdB424 = r0;
    vec3 hdB428 = hdB424.xyz * r1.xxx;
    r0.x = hdB428.x;
    r0.y = hdB428.y;
    r0.z = hdB428.z;
    r0.w = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB444 = r0;
    vec4 hdB447 = r0;
    vec3 hdB449 = (r2.xyz * hdB444.www) + hdB447.xyz;
    r0.x = hdB449.x;
    r0.y = hdB449.y;
    r0.z = hdB449.z;
    vec4 hdB456 = r0;
    vec3 hdB463 = hdB456.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB463.x;
    r0.y = hdB463.y;
    r0.z = hdB463.z;
    vec3 hdB478 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB478.x;
    oC0.y = hdB478.y;
    oC0.z = hdB478.z;
    oC0.w = 1.0;
    bool hdB490 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB498;
    if (hdB490)
    {
        hdB498 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB498 = hdB490;
    }
    if (hdB498)
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
    bool _1740 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1750;
    if (_1740)
    {
        _1750 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1750 = _1740;
    }
    if (_1750)
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
        bool _1775 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1790;
        if (!_1775)
        {
            _1790 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1790 = _1775;
        }
        if (_1790)
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
