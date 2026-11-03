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
float _RESERVED_IDENTIFIER_FIXUP_4159;
vec4 _RESERVED_IDENTIFIER_FIXUP_4160;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1295 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1306 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1308 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4159).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1311 = _RESERVED_IDENTIFIER_FIXUP_1308 + _RESERVED_IDENTIFIER_FIXUP_1308;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3316;
    _RESERVED_IDENTIFIER_FIXUP_3316.x = _RESERVED_IDENTIFIER_FIXUP_1311.x;
    _RESERVED_IDENTIFIER_FIXUP_3316.y = _RESERVED_IDENTIFIER_FIXUP_1311.y;
    _RESERVED_IDENTIFIER_FIXUP_3316.z = _RESERVED_IDENTIFIER_FIXUP_1311.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_1287.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1322 = _RESERVED_IDENTIFIER_FIXUP_1319 * _RESERVED_IDENTIFIER_FIXUP_3316.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3322;
    _RESERVED_IDENTIFIER_FIXUP_3322.x = _RESERVED_IDENTIFIER_FIXUP_1322.x;
    _RESERVED_IDENTIFIER_FIXUP_3322.y = _RESERVED_IDENTIFIER_FIXUP_1322.y;
    _RESERVED_IDENTIFIER_FIXUP_3322.z = _RESERVED_IDENTIFIER_FIXUP_1322.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1336 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1306.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1337 = mix(_RESERVED_IDENTIFIER_FIXUP_3322.xyz, _RESERVED_IDENTIFIER_FIXUP_1319, _RESERVED_IDENTIFIER_FIXUP_1336);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3328 = _RESERVED_IDENTIFIER_FIXUP_1287;
    _RESERVED_IDENTIFIER_FIXUP_3328.x = _RESERVED_IDENTIFIER_FIXUP_1337.x;
    _RESERVED_IDENTIFIER_FIXUP_3328.y = _RESERVED_IDENTIFIER_FIXUP_1337.y;
    _RESERVED_IDENTIFIER_FIXUP_3328.z = _RESERVED_IDENTIFIER_FIXUP_1337.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_1291.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1348 = _RESERVED_IDENTIFIER_FIXUP_1345 * _RESERVED_IDENTIFIER_FIXUP_3316.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3334;
    _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_1348.x;
    _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_1348.y;
    _RESERVED_IDENTIFIER_FIXUP_3334.z = _RESERVED_IDENTIFIER_FIXUP_1348.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1362 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1306.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1363 = mix(_RESERVED_IDENTIFIER_FIXUP_3334.xyz, _RESERVED_IDENTIFIER_FIXUP_1345, _RESERVED_IDENTIFIER_FIXUP_1362);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3340 = _RESERVED_IDENTIFIER_FIXUP_1291;
    _RESERVED_IDENTIFIER_FIXUP_3340.x = _RESERVED_IDENTIFIER_FIXUP_1363.x;
    _RESERVED_IDENTIFIER_FIXUP_3340.y = _RESERVED_IDENTIFIER_FIXUP_1363.y;
    _RESERVED_IDENTIFIER_FIXUP_3340.z = _RESERVED_IDENTIFIER_FIXUP_1363.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1371 = _RESERVED_IDENTIFIER_FIXUP_1295.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1374 = _RESERVED_IDENTIFIER_FIXUP_1371 * _RESERVED_IDENTIFIER_FIXUP_3316.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3346;
    _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_1374.x;
    _RESERVED_IDENTIFIER_FIXUP_3346.y = _RESERVED_IDENTIFIER_FIXUP_1374.y;
    _RESERVED_IDENTIFIER_FIXUP_3346.z = _RESERVED_IDENTIFIER_FIXUP_1374.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1388 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1306.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1389 = mix(_RESERVED_IDENTIFIER_FIXUP_3346.xyz, _RESERVED_IDENTIFIER_FIXUP_1371, _RESERVED_IDENTIFIER_FIXUP_1388);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3352 = _RESERVED_IDENTIFIER_FIXUP_1295;
    _RESERVED_IDENTIFIER_FIXUP_3352.x = _RESERVED_IDENTIFIER_FIXUP_1389.x;
    _RESERVED_IDENTIFIER_FIXUP_3352.y = _RESERVED_IDENTIFIER_FIXUP_1389.y;
    _RESERVED_IDENTIFIER_FIXUP_3352.z = _RESERVED_IDENTIFIER_FIXUP_1389.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1397 = _RESERVED_IDENTIFIER_FIXUP_1299.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1400 = _RESERVED_IDENTIFIER_FIXUP_1397 * _RESERVED_IDENTIFIER_FIXUP_3316.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_1306;
    _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_1400.x;
    _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_1400.y;
    _RESERVED_IDENTIFIER_FIXUP_3358.z = _RESERVED_IDENTIFIER_FIXUP_1400.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1415 = mix(_RESERVED_IDENTIFIER_FIXUP_3358.xyz, _RESERVED_IDENTIFIER_FIXUP_1397, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3358.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3364 = _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_3364.x = _RESERVED_IDENTIFIER_FIXUP_1415.x;
    _RESERVED_IDENTIFIER_FIXUP_3364.y = _RESERVED_IDENTIFIER_FIXUP_1415.y;
    _RESERVED_IDENTIFIER_FIXUP_3364.z = _RESERVED_IDENTIFIER_FIXUP_1415.z;
    float _RESERVED_IDENTIFIER_FIXUP_1425 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1303.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3370 = _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_3370.w = _RESERVED_IDENTIFIER_FIXUP_1425;
    float _RESERVED_IDENTIFIER_FIXUP_1430 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1425;
    _RESERVED_IDENTIFIER_FIXUP_3370.w = _RESERVED_IDENTIFIER_FIXUP_1430;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1435 = _RESERVED_IDENTIFIER_FIXUP_3370.xxxx * _RESERVED_IDENTIFIER_FIXUP_3340;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1453 = (_RESERVED_IDENTIFIER_FIXUP_3364 * _RESERVED_IDENTIFIER_FIXUP_3370.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3352 * _RESERVED_IDENTIFIER_FIXUP_3370.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3328 * _RESERVED_IDENTIFIER_FIXUP_3370.wwww) + _RESERVED_IDENTIFIER_FIXUP_1435));
    float _RESERVED_IDENTIFIER_FIXUP_1460 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3377 = _RESERVED_IDENTIFIER_FIXUP_1435;
    _RESERVED_IDENTIFIER_FIXUP_3377.x = _RESERVED_IDENTIFIER_FIXUP_1460;
    float _RESERVED_IDENTIFIER_FIXUP_1466 = clamp((_RESERVED_IDENTIFIER_FIXUP_1460 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3377.x = _RESERVED_IDENTIFIER_FIXUP_1466;
    float _RESERVED_IDENTIFIER_FIXUP_1472 = ((-_RESERVED_IDENTIFIER_FIXUP_1466) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3377.x = _RESERVED_IDENTIFIER_FIXUP_1472;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4164;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4161;
    if (_RESERVED_IDENTIFIER_FIXUP_1472 != (-_RESERVED_IDENTIFIER_FIXUP_1472))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1484 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1484.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1484.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1490 = hdLod5(param_4, param_5);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1494 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3589 = _RESERVED_IDENTIFIER_FIXUP_1490;
        _RESERVED_IDENTIFIER_FIXUP_3589.y = _RESERVED_IDENTIFIER_FIXUP_1494.x;
        _RESERVED_IDENTIFIER_FIXUP_3589.z = _RESERVED_IDENTIFIER_FIXUP_1494.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_3589.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3593;
        _RESERVED_IDENTIFIER_FIXUP_3593.x = _RESERVED_IDENTIFIER_FIXUP_1504.x;
        _RESERVED_IDENTIFIER_FIXUP_3593.y = _RESERVED_IDENTIFIER_FIXUP_1504.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1511 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1515 = _RESERVED_IDENTIFIER_FIXUP_1511.y;
        _RESERVED_IDENTIFIER_FIXUP_3593.w = _RESERVED_IDENTIFIER_FIXUP_1515;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3593.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1515;
        float _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_1490.x + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1526;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1533 = _RESERVED_IDENTIFIER_FIXUP_3589.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3606;
        _RESERVED_IDENTIFIER_FIXUP_3606.x = _RESERVED_IDENTIFIER_FIXUP_1533.x;
        _RESERVED_IDENTIFIER_FIXUP_3606.y = _RESERVED_IDENTIFIER_FIXUP_1533.y;
        _RESERVED_IDENTIFIER_FIXUP_3606.w = _RESERVED_IDENTIFIER_FIXUP_1515;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3606.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1515;
        float _RESERVED_IDENTIFIER_FIXUP_1555 = _RESERVED_IDENTIFIER_FIXUP_1526 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1555;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1562 = _RESERVED_IDENTIFIER_FIXUP_3589.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3619;
        _RESERVED_IDENTIFIER_FIXUP_3619.x = _RESERVED_IDENTIFIER_FIXUP_1562.x;
        _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_1562.y;
        _RESERVED_IDENTIFIER_FIXUP_3619.w = _RESERVED_IDENTIFIER_FIXUP_1515;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3619.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1515;
        float _RESERVED_IDENTIFIER_FIXUP_1584 = _RESERVED_IDENTIFIER_FIXUP_1555 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1584;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1591 = _RESERVED_IDENTIFIER_FIXUP_3589.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3632;
        _RESERVED_IDENTIFIER_FIXUP_3632.x = _RESERVED_IDENTIFIER_FIXUP_1591.x;
        _RESERVED_IDENTIFIER_FIXUP_3632.y = _RESERVED_IDENTIFIER_FIXUP_1591.y;
        _RESERVED_IDENTIFIER_FIXUP_3632.w = _RESERVED_IDENTIFIER_FIXUP_1515;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3632.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1515;
        float _RESERVED_IDENTIFIER_FIXUP_1613 = _RESERVED_IDENTIFIER_FIXUP_1584 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1613;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1620 = _RESERVED_IDENTIFIER_FIXUP_3589.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3645;
        _RESERVED_IDENTIFIER_FIXUP_3645.x = _RESERVED_IDENTIFIER_FIXUP_1620.x;
        _RESERVED_IDENTIFIER_FIXUP_3645.y = _RESERVED_IDENTIFIER_FIXUP_1620.y;
        _RESERVED_IDENTIFIER_FIXUP_3645.w = _RESERVED_IDENTIFIER_FIXUP_1515;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3645.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1515;
        float _RESERVED_IDENTIFIER_FIXUP_1642 = _RESERVED_IDENTIFIER_FIXUP_1613 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1642;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1649 = _RESERVED_IDENTIFIER_FIXUP_3589.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3658;
        _RESERVED_IDENTIFIER_FIXUP_3658.x = _RESERVED_IDENTIFIER_FIXUP_1649.x;
        _RESERVED_IDENTIFIER_FIXUP_3658.y = _RESERVED_IDENTIFIER_FIXUP_1649.y;
        _RESERVED_IDENTIFIER_FIXUP_3658.w = _RESERVED_IDENTIFIER_FIXUP_1515;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3658.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1515;
        float _RESERVED_IDENTIFIER_FIXUP_1671 = _RESERVED_IDENTIFIER_FIXUP_1642 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1671;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1678 = _RESERVED_IDENTIFIER_FIXUP_3589.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3671;
        _RESERVED_IDENTIFIER_FIXUP_3671.x = _RESERVED_IDENTIFIER_FIXUP_1678.x;
        _RESERVED_IDENTIFIER_FIXUP_3671.y = _RESERVED_IDENTIFIER_FIXUP_1678.y;
        _RESERVED_IDENTIFIER_FIXUP_3671.w = _RESERVED_IDENTIFIER_FIXUP_1515;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3671.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1515;
        float _RESERVED_IDENTIFIER_FIXUP_1700 = _RESERVED_IDENTIFIER_FIXUP_1671 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1700;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_3589.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3684;
        _RESERVED_IDENTIFIER_FIXUP_3684.x = _RESERVED_IDENTIFIER_FIXUP_1707.x;
        _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_1707.y;
        _RESERVED_IDENTIFIER_FIXUP_3684.w = _RESERVED_IDENTIFIER_FIXUP_1515;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3684.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1515;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1724 = hdLod5(param_20, param_21);
        float _RESERVED_IDENTIFIER_FIXUP_1729 = _RESERVED_IDENTIFIER_FIXUP_1700 + _RESERVED_IDENTIFIER_FIXUP_1724.x;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1729;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_1729 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4164 = _RESERVED_IDENTIFIER_FIXUP_1724;
        _RESERVED_IDENTIFIER_FIXUP_4161 = _RESERVED_IDENTIFIER_FIXUP_3589;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1742 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3377.y = _RESERVED_IDENTIFIER_FIXUP_1742;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4165;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4162;
        if (_RESERVED_IDENTIFIER_FIXUP_1742 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1751 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1761 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1763 = _RESERVED_IDENTIFIER_FIXUP_1761.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3529 = _RESERVED_IDENTIFIER_FIXUP_3377;
            _RESERVED_IDENTIFIER_FIXUP_3529.y = _RESERVED_IDENTIFIER_FIXUP_1763;
            _RESERVED_IDENTIFIER_FIXUP_3529.z = _RESERVED_IDENTIFIER_FIXUP_1761.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1771 = _RESERVED_IDENTIFIER_FIXUP_3529.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3533;
            _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1771.x;
            _RESERVED_IDENTIFIER_FIXUP_3533.y = _RESERVED_IDENTIFIER_FIXUP_1771.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1778 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1782 = _RESERVED_IDENTIFIER_FIXUP_1778.y;
            _RESERVED_IDENTIFIER_FIXUP_3533.w = _RESERVED_IDENTIFIER_FIXUP_1782;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1751.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1751.w;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3533.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1782;
            float _RESERVED_IDENTIFIER_FIXUP_1793 = hdLod6(param_22, param_23).x + hdLod6(param_24, param_25).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4190 = vec4(_RESERVED_IDENTIFIER_FIXUP_1472, _RESERVED_IDENTIFIER_FIXUP_1763, _RESERVED_IDENTIFIER_FIXUP_1761.y, _RESERVED_IDENTIFIER_FIXUP_1793);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1800 = _RESERVED_IDENTIFIER_FIXUP_4190.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3546;
            _RESERVED_IDENTIFIER_FIXUP_3546.x = _RESERVED_IDENTIFIER_FIXUP_1800.x;
            _RESERVED_IDENTIFIER_FIXUP_3546.y = _RESERVED_IDENTIFIER_FIXUP_1800.y;
            _RESERVED_IDENTIFIER_FIXUP_3546.w = _RESERVED_IDENTIFIER_FIXUP_1782;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3546.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1782;
            float _RESERVED_IDENTIFIER_FIXUP_1822 = _RESERVED_IDENTIFIER_FIXUP_1793 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_4190.w = _RESERVED_IDENTIFIER_FIXUP_1822;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1829 = _RESERVED_IDENTIFIER_FIXUP_4190.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3559;
            _RESERVED_IDENTIFIER_FIXUP_3559.x = _RESERVED_IDENTIFIER_FIXUP_1829.x;
            _RESERVED_IDENTIFIER_FIXUP_3559.y = _RESERVED_IDENTIFIER_FIXUP_1829.y;
            _RESERVED_IDENTIFIER_FIXUP_3559.w = _RESERVED_IDENTIFIER_FIXUP_1782;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3559.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1782;
            float _RESERVED_IDENTIFIER_FIXUP_1851 = _RESERVED_IDENTIFIER_FIXUP_1822 + hdLod6(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_4190.w = _RESERVED_IDENTIFIER_FIXUP_1851;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1858 = _RESERVED_IDENTIFIER_FIXUP_4190.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3572;
            _RESERVED_IDENTIFIER_FIXUP_3572.x = _RESERVED_IDENTIFIER_FIXUP_1858.x;
            _RESERVED_IDENTIFIER_FIXUP_3572.y = _RESERVED_IDENTIFIER_FIXUP_1858.y;
            _RESERVED_IDENTIFIER_FIXUP_3572.w = _RESERVED_IDENTIFIER_FIXUP_1782;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3572.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1782;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1875 = hdLod6(param_30, param_31);
            float _RESERVED_IDENTIFIER_FIXUP_1880 = _RESERVED_IDENTIFIER_FIXUP_1851 + _RESERVED_IDENTIFIER_FIXUP_1875.x;
            _RESERVED_IDENTIFIER_FIXUP_4190.y = _RESERVED_IDENTIFIER_FIXUP_1880;
            _RESERVED_IDENTIFIER_FIXUP_4190.x = _RESERVED_IDENTIFIER_FIXUP_1880 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4165 = _RESERVED_IDENTIFIER_FIXUP_1875;
            _RESERVED_IDENTIFIER_FIXUP_4162 = _RESERVED_IDENTIFIER_FIXUP_4190;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1893 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3394 = _RESERVED_IDENTIFIER_FIXUP_3377;
            _RESERVED_IDENTIFIER_FIXUP_3394.y = _RESERVED_IDENTIFIER_FIXUP_1893;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4166;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4163;
            if (_RESERVED_IDENTIFIER_FIXUP_1893 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1902 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1912 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1914 = _RESERVED_IDENTIFIER_FIXUP_1912.x;
                _RESERVED_IDENTIFIER_FIXUP_3394.y = _RESERVED_IDENTIFIER_FIXUP_1914;
                _RESERVED_IDENTIFIER_FIXUP_3394.z = _RESERVED_IDENTIFIER_FIXUP_1912.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1922 = _RESERVED_IDENTIFIER_FIXUP_3394.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3473;
                _RESERVED_IDENTIFIER_FIXUP_3473.x = _RESERVED_IDENTIFIER_FIXUP_1922.x;
                _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_1922.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1929 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1933 = _RESERVED_IDENTIFIER_FIXUP_1929.y;
                _RESERVED_IDENTIFIER_FIXUP_3473.w = _RESERVED_IDENTIFIER_FIXUP_1933;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1902.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1902.w;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3473.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1933;
                float _RESERVED_IDENTIFIER_FIXUP_1944 = hdLod7(param_32, param_33).x + hdLod7(param_34, param_35).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4189 = vec4(_RESERVED_IDENTIFIER_FIXUP_1472, _RESERVED_IDENTIFIER_FIXUP_1914, _RESERVED_IDENTIFIER_FIXUP_1912.y, _RESERVED_IDENTIFIER_FIXUP_1944);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1951 = _RESERVED_IDENTIFIER_FIXUP_4189.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3486;
                _RESERVED_IDENTIFIER_FIXUP_3486.x = _RESERVED_IDENTIFIER_FIXUP_1951.x;
                _RESERVED_IDENTIFIER_FIXUP_3486.y = _RESERVED_IDENTIFIER_FIXUP_1951.y;
                _RESERVED_IDENTIFIER_FIXUP_3486.w = _RESERVED_IDENTIFIER_FIXUP_1933;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3486.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1933;
                float _RESERVED_IDENTIFIER_FIXUP_1973 = _RESERVED_IDENTIFIER_FIXUP_1944 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_4189.w = _RESERVED_IDENTIFIER_FIXUP_1973;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1980 = _RESERVED_IDENTIFIER_FIXUP_4189.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3499;
                _RESERVED_IDENTIFIER_FIXUP_3499.x = _RESERVED_IDENTIFIER_FIXUP_1980.x;
                _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_1980.y;
                _RESERVED_IDENTIFIER_FIXUP_3499.w = _RESERVED_IDENTIFIER_FIXUP_1933;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3499.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1933;
                float _RESERVED_IDENTIFIER_FIXUP_2002 = _RESERVED_IDENTIFIER_FIXUP_1973 + hdLod7(param_38, param_39).x;
                _RESERVED_IDENTIFIER_FIXUP_4189.w = _RESERVED_IDENTIFIER_FIXUP_2002;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2009 = _RESERVED_IDENTIFIER_FIXUP_4189.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3512;
                _RESERVED_IDENTIFIER_FIXUP_3512.x = _RESERVED_IDENTIFIER_FIXUP_2009.x;
                _RESERVED_IDENTIFIER_FIXUP_3512.y = _RESERVED_IDENTIFIER_FIXUP_2009.y;
                _RESERVED_IDENTIFIER_FIXUP_3512.w = _RESERVED_IDENTIFIER_FIXUP_1933;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3512.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1933;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2026 = hdLod7(param_40, param_41);
                float _RESERVED_IDENTIFIER_FIXUP_2031 = _RESERVED_IDENTIFIER_FIXUP_2002 + _RESERVED_IDENTIFIER_FIXUP_2026.x;
                _RESERVED_IDENTIFIER_FIXUP_4189.y = _RESERVED_IDENTIFIER_FIXUP_2031;
                _RESERVED_IDENTIFIER_FIXUP_4189.x = _RESERVED_IDENTIFIER_FIXUP_2031 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4166 = _RESERVED_IDENTIFIER_FIXUP_2026;
                _RESERVED_IDENTIFIER_FIXUP_4163 = _RESERVED_IDENTIFIER_FIXUP_4189;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2047 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2051 = _RESERVED_IDENTIFIER_FIXUP_2047.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2062 = vec4(_RESERVED_IDENTIFIER_FIXUP_2047.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2051).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4186 = vec4(_RESERVED_IDENTIFIER_FIXUP_2062 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1430);
                _RESERVED_IDENTIFIER_FIXUP_4186.w = _RESERVED_IDENTIFIER_FIXUP_2051;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2099 = _RESERVED_IDENTIFIER_FIXUP_2062 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3427 = _RESERVED_IDENTIFIER_FIXUP_4186;
                _RESERVED_IDENTIFIER_FIXUP_3427.x = _RESERVED_IDENTIFIER_FIXUP_2099.x;
                _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_2099.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2121 = _RESERVED_IDENTIFIER_FIXUP_2062 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_3427;
                _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_2121.x;
                _RESERVED_IDENTIFIER_FIXUP_3436.y = _RESERVED_IDENTIFIER_FIXUP_2121.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2143 = _RESERVED_IDENTIFIER_FIXUP_2062 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3445 = _RESERVED_IDENTIFIER_FIXUP_3436;
                _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_2143.x;
                _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2143.y;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3445.xy;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_2051;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2153 = hdLod8(param_42, param_43);
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_2062;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_2051;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_4186.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_2051;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3427.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_2051;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3436.xy;
                float param_51 = _RESERVED_IDENTIFIER_FIXUP_2051;
                float _RESERVED_IDENTIFIER_FIXUP_2158 = (((hdLod8(param_44, param_45).x + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + hdLod8(param_50, param_51).x) + _RESERVED_IDENTIFIER_FIXUP_2153.x;
                float _RESERVED_IDENTIFIER_FIXUP_2166 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3456 = _RESERVED_IDENTIFIER_FIXUP_2153;
                _RESERVED_IDENTIFIER_FIXUP_3456.x = _RESERVED_IDENTIFIER_FIXUP_2166;
                float _RESERVED_IDENTIFIER_FIXUP_2172 = clamp((_RESERVED_IDENTIFIER_FIXUP_2166 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2177 = (_RESERVED_IDENTIFIER_FIXUP_2158 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4166 = _RESERVED_IDENTIFIER_FIXUP_3456;
                _RESERVED_IDENTIFIER_FIXUP_4163 = vec4((_RESERVED_IDENTIFIER_FIXUP_2172 * _RESERVED_IDENTIFIER_FIXUP_2177) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2172, _RESERVED_IDENTIFIER_FIXUP_2177, _RESERVED_IDENTIFIER_FIXUP_2158);
            }
            _RESERVED_IDENTIFIER_FIXUP_4165 = _RESERVED_IDENTIFIER_FIXUP_4166;
            _RESERVED_IDENTIFIER_FIXUP_4162 = _RESERVED_IDENTIFIER_FIXUP_4163;
        }
        _RESERVED_IDENTIFIER_FIXUP_4164 = _RESERVED_IDENTIFIER_FIXUP_4165;
        _RESERVED_IDENTIFIER_FIXUP_4161 = _RESERVED_IDENTIFIER_FIXUP_4162;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3703 = _RESERVED_IDENTIFIER_FIXUP_4161;
    _RESERVED_IDENTIFIER_FIXUP_3703.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3705 = _RESERVED_IDENTIFIER_FIXUP_4164;
    _RESERVED_IDENTIFIER_FIXUP_3705.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3705.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3705.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2216 = _RESERVED_IDENTIFIER_FIXUP_3703.xxx * _RESERVED_IDENTIFIER_FIXUP_3705.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4191 = vec4(_RESERVED_IDENTIFIER_FIXUP_2216.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2216.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2230 = (_RESERVED_IDENTIFIER_FIXUP_1453.xyz * _RESERVED_IDENTIFIER_FIXUP_4191.yyy) + _RESERVED_IDENTIFIER_FIXUP_4191.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3717 = _RESERVED_IDENTIFIER_FIXUP_1453;
    _RESERVED_IDENTIFIER_FIXUP_3717.x = _RESERVED_IDENTIFIER_FIXUP_2230.x;
    _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_2230.y;
    _RESERVED_IDENTIFIER_FIXUP_3717.z = _RESERVED_IDENTIFIER_FIXUP_2230.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2243 = _RESERVED_IDENTIFIER_FIXUP_3717.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3723 = _RESERVED_IDENTIFIER_FIXUP_3717;
    _RESERVED_IDENTIFIER_FIXUP_3723.x = _RESERVED_IDENTIFIER_FIXUP_2243.x;
    _RESERVED_IDENTIFIER_FIXUP_3723.y = _RESERVED_IDENTIFIER_FIXUP_2243.y;
    _RESERVED_IDENTIFIER_FIXUP_3723.z = _RESERVED_IDENTIFIER_FIXUP_2243.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2300 = OptTex0( texcoord0.xyz);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2304 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2308 = hdTex2(param_53);
    vec2 param_54 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2312 = hdTex3(param_54);
    vec2 param_55 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2316 = hdTex4(param_55);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2324 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3737;
    _RESERVED_IDENTIFIER_FIXUP_3737.x = _RESERVED_IDENTIFIER_FIXUP_2324.x;
    _RESERVED_IDENTIFIER_FIXUP_3737.y = _RESERVED_IDENTIFIER_FIXUP_2324.y;
    _RESERVED_IDENTIFIER_FIXUP_3737.z = _RESERVED_IDENTIFIER_FIXUP_2324.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2332 = _RESERVED_IDENTIFIER_FIXUP_2300.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2335 = _RESERVED_IDENTIFIER_FIXUP_2332 * _RESERVED_IDENTIFIER_FIXUP_3737.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3743;
    _RESERVED_IDENTIFIER_FIXUP_3743.x = _RESERVED_IDENTIFIER_FIXUP_2335.x;
    _RESERVED_IDENTIFIER_FIXUP_3743.y = _RESERVED_IDENTIFIER_FIXUP_2335.y;
    _RESERVED_IDENTIFIER_FIXUP_3743.z = _RESERVED_IDENTIFIER_FIXUP_2335.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2350 = mix(_RESERVED_IDENTIFIER_FIXUP_3743.xyz, _RESERVED_IDENTIFIER_FIXUP_2332, _RESERVED_IDENTIFIER_FIXUP_1336);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3749 = _RESERVED_IDENTIFIER_FIXUP_2300;
    _RESERVED_IDENTIFIER_FIXUP_3749.x = _RESERVED_IDENTIFIER_FIXUP_2350.x;
    _RESERVED_IDENTIFIER_FIXUP_3749.y = _RESERVED_IDENTIFIER_FIXUP_2350.y;
    _RESERVED_IDENTIFIER_FIXUP_3749.z = _RESERVED_IDENTIFIER_FIXUP_2350.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2358 = _RESERVED_IDENTIFIER_FIXUP_2304.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2361 = _RESERVED_IDENTIFIER_FIXUP_2358 * _RESERVED_IDENTIFIER_FIXUP_3737.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3755;
    _RESERVED_IDENTIFIER_FIXUP_3755.x = _RESERVED_IDENTIFIER_FIXUP_2361.x;
    _RESERVED_IDENTIFIER_FIXUP_3755.y = _RESERVED_IDENTIFIER_FIXUP_2361.y;
    _RESERVED_IDENTIFIER_FIXUP_3755.z = _RESERVED_IDENTIFIER_FIXUP_2361.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2376 = mix(_RESERVED_IDENTIFIER_FIXUP_3755.xyz, _RESERVED_IDENTIFIER_FIXUP_2358, _RESERVED_IDENTIFIER_FIXUP_1362);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3761 = _RESERVED_IDENTIFIER_FIXUP_2304;
    _RESERVED_IDENTIFIER_FIXUP_3761.x = _RESERVED_IDENTIFIER_FIXUP_2376.x;
    _RESERVED_IDENTIFIER_FIXUP_3761.y = _RESERVED_IDENTIFIER_FIXUP_2376.y;
    _RESERVED_IDENTIFIER_FIXUP_3761.z = _RESERVED_IDENTIFIER_FIXUP_2376.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2384 = _RESERVED_IDENTIFIER_FIXUP_2308.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2387 = _RESERVED_IDENTIFIER_FIXUP_2384 * _RESERVED_IDENTIFIER_FIXUP_3737.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3767;
    _RESERVED_IDENTIFIER_FIXUP_3767.x = _RESERVED_IDENTIFIER_FIXUP_2387.x;
    _RESERVED_IDENTIFIER_FIXUP_3767.y = _RESERVED_IDENTIFIER_FIXUP_2387.y;
    _RESERVED_IDENTIFIER_FIXUP_3767.z = _RESERVED_IDENTIFIER_FIXUP_2387.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2402 = mix(_RESERVED_IDENTIFIER_FIXUP_3767.xyz, _RESERVED_IDENTIFIER_FIXUP_2384, _RESERVED_IDENTIFIER_FIXUP_1388);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3773 = _RESERVED_IDENTIFIER_FIXUP_2308;
    _RESERVED_IDENTIFIER_FIXUP_3773.x = _RESERVED_IDENTIFIER_FIXUP_2402.x;
    _RESERVED_IDENTIFIER_FIXUP_3773.y = _RESERVED_IDENTIFIER_FIXUP_2402.y;
    _RESERVED_IDENTIFIER_FIXUP_3773.z = _RESERVED_IDENTIFIER_FIXUP_2402.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2410 = _RESERVED_IDENTIFIER_FIXUP_2312.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2413 = _RESERVED_IDENTIFIER_FIXUP_2410 * _RESERVED_IDENTIFIER_FIXUP_3737.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3779 = _RESERVED_IDENTIFIER_FIXUP_1306;
    _RESERVED_IDENTIFIER_FIXUP_3779.x = _RESERVED_IDENTIFIER_FIXUP_2413.x;
    _RESERVED_IDENTIFIER_FIXUP_3779.y = _RESERVED_IDENTIFIER_FIXUP_2413.y;
    _RESERVED_IDENTIFIER_FIXUP_3779.z = _RESERVED_IDENTIFIER_FIXUP_2413.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2428 = mix(_RESERVED_IDENTIFIER_FIXUP_3779.xyz, _RESERVED_IDENTIFIER_FIXUP_2410, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3779.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3785 = _RESERVED_IDENTIFIER_FIXUP_2312;
    _RESERVED_IDENTIFIER_FIXUP_3785.x = _RESERVED_IDENTIFIER_FIXUP_2428.x;
    _RESERVED_IDENTIFIER_FIXUP_3785.y = _RESERVED_IDENTIFIER_FIXUP_2428.y;
    _RESERVED_IDENTIFIER_FIXUP_3785.z = _RESERVED_IDENTIFIER_FIXUP_2428.z;
    float _RESERVED_IDENTIFIER_FIXUP_2438 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2316.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3791 = _RESERVED_IDENTIFIER_FIXUP_2316;
    _RESERVED_IDENTIFIER_FIXUP_3791.w = _RESERVED_IDENTIFIER_FIXUP_2438;
    float _RESERVED_IDENTIFIER_FIXUP_2443 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2438;
    _RESERVED_IDENTIFIER_FIXUP_3791.w = _RESERVED_IDENTIFIER_FIXUP_2443;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2448 = _RESERVED_IDENTIFIER_FIXUP_3791.xxxx * _RESERVED_IDENTIFIER_FIXUP_3761;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2466 = (_RESERVED_IDENTIFIER_FIXUP_3785 * _RESERVED_IDENTIFIER_FIXUP_3791.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3773 * _RESERVED_IDENTIFIER_FIXUP_3791.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3749 * _RESERVED_IDENTIFIER_FIXUP_3791.wwww) + _RESERVED_IDENTIFIER_FIXUP_2448));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3798 = _RESERVED_IDENTIFIER_FIXUP_2448;
    _RESERVED_IDENTIFIER_FIXUP_3798.x = _RESERVED_IDENTIFIER_FIXUP_1460;
    float _RESERVED_IDENTIFIER_FIXUP_2479 = clamp((_RESERVED_IDENTIFIER_FIXUP_1460 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3798.x = _RESERVED_IDENTIFIER_FIXUP_2479;
    float _RESERVED_IDENTIFIER_FIXUP_2485 = ((-_RESERVED_IDENTIFIER_FIXUP_2479) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3798.x = _RESERVED_IDENTIFIER_FIXUP_2485;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4179;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4173;
    if (_RESERVED_IDENTIFIER_FIXUP_2485 != (-_RESERVED_IDENTIFIER_FIXUP_2485))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2497 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2497.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2497.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2503 = hdLod5(param_56, param_57);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2507 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_4010 = _RESERVED_IDENTIFIER_FIXUP_2503;
        _RESERVED_IDENTIFIER_FIXUP_4010.y = _RESERVED_IDENTIFIER_FIXUP_2507.x;
        _RESERVED_IDENTIFIER_FIXUP_4010.z = _RESERVED_IDENTIFIER_FIXUP_2507.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2517 = _RESERVED_IDENTIFIER_FIXUP_4010.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4014;
        _RESERVED_IDENTIFIER_FIXUP_4014.x = _RESERVED_IDENTIFIER_FIXUP_2517.x;
        _RESERVED_IDENTIFIER_FIXUP_4014.y = _RESERVED_IDENTIFIER_FIXUP_2517.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2524 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2528 = _RESERVED_IDENTIFIER_FIXUP_2524.y;
        _RESERVED_IDENTIFIER_FIXUP_4014.w = _RESERVED_IDENTIFIER_FIXUP_2528;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_4014.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2528;
        float _RESERVED_IDENTIFIER_FIXUP_2539 = _RESERVED_IDENTIFIER_FIXUP_2503.x + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_2539;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2546 = _RESERVED_IDENTIFIER_FIXUP_4010.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4027;
        _RESERVED_IDENTIFIER_FIXUP_4027.x = _RESERVED_IDENTIFIER_FIXUP_2546.x;
        _RESERVED_IDENTIFIER_FIXUP_4027.y = _RESERVED_IDENTIFIER_FIXUP_2546.y;
        _RESERVED_IDENTIFIER_FIXUP_4027.w = _RESERVED_IDENTIFIER_FIXUP_2528;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_4027.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2528;
        float _RESERVED_IDENTIFIER_FIXUP_2568 = _RESERVED_IDENTIFIER_FIXUP_2539 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_2568;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2575 = _RESERVED_IDENTIFIER_FIXUP_4010.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4040;
        _RESERVED_IDENTIFIER_FIXUP_4040.x = _RESERVED_IDENTIFIER_FIXUP_2575.x;
        _RESERVED_IDENTIFIER_FIXUP_4040.y = _RESERVED_IDENTIFIER_FIXUP_2575.y;
        _RESERVED_IDENTIFIER_FIXUP_4040.w = _RESERVED_IDENTIFIER_FIXUP_2528;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_4040.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2528;
        float _RESERVED_IDENTIFIER_FIXUP_2597 = _RESERVED_IDENTIFIER_FIXUP_2568 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_2597;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2604 = _RESERVED_IDENTIFIER_FIXUP_4010.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4053;
        _RESERVED_IDENTIFIER_FIXUP_4053.x = _RESERVED_IDENTIFIER_FIXUP_2604.x;
        _RESERVED_IDENTIFIER_FIXUP_4053.y = _RESERVED_IDENTIFIER_FIXUP_2604.y;
        _RESERVED_IDENTIFIER_FIXUP_4053.w = _RESERVED_IDENTIFIER_FIXUP_2528;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_4053.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2528;
        float _RESERVED_IDENTIFIER_FIXUP_2626 = _RESERVED_IDENTIFIER_FIXUP_2597 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_2626;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2633 = _RESERVED_IDENTIFIER_FIXUP_4010.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4066;
        _RESERVED_IDENTIFIER_FIXUP_4066.x = _RESERVED_IDENTIFIER_FIXUP_2633.x;
        _RESERVED_IDENTIFIER_FIXUP_4066.y = _RESERVED_IDENTIFIER_FIXUP_2633.y;
        _RESERVED_IDENTIFIER_FIXUP_4066.w = _RESERVED_IDENTIFIER_FIXUP_2528;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_4066.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2528;
        float _RESERVED_IDENTIFIER_FIXUP_2655 = _RESERVED_IDENTIFIER_FIXUP_2626 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_2655;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2662 = _RESERVED_IDENTIFIER_FIXUP_4010.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4079;
        _RESERVED_IDENTIFIER_FIXUP_4079.x = _RESERVED_IDENTIFIER_FIXUP_2662.x;
        _RESERVED_IDENTIFIER_FIXUP_4079.y = _RESERVED_IDENTIFIER_FIXUP_2662.y;
        _RESERVED_IDENTIFIER_FIXUP_4079.w = _RESERVED_IDENTIFIER_FIXUP_2528;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_4079.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2528;
        float _RESERVED_IDENTIFIER_FIXUP_2684 = _RESERVED_IDENTIFIER_FIXUP_2655 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_2684;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2691 = _RESERVED_IDENTIFIER_FIXUP_4010.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4092;
        _RESERVED_IDENTIFIER_FIXUP_4092.x = _RESERVED_IDENTIFIER_FIXUP_2691.x;
        _RESERVED_IDENTIFIER_FIXUP_4092.y = _RESERVED_IDENTIFIER_FIXUP_2691.y;
        _RESERVED_IDENTIFIER_FIXUP_4092.w = _RESERVED_IDENTIFIER_FIXUP_2528;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4092.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2528;
        float _RESERVED_IDENTIFIER_FIXUP_2713 = _RESERVED_IDENTIFIER_FIXUP_2684 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_2713;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2720 = _RESERVED_IDENTIFIER_FIXUP_4010.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4105;
        _RESERVED_IDENTIFIER_FIXUP_4105.x = _RESERVED_IDENTIFIER_FIXUP_2720.x;
        _RESERVED_IDENTIFIER_FIXUP_4105.y = _RESERVED_IDENTIFIER_FIXUP_2720.y;
        _RESERVED_IDENTIFIER_FIXUP_4105.w = _RESERVED_IDENTIFIER_FIXUP_2528;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_4105.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2528;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2737 = hdLod5(param_72, param_73);
        float _RESERVED_IDENTIFIER_FIXUP_2742 = _RESERVED_IDENTIFIER_FIXUP_2713 + _RESERVED_IDENTIFIER_FIXUP_2737.x;
        _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_2742;
        _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_2742 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4179 = _RESERVED_IDENTIFIER_FIXUP_2737;
        _RESERVED_IDENTIFIER_FIXUP_4173 = _RESERVED_IDENTIFIER_FIXUP_4010;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2755 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3798.y = _RESERVED_IDENTIFIER_FIXUP_2755;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4180;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4174;
        if (_RESERVED_IDENTIFIER_FIXUP_2755 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2764 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2774 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2776 = _RESERVED_IDENTIFIER_FIXUP_2774.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3950 = _RESERVED_IDENTIFIER_FIXUP_3798;
            _RESERVED_IDENTIFIER_FIXUP_3950.y = _RESERVED_IDENTIFIER_FIXUP_2776;
            _RESERVED_IDENTIFIER_FIXUP_3950.z = _RESERVED_IDENTIFIER_FIXUP_2774.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2784 = _RESERVED_IDENTIFIER_FIXUP_3950.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3954;
            _RESERVED_IDENTIFIER_FIXUP_3954.x = _RESERVED_IDENTIFIER_FIXUP_2784.x;
            _RESERVED_IDENTIFIER_FIXUP_3954.y = _RESERVED_IDENTIFIER_FIXUP_2784.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2791 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2795 = _RESERVED_IDENTIFIER_FIXUP_2791.y;
            _RESERVED_IDENTIFIER_FIXUP_3954.w = _RESERVED_IDENTIFIER_FIXUP_2795;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2764.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2764.w;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3954.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2795;
            float _RESERVED_IDENTIFIER_FIXUP_2806 = hdLod6(param_74, param_75).x + hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4198 = vec4(_RESERVED_IDENTIFIER_FIXUP_2485, _RESERVED_IDENTIFIER_FIXUP_2776, _RESERVED_IDENTIFIER_FIXUP_2774.y, _RESERVED_IDENTIFIER_FIXUP_2806);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2813 = _RESERVED_IDENTIFIER_FIXUP_4198.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3967;
            _RESERVED_IDENTIFIER_FIXUP_3967.x = _RESERVED_IDENTIFIER_FIXUP_2813.x;
            _RESERVED_IDENTIFIER_FIXUP_3967.y = _RESERVED_IDENTIFIER_FIXUP_2813.y;
            _RESERVED_IDENTIFIER_FIXUP_3967.w = _RESERVED_IDENTIFIER_FIXUP_2795;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3967.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2795;
            float _RESERVED_IDENTIFIER_FIXUP_2835 = _RESERVED_IDENTIFIER_FIXUP_2806 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_4198.w = _RESERVED_IDENTIFIER_FIXUP_2835;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2842 = _RESERVED_IDENTIFIER_FIXUP_4198.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3980;
            _RESERVED_IDENTIFIER_FIXUP_3980.x = _RESERVED_IDENTIFIER_FIXUP_2842.x;
            _RESERVED_IDENTIFIER_FIXUP_3980.y = _RESERVED_IDENTIFIER_FIXUP_2842.y;
            _RESERVED_IDENTIFIER_FIXUP_3980.w = _RESERVED_IDENTIFIER_FIXUP_2795;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3980.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2795;
            float _RESERVED_IDENTIFIER_FIXUP_2864 = _RESERVED_IDENTIFIER_FIXUP_2835 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_4198.w = _RESERVED_IDENTIFIER_FIXUP_2864;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2871 = _RESERVED_IDENTIFIER_FIXUP_4198.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3993;
            _RESERVED_IDENTIFIER_FIXUP_3993.x = _RESERVED_IDENTIFIER_FIXUP_2871.x;
            _RESERVED_IDENTIFIER_FIXUP_3993.y = _RESERVED_IDENTIFIER_FIXUP_2871.y;
            _RESERVED_IDENTIFIER_FIXUP_3993.w = _RESERVED_IDENTIFIER_FIXUP_2795;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3993.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2795;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2888 = hdLod6(param_82, param_83);
            float _RESERVED_IDENTIFIER_FIXUP_2893 = _RESERVED_IDENTIFIER_FIXUP_2864 + _RESERVED_IDENTIFIER_FIXUP_2888.x;
            _RESERVED_IDENTIFIER_FIXUP_4198.y = _RESERVED_IDENTIFIER_FIXUP_2893;
            _RESERVED_IDENTIFIER_FIXUP_4198.x = _RESERVED_IDENTIFIER_FIXUP_2893 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4180 = _RESERVED_IDENTIFIER_FIXUP_2888;
            _RESERVED_IDENTIFIER_FIXUP_4174 = _RESERVED_IDENTIFIER_FIXUP_4198;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2906 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3815 = _RESERVED_IDENTIFIER_FIXUP_3798;
            _RESERVED_IDENTIFIER_FIXUP_3815.y = _RESERVED_IDENTIFIER_FIXUP_2906;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4181;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4175;
            if (_RESERVED_IDENTIFIER_FIXUP_2906 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2915 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2925 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2927 = _RESERVED_IDENTIFIER_FIXUP_2925.x;
                _RESERVED_IDENTIFIER_FIXUP_3815.y = _RESERVED_IDENTIFIER_FIXUP_2927;
                _RESERVED_IDENTIFIER_FIXUP_3815.z = _RESERVED_IDENTIFIER_FIXUP_2925.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2935 = _RESERVED_IDENTIFIER_FIXUP_3815.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3894;
                _RESERVED_IDENTIFIER_FIXUP_3894.x = _RESERVED_IDENTIFIER_FIXUP_2935.x;
                _RESERVED_IDENTIFIER_FIXUP_3894.y = _RESERVED_IDENTIFIER_FIXUP_2935.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2942 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2946 = _RESERVED_IDENTIFIER_FIXUP_2942.y;
                _RESERVED_IDENTIFIER_FIXUP_3894.w = _RESERVED_IDENTIFIER_FIXUP_2946;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2915.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2915.w;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3894.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2946;
                float _RESERVED_IDENTIFIER_FIXUP_2957 = hdLod7(param_84, param_85).x + hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4197 = vec4(_RESERVED_IDENTIFIER_FIXUP_2485, _RESERVED_IDENTIFIER_FIXUP_2927, _RESERVED_IDENTIFIER_FIXUP_2925.y, _RESERVED_IDENTIFIER_FIXUP_2957);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2964 = _RESERVED_IDENTIFIER_FIXUP_4197.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3907;
                _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_2964.x;
                _RESERVED_IDENTIFIER_FIXUP_3907.y = _RESERVED_IDENTIFIER_FIXUP_2964.y;
                _RESERVED_IDENTIFIER_FIXUP_3907.w = _RESERVED_IDENTIFIER_FIXUP_2946;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3907.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2946;
                float _RESERVED_IDENTIFIER_FIXUP_2986 = _RESERVED_IDENTIFIER_FIXUP_2957 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_4197.w = _RESERVED_IDENTIFIER_FIXUP_2986;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2993 = _RESERVED_IDENTIFIER_FIXUP_4197.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3920;
                _RESERVED_IDENTIFIER_FIXUP_3920.x = _RESERVED_IDENTIFIER_FIXUP_2993.x;
                _RESERVED_IDENTIFIER_FIXUP_3920.y = _RESERVED_IDENTIFIER_FIXUP_2993.y;
                _RESERVED_IDENTIFIER_FIXUP_3920.w = _RESERVED_IDENTIFIER_FIXUP_2946;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3920.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2946;
                float _RESERVED_IDENTIFIER_FIXUP_3015 = _RESERVED_IDENTIFIER_FIXUP_2986 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_4197.w = _RESERVED_IDENTIFIER_FIXUP_3015;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3022 = _RESERVED_IDENTIFIER_FIXUP_4197.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3933;
                _RESERVED_IDENTIFIER_FIXUP_3933.x = _RESERVED_IDENTIFIER_FIXUP_3022.x;
                _RESERVED_IDENTIFIER_FIXUP_3933.y = _RESERVED_IDENTIFIER_FIXUP_3022.y;
                _RESERVED_IDENTIFIER_FIXUP_3933.w = _RESERVED_IDENTIFIER_FIXUP_2946;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3933.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2946;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3039 = hdLod7(param_92, param_93);
                float _RESERVED_IDENTIFIER_FIXUP_3044 = _RESERVED_IDENTIFIER_FIXUP_3015 + _RESERVED_IDENTIFIER_FIXUP_3039.x;
                _RESERVED_IDENTIFIER_FIXUP_4197.y = _RESERVED_IDENTIFIER_FIXUP_3044;
                _RESERVED_IDENTIFIER_FIXUP_4197.x = _RESERVED_IDENTIFIER_FIXUP_3044 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4181 = _RESERVED_IDENTIFIER_FIXUP_3039;
                _RESERVED_IDENTIFIER_FIXUP_4175 = _RESERVED_IDENTIFIER_FIXUP_4197;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_3060 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_3064 = _RESERVED_IDENTIFIER_FIXUP_3060.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3075 = vec4(_RESERVED_IDENTIFIER_FIXUP_3060.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_3064).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4194 = vec4(_RESERVED_IDENTIFIER_FIXUP_3075 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2443);
                _RESERVED_IDENTIFIER_FIXUP_4194.w = _RESERVED_IDENTIFIER_FIXUP_3064;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3112 = _RESERVED_IDENTIFIER_FIXUP_3075 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3848 = _RESERVED_IDENTIFIER_FIXUP_4194;
                _RESERVED_IDENTIFIER_FIXUP_3848.x = _RESERVED_IDENTIFIER_FIXUP_3112.x;
                _RESERVED_IDENTIFIER_FIXUP_3848.y = _RESERVED_IDENTIFIER_FIXUP_3112.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3134 = _RESERVED_IDENTIFIER_FIXUP_3075 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3857 = _RESERVED_IDENTIFIER_FIXUP_3848;
                _RESERVED_IDENTIFIER_FIXUP_3857.x = _RESERVED_IDENTIFIER_FIXUP_3134.x;
                _RESERVED_IDENTIFIER_FIXUP_3857.y = _RESERVED_IDENTIFIER_FIXUP_3134.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3156 = _RESERVED_IDENTIFIER_FIXUP_3075 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3866 = _RESERVED_IDENTIFIER_FIXUP_3857;
                _RESERVED_IDENTIFIER_FIXUP_3866.x = _RESERVED_IDENTIFIER_FIXUP_3156.x;
                _RESERVED_IDENTIFIER_FIXUP_3866.y = _RESERVED_IDENTIFIER_FIXUP_3156.y;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3866.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_3064;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3166 = hdLod8(param_94, param_95);
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3075;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_3064;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_4194.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_3064;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3848.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_3064;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3857.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_3064;
                float _RESERVED_IDENTIFIER_FIXUP_3171 = (((hdLod8(param_96, param_97).x + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x) + _RESERVED_IDENTIFIER_FIXUP_3166.x;
                float _RESERVED_IDENTIFIER_FIXUP_3179 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3877 = _RESERVED_IDENTIFIER_FIXUP_3166;
                _RESERVED_IDENTIFIER_FIXUP_3877.x = _RESERVED_IDENTIFIER_FIXUP_3179;
                float _RESERVED_IDENTIFIER_FIXUP_3185 = clamp((_RESERVED_IDENTIFIER_FIXUP_3179 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_3190 = (_RESERVED_IDENTIFIER_FIXUP_3171 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4181 = _RESERVED_IDENTIFIER_FIXUP_3877;
                _RESERVED_IDENTIFIER_FIXUP_4175 = vec4((_RESERVED_IDENTIFIER_FIXUP_3185 * _RESERVED_IDENTIFIER_FIXUP_3190) + 1.0, _RESERVED_IDENTIFIER_FIXUP_3185, _RESERVED_IDENTIFIER_FIXUP_3190, _RESERVED_IDENTIFIER_FIXUP_3171);
            }
            _RESERVED_IDENTIFIER_FIXUP_4180 = _RESERVED_IDENTIFIER_FIXUP_4181;
            _RESERVED_IDENTIFIER_FIXUP_4174 = _RESERVED_IDENTIFIER_FIXUP_4175;
        }
        _RESERVED_IDENTIFIER_FIXUP_4179 = _RESERVED_IDENTIFIER_FIXUP_4180;
        _RESERVED_IDENTIFIER_FIXUP_4173 = _RESERVED_IDENTIFIER_FIXUP_4174;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3205 = (_RESERVED_IDENTIFIER_FIXUP_4173.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4122 = _RESERVED_IDENTIFIER_FIXUP_4173;
    _RESERVED_IDENTIFIER_FIXUP_4122.y = _RESERVED_IDENTIFIER_FIXUP_3205;
    _RESERVED_IDENTIFIER_FIXUP_4122.y = _RESERVED_IDENTIFIER_FIXUP_3205;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3218 = _RESERVED_IDENTIFIER_FIXUP_2466.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4128 = _RESERVED_IDENTIFIER_FIXUP_4179;
    _RESERVED_IDENTIFIER_FIXUP_4128.x = _RESERVED_IDENTIFIER_FIXUP_3218.x;
    _RESERVED_IDENTIFIER_FIXUP_4128.y = _RESERVED_IDENTIFIER_FIXUP_3218.y;
    _RESERVED_IDENTIFIER_FIXUP_4128.z = _RESERVED_IDENTIFIER_FIXUP_3218.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3229 = _RESERVED_IDENTIFIER_FIXUP_4122.xxx * _RESERVED_IDENTIFIER_FIXUP_4128.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4199 = vec4(_RESERVED_IDENTIFIER_FIXUP_3229.x, _RESERVED_IDENTIFIER_FIXUP_3205, _RESERVED_IDENTIFIER_FIXUP_3229.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3243 = (_RESERVED_IDENTIFIER_FIXUP_2466.xyz * _RESERVED_IDENTIFIER_FIXUP_4199.yyy) + _RESERVED_IDENTIFIER_FIXUP_4199.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4140 = _RESERVED_IDENTIFIER_FIXUP_2466;
    _RESERVED_IDENTIFIER_FIXUP_4140.x = _RESERVED_IDENTIFIER_FIXUP_3243.x;
    _RESERVED_IDENTIFIER_FIXUP_4140.y = _RESERVED_IDENTIFIER_FIXUP_3243.y;
    _RESERVED_IDENTIFIER_FIXUP_4140.z = _RESERVED_IDENTIFIER_FIXUP_3243.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3256 = _RESERVED_IDENTIFIER_FIXUP_4140.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4146 = _RESERVED_IDENTIFIER_FIXUP_4140;
    _RESERVED_IDENTIFIER_FIXUP_4146.x = _RESERVED_IDENTIFIER_FIXUP_3256.x;
    _RESERVED_IDENTIFIER_FIXUP_4146.y = _RESERVED_IDENTIFIER_FIXUP_3256.y;
    _RESERVED_IDENTIFIER_FIXUP_4146.z = _RESERVED_IDENTIFIER_FIXUP_3256.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4146.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3723.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1217 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3309;
    if (_RESERVED_IDENTIFIER_FIXUP_1191 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3309 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1191), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1217);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3309 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1217);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3309;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3205);
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
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
        vec2 hdB304 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB304.x;
        r1.z = hdB304.y;
        vec2 hdB315 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB315.x;
        r2.y = hdB315.y;
        vec2 hdB323 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB323.x;
        r2.w = hdB323.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.x += r2.x;
        vec2 hdB346 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB346.x;
        r2.y = hdB346.y;
        vec2 hdB353 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB353.x;
        r2.w = hdB353.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.x += r2.x;
        vec2 hdB376 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB376.x;
        r2.y = hdB376.y;
        vec2 hdB383 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB383.x;
        r2.w = hdB383.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.x += r2.x;
        vec2 hdB406 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB406.x;
        r2.y = hdB406.y;
        vec2 hdB413 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB413.x;
        r2.w = hdB413.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.x += r2.x;
        vec2 hdB436 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB436.x;
        r2.y = hdB436.y;
        vec2 hdB443 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB443.x;
        r2.w = hdB443.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r1.x += r2.x;
        vec2 hdB466 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB466.x;
        r2.y = hdB466.y;
        vec2 hdB473 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB473.x;
        r2.w = hdB473.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r1.x += r2.x;
        vec2 hdB496 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB496.x;
        r2.y = hdB496.y;
        vec2 hdB503 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB503.x;
        r2.w = hdB503.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod5(param_18, param_19);
        r1.x += r2.x;
        vec2 hdB526 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB526.x;
        r2.y = hdB526.y;
        vec2 hdB533 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB533.x;
        r2.w = hdB533.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod5(param_20, param_21);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r2.xy;
            float param_23 = r2.w;
            r2 = hdLod6(param_22, param_23);
            vec2 hdB583 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB583.x;
            r1.z = hdB583.y;
            vec2 hdB593 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB593.x;
            r3.y = hdB593.y;
            vec2 hdB600 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB600.x;
            r3.w = hdB600.y;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod6(param_24, param_25);
            r1.w = r2.x + r3.x;
            vec2 hdB622 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB622.x;
            r2.y = hdB622.y;
            vec2 hdB629 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB629.x;
            r2.w = hdB629.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r1.w += r2.x;
            vec2 hdB651 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB651.x;
            r2.y = hdB651.y;
            vec2 hdB658 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB658.x;
            r2.w = hdB658.y;
            vec2 param_28 = r2.xy;
            float param_29 = r2.w;
            r2 = hdLod6(param_28, param_29);
            r1.w += r2.x;
            vec2 hdB680 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB680.x;
            r2.y = hdB680.y;
            vec2 hdB687 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB687.x;
            r2.w = hdB687.y;
            vec2 param_30 = r2.xy;
            float param_31 = r2.w;
            r2 = hdLod6(param_30, param_31);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = r2.xy;
                float param_33 = r2.w;
                r2 = hdLod7(param_32, param_33);
                vec2 hdB737 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB737.x;
                r1.z = hdB737.y;
                vec2 hdB747 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB747.x;
                r3.y = hdB747.y;
                vec2 hdB754 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB754.x;
                r3.w = hdB754.y;
                vec2 param_34 = r3.xy;
                float param_35 = r3.w;
                r3 = hdLod7(param_34, param_35);
                r1.w = r2.x + r3.x;
                vec2 hdB776 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB776.x;
                r2.y = hdB776.y;
                vec2 hdB783 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB783.x;
                r2.w = hdB783.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r1.w += r2.x;
                vec2 hdB805 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB805.x;
                r2.y = hdB805.y;
                vec2 hdB812 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB812.x;
                r2.w = hdB812.y;
                vec2 param_38 = r2.xy;
                float param_39 = r2.w;
                r2 = hdLod7(param_38, param_39);
                r1.w += r2.x;
                vec2 hdB834 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB834.x;
                r2.y = hdB834.y;
                vec2 hdB841 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB841.x;
                r2.w = hdB841.y;
                vec2 param_40 = r2.xy;
                float param_41 = r2.w;
                r2 = hdLod7(param_40, param_41);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 hdB873 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB873.x;
                r2.w = hdB873.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_42 = r2.xy;
                float param_43 = r2.w;
                r3 = hdLod8(param_42, param_43);
                vec2 hdB898 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB898.x;
                r4.y = hdB898.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r5 = hdLod8(param_44, param_45);
                r1.w = r3.x + r5.x;
                vec2 hdB926 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB926.x;
                r4.y = hdB926.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r1.w += r3.x;
                vec2 hdB948 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB948.x;
                r4.y = hdB948.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r3 = hdLod8(param_48, param_49);
                r1.w += r3.x;
                vec2 hdB970 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB970.x;
                r4.y = hdB970.y;
                vec2 param_50 = r4.xy;
                float param_51 = r4.w;
                r2 = hdLod8(param_50, param_51);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB1027 = r0.www * v1.xyz;
    r2.x = hdB1027.x;
    r2.y = hdB1027.y;
    r2.z = hdB1027.z;
    vec4 hdB1034 = r1;
    vec3 hdB1038 = hdB1034.xxx * r2.xyz;
    r1.x = hdB1038.x;
    r1.z = hdB1038.y;
    r1.w = hdB1038.z;
    vec4 hdB1045 = r0;
    vec3 hdB1052 = (hdB1045.xyz * r1.yyy) + r1.xzw;
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
    bool _3934 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3944;
    if (_3934)
    {
        _3944 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3944 = _3934;
    }
    if (_3944)
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
        bool _3969 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3984;
        if (!_3969)
        {
            _3984 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3984 = _3969;
        }
        if (_3984)
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
