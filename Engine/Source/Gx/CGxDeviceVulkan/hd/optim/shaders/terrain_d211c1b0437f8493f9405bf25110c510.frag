#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1478;
vec4 _RESERVED_IDENTIFIER_FIXUP_1479;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _91 = hdOverride >= 0;
    bool _100;
    if (_91)
    {
        _100 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _100 = _91;
    }
    vec4 _101;
    if (_100)
    {
        _101 = vec4(float(hdOverride));
    }
    else
    {
        _101 = value;
    }
    return _101;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _118 = hdOverride >= 0;
    bool _127;
    if (_118)
    {
        _127 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _127 = _118;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _145 = hdOverride >= 0;
    bool _155;
    if (_145)
    {
        _155 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _155 = _145;
    }
    vec4 _156;
    if (_155)
    {
        _156 = vec4(float(hdOverride));
    }
    else
    {
        _156 = value;
    }
    return _156;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _173 = hdOverride >= 0;
    bool _183;
    if (_173)
    {
        _183 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_580 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_583 = _RESERVED_IDENTIFIER_FIXUP_580.xy;
    float _RESERVED_IDENTIFIER_FIXUP_585 = _RESERVED_IDENTIFIER_FIXUP_580.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_583;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_585;
    vec4 _RESERVED_IDENTIFIER_FIXUP_586 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1220;
    _RESERVED_IDENTIFIER_FIXUP_1220.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_594 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1222;
    _RESERVED_IDENTIFIER_FIXUP_1222.x = _RESERVED_IDENTIFIER_FIXUP_594.x;
    _RESERVED_IDENTIFIER_FIXUP_1222.y = _RESERVED_IDENTIFIER_FIXUP_594.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_604 = _RESERVED_IDENTIFIER_FIXUP_1222.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_1220;
    _RESERVED_IDENTIFIER_FIXUP_1226.x = _RESERVED_IDENTIFIER_FIXUP_604.x;
    _RESERVED_IDENTIFIER_FIXUP_1226.y = _RESERVED_IDENTIFIER_FIXUP_604.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1226.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_586.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_627 = _RESERVED_IDENTIFIER_FIXUP_1222.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_1220;
    _RESERVED_IDENTIFIER_FIXUP_1238.x = _RESERVED_IDENTIFIER_FIXUP_627.x;
    _RESERVED_IDENTIFIER_FIXUP_1238.y = _RESERVED_IDENTIFIER_FIXUP_627.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1238.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_586.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_646 = _RESERVED_IDENTIFIER_FIXUP_1222.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1246;
    _RESERVED_IDENTIFIER_FIXUP_1246.x = _RESERVED_IDENTIFIER_FIXUP_646.x;
    _RESERVED_IDENTIFIER_FIXUP_1246.y = _RESERVED_IDENTIFIER_FIXUP_646.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_1222.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1250;
    _RESERVED_IDENTIFIER_FIXUP_1250.x = _RESERVED_IDENTIFIER_FIXUP_656.x;
    _RESERVED_IDENTIFIER_FIXUP_1250.y = _RESERVED_IDENTIFIER_FIXUP_656.y;
    _RESERVED_IDENTIFIER_FIXUP_1246.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1246.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_586.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1250.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_724 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_742 = hdTex4(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1250.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1296.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_724 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_586 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_742.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1301;
    _RESERVED_IDENTIFIER_FIXUP_1301.x = 1.0;
    vec2 param_11 = texcoord1.xy;
    vec2 param_12 = texcoord1.wz;
    vec2 param_13 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_796 = _RESERVED_IDENTIFIER_FIXUP_1301.xxx * mix(mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_11), _RESERVED_IDENTIFIER_FIXUP_742.xxxx), hdTex2(param_12), _RESERVED_IDENTIFIER_FIXUP_742.yyyy), hdTex3(param_13), _RESERVED_IDENTIFIER_FIXUP_742.zzzz).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_796.x;
    _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_796.y;
    _RESERVED_IDENTIFIER_FIXUP_1303.z = _RESERVED_IDENTIFIER_FIXUP_796.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1309;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1309.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1309.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_818 = _RESERVED_IDENTIFIER_FIXUP_1303.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1478).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315;
    _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_818.x;
    _RESERVED_IDENTIFIER_FIXUP_1315.y = _RESERVED_IDENTIFIER_FIXUP_818.y;
    _RESERVED_IDENTIFIER_FIXUP_1315.z = _RESERVED_IDENTIFIER_FIXUP_818.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_829 = _RESERVED_IDENTIFIER_FIXUP_1315.xyz + _RESERVED_IDENTIFIER_FIXUP_1315.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1321;
    _RESERVED_IDENTIFIER_FIXUP_1321.x = _RESERVED_IDENTIFIER_FIXUP_829.x;
    _RESERVED_IDENTIFIER_FIXUP_1321.y = _RESERVED_IDENTIFIER_FIXUP_829.y;
    _RESERVED_IDENTIFIER_FIXUP_1321.z = _RESERVED_IDENTIFIER_FIXUP_829.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_843 = (_RESERVED_IDENTIFIER_FIXUP_1309.xyz * _RESERVED_IDENTIFIER_FIXUP_1296.xxx) + _RESERVED_IDENTIFIER_FIXUP_1321.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1327;
    _RESERVED_IDENTIFIER_FIXUP_1327.x = _RESERVED_IDENTIFIER_FIXUP_843.x;
    _RESERVED_IDENTIFIER_FIXUP_1327.y = _RESERVED_IDENTIFIER_FIXUP_843.y;
    _RESERVED_IDENTIFIER_FIXUP_1327.z = _RESERVED_IDENTIFIER_FIXUP_843.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_856 = _RESERVED_IDENTIFIER_FIXUP_1327.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1333;
    _RESERVED_IDENTIFIER_FIXUP_1333.x = _RESERVED_IDENTIFIER_FIXUP_856.x;
    _RESERVED_IDENTIFIER_FIXUP_1333.y = _RESERVED_IDENTIFIER_FIXUP_856.y;
    _RESERVED_IDENTIFIER_FIXUP_1333.z = _RESERVED_IDENTIFIER_FIXUP_856.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_871 = _RESERVED_IDENTIFIER_FIXUP_1333.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1339;
    _RESERVED_IDENTIFIER_FIXUP_1339.x = _RESERVED_IDENTIFIER_FIXUP_871.x;
    _RESERVED_IDENTIFIER_FIXUP_1339.y = _RESERVED_IDENTIFIER_FIXUP_871.y;
    _RESERVED_IDENTIFIER_FIXUP_1339.z = _RESERVED_IDENTIFIER_FIXUP_871.z;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_583;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_585;
    vec4 _RESERVED_IDENTIFIER_FIXUP_913 = hdLod5(param_14, param_15);
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1226.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_913.y = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1238.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_913.z = hdLod5(param_18, param_19).x;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1246.xy;
    float param_21 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_913.w = hdLod5(param_20, param_21).x;
    vec2 param_22 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1069 = hdTex4(param_22);
    vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1250.xy;
    float param_24 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1074 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_724 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_913 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_23, param_24).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1069.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1426;
    _RESERVED_IDENTIFIER_FIXUP_1426.x = _RESERVED_IDENTIFIER_FIXUP_1074;
    float _RESERVED_IDENTIFIER_FIXUP_1079 = (_RESERVED_IDENTIFIER_FIXUP_1074 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1433;
    _RESERVED_IDENTIFIER_FIXUP_1433.x = _RESERVED_IDENTIFIER_FIXUP_1079;
    vec2 param_25 = texcoord1.xy;
    vec2 param_26 = texcoord1.wz;
    vec2 param_27 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1118 = mix(mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_25), _RESERVED_IDENTIFIER_FIXUP_1069.xxxx), hdTex2(param_26), _RESERVED_IDENTIFIER_FIXUP_1069.yyyy), hdTex3(param_27), _RESERVED_IDENTIFIER_FIXUP_1069.zzzz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_1433.xxx * _RESERVED_IDENTIFIER_FIXUP_1118.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1435;
    _RESERVED_IDENTIFIER_FIXUP_1435.x = _RESERVED_IDENTIFIER_FIXUP_1123.x;
    _RESERVED_IDENTIFIER_FIXUP_1435.y = _RESERVED_IDENTIFIER_FIXUP_1123.y;
    _RESERVED_IDENTIFIER_FIXUP_1435.z = _RESERVED_IDENTIFIER_FIXUP_1123.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1134 = _RESERVED_IDENTIFIER_FIXUP_1118.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1441;
    _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_1134.x;
    _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1134.y;
    _RESERVED_IDENTIFIER_FIXUP_1441.z = _RESERVED_IDENTIFIER_FIXUP_1134.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1145 = _RESERVED_IDENTIFIER_FIXUP_1435.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_1145.x;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_1145.y;
    _RESERVED_IDENTIFIER_FIXUP_1447.z = _RESERVED_IDENTIFIER_FIXUP_1145.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1156 = _RESERVED_IDENTIFIER_FIXUP_1447.xyz + _RESERVED_IDENTIFIER_FIXUP_1447.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1453;
    _RESERVED_IDENTIFIER_FIXUP_1453.x = _RESERVED_IDENTIFIER_FIXUP_1156.x;
    _RESERVED_IDENTIFIER_FIXUP_1453.y = _RESERVED_IDENTIFIER_FIXUP_1156.y;
    _RESERVED_IDENTIFIER_FIXUP_1453.z = _RESERVED_IDENTIFIER_FIXUP_1156.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1170 = (_RESERVED_IDENTIFIER_FIXUP_1441.xyz * _RESERVED_IDENTIFIER_FIXUP_1426.xxx) + _RESERVED_IDENTIFIER_FIXUP_1453.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1459;
    _RESERVED_IDENTIFIER_FIXUP_1459.x = _RESERVED_IDENTIFIER_FIXUP_1170.x;
    _RESERVED_IDENTIFIER_FIXUP_1459.y = _RESERVED_IDENTIFIER_FIXUP_1170.y;
    _RESERVED_IDENTIFIER_FIXUP_1459.z = _RESERVED_IDENTIFIER_FIXUP_1170.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_1459.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1465;
    _RESERVED_IDENTIFIER_FIXUP_1465.x = _RESERVED_IDENTIFIER_FIXUP_1183.x;
    _RESERVED_IDENTIFIER_FIXUP_1465.y = _RESERVED_IDENTIFIER_FIXUP_1183.y;
    _RESERVED_IDENTIFIER_FIXUP_1465.z = _RESERVED_IDENTIFIER_FIXUP_1183.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1465.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_444 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_453;
    if (_RESERVED_IDENTIFIER_FIXUP_444)
    {
        _RESERVED_IDENTIFIER_FIXUP_453 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_453 = _RESERVED_IDENTIFIER_FIXUP_444;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_453)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_490 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1339.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_517 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1209;
    if (_RESERVED_IDENTIFIER_FIXUP_490 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1209 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_490), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_517);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1209 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_517);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1209;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1079);
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
    vec2 param_10 = v4.wz;
    r1 = hdTex4(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r3 = OptTex0( v2.xyz);
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    r5 = mix(r3, r4, r1.xxxx);
    vec2 param_12 = v3.wz;
    r3 = hdTex2(param_12);
    r4 = mix(r5, r3, r1.yyyy);
    vec2 param_13 = v4.xy;
    r3 = hdTex3(param_13);
    r5 = mix(r4, r3, r1.zzzz);
    vec4 hdB299 = r0;
    vec3 hdB303 = hdB299.xxx * r5.xyz;
    r0.x = hdB303.x;
    r0.y = hdB303.y;
    r0.z = hdB303.z;
    vec3 hdB314 = r5.www * v1.xyz;
    r1.x = hdB314.x;
    r1.y = hdB314.y;
    r1.z = hdB314.z;
    vec4 hdB321 = r0;
    vec3 hdB325 = hdB321.xyz * v0.xyz;
    r0.x = hdB325.x;
    r0.y = hdB325.y;
    r0.z = hdB325.z;
    vec4 hdB332 = r0;
    vec4 hdB334 = r0;
    vec3 hdB336 = hdB332.xyz + hdB334.xyz;
    r0.x = hdB336.x;
    r0.y = hdB336.y;
    r0.z = hdB336.z;
    vec4 hdB348 = r0;
    vec3 hdB350 = (r1.xyz * r2.xxx) + hdB348.xyz;
    r0.x = hdB350.x;
    r0.y = hdB350.y;
    r0.z = hdB350.z;
    vec4 hdB357 = r0;
    vec3 hdB364 = hdB357.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB364.x;
    r0.y = hdB364.y;
    r0.z = hdB364.z;
    vec3 hdB379 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB379.x;
    oC0.y = hdB379.y;
    oC0.z = hdB379.z;
    oC0.w = 1.0;
    bool hdB392 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB400;
    if (hdB392)
    {
        hdB400 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB400 = hdB392;
    }
    if (hdB400)
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
    bool _1257 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1267;
    if (_1257)
    {
        _1267 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1267 = _1257;
    }
    if (_1267)
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
        bool _1292 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1307;
        if (!_1292)
        {
            _1307 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1307 = _1292;
        }
        if (_1307)
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
