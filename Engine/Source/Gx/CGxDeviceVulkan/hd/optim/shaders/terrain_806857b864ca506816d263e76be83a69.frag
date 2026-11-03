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
float _RESERVED_IDENTIFIER_FIXUP_1997;
vec4 _RESERVED_IDENTIFIER_FIXUP_1998;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_717 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_721 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_725 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_729 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_733 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_736 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_738 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1997).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_741 = _RESERVED_IDENTIFIER_FIXUP_738 + _RESERVED_IDENTIFIER_FIXUP_738;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1626 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1626.x = _RESERVED_IDENTIFIER_FIXUP_741.x;
    _RESERVED_IDENTIFIER_FIXUP_1626.y = _RESERVED_IDENTIFIER_FIXUP_741.y;
    _RESERVED_IDENTIFIER_FIXUP_1626.z = _RESERVED_IDENTIFIER_FIXUP_741.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_749 = _RESERVED_IDENTIFIER_FIXUP_717.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_752 = _RESERVED_IDENTIFIER_FIXUP_749 * _RESERVED_IDENTIFIER_FIXUP_1626.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1632;
    _RESERVED_IDENTIFIER_FIXUP_1632.x = _RESERVED_IDENTIFIER_FIXUP_752.x;
    _RESERVED_IDENTIFIER_FIXUP_1632.y = _RESERVED_IDENTIFIER_FIXUP_752.y;
    _RESERVED_IDENTIFIER_FIXUP_1632.z = _RESERVED_IDENTIFIER_FIXUP_752.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_766 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_736.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_767 = mix(_RESERVED_IDENTIFIER_FIXUP_1632.xyz, _RESERVED_IDENTIFIER_FIXUP_749, _RESERVED_IDENTIFIER_FIXUP_766);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1638 = _RESERVED_IDENTIFIER_FIXUP_717;
    _RESERVED_IDENTIFIER_FIXUP_1638.x = _RESERVED_IDENTIFIER_FIXUP_767.x;
    _RESERVED_IDENTIFIER_FIXUP_1638.y = _RESERVED_IDENTIFIER_FIXUP_767.y;
    _RESERVED_IDENTIFIER_FIXUP_1638.z = _RESERVED_IDENTIFIER_FIXUP_767.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = _RESERVED_IDENTIFIER_FIXUP_721.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_778 = _RESERVED_IDENTIFIER_FIXUP_775 * _RESERVED_IDENTIFIER_FIXUP_1626.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1644;
    _RESERVED_IDENTIFIER_FIXUP_1644.x = _RESERVED_IDENTIFIER_FIXUP_778.x;
    _RESERVED_IDENTIFIER_FIXUP_1644.y = _RESERVED_IDENTIFIER_FIXUP_778.y;
    _RESERVED_IDENTIFIER_FIXUP_1644.z = _RESERVED_IDENTIFIER_FIXUP_778.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_792 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_736.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_793 = mix(_RESERVED_IDENTIFIER_FIXUP_1644.xyz, _RESERVED_IDENTIFIER_FIXUP_775, _RESERVED_IDENTIFIER_FIXUP_792);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1650 = _RESERVED_IDENTIFIER_FIXUP_721;
    _RESERVED_IDENTIFIER_FIXUP_1650.x = _RESERVED_IDENTIFIER_FIXUP_793.x;
    _RESERVED_IDENTIFIER_FIXUP_1650.y = _RESERVED_IDENTIFIER_FIXUP_793.y;
    _RESERVED_IDENTIFIER_FIXUP_1650.z = _RESERVED_IDENTIFIER_FIXUP_793.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_801 = _RESERVED_IDENTIFIER_FIXUP_725.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_804 = _RESERVED_IDENTIFIER_FIXUP_801 * _RESERVED_IDENTIFIER_FIXUP_1626.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1656;
    _RESERVED_IDENTIFIER_FIXUP_1656.x = _RESERVED_IDENTIFIER_FIXUP_804.x;
    _RESERVED_IDENTIFIER_FIXUP_1656.y = _RESERVED_IDENTIFIER_FIXUP_804.y;
    _RESERVED_IDENTIFIER_FIXUP_1656.z = _RESERVED_IDENTIFIER_FIXUP_804.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_818 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_736.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_819 = mix(_RESERVED_IDENTIFIER_FIXUP_1656.xyz, _RESERVED_IDENTIFIER_FIXUP_801, _RESERVED_IDENTIFIER_FIXUP_818);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1662 = _RESERVED_IDENTIFIER_FIXUP_725;
    _RESERVED_IDENTIFIER_FIXUP_1662.x = _RESERVED_IDENTIFIER_FIXUP_819.x;
    _RESERVED_IDENTIFIER_FIXUP_1662.y = _RESERVED_IDENTIFIER_FIXUP_819.y;
    _RESERVED_IDENTIFIER_FIXUP_1662.z = _RESERVED_IDENTIFIER_FIXUP_819.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_827 = _RESERVED_IDENTIFIER_FIXUP_729.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_830 = _RESERVED_IDENTIFIER_FIXUP_827 * _RESERVED_IDENTIFIER_FIXUP_1626.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_736;
    _RESERVED_IDENTIFIER_FIXUP_1668.x = _RESERVED_IDENTIFIER_FIXUP_830.x;
    _RESERVED_IDENTIFIER_FIXUP_1668.y = _RESERVED_IDENTIFIER_FIXUP_830.y;
    _RESERVED_IDENTIFIER_FIXUP_1668.z = _RESERVED_IDENTIFIER_FIXUP_830.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_845 = mix(_RESERVED_IDENTIFIER_FIXUP_1668.xyz, _RESERVED_IDENTIFIER_FIXUP_827, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1668.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1674 = _RESERVED_IDENTIFIER_FIXUP_729;
    _RESERVED_IDENTIFIER_FIXUP_1674.x = _RESERVED_IDENTIFIER_FIXUP_845.x;
    _RESERVED_IDENTIFIER_FIXUP_1674.y = _RESERVED_IDENTIFIER_FIXUP_845.y;
    _RESERVED_IDENTIFIER_FIXUP_1674.z = _RESERVED_IDENTIFIER_FIXUP_845.z;
    float _RESERVED_IDENTIFIER_FIXUP_855 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_733.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1668.x = _RESERVED_IDENTIFIER_FIXUP_855;
    _RESERVED_IDENTIFIER_FIXUP_1668.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_855;
    vec4 _RESERVED_IDENTIFIER_FIXUP_883 = (_RESERVED_IDENTIFIER_FIXUP_1674 * _RESERVED_IDENTIFIER_FIXUP_733.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1662 * _RESERVED_IDENTIFIER_FIXUP_733.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1638 * _RESERVED_IDENTIFIER_FIXUP_1668.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_733.xxxx * _RESERVED_IDENTIFIER_FIXUP_1650)));
    float _RESERVED_IDENTIFIER_FIXUP_890 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1791 = _RESERVED_IDENTIFIER_FIXUP_883;
    _RESERVED_IDENTIFIER_FIXUP_1791.x = _RESERVED_IDENTIFIER_FIXUP_883.x;
    _RESERVED_IDENTIFIER_FIXUP_1791.y = _RESERVED_IDENTIFIER_FIXUP_883.y;
    _RESERVED_IDENTIFIER_FIXUP_1791.z = _RESERVED_IDENTIFIER_FIXUP_883.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1124 = _RESERVED_IDENTIFIER_FIXUP_1791.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_1791;
    _RESERVED_IDENTIFIER_FIXUP_1797.x = _RESERVED_IDENTIFIER_FIXUP_1124.x;
    _RESERVED_IDENTIFIER_FIXUP_1797.y = _RESERVED_IDENTIFIER_FIXUP_1124.y;
    _RESERVED_IDENTIFIER_FIXUP_1797.z = _RESERVED_IDENTIFIER_FIXUP_1124.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1177 = OptTex0( texcoord0.xyz);
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = hdTex1(param_4);
    vec2 param_5 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1185 = hdTex2(param_5);
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1189 = hdTex3(param_6);
    vec2 param_7 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193 = hdTex4(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1201 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1811 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1811.x = _RESERVED_IDENTIFIER_FIXUP_1201.x;
    _RESERVED_IDENTIFIER_FIXUP_1811.y = _RESERVED_IDENTIFIER_FIXUP_1201.y;
    _RESERVED_IDENTIFIER_FIXUP_1811.z = _RESERVED_IDENTIFIER_FIXUP_1201.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_1177.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1212 = _RESERVED_IDENTIFIER_FIXUP_1209 * _RESERVED_IDENTIFIER_FIXUP_1811.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1817;
    _RESERVED_IDENTIFIER_FIXUP_1817.x = _RESERVED_IDENTIFIER_FIXUP_1212.x;
    _RESERVED_IDENTIFIER_FIXUP_1817.y = _RESERVED_IDENTIFIER_FIXUP_1212.y;
    _RESERVED_IDENTIFIER_FIXUP_1817.z = _RESERVED_IDENTIFIER_FIXUP_1212.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1227 = mix(_RESERVED_IDENTIFIER_FIXUP_1817.xyz, _RESERVED_IDENTIFIER_FIXUP_1209, _RESERVED_IDENTIFIER_FIXUP_766);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1823 = _RESERVED_IDENTIFIER_FIXUP_1177;
    _RESERVED_IDENTIFIER_FIXUP_1823.x = _RESERVED_IDENTIFIER_FIXUP_1227.x;
    _RESERVED_IDENTIFIER_FIXUP_1823.y = _RESERVED_IDENTIFIER_FIXUP_1227.y;
    _RESERVED_IDENTIFIER_FIXUP_1823.z = _RESERVED_IDENTIFIER_FIXUP_1227.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_1181.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_1235 * _RESERVED_IDENTIFIER_FIXUP_1811.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1829;
    _RESERVED_IDENTIFIER_FIXUP_1829.x = _RESERVED_IDENTIFIER_FIXUP_1238.x;
    _RESERVED_IDENTIFIER_FIXUP_1829.y = _RESERVED_IDENTIFIER_FIXUP_1238.y;
    _RESERVED_IDENTIFIER_FIXUP_1829.z = _RESERVED_IDENTIFIER_FIXUP_1238.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1253 = mix(_RESERVED_IDENTIFIER_FIXUP_1829.xyz, _RESERVED_IDENTIFIER_FIXUP_1235, _RESERVED_IDENTIFIER_FIXUP_792);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1835 = _RESERVED_IDENTIFIER_FIXUP_1181;
    _RESERVED_IDENTIFIER_FIXUP_1835.x = _RESERVED_IDENTIFIER_FIXUP_1253.x;
    _RESERVED_IDENTIFIER_FIXUP_1835.y = _RESERVED_IDENTIFIER_FIXUP_1253.y;
    _RESERVED_IDENTIFIER_FIXUP_1835.z = _RESERVED_IDENTIFIER_FIXUP_1253.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_1185.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_1261 * _RESERVED_IDENTIFIER_FIXUP_1811.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1841;
    _RESERVED_IDENTIFIER_FIXUP_1841.x = _RESERVED_IDENTIFIER_FIXUP_1264.x;
    _RESERVED_IDENTIFIER_FIXUP_1841.y = _RESERVED_IDENTIFIER_FIXUP_1264.y;
    _RESERVED_IDENTIFIER_FIXUP_1841.z = _RESERVED_IDENTIFIER_FIXUP_1264.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1279 = mix(_RESERVED_IDENTIFIER_FIXUP_1841.xyz, _RESERVED_IDENTIFIER_FIXUP_1261, _RESERVED_IDENTIFIER_FIXUP_818);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1847 = _RESERVED_IDENTIFIER_FIXUP_1185;
    _RESERVED_IDENTIFIER_FIXUP_1847.x = _RESERVED_IDENTIFIER_FIXUP_1279.x;
    _RESERVED_IDENTIFIER_FIXUP_1847.y = _RESERVED_IDENTIFIER_FIXUP_1279.y;
    _RESERVED_IDENTIFIER_FIXUP_1847.z = _RESERVED_IDENTIFIER_FIXUP_1279.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_1189.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1290 = _RESERVED_IDENTIFIER_FIXUP_1287 * _RESERVED_IDENTIFIER_FIXUP_1811.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1853 = _RESERVED_IDENTIFIER_FIXUP_736;
    _RESERVED_IDENTIFIER_FIXUP_1853.x = _RESERVED_IDENTIFIER_FIXUP_1290.x;
    _RESERVED_IDENTIFIER_FIXUP_1853.y = _RESERVED_IDENTIFIER_FIXUP_1290.y;
    _RESERVED_IDENTIFIER_FIXUP_1853.z = _RESERVED_IDENTIFIER_FIXUP_1290.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1305 = mix(_RESERVED_IDENTIFIER_FIXUP_1853.xyz, _RESERVED_IDENTIFIER_FIXUP_1287, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1853.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1859 = _RESERVED_IDENTIFIER_FIXUP_1189;
    _RESERVED_IDENTIFIER_FIXUP_1859.x = _RESERVED_IDENTIFIER_FIXUP_1305.x;
    _RESERVED_IDENTIFIER_FIXUP_1859.y = _RESERVED_IDENTIFIER_FIXUP_1305.y;
    _RESERVED_IDENTIFIER_FIXUP_1859.z = _RESERVED_IDENTIFIER_FIXUP_1305.z;
    float _RESERVED_IDENTIFIER_FIXUP_1315 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1193.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1853.x = _RESERVED_IDENTIFIER_FIXUP_1315;
    _RESERVED_IDENTIFIER_FIXUP_1853.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1315;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1325 = _RESERVED_IDENTIFIER_FIXUP_1193.xxxx * _RESERVED_IDENTIFIER_FIXUP_1835;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1343 = (_RESERVED_IDENTIFIER_FIXUP_1859 * _RESERVED_IDENTIFIER_FIXUP_1193.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1847 * _RESERVED_IDENTIFIER_FIXUP_1193.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1823 * _RESERVED_IDENTIFIER_FIXUP_1853.xxxx) + _RESERVED_IDENTIFIER_FIXUP_1325));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1872 = _RESERVED_IDENTIFIER_FIXUP_1325;
    _RESERVED_IDENTIFIER_FIXUP_1872.x = _RESERVED_IDENTIFIER_FIXUP_890;
    float _RESERVED_IDENTIFIER_FIXUP_1356 = clamp((_RESERVED_IDENTIFIER_FIXUP_890 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1872.x = _RESERVED_IDENTIFIER_FIXUP_1356;
    float _RESERVED_IDENTIFIER_FIXUP_1362 = ((-_RESERVED_IDENTIFIER_FIXUP_1356) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1872.y = _RESERVED_IDENTIFIER_FIXUP_1362;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2003;
    if (_RESERVED_IDENTIFIER_FIXUP_1362 != (-_RESERVED_IDENTIFIER_FIXUP_1362))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1374 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1872.y = _RESERVED_IDENTIFIER_FIXUP_1374.x;
        _RESERVED_IDENTIFIER_FIXUP_1872.z = _RESERVED_IDENTIFIER_FIXUP_1374.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_1872.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1889;
        _RESERVED_IDENTIFIER_FIXUP_1889.x = _RESERVED_IDENTIFIER_FIXUP_1384.x;
        _RESERVED_IDENTIFIER_FIXUP_1889.y = _RESERVED_IDENTIFIER_FIXUP_1384.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1394 = _RESERVED_IDENTIFIER_FIXUP_1872.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1893;
        _RESERVED_IDENTIFIER_FIXUP_1893.x = _RESERVED_IDENTIFIER_FIXUP_1394.x;
        _RESERVED_IDENTIFIER_FIXUP_1893.y = _RESERVED_IDENTIFIER_FIXUP_1394.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1404 = _RESERVED_IDENTIFIER_FIXUP_1872.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1897;
        _RESERVED_IDENTIFIER_FIXUP_1897.x = _RESERVED_IDENTIFIER_FIXUP_1404.x;
        _RESERVED_IDENTIFIER_FIXUP_1897.y = _RESERVED_IDENTIFIER_FIXUP_1404.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1414 = _RESERVED_IDENTIFIER_FIXUP_1872.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1901;
        _RESERVED_IDENTIFIER_FIXUP_1901.x = _RESERVED_IDENTIFIER_FIXUP_1414.x;
        _RESERVED_IDENTIFIER_FIXUP_1901.y = _RESERVED_IDENTIFIER_FIXUP_1414.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1422 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1422.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1422.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1428 = hdLod5(param_8, param_9);
        _RESERVED_IDENTIFIER_FIXUP_1889.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1893.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1897.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1901.w = 0.0;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1889.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1428.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1893.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1428.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1897.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1428.w = hdLod5(param_14, param_15).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1485 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1428 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1901.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1485.x = min((_RESERVED_IDENTIFIER_FIXUP_1356 * (((float((hdLod5(param_16, param_17).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1485, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1193.w);
        _RESERVED_IDENTIFIER_FIXUP_2003 = _RESERVED_IDENTIFIER_FIXUP_1485;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1883 = _RESERVED_IDENTIFIER_FIXUP_1847;
        _RESERVED_IDENTIFIER_FIXUP_1883.x = _RESERVED_IDENTIFIER_FIXUP_1193.w;
        _RESERVED_IDENTIFIER_FIXUP_2003 = _RESERVED_IDENTIFIER_FIXUP_1883;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1533 = (_RESERVED_IDENTIFIER_FIXUP_2003.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2009 = vec4(_RESERVED_IDENTIFIER_FIXUP_1533, _RESERVED_IDENTIFIER_FIXUP_1343.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1557 = _RESERVED_IDENTIFIER_FIXUP_2003.xxx * _RESERVED_IDENTIFIER_FIXUP_2009.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1972 = _RESERVED_IDENTIFIER_FIXUP_2009;
    _RESERVED_IDENTIFIER_FIXUP_1972.y = _RESERVED_IDENTIFIER_FIXUP_1557.x;
    _RESERVED_IDENTIFIER_FIXUP_1972.z = _RESERVED_IDENTIFIER_FIXUP_1557.y;
    _RESERVED_IDENTIFIER_FIXUP_1972.w = _RESERVED_IDENTIFIER_FIXUP_1557.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1571 = (_RESERVED_IDENTIFIER_FIXUP_1343.xyz * _RESERVED_IDENTIFIER_FIXUP_1972.xxx) + _RESERVED_IDENTIFIER_FIXUP_1972.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1978 = _RESERVED_IDENTIFIER_FIXUP_1343;
    _RESERVED_IDENTIFIER_FIXUP_1978.x = _RESERVED_IDENTIFIER_FIXUP_1571.x;
    _RESERVED_IDENTIFIER_FIXUP_1978.y = _RESERVED_IDENTIFIER_FIXUP_1571.y;
    _RESERVED_IDENTIFIER_FIXUP_1978.z = _RESERVED_IDENTIFIER_FIXUP_1571.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1584 = _RESERVED_IDENTIFIER_FIXUP_1978.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1984 = _RESERVED_IDENTIFIER_FIXUP_1978;
    _RESERVED_IDENTIFIER_FIXUP_1984.x = _RESERVED_IDENTIFIER_FIXUP_1584.x;
    _RESERVED_IDENTIFIER_FIXUP_1984.y = _RESERVED_IDENTIFIER_FIXUP_1584.y;
    _RESERVED_IDENTIFIER_FIXUP_1984.z = _RESERVED_IDENTIFIER_FIXUP_1584.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1984.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_580 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_589;
    if (_RESERVED_IDENTIFIER_FIXUP_580)
    {
        _RESERVED_IDENTIFIER_FIXUP_589 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_589 = _RESERVED_IDENTIFIER_FIXUP_580;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_589)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_626 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1797.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_652 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1619;
    if (_RESERVED_IDENTIFIER_FIXUP_626 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1619 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_626), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_652);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1619 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_652);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1619;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1533);
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
        vec2 hdB284 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB284.x;
        r1.z = hdB284.y;
        vec2 hdB295 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB295.x;
        r2.y = hdB295.y;
        vec2 hdB306 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB306.x;
        r3.y = hdB306.y;
        vec2 hdB317 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB317.x;
        r5.y = hdB317.y;
        vec2 hdB328 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB328.x;
        r6.y = hdB328.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r7.xy;
        float param_5 = r7.w;
        r7 = hdLod5(param_4, param_5);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_10 = r5.xy;
        float param_11 = r5.w;
        r5 = hdLod5(param_10, param_11);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod5(param_12, param_13);
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
    vec3 hdB462 = r0.www * v1.xyz;
    r1.y = hdB462.x;
    r1.z = hdB462.y;
    r1.w = hdB462.z;
    vec4 hdB471 = r1;
    vec3 hdB473 = r2.xxx * hdB471.yzw;
    r1.y = hdB473.x;
    r1.z = hdB473.y;
    r1.w = hdB473.z;
    vec4 hdB480 = r0;
    vec3 hdB487 = (hdB480.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB487.x;
    r0.y = hdB487.y;
    r0.z = hdB487.z;
    vec4 hdB494 = r0;
    vec3 hdB501 = hdB494.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB501.x;
    r0.y = hdB501.y;
    r0.z = hdB501.z;
    vec3 hdB516 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB516.x;
    oC0.y = hdB516.y;
    oC0.z = hdB516.z;
    oC0.w = 1.0;
    bool hdB528 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB536;
    if (hdB528)
    {
        hdB536 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB536 = hdB528;
    }
    if (hdB536)
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
    bool _1671 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1681;
    if (_1671)
    {
        _1681 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1681 = _1671;
    }
    if (_1681)
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
        bool _1706 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1721;
        if (!_1706)
        {
            _1721 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1721 = _1706;
        }
        if (_1721)
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
