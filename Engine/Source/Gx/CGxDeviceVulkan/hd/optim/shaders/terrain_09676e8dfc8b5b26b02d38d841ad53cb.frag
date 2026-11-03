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
float _RESERVED_IDENTIFIER_FIXUP_4098;
vec4 _RESERVED_IDENTIFIER_FIXUP_4099;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1269 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1273 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1277 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1281 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1285 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1288 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1290 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4098).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1293 = _RESERVED_IDENTIFIER_FIXUP_1290 + _RESERVED_IDENTIFIER_FIXUP_1290;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3265;
    _RESERVED_IDENTIFIER_FIXUP_3265.x = _RESERVED_IDENTIFIER_FIXUP_1293.x;
    _RESERVED_IDENTIFIER_FIXUP_3265.y = _RESERVED_IDENTIFIER_FIXUP_1293.y;
    _RESERVED_IDENTIFIER_FIXUP_3265.z = _RESERVED_IDENTIFIER_FIXUP_1293.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1301 = _RESERVED_IDENTIFIER_FIXUP_1269.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1304 = _RESERVED_IDENTIFIER_FIXUP_1301 * _RESERVED_IDENTIFIER_FIXUP_3265.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3271;
    _RESERVED_IDENTIFIER_FIXUP_3271.x = _RESERVED_IDENTIFIER_FIXUP_1304.x;
    _RESERVED_IDENTIFIER_FIXUP_3271.y = _RESERVED_IDENTIFIER_FIXUP_1304.y;
    _RESERVED_IDENTIFIER_FIXUP_3271.z = _RESERVED_IDENTIFIER_FIXUP_1304.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1318 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1288.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1319 = mix(_RESERVED_IDENTIFIER_FIXUP_3271.xyz, _RESERVED_IDENTIFIER_FIXUP_1301, _RESERVED_IDENTIFIER_FIXUP_1318);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3277 = _RESERVED_IDENTIFIER_FIXUP_1269;
    _RESERVED_IDENTIFIER_FIXUP_3277.x = _RESERVED_IDENTIFIER_FIXUP_1319.x;
    _RESERVED_IDENTIFIER_FIXUP_3277.y = _RESERVED_IDENTIFIER_FIXUP_1319.y;
    _RESERVED_IDENTIFIER_FIXUP_3277.z = _RESERVED_IDENTIFIER_FIXUP_1319.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_1273.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_1327 * _RESERVED_IDENTIFIER_FIXUP_3265.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3283;
    _RESERVED_IDENTIFIER_FIXUP_3283.x = _RESERVED_IDENTIFIER_FIXUP_1330.x;
    _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_1330.y;
    _RESERVED_IDENTIFIER_FIXUP_3283.z = _RESERVED_IDENTIFIER_FIXUP_1330.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1344 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1288.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1345 = mix(_RESERVED_IDENTIFIER_FIXUP_3283.xyz, _RESERVED_IDENTIFIER_FIXUP_1327, _RESERVED_IDENTIFIER_FIXUP_1344);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3289 = _RESERVED_IDENTIFIER_FIXUP_1273;
    _RESERVED_IDENTIFIER_FIXUP_3289.x = _RESERVED_IDENTIFIER_FIXUP_1345.x;
    _RESERVED_IDENTIFIER_FIXUP_3289.y = _RESERVED_IDENTIFIER_FIXUP_1345.y;
    _RESERVED_IDENTIFIER_FIXUP_3289.z = _RESERVED_IDENTIFIER_FIXUP_1345.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1353 = _RESERVED_IDENTIFIER_FIXUP_1277.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1356 = _RESERVED_IDENTIFIER_FIXUP_1353 * _RESERVED_IDENTIFIER_FIXUP_3265.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3295;
    _RESERVED_IDENTIFIER_FIXUP_3295.x = _RESERVED_IDENTIFIER_FIXUP_1356.x;
    _RESERVED_IDENTIFIER_FIXUP_3295.y = _RESERVED_IDENTIFIER_FIXUP_1356.y;
    _RESERVED_IDENTIFIER_FIXUP_3295.z = _RESERVED_IDENTIFIER_FIXUP_1356.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1370 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1288.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1371 = mix(_RESERVED_IDENTIFIER_FIXUP_3295.xyz, _RESERVED_IDENTIFIER_FIXUP_1353, _RESERVED_IDENTIFIER_FIXUP_1370);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3301 = _RESERVED_IDENTIFIER_FIXUP_1277;
    _RESERVED_IDENTIFIER_FIXUP_3301.x = _RESERVED_IDENTIFIER_FIXUP_1371.x;
    _RESERVED_IDENTIFIER_FIXUP_3301.y = _RESERVED_IDENTIFIER_FIXUP_1371.y;
    _RESERVED_IDENTIFIER_FIXUP_3301.z = _RESERVED_IDENTIFIER_FIXUP_1371.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_1281.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1382 = _RESERVED_IDENTIFIER_FIXUP_1379 * _RESERVED_IDENTIFIER_FIXUP_3265.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3307 = _RESERVED_IDENTIFIER_FIXUP_1288;
    _RESERVED_IDENTIFIER_FIXUP_3307.x = _RESERVED_IDENTIFIER_FIXUP_1382.x;
    _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_1382.y;
    _RESERVED_IDENTIFIER_FIXUP_3307.z = _RESERVED_IDENTIFIER_FIXUP_1382.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1397 = mix(_RESERVED_IDENTIFIER_FIXUP_3307.xyz, _RESERVED_IDENTIFIER_FIXUP_1379, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3307.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3313 = _RESERVED_IDENTIFIER_FIXUP_1281;
    _RESERVED_IDENTIFIER_FIXUP_3313.x = _RESERVED_IDENTIFIER_FIXUP_1397.x;
    _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_1397.y;
    _RESERVED_IDENTIFIER_FIXUP_3313.z = _RESERVED_IDENTIFIER_FIXUP_1397.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3277, _RESERVED_IDENTIFIER_FIXUP_3289, _RESERVED_IDENTIFIER_FIXUP_1285.xxxx), _RESERVED_IDENTIFIER_FIXUP_3301, _RESERVED_IDENTIFIER_FIXUP_1285.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1425 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3321 = _RESERVED_IDENTIFIER_FIXUP_1413;
    _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_1425;
    float _RESERVED_IDENTIFIER_FIXUP_1431 = clamp((_RESERVED_IDENTIFIER_FIXUP_1425 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_1431;
    float _RESERVED_IDENTIFIER_FIXUP_1437 = ((-_RESERVED_IDENTIFIER_FIXUP_1431) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_1437;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4103;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4100;
    if (_RESERVED_IDENTIFIER_FIXUP_1437 != (-_RESERVED_IDENTIFIER_FIXUP_1437))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1449 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1449.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1449.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1455 = hdLod5(param_4, param_5);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1459 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3533 = _RESERVED_IDENTIFIER_FIXUP_1455;
        _RESERVED_IDENTIFIER_FIXUP_3533.y = _RESERVED_IDENTIFIER_FIXUP_1459.x;
        _RESERVED_IDENTIFIER_FIXUP_3533.z = _RESERVED_IDENTIFIER_FIXUP_1459.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1469 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3537;
        _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_1469.x;
        _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_1469.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1476 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1480 = _RESERVED_IDENTIFIER_FIXUP_1476.y;
        _RESERVED_IDENTIFIER_FIXUP_3537.w = _RESERVED_IDENTIFIER_FIXUP_1480;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3537.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1480;
        float _RESERVED_IDENTIFIER_FIXUP_1491 = _RESERVED_IDENTIFIER_FIXUP_1455.x + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1491;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1498 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3550;
        _RESERVED_IDENTIFIER_FIXUP_3550.x = _RESERVED_IDENTIFIER_FIXUP_1498.x;
        _RESERVED_IDENTIFIER_FIXUP_3550.y = _RESERVED_IDENTIFIER_FIXUP_1498.y;
        _RESERVED_IDENTIFIER_FIXUP_3550.w = _RESERVED_IDENTIFIER_FIXUP_1480;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3550.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1480;
        float _RESERVED_IDENTIFIER_FIXUP_1520 = _RESERVED_IDENTIFIER_FIXUP_1491 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1520;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3563;
        _RESERVED_IDENTIFIER_FIXUP_3563.x = _RESERVED_IDENTIFIER_FIXUP_1527.x;
        _RESERVED_IDENTIFIER_FIXUP_3563.y = _RESERVED_IDENTIFIER_FIXUP_1527.y;
        _RESERVED_IDENTIFIER_FIXUP_3563.w = _RESERVED_IDENTIFIER_FIXUP_1480;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3563.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1480;
        float _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_1520 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1549;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3576;
        _RESERVED_IDENTIFIER_FIXUP_3576.x = _RESERVED_IDENTIFIER_FIXUP_1556.x;
        _RESERVED_IDENTIFIER_FIXUP_3576.y = _RESERVED_IDENTIFIER_FIXUP_1556.y;
        _RESERVED_IDENTIFIER_FIXUP_3576.w = _RESERVED_IDENTIFIER_FIXUP_1480;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3576.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1480;
        float _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_1549 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1578;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1585 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3589;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1585.x;
        _RESERVED_IDENTIFIER_FIXUP_3589.y = _RESERVED_IDENTIFIER_FIXUP_1585.y;
        _RESERVED_IDENTIFIER_FIXUP_3589.w = _RESERVED_IDENTIFIER_FIXUP_1480;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3589.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1480;
        float _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_1578 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1607;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1614 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3602;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_1614.x;
        _RESERVED_IDENTIFIER_FIXUP_3602.y = _RESERVED_IDENTIFIER_FIXUP_1614.y;
        _RESERVED_IDENTIFIER_FIXUP_3602.w = _RESERVED_IDENTIFIER_FIXUP_1480;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3602.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1480;
        float _RESERVED_IDENTIFIER_FIXUP_1636 = _RESERVED_IDENTIFIER_FIXUP_1607 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1636;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1643 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3615;
        _RESERVED_IDENTIFIER_FIXUP_3615.x = _RESERVED_IDENTIFIER_FIXUP_1643.x;
        _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_1643.y;
        _RESERVED_IDENTIFIER_FIXUP_3615.w = _RESERVED_IDENTIFIER_FIXUP_1480;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3615.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1480;
        float _RESERVED_IDENTIFIER_FIXUP_1665 = _RESERVED_IDENTIFIER_FIXUP_1636 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1665;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1672 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3628;
        _RESERVED_IDENTIFIER_FIXUP_3628.x = _RESERVED_IDENTIFIER_FIXUP_1672.x;
        _RESERVED_IDENTIFIER_FIXUP_3628.y = _RESERVED_IDENTIFIER_FIXUP_1672.y;
        _RESERVED_IDENTIFIER_FIXUP_3628.w = _RESERVED_IDENTIFIER_FIXUP_1480;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3628.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1480;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1689 = hdLod5(param_20, param_21);
        float _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_1665 + _RESERVED_IDENTIFIER_FIXUP_1689.x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1694;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1694 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4103 = _RESERVED_IDENTIFIER_FIXUP_1689;
        _RESERVED_IDENTIFIER_FIXUP_4100 = _RESERVED_IDENTIFIER_FIXUP_3533;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1707 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_1707;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4104;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4101;
        if (_RESERVED_IDENTIFIER_FIXUP_1707 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1716 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1726 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1728 = _RESERVED_IDENTIFIER_FIXUP_1726.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3473 = _RESERVED_IDENTIFIER_FIXUP_3321;
            _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_1728;
            _RESERVED_IDENTIFIER_FIXUP_3473.z = _RESERVED_IDENTIFIER_FIXUP_1726.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1736 = _RESERVED_IDENTIFIER_FIXUP_3473.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3477;
            _RESERVED_IDENTIFIER_FIXUP_3477.x = _RESERVED_IDENTIFIER_FIXUP_1736.x;
            _RESERVED_IDENTIFIER_FIXUP_3477.y = _RESERVED_IDENTIFIER_FIXUP_1736.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1743 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1747 = _RESERVED_IDENTIFIER_FIXUP_1743.y;
            _RESERVED_IDENTIFIER_FIXUP_3477.w = _RESERVED_IDENTIFIER_FIXUP_1747;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1716.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1716.w;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3477.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1747;
            float _RESERVED_IDENTIFIER_FIXUP_1758 = hdLod6(param_22, param_23).x + hdLod6(param_24, param_25).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4123 = vec4(_RESERVED_IDENTIFIER_FIXUP_1437, _RESERVED_IDENTIFIER_FIXUP_1728, _RESERVED_IDENTIFIER_FIXUP_1726.y, _RESERVED_IDENTIFIER_FIXUP_1758);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1765 = _RESERVED_IDENTIFIER_FIXUP_4123.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3490;
            _RESERVED_IDENTIFIER_FIXUP_3490.x = _RESERVED_IDENTIFIER_FIXUP_1765.x;
            _RESERVED_IDENTIFIER_FIXUP_3490.y = _RESERVED_IDENTIFIER_FIXUP_1765.y;
            _RESERVED_IDENTIFIER_FIXUP_3490.w = _RESERVED_IDENTIFIER_FIXUP_1747;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3490.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1747;
            float _RESERVED_IDENTIFIER_FIXUP_1787 = _RESERVED_IDENTIFIER_FIXUP_1758 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_4123.w = _RESERVED_IDENTIFIER_FIXUP_1787;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1794 = _RESERVED_IDENTIFIER_FIXUP_4123.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3503;
            _RESERVED_IDENTIFIER_FIXUP_3503.x = _RESERVED_IDENTIFIER_FIXUP_1794.x;
            _RESERVED_IDENTIFIER_FIXUP_3503.y = _RESERVED_IDENTIFIER_FIXUP_1794.y;
            _RESERVED_IDENTIFIER_FIXUP_3503.w = _RESERVED_IDENTIFIER_FIXUP_1747;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3503.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1747;
            float _RESERVED_IDENTIFIER_FIXUP_1816 = _RESERVED_IDENTIFIER_FIXUP_1787 + hdLod6(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_4123.w = _RESERVED_IDENTIFIER_FIXUP_1816;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1823 = _RESERVED_IDENTIFIER_FIXUP_4123.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3516;
            _RESERVED_IDENTIFIER_FIXUP_3516.x = _RESERVED_IDENTIFIER_FIXUP_1823.x;
            _RESERVED_IDENTIFIER_FIXUP_3516.y = _RESERVED_IDENTIFIER_FIXUP_1823.y;
            _RESERVED_IDENTIFIER_FIXUP_3516.w = _RESERVED_IDENTIFIER_FIXUP_1747;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3516.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1747;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1840 = hdLod6(param_30, param_31);
            float _RESERVED_IDENTIFIER_FIXUP_1845 = _RESERVED_IDENTIFIER_FIXUP_1816 + _RESERVED_IDENTIFIER_FIXUP_1840.x;
            _RESERVED_IDENTIFIER_FIXUP_4123.y = _RESERVED_IDENTIFIER_FIXUP_1845;
            _RESERVED_IDENTIFIER_FIXUP_4123.x = _RESERVED_IDENTIFIER_FIXUP_1845 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4104 = _RESERVED_IDENTIFIER_FIXUP_1840;
            _RESERVED_IDENTIFIER_FIXUP_4101 = _RESERVED_IDENTIFIER_FIXUP_4123;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1858 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3338 = _RESERVED_IDENTIFIER_FIXUP_3321;
            _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_1858;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4105;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4102;
            if (_RESERVED_IDENTIFIER_FIXUP_1858 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1867 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1877 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1879 = _RESERVED_IDENTIFIER_FIXUP_1877.x;
                _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_1879;
                _RESERVED_IDENTIFIER_FIXUP_3338.z = _RESERVED_IDENTIFIER_FIXUP_1877.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1887 = _RESERVED_IDENTIFIER_FIXUP_3338.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3417;
                _RESERVED_IDENTIFIER_FIXUP_3417.x = _RESERVED_IDENTIFIER_FIXUP_1887.x;
                _RESERVED_IDENTIFIER_FIXUP_3417.y = _RESERVED_IDENTIFIER_FIXUP_1887.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1894 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1898 = _RESERVED_IDENTIFIER_FIXUP_1894.y;
                _RESERVED_IDENTIFIER_FIXUP_3417.w = _RESERVED_IDENTIFIER_FIXUP_1898;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1867.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1867.w;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3417.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1898;
                float _RESERVED_IDENTIFIER_FIXUP_1909 = hdLod7(param_32, param_33).x + hdLod7(param_34, param_35).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4122 = vec4(_RESERVED_IDENTIFIER_FIXUP_1437, _RESERVED_IDENTIFIER_FIXUP_1879, _RESERVED_IDENTIFIER_FIXUP_1877.y, _RESERVED_IDENTIFIER_FIXUP_1909);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1916 = _RESERVED_IDENTIFIER_FIXUP_4122.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3430;
                _RESERVED_IDENTIFIER_FIXUP_3430.x = _RESERVED_IDENTIFIER_FIXUP_1916.x;
                _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_1916.y;
                _RESERVED_IDENTIFIER_FIXUP_3430.w = _RESERVED_IDENTIFIER_FIXUP_1898;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3430.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1898;
                float _RESERVED_IDENTIFIER_FIXUP_1938 = _RESERVED_IDENTIFIER_FIXUP_1909 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_4122.w = _RESERVED_IDENTIFIER_FIXUP_1938;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1945 = _RESERVED_IDENTIFIER_FIXUP_4122.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3443;
                _RESERVED_IDENTIFIER_FIXUP_3443.x = _RESERVED_IDENTIFIER_FIXUP_1945.x;
                _RESERVED_IDENTIFIER_FIXUP_3443.y = _RESERVED_IDENTIFIER_FIXUP_1945.y;
                _RESERVED_IDENTIFIER_FIXUP_3443.w = _RESERVED_IDENTIFIER_FIXUP_1898;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3443.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1898;
                float _RESERVED_IDENTIFIER_FIXUP_1967 = _RESERVED_IDENTIFIER_FIXUP_1938 + hdLod7(param_38, param_39).x;
                _RESERVED_IDENTIFIER_FIXUP_4122.w = _RESERVED_IDENTIFIER_FIXUP_1967;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1974 = _RESERVED_IDENTIFIER_FIXUP_4122.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3456;
                _RESERVED_IDENTIFIER_FIXUP_3456.x = _RESERVED_IDENTIFIER_FIXUP_1974.x;
                _RESERVED_IDENTIFIER_FIXUP_3456.y = _RESERVED_IDENTIFIER_FIXUP_1974.y;
                _RESERVED_IDENTIFIER_FIXUP_3456.w = _RESERVED_IDENTIFIER_FIXUP_1898;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3456.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1898;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1991 = hdLod7(param_40, param_41);
                float _RESERVED_IDENTIFIER_FIXUP_1996 = _RESERVED_IDENTIFIER_FIXUP_1967 + _RESERVED_IDENTIFIER_FIXUP_1991.x;
                _RESERVED_IDENTIFIER_FIXUP_4122.y = _RESERVED_IDENTIFIER_FIXUP_1996;
                _RESERVED_IDENTIFIER_FIXUP_4122.x = _RESERVED_IDENTIFIER_FIXUP_1996 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4105 = _RESERVED_IDENTIFIER_FIXUP_1991;
                _RESERVED_IDENTIFIER_FIXUP_4102 = _RESERVED_IDENTIFIER_FIXUP_4122;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2012 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2016 = _RESERVED_IDENTIFIER_FIXUP_2012.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2027 = vec4(_RESERVED_IDENTIFIER_FIXUP_2012.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2016).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4119 = vec4(_RESERVED_IDENTIFIER_FIXUP_2027 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2016);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2064 = _RESERVED_IDENTIFIER_FIXUP_2027 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_4119;
                _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_2064.x;
                _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_2064.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2086 = _RESERVED_IDENTIFIER_FIXUP_2027 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3380 = _RESERVED_IDENTIFIER_FIXUP_3371;
                _RESERVED_IDENTIFIER_FIXUP_3380.x = _RESERVED_IDENTIFIER_FIXUP_2086.x;
                _RESERVED_IDENTIFIER_FIXUP_3380.y = _RESERVED_IDENTIFIER_FIXUP_2086.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2108 = _RESERVED_IDENTIFIER_FIXUP_2027 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3389 = _RESERVED_IDENTIFIER_FIXUP_3380;
                _RESERVED_IDENTIFIER_FIXUP_3389.x = _RESERVED_IDENTIFIER_FIXUP_2108.x;
                _RESERVED_IDENTIFIER_FIXUP_3389.y = _RESERVED_IDENTIFIER_FIXUP_2108.y;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3389.xy;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_2016;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2118 = hdLod8(param_42, param_43);
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_2027;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_2016;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_4119.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_2016;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3371.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_2016;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3380.xy;
                float param_51 = _RESERVED_IDENTIFIER_FIXUP_2016;
                float _RESERVED_IDENTIFIER_FIXUP_2123 = (((hdLod8(param_44, param_45).x + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + hdLod8(param_50, param_51).x) + _RESERVED_IDENTIFIER_FIXUP_2118.x;
                float _RESERVED_IDENTIFIER_FIXUP_2131 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3400 = _RESERVED_IDENTIFIER_FIXUP_2118;
                _RESERVED_IDENTIFIER_FIXUP_3400.x = _RESERVED_IDENTIFIER_FIXUP_2131;
                float _RESERVED_IDENTIFIER_FIXUP_2137 = clamp((_RESERVED_IDENTIFIER_FIXUP_2131 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2142 = (_RESERVED_IDENTIFIER_FIXUP_2123 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4105 = _RESERVED_IDENTIFIER_FIXUP_3400;
                _RESERVED_IDENTIFIER_FIXUP_4102 = vec4((_RESERVED_IDENTIFIER_FIXUP_2137 * _RESERVED_IDENTIFIER_FIXUP_2142) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2137, _RESERVED_IDENTIFIER_FIXUP_2142, _RESERVED_IDENTIFIER_FIXUP_2123);
            }
            _RESERVED_IDENTIFIER_FIXUP_4104 = _RESERVED_IDENTIFIER_FIXUP_4105;
            _RESERVED_IDENTIFIER_FIXUP_4101 = _RESERVED_IDENTIFIER_FIXUP_4102;
        }
        _RESERVED_IDENTIFIER_FIXUP_4103 = _RESERVED_IDENTIFIER_FIXUP_4104;
        _RESERVED_IDENTIFIER_FIXUP_4100 = _RESERVED_IDENTIFIER_FIXUP_4101;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3647 = _RESERVED_IDENTIFIER_FIXUP_4100;
    _RESERVED_IDENTIFIER_FIXUP_3647.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3649 = _RESERVED_IDENTIFIER_FIXUP_4103;
    _RESERVED_IDENTIFIER_FIXUP_3649.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3649.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3649.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2181 = _RESERVED_IDENTIFIER_FIXUP_3647.xxx * _RESERVED_IDENTIFIER_FIXUP_3649.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4124 = vec4(_RESERVED_IDENTIFIER_FIXUP_2181.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2181.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2195 = (mix(_RESERVED_IDENTIFIER_FIXUP_1413, _RESERVED_IDENTIFIER_FIXUP_3313, _RESERVED_IDENTIFIER_FIXUP_1285.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_4124.yyy) + _RESERVED_IDENTIFIER_FIXUP_4124.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3661 = _RESERVED_IDENTIFIER_FIXUP_4124;
    _RESERVED_IDENTIFIER_FIXUP_3661.x = _RESERVED_IDENTIFIER_FIXUP_2195.x;
    _RESERVED_IDENTIFIER_FIXUP_3661.y = _RESERVED_IDENTIFIER_FIXUP_2195.y;
    _RESERVED_IDENTIFIER_FIXUP_3661.z = _RESERVED_IDENTIFIER_FIXUP_2195.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2208 = _RESERVED_IDENTIFIER_FIXUP_3661.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3667 = _RESERVED_IDENTIFIER_FIXUP_3661;
    _RESERVED_IDENTIFIER_FIXUP_3667.x = _RESERVED_IDENTIFIER_FIXUP_2208.x;
    _RESERVED_IDENTIFIER_FIXUP_3667.y = _RESERVED_IDENTIFIER_FIXUP_2208.y;
    _RESERVED_IDENTIFIER_FIXUP_3667.z = _RESERVED_IDENTIFIER_FIXUP_2208.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2265 = OptTex0( texcoord0.xyz);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2269 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2273 = hdTex2(param_53);
    vec2 param_54 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2277 = hdTex3(param_54);
    vec2 param_55 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2281 = hdTex4(param_55);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2289 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
    _RESERVED_IDENTIFIER_FIXUP_3681.x = _RESERVED_IDENTIFIER_FIXUP_2289.x;
    _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2289.y;
    _RESERVED_IDENTIFIER_FIXUP_3681.z = _RESERVED_IDENTIFIER_FIXUP_2289.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2297 = _RESERVED_IDENTIFIER_FIXUP_2265.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2300 = _RESERVED_IDENTIFIER_FIXUP_2297 * _RESERVED_IDENTIFIER_FIXUP_3681.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3687;
    _RESERVED_IDENTIFIER_FIXUP_3687.x = _RESERVED_IDENTIFIER_FIXUP_2300.x;
    _RESERVED_IDENTIFIER_FIXUP_3687.y = _RESERVED_IDENTIFIER_FIXUP_2300.y;
    _RESERVED_IDENTIFIER_FIXUP_3687.z = _RESERVED_IDENTIFIER_FIXUP_2300.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2315 = mix(_RESERVED_IDENTIFIER_FIXUP_3687.xyz, _RESERVED_IDENTIFIER_FIXUP_2297, _RESERVED_IDENTIFIER_FIXUP_1318);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3693 = _RESERVED_IDENTIFIER_FIXUP_2265;
    _RESERVED_IDENTIFIER_FIXUP_3693.x = _RESERVED_IDENTIFIER_FIXUP_2315.x;
    _RESERVED_IDENTIFIER_FIXUP_3693.y = _RESERVED_IDENTIFIER_FIXUP_2315.y;
    _RESERVED_IDENTIFIER_FIXUP_3693.z = _RESERVED_IDENTIFIER_FIXUP_2315.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2323 = _RESERVED_IDENTIFIER_FIXUP_2269.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2326 = _RESERVED_IDENTIFIER_FIXUP_2323 * _RESERVED_IDENTIFIER_FIXUP_3681.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3699;
    _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2326.x;
    _RESERVED_IDENTIFIER_FIXUP_3699.y = _RESERVED_IDENTIFIER_FIXUP_2326.y;
    _RESERVED_IDENTIFIER_FIXUP_3699.z = _RESERVED_IDENTIFIER_FIXUP_2326.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2341 = mix(_RESERVED_IDENTIFIER_FIXUP_3699.xyz, _RESERVED_IDENTIFIER_FIXUP_2323, _RESERVED_IDENTIFIER_FIXUP_1344);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3705 = _RESERVED_IDENTIFIER_FIXUP_2269;
    _RESERVED_IDENTIFIER_FIXUP_3705.x = _RESERVED_IDENTIFIER_FIXUP_2341.x;
    _RESERVED_IDENTIFIER_FIXUP_3705.y = _RESERVED_IDENTIFIER_FIXUP_2341.y;
    _RESERVED_IDENTIFIER_FIXUP_3705.z = _RESERVED_IDENTIFIER_FIXUP_2341.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2349 = _RESERVED_IDENTIFIER_FIXUP_2273.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2352 = _RESERVED_IDENTIFIER_FIXUP_2349 * _RESERVED_IDENTIFIER_FIXUP_3681.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3711;
    _RESERVED_IDENTIFIER_FIXUP_3711.x = _RESERVED_IDENTIFIER_FIXUP_2352.x;
    _RESERVED_IDENTIFIER_FIXUP_3711.y = _RESERVED_IDENTIFIER_FIXUP_2352.y;
    _RESERVED_IDENTIFIER_FIXUP_3711.z = _RESERVED_IDENTIFIER_FIXUP_2352.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2367 = mix(_RESERVED_IDENTIFIER_FIXUP_3711.xyz, _RESERVED_IDENTIFIER_FIXUP_2349, _RESERVED_IDENTIFIER_FIXUP_1370);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3717 = _RESERVED_IDENTIFIER_FIXUP_2273;
    _RESERVED_IDENTIFIER_FIXUP_3717.x = _RESERVED_IDENTIFIER_FIXUP_2367.x;
    _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_2367.y;
    _RESERVED_IDENTIFIER_FIXUP_3717.z = _RESERVED_IDENTIFIER_FIXUP_2367.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2375 = _RESERVED_IDENTIFIER_FIXUP_2277.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2378 = _RESERVED_IDENTIFIER_FIXUP_2375 * _RESERVED_IDENTIFIER_FIXUP_3681.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3723 = _RESERVED_IDENTIFIER_FIXUP_1288;
    _RESERVED_IDENTIFIER_FIXUP_3723.x = _RESERVED_IDENTIFIER_FIXUP_2378.x;
    _RESERVED_IDENTIFIER_FIXUP_3723.y = _RESERVED_IDENTIFIER_FIXUP_2378.y;
    _RESERVED_IDENTIFIER_FIXUP_3723.z = _RESERVED_IDENTIFIER_FIXUP_2378.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2393 = mix(_RESERVED_IDENTIFIER_FIXUP_3723.xyz, _RESERVED_IDENTIFIER_FIXUP_2375, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3723.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3729 = _RESERVED_IDENTIFIER_FIXUP_2277;
    _RESERVED_IDENTIFIER_FIXUP_3729.x = _RESERVED_IDENTIFIER_FIXUP_2393.x;
    _RESERVED_IDENTIFIER_FIXUP_3729.y = _RESERVED_IDENTIFIER_FIXUP_2393.y;
    _RESERVED_IDENTIFIER_FIXUP_3729.z = _RESERVED_IDENTIFIER_FIXUP_2393.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2409 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3693, _RESERVED_IDENTIFIER_FIXUP_3705, _RESERVED_IDENTIFIER_FIXUP_2281.xxxx), _RESERVED_IDENTIFIER_FIXUP_3717, _RESERVED_IDENTIFIER_FIXUP_2281.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2414 = mix(_RESERVED_IDENTIFIER_FIXUP_2409, _RESERVED_IDENTIFIER_FIXUP_3729, _RESERVED_IDENTIFIER_FIXUP_2281.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3737 = _RESERVED_IDENTIFIER_FIXUP_2409;
    _RESERVED_IDENTIFIER_FIXUP_3737.x = _RESERVED_IDENTIFIER_FIXUP_1425;
    float _RESERVED_IDENTIFIER_FIXUP_2427 = clamp((_RESERVED_IDENTIFIER_FIXUP_1425 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3737.x = _RESERVED_IDENTIFIER_FIXUP_2427;
    float _RESERVED_IDENTIFIER_FIXUP_2433 = ((-_RESERVED_IDENTIFIER_FIXUP_2427) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3737.x = _RESERVED_IDENTIFIER_FIXUP_2433;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4112;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4109;
    if (_RESERVED_IDENTIFIER_FIXUP_2433 != (-_RESERVED_IDENTIFIER_FIXUP_2433))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2445 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2445.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2445.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2451 = hdLod5(param_56, param_57);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2455 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3949 = _RESERVED_IDENTIFIER_FIXUP_2451;
        _RESERVED_IDENTIFIER_FIXUP_3949.y = _RESERVED_IDENTIFIER_FIXUP_2455.x;
        _RESERVED_IDENTIFIER_FIXUP_3949.z = _RESERVED_IDENTIFIER_FIXUP_2455.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2465 = _RESERVED_IDENTIFIER_FIXUP_3949.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3953;
        _RESERVED_IDENTIFIER_FIXUP_3953.x = _RESERVED_IDENTIFIER_FIXUP_2465.x;
        _RESERVED_IDENTIFIER_FIXUP_3953.y = _RESERVED_IDENTIFIER_FIXUP_2465.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2472 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2476 = _RESERVED_IDENTIFIER_FIXUP_2472.y;
        _RESERVED_IDENTIFIER_FIXUP_3953.w = _RESERVED_IDENTIFIER_FIXUP_2476;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3953.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2476;
        float _RESERVED_IDENTIFIER_FIXUP_2487 = _RESERVED_IDENTIFIER_FIXUP_2451.x + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3949.x = _RESERVED_IDENTIFIER_FIXUP_2487;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2494 = _RESERVED_IDENTIFIER_FIXUP_3949.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3966;
        _RESERVED_IDENTIFIER_FIXUP_3966.x = _RESERVED_IDENTIFIER_FIXUP_2494.x;
        _RESERVED_IDENTIFIER_FIXUP_3966.y = _RESERVED_IDENTIFIER_FIXUP_2494.y;
        _RESERVED_IDENTIFIER_FIXUP_3966.w = _RESERVED_IDENTIFIER_FIXUP_2476;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3966.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2476;
        float _RESERVED_IDENTIFIER_FIXUP_2516 = _RESERVED_IDENTIFIER_FIXUP_2487 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3949.x = _RESERVED_IDENTIFIER_FIXUP_2516;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2523 = _RESERVED_IDENTIFIER_FIXUP_3949.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3979;
        _RESERVED_IDENTIFIER_FIXUP_3979.x = _RESERVED_IDENTIFIER_FIXUP_2523.x;
        _RESERVED_IDENTIFIER_FIXUP_3979.y = _RESERVED_IDENTIFIER_FIXUP_2523.y;
        _RESERVED_IDENTIFIER_FIXUP_3979.w = _RESERVED_IDENTIFIER_FIXUP_2476;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3979.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2476;
        float _RESERVED_IDENTIFIER_FIXUP_2545 = _RESERVED_IDENTIFIER_FIXUP_2516 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3949.x = _RESERVED_IDENTIFIER_FIXUP_2545;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2552 = _RESERVED_IDENTIFIER_FIXUP_3949.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3992;
        _RESERVED_IDENTIFIER_FIXUP_3992.x = _RESERVED_IDENTIFIER_FIXUP_2552.x;
        _RESERVED_IDENTIFIER_FIXUP_3992.y = _RESERVED_IDENTIFIER_FIXUP_2552.y;
        _RESERVED_IDENTIFIER_FIXUP_3992.w = _RESERVED_IDENTIFIER_FIXUP_2476;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3992.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2476;
        float _RESERVED_IDENTIFIER_FIXUP_2574 = _RESERVED_IDENTIFIER_FIXUP_2545 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3949.x = _RESERVED_IDENTIFIER_FIXUP_2574;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2581 = _RESERVED_IDENTIFIER_FIXUP_3949.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4005;
        _RESERVED_IDENTIFIER_FIXUP_4005.x = _RESERVED_IDENTIFIER_FIXUP_2581.x;
        _RESERVED_IDENTIFIER_FIXUP_4005.y = _RESERVED_IDENTIFIER_FIXUP_2581.y;
        _RESERVED_IDENTIFIER_FIXUP_4005.w = _RESERVED_IDENTIFIER_FIXUP_2476;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_4005.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2476;
        float _RESERVED_IDENTIFIER_FIXUP_2603 = _RESERVED_IDENTIFIER_FIXUP_2574 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3949.x = _RESERVED_IDENTIFIER_FIXUP_2603;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2610 = _RESERVED_IDENTIFIER_FIXUP_3949.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4018;
        _RESERVED_IDENTIFIER_FIXUP_4018.x = _RESERVED_IDENTIFIER_FIXUP_2610.x;
        _RESERVED_IDENTIFIER_FIXUP_4018.y = _RESERVED_IDENTIFIER_FIXUP_2610.y;
        _RESERVED_IDENTIFIER_FIXUP_4018.w = _RESERVED_IDENTIFIER_FIXUP_2476;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_4018.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2476;
        float _RESERVED_IDENTIFIER_FIXUP_2632 = _RESERVED_IDENTIFIER_FIXUP_2603 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3949.x = _RESERVED_IDENTIFIER_FIXUP_2632;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2639 = _RESERVED_IDENTIFIER_FIXUP_3949.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4031;
        _RESERVED_IDENTIFIER_FIXUP_4031.x = _RESERVED_IDENTIFIER_FIXUP_2639.x;
        _RESERVED_IDENTIFIER_FIXUP_4031.y = _RESERVED_IDENTIFIER_FIXUP_2639.y;
        _RESERVED_IDENTIFIER_FIXUP_4031.w = _RESERVED_IDENTIFIER_FIXUP_2476;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4031.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2476;
        float _RESERVED_IDENTIFIER_FIXUP_2661 = _RESERVED_IDENTIFIER_FIXUP_2632 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3949.x = _RESERVED_IDENTIFIER_FIXUP_2661;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2668 = _RESERVED_IDENTIFIER_FIXUP_3949.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4044;
        _RESERVED_IDENTIFIER_FIXUP_4044.x = _RESERVED_IDENTIFIER_FIXUP_2668.x;
        _RESERVED_IDENTIFIER_FIXUP_4044.y = _RESERVED_IDENTIFIER_FIXUP_2668.y;
        _RESERVED_IDENTIFIER_FIXUP_4044.w = _RESERVED_IDENTIFIER_FIXUP_2476;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_4044.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2476;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2685 = hdLod5(param_72, param_73);
        float _RESERVED_IDENTIFIER_FIXUP_2690 = _RESERVED_IDENTIFIER_FIXUP_2661 + _RESERVED_IDENTIFIER_FIXUP_2685.x;
        _RESERVED_IDENTIFIER_FIXUP_3949.x = _RESERVED_IDENTIFIER_FIXUP_2690;
        _RESERVED_IDENTIFIER_FIXUP_3949.x = _RESERVED_IDENTIFIER_FIXUP_2690 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4112 = _RESERVED_IDENTIFIER_FIXUP_2685;
        _RESERVED_IDENTIFIER_FIXUP_4109 = _RESERVED_IDENTIFIER_FIXUP_3949;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2703 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3737.y = _RESERVED_IDENTIFIER_FIXUP_2703;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4113;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4110;
        if (_RESERVED_IDENTIFIER_FIXUP_2703 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2712 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2722 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2724 = _RESERVED_IDENTIFIER_FIXUP_2722.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3889 = _RESERVED_IDENTIFIER_FIXUP_3737;
            _RESERVED_IDENTIFIER_FIXUP_3889.y = _RESERVED_IDENTIFIER_FIXUP_2724;
            _RESERVED_IDENTIFIER_FIXUP_3889.z = _RESERVED_IDENTIFIER_FIXUP_2722.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2732 = _RESERVED_IDENTIFIER_FIXUP_3889.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3893;
            _RESERVED_IDENTIFIER_FIXUP_3893.x = _RESERVED_IDENTIFIER_FIXUP_2732.x;
            _RESERVED_IDENTIFIER_FIXUP_3893.y = _RESERVED_IDENTIFIER_FIXUP_2732.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2739 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2743 = _RESERVED_IDENTIFIER_FIXUP_2739.y;
            _RESERVED_IDENTIFIER_FIXUP_3893.w = _RESERVED_IDENTIFIER_FIXUP_2743;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2712.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2712.w;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3893.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2743;
            float _RESERVED_IDENTIFIER_FIXUP_2754 = hdLod6(param_74, param_75).x + hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4131 = vec4(_RESERVED_IDENTIFIER_FIXUP_2433, _RESERVED_IDENTIFIER_FIXUP_2724, _RESERVED_IDENTIFIER_FIXUP_2722.y, _RESERVED_IDENTIFIER_FIXUP_2754);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2761 = _RESERVED_IDENTIFIER_FIXUP_4131.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3906;
            _RESERVED_IDENTIFIER_FIXUP_3906.x = _RESERVED_IDENTIFIER_FIXUP_2761.x;
            _RESERVED_IDENTIFIER_FIXUP_3906.y = _RESERVED_IDENTIFIER_FIXUP_2761.y;
            _RESERVED_IDENTIFIER_FIXUP_3906.w = _RESERVED_IDENTIFIER_FIXUP_2743;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3906.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2743;
            float _RESERVED_IDENTIFIER_FIXUP_2783 = _RESERVED_IDENTIFIER_FIXUP_2754 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_4131.w = _RESERVED_IDENTIFIER_FIXUP_2783;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2790 = _RESERVED_IDENTIFIER_FIXUP_4131.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3919;
            _RESERVED_IDENTIFIER_FIXUP_3919.x = _RESERVED_IDENTIFIER_FIXUP_2790.x;
            _RESERVED_IDENTIFIER_FIXUP_3919.y = _RESERVED_IDENTIFIER_FIXUP_2790.y;
            _RESERVED_IDENTIFIER_FIXUP_3919.w = _RESERVED_IDENTIFIER_FIXUP_2743;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3919.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2743;
            float _RESERVED_IDENTIFIER_FIXUP_2812 = _RESERVED_IDENTIFIER_FIXUP_2783 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_4131.w = _RESERVED_IDENTIFIER_FIXUP_2812;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2819 = _RESERVED_IDENTIFIER_FIXUP_4131.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3932;
            _RESERVED_IDENTIFIER_FIXUP_3932.x = _RESERVED_IDENTIFIER_FIXUP_2819.x;
            _RESERVED_IDENTIFIER_FIXUP_3932.y = _RESERVED_IDENTIFIER_FIXUP_2819.y;
            _RESERVED_IDENTIFIER_FIXUP_3932.w = _RESERVED_IDENTIFIER_FIXUP_2743;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3932.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2743;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2836 = hdLod6(param_82, param_83);
            float _RESERVED_IDENTIFIER_FIXUP_2841 = _RESERVED_IDENTIFIER_FIXUP_2812 + _RESERVED_IDENTIFIER_FIXUP_2836.x;
            _RESERVED_IDENTIFIER_FIXUP_4131.y = _RESERVED_IDENTIFIER_FIXUP_2841;
            _RESERVED_IDENTIFIER_FIXUP_4131.x = _RESERVED_IDENTIFIER_FIXUP_2841 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4113 = _RESERVED_IDENTIFIER_FIXUP_2836;
            _RESERVED_IDENTIFIER_FIXUP_4110 = _RESERVED_IDENTIFIER_FIXUP_4131;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2854 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3754 = _RESERVED_IDENTIFIER_FIXUP_3737;
            _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2854;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4114;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4111;
            if (_RESERVED_IDENTIFIER_FIXUP_2854 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2863 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2873 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2875 = _RESERVED_IDENTIFIER_FIXUP_2873.x;
                _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2875;
                _RESERVED_IDENTIFIER_FIXUP_3754.z = _RESERVED_IDENTIFIER_FIXUP_2873.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2883 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3833;
                _RESERVED_IDENTIFIER_FIXUP_3833.x = _RESERVED_IDENTIFIER_FIXUP_2883.x;
                _RESERVED_IDENTIFIER_FIXUP_3833.y = _RESERVED_IDENTIFIER_FIXUP_2883.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2890 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2894 = _RESERVED_IDENTIFIER_FIXUP_2890.y;
                _RESERVED_IDENTIFIER_FIXUP_3833.w = _RESERVED_IDENTIFIER_FIXUP_2894;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2863.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2863.w;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3833.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2894;
                float _RESERVED_IDENTIFIER_FIXUP_2905 = hdLod7(param_84, param_85).x + hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4130 = vec4(_RESERVED_IDENTIFIER_FIXUP_2433, _RESERVED_IDENTIFIER_FIXUP_2875, _RESERVED_IDENTIFIER_FIXUP_2873.y, _RESERVED_IDENTIFIER_FIXUP_2905);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2912 = _RESERVED_IDENTIFIER_FIXUP_4130.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3846;
                _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2912.x;
                _RESERVED_IDENTIFIER_FIXUP_3846.y = _RESERVED_IDENTIFIER_FIXUP_2912.y;
                _RESERVED_IDENTIFIER_FIXUP_3846.w = _RESERVED_IDENTIFIER_FIXUP_2894;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3846.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2894;
                float _RESERVED_IDENTIFIER_FIXUP_2934 = _RESERVED_IDENTIFIER_FIXUP_2905 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_4130.w = _RESERVED_IDENTIFIER_FIXUP_2934;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2941 = _RESERVED_IDENTIFIER_FIXUP_4130.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3859;
                _RESERVED_IDENTIFIER_FIXUP_3859.x = _RESERVED_IDENTIFIER_FIXUP_2941.x;
                _RESERVED_IDENTIFIER_FIXUP_3859.y = _RESERVED_IDENTIFIER_FIXUP_2941.y;
                _RESERVED_IDENTIFIER_FIXUP_3859.w = _RESERVED_IDENTIFIER_FIXUP_2894;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3859.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2894;
                float _RESERVED_IDENTIFIER_FIXUP_2963 = _RESERVED_IDENTIFIER_FIXUP_2934 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_4130.w = _RESERVED_IDENTIFIER_FIXUP_2963;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2970 = _RESERVED_IDENTIFIER_FIXUP_4130.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3872;
                _RESERVED_IDENTIFIER_FIXUP_3872.x = _RESERVED_IDENTIFIER_FIXUP_2970.x;
                _RESERVED_IDENTIFIER_FIXUP_3872.y = _RESERVED_IDENTIFIER_FIXUP_2970.y;
                _RESERVED_IDENTIFIER_FIXUP_3872.w = _RESERVED_IDENTIFIER_FIXUP_2894;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3872.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2894;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2987 = hdLod7(param_92, param_93);
                float _RESERVED_IDENTIFIER_FIXUP_2992 = _RESERVED_IDENTIFIER_FIXUP_2963 + _RESERVED_IDENTIFIER_FIXUP_2987.x;
                _RESERVED_IDENTIFIER_FIXUP_4130.y = _RESERVED_IDENTIFIER_FIXUP_2992;
                _RESERVED_IDENTIFIER_FIXUP_4130.x = _RESERVED_IDENTIFIER_FIXUP_2992 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4114 = _RESERVED_IDENTIFIER_FIXUP_2987;
                _RESERVED_IDENTIFIER_FIXUP_4111 = _RESERVED_IDENTIFIER_FIXUP_4130;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_3008 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_3012 = _RESERVED_IDENTIFIER_FIXUP_3008.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3023 = vec4(_RESERVED_IDENTIFIER_FIXUP_3008.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_3012).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4127 = vec4(_RESERVED_IDENTIFIER_FIXUP_3023 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_3012);
                vec2 _RESERVED_IDENTIFIER_FIXUP_3060 = _RESERVED_IDENTIFIER_FIXUP_3023 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3787 = _RESERVED_IDENTIFIER_FIXUP_4127;
                _RESERVED_IDENTIFIER_FIXUP_3787.x = _RESERVED_IDENTIFIER_FIXUP_3060.x;
                _RESERVED_IDENTIFIER_FIXUP_3787.y = _RESERVED_IDENTIFIER_FIXUP_3060.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3082 = _RESERVED_IDENTIFIER_FIXUP_3023 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3796 = _RESERVED_IDENTIFIER_FIXUP_3787;
                _RESERVED_IDENTIFIER_FIXUP_3796.x = _RESERVED_IDENTIFIER_FIXUP_3082.x;
                _RESERVED_IDENTIFIER_FIXUP_3796.y = _RESERVED_IDENTIFIER_FIXUP_3082.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3104 = _RESERVED_IDENTIFIER_FIXUP_3023 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3805 = _RESERVED_IDENTIFIER_FIXUP_3796;
                _RESERVED_IDENTIFIER_FIXUP_3805.x = _RESERVED_IDENTIFIER_FIXUP_3104.x;
                _RESERVED_IDENTIFIER_FIXUP_3805.y = _RESERVED_IDENTIFIER_FIXUP_3104.y;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3805.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_3012;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3114 = hdLod8(param_94, param_95);
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3023;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_3012;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_4127.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_3012;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3787.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_3012;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3796.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_3012;
                float _RESERVED_IDENTIFIER_FIXUP_3119 = (((hdLod8(param_96, param_97).x + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x) + _RESERVED_IDENTIFIER_FIXUP_3114.x;
                float _RESERVED_IDENTIFIER_FIXUP_3127 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3816 = _RESERVED_IDENTIFIER_FIXUP_3114;
                _RESERVED_IDENTIFIER_FIXUP_3816.x = _RESERVED_IDENTIFIER_FIXUP_3127;
                float _RESERVED_IDENTIFIER_FIXUP_3133 = clamp((_RESERVED_IDENTIFIER_FIXUP_3127 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_3138 = (_RESERVED_IDENTIFIER_FIXUP_3119 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4114 = _RESERVED_IDENTIFIER_FIXUP_3816;
                _RESERVED_IDENTIFIER_FIXUP_4111 = vec4((_RESERVED_IDENTIFIER_FIXUP_3133 * _RESERVED_IDENTIFIER_FIXUP_3138) + 1.0, _RESERVED_IDENTIFIER_FIXUP_3133, _RESERVED_IDENTIFIER_FIXUP_3138, _RESERVED_IDENTIFIER_FIXUP_3119);
            }
            _RESERVED_IDENTIFIER_FIXUP_4113 = _RESERVED_IDENTIFIER_FIXUP_4114;
            _RESERVED_IDENTIFIER_FIXUP_4110 = _RESERVED_IDENTIFIER_FIXUP_4111;
        }
        _RESERVED_IDENTIFIER_FIXUP_4112 = _RESERVED_IDENTIFIER_FIXUP_4113;
        _RESERVED_IDENTIFIER_FIXUP_4109 = _RESERVED_IDENTIFIER_FIXUP_4110;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3153 = (_RESERVED_IDENTIFIER_FIXUP_4109.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4061 = _RESERVED_IDENTIFIER_FIXUP_4109;
    _RESERVED_IDENTIFIER_FIXUP_4061.y = _RESERVED_IDENTIFIER_FIXUP_3153;
    _RESERVED_IDENTIFIER_FIXUP_4061.y = _RESERVED_IDENTIFIER_FIXUP_3153;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3166 = _RESERVED_IDENTIFIER_FIXUP_2414.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4067 = _RESERVED_IDENTIFIER_FIXUP_4112;
    _RESERVED_IDENTIFIER_FIXUP_4067.x = _RESERVED_IDENTIFIER_FIXUP_3166.x;
    _RESERVED_IDENTIFIER_FIXUP_4067.y = _RESERVED_IDENTIFIER_FIXUP_3166.y;
    _RESERVED_IDENTIFIER_FIXUP_4067.z = _RESERVED_IDENTIFIER_FIXUP_3166.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3177 = _RESERVED_IDENTIFIER_FIXUP_4061.xxx * _RESERVED_IDENTIFIER_FIXUP_4067.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4132 = vec4(_RESERVED_IDENTIFIER_FIXUP_3177.x, _RESERVED_IDENTIFIER_FIXUP_3153, _RESERVED_IDENTIFIER_FIXUP_3177.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3191 = (_RESERVED_IDENTIFIER_FIXUP_2414.xyz * _RESERVED_IDENTIFIER_FIXUP_4132.yyy) + _RESERVED_IDENTIFIER_FIXUP_4132.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4079 = _RESERVED_IDENTIFIER_FIXUP_4132;
    _RESERVED_IDENTIFIER_FIXUP_4079.x = _RESERVED_IDENTIFIER_FIXUP_3191.x;
    _RESERVED_IDENTIFIER_FIXUP_4079.y = _RESERVED_IDENTIFIER_FIXUP_3191.y;
    _RESERVED_IDENTIFIER_FIXUP_4079.z = _RESERVED_IDENTIFIER_FIXUP_3191.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3204 = _RESERVED_IDENTIFIER_FIXUP_4079.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4085 = _RESERVED_IDENTIFIER_FIXUP_4079;
    _RESERVED_IDENTIFIER_FIXUP_4085.x = _RESERVED_IDENTIFIER_FIXUP_3204.x;
    _RESERVED_IDENTIFIER_FIXUP_4085.y = _RESERVED_IDENTIFIER_FIXUP_3204.y;
    _RESERVED_IDENTIFIER_FIXUP_4085.z = _RESERVED_IDENTIFIER_FIXUP_3204.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4085.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1127 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1136;
    if (_RESERVED_IDENTIFIER_FIXUP_1127)
    {
        _RESERVED_IDENTIFIER_FIXUP_1136 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1136 = _RESERVED_IDENTIFIER_FIXUP_1127;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1136)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1173 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3667.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1199 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3257;
    if (_RESERVED_IDENTIFIER_FIXUP_1173 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3257 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1173), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1199);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3257 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1199);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3257;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3153);
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
    vec3 hdB103 = v0.xyz + v0.xyz;
    r6.x = hdB103.x;
    r6.y = hdB103.y;
    r6.z = hdB103.z;
    vec3 hdB118 = r0.xyz * r6.xyz;
    r7.x = hdB118.x;
    r7.y = hdB118.y;
    r7.z = hdB118.z;
    vec4 hdB127 = r0;
    vec3 hdB136 = mix(r7.xyz, hdB127.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB136.x;
    r0.y = hdB136.y;
    r0.z = hdB136.z;
    vec3 hdB147 = r1.xyz * r6.xyz;
    r7.x = hdB147.x;
    r7.y = hdB147.y;
    r7.z = hdB147.z;
    vec4 hdB156 = r1;
    vec3 hdB162 = mix(r7.xyz, hdB156.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB162.x;
    r1.y = hdB162.y;
    r1.z = hdB162.z;
    vec3 hdB173 = r2.xyz * r6.xyz;
    r7.x = hdB173.x;
    r7.y = hdB173.y;
    r7.z = hdB173.z;
    vec4 hdB182 = r2;
    vec3 hdB188 = mix(r7.xyz, hdB182.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB188.x;
    r2.y = hdB188.y;
    r2.z = hdB188.z;
    vec3 hdB199 = r3.xyz * r6.xyz;
    r5.x = hdB199.x;
    r5.y = hdB199.y;
    r5.z = hdB199.z;
    vec4 hdB208 = r3;
    vec3 hdB214 = mix(r5.xyz, hdB208.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB214.x;
    r3.y = hdB214.y;
    r3.z = hdB214.z;
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r0.xy;
        float param_5 = r0.w;
        r0 = hdLod5(param_4, param_5);
        vec2 hdB286 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB286.x;
        r0.z = hdB286.y;
        vec2 hdB297 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB297.x;
        r2.y = hdB297.y;
        vec2 hdB305 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB305.x;
        r2.w = hdB305.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r0.x += r2.x;
        vec2 hdB328 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB328.x;
        r2.y = hdB328.y;
        vec2 hdB335 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB335.x;
        r2.w = hdB335.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r0.x += r2.x;
        vec2 hdB358 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB358.x;
        r2.y = hdB358.y;
        vec2 hdB365 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB365.x;
        r2.w = hdB365.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r0.x += r2.x;
        vec2 hdB388 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB388.x;
        r2.y = hdB388.y;
        vec2 hdB395 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB395.x;
        r2.w = hdB395.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r0.x += r2.x;
        vec2 hdB418 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB418.x;
        r2.y = hdB418.y;
        vec2 hdB425 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB425.x;
        r2.w = hdB425.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r0.x += r2.x;
        vec2 hdB448 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB448.x;
        r2.y = hdB448.y;
        vec2 hdB455 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB455.x;
        r2.w = hdB455.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r0.x += r2.x;
        vec2 hdB478 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB478.x;
        r2.y = hdB478.y;
        vec2 hdB485 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB485.x;
        r2.w = hdB485.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod5(param_18, param_19);
        r0.x += r2.x;
        vec2 hdB508 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB508.x;
        r2.y = hdB508.y;
        vec2 hdB515 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB515.x;
        r2.w = hdB515.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod5(param_20, param_21);
        r0.x += r2.x;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v6.x), abs(v6.y));
        if (r0.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r2.xy;
            float param_23 = r2.w;
            r2 = hdLod6(param_22, param_23);
            vec2 hdB565 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB565.x;
            r0.z = hdB565.y;
            vec2 hdB575 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB575.x;
            r3.y = hdB575.y;
            vec2 hdB582 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB582.x;
            r3.w = hdB582.y;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod6(param_24, param_25);
            r0.w = r2.x + r3.x;
            vec2 hdB604 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB604.x;
            r2.y = hdB604.y;
            vec2 hdB611 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB611.x;
            r2.w = hdB611.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r0.w += r2.x;
            vec2 hdB633 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB633.x;
            r2.y = hdB633.y;
            vec2 hdB640 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB640.x;
            r2.w = hdB640.y;
            vec2 param_28 = r2.xy;
            float param_29 = r2.w;
            r2 = hdLod6(param_28, param_29);
            r0.w += r2.x;
            vec2 hdB662 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB662.x;
            r2.y = hdB662.y;
            vec2 hdB669 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB669.x;
            r2.w = hdB669.y;
            vec2 param_30 = r2.xy;
            float param_31 = r2.w;
            r2 = hdLod6(param_30, param_31);
            r0.y = r0.w + r2.x;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v7.x), abs(v7.y));
            if (r0.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = r2.xy;
                float param_33 = r2.w;
                r2 = hdLod7(param_32, param_33);
                vec2 hdB719 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB719.x;
                r0.z = hdB719.y;
                vec2 hdB729 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB729.x;
                r3.y = hdB729.y;
                vec2 hdB736 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB736.x;
                r3.w = hdB736.y;
                vec2 param_34 = r3.xy;
                float param_35 = r3.w;
                r3 = hdLod7(param_34, param_35);
                r0.w = r2.x + r3.x;
                vec2 hdB758 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB758.x;
                r2.y = hdB758.y;
                vec2 hdB765 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB765.x;
                r2.w = hdB765.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r0.w += r2.x;
                vec2 hdB787 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB787.x;
                r2.y = hdB787.y;
                vec2 hdB794 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB794.x;
                r2.w = hdB794.y;
                vec2 param_38 = r2.xy;
                float param_39 = r2.w;
                r2 = hdLod7(param_38, param_39);
                r0.w += r2.x;
                vec2 hdB816 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB816.x;
                r2.y = hdB816.y;
                vec2 hdB823 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB823.x;
                r2.w = hdB823.y;
                vec2 param_40 = r2.xy;
                float param_41 = r2.w;
                r2 = hdLod7(param_40, param_41);
                r0.y = r0.w + r2.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v5.w;
                r0.z = v6.w;
                vec2 hdB855 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB855.x;
                r2.w = hdB855.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_42 = r2.xy;
                float param_43 = r2.w;
                r3 = hdLod8(param_42, param_43);
                vec2 hdB880 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB880.x;
                r4.y = hdB880.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r5 = hdLod8(param_44, param_45);
                r0.w = r3.x + r5.x;
                vec2 hdB908 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB908.x;
                r4.y = hdB908.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r0.w += r3.x;
                vec2 hdB930 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB930.x;
                r4.y = hdB930.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r3 = hdLod8(param_48, param_49);
                r0.w += r3.x;
                vec2 hdB952 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB952.x;
                r4.y = hdB952.y;
                vec2 param_50 = r4.xy;
                float param_51 = r4.w;
                r2 = hdLod8(param_50, param_51);
                r0.w += r2.x;
                r2.x = max(abs(r0.y), abs(r0.z));
                r0.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.z = (r0.w * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.y * r0.z) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB1009 = r1.www * v1.xyz;
    r2.x = hdB1009.x;
    r2.y = hdB1009.y;
    r2.z = hdB1009.z;
    vec4 hdB1016 = r0;
    vec3 hdB1020 = hdB1016.xxx * r2.xyz;
    r0.x = hdB1020.x;
    r0.z = hdB1020.y;
    r0.w = hdB1020.z;
    vec4 hdB1029 = r0;
    vec4 hdB1032 = r0;
    vec3 hdB1034 = (r1.xyz * hdB1029.yyy) + hdB1032.xzw;
    r0.x = hdB1034.x;
    r0.y = hdB1034.y;
    r0.z = hdB1034.z;
    vec4 hdB1041 = r0;
    vec3 hdB1048 = hdB1041.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1048.x;
    r0.y = hdB1048.y;
    r0.z = hdB1048.z;
    vec3 hdB1063 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1063.x;
    oC0.y = hdB1063.y;
    oC0.z = hdB1063.z;
    oC0.w = 1.0;
    bool hdB1075 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1083;
    if (hdB1075)
    {
        hdB1083 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1083 = hdB1075;
    }
    if (hdB1083)
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
    bool _3872 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3882;
    if (_3872)
    {
        _3882 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3882 = _3872;
    }
    if (_3882)
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
        bool _3907 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3922;
        if (!_3907)
        {
            _3922 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3922 = _3907;
        }
        if (_3922)
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
