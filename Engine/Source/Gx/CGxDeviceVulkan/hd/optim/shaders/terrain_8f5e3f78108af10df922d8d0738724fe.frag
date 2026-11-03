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
float _RESERVED_IDENTIFIER_FIXUP_3275;
vec4 _RESERVED_IDENTIFIER_FIXUP_3276;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1042 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1046 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1050 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1054 = hdTex3(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1064 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1042, _RESERVED_IDENTIFIER_FIXUP_1046, _RESERVED_IDENTIFIER_FIXUP_1054.xxxx), _RESERVED_IDENTIFIER_FIXUP_1050, _RESERVED_IDENTIFIER_FIXUP_1054.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1071 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2618 = _RESERVED_IDENTIFIER_FIXUP_1046;
    _RESERVED_IDENTIFIER_FIXUP_2618.x = _RESERVED_IDENTIFIER_FIXUP_1071;
    float _RESERVED_IDENTIFIER_FIXUP_1077 = clamp((_RESERVED_IDENTIFIER_FIXUP_1071 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2618.x = _RESERVED_IDENTIFIER_FIXUP_1077;
    float _RESERVED_IDENTIFIER_FIXUP_1083 = ((-_RESERVED_IDENTIFIER_FIXUP_1077) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2618.y = _RESERVED_IDENTIFIER_FIXUP_1083;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3277;
    if (_RESERVED_IDENTIFIER_FIXUP_1083 != (-_RESERVED_IDENTIFIER_FIXUP_1083))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1095 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1105 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1107 = _RESERVED_IDENTIFIER_FIXUP_1105.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2631 = _RESERVED_IDENTIFIER_FIXUP_2618;
        _RESERVED_IDENTIFIER_FIXUP_2631.y = _RESERVED_IDENTIFIER_FIXUP_1107;
        _RESERVED_IDENTIFIER_FIXUP_2631.z = _RESERVED_IDENTIFIER_FIXUP_1105.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1115 = _RESERVED_IDENTIFIER_FIXUP_2631.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2635;
        _RESERVED_IDENTIFIER_FIXUP_2635.x = _RESERVED_IDENTIFIER_FIXUP_1115.x;
        _RESERVED_IDENTIFIER_FIXUP_2635.y = _RESERVED_IDENTIFIER_FIXUP_1115.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1122 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1126 = _RESERVED_IDENTIFIER_FIXUP_1122.y;
        _RESERVED_IDENTIFIER_FIXUP_2635.w = _RESERVED_IDENTIFIER_FIXUP_1126;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1095.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1095.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2635.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1126;
        float _RESERVED_IDENTIFIER_FIXUP_1137 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3303 = vec4(_RESERVED_IDENTIFIER_FIXUP_1077, _RESERVED_IDENTIFIER_FIXUP_1107, _RESERVED_IDENTIFIER_FIXUP_1105.y, _RESERVED_IDENTIFIER_FIXUP_1137);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1144 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2648;
        _RESERVED_IDENTIFIER_FIXUP_2648.x = _RESERVED_IDENTIFIER_FIXUP_1144.x;
        _RESERVED_IDENTIFIER_FIXUP_2648.y = _RESERVED_IDENTIFIER_FIXUP_1144.y;
        _RESERVED_IDENTIFIER_FIXUP_2648.w = _RESERVED_IDENTIFIER_FIXUP_1126;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2648.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1126;
        float _RESERVED_IDENTIFIER_FIXUP_1166 = _RESERVED_IDENTIFIER_FIXUP_1137 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3303.w = _RESERVED_IDENTIFIER_FIXUP_1166;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1173 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2661;
        _RESERVED_IDENTIFIER_FIXUP_2661.x = _RESERVED_IDENTIFIER_FIXUP_1173.x;
        _RESERVED_IDENTIFIER_FIXUP_2661.y = _RESERVED_IDENTIFIER_FIXUP_1173.y;
        _RESERVED_IDENTIFIER_FIXUP_2661.w = _RESERVED_IDENTIFIER_FIXUP_1126;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2661.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1126;
        float _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_1166 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3303.w = _RESERVED_IDENTIFIER_FIXUP_1195;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2674;
        _RESERVED_IDENTIFIER_FIXUP_2674.x = _RESERVED_IDENTIFIER_FIXUP_1202.x;
        _RESERVED_IDENTIFIER_FIXUP_2674.y = _RESERVED_IDENTIFIER_FIXUP_1202.y;
        _RESERVED_IDENTIFIER_FIXUP_2674.w = _RESERVED_IDENTIFIER_FIXUP_1126;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_2674.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1126;
        float _RESERVED_IDENTIFIER_FIXUP_1224 = _RESERVED_IDENTIFIER_FIXUP_1195 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3303.y = _RESERVED_IDENTIFIER_FIXUP_1224;
        float _RESERVED_IDENTIFIER_FIXUP_1229 = (_RESERVED_IDENTIFIER_FIXUP_1224 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3303.y = _RESERVED_IDENTIFIER_FIXUP_1229;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = (_RESERVED_IDENTIFIER_FIXUP_1077 * _RESERVED_IDENTIFIER_FIXUP_1229) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3277 = _RESERVED_IDENTIFIER_FIXUP_3303;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2628 = _RESERVED_IDENTIFIER_FIXUP_2618;
        _RESERVED_IDENTIFIER_FIXUP_2628.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3277 = _RESERVED_IDENTIFIER_FIXUP_2628;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1247 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2696 = _RESERVED_IDENTIFIER_FIXUP_3277;
    _RESERVED_IDENTIFIER_FIXUP_2696.y = _RESERVED_IDENTIFIER_FIXUP_1247;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3282;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3280;
    if (_RESERVED_IDENTIFIER_FIXUP_1247 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1256 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1266 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2836 = _RESERVED_IDENTIFIER_FIXUP_2696;
        _RESERVED_IDENTIFIER_FIXUP_2836.y = _RESERVED_IDENTIFIER_FIXUP_1266.x;
        _RESERVED_IDENTIFIER_FIXUP_2836.z = _RESERVED_IDENTIFIER_FIXUP_1266.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1276 = _RESERVED_IDENTIFIER_FIXUP_2836.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2840;
        _RESERVED_IDENTIFIER_FIXUP_2840.x = _RESERVED_IDENTIFIER_FIXUP_1276.x;
        _RESERVED_IDENTIFIER_FIXUP_2840.y = _RESERVED_IDENTIFIER_FIXUP_1276.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1283 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_1283.y;
        _RESERVED_IDENTIFIER_FIXUP_2840.w = _RESERVED_IDENTIFIER_FIXUP_1287;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1256.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1256.w;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2840.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1287;
        float _RESERVED_IDENTIFIER_FIXUP_1298 = hdLod6(param_14, param_15).x + hdLod6(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_2836.w = _RESERVED_IDENTIFIER_FIXUP_1298;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_2836.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2853;
        _RESERVED_IDENTIFIER_FIXUP_2853.x = _RESERVED_IDENTIFIER_FIXUP_1305.x;
        _RESERVED_IDENTIFIER_FIXUP_2853.y = _RESERVED_IDENTIFIER_FIXUP_1305.y;
        _RESERVED_IDENTIFIER_FIXUP_2853.w = _RESERVED_IDENTIFIER_FIXUP_1287;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2853.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1287;
        float _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_1298 + hdLod6(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_2836.w = _RESERVED_IDENTIFIER_FIXUP_1327;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_2836.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2866;
        _RESERVED_IDENTIFIER_FIXUP_2866.x = _RESERVED_IDENTIFIER_FIXUP_1334.x;
        _RESERVED_IDENTIFIER_FIXUP_2866.y = _RESERVED_IDENTIFIER_FIXUP_1334.y;
        _RESERVED_IDENTIFIER_FIXUP_2866.w = _RESERVED_IDENTIFIER_FIXUP_1287;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2866.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1287;
        float _RESERVED_IDENTIFIER_FIXUP_1356 = _RESERVED_IDENTIFIER_FIXUP_1327 + hdLod6(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_2836.w = _RESERVED_IDENTIFIER_FIXUP_1356;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1363 = _RESERVED_IDENTIFIER_FIXUP_2836.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2879;
        _RESERVED_IDENTIFIER_FIXUP_2879.x = _RESERVED_IDENTIFIER_FIXUP_1363.x;
        _RESERVED_IDENTIFIER_FIXUP_2879.y = _RESERVED_IDENTIFIER_FIXUP_1363.y;
        _RESERVED_IDENTIFIER_FIXUP_2879.w = _RESERVED_IDENTIFIER_FIXUP_1287;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_2879.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1287;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1380 = hdLod6(param_22, param_23);
        float _RESERVED_IDENTIFIER_FIXUP_1385 = _RESERVED_IDENTIFIER_FIXUP_1356 + _RESERVED_IDENTIFIER_FIXUP_1380.x;
        _RESERVED_IDENTIFIER_FIXUP_2836.y = _RESERVED_IDENTIFIER_FIXUP_1385;
        _RESERVED_IDENTIFIER_FIXUP_2836.y = _RESERVED_IDENTIFIER_FIXUP_1385 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3282 = _RESERVED_IDENTIFIER_FIXUP_1380;
        _RESERVED_IDENTIFIER_FIXUP_3280 = _RESERVED_IDENTIFIER_FIXUP_2836;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1398 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2701 = _RESERVED_IDENTIFIER_FIXUP_2696;
        _RESERVED_IDENTIFIER_FIXUP_2701.z = _RESERVED_IDENTIFIER_FIXUP_1398;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3283;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3281;
        if (_RESERVED_IDENTIFIER_FIXUP_1398 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1407 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1407.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1407.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = hdLod7(param_24, param_25);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1417 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2776 = _RESERVED_IDENTIFIER_FIXUP_2701;
            _RESERVED_IDENTIFIER_FIXUP_2776.z = _RESERVED_IDENTIFIER_FIXUP_1417.x;
            _RESERVED_IDENTIFIER_FIXUP_2776.w = _RESERVED_IDENTIFIER_FIXUP_1417.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1427 = _RESERVED_IDENTIFIER_FIXUP_2776.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2780;
            _RESERVED_IDENTIFIER_FIXUP_2780.x = _RESERVED_IDENTIFIER_FIXUP_1427.x;
            _RESERVED_IDENTIFIER_FIXUP_2780.y = _RESERVED_IDENTIFIER_FIXUP_1427.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1434 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1438 = _RESERVED_IDENTIFIER_FIXUP_1434.y;
            _RESERVED_IDENTIFIER_FIXUP_2780.w = _RESERVED_IDENTIFIER_FIXUP_1438;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2780.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1438;
            float _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_1413.x + hdLod7(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2791 = _RESERVED_IDENTIFIER_FIXUP_1413;
            _RESERVED_IDENTIFIER_FIXUP_2791.x = _RESERVED_IDENTIFIER_FIXUP_1449;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1456 = _RESERVED_IDENTIFIER_FIXUP_2776.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2793;
            _RESERVED_IDENTIFIER_FIXUP_2793.x = _RESERVED_IDENTIFIER_FIXUP_1456.x;
            _RESERVED_IDENTIFIER_FIXUP_2793.y = _RESERVED_IDENTIFIER_FIXUP_1456.y;
            _RESERVED_IDENTIFIER_FIXUP_2793.w = _RESERVED_IDENTIFIER_FIXUP_1438;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2793.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1438;
            float _RESERVED_IDENTIFIER_FIXUP_1478 = _RESERVED_IDENTIFIER_FIXUP_1449 + hdLod7(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_2791.x = _RESERVED_IDENTIFIER_FIXUP_1478;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1485 = _RESERVED_IDENTIFIER_FIXUP_2776.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2806;
            _RESERVED_IDENTIFIER_FIXUP_2806.x = _RESERVED_IDENTIFIER_FIXUP_1485.x;
            _RESERVED_IDENTIFIER_FIXUP_2806.y = _RESERVED_IDENTIFIER_FIXUP_1485.y;
            _RESERVED_IDENTIFIER_FIXUP_2806.w = _RESERVED_IDENTIFIER_FIXUP_1438;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2806.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1438;
            float _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_1478 + hdLod7(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_2791.x = _RESERVED_IDENTIFIER_FIXUP_1507;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_2776.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2819;
            _RESERVED_IDENTIFIER_FIXUP_2819.x = _RESERVED_IDENTIFIER_FIXUP_1514.x;
            _RESERVED_IDENTIFIER_FIXUP_2819.y = _RESERVED_IDENTIFIER_FIXUP_1514.y;
            _RESERVED_IDENTIFIER_FIXUP_2819.w = _RESERVED_IDENTIFIER_FIXUP_1438;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2819.xy;
            float param_33 = _RESERVED_IDENTIFIER_FIXUP_1438;
            float _RESERVED_IDENTIFIER_FIXUP_1536 = _RESERVED_IDENTIFIER_FIXUP_1507 + hdLod7(param_32, param_33).x;
            _RESERVED_IDENTIFIER_FIXUP_2776.z = _RESERVED_IDENTIFIER_FIXUP_1536;
            _RESERVED_IDENTIFIER_FIXUP_2776.y = _RESERVED_IDENTIFIER_FIXUP_1536 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3283 = _RESERVED_IDENTIFIER_FIXUP_2791;
            _RESERVED_IDENTIFIER_FIXUP_3281 = _RESERVED_IDENTIFIER_FIXUP_2776;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2705 = _RESERVED_IDENTIFIER_FIXUP_2701;
            _RESERVED_IDENTIFIER_FIXUP_2705.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2705.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1552 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_1552.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3304 = vec4(_RESERVED_IDENTIFIER_FIXUP_1552.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1556);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_3304.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3305 = vec4(_RESERVED_IDENTIFIER_FIXUP_1567 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1556);
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_1567;
            float param_35 = _RESERVED_IDENTIFIER_FIXUP_1556;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3305.xy;
            float param_37 = _RESERVED_IDENTIFIER_FIXUP_1556;
            float _RESERVED_IDENTIFIER_FIXUP_1597 = hdLod8(param_34, param_35).x + hdLod8(param_36, param_37).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2732 = _RESERVED_IDENTIFIER_FIXUP_3304;
            _RESERVED_IDENTIFIER_FIXUP_2732.z = _RESERVED_IDENTIFIER_FIXUP_1597;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_2732.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2734 = _RESERVED_IDENTIFIER_FIXUP_3305;
            _RESERVED_IDENTIFIER_FIXUP_2734.x = _RESERVED_IDENTIFIER_FIXUP_1604.x;
            _RESERVED_IDENTIFIER_FIXUP_2734.y = _RESERVED_IDENTIFIER_FIXUP_1604.y;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2734.xy;
            float param_39 = _RESERVED_IDENTIFIER_FIXUP_1556;
            float _RESERVED_IDENTIFIER_FIXUP_1619 = _RESERVED_IDENTIFIER_FIXUP_1597 + hdLod8(param_38, param_39).x;
            _RESERVED_IDENTIFIER_FIXUP_2732.z = _RESERVED_IDENTIFIER_FIXUP_1619;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_2732.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2743 = _RESERVED_IDENTIFIER_FIXUP_2734;
            _RESERVED_IDENTIFIER_FIXUP_2743.x = _RESERVED_IDENTIFIER_FIXUP_1626.x;
            _RESERVED_IDENTIFIER_FIXUP_2743.y = _RESERVED_IDENTIFIER_FIXUP_1626.y;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2743.xy;
            float param_41 = _RESERVED_IDENTIFIER_FIXUP_1556;
            float _RESERVED_IDENTIFIER_FIXUP_1641 = _RESERVED_IDENTIFIER_FIXUP_1619 + hdLod8(param_40, param_41).x;
            _RESERVED_IDENTIFIER_FIXUP_2732.z = _RESERVED_IDENTIFIER_FIXUP_1641;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1648 = _RESERVED_IDENTIFIER_FIXUP_2732.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2752 = _RESERVED_IDENTIFIER_FIXUP_2743;
            _RESERVED_IDENTIFIER_FIXUP_2752.x = _RESERVED_IDENTIFIER_FIXUP_1648.x;
            _RESERVED_IDENTIFIER_FIXUP_2752.y = _RESERVED_IDENTIFIER_FIXUP_1648.y;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_2752.xy;
            float param_43 = _RESERVED_IDENTIFIER_FIXUP_1556;
            float _RESERVED_IDENTIFIER_FIXUP_1663 = _RESERVED_IDENTIFIER_FIXUP_1641 + hdLod8(param_42, param_43).x;
            _RESERVED_IDENTIFIER_FIXUP_2732.x = _RESERVED_IDENTIFIER_FIXUP_1663;
            float _RESERVED_IDENTIFIER_FIXUP_1671 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2732.y = _RESERVED_IDENTIFIER_FIXUP_1671;
            float _RESERVED_IDENTIFIER_FIXUP_1677 = clamp((_RESERVED_IDENTIFIER_FIXUP_1671 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2705.z = _RESERVED_IDENTIFIER_FIXUP_1677;
            float _RESERVED_IDENTIFIER_FIXUP_1682 = (_RESERVED_IDENTIFIER_FIXUP_1663 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2705.w = _RESERVED_IDENTIFIER_FIXUP_1682;
            _RESERVED_IDENTIFIER_FIXUP_2705.y = (_RESERVED_IDENTIFIER_FIXUP_1677 * _RESERVED_IDENTIFIER_FIXUP_1682) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3283 = _RESERVED_IDENTIFIER_FIXUP_2732;
            _RESERVED_IDENTIFIER_FIXUP_3281 = _RESERVED_IDENTIFIER_FIXUP_2705;
        }
        _RESERVED_IDENTIFIER_FIXUP_3282 = _RESERVED_IDENTIFIER_FIXUP_3283;
        _RESERVED_IDENTIFIER_FIXUP_3280 = _RESERVED_IDENTIFIER_FIXUP_3281;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1697 = min(_RESERVED_IDENTIFIER_FIXUP_3280.y, _RESERVED_IDENTIFIER_FIXUP_3280.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2897 = _RESERVED_IDENTIFIER_FIXUP_3282;
    _RESERVED_IDENTIFIER_FIXUP_2897.x = _RESERVED_IDENTIFIER_FIXUP_1697;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2900 = _RESERVED_IDENTIFIER_FIXUP_3280;
    _RESERVED_IDENTIFIER_FIXUP_2900.x = (_RESERVED_IDENTIFIER_FIXUP_1697 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1708 = _RESERVED_IDENTIFIER_FIXUP_1064.xyz * _RESERVED_IDENTIFIER_FIXUP_2900.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2902 = _RESERVED_IDENTIFIER_FIXUP_1064;
    _RESERVED_IDENTIFIER_FIXUP_2902.x = _RESERVED_IDENTIFIER_FIXUP_1708.x;
    _RESERVED_IDENTIFIER_FIXUP_2902.y = _RESERVED_IDENTIFIER_FIXUP_1708.y;
    _RESERVED_IDENTIFIER_FIXUP_2902.z = _RESERVED_IDENTIFIER_FIXUP_1708.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1719 = _RESERVED_IDENTIFIER_FIXUP_2902.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3275).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2908 = _RESERVED_IDENTIFIER_FIXUP_2902;
    _RESERVED_IDENTIFIER_FIXUP_2908.x = _RESERVED_IDENTIFIER_FIXUP_1719.x;
    _RESERVED_IDENTIFIER_FIXUP_2908.y = _RESERVED_IDENTIFIER_FIXUP_1719.y;
    _RESERVED_IDENTIFIER_FIXUP_2908.z = _RESERVED_IDENTIFIER_FIXUP_1719.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1730 = _RESERVED_IDENTIFIER_FIXUP_2908.xyz + _RESERVED_IDENTIFIER_FIXUP_2908.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2914 = _RESERVED_IDENTIFIER_FIXUP_2908;
    _RESERVED_IDENTIFIER_FIXUP_2914.x = _RESERVED_IDENTIFIER_FIXUP_1730.x;
    _RESERVED_IDENTIFIER_FIXUP_2914.y = _RESERVED_IDENTIFIER_FIXUP_1730.y;
    _RESERVED_IDENTIFIER_FIXUP_2914.z = _RESERVED_IDENTIFIER_FIXUP_1730.z;
    _RESERVED_IDENTIFIER_FIXUP_2900.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2900.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2900.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1755 = (_RESERVED_IDENTIFIER_FIXUP_2900.xyz * _RESERVED_IDENTIFIER_FIXUP_2897.xxx) + _RESERVED_IDENTIFIER_FIXUP_2914.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2926 = _RESERVED_IDENTIFIER_FIXUP_2914;
    _RESERVED_IDENTIFIER_FIXUP_2926.x = _RESERVED_IDENTIFIER_FIXUP_1755.x;
    _RESERVED_IDENTIFIER_FIXUP_2926.y = _RESERVED_IDENTIFIER_FIXUP_1755.y;
    _RESERVED_IDENTIFIER_FIXUP_2926.z = _RESERVED_IDENTIFIER_FIXUP_1755.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1768 = _RESERVED_IDENTIFIER_FIXUP_2926.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2932 = _RESERVED_IDENTIFIER_FIXUP_2926;
    _RESERVED_IDENTIFIER_FIXUP_2932.x = _RESERVED_IDENTIFIER_FIXUP_1768.x;
    _RESERVED_IDENTIFIER_FIXUP_2932.y = _RESERVED_IDENTIFIER_FIXUP_1768.y;
    _RESERVED_IDENTIFIER_FIXUP_2932.z = _RESERVED_IDENTIFIER_FIXUP_1768.z;
    vec2 param_44 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1823 = hdTex0(param_44);
    vec2 param_45 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1827 = hdTex1(param_45);
    vec2 param_46 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1831 = hdTex2(param_46);
    vec2 param_47 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1835 = hdTex3(param_47);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1845 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1823, _RESERVED_IDENTIFIER_FIXUP_1827, _RESERVED_IDENTIFIER_FIXUP_1835.xxxx), _RESERVED_IDENTIFIER_FIXUP_1831, _RESERVED_IDENTIFIER_FIXUP_1835.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2948 = _RESERVED_IDENTIFIER_FIXUP_1827;
    _RESERVED_IDENTIFIER_FIXUP_2948.x = _RESERVED_IDENTIFIER_FIXUP_1071;
    float _RESERVED_IDENTIFIER_FIXUP_1858 = clamp((_RESERVED_IDENTIFIER_FIXUP_1071 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2948.x = _RESERVED_IDENTIFIER_FIXUP_1858;
    float _RESERVED_IDENTIFIER_FIXUP_1864 = ((-_RESERVED_IDENTIFIER_FIXUP_1858) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2948.y = _RESERVED_IDENTIFIER_FIXUP_1864;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3290;
    if (_RESERVED_IDENTIFIER_FIXUP_1864 != (-_RESERVED_IDENTIFIER_FIXUP_1864))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1876 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1886 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1888 = _RESERVED_IDENTIFIER_FIXUP_1886.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2961 = _RESERVED_IDENTIFIER_FIXUP_2948;
        _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1888;
        _RESERVED_IDENTIFIER_FIXUP_2961.z = _RESERVED_IDENTIFIER_FIXUP_1886.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1896 = _RESERVED_IDENTIFIER_FIXUP_2961.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2965;
        _RESERVED_IDENTIFIER_FIXUP_2965.x = _RESERVED_IDENTIFIER_FIXUP_1896.x;
        _RESERVED_IDENTIFIER_FIXUP_2965.y = _RESERVED_IDENTIFIER_FIXUP_1896.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1903 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1907 = _RESERVED_IDENTIFIER_FIXUP_1903.y;
        _RESERVED_IDENTIFIER_FIXUP_2965.w = _RESERVED_IDENTIFIER_FIXUP_1907;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_1876.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1876.w;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2965.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1907;
        float _RESERVED_IDENTIFIER_FIXUP_1918 = hdLod5(param_48, param_49).x + hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3307 = vec4(_RESERVED_IDENTIFIER_FIXUP_1858, _RESERVED_IDENTIFIER_FIXUP_1888, _RESERVED_IDENTIFIER_FIXUP_1886.y, _RESERVED_IDENTIFIER_FIXUP_1918);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1925 = _RESERVED_IDENTIFIER_FIXUP_3307.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2978;
        _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1925.x;
        _RESERVED_IDENTIFIER_FIXUP_2978.y = _RESERVED_IDENTIFIER_FIXUP_1925.y;
        _RESERVED_IDENTIFIER_FIXUP_2978.w = _RESERVED_IDENTIFIER_FIXUP_1907;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2978.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1907;
        float _RESERVED_IDENTIFIER_FIXUP_1947 = _RESERVED_IDENTIFIER_FIXUP_1918 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3307.w = _RESERVED_IDENTIFIER_FIXUP_1947;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1954 = _RESERVED_IDENTIFIER_FIXUP_3307.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2991;
        _RESERVED_IDENTIFIER_FIXUP_2991.x = _RESERVED_IDENTIFIER_FIXUP_1954.x;
        _RESERVED_IDENTIFIER_FIXUP_2991.y = _RESERVED_IDENTIFIER_FIXUP_1954.y;
        _RESERVED_IDENTIFIER_FIXUP_2991.w = _RESERVED_IDENTIFIER_FIXUP_1907;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2991.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_1907;
        float _RESERVED_IDENTIFIER_FIXUP_1976 = _RESERVED_IDENTIFIER_FIXUP_1947 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3307.w = _RESERVED_IDENTIFIER_FIXUP_1976;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1983 = _RESERVED_IDENTIFIER_FIXUP_3307.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3004;
        _RESERVED_IDENTIFIER_FIXUP_3004.x = _RESERVED_IDENTIFIER_FIXUP_1983.x;
        _RESERVED_IDENTIFIER_FIXUP_3004.y = _RESERVED_IDENTIFIER_FIXUP_1983.y;
        _RESERVED_IDENTIFIER_FIXUP_3004.w = _RESERVED_IDENTIFIER_FIXUP_1907;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3004.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_1907;
        float _RESERVED_IDENTIFIER_FIXUP_2005 = _RESERVED_IDENTIFIER_FIXUP_1976 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_2005;
        float _RESERVED_IDENTIFIER_FIXUP_2010 = (_RESERVED_IDENTIFIER_FIXUP_2005 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_2010;
        _RESERVED_IDENTIFIER_FIXUP_3307.x = (_RESERVED_IDENTIFIER_FIXUP_1858 * _RESERVED_IDENTIFIER_FIXUP_2010) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3290 = _RESERVED_IDENTIFIER_FIXUP_3307;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2958 = _RESERVED_IDENTIFIER_FIXUP_2948;
        _RESERVED_IDENTIFIER_FIXUP_2958.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3290 = _RESERVED_IDENTIFIER_FIXUP_2958;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3026 = _RESERVED_IDENTIFIER_FIXUP_3290;
    _RESERVED_IDENTIFIER_FIXUP_3026.y = _RESERVED_IDENTIFIER_FIXUP_1247;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3295;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3293;
    if (_RESERVED_IDENTIFIER_FIXUP_1247 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2037 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2047 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3166 = _RESERVED_IDENTIFIER_FIXUP_3026;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_2047.x;
        _RESERVED_IDENTIFIER_FIXUP_3166.z = _RESERVED_IDENTIFIER_FIXUP_2047.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2057 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3170;
        _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_2057.x;
        _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_2057.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2064 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2068 = _RESERVED_IDENTIFIER_FIXUP_2064.y;
        _RESERVED_IDENTIFIER_FIXUP_3170.w = _RESERVED_IDENTIFIER_FIXUP_2068;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2037.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2037.w;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3170.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2068;
        float _RESERVED_IDENTIFIER_FIXUP_2079 = hdLod6(param_58, param_59).x + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3166.w = _RESERVED_IDENTIFIER_FIXUP_2079;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2086 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3183;
        _RESERVED_IDENTIFIER_FIXUP_3183.x = _RESERVED_IDENTIFIER_FIXUP_2086.x;
        _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_2086.y;
        _RESERVED_IDENTIFIER_FIXUP_3183.w = _RESERVED_IDENTIFIER_FIXUP_2068;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3183.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2068;
        float _RESERVED_IDENTIFIER_FIXUP_2108 = _RESERVED_IDENTIFIER_FIXUP_2079 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3166.w = _RESERVED_IDENTIFIER_FIXUP_2108;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2115 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3196;
        _RESERVED_IDENTIFIER_FIXUP_3196.x = _RESERVED_IDENTIFIER_FIXUP_2115.x;
        _RESERVED_IDENTIFIER_FIXUP_3196.y = _RESERVED_IDENTIFIER_FIXUP_2115.y;
        _RESERVED_IDENTIFIER_FIXUP_3196.w = _RESERVED_IDENTIFIER_FIXUP_2068;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3196.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2068;
        float _RESERVED_IDENTIFIER_FIXUP_2137 = _RESERVED_IDENTIFIER_FIXUP_2108 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3166.w = _RESERVED_IDENTIFIER_FIXUP_2137;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2144 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3209;
        _RESERVED_IDENTIFIER_FIXUP_3209.x = _RESERVED_IDENTIFIER_FIXUP_2144.x;
        _RESERVED_IDENTIFIER_FIXUP_3209.y = _RESERVED_IDENTIFIER_FIXUP_2144.y;
        _RESERVED_IDENTIFIER_FIXUP_3209.w = _RESERVED_IDENTIFIER_FIXUP_2068;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3209.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2068;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2161 = hdLod6(param_66, param_67);
        float _RESERVED_IDENTIFIER_FIXUP_2166 = _RESERVED_IDENTIFIER_FIXUP_2137 + _RESERVED_IDENTIFIER_FIXUP_2161.x;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_2166;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_2166 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3295 = _RESERVED_IDENTIFIER_FIXUP_2161;
        _RESERVED_IDENTIFIER_FIXUP_3293 = _RESERVED_IDENTIFIER_FIXUP_3166;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2179 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3031 = _RESERVED_IDENTIFIER_FIXUP_3026;
        _RESERVED_IDENTIFIER_FIXUP_3031.z = _RESERVED_IDENTIFIER_FIXUP_2179;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3296;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3294;
        if (_RESERVED_IDENTIFIER_FIXUP_2179 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2188 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2188.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2188.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2194 = hdLod7(param_68, param_69);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2198 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3106 = _RESERVED_IDENTIFIER_FIXUP_3031;
            _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_2198.x;
            _RESERVED_IDENTIFIER_FIXUP_3106.w = _RESERVED_IDENTIFIER_FIXUP_2198.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2208 = _RESERVED_IDENTIFIER_FIXUP_3106.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3110;
            _RESERVED_IDENTIFIER_FIXUP_3110.x = _RESERVED_IDENTIFIER_FIXUP_2208.x;
            _RESERVED_IDENTIFIER_FIXUP_3110.y = _RESERVED_IDENTIFIER_FIXUP_2208.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2215 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2219 = _RESERVED_IDENTIFIER_FIXUP_2215.y;
            _RESERVED_IDENTIFIER_FIXUP_3110.w = _RESERVED_IDENTIFIER_FIXUP_2219;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3110.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2219;
            float _RESERVED_IDENTIFIER_FIXUP_2230 = _RESERVED_IDENTIFIER_FIXUP_2194.x + hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3121 = _RESERVED_IDENTIFIER_FIXUP_2194;
            _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_2230;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2237 = _RESERVED_IDENTIFIER_FIXUP_3106.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3123;
            _RESERVED_IDENTIFIER_FIXUP_3123.x = _RESERVED_IDENTIFIER_FIXUP_2237.x;
            _RESERVED_IDENTIFIER_FIXUP_3123.y = _RESERVED_IDENTIFIER_FIXUP_2237.y;
            _RESERVED_IDENTIFIER_FIXUP_3123.w = _RESERVED_IDENTIFIER_FIXUP_2219;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3123.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2219;
            float _RESERVED_IDENTIFIER_FIXUP_2259 = _RESERVED_IDENTIFIER_FIXUP_2230 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_2259;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2266 = _RESERVED_IDENTIFIER_FIXUP_3106.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3136;
            _RESERVED_IDENTIFIER_FIXUP_3136.x = _RESERVED_IDENTIFIER_FIXUP_2266.x;
            _RESERVED_IDENTIFIER_FIXUP_3136.y = _RESERVED_IDENTIFIER_FIXUP_2266.y;
            _RESERVED_IDENTIFIER_FIXUP_3136.w = _RESERVED_IDENTIFIER_FIXUP_2219;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3136.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2219;
            float _RESERVED_IDENTIFIER_FIXUP_2288 = _RESERVED_IDENTIFIER_FIXUP_2259 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_2288;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2295 = _RESERVED_IDENTIFIER_FIXUP_3106.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3149;
            _RESERVED_IDENTIFIER_FIXUP_3149.x = _RESERVED_IDENTIFIER_FIXUP_2295.x;
            _RESERVED_IDENTIFIER_FIXUP_3149.y = _RESERVED_IDENTIFIER_FIXUP_2295.y;
            _RESERVED_IDENTIFIER_FIXUP_3149.w = _RESERVED_IDENTIFIER_FIXUP_2219;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3149.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2219;
            float _RESERVED_IDENTIFIER_FIXUP_2317 = _RESERVED_IDENTIFIER_FIXUP_2288 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_2317;
            _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_2317 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3296 = _RESERVED_IDENTIFIER_FIXUP_3121;
            _RESERVED_IDENTIFIER_FIXUP_3294 = _RESERVED_IDENTIFIER_FIXUP_3106;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3035 = _RESERVED_IDENTIFIER_FIXUP_3031;
            _RESERVED_IDENTIFIER_FIXUP_3035.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3035.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2333 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2337 = _RESERVED_IDENTIFIER_FIXUP_2333.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3308 = vec4(_RESERVED_IDENTIFIER_FIXUP_2333.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2337);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2348 = _RESERVED_IDENTIFIER_FIXUP_3308.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3309 = vec4(_RESERVED_IDENTIFIER_FIXUP_2348 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2337);
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2348;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2337;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3309.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2337;
            float _RESERVED_IDENTIFIER_FIXUP_2378 = hdLod8(param_78, param_79).x + hdLod8(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3062 = _RESERVED_IDENTIFIER_FIXUP_3308;
            _RESERVED_IDENTIFIER_FIXUP_3062.z = _RESERVED_IDENTIFIER_FIXUP_2378;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2385 = _RESERVED_IDENTIFIER_FIXUP_3062.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3064 = _RESERVED_IDENTIFIER_FIXUP_3309;
            _RESERVED_IDENTIFIER_FIXUP_3064.x = _RESERVED_IDENTIFIER_FIXUP_2385.x;
            _RESERVED_IDENTIFIER_FIXUP_3064.y = _RESERVED_IDENTIFIER_FIXUP_2385.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3064.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2337;
            float _RESERVED_IDENTIFIER_FIXUP_2400 = _RESERVED_IDENTIFIER_FIXUP_2378 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3062.z = _RESERVED_IDENTIFIER_FIXUP_2400;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2407 = _RESERVED_IDENTIFIER_FIXUP_3062.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3073 = _RESERVED_IDENTIFIER_FIXUP_3064;
            _RESERVED_IDENTIFIER_FIXUP_3073.x = _RESERVED_IDENTIFIER_FIXUP_2407.x;
            _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_2407.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3073.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2337;
            float _RESERVED_IDENTIFIER_FIXUP_2422 = _RESERVED_IDENTIFIER_FIXUP_2400 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3062.z = _RESERVED_IDENTIFIER_FIXUP_2422;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2429 = _RESERVED_IDENTIFIER_FIXUP_3062.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3082 = _RESERVED_IDENTIFIER_FIXUP_3073;
            _RESERVED_IDENTIFIER_FIXUP_3082.x = _RESERVED_IDENTIFIER_FIXUP_2429.x;
            _RESERVED_IDENTIFIER_FIXUP_3082.y = _RESERVED_IDENTIFIER_FIXUP_2429.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3082.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2337;
            float _RESERVED_IDENTIFIER_FIXUP_2444 = _RESERVED_IDENTIFIER_FIXUP_2422 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3062.x = _RESERVED_IDENTIFIER_FIXUP_2444;
            float _RESERVED_IDENTIFIER_FIXUP_2452 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3062.y = _RESERVED_IDENTIFIER_FIXUP_2452;
            float _RESERVED_IDENTIFIER_FIXUP_2458 = clamp((_RESERVED_IDENTIFIER_FIXUP_2452 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3035.z = _RESERVED_IDENTIFIER_FIXUP_2458;
            float _RESERVED_IDENTIFIER_FIXUP_2463 = (_RESERVED_IDENTIFIER_FIXUP_2444 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3035.w = _RESERVED_IDENTIFIER_FIXUP_2463;
            _RESERVED_IDENTIFIER_FIXUP_3035.y = (_RESERVED_IDENTIFIER_FIXUP_2458 * _RESERVED_IDENTIFIER_FIXUP_2463) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3296 = _RESERVED_IDENTIFIER_FIXUP_3062;
            _RESERVED_IDENTIFIER_FIXUP_3294 = _RESERVED_IDENTIFIER_FIXUP_3035;
        }
        _RESERVED_IDENTIFIER_FIXUP_3295 = _RESERVED_IDENTIFIER_FIXUP_3296;
        _RESERVED_IDENTIFIER_FIXUP_3293 = _RESERVED_IDENTIFIER_FIXUP_3294;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2478 = min(_RESERVED_IDENTIFIER_FIXUP_3293.y, _RESERVED_IDENTIFIER_FIXUP_3293.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3227 = _RESERVED_IDENTIFIER_FIXUP_3295;
    _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_2478;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3230 = _RESERVED_IDENTIFIER_FIXUP_3293;
    _RESERVED_IDENTIFIER_FIXUP_3230.x = (_RESERVED_IDENTIFIER_FIXUP_2478 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2489 = _RESERVED_IDENTIFIER_FIXUP_1845.xyz * _RESERVED_IDENTIFIER_FIXUP_3230.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3232 = _RESERVED_IDENTIFIER_FIXUP_1845;
    _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_2489.x;
    _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_2489.y;
    _RESERVED_IDENTIFIER_FIXUP_3232.z = _RESERVED_IDENTIFIER_FIXUP_2489.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2500 = _RESERVED_IDENTIFIER_FIXUP_3232.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3238 = _RESERVED_IDENTIFIER_FIXUP_3232;
    _RESERVED_IDENTIFIER_FIXUP_3238.x = _RESERVED_IDENTIFIER_FIXUP_2500.x;
    _RESERVED_IDENTIFIER_FIXUP_3238.y = _RESERVED_IDENTIFIER_FIXUP_2500.y;
    _RESERVED_IDENTIFIER_FIXUP_3238.z = _RESERVED_IDENTIFIER_FIXUP_2500.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2511 = _RESERVED_IDENTIFIER_FIXUP_3238.xyz + _RESERVED_IDENTIFIER_FIXUP_3238.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3244 = _RESERVED_IDENTIFIER_FIXUP_3238;
    _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_2511.x;
    _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_2511.y;
    _RESERVED_IDENTIFIER_FIXUP_3244.z = _RESERVED_IDENTIFIER_FIXUP_2511.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2522 = _RESERVED_IDENTIFIER_FIXUP_3244.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3230.x = _RESERVED_IDENTIFIER_FIXUP_2522.x;
    _RESERVED_IDENTIFIER_FIXUP_3230.y = _RESERVED_IDENTIFIER_FIXUP_2522.y;
    _RESERVED_IDENTIFIER_FIXUP_3230.z = _RESERVED_IDENTIFIER_FIXUP_2522.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2536 = (_RESERVED_IDENTIFIER_FIXUP_3230.xyz * _RESERVED_IDENTIFIER_FIXUP_3227.xxx) + _RESERVED_IDENTIFIER_FIXUP_3244.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3256 = _RESERVED_IDENTIFIER_FIXUP_3244;
    _RESERVED_IDENTIFIER_FIXUP_3256.x = _RESERVED_IDENTIFIER_FIXUP_2536.x;
    _RESERVED_IDENTIFIER_FIXUP_3256.y = _RESERVED_IDENTIFIER_FIXUP_2536.y;
    _RESERVED_IDENTIFIER_FIXUP_3256.z = _RESERVED_IDENTIFIER_FIXUP_2536.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2549 = _RESERVED_IDENTIFIER_FIXUP_3256.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3262 = _RESERVED_IDENTIFIER_FIXUP_3256;
    _RESERVED_IDENTIFIER_FIXUP_3262.x = _RESERVED_IDENTIFIER_FIXUP_2549.x;
    _RESERVED_IDENTIFIER_FIXUP_3262.y = _RESERVED_IDENTIFIER_FIXUP_2549.y;
    _RESERVED_IDENTIFIER_FIXUP_3262.z = _RESERVED_IDENTIFIER_FIXUP_2549.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3262.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_901 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_910;
    if (_RESERVED_IDENTIFIER_FIXUP_901)
    {
        _RESERVED_IDENTIFIER_FIXUP_910 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_910 = _RESERVED_IDENTIFIER_FIXUP_901;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_910)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_947 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2932.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_974 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2608;
    if (_RESERVED_IDENTIFIER_FIXUP_947 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2608 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_947), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_974);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2608 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_974);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2608;
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB138 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB138.x;
        r1.z = hdB138.y;
        vec2 hdB160 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB160.x;
        r3.y = hdB160.y;
        vec2 hdB168 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB168.x;
        r3.w = hdB168.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r1.w = r2.x + r3.x;
        vec2 hdB191 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB191.x;
        r2.y = hdB191.y;
        vec2 hdB198 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB198.x;
        r2.w = hdB198.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB221 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB221.x;
        r2.y = hdB221.y;
        vec2 hdB228 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB228.x;
        r2.w = hdB228.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB251 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB251.x;
        r2.y = hdB251.y;
        vec2 hdB258 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB258.x;
        r2.w = hdB258.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.y = r1.w + r2.x;
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
        r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        vec2 hdB318 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB318.x;
        r1.z = hdB318.y;
        vec2 hdB328 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB328.x;
        r3.y = hdB328.y;
        vec2 hdB335 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB335.x;
        r3.w = hdB335.y;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r1.w = r2.x + r3.x;
        vec2 hdB357 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB357.x;
        r2.y = hdB357.y;
        vec2 hdB364 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB364.x;
        r2.w = hdB364.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod6(param_18, param_19);
        r1.w += r2.x;
        vec2 hdB386 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB386.x;
        r2.y = hdB386.y;
        vec2 hdB393 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB393.x;
        r2.w = hdB393.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod6(param_20, param_21);
        r1.w += r2.x;
        vec2 hdB415 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB415.x;
        r2.y = hdB415.y;
        vec2 hdB422 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB422.x;
        r2.w = hdB422.y;
        vec2 param_22 = r2.xy;
        float param_23 = r2.w;
        r2 = hdLod6(param_22, param_23);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            vec2 hdB471 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB471.x;
            r1.w = hdB471.y;
            vec2 hdB481 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB481.x;
            r3.y = hdB481.y;
            vec2 hdB488 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB488.x;
            r3.w = hdB488.y;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r2.x += r3.x;
            vec2 hdB510 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB510.x;
            r3.y = hdB510.y;
            vec2 hdB517 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB517.x;
            r3.w = hdB517.y;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r2.x += r3.x;
            vec2 hdB539 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB539.x;
            r3.y = hdB539.y;
            vec2 hdB546 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB546.x;
            r3.w = hdB546.y;
            vec2 param_30 = r3.xy;
            float param_31 = r3.w;
            r3 = hdLod7(param_30, param_31);
            r2.x += r3.x;
            vec2 hdB568 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB568.x;
            r3.y = hdB568.y;
            vec2 hdB575 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB575.x;
            r3.w = hdB575.y;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod7(param_32, param_33);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 hdB607 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB607.x;
            r2.w = hdB607.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_34 = r2.xy;
            float param_35 = r2.w;
            r3 = hdLod8(param_34, param_35);
            vec2 hdB632 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB632.x;
            r4.y = hdB632.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r5 = hdLod8(param_36, param_37);
            r2.z = r3.x + r5.x;
            vec2 hdB660 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB660.x;
            r4.y = hdB660.y;
            vec2 param_38 = r4.xy;
            float param_39 = r4.w;
            r3 = hdLod8(param_38, param_39);
            r2.z += r3.x;
            vec2 hdB682 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB682.x;
            r4.y = hdB682.y;
            vec2 param_40 = r4.xy;
            float param_41 = r4.w;
            r3 = hdLod8(param_40, param_41);
            r2.z += r3.x;
            vec2 hdB704 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB704.x;
            r4.y = hdB704.y;
            vec2 param_42 = r4.xy;
            float param_43 = r4.w;
            r3 = hdLod8(param_42, param_43);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB763 = r0;
    vec3 hdB767 = hdB763.xyz * r1.xxx;
    r0.x = hdB767.x;
    r0.y = hdB767.y;
    r0.z = hdB767.z;
    vec4 hdB774 = r0;
    vec3 hdB778 = hdB774.xyz * v0.xyz;
    r0.x = hdB778.x;
    r0.y = hdB778.y;
    r0.z = hdB778.z;
    vec4 hdB785 = r0;
    vec4 hdB787 = r0;
    vec3 hdB789 = hdB785.xyz + hdB787.xyz;
    r0.x = hdB789.x;
    r0.y = hdB789.y;
    r0.z = hdB789.z;
    vec3 hdB800 = r0.www * v1.xyz;
    r1.x = hdB800.x;
    r1.y = hdB800.y;
    r1.z = hdB800.z;
    vec4 hdB812 = r0;
    vec3 hdB814 = (r1.xyz * r2.xxx) + hdB812.xyz;
    r0.x = hdB814.x;
    r0.y = hdB814.y;
    r0.z = hdB814.z;
    vec4 hdB821 = r0;
    vec3 hdB828 = hdB821.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB828.x;
    r0.y = hdB828.y;
    r0.z = hdB828.z;
    vec3 hdB843 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB843.x;
    oC0.y = hdB843.y;
    oC0.z = hdB843.z;
    oC0.w = 1.0;
    bool hdB856 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB864;
    if (hdB856)
    {
        hdB864 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB864 = hdB856;
    }
    if (hdB864)
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
    bool _3147 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3157;
    if (_3147)
    {
        _3157 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3157 = _3147;
    }
    if (_3157)
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
        bool _3182 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3197;
        if (!_3182)
        {
            _3197 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3197 = _3182;
        }
        if (_3197)
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
