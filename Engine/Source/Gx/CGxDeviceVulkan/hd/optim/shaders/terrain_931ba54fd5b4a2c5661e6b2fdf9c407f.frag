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
float _RESERVED_IDENTIFIER_FIXUP_3912;
vec4 _RESERVED_IDENTIFIER_FIXUP_3913;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1210 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1214 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1222 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1226 = hdTex4(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_1230 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1226.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3087 = _RESERVED_IDENTIFIER_FIXUP_1226;
    _RESERVED_IDENTIFIER_FIXUP_3087.w = _RESERVED_IDENTIFIER_FIXUP_1230;
    _RESERVED_IDENTIFIER_FIXUP_3087.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1230;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1240 = _RESERVED_IDENTIFIER_FIXUP_1214 * _RESERVED_IDENTIFIER_FIXUP_3087.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1258 = (_RESERVED_IDENTIFIER_FIXUP_1222 * _RESERVED_IDENTIFIER_FIXUP_3087.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1218 * _RESERVED_IDENTIFIER_FIXUP_3087.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1210 * _RESERVED_IDENTIFIER_FIXUP_3087.wwww) + _RESERVED_IDENTIFIER_FIXUP_1240));
    float _RESERVED_IDENTIFIER_FIXUP_1265 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3094 = _RESERVED_IDENTIFIER_FIXUP_1240;
    _RESERVED_IDENTIFIER_FIXUP_3094.x = _RESERVED_IDENTIFIER_FIXUP_1265;
    float _RESERVED_IDENTIFIER_FIXUP_1271 = clamp((_RESERVED_IDENTIFIER_FIXUP_1265 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3094.x = _RESERVED_IDENTIFIER_FIXUP_1271;
    float _RESERVED_IDENTIFIER_FIXUP_1277 = ((-_RESERVED_IDENTIFIER_FIXUP_1271) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3094.x = _RESERVED_IDENTIFIER_FIXUP_1277;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3914;
    if (_RESERVED_IDENTIFIER_FIXUP_1277 != (-_RESERVED_IDENTIFIER_FIXUP_1277))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1289 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3333;
        _RESERVED_IDENTIFIER_FIXUP_3333.x = _RESERVED_IDENTIFIER_FIXUP_1289.x;
        _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_1289.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_3333.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3337;
        _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_1299.x;
        _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_1299.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_3333.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3341;
        _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_1309.x;
        _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_1309.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_3333.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3345;
        _RESERVED_IDENTIFIER_FIXUP_3345.x = _RESERVED_IDENTIFIER_FIXUP_1319.x;
        _RESERVED_IDENTIFIER_FIXUP_3345.y = _RESERVED_IDENTIFIER_FIXUP_1319.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1329 = _RESERVED_IDENTIFIER_FIXUP_3333.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3349;
        _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_1329.x;
        _RESERVED_IDENTIFIER_FIXUP_3349.y = _RESERVED_IDENTIFIER_FIXUP_1329.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_3333.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3353;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_1339.x;
        _RESERVED_IDENTIFIER_FIXUP_3353.y = _RESERVED_IDENTIFIER_FIXUP_1339.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1349 = _RESERVED_IDENTIFIER_FIXUP_3333.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3357;
        _RESERVED_IDENTIFIER_FIXUP_3357.x = _RESERVED_IDENTIFIER_FIXUP_1349.x;
        _RESERVED_IDENTIFIER_FIXUP_3357.y = _RESERVED_IDENTIFIER_FIXUP_1349.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_3333.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3361;
        _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_1359.x;
        _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_1359.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1369 = _RESERVED_IDENTIFIER_FIXUP_3333.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3365;
        _RESERVED_IDENTIFIER_FIXUP_3365.x = _RESERVED_IDENTIFIER_FIXUP_1369.x;
        _RESERVED_IDENTIFIER_FIXUP_3365.y = _RESERVED_IDENTIFIER_FIXUP_1369.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1377 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1377.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1377.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1383 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3337.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3341.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3345.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3349.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3349.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1423 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_3353.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3357.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3361.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3365.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3365.xy;
        float param_9 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1463 = hdLod5(param_8, param_9);
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3337.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1383.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3341.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1383.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3345.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1383.w = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3353.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1423.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3357.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1423.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3361.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1423.w = hdLod5(param_20, param_21).x;
        float _RESERVED_IDENTIFIER_FIXUP_1503 = _RESERVED_IDENTIFIER_FIXUP_1463.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3430 = _RESERVED_IDENTIFIER_FIXUP_1463;
        _RESERVED_IDENTIFIER_FIXUP_3430.x = _RESERVED_IDENTIFIER_FIXUP_1503;
        float _RESERVED_IDENTIFIER_FIXUP_1508 = float(_RESERVED_IDENTIFIER_FIXUP_1503 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3430.x = _RESERVED_IDENTIFIER_FIXUP_1508;
        float _RESERVED_IDENTIFIER_FIXUP_1511 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1383 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_1511;
        float _RESERVED_IDENTIFIER_FIXUP_1514 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1423 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3430.z = _RESERVED_IDENTIFIER_FIXUP_1514;
        float _RESERVED_IDENTIFIER_FIXUP_1520 = _RESERVED_IDENTIFIER_FIXUP_1511 + _RESERVED_IDENTIFIER_FIXUP_1514;
        _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_1520;
        float _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_1508 + _RESERVED_IDENTIFIER_FIXUP_1520;
        _RESERVED_IDENTIFIER_FIXUP_3430.x = _RESERVED_IDENTIFIER_FIXUP_1526;
        _RESERVED_IDENTIFIER_FIXUP_3430.x = _RESERVED_IDENTIFIER_FIXUP_1526 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3914 = _RESERVED_IDENTIFIER_FIXUP_3430;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1539 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3094.y = _RESERVED_IDENTIFIER_FIXUP_1539;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3915;
        if (_RESERVED_IDENTIFIER_FIXUP_1539 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1548 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3267 = _RESERVED_IDENTIFIER_FIXUP_3094;
            _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_1548.x;
            _RESERVED_IDENTIFIER_FIXUP_3267.z = _RESERVED_IDENTIFIER_FIXUP_1548.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1558 = _RESERVED_IDENTIFIER_FIXUP_3267.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3271;
            _RESERVED_IDENTIFIER_FIXUP_3271.x = _RESERVED_IDENTIFIER_FIXUP_1558.x;
            _RESERVED_IDENTIFIER_FIXUP_3271.y = _RESERVED_IDENTIFIER_FIXUP_1558.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_3267.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3275;
            _RESERVED_IDENTIFIER_FIXUP_3275.x = _RESERVED_IDENTIFIER_FIXUP_1568.x;
            _RESERVED_IDENTIFIER_FIXUP_3275.y = _RESERVED_IDENTIFIER_FIXUP_1568.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_3267.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3279;
            _RESERVED_IDENTIFIER_FIXUP_3279.x = _RESERVED_IDENTIFIER_FIXUP_1578.x;
            _RESERVED_IDENTIFIER_FIXUP_3279.y = _RESERVED_IDENTIFIER_FIXUP_1578.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1588 = _RESERVED_IDENTIFIER_FIXUP_3267.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3283;
            _RESERVED_IDENTIFIER_FIXUP_3283.x = _RESERVED_IDENTIFIER_FIXUP_1588.x;
            _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_1588.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1596 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1596.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1596.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1602 = hdLod6(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_3271.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3275.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3279.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3283.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3271.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1602.y = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3275.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1602.z = hdLod6(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3279.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1602.w = hdLod6(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3283.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1665 = hdLod6(param_30, param_31).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_1665;
            float _RESERVED_IDENTIFIER_FIXUP_1670 = float(_RESERVED_IDENTIFIER_FIXUP_1665 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_1670;
            float _RESERVED_IDENTIFIER_FIXUP_1673 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1602 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3267.z = _RESERVED_IDENTIFIER_FIXUP_1673;
            float _RESERVED_IDENTIFIER_FIXUP_1679 = _RESERVED_IDENTIFIER_FIXUP_1670 + _RESERVED_IDENTIFIER_FIXUP_1673;
            _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_1679;
            _RESERVED_IDENTIFIER_FIXUP_3267.x = _RESERVED_IDENTIFIER_FIXUP_1679 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3915 = _RESERVED_IDENTIFIER_FIXUP_3267;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1692 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3111 = _RESERVED_IDENTIFIER_FIXUP_3094;
            _RESERVED_IDENTIFIER_FIXUP_3111.y = _RESERVED_IDENTIFIER_FIXUP_1692;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3916;
            if (_RESERVED_IDENTIFIER_FIXUP_1692 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1701 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3201 = _RESERVED_IDENTIFIER_FIXUP_3111;
                _RESERVED_IDENTIFIER_FIXUP_3201.y = _RESERVED_IDENTIFIER_FIXUP_1701.x;
                _RESERVED_IDENTIFIER_FIXUP_3201.z = _RESERVED_IDENTIFIER_FIXUP_1701.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_3201.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3205;
                _RESERVED_IDENTIFIER_FIXUP_3205.x = _RESERVED_IDENTIFIER_FIXUP_1711.x;
                _RESERVED_IDENTIFIER_FIXUP_3205.y = _RESERVED_IDENTIFIER_FIXUP_1711.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1721 = _RESERVED_IDENTIFIER_FIXUP_3201.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3209;
                _RESERVED_IDENTIFIER_FIXUP_3209.x = _RESERVED_IDENTIFIER_FIXUP_1721.x;
                _RESERVED_IDENTIFIER_FIXUP_3209.y = _RESERVED_IDENTIFIER_FIXUP_1721.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1731 = _RESERVED_IDENTIFIER_FIXUP_3201.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3213;
                _RESERVED_IDENTIFIER_FIXUP_3213.x = _RESERVED_IDENTIFIER_FIXUP_1731.x;
                _RESERVED_IDENTIFIER_FIXUP_3213.y = _RESERVED_IDENTIFIER_FIXUP_1731.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1741 = _RESERVED_IDENTIFIER_FIXUP_3201.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3217;
                _RESERVED_IDENTIFIER_FIXUP_3217.x = _RESERVED_IDENTIFIER_FIXUP_1741.x;
                _RESERVED_IDENTIFIER_FIXUP_3217.y = _RESERVED_IDENTIFIER_FIXUP_1741.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1749 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1749.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1749.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1755 = hdLod7(param_32, param_33);
                _RESERVED_IDENTIFIER_FIXUP_3205.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3209.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3213.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3217.w = 0.0;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3205.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1755.y = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3209.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1755.z = hdLod7(param_36, param_37).x;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3213.xy;
                float param_39 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1755.w = hdLod7(param_38, param_39).x;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3217.xy;
                float param_41 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1818 = hdLod7(param_40, param_41).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3201.y = _RESERVED_IDENTIFIER_FIXUP_1818;
                float _RESERVED_IDENTIFIER_FIXUP_1823 = float(_RESERVED_IDENTIFIER_FIXUP_1818 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3201.y = _RESERVED_IDENTIFIER_FIXUP_1823;
                float _RESERVED_IDENTIFIER_FIXUP_1826 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1755 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3201.z = _RESERVED_IDENTIFIER_FIXUP_1826;
                float _RESERVED_IDENTIFIER_FIXUP_1832 = _RESERVED_IDENTIFIER_FIXUP_1823 + _RESERVED_IDENTIFIER_FIXUP_1826;
                _RESERVED_IDENTIFIER_FIXUP_3201.y = _RESERVED_IDENTIFIER_FIXUP_1832;
                _RESERVED_IDENTIFIER_FIXUP_3201.x = _RESERVED_IDENTIFIER_FIXUP_1832 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3916 = _RESERVED_IDENTIFIER_FIXUP_3201;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_1218.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_1218.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1848 = (_RESERVED_IDENTIFIER_FIXUP_1218.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3120;
                _RESERVED_IDENTIFIER_FIXUP_3120.x = _RESERVED_IDENTIFIER_FIXUP_1848.x;
                _RESERVED_IDENTIFIER_FIXUP_3120.y = _RESERVED_IDENTIFIER_FIXUP_1848.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1858 = _RESERVED_IDENTIFIER_FIXUP_3120.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3124;
                _RESERVED_IDENTIFIER_FIXUP_3124.x = _RESERVED_IDENTIFIER_FIXUP_1858.x;
                _RESERVED_IDENTIFIER_FIXUP_3124.y = _RESERVED_IDENTIFIER_FIXUP_1858.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1868 = _RESERVED_IDENTIFIER_FIXUP_3120.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3128;
                _RESERVED_IDENTIFIER_FIXUP_3128.x = _RESERVED_IDENTIFIER_FIXUP_1868.x;
                _RESERVED_IDENTIFIER_FIXUP_3128.y = _RESERVED_IDENTIFIER_FIXUP_1868.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1878 = _RESERVED_IDENTIFIER_FIXUP_3120.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3132;
                _RESERVED_IDENTIFIER_FIXUP_3132.x = _RESERVED_IDENTIFIER_FIXUP_1878.x;
                _RESERVED_IDENTIFIER_FIXUP_3132.y = _RESERVED_IDENTIFIER_FIXUP_1878.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1888 = _RESERVED_IDENTIFIER_FIXUP_3120.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3136;
                _RESERVED_IDENTIFIER_FIXUP_3136.x = _RESERVED_IDENTIFIER_FIXUP_1888.x;
                _RESERVED_IDENTIFIER_FIXUP_3136.y = _RESERVED_IDENTIFIER_FIXUP_1888.y;
                _RESERVED_IDENTIFIER_FIXUP_3120.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3120.xy;
                float param_43 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1902 = hdLod8(param_42, param_43);
                _RESERVED_IDENTIFIER_FIXUP_3124.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3128.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3132.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3136.w = 0.0;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3124.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1902.y = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3128.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1902.z = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3132.xy;
                float param_49 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1902.w = hdLod8(param_48, param_49).x;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3136.xy;
                float param_51 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1965 = hdLod8(param_50, param_51).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3176 = _RESERVED_IDENTIFIER_FIXUP_3111;
                _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1965;
                float _RESERVED_IDENTIFIER_FIXUP_1970 = float(_RESERVED_IDENTIFIER_FIXUP_1965 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1970;
                float _RESERVED_IDENTIFIER_FIXUP_1973 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1902 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3176.z = _RESERVED_IDENTIFIER_FIXUP_1973;
                float _RESERVED_IDENTIFIER_FIXUP_1979 = _RESERVED_IDENTIFIER_FIXUP_1970 + _RESERVED_IDENTIFIER_FIXUP_1973;
                _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1979;
                float _RESERVED_IDENTIFIER_FIXUP_1987 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3176.z = _RESERVED_IDENTIFIER_FIXUP_1987;
                float _RESERVED_IDENTIFIER_FIXUP_1993 = clamp((_RESERVED_IDENTIFIER_FIXUP_1987 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3176.z = _RESERVED_IDENTIFIER_FIXUP_1993;
                float _RESERVED_IDENTIFIER_FIXUP_1998 = (_RESERVED_IDENTIFIER_FIXUP_1979 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1998;
                _RESERVED_IDENTIFIER_FIXUP_3176.x = (_RESERVED_IDENTIFIER_FIXUP_1993 * _RESERVED_IDENTIFIER_FIXUP_1998) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3916 = _RESERVED_IDENTIFIER_FIXUP_3176;
            }
            _RESERVED_IDENTIFIER_FIXUP_3915 = _RESERVED_IDENTIFIER_FIXUP_3916;
        }
        _RESERVED_IDENTIFIER_FIXUP_3914 = _RESERVED_IDENTIFIER_FIXUP_3915;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3453 = _RESERVED_IDENTIFIER_FIXUP_3914;
    _RESERVED_IDENTIFIER_FIXUP_3453.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2026 = _RESERVED_IDENTIFIER_FIXUP_1258.xyz * _RESERVED_IDENTIFIER_FIXUP_3453.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3455 = _RESERVED_IDENTIFIER_FIXUP_1258;
    _RESERVED_IDENTIFIER_FIXUP_3455.x = _RESERVED_IDENTIFIER_FIXUP_2026.x;
    _RESERVED_IDENTIFIER_FIXUP_3455.y = _RESERVED_IDENTIFIER_FIXUP_2026.y;
    _RESERVED_IDENTIFIER_FIXUP_3455.z = _RESERVED_IDENTIFIER_FIXUP_2026.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2037 = _RESERVED_IDENTIFIER_FIXUP_3455.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3912).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3461 = _RESERVED_IDENTIFIER_FIXUP_3455;
    _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_2037.x;
    _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_2037.y;
    _RESERVED_IDENTIFIER_FIXUP_3461.z = _RESERVED_IDENTIFIER_FIXUP_2037.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2048 = _RESERVED_IDENTIFIER_FIXUP_3461.xyz + _RESERVED_IDENTIFIER_FIXUP_3461.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3467 = _RESERVED_IDENTIFIER_FIXUP_3461;
    _RESERVED_IDENTIFIER_FIXUP_3467.x = _RESERVED_IDENTIFIER_FIXUP_2048.x;
    _RESERVED_IDENTIFIER_FIXUP_3467.y = _RESERVED_IDENTIFIER_FIXUP_2048.y;
    _RESERVED_IDENTIFIER_FIXUP_3467.z = _RESERVED_IDENTIFIER_FIXUP_2048.z;
    _RESERVED_IDENTIFIER_FIXUP_3453.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3453.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3453.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2073 = (_RESERVED_IDENTIFIER_FIXUP_3453.yzw * _RESERVED_IDENTIFIER_FIXUP_3453.xxx) + _RESERVED_IDENTIFIER_FIXUP_3467.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3479 = _RESERVED_IDENTIFIER_FIXUP_3467;
    _RESERVED_IDENTIFIER_FIXUP_3479.x = _RESERVED_IDENTIFIER_FIXUP_2073.x;
    _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2073.y;
    _RESERVED_IDENTIFIER_FIXUP_3479.z = _RESERVED_IDENTIFIER_FIXUP_2073.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2086 = _RESERVED_IDENTIFIER_FIXUP_3479.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3485 = _RESERVED_IDENTIFIER_FIXUP_3479;
    _RESERVED_IDENTIFIER_FIXUP_3485.x = _RESERVED_IDENTIFIER_FIXUP_2086.x;
    _RESERVED_IDENTIFIER_FIXUP_3485.y = _RESERVED_IDENTIFIER_FIXUP_2086.y;
    _RESERVED_IDENTIFIER_FIXUP_3485.z = _RESERVED_IDENTIFIER_FIXUP_2086.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2145 = OptTex0( texcoord0.xyz);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2149 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2153 = hdTex2(param_53);
    vec2 param_54 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2157 = hdTex3(param_54);
    vec2 param_55 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2161 = hdTex4(param_55);
    float _RESERVED_IDENTIFIER_FIXUP_2165 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2161.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3499 = _RESERVED_IDENTIFIER_FIXUP_2161;
    _RESERVED_IDENTIFIER_FIXUP_3499.w = _RESERVED_IDENTIFIER_FIXUP_2165;
    _RESERVED_IDENTIFIER_FIXUP_3499.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2165;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2175 = _RESERVED_IDENTIFIER_FIXUP_2149 * _RESERVED_IDENTIFIER_FIXUP_3499.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2193 = (_RESERVED_IDENTIFIER_FIXUP_2157 * _RESERVED_IDENTIFIER_FIXUP_3499.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_2153 * _RESERVED_IDENTIFIER_FIXUP_3499.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2145 * _RESERVED_IDENTIFIER_FIXUP_3499.wwww) + _RESERVED_IDENTIFIER_FIXUP_2175));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3506 = _RESERVED_IDENTIFIER_FIXUP_2175;
    _RESERVED_IDENTIFIER_FIXUP_3506.x = _RESERVED_IDENTIFIER_FIXUP_1265;
    float _RESERVED_IDENTIFIER_FIXUP_2206 = clamp((_RESERVED_IDENTIFIER_FIXUP_1265 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3506.x = _RESERVED_IDENTIFIER_FIXUP_2206;
    float _RESERVED_IDENTIFIER_FIXUP_2212 = ((-_RESERVED_IDENTIFIER_FIXUP_2206) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3506.x = _RESERVED_IDENTIFIER_FIXUP_2212;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3923;
    if (_RESERVED_IDENTIFIER_FIXUP_2212 != (-_RESERVED_IDENTIFIER_FIXUP_2212))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2224 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3745;
        _RESERVED_IDENTIFIER_FIXUP_3745.x = _RESERVED_IDENTIFIER_FIXUP_2224.x;
        _RESERVED_IDENTIFIER_FIXUP_3745.y = _RESERVED_IDENTIFIER_FIXUP_2224.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2234 = _RESERVED_IDENTIFIER_FIXUP_3745.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3749;
        _RESERVED_IDENTIFIER_FIXUP_3749.x = _RESERVED_IDENTIFIER_FIXUP_2234.x;
        _RESERVED_IDENTIFIER_FIXUP_3749.y = _RESERVED_IDENTIFIER_FIXUP_2234.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2244 = _RESERVED_IDENTIFIER_FIXUP_3745.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3753;
        _RESERVED_IDENTIFIER_FIXUP_3753.x = _RESERVED_IDENTIFIER_FIXUP_2244.x;
        _RESERVED_IDENTIFIER_FIXUP_3753.y = _RESERVED_IDENTIFIER_FIXUP_2244.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2254 = _RESERVED_IDENTIFIER_FIXUP_3745.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3757;
        _RESERVED_IDENTIFIER_FIXUP_3757.x = _RESERVED_IDENTIFIER_FIXUP_2254.x;
        _RESERVED_IDENTIFIER_FIXUP_3757.y = _RESERVED_IDENTIFIER_FIXUP_2254.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2264 = _RESERVED_IDENTIFIER_FIXUP_3745.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3761;
        _RESERVED_IDENTIFIER_FIXUP_3761.x = _RESERVED_IDENTIFIER_FIXUP_2264.x;
        _RESERVED_IDENTIFIER_FIXUP_3761.y = _RESERVED_IDENTIFIER_FIXUP_2264.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2274 = _RESERVED_IDENTIFIER_FIXUP_3745.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3765;
        _RESERVED_IDENTIFIER_FIXUP_3765.x = _RESERVED_IDENTIFIER_FIXUP_2274.x;
        _RESERVED_IDENTIFIER_FIXUP_3765.y = _RESERVED_IDENTIFIER_FIXUP_2274.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2284 = _RESERVED_IDENTIFIER_FIXUP_3745.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3769;
        _RESERVED_IDENTIFIER_FIXUP_3769.x = _RESERVED_IDENTIFIER_FIXUP_2284.x;
        _RESERVED_IDENTIFIER_FIXUP_3769.y = _RESERVED_IDENTIFIER_FIXUP_2284.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2294 = _RESERVED_IDENTIFIER_FIXUP_3745.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3773;
        _RESERVED_IDENTIFIER_FIXUP_3773.x = _RESERVED_IDENTIFIER_FIXUP_2294.x;
        _RESERVED_IDENTIFIER_FIXUP_3773.y = _RESERVED_IDENTIFIER_FIXUP_2294.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2304 = _RESERVED_IDENTIFIER_FIXUP_3745.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3777;
        _RESERVED_IDENTIFIER_FIXUP_3777.x = _RESERVED_IDENTIFIER_FIXUP_2304.x;
        _RESERVED_IDENTIFIER_FIXUP_3777.y = _RESERVED_IDENTIFIER_FIXUP_2304.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2312 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2312.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2312.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2318 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3749.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3753.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3757.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3761.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3761.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2358 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3765.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3769.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3773.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3777.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3777.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2398 = hdLod5(param_60, param_61);
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3749.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2318.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3753.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2318.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3757.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2318.w = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3765.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2358.y = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3769.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2358.z = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3773.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2358.w = hdLod5(param_72, param_73).x;
        float _RESERVED_IDENTIFIER_FIXUP_2438 = _RESERVED_IDENTIFIER_FIXUP_2398.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3842 = _RESERVED_IDENTIFIER_FIXUP_2398;
        _RESERVED_IDENTIFIER_FIXUP_3842.x = _RESERVED_IDENTIFIER_FIXUP_2438;
        float _RESERVED_IDENTIFIER_FIXUP_2443 = float(_RESERVED_IDENTIFIER_FIXUP_2438 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3842.x = _RESERVED_IDENTIFIER_FIXUP_2443;
        float _RESERVED_IDENTIFIER_FIXUP_2446 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2318 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3842.y = _RESERVED_IDENTIFIER_FIXUP_2446;
        float _RESERVED_IDENTIFIER_FIXUP_2449 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2358 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3842.z = _RESERVED_IDENTIFIER_FIXUP_2449;
        float _RESERVED_IDENTIFIER_FIXUP_2455 = _RESERVED_IDENTIFIER_FIXUP_2446 + _RESERVED_IDENTIFIER_FIXUP_2449;
        _RESERVED_IDENTIFIER_FIXUP_3842.y = _RESERVED_IDENTIFIER_FIXUP_2455;
        float _RESERVED_IDENTIFIER_FIXUP_2461 = _RESERVED_IDENTIFIER_FIXUP_2443 + _RESERVED_IDENTIFIER_FIXUP_2455;
        _RESERVED_IDENTIFIER_FIXUP_3842.x = _RESERVED_IDENTIFIER_FIXUP_2461;
        _RESERVED_IDENTIFIER_FIXUP_3842.x = _RESERVED_IDENTIFIER_FIXUP_2461 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3923 = _RESERVED_IDENTIFIER_FIXUP_3842;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2474 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3506.y = _RESERVED_IDENTIFIER_FIXUP_2474;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3924;
        if (_RESERVED_IDENTIFIER_FIXUP_2474 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2483 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3679 = _RESERVED_IDENTIFIER_FIXUP_3506;
            _RESERVED_IDENTIFIER_FIXUP_3679.y = _RESERVED_IDENTIFIER_FIXUP_2483.x;
            _RESERVED_IDENTIFIER_FIXUP_3679.z = _RESERVED_IDENTIFIER_FIXUP_2483.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2493 = _RESERVED_IDENTIFIER_FIXUP_3679.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3683;
            _RESERVED_IDENTIFIER_FIXUP_3683.x = _RESERVED_IDENTIFIER_FIXUP_2493.x;
            _RESERVED_IDENTIFIER_FIXUP_3683.y = _RESERVED_IDENTIFIER_FIXUP_2493.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2503 = _RESERVED_IDENTIFIER_FIXUP_3679.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3687;
            _RESERVED_IDENTIFIER_FIXUP_3687.x = _RESERVED_IDENTIFIER_FIXUP_2503.x;
            _RESERVED_IDENTIFIER_FIXUP_3687.y = _RESERVED_IDENTIFIER_FIXUP_2503.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2513 = _RESERVED_IDENTIFIER_FIXUP_3679.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3691;
            _RESERVED_IDENTIFIER_FIXUP_3691.x = _RESERVED_IDENTIFIER_FIXUP_2513.x;
            _RESERVED_IDENTIFIER_FIXUP_3691.y = _RESERVED_IDENTIFIER_FIXUP_2513.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2523 = _RESERVED_IDENTIFIER_FIXUP_3679.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3695;
            _RESERVED_IDENTIFIER_FIXUP_3695.x = _RESERVED_IDENTIFIER_FIXUP_2523.x;
            _RESERVED_IDENTIFIER_FIXUP_3695.y = _RESERVED_IDENTIFIER_FIXUP_2523.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2531 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2531.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2531.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2537 = hdLod6(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3683.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3687.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3691.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3695.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3683.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2537.y = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3687.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2537.z = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3691.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2537.w = hdLod6(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3695.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2600 = hdLod6(param_82, param_83).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3679.y = _RESERVED_IDENTIFIER_FIXUP_2600;
            float _RESERVED_IDENTIFIER_FIXUP_2605 = float(_RESERVED_IDENTIFIER_FIXUP_2600 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3679.y = _RESERVED_IDENTIFIER_FIXUP_2605;
            float _RESERVED_IDENTIFIER_FIXUP_2608 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2537 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3679.z = _RESERVED_IDENTIFIER_FIXUP_2608;
            float _RESERVED_IDENTIFIER_FIXUP_2614 = _RESERVED_IDENTIFIER_FIXUP_2605 + _RESERVED_IDENTIFIER_FIXUP_2608;
            _RESERVED_IDENTIFIER_FIXUP_3679.y = _RESERVED_IDENTIFIER_FIXUP_2614;
            _RESERVED_IDENTIFIER_FIXUP_3679.x = _RESERVED_IDENTIFIER_FIXUP_2614 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3924 = _RESERVED_IDENTIFIER_FIXUP_3679;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2627 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3523 = _RESERVED_IDENTIFIER_FIXUP_3506;
            _RESERVED_IDENTIFIER_FIXUP_3523.y = _RESERVED_IDENTIFIER_FIXUP_2627;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3925;
            if (_RESERVED_IDENTIFIER_FIXUP_2627 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2636 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3613 = _RESERVED_IDENTIFIER_FIXUP_3523;
                _RESERVED_IDENTIFIER_FIXUP_3613.y = _RESERVED_IDENTIFIER_FIXUP_2636.x;
                _RESERVED_IDENTIFIER_FIXUP_3613.z = _RESERVED_IDENTIFIER_FIXUP_2636.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2646 = _RESERVED_IDENTIFIER_FIXUP_3613.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3617;
                _RESERVED_IDENTIFIER_FIXUP_3617.x = _RESERVED_IDENTIFIER_FIXUP_2646.x;
                _RESERVED_IDENTIFIER_FIXUP_3617.y = _RESERVED_IDENTIFIER_FIXUP_2646.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2656 = _RESERVED_IDENTIFIER_FIXUP_3613.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3621;
                _RESERVED_IDENTIFIER_FIXUP_3621.x = _RESERVED_IDENTIFIER_FIXUP_2656.x;
                _RESERVED_IDENTIFIER_FIXUP_3621.y = _RESERVED_IDENTIFIER_FIXUP_2656.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2666 = _RESERVED_IDENTIFIER_FIXUP_3613.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3625;
                _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2666.x;
                _RESERVED_IDENTIFIER_FIXUP_3625.y = _RESERVED_IDENTIFIER_FIXUP_2666.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2676 = _RESERVED_IDENTIFIER_FIXUP_3613.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3629;
                _RESERVED_IDENTIFIER_FIXUP_3629.x = _RESERVED_IDENTIFIER_FIXUP_2676.x;
                _RESERVED_IDENTIFIER_FIXUP_3629.y = _RESERVED_IDENTIFIER_FIXUP_2676.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2684 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2684.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2684.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2690 = hdLod7(param_84, param_85);
                _RESERVED_IDENTIFIER_FIXUP_3617.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3621.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3625.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3629.w = 0.0;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3617.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2690.y = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3621.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2690.z = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3625.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2690.w = hdLod7(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3629.xy;
                float param_93 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2753 = hdLod7(param_92, param_93).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3613.y = _RESERVED_IDENTIFIER_FIXUP_2753;
                float _RESERVED_IDENTIFIER_FIXUP_2758 = float(_RESERVED_IDENTIFIER_FIXUP_2753 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3613.y = _RESERVED_IDENTIFIER_FIXUP_2758;
                float _RESERVED_IDENTIFIER_FIXUP_2761 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2690 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3613.z = _RESERVED_IDENTIFIER_FIXUP_2761;
                float _RESERVED_IDENTIFIER_FIXUP_2767 = _RESERVED_IDENTIFIER_FIXUP_2758 + _RESERVED_IDENTIFIER_FIXUP_2761;
                _RESERVED_IDENTIFIER_FIXUP_3613.y = _RESERVED_IDENTIFIER_FIXUP_2767;
                _RESERVED_IDENTIFIER_FIXUP_3613.x = _RESERVED_IDENTIFIER_FIXUP_2767 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3925 = _RESERVED_IDENTIFIER_FIXUP_3613;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_2153.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2153.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2783 = (_RESERVED_IDENTIFIER_FIXUP_2153.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3532;
                _RESERVED_IDENTIFIER_FIXUP_3532.x = _RESERVED_IDENTIFIER_FIXUP_2783.x;
                _RESERVED_IDENTIFIER_FIXUP_3532.y = _RESERVED_IDENTIFIER_FIXUP_2783.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2793 = _RESERVED_IDENTIFIER_FIXUP_3532.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3536;
                _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2793.x;
                _RESERVED_IDENTIFIER_FIXUP_3536.y = _RESERVED_IDENTIFIER_FIXUP_2793.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2803 = _RESERVED_IDENTIFIER_FIXUP_3532.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3540;
                _RESERVED_IDENTIFIER_FIXUP_3540.x = _RESERVED_IDENTIFIER_FIXUP_2803.x;
                _RESERVED_IDENTIFIER_FIXUP_3540.y = _RESERVED_IDENTIFIER_FIXUP_2803.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2813 = _RESERVED_IDENTIFIER_FIXUP_3532.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3544;
                _RESERVED_IDENTIFIER_FIXUP_3544.x = _RESERVED_IDENTIFIER_FIXUP_2813.x;
                _RESERVED_IDENTIFIER_FIXUP_3544.y = _RESERVED_IDENTIFIER_FIXUP_2813.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2823 = _RESERVED_IDENTIFIER_FIXUP_3532.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3548;
                _RESERVED_IDENTIFIER_FIXUP_3548.x = _RESERVED_IDENTIFIER_FIXUP_2823.x;
                _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_2823.y;
                _RESERVED_IDENTIFIER_FIXUP_3532.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3532.xy;
                float param_95 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2837 = hdLod8(param_94, param_95);
                _RESERVED_IDENTIFIER_FIXUP_3536.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3540.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3544.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3548.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3536.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2837.y = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3540.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2837.z = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3544.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2837.w = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3548.xy;
                float param_103 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2900 = hdLod8(param_102, param_103).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3588 = _RESERVED_IDENTIFIER_FIXUP_3523;
                _RESERVED_IDENTIFIER_FIXUP_3588.y = _RESERVED_IDENTIFIER_FIXUP_2900;
                float _RESERVED_IDENTIFIER_FIXUP_2905 = float(_RESERVED_IDENTIFIER_FIXUP_2900 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3588.y = _RESERVED_IDENTIFIER_FIXUP_2905;
                float _RESERVED_IDENTIFIER_FIXUP_2908 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2837 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3588.z = _RESERVED_IDENTIFIER_FIXUP_2908;
                float _RESERVED_IDENTIFIER_FIXUP_2914 = _RESERVED_IDENTIFIER_FIXUP_2905 + _RESERVED_IDENTIFIER_FIXUP_2908;
                _RESERVED_IDENTIFIER_FIXUP_3588.y = _RESERVED_IDENTIFIER_FIXUP_2914;
                float _RESERVED_IDENTIFIER_FIXUP_2922 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3588.z = _RESERVED_IDENTIFIER_FIXUP_2922;
                float _RESERVED_IDENTIFIER_FIXUP_2928 = clamp((_RESERVED_IDENTIFIER_FIXUP_2922 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3588.z = _RESERVED_IDENTIFIER_FIXUP_2928;
                float _RESERVED_IDENTIFIER_FIXUP_2933 = (_RESERVED_IDENTIFIER_FIXUP_2914 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3588.y = _RESERVED_IDENTIFIER_FIXUP_2933;
                _RESERVED_IDENTIFIER_FIXUP_3588.x = (_RESERVED_IDENTIFIER_FIXUP_2928 * _RESERVED_IDENTIFIER_FIXUP_2933) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3925 = _RESERVED_IDENTIFIER_FIXUP_3588;
            }
            _RESERVED_IDENTIFIER_FIXUP_3924 = _RESERVED_IDENTIFIER_FIXUP_3925;
        }
        _RESERVED_IDENTIFIER_FIXUP_3923 = _RESERVED_IDENTIFIER_FIXUP_3924;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2948 = (_RESERVED_IDENTIFIER_FIXUP_3923.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3863 = _RESERVED_IDENTIFIER_FIXUP_3923;
    _RESERVED_IDENTIFIER_FIXUP_3863.y = _RESERVED_IDENTIFIER_FIXUP_2948;
    _RESERVED_IDENTIFIER_FIXUP_3863.y = _RESERVED_IDENTIFIER_FIXUP_2948;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2961 = _RESERVED_IDENTIFIER_FIXUP_2193.xyz * _RESERVED_IDENTIFIER_FIXUP_3863.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3869 = _RESERVED_IDENTIFIER_FIXUP_2193;
    _RESERVED_IDENTIFIER_FIXUP_3869.x = _RESERVED_IDENTIFIER_FIXUP_2961.x;
    _RESERVED_IDENTIFIER_FIXUP_3869.y = _RESERVED_IDENTIFIER_FIXUP_2961.y;
    _RESERVED_IDENTIFIER_FIXUP_3869.z = _RESERVED_IDENTIFIER_FIXUP_2961.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2972 = _RESERVED_IDENTIFIER_FIXUP_3869.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3875 = _RESERVED_IDENTIFIER_FIXUP_3869;
    _RESERVED_IDENTIFIER_FIXUP_3875.x = _RESERVED_IDENTIFIER_FIXUP_2972.x;
    _RESERVED_IDENTIFIER_FIXUP_3875.y = _RESERVED_IDENTIFIER_FIXUP_2972.y;
    _RESERVED_IDENTIFIER_FIXUP_3875.z = _RESERVED_IDENTIFIER_FIXUP_2972.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2983 = _RESERVED_IDENTIFIER_FIXUP_3875.xyz + _RESERVED_IDENTIFIER_FIXUP_3875.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3881 = _RESERVED_IDENTIFIER_FIXUP_3875;
    _RESERVED_IDENTIFIER_FIXUP_3881.x = _RESERVED_IDENTIFIER_FIXUP_2983.x;
    _RESERVED_IDENTIFIER_FIXUP_3881.y = _RESERVED_IDENTIFIER_FIXUP_2983.y;
    _RESERVED_IDENTIFIER_FIXUP_3881.z = _RESERVED_IDENTIFIER_FIXUP_2983.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2994 = _RESERVED_IDENTIFIER_FIXUP_3881.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3863.y = _RESERVED_IDENTIFIER_FIXUP_2994.x;
    _RESERVED_IDENTIFIER_FIXUP_3863.z = _RESERVED_IDENTIFIER_FIXUP_2994.y;
    _RESERVED_IDENTIFIER_FIXUP_3863.w = _RESERVED_IDENTIFIER_FIXUP_2994.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3008 = (_RESERVED_IDENTIFIER_FIXUP_3863.yzw * _RESERVED_IDENTIFIER_FIXUP_3863.xxx) + _RESERVED_IDENTIFIER_FIXUP_3881.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3893 = _RESERVED_IDENTIFIER_FIXUP_3881;
    _RESERVED_IDENTIFIER_FIXUP_3893.x = _RESERVED_IDENTIFIER_FIXUP_3008.x;
    _RESERVED_IDENTIFIER_FIXUP_3893.y = _RESERVED_IDENTIFIER_FIXUP_3008.y;
    _RESERVED_IDENTIFIER_FIXUP_3893.z = _RESERVED_IDENTIFIER_FIXUP_3008.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3021 = _RESERVED_IDENTIFIER_FIXUP_3893.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3899 = _RESERVED_IDENTIFIER_FIXUP_3893;
    _RESERVED_IDENTIFIER_FIXUP_3899.x = _RESERVED_IDENTIFIER_FIXUP_3021.x;
    _RESERVED_IDENTIFIER_FIXUP_3899.y = _RESERVED_IDENTIFIER_FIXUP_3021.y;
    _RESERVED_IDENTIFIER_FIXUP_3899.z = _RESERVED_IDENTIFIER_FIXUP_3021.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3899.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1065 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1074;
    if (_RESERVED_IDENTIFIER_FIXUP_1065)
    {
        _RESERVED_IDENTIFIER_FIXUP_1074 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1074 = _RESERVED_IDENTIFIER_FIXUP_1065;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1074)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1111 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3485.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1138 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3080;
    if (_RESERVED_IDENTIFIER_FIXUP_1111 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3080 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1111), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1138);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3080 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1138);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3080;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2948);
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
    vec2 param_3 = v4.wz;
    r4 = hdTex4(param_3);
    r4.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r4.w = (-r4.w) + 1.0;
    r1 *= r4.xxxx;
    r0 = (r0 * r4.wwww) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB161 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB161.x;
        r1.y = hdB161.y;
        vec2 hdB182 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB182.x;
        r2.y = hdB182.y;
        vec2 hdB193 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB193.x;
        r3.y = hdB193.y;
        vec2 hdB204 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB204.x;
        r4.y = hdB204.y;
        vec2 hdB215 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB215.x;
        r5.y = hdB215.y;
        vec2 hdB226 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB226.x;
        r6.y = hdB226.y;
        vec2 hdB237 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB237.x;
        r7.y = hdB237.y;
        vec2 hdB248 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB248.x;
        r8.y = hdB248.y;
        vec4 hdB253 = r1;
        vec2 hdB259 = hdB253.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB259.x;
        r1.y = hdB259.y;
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
            vec2 hdB446 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB446.x;
            r1.z = hdB446.y;
            vec2 hdB456 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB456.x;
            r2.y = hdB456.y;
            vec2 hdB466 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB466.x;
            r3.y = hdB466.y;
            vec2 hdB476 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB476.x;
            r4.y = hdB476.y;
            vec2 hdB486 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB486.x;
            r5.y = hdB486.y;
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
                vec2 hdB602 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB602.x;
                r1.z = hdB602.y;
                vec2 hdB612 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB612.x;
                r2.y = hdB612.y;
                vec2 hdB622 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB622.x;
                r3.y = hdB622.y;
                vec2 hdB632 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB632.x;
                r4.y = hdB632.y;
                vec2 hdB642 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB642.x;
                r5.y = hdB642.y;
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
                vec2 hdB750 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB750.x;
                r3.y = hdB750.y;
                vec2 hdB760 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB760.x;
                r4.y = hdB760.y;
                vec2 hdB770 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB770.x;
                r5.y = hdB770.y;
                vec2 hdB780 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB780.x;
                r6.y = hdB780.y;
                vec2 hdB790 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB790.x;
                r7.y = hdB790.y;
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
    vec4 hdB920 = r0;
    vec3 hdB924 = hdB920.xyz * r1.yyy;
    r0.x = hdB924.x;
    r0.y = hdB924.y;
    r0.z = hdB924.z;
    vec4 hdB931 = r0;
    vec3 hdB935 = hdB931.xyz * v0.xyz;
    r0.x = hdB935.x;
    r0.y = hdB935.y;
    r0.z = hdB935.z;
    vec4 hdB942 = r0;
    vec4 hdB944 = r0;
    vec3 hdB946 = hdB942.xyz + hdB944.xyz;
    r0.x = hdB946.x;
    r0.y = hdB946.y;
    r0.z = hdB946.z;
    vec3 hdB957 = r0.www * v1.xyz;
    r1.y = hdB957.x;
    r1.z = hdB957.y;
    r1.w = hdB957.z;
    vec4 hdB969 = r0;
    vec3 hdB971 = (r1.yzw * r1.xxx) + hdB969.xyz;
    r0.x = hdB971.x;
    r0.y = hdB971.y;
    r0.z = hdB971.z;
    vec4 hdB978 = r0;
    vec3 hdB985 = hdB978.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB985.x;
    r0.y = hdB985.y;
    r0.z = hdB985.z;
    vec3 hdB1000 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1000.x;
    oC0.y = hdB1000.y;
    oC0.z = hdB1000.z;
    oC0.w = 1.0;
    bool hdB1013 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1021;
    if (hdB1013)
    {
        hdB1021 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1021 = hdB1013;
    }
    if (hdB1021)
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
    bool _3422 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3432;
    if (_3422)
    {
        _3432 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3432 = _3422;
    }
    if (_3432)
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
        bool _3457 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3472;
        if (!_3457)
        {
            _3472 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3472 = _3457;
        }
        if (_3472)
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
