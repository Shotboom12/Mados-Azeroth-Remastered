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
float _RESERVED_IDENTIFIER_FIXUP_4156;
vec4 _RESERVED_IDENTIFIER_FIXUP_4157;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1284 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1288 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1292 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1296 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1300 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1305 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4156).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1308 = _RESERVED_IDENTIFIER_FIXUP_1305 + _RESERVED_IDENTIFIER_FIXUP_1305;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3313;
    _RESERVED_IDENTIFIER_FIXUP_3313.x = _RESERVED_IDENTIFIER_FIXUP_1308.x;
    _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_1308.y;
    _RESERVED_IDENTIFIER_FIXUP_3313.z = _RESERVED_IDENTIFIER_FIXUP_1308.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_1284.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_1316 * _RESERVED_IDENTIFIER_FIXUP_3313.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3319;
    _RESERVED_IDENTIFIER_FIXUP_3319.x = _RESERVED_IDENTIFIER_FIXUP_1319.x;
    _RESERVED_IDENTIFIER_FIXUP_3319.y = _RESERVED_IDENTIFIER_FIXUP_1319.y;
    _RESERVED_IDENTIFIER_FIXUP_3319.z = _RESERVED_IDENTIFIER_FIXUP_1319.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1333 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1303.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1334 = mix(_RESERVED_IDENTIFIER_FIXUP_3319.xyz, _RESERVED_IDENTIFIER_FIXUP_1316, _RESERVED_IDENTIFIER_FIXUP_1333);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3325 = _RESERVED_IDENTIFIER_FIXUP_1284;
    _RESERVED_IDENTIFIER_FIXUP_3325.x = _RESERVED_IDENTIFIER_FIXUP_1334.x;
    _RESERVED_IDENTIFIER_FIXUP_3325.y = _RESERVED_IDENTIFIER_FIXUP_1334.y;
    _RESERVED_IDENTIFIER_FIXUP_3325.z = _RESERVED_IDENTIFIER_FIXUP_1334.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_1288.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_1342 * _RESERVED_IDENTIFIER_FIXUP_3313.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3331;
    _RESERVED_IDENTIFIER_FIXUP_3331.x = _RESERVED_IDENTIFIER_FIXUP_1345.x;
    _RESERVED_IDENTIFIER_FIXUP_3331.y = _RESERVED_IDENTIFIER_FIXUP_1345.y;
    _RESERVED_IDENTIFIER_FIXUP_3331.z = _RESERVED_IDENTIFIER_FIXUP_1345.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1359 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1303.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1360 = mix(_RESERVED_IDENTIFIER_FIXUP_3331.xyz, _RESERVED_IDENTIFIER_FIXUP_1342, _RESERVED_IDENTIFIER_FIXUP_1359);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3337 = _RESERVED_IDENTIFIER_FIXUP_1288;
    _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_1360.x;
    _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_1360.y;
    _RESERVED_IDENTIFIER_FIXUP_3337.z = _RESERVED_IDENTIFIER_FIXUP_1360.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1368 = _RESERVED_IDENTIFIER_FIXUP_1292.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1371 = _RESERVED_IDENTIFIER_FIXUP_1368 * _RESERVED_IDENTIFIER_FIXUP_3313.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3343;
    _RESERVED_IDENTIFIER_FIXUP_3343.x = _RESERVED_IDENTIFIER_FIXUP_1371.x;
    _RESERVED_IDENTIFIER_FIXUP_3343.y = _RESERVED_IDENTIFIER_FIXUP_1371.y;
    _RESERVED_IDENTIFIER_FIXUP_3343.z = _RESERVED_IDENTIFIER_FIXUP_1371.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1385 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1303.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1386 = mix(_RESERVED_IDENTIFIER_FIXUP_3343.xyz, _RESERVED_IDENTIFIER_FIXUP_1368, _RESERVED_IDENTIFIER_FIXUP_1385);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3349 = _RESERVED_IDENTIFIER_FIXUP_1292;
    _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_1386.x;
    _RESERVED_IDENTIFIER_FIXUP_3349.y = _RESERVED_IDENTIFIER_FIXUP_1386.y;
    _RESERVED_IDENTIFIER_FIXUP_3349.z = _RESERVED_IDENTIFIER_FIXUP_1386.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1394 = _RESERVED_IDENTIFIER_FIXUP_1296.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1397 = _RESERVED_IDENTIFIER_FIXUP_1394 * _RESERVED_IDENTIFIER_FIXUP_3313.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_3355.x = _RESERVED_IDENTIFIER_FIXUP_1397.x;
    _RESERVED_IDENTIFIER_FIXUP_3355.y = _RESERVED_IDENTIFIER_FIXUP_1397.y;
    _RESERVED_IDENTIFIER_FIXUP_3355.z = _RESERVED_IDENTIFIER_FIXUP_1397.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1412 = mix(_RESERVED_IDENTIFIER_FIXUP_3355.xyz, _RESERVED_IDENTIFIER_FIXUP_1394, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3355.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3361 = _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_1412.x;
    _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_1412.y;
    _RESERVED_IDENTIFIER_FIXUP_3361.z = _RESERVED_IDENTIFIER_FIXUP_1412.z;
    float _RESERVED_IDENTIFIER_FIXUP_1422 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1300.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3367 = _RESERVED_IDENTIFIER_FIXUP_1300;
    _RESERVED_IDENTIFIER_FIXUP_3367.w = _RESERVED_IDENTIFIER_FIXUP_1422;
    float _RESERVED_IDENTIFIER_FIXUP_1427 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1422;
    _RESERVED_IDENTIFIER_FIXUP_3367.w = _RESERVED_IDENTIFIER_FIXUP_1427;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_3367.xxxx * _RESERVED_IDENTIFIER_FIXUP_3337;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450 = (_RESERVED_IDENTIFIER_FIXUP_3361 * _RESERVED_IDENTIFIER_FIXUP_3367.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3349 * _RESERVED_IDENTIFIER_FIXUP_3367.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3325 * _RESERVED_IDENTIFIER_FIXUP_3367.wwww) + _RESERVED_IDENTIFIER_FIXUP_1432));
    float _RESERVED_IDENTIFIER_FIXUP_1457 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_1432;
    _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_1457;
    float _RESERVED_IDENTIFIER_FIXUP_1463 = clamp((_RESERVED_IDENTIFIER_FIXUP_1457 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_1463;
    float _RESERVED_IDENTIFIER_FIXUP_1469 = ((-_RESERVED_IDENTIFIER_FIXUP_1463) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_1469;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4161;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4158;
    if (_RESERVED_IDENTIFIER_FIXUP_1469 != (-_RESERVED_IDENTIFIER_FIXUP_1469))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1481 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1481.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1481.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1487 = hdLod5(param_5, param_6);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1491 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3586 = _RESERVED_IDENTIFIER_FIXUP_1487;
        _RESERVED_IDENTIFIER_FIXUP_3586.y = _RESERVED_IDENTIFIER_FIXUP_1491.x;
        _RESERVED_IDENTIFIER_FIXUP_3586.z = _RESERVED_IDENTIFIER_FIXUP_1491.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1501 = _RESERVED_IDENTIFIER_FIXUP_3586.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3590;
        _RESERVED_IDENTIFIER_FIXUP_3590.x = _RESERVED_IDENTIFIER_FIXUP_1501.x;
        _RESERVED_IDENTIFIER_FIXUP_3590.y = _RESERVED_IDENTIFIER_FIXUP_1501.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1508 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1512 = _RESERVED_IDENTIFIER_FIXUP_1508.y;
        _RESERVED_IDENTIFIER_FIXUP_3590.w = _RESERVED_IDENTIFIER_FIXUP_1512;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3590.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1512;
        float _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_1487.x + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_1523;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_3586.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3603;
        _RESERVED_IDENTIFIER_FIXUP_3603.x = _RESERVED_IDENTIFIER_FIXUP_1530.x;
        _RESERVED_IDENTIFIER_FIXUP_3603.y = _RESERVED_IDENTIFIER_FIXUP_1530.y;
        _RESERVED_IDENTIFIER_FIXUP_3603.w = _RESERVED_IDENTIFIER_FIXUP_1512;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3603.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1512;
        float _RESERVED_IDENTIFIER_FIXUP_1552 = _RESERVED_IDENTIFIER_FIXUP_1523 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_1552;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1559 = _RESERVED_IDENTIFIER_FIXUP_3586.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3616;
        _RESERVED_IDENTIFIER_FIXUP_3616.x = _RESERVED_IDENTIFIER_FIXUP_1559.x;
        _RESERVED_IDENTIFIER_FIXUP_3616.y = _RESERVED_IDENTIFIER_FIXUP_1559.y;
        _RESERVED_IDENTIFIER_FIXUP_3616.w = _RESERVED_IDENTIFIER_FIXUP_1512;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3616.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1512;
        float _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_1552 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_1581;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1588 = _RESERVED_IDENTIFIER_FIXUP_3586.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3629;
        _RESERVED_IDENTIFIER_FIXUP_3629.x = _RESERVED_IDENTIFIER_FIXUP_1588.x;
        _RESERVED_IDENTIFIER_FIXUP_3629.y = _RESERVED_IDENTIFIER_FIXUP_1588.y;
        _RESERVED_IDENTIFIER_FIXUP_3629.w = _RESERVED_IDENTIFIER_FIXUP_1512;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3629.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1512;
        float _RESERVED_IDENTIFIER_FIXUP_1610 = _RESERVED_IDENTIFIER_FIXUP_1581 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_1610;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1617 = _RESERVED_IDENTIFIER_FIXUP_3586.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3642;
        _RESERVED_IDENTIFIER_FIXUP_3642.x = _RESERVED_IDENTIFIER_FIXUP_1617.x;
        _RESERVED_IDENTIFIER_FIXUP_3642.y = _RESERVED_IDENTIFIER_FIXUP_1617.y;
        _RESERVED_IDENTIFIER_FIXUP_3642.w = _RESERVED_IDENTIFIER_FIXUP_1512;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3642.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1512;
        float _RESERVED_IDENTIFIER_FIXUP_1639 = _RESERVED_IDENTIFIER_FIXUP_1610 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_1639;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1646 = _RESERVED_IDENTIFIER_FIXUP_3586.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3655;
        _RESERVED_IDENTIFIER_FIXUP_3655.x = _RESERVED_IDENTIFIER_FIXUP_1646.x;
        _RESERVED_IDENTIFIER_FIXUP_3655.y = _RESERVED_IDENTIFIER_FIXUP_1646.y;
        _RESERVED_IDENTIFIER_FIXUP_3655.w = _RESERVED_IDENTIFIER_FIXUP_1512;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3655.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1512;
        float _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_1639 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_1668;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1675 = _RESERVED_IDENTIFIER_FIXUP_3586.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3668;
        _RESERVED_IDENTIFIER_FIXUP_3668.x = _RESERVED_IDENTIFIER_FIXUP_1675.x;
        _RESERVED_IDENTIFIER_FIXUP_3668.y = _RESERVED_IDENTIFIER_FIXUP_1675.y;
        _RESERVED_IDENTIFIER_FIXUP_3668.w = _RESERVED_IDENTIFIER_FIXUP_1512;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3668.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1512;
        float _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_1668 + hdLod5(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_1697;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_3586.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
        _RESERVED_IDENTIFIER_FIXUP_3681.x = _RESERVED_IDENTIFIER_FIXUP_1704.x;
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_1704.y;
        _RESERVED_IDENTIFIER_FIXUP_3681.w = _RESERVED_IDENTIFIER_FIXUP_1512;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3681.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1512;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1721 = hdLod5(param_21, param_22);
        float _RESERVED_IDENTIFIER_FIXUP_1726 = _RESERVED_IDENTIFIER_FIXUP_1697 + _RESERVED_IDENTIFIER_FIXUP_1721.x;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_1726;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_1726 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4161 = _RESERVED_IDENTIFIER_FIXUP_1721;
        _RESERVED_IDENTIFIER_FIXUP_4158 = _RESERVED_IDENTIFIER_FIXUP_3586;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1739 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_1739;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4162;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4159;
        if (_RESERVED_IDENTIFIER_FIXUP_1739 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1748 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1758 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1760 = _RESERVED_IDENTIFIER_FIXUP_1758.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3526 = _RESERVED_IDENTIFIER_FIXUP_3374;
            _RESERVED_IDENTIFIER_FIXUP_3526.y = _RESERVED_IDENTIFIER_FIXUP_1760;
            _RESERVED_IDENTIFIER_FIXUP_3526.z = _RESERVED_IDENTIFIER_FIXUP_1758.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1768 = _RESERVED_IDENTIFIER_FIXUP_3526.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3530;
            _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_1768.x;
            _RESERVED_IDENTIFIER_FIXUP_3530.y = _RESERVED_IDENTIFIER_FIXUP_1768.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1775 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1779 = _RESERVED_IDENTIFIER_FIXUP_1775.y;
            _RESERVED_IDENTIFIER_FIXUP_3530.w = _RESERVED_IDENTIFIER_FIXUP_1779;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1748.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1748.w;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3530.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1779;
            float _RESERVED_IDENTIFIER_FIXUP_1790 = hdLod6(param_23, param_24).x + hdLod6(param_25, param_26).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4187 = vec4(_RESERVED_IDENTIFIER_FIXUP_1469, _RESERVED_IDENTIFIER_FIXUP_1760, _RESERVED_IDENTIFIER_FIXUP_1758.y, _RESERVED_IDENTIFIER_FIXUP_1790);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_4187.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3543;
            _RESERVED_IDENTIFIER_FIXUP_3543.x = _RESERVED_IDENTIFIER_FIXUP_1797.x;
            _RESERVED_IDENTIFIER_FIXUP_3543.y = _RESERVED_IDENTIFIER_FIXUP_1797.y;
            _RESERVED_IDENTIFIER_FIXUP_3543.w = _RESERVED_IDENTIFIER_FIXUP_1779;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3543.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1779;
            float _RESERVED_IDENTIFIER_FIXUP_1819 = _RESERVED_IDENTIFIER_FIXUP_1790 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_4187.w = _RESERVED_IDENTIFIER_FIXUP_1819;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1826 = _RESERVED_IDENTIFIER_FIXUP_4187.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3556;
            _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_1826.x;
            _RESERVED_IDENTIFIER_FIXUP_3556.y = _RESERVED_IDENTIFIER_FIXUP_1826.y;
            _RESERVED_IDENTIFIER_FIXUP_3556.w = _RESERVED_IDENTIFIER_FIXUP_1779;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3556.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1779;
            float _RESERVED_IDENTIFIER_FIXUP_1848 = _RESERVED_IDENTIFIER_FIXUP_1819 + hdLod6(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_4187.w = _RESERVED_IDENTIFIER_FIXUP_1848;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1855 = _RESERVED_IDENTIFIER_FIXUP_4187.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3569;
            _RESERVED_IDENTIFIER_FIXUP_3569.x = _RESERVED_IDENTIFIER_FIXUP_1855.x;
            _RESERVED_IDENTIFIER_FIXUP_3569.y = _RESERVED_IDENTIFIER_FIXUP_1855.y;
            _RESERVED_IDENTIFIER_FIXUP_3569.w = _RESERVED_IDENTIFIER_FIXUP_1779;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3569.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1779;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1872 = hdLod6(param_31, param_32);
            float _RESERVED_IDENTIFIER_FIXUP_1877 = _RESERVED_IDENTIFIER_FIXUP_1848 + _RESERVED_IDENTIFIER_FIXUP_1872.x;
            _RESERVED_IDENTIFIER_FIXUP_4187.y = _RESERVED_IDENTIFIER_FIXUP_1877;
            _RESERVED_IDENTIFIER_FIXUP_4187.x = _RESERVED_IDENTIFIER_FIXUP_1877 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4162 = _RESERVED_IDENTIFIER_FIXUP_1872;
            _RESERVED_IDENTIFIER_FIXUP_4159 = _RESERVED_IDENTIFIER_FIXUP_4187;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1890 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3391 = _RESERVED_IDENTIFIER_FIXUP_3374;
            _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_1890;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4163;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4160;
            if (_RESERVED_IDENTIFIER_FIXUP_1890 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1899 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1909 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1911 = _RESERVED_IDENTIFIER_FIXUP_1909.x;
                _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_1911;
                _RESERVED_IDENTIFIER_FIXUP_3391.z = _RESERVED_IDENTIFIER_FIXUP_1909.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1919 = _RESERVED_IDENTIFIER_FIXUP_3391.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3470;
                _RESERVED_IDENTIFIER_FIXUP_3470.x = _RESERVED_IDENTIFIER_FIXUP_1919.x;
                _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_1919.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1926 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1930 = _RESERVED_IDENTIFIER_FIXUP_1926.y;
                _RESERVED_IDENTIFIER_FIXUP_3470.w = _RESERVED_IDENTIFIER_FIXUP_1930;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1899.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1899.w;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3470.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1930;
                float _RESERVED_IDENTIFIER_FIXUP_1941 = hdLod7(param_33, param_34).x + hdLod7(param_35, param_36).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4186 = vec4(_RESERVED_IDENTIFIER_FIXUP_1469, _RESERVED_IDENTIFIER_FIXUP_1911, _RESERVED_IDENTIFIER_FIXUP_1909.y, _RESERVED_IDENTIFIER_FIXUP_1941);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1948 = _RESERVED_IDENTIFIER_FIXUP_4186.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3483;
                _RESERVED_IDENTIFIER_FIXUP_3483.x = _RESERVED_IDENTIFIER_FIXUP_1948.x;
                _RESERVED_IDENTIFIER_FIXUP_3483.y = _RESERVED_IDENTIFIER_FIXUP_1948.y;
                _RESERVED_IDENTIFIER_FIXUP_3483.w = _RESERVED_IDENTIFIER_FIXUP_1930;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3483.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1930;
                float _RESERVED_IDENTIFIER_FIXUP_1970 = _RESERVED_IDENTIFIER_FIXUP_1941 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_4186.w = _RESERVED_IDENTIFIER_FIXUP_1970;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1977 = _RESERVED_IDENTIFIER_FIXUP_4186.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3496;
                _RESERVED_IDENTIFIER_FIXUP_3496.x = _RESERVED_IDENTIFIER_FIXUP_1977.x;
                _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_1977.y;
                _RESERVED_IDENTIFIER_FIXUP_3496.w = _RESERVED_IDENTIFIER_FIXUP_1930;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3496.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1930;
                float _RESERVED_IDENTIFIER_FIXUP_1999 = _RESERVED_IDENTIFIER_FIXUP_1970 + hdLod7(param_39, param_40).x;
                _RESERVED_IDENTIFIER_FIXUP_4186.w = _RESERVED_IDENTIFIER_FIXUP_1999;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2006 = _RESERVED_IDENTIFIER_FIXUP_4186.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3509;
                _RESERVED_IDENTIFIER_FIXUP_3509.x = _RESERVED_IDENTIFIER_FIXUP_2006.x;
                _RESERVED_IDENTIFIER_FIXUP_3509.y = _RESERVED_IDENTIFIER_FIXUP_2006.y;
                _RESERVED_IDENTIFIER_FIXUP_3509.w = _RESERVED_IDENTIFIER_FIXUP_1930;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3509.xy;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1930;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2023 = hdLod7(param_41, param_42);
                float _RESERVED_IDENTIFIER_FIXUP_2028 = _RESERVED_IDENTIFIER_FIXUP_1999 + _RESERVED_IDENTIFIER_FIXUP_2023.x;
                _RESERVED_IDENTIFIER_FIXUP_4186.y = _RESERVED_IDENTIFIER_FIXUP_2028;
                _RESERVED_IDENTIFIER_FIXUP_4186.x = _RESERVED_IDENTIFIER_FIXUP_2028 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4163 = _RESERVED_IDENTIFIER_FIXUP_2023;
                _RESERVED_IDENTIFIER_FIXUP_4160 = _RESERVED_IDENTIFIER_FIXUP_4186;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2044 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2048 = _RESERVED_IDENTIFIER_FIXUP_2044.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2059 = vec4(_RESERVED_IDENTIFIER_FIXUP_2044.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2048).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4183 = vec4(_RESERVED_IDENTIFIER_FIXUP_2059 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1427);
                _RESERVED_IDENTIFIER_FIXUP_4183.w = _RESERVED_IDENTIFIER_FIXUP_2048;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2096 = _RESERVED_IDENTIFIER_FIXUP_2059 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3424 = _RESERVED_IDENTIFIER_FIXUP_4183;
                _RESERVED_IDENTIFIER_FIXUP_3424.x = _RESERVED_IDENTIFIER_FIXUP_2096.x;
                _RESERVED_IDENTIFIER_FIXUP_3424.y = _RESERVED_IDENTIFIER_FIXUP_2096.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2118 = _RESERVED_IDENTIFIER_FIXUP_2059 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_3424;
                _RESERVED_IDENTIFIER_FIXUP_3433.x = _RESERVED_IDENTIFIER_FIXUP_2118.x;
                _RESERVED_IDENTIFIER_FIXUP_3433.y = _RESERVED_IDENTIFIER_FIXUP_2118.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2140 = _RESERVED_IDENTIFIER_FIXUP_2059 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3442 = _RESERVED_IDENTIFIER_FIXUP_3433;
                _RESERVED_IDENTIFIER_FIXUP_3442.x = _RESERVED_IDENTIFIER_FIXUP_2140.x;
                _RESERVED_IDENTIFIER_FIXUP_3442.y = _RESERVED_IDENTIFIER_FIXUP_2140.y;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3442.xy;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_2048;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2150 = hdLod8(param_43, param_44);
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_2059;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_2048;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_4183.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_2048;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3424.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_2048;
                vec2 param_51 = _RESERVED_IDENTIFIER_FIXUP_3433.xy;
                float param_52 = _RESERVED_IDENTIFIER_FIXUP_2048;
                float _RESERVED_IDENTIFIER_FIXUP_2155 = (((hdLod8(param_45, param_46).x + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x) + hdLod8(param_51, param_52).x) + _RESERVED_IDENTIFIER_FIXUP_2150.x;
                float _RESERVED_IDENTIFIER_FIXUP_2163 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3453 = _RESERVED_IDENTIFIER_FIXUP_2150;
                _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_2163;
                float _RESERVED_IDENTIFIER_FIXUP_2169 = clamp((_RESERVED_IDENTIFIER_FIXUP_2163 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2174 = (_RESERVED_IDENTIFIER_FIXUP_2155 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4163 = _RESERVED_IDENTIFIER_FIXUP_3453;
                _RESERVED_IDENTIFIER_FIXUP_4160 = vec4((_RESERVED_IDENTIFIER_FIXUP_2169 * _RESERVED_IDENTIFIER_FIXUP_2174) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2169, _RESERVED_IDENTIFIER_FIXUP_2174, _RESERVED_IDENTIFIER_FIXUP_2155);
            }
            _RESERVED_IDENTIFIER_FIXUP_4162 = _RESERVED_IDENTIFIER_FIXUP_4163;
            _RESERVED_IDENTIFIER_FIXUP_4159 = _RESERVED_IDENTIFIER_FIXUP_4160;
        }
        _RESERVED_IDENTIFIER_FIXUP_4161 = _RESERVED_IDENTIFIER_FIXUP_4162;
        _RESERVED_IDENTIFIER_FIXUP_4158 = _RESERVED_IDENTIFIER_FIXUP_4159;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3700 = _RESERVED_IDENTIFIER_FIXUP_4158;
    _RESERVED_IDENTIFIER_FIXUP_3700.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3702 = _RESERVED_IDENTIFIER_FIXUP_4161;
    _RESERVED_IDENTIFIER_FIXUP_3702.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3702.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3702.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2213 = _RESERVED_IDENTIFIER_FIXUP_3700.xxx * _RESERVED_IDENTIFIER_FIXUP_3702.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4188 = vec4(_RESERVED_IDENTIFIER_FIXUP_2213.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2213.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2227 = (_RESERVED_IDENTIFIER_FIXUP_1450.xyz * _RESERVED_IDENTIFIER_FIXUP_4188.yyy) + _RESERVED_IDENTIFIER_FIXUP_4188.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3714 = _RESERVED_IDENTIFIER_FIXUP_1450;
    _RESERVED_IDENTIFIER_FIXUP_3714.x = _RESERVED_IDENTIFIER_FIXUP_2227.x;
    _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_2227.y;
    _RESERVED_IDENTIFIER_FIXUP_3714.z = _RESERVED_IDENTIFIER_FIXUP_2227.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2240 = _RESERVED_IDENTIFIER_FIXUP_3714.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3720 = _RESERVED_IDENTIFIER_FIXUP_3714;
    _RESERVED_IDENTIFIER_FIXUP_3720.x = _RESERVED_IDENTIFIER_FIXUP_2240.x;
    _RESERVED_IDENTIFIER_FIXUP_3720.y = _RESERVED_IDENTIFIER_FIXUP_2240.y;
    _RESERVED_IDENTIFIER_FIXUP_3720.z = _RESERVED_IDENTIFIER_FIXUP_2240.z;
    vec2 param_53 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2297 = hdTex0(param_53);
    vec2 param_54 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2301 = hdTex1(param_54);
    vec2 param_55 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2305 = hdTex2(param_55);
    vec2 param_56 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2309 = hdTex3(param_56);
    vec2 param_57 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2313 = hdTex4(param_57);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2321 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3734;
    _RESERVED_IDENTIFIER_FIXUP_3734.x = _RESERVED_IDENTIFIER_FIXUP_2321.x;
    _RESERVED_IDENTIFIER_FIXUP_3734.y = _RESERVED_IDENTIFIER_FIXUP_2321.y;
    _RESERVED_IDENTIFIER_FIXUP_3734.z = _RESERVED_IDENTIFIER_FIXUP_2321.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2329 = _RESERVED_IDENTIFIER_FIXUP_2297.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2332 = _RESERVED_IDENTIFIER_FIXUP_2329 * _RESERVED_IDENTIFIER_FIXUP_3734.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3740;
    _RESERVED_IDENTIFIER_FIXUP_3740.x = _RESERVED_IDENTIFIER_FIXUP_2332.x;
    _RESERVED_IDENTIFIER_FIXUP_3740.y = _RESERVED_IDENTIFIER_FIXUP_2332.y;
    _RESERVED_IDENTIFIER_FIXUP_3740.z = _RESERVED_IDENTIFIER_FIXUP_2332.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2347 = mix(_RESERVED_IDENTIFIER_FIXUP_3740.xyz, _RESERVED_IDENTIFIER_FIXUP_2329, _RESERVED_IDENTIFIER_FIXUP_1333);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3746 = _RESERVED_IDENTIFIER_FIXUP_2297;
    _RESERVED_IDENTIFIER_FIXUP_3746.x = _RESERVED_IDENTIFIER_FIXUP_2347.x;
    _RESERVED_IDENTIFIER_FIXUP_3746.y = _RESERVED_IDENTIFIER_FIXUP_2347.y;
    _RESERVED_IDENTIFIER_FIXUP_3746.z = _RESERVED_IDENTIFIER_FIXUP_2347.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2355 = _RESERVED_IDENTIFIER_FIXUP_2301.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2358 = _RESERVED_IDENTIFIER_FIXUP_2355 * _RESERVED_IDENTIFIER_FIXUP_3734.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3752;
    _RESERVED_IDENTIFIER_FIXUP_3752.x = _RESERVED_IDENTIFIER_FIXUP_2358.x;
    _RESERVED_IDENTIFIER_FIXUP_3752.y = _RESERVED_IDENTIFIER_FIXUP_2358.y;
    _RESERVED_IDENTIFIER_FIXUP_3752.z = _RESERVED_IDENTIFIER_FIXUP_2358.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2373 = mix(_RESERVED_IDENTIFIER_FIXUP_3752.xyz, _RESERVED_IDENTIFIER_FIXUP_2355, _RESERVED_IDENTIFIER_FIXUP_1359);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3758 = _RESERVED_IDENTIFIER_FIXUP_2301;
    _RESERVED_IDENTIFIER_FIXUP_3758.x = _RESERVED_IDENTIFIER_FIXUP_2373.x;
    _RESERVED_IDENTIFIER_FIXUP_3758.y = _RESERVED_IDENTIFIER_FIXUP_2373.y;
    _RESERVED_IDENTIFIER_FIXUP_3758.z = _RESERVED_IDENTIFIER_FIXUP_2373.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2381 = _RESERVED_IDENTIFIER_FIXUP_2305.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2384 = _RESERVED_IDENTIFIER_FIXUP_2381 * _RESERVED_IDENTIFIER_FIXUP_3734.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3764;
    _RESERVED_IDENTIFIER_FIXUP_3764.x = _RESERVED_IDENTIFIER_FIXUP_2384.x;
    _RESERVED_IDENTIFIER_FIXUP_3764.y = _RESERVED_IDENTIFIER_FIXUP_2384.y;
    _RESERVED_IDENTIFIER_FIXUP_3764.z = _RESERVED_IDENTIFIER_FIXUP_2384.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2399 = mix(_RESERVED_IDENTIFIER_FIXUP_3764.xyz, _RESERVED_IDENTIFIER_FIXUP_2381, _RESERVED_IDENTIFIER_FIXUP_1385);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3770 = _RESERVED_IDENTIFIER_FIXUP_2305;
    _RESERVED_IDENTIFIER_FIXUP_3770.x = _RESERVED_IDENTIFIER_FIXUP_2399.x;
    _RESERVED_IDENTIFIER_FIXUP_3770.y = _RESERVED_IDENTIFIER_FIXUP_2399.y;
    _RESERVED_IDENTIFIER_FIXUP_3770.z = _RESERVED_IDENTIFIER_FIXUP_2399.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2407 = _RESERVED_IDENTIFIER_FIXUP_2309.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2410 = _RESERVED_IDENTIFIER_FIXUP_2407 * _RESERVED_IDENTIFIER_FIXUP_3734.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3776 = _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_3776.x = _RESERVED_IDENTIFIER_FIXUP_2410.x;
    _RESERVED_IDENTIFIER_FIXUP_3776.y = _RESERVED_IDENTIFIER_FIXUP_2410.y;
    _RESERVED_IDENTIFIER_FIXUP_3776.z = _RESERVED_IDENTIFIER_FIXUP_2410.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2425 = mix(_RESERVED_IDENTIFIER_FIXUP_3776.xyz, _RESERVED_IDENTIFIER_FIXUP_2407, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3776.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3782 = _RESERVED_IDENTIFIER_FIXUP_2309;
    _RESERVED_IDENTIFIER_FIXUP_3782.x = _RESERVED_IDENTIFIER_FIXUP_2425.x;
    _RESERVED_IDENTIFIER_FIXUP_3782.y = _RESERVED_IDENTIFIER_FIXUP_2425.y;
    _RESERVED_IDENTIFIER_FIXUP_3782.z = _RESERVED_IDENTIFIER_FIXUP_2425.z;
    float _RESERVED_IDENTIFIER_FIXUP_2435 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2313.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3788 = _RESERVED_IDENTIFIER_FIXUP_2313;
    _RESERVED_IDENTIFIER_FIXUP_3788.w = _RESERVED_IDENTIFIER_FIXUP_2435;
    float _RESERVED_IDENTIFIER_FIXUP_2440 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2435;
    _RESERVED_IDENTIFIER_FIXUP_3788.w = _RESERVED_IDENTIFIER_FIXUP_2440;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2445 = _RESERVED_IDENTIFIER_FIXUP_3788.xxxx * _RESERVED_IDENTIFIER_FIXUP_3758;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2463 = (_RESERVED_IDENTIFIER_FIXUP_3782 * _RESERVED_IDENTIFIER_FIXUP_3788.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3770 * _RESERVED_IDENTIFIER_FIXUP_3788.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3746 * _RESERVED_IDENTIFIER_FIXUP_3788.wwww) + _RESERVED_IDENTIFIER_FIXUP_2445));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3795 = _RESERVED_IDENTIFIER_FIXUP_2445;
    _RESERVED_IDENTIFIER_FIXUP_3795.x = _RESERVED_IDENTIFIER_FIXUP_1457;
    float _RESERVED_IDENTIFIER_FIXUP_2476 = clamp((_RESERVED_IDENTIFIER_FIXUP_1457 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3795.x = _RESERVED_IDENTIFIER_FIXUP_2476;
    float _RESERVED_IDENTIFIER_FIXUP_2482 = ((-_RESERVED_IDENTIFIER_FIXUP_2476) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3795.x = _RESERVED_IDENTIFIER_FIXUP_2482;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4176;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4170;
    if (_RESERVED_IDENTIFIER_FIXUP_2482 != (-_RESERVED_IDENTIFIER_FIXUP_2482))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2494 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2494.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2494.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2500 = hdLod5(param_58, param_59);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2504 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_4007 = _RESERVED_IDENTIFIER_FIXUP_2500;
        _RESERVED_IDENTIFIER_FIXUP_4007.y = _RESERVED_IDENTIFIER_FIXUP_2504.x;
        _RESERVED_IDENTIFIER_FIXUP_4007.z = _RESERVED_IDENTIFIER_FIXUP_2504.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2514 = _RESERVED_IDENTIFIER_FIXUP_4007.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4011;
        _RESERVED_IDENTIFIER_FIXUP_4011.x = _RESERVED_IDENTIFIER_FIXUP_2514.x;
        _RESERVED_IDENTIFIER_FIXUP_4011.y = _RESERVED_IDENTIFIER_FIXUP_2514.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2521 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2525 = _RESERVED_IDENTIFIER_FIXUP_2521.y;
        _RESERVED_IDENTIFIER_FIXUP_4011.w = _RESERVED_IDENTIFIER_FIXUP_2525;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_4011.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2525;
        float _RESERVED_IDENTIFIER_FIXUP_2536 = _RESERVED_IDENTIFIER_FIXUP_2500.x + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_4007.x = _RESERVED_IDENTIFIER_FIXUP_2536;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2543 = _RESERVED_IDENTIFIER_FIXUP_4007.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4024;
        _RESERVED_IDENTIFIER_FIXUP_4024.x = _RESERVED_IDENTIFIER_FIXUP_2543.x;
        _RESERVED_IDENTIFIER_FIXUP_4024.y = _RESERVED_IDENTIFIER_FIXUP_2543.y;
        _RESERVED_IDENTIFIER_FIXUP_4024.w = _RESERVED_IDENTIFIER_FIXUP_2525;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_4024.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2525;
        float _RESERVED_IDENTIFIER_FIXUP_2565 = _RESERVED_IDENTIFIER_FIXUP_2536 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_4007.x = _RESERVED_IDENTIFIER_FIXUP_2565;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2572 = _RESERVED_IDENTIFIER_FIXUP_4007.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4037;
        _RESERVED_IDENTIFIER_FIXUP_4037.x = _RESERVED_IDENTIFIER_FIXUP_2572.x;
        _RESERVED_IDENTIFIER_FIXUP_4037.y = _RESERVED_IDENTIFIER_FIXUP_2572.y;
        _RESERVED_IDENTIFIER_FIXUP_4037.w = _RESERVED_IDENTIFIER_FIXUP_2525;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_4037.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2525;
        float _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_2565 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_4007.x = _RESERVED_IDENTIFIER_FIXUP_2594;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2601 = _RESERVED_IDENTIFIER_FIXUP_4007.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4050;
        _RESERVED_IDENTIFIER_FIXUP_4050.x = _RESERVED_IDENTIFIER_FIXUP_2601.x;
        _RESERVED_IDENTIFIER_FIXUP_4050.y = _RESERVED_IDENTIFIER_FIXUP_2601.y;
        _RESERVED_IDENTIFIER_FIXUP_4050.w = _RESERVED_IDENTIFIER_FIXUP_2525;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_4050.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2525;
        float _RESERVED_IDENTIFIER_FIXUP_2623 = _RESERVED_IDENTIFIER_FIXUP_2594 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_4007.x = _RESERVED_IDENTIFIER_FIXUP_2623;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2630 = _RESERVED_IDENTIFIER_FIXUP_4007.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4063;
        _RESERVED_IDENTIFIER_FIXUP_4063.x = _RESERVED_IDENTIFIER_FIXUP_2630.x;
        _RESERVED_IDENTIFIER_FIXUP_4063.y = _RESERVED_IDENTIFIER_FIXUP_2630.y;
        _RESERVED_IDENTIFIER_FIXUP_4063.w = _RESERVED_IDENTIFIER_FIXUP_2525;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_4063.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2525;
        float _RESERVED_IDENTIFIER_FIXUP_2652 = _RESERVED_IDENTIFIER_FIXUP_2623 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_4007.x = _RESERVED_IDENTIFIER_FIXUP_2652;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2659 = _RESERVED_IDENTIFIER_FIXUP_4007.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4076;
        _RESERVED_IDENTIFIER_FIXUP_4076.x = _RESERVED_IDENTIFIER_FIXUP_2659.x;
        _RESERVED_IDENTIFIER_FIXUP_4076.y = _RESERVED_IDENTIFIER_FIXUP_2659.y;
        _RESERVED_IDENTIFIER_FIXUP_4076.w = _RESERVED_IDENTIFIER_FIXUP_2525;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4076.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2525;
        float _RESERVED_IDENTIFIER_FIXUP_2681 = _RESERVED_IDENTIFIER_FIXUP_2652 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_4007.x = _RESERVED_IDENTIFIER_FIXUP_2681;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2688 = _RESERVED_IDENTIFIER_FIXUP_4007.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4089;
        _RESERVED_IDENTIFIER_FIXUP_4089.x = _RESERVED_IDENTIFIER_FIXUP_2688.x;
        _RESERVED_IDENTIFIER_FIXUP_4089.y = _RESERVED_IDENTIFIER_FIXUP_2688.y;
        _RESERVED_IDENTIFIER_FIXUP_4089.w = _RESERVED_IDENTIFIER_FIXUP_2525;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_4089.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2525;
        float _RESERVED_IDENTIFIER_FIXUP_2710 = _RESERVED_IDENTIFIER_FIXUP_2681 + hdLod5(param_72, param_73).x;
        _RESERVED_IDENTIFIER_FIXUP_4007.x = _RESERVED_IDENTIFIER_FIXUP_2710;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2717 = _RESERVED_IDENTIFIER_FIXUP_4007.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4102;
        _RESERVED_IDENTIFIER_FIXUP_4102.x = _RESERVED_IDENTIFIER_FIXUP_2717.x;
        _RESERVED_IDENTIFIER_FIXUP_4102.y = _RESERVED_IDENTIFIER_FIXUP_2717.y;
        _RESERVED_IDENTIFIER_FIXUP_4102.w = _RESERVED_IDENTIFIER_FIXUP_2525;
        vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_4102.xy;
        float param_75 = _RESERVED_IDENTIFIER_FIXUP_2525;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2734 = hdLod5(param_74, param_75);
        float _RESERVED_IDENTIFIER_FIXUP_2739 = _RESERVED_IDENTIFIER_FIXUP_2710 + _RESERVED_IDENTIFIER_FIXUP_2734.x;
        _RESERVED_IDENTIFIER_FIXUP_4007.x = _RESERVED_IDENTIFIER_FIXUP_2739;
        _RESERVED_IDENTIFIER_FIXUP_4007.x = _RESERVED_IDENTIFIER_FIXUP_2739 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4176 = _RESERVED_IDENTIFIER_FIXUP_2734;
        _RESERVED_IDENTIFIER_FIXUP_4170 = _RESERVED_IDENTIFIER_FIXUP_4007;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2752 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3795.y = _RESERVED_IDENTIFIER_FIXUP_2752;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4177;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4171;
        if (_RESERVED_IDENTIFIER_FIXUP_2752 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2761 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2771 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2773 = _RESERVED_IDENTIFIER_FIXUP_2771.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3947 = _RESERVED_IDENTIFIER_FIXUP_3795;
            _RESERVED_IDENTIFIER_FIXUP_3947.y = _RESERVED_IDENTIFIER_FIXUP_2773;
            _RESERVED_IDENTIFIER_FIXUP_3947.z = _RESERVED_IDENTIFIER_FIXUP_2771.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2781 = _RESERVED_IDENTIFIER_FIXUP_3947.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3951;
            _RESERVED_IDENTIFIER_FIXUP_3951.x = _RESERVED_IDENTIFIER_FIXUP_2781.x;
            _RESERVED_IDENTIFIER_FIXUP_3951.y = _RESERVED_IDENTIFIER_FIXUP_2781.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2788 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2792 = _RESERVED_IDENTIFIER_FIXUP_2788.y;
            _RESERVED_IDENTIFIER_FIXUP_3951.w = _RESERVED_IDENTIFIER_FIXUP_2792;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2761.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2761.w;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3951.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2792;
            float _RESERVED_IDENTIFIER_FIXUP_2803 = hdLod6(param_76, param_77).x + hdLod6(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4195 = vec4(_RESERVED_IDENTIFIER_FIXUP_2482, _RESERVED_IDENTIFIER_FIXUP_2773, _RESERVED_IDENTIFIER_FIXUP_2771.y, _RESERVED_IDENTIFIER_FIXUP_2803);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2810 = _RESERVED_IDENTIFIER_FIXUP_4195.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3964;
            _RESERVED_IDENTIFIER_FIXUP_3964.x = _RESERVED_IDENTIFIER_FIXUP_2810.x;
            _RESERVED_IDENTIFIER_FIXUP_3964.y = _RESERVED_IDENTIFIER_FIXUP_2810.y;
            _RESERVED_IDENTIFIER_FIXUP_3964.w = _RESERVED_IDENTIFIER_FIXUP_2792;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3964.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2792;
            float _RESERVED_IDENTIFIER_FIXUP_2832 = _RESERVED_IDENTIFIER_FIXUP_2803 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_4195.w = _RESERVED_IDENTIFIER_FIXUP_2832;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2839 = _RESERVED_IDENTIFIER_FIXUP_4195.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3977;
            _RESERVED_IDENTIFIER_FIXUP_3977.x = _RESERVED_IDENTIFIER_FIXUP_2839.x;
            _RESERVED_IDENTIFIER_FIXUP_3977.y = _RESERVED_IDENTIFIER_FIXUP_2839.y;
            _RESERVED_IDENTIFIER_FIXUP_3977.w = _RESERVED_IDENTIFIER_FIXUP_2792;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3977.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2792;
            float _RESERVED_IDENTIFIER_FIXUP_2861 = _RESERVED_IDENTIFIER_FIXUP_2832 + hdLod6(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_4195.w = _RESERVED_IDENTIFIER_FIXUP_2861;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2868 = _RESERVED_IDENTIFIER_FIXUP_4195.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3990;
            _RESERVED_IDENTIFIER_FIXUP_3990.x = _RESERVED_IDENTIFIER_FIXUP_2868.x;
            _RESERVED_IDENTIFIER_FIXUP_3990.y = _RESERVED_IDENTIFIER_FIXUP_2868.y;
            _RESERVED_IDENTIFIER_FIXUP_3990.w = _RESERVED_IDENTIFIER_FIXUP_2792;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3990.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2792;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2885 = hdLod6(param_84, param_85);
            float _RESERVED_IDENTIFIER_FIXUP_2890 = _RESERVED_IDENTIFIER_FIXUP_2861 + _RESERVED_IDENTIFIER_FIXUP_2885.x;
            _RESERVED_IDENTIFIER_FIXUP_4195.y = _RESERVED_IDENTIFIER_FIXUP_2890;
            _RESERVED_IDENTIFIER_FIXUP_4195.x = _RESERVED_IDENTIFIER_FIXUP_2890 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4177 = _RESERVED_IDENTIFIER_FIXUP_2885;
            _RESERVED_IDENTIFIER_FIXUP_4171 = _RESERVED_IDENTIFIER_FIXUP_4195;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2903 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3812 = _RESERVED_IDENTIFIER_FIXUP_3795;
            _RESERVED_IDENTIFIER_FIXUP_3812.y = _RESERVED_IDENTIFIER_FIXUP_2903;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4178;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4172;
            if (_RESERVED_IDENTIFIER_FIXUP_2903 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2912 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2922 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2924 = _RESERVED_IDENTIFIER_FIXUP_2922.x;
                _RESERVED_IDENTIFIER_FIXUP_3812.y = _RESERVED_IDENTIFIER_FIXUP_2924;
                _RESERVED_IDENTIFIER_FIXUP_3812.z = _RESERVED_IDENTIFIER_FIXUP_2922.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2932 = _RESERVED_IDENTIFIER_FIXUP_3812.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3891;
                _RESERVED_IDENTIFIER_FIXUP_3891.x = _RESERVED_IDENTIFIER_FIXUP_2932.x;
                _RESERVED_IDENTIFIER_FIXUP_3891.y = _RESERVED_IDENTIFIER_FIXUP_2932.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2939 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2943 = _RESERVED_IDENTIFIER_FIXUP_2939.y;
                _RESERVED_IDENTIFIER_FIXUP_3891.w = _RESERVED_IDENTIFIER_FIXUP_2943;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_2912.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2912.w;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3891.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2943;
                float _RESERVED_IDENTIFIER_FIXUP_2954 = hdLod7(param_86, param_87).x + hdLod7(param_88, param_89).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4194 = vec4(_RESERVED_IDENTIFIER_FIXUP_2482, _RESERVED_IDENTIFIER_FIXUP_2924, _RESERVED_IDENTIFIER_FIXUP_2922.y, _RESERVED_IDENTIFIER_FIXUP_2954);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2961 = _RESERVED_IDENTIFIER_FIXUP_4194.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3904;
                _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2961.x;
                _RESERVED_IDENTIFIER_FIXUP_3904.y = _RESERVED_IDENTIFIER_FIXUP_2961.y;
                _RESERVED_IDENTIFIER_FIXUP_3904.w = _RESERVED_IDENTIFIER_FIXUP_2943;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3904.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2943;
                float _RESERVED_IDENTIFIER_FIXUP_2983 = _RESERVED_IDENTIFIER_FIXUP_2954 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_4194.w = _RESERVED_IDENTIFIER_FIXUP_2983;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2990 = _RESERVED_IDENTIFIER_FIXUP_4194.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3917;
                _RESERVED_IDENTIFIER_FIXUP_3917.x = _RESERVED_IDENTIFIER_FIXUP_2990.x;
                _RESERVED_IDENTIFIER_FIXUP_3917.y = _RESERVED_IDENTIFIER_FIXUP_2990.y;
                _RESERVED_IDENTIFIER_FIXUP_3917.w = _RESERVED_IDENTIFIER_FIXUP_2943;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3917.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2943;
                float _RESERVED_IDENTIFIER_FIXUP_3012 = _RESERVED_IDENTIFIER_FIXUP_2983 + hdLod7(param_92, param_93).x;
                _RESERVED_IDENTIFIER_FIXUP_4194.w = _RESERVED_IDENTIFIER_FIXUP_3012;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3019 = _RESERVED_IDENTIFIER_FIXUP_4194.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3930;
                _RESERVED_IDENTIFIER_FIXUP_3930.x = _RESERVED_IDENTIFIER_FIXUP_3019.x;
                _RESERVED_IDENTIFIER_FIXUP_3930.y = _RESERVED_IDENTIFIER_FIXUP_3019.y;
                _RESERVED_IDENTIFIER_FIXUP_3930.w = _RESERVED_IDENTIFIER_FIXUP_2943;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3930.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2943;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3036 = hdLod7(param_94, param_95);
                float _RESERVED_IDENTIFIER_FIXUP_3041 = _RESERVED_IDENTIFIER_FIXUP_3012 + _RESERVED_IDENTIFIER_FIXUP_3036.x;
                _RESERVED_IDENTIFIER_FIXUP_4194.y = _RESERVED_IDENTIFIER_FIXUP_3041;
                _RESERVED_IDENTIFIER_FIXUP_4194.x = _RESERVED_IDENTIFIER_FIXUP_3041 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4178 = _RESERVED_IDENTIFIER_FIXUP_3036;
                _RESERVED_IDENTIFIER_FIXUP_4172 = _RESERVED_IDENTIFIER_FIXUP_4194;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_3057 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_3061 = _RESERVED_IDENTIFIER_FIXUP_3057.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3072 = vec4(_RESERVED_IDENTIFIER_FIXUP_3057.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_3061).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4191 = vec4(_RESERVED_IDENTIFIER_FIXUP_3072 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2440);
                _RESERVED_IDENTIFIER_FIXUP_4191.w = _RESERVED_IDENTIFIER_FIXUP_3061;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3109 = _RESERVED_IDENTIFIER_FIXUP_3072 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3845 = _RESERVED_IDENTIFIER_FIXUP_4191;
                _RESERVED_IDENTIFIER_FIXUP_3845.x = _RESERVED_IDENTIFIER_FIXUP_3109.x;
                _RESERVED_IDENTIFIER_FIXUP_3845.y = _RESERVED_IDENTIFIER_FIXUP_3109.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3131 = _RESERVED_IDENTIFIER_FIXUP_3072 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3854 = _RESERVED_IDENTIFIER_FIXUP_3845;
                _RESERVED_IDENTIFIER_FIXUP_3854.x = _RESERVED_IDENTIFIER_FIXUP_3131.x;
                _RESERVED_IDENTIFIER_FIXUP_3854.y = _RESERVED_IDENTIFIER_FIXUP_3131.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3153 = _RESERVED_IDENTIFIER_FIXUP_3072 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3863 = _RESERVED_IDENTIFIER_FIXUP_3854;
                _RESERVED_IDENTIFIER_FIXUP_3863.x = _RESERVED_IDENTIFIER_FIXUP_3153.x;
                _RESERVED_IDENTIFIER_FIXUP_3863.y = _RESERVED_IDENTIFIER_FIXUP_3153.y;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3863.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_3061;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3163 = hdLod8(param_96, param_97);
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3072;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_3061;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_4191.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_3061;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3845.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_3061;
                vec2 param_104 = _RESERVED_IDENTIFIER_FIXUP_3854.xy;
                float param_105 = _RESERVED_IDENTIFIER_FIXUP_3061;
                float _RESERVED_IDENTIFIER_FIXUP_3168 = (((hdLod8(param_98, param_99).x + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x) + hdLod8(param_104, param_105).x) + _RESERVED_IDENTIFIER_FIXUP_3163.x;
                float _RESERVED_IDENTIFIER_FIXUP_3176 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3874 = _RESERVED_IDENTIFIER_FIXUP_3163;
                _RESERVED_IDENTIFIER_FIXUP_3874.x = _RESERVED_IDENTIFIER_FIXUP_3176;
                float _RESERVED_IDENTIFIER_FIXUP_3182 = clamp((_RESERVED_IDENTIFIER_FIXUP_3176 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_3187 = (_RESERVED_IDENTIFIER_FIXUP_3168 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4178 = _RESERVED_IDENTIFIER_FIXUP_3874;
                _RESERVED_IDENTIFIER_FIXUP_4172 = vec4((_RESERVED_IDENTIFIER_FIXUP_3182 * _RESERVED_IDENTIFIER_FIXUP_3187) + 1.0, _RESERVED_IDENTIFIER_FIXUP_3182, _RESERVED_IDENTIFIER_FIXUP_3187, _RESERVED_IDENTIFIER_FIXUP_3168);
            }
            _RESERVED_IDENTIFIER_FIXUP_4177 = _RESERVED_IDENTIFIER_FIXUP_4178;
            _RESERVED_IDENTIFIER_FIXUP_4171 = _RESERVED_IDENTIFIER_FIXUP_4172;
        }
        _RESERVED_IDENTIFIER_FIXUP_4176 = _RESERVED_IDENTIFIER_FIXUP_4177;
        _RESERVED_IDENTIFIER_FIXUP_4170 = _RESERVED_IDENTIFIER_FIXUP_4171;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3202 = (_RESERVED_IDENTIFIER_FIXUP_4170.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4119 = _RESERVED_IDENTIFIER_FIXUP_4170;
    _RESERVED_IDENTIFIER_FIXUP_4119.y = _RESERVED_IDENTIFIER_FIXUP_3202;
    _RESERVED_IDENTIFIER_FIXUP_4119.y = _RESERVED_IDENTIFIER_FIXUP_3202;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3215 = _RESERVED_IDENTIFIER_FIXUP_2463.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4125 = _RESERVED_IDENTIFIER_FIXUP_4176;
    _RESERVED_IDENTIFIER_FIXUP_4125.x = _RESERVED_IDENTIFIER_FIXUP_3215.x;
    _RESERVED_IDENTIFIER_FIXUP_4125.y = _RESERVED_IDENTIFIER_FIXUP_3215.y;
    _RESERVED_IDENTIFIER_FIXUP_4125.z = _RESERVED_IDENTIFIER_FIXUP_3215.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3226 = _RESERVED_IDENTIFIER_FIXUP_4119.xxx * _RESERVED_IDENTIFIER_FIXUP_4125.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4196 = vec4(_RESERVED_IDENTIFIER_FIXUP_3226.x, _RESERVED_IDENTIFIER_FIXUP_3202, _RESERVED_IDENTIFIER_FIXUP_3226.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3240 = (_RESERVED_IDENTIFIER_FIXUP_2463.xyz * _RESERVED_IDENTIFIER_FIXUP_4196.yyy) + _RESERVED_IDENTIFIER_FIXUP_4196.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4137 = _RESERVED_IDENTIFIER_FIXUP_2463;
    _RESERVED_IDENTIFIER_FIXUP_4137.x = _RESERVED_IDENTIFIER_FIXUP_3240.x;
    _RESERVED_IDENTIFIER_FIXUP_4137.y = _RESERVED_IDENTIFIER_FIXUP_3240.y;
    _RESERVED_IDENTIFIER_FIXUP_4137.z = _RESERVED_IDENTIFIER_FIXUP_3240.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3253 = _RESERVED_IDENTIFIER_FIXUP_4137.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4143 = _RESERVED_IDENTIFIER_FIXUP_4137;
    _RESERVED_IDENTIFIER_FIXUP_4143.x = _RESERVED_IDENTIFIER_FIXUP_3253.x;
    _RESERVED_IDENTIFIER_FIXUP_4143.y = _RESERVED_IDENTIFIER_FIXUP_3253.y;
    _RESERVED_IDENTIFIER_FIXUP_4143.z = _RESERVED_IDENTIFIER_FIXUP_3253.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4143.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3720.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1214 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3306;
    if (_RESERVED_IDENTIFIER_FIXUP_1188 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3306 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1188), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1214);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3306 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1214);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3306;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3202);
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
    vec3 hdB100 = v0.xyz + v0.xyz;
    r6.x = hdB100.x;
    r6.y = hdB100.y;
    r6.z = hdB100.z;
    vec3 hdB115 = r0.xyz * r6.xyz;
    r7.x = hdB115.x;
    r7.y = hdB115.y;
    r7.z = hdB115.z;
    vec4 hdB124 = r0;
    vec3 hdB133 = mix(r7.xyz, hdB124.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB133.x;
    r0.y = hdB133.y;
    r0.z = hdB133.z;
    vec3 hdB144 = r1.xyz * r6.xyz;
    r7.x = hdB144.x;
    r7.y = hdB144.y;
    r7.z = hdB144.z;
    vec4 hdB153 = r1;
    vec3 hdB159 = mix(r7.xyz, hdB153.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB159.x;
    r1.y = hdB159.y;
    r1.z = hdB159.z;
    vec3 hdB170 = r2.xyz * r6.xyz;
    r7.x = hdB170.x;
    r7.y = hdB170.y;
    r7.z = hdB170.z;
    vec4 hdB179 = r2;
    vec3 hdB185 = mix(r7.xyz, hdB179.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB185.x;
    r2.y = hdB185.y;
    r2.z = hdB185.z;
    vec3 hdB196 = r3.xyz * r6.xyz;
    r5.x = hdB196.x;
    r5.y = hdB196.y;
    r5.z = hdB196.z;
    vec4 hdB205 = r3;
    vec3 hdB211 = mix(r5.xyz, hdB205.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB211.x;
    r3.y = hdB211.y;
    r3.z = hdB211.z;
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
        vec2 param_5 = r1.xy;
        float param_6 = r1.w;
        r1 = hdLod5(param_5, param_6);
        vec2 hdB301 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB301.x;
        r1.z = hdB301.y;
        vec2 hdB312 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB312.x;
        r2.y = hdB312.y;
        vec2 hdB320 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB320.x;
        r2.w = hdB320.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.x += r2.x;
        vec2 hdB343 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB343.x;
        r2.y = hdB343.y;
        vec2 hdB350 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB350.x;
        r2.w = hdB350.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.x += r2.x;
        vec2 hdB373 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB373.x;
        r2.y = hdB373.y;
        vec2 hdB380 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB380.x;
        r2.w = hdB380.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.x += r2.x;
        vec2 hdB403 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB403.x;
        r2.y = hdB403.y;
        vec2 hdB410 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB410.x;
        r2.w = hdB410.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.x += r2.x;
        vec2 hdB433 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB433.x;
        r2.y = hdB433.y;
        vec2 hdB440 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB440.x;
        r2.w = hdB440.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r1.x += r2.x;
        vec2 hdB463 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB463.x;
        r2.y = hdB463.y;
        vec2 hdB470 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB470.x;
        r2.w = hdB470.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r1.x += r2.x;
        vec2 hdB493 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB493.x;
        r2.y = hdB493.y;
        vec2 hdB500 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB500.x;
        r2.w = hdB500.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod5(param_19, param_20);
        r1.x += r2.x;
        vec2 hdB523 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB523.x;
        r2.y = hdB523.y;
        vec2 hdB530 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB530.x;
        r2.w = hdB530.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod5(param_21, param_22);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            vec2 hdB580 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB580.x;
            r1.z = hdB580.y;
            vec2 hdB590 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB590.x;
            r3.y = hdB590.y;
            vec2 hdB597 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB597.x;
            r3.w = hdB597.y;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod6(param_25, param_26);
            r1.w = r2.x + r3.x;
            vec2 hdB619 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB619.x;
            r2.y = hdB619.y;
            vec2 hdB626 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB626.x;
            r2.w = hdB626.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r1.w += r2.x;
            vec2 hdB648 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB648.x;
            r2.y = hdB648.y;
            vec2 hdB655 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB655.x;
            r2.w = hdB655.y;
            vec2 param_29 = r2.xy;
            float param_30 = r2.w;
            r2 = hdLod6(param_29, param_30);
            r1.w += r2.x;
            vec2 hdB677 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB677.x;
            r2.y = hdB677.y;
            vec2 hdB684 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB684.x;
            r2.w = hdB684.y;
            vec2 param_31 = r2.xy;
            float param_32 = r2.w;
            r2 = hdLod6(param_31, param_32);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                vec2 hdB734 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB734.x;
                r1.z = hdB734.y;
                vec2 hdB744 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB744.x;
                r3.y = hdB744.y;
                vec2 hdB751 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB751.x;
                r3.w = hdB751.y;
                vec2 param_35 = r3.xy;
                float param_36 = r3.w;
                r3 = hdLod7(param_35, param_36);
                r1.w = r2.x + r3.x;
                vec2 hdB773 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB773.x;
                r2.y = hdB773.y;
                vec2 hdB780 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB780.x;
                r2.w = hdB780.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r1.w += r2.x;
                vec2 hdB802 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB802.x;
                r2.y = hdB802.y;
                vec2 hdB809 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB809.x;
                r2.w = hdB809.y;
                vec2 param_39 = r2.xy;
                float param_40 = r2.w;
                r2 = hdLod7(param_39, param_40);
                r1.w += r2.x;
                vec2 hdB831 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB831.x;
                r2.y = hdB831.y;
                vec2 hdB838 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB838.x;
                r2.w = hdB838.y;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r2 = hdLod7(param_41, param_42);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 hdB870 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB870.x;
                r2.w = hdB870.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_43 = r2.xy;
                float param_44 = r2.w;
                r3 = hdLod8(param_43, param_44);
                vec2 hdB895 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB895.x;
                r4.y = hdB895.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r5 = hdLod8(param_45, param_46);
                r1.w = r3.x + r5.x;
                vec2 hdB923 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB923.x;
                r4.y = hdB923.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r3 = hdLod8(param_47, param_48);
                r1.w += r3.x;
                vec2 hdB945 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB945.x;
                r4.y = hdB945.y;
                vec2 param_49 = r4.xy;
                float param_50 = r4.w;
                r3 = hdLod8(param_49, param_50);
                r1.w += r3.x;
                vec2 hdB967 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB967.x;
                r4.y = hdB967.y;
                vec2 param_51 = r4.xy;
                float param_52 = r4.w;
                r2 = hdLod8(param_51, param_52);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB1024 = r0.www * v1.xyz;
    r2.x = hdB1024.x;
    r2.y = hdB1024.y;
    r2.z = hdB1024.z;
    vec4 hdB1031 = r1;
    vec3 hdB1035 = hdB1031.xxx * r2.xyz;
    r1.x = hdB1035.x;
    r1.z = hdB1035.y;
    r1.w = hdB1035.z;
    vec4 hdB1042 = r0;
    vec3 hdB1049 = (hdB1042.xyz * r1.yyy) + r1.xzw;
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
    bool _3960 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3970;
    if (_3960)
    {
        _3970 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3970 = _3960;
    }
    if (_3970)
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
        bool _3995 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _4010;
        if (!_3995)
        {
            _4010 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _4010 = _3995;
        }
        if (_4010)
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
