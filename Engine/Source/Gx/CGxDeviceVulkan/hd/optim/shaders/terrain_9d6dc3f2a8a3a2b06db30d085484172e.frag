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
float _RESERVED_IDENTIFIER_FIXUP_4056;
vec4 _RESERVED_IDENTIFIER_FIXUP_4057;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1255 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1259 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1263 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1267 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1271 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3225 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3225.x = _RESERVED_IDENTIFIER_FIXUP_1271.x;
    _RESERVED_IDENTIFIER_FIXUP_3225.y = _RESERVED_IDENTIFIER_FIXUP_1271.y;
    float _RESERVED_IDENTIFIER_FIXUP_1277 = _RESERVED_IDENTIFIER_FIXUP_1271.z;
    _RESERVED_IDENTIFIER_FIXUP_3225.z = _RESERVED_IDENTIFIER_FIXUP_1277;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1279 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4056).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1282 = _RESERVED_IDENTIFIER_FIXUP_1279 + _RESERVED_IDENTIFIER_FIXUP_1279;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3231;
    _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_1282.x;
    _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_1282.y;
    _RESERVED_IDENTIFIER_FIXUP_3231.z = _RESERVED_IDENTIFIER_FIXUP_1282.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1290 = _RESERVED_IDENTIFIER_FIXUP_1255.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1293 = _RESERVED_IDENTIFIER_FIXUP_1290 * _RESERVED_IDENTIFIER_FIXUP_3231.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3237;
    _RESERVED_IDENTIFIER_FIXUP_3237.x = _RESERVED_IDENTIFIER_FIXUP_1293.x;
    _RESERVED_IDENTIFIER_FIXUP_3237.y = _RESERVED_IDENTIFIER_FIXUP_1293.y;
    _RESERVED_IDENTIFIER_FIXUP_3237.z = _RESERVED_IDENTIFIER_FIXUP_1293.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1307 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3225.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1308 = mix(_RESERVED_IDENTIFIER_FIXUP_3237.xyz, _RESERVED_IDENTIFIER_FIXUP_1290, _RESERVED_IDENTIFIER_FIXUP_1307);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3243 = _RESERVED_IDENTIFIER_FIXUP_1255;
    _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1308.x;
    _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_1308.y;
    _RESERVED_IDENTIFIER_FIXUP_3243.z = _RESERVED_IDENTIFIER_FIXUP_1308.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_1259.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_1316 * _RESERVED_IDENTIFIER_FIXUP_3231.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3249;
    _RESERVED_IDENTIFIER_FIXUP_3249.x = _RESERVED_IDENTIFIER_FIXUP_1319.x;
    _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_1319.y;
    _RESERVED_IDENTIFIER_FIXUP_3249.z = _RESERVED_IDENTIFIER_FIXUP_1319.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1333 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3225.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1334 = mix(_RESERVED_IDENTIFIER_FIXUP_3249.xyz, _RESERVED_IDENTIFIER_FIXUP_1316, _RESERVED_IDENTIFIER_FIXUP_1333);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3255 = _RESERVED_IDENTIFIER_FIXUP_1259;
    _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_1334.x;
    _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_1334.y;
    _RESERVED_IDENTIFIER_FIXUP_3255.z = _RESERVED_IDENTIFIER_FIXUP_1334.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_1263.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_1342 * _RESERVED_IDENTIFIER_FIXUP_3231.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4082 = vec4(_RESERVED_IDENTIFIER_FIXUP_1345.xy, _RESERVED_IDENTIFIER_FIXUP_1277, _RESERVED_IDENTIFIER_FIXUP_1345.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1360 = mix(_RESERVED_IDENTIFIER_FIXUP_4082.xyw, _RESERVED_IDENTIFIER_FIXUP_1342, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4082.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3267 = _RESERVED_IDENTIFIER_FIXUP_1263;
    _RESERVED_IDENTIFIER_FIXUP_3267.x = _RESERVED_IDENTIFIER_FIXUP_1360.x;
    _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_1360.y;
    _RESERVED_IDENTIFIER_FIXUP_3267.z = _RESERVED_IDENTIFIER_FIXUP_1360.z;
    float _RESERVED_IDENTIFIER_FIXUP_1370 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1267.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3273 = _RESERVED_IDENTIFIER_FIXUP_1267;
    _RESERVED_IDENTIFIER_FIXUP_3273.z = _RESERVED_IDENTIFIER_FIXUP_1370;
    _RESERVED_IDENTIFIER_FIXUP_3273.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1370;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1380 = _RESERVED_IDENTIFIER_FIXUP_3273.xxxx * _RESERVED_IDENTIFIER_FIXUP_3255;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1392 = (_RESERVED_IDENTIFIER_FIXUP_3267 * _RESERVED_IDENTIFIER_FIXUP_3273.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3243 * _RESERVED_IDENTIFIER_FIXUP_3273.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1380);
    float _RESERVED_IDENTIFIER_FIXUP_1399 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3280 = _RESERVED_IDENTIFIER_FIXUP_1380;
    _RESERVED_IDENTIFIER_FIXUP_3280.x = _RESERVED_IDENTIFIER_FIXUP_1399;
    float _RESERVED_IDENTIFIER_FIXUP_1405 = clamp((_RESERVED_IDENTIFIER_FIXUP_1399 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3280.x = _RESERVED_IDENTIFIER_FIXUP_1405;
    float _RESERVED_IDENTIFIER_FIXUP_1411 = ((-_RESERVED_IDENTIFIER_FIXUP_1405) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3280.x = _RESERVED_IDENTIFIER_FIXUP_1411;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4061;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4058;
    if (_RESERVED_IDENTIFIER_FIXUP_1411 != (-_RESERVED_IDENTIFIER_FIXUP_1411))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1423 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1423.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1423.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1429 = hdLod5(param_3, param_4);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1433 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3492 = _RESERVED_IDENTIFIER_FIXUP_1429;
        _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_1433.x;
        _RESERVED_IDENTIFIER_FIXUP_3492.z = _RESERVED_IDENTIFIER_FIXUP_1433.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1443 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3496;
        _RESERVED_IDENTIFIER_FIXUP_3496.x = _RESERVED_IDENTIFIER_FIXUP_1443.x;
        _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_1443.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1450 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1454 = _RESERVED_IDENTIFIER_FIXUP_1450.y;
        _RESERVED_IDENTIFIER_FIXUP_3496.w = _RESERVED_IDENTIFIER_FIXUP_1454;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3496.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1454;
        float _RESERVED_IDENTIFIER_FIXUP_1465 = _RESERVED_IDENTIFIER_FIXUP_1429.x + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_1465;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1472 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3509;
        _RESERVED_IDENTIFIER_FIXUP_3509.x = _RESERVED_IDENTIFIER_FIXUP_1472.x;
        _RESERVED_IDENTIFIER_FIXUP_3509.y = _RESERVED_IDENTIFIER_FIXUP_1472.y;
        _RESERVED_IDENTIFIER_FIXUP_3509.w = _RESERVED_IDENTIFIER_FIXUP_1454;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3509.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1454;
        float _RESERVED_IDENTIFIER_FIXUP_1494 = _RESERVED_IDENTIFIER_FIXUP_1465 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_1494;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1501 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3522;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_1501.x;
        _RESERVED_IDENTIFIER_FIXUP_3522.y = _RESERVED_IDENTIFIER_FIXUP_1501.y;
        _RESERVED_IDENTIFIER_FIXUP_3522.w = _RESERVED_IDENTIFIER_FIXUP_1454;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3522.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1454;
        float _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_1494 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_1523;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3535;
        _RESERVED_IDENTIFIER_FIXUP_3535.x = _RESERVED_IDENTIFIER_FIXUP_1530.x;
        _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_1530.y;
        _RESERVED_IDENTIFIER_FIXUP_3535.w = _RESERVED_IDENTIFIER_FIXUP_1454;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3535.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1454;
        float _RESERVED_IDENTIFIER_FIXUP_1552 = _RESERVED_IDENTIFIER_FIXUP_1523 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_1552;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1559 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3548;
        _RESERVED_IDENTIFIER_FIXUP_3548.x = _RESERVED_IDENTIFIER_FIXUP_1559.x;
        _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_1559.y;
        _RESERVED_IDENTIFIER_FIXUP_3548.w = _RESERVED_IDENTIFIER_FIXUP_1454;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3548.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1454;
        float _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_1552 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_1581;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1588 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3561;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_1588.x;
        _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_1588.y;
        _RESERVED_IDENTIFIER_FIXUP_3561.w = _RESERVED_IDENTIFIER_FIXUP_1454;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3561.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1454;
        float _RESERVED_IDENTIFIER_FIXUP_1610 = _RESERVED_IDENTIFIER_FIXUP_1581 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_1610;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1617 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3574;
        _RESERVED_IDENTIFIER_FIXUP_3574.x = _RESERVED_IDENTIFIER_FIXUP_1617.x;
        _RESERVED_IDENTIFIER_FIXUP_3574.y = _RESERVED_IDENTIFIER_FIXUP_1617.y;
        _RESERVED_IDENTIFIER_FIXUP_3574.w = _RESERVED_IDENTIFIER_FIXUP_1454;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3574.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1454;
        float _RESERVED_IDENTIFIER_FIXUP_1639 = _RESERVED_IDENTIFIER_FIXUP_1610 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_1639;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1646 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3587;
        _RESERVED_IDENTIFIER_FIXUP_3587.x = _RESERVED_IDENTIFIER_FIXUP_1646.x;
        _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_1646.y;
        _RESERVED_IDENTIFIER_FIXUP_3587.w = _RESERVED_IDENTIFIER_FIXUP_1454;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3587.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1454;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1663 = hdLod5(param_19, param_20);
        float _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_1639 + _RESERVED_IDENTIFIER_FIXUP_1663.x;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_1668;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_1668 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4061 = _RESERVED_IDENTIFIER_FIXUP_1663;
        _RESERVED_IDENTIFIER_FIXUP_4058 = _RESERVED_IDENTIFIER_FIXUP_3492;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1681 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_1681;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4062;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4059;
        if (_RESERVED_IDENTIFIER_FIXUP_1681 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1690 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1700 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1702 = _RESERVED_IDENTIFIER_FIXUP_1700.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_3280;
            _RESERVED_IDENTIFIER_FIXUP_3432.y = _RESERVED_IDENTIFIER_FIXUP_1702;
            _RESERVED_IDENTIFIER_FIXUP_3432.z = _RESERVED_IDENTIFIER_FIXUP_1700.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1710 = _RESERVED_IDENTIFIER_FIXUP_3432.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3436;
            _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1710.x;
            _RESERVED_IDENTIFIER_FIXUP_3436.y = _RESERVED_IDENTIFIER_FIXUP_1710.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1717 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1721 = _RESERVED_IDENTIFIER_FIXUP_1717.y;
            _RESERVED_IDENTIFIER_FIXUP_3436.w = _RESERVED_IDENTIFIER_FIXUP_1721;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1690.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1690.w;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3436.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1721;
            float _RESERVED_IDENTIFIER_FIXUP_1732 = hdLod6(param_21, param_22).x + hdLod6(param_23, param_24).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4088 = vec4(_RESERVED_IDENTIFIER_FIXUP_1411, _RESERVED_IDENTIFIER_FIXUP_1702, _RESERVED_IDENTIFIER_FIXUP_1700.y, _RESERVED_IDENTIFIER_FIXUP_1732);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1739 = _RESERVED_IDENTIFIER_FIXUP_4088.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3449;
            _RESERVED_IDENTIFIER_FIXUP_3449.x = _RESERVED_IDENTIFIER_FIXUP_1739.x;
            _RESERVED_IDENTIFIER_FIXUP_3449.y = _RESERVED_IDENTIFIER_FIXUP_1739.y;
            _RESERVED_IDENTIFIER_FIXUP_3449.w = _RESERVED_IDENTIFIER_FIXUP_1721;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3449.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1721;
            float _RESERVED_IDENTIFIER_FIXUP_1761 = _RESERVED_IDENTIFIER_FIXUP_1732 + hdLod6(param_25, param_26).x;
            _RESERVED_IDENTIFIER_FIXUP_4088.w = _RESERVED_IDENTIFIER_FIXUP_1761;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1768 = _RESERVED_IDENTIFIER_FIXUP_4088.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3462;
            _RESERVED_IDENTIFIER_FIXUP_3462.x = _RESERVED_IDENTIFIER_FIXUP_1768.x;
            _RESERVED_IDENTIFIER_FIXUP_3462.y = _RESERVED_IDENTIFIER_FIXUP_1768.y;
            _RESERVED_IDENTIFIER_FIXUP_3462.w = _RESERVED_IDENTIFIER_FIXUP_1721;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3462.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1721;
            float _RESERVED_IDENTIFIER_FIXUP_1790 = _RESERVED_IDENTIFIER_FIXUP_1761 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_4088.w = _RESERVED_IDENTIFIER_FIXUP_1790;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_4088.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3475;
            _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_1797.x;
            _RESERVED_IDENTIFIER_FIXUP_3475.y = _RESERVED_IDENTIFIER_FIXUP_1797.y;
            _RESERVED_IDENTIFIER_FIXUP_3475.w = _RESERVED_IDENTIFIER_FIXUP_1721;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3475.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1721;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1814 = hdLod6(param_29, param_30);
            float _RESERVED_IDENTIFIER_FIXUP_1819 = _RESERVED_IDENTIFIER_FIXUP_1790 + _RESERVED_IDENTIFIER_FIXUP_1814.x;
            _RESERVED_IDENTIFIER_FIXUP_4088.y = _RESERVED_IDENTIFIER_FIXUP_1819;
            _RESERVED_IDENTIFIER_FIXUP_4088.x = _RESERVED_IDENTIFIER_FIXUP_1819 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4062 = _RESERVED_IDENTIFIER_FIXUP_1814;
            _RESERVED_IDENTIFIER_FIXUP_4059 = _RESERVED_IDENTIFIER_FIXUP_4088;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1832 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3297 = _RESERVED_IDENTIFIER_FIXUP_3280;
            _RESERVED_IDENTIFIER_FIXUP_3297.y = _RESERVED_IDENTIFIER_FIXUP_1832;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4063;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4060;
            if (_RESERVED_IDENTIFIER_FIXUP_1832 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1841 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1851 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1853 = _RESERVED_IDENTIFIER_FIXUP_1851.x;
                _RESERVED_IDENTIFIER_FIXUP_3297.y = _RESERVED_IDENTIFIER_FIXUP_1853;
                _RESERVED_IDENTIFIER_FIXUP_3297.z = _RESERVED_IDENTIFIER_FIXUP_1851.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1861 = _RESERVED_IDENTIFIER_FIXUP_3297.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3376;
                _RESERVED_IDENTIFIER_FIXUP_3376.x = _RESERVED_IDENTIFIER_FIXUP_1861.x;
                _RESERVED_IDENTIFIER_FIXUP_3376.y = _RESERVED_IDENTIFIER_FIXUP_1861.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1868 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1872 = _RESERVED_IDENTIFIER_FIXUP_1868.y;
                _RESERVED_IDENTIFIER_FIXUP_3376.w = _RESERVED_IDENTIFIER_FIXUP_1872;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1841.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1841.w;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3376.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1872;
                float _RESERVED_IDENTIFIER_FIXUP_1883 = hdLod7(param_31, param_32).x + hdLod7(param_33, param_34).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4087 = vec4(_RESERVED_IDENTIFIER_FIXUP_1411, _RESERVED_IDENTIFIER_FIXUP_1853, _RESERVED_IDENTIFIER_FIXUP_1851.y, _RESERVED_IDENTIFIER_FIXUP_1883);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1890 = _RESERVED_IDENTIFIER_FIXUP_4087.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3389;
                _RESERVED_IDENTIFIER_FIXUP_3389.x = _RESERVED_IDENTIFIER_FIXUP_1890.x;
                _RESERVED_IDENTIFIER_FIXUP_3389.y = _RESERVED_IDENTIFIER_FIXUP_1890.y;
                _RESERVED_IDENTIFIER_FIXUP_3389.w = _RESERVED_IDENTIFIER_FIXUP_1872;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3389.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1872;
                float _RESERVED_IDENTIFIER_FIXUP_1912 = _RESERVED_IDENTIFIER_FIXUP_1883 + hdLod7(param_35, param_36).x;
                _RESERVED_IDENTIFIER_FIXUP_4087.w = _RESERVED_IDENTIFIER_FIXUP_1912;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1919 = _RESERVED_IDENTIFIER_FIXUP_4087.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3402;
                _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_1919.x;
                _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_1919.y;
                _RESERVED_IDENTIFIER_FIXUP_3402.w = _RESERVED_IDENTIFIER_FIXUP_1872;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3402.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1872;
                float _RESERVED_IDENTIFIER_FIXUP_1941 = _RESERVED_IDENTIFIER_FIXUP_1912 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_4087.w = _RESERVED_IDENTIFIER_FIXUP_1941;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1948 = _RESERVED_IDENTIFIER_FIXUP_4087.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3415;
                _RESERVED_IDENTIFIER_FIXUP_3415.x = _RESERVED_IDENTIFIER_FIXUP_1948.x;
                _RESERVED_IDENTIFIER_FIXUP_3415.y = _RESERVED_IDENTIFIER_FIXUP_1948.y;
                _RESERVED_IDENTIFIER_FIXUP_3415.w = _RESERVED_IDENTIFIER_FIXUP_1872;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3415.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1872;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1965 = hdLod7(param_39, param_40);
                float _RESERVED_IDENTIFIER_FIXUP_1970 = _RESERVED_IDENTIFIER_FIXUP_1941 + _RESERVED_IDENTIFIER_FIXUP_1965.x;
                _RESERVED_IDENTIFIER_FIXUP_4087.y = _RESERVED_IDENTIFIER_FIXUP_1970;
                _RESERVED_IDENTIFIER_FIXUP_4087.x = _RESERVED_IDENTIFIER_FIXUP_1970 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4063 = _RESERVED_IDENTIFIER_FIXUP_1965;
                _RESERVED_IDENTIFIER_FIXUP_4060 = _RESERVED_IDENTIFIER_FIXUP_4087;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1986 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1990 = _RESERVED_IDENTIFIER_FIXUP_1986.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2001 = vec4(_RESERVED_IDENTIFIER_FIXUP_1986.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1990).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4084 = vec4(_RESERVED_IDENTIFIER_FIXUP_2001 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1990);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2038 = _RESERVED_IDENTIFIER_FIXUP_2001 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3330 = _RESERVED_IDENTIFIER_FIXUP_4084;
                _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_2038.x;
                _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2038.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2060 = _RESERVED_IDENTIFIER_FIXUP_2001 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3339 = _RESERVED_IDENTIFIER_FIXUP_3330;
                _RESERVED_IDENTIFIER_FIXUP_3339.x = _RESERVED_IDENTIFIER_FIXUP_2060.x;
                _RESERVED_IDENTIFIER_FIXUP_3339.y = _RESERVED_IDENTIFIER_FIXUP_2060.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2082 = _RESERVED_IDENTIFIER_FIXUP_2001 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3348 = _RESERVED_IDENTIFIER_FIXUP_3339;
                _RESERVED_IDENTIFIER_FIXUP_3348.x = _RESERVED_IDENTIFIER_FIXUP_2082.x;
                _RESERVED_IDENTIFIER_FIXUP_3348.y = _RESERVED_IDENTIFIER_FIXUP_2082.y;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3348.xy;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1990;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2092 = hdLod8(param_41, param_42);
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_2001;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1990;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_4084.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1990;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3330.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1990;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3339.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_1990;
                float _RESERVED_IDENTIFIER_FIXUP_2097 = (((hdLod8(param_43, param_44).x + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x) + _RESERVED_IDENTIFIER_FIXUP_2092.x;
                float _RESERVED_IDENTIFIER_FIXUP_2105 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3359 = _RESERVED_IDENTIFIER_FIXUP_2092;
                _RESERVED_IDENTIFIER_FIXUP_3359.x = _RESERVED_IDENTIFIER_FIXUP_2105;
                float _RESERVED_IDENTIFIER_FIXUP_2111 = clamp((_RESERVED_IDENTIFIER_FIXUP_2105 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2116 = (_RESERVED_IDENTIFIER_FIXUP_2097 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4063 = _RESERVED_IDENTIFIER_FIXUP_3359;
                _RESERVED_IDENTIFIER_FIXUP_4060 = vec4((_RESERVED_IDENTIFIER_FIXUP_2111 * _RESERVED_IDENTIFIER_FIXUP_2116) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2111, _RESERVED_IDENTIFIER_FIXUP_2116, _RESERVED_IDENTIFIER_FIXUP_2097);
            }
            _RESERVED_IDENTIFIER_FIXUP_4062 = _RESERVED_IDENTIFIER_FIXUP_4063;
            _RESERVED_IDENTIFIER_FIXUP_4059 = _RESERVED_IDENTIFIER_FIXUP_4060;
        }
        _RESERVED_IDENTIFIER_FIXUP_4061 = _RESERVED_IDENTIFIER_FIXUP_4062;
        _RESERVED_IDENTIFIER_FIXUP_4058 = _RESERVED_IDENTIFIER_FIXUP_4059;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3606 = _RESERVED_IDENTIFIER_FIXUP_4058;
    _RESERVED_IDENTIFIER_FIXUP_3606.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3608 = _RESERVED_IDENTIFIER_FIXUP_4061;
    _RESERVED_IDENTIFIER_FIXUP_3608.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3608.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3608.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2155 = _RESERVED_IDENTIFIER_FIXUP_3606.xxx * _RESERVED_IDENTIFIER_FIXUP_3608.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4089 = vec4(_RESERVED_IDENTIFIER_FIXUP_2155.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2155.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2169 = (_RESERVED_IDENTIFIER_FIXUP_1392.xyz * _RESERVED_IDENTIFIER_FIXUP_4089.yyy) + _RESERVED_IDENTIFIER_FIXUP_4089.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3620 = _RESERVED_IDENTIFIER_FIXUP_1392;
    _RESERVED_IDENTIFIER_FIXUP_3620.x = _RESERVED_IDENTIFIER_FIXUP_2169.x;
    _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_2169.y;
    _RESERVED_IDENTIFIER_FIXUP_3620.z = _RESERVED_IDENTIFIER_FIXUP_2169.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2182 = _RESERVED_IDENTIFIER_FIXUP_3620.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3626 = _RESERVED_IDENTIFIER_FIXUP_3620;
    _RESERVED_IDENTIFIER_FIXUP_3626.x = _RESERVED_IDENTIFIER_FIXUP_2182.x;
    _RESERVED_IDENTIFIER_FIXUP_3626.y = _RESERVED_IDENTIFIER_FIXUP_2182.y;
    _RESERVED_IDENTIFIER_FIXUP_3626.z = _RESERVED_IDENTIFIER_FIXUP_2182.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2238 = OptTex0( texcoord0.xyz);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2242 = hdTex1(param_51);
    vec2 param_52 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2246 = hdTex2(param_52);
    vec2 param_53 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2250 = hdTex3(param_53);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2265 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3646;
    _RESERVED_IDENTIFIER_FIXUP_3646.x = _RESERVED_IDENTIFIER_FIXUP_2265.x;
    _RESERVED_IDENTIFIER_FIXUP_3646.y = _RESERVED_IDENTIFIER_FIXUP_2265.y;
    _RESERVED_IDENTIFIER_FIXUP_3646.z = _RESERVED_IDENTIFIER_FIXUP_2265.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2273 = _RESERVED_IDENTIFIER_FIXUP_2238.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2276 = _RESERVED_IDENTIFIER_FIXUP_2273 * _RESERVED_IDENTIFIER_FIXUP_3646.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3652;
    _RESERVED_IDENTIFIER_FIXUP_3652.x = _RESERVED_IDENTIFIER_FIXUP_2276.x;
    _RESERVED_IDENTIFIER_FIXUP_3652.y = _RESERVED_IDENTIFIER_FIXUP_2276.y;
    _RESERVED_IDENTIFIER_FIXUP_3652.z = _RESERVED_IDENTIFIER_FIXUP_2276.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2291 = mix(_RESERVED_IDENTIFIER_FIXUP_3652.xyz, _RESERVED_IDENTIFIER_FIXUP_2273, _RESERVED_IDENTIFIER_FIXUP_1307);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3658 = _RESERVED_IDENTIFIER_FIXUP_2238;
    _RESERVED_IDENTIFIER_FIXUP_3658.x = _RESERVED_IDENTIFIER_FIXUP_2291.x;
    _RESERVED_IDENTIFIER_FIXUP_3658.y = _RESERVED_IDENTIFIER_FIXUP_2291.y;
    _RESERVED_IDENTIFIER_FIXUP_3658.z = _RESERVED_IDENTIFIER_FIXUP_2291.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2299 = _RESERVED_IDENTIFIER_FIXUP_2242.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2302 = _RESERVED_IDENTIFIER_FIXUP_2299 * _RESERVED_IDENTIFIER_FIXUP_3646.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3664;
    _RESERVED_IDENTIFIER_FIXUP_3664.x = _RESERVED_IDENTIFIER_FIXUP_2302.x;
    _RESERVED_IDENTIFIER_FIXUP_3664.y = _RESERVED_IDENTIFIER_FIXUP_2302.y;
    _RESERVED_IDENTIFIER_FIXUP_3664.z = _RESERVED_IDENTIFIER_FIXUP_2302.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2317 = mix(_RESERVED_IDENTIFIER_FIXUP_3664.xyz, _RESERVED_IDENTIFIER_FIXUP_2299, _RESERVED_IDENTIFIER_FIXUP_1333);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3670 = _RESERVED_IDENTIFIER_FIXUP_2242;
    _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2317.x;
    _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_2317.y;
    _RESERVED_IDENTIFIER_FIXUP_3670.z = _RESERVED_IDENTIFIER_FIXUP_2317.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2325 = _RESERVED_IDENTIFIER_FIXUP_2246.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2328 = _RESERVED_IDENTIFIER_FIXUP_2325 * _RESERVED_IDENTIFIER_FIXUP_3646.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4091 = vec4(_RESERVED_IDENTIFIER_FIXUP_2328.xy, _RESERVED_IDENTIFIER_FIXUP_1277, _RESERVED_IDENTIFIER_FIXUP_2328.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2343 = mix(_RESERVED_IDENTIFIER_FIXUP_4091.xyw, _RESERVED_IDENTIFIER_FIXUP_2325, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4091.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3682 = _RESERVED_IDENTIFIER_FIXUP_2246;
    _RESERVED_IDENTIFIER_FIXUP_3682.x = _RESERVED_IDENTIFIER_FIXUP_2343.x;
    _RESERVED_IDENTIFIER_FIXUP_3682.y = _RESERVED_IDENTIFIER_FIXUP_2343.y;
    _RESERVED_IDENTIFIER_FIXUP_3682.z = _RESERVED_IDENTIFIER_FIXUP_2343.z;
    float _RESERVED_IDENTIFIER_FIXUP_2353 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2250.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3688 = _RESERVED_IDENTIFIER_FIXUP_2250;
    _RESERVED_IDENTIFIER_FIXUP_3688.z = _RESERVED_IDENTIFIER_FIXUP_2353;
    _RESERVED_IDENTIFIER_FIXUP_3688.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2353;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2363 = _RESERVED_IDENTIFIER_FIXUP_3688.xxxx * _RESERVED_IDENTIFIER_FIXUP_3670;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2375 = (_RESERVED_IDENTIFIER_FIXUP_3682 * _RESERVED_IDENTIFIER_FIXUP_3688.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3658 * _RESERVED_IDENTIFIER_FIXUP_3688.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2363);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3695 = _RESERVED_IDENTIFIER_FIXUP_2363;
    _RESERVED_IDENTIFIER_FIXUP_3695.x = _RESERVED_IDENTIFIER_FIXUP_1399;
    float _RESERVED_IDENTIFIER_FIXUP_2388 = clamp((_RESERVED_IDENTIFIER_FIXUP_1399 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3695.x = _RESERVED_IDENTIFIER_FIXUP_2388;
    float _RESERVED_IDENTIFIER_FIXUP_2394 = ((-_RESERVED_IDENTIFIER_FIXUP_2388) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3695.x = _RESERVED_IDENTIFIER_FIXUP_2394;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4076;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4070;
    if (_RESERVED_IDENTIFIER_FIXUP_2394 != (-_RESERVED_IDENTIFIER_FIXUP_2394))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2406 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2406.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2406.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2412 = hdLod5(param_54, param_55);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2416 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3907 = _RESERVED_IDENTIFIER_FIXUP_2412;
        _RESERVED_IDENTIFIER_FIXUP_3907.y = _RESERVED_IDENTIFIER_FIXUP_2416.x;
        _RESERVED_IDENTIFIER_FIXUP_3907.z = _RESERVED_IDENTIFIER_FIXUP_2416.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2426 = _RESERVED_IDENTIFIER_FIXUP_3907.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3911;
        _RESERVED_IDENTIFIER_FIXUP_3911.x = _RESERVED_IDENTIFIER_FIXUP_2426.x;
        _RESERVED_IDENTIFIER_FIXUP_3911.y = _RESERVED_IDENTIFIER_FIXUP_2426.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2433 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2437 = _RESERVED_IDENTIFIER_FIXUP_2433.y;
        _RESERVED_IDENTIFIER_FIXUP_3911.w = _RESERVED_IDENTIFIER_FIXUP_2437;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3911.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2437;
        float _RESERVED_IDENTIFIER_FIXUP_2448 = _RESERVED_IDENTIFIER_FIXUP_2412.x + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_2448;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2455 = _RESERVED_IDENTIFIER_FIXUP_3907.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3924;
        _RESERVED_IDENTIFIER_FIXUP_3924.x = _RESERVED_IDENTIFIER_FIXUP_2455.x;
        _RESERVED_IDENTIFIER_FIXUP_3924.y = _RESERVED_IDENTIFIER_FIXUP_2455.y;
        _RESERVED_IDENTIFIER_FIXUP_3924.w = _RESERVED_IDENTIFIER_FIXUP_2437;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3924.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2437;
        float _RESERVED_IDENTIFIER_FIXUP_2477 = _RESERVED_IDENTIFIER_FIXUP_2448 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_2477;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2484 = _RESERVED_IDENTIFIER_FIXUP_3907.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3937;
        _RESERVED_IDENTIFIER_FIXUP_3937.x = _RESERVED_IDENTIFIER_FIXUP_2484.x;
        _RESERVED_IDENTIFIER_FIXUP_3937.y = _RESERVED_IDENTIFIER_FIXUP_2484.y;
        _RESERVED_IDENTIFIER_FIXUP_3937.w = _RESERVED_IDENTIFIER_FIXUP_2437;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3937.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2437;
        float _RESERVED_IDENTIFIER_FIXUP_2506 = _RESERVED_IDENTIFIER_FIXUP_2477 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_2506;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2513 = _RESERVED_IDENTIFIER_FIXUP_3907.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3950;
        _RESERVED_IDENTIFIER_FIXUP_3950.x = _RESERVED_IDENTIFIER_FIXUP_2513.x;
        _RESERVED_IDENTIFIER_FIXUP_3950.y = _RESERVED_IDENTIFIER_FIXUP_2513.y;
        _RESERVED_IDENTIFIER_FIXUP_3950.w = _RESERVED_IDENTIFIER_FIXUP_2437;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3950.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2437;
        float _RESERVED_IDENTIFIER_FIXUP_2535 = _RESERVED_IDENTIFIER_FIXUP_2506 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_2535;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2542 = _RESERVED_IDENTIFIER_FIXUP_3907.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3963;
        _RESERVED_IDENTIFIER_FIXUP_3963.x = _RESERVED_IDENTIFIER_FIXUP_2542.x;
        _RESERVED_IDENTIFIER_FIXUP_3963.y = _RESERVED_IDENTIFIER_FIXUP_2542.y;
        _RESERVED_IDENTIFIER_FIXUP_3963.w = _RESERVED_IDENTIFIER_FIXUP_2437;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3963.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2437;
        float _RESERVED_IDENTIFIER_FIXUP_2564 = _RESERVED_IDENTIFIER_FIXUP_2535 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_2564;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2571 = _RESERVED_IDENTIFIER_FIXUP_3907.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3976;
        _RESERVED_IDENTIFIER_FIXUP_3976.x = _RESERVED_IDENTIFIER_FIXUP_2571.x;
        _RESERVED_IDENTIFIER_FIXUP_3976.y = _RESERVED_IDENTIFIER_FIXUP_2571.y;
        _RESERVED_IDENTIFIER_FIXUP_3976.w = _RESERVED_IDENTIFIER_FIXUP_2437;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3976.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2437;
        float _RESERVED_IDENTIFIER_FIXUP_2593 = _RESERVED_IDENTIFIER_FIXUP_2564 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_2593;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2600 = _RESERVED_IDENTIFIER_FIXUP_3907.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3989;
        _RESERVED_IDENTIFIER_FIXUP_3989.x = _RESERVED_IDENTIFIER_FIXUP_2600.x;
        _RESERVED_IDENTIFIER_FIXUP_3989.y = _RESERVED_IDENTIFIER_FIXUP_2600.y;
        _RESERVED_IDENTIFIER_FIXUP_3989.w = _RESERVED_IDENTIFIER_FIXUP_2437;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3989.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2437;
        float _RESERVED_IDENTIFIER_FIXUP_2622 = _RESERVED_IDENTIFIER_FIXUP_2593 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_2622;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2629 = _RESERVED_IDENTIFIER_FIXUP_3907.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4002;
        _RESERVED_IDENTIFIER_FIXUP_4002.x = _RESERVED_IDENTIFIER_FIXUP_2629.x;
        _RESERVED_IDENTIFIER_FIXUP_4002.y = _RESERVED_IDENTIFIER_FIXUP_2629.y;
        _RESERVED_IDENTIFIER_FIXUP_4002.w = _RESERVED_IDENTIFIER_FIXUP_2437;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4002.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2437;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2646 = hdLod5(param_70, param_71);
        float _RESERVED_IDENTIFIER_FIXUP_2651 = _RESERVED_IDENTIFIER_FIXUP_2622 + _RESERVED_IDENTIFIER_FIXUP_2646.x;
        _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_2651;
        _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_2651 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4076 = _RESERVED_IDENTIFIER_FIXUP_2646;
        _RESERVED_IDENTIFIER_FIXUP_4070 = _RESERVED_IDENTIFIER_FIXUP_3907;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2664 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3695.y = _RESERVED_IDENTIFIER_FIXUP_2664;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4077;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4071;
        if (_RESERVED_IDENTIFIER_FIXUP_2664 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2673 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2683 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2685 = _RESERVED_IDENTIFIER_FIXUP_2683.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3847 = _RESERVED_IDENTIFIER_FIXUP_3695;
            _RESERVED_IDENTIFIER_FIXUP_3847.y = _RESERVED_IDENTIFIER_FIXUP_2685;
            _RESERVED_IDENTIFIER_FIXUP_3847.z = _RESERVED_IDENTIFIER_FIXUP_2683.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2693 = _RESERVED_IDENTIFIER_FIXUP_3847.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3851;
            _RESERVED_IDENTIFIER_FIXUP_3851.x = _RESERVED_IDENTIFIER_FIXUP_2693.x;
            _RESERVED_IDENTIFIER_FIXUP_3851.y = _RESERVED_IDENTIFIER_FIXUP_2693.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2700 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2704 = _RESERVED_IDENTIFIER_FIXUP_2700.y;
            _RESERVED_IDENTIFIER_FIXUP_3851.w = _RESERVED_IDENTIFIER_FIXUP_2704;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2673.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2673.w;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3851.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2704;
            float _RESERVED_IDENTIFIER_FIXUP_2715 = hdLod6(param_72, param_73).x + hdLod6(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4097 = vec4(_RESERVED_IDENTIFIER_FIXUP_2394, _RESERVED_IDENTIFIER_FIXUP_2685, _RESERVED_IDENTIFIER_FIXUP_2683.y, _RESERVED_IDENTIFIER_FIXUP_2715);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2722 = _RESERVED_IDENTIFIER_FIXUP_4097.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3864;
            _RESERVED_IDENTIFIER_FIXUP_3864.x = _RESERVED_IDENTIFIER_FIXUP_2722.x;
            _RESERVED_IDENTIFIER_FIXUP_3864.y = _RESERVED_IDENTIFIER_FIXUP_2722.y;
            _RESERVED_IDENTIFIER_FIXUP_3864.w = _RESERVED_IDENTIFIER_FIXUP_2704;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3864.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2704;
            float _RESERVED_IDENTIFIER_FIXUP_2744 = _RESERVED_IDENTIFIER_FIXUP_2715 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_4097.w = _RESERVED_IDENTIFIER_FIXUP_2744;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2751 = _RESERVED_IDENTIFIER_FIXUP_4097.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3877;
            _RESERVED_IDENTIFIER_FIXUP_3877.x = _RESERVED_IDENTIFIER_FIXUP_2751.x;
            _RESERVED_IDENTIFIER_FIXUP_3877.y = _RESERVED_IDENTIFIER_FIXUP_2751.y;
            _RESERVED_IDENTIFIER_FIXUP_3877.w = _RESERVED_IDENTIFIER_FIXUP_2704;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3877.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2704;
            float _RESERVED_IDENTIFIER_FIXUP_2773 = _RESERVED_IDENTIFIER_FIXUP_2744 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_4097.w = _RESERVED_IDENTIFIER_FIXUP_2773;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2780 = _RESERVED_IDENTIFIER_FIXUP_4097.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3890;
            _RESERVED_IDENTIFIER_FIXUP_3890.x = _RESERVED_IDENTIFIER_FIXUP_2780.x;
            _RESERVED_IDENTIFIER_FIXUP_3890.y = _RESERVED_IDENTIFIER_FIXUP_2780.y;
            _RESERVED_IDENTIFIER_FIXUP_3890.w = _RESERVED_IDENTIFIER_FIXUP_2704;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3890.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2704;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2797 = hdLod6(param_80, param_81);
            float _RESERVED_IDENTIFIER_FIXUP_2802 = _RESERVED_IDENTIFIER_FIXUP_2773 + _RESERVED_IDENTIFIER_FIXUP_2797.x;
            _RESERVED_IDENTIFIER_FIXUP_4097.y = _RESERVED_IDENTIFIER_FIXUP_2802;
            _RESERVED_IDENTIFIER_FIXUP_4097.x = _RESERVED_IDENTIFIER_FIXUP_2802 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4077 = _RESERVED_IDENTIFIER_FIXUP_2797;
            _RESERVED_IDENTIFIER_FIXUP_4071 = _RESERVED_IDENTIFIER_FIXUP_4097;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2815 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3712 = _RESERVED_IDENTIFIER_FIXUP_3695;
            _RESERVED_IDENTIFIER_FIXUP_3712.y = _RESERVED_IDENTIFIER_FIXUP_2815;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4078;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4072;
            if (_RESERVED_IDENTIFIER_FIXUP_2815 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2824 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2834 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2836 = _RESERVED_IDENTIFIER_FIXUP_2834.x;
                _RESERVED_IDENTIFIER_FIXUP_3712.y = _RESERVED_IDENTIFIER_FIXUP_2836;
                _RESERVED_IDENTIFIER_FIXUP_3712.z = _RESERVED_IDENTIFIER_FIXUP_2834.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2844 = _RESERVED_IDENTIFIER_FIXUP_3712.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3791;
                _RESERVED_IDENTIFIER_FIXUP_3791.x = _RESERVED_IDENTIFIER_FIXUP_2844.x;
                _RESERVED_IDENTIFIER_FIXUP_3791.y = _RESERVED_IDENTIFIER_FIXUP_2844.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2851 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2855 = _RESERVED_IDENTIFIER_FIXUP_2851.y;
                _RESERVED_IDENTIFIER_FIXUP_3791.w = _RESERVED_IDENTIFIER_FIXUP_2855;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2824.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2824.w;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3791.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2855;
                float _RESERVED_IDENTIFIER_FIXUP_2866 = hdLod7(param_82, param_83).x + hdLod7(param_84, param_85).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4096 = vec4(_RESERVED_IDENTIFIER_FIXUP_2394, _RESERVED_IDENTIFIER_FIXUP_2836, _RESERVED_IDENTIFIER_FIXUP_2834.y, _RESERVED_IDENTIFIER_FIXUP_2866);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2873 = _RESERVED_IDENTIFIER_FIXUP_4096.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3804;
                _RESERVED_IDENTIFIER_FIXUP_3804.x = _RESERVED_IDENTIFIER_FIXUP_2873.x;
                _RESERVED_IDENTIFIER_FIXUP_3804.y = _RESERVED_IDENTIFIER_FIXUP_2873.y;
                _RESERVED_IDENTIFIER_FIXUP_3804.w = _RESERVED_IDENTIFIER_FIXUP_2855;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3804.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2855;
                float _RESERVED_IDENTIFIER_FIXUP_2895 = _RESERVED_IDENTIFIER_FIXUP_2866 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_4096.w = _RESERVED_IDENTIFIER_FIXUP_2895;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2902 = _RESERVED_IDENTIFIER_FIXUP_4096.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3817;
                _RESERVED_IDENTIFIER_FIXUP_3817.x = _RESERVED_IDENTIFIER_FIXUP_2902.x;
                _RESERVED_IDENTIFIER_FIXUP_3817.y = _RESERVED_IDENTIFIER_FIXUP_2902.y;
                _RESERVED_IDENTIFIER_FIXUP_3817.w = _RESERVED_IDENTIFIER_FIXUP_2855;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3817.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2855;
                float _RESERVED_IDENTIFIER_FIXUP_2924 = _RESERVED_IDENTIFIER_FIXUP_2895 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_4096.w = _RESERVED_IDENTIFIER_FIXUP_2924;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2931 = _RESERVED_IDENTIFIER_FIXUP_4096.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3830;
                _RESERVED_IDENTIFIER_FIXUP_3830.x = _RESERVED_IDENTIFIER_FIXUP_2931.x;
                _RESERVED_IDENTIFIER_FIXUP_3830.y = _RESERVED_IDENTIFIER_FIXUP_2931.y;
                _RESERVED_IDENTIFIER_FIXUP_3830.w = _RESERVED_IDENTIFIER_FIXUP_2855;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3830.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2855;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2948 = hdLod7(param_90, param_91);
                float _RESERVED_IDENTIFIER_FIXUP_2953 = _RESERVED_IDENTIFIER_FIXUP_2924 + _RESERVED_IDENTIFIER_FIXUP_2948.x;
                _RESERVED_IDENTIFIER_FIXUP_4096.y = _RESERVED_IDENTIFIER_FIXUP_2953;
                _RESERVED_IDENTIFIER_FIXUP_4096.x = _RESERVED_IDENTIFIER_FIXUP_2953 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4078 = _RESERVED_IDENTIFIER_FIXUP_2948;
                _RESERVED_IDENTIFIER_FIXUP_4072 = _RESERVED_IDENTIFIER_FIXUP_4096;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2969 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2973 = _RESERVED_IDENTIFIER_FIXUP_2969.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2984 = vec4(_RESERVED_IDENTIFIER_FIXUP_2969.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2973).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4093 = vec4(_RESERVED_IDENTIFIER_FIXUP_2984 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2973);
                vec2 _RESERVED_IDENTIFIER_FIXUP_3021 = _RESERVED_IDENTIFIER_FIXUP_2984 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_4093;
                _RESERVED_IDENTIFIER_FIXUP_3745.x = _RESERVED_IDENTIFIER_FIXUP_3021.x;
                _RESERVED_IDENTIFIER_FIXUP_3745.y = _RESERVED_IDENTIFIER_FIXUP_3021.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3043 = _RESERVED_IDENTIFIER_FIXUP_2984 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3754 = _RESERVED_IDENTIFIER_FIXUP_3745;
                _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_3043.x;
                _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_3043.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3065 = _RESERVED_IDENTIFIER_FIXUP_2984 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3763 = _RESERVED_IDENTIFIER_FIXUP_3754;
                _RESERVED_IDENTIFIER_FIXUP_3763.x = _RESERVED_IDENTIFIER_FIXUP_3065.x;
                _RESERVED_IDENTIFIER_FIXUP_3763.y = _RESERVED_IDENTIFIER_FIXUP_3065.y;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3763.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2973;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3075 = hdLod8(param_92, param_93);
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_2984;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2973;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_4093.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2973;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3745.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2973;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3754.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2973;
                float _RESERVED_IDENTIFIER_FIXUP_3080 = (((hdLod8(param_94, param_95).x + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + _RESERVED_IDENTIFIER_FIXUP_3075.x;
                float _RESERVED_IDENTIFIER_FIXUP_3088 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3774 = _RESERVED_IDENTIFIER_FIXUP_3075;
                _RESERVED_IDENTIFIER_FIXUP_3774.x = _RESERVED_IDENTIFIER_FIXUP_3088;
                float _RESERVED_IDENTIFIER_FIXUP_3094 = clamp((_RESERVED_IDENTIFIER_FIXUP_3088 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_3099 = (_RESERVED_IDENTIFIER_FIXUP_3080 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4078 = _RESERVED_IDENTIFIER_FIXUP_3774;
                _RESERVED_IDENTIFIER_FIXUP_4072 = vec4((_RESERVED_IDENTIFIER_FIXUP_3094 * _RESERVED_IDENTIFIER_FIXUP_3099) + 1.0, _RESERVED_IDENTIFIER_FIXUP_3094, _RESERVED_IDENTIFIER_FIXUP_3099, _RESERVED_IDENTIFIER_FIXUP_3080);
            }
            _RESERVED_IDENTIFIER_FIXUP_4077 = _RESERVED_IDENTIFIER_FIXUP_4078;
            _RESERVED_IDENTIFIER_FIXUP_4071 = _RESERVED_IDENTIFIER_FIXUP_4072;
        }
        _RESERVED_IDENTIFIER_FIXUP_4076 = _RESERVED_IDENTIFIER_FIXUP_4077;
        _RESERVED_IDENTIFIER_FIXUP_4070 = _RESERVED_IDENTIFIER_FIXUP_4071;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3114 = (_RESERVED_IDENTIFIER_FIXUP_4070.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4019 = _RESERVED_IDENTIFIER_FIXUP_4070;
    _RESERVED_IDENTIFIER_FIXUP_4019.y = _RESERVED_IDENTIFIER_FIXUP_3114;
    _RESERVED_IDENTIFIER_FIXUP_4019.y = _RESERVED_IDENTIFIER_FIXUP_3114;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3127 = _RESERVED_IDENTIFIER_FIXUP_2375.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4025 = _RESERVED_IDENTIFIER_FIXUP_4076;
    _RESERVED_IDENTIFIER_FIXUP_4025.x = _RESERVED_IDENTIFIER_FIXUP_3127.x;
    _RESERVED_IDENTIFIER_FIXUP_4025.y = _RESERVED_IDENTIFIER_FIXUP_3127.y;
    _RESERVED_IDENTIFIER_FIXUP_4025.z = _RESERVED_IDENTIFIER_FIXUP_3127.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3138 = _RESERVED_IDENTIFIER_FIXUP_4019.xxx * _RESERVED_IDENTIFIER_FIXUP_4025.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4098 = vec4(_RESERVED_IDENTIFIER_FIXUP_3138.x, _RESERVED_IDENTIFIER_FIXUP_3114, _RESERVED_IDENTIFIER_FIXUP_3138.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3152 = (_RESERVED_IDENTIFIER_FIXUP_2375.xyz * _RESERVED_IDENTIFIER_FIXUP_4098.yyy) + _RESERVED_IDENTIFIER_FIXUP_4098.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4037 = _RESERVED_IDENTIFIER_FIXUP_2375;
    _RESERVED_IDENTIFIER_FIXUP_4037.x = _RESERVED_IDENTIFIER_FIXUP_3152.x;
    _RESERVED_IDENTIFIER_FIXUP_4037.y = _RESERVED_IDENTIFIER_FIXUP_3152.y;
    _RESERVED_IDENTIFIER_FIXUP_4037.z = _RESERVED_IDENTIFIER_FIXUP_3152.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3165 = _RESERVED_IDENTIFIER_FIXUP_4037.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4043 = _RESERVED_IDENTIFIER_FIXUP_4037;
    _RESERVED_IDENTIFIER_FIXUP_4043.x = _RESERVED_IDENTIFIER_FIXUP_3165.x;
    _RESERVED_IDENTIFIER_FIXUP_4043.y = _RESERVED_IDENTIFIER_FIXUP_3165.y;
    _RESERVED_IDENTIFIER_FIXUP_4043.z = _RESERVED_IDENTIFIER_FIXUP_3165.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4043.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1114 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1123;
    if (_RESERVED_IDENTIFIER_FIXUP_1114)
    {
        _RESERVED_IDENTIFIER_FIXUP_1123 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_1114;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1123)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1160 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3626.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1186 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3218;
    if (_RESERVED_IDENTIFIER_FIXUP_1160 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3218 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1160), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1186);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3218 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1186);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3218;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3114);
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
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r1.xy;
        float param_4 = r1.w;
        r1 = hdLod5(param_3, param_4);
        vec2 hdB273 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB273.x;
        r1.z = hdB273.y;
        vec2 hdB284 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB284.x;
        r2.y = hdB284.y;
        vec2 hdB292 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB292.x;
        r2.w = hdB292.y;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r1.x += r2.x;
        vec2 hdB315 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB315.x;
        r2.y = hdB315.y;
        vec2 hdB322 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB322.x;
        r2.w = hdB322.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.x += r2.x;
        vec2 hdB345 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB345.x;
        r2.y = hdB345.y;
        vec2 hdB352 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB352.x;
        r2.w = hdB352.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.x += r2.x;
        vec2 hdB375 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB375.x;
        r2.y = hdB375.y;
        vec2 hdB382 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB382.x;
        r2.w = hdB382.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.x += r2.x;
        vec2 hdB405 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB405.x;
        r2.y = hdB405.y;
        vec2 hdB412 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB412.x;
        r2.w = hdB412.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.x += r2.x;
        vec2 hdB435 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB435.x;
        r2.y = hdB435.y;
        vec2 hdB442 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB442.x;
        r2.w = hdB442.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r1.x += r2.x;
        vec2 hdB465 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB465.x;
        r2.y = hdB465.y;
        vec2 hdB472 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB472.x;
        r2.w = hdB472.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r1.x += r2.x;
        vec2 hdB495 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB495.x;
        r2.y = hdB495.y;
        vec2 hdB502 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB502.x;
        r2.w = hdB502.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod5(param_19, param_20);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r2.xy;
            float param_22 = r2.w;
            r2 = hdLod6(param_21, param_22);
            vec2 hdB552 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB552.x;
            r1.z = hdB552.y;
            vec2 hdB562 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB562.x;
            r3.y = hdB562.y;
            vec2 hdB569 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB569.x;
            r3.w = hdB569.y;
            vec2 param_23 = r3.xy;
            float param_24 = r3.w;
            r3 = hdLod6(param_23, param_24);
            r1.w = r2.x + r3.x;
            vec2 hdB591 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB591.x;
            r2.y = hdB591.y;
            vec2 hdB598 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB598.x;
            r2.w = hdB598.y;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
            r1.w += r2.x;
            vec2 hdB620 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB620.x;
            r2.y = hdB620.y;
            vec2 hdB627 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB627.x;
            r2.w = hdB627.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r1.w += r2.x;
            vec2 hdB649 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB649.x;
            r2.y = hdB649.y;
            vec2 hdB656 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB656.x;
            r2.w = hdB656.y;
            vec2 param_29 = r2.xy;
            float param_30 = r2.w;
            r2 = hdLod6(param_29, param_30);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r2.xy;
                float param_32 = r2.w;
                r2 = hdLod7(param_31, param_32);
                vec2 hdB706 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB706.x;
                r1.z = hdB706.y;
                vec2 hdB716 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB716.x;
                r3.y = hdB716.y;
                vec2 hdB723 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB723.x;
                r3.w = hdB723.y;
                vec2 param_33 = r3.xy;
                float param_34 = r3.w;
                r3 = hdLod7(param_33, param_34);
                r1.w = r2.x + r3.x;
                vec2 hdB745 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB745.x;
                r2.y = hdB745.y;
                vec2 hdB752 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB752.x;
                r2.w = hdB752.y;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
                r1.w += r2.x;
                vec2 hdB774 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB774.x;
                r2.y = hdB774.y;
                vec2 hdB781 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB781.x;
                r2.w = hdB781.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r1.w += r2.x;
                vec2 hdB803 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB803.x;
                r2.y = hdB803.y;
                vec2 hdB810 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB810.x;
                r2.w = hdB810.y;
                vec2 param_39 = r2.xy;
                float param_40 = r2.w;
                r2 = hdLod7(param_39, param_40);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 hdB842 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB842.x;
                r2.w = hdB842.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r3 = hdLod8(param_41, param_42);
                vec2 hdB867 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB867.x;
                r4.y = hdB867.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r5 = hdLod8(param_43, param_44);
                r1.w = r3.x + r5.x;
                vec2 hdB895 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB895.x;
                r4.y = hdB895.y;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r3 = hdLod8(param_45, param_46);
                r1.w += r3.x;
                vec2 hdB917 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB917.x;
                r4.y = hdB917.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r3 = hdLod8(param_47, param_48);
                r1.w += r3.x;
                vec2 hdB939 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB939.x;
                r4.y = hdB939.y;
                vec2 param_49 = r4.xy;
                float param_50 = r4.w;
                r2 = hdLod8(param_49, param_50);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB996 = r0.www * v1.xyz;
    r2.x = hdB996.x;
    r2.y = hdB996.y;
    r2.z = hdB996.z;
    vec4 hdB1003 = r1;
    vec3 hdB1007 = hdB1003.xxx * r2.xyz;
    r1.x = hdB1007.x;
    r1.z = hdB1007.y;
    r1.w = hdB1007.z;
    vec4 hdB1014 = r0;
    vec3 hdB1021 = (hdB1014.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB1021.x;
    r0.y = hdB1021.y;
    r0.z = hdB1021.z;
    vec4 hdB1028 = r0;
    vec3 hdB1035 = hdB1028.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1035.x;
    r0.y = hdB1035.y;
    r0.z = hdB1035.z;
    vec3 hdB1050 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1050.x;
    oC0.y = hdB1050.y;
    oC0.z = hdB1050.z;
    oC0.w = 1.0;
    bool hdB1062 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1070;
    if (hdB1062)
    {
        hdB1070 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1070 = hdB1062;
    }
    if (hdB1070)
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
    bool _3774 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3784;
    if (_3774)
    {
        _3784 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3784 = _3774;
    }
    if (_3784)
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
        bool _3809 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3824;
        if (!_3809)
        {
            _3824 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3824 = _3809;
        }
        if (_3824)
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
