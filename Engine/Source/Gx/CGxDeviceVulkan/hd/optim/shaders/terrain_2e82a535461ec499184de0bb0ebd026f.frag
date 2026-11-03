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
float _RESERVED_IDENTIFIER_FIXUP_4118;
vec4 _RESERVED_IDENTIFIER_FIXUP_4119;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1257 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1261 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1265 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1269 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1273 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3231;
    _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_1273.x;
    _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_1273.y;
    float _RESERVED_IDENTIFIER_FIXUP_1279 = _RESERVED_IDENTIFIER_FIXUP_1273.z;
    _RESERVED_IDENTIFIER_FIXUP_3231.z = _RESERVED_IDENTIFIER_FIXUP_1279;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1281 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4118).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1284 = _RESERVED_IDENTIFIER_FIXUP_1281 + _RESERVED_IDENTIFIER_FIXUP_1281;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3237 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3237.x = _RESERVED_IDENTIFIER_FIXUP_1284.x;
    _RESERVED_IDENTIFIER_FIXUP_3237.y = _RESERVED_IDENTIFIER_FIXUP_1284.y;
    _RESERVED_IDENTIFIER_FIXUP_3237.z = _RESERVED_IDENTIFIER_FIXUP_1284.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1292 = _RESERVED_IDENTIFIER_FIXUP_1257.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_1292 * _RESERVED_IDENTIFIER_FIXUP_3237.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3243 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1295.x;
    _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_1295.y;
    _RESERVED_IDENTIFIER_FIXUP_3243.z = _RESERVED_IDENTIFIER_FIXUP_1295.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1309 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3231.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1310 = mix(_RESERVED_IDENTIFIER_FIXUP_3243.xyz, _RESERVED_IDENTIFIER_FIXUP_1292, _RESERVED_IDENTIFIER_FIXUP_1309);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3249 = _RESERVED_IDENTIFIER_FIXUP_1257;
    _RESERVED_IDENTIFIER_FIXUP_3249.x = _RESERVED_IDENTIFIER_FIXUP_1310.x;
    _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_1310.y;
    _RESERVED_IDENTIFIER_FIXUP_3249.z = _RESERVED_IDENTIFIER_FIXUP_1310.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1318 = _RESERVED_IDENTIFIER_FIXUP_1261.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1321 = _RESERVED_IDENTIFIER_FIXUP_1318 * _RESERVED_IDENTIFIER_FIXUP_3237.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1321.x;
    _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_1321.y;
    _RESERVED_IDENTIFIER_FIXUP_3243.z = _RESERVED_IDENTIFIER_FIXUP_1321.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1335 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3231.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1336 = mix(_RESERVED_IDENTIFIER_FIXUP_3243.xyz, _RESERVED_IDENTIFIER_FIXUP_1318, _RESERVED_IDENTIFIER_FIXUP_1335);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3261 = _RESERVED_IDENTIFIER_FIXUP_1261;
    _RESERVED_IDENTIFIER_FIXUP_3261.x = _RESERVED_IDENTIFIER_FIXUP_1336.x;
    _RESERVED_IDENTIFIER_FIXUP_3261.y = _RESERVED_IDENTIFIER_FIXUP_1336.y;
    _RESERVED_IDENTIFIER_FIXUP_3261.z = _RESERVED_IDENTIFIER_FIXUP_1336.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1265.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1344 * _RESERVED_IDENTIFIER_FIXUP_3237.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4144 = vec4(_RESERVED_IDENTIFIER_FIXUP_1347.xy, _RESERVED_IDENTIFIER_FIXUP_1279, _RESERVED_IDENTIFIER_FIXUP_1347.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1362 = mix(_RESERVED_IDENTIFIER_FIXUP_4144.xyw, _RESERVED_IDENTIFIER_FIXUP_1344, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4144.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3273 = _RESERVED_IDENTIFIER_FIXUP_1265;
    _RESERVED_IDENTIFIER_FIXUP_3273.x = _RESERVED_IDENTIFIER_FIXUP_1362.x;
    _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1362.y;
    _RESERVED_IDENTIFIER_FIXUP_3273.z = _RESERVED_IDENTIFIER_FIXUP_1362.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3249, _RESERVED_IDENTIFIER_FIXUP_3261, _RESERVED_IDENTIFIER_FIXUP_1269.xxxx), _RESERVED_IDENTIFIER_FIXUP_3273, _RESERVED_IDENTIFIER_FIXUP_1269.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1385 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3281 = _RESERVED_IDENTIFIER_FIXUP_3261;
    _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_1385;
    float _RESERVED_IDENTIFIER_FIXUP_1391 = clamp((_RESERVED_IDENTIFIER_FIXUP_1385 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_1391;
    float _RESERVED_IDENTIFIER_FIXUP_1397 = ((-_RESERVED_IDENTIFIER_FIXUP_1391) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_1397;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4123;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4120;
    if (_RESERVED_IDENTIFIER_FIXUP_1397 != (-_RESERVED_IDENTIFIER_FIXUP_1397))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1409 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3520;
        _RESERVED_IDENTIFIER_FIXUP_3520.x = _RESERVED_IDENTIFIER_FIXUP_1409.x;
        _RESERVED_IDENTIFIER_FIXUP_3520.y = _RESERVED_IDENTIFIER_FIXUP_1409.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1419 = _RESERVED_IDENTIFIER_FIXUP_3520.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3524;
        _RESERVED_IDENTIFIER_FIXUP_3524.x = _RESERVED_IDENTIFIER_FIXUP_1419.x;
        _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_1419.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1429 = _RESERVED_IDENTIFIER_FIXUP_3520.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3528;
        _RESERVED_IDENTIFIER_FIXUP_3528.x = _RESERVED_IDENTIFIER_FIXUP_1429.x;
        _RESERVED_IDENTIFIER_FIXUP_3528.y = _RESERVED_IDENTIFIER_FIXUP_1429.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_3520.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3532;
        _RESERVED_IDENTIFIER_FIXUP_3532.x = _RESERVED_IDENTIFIER_FIXUP_1439.x;
        _RESERVED_IDENTIFIER_FIXUP_3532.y = _RESERVED_IDENTIFIER_FIXUP_1439.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_3520.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3536;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_1449.x;
        _RESERVED_IDENTIFIER_FIXUP_3536.y = _RESERVED_IDENTIFIER_FIXUP_1449.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1459 = _RESERVED_IDENTIFIER_FIXUP_3520.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3540;
        _RESERVED_IDENTIFIER_FIXUP_3540.x = _RESERVED_IDENTIFIER_FIXUP_1459.x;
        _RESERVED_IDENTIFIER_FIXUP_3540.y = _RESERVED_IDENTIFIER_FIXUP_1459.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1469 = _RESERVED_IDENTIFIER_FIXUP_3520.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3544;
        _RESERVED_IDENTIFIER_FIXUP_3544.x = _RESERVED_IDENTIFIER_FIXUP_1469.x;
        _RESERVED_IDENTIFIER_FIXUP_3544.y = _RESERVED_IDENTIFIER_FIXUP_1469.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_3520.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3548;
        _RESERVED_IDENTIFIER_FIXUP_3548.x = _RESERVED_IDENTIFIER_FIXUP_1479.x;
        _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_1479.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1489 = _RESERVED_IDENTIFIER_FIXUP_3520.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3552;
        _RESERVED_IDENTIFIER_FIXUP_3552.x = _RESERVED_IDENTIFIER_FIXUP_1489.x;
        _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_1489.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1497 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1497.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1497.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1503 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3524.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3528.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3532.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3536.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3536.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1543 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_3540.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3544.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3548.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3552.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3552.xy;
        float param_9 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1583 = hdLod5(param_8, param_9);
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3524.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1503.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3528.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1503.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3532.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1503.w = hdLod5(param_14, param_15).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1600 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1503 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3540.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1543.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3544.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1543.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3548.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1543.w = hdLod5(param_20, param_21).x;
        float _RESERVED_IDENTIFIER_FIXUP_1623 = _RESERVED_IDENTIFIER_FIXUP_1583.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3617 = _RESERVED_IDENTIFIER_FIXUP_1583;
        _RESERVED_IDENTIFIER_FIXUP_3617.x = _RESERVED_IDENTIFIER_FIXUP_1623;
        float _RESERVED_IDENTIFIER_FIXUP_1628 = float(_RESERVED_IDENTIFIER_FIXUP_1623 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3617.x = _RESERVED_IDENTIFIER_FIXUP_1628;
        float _RESERVED_IDENTIFIER_FIXUP_1631 = dot(_RESERVED_IDENTIFIER_FIXUP_1600, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3617.y = _RESERVED_IDENTIFIER_FIXUP_1631;
        float _RESERVED_IDENTIFIER_FIXUP_1634 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1543 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3617.z = _RESERVED_IDENTIFIER_FIXUP_1634;
        float _RESERVED_IDENTIFIER_FIXUP_1640 = _RESERVED_IDENTIFIER_FIXUP_1631 + _RESERVED_IDENTIFIER_FIXUP_1634;
        _RESERVED_IDENTIFIER_FIXUP_3617.y = _RESERVED_IDENTIFIER_FIXUP_1640;
        float _RESERVED_IDENTIFIER_FIXUP_1646 = _RESERVED_IDENTIFIER_FIXUP_1628 + _RESERVED_IDENTIFIER_FIXUP_1640;
        _RESERVED_IDENTIFIER_FIXUP_3617.x = _RESERVED_IDENTIFIER_FIXUP_1646;
        _RESERVED_IDENTIFIER_FIXUP_3617.x = _RESERVED_IDENTIFIER_FIXUP_1646 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4123 = _RESERVED_IDENTIFIER_FIXUP_1600;
        _RESERVED_IDENTIFIER_FIXUP_4120 = _RESERVED_IDENTIFIER_FIXUP_3617;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1659 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_1659;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4124;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4121;
        if (_RESERVED_IDENTIFIER_FIXUP_1659 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1668 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3454 = _RESERVED_IDENTIFIER_FIXUP_3281;
            _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_1668.x;
            _RESERVED_IDENTIFIER_FIXUP_3454.z = _RESERVED_IDENTIFIER_FIXUP_1668.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1678 = _RESERVED_IDENTIFIER_FIXUP_3454.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3458;
            _RESERVED_IDENTIFIER_FIXUP_3458.x = _RESERVED_IDENTIFIER_FIXUP_1678.x;
            _RESERVED_IDENTIFIER_FIXUP_3458.y = _RESERVED_IDENTIFIER_FIXUP_1678.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1688 = _RESERVED_IDENTIFIER_FIXUP_3454.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3462;
            _RESERVED_IDENTIFIER_FIXUP_3462.x = _RESERVED_IDENTIFIER_FIXUP_1688.x;
            _RESERVED_IDENTIFIER_FIXUP_3462.y = _RESERVED_IDENTIFIER_FIXUP_1688.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1698 = _RESERVED_IDENTIFIER_FIXUP_3454.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3466;
            _RESERVED_IDENTIFIER_FIXUP_3466.x = _RESERVED_IDENTIFIER_FIXUP_1698.x;
            _RESERVED_IDENTIFIER_FIXUP_3466.y = _RESERVED_IDENTIFIER_FIXUP_1698.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1708 = _RESERVED_IDENTIFIER_FIXUP_3454.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3470;
            _RESERVED_IDENTIFIER_FIXUP_3470.x = _RESERVED_IDENTIFIER_FIXUP_1708.x;
            _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_1708.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1716 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1716.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1716.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1722 = hdLod6(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_3458.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3462.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3466.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3470.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3458.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1722.y = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3462.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1722.z = hdLod6(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3466.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1722.w = hdLod6(param_28, param_29).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1779 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1722 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3470.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1785 = hdLod6(param_30, param_31).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_1785;
            float _RESERVED_IDENTIFIER_FIXUP_1790 = float(_RESERVED_IDENTIFIER_FIXUP_1785 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_1790;
            float _RESERVED_IDENTIFIER_FIXUP_1793 = dot(_RESERVED_IDENTIFIER_FIXUP_1779, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3454.z = _RESERVED_IDENTIFIER_FIXUP_1793;
            float _RESERVED_IDENTIFIER_FIXUP_1799 = _RESERVED_IDENTIFIER_FIXUP_1790 + _RESERVED_IDENTIFIER_FIXUP_1793;
            _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_1799;
            _RESERVED_IDENTIFIER_FIXUP_3454.x = _RESERVED_IDENTIFIER_FIXUP_1799 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4124 = _RESERVED_IDENTIFIER_FIXUP_1779;
            _RESERVED_IDENTIFIER_FIXUP_4121 = _RESERVED_IDENTIFIER_FIXUP_3454;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1812 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3298 = _RESERVED_IDENTIFIER_FIXUP_3281;
            _RESERVED_IDENTIFIER_FIXUP_3298.y = _RESERVED_IDENTIFIER_FIXUP_1812;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4125;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4122;
            if (_RESERVED_IDENTIFIER_FIXUP_1812 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1821 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3388 = _RESERVED_IDENTIFIER_FIXUP_3298;
                _RESERVED_IDENTIFIER_FIXUP_3388.y = _RESERVED_IDENTIFIER_FIXUP_1821.x;
                _RESERVED_IDENTIFIER_FIXUP_3388.z = _RESERVED_IDENTIFIER_FIXUP_1821.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1831 = _RESERVED_IDENTIFIER_FIXUP_3388.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3392;
                _RESERVED_IDENTIFIER_FIXUP_3392.x = _RESERVED_IDENTIFIER_FIXUP_1831.x;
                _RESERVED_IDENTIFIER_FIXUP_3392.y = _RESERVED_IDENTIFIER_FIXUP_1831.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1841 = _RESERVED_IDENTIFIER_FIXUP_3388.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3396;
                _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_1841.x;
                _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_1841.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1851 = _RESERVED_IDENTIFIER_FIXUP_3388.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3400;
                _RESERVED_IDENTIFIER_FIXUP_3400.x = _RESERVED_IDENTIFIER_FIXUP_1851.x;
                _RESERVED_IDENTIFIER_FIXUP_3400.y = _RESERVED_IDENTIFIER_FIXUP_1851.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1861 = _RESERVED_IDENTIFIER_FIXUP_3388.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3404;
                _RESERVED_IDENTIFIER_FIXUP_3404.x = _RESERVED_IDENTIFIER_FIXUP_1861.x;
                _RESERVED_IDENTIFIER_FIXUP_3404.y = _RESERVED_IDENTIFIER_FIXUP_1861.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1869 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1869.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1869.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1875 = hdLod7(param_32, param_33);
                _RESERVED_IDENTIFIER_FIXUP_3392.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3396.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3400.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3404.w = 0.0;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3392.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1875.y = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3396.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1875.z = hdLod7(param_36, param_37).x;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3400.xy;
                float param_39 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1875.w = hdLod7(param_38, param_39).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1932 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1875 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3404.xy;
                float param_41 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1938 = hdLod7(param_40, param_41).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3388.y = _RESERVED_IDENTIFIER_FIXUP_1938;
                float _RESERVED_IDENTIFIER_FIXUP_1943 = float(_RESERVED_IDENTIFIER_FIXUP_1938 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3388.y = _RESERVED_IDENTIFIER_FIXUP_1943;
                float _RESERVED_IDENTIFIER_FIXUP_1946 = dot(_RESERVED_IDENTIFIER_FIXUP_1932, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3388.z = _RESERVED_IDENTIFIER_FIXUP_1946;
                float _RESERVED_IDENTIFIER_FIXUP_1952 = _RESERVED_IDENTIFIER_FIXUP_1943 + _RESERVED_IDENTIFIER_FIXUP_1946;
                _RESERVED_IDENTIFIER_FIXUP_3388.y = _RESERVED_IDENTIFIER_FIXUP_1952;
                _RESERVED_IDENTIFIER_FIXUP_3388.x = _RESERVED_IDENTIFIER_FIXUP_1952 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4125 = _RESERVED_IDENTIFIER_FIXUP_1932;
                _RESERVED_IDENTIFIER_FIXUP_4122 = _RESERVED_IDENTIFIER_FIXUP_3388;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3302 = _RESERVED_IDENTIFIER_FIXUP_3273;
                _RESERVED_IDENTIFIER_FIXUP_3302.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3302.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1968 = (_RESERVED_IDENTIFIER_FIXUP_3302.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3307;
                _RESERVED_IDENTIFIER_FIXUP_3307.x = _RESERVED_IDENTIFIER_FIXUP_1968.x;
                _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_1968.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1978 = _RESERVED_IDENTIFIER_FIXUP_3307.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3311;
                _RESERVED_IDENTIFIER_FIXUP_3311.x = _RESERVED_IDENTIFIER_FIXUP_1978.x;
                _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_1978.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1988 = _RESERVED_IDENTIFIER_FIXUP_3307.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3315;
                _RESERVED_IDENTIFIER_FIXUP_3315.x = _RESERVED_IDENTIFIER_FIXUP_1988.x;
                _RESERVED_IDENTIFIER_FIXUP_3315.y = _RESERVED_IDENTIFIER_FIXUP_1988.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1998 = _RESERVED_IDENTIFIER_FIXUP_3307.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3319;
                _RESERVED_IDENTIFIER_FIXUP_3319.x = _RESERVED_IDENTIFIER_FIXUP_1998.x;
                _RESERVED_IDENTIFIER_FIXUP_3319.y = _RESERVED_IDENTIFIER_FIXUP_1998.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2008 = _RESERVED_IDENTIFIER_FIXUP_3307.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3323;
                _RESERVED_IDENTIFIER_FIXUP_3323.x = _RESERVED_IDENTIFIER_FIXUP_2008.x;
                _RESERVED_IDENTIFIER_FIXUP_3323.y = _RESERVED_IDENTIFIER_FIXUP_2008.y;
                _RESERVED_IDENTIFIER_FIXUP_3307.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3307.xy;
                float param_43 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2022 = hdLod8(param_42, param_43);
                _RESERVED_IDENTIFIER_FIXUP_3311.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3315.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3319.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3323.w = 0.0;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3311.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2022.y = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3315.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2022.z = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3319.xy;
                float param_49 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2022.w = hdLod8(param_48, param_49).x;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3323.xy;
                float param_51 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2085 = hdLod8(param_50, param_51).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3363 = _RESERVED_IDENTIFIER_FIXUP_3298;
                _RESERVED_IDENTIFIER_FIXUP_3363.y = _RESERVED_IDENTIFIER_FIXUP_2085;
                float _RESERVED_IDENTIFIER_FIXUP_2090 = float(_RESERVED_IDENTIFIER_FIXUP_2085 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3363.y = _RESERVED_IDENTIFIER_FIXUP_2090;
                float _RESERVED_IDENTIFIER_FIXUP_2093 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2022 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3363.z = _RESERVED_IDENTIFIER_FIXUP_2093;
                float _RESERVED_IDENTIFIER_FIXUP_2099 = _RESERVED_IDENTIFIER_FIXUP_2090 + _RESERVED_IDENTIFIER_FIXUP_2093;
                _RESERVED_IDENTIFIER_FIXUP_3363.y = _RESERVED_IDENTIFIER_FIXUP_2099;
                float _RESERVED_IDENTIFIER_FIXUP_2107 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3363.z = _RESERVED_IDENTIFIER_FIXUP_2107;
                float _RESERVED_IDENTIFIER_FIXUP_2113 = clamp((_RESERVED_IDENTIFIER_FIXUP_2107 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3363.z = _RESERVED_IDENTIFIER_FIXUP_2113;
                float _RESERVED_IDENTIFIER_FIXUP_2118 = (_RESERVED_IDENTIFIER_FIXUP_2099 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3363.y = _RESERVED_IDENTIFIER_FIXUP_2118;
                _RESERVED_IDENTIFIER_FIXUP_3363.x = (_RESERVED_IDENTIFIER_FIXUP_2113 * _RESERVED_IDENTIFIER_FIXUP_2118) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4125 = _RESERVED_IDENTIFIER_FIXUP_3302;
                _RESERVED_IDENTIFIER_FIXUP_4122 = _RESERVED_IDENTIFIER_FIXUP_3363;
            }
            _RESERVED_IDENTIFIER_FIXUP_4124 = _RESERVED_IDENTIFIER_FIXUP_4125;
            _RESERVED_IDENTIFIER_FIXUP_4121 = _RESERVED_IDENTIFIER_FIXUP_4122;
        }
        _RESERVED_IDENTIFIER_FIXUP_4123 = _RESERVED_IDENTIFIER_FIXUP_4124;
        _RESERVED_IDENTIFIER_FIXUP_4120 = _RESERVED_IDENTIFIER_FIXUP_4121;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3640 = _RESERVED_IDENTIFIER_FIXUP_4120;
    _RESERVED_IDENTIFIER_FIXUP_3640.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3642 = _RESERVED_IDENTIFIER_FIXUP_4123;
    _RESERVED_IDENTIFIER_FIXUP_3642.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3642.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3642.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2157 = _RESERVED_IDENTIFIER_FIXUP_3640.xxx * _RESERVED_IDENTIFIER_FIXUP_3642.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4145 = vec4(_RESERVED_IDENTIFIER_FIXUP_2157.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2157.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2171 = (_RESERVED_IDENTIFIER_FIXUP_1378.xyz * _RESERVED_IDENTIFIER_FIXUP_4145.yyy) + _RESERVED_IDENTIFIER_FIXUP_4145.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3654 = _RESERVED_IDENTIFIER_FIXUP_1378;
    _RESERVED_IDENTIFIER_FIXUP_3654.x = _RESERVED_IDENTIFIER_FIXUP_2171.x;
    _RESERVED_IDENTIFIER_FIXUP_3654.y = _RESERVED_IDENTIFIER_FIXUP_2171.y;
    _RESERVED_IDENTIFIER_FIXUP_3654.z = _RESERVED_IDENTIFIER_FIXUP_2171.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2184 = _RESERVED_IDENTIFIER_FIXUP_3654.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3660 = _RESERVED_IDENTIFIER_FIXUP_3654;
    _RESERVED_IDENTIFIER_FIXUP_3660.x = _RESERVED_IDENTIFIER_FIXUP_2184.x;
    _RESERVED_IDENTIFIER_FIXUP_3660.y = _RESERVED_IDENTIFIER_FIXUP_2184.y;
    _RESERVED_IDENTIFIER_FIXUP_3660.z = _RESERVED_IDENTIFIER_FIXUP_2184.z;
    vec2 param_52 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2243 = hdTex0(param_52);
    vec2 param_53 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2247 = hdTex1(param_53);
    vec2 param_54 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2251 = hdTex2(param_54);
    vec2 param_55 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2255 = hdTex3(param_55);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2270 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3680 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3680.x = _RESERVED_IDENTIFIER_FIXUP_2270.x;
    _RESERVED_IDENTIFIER_FIXUP_3680.y = _RESERVED_IDENTIFIER_FIXUP_2270.y;
    _RESERVED_IDENTIFIER_FIXUP_3680.z = _RESERVED_IDENTIFIER_FIXUP_2270.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2278 = _RESERVED_IDENTIFIER_FIXUP_2243.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2281 = _RESERVED_IDENTIFIER_FIXUP_2278 * _RESERVED_IDENTIFIER_FIXUP_3680.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3686 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3686.x = _RESERVED_IDENTIFIER_FIXUP_2281.x;
    _RESERVED_IDENTIFIER_FIXUP_3686.y = _RESERVED_IDENTIFIER_FIXUP_2281.y;
    _RESERVED_IDENTIFIER_FIXUP_3686.z = _RESERVED_IDENTIFIER_FIXUP_2281.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2296 = mix(_RESERVED_IDENTIFIER_FIXUP_3686.xyz, _RESERVED_IDENTIFIER_FIXUP_2278, _RESERVED_IDENTIFIER_FIXUP_1309);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3692 = _RESERVED_IDENTIFIER_FIXUP_2243;
    _RESERVED_IDENTIFIER_FIXUP_3692.x = _RESERVED_IDENTIFIER_FIXUP_2296.x;
    _RESERVED_IDENTIFIER_FIXUP_3692.y = _RESERVED_IDENTIFIER_FIXUP_2296.y;
    _RESERVED_IDENTIFIER_FIXUP_3692.z = _RESERVED_IDENTIFIER_FIXUP_2296.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2304 = _RESERVED_IDENTIFIER_FIXUP_2247.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2307 = _RESERVED_IDENTIFIER_FIXUP_2304 * _RESERVED_IDENTIFIER_FIXUP_3680.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3686.x = _RESERVED_IDENTIFIER_FIXUP_2307.x;
    _RESERVED_IDENTIFIER_FIXUP_3686.y = _RESERVED_IDENTIFIER_FIXUP_2307.y;
    _RESERVED_IDENTIFIER_FIXUP_3686.z = _RESERVED_IDENTIFIER_FIXUP_2307.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2322 = mix(_RESERVED_IDENTIFIER_FIXUP_3686.xyz, _RESERVED_IDENTIFIER_FIXUP_2304, _RESERVED_IDENTIFIER_FIXUP_1335);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3704 = _RESERVED_IDENTIFIER_FIXUP_2247;
    _RESERVED_IDENTIFIER_FIXUP_3704.x = _RESERVED_IDENTIFIER_FIXUP_2322.x;
    _RESERVED_IDENTIFIER_FIXUP_3704.y = _RESERVED_IDENTIFIER_FIXUP_2322.y;
    _RESERVED_IDENTIFIER_FIXUP_3704.z = _RESERVED_IDENTIFIER_FIXUP_2322.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2330 = _RESERVED_IDENTIFIER_FIXUP_2251.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2333 = _RESERVED_IDENTIFIER_FIXUP_2330 * _RESERVED_IDENTIFIER_FIXUP_3680.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4147 = vec4(_RESERVED_IDENTIFIER_FIXUP_2333.xy, _RESERVED_IDENTIFIER_FIXUP_1279, _RESERVED_IDENTIFIER_FIXUP_2333.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2348 = mix(_RESERVED_IDENTIFIER_FIXUP_4147.xyw, _RESERVED_IDENTIFIER_FIXUP_2330, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4147.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3716 = _RESERVED_IDENTIFIER_FIXUP_2251;
    _RESERVED_IDENTIFIER_FIXUP_3716.x = _RESERVED_IDENTIFIER_FIXUP_2348.x;
    _RESERVED_IDENTIFIER_FIXUP_3716.y = _RESERVED_IDENTIFIER_FIXUP_2348.y;
    _RESERVED_IDENTIFIER_FIXUP_3716.z = _RESERVED_IDENTIFIER_FIXUP_2348.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2364 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3692, _RESERVED_IDENTIFIER_FIXUP_3704, _RESERVED_IDENTIFIER_FIXUP_2255.xxxx), _RESERVED_IDENTIFIER_FIXUP_3716, _RESERVED_IDENTIFIER_FIXUP_2255.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3724 = _RESERVED_IDENTIFIER_FIXUP_3704;
    _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_1385;
    float _RESERVED_IDENTIFIER_FIXUP_2377 = clamp((_RESERVED_IDENTIFIER_FIXUP_1385 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2377;
    float _RESERVED_IDENTIFIER_FIXUP_2383 = ((-_RESERVED_IDENTIFIER_FIXUP_2377) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2383;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4138;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4132;
    if (_RESERVED_IDENTIFIER_FIXUP_2383 != (-_RESERVED_IDENTIFIER_FIXUP_2383))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2395 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3963;
        _RESERVED_IDENTIFIER_FIXUP_3963.x = _RESERVED_IDENTIFIER_FIXUP_2395.x;
        _RESERVED_IDENTIFIER_FIXUP_3963.y = _RESERVED_IDENTIFIER_FIXUP_2395.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2405 = _RESERVED_IDENTIFIER_FIXUP_3963.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3967;
        _RESERVED_IDENTIFIER_FIXUP_3967.x = _RESERVED_IDENTIFIER_FIXUP_2405.x;
        _RESERVED_IDENTIFIER_FIXUP_3967.y = _RESERVED_IDENTIFIER_FIXUP_2405.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2415 = _RESERVED_IDENTIFIER_FIXUP_3963.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3971;
        _RESERVED_IDENTIFIER_FIXUP_3971.x = _RESERVED_IDENTIFIER_FIXUP_2415.x;
        _RESERVED_IDENTIFIER_FIXUP_3971.y = _RESERVED_IDENTIFIER_FIXUP_2415.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2425 = _RESERVED_IDENTIFIER_FIXUP_3963.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3975;
        _RESERVED_IDENTIFIER_FIXUP_3975.x = _RESERVED_IDENTIFIER_FIXUP_2425.x;
        _RESERVED_IDENTIFIER_FIXUP_3975.y = _RESERVED_IDENTIFIER_FIXUP_2425.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2435 = _RESERVED_IDENTIFIER_FIXUP_3963.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3979;
        _RESERVED_IDENTIFIER_FIXUP_3979.x = _RESERVED_IDENTIFIER_FIXUP_2435.x;
        _RESERVED_IDENTIFIER_FIXUP_3979.y = _RESERVED_IDENTIFIER_FIXUP_2435.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2445 = _RESERVED_IDENTIFIER_FIXUP_3963.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3983;
        _RESERVED_IDENTIFIER_FIXUP_3983.x = _RESERVED_IDENTIFIER_FIXUP_2445.x;
        _RESERVED_IDENTIFIER_FIXUP_3983.y = _RESERVED_IDENTIFIER_FIXUP_2445.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2455 = _RESERVED_IDENTIFIER_FIXUP_3963.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3987;
        _RESERVED_IDENTIFIER_FIXUP_3987.x = _RESERVED_IDENTIFIER_FIXUP_2455.x;
        _RESERVED_IDENTIFIER_FIXUP_3987.y = _RESERVED_IDENTIFIER_FIXUP_2455.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2465 = _RESERVED_IDENTIFIER_FIXUP_3963.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3991;
        _RESERVED_IDENTIFIER_FIXUP_3991.x = _RESERVED_IDENTIFIER_FIXUP_2465.x;
        _RESERVED_IDENTIFIER_FIXUP_3991.y = _RESERVED_IDENTIFIER_FIXUP_2465.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2475 = _RESERVED_IDENTIFIER_FIXUP_3963.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3995;
        _RESERVED_IDENTIFIER_FIXUP_3995.x = _RESERVED_IDENTIFIER_FIXUP_2475.x;
        _RESERVED_IDENTIFIER_FIXUP_3995.y = _RESERVED_IDENTIFIER_FIXUP_2475.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2483 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2483.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2483.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2489 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3967.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3971.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3975.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3979.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3979.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2529 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3983.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3987.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3991.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3995.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3995.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2569 = hdLod5(param_60, param_61);
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3967.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2489.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3971.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2489.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3975.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2489.w = hdLod5(param_66, param_67).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2586 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2489 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3983.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2529.y = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3987.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2529.z = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3991.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2529.w = hdLod5(param_72, param_73).x;
        float _RESERVED_IDENTIFIER_FIXUP_2609 = _RESERVED_IDENTIFIER_FIXUP_2569.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4060 = _RESERVED_IDENTIFIER_FIXUP_2569;
        _RESERVED_IDENTIFIER_FIXUP_4060.x = _RESERVED_IDENTIFIER_FIXUP_2609;
        float _RESERVED_IDENTIFIER_FIXUP_2614 = float(_RESERVED_IDENTIFIER_FIXUP_2609 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_4060.x = _RESERVED_IDENTIFIER_FIXUP_2614;
        float _RESERVED_IDENTIFIER_FIXUP_2617 = dot(_RESERVED_IDENTIFIER_FIXUP_2586, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4060.y = _RESERVED_IDENTIFIER_FIXUP_2617;
        float _RESERVED_IDENTIFIER_FIXUP_2620 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2529 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4060.z = _RESERVED_IDENTIFIER_FIXUP_2620;
        float _RESERVED_IDENTIFIER_FIXUP_2626 = _RESERVED_IDENTIFIER_FIXUP_2617 + _RESERVED_IDENTIFIER_FIXUP_2620;
        _RESERVED_IDENTIFIER_FIXUP_4060.y = _RESERVED_IDENTIFIER_FIXUP_2626;
        float _RESERVED_IDENTIFIER_FIXUP_2632 = _RESERVED_IDENTIFIER_FIXUP_2614 + _RESERVED_IDENTIFIER_FIXUP_2626;
        _RESERVED_IDENTIFIER_FIXUP_4060.x = _RESERVED_IDENTIFIER_FIXUP_2632;
        _RESERVED_IDENTIFIER_FIXUP_4060.x = _RESERVED_IDENTIFIER_FIXUP_2632 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4138 = _RESERVED_IDENTIFIER_FIXUP_2586;
        _RESERVED_IDENTIFIER_FIXUP_4132 = _RESERVED_IDENTIFIER_FIXUP_4060;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2645 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3724.y = _RESERVED_IDENTIFIER_FIXUP_2645;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4139;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4133;
        if (_RESERVED_IDENTIFIER_FIXUP_2645 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2654 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3897 = _RESERVED_IDENTIFIER_FIXUP_3724;
            _RESERVED_IDENTIFIER_FIXUP_3897.y = _RESERVED_IDENTIFIER_FIXUP_2654.x;
            _RESERVED_IDENTIFIER_FIXUP_3897.z = _RESERVED_IDENTIFIER_FIXUP_2654.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2664 = _RESERVED_IDENTIFIER_FIXUP_3897.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3901;
            _RESERVED_IDENTIFIER_FIXUP_3901.x = _RESERVED_IDENTIFIER_FIXUP_2664.x;
            _RESERVED_IDENTIFIER_FIXUP_3901.y = _RESERVED_IDENTIFIER_FIXUP_2664.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2674 = _RESERVED_IDENTIFIER_FIXUP_3897.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3905;
            _RESERVED_IDENTIFIER_FIXUP_3905.x = _RESERVED_IDENTIFIER_FIXUP_2674.x;
            _RESERVED_IDENTIFIER_FIXUP_3905.y = _RESERVED_IDENTIFIER_FIXUP_2674.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2684 = _RESERVED_IDENTIFIER_FIXUP_3897.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3909;
            _RESERVED_IDENTIFIER_FIXUP_3909.x = _RESERVED_IDENTIFIER_FIXUP_2684.x;
            _RESERVED_IDENTIFIER_FIXUP_3909.y = _RESERVED_IDENTIFIER_FIXUP_2684.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2694 = _RESERVED_IDENTIFIER_FIXUP_3897.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3913;
            _RESERVED_IDENTIFIER_FIXUP_3913.x = _RESERVED_IDENTIFIER_FIXUP_2694.x;
            _RESERVED_IDENTIFIER_FIXUP_3913.y = _RESERVED_IDENTIFIER_FIXUP_2694.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2702 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2702.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2702.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2708 = hdLod6(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3901.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3905.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3909.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3913.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3901.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2708.y = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3905.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2708.z = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3909.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2708.w = hdLod6(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2765 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2708 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3913.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2771 = hdLod6(param_82, param_83).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3897.y = _RESERVED_IDENTIFIER_FIXUP_2771;
            float _RESERVED_IDENTIFIER_FIXUP_2776 = float(_RESERVED_IDENTIFIER_FIXUP_2771 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3897.y = _RESERVED_IDENTIFIER_FIXUP_2776;
            float _RESERVED_IDENTIFIER_FIXUP_2779 = dot(_RESERVED_IDENTIFIER_FIXUP_2765, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3897.z = _RESERVED_IDENTIFIER_FIXUP_2779;
            float _RESERVED_IDENTIFIER_FIXUP_2785 = _RESERVED_IDENTIFIER_FIXUP_2776 + _RESERVED_IDENTIFIER_FIXUP_2779;
            _RESERVED_IDENTIFIER_FIXUP_3897.y = _RESERVED_IDENTIFIER_FIXUP_2785;
            _RESERVED_IDENTIFIER_FIXUP_3897.x = _RESERVED_IDENTIFIER_FIXUP_2785 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4139 = _RESERVED_IDENTIFIER_FIXUP_2765;
            _RESERVED_IDENTIFIER_FIXUP_4133 = _RESERVED_IDENTIFIER_FIXUP_3897;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2798 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3741 = _RESERVED_IDENTIFIER_FIXUP_3724;
            _RESERVED_IDENTIFIER_FIXUP_3741.y = _RESERVED_IDENTIFIER_FIXUP_2798;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4140;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4134;
            if (_RESERVED_IDENTIFIER_FIXUP_2798 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2807 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3831 = _RESERVED_IDENTIFIER_FIXUP_3741;
                _RESERVED_IDENTIFIER_FIXUP_3831.y = _RESERVED_IDENTIFIER_FIXUP_2807.x;
                _RESERVED_IDENTIFIER_FIXUP_3831.z = _RESERVED_IDENTIFIER_FIXUP_2807.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2817 = _RESERVED_IDENTIFIER_FIXUP_3831.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3835;
                _RESERVED_IDENTIFIER_FIXUP_3835.x = _RESERVED_IDENTIFIER_FIXUP_2817.x;
                _RESERVED_IDENTIFIER_FIXUP_3835.y = _RESERVED_IDENTIFIER_FIXUP_2817.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2827 = _RESERVED_IDENTIFIER_FIXUP_3831.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3839;
                _RESERVED_IDENTIFIER_FIXUP_3839.x = _RESERVED_IDENTIFIER_FIXUP_2827.x;
                _RESERVED_IDENTIFIER_FIXUP_3839.y = _RESERVED_IDENTIFIER_FIXUP_2827.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2837 = _RESERVED_IDENTIFIER_FIXUP_3831.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3843;
                _RESERVED_IDENTIFIER_FIXUP_3843.x = _RESERVED_IDENTIFIER_FIXUP_2837.x;
                _RESERVED_IDENTIFIER_FIXUP_3843.y = _RESERVED_IDENTIFIER_FIXUP_2837.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2847 = _RESERVED_IDENTIFIER_FIXUP_3831.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3847;
                _RESERVED_IDENTIFIER_FIXUP_3847.x = _RESERVED_IDENTIFIER_FIXUP_2847.x;
                _RESERVED_IDENTIFIER_FIXUP_3847.y = _RESERVED_IDENTIFIER_FIXUP_2847.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2855 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2855.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2855.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2861 = hdLod7(param_84, param_85);
                _RESERVED_IDENTIFIER_FIXUP_3835.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3839.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3843.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3847.w = 0.0;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3835.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2861.y = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3839.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2861.z = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3843.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2861.w = hdLod7(param_90, param_91).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2918 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2861 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3847.xy;
                float param_93 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2924 = hdLod7(param_92, param_93).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3831.y = _RESERVED_IDENTIFIER_FIXUP_2924;
                float _RESERVED_IDENTIFIER_FIXUP_2929 = float(_RESERVED_IDENTIFIER_FIXUP_2924 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3831.y = _RESERVED_IDENTIFIER_FIXUP_2929;
                float _RESERVED_IDENTIFIER_FIXUP_2932 = dot(_RESERVED_IDENTIFIER_FIXUP_2918, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3831.z = _RESERVED_IDENTIFIER_FIXUP_2932;
                float _RESERVED_IDENTIFIER_FIXUP_2938 = _RESERVED_IDENTIFIER_FIXUP_2929 + _RESERVED_IDENTIFIER_FIXUP_2932;
                _RESERVED_IDENTIFIER_FIXUP_3831.y = _RESERVED_IDENTIFIER_FIXUP_2938;
                _RESERVED_IDENTIFIER_FIXUP_3831.x = _RESERVED_IDENTIFIER_FIXUP_2938 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4140 = _RESERVED_IDENTIFIER_FIXUP_2918;
                _RESERVED_IDENTIFIER_FIXUP_4134 = _RESERVED_IDENTIFIER_FIXUP_3831;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_3716;
                _RESERVED_IDENTIFIER_FIXUP_3745.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3745.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2954 = (_RESERVED_IDENTIFIER_FIXUP_3745.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3750;
                _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2954.x;
                _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2954.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2964 = _RESERVED_IDENTIFIER_FIXUP_3750.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3754;
                _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2964.x;
                _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2964.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2974 = _RESERVED_IDENTIFIER_FIXUP_3750.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3758;
                _RESERVED_IDENTIFIER_FIXUP_3758.x = _RESERVED_IDENTIFIER_FIXUP_2974.x;
                _RESERVED_IDENTIFIER_FIXUP_3758.y = _RESERVED_IDENTIFIER_FIXUP_2974.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2984 = _RESERVED_IDENTIFIER_FIXUP_3750.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3762;
                _RESERVED_IDENTIFIER_FIXUP_3762.x = _RESERVED_IDENTIFIER_FIXUP_2984.x;
                _RESERVED_IDENTIFIER_FIXUP_3762.y = _RESERVED_IDENTIFIER_FIXUP_2984.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2994 = _RESERVED_IDENTIFIER_FIXUP_3750.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3766;
                _RESERVED_IDENTIFIER_FIXUP_3766.x = _RESERVED_IDENTIFIER_FIXUP_2994.x;
                _RESERVED_IDENTIFIER_FIXUP_3766.y = _RESERVED_IDENTIFIER_FIXUP_2994.y;
                _RESERVED_IDENTIFIER_FIXUP_3750.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3750.xy;
                float param_95 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3008 = hdLod8(param_94, param_95);
                _RESERVED_IDENTIFIER_FIXUP_3754.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3758.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3762.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3766.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3754.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3008.y = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3758.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3008.z = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3762.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3008.w = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3766.xy;
                float param_103 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3071 = hdLod8(param_102, param_103).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3806 = _RESERVED_IDENTIFIER_FIXUP_3741;
                _RESERVED_IDENTIFIER_FIXUP_3806.y = _RESERVED_IDENTIFIER_FIXUP_3071;
                float _RESERVED_IDENTIFIER_FIXUP_3076 = float(_RESERVED_IDENTIFIER_FIXUP_3071 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3806.y = _RESERVED_IDENTIFIER_FIXUP_3076;
                float _RESERVED_IDENTIFIER_FIXUP_3079 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_3008 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3806.z = _RESERVED_IDENTIFIER_FIXUP_3079;
                float _RESERVED_IDENTIFIER_FIXUP_3085 = _RESERVED_IDENTIFIER_FIXUP_3076 + _RESERVED_IDENTIFIER_FIXUP_3079;
                _RESERVED_IDENTIFIER_FIXUP_3806.y = _RESERVED_IDENTIFIER_FIXUP_3085;
                float _RESERVED_IDENTIFIER_FIXUP_3093 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3806.z = _RESERVED_IDENTIFIER_FIXUP_3093;
                float _RESERVED_IDENTIFIER_FIXUP_3099 = clamp((_RESERVED_IDENTIFIER_FIXUP_3093 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3806.z = _RESERVED_IDENTIFIER_FIXUP_3099;
                float _RESERVED_IDENTIFIER_FIXUP_3104 = (_RESERVED_IDENTIFIER_FIXUP_3085 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3806.y = _RESERVED_IDENTIFIER_FIXUP_3104;
                _RESERVED_IDENTIFIER_FIXUP_3806.x = (_RESERVED_IDENTIFIER_FIXUP_3099 * _RESERVED_IDENTIFIER_FIXUP_3104) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4140 = _RESERVED_IDENTIFIER_FIXUP_3745;
                _RESERVED_IDENTIFIER_FIXUP_4134 = _RESERVED_IDENTIFIER_FIXUP_3806;
            }
            _RESERVED_IDENTIFIER_FIXUP_4139 = _RESERVED_IDENTIFIER_FIXUP_4140;
            _RESERVED_IDENTIFIER_FIXUP_4133 = _RESERVED_IDENTIFIER_FIXUP_4134;
        }
        _RESERVED_IDENTIFIER_FIXUP_4138 = _RESERVED_IDENTIFIER_FIXUP_4139;
        _RESERVED_IDENTIFIER_FIXUP_4132 = _RESERVED_IDENTIFIER_FIXUP_4133;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3119 = (_RESERVED_IDENTIFIER_FIXUP_4132.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4081 = _RESERVED_IDENTIFIER_FIXUP_4132;
    _RESERVED_IDENTIFIER_FIXUP_4081.y = _RESERVED_IDENTIFIER_FIXUP_3119;
    _RESERVED_IDENTIFIER_FIXUP_4081.y = _RESERVED_IDENTIFIER_FIXUP_3119;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3132 = _RESERVED_IDENTIFIER_FIXUP_2364.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4087 = _RESERVED_IDENTIFIER_FIXUP_4138;
    _RESERVED_IDENTIFIER_FIXUP_4087.x = _RESERVED_IDENTIFIER_FIXUP_3132.x;
    _RESERVED_IDENTIFIER_FIXUP_4087.y = _RESERVED_IDENTIFIER_FIXUP_3132.y;
    _RESERVED_IDENTIFIER_FIXUP_4087.z = _RESERVED_IDENTIFIER_FIXUP_3132.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3143 = _RESERVED_IDENTIFIER_FIXUP_4081.xxx * _RESERVED_IDENTIFIER_FIXUP_4087.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4148 = vec4(_RESERVED_IDENTIFIER_FIXUP_3143.x, _RESERVED_IDENTIFIER_FIXUP_3119, _RESERVED_IDENTIFIER_FIXUP_3143.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3157 = (_RESERVED_IDENTIFIER_FIXUP_2364.xyz * _RESERVED_IDENTIFIER_FIXUP_4148.yyy) + _RESERVED_IDENTIFIER_FIXUP_4148.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4099 = _RESERVED_IDENTIFIER_FIXUP_2364;
    _RESERVED_IDENTIFIER_FIXUP_4099.x = _RESERVED_IDENTIFIER_FIXUP_3157.x;
    _RESERVED_IDENTIFIER_FIXUP_4099.y = _RESERVED_IDENTIFIER_FIXUP_3157.y;
    _RESERVED_IDENTIFIER_FIXUP_4099.z = _RESERVED_IDENTIFIER_FIXUP_3157.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3170 = _RESERVED_IDENTIFIER_FIXUP_4099.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4105 = _RESERVED_IDENTIFIER_FIXUP_4099;
    _RESERVED_IDENTIFIER_FIXUP_4105.x = _RESERVED_IDENTIFIER_FIXUP_3170.x;
    _RESERVED_IDENTIFIER_FIXUP_4105.y = _RESERVED_IDENTIFIER_FIXUP_3170.y;
    _RESERVED_IDENTIFIER_FIXUP_4105.z = _RESERVED_IDENTIFIER_FIXUP_3170.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4105.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1113 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1122;
    if (_RESERVED_IDENTIFIER_FIXUP_1113)
    {
        _RESERVED_IDENTIFIER_FIXUP_1122 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1122 = _RESERVED_IDENTIFIER_FIXUP_1113;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1122)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1159 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3660.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1185 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3223;
    if (_RESERVED_IDENTIFIER_FIXUP_1159 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3223 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1159), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1185);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3223 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1185);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3223;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3119);
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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB243 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB243.x;
        r1.y = hdB243.y;
        vec2 hdB254 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB254.x;
        r2.y = hdB254.y;
        vec2 hdB265 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB265.x;
        r3.y = hdB265.y;
        vec2 hdB276 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB276.x;
        r4.y = hdB276.y;
        vec2 hdB287 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB287.x;
        r5.y = hdB287.y;
        vec2 hdB298 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB298.x;
        r6.y = hdB298.y;
        vec2 hdB309 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB309.x;
        r7.y = hdB309.y;
        vec2 hdB320 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB320.x;
        r8.y = hdB320.y;
        vec4 hdB325 = r1;
        vec2 hdB331 = hdB325.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB331.x;
        r1.y = hdB331.y;
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
            vec2 hdB517 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB517.x;
            r1.z = hdB517.y;
            vec2 hdB527 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB527.x;
            r2.y = hdB527.y;
            vec2 hdB537 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB537.x;
            r3.y = hdB537.y;
            vec2 hdB547 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB547.x;
            r4.y = hdB547.y;
            vec2 hdB557 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB557.x;
            r5.y = hdB557.y;
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
                vec2 hdB673 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB673.x;
                r1.z = hdB673.y;
                vec2 hdB683 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB683.x;
                r2.y = hdB683.y;
                vec2 hdB693 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB693.x;
                r3.y = hdB693.y;
                vec2 hdB703 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB703.x;
                r4.y = hdB703.y;
                vec2 hdB713 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB713.x;
                r5.y = hdB713.y;
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
                vec2 hdB821 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB821.x;
                r3.y = hdB821.y;
                vec2 hdB831 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB831.x;
                r4.y = hdB831.y;
                vec2 hdB841 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB841.x;
                r5.y = hdB841.y;
                vec2 hdB851 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB851.x;
                r6.y = hdB851.y;
                vec2 hdB861 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB861.x;
                r7.y = hdB861.y;
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
    vec3 hdB995 = r0.www * v1.xyz;
    r2.x = hdB995.x;
    r2.y = hdB995.y;
    r2.z = hdB995.z;
    vec4 hdB1002 = r1;
    vec3 hdB1006 = hdB1002.xxx * r2.xyz;
    r1.x = hdB1006.x;
    r1.z = hdB1006.y;
    r1.w = hdB1006.z;
    vec4 hdB1013 = r0;
    vec3 hdB1020 = (hdB1013.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB1020.x;
    r0.y = hdB1020.y;
    r0.z = hdB1020.z;
    vec4 hdB1027 = r0;
    vec3 hdB1034 = hdB1027.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1034.x;
    r0.y = hdB1034.y;
    r0.z = hdB1034.z;
    vec3 hdB1049 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1049.x;
    oC0.y = hdB1049.y;
    oC0.z = hdB1049.z;
    oC0.w = 1.0;
    bool hdB1061 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1069;
    if (hdB1061)
    {
        hdB1069 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1069 = hdB1061;
    }
    if (hdB1069)
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
    bool _3673 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3683;
    if (_3673)
    {
        _3683 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3683 = _3673;
    }
    if (_3683)
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
        bool _3708 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3723;
        if (!_3708)
        {
            _3723 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3723 = _3708;
        }
        if (_3723)
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
