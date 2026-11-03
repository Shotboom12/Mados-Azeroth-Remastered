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
float _RESERVED_IDENTIFIER_FIXUP_3786;
vec4 _RESERVED_IDENTIFIER_FIXUP_3787;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1186 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1190 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1194 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1198 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1202 = hdTex4(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_1206 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1202.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3027 = _RESERVED_IDENTIFIER_FIXUP_1202;
    _RESERVED_IDENTIFIER_FIXUP_3027.w = _RESERVED_IDENTIFIER_FIXUP_1206;
    float _RESERVED_IDENTIFIER_FIXUP_1211 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1206;
    _RESERVED_IDENTIFIER_FIXUP_3027.w = _RESERVED_IDENTIFIER_FIXUP_1211;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1216 = _RESERVED_IDENTIFIER_FIXUP_1190 * _RESERVED_IDENTIFIER_FIXUP_3027.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1234 = (_RESERVED_IDENTIFIER_FIXUP_1198 * _RESERVED_IDENTIFIER_FIXUP_3027.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1194 * _RESERVED_IDENTIFIER_FIXUP_3027.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1186 * _RESERVED_IDENTIFIER_FIXUP_3027.wwww) + _RESERVED_IDENTIFIER_FIXUP_1216));
    float _RESERVED_IDENTIFIER_FIXUP_1241 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3034 = _RESERVED_IDENTIFIER_FIXUP_1216;
    _RESERVED_IDENTIFIER_FIXUP_3034.x = _RESERVED_IDENTIFIER_FIXUP_1241;
    float _RESERVED_IDENTIFIER_FIXUP_1247 = clamp((_RESERVED_IDENTIFIER_FIXUP_1241 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3034.x = _RESERVED_IDENTIFIER_FIXUP_1247;
    float _RESERVED_IDENTIFIER_FIXUP_1253 = ((-_RESERVED_IDENTIFIER_FIXUP_1247) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3034.x = _RESERVED_IDENTIFIER_FIXUP_1253;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3788;
    if (_RESERVED_IDENTIFIER_FIXUP_1253 != (-_RESERVED_IDENTIFIER_FIXUP_1253))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1265 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1265.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1265.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1271 = hdLod5(param_4, param_5);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1275 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3246 = _RESERVED_IDENTIFIER_FIXUP_1271;
        _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1275.x;
        _RESERVED_IDENTIFIER_FIXUP_3246.z = _RESERVED_IDENTIFIER_FIXUP_1275.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1285 = _RESERVED_IDENTIFIER_FIXUP_3246.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3250;
        _RESERVED_IDENTIFIER_FIXUP_3250.x = _RESERVED_IDENTIFIER_FIXUP_1285.x;
        _RESERVED_IDENTIFIER_FIXUP_3250.y = _RESERVED_IDENTIFIER_FIXUP_1285.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1292 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_1292.y;
        _RESERVED_IDENTIFIER_FIXUP_3250.w = _RESERVED_IDENTIFIER_FIXUP_1296;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3250.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1296;
        float _RESERVED_IDENTIFIER_FIXUP_1307 = _RESERVED_IDENTIFIER_FIXUP_1271.x + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1307;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1314 = _RESERVED_IDENTIFIER_FIXUP_3246.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3263;
        _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_1314.x;
        _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_1314.y;
        _RESERVED_IDENTIFIER_FIXUP_3263.w = _RESERVED_IDENTIFIER_FIXUP_1296;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3263.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1296;
        float _RESERVED_IDENTIFIER_FIXUP_1336 = _RESERVED_IDENTIFIER_FIXUP_1307 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1336;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1343 = _RESERVED_IDENTIFIER_FIXUP_3246.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3276;
        _RESERVED_IDENTIFIER_FIXUP_3276.x = _RESERVED_IDENTIFIER_FIXUP_1343.x;
        _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1343.y;
        _RESERVED_IDENTIFIER_FIXUP_3276.w = _RESERVED_IDENTIFIER_FIXUP_1296;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3276.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1296;
        float _RESERVED_IDENTIFIER_FIXUP_1365 = _RESERVED_IDENTIFIER_FIXUP_1336 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1365;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1372 = _RESERVED_IDENTIFIER_FIXUP_3246.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3289;
        _RESERVED_IDENTIFIER_FIXUP_3289.x = _RESERVED_IDENTIFIER_FIXUP_1372.x;
        _RESERVED_IDENTIFIER_FIXUP_3289.y = _RESERVED_IDENTIFIER_FIXUP_1372.y;
        _RESERVED_IDENTIFIER_FIXUP_3289.w = _RESERVED_IDENTIFIER_FIXUP_1296;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3289.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1296;
        float _RESERVED_IDENTIFIER_FIXUP_1394 = _RESERVED_IDENTIFIER_FIXUP_1365 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1394;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1401 = _RESERVED_IDENTIFIER_FIXUP_3246.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3302;
        _RESERVED_IDENTIFIER_FIXUP_3302.x = _RESERVED_IDENTIFIER_FIXUP_1401.x;
        _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_1401.y;
        _RESERVED_IDENTIFIER_FIXUP_3302.w = _RESERVED_IDENTIFIER_FIXUP_1296;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3302.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1296;
        float _RESERVED_IDENTIFIER_FIXUP_1423 = _RESERVED_IDENTIFIER_FIXUP_1394 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1423;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1430 = _RESERVED_IDENTIFIER_FIXUP_3246.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3315;
        _RESERVED_IDENTIFIER_FIXUP_3315.x = _RESERVED_IDENTIFIER_FIXUP_1430.x;
        _RESERVED_IDENTIFIER_FIXUP_3315.y = _RESERVED_IDENTIFIER_FIXUP_1430.y;
        _RESERVED_IDENTIFIER_FIXUP_3315.w = _RESERVED_IDENTIFIER_FIXUP_1296;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3315.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1296;
        float _RESERVED_IDENTIFIER_FIXUP_1452 = _RESERVED_IDENTIFIER_FIXUP_1423 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1452;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1459 = _RESERVED_IDENTIFIER_FIXUP_3246.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3328;
        _RESERVED_IDENTIFIER_FIXUP_3328.x = _RESERVED_IDENTIFIER_FIXUP_1459.x;
        _RESERVED_IDENTIFIER_FIXUP_3328.y = _RESERVED_IDENTIFIER_FIXUP_1459.y;
        _RESERVED_IDENTIFIER_FIXUP_3328.w = _RESERVED_IDENTIFIER_FIXUP_1296;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3328.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1296;
        float _RESERVED_IDENTIFIER_FIXUP_1481 = _RESERVED_IDENTIFIER_FIXUP_1452 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1481;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1488 = _RESERVED_IDENTIFIER_FIXUP_3246.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3341;
        _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_1488.x;
        _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_1488.y;
        _RESERVED_IDENTIFIER_FIXUP_3341.w = _RESERVED_IDENTIFIER_FIXUP_1296;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3341.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1296;
        float _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_1481 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1510;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1510 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3788 = _RESERVED_IDENTIFIER_FIXUP_3246;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1523 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1523;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3789;
        if (_RESERVED_IDENTIFIER_FIXUP_1523 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1532 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1542 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_1542.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3186 = _RESERVED_IDENTIFIER_FIXUP_3034;
            _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_1544;
            _RESERVED_IDENTIFIER_FIXUP_3186.z = _RESERVED_IDENTIFIER_FIXUP_1542.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1552 = _RESERVED_IDENTIFIER_FIXUP_3186.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3190;
            _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1552.x;
            _RESERVED_IDENTIFIER_FIXUP_3190.y = _RESERVED_IDENTIFIER_FIXUP_1552.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1559 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1563 = _RESERVED_IDENTIFIER_FIXUP_1559.y;
            _RESERVED_IDENTIFIER_FIXUP_3190.w = _RESERVED_IDENTIFIER_FIXUP_1563;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1532.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1532.w;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3190.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1563;
            float _RESERVED_IDENTIFIER_FIXUP_1574 = hdLod6(param_22, param_23).x + hdLod6(param_24, param_25).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3811 = vec4(_RESERVED_IDENTIFIER_FIXUP_1253, _RESERVED_IDENTIFIER_FIXUP_1544, _RESERVED_IDENTIFIER_FIXUP_1542.y, _RESERVED_IDENTIFIER_FIXUP_1574);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_3811.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3203;
            _RESERVED_IDENTIFIER_FIXUP_3203.x = _RESERVED_IDENTIFIER_FIXUP_1581.x;
            _RESERVED_IDENTIFIER_FIXUP_3203.y = _RESERVED_IDENTIFIER_FIXUP_1581.y;
            _RESERVED_IDENTIFIER_FIXUP_3203.w = _RESERVED_IDENTIFIER_FIXUP_1563;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3203.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1563;
            float _RESERVED_IDENTIFIER_FIXUP_1603 = _RESERVED_IDENTIFIER_FIXUP_1574 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_3811.w = _RESERVED_IDENTIFIER_FIXUP_1603;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1610 = _RESERVED_IDENTIFIER_FIXUP_3811.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3216;
            _RESERVED_IDENTIFIER_FIXUP_3216.x = _RESERVED_IDENTIFIER_FIXUP_1610.x;
            _RESERVED_IDENTIFIER_FIXUP_3216.y = _RESERVED_IDENTIFIER_FIXUP_1610.y;
            _RESERVED_IDENTIFIER_FIXUP_3216.w = _RESERVED_IDENTIFIER_FIXUP_1563;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3216.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1563;
            float _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_1603 + hdLod6(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_3811.w = _RESERVED_IDENTIFIER_FIXUP_1632;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1639 = _RESERVED_IDENTIFIER_FIXUP_3811.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3229;
            _RESERVED_IDENTIFIER_FIXUP_3229.x = _RESERVED_IDENTIFIER_FIXUP_1639.x;
            _RESERVED_IDENTIFIER_FIXUP_3229.y = _RESERVED_IDENTIFIER_FIXUP_1639.y;
            _RESERVED_IDENTIFIER_FIXUP_3229.w = _RESERVED_IDENTIFIER_FIXUP_1563;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3229.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1563;
            float _RESERVED_IDENTIFIER_FIXUP_1661 = _RESERVED_IDENTIFIER_FIXUP_1632 + hdLod6(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_3811.y = _RESERVED_IDENTIFIER_FIXUP_1661;
            _RESERVED_IDENTIFIER_FIXUP_3811.x = _RESERVED_IDENTIFIER_FIXUP_1661 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_3811;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1674 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3051 = _RESERVED_IDENTIFIER_FIXUP_3034;
            _RESERVED_IDENTIFIER_FIXUP_3051.y = _RESERVED_IDENTIFIER_FIXUP_1674;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3790;
            if (_RESERVED_IDENTIFIER_FIXUP_1674 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1683 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1693 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1695 = _RESERVED_IDENTIFIER_FIXUP_1693.x;
                _RESERVED_IDENTIFIER_FIXUP_3051.y = _RESERVED_IDENTIFIER_FIXUP_1695;
                _RESERVED_IDENTIFIER_FIXUP_3051.z = _RESERVED_IDENTIFIER_FIXUP_1693.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1703 = _RESERVED_IDENTIFIER_FIXUP_3051.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3130;
                _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1703.x;
                _RESERVED_IDENTIFIER_FIXUP_3130.y = _RESERVED_IDENTIFIER_FIXUP_1703.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1710 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1714 = _RESERVED_IDENTIFIER_FIXUP_1710.y;
                _RESERVED_IDENTIFIER_FIXUP_3130.w = _RESERVED_IDENTIFIER_FIXUP_1714;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1683.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1683.w;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3130.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1714;
                float _RESERVED_IDENTIFIER_FIXUP_1725 = hdLod7(param_32, param_33).x + hdLod7(param_34, param_35).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3810 = vec4(_RESERVED_IDENTIFIER_FIXUP_1253, _RESERVED_IDENTIFIER_FIXUP_1695, _RESERVED_IDENTIFIER_FIXUP_1693.y, _RESERVED_IDENTIFIER_FIXUP_1725);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1732 = _RESERVED_IDENTIFIER_FIXUP_3810.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3143;
                _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1732.x;
                _RESERVED_IDENTIFIER_FIXUP_3143.y = _RESERVED_IDENTIFIER_FIXUP_1732.y;
                _RESERVED_IDENTIFIER_FIXUP_3143.w = _RESERVED_IDENTIFIER_FIXUP_1714;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3143.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1714;
                float _RESERVED_IDENTIFIER_FIXUP_1754 = _RESERVED_IDENTIFIER_FIXUP_1725 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_3810.w = _RESERVED_IDENTIFIER_FIXUP_1754;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1761 = _RESERVED_IDENTIFIER_FIXUP_3810.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3156;
                _RESERVED_IDENTIFIER_FIXUP_3156.x = _RESERVED_IDENTIFIER_FIXUP_1761.x;
                _RESERVED_IDENTIFIER_FIXUP_3156.y = _RESERVED_IDENTIFIER_FIXUP_1761.y;
                _RESERVED_IDENTIFIER_FIXUP_3156.w = _RESERVED_IDENTIFIER_FIXUP_1714;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3156.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1714;
                float _RESERVED_IDENTIFIER_FIXUP_1783 = _RESERVED_IDENTIFIER_FIXUP_1754 + hdLod7(param_38, param_39).x;
                _RESERVED_IDENTIFIER_FIXUP_3810.w = _RESERVED_IDENTIFIER_FIXUP_1783;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1790 = _RESERVED_IDENTIFIER_FIXUP_3810.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3169;
                _RESERVED_IDENTIFIER_FIXUP_3169.x = _RESERVED_IDENTIFIER_FIXUP_1790.x;
                _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_1790.y;
                _RESERVED_IDENTIFIER_FIXUP_3169.w = _RESERVED_IDENTIFIER_FIXUP_1714;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3169.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1714;
                float _RESERVED_IDENTIFIER_FIXUP_1812 = _RESERVED_IDENTIFIER_FIXUP_1783 + hdLod7(param_40, param_41).x;
                _RESERVED_IDENTIFIER_FIXUP_3810.y = _RESERVED_IDENTIFIER_FIXUP_1812;
                _RESERVED_IDENTIFIER_FIXUP_3810.x = _RESERVED_IDENTIFIER_FIXUP_1812 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3790 = _RESERVED_IDENTIFIER_FIXUP_3810;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1828 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1832 = _RESERVED_IDENTIFIER_FIXUP_1828.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1843 = vec4(_RESERVED_IDENTIFIER_FIXUP_1828.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1832).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3807 = vec4(_RESERVED_IDENTIFIER_FIXUP_1843 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1211);
                _RESERVED_IDENTIFIER_FIXUP_3807.w = _RESERVED_IDENTIFIER_FIXUP_1832;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1880 = _RESERVED_IDENTIFIER_FIXUP_1843 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3084 = _RESERVED_IDENTIFIER_FIXUP_3807;
                _RESERVED_IDENTIFIER_FIXUP_3084.x = _RESERVED_IDENTIFIER_FIXUP_1880.x;
                _RESERVED_IDENTIFIER_FIXUP_3084.y = _RESERVED_IDENTIFIER_FIXUP_1880.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1902 = _RESERVED_IDENTIFIER_FIXUP_1843 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3093 = _RESERVED_IDENTIFIER_FIXUP_3084;
                _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_1902.x;
                _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_1902.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1924 = _RESERVED_IDENTIFIER_FIXUP_1843 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3102 = _RESERVED_IDENTIFIER_FIXUP_3093;
                _RESERVED_IDENTIFIER_FIXUP_3102.x = _RESERVED_IDENTIFIER_FIXUP_1924.x;
                _RESERVED_IDENTIFIER_FIXUP_3102.y = _RESERVED_IDENTIFIER_FIXUP_1924.y;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_1843;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1832;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3807.xy;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1832;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3084.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1832;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3093.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1832;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3102.xy;
                float param_51 = _RESERVED_IDENTIFIER_FIXUP_1832;
                float _RESERVED_IDENTIFIER_FIXUP_1939 = (((hdLod8(param_42, param_43).x + hdLod8(param_44, param_45).x) + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + hdLod8(param_50, param_51).x;
                float _RESERVED_IDENTIFIER_FIXUP_1953 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1958 = (_RESERVED_IDENTIFIER_FIXUP_1939 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3790 = vec4((_RESERVED_IDENTIFIER_FIXUP_1953 * _RESERVED_IDENTIFIER_FIXUP_1958) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1953, _RESERVED_IDENTIFIER_FIXUP_1958, _RESERVED_IDENTIFIER_FIXUP_1939);
            }
            _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_3790;
        }
        _RESERVED_IDENTIFIER_FIXUP_3788 = _RESERVED_IDENTIFIER_FIXUP_3789;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3360 = _RESERVED_IDENTIFIER_FIXUP_3788;
    _RESERVED_IDENTIFIER_FIXUP_3360.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1986 = _RESERVED_IDENTIFIER_FIXUP_1234.xyz * _RESERVED_IDENTIFIER_FIXUP_3360.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3362 = _RESERVED_IDENTIFIER_FIXUP_1234;
    _RESERVED_IDENTIFIER_FIXUP_3362.x = _RESERVED_IDENTIFIER_FIXUP_1986.x;
    _RESERVED_IDENTIFIER_FIXUP_3362.y = _RESERVED_IDENTIFIER_FIXUP_1986.y;
    _RESERVED_IDENTIFIER_FIXUP_3362.z = _RESERVED_IDENTIFIER_FIXUP_1986.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1997 = _RESERVED_IDENTIFIER_FIXUP_3362.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3786).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3368 = _RESERVED_IDENTIFIER_FIXUP_3362;
    _RESERVED_IDENTIFIER_FIXUP_3368.x = _RESERVED_IDENTIFIER_FIXUP_1997.x;
    _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_1997.y;
    _RESERVED_IDENTIFIER_FIXUP_3368.z = _RESERVED_IDENTIFIER_FIXUP_1997.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2008 = _RESERVED_IDENTIFIER_FIXUP_3368.xyz + _RESERVED_IDENTIFIER_FIXUP_3368.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_3368;
    _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_2008.x;
    _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_2008.y;
    _RESERVED_IDENTIFIER_FIXUP_3374.z = _RESERVED_IDENTIFIER_FIXUP_2008.z;
    _RESERVED_IDENTIFIER_FIXUP_3360.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3360.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3360.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2033 = (_RESERVED_IDENTIFIER_FIXUP_3360.yzw * _RESERVED_IDENTIFIER_FIXUP_3360.xxx) + _RESERVED_IDENTIFIER_FIXUP_3374.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3386 = _RESERVED_IDENTIFIER_FIXUP_3374;
    _RESERVED_IDENTIFIER_FIXUP_3386.x = _RESERVED_IDENTIFIER_FIXUP_2033.x;
    _RESERVED_IDENTIFIER_FIXUP_3386.y = _RESERVED_IDENTIFIER_FIXUP_2033.y;
    _RESERVED_IDENTIFIER_FIXUP_3386.z = _RESERVED_IDENTIFIER_FIXUP_2033.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2046 = _RESERVED_IDENTIFIER_FIXUP_3386.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3392 = _RESERVED_IDENTIFIER_FIXUP_3386;
    _RESERVED_IDENTIFIER_FIXUP_3392.x = _RESERVED_IDENTIFIER_FIXUP_2046.x;
    _RESERVED_IDENTIFIER_FIXUP_3392.y = _RESERVED_IDENTIFIER_FIXUP_2046.y;
    _RESERVED_IDENTIFIER_FIXUP_3392.z = _RESERVED_IDENTIFIER_FIXUP_2046.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2101 = OptTex0( texcoord0.xyz);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2105 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2109 = hdTex2(param_53);
    vec2 param_54 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2113 = hdTex3(param_54);
    vec2 param_55 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2117 = hdTex4(param_55);
    float _RESERVED_IDENTIFIER_FIXUP_2121 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2117.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3406 = _RESERVED_IDENTIFIER_FIXUP_2117;
    _RESERVED_IDENTIFIER_FIXUP_3406.w = _RESERVED_IDENTIFIER_FIXUP_2121;
    float _RESERVED_IDENTIFIER_FIXUP_2126 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2121;
    _RESERVED_IDENTIFIER_FIXUP_3406.w = _RESERVED_IDENTIFIER_FIXUP_2126;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2131 = _RESERVED_IDENTIFIER_FIXUP_2105 * _RESERVED_IDENTIFIER_FIXUP_3406.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2149 = (_RESERVED_IDENTIFIER_FIXUP_2113 * _RESERVED_IDENTIFIER_FIXUP_3406.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_2109 * _RESERVED_IDENTIFIER_FIXUP_3406.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2101 * _RESERVED_IDENTIFIER_FIXUP_3406.wwww) + _RESERVED_IDENTIFIER_FIXUP_2131));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3413 = _RESERVED_IDENTIFIER_FIXUP_2131;
    _RESERVED_IDENTIFIER_FIXUP_3413.x = _RESERVED_IDENTIFIER_FIXUP_1241;
    float _RESERVED_IDENTIFIER_FIXUP_2162 = clamp((_RESERVED_IDENTIFIER_FIXUP_1241 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3413.x = _RESERVED_IDENTIFIER_FIXUP_2162;
    float _RESERVED_IDENTIFIER_FIXUP_2168 = ((-_RESERVED_IDENTIFIER_FIXUP_2162) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3413.x = _RESERVED_IDENTIFIER_FIXUP_2168;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3797;
    if (_RESERVED_IDENTIFIER_FIXUP_2168 != (-_RESERVED_IDENTIFIER_FIXUP_2168))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2180 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2180.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2180.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2186 = hdLod5(param_56, param_57);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2190 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3625 = _RESERVED_IDENTIFIER_FIXUP_2186;
        _RESERVED_IDENTIFIER_FIXUP_3625.y = _RESERVED_IDENTIFIER_FIXUP_2190.x;
        _RESERVED_IDENTIFIER_FIXUP_3625.z = _RESERVED_IDENTIFIER_FIXUP_2190.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2200 = _RESERVED_IDENTIFIER_FIXUP_3625.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3629;
        _RESERVED_IDENTIFIER_FIXUP_3629.x = _RESERVED_IDENTIFIER_FIXUP_2200.x;
        _RESERVED_IDENTIFIER_FIXUP_3629.y = _RESERVED_IDENTIFIER_FIXUP_2200.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2207 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2211 = _RESERVED_IDENTIFIER_FIXUP_2207.y;
        _RESERVED_IDENTIFIER_FIXUP_3629.w = _RESERVED_IDENTIFIER_FIXUP_2211;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3629.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2211;
        float _RESERVED_IDENTIFIER_FIXUP_2222 = _RESERVED_IDENTIFIER_FIXUP_2186.x + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2222;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2229 = _RESERVED_IDENTIFIER_FIXUP_3625.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3642;
        _RESERVED_IDENTIFIER_FIXUP_3642.x = _RESERVED_IDENTIFIER_FIXUP_2229.x;
        _RESERVED_IDENTIFIER_FIXUP_3642.y = _RESERVED_IDENTIFIER_FIXUP_2229.y;
        _RESERVED_IDENTIFIER_FIXUP_3642.w = _RESERVED_IDENTIFIER_FIXUP_2211;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3642.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2211;
        float _RESERVED_IDENTIFIER_FIXUP_2251 = _RESERVED_IDENTIFIER_FIXUP_2222 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2251;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2258 = _RESERVED_IDENTIFIER_FIXUP_3625.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3655;
        _RESERVED_IDENTIFIER_FIXUP_3655.x = _RESERVED_IDENTIFIER_FIXUP_2258.x;
        _RESERVED_IDENTIFIER_FIXUP_3655.y = _RESERVED_IDENTIFIER_FIXUP_2258.y;
        _RESERVED_IDENTIFIER_FIXUP_3655.w = _RESERVED_IDENTIFIER_FIXUP_2211;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3655.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2211;
        float _RESERVED_IDENTIFIER_FIXUP_2280 = _RESERVED_IDENTIFIER_FIXUP_2251 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2280;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2287 = _RESERVED_IDENTIFIER_FIXUP_3625.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3668;
        _RESERVED_IDENTIFIER_FIXUP_3668.x = _RESERVED_IDENTIFIER_FIXUP_2287.x;
        _RESERVED_IDENTIFIER_FIXUP_3668.y = _RESERVED_IDENTIFIER_FIXUP_2287.y;
        _RESERVED_IDENTIFIER_FIXUP_3668.w = _RESERVED_IDENTIFIER_FIXUP_2211;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3668.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2211;
        float _RESERVED_IDENTIFIER_FIXUP_2309 = _RESERVED_IDENTIFIER_FIXUP_2280 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2309;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2316 = _RESERVED_IDENTIFIER_FIXUP_3625.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
        _RESERVED_IDENTIFIER_FIXUP_3681.x = _RESERVED_IDENTIFIER_FIXUP_2316.x;
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2316.y;
        _RESERVED_IDENTIFIER_FIXUP_3681.w = _RESERVED_IDENTIFIER_FIXUP_2211;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3681.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2211;
        float _RESERVED_IDENTIFIER_FIXUP_2338 = _RESERVED_IDENTIFIER_FIXUP_2309 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2338;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2345 = _RESERVED_IDENTIFIER_FIXUP_3625.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3694;
        _RESERVED_IDENTIFIER_FIXUP_3694.x = _RESERVED_IDENTIFIER_FIXUP_2345.x;
        _RESERVED_IDENTIFIER_FIXUP_3694.y = _RESERVED_IDENTIFIER_FIXUP_2345.y;
        _RESERVED_IDENTIFIER_FIXUP_3694.w = _RESERVED_IDENTIFIER_FIXUP_2211;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3694.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2211;
        float _RESERVED_IDENTIFIER_FIXUP_2367 = _RESERVED_IDENTIFIER_FIXUP_2338 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2367;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2374 = _RESERVED_IDENTIFIER_FIXUP_3625.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3707;
        _RESERVED_IDENTIFIER_FIXUP_3707.x = _RESERVED_IDENTIFIER_FIXUP_2374.x;
        _RESERVED_IDENTIFIER_FIXUP_3707.y = _RESERVED_IDENTIFIER_FIXUP_2374.y;
        _RESERVED_IDENTIFIER_FIXUP_3707.w = _RESERVED_IDENTIFIER_FIXUP_2211;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3707.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2211;
        float _RESERVED_IDENTIFIER_FIXUP_2396 = _RESERVED_IDENTIFIER_FIXUP_2367 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2396;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2403 = _RESERVED_IDENTIFIER_FIXUP_3625.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3720;
        _RESERVED_IDENTIFIER_FIXUP_3720.x = _RESERVED_IDENTIFIER_FIXUP_2403.x;
        _RESERVED_IDENTIFIER_FIXUP_3720.y = _RESERVED_IDENTIFIER_FIXUP_2403.y;
        _RESERVED_IDENTIFIER_FIXUP_3720.w = _RESERVED_IDENTIFIER_FIXUP_2211;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3720.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2211;
        float _RESERVED_IDENTIFIER_FIXUP_2425 = _RESERVED_IDENTIFIER_FIXUP_2396 + hdLod5(param_72, param_73).x;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2425;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2425 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3797 = _RESERVED_IDENTIFIER_FIXUP_3625;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2438 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3413.y = _RESERVED_IDENTIFIER_FIXUP_2438;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3798;
        if (_RESERVED_IDENTIFIER_FIXUP_2438 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2447 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2457 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2459 = _RESERVED_IDENTIFIER_FIXUP_2457.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3565 = _RESERVED_IDENTIFIER_FIXUP_3413;
            _RESERVED_IDENTIFIER_FIXUP_3565.y = _RESERVED_IDENTIFIER_FIXUP_2459;
            _RESERVED_IDENTIFIER_FIXUP_3565.z = _RESERVED_IDENTIFIER_FIXUP_2457.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2467 = _RESERVED_IDENTIFIER_FIXUP_3565.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3569;
            _RESERVED_IDENTIFIER_FIXUP_3569.x = _RESERVED_IDENTIFIER_FIXUP_2467.x;
            _RESERVED_IDENTIFIER_FIXUP_3569.y = _RESERVED_IDENTIFIER_FIXUP_2467.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2474 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2478 = _RESERVED_IDENTIFIER_FIXUP_2474.y;
            _RESERVED_IDENTIFIER_FIXUP_3569.w = _RESERVED_IDENTIFIER_FIXUP_2478;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2447.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2447.w;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3569.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2478;
            float _RESERVED_IDENTIFIER_FIXUP_2489 = hdLod6(param_74, param_75).x + hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3818 = vec4(_RESERVED_IDENTIFIER_FIXUP_2168, _RESERVED_IDENTIFIER_FIXUP_2459, _RESERVED_IDENTIFIER_FIXUP_2457.y, _RESERVED_IDENTIFIER_FIXUP_2489);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2496 = _RESERVED_IDENTIFIER_FIXUP_3818.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3582;
            _RESERVED_IDENTIFIER_FIXUP_3582.x = _RESERVED_IDENTIFIER_FIXUP_2496.x;
            _RESERVED_IDENTIFIER_FIXUP_3582.y = _RESERVED_IDENTIFIER_FIXUP_2496.y;
            _RESERVED_IDENTIFIER_FIXUP_3582.w = _RESERVED_IDENTIFIER_FIXUP_2478;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3582.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2478;
            float _RESERVED_IDENTIFIER_FIXUP_2518 = _RESERVED_IDENTIFIER_FIXUP_2489 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3818.w = _RESERVED_IDENTIFIER_FIXUP_2518;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2525 = _RESERVED_IDENTIFIER_FIXUP_3818.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3595;
            _RESERVED_IDENTIFIER_FIXUP_3595.x = _RESERVED_IDENTIFIER_FIXUP_2525.x;
            _RESERVED_IDENTIFIER_FIXUP_3595.y = _RESERVED_IDENTIFIER_FIXUP_2525.y;
            _RESERVED_IDENTIFIER_FIXUP_3595.w = _RESERVED_IDENTIFIER_FIXUP_2478;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3595.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2478;
            float _RESERVED_IDENTIFIER_FIXUP_2547 = _RESERVED_IDENTIFIER_FIXUP_2518 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3818.w = _RESERVED_IDENTIFIER_FIXUP_2547;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2554 = _RESERVED_IDENTIFIER_FIXUP_3818.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3608;
            _RESERVED_IDENTIFIER_FIXUP_3608.x = _RESERVED_IDENTIFIER_FIXUP_2554.x;
            _RESERVED_IDENTIFIER_FIXUP_3608.y = _RESERVED_IDENTIFIER_FIXUP_2554.y;
            _RESERVED_IDENTIFIER_FIXUP_3608.w = _RESERVED_IDENTIFIER_FIXUP_2478;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3608.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2478;
            float _RESERVED_IDENTIFIER_FIXUP_2576 = _RESERVED_IDENTIFIER_FIXUP_2547 + hdLod6(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3818.y = _RESERVED_IDENTIFIER_FIXUP_2576;
            _RESERVED_IDENTIFIER_FIXUP_3818.x = _RESERVED_IDENTIFIER_FIXUP_2576 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3798 = _RESERVED_IDENTIFIER_FIXUP_3818;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2589 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3430 = _RESERVED_IDENTIFIER_FIXUP_3413;
            _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_2589;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3799;
            if (_RESERVED_IDENTIFIER_FIXUP_2589 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2598 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2608 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2610 = _RESERVED_IDENTIFIER_FIXUP_2608.x;
                _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_2610;
                _RESERVED_IDENTIFIER_FIXUP_3430.z = _RESERVED_IDENTIFIER_FIXUP_2608.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2618 = _RESERVED_IDENTIFIER_FIXUP_3430.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3509;
                _RESERVED_IDENTIFIER_FIXUP_3509.x = _RESERVED_IDENTIFIER_FIXUP_2618.x;
                _RESERVED_IDENTIFIER_FIXUP_3509.y = _RESERVED_IDENTIFIER_FIXUP_2618.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2625 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2629 = _RESERVED_IDENTIFIER_FIXUP_2625.y;
                _RESERVED_IDENTIFIER_FIXUP_3509.w = _RESERVED_IDENTIFIER_FIXUP_2629;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2598.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2598.w;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3509.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2629;
                float _RESERVED_IDENTIFIER_FIXUP_2640 = hdLod7(param_84, param_85).x + hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3817 = vec4(_RESERVED_IDENTIFIER_FIXUP_2168, _RESERVED_IDENTIFIER_FIXUP_2610, _RESERVED_IDENTIFIER_FIXUP_2608.y, _RESERVED_IDENTIFIER_FIXUP_2640);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2647 = _RESERVED_IDENTIFIER_FIXUP_3817.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3522;
                _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2647.x;
                _RESERVED_IDENTIFIER_FIXUP_3522.y = _RESERVED_IDENTIFIER_FIXUP_2647.y;
                _RESERVED_IDENTIFIER_FIXUP_3522.w = _RESERVED_IDENTIFIER_FIXUP_2629;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3522.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2629;
                float _RESERVED_IDENTIFIER_FIXUP_2669 = _RESERVED_IDENTIFIER_FIXUP_2640 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3817.w = _RESERVED_IDENTIFIER_FIXUP_2669;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2676 = _RESERVED_IDENTIFIER_FIXUP_3817.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3535;
                _RESERVED_IDENTIFIER_FIXUP_3535.x = _RESERVED_IDENTIFIER_FIXUP_2676.x;
                _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_2676.y;
                _RESERVED_IDENTIFIER_FIXUP_3535.w = _RESERVED_IDENTIFIER_FIXUP_2629;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3535.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2629;
                float _RESERVED_IDENTIFIER_FIXUP_2698 = _RESERVED_IDENTIFIER_FIXUP_2669 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_3817.w = _RESERVED_IDENTIFIER_FIXUP_2698;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2705 = _RESERVED_IDENTIFIER_FIXUP_3817.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3548;
                _RESERVED_IDENTIFIER_FIXUP_3548.x = _RESERVED_IDENTIFIER_FIXUP_2705.x;
                _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_2705.y;
                _RESERVED_IDENTIFIER_FIXUP_3548.w = _RESERVED_IDENTIFIER_FIXUP_2629;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3548.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2629;
                float _RESERVED_IDENTIFIER_FIXUP_2727 = _RESERVED_IDENTIFIER_FIXUP_2698 + hdLod7(param_92, param_93).x;
                _RESERVED_IDENTIFIER_FIXUP_3817.y = _RESERVED_IDENTIFIER_FIXUP_2727;
                _RESERVED_IDENTIFIER_FIXUP_3817.x = _RESERVED_IDENTIFIER_FIXUP_2727 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_3817;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2743 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2747 = _RESERVED_IDENTIFIER_FIXUP_2743.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2758 = vec4(_RESERVED_IDENTIFIER_FIXUP_2743.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2747).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3814 = vec4(_RESERVED_IDENTIFIER_FIXUP_2758 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2126);
                _RESERVED_IDENTIFIER_FIXUP_3814.w = _RESERVED_IDENTIFIER_FIXUP_2747;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2795 = _RESERVED_IDENTIFIER_FIXUP_2758 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3463 = _RESERVED_IDENTIFIER_FIXUP_3814;
                _RESERVED_IDENTIFIER_FIXUP_3463.x = _RESERVED_IDENTIFIER_FIXUP_2795.x;
                _RESERVED_IDENTIFIER_FIXUP_3463.y = _RESERVED_IDENTIFIER_FIXUP_2795.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2817 = _RESERVED_IDENTIFIER_FIXUP_2758 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3472 = _RESERVED_IDENTIFIER_FIXUP_3463;
                _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_2817.x;
                _RESERVED_IDENTIFIER_FIXUP_3472.y = _RESERVED_IDENTIFIER_FIXUP_2817.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2839 = _RESERVED_IDENTIFIER_FIXUP_2758 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3481 = _RESERVED_IDENTIFIER_FIXUP_3472;
                _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2839.x;
                _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2839.y;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_2758;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2747;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3814.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2747;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3463.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2747;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3472.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2747;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3481.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_2747;
                float _RESERVED_IDENTIFIER_FIXUP_2854 = (((hdLod8(param_94, param_95).x + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x;
                float _RESERVED_IDENTIFIER_FIXUP_2868 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2873 = (_RESERVED_IDENTIFIER_FIXUP_2854 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3799 = vec4((_RESERVED_IDENTIFIER_FIXUP_2868 * _RESERVED_IDENTIFIER_FIXUP_2873) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2868, _RESERVED_IDENTIFIER_FIXUP_2873, _RESERVED_IDENTIFIER_FIXUP_2854);
            }
            _RESERVED_IDENTIFIER_FIXUP_3798 = _RESERVED_IDENTIFIER_FIXUP_3799;
        }
        _RESERVED_IDENTIFIER_FIXUP_3797 = _RESERVED_IDENTIFIER_FIXUP_3798;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2888 = (_RESERVED_IDENTIFIER_FIXUP_3797.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3737 = _RESERVED_IDENTIFIER_FIXUP_3797;
    _RESERVED_IDENTIFIER_FIXUP_3737.y = _RESERVED_IDENTIFIER_FIXUP_2888;
    _RESERVED_IDENTIFIER_FIXUP_3737.y = _RESERVED_IDENTIFIER_FIXUP_2888;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2901 = _RESERVED_IDENTIFIER_FIXUP_2149.xyz * _RESERVED_IDENTIFIER_FIXUP_3737.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3743 = _RESERVED_IDENTIFIER_FIXUP_2149;
    _RESERVED_IDENTIFIER_FIXUP_3743.x = _RESERVED_IDENTIFIER_FIXUP_2901.x;
    _RESERVED_IDENTIFIER_FIXUP_3743.y = _RESERVED_IDENTIFIER_FIXUP_2901.y;
    _RESERVED_IDENTIFIER_FIXUP_3743.z = _RESERVED_IDENTIFIER_FIXUP_2901.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2912 = _RESERVED_IDENTIFIER_FIXUP_3743.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3749 = _RESERVED_IDENTIFIER_FIXUP_3743;
    _RESERVED_IDENTIFIER_FIXUP_3749.x = _RESERVED_IDENTIFIER_FIXUP_2912.x;
    _RESERVED_IDENTIFIER_FIXUP_3749.y = _RESERVED_IDENTIFIER_FIXUP_2912.y;
    _RESERVED_IDENTIFIER_FIXUP_3749.z = _RESERVED_IDENTIFIER_FIXUP_2912.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2923 = _RESERVED_IDENTIFIER_FIXUP_3749.xyz + _RESERVED_IDENTIFIER_FIXUP_3749.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3755 = _RESERVED_IDENTIFIER_FIXUP_3749;
    _RESERVED_IDENTIFIER_FIXUP_3755.x = _RESERVED_IDENTIFIER_FIXUP_2923.x;
    _RESERVED_IDENTIFIER_FIXUP_3755.y = _RESERVED_IDENTIFIER_FIXUP_2923.y;
    _RESERVED_IDENTIFIER_FIXUP_3755.z = _RESERVED_IDENTIFIER_FIXUP_2923.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2934 = _RESERVED_IDENTIFIER_FIXUP_3755.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3737.y = _RESERVED_IDENTIFIER_FIXUP_2934.x;
    _RESERVED_IDENTIFIER_FIXUP_3737.z = _RESERVED_IDENTIFIER_FIXUP_2934.y;
    _RESERVED_IDENTIFIER_FIXUP_3737.w = _RESERVED_IDENTIFIER_FIXUP_2934.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2948 = (_RESERVED_IDENTIFIER_FIXUP_3737.yzw * _RESERVED_IDENTIFIER_FIXUP_3737.xxx) + _RESERVED_IDENTIFIER_FIXUP_3755.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3767 = _RESERVED_IDENTIFIER_FIXUP_3755;
    _RESERVED_IDENTIFIER_FIXUP_3767.x = _RESERVED_IDENTIFIER_FIXUP_2948.x;
    _RESERVED_IDENTIFIER_FIXUP_3767.y = _RESERVED_IDENTIFIER_FIXUP_2948.y;
    _RESERVED_IDENTIFIER_FIXUP_3767.z = _RESERVED_IDENTIFIER_FIXUP_2948.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2961 = _RESERVED_IDENTIFIER_FIXUP_3767.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3773 = _RESERVED_IDENTIFIER_FIXUP_3767;
    _RESERVED_IDENTIFIER_FIXUP_3773.x = _RESERVED_IDENTIFIER_FIXUP_2961.x;
    _RESERVED_IDENTIFIER_FIXUP_3773.y = _RESERVED_IDENTIFIER_FIXUP_2961.y;
    _RESERVED_IDENTIFIER_FIXUP_3773.z = _RESERVED_IDENTIFIER_FIXUP_2961.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3773.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1045 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1054;
    if (_RESERVED_IDENTIFIER_FIXUP_1045)
    {
        _RESERVED_IDENTIFIER_FIXUP_1054 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1054 = _RESERVED_IDENTIFIER_FIXUP_1045;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1054)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1091 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3392.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1118 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3020;
    if (_RESERVED_IDENTIFIER_FIXUP_1091 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3020 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1091), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1118);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3020 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1118);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3020;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2888);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
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
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
        vec2 hdB170 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB170.x;
        r1.z = hdB170.y;
        vec2 hdB192 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB192.x;
        r2.y = hdB192.y;
        vec2 hdB200 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB200.x;
        r2.w = hdB200.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.x += r2.x;
        vec2 hdB223 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB223.x;
        r2.y = hdB223.y;
        vec2 hdB230 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB230.x;
        r2.w = hdB230.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.x += r2.x;
        vec2 hdB253 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB253.x;
        r2.y = hdB253.y;
        vec2 hdB260 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB260.x;
        r2.w = hdB260.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.x += r2.x;
        vec2 hdB283 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB283.x;
        r2.y = hdB283.y;
        vec2 hdB290 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB290.x;
        r2.w = hdB290.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.x += r2.x;
        vec2 hdB313 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB313.x;
        r2.y = hdB313.y;
        vec2 hdB320 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB320.x;
        r2.w = hdB320.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r1.x += r2.x;
        vec2 hdB343 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB343.x;
        r2.y = hdB343.y;
        vec2 hdB350 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB350.x;
        r2.w = hdB350.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r1.x += r2.x;
        vec2 hdB373 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB373.x;
        r2.y = hdB373.y;
        vec2 hdB380 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB380.x;
        r2.w = hdB380.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod5(param_18, param_19);
        r1.x += r2.x;
        vec2 hdB403 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB403.x;
        r2.y = hdB403.y;
        vec2 hdB410 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB410.x;
        r2.w = hdB410.y;
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
            vec2 hdB460 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB460.x;
            r1.z = hdB460.y;
            vec2 hdB470 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB470.x;
            r3.y = hdB470.y;
            vec2 hdB477 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB477.x;
            r3.w = hdB477.y;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod6(param_24, param_25);
            r1.w = r2.x + r3.x;
            vec2 hdB499 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB499.x;
            r2.y = hdB499.y;
            vec2 hdB506 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB506.x;
            r2.w = hdB506.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r1.w += r2.x;
            vec2 hdB528 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB528.x;
            r2.y = hdB528.y;
            vec2 hdB535 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB535.x;
            r2.w = hdB535.y;
            vec2 param_28 = r2.xy;
            float param_29 = r2.w;
            r2 = hdLod6(param_28, param_29);
            r1.w += r2.x;
            vec2 hdB557 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB557.x;
            r2.y = hdB557.y;
            vec2 hdB564 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB564.x;
            r2.w = hdB564.y;
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
                vec2 hdB614 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB614.x;
                r1.z = hdB614.y;
                vec2 hdB624 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB624.x;
                r3.y = hdB624.y;
                vec2 hdB631 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB631.x;
                r3.w = hdB631.y;
                vec2 param_34 = r3.xy;
                float param_35 = r3.w;
                r3 = hdLod7(param_34, param_35);
                r1.w = r2.x + r3.x;
                vec2 hdB653 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB653.x;
                r2.y = hdB653.y;
                vec2 hdB660 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB660.x;
                r2.w = hdB660.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r1.w += r2.x;
                vec2 hdB682 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB682.x;
                r2.y = hdB682.y;
                vec2 hdB689 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB689.x;
                r2.w = hdB689.y;
                vec2 param_38 = r2.xy;
                float param_39 = r2.w;
                r2 = hdLod7(param_38, param_39);
                r1.w += r2.x;
                vec2 hdB711 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB711.x;
                r2.y = hdB711.y;
                vec2 hdB718 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB718.x;
                r2.w = hdB718.y;
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
                vec2 hdB750 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB750.x;
                r2.w = hdB750.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_42 = r2.xy;
                float param_43 = r2.w;
                r3 = hdLod8(param_42, param_43);
                vec2 hdB775 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB775.x;
                r4.y = hdB775.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r5 = hdLod8(param_44, param_45);
                r1.w = r3.x + r5.x;
                vec2 hdB803 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB803.x;
                r4.y = hdB803.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r1.w += r3.x;
                vec2 hdB825 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB825.x;
                r4.y = hdB825.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r3 = hdLod8(param_48, param_49);
                r1.w += r3.x;
                vec2 hdB847 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB847.x;
                r4.y = hdB847.y;
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
    vec4 hdB900 = r0;
    vec3 hdB904 = hdB900.xyz * r1.yyy;
    r0.x = hdB904.x;
    r0.y = hdB904.y;
    r0.z = hdB904.z;
    vec4 hdB911 = r0;
    vec3 hdB915 = hdB911.xyz * v0.xyz;
    r0.x = hdB915.x;
    r0.y = hdB915.y;
    r0.z = hdB915.z;
    vec4 hdB922 = r0;
    vec4 hdB924 = r0;
    vec3 hdB926 = hdB922.xyz + hdB924.xyz;
    r0.x = hdB926.x;
    r0.y = hdB926.y;
    r0.z = hdB926.z;
    vec3 hdB937 = r0.www * v1.xyz;
    r1.y = hdB937.x;
    r1.z = hdB937.y;
    r1.w = hdB937.z;
    vec4 hdB949 = r0;
    vec3 hdB951 = (r1.yzw * r1.xxx) + hdB949.xyz;
    r0.x = hdB951.x;
    r0.y = hdB951.y;
    r0.z = hdB951.z;
    vec4 hdB958 = r0;
    vec3 hdB965 = hdB958.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB965.x;
    r0.y = hdB965.y;
    r0.z = hdB965.z;
    vec3 hdB980 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB980.x;
    oC0.y = hdB980.y;
    oC0.z = hdB980.z;
    oC0.w = 1.0;
    bool hdB993 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1001;
    if (hdB993)
    {
        hdB1001 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1001 = hdB993;
    }
    if (hdB1001)
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
    bool _3487 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3497;
    if (_3487)
    {
        _3497 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3497 = _3487;
    }
    if (_3497)
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
        bool _3522 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3537;
        if (!_3522)
        {
            _3537 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3537 = _3522;
        }
        if (_3537)
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
