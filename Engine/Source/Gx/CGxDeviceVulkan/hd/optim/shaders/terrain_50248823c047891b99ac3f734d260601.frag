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
float _RESERVED_IDENTIFIER_FIXUP_1936;
vec4 _RESERVED_IDENTIFIER_FIXUP_1937;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_699 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_703 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_707 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_711 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_715 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_718 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_720 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1936).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_723 = _RESERVED_IDENTIFIER_FIXUP_720 + _RESERVED_IDENTIFIER_FIXUP_720;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1575 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1575.x = _RESERVED_IDENTIFIER_FIXUP_723.x;
    _RESERVED_IDENTIFIER_FIXUP_1575.y = _RESERVED_IDENTIFIER_FIXUP_723.y;
    _RESERVED_IDENTIFIER_FIXUP_1575.z = _RESERVED_IDENTIFIER_FIXUP_723.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_731 = _RESERVED_IDENTIFIER_FIXUP_699.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_734 = _RESERVED_IDENTIFIER_FIXUP_731 * _RESERVED_IDENTIFIER_FIXUP_1575.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1581;
    _RESERVED_IDENTIFIER_FIXUP_1581.x = _RESERVED_IDENTIFIER_FIXUP_734.x;
    _RESERVED_IDENTIFIER_FIXUP_1581.y = _RESERVED_IDENTIFIER_FIXUP_734.y;
    _RESERVED_IDENTIFIER_FIXUP_1581.z = _RESERVED_IDENTIFIER_FIXUP_734.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_748 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_718.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_749 = mix(_RESERVED_IDENTIFIER_FIXUP_1581.xyz, _RESERVED_IDENTIFIER_FIXUP_731, _RESERVED_IDENTIFIER_FIXUP_748);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1587 = _RESERVED_IDENTIFIER_FIXUP_699;
    _RESERVED_IDENTIFIER_FIXUP_1587.x = _RESERVED_IDENTIFIER_FIXUP_749.x;
    _RESERVED_IDENTIFIER_FIXUP_1587.y = _RESERVED_IDENTIFIER_FIXUP_749.y;
    _RESERVED_IDENTIFIER_FIXUP_1587.z = _RESERVED_IDENTIFIER_FIXUP_749.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_757 = _RESERVED_IDENTIFIER_FIXUP_703.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_760 = _RESERVED_IDENTIFIER_FIXUP_757 * _RESERVED_IDENTIFIER_FIXUP_1575.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1593;
    _RESERVED_IDENTIFIER_FIXUP_1593.x = _RESERVED_IDENTIFIER_FIXUP_760.x;
    _RESERVED_IDENTIFIER_FIXUP_1593.y = _RESERVED_IDENTIFIER_FIXUP_760.y;
    _RESERVED_IDENTIFIER_FIXUP_1593.z = _RESERVED_IDENTIFIER_FIXUP_760.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_774 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_718.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = mix(_RESERVED_IDENTIFIER_FIXUP_1593.xyz, _RESERVED_IDENTIFIER_FIXUP_757, _RESERVED_IDENTIFIER_FIXUP_774);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1599 = _RESERVED_IDENTIFIER_FIXUP_703;
    _RESERVED_IDENTIFIER_FIXUP_1599.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1599.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1599.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_783 = _RESERVED_IDENTIFIER_FIXUP_707.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_786 = _RESERVED_IDENTIFIER_FIXUP_783 * _RESERVED_IDENTIFIER_FIXUP_1575.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1605;
    _RESERVED_IDENTIFIER_FIXUP_1605.x = _RESERVED_IDENTIFIER_FIXUP_786.x;
    _RESERVED_IDENTIFIER_FIXUP_1605.y = _RESERVED_IDENTIFIER_FIXUP_786.y;
    _RESERVED_IDENTIFIER_FIXUP_1605.z = _RESERVED_IDENTIFIER_FIXUP_786.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_800 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_718.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_801 = mix(_RESERVED_IDENTIFIER_FIXUP_1605.xyz, _RESERVED_IDENTIFIER_FIXUP_783, _RESERVED_IDENTIFIER_FIXUP_800);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1611 = _RESERVED_IDENTIFIER_FIXUP_707;
    _RESERVED_IDENTIFIER_FIXUP_1611.x = _RESERVED_IDENTIFIER_FIXUP_801.x;
    _RESERVED_IDENTIFIER_FIXUP_1611.y = _RESERVED_IDENTIFIER_FIXUP_801.y;
    _RESERVED_IDENTIFIER_FIXUP_1611.z = _RESERVED_IDENTIFIER_FIXUP_801.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_809 = _RESERVED_IDENTIFIER_FIXUP_711.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_812 = _RESERVED_IDENTIFIER_FIXUP_809 * _RESERVED_IDENTIFIER_FIXUP_1575.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1617 = _RESERVED_IDENTIFIER_FIXUP_718;
    _RESERVED_IDENTIFIER_FIXUP_1617.x = _RESERVED_IDENTIFIER_FIXUP_812.x;
    _RESERVED_IDENTIFIER_FIXUP_1617.y = _RESERVED_IDENTIFIER_FIXUP_812.y;
    _RESERVED_IDENTIFIER_FIXUP_1617.z = _RESERVED_IDENTIFIER_FIXUP_812.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_827 = mix(_RESERVED_IDENTIFIER_FIXUP_1617.xyz, _RESERVED_IDENTIFIER_FIXUP_809, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1617.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1623 = _RESERVED_IDENTIFIER_FIXUP_711;
    _RESERVED_IDENTIFIER_FIXUP_1623.x = _RESERVED_IDENTIFIER_FIXUP_827.x;
    _RESERVED_IDENTIFIER_FIXUP_1623.y = _RESERVED_IDENTIFIER_FIXUP_827.y;
    _RESERVED_IDENTIFIER_FIXUP_1623.z = _RESERVED_IDENTIFIER_FIXUP_827.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_848 = mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1587, _RESERVED_IDENTIFIER_FIXUP_1599, _RESERVED_IDENTIFIER_FIXUP_715.xxxx), _RESERVED_IDENTIFIER_FIXUP_1611, _RESERVED_IDENTIFIER_FIXUP_715.yyyy), _RESERVED_IDENTIFIER_FIXUP_1623, _RESERVED_IDENTIFIER_FIXUP_715.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_855 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1945 = vec4(_RESERVED_IDENTIFIER_FIXUP_848.x, 0.0, 0.0, 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1945.y = _RESERVED_IDENTIFIER_FIXUP_848.y;
    _RESERVED_IDENTIFIER_FIXUP_1945.z = _RESERVED_IDENTIFIER_FIXUP_848.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1089 = _RESERVED_IDENTIFIER_FIXUP_1945.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1741 = _RESERVED_IDENTIFIER_FIXUP_1945;
    _RESERVED_IDENTIFIER_FIXUP_1741.x = _RESERVED_IDENTIFIER_FIXUP_1089.x;
    _RESERVED_IDENTIFIER_FIXUP_1741.y = _RESERVED_IDENTIFIER_FIXUP_1089.y;
    _RESERVED_IDENTIFIER_FIXUP_1741.z = _RESERVED_IDENTIFIER_FIXUP_1089.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1142 = OptTex0( texcoord0.xyz);
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1146 = hdTex1(param_4);
    vec2 param_5 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1150 = hdTex2(param_5);
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1154 = hdTex3(param_6);
    vec2 param_7 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1158 = hdTex4(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1166 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1755 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1755.x = _RESERVED_IDENTIFIER_FIXUP_1166.x;
    _RESERVED_IDENTIFIER_FIXUP_1755.y = _RESERVED_IDENTIFIER_FIXUP_1166.y;
    _RESERVED_IDENTIFIER_FIXUP_1755.z = _RESERVED_IDENTIFIER_FIXUP_1166.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1142.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1174 * _RESERVED_IDENTIFIER_FIXUP_1755.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1761;
    _RESERVED_IDENTIFIER_FIXUP_1761.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
    _RESERVED_IDENTIFIER_FIXUP_1761.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
    _RESERVED_IDENTIFIER_FIXUP_1761.z = _RESERVED_IDENTIFIER_FIXUP_1177.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1192 = mix(_RESERVED_IDENTIFIER_FIXUP_1761.xyz, _RESERVED_IDENTIFIER_FIXUP_1174, _RESERVED_IDENTIFIER_FIXUP_748);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1767 = _RESERVED_IDENTIFIER_FIXUP_1142;
    _RESERVED_IDENTIFIER_FIXUP_1767.x = _RESERVED_IDENTIFIER_FIXUP_1192.x;
    _RESERVED_IDENTIFIER_FIXUP_1767.y = _RESERVED_IDENTIFIER_FIXUP_1192.y;
    _RESERVED_IDENTIFIER_FIXUP_1767.z = _RESERVED_IDENTIFIER_FIXUP_1192.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_1146.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1203 = _RESERVED_IDENTIFIER_FIXUP_1200 * _RESERVED_IDENTIFIER_FIXUP_1755.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1773;
    _RESERVED_IDENTIFIER_FIXUP_1773.x = _RESERVED_IDENTIFIER_FIXUP_1203.x;
    _RESERVED_IDENTIFIER_FIXUP_1773.y = _RESERVED_IDENTIFIER_FIXUP_1203.y;
    _RESERVED_IDENTIFIER_FIXUP_1773.z = _RESERVED_IDENTIFIER_FIXUP_1203.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1218 = mix(_RESERVED_IDENTIFIER_FIXUP_1773.xyz, _RESERVED_IDENTIFIER_FIXUP_1200, _RESERVED_IDENTIFIER_FIXUP_774);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1779 = _RESERVED_IDENTIFIER_FIXUP_1146;
    _RESERVED_IDENTIFIER_FIXUP_1779.x = _RESERVED_IDENTIFIER_FIXUP_1218.x;
    _RESERVED_IDENTIFIER_FIXUP_1779.y = _RESERVED_IDENTIFIER_FIXUP_1218.y;
    _RESERVED_IDENTIFIER_FIXUP_1779.z = _RESERVED_IDENTIFIER_FIXUP_1218.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_1150.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1229 = _RESERVED_IDENTIFIER_FIXUP_1226 * _RESERVED_IDENTIFIER_FIXUP_1755.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1785;
    _RESERVED_IDENTIFIER_FIXUP_1785.x = _RESERVED_IDENTIFIER_FIXUP_1229.x;
    _RESERVED_IDENTIFIER_FIXUP_1785.y = _RESERVED_IDENTIFIER_FIXUP_1229.y;
    _RESERVED_IDENTIFIER_FIXUP_1785.z = _RESERVED_IDENTIFIER_FIXUP_1229.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1244 = mix(_RESERVED_IDENTIFIER_FIXUP_1785.xyz, _RESERVED_IDENTIFIER_FIXUP_1226, _RESERVED_IDENTIFIER_FIXUP_800);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1791 = _RESERVED_IDENTIFIER_FIXUP_1150;
    _RESERVED_IDENTIFIER_FIXUP_1791.x = _RESERVED_IDENTIFIER_FIXUP_1244.x;
    _RESERVED_IDENTIFIER_FIXUP_1791.y = _RESERVED_IDENTIFIER_FIXUP_1244.y;
    _RESERVED_IDENTIFIER_FIXUP_1791.z = _RESERVED_IDENTIFIER_FIXUP_1244.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1252 = _RESERVED_IDENTIFIER_FIXUP_1154.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1255 = _RESERVED_IDENTIFIER_FIXUP_1252 * _RESERVED_IDENTIFIER_FIXUP_1755.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_718;
    _RESERVED_IDENTIFIER_FIXUP_1797.x = _RESERVED_IDENTIFIER_FIXUP_1255.x;
    _RESERVED_IDENTIFIER_FIXUP_1797.y = _RESERVED_IDENTIFIER_FIXUP_1255.y;
    _RESERVED_IDENTIFIER_FIXUP_1797.z = _RESERVED_IDENTIFIER_FIXUP_1255.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1270 = mix(_RESERVED_IDENTIFIER_FIXUP_1797.xyz, _RESERVED_IDENTIFIER_FIXUP_1252, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1797.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1803 = _RESERVED_IDENTIFIER_FIXUP_1154;
    _RESERVED_IDENTIFIER_FIXUP_1803.x = _RESERVED_IDENTIFIER_FIXUP_1270.x;
    _RESERVED_IDENTIFIER_FIXUP_1803.y = _RESERVED_IDENTIFIER_FIXUP_1270.y;
    _RESERVED_IDENTIFIER_FIXUP_1803.z = _RESERVED_IDENTIFIER_FIXUP_1270.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1286 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1767, _RESERVED_IDENTIFIER_FIXUP_1779, _RESERVED_IDENTIFIER_FIXUP_1158.xxxx), _RESERVED_IDENTIFIER_FIXUP_1791, _RESERVED_IDENTIFIER_FIXUP_1158.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291 = mix(_RESERVED_IDENTIFIER_FIXUP_1286, _RESERVED_IDENTIFIER_FIXUP_1803, _RESERVED_IDENTIFIER_FIXUP_1158.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1811 = _RESERVED_IDENTIFIER_FIXUP_1286;
    _RESERVED_IDENTIFIER_FIXUP_1811.x = _RESERVED_IDENTIFIER_FIXUP_855;
    float _RESERVED_IDENTIFIER_FIXUP_1304 = clamp((_RESERVED_IDENTIFIER_FIXUP_855 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1811.x = _RESERVED_IDENTIFIER_FIXUP_1304;
    float _RESERVED_IDENTIFIER_FIXUP_1310 = ((-_RESERVED_IDENTIFIER_FIXUP_1304) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1811.y = _RESERVED_IDENTIFIER_FIXUP_1310;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1941;
    if (_RESERVED_IDENTIFIER_FIXUP_1310 != (-_RESERVED_IDENTIFIER_FIXUP_1310))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1322 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1811.y = _RESERVED_IDENTIFIER_FIXUP_1322.x;
        _RESERVED_IDENTIFIER_FIXUP_1811.z = _RESERVED_IDENTIFIER_FIXUP_1322.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1332 = _RESERVED_IDENTIFIER_FIXUP_1811.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1828;
        _RESERVED_IDENTIFIER_FIXUP_1828.x = _RESERVED_IDENTIFIER_FIXUP_1332.x;
        _RESERVED_IDENTIFIER_FIXUP_1828.y = _RESERVED_IDENTIFIER_FIXUP_1332.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_1811.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1832;
        _RESERVED_IDENTIFIER_FIXUP_1832.x = _RESERVED_IDENTIFIER_FIXUP_1342.x;
        _RESERVED_IDENTIFIER_FIXUP_1832.y = _RESERVED_IDENTIFIER_FIXUP_1342.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1352 = _RESERVED_IDENTIFIER_FIXUP_1811.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1836;
        _RESERVED_IDENTIFIER_FIXUP_1836.x = _RESERVED_IDENTIFIER_FIXUP_1352.x;
        _RESERVED_IDENTIFIER_FIXUP_1836.y = _RESERVED_IDENTIFIER_FIXUP_1352.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_1811.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1840;
        _RESERVED_IDENTIFIER_FIXUP_1840.x = _RESERVED_IDENTIFIER_FIXUP_1362.x;
        _RESERVED_IDENTIFIER_FIXUP_1840.y = _RESERVED_IDENTIFIER_FIXUP_1362.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1370 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1370.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1370.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1376 = hdLod5(param_8, param_9);
        _RESERVED_IDENTIFIER_FIXUP_1828.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1832.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1836.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1840.w = 0.0;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1828.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1376.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1832.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1376.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1836.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1376.w = hdLod5(param_14, param_15).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1433 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1376 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1840.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1433.x = min((_RESERVED_IDENTIFIER_FIXUP_1304 * (((float((hdLod5(param_16, param_17).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1433, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1158.w);
        _RESERVED_IDENTIFIER_FIXUP_1941 = _RESERVED_IDENTIFIER_FIXUP_1433;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1822 = _RESERVED_IDENTIFIER_FIXUP_1791;
        _RESERVED_IDENTIFIER_FIXUP_1822.x = _RESERVED_IDENTIFIER_FIXUP_1158.w;
        _RESERVED_IDENTIFIER_FIXUP_1941 = _RESERVED_IDENTIFIER_FIXUP_1822;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1481 = (_RESERVED_IDENTIFIER_FIXUP_1941.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1947 = vec4(_RESERVED_IDENTIFIER_FIXUP_1481, _RESERVED_IDENTIFIER_FIXUP_1291.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1505 = _RESERVED_IDENTIFIER_FIXUP_1941.xxx * _RESERVED_IDENTIFIER_FIXUP_1947.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_1505.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1911 = _RESERVED_IDENTIFIER_FIXUP_1947;
    _RESERVED_IDENTIFIER_FIXUP_1911.y = _RESERVED_IDENTIFIER_FIXUP_1507;
    _RESERVED_IDENTIFIER_FIXUP_1911.z = _RESERVED_IDENTIFIER_FIXUP_1505.y;
    _RESERVED_IDENTIFIER_FIXUP_1911.w = _RESERVED_IDENTIFIER_FIXUP_1505.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1519 = (_RESERVED_IDENTIFIER_FIXUP_1291.xyz * _RESERVED_IDENTIFIER_FIXUP_1911.xxx) + _RESERVED_IDENTIFIER_FIXUP_1911.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1948 = vec4(_RESERVED_IDENTIFIER_FIXUP_1519.x, _RESERVED_IDENTIFIER_FIXUP_1507, _RESERVED_IDENTIFIER_FIXUP_1505.yz);
    _RESERVED_IDENTIFIER_FIXUP_1948.y = _RESERVED_IDENTIFIER_FIXUP_1519.y;
    _RESERVED_IDENTIFIER_FIXUP_1948.z = _RESERVED_IDENTIFIER_FIXUP_1519.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1532 = _RESERVED_IDENTIFIER_FIXUP_1948.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1923 = _RESERVED_IDENTIFIER_FIXUP_1948;
    _RESERVED_IDENTIFIER_FIXUP_1923.x = _RESERVED_IDENTIFIER_FIXUP_1532.x;
    _RESERVED_IDENTIFIER_FIXUP_1923.y = _RESERVED_IDENTIFIER_FIXUP_1532.y;
    _RESERVED_IDENTIFIER_FIXUP_1923.z = _RESERVED_IDENTIFIER_FIXUP_1532.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1923.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_562 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_571;
    if (_RESERVED_IDENTIFIER_FIXUP_562)
    {
        _RESERVED_IDENTIFIER_FIXUP_571 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_571 = _RESERVED_IDENTIFIER_FIXUP_562;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_571)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_608 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1741.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_634 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567;
    if (_RESERVED_IDENTIFIER_FIXUP_608 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1567 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_608), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_634);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1567 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_634);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1567;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1481);
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
        vec2 hdB266 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB266.x;
        r0.z = hdB266.y;
        vec2 hdB277 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB277.x;
        r2.y = hdB277.y;
        vec2 hdB288 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB288.x;
        r3.y = hdB288.y;
        vec2 hdB299 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB299.x;
        r5.y = hdB299.y;
        vec2 hdB310 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB310.x;
        r6.y = hdB310.y;
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
        r0.y = r6.x + (-v5.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r2.x = min(r0.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB444 = r1.www * v1.xyz;
    r0.y = hdB444.x;
    r0.z = hdB444.y;
    r0.w = hdB444.z;
    vec4 hdB453 = r0;
    vec3 hdB455 = r2.xxx * hdB453.yzw;
    r0.y = hdB455.x;
    r0.z = hdB455.y;
    r0.w = hdB455.z;
    vec4 hdB464 = r0;
    vec4 hdB467 = r0;
    vec3 hdB469 = (r1.xyz * hdB464.xxx) + hdB467.yzw;
    r0.x = hdB469.x;
    r0.y = hdB469.y;
    r0.z = hdB469.z;
    vec4 hdB476 = r0;
    vec3 hdB483 = hdB476.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB483.x;
    r0.y = hdB483.y;
    r0.z = hdB483.z;
    vec3 hdB498 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB498.x;
    oC0.y = hdB498.y;
    oC0.z = hdB498.z;
    oC0.w = 1.0;
    bool hdB510 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB518;
    if (hdB510)
    {
        hdB518 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB518 = hdB510;
    }
    if (hdB518)
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
    bool _1628 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1638;
    if (_1628)
    {
        _1638 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1638 = _1628;
    }
    if (_1638)
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
        bool _1663 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1678;
        if (!_1663)
        {
            _1678 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1678 = _1663;
        }
        if (_1678)
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
