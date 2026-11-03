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
float _RESERVED_IDENTIFIER_FIXUP_3752;
vec4 _RESERVED_IDENTIFIER_FIXUP_3753;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1172 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1176 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1180 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184 = hdTex3(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_1188 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1184.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2993 = _RESERVED_IDENTIFIER_FIXUP_1184;
    _RESERVED_IDENTIFIER_FIXUP_2993.z = _RESERVED_IDENTIFIER_FIXUP_1188;
    _RESERVED_IDENTIFIER_FIXUP_2993.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1188;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_1176 * _RESERVED_IDENTIFIER_FIXUP_2993.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1210 = (_RESERVED_IDENTIFIER_FIXUP_1180 * _RESERVED_IDENTIFIER_FIXUP_2993.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1172 * _RESERVED_IDENTIFIER_FIXUP_2993.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1198);
    float _RESERVED_IDENTIFIER_FIXUP_1217 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3000 = _RESERVED_IDENTIFIER_FIXUP_1198;
    _RESERVED_IDENTIFIER_FIXUP_3000.x = _RESERVED_IDENTIFIER_FIXUP_1217;
    float _RESERVED_IDENTIFIER_FIXUP_1223 = clamp((_RESERVED_IDENTIFIER_FIXUP_1217 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3000.x = _RESERVED_IDENTIFIER_FIXUP_1223;
    float _RESERVED_IDENTIFIER_FIXUP_1229 = ((-_RESERVED_IDENTIFIER_FIXUP_1223) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3000.x = _RESERVED_IDENTIFIER_FIXUP_1229;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3754;
    if (_RESERVED_IDENTIFIER_FIXUP_1229 != (-_RESERVED_IDENTIFIER_FIXUP_1229))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1241 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1241.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1241.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1247 = hdLod5(param_4, param_5);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1251 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3212 = _RESERVED_IDENTIFIER_FIXUP_1247;
        _RESERVED_IDENTIFIER_FIXUP_3212.y = _RESERVED_IDENTIFIER_FIXUP_1251.x;
        _RESERVED_IDENTIFIER_FIXUP_3212.z = _RESERVED_IDENTIFIER_FIXUP_1251.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_3212.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3216;
        _RESERVED_IDENTIFIER_FIXUP_3216.x = _RESERVED_IDENTIFIER_FIXUP_1261.x;
        _RESERVED_IDENTIFIER_FIXUP_3216.y = _RESERVED_IDENTIFIER_FIXUP_1261.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1268 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_1268.y;
        _RESERVED_IDENTIFIER_FIXUP_3216.w = _RESERVED_IDENTIFIER_FIXUP_1272;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3216.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1272;
        float _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_1247.x + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1283;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1290 = _RESERVED_IDENTIFIER_FIXUP_3212.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3229;
        _RESERVED_IDENTIFIER_FIXUP_3229.x = _RESERVED_IDENTIFIER_FIXUP_1290.x;
        _RESERVED_IDENTIFIER_FIXUP_3229.y = _RESERVED_IDENTIFIER_FIXUP_1290.y;
        _RESERVED_IDENTIFIER_FIXUP_3229.w = _RESERVED_IDENTIFIER_FIXUP_1272;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3229.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1272;
        float _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1283 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1312;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_3212.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3242;
        _RESERVED_IDENTIFIER_FIXUP_3242.x = _RESERVED_IDENTIFIER_FIXUP_1319.x;
        _RESERVED_IDENTIFIER_FIXUP_3242.y = _RESERVED_IDENTIFIER_FIXUP_1319.y;
        _RESERVED_IDENTIFIER_FIXUP_3242.w = _RESERVED_IDENTIFIER_FIXUP_1272;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3242.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1272;
        float _RESERVED_IDENTIFIER_FIXUP_1341 = _RESERVED_IDENTIFIER_FIXUP_1312 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1341;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1348 = _RESERVED_IDENTIFIER_FIXUP_3212.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3255;
        _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_1348.x;
        _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_1348.y;
        _RESERVED_IDENTIFIER_FIXUP_3255.w = _RESERVED_IDENTIFIER_FIXUP_1272;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3255.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1272;
        float _RESERVED_IDENTIFIER_FIXUP_1370 = _RESERVED_IDENTIFIER_FIXUP_1341 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1370;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1377 = _RESERVED_IDENTIFIER_FIXUP_3212.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3268;
        _RESERVED_IDENTIFIER_FIXUP_3268.x = _RESERVED_IDENTIFIER_FIXUP_1377.x;
        _RESERVED_IDENTIFIER_FIXUP_3268.y = _RESERVED_IDENTIFIER_FIXUP_1377.y;
        _RESERVED_IDENTIFIER_FIXUP_3268.w = _RESERVED_IDENTIFIER_FIXUP_1272;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3268.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1272;
        float _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_1370 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1399;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1406 = _RESERVED_IDENTIFIER_FIXUP_3212.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3281;
        _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_1406.x;
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_1406.y;
        _RESERVED_IDENTIFIER_FIXUP_3281.w = _RESERVED_IDENTIFIER_FIXUP_1272;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3281.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1272;
        float _RESERVED_IDENTIFIER_FIXUP_1428 = _RESERVED_IDENTIFIER_FIXUP_1399 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1428;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1435 = _RESERVED_IDENTIFIER_FIXUP_3212.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3294;
        _RESERVED_IDENTIFIER_FIXUP_3294.x = _RESERVED_IDENTIFIER_FIXUP_1435.x;
        _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_1435.y;
        _RESERVED_IDENTIFIER_FIXUP_3294.w = _RESERVED_IDENTIFIER_FIXUP_1272;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3294.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1272;
        float _RESERVED_IDENTIFIER_FIXUP_1457 = _RESERVED_IDENTIFIER_FIXUP_1428 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1457;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1464 = _RESERVED_IDENTIFIER_FIXUP_3212.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3307;
        _RESERVED_IDENTIFIER_FIXUP_3307.x = _RESERVED_IDENTIFIER_FIXUP_1464.x;
        _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_1464.y;
        _RESERVED_IDENTIFIER_FIXUP_3307.w = _RESERVED_IDENTIFIER_FIXUP_1272;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3307.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1272;
        float _RESERVED_IDENTIFIER_FIXUP_1486 = _RESERVED_IDENTIFIER_FIXUP_1457 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1486;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1486 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3754 = _RESERVED_IDENTIFIER_FIXUP_3212;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1499 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3000.y = _RESERVED_IDENTIFIER_FIXUP_1499;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3755;
        if (_RESERVED_IDENTIFIER_FIXUP_1499 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1508 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1518 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1520 = _RESERVED_IDENTIFIER_FIXUP_1518.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3152 = _RESERVED_IDENTIFIER_FIXUP_3000;
            _RESERVED_IDENTIFIER_FIXUP_3152.y = _RESERVED_IDENTIFIER_FIXUP_1520;
            _RESERVED_IDENTIFIER_FIXUP_3152.z = _RESERVED_IDENTIFIER_FIXUP_1518.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_3152.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3156;
            _RESERVED_IDENTIFIER_FIXUP_3156.x = _RESERVED_IDENTIFIER_FIXUP_1528.x;
            _RESERVED_IDENTIFIER_FIXUP_3156.y = _RESERVED_IDENTIFIER_FIXUP_1528.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1535 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1539 = _RESERVED_IDENTIFIER_FIXUP_1535.y;
            _RESERVED_IDENTIFIER_FIXUP_3156.w = _RESERVED_IDENTIFIER_FIXUP_1539;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1508.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1508.w;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3156.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1539;
            float _RESERVED_IDENTIFIER_FIXUP_1550 = hdLod6(param_22, param_23).x + hdLod6(param_24, param_25).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3777 = vec4(_RESERVED_IDENTIFIER_FIXUP_1229, _RESERVED_IDENTIFIER_FIXUP_1520, _RESERVED_IDENTIFIER_FIXUP_1518.y, _RESERVED_IDENTIFIER_FIXUP_1550);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1557 = _RESERVED_IDENTIFIER_FIXUP_3777.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3169;
            _RESERVED_IDENTIFIER_FIXUP_3169.x = _RESERVED_IDENTIFIER_FIXUP_1557.x;
            _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_1557.y;
            _RESERVED_IDENTIFIER_FIXUP_3169.w = _RESERVED_IDENTIFIER_FIXUP_1539;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3169.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1539;
            float _RESERVED_IDENTIFIER_FIXUP_1579 = _RESERVED_IDENTIFIER_FIXUP_1550 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_3777.w = _RESERVED_IDENTIFIER_FIXUP_1579;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1586 = _RESERVED_IDENTIFIER_FIXUP_3777.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3182;
            _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_1586.x;
            _RESERVED_IDENTIFIER_FIXUP_3182.y = _RESERVED_IDENTIFIER_FIXUP_1586.y;
            _RESERVED_IDENTIFIER_FIXUP_3182.w = _RESERVED_IDENTIFIER_FIXUP_1539;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3182.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1539;
            float _RESERVED_IDENTIFIER_FIXUP_1608 = _RESERVED_IDENTIFIER_FIXUP_1579 + hdLod6(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_3777.w = _RESERVED_IDENTIFIER_FIXUP_1608;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1615 = _RESERVED_IDENTIFIER_FIXUP_3777.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3195;
            _RESERVED_IDENTIFIER_FIXUP_3195.x = _RESERVED_IDENTIFIER_FIXUP_1615.x;
            _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_1615.y;
            _RESERVED_IDENTIFIER_FIXUP_3195.w = _RESERVED_IDENTIFIER_FIXUP_1539;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3195.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1539;
            float _RESERVED_IDENTIFIER_FIXUP_1637 = _RESERVED_IDENTIFIER_FIXUP_1608 + hdLod6(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_3777.y = _RESERVED_IDENTIFIER_FIXUP_1637;
            _RESERVED_IDENTIFIER_FIXUP_3777.x = _RESERVED_IDENTIFIER_FIXUP_1637 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3755 = _RESERVED_IDENTIFIER_FIXUP_3777;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1650 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3017 = _RESERVED_IDENTIFIER_FIXUP_3000;
            _RESERVED_IDENTIFIER_FIXUP_3017.y = _RESERVED_IDENTIFIER_FIXUP_1650;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3756;
            if (_RESERVED_IDENTIFIER_FIXUP_1650 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1659 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1669 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1671 = _RESERVED_IDENTIFIER_FIXUP_1669.x;
                _RESERVED_IDENTIFIER_FIXUP_3017.y = _RESERVED_IDENTIFIER_FIXUP_1671;
                _RESERVED_IDENTIFIER_FIXUP_3017.z = _RESERVED_IDENTIFIER_FIXUP_1669.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1679 = _RESERVED_IDENTIFIER_FIXUP_3017.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3096;
                _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_1679.x;
                _RESERVED_IDENTIFIER_FIXUP_3096.y = _RESERVED_IDENTIFIER_FIXUP_1679.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1686 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1690 = _RESERVED_IDENTIFIER_FIXUP_1686.y;
                _RESERVED_IDENTIFIER_FIXUP_3096.w = _RESERVED_IDENTIFIER_FIXUP_1690;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1659.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1659.w;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3096.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1690;
                float _RESERVED_IDENTIFIER_FIXUP_1701 = hdLod7(param_32, param_33).x + hdLod7(param_34, param_35).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3776 = vec4(_RESERVED_IDENTIFIER_FIXUP_1229, _RESERVED_IDENTIFIER_FIXUP_1671, _RESERVED_IDENTIFIER_FIXUP_1669.y, _RESERVED_IDENTIFIER_FIXUP_1701);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1708 = _RESERVED_IDENTIFIER_FIXUP_3776.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3109;
                _RESERVED_IDENTIFIER_FIXUP_3109.x = _RESERVED_IDENTIFIER_FIXUP_1708.x;
                _RESERVED_IDENTIFIER_FIXUP_3109.y = _RESERVED_IDENTIFIER_FIXUP_1708.y;
                _RESERVED_IDENTIFIER_FIXUP_3109.w = _RESERVED_IDENTIFIER_FIXUP_1690;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3109.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1690;
                float _RESERVED_IDENTIFIER_FIXUP_1730 = _RESERVED_IDENTIFIER_FIXUP_1701 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_3776.w = _RESERVED_IDENTIFIER_FIXUP_1730;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1737 = _RESERVED_IDENTIFIER_FIXUP_3776.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3122;
                _RESERVED_IDENTIFIER_FIXUP_3122.x = _RESERVED_IDENTIFIER_FIXUP_1737.x;
                _RESERVED_IDENTIFIER_FIXUP_3122.y = _RESERVED_IDENTIFIER_FIXUP_1737.y;
                _RESERVED_IDENTIFIER_FIXUP_3122.w = _RESERVED_IDENTIFIER_FIXUP_1690;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3122.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1690;
                float _RESERVED_IDENTIFIER_FIXUP_1759 = _RESERVED_IDENTIFIER_FIXUP_1730 + hdLod7(param_38, param_39).x;
                _RESERVED_IDENTIFIER_FIXUP_3776.w = _RESERVED_IDENTIFIER_FIXUP_1759;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1766 = _RESERVED_IDENTIFIER_FIXUP_3776.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3135;
                _RESERVED_IDENTIFIER_FIXUP_3135.x = _RESERVED_IDENTIFIER_FIXUP_1766.x;
                _RESERVED_IDENTIFIER_FIXUP_3135.y = _RESERVED_IDENTIFIER_FIXUP_1766.y;
                _RESERVED_IDENTIFIER_FIXUP_3135.w = _RESERVED_IDENTIFIER_FIXUP_1690;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3135.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1690;
                float _RESERVED_IDENTIFIER_FIXUP_1788 = _RESERVED_IDENTIFIER_FIXUP_1759 + hdLod7(param_40, param_41).x;
                _RESERVED_IDENTIFIER_FIXUP_3776.y = _RESERVED_IDENTIFIER_FIXUP_1788;
                _RESERVED_IDENTIFIER_FIXUP_3776.x = _RESERVED_IDENTIFIER_FIXUP_1788 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3756 = _RESERVED_IDENTIFIER_FIXUP_3776;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1804 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1808 = _RESERVED_IDENTIFIER_FIXUP_1804.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1819 = vec4(_RESERVED_IDENTIFIER_FIXUP_1804.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1808).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3773 = vec4(_RESERVED_IDENTIFIER_FIXUP_1819 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1808);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1856 = _RESERVED_IDENTIFIER_FIXUP_1819 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3050 = _RESERVED_IDENTIFIER_FIXUP_3773;
                _RESERVED_IDENTIFIER_FIXUP_3050.x = _RESERVED_IDENTIFIER_FIXUP_1856.x;
                _RESERVED_IDENTIFIER_FIXUP_3050.y = _RESERVED_IDENTIFIER_FIXUP_1856.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1878 = _RESERVED_IDENTIFIER_FIXUP_1819 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3059 = _RESERVED_IDENTIFIER_FIXUP_3050;
                _RESERVED_IDENTIFIER_FIXUP_3059.x = _RESERVED_IDENTIFIER_FIXUP_1878.x;
                _RESERVED_IDENTIFIER_FIXUP_3059.y = _RESERVED_IDENTIFIER_FIXUP_1878.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1900 = _RESERVED_IDENTIFIER_FIXUP_1819 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3068 = _RESERVED_IDENTIFIER_FIXUP_3059;
                _RESERVED_IDENTIFIER_FIXUP_3068.x = _RESERVED_IDENTIFIER_FIXUP_1900.x;
                _RESERVED_IDENTIFIER_FIXUP_3068.y = _RESERVED_IDENTIFIER_FIXUP_1900.y;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_1819;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1808;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3773.xy;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1808;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3050.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1808;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3059.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1808;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3068.xy;
                float param_51 = _RESERVED_IDENTIFIER_FIXUP_1808;
                float _RESERVED_IDENTIFIER_FIXUP_1915 = (((hdLod8(param_42, param_43).x + hdLod8(param_44, param_45).x) + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + hdLod8(param_50, param_51).x;
                float _RESERVED_IDENTIFIER_FIXUP_1929 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1934 = (_RESERVED_IDENTIFIER_FIXUP_1915 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3756 = vec4((_RESERVED_IDENTIFIER_FIXUP_1929 * _RESERVED_IDENTIFIER_FIXUP_1934) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1929, _RESERVED_IDENTIFIER_FIXUP_1934, _RESERVED_IDENTIFIER_FIXUP_1915);
            }
            _RESERVED_IDENTIFIER_FIXUP_3755 = _RESERVED_IDENTIFIER_FIXUP_3756;
        }
        _RESERVED_IDENTIFIER_FIXUP_3754 = _RESERVED_IDENTIFIER_FIXUP_3755;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3326 = _RESERVED_IDENTIFIER_FIXUP_3754;
    _RESERVED_IDENTIFIER_FIXUP_3326.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1962 = _RESERVED_IDENTIFIER_FIXUP_1210.xyz * _RESERVED_IDENTIFIER_FIXUP_3326.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3328 = _RESERVED_IDENTIFIER_FIXUP_1210;
    _RESERVED_IDENTIFIER_FIXUP_3328.x = _RESERVED_IDENTIFIER_FIXUP_1962.x;
    _RESERVED_IDENTIFIER_FIXUP_3328.y = _RESERVED_IDENTIFIER_FIXUP_1962.y;
    _RESERVED_IDENTIFIER_FIXUP_3328.z = _RESERVED_IDENTIFIER_FIXUP_1962.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1973 = _RESERVED_IDENTIFIER_FIXUP_3328.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3752).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3334 = _RESERVED_IDENTIFIER_FIXUP_3328;
    _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_1973.x;
    _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_1973.y;
    _RESERVED_IDENTIFIER_FIXUP_3334.z = _RESERVED_IDENTIFIER_FIXUP_1973.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1984 = _RESERVED_IDENTIFIER_FIXUP_3334.xyz + _RESERVED_IDENTIFIER_FIXUP_3334.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3340 = _RESERVED_IDENTIFIER_FIXUP_3334;
    _RESERVED_IDENTIFIER_FIXUP_3340.x = _RESERVED_IDENTIFIER_FIXUP_1984.x;
    _RESERVED_IDENTIFIER_FIXUP_3340.y = _RESERVED_IDENTIFIER_FIXUP_1984.y;
    _RESERVED_IDENTIFIER_FIXUP_3340.z = _RESERVED_IDENTIFIER_FIXUP_1984.z;
    _RESERVED_IDENTIFIER_FIXUP_3326.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3326.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3326.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2009 = (_RESERVED_IDENTIFIER_FIXUP_3326.yzw * _RESERVED_IDENTIFIER_FIXUP_3326.xxx) + _RESERVED_IDENTIFIER_FIXUP_3340.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3352 = _RESERVED_IDENTIFIER_FIXUP_3340;
    _RESERVED_IDENTIFIER_FIXUP_3352.x = _RESERVED_IDENTIFIER_FIXUP_2009.x;
    _RESERVED_IDENTIFIER_FIXUP_3352.y = _RESERVED_IDENTIFIER_FIXUP_2009.y;
    _RESERVED_IDENTIFIER_FIXUP_3352.z = _RESERVED_IDENTIFIER_FIXUP_2009.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2022 = _RESERVED_IDENTIFIER_FIXUP_3352.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_3352;
    _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_2022.x;
    _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_2022.y;
    _RESERVED_IDENTIFIER_FIXUP_3358.z = _RESERVED_IDENTIFIER_FIXUP_2022.z;
    vec2 param_52 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2077 = hdTex0(param_52);
    vec2 param_53 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2081 = hdTex1(param_53);
    vec2 param_54 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2085 = hdTex2(param_54);
    vec2 param_55 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2089 = hdTex3(param_55);
    float _RESERVED_IDENTIFIER_FIXUP_2093 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2089.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_2089;
    _RESERVED_IDENTIFIER_FIXUP_3372.z = _RESERVED_IDENTIFIER_FIXUP_2093;
    _RESERVED_IDENTIFIER_FIXUP_3372.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2093;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2103 = _RESERVED_IDENTIFIER_FIXUP_2081 * _RESERVED_IDENTIFIER_FIXUP_3372.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2115 = (_RESERVED_IDENTIFIER_FIXUP_2085 * _RESERVED_IDENTIFIER_FIXUP_3372.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2077 * _RESERVED_IDENTIFIER_FIXUP_3372.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2103);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3379 = _RESERVED_IDENTIFIER_FIXUP_2103;
    _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_1217;
    float _RESERVED_IDENTIFIER_FIXUP_2128 = clamp((_RESERVED_IDENTIFIER_FIXUP_1217 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_2128;
    float _RESERVED_IDENTIFIER_FIXUP_2134 = ((-_RESERVED_IDENTIFIER_FIXUP_2128) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_2134;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3763;
    if (_RESERVED_IDENTIFIER_FIXUP_2134 != (-_RESERVED_IDENTIFIER_FIXUP_2134))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2146 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2146.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2146.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2152 = hdLod5(param_56, param_57);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2156 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3591 = _RESERVED_IDENTIFIER_FIXUP_2152;
        _RESERVED_IDENTIFIER_FIXUP_3591.y = _RESERVED_IDENTIFIER_FIXUP_2156.x;
        _RESERVED_IDENTIFIER_FIXUP_3591.z = _RESERVED_IDENTIFIER_FIXUP_2156.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2166 = _RESERVED_IDENTIFIER_FIXUP_3591.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3595;
        _RESERVED_IDENTIFIER_FIXUP_3595.x = _RESERVED_IDENTIFIER_FIXUP_2166.x;
        _RESERVED_IDENTIFIER_FIXUP_3595.y = _RESERVED_IDENTIFIER_FIXUP_2166.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2173 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2177 = _RESERVED_IDENTIFIER_FIXUP_2173.y;
        _RESERVED_IDENTIFIER_FIXUP_3595.w = _RESERVED_IDENTIFIER_FIXUP_2177;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3595.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2177;
        float _RESERVED_IDENTIFIER_FIXUP_2188 = _RESERVED_IDENTIFIER_FIXUP_2152.x + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2195 = _RESERVED_IDENTIFIER_FIXUP_3591.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3608;
        _RESERVED_IDENTIFIER_FIXUP_3608.x = _RESERVED_IDENTIFIER_FIXUP_2195.x;
        _RESERVED_IDENTIFIER_FIXUP_3608.y = _RESERVED_IDENTIFIER_FIXUP_2195.y;
        _RESERVED_IDENTIFIER_FIXUP_3608.w = _RESERVED_IDENTIFIER_FIXUP_2177;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3608.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2177;
        float _RESERVED_IDENTIFIER_FIXUP_2217 = _RESERVED_IDENTIFIER_FIXUP_2188 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2217;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2224 = _RESERVED_IDENTIFIER_FIXUP_3591.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3621;
        _RESERVED_IDENTIFIER_FIXUP_3621.x = _RESERVED_IDENTIFIER_FIXUP_2224.x;
        _RESERVED_IDENTIFIER_FIXUP_3621.y = _RESERVED_IDENTIFIER_FIXUP_2224.y;
        _RESERVED_IDENTIFIER_FIXUP_3621.w = _RESERVED_IDENTIFIER_FIXUP_2177;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3621.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2177;
        float _RESERVED_IDENTIFIER_FIXUP_2246 = _RESERVED_IDENTIFIER_FIXUP_2217 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2246;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2253 = _RESERVED_IDENTIFIER_FIXUP_3591.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3634;
        _RESERVED_IDENTIFIER_FIXUP_3634.x = _RESERVED_IDENTIFIER_FIXUP_2253.x;
        _RESERVED_IDENTIFIER_FIXUP_3634.y = _RESERVED_IDENTIFIER_FIXUP_2253.y;
        _RESERVED_IDENTIFIER_FIXUP_3634.w = _RESERVED_IDENTIFIER_FIXUP_2177;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3634.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2177;
        float _RESERVED_IDENTIFIER_FIXUP_2275 = _RESERVED_IDENTIFIER_FIXUP_2246 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2275;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2282 = _RESERVED_IDENTIFIER_FIXUP_3591.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3647;
        _RESERVED_IDENTIFIER_FIXUP_3647.x = _RESERVED_IDENTIFIER_FIXUP_2282.x;
        _RESERVED_IDENTIFIER_FIXUP_3647.y = _RESERVED_IDENTIFIER_FIXUP_2282.y;
        _RESERVED_IDENTIFIER_FIXUP_3647.w = _RESERVED_IDENTIFIER_FIXUP_2177;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3647.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2177;
        float _RESERVED_IDENTIFIER_FIXUP_2304 = _RESERVED_IDENTIFIER_FIXUP_2275 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2304;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2311 = _RESERVED_IDENTIFIER_FIXUP_3591.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3660;
        _RESERVED_IDENTIFIER_FIXUP_3660.x = _RESERVED_IDENTIFIER_FIXUP_2311.x;
        _RESERVED_IDENTIFIER_FIXUP_3660.y = _RESERVED_IDENTIFIER_FIXUP_2311.y;
        _RESERVED_IDENTIFIER_FIXUP_3660.w = _RESERVED_IDENTIFIER_FIXUP_2177;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3660.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2177;
        float _RESERVED_IDENTIFIER_FIXUP_2333 = _RESERVED_IDENTIFIER_FIXUP_2304 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2333;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2340 = _RESERVED_IDENTIFIER_FIXUP_3591.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3673;
        _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_2340.x;
        _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_2340.y;
        _RESERVED_IDENTIFIER_FIXUP_3673.w = _RESERVED_IDENTIFIER_FIXUP_2177;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3673.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2177;
        float _RESERVED_IDENTIFIER_FIXUP_2362 = _RESERVED_IDENTIFIER_FIXUP_2333 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2362;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2369 = _RESERVED_IDENTIFIER_FIXUP_3591.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3686;
        _RESERVED_IDENTIFIER_FIXUP_3686.x = _RESERVED_IDENTIFIER_FIXUP_2369.x;
        _RESERVED_IDENTIFIER_FIXUP_3686.y = _RESERVED_IDENTIFIER_FIXUP_2369.y;
        _RESERVED_IDENTIFIER_FIXUP_3686.w = _RESERVED_IDENTIFIER_FIXUP_2177;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3686.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2177;
        float _RESERVED_IDENTIFIER_FIXUP_2391 = _RESERVED_IDENTIFIER_FIXUP_2362 + hdLod5(param_72, param_73).x;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2391;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2391 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3763 = _RESERVED_IDENTIFIER_FIXUP_3591;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2404 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_2404;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3764;
        if (_RESERVED_IDENTIFIER_FIXUP_2404 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2413 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2423 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2425 = _RESERVED_IDENTIFIER_FIXUP_2423.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3531 = _RESERVED_IDENTIFIER_FIXUP_3379;
            _RESERVED_IDENTIFIER_FIXUP_3531.y = _RESERVED_IDENTIFIER_FIXUP_2425;
            _RESERVED_IDENTIFIER_FIXUP_3531.z = _RESERVED_IDENTIFIER_FIXUP_2423.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2433 = _RESERVED_IDENTIFIER_FIXUP_3531.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3535;
            _RESERVED_IDENTIFIER_FIXUP_3535.x = _RESERVED_IDENTIFIER_FIXUP_2433.x;
            _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_2433.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2440 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2444 = _RESERVED_IDENTIFIER_FIXUP_2440.y;
            _RESERVED_IDENTIFIER_FIXUP_3535.w = _RESERVED_IDENTIFIER_FIXUP_2444;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2413.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2413.w;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3535.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2444;
            float _RESERVED_IDENTIFIER_FIXUP_2455 = hdLod6(param_74, param_75).x + hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3784 = vec4(_RESERVED_IDENTIFIER_FIXUP_2134, _RESERVED_IDENTIFIER_FIXUP_2425, _RESERVED_IDENTIFIER_FIXUP_2423.y, _RESERVED_IDENTIFIER_FIXUP_2455);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2462 = _RESERVED_IDENTIFIER_FIXUP_3784.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3548;
            _RESERVED_IDENTIFIER_FIXUP_3548.x = _RESERVED_IDENTIFIER_FIXUP_2462.x;
            _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_2462.y;
            _RESERVED_IDENTIFIER_FIXUP_3548.w = _RESERVED_IDENTIFIER_FIXUP_2444;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3548.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2444;
            float _RESERVED_IDENTIFIER_FIXUP_2484 = _RESERVED_IDENTIFIER_FIXUP_2455 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3784.w = _RESERVED_IDENTIFIER_FIXUP_2484;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2491 = _RESERVED_IDENTIFIER_FIXUP_3784.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3561;
            _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2491.x;
            _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_2491.y;
            _RESERVED_IDENTIFIER_FIXUP_3561.w = _RESERVED_IDENTIFIER_FIXUP_2444;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3561.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2444;
            float _RESERVED_IDENTIFIER_FIXUP_2513 = _RESERVED_IDENTIFIER_FIXUP_2484 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3784.w = _RESERVED_IDENTIFIER_FIXUP_2513;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2520 = _RESERVED_IDENTIFIER_FIXUP_3784.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3574;
            _RESERVED_IDENTIFIER_FIXUP_3574.x = _RESERVED_IDENTIFIER_FIXUP_2520.x;
            _RESERVED_IDENTIFIER_FIXUP_3574.y = _RESERVED_IDENTIFIER_FIXUP_2520.y;
            _RESERVED_IDENTIFIER_FIXUP_3574.w = _RESERVED_IDENTIFIER_FIXUP_2444;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3574.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2444;
            float _RESERVED_IDENTIFIER_FIXUP_2542 = _RESERVED_IDENTIFIER_FIXUP_2513 + hdLod6(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3784.y = _RESERVED_IDENTIFIER_FIXUP_2542;
            _RESERVED_IDENTIFIER_FIXUP_3784.x = _RESERVED_IDENTIFIER_FIXUP_2542 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3764 = _RESERVED_IDENTIFIER_FIXUP_3784;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2555 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3396 = _RESERVED_IDENTIFIER_FIXUP_3379;
            _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_2555;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3765;
            if (_RESERVED_IDENTIFIER_FIXUP_2555 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2564 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2574 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2576 = _RESERVED_IDENTIFIER_FIXUP_2574.x;
                _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_2576;
                _RESERVED_IDENTIFIER_FIXUP_3396.z = _RESERVED_IDENTIFIER_FIXUP_2574.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2584 = _RESERVED_IDENTIFIER_FIXUP_3396.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3475;
                _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_2584.x;
                _RESERVED_IDENTIFIER_FIXUP_3475.y = _RESERVED_IDENTIFIER_FIXUP_2584.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2591 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2595 = _RESERVED_IDENTIFIER_FIXUP_2591.y;
                _RESERVED_IDENTIFIER_FIXUP_3475.w = _RESERVED_IDENTIFIER_FIXUP_2595;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2564.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2564.w;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3475.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2595;
                float _RESERVED_IDENTIFIER_FIXUP_2606 = hdLod7(param_84, param_85).x + hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3783 = vec4(_RESERVED_IDENTIFIER_FIXUP_2134, _RESERVED_IDENTIFIER_FIXUP_2576, _RESERVED_IDENTIFIER_FIXUP_2574.y, _RESERVED_IDENTIFIER_FIXUP_2606);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2613 = _RESERVED_IDENTIFIER_FIXUP_3783.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3488;
                _RESERVED_IDENTIFIER_FIXUP_3488.x = _RESERVED_IDENTIFIER_FIXUP_2613.x;
                _RESERVED_IDENTIFIER_FIXUP_3488.y = _RESERVED_IDENTIFIER_FIXUP_2613.y;
                _RESERVED_IDENTIFIER_FIXUP_3488.w = _RESERVED_IDENTIFIER_FIXUP_2595;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3488.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2595;
                float _RESERVED_IDENTIFIER_FIXUP_2635 = _RESERVED_IDENTIFIER_FIXUP_2606 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3783.w = _RESERVED_IDENTIFIER_FIXUP_2635;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2642 = _RESERVED_IDENTIFIER_FIXUP_3783.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3501;
                _RESERVED_IDENTIFIER_FIXUP_3501.x = _RESERVED_IDENTIFIER_FIXUP_2642.x;
                _RESERVED_IDENTIFIER_FIXUP_3501.y = _RESERVED_IDENTIFIER_FIXUP_2642.y;
                _RESERVED_IDENTIFIER_FIXUP_3501.w = _RESERVED_IDENTIFIER_FIXUP_2595;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3501.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2595;
                float _RESERVED_IDENTIFIER_FIXUP_2664 = _RESERVED_IDENTIFIER_FIXUP_2635 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_3783.w = _RESERVED_IDENTIFIER_FIXUP_2664;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2671 = _RESERVED_IDENTIFIER_FIXUP_3783.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3514;
                _RESERVED_IDENTIFIER_FIXUP_3514.x = _RESERVED_IDENTIFIER_FIXUP_2671.x;
                _RESERVED_IDENTIFIER_FIXUP_3514.y = _RESERVED_IDENTIFIER_FIXUP_2671.y;
                _RESERVED_IDENTIFIER_FIXUP_3514.w = _RESERVED_IDENTIFIER_FIXUP_2595;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3514.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2595;
                float _RESERVED_IDENTIFIER_FIXUP_2693 = _RESERVED_IDENTIFIER_FIXUP_2664 + hdLod7(param_92, param_93).x;
                _RESERVED_IDENTIFIER_FIXUP_3783.y = _RESERVED_IDENTIFIER_FIXUP_2693;
                _RESERVED_IDENTIFIER_FIXUP_3783.x = _RESERVED_IDENTIFIER_FIXUP_2693 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3765 = _RESERVED_IDENTIFIER_FIXUP_3783;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2709 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2713 = _RESERVED_IDENTIFIER_FIXUP_2709.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2724 = vec4(_RESERVED_IDENTIFIER_FIXUP_2709.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2713).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3780 = vec4(_RESERVED_IDENTIFIER_FIXUP_2724 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2713);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2761 = _RESERVED_IDENTIFIER_FIXUP_2724 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3429 = _RESERVED_IDENTIFIER_FIXUP_3780;
                _RESERVED_IDENTIFIER_FIXUP_3429.x = _RESERVED_IDENTIFIER_FIXUP_2761.x;
                _RESERVED_IDENTIFIER_FIXUP_3429.y = _RESERVED_IDENTIFIER_FIXUP_2761.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2783 = _RESERVED_IDENTIFIER_FIXUP_2724 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3438 = _RESERVED_IDENTIFIER_FIXUP_3429;
                _RESERVED_IDENTIFIER_FIXUP_3438.x = _RESERVED_IDENTIFIER_FIXUP_2783.x;
                _RESERVED_IDENTIFIER_FIXUP_3438.y = _RESERVED_IDENTIFIER_FIXUP_2783.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2805 = _RESERVED_IDENTIFIER_FIXUP_2724 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3447 = _RESERVED_IDENTIFIER_FIXUP_3438;
                _RESERVED_IDENTIFIER_FIXUP_3447.x = _RESERVED_IDENTIFIER_FIXUP_2805.x;
                _RESERVED_IDENTIFIER_FIXUP_3447.y = _RESERVED_IDENTIFIER_FIXUP_2805.y;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_2724;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2713;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3780.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2713;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3429.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2713;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3438.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2713;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3447.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_2713;
                float _RESERVED_IDENTIFIER_FIXUP_2820 = (((hdLod8(param_94, param_95).x + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x;
                float _RESERVED_IDENTIFIER_FIXUP_2834 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2839 = (_RESERVED_IDENTIFIER_FIXUP_2820 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3765 = vec4((_RESERVED_IDENTIFIER_FIXUP_2834 * _RESERVED_IDENTIFIER_FIXUP_2839) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2834, _RESERVED_IDENTIFIER_FIXUP_2839, _RESERVED_IDENTIFIER_FIXUP_2820);
            }
            _RESERVED_IDENTIFIER_FIXUP_3764 = _RESERVED_IDENTIFIER_FIXUP_3765;
        }
        _RESERVED_IDENTIFIER_FIXUP_3763 = _RESERVED_IDENTIFIER_FIXUP_3764;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2854 = (_RESERVED_IDENTIFIER_FIXUP_3763.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3703 = _RESERVED_IDENTIFIER_FIXUP_3763;
    _RESERVED_IDENTIFIER_FIXUP_3703.y = _RESERVED_IDENTIFIER_FIXUP_2854;
    _RESERVED_IDENTIFIER_FIXUP_3703.y = _RESERVED_IDENTIFIER_FIXUP_2854;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2867 = _RESERVED_IDENTIFIER_FIXUP_2115.xyz * _RESERVED_IDENTIFIER_FIXUP_3703.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3709 = _RESERVED_IDENTIFIER_FIXUP_2115;
    _RESERVED_IDENTIFIER_FIXUP_3709.x = _RESERVED_IDENTIFIER_FIXUP_2867.x;
    _RESERVED_IDENTIFIER_FIXUP_3709.y = _RESERVED_IDENTIFIER_FIXUP_2867.y;
    _RESERVED_IDENTIFIER_FIXUP_3709.z = _RESERVED_IDENTIFIER_FIXUP_2867.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2878 = _RESERVED_IDENTIFIER_FIXUP_3709.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3715 = _RESERVED_IDENTIFIER_FIXUP_3709;
    _RESERVED_IDENTIFIER_FIXUP_3715.x = _RESERVED_IDENTIFIER_FIXUP_2878.x;
    _RESERVED_IDENTIFIER_FIXUP_3715.y = _RESERVED_IDENTIFIER_FIXUP_2878.y;
    _RESERVED_IDENTIFIER_FIXUP_3715.z = _RESERVED_IDENTIFIER_FIXUP_2878.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2889 = _RESERVED_IDENTIFIER_FIXUP_3715.xyz + _RESERVED_IDENTIFIER_FIXUP_3715.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3721 = _RESERVED_IDENTIFIER_FIXUP_3715;
    _RESERVED_IDENTIFIER_FIXUP_3721.x = _RESERVED_IDENTIFIER_FIXUP_2889.x;
    _RESERVED_IDENTIFIER_FIXUP_3721.y = _RESERVED_IDENTIFIER_FIXUP_2889.y;
    _RESERVED_IDENTIFIER_FIXUP_3721.z = _RESERVED_IDENTIFIER_FIXUP_2889.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2900 = _RESERVED_IDENTIFIER_FIXUP_3721.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3703.y = _RESERVED_IDENTIFIER_FIXUP_2900.x;
    _RESERVED_IDENTIFIER_FIXUP_3703.z = _RESERVED_IDENTIFIER_FIXUP_2900.y;
    _RESERVED_IDENTIFIER_FIXUP_3703.w = _RESERVED_IDENTIFIER_FIXUP_2900.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2914 = (_RESERVED_IDENTIFIER_FIXUP_3703.yzw * _RESERVED_IDENTIFIER_FIXUP_3703.xxx) + _RESERVED_IDENTIFIER_FIXUP_3721.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3733 = _RESERVED_IDENTIFIER_FIXUP_3721;
    _RESERVED_IDENTIFIER_FIXUP_3733.x = _RESERVED_IDENTIFIER_FIXUP_2914.x;
    _RESERVED_IDENTIFIER_FIXUP_3733.y = _RESERVED_IDENTIFIER_FIXUP_2914.y;
    _RESERVED_IDENTIFIER_FIXUP_3733.z = _RESERVED_IDENTIFIER_FIXUP_2914.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2927 = _RESERVED_IDENTIFIER_FIXUP_3733.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3739 = _RESERVED_IDENTIFIER_FIXUP_3733;
    _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_2927.x;
    _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2927.y;
    _RESERVED_IDENTIFIER_FIXUP_3739.z = _RESERVED_IDENTIFIER_FIXUP_2927.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3739.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1031 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1040;
    if (_RESERVED_IDENTIFIER_FIXUP_1031)
    {
        _RESERVED_IDENTIFIER_FIXUP_1040 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1040 = _RESERVED_IDENTIFIER_FIXUP_1031;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1040)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1077 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3358.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1104 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2986;
    if (_RESERVED_IDENTIFIER_FIXUP_1077 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2986 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1077), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1104);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2986 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1104);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2986;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2854);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 *= r3.xxxx;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
        vec2 hdB157 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB157.x;
        r1.z = hdB157.y;
        vec2 hdB178 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB178.x;
        r2.y = hdB178.y;
        vec2 hdB186 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB186.x;
        r2.w = hdB186.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.x += r2.x;
        vec2 hdB209 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB209.x;
        r2.y = hdB209.y;
        vec2 hdB216 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB216.x;
        r2.w = hdB216.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.x += r2.x;
        vec2 hdB239 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB239.x;
        r2.y = hdB239.y;
        vec2 hdB246 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB246.x;
        r2.w = hdB246.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.x += r2.x;
        vec2 hdB269 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB269.x;
        r2.y = hdB269.y;
        vec2 hdB276 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB276.x;
        r2.w = hdB276.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.x += r2.x;
        vec2 hdB299 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB299.x;
        r2.y = hdB299.y;
        vec2 hdB306 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB306.x;
        r2.w = hdB306.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r1.x += r2.x;
        vec2 hdB329 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB329.x;
        r2.y = hdB329.y;
        vec2 hdB336 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB336.x;
        r2.w = hdB336.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r1.x += r2.x;
        vec2 hdB359 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB359.x;
        r2.y = hdB359.y;
        vec2 hdB366 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB366.x;
        r2.w = hdB366.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod5(param_18, param_19);
        r1.x += r2.x;
        vec2 hdB389 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB389.x;
        r2.y = hdB389.y;
        vec2 hdB396 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB396.x;
        r2.w = hdB396.y;
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
            vec2 hdB446 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB446.x;
            r1.z = hdB446.y;
            vec2 hdB456 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB456.x;
            r3.y = hdB456.y;
            vec2 hdB463 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB463.x;
            r3.w = hdB463.y;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod6(param_24, param_25);
            r1.w = r2.x + r3.x;
            vec2 hdB485 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB485.x;
            r2.y = hdB485.y;
            vec2 hdB492 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB492.x;
            r2.w = hdB492.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r1.w += r2.x;
            vec2 hdB514 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB514.x;
            r2.y = hdB514.y;
            vec2 hdB521 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB521.x;
            r2.w = hdB521.y;
            vec2 param_28 = r2.xy;
            float param_29 = r2.w;
            r2 = hdLod6(param_28, param_29);
            r1.w += r2.x;
            vec2 hdB543 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB543.x;
            r2.y = hdB543.y;
            vec2 hdB550 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB550.x;
            r2.w = hdB550.y;
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
                vec2 hdB600 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB600.x;
                r1.z = hdB600.y;
                vec2 hdB610 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB610.x;
                r3.y = hdB610.y;
                vec2 hdB617 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB617.x;
                r3.w = hdB617.y;
                vec2 param_34 = r3.xy;
                float param_35 = r3.w;
                r3 = hdLod7(param_34, param_35);
                r1.w = r2.x + r3.x;
                vec2 hdB639 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB639.x;
                r2.y = hdB639.y;
                vec2 hdB646 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB646.x;
                r2.w = hdB646.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r1.w += r2.x;
                vec2 hdB668 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB668.x;
                r2.y = hdB668.y;
                vec2 hdB675 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB675.x;
                r2.w = hdB675.y;
                vec2 param_38 = r2.xy;
                float param_39 = r2.w;
                r2 = hdLod7(param_38, param_39);
                r1.w += r2.x;
                vec2 hdB697 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB697.x;
                r2.y = hdB697.y;
                vec2 hdB704 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB704.x;
                r2.w = hdB704.y;
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
                vec2 hdB736 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB736.x;
                r2.w = hdB736.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_42 = r2.xy;
                float param_43 = r2.w;
                r3 = hdLod8(param_42, param_43);
                vec2 hdB761 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB761.x;
                r4.y = hdB761.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r5 = hdLod8(param_44, param_45);
                r1.w = r3.x + r5.x;
                vec2 hdB789 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB789.x;
                r4.y = hdB789.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r1.w += r3.x;
                vec2 hdB811 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB811.x;
                r4.y = hdB811.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r3 = hdLod8(param_48, param_49);
                r1.w += r3.x;
                vec2 hdB833 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB833.x;
                r4.y = hdB833.y;
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
    vec4 hdB886 = r0;
    vec3 hdB890 = hdB886.xyz * r1.yyy;
    r0.x = hdB890.x;
    r0.y = hdB890.y;
    r0.z = hdB890.z;
    vec4 hdB897 = r0;
    vec3 hdB901 = hdB897.xyz * v0.xyz;
    r0.x = hdB901.x;
    r0.y = hdB901.y;
    r0.z = hdB901.z;
    vec4 hdB908 = r0;
    vec4 hdB910 = r0;
    vec3 hdB912 = hdB908.xyz + hdB910.xyz;
    r0.x = hdB912.x;
    r0.y = hdB912.y;
    r0.z = hdB912.z;
    vec3 hdB923 = r0.www * v1.xyz;
    r1.y = hdB923.x;
    r1.z = hdB923.y;
    r1.w = hdB923.z;
    vec4 hdB935 = r0;
    vec3 hdB937 = (r1.yzw * r1.xxx) + hdB935.xyz;
    r0.x = hdB937.x;
    r0.y = hdB937.y;
    r0.z = hdB937.z;
    vec4 hdB944 = r0;
    vec3 hdB951 = hdB944.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB951.x;
    r0.y = hdB951.y;
    r0.z = hdB951.z;
    vec3 hdB966 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB966.x;
    oC0.y = hdB966.y;
    oC0.z = hdB966.z;
    oC0.w = 1.0;
    bool hdB979 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB987;
    if (hdB979)
    {
        hdB987 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB987 = hdB979;
    }
    if (hdB987)
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
    bool _3445 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3455;
    if (_3445)
    {
        _3455 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3455 = _3445;
    }
    if (_3455)
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
        bool _3480 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3495;
        if (!_3480)
        {
            _3495 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3495 = _3480;
        }
        if (_3495)
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
