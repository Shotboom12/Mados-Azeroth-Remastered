#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1994;
vec4 _RESERVED_IDENTIFIER_FIXUP_1995;


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
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _120 = hdOverride >= 0;
    bool _130;
    if (_120)
    {
        _130 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _130 = _120;
    }
    vec4 _131;
    if (_130)
    {
        _131 = vec4(float(hdOverride));
    }
    else
    {
        _131 = value;
    }
    return _131;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _148 = hdOverride >= 0;
    bool _158;
    if (_148)
    {
        _158 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _158 = _148;
    }
    vec4 _159;
    if (_158)
    {
        _159 = vec4(float(hdOverride));
    }
    else
    {
        _159 = value;
    }
    return _159;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _176 = hdOverride >= 0;
    bool _185;
    if (_176)
    {
        _185 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _185 = _176;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_714 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_718 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_722 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_726 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_730 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_733 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_735 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1994).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_738 = _RESERVED_IDENTIFIER_FIXUP_735 + _RESERVED_IDENTIFIER_FIXUP_735;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1623 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1623.x = _RESERVED_IDENTIFIER_FIXUP_738.x;
    _RESERVED_IDENTIFIER_FIXUP_1623.y = _RESERVED_IDENTIFIER_FIXUP_738.y;
    _RESERVED_IDENTIFIER_FIXUP_1623.z = _RESERVED_IDENTIFIER_FIXUP_738.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_746 = _RESERVED_IDENTIFIER_FIXUP_714.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_749 = _RESERVED_IDENTIFIER_FIXUP_746 * _RESERVED_IDENTIFIER_FIXUP_1623.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1629;
    _RESERVED_IDENTIFIER_FIXUP_1629.x = _RESERVED_IDENTIFIER_FIXUP_749.x;
    _RESERVED_IDENTIFIER_FIXUP_1629.y = _RESERVED_IDENTIFIER_FIXUP_749.y;
    _RESERVED_IDENTIFIER_FIXUP_1629.z = _RESERVED_IDENTIFIER_FIXUP_749.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_763 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_733.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_764 = mix(_RESERVED_IDENTIFIER_FIXUP_1629.xyz, _RESERVED_IDENTIFIER_FIXUP_746, _RESERVED_IDENTIFIER_FIXUP_763);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1635 = _RESERVED_IDENTIFIER_FIXUP_714;
    _RESERVED_IDENTIFIER_FIXUP_1635.x = _RESERVED_IDENTIFIER_FIXUP_764.x;
    _RESERVED_IDENTIFIER_FIXUP_1635.y = _RESERVED_IDENTIFIER_FIXUP_764.y;
    _RESERVED_IDENTIFIER_FIXUP_1635.z = _RESERVED_IDENTIFIER_FIXUP_764.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = _RESERVED_IDENTIFIER_FIXUP_718.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = _RESERVED_IDENTIFIER_FIXUP_772 * _RESERVED_IDENTIFIER_FIXUP_1623.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1641;
    _RESERVED_IDENTIFIER_FIXUP_1641.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1641.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1641.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_789 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_733.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_790 = mix(_RESERVED_IDENTIFIER_FIXUP_1641.xyz, _RESERVED_IDENTIFIER_FIXUP_772, _RESERVED_IDENTIFIER_FIXUP_789);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1647 = _RESERVED_IDENTIFIER_FIXUP_718;
    _RESERVED_IDENTIFIER_FIXUP_1647.x = _RESERVED_IDENTIFIER_FIXUP_790.x;
    _RESERVED_IDENTIFIER_FIXUP_1647.y = _RESERVED_IDENTIFIER_FIXUP_790.y;
    _RESERVED_IDENTIFIER_FIXUP_1647.z = _RESERVED_IDENTIFIER_FIXUP_790.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_798 = _RESERVED_IDENTIFIER_FIXUP_722.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_801 = _RESERVED_IDENTIFIER_FIXUP_798 * _RESERVED_IDENTIFIER_FIXUP_1623.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1653;
    _RESERVED_IDENTIFIER_FIXUP_1653.x = _RESERVED_IDENTIFIER_FIXUP_801.x;
    _RESERVED_IDENTIFIER_FIXUP_1653.y = _RESERVED_IDENTIFIER_FIXUP_801.y;
    _RESERVED_IDENTIFIER_FIXUP_1653.z = _RESERVED_IDENTIFIER_FIXUP_801.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_815 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_733.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_816 = mix(_RESERVED_IDENTIFIER_FIXUP_1653.xyz, _RESERVED_IDENTIFIER_FIXUP_798, _RESERVED_IDENTIFIER_FIXUP_815);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1659 = _RESERVED_IDENTIFIER_FIXUP_722;
    _RESERVED_IDENTIFIER_FIXUP_1659.x = _RESERVED_IDENTIFIER_FIXUP_816.x;
    _RESERVED_IDENTIFIER_FIXUP_1659.y = _RESERVED_IDENTIFIER_FIXUP_816.y;
    _RESERVED_IDENTIFIER_FIXUP_1659.z = _RESERVED_IDENTIFIER_FIXUP_816.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_824 = _RESERVED_IDENTIFIER_FIXUP_726.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_827 = _RESERVED_IDENTIFIER_FIXUP_824 * _RESERVED_IDENTIFIER_FIXUP_1623.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1665 = _RESERVED_IDENTIFIER_FIXUP_733;
    _RESERVED_IDENTIFIER_FIXUP_1665.x = _RESERVED_IDENTIFIER_FIXUP_827.x;
    _RESERVED_IDENTIFIER_FIXUP_1665.y = _RESERVED_IDENTIFIER_FIXUP_827.y;
    _RESERVED_IDENTIFIER_FIXUP_1665.z = _RESERVED_IDENTIFIER_FIXUP_827.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_842 = mix(_RESERVED_IDENTIFIER_FIXUP_1665.xyz, _RESERVED_IDENTIFIER_FIXUP_824, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1665.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1671 = _RESERVED_IDENTIFIER_FIXUP_726;
    _RESERVED_IDENTIFIER_FIXUP_1671.x = _RESERVED_IDENTIFIER_FIXUP_842.x;
    _RESERVED_IDENTIFIER_FIXUP_1671.y = _RESERVED_IDENTIFIER_FIXUP_842.y;
    _RESERVED_IDENTIFIER_FIXUP_1671.z = _RESERVED_IDENTIFIER_FIXUP_842.z;
    float _RESERVED_IDENTIFIER_FIXUP_852 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_730.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1665.x = _RESERVED_IDENTIFIER_FIXUP_852;
    _RESERVED_IDENTIFIER_FIXUP_1665.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_852;
    vec4 _RESERVED_IDENTIFIER_FIXUP_880 = (_RESERVED_IDENTIFIER_FIXUP_1671 * _RESERVED_IDENTIFIER_FIXUP_730.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1659 * _RESERVED_IDENTIFIER_FIXUP_730.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1635 * _RESERVED_IDENTIFIER_FIXUP_1665.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_730.xxxx * _RESERVED_IDENTIFIER_FIXUP_1647)));
    float _RESERVED_IDENTIFIER_FIXUP_887 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1788 = _RESERVED_IDENTIFIER_FIXUP_880;
    _RESERVED_IDENTIFIER_FIXUP_1788.x = _RESERVED_IDENTIFIER_FIXUP_880.x;
    _RESERVED_IDENTIFIER_FIXUP_1788.y = _RESERVED_IDENTIFIER_FIXUP_880.y;
    _RESERVED_IDENTIFIER_FIXUP_1788.z = _RESERVED_IDENTIFIER_FIXUP_880.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1121 = _RESERVED_IDENTIFIER_FIXUP_1788.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1794 = _RESERVED_IDENTIFIER_FIXUP_1788;
    _RESERVED_IDENTIFIER_FIXUP_1794.x = _RESERVED_IDENTIFIER_FIXUP_1121.x;
    _RESERVED_IDENTIFIER_FIXUP_1794.y = _RESERVED_IDENTIFIER_FIXUP_1121.y;
    _RESERVED_IDENTIFIER_FIXUP_1794.z = _RESERVED_IDENTIFIER_FIXUP_1121.z;
    vec2 param_5 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1174 = hdTex0(param_5);
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = hdTex1(param_6);
    vec2 param_7 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1182 = hdTex2(param_7);
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1186 = hdTex3(param_8);
    vec2 param_9 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1190 = hdTex4(param_9);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1198 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1808 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1808.x = _RESERVED_IDENTIFIER_FIXUP_1198.x;
    _RESERVED_IDENTIFIER_FIXUP_1808.y = _RESERVED_IDENTIFIER_FIXUP_1198.y;
    _RESERVED_IDENTIFIER_FIXUP_1808.z = _RESERVED_IDENTIFIER_FIXUP_1198.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1206 = _RESERVED_IDENTIFIER_FIXUP_1174.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_1206 * _RESERVED_IDENTIFIER_FIXUP_1808.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1814;
    _RESERVED_IDENTIFIER_FIXUP_1814.x = _RESERVED_IDENTIFIER_FIXUP_1209.x;
    _RESERVED_IDENTIFIER_FIXUP_1814.y = _RESERVED_IDENTIFIER_FIXUP_1209.y;
    _RESERVED_IDENTIFIER_FIXUP_1814.z = _RESERVED_IDENTIFIER_FIXUP_1209.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1224 = mix(_RESERVED_IDENTIFIER_FIXUP_1814.xyz, _RESERVED_IDENTIFIER_FIXUP_1206, _RESERVED_IDENTIFIER_FIXUP_763);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1820 = _RESERVED_IDENTIFIER_FIXUP_1174;
    _RESERVED_IDENTIFIER_FIXUP_1820.x = _RESERVED_IDENTIFIER_FIXUP_1224.x;
    _RESERVED_IDENTIFIER_FIXUP_1820.y = _RESERVED_IDENTIFIER_FIXUP_1224.y;
    _RESERVED_IDENTIFIER_FIXUP_1820.z = _RESERVED_IDENTIFIER_FIXUP_1224.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1232 = _RESERVED_IDENTIFIER_FIXUP_1178.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_1232 * _RESERVED_IDENTIFIER_FIXUP_1808.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1826;
    _RESERVED_IDENTIFIER_FIXUP_1826.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
    _RESERVED_IDENTIFIER_FIXUP_1826.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
    _RESERVED_IDENTIFIER_FIXUP_1826.z = _RESERVED_IDENTIFIER_FIXUP_1235.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1250 = mix(_RESERVED_IDENTIFIER_FIXUP_1826.xyz, _RESERVED_IDENTIFIER_FIXUP_1232, _RESERVED_IDENTIFIER_FIXUP_789);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1832 = _RESERVED_IDENTIFIER_FIXUP_1178;
    _RESERVED_IDENTIFIER_FIXUP_1832.x = _RESERVED_IDENTIFIER_FIXUP_1250.x;
    _RESERVED_IDENTIFIER_FIXUP_1832.y = _RESERVED_IDENTIFIER_FIXUP_1250.y;
    _RESERVED_IDENTIFIER_FIXUP_1832.z = _RESERVED_IDENTIFIER_FIXUP_1250.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_1182.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_1258 * _RESERVED_IDENTIFIER_FIXUP_1808.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1838;
    _RESERVED_IDENTIFIER_FIXUP_1838.x = _RESERVED_IDENTIFIER_FIXUP_1261.x;
    _RESERVED_IDENTIFIER_FIXUP_1838.y = _RESERVED_IDENTIFIER_FIXUP_1261.y;
    _RESERVED_IDENTIFIER_FIXUP_1838.z = _RESERVED_IDENTIFIER_FIXUP_1261.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1276 = mix(_RESERVED_IDENTIFIER_FIXUP_1838.xyz, _RESERVED_IDENTIFIER_FIXUP_1258, _RESERVED_IDENTIFIER_FIXUP_815);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1844 = _RESERVED_IDENTIFIER_FIXUP_1182;
    _RESERVED_IDENTIFIER_FIXUP_1844.x = _RESERVED_IDENTIFIER_FIXUP_1276.x;
    _RESERVED_IDENTIFIER_FIXUP_1844.y = _RESERVED_IDENTIFIER_FIXUP_1276.y;
    _RESERVED_IDENTIFIER_FIXUP_1844.z = _RESERVED_IDENTIFIER_FIXUP_1276.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1284 = _RESERVED_IDENTIFIER_FIXUP_1186.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_1284 * _RESERVED_IDENTIFIER_FIXUP_1808.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1850 = _RESERVED_IDENTIFIER_FIXUP_733;
    _RESERVED_IDENTIFIER_FIXUP_1850.x = _RESERVED_IDENTIFIER_FIXUP_1287.x;
    _RESERVED_IDENTIFIER_FIXUP_1850.y = _RESERVED_IDENTIFIER_FIXUP_1287.y;
    _RESERVED_IDENTIFIER_FIXUP_1850.z = _RESERVED_IDENTIFIER_FIXUP_1287.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1302 = mix(_RESERVED_IDENTIFIER_FIXUP_1850.xyz, _RESERVED_IDENTIFIER_FIXUP_1284, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1850.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1856 = _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_1856.x = _RESERVED_IDENTIFIER_FIXUP_1302.x;
    _RESERVED_IDENTIFIER_FIXUP_1856.y = _RESERVED_IDENTIFIER_FIXUP_1302.y;
    _RESERVED_IDENTIFIER_FIXUP_1856.z = _RESERVED_IDENTIFIER_FIXUP_1302.z;
    float _RESERVED_IDENTIFIER_FIXUP_1312 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1190.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1850.x = _RESERVED_IDENTIFIER_FIXUP_1312;
    _RESERVED_IDENTIFIER_FIXUP_1850.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1312;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1322 = _RESERVED_IDENTIFIER_FIXUP_1190.xxxx * _RESERVED_IDENTIFIER_FIXUP_1832;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1340 = (_RESERVED_IDENTIFIER_FIXUP_1856 * _RESERVED_IDENTIFIER_FIXUP_1190.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1844 * _RESERVED_IDENTIFIER_FIXUP_1190.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1820 * _RESERVED_IDENTIFIER_FIXUP_1850.xxxx) + _RESERVED_IDENTIFIER_FIXUP_1322));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1869 = _RESERVED_IDENTIFIER_FIXUP_1322;
    _RESERVED_IDENTIFIER_FIXUP_1869.x = _RESERVED_IDENTIFIER_FIXUP_887;
    float _RESERVED_IDENTIFIER_FIXUP_1353 = clamp((_RESERVED_IDENTIFIER_FIXUP_887 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1869.x = _RESERVED_IDENTIFIER_FIXUP_1353;
    float _RESERVED_IDENTIFIER_FIXUP_1359 = ((-_RESERVED_IDENTIFIER_FIXUP_1353) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1869.y = _RESERVED_IDENTIFIER_FIXUP_1359;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2000;
    if (_RESERVED_IDENTIFIER_FIXUP_1359 != (-_RESERVED_IDENTIFIER_FIXUP_1359))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1371 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1869.y = _RESERVED_IDENTIFIER_FIXUP_1371.x;
        _RESERVED_IDENTIFIER_FIXUP_1869.z = _RESERVED_IDENTIFIER_FIXUP_1371.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_1869.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1886;
        _RESERVED_IDENTIFIER_FIXUP_1886.x = _RESERVED_IDENTIFIER_FIXUP_1381.x;
        _RESERVED_IDENTIFIER_FIXUP_1886.y = _RESERVED_IDENTIFIER_FIXUP_1381.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_1869.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1890;
        _RESERVED_IDENTIFIER_FIXUP_1890.x = _RESERVED_IDENTIFIER_FIXUP_1391.x;
        _RESERVED_IDENTIFIER_FIXUP_1890.y = _RESERVED_IDENTIFIER_FIXUP_1391.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1401 = _RESERVED_IDENTIFIER_FIXUP_1869.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1894;
        _RESERVED_IDENTIFIER_FIXUP_1894.x = _RESERVED_IDENTIFIER_FIXUP_1401.x;
        _RESERVED_IDENTIFIER_FIXUP_1894.y = _RESERVED_IDENTIFIER_FIXUP_1401.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1411 = _RESERVED_IDENTIFIER_FIXUP_1869.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1898;
        _RESERVED_IDENTIFIER_FIXUP_1898.x = _RESERVED_IDENTIFIER_FIXUP_1411.x;
        _RESERVED_IDENTIFIER_FIXUP_1898.y = _RESERVED_IDENTIFIER_FIXUP_1411.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1419 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1419.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1419.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1425 = hdLod5(param_10, param_11);
        _RESERVED_IDENTIFIER_FIXUP_1886.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1890.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1894.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1898.w = 0.0;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1886.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1425.y = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1890.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1425.z = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1894.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1425.w = hdLod5(param_16, param_17).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1482 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1425 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1898.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1482.x = min((_RESERVED_IDENTIFIER_FIXUP_1353 * (((float((hdLod5(param_18, param_19).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1482, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1190.w);
        _RESERVED_IDENTIFIER_FIXUP_2000 = _RESERVED_IDENTIFIER_FIXUP_1482;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1880 = _RESERVED_IDENTIFIER_FIXUP_1844;
        _RESERVED_IDENTIFIER_FIXUP_1880.x = _RESERVED_IDENTIFIER_FIXUP_1190.w;
        _RESERVED_IDENTIFIER_FIXUP_2000 = _RESERVED_IDENTIFIER_FIXUP_1880;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1530 = (_RESERVED_IDENTIFIER_FIXUP_2000.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2006 = vec4(_RESERVED_IDENTIFIER_FIXUP_1530, _RESERVED_IDENTIFIER_FIXUP_1340.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1554 = _RESERVED_IDENTIFIER_FIXUP_2000.xxx * _RESERVED_IDENTIFIER_FIXUP_2006.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1969 = _RESERVED_IDENTIFIER_FIXUP_2006;
    _RESERVED_IDENTIFIER_FIXUP_1969.y = _RESERVED_IDENTIFIER_FIXUP_1554.x;
    _RESERVED_IDENTIFIER_FIXUP_1969.z = _RESERVED_IDENTIFIER_FIXUP_1554.y;
    _RESERVED_IDENTIFIER_FIXUP_1969.w = _RESERVED_IDENTIFIER_FIXUP_1554.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1568 = (_RESERVED_IDENTIFIER_FIXUP_1340.xyz * _RESERVED_IDENTIFIER_FIXUP_1969.xxx) + _RESERVED_IDENTIFIER_FIXUP_1969.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1975 = _RESERVED_IDENTIFIER_FIXUP_1340;
    _RESERVED_IDENTIFIER_FIXUP_1975.x = _RESERVED_IDENTIFIER_FIXUP_1568.x;
    _RESERVED_IDENTIFIER_FIXUP_1975.y = _RESERVED_IDENTIFIER_FIXUP_1568.y;
    _RESERVED_IDENTIFIER_FIXUP_1975.z = _RESERVED_IDENTIFIER_FIXUP_1568.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_1975.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1981 = _RESERVED_IDENTIFIER_FIXUP_1975;
    _RESERVED_IDENTIFIER_FIXUP_1981.x = _RESERVED_IDENTIFIER_FIXUP_1581.x;
    _RESERVED_IDENTIFIER_FIXUP_1981.y = _RESERVED_IDENTIFIER_FIXUP_1581.y;
    _RESERVED_IDENTIFIER_FIXUP_1981.z = _RESERVED_IDENTIFIER_FIXUP_1581.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1981.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_577 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_586;
    if (_RESERVED_IDENTIFIER_FIXUP_577)
    {
        _RESERVED_IDENTIFIER_FIXUP_586 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_586 = _RESERVED_IDENTIFIER_FIXUP_577;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_586)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_623 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1794.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_649 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1616;
    if (_RESERVED_IDENTIFIER_FIXUP_623 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1616 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_623), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_649);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1616 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_649);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1616;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1530);
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    vec2 param_4 = v4.wz;
    r4 = hdTex4(param_4);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 hdB94 = v0.xyz + v0.xyz;
    r6.x = hdB94.x;
    r6.y = hdB94.y;
    r6.z = hdB94.z;
    vec3 hdB109 = r0.xyz * r6.xyz;
    r7.x = hdB109.x;
    r7.y = hdB109.y;
    r7.z = hdB109.z;
    vec4 hdB118 = r0;
    vec3 hdB127 = mix(r7.xyz, hdB118.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB127.x;
    r0.y = hdB127.y;
    r0.z = hdB127.z;
    vec3 hdB138 = r1.xyz * r6.xyz;
    r7.x = hdB138.x;
    r7.y = hdB138.y;
    r7.z = hdB138.z;
    vec4 hdB147 = r1;
    vec3 hdB153 = mix(r7.xyz, hdB147.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB153.x;
    r1.y = hdB153.y;
    r1.z = hdB153.z;
    vec3 hdB164 = r2.xyz * r6.xyz;
    r7.x = hdB164.x;
    r7.y = hdB164.y;
    r7.z = hdB164.z;
    vec4 hdB173 = r2;
    vec3 hdB179 = mix(r7.xyz, hdB173.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB179.x;
    r2.y = hdB179.y;
    r2.z = hdB179.z;
    vec3 hdB190 = r3.xyz * r6.xyz;
    r5.x = hdB190.x;
    r5.y = hdB190.y;
    r5.z = hdB190.z;
    vec4 hdB199 = r3;
    vec3 hdB205 = mix(r5.xyz, hdB199.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB205.x;
    r3.y = hdB205.y;
    r3.z = hdB205.z;
    r5.x = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r5.x = (-r5.x) + 1.0;
    r1 = r4.xxxx * r1;
    r0 = (r0 * r5.xxxx) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB281 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB281.x;
        r1.z = hdB281.y;
        vec2 hdB292 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB292.x;
        r2.y = hdB292.y;
        vec2 hdB303 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB303.x;
        r3.y = hdB303.y;
        vec2 hdB314 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB314.x;
        r5.y = hdB314.y;
        vec2 hdB325 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB325.x;
        r6.y = hdB325.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r7.xy;
        float param_6 = r7.w;
        r7 = hdLod5(param_5, param_6);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_11 = r5.xy;
        float param_12 = r5.w;
        r5 = hdLod5(param_11, param_12);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod5(param_13, param_14);
        r7.y = r2.x;
        r7.z = r3.x;
        r7.w = r5.x;
        r2 = r7 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r6.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB459 = r0.www * v1.xyz;
    r1.y = hdB459.x;
    r1.z = hdB459.y;
    r1.w = hdB459.z;
    vec4 hdB468 = r1;
    vec3 hdB470 = r2.xxx * hdB468.yzw;
    r1.y = hdB470.x;
    r1.z = hdB470.y;
    r1.w = hdB470.z;
    vec4 hdB477 = r0;
    vec3 hdB484 = (hdB477.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB484.x;
    r0.y = hdB484.y;
    r0.z = hdB484.z;
    vec4 hdB491 = r0;
    vec3 hdB498 = hdB491.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB498.x;
    r0.y = hdB498.y;
    r0.z = hdB498.z;
    vec3 hdB513 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB513.x;
    oC0.y = hdB513.y;
    oC0.z = hdB513.z;
    oC0.w = 1.0;
    bool hdB525 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB533;
    if (hdB525)
    {
        hdB533 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB533 = hdB525;
    }
    if (hdB533)
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
    bool _1697 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1707;
    if (_1697)
    {
        _1707 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1707 = _1697;
    }
    if (_1707)
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
        bool _1732 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1747;
        if (!_1732)
        {
            _1747 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1747 = _1732;
        }
        if (_1747)
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
