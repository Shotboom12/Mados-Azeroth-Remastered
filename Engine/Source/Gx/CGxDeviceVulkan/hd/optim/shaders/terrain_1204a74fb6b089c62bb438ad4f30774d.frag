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
float _RESERVED_IDENTIFIER_FIXUP_4218;
vec4 _RESERVED_IDENTIFIER_FIXUP_4219;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1289 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1293 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1301 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1305 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1308 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1310 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4218).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1313 = _RESERVED_IDENTIFIER_FIXUP_1310 + _RESERVED_IDENTIFIER_FIXUP_1310;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3319 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3319.x = _RESERVED_IDENTIFIER_FIXUP_1313.x;
    _RESERVED_IDENTIFIER_FIXUP_3319.y = _RESERVED_IDENTIFIER_FIXUP_1313.y;
    _RESERVED_IDENTIFIER_FIXUP_3319.z = _RESERVED_IDENTIFIER_FIXUP_1313.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1321 = _RESERVED_IDENTIFIER_FIXUP_1289.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1324 = _RESERVED_IDENTIFIER_FIXUP_1321 * _RESERVED_IDENTIFIER_FIXUP_3319.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3325 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3325.x = _RESERVED_IDENTIFIER_FIXUP_1324.x;
    _RESERVED_IDENTIFIER_FIXUP_3325.y = _RESERVED_IDENTIFIER_FIXUP_1324.y;
    _RESERVED_IDENTIFIER_FIXUP_3325.z = _RESERVED_IDENTIFIER_FIXUP_1324.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1338 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1308.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1339 = mix(_RESERVED_IDENTIFIER_FIXUP_3325.xyz, _RESERVED_IDENTIFIER_FIXUP_1321, _RESERVED_IDENTIFIER_FIXUP_1338);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3331 = _RESERVED_IDENTIFIER_FIXUP_1289;
    _RESERVED_IDENTIFIER_FIXUP_3331.x = _RESERVED_IDENTIFIER_FIXUP_1339.x;
    _RESERVED_IDENTIFIER_FIXUP_3331.y = _RESERVED_IDENTIFIER_FIXUP_1339.y;
    _RESERVED_IDENTIFIER_FIXUP_3331.z = _RESERVED_IDENTIFIER_FIXUP_1339.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1293.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1350 = _RESERVED_IDENTIFIER_FIXUP_1347 * _RESERVED_IDENTIFIER_FIXUP_3319.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3325.x = _RESERVED_IDENTIFIER_FIXUP_1350.x;
    _RESERVED_IDENTIFIER_FIXUP_3325.y = _RESERVED_IDENTIFIER_FIXUP_1350.y;
    _RESERVED_IDENTIFIER_FIXUP_3325.z = _RESERVED_IDENTIFIER_FIXUP_1350.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1364 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1308.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1365 = mix(_RESERVED_IDENTIFIER_FIXUP_3325.xyz, _RESERVED_IDENTIFIER_FIXUP_1347, _RESERVED_IDENTIFIER_FIXUP_1364);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3343 = _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_3343.x = _RESERVED_IDENTIFIER_FIXUP_1365.x;
    _RESERVED_IDENTIFIER_FIXUP_3343.y = _RESERVED_IDENTIFIER_FIXUP_1365.y;
    _RESERVED_IDENTIFIER_FIXUP_3343.z = _RESERVED_IDENTIFIER_FIXUP_1365.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1373 = _RESERVED_IDENTIFIER_FIXUP_1297.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_1373 * _RESERVED_IDENTIFIER_FIXUP_3319.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3325.x = _RESERVED_IDENTIFIER_FIXUP_1376.x;
    _RESERVED_IDENTIFIER_FIXUP_3325.y = _RESERVED_IDENTIFIER_FIXUP_1376.y;
    _RESERVED_IDENTIFIER_FIXUP_3325.z = _RESERVED_IDENTIFIER_FIXUP_1376.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1390 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1308.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1391 = mix(_RESERVED_IDENTIFIER_FIXUP_3325.xyz, _RESERVED_IDENTIFIER_FIXUP_1373, _RESERVED_IDENTIFIER_FIXUP_1390);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_1297;
    _RESERVED_IDENTIFIER_FIXUP_3355.x = _RESERVED_IDENTIFIER_FIXUP_1391.x;
    _RESERVED_IDENTIFIER_FIXUP_3355.y = _RESERVED_IDENTIFIER_FIXUP_1391.y;
    _RESERVED_IDENTIFIER_FIXUP_3355.z = _RESERVED_IDENTIFIER_FIXUP_1391.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_1301.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1402 = _RESERVED_IDENTIFIER_FIXUP_1399 * _RESERVED_IDENTIFIER_FIXUP_3319.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3361 = _RESERVED_IDENTIFIER_FIXUP_1308;
    _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_1402.x;
    _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_1402.y;
    _RESERVED_IDENTIFIER_FIXUP_3361.z = _RESERVED_IDENTIFIER_FIXUP_1402.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1417 = mix(_RESERVED_IDENTIFIER_FIXUP_3361.xyz, _RESERVED_IDENTIFIER_FIXUP_1399, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3361.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3367 = _RESERVED_IDENTIFIER_FIXUP_1301;
    _RESERVED_IDENTIFIER_FIXUP_3367.x = _RESERVED_IDENTIFIER_FIXUP_1417.x;
    _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_1417.y;
    _RESERVED_IDENTIFIER_FIXUP_3367.z = _RESERVED_IDENTIFIER_FIXUP_1417.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1433 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3331, _RESERVED_IDENTIFIER_FIXUP_3343, _RESERVED_IDENTIFIER_FIXUP_1305.xxxx), _RESERVED_IDENTIFIER_FIXUP_3355, _RESERVED_IDENTIFIER_FIXUP_1305.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1445 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3375 = _RESERVED_IDENTIFIER_FIXUP_1433;
    _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_1445;
    float _RESERVED_IDENTIFIER_FIXUP_1451 = clamp((_RESERVED_IDENTIFIER_FIXUP_1445 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_1451;
    float _RESERVED_IDENTIFIER_FIXUP_1457 = ((-_RESERVED_IDENTIFIER_FIXUP_1451) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_1457;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4223;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4220;
    if (_RESERVED_IDENTIFIER_FIXUP_1457 != (-_RESERVED_IDENTIFIER_FIXUP_1457))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1469 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3614;
        _RESERVED_IDENTIFIER_FIXUP_3614.x = _RESERVED_IDENTIFIER_FIXUP_1469.x;
        _RESERVED_IDENTIFIER_FIXUP_3614.y = _RESERVED_IDENTIFIER_FIXUP_1469.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_3614.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3618;
        _RESERVED_IDENTIFIER_FIXUP_3618.x = _RESERVED_IDENTIFIER_FIXUP_1479.x;
        _RESERVED_IDENTIFIER_FIXUP_3618.y = _RESERVED_IDENTIFIER_FIXUP_1479.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1489 = _RESERVED_IDENTIFIER_FIXUP_3614.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3622;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_1489.x;
        _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_1489.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_3614.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3626;
        _RESERVED_IDENTIFIER_FIXUP_3626.x = _RESERVED_IDENTIFIER_FIXUP_1499.x;
        _RESERVED_IDENTIFIER_FIXUP_3626.y = _RESERVED_IDENTIFIER_FIXUP_1499.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1509 = _RESERVED_IDENTIFIER_FIXUP_3614.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3630;
        _RESERVED_IDENTIFIER_FIXUP_3630.x = _RESERVED_IDENTIFIER_FIXUP_1509.x;
        _RESERVED_IDENTIFIER_FIXUP_3630.y = _RESERVED_IDENTIFIER_FIXUP_1509.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1519 = _RESERVED_IDENTIFIER_FIXUP_3614.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3634;
        _RESERVED_IDENTIFIER_FIXUP_3634.x = _RESERVED_IDENTIFIER_FIXUP_1519.x;
        _RESERVED_IDENTIFIER_FIXUP_3634.y = _RESERVED_IDENTIFIER_FIXUP_1519.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1529 = _RESERVED_IDENTIFIER_FIXUP_3614.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3638;
        _RESERVED_IDENTIFIER_FIXUP_3638.x = _RESERVED_IDENTIFIER_FIXUP_1529.x;
        _RESERVED_IDENTIFIER_FIXUP_3638.y = _RESERVED_IDENTIFIER_FIXUP_1529.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1539 = _RESERVED_IDENTIFIER_FIXUP_3614.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3642;
        _RESERVED_IDENTIFIER_FIXUP_3642.x = _RESERVED_IDENTIFIER_FIXUP_1539.x;
        _RESERVED_IDENTIFIER_FIXUP_3642.y = _RESERVED_IDENTIFIER_FIXUP_1539.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_3614.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3646;
        _RESERVED_IDENTIFIER_FIXUP_3646.x = _RESERVED_IDENTIFIER_FIXUP_1549.x;
        _RESERVED_IDENTIFIER_FIXUP_3646.y = _RESERVED_IDENTIFIER_FIXUP_1549.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1557 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1557.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1557.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1563 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3618.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3622.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3626.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3630.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3630.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1603 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_3634.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3638.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3642.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3646.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3646.xy;
        float param_9 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1643 = hdLod5(param_8, param_9);
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3618.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1563.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3622.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1563.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3626.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1563.w = hdLod5(param_14, param_15).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1660 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1563 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3634.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1603.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3638.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1603.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3642.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1603.w = hdLod5(param_20, param_21).x;
        float _RESERVED_IDENTIFIER_FIXUP_1683 = _RESERVED_IDENTIFIER_FIXUP_1643.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3711 = _RESERVED_IDENTIFIER_FIXUP_1643;
        _RESERVED_IDENTIFIER_FIXUP_3711.x = _RESERVED_IDENTIFIER_FIXUP_1683;
        float _RESERVED_IDENTIFIER_FIXUP_1688 = float(_RESERVED_IDENTIFIER_FIXUP_1683 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3711.x = _RESERVED_IDENTIFIER_FIXUP_1688;
        float _RESERVED_IDENTIFIER_FIXUP_1691 = dot(_RESERVED_IDENTIFIER_FIXUP_1660, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3711.y = _RESERVED_IDENTIFIER_FIXUP_1691;
        float _RESERVED_IDENTIFIER_FIXUP_1694 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1603 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3711.z = _RESERVED_IDENTIFIER_FIXUP_1694;
        float _RESERVED_IDENTIFIER_FIXUP_1700 = _RESERVED_IDENTIFIER_FIXUP_1691 + _RESERVED_IDENTIFIER_FIXUP_1694;
        _RESERVED_IDENTIFIER_FIXUP_3711.y = _RESERVED_IDENTIFIER_FIXUP_1700;
        float _RESERVED_IDENTIFIER_FIXUP_1706 = _RESERVED_IDENTIFIER_FIXUP_1688 + _RESERVED_IDENTIFIER_FIXUP_1700;
        _RESERVED_IDENTIFIER_FIXUP_3711.x = _RESERVED_IDENTIFIER_FIXUP_1706;
        _RESERVED_IDENTIFIER_FIXUP_3711.x = _RESERVED_IDENTIFIER_FIXUP_1706 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4223 = _RESERVED_IDENTIFIER_FIXUP_1660;
        _RESERVED_IDENTIFIER_FIXUP_4220 = _RESERVED_IDENTIFIER_FIXUP_3711;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1719 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3375.y = _RESERVED_IDENTIFIER_FIXUP_1719;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4224;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4221;
        if (_RESERVED_IDENTIFIER_FIXUP_1719 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1728 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3548 = _RESERVED_IDENTIFIER_FIXUP_3375;
            _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_1728.x;
            _RESERVED_IDENTIFIER_FIXUP_3548.z = _RESERVED_IDENTIFIER_FIXUP_1728.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1738 = _RESERVED_IDENTIFIER_FIXUP_3548.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3552;
            _RESERVED_IDENTIFIER_FIXUP_3552.x = _RESERVED_IDENTIFIER_FIXUP_1738.x;
            _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_1738.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1748 = _RESERVED_IDENTIFIER_FIXUP_3548.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3556;
            _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_1748.x;
            _RESERVED_IDENTIFIER_FIXUP_3556.y = _RESERVED_IDENTIFIER_FIXUP_1748.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1758 = _RESERVED_IDENTIFIER_FIXUP_3548.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3560;
            _RESERVED_IDENTIFIER_FIXUP_3560.x = _RESERVED_IDENTIFIER_FIXUP_1758.x;
            _RESERVED_IDENTIFIER_FIXUP_3560.y = _RESERVED_IDENTIFIER_FIXUP_1758.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1768 = _RESERVED_IDENTIFIER_FIXUP_3548.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3564;
            _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_1768.x;
            _RESERVED_IDENTIFIER_FIXUP_3564.y = _RESERVED_IDENTIFIER_FIXUP_1768.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1776 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1776.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1776.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1782 = hdLod6(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_3552.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3556.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3560.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3564.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3552.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1782.y = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3556.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1782.z = hdLod6(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3560.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1782.w = hdLod6(param_28, param_29).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1839 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1782 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3564.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1845 = hdLod6(param_30, param_31).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_1845;
            float _RESERVED_IDENTIFIER_FIXUP_1850 = float(_RESERVED_IDENTIFIER_FIXUP_1845 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_1850;
            float _RESERVED_IDENTIFIER_FIXUP_1853 = dot(_RESERVED_IDENTIFIER_FIXUP_1839, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3548.z = _RESERVED_IDENTIFIER_FIXUP_1853;
            float _RESERVED_IDENTIFIER_FIXUP_1859 = _RESERVED_IDENTIFIER_FIXUP_1850 + _RESERVED_IDENTIFIER_FIXUP_1853;
            _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_1859;
            _RESERVED_IDENTIFIER_FIXUP_3548.x = _RESERVED_IDENTIFIER_FIXUP_1859 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4224 = _RESERVED_IDENTIFIER_FIXUP_1839;
            _RESERVED_IDENTIFIER_FIXUP_4221 = _RESERVED_IDENTIFIER_FIXUP_3548;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1872 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3392 = _RESERVED_IDENTIFIER_FIXUP_3375;
            _RESERVED_IDENTIFIER_FIXUP_3392.y = _RESERVED_IDENTIFIER_FIXUP_1872;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4225;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4222;
            if (_RESERVED_IDENTIFIER_FIXUP_1872 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1881 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3482 = _RESERVED_IDENTIFIER_FIXUP_3392;
                _RESERVED_IDENTIFIER_FIXUP_3482.y = _RESERVED_IDENTIFIER_FIXUP_1881.x;
                _RESERVED_IDENTIFIER_FIXUP_3482.z = _RESERVED_IDENTIFIER_FIXUP_1881.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1891 = _RESERVED_IDENTIFIER_FIXUP_3482.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3486;
                _RESERVED_IDENTIFIER_FIXUP_3486.x = _RESERVED_IDENTIFIER_FIXUP_1891.x;
                _RESERVED_IDENTIFIER_FIXUP_3486.y = _RESERVED_IDENTIFIER_FIXUP_1891.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1901 = _RESERVED_IDENTIFIER_FIXUP_3482.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3490;
                _RESERVED_IDENTIFIER_FIXUP_3490.x = _RESERVED_IDENTIFIER_FIXUP_1901.x;
                _RESERVED_IDENTIFIER_FIXUP_3490.y = _RESERVED_IDENTIFIER_FIXUP_1901.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1911 = _RESERVED_IDENTIFIER_FIXUP_3482.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3494;
                _RESERVED_IDENTIFIER_FIXUP_3494.x = _RESERVED_IDENTIFIER_FIXUP_1911.x;
                _RESERVED_IDENTIFIER_FIXUP_3494.y = _RESERVED_IDENTIFIER_FIXUP_1911.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1921 = _RESERVED_IDENTIFIER_FIXUP_3482.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3498;
                _RESERVED_IDENTIFIER_FIXUP_3498.x = _RESERVED_IDENTIFIER_FIXUP_1921.x;
                _RESERVED_IDENTIFIER_FIXUP_3498.y = _RESERVED_IDENTIFIER_FIXUP_1921.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1929 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1929.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1929.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1935 = hdLod7(param_32, param_33);
                _RESERVED_IDENTIFIER_FIXUP_3486.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3490.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3494.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3498.w = 0.0;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3486.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1935.y = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3490.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1935.z = hdLod7(param_36, param_37).x;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3494.xy;
                float param_39 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1935.w = hdLod7(param_38, param_39).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1992 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1935 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3498.xy;
                float param_41 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1998 = hdLod7(param_40, param_41).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3482.y = _RESERVED_IDENTIFIER_FIXUP_1998;
                float _RESERVED_IDENTIFIER_FIXUP_2003 = float(_RESERVED_IDENTIFIER_FIXUP_1998 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3482.y = _RESERVED_IDENTIFIER_FIXUP_2003;
                float _RESERVED_IDENTIFIER_FIXUP_2006 = dot(_RESERVED_IDENTIFIER_FIXUP_1992, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3482.z = _RESERVED_IDENTIFIER_FIXUP_2006;
                float _RESERVED_IDENTIFIER_FIXUP_2012 = _RESERVED_IDENTIFIER_FIXUP_2003 + _RESERVED_IDENTIFIER_FIXUP_2006;
                _RESERVED_IDENTIFIER_FIXUP_3482.y = _RESERVED_IDENTIFIER_FIXUP_2012;
                _RESERVED_IDENTIFIER_FIXUP_3482.x = _RESERVED_IDENTIFIER_FIXUP_2012 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4225 = _RESERVED_IDENTIFIER_FIXUP_1992;
                _RESERVED_IDENTIFIER_FIXUP_4222 = _RESERVED_IDENTIFIER_FIXUP_3482;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3396 = _RESERVED_IDENTIFIER_FIXUP_3355;
                _RESERVED_IDENTIFIER_FIXUP_3396.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3396.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2028 = (_RESERVED_IDENTIFIER_FIXUP_3396.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3401;
                _RESERVED_IDENTIFIER_FIXUP_3401.x = _RESERVED_IDENTIFIER_FIXUP_2028.x;
                _RESERVED_IDENTIFIER_FIXUP_3401.y = _RESERVED_IDENTIFIER_FIXUP_2028.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2038 = _RESERVED_IDENTIFIER_FIXUP_3401.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3405;
                _RESERVED_IDENTIFIER_FIXUP_3405.x = _RESERVED_IDENTIFIER_FIXUP_2038.x;
                _RESERVED_IDENTIFIER_FIXUP_3405.y = _RESERVED_IDENTIFIER_FIXUP_2038.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2048 = _RESERVED_IDENTIFIER_FIXUP_3401.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3409;
                _RESERVED_IDENTIFIER_FIXUP_3409.x = _RESERVED_IDENTIFIER_FIXUP_2048.x;
                _RESERVED_IDENTIFIER_FIXUP_3409.y = _RESERVED_IDENTIFIER_FIXUP_2048.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2058 = _RESERVED_IDENTIFIER_FIXUP_3401.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3413;
                _RESERVED_IDENTIFIER_FIXUP_3413.x = _RESERVED_IDENTIFIER_FIXUP_2058.x;
                _RESERVED_IDENTIFIER_FIXUP_3413.y = _RESERVED_IDENTIFIER_FIXUP_2058.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2068 = _RESERVED_IDENTIFIER_FIXUP_3401.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3417;
                _RESERVED_IDENTIFIER_FIXUP_3417.x = _RESERVED_IDENTIFIER_FIXUP_2068.x;
                _RESERVED_IDENTIFIER_FIXUP_3417.y = _RESERVED_IDENTIFIER_FIXUP_2068.y;
                _RESERVED_IDENTIFIER_FIXUP_3401.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3401.xy;
                float param_43 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2082 = hdLod8(param_42, param_43);
                _RESERVED_IDENTIFIER_FIXUP_3405.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3409.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3413.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3417.w = 0.0;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3405.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2082.y = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3409.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2082.z = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3413.xy;
                float param_49 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2082.w = hdLod8(param_48, param_49).x;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3417.xy;
                float param_51 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2145 = hdLod8(param_50, param_51).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3457 = _RESERVED_IDENTIFIER_FIXUP_3392;
                _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_2145;
                float _RESERVED_IDENTIFIER_FIXUP_2150 = float(_RESERVED_IDENTIFIER_FIXUP_2145 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_2150;
                float _RESERVED_IDENTIFIER_FIXUP_2153 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2082 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3457.z = _RESERVED_IDENTIFIER_FIXUP_2153;
                float _RESERVED_IDENTIFIER_FIXUP_2159 = _RESERVED_IDENTIFIER_FIXUP_2150 + _RESERVED_IDENTIFIER_FIXUP_2153;
                _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_2159;
                float _RESERVED_IDENTIFIER_FIXUP_2167 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3457.z = _RESERVED_IDENTIFIER_FIXUP_2167;
                float _RESERVED_IDENTIFIER_FIXUP_2173 = clamp((_RESERVED_IDENTIFIER_FIXUP_2167 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3457.z = _RESERVED_IDENTIFIER_FIXUP_2173;
                float _RESERVED_IDENTIFIER_FIXUP_2178 = (_RESERVED_IDENTIFIER_FIXUP_2159 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_2178;
                _RESERVED_IDENTIFIER_FIXUP_3457.x = (_RESERVED_IDENTIFIER_FIXUP_2173 * _RESERVED_IDENTIFIER_FIXUP_2178) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4225 = _RESERVED_IDENTIFIER_FIXUP_3396;
                _RESERVED_IDENTIFIER_FIXUP_4222 = _RESERVED_IDENTIFIER_FIXUP_3457;
            }
            _RESERVED_IDENTIFIER_FIXUP_4224 = _RESERVED_IDENTIFIER_FIXUP_4225;
            _RESERVED_IDENTIFIER_FIXUP_4221 = _RESERVED_IDENTIFIER_FIXUP_4222;
        }
        _RESERVED_IDENTIFIER_FIXUP_4223 = _RESERVED_IDENTIFIER_FIXUP_4224;
        _RESERVED_IDENTIFIER_FIXUP_4220 = _RESERVED_IDENTIFIER_FIXUP_4221;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3734 = _RESERVED_IDENTIFIER_FIXUP_4220;
    _RESERVED_IDENTIFIER_FIXUP_3734.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3736 = _RESERVED_IDENTIFIER_FIXUP_4223;
    _RESERVED_IDENTIFIER_FIXUP_3736.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3736.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3736.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2217 = _RESERVED_IDENTIFIER_FIXUP_3734.xxx * _RESERVED_IDENTIFIER_FIXUP_3736.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4238 = vec4(_RESERVED_IDENTIFIER_FIXUP_2217.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2217.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2231 = (mix(_RESERVED_IDENTIFIER_FIXUP_1433, _RESERVED_IDENTIFIER_FIXUP_3367, _RESERVED_IDENTIFIER_FIXUP_1305.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_4238.yyy) + _RESERVED_IDENTIFIER_FIXUP_4238.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3748 = _RESERVED_IDENTIFIER_FIXUP_4238;
    _RESERVED_IDENTIFIER_FIXUP_3748.x = _RESERVED_IDENTIFIER_FIXUP_2231.x;
    _RESERVED_IDENTIFIER_FIXUP_3748.y = _RESERVED_IDENTIFIER_FIXUP_2231.y;
    _RESERVED_IDENTIFIER_FIXUP_3748.z = _RESERVED_IDENTIFIER_FIXUP_2231.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2244 = _RESERVED_IDENTIFIER_FIXUP_3748.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3754 = _RESERVED_IDENTIFIER_FIXUP_3748;
    _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2244.x;
    _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2244.y;
    _RESERVED_IDENTIFIER_FIXUP_3754.z = _RESERVED_IDENTIFIER_FIXUP_2244.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2303 = OptTex0( texcoord0.xyz);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2307 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2311 = hdTex2(param_53);
    vec2 param_54 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2315 = hdTex3(param_54);
    vec2 param_55 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2319 = hdTex4(param_55);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2327 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3768 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3768.x = _RESERVED_IDENTIFIER_FIXUP_2327.x;
    _RESERVED_IDENTIFIER_FIXUP_3768.y = _RESERVED_IDENTIFIER_FIXUP_2327.y;
    _RESERVED_IDENTIFIER_FIXUP_3768.z = _RESERVED_IDENTIFIER_FIXUP_2327.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2335 = _RESERVED_IDENTIFIER_FIXUP_2303.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2338 = _RESERVED_IDENTIFIER_FIXUP_2335 * _RESERVED_IDENTIFIER_FIXUP_3768.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3774 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3774.x = _RESERVED_IDENTIFIER_FIXUP_2338.x;
    _RESERVED_IDENTIFIER_FIXUP_3774.y = _RESERVED_IDENTIFIER_FIXUP_2338.y;
    _RESERVED_IDENTIFIER_FIXUP_3774.z = _RESERVED_IDENTIFIER_FIXUP_2338.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2353 = mix(_RESERVED_IDENTIFIER_FIXUP_3774.xyz, _RESERVED_IDENTIFIER_FIXUP_2335, _RESERVED_IDENTIFIER_FIXUP_1338);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3780 = _RESERVED_IDENTIFIER_FIXUP_2303;
    _RESERVED_IDENTIFIER_FIXUP_3780.x = _RESERVED_IDENTIFIER_FIXUP_2353.x;
    _RESERVED_IDENTIFIER_FIXUP_3780.y = _RESERVED_IDENTIFIER_FIXUP_2353.y;
    _RESERVED_IDENTIFIER_FIXUP_3780.z = _RESERVED_IDENTIFIER_FIXUP_2353.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2361 = _RESERVED_IDENTIFIER_FIXUP_2307.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2364 = _RESERVED_IDENTIFIER_FIXUP_2361 * _RESERVED_IDENTIFIER_FIXUP_3768.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3774.x = _RESERVED_IDENTIFIER_FIXUP_2364.x;
    _RESERVED_IDENTIFIER_FIXUP_3774.y = _RESERVED_IDENTIFIER_FIXUP_2364.y;
    _RESERVED_IDENTIFIER_FIXUP_3774.z = _RESERVED_IDENTIFIER_FIXUP_2364.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2379 = mix(_RESERVED_IDENTIFIER_FIXUP_3774.xyz, _RESERVED_IDENTIFIER_FIXUP_2361, _RESERVED_IDENTIFIER_FIXUP_1364);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3792 = _RESERVED_IDENTIFIER_FIXUP_2307;
    _RESERVED_IDENTIFIER_FIXUP_3792.x = _RESERVED_IDENTIFIER_FIXUP_2379.x;
    _RESERVED_IDENTIFIER_FIXUP_3792.y = _RESERVED_IDENTIFIER_FIXUP_2379.y;
    _RESERVED_IDENTIFIER_FIXUP_3792.z = _RESERVED_IDENTIFIER_FIXUP_2379.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2387 = _RESERVED_IDENTIFIER_FIXUP_2311.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2390 = _RESERVED_IDENTIFIER_FIXUP_2387 * _RESERVED_IDENTIFIER_FIXUP_3768.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3774.x = _RESERVED_IDENTIFIER_FIXUP_2390.x;
    _RESERVED_IDENTIFIER_FIXUP_3774.y = _RESERVED_IDENTIFIER_FIXUP_2390.y;
    _RESERVED_IDENTIFIER_FIXUP_3774.z = _RESERVED_IDENTIFIER_FIXUP_2390.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2405 = mix(_RESERVED_IDENTIFIER_FIXUP_3774.xyz, _RESERVED_IDENTIFIER_FIXUP_2387, _RESERVED_IDENTIFIER_FIXUP_1390);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3804 = _RESERVED_IDENTIFIER_FIXUP_2311;
    _RESERVED_IDENTIFIER_FIXUP_3804.x = _RESERVED_IDENTIFIER_FIXUP_2405.x;
    _RESERVED_IDENTIFIER_FIXUP_3804.y = _RESERVED_IDENTIFIER_FIXUP_2405.y;
    _RESERVED_IDENTIFIER_FIXUP_3804.z = _RESERVED_IDENTIFIER_FIXUP_2405.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2413 = _RESERVED_IDENTIFIER_FIXUP_2315.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2416 = _RESERVED_IDENTIFIER_FIXUP_2413 * _RESERVED_IDENTIFIER_FIXUP_3768.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3810 = _RESERVED_IDENTIFIER_FIXUP_1308;
    _RESERVED_IDENTIFIER_FIXUP_3810.x = _RESERVED_IDENTIFIER_FIXUP_2416.x;
    _RESERVED_IDENTIFIER_FIXUP_3810.y = _RESERVED_IDENTIFIER_FIXUP_2416.y;
    _RESERVED_IDENTIFIER_FIXUP_3810.z = _RESERVED_IDENTIFIER_FIXUP_2416.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2431 = mix(_RESERVED_IDENTIFIER_FIXUP_3810.xyz, _RESERVED_IDENTIFIER_FIXUP_2413, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3810.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3816 = _RESERVED_IDENTIFIER_FIXUP_2315;
    _RESERVED_IDENTIFIER_FIXUP_3816.x = _RESERVED_IDENTIFIER_FIXUP_2431.x;
    _RESERVED_IDENTIFIER_FIXUP_3816.y = _RESERVED_IDENTIFIER_FIXUP_2431.y;
    _RESERVED_IDENTIFIER_FIXUP_3816.z = _RESERVED_IDENTIFIER_FIXUP_2431.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2447 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3780, _RESERVED_IDENTIFIER_FIXUP_3792, _RESERVED_IDENTIFIER_FIXUP_2319.xxxx), _RESERVED_IDENTIFIER_FIXUP_3804, _RESERVED_IDENTIFIER_FIXUP_2319.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2452 = mix(_RESERVED_IDENTIFIER_FIXUP_2447, _RESERVED_IDENTIFIER_FIXUP_3816, _RESERVED_IDENTIFIER_FIXUP_2319.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3824 = _RESERVED_IDENTIFIER_FIXUP_2447;
    _RESERVED_IDENTIFIER_FIXUP_3824.x = _RESERVED_IDENTIFIER_FIXUP_1445;
    float _RESERVED_IDENTIFIER_FIXUP_2465 = clamp((_RESERVED_IDENTIFIER_FIXUP_1445 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3824.x = _RESERVED_IDENTIFIER_FIXUP_2465;
    float _RESERVED_IDENTIFIER_FIXUP_2471 = ((-_RESERVED_IDENTIFIER_FIXUP_2465) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3824.x = _RESERVED_IDENTIFIER_FIXUP_2471;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4232;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4229;
    if (_RESERVED_IDENTIFIER_FIXUP_2471 != (-_RESERVED_IDENTIFIER_FIXUP_2471))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2483 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_4063;
        _RESERVED_IDENTIFIER_FIXUP_4063.x = _RESERVED_IDENTIFIER_FIXUP_2483.x;
        _RESERVED_IDENTIFIER_FIXUP_4063.y = _RESERVED_IDENTIFIER_FIXUP_2483.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2493 = _RESERVED_IDENTIFIER_FIXUP_4063.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4067;
        _RESERVED_IDENTIFIER_FIXUP_4067.x = _RESERVED_IDENTIFIER_FIXUP_2493.x;
        _RESERVED_IDENTIFIER_FIXUP_4067.y = _RESERVED_IDENTIFIER_FIXUP_2493.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2503 = _RESERVED_IDENTIFIER_FIXUP_4063.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4071;
        _RESERVED_IDENTIFIER_FIXUP_4071.x = _RESERVED_IDENTIFIER_FIXUP_2503.x;
        _RESERVED_IDENTIFIER_FIXUP_4071.y = _RESERVED_IDENTIFIER_FIXUP_2503.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2513 = _RESERVED_IDENTIFIER_FIXUP_4063.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4075;
        _RESERVED_IDENTIFIER_FIXUP_4075.x = _RESERVED_IDENTIFIER_FIXUP_2513.x;
        _RESERVED_IDENTIFIER_FIXUP_4075.y = _RESERVED_IDENTIFIER_FIXUP_2513.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2523 = _RESERVED_IDENTIFIER_FIXUP_4063.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4079;
        _RESERVED_IDENTIFIER_FIXUP_4079.x = _RESERVED_IDENTIFIER_FIXUP_2523.x;
        _RESERVED_IDENTIFIER_FIXUP_4079.y = _RESERVED_IDENTIFIER_FIXUP_2523.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2533 = _RESERVED_IDENTIFIER_FIXUP_4063.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4083;
        _RESERVED_IDENTIFIER_FIXUP_4083.x = _RESERVED_IDENTIFIER_FIXUP_2533.x;
        _RESERVED_IDENTIFIER_FIXUP_4083.y = _RESERVED_IDENTIFIER_FIXUP_2533.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2543 = _RESERVED_IDENTIFIER_FIXUP_4063.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4087;
        _RESERVED_IDENTIFIER_FIXUP_4087.x = _RESERVED_IDENTIFIER_FIXUP_2543.x;
        _RESERVED_IDENTIFIER_FIXUP_4087.y = _RESERVED_IDENTIFIER_FIXUP_2543.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2553 = _RESERVED_IDENTIFIER_FIXUP_4063.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4091;
        _RESERVED_IDENTIFIER_FIXUP_4091.x = _RESERVED_IDENTIFIER_FIXUP_2553.x;
        _RESERVED_IDENTIFIER_FIXUP_4091.y = _RESERVED_IDENTIFIER_FIXUP_2553.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2563 = _RESERVED_IDENTIFIER_FIXUP_4063.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4095;
        _RESERVED_IDENTIFIER_FIXUP_4095.x = _RESERVED_IDENTIFIER_FIXUP_2563.x;
        _RESERVED_IDENTIFIER_FIXUP_4095.y = _RESERVED_IDENTIFIER_FIXUP_2563.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2571 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2571.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2571.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2577 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_4067.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4071.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4075.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4079.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_4079.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2617 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_4083.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4087.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4091.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4095.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_4095.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2657 = hdLod5(param_60, param_61);
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_4067.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2577.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_4071.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2577.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_4075.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2577.w = hdLod5(param_66, param_67).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2674 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2577 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_4083.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2617.y = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4087.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2617.z = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_4091.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2617.w = hdLod5(param_72, param_73).x;
        float _RESERVED_IDENTIFIER_FIXUP_2697 = _RESERVED_IDENTIFIER_FIXUP_2657.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4160 = _RESERVED_IDENTIFIER_FIXUP_2657;
        _RESERVED_IDENTIFIER_FIXUP_4160.x = _RESERVED_IDENTIFIER_FIXUP_2697;
        float _RESERVED_IDENTIFIER_FIXUP_2702 = float(_RESERVED_IDENTIFIER_FIXUP_2697 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_4160.x = _RESERVED_IDENTIFIER_FIXUP_2702;
        float _RESERVED_IDENTIFIER_FIXUP_2705 = dot(_RESERVED_IDENTIFIER_FIXUP_2674, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4160.y = _RESERVED_IDENTIFIER_FIXUP_2705;
        float _RESERVED_IDENTIFIER_FIXUP_2708 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2617 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4160.z = _RESERVED_IDENTIFIER_FIXUP_2708;
        float _RESERVED_IDENTIFIER_FIXUP_2714 = _RESERVED_IDENTIFIER_FIXUP_2705 + _RESERVED_IDENTIFIER_FIXUP_2708;
        _RESERVED_IDENTIFIER_FIXUP_4160.y = _RESERVED_IDENTIFIER_FIXUP_2714;
        float _RESERVED_IDENTIFIER_FIXUP_2720 = _RESERVED_IDENTIFIER_FIXUP_2702 + _RESERVED_IDENTIFIER_FIXUP_2714;
        _RESERVED_IDENTIFIER_FIXUP_4160.x = _RESERVED_IDENTIFIER_FIXUP_2720;
        _RESERVED_IDENTIFIER_FIXUP_4160.x = _RESERVED_IDENTIFIER_FIXUP_2720 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4232 = _RESERVED_IDENTIFIER_FIXUP_2674;
        _RESERVED_IDENTIFIER_FIXUP_4229 = _RESERVED_IDENTIFIER_FIXUP_4160;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2733 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3824.y = _RESERVED_IDENTIFIER_FIXUP_2733;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4233;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4230;
        if (_RESERVED_IDENTIFIER_FIXUP_2733 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2742 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3997 = _RESERVED_IDENTIFIER_FIXUP_3824;
            _RESERVED_IDENTIFIER_FIXUP_3997.y = _RESERVED_IDENTIFIER_FIXUP_2742.x;
            _RESERVED_IDENTIFIER_FIXUP_3997.z = _RESERVED_IDENTIFIER_FIXUP_2742.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2752 = _RESERVED_IDENTIFIER_FIXUP_3997.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4001;
            _RESERVED_IDENTIFIER_FIXUP_4001.x = _RESERVED_IDENTIFIER_FIXUP_2752.x;
            _RESERVED_IDENTIFIER_FIXUP_4001.y = _RESERVED_IDENTIFIER_FIXUP_2752.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2762 = _RESERVED_IDENTIFIER_FIXUP_3997.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4005;
            _RESERVED_IDENTIFIER_FIXUP_4005.x = _RESERVED_IDENTIFIER_FIXUP_2762.x;
            _RESERVED_IDENTIFIER_FIXUP_4005.y = _RESERVED_IDENTIFIER_FIXUP_2762.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2772 = _RESERVED_IDENTIFIER_FIXUP_3997.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4009;
            _RESERVED_IDENTIFIER_FIXUP_4009.x = _RESERVED_IDENTIFIER_FIXUP_2772.x;
            _RESERVED_IDENTIFIER_FIXUP_4009.y = _RESERVED_IDENTIFIER_FIXUP_2772.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2782 = _RESERVED_IDENTIFIER_FIXUP_3997.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4013;
            _RESERVED_IDENTIFIER_FIXUP_4013.x = _RESERVED_IDENTIFIER_FIXUP_2782.x;
            _RESERVED_IDENTIFIER_FIXUP_4013.y = _RESERVED_IDENTIFIER_FIXUP_2782.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2790 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2790.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2790.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2796 = hdLod6(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_4001.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4005.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4009.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4013.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_4001.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2796.y = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_4005.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2796.z = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_4009.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2796.w = hdLod6(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2853 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2796 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_4013.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2859 = hdLod6(param_82, param_83).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3997.y = _RESERVED_IDENTIFIER_FIXUP_2859;
            float _RESERVED_IDENTIFIER_FIXUP_2864 = float(_RESERVED_IDENTIFIER_FIXUP_2859 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3997.y = _RESERVED_IDENTIFIER_FIXUP_2864;
            float _RESERVED_IDENTIFIER_FIXUP_2867 = dot(_RESERVED_IDENTIFIER_FIXUP_2853, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3997.z = _RESERVED_IDENTIFIER_FIXUP_2867;
            float _RESERVED_IDENTIFIER_FIXUP_2873 = _RESERVED_IDENTIFIER_FIXUP_2864 + _RESERVED_IDENTIFIER_FIXUP_2867;
            _RESERVED_IDENTIFIER_FIXUP_3997.y = _RESERVED_IDENTIFIER_FIXUP_2873;
            _RESERVED_IDENTIFIER_FIXUP_3997.x = _RESERVED_IDENTIFIER_FIXUP_2873 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4233 = _RESERVED_IDENTIFIER_FIXUP_2853;
            _RESERVED_IDENTIFIER_FIXUP_4230 = _RESERVED_IDENTIFIER_FIXUP_3997;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2886 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3841 = _RESERVED_IDENTIFIER_FIXUP_3824;
            _RESERVED_IDENTIFIER_FIXUP_3841.y = _RESERVED_IDENTIFIER_FIXUP_2886;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4234;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4231;
            if (_RESERVED_IDENTIFIER_FIXUP_2886 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2895 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3931 = _RESERVED_IDENTIFIER_FIXUP_3841;
                _RESERVED_IDENTIFIER_FIXUP_3931.y = _RESERVED_IDENTIFIER_FIXUP_2895.x;
                _RESERVED_IDENTIFIER_FIXUP_3931.z = _RESERVED_IDENTIFIER_FIXUP_2895.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2905 = _RESERVED_IDENTIFIER_FIXUP_3931.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3935;
                _RESERVED_IDENTIFIER_FIXUP_3935.x = _RESERVED_IDENTIFIER_FIXUP_2905.x;
                _RESERVED_IDENTIFIER_FIXUP_3935.y = _RESERVED_IDENTIFIER_FIXUP_2905.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2915 = _RESERVED_IDENTIFIER_FIXUP_3931.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3939;
                _RESERVED_IDENTIFIER_FIXUP_3939.x = _RESERVED_IDENTIFIER_FIXUP_2915.x;
                _RESERVED_IDENTIFIER_FIXUP_3939.y = _RESERVED_IDENTIFIER_FIXUP_2915.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2925 = _RESERVED_IDENTIFIER_FIXUP_3931.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3943;
                _RESERVED_IDENTIFIER_FIXUP_3943.x = _RESERVED_IDENTIFIER_FIXUP_2925.x;
                _RESERVED_IDENTIFIER_FIXUP_3943.y = _RESERVED_IDENTIFIER_FIXUP_2925.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2935 = _RESERVED_IDENTIFIER_FIXUP_3931.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3947;
                _RESERVED_IDENTIFIER_FIXUP_3947.x = _RESERVED_IDENTIFIER_FIXUP_2935.x;
                _RESERVED_IDENTIFIER_FIXUP_3947.y = _RESERVED_IDENTIFIER_FIXUP_2935.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2943 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2943.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2943.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2949 = hdLod7(param_84, param_85);
                _RESERVED_IDENTIFIER_FIXUP_3935.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3939.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3943.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3947.w = 0.0;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3935.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2949.y = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3939.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2949.z = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3943.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2949.w = hdLod7(param_90, param_91).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3006 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2949 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3947.xy;
                float param_93 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3012 = hdLod7(param_92, param_93).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3931.y = _RESERVED_IDENTIFIER_FIXUP_3012;
                float _RESERVED_IDENTIFIER_FIXUP_3017 = float(_RESERVED_IDENTIFIER_FIXUP_3012 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3931.y = _RESERVED_IDENTIFIER_FIXUP_3017;
                float _RESERVED_IDENTIFIER_FIXUP_3020 = dot(_RESERVED_IDENTIFIER_FIXUP_3006, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3931.z = _RESERVED_IDENTIFIER_FIXUP_3020;
                float _RESERVED_IDENTIFIER_FIXUP_3026 = _RESERVED_IDENTIFIER_FIXUP_3017 + _RESERVED_IDENTIFIER_FIXUP_3020;
                _RESERVED_IDENTIFIER_FIXUP_3931.y = _RESERVED_IDENTIFIER_FIXUP_3026;
                _RESERVED_IDENTIFIER_FIXUP_3931.x = _RESERVED_IDENTIFIER_FIXUP_3026 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4234 = _RESERVED_IDENTIFIER_FIXUP_3006;
                _RESERVED_IDENTIFIER_FIXUP_4231 = _RESERVED_IDENTIFIER_FIXUP_3931;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3845 = _RESERVED_IDENTIFIER_FIXUP_3804;
                _RESERVED_IDENTIFIER_FIXUP_3845.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3845.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3042 = (_RESERVED_IDENTIFIER_FIXUP_3845.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3850;
                _RESERVED_IDENTIFIER_FIXUP_3850.x = _RESERVED_IDENTIFIER_FIXUP_3042.x;
                _RESERVED_IDENTIFIER_FIXUP_3850.y = _RESERVED_IDENTIFIER_FIXUP_3042.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3052 = _RESERVED_IDENTIFIER_FIXUP_3850.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3854;
                _RESERVED_IDENTIFIER_FIXUP_3854.x = _RESERVED_IDENTIFIER_FIXUP_3052.x;
                _RESERVED_IDENTIFIER_FIXUP_3854.y = _RESERVED_IDENTIFIER_FIXUP_3052.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3062 = _RESERVED_IDENTIFIER_FIXUP_3850.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3858;
                _RESERVED_IDENTIFIER_FIXUP_3858.x = _RESERVED_IDENTIFIER_FIXUP_3062.x;
                _RESERVED_IDENTIFIER_FIXUP_3858.y = _RESERVED_IDENTIFIER_FIXUP_3062.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3072 = _RESERVED_IDENTIFIER_FIXUP_3850.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3862;
                _RESERVED_IDENTIFIER_FIXUP_3862.x = _RESERVED_IDENTIFIER_FIXUP_3072.x;
                _RESERVED_IDENTIFIER_FIXUP_3862.y = _RESERVED_IDENTIFIER_FIXUP_3072.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3082 = _RESERVED_IDENTIFIER_FIXUP_3850.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3866;
                _RESERVED_IDENTIFIER_FIXUP_3866.x = _RESERVED_IDENTIFIER_FIXUP_3082.x;
                _RESERVED_IDENTIFIER_FIXUP_3866.y = _RESERVED_IDENTIFIER_FIXUP_3082.y;
                _RESERVED_IDENTIFIER_FIXUP_3850.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3850.xy;
                float param_95 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3096 = hdLod8(param_94, param_95);
                _RESERVED_IDENTIFIER_FIXUP_3854.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3858.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3862.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3866.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3854.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3096.y = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3858.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3096.z = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3862.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3096.w = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3866.xy;
                float param_103 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3159 = hdLod8(param_102, param_103).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3906 = _RESERVED_IDENTIFIER_FIXUP_3841;
                _RESERVED_IDENTIFIER_FIXUP_3906.y = _RESERVED_IDENTIFIER_FIXUP_3159;
                float _RESERVED_IDENTIFIER_FIXUP_3164 = float(_RESERVED_IDENTIFIER_FIXUP_3159 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3906.y = _RESERVED_IDENTIFIER_FIXUP_3164;
                float _RESERVED_IDENTIFIER_FIXUP_3167 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_3096 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3906.z = _RESERVED_IDENTIFIER_FIXUP_3167;
                float _RESERVED_IDENTIFIER_FIXUP_3173 = _RESERVED_IDENTIFIER_FIXUP_3164 + _RESERVED_IDENTIFIER_FIXUP_3167;
                _RESERVED_IDENTIFIER_FIXUP_3906.y = _RESERVED_IDENTIFIER_FIXUP_3173;
                float _RESERVED_IDENTIFIER_FIXUP_3181 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3906.z = _RESERVED_IDENTIFIER_FIXUP_3181;
                float _RESERVED_IDENTIFIER_FIXUP_3187 = clamp((_RESERVED_IDENTIFIER_FIXUP_3181 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3906.z = _RESERVED_IDENTIFIER_FIXUP_3187;
                float _RESERVED_IDENTIFIER_FIXUP_3192 = (_RESERVED_IDENTIFIER_FIXUP_3173 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3906.y = _RESERVED_IDENTIFIER_FIXUP_3192;
                _RESERVED_IDENTIFIER_FIXUP_3906.x = (_RESERVED_IDENTIFIER_FIXUP_3187 * _RESERVED_IDENTIFIER_FIXUP_3192) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4234 = _RESERVED_IDENTIFIER_FIXUP_3845;
                _RESERVED_IDENTIFIER_FIXUP_4231 = _RESERVED_IDENTIFIER_FIXUP_3906;
            }
            _RESERVED_IDENTIFIER_FIXUP_4233 = _RESERVED_IDENTIFIER_FIXUP_4234;
            _RESERVED_IDENTIFIER_FIXUP_4230 = _RESERVED_IDENTIFIER_FIXUP_4231;
        }
        _RESERVED_IDENTIFIER_FIXUP_4232 = _RESERVED_IDENTIFIER_FIXUP_4233;
        _RESERVED_IDENTIFIER_FIXUP_4229 = _RESERVED_IDENTIFIER_FIXUP_4230;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3207 = (_RESERVED_IDENTIFIER_FIXUP_4229.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4181 = _RESERVED_IDENTIFIER_FIXUP_4229;
    _RESERVED_IDENTIFIER_FIXUP_4181.y = _RESERVED_IDENTIFIER_FIXUP_3207;
    _RESERVED_IDENTIFIER_FIXUP_4181.y = _RESERVED_IDENTIFIER_FIXUP_3207;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3220 = _RESERVED_IDENTIFIER_FIXUP_2452.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4187 = _RESERVED_IDENTIFIER_FIXUP_4232;
    _RESERVED_IDENTIFIER_FIXUP_4187.x = _RESERVED_IDENTIFIER_FIXUP_3220.x;
    _RESERVED_IDENTIFIER_FIXUP_4187.y = _RESERVED_IDENTIFIER_FIXUP_3220.y;
    _RESERVED_IDENTIFIER_FIXUP_4187.z = _RESERVED_IDENTIFIER_FIXUP_3220.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3231 = _RESERVED_IDENTIFIER_FIXUP_4181.xxx * _RESERVED_IDENTIFIER_FIXUP_4187.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4240 = vec4(_RESERVED_IDENTIFIER_FIXUP_3231.x, _RESERVED_IDENTIFIER_FIXUP_3207, _RESERVED_IDENTIFIER_FIXUP_3231.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3245 = (_RESERVED_IDENTIFIER_FIXUP_2452.xyz * _RESERVED_IDENTIFIER_FIXUP_4240.yyy) + _RESERVED_IDENTIFIER_FIXUP_4240.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4199 = _RESERVED_IDENTIFIER_FIXUP_4240;
    _RESERVED_IDENTIFIER_FIXUP_4199.x = _RESERVED_IDENTIFIER_FIXUP_3245.x;
    _RESERVED_IDENTIFIER_FIXUP_4199.y = _RESERVED_IDENTIFIER_FIXUP_3245.y;
    _RESERVED_IDENTIFIER_FIXUP_4199.z = _RESERVED_IDENTIFIER_FIXUP_3245.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3258 = _RESERVED_IDENTIFIER_FIXUP_4199.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4205 = _RESERVED_IDENTIFIER_FIXUP_4199;
    _RESERVED_IDENTIFIER_FIXUP_4205.x = _RESERVED_IDENTIFIER_FIXUP_3258.x;
    _RESERVED_IDENTIFIER_FIXUP_4205.y = _RESERVED_IDENTIFIER_FIXUP_3258.y;
    _RESERVED_IDENTIFIER_FIXUP_4205.z = _RESERVED_IDENTIFIER_FIXUP_3258.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4205.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1145 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1154;
    if (_RESERVED_IDENTIFIER_FIXUP_1145)
    {
        _RESERVED_IDENTIFIER_FIXUP_1154 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_1145;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1154)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1191 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3754.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1217 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3311;
    if (_RESERVED_IDENTIFIER_FIXUP_1191 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3311 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1191), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1217);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3311 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1217);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3311;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3207);
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
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        vec2 hdB274 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.x = hdB274.x;
        r0.y = hdB274.y;
        vec2 hdB285 = r0.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB285.x;
        r2.y = hdB285.y;
        vec2 hdB296 = r0.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB296.x;
        r3.y = hdB296.y;
        vec2 hdB307 = r0.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB307.x;
        r4.y = hdB307.y;
        vec2 hdB318 = r0.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB318.x;
        r5.y = hdB318.y;
        vec2 hdB329 = r0.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB329.x;
        r6.y = hdB329.y;
        vec2 hdB340 = r0.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB340.x;
        r7.y = hdB340.y;
        vec2 hdB351 = r0.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB351.x;
        r8.y = hdB351.y;
        vec4 hdB356 = r0;
        vec2 hdB362 = hdB356.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r0.x = hdB362.x;
        r0.y = hdB362.y;
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
        r0.z = 0.0;
        r0.w = 0.0;
        vec2 param_20 = r0.xy;
        float param_21 = r0.w;
        r0 = hdLod5(param_20, param_21);
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
        r0.x += (-v5.z);
        r0.x = float(r0.x >= 0.0);
        r0.y = dot(r2, vec4(1.0));
        r0.z = dot(r3, vec4(1.0));
        r0.y += r0.z;
        r0.x += r0.y;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v6.x), abs(v6.y));
        if (r0.y < 1.0)
        {
            vec2 hdB549 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB549.x;
            r0.z = hdB549.y;
            vec2 hdB559 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB559.x;
            r2.y = hdB559.y;
            vec2 hdB569 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB569.x;
            r3.y = hdB569.y;
            vec2 hdB579 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB579.x;
            r4.y = hdB579.y;
            vec2 hdB589 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB589.x;
            r5.y = hdB589.y;
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
            r0.y = r5.x + (-v6.z);
            r0.y = float(r0.y >= 0.0);
            r0.z = dot(r2, vec4(1.0));
            r0.y += r0.z;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v7.x), abs(v7.y));
            if (r0.y < 1.0)
            {
                vec2 hdB705 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB705.x;
                r0.z = hdB705.y;
                vec2 hdB715 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB715.x;
                r2.y = hdB715.y;
                vec2 hdB725 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB725.x;
                r3.y = hdB725.y;
                vec2 hdB735 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB735.x;
                r4.y = hdB735.y;
                vec2 hdB745 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB745.x;
                r5.y = hdB745.y;
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
                r0.y = r5.x + (-v7.z);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r2, vec4(1.0));
                r0.y += r0.z;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v5.w;
                r2.y = v6.w;
                vec2 hdB853 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB853.x;
                r3.y = hdB853.y;
                vec2 hdB863 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB863.x;
                r4.y = hdB863.y;
                vec2 hdB873 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB873.x;
                r5.y = hdB873.y;
                vec2 hdB883 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB883.x;
                r6.y = hdB883.y;
                vec2 hdB893 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB893.x;
                r7.y = hdB893.y;
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
                r0.y = r7.x + (-v7.w);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r3, vec4(1.0));
                r0.y += r0.z;
                r0.z = max(abs(r2.x), abs(r2.y));
                r0.z = clamp((r0.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.z * r0.y) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB1027 = r1.www * v1.xyz;
    r2.x = hdB1027.x;
    r2.y = hdB1027.y;
    r2.z = hdB1027.z;
    vec4 hdB1034 = r0;
    vec3 hdB1038 = hdB1034.xxx * r2.xyz;
    r0.x = hdB1038.x;
    r0.z = hdB1038.y;
    r0.w = hdB1038.z;
    vec4 hdB1047 = r0;
    vec4 hdB1050 = r0;
    vec3 hdB1052 = (r1.xyz * hdB1047.yyy) + hdB1050.xzw;
    r0.x = hdB1052.x;
    r0.y = hdB1052.y;
    r0.z = hdB1052.z;
    vec4 hdB1059 = r0;
    vec3 hdB1066 = hdB1059.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1066.x;
    r0.y = hdB1066.y;
    r0.z = hdB1066.z;
    vec3 hdB1081 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1081.x;
    oC0.y = hdB1081.y;
    oC0.z = hdB1081.z;
    oC0.w = 1.0;
    bool hdB1093 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1101;
    if (hdB1093)
    {
        hdB1101 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1101 = hdB1093;
    }
    if (hdB1101)
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
    bool _3797 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3807;
    if (_3797)
    {
        _3807 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3807 = _3797;
    }
    if (_3807)
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
        bool _3832 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3847;
        if (!_3832)
        {
            _3847 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3847 = _3832;
        }
        if (_3847)
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
