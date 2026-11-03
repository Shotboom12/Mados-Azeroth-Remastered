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
float _RESERVED_IDENTIFIER_FIXUP_3820;
vec4 _RESERVED_IDENTIFIER_FIXUP_3821;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1179 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1183 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1187 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1191 = hdTex3(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1201 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1179, _RESERVED_IDENTIFIER_FIXUP_1183, _RESERVED_IDENTIFIER_FIXUP_1191.xxxx), _RESERVED_IDENTIFIER_FIXUP_1187, _RESERVED_IDENTIFIER_FIXUP_1191.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1208 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3007 = _RESERVED_IDENTIFIER_FIXUP_1183;
    _RESERVED_IDENTIFIER_FIXUP_3007.x = _RESERVED_IDENTIFIER_FIXUP_1208;
    float _RESERVED_IDENTIFIER_FIXUP_1214 = clamp((_RESERVED_IDENTIFIER_FIXUP_1208 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3007.x = _RESERVED_IDENTIFIER_FIXUP_1214;
    float _RESERVED_IDENTIFIER_FIXUP_1220 = ((-_RESERVED_IDENTIFIER_FIXUP_1214) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3007.x = _RESERVED_IDENTIFIER_FIXUP_1220;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3822;
    if (_RESERVED_IDENTIFIER_FIXUP_1220 != (-_RESERVED_IDENTIFIER_FIXUP_1220))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1232 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3246;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1232.x;
        _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1232.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1242 = _RESERVED_IDENTIFIER_FIXUP_3246.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3250;
        _RESERVED_IDENTIFIER_FIXUP_3250.x = _RESERVED_IDENTIFIER_FIXUP_1242.x;
        _RESERVED_IDENTIFIER_FIXUP_3250.y = _RESERVED_IDENTIFIER_FIXUP_1242.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1252 = _RESERVED_IDENTIFIER_FIXUP_3246.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3254;
        _RESERVED_IDENTIFIER_FIXUP_3254.x = _RESERVED_IDENTIFIER_FIXUP_1252.x;
        _RESERVED_IDENTIFIER_FIXUP_3254.y = _RESERVED_IDENTIFIER_FIXUP_1252.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_3246.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3258;
        _RESERVED_IDENTIFIER_FIXUP_3258.x = _RESERVED_IDENTIFIER_FIXUP_1262.x;
        _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_1262.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_3246.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3262;
        _RESERVED_IDENTIFIER_FIXUP_3262.x = _RESERVED_IDENTIFIER_FIXUP_1272.x;
        _RESERVED_IDENTIFIER_FIXUP_3262.y = _RESERVED_IDENTIFIER_FIXUP_1272.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1282 = _RESERVED_IDENTIFIER_FIXUP_3246.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3266;
        _RESERVED_IDENTIFIER_FIXUP_3266.x = _RESERVED_IDENTIFIER_FIXUP_1282.x;
        _RESERVED_IDENTIFIER_FIXUP_3266.y = _RESERVED_IDENTIFIER_FIXUP_1282.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1292 = _RESERVED_IDENTIFIER_FIXUP_3246.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3270;
        _RESERVED_IDENTIFIER_FIXUP_3270.x = _RESERVED_IDENTIFIER_FIXUP_1292.x;
        _RESERVED_IDENTIFIER_FIXUP_3270.y = _RESERVED_IDENTIFIER_FIXUP_1292.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_3246.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3274;
        _RESERVED_IDENTIFIER_FIXUP_3274.x = _RESERVED_IDENTIFIER_FIXUP_1302.x;
        _RESERVED_IDENTIFIER_FIXUP_3274.y = _RESERVED_IDENTIFIER_FIXUP_1302.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_3246.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3278;
        _RESERVED_IDENTIFIER_FIXUP_3278.x = _RESERVED_IDENTIFIER_FIXUP_1312.x;
        _RESERVED_IDENTIFIER_FIXUP_3278.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1320 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1320.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1320.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1326 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3250.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3254.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3258.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3262.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3262.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1366 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_3266.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3270.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3274.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3278.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3278.xy;
        float param_9 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1406 = hdLod5(param_8, param_9);
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3250.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1326.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3254.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1326.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3258.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1326.w = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3266.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1366.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3270.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1366.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3274.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1366.w = hdLod5(param_20, param_21).x;
        float _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_1406.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3343 = _RESERVED_IDENTIFIER_FIXUP_1406;
        _RESERVED_IDENTIFIER_FIXUP_3343.x = _RESERVED_IDENTIFIER_FIXUP_1446;
        float _RESERVED_IDENTIFIER_FIXUP_1451 = float(_RESERVED_IDENTIFIER_FIXUP_1446 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3343.x = _RESERVED_IDENTIFIER_FIXUP_1451;
        float _RESERVED_IDENTIFIER_FIXUP_1454 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1326 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3343.y = _RESERVED_IDENTIFIER_FIXUP_1454;
        float _RESERVED_IDENTIFIER_FIXUP_1457 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1366 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3343.z = _RESERVED_IDENTIFIER_FIXUP_1457;
        float _RESERVED_IDENTIFIER_FIXUP_1463 = _RESERVED_IDENTIFIER_FIXUP_1454 + _RESERVED_IDENTIFIER_FIXUP_1457;
        _RESERVED_IDENTIFIER_FIXUP_3343.y = _RESERVED_IDENTIFIER_FIXUP_1463;
        float _RESERVED_IDENTIFIER_FIXUP_1469 = _RESERVED_IDENTIFIER_FIXUP_1451 + _RESERVED_IDENTIFIER_FIXUP_1463;
        _RESERVED_IDENTIFIER_FIXUP_3343.x = _RESERVED_IDENTIFIER_FIXUP_1469;
        _RESERVED_IDENTIFIER_FIXUP_3343.x = _RESERVED_IDENTIFIER_FIXUP_1469 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3822 = _RESERVED_IDENTIFIER_FIXUP_3343;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1482 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3007.y = _RESERVED_IDENTIFIER_FIXUP_1482;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3823;
        if (_RESERVED_IDENTIFIER_FIXUP_1482 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1491 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3180 = _RESERVED_IDENTIFIER_FIXUP_3007;
            _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_1491.x;
            _RESERVED_IDENTIFIER_FIXUP_3180.z = _RESERVED_IDENTIFIER_FIXUP_1491.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1501 = _RESERVED_IDENTIFIER_FIXUP_3180.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3184;
            _RESERVED_IDENTIFIER_FIXUP_3184.x = _RESERVED_IDENTIFIER_FIXUP_1501.x;
            _RESERVED_IDENTIFIER_FIXUP_3184.y = _RESERVED_IDENTIFIER_FIXUP_1501.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1511 = _RESERVED_IDENTIFIER_FIXUP_3180.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3188;
            _RESERVED_IDENTIFIER_FIXUP_3188.x = _RESERVED_IDENTIFIER_FIXUP_1511.x;
            _RESERVED_IDENTIFIER_FIXUP_3188.y = _RESERVED_IDENTIFIER_FIXUP_1511.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1521 = _RESERVED_IDENTIFIER_FIXUP_3180.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3192;
            _RESERVED_IDENTIFIER_FIXUP_3192.x = _RESERVED_IDENTIFIER_FIXUP_1521.x;
            _RESERVED_IDENTIFIER_FIXUP_3192.y = _RESERVED_IDENTIFIER_FIXUP_1521.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_3180.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3196;
            _RESERVED_IDENTIFIER_FIXUP_3196.x = _RESERVED_IDENTIFIER_FIXUP_1531.x;
            _RESERVED_IDENTIFIER_FIXUP_3196.y = _RESERVED_IDENTIFIER_FIXUP_1531.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1539 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1539.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1539.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1545 = hdLod6(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_3184.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3188.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3192.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3196.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3184.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1545.y = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3188.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1545.z = hdLod6(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3192.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1545.w = hdLod6(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3196.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1608 = hdLod6(param_30, param_31).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_1608;
            float _RESERVED_IDENTIFIER_FIXUP_1613 = float(_RESERVED_IDENTIFIER_FIXUP_1608 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_1613;
            float _RESERVED_IDENTIFIER_FIXUP_1616 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1545 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3180.z = _RESERVED_IDENTIFIER_FIXUP_1616;
            float _RESERVED_IDENTIFIER_FIXUP_1622 = _RESERVED_IDENTIFIER_FIXUP_1613 + _RESERVED_IDENTIFIER_FIXUP_1616;
            _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_1622;
            _RESERVED_IDENTIFIER_FIXUP_3180.x = _RESERVED_IDENTIFIER_FIXUP_1622 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3823 = _RESERVED_IDENTIFIER_FIXUP_3180;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1635 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3024 = _RESERVED_IDENTIFIER_FIXUP_3007;
            _RESERVED_IDENTIFIER_FIXUP_3024.y = _RESERVED_IDENTIFIER_FIXUP_1635;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3824;
            if (_RESERVED_IDENTIFIER_FIXUP_1635 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1644 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3114 = _RESERVED_IDENTIFIER_FIXUP_3024;
                _RESERVED_IDENTIFIER_FIXUP_3114.y = _RESERVED_IDENTIFIER_FIXUP_1644.x;
                _RESERVED_IDENTIFIER_FIXUP_3114.z = _RESERVED_IDENTIFIER_FIXUP_1644.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1654 = _RESERVED_IDENTIFIER_FIXUP_3114.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3118;
                _RESERVED_IDENTIFIER_FIXUP_3118.x = _RESERVED_IDENTIFIER_FIXUP_1654.x;
                _RESERVED_IDENTIFIER_FIXUP_3118.y = _RESERVED_IDENTIFIER_FIXUP_1654.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1664 = _RESERVED_IDENTIFIER_FIXUP_3114.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3122;
                _RESERVED_IDENTIFIER_FIXUP_3122.x = _RESERVED_IDENTIFIER_FIXUP_1664.x;
                _RESERVED_IDENTIFIER_FIXUP_3122.y = _RESERVED_IDENTIFIER_FIXUP_1664.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1674 = _RESERVED_IDENTIFIER_FIXUP_3114.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3126;
                _RESERVED_IDENTIFIER_FIXUP_3126.x = _RESERVED_IDENTIFIER_FIXUP_1674.x;
                _RESERVED_IDENTIFIER_FIXUP_3126.y = _RESERVED_IDENTIFIER_FIXUP_1674.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1684 = _RESERVED_IDENTIFIER_FIXUP_3114.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3130;
                _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1684.x;
                _RESERVED_IDENTIFIER_FIXUP_3130.y = _RESERVED_IDENTIFIER_FIXUP_1684.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1692 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1692.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1692.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1698 = hdLod7(param_32, param_33);
                _RESERVED_IDENTIFIER_FIXUP_3118.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3122.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3126.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3130.w = 0.0;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3118.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1698.y = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3122.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1698.z = hdLod7(param_36, param_37).x;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3126.xy;
                float param_39 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1698.w = hdLod7(param_38, param_39).x;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3130.xy;
                float param_41 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1761 = hdLod7(param_40, param_41).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3114.y = _RESERVED_IDENTIFIER_FIXUP_1761;
                float _RESERVED_IDENTIFIER_FIXUP_1766 = float(_RESERVED_IDENTIFIER_FIXUP_1761 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3114.y = _RESERVED_IDENTIFIER_FIXUP_1766;
                float _RESERVED_IDENTIFIER_FIXUP_1769 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1698 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3114.z = _RESERVED_IDENTIFIER_FIXUP_1769;
                float _RESERVED_IDENTIFIER_FIXUP_1775 = _RESERVED_IDENTIFIER_FIXUP_1766 + _RESERVED_IDENTIFIER_FIXUP_1769;
                _RESERVED_IDENTIFIER_FIXUP_3114.y = _RESERVED_IDENTIFIER_FIXUP_1775;
                _RESERVED_IDENTIFIER_FIXUP_3114.x = _RESERVED_IDENTIFIER_FIXUP_1775 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3824 = _RESERVED_IDENTIFIER_FIXUP_3114;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_1187.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_1187.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1791 = (_RESERVED_IDENTIFIER_FIXUP_1187.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3033;
                _RESERVED_IDENTIFIER_FIXUP_3033.x = _RESERVED_IDENTIFIER_FIXUP_1791.x;
                _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1791.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1801 = _RESERVED_IDENTIFIER_FIXUP_3033.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3037;
                _RESERVED_IDENTIFIER_FIXUP_3037.x = _RESERVED_IDENTIFIER_FIXUP_1801.x;
                _RESERVED_IDENTIFIER_FIXUP_3037.y = _RESERVED_IDENTIFIER_FIXUP_1801.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1811 = _RESERVED_IDENTIFIER_FIXUP_3033.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3041;
                _RESERVED_IDENTIFIER_FIXUP_3041.x = _RESERVED_IDENTIFIER_FIXUP_1811.x;
                _RESERVED_IDENTIFIER_FIXUP_3041.y = _RESERVED_IDENTIFIER_FIXUP_1811.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1821 = _RESERVED_IDENTIFIER_FIXUP_3033.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3045;
                _RESERVED_IDENTIFIER_FIXUP_3045.x = _RESERVED_IDENTIFIER_FIXUP_1821.x;
                _RESERVED_IDENTIFIER_FIXUP_3045.y = _RESERVED_IDENTIFIER_FIXUP_1821.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1831 = _RESERVED_IDENTIFIER_FIXUP_3033.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3049;
                _RESERVED_IDENTIFIER_FIXUP_3049.x = _RESERVED_IDENTIFIER_FIXUP_1831.x;
                _RESERVED_IDENTIFIER_FIXUP_3049.y = _RESERVED_IDENTIFIER_FIXUP_1831.y;
                _RESERVED_IDENTIFIER_FIXUP_3033.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3033.xy;
                float param_43 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1845 = hdLod8(param_42, param_43);
                _RESERVED_IDENTIFIER_FIXUP_3037.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3041.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3045.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3049.w = 0.0;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3037.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1845.y = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3041.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1845.z = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3045.xy;
                float param_49 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1845.w = hdLod8(param_48, param_49).x;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3049.xy;
                float param_51 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1908 = hdLod8(param_50, param_51).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3089 = _RESERVED_IDENTIFIER_FIXUP_3024;
                _RESERVED_IDENTIFIER_FIXUP_3089.y = _RESERVED_IDENTIFIER_FIXUP_1908;
                float _RESERVED_IDENTIFIER_FIXUP_1913 = float(_RESERVED_IDENTIFIER_FIXUP_1908 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3089.y = _RESERVED_IDENTIFIER_FIXUP_1913;
                float _RESERVED_IDENTIFIER_FIXUP_1916 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1845 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3089.z = _RESERVED_IDENTIFIER_FIXUP_1916;
                float _RESERVED_IDENTIFIER_FIXUP_1922 = _RESERVED_IDENTIFIER_FIXUP_1913 + _RESERVED_IDENTIFIER_FIXUP_1916;
                _RESERVED_IDENTIFIER_FIXUP_3089.y = _RESERVED_IDENTIFIER_FIXUP_1922;
                float _RESERVED_IDENTIFIER_FIXUP_1930 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3089.z = _RESERVED_IDENTIFIER_FIXUP_1930;
                float _RESERVED_IDENTIFIER_FIXUP_1936 = clamp((_RESERVED_IDENTIFIER_FIXUP_1930 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3089.z = _RESERVED_IDENTIFIER_FIXUP_1936;
                float _RESERVED_IDENTIFIER_FIXUP_1941 = (_RESERVED_IDENTIFIER_FIXUP_1922 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3089.y = _RESERVED_IDENTIFIER_FIXUP_1941;
                _RESERVED_IDENTIFIER_FIXUP_3089.x = (_RESERVED_IDENTIFIER_FIXUP_1936 * _RESERVED_IDENTIFIER_FIXUP_1941) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3824 = _RESERVED_IDENTIFIER_FIXUP_3089;
            }
            _RESERVED_IDENTIFIER_FIXUP_3823 = _RESERVED_IDENTIFIER_FIXUP_3824;
        }
        _RESERVED_IDENTIFIER_FIXUP_3822 = _RESERVED_IDENTIFIER_FIXUP_3823;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3366 = _RESERVED_IDENTIFIER_FIXUP_3822;
    _RESERVED_IDENTIFIER_FIXUP_3366.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1969 = _RESERVED_IDENTIFIER_FIXUP_1201.xyz * _RESERVED_IDENTIFIER_FIXUP_3366.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3368 = _RESERVED_IDENTIFIER_FIXUP_1201;
    _RESERVED_IDENTIFIER_FIXUP_3368.x = _RESERVED_IDENTIFIER_FIXUP_1969.x;
    _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_1969.y;
    _RESERVED_IDENTIFIER_FIXUP_3368.z = _RESERVED_IDENTIFIER_FIXUP_1969.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1980 = _RESERVED_IDENTIFIER_FIXUP_3368.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3820).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_3368;
    _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_1980.x;
    _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_1980.y;
    _RESERVED_IDENTIFIER_FIXUP_3374.z = _RESERVED_IDENTIFIER_FIXUP_1980.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1991 = _RESERVED_IDENTIFIER_FIXUP_3374.xyz + _RESERVED_IDENTIFIER_FIXUP_3374.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3380 = _RESERVED_IDENTIFIER_FIXUP_3374;
    _RESERVED_IDENTIFIER_FIXUP_3380.x = _RESERVED_IDENTIFIER_FIXUP_1991.x;
    _RESERVED_IDENTIFIER_FIXUP_3380.y = _RESERVED_IDENTIFIER_FIXUP_1991.y;
    _RESERVED_IDENTIFIER_FIXUP_3380.z = _RESERVED_IDENTIFIER_FIXUP_1991.z;
    _RESERVED_IDENTIFIER_FIXUP_3366.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3366.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3366.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2016 = (_RESERVED_IDENTIFIER_FIXUP_3366.yzw * _RESERVED_IDENTIFIER_FIXUP_3366.xxx) + _RESERVED_IDENTIFIER_FIXUP_3380.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3392 = _RESERVED_IDENTIFIER_FIXUP_3380;
    _RESERVED_IDENTIFIER_FIXUP_3392.x = _RESERVED_IDENTIFIER_FIXUP_2016.x;
    _RESERVED_IDENTIFIER_FIXUP_3392.y = _RESERVED_IDENTIFIER_FIXUP_2016.y;
    _RESERVED_IDENTIFIER_FIXUP_3392.z = _RESERVED_IDENTIFIER_FIXUP_2016.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2029 = _RESERVED_IDENTIFIER_FIXUP_3392.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3398 = _RESERVED_IDENTIFIER_FIXUP_3392;
    _RESERVED_IDENTIFIER_FIXUP_3398.x = _RESERVED_IDENTIFIER_FIXUP_2029.x;
    _RESERVED_IDENTIFIER_FIXUP_3398.y = _RESERVED_IDENTIFIER_FIXUP_2029.y;
    _RESERVED_IDENTIFIER_FIXUP_3398.z = _RESERVED_IDENTIFIER_FIXUP_2029.z;
    vec2 param_52 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2088 = hdTex0(param_52);
    vec2 param_53 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2092 = hdTex1(param_53);
    vec2 param_54 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2096 = hdTex2(param_54);
    vec2 param_55 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2100 = hdTex3(param_55);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2110 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2088, _RESERVED_IDENTIFIER_FIXUP_2092, _RESERVED_IDENTIFIER_FIXUP_2100.xxxx), _RESERVED_IDENTIFIER_FIXUP_2096, _RESERVED_IDENTIFIER_FIXUP_2100.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3414 = _RESERVED_IDENTIFIER_FIXUP_2092;
    _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_1208;
    float _RESERVED_IDENTIFIER_FIXUP_2123 = clamp((_RESERVED_IDENTIFIER_FIXUP_1208 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_2123;
    float _RESERVED_IDENTIFIER_FIXUP_2129 = ((-_RESERVED_IDENTIFIER_FIXUP_2123) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_2129;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3831;
    if (_RESERVED_IDENTIFIER_FIXUP_2129 != (-_RESERVED_IDENTIFIER_FIXUP_2129))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2141 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3653;
        _RESERVED_IDENTIFIER_FIXUP_3653.x = _RESERVED_IDENTIFIER_FIXUP_2141.x;
        _RESERVED_IDENTIFIER_FIXUP_3653.y = _RESERVED_IDENTIFIER_FIXUP_2141.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2151 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3657;
        _RESERVED_IDENTIFIER_FIXUP_3657.x = _RESERVED_IDENTIFIER_FIXUP_2151.x;
        _RESERVED_IDENTIFIER_FIXUP_3657.y = _RESERVED_IDENTIFIER_FIXUP_2151.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2161 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3661;
        _RESERVED_IDENTIFIER_FIXUP_3661.x = _RESERVED_IDENTIFIER_FIXUP_2161.x;
        _RESERVED_IDENTIFIER_FIXUP_3661.y = _RESERVED_IDENTIFIER_FIXUP_2161.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2171 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3665;
        _RESERVED_IDENTIFIER_FIXUP_3665.x = _RESERVED_IDENTIFIER_FIXUP_2171.x;
        _RESERVED_IDENTIFIER_FIXUP_3665.y = _RESERVED_IDENTIFIER_FIXUP_2171.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2181 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3669;
        _RESERVED_IDENTIFIER_FIXUP_3669.x = _RESERVED_IDENTIFIER_FIXUP_2181.x;
        _RESERVED_IDENTIFIER_FIXUP_3669.y = _RESERVED_IDENTIFIER_FIXUP_2181.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2191 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3673;
        _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_2191.x;
        _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_2191.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2201 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3677;
        _RESERVED_IDENTIFIER_FIXUP_3677.x = _RESERVED_IDENTIFIER_FIXUP_2201.x;
        _RESERVED_IDENTIFIER_FIXUP_3677.y = _RESERVED_IDENTIFIER_FIXUP_2201.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2211 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
        _RESERVED_IDENTIFIER_FIXUP_3681.x = _RESERVED_IDENTIFIER_FIXUP_2211.x;
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2211.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2221 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3685;
        _RESERVED_IDENTIFIER_FIXUP_3685.x = _RESERVED_IDENTIFIER_FIXUP_2221.x;
        _RESERVED_IDENTIFIER_FIXUP_3685.y = _RESERVED_IDENTIFIER_FIXUP_2221.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2229 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2229.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2229.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2235 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3657.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3661.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3665.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3669.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3669.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2275 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3673.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3677.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3681.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3685.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3685.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2315 = hdLod5(param_60, param_61);
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3657.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2235.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3661.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2235.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3665.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2235.w = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3673.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2275.y = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3677.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2275.z = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3681.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2275.w = hdLod5(param_72, param_73).x;
        float _RESERVED_IDENTIFIER_FIXUP_2355 = _RESERVED_IDENTIFIER_FIXUP_2315.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3750 = _RESERVED_IDENTIFIER_FIXUP_2315;
        _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2355;
        float _RESERVED_IDENTIFIER_FIXUP_2360 = float(_RESERVED_IDENTIFIER_FIXUP_2355 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2360;
        float _RESERVED_IDENTIFIER_FIXUP_2363 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2235 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2363;
        float _RESERVED_IDENTIFIER_FIXUP_2366 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2275 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3750.z = _RESERVED_IDENTIFIER_FIXUP_2366;
        float _RESERVED_IDENTIFIER_FIXUP_2372 = _RESERVED_IDENTIFIER_FIXUP_2363 + _RESERVED_IDENTIFIER_FIXUP_2366;
        _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2372;
        float _RESERVED_IDENTIFIER_FIXUP_2378 = _RESERVED_IDENTIFIER_FIXUP_2360 + _RESERVED_IDENTIFIER_FIXUP_2372;
        _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2378;
        _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2378 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3831 = _RESERVED_IDENTIFIER_FIXUP_3750;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2391 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3414.y = _RESERVED_IDENTIFIER_FIXUP_2391;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3832;
        if (_RESERVED_IDENTIFIER_FIXUP_2391 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2400 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3587 = _RESERVED_IDENTIFIER_FIXUP_3414;
            _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2400.x;
            _RESERVED_IDENTIFIER_FIXUP_3587.z = _RESERVED_IDENTIFIER_FIXUP_2400.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2410 = _RESERVED_IDENTIFIER_FIXUP_3587.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3591;
            _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2410.x;
            _RESERVED_IDENTIFIER_FIXUP_3591.y = _RESERVED_IDENTIFIER_FIXUP_2410.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2420 = _RESERVED_IDENTIFIER_FIXUP_3587.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3595;
            _RESERVED_IDENTIFIER_FIXUP_3595.x = _RESERVED_IDENTIFIER_FIXUP_2420.x;
            _RESERVED_IDENTIFIER_FIXUP_3595.y = _RESERVED_IDENTIFIER_FIXUP_2420.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2430 = _RESERVED_IDENTIFIER_FIXUP_3587.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3599;
            _RESERVED_IDENTIFIER_FIXUP_3599.x = _RESERVED_IDENTIFIER_FIXUP_2430.x;
            _RESERVED_IDENTIFIER_FIXUP_3599.y = _RESERVED_IDENTIFIER_FIXUP_2430.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2440 = _RESERVED_IDENTIFIER_FIXUP_3587.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3603;
            _RESERVED_IDENTIFIER_FIXUP_3603.x = _RESERVED_IDENTIFIER_FIXUP_2440.x;
            _RESERVED_IDENTIFIER_FIXUP_3603.y = _RESERVED_IDENTIFIER_FIXUP_2440.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2448 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2448.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2448.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2454 = hdLod6(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3591.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3595.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3599.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3603.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3591.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2454.y = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3595.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2454.z = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3599.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2454.w = hdLod6(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3603.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2517 = hdLod6(param_82, param_83).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2517;
            float _RESERVED_IDENTIFIER_FIXUP_2522 = float(_RESERVED_IDENTIFIER_FIXUP_2517 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2522;
            float _RESERVED_IDENTIFIER_FIXUP_2525 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2454 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3587.z = _RESERVED_IDENTIFIER_FIXUP_2525;
            float _RESERVED_IDENTIFIER_FIXUP_2531 = _RESERVED_IDENTIFIER_FIXUP_2522 + _RESERVED_IDENTIFIER_FIXUP_2525;
            _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2531;
            _RESERVED_IDENTIFIER_FIXUP_3587.x = _RESERVED_IDENTIFIER_FIXUP_2531 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3832 = _RESERVED_IDENTIFIER_FIXUP_3587;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2544 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_3414;
            _RESERVED_IDENTIFIER_FIXUP_3431.y = _RESERVED_IDENTIFIER_FIXUP_2544;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3833;
            if (_RESERVED_IDENTIFIER_FIXUP_2544 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2553 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3521 = _RESERVED_IDENTIFIER_FIXUP_3431;
                _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2553.x;
                _RESERVED_IDENTIFIER_FIXUP_3521.z = _RESERVED_IDENTIFIER_FIXUP_2553.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2563 = _RESERVED_IDENTIFIER_FIXUP_3521.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3525;
                _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2563.x;
                _RESERVED_IDENTIFIER_FIXUP_3525.y = _RESERVED_IDENTIFIER_FIXUP_2563.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2573 = _RESERVED_IDENTIFIER_FIXUP_3521.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3529;
                _RESERVED_IDENTIFIER_FIXUP_3529.x = _RESERVED_IDENTIFIER_FIXUP_2573.x;
                _RESERVED_IDENTIFIER_FIXUP_3529.y = _RESERVED_IDENTIFIER_FIXUP_2573.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2583 = _RESERVED_IDENTIFIER_FIXUP_3521.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3533;
                _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2583.x;
                _RESERVED_IDENTIFIER_FIXUP_3533.y = _RESERVED_IDENTIFIER_FIXUP_2583.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2593 = _RESERVED_IDENTIFIER_FIXUP_3521.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3537;
                _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_2593.x;
                _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_2593.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2601 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2601.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2601.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2607 = hdLod7(param_84, param_85);
                _RESERVED_IDENTIFIER_FIXUP_3525.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3529.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3533.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3537.w = 0.0;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3525.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2607.y = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3529.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2607.z = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3533.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2607.w = hdLod7(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3537.xy;
                float param_93 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2670 = hdLod7(param_92, param_93).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2670;
                float _RESERVED_IDENTIFIER_FIXUP_2675 = float(_RESERVED_IDENTIFIER_FIXUP_2670 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2675;
                float _RESERVED_IDENTIFIER_FIXUP_2678 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2607 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3521.z = _RESERVED_IDENTIFIER_FIXUP_2678;
                float _RESERVED_IDENTIFIER_FIXUP_2684 = _RESERVED_IDENTIFIER_FIXUP_2675 + _RESERVED_IDENTIFIER_FIXUP_2678;
                _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2684;
                _RESERVED_IDENTIFIER_FIXUP_3521.x = _RESERVED_IDENTIFIER_FIXUP_2684 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3833 = _RESERVED_IDENTIFIER_FIXUP_3521;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_2096.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2096.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2700 = (_RESERVED_IDENTIFIER_FIXUP_2096.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3440;
                _RESERVED_IDENTIFIER_FIXUP_3440.x = _RESERVED_IDENTIFIER_FIXUP_2700.x;
                _RESERVED_IDENTIFIER_FIXUP_3440.y = _RESERVED_IDENTIFIER_FIXUP_2700.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2710 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3444;
                _RESERVED_IDENTIFIER_FIXUP_3444.x = _RESERVED_IDENTIFIER_FIXUP_2710.x;
                _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_2710.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2720 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
                _RESERVED_IDENTIFIER_FIXUP_3448.x = _RESERVED_IDENTIFIER_FIXUP_2720.x;
                _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2720.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2730 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3452;
                _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_2730.x;
                _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_2730.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2740 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3456;
                _RESERVED_IDENTIFIER_FIXUP_3456.x = _RESERVED_IDENTIFIER_FIXUP_2740.x;
                _RESERVED_IDENTIFIER_FIXUP_3456.y = _RESERVED_IDENTIFIER_FIXUP_2740.y;
                _RESERVED_IDENTIFIER_FIXUP_3440.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3440.xy;
                float param_95 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2754 = hdLod8(param_94, param_95);
                _RESERVED_IDENTIFIER_FIXUP_3444.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3448.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3452.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3456.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3444.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2754.y = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3448.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2754.z = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3452.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2754.w = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3456.xy;
                float param_103 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2817 = hdLod8(param_102, param_103).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3496 = _RESERVED_IDENTIFIER_FIXUP_3431;
                _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2817;
                float _RESERVED_IDENTIFIER_FIXUP_2822 = float(_RESERVED_IDENTIFIER_FIXUP_2817 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2822;
                float _RESERVED_IDENTIFIER_FIXUP_2825 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2754 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3496.z = _RESERVED_IDENTIFIER_FIXUP_2825;
                float _RESERVED_IDENTIFIER_FIXUP_2831 = _RESERVED_IDENTIFIER_FIXUP_2822 + _RESERVED_IDENTIFIER_FIXUP_2825;
                _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2831;
                float _RESERVED_IDENTIFIER_FIXUP_2839 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3496.z = _RESERVED_IDENTIFIER_FIXUP_2839;
                float _RESERVED_IDENTIFIER_FIXUP_2845 = clamp((_RESERVED_IDENTIFIER_FIXUP_2839 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3496.z = _RESERVED_IDENTIFIER_FIXUP_2845;
                float _RESERVED_IDENTIFIER_FIXUP_2850 = (_RESERVED_IDENTIFIER_FIXUP_2831 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2850;
                _RESERVED_IDENTIFIER_FIXUP_3496.x = (_RESERVED_IDENTIFIER_FIXUP_2845 * _RESERVED_IDENTIFIER_FIXUP_2850) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3833 = _RESERVED_IDENTIFIER_FIXUP_3496;
            }
            _RESERVED_IDENTIFIER_FIXUP_3832 = _RESERVED_IDENTIFIER_FIXUP_3833;
        }
        _RESERVED_IDENTIFIER_FIXUP_3831 = _RESERVED_IDENTIFIER_FIXUP_3832;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2865 = (_RESERVED_IDENTIFIER_FIXUP_3831.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3771 = _RESERVED_IDENTIFIER_FIXUP_3831;
    _RESERVED_IDENTIFIER_FIXUP_3771.y = _RESERVED_IDENTIFIER_FIXUP_2865;
    _RESERVED_IDENTIFIER_FIXUP_3771.y = _RESERVED_IDENTIFIER_FIXUP_2865;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2878 = _RESERVED_IDENTIFIER_FIXUP_2110.xyz * _RESERVED_IDENTIFIER_FIXUP_3771.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3777 = _RESERVED_IDENTIFIER_FIXUP_2110;
    _RESERVED_IDENTIFIER_FIXUP_3777.x = _RESERVED_IDENTIFIER_FIXUP_2878.x;
    _RESERVED_IDENTIFIER_FIXUP_3777.y = _RESERVED_IDENTIFIER_FIXUP_2878.y;
    _RESERVED_IDENTIFIER_FIXUP_3777.z = _RESERVED_IDENTIFIER_FIXUP_2878.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2889 = _RESERVED_IDENTIFIER_FIXUP_3777.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3783 = _RESERVED_IDENTIFIER_FIXUP_3777;
    _RESERVED_IDENTIFIER_FIXUP_3783.x = _RESERVED_IDENTIFIER_FIXUP_2889.x;
    _RESERVED_IDENTIFIER_FIXUP_3783.y = _RESERVED_IDENTIFIER_FIXUP_2889.y;
    _RESERVED_IDENTIFIER_FIXUP_3783.z = _RESERVED_IDENTIFIER_FIXUP_2889.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2900 = _RESERVED_IDENTIFIER_FIXUP_3783.xyz + _RESERVED_IDENTIFIER_FIXUP_3783.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_3783;
    _RESERVED_IDENTIFIER_FIXUP_3789.x = _RESERVED_IDENTIFIER_FIXUP_2900.x;
    _RESERVED_IDENTIFIER_FIXUP_3789.y = _RESERVED_IDENTIFIER_FIXUP_2900.y;
    _RESERVED_IDENTIFIER_FIXUP_3789.z = _RESERVED_IDENTIFIER_FIXUP_2900.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2911 = _RESERVED_IDENTIFIER_FIXUP_3789.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3771.y = _RESERVED_IDENTIFIER_FIXUP_2911.x;
    _RESERVED_IDENTIFIER_FIXUP_3771.z = _RESERVED_IDENTIFIER_FIXUP_2911.y;
    _RESERVED_IDENTIFIER_FIXUP_3771.w = _RESERVED_IDENTIFIER_FIXUP_2911.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2925 = (_RESERVED_IDENTIFIER_FIXUP_3771.yzw * _RESERVED_IDENTIFIER_FIXUP_3771.xxx) + _RESERVED_IDENTIFIER_FIXUP_3789.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3801 = _RESERVED_IDENTIFIER_FIXUP_3789;
    _RESERVED_IDENTIFIER_FIXUP_3801.x = _RESERVED_IDENTIFIER_FIXUP_2925.x;
    _RESERVED_IDENTIFIER_FIXUP_3801.y = _RESERVED_IDENTIFIER_FIXUP_2925.y;
    _RESERVED_IDENTIFIER_FIXUP_3801.z = _RESERVED_IDENTIFIER_FIXUP_2925.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2938 = _RESERVED_IDENTIFIER_FIXUP_3801.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3807 = _RESERVED_IDENTIFIER_FIXUP_3801;
    _RESERVED_IDENTIFIER_FIXUP_3807.x = _RESERVED_IDENTIFIER_FIXUP_2938.x;
    _RESERVED_IDENTIFIER_FIXUP_3807.y = _RESERVED_IDENTIFIER_FIXUP_2938.y;
    _RESERVED_IDENTIFIER_FIXUP_3807.z = _RESERVED_IDENTIFIER_FIXUP_2938.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3807.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1034 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1043;
    if (_RESERVED_IDENTIFIER_FIXUP_1034)
    {
        _RESERVED_IDENTIFIER_FIXUP_1043 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1043 = _RESERVED_IDENTIFIER_FIXUP_1034;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1043)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1080 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3398.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1107 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2997;
    if (_RESERVED_IDENTIFIER_FIXUP_1080 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2997 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1080), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1107);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2997 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1107);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2997;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2865);
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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB128 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB128.x;
        r1.y = hdB128.y;
        vec2 hdB149 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB149.x;
        r2.y = hdB149.y;
        vec2 hdB160 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB160.x;
        r3.y = hdB160.y;
        vec2 hdB171 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB171.x;
        r4.y = hdB171.y;
        vec2 hdB182 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB182.x;
        r5.y = hdB182.y;
        vec2 hdB193 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB193.x;
        r6.y = hdB193.y;
        vec2 hdB204 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB204.x;
        r7.y = hdB204.y;
        vec2 hdB215 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB215.x;
        r8.y = hdB215.y;
        vec4 hdB220 = r1;
        vec2 hdB226 = hdB220.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB226.x;
        r1.y = hdB226.y;
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
            vec2 hdB414 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB414.x;
            r1.z = hdB414.y;
            vec2 hdB424 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB424.x;
            r2.y = hdB424.y;
            vec2 hdB434 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB434.x;
            r3.y = hdB434.y;
            vec2 hdB444 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB444.x;
            r4.y = hdB444.y;
            vec2 hdB454 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB454.x;
            r5.y = hdB454.y;
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
                vec2 hdB570 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB570.x;
                r1.z = hdB570.y;
                vec2 hdB580 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB580.x;
                r2.y = hdB580.y;
                vec2 hdB590 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB590.x;
                r3.y = hdB590.y;
                vec2 hdB600 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB600.x;
                r4.y = hdB600.y;
                vec2 hdB610 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB610.x;
                r5.y = hdB610.y;
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
                vec2 hdB718 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB718.x;
                r3.y = hdB718.y;
                vec2 hdB728 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB728.x;
                r4.y = hdB728.y;
                vec2 hdB738 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB738.x;
                r5.y = hdB738.y;
                vec2 hdB748 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB748.x;
                r6.y = hdB748.y;
                vec2 hdB758 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB758.x;
                r7.y = hdB758.y;
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
    vec4 hdB889 = r0;
    vec3 hdB893 = hdB889.xyz * r1.yyy;
    r0.x = hdB893.x;
    r0.y = hdB893.y;
    r0.z = hdB893.z;
    vec4 hdB900 = r0;
    vec3 hdB904 = hdB900.xyz * v0.xyz;
    r0.x = hdB904.x;
    r0.y = hdB904.y;
    r0.z = hdB904.z;
    vec4 hdB911 = r0;
    vec4 hdB913 = r0;
    vec3 hdB915 = hdB911.xyz + hdB913.xyz;
    r0.x = hdB915.x;
    r0.y = hdB915.y;
    r0.z = hdB915.z;
    vec3 hdB926 = r0.www * v1.xyz;
    r1.y = hdB926.x;
    r1.z = hdB926.y;
    r1.w = hdB926.z;
    vec4 hdB938 = r0;
    vec3 hdB940 = (r1.yzw * r1.xxx) + hdB938.xyz;
    r0.x = hdB940.x;
    r0.y = hdB940.y;
    r0.z = hdB940.z;
    vec4 hdB947 = r0;
    vec3 hdB954 = hdB947.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB954.x;
    r0.y = hdB954.y;
    r0.z = hdB954.z;
    vec3 hdB969 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB969.x;
    oC0.y = hdB969.y;
    oC0.z = hdB969.z;
    oC0.w = 1.0;
    bool hdB982 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB990;
    if (hdB982)
    {
        hdB990 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB990 = hdB982;
    }
    if (hdB990)
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
    bool _3333 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3343;
    if (_3333)
    {
        _3343 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3343 = _3333;
    }
    if (_3343)
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
        bool _3368 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3383;
        if (!_3368)
        {
            _3383 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3383 = _3368;
        }
        if (_3383)
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
