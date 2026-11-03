#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 6) in vec4 texcoord4;
layout(location = 7) in vec4 texcoord5;
layout(location = 8) in vec4 texcoord6;
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
float _RESERVED_IDENTIFIER_FIXUP_4279;
vec4 _RESERVED_IDENTIFIER_FIXUP_4280;


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
vec4 OptTex6Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s6[0],uv,dx,dy);if(optTile==1u)return textureGrad(s6[1],uv,dx,dy);if(optTile==2u)return textureGrad(s6[2],uv,dx,dy);return textureGrad(s6[3],uv,dx,dy);}
vec4 OptTex6(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex6Grad(uv,dx,dy);}
vec4 OptTex6(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex6Grad(uv,dx,dy);}
vec4 OptTex6Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s6[0],uv,lod);if(optTile==1u)return textureLod(s6[1],uv,lod);if(optTile==2u)return textureLod(s6[2],uv,lod);return textureLod(s6[3],uv,lod);}
vec4 OptTex7Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s7[0],uv,dx,dy);if(optTile==1u)return textureGrad(s7[1],uv,dx,dy);if(optTile==2u)return textureGrad(s7[2],uv,dx,dy);return textureGrad(s7[3],uv,dx,dy);}
vec4 OptTex7(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex7Grad(uv,dx,dy);}
vec4 OptTex7(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex7Grad(uv,dx,dy);}
vec4 OptTex7Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s7[0],uv,lod);if(optTile==1u)return textureLod(s7[1],uv,lod);if(optTile==2u)return textureLod(s7[2],uv,lod);return textureLod(s7[3],uv,lod);}
vec4 OptTex8Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s8[0],uv,dx,dy);if(optTile==1u)return textureGrad(s8[1],uv,dx,dy);if(optTile==2u)return textureGrad(s8[2],uv,dx,dy);return textureGrad(s8[3],uv,dx,dy);}
vec4 OptTex8(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex8Grad(uv,dx,dy);}
vec4 OptTex8(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex8Grad(uv,dx,dy);}
vec4 OptTex8Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s8[0],uv,lod);if(optTile==1u)return textureLod(s8[1],uv,lod);if(optTile==2u)return textureLod(s8[2],uv,lod);return textureLod(s8[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _64 = hdOverride >= 0;
    bool _83;
    if (_64)
    {
        _83 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _83 = _64;
    }
    vec4 _84;
    if (_83)
    {
        _84 = vec4(float(hdOverride));
    }
    else
    {
        _84 = value;
    }
    return _84;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _101 = hdOverride >= 0;
    bool _111;
    if (_101)
    {
        _111 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _111 = _101;
    }
    vec4 _112;
    if (_111)
    {
        _112 = vec4(float(hdOverride));
    }
    else
    {
        _112 = value;
    }
    return _112;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _129 = hdOverride >= 0;
    bool _139;
    if (_129)
    {
        _139 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _139 = _129;
    }
    vec4 _140;
    if (_139)
    {
        _140 = vec4(float(hdOverride));
    }
    else
    {
        _140 = value;
    }
    return _140;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _157 = hdOverride >= 0;
    bool _166;
    if (_157)
    {
        _166 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _166 = _157;
    }
    vec4 _167;
    if (_166)
    {
        _167 = vec4(float(hdOverride));
    }
    else
    {
        _167 = value;
    }
    return _167;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _185 = hdOverride >= 0;
    bool _195;
    if (_185)
    {
        _195 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _195 = _185;
    }
    vec4 _196;
    if (_195)
    {
        _196 = vec4(float(hdOverride));
    }
    else
    {
        _196 = value;
    }
    return _196;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _214 = hdOverride >= 0;
    bool _224;
    if (_214)
    {
        _224 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _224 = _214;
    }
    vec4 _225;
    if (_224)
    {
        _225 = vec4(float(hdOverride));
    }
    else
    {
        _225 = value;
    }
    return _225;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _243 = hdOverride >= 0;
    bool _253;
    if (_243)
    {
        _253 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _253 = _243;
    }
    vec4 _254;
    if (_253)
    {
        _254 = vec4(float(hdOverride));
    }
    else
    {
        _254 = value;
    }
    return _254;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _272 = hdOverride >= 0;
    bool _282;
    if (_272)
    {
        _282 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _282 = _272;
    }
    vec4 _283;
    if (_282)
    {
        _283 = vec4(float(hdOverride));
    }
    else
    {
        _283 = value;
    }
    return _283;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1307 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1311 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1319 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1323 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1326 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1328 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4279).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1331 = _RESERVED_IDENTIFIER_FIXUP_1328 + _RESERVED_IDENTIFIER_FIXUP_1328;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3370 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3370.x = _RESERVED_IDENTIFIER_FIXUP_1331.x;
    _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_1331.y;
    _RESERVED_IDENTIFIER_FIXUP_3370.z = _RESERVED_IDENTIFIER_FIXUP_1331.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_1307.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_1339 * _RESERVED_IDENTIFIER_FIXUP_3370.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3376 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3376.x = _RESERVED_IDENTIFIER_FIXUP_1342.x;
    _RESERVED_IDENTIFIER_FIXUP_3376.y = _RESERVED_IDENTIFIER_FIXUP_1342.y;
    _RESERVED_IDENTIFIER_FIXUP_3376.z = _RESERVED_IDENTIFIER_FIXUP_1342.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1356 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1326.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1357 = mix(_RESERVED_IDENTIFIER_FIXUP_3376.xyz, _RESERVED_IDENTIFIER_FIXUP_1339, _RESERVED_IDENTIFIER_FIXUP_1356);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3382 = _RESERVED_IDENTIFIER_FIXUP_1307;
    _RESERVED_IDENTIFIER_FIXUP_3382.x = _RESERVED_IDENTIFIER_FIXUP_1357.x;
    _RESERVED_IDENTIFIER_FIXUP_3382.y = _RESERVED_IDENTIFIER_FIXUP_1357.y;
    _RESERVED_IDENTIFIER_FIXUP_3382.z = _RESERVED_IDENTIFIER_FIXUP_1357.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1365 = _RESERVED_IDENTIFIER_FIXUP_1311.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1368 = _RESERVED_IDENTIFIER_FIXUP_1365 * _RESERVED_IDENTIFIER_FIXUP_3370.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3376.x = _RESERVED_IDENTIFIER_FIXUP_1368.x;
    _RESERVED_IDENTIFIER_FIXUP_3376.y = _RESERVED_IDENTIFIER_FIXUP_1368.y;
    _RESERVED_IDENTIFIER_FIXUP_3376.z = _RESERVED_IDENTIFIER_FIXUP_1368.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1382 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1326.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1383 = mix(_RESERVED_IDENTIFIER_FIXUP_3376.xyz, _RESERVED_IDENTIFIER_FIXUP_1365, _RESERVED_IDENTIFIER_FIXUP_1382);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3394 = _RESERVED_IDENTIFIER_FIXUP_1311;
    _RESERVED_IDENTIFIER_FIXUP_3394.x = _RESERVED_IDENTIFIER_FIXUP_1383.x;
    _RESERVED_IDENTIFIER_FIXUP_3394.y = _RESERVED_IDENTIFIER_FIXUP_1383.y;
    _RESERVED_IDENTIFIER_FIXUP_3394.z = _RESERVED_IDENTIFIER_FIXUP_1383.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_1315.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1394 = _RESERVED_IDENTIFIER_FIXUP_1391 * _RESERVED_IDENTIFIER_FIXUP_3370.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3376.x = _RESERVED_IDENTIFIER_FIXUP_1394.x;
    _RESERVED_IDENTIFIER_FIXUP_3376.y = _RESERVED_IDENTIFIER_FIXUP_1394.y;
    _RESERVED_IDENTIFIER_FIXUP_3376.z = _RESERVED_IDENTIFIER_FIXUP_1394.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1408 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1326.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1409 = mix(_RESERVED_IDENTIFIER_FIXUP_3376.xyz, _RESERVED_IDENTIFIER_FIXUP_1391, _RESERVED_IDENTIFIER_FIXUP_1408);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3406 = _RESERVED_IDENTIFIER_FIXUP_1315;
    _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_1409.x;
    _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_1409.y;
    _RESERVED_IDENTIFIER_FIXUP_3406.z = _RESERVED_IDENTIFIER_FIXUP_1409.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_1319.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_1417 * _RESERVED_IDENTIFIER_FIXUP_3370.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3412 = _RESERVED_IDENTIFIER_FIXUP_1326;
    _RESERVED_IDENTIFIER_FIXUP_3412.x = _RESERVED_IDENTIFIER_FIXUP_1420.x;
    _RESERVED_IDENTIFIER_FIXUP_3412.y = _RESERVED_IDENTIFIER_FIXUP_1420.y;
    _RESERVED_IDENTIFIER_FIXUP_3412.z = _RESERVED_IDENTIFIER_FIXUP_1420.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1435 = mix(_RESERVED_IDENTIFIER_FIXUP_3412.xyz, _RESERVED_IDENTIFIER_FIXUP_1417, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3412.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3418 = _RESERVED_IDENTIFIER_FIXUP_1319;
    _RESERVED_IDENTIFIER_FIXUP_3418.x = _RESERVED_IDENTIFIER_FIXUP_1435.x;
    _RESERVED_IDENTIFIER_FIXUP_3418.y = _RESERVED_IDENTIFIER_FIXUP_1435.y;
    _RESERVED_IDENTIFIER_FIXUP_3418.z = _RESERVED_IDENTIFIER_FIXUP_1435.z;
    float _RESERVED_IDENTIFIER_FIXUP_1445 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1323.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3424 = _RESERVED_IDENTIFIER_FIXUP_1323;
    _RESERVED_IDENTIFIER_FIXUP_3424.w = _RESERVED_IDENTIFIER_FIXUP_1445;
    _RESERVED_IDENTIFIER_FIXUP_3424.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1445;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1455 = _RESERVED_IDENTIFIER_FIXUP_3424.xxxx * _RESERVED_IDENTIFIER_FIXUP_3394;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1473 = (_RESERVED_IDENTIFIER_FIXUP_3418 * _RESERVED_IDENTIFIER_FIXUP_3424.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3406 * _RESERVED_IDENTIFIER_FIXUP_3424.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3382 * _RESERVED_IDENTIFIER_FIXUP_3424.wwww) + _RESERVED_IDENTIFIER_FIXUP_1455));
    float _RESERVED_IDENTIFIER_FIXUP_1480 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_1455;
    _RESERVED_IDENTIFIER_FIXUP_3431.x = _RESERVED_IDENTIFIER_FIXUP_1480;
    float _RESERVED_IDENTIFIER_FIXUP_1486 = clamp((_RESERVED_IDENTIFIER_FIXUP_1480 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3431.x = _RESERVED_IDENTIFIER_FIXUP_1486;
    float _RESERVED_IDENTIFIER_FIXUP_1492 = ((-_RESERVED_IDENTIFIER_FIXUP_1486) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3431.x = _RESERVED_IDENTIFIER_FIXUP_1492;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4284;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4281;
    if (_RESERVED_IDENTIFIER_FIXUP_1492 != (-_RESERVED_IDENTIFIER_FIXUP_1492))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1504 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3670;
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_1504.x;
        _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_1504.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_3670.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3674;
        _RESERVED_IDENTIFIER_FIXUP_3674.x = _RESERVED_IDENTIFIER_FIXUP_1514.x;
        _RESERVED_IDENTIFIER_FIXUP_3674.y = _RESERVED_IDENTIFIER_FIXUP_1514.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_3670.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3678;
        _RESERVED_IDENTIFIER_FIXUP_3678.x = _RESERVED_IDENTIFIER_FIXUP_1524.x;
        _RESERVED_IDENTIFIER_FIXUP_3678.y = _RESERVED_IDENTIFIER_FIXUP_1524.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_3670.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3682;
        _RESERVED_IDENTIFIER_FIXUP_3682.x = _RESERVED_IDENTIFIER_FIXUP_1534.x;
        _RESERVED_IDENTIFIER_FIXUP_3682.y = _RESERVED_IDENTIFIER_FIXUP_1534.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_3670.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3686;
        _RESERVED_IDENTIFIER_FIXUP_3686.x = _RESERVED_IDENTIFIER_FIXUP_1544.x;
        _RESERVED_IDENTIFIER_FIXUP_3686.y = _RESERVED_IDENTIFIER_FIXUP_1544.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1554 = _RESERVED_IDENTIFIER_FIXUP_3670.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3690;
        _RESERVED_IDENTIFIER_FIXUP_3690.x = _RESERVED_IDENTIFIER_FIXUP_1554.x;
        _RESERVED_IDENTIFIER_FIXUP_3690.y = _RESERVED_IDENTIFIER_FIXUP_1554.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_3670.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3694;
        _RESERVED_IDENTIFIER_FIXUP_3694.x = _RESERVED_IDENTIFIER_FIXUP_1564.x;
        _RESERVED_IDENTIFIER_FIXUP_3694.y = _RESERVED_IDENTIFIER_FIXUP_1564.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1574 = _RESERVED_IDENTIFIER_FIXUP_3670.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3698;
        _RESERVED_IDENTIFIER_FIXUP_3698.x = _RESERVED_IDENTIFIER_FIXUP_1574.x;
        _RESERVED_IDENTIFIER_FIXUP_3698.y = _RESERVED_IDENTIFIER_FIXUP_1574.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1584 = _RESERVED_IDENTIFIER_FIXUP_3670.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3702;
        _RESERVED_IDENTIFIER_FIXUP_3702.x = _RESERVED_IDENTIFIER_FIXUP_1584.x;
        _RESERVED_IDENTIFIER_FIXUP_3702.y = _RESERVED_IDENTIFIER_FIXUP_1584.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1592 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1592.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1592.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1598 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3674.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3678.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3682.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3686.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3686.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1638 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_3690.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3694.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3698.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3702.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3702.xy;
        float param_9 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1678 = hdLod5(param_8, param_9);
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3674.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1598.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3678.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1598.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3682.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1598.w = hdLod5(param_14, param_15).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1695 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1598 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3690.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1638.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3694.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1638.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3698.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1638.w = hdLod5(param_20, param_21).x;
        float _RESERVED_IDENTIFIER_FIXUP_1718 = _RESERVED_IDENTIFIER_FIXUP_1678.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3767 = _RESERVED_IDENTIFIER_FIXUP_1678;
        _RESERVED_IDENTIFIER_FIXUP_3767.x = _RESERVED_IDENTIFIER_FIXUP_1718;
        float _RESERVED_IDENTIFIER_FIXUP_1723 = float(_RESERVED_IDENTIFIER_FIXUP_1718 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3767.x = _RESERVED_IDENTIFIER_FIXUP_1723;
        float _RESERVED_IDENTIFIER_FIXUP_1726 = dot(_RESERVED_IDENTIFIER_FIXUP_1695, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3767.y = _RESERVED_IDENTIFIER_FIXUP_1726;
        float _RESERVED_IDENTIFIER_FIXUP_1729 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1638 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3767.z = _RESERVED_IDENTIFIER_FIXUP_1729;
        float _RESERVED_IDENTIFIER_FIXUP_1735 = _RESERVED_IDENTIFIER_FIXUP_1726 + _RESERVED_IDENTIFIER_FIXUP_1729;
        _RESERVED_IDENTIFIER_FIXUP_3767.y = _RESERVED_IDENTIFIER_FIXUP_1735;
        float _RESERVED_IDENTIFIER_FIXUP_1741 = _RESERVED_IDENTIFIER_FIXUP_1723 + _RESERVED_IDENTIFIER_FIXUP_1735;
        _RESERVED_IDENTIFIER_FIXUP_3767.x = _RESERVED_IDENTIFIER_FIXUP_1741;
        _RESERVED_IDENTIFIER_FIXUP_3767.x = _RESERVED_IDENTIFIER_FIXUP_1741 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4284 = _RESERVED_IDENTIFIER_FIXUP_1695;
        _RESERVED_IDENTIFIER_FIXUP_4281 = _RESERVED_IDENTIFIER_FIXUP_3767;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1754 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3431.y = _RESERVED_IDENTIFIER_FIXUP_1754;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4285;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4282;
        if (_RESERVED_IDENTIFIER_FIXUP_1754 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1763 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3604 = _RESERVED_IDENTIFIER_FIXUP_3431;
            _RESERVED_IDENTIFIER_FIXUP_3604.y = _RESERVED_IDENTIFIER_FIXUP_1763.x;
            _RESERVED_IDENTIFIER_FIXUP_3604.z = _RESERVED_IDENTIFIER_FIXUP_1763.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1773 = _RESERVED_IDENTIFIER_FIXUP_3604.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3608;
            _RESERVED_IDENTIFIER_FIXUP_3608.x = _RESERVED_IDENTIFIER_FIXUP_1773.x;
            _RESERVED_IDENTIFIER_FIXUP_3608.y = _RESERVED_IDENTIFIER_FIXUP_1773.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1783 = _RESERVED_IDENTIFIER_FIXUP_3604.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3612;
            _RESERVED_IDENTIFIER_FIXUP_3612.x = _RESERVED_IDENTIFIER_FIXUP_1783.x;
            _RESERVED_IDENTIFIER_FIXUP_3612.y = _RESERVED_IDENTIFIER_FIXUP_1783.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1793 = _RESERVED_IDENTIFIER_FIXUP_3604.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3616;
            _RESERVED_IDENTIFIER_FIXUP_3616.x = _RESERVED_IDENTIFIER_FIXUP_1793.x;
            _RESERVED_IDENTIFIER_FIXUP_3616.y = _RESERVED_IDENTIFIER_FIXUP_1793.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1803 = _RESERVED_IDENTIFIER_FIXUP_3604.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3620;
            _RESERVED_IDENTIFIER_FIXUP_3620.x = _RESERVED_IDENTIFIER_FIXUP_1803.x;
            _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_1803.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1811 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1811.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1811.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1817 = hdLod6(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_3608.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3612.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3616.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3620.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3608.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1817.y = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3612.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1817.z = hdLod6(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3616.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1817.w = hdLod6(param_28, param_29).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1874 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1817 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3620.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1880 = hdLod6(param_30, param_31).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3604.y = _RESERVED_IDENTIFIER_FIXUP_1880;
            float _RESERVED_IDENTIFIER_FIXUP_1885 = float(_RESERVED_IDENTIFIER_FIXUP_1880 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3604.y = _RESERVED_IDENTIFIER_FIXUP_1885;
            float _RESERVED_IDENTIFIER_FIXUP_1888 = dot(_RESERVED_IDENTIFIER_FIXUP_1874, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3604.z = _RESERVED_IDENTIFIER_FIXUP_1888;
            float _RESERVED_IDENTIFIER_FIXUP_1894 = _RESERVED_IDENTIFIER_FIXUP_1885 + _RESERVED_IDENTIFIER_FIXUP_1888;
            _RESERVED_IDENTIFIER_FIXUP_3604.y = _RESERVED_IDENTIFIER_FIXUP_1894;
            _RESERVED_IDENTIFIER_FIXUP_3604.x = _RESERVED_IDENTIFIER_FIXUP_1894 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4285 = _RESERVED_IDENTIFIER_FIXUP_1874;
            _RESERVED_IDENTIFIER_FIXUP_4282 = _RESERVED_IDENTIFIER_FIXUP_3604;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1907 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3448 = _RESERVED_IDENTIFIER_FIXUP_3431;
            _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_1907;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4286;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4283;
            if (_RESERVED_IDENTIFIER_FIXUP_1907 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1916 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3538 = _RESERVED_IDENTIFIER_FIXUP_3448;
                _RESERVED_IDENTIFIER_FIXUP_3538.y = _RESERVED_IDENTIFIER_FIXUP_1916.x;
                _RESERVED_IDENTIFIER_FIXUP_3538.z = _RESERVED_IDENTIFIER_FIXUP_1916.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1926 = _RESERVED_IDENTIFIER_FIXUP_3538.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3542;
                _RESERVED_IDENTIFIER_FIXUP_3542.x = _RESERVED_IDENTIFIER_FIXUP_1926.x;
                _RESERVED_IDENTIFIER_FIXUP_3542.y = _RESERVED_IDENTIFIER_FIXUP_1926.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1936 = _RESERVED_IDENTIFIER_FIXUP_3538.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3546;
                _RESERVED_IDENTIFIER_FIXUP_3546.x = _RESERVED_IDENTIFIER_FIXUP_1936.x;
                _RESERVED_IDENTIFIER_FIXUP_3546.y = _RESERVED_IDENTIFIER_FIXUP_1936.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1946 = _RESERVED_IDENTIFIER_FIXUP_3538.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3550;
                _RESERVED_IDENTIFIER_FIXUP_3550.x = _RESERVED_IDENTIFIER_FIXUP_1946.x;
                _RESERVED_IDENTIFIER_FIXUP_3550.y = _RESERVED_IDENTIFIER_FIXUP_1946.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1956 = _RESERVED_IDENTIFIER_FIXUP_3538.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3554;
                _RESERVED_IDENTIFIER_FIXUP_3554.x = _RESERVED_IDENTIFIER_FIXUP_1956.x;
                _RESERVED_IDENTIFIER_FIXUP_3554.y = _RESERVED_IDENTIFIER_FIXUP_1956.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1964 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1964.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1964.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1970 = hdLod7(param_32, param_33);
                _RESERVED_IDENTIFIER_FIXUP_3542.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3546.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3550.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3554.w = 0.0;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3542.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1970.y = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3546.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1970.z = hdLod7(param_36, param_37).x;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3550.xy;
                float param_39 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1970.w = hdLod7(param_38, param_39).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2027 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1970 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3554.xy;
                float param_41 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2033 = hdLod7(param_40, param_41).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3538.y = _RESERVED_IDENTIFIER_FIXUP_2033;
                float _RESERVED_IDENTIFIER_FIXUP_2038 = float(_RESERVED_IDENTIFIER_FIXUP_2033 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3538.y = _RESERVED_IDENTIFIER_FIXUP_2038;
                float _RESERVED_IDENTIFIER_FIXUP_2041 = dot(_RESERVED_IDENTIFIER_FIXUP_2027, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3538.z = _RESERVED_IDENTIFIER_FIXUP_2041;
                float _RESERVED_IDENTIFIER_FIXUP_2047 = _RESERVED_IDENTIFIER_FIXUP_2038 + _RESERVED_IDENTIFIER_FIXUP_2041;
                _RESERVED_IDENTIFIER_FIXUP_3538.y = _RESERVED_IDENTIFIER_FIXUP_2047;
                _RESERVED_IDENTIFIER_FIXUP_3538.x = _RESERVED_IDENTIFIER_FIXUP_2047 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4286 = _RESERVED_IDENTIFIER_FIXUP_2027;
                _RESERVED_IDENTIFIER_FIXUP_4283 = _RESERVED_IDENTIFIER_FIXUP_3538;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3452 = _RESERVED_IDENTIFIER_FIXUP_3406;
                _RESERVED_IDENTIFIER_FIXUP_3452.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3452.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2063 = (_RESERVED_IDENTIFIER_FIXUP_3452.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3457;
                _RESERVED_IDENTIFIER_FIXUP_3457.x = _RESERVED_IDENTIFIER_FIXUP_2063.x;
                _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_2063.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2073 = _RESERVED_IDENTIFIER_FIXUP_3457.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3461;
                _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_2073.x;
                _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_2073.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2083 = _RESERVED_IDENTIFIER_FIXUP_3457.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3465;
                _RESERVED_IDENTIFIER_FIXUP_3465.x = _RESERVED_IDENTIFIER_FIXUP_2083.x;
                _RESERVED_IDENTIFIER_FIXUP_3465.y = _RESERVED_IDENTIFIER_FIXUP_2083.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2093 = _RESERVED_IDENTIFIER_FIXUP_3457.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3469;
                _RESERVED_IDENTIFIER_FIXUP_3469.x = _RESERVED_IDENTIFIER_FIXUP_2093.x;
                _RESERVED_IDENTIFIER_FIXUP_3469.y = _RESERVED_IDENTIFIER_FIXUP_2093.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2103 = _RESERVED_IDENTIFIER_FIXUP_3457.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3473;
                _RESERVED_IDENTIFIER_FIXUP_3473.x = _RESERVED_IDENTIFIER_FIXUP_2103.x;
                _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2103.y;
                _RESERVED_IDENTIFIER_FIXUP_3457.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3457.xy;
                float param_43 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2117 = hdLod8(param_42, param_43);
                _RESERVED_IDENTIFIER_FIXUP_3461.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3465.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3469.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3473.w = 0.0;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3461.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2117.y = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3465.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2117.z = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3469.xy;
                float param_49 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2117.w = hdLod8(param_48, param_49).x;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3473.xy;
                float param_51 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2180 = hdLod8(param_50, param_51).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3513 = _RESERVED_IDENTIFIER_FIXUP_3448;
                _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2180;
                float _RESERVED_IDENTIFIER_FIXUP_2185 = float(_RESERVED_IDENTIFIER_FIXUP_2180 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2185;
                float _RESERVED_IDENTIFIER_FIXUP_2188 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2117 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3513.z = _RESERVED_IDENTIFIER_FIXUP_2188;
                float _RESERVED_IDENTIFIER_FIXUP_2194 = _RESERVED_IDENTIFIER_FIXUP_2185 + _RESERVED_IDENTIFIER_FIXUP_2188;
                _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2194;
                float _RESERVED_IDENTIFIER_FIXUP_2202 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3513.z = _RESERVED_IDENTIFIER_FIXUP_2202;
                float _RESERVED_IDENTIFIER_FIXUP_2208 = clamp((_RESERVED_IDENTIFIER_FIXUP_2202 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3513.z = _RESERVED_IDENTIFIER_FIXUP_2208;
                float _RESERVED_IDENTIFIER_FIXUP_2213 = (_RESERVED_IDENTIFIER_FIXUP_2194 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2213;
                _RESERVED_IDENTIFIER_FIXUP_3513.x = (_RESERVED_IDENTIFIER_FIXUP_2208 * _RESERVED_IDENTIFIER_FIXUP_2213) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4286 = _RESERVED_IDENTIFIER_FIXUP_3452;
                _RESERVED_IDENTIFIER_FIXUP_4283 = _RESERVED_IDENTIFIER_FIXUP_3513;
            }
            _RESERVED_IDENTIFIER_FIXUP_4285 = _RESERVED_IDENTIFIER_FIXUP_4286;
            _RESERVED_IDENTIFIER_FIXUP_4282 = _RESERVED_IDENTIFIER_FIXUP_4283;
        }
        _RESERVED_IDENTIFIER_FIXUP_4284 = _RESERVED_IDENTIFIER_FIXUP_4285;
        _RESERVED_IDENTIFIER_FIXUP_4281 = _RESERVED_IDENTIFIER_FIXUP_4282;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3790 = _RESERVED_IDENTIFIER_FIXUP_4281;
    _RESERVED_IDENTIFIER_FIXUP_3790.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3792 = _RESERVED_IDENTIFIER_FIXUP_4284;
    _RESERVED_IDENTIFIER_FIXUP_3792.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3792.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3792.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2252 = _RESERVED_IDENTIFIER_FIXUP_3790.xxx * _RESERVED_IDENTIFIER_FIXUP_3792.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4305 = vec4(_RESERVED_IDENTIFIER_FIXUP_2252.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2252.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2266 = (_RESERVED_IDENTIFIER_FIXUP_1473.xyz * _RESERVED_IDENTIFIER_FIXUP_4305.yyy) + _RESERVED_IDENTIFIER_FIXUP_4305.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3804 = _RESERVED_IDENTIFIER_FIXUP_1473;
    _RESERVED_IDENTIFIER_FIXUP_3804.x = _RESERVED_IDENTIFIER_FIXUP_2266.x;
    _RESERVED_IDENTIFIER_FIXUP_3804.y = _RESERVED_IDENTIFIER_FIXUP_2266.y;
    _RESERVED_IDENTIFIER_FIXUP_3804.z = _RESERVED_IDENTIFIER_FIXUP_2266.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2279 = _RESERVED_IDENTIFIER_FIXUP_3804.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3810 = _RESERVED_IDENTIFIER_FIXUP_3804;
    _RESERVED_IDENTIFIER_FIXUP_3810.x = _RESERVED_IDENTIFIER_FIXUP_2279.x;
    _RESERVED_IDENTIFIER_FIXUP_3810.y = _RESERVED_IDENTIFIER_FIXUP_2279.y;
    _RESERVED_IDENTIFIER_FIXUP_3810.z = _RESERVED_IDENTIFIER_FIXUP_2279.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2338 = OptTex0( texcoord0.xyz);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2342 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2346 = hdTex2(param_53);
    vec2 param_54 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2350 = hdTex3(param_54);
    vec2 param_55 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2354 = hdTex4(param_55);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2362 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3824 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3824.x = _RESERVED_IDENTIFIER_FIXUP_2362.x;
    _RESERVED_IDENTIFIER_FIXUP_3824.y = _RESERVED_IDENTIFIER_FIXUP_2362.y;
    _RESERVED_IDENTIFIER_FIXUP_3824.z = _RESERVED_IDENTIFIER_FIXUP_2362.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2370 = _RESERVED_IDENTIFIER_FIXUP_2338.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2373 = _RESERVED_IDENTIFIER_FIXUP_2370 * _RESERVED_IDENTIFIER_FIXUP_3824.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3830 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3830.x = _RESERVED_IDENTIFIER_FIXUP_2373.x;
    _RESERVED_IDENTIFIER_FIXUP_3830.y = _RESERVED_IDENTIFIER_FIXUP_2373.y;
    _RESERVED_IDENTIFIER_FIXUP_3830.z = _RESERVED_IDENTIFIER_FIXUP_2373.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2388 = mix(_RESERVED_IDENTIFIER_FIXUP_3830.xyz, _RESERVED_IDENTIFIER_FIXUP_2370, _RESERVED_IDENTIFIER_FIXUP_1356);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3836 = _RESERVED_IDENTIFIER_FIXUP_2338;
    _RESERVED_IDENTIFIER_FIXUP_3836.x = _RESERVED_IDENTIFIER_FIXUP_2388.x;
    _RESERVED_IDENTIFIER_FIXUP_3836.y = _RESERVED_IDENTIFIER_FIXUP_2388.y;
    _RESERVED_IDENTIFIER_FIXUP_3836.z = _RESERVED_IDENTIFIER_FIXUP_2388.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2396 = _RESERVED_IDENTIFIER_FIXUP_2342.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2399 = _RESERVED_IDENTIFIER_FIXUP_2396 * _RESERVED_IDENTIFIER_FIXUP_3824.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3830.x = _RESERVED_IDENTIFIER_FIXUP_2399.x;
    _RESERVED_IDENTIFIER_FIXUP_3830.y = _RESERVED_IDENTIFIER_FIXUP_2399.y;
    _RESERVED_IDENTIFIER_FIXUP_3830.z = _RESERVED_IDENTIFIER_FIXUP_2399.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2414 = mix(_RESERVED_IDENTIFIER_FIXUP_3830.xyz, _RESERVED_IDENTIFIER_FIXUP_2396, _RESERVED_IDENTIFIER_FIXUP_1382);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3848 = _RESERVED_IDENTIFIER_FIXUP_2342;
    _RESERVED_IDENTIFIER_FIXUP_3848.x = _RESERVED_IDENTIFIER_FIXUP_2414.x;
    _RESERVED_IDENTIFIER_FIXUP_3848.y = _RESERVED_IDENTIFIER_FIXUP_2414.y;
    _RESERVED_IDENTIFIER_FIXUP_3848.z = _RESERVED_IDENTIFIER_FIXUP_2414.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2422 = _RESERVED_IDENTIFIER_FIXUP_2346.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2425 = _RESERVED_IDENTIFIER_FIXUP_2422 * _RESERVED_IDENTIFIER_FIXUP_3824.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3830.x = _RESERVED_IDENTIFIER_FIXUP_2425.x;
    _RESERVED_IDENTIFIER_FIXUP_3830.y = _RESERVED_IDENTIFIER_FIXUP_2425.y;
    _RESERVED_IDENTIFIER_FIXUP_3830.z = _RESERVED_IDENTIFIER_FIXUP_2425.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2440 = mix(_RESERVED_IDENTIFIER_FIXUP_3830.xyz, _RESERVED_IDENTIFIER_FIXUP_2422, _RESERVED_IDENTIFIER_FIXUP_1408);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3860 = _RESERVED_IDENTIFIER_FIXUP_2346;
    _RESERVED_IDENTIFIER_FIXUP_3860.x = _RESERVED_IDENTIFIER_FIXUP_2440.x;
    _RESERVED_IDENTIFIER_FIXUP_3860.y = _RESERVED_IDENTIFIER_FIXUP_2440.y;
    _RESERVED_IDENTIFIER_FIXUP_3860.z = _RESERVED_IDENTIFIER_FIXUP_2440.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2448 = _RESERVED_IDENTIFIER_FIXUP_2350.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2451 = _RESERVED_IDENTIFIER_FIXUP_2448 * _RESERVED_IDENTIFIER_FIXUP_3824.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3866 = _RESERVED_IDENTIFIER_FIXUP_1326;
    _RESERVED_IDENTIFIER_FIXUP_3866.x = _RESERVED_IDENTIFIER_FIXUP_2451.x;
    _RESERVED_IDENTIFIER_FIXUP_3866.y = _RESERVED_IDENTIFIER_FIXUP_2451.y;
    _RESERVED_IDENTIFIER_FIXUP_3866.z = _RESERVED_IDENTIFIER_FIXUP_2451.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2466 = mix(_RESERVED_IDENTIFIER_FIXUP_3866.xyz, _RESERVED_IDENTIFIER_FIXUP_2448, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3866.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3872 = _RESERVED_IDENTIFIER_FIXUP_2350;
    _RESERVED_IDENTIFIER_FIXUP_3872.x = _RESERVED_IDENTIFIER_FIXUP_2466.x;
    _RESERVED_IDENTIFIER_FIXUP_3872.y = _RESERVED_IDENTIFIER_FIXUP_2466.y;
    _RESERVED_IDENTIFIER_FIXUP_3872.z = _RESERVED_IDENTIFIER_FIXUP_2466.z;
    float _RESERVED_IDENTIFIER_FIXUP_2476 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2354.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3878 = _RESERVED_IDENTIFIER_FIXUP_2354;
    _RESERVED_IDENTIFIER_FIXUP_3878.w = _RESERVED_IDENTIFIER_FIXUP_2476;
    _RESERVED_IDENTIFIER_FIXUP_3878.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2476;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2486 = _RESERVED_IDENTIFIER_FIXUP_3878.xxxx * _RESERVED_IDENTIFIER_FIXUP_3848;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2504 = (_RESERVED_IDENTIFIER_FIXUP_3872 * _RESERVED_IDENTIFIER_FIXUP_3878.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3860 * _RESERVED_IDENTIFIER_FIXUP_3878.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3836 * _RESERVED_IDENTIFIER_FIXUP_3878.wwww) + _RESERVED_IDENTIFIER_FIXUP_2486));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3885 = _RESERVED_IDENTIFIER_FIXUP_2486;
    _RESERVED_IDENTIFIER_FIXUP_3885.x = _RESERVED_IDENTIFIER_FIXUP_1480;
    float _RESERVED_IDENTIFIER_FIXUP_2517 = clamp((_RESERVED_IDENTIFIER_FIXUP_1480 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3885.x = _RESERVED_IDENTIFIER_FIXUP_2517;
    float _RESERVED_IDENTIFIER_FIXUP_2523 = ((-_RESERVED_IDENTIFIER_FIXUP_2517) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3885.x = _RESERVED_IDENTIFIER_FIXUP_2523;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4299;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4293;
    if (_RESERVED_IDENTIFIER_FIXUP_2523 != (-_RESERVED_IDENTIFIER_FIXUP_2523))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2535 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_4124;
        _RESERVED_IDENTIFIER_FIXUP_4124.x = _RESERVED_IDENTIFIER_FIXUP_2535.x;
        _RESERVED_IDENTIFIER_FIXUP_4124.y = _RESERVED_IDENTIFIER_FIXUP_2535.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2545 = _RESERVED_IDENTIFIER_FIXUP_4124.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4128;
        _RESERVED_IDENTIFIER_FIXUP_4128.x = _RESERVED_IDENTIFIER_FIXUP_2545.x;
        _RESERVED_IDENTIFIER_FIXUP_4128.y = _RESERVED_IDENTIFIER_FIXUP_2545.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2555 = _RESERVED_IDENTIFIER_FIXUP_4124.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4132;
        _RESERVED_IDENTIFIER_FIXUP_4132.x = _RESERVED_IDENTIFIER_FIXUP_2555.x;
        _RESERVED_IDENTIFIER_FIXUP_4132.y = _RESERVED_IDENTIFIER_FIXUP_2555.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2565 = _RESERVED_IDENTIFIER_FIXUP_4124.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4136;
        _RESERVED_IDENTIFIER_FIXUP_4136.x = _RESERVED_IDENTIFIER_FIXUP_2565.x;
        _RESERVED_IDENTIFIER_FIXUP_4136.y = _RESERVED_IDENTIFIER_FIXUP_2565.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2575 = _RESERVED_IDENTIFIER_FIXUP_4124.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4140;
        _RESERVED_IDENTIFIER_FIXUP_4140.x = _RESERVED_IDENTIFIER_FIXUP_2575.x;
        _RESERVED_IDENTIFIER_FIXUP_4140.y = _RESERVED_IDENTIFIER_FIXUP_2575.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2585 = _RESERVED_IDENTIFIER_FIXUP_4124.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4144;
        _RESERVED_IDENTIFIER_FIXUP_4144.x = _RESERVED_IDENTIFIER_FIXUP_2585.x;
        _RESERVED_IDENTIFIER_FIXUP_4144.y = _RESERVED_IDENTIFIER_FIXUP_2585.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2595 = _RESERVED_IDENTIFIER_FIXUP_4124.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4148;
        _RESERVED_IDENTIFIER_FIXUP_4148.x = _RESERVED_IDENTIFIER_FIXUP_2595.x;
        _RESERVED_IDENTIFIER_FIXUP_4148.y = _RESERVED_IDENTIFIER_FIXUP_2595.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2605 = _RESERVED_IDENTIFIER_FIXUP_4124.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4152;
        _RESERVED_IDENTIFIER_FIXUP_4152.x = _RESERVED_IDENTIFIER_FIXUP_2605.x;
        _RESERVED_IDENTIFIER_FIXUP_4152.y = _RESERVED_IDENTIFIER_FIXUP_2605.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2615 = _RESERVED_IDENTIFIER_FIXUP_4124.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4156;
        _RESERVED_IDENTIFIER_FIXUP_4156.x = _RESERVED_IDENTIFIER_FIXUP_2615.x;
        _RESERVED_IDENTIFIER_FIXUP_4156.y = _RESERVED_IDENTIFIER_FIXUP_2615.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2623 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2623.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2623.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2629 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_4128.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4132.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4136.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4140.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_4140.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2669 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_4144.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4148.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4152.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4156.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_4156.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2709 = hdLod5(param_60, param_61);
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_4128.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2629.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_4132.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2629.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_4136.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2629.w = hdLod5(param_66, param_67).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2726 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2629 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_4144.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2669.y = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4148.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2669.z = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_4152.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2669.w = hdLod5(param_72, param_73).x;
        float _RESERVED_IDENTIFIER_FIXUP_2749 = _RESERVED_IDENTIFIER_FIXUP_2709.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4221 = _RESERVED_IDENTIFIER_FIXUP_2709;
        _RESERVED_IDENTIFIER_FIXUP_4221.x = _RESERVED_IDENTIFIER_FIXUP_2749;
        float _RESERVED_IDENTIFIER_FIXUP_2754 = float(_RESERVED_IDENTIFIER_FIXUP_2749 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_4221.x = _RESERVED_IDENTIFIER_FIXUP_2754;
        float _RESERVED_IDENTIFIER_FIXUP_2757 = dot(_RESERVED_IDENTIFIER_FIXUP_2726, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4221.y = _RESERVED_IDENTIFIER_FIXUP_2757;
        float _RESERVED_IDENTIFIER_FIXUP_2760 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2669 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4221.z = _RESERVED_IDENTIFIER_FIXUP_2760;
        float _RESERVED_IDENTIFIER_FIXUP_2766 = _RESERVED_IDENTIFIER_FIXUP_2757 + _RESERVED_IDENTIFIER_FIXUP_2760;
        _RESERVED_IDENTIFIER_FIXUP_4221.y = _RESERVED_IDENTIFIER_FIXUP_2766;
        float _RESERVED_IDENTIFIER_FIXUP_2772 = _RESERVED_IDENTIFIER_FIXUP_2754 + _RESERVED_IDENTIFIER_FIXUP_2766;
        _RESERVED_IDENTIFIER_FIXUP_4221.x = _RESERVED_IDENTIFIER_FIXUP_2772;
        _RESERVED_IDENTIFIER_FIXUP_4221.x = _RESERVED_IDENTIFIER_FIXUP_2772 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4299 = _RESERVED_IDENTIFIER_FIXUP_2726;
        _RESERVED_IDENTIFIER_FIXUP_4293 = _RESERVED_IDENTIFIER_FIXUP_4221;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2785 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3885.y = _RESERVED_IDENTIFIER_FIXUP_2785;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4300;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4294;
        if (_RESERVED_IDENTIFIER_FIXUP_2785 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2794 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_4058 = _RESERVED_IDENTIFIER_FIXUP_3885;
            _RESERVED_IDENTIFIER_FIXUP_4058.y = _RESERVED_IDENTIFIER_FIXUP_2794.x;
            _RESERVED_IDENTIFIER_FIXUP_4058.z = _RESERVED_IDENTIFIER_FIXUP_2794.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2804 = _RESERVED_IDENTIFIER_FIXUP_4058.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4062;
            _RESERVED_IDENTIFIER_FIXUP_4062.x = _RESERVED_IDENTIFIER_FIXUP_2804.x;
            _RESERVED_IDENTIFIER_FIXUP_4062.y = _RESERVED_IDENTIFIER_FIXUP_2804.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2814 = _RESERVED_IDENTIFIER_FIXUP_4058.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4066;
            _RESERVED_IDENTIFIER_FIXUP_4066.x = _RESERVED_IDENTIFIER_FIXUP_2814.x;
            _RESERVED_IDENTIFIER_FIXUP_4066.y = _RESERVED_IDENTIFIER_FIXUP_2814.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2824 = _RESERVED_IDENTIFIER_FIXUP_4058.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4070;
            _RESERVED_IDENTIFIER_FIXUP_4070.x = _RESERVED_IDENTIFIER_FIXUP_2824.x;
            _RESERVED_IDENTIFIER_FIXUP_4070.y = _RESERVED_IDENTIFIER_FIXUP_2824.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2834 = _RESERVED_IDENTIFIER_FIXUP_4058.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4074;
            _RESERVED_IDENTIFIER_FIXUP_4074.x = _RESERVED_IDENTIFIER_FIXUP_2834.x;
            _RESERVED_IDENTIFIER_FIXUP_4074.y = _RESERVED_IDENTIFIER_FIXUP_2834.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2842 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2842.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2842.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2848 = hdLod6(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_4062.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4066.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4070.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4074.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_4062.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2848.y = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_4066.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2848.z = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_4070.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2848.w = hdLod6(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2905 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2848 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_4074.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2911 = hdLod6(param_82, param_83).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_4058.y = _RESERVED_IDENTIFIER_FIXUP_2911;
            float _RESERVED_IDENTIFIER_FIXUP_2916 = float(_RESERVED_IDENTIFIER_FIXUP_2911 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_4058.y = _RESERVED_IDENTIFIER_FIXUP_2916;
            float _RESERVED_IDENTIFIER_FIXUP_2919 = dot(_RESERVED_IDENTIFIER_FIXUP_2905, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_4058.z = _RESERVED_IDENTIFIER_FIXUP_2919;
            float _RESERVED_IDENTIFIER_FIXUP_2925 = _RESERVED_IDENTIFIER_FIXUP_2916 + _RESERVED_IDENTIFIER_FIXUP_2919;
            _RESERVED_IDENTIFIER_FIXUP_4058.y = _RESERVED_IDENTIFIER_FIXUP_2925;
            _RESERVED_IDENTIFIER_FIXUP_4058.x = _RESERVED_IDENTIFIER_FIXUP_2925 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4300 = _RESERVED_IDENTIFIER_FIXUP_2905;
            _RESERVED_IDENTIFIER_FIXUP_4294 = _RESERVED_IDENTIFIER_FIXUP_4058;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2938 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3902 = _RESERVED_IDENTIFIER_FIXUP_3885;
            _RESERVED_IDENTIFIER_FIXUP_3902.y = _RESERVED_IDENTIFIER_FIXUP_2938;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4301;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4295;
            if (_RESERVED_IDENTIFIER_FIXUP_2938 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2947 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3992 = _RESERVED_IDENTIFIER_FIXUP_3902;
                _RESERVED_IDENTIFIER_FIXUP_3992.y = _RESERVED_IDENTIFIER_FIXUP_2947.x;
                _RESERVED_IDENTIFIER_FIXUP_3992.z = _RESERVED_IDENTIFIER_FIXUP_2947.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2957 = _RESERVED_IDENTIFIER_FIXUP_3992.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3996;
                _RESERVED_IDENTIFIER_FIXUP_3996.x = _RESERVED_IDENTIFIER_FIXUP_2957.x;
                _RESERVED_IDENTIFIER_FIXUP_3996.y = _RESERVED_IDENTIFIER_FIXUP_2957.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2967 = _RESERVED_IDENTIFIER_FIXUP_3992.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4000;
                _RESERVED_IDENTIFIER_FIXUP_4000.x = _RESERVED_IDENTIFIER_FIXUP_2967.x;
                _RESERVED_IDENTIFIER_FIXUP_4000.y = _RESERVED_IDENTIFIER_FIXUP_2967.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2977 = _RESERVED_IDENTIFIER_FIXUP_3992.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4004;
                _RESERVED_IDENTIFIER_FIXUP_4004.x = _RESERVED_IDENTIFIER_FIXUP_2977.x;
                _RESERVED_IDENTIFIER_FIXUP_4004.y = _RESERVED_IDENTIFIER_FIXUP_2977.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2987 = _RESERVED_IDENTIFIER_FIXUP_3992.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4008;
                _RESERVED_IDENTIFIER_FIXUP_4008.x = _RESERVED_IDENTIFIER_FIXUP_2987.x;
                _RESERVED_IDENTIFIER_FIXUP_4008.y = _RESERVED_IDENTIFIER_FIXUP_2987.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2995 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2995.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2995.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3001 = hdLod7(param_84, param_85);
                _RESERVED_IDENTIFIER_FIXUP_3996.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_4000.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_4004.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_4008.w = 0.0;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3996.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3001.y = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_4000.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3001.z = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_4004.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3001.w = hdLod7(param_90, param_91).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3058 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_3001 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_4008.xy;
                float param_93 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3064 = hdLod7(param_92, param_93).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3992.y = _RESERVED_IDENTIFIER_FIXUP_3064;
                float _RESERVED_IDENTIFIER_FIXUP_3069 = float(_RESERVED_IDENTIFIER_FIXUP_3064 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3992.y = _RESERVED_IDENTIFIER_FIXUP_3069;
                float _RESERVED_IDENTIFIER_FIXUP_3072 = dot(_RESERVED_IDENTIFIER_FIXUP_3058, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3992.z = _RESERVED_IDENTIFIER_FIXUP_3072;
                float _RESERVED_IDENTIFIER_FIXUP_3078 = _RESERVED_IDENTIFIER_FIXUP_3069 + _RESERVED_IDENTIFIER_FIXUP_3072;
                _RESERVED_IDENTIFIER_FIXUP_3992.y = _RESERVED_IDENTIFIER_FIXUP_3078;
                _RESERVED_IDENTIFIER_FIXUP_3992.x = _RESERVED_IDENTIFIER_FIXUP_3078 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4301 = _RESERVED_IDENTIFIER_FIXUP_3058;
                _RESERVED_IDENTIFIER_FIXUP_4295 = _RESERVED_IDENTIFIER_FIXUP_3992;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3906 = _RESERVED_IDENTIFIER_FIXUP_3860;
                _RESERVED_IDENTIFIER_FIXUP_3906.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3906.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3094 = (_RESERVED_IDENTIFIER_FIXUP_3906.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3911;
                _RESERVED_IDENTIFIER_FIXUP_3911.x = _RESERVED_IDENTIFIER_FIXUP_3094.x;
                _RESERVED_IDENTIFIER_FIXUP_3911.y = _RESERVED_IDENTIFIER_FIXUP_3094.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3104 = _RESERVED_IDENTIFIER_FIXUP_3911.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3915;
                _RESERVED_IDENTIFIER_FIXUP_3915.x = _RESERVED_IDENTIFIER_FIXUP_3104.x;
                _RESERVED_IDENTIFIER_FIXUP_3915.y = _RESERVED_IDENTIFIER_FIXUP_3104.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3114 = _RESERVED_IDENTIFIER_FIXUP_3911.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3919;
                _RESERVED_IDENTIFIER_FIXUP_3919.x = _RESERVED_IDENTIFIER_FIXUP_3114.x;
                _RESERVED_IDENTIFIER_FIXUP_3919.y = _RESERVED_IDENTIFIER_FIXUP_3114.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3124 = _RESERVED_IDENTIFIER_FIXUP_3911.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3923;
                _RESERVED_IDENTIFIER_FIXUP_3923.x = _RESERVED_IDENTIFIER_FIXUP_3124.x;
                _RESERVED_IDENTIFIER_FIXUP_3923.y = _RESERVED_IDENTIFIER_FIXUP_3124.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3134 = _RESERVED_IDENTIFIER_FIXUP_3911.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3927;
                _RESERVED_IDENTIFIER_FIXUP_3927.x = _RESERVED_IDENTIFIER_FIXUP_3134.x;
                _RESERVED_IDENTIFIER_FIXUP_3927.y = _RESERVED_IDENTIFIER_FIXUP_3134.y;
                _RESERVED_IDENTIFIER_FIXUP_3911.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3911.xy;
                float param_95 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3148 = hdLod8(param_94, param_95);
                _RESERVED_IDENTIFIER_FIXUP_3915.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3919.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3923.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3927.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3915.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3148.y = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3919.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3148.z = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3923.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3148.w = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3927.xy;
                float param_103 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3211 = hdLod8(param_102, param_103).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3967 = _RESERVED_IDENTIFIER_FIXUP_3902;
                _RESERVED_IDENTIFIER_FIXUP_3967.y = _RESERVED_IDENTIFIER_FIXUP_3211;
                float _RESERVED_IDENTIFIER_FIXUP_3216 = float(_RESERVED_IDENTIFIER_FIXUP_3211 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3967.y = _RESERVED_IDENTIFIER_FIXUP_3216;
                float _RESERVED_IDENTIFIER_FIXUP_3219 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_3148 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3967.z = _RESERVED_IDENTIFIER_FIXUP_3219;
                float _RESERVED_IDENTIFIER_FIXUP_3225 = _RESERVED_IDENTIFIER_FIXUP_3216 + _RESERVED_IDENTIFIER_FIXUP_3219;
                _RESERVED_IDENTIFIER_FIXUP_3967.y = _RESERVED_IDENTIFIER_FIXUP_3225;
                float _RESERVED_IDENTIFIER_FIXUP_3233 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3967.z = _RESERVED_IDENTIFIER_FIXUP_3233;
                float _RESERVED_IDENTIFIER_FIXUP_3239 = clamp((_RESERVED_IDENTIFIER_FIXUP_3233 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3967.z = _RESERVED_IDENTIFIER_FIXUP_3239;
                float _RESERVED_IDENTIFIER_FIXUP_3244 = (_RESERVED_IDENTIFIER_FIXUP_3225 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3967.y = _RESERVED_IDENTIFIER_FIXUP_3244;
                _RESERVED_IDENTIFIER_FIXUP_3967.x = (_RESERVED_IDENTIFIER_FIXUP_3239 * _RESERVED_IDENTIFIER_FIXUP_3244) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4301 = _RESERVED_IDENTIFIER_FIXUP_3906;
                _RESERVED_IDENTIFIER_FIXUP_4295 = _RESERVED_IDENTIFIER_FIXUP_3967;
            }
            _RESERVED_IDENTIFIER_FIXUP_4300 = _RESERVED_IDENTIFIER_FIXUP_4301;
            _RESERVED_IDENTIFIER_FIXUP_4294 = _RESERVED_IDENTIFIER_FIXUP_4295;
        }
        _RESERVED_IDENTIFIER_FIXUP_4299 = _RESERVED_IDENTIFIER_FIXUP_4300;
        _RESERVED_IDENTIFIER_FIXUP_4293 = _RESERVED_IDENTIFIER_FIXUP_4294;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3259 = (_RESERVED_IDENTIFIER_FIXUP_4293.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4242 = _RESERVED_IDENTIFIER_FIXUP_4293;
    _RESERVED_IDENTIFIER_FIXUP_4242.y = _RESERVED_IDENTIFIER_FIXUP_3259;
    _RESERVED_IDENTIFIER_FIXUP_4242.y = _RESERVED_IDENTIFIER_FIXUP_3259;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3272 = _RESERVED_IDENTIFIER_FIXUP_2504.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4248 = _RESERVED_IDENTIFIER_FIXUP_4299;
    _RESERVED_IDENTIFIER_FIXUP_4248.x = _RESERVED_IDENTIFIER_FIXUP_3272.x;
    _RESERVED_IDENTIFIER_FIXUP_4248.y = _RESERVED_IDENTIFIER_FIXUP_3272.y;
    _RESERVED_IDENTIFIER_FIXUP_4248.z = _RESERVED_IDENTIFIER_FIXUP_3272.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3283 = _RESERVED_IDENTIFIER_FIXUP_4242.xxx * _RESERVED_IDENTIFIER_FIXUP_4248.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4307 = vec4(_RESERVED_IDENTIFIER_FIXUP_3283.x, _RESERVED_IDENTIFIER_FIXUP_3259, _RESERVED_IDENTIFIER_FIXUP_3283.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3297 = (_RESERVED_IDENTIFIER_FIXUP_2504.xyz * _RESERVED_IDENTIFIER_FIXUP_4307.yyy) + _RESERVED_IDENTIFIER_FIXUP_4307.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4260 = _RESERVED_IDENTIFIER_FIXUP_2504;
    _RESERVED_IDENTIFIER_FIXUP_4260.x = _RESERVED_IDENTIFIER_FIXUP_3297.x;
    _RESERVED_IDENTIFIER_FIXUP_4260.y = _RESERVED_IDENTIFIER_FIXUP_3297.y;
    _RESERVED_IDENTIFIER_FIXUP_4260.z = _RESERVED_IDENTIFIER_FIXUP_3297.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3310 = _RESERVED_IDENTIFIER_FIXUP_4260.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4266 = _RESERVED_IDENTIFIER_FIXUP_4260;
    _RESERVED_IDENTIFIER_FIXUP_4266.x = _RESERVED_IDENTIFIER_FIXUP_3310.x;
    _RESERVED_IDENTIFIER_FIXUP_4266.y = _RESERVED_IDENTIFIER_FIXUP_3310.y;
    _RESERVED_IDENTIFIER_FIXUP_4266.z = _RESERVED_IDENTIFIER_FIXUP_3310.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4266.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1163 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1172;
    if (_RESERVED_IDENTIFIER_FIXUP_1163)
    {
        _RESERVED_IDENTIFIER_FIXUP_1172 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1172 = _RESERVED_IDENTIFIER_FIXUP_1163;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1172)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1209 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3810.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1235 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3363;
    if (_RESERVED_IDENTIFIER_FIXUP_1209 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3363 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1209), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1235);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3363 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1235);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3363;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3259);
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
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = texcoord5;
    vec4 v7 = texcoord6;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
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
    vec3 hdB105 = v0.xyz + v0.xyz;
    r6.x = hdB105.x;
    r6.y = hdB105.y;
    r6.z = hdB105.z;
    vec3 hdB120 = r0.xyz * r6.xyz;
    r7.x = hdB120.x;
    r7.y = hdB120.y;
    r7.z = hdB120.z;
    vec4 hdB129 = r0;
    vec3 hdB138 = mix(r7.xyz, hdB129.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB138.x;
    r0.y = hdB138.y;
    r0.z = hdB138.z;
    vec3 hdB149 = r1.xyz * r6.xyz;
    r7.x = hdB149.x;
    r7.y = hdB149.y;
    r7.z = hdB149.z;
    vec4 hdB158 = r1;
    vec3 hdB164 = mix(r7.xyz, hdB158.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB164.x;
    r1.y = hdB164.y;
    r1.z = hdB164.z;
    vec3 hdB175 = r2.xyz * r6.xyz;
    r7.x = hdB175.x;
    r7.y = hdB175.y;
    r7.z = hdB175.z;
    vec4 hdB184 = r2;
    vec3 hdB190 = mix(r7.xyz, hdB184.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB190.x;
    r2.y = hdB190.y;
    r2.z = hdB190.z;
    vec3 hdB201 = r3.xyz * r6.xyz;
    r5.x = hdB201.x;
    r5.y = hdB201.y;
    r5.z = hdB201.z;
    vec4 hdB210 = r3;
    vec3 hdB216 = mix(r5.xyz, hdB210.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB216.x;
    r3.y = hdB216.y;
    r3.z = hdB216.z;
    r4.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r4.w = (-r4.w) + 1.0;
    r1 = r4.xxxx * r1;
    r0 = (r0 * r4.wwww) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB293 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB293.x;
        r1.y = hdB293.y;
        vec2 hdB304 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB304.x;
        r2.y = hdB304.y;
        vec2 hdB315 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB315.x;
        r3.y = hdB315.y;
        vec2 hdB326 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB326.x;
        r4.y = hdB326.y;
        vec2 hdB337 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB337.x;
        r5.y = hdB337.y;
        vec2 hdB348 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB348.x;
        r6.y = hdB348.y;
        vec2 hdB359 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB359.x;
        r7.y = hdB359.y;
        vec2 hdB370 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB370.x;
        r8.y = hdB370.y;
        vec4 hdB375 = r1;
        vec2 hdB381 = hdB375.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB381.x;
        r1.y = hdB381.y;
        r9 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r9.xy;
        float param_5 = r9.w;
        r9 = hdLod5(param_4, param_5);
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
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_10 = r4.xy;
        float param_11 = r4.w;
        r4 = hdLod5(param_10, param_11);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_12 = r5.xy;
        float param_13 = r5.w;
        r5 = hdLod5(param_12, param_13);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_14 = r6.xy;
        float param_15 = r6.w;
        r6 = hdLod5(param_14, param_15);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_16 = r7.xy;
        float param_17 = r7.w;
        r7 = hdLod5(param_16, param_17);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_18 = r8.xy;
        float param_19 = r8.w;
        r8 = hdLod5(param_18, param_19);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_20 = r1.xy;
        float param_21 = r1.w;
        r1 = hdLod5(param_20, param_21);
        r9.y = r2.x;
        r9.z = r3.x;
        r9.w = r4.x;
        r2 = r9 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v5.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.x += (-v5.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            vec2 hdB567 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB567.x;
            r1.z = hdB567.y;
            vec2 hdB577 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB577.x;
            r2.y = hdB577.y;
            vec2 hdB587 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB587.x;
            r3.y = hdB587.y;
            vec2 hdB597 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB597.x;
            r4.y = hdB597.y;
            vec2 hdB607 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB607.x;
            r5.y = hdB607.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r6.xy;
            float param_23 = r6.w;
            r6 = hdLod6(param_22, param_23);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod6(param_24, param_25);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod6(param_26, param_27);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_28 = r4.xy;
            float param_29 = r4.w;
            r4 = hdLod6(param_28, param_29);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_30 = r5.xy;
            float param_31 = r5.w;
            r5 = hdLod6(param_30, param_31);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v6.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                vec2 hdB723 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB723.x;
                r1.z = hdB723.y;
                vec2 hdB733 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB733.x;
                r2.y = hdB733.y;
                vec2 hdB743 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB743.x;
                r3.y = hdB743.y;
                vec2 hdB753 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB753.x;
                r4.y = hdB753.y;
                vec2 hdB763 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB763.x;
                r5.y = hdB763.y;
                r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = r6.xy;
                float param_33 = r6.w;
                r6 = hdLod7(param_32, param_33);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_34 = r2.xy;
                float param_35 = r2.w;
                r2 = hdLod7(param_34, param_35);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_36 = r3.xy;
                float param_37 = r3.w;
                r3 = hdLod7(param_36, param_37);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_38 = r4.xy;
                float param_39 = r4.w;
                r4 = hdLod7(param_38, param_39);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_40 = r5.xy;
                float param_41 = r5.w;
                r5 = hdLod7(param_40, param_41);
                r6.y = r2.x;
                r6.z = r3.x;
                r6.w = r4.x;
                r2 = r6 + (-v7.zzzz);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r1.y = r5.x + (-v7.z);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r2, vec4(1.0));
                r1.y += r1.z;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v5.w;
                r2.y = v6.w;
                vec2 hdB871 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB871.x;
                r3.y = hdB871.y;
                vec2 hdB881 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB881.x;
                r4.y = hdB881.y;
                vec2 hdB891 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB891.x;
                r5.y = hdB891.y;
                vec2 hdB901 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB901.x;
                r6.y = hdB901.y;
                vec2 hdB911 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB911.x;
                r7.y = hdB911.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_42 = r3.xy;
                float param_43 = r3.w;
                r3 = hdLod8(param_42, param_43);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r4 = hdLod8(param_44, param_45);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_46 = r5.xy;
                float param_47 = r5.w;
                r5 = hdLod8(param_46, param_47);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_48 = r6.xy;
                float param_49 = r6.w;
                r6 = hdLod8(param_48, param_49);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_50 = r7.xy;
                float param_51 = r7.w;
                r7 = hdLod8(param_50, param_51);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v7.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v7.w);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r3, vec4(1.0));
                r1.y += r1.z;
                r1.z = max(abs(r2.x), abs(r2.y));
                r1.z = clamp((r1.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.z * r1.y) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB1045 = r0.www * v1.xyz;
    r2.x = hdB1045.x;
    r2.y = hdB1045.y;
    r2.z = hdB1045.z;
    vec4 hdB1052 = r1;
    vec3 hdB1056 = hdB1052.xxx * r2.xyz;
    r1.x = hdB1056.x;
    r1.z = hdB1056.y;
    r1.w = hdB1056.z;
    vec4 hdB1063 = r0;
    vec3 hdB1070 = (hdB1063.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB1070.x;
    r0.y = hdB1070.y;
    r0.z = hdB1070.z;
    vec4 hdB1077 = r0;
    vec3 hdB1084 = hdB1077.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1084.x;
    r0.y = hdB1084.y;
    r0.z = hdB1084.z;
    vec3 hdB1099 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1099.x;
    oC0.y = hdB1099.y;
    oC0.z = hdB1099.z;
    oC0.w = 1.0;
    bool hdB1111 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1119;
    if (hdB1111)
    {
        hdB1119 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1119 = hdB1111;
    }
    if (hdB1119)
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
    bool _3851 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3861;
    if (_3851)
    {
        _3861 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3861 = _3851;
    }
    if (_3861)
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
        bool _3886 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3901;
        if (!_3886)
        {
            _3901 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3901 = _3886;
        }
        if (_3901)
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
