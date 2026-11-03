#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_4276;
vec4 _RESERVED_IDENTIFIER_FIXUP_4277;


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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _67 = hdOverride >= 0;
    bool _87;
    if (_67)
    {
        _87 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _87 = _67;
    }
    vec4 _88;
    if (_87)
    {
        _88 = vec4(float(hdOverride));
    }
    else
    {
        _88 = value;
    }
    return _88;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _105 = hdOverride >= 0;
    bool _114;
    if (_105)
    {
        _114 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _114 = _105;
    }
    vec4 _115;
    if (_114)
    {
        _115 = vec4(float(hdOverride));
    }
    else
    {
        _115 = value;
    }
    return _115;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _132 = hdOverride >= 0;
    bool _142;
    if (_132)
    {
        _142 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _142 = _132;
    }
    vec4 _143;
    if (_142)
    {
        _143 = vec4(float(hdOverride));
    }
    else
    {
        _143 = value;
    }
    return _143;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _160 = hdOverride >= 0;
    bool _170;
    if (_160)
    {
        _170 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _170 = _160;
    }
    vec4 _171;
    if (_170)
    {
        _171 = vec4(float(hdOverride));
    }
    else
    {
        _171 = value;
    }
    return _171;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _188 = hdOverride >= 0;
    bool _197;
    if (_188)
    {
        _197 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _197 = _188;
    }
    vec4 _198;
    if (_197)
    {
        _198 = vec4(float(hdOverride));
    }
    else
    {
        _198 = value;
    }
    return _198;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _216 = hdOverride >= 0;
    bool _226;
    if (_216)
    {
        _226 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _226 = _216;
    }
    vec4 _227;
    if (_226)
    {
        _227 = vec4(float(hdOverride));
    }
    else
    {
        _227 = value;
    }
    return _227;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _245 = hdOverride >= 0;
    bool _255;
    if (_245)
    {
        _255 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _255 = _245;
    }
    vec4 _256;
    if (_255)
    {
        _256 = vec4(float(hdOverride));
    }
    else
    {
        _256 = value;
    }
    return _256;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _274 = hdOverride >= 0;
    bool _284;
    if (_274)
    {
        _284 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _284 = _274;
    }
    vec4 _285;
    if (_284)
    {
        _285 = vec4(float(hdOverride));
    }
    else
    {
        _285 = value;
    }
    return _285;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _303 = hdOverride >= 0;
    bool _313;
    if (_303)
    {
        _313 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _313 = _303;
    }
    vec4 _314;
    if (_313)
    {
        _314 = vec4(float(hdOverride));
    }
    else
    {
        _314 = value;
    }
    return _314;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1304 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1308 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1316 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1320 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1323 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1325 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4276).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1328 = _RESERVED_IDENTIFIER_FIXUP_1325 + _RESERVED_IDENTIFIER_FIXUP_1325;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3367 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3367.x = _RESERVED_IDENTIFIER_FIXUP_1328.x;
    _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_1328.y;
    _RESERVED_IDENTIFIER_FIXUP_3367.z = _RESERVED_IDENTIFIER_FIXUP_1328.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1336 = _RESERVED_IDENTIFIER_FIXUP_1304.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_1336 * _RESERVED_IDENTIFIER_FIXUP_3367.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3373 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3373.x = _RESERVED_IDENTIFIER_FIXUP_1339.x;
    _RESERVED_IDENTIFIER_FIXUP_3373.y = _RESERVED_IDENTIFIER_FIXUP_1339.y;
    _RESERVED_IDENTIFIER_FIXUP_3373.z = _RESERVED_IDENTIFIER_FIXUP_1339.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1353 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1323.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1354 = mix(_RESERVED_IDENTIFIER_FIXUP_3373.xyz, _RESERVED_IDENTIFIER_FIXUP_1336, _RESERVED_IDENTIFIER_FIXUP_1353);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3379 = _RESERVED_IDENTIFIER_FIXUP_1304;
    _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_1354.x;
    _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_1354.y;
    _RESERVED_IDENTIFIER_FIXUP_3379.z = _RESERVED_IDENTIFIER_FIXUP_1354.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_1308.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1365 = _RESERVED_IDENTIFIER_FIXUP_1362 * _RESERVED_IDENTIFIER_FIXUP_3367.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3373.x = _RESERVED_IDENTIFIER_FIXUP_1365.x;
    _RESERVED_IDENTIFIER_FIXUP_3373.y = _RESERVED_IDENTIFIER_FIXUP_1365.y;
    _RESERVED_IDENTIFIER_FIXUP_3373.z = _RESERVED_IDENTIFIER_FIXUP_1365.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1379 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1323.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1380 = mix(_RESERVED_IDENTIFIER_FIXUP_3373.xyz, _RESERVED_IDENTIFIER_FIXUP_1362, _RESERVED_IDENTIFIER_FIXUP_1379);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3391 = _RESERVED_IDENTIFIER_FIXUP_1308;
    _RESERVED_IDENTIFIER_FIXUP_3391.x = _RESERVED_IDENTIFIER_FIXUP_1380.x;
    _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_1380.y;
    _RESERVED_IDENTIFIER_FIXUP_3391.z = _RESERVED_IDENTIFIER_FIXUP_1380.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1388 = _RESERVED_IDENTIFIER_FIXUP_1312.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_1388 * _RESERVED_IDENTIFIER_FIXUP_3367.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3373.x = _RESERVED_IDENTIFIER_FIXUP_1391.x;
    _RESERVED_IDENTIFIER_FIXUP_3373.y = _RESERVED_IDENTIFIER_FIXUP_1391.y;
    _RESERVED_IDENTIFIER_FIXUP_3373.z = _RESERVED_IDENTIFIER_FIXUP_1391.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1405 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1323.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1406 = mix(_RESERVED_IDENTIFIER_FIXUP_3373.xyz, _RESERVED_IDENTIFIER_FIXUP_1388, _RESERVED_IDENTIFIER_FIXUP_1405);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3403 = _RESERVED_IDENTIFIER_FIXUP_1312;
    _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_1406.x;
    _RESERVED_IDENTIFIER_FIXUP_3403.y = _RESERVED_IDENTIFIER_FIXUP_1406.y;
    _RESERVED_IDENTIFIER_FIXUP_3403.z = _RESERVED_IDENTIFIER_FIXUP_1406.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1414 = _RESERVED_IDENTIFIER_FIXUP_1316.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_1414 * _RESERVED_IDENTIFIER_FIXUP_3367.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3409 = _RESERVED_IDENTIFIER_FIXUP_1323;
    _RESERVED_IDENTIFIER_FIXUP_3409.x = _RESERVED_IDENTIFIER_FIXUP_1417.x;
    _RESERVED_IDENTIFIER_FIXUP_3409.y = _RESERVED_IDENTIFIER_FIXUP_1417.y;
    _RESERVED_IDENTIFIER_FIXUP_3409.z = _RESERVED_IDENTIFIER_FIXUP_1417.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1432 = mix(_RESERVED_IDENTIFIER_FIXUP_3409.xyz, _RESERVED_IDENTIFIER_FIXUP_1414, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3409.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3415 = _RESERVED_IDENTIFIER_FIXUP_1316;
    _RESERVED_IDENTIFIER_FIXUP_3415.x = _RESERVED_IDENTIFIER_FIXUP_1432.x;
    _RESERVED_IDENTIFIER_FIXUP_3415.y = _RESERVED_IDENTIFIER_FIXUP_1432.y;
    _RESERVED_IDENTIFIER_FIXUP_3415.z = _RESERVED_IDENTIFIER_FIXUP_1432.z;
    float _RESERVED_IDENTIFIER_FIXUP_1442 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1320.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3421 = _RESERVED_IDENTIFIER_FIXUP_1320;
    _RESERVED_IDENTIFIER_FIXUP_3421.w = _RESERVED_IDENTIFIER_FIXUP_1442;
    _RESERVED_IDENTIFIER_FIXUP_3421.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1442;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1452 = _RESERVED_IDENTIFIER_FIXUP_3421.xxxx * _RESERVED_IDENTIFIER_FIXUP_3391;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1470 = (_RESERVED_IDENTIFIER_FIXUP_3415 * _RESERVED_IDENTIFIER_FIXUP_3421.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3403 * _RESERVED_IDENTIFIER_FIXUP_3421.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3379 * _RESERVED_IDENTIFIER_FIXUP_3421.wwww) + _RESERVED_IDENTIFIER_FIXUP_1452));
    float _RESERVED_IDENTIFIER_FIXUP_1477 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3428 = _RESERVED_IDENTIFIER_FIXUP_1452;
    _RESERVED_IDENTIFIER_FIXUP_3428.x = _RESERVED_IDENTIFIER_FIXUP_1477;
    float _RESERVED_IDENTIFIER_FIXUP_1483 = clamp((_RESERVED_IDENTIFIER_FIXUP_1477 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3428.x = _RESERVED_IDENTIFIER_FIXUP_1483;
    float _RESERVED_IDENTIFIER_FIXUP_1489 = ((-_RESERVED_IDENTIFIER_FIXUP_1483) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3428.x = _RESERVED_IDENTIFIER_FIXUP_1489;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4281;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4278;
    if (_RESERVED_IDENTIFIER_FIXUP_1489 != (-_RESERVED_IDENTIFIER_FIXUP_1489))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1501 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3667;
        _RESERVED_IDENTIFIER_FIXUP_3667.x = _RESERVED_IDENTIFIER_FIXUP_1501.x;
        _RESERVED_IDENTIFIER_FIXUP_3667.y = _RESERVED_IDENTIFIER_FIXUP_1501.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1511 = _RESERVED_IDENTIFIER_FIXUP_3667.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3671;
        _RESERVED_IDENTIFIER_FIXUP_3671.x = _RESERVED_IDENTIFIER_FIXUP_1511.x;
        _RESERVED_IDENTIFIER_FIXUP_3671.y = _RESERVED_IDENTIFIER_FIXUP_1511.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1521 = _RESERVED_IDENTIFIER_FIXUP_3667.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3675;
        _RESERVED_IDENTIFIER_FIXUP_3675.x = _RESERVED_IDENTIFIER_FIXUP_1521.x;
        _RESERVED_IDENTIFIER_FIXUP_3675.y = _RESERVED_IDENTIFIER_FIXUP_1521.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_3667.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3679;
        _RESERVED_IDENTIFIER_FIXUP_3679.x = _RESERVED_IDENTIFIER_FIXUP_1531.x;
        _RESERVED_IDENTIFIER_FIXUP_3679.y = _RESERVED_IDENTIFIER_FIXUP_1531.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1541 = _RESERVED_IDENTIFIER_FIXUP_3667.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3683;
        _RESERVED_IDENTIFIER_FIXUP_3683.x = _RESERVED_IDENTIFIER_FIXUP_1541.x;
        _RESERVED_IDENTIFIER_FIXUP_3683.y = _RESERVED_IDENTIFIER_FIXUP_1541.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1551 = _RESERVED_IDENTIFIER_FIXUP_3667.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3687;
        _RESERVED_IDENTIFIER_FIXUP_3687.x = _RESERVED_IDENTIFIER_FIXUP_1551.x;
        _RESERVED_IDENTIFIER_FIXUP_3687.y = _RESERVED_IDENTIFIER_FIXUP_1551.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1561 = _RESERVED_IDENTIFIER_FIXUP_3667.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3691;
        _RESERVED_IDENTIFIER_FIXUP_3691.x = _RESERVED_IDENTIFIER_FIXUP_1561.x;
        _RESERVED_IDENTIFIER_FIXUP_3691.y = _RESERVED_IDENTIFIER_FIXUP_1561.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_3667.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3695;
        _RESERVED_IDENTIFIER_FIXUP_3695.x = _RESERVED_IDENTIFIER_FIXUP_1571.x;
        _RESERVED_IDENTIFIER_FIXUP_3695.y = _RESERVED_IDENTIFIER_FIXUP_1571.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_3667.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3699;
        _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_1581.x;
        _RESERVED_IDENTIFIER_FIXUP_3699.y = _RESERVED_IDENTIFIER_FIXUP_1581.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1589 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1589.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1589.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1595 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3671.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3675.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3679.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3683.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3683.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1635 = hdLod5(param_7, param_8);
        _RESERVED_IDENTIFIER_FIXUP_3687.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3691.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3695.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3699.w = 0.0;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3699.xy;
        float param_10 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1675 = hdLod5(param_9, param_10);
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3671.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1595.y = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3675.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1595.z = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3679.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1595.w = hdLod5(param_15, param_16).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1692 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1595 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3687.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1635.y = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3691.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1635.z = hdLod5(param_19, param_20).x;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3695.xy;
        float param_22 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1635.w = hdLod5(param_21, param_22).x;
        float _RESERVED_IDENTIFIER_FIXUP_1715 = _RESERVED_IDENTIFIER_FIXUP_1675.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3764 = _RESERVED_IDENTIFIER_FIXUP_1675;
        _RESERVED_IDENTIFIER_FIXUP_3764.x = _RESERVED_IDENTIFIER_FIXUP_1715;
        float _RESERVED_IDENTIFIER_FIXUP_1720 = float(_RESERVED_IDENTIFIER_FIXUP_1715 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3764.x = _RESERVED_IDENTIFIER_FIXUP_1720;
        float _RESERVED_IDENTIFIER_FIXUP_1723 = dot(_RESERVED_IDENTIFIER_FIXUP_1692, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3764.y = _RESERVED_IDENTIFIER_FIXUP_1723;
        float _RESERVED_IDENTIFIER_FIXUP_1726 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1635 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3764.z = _RESERVED_IDENTIFIER_FIXUP_1726;
        float _RESERVED_IDENTIFIER_FIXUP_1732 = _RESERVED_IDENTIFIER_FIXUP_1723 + _RESERVED_IDENTIFIER_FIXUP_1726;
        _RESERVED_IDENTIFIER_FIXUP_3764.y = _RESERVED_IDENTIFIER_FIXUP_1732;
        float _RESERVED_IDENTIFIER_FIXUP_1738 = _RESERVED_IDENTIFIER_FIXUP_1720 + _RESERVED_IDENTIFIER_FIXUP_1732;
        _RESERVED_IDENTIFIER_FIXUP_3764.x = _RESERVED_IDENTIFIER_FIXUP_1738;
        _RESERVED_IDENTIFIER_FIXUP_3764.x = _RESERVED_IDENTIFIER_FIXUP_1738 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4281 = _RESERVED_IDENTIFIER_FIXUP_1692;
        _RESERVED_IDENTIFIER_FIXUP_4278 = _RESERVED_IDENTIFIER_FIXUP_3764;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1751 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3428.y = _RESERVED_IDENTIFIER_FIXUP_1751;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4282;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4279;
        if (_RESERVED_IDENTIFIER_FIXUP_1751 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1760 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3601 = _RESERVED_IDENTIFIER_FIXUP_3428;
            _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_1760.x;
            _RESERVED_IDENTIFIER_FIXUP_3601.z = _RESERVED_IDENTIFIER_FIXUP_1760.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1770 = _RESERVED_IDENTIFIER_FIXUP_3601.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3605;
            _RESERVED_IDENTIFIER_FIXUP_3605.x = _RESERVED_IDENTIFIER_FIXUP_1770.x;
            _RESERVED_IDENTIFIER_FIXUP_3605.y = _RESERVED_IDENTIFIER_FIXUP_1770.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1780 = _RESERVED_IDENTIFIER_FIXUP_3601.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3609;
            _RESERVED_IDENTIFIER_FIXUP_3609.x = _RESERVED_IDENTIFIER_FIXUP_1780.x;
            _RESERVED_IDENTIFIER_FIXUP_3609.y = _RESERVED_IDENTIFIER_FIXUP_1780.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1790 = _RESERVED_IDENTIFIER_FIXUP_3601.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3613;
            _RESERVED_IDENTIFIER_FIXUP_3613.x = _RESERVED_IDENTIFIER_FIXUP_1790.x;
            _RESERVED_IDENTIFIER_FIXUP_3613.y = _RESERVED_IDENTIFIER_FIXUP_1790.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1800 = _RESERVED_IDENTIFIER_FIXUP_3601.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3617;
            _RESERVED_IDENTIFIER_FIXUP_3617.x = _RESERVED_IDENTIFIER_FIXUP_1800.x;
            _RESERVED_IDENTIFIER_FIXUP_3617.y = _RESERVED_IDENTIFIER_FIXUP_1800.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1808 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1808.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1808.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1814 = hdLod6(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_3605.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3609.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3613.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3617.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3605.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1814.y = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3609.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1814.z = hdLod6(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3613.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1814.w = hdLod6(param_29, param_30).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1871 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1814 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3617.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1877 = hdLod6(param_31, param_32).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_1877;
            float _RESERVED_IDENTIFIER_FIXUP_1882 = float(_RESERVED_IDENTIFIER_FIXUP_1877 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_1882;
            float _RESERVED_IDENTIFIER_FIXUP_1885 = dot(_RESERVED_IDENTIFIER_FIXUP_1871, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3601.z = _RESERVED_IDENTIFIER_FIXUP_1885;
            float _RESERVED_IDENTIFIER_FIXUP_1891 = _RESERVED_IDENTIFIER_FIXUP_1882 + _RESERVED_IDENTIFIER_FIXUP_1885;
            _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_1891;
            _RESERVED_IDENTIFIER_FIXUP_3601.x = _RESERVED_IDENTIFIER_FIXUP_1891 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4282 = _RESERVED_IDENTIFIER_FIXUP_1871;
            _RESERVED_IDENTIFIER_FIXUP_4279 = _RESERVED_IDENTIFIER_FIXUP_3601;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1904 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3445 = _RESERVED_IDENTIFIER_FIXUP_3428;
            _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_1904;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4283;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4280;
            if (_RESERVED_IDENTIFIER_FIXUP_1904 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1913 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3535 = _RESERVED_IDENTIFIER_FIXUP_3445;
                _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_1913.x;
                _RESERVED_IDENTIFIER_FIXUP_3535.z = _RESERVED_IDENTIFIER_FIXUP_1913.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1923 = _RESERVED_IDENTIFIER_FIXUP_3535.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3539;
                _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_1923.x;
                _RESERVED_IDENTIFIER_FIXUP_3539.y = _RESERVED_IDENTIFIER_FIXUP_1923.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1933 = _RESERVED_IDENTIFIER_FIXUP_3535.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3543;
                _RESERVED_IDENTIFIER_FIXUP_3543.x = _RESERVED_IDENTIFIER_FIXUP_1933.x;
                _RESERVED_IDENTIFIER_FIXUP_3543.y = _RESERVED_IDENTIFIER_FIXUP_1933.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1943 = _RESERVED_IDENTIFIER_FIXUP_3535.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3547;
                _RESERVED_IDENTIFIER_FIXUP_3547.x = _RESERVED_IDENTIFIER_FIXUP_1943.x;
                _RESERVED_IDENTIFIER_FIXUP_3547.y = _RESERVED_IDENTIFIER_FIXUP_1943.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1953 = _RESERVED_IDENTIFIER_FIXUP_3535.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3551;
                _RESERVED_IDENTIFIER_FIXUP_3551.x = _RESERVED_IDENTIFIER_FIXUP_1953.x;
                _RESERVED_IDENTIFIER_FIXUP_3551.y = _RESERVED_IDENTIFIER_FIXUP_1953.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1961 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1961.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1961.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1967 = hdLod7(param_33, param_34);
                _RESERVED_IDENTIFIER_FIXUP_3539.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3543.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3547.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3551.w = 0.0;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3539.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1967.y = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3543.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1967.z = hdLod7(param_37, param_38).x;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3547.xy;
                float param_40 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1967.w = hdLod7(param_39, param_40).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2024 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1967 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3551.xy;
                float param_42 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2030 = hdLod7(param_41, param_42).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_2030;
                float _RESERVED_IDENTIFIER_FIXUP_2035 = float(_RESERVED_IDENTIFIER_FIXUP_2030 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_2035;
                float _RESERVED_IDENTIFIER_FIXUP_2038 = dot(_RESERVED_IDENTIFIER_FIXUP_2024, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3535.z = _RESERVED_IDENTIFIER_FIXUP_2038;
                float _RESERVED_IDENTIFIER_FIXUP_2044 = _RESERVED_IDENTIFIER_FIXUP_2035 + _RESERVED_IDENTIFIER_FIXUP_2038;
                _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_2044;
                _RESERVED_IDENTIFIER_FIXUP_3535.x = _RESERVED_IDENTIFIER_FIXUP_2044 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4283 = _RESERVED_IDENTIFIER_FIXUP_2024;
                _RESERVED_IDENTIFIER_FIXUP_4280 = _RESERVED_IDENTIFIER_FIXUP_3535;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3449 = _RESERVED_IDENTIFIER_FIXUP_3403;
                _RESERVED_IDENTIFIER_FIXUP_3449.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3449.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2060 = (_RESERVED_IDENTIFIER_FIXUP_3449.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3454;
                _RESERVED_IDENTIFIER_FIXUP_3454.x = _RESERVED_IDENTIFIER_FIXUP_2060.x;
                _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_2060.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2070 = _RESERVED_IDENTIFIER_FIXUP_3454.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3458;
                _RESERVED_IDENTIFIER_FIXUP_3458.x = _RESERVED_IDENTIFIER_FIXUP_2070.x;
                _RESERVED_IDENTIFIER_FIXUP_3458.y = _RESERVED_IDENTIFIER_FIXUP_2070.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2080 = _RESERVED_IDENTIFIER_FIXUP_3454.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3462;
                _RESERVED_IDENTIFIER_FIXUP_3462.x = _RESERVED_IDENTIFIER_FIXUP_2080.x;
                _RESERVED_IDENTIFIER_FIXUP_3462.y = _RESERVED_IDENTIFIER_FIXUP_2080.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2090 = _RESERVED_IDENTIFIER_FIXUP_3454.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3466;
                _RESERVED_IDENTIFIER_FIXUP_3466.x = _RESERVED_IDENTIFIER_FIXUP_2090.x;
                _RESERVED_IDENTIFIER_FIXUP_3466.y = _RESERVED_IDENTIFIER_FIXUP_2090.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2100 = _RESERVED_IDENTIFIER_FIXUP_3454.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3470;
                _RESERVED_IDENTIFIER_FIXUP_3470.x = _RESERVED_IDENTIFIER_FIXUP_2100.x;
                _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_2100.y;
                _RESERVED_IDENTIFIER_FIXUP_3454.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3454.xy;
                float param_44 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2114 = hdLod8(param_43, param_44);
                _RESERVED_IDENTIFIER_FIXUP_3458.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3462.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3466.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3470.w = 0.0;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3458.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2114.y = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3462.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2114.z = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3466.xy;
                float param_50 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2114.w = hdLod8(param_49, param_50).x;
                vec2 param_51 = _RESERVED_IDENTIFIER_FIXUP_3470.xy;
                float param_52 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2177 = hdLod8(param_51, param_52).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3510 = _RESERVED_IDENTIFIER_FIXUP_3445;
                _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_2177;
                float _RESERVED_IDENTIFIER_FIXUP_2182 = float(_RESERVED_IDENTIFIER_FIXUP_2177 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_2182;
                float _RESERVED_IDENTIFIER_FIXUP_2185 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2114 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3510.z = _RESERVED_IDENTIFIER_FIXUP_2185;
                float _RESERVED_IDENTIFIER_FIXUP_2191 = _RESERVED_IDENTIFIER_FIXUP_2182 + _RESERVED_IDENTIFIER_FIXUP_2185;
                _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_2191;
                float _RESERVED_IDENTIFIER_FIXUP_2199 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3510.z = _RESERVED_IDENTIFIER_FIXUP_2199;
                float _RESERVED_IDENTIFIER_FIXUP_2205 = clamp((_RESERVED_IDENTIFIER_FIXUP_2199 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3510.z = _RESERVED_IDENTIFIER_FIXUP_2205;
                float _RESERVED_IDENTIFIER_FIXUP_2210 = (_RESERVED_IDENTIFIER_FIXUP_2191 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_2210;
                _RESERVED_IDENTIFIER_FIXUP_3510.x = (_RESERVED_IDENTIFIER_FIXUP_2205 * _RESERVED_IDENTIFIER_FIXUP_2210) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4283 = _RESERVED_IDENTIFIER_FIXUP_3449;
                _RESERVED_IDENTIFIER_FIXUP_4280 = _RESERVED_IDENTIFIER_FIXUP_3510;
            }
            _RESERVED_IDENTIFIER_FIXUP_4282 = _RESERVED_IDENTIFIER_FIXUP_4283;
            _RESERVED_IDENTIFIER_FIXUP_4279 = _RESERVED_IDENTIFIER_FIXUP_4280;
        }
        _RESERVED_IDENTIFIER_FIXUP_4281 = _RESERVED_IDENTIFIER_FIXUP_4282;
        _RESERVED_IDENTIFIER_FIXUP_4278 = _RESERVED_IDENTIFIER_FIXUP_4279;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3787 = _RESERVED_IDENTIFIER_FIXUP_4278;
    _RESERVED_IDENTIFIER_FIXUP_3787.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_4281;
    _RESERVED_IDENTIFIER_FIXUP_3789.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3789.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3789.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2249 = _RESERVED_IDENTIFIER_FIXUP_3787.xxx * _RESERVED_IDENTIFIER_FIXUP_3789.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4302 = vec4(_RESERVED_IDENTIFIER_FIXUP_2249.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2249.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2263 = (_RESERVED_IDENTIFIER_FIXUP_1470.xyz * _RESERVED_IDENTIFIER_FIXUP_4302.yyy) + _RESERVED_IDENTIFIER_FIXUP_4302.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3801 = _RESERVED_IDENTIFIER_FIXUP_1470;
    _RESERVED_IDENTIFIER_FIXUP_3801.x = _RESERVED_IDENTIFIER_FIXUP_2263.x;
    _RESERVED_IDENTIFIER_FIXUP_3801.y = _RESERVED_IDENTIFIER_FIXUP_2263.y;
    _RESERVED_IDENTIFIER_FIXUP_3801.z = _RESERVED_IDENTIFIER_FIXUP_2263.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2276 = _RESERVED_IDENTIFIER_FIXUP_3801.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3807 = _RESERVED_IDENTIFIER_FIXUP_3801;
    _RESERVED_IDENTIFIER_FIXUP_3807.x = _RESERVED_IDENTIFIER_FIXUP_2276.x;
    _RESERVED_IDENTIFIER_FIXUP_3807.y = _RESERVED_IDENTIFIER_FIXUP_2276.y;
    _RESERVED_IDENTIFIER_FIXUP_3807.z = _RESERVED_IDENTIFIER_FIXUP_2276.z;
    vec2 param_53 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2335 = hdTex0(param_53);
    vec2 param_54 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2339 = hdTex1(param_54);
    vec2 param_55 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2343 = hdTex2(param_55);
    vec2 param_56 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2347 = hdTex3(param_56);
    vec2 param_57 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2351 = hdTex4(param_57);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2359 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3821 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3821.x = _RESERVED_IDENTIFIER_FIXUP_2359.x;
    _RESERVED_IDENTIFIER_FIXUP_3821.y = _RESERVED_IDENTIFIER_FIXUP_2359.y;
    _RESERVED_IDENTIFIER_FIXUP_3821.z = _RESERVED_IDENTIFIER_FIXUP_2359.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2367 = _RESERVED_IDENTIFIER_FIXUP_2335.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2370 = _RESERVED_IDENTIFIER_FIXUP_2367 * _RESERVED_IDENTIFIER_FIXUP_3821.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3827 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3827.x = _RESERVED_IDENTIFIER_FIXUP_2370.x;
    _RESERVED_IDENTIFIER_FIXUP_3827.y = _RESERVED_IDENTIFIER_FIXUP_2370.y;
    _RESERVED_IDENTIFIER_FIXUP_3827.z = _RESERVED_IDENTIFIER_FIXUP_2370.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2385 = mix(_RESERVED_IDENTIFIER_FIXUP_3827.xyz, _RESERVED_IDENTIFIER_FIXUP_2367, _RESERVED_IDENTIFIER_FIXUP_1353);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3833 = _RESERVED_IDENTIFIER_FIXUP_2335;
    _RESERVED_IDENTIFIER_FIXUP_3833.x = _RESERVED_IDENTIFIER_FIXUP_2385.x;
    _RESERVED_IDENTIFIER_FIXUP_3833.y = _RESERVED_IDENTIFIER_FIXUP_2385.y;
    _RESERVED_IDENTIFIER_FIXUP_3833.z = _RESERVED_IDENTIFIER_FIXUP_2385.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2393 = _RESERVED_IDENTIFIER_FIXUP_2339.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2396 = _RESERVED_IDENTIFIER_FIXUP_2393 * _RESERVED_IDENTIFIER_FIXUP_3821.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3827.x = _RESERVED_IDENTIFIER_FIXUP_2396.x;
    _RESERVED_IDENTIFIER_FIXUP_3827.y = _RESERVED_IDENTIFIER_FIXUP_2396.y;
    _RESERVED_IDENTIFIER_FIXUP_3827.z = _RESERVED_IDENTIFIER_FIXUP_2396.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2411 = mix(_RESERVED_IDENTIFIER_FIXUP_3827.xyz, _RESERVED_IDENTIFIER_FIXUP_2393, _RESERVED_IDENTIFIER_FIXUP_1379);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3845 = _RESERVED_IDENTIFIER_FIXUP_2339;
    _RESERVED_IDENTIFIER_FIXUP_3845.x = _RESERVED_IDENTIFIER_FIXUP_2411.x;
    _RESERVED_IDENTIFIER_FIXUP_3845.y = _RESERVED_IDENTIFIER_FIXUP_2411.y;
    _RESERVED_IDENTIFIER_FIXUP_3845.z = _RESERVED_IDENTIFIER_FIXUP_2411.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2419 = _RESERVED_IDENTIFIER_FIXUP_2343.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2422 = _RESERVED_IDENTIFIER_FIXUP_2419 * _RESERVED_IDENTIFIER_FIXUP_3821.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3827.x = _RESERVED_IDENTIFIER_FIXUP_2422.x;
    _RESERVED_IDENTIFIER_FIXUP_3827.y = _RESERVED_IDENTIFIER_FIXUP_2422.y;
    _RESERVED_IDENTIFIER_FIXUP_3827.z = _RESERVED_IDENTIFIER_FIXUP_2422.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2437 = mix(_RESERVED_IDENTIFIER_FIXUP_3827.xyz, _RESERVED_IDENTIFIER_FIXUP_2419, _RESERVED_IDENTIFIER_FIXUP_1405);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3857 = _RESERVED_IDENTIFIER_FIXUP_2343;
    _RESERVED_IDENTIFIER_FIXUP_3857.x = _RESERVED_IDENTIFIER_FIXUP_2437.x;
    _RESERVED_IDENTIFIER_FIXUP_3857.y = _RESERVED_IDENTIFIER_FIXUP_2437.y;
    _RESERVED_IDENTIFIER_FIXUP_3857.z = _RESERVED_IDENTIFIER_FIXUP_2437.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2445 = _RESERVED_IDENTIFIER_FIXUP_2347.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2448 = _RESERVED_IDENTIFIER_FIXUP_2445 * _RESERVED_IDENTIFIER_FIXUP_3821.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3863 = _RESERVED_IDENTIFIER_FIXUP_1323;
    _RESERVED_IDENTIFIER_FIXUP_3863.x = _RESERVED_IDENTIFIER_FIXUP_2448.x;
    _RESERVED_IDENTIFIER_FIXUP_3863.y = _RESERVED_IDENTIFIER_FIXUP_2448.y;
    _RESERVED_IDENTIFIER_FIXUP_3863.z = _RESERVED_IDENTIFIER_FIXUP_2448.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2463 = mix(_RESERVED_IDENTIFIER_FIXUP_3863.xyz, _RESERVED_IDENTIFIER_FIXUP_2445, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3863.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3869 = _RESERVED_IDENTIFIER_FIXUP_2347;
    _RESERVED_IDENTIFIER_FIXUP_3869.x = _RESERVED_IDENTIFIER_FIXUP_2463.x;
    _RESERVED_IDENTIFIER_FIXUP_3869.y = _RESERVED_IDENTIFIER_FIXUP_2463.y;
    _RESERVED_IDENTIFIER_FIXUP_3869.z = _RESERVED_IDENTIFIER_FIXUP_2463.z;
    float _RESERVED_IDENTIFIER_FIXUP_2473 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2351.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3875 = _RESERVED_IDENTIFIER_FIXUP_2351;
    _RESERVED_IDENTIFIER_FIXUP_3875.w = _RESERVED_IDENTIFIER_FIXUP_2473;
    _RESERVED_IDENTIFIER_FIXUP_3875.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2473;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2483 = _RESERVED_IDENTIFIER_FIXUP_3875.xxxx * _RESERVED_IDENTIFIER_FIXUP_3845;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2501 = (_RESERVED_IDENTIFIER_FIXUP_3869 * _RESERVED_IDENTIFIER_FIXUP_3875.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3857 * _RESERVED_IDENTIFIER_FIXUP_3875.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3833 * _RESERVED_IDENTIFIER_FIXUP_3875.wwww) + _RESERVED_IDENTIFIER_FIXUP_2483));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3882 = _RESERVED_IDENTIFIER_FIXUP_2483;
    _RESERVED_IDENTIFIER_FIXUP_3882.x = _RESERVED_IDENTIFIER_FIXUP_1477;
    float _RESERVED_IDENTIFIER_FIXUP_2514 = clamp((_RESERVED_IDENTIFIER_FIXUP_1477 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3882.x = _RESERVED_IDENTIFIER_FIXUP_2514;
    float _RESERVED_IDENTIFIER_FIXUP_2520 = ((-_RESERVED_IDENTIFIER_FIXUP_2514) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3882.x = _RESERVED_IDENTIFIER_FIXUP_2520;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4296;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4290;
    if (_RESERVED_IDENTIFIER_FIXUP_2520 != (-_RESERVED_IDENTIFIER_FIXUP_2520))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2532 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_4121;
        _RESERVED_IDENTIFIER_FIXUP_4121.x = _RESERVED_IDENTIFIER_FIXUP_2532.x;
        _RESERVED_IDENTIFIER_FIXUP_4121.y = _RESERVED_IDENTIFIER_FIXUP_2532.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2542 = _RESERVED_IDENTIFIER_FIXUP_4121.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4125;
        _RESERVED_IDENTIFIER_FIXUP_4125.x = _RESERVED_IDENTIFIER_FIXUP_2542.x;
        _RESERVED_IDENTIFIER_FIXUP_4125.y = _RESERVED_IDENTIFIER_FIXUP_2542.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2552 = _RESERVED_IDENTIFIER_FIXUP_4121.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4129;
        _RESERVED_IDENTIFIER_FIXUP_4129.x = _RESERVED_IDENTIFIER_FIXUP_2552.x;
        _RESERVED_IDENTIFIER_FIXUP_4129.y = _RESERVED_IDENTIFIER_FIXUP_2552.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2562 = _RESERVED_IDENTIFIER_FIXUP_4121.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4133;
        _RESERVED_IDENTIFIER_FIXUP_4133.x = _RESERVED_IDENTIFIER_FIXUP_2562.x;
        _RESERVED_IDENTIFIER_FIXUP_4133.y = _RESERVED_IDENTIFIER_FIXUP_2562.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2572 = _RESERVED_IDENTIFIER_FIXUP_4121.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4137;
        _RESERVED_IDENTIFIER_FIXUP_4137.x = _RESERVED_IDENTIFIER_FIXUP_2572.x;
        _RESERVED_IDENTIFIER_FIXUP_4137.y = _RESERVED_IDENTIFIER_FIXUP_2572.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2582 = _RESERVED_IDENTIFIER_FIXUP_4121.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4141;
        _RESERVED_IDENTIFIER_FIXUP_4141.x = _RESERVED_IDENTIFIER_FIXUP_2582.x;
        _RESERVED_IDENTIFIER_FIXUP_4141.y = _RESERVED_IDENTIFIER_FIXUP_2582.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2592 = _RESERVED_IDENTIFIER_FIXUP_4121.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4145;
        _RESERVED_IDENTIFIER_FIXUP_4145.x = _RESERVED_IDENTIFIER_FIXUP_2592.x;
        _RESERVED_IDENTIFIER_FIXUP_4145.y = _RESERVED_IDENTIFIER_FIXUP_2592.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2602 = _RESERVED_IDENTIFIER_FIXUP_4121.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4149;
        _RESERVED_IDENTIFIER_FIXUP_4149.x = _RESERVED_IDENTIFIER_FIXUP_2602.x;
        _RESERVED_IDENTIFIER_FIXUP_4149.y = _RESERVED_IDENTIFIER_FIXUP_2602.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2612 = _RESERVED_IDENTIFIER_FIXUP_4121.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4153;
        _RESERVED_IDENTIFIER_FIXUP_4153.x = _RESERVED_IDENTIFIER_FIXUP_2612.x;
        _RESERVED_IDENTIFIER_FIXUP_4153.y = _RESERVED_IDENTIFIER_FIXUP_2612.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2620 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2620.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2620.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2626 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_4125.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4129.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4133.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4137.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_4137.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2666 = hdLod5(param_60, param_61);
        _RESERVED_IDENTIFIER_FIXUP_4141.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4145.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4149.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4153.w = 0.0;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_4153.xy;
        float param_63 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2706 = hdLod5(param_62, param_63);
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_4125.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2626.y = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_4129.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2626.z = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_4133.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2626.w = hdLod5(param_68, param_69).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2723 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2626 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4141.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2666.y = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_4145.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2666.z = hdLod5(param_72, param_73).x;
        vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_4149.xy;
        float param_75 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2666.w = hdLod5(param_74, param_75).x;
        float _RESERVED_IDENTIFIER_FIXUP_2746 = _RESERVED_IDENTIFIER_FIXUP_2706.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4218 = _RESERVED_IDENTIFIER_FIXUP_2706;
        _RESERVED_IDENTIFIER_FIXUP_4218.x = _RESERVED_IDENTIFIER_FIXUP_2746;
        float _RESERVED_IDENTIFIER_FIXUP_2751 = float(_RESERVED_IDENTIFIER_FIXUP_2746 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_4218.x = _RESERVED_IDENTIFIER_FIXUP_2751;
        float _RESERVED_IDENTIFIER_FIXUP_2754 = dot(_RESERVED_IDENTIFIER_FIXUP_2723, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4218.y = _RESERVED_IDENTIFIER_FIXUP_2754;
        float _RESERVED_IDENTIFIER_FIXUP_2757 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2666 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4218.z = _RESERVED_IDENTIFIER_FIXUP_2757;
        float _RESERVED_IDENTIFIER_FIXUP_2763 = _RESERVED_IDENTIFIER_FIXUP_2754 + _RESERVED_IDENTIFIER_FIXUP_2757;
        _RESERVED_IDENTIFIER_FIXUP_4218.y = _RESERVED_IDENTIFIER_FIXUP_2763;
        float _RESERVED_IDENTIFIER_FIXUP_2769 = _RESERVED_IDENTIFIER_FIXUP_2751 + _RESERVED_IDENTIFIER_FIXUP_2763;
        _RESERVED_IDENTIFIER_FIXUP_4218.x = _RESERVED_IDENTIFIER_FIXUP_2769;
        _RESERVED_IDENTIFIER_FIXUP_4218.x = _RESERVED_IDENTIFIER_FIXUP_2769 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4296 = _RESERVED_IDENTIFIER_FIXUP_2723;
        _RESERVED_IDENTIFIER_FIXUP_4290 = _RESERVED_IDENTIFIER_FIXUP_4218;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2782 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3882.y = _RESERVED_IDENTIFIER_FIXUP_2782;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4297;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4291;
        if (_RESERVED_IDENTIFIER_FIXUP_2782 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2791 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_4055 = _RESERVED_IDENTIFIER_FIXUP_3882;
            _RESERVED_IDENTIFIER_FIXUP_4055.y = _RESERVED_IDENTIFIER_FIXUP_2791.x;
            _RESERVED_IDENTIFIER_FIXUP_4055.z = _RESERVED_IDENTIFIER_FIXUP_2791.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2801 = _RESERVED_IDENTIFIER_FIXUP_4055.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4059;
            _RESERVED_IDENTIFIER_FIXUP_4059.x = _RESERVED_IDENTIFIER_FIXUP_2801.x;
            _RESERVED_IDENTIFIER_FIXUP_4059.y = _RESERVED_IDENTIFIER_FIXUP_2801.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2811 = _RESERVED_IDENTIFIER_FIXUP_4055.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4063;
            _RESERVED_IDENTIFIER_FIXUP_4063.x = _RESERVED_IDENTIFIER_FIXUP_2811.x;
            _RESERVED_IDENTIFIER_FIXUP_4063.y = _RESERVED_IDENTIFIER_FIXUP_2811.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2821 = _RESERVED_IDENTIFIER_FIXUP_4055.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4067;
            _RESERVED_IDENTIFIER_FIXUP_4067.x = _RESERVED_IDENTIFIER_FIXUP_2821.x;
            _RESERVED_IDENTIFIER_FIXUP_4067.y = _RESERVED_IDENTIFIER_FIXUP_2821.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2831 = _RESERVED_IDENTIFIER_FIXUP_4055.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4071;
            _RESERVED_IDENTIFIER_FIXUP_4071.x = _RESERVED_IDENTIFIER_FIXUP_2831.x;
            _RESERVED_IDENTIFIER_FIXUP_4071.y = _RESERVED_IDENTIFIER_FIXUP_2831.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2839 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2839.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2839.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2845 = hdLod6(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_4059.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4063.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4067.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4071.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_4059.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2845.y = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_4063.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2845.z = hdLod6(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_4067.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2845.w = hdLod6(param_82, param_83).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2902 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2845 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_4071.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2908 = hdLod6(param_84, param_85).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_4055.y = _RESERVED_IDENTIFIER_FIXUP_2908;
            float _RESERVED_IDENTIFIER_FIXUP_2913 = float(_RESERVED_IDENTIFIER_FIXUP_2908 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_4055.y = _RESERVED_IDENTIFIER_FIXUP_2913;
            float _RESERVED_IDENTIFIER_FIXUP_2916 = dot(_RESERVED_IDENTIFIER_FIXUP_2902, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_4055.z = _RESERVED_IDENTIFIER_FIXUP_2916;
            float _RESERVED_IDENTIFIER_FIXUP_2922 = _RESERVED_IDENTIFIER_FIXUP_2913 + _RESERVED_IDENTIFIER_FIXUP_2916;
            _RESERVED_IDENTIFIER_FIXUP_4055.y = _RESERVED_IDENTIFIER_FIXUP_2922;
            _RESERVED_IDENTIFIER_FIXUP_4055.x = _RESERVED_IDENTIFIER_FIXUP_2922 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4297 = _RESERVED_IDENTIFIER_FIXUP_2902;
            _RESERVED_IDENTIFIER_FIXUP_4291 = _RESERVED_IDENTIFIER_FIXUP_4055;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2935 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3899 = _RESERVED_IDENTIFIER_FIXUP_3882;
            _RESERVED_IDENTIFIER_FIXUP_3899.y = _RESERVED_IDENTIFIER_FIXUP_2935;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4298;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4292;
            if (_RESERVED_IDENTIFIER_FIXUP_2935 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2944 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3989 = _RESERVED_IDENTIFIER_FIXUP_3899;
                _RESERVED_IDENTIFIER_FIXUP_3989.y = _RESERVED_IDENTIFIER_FIXUP_2944.x;
                _RESERVED_IDENTIFIER_FIXUP_3989.z = _RESERVED_IDENTIFIER_FIXUP_2944.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2954 = _RESERVED_IDENTIFIER_FIXUP_3989.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3993;
                _RESERVED_IDENTIFIER_FIXUP_3993.x = _RESERVED_IDENTIFIER_FIXUP_2954.x;
                _RESERVED_IDENTIFIER_FIXUP_3993.y = _RESERVED_IDENTIFIER_FIXUP_2954.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2964 = _RESERVED_IDENTIFIER_FIXUP_3989.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3997;
                _RESERVED_IDENTIFIER_FIXUP_3997.x = _RESERVED_IDENTIFIER_FIXUP_2964.x;
                _RESERVED_IDENTIFIER_FIXUP_3997.y = _RESERVED_IDENTIFIER_FIXUP_2964.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2974 = _RESERVED_IDENTIFIER_FIXUP_3989.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4001;
                _RESERVED_IDENTIFIER_FIXUP_4001.x = _RESERVED_IDENTIFIER_FIXUP_2974.x;
                _RESERVED_IDENTIFIER_FIXUP_4001.y = _RESERVED_IDENTIFIER_FIXUP_2974.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2984 = _RESERVED_IDENTIFIER_FIXUP_3989.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4005;
                _RESERVED_IDENTIFIER_FIXUP_4005.x = _RESERVED_IDENTIFIER_FIXUP_2984.x;
                _RESERVED_IDENTIFIER_FIXUP_4005.y = _RESERVED_IDENTIFIER_FIXUP_2984.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2992 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_2992.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2992.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2998 = hdLod7(param_86, param_87);
                _RESERVED_IDENTIFIER_FIXUP_3993.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3997.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_4001.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_4005.w = 0.0;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3993.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2998.y = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3997.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2998.z = hdLod7(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_4001.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2998.w = hdLod7(param_92, param_93).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3055 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2998 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_4005.xy;
                float param_95 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3061 = hdLod7(param_94, param_95).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3989.y = _RESERVED_IDENTIFIER_FIXUP_3061;
                float _RESERVED_IDENTIFIER_FIXUP_3066 = float(_RESERVED_IDENTIFIER_FIXUP_3061 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3989.y = _RESERVED_IDENTIFIER_FIXUP_3066;
                float _RESERVED_IDENTIFIER_FIXUP_3069 = dot(_RESERVED_IDENTIFIER_FIXUP_3055, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3989.z = _RESERVED_IDENTIFIER_FIXUP_3069;
                float _RESERVED_IDENTIFIER_FIXUP_3075 = _RESERVED_IDENTIFIER_FIXUP_3066 + _RESERVED_IDENTIFIER_FIXUP_3069;
                _RESERVED_IDENTIFIER_FIXUP_3989.y = _RESERVED_IDENTIFIER_FIXUP_3075;
                _RESERVED_IDENTIFIER_FIXUP_3989.x = _RESERVED_IDENTIFIER_FIXUP_3075 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4298 = _RESERVED_IDENTIFIER_FIXUP_3055;
                _RESERVED_IDENTIFIER_FIXUP_4292 = _RESERVED_IDENTIFIER_FIXUP_3989;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3903 = _RESERVED_IDENTIFIER_FIXUP_3857;
                _RESERVED_IDENTIFIER_FIXUP_3903.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3903.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3091 = (_RESERVED_IDENTIFIER_FIXUP_3903.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3908;
                _RESERVED_IDENTIFIER_FIXUP_3908.x = _RESERVED_IDENTIFIER_FIXUP_3091.x;
                _RESERVED_IDENTIFIER_FIXUP_3908.y = _RESERVED_IDENTIFIER_FIXUP_3091.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3101 = _RESERVED_IDENTIFIER_FIXUP_3908.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3912;
                _RESERVED_IDENTIFIER_FIXUP_3912.x = _RESERVED_IDENTIFIER_FIXUP_3101.x;
                _RESERVED_IDENTIFIER_FIXUP_3912.y = _RESERVED_IDENTIFIER_FIXUP_3101.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3111 = _RESERVED_IDENTIFIER_FIXUP_3908.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3916;
                _RESERVED_IDENTIFIER_FIXUP_3916.x = _RESERVED_IDENTIFIER_FIXUP_3111.x;
                _RESERVED_IDENTIFIER_FIXUP_3916.y = _RESERVED_IDENTIFIER_FIXUP_3111.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3121 = _RESERVED_IDENTIFIER_FIXUP_3908.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3920;
                _RESERVED_IDENTIFIER_FIXUP_3920.x = _RESERVED_IDENTIFIER_FIXUP_3121.x;
                _RESERVED_IDENTIFIER_FIXUP_3920.y = _RESERVED_IDENTIFIER_FIXUP_3121.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3131 = _RESERVED_IDENTIFIER_FIXUP_3908.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3924;
                _RESERVED_IDENTIFIER_FIXUP_3924.x = _RESERVED_IDENTIFIER_FIXUP_3131.x;
                _RESERVED_IDENTIFIER_FIXUP_3924.y = _RESERVED_IDENTIFIER_FIXUP_3131.y;
                _RESERVED_IDENTIFIER_FIXUP_3908.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3908.xy;
                float param_97 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3145 = hdLod8(param_96, param_97);
                _RESERVED_IDENTIFIER_FIXUP_3912.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3916.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3920.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3924.w = 0.0;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3912.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3145.y = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3916.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3145.z = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3920.xy;
                float param_103 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3145.w = hdLod8(param_102, param_103).x;
                vec2 param_104 = _RESERVED_IDENTIFIER_FIXUP_3924.xy;
                float param_105 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3208 = hdLod8(param_104, param_105).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3964 = _RESERVED_IDENTIFIER_FIXUP_3899;
                _RESERVED_IDENTIFIER_FIXUP_3964.y = _RESERVED_IDENTIFIER_FIXUP_3208;
                float _RESERVED_IDENTIFIER_FIXUP_3213 = float(_RESERVED_IDENTIFIER_FIXUP_3208 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3964.y = _RESERVED_IDENTIFIER_FIXUP_3213;
                float _RESERVED_IDENTIFIER_FIXUP_3216 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_3145 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3964.z = _RESERVED_IDENTIFIER_FIXUP_3216;
                float _RESERVED_IDENTIFIER_FIXUP_3222 = _RESERVED_IDENTIFIER_FIXUP_3213 + _RESERVED_IDENTIFIER_FIXUP_3216;
                _RESERVED_IDENTIFIER_FIXUP_3964.y = _RESERVED_IDENTIFIER_FIXUP_3222;
                float _RESERVED_IDENTIFIER_FIXUP_3230 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3964.z = _RESERVED_IDENTIFIER_FIXUP_3230;
                float _RESERVED_IDENTIFIER_FIXUP_3236 = clamp((_RESERVED_IDENTIFIER_FIXUP_3230 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3964.z = _RESERVED_IDENTIFIER_FIXUP_3236;
                float _RESERVED_IDENTIFIER_FIXUP_3241 = (_RESERVED_IDENTIFIER_FIXUP_3222 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3964.y = _RESERVED_IDENTIFIER_FIXUP_3241;
                _RESERVED_IDENTIFIER_FIXUP_3964.x = (_RESERVED_IDENTIFIER_FIXUP_3236 * _RESERVED_IDENTIFIER_FIXUP_3241) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4298 = _RESERVED_IDENTIFIER_FIXUP_3903;
                _RESERVED_IDENTIFIER_FIXUP_4292 = _RESERVED_IDENTIFIER_FIXUP_3964;
            }
            _RESERVED_IDENTIFIER_FIXUP_4297 = _RESERVED_IDENTIFIER_FIXUP_4298;
            _RESERVED_IDENTIFIER_FIXUP_4291 = _RESERVED_IDENTIFIER_FIXUP_4292;
        }
        _RESERVED_IDENTIFIER_FIXUP_4296 = _RESERVED_IDENTIFIER_FIXUP_4297;
        _RESERVED_IDENTIFIER_FIXUP_4290 = _RESERVED_IDENTIFIER_FIXUP_4291;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3256 = (_RESERVED_IDENTIFIER_FIXUP_4290.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4239 = _RESERVED_IDENTIFIER_FIXUP_4290;
    _RESERVED_IDENTIFIER_FIXUP_4239.y = _RESERVED_IDENTIFIER_FIXUP_3256;
    _RESERVED_IDENTIFIER_FIXUP_4239.y = _RESERVED_IDENTIFIER_FIXUP_3256;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3269 = _RESERVED_IDENTIFIER_FIXUP_2501.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4245 = _RESERVED_IDENTIFIER_FIXUP_4296;
    _RESERVED_IDENTIFIER_FIXUP_4245.x = _RESERVED_IDENTIFIER_FIXUP_3269.x;
    _RESERVED_IDENTIFIER_FIXUP_4245.y = _RESERVED_IDENTIFIER_FIXUP_3269.y;
    _RESERVED_IDENTIFIER_FIXUP_4245.z = _RESERVED_IDENTIFIER_FIXUP_3269.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3280 = _RESERVED_IDENTIFIER_FIXUP_4239.xxx * _RESERVED_IDENTIFIER_FIXUP_4245.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4304 = vec4(_RESERVED_IDENTIFIER_FIXUP_3280.x, _RESERVED_IDENTIFIER_FIXUP_3256, _RESERVED_IDENTIFIER_FIXUP_3280.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3294 = (_RESERVED_IDENTIFIER_FIXUP_2501.xyz * _RESERVED_IDENTIFIER_FIXUP_4304.yyy) + _RESERVED_IDENTIFIER_FIXUP_4304.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4257 = _RESERVED_IDENTIFIER_FIXUP_2501;
    _RESERVED_IDENTIFIER_FIXUP_4257.x = _RESERVED_IDENTIFIER_FIXUP_3294.x;
    _RESERVED_IDENTIFIER_FIXUP_4257.y = _RESERVED_IDENTIFIER_FIXUP_3294.y;
    _RESERVED_IDENTIFIER_FIXUP_4257.z = _RESERVED_IDENTIFIER_FIXUP_3294.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3307 = _RESERVED_IDENTIFIER_FIXUP_4257.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4263 = _RESERVED_IDENTIFIER_FIXUP_4257;
    _RESERVED_IDENTIFIER_FIXUP_4263.x = _RESERVED_IDENTIFIER_FIXUP_3307.x;
    _RESERVED_IDENTIFIER_FIXUP_4263.y = _RESERVED_IDENTIFIER_FIXUP_3307.y;
    _RESERVED_IDENTIFIER_FIXUP_4263.z = _RESERVED_IDENTIFIER_FIXUP_3307.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4263.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1160 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1169;
    if (_RESERVED_IDENTIFIER_FIXUP_1160)
    {
        _RESERVED_IDENTIFIER_FIXUP_1169 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1169 = _RESERVED_IDENTIFIER_FIXUP_1160;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1169)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1206 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3807.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1232 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3360;
    if (_RESERVED_IDENTIFIER_FIXUP_1206 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3360 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1206), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1232);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3360 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1232);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3360;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3256);
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
    vec2 param_4 = v4.wz;
    r4 = hdTex4(param_4);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 hdB102 = v0.xyz + v0.xyz;
    r6.x = hdB102.x;
    r6.y = hdB102.y;
    r6.z = hdB102.z;
    vec3 hdB117 = r0.xyz * r6.xyz;
    r7.x = hdB117.x;
    r7.y = hdB117.y;
    r7.z = hdB117.z;
    vec4 hdB126 = r0;
    vec3 hdB135 = mix(r7.xyz, hdB126.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB135.x;
    r0.y = hdB135.y;
    r0.z = hdB135.z;
    vec3 hdB146 = r1.xyz * r6.xyz;
    r7.x = hdB146.x;
    r7.y = hdB146.y;
    r7.z = hdB146.z;
    vec4 hdB155 = r1;
    vec3 hdB161 = mix(r7.xyz, hdB155.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB161.x;
    r1.y = hdB161.y;
    r1.z = hdB161.z;
    vec3 hdB172 = r2.xyz * r6.xyz;
    r7.x = hdB172.x;
    r7.y = hdB172.y;
    r7.z = hdB172.z;
    vec4 hdB181 = r2;
    vec3 hdB187 = mix(r7.xyz, hdB181.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB187.x;
    r2.y = hdB187.y;
    r2.z = hdB187.z;
    vec3 hdB198 = r3.xyz * r6.xyz;
    r5.x = hdB198.x;
    r5.y = hdB198.y;
    r5.z = hdB198.z;
    vec4 hdB207 = r3;
    vec3 hdB213 = mix(r5.xyz, hdB207.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB213.x;
    r3.y = hdB213.y;
    r3.z = hdB213.z;
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
        vec2 hdB290 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB290.x;
        r1.y = hdB290.y;
        vec2 hdB301 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB301.x;
        r2.y = hdB301.y;
        vec2 hdB312 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB312.x;
        r3.y = hdB312.y;
        vec2 hdB323 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB323.x;
        r4.y = hdB323.y;
        vec2 hdB334 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB334.x;
        r5.y = hdB334.y;
        vec2 hdB345 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB345.x;
        r6.y = hdB345.y;
        vec2 hdB356 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB356.x;
        r7.y = hdB356.y;
        vec2 hdB367 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB367.x;
        r8.y = hdB367.y;
        vec4 hdB372 = r1;
        vec2 hdB378 = hdB372.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB378.x;
        r1.y = hdB378.y;
        r9 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r9.xy;
        float param_6 = r9.w;
        r9 = hdLod5(param_5, param_6);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_11 = r4.xy;
        float param_12 = r4.w;
        r4 = hdLod5(param_11, param_12);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_13 = r5.xy;
        float param_14 = r5.w;
        r5 = hdLod5(param_13, param_14);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_15 = r6.xy;
        float param_16 = r6.w;
        r6 = hdLod5(param_15, param_16);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_17 = r7.xy;
        float param_18 = r7.w;
        r7 = hdLod5(param_17, param_18);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_19 = r8.xy;
        float param_20 = r8.w;
        r8 = hdLod5(param_19, param_20);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_21 = r1.xy;
        float param_22 = r1.w;
        r1 = hdLod5(param_21, param_22);
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
            vec2 hdB564 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB564.x;
            r1.z = hdB564.y;
            vec2 hdB574 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB574.x;
            r2.y = hdB574.y;
            vec2 hdB584 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB584.x;
            r3.y = hdB584.y;
            vec2 hdB594 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB594.x;
            r4.y = hdB594.y;
            vec2 hdB604 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB604.x;
            r5.y = hdB604.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r6.xy;
            float param_24 = r6.w;
            r6 = hdLod6(param_23, param_24);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod6(param_27, param_28);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_29 = r4.xy;
            float param_30 = r4.w;
            r4 = hdLod6(param_29, param_30);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_31 = r5.xy;
            float param_32 = r5.w;
            r5 = hdLod6(param_31, param_32);
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
                vec2 hdB720 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB720.x;
                r1.z = hdB720.y;
                vec2 hdB730 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB730.x;
                r2.y = hdB730.y;
                vec2 hdB740 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB740.x;
                r3.y = hdB740.y;
                vec2 hdB750 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB750.x;
                r4.y = hdB750.y;
                vec2 hdB760 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB760.x;
                r5.y = hdB760.y;
                r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_33 = r6.xy;
                float param_34 = r6.w;
                r6 = hdLod7(param_33, param_34);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_37 = r3.xy;
                float param_38 = r3.w;
                r3 = hdLod7(param_37, param_38);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_39 = r4.xy;
                float param_40 = r4.w;
                r4 = hdLod7(param_39, param_40);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_41 = r5.xy;
                float param_42 = r5.w;
                r5 = hdLod7(param_41, param_42);
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
                vec2 hdB868 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB868.x;
                r3.y = hdB868.y;
                vec2 hdB878 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB878.x;
                r4.y = hdB878.y;
                vec2 hdB888 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB888.x;
                r5.y = hdB888.y;
                vec2 hdB898 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB898.x;
                r6.y = hdB898.y;
                vec2 hdB908 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB908.x;
                r7.y = hdB908.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_43 = r3.xy;
                float param_44 = r3.w;
                r3 = hdLod8(param_43, param_44);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r4 = hdLod8(param_45, param_46);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_47 = r5.xy;
                float param_48 = r5.w;
                r5 = hdLod8(param_47, param_48);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_49 = r6.xy;
                float param_50 = r6.w;
                r6 = hdLod8(param_49, param_50);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_51 = r7.xy;
                float param_52 = r7.w;
                r7 = hdLod8(param_51, param_52);
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
    vec3 hdB1042 = r0.www * v1.xyz;
    r2.x = hdB1042.x;
    r2.y = hdB1042.y;
    r2.z = hdB1042.z;
    vec4 hdB1049 = r1;
    vec3 hdB1053 = hdB1049.xxx * r2.xyz;
    r1.x = hdB1053.x;
    r1.z = hdB1053.y;
    r1.w = hdB1053.z;
    vec4 hdB1060 = r0;
    vec3 hdB1067 = (hdB1060.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB1067.x;
    r0.y = hdB1067.y;
    r0.z = hdB1067.z;
    vec4 hdB1074 = r0;
    vec3 hdB1081 = hdB1074.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1081.x;
    r0.y = hdB1081.y;
    r0.z = hdB1081.z;
    vec3 hdB1096 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1096.x;
    oC0.y = hdB1096.y;
    oC0.z = hdB1096.z;
    oC0.w = 1.0;
    bool hdB1108 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1116;
    if (hdB1108)
    {
        hdB1116 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1116 = hdB1108;
    }
    if (hdB1116)
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
    bool _3877 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3887;
    if (_3877)
    {
        _3887 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3887 = _3877;
    }
    if (_3887)
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
        bool _3912 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3927;
        if (!_3912)
        {
            _3927 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3927 = _3912;
        }
        if (_3927)
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
