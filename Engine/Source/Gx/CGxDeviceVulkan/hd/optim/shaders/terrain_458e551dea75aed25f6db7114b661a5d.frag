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
float _RESERVED_IDENTIFIER_FIXUP_3426;
vec4 _RESERVED_IDENTIFIER_FIXUP_3427;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1071 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1075 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1079 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1083 = hdTex3(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1093 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1071, _RESERVED_IDENTIFIER_FIXUP_1075, _RESERVED_IDENTIFIER_FIXUP_1083.xxxx), _RESERVED_IDENTIFIER_FIXUP_1079, _RESERVED_IDENTIFIER_FIXUP_1083.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1100 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2701 = _RESERVED_IDENTIFIER_FIXUP_1075;
    _RESERVED_IDENTIFIER_FIXUP_2701.x = _RESERVED_IDENTIFIER_FIXUP_1100;
    float _RESERVED_IDENTIFIER_FIXUP_1106 = clamp((_RESERVED_IDENTIFIER_FIXUP_1100 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2701.x = _RESERVED_IDENTIFIER_FIXUP_1106;
    float _RESERVED_IDENTIFIER_FIXUP_1112 = ((-_RESERVED_IDENTIFIER_FIXUP_1106) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2701.y = _RESERVED_IDENTIFIER_FIXUP_1112;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3429;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3428;
    if (_RESERVED_IDENTIFIER_FIXUP_1112 != (-_RESERVED_IDENTIFIER_FIXUP_1112))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1124 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2713 = _RESERVED_IDENTIFIER_FIXUP_2701;
        _RESERVED_IDENTIFIER_FIXUP_2713.y = _RESERVED_IDENTIFIER_FIXUP_1124.x;
        _RESERVED_IDENTIFIER_FIXUP_2713.z = _RESERVED_IDENTIFIER_FIXUP_1124.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1134 = _RESERVED_IDENTIFIER_FIXUP_2713.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2717;
        _RESERVED_IDENTIFIER_FIXUP_2717.x = _RESERVED_IDENTIFIER_FIXUP_1134.x;
        _RESERVED_IDENTIFIER_FIXUP_2717.y = _RESERVED_IDENTIFIER_FIXUP_1134.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1144 = _RESERVED_IDENTIFIER_FIXUP_2713.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2721;
        _RESERVED_IDENTIFIER_FIXUP_2721.x = _RESERVED_IDENTIFIER_FIXUP_1144.x;
        _RESERVED_IDENTIFIER_FIXUP_2721.y = _RESERVED_IDENTIFIER_FIXUP_1144.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_2713.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2725;
        _RESERVED_IDENTIFIER_FIXUP_2725.x = _RESERVED_IDENTIFIER_FIXUP_1154.x;
        _RESERVED_IDENTIFIER_FIXUP_2725.y = _RESERVED_IDENTIFIER_FIXUP_1154.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1164 = _RESERVED_IDENTIFIER_FIXUP_2713.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2729;
        _RESERVED_IDENTIFIER_FIXUP_2729.x = _RESERVED_IDENTIFIER_FIXUP_1164.x;
        _RESERVED_IDENTIFIER_FIXUP_2729.y = _RESERVED_IDENTIFIER_FIXUP_1164.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1172 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1172.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1172.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_2717.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2721.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2725.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2729.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2717.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1178.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2721.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1178.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2725.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1178.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1235 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1178 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_2729.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1241 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2713.y = _RESERVED_IDENTIFIER_FIXUP_1241;
        float _RESERVED_IDENTIFIER_FIXUP_1246 = float(_RESERVED_IDENTIFIER_FIXUP_1241 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2713.y = _RESERVED_IDENTIFIER_FIXUP_1246;
        float _RESERVED_IDENTIFIER_FIXUP_1249 = dot(_RESERVED_IDENTIFIER_FIXUP_1235, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2713.z = _RESERVED_IDENTIFIER_FIXUP_1249;
        float _RESERVED_IDENTIFIER_FIXUP_1255 = _RESERVED_IDENTIFIER_FIXUP_1246 + _RESERVED_IDENTIFIER_FIXUP_1249;
        _RESERVED_IDENTIFIER_FIXUP_2713.y = _RESERVED_IDENTIFIER_FIXUP_1255;
        float _RESERVED_IDENTIFIER_FIXUP_1260 = (_RESERVED_IDENTIFIER_FIXUP_1255 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2713.y = _RESERVED_IDENTIFIER_FIXUP_1260;
        _RESERVED_IDENTIFIER_FIXUP_2713.x = (_RESERVED_IDENTIFIER_FIXUP_1106 * _RESERVED_IDENTIFIER_FIXUP_1260) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3429 = _RESERVED_IDENTIFIER_FIXUP_1235;
        _RESERVED_IDENTIFIER_FIXUP_3428 = _RESERVED_IDENTIFIER_FIXUP_2713;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2711 = _RESERVED_IDENTIFIER_FIXUP_2701;
        _RESERVED_IDENTIFIER_FIXUP_2711.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3429 = _RESERVED_IDENTIFIER_FIXUP_1079;
        _RESERVED_IDENTIFIER_FIXUP_3428 = _RESERVED_IDENTIFIER_FIXUP_2711;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1278 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2785 = _RESERVED_IDENTIFIER_FIXUP_3428;
    _RESERVED_IDENTIFIER_FIXUP_2785.y = _RESERVED_IDENTIFIER_FIXUP_1278;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3432;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3430;
    if (_RESERVED_IDENTIFIER_FIXUP_1278 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1287 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2946 = _RESERVED_IDENTIFIER_FIXUP_2785;
        _RESERVED_IDENTIFIER_FIXUP_2946.y = _RESERVED_IDENTIFIER_FIXUP_1287.x;
        _RESERVED_IDENTIFIER_FIXUP_2946.z = _RESERVED_IDENTIFIER_FIXUP_1287.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_2946.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2950;
        _RESERVED_IDENTIFIER_FIXUP_2950.x = _RESERVED_IDENTIFIER_FIXUP_1297.x;
        _RESERVED_IDENTIFIER_FIXUP_2950.y = _RESERVED_IDENTIFIER_FIXUP_1297.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1307 = _RESERVED_IDENTIFIER_FIXUP_2946.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2954;
        _RESERVED_IDENTIFIER_FIXUP_2954.x = _RESERVED_IDENTIFIER_FIXUP_1307.x;
        _RESERVED_IDENTIFIER_FIXUP_2954.y = _RESERVED_IDENTIFIER_FIXUP_1307.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1317 = _RESERVED_IDENTIFIER_FIXUP_2946.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2958;
        _RESERVED_IDENTIFIER_FIXUP_2958.x = _RESERVED_IDENTIFIER_FIXUP_1317.x;
        _RESERVED_IDENTIFIER_FIXUP_2958.y = _RESERVED_IDENTIFIER_FIXUP_1317.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_2946.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2962;
        _RESERVED_IDENTIFIER_FIXUP_2962.x = _RESERVED_IDENTIFIER_FIXUP_1327.x;
        _RESERVED_IDENTIFIER_FIXUP_2962.y = _RESERVED_IDENTIFIER_FIXUP_1327.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1335 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1335.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1335.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1341 = hdLod6(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_2950.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2954.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2958.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2962.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2950.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1341.y = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2954.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1341.z = hdLod6(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2958.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1341.w = hdLod6(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1398 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1341 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_2962.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1404 = hdLod6(param_22, param_23).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2946.y = _RESERVED_IDENTIFIER_FIXUP_1404;
        float _RESERVED_IDENTIFIER_FIXUP_1409 = float(_RESERVED_IDENTIFIER_FIXUP_1404 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2946.y = _RESERVED_IDENTIFIER_FIXUP_1409;
        float _RESERVED_IDENTIFIER_FIXUP_1412 = dot(_RESERVED_IDENTIFIER_FIXUP_1398, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2946.z = _RESERVED_IDENTIFIER_FIXUP_1412;
        float _RESERVED_IDENTIFIER_FIXUP_1418 = _RESERVED_IDENTIFIER_FIXUP_1409 + _RESERVED_IDENTIFIER_FIXUP_1412;
        _RESERVED_IDENTIFIER_FIXUP_2946.y = _RESERVED_IDENTIFIER_FIXUP_1418;
        _RESERVED_IDENTIFIER_FIXUP_2946.y = _RESERVED_IDENTIFIER_FIXUP_1418 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_1398;
        _RESERVED_IDENTIFIER_FIXUP_3430 = _RESERVED_IDENTIFIER_FIXUP_2946;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1431 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2790 = _RESERVED_IDENTIFIER_FIXUP_2785;
        _RESERVED_IDENTIFIER_FIXUP_2790.z = _RESERVED_IDENTIFIER_FIXUP_1431;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3433;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3431;
        if (_RESERVED_IDENTIFIER_FIXUP_1431 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1440 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2880 = _RESERVED_IDENTIFIER_FIXUP_2790;
            _RESERVED_IDENTIFIER_FIXUP_2880.z = _RESERVED_IDENTIFIER_FIXUP_1440.x;
            _RESERVED_IDENTIFIER_FIXUP_2880.w = _RESERVED_IDENTIFIER_FIXUP_1440.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1450 = _RESERVED_IDENTIFIER_FIXUP_2880.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2884;
            _RESERVED_IDENTIFIER_FIXUP_2884.x = _RESERVED_IDENTIFIER_FIXUP_1450.x;
            _RESERVED_IDENTIFIER_FIXUP_2884.y = _RESERVED_IDENTIFIER_FIXUP_1450.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1460 = _RESERVED_IDENTIFIER_FIXUP_2880.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2888;
            _RESERVED_IDENTIFIER_FIXUP_2888.x = _RESERVED_IDENTIFIER_FIXUP_1460.x;
            _RESERVED_IDENTIFIER_FIXUP_2888.y = _RESERVED_IDENTIFIER_FIXUP_1460.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_2880.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2892;
            _RESERVED_IDENTIFIER_FIXUP_2892.x = _RESERVED_IDENTIFIER_FIXUP_1470.x;
            _RESERVED_IDENTIFIER_FIXUP_2892.y = _RESERVED_IDENTIFIER_FIXUP_1470.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1480 = _RESERVED_IDENTIFIER_FIXUP_2880.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2896;
            _RESERVED_IDENTIFIER_FIXUP_2896.x = _RESERVED_IDENTIFIER_FIXUP_1480.x;
            _RESERVED_IDENTIFIER_FIXUP_2896.y = _RESERVED_IDENTIFIER_FIXUP_1480.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1488 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1488.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1488.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1494 = hdLod7(param_24, param_25);
            _RESERVED_IDENTIFIER_FIXUP_2884.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2888.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2892.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2896.w = 0.0;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2884.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1494.y = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2888.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1494.z = hdLod7(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2892.xy;
            float param_31 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1494.w = hdLod7(param_30, param_31).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1551 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1494 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2896.xy;
            float param_33 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1557 = hdLod7(param_32, param_33).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2880.z = _RESERVED_IDENTIFIER_FIXUP_1557;
            float _RESERVED_IDENTIFIER_FIXUP_1562 = float(_RESERVED_IDENTIFIER_FIXUP_1557 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2880.z = _RESERVED_IDENTIFIER_FIXUP_1562;
            float _RESERVED_IDENTIFIER_FIXUP_1565 = dot(_RESERVED_IDENTIFIER_FIXUP_1551, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2880.w = _RESERVED_IDENTIFIER_FIXUP_1565;
            float _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_1562 + _RESERVED_IDENTIFIER_FIXUP_1565;
            _RESERVED_IDENTIFIER_FIXUP_2880.z = _RESERVED_IDENTIFIER_FIXUP_1571;
            _RESERVED_IDENTIFIER_FIXUP_2880.y = _RESERVED_IDENTIFIER_FIXUP_1571 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_1551;
            _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_2880;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2794 = _RESERVED_IDENTIFIER_FIXUP_3429;
            _RESERVED_IDENTIFIER_FIXUP_2794.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2794.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1587 = (_RESERVED_IDENTIFIER_FIXUP_2794.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2799;
            _RESERVED_IDENTIFIER_FIXUP_2799.x = _RESERVED_IDENTIFIER_FIXUP_1587.x;
            _RESERVED_IDENTIFIER_FIXUP_2799.y = _RESERVED_IDENTIFIER_FIXUP_1587.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_2799.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2803;
            _RESERVED_IDENTIFIER_FIXUP_2803.x = _RESERVED_IDENTIFIER_FIXUP_1597.x;
            _RESERVED_IDENTIFIER_FIXUP_2803.y = _RESERVED_IDENTIFIER_FIXUP_1597.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_2799.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2807;
            _RESERVED_IDENTIFIER_FIXUP_2807.x = _RESERVED_IDENTIFIER_FIXUP_1607.x;
            _RESERVED_IDENTIFIER_FIXUP_2807.y = _RESERVED_IDENTIFIER_FIXUP_1607.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1617 = _RESERVED_IDENTIFIER_FIXUP_2799.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2811;
            _RESERVED_IDENTIFIER_FIXUP_2811.x = _RESERVED_IDENTIFIER_FIXUP_1617.x;
            _RESERVED_IDENTIFIER_FIXUP_2811.y = _RESERVED_IDENTIFIER_FIXUP_1617.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1627 = _RESERVED_IDENTIFIER_FIXUP_2799.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2815;
            _RESERVED_IDENTIFIER_FIXUP_2815.x = _RESERVED_IDENTIFIER_FIXUP_1627.x;
            _RESERVED_IDENTIFIER_FIXUP_2815.y = _RESERVED_IDENTIFIER_FIXUP_1627.y;
            _RESERVED_IDENTIFIER_FIXUP_2799.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_2799.xy;
            float param_35 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1641 = hdLod8(param_34, param_35);
            _RESERVED_IDENTIFIER_FIXUP_2803.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2807.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2811.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2815.w = 0.0;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2803.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1641.y = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2807.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1641.z = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2811.xy;
            float param_41 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1641.w = hdLod8(param_40, param_41).x;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_2815.xy;
            float param_43 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1704 = hdLod8(param_42, param_43).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2855 = _RESERVED_IDENTIFIER_FIXUP_2790;
            _RESERVED_IDENTIFIER_FIXUP_2855.z = _RESERVED_IDENTIFIER_FIXUP_1704;
            float _RESERVED_IDENTIFIER_FIXUP_1709 = float(_RESERVED_IDENTIFIER_FIXUP_1704 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2855.z = _RESERVED_IDENTIFIER_FIXUP_1709;
            float _RESERVED_IDENTIFIER_FIXUP_1712 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1641 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2855.w = _RESERVED_IDENTIFIER_FIXUP_1712;
            float _RESERVED_IDENTIFIER_FIXUP_1718 = _RESERVED_IDENTIFIER_FIXUP_1709 + _RESERVED_IDENTIFIER_FIXUP_1712;
            _RESERVED_IDENTIFIER_FIXUP_2855.z = _RESERVED_IDENTIFIER_FIXUP_1718;
            float _RESERVED_IDENTIFIER_FIXUP_1726 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2855.w = _RESERVED_IDENTIFIER_FIXUP_1726;
            float _RESERVED_IDENTIFIER_FIXUP_1732 = clamp((_RESERVED_IDENTIFIER_FIXUP_1726 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2855.w = _RESERVED_IDENTIFIER_FIXUP_1732;
            float _RESERVED_IDENTIFIER_FIXUP_1737 = (_RESERVED_IDENTIFIER_FIXUP_1718 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2855.z = _RESERVED_IDENTIFIER_FIXUP_1737;
            _RESERVED_IDENTIFIER_FIXUP_2855.y = (_RESERVED_IDENTIFIER_FIXUP_1732 * _RESERVED_IDENTIFIER_FIXUP_1737) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_2794;
            _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_2855;
        }
        _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_3433;
        _RESERVED_IDENTIFIER_FIXUP_3430 = _RESERVED_IDENTIFIER_FIXUP_3431;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1752 = min(_RESERVED_IDENTIFIER_FIXUP_3430.y, _RESERVED_IDENTIFIER_FIXUP_3430.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3014 = _RESERVED_IDENTIFIER_FIXUP_3432;
    _RESERVED_IDENTIFIER_FIXUP_3014.x = _RESERVED_IDENTIFIER_FIXUP_1752;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3017 = _RESERVED_IDENTIFIER_FIXUP_3430;
    _RESERVED_IDENTIFIER_FIXUP_3017.x = (_RESERVED_IDENTIFIER_FIXUP_1752 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1763 = _RESERVED_IDENTIFIER_FIXUP_1093.xyz * _RESERVED_IDENTIFIER_FIXUP_3017.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3019 = _RESERVED_IDENTIFIER_FIXUP_1093;
    _RESERVED_IDENTIFIER_FIXUP_3019.x = _RESERVED_IDENTIFIER_FIXUP_1763.x;
    _RESERVED_IDENTIFIER_FIXUP_3019.y = _RESERVED_IDENTIFIER_FIXUP_1763.y;
    _RESERVED_IDENTIFIER_FIXUP_3019.z = _RESERVED_IDENTIFIER_FIXUP_1763.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1774 = _RESERVED_IDENTIFIER_FIXUP_3019.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3426).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3025 = _RESERVED_IDENTIFIER_FIXUP_3019;
    _RESERVED_IDENTIFIER_FIXUP_3025.x = _RESERVED_IDENTIFIER_FIXUP_1774.x;
    _RESERVED_IDENTIFIER_FIXUP_3025.y = _RESERVED_IDENTIFIER_FIXUP_1774.y;
    _RESERVED_IDENTIFIER_FIXUP_3025.z = _RESERVED_IDENTIFIER_FIXUP_1774.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1785 = _RESERVED_IDENTIFIER_FIXUP_3025.xyz + _RESERVED_IDENTIFIER_FIXUP_3025.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3031 = _RESERVED_IDENTIFIER_FIXUP_3025;
    _RESERVED_IDENTIFIER_FIXUP_3031.x = _RESERVED_IDENTIFIER_FIXUP_1785.x;
    _RESERVED_IDENTIFIER_FIXUP_3031.y = _RESERVED_IDENTIFIER_FIXUP_1785.y;
    _RESERVED_IDENTIFIER_FIXUP_3031.z = _RESERVED_IDENTIFIER_FIXUP_1785.z;
    _RESERVED_IDENTIFIER_FIXUP_3017.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3017.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3017.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1810 = (_RESERVED_IDENTIFIER_FIXUP_3017.xyz * _RESERVED_IDENTIFIER_FIXUP_3014.xxx) + _RESERVED_IDENTIFIER_FIXUP_3031.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3043 = _RESERVED_IDENTIFIER_FIXUP_3031;
    _RESERVED_IDENTIFIER_FIXUP_3043.x = _RESERVED_IDENTIFIER_FIXUP_1810.x;
    _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1810.y;
    _RESERVED_IDENTIFIER_FIXUP_3043.z = _RESERVED_IDENTIFIER_FIXUP_1810.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1823 = _RESERVED_IDENTIFIER_FIXUP_3043.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3049 = _RESERVED_IDENTIFIER_FIXUP_3043;
    _RESERVED_IDENTIFIER_FIXUP_3049.x = _RESERVED_IDENTIFIER_FIXUP_1823.x;
    _RESERVED_IDENTIFIER_FIXUP_3049.y = _RESERVED_IDENTIFIER_FIXUP_1823.y;
    _RESERVED_IDENTIFIER_FIXUP_3049.z = _RESERVED_IDENTIFIER_FIXUP_1823.z;
    vec2 param_44 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1880 = hdTex0(param_44);
    vec2 param_45 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1884 = hdTex1(param_45);
    vec2 param_46 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1888 = hdTex2(param_46);
    vec2 param_47 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1892 = hdTex3(param_47);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1902 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1880, _RESERVED_IDENTIFIER_FIXUP_1884, _RESERVED_IDENTIFIER_FIXUP_1892.xxxx), _RESERVED_IDENTIFIER_FIXUP_1888, _RESERVED_IDENTIFIER_FIXUP_1892.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3065 = _RESERVED_IDENTIFIER_FIXUP_1884;
    _RESERVED_IDENTIFIER_FIXUP_3065.x = _RESERVED_IDENTIFIER_FIXUP_1100;
    float _RESERVED_IDENTIFIER_FIXUP_1915 = clamp((_RESERVED_IDENTIFIER_FIXUP_1100 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3065.x = _RESERVED_IDENTIFIER_FIXUP_1915;
    float _RESERVED_IDENTIFIER_FIXUP_1921 = ((-_RESERVED_IDENTIFIER_FIXUP_1915) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3065.y = _RESERVED_IDENTIFIER_FIXUP_1921;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3441;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3440;
    if (_RESERVED_IDENTIFIER_FIXUP_1921 != (-_RESERVED_IDENTIFIER_FIXUP_1921))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1933 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3077 = _RESERVED_IDENTIFIER_FIXUP_3065;
        _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_1933.x;
        _RESERVED_IDENTIFIER_FIXUP_3077.z = _RESERVED_IDENTIFIER_FIXUP_1933.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1943 = _RESERVED_IDENTIFIER_FIXUP_3077.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3081;
        _RESERVED_IDENTIFIER_FIXUP_3081.x = _RESERVED_IDENTIFIER_FIXUP_1943.x;
        _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1943.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1953 = _RESERVED_IDENTIFIER_FIXUP_3077.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3085;
        _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_1953.x;
        _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1953.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1963 = _RESERVED_IDENTIFIER_FIXUP_3077.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3089;
        _RESERVED_IDENTIFIER_FIXUP_3089.x = _RESERVED_IDENTIFIER_FIXUP_1963.x;
        _RESERVED_IDENTIFIER_FIXUP_3089.y = _RESERVED_IDENTIFIER_FIXUP_1963.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1973 = _RESERVED_IDENTIFIER_FIXUP_3077.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3093;
        _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_1973.x;
        _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_1973.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1981 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_1981.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1981.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1987 = hdLod5(param_48, param_49);
        _RESERVED_IDENTIFIER_FIXUP_3081.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3085.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3089.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3093.w = 0.0;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3081.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1987.y = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3085.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1987.z = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3089.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1987.w = hdLod5(param_54, param_55).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2044 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1987 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3093.xy;
        float param_57 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2050 = hdLod5(param_56, param_57).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_2050;
        float _RESERVED_IDENTIFIER_FIXUP_2055 = float(_RESERVED_IDENTIFIER_FIXUP_2050 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_2055;
        float _RESERVED_IDENTIFIER_FIXUP_2058 = dot(_RESERVED_IDENTIFIER_FIXUP_2044, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3077.z = _RESERVED_IDENTIFIER_FIXUP_2058;
        float _RESERVED_IDENTIFIER_FIXUP_2064 = _RESERVED_IDENTIFIER_FIXUP_2055 + _RESERVED_IDENTIFIER_FIXUP_2058;
        _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_2064;
        float _RESERVED_IDENTIFIER_FIXUP_2069 = (_RESERVED_IDENTIFIER_FIXUP_2064 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_2069;
        _RESERVED_IDENTIFIER_FIXUP_3077.x = (_RESERVED_IDENTIFIER_FIXUP_1915 * _RESERVED_IDENTIFIER_FIXUP_2069) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3441 = _RESERVED_IDENTIFIER_FIXUP_2044;
        _RESERVED_IDENTIFIER_FIXUP_3440 = _RESERVED_IDENTIFIER_FIXUP_3077;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3075 = _RESERVED_IDENTIFIER_FIXUP_3065;
        _RESERVED_IDENTIFIER_FIXUP_3075.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3441 = _RESERVED_IDENTIFIER_FIXUP_1888;
        _RESERVED_IDENTIFIER_FIXUP_3440 = _RESERVED_IDENTIFIER_FIXUP_3075;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3149 = _RESERVED_IDENTIFIER_FIXUP_3440;
    _RESERVED_IDENTIFIER_FIXUP_3149.y = _RESERVED_IDENTIFIER_FIXUP_1278;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3444;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3442;
    if (_RESERVED_IDENTIFIER_FIXUP_1278 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2096 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3310 = _RESERVED_IDENTIFIER_FIXUP_3149;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2096.x;
        _RESERVED_IDENTIFIER_FIXUP_3310.z = _RESERVED_IDENTIFIER_FIXUP_2096.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2106 = _RESERVED_IDENTIFIER_FIXUP_3310.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3314;
        _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_2106.x;
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_2106.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2116 = _RESERVED_IDENTIFIER_FIXUP_3310.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3318;
        _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_2116.x;
        _RESERVED_IDENTIFIER_FIXUP_3318.y = _RESERVED_IDENTIFIER_FIXUP_2116.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2126 = _RESERVED_IDENTIFIER_FIXUP_3310.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3322;
        _RESERVED_IDENTIFIER_FIXUP_3322.x = _RESERVED_IDENTIFIER_FIXUP_2126.x;
        _RESERVED_IDENTIFIER_FIXUP_3322.y = _RESERVED_IDENTIFIER_FIXUP_2126.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2136 = _RESERVED_IDENTIFIER_FIXUP_3310.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3326;
        _RESERVED_IDENTIFIER_FIXUP_3326.x = _RESERVED_IDENTIFIER_FIXUP_2136.x;
        _RESERVED_IDENTIFIER_FIXUP_3326.y = _RESERVED_IDENTIFIER_FIXUP_2136.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2144 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2144.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2144.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2150 = hdLod6(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3314.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3318.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3322.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3326.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3314.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2150.y = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3318.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2150.z = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3322.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2150.w = hdLod6(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2207 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2150 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3326.xy;
        float param_67 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2213 = hdLod6(param_66, param_67).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2213;
        float _RESERVED_IDENTIFIER_FIXUP_2218 = float(_RESERVED_IDENTIFIER_FIXUP_2213 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2218;
        float _RESERVED_IDENTIFIER_FIXUP_2221 = dot(_RESERVED_IDENTIFIER_FIXUP_2207, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3310.z = _RESERVED_IDENTIFIER_FIXUP_2221;
        float _RESERVED_IDENTIFIER_FIXUP_2227 = _RESERVED_IDENTIFIER_FIXUP_2218 + _RESERVED_IDENTIFIER_FIXUP_2221;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2227;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2227 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3444 = _RESERVED_IDENTIFIER_FIXUP_2207;
        _RESERVED_IDENTIFIER_FIXUP_3442 = _RESERVED_IDENTIFIER_FIXUP_3310;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2240 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3154 = _RESERVED_IDENTIFIER_FIXUP_3149;
        _RESERVED_IDENTIFIER_FIXUP_3154.z = _RESERVED_IDENTIFIER_FIXUP_2240;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3445;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3443;
        if (_RESERVED_IDENTIFIER_FIXUP_2240 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2249 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3244 = _RESERVED_IDENTIFIER_FIXUP_3154;
            _RESERVED_IDENTIFIER_FIXUP_3244.z = _RESERVED_IDENTIFIER_FIXUP_2249.x;
            _RESERVED_IDENTIFIER_FIXUP_3244.w = _RESERVED_IDENTIFIER_FIXUP_2249.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2259 = _RESERVED_IDENTIFIER_FIXUP_3244.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3248;
            _RESERVED_IDENTIFIER_FIXUP_3248.x = _RESERVED_IDENTIFIER_FIXUP_2259.x;
            _RESERVED_IDENTIFIER_FIXUP_3248.y = _RESERVED_IDENTIFIER_FIXUP_2259.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2269 = _RESERVED_IDENTIFIER_FIXUP_3244.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3252;
            _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_2269.x;
            _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_2269.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2279 = _RESERVED_IDENTIFIER_FIXUP_3244.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3256;
            _RESERVED_IDENTIFIER_FIXUP_3256.x = _RESERVED_IDENTIFIER_FIXUP_2279.x;
            _RESERVED_IDENTIFIER_FIXUP_3256.y = _RESERVED_IDENTIFIER_FIXUP_2279.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2289 = _RESERVED_IDENTIFIER_FIXUP_3244.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3260;
            _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_2289.x;
            _RESERVED_IDENTIFIER_FIXUP_3260.y = _RESERVED_IDENTIFIER_FIXUP_2289.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2297 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2297.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2297.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2303 = hdLod7(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3248.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3252.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3256.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3260.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3248.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2303.y = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3252.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2303.z = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3256.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2303.w = hdLod7(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2360 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2303 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3260.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2366 = hdLod7(param_76, param_77).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3244.z = _RESERVED_IDENTIFIER_FIXUP_2366;
            float _RESERVED_IDENTIFIER_FIXUP_2371 = float(_RESERVED_IDENTIFIER_FIXUP_2366 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3244.z = _RESERVED_IDENTIFIER_FIXUP_2371;
            float _RESERVED_IDENTIFIER_FIXUP_2374 = dot(_RESERVED_IDENTIFIER_FIXUP_2360, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3244.w = _RESERVED_IDENTIFIER_FIXUP_2374;
            float _RESERVED_IDENTIFIER_FIXUP_2380 = _RESERVED_IDENTIFIER_FIXUP_2371 + _RESERVED_IDENTIFIER_FIXUP_2374;
            _RESERVED_IDENTIFIER_FIXUP_3244.z = _RESERVED_IDENTIFIER_FIXUP_2380;
            _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_2380 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3445 = _RESERVED_IDENTIFIER_FIXUP_2360;
            _RESERVED_IDENTIFIER_FIXUP_3443 = _RESERVED_IDENTIFIER_FIXUP_3244;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3158 = _RESERVED_IDENTIFIER_FIXUP_3441;
            _RESERVED_IDENTIFIER_FIXUP_3158.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3158.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2396 = (_RESERVED_IDENTIFIER_FIXUP_3158.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3163;
            _RESERVED_IDENTIFIER_FIXUP_3163.x = _RESERVED_IDENTIFIER_FIXUP_2396.x;
            _RESERVED_IDENTIFIER_FIXUP_3163.y = _RESERVED_IDENTIFIER_FIXUP_2396.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2406 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3167;
            _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_2406.x;
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_2406.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2416 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3171;
            _RESERVED_IDENTIFIER_FIXUP_3171.x = _RESERVED_IDENTIFIER_FIXUP_2416.x;
            _RESERVED_IDENTIFIER_FIXUP_3171.y = _RESERVED_IDENTIFIER_FIXUP_2416.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2426 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3175;
            _RESERVED_IDENTIFIER_FIXUP_3175.x = _RESERVED_IDENTIFIER_FIXUP_2426.x;
            _RESERVED_IDENTIFIER_FIXUP_3175.y = _RESERVED_IDENTIFIER_FIXUP_2426.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2436 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3179;
            _RESERVED_IDENTIFIER_FIXUP_3179.x = _RESERVED_IDENTIFIER_FIXUP_2436.x;
            _RESERVED_IDENTIFIER_FIXUP_3179.y = _RESERVED_IDENTIFIER_FIXUP_2436.y;
            _RESERVED_IDENTIFIER_FIXUP_3163.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3163.xy;
            float param_79 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2450 = hdLod8(param_78, param_79);
            _RESERVED_IDENTIFIER_FIXUP_3167.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3171.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3175.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3179.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3167.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2450.y = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3171.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2450.z = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3175.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2450.w = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3179.xy;
            float param_87 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2513 = hdLod8(param_86, param_87).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3219 = _RESERVED_IDENTIFIER_FIXUP_3154;
            _RESERVED_IDENTIFIER_FIXUP_3219.z = _RESERVED_IDENTIFIER_FIXUP_2513;
            float _RESERVED_IDENTIFIER_FIXUP_2518 = float(_RESERVED_IDENTIFIER_FIXUP_2513 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3219.z = _RESERVED_IDENTIFIER_FIXUP_2518;
            float _RESERVED_IDENTIFIER_FIXUP_2521 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2450 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3219.w = _RESERVED_IDENTIFIER_FIXUP_2521;
            float _RESERVED_IDENTIFIER_FIXUP_2527 = _RESERVED_IDENTIFIER_FIXUP_2518 + _RESERVED_IDENTIFIER_FIXUP_2521;
            _RESERVED_IDENTIFIER_FIXUP_3219.z = _RESERVED_IDENTIFIER_FIXUP_2527;
            float _RESERVED_IDENTIFIER_FIXUP_2535 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3219.w = _RESERVED_IDENTIFIER_FIXUP_2535;
            float _RESERVED_IDENTIFIER_FIXUP_2541 = clamp((_RESERVED_IDENTIFIER_FIXUP_2535 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3219.w = _RESERVED_IDENTIFIER_FIXUP_2541;
            float _RESERVED_IDENTIFIER_FIXUP_2546 = (_RESERVED_IDENTIFIER_FIXUP_2527 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3219.z = _RESERVED_IDENTIFIER_FIXUP_2546;
            _RESERVED_IDENTIFIER_FIXUP_3219.y = (_RESERVED_IDENTIFIER_FIXUP_2541 * _RESERVED_IDENTIFIER_FIXUP_2546) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3445 = _RESERVED_IDENTIFIER_FIXUP_3158;
            _RESERVED_IDENTIFIER_FIXUP_3443 = _RESERVED_IDENTIFIER_FIXUP_3219;
        }
        _RESERVED_IDENTIFIER_FIXUP_3444 = _RESERVED_IDENTIFIER_FIXUP_3445;
        _RESERVED_IDENTIFIER_FIXUP_3442 = _RESERVED_IDENTIFIER_FIXUP_3443;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2561 = min(_RESERVED_IDENTIFIER_FIXUP_3442.y, _RESERVED_IDENTIFIER_FIXUP_3442.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3378 = _RESERVED_IDENTIFIER_FIXUP_3444;
    _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_2561;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3381 = _RESERVED_IDENTIFIER_FIXUP_3442;
    _RESERVED_IDENTIFIER_FIXUP_3381.x = (_RESERVED_IDENTIFIER_FIXUP_2561 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2572 = _RESERVED_IDENTIFIER_FIXUP_1902.xyz * _RESERVED_IDENTIFIER_FIXUP_3381.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3383 = _RESERVED_IDENTIFIER_FIXUP_1902;
    _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_2572.x;
    _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_2572.y;
    _RESERVED_IDENTIFIER_FIXUP_3383.z = _RESERVED_IDENTIFIER_FIXUP_2572.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2583 = _RESERVED_IDENTIFIER_FIXUP_3383.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3389 = _RESERVED_IDENTIFIER_FIXUP_3383;
    _RESERVED_IDENTIFIER_FIXUP_3389.x = _RESERVED_IDENTIFIER_FIXUP_2583.x;
    _RESERVED_IDENTIFIER_FIXUP_3389.y = _RESERVED_IDENTIFIER_FIXUP_2583.y;
    _RESERVED_IDENTIFIER_FIXUP_3389.z = _RESERVED_IDENTIFIER_FIXUP_2583.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_3389.xyz + _RESERVED_IDENTIFIER_FIXUP_3389.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3395 = _RESERVED_IDENTIFIER_FIXUP_3389;
    _RESERVED_IDENTIFIER_FIXUP_3395.x = _RESERVED_IDENTIFIER_FIXUP_2594.x;
    _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_2594.y;
    _RESERVED_IDENTIFIER_FIXUP_3395.z = _RESERVED_IDENTIFIER_FIXUP_2594.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2605 = _RESERVED_IDENTIFIER_FIXUP_3395.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3381.x = _RESERVED_IDENTIFIER_FIXUP_2605.x;
    _RESERVED_IDENTIFIER_FIXUP_3381.y = _RESERVED_IDENTIFIER_FIXUP_2605.y;
    _RESERVED_IDENTIFIER_FIXUP_3381.z = _RESERVED_IDENTIFIER_FIXUP_2605.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2619 = (_RESERVED_IDENTIFIER_FIXUP_3381.xyz * _RESERVED_IDENTIFIER_FIXUP_3378.xxx) + _RESERVED_IDENTIFIER_FIXUP_3395.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3407 = _RESERVED_IDENTIFIER_FIXUP_3395;
    _RESERVED_IDENTIFIER_FIXUP_3407.x = _RESERVED_IDENTIFIER_FIXUP_2619.x;
    _RESERVED_IDENTIFIER_FIXUP_3407.y = _RESERVED_IDENTIFIER_FIXUP_2619.y;
    _RESERVED_IDENTIFIER_FIXUP_3407.z = _RESERVED_IDENTIFIER_FIXUP_2619.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2632 = _RESERVED_IDENTIFIER_FIXUP_3407.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3413 = _RESERVED_IDENTIFIER_FIXUP_3407;
    _RESERVED_IDENTIFIER_FIXUP_3413.x = _RESERVED_IDENTIFIER_FIXUP_2632.x;
    _RESERVED_IDENTIFIER_FIXUP_3413.y = _RESERVED_IDENTIFIER_FIXUP_2632.y;
    _RESERVED_IDENTIFIER_FIXUP_3413.z = _RESERVED_IDENTIFIER_FIXUP_2632.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3413.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_929 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_938;
    if (_RESERVED_IDENTIFIER_FIXUP_929)
    {
        _RESERVED_IDENTIFIER_FIXUP_938 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_938 = _RESERVED_IDENTIFIER_FIXUP_929;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_938)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_975 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3049.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1002 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2691;
    if (_RESERVED_IDENTIFIER_FIXUP_975 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2691 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_975), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1002);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2691 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1002);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2691;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
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
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB126 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB126.x;
        r1.z = hdB126.y;
        vec2 hdB148 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB148.x;
        r2.y = hdB148.y;
        vec2 hdB159 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB159.x;
        r3.y = hdB159.y;
        vec2 hdB170 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB170.x;
        r4.y = hdB170.y;
        vec2 hdB181 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB181.x;
        r5.y = hdB181.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r6.xy;
        float param_5 = r6.w;
        r6 = hdLod5(param_4, param_5);
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
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v6.x), abs(v6.y));
    if (r1.y < 1.0)
    {
        vec2 hdB312 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB312.x;
        r1.z = hdB312.y;
        vec2 hdB322 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB322.x;
        r2.y = hdB322.y;
        vec2 hdB332 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB332.x;
        r3.y = hdB332.y;
        vec2 hdB342 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB342.x;
        r4.y = hdB342.y;
        vec2 hdB352 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB352.x;
        r5.y = hdB352.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = r6.xy;
        float param_15 = r6.w;
        r6 = hdLod6(param_14, param_15);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod6(param_16, param_17);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_18 = r3.xy;
        float param_19 = r3.w;
        r3 = hdLod6(param_18, param_19);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_20 = r4.xy;
        float param_21 = r4.w;
        r4 = hdLod6(param_20, param_21);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_22 = r5.xy;
        float param_23 = r5.w;
        r5 = hdLod6(param_22, param_23);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v6.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v6.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            vec2 hdB467 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB467.x;
            r1.w = hdB467.y;
            vec2 hdB477 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB477.x;
            r2.y = hdB477.y;
            vec2 hdB487 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB487.x;
            r3.y = hdB487.y;
            vec2 hdB497 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB497.x;
            r4.y = hdB497.y;
            vec2 hdB507 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB507.x;
            r5.y = hdB507.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r6.xy;
            float param_25 = r6.w;
            r6 = hdLod7(param_24, param_25);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod7(param_26, param_27);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_30 = r4.xy;
            float param_31 = r4.w;
            r4 = hdLod7(param_30, param_31);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_32 = r5.xy;
            float param_33 = r5.w;
            r5 = hdLod7(param_32, param_33);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v7.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v7.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v5.w;
            r2.y = v6.w;
            vec2 hdB615 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB615.x;
            r3.y = hdB615.y;
            vec2 hdB625 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB625.x;
            r4.y = hdB625.y;
            vec2 hdB635 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB635.x;
            r5.y = hdB635.y;
            vec2 hdB645 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB645.x;
            r6.y = hdB645.y;
            vec2 hdB655 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB655.x;
            r7.y = hdB655.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_34 = r3.xy;
            float param_35 = r3.w;
            r3 = hdLod8(param_34, param_35);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r4 = hdLod8(param_36, param_37);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_38 = r5.xy;
            float param_39 = r5.w;
            r5 = hdLod8(param_38, param_39);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_40 = r6.xy;
            float param_41 = r6.w;
            r6 = hdLod8(param_40, param_41);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_42 = r7.xy;
            float param_43 = r7.w;
            r7 = hdLod8(param_42, param_43);
            r3.y = r4.x;
            r3.z = r5.x;
            r3.w = r6.x;
            r3 += (-v7.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v7.w);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r3, vec4(1.0));
            r1.z += r1.w;
            r1.w = max(abs(r2.x), abs(r2.y));
            r1.w = clamp((r1.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.z = (r1.z * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.w * r1.z) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB791 = r0;
    vec3 hdB795 = hdB791.xyz * r1.xxx;
    r0.x = hdB795.x;
    r0.y = hdB795.y;
    r0.z = hdB795.z;
    vec4 hdB802 = r0;
    vec3 hdB806 = hdB802.xyz * v0.xyz;
    r0.x = hdB806.x;
    r0.y = hdB806.y;
    r0.z = hdB806.z;
    vec4 hdB813 = r0;
    vec4 hdB815 = r0;
    vec3 hdB817 = hdB813.xyz + hdB815.xyz;
    r0.x = hdB817.x;
    r0.y = hdB817.y;
    r0.z = hdB817.z;
    vec3 hdB828 = r0.www * v1.xyz;
    r1.x = hdB828.x;
    r1.y = hdB828.y;
    r1.z = hdB828.z;
    vec4 hdB840 = r0;
    vec3 hdB842 = (r1.xyz * r2.xxx) + hdB840.xyz;
    r0.x = hdB842.x;
    r0.y = hdB842.y;
    r0.z = hdB842.z;
    vec4 hdB849 = r0;
    vec3 hdB856 = hdB849.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB856.x;
    r0.y = hdB856.y;
    r0.z = hdB856.z;
    vec3 hdB871 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB871.x;
    oC0.y = hdB871.y;
    oC0.z = hdB871.z;
    oC0.w = 1.0;
    bool hdB884 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB892;
    if (hdB884)
    {
        hdB892 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB892 = hdB884;
    }
    if (hdB892)
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
    bool _3082 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3092;
    if (_3082)
    {
        _3092 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3092 = _3082;
    }
    if (_3092)
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
        bool _3117 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3132;
        if (!_3117)
        {
            _3132 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3132 = _3117;
        }
        if (_3132)
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
