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
float _RESERVED_IDENTIFIER_FIXUP_1515;
vec4 _RESERVED_IDENTIFIER_FIXUP_1516;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_591 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_594 = _RESERVED_IDENTIFIER_FIXUP_591.xy;
    float _RESERVED_IDENTIFIER_FIXUP_596 = _RESERVED_IDENTIFIER_FIXUP_591.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_594;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_596;
    vec4 _RESERVED_IDENTIFIER_FIXUP_597 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_600 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_604 = _RESERVED_IDENTIFIER_FIXUP_600.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1259;
    _RESERVED_IDENTIFIER_FIXUP_1259.w = _RESERVED_IDENTIFIER_FIXUP_604;
    vec2 _RESERVED_IDENTIFIER_FIXUP_608 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_610 = _RESERVED_IDENTIFIER_FIXUP_608.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_597;
    _RESERVED_IDENTIFIER_FIXUP_1261.y = _RESERVED_IDENTIFIER_FIXUP_610;
    float _RESERVED_IDENTIFIER_FIXUP_612 = _RESERVED_IDENTIFIER_FIXUP_608.y;
    _RESERVED_IDENTIFIER_FIXUP_1261.z = _RESERVED_IDENTIFIER_FIXUP_612;
    vec2 _RESERVED_IDENTIFIER_FIXUP_618 = _RESERVED_IDENTIFIER_FIXUP_1261.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1259;
    _RESERVED_IDENTIFIER_FIXUP_1265.x = _RESERVED_IDENTIFIER_FIXUP_618.x;
    _RESERVED_IDENTIFIER_FIXUP_1265.y = _RESERVED_IDENTIFIER_FIXUP_618.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1265.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_604;
    float _RESERVED_IDENTIFIER_FIXUP_633 = _RESERVED_IDENTIFIER_FIXUP_597.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1261.x = _RESERVED_IDENTIFIER_FIXUP_633;
    vec2 _RESERVED_IDENTIFIER_FIXUP_647 = _RESERVED_IDENTIFIER_FIXUP_1261.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278 = _RESERVED_IDENTIFIER_FIXUP_1259;
    _RESERVED_IDENTIFIER_FIXUP_1278.x = _RESERVED_IDENTIFIER_FIXUP_647.x;
    _RESERVED_IDENTIFIER_FIXUP_1278.y = _RESERVED_IDENTIFIER_FIXUP_647.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1278.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_604;
    float _RESERVED_IDENTIFIER_FIXUP_662 = _RESERVED_IDENTIFIER_FIXUP_633 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1261.x = _RESERVED_IDENTIFIER_FIXUP_662;
    vec2 _RESERVED_IDENTIFIER_FIXUP_669 = _RESERVED_IDENTIFIER_FIXUP_1261.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287;
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_669.x;
    _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_669.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_679 = _RESERVED_IDENTIFIER_FIXUP_1261.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291;
    _RESERVED_IDENTIFIER_FIXUP_1291.x = _RESERVED_IDENTIFIER_FIXUP_679.x;
    _RESERVED_IDENTIFIER_FIXUP_1291.y = _RESERVED_IDENTIFIER_FIXUP_679.y;
    _RESERVED_IDENTIFIER_FIXUP_1287.w = _RESERVED_IDENTIFIER_FIXUP_604;
    _RESERVED_IDENTIFIER_FIXUP_1291.w = _RESERVED_IDENTIFIER_FIXUP_604;
    float _RESERVED_IDENTIFIER_FIXUP_733 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_751 = hdTex4(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1287.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_604;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1291.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_604;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1329;
    _RESERVED_IDENTIFIER_FIXUP_1329.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_733 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_662 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_751.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1334;
    _RESERVED_IDENTIFIER_FIXUP_1334.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_777 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_751.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1334.y = _RESERVED_IDENTIFIER_FIXUP_777;
    _RESERVED_IDENTIFIER_FIXUP_1334.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_777;
    vec2 param_11 = texcoord2.xy;
    vec2 param_12 = texcoord1.wz;
    vec2 param_13 = texcoord0.xy;
    vec2 param_14 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_822 = _RESERVED_IDENTIFIER_FIXUP_1334.xxx * ((hdTex3(param_11) * _RESERVED_IDENTIFIER_FIXUP_751.zzzz) + ((hdTex2(param_12) * _RESERVED_IDENTIFIER_FIXUP_751.yyyy) + ((hdTex0(param_13) * _RESERVED_IDENTIFIER_FIXUP_1334.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_751.xxxx * hdTex1(param_14))))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_822.x;
    _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_822.y;
    _RESERVED_IDENTIFIER_FIXUP_1341.z = _RESERVED_IDENTIFIER_FIXUP_822.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347;
    _RESERVED_IDENTIFIER_FIXUP_1347.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1347.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1347.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_844 = _RESERVED_IDENTIFIER_FIXUP_1341.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1515).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1353;
    _RESERVED_IDENTIFIER_FIXUP_1353.x = _RESERVED_IDENTIFIER_FIXUP_844.x;
    _RESERVED_IDENTIFIER_FIXUP_1353.y = _RESERVED_IDENTIFIER_FIXUP_844.y;
    _RESERVED_IDENTIFIER_FIXUP_1353.z = _RESERVED_IDENTIFIER_FIXUP_844.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_855 = _RESERVED_IDENTIFIER_FIXUP_1353.xyz + _RESERVED_IDENTIFIER_FIXUP_1353.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1359;
    _RESERVED_IDENTIFIER_FIXUP_1359.x = _RESERVED_IDENTIFIER_FIXUP_855.x;
    _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_855.y;
    _RESERVED_IDENTIFIER_FIXUP_1359.z = _RESERVED_IDENTIFIER_FIXUP_855.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_869 = (_RESERVED_IDENTIFIER_FIXUP_1347.xyz * _RESERVED_IDENTIFIER_FIXUP_1329.xxx) + _RESERVED_IDENTIFIER_FIXUP_1359.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1365;
    _RESERVED_IDENTIFIER_FIXUP_1365.x = _RESERVED_IDENTIFIER_FIXUP_869.x;
    _RESERVED_IDENTIFIER_FIXUP_1365.y = _RESERVED_IDENTIFIER_FIXUP_869.y;
    _RESERVED_IDENTIFIER_FIXUP_1365.z = _RESERVED_IDENTIFIER_FIXUP_869.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_882 = _RESERVED_IDENTIFIER_FIXUP_1365.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1371;
    _RESERVED_IDENTIFIER_FIXUP_1371.x = _RESERVED_IDENTIFIER_FIXUP_882.x;
    _RESERVED_IDENTIFIER_FIXUP_1371.y = _RESERVED_IDENTIFIER_FIXUP_882.y;
    _RESERVED_IDENTIFIER_FIXUP_1371.z = _RESERVED_IDENTIFIER_FIXUP_882.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_897 = _RESERVED_IDENTIFIER_FIXUP_1371.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1377;
    _RESERVED_IDENTIFIER_FIXUP_1377.x = _RESERVED_IDENTIFIER_FIXUP_897.x;
    _RESERVED_IDENTIFIER_FIXUP_1377.y = _RESERVED_IDENTIFIER_FIXUP_897.y;
    _RESERVED_IDENTIFIER_FIXUP_1377.z = _RESERVED_IDENTIFIER_FIXUP_897.z;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_594;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_596;
    vec4 _RESERVED_IDENTIFIER_FIXUP_938 = hdLod5(param_15, param_16);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1390 = _RESERVED_IDENTIFIER_FIXUP_938;
    _RESERVED_IDENTIFIER_FIXUP_1390.y = _RESERVED_IDENTIFIER_FIXUP_610;
    _RESERVED_IDENTIFIER_FIXUP_1390.z = _RESERVED_IDENTIFIER_FIXUP_612;
    vec2 _RESERVED_IDENTIFIER_FIXUP_959 = _RESERVED_IDENTIFIER_FIXUP_1390.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1394 = _RESERVED_IDENTIFIER_FIXUP_1259;
    _RESERVED_IDENTIFIER_FIXUP_1394.x = _RESERVED_IDENTIFIER_FIXUP_959.x;
    _RESERVED_IDENTIFIER_FIXUP_1394.y = _RESERVED_IDENTIFIER_FIXUP_959.y;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1394.xy;
    float param_18 = _RESERVED_IDENTIFIER_FIXUP_604;
    float _RESERVED_IDENTIFIER_FIXUP_974 = _RESERVED_IDENTIFIER_FIXUP_938.x + hdLod5(param_17, param_18).x;
    _RESERVED_IDENTIFIER_FIXUP_1390.x = _RESERVED_IDENTIFIER_FIXUP_974;
    vec2 _RESERVED_IDENTIFIER_FIXUP_988 = _RESERVED_IDENTIFIER_FIXUP_1390.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_1259;
    _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_988.x;
    _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_988.y;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1407.xy;
    float param_20 = _RESERVED_IDENTIFIER_FIXUP_604;
    float _RESERVED_IDENTIFIER_FIXUP_1003 = _RESERVED_IDENTIFIER_FIXUP_974 + hdLod5(param_19, param_20).x;
    _RESERVED_IDENTIFIER_FIXUP_1390.x = _RESERVED_IDENTIFIER_FIXUP_1003;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1010 = _RESERVED_IDENTIFIER_FIXUP_1390.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1416;
    _RESERVED_IDENTIFIER_FIXUP_1416.x = _RESERVED_IDENTIFIER_FIXUP_1010.x;
    _RESERVED_IDENTIFIER_FIXUP_1416.y = _RESERVED_IDENTIFIER_FIXUP_1010.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1020 = _RESERVED_IDENTIFIER_FIXUP_1390.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1420;
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_1020.x;
    _RESERVED_IDENTIFIER_FIXUP_1420.y = _RESERVED_IDENTIFIER_FIXUP_1020.y;
    _RESERVED_IDENTIFIER_FIXUP_1416.w = _RESERVED_IDENTIFIER_FIXUP_604;
    _RESERVED_IDENTIFIER_FIXUP_1420.w = _RESERVED_IDENTIFIER_FIXUP_604;
    vec2 param_21 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1092 = hdTex4(param_21);
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1416.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_604;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1420.xy;
    float param_25 = _RESERVED_IDENTIFIER_FIXUP_604;
    float _RESERVED_IDENTIFIER_FIXUP_1097 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_733 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_1003 + hdLod5(param_22, param_23).x) + hdLod5(param_24, param_25).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1092.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1458;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_1097;
    float _RESERVED_IDENTIFIER_FIXUP_1102 = (_RESERVED_IDENTIFIER_FIXUP_1097 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1465;
    _RESERVED_IDENTIFIER_FIXUP_1465.x = _RESERVED_IDENTIFIER_FIXUP_1102;
    float _RESERVED_IDENTIFIER_FIXUP_1118 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1092.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1465.y = _RESERVED_IDENTIFIER_FIXUP_1118;
    _RESERVED_IDENTIFIER_FIXUP_1465.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1118;
    vec2 param_26 = texcoord2.xy;
    vec2 param_27 = texcoord1.wz;
    vec2 param_28 = texcoord0.xy;
    vec2 param_29 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1158 = (hdTex3(param_26) * _RESERVED_IDENTIFIER_FIXUP_1092.zzzz) + ((hdTex2(param_27) * _RESERVED_IDENTIFIER_FIXUP_1092.yyyy) + ((hdTex0(param_28) * _RESERVED_IDENTIFIER_FIXUP_1465.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1092.xxxx * hdTex1(param_29))));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1163 = _RESERVED_IDENTIFIER_FIXUP_1465.xxx * _RESERVED_IDENTIFIER_FIXUP_1158.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1472;
    _RESERVED_IDENTIFIER_FIXUP_1472.x = _RESERVED_IDENTIFIER_FIXUP_1163.x;
    _RESERVED_IDENTIFIER_FIXUP_1472.y = _RESERVED_IDENTIFIER_FIXUP_1163.y;
    _RESERVED_IDENTIFIER_FIXUP_1472.z = _RESERVED_IDENTIFIER_FIXUP_1163.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1158.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1478;
    _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_1174.x;
    _RESERVED_IDENTIFIER_FIXUP_1478.y = _RESERVED_IDENTIFIER_FIXUP_1174.y;
    _RESERVED_IDENTIFIER_FIXUP_1478.z = _RESERVED_IDENTIFIER_FIXUP_1174.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_1472.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1484;
    _RESERVED_IDENTIFIER_FIXUP_1484.x = _RESERVED_IDENTIFIER_FIXUP_1185.x;
    _RESERVED_IDENTIFIER_FIXUP_1484.y = _RESERVED_IDENTIFIER_FIXUP_1185.y;
    _RESERVED_IDENTIFIER_FIXUP_1484.z = _RESERVED_IDENTIFIER_FIXUP_1185.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1196 = _RESERVED_IDENTIFIER_FIXUP_1484.xyz + _RESERVED_IDENTIFIER_FIXUP_1484.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1490;
    _RESERVED_IDENTIFIER_FIXUP_1490.x = _RESERVED_IDENTIFIER_FIXUP_1196.x;
    _RESERVED_IDENTIFIER_FIXUP_1490.y = _RESERVED_IDENTIFIER_FIXUP_1196.y;
    _RESERVED_IDENTIFIER_FIXUP_1490.z = _RESERVED_IDENTIFIER_FIXUP_1196.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1210 = (_RESERVED_IDENTIFIER_FIXUP_1478.xyz * _RESERVED_IDENTIFIER_FIXUP_1458.xxx) + _RESERVED_IDENTIFIER_FIXUP_1490.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1496;
    _RESERVED_IDENTIFIER_FIXUP_1496.x = _RESERVED_IDENTIFIER_FIXUP_1210.x;
    _RESERVED_IDENTIFIER_FIXUP_1496.y = _RESERVED_IDENTIFIER_FIXUP_1210.y;
    _RESERVED_IDENTIFIER_FIXUP_1496.z = _RESERVED_IDENTIFIER_FIXUP_1210.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1496.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1502;
    _RESERVED_IDENTIFIER_FIXUP_1502.x = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_1502.z = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1502.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_455 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_464;
    if (_RESERVED_IDENTIFIER_FIXUP_455)
    {
        _RESERVED_IDENTIFIER_FIXUP_464 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_464 = _RESERVED_IDENTIFIER_FIXUP_455;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_464)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_501 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1377.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_528 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1249;
    if (_RESERVED_IDENTIFIER_FIXUP_501 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1249 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_501), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_528);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1249 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_528);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1249;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1102);
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
    r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB67 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB67.x;
    r1.w = hdB67.y;
    vec2 hdB77 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB77.x;
    r0.z = hdB77.y;
    vec2 hdB99 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB99.x;
    r1.y = hdB99.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB119 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB119.x;
    r1.w = hdB119.y;
    vec2 hdB130 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB130.x;
    r1.y = hdB130.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB153 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB153.x;
    r1.y = hdB153.y;
    vec2 hdB164 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB164.x;
    r2.y = hdB164.y;
    vec2 hdB171 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB171.x;
    r1.w = hdB171.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB190 = vec2(1.0, 0.0) * v5.zx;
    r2.z = hdB190.x;
    r2.w = hdB190.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
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
    vec4 hdB309 = r0;
    vec3 hdB313 = hdB309.xxx * r1.xyz;
    r0.x = hdB313.x;
    r0.y = hdB313.y;
    r0.z = hdB313.z;
    vec4 hdB320 = r1;
    vec3 hdB324 = hdB320.www * v1.xyz;
    r1.x = hdB324.x;
    r1.y = hdB324.y;
    r1.z = hdB324.z;
    vec4 hdB331 = r0;
    vec3 hdB335 = hdB331.xyz * v0.xyz;
    r0.x = hdB335.x;
    r0.y = hdB335.y;
    r0.z = hdB335.z;
    vec4 hdB342 = r0;
    vec4 hdB344 = r0;
    vec3 hdB346 = hdB342.xyz + hdB344.xyz;
    r0.x = hdB346.x;
    r0.y = hdB346.y;
    r0.z = hdB346.z;
    vec4 hdB358 = r0;
    vec3 hdB360 = (r1.xyz * r2.xxx) + hdB358.xyz;
    r0.x = hdB360.x;
    r0.y = hdB360.y;
    r0.z = hdB360.z;
    vec4 hdB367 = r0;
    vec3 hdB374 = hdB367.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB374.x;
    r0.y = hdB374.y;
    r0.z = hdB374.z;
    vec3 hdB389 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB389.x;
    oC0.y = hdB389.y;
    oC0.z = hdB389.z;
    oC0.w = 1.0;
    bool hdB403 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB411;
    if (hdB403)
    {
        hdB411 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB411 = hdB403;
    }
    if (hdB411)
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
    bool _1437 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1447;
    if (_1437)
    {
        _1447 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1447 = _1437;
    }
    if (_1447)
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
        bool _1472 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1487;
        if (!_1472)
        {
            _1487 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1487 = _1472;
        }
        if (_1487)
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
