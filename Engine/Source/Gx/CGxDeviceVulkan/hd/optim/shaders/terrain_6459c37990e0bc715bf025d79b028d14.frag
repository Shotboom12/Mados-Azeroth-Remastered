#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1918;
vec4 _RESERVED_IDENTIFIER_FIXUP_1919;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _89 = hdOverride >= 0;
    bool _99;
    if (_89)
    {
        _99 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _117 = hdOverride >= 0;
    bool _127;
    if (_117)
    {
        _127 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _145 = hdOverride >= 0;
    bool _154;
    if (_145)
    {
        _154 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _154 = _145;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_697 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_701 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_705 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_709 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_713 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_716 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_718 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1918).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_721 = _RESERVED_IDENTIFIER_FIXUP_718 + _RESERVED_IDENTIFIER_FIXUP_718;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1569;
    _RESERVED_IDENTIFIER_FIXUP_1569.x = _RESERVED_IDENTIFIER_FIXUP_721.x;
    _RESERVED_IDENTIFIER_FIXUP_1569.y = _RESERVED_IDENTIFIER_FIXUP_721.y;
    _RESERVED_IDENTIFIER_FIXUP_1569.z = _RESERVED_IDENTIFIER_FIXUP_721.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_729 = _RESERVED_IDENTIFIER_FIXUP_697.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_732 = _RESERVED_IDENTIFIER_FIXUP_729 * _RESERVED_IDENTIFIER_FIXUP_1569.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1575;
    _RESERVED_IDENTIFIER_FIXUP_1575.x = _RESERVED_IDENTIFIER_FIXUP_732.x;
    _RESERVED_IDENTIFIER_FIXUP_1575.y = _RESERVED_IDENTIFIER_FIXUP_732.y;
    _RESERVED_IDENTIFIER_FIXUP_1575.z = _RESERVED_IDENTIFIER_FIXUP_732.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_746 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_716.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_747 = mix(_RESERVED_IDENTIFIER_FIXUP_1575.xyz, _RESERVED_IDENTIFIER_FIXUP_729, _RESERVED_IDENTIFIER_FIXUP_746);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_697;
    _RESERVED_IDENTIFIER_FIXUP_1581.x = _RESERVED_IDENTIFIER_FIXUP_747.x;
    _RESERVED_IDENTIFIER_FIXUP_1581.y = _RESERVED_IDENTIFIER_FIXUP_747.y;
    _RESERVED_IDENTIFIER_FIXUP_1581.z = _RESERVED_IDENTIFIER_FIXUP_747.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_755 = _RESERVED_IDENTIFIER_FIXUP_701.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_758 = _RESERVED_IDENTIFIER_FIXUP_755 * _RESERVED_IDENTIFIER_FIXUP_1569.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1587;
    _RESERVED_IDENTIFIER_FIXUP_1587.x = _RESERVED_IDENTIFIER_FIXUP_758.x;
    _RESERVED_IDENTIFIER_FIXUP_1587.y = _RESERVED_IDENTIFIER_FIXUP_758.y;
    _RESERVED_IDENTIFIER_FIXUP_1587.z = _RESERVED_IDENTIFIER_FIXUP_758.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_772 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_716.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_773 = mix(_RESERVED_IDENTIFIER_FIXUP_1587.xyz, _RESERVED_IDENTIFIER_FIXUP_755, _RESERVED_IDENTIFIER_FIXUP_772);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1593 = _RESERVED_IDENTIFIER_FIXUP_701;
    _RESERVED_IDENTIFIER_FIXUP_1593.x = _RESERVED_IDENTIFIER_FIXUP_773.x;
    _RESERVED_IDENTIFIER_FIXUP_1593.y = _RESERVED_IDENTIFIER_FIXUP_773.y;
    _RESERVED_IDENTIFIER_FIXUP_1593.z = _RESERVED_IDENTIFIER_FIXUP_773.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_781 = _RESERVED_IDENTIFIER_FIXUP_705.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_784 = _RESERVED_IDENTIFIER_FIXUP_781 * _RESERVED_IDENTIFIER_FIXUP_1569.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1599;
    _RESERVED_IDENTIFIER_FIXUP_1599.x = _RESERVED_IDENTIFIER_FIXUP_784.x;
    _RESERVED_IDENTIFIER_FIXUP_1599.y = _RESERVED_IDENTIFIER_FIXUP_784.y;
    _RESERVED_IDENTIFIER_FIXUP_1599.z = _RESERVED_IDENTIFIER_FIXUP_784.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_798 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_716.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_799 = mix(_RESERVED_IDENTIFIER_FIXUP_1599.xyz, _RESERVED_IDENTIFIER_FIXUP_781, _RESERVED_IDENTIFIER_FIXUP_798);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1605 = _RESERVED_IDENTIFIER_FIXUP_705;
    _RESERVED_IDENTIFIER_FIXUP_1605.x = _RESERVED_IDENTIFIER_FIXUP_799.x;
    _RESERVED_IDENTIFIER_FIXUP_1605.y = _RESERVED_IDENTIFIER_FIXUP_799.y;
    _RESERVED_IDENTIFIER_FIXUP_1605.z = _RESERVED_IDENTIFIER_FIXUP_799.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_807 = _RESERVED_IDENTIFIER_FIXUP_709.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_810 = _RESERVED_IDENTIFIER_FIXUP_807 * _RESERVED_IDENTIFIER_FIXUP_1569.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1611 = _RESERVED_IDENTIFIER_FIXUP_716;
    _RESERVED_IDENTIFIER_FIXUP_1611.x = _RESERVED_IDENTIFIER_FIXUP_810.x;
    _RESERVED_IDENTIFIER_FIXUP_1611.y = _RESERVED_IDENTIFIER_FIXUP_810.y;
    _RESERVED_IDENTIFIER_FIXUP_1611.z = _RESERVED_IDENTIFIER_FIXUP_810.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = mix(_RESERVED_IDENTIFIER_FIXUP_1611.xyz, _RESERVED_IDENTIFIER_FIXUP_807, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1611.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1617 = _RESERVED_IDENTIFIER_FIXUP_709;
    _RESERVED_IDENTIFIER_FIXUP_1617.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1617.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1617.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_846 = mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1581, _RESERVED_IDENTIFIER_FIXUP_1593, _RESERVED_IDENTIFIER_FIXUP_713.xxxx), _RESERVED_IDENTIFIER_FIXUP_1605, _RESERVED_IDENTIFIER_FIXUP_713.yyyy), _RESERVED_IDENTIFIER_FIXUP_1617, _RESERVED_IDENTIFIER_FIXUP_713.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_853 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1928 = vec4(_RESERVED_IDENTIFIER_FIXUP_846.x, 0.0, 0.0, 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1928.y = _RESERVED_IDENTIFIER_FIXUP_846.y;
    _RESERVED_IDENTIFIER_FIXUP_1928.z = _RESERVED_IDENTIFIER_FIXUP_846.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1085 = _RESERVED_IDENTIFIER_FIXUP_1928.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1729 = _RESERVED_IDENTIFIER_FIXUP_1928;
    _RESERVED_IDENTIFIER_FIXUP_1729.x = _RESERVED_IDENTIFIER_FIXUP_1085.x;
    _RESERVED_IDENTIFIER_FIXUP_1729.y = _RESERVED_IDENTIFIER_FIXUP_1085.y;
    _RESERVED_IDENTIFIER_FIXUP_1729.z = _RESERVED_IDENTIFIER_FIXUP_1085.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1138 = OptTex0( texcoord0.xyz);
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1142 = hdTex1(param_4);
    vec2 param_5 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1146 = hdTex2(param_5);
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1150 = hdTex3(param_6);
    vec2 param_7 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1154 = hdTex4(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1162 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1743;
    _RESERVED_IDENTIFIER_FIXUP_1743.x = _RESERVED_IDENTIFIER_FIXUP_1162.x;
    _RESERVED_IDENTIFIER_FIXUP_1743.y = _RESERVED_IDENTIFIER_FIXUP_1162.y;
    _RESERVED_IDENTIFIER_FIXUP_1743.z = _RESERVED_IDENTIFIER_FIXUP_1162.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1170 = _RESERVED_IDENTIFIER_FIXUP_1138.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1173 = _RESERVED_IDENTIFIER_FIXUP_1170 * _RESERVED_IDENTIFIER_FIXUP_1743.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1749;
    _RESERVED_IDENTIFIER_FIXUP_1749.x = _RESERVED_IDENTIFIER_FIXUP_1173.x;
    _RESERVED_IDENTIFIER_FIXUP_1749.y = _RESERVED_IDENTIFIER_FIXUP_1173.y;
    _RESERVED_IDENTIFIER_FIXUP_1749.z = _RESERVED_IDENTIFIER_FIXUP_1173.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1188 = mix(_RESERVED_IDENTIFIER_FIXUP_1749.xyz, _RESERVED_IDENTIFIER_FIXUP_1170, _RESERVED_IDENTIFIER_FIXUP_746);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1755 = _RESERVED_IDENTIFIER_FIXUP_1138;
    _RESERVED_IDENTIFIER_FIXUP_1755.x = _RESERVED_IDENTIFIER_FIXUP_1188.x;
    _RESERVED_IDENTIFIER_FIXUP_1755.y = _RESERVED_IDENTIFIER_FIXUP_1188.y;
    _RESERVED_IDENTIFIER_FIXUP_1755.z = _RESERVED_IDENTIFIER_FIXUP_1188.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1196 = _RESERVED_IDENTIFIER_FIXUP_1142.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = _RESERVED_IDENTIFIER_FIXUP_1196 * _RESERVED_IDENTIFIER_FIXUP_1743.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1761;
    _RESERVED_IDENTIFIER_FIXUP_1761.x = _RESERVED_IDENTIFIER_FIXUP_1199.x;
    _RESERVED_IDENTIFIER_FIXUP_1761.y = _RESERVED_IDENTIFIER_FIXUP_1199.y;
    _RESERVED_IDENTIFIER_FIXUP_1761.z = _RESERVED_IDENTIFIER_FIXUP_1199.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1214 = mix(_RESERVED_IDENTIFIER_FIXUP_1761.xyz, _RESERVED_IDENTIFIER_FIXUP_1196, _RESERVED_IDENTIFIER_FIXUP_772);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1767 = _RESERVED_IDENTIFIER_FIXUP_1142;
    _RESERVED_IDENTIFIER_FIXUP_1767.x = _RESERVED_IDENTIFIER_FIXUP_1214.x;
    _RESERVED_IDENTIFIER_FIXUP_1767.y = _RESERVED_IDENTIFIER_FIXUP_1214.y;
    _RESERVED_IDENTIFIER_FIXUP_1767.z = _RESERVED_IDENTIFIER_FIXUP_1214.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1146.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_1222 * _RESERVED_IDENTIFIER_FIXUP_1743.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1773;
    _RESERVED_IDENTIFIER_FIXUP_1773.x = _RESERVED_IDENTIFIER_FIXUP_1225.x;
    _RESERVED_IDENTIFIER_FIXUP_1773.y = _RESERVED_IDENTIFIER_FIXUP_1225.y;
    _RESERVED_IDENTIFIER_FIXUP_1773.z = _RESERVED_IDENTIFIER_FIXUP_1225.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1240 = mix(_RESERVED_IDENTIFIER_FIXUP_1773.xyz, _RESERVED_IDENTIFIER_FIXUP_1222, _RESERVED_IDENTIFIER_FIXUP_798);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1779 = _RESERVED_IDENTIFIER_FIXUP_1146;
    _RESERVED_IDENTIFIER_FIXUP_1779.x = _RESERVED_IDENTIFIER_FIXUP_1240.x;
    _RESERVED_IDENTIFIER_FIXUP_1779.y = _RESERVED_IDENTIFIER_FIXUP_1240.y;
    _RESERVED_IDENTIFIER_FIXUP_1779.z = _RESERVED_IDENTIFIER_FIXUP_1240.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1248 = _RESERVED_IDENTIFIER_FIXUP_1150.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1251 = _RESERVED_IDENTIFIER_FIXUP_1248 * _RESERVED_IDENTIFIER_FIXUP_1743.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1785 = _RESERVED_IDENTIFIER_FIXUP_716;
    _RESERVED_IDENTIFIER_FIXUP_1785.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
    _RESERVED_IDENTIFIER_FIXUP_1785.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
    _RESERVED_IDENTIFIER_FIXUP_1785.z = _RESERVED_IDENTIFIER_FIXUP_1251.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1266 = mix(_RESERVED_IDENTIFIER_FIXUP_1785.xyz, _RESERVED_IDENTIFIER_FIXUP_1248, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1785.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1791 = _RESERVED_IDENTIFIER_FIXUP_1150;
    _RESERVED_IDENTIFIER_FIXUP_1791.x = _RESERVED_IDENTIFIER_FIXUP_1266.x;
    _RESERVED_IDENTIFIER_FIXUP_1791.y = _RESERVED_IDENTIFIER_FIXUP_1266.y;
    _RESERVED_IDENTIFIER_FIXUP_1791.z = _RESERVED_IDENTIFIER_FIXUP_1266.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1282 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1755, _RESERVED_IDENTIFIER_FIXUP_1767, _RESERVED_IDENTIFIER_FIXUP_1154.xxxx), _RESERVED_IDENTIFIER_FIXUP_1779, _RESERVED_IDENTIFIER_FIXUP_1154.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287 = mix(_RESERVED_IDENTIFIER_FIXUP_1282, _RESERVED_IDENTIFIER_FIXUP_1791, _RESERVED_IDENTIFIER_FIXUP_1154.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1799 = _RESERVED_IDENTIFIER_FIXUP_1282;
    _RESERVED_IDENTIFIER_FIXUP_1799.x = _RESERVED_IDENTIFIER_FIXUP_853;
    float _RESERVED_IDENTIFIER_FIXUP_1300 = clamp((_RESERVED_IDENTIFIER_FIXUP_853 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1799.x = _RESERVED_IDENTIFIER_FIXUP_1300;
    float _RESERVED_IDENTIFIER_FIXUP_1306 = ((-_RESERVED_IDENTIFIER_FIXUP_1300) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1799.y = _RESERVED_IDENTIFIER_FIXUP_1306;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1923;
    if (_RESERVED_IDENTIFIER_FIXUP_1306 != (-_RESERVED_IDENTIFIER_FIXUP_1306))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1318 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1328 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_1328.x;
        _RESERVED_IDENTIFIER_FIXUP_1799.y = _RESERVED_IDENTIFIER_FIXUP_1330;
        _RESERVED_IDENTIFIER_FIXUP_1799.z = _RESERVED_IDENTIFIER_FIXUP_1328.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_1799.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1817;
        _RESERVED_IDENTIFIER_FIXUP_1817.x = _RESERVED_IDENTIFIER_FIXUP_1338.x;
        _RESERVED_IDENTIFIER_FIXUP_1817.y = _RESERVED_IDENTIFIER_FIXUP_1338.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1345 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1349 = _RESERVED_IDENTIFIER_FIXUP_1345.y;
        _RESERVED_IDENTIFIER_FIXUP_1817.w = _RESERVED_IDENTIFIER_FIXUP_1349;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1318.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1318.w;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1817.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1349;
        float _RESERVED_IDENTIFIER_FIXUP_1360 = hdLod5(param_8, param_9).x + hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1930 = vec4(_RESERVED_IDENTIFIER_FIXUP_1300, _RESERVED_IDENTIFIER_FIXUP_1330, _RESERVED_IDENTIFIER_FIXUP_1328.y, _RESERVED_IDENTIFIER_FIXUP_1360);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_1930.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1830;
        _RESERVED_IDENTIFIER_FIXUP_1830.x = _RESERVED_IDENTIFIER_FIXUP_1367.x;
        _RESERVED_IDENTIFIER_FIXUP_1830.y = _RESERVED_IDENTIFIER_FIXUP_1367.y;
        _RESERVED_IDENTIFIER_FIXUP_1830.w = _RESERVED_IDENTIFIER_FIXUP_1349;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1830.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1349;
        float _RESERVED_IDENTIFIER_FIXUP_1389 = _RESERVED_IDENTIFIER_FIXUP_1360 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_1930.w = _RESERVED_IDENTIFIER_FIXUP_1389;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1396 = _RESERVED_IDENTIFIER_FIXUP_1930.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1843;
        _RESERVED_IDENTIFIER_FIXUP_1843.x = _RESERVED_IDENTIFIER_FIXUP_1396.x;
        _RESERVED_IDENTIFIER_FIXUP_1843.y = _RESERVED_IDENTIFIER_FIXUP_1396.y;
        _RESERVED_IDENTIFIER_FIXUP_1843.w = _RESERVED_IDENTIFIER_FIXUP_1349;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1843.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1349;
        float _RESERVED_IDENTIFIER_FIXUP_1418 = _RESERVED_IDENTIFIER_FIXUP_1389 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_1930.w = _RESERVED_IDENTIFIER_FIXUP_1418;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1425 = _RESERVED_IDENTIFIER_FIXUP_1930.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1856;
        _RESERVED_IDENTIFIER_FIXUP_1856.x = _RESERVED_IDENTIFIER_FIXUP_1425.x;
        _RESERVED_IDENTIFIER_FIXUP_1856.y = _RESERVED_IDENTIFIER_FIXUP_1425.y;
        _RESERVED_IDENTIFIER_FIXUP_1856.w = _RESERVED_IDENTIFIER_FIXUP_1349;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1856.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1349;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1442 = hdLod5(param_16, param_17);
        _RESERVED_IDENTIFIER_FIXUP_1442.x = min((_RESERVED_IDENTIFIER_FIXUP_1300 * (((_RESERVED_IDENTIFIER_FIXUP_1418 + _RESERVED_IDENTIFIER_FIXUP_1442.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1154.w);
        _RESERVED_IDENTIFIER_FIXUP_1923 = _RESERVED_IDENTIFIER_FIXUP_1442;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1810 = _RESERVED_IDENTIFIER_FIXUP_1779;
        _RESERVED_IDENTIFIER_FIXUP_1810.x = _RESERVED_IDENTIFIER_FIXUP_1154.w;
        _RESERVED_IDENTIFIER_FIXUP_1923 = _RESERVED_IDENTIFIER_FIXUP_1810;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1475 = (_RESERVED_IDENTIFIER_FIXUP_1923.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1931 = vec4(_RESERVED_IDENTIFIER_FIXUP_1475, _RESERVED_IDENTIFIER_FIXUP_1287.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_1923.xxx * _RESERVED_IDENTIFIER_FIXUP_1931.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1501 = _RESERVED_IDENTIFIER_FIXUP_1499.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1893 = _RESERVED_IDENTIFIER_FIXUP_1931;
    _RESERVED_IDENTIFIER_FIXUP_1893.y = _RESERVED_IDENTIFIER_FIXUP_1501;
    _RESERVED_IDENTIFIER_FIXUP_1893.z = _RESERVED_IDENTIFIER_FIXUP_1499.y;
    _RESERVED_IDENTIFIER_FIXUP_1893.w = _RESERVED_IDENTIFIER_FIXUP_1499.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1513 = (_RESERVED_IDENTIFIER_FIXUP_1287.xyz * _RESERVED_IDENTIFIER_FIXUP_1893.xxx) + _RESERVED_IDENTIFIER_FIXUP_1893.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1932 = vec4(_RESERVED_IDENTIFIER_FIXUP_1513.x, _RESERVED_IDENTIFIER_FIXUP_1501, _RESERVED_IDENTIFIER_FIXUP_1499.yz);
    _RESERVED_IDENTIFIER_FIXUP_1932.y = _RESERVED_IDENTIFIER_FIXUP_1513.y;
    _RESERVED_IDENTIFIER_FIXUP_1932.z = _RESERVED_IDENTIFIER_FIXUP_1513.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_1932.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1905 = _RESERVED_IDENTIFIER_FIXUP_1932;
    _RESERVED_IDENTIFIER_FIXUP_1905.x = _RESERVED_IDENTIFIER_FIXUP_1526.x;
    _RESERVED_IDENTIFIER_FIXUP_1905.y = _RESERVED_IDENTIFIER_FIXUP_1526.y;
    _RESERVED_IDENTIFIER_FIXUP_1905.z = _RESERVED_IDENTIFIER_FIXUP_1526.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1905.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_559 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_568;
    if (_RESERVED_IDENTIFIER_FIXUP_559)
    {
        _RESERVED_IDENTIFIER_FIXUP_568 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_568 = _RESERVED_IDENTIFIER_FIXUP_559;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_568)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_605 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1729.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_631 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1561;
    if (_RESERVED_IDENTIFIER_FIXUP_605 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1561 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_605), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_631);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1561 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_631);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1561;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1475);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    vec2 param_3 = v4.wz;
    r4 = hdTex4(param_3);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 hdB97 = v0.xyz + v0.xyz;
    r6.x = hdB97.x;
    r6.y = hdB97.y;
    r6.z = hdB97.z;
    vec3 hdB112 = r0.xyz * r6.xyz;
    r7.x = hdB112.x;
    r7.y = hdB112.y;
    r7.z = hdB112.z;
    vec4 hdB121 = r0;
    vec3 hdB130 = mix(r7.xyz, hdB121.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB130.x;
    r0.y = hdB130.y;
    r0.z = hdB130.z;
    vec3 hdB141 = r1.xyz * r6.xyz;
    r7.x = hdB141.x;
    r7.y = hdB141.y;
    r7.z = hdB141.z;
    vec4 hdB150 = r1;
    vec3 hdB156 = mix(r7.xyz, hdB150.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB156.x;
    r1.y = hdB156.y;
    r1.z = hdB156.z;
    vec3 hdB167 = r2.xyz * r6.xyz;
    r7.x = hdB167.x;
    r7.y = hdB167.y;
    r7.z = hdB167.z;
    vec4 hdB176 = r2;
    vec3 hdB182 = mix(r7.xyz, hdB176.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB182.x;
    r2.y = hdB182.y;
    r2.z = hdB182.z;
    vec3 hdB193 = r3.xyz * r6.xyz;
    r5.x = hdB193.x;
    r5.y = hdB193.y;
    r5.z = hdB193.z;
    vec4 hdB202 = r3;
    vec3 hdB208 = mix(r5.xyz, hdB202.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB208.x;
    r3.y = hdB208.y;
    r3.z = hdB208.z;
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB280 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB280.x;
        r0.z = hdB280.y;
        vec2 hdB291 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB291.x;
        r3.y = hdB291.y;
        vec2 hdB299 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB299.x;
        r3.w = hdB299.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r0.w = r2.x + r3.x;
        vec2 hdB322 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB322.x;
        r2.y = hdB322.y;
        vec2 hdB329 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB329.x;
        r2.w = hdB329.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r0.w += r2.x;
        vec2 hdB352 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB352.x;
        r2.y = hdB352.y;
        vec2 hdB359 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB359.x;
        r2.w = hdB359.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r0.w += r2.x;
        vec2 hdB382 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB382.x;
        r2.y = hdB382.y;
        vec2 hdB389 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB389.x;
        r2.w = hdB389.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
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
    vec3 hdB441 = r1.www * v1.xyz;
    r0.y = hdB441.x;
    r0.z = hdB441.y;
    r0.w = hdB441.z;
    vec4 hdB450 = r0;
    vec3 hdB452 = r2.xxx * hdB450.yzw;
    r0.y = hdB452.x;
    r0.z = hdB452.y;
    r0.w = hdB452.z;
    vec4 hdB461 = r0;
    vec4 hdB464 = r0;
    vec3 hdB466 = (r1.xyz * hdB461.xxx) + hdB464.yzw;
    r0.x = hdB466.x;
    r0.y = hdB466.y;
    r0.z = hdB466.z;
    vec4 hdB473 = r0;
    vec3 hdB480 = hdB473.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB480.x;
    r0.y = hdB480.y;
    r0.z = hdB480.z;
    vec3 hdB495 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB495.x;
    oC0.y = hdB495.y;
    oC0.z = hdB495.z;
    oC0.w = 1.0;
    bool hdB507 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB515;
    if (hdB507)
    {
        hdB515 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB515 = hdB507;
    }
    if (hdB515)
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
    bool _1668 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1678;
    if (_1668)
    {
        _1678 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1678 = _1668;
    }
    if (_1678)
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
        bool _1703 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1718;
        if (!_1703)
        {
            _1718 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1718 = _1703;
        }
        if (_1718)
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
