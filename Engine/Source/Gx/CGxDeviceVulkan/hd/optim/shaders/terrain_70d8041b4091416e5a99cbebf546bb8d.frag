#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

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
float _RESERVED_IDENTIFIER_FIXUP_4176;
vec4 _RESERVED_IDENTIFIER_FIXUP_4177;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _64 = hdOverride >= 0;
    bool _84;
    if (_64)
    {
        _84 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _84 = _64;
    }
    vec4 _85;
    if (_84)
    {
        _85 = vec4(float(hdOverride));
    }
    else
    {
        _85 = value;
    }
    return _85;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _102 = hdOverride >= 0;
    bool _111;
    if (_102)
    {
        _111 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _111 = _102;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _129 = hdOverride >= 0;
    bool _139;
    if (_129)
    {
        _139 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _157 = hdOverride >= 0;
    bool _167;
    if (_157)
    {
        _167 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _167 = _157;
    }
    vec4 _168;
    if (_167)
    {
        _168 = vec4(float(hdOverride));
    }
    else
    {
        _168 = value;
    }
    return _168;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _186 = hdOverride >= 0;
    bool _196;
    if (_186)
    {
        _196 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _196 = _186;
    }
    vec4 _197;
    if (_196)
    {
        _197 = vec4(float(hdOverride));
    }
    else
    {
        _197 = value;
    }
    return _197;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _215 = hdOverride >= 0;
    bool _225;
    if (_215)
    {
        _225 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _225 = _215;
    }
    vec4 _226;
    if (_225)
    {
        _226 = vec4(float(hdOverride));
    }
    else
    {
        _226 = value;
    }
    return _226;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _244 = hdOverride >= 0;
    bool _254;
    if (_244)
    {
        _254 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _254 = _244;
    }
    vec4 _255;
    if (_254)
    {
        _255 = vec4(float(hdOverride));
    }
    else
    {
        _255 = value;
    }
    return _255;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _273 = hdOverride >= 0;
    bool _283;
    if (_273)
    {
        _283 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _283 = _273;
    }
    vec4 _284;
    if (_283)
    {
        _284 = vec4(float(hdOverride));
    }
    else
    {
        _284 = value;
    }
    return _284;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1274 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1282 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1286 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1290 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3279 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3279.x = _RESERVED_IDENTIFIER_FIXUP_1290.x;
    _RESERVED_IDENTIFIER_FIXUP_3279.y = _RESERVED_IDENTIFIER_FIXUP_1290.y;
    float _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_1290.z;
    _RESERVED_IDENTIFIER_FIXUP_3279.z = _RESERVED_IDENTIFIER_FIXUP_1296;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1298 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4176).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1301 = _RESERVED_IDENTIFIER_FIXUP_1298 + _RESERVED_IDENTIFIER_FIXUP_1298;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3285 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3285.x = _RESERVED_IDENTIFIER_FIXUP_1301.x;
    _RESERVED_IDENTIFIER_FIXUP_3285.y = _RESERVED_IDENTIFIER_FIXUP_1301.y;
    _RESERVED_IDENTIFIER_FIXUP_3285.z = _RESERVED_IDENTIFIER_FIXUP_1301.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1274.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1309 * _RESERVED_IDENTIFIER_FIXUP_3285.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3291 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3291.x = _RESERVED_IDENTIFIER_FIXUP_1312.x;
    _RESERVED_IDENTIFIER_FIXUP_3291.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
    _RESERVED_IDENTIFIER_FIXUP_3291.z = _RESERVED_IDENTIFIER_FIXUP_1312.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1326 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3279.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1327 = mix(_RESERVED_IDENTIFIER_FIXUP_3291.xyz, _RESERVED_IDENTIFIER_FIXUP_1309, _RESERVED_IDENTIFIER_FIXUP_1326);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3297 = _RESERVED_IDENTIFIER_FIXUP_1274;
    _RESERVED_IDENTIFIER_FIXUP_3297.x = _RESERVED_IDENTIFIER_FIXUP_1327.x;
    _RESERVED_IDENTIFIER_FIXUP_3297.y = _RESERVED_IDENTIFIER_FIXUP_1327.y;
    _RESERVED_IDENTIFIER_FIXUP_3297.z = _RESERVED_IDENTIFIER_FIXUP_1327.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1335 = _RESERVED_IDENTIFIER_FIXUP_1278.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_1335 * _RESERVED_IDENTIFIER_FIXUP_3285.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3291.x = _RESERVED_IDENTIFIER_FIXUP_1338.x;
    _RESERVED_IDENTIFIER_FIXUP_3291.y = _RESERVED_IDENTIFIER_FIXUP_1338.y;
    _RESERVED_IDENTIFIER_FIXUP_3291.z = _RESERVED_IDENTIFIER_FIXUP_1338.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1352 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3279.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1353 = mix(_RESERVED_IDENTIFIER_FIXUP_3291.xyz, _RESERVED_IDENTIFIER_FIXUP_1335, _RESERVED_IDENTIFIER_FIXUP_1352);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3309 = _RESERVED_IDENTIFIER_FIXUP_1278;
    _RESERVED_IDENTIFIER_FIXUP_3309.x = _RESERVED_IDENTIFIER_FIXUP_1353.x;
    _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_1353.y;
    _RESERVED_IDENTIFIER_FIXUP_3309.z = _RESERVED_IDENTIFIER_FIXUP_1353.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1361 = _RESERVED_IDENTIFIER_FIXUP_1282.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_1361 * _RESERVED_IDENTIFIER_FIXUP_3285.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4202 = vec4(_RESERVED_IDENTIFIER_FIXUP_1364.xy, _RESERVED_IDENTIFIER_FIXUP_1296, _RESERVED_IDENTIFIER_FIXUP_1364.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1379 = mix(_RESERVED_IDENTIFIER_FIXUP_4202.xyw, _RESERVED_IDENTIFIER_FIXUP_1361, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4202.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3321 = _RESERVED_IDENTIFIER_FIXUP_1282;
    _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_1379.x;
    _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_1379.y;
    _RESERVED_IDENTIFIER_FIXUP_3321.z = _RESERVED_IDENTIFIER_FIXUP_1379.z;
    float _RESERVED_IDENTIFIER_FIXUP_1389 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1286.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3327 = _RESERVED_IDENTIFIER_FIXUP_1286;
    _RESERVED_IDENTIFIER_FIXUP_3327.z = _RESERVED_IDENTIFIER_FIXUP_1389;
    _RESERVED_IDENTIFIER_FIXUP_3327.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1389;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_3327.xxxx * _RESERVED_IDENTIFIER_FIXUP_3309;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1411 = (_RESERVED_IDENTIFIER_FIXUP_3321 * _RESERVED_IDENTIFIER_FIXUP_3327.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3297 * _RESERVED_IDENTIFIER_FIXUP_3327.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1399);
    float _RESERVED_IDENTIFIER_FIXUP_1418 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3334 = _RESERVED_IDENTIFIER_FIXUP_1399;
    _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_1418;
    float _RESERVED_IDENTIFIER_FIXUP_1424 = clamp((_RESERVED_IDENTIFIER_FIXUP_1418 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_1424;
    float _RESERVED_IDENTIFIER_FIXUP_1430 = ((-_RESERVED_IDENTIFIER_FIXUP_1424) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_1430;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4181;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4178;
    if (_RESERVED_IDENTIFIER_FIXUP_1430 != (-_RESERVED_IDENTIFIER_FIXUP_1430))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1442 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3573;
        _RESERVED_IDENTIFIER_FIXUP_3573.x = _RESERVED_IDENTIFIER_FIXUP_1442.x;
        _RESERVED_IDENTIFIER_FIXUP_3573.y = _RESERVED_IDENTIFIER_FIXUP_1442.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1452 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3577;
        _RESERVED_IDENTIFIER_FIXUP_3577.x = _RESERVED_IDENTIFIER_FIXUP_1452.x;
        _RESERVED_IDENTIFIER_FIXUP_3577.y = _RESERVED_IDENTIFIER_FIXUP_1452.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1462 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3581;
        _RESERVED_IDENTIFIER_FIXUP_3581.x = _RESERVED_IDENTIFIER_FIXUP_1462.x;
        _RESERVED_IDENTIFIER_FIXUP_3581.y = _RESERVED_IDENTIFIER_FIXUP_1462.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1472 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3585;
        _RESERVED_IDENTIFIER_FIXUP_3585.x = _RESERVED_IDENTIFIER_FIXUP_1472.x;
        _RESERVED_IDENTIFIER_FIXUP_3585.y = _RESERVED_IDENTIFIER_FIXUP_1472.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3589;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1482.x;
        _RESERVED_IDENTIFIER_FIXUP_3589.y = _RESERVED_IDENTIFIER_FIXUP_1482.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3593;
        _RESERVED_IDENTIFIER_FIXUP_3593.x = _RESERVED_IDENTIFIER_FIXUP_1492.x;
        _RESERVED_IDENTIFIER_FIXUP_3593.y = _RESERVED_IDENTIFIER_FIXUP_1492.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1502 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3597;
        _RESERVED_IDENTIFIER_FIXUP_3597.x = _RESERVED_IDENTIFIER_FIXUP_1502.x;
        _RESERVED_IDENTIFIER_FIXUP_3597.y = _RESERVED_IDENTIFIER_FIXUP_1502.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1512 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3601;
        _RESERVED_IDENTIFIER_FIXUP_3601.x = _RESERVED_IDENTIFIER_FIXUP_1512.x;
        _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_1512.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1522 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3605;
        _RESERVED_IDENTIFIER_FIXUP_3605.x = _RESERVED_IDENTIFIER_FIXUP_1522.x;
        _RESERVED_IDENTIFIER_FIXUP_3605.y = _RESERVED_IDENTIFIER_FIXUP_1522.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1530 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1530.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1530.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1536 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3577.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3581.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3585.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3589.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3589.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1576 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_3593.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3597.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3601.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3605.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3605.xy;
        float param_9 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1616 = hdLod5(param_8, param_9);
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3577.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1536.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3581.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1536.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3585.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1536.w = hdLod5(param_14, param_15).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1633 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1536 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3593.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1576.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3597.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1576.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3601.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1576.w = hdLod5(param_20, param_21).x;
        float _RESERVED_IDENTIFIER_FIXUP_1656 = _RESERVED_IDENTIFIER_FIXUP_1616.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3670 = _RESERVED_IDENTIFIER_FIXUP_1616;
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_1656;
        float _RESERVED_IDENTIFIER_FIXUP_1661 = float(_RESERVED_IDENTIFIER_FIXUP_1656 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_1661;
        float _RESERVED_IDENTIFIER_FIXUP_1664 = dot(_RESERVED_IDENTIFIER_FIXUP_1633, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_1664;
        float _RESERVED_IDENTIFIER_FIXUP_1667 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1576 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3670.z = _RESERVED_IDENTIFIER_FIXUP_1667;
        float _RESERVED_IDENTIFIER_FIXUP_1673 = _RESERVED_IDENTIFIER_FIXUP_1664 + _RESERVED_IDENTIFIER_FIXUP_1667;
        _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_1673;
        float _RESERVED_IDENTIFIER_FIXUP_1679 = _RESERVED_IDENTIFIER_FIXUP_1661 + _RESERVED_IDENTIFIER_FIXUP_1673;
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_1679;
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_1679 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4181 = _RESERVED_IDENTIFIER_FIXUP_1633;
        _RESERVED_IDENTIFIER_FIXUP_4178 = _RESERVED_IDENTIFIER_FIXUP_3670;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1692 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_1692;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4182;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4179;
        if (_RESERVED_IDENTIFIER_FIXUP_1692 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1701 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3507 = _RESERVED_IDENTIFIER_FIXUP_3334;
            _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_1701.x;
            _RESERVED_IDENTIFIER_FIXUP_3507.z = _RESERVED_IDENTIFIER_FIXUP_1701.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3511;
            _RESERVED_IDENTIFIER_FIXUP_3511.x = _RESERVED_IDENTIFIER_FIXUP_1711.x;
            _RESERVED_IDENTIFIER_FIXUP_3511.y = _RESERVED_IDENTIFIER_FIXUP_1711.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1721 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3515;
            _RESERVED_IDENTIFIER_FIXUP_3515.x = _RESERVED_IDENTIFIER_FIXUP_1721.x;
            _RESERVED_IDENTIFIER_FIXUP_3515.y = _RESERVED_IDENTIFIER_FIXUP_1721.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1731 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3519;
            _RESERVED_IDENTIFIER_FIXUP_3519.x = _RESERVED_IDENTIFIER_FIXUP_1731.x;
            _RESERVED_IDENTIFIER_FIXUP_3519.y = _RESERVED_IDENTIFIER_FIXUP_1731.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1741 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3523;
            _RESERVED_IDENTIFIER_FIXUP_3523.x = _RESERVED_IDENTIFIER_FIXUP_1741.x;
            _RESERVED_IDENTIFIER_FIXUP_3523.y = _RESERVED_IDENTIFIER_FIXUP_1741.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1749 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1749.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1749.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1755 = hdLod6(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_3511.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3515.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3519.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3523.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3511.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1755.y = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3515.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1755.z = hdLod6(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3519.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1755.w = hdLod6(param_28, param_29).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1812 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1755 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3523.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1818 = hdLod6(param_30, param_31).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_1818;
            float _RESERVED_IDENTIFIER_FIXUP_1823 = float(_RESERVED_IDENTIFIER_FIXUP_1818 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_1823;
            float _RESERVED_IDENTIFIER_FIXUP_1826 = dot(_RESERVED_IDENTIFIER_FIXUP_1812, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3507.z = _RESERVED_IDENTIFIER_FIXUP_1826;
            float _RESERVED_IDENTIFIER_FIXUP_1832 = _RESERVED_IDENTIFIER_FIXUP_1823 + _RESERVED_IDENTIFIER_FIXUP_1826;
            _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_1832;
            _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_1832 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4182 = _RESERVED_IDENTIFIER_FIXUP_1812;
            _RESERVED_IDENTIFIER_FIXUP_4179 = _RESERVED_IDENTIFIER_FIXUP_3507;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1845 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3351 = _RESERVED_IDENTIFIER_FIXUP_3334;
            _RESERVED_IDENTIFIER_FIXUP_3351.y = _RESERVED_IDENTIFIER_FIXUP_1845;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4183;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4180;
            if (_RESERVED_IDENTIFIER_FIXUP_1845 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1854 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3441 = _RESERVED_IDENTIFIER_FIXUP_3351;
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_1854.x;
                _RESERVED_IDENTIFIER_FIXUP_3441.z = _RESERVED_IDENTIFIER_FIXUP_1854.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1864 = _RESERVED_IDENTIFIER_FIXUP_3441.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3445;
                _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_1864.x;
                _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_1864.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1874 = _RESERVED_IDENTIFIER_FIXUP_3441.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3449;
                _RESERVED_IDENTIFIER_FIXUP_3449.x = _RESERVED_IDENTIFIER_FIXUP_1874.x;
                _RESERVED_IDENTIFIER_FIXUP_3449.y = _RESERVED_IDENTIFIER_FIXUP_1874.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1884 = _RESERVED_IDENTIFIER_FIXUP_3441.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3453;
                _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_1884.x;
                _RESERVED_IDENTIFIER_FIXUP_3453.y = _RESERVED_IDENTIFIER_FIXUP_1884.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1894 = _RESERVED_IDENTIFIER_FIXUP_3441.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3457;
                _RESERVED_IDENTIFIER_FIXUP_3457.x = _RESERVED_IDENTIFIER_FIXUP_1894.x;
                _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_1894.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1902 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1902.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1902.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1908 = hdLod7(param_32, param_33);
                _RESERVED_IDENTIFIER_FIXUP_3445.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3449.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3453.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3457.w = 0.0;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3445.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1908.y = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3449.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1908.z = hdLod7(param_36, param_37).x;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3453.xy;
                float param_39 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1908.w = hdLod7(param_38, param_39).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1965 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1908 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3457.xy;
                float param_41 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1971 = hdLod7(param_40, param_41).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_1971;
                float _RESERVED_IDENTIFIER_FIXUP_1976 = float(_RESERVED_IDENTIFIER_FIXUP_1971 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_1976;
                float _RESERVED_IDENTIFIER_FIXUP_1979 = dot(_RESERVED_IDENTIFIER_FIXUP_1965, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3441.z = _RESERVED_IDENTIFIER_FIXUP_1979;
                float _RESERVED_IDENTIFIER_FIXUP_1985 = _RESERVED_IDENTIFIER_FIXUP_1976 + _RESERVED_IDENTIFIER_FIXUP_1979;
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_1985;
                _RESERVED_IDENTIFIER_FIXUP_3441.x = _RESERVED_IDENTIFIER_FIXUP_1985 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4183 = _RESERVED_IDENTIFIER_FIXUP_1965;
                _RESERVED_IDENTIFIER_FIXUP_4180 = _RESERVED_IDENTIFIER_FIXUP_3441;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_3321;
                _RESERVED_IDENTIFIER_FIXUP_3355.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3355.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2001 = (_RESERVED_IDENTIFIER_FIXUP_3355.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3360;
                _RESERVED_IDENTIFIER_FIXUP_3360.x = _RESERVED_IDENTIFIER_FIXUP_2001.x;
                _RESERVED_IDENTIFIER_FIXUP_3360.y = _RESERVED_IDENTIFIER_FIXUP_2001.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2011 = _RESERVED_IDENTIFIER_FIXUP_3360.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3364;
                _RESERVED_IDENTIFIER_FIXUP_3364.x = _RESERVED_IDENTIFIER_FIXUP_2011.x;
                _RESERVED_IDENTIFIER_FIXUP_3364.y = _RESERVED_IDENTIFIER_FIXUP_2011.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2021 = _RESERVED_IDENTIFIER_FIXUP_3360.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3368;
                _RESERVED_IDENTIFIER_FIXUP_3368.x = _RESERVED_IDENTIFIER_FIXUP_2021.x;
                _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_2021.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2031 = _RESERVED_IDENTIFIER_FIXUP_3360.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3372;
                _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_2031.x;
                _RESERVED_IDENTIFIER_FIXUP_3372.y = _RESERVED_IDENTIFIER_FIXUP_2031.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2041 = _RESERVED_IDENTIFIER_FIXUP_3360.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3376;
                _RESERVED_IDENTIFIER_FIXUP_3376.x = _RESERVED_IDENTIFIER_FIXUP_2041.x;
                _RESERVED_IDENTIFIER_FIXUP_3376.y = _RESERVED_IDENTIFIER_FIXUP_2041.y;
                _RESERVED_IDENTIFIER_FIXUP_3360.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3360.xy;
                float param_43 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2055 = hdLod8(param_42, param_43);
                _RESERVED_IDENTIFIER_FIXUP_3364.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3368.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3372.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3376.w = 0.0;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3364.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2055.y = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3368.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2055.z = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3372.xy;
                float param_49 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2055.w = hdLod8(param_48, param_49).x;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3376.xy;
                float param_51 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2118 = hdLod8(param_50, param_51).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3416 = _RESERVED_IDENTIFIER_FIXUP_3351;
                _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2118;
                float _RESERVED_IDENTIFIER_FIXUP_2123 = float(_RESERVED_IDENTIFIER_FIXUP_2118 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2123;
                float _RESERVED_IDENTIFIER_FIXUP_2126 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2055 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3416.z = _RESERVED_IDENTIFIER_FIXUP_2126;
                float _RESERVED_IDENTIFIER_FIXUP_2132 = _RESERVED_IDENTIFIER_FIXUP_2123 + _RESERVED_IDENTIFIER_FIXUP_2126;
                _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2132;
                float _RESERVED_IDENTIFIER_FIXUP_2140 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3416.z = _RESERVED_IDENTIFIER_FIXUP_2140;
                float _RESERVED_IDENTIFIER_FIXUP_2146 = clamp((_RESERVED_IDENTIFIER_FIXUP_2140 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3416.z = _RESERVED_IDENTIFIER_FIXUP_2146;
                float _RESERVED_IDENTIFIER_FIXUP_2151 = (_RESERVED_IDENTIFIER_FIXUP_2132 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2151;
                _RESERVED_IDENTIFIER_FIXUP_3416.x = (_RESERVED_IDENTIFIER_FIXUP_2146 * _RESERVED_IDENTIFIER_FIXUP_2151) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4183 = _RESERVED_IDENTIFIER_FIXUP_3355;
                _RESERVED_IDENTIFIER_FIXUP_4180 = _RESERVED_IDENTIFIER_FIXUP_3416;
            }
            _RESERVED_IDENTIFIER_FIXUP_4182 = _RESERVED_IDENTIFIER_FIXUP_4183;
            _RESERVED_IDENTIFIER_FIXUP_4179 = _RESERVED_IDENTIFIER_FIXUP_4180;
        }
        _RESERVED_IDENTIFIER_FIXUP_4181 = _RESERVED_IDENTIFIER_FIXUP_4182;
        _RESERVED_IDENTIFIER_FIXUP_4178 = _RESERVED_IDENTIFIER_FIXUP_4179;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3693 = _RESERVED_IDENTIFIER_FIXUP_4178;
    _RESERVED_IDENTIFIER_FIXUP_3693.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3695 = _RESERVED_IDENTIFIER_FIXUP_4181;
    _RESERVED_IDENTIFIER_FIXUP_3695.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3695.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3695.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2190 = _RESERVED_IDENTIFIER_FIXUP_3693.xxx * _RESERVED_IDENTIFIER_FIXUP_3695.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4203 = vec4(_RESERVED_IDENTIFIER_FIXUP_2190.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2190.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2204 = (_RESERVED_IDENTIFIER_FIXUP_1411.xyz * _RESERVED_IDENTIFIER_FIXUP_4203.yyy) + _RESERVED_IDENTIFIER_FIXUP_4203.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3707 = _RESERVED_IDENTIFIER_FIXUP_1411;
    _RESERVED_IDENTIFIER_FIXUP_3707.x = _RESERVED_IDENTIFIER_FIXUP_2204.x;
    _RESERVED_IDENTIFIER_FIXUP_3707.y = _RESERVED_IDENTIFIER_FIXUP_2204.y;
    _RESERVED_IDENTIFIER_FIXUP_3707.z = _RESERVED_IDENTIFIER_FIXUP_2204.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2217 = _RESERVED_IDENTIFIER_FIXUP_3707.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3713 = _RESERVED_IDENTIFIER_FIXUP_3707;
    _RESERVED_IDENTIFIER_FIXUP_3713.x = _RESERVED_IDENTIFIER_FIXUP_2217.x;
    _RESERVED_IDENTIFIER_FIXUP_3713.y = _RESERVED_IDENTIFIER_FIXUP_2217.y;
    _RESERVED_IDENTIFIER_FIXUP_3713.z = _RESERVED_IDENTIFIER_FIXUP_2217.z;
    vec2 param_52 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2276 = hdTex0(param_52);
    vec2 param_53 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2280 = hdTex1(param_53);
    vec2 param_54 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2284 = hdTex2(param_54);
    vec2 param_55 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2288 = hdTex3(param_55);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2303 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3733 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3733.x = _RESERVED_IDENTIFIER_FIXUP_2303.x;
    _RESERVED_IDENTIFIER_FIXUP_3733.y = _RESERVED_IDENTIFIER_FIXUP_2303.y;
    _RESERVED_IDENTIFIER_FIXUP_3733.z = _RESERVED_IDENTIFIER_FIXUP_2303.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2311 = _RESERVED_IDENTIFIER_FIXUP_2276.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2314 = _RESERVED_IDENTIFIER_FIXUP_2311 * _RESERVED_IDENTIFIER_FIXUP_3733.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3739 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_2314.x;
    _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2314.y;
    _RESERVED_IDENTIFIER_FIXUP_3739.z = _RESERVED_IDENTIFIER_FIXUP_2314.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2329 = mix(_RESERVED_IDENTIFIER_FIXUP_3739.xyz, _RESERVED_IDENTIFIER_FIXUP_2311, _RESERVED_IDENTIFIER_FIXUP_1326);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_2276;
    _RESERVED_IDENTIFIER_FIXUP_3745.x = _RESERVED_IDENTIFIER_FIXUP_2329.x;
    _RESERVED_IDENTIFIER_FIXUP_3745.y = _RESERVED_IDENTIFIER_FIXUP_2329.y;
    _RESERVED_IDENTIFIER_FIXUP_3745.z = _RESERVED_IDENTIFIER_FIXUP_2329.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2337 = _RESERVED_IDENTIFIER_FIXUP_2280.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2340 = _RESERVED_IDENTIFIER_FIXUP_2337 * _RESERVED_IDENTIFIER_FIXUP_3733.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_2340.x;
    _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2340.y;
    _RESERVED_IDENTIFIER_FIXUP_3739.z = _RESERVED_IDENTIFIER_FIXUP_2340.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2355 = mix(_RESERVED_IDENTIFIER_FIXUP_3739.xyz, _RESERVED_IDENTIFIER_FIXUP_2337, _RESERVED_IDENTIFIER_FIXUP_1352);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3757 = _RESERVED_IDENTIFIER_FIXUP_2280;
    _RESERVED_IDENTIFIER_FIXUP_3757.x = _RESERVED_IDENTIFIER_FIXUP_2355.x;
    _RESERVED_IDENTIFIER_FIXUP_3757.y = _RESERVED_IDENTIFIER_FIXUP_2355.y;
    _RESERVED_IDENTIFIER_FIXUP_3757.z = _RESERVED_IDENTIFIER_FIXUP_2355.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2363 = _RESERVED_IDENTIFIER_FIXUP_2284.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2366 = _RESERVED_IDENTIFIER_FIXUP_2363 * _RESERVED_IDENTIFIER_FIXUP_3733.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4205 = vec4(_RESERVED_IDENTIFIER_FIXUP_2366.xy, _RESERVED_IDENTIFIER_FIXUP_1296, _RESERVED_IDENTIFIER_FIXUP_2366.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2381 = mix(_RESERVED_IDENTIFIER_FIXUP_4205.xyw, _RESERVED_IDENTIFIER_FIXUP_2363, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4205.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3769 = _RESERVED_IDENTIFIER_FIXUP_2284;
    _RESERVED_IDENTIFIER_FIXUP_3769.x = _RESERVED_IDENTIFIER_FIXUP_2381.x;
    _RESERVED_IDENTIFIER_FIXUP_3769.y = _RESERVED_IDENTIFIER_FIXUP_2381.y;
    _RESERVED_IDENTIFIER_FIXUP_3769.z = _RESERVED_IDENTIFIER_FIXUP_2381.z;
    float _RESERVED_IDENTIFIER_FIXUP_2391 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2288.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3775 = _RESERVED_IDENTIFIER_FIXUP_2288;
    _RESERVED_IDENTIFIER_FIXUP_3775.z = _RESERVED_IDENTIFIER_FIXUP_2391;
    _RESERVED_IDENTIFIER_FIXUP_3775.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2391;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2401 = _RESERVED_IDENTIFIER_FIXUP_3775.xxxx * _RESERVED_IDENTIFIER_FIXUP_3757;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2413 = (_RESERVED_IDENTIFIER_FIXUP_3769 * _RESERVED_IDENTIFIER_FIXUP_3775.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3745 * _RESERVED_IDENTIFIER_FIXUP_3775.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2401);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3782 = _RESERVED_IDENTIFIER_FIXUP_2401;
    _RESERVED_IDENTIFIER_FIXUP_3782.x = _RESERVED_IDENTIFIER_FIXUP_1418;
    float _RESERVED_IDENTIFIER_FIXUP_2426 = clamp((_RESERVED_IDENTIFIER_FIXUP_1418 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3782.x = _RESERVED_IDENTIFIER_FIXUP_2426;
    float _RESERVED_IDENTIFIER_FIXUP_2432 = ((-_RESERVED_IDENTIFIER_FIXUP_2426) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3782.x = _RESERVED_IDENTIFIER_FIXUP_2432;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4196;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4190;
    if (_RESERVED_IDENTIFIER_FIXUP_2432 != (-_RESERVED_IDENTIFIER_FIXUP_2432))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2444 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_4021;
        _RESERVED_IDENTIFIER_FIXUP_4021.x = _RESERVED_IDENTIFIER_FIXUP_2444.x;
        _RESERVED_IDENTIFIER_FIXUP_4021.y = _RESERVED_IDENTIFIER_FIXUP_2444.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2454 = _RESERVED_IDENTIFIER_FIXUP_4021.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4025;
        _RESERVED_IDENTIFIER_FIXUP_4025.x = _RESERVED_IDENTIFIER_FIXUP_2454.x;
        _RESERVED_IDENTIFIER_FIXUP_4025.y = _RESERVED_IDENTIFIER_FIXUP_2454.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2464 = _RESERVED_IDENTIFIER_FIXUP_4021.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4029;
        _RESERVED_IDENTIFIER_FIXUP_4029.x = _RESERVED_IDENTIFIER_FIXUP_2464.x;
        _RESERVED_IDENTIFIER_FIXUP_4029.y = _RESERVED_IDENTIFIER_FIXUP_2464.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2474 = _RESERVED_IDENTIFIER_FIXUP_4021.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4033;
        _RESERVED_IDENTIFIER_FIXUP_4033.x = _RESERVED_IDENTIFIER_FIXUP_2474.x;
        _RESERVED_IDENTIFIER_FIXUP_4033.y = _RESERVED_IDENTIFIER_FIXUP_2474.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2484 = _RESERVED_IDENTIFIER_FIXUP_4021.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4037;
        _RESERVED_IDENTIFIER_FIXUP_4037.x = _RESERVED_IDENTIFIER_FIXUP_2484.x;
        _RESERVED_IDENTIFIER_FIXUP_4037.y = _RESERVED_IDENTIFIER_FIXUP_2484.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2494 = _RESERVED_IDENTIFIER_FIXUP_4021.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4041;
        _RESERVED_IDENTIFIER_FIXUP_4041.x = _RESERVED_IDENTIFIER_FIXUP_2494.x;
        _RESERVED_IDENTIFIER_FIXUP_4041.y = _RESERVED_IDENTIFIER_FIXUP_2494.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2504 = _RESERVED_IDENTIFIER_FIXUP_4021.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4045;
        _RESERVED_IDENTIFIER_FIXUP_4045.x = _RESERVED_IDENTIFIER_FIXUP_2504.x;
        _RESERVED_IDENTIFIER_FIXUP_4045.y = _RESERVED_IDENTIFIER_FIXUP_2504.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2514 = _RESERVED_IDENTIFIER_FIXUP_4021.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4049;
        _RESERVED_IDENTIFIER_FIXUP_4049.x = _RESERVED_IDENTIFIER_FIXUP_2514.x;
        _RESERVED_IDENTIFIER_FIXUP_4049.y = _RESERVED_IDENTIFIER_FIXUP_2514.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2524 = _RESERVED_IDENTIFIER_FIXUP_4021.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4053;
        _RESERVED_IDENTIFIER_FIXUP_4053.x = _RESERVED_IDENTIFIER_FIXUP_2524.x;
        _RESERVED_IDENTIFIER_FIXUP_4053.y = _RESERVED_IDENTIFIER_FIXUP_2524.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2532 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2532.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2532.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2538 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_4025.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4029.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4033.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4037.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_4037.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2578 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_4041.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4045.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4049.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4053.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_4053.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2618 = hdLod5(param_60, param_61);
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_4025.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2538.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_4029.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2538.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_4033.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2538.w = hdLod5(param_66, param_67).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2635 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2538 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_4041.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2578.y = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4045.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2578.z = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_4049.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2578.w = hdLod5(param_72, param_73).x;
        float _RESERVED_IDENTIFIER_FIXUP_2658 = _RESERVED_IDENTIFIER_FIXUP_2618.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4118 = _RESERVED_IDENTIFIER_FIXUP_2618;
        _RESERVED_IDENTIFIER_FIXUP_4118.x = _RESERVED_IDENTIFIER_FIXUP_2658;
        float _RESERVED_IDENTIFIER_FIXUP_2663 = float(_RESERVED_IDENTIFIER_FIXUP_2658 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_4118.x = _RESERVED_IDENTIFIER_FIXUP_2663;
        float _RESERVED_IDENTIFIER_FIXUP_2666 = dot(_RESERVED_IDENTIFIER_FIXUP_2635, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4118.y = _RESERVED_IDENTIFIER_FIXUP_2666;
        float _RESERVED_IDENTIFIER_FIXUP_2669 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2578 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4118.z = _RESERVED_IDENTIFIER_FIXUP_2669;
        float _RESERVED_IDENTIFIER_FIXUP_2675 = _RESERVED_IDENTIFIER_FIXUP_2666 + _RESERVED_IDENTIFIER_FIXUP_2669;
        _RESERVED_IDENTIFIER_FIXUP_4118.y = _RESERVED_IDENTIFIER_FIXUP_2675;
        float _RESERVED_IDENTIFIER_FIXUP_2681 = _RESERVED_IDENTIFIER_FIXUP_2663 + _RESERVED_IDENTIFIER_FIXUP_2675;
        _RESERVED_IDENTIFIER_FIXUP_4118.x = _RESERVED_IDENTIFIER_FIXUP_2681;
        _RESERVED_IDENTIFIER_FIXUP_4118.x = _RESERVED_IDENTIFIER_FIXUP_2681 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4196 = _RESERVED_IDENTIFIER_FIXUP_2635;
        _RESERVED_IDENTIFIER_FIXUP_4190 = _RESERVED_IDENTIFIER_FIXUP_4118;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2694 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3782.y = _RESERVED_IDENTIFIER_FIXUP_2694;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4197;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4191;
        if (_RESERVED_IDENTIFIER_FIXUP_2694 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2703 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3955 = _RESERVED_IDENTIFIER_FIXUP_3782;
            _RESERVED_IDENTIFIER_FIXUP_3955.y = _RESERVED_IDENTIFIER_FIXUP_2703.x;
            _RESERVED_IDENTIFIER_FIXUP_3955.z = _RESERVED_IDENTIFIER_FIXUP_2703.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2713 = _RESERVED_IDENTIFIER_FIXUP_3955.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3959;
            _RESERVED_IDENTIFIER_FIXUP_3959.x = _RESERVED_IDENTIFIER_FIXUP_2713.x;
            _RESERVED_IDENTIFIER_FIXUP_3959.y = _RESERVED_IDENTIFIER_FIXUP_2713.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2723 = _RESERVED_IDENTIFIER_FIXUP_3955.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3963;
            _RESERVED_IDENTIFIER_FIXUP_3963.x = _RESERVED_IDENTIFIER_FIXUP_2723.x;
            _RESERVED_IDENTIFIER_FIXUP_3963.y = _RESERVED_IDENTIFIER_FIXUP_2723.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2733 = _RESERVED_IDENTIFIER_FIXUP_3955.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3967;
            _RESERVED_IDENTIFIER_FIXUP_3967.x = _RESERVED_IDENTIFIER_FIXUP_2733.x;
            _RESERVED_IDENTIFIER_FIXUP_3967.y = _RESERVED_IDENTIFIER_FIXUP_2733.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2743 = _RESERVED_IDENTIFIER_FIXUP_3955.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3971;
            _RESERVED_IDENTIFIER_FIXUP_3971.x = _RESERVED_IDENTIFIER_FIXUP_2743.x;
            _RESERVED_IDENTIFIER_FIXUP_3971.y = _RESERVED_IDENTIFIER_FIXUP_2743.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2751 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2751.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2751.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2757 = hdLod6(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3959.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3963.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3967.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3971.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3959.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2757.y = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3963.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2757.z = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3967.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2757.w = hdLod6(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2814 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2757 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3971.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2820 = hdLod6(param_82, param_83).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3955.y = _RESERVED_IDENTIFIER_FIXUP_2820;
            float _RESERVED_IDENTIFIER_FIXUP_2825 = float(_RESERVED_IDENTIFIER_FIXUP_2820 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3955.y = _RESERVED_IDENTIFIER_FIXUP_2825;
            float _RESERVED_IDENTIFIER_FIXUP_2828 = dot(_RESERVED_IDENTIFIER_FIXUP_2814, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3955.z = _RESERVED_IDENTIFIER_FIXUP_2828;
            float _RESERVED_IDENTIFIER_FIXUP_2834 = _RESERVED_IDENTIFIER_FIXUP_2825 + _RESERVED_IDENTIFIER_FIXUP_2828;
            _RESERVED_IDENTIFIER_FIXUP_3955.y = _RESERVED_IDENTIFIER_FIXUP_2834;
            _RESERVED_IDENTIFIER_FIXUP_3955.x = _RESERVED_IDENTIFIER_FIXUP_2834 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4197 = _RESERVED_IDENTIFIER_FIXUP_2814;
            _RESERVED_IDENTIFIER_FIXUP_4191 = _RESERVED_IDENTIFIER_FIXUP_3955;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2847 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_3782;
            _RESERVED_IDENTIFIER_FIXUP_3799.y = _RESERVED_IDENTIFIER_FIXUP_2847;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4198;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4192;
            if (_RESERVED_IDENTIFIER_FIXUP_2847 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2856 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3889 = _RESERVED_IDENTIFIER_FIXUP_3799;
                _RESERVED_IDENTIFIER_FIXUP_3889.y = _RESERVED_IDENTIFIER_FIXUP_2856.x;
                _RESERVED_IDENTIFIER_FIXUP_3889.z = _RESERVED_IDENTIFIER_FIXUP_2856.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2866 = _RESERVED_IDENTIFIER_FIXUP_3889.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3893;
                _RESERVED_IDENTIFIER_FIXUP_3893.x = _RESERVED_IDENTIFIER_FIXUP_2866.x;
                _RESERVED_IDENTIFIER_FIXUP_3893.y = _RESERVED_IDENTIFIER_FIXUP_2866.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2876 = _RESERVED_IDENTIFIER_FIXUP_3889.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3897;
                _RESERVED_IDENTIFIER_FIXUP_3897.x = _RESERVED_IDENTIFIER_FIXUP_2876.x;
                _RESERVED_IDENTIFIER_FIXUP_3897.y = _RESERVED_IDENTIFIER_FIXUP_2876.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2886 = _RESERVED_IDENTIFIER_FIXUP_3889.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3901;
                _RESERVED_IDENTIFIER_FIXUP_3901.x = _RESERVED_IDENTIFIER_FIXUP_2886.x;
                _RESERVED_IDENTIFIER_FIXUP_3901.y = _RESERVED_IDENTIFIER_FIXUP_2886.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2896 = _RESERVED_IDENTIFIER_FIXUP_3889.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3905;
                _RESERVED_IDENTIFIER_FIXUP_3905.x = _RESERVED_IDENTIFIER_FIXUP_2896.x;
                _RESERVED_IDENTIFIER_FIXUP_3905.y = _RESERVED_IDENTIFIER_FIXUP_2896.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2904 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2904.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2904.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2910 = hdLod7(param_84, param_85);
                _RESERVED_IDENTIFIER_FIXUP_3893.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3897.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3901.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3905.w = 0.0;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3893.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2910.y = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3897.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2910.z = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3901.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2910.w = hdLod7(param_90, param_91).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2967 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2910 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3905.xy;
                float param_93 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2973 = hdLod7(param_92, param_93).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3889.y = _RESERVED_IDENTIFIER_FIXUP_2973;
                float _RESERVED_IDENTIFIER_FIXUP_2978 = float(_RESERVED_IDENTIFIER_FIXUP_2973 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3889.y = _RESERVED_IDENTIFIER_FIXUP_2978;
                float _RESERVED_IDENTIFIER_FIXUP_2981 = dot(_RESERVED_IDENTIFIER_FIXUP_2967, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3889.z = _RESERVED_IDENTIFIER_FIXUP_2981;
                float _RESERVED_IDENTIFIER_FIXUP_2987 = _RESERVED_IDENTIFIER_FIXUP_2978 + _RESERVED_IDENTIFIER_FIXUP_2981;
                _RESERVED_IDENTIFIER_FIXUP_3889.y = _RESERVED_IDENTIFIER_FIXUP_2987;
                _RESERVED_IDENTIFIER_FIXUP_3889.x = _RESERVED_IDENTIFIER_FIXUP_2987 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4198 = _RESERVED_IDENTIFIER_FIXUP_2967;
                _RESERVED_IDENTIFIER_FIXUP_4192 = _RESERVED_IDENTIFIER_FIXUP_3889;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3803 = _RESERVED_IDENTIFIER_FIXUP_3769;
                _RESERVED_IDENTIFIER_FIXUP_3803.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3803.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3003 = (_RESERVED_IDENTIFIER_FIXUP_3803.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3808;
                _RESERVED_IDENTIFIER_FIXUP_3808.x = _RESERVED_IDENTIFIER_FIXUP_3003.x;
                _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_3003.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3013 = _RESERVED_IDENTIFIER_FIXUP_3808.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3812;
                _RESERVED_IDENTIFIER_FIXUP_3812.x = _RESERVED_IDENTIFIER_FIXUP_3013.x;
                _RESERVED_IDENTIFIER_FIXUP_3812.y = _RESERVED_IDENTIFIER_FIXUP_3013.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3023 = _RESERVED_IDENTIFIER_FIXUP_3808.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3816;
                _RESERVED_IDENTIFIER_FIXUP_3816.x = _RESERVED_IDENTIFIER_FIXUP_3023.x;
                _RESERVED_IDENTIFIER_FIXUP_3816.y = _RESERVED_IDENTIFIER_FIXUP_3023.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3033 = _RESERVED_IDENTIFIER_FIXUP_3808.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3820;
                _RESERVED_IDENTIFIER_FIXUP_3820.x = _RESERVED_IDENTIFIER_FIXUP_3033.x;
                _RESERVED_IDENTIFIER_FIXUP_3820.y = _RESERVED_IDENTIFIER_FIXUP_3033.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3043 = _RESERVED_IDENTIFIER_FIXUP_3808.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3824;
                _RESERVED_IDENTIFIER_FIXUP_3824.x = _RESERVED_IDENTIFIER_FIXUP_3043.x;
                _RESERVED_IDENTIFIER_FIXUP_3824.y = _RESERVED_IDENTIFIER_FIXUP_3043.y;
                _RESERVED_IDENTIFIER_FIXUP_3808.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3808.xy;
                float param_95 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3057 = hdLod8(param_94, param_95);
                _RESERVED_IDENTIFIER_FIXUP_3812.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3816.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3820.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3824.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3812.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3057.y = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3816.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3057.z = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3820.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3057.w = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3824.xy;
                float param_103 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3120 = hdLod8(param_102, param_103).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3864 = _RESERVED_IDENTIFIER_FIXUP_3799;
                _RESERVED_IDENTIFIER_FIXUP_3864.y = _RESERVED_IDENTIFIER_FIXUP_3120;
                float _RESERVED_IDENTIFIER_FIXUP_3125 = float(_RESERVED_IDENTIFIER_FIXUP_3120 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3864.y = _RESERVED_IDENTIFIER_FIXUP_3125;
                float _RESERVED_IDENTIFIER_FIXUP_3128 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_3057 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3864.z = _RESERVED_IDENTIFIER_FIXUP_3128;
                float _RESERVED_IDENTIFIER_FIXUP_3134 = _RESERVED_IDENTIFIER_FIXUP_3125 + _RESERVED_IDENTIFIER_FIXUP_3128;
                _RESERVED_IDENTIFIER_FIXUP_3864.y = _RESERVED_IDENTIFIER_FIXUP_3134;
                float _RESERVED_IDENTIFIER_FIXUP_3142 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3864.z = _RESERVED_IDENTIFIER_FIXUP_3142;
                float _RESERVED_IDENTIFIER_FIXUP_3148 = clamp((_RESERVED_IDENTIFIER_FIXUP_3142 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3864.z = _RESERVED_IDENTIFIER_FIXUP_3148;
                float _RESERVED_IDENTIFIER_FIXUP_3153 = (_RESERVED_IDENTIFIER_FIXUP_3134 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3864.y = _RESERVED_IDENTIFIER_FIXUP_3153;
                _RESERVED_IDENTIFIER_FIXUP_3864.x = (_RESERVED_IDENTIFIER_FIXUP_3148 * _RESERVED_IDENTIFIER_FIXUP_3153) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4198 = _RESERVED_IDENTIFIER_FIXUP_3803;
                _RESERVED_IDENTIFIER_FIXUP_4192 = _RESERVED_IDENTIFIER_FIXUP_3864;
            }
            _RESERVED_IDENTIFIER_FIXUP_4197 = _RESERVED_IDENTIFIER_FIXUP_4198;
            _RESERVED_IDENTIFIER_FIXUP_4191 = _RESERVED_IDENTIFIER_FIXUP_4192;
        }
        _RESERVED_IDENTIFIER_FIXUP_4196 = _RESERVED_IDENTIFIER_FIXUP_4197;
        _RESERVED_IDENTIFIER_FIXUP_4190 = _RESERVED_IDENTIFIER_FIXUP_4191;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3168 = (_RESERVED_IDENTIFIER_FIXUP_4190.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4139 = _RESERVED_IDENTIFIER_FIXUP_4190;
    _RESERVED_IDENTIFIER_FIXUP_4139.y = _RESERVED_IDENTIFIER_FIXUP_3168;
    _RESERVED_IDENTIFIER_FIXUP_4139.y = _RESERVED_IDENTIFIER_FIXUP_3168;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3181 = _RESERVED_IDENTIFIER_FIXUP_2413.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4145 = _RESERVED_IDENTIFIER_FIXUP_4196;
    _RESERVED_IDENTIFIER_FIXUP_4145.x = _RESERVED_IDENTIFIER_FIXUP_3181.x;
    _RESERVED_IDENTIFIER_FIXUP_4145.y = _RESERVED_IDENTIFIER_FIXUP_3181.y;
    _RESERVED_IDENTIFIER_FIXUP_4145.z = _RESERVED_IDENTIFIER_FIXUP_3181.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3192 = _RESERVED_IDENTIFIER_FIXUP_4139.xxx * _RESERVED_IDENTIFIER_FIXUP_4145.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4206 = vec4(_RESERVED_IDENTIFIER_FIXUP_3192.x, _RESERVED_IDENTIFIER_FIXUP_3168, _RESERVED_IDENTIFIER_FIXUP_3192.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3206 = (_RESERVED_IDENTIFIER_FIXUP_2413.xyz * _RESERVED_IDENTIFIER_FIXUP_4206.yyy) + _RESERVED_IDENTIFIER_FIXUP_4206.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4157 = _RESERVED_IDENTIFIER_FIXUP_2413;
    _RESERVED_IDENTIFIER_FIXUP_4157.x = _RESERVED_IDENTIFIER_FIXUP_3206.x;
    _RESERVED_IDENTIFIER_FIXUP_4157.y = _RESERVED_IDENTIFIER_FIXUP_3206.y;
    _RESERVED_IDENTIFIER_FIXUP_4157.z = _RESERVED_IDENTIFIER_FIXUP_3206.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3219 = _RESERVED_IDENTIFIER_FIXUP_4157.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4163 = _RESERVED_IDENTIFIER_FIXUP_4157;
    _RESERVED_IDENTIFIER_FIXUP_4163.x = _RESERVED_IDENTIFIER_FIXUP_3219.x;
    _RESERVED_IDENTIFIER_FIXUP_4163.y = _RESERVED_IDENTIFIER_FIXUP_3219.y;
    _RESERVED_IDENTIFIER_FIXUP_4163.z = _RESERVED_IDENTIFIER_FIXUP_3219.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4163.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1130 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1139;
    if (_RESERVED_IDENTIFIER_FIXUP_1130)
    {
        _RESERVED_IDENTIFIER_FIXUP_1139 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1130;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1139)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1176 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3713.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1202 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3272;
    if (_RESERVED_IDENTIFIER_FIXUP_1176 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3272 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1176), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1202);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3272 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1202);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3272;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3168);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    vec3 hdB93 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB93.x;
    r4.y = hdB93.y;
    r4.z = hdB93.z;
    vec3 hdB108 = v0.xyz + v0.xyz;
    r5.x = hdB108.x;
    r5.y = hdB108.y;
    r5.z = hdB108.z;
    vec3 hdB119 = r0.xyz * r5.xyz;
    r6.x = hdB119.x;
    r6.y = hdB119.y;
    r6.z = hdB119.z;
    vec4 hdB128 = r0;
    vec3 hdB137 = mix(r6.xyz, hdB128.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB137.x;
    r0.y = hdB137.y;
    r0.z = hdB137.z;
    vec3 hdB148 = r1.xyz * r5.xyz;
    r6.x = hdB148.x;
    r6.y = hdB148.y;
    r6.z = hdB148.z;
    vec4 hdB157 = r1;
    vec3 hdB163 = mix(r6.xyz, hdB157.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB163.x;
    r1.y = hdB163.y;
    r1.z = hdB163.z;
    vec3 hdB174 = r2.xyz * r5.xyz;
    r4.x = hdB174.x;
    r4.y = hdB174.y;
    r4.w = hdB174.z;
    vec4 hdB184 = r2;
    vec3 hdB190 = mix(r4.xyw, hdB184.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB190.x;
    r2.y = hdB190.y;
    r2.z = hdB190.z;
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 = r3.xxxx * r1;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB260 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB260.x;
        r1.y = hdB260.y;
        vec2 hdB271 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB271.x;
        r2.y = hdB271.y;
        vec2 hdB282 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB282.x;
        r3.y = hdB282.y;
        vec2 hdB293 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB293.x;
        r4.y = hdB293.y;
        vec2 hdB304 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB304.x;
        r5.y = hdB304.y;
        vec2 hdB315 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB315.x;
        r6.y = hdB315.y;
        vec2 hdB326 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB326.x;
        r7.y = hdB326.y;
        vec2 hdB337 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB337.x;
        r8.y = hdB337.y;
        vec4 hdB342 = r1;
        vec2 hdB348 = hdB342.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB348.x;
        r1.y = hdB348.y;
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
            vec2 hdB534 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB534.x;
            r1.z = hdB534.y;
            vec2 hdB544 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB544.x;
            r2.y = hdB544.y;
            vec2 hdB554 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB554.x;
            r3.y = hdB554.y;
            vec2 hdB564 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB564.x;
            r4.y = hdB564.y;
            vec2 hdB574 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB574.x;
            r5.y = hdB574.y;
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
                vec2 hdB690 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB690.x;
                r1.z = hdB690.y;
                vec2 hdB700 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB700.x;
                r2.y = hdB700.y;
                vec2 hdB710 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB710.x;
                r3.y = hdB710.y;
                vec2 hdB720 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB720.x;
                r4.y = hdB720.y;
                vec2 hdB730 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB730.x;
                r5.y = hdB730.y;
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
                vec2 hdB838 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB838.x;
                r3.y = hdB838.y;
                vec2 hdB848 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB848.x;
                r4.y = hdB848.y;
                vec2 hdB858 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB858.x;
                r5.y = hdB858.y;
                vec2 hdB868 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB868.x;
                r6.y = hdB868.y;
                vec2 hdB878 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB878.x;
                r7.y = hdB878.y;
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
    vec3 hdB1012 = r0.www * v1.xyz;
    r2.x = hdB1012.x;
    r2.y = hdB1012.y;
    r2.z = hdB1012.z;
    vec4 hdB1019 = r1;
    vec3 hdB1023 = hdB1019.xxx * r2.xyz;
    r1.x = hdB1023.x;
    r1.z = hdB1023.y;
    r1.w = hdB1023.z;
    vec4 hdB1030 = r0;
    vec3 hdB1037 = (hdB1030.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB1037.x;
    r0.y = hdB1037.y;
    r0.z = hdB1037.z;
    vec4 hdB1044 = r0;
    vec3 hdB1051 = hdB1044.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1051.x;
    r0.y = hdB1051.y;
    r0.z = hdB1051.z;
    vec3 hdB1066 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1066.x;
    oC0.y = hdB1066.y;
    oC0.z = hdB1066.z;
    oC0.w = 1.0;
    bool hdB1078 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1086;
    if (hdB1078)
    {
        hdB1086 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1086 = hdB1078;
    }
    if (hdB1086)
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
    bool _3728 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3738;
    if (_3728)
    {
        _3738 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3738 = _3728;
    }
    if (_3738)
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
        bool _3763 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3778;
        if (!_3763)
        {
            _3778 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3778 = _3763;
        }
        if (_3778)
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
