#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_4179;
vec4 _RESERVED_IDENTIFIER_FIXUP_4180;


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
    bool _61 = hdOverride >= 0;
    bool _80;
    if (_61)
    {
        _80 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _80 = _61;
    }
    vec4 _81;
    if (_80)
    {
        _81 = vec4(float(hdOverride));
    }
    else
    {
        _81 = value;
    }
    return _81;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _98 = hdOverride >= 0;
    bool _108;
    if (_98)
    {
        _108 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _108 = _98;
    }
    vec4 _109;
    if (_108)
    {
        _109 = vec4(float(hdOverride));
    }
    else
    {
        _109 = value;
    }
    return _109;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _126 = hdOverride >= 0;
    bool _136;
    if (_126)
    {
        _136 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _136 = _126;
    }
    vec4 _137;
    if (_136)
    {
        _137 = vec4(float(hdOverride));
    }
    else
    {
        _137 = value;
    }
    return _137;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _155 = hdOverride >= 0;
    bool _165;
    if (_155)
    {
        _165 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _165 = _155;
    }
    vec4 _166;
    if (_165)
    {
        _166 = vec4(float(hdOverride));
    }
    else
    {
        _166 = value;
    }
    return _166;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _184 = hdOverride >= 0;
    bool _194;
    if (_184)
    {
        _194 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _194 = _184;
    }
    vec4 _195;
    if (_194)
    {
        _195 = vec4(float(hdOverride));
    }
    else
    {
        _195 = value;
    }
    return _195;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _213 = hdOverride >= 0;
    bool _223;
    if (_213)
    {
        _223 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _223 = _213;
    }
    vec4 _224;
    if (_223)
    {
        _224 = vec4(float(hdOverride));
    }
    else
    {
        _224 = value;
    }
    return _224;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _242 = hdOverride >= 0;
    bool _252;
    if (_242)
    {
        _252 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _252 = _242;
    }
    vec4 _253;
    if (_252)
    {
        _253 = vec4(float(hdOverride));
    }
    else
    {
        _253 = value;
    }
    return _253;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1277 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1281 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1285 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1289 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1293 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3282 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3282.x = _RESERVED_IDENTIFIER_FIXUP_1293.x;
    _RESERVED_IDENTIFIER_FIXUP_3282.y = _RESERVED_IDENTIFIER_FIXUP_1293.y;
    float _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_1293.z;
    _RESERVED_IDENTIFIER_FIXUP_3282.z = _RESERVED_IDENTIFIER_FIXUP_1299;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1301 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4179).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1304 = _RESERVED_IDENTIFIER_FIXUP_1301 + _RESERVED_IDENTIFIER_FIXUP_1301;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3288 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3288.x = _RESERVED_IDENTIFIER_FIXUP_1304.x;
    _RESERVED_IDENTIFIER_FIXUP_3288.y = _RESERVED_IDENTIFIER_FIXUP_1304.y;
    _RESERVED_IDENTIFIER_FIXUP_3288.z = _RESERVED_IDENTIFIER_FIXUP_1304.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1277.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_1312 * _RESERVED_IDENTIFIER_FIXUP_3288.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3294 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3294.x = _RESERVED_IDENTIFIER_FIXUP_1315.x;
    _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_1315.y;
    _RESERVED_IDENTIFIER_FIXUP_3294.z = _RESERVED_IDENTIFIER_FIXUP_1315.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1329 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3282.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1330 = mix(_RESERVED_IDENTIFIER_FIXUP_3294.xyz, _RESERVED_IDENTIFIER_FIXUP_1312, _RESERVED_IDENTIFIER_FIXUP_1329);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3300 = _RESERVED_IDENTIFIER_FIXUP_1277;
    _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1330.x;
    _RESERVED_IDENTIFIER_FIXUP_3300.y = _RESERVED_IDENTIFIER_FIXUP_1330.y;
    _RESERVED_IDENTIFIER_FIXUP_3300.z = _RESERVED_IDENTIFIER_FIXUP_1330.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_1281.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1341 = _RESERVED_IDENTIFIER_FIXUP_1338 * _RESERVED_IDENTIFIER_FIXUP_3288.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3294.x = _RESERVED_IDENTIFIER_FIXUP_1341.x;
    _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_1341.y;
    _RESERVED_IDENTIFIER_FIXUP_3294.z = _RESERVED_IDENTIFIER_FIXUP_1341.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1355 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3282.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1356 = mix(_RESERVED_IDENTIFIER_FIXUP_3294.xyz, _RESERVED_IDENTIFIER_FIXUP_1338, _RESERVED_IDENTIFIER_FIXUP_1355);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3312 = _RESERVED_IDENTIFIER_FIXUP_1281;
    _RESERVED_IDENTIFIER_FIXUP_3312.x = _RESERVED_IDENTIFIER_FIXUP_1356.x;
    _RESERVED_IDENTIFIER_FIXUP_3312.y = _RESERVED_IDENTIFIER_FIXUP_1356.y;
    _RESERVED_IDENTIFIER_FIXUP_3312.z = _RESERVED_IDENTIFIER_FIXUP_1356.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_1285.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_1364 * _RESERVED_IDENTIFIER_FIXUP_3288.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4205 = vec4(_RESERVED_IDENTIFIER_FIXUP_1367.xy, _RESERVED_IDENTIFIER_FIXUP_1299, _RESERVED_IDENTIFIER_FIXUP_1367.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1382 = mix(_RESERVED_IDENTIFIER_FIXUP_4205.xyw, _RESERVED_IDENTIFIER_FIXUP_1364, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4205.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_1285;
    _RESERVED_IDENTIFIER_FIXUP_3324.x = _RESERVED_IDENTIFIER_FIXUP_1382.x;
    _RESERVED_IDENTIFIER_FIXUP_3324.y = _RESERVED_IDENTIFIER_FIXUP_1382.y;
    _RESERVED_IDENTIFIER_FIXUP_3324.z = _RESERVED_IDENTIFIER_FIXUP_1382.z;
    float _RESERVED_IDENTIFIER_FIXUP_1392 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1289.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3330 = _RESERVED_IDENTIFIER_FIXUP_1289;
    _RESERVED_IDENTIFIER_FIXUP_3330.z = _RESERVED_IDENTIFIER_FIXUP_1392;
    _RESERVED_IDENTIFIER_FIXUP_3330.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1392;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1402 = _RESERVED_IDENTIFIER_FIXUP_3330.xxxx * _RESERVED_IDENTIFIER_FIXUP_3312;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1414 = (_RESERVED_IDENTIFIER_FIXUP_3324 * _RESERVED_IDENTIFIER_FIXUP_3330.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3300 * _RESERVED_IDENTIFIER_FIXUP_3330.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1402);
    float _RESERVED_IDENTIFIER_FIXUP_1421 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3337 = _RESERVED_IDENTIFIER_FIXUP_1402;
    _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_1421;
    float _RESERVED_IDENTIFIER_FIXUP_1427 = clamp((_RESERVED_IDENTIFIER_FIXUP_1421 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_1427;
    float _RESERVED_IDENTIFIER_FIXUP_1433 = ((-_RESERVED_IDENTIFIER_FIXUP_1427) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_1433;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4184;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4181;
    if (_RESERVED_IDENTIFIER_FIXUP_1433 != (-_RESERVED_IDENTIFIER_FIXUP_1433))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1445 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3576;
        _RESERVED_IDENTIFIER_FIXUP_3576.x = _RESERVED_IDENTIFIER_FIXUP_1445.x;
        _RESERVED_IDENTIFIER_FIXUP_3576.y = _RESERVED_IDENTIFIER_FIXUP_1445.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1455 = _RESERVED_IDENTIFIER_FIXUP_3576.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3580;
        _RESERVED_IDENTIFIER_FIXUP_3580.x = _RESERVED_IDENTIFIER_FIXUP_1455.x;
        _RESERVED_IDENTIFIER_FIXUP_3580.y = _RESERVED_IDENTIFIER_FIXUP_1455.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1465 = _RESERVED_IDENTIFIER_FIXUP_3576.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3584;
        _RESERVED_IDENTIFIER_FIXUP_3584.x = _RESERVED_IDENTIFIER_FIXUP_1465.x;
        _RESERVED_IDENTIFIER_FIXUP_3584.y = _RESERVED_IDENTIFIER_FIXUP_1465.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1475 = _RESERVED_IDENTIFIER_FIXUP_3576.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3588;
        _RESERVED_IDENTIFIER_FIXUP_3588.x = _RESERVED_IDENTIFIER_FIXUP_1475.x;
        _RESERVED_IDENTIFIER_FIXUP_3588.y = _RESERVED_IDENTIFIER_FIXUP_1475.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1485 = _RESERVED_IDENTIFIER_FIXUP_3576.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3592;
        _RESERVED_IDENTIFIER_FIXUP_3592.x = _RESERVED_IDENTIFIER_FIXUP_1485.x;
        _RESERVED_IDENTIFIER_FIXUP_3592.y = _RESERVED_IDENTIFIER_FIXUP_1485.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_3576.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3596;
        _RESERVED_IDENTIFIER_FIXUP_3596.x = _RESERVED_IDENTIFIER_FIXUP_1495.x;
        _RESERVED_IDENTIFIER_FIXUP_3596.y = _RESERVED_IDENTIFIER_FIXUP_1495.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1505 = _RESERVED_IDENTIFIER_FIXUP_3576.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3600;
        _RESERVED_IDENTIFIER_FIXUP_3600.x = _RESERVED_IDENTIFIER_FIXUP_1505.x;
        _RESERVED_IDENTIFIER_FIXUP_3600.y = _RESERVED_IDENTIFIER_FIXUP_1505.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1515 = _RESERVED_IDENTIFIER_FIXUP_3576.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3604;
        _RESERVED_IDENTIFIER_FIXUP_3604.x = _RESERVED_IDENTIFIER_FIXUP_1515.x;
        _RESERVED_IDENTIFIER_FIXUP_3604.y = _RESERVED_IDENTIFIER_FIXUP_1515.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_3576.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3608;
        _RESERVED_IDENTIFIER_FIXUP_3608.x = _RESERVED_IDENTIFIER_FIXUP_1525.x;
        _RESERVED_IDENTIFIER_FIXUP_3608.y = _RESERVED_IDENTIFIER_FIXUP_1525.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1533 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1533.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1533.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1539 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3580.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3584.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3588.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3592.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3592.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1579 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3596.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3600.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3604.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3608.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3608.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1619 = hdLod5(param_7, param_8);
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3580.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1539.y = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3584.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1539.z = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3588.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1539.w = hdLod5(param_13, param_14).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1636 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1539 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3596.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1579.y = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3600.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1579.z = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3604.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1579.w = hdLod5(param_19, param_20).x;
        float _RESERVED_IDENTIFIER_FIXUP_1659 = _RESERVED_IDENTIFIER_FIXUP_1619.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3673 = _RESERVED_IDENTIFIER_FIXUP_1619;
        _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_1659;
        float _RESERVED_IDENTIFIER_FIXUP_1664 = float(_RESERVED_IDENTIFIER_FIXUP_1659 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_1664;
        float _RESERVED_IDENTIFIER_FIXUP_1667 = dot(_RESERVED_IDENTIFIER_FIXUP_1636, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_1667;
        float _RESERVED_IDENTIFIER_FIXUP_1670 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1579 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3673.z = _RESERVED_IDENTIFIER_FIXUP_1670;
        float _RESERVED_IDENTIFIER_FIXUP_1676 = _RESERVED_IDENTIFIER_FIXUP_1667 + _RESERVED_IDENTIFIER_FIXUP_1670;
        _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_1676;
        float _RESERVED_IDENTIFIER_FIXUP_1682 = _RESERVED_IDENTIFIER_FIXUP_1664 + _RESERVED_IDENTIFIER_FIXUP_1676;
        _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_1682;
        _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_1682 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4184 = _RESERVED_IDENTIFIER_FIXUP_1636;
        _RESERVED_IDENTIFIER_FIXUP_4181 = _RESERVED_IDENTIFIER_FIXUP_3673;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1695 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_1695;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4185;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4182;
        if (_RESERVED_IDENTIFIER_FIXUP_1695 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1704 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3510 = _RESERVED_IDENTIFIER_FIXUP_3337;
            _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_1704.x;
            _RESERVED_IDENTIFIER_FIXUP_3510.z = _RESERVED_IDENTIFIER_FIXUP_1704.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1714 = _RESERVED_IDENTIFIER_FIXUP_3510.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3514;
            _RESERVED_IDENTIFIER_FIXUP_3514.x = _RESERVED_IDENTIFIER_FIXUP_1714.x;
            _RESERVED_IDENTIFIER_FIXUP_3514.y = _RESERVED_IDENTIFIER_FIXUP_1714.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1724 = _RESERVED_IDENTIFIER_FIXUP_3510.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3518;
            _RESERVED_IDENTIFIER_FIXUP_3518.x = _RESERVED_IDENTIFIER_FIXUP_1724.x;
            _RESERVED_IDENTIFIER_FIXUP_3518.y = _RESERVED_IDENTIFIER_FIXUP_1724.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1734 = _RESERVED_IDENTIFIER_FIXUP_3510.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3522;
            _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_1734.x;
            _RESERVED_IDENTIFIER_FIXUP_3522.y = _RESERVED_IDENTIFIER_FIXUP_1734.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_3510.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3526;
            _RESERVED_IDENTIFIER_FIXUP_3526.x = _RESERVED_IDENTIFIER_FIXUP_1744.x;
            _RESERVED_IDENTIFIER_FIXUP_3526.y = _RESERVED_IDENTIFIER_FIXUP_1744.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1752 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1752.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1752.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1758 = hdLod6(param_21, param_22);
            _RESERVED_IDENTIFIER_FIXUP_3514.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3518.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3522.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3526.w = 0.0;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3514.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1758.y = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3518.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1758.z = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3522.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1758.w = hdLod6(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1815 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1758 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3526.xy;
            float param_30 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1821 = hdLod6(param_29, param_30).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_1821;
            float _RESERVED_IDENTIFIER_FIXUP_1826 = float(_RESERVED_IDENTIFIER_FIXUP_1821 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_1826;
            float _RESERVED_IDENTIFIER_FIXUP_1829 = dot(_RESERVED_IDENTIFIER_FIXUP_1815, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3510.z = _RESERVED_IDENTIFIER_FIXUP_1829;
            float _RESERVED_IDENTIFIER_FIXUP_1835 = _RESERVED_IDENTIFIER_FIXUP_1826 + _RESERVED_IDENTIFIER_FIXUP_1829;
            _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_1835;
            _RESERVED_IDENTIFIER_FIXUP_3510.x = _RESERVED_IDENTIFIER_FIXUP_1835 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4185 = _RESERVED_IDENTIFIER_FIXUP_1815;
            _RESERVED_IDENTIFIER_FIXUP_4182 = _RESERVED_IDENTIFIER_FIXUP_3510;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1848 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3354 = _RESERVED_IDENTIFIER_FIXUP_3337;
            _RESERVED_IDENTIFIER_FIXUP_3354.y = _RESERVED_IDENTIFIER_FIXUP_1848;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4186;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4183;
            if (_RESERVED_IDENTIFIER_FIXUP_1848 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1857 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3444 = _RESERVED_IDENTIFIER_FIXUP_3354;
                _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_1857.x;
                _RESERVED_IDENTIFIER_FIXUP_3444.z = _RESERVED_IDENTIFIER_FIXUP_1857.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1867 = _RESERVED_IDENTIFIER_FIXUP_3444.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
                _RESERVED_IDENTIFIER_FIXUP_3448.x = _RESERVED_IDENTIFIER_FIXUP_1867.x;
                _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_1867.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1877 = _RESERVED_IDENTIFIER_FIXUP_3444.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3452;
                _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_1877.x;
                _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_1877.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1887 = _RESERVED_IDENTIFIER_FIXUP_3444.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3456;
                _RESERVED_IDENTIFIER_FIXUP_3456.x = _RESERVED_IDENTIFIER_FIXUP_1887.x;
                _RESERVED_IDENTIFIER_FIXUP_3456.y = _RESERVED_IDENTIFIER_FIXUP_1887.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1897 = _RESERVED_IDENTIFIER_FIXUP_3444.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3460;
                _RESERVED_IDENTIFIER_FIXUP_3460.x = _RESERVED_IDENTIFIER_FIXUP_1897.x;
                _RESERVED_IDENTIFIER_FIXUP_3460.y = _RESERVED_IDENTIFIER_FIXUP_1897.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1905 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1905.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1905.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1911 = hdLod7(param_31, param_32);
                _RESERVED_IDENTIFIER_FIXUP_3448.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3452.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3456.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3460.w = 0.0;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3448.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1911.y = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3452.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1911.z = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3456.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1911.w = hdLod7(param_37, param_38).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1968 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1911 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3460.xy;
                float param_40 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1974 = hdLod7(param_39, param_40).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_1974;
                float _RESERVED_IDENTIFIER_FIXUP_1979 = float(_RESERVED_IDENTIFIER_FIXUP_1974 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_1979;
                float _RESERVED_IDENTIFIER_FIXUP_1982 = dot(_RESERVED_IDENTIFIER_FIXUP_1968, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3444.z = _RESERVED_IDENTIFIER_FIXUP_1982;
                float _RESERVED_IDENTIFIER_FIXUP_1988 = _RESERVED_IDENTIFIER_FIXUP_1979 + _RESERVED_IDENTIFIER_FIXUP_1982;
                _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_1988;
                _RESERVED_IDENTIFIER_FIXUP_3444.x = _RESERVED_IDENTIFIER_FIXUP_1988 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4186 = _RESERVED_IDENTIFIER_FIXUP_1968;
                _RESERVED_IDENTIFIER_FIXUP_4183 = _RESERVED_IDENTIFIER_FIXUP_3444;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_3324;
                _RESERVED_IDENTIFIER_FIXUP_3358.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3358.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2004 = (_RESERVED_IDENTIFIER_FIXUP_3358.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3363;
                _RESERVED_IDENTIFIER_FIXUP_3363.x = _RESERVED_IDENTIFIER_FIXUP_2004.x;
                _RESERVED_IDENTIFIER_FIXUP_3363.y = _RESERVED_IDENTIFIER_FIXUP_2004.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2014 = _RESERVED_IDENTIFIER_FIXUP_3363.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3367;
                _RESERVED_IDENTIFIER_FIXUP_3367.x = _RESERVED_IDENTIFIER_FIXUP_2014.x;
                _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_2014.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2024 = _RESERVED_IDENTIFIER_FIXUP_3363.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3371;
                _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_2024.x;
                _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_2024.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2034 = _RESERVED_IDENTIFIER_FIXUP_3363.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3375;
                _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_2034.x;
                _RESERVED_IDENTIFIER_FIXUP_3375.y = _RESERVED_IDENTIFIER_FIXUP_2034.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2044 = _RESERVED_IDENTIFIER_FIXUP_3363.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3379;
                _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_2044.x;
                _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_2044.y;
                _RESERVED_IDENTIFIER_FIXUP_3363.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3363.xy;
                float param_42 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2058 = hdLod8(param_41, param_42);
                _RESERVED_IDENTIFIER_FIXUP_3367.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3371.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3375.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3379.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3367.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2058.y = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3371.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2058.z = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3375.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2058.w = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3379.xy;
                float param_50 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2121 = hdLod8(param_49, param_50).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3419 = _RESERVED_IDENTIFIER_FIXUP_3354;
                _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_2121;
                float _RESERVED_IDENTIFIER_FIXUP_2126 = float(_RESERVED_IDENTIFIER_FIXUP_2121 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_2126;
                float _RESERVED_IDENTIFIER_FIXUP_2129 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2058 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3419.z = _RESERVED_IDENTIFIER_FIXUP_2129;
                float _RESERVED_IDENTIFIER_FIXUP_2135 = _RESERVED_IDENTIFIER_FIXUP_2126 + _RESERVED_IDENTIFIER_FIXUP_2129;
                _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_2135;
                float _RESERVED_IDENTIFIER_FIXUP_2143 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3419.z = _RESERVED_IDENTIFIER_FIXUP_2143;
                float _RESERVED_IDENTIFIER_FIXUP_2149 = clamp((_RESERVED_IDENTIFIER_FIXUP_2143 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3419.z = _RESERVED_IDENTIFIER_FIXUP_2149;
                float _RESERVED_IDENTIFIER_FIXUP_2154 = (_RESERVED_IDENTIFIER_FIXUP_2135 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_2154;
                _RESERVED_IDENTIFIER_FIXUP_3419.x = (_RESERVED_IDENTIFIER_FIXUP_2149 * _RESERVED_IDENTIFIER_FIXUP_2154) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4186 = _RESERVED_IDENTIFIER_FIXUP_3358;
                _RESERVED_IDENTIFIER_FIXUP_4183 = _RESERVED_IDENTIFIER_FIXUP_3419;
            }
            _RESERVED_IDENTIFIER_FIXUP_4185 = _RESERVED_IDENTIFIER_FIXUP_4186;
            _RESERVED_IDENTIFIER_FIXUP_4182 = _RESERVED_IDENTIFIER_FIXUP_4183;
        }
        _RESERVED_IDENTIFIER_FIXUP_4184 = _RESERVED_IDENTIFIER_FIXUP_4185;
        _RESERVED_IDENTIFIER_FIXUP_4181 = _RESERVED_IDENTIFIER_FIXUP_4182;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3696 = _RESERVED_IDENTIFIER_FIXUP_4181;
    _RESERVED_IDENTIFIER_FIXUP_3696.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3698 = _RESERVED_IDENTIFIER_FIXUP_4184;
    _RESERVED_IDENTIFIER_FIXUP_3698.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3698.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3698.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2193 = _RESERVED_IDENTIFIER_FIXUP_3696.xxx * _RESERVED_IDENTIFIER_FIXUP_3698.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4206 = vec4(_RESERVED_IDENTIFIER_FIXUP_2193.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2193.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2207 = (_RESERVED_IDENTIFIER_FIXUP_1414.xyz * _RESERVED_IDENTIFIER_FIXUP_4206.yyy) + _RESERVED_IDENTIFIER_FIXUP_4206.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3710 = _RESERVED_IDENTIFIER_FIXUP_1414;
    _RESERVED_IDENTIFIER_FIXUP_3710.x = _RESERVED_IDENTIFIER_FIXUP_2207.x;
    _RESERVED_IDENTIFIER_FIXUP_3710.y = _RESERVED_IDENTIFIER_FIXUP_2207.y;
    _RESERVED_IDENTIFIER_FIXUP_3710.z = _RESERVED_IDENTIFIER_FIXUP_2207.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2220 = _RESERVED_IDENTIFIER_FIXUP_3710.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3716 = _RESERVED_IDENTIFIER_FIXUP_3710;
    _RESERVED_IDENTIFIER_FIXUP_3716.x = _RESERVED_IDENTIFIER_FIXUP_2220.x;
    _RESERVED_IDENTIFIER_FIXUP_3716.y = _RESERVED_IDENTIFIER_FIXUP_2220.y;
    _RESERVED_IDENTIFIER_FIXUP_3716.z = _RESERVED_IDENTIFIER_FIXUP_2220.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2279 = OptTex0( texcoord0.xyz);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2283 = hdTex1(param_51);
    vec2 param_52 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2287 = hdTex2(param_52);
    vec2 param_53 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2291 = hdTex3(param_53);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2306 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3736 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3736.x = _RESERVED_IDENTIFIER_FIXUP_2306.x;
    _RESERVED_IDENTIFIER_FIXUP_3736.y = _RESERVED_IDENTIFIER_FIXUP_2306.y;
    _RESERVED_IDENTIFIER_FIXUP_3736.z = _RESERVED_IDENTIFIER_FIXUP_2306.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2314 = _RESERVED_IDENTIFIER_FIXUP_2279.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2317 = _RESERVED_IDENTIFIER_FIXUP_2314 * _RESERVED_IDENTIFIER_FIXUP_3736.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3742 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2317.x;
    _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2317.y;
    _RESERVED_IDENTIFIER_FIXUP_3742.z = _RESERVED_IDENTIFIER_FIXUP_2317.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2332 = mix(_RESERVED_IDENTIFIER_FIXUP_3742.xyz, _RESERVED_IDENTIFIER_FIXUP_2314, _RESERVED_IDENTIFIER_FIXUP_1329);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3748 = _RESERVED_IDENTIFIER_FIXUP_2279;
    _RESERVED_IDENTIFIER_FIXUP_3748.x = _RESERVED_IDENTIFIER_FIXUP_2332.x;
    _RESERVED_IDENTIFIER_FIXUP_3748.y = _RESERVED_IDENTIFIER_FIXUP_2332.y;
    _RESERVED_IDENTIFIER_FIXUP_3748.z = _RESERVED_IDENTIFIER_FIXUP_2332.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2340 = _RESERVED_IDENTIFIER_FIXUP_2283.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2343 = _RESERVED_IDENTIFIER_FIXUP_2340 * _RESERVED_IDENTIFIER_FIXUP_3736.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2343.x;
    _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2343.y;
    _RESERVED_IDENTIFIER_FIXUP_3742.z = _RESERVED_IDENTIFIER_FIXUP_2343.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2358 = mix(_RESERVED_IDENTIFIER_FIXUP_3742.xyz, _RESERVED_IDENTIFIER_FIXUP_2340, _RESERVED_IDENTIFIER_FIXUP_1355);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3760 = _RESERVED_IDENTIFIER_FIXUP_2283;
    _RESERVED_IDENTIFIER_FIXUP_3760.x = _RESERVED_IDENTIFIER_FIXUP_2358.x;
    _RESERVED_IDENTIFIER_FIXUP_3760.y = _RESERVED_IDENTIFIER_FIXUP_2358.y;
    _RESERVED_IDENTIFIER_FIXUP_3760.z = _RESERVED_IDENTIFIER_FIXUP_2358.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2366 = _RESERVED_IDENTIFIER_FIXUP_2287.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2369 = _RESERVED_IDENTIFIER_FIXUP_2366 * _RESERVED_IDENTIFIER_FIXUP_3736.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4208 = vec4(_RESERVED_IDENTIFIER_FIXUP_2369.xy, _RESERVED_IDENTIFIER_FIXUP_1299, _RESERVED_IDENTIFIER_FIXUP_2369.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2384 = mix(_RESERVED_IDENTIFIER_FIXUP_4208.xyw, _RESERVED_IDENTIFIER_FIXUP_2366, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4208.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3772 = _RESERVED_IDENTIFIER_FIXUP_2287;
    _RESERVED_IDENTIFIER_FIXUP_3772.x = _RESERVED_IDENTIFIER_FIXUP_2384.x;
    _RESERVED_IDENTIFIER_FIXUP_3772.y = _RESERVED_IDENTIFIER_FIXUP_2384.y;
    _RESERVED_IDENTIFIER_FIXUP_3772.z = _RESERVED_IDENTIFIER_FIXUP_2384.z;
    float _RESERVED_IDENTIFIER_FIXUP_2394 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2291.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3778 = _RESERVED_IDENTIFIER_FIXUP_2291;
    _RESERVED_IDENTIFIER_FIXUP_3778.z = _RESERVED_IDENTIFIER_FIXUP_2394;
    _RESERVED_IDENTIFIER_FIXUP_3778.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2394;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2404 = _RESERVED_IDENTIFIER_FIXUP_3778.xxxx * _RESERVED_IDENTIFIER_FIXUP_3760;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2416 = (_RESERVED_IDENTIFIER_FIXUP_3772 * _RESERVED_IDENTIFIER_FIXUP_3778.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3748 * _RESERVED_IDENTIFIER_FIXUP_3778.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2404);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3785 = _RESERVED_IDENTIFIER_FIXUP_2404;
    _RESERVED_IDENTIFIER_FIXUP_3785.x = _RESERVED_IDENTIFIER_FIXUP_1421;
    float _RESERVED_IDENTIFIER_FIXUP_2429 = clamp((_RESERVED_IDENTIFIER_FIXUP_1421 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3785.x = _RESERVED_IDENTIFIER_FIXUP_2429;
    float _RESERVED_IDENTIFIER_FIXUP_2435 = ((-_RESERVED_IDENTIFIER_FIXUP_2429) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3785.x = _RESERVED_IDENTIFIER_FIXUP_2435;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4199;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4193;
    if (_RESERVED_IDENTIFIER_FIXUP_2435 != (-_RESERVED_IDENTIFIER_FIXUP_2435))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2447 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_4024;
        _RESERVED_IDENTIFIER_FIXUP_4024.x = _RESERVED_IDENTIFIER_FIXUP_2447.x;
        _RESERVED_IDENTIFIER_FIXUP_4024.y = _RESERVED_IDENTIFIER_FIXUP_2447.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2457 = _RESERVED_IDENTIFIER_FIXUP_4024.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4028;
        _RESERVED_IDENTIFIER_FIXUP_4028.x = _RESERVED_IDENTIFIER_FIXUP_2457.x;
        _RESERVED_IDENTIFIER_FIXUP_4028.y = _RESERVED_IDENTIFIER_FIXUP_2457.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2467 = _RESERVED_IDENTIFIER_FIXUP_4024.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4032;
        _RESERVED_IDENTIFIER_FIXUP_4032.x = _RESERVED_IDENTIFIER_FIXUP_2467.x;
        _RESERVED_IDENTIFIER_FIXUP_4032.y = _RESERVED_IDENTIFIER_FIXUP_2467.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2477 = _RESERVED_IDENTIFIER_FIXUP_4024.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4036;
        _RESERVED_IDENTIFIER_FIXUP_4036.x = _RESERVED_IDENTIFIER_FIXUP_2477.x;
        _RESERVED_IDENTIFIER_FIXUP_4036.y = _RESERVED_IDENTIFIER_FIXUP_2477.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2487 = _RESERVED_IDENTIFIER_FIXUP_4024.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4040;
        _RESERVED_IDENTIFIER_FIXUP_4040.x = _RESERVED_IDENTIFIER_FIXUP_2487.x;
        _RESERVED_IDENTIFIER_FIXUP_4040.y = _RESERVED_IDENTIFIER_FIXUP_2487.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2497 = _RESERVED_IDENTIFIER_FIXUP_4024.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4044;
        _RESERVED_IDENTIFIER_FIXUP_4044.x = _RESERVED_IDENTIFIER_FIXUP_2497.x;
        _RESERVED_IDENTIFIER_FIXUP_4044.y = _RESERVED_IDENTIFIER_FIXUP_2497.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2507 = _RESERVED_IDENTIFIER_FIXUP_4024.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4048;
        _RESERVED_IDENTIFIER_FIXUP_4048.x = _RESERVED_IDENTIFIER_FIXUP_2507.x;
        _RESERVED_IDENTIFIER_FIXUP_4048.y = _RESERVED_IDENTIFIER_FIXUP_2507.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2517 = _RESERVED_IDENTIFIER_FIXUP_4024.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4052;
        _RESERVED_IDENTIFIER_FIXUP_4052.x = _RESERVED_IDENTIFIER_FIXUP_2517.x;
        _RESERVED_IDENTIFIER_FIXUP_4052.y = _RESERVED_IDENTIFIER_FIXUP_2517.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2527 = _RESERVED_IDENTIFIER_FIXUP_4024.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4056;
        _RESERVED_IDENTIFIER_FIXUP_4056.x = _RESERVED_IDENTIFIER_FIXUP_2527.x;
        _RESERVED_IDENTIFIER_FIXUP_4056.y = _RESERVED_IDENTIFIER_FIXUP_2527.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2535 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2535.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2535.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2541 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_4028.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4032.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4036.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4040.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_4040.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2581 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_4044.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4048.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4052.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_4056.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_4056.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2621 = hdLod5(param_58, param_59);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_4028.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2541.y = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_4032.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2541.z = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_4036.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2541.w = hdLod5(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2638 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2541 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_4044.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2581.y = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_4048.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2581.z = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4052.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2581.w = hdLod5(param_70, param_71).x;
        float _RESERVED_IDENTIFIER_FIXUP_2661 = _RESERVED_IDENTIFIER_FIXUP_2621.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4121 = _RESERVED_IDENTIFIER_FIXUP_2621;
        _RESERVED_IDENTIFIER_FIXUP_4121.x = _RESERVED_IDENTIFIER_FIXUP_2661;
        float _RESERVED_IDENTIFIER_FIXUP_2666 = float(_RESERVED_IDENTIFIER_FIXUP_2661 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_4121.x = _RESERVED_IDENTIFIER_FIXUP_2666;
        float _RESERVED_IDENTIFIER_FIXUP_2669 = dot(_RESERVED_IDENTIFIER_FIXUP_2638, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4121.y = _RESERVED_IDENTIFIER_FIXUP_2669;
        float _RESERVED_IDENTIFIER_FIXUP_2672 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2581 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4121.z = _RESERVED_IDENTIFIER_FIXUP_2672;
        float _RESERVED_IDENTIFIER_FIXUP_2678 = _RESERVED_IDENTIFIER_FIXUP_2669 + _RESERVED_IDENTIFIER_FIXUP_2672;
        _RESERVED_IDENTIFIER_FIXUP_4121.y = _RESERVED_IDENTIFIER_FIXUP_2678;
        float _RESERVED_IDENTIFIER_FIXUP_2684 = _RESERVED_IDENTIFIER_FIXUP_2666 + _RESERVED_IDENTIFIER_FIXUP_2678;
        _RESERVED_IDENTIFIER_FIXUP_4121.x = _RESERVED_IDENTIFIER_FIXUP_2684;
        _RESERVED_IDENTIFIER_FIXUP_4121.x = _RESERVED_IDENTIFIER_FIXUP_2684 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4199 = _RESERVED_IDENTIFIER_FIXUP_2638;
        _RESERVED_IDENTIFIER_FIXUP_4193 = _RESERVED_IDENTIFIER_FIXUP_4121;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2697 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3785.y = _RESERVED_IDENTIFIER_FIXUP_2697;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4200;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4194;
        if (_RESERVED_IDENTIFIER_FIXUP_2697 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2706 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3958 = _RESERVED_IDENTIFIER_FIXUP_3785;
            _RESERVED_IDENTIFIER_FIXUP_3958.y = _RESERVED_IDENTIFIER_FIXUP_2706.x;
            _RESERVED_IDENTIFIER_FIXUP_3958.z = _RESERVED_IDENTIFIER_FIXUP_2706.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2716 = _RESERVED_IDENTIFIER_FIXUP_3958.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3962;
            _RESERVED_IDENTIFIER_FIXUP_3962.x = _RESERVED_IDENTIFIER_FIXUP_2716.x;
            _RESERVED_IDENTIFIER_FIXUP_3962.y = _RESERVED_IDENTIFIER_FIXUP_2716.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2726 = _RESERVED_IDENTIFIER_FIXUP_3958.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3966;
            _RESERVED_IDENTIFIER_FIXUP_3966.x = _RESERVED_IDENTIFIER_FIXUP_2726.x;
            _RESERVED_IDENTIFIER_FIXUP_3966.y = _RESERVED_IDENTIFIER_FIXUP_2726.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2736 = _RESERVED_IDENTIFIER_FIXUP_3958.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3970;
            _RESERVED_IDENTIFIER_FIXUP_3970.x = _RESERVED_IDENTIFIER_FIXUP_2736.x;
            _RESERVED_IDENTIFIER_FIXUP_3970.y = _RESERVED_IDENTIFIER_FIXUP_2736.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2746 = _RESERVED_IDENTIFIER_FIXUP_3958.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3974;
            _RESERVED_IDENTIFIER_FIXUP_3974.x = _RESERVED_IDENTIFIER_FIXUP_2746.x;
            _RESERVED_IDENTIFIER_FIXUP_3974.y = _RESERVED_IDENTIFIER_FIXUP_2746.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2754 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2754.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2754.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2760 = hdLod6(param_72, param_73);
            _RESERVED_IDENTIFIER_FIXUP_3962.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3966.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3970.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3974.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3962.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2760.y = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3966.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2760.z = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3970.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2760.w = hdLod6(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2817 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2760 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3974.xy;
            float param_81 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2823 = hdLod6(param_80, param_81).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3958.y = _RESERVED_IDENTIFIER_FIXUP_2823;
            float _RESERVED_IDENTIFIER_FIXUP_2828 = float(_RESERVED_IDENTIFIER_FIXUP_2823 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3958.y = _RESERVED_IDENTIFIER_FIXUP_2828;
            float _RESERVED_IDENTIFIER_FIXUP_2831 = dot(_RESERVED_IDENTIFIER_FIXUP_2817, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3958.z = _RESERVED_IDENTIFIER_FIXUP_2831;
            float _RESERVED_IDENTIFIER_FIXUP_2837 = _RESERVED_IDENTIFIER_FIXUP_2828 + _RESERVED_IDENTIFIER_FIXUP_2831;
            _RESERVED_IDENTIFIER_FIXUP_3958.y = _RESERVED_IDENTIFIER_FIXUP_2837;
            _RESERVED_IDENTIFIER_FIXUP_3958.x = _RESERVED_IDENTIFIER_FIXUP_2837 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4200 = _RESERVED_IDENTIFIER_FIXUP_2817;
            _RESERVED_IDENTIFIER_FIXUP_4194 = _RESERVED_IDENTIFIER_FIXUP_3958;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2850 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3802 = _RESERVED_IDENTIFIER_FIXUP_3785;
            _RESERVED_IDENTIFIER_FIXUP_3802.y = _RESERVED_IDENTIFIER_FIXUP_2850;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4201;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4195;
            if (_RESERVED_IDENTIFIER_FIXUP_2850 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2859 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3892 = _RESERVED_IDENTIFIER_FIXUP_3802;
                _RESERVED_IDENTIFIER_FIXUP_3892.y = _RESERVED_IDENTIFIER_FIXUP_2859.x;
                _RESERVED_IDENTIFIER_FIXUP_3892.z = _RESERVED_IDENTIFIER_FIXUP_2859.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2869 = _RESERVED_IDENTIFIER_FIXUP_3892.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3896;
                _RESERVED_IDENTIFIER_FIXUP_3896.x = _RESERVED_IDENTIFIER_FIXUP_2869.x;
                _RESERVED_IDENTIFIER_FIXUP_3896.y = _RESERVED_IDENTIFIER_FIXUP_2869.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2879 = _RESERVED_IDENTIFIER_FIXUP_3892.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3900;
                _RESERVED_IDENTIFIER_FIXUP_3900.x = _RESERVED_IDENTIFIER_FIXUP_2879.x;
                _RESERVED_IDENTIFIER_FIXUP_3900.y = _RESERVED_IDENTIFIER_FIXUP_2879.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2889 = _RESERVED_IDENTIFIER_FIXUP_3892.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3904;
                _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2889.x;
                _RESERVED_IDENTIFIER_FIXUP_3904.y = _RESERVED_IDENTIFIER_FIXUP_2889.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2899 = _RESERVED_IDENTIFIER_FIXUP_3892.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3908;
                _RESERVED_IDENTIFIER_FIXUP_3908.x = _RESERVED_IDENTIFIER_FIXUP_2899.x;
                _RESERVED_IDENTIFIER_FIXUP_3908.y = _RESERVED_IDENTIFIER_FIXUP_2899.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2907 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2907.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2907.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2913 = hdLod7(param_82, param_83);
                _RESERVED_IDENTIFIER_FIXUP_3896.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3900.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3904.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3908.w = 0.0;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3896.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2913.y = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3900.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2913.z = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3904.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2913.w = hdLod7(param_88, param_89).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2970 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2913 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3908.xy;
                float param_91 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2976 = hdLod7(param_90, param_91).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3892.y = _RESERVED_IDENTIFIER_FIXUP_2976;
                float _RESERVED_IDENTIFIER_FIXUP_2981 = float(_RESERVED_IDENTIFIER_FIXUP_2976 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3892.y = _RESERVED_IDENTIFIER_FIXUP_2981;
                float _RESERVED_IDENTIFIER_FIXUP_2984 = dot(_RESERVED_IDENTIFIER_FIXUP_2970, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3892.z = _RESERVED_IDENTIFIER_FIXUP_2984;
                float _RESERVED_IDENTIFIER_FIXUP_2990 = _RESERVED_IDENTIFIER_FIXUP_2981 + _RESERVED_IDENTIFIER_FIXUP_2984;
                _RESERVED_IDENTIFIER_FIXUP_3892.y = _RESERVED_IDENTIFIER_FIXUP_2990;
                _RESERVED_IDENTIFIER_FIXUP_3892.x = _RESERVED_IDENTIFIER_FIXUP_2990 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4201 = _RESERVED_IDENTIFIER_FIXUP_2970;
                _RESERVED_IDENTIFIER_FIXUP_4195 = _RESERVED_IDENTIFIER_FIXUP_3892;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3806 = _RESERVED_IDENTIFIER_FIXUP_3772;
                _RESERVED_IDENTIFIER_FIXUP_3806.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3806.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3006 = (_RESERVED_IDENTIFIER_FIXUP_3806.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3811;
                _RESERVED_IDENTIFIER_FIXUP_3811.x = _RESERVED_IDENTIFIER_FIXUP_3006.x;
                _RESERVED_IDENTIFIER_FIXUP_3811.y = _RESERVED_IDENTIFIER_FIXUP_3006.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3016 = _RESERVED_IDENTIFIER_FIXUP_3811.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3815;
                _RESERVED_IDENTIFIER_FIXUP_3815.x = _RESERVED_IDENTIFIER_FIXUP_3016.x;
                _RESERVED_IDENTIFIER_FIXUP_3815.y = _RESERVED_IDENTIFIER_FIXUP_3016.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3026 = _RESERVED_IDENTIFIER_FIXUP_3811.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3819;
                _RESERVED_IDENTIFIER_FIXUP_3819.x = _RESERVED_IDENTIFIER_FIXUP_3026.x;
                _RESERVED_IDENTIFIER_FIXUP_3819.y = _RESERVED_IDENTIFIER_FIXUP_3026.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3036 = _RESERVED_IDENTIFIER_FIXUP_3811.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3823;
                _RESERVED_IDENTIFIER_FIXUP_3823.x = _RESERVED_IDENTIFIER_FIXUP_3036.x;
                _RESERVED_IDENTIFIER_FIXUP_3823.y = _RESERVED_IDENTIFIER_FIXUP_3036.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3046 = _RESERVED_IDENTIFIER_FIXUP_3811.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3827;
                _RESERVED_IDENTIFIER_FIXUP_3827.x = _RESERVED_IDENTIFIER_FIXUP_3046.x;
                _RESERVED_IDENTIFIER_FIXUP_3827.y = _RESERVED_IDENTIFIER_FIXUP_3046.y;
                _RESERVED_IDENTIFIER_FIXUP_3811.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3811.xy;
                float param_93 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3060 = hdLod8(param_92, param_93);
                _RESERVED_IDENTIFIER_FIXUP_3815.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3819.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3823.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3827.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3815.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3060.y = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3819.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3060.z = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3823.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3060.w = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3827.xy;
                float param_101 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3123 = hdLod8(param_100, param_101).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3867 = _RESERVED_IDENTIFIER_FIXUP_3802;
                _RESERVED_IDENTIFIER_FIXUP_3867.y = _RESERVED_IDENTIFIER_FIXUP_3123;
                float _RESERVED_IDENTIFIER_FIXUP_3128 = float(_RESERVED_IDENTIFIER_FIXUP_3123 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3867.y = _RESERVED_IDENTIFIER_FIXUP_3128;
                float _RESERVED_IDENTIFIER_FIXUP_3131 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_3060 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3867.z = _RESERVED_IDENTIFIER_FIXUP_3131;
                float _RESERVED_IDENTIFIER_FIXUP_3137 = _RESERVED_IDENTIFIER_FIXUP_3128 + _RESERVED_IDENTIFIER_FIXUP_3131;
                _RESERVED_IDENTIFIER_FIXUP_3867.y = _RESERVED_IDENTIFIER_FIXUP_3137;
                float _RESERVED_IDENTIFIER_FIXUP_3145 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3867.z = _RESERVED_IDENTIFIER_FIXUP_3145;
                float _RESERVED_IDENTIFIER_FIXUP_3151 = clamp((_RESERVED_IDENTIFIER_FIXUP_3145 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3867.z = _RESERVED_IDENTIFIER_FIXUP_3151;
                float _RESERVED_IDENTIFIER_FIXUP_3156 = (_RESERVED_IDENTIFIER_FIXUP_3137 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3867.y = _RESERVED_IDENTIFIER_FIXUP_3156;
                _RESERVED_IDENTIFIER_FIXUP_3867.x = (_RESERVED_IDENTIFIER_FIXUP_3151 * _RESERVED_IDENTIFIER_FIXUP_3156) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4201 = _RESERVED_IDENTIFIER_FIXUP_3806;
                _RESERVED_IDENTIFIER_FIXUP_4195 = _RESERVED_IDENTIFIER_FIXUP_3867;
            }
            _RESERVED_IDENTIFIER_FIXUP_4200 = _RESERVED_IDENTIFIER_FIXUP_4201;
            _RESERVED_IDENTIFIER_FIXUP_4194 = _RESERVED_IDENTIFIER_FIXUP_4195;
        }
        _RESERVED_IDENTIFIER_FIXUP_4199 = _RESERVED_IDENTIFIER_FIXUP_4200;
        _RESERVED_IDENTIFIER_FIXUP_4193 = _RESERVED_IDENTIFIER_FIXUP_4194;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3171 = (_RESERVED_IDENTIFIER_FIXUP_4193.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4142 = _RESERVED_IDENTIFIER_FIXUP_4193;
    _RESERVED_IDENTIFIER_FIXUP_4142.y = _RESERVED_IDENTIFIER_FIXUP_3171;
    _RESERVED_IDENTIFIER_FIXUP_4142.y = _RESERVED_IDENTIFIER_FIXUP_3171;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3184 = _RESERVED_IDENTIFIER_FIXUP_2416.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4148 = _RESERVED_IDENTIFIER_FIXUP_4199;
    _RESERVED_IDENTIFIER_FIXUP_4148.x = _RESERVED_IDENTIFIER_FIXUP_3184.x;
    _RESERVED_IDENTIFIER_FIXUP_4148.y = _RESERVED_IDENTIFIER_FIXUP_3184.y;
    _RESERVED_IDENTIFIER_FIXUP_4148.z = _RESERVED_IDENTIFIER_FIXUP_3184.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3195 = _RESERVED_IDENTIFIER_FIXUP_4142.xxx * _RESERVED_IDENTIFIER_FIXUP_4148.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4209 = vec4(_RESERVED_IDENTIFIER_FIXUP_3195.x, _RESERVED_IDENTIFIER_FIXUP_3171, _RESERVED_IDENTIFIER_FIXUP_3195.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3209 = (_RESERVED_IDENTIFIER_FIXUP_2416.xyz * _RESERVED_IDENTIFIER_FIXUP_4209.yyy) + _RESERVED_IDENTIFIER_FIXUP_4209.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4160 = _RESERVED_IDENTIFIER_FIXUP_2416;
    _RESERVED_IDENTIFIER_FIXUP_4160.x = _RESERVED_IDENTIFIER_FIXUP_3209.x;
    _RESERVED_IDENTIFIER_FIXUP_4160.y = _RESERVED_IDENTIFIER_FIXUP_3209.y;
    _RESERVED_IDENTIFIER_FIXUP_4160.z = _RESERVED_IDENTIFIER_FIXUP_3209.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3222 = _RESERVED_IDENTIFIER_FIXUP_4160.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4166 = _RESERVED_IDENTIFIER_FIXUP_4160;
    _RESERVED_IDENTIFIER_FIXUP_4166.x = _RESERVED_IDENTIFIER_FIXUP_3222.x;
    _RESERVED_IDENTIFIER_FIXUP_4166.y = _RESERVED_IDENTIFIER_FIXUP_3222.y;
    _RESERVED_IDENTIFIER_FIXUP_4166.z = _RESERVED_IDENTIFIER_FIXUP_3222.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4166.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1133 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1142;
    if (_RESERVED_IDENTIFIER_FIXUP_1133)
    {
        _RESERVED_IDENTIFIER_FIXUP_1142 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1142 = _RESERVED_IDENTIFIER_FIXUP_1133;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1142)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1179 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3716.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1205 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3275;
    if (_RESERVED_IDENTIFIER_FIXUP_1179 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3275 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1179), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1205);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3275 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1205);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3275;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3171);
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
    vec3 hdB96 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB96.x;
    r4.y = hdB96.y;
    r4.z = hdB96.z;
    vec3 hdB111 = v0.xyz + v0.xyz;
    r5.x = hdB111.x;
    r5.y = hdB111.y;
    r5.z = hdB111.z;
    vec3 hdB122 = r0.xyz * r5.xyz;
    r6.x = hdB122.x;
    r6.y = hdB122.y;
    r6.z = hdB122.z;
    vec4 hdB131 = r0;
    vec3 hdB140 = mix(r6.xyz, hdB131.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB140.x;
    r0.y = hdB140.y;
    r0.z = hdB140.z;
    vec3 hdB151 = r1.xyz * r5.xyz;
    r6.x = hdB151.x;
    r6.y = hdB151.y;
    r6.z = hdB151.z;
    vec4 hdB160 = r1;
    vec3 hdB166 = mix(r6.xyz, hdB160.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB166.x;
    r1.y = hdB166.y;
    r1.z = hdB166.z;
    vec3 hdB177 = r2.xyz * r5.xyz;
    r4.x = hdB177.x;
    r4.y = hdB177.y;
    r4.w = hdB177.z;
    vec4 hdB187 = r2;
    vec3 hdB193 = mix(r4.xyw, hdB187.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB193.x;
    r2.y = hdB193.y;
    r2.z = hdB193.z;
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
        vec2 hdB263 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB263.x;
        r1.y = hdB263.y;
        vec2 hdB274 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB274.x;
        r2.y = hdB274.y;
        vec2 hdB285 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB285.x;
        r3.y = hdB285.y;
        vec2 hdB296 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB296.x;
        r4.y = hdB296.y;
        vec2 hdB307 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB307.x;
        r5.y = hdB307.y;
        vec2 hdB318 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB318.x;
        r6.y = hdB318.y;
        vec2 hdB329 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB329.x;
        r7.y = hdB329.y;
        vec2 hdB340 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB340.x;
        r8.y = hdB340.y;
        vec4 hdB345 = r1;
        vec2 hdB351 = hdB345.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB351.x;
        r1.y = hdB351.y;
        r9 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r9.xy;
        float param_4 = r9.w;
        r9 = hdLod5(param_3, param_4);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_9 = r4.xy;
        float param_10 = r4.w;
        r4 = hdLod5(param_9, param_10);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_11 = r5.xy;
        float param_12 = r5.w;
        r5 = hdLod5(param_11, param_12);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod5(param_13, param_14);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_15 = r7.xy;
        float param_16 = r7.w;
        r7 = hdLod5(param_15, param_16);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_17 = r8.xy;
        float param_18 = r8.w;
        r8 = hdLod5(param_17, param_18);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_19 = r1.xy;
        float param_20 = r1.w;
        r1 = hdLod5(param_19, param_20);
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
            vec2 hdB537 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB537.x;
            r1.z = hdB537.y;
            vec2 hdB547 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB547.x;
            r2.y = hdB547.y;
            vec2 hdB557 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB557.x;
            r3.y = hdB557.y;
            vec2 hdB567 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB567.x;
            r4.y = hdB567.y;
            vec2 hdB577 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB577.x;
            r5.y = hdB577.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod6(param_21, param_22);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod6(param_25, param_26);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_27 = r4.xy;
            float param_28 = r4.w;
            r4 = hdLod6(param_27, param_28);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_29 = r5.xy;
            float param_30 = r5.w;
            r5 = hdLod6(param_29, param_30);
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
                vec2 hdB693 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB693.x;
                r1.z = hdB693.y;
                vec2 hdB703 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB703.x;
                r2.y = hdB703.y;
                vec2 hdB713 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB713.x;
                r3.y = hdB713.y;
                vec2 hdB723 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB723.x;
                r4.y = hdB723.y;
                vec2 hdB733 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB733.x;
                r5.y = hdB733.y;
                r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r6.xy;
                float param_32 = r6.w;
                r6 = hdLod7(param_31, param_32);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_35 = r3.xy;
                float param_36 = r3.w;
                r3 = hdLod7(param_35, param_36);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_37 = r4.xy;
                float param_38 = r4.w;
                r4 = hdLod7(param_37, param_38);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_39 = r5.xy;
                float param_40 = r5.w;
                r5 = hdLod7(param_39, param_40);
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
                vec2 hdB841 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB841.x;
                r3.y = hdB841.y;
                vec2 hdB851 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB851.x;
                r4.y = hdB851.y;
                vec2 hdB861 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB861.x;
                r5.y = hdB861.y;
                vec2 hdB871 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB871.x;
                r6.y = hdB871.y;
                vec2 hdB881 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB881.x;
                r7.y = hdB881.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_41 = r3.xy;
                float param_42 = r3.w;
                r3 = hdLod8(param_41, param_42);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r4 = hdLod8(param_43, param_44);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_45 = r5.xy;
                float param_46 = r5.w;
                r5 = hdLod8(param_45, param_46);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_47 = r6.xy;
                float param_48 = r6.w;
                r6 = hdLod8(param_47, param_48);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_49 = r7.xy;
                float param_50 = r7.w;
                r7 = hdLod8(param_49, param_50);
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
    vec3 hdB1015 = r0.www * v1.xyz;
    r2.x = hdB1015.x;
    r2.y = hdB1015.y;
    r2.z = hdB1015.z;
    vec4 hdB1022 = r1;
    vec3 hdB1026 = hdB1022.xxx * r2.xyz;
    r1.x = hdB1026.x;
    r1.z = hdB1026.y;
    r1.w = hdB1026.z;
    vec4 hdB1033 = r0;
    vec3 hdB1040 = (hdB1033.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB1040.x;
    r0.y = hdB1040.y;
    r0.z = hdB1040.z;
    vec4 hdB1047 = r0;
    vec3 hdB1054 = hdB1047.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1054.x;
    r0.y = hdB1054.y;
    r0.z = hdB1054.z;
    vec3 hdB1069 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1069.x;
    oC0.y = hdB1069.y;
    oC0.z = hdB1069.z;
    oC0.w = 1.0;
    bool hdB1081 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1089;
    if (hdB1081)
    {
        hdB1089 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1089 = hdB1081;
    }
    if (hdB1089)
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
    bool _3702 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3712;
    if (_3702)
    {
        _3712 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3712 = _3702;
    }
    if (_3712)
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
        bool _3737 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3752;
        if (!_3737)
        {
            _3752 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3752 = _3737;
        }
        if (_3752)
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
