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
float _RESERVED_IDENTIFIER_FIXUP_3995;
vec4 _RESERVED_IDENTIFIER_FIXUP_3996;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1235 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1239 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1243 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1247 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1251 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3174;
    _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
    _RESERVED_IDENTIFIER_FIXUP_3174.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
    float _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_1251.z;
    _RESERVED_IDENTIFIER_FIXUP_3174.z = _RESERVED_IDENTIFIER_FIXUP_1257;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1259 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3995).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_1259 + _RESERVED_IDENTIFIER_FIXUP_1259;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3180;
    _RESERVED_IDENTIFIER_FIXUP_3180.x = _RESERVED_IDENTIFIER_FIXUP_1262.x;
    _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_1262.y;
    _RESERVED_IDENTIFIER_FIXUP_3180.z = _RESERVED_IDENTIFIER_FIXUP_1262.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1270 = _RESERVED_IDENTIFIER_FIXUP_1235.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1273 = _RESERVED_IDENTIFIER_FIXUP_1270 * _RESERVED_IDENTIFIER_FIXUP_3180.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3186;
    _RESERVED_IDENTIFIER_FIXUP_3186.x = _RESERVED_IDENTIFIER_FIXUP_1273.x;
    _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_1273.y;
    _RESERVED_IDENTIFIER_FIXUP_3186.z = _RESERVED_IDENTIFIER_FIXUP_1273.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1287 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3174.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1288 = mix(_RESERVED_IDENTIFIER_FIXUP_3186.xyz, _RESERVED_IDENTIFIER_FIXUP_1270, _RESERVED_IDENTIFIER_FIXUP_1287);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3192 = _RESERVED_IDENTIFIER_FIXUP_1235;
    _RESERVED_IDENTIFIER_FIXUP_3192.x = _RESERVED_IDENTIFIER_FIXUP_1288.x;
    _RESERVED_IDENTIFIER_FIXUP_3192.y = _RESERVED_IDENTIFIER_FIXUP_1288.y;
    _RESERVED_IDENTIFIER_FIXUP_3192.z = _RESERVED_IDENTIFIER_FIXUP_1288.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_1239.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_1296 * _RESERVED_IDENTIFIER_FIXUP_3180.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3198;
    _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_1299.x;
    _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1299.y;
    _RESERVED_IDENTIFIER_FIXUP_3198.z = _RESERVED_IDENTIFIER_FIXUP_1299.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1313 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3174.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1314 = mix(_RESERVED_IDENTIFIER_FIXUP_3198.xyz, _RESERVED_IDENTIFIER_FIXUP_1296, _RESERVED_IDENTIFIER_FIXUP_1313);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3204 = _RESERVED_IDENTIFIER_FIXUP_1239;
    _RESERVED_IDENTIFIER_FIXUP_3204.x = _RESERVED_IDENTIFIER_FIXUP_1314.x;
    _RESERVED_IDENTIFIER_FIXUP_3204.y = _RESERVED_IDENTIFIER_FIXUP_1314.y;
    _RESERVED_IDENTIFIER_FIXUP_3204.z = _RESERVED_IDENTIFIER_FIXUP_1314.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1322 = _RESERVED_IDENTIFIER_FIXUP_1243.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1325 = _RESERVED_IDENTIFIER_FIXUP_1322 * _RESERVED_IDENTIFIER_FIXUP_3180.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4021 = vec4(_RESERVED_IDENTIFIER_FIXUP_1325.xy, _RESERVED_IDENTIFIER_FIXUP_1257, _RESERVED_IDENTIFIER_FIXUP_1325.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1340 = mix(_RESERVED_IDENTIFIER_FIXUP_4021.xyw, _RESERVED_IDENTIFIER_FIXUP_1322, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4021.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3216 = _RESERVED_IDENTIFIER_FIXUP_1243;
    _RESERVED_IDENTIFIER_FIXUP_3216.x = _RESERVED_IDENTIFIER_FIXUP_1340.x;
    _RESERVED_IDENTIFIER_FIXUP_3216.y = _RESERVED_IDENTIFIER_FIXUP_1340.y;
    _RESERVED_IDENTIFIER_FIXUP_3216.z = _RESERVED_IDENTIFIER_FIXUP_1340.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1356 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3192, _RESERVED_IDENTIFIER_FIXUP_3204, _RESERVED_IDENTIFIER_FIXUP_1247.xxxx), _RESERVED_IDENTIFIER_FIXUP_3216, _RESERVED_IDENTIFIER_FIXUP_1247.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1363 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3224 = _RESERVED_IDENTIFIER_FIXUP_3204;
    _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_1363;
    float _RESERVED_IDENTIFIER_FIXUP_1369 = clamp((_RESERVED_IDENTIFIER_FIXUP_1363 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_1369;
    float _RESERVED_IDENTIFIER_FIXUP_1375 = ((-_RESERVED_IDENTIFIER_FIXUP_1369) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_1375;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4000;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3997;
    if (_RESERVED_IDENTIFIER_FIXUP_1375 != (-_RESERVED_IDENTIFIER_FIXUP_1375))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1387 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1387.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1387.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1393 = hdLod5(param_4, param_5);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1397 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_1393;
        _RESERVED_IDENTIFIER_FIXUP_3436.y = _RESERVED_IDENTIFIER_FIXUP_1397.x;
        _RESERVED_IDENTIFIER_FIXUP_3436.z = _RESERVED_IDENTIFIER_FIXUP_1397.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_3436.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3440;
        _RESERVED_IDENTIFIER_FIXUP_3440.x = _RESERVED_IDENTIFIER_FIXUP_1407.x;
        _RESERVED_IDENTIFIER_FIXUP_3440.y = _RESERVED_IDENTIFIER_FIXUP_1407.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1414 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1418 = _RESERVED_IDENTIFIER_FIXUP_1414.y;
        _RESERVED_IDENTIFIER_FIXUP_3440.w = _RESERVED_IDENTIFIER_FIXUP_1418;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3440.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1418;
        float _RESERVED_IDENTIFIER_FIXUP_1429 = _RESERVED_IDENTIFIER_FIXUP_1393.x + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1429;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1436 = _RESERVED_IDENTIFIER_FIXUP_3436.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3453;
        _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_1436.x;
        _RESERVED_IDENTIFIER_FIXUP_3453.y = _RESERVED_IDENTIFIER_FIXUP_1436.y;
        _RESERVED_IDENTIFIER_FIXUP_3453.w = _RESERVED_IDENTIFIER_FIXUP_1418;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3453.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1418;
        float _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_1429 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1458;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1465 = _RESERVED_IDENTIFIER_FIXUP_3436.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3466;
        _RESERVED_IDENTIFIER_FIXUP_3466.x = _RESERVED_IDENTIFIER_FIXUP_1465.x;
        _RESERVED_IDENTIFIER_FIXUP_3466.y = _RESERVED_IDENTIFIER_FIXUP_1465.y;
        _RESERVED_IDENTIFIER_FIXUP_3466.w = _RESERVED_IDENTIFIER_FIXUP_1418;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3466.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1418;
        float _RESERVED_IDENTIFIER_FIXUP_1487 = _RESERVED_IDENTIFIER_FIXUP_1458 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1487;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1494 = _RESERVED_IDENTIFIER_FIXUP_3436.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3479;
        _RESERVED_IDENTIFIER_FIXUP_3479.x = _RESERVED_IDENTIFIER_FIXUP_1494.x;
        _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_1494.y;
        _RESERVED_IDENTIFIER_FIXUP_3479.w = _RESERVED_IDENTIFIER_FIXUP_1418;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3479.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1418;
        float _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_1487 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1516;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_3436.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3492;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_1523.x;
        _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_1523.y;
        _RESERVED_IDENTIFIER_FIXUP_3492.w = _RESERVED_IDENTIFIER_FIXUP_1418;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3492.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1418;
        float _RESERVED_IDENTIFIER_FIXUP_1545 = _RESERVED_IDENTIFIER_FIXUP_1516 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1545;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1552 = _RESERVED_IDENTIFIER_FIXUP_3436.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3505;
        _RESERVED_IDENTIFIER_FIXUP_3505.x = _RESERVED_IDENTIFIER_FIXUP_1552.x;
        _RESERVED_IDENTIFIER_FIXUP_3505.y = _RESERVED_IDENTIFIER_FIXUP_1552.y;
        _RESERVED_IDENTIFIER_FIXUP_3505.w = _RESERVED_IDENTIFIER_FIXUP_1418;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3505.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1418;
        float _RESERVED_IDENTIFIER_FIXUP_1574 = _RESERVED_IDENTIFIER_FIXUP_1545 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1574;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_3436.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3518;
        _RESERVED_IDENTIFIER_FIXUP_3518.x = _RESERVED_IDENTIFIER_FIXUP_1581.x;
        _RESERVED_IDENTIFIER_FIXUP_3518.y = _RESERVED_IDENTIFIER_FIXUP_1581.y;
        _RESERVED_IDENTIFIER_FIXUP_3518.w = _RESERVED_IDENTIFIER_FIXUP_1418;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3518.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1418;
        float _RESERVED_IDENTIFIER_FIXUP_1603 = _RESERVED_IDENTIFIER_FIXUP_1574 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1603;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1610 = _RESERVED_IDENTIFIER_FIXUP_3436.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3531;
        _RESERVED_IDENTIFIER_FIXUP_3531.x = _RESERVED_IDENTIFIER_FIXUP_1610.x;
        _RESERVED_IDENTIFIER_FIXUP_3531.y = _RESERVED_IDENTIFIER_FIXUP_1610.y;
        _RESERVED_IDENTIFIER_FIXUP_3531.w = _RESERVED_IDENTIFIER_FIXUP_1418;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3531.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1418;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1627 = hdLod5(param_20, param_21);
        float _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_1603 + _RESERVED_IDENTIFIER_FIXUP_1627.x;
        _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1632;
        _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1632 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4000 = _RESERVED_IDENTIFIER_FIXUP_1627;
        _RESERVED_IDENTIFIER_FIXUP_3997 = _RESERVED_IDENTIFIER_FIXUP_3436;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1645 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_1645;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4001;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3998;
        if (_RESERVED_IDENTIFIER_FIXUP_1645 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1654 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1664 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1666 = _RESERVED_IDENTIFIER_FIXUP_1664.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3376 = _RESERVED_IDENTIFIER_FIXUP_3224;
            _RESERVED_IDENTIFIER_FIXUP_3376.y = _RESERVED_IDENTIFIER_FIXUP_1666;
            _RESERVED_IDENTIFIER_FIXUP_3376.z = _RESERVED_IDENTIFIER_FIXUP_1664.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1674 = _RESERVED_IDENTIFIER_FIXUP_3376.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3380;
            _RESERVED_IDENTIFIER_FIXUP_3380.x = _RESERVED_IDENTIFIER_FIXUP_1674.x;
            _RESERVED_IDENTIFIER_FIXUP_3380.y = _RESERVED_IDENTIFIER_FIXUP_1674.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1681 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1685 = _RESERVED_IDENTIFIER_FIXUP_1681.y;
            _RESERVED_IDENTIFIER_FIXUP_3380.w = _RESERVED_IDENTIFIER_FIXUP_1685;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1654.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1654.w;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3380.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1685;
            float _RESERVED_IDENTIFIER_FIXUP_1696 = hdLod6(param_22, param_23).x + hdLod6(param_24, param_25).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4027 = vec4(_RESERVED_IDENTIFIER_FIXUP_1375, _RESERVED_IDENTIFIER_FIXUP_1666, _RESERVED_IDENTIFIER_FIXUP_1664.y, _RESERVED_IDENTIFIER_FIXUP_1696);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1703 = _RESERVED_IDENTIFIER_FIXUP_4027.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3393;
            _RESERVED_IDENTIFIER_FIXUP_3393.x = _RESERVED_IDENTIFIER_FIXUP_1703.x;
            _RESERVED_IDENTIFIER_FIXUP_3393.y = _RESERVED_IDENTIFIER_FIXUP_1703.y;
            _RESERVED_IDENTIFIER_FIXUP_3393.w = _RESERVED_IDENTIFIER_FIXUP_1685;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3393.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1685;
            float _RESERVED_IDENTIFIER_FIXUP_1725 = _RESERVED_IDENTIFIER_FIXUP_1696 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_4027.w = _RESERVED_IDENTIFIER_FIXUP_1725;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1732 = _RESERVED_IDENTIFIER_FIXUP_4027.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3406;
            _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_1732.x;
            _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_1732.y;
            _RESERVED_IDENTIFIER_FIXUP_3406.w = _RESERVED_IDENTIFIER_FIXUP_1685;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3406.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1685;
            float _RESERVED_IDENTIFIER_FIXUP_1754 = _RESERVED_IDENTIFIER_FIXUP_1725 + hdLod6(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_4027.w = _RESERVED_IDENTIFIER_FIXUP_1754;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1761 = _RESERVED_IDENTIFIER_FIXUP_4027.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3419;
            _RESERVED_IDENTIFIER_FIXUP_3419.x = _RESERVED_IDENTIFIER_FIXUP_1761.x;
            _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_1761.y;
            _RESERVED_IDENTIFIER_FIXUP_3419.w = _RESERVED_IDENTIFIER_FIXUP_1685;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3419.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1685;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1778 = hdLod6(param_30, param_31);
            float _RESERVED_IDENTIFIER_FIXUP_1783 = _RESERVED_IDENTIFIER_FIXUP_1754 + _RESERVED_IDENTIFIER_FIXUP_1778.x;
            _RESERVED_IDENTIFIER_FIXUP_4027.y = _RESERVED_IDENTIFIER_FIXUP_1783;
            _RESERVED_IDENTIFIER_FIXUP_4027.x = _RESERVED_IDENTIFIER_FIXUP_1783 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4001 = _RESERVED_IDENTIFIER_FIXUP_1778;
            _RESERVED_IDENTIFIER_FIXUP_3998 = _RESERVED_IDENTIFIER_FIXUP_4027;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1796 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3241 = _RESERVED_IDENTIFIER_FIXUP_3224;
            _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_1796;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4002;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3999;
            if (_RESERVED_IDENTIFIER_FIXUP_1796 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1805 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1815 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1817 = _RESERVED_IDENTIFIER_FIXUP_1815.x;
                _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_1817;
                _RESERVED_IDENTIFIER_FIXUP_3241.z = _RESERVED_IDENTIFIER_FIXUP_1815.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1825 = _RESERVED_IDENTIFIER_FIXUP_3241.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3320;
                _RESERVED_IDENTIFIER_FIXUP_3320.x = _RESERVED_IDENTIFIER_FIXUP_1825.x;
                _RESERVED_IDENTIFIER_FIXUP_3320.y = _RESERVED_IDENTIFIER_FIXUP_1825.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1832 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1836 = _RESERVED_IDENTIFIER_FIXUP_1832.y;
                _RESERVED_IDENTIFIER_FIXUP_3320.w = _RESERVED_IDENTIFIER_FIXUP_1836;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1805.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1805.w;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3320.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1836;
                float _RESERVED_IDENTIFIER_FIXUP_1847 = hdLod7(param_32, param_33).x + hdLod7(param_34, param_35).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4026 = vec4(_RESERVED_IDENTIFIER_FIXUP_1375, _RESERVED_IDENTIFIER_FIXUP_1817, _RESERVED_IDENTIFIER_FIXUP_1815.y, _RESERVED_IDENTIFIER_FIXUP_1847);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1854 = _RESERVED_IDENTIFIER_FIXUP_4026.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3333;
                _RESERVED_IDENTIFIER_FIXUP_3333.x = _RESERVED_IDENTIFIER_FIXUP_1854.x;
                _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_1854.y;
                _RESERVED_IDENTIFIER_FIXUP_3333.w = _RESERVED_IDENTIFIER_FIXUP_1836;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3333.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1836;
                float _RESERVED_IDENTIFIER_FIXUP_1876 = _RESERVED_IDENTIFIER_FIXUP_1847 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_4026.w = _RESERVED_IDENTIFIER_FIXUP_1876;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1883 = _RESERVED_IDENTIFIER_FIXUP_4026.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3346;
                _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_1883.x;
                _RESERVED_IDENTIFIER_FIXUP_3346.y = _RESERVED_IDENTIFIER_FIXUP_1883.y;
                _RESERVED_IDENTIFIER_FIXUP_3346.w = _RESERVED_IDENTIFIER_FIXUP_1836;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3346.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1836;
                float _RESERVED_IDENTIFIER_FIXUP_1905 = _RESERVED_IDENTIFIER_FIXUP_1876 + hdLod7(param_38, param_39).x;
                _RESERVED_IDENTIFIER_FIXUP_4026.w = _RESERVED_IDENTIFIER_FIXUP_1905;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1912 = _RESERVED_IDENTIFIER_FIXUP_4026.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3359;
                _RESERVED_IDENTIFIER_FIXUP_3359.x = _RESERVED_IDENTIFIER_FIXUP_1912.x;
                _RESERVED_IDENTIFIER_FIXUP_3359.y = _RESERVED_IDENTIFIER_FIXUP_1912.y;
                _RESERVED_IDENTIFIER_FIXUP_3359.w = _RESERVED_IDENTIFIER_FIXUP_1836;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3359.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1836;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1929 = hdLod7(param_40, param_41);
                float _RESERVED_IDENTIFIER_FIXUP_1934 = _RESERVED_IDENTIFIER_FIXUP_1905 + _RESERVED_IDENTIFIER_FIXUP_1929.x;
                _RESERVED_IDENTIFIER_FIXUP_4026.y = _RESERVED_IDENTIFIER_FIXUP_1934;
                _RESERVED_IDENTIFIER_FIXUP_4026.x = _RESERVED_IDENTIFIER_FIXUP_1934 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4002 = _RESERVED_IDENTIFIER_FIXUP_1929;
                _RESERVED_IDENTIFIER_FIXUP_3999 = _RESERVED_IDENTIFIER_FIXUP_4026;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1950 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1954 = _RESERVED_IDENTIFIER_FIXUP_1950.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1965 = vec4(_RESERVED_IDENTIFIER_FIXUP_1950.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1954).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4023 = vec4(_RESERVED_IDENTIFIER_FIXUP_1965 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1954);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2002 = _RESERVED_IDENTIFIER_FIXUP_1965 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3274 = _RESERVED_IDENTIFIER_FIXUP_4023;
                _RESERVED_IDENTIFIER_FIXUP_3274.x = _RESERVED_IDENTIFIER_FIXUP_2002.x;
                _RESERVED_IDENTIFIER_FIXUP_3274.y = _RESERVED_IDENTIFIER_FIXUP_2002.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2024 = _RESERVED_IDENTIFIER_FIXUP_1965 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3283 = _RESERVED_IDENTIFIER_FIXUP_3274;
                _RESERVED_IDENTIFIER_FIXUP_3283.x = _RESERVED_IDENTIFIER_FIXUP_2024.x;
                _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_2024.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2046 = _RESERVED_IDENTIFIER_FIXUP_1965 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3292 = _RESERVED_IDENTIFIER_FIXUP_3283;
                _RESERVED_IDENTIFIER_FIXUP_3292.x = _RESERVED_IDENTIFIER_FIXUP_2046.x;
                _RESERVED_IDENTIFIER_FIXUP_3292.y = _RESERVED_IDENTIFIER_FIXUP_2046.y;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3292.xy;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1954;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2056 = hdLod8(param_42, param_43);
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_1965;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1954;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_4023.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1954;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3274.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1954;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3283.xy;
                float param_51 = _RESERVED_IDENTIFIER_FIXUP_1954;
                float _RESERVED_IDENTIFIER_FIXUP_2061 = (((hdLod8(param_44, param_45).x + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + hdLod8(param_50, param_51).x) + _RESERVED_IDENTIFIER_FIXUP_2056.x;
                float _RESERVED_IDENTIFIER_FIXUP_2069 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3303 = _RESERVED_IDENTIFIER_FIXUP_2056;
                _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_2069;
                float _RESERVED_IDENTIFIER_FIXUP_2075 = clamp((_RESERVED_IDENTIFIER_FIXUP_2069 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2080 = (_RESERVED_IDENTIFIER_FIXUP_2061 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4002 = _RESERVED_IDENTIFIER_FIXUP_3303;
                _RESERVED_IDENTIFIER_FIXUP_3999 = vec4((_RESERVED_IDENTIFIER_FIXUP_2075 * _RESERVED_IDENTIFIER_FIXUP_2080) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2075, _RESERVED_IDENTIFIER_FIXUP_2080, _RESERVED_IDENTIFIER_FIXUP_2061);
            }
            _RESERVED_IDENTIFIER_FIXUP_4001 = _RESERVED_IDENTIFIER_FIXUP_4002;
            _RESERVED_IDENTIFIER_FIXUP_3998 = _RESERVED_IDENTIFIER_FIXUP_3999;
        }
        _RESERVED_IDENTIFIER_FIXUP_4000 = _RESERVED_IDENTIFIER_FIXUP_4001;
        _RESERVED_IDENTIFIER_FIXUP_3997 = _RESERVED_IDENTIFIER_FIXUP_3998;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3550 = _RESERVED_IDENTIFIER_FIXUP_3997;
    _RESERVED_IDENTIFIER_FIXUP_3550.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3552 = _RESERVED_IDENTIFIER_FIXUP_4000;
    _RESERVED_IDENTIFIER_FIXUP_3552.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3552.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3552.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2119 = _RESERVED_IDENTIFIER_FIXUP_3550.xxx * _RESERVED_IDENTIFIER_FIXUP_3552.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4028 = vec4(_RESERVED_IDENTIFIER_FIXUP_2119.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2119.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2133 = (_RESERVED_IDENTIFIER_FIXUP_1356.xyz * _RESERVED_IDENTIFIER_FIXUP_4028.yyy) + _RESERVED_IDENTIFIER_FIXUP_4028.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3564 = _RESERVED_IDENTIFIER_FIXUP_1356;
    _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2133.x;
    _RESERVED_IDENTIFIER_FIXUP_3564.y = _RESERVED_IDENTIFIER_FIXUP_2133.y;
    _RESERVED_IDENTIFIER_FIXUP_3564.z = _RESERVED_IDENTIFIER_FIXUP_2133.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2146 = _RESERVED_IDENTIFIER_FIXUP_3564.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3570 = _RESERVED_IDENTIFIER_FIXUP_3564;
    _RESERVED_IDENTIFIER_FIXUP_3570.x = _RESERVED_IDENTIFIER_FIXUP_2146.x;
    _RESERVED_IDENTIFIER_FIXUP_3570.y = _RESERVED_IDENTIFIER_FIXUP_2146.y;
    _RESERVED_IDENTIFIER_FIXUP_3570.z = _RESERVED_IDENTIFIER_FIXUP_2146.z;
    vec2 param_52 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2202 = hdTex0(param_52);
    vec2 param_53 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2206 = hdTex1(param_53);
    vec2 param_54 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2210 = hdTex2(param_54);
    vec2 param_55 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2214 = hdTex3(param_55);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2229 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3590;
    _RESERVED_IDENTIFIER_FIXUP_3590.x = _RESERVED_IDENTIFIER_FIXUP_2229.x;
    _RESERVED_IDENTIFIER_FIXUP_3590.y = _RESERVED_IDENTIFIER_FIXUP_2229.y;
    _RESERVED_IDENTIFIER_FIXUP_3590.z = _RESERVED_IDENTIFIER_FIXUP_2229.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2237 = _RESERVED_IDENTIFIER_FIXUP_2202.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2240 = _RESERVED_IDENTIFIER_FIXUP_2237 * _RESERVED_IDENTIFIER_FIXUP_3590.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3596;
    _RESERVED_IDENTIFIER_FIXUP_3596.x = _RESERVED_IDENTIFIER_FIXUP_2240.x;
    _RESERVED_IDENTIFIER_FIXUP_3596.y = _RESERVED_IDENTIFIER_FIXUP_2240.y;
    _RESERVED_IDENTIFIER_FIXUP_3596.z = _RESERVED_IDENTIFIER_FIXUP_2240.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2255 = mix(_RESERVED_IDENTIFIER_FIXUP_3596.xyz, _RESERVED_IDENTIFIER_FIXUP_2237, _RESERVED_IDENTIFIER_FIXUP_1287);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3602 = _RESERVED_IDENTIFIER_FIXUP_2202;
    _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2255.x;
    _RESERVED_IDENTIFIER_FIXUP_3602.y = _RESERVED_IDENTIFIER_FIXUP_2255.y;
    _RESERVED_IDENTIFIER_FIXUP_3602.z = _RESERVED_IDENTIFIER_FIXUP_2255.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2263 = _RESERVED_IDENTIFIER_FIXUP_2206.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2266 = _RESERVED_IDENTIFIER_FIXUP_2263 * _RESERVED_IDENTIFIER_FIXUP_3590.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3608;
    _RESERVED_IDENTIFIER_FIXUP_3608.x = _RESERVED_IDENTIFIER_FIXUP_2266.x;
    _RESERVED_IDENTIFIER_FIXUP_3608.y = _RESERVED_IDENTIFIER_FIXUP_2266.y;
    _RESERVED_IDENTIFIER_FIXUP_3608.z = _RESERVED_IDENTIFIER_FIXUP_2266.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2281 = mix(_RESERVED_IDENTIFIER_FIXUP_3608.xyz, _RESERVED_IDENTIFIER_FIXUP_2263, _RESERVED_IDENTIFIER_FIXUP_1313);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3614 = _RESERVED_IDENTIFIER_FIXUP_2206;
    _RESERVED_IDENTIFIER_FIXUP_3614.x = _RESERVED_IDENTIFIER_FIXUP_2281.x;
    _RESERVED_IDENTIFIER_FIXUP_3614.y = _RESERVED_IDENTIFIER_FIXUP_2281.y;
    _RESERVED_IDENTIFIER_FIXUP_3614.z = _RESERVED_IDENTIFIER_FIXUP_2281.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2289 = _RESERVED_IDENTIFIER_FIXUP_2210.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2292 = _RESERVED_IDENTIFIER_FIXUP_2289 * _RESERVED_IDENTIFIER_FIXUP_3590.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4030 = vec4(_RESERVED_IDENTIFIER_FIXUP_2292.xy, _RESERVED_IDENTIFIER_FIXUP_1257, _RESERVED_IDENTIFIER_FIXUP_2292.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2307 = mix(_RESERVED_IDENTIFIER_FIXUP_4030.xyw, _RESERVED_IDENTIFIER_FIXUP_2289, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4030.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3626 = _RESERVED_IDENTIFIER_FIXUP_2210;
    _RESERVED_IDENTIFIER_FIXUP_3626.x = _RESERVED_IDENTIFIER_FIXUP_2307.x;
    _RESERVED_IDENTIFIER_FIXUP_3626.y = _RESERVED_IDENTIFIER_FIXUP_2307.y;
    _RESERVED_IDENTIFIER_FIXUP_3626.z = _RESERVED_IDENTIFIER_FIXUP_2307.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2323 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3602, _RESERVED_IDENTIFIER_FIXUP_3614, _RESERVED_IDENTIFIER_FIXUP_2214.xxxx), _RESERVED_IDENTIFIER_FIXUP_3626, _RESERVED_IDENTIFIER_FIXUP_2214.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3634 = _RESERVED_IDENTIFIER_FIXUP_3614;
    _RESERVED_IDENTIFIER_FIXUP_3634.x = _RESERVED_IDENTIFIER_FIXUP_1363;
    float _RESERVED_IDENTIFIER_FIXUP_2336 = clamp((_RESERVED_IDENTIFIER_FIXUP_1363 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3634.x = _RESERVED_IDENTIFIER_FIXUP_2336;
    float _RESERVED_IDENTIFIER_FIXUP_2342 = ((-_RESERVED_IDENTIFIER_FIXUP_2336) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3634.x = _RESERVED_IDENTIFIER_FIXUP_2342;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4015;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4009;
    if (_RESERVED_IDENTIFIER_FIXUP_2342 != (-_RESERVED_IDENTIFIER_FIXUP_2342))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2354 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2354.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2354.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2360 = hdLod5(param_56, param_57);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2364 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3846 = _RESERVED_IDENTIFIER_FIXUP_2360;
        _RESERVED_IDENTIFIER_FIXUP_3846.y = _RESERVED_IDENTIFIER_FIXUP_2364.x;
        _RESERVED_IDENTIFIER_FIXUP_3846.z = _RESERVED_IDENTIFIER_FIXUP_2364.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2374 = _RESERVED_IDENTIFIER_FIXUP_3846.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3850;
        _RESERVED_IDENTIFIER_FIXUP_3850.x = _RESERVED_IDENTIFIER_FIXUP_2374.x;
        _RESERVED_IDENTIFIER_FIXUP_3850.y = _RESERVED_IDENTIFIER_FIXUP_2374.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2381 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2385 = _RESERVED_IDENTIFIER_FIXUP_2381.y;
        _RESERVED_IDENTIFIER_FIXUP_3850.w = _RESERVED_IDENTIFIER_FIXUP_2385;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3850.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2385;
        float _RESERVED_IDENTIFIER_FIXUP_2396 = _RESERVED_IDENTIFIER_FIXUP_2360.x + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2396;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2403 = _RESERVED_IDENTIFIER_FIXUP_3846.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3863;
        _RESERVED_IDENTIFIER_FIXUP_3863.x = _RESERVED_IDENTIFIER_FIXUP_2403.x;
        _RESERVED_IDENTIFIER_FIXUP_3863.y = _RESERVED_IDENTIFIER_FIXUP_2403.y;
        _RESERVED_IDENTIFIER_FIXUP_3863.w = _RESERVED_IDENTIFIER_FIXUP_2385;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3863.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2385;
        float _RESERVED_IDENTIFIER_FIXUP_2425 = _RESERVED_IDENTIFIER_FIXUP_2396 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2425;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2432 = _RESERVED_IDENTIFIER_FIXUP_3846.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3876;
        _RESERVED_IDENTIFIER_FIXUP_3876.x = _RESERVED_IDENTIFIER_FIXUP_2432.x;
        _RESERVED_IDENTIFIER_FIXUP_3876.y = _RESERVED_IDENTIFIER_FIXUP_2432.y;
        _RESERVED_IDENTIFIER_FIXUP_3876.w = _RESERVED_IDENTIFIER_FIXUP_2385;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3876.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2385;
        float _RESERVED_IDENTIFIER_FIXUP_2454 = _RESERVED_IDENTIFIER_FIXUP_2425 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2454;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2461 = _RESERVED_IDENTIFIER_FIXUP_3846.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3889;
        _RESERVED_IDENTIFIER_FIXUP_3889.x = _RESERVED_IDENTIFIER_FIXUP_2461.x;
        _RESERVED_IDENTIFIER_FIXUP_3889.y = _RESERVED_IDENTIFIER_FIXUP_2461.y;
        _RESERVED_IDENTIFIER_FIXUP_3889.w = _RESERVED_IDENTIFIER_FIXUP_2385;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3889.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2385;
        float _RESERVED_IDENTIFIER_FIXUP_2483 = _RESERVED_IDENTIFIER_FIXUP_2454 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2483;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2490 = _RESERVED_IDENTIFIER_FIXUP_3846.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3902;
        _RESERVED_IDENTIFIER_FIXUP_3902.x = _RESERVED_IDENTIFIER_FIXUP_2490.x;
        _RESERVED_IDENTIFIER_FIXUP_3902.y = _RESERVED_IDENTIFIER_FIXUP_2490.y;
        _RESERVED_IDENTIFIER_FIXUP_3902.w = _RESERVED_IDENTIFIER_FIXUP_2385;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3902.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2385;
        float _RESERVED_IDENTIFIER_FIXUP_2512 = _RESERVED_IDENTIFIER_FIXUP_2483 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2512;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2519 = _RESERVED_IDENTIFIER_FIXUP_3846.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3915;
        _RESERVED_IDENTIFIER_FIXUP_3915.x = _RESERVED_IDENTIFIER_FIXUP_2519.x;
        _RESERVED_IDENTIFIER_FIXUP_3915.y = _RESERVED_IDENTIFIER_FIXUP_2519.y;
        _RESERVED_IDENTIFIER_FIXUP_3915.w = _RESERVED_IDENTIFIER_FIXUP_2385;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3915.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2385;
        float _RESERVED_IDENTIFIER_FIXUP_2541 = _RESERVED_IDENTIFIER_FIXUP_2512 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2541;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2548 = _RESERVED_IDENTIFIER_FIXUP_3846.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3928;
        _RESERVED_IDENTIFIER_FIXUP_3928.x = _RESERVED_IDENTIFIER_FIXUP_2548.x;
        _RESERVED_IDENTIFIER_FIXUP_3928.y = _RESERVED_IDENTIFIER_FIXUP_2548.y;
        _RESERVED_IDENTIFIER_FIXUP_3928.w = _RESERVED_IDENTIFIER_FIXUP_2385;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3928.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2385;
        float _RESERVED_IDENTIFIER_FIXUP_2570 = _RESERVED_IDENTIFIER_FIXUP_2541 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2570;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2577 = _RESERVED_IDENTIFIER_FIXUP_3846.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3941;
        _RESERVED_IDENTIFIER_FIXUP_3941.x = _RESERVED_IDENTIFIER_FIXUP_2577.x;
        _RESERVED_IDENTIFIER_FIXUP_3941.y = _RESERVED_IDENTIFIER_FIXUP_2577.y;
        _RESERVED_IDENTIFIER_FIXUP_3941.w = _RESERVED_IDENTIFIER_FIXUP_2385;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3941.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2385;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2594 = hdLod5(param_72, param_73);
        float _RESERVED_IDENTIFIER_FIXUP_2599 = _RESERVED_IDENTIFIER_FIXUP_2570 + _RESERVED_IDENTIFIER_FIXUP_2594.x;
        _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2599;
        _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2599 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4015 = _RESERVED_IDENTIFIER_FIXUP_2594;
        _RESERVED_IDENTIFIER_FIXUP_4009 = _RESERVED_IDENTIFIER_FIXUP_3846;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2612 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3634.y = _RESERVED_IDENTIFIER_FIXUP_2612;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4016;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4010;
        if (_RESERVED_IDENTIFIER_FIXUP_2612 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2621 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2631 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2633 = _RESERVED_IDENTIFIER_FIXUP_2631.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3786 = _RESERVED_IDENTIFIER_FIXUP_3634;
            _RESERVED_IDENTIFIER_FIXUP_3786.y = _RESERVED_IDENTIFIER_FIXUP_2633;
            _RESERVED_IDENTIFIER_FIXUP_3786.z = _RESERVED_IDENTIFIER_FIXUP_2631.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2641 = _RESERVED_IDENTIFIER_FIXUP_3786.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3790;
            _RESERVED_IDENTIFIER_FIXUP_3790.x = _RESERVED_IDENTIFIER_FIXUP_2641.x;
            _RESERVED_IDENTIFIER_FIXUP_3790.y = _RESERVED_IDENTIFIER_FIXUP_2641.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2648 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2652 = _RESERVED_IDENTIFIER_FIXUP_2648.y;
            _RESERVED_IDENTIFIER_FIXUP_3790.w = _RESERVED_IDENTIFIER_FIXUP_2652;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2621.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2621.w;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3790.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2652;
            float _RESERVED_IDENTIFIER_FIXUP_2663 = hdLod6(param_74, param_75).x + hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4036 = vec4(_RESERVED_IDENTIFIER_FIXUP_2342, _RESERVED_IDENTIFIER_FIXUP_2633, _RESERVED_IDENTIFIER_FIXUP_2631.y, _RESERVED_IDENTIFIER_FIXUP_2663);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2670 = _RESERVED_IDENTIFIER_FIXUP_4036.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3803;
            _RESERVED_IDENTIFIER_FIXUP_3803.x = _RESERVED_IDENTIFIER_FIXUP_2670.x;
            _RESERVED_IDENTIFIER_FIXUP_3803.y = _RESERVED_IDENTIFIER_FIXUP_2670.y;
            _RESERVED_IDENTIFIER_FIXUP_3803.w = _RESERVED_IDENTIFIER_FIXUP_2652;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3803.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2652;
            float _RESERVED_IDENTIFIER_FIXUP_2692 = _RESERVED_IDENTIFIER_FIXUP_2663 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_4036.w = _RESERVED_IDENTIFIER_FIXUP_2692;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2699 = _RESERVED_IDENTIFIER_FIXUP_4036.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3816;
            _RESERVED_IDENTIFIER_FIXUP_3816.x = _RESERVED_IDENTIFIER_FIXUP_2699.x;
            _RESERVED_IDENTIFIER_FIXUP_3816.y = _RESERVED_IDENTIFIER_FIXUP_2699.y;
            _RESERVED_IDENTIFIER_FIXUP_3816.w = _RESERVED_IDENTIFIER_FIXUP_2652;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3816.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2652;
            float _RESERVED_IDENTIFIER_FIXUP_2721 = _RESERVED_IDENTIFIER_FIXUP_2692 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_4036.w = _RESERVED_IDENTIFIER_FIXUP_2721;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2728 = _RESERVED_IDENTIFIER_FIXUP_4036.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3829;
            _RESERVED_IDENTIFIER_FIXUP_3829.x = _RESERVED_IDENTIFIER_FIXUP_2728.x;
            _RESERVED_IDENTIFIER_FIXUP_3829.y = _RESERVED_IDENTIFIER_FIXUP_2728.y;
            _RESERVED_IDENTIFIER_FIXUP_3829.w = _RESERVED_IDENTIFIER_FIXUP_2652;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3829.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2652;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2745 = hdLod6(param_82, param_83);
            float _RESERVED_IDENTIFIER_FIXUP_2750 = _RESERVED_IDENTIFIER_FIXUP_2721 + _RESERVED_IDENTIFIER_FIXUP_2745.x;
            _RESERVED_IDENTIFIER_FIXUP_4036.y = _RESERVED_IDENTIFIER_FIXUP_2750;
            _RESERVED_IDENTIFIER_FIXUP_4036.x = _RESERVED_IDENTIFIER_FIXUP_2750 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4016 = _RESERVED_IDENTIFIER_FIXUP_2745;
            _RESERVED_IDENTIFIER_FIXUP_4010 = _RESERVED_IDENTIFIER_FIXUP_4036;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2763 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3651 = _RESERVED_IDENTIFIER_FIXUP_3634;
            _RESERVED_IDENTIFIER_FIXUP_3651.y = _RESERVED_IDENTIFIER_FIXUP_2763;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4017;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4011;
            if (_RESERVED_IDENTIFIER_FIXUP_2763 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2772 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2782 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2784 = _RESERVED_IDENTIFIER_FIXUP_2782.x;
                _RESERVED_IDENTIFIER_FIXUP_3651.y = _RESERVED_IDENTIFIER_FIXUP_2784;
                _RESERVED_IDENTIFIER_FIXUP_3651.z = _RESERVED_IDENTIFIER_FIXUP_2782.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2792 = _RESERVED_IDENTIFIER_FIXUP_3651.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3730;
                _RESERVED_IDENTIFIER_FIXUP_3730.x = _RESERVED_IDENTIFIER_FIXUP_2792.x;
                _RESERVED_IDENTIFIER_FIXUP_3730.y = _RESERVED_IDENTIFIER_FIXUP_2792.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2799 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2803 = _RESERVED_IDENTIFIER_FIXUP_2799.y;
                _RESERVED_IDENTIFIER_FIXUP_3730.w = _RESERVED_IDENTIFIER_FIXUP_2803;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2772.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2772.w;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3730.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2803;
                float _RESERVED_IDENTIFIER_FIXUP_2814 = hdLod7(param_84, param_85).x + hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4035 = vec4(_RESERVED_IDENTIFIER_FIXUP_2342, _RESERVED_IDENTIFIER_FIXUP_2784, _RESERVED_IDENTIFIER_FIXUP_2782.y, _RESERVED_IDENTIFIER_FIXUP_2814);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2821 = _RESERVED_IDENTIFIER_FIXUP_4035.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3743;
                _RESERVED_IDENTIFIER_FIXUP_3743.x = _RESERVED_IDENTIFIER_FIXUP_2821.x;
                _RESERVED_IDENTIFIER_FIXUP_3743.y = _RESERVED_IDENTIFIER_FIXUP_2821.y;
                _RESERVED_IDENTIFIER_FIXUP_3743.w = _RESERVED_IDENTIFIER_FIXUP_2803;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3743.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2803;
                float _RESERVED_IDENTIFIER_FIXUP_2843 = _RESERVED_IDENTIFIER_FIXUP_2814 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_4035.w = _RESERVED_IDENTIFIER_FIXUP_2843;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2850 = _RESERVED_IDENTIFIER_FIXUP_4035.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3756;
                _RESERVED_IDENTIFIER_FIXUP_3756.x = _RESERVED_IDENTIFIER_FIXUP_2850.x;
                _RESERVED_IDENTIFIER_FIXUP_3756.y = _RESERVED_IDENTIFIER_FIXUP_2850.y;
                _RESERVED_IDENTIFIER_FIXUP_3756.w = _RESERVED_IDENTIFIER_FIXUP_2803;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3756.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2803;
                float _RESERVED_IDENTIFIER_FIXUP_2872 = _RESERVED_IDENTIFIER_FIXUP_2843 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_4035.w = _RESERVED_IDENTIFIER_FIXUP_2872;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2879 = _RESERVED_IDENTIFIER_FIXUP_4035.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3769;
                _RESERVED_IDENTIFIER_FIXUP_3769.x = _RESERVED_IDENTIFIER_FIXUP_2879.x;
                _RESERVED_IDENTIFIER_FIXUP_3769.y = _RESERVED_IDENTIFIER_FIXUP_2879.y;
                _RESERVED_IDENTIFIER_FIXUP_3769.w = _RESERVED_IDENTIFIER_FIXUP_2803;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3769.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2803;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2896 = hdLod7(param_92, param_93);
                float _RESERVED_IDENTIFIER_FIXUP_2901 = _RESERVED_IDENTIFIER_FIXUP_2872 + _RESERVED_IDENTIFIER_FIXUP_2896.x;
                _RESERVED_IDENTIFIER_FIXUP_4035.y = _RESERVED_IDENTIFIER_FIXUP_2901;
                _RESERVED_IDENTIFIER_FIXUP_4035.x = _RESERVED_IDENTIFIER_FIXUP_2901 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4017 = _RESERVED_IDENTIFIER_FIXUP_2896;
                _RESERVED_IDENTIFIER_FIXUP_4011 = _RESERVED_IDENTIFIER_FIXUP_4035;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2917 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2921 = _RESERVED_IDENTIFIER_FIXUP_2917.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2932 = vec4(_RESERVED_IDENTIFIER_FIXUP_2917.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2921).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4032 = vec4(_RESERVED_IDENTIFIER_FIXUP_2932 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2921);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2969 = _RESERVED_IDENTIFIER_FIXUP_2932 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3684 = _RESERVED_IDENTIFIER_FIXUP_4032;
                _RESERVED_IDENTIFIER_FIXUP_3684.x = _RESERVED_IDENTIFIER_FIXUP_2969.x;
                _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2969.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2991 = _RESERVED_IDENTIFIER_FIXUP_2932 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3693 = _RESERVED_IDENTIFIER_FIXUP_3684;
                _RESERVED_IDENTIFIER_FIXUP_3693.x = _RESERVED_IDENTIFIER_FIXUP_2991.x;
                _RESERVED_IDENTIFIER_FIXUP_3693.y = _RESERVED_IDENTIFIER_FIXUP_2991.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3013 = _RESERVED_IDENTIFIER_FIXUP_2932 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3702 = _RESERVED_IDENTIFIER_FIXUP_3693;
                _RESERVED_IDENTIFIER_FIXUP_3702.x = _RESERVED_IDENTIFIER_FIXUP_3013.x;
                _RESERVED_IDENTIFIER_FIXUP_3702.y = _RESERVED_IDENTIFIER_FIXUP_3013.y;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3702.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2921;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3023 = hdLod8(param_94, param_95);
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_2932;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2921;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_4032.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2921;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3684.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2921;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3693.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_2921;
                float _RESERVED_IDENTIFIER_FIXUP_3028 = (((hdLod8(param_96, param_97).x + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x) + _RESERVED_IDENTIFIER_FIXUP_3023.x;
                float _RESERVED_IDENTIFIER_FIXUP_3036 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3713 = _RESERVED_IDENTIFIER_FIXUP_3023;
                _RESERVED_IDENTIFIER_FIXUP_3713.x = _RESERVED_IDENTIFIER_FIXUP_3036;
                float _RESERVED_IDENTIFIER_FIXUP_3042 = clamp((_RESERVED_IDENTIFIER_FIXUP_3036 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_3047 = (_RESERVED_IDENTIFIER_FIXUP_3028 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4017 = _RESERVED_IDENTIFIER_FIXUP_3713;
                _RESERVED_IDENTIFIER_FIXUP_4011 = vec4((_RESERVED_IDENTIFIER_FIXUP_3042 * _RESERVED_IDENTIFIER_FIXUP_3047) + 1.0, _RESERVED_IDENTIFIER_FIXUP_3042, _RESERVED_IDENTIFIER_FIXUP_3047, _RESERVED_IDENTIFIER_FIXUP_3028);
            }
            _RESERVED_IDENTIFIER_FIXUP_4016 = _RESERVED_IDENTIFIER_FIXUP_4017;
            _RESERVED_IDENTIFIER_FIXUP_4010 = _RESERVED_IDENTIFIER_FIXUP_4011;
        }
        _RESERVED_IDENTIFIER_FIXUP_4015 = _RESERVED_IDENTIFIER_FIXUP_4016;
        _RESERVED_IDENTIFIER_FIXUP_4009 = _RESERVED_IDENTIFIER_FIXUP_4010;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3062 = (_RESERVED_IDENTIFIER_FIXUP_4009.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3958 = _RESERVED_IDENTIFIER_FIXUP_4009;
    _RESERVED_IDENTIFIER_FIXUP_3958.y = _RESERVED_IDENTIFIER_FIXUP_3062;
    _RESERVED_IDENTIFIER_FIXUP_3958.y = _RESERVED_IDENTIFIER_FIXUP_3062;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3075 = _RESERVED_IDENTIFIER_FIXUP_2323.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3964 = _RESERVED_IDENTIFIER_FIXUP_4015;
    _RESERVED_IDENTIFIER_FIXUP_3964.x = _RESERVED_IDENTIFIER_FIXUP_3075.x;
    _RESERVED_IDENTIFIER_FIXUP_3964.y = _RESERVED_IDENTIFIER_FIXUP_3075.y;
    _RESERVED_IDENTIFIER_FIXUP_3964.z = _RESERVED_IDENTIFIER_FIXUP_3075.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3086 = _RESERVED_IDENTIFIER_FIXUP_3958.xxx * _RESERVED_IDENTIFIER_FIXUP_3964.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4037 = vec4(_RESERVED_IDENTIFIER_FIXUP_3086.x, _RESERVED_IDENTIFIER_FIXUP_3062, _RESERVED_IDENTIFIER_FIXUP_3086.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3100 = (_RESERVED_IDENTIFIER_FIXUP_2323.xyz * _RESERVED_IDENTIFIER_FIXUP_4037.yyy) + _RESERVED_IDENTIFIER_FIXUP_4037.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3976 = _RESERVED_IDENTIFIER_FIXUP_2323;
    _RESERVED_IDENTIFIER_FIXUP_3976.x = _RESERVED_IDENTIFIER_FIXUP_3100.x;
    _RESERVED_IDENTIFIER_FIXUP_3976.y = _RESERVED_IDENTIFIER_FIXUP_3100.y;
    _RESERVED_IDENTIFIER_FIXUP_3976.z = _RESERVED_IDENTIFIER_FIXUP_3100.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3113 = _RESERVED_IDENTIFIER_FIXUP_3976.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3982 = _RESERVED_IDENTIFIER_FIXUP_3976;
    _RESERVED_IDENTIFIER_FIXUP_3982.x = _RESERVED_IDENTIFIER_FIXUP_3113.x;
    _RESERVED_IDENTIFIER_FIXUP_3982.y = _RESERVED_IDENTIFIER_FIXUP_3113.y;
    _RESERVED_IDENTIFIER_FIXUP_3982.z = _RESERVED_IDENTIFIER_FIXUP_3113.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3982.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1094 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1103;
    if (_RESERVED_IDENTIFIER_FIXUP_1094)
    {
        _RESERVED_IDENTIFIER_FIXUP_1103 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1103 = _RESERVED_IDENTIFIER_FIXUP_1094;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1103)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1140 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3570.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1166 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3166;
    if (_RESERVED_IDENTIFIER_FIXUP_1140 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3166 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1140), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1166);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3166 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1166);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3166;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3062);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    vec3 hdB90 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB90.x;
    r4.y = hdB90.y;
    r4.z = hdB90.z;
    vec3 hdB105 = v0.xyz + v0.xyz;
    r5.x = hdB105.x;
    r5.y = hdB105.y;
    r5.z = hdB105.z;
    vec3 hdB116 = r0.xyz * r5.xyz;
    r6.x = hdB116.x;
    r6.y = hdB116.y;
    r6.z = hdB116.z;
    vec4 hdB125 = r0;
    vec3 hdB134 = mix(r6.xyz, hdB125.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB134.x;
    r0.y = hdB134.y;
    r0.z = hdB134.z;
    vec3 hdB145 = r1.xyz * r5.xyz;
    r6.x = hdB145.x;
    r6.y = hdB145.y;
    r6.z = hdB145.z;
    vec4 hdB154 = r1;
    vec3 hdB160 = mix(r6.xyz, hdB154.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB160.x;
    r1.y = hdB160.y;
    r1.z = hdB160.z;
    vec3 hdB171 = r2.xyz * r5.xyz;
    r4.x = hdB171.x;
    r4.y = hdB171.y;
    r4.w = hdB171.z;
    vec4 hdB181 = r2;
    vec3 hdB187 = mix(r4.xyw, hdB181.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB187.x;
    r2.y = hdB187.y;
    r2.z = hdB187.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
        vec2 hdB253 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB253.x;
        r1.z = hdB253.y;
        vec2 hdB264 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB264.x;
        r2.y = hdB264.y;
        vec2 hdB272 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB272.x;
        r2.w = hdB272.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.x += r2.x;
        vec2 hdB295 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB295.x;
        r2.y = hdB295.y;
        vec2 hdB302 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB302.x;
        r2.w = hdB302.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.x += r2.x;
        vec2 hdB325 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB325.x;
        r2.y = hdB325.y;
        vec2 hdB332 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB332.x;
        r2.w = hdB332.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.x += r2.x;
        vec2 hdB355 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB355.x;
        r2.y = hdB355.y;
        vec2 hdB362 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB362.x;
        r2.w = hdB362.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.x += r2.x;
        vec2 hdB385 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB385.x;
        r2.y = hdB385.y;
        vec2 hdB392 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB392.x;
        r2.w = hdB392.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r1.x += r2.x;
        vec2 hdB415 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB415.x;
        r2.y = hdB415.y;
        vec2 hdB422 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB422.x;
        r2.w = hdB422.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r1.x += r2.x;
        vec2 hdB445 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB445.x;
        r2.y = hdB445.y;
        vec2 hdB452 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB452.x;
        r2.w = hdB452.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod5(param_18, param_19);
        r1.x += r2.x;
        vec2 hdB475 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB475.x;
        r2.y = hdB475.y;
        vec2 hdB482 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB482.x;
        r2.w = hdB482.y;
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
            vec2 hdB532 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB532.x;
            r1.z = hdB532.y;
            vec2 hdB542 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB542.x;
            r3.y = hdB542.y;
            vec2 hdB549 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB549.x;
            r3.w = hdB549.y;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod6(param_24, param_25);
            r1.w = r2.x + r3.x;
            vec2 hdB571 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB571.x;
            r2.y = hdB571.y;
            vec2 hdB578 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB578.x;
            r2.w = hdB578.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r1.w += r2.x;
            vec2 hdB600 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB600.x;
            r2.y = hdB600.y;
            vec2 hdB607 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB607.x;
            r2.w = hdB607.y;
            vec2 param_28 = r2.xy;
            float param_29 = r2.w;
            r2 = hdLod6(param_28, param_29);
            r1.w += r2.x;
            vec2 hdB629 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB629.x;
            r2.y = hdB629.y;
            vec2 hdB636 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB636.x;
            r2.w = hdB636.y;
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
                vec2 hdB686 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB686.x;
                r1.z = hdB686.y;
                vec2 hdB696 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB696.x;
                r3.y = hdB696.y;
                vec2 hdB703 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB703.x;
                r3.w = hdB703.y;
                vec2 param_34 = r3.xy;
                float param_35 = r3.w;
                r3 = hdLod7(param_34, param_35);
                r1.w = r2.x + r3.x;
                vec2 hdB725 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB725.x;
                r2.y = hdB725.y;
                vec2 hdB732 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB732.x;
                r2.w = hdB732.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r1.w += r2.x;
                vec2 hdB754 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB754.x;
                r2.y = hdB754.y;
                vec2 hdB761 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB761.x;
                r2.w = hdB761.y;
                vec2 param_38 = r2.xy;
                float param_39 = r2.w;
                r2 = hdLod7(param_38, param_39);
                r1.w += r2.x;
                vec2 hdB783 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB783.x;
                r2.y = hdB783.y;
                vec2 hdB790 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB790.x;
                r2.w = hdB790.y;
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
                vec2 hdB822 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB822.x;
                r2.w = hdB822.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_42 = r2.xy;
                float param_43 = r2.w;
                r3 = hdLod8(param_42, param_43);
                vec2 hdB847 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB847.x;
                r4.y = hdB847.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r5 = hdLod8(param_44, param_45);
                r1.w = r3.x + r5.x;
                vec2 hdB875 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB875.x;
                r4.y = hdB875.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r1.w += r3.x;
                vec2 hdB897 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB897.x;
                r4.y = hdB897.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r3 = hdLod8(param_48, param_49);
                r1.w += r3.x;
                vec2 hdB919 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB919.x;
                r4.y = hdB919.y;
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
    vec3 hdB976 = r0.www * v1.xyz;
    r2.x = hdB976.x;
    r2.y = hdB976.y;
    r2.z = hdB976.z;
    vec4 hdB983 = r1;
    vec3 hdB987 = hdB983.xxx * r2.xyz;
    r1.x = hdB987.x;
    r1.z = hdB987.y;
    r1.w = hdB987.z;
    vec4 hdB994 = r0;
    vec3 hdB1001 = (hdB994.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB1001.x;
    r0.y = hdB1001.y;
    r0.z = hdB1001.z;
    vec4 hdB1008 = r0;
    vec3 hdB1015 = hdB1008.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1015.x;
    r0.y = hdB1015.y;
    r0.z = hdB1015.z;
    vec3 hdB1030 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1030.x;
    oC0.y = hdB1030.y;
    oC0.z = hdB1030.z;
    oC0.w = 1.0;
    bool hdB1042 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1050;
    if (hdB1042)
    {
        hdB1050 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1050 = hdB1042;
    }
    if (hdB1050)
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
    bool _3745 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3755;
    if (_3745)
    {
        _3755 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3755 = _3745;
    }
    if (_3755)
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
        bool _3780 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3795;
        if (!_3780)
        {
            _3795 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3795 = _3780;
        }
        if (_3795)
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
