#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1534;
vec4 _RESERVED_IDENTIFIER_FIXUP_1535;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _56 = hdOverride >= 0;
    bool _76;
    if (_56)
    {
        _76 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _76 = _56;
    }
    vec4 _77;
    if (_76)
    {
        _77 = vec4(float(hdOverride));
    }
    else
    {
        _77 = value;
    }
    return _77;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _94 = hdOverride >= 0;
    bool _103;
    if (_94)
    {
        _103 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _103 = _94;
    }
    vec4 _104;
    if (_103)
    {
        _104 = vec4(float(hdOverride));
    }
    else
    {
        _104 = value;
    }
    return _104;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _204 = hdOverride >= 0;
    bool _214;
    if (_204)
    {
        _214 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _176 = hdOverride >= 0;
    bool _186;
    if (_176)
    {
        _186 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _186 = _176;
    }
    vec4 _187;
    if (_186)
    {
        _187 = vec4(float(hdOverride));
    }
    else
    {
        _187 = value;
    }
    return _187;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _121 = hdOverride >= 0;
    bool _131;
    if (_121)
    {
        _131 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _131 = _121;
    }
    vec4 _132;
    if (_131)
    {
        _132 = vec4(float(hdOverride));
    }
    else
    {
        _132 = value;
    }
    return _132;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _149 = hdOverride >= 0;
    bool _158;
    if (_149)
    {
        _158 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _158 = _149;
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

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_594 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_597 = _RESERVED_IDENTIFIER_FIXUP_594.xy;
    float _RESERVED_IDENTIFIER_FIXUP_599 = _RESERVED_IDENTIFIER_FIXUP_594.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_597;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_599;
    vec4 _RESERVED_IDENTIFIER_FIXUP_600 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1266;
    _RESERVED_IDENTIFIER_FIXUP_1266.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_608 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1268;
    _RESERVED_IDENTIFIER_FIXUP_1268.x = _RESERVED_IDENTIFIER_FIXUP_608.x;
    _RESERVED_IDENTIFIER_FIXUP_1268.y = _RESERVED_IDENTIFIER_FIXUP_608.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_618 = _RESERVED_IDENTIFIER_FIXUP_1268.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_1266;
    _RESERVED_IDENTIFIER_FIXUP_1272.x = _RESERVED_IDENTIFIER_FIXUP_618.x;
    _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_618.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1272.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_600.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_1268.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1284 = _RESERVED_IDENTIFIER_FIXUP_1266;
    _RESERVED_IDENTIFIER_FIXUP_1284.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
    _RESERVED_IDENTIFIER_FIXUP_1284.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1284.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_600.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_660 = _RESERVED_IDENTIFIER_FIXUP_1268.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1292;
    _RESERVED_IDENTIFIER_FIXUP_1292.x = _RESERVED_IDENTIFIER_FIXUP_660.x;
    _RESERVED_IDENTIFIER_FIXUP_1292.y = _RESERVED_IDENTIFIER_FIXUP_660.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_670 = _RESERVED_IDENTIFIER_FIXUP_1268.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1296.x = _RESERVED_IDENTIFIER_FIXUP_670.x;
    _RESERVED_IDENTIFIER_FIXUP_1296.y = _RESERVED_IDENTIFIER_FIXUP_670.y;
    _RESERVED_IDENTIFIER_FIXUP_1292.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1292.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_600.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1296.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_738 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_756 = hdTex4(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1296.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1342;
    _RESERVED_IDENTIFIER_FIXUP_1342.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_738 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_600 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_756.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347;
    _RESERVED_IDENTIFIER_FIXUP_1347.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_782 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_756.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_782;
    _RESERVED_IDENTIFIER_FIXUP_1347.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_782;
    vec2 param_11 = texcoord2.xy;
    vec2 param_12 = texcoord1.wz;
    vec2 param_13 = texcoord0.xy;
    vec2 param_14 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_827 = _RESERVED_IDENTIFIER_FIXUP_1347.xxx * ((hdTex3(param_11) * _RESERVED_IDENTIFIER_FIXUP_756.zzzz) + ((hdTex2(param_12) * _RESERVED_IDENTIFIER_FIXUP_756.yyyy) + ((hdTex0(param_13) * _RESERVED_IDENTIFIER_FIXUP_1347.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_756.xxxx * hdTex1(param_14))))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1354;
    _RESERVED_IDENTIFIER_FIXUP_1354.x = _RESERVED_IDENTIFIER_FIXUP_827.x;
    _RESERVED_IDENTIFIER_FIXUP_1354.y = _RESERVED_IDENTIFIER_FIXUP_827.y;
    _RESERVED_IDENTIFIER_FIXUP_1354.z = _RESERVED_IDENTIFIER_FIXUP_827.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1360;
    _RESERVED_IDENTIFIER_FIXUP_1360.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1360.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1360.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_849 = _RESERVED_IDENTIFIER_FIXUP_1354.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1534).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1366;
    _RESERVED_IDENTIFIER_FIXUP_1366.x = _RESERVED_IDENTIFIER_FIXUP_849.x;
    _RESERVED_IDENTIFIER_FIXUP_1366.y = _RESERVED_IDENTIFIER_FIXUP_849.y;
    _RESERVED_IDENTIFIER_FIXUP_1366.z = _RESERVED_IDENTIFIER_FIXUP_849.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_860 = _RESERVED_IDENTIFIER_FIXUP_1366.xyz + _RESERVED_IDENTIFIER_FIXUP_1366.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1372;
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_860.x;
    _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_860.y;
    _RESERVED_IDENTIFIER_FIXUP_1372.z = _RESERVED_IDENTIFIER_FIXUP_860.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_874 = (_RESERVED_IDENTIFIER_FIXUP_1360.xyz * _RESERVED_IDENTIFIER_FIXUP_1342.xxx) + _RESERVED_IDENTIFIER_FIXUP_1372.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378;
    _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_874.x;
    _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_874.y;
    _RESERVED_IDENTIFIER_FIXUP_1378.z = _RESERVED_IDENTIFIER_FIXUP_874.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_887 = _RESERVED_IDENTIFIER_FIXUP_1378.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = _RESERVED_IDENTIFIER_FIXUP_887.x;
    _RESERVED_IDENTIFIER_FIXUP_1384.y = _RESERVED_IDENTIFIER_FIXUP_887.y;
    _RESERVED_IDENTIFIER_FIXUP_1384.z = _RESERVED_IDENTIFIER_FIXUP_887.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_902 = _RESERVED_IDENTIFIER_FIXUP_1384.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1390;
    _RESERVED_IDENTIFIER_FIXUP_1390.x = _RESERVED_IDENTIFIER_FIXUP_902.x;
    _RESERVED_IDENTIFIER_FIXUP_1390.y = _RESERVED_IDENTIFIER_FIXUP_902.y;
    _RESERVED_IDENTIFIER_FIXUP_1390.z = _RESERVED_IDENTIFIER_FIXUP_902.z;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_597;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_599;
    vec4 _RESERVED_IDENTIFIER_FIXUP_943 = hdLod5(param_15, param_16);
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1272.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_943.y = hdLod5(param_17, param_18).x;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1284.xy;
    float param_20 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_943.z = hdLod5(param_19, param_20).x;
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1292.xy;
    float param_22 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_943.w = hdLod5(param_21, param_22).x;
    vec2 param_23 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1099 = hdTex4(param_23);
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1296.xy;
    float param_25 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1104 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_738 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_943 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_24, param_25).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1099.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1477;
    _RESERVED_IDENTIFIER_FIXUP_1477.x = _RESERVED_IDENTIFIER_FIXUP_1104;
    float _RESERVED_IDENTIFIER_FIXUP_1109 = (_RESERVED_IDENTIFIER_FIXUP_1104 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1484;
    _RESERVED_IDENTIFIER_FIXUP_1484.x = _RESERVED_IDENTIFIER_FIXUP_1109;
    float _RESERVED_IDENTIFIER_FIXUP_1125 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1099.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1484.y = _RESERVED_IDENTIFIER_FIXUP_1125;
    _RESERVED_IDENTIFIER_FIXUP_1484.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1125;
    vec2 param_26 = texcoord2.xy;
    vec2 param_27 = texcoord1.wz;
    vec2 param_28 = texcoord0.xy;
    vec2 param_29 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1165 = (hdTex3(param_26) * _RESERVED_IDENTIFIER_FIXUP_1099.zzzz) + ((hdTex2(param_27) * _RESERVED_IDENTIFIER_FIXUP_1099.yyyy) + ((hdTex0(param_28) * _RESERVED_IDENTIFIER_FIXUP_1484.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1099.xxxx * hdTex1(param_29))));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1170 = _RESERVED_IDENTIFIER_FIXUP_1484.xxx * _RESERVED_IDENTIFIER_FIXUP_1165.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1491;
    _RESERVED_IDENTIFIER_FIXUP_1491.x = _RESERVED_IDENTIFIER_FIXUP_1170.x;
    _RESERVED_IDENTIFIER_FIXUP_1491.y = _RESERVED_IDENTIFIER_FIXUP_1170.y;
    _RESERVED_IDENTIFIER_FIXUP_1491.z = _RESERVED_IDENTIFIER_FIXUP_1170.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_1165.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1497;
    _RESERVED_IDENTIFIER_FIXUP_1497.x = _RESERVED_IDENTIFIER_FIXUP_1181.x;
    _RESERVED_IDENTIFIER_FIXUP_1497.y = _RESERVED_IDENTIFIER_FIXUP_1181.y;
    _RESERVED_IDENTIFIER_FIXUP_1497.z = _RESERVED_IDENTIFIER_FIXUP_1181.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1192 = _RESERVED_IDENTIFIER_FIXUP_1491.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1503;
    _RESERVED_IDENTIFIER_FIXUP_1503.x = _RESERVED_IDENTIFIER_FIXUP_1192.x;
    _RESERVED_IDENTIFIER_FIXUP_1503.y = _RESERVED_IDENTIFIER_FIXUP_1192.y;
    _RESERVED_IDENTIFIER_FIXUP_1503.z = _RESERVED_IDENTIFIER_FIXUP_1192.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1203 = _RESERVED_IDENTIFIER_FIXUP_1503.xyz + _RESERVED_IDENTIFIER_FIXUP_1503.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1509;
    _RESERVED_IDENTIFIER_FIXUP_1509.x = _RESERVED_IDENTIFIER_FIXUP_1203.x;
    _RESERVED_IDENTIFIER_FIXUP_1509.y = _RESERVED_IDENTIFIER_FIXUP_1203.y;
    _RESERVED_IDENTIFIER_FIXUP_1509.z = _RESERVED_IDENTIFIER_FIXUP_1203.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1217 = (_RESERVED_IDENTIFIER_FIXUP_1497.xyz * _RESERVED_IDENTIFIER_FIXUP_1477.xxx) + _RESERVED_IDENTIFIER_FIXUP_1509.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1515;
    _RESERVED_IDENTIFIER_FIXUP_1515.x = _RESERVED_IDENTIFIER_FIXUP_1217.x;
    _RESERVED_IDENTIFIER_FIXUP_1515.y = _RESERVED_IDENTIFIER_FIXUP_1217.y;
    _RESERVED_IDENTIFIER_FIXUP_1515.z = _RESERVED_IDENTIFIER_FIXUP_1217.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_1515.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1521;
    _RESERVED_IDENTIFIER_FIXUP_1521.x = _RESERVED_IDENTIFIER_FIXUP_1230.x;
    _RESERVED_IDENTIFIER_FIXUP_1521.y = _RESERVED_IDENTIFIER_FIXUP_1230.y;
    _RESERVED_IDENTIFIER_FIXUP_1521.z = _RESERVED_IDENTIFIER_FIXUP_1230.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1521.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_458 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_467;
    if (_RESERVED_IDENTIFIER_FIXUP_458)
    {
        _RESERVED_IDENTIFIER_FIXUP_467 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_467 = _RESERVED_IDENTIFIER_FIXUP_458;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_467)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_504 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1390.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_531 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1256;
    if (_RESERVED_IDENTIFIER_FIXUP_504 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1256 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_504), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_531);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1256 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_531);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1256;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1109);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
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
    vec2 hdB72 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB72.x;
    r2.y = hdB72.y;
    vec2 hdB95 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB95.x;
    r1.y = hdB95.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB119 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB119.x;
    r1.y = hdB119.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB139 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB139.x;
    r1.y = hdB139.y;
    vec4 hdB144 = r2;
    vec2 hdB150 = hdB144.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB150.x;
    r2.y = hdB150.y;
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
    vec2 param_11 = v2.xy;
    r3 = hdTex0(param_11);
    r0.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.y = (-r0.y) + 1.0;
    vec2 param_12 = v3.xy;
    r4 = hdTex1(param_12);
    r4 = r1.xxxx * r4;
    r3 = (r3 * r0.yyyy) + r4;
    vec2 param_13 = v3.wz;
    r4 = hdTex2(param_13);
    r3 = (r4 * r1.yyyy) + r3;
    vec2 param_14 = v4.xy;
    r4 = hdTex3(param_14);
    r1 = (r4 * r1.zzzz) + r3;
    vec4 hdB313 = r0;
    vec3 hdB317 = hdB313.xxx * r1.xyz;
    r0.x = hdB317.x;
    r0.y = hdB317.y;
    r0.z = hdB317.z;
    vec4 hdB324 = r1;
    vec3 hdB328 = hdB324.www * v1.xyz;
    r1.x = hdB328.x;
    r1.y = hdB328.y;
    r1.z = hdB328.z;
    vec4 hdB335 = r0;
    vec3 hdB339 = hdB335.xyz * v0.xyz;
    r0.x = hdB339.x;
    r0.y = hdB339.y;
    r0.z = hdB339.z;
    vec4 hdB346 = r0;
    vec4 hdB348 = r0;
    vec3 hdB350 = hdB346.xyz + hdB348.xyz;
    r0.x = hdB350.x;
    r0.y = hdB350.y;
    r0.z = hdB350.z;
    vec4 hdB362 = r0;
    vec3 hdB364 = (r1.xyz * r2.xxx) + hdB362.xyz;
    r0.x = hdB364.x;
    r0.y = hdB364.y;
    r0.z = hdB364.z;
    vec4 hdB371 = r0;
    vec3 hdB378 = hdB371.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB378.x;
    r0.y = hdB378.y;
    r0.z = hdB378.z;
    vec3 hdB393 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB393.x;
    oC0.y = hdB393.y;
    oC0.z = hdB393.z;
    oC0.w = 1.0;
    bool hdB406 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB414;
    if (hdB406)
    {
        hdB414 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB414 = hdB406;
    }
    if (hdB414)
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
    bool _1334 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1344;
    if (_1334)
    {
        _1344 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1344 = _1334;
    }
    if (_1344)
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
        bool _1369 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1384;
        if (!_1369)
        {
            _1384 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1384 = _1369;
        }
        if (_1384)
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
