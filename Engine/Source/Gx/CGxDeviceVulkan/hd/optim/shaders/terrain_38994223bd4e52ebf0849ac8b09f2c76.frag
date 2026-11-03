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
float _RESERVED_IDENTIFIER_FIXUP_1979;
vec4 _RESERVED_IDENTIFIER_FIXUP_1980;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_715 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_719 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_723 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_727 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_731 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_734 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_736 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1979).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_739 = _RESERVED_IDENTIFIER_FIXUP_736 + _RESERVED_IDENTIFIER_FIXUP_736;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1620;
    _RESERVED_IDENTIFIER_FIXUP_1620.x = _RESERVED_IDENTIFIER_FIXUP_739.x;
    _RESERVED_IDENTIFIER_FIXUP_1620.y = _RESERVED_IDENTIFIER_FIXUP_739.y;
    _RESERVED_IDENTIFIER_FIXUP_1620.z = _RESERVED_IDENTIFIER_FIXUP_739.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_747 = _RESERVED_IDENTIFIER_FIXUP_715.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_750 = _RESERVED_IDENTIFIER_FIXUP_747 * _RESERVED_IDENTIFIER_FIXUP_1620.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1626;
    _RESERVED_IDENTIFIER_FIXUP_1626.x = _RESERVED_IDENTIFIER_FIXUP_750.x;
    _RESERVED_IDENTIFIER_FIXUP_1626.y = _RESERVED_IDENTIFIER_FIXUP_750.y;
    _RESERVED_IDENTIFIER_FIXUP_1626.z = _RESERVED_IDENTIFIER_FIXUP_750.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_764 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_734.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_765 = mix(_RESERVED_IDENTIFIER_FIXUP_1626.xyz, _RESERVED_IDENTIFIER_FIXUP_747, _RESERVED_IDENTIFIER_FIXUP_764);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_715;
    _RESERVED_IDENTIFIER_FIXUP_1632.x = _RESERVED_IDENTIFIER_FIXUP_765.x;
    _RESERVED_IDENTIFIER_FIXUP_1632.y = _RESERVED_IDENTIFIER_FIXUP_765.y;
    _RESERVED_IDENTIFIER_FIXUP_1632.z = _RESERVED_IDENTIFIER_FIXUP_765.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_773 = _RESERVED_IDENTIFIER_FIXUP_719.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_776 = _RESERVED_IDENTIFIER_FIXUP_773 * _RESERVED_IDENTIFIER_FIXUP_1620.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1638;
    _RESERVED_IDENTIFIER_FIXUP_1638.x = _RESERVED_IDENTIFIER_FIXUP_776.x;
    _RESERVED_IDENTIFIER_FIXUP_1638.y = _RESERVED_IDENTIFIER_FIXUP_776.y;
    _RESERVED_IDENTIFIER_FIXUP_1638.z = _RESERVED_IDENTIFIER_FIXUP_776.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_790 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_734.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_791 = mix(_RESERVED_IDENTIFIER_FIXUP_1638.xyz, _RESERVED_IDENTIFIER_FIXUP_773, _RESERVED_IDENTIFIER_FIXUP_790);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1644 = _RESERVED_IDENTIFIER_FIXUP_719;
    _RESERVED_IDENTIFIER_FIXUP_1644.x = _RESERVED_IDENTIFIER_FIXUP_791.x;
    _RESERVED_IDENTIFIER_FIXUP_1644.y = _RESERVED_IDENTIFIER_FIXUP_791.y;
    _RESERVED_IDENTIFIER_FIXUP_1644.z = _RESERVED_IDENTIFIER_FIXUP_791.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_799 = _RESERVED_IDENTIFIER_FIXUP_723.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_802 = _RESERVED_IDENTIFIER_FIXUP_799 * _RESERVED_IDENTIFIER_FIXUP_1620.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1650;
    _RESERVED_IDENTIFIER_FIXUP_1650.x = _RESERVED_IDENTIFIER_FIXUP_802.x;
    _RESERVED_IDENTIFIER_FIXUP_1650.y = _RESERVED_IDENTIFIER_FIXUP_802.y;
    _RESERVED_IDENTIFIER_FIXUP_1650.z = _RESERVED_IDENTIFIER_FIXUP_802.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_816 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_734.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_817 = mix(_RESERVED_IDENTIFIER_FIXUP_1650.xyz, _RESERVED_IDENTIFIER_FIXUP_799, _RESERVED_IDENTIFIER_FIXUP_816);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1656 = _RESERVED_IDENTIFIER_FIXUP_723;
    _RESERVED_IDENTIFIER_FIXUP_1656.x = _RESERVED_IDENTIFIER_FIXUP_817.x;
    _RESERVED_IDENTIFIER_FIXUP_1656.y = _RESERVED_IDENTIFIER_FIXUP_817.y;
    _RESERVED_IDENTIFIER_FIXUP_1656.z = _RESERVED_IDENTIFIER_FIXUP_817.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_727.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_828 = _RESERVED_IDENTIFIER_FIXUP_825 * _RESERVED_IDENTIFIER_FIXUP_1620.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1662 = _RESERVED_IDENTIFIER_FIXUP_734;
    _RESERVED_IDENTIFIER_FIXUP_1662.x = _RESERVED_IDENTIFIER_FIXUP_828.x;
    _RESERVED_IDENTIFIER_FIXUP_1662.y = _RESERVED_IDENTIFIER_FIXUP_828.y;
    _RESERVED_IDENTIFIER_FIXUP_1662.z = _RESERVED_IDENTIFIER_FIXUP_828.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_843 = mix(_RESERVED_IDENTIFIER_FIXUP_1662.xyz, _RESERVED_IDENTIFIER_FIXUP_825, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1662.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_727;
    _RESERVED_IDENTIFIER_FIXUP_1668.x = _RESERVED_IDENTIFIER_FIXUP_843.x;
    _RESERVED_IDENTIFIER_FIXUP_1668.y = _RESERVED_IDENTIFIER_FIXUP_843.y;
    _RESERVED_IDENTIFIER_FIXUP_1668.z = _RESERVED_IDENTIFIER_FIXUP_843.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1677;
    _RESERVED_IDENTIFIER_FIXUP_1677.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_731.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_881 = (_RESERVED_IDENTIFIER_FIXUP_1668 * _RESERVED_IDENTIFIER_FIXUP_731.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1656 * _RESERVED_IDENTIFIER_FIXUP_731.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1632 * _RESERVED_IDENTIFIER_FIXUP_1677.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_731.xxxx * _RESERVED_IDENTIFIER_FIXUP_1644)));
    float _RESERVED_IDENTIFIER_FIXUP_888 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1779 = _RESERVED_IDENTIFIER_FIXUP_881;
    _RESERVED_IDENTIFIER_FIXUP_1779.x = _RESERVED_IDENTIFIER_FIXUP_881.x;
    _RESERVED_IDENTIFIER_FIXUP_1779.y = _RESERVED_IDENTIFIER_FIXUP_881.y;
    _RESERVED_IDENTIFIER_FIXUP_1779.z = _RESERVED_IDENTIFIER_FIXUP_881.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1779.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1785 = _RESERVED_IDENTIFIER_FIXUP_1779;
    _RESERVED_IDENTIFIER_FIXUP_1785.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
    _RESERVED_IDENTIFIER_FIXUP_1785.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
    _RESERVED_IDENTIFIER_FIXUP_1785.z = _RESERVED_IDENTIFIER_FIXUP_1120.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1173 = OptTex0( texcoord0.xyz);
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1177 = hdTex1(param_4);
    vec2 param_5 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = hdTex2(param_5);
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1185 = hdTex3(param_6);
    vec2 param_7 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1189 = hdTex4(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1197 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1799;
    _RESERVED_IDENTIFIER_FIXUP_1799.x = _RESERVED_IDENTIFIER_FIXUP_1197.x;
    _RESERVED_IDENTIFIER_FIXUP_1799.y = _RESERVED_IDENTIFIER_FIXUP_1197.y;
    _RESERVED_IDENTIFIER_FIXUP_1799.z = _RESERVED_IDENTIFIER_FIXUP_1197.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1173.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1208 = _RESERVED_IDENTIFIER_FIXUP_1205 * _RESERVED_IDENTIFIER_FIXUP_1799.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1805;
    _RESERVED_IDENTIFIER_FIXUP_1805.x = _RESERVED_IDENTIFIER_FIXUP_1208.x;
    _RESERVED_IDENTIFIER_FIXUP_1805.y = _RESERVED_IDENTIFIER_FIXUP_1208.y;
    _RESERVED_IDENTIFIER_FIXUP_1805.z = _RESERVED_IDENTIFIER_FIXUP_1208.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = mix(_RESERVED_IDENTIFIER_FIXUP_1805.xyz, _RESERVED_IDENTIFIER_FIXUP_1205, _RESERVED_IDENTIFIER_FIXUP_764);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1811 = _RESERVED_IDENTIFIER_FIXUP_1173;
    _RESERVED_IDENTIFIER_FIXUP_1811.x = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_1811.y = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_1811.z = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1177.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1234 = _RESERVED_IDENTIFIER_FIXUP_1231 * _RESERVED_IDENTIFIER_FIXUP_1799.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1817;
    _RESERVED_IDENTIFIER_FIXUP_1817.x = _RESERVED_IDENTIFIER_FIXUP_1234.x;
    _RESERVED_IDENTIFIER_FIXUP_1817.y = _RESERVED_IDENTIFIER_FIXUP_1234.y;
    _RESERVED_IDENTIFIER_FIXUP_1817.z = _RESERVED_IDENTIFIER_FIXUP_1234.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1249 = mix(_RESERVED_IDENTIFIER_FIXUP_1817.xyz, _RESERVED_IDENTIFIER_FIXUP_1231, _RESERVED_IDENTIFIER_FIXUP_790);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1823 = _RESERVED_IDENTIFIER_FIXUP_1177;
    _RESERVED_IDENTIFIER_FIXUP_1823.x = _RESERVED_IDENTIFIER_FIXUP_1249.x;
    _RESERVED_IDENTIFIER_FIXUP_1823.y = _RESERVED_IDENTIFIER_FIXUP_1249.y;
    _RESERVED_IDENTIFIER_FIXUP_1823.z = _RESERVED_IDENTIFIER_FIXUP_1249.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_1181.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1260 = _RESERVED_IDENTIFIER_FIXUP_1257 * _RESERVED_IDENTIFIER_FIXUP_1799.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1829;
    _RESERVED_IDENTIFIER_FIXUP_1829.x = _RESERVED_IDENTIFIER_FIXUP_1260.x;
    _RESERVED_IDENTIFIER_FIXUP_1829.y = _RESERVED_IDENTIFIER_FIXUP_1260.y;
    _RESERVED_IDENTIFIER_FIXUP_1829.z = _RESERVED_IDENTIFIER_FIXUP_1260.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1275 = mix(_RESERVED_IDENTIFIER_FIXUP_1829.xyz, _RESERVED_IDENTIFIER_FIXUP_1257, _RESERVED_IDENTIFIER_FIXUP_816);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1835 = _RESERVED_IDENTIFIER_FIXUP_1181;
    _RESERVED_IDENTIFIER_FIXUP_1835.x = _RESERVED_IDENTIFIER_FIXUP_1275.x;
    _RESERVED_IDENTIFIER_FIXUP_1835.y = _RESERVED_IDENTIFIER_FIXUP_1275.y;
    _RESERVED_IDENTIFIER_FIXUP_1835.z = _RESERVED_IDENTIFIER_FIXUP_1275.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_1185.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_1283 * _RESERVED_IDENTIFIER_FIXUP_1799.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1841 = _RESERVED_IDENTIFIER_FIXUP_734;
    _RESERVED_IDENTIFIER_FIXUP_1841.x = _RESERVED_IDENTIFIER_FIXUP_1286.x;
    _RESERVED_IDENTIFIER_FIXUP_1841.y = _RESERVED_IDENTIFIER_FIXUP_1286.y;
    _RESERVED_IDENTIFIER_FIXUP_1841.z = _RESERVED_IDENTIFIER_FIXUP_1286.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1301 = mix(_RESERVED_IDENTIFIER_FIXUP_1841.xyz, _RESERVED_IDENTIFIER_FIXUP_1283, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1841.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1847 = _RESERVED_IDENTIFIER_FIXUP_1185;
    _RESERVED_IDENTIFIER_FIXUP_1847.x = _RESERVED_IDENTIFIER_FIXUP_1301.x;
    _RESERVED_IDENTIFIER_FIXUP_1847.y = _RESERVED_IDENTIFIER_FIXUP_1301.y;
    _RESERVED_IDENTIFIER_FIXUP_1847.z = _RESERVED_IDENTIFIER_FIXUP_1301.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1856;
    _RESERVED_IDENTIFIER_FIXUP_1856.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1189.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1321 = _RESERVED_IDENTIFIER_FIXUP_1189.xxxx * _RESERVED_IDENTIFIER_FIXUP_1823;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1339 = (_RESERVED_IDENTIFIER_FIXUP_1847 * _RESERVED_IDENTIFIER_FIXUP_1189.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1835 * _RESERVED_IDENTIFIER_FIXUP_1189.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1811 * _RESERVED_IDENTIFIER_FIXUP_1856.xxxx) + _RESERVED_IDENTIFIER_FIXUP_1321));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1860 = _RESERVED_IDENTIFIER_FIXUP_1321;
    _RESERVED_IDENTIFIER_FIXUP_1860.x = _RESERVED_IDENTIFIER_FIXUP_888;
    float _RESERVED_IDENTIFIER_FIXUP_1352 = clamp((_RESERVED_IDENTIFIER_FIXUP_888 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1860.x = _RESERVED_IDENTIFIER_FIXUP_1352;
    float _RESERVED_IDENTIFIER_FIXUP_1358 = ((-_RESERVED_IDENTIFIER_FIXUP_1352) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1860.y = _RESERVED_IDENTIFIER_FIXUP_1358;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1985;
    if (_RESERVED_IDENTIFIER_FIXUP_1358 != (-_RESERVED_IDENTIFIER_FIXUP_1358))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1370 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1380 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1382 = _RESERVED_IDENTIFIER_FIXUP_1380.x;
        _RESERVED_IDENTIFIER_FIXUP_1860.y = _RESERVED_IDENTIFIER_FIXUP_1382;
        _RESERVED_IDENTIFIER_FIXUP_1860.z = _RESERVED_IDENTIFIER_FIXUP_1380.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1390 = _RESERVED_IDENTIFIER_FIXUP_1860.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1878;
        _RESERVED_IDENTIFIER_FIXUP_1878.x = _RESERVED_IDENTIFIER_FIXUP_1390.x;
        _RESERVED_IDENTIFIER_FIXUP_1878.y = _RESERVED_IDENTIFIER_FIXUP_1390.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1397 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1401 = _RESERVED_IDENTIFIER_FIXUP_1397.y;
        _RESERVED_IDENTIFIER_FIXUP_1878.w = _RESERVED_IDENTIFIER_FIXUP_1401;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1370.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1370.w;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1878.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1401;
        float _RESERVED_IDENTIFIER_FIXUP_1412 = hdLod5(param_8, param_9).x + hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1992 = vec4(_RESERVED_IDENTIFIER_FIXUP_1352, _RESERVED_IDENTIFIER_FIXUP_1382, _RESERVED_IDENTIFIER_FIXUP_1380.y, _RESERVED_IDENTIFIER_FIXUP_1412);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1419 = _RESERVED_IDENTIFIER_FIXUP_1992.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1891;
        _RESERVED_IDENTIFIER_FIXUP_1891.x = _RESERVED_IDENTIFIER_FIXUP_1419.x;
        _RESERVED_IDENTIFIER_FIXUP_1891.y = _RESERVED_IDENTIFIER_FIXUP_1419.y;
        _RESERVED_IDENTIFIER_FIXUP_1891.w = _RESERVED_IDENTIFIER_FIXUP_1401;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1891.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1401;
        float _RESERVED_IDENTIFIER_FIXUP_1441 = _RESERVED_IDENTIFIER_FIXUP_1412 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_1992.w = _RESERVED_IDENTIFIER_FIXUP_1441;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_1992.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1904;
        _RESERVED_IDENTIFIER_FIXUP_1904.x = _RESERVED_IDENTIFIER_FIXUP_1448.x;
        _RESERVED_IDENTIFIER_FIXUP_1904.y = _RESERVED_IDENTIFIER_FIXUP_1448.y;
        _RESERVED_IDENTIFIER_FIXUP_1904.w = _RESERVED_IDENTIFIER_FIXUP_1401;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1904.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1401;
        float _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_1441 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_1992.w = _RESERVED_IDENTIFIER_FIXUP_1470;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_1992.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1917;
        _RESERVED_IDENTIFIER_FIXUP_1917.x = _RESERVED_IDENTIFIER_FIXUP_1477.x;
        _RESERVED_IDENTIFIER_FIXUP_1917.y = _RESERVED_IDENTIFIER_FIXUP_1477.y;
        _RESERVED_IDENTIFIER_FIXUP_1917.w = _RESERVED_IDENTIFIER_FIXUP_1401;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1917.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1401;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1494 = hdLod5(param_16, param_17);
        _RESERVED_IDENTIFIER_FIXUP_1494.x = min((_RESERVED_IDENTIFIER_FIXUP_1352 * (((_RESERVED_IDENTIFIER_FIXUP_1470 + _RESERVED_IDENTIFIER_FIXUP_1494.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1189.w);
        _RESERVED_IDENTIFIER_FIXUP_1985 = _RESERVED_IDENTIFIER_FIXUP_1494;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1871 = _RESERVED_IDENTIFIER_FIXUP_1835;
        _RESERVED_IDENTIFIER_FIXUP_1871.x = _RESERVED_IDENTIFIER_FIXUP_1189.w;
        _RESERVED_IDENTIFIER_FIXUP_1985 = _RESERVED_IDENTIFIER_FIXUP_1871;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1527 = (_RESERVED_IDENTIFIER_FIXUP_1985.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1993 = vec4(_RESERVED_IDENTIFIER_FIXUP_1527, _RESERVED_IDENTIFIER_FIXUP_1339.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1551 = _RESERVED_IDENTIFIER_FIXUP_1985.xxx * _RESERVED_IDENTIFIER_FIXUP_1993.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1954 = _RESERVED_IDENTIFIER_FIXUP_1993;
    _RESERVED_IDENTIFIER_FIXUP_1954.y = _RESERVED_IDENTIFIER_FIXUP_1551.x;
    _RESERVED_IDENTIFIER_FIXUP_1954.z = _RESERVED_IDENTIFIER_FIXUP_1551.y;
    _RESERVED_IDENTIFIER_FIXUP_1954.w = _RESERVED_IDENTIFIER_FIXUP_1551.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1565 = (_RESERVED_IDENTIFIER_FIXUP_1339.xyz * _RESERVED_IDENTIFIER_FIXUP_1954.xxx) + _RESERVED_IDENTIFIER_FIXUP_1954.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1960 = _RESERVED_IDENTIFIER_FIXUP_1339;
    _RESERVED_IDENTIFIER_FIXUP_1960.x = _RESERVED_IDENTIFIER_FIXUP_1565.x;
    _RESERVED_IDENTIFIER_FIXUP_1960.y = _RESERVED_IDENTIFIER_FIXUP_1565.y;
    _RESERVED_IDENTIFIER_FIXUP_1960.z = _RESERVED_IDENTIFIER_FIXUP_1565.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_1960.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1966 = _RESERVED_IDENTIFIER_FIXUP_1960;
    _RESERVED_IDENTIFIER_FIXUP_1966.x = _RESERVED_IDENTIFIER_FIXUP_1578.x;
    _RESERVED_IDENTIFIER_FIXUP_1966.y = _RESERVED_IDENTIFIER_FIXUP_1578.y;
    _RESERVED_IDENTIFIER_FIXUP_1966.z = _RESERVED_IDENTIFIER_FIXUP_1578.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1966.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1785.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_649 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1613;
    if (_RESERVED_IDENTIFIER_FIXUP_623 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1613 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_623), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_649);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1613 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_649);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1613;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1527);
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB298 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB298.x;
        r1.z = hdB298.y;
        vec2 hdB309 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB309.x;
        r3.y = hdB309.y;
        vec2 hdB317 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB317.x;
        r3.w = hdB317.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r1.w = r2.x + r3.x;
        vec2 hdB340 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB340.x;
        r2.y = hdB340.y;
        vec2 hdB347 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB347.x;
        r2.w = hdB347.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB370 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB370.x;
        r2.y = hdB370.y;
        vec2 hdB377 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB377.x;
        r2.w = hdB377.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB400 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB400.x;
        r2.y = hdB400.y;
        vec2 hdB407 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB407.x;
        r2.w = hdB407.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
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
    bool _1705 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1715;
    if (_1705)
    {
        _1715 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1715 = _1705;
    }
    if (_1715)
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
        bool _1740 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1755;
        if (!_1740)
        {
            _1755 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1755 = _1740;
        }
        if (_1755)
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
