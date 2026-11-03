#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1751;
vec4 _RESERVED_IDENTIFIER_FIXUP_1752;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
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
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _53 = hdOverride >= 0;
    bool _73;
    if (_53)
    {
        _73 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _73 = _53;
    }
    vec4 _74;
    if (_73)
    {
        _74 = vec4(float(hdOverride));
    }
    else
    {
        _74 = value;
    }
    return _74;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _91 = hdOverride >= 0;
    bool _101;
    if (_91)
    {
        _101 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _101 = _91;
    }
    vec4 _102;
    if (_101)
    {
        _102 = vec4(float(hdOverride));
    }
    else
    {
        _102 = value;
    }
    return _102;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _119 = hdOverride >= 0;
    bool _129;
    if (_119)
    {
        _129 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _129 = _119;
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

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _147 = hdOverride >= 0;
    bool _156;
    if (_147)
    {
        _156 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _156 = _147;
    }
    vec4 _157;
    if (_156)
    {
        _157 = vec4(float(hdOverride));
    }
    else
    {
        _157 = value;
    }
    return _157;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _174 = hdOverride >= 0;
    bool _184;
    if (_174)
    {
        _184 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _184 = _174;
    }
    vec4 _185;
    if (_184)
    {
        _185 = vec4(float(hdOverride));
    }
    else
    {
        _185 = value;
    }
    return _185;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_645 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_648 = _RESERVED_IDENTIFIER_FIXUP_645.xy;
    float _RESERVED_IDENTIFIER_FIXUP_650 = _RESERVED_IDENTIFIER_FIXUP_645.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_648;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_650;
    vec4 _RESERVED_IDENTIFIER_FIXUP_651 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1421;
    _RESERVED_IDENTIFIER_FIXUP_1421.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_659 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1423;
    _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_659.x;
    _RESERVED_IDENTIFIER_FIXUP_1423.y = _RESERVED_IDENTIFIER_FIXUP_659.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_669 = _RESERVED_IDENTIFIER_FIXUP_1423.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1427 = _RESERVED_IDENTIFIER_FIXUP_1421;
    _RESERVED_IDENTIFIER_FIXUP_1427.x = _RESERVED_IDENTIFIER_FIXUP_669.x;
    _RESERVED_IDENTIFIER_FIXUP_1427.y = _RESERVED_IDENTIFIER_FIXUP_669.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1427.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_651.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_692 = _RESERVED_IDENTIFIER_FIXUP_1423.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_1421;
    _RESERVED_IDENTIFIER_FIXUP_1439.x = _RESERVED_IDENTIFIER_FIXUP_692.x;
    _RESERVED_IDENTIFIER_FIXUP_1439.y = _RESERVED_IDENTIFIER_FIXUP_692.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1439.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_651.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_711 = _RESERVED_IDENTIFIER_FIXUP_1423.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_711.x;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_711.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_721 = _RESERVED_IDENTIFIER_FIXUP_1423.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1451;
    _RESERVED_IDENTIFIER_FIXUP_1451.x = _RESERVED_IDENTIFIER_FIXUP_721.x;
    _RESERVED_IDENTIFIER_FIXUP_1451.y = _RESERVED_IDENTIFIER_FIXUP_721.y;
    _RESERVED_IDENTIFIER_FIXUP_1447.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1447.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_651.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1451.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_789 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_807 = hdTex3(param_8);
    vec3 _RESERVED_IDENTIFIER_FIXUP_819 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1751).xyz;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1451.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1753 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_789 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_651 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_807.w), _RESERVED_IDENTIFIER_FIXUP_819 + _RESERVED_IDENTIFIER_FIXUP_819);
    vec2 param_11 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_830 = hdTex0(param_11).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_832 = _RESERVED_IDENTIFIER_FIXUP_1753.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_833 = _RESERVED_IDENTIFIER_FIXUP_830 * _RESERVED_IDENTIFIER_FIXUP_832;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1505;
    _RESERVED_IDENTIFIER_FIXUP_1505.x = _RESERVED_IDENTIFIER_FIXUP_833.x;
    _RESERVED_IDENTIFIER_FIXUP_1505.y = _RESERVED_IDENTIFIER_FIXUP_833.y;
    _RESERVED_IDENTIFIER_FIXUP_1505.z = _RESERVED_IDENTIFIER_FIXUP_833.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_843 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1511;
    _RESERVED_IDENTIFIER_FIXUP_1511.x = _RESERVED_IDENTIFIER_FIXUP_843.x;
    _RESERVED_IDENTIFIER_FIXUP_1511.y = _RESERVED_IDENTIFIER_FIXUP_843.y;
    _RESERVED_IDENTIFIER_FIXUP_1511.z = _RESERVED_IDENTIFIER_FIXUP_843.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_857 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1511.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_858 = mix(_RESERVED_IDENTIFIER_FIXUP_1505.xyz, _RESERVED_IDENTIFIER_FIXUP_830, _RESERVED_IDENTIFIER_FIXUP_857);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1517;
    _RESERVED_IDENTIFIER_FIXUP_1517.x = _RESERVED_IDENTIFIER_FIXUP_858.x;
    _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_858.y;
    _RESERVED_IDENTIFIER_FIXUP_1517.z = _RESERVED_IDENTIFIER_FIXUP_858.z;
    vec2 param_12 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_872 = hdTex1(param_12).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_873 = _RESERVED_IDENTIFIER_FIXUP_832 * _RESERVED_IDENTIFIER_FIXUP_872;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1523;
    _RESERVED_IDENTIFIER_FIXUP_1523.x = _RESERVED_IDENTIFIER_FIXUP_873.x;
    _RESERVED_IDENTIFIER_FIXUP_1523.y = _RESERVED_IDENTIFIER_FIXUP_873.y;
    _RESERVED_IDENTIFIER_FIXUP_1523.z = _RESERVED_IDENTIFIER_FIXUP_873.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_887 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1511.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_888 = mix(_RESERVED_IDENTIFIER_FIXUP_1523.xyz, _RESERVED_IDENTIFIER_FIXUP_872, _RESERVED_IDENTIFIER_FIXUP_887);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1529;
    _RESERVED_IDENTIFIER_FIXUP_1529.x = _RESERVED_IDENTIFIER_FIXUP_888.x;
    _RESERVED_IDENTIFIER_FIXUP_1529.y = _RESERVED_IDENTIFIER_FIXUP_888.y;
    _RESERVED_IDENTIFIER_FIXUP_1529.z = _RESERVED_IDENTIFIER_FIXUP_888.z;
    vec2 param_13 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_907 = hdTex2(param_13).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_908 = _RESERVED_IDENTIFIER_FIXUP_832 * _RESERVED_IDENTIFIER_FIXUP_907;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1535 = _RESERVED_IDENTIFIER_FIXUP_807;
    _RESERVED_IDENTIFIER_FIXUP_1535.x = _RESERVED_IDENTIFIER_FIXUP_908.x;
    _RESERVED_IDENTIFIER_FIXUP_1535.z = _RESERVED_IDENTIFIER_FIXUP_908.y;
    _RESERVED_IDENTIFIER_FIXUP_1535.w = _RESERVED_IDENTIFIER_FIXUP_908.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_922 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1511.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_923 = mix(_RESERVED_IDENTIFIER_FIXUP_1535.xzw, _RESERVED_IDENTIFIER_FIXUP_907, _RESERVED_IDENTIFIER_FIXUP_922);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1541;
    _RESERVED_IDENTIFIER_FIXUP_1541.x = _RESERVED_IDENTIFIER_FIXUP_923.x;
    _RESERVED_IDENTIFIER_FIXUP_1541.y = _RESERVED_IDENTIFIER_FIXUP_923.y;
    _RESERVED_IDENTIFIER_FIXUP_1541.z = _RESERVED_IDENTIFIER_FIXUP_923.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1547;
    _RESERVED_IDENTIFIER_FIXUP_1547.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1547.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1547.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1754 = vec4(_RESERVED_IDENTIFIER_FIXUP_1753.xxx * _RESERVED_IDENTIFIER_FIXUP_1547.xyz, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_976 = (mix(mix(_RESERVED_IDENTIFIER_FIXUP_1517, _RESERVED_IDENTIFIER_FIXUP_1529, _RESERVED_IDENTIFIER_FIXUP_807.xxxx), _RESERVED_IDENTIFIER_FIXUP_1541, _RESERVED_IDENTIFIER_FIXUP_1535.yyyy).xyz * _RESERVED_IDENTIFIER_FIXUP_1754.www) + _RESERVED_IDENTIFIER_FIXUP_1754.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564;
    _RESERVED_IDENTIFIER_FIXUP_1564.x = _RESERVED_IDENTIFIER_FIXUP_976.x;
    _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_976.y;
    _RESERVED_IDENTIFIER_FIXUP_1564.z = _RESERVED_IDENTIFIER_FIXUP_976.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_989 = _RESERVED_IDENTIFIER_FIXUP_1564.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1570;
    _RESERVED_IDENTIFIER_FIXUP_1570.x = _RESERVED_IDENTIFIER_FIXUP_989.x;
    _RESERVED_IDENTIFIER_FIXUP_1570.y = _RESERVED_IDENTIFIER_FIXUP_989.y;
    _RESERVED_IDENTIFIER_FIXUP_1570.z = _RESERVED_IDENTIFIER_FIXUP_989.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1004 = _RESERVED_IDENTIFIER_FIXUP_1570.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1576;
    _RESERVED_IDENTIFIER_FIXUP_1576.x = _RESERVED_IDENTIFIER_FIXUP_1004.x;
    _RESERVED_IDENTIFIER_FIXUP_1576.y = _RESERVED_IDENTIFIER_FIXUP_1004.y;
    _RESERVED_IDENTIFIER_FIXUP_1576.z = _RESERVED_IDENTIFIER_FIXUP_1004.z;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_648;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_650;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1046 = hdLod5(param_14, param_15);
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1427.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1046.y = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1439.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1046.z = hdLod5(param_18, param_19).x;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1447.xy;
    float param_21 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1046.w = hdLod5(param_20, param_21).x;
    vec2 param_22 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1202 = hdTex3(param_22);
    vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1451.xy;
    float param_24 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1207 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_789 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1046 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_23, param_24).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1202.w);
    vec2 param_25 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1212 = hdTex0(param_25);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1755 = vec4(_RESERVED_IDENTIFIER_FIXUP_1207, color0.xyz + color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_1212.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1227 = _RESERVED_IDENTIFIER_FIXUP_1755.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_1225 * _RESERVED_IDENTIFIER_FIXUP_1227;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1671;
    _RESERVED_IDENTIFIER_FIXUP_1671.x = _RESERVED_IDENTIFIER_FIXUP_1228.x;
    _RESERVED_IDENTIFIER_FIXUP_1671.y = _RESERVED_IDENTIFIER_FIXUP_1228.y;
    _RESERVED_IDENTIFIER_FIXUP_1671.z = _RESERVED_IDENTIFIER_FIXUP_1228.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1253 = mix(_RESERVED_IDENTIFIER_FIXUP_1671.xyz, _RESERVED_IDENTIFIER_FIXUP_1225, _RESERVED_IDENTIFIER_FIXUP_857);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1683 = _RESERVED_IDENTIFIER_FIXUP_1212;
    _RESERVED_IDENTIFIER_FIXUP_1683.x = _RESERVED_IDENTIFIER_FIXUP_1253.x;
    _RESERVED_IDENTIFIER_FIXUP_1683.y = _RESERVED_IDENTIFIER_FIXUP_1253.y;
    _RESERVED_IDENTIFIER_FIXUP_1683.z = _RESERVED_IDENTIFIER_FIXUP_1253.z;
    vec2 param_26 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1263 = hdTex1(param_26);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1267 = _RESERVED_IDENTIFIER_FIXUP_1263.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1268 = _RESERVED_IDENTIFIER_FIXUP_1227 * _RESERVED_IDENTIFIER_FIXUP_1267;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1689;
    _RESERVED_IDENTIFIER_FIXUP_1689.x = _RESERVED_IDENTIFIER_FIXUP_1268.x;
    _RESERVED_IDENTIFIER_FIXUP_1689.y = _RESERVED_IDENTIFIER_FIXUP_1268.y;
    _RESERVED_IDENTIFIER_FIXUP_1689.z = _RESERVED_IDENTIFIER_FIXUP_1268.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1283 = mix(_RESERVED_IDENTIFIER_FIXUP_1689.xyz, _RESERVED_IDENTIFIER_FIXUP_1267, _RESERVED_IDENTIFIER_FIXUP_887);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1695 = _RESERVED_IDENTIFIER_FIXUP_1263;
    _RESERVED_IDENTIFIER_FIXUP_1695.x = _RESERVED_IDENTIFIER_FIXUP_1283.x;
    _RESERVED_IDENTIFIER_FIXUP_1695.y = _RESERVED_IDENTIFIER_FIXUP_1283.y;
    _RESERVED_IDENTIFIER_FIXUP_1695.z = _RESERVED_IDENTIFIER_FIXUP_1283.z;
    vec2 param_27 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1298 = hdTex2(param_27);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_1298.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1303 = _RESERVED_IDENTIFIER_FIXUP_1227 * _RESERVED_IDENTIFIER_FIXUP_1302;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1701 = _RESERVED_IDENTIFIER_FIXUP_1202;
    _RESERVED_IDENTIFIER_FIXUP_1701.x = _RESERVED_IDENTIFIER_FIXUP_1303.x;
    _RESERVED_IDENTIFIER_FIXUP_1701.z = _RESERVED_IDENTIFIER_FIXUP_1303.y;
    _RESERVED_IDENTIFIER_FIXUP_1701.w = _RESERVED_IDENTIFIER_FIXUP_1303.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1318 = mix(_RESERVED_IDENTIFIER_FIXUP_1701.xzw, _RESERVED_IDENTIFIER_FIXUP_1302, _RESERVED_IDENTIFIER_FIXUP_922);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_1298;
    _RESERVED_IDENTIFIER_FIXUP_1707.x = _RESERVED_IDENTIFIER_FIXUP_1318.x;
    _RESERVED_IDENTIFIER_FIXUP_1707.y = _RESERVED_IDENTIFIER_FIXUP_1318.y;
    _RESERVED_IDENTIFIER_FIXUP_1707.z = _RESERVED_IDENTIFIER_FIXUP_1318.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1329 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1683, _RESERVED_IDENTIFIER_FIXUP_1695, _RESERVED_IDENTIFIER_FIXUP_1202.xxxx), _RESERVED_IDENTIFIER_FIXUP_1707, _RESERVED_IDENTIFIER_FIXUP_1701.yyyy);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_1329.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1713;
    _RESERVED_IDENTIFIER_FIXUP_1713.x = _RESERVED_IDENTIFIER_FIXUP_1334.x;
    _RESERVED_IDENTIFIER_FIXUP_1713.y = _RESERVED_IDENTIFIER_FIXUP_1334.y;
    _RESERVED_IDENTIFIER_FIXUP_1713.z = _RESERVED_IDENTIFIER_FIXUP_1334.z;
    float _RESERVED_IDENTIFIER_FIXUP_1355 = (_RESERVED_IDENTIFIER_FIXUP_1207 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1756 = vec4(_RESERVED_IDENTIFIER_FIXUP_1755.xxx * _RESERVED_IDENTIFIER_FIXUP_1713.xyz, _RESERVED_IDENTIFIER_FIXUP_1355);
    _RESERVED_IDENTIFIER_FIXUP_1756.w = _RESERVED_IDENTIFIER_FIXUP_1355;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1371 = (_RESERVED_IDENTIFIER_FIXUP_1329.xyz * _RESERVED_IDENTIFIER_FIXUP_1756.www) + _RESERVED_IDENTIFIER_FIXUP_1756.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1732;
    _RESERVED_IDENTIFIER_FIXUP_1732.x = _RESERVED_IDENTIFIER_FIXUP_1371.x;
    _RESERVED_IDENTIFIER_FIXUP_1732.y = _RESERVED_IDENTIFIER_FIXUP_1371.y;
    _RESERVED_IDENTIFIER_FIXUP_1732.z = _RESERVED_IDENTIFIER_FIXUP_1371.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_1732.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1738;
    _RESERVED_IDENTIFIER_FIXUP_1738.x = _RESERVED_IDENTIFIER_FIXUP_1384.x;
    _RESERVED_IDENTIFIER_FIXUP_1738.y = _RESERVED_IDENTIFIER_FIXUP_1384.y;
    _RESERVED_IDENTIFIER_FIXUP_1738.z = _RESERVED_IDENTIFIER_FIXUP_1384.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1738.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_510 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_519;
    if (_RESERVED_IDENTIFIER_FIXUP_510)
    {
        _RESERVED_IDENTIFIER_FIXUP_519 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_519 = _RESERVED_IDENTIFIER_FIXUP_510;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_519)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_556 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1576.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_582 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410;
    if (_RESERVED_IDENTIFIER_FIXUP_556 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1410 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_556), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_582);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1410 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_582);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1410;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1355);
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
    r0 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB73 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB73.x;
    r2.y = hdB73.y;
    vec2 hdB96 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB96.x;
    r1.y = hdB96.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB120 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB120.x;
    r1.y = hdB120.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB140 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB140.x;
    r1.y = hdB140.y;
    vec4 hdB145 = r2;
    vec2 hdB151 = hdB145.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB151.x;
    r2.y = hdB151.y;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.w = r1.x;
    r0 += (-v5.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.y = r1.x + (-v5.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v4.xy;
    r1 = hdTex3(param_10);
    r2.x = min(r0.x, r1.w);
    vec2 param_11 = v2.xy;
    r0 = hdTex0(param_11);
    vec3 hdB263 = v0.xyz + v0.xyz;
    r2.y = hdB263.x;
    r2.z = hdB263.y;
    r2.w = hdB263.z;
    vec3 hdB274 = r0.xyz * r2.yzw;
    r3.x = hdB274.x;
    r3.y = hdB274.y;
    r3.z = hdB274.z;
    vec3 hdB285 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB285.x;
    r4.y = hdB285.y;
    r4.z = hdB285.z;
    vec4 hdB294 = r0;
    vec3 hdB302 = mix(r3.xyz, hdB294.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB302.x;
    r0.y = hdB302.y;
    r0.z = hdB302.z;
    vec2 param_12 = v3.xy;
    r3 = hdTex1(param_12);
    vec3 hdB318 = r2.yzw * r3.xyz;
    r5.x = hdB318.x;
    r5.y = hdB318.y;
    r5.z = hdB318.z;
    vec4 hdB327 = r3;
    vec3 hdB333 = mix(r5.xyz, hdB327.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r3.x = hdB333.x;
    r3.y = hdB333.y;
    r3.z = hdB333.z;
    r5 = mix(r0, r3, r1.xxxx);
    vec2 param_13 = v3.wz;
    r0 = hdTex2(param_13);
    vec3 hdB354 = r2.yzw * r0.xyz;
    r1.x = hdB354.x;
    r1.z = hdB354.y;
    r1.w = hdB354.z;
    vec4 hdB363 = r0;
    vec3 hdB369 = mix(r1.xzw, hdB363.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = hdB369.x;
    r0.y = hdB369.y;
    r0.z = hdB369.z;
    r3 = mix(r5, r0, r1.yyyy);
    vec3 hdB385 = r3.www * v1.xyz;
    r0.x = hdB385.x;
    r0.y = hdB385.y;
    r0.z = hdB385.z;
    vec4 hdB394 = r0;
    vec3 hdB396 = r2.xxx * hdB394.xyz;
    r0.x = hdB396.x;
    r0.y = hdB396.y;
    r0.z = hdB396.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB412 = r0;
    vec4 hdB415 = r0;
    vec3 hdB417 = (r3.xyz * hdB412.www) + hdB415.xyz;
    r0.x = hdB417.x;
    r0.y = hdB417.y;
    r0.z = hdB417.z;
    vec4 hdB424 = r0;
    vec3 hdB431 = hdB424.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB431.x;
    r0.y = hdB431.y;
    r0.z = hdB431.z;
    vec3 hdB446 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB446.x;
    oC0.y = hdB446.y;
    oC0.z = hdB446.z;
    oC0.w = 1.0;
    bool hdB458 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB466;
    if (hdB458)
    {
        hdB466 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB466 = hdB458;
    }
    if (hdB466)
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
    bool _1519 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1529;
    if (_1519)
    {
        _1529 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1529 = _1519;
    }
    if (_1529)
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
        bool _1554 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1569;
        if (!_1554)
        {
            _1569 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1569 = _1554;
        }
        if (_1569)
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
