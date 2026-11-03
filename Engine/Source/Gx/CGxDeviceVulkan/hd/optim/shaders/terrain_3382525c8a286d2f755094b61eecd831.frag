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
float _RESERVED_IDENTIFIER_FIXUP_4215;
vec4 _RESERVED_IDENTIFIER_FIXUP_4216;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1286 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1290 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1294 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1298 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1302 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1305 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1307 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4215).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1310 = _RESERVED_IDENTIFIER_FIXUP_1307 + _RESERVED_IDENTIFIER_FIXUP_1307;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3316 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3316.x = _RESERVED_IDENTIFIER_FIXUP_1310.x;
    _RESERVED_IDENTIFIER_FIXUP_3316.y = _RESERVED_IDENTIFIER_FIXUP_1310.y;
    _RESERVED_IDENTIFIER_FIXUP_3316.z = _RESERVED_IDENTIFIER_FIXUP_1310.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1318 = _RESERVED_IDENTIFIER_FIXUP_1286.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1321 = _RESERVED_IDENTIFIER_FIXUP_1318 * _RESERVED_IDENTIFIER_FIXUP_3316.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3322 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3322.x = _RESERVED_IDENTIFIER_FIXUP_1321.x;
    _RESERVED_IDENTIFIER_FIXUP_3322.y = _RESERVED_IDENTIFIER_FIXUP_1321.y;
    _RESERVED_IDENTIFIER_FIXUP_3322.z = _RESERVED_IDENTIFIER_FIXUP_1321.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1335 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1305.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1336 = mix(_RESERVED_IDENTIFIER_FIXUP_3322.xyz, _RESERVED_IDENTIFIER_FIXUP_1318, _RESERVED_IDENTIFIER_FIXUP_1335);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3328 = _RESERVED_IDENTIFIER_FIXUP_1286;
    _RESERVED_IDENTIFIER_FIXUP_3328.x = _RESERVED_IDENTIFIER_FIXUP_1336.x;
    _RESERVED_IDENTIFIER_FIXUP_3328.y = _RESERVED_IDENTIFIER_FIXUP_1336.y;
    _RESERVED_IDENTIFIER_FIXUP_3328.z = _RESERVED_IDENTIFIER_FIXUP_1336.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1290.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1344 * _RESERVED_IDENTIFIER_FIXUP_3316.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3322.x = _RESERVED_IDENTIFIER_FIXUP_1347.x;
    _RESERVED_IDENTIFIER_FIXUP_3322.y = _RESERVED_IDENTIFIER_FIXUP_1347.y;
    _RESERVED_IDENTIFIER_FIXUP_3322.z = _RESERVED_IDENTIFIER_FIXUP_1347.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1361 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1305.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1362 = mix(_RESERVED_IDENTIFIER_FIXUP_3322.xyz, _RESERVED_IDENTIFIER_FIXUP_1344, _RESERVED_IDENTIFIER_FIXUP_1361);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3340 = _RESERVED_IDENTIFIER_FIXUP_1290;
    _RESERVED_IDENTIFIER_FIXUP_3340.x = _RESERVED_IDENTIFIER_FIXUP_1362.x;
    _RESERVED_IDENTIFIER_FIXUP_3340.y = _RESERVED_IDENTIFIER_FIXUP_1362.y;
    _RESERVED_IDENTIFIER_FIXUP_3340.z = _RESERVED_IDENTIFIER_FIXUP_1362.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1370 = _RESERVED_IDENTIFIER_FIXUP_1294.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1373 = _RESERVED_IDENTIFIER_FIXUP_1370 * _RESERVED_IDENTIFIER_FIXUP_3316.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3322.x = _RESERVED_IDENTIFIER_FIXUP_1373.x;
    _RESERVED_IDENTIFIER_FIXUP_3322.y = _RESERVED_IDENTIFIER_FIXUP_1373.y;
    _RESERVED_IDENTIFIER_FIXUP_3322.z = _RESERVED_IDENTIFIER_FIXUP_1373.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1387 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1305.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1388 = mix(_RESERVED_IDENTIFIER_FIXUP_3322.xyz, _RESERVED_IDENTIFIER_FIXUP_1370, _RESERVED_IDENTIFIER_FIXUP_1387);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3352 = _RESERVED_IDENTIFIER_FIXUP_1294;
    _RESERVED_IDENTIFIER_FIXUP_3352.x = _RESERVED_IDENTIFIER_FIXUP_1388.x;
    _RESERVED_IDENTIFIER_FIXUP_3352.y = _RESERVED_IDENTIFIER_FIXUP_1388.y;
    _RESERVED_IDENTIFIER_FIXUP_3352.z = _RESERVED_IDENTIFIER_FIXUP_1388.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1396 = _RESERVED_IDENTIFIER_FIXUP_1298.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_1396 * _RESERVED_IDENTIFIER_FIXUP_3316.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_1305;
    _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_1399.x;
    _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_1399.y;
    _RESERVED_IDENTIFIER_FIXUP_3358.z = _RESERVED_IDENTIFIER_FIXUP_1399.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1414 = mix(_RESERVED_IDENTIFIER_FIXUP_3358.xyz, _RESERVED_IDENTIFIER_FIXUP_1396, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3358.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3364 = _RESERVED_IDENTIFIER_FIXUP_1298;
    _RESERVED_IDENTIFIER_FIXUP_3364.x = _RESERVED_IDENTIFIER_FIXUP_1414.x;
    _RESERVED_IDENTIFIER_FIXUP_3364.y = _RESERVED_IDENTIFIER_FIXUP_1414.y;
    _RESERVED_IDENTIFIER_FIXUP_3364.z = _RESERVED_IDENTIFIER_FIXUP_1414.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1430 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3328, _RESERVED_IDENTIFIER_FIXUP_3340, _RESERVED_IDENTIFIER_FIXUP_1302.xxxx), _RESERVED_IDENTIFIER_FIXUP_3352, _RESERVED_IDENTIFIER_FIXUP_1302.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1442 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_1430;
    _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_1442;
    float _RESERVED_IDENTIFIER_FIXUP_1448 = clamp((_RESERVED_IDENTIFIER_FIXUP_1442 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_1448;
    float _RESERVED_IDENTIFIER_FIXUP_1454 = ((-_RESERVED_IDENTIFIER_FIXUP_1448) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_1454;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4220;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4217;
    if (_RESERVED_IDENTIFIER_FIXUP_1454 != (-_RESERVED_IDENTIFIER_FIXUP_1454))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1466 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3611;
        _RESERVED_IDENTIFIER_FIXUP_3611.x = _RESERVED_IDENTIFIER_FIXUP_1466.x;
        _RESERVED_IDENTIFIER_FIXUP_3611.y = _RESERVED_IDENTIFIER_FIXUP_1466.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1476 = _RESERVED_IDENTIFIER_FIXUP_3611.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3615;
        _RESERVED_IDENTIFIER_FIXUP_3615.x = _RESERVED_IDENTIFIER_FIXUP_1476.x;
        _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_1476.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1486 = _RESERVED_IDENTIFIER_FIXUP_3611.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3619;
        _RESERVED_IDENTIFIER_FIXUP_3619.x = _RESERVED_IDENTIFIER_FIXUP_1486.x;
        _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_1486.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_3611.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3623;
        _RESERVED_IDENTIFIER_FIXUP_3623.x = _RESERVED_IDENTIFIER_FIXUP_1496.x;
        _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_1496.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_3611.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3627;
        _RESERVED_IDENTIFIER_FIXUP_3627.x = _RESERVED_IDENTIFIER_FIXUP_1506.x;
        _RESERVED_IDENTIFIER_FIXUP_3627.y = _RESERVED_IDENTIFIER_FIXUP_1506.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_3611.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3631;
        _RESERVED_IDENTIFIER_FIXUP_3631.x = _RESERVED_IDENTIFIER_FIXUP_1516.x;
        _RESERVED_IDENTIFIER_FIXUP_3631.y = _RESERVED_IDENTIFIER_FIXUP_1516.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_3611.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3635;
        _RESERVED_IDENTIFIER_FIXUP_3635.x = _RESERVED_IDENTIFIER_FIXUP_1526.x;
        _RESERVED_IDENTIFIER_FIXUP_3635.y = _RESERVED_IDENTIFIER_FIXUP_1526.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1536 = _RESERVED_IDENTIFIER_FIXUP_3611.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3639;
        _RESERVED_IDENTIFIER_FIXUP_3639.x = _RESERVED_IDENTIFIER_FIXUP_1536.x;
        _RESERVED_IDENTIFIER_FIXUP_3639.y = _RESERVED_IDENTIFIER_FIXUP_1536.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_3611.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3643;
        _RESERVED_IDENTIFIER_FIXUP_3643.x = _RESERVED_IDENTIFIER_FIXUP_1546.x;
        _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_1546.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1554 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1554.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1554.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1560 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3615.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3619.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3623.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3627.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3627.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1600 = hdLod5(param_7, param_8);
        _RESERVED_IDENTIFIER_FIXUP_3631.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3635.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3639.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3643.w = 0.0;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3643.xy;
        float param_10 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1640 = hdLod5(param_9, param_10);
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3615.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1560.y = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3619.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1560.z = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3623.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1560.w = hdLod5(param_15, param_16).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1657 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1560 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3631.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1600.y = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3635.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1600.z = hdLod5(param_19, param_20).x;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3639.xy;
        float param_22 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1600.w = hdLod5(param_21, param_22).x;
        float _RESERVED_IDENTIFIER_FIXUP_1680 = _RESERVED_IDENTIFIER_FIXUP_1640.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3708 = _RESERVED_IDENTIFIER_FIXUP_1640;
        _RESERVED_IDENTIFIER_FIXUP_3708.x = _RESERVED_IDENTIFIER_FIXUP_1680;
        float _RESERVED_IDENTIFIER_FIXUP_1685 = float(_RESERVED_IDENTIFIER_FIXUP_1680 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3708.x = _RESERVED_IDENTIFIER_FIXUP_1685;
        float _RESERVED_IDENTIFIER_FIXUP_1688 = dot(_RESERVED_IDENTIFIER_FIXUP_1657, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3708.y = _RESERVED_IDENTIFIER_FIXUP_1688;
        float _RESERVED_IDENTIFIER_FIXUP_1691 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1600 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3708.z = _RESERVED_IDENTIFIER_FIXUP_1691;
        float _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_1688 + _RESERVED_IDENTIFIER_FIXUP_1691;
        _RESERVED_IDENTIFIER_FIXUP_3708.y = _RESERVED_IDENTIFIER_FIXUP_1697;
        float _RESERVED_IDENTIFIER_FIXUP_1703 = _RESERVED_IDENTIFIER_FIXUP_1685 + _RESERVED_IDENTIFIER_FIXUP_1697;
        _RESERVED_IDENTIFIER_FIXUP_3708.x = _RESERVED_IDENTIFIER_FIXUP_1703;
        _RESERVED_IDENTIFIER_FIXUP_3708.x = _RESERVED_IDENTIFIER_FIXUP_1703 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4220 = _RESERVED_IDENTIFIER_FIXUP_1657;
        _RESERVED_IDENTIFIER_FIXUP_4217 = _RESERVED_IDENTIFIER_FIXUP_3708;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1716 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3372.y = _RESERVED_IDENTIFIER_FIXUP_1716;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4221;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4218;
        if (_RESERVED_IDENTIFIER_FIXUP_1716 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1725 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3545 = _RESERVED_IDENTIFIER_FIXUP_3372;
            _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_1725.x;
            _RESERVED_IDENTIFIER_FIXUP_3545.z = _RESERVED_IDENTIFIER_FIXUP_1725.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1735 = _RESERVED_IDENTIFIER_FIXUP_3545.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3549;
            _RESERVED_IDENTIFIER_FIXUP_3549.x = _RESERVED_IDENTIFIER_FIXUP_1735.x;
            _RESERVED_IDENTIFIER_FIXUP_3549.y = _RESERVED_IDENTIFIER_FIXUP_1735.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1745 = _RESERVED_IDENTIFIER_FIXUP_3545.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3553;
            _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_1745.x;
            _RESERVED_IDENTIFIER_FIXUP_3553.y = _RESERVED_IDENTIFIER_FIXUP_1745.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1755 = _RESERVED_IDENTIFIER_FIXUP_3545.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3557;
            _RESERVED_IDENTIFIER_FIXUP_3557.x = _RESERVED_IDENTIFIER_FIXUP_1755.x;
            _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_1755.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1765 = _RESERVED_IDENTIFIER_FIXUP_3545.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3561;
            _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_1765.x;
            _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_1765.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1773 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1773.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1773.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1779 = hdLod6(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_3549.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3553.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3557.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3561.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3549.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1779.y = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3553.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1779.z = hdLod6(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3557.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1779.w = hdLod6(param_29, param_30).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1836 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1779 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3561.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1842 = hdLod6(param_31, param_32).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_1842;
            float _RESERVED_IDENTIFIER_FIXUP_1847 = float(_RESERVED_IDENTIFIER_FIXUP_1842 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_1847;
            float _RESERVED_IDENTIFIER_FIXUP_1850 = dot(_RESERVED_IDENTIFIER_FIXUP_1836, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3545.z = _RESERVED_IDENTIFIER_FIXUP_1850;
            float _RESERVED_IDENTIFIER_FIXUP_1856 = _RESERVED_IDENTIFIER_FIXUP_1847 + _RESERVED_IDENTIFIER_FIXUP_1850;
            _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_1856;
            _RESERVED_IDENTIFIER_FIXUP_3545.x = _RESERVED_IDENTIFIER_FIXUP_1856 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4221 = _RESERVED_IDENTIFIER_FIXUP_1836;
            _RESERVED_IDENTIFIER_FIXUP_4218 = _RESERVED_IDENTIFIER_FIXUP_3545;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1869 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3389 = _RESERVED_IDENTIFIER_FIXUP_3372;
            _RESERVED_IDENTIFIER_FIXUP_3389.y = _RESERVED_IDENTIFIER_FIXUP_1869;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4222;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4219;
            if (_RESERVED_IDENTIFIER_FIXUP_1869 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1878 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3479 = _RESERVED_IDENTIFIER_FIXUP_3389;
                _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_1878.x;
                _RESERVED_IDENTIFIER_FIXUP_3479.z = _RESERVED_IDENTIFIER_FIXUP_1878.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1888 = _RESERVED_IDENTIFIER_FIXUP_3479.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3483;
                _RESERVED_IDENTIFIER_FIXUP_3483.x = _RESERVED_IDENTIFIER_FIXUP_1888.x;
                _RESERVED_IDENTIFIER_FIXUP_3483.y = _RESERVED_IDENTIFIER_FIXUP_1888.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1898 = _RESERVED_IDENTIFIER_FIXUP_3479.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3487;
                _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_1898.x;
                _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_1898.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1908 = _RESERVED_IDENTIFIER_FIXUP_3479.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3491;
                _RESERVED_IDENTIFIER_FIXUP_3491.x = _RESERVED_IDENTIFIER_FIXUP_1908.x;
                _RESERVED_IDENTIFIER_FIXUP_3491.y = _RESERVED_IDENTIFIER_FIXUP_1908.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1918 = _RESERVED_IDENTIFIER_FIXUP_3479.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3495;
                _RESERVED_IDENTIFIER_FIXUP_3495.x = _RESERVED_IDENTIFIER_FIXUP_1918.x;
                _RESERVED_IDENTIFIER_FIXUP_3495.y = _RESERVED_IDENTIFIER_FIXUP_1918.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1926 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1926.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1926.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1932 = hdLod7(param_33, param_34);
                _RESERVED_IDENTIFIER_FIXUP_3483.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3487.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3491.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3495.w = 0.0;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3483.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1932.y = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3487.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1932.z = hdLod7(param_37, param_38).x;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3491.xy;
                float param_40 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1932.w = hdLod7(param_39, param_40).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1989 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1932 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3495.xy;
                float param_42 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1995 = hdLod7(param_41, param_42).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_1995;
                float _RESERVED_IDENTIFIER_FIXUP_2000 = float(_RESERVED_IDENTIFIER_FIXUP_1995 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2000;
                float _RESERVED_IDENTIFIER_FIXUP_2003 = dot(_RESERVED_IDENTIFIER_FIXUP_1989, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3479.z = _RESERVED_IDENTIFIER_FIXUP_2003;
                float _RESERVED_IDENTIFIER_FIXUP_2009 = _RESERVED_IDENTIFIER_FIXUP_2000 + _RESERVED_IDENTIFIER_FIXUP_2003;
                _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2009;
                _RESERVED_IDENTIFIER_FIXUP_3479.x = _RESERVED_IDENTIFIER_FIXUP_2009 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4222 = _RESERVED_IDENTIFIER_FIXUP_1989;
                _RESERVED_IDENTIFIER_FIXUP_4219 = _RESERVED_IDENTIFIER_FIXUP_3479;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3393 = _RESERVED_IDENTIFIER_FIXUP_3352;
                _RESERVED_IDENTIFIER_FIXUP_3393.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3393.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2025 = (_RESERVED_IDENTIFIER_FIXUP_3393.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3398;
                _RESERVED_IDENTIFIER_FIXUP_3398.x = _RESERVED_IDENTIFIER_FIXUP_2025.x;
                _RESERVED_IDENTIFIER_FIXUP_3398.y = _RESERVED_IDENTIFIER_FIXUP_2025.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2035 = _RESERVED_IDENTIFIER_FIXUP_3398.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3402;
                _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_2035.x;
                _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2035.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2045 = _RESERVED_IDENTIFIER_FIXUP_3398.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3406;
                _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_2045.x;
                _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_2045.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2055 = _RESERVED_IDENTIFIER_FIXUP_3398.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3410;
                _RESERVED_IDENTIFIER_FIXUP_3410.x = _RESERVED_IDENTIFIER_FIXUP_2055.x;
                _RESERVED_IDENTIFIER_FIXUP_3410.y = _RESERVED_IDENTIFIER_FIXUP_2055.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2065 = _RESERVED_IDENTIFIER_FIXUP_3398.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3414;
                _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_2065.x;
                _RESERVED_IDENTIFIER_FIXUP_3414.y = _RESERVED_IDENTIFIER_FIXUP_2065.y;
                _RESERVED_IDENTIFIER_FIXUP_3398.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3398.xy;
                float param_44 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2079 = hdLod8(param_43, param_44);
                _RESERVED_IDENTIFIER_FIXUP_3402.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3406.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3410.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3414.w = 0.0;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3402.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2079.y = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3406.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2079.z = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3410.xy;
                float param_50 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2079.w = hdLod8(param_49, param_50).x;
                vec2 param_51 = _RESERVED_IDENTIFIER_FIXUP_3414.xy;
                float param_52 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2142 = hdLod8(param_51, param_52).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3454 = _RESERVED_IDENTIFIER_FIXUP_3389;
                _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_2142;
                float _RESERVED_IDENTIFIER_FIXUP_2147 = float(_RESERVED_IDENTIFIER_FIXUP_2142 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_2147;
                float _RESERVED_IDENTIFIER_FIXUP_2150 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2079 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3454.z = _RESERVED_IDENTIFIER_FIXUP_2150;
                float _RESERVED_IDENTIFIER_FIXUP_2156 = _RESERVED_IDENTIFIER_FIXUP_2147 + _RESERVED_IDENTIFIER_FIXUP_2150;
                _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_2156;
                float _RESERVED_IDENTIFIER_FIXUP_2164 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3454.z = _RESERVED_IDENTIFIER_FIXUP_2164;
                float _RESERVED_IDENTIFIER_FIXUP_2170 = clamp((_RESERVED_IDENTIFIER_FIXUP_2164 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3454.z = _RESERVED_IDENTIFIER_FIXUP_2170;
                float _RESERVED_IDENTIFIER_FIXUP_2175 = (_RESERVED_IDENTIFIER_FIXUP_2156 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_2175;
                _RESERVED_IDENTIFIER_FIXUP_3454.x = (_RESERVED_IDENTIFIER_FIXUP_2170 * _RESERVED_IDENTIFIER_FIXUP_2175) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4222 = _RESERVED_IDENTIFIER_FIXUP_3393;
                _RESERVED_IDENTIFIER_FIXUP_4219 = _RESERVED_IDENTIFIER_FIXUP_3454;
            }
            _RESERVED_IDENTIFIER_FIXUP_4221 = _RESERVED_IDENTIFIER_FIXUP_4222;
            _RESERVED_IDENTIFIER_FIXUP_4218 = _RESERVED_IDENTIFIER_FIXUP_4219;
        }
        _RESERVED_IDENTIFIER_FIXUP_4220 = _RESERVED_IDENTIFIER_FIXUP_4221;
        _RESERVED_IDENTIFIER_FIXUP_4217 = _RESERVED_IDENTIFIER_FIXUP_4218;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3731 = _RESERVED_IDENTIFIER_FIXUP_4217;
    _RESERVED_IDENTIFIER_FIXUP_3731.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3733 = _RESERVED_IDENTIFIER_FIXUP_4220;
    _RESERVED_IDENTIFIER_FIXUP_3733.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3733.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3733.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2214 = _RESERVED_IDENTIFIER_FIXUP_3731.xxx * _RESERVED_IDENTIFIER_FIXUP_3733.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4235 = vec4(_RESERVED_IDENTIFIER_FIXUP_2214.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2214.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2228 = (mix(_RESERVED_IDENTIFIER_FIXUP_1430, _RESERVED_IDENTIFIER_FIXUP_3364, _RESERVED_IDENTIFIER_FIXUP_1302.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_4235.yyy) + _RESERVED_IDENTIFIER_FIXUP_4235.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_4235;
    _RESERVED_IDENTIFIER_FIXUP_3745.x = _RESERVED_IDENTIFIER_FIXUP_2228.x;
    _RESERVED_IDENTIFIER_FIXUP_3745.y = _RESERVED_IDENTIFIER_FIXUP_2228.y;
    _RESERVED_IDENTIFIER_FIXUP_3745.z = _RESERVED_IDENTIFIER_FIXUP_2228.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2241 = _RESERVED_IDENTIFIER_FIXUP_3745.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3751 = _RESERVED_IDENTIFIER_FIXUP_3745;
    _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2241.x;
    _RESERVED_IDENTIFIER_FIXUP_3751.y = _RESERVED_IDENTIFIER_FIXUP_2241.y;
    _RESERVED_IDENTIFIER_FIXUP_3751.z = _RESERVED_IDENTIFIER_FIXUP_2241.z;
    vec2 param_53 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2300 = hdTex0(param_53);
    vec2 param_54 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2304 = hdTex1(param_54);
    vec2 param_55 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2308 = hdTex2(param_55);
    vec2 param_56 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2312 = hdTex3(param_56);
    vec2 param_57 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2316 = hdTex4(param_57);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2324 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3765 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3765.x = _RESERVED_IDENTIFIER_FIXUP_2324.x;
    _RESERVED_IDENTIFIER_FIXUP_3765.y = _RESERVED_IDENTIFIER_FIXUP_2324.y;
    _RESERVED_IDENTIFIER_FIXUP_3765.z = _RESERVED_IDENTIFIER_FIXUP_2324.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2332 = _RESERVED_IDENTIFIER_FIXUP_2300.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2335 = _RESERVED_IDENTIFIER_FIXUP_2332 * _RESERVED_IDENTIFIER_FIXUP_3765.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3771 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3771.x = _RESERVED_IDENTIFIER_FIXUP_2335.x;
    _RESERVED_IDENTIFIER_FIXUP_3771.y = _RESERVED_IDENTIFIER_FIXUP_2335.y;
    _RESERVED_IDENTIFIER_FIXUP_3771.z = _RESERVED_IDENTIFIER_FIXUP_2335.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2350 = mix(_RESERVED_IDENTIFIER_FIXUP_3771.xyz, _RESERVED_IDENTIFIER_FIXUP_2332, _RESERVED_IDENTIFIER_FIXUP_1335);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3777 = _RESERVED_IDENTIFIER_FIXUP_2300;
    _RESERVED_IDENTIFIER_FIXUP_3777.x = _RESERVED_IDENTIFIER_FIXUP_2350.x;
    _RESERVED_IDENTIFIER_FIXUP_3777.y = _RESERVED_IDENTIFIER_FIXUP_2350.y;
    _RESERVED_IDENTIFIER_FIXUP_3777.z = _RESERVED_IDENTIFIER_FIXUP_2350.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2358 = _RESERVED_IDENTIFIER_FIXUP_2304.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2361 = _RESERVED_IDENTIFIER_FIXUP_2358 * _RESERVED_IDENTIFIER_FIXUP_3765.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3771.x = _RESERVED_IDENTIFIER_FIXUP_2361.x;
    _RESERVED_IDENTIFIER_FIXUP_3771.y = _RESERVED_IDENTIFIER_FIXUP_2361.y;
    _RESERVED_IDENTIFIER_FIXUP_3771.z = _RESERVED_IDENTIFIER_FIXUP_2361.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2376 = mix(_RESERVED_IDENTIFIER_FIXUP_3771.xyz, _RESERVED_IDENTIFIER_FIXUP_2358, _RESERVED_IDENTIFIER_FIXUP_1361);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_2304;
    _RESERVED_IDENTIFIER_FIXUP_3789.x = _RESERVED_IDENTIFIER_FIXUP_2376.x;
    _RESERVED_IDENTIFIER_FIXUP_3789.y = _RESERVED_IDENTIFIER_FIXUP_2376.y;
    _RESERVED_IDENTIFIER_FIXUP_3789.z = _RESERVED_IDENTIFIER_FIXUP_2376.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2384 = _RESERVED_IDENTIFIER_FIXUP_2308.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2387 = _RESERVED_IDENTIFIER_FIXUP_2384 * _RESERVED_IDENTIFIER_FIXUP_3765.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3771.x = _RESERVED_IDENTIFIER_FIXUP_2387.x;
    _RESERVED_IDENTIFIER_FIXUP_3771.y = _RESERVED_IDENTIFIER_FIXUP_2387.y;
    _RESERVED_IDENTIFIER_FIXUP_3771.z = _RESERVED_IDENTIFIER_FIXUP_2387.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2402 = mix(_RESERVED_IDENTIFIER_FIXUP_3771.xyz, _RESERVED_IDENTIFIER_FIXUP_2384, _RESERVED_IDENTIFIER_FIXUP_1387);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3801 = _RESERVED_IDENTIFIER_FIXUP_2308;
    _RESERVED_IDENTIFIER_FIXUP_3801.x = _RESERVED_IDENTIFIER_FIXUP_2402.x;
    _RESERVED_IDENTIFIER_FIXUP_3801.y = _RESERVED_IDENTIFIER_FIXUP_2402.y;
    _RESERVED_IDENTIFIER_FIXUP_3801.z = _RESERVED_IDENTIFIER_FIXUP_2402.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2410 = _RESERVED_IDENTIFIER_FIXUP_2312.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2413 = _RESERVED_IDENTIFIER_FIXUP_2410 * _RESERVED_IDENTIFIER_FIXUP_3765.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3807 = _RESERVED_IDENTIFIER_FIXUP_1305;
    _RESERVED_IDENTIFIER_FIXUP_3807.x = _RESERVED_IDENTIFIER_FIXUP_2413.x;
    _RESERVED_IDENTIFIER_FIXUP_3807.y = _RESERVED_IDENTIFIER_FIXUP_2413.y;
    _RESERVED_IDENTIFIER_FIXUP_3807.z = _RESERVED_IDENTIFIER_FIXUP_2413.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2428 = mix(_RESERVED_IDENTIFIER_FIXUP_3807.xyz, _RESERVED_IDENTIFIER_FIXUP_2410, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3807.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3813 = _RESERVED_IDENTIFIER_FIXUP_2312;
    _RESERVED_IDENTIFIER_FIXUP_3813.x = _RESERVED_IDENTIFIER_FIXUP_2428.x;
    _RESERVED_IDENTIFIER_FIXUP_3813.y = _RESERVED_IDENTIFIER_FIXUP_2428.y;
    _RESERVED_IDENTIFIER_FIXUP_3813.z = _RESERVED_IDENTIFIER_FIXUP_2428.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2444 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3777, _RESERVED_IDENTIFIER_FIXUP_3789, _RESERVED_IDENTIFIER_FIXUP_2316.xxxx), _RESERVED_IDENTIFIER_FIXUP_3801, _RESERVED_IDENTIFIER_FIXUP_2316.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2449 = mix(_RESERVED_IDENTIFIER_FIXUP_2444, _RESERVED_IDENTIFIER_FIXUP_3813, _RESERVED_IDENTIFIER_FIXUP_2316.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3821 = _RESERVED_IDENTIFIER_FIXUP_2444;
    _RESERVED_IDENTIFIER_FIXUP_3821.x = _RESERVED_IDENTIFIER_FIXUP_1442;
    float _RESERVED_IDENTIFIER_FIXUP_2462 = clamp((_RESERVED_IDENTIFIER_FIXUP_1442 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3821.x = _RESERVED_IDENTIFIER_FIXUP_2462;
    float _RESERVED_IDENTIFIER_FIXUP_2468 = ((-_RESERVED_IDENTIFIER_FIXUP_2462) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3821.x = _RESERVED_IDENTIFIER_FIXUP_2468;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4229;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4226;
    if (_RESERVED_IDENTIFIER_FIXUP_2468 != (-_RESERVED_IDENTIFIER_FIXUP_2468))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2480 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_4060;
        _RESERVED_IDENTIFIER_FIXUP_4060.x = _RESERVED_IDENTIFIER_FIXUP_2480.x;
        _RESERVED_IDENTIFIER_FIXUP_4060.y = _RESERVED_IDENTIFIER_FIXUP_2480.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2490 = _RESERVED_IDENTIFIER_FIXUP_4060.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4064;
        _RESERVED_IDENTIFIER_FIXUP_4064.x = _RESERVED_IDENTIFIER_FIXUP_2490.x;
        _RESERVED_IDENTIFIER_FIXUP_4064.y = _RESERVED_IDENTIFIER_FIXUP_2490.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2500 = _RESERVED_IDENTIFIER_FIXUP_4060.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4068;
        _RESERVED_IDENTIFIER_FIXUP_4068.x = _RESERVED_IDENTIFIER_FIXUP_2500.x;
        _RESERVED_IDENTIFIER_FIXUP_4068.y = _RESERVED_IDENTIFIER_FIXUP_2500.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2510 = _RESERVED_IDENTIFIER_FIXUP_4060.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4072;
        _RESERVED_IDENTIFIER_FIXUP_4072.x = _RESERVED_IDENTIFIER_FIXUP_2510.x;
        _RESERVED_IDENTIFIER_FIXUP_4072.y = _RESERVED_IDENTIFIER_FIXUP_2510.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2520 = _RESERVED_IDENTIFIER_FIXUP_4060.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4076;
        _RESERVED_IDENTIFIER_FIXUP_4076.x = _RESERVED_IDENTIFIER_FIXUP_2520.x;
        _RESERVED_IDENTIFIER_FIXUP_4076.y = _RESERVED_IDENTIFIER_FIXUP_2520.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2530 = _RESERVED_IDENTIFIER_FIXUP_4060.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4080;
        _RESERVED_IDENTIFIER_FIXUP_4080.x = _RESERVED_IDENTIFIER_FIXUP_2530.x;
        _RESERVED_IDENTIFIER_FIXUP_4080.y = _RESERVED_IDENTIFIER_FIXUP_2530.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2540 = _RESERVED_IDENTIFIER_FIXUP_4060.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4084;
        _RESERVED_IDENTIFIER_FIXUP_4084.x = _RESERVED_IDENTIFIER_FIXUP_2540.x;
        _RESERVED_IDENTIFIER_FIXUP_4084.y = _RESERVED_IDENTIFIER_FIXUP_2540.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2550 = _RESERVED_IDENTIFIER_FIXUP_4060.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4088;
        _RESERVED_IDENTIFIER_FIXUP_4088.x = _RESERVED_IDENTIFIER_FIXUP_2550.x;
        _RESERVED_IDENTIFIER_FIXUP_4088.y = _RESERVED_IDENTIFIER_FIXUP_2550.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2560 = _RESERVED_IDENTIFIER_FIXUP_4060.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4092;
        _RESERVED_IDENTIFIER_FIXUP_4092.x = _RESERVED_IDENTIFIER_FIXUP_2560.x;
        _RESERVED_IDENTIFIER_FIXUP_4092.y = _RESERVED_IDENTIFIER_FIXUP_2560.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2568 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2568.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2568.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2574 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_4064.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4068.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4072.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4076.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_4076.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2614 = hdLod5(param_60, param_61);
        _RESERVED_IDENTIFIER_FIXUP_4080.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4084.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4088.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4092.w = 0.0;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_4092.xy;
        float param_63 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2654 = hdLod5(param_62, param_63);
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_4064.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2574.y = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_4068.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2574.z = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_4072.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2574.w = hdLod5(param_68, param_69).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2671 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2574 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4080.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2614.y = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_4084.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2614.z = hdLod5(param_72, param_73).x;
        vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_4088.xy;
        float param_75 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2614.w = hdLod5(param_74, param_75).x;
        float _RESERVED_IDENTIFIER_FIXUP_2694 = _RESERVED_IDENTIFIER_FIXUP_2654.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4157 = _RESERVED_IDENTIFIER_FIXUP_2654;
        _RESERVED_IDENTIFIER_FIXUP_4157.x = _RESERVED_IDENTIFIER_FIXUP_2694;
        float _RESERVED_IDENTIFIER_FIXUP_2699 = float(_RESERVED_IDENTIFIER_FIXUP_2694 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_4157.x = _RESERVED_IDENTIFIER_FIXUP_2699;
        float _RESERVED_IDENTIFIER_FIXUP_2702 = dot(_RESERVED_IDENTIFIER_FIXUP_2671, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4157.y = _RESERVED_IDENTIFIER_FIXUP_2702;
        float _RESERVED_IDENTIFIER_FIXUP_2705 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2614 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4157.z = _RESERVED_IDENTIFIER_FIXUP_2705;
        float _RESERVED_IDENTIFIER_FIXUP_2711 = _RESERVED_IDENTIFIER_FIXUP_2702 + _RESERVED_IDENTIFIER_FIXUP_2705;
        _RESERVED_IDENTIFIER_FIXUP_4157.y = _RESERVED_IDENTIFIER_FIXUP_2711;
        float _RESERVED_IDENTIFIER_FIXUP_2717 = _RESERVED_IDENTIFIER_FIXUP_2699 + _RESERVED_IDENTIFIER_FIXUP_2711;
        _RESERVED_IDENTIFIER_FIXUP_4157.x = _RESERVED_IDENTIFIER_FIXUP_2717;
        _RESERVED_IDENTIFIER_FIXUP_4157.x = _RESERVED_IDENTIFIER_FIXUP_2717 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4229 = _RESERVED_IDENTIFIER_FIXUP_2671;
        _RESERVED_IDENTIFIER_FIXUP_4226 = _RESERVED_IDENTIFIER_FIXUP_4157;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2730 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3821.y = _RESERVED_IDENTIFIER_FIXUP_2730;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4230;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4227;
        if (_RESERVED_IDENTIFIER_FIXUP_2730 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2739 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3994 = _RESERVED_IDENTIFIER_FIXUP_3821;
            _RESERVED_IDENTIFIER_FIXUP_3994.y = _RESERVED_IDENTIFIER_FIXUP_2739.x;
            _RESERVED_IDENTIFIER_FIXUP_3994.z = _RESERVED_IDENTIFIER_FIXUP_2739.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2749 = _RESERVED_IDENTIFIER_FIXUP_3994.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3998;
            _RESERVED_IDENTIFIER_FIXUP_3998.x = _RESERVED_IDENTIFIER_FIXUP_2749.x;
            _RESERVED_IDENTIFIER_FIXUP_3998.y = _RESERVED_IDENTIFIER_FIXUP_2749.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2759 = _RESERVED_IDENTIFIER_FIXUP_3994.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4002;
            _RESERVED_IDENTIFIER_FIXUP_4002.x = _RESERVED_IDENTIFIER_FIXUP_2759.x;
            _RESERVED_IDENTIFIER_FIXUP_4002.y = _RESERVED_IDENTIFIER_FIXUP_2759.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2769 = _RESERVED_IDENTIFIER_FIXUP_3994.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4006;
            _RESERVED_IDENTIFIER_FIXUP_4006.x = _RESERVED_IDENTIFIER_FIXUP_2769.x;
            _RESERVED_IDENTIFIER_FIXUP_4006.y = _RESERVED_IDENTIFIER_FIXUP_2769.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2779 = _RESERVED_IDENTIFIER_FIXUP_3994.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4010;
            _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_2779.x;
            _RESERVED_IDENTIFIER_FIXUP_4010.y = _RESERVED_IDENTIFIER_FIXUP_2779.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2787 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2787.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2787.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2793 = hdLod6(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3998.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4002.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4006.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_4010.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3998.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2793.y = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_4002.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2793.z = hdLod6(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_4006.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2793.w = hdLod6(param_82, param_83).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2850 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2793 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_4010.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2856 = hdLod6(param_84, param_85).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3994.y = _RESERVED_IDENTIFIER_FIXUP_2856;
            float _RESERVED_IDENTIFIER_FIXUP_2861 = float(_RESERVED_IDENTIFIER_FIXUP_2856 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3994.y = _RESERVED_IDENTIFIER_FIXUP_2861;
            float _RESERVED_IDENTIFIER_FIXUP_2864 = dot(_RESERVED_IDENTIFIER_FIXUP_2850, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3994.z = _RESERVED_IDENTIFIER_FIXUP_2864;
            float _RESERVED_IDENTIFIER_FIXUP_2870 = _RESERVED_IDENTIFIER_FIXUP_2861 + _RESERVED_IDENTIFIER_FIXUP_2864;
            _RESERVED_IDENTIFIER_FIXUP_3994.y = _RESERVED_IDENTIFIER_FIXUP_2870;
            _RESERVED_IDENTIFIER_FIXUP_3994.x = _RESERVED_IDENTIFIER_FIXUP_2870 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4230 = _RESERVED_IDENTIFIER_FIXUP_2850;
            _RESERVED_IDENTIFIER_FIXUP_4227 = _RESERVED_IDENTIFIER_FIXUP_3994;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2883 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3838 = _RESERVED_IDENTIFIER_FIXUP_3821;
            _RESERVED_IDENTIFIER_FIXUP_3838.y = _RESERVED_IDENTIFIER_FIXUP_2883;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4231;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4228;
            if (_RESERVED_IDENTIFIER_FIXUP_2883 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2892 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3928 = _RESERVED_IDENTIFIER_FIXUP_3838;
                _RESERVED_IDENTIFIER_FIXUP_3928.y = _RESERVED_IDENTIFIER_FIXUP_2892.x;
                _RESERVED_IDENTIFIER_FIXUP_3928.z = _RESERVED_IDENTIFIER_FIXUP_2892.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2902 = _RESERVED_IDENTIFIER_FIXUP_3928.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3932;
                _RESERVED_IDENTIFIER_FIXUP_3932.x = _RESERVED_IDENTIFIER_FIXUP_2902.x;
                _RESERVED_IDENTIFIER_FIXUP_3932.y = _RESERVED_IDENTIFIER_FIXUP_2902.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2912 = _RESERVED_IDENTIFIER_FIXUP_3928.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3936;
                _RESERVED_IDENTIFIER_FIXUP_3936.x = _RESERVED_IDENTIFIER_FIXUP_2912.x;
                _RESERVED_IDENTIFIER_FIXUP_3936.y = _RESERVED_IDENTIFIER_FIXUP_2912.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2922 = _RESERVED_IDENTIFIER_FIXUP_3928.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3940;
                _RESERVED_IDENTIFIER_FIXUP_3940.x = _RESERVED_IDENTIFIER_FIXUP_2922.x;
                _RESERVED_IDENTIFIER_FIXUP_3940.y = _RESERVED_IDENTIFIER_FIXUP_2922.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2932 = _RESERVED_IDENTIFIER_FIXUP_3928.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3944;
                _RESERVED_IDENTIFIER_FIXUP_3944.x = _RESERVED_IDENTIFIER_FIXUP_2932.x;
                _RESERVED_IDENTIFIER_FIXUP_3944.y = _RESERVED_IDENTIFIER_FIXUP_2932.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2940 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_2940.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2940.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2946 = hdLod7(param_86, param_87);
                _RESERVED_IDENTIFIER_FIXUP_3932.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3936.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3940.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3944.w = 0.0;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3932.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2946.y = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3936.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2946.z = hdLod7(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3940.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2946.w = hdLod7(param_92, param_93).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3003 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2946 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3944.xy;
                float param_95 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3009 = hdLod7(param_94, param_95).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3928.y = _RESERVED_IDENTIFIER_FIXUP_3009;
                float _RESERVED_IDENTIFIER_FIXUP_3014 = float(_RESERVED_IDENTIFIER_FIXUP_3009 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3928.y = _RESERVED_IDENTIFIER_FIXUP_3014;
                float _RESERVED_IDENTIFIER_FIXUP_3017 = dot(_RESERVED_IDENTIFIER_FIXUP_3003, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3928.z = _RESERVED_IDENTIFIER_FIXUP_3017;
                float _RESERVED_IDENTIFIER_FIXUP_3023 = _RESERVED_IDENTIFIER_FIXUP_3014 + _RESERVED_IDENTIFIER_FIXUP_3017;
                _RESERVED_IDENTIFIER_FIXUP_3928.y = _RESERVED_IDENTIFIER_FIXUP_3023;
                _RESERVED_IDENTIFIER_FIXUP_3928.x = _RESERVED_IDENTIFIER_FIXUP_3023 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4231 = _RESERVED_IDENTIFIER_FIXUP_3003;
                _RESERVED_IDENTIFIER_FIXUP_4228 = _RESERVED_IDENTIFIER_FIXUP_3928;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3842 = _RESERVED_IDENTIFIER_FIXUP_3801;
                _RESERVED_IDENTIFIER_FIXUP_3842.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3842.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3039 = (_RESERVED_IDENTIFIER_FIXUP_3842.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3847;
                _RESERVED_IDENTIFIER_FIXUP_3847.x = _RESERVED_IDENTIFIER_FIXUP_3039.x;
                _RESERVED_IDENTIFIER_FIXUP_3847.y = _RESERVED_IDENTIFIER_FIXUP_3039.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3049 = _RESERVED_IDENTIFIER_FIXUP_3847.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3851;
                _RESERVED_IDENTIFIER_FIXUP_3851.x = _RESERVED_IDENTIFIER_FIXUP_3049.x;
                _RESERVED_IDENTIFIER_FIXUP_3851.y = _RESERVED_IDENTIFIER_FIXUP_3049.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3059 = _RESERVED_IDENTIFIER_FIXUP_3847.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3855;
                _RESERVED_IDENTIFIER_FIXUP_3855.x = _RESERVED_IDENTIFIER_FIXUP_3059.x;
                _RESERVED_IDENTIFIER_FIXUP_3855.y = _RESERVED_IDENTIFIER_FIXUP_3059.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3069 = _RESERVED_IDENTIFIER_FIXUP_3847.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3859;
                _RESERVED_IDENTIFIER_FIXUP_3859.x = _RESERVED_IDENTIFIER_FIXUP_3069.x;
                _RESERVED_IDENTIFIER_FIXUP_3859.y = _RESERVED_IDENTIFIER_FIXUP_3069.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3079 = _RESERVED_IDENTIFIER_FIXUP_3847.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3863;
                _RESERVED_IDENTIFIER_FIXUP_3863.x = _RESERVED_IDENTIFIER_FIXUP_3079.x;
                _RESERVED_IDENTIFIER_FIXUP_3863.y = _RESERVED_IDENTIFIER_FIXUP_3079.y;
                _RESERVED_IDENTIFIER_FIXUP_3847.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3847.xy;
                float param_97 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3093 = hdLod8(param_96, param_97);
                _RESERVED_IDENTIFIER_FIXUP_3851.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3855.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3859.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3863.w = 0.0;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3851.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3093.y = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3855.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3093.z = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3859.xy;
                float param_103 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3093.w = hdLod8(param_102, param_103).x;
                vec2 param_104 = _RESERVED_IDENTIFIER_FIXUP_3863.xy;
                float param_105 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3156 = hdLod8(param_104, param_105).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3903 = _RESERVED_IDENTIFIER_FIXUP_3838;
                _RESERVED_IDENTIFIER_FIXUP_3903.y = _RESERVED_IDENTIFIER_FIXUP_3156;
                float _RESERVED_IDENTIFIER_FIXUP_3161 = float(_RESERVED_IDENTIFIER_FIXUP_3156 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3903.y = _RESERVED_IDENTIFIER_FIXUP_3161;
                float _RESERVED_IDENTIFIER_FIXUP_3164 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_3093 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3903.z = _RESERVED_IDENTIFIER_FIXUP_3164;
                float _RESERVED_IDENTIFIER_FIXUP_3170 = _RESERVED_IDENTIFIER_FIXUP_3161 + _RESERVED_IDENTIFIER_FIXUP_3164;
                _RESERVED_IDENTIFIER_FIXUP_3903.y = _RESERVED_IDENTIFIER_FIXUP_3170;
                float _RESERVED_IDENTIFIER_FIXUP_3178 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3903.z = _RESERVED_IDENTIFIER_FIXUP_3178;
                float _RESERVED_IDENTIFIER_FIXUP_3184 = clamp((_RESERVED_IDENTIFIER_FIXUP_3178 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3903.z = _RESERVED_IDENTIFIER_FIXUP_3184;
                float _RESERVED_IDENTIFIER_FIXUP_3189 = (_RESERVED_IDENTIFIER_FIXUP_3170 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3903.y = _RESERVED_IDENTIFIER_FIXUP_3189;
                _RESERVED_IDENTIFIER_FIXUP_3903.x = (_RESERVED_IDENTIFIER_FIXUP_3184 * _RESERVED_IDENTIFIER_FIXUP_3189) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4231 = _RESERVED_IDENTIFIER_FIXUP_3842;
                _RESERVED_IDENTIFIER_FIXUP_4228 = _RESERVED_IDENTIFIER_FIXUP_3903;
            }
            _RESERVED_IDENTIFIER_FIXUP_4230 = _RESERVED_IDENTIFIER_FIXUP_4231;
            _RESERVED_IDENTIFIER_FIXUP_4227 = _RESERVED_IDENTIFIER_FIXUP_4228;
        }
        _RESERVED_IDENTIFIER_FIXUP_4229 = _RESERVED_IDENTIFIER_FIXUP_4230;
        _RESERVED_IDENTIFIER_FIXUP_4226 = _RESERVED_IDENTIFIER_FIXUP_4227;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3204 = (_RESERVED_IDENTIFIER_FIXUP_4226.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4178 = _RESERVED_IDENTIFIER_FIXUP_4226;
    _RESERVED_IDENTIFIER_FIXUP_4178.y = _RESERVED_IDENTIFIER_FIXUP_3204;
    _RESERVED_IDENTIFIER_FIXUP_4178.y = _RESERVED_IDENTIFIER_FIXUP_3204;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3217 = _RESERVED_IDENTIFIER_FIXUP_2449.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4184 = _RESERVED_IDENTIFIER_FIXUP_4229;
    _RESERVED_IDENTIFIER_FIXUP_4184.x = _RESERVED_IDENTIFIER_FIXUP_3217.x;
    _RESERVED_IDENTIFIER_FIXUP_4184.y = _RESERVED_IDENTIFIER_FIXUP_3217.y;
    _RESERVED_IDENTIFIER_FIXUP_4184.z = _RESERVED_IDENTIFIER_FIXUP_3217.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3228 = _RESERVED_IDENTIFIER_FIXUP_4178.xxx * _RESERVED_IDENTIFIER_FIXUP_4184.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4237 = vec4(_RESERVED_IDENTIFIER_FIXUP_3228.x, _RESERVED_IDENTIFIER_FIXUP_3204, _RESERVED_IDENTIFIER_FIXUP_3228.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3242 = (_RESERVED_IDENTIFIER_FIXUP_2449.xyz * _RESERVED_IDENTIFIER_FIXUP_4237.yyy) + _RESERVED_IDENTIFIER_FIXUP_4237.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4196 = _RESERVED_IDENTIFIER_FIXUP_4237;
    _RESERVED_IDENTIFIER_FIXUP_4196.x = _RESERVED_IDENTIFIER_FIXUP_3242.x;
    _RESERVED_IDENTIFIER_FIXUP_4196.y = _RESERVED_IDENTIFIER_FIXUP_3242.y;
    _RESERVED_IDENTIFIER_FIXUP_4196.z = _RESERVED_IDENTIFIER_FIXUP_3242.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3255 = _RESERVED_IDENTIFIER_FIXUP_4196.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4202 = _RESERVED_IDENTIFIER_FIXUP_4196;
    _RESERVED_IDENTIFIER_FIXUP_4202.x = _RESERVED_IDENTIFIER_FIXUP_3255.x;
    _RESERVED_IDENTIFIER_FIXUP_4202.y = _RESERVED_IDENTIFIER_FIXUP_3255.y;
    _RESERVED_IDENTIFIER_FIXUP_4202.z = _RESERVED_IDENTIFIER_FIXUP_3255.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4202.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1142 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1151;
    if (_RESERVED_IDENTIFIER_FIXUP_1142)
    {
        _RESERVED_IDENTIFIER_FIXUP_1151 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_1142;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1151)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1188 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3751.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1214 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3308;
    if (_RESERVED_IDENTIFIER_FIXUP_1188 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3308 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1188), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1214);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3308 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1214);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3308;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3204);
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
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        vec2 hdB271 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.x = hdB271.x;
        r0.y = hdB271.y;
        vec2 hdB282 = r0.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB282.x;
        r2.y = hdB282.y;
        vec2 hdB293 = r0.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB293.x;
        r3.y = hdB293.y;
        vec2 hdB304 = r0.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB304.x;
        r4.y = hdB304.y;
        vec2 hdB315 = r0.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB315.x;
        r5.y = hdB315.y;
        vec2 hdB326 = r0.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB326.x;
        r6.y = hdB326.y;
        vec2 hdB337 = r0.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB337.x;
        r7.y = hdB337.y;
        vec2 hdB348 = r0.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB348.x;
        r8.y = hdB348.y;
        vec4 hdB353 = r0;
        vec2 hdB359 = hdB353.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r0.x = hdB359.x;
        r0.y = hdB359.y;
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
        r0.z = 0.0;
        r0.w = 0.0;
        vec2 param_21 = r0.xy;
        float param_22 = r0.w;
        r0 = hdLod5(param_21, param_22);
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
            vec2 hdB546 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB546.x;
            r0.z = hdB546.y;
            vec2 hdB556 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB556.x;
            r2.y = hdB556.y;
            vec2 hdB566 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB566.x;
            r3.y = hdB566.y;
            vec2 hdB576 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB576.x;
            r4.y = hdB576.y;
            vec2 hdB586 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB586.x;
            r5.y = hdB586.y;
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
                vec2 hdB702 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB702.x;
                r0.z = hdB702.y;
                vec2 hdB712 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB712.x;
                r2.y = hdB712.y;
                vec2 hdB722 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB722.x;
                r3.y = hdB722.y;
                vec2 hdB732 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB732.x;
                r4.y = hdB732.y;
                vec2 hdB742 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB742.x;
                r5.y = hdB742.y;
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
                vec2 hdB850 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB850.x;
                r3.y = hdB850.y;
                vec2 hdB860 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB860.x;
                r4.y = hdB860.y;
                vec2 hdB870 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB870.x;
                r5.y = hdB870.y;
                vec2 hdB880 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB880.x;
                r6.y = hdB880.y;
                vec2 hdB890 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB890.x;
                r7.y = hdB890.y;
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
    vec3 hdB1024 = r1.www * v1.xyz;
    r2.x = hdB1024.x;
    r2.y = hdB1024.y;
    r2.z = hdB1024.z;
    vec4 hdB1031 = r0;
    vec3 hdB1035 = hdB1031.xxx * r2.xyz;
    r0.x = hdB1035.x;
    r0.z = hdB1035.y;
    r0.w = hdB1035.z;
    vec4 hdB1044 = r0;
    vec4 hdB1047 = r0;
    vec3 hdB1049 = (r1.xyz * hdB1044.yyy) + hdB1047.xzw;
    r0.x = hdB1049.x;
    r0.y = hdB1049.y;
    r0.z = hdB1049.z;
    vec4 hdB1056 = r0;
    vec3 hdB1063 = hdB1056.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1063.x;
    r0.y = hdB1063.y;
    r0.z = hdB1063.z;
    vec3 hdB1078 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1078.x;
    oC0.y = hdB1078.y;
    oC0.z = hdB1078.z;
    oC0.w = 1.0;
    bool hdB1090 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1098;
    if (hdB1090)
    {
        hdB1098 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1098 = hdB1090;
    }
    if (hdB1098)
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
    bool _3823 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3833;
    if (_3823)
    {
        _3833 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3833 = _3823;
    }
    if (_3833)
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
        bool _3858 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3873;
        if (!_3858)
        {
            _3873 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3873 = _3858;
        }
        if (_3873)
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
