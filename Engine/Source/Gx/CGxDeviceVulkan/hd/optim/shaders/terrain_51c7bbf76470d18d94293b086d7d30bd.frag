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
float _RESERVED_IDENTIFIER_FIXUP_3851;
vec4 _RESERVED_IDENTIFIER_FIXUP_3852;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1192 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1200 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1204 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1208 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1192, _RESERVED_IDENTIFIER_FIXUP_1196, _RESERVED_IDENTIFIER_FIXUP_1208.xxxx), _RESERVED_IDENTIFIER_FIXUP_1200, _RESERVED_IDENTIFIER_FIXUP_1208.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1223 = mix(_RESERVED_IDENTIFIER_FIXUP_1218, _RESERVED_IDENTIFIER_FIXUP_1204, _RESERVED_IDENTIFIER_FIXUP_1208.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_1230 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3038 = _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_3038.x = _RESERVED_IDENTIFIER_FIXUP_1230;
    float _RESERVED_IDENTIFIER_FIXUP_1236 = clamp((_RESERVED_IDENTIFIER_FIXUP_1230 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3038.x = _RESERVED_IDENTIFIER_FIXUP_1236;
    float _RESERVED_IDENTIFIER_FIXUP_1242 = ((-_RESERVED_IDENTIFIER_FIXUP_1236) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3038.x = _RESERVED_IDENTIFIER_FIXUP_1242;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3853;
    if (_RESERVED_IDENTIFIER_FIXUP_1242 != (-_RESERVED_IDENTIFIER_FIXUP_1242))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1254 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3277;
        _RESERVED_IDENTIFIER_FIXUP_3277.x = _RESERVED_IDENTIFIER_FIXUP_1254.x;
        _RESERVED_IDENTIFIER_FIXUP_3277.y = _RESERVED_IDENTIFIER_FIXUP_1254.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_3277.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3281;
        _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_1264.x;
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_1264.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1274 = _RESERVED_IDENTIFIER_FIXUP_3277.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3285;
        _RESERVED_IDENTIFIER_FIXUP_3285.x = _RESERVED_IDENTIFIER_FIXUP_1274.x;
        _RESERVED_IDENTIFIER_FIXUP_3285.y = _RESERVED_IDENTIFIER_FIXUP_1274.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1284 = _RESERVED_IDENTIFIER_FIXUP_3277.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3289;
        _RESERVED_IDENTIFIER_FIXUP_3289.x = _RESERVED_IDENTIFIER_FIXUP_1284.x;
        _RESERVED_IDENTIFIER_FIXUP_3289.y = _RESERVED_IDENTIFIER_FIXUP_1284.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_3277.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3293;
        _RESERVED_IDENTIFIER_FIXUP_3293.x = _RESERVED_IDENTIFIER_FIXUP_1294.x;
        _RESERVED_IDENTIFIER_FIXUP_3293.y = _RESERVED_IDENTIFIER_FIXUP_1294.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1304 = _RESERVED_IDENTIFIER_FIXUP_3277.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3297;
        _RESERVED_IDENTIFIER_FIXUP_3297.x = _RESERVED_IDENTIFIER_FIXUP_1304.x;
        _RESERVED_IDENTIFIER_FIXUP_3297.y = _RESERVED_IDENTIFIER_FIXUP_1304.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1314 = _RESERVED_IDENTIFIER_FIXUP_3277.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3301;
        _RESERVED_IDENTIFIER_FIXUP_3301.x = _RESERVED_IDENTIFIER_FIXUP_1314.x;
        _RESERVED_IDENTIFIER_FIXUP_3301.y = _RESERVED_IDENTIFIER_FIXUP_1314.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1324 = _RESERVED_IDENTIFIER_FIXUP_3277.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3305;
        _RESERVED_IDENTIFIER_FIXUP_3305.x = _RESERVED_IDENTIFIER_FIXUP_1324.x;
        _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_1324.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_3277.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3309;
        _RESERVED_IDENTIFIER_FIXUP_3309.x = _RESERVED_IDENTIFIER_FIXUP_1334.x;
        _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_1334.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1342 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1342.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1342.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1348 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3281.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3285.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3289.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3293.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3293.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1388 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_3297.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3301.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3305.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3309.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3309.xy;
        float param_9 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1428 = hdLod5(param_8, param_9);
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3281.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1348.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3285.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1348.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3289.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1348.w = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3297.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1388.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3301.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1388.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3305.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1388.w = hdLod5(param_20, param_21).x;
        float _RESERVED_IDENTIFIER_FIXUP_1468 = _RESERVED_IDENTIFIER_FIXUP_1428.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_1428;
        _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_1468;
        float _RESERVED_IDENTIFIER_FIXUP_1473 = float(_RESERVED_IDENTIFIER_FIXUP_1468 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_1473;
        float _RESERVED_IDENTIFIER_FIXUP_1476 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1348 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_1476;
        float _RESERVED_IDENTIFIER_FIXUP_1479 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1388 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3374.z = _RESERVED_IDENTIFIER_FIXUP_1479;
        float _RESERVED_IDENTIFIER_FIXUP_1485 = _RESERVED_IDENTIFIER_FIXUP_1476 + _RESERVED_IDENTIFIER_FIXUP_1479;
        _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_1485;
        float _RESERVED_IDENTIFIER_FIXUP_1491 = _RESERVED_IDENTIFIER_FIXUP_1473 + _RESERVED_IDENTIFIER_FIXUP_1485;
        _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_1491;
        _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_1491 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3853 = _RESERVED_IDENTIFIER_FIXUP_3374;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1504 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3038.y = _RESERVED_IDENTIFIER_FIXUP_1504;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3854;
        if (_RESERVED_IDENTIFIER_FIXUP_1504 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1513 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3211 = _RESERVED_IDENTIFIER_FIXUP_3038;
            _RESERVED_IDENTIFIER_FIXUP_3211.y = _RESERVED_IDENTIFIER_FIXUP_1513.x;
            _RESERVED_IDENTIFIER_FIXUP_3211.z = _RESERVED_IDENTIFIER_FIXUP_1513.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_3211.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3215;
            _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1523.x;
            _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_1523.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1533 = _RESERVED_IDENTIFIER_FIXUP_3211.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3219;
            _RESERVED_IDENTIFIER_FIXUP_3219.x = _RESERVED_IDENTIFIER_FIXUP_1533.x;
            _RESERVED_IDENTIFIER_FIXUP_3219.y = _RESERVED_IDENTIFIER_FIXUP_1533.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_3211.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3223;
            _RESERVED_IDENTIFIER_FIXUP_3223.x = _RESERVED_IDENTIFIER_FIXUP_1543.x;
            _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_1543.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1553 = _RESERVED_IDENTIFIER_FIXUP_3211.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3227;
            _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_1553.x;
            _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_1553.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1561 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1561.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1561.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1567 = hdLod6(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_3215.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3219.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3223.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3227.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3215.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1567.y = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3219.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1567.z = hdLod6(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3223.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1567.w = hdLod6(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3227.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1630 = hdLod6(param_30, param_31).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3211.y = _RESERVED_IDENTIFIER_FIXUP_1630;
            float _RESERVED_IDENTIFIER_FIXUP_1635 = float(_RESERVED_IDENTIFIER_FIXUP_1630 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3211.y = _RESERVED_IDENTIFIER_FIXUP_1635;
            float _RESERVED_IDENTIFIER_FIXUP_1638 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1567 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3211.z = _RESERVED_IDENTIFIER_FIXUP_1638;
            float _RESERVED_IDENTIFIER_FIXUP_1644 = _RESERVED_IDENTIFIER_FIXUP_1635 + _RESERVED_IDENTIFIER_FIXUP_1638;
            _RESERVED_IDENTIFIER_FIXUP_3211.y = _RESERVED_IDENTIFIER_FIXUP_1644;
            _RESERVED_IDENTIFIER_FIXUP_3211.x = _RESERVED_IDENTIFIER_FIXUP_1644 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3854 = _RESERVED_IDENTIFIER_FIXUP_3211;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1657 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3055 = _RESERVED_IDENTIFIER_FIXUP_3038;
            _RESERVED_IDENTIFIER_FIXUP_3055.y = _RESERVED_IDENTIFIER_FIXUP_1657;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3855;
            if (_RESERVED_IDENTIFIER_FIXUP_1657 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1666 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3145 = _RESERVED_IDENTIFIER_FIXUP_3055;
                _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1666.x;
                _RESERVED_IDENTIFIER_FIXUP_3145.z = _RESERVED_IDENTIFIER_FIXUP_1666.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1676 = _RESERVED_IDENTIFIER_FIXUP_3145.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3149;
                _RESERVED_IDENTIFIER_FIXUP_3149.x = _RESERVED_IDENTIFIER_FIXUP_1676.x;
                _RESERVED_IDENTIFIER_FIXUP_3149.y = _RESERVED_IDENTIFIER_FIXUP_1676.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1686 = _RESERVED_IDENTIFIER_FIXUP_3145.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3153;
                _RESERVED_IDENTIFIER_FIXUP_3153.x = _RESERVED_IDENTIFIER_FIXUP_1686.x;
                _RESERVED_IDENTIFIER_FIXUP_3153.y = _RESERVED_IDENTIFIER_FIXUP_1686.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1696 = _RESERVED_IDENTIFIER_FIXUP_3145.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3157;
                _RESERVED_IDENTIFIER_FIXUP_3157.x = _RESERVED_IDENTIFIER_FIXUP_1696.x;
                _RESERVED_IDENTIFIER_FIXUP_3157.y = _RESERVED_IDENTIFIER_FIXUP_1696.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1706 = _RESERVED_IDENTIFIER_FIXUP_3145.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3161;
                _RESERVED_IDENTIFIER_FIXUP_3161.x = _RESERVED_IDENTIFIER_FIXUP_1706.x;
                _RESERVED_IDENTIFIER_FIXUP_3161.y = _RESERVED_IDENTIFIER_FIXUP_1706.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1714 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1714.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1714.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1720 = hdLod7(param_32, param_33);
                _RESERVED_IDENTIFIER_FIXUP_3149.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3153.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3157.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3161.w = 0.0;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3149.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1720.y = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3153.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1720.z = hdLod7(param_36, param_37).x;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3157.xy;
                float param_39 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1720.w = hdLod7(param_38, param_39).x;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3161.xy;
                float param_41 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1783 = hdLod7(param_40, param_41).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1783;
                float _RESERVED_IDENTIFIER_FIXUP_1788 = float(_RESERVED_IDENTIFIER_FIXUP_1783 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1788;
                float _RESERVED_IDENTIFIER_FIXUP_1791 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1720 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3145.z = _RESERVED_IDENTIFIER_FIXUP_1791;
                float _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_1788 + _RESERVED_IDENTIFIER_FIXUP_1791;
                _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1797;
                _RESERVED_IDENTIFIER_FIXUP_3145.x = _RESERVED_IDENTIFIER_FIXUP_1797 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3855 = _RESERVED_IDENTIFIER_FIXUP_3145;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_1200.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_1200.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1813 = (_RESERVED_IDENTIFIER_FIXUP_1200.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3064;
                _RESERVED_IDENTIFIER_FIXUP_3064.x = _RESERVED_IDENTIFIER_FIXUP_1813.x;
                _RESERVED_IDENTIFIER_FIXUP_3064.y = _RESERVED_IDENTIFIER_FIXUP_1813.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1823 = _RESERVED_IDENTIFIER_FIXUP_3064.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3068;
                _RESERVED_IDENTIFIER_FIXUP_3068.x = _RESERVED_IDENTIFIER_FIXUP_1823.x;
                _RESERVED_IDENTIFIER_FIXUP_3068.y = _RESERVED_IDENTIFIER_FIXUP_1823.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1833 = _RESERVED_IDENTIFIER_FIXUP_3064.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3072;
                _RESERVED_IDENTIFIER_FIXUP_3072.x = _RESERVED_IDENTIFIER_FIXUP_1833.x;
                _RESERVED_IDENTIFIER_FIXUP_3072.y = _RESERVED_IDENTIFIER_FIXUP_1833.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1843 = _RESERVED_IDENTIFIER_FIXUP_3064.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3076;
                _RESERVED_IDENTIFIER_FIXUP_3076.x = _RESERVED_IDENTIFIER_FIXUP_1843.x;
                _RESERVED_IDENTIFIER_FIXUP_3076.y = _RESERVED_IDENTIFIER_FIXUP_1843.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1853 = _RESERVED_IDENTIFIER_FIXUP_3064.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3080;
                _RESERVED_IDENTIFIER_FIXUP_3080.x = _RESERVED_IDENTIFIER_FIXUP_1853.x;
                _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_1853.y;
                _RESERVED_IDENTIFIER_FIXUP_3064.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3064.xy;
                float param_43 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1867 = hdLod8(param_42, param_43);
                _RESERVED_IDENTIFIER_FIXUP_3068.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3072.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3076.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3080.w = 0.0;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3068.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1867.y = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3072.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1867.z = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3076.xy;
                float param_49 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1867.w = hdLod8(param_48, param_49).x;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3080.xy;
                float param_51 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1930 = hdLod8(param_50, param_51).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3120 = _RESERVED_IDENTIFIER_FIXUP_3055;
                _RESERVED_IDENTIFIER_FIXUP_3120.y = _RESERVED_IDENTIFIER_FIXUP_1930;
                float _RESERVED_IDENTIFIER_FIXUP_1935 = float(_RESERVED_IDENTIFIER_FIXUP_1930 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3120.y = _RESERVED_IDENTIFIER_FIXUP_1935;
                float _RESERVED_IDENTIFIER_FIXUP_1938 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1867 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3120.z = _RESERVED_IDENTIFIER_FIXUP_1938;
                float _RESERVED_IDENTIFIER_FIXUP_1944 = _RESERVED_IDENTIFIER_FIXUP_1935 + _RESERVED_IDENTIFIER_FIXUP_1938;
                _RESERVED_IDENTIFIER_FIXUP_3120.y = _RESERVED_IDENTIFIER_FIXUP_1944;
                float _RESERVED_IDENTIFIER_FIXUP_1952 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3120.z = _RESERVED_IDENTIFIER_FIXUP_1952;
                float _RESERVED_IDENTIFIER_FIXUP_1958 = clamp((_RESERVED_IDENTIFIER_FIXUP_1952 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3120.z = _RESERVED_IDENTIFIER_FIXUP_1958;
                float _RESERVED_IDENTIFIER_FIXUP_1963 = (_RESERVED_IDENTIFIER_FIXUP_1944 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3120.y = _RESERVED_IDENTIFIER_FIXUP_1963;
                _RESERVED_IDENTIFIER_FIXUP_3120.x = (_RESERVED_IDENTIFIER_FIXUP_1958 * _RESERVED_IDENTIFIER_FIXUP_1963) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3855 = _RESERVED_IDENTIFIER_FIXUP_3120;
            }
            _RESERVED_IDENTIFIER_FIXUP_3854 = _RESERVED_IDENTIFIER_FIXUP_3855;
        }
        _RESERVED_IDENTIFIER_FIXUP_3853 = _RESERVED_IDENTIFIER_FIXUP_3854;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3397 = _RESERVED_IDENTIFIER_FIXUP_3853;
    _RESERVED_IDENTIFIER_FIXUP_3397.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1991 = _RESERVED_IDENTIFIER_FIXUP_1223.xyz * _RESERVED_IDENTIFIER_FIXUP_3397.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_3397;
    _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_1991.x;
    _RESERVED_IDENTIFIER_FIXUP_3399.z = _RESERVED_IDENTIFIER_FIXUP_1991.y;
    _RESERVED_IDENTIFIER_FIXUP_3399.w = _RESERVED_IDENTIFIER_FIXUP_1991.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2002 = _RESERVED_IDENTIFIER_FIXUP_3399.yzw * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3851).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3405 = _RESERVED_IDENTIFIER_FIXUP_3399;
    _RESERVED_IDENTIFIER_FIXUP_3405.y = _RESERVED_IDENTIFIER_FIXUP_2002.x;
    _RESERVED_IDENTIFIER_FIXUP_3405.z = _RESERVED_IDENTIFIER_FIXUP_2002.y;
    _RESERVED_IDENTIFIER_FIXUP_3405.w = _RESERVED_IDENTIFIER_FIXUP_2002.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2013 = _RESERVED_IDENTIFIER_FIXUP_3405.yzw + _RESERVED_IDENTIFIER_FIXUP_3405.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2015 = _RESERVED_IDENTIFIER_FIXUP_2013.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3411 = _RESERVED_IDENTIFIER_FIXUP_3405;
    _RESERVED_IDENTIFIER_FIXUP_3411.y = _RESERVED_IDENTIFIER_FIXUP_2015;
    _RESERVED_IDENTIFIER_FIXUP_3411.z = _RESERVED_IDENTIFIER_FIXUP_2013.y;
    _RESERVED_IDENTIFIER_FIXUP_3411.w = _RESERVED_IDENTIFIER_FIXUP_2013.z;
    _RESERVED_IDENTIFIER_FIXUP_1223.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1223.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1223.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2038 = (_RESERVED_IDENTIFIER_FIXUP_1223.xyz * _RESERVED_IDENTIFIER_FIXUP_3411.xxx) + _RESERVED_IDENTIFIER_FIXUP_3411.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3871 = vec4(_RESERVED_IDENTIFIER_FIXUP_2038.x, _RESERVED_IDENTIFIER_FIXUP_2015, _RESERVED_IDENTIFIER_FIXUP_2013.yz);
    _RESERVED_IDENTIFIER_FIXUP_3871.y = _RESERVED_IDENTIFIER_FIXUP_2038.y;
    _RESERVED_IDENTIFIER_FIXUP_3871.z = _RESERVED_IDENTIFIER_FIXUP_2038.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2051 = _RESERVED_IDENTIFIER_FIXUP_3871.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3429 = _RESERVED_IDENTIFIER_FIXUP_3871;
    _RESERVED_IDENTIFIER_FIXUP_3429.x = _RESERVED_IDENTIFIER_FIXUP_2051.x;
    _RESERVED_IDENTIFIER_FIXUP_3429.y = _RESERVED_IDENTIFIER_FIXUP_2051.y;
    _RESERVED_IDENTIFIER_FIXUP_3429.z = _RESERVED_IDENTIFIER_FIXUP_2051.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2110 = OptTex0( texcoord0.xyz);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2114 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2118 = hdTex2(param_53);
    vec2 param_54 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2122 = hdTex3(param_54);
    vec2 param_55 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2126 = hdTex4(param_55);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2136 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2110, _RESERVED_IDENTIFIER_FIXUP_2114, _RESERVED_IDENTIFIER_FIXUP_2126.xxxx), _RESERVED_IDENTIFIER_FIXUP_2118, _RESERVED_IDENTIFIER_FIXUP_2126.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2141 = mix(_RESERVED_IDENTIFIER_FIXUP_2136, _RESERVED_IDENTIFIER_FIXUP_2122, _RESERVED_IDENTIFIER_FIXUP_2126.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3445 = _RESERVED_IDENTIFIER_FIXUP_2136;
    _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_1230;
    float _RESERVED_IDENTIFIER_FIXUP_2154 = clamp((_RESERVED_IDENTIFIER_FIXUP_1230 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_2154;
    float _RESERVED_IDENTIFIER_FIXUP_2160 = ((-_RESERVED_IDENTIFIER_FIXUP_2154) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_2160;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3862;
    if (_RESERVED_IDENTIFIER_FIXUP_2160 != (-_RESERVED_IDENTIFIER_FIXUP_2160))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2172 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3684;
        _RESERVED_IDENTIFIER_FIXUP_3684.x = _RESERVED_IDENTIFIER_FIXUP_2172.x;
        _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2172.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2182 = _RESERVED_IDENTIFIER_FIXUP_3684.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3688;
        _RESERVED_IDENTIFIER_FIXUP_3688.x = _RESERVED_IDENTIFIER_FIXUP_2182.x;
        _RESERVED_IDENTIFIER_FIXUP_3688.y = _RESERVED_IDENTIFIER_FIXUP_2182.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2192 = _RESERVED_IDENTIFIER_FIXUP_3684.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3692;
        _RESERVED_IDENTIFIER_FIXUP_3692.x = _RESERVED_IDENTIFIER_FIXUP_2192.x;
        _RESERVED_IDENTIFIER_FIXUP_3692.y = _RESERVED_IDENTIFIER_FIXUP_2192.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2202 = _RESERVED_IDENTIFIER_FIXUP_3684.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3696;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2202.x;
        _RESERVED_IDENTIFIER_FIXUP_3696.y = _RESERVED_IDENTIFIER_FIXUP_2202.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2212 = _RESERVED_IDENTIFIER_FIXUP_3684.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3700;
        _RESERVED_IDENTIFIER_FIXUP_3700.x = _RESERVED_IDENTIFIER_FIXUP_2212.x;
        _RESERVED_IDENTIFIER_FIXUP_3700.y = _RESERVED_IDENTIFIER_FIXUP_2212.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2222 = _RESERVED_IDENTIFIER_FIXUP_3684.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3704;
        _RESERVED_IDENTIFIER_FIXUP_3704.x = _RESERVED_IDENTIFIER_FIXUP_2222.x;
        _RESERVED_IDENTIFIER_FIXUP_3704.y = _RESERVED_IDENTIFIER_FIXUP_2222.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2232 = _RESERVED_IDENTIFIER_FIXUP_3684.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3708;
        _RESERVED_IDENTIFIER_FIXUP_3708.x = _RESERVED_IDENTIFIER_FIXUP_2232.x;
        _RESERVED_IDENTIFIER_FIXUP_3708.y = _RESERVED_IDENTIFIER_FIXUP_2232.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2242 = _RESERVED_IDENTIFIER_FIXUP_3684.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3712;
        _RESERVED_IDENTIFIER_FIXUP_3712.x = _RESERVED_IDENTIFIER_FIXUP_2242.x;
        _RESERVED_IDENTIFIER_FIXUP_3712.y = _RESERVED_IDENTIFIER_FIXUP_2242.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2252 = _RESERVED_IDENTIFIER_FIXUP_3684.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3716;
        _RESERVED_IDENTIFIER_FIXUP_3716.x = _RESERVED_IDENTIFIER_FIXUP_2252.x;
        _RESERVED_IDENTIFIER_FIXUP_3716.y = _RESERVED_IDENTIFIER_FIXUP_2252.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2260 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2260.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2260.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2266 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3688.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3692.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3696.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3700.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3700.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2306 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3704.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3708.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3712.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3716.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3716.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2346 = hdLod5(param_60, param_61);
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3688.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2266.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3692.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2266.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3696.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2266.w = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3704.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2306.y = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3708.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2306.z = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3712.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2306.w = hdLod5(param_72, param_73).x;
        float _RESERVED_IDENTIFIER_FIXUP_2386 = _RESERVED_IDENTIFIER_FIXUP_2346.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3781 = _RESERVED_IDENTIFIER_FIXUP_2346;
        _RESERVED_IDENTIFIER_FIXUP_3781.x = _RESERVED_IDENTIFIER_FIXUP_2386;
        float _RESERVED_IDENTIFIER_FIXUP_2391 = float(_RESERVED_IDENTIFIER_FIXUP_2386 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3781.x = _RESERVED_IDENTIFIER_FIXUP_2391;
        float _RESERVED_IDENTIFIER_FIXUP_2394 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2266 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2394;
        float _RESERVED_IDENTIFIER_FIXUP_2397 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2306 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3781.z = _RESERVED_IDENTIFIER_FIXUP_2397;
        float _RESERVED_IDENTIFIER_FIXUP_2403 = _RESERVED_IDENTIFIER_FIXUP_2394 + _RESERVED_IDENTIFIER_FIXUP_2397;
        _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2403;
        float _RESERVED_IDENTIFIER_FIXUP_2409 = _RESERVED_IDENTIFIER_FIXUP_2391 + _RESERVED_IDENTIFIER_FIXUP_2403;
        _RESERVED_IDENTIFIER_FIXUP_3781.x = _RESERVED_IDENTIFIER_FIXUP_2409;
        _RESERVED_IDENTIFIER_FIXUP_3781.x = _RESERVED_IDENTIFIER_FIXUP_2409 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3862 = _RESERVED_IDENTIFIER_FIXUP_3781;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2422 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2422;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3863;
        if (_RESERVED_IDENTIFIER_FIXUP_2422 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2431 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3618 = _RESERVED_IDENTIFIER_FIXUP_3445;
            _RESERVED_IDENTIFIER_FIXUP_3618.y = _RESERVED_IDENTIFIER_FIXUP_2431.x;
            _RESERVED_IDENTIFIER_FIXUP_3618.z = _RESERVED_IDENTIFIER_FIXUP_2431.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2441 = _RESERVED_IDENTIFIER_FIXUP_3618.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3622;
            _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2441.x;
            _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2441.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2451 = _RESERVED_IDENTIFIER_FIXUP_3618.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3626;
            _RESERVED_IDENTIFIER_FIXUP_3626.x = _RESERVED_IDENTIFIER_FIXUP_2451.x;
            _RESERVED_IDENTIFIER_FIXUP_3626.y = _RESERVED_IDENTIFIER_FIXUP_2451.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2461 = _RESERVED_IDENTIFIER_FIXUP_3618.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3630;
            _RESERVED_IDENTIFIER_FIXUP_3630.x = _RESERVED_IDENTIFIER_FIXUP_2461.x;
            _RESERVED_IDENTIFIER_FIXUP_3630.y = _RESERVED_IDENTIFIER_FIXUP_2461.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2471 = _RESERVED_IDENTIFIER_FIXUP_3618.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3634;
            _RESERVED_IDENTIFIER_FIXUP_3634.x = _RESERVED_IDENTIFIER_FIXUP_2471.x;
            _RESERVED_IDENTIFIER_FIXUP_3634.y = _RESERVED_IDENTIFIER_FIXUP_2471.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2479 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2479.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2479.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2485 = hdLod6(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3622.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3626.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3630.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3634.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3622.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2485.y = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3626.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2485.z = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3630.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2485.w = hdLod6(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3634.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2548 = hdLod6(param_82, param_83).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3618.y = _RESERVED_IDENTIFIER_FIXUP_2548;
            float _RESERVED_IDENTIFIER_FIXUP_2553 = float(_RESERVED_IDENTIFIER_FIXUP_2548 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3618.y = _RESERVED_IDENTIFIER_FIXUP_2553;
            float _RESERVED_IDENTIFIER_FIXUP_2556 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2485 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3618.z = _RESERVED_IDENTIFIER_FIXUP_2556;
            float _RESERVED_IDENTIFIER_FIXUP_2562 = _RESERVED_IDENTIFIER_FIXUP_2553 + _RESERVED_IDENTIFIER_FIXUP_2556;
            _RESERVED_IDENTIFIER_FIXUP_3618.y = _RESERVED_IDENTIFIER_FIXUP_2562;
            _RESERVED_IDENTIFIER_FIXUP_3618.x = _RESERVED_IDENTIFIER_FIXUP_2562 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3863 = _RESERVED_IDENTIFIER_FIXUP_3618;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2575 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3462 = _RESERVED_IDENTIFIER_FIXUP_3445;
            _RESERVED_IDENTIFIER_FIXUP_3462.y = _RESERVED_IDENTIFIER_FIXUP_2575;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3864;
            if (_RESERVED_IDENTIFIER_FIXUP_2575 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2584 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3552 = _RESERVED_IDENTIFIER_FIXUP_3462;
                _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_2584.x;
                _RESERVED_IDENTIFIER_FIXUP_3552.z = _RESERVED_IDENTIFIER_FIXUP_2584.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_3552.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3556;
                _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2594.x;
                _RESERVED_IDENTIFIER_FIXUP_3556.y = _RESERVED_IDENTIFIER_FIXUP_2594.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2604 = _RESERVED_IDENTIFIER_FIXUP_3552.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3560;
                _RESERVED_IDENTIFIER_FIXUP_3560.x = _RESERVED_IDENTIFIER_FIXUP_2604.x;
                _RESERVED_IDENTIFIER_FIXUP_3560.y = _RESERVED_IDENTIFIER_FIXUP_2604.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2614 = _RESERVED_IDENTIFIER_FIXUP_3552.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3564;
                _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2614.x;
                _RESERVED_IDENTIFIER_FIXUP_3564.y = _RESERVED_IDENTIFIER_FIXUP_2614.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2624 = _RESERVED_IDENTIFIER_FIXUP_3552.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3568;
                _RESERVED_IDENTIFIER_FIXUP_3568.x = _RESERVED_IDENTIFIER_FIXUP_2624.x;
                _RESERVED_IDENTIFIER_FIXUP_3568.y = _RESERVED_IDENTIFIER_FIXUP_2624.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2632 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2632.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2632.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2638 = hdLod7(param_84, param_85);
                _RESERVED_IDENTIFIER_FIXUP_3556.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3560.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3564.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3568.w = 0.0;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3556.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2638.y = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3560.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2638.z = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3564.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2638.w = hdLod7(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3568.xy;
                float param_93 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2701 = hdLod7(param_92, param_93).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_2701;
                float _RESERVED_IDENTIFIER_FIXUP_2706 = float(_RESERVED_IDENTIFIER_FIXUP_2701 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_2706;
                float _RESERVED_IDENTIFIER_FIXUP_2709 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2638 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3552.z = _RESERVED_IDENTIFIER_FIXUP_2709;
                float _RESERVED_IDENTIFIER_FIXUP_2715 = _RESERVED_IDENTIFIER_FIXUP_2706 + _RESERVED_IDENTIFIER_FIXUP_2709;
                _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_2715;
                _RESERVED_IDENTIFIER_FIXUP_3552.x = _RESERVED_IDENTIFIER_FIXUP_2715 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3864 = _RESERVED_IDENTIFIER_FIXUP_3552;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_2118.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2118.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2731 = (_RESERVED_IDENTIFIER_FIXUP_2118.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3471;
                _RESERVED_IDENTIFIER_FIXUP_3471.x = _RESERVED_IDENTIFIER_FIXUP_2731.x;
                _RESERVED_IDENTIFIER_FIXUP_3471.y = _RESERVED_IDENTIFIER_FIXUP_2731.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2741 = _RESERVED_IDENTIFIER_FIXUP_3471.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3475;
                _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_2741.x;
                _RESERVED_IDENTIFIER_FIXUP_3475.y = _RESERVED_IDENTIFIER_FIXUP_2741.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2751 = _RESERVED_IDENTIFIER_FIXUP_3471.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3479;
                _RESERVED_IDENTIFIER_FIXUP_3479.x = _RESERVED_IDENTIFIER_FIXUP_2751.x;
                _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2751.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2761 = _RESERVED_IDENTIFIER_FIXUP_3471.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3483;
                _RESERVED_IDENTIFIER_FIXUP_3483.x = _RESERVED_IDENTIFIER_FIXUP_2761.x;
                _RESERVED_IDENTIFIER_FIXUP_3483.y = _RESERVED_IDENTIFIER_FIXUP_2761.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2771 = _RESERVED_IDENTIFIER_FIXUP_3471.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3487;
                _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_2771.x;
                _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2771.y;
                _RESERVED_IDENTIFIER_FIXUP_3471.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3471.xy;
                float param_95 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2785 = hdLod8(param_94, param_95);
                _RESERVED_IDENTIFIER_FIXUP_3475.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3479.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3483.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3487.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3475.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2785.y = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3479.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2785.z = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3483.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2785.w = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3487.xy;
                float param_103 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2848 = hdLod8(param_102, param_103).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3527 = _RESERVED_IDENTIFIER_FIXUP_3462;
                _RESERVED_IDENTIFIER_FIXUP_3527.y = _RESERVED_IDENTIFIER_FIXUP_2848;
                float _RESERVED_IDENTIFIER_FIXUP_2853 = float(_RESERVED_IDENTIFIER_FIXUP_2848 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3527.y = _RESERVED_IDENTIFIER_FIXUP_2853;
                float _RESERVED_IDENTIFIER_FIXUP_2856 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2785 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3527.z = _RESERVED_IDENTIFIER_FIXUP_2856;
                float _RESERVED_IDENTIFIER_FIXUP_2862 = _RESERVED_IDENTIFIER_FIXUP_2853 + _RESERVED_IDENTIFIER_FIXUP_2856;
                _RESERVED_IDENTIFIER_FIXUP_3527.y = _RESERVED_IDENTIFIER_FIXUP_2862;
                float _RESERVED_IDENTIFIER_FIXUP_2870 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3527.z = _RESERVED_IDENTIFIER_FIXUP_2870;
                float _RESERVED_IDENTIFIER_FIXUP_2876 = clamp((_RESERVED_IDENTIFIER_FIXUP_2870 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3527.z = _RESERVED_IDENTIFIER_FIXUP_2876;
                float _RESERVED_IDENTIFIER_FIXUP_2881 = (_RESERVED_IDENTIFIER_FIXUP_2862 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3527.y = _RESERVED_IDENTIFIER_FIXUP_2881;
                _RESERVED_IDENTIFIER_FIXUP_3527.x = (_RESERVED_IDENTIFIER_FIXUP_2876 * _RESERVED_IDENTIFIER_FIXUP_2881) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3864 = _RESERVED_IDENTIFIER_FIXUP_3527;
            }
            _RESERVED_IDENTIFIER_FIXUP_3863 = _RESERVED_IDENTIFIER_FIXUP_3864;
        }
        _RESERVED_IDENTIFIER_FIXUP_3862 = _RESERVED_IDENTIFIER_FIXUP_3863;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2896 = (_RESERVED_IDENTIFIER_FIXUP_3862.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3802 = _RESERVED_IDENTIFIER_FIXUP_3862;
    _RESERVED_IDENTIFIER_FIXUP_3802.y = _RESERVED_IDENTIFIER_FIXUP_2896;
    _RESERVED_IDENTIFIER_FIXUP_3802.y = _RESERVED_IDENTIFIER_FIXUP_2896;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2909 = _RESERVED_IDENTIFIER_FIXUP_2141.xyz * _RESERVED_IDENTIFIER_FIXUP_3802.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3808 = _RESERVED_IDENTIFIER_FIXUP_3802;
    _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_2909.x;
    _RESERVED_IDENTIFIER_FIXUP_3808.z = _RESERVED_IDENTIFIER_FIXUP_2909.y;
    _RESERVED_IDENTIFIER_FIXUP_3808.w = _RESERVED_IDENTIFIER_FIXUP_2909.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2920 = _RESERVED_IDENTIFIER_FIXUP_3808.yzw * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3814 = _RESERVED_IDENTIFIER_FIXUP_3808;
    _RESERVED_IDENTIFIER_FIXUP_3814.y = _RESERVED_IDENTIFIER_FIXUP_2920.x;
    _RESERVED_IDENTIFIER_FIXUP_3814.z = _RESERVED_IDENTIFIER_FIXUP_2920.y;
    _RESERVED_IDENTIFIER_FIXUP_3814.w = _RESERVED_IDENTIFIER_FIXUP_2920.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2931 = _RESERVED_IDENTIFIER_FIXUP_3814.yzw + _RESERVED_IDENTIFIER_FIXUP_3814.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2933 = _RESERVED_IDENTIFIER_FIXUP_2931.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3820 = _RESERVED_IDENTIFIER_FIXUP_3814;
    _RESERVED_IDENTIFIER_FIXUP_3820.y = _RESERVED_IDENTIFIER_FIXUP_2933;
    _RESERVED_IDENTIFIER_FIXUP_3820.z = _RESERVED_IDENTIFIER_FIXUP_2931.y;
    _RESERVED_IDENTIFIER_FIXUP_3820.w = _RESERVED_IDENTIFIER_FIXUP_2931.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2942 = _RESERVED_IDENTIFIER_FIXUP_2141.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3826 = _RESERVED_IDENTIFIER_FIXUP_2141;
    _RESERVED_IDENTIFIER_FIXUP_3826.x = _RESERVED_IDENTIFIER_FIXUP_2942.x;
    _RESERVED_IDENTIFIER_FIXUP_3826.y = _RESERVED_IDENTIFIER_FIXUP_2942.y;
    _RESERVED_IDENTIFIER_FIXUP_3826.z = _RESERVED_IDENTIFIER_FIXUP_2942.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2956 = (_RESERVED_IDENTIFIER_FIXUP_3826.xyz * _RESERVED_IDENTIFIER_FIXUP_3820.xxx) + _RESERVED_IDENTIFIER_FIXUP_3820.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3873 = vec4(_RESERVED_IDENTIFIER_FIXUP_2956.x, _RESERVED_IDENTIFIER_FIXUP_2933, _RESERVED_IDENTIFIER_FIXUP_2931.yz);
    _RESERVED_IDENTIFIER_FIXUP_3873.y = _RESERVED_IDENTIFIER_FIXUP_2956.y;
    _RESERVED_IDENTIFIER_FIXUP_3873.z = _RESERVED_IDENTIFIER_FIXUP_2956.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2969 = _RESERVED_IDENTIFIER_FIXUP_3873.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3838 = _RESERVED_IDENTIFIER_FIXUP_3873;
    _RESERVED_IDENTIFIER_FIXUP_3838.x = _RESERVED_IDENTIFIER_FIXUP_2969.x;
    _RESERVED_IDENTIFIER_FIXUP_3838.y = _RESERVED_IDENTIFIER_FIXUP_2969.y;
    _RESERVED_IDENTIFIER_FIXUP_3838.z = _RESERVED_IDENTIFIER_FIXUP_2969.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3838.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1047 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1056;
    if (_RESERVED_IDENTIFIER_FIXUP_1047)
    {
        _RESERVED_IDENTIFIER_FIXUP_1056 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1056 = _RESERVED_IDENTIFIER_FIXUP_1047;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1056)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1093 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3429.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1120 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3028;
    if (_RESERVED_IDENTIFIER_FIXUP_1093 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3028 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1093), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1120);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3028 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1120);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3028;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2896);
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
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        vec2 hdB142 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.x = hdB142.x;
        r0.y = hdB142.y;
        vec2 hdB163 = r0.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB163.x;
        r2.y = hdB163.y;
        vec2 hdB174 = r0.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB174.x;
        r3.y = hdB174.y;
        vec2 hdB185 = r0.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB185.x;
        r4.y = hdB185.y;
        vec2 hdB196 = r0.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB196.x;
        r5.y = hdB196.y;
        vec2 hdB207 = r0.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB207.x;
        r6.y = hdB207.y;
        vec2 hdB218 = r0.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB218.x;
        r7.y = hdB218.y;
        vec2 hdB229 = r0.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB229.x;
        r8.y = hdB229.y;
        vec4 hdB234 = r0;
        vec2 hdB240 = hdB234.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r0.x = hdB240.x;
        r0.y = hdB240.y;
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
        r0.z = 0.0;
        r0.w = 0.0;
        vec2 param_20 = r0.xy;
        float param_21 = r0.w;
        r0 = hdLod5(param_20, param_21);
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
        r0.x += (-v5.z);
        r0.x = float(r0.x >= 0.0);
        r0.y = dot(r2, vec4(1.0));
        r0.z = dot(r3, vec4(1.0));
        r0.y += r0.z;
        r0.x += r0.y;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v6.x), abs(v6.y));
        if (r0.y < 1.0)
        {
            vec2 hdB428 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB428.x;
            r0.z = hdB428.y;
            vec2 hdB438 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB438.x;
            r2.y = hdB438.y;
            vec2 hdB448 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB448.x;
            r3.y = hdB448.y;
            vec2 hdB458 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB458.x;
            r4.y = hdB458.y;
            vec2 hdB468 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB468.x;
            r5.y = hdB468.y;
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
            r0.y = r5.x + (-v6.z);
            r0.y = float(r0.y >= 0.0);
            r0.z = dot(r2, vec4(1.0));
            r0.y += r0.z;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v7.x), abs(v7.y));
            if (r0.y < 1.0)
            {
                vec2 hdB584 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB584.x;
                r0.z = hdB584.y;
                vec2 hdB594 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB594.x;
                r2.y = hdB594.y;
                vec2 hdB604 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB604.x;
                r3.y = hdB604.y;
                vec2 hdB614 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB614.x;
                r4.y = hdB614.y;
                vec2 hdB624 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB624.x;
                r5.y = hdB624.y;
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
                r0.y = r5.x + (-v7.z);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r2, vec4(1.0));
                r0.y += r0.z;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v5.w;
                r2.y = v6.w;
                vec2 hdB732 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB732.x;
                r3.y = hdB732.y;
                vec2 hdB742 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB742.x;
                r4.y = hdB742.y;
                vec2 hdB752 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB752.x;
                r5.y = hdB752.y;
                vec2 hdB762 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB762.x;
                r6.y = hdB762.y;
                vec2 hdB772 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB772.x;
                r7.y = hdB772.y;
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
                r0.y = r7.x + (-v7.w);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r3, vec4(1.0));
                r0.y += r0.z;
                r0.z = max(abs(r2.x), abs(r2.y));
                r0.z = clamp((r0.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.z * r0.y) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB904 = r0;
    vec3 hdB906 = r1.xyz * hdB904.yyy;
    r0.y = hdB906.x;
    r0.z = hdB906.y;
    r0.w = hdB906.z;
    vec4 hdB913 = r0;
    vec3 hdB917 = hdB913.yzw * v0.xyz;
    r0.y = hdB917.x;
    r0.z = hdB917.y;
    r0.w = hdB917.z;
    vec4 hdB924 = r0;
    vec4 hdB926 = r0;
    vec3 hdB928 = hdB924.yzw + hdB926.yzw;
    r0.y = hdB928.x;
    r0.z = hdB928.y;
    r0.w = hdB928.z;
    vec4 hdB935 = r1;
    vec3 hdB939 = hdB935.www * v1.xyz;
    r1.x = hdB939.x;
    r1.y = hdB939.y;
    r1.z = hdB939.z;
    vec4 hdB948 = r0;
    vec4 hdB951 = r0;
    vec3 hdB953 = (r1.xyz * hdB948.xxx) + hdB951.yzw;
    r0.x = hdB953.x;
    r0.y = hdB953.y;
    r0.z = hdB953.z;
    vec4 hdB960 = r0;
    vec3 hdB967 = hdB960.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB967.x;
    r0.y = hdB967.y;
    r0.z = hdB967.z;
    vec3 hdB982 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB982.x;
    oC0.y = hdB982.y;
    oC0.z = hdB982.z;
    oC0.w = 1.0;
    bool hdB995 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1003;
    if (hdB995)
    {
        hdB1003 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1003 = hdB995;
    }
    if (hdB1003)
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
    bool _3386 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3396;
    if (_3386)
    {
        _3396 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3396 = _3386;
    }
    if (_3396)
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
        bool _3421 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3436;
        if (!_3421)
        {
            _3436 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3436 = _3421;
        }
        if (_3436)
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
