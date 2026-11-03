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
float _RESERVED_IDENTIFIER_FIXUP_1976;
vec4 _RESERVED_IDENTIFIER_FIXUP_1977;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_712 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_716 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_720 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_724 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_728 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_731 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_733 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1976).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_736 = _RESERVED_IDENTIFIER_FIXUP_733 + _RESERVED_IDENTIFIER_FIXUP_733;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1617;
    _RESERVED_IDENTIFIER_FIXUP_1617.x = _RESERVED_IDENTIFIER_FIXUP_736.x;
    _RESERVED_IDENTIFIER_FIXUP_1617.y = _RESERVED_IDENTIFIER_FIXUP_736.y;
    _RESERVED_IDENTIFIER_FIXUP_1617.z = _RESERVED_IDENTIFIER_FIXUP_736.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_744 = _RESERVED_IDENTIFIER_FIXUP_712.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_747 = _RESERVED_IDENTIFIER_FIXUP_744 * _RESERVED_IDENTIFIER_FIXUP_1617.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1623;
    _RESERVED_IDENTIFIER_FIXUP_1623.x = _RESERVED_IDENTIFIER_FIXUP_747.x;
    _RESERVED_IDENTIFIER_FIXUP_1623.y = _RESERVED_IDENTIFIER_FIXUP_747.y;
    _RESERVED_IDENTIFIER_FIXUP_1623.z = _RESERVED_IDENTIFIER_FIXUP_747.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_761 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_731.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_762 = mix(_RESERVED_IDENTIFIER_FIXUP_1623.xyz, _RESERVED_IDENTIFIER_FIXUP_744, _RESERVED_IDENTIFIER_FIXUP_761);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_712;
    _RESERVED_IDENTIFIER_FIXUP_1629.x = _RESERVED_IDENTIFIER_FIXUP_762.x;
    _RESERVED_IDENTIFIER_FIXUP_1629.y = _RESERVED_IDENTIFIER_FIXUP_762.y;
    _RESERVED_IDENTIFIER_FIXUP_1629.z = _RESERVED_IDENTIFIER_FIXUP_762.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_770 = _RESERVED_IDENTIFIER_FIXUP_716.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_773 = _RESERVED_IDENTIFIER_FIXUP_770 * _RESERVED_IDENTIFIER_FIXUP_1617.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1635;
    _RESERVED_IDENTIFIER_FIXUP_1635.x = _RESERVED_IDENTIFIER_FIXUP_773.x;
    _RESERVED_IDENTIFIER_FIXUP_1635.y = _RESERVED_IDENTIFIER_FIXUP_773.y;
    _RESERVED_IDENTIFIER_FIXUP_1635.z = _RESERVED_IDENTIFIER_FIXUP_773.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_787 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_731.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_788 = mix(_RESERVED_IDENTIFIER_FIXUP_1635.xyz, _RESERVED_IDENTIFIER_FIXUP_770, _RESERVED_IDENTIFIER_FIXUP_787);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1641 = _RESERVED_IDENTIFIER_FIXUP_716;
    _RESERVED_IDENTIFIER_FIXUP_1641.x = _RESERVED_IDENTIFIER_FIXUP_788.x;
    _RESERVED_IDENTIFIER_FIXUP_1641.y = _RESERVED_IDENTIFIER_FIXUP_788.y;
    _RESERVED_IDENTIFIER_FIXUP_1641.z = _RESERVED_IDENTIFIER_FIXUP_788.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_796 = _RESERVED_IDENTIFIER_FIXUP_720.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_799 = _RESERVED_IDENTIFIER_FIXUP_796 * _RESERVED_IDENTIFIER_FIXUP_1617.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1647;
    _RESERVED_IDENTIFIER_FIXUP_1647.x = _RESERVED_IDENTIFIER_FIXUP_799.x;
    _RESERVED_IDENTIFIER_FIXUP_1647.y = _RESERVED_IDENTIFIER_FIXUP_799.y;
    _RESERVED_IDENTIFIER_FIXUP_1647.z = _RESERVED_IDENTIFIER_FIXUP_799.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_813 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_731.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_814 = mix(_RESERVED_IDENTIFIER_FIXUP_1647.xyz, _RESERVED_IDENTIFIER_FIXUP_796, _RESERVED_IDENTIFIER_FIXUP_813);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1653 = _RESERVED_IDENTIFIER_FIXUP_720;
    _RESERVED_IDENTIFIER_FIXUP_1653.x = _RESERVED_IDENTIFIER_FIXUP_814.x;
    _RESERVED_IDENTIFIER_FIXUP_1653.y = _RESERVED_IDENTIFIER_FIXUP_814.y;
    _RESERVED_IDENTIFIER_FIXUP_1653.z = _RESERVED_IDENTIFIER_FIXUP_814.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_822 = _RESERVED_IDENTIFIER_FIXUP_724.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_822 * _RESERVED_IDENTIFIER_FIXUP_1617.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1659 = _RESERVED_IDENTIFIER_FIXUP_731;
    _RESERVED_IDENTIFIER_FIXUP_1659.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1659.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1659.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_840 = mix(_RESERVED_IDENTIFIER_FIXUP_1659.xyz, _RESERVED_IDENTIFIER_FIXUP_822, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1659.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1665 = _RESERVED_IDENTIFIER_FIXUP_724;
    _RESERVED_IDENTIFIER_FIXUP_1665.x = _RESERVED_IDENTIFIER_FIXUP_840.x;
    _RESERVED_IDENTIFIER_FIXUP_1665.y = _RESERVED_IDENTIFIER_FIXUP_840.y;
    _RESERVED_IDENTIFIER_FIXUP_1665.z = _RESERVED_IDENTIFIER_FIXUP_840.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1674;
    _RESERVED_IDENTIFIER_FIXUP_1674.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_728.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_878 = (_RESERVED_IDENTIFIER_FIXUP_1665 * _RESERVED_IDENTIFIER_FIXUP_728.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1653 * _RESERVED_IDENTIFIER_FIXUP_728.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1629 * _RESERVED_IDENTIFIER_FIXUP_1674.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_728.xxxx * _RESERVED_IDENTIFIER_FIXUP_1641)));
    float _RESERVED_IDENTIFIER_FIXUP_885 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1776 = _RESERVED_IDENTIFIER_FIXUP_878;
    _RESERVED_IDENTIFIER_FIXUP_1776.x = _RESERVED_IDENTIFIER_FIXUP_878.x;
    _RESERVED_IDENTIFIER_FIXUP_1776.y = _RESERVED_IDENTIFIER_FIXUP_878.y;
    _RESERVED_IDENTIFIER_FIXUP_1776.z = _RESERVED_IDENTIFIER_FIXUP_878.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1776.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1782 = _RESERVED_IDENTIFIER_FIXUP_1776;
    _RESERVED_IDENTIFIER_FIXUP_1782.x = _RESERVED_IDENTIFIER_FIXUP_1117.x;
    _RESERVED_IDENTIFIER_FIXUP_1782.y = _RESERVED_IDENTIFIER_FIXUP_1117.y;
    _RESERVED_IDENTIFIER_FIXUP_1782.z = _RESERVED_IDENTIFIER_FIXUP_1117.z;
    vec2 param_5 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1170 = hdTex0(param_5);
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1174 = hdTex1(param_6);
    vec2 param_7 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = hdTex2(param_7);
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1182 = hdTex3(param_8);
    vec2 param_9 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1186 = hdTex4(param_9);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1194 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1796;
    _RESERVED_IDENTIFIER_FIXUP_1796.x = _RESERVED_IDENTIFIER_FIXUP_1194.x;
    _RESERVED_IDENTIFIER_FIXUP_1796.y = _RESERVED_IDENTIFIER_FIXUP_1194.y;
    _RESERVED_IDENTIFIER_FIXUP_1796.z = _RESERVED_IDENTIFIER_FIXUP_1194.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1170.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1202 * _RESERVED_IDENTIFIER_FIXUP_1796.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1802;
    _RESERVED_IDENTIFIER_FIXUP_1802.x = _RESERVED_IDENTIFIER_FIXUP_1205.x;
    _RESERVED_IDENTIFIER_FIXUP_1802.y = _RESERVED_IDENTIFIER_FIXUP_1205.y;
    _RESERVED_IDENTIFIER_FIXUP_1802.z = _RESERVED_IDENTIFIER_FIXUP_1205.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1220 = mix(_RESERVED_IDENTIFIER_FIXUP_1802.xyz, _RESERVED_IDENTIFIER_FIXUP_1202, _RESERVED_IDENTIFIER_FIXUP_761);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1808 = _RESERVED_IDENTIFIER_FIXUP_1170;
    _RESERVED_IDENTIFIER_FIXUP_1808.x = _RESERVED_IDENTIFIER_FIXUP_1220.x;
    _RESERVED_IDENTIFIER_FIXUP_1808.y = _RESERVED_IDENTIFIER_FIXUP_1220.y;
    _RESERVED_IDENTIFIER_FIXUP_1808.z = _RESERVED_IDENTIFIER_FIXUP_1220.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_1174.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1228 * _RESERVED_IDENTIFIER_FIXUP_1796.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1814;
    _RESERVED_IDENTIFIER_FIXUP_1814.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
    _RESERVED_IDENTIFIER_FIXUP_1814.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
    _RESERVED_IDENTIFIER_FIXUP_1814.z = _RESERVED_IDENTIFIER_FIXUP_1231.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1246 = mix(_RESERVED_IDENTIFIER_FIXUP_1814.xyz, _RESERVED_IDENTIFIER_FIXUP_1228, _RESERVED_IDENTIFIER_FIXUP_787);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1820 = _RESERVED_IDENTIFIER_FIXUP_1174;
    _RESERVED_IDENTIFIER_FIXUP_1820.x = _RESERVED_IDENTIFIER_FIXUP_1246.x;
    _RESERVED_IDENTIFIER_FIXUP_1820.y = _RESERVED_IDENTIFIER_FIXUP_1246.y;
    _RESERVED_IDENTIFIER_FIXUP_1820.z = _RESERVED_IDENTIFIER_FIXUP_1246.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1254 = _RESERVED_IDENTIFIER_FIXUP_1178.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_1254 * _RESERVED_IDENTIFIER_FIXUP_1796.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1826;
    _RESERVED_IDENTIFIER_FIXUP_1826.x = _RESERVED_IDENTIFIER_FIXUP_1257.x;
    _RESERVED_IDENTIFIER_FIXUP_1826.y = _RESERVED_IDENTIFIER_FIXUP_1257.y;
    _RESERVED_IDENTIFIER_FIXUP_1826.z = _RESERVED_IDENTIFIER_FIXUP_1257.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1272 = mix(_RESERVED_IDENTIFIER_FIXUP_1826.xyz, _RESERVED_IDENTIFIER_FIXUP_1254, _RESERVED_IDENTIFIER_FIXUP_813);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1832 = _RESERVED_IDENTIFIER_FIXUP_1178;
    _RESERVED_IDENTIFIER_FIXUP_1832.x = _RESERVED_IDENTIFIER_FIXUP_1272.x;
    _RESERVED_IDENTIFIER_FIXUP_1832.y = _RESERVED_IDENTIFIER_FIXUP_1272.y;
    _RESERVED_IDENTIFIER_FIXUP_1832.z = _RESERVED_IDENTIFIER_FIXUP_1272.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1280 = _RESERVED_IDENTIFIER_FIXUP_1182.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_1280 * _RESERVED_IDENTIFIER_FIXUP_1796.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1838 = _RESERVED_IDENTIFIER_FIXUP_731;
    _RESERVED_IDENTIFIER_FIXUP_1838.x = _RESERVED_IDENTIFIER_FIXUP_1283.x;
    _RESERVED_IDENTIFIER_FIXUP_1838.y = _RESERVED_IDENTIFIER_FIXUP_1283.y;
    _RESERVED_IDENTIFIER_FIXUP_1838.z = _RESERVED_IDENTIFIER_FIXUP_1283.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1298 = mix(_RESERVED_IDENTIFIER_FIXUP_1838.xyz, _RESERVED_IDENTIFIER_FIXUP_1280, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1838.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1844 = _RESERVED_IDENTIFIER_FIXUP_1182;
    _RESERVED_IDENTIFIER_FIXUP_1844.x = _RESERVED_IDENTIFIER_FIXUP_1298.x;
    _RESERVED_IDENTIFIER_FIXUP_1844.y = _RESERVED_IDENTIFIER_FIXUP_1298.y;
    _RESERVED_IDENTIFIER_FIXUP_1844.z = _RESERVED_IDENTIFIER_FIXUP_1298.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1853;
    _RESERVED_IDENTIFIER_FIXUP_1853.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1186.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1318 = _RESERVED_IDENTIFIER_FIXUP_1186.xxxx * _RESERVED_IDENTIFIER_FIXUP_1820;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1336 = (_RESERVED_IDENTIFIER_FIXUP_1844 * _RESERVED_IDENTIFIER_FIXUP_1186.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1832 * _RESERVED_IDENTIFIER_FIXUP_1186.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1808 * _RESERVED_IDENTIFIER_FIXUP_1853.xxxx) + _RESERVED_IDENTIFIER_FIXUP_1318));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1857 = _RESERVED_IDENTIFIER_FIXUP_1318;
    _RESERVED_IDENTIFIER_FIXUP_1857.x = _RESERVED_IDENTIFIER_FIXUP_885;
    float _RESERVED_IDENTIFIER_FIXUP_1349 = clamp((_RESERVED_IDENTIFIER_FIXUP_885 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1857.x = _RESERVED_IDENTIFIER_FIXUP_1349;
    float _RESERVED_IDENTIFIER_FIXUP_1355 = ((-_RESERVED_IDENTIFIER_FIXUP_1349) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1857.y = _RESERVED_IDENTIFIER_FIXUP_1355;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1982;
    if (_RESERVED_IDENTIFIER_FIXUP_1355 != (-_RESERVED_IDENTIFIER_FIXUP_1355))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1367 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1377 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_1377.x;
        _RESERVED_IDENTIFIER_FIXUP_1857.y = _RESERVED_IDENTIFIER_FIXUP_1379;
        _RESERVED_IDENTIFIER_FIXUP_1857.z = _RESERVED_IDENTIFIER_FIXUP_1377.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1387 = _RESERVED_IDENTIFIER_FIXUP_1857.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1875;
        _RESERVED_IDENTIFIER_FIXUP_1875.x = _RESERVED_IDENTIFIER_FIXUP_1387.x;
        _RESERVED_IDENTIFIER_FIXUP_1875.y = _RESERVED_IDENTIFIER_FIXUP_1387.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1394 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1398 = _RESERVED_IDENTIFIER_FIXUP_1394.y;
        _RESERVED_IDENTIFIER_FIXUP_1875.w = _RESERVED_IDENTIFIER_FIXUP_1398;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1367.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1367.w;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1875.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1398;
        float _RESERVED_IDENTIFIER_FIXUP_1409 = hdLod5(param_10, param_11).x + hdLod5(param_12, param_13).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1989 = vec4(_RESERVED_IDENTIFIER_FIXUP_1349, _RESERVED_IDENTIFIER_FIXUP_1379, _RESERVED_IDENTIFIER_FIXUP_1377.y, _RESERVED_IDENTIFIER_FIXUP_1409);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1416 = _RESERVED_IDENTIFIER_FIXUP_1989.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1888;
        _RESERVED_IDENTIFIER_FIXUP_1888.x = _RESERVED_IDENTIFIER_FIXUP_1416.x;
        _RESERVED_IDENTIFIER_FIXUP_1888.y = _RESERVED_IDENTIFIER_FIXUP_1416.y;
        _RESERVED_IDENTIFIER_FIXUP_1888.w = _RESERVED_IDENTIFIER_FIXUP_1398;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1888.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1398;
        float _RESERVED_IDENTIFIER_FIXUP_1438 = _RESERVED_IDENTIFIER_FIXUP_1409 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_1989.w = _RESERVED_IDENTIFIER_FIXUP_1438;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1445 = _RESERVED_IDENTIFIER_FIXUP_1989.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1901;
        _RESERVED_IDENTIFIER_FIXUP_1901.x = _RESERVED_IDENTIFIER_FIXUP_1445.x;
        _RESERVED_IDENTIFIER_FIXUP_1901.y = _RESERVED_IDENTIFIER_FIXUP_1445.y;
        _RESERVED_IDENTIFIER_FIXUP_1901.w = _RESERVED_IDENTIFIER_FIXUP_1398;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1901.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1398;
        float _RESERVED_IDENTIFIER_FIXUP_1467 = _RESERVED_IDENTIFIER_FIXUP_1438 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_1989.w = _RESERVED_IDENTIFIER_FIXUP_1467;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_1989.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1914;
        _RESERVED_IDENTIFIER_FIXUP_1914.x = _RESERVED_IDENTIFIER_FIXUP_1474.x;
        _RESERVED_IDENTIFIER_FIXUP_1914.y = _RESERVED_IDENTIFIER_FIXUP_1474.y;
        _RESERVED_IDENTIFIER_FIXUP_1914.w = _RESERVED_IDENTIFIER_FIXUP_1398;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1914.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1398;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1491 = hdLod5(param_18, param_19);
        _RESERVED_IDENTIFIER_FIXUP_1491.x = min((_RESERVED_IDENTIFIER_FIXUP_1349 * (((_RESERVED_IDENTIFIER_FIXUP_1467 + _RESERVED_IDENTIFIER_FIXUP_1491.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1186.w);
        _RESERVED_IDENTIFIER_FIXUP_1982 = _RESERVED_IDENTIFIER_FIXUP_1491;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1868 = _RESERVED_IDENTIFIER_FIXUP_1832;
        _RESERVED_IDENTIFIER_FIXUP_1868.x = _RESERVED_IDENTIFIER_FIXUP_1186.w;
        _RESERVED_IDENTIFIER_FIXUP_1982 = _RESERVED_IDENTIFIER_FIXUP_1868;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1524 = (_RESERVED_IDENTIFIER_FIXUP_1982.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1990 = vec4(_RESERVED_IDENTIFIER_FIXUP_1524, _RESERVED_IDENTIFIER_FIXUP_1336.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1548 = _RESERVED_IDENTIFIER_FIXUP_1982.xxx * _RESERVED_IDENTIFIER_FIXUP_1990.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1951 = _RESERVED_IDENTIFIER_FIXUP_1990;
    _RESERVED_IDENTIFIER_FIXUP_1951.y = _RESERVED_IDENTIFIER_FIXUP_1548.x;
    _RESERVED_IDENTIFIER_FIXUP_1951.z = _RESERVED_IDENTIFIER_FIXUP_1548.y;
    _RESERVED_IDENTIFIER_FIXUP_1951.w = _RESERVED_IDENTIFIER_FIXUP_1548.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1562 = (_RESERVED_IDENTIFIER_FIXUP_1336.xyz * _RESERVED_IDENTIFIER_FIXUP_1951.xxx) + _RESERVED_IDENTIFIER_FIXUP_1951.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1957 = _RESERVED_IDENTIFIER_FIXUP_1336;
    _RESERVED_IDENTIFIER_FIXUP_1957.x = _RESERVED_IDENTIFIER_FIXUP_1562.x;
    _RESERVED_IDENTIFIER_FIXUP_1957.y = _RESERVED_IDENTIFIER_FIXUP_1562.y;
    _RESERVED_IDENTIFIER_FIXUP_1957.z = _RESERVED_IDENTIFIER_FIXUP_1562.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_1957.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1963 = _RESERVED_IDENTIFIER_FIXUP_1957;
    _RESERVED_IDENTIFIER_FIXUP_1963.x = _RESERVED_IDENTIFIER_FIXUP_1575.x;
    _RESERVED_IDENTIFIER_FIXUP_1963.y = _RESERVED_IDENTIFIER_FIXUP_1575.y;
    _RESERVED_IDENTIFIER_FIXUP_1963.z = _RESERVED_IDENTIFIER_FIXUP_1575.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1963.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_574 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_583;
    if (_RESERVED_IDENTIFIER_FIXUP_574)
    {
        _RESERVED_IDENTIFIER_FIXUP_583 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_583 = _RESERVED_IDENTIFIER_FIXUP_574;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_583)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_620 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1782.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_646 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1610;
    if (_RESERVED_IDENTIFIER_FIXUP_620 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1610 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_620), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_646);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1610 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_646);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1610;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1524);
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        vec2 hdB295 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB295.x;
        r1.z = hdB295.y;
        vec2 hdB306 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB306.x;
        r3.y = hdB306.y;
        vec2 hdB314 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB314.x;
        r3.w = hdB314.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r1.w = r2.x + r3.x;
        vec2 hdB337 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB337.x;
        r2.y = hdB337.y;
        vec2 hdB344 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB344.x;
        r2.w = hdB344.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB367 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB367.x;
        r2.y = hdB367.y;
        vec2 hdB374 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB374.x;
        r2.w = hdB374.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.w += r2.x;
        vec2 hdB397 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB397.x;
        r2.y = hdB397.y;
        vec2 hdB404 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB404.x;
        r2.w = hdB404.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB456 = r0.www * v1.xyz;
    r1.y = hdB456.x;
    r1.z = hdB456.y;
    r1.w = hdB456.z;
    vec4 hdB465 = r1;
    vec3 hdB467 = r2.xxx * hdB465.yzw;
    r1.y = hdB467.x;
    r1.z = hdB467.y;
    r1.w = hdB467.z;
    vec4 hdB474 = r0;
    vec3 hdB481 = (hdB474.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB481.x;
    r0.y = hdB481.y;
    r0.z = hdB481.z;
    vec4 hdB488 = r0;
    vec3 hdB495 = hdB488.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB495.x;
    r0.y = hdB495.y;
    r0.z = hdB495.z;
    vec3 hdB510 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB510.x;
    oC0.y = hdB510.y;
    oC0.z = hdB510.z;
    oC0.w = 1.0;
    bool hdB522 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB530;
    if (hdB522)
    {
        hdB530 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB530 = hdB522;
    }
    if (hdB530)
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
    bool _1731 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1741;
    if (_1731)
    {
        _1741 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1741 = _1731;
    }
    if (_1741)
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
        bool _1766 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1781;
        if (!_1766)
        {
            _1781 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1781 = _1766;
        }
        if (_1781)
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
