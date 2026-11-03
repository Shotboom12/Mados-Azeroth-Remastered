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
float _RESERVED_IDENTIFIER_FIXUP_3878;
vec4 _RESERVED_IDENTIFIER_FIXUP_3879;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1200 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1204 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1208 = hdTex3(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_1212 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1208.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3053 = _RESERVED_IDENTIFIER_FIXUP_1208;
    _RESERVED_IDENTIFIER_FIXUP_3053.z = _RESERVED_IDENTIFIER_FIXUP_1212;
    _RESERVED_IDENTIFIER_FIXUP_3053.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1212;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1200 * _RESERVED_IDENTIFIER_FIXUP_3053.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1234 = (_RESERVED_IDENTIFIER_FIXUP_1204 * _RESERVED_IDENTIFIER_FIXUP_3053.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1196 * _RESERVED_IDENTIFIER_FIXUP_3053.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1222);
    float _RESERVED_IDENTIFIER_FIXUP_1241 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3060 = _RESERVED_IDENTIFIER_FIXUP_1222;
    _RESERVED_IDENTIFIER_FIXUP_3060.x = _RESERVED_IDENTIFIER_FIXUP_1241;
    float _RESERVED_IDENTIFIER_FIXUP_1247 = clamp((_RESERVED_IDENTIFIER_FIXUP_1241 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3060.x = _RESERVED_IDENTIFIER_FIXUP_1247;
    float _RESERVED_IDENTIFIER_FIXUP_1253 = ((-_RESERVED_IDENTIFIER_FIXUP_1247) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3060.x = _RESERVED_IDENTIFIER_FIXUP_1253;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3880;
    if (_RESERVED_IDENTIFIER_FIXUP_1253 != (-_RESERVED_IDENTIFIER_FIXUP_1253))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1265 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3299;
        _RESERVED_IDENTIFIER_FIXUP_3299.x = _RESERVED_IDENTIFIER_FIXUP_1265.x;
        _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_1265.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_3299.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3303;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_1275.x;
        _RESERVED_IDENTIFIER_FIXUP_3303.y = _RESERVED_IDENTIFIER_FIXUP_1275.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1285 = _RESERVED_IDENTIFIER_FIXUP_3299.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3307;
        _RESERVED_IDENTIFIER_FIXUP_3307.x = _RESERVED_IDENTIFIER_FIXUP_1285.x;
        _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_1285.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_3299.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3311;
        _RESERVED_IDENTIFIER_FIXUP_3311.x = _RESERVED_IDENTIFIER_FIXUP_1295.x;
        _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_1295.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_3299.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3315;
        _RESERVED_IDENTIFIER_FIXUP_3315.x = _RESERVED_IDENTIFIER_FIXUP_1305.x;
        _RESERVED_IDENTIFIER_FIXUP_3315.y = _RESERVED_IDENTIFIER_FIXUP_1305.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_3299.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3319;
        _RESERVED_IDENTIFIER_FIXUP_3319.x = _RESERVED_IDENTIFIER_FIXUP_1315.x;
        _RESERVED_IDENTIFIER_FIXUP_3319.y = _RESERVED_IDENTIFIER_FIXUP_1315.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1325 = _RESERVED_IDENTIFIER_FIXUP_3299.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3323;
        _RESERVED_IDENTIFIER_FIXUP_3323.x = _RESERVED_IDENTIFIER_FIXUP_1325.x;
        _RESERVED_IDENTIFIER_FIXUP_3323.y = _RESERVED_IDENTIFIER_FIXUP_1325.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1335 = _RESERVED_IDENTIFIER_FIXUP_3299.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3327;
        _RESERVED_IDENTIFIER_FIXUP_3327.x = _RESERVED_IDENTIFIER_FIXUP_1335.x;
        _RESERVED_IDENTIFIER_FIXUP_3327.y = _RESERVED_IDENTIFIER_FIXUP_1335.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_3299.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3331;
        _RESERVED_IDENTIFIER_FIXUP_3331.x = _RESERVED_IDENTIFIER_FIXUP_1345.x;
        _RESERVED_IDENTIFIER_FIXUP_3331.y = _RESERVED_IDENTIFIER_FIXUP_1345.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1353 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1353.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1353.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1359 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3303.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3307.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3311.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3315.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3315.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1399 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_3319.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3323.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3327.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3331.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3331.xy;
        float param_9 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1439 = hdLod5(param_8, param_9);
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3303.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1359.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3307.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1359.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3311.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1359.w = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3319.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1399.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3323.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1399.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3327.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1399.w = hdLod5(param_20, param_21).x;
        float _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_1439.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3396 = _RESERVED_IDENTIFIER_FIXUP_1439;
        _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_1479;
        float _RESERVED_IDENTIFIER_FIXUP_1484 = float(_RESERVED_IDENTIFIER_FIXUP_1479 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_1484;
        float _RESERVED_IDENTIFIER_FIXUP_1487 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1359 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_1487;
        float _RESERVED_IDENTIFIER_FIXUP_1490 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1399 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3396.z = _RESERVED_IDENTIFIER_FIXUP_1490;
        float _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_1487 + _RESERVED_IDENTIFIER_FIXUP_1490;
        _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_1496;
        float _RESERVED_IDENTIFIER_FIXUP_1502 = _RESERVED_IDENTIFIER_FIXUP_1484 + _RESERVED_IDENTIFIER_FIXUP_1496;
        _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_1502;
        _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_1502 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3880 = _RESERVED_IDENTIFIER_FIXUP_3396;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1515 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3060.y = _RESERVED_IDENTIFIER_FIXUP_1515;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3881;
        if (_RESERVED_IDENTIFIER_FIXUP_1515 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1524 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3233 = _RESERVED_IDENTIFIER_FIXUP_3060;
            _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_1524.x;
            _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_1524.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_3233.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3237;
            _RESERVED_IDENTIFIER_FIXUP_3237.x = _RESERVED_IDENTIFIER_FIXUP_1534.x;
            _RESERVED_IDENTIFIER_FIXUP_3237.y = _RESERVED_IDENTIFIER_FIXUP_1534.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_3233.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3241;
            _RESERVED_IDENTIFIER_FIXUP_3241.x = _RESERVED_IDENTIFIER_FIXUP_1544.x;
            _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_1544.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1554 = _RESERVED_IDENTIFIER_FIXUP_3233.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3245;
            _RESERVED_IDENTIFIER_FIXUP_3245.x = _RESERVED_IDENTIFIER_FIXUP_1554.x;
            _RESERVED_IDENTIFIER_FIXUP_3245.y = _RESERVED_IDENTIFIER_FIXUP_1554.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_3233.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3249;
            _RESERVED_IDENTIFIER_FIXUP_3249.x = _RESERVED_IDENTIFIER_FIXUP_1564.x;
            _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_1564.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1572 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1572.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1572.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1578 = hdLod6(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_3237.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3241.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3245.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3249.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3237.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1578.y = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3241.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1578.z = hdLod6(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3245.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1578.w = hdLod6(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3249.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1641 = hdLod6(param_30, param_31).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_1641;
            float _RESERVED_IDENTIFIER_FIXUP_1646 = float(_RESERVED_IDENTIFIER_FIXUP_1641 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_1646;
            float _RESERVED_IDENTIFIER_FIXUP_1649 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1578 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_1649;
            float _RESERVED_IDENTIFIER_FIXUP_1655 = _RESERVED_IDENTIFIER_FIXUP_1646 + _RESERVED_IDENTIFIER_FIXUP_1649;
            _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_1655;
            _RESERVED_IDENTIFIER_FIXUP_3233.x = _RESERVED_IDENTIFIER_FIXUP_1655 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3881 = _RESERVED_IDENTIFIER_FIXUP_3233;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1668 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3077 = _RESERVED_IDENTIFIER_FIXUP_3060;
            _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_1668;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3882;
            if (_RESERVED_IDENTIFIER_FIXUP_1668 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1677 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3167 = _RESERVED_IDENTIFIER_FIXUP_3077;
                _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1677.x;
                _RESERVED_IDENTIFIER_FIXUP_3167.z = _RESERVED_IDENTIFIER_FIXUP_1677.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1687 = _RESERVED_IDENTIFIER_FIXUP_3167.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3171;
                _RESERVED_IDENTIFIER_FIXUP_3171.x = _RESERVED_IDENTIFIER_FIXUP_1687.x;
                _RESERVED_IDENTIFIER_FIXUP_3171.y = _RESERVED_IDENTIFIER_FIXUP_1687.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_3167.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3175;
                _RESERVED_IDENTIFIER_FIXUP_3175.x = _RESERVED_IDENTIFIER_FIXUP_1697.x;
                _RESERVED_IDENTIFIER_FIXUP_3175.y = _RESERVED_IDENTIFIER_FIXUP_1697.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_3167.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3179;
                _RESERVED_IDENTIFIER_FIXUP_3179.x = _RESERVED_IDENTIFIER_FIXUP_1707.x;
                _RESERVED_IDENTIFIER_FIXUP_3179.y = _RESERVED_IDENTIFIER_FIXUP_1707.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1717 = _RESERVED_IDENTIFIER_FIXUP_3167.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3183;
                _RESERVED_IDENTIFIER_FIXUP_3183.x = _RESERVED_IDENTIFIER_FIXUP_1717.x;
                _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1717.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1725 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1725.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1725.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1731 = hdLod7(param_32, param_33);
                _RESERVED_IDENTIFIER_FIXUP_3171.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3175.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3179.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3183.w = 0.0;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3171.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1731.y = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3175.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1731.z = hdLod7(param_36, param_37).x;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3179.xy;
                float param_39 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1731.w = hdLod7(param_38, param_39).x;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3183.xy;
                float param_41 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1794 = hdLod7(param_40, param_41).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1794;
                float _RESERVED_IDENTIFIER_FIXUP_1799 = float(_RESERVED_IDENTIFIER_FIXUP_1794 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1799;
                float _RESERVED_IDENTIFIER_FIXUP_1802 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1731 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3167.z = _RESERVED_IDENTIFIER_FIXUP_1802;
                float _RESERVED_IDENTIFIER_FIXUP_1808 = _RESERVED_IDENTIFIER_FIXUP_1799 + _RESERVED_IDENTIFIER_FIXUP_1802;
                _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1808;
                _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_1808 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3882 = _RESERVED_IDENTIFIER_FIXUP_3167;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_1204.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_1204.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1824 = (_RESERVED_IDENTIFIER_FIXUP_1204.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3086;
                _RESERVED_IDENTIFIER_FIXUP_3086.x = _RESERVED_IDENTIFIER_FIXUP_1824.x;
                _RESERVED_IDENTIFIER_FIXUP_3086.y = _RESERVED_IDENTIFIER_FIXUP_1824.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1834 = _RESERVED_IDENTIFIER_FIXUP_3086.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3090;
                _RESERVED_IDENTIFIER_FIXUP_3090.x = _RESERVED_IDENTIFIER_FIXUP_1834.x;
                _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1834.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1844 = _RESERVED_IDENTIFIER_FIXUP_3086.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3094;
                _RESERVED_IDENTIFIER_FIXUP_3094.x = _RESERVED_IDENTIFIER_FIXUP_1844.x;
                _RESERVED_IDENTIFIER_FIXUP_3094.y = _RESERVED_IDENTIFIER_FIXUP_1844.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1854 = _RESERVED_IDENTIFIER_FIXUP_3086.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3098;
                _RESERVED_IDENTIFIER_FIXUP_3098.x = _RESERVED_IDENTIFIER_FIXUP_1854.x;
                _RESERVED_IDENTIFIER_FIXUP_3098.y = _RESERVED_IDENTIFIER_FIXUP_1854.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1864 = _RESERVED_IDENTIFIER_FIXUP_3086.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3102;
                _RESERVED_IDENTIFIER_FIXUP_3102.x = _RESERVED_IDENTIFIER_FIXUP_1864.x;
                _RESERVED_IDENTIFIER_FIXUP_3102.y = _RESERVED_IDENTIFIER_FIXUP_1864.y;
                _RESERVED_IDENTIFIER_FIXUP_3086.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3086.xy;
                float param_43 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1878 = hdLod8(param_42, param_43);
                _RESERVED_IDENTIFIER_FIXUP_3090.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3094.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3098.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3102.w = 0.0;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3090.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1878.y = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3094.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1878.z = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3098.xy;
                float param_49 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1878.w = hdLod8(param_48, param_49).x;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3102.xy;
                float param_51 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1941 = hdLod8(param_50, param_51).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3142 = _RESERVED_IDENTIFIER_FIXUP_3077;
                _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1941;
                float _RESERVED_IDENTIFIER_FIXUP_1946 = float(_RESERVED_IDENTIFIER_FIXUP_1941 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1946;
                float _RESERVED_IDENTIFIER_FIXUP_1949 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1878 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3142.z = _RESERVED_IDENTIFIER_FIXUP_1949;
                float _RESERVED_IDENTIFIER_FIXUP_1955 = _RESERVED_IDENTIFIER_FIXUP_1946 + _RESERVED_IDENTIFIER_FIXUP_1949;
                _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1955;
                float _RESERVED_IDENTIFIER_FIXUP_1963 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3142.z = _RESERVED_IDENTIFIER_FIXUP_1963;
                float _RESERVED_IDENTIFIER_FIXUP_1969 = clamp((_RESERVED_IDENTIFIER_FIXUP_1963 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3142.z = _RESERVED_IDENTIFIER_FIXUP_1969;
                float _RESERVED_IDENTIFIER_FIXUP_1974 = (_RESERVED_IDENTIFIER_FIXUP_1955 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1974;
                _RESERVED_IDENTIFIER_FIXUP_3142.x = (_RESERVED_IDENTIFIER_FIXUP_1969 * _RESERVED_IDENTIFIER_FIXUP_1974) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3882 = _RESERVED_IDENTIFIER_FIXUP_3142;
            }
            _RESERVED_IDENTIFIER_FIXUP_3881 = _RESERVED_IDENTIFIER_FIXUP_3882;
        }
        _RESERVED_IDENTIFIER_FIXUP_3880 = _RESERVED_IDENTIFIER_FIXUP_3881;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3419 = _RESERVED_IDENTIFIER_FIXUP_3880;
    _RESERVED_IDENTIFIER_FIXUP_3419.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2002 = _RESERVED_IDENTIFIER_FIXUP_1234.xyz * _RESERVED_IDENTIFIER_FIXUP_3419.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3421 = _RESERVED_IDENTIFIER_FIXUP_1234;
    _RESERVED_IDENTIFIER_FIXUP_3421.x = _RESERVED_IDENTIFIER_FIXUP_2002.x;
    _RESERVED_IDENTIFIER_FIXUP_3421.y = _RESERVED_IDENTIFIER_FIXUP_2002.y;
    _RESERVED_IDENTIFIER_FIXUP_3421.z = _RESERVED_IDENTIFIER_FIXUP_2002.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2013 = _RESERVED_IDENTIFIER_FIXUP_3421.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3878).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3427 = _RESERVED_IDENTIFIER_FIXUP_3421;
    _RESERVED_IDENTIFIER_FIXUP_3427.x = _RESERVED_IDENTIFIER_FIXUP_2013.x;
    _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_2013.y;
    _RESERVED_IDENTIFIER_FIXUP_3427.z = _RESERVED_IDENTIFIER_FIXUP_2013.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2024 = _RESERVED_IDENTIFIER_FIXUP_3427.xyz + _RESERVED_IDENTIFIER_FIXUP_3427.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_3427;
    _RESERVED_IDENTIFIER_FIXUP_3433.x = _RESERVED_IDENTIFIER_FIXUP_2024.x;
    _RESERVED_IDENTIFIER_FIXUP_3433.y = _RESERVED_IDENTIFIER_FIXUP_2024.y;
    _RESERVED_IDENTIFIER_FIXUP_3433.z = _RESERVED_IDENTIFIER_FIXUP_2024.z;
    _RESERVED_IDENTIFIER_FIXUP_3419.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3419.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3419.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2049 = (_RESERVED_IDENTIFIER_FIXUP_3419.yzw * _RESERVED_IDENTIFIER_FIXUP_3419.xxx) + _RESERVED_IDENTIFIER_FIXUP_3433.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3445 = _RESERVED_IDENTIFIER_FIXUP_3433;
    _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_2049.x;
    _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2049.y;
    _RESERVED_IDENTIFIER_FIXUP_3445.z = _RESERVED_IDENTIFIER_FIXUP_2049.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2062 = _RESERVED_IDENTIFIER_FIXUP_3445.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3451 = _RESERVED_IDENTIFIER_FIXUP_3445;
    _RESERVED_IDENTIFIER_FIXUP_3451.x = _RESERVED_IDENTIFIER_FIXUP_2062.x;
    _RESERVED_IDENTIFIER_FIXUP_3451.y = _RESERVED_IDENTIFIER_FIXUP_2062.y;
    _RESERVED_IDENTIFIER_FIXUP_3451.z = _RESERVED_IDENTIFIER_FIXUP_2062.z;
    vec2 param_52 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2121 = hdTex0(param_52);
    vec2 param_53 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2125 = hdTex1(param_53);
    vec2 param_54 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2129 = hdTex2(param_54);
    vec2 param_55 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2133 = hdTex3(param_55);
    float _RESERVED_IDENTIFIER_FIXUP_2137 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2133.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3465 = _RESERVED_IDENTIFIER_FIXUP_2133;
    _RESERVED_IDENTIFIER_FIXUP_3465.z = _RESERVED_IDENTIFIER_FIXUP_2137;
    _RESERVED_IDENTIFIER_FIXUP_3465.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2137;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2147 = _RESERVED_IDENTIFIER_FIXUP_2125 * _RESERVED_IDENTIFIER_FIXUP_3465.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2159 = (_RESERVED_IDENTIFIER_FIXUP_2129 * _RESERVED_IDENTIFIER_FIXUP_3465.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2121 * _RESERVED_IDENTIFIER_FIXUP_3465.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2147);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3472 = _RESERVED_IDENTIFIER_FIXUP_2147;
    _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_1241;
    float _RESERVED_IDENTIFIER_FIXUP_2172 = clamp((_RESERVED_IDENTIFIER_FIXUP_1241 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_2172;
    float _RESERVED_IDENTIFIER_FIXUP_2178 = ((-_RESERVED_IDENTIFIER_FIXUP_2172) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_2178;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3889;
    if (_RESERVED_IDENTIFIER_FIXUP_2178 != (-_RESERVED_IDENTIFIER_FIXUP_2178))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2190 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3711;
        _RESERVED_IDENTIFIER_FIXUP_3711.x = _RESERVED_IDENTIFIER_FIXUP_2190.x;
        _RESERVED_IDENTIFIER_FIXUP_3711.y = _RESERVED_IDENTIFIER_FIXUP_2190.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2200 = _RESERVED_IDENTIFIER_FIXUP_3711.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3715;
        _RESERVED_IDENTIFIER_FIXUP_3715.x = _RESERVED_IDENTIFIER_FIXUP_2200.x;
        _RESERVED_IDENTIFIER_FIXUP_3715.y = _RESERVED_IDENTIFIER_FIXUP_2200.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2210 = _RESERVED_IDENTIFIER_FIXUP_3711.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3719;
        _RESERVED_IDENTIFIER_FIXUP_3719.x = _RESERVED_IDENTIFIER_FIXUP_2210.x;
        _RESERVED_IDENTIFIER_FIXUP_3719.y = _RESERVED_IDENTIFIER_FIXUP_2210.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2220 = _RESERVED_IDENTIFIER_FIXUP_3711.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3723;
        _RESERVED_IDENTIFIER_FIXUP_3723.x = _RESERVED_IDENTIFIER_FIXUP_2220.x;
        _RESERVED_IDENTIFIER_FIXUP_3723.y = _RESERVED_IDENTIFIER_FIXUP_2220.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2230 = _RESERVED_IDENTIFIER_FIXUP_3711.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3727;
        _RESERVED_IDENTIFIER_FIXUP_3727.x = _RESERVED_IDENTIFIER_FIXUP_2230.x;
        _RESERVED_IDENTIFIER_FIXUP_3727.y = _RESERVED_IDENTIFIER_FIXUP_2230.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2240 = _RESERVED_IDENTIFIER_FIXUP_3711.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3731;
        _RESERVED_IDENTIFIER_FIXUP_3731.x = _RESERVED_IDENTIFIER_FIXUP_2240.x;
        _RESERVED_IDENTIFIER_FIXUP_3731.y = _RESERVED_IDENTIFIER_FIXUP_2240.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2250 = _RESERVED_IDENTIFIER_FIXUP_3711.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3735;
        _RESERVED_IDENTIFIER_FIXUP_3735.x = _RESERVED_IDENTIFIER_FIXUP_2250.x;
        _RESERVED_IDENTIFIER_FIXUP_3735.y = _RESERVED_IDENTIFIER_FIXUP_2250.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2260 = _RESERVED_IDENTIFIER_FIXUP_3711.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3739;
        _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_2260.x;
        _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2260.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2270 = _RESERVED_IDENTIFIER_FIXUP_3711.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3743;
        _RESERVED_IDENTIFIER_FIXUP_3743.x = _RESERVED_IDENTIFIER_FIXUP_2270.x;
        _RESERVED_IDENTIFIER_FIXUP_3743.y = _RESERVED_IDENTIFIER_FIXUP_2270.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2278 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2278.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2278.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2284 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3715.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3719.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3723.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3727.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3727.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2324 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3731.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3735.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3739.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3743.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3743.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2364 = hdLod5(param_60, param_61);
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3715.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2284.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3719.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2284.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3723.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2284.w = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3731.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2324.y = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3735.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2324.z = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3739.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2324.w = hdLod5(param_72, param_73).x;
        float _RESERVED_IDENTIFIER_FIXUP_2404 = _RESERVED_IDENTIFIER_FIXUP_2364.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3808 = _RESERVED_IDENTIFIER_FIXUP_2364;
        _RESERVED_IDENTIFIER_FIXUP_3808.x = _RESERVED_IDENTIFIER_FIXUP_2404;
        float _RESERVED_IDENTIFIER_FIXUP_2409 = float(_RESERVED_IDENTIFIER_FIXUP_2404 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3808.x = _RESERVED_IDENTIFIER_FIXUP_2409;
        float _RESERVED_IDENTIFIER_FIXUP_2412 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2284 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_2412;
        float _RESERVED_IDENTIFIER_FIXUP_2415 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2324 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3808.z = _RESERVED_IDENTIFIER_FIXUP_2415;
        float _RESERVED_IDENTIFIER_FIXUP_2421 = _RESERVED_IDENTIFIER_FIXUP_2412 + _RESERVED_IDENTIFIER_FIXUP_2415;
        _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_2421;
        float _RESERVED_IDENTIFIER_FIXUP_2427 = _RESERVED_IDENTIFIER_FIXUP_2409 + _RESERVED_IDENTIFIER_FIXUP_2421;
        _RESERVED_IDENTIFIER_FIXUP_3808.x = _RESERVED_IDENTIFIER_FIXUP_2427;
        _RESERVED_IDENTIFIER_FIXUP_3808.x = _RESERVED_IDENTIFIER_FIXUP_2427 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3889 = _RESERVED_IDENTIFIER_FIXUP_3808;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2440 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3472.y = _RESERVED_IDENTIFIER_FIXUP_2440;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3890;
        if (_RESERVED_IDENTIFIER_FIXUP_2440 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2449 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3645 = _RESERVED_IDENTIFIER_FIXUP_3472;
            _RESERVED_IDENTIFIER_FIXUP_3645.y = _RESERVED_IDENTIFIER_FIXUP_2449.x;
            _RESERVED_IDENTIFIER_FIXUP_3645.z = _RESERVED_IDENTIFIER_FIXUP_2449.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2459 = _RESERVED_IDENTIFIER_FIXUP_3645.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3649;
            _RESERVED_IDENTIFIER_FIXUP_3649.x = _RESERVED_IDENTIFIER_FIXUP_2459.x;
            _RESERVED_IDENTIFIER_FIXUP_3649.y = _RESERVED_IDENTIFIER_FIXUP_2459.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2469 = _RESERVED_IDENTIFIER_FIXUP_3645.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3653;
            _RESERVED_IDENTIFIER_FIXUP_3653.x = _RESERVED_IDENTIFIER_FIXUP_2469.x;
            _RESERVED_IDENTIFIER_FIXUP_3653.y = _RESERVED_IDENTIFIER_FIXUP_2469.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2479 = _RESERVED_IDENTIFIER_FIXUP_3645.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3657;
            _RESERVED_IDENTIFIER_FIXUP_3657.x = _RESERVED_IDENTIFIER_FIXUP_2479.x;
            _RESERVED_IDENTIFIER_FIXUP_3657.y = _RESERVED_IDENTIFIER_FIXUP_2479.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2489 = _RESERVED_IDENTIFIER_FIXUP_3645.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3661;
            _RESERVED_IDENTIFIER_FIXUP_3661.x = _RESERVED_IDENTIFIER_FIXUP_2489.x;
            _RESERVED_IDENTIFIER_FIXUP_3661.y = _RESERVED_IDENTIFIER_FIXUP_2489.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2497 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2497.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2497.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2503 = hdLod6(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3649.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3653.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3657.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3661.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3649.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2503.y = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3653.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2503.z = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3657.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2503.w = hdLod6(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3661.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2566 = hdLod6(param_82, param_83).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3645.y = _RESERVED_IDENTIFIER_FIXUP_2566;
            float _RESERVED_IDENTIFIER_FIXUP_2571 = float(_RESERVED_IDENTIFIER_FIXUP_2566 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3645.y = _RESERVED_IDENTIFIER_FIXUP_2571;
            float _RESERVED_IDENTIFIER_FIXUP_2574 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2503 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3645.z = _RESERVED_IDENTIFIER_FIXUP_2574;
            float _RESERVED_IDENTIFIER_FIXUP_2580 = _RESERVED_IDENTIFIER_FIXUP_2571 + _RESERVED_IDENTIFIER_FIXUP_2574;
            _RESERVED_IDENTIFIER_FIXUP_3645.y = _RESERVED_IDENTIFIER_FIXUP_2580;
            _RESERVED_IDENTIFIER_FIXUP_3645.x = _RESERVED_IDENTIFIER_FIXUP_2580 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3890 = _RESERVED_IDENTIFIER_FIXUP_3645;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2593 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3489 = _RESERVED_IDENTIFIER_FIXUP_3472;
            _RESERVED_IDENTIFIER_FIXUP_3489.y = _RESERVED_IDENTIFIER_FIXUP_2593;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3891;
            if (_RESERVED_IDENTIFIER_FIXUP_2593 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2602 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3579 = _RESERVED_IDENTIFIER_FIXUP_3489;
                _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2602.x;
                _RESERVED_IDENTIFIER_FIXUP_3579.z = _RESERVED_IDENTIFIER_FIXUP_2602.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2612 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3583;
                _RESERVED_IDENTIFIER_FIXUP_3583.x = _RESERVED_IDENTIFIER_FIXUP_2612.x;
                _RESERVED_IDENTIFIER_FIXUP_3583.y = _RESERVED_IDENTIFIER_FIXUP_2612.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2622 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3587;
                _RESERVED_IDENTIFIER_FIXUP_3587.x = _RESERVED_IDENTIFIER_FIXUP_2622.x;
                _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2622.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2632 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3591;
                _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2632.x;
                _RESERVED_IDENTIFIER_FIXUP_3591.y = _RESERVED_IDENTIFIER_FIXUP_2632.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2642 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3595;
                _RESERVED_IDENTIFIER_FIXUP_3595.x = _RESERVED_IDENTIFIER_FIXUP_2642.x;
                _RESERVED_IDENTIFIER_FIXUP_3595.y = _RESERVED_IDENTIFIER_FIXUP_2642.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2650 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2650.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2650.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2656 = hdLod7(param_84, param_85);
                _RESERVED_IDENTIFIER_FIXUP_3583.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3587.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3591.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3595.w = 0.0;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3583.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2656.y = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3587.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2656.z = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3591.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2656.w = hdLod7(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3595.xy;
                float param_93 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2719 = hdLod7(param_92, param_93).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2719;
                float _RESERVED_IDENTIFIER_FIXUP_2724 = float(_RESERVED_IDENTIFIER_FIXUP_2719 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2724;
                float _RESERVED_IDENTIFIER_FIXUP_2727 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2656 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3579.z = _RESERVED_IDENTIFIER_FIXUP_2727;
                float _RESERVED_IDENTIFIER_FIXUP_2733 = _RESERVED_IDENTIFIER_FIXUP_2724 + _RESERVED_IDENTIFIER_FIXUP_2727;
                _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2733;
                _RESERVED_IDENTIFIER_FIXUP_3579.x = _RESERVED_IDENTIFIER_FIXUP_2733 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3891 = _RESERVED_IDENTIFIER_FIXUP_3579;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_2129.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2129.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2749 = (_RESERVED_IDENTIFIER_FIXUP_2129.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3498;
                _RESERVED_IDENTIFIER_FIXUP_3498.x = _RESERVED_IDENTIFIER_FIXUP_2749.x;
                _RESERVED_IDENTIFIER_FIXUP_3498.y = _RESERVED_IDENTIFIER_FIXUP_2749.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2759 = _RESERVED_IDENTIFIER_FIXUP_3498.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3502;
                _RESERVED_IDENTIFIER_FIXUP_3502.x = _RESERVED_IDENTIFIER_FIXUP_2759.x;
                _RESERVED_IDENTIFIER_FIXUP_3502.y = _RESERVED_IDENTIFIER_FIXUP_2759.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2769 = _RESERVED_IDENTIFIER_FIXUP_3498.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3506;
                _RESERVED_IDENTIFIER_FIXUP_3506.x = _RESERVED_IDENTIFIER_FIXUP_2769.x;
                _RESERVED_IDENTIFIER_FIXUP_3506.y = _RESERVED_IDENTIFIER_FIXUP_2769.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2779 = _RESERVED_IDENTIFIER_FIXUP_3498.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3510;
                _RESERVED_IDENTIFIER_FIXUP_3510.x = _RESERVED_IDENTIFIER_FIXUP_2779.x;
                _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_2779.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2789 = _RESERVED_IDENTIFIER_FIXUP_3498.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3514;
                _RESERVED_IDENTIFIER_FIXUP_3514.x = _RESERVED_IDENTIFIER_FIXUP_2789.x;
                _RESERVED_IDENTIFIER_FIXUP_3514.y = _RESERVED_IDENTIFIER_FIXUP_2789.y;
                _RESERVED_IDENTIFIER_FIXUP_3498.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3498.xy;
                float param_95 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2803 = hdLod8(param_94, param_95);
                _RESERVED_IDENTIFIER_FIXUP_3502.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3506.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3510.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3514.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3502.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2803.y = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3506.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2803.z = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3510.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2803.w = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3514.xy;
                float param_103 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2866 = hdLod8(param_102, param_103).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3554 = _RESERVED_IDENTIFIER_FIXUP_3489;
                _RESERVED_IDENTIFIER_FIXUP_3554.y = _RESERVED_IDENTIFIER_FIXUP_2866;
                float _RESERVED_IDENTIFIER_FIXUP_2871 = float(_RESERVED_IDENTIFIER_FIXUP_2866 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3554.y = _RESERVED_IDENTIFIER_FIXUP_2871;
                float _RESERVED_IDENTIFIER_FIXUP_2874 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2803 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3554.z = _RESERVED_IDENTIFIER_FIXUP_2874;
                float _RESERVED_IDENTIFIER_FIXUP_2880 = _RESERVED_IDENTIFIER_FIXUP_2871 + _RESERVED_IDENTIFIER_FIXUP_2874;
                _RESERVED_IDENTIFIER_FIXUP_3554.y = _RESERVED_IDENTIFIER_FIXUP_2880;
                float _RESERVED_IDENTIFIER_FIXUP_2888 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3554.z = _RESERVED_IDENTIFIER_FIXUP_2888;
                float _RESERVED_IDENTIFIER_FIXUP_2894 = clamp((_RESERVED_IDENTIFIER_FIXUP_2888 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3554.z = _RESERVED_IDENTIFIER_FIXUP_2894;
                float _RESERVED_IDENTIFIER_FIXUP_2899 = (_RESERVED_IDENTIFIER_FIXUP_2880 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3554.y = _RESERVED_IDENTIFIER_FIXUP_2899;
                _RESERVED_IDENTIFIER_FIXUP_3554.x = (_RESERVED_IDENTIFIER_FIXUP_2894 * _RESERVED_IDENTIFIER_FIXUP_2899) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3891 = _RESERVED_IDENTIFIER_FIXUP_3554;
            }
            _RESERVED_IDENTIFIER_FIXUP_3890 = _RESERVED_IDENTIFIER_FIXUP_3891;
        }
        _RESERVED_IDENTIFIER_FIXUP_3889 = _RESERVED_IDENTIFIER_FIXUP_3890;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2914 = (_RESERVED_IDENTIFIER_FIXUP_3889.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3829 = _RESERVED_IDENTIFIER_FIXUP_3889;
    _RESERVED_IDENTIFIER_FIXUP_3829.y = _RESERVED_IDENTIFIER_FIXUP_2914;
    _RESERVED_IDENTIFIER_FIXUP_3829.y = _RESERVED_IDENTIFIER_FIXUP_2914;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2927 = _RESERVED_IDENTIFIER_FIXUP_2159.xyz * _RESERVED_IDENTIFIER_FIXUP_3829.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3835 = _RESERVED_IDENTIFIER_FIXUP_2159;
    _RESERVED_IDENTIFIER_FIXUP_3835.x = _RESERVED_IDENTIFIER_FIXUP_2927.x;
    _RESERVED_IDENTIFIER_FIXUP_3835.y = _RESERVED_IDENTIFIER_FIXUP_2927.y;
    _RESERVED_IDENTIFIER_FIXUP_3835.z = _RESERVED_IDENTIFIER_FIXUP_2927.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2938 = _RESERVED_IDENTIFIER_FIXUP_3835.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3841 = _RESERVED_IDENTIFIER_FIXUP_3835;
    _RESERVED_IDENTIFIER_FIXUP_3841.x = _RESERVED_IDENTIFIER_FIXUP_2938.x;
    _RESERVED_IDENTIFIER_FIXUP_3841.y = _RESERVED_IDENTIFIER_FIXUP_2938.y;
    _RESERVED_IDENTIFIER_FIXUP_3841.z = _RESERVED_IDENTIFIER_FIXUP_2938.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2949 = _RESERVED_IDENTIFIER_FIXUP_3841.xyz + _RESERVED_IDENTIFIER_FIXUP_3841.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3847 = _RESERVED_IDENTIFIER_FIXUP_3841;
    _RESERVED_IDENTIFIER_FIXUP_3847.x = _RESERVED_IDENTIFIER_FIXUP_2949.x;
    _RESERVED_IDENTIFIER_FIXUP_3847.y = _RESERVED_IDENTIFIER_FIXUP_2949.y;
    _RESERVED_IDENTIFIER_FIXUP_3847.z = _RESERVED_IDENTIFIER_FIXUP_2949.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2960 = _RESERVED_IDENTIFIER_FIXUP_3847.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3829.y = _RESERVED_IDENTIFIER_FIXUP_2960.x;
    _RESERVED_IDENTIFIER_FIXUP_3829.z = _RESERVED_IDENTIFIER_FIXUP_2960.y;
    _RESERVED_IDENTIFIER_FIXUP_3829.w = _RESERVED_IDENTIFIER_FIXUP_2960.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2974 = (_RESERVED_IDENTIFIER_FIXUP_3829.yzw * _RESERVED_IDENTIFIER_FIXUP_3829.xxx) + _RESERVED_IDENTIFIER_FIXUP_3847.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3859 = _RESERVED_IDENTIFIER_FIXUP_3847;
    _RESERVED_IDENTIFIER_FIXUP_3859.x = _RESERVED_IDENTIFIER_FIXUP_2974.x;
    _RESERVED_IDENTIFIER_FIXUP_3859.y = _RESERVED_IDENTIFIER_FIXUP_2974.y;
    _RESERVED_IDENTIFIER_FIXUP_3859.z = _RESERVED_IDENTIFIER_FIXUP_2974.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2987 = _RESERVED_IDENTIFIER_FIXUP_3859.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3865 = _RESERVED_IDENTIFIER_FIXUP_3859;
    _RESERVED_IDENTIFIER_FIXUP_3865.x = _RESERVED_IDENTIFIER_FIXUP_2987.x;
    _RESERVED_IDENTIFIER_FIXUP_3865.y = _RESERVED_IDENTIFIER_FIXUP_2987.y;
    _RESERVED_IDENTIFIER_FIXUP_3865.z = _RESERVED_IDENTIFIER_FIXUP_2987.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3865.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1051 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1060;
    if (_RESERVED_IDENTIFIER_FIXUP_1051)
    {
        _RESERVED_IDENTIFIER_FIXUP_1060 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1060 = _RESERVED_IDENTIFIER_FIXUP_1051;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1060)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1097 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3451.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1124 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3046;
    if (_RESERVED_IDENTIFIER_FIXUP_1097 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3046 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1097), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1124);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3046 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1124);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3046;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2914);
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
        vec2 hdB147 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB147.x;
        r1.y = hdB147.y;
        vec2 hdB168 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB168.x;
        r2.y = hdB168.y;
        vec2 hdB179 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB179.x;
        r3.y = hdB179.y;
        vec2 hdB190 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB190.x;
        r4.y = hdB190.y;
        vec2 hdB201 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB201.x;
        r5.y = hdB201.y;
        vec2 hdB212 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB212.x;
        r6.y = hdB212.y;
        vec2 hdB223 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB223.x;
        r7.y = hdB223.y;
        vec2 hdB234 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB234.x;
        r8.y = hdB234.y;
        vec4 hdB239 = r1;
        vec2 hdB245 = hdB239.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB245.x;
        r1.y = hdB245.y;
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
            vec2 hdB432 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB432.x;
            r1.z = hdB432.y;
            vec2 hdB442 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB442.x;
            r2.y = hdB442.y;
            vec2 hdB452 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB452.x;
            r3.y = hdB452.y;
            vec2 hdB462 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB462.x;
            r4.y = hdB462.y;
            vec2 hdB472 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB472.x;
            r5.y = hdB472.y;
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
                vec2 hdB588 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB588.x;
                r1.z = hdB588.y;
                vec2 hdB598 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB598.x;
                r2.y = hdB598.y;
                vec2 hdB608 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB608.x;
                r3.y = hdB608.y;
                vec2 hdB618 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB618.x;
                r4.y = hdB618.y;
                vec2 hdB628 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB628.x;
                r5.y = hdB628.y;
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
                vec2 hdB736 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB736.x;
                r3.y = hdB736.y;
                vec2 hdB746 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB746.x;
                r4.y = hdB746.y;
                vec2 hdB756 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB756.x;
                r5.y = hdB756.y;
                vec2 hdB766 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB766.x;
                r6.y = hdB766.y;
                vec2 hdB776 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB776.x;
                r7.y = hdB776.y;
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
    vec4 hdB906 = r0;
    vec3 hdB910 = hdB906.xyz * r1.yyy;
    r0.x = hdB910.x;
    r0.y = hdB910.y;
    r0.z = hdB910.z;
    vec4 hdB917 = r0;
    vec3 hdB921 = hdB917.xyz * v0.xyz;
    r0.x = hdB921.x;
    r0.y = hdB921.y;
    r0.z = hdB921.z;
    vec4 hdB928 = r0;
    vec4 hdB930 = r0;
    vec3 hdB932 = hdB928.xyz + hdB930.xyz;
    r0.x = hdB932.x;
    r0.y = hdB932.y;
    r0.z = hdB932.z;
    vec3 hdB943 = r0.www * v1.xyz;
    r1.y = hdB943.x;
    r1.z = hdB943.y;
    r1.w = hdB943.z;
    vec4 hdB955 = r0;
    vec3 hdB957 = (r1.yzw * r1.xxx) + hdB955.xyz;
    r0.x = hdB957.x;
    r0.y = hdB957.y;
    r0.z = hdB957.z;
    vec4 hdB964 = r0;
    vec3 hdB971 = hdB964.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB971.x;
    r0.y = hdB971.y;
    r0.z = hdB971.z;
    vec3 hdB986 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB986.x;
    oC0.y = hdB986.y;
    oC0.z = hdB986.z;
    oC0.w = 1.0;
    bool hdB999 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1007;
    if (hdB999)
    {
        hdB1007 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1007 = hdB999;
    }
    if (hdB1007)
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
    bool _3388 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3398;
    if (_3388)
    {
        _3398 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3398 = _3388;
    }
    if (_3398)
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
        bool _3423 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3438;
        if (!_3423)
        {
            _3438 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3438 = _3423;
        }
        if (_3438)
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
