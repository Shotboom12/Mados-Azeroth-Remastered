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
float _RESERVED_IDENTIFIER_FIXUP_1915;
vec4 _RESERVED_IDENTIFIER_FIXUP_1916;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_694 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_698 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_702 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_706 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_710 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_713 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_715 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1915).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_718 = _RESERVED_IDENTIFIER_FIXUP_715 + _RESERVED_IDENTIFIER_FIXUP_715;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1566;
    _RESERVED_IDENTIFIER_FIXUP_1566.x = _RESERVED_IDENTIFIER_FIXUP_718.x;
    _RESERVED_IDENTIFIER_FIXUP_1566.y = _RESERVED_IDENTIFIER_FIXUP_718.y;
    _RESERVED_IDENTIFIER_FIXUP_1566.z = _RESERVED_IDENTIFIER_FIXUP_718.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_726 = _RESERVED_IDENTIFIER_FIXUP_694.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_729 = _RESERVED_IDENTIFIER_FIXUP_726 * _RESERVED_IDENTIFIER_FIXUP_1566.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1572;
    _RESERVED_IDENTIFIER_FIXUP_1572.x = _RESERVED_IDENTIFIER_FIXUP_729.x;
    _RESERVED_IDENTIFIER_FIXUP_1572.y = _RESERVED_IDENTIFIER_FIXUP_729.y;
    _RESERVED_IDENTIFIER_FIXUP_1572.z = _RESERVED_IDENTIFIER_FIXUP_729.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_743 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_713.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_744 = mix(_RESERVED_IDENTIFIER_FIXUP_1572.xyz, _RESERVED_IDENTIFIER_FIXUP_726, _RESERVED_IDENTIFIER_FIXUP_743);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_694;
    _RESERVED_IDENTIFIER_FIXUP_1578.x = _RESERVED_IDENTIFIER_FIXUP_744.x;
    _RESERVED_IDENTIFIER_FIXUP_1578.y = _RESERVED_IDENTIFIER_FIXUP_744.y;
    _RESERVED_IDENTIFIER_FIXUP_1578.z = _RESERVED_IDENTIFIER_FIXUP_744.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_752 = _RESERVED_IDENTIFIER_FIXUP_698.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_755 = _RESERVED_IDENTIFIER_FIXUP_752 * _RESERVED_IDENTIFIER_FIXUP_1566.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1584;
    _RESERVED_IDENTIFIER_FIXUP_1584.x = _RESERVED_IDENTIFIER_FIXUP_755.x;
    _RESERVED_IDENTIFIER_FIXUP_1584.y = _RESERVED_IDENTIFIER_FIXUP_755.y;
    _RESERVED_IDENTIFIER_FIXUP_1584.z = _RESERVED_IDENTIFIER_FIXUP_755.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_769 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_713.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_770 = mix(_RESERVED_IDENTIFIER_FIXUP_1584.xyz, _RESERVED_IDENTIFIER_FIXUP_752, _RESERVED_IDENTIFIER_FIXUP_769);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1590 = _RESERVED_IDENTIFIER_FIXUP_698;
    _RESERVED_IDENTIFIER_FIXUP_1590.x = _RESERVED_IDENTIFIER_FIXUP_770.x;
    _RESERVED_IDENTIFIER_FIXUP_1590.y = _RESERVED_IDENTIFIER_FIXUP_770.y;
    _RESERVED_IDENTIFIER_FIXUP_1590.z = _RESERVED_IDENTIFIER_FIXUP_770.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_778 = _RESERVED_IDENTIFIER_FIXUP_702.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_781 = _RESERVED_IDENTIFIER_FIXUP_778 * _RESERVED_IDENTIFIER_FIXUP_1566.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1596;
    _RESERVED_IDENTIFIER_FIXUP_1596.x = _RESERVED_IDENTIFIER_FIXUP_781.x;
    _RESERVED_IDENTIFIER_FIXUP_1596.y = _RESERVED_IDENTIFIER_FIXUP_781.y;
    _RESERVED_IDENTIFIER_FIXUP_1596.z = _RESERVED_IDENTIFIER_FIXUP_781.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_795 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_713.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_796 = mix(_RESERVED_IDENTIFIER_FIXUP_1596.xyz, _RESERVED_IDENTIFIER_FIXUP_778, _RESERVED_IDENTIFIER_FIXUP_795);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1602 = _RESERVED_IDENTIFIER_FIXUP_702;
    _RESERVED_IDENTIFIER_FIXUP_1602.x = _RESERVED_IDENTIFIER_FIXUP_796.x;
    _RESERVED_IDENTIFIER_FIXUP_1602.y = _RESERVED_IDENTIFIER_FIXUP_796.y;
    _RESERVED_IDENTIFIER_FIXUP_1602.z = _RESERVED_IDENTIFIER_FIXUP_796.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_804 = _RESERVED_IDENTIFIER_FIXUP_706.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_807 = _RESERVED_IDENTIFIER_FIXUP_804 * _RESERVED_IDENTIFIER_FIXUP_1566.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1608 = _RESERVED_IDENTIFIER_FIXUP_713;
    _RESERVED_IDENTIFIER_FIXUP_1608.x = _RESERVED_IDENTIFIER_FIXUP_807.x;
    _RESERVED_IDENTIFIER_FIXUP_1608.y = _RESERVED_IDENTIFIER_FIXUP_807.y;
    _RESERVED_IDENTIFIER_FIXUP_1608.z = _RESERVED_IDENTIFIER_FIXUP_807.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_822 = mix(_RESERVED_IDENTIFIER_FIXUP_1608.xyz, _RESERVED_IDENTIFIER_FIXUP_804, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1608.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1614 = _RESERVED_IDENTIFIER_FIXUP_706;
    _RESERVED_IDENTIFIER_FIXUP_1614.x = _RESERVED_IDENTIFIER_FIXUP_822.x;
    _RESERVED_IDENTIFIER_FIXUP_1614.y = _RESERVED_IDENTIFIER_FIXUP_822.y;
    _RESERVED_IDENTIFIER_FIXUP_1614.z = _RESERVED_IDENTIFIER_FIXUP_822.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_843 = mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1578, _RESERVED_IDENTIFIER_FIXUP_1590, _RESERVED_IDENTIFIER_FIXUP_710.xxxx), _RESERVED_IDENTIFIER_FIXUP_1602, _RESERVED_IDENTIFIER_FIXUP_710.yyyy), _RESERVED_IDENTIFIER_FIXUP_1614, _RESERVED_IDENTIFIER_FIXUP_710.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_850 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1925 = vec4(_RESERVED_IDENTIFIER_FIXUP_843.x, 0.0, 0.0, 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1925.y = _RESERVED_IDENTIFIER_FIXUP_843.y;
    _RESERVED_IDENTIFIER_FIXUP_1925.z = _RESERVED_IDENTIFIER_FIXUP_843.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1082 = _RESERVED_IDENTIFIER_FIXUP_1925.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1726 = _RESERVED_IDENTIFIER_FIXUP_1925;
    _RESERVED_IDENTIFIER_FIXUP_1726.x = _RESERVED_IDENTIFIER_FIXUP_1082.x;
    _RESERVED_IDENTIFIER_FIXUP_1726.y = _RESERVED_IDENTIFIER_FIXUP_1082.y;
    _RESERVED_IDENTIFIER_FIXUP_1726.z = _RESERVED_IDENTIFIER_FIXUP_1082.z;
    vec2 param_5 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1135 = hdTex0(param_5);
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1139 = hdTex1(param_6);
    vec2 param_7 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1143 = hdTex2(param_7);
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1147 = hdTex3(param_8);
    vec2 param_9 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1151 = hdTex4(param_9);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1159 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1740;
    _RESERVED_IDENTIFIER_FIXUP_1740.x = _RESERVED_IDENTIFIER_FIXUP_1159.x;
    _RESERVED_IDENTIFIER_FIXUP_1740.y = _RESERVED_IDENTIFIER_FIXUP_1159.y;
    _RESERVED_IDENTIFIER_FIXUP_1740.z = _RESERVED_IDENTIFIER_FIXUP_1159.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1167 = _RESERVED_IDENTIFIER_FIXUP_1135.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1170 = _RESERVED_IDENTIFIER_FIXUP_1167 * _RESERVED_IDENTIFIER_FIXUP_1740.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1746;
    _RESERVED_IDENTIFIER_FIXUP_1746.x = _RESERVED_IDENTIFIER_FIXUP_1170.x;
    _RESERVED_IDENTIFIER_FIXUP_1746.y = _RESERVED_IDENTIFIER_FIXUP_1170.y;
    _RESERVED_IDENTIFIER_FIXUP_1746.z = _RESERVED_IDENTIFIER_FIXUP_1170.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1185 = mix(_RESERVED_IDENTIFIER_FIXUP_1746.xyz, _RESERVED_IDENTIFIER_FIXUP_1167, _RESERVED_IDENTIFIER_FIXUP_743);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1752 = _RESERVED_IDENTIFIER_FIXUP_1135;
    _RESERVED_IDENTIFIER_FIXUP_1752.x = _RESERVED_IDENTIFIER_FIXUP_1185.x;
    _RESERVED_IDENTIFIER_FIXUP_1752.y = _RESERVED_IDENTIFIER_FIXUP_1185.y;
    _RESERVED_IDENTIFIER_FIXUP_1752.z = _RESERVED_IDENTIFIER_FIXUP_1185.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1193 = _RESERVED_IDENTIFIER_FIXUP_1139.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1196 = _RESERVED_IDENTIFIER_FIXUP_1193 * _RESERVED_IDENTIFIER_FIXUP_1740.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1758;
    _RESERVED_IDENTIFIER_FIXUP_1758.x = _RESERVED_IDENTIFIER_FIXUP_1196.x;
    _RESERVED_IDENTIFIER_FIXUP_1758.y = _RESERVED_IDENTIFIER_FIXUP_1196.y;
    _RESERVED_IDENTIFIER_FIXUP_1758.z = _RESERVED_IDENTIFIER_FIXUP_1196.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1211 = mix(_RESERVED_IDENTIFIER_FIXUP_1758.xyz, _RESERVED_IDENTIFIER_FIXUP_1193, _RESERVED_IDENTIFIER_FIXUP_769);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1764 = _RESERVED_IDENTIFIER_FIXUP_1139;
    _RESERVED_IDENTIFIER_FIXUP_1764.x = _RESERVED_IDENTIFIER_FIXUP_1211.x;
    _RESERVED_IDENTIFIER_FIXUP_1764.y = _RESERVED_IDENTIFIER_FIXUP_1211.y;
    _RESERVED_IDENTIFIER_FIXUP_1764.z = _RESERVED_IDENTIFIER_FIXUP_1211.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1219 = _RESERVED_IDENTIFIER_FIXUP_1143.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1219 * _RESERVED_IDENTIFIER_FIXUP_1740.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1770;
    _RESERVED_IDENTIFIER_FIXUP_1770.x = _RESERVED_IDENTIFIER_FIXUP_1222.x;
    _RESERVED_IDENTIFIER_FIXUP_1770.y = _RESERVED_IDENTIFIER_FIXUP_1222.y;
    _RESERVED_IDENTIFIER_FIXUP_1770.z = _RESERVED_IDENTIFIER_FIXUP_1222.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1237 = mix(_RESERVED_IDENTIFIER_FIXUP_1770.xyz, _RESERVED_IDENTIFIER_FIXUP_1219, _RESERVED_IDENTIFIER_FIXUP_795);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1776 = _RESERVED_IDENTIFIER_FIXUP_1143;
    _RESERVED_IDENTIFIER_FIXUP_1776.x = _RESERVED_IDENTIFIER_FIXUP_1237.x;
    _RESERVED_IDENTIFIER_FIXUP_1776.y = _RESERVED_IDENTIFIER_FIXUP_1237.y;
    _RESERVED_IDENTIFIER_FIXUP_1776.z = _RESERVED_IDENTIFIER_FIXUP_1237.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1245 = _RESERVED_IDENTIFIER_FIXUP_1147.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1248 = _RESERVED_IDENTIFIER_FIXUP_1245 * _RESERVED_IDENTIFIER_FIXUP_1740.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1782 = _RESERVED_IDENTIFIER_FIXUP_713;
    _RESERVED_IDENTIFIER_FIXUP_1782.x = _RESERVED_IDENTIFIER_FIXUP_1248.x;
    _RESERVED_IDENTIFIER_FIXUP_1782.y = _RESERVED_IDENTIFIER_FIXUP_1248.y;
    _RESERVED_IDENTIFIER_FIXUP_1782.z = _RESERVED_IDENTIFIER_FIXUP_1248.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1263 = mix(_RESERVED_IDENTIFIER_FIXUP_1782.xyz, _RESERVED_IDENTIFIER_FIXUP_1245, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1782.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1788 = _RESERVED_IDENTIFIER_FIXUP_1147;
    _RESERVED_IDENTIFIER_FIXUP_1788.x = _RESERVED_IDENTIFIER_FIXUP_1263.x;
    _RESERVED_IDENTIFIER_FIXUP_1788.y = _RESERVED_IDENTIFIER_FIXUP_1263.y;
    _RESERVED_IDENTIFIER_FIXUP_1788.z = _RESERVED_IDENTIFIER_FIXUP_1263.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1279 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1752, _RESERVED_IDENTIFIER_FIXUP_1764, _RESERVED_IDENTIFIER_FIXUP_1151.xxxx), _RESERVED_IDENTIFIER_FIXUP_1776, _RESERVED_IDENTIFIER_FIXUP_1151.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1284 = mix(_RESERVED_IDENTIFIER_FIXUP_1279, _RESERVED_IDENTIFIER_FIXUP_1788, _RESERVED_IDENTIFIER_FIXUP_1151.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1796 = _RESERVED_IDENTIFIER_FIXUP_1279;
    _RESERVED_IDENTIFIER_FIXUP_1796.x = _RESERVED_IDENTIFIER_FIXUP_850;
    float _RESERVED_IDENTIFIER_FIXUP_1297 = clamp((_RESERVED_IDENTIFIER_FIXUP_850 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1796.x = _RESERVED_IDENTIFIER_FIXUP_1297;
    float _RESERVED_IDENTIFIER_FIXUP_1303 = ((-_RESERVED_IDENTIFIER_FIXUP_1297) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1796.y = _RESERVED_IDENTIFIER_FIXUP_1303;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1920;
    if (_RESERVED_IDENTIFIER_FIXUP_1303 != (-_RESERVED_IDENTIFIER_FIXUP_1303))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1315 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1325 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_1325.x;
        _RESERVED_IDENTIFIER_FIXUP_1796.y = _RESERVED_IDENTIFIER_FIXUP_1327;
        _RESERVED_IDENTIFIER_FIXUP_1796.z = _RESERVED_IDENTIFIER_FIXUP_1325.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1335 = _RESERVED_IDENTIFIER_FIXUP_1796.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1814;
        _RESERVED_IDENTIFIER_FIXUP_1814.x = _RESERVED_IDENTIFIER_FIXUP_1335.x;
        _RESERVED_IDENTIFIER_FIXUP_1814.y = _RESERVED_IDENTIFIER_FIXUP_1335.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1342 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1346 = _RESERVED_IDENTIFIER_FIXUP_1342.y;
        _RESERVED_IDENTIFIER_FIXUP_1814.w = _RESERVED_IDENTIFIER_FIXUP_1346;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1315.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1315.w;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1814.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1346;
        float _RESERVED_IDENTIFIER_FIXUP_1357 = hdLod5(param_10, param_11).x + hdLod5(param_12, param_13).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1927 = vec4(_RESERVED_IDENTIFIER_FIXUP_1297, _RESERVED_IDENTIFIER_FIXUP_1327, _RESERVED_IDENTIFIER_FIXUP_1325.y, _RESERVED_IDENTIFIER_FIXUP_1357);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_1927.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1827;
        _RESERVED_IDENTIFIER_FIXUP_1827.x = _RESERVED_IDENTIFIER_FIXUP_1364.x;
        _RESERVED_IDENTIFIER_FIXUP_1827.y = _RESERVED_IDENTIFIER_FIXUP_1364.y;
        _RESERVED_IDENTIFIER_FIXUP_1827.w = _RESERVED_IDENTIFIER_FIXUP_1346;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1827.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1346;
        float _RESERVED_IDENTIFIER_FIXUP_1386 = _RESERVED_IDENTIFIER_FIXUP_1357 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_1927.w = _RESERVED_IDENTIFIER_FIXUP_1386;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1393 = _RESERVED_IDENTIFIER_FIXUP_1927.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1840;
        _RESERVED_IDENTIFIER_FIXUP_1840.x = _RESERVED_IDENTIFIER_FIXUP_1393.x;
        _RESERVED_IDENTIFIER_FIXUP_1840.y = _RESERVED_IDENTIFIER_FIXUP_1393.y;
        _RESERVED_IDENTIFIER_FIXUP_1840.w = _RESERVED_IDENTIFIER_FIXUP_1346;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1840.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1346;
        float _RESERVED_IDENTIFIER_FIXUP_1415 = _RESERVED_IDENTIFIER_FIXUP_1386 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_1927.w = _RESERVED_IDENTIFIER_FIXUP_1415;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1422 = _RESERVED_IDENTIFIER_FIXUP_1927.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1853;
        _RESERVED_IDENTIFIER_FIXUP_1853.x = _RESERVED_IDENTIFIER_FIXUP_1422.x;
        _RESERVED_IDENTIFIER_FIXUP_1853.y = _RESERVED_IDENTIFIER_FIXUP_1422.y;
        _RESERVED_IDENTIFIER_FIXUP_1853.w = _RESERVED_IDENTIFIER_FIXUP_1346;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1853.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1346;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1439 = hdLod5(param_18, param_19);
        _RESERVED_IDENTIFIER_FIXUP_1439.x = min((_RESERVED_IDENTIFIER_FIXUP_1297 * (((_RESERVED_IDENTIFIER_FIXUP_1415 + _RESERVED_IDENTIFIER_FIXUP_1439.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1151.w);
        _RESERVED_IDENTIFIER_FIXUP_1920 = _RESERVED_IDENTIFIER_FIXUP_1439;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1807 = _RESERVED_IDENTIFIER_FIXUP_1776;
        _RESERVED_IDENTIFIER_FIXUP_1807.x = _RESERVED_IDENTIFIER_FIXUP_1151.w;
        _RESERVED_IDENTIFIER_FIXUP_1920 = _RESERVED_IDENTIFIER_FIXUP_1807;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1472 = (_RESERVED_IDENTIFIER_FIXUP_1920.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1928 = vec4(_RESERVED_IDENTIFIER_FIXUP_1472, _RESERVED_IDENTIFIER_FIXUP_1284.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_1920.xxx * _RESERVED_IDENTIFIER_FIXUP_1928.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1498 = _RESERVED_IDENTIFIER_FIXUP_1496.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1890 = _RESERVED_IDENTIFIER_FIXUP_1928;
    _RESERVED_IDENTIFIER_FIXUP_1890.y = _RESERVED_IDENTIFIER_FIXUP_1498;
    _RESERVED_IDENTIFIER_FIXUP_1890.z = _RESERVED_IDENTIFIER_FIXUP_1496.y;
    _RESERVED_IDENTIFIER_FIXUP_1890.w = _RESERVED_IDENTIFIER_FIXUP_1496.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1510 = (_RESERVED_IDENTIFIER_FIXUP_1284.xyz * _RESERVED_IDENTIFIER_FIXUP_1890.xxx) + _RESERVED_IDENTIFIER_FIXUP_1890.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1929 = vec4(_RESERVED_IDENTIFIER_FIXUP_1510.x, _RESERVED_IDENTIFIER_FIXUP_1498, _RESERVED_IDENTIFIER_FIXUP_1496.yz);
    _RESERVED_IDENTIFIER_FIXUP_1929.y = _RESERVED_IDENTIFIER_FIXUP_1510.y;
    _RESERVED_IDENTIFIER_FIXUP_1929.z = _RESERVED_IDENTIFIER_FIXUP_1510.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_1929.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1902 = _RESERVED_IDENTIFIER_FIXUP_1929;
    _RESERVED_IDENTIFIER_FIXUP_1902.x = _RESERVED_IDENTIFIER_FIXUP_1523.x;
    _RESERVED_IDENTIFIER_FIXUP_1902.y = _RESERVED_IDENTIFIER_FIXUP_1523.y;
    _RESERVED_IDENTIFIER_FIXUP_1902.z = _RESERVED_IDENTIFIER_FIXUP_1523.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1902.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_556 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_565;
    if (_RESERVED_IDENTIFIER_FIXUP_556)
    {
        _RESERVED_IDENTIFIER_FIXUP_565 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_565 = _RESERVED_IDENTIFIER_FIXUP_556;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_565)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_602 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1726.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_628 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1558;
    if (_RESERVED_IDENTIFIER_FIXUP_602 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1558 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_602), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_628);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1558 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_628);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1558;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1472);
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
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        vec2 hdB277 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB277.x;
        r0.z = hdB277.y;
        vec2 hdB288 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB288.x;
        r3.y = hdB288.y;
        vec2 hdB296 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB296.x;
        r3.w = hdB296.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r0.w = r2.x + r3.x;
        vec2 hdB319 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB319.x;
        r2.y = hdB319.y;
        vec2 hdB326 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB326.x;
        r2.w = hdB326.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r0.w += r2.x;
        vec2 hdB349 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB349.x;
        r2.y = hdB349.y;
        vec2 hdB356 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB356.x;
        r2.w = hdB356.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r0.w += r2.x;
        vec2 hdB379 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB379.x;
        r2.y = hdB379.y;
        vec2 hdB386 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB386.x;
        r2.w = hdB386.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r0.y = r0.w + r2.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r2.x = min(r0.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB438 = r1.www * v1.xyz;
    r0.y = hdB438.x;
    r0.z = hdB438.y;
    r0.w = hdB438.z;
    vec4 hdB447 = r0;
    vec3 hdB449 = r2.xxx * hdB447.yzw;
    r0.y = hdB449.x;
    r0.z = hdB449.y;
    r0.w = hdB449.z;
    vec4 hdB458 = r0;
    vec4 hdB461 = r0;
    vec3 hdB463 = (r1.xyz * hdB458.xxx) + hdB461.yzw;
    r0.x = hdB463.x;
    r0.y = hdB463.y;
    r0.z = hdB463.z;
    vec4 hdB470 = r0;
    vec3 hdB477 = hdB470.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB477.x;
    r0.y = hdB477.y;
    r0.z = hdB477.z;
    vec3 hdB492 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB492.x;
    oC0.y = hdB492.y;
    oC0.z = hdB492.z;
    oC0.w = 1.0;
    bool hdB504 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB512;
    if (hdB504)
    {
        hdB512 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB512 = hdB504;
    }
    if (hdB512)
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
    bool _1694 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1704;
    if (_1694)
    {
        _1704 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1704 = _1694;
    }
    if (_1704)
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
        bool _1729 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1744;
        if (!_1729)
        {
            _1744 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1744 = _1729;
        }
        if (_1744)
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
