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
float _RESERVED_IDENTIFIER_FIXUP_3306;
vec4 _RESERVED_IDENTIFIER_FIXUP_3307;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1055 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1059 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1063 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1067 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1071 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1081 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1055, _RESERVED_IDENTIFIER_FIXUP_1059, _RESERVED_IDENTIFIER_FIXUP_1071.xxxx), _RESERVED_IDENTIFIER_FIXUP_1063, _RESERVED_IDENTIFIER_FIXUP_1071.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1086 = mix(_RESERVED_IDENTIFIER_FIXUP_1081, _RESERVED_IDENTIFIER_FIXUP_1067, _RESERVED_IDENTIFIER_FIXUP_1071.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_1093 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2649 = _RESERVED_IDENTIFIER_FIXUP_1081;
    _RESERVED_IDENTIFIER_FIXUP_2649.x = _RESERVED_IDENTIFIER_FIXUP_1093;
    float _RESERVED_IDENTIFIER_FIXUP_1099 = clamp((_RESERVED_IDENTIFIER_FIXUP_1093 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2649.x = _RESERVED_IDENTIFIER_FIXUP_1099;
    float _RESERVED_IDENTIFIER_FIXUP_1105 = ((-_RESERVED_IDENTIFIER_FIXUP_1099) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2649.y = _RESERVED_IDENTIFIER_FIXUP_1105;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3308;
    if (_RESERVED_IDENTIFIER_FIXUP_1105 != (-_RESERVED_IDENTIFIER_FIXUP_1105))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1117 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1127 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1129 = _RESERVED_IDENTIFIER_FIXUP_1127.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2662 = _RESERVED_IDENTIFIER_FIXUP_2649;
        _RESERVED_IDENTIFIER_FIXUP_2662.y = _RESERVED_IDENTIFIER_FIXUP_1129;
        _RESERVED_IDENTIFIER_FIXUP_2662.z = _RESERVED_IDENTIFIER_FIXUP_1127.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1137 = _RESERVED_IDENTIFIER_FIXUP_2662.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2666;
        _RESERVED_IDENTIFIER_FIXUP_2666.x = _RESERVED_IDENTIFIER_FIXUP_1137.x;
        _RESERVED_IDENTIFIER_FIXUP_2666.y = _RESERVED_IDENTIFIER_FIXUP_1137.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1144 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1148 = _RESERVED_IDENTIFIER_FIXUP_1144.y;
        _RESERVED_IDENTIFIER_FIXUP_2666.w = _RESERVED_IDENTIFIER_FIXUP_1148;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1117.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1117.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2666.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1148;
        float _RESERVED_IDENTIFIER_FIXUP_1159 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3334 = vec4(_RESERVED_IDENTIFIER_FIXUP_1099, _RESERVED_IDENTIFIER_FIXUP_1129, _RESERVED_IDENTIFIER_FIXUP_1127.y, _RESERVED_IDENTIFIER_FIXUP_1159);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1166 = _RESERVED_IDENTIFIER_FIXUP_3334.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2679;
        _RESERVED_IDENTIFIER_FIXUP_2679.x = _RESERVED_IDENTIFIER_FIXUP_1166.x;
        _RESERVED_IDENTIFIER_FIXUP_2679.y = _RESERVED_IDENTIFIER_FIXUP_1166.y;
        _RESERVED_IDENTIFIER_FIXUP_2679.w = _RESERVED_IDENTIFIER_FIXUP_1148;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2679.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1148;
        float _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_1159 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3334.w = _RESERVED_IDENTIFIER_FIXUP_1188;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_3334.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2692;
        _RESERVED_IDENTIFIER_FIXUP_2692.x = _RESERVED_IDENTIFIER_FIXUP_1195.x;
        _RESERVED_IDENTIFIER_FIXUP_2692.y = _RESERVED_IDENTIFIER_FIXUP_1195.y;
        _RESERVED_IDENTIFIER_FIXUP_2692.w = _RESERVED_IDENTIFIER_FIXUP_1148;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2692.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1148;
        float _RESERVED_IDENTIFIER_FIXUP_1217 = _RESERVED_IDENTIFIER_FIXUP_1188 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3334.w = _RESERVED_IDENTIFIER_FIXUP_1217;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1224 = _RESERVED_IDENTIFIER_FIXUP_3334.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2705;
        _RESERVED_IDENTIFIER_FIXUP_2705.x = _RESERVED_IDENTIFIER_FIXUP_1224.x;
        _RESERVED_IDENTIFIER_FIXUP_2705.y = _RESERVED_IDENTIFIER_FIXUP_1224.y;
        _RESERVED_IDENTIFIER_FIXUP_2705.w = _RESERVED_IDENTIFIER_FIXUP_1148;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_2705.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1148;
        float _RESERVED_IDENTIFIER_FIXUP_1246 = _RESERVED_IDENTIFIER_FIXUP_1217 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_1246;
        float _RESERVED_IDENTIFIER_FIXUP_1251 = (_RESERVED_IDENTIFIER_FIXUP_1246 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_1251;
        _RESERVED_IDENTIFIER_FIXUP_3334.x = (_RESERVED_IDENTIFIER_FIXUP_1099 * _RESERVED_IDENTIFIER_FIXUP_1251) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3308 = _RESERVED_IDENTIFIER_FIXUP_3334;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2659 = _RESERVED_IDENTIFIER_FIXUP_2649;
        _RESERVED_IDENTIFIER_FIXUP_2659.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3308 = _RESERVED_IDENTIFIER_FIXUP_2659;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1269 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2727 = _RESERVED_IDENTIFIER_FIXUP_3308;
    _RESERVED_IDENTIFIER_FIXUP_2727.y = _RESERVED_IDENTIFIER_FIXUP_1269;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3313;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3311;
    if (_RESERVED_IDENTIFIER_FIXUP_1269 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1278 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1288 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2867 = _RESERVED_IDENTIFIER_FIXUP_2727;
        _RESERVED_IDENTIFIER_FIXUP_2867.y = _RESERVED_IDENTIFIER_FIXUP_1288.x;
        _RESERVED_IDENTIFIER_FIXUP_2867.z = _RESERVED_IDENTIFIER_FIXUP_1288.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1298 = _RESERVED_IDENTIFIER_FIXUP_2867.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2871;
        _RESERVED_IDENTIFIER_FIXUP_2871.x = _RESERVED_IDENTIFIER_FIXUP_1298.x;
        _RESERVED_IDENTIFIER_FIXUP_2871.y = _RESERVED_IDENTIFIER_FIXUP_1298.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1305 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1305.y;
        _RESERVED_IDENTIFIER_FIXUP_2871.w = _RESERVED_IDENTIFIER_FIXUP_1309;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1278.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1278.w;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2871.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1309;
        float _RESERVED_IDENTIFIER_FIXUP_1320 = hdLod6(param_14, param_15).x + hdLod6(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_2867.w = _RESERVED_IDENTIFIER_FIXUP_1320;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_2867.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2884;
        _RESERVED_IDENTIFIER_FIXUP_2884.x = _RESERVED_IDENTIFIER_FIXUP_1327.x;
        _RESERVED_IDENTIFIER_FIXUP_2884.y = _RESERVED_IDENTIFIER_FIXUP_1327.y;
        _RESERVED_IDENTIFIER_FIXUP_2884.w = _RESERVED_IDENTIFIER_FIXUP_1309;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2884.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1309;
        float _RESERVED_IDENTIFIER_FIXUP_1349 = _RESERVED_IDENTIFIER_FIXUP_1320 + hdLod6(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_2867.w = _RESERVED_IDENTIFIER_FIXUP_1349;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1356 = _RESERVED_IDENTIFIER_FIXUP_2867.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2897;
        _RESERVED_IDENTIFIER_FIXUP_2897.x = _RESERVED_IDENTIFIER_FIXUP_1356.x;
        _RESERVED_IDENTIFIER_FIXUP_2897.y = _RESERVED_IDENTIFIER_FIXUP_1356.y;
        _RESERVED_IDENTIFIER_FIXUP_2897.w = _RESERVED_IDENTIFIER_FIXUP_1309;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2897.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1309;
        float _RESERVED_IDENTIFIER_FIXUP_1378 = _RESERVED_IDENTIFIER_FIXUP_1349 + hdLod6(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_2867.w = _RESERVED_IDENTIFIER_FIXUP_1378;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1385 = _RESERVED_IDENTIFIER_FIXUP_2867.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2910;
        _RESERVED_IDENTIFIER_FIXUP_2910.x = _RESERVED_IDENTIFIER_FIXUP_1385.x;
        _RESERVED_IDENTIFIER_FIXUP_2910.y = _RESERVED_IDENTIFIER_FIXUP_1385.y;
        _RESERVED_IDENTIFIER_FIXUP_2910.w = _RESERVED_IDENTIFIER_FIXUP_1309;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_2910.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1309;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1402 = hdLod6(param_22, param_23);
        float _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_1378 + _RESERVED_IDENTIFIER_FIXUP_1402.x;
        _RESERVED_IDENTIFIER_FIXUP_2867.y = _RESERVED_IDENTIFIER_FIXUP_1407;
        _RESERVED_IDENTIFIER_FIXUP_2867.y = _RESERVED_IDENTIFIER_FIXUP_1407 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3313 = _RESERVED_IDENTIFIER_FIXUP_1402;
        _RESERVED_IDENTIFIER_FIXUP_3311 = _RESERVED_IDENTIFIER_FIXUP_2867;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1420 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2732 = _RESERVED_IDENTIFIER_FIXUP_2727;
        _RESERVED_IDENTIFIER_FIXUP_2732.z = _RESERVED_IDENTIFIER_FIXUP_1420;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3314;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3312;
        if (_RESERVED_IDENTIFIER_FIXUP_1420 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1429 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1429.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1429.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1435 = hdLod7(param_24, param_25);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1439 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2807 = _RESERVED_IDENTIFIER_FIXUP_2732;
            _RESERVED_IDENTIFIER_FIXUP_2807.z = _RESERVED_IDENTIFIER_FIXUP_1439.x;
            _RESERVED_IDENTIFIER_FIXUP_2807.w = _RESERVED_IDENTIFIER_FIXUP_1439.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_2807.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2811;
            _RESERVED_IDENTIFIER_FIXUP_2811.x = _RESERVED_IDENTIFIER_FIXUP_1449.x;
            _RESERVED_IDENTIFIER_FIXUP_2811.y = _RESERVED_IDENTIFIER_FIXUP_1449.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1456 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1460 = _RESERVED_IDENTIFIER_FIXUP_1456.y;
            _RESERVED_IDENTIFIER_FIXUP_2811.w = _RESERVED_IDENTIFIER_FIXUP_1460;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2811.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1460;
            float _RESERVED_IDENTIFIER_FIXUP_1471 = _RESERVED_IDENTIFIER_FIXUP_1435.x + hdLod7(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2822 = _RESERVED_IDENTIFIER_FIXUP_1435;
            _RESERVED_IDENTIFIER_FIXUP_2822.x = _RESERVED_IDENTIFIER_FIXUP_1471;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1478 = _RESERVED_IDENTIFIER_FIXUP_2807.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2824;
            _RESERVED_IDENTIFIER_FIXUP_2824.x = _RESERVED_IDENTIFIER_FIXUP_1478.x;
            _RESERVED_IDENTIFIER_FIXUP_2824.y = _RESERVED_IDENTIFIER_FIXUP_1478.y;
            _RESERVED_IDENTIFIER_FIXUP_2824.w = _RESERVED_IDENTIFIER_FIXUP_1460;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2824.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1460;
            float _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_1471 + hdLod7(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_2822.x = _RESERVED_IDENTIFIER_FIXUP_1500;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_2807.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2837;
            _RESERVED_IDENTIFIER_FIXUP_2837.x = _RESERVED_IDENTIFIER_FIXUP_1507.x;
            _RESERVED_IDENTIFIER_FIXUP_2837.y = _RESERVED_IDENTIFIER_FIXUP_1507.y;
            _RESERVED_IDENTIFIER_FIXUP_2837.w = _RESERVED_IDENTIFIER_FIXUP_1460;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2837.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1460;
            float _RESERVED_IDENTIFIER_FIXUP_1529 = _RESERVED_IDENTIFIER_FIXUP_1500 + hdLod7(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_2822.x = _RESERVED_IDENTIFIER_FIXUP_1529;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1536 = _RESERVED_IDENTIFIER_FIXUP_2807.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2850;
            _RESERVED_IDENTIFIER_FIXUP_2850.x = _RESERVED_IDENTIFIER_FIXUP_1536.x;
            _RESERVED_IDENTIFIER_FIXUP_2850.y = _RESERVED_IDENTIFIER_FIXUP_1536.y;
            _RESERVED_IDENTIFIER_FIXUP_2850.w = _RESERVED_IDENTIFIER_FIXUP_1460;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2850.xy;
            float param_33 = _RESERVED_IDENTIFIER_FIXUP_1460;
            float _RESERVED_IDENTIFIER_FIXUP_1558 = _RESERVED_IDENTIFIER_FIXUP_1529 + hdLod7(param_32, param_33).x;
            _RESERVED_IDENTIFIER_FIXUP_2807.z = _RESERVED_IDENTIFIER_FIXUP_1558;
            _RESERVED_IDENTIFIER_FIXUP_2807.y = _RESERVED_IDENTIFIER_FIXUP_1558 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3314 = _RESERVED_IDENTIFIER_FIXUP_2822;
            _RESERVED_IDENTIFIER_FIXUP_3312 = _RESERVED_IDENTIFIER_FIXUP_2807;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2736 = _RESERVED_IDENTIFIER_FIXUP_2732;
            _RESERVED_IDENTIFIER_FIXUP_2736.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2736.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1574 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_1574.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3335 = vec4(_RESERVED_IDENTIFIER_FIXUP_1574.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1578);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1589 = _RESERVED_IDENTIFIER_FIXUP_3335.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3336 = vec4(_RESERVED_IDENTIFIER_FIXUP_1589 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1578);
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_1589;
            float param_35 = _RESERVED_IDENTIFIER_FIXUP_1578;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3336.xy;
            float param_37 = _RESERVED_IDENTIFIER_FIXUP_1578;
            float _RESERVED_IDENTIFIER_FIXUP_1619 = hdLod8(param_34, param_35).x + hdLod8(param_36, param_37).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2763 = _RESERVED_IDENTIFIER_FIXUP_3335;
            _RESERVED_IDENTIFIER_FIXUP_2763.z = _RESERVED_IDENTIFIER_FIXUP_1619;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_2763.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2765 = _RESERVED_IDENTIFIER_FIXUP_3336;
            _RESERVED_IDENTIFIER_FIXUP_2765.x = _RESERVED_IDENTIFIER_FIXUP_1626.x;
            _RESERVED_IDENTIFIER_FIXUP_2765.y = _RESERVED_IDENTIFIER_FIXUP_1626.y;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2765.xy;
            float param_39 = _RESERVED_IDENTIFIER_FIXUP_1578;
            float _RESERVED_IDENTIFIER_FIXUP_1641 = _RESERVED_IDENTIFIER_FIXUP_1619 + hdLod8(param_38, param_39).x;
            _RESERVED_IDENTIFIER_FIXUP_2763.z = _RESERVED_IDENTIFIER_FIXUP_1641;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1648 = _RESERVED_IDENTIFIER_FIXUP_2763.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2774 = _RESERVED_IDENTIFIER_FIXUP_2765;
            _RESERVED_IDENTIFIER_FIXUP_2774.x = _RESERVED_IDENTIFIER_FIXUP_1648.x;
            _RESERVED_IDENTIFIER_FIXUP_2774.y = _RESERVED_IDENTIFIER_FIXUP_1648.y;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2774.xy;
            float param_41 = _RESERVED_IDENTIFIER_FIXUP_1578;
            float _RESERVED_IDENTIFIER_FIXUP_1663 = _RESERVED_IDENTIFIER_FIXUP_1641 + hdLod8(param_40, param_41).x;
            _RESERVED_IDENTIFIER_FIXUP_2763.z = _RESERVED_IDENTIFIER_FIXUP_1663;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1670 = _RESERVED_IDENTIFIER_FIXUP_2763.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2783 = _RESERVED_IDENTIFIER_FIXUP_2774;
            _RESERVED_IDENTIFIER_FIXUP_2783.x = _RESERVED_IDENTIFIER_FIXUP_1670.x;
            _RESERVED_IDENTIFIER_FIXUP_2783.y = _RESERVED_IDENTIFIER_FIXUP_1670.y;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_2783.xy;
            float param_43 = _RESERVED_IDENTIFIER_FIXUP_1578;
            float _RESERVED_IDENTIFIER_FIXUP_1685 = _RESERVED_IDENTIFIER_FIXUP_1663 + hdLod8(param_42, param_43).x;
            _RESERVED_IDENTIFIER_FIXUP_2763.x = _RESERVED_IDENTIFIER_FIXUP_1685;
            float _RESERVED_IDENTIFIER_FIXUP_1693 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2763.y = _RESERVED_IDENTIFIER_FIXUP_1693;
            float _RESERVED_IDENTIFIER_FIXUP_1699 = clamp((_RESERVED_IDENTIFIER_FIXUP_1693 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2736.z = _RESERVED_IDENTIFIER_FIXUP_1699;
            float _RESERVED_IDENTIFIER_FIXUP_1704 = (_RESERVED_IDENTIFIER_FIXUP_1685 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2736.w = _RESERVED_IDENTIFIER_FIXUP_1704;
            _RESERVED_IDENTIFIER_FIXUP_2736.y = (_RESERVED_IDENTIFIER_FIXUP_1699 * _RESERVED_IDENTIFIER_FIXUP_1704) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3314 = _RESERVED_IDENTIFIER_FIXUP_2763;
            _RESERVED_IDENTIFIER_FIXUP_3312 = _RESERVED_IDENTIFIER_FIXUP_2736;
        }
        _RESERVED_IDENTIFIER_FIXUP_3313 = _RESERVED_IDENTIFIER_FIXUP_3314;
        _RESERVED_IDENTIFIER_FIXUP_3311 = _RESERVED_IDENTIFIER_FIXUP_3312;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1719 = min(_RESERVED_IDENTIFIER_FIXUP_3311.y, _RESERVED_IDENTIFIER_FIXUP_3311.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2928 = _RESERVED_IDENTIFIER_FIXUP_3313;
    _RESERVED_IDENTIFIER_FIXUP_2928.x = _RESERVED_IDENTIFIER_FIXUP_1719;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2931 = _RESERVED_IDENTIFIER_FIXUP_3311;
    _RESERVED_IDENTIFIER_FIXUP_2931.x = (_RESERVED_IDENTIFIER_FIXUP_1719 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1730 = _RESERVED_IDENTIFIER_FIXUP_1086.xyz * _RESERVED_IDENTIFIER_FIXUP_2931.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2933 = _RESERVED_IDENTIFIER_FIXUP_2931;
    _RESERVED_IDENTIFIER_FIXUP_2933.x = _RESERVED_IDENTIFIER_FIXUP_1730.x;
    _RESERVED_IDENTIFIER_FIXUP_2933.y = _RESERVED_IDENTIFIER_FIXUP_1730.y;
    _RESERVED_IDENTIFIER_FIXUP_2933.z = _RESERVED_IDENTIFIER_FIXUP_1730.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1741 = _RESERVED_IDENTIFIER_FIXUP_2933.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3306).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2939 = _RESERVED_IDENTIFIER_FIXUP_2933;
    _RESERVED_IDENTIFIER_FIXUP_2939.x = _RESERVED_IDENTIFIER_FIXUP_1741.x;
    _RESERVED_IDENTIFIER_FIXUP_2939.y = _RESERVED_IDENTIFIER_FIXUP_1741.y;
    _RESERVED_IDENTIFIER_FIXUP_2939.z = _RESERVED_IDENTIFIER_FIXUP_1741.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1752 = _RESERVED_IDENTIFIER_FIXUP_2939.xyz + _RESERVED_IDENTIFIER_FIXUP_2939.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2945 = _RESERVED_IDENTIFIER_FIXUP_2939;
    _RESERVED_IDENTIFIER_FIXUP_2945.x = _RESERVED_IDENTIFIER_FIXUP_1752.x;
    _RESERVED_IDENTIFIER_FIXUP_2945.y = _RESERVED_IDENTIFIER_FIXUP_1752.y;
    _RESERVED_IDENTIFIER_FIXUP_2945.z = _RESERVED_IDENTIFIER_FIXUP_1752.z;
    _RESERVED_IDENTIFIER_FIXUP_1086.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1086.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1086.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1777 = (_RESERVED_IDENTIFIER_FIXUP_1086.xyz * _RESERVED_IDENTIFIER_FIXUP_2928.xxx) + _RESERVED_IDENTIFIER_FIXUP_2945.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2957 = _RESERVED_IDENTIFIER_FIXUP_2945;
    _RESERVED_IDENTIFIER_FIXUP_2957.x = _RESERVED_IDENTIFIER_FIXUP_1777.x;
    _RESERVED_IDENTIFIER_FIXUP_2957.y = _RESERVED_IDENTIFIER_FIXUP_1777.y;
    _RESERVED_IDENTIFIER_FIXUP_2957.z = _RESERVED_IDENTIFIER_FIXUP_1777.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1790 = _RESERVED_IDENTIFIER_FIXUP_2957.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2963 = _RESERVED_IDENTIFIER_FIXUP_2957;
    _RESERVED_IDENTIFIER_FIXUP_2963.x = _RESERVED_IDENTIFIER_FIXUP_1790.x;
    _RESERVED_IDENTIFIER_FIXUP_2963.y = _RESERVED_IDENTIFIER_FIXUP_1790.y;
    _RESERVED_IDENTIFIER_FIXUP_2963.z = _RESERVED_IDENTIFIER_FIXUP_1790.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1845 = OptTex0( texcoord0.xyz);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1849 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1853 = hdTex2(param_45);
    vec2 param_46 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1857 = hdTex3(param_46);
    vec2 param_47 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1861 = hdTex4(param_47);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1871 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1845, _RESERVED_IDENTIFIER_FIXUP_1849, _RESERVED_IDENTIFIER_FIXUP_1861.xxxx), _RESERVED_IDENTIFIER_FIXUP_1853, _RESERVED_IDENTIFIER_FIXUP_1861.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1876 = mix(_RESERVED_IDENTIFIER_FIXUP_1871, _RESERVED_IDENTIFIER_FIXUP_1857, _RESERVED_IDENTIFIER_FIXUP_1861.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2979 = _RESERVED_IDENTIFIER_FIXUP_1871;
    _RESERVED_IDENTIFIER_FIXUP_2979.x = _RESERVED_IDENTIFIER_FIXUP_1093;
    float _RESERVED_IDENTIFIER_FIXUP_1889 = clamp((_RESERVED_IDENTIFIER_FIXUP_1093 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2979.x = _RESERVED_IDENTIFIER_FIXUP_1889;
    float _RESERVED_IDENTIFIER_FIXUP_1895 = ((-_RESERVED_IDENTIFIER_FIXUP_1889) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2979.y = _RESERVED_IDENTIFIER_FIXUP_1895;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3321;
    if (_RESERVED_IDENTIFIER_FIXUP_1895 != (-_RESERVED_IDENTIFIER_FIXUP_1895))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1907 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1917 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1919 = _RESERVED_IDENTIFIER_FIXUP_1917.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2992 = _RESERVED_IDENTIFIER_FIXUP_2979;
        _RESERVED_IDENTIFIER_FIXUP_2992.y = _RESERVED_IDENTIFIER_FIXUP_1919;
        _RESERVED_IDENTIFIER_FIXUP_2992.z = _RESERVED_IDENTIFIER_FIXUP_1917.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1927 = _RESERVED_IDENTIFIER_FIXUP_2992.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2996;
        _RESERVED_IDENTIFIER_FIXUP_2996.x = _RESERVED_IDENTIFIER_FIXUP_1927.x;
        _RESERVED_IDENTIFIER_FIXUP_2996.y = _RESERVED_IDENTIFIER_FIXUP_1927.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1934 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1938 = _RESERVED_IDENTIFIER_FIXUP_1934.y;
        _RESERVED_IDENTIFIER_FIXUP_2996.w = _RESERVED_IDENTIFIER_FIXUP_1938;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_1907.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1907.w;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2996.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1938;
        float _RESERVED_IDENTIFIER_FIXUP_1949 = hdLod5(param_48, param_49).x + hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3338 = vec4(_RESERVED_IDENTIFIER_FIXUP_1889, _RESERVED_IDENTIFIER_FIXUP_1919, _RESERVED_IDENTIFIER_FIXUP_1917.y, _RESERVED_IDENTIFIER_FIXUP_1949);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1956 = _RESERVED_IDENTIFIER_FIXUP_3338.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3009;
        _RESERVED_IDENTIFIER_FIXUP_3009.x = _RESERVED_IDENTIFIER_FIXUP_1956.x;
        _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1956.y;
        _RESERVED_IDENTIFIER_FIXUP_3009.w = _RESERVED_IDENTIFIER_FIXUP_1938;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3009.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1938;
        float _RESERVED_IDENTIFIER_FIXUP_1978 = _RESERVED_IDENTIFIER_FIXUP_1949 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3338.w = _RESERVED_IDENTIFIER_FIXUP_1978;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1985 = _RESERVED_IDENTIFIER_FIXUP_3338.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3022;
        _RESERVED_IDENTIFIER_FIXUP_3022.x = _RESERVED_IDENTIFIER_FIXUP_1985.x;
        _RESERVED_IDENTIFIER_FIXUP_3022.y = _RESERVED_IDENTIFIER_FIXUP_1985.y;
        _RESERVED_IDENTIFIER_FIXUP_3022.w = _RESERVED_IDENTIFIER_FIXUP_1938;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3022.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_1938;
        float _RESERVED_IDENTIFIER_FIXUP_2007 = _RESERVED_IDENTIFIER_FIXUP_1978 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3338.w = _RESERVED_IDENTIFIER_FIXUP_2007;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2014 = _RESERVED_IDENTIFIER_FIXUP_3338.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3035;
        _RESERVED_IDENTIFIER_FIXUP_3035.x = _RESERVED_IDENTIFIER_FIXUP_2014.x;
        _RESERVED_IDENTIFIER_FIXUP_3035.y = _RESERVED_IDENTIFIER_FIXUP_2014.y;
        _RESERVED_IDENTIFIER_FIXUP_3035.w = _RESERVED_IDENTIFIER_FIXUP_1938;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3035.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_1938;
        float _RESERVED_IDENTIFIER_FIXUP_2036 = _RESERVED_IDENTIFIER_FIXUP_2007 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2036;
        float _RESERVED_IDENTIFIER_FIXUP_2041 = (_RESERVED_IDENTIFIER_FIXUP_2036 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2041;
        _RESERVED_IDENTIFIER_FIXUP_3338.x = (_RESERVED_IDENTIFIER_FIXUP_1889 * _RESERVED_IDENTIFIER_FIXUP_2041) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3321 = _RESERVED_IDENTIFIER_FIXUP_3338;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2989 = _RESERVED_IDENTIFIER_FIXUP_2979;
        _RESERVED_IDENTIFIER_FIXUP_2989.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3321 = _RESERVED_IDENTIFIER_FIXUP_2989;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3057 = _RESERVED_IDENTIFIER_FIXUP_3321;
    _RESERVED_IDENTIFIER_FIXUP_3057.y = _RESERVED_IDENTIFIER_FIXUP_1269;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3326;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3324;
    if (_RESERVED_IDENTIFIER_FIXUP_1269 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2068 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2078 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3197 = _RESERVED_IDENTIFIER_FIXUP_3057;
        _RESERVED_IDENTIFIER_FIXUP_3197.y = _RESERVED_IDENTIFIER_FIXUP_2078.x;
        _RESERVED_IDENTIFIER_FIXUP_3197.z = _RESERVED_IDENTIFIER_FIXUP_2078.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2088 = _RESERVED_IDENTIFIER_FIXUP_3197.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3201;
        _RESERVED_IDENTIFIER_FIXUP_3201.x = _RESERVED_IDENTIFIER_FIXUP_2088.x;
        _RESERVED_IDENTIFIER_FIXUP_3201.y = _RESERVED_IDENTIFIER_FIXUP_2088.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2095 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2099 = _RESERVED_IDENTIFIER_FIXUP_2095.y;
        _RESERVED_IDENTIFIER_FIXUP_3201.w = _RESERVED_IDENTIFIER_FIXUP_2099;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2068.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2068.w;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3201.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2099;
        float _RESERVED_IDENTIFIER_FIXUP_2110 = hdLod6(param_58, param_59).x + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3197.w = _RESERVED_IDENTIFIER_FIXUP_2110;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2117 = _RESERVED_IDENTIFIER_FIXUP_3197.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3214;
        _RESERVED_IDENTIFIER_FIXUP_3214.x = _RESERVED_IDENTIFIER_FIXUP_2117.x;
        _RESERVED_IDENTIFIER_FIXUP_3214.y = _RESERVED_IDENTIFIER_FIXUP_2117.y;
        _RESERVED_IDENTIFIER_FIXUP_3214.w = _RESERVED_IDENTIFIER_FIXUP_2099;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3214.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2099;
        float _RESERVED_IDENTIFIER_FIXUP_2139 = _RESERVED_IDENTIFIER_FIXUP_2110 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3197.w = _RESERVED_IDENTIFIER_FIXUP_2139;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2146 = _RESERVED_IDENTIFIER_FIXUP_3197.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3227;
        _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_2146.x;
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2146.y;
        _RESERVED_IDENTIFIER_FIXUP_3227.w = _RESERVED_IDENTIFIER_FIXUP_2099;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3227.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2099;
        float _RESERVED_IDENTIFIER_FIXUP_2168 = _RESERVED_IDENTIFIER_FIXUP_2139 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3197.w = _RESERVED_IDENTIFIER_FIXUP_2168;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2175 = _RESERVED_IDENTIFIER_FIXUP_3197.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3240;
        _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_2175.x;
        _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_2175.y;
        _RESERVED_IDENTIFIER_FIXUP_3240.w = _RESERVED_IDENTIFIER_FIXUP_2099;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3240.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2099;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2192 = hdLod6(param_66, param_67);
        float _RESERVED_IDENTIFIER_FIXUP_2197 = _RESERVED_IDENTIFIER_FIXUP_2168 + _RESERVED_IDENTIFIER_FIXUP_2192.x;
        _RESERVED_IDENTIFIER_FIXUP_3197.y = _RESERVED_IDENTIFIER_FIXUP_2197;
        _RESERVED_IDENTIFIER_FIXUP_3197.y = _RESERVED_IDENTIFIER_FIXUP_2197 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3326 = _RESERVED_IDENTIFIER_FIXUP_2192;
        _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_3197;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2210 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3062 = _RESERVED_IDENTIFIER_FIXUP_3057;
        _RESERVED_IDENTIFIER_FIXUP_3062.z = _RESERVED_IDENTIFIER_FIXUP_2210;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3327;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3325;
        if (_RESERVED_IDENTIFIER_FIXUP_2210 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2219 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2219.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2219.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2225 = hdLod7(param_68, param_69);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2229 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3137 = _RESERVED_IDENTIFIER_FIXUP_3062;
            _RESERVED_IDENTIFIER_FIXUP_3137.z = _RESERVED_IDENTIFIER_FIXUP_2229.x;
            _RESERVED_IDENTIFIER_FIXUP_3137.w = _RESERVED_IDENTIFIER_FIXUP_2229.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2239 = _RESERVED_IDENTIFIER_FIXUP_3137.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3141;
            _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_2239.x;
            _RESERVED_IDENTIFIER_FIXUP_3141.y = _RESERVED_IDENTIFIER_FIXUP_2239.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2246 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2250 = _RESERVED_IDENTIFIER_FIXUP_2246.y;
            _RESERVED_IDENTIFIER_FIXUP_3141.w = _RESERVED_IDENTIFIER_FIXUP_2250;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3141.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2250;
            float _RESERVED_IDENTIFIER_FIXUP_2261 = _RESERVED_IDENTIFIER_FIXUP_2225.x + hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3152 = _RESERVED_IDENTIFIER_FIXUP_2225;
            _RESERVED_IDENTIFIER_FIXUP_3152.x = _RESERVED_IDENTIFIER_FIXUP_2261;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2268 = _RESERVED_IDENTIFIER_FIXUP_3137.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3154;
            _RESERVED_IDENTIFIER_FIXUP_3154.x = _RESERVED_IDENTIFIER_FIXUP_2268.x;
            _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_2268.y;
            _RESERVED_IDENTIFIER_FIXUP_3154.w = _RESERVED_IDENTIFIER_FIXUP_2250;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3154.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2250;
            float _RESERVED_IDENTIFIER_FIXUP_2290 = _RESERVED_IDENTIFIER_FIXUP_2261 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3152.x = _RESERVED_IDENTIFIER_FIXUP_2290;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2297 = _RESERVED_IDENTIFIER_FIXUP_3137.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3167;
            _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_2297.x;
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_2297.y;
            _RESERVED_IDENTIFIER_FIXUP_3167.w = _RESERVED_IDENTIFIER_FIXUP_2250;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3167.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2250;
            float _RESERVED_IDENTIFIER_FIXUP_2319 = _RESERVED_IDENTIFIER_FIXUP_2290 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3152.x = _RESERVED_IDENTIFIER_FIXUP_2319;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2326 = _RESERVED_IDENTIFIER_FIXUP_3137.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3180;
            _RESERVED_IDENTIFIER_FIXUP_3180.x = _RESERVED_IDENTIFIER_FIXUP_2326.x;
            _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_2326.y;
            _RESERVED_IDENTIFIER_FIXUP_3180.w = _RESERVED_IDENTIFIER_FIXUP_2250;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3180.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2250;
            float _RESERVED_IDENTIFIER_FIXUP_2348 = _RESERVED_IDENTIFIER_FIXUP_2319 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3137.z = _RESERVED_IDENTIFIER_FIXUP_2348;
            _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_2348 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3327 = _RESERVED_IDENTIFIER_FIXUP_3152;
            _RESERVED_IDENTIFIER_FIXUP_3325 = _RESERVED_IDENTIFIER_FIXUP_3137;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3066 = _RESERVED_IDENTIFIER_FIXUP_3062;
            _RESERVED_IDENTIFIER_FIXUP_3066.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3066.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2364 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2368 = _RESERVED_IDENTIFIER_FIXUP_2364.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3339 = vec4(_RESERVED_IDENTIFIER_FIXUP_2364.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2368);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2379 = _RESERVED_IDENTIFIER_FIXUP_3339.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3340 = vec4(_RESERVED_IDENTIFIER_FIXUP_2379 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2368);
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2379;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2368;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3340.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2368;
            float _RESERVED_IDENTIFIER_FIXUP_2409 = hdLod8(param_78, param_79).x + hdLod8(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3093 = _RESERVED_IDENTIFIER_FIXUP_3339;
            _RESERVED_IDENTIFIER_FIXUP_3093.z = _RESERVED_IDENTIFIER_FIXUP_2409;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2416 = _RESERVED_IDENTIFIER_FIXUP_3093.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3095 = _RESERVED_IDENTIFIER_FIXUP_3340;
            _RESERVED_IDENTIFIER_FIXUP_3095.x = _RESERVED_IDENTIFIER_FIXUP_2416.x;
            _RESERVED_IDENTIFIER_FIXUP_3095.y = _RESERVED_IDENTIFIER_FIXUP_2416.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3095.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2368;
            float _RESERVED_IDENTIFIER_FIXUP_2431 = _RESERVED_IDENTIFIER_FIXUP_2409 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3093.z = _RESERVED_IDENTIFIER_FIXUP_2431;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2438 = _RESERVED_IDENTIFIER_FIXUP_3093.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3104 = _RESERVED_IDENTIFIER_FIXUP_3095;
            _RESERVED_IDENTIFIER_FIXUP_3104.x = _RESERVED_IDENTIFIER_FIXUP_2438.x;
            _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_2438.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3104.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2368;
            float _RESERVED_IDENTIFIER_FIXUP_2453 = _RESERVED_IDENTIFIER_FIXUP_2431 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3093.z = _RESERVED_IDENTIFIER_FIXUP_2453;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2460 = _RESERVED_IDENTIFIER_FIXUP_3093.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3113 = _RESERVED_IDENTIFIER_FIXUP_3104;
            _RESERVED_IDENTIFIER_FIXUP_3113.x = _RESERVED_IDENTIFIER_FIXUP_2460.x;
            _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_2460.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3113.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2368;
            float _RESERVED_IDENTIFIER_FIXUP_2475 = _RESERVED_IDENTIFIER_FIXUP_2453 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_2475;
            float _RESERVED_IDENTIFIER_FIXUP_2483 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_2483;
            float _RESERVED_IDENTIFIER_FIXUP_2489 = clamp((_RESERVED_IDENTIFIER_FIXUP_2483 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3066.z = _RESERVED_IDENTIFIER_FIXUP_2489;
            float _RESERVED_IDENTIFIER_FIXUP_2494 = (_RESERVED_IDENTIFIER_FIXUP_2475 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3066.w = _RESERVED_IDENTIFIER_FIXUP_2494;
            _RESERVED_IDENTIFIER_FIXUP_3066.y = (_RESERVED_IDENTIFIER_FIXUP_2489 * _RESERVED_IDENTIFIER_FIXUP_2494) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3327 = _RESERVED_IDENTIFIER_FIXUP_3093;
            _RESERVED_IDENTIFIER_FIXUP_3325 = _RESERVED_IDENTIFIER_FIXUP_3066;
        }
        _RESERVED_IDENTIFIER_FIXUP_3326 = _RESERVED_IDENTIFIER_FIXUP_3327;
        _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_3325;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2509 = min(_RESERVED_IDENTIFIER_FIXUP_3324.y, _RESERVED_IDENTIFIER_FIXUP_3324.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3258 = _RESERVED_IDENTIFIER_FIXUP_3326;
    _RESERVED_IDENTIFIER_FIXUP_3258.x = _RESERVED_IDENTIFIER_FIXUP_2509;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3261 = _RESERVED_IDENTIFIER_FIXUP_3324;
    _RESERVED_IDENTIFIER_FIXUP_3261.x = (_RESERVED_IDENTIFIER_FIXUP_2509 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2520 = _RESERVED_IDENTIFIER_FIXUP_1876.xyz * _RESERVED_IDENTIFIER_FIXUP_3261.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3263 = _RESERVED_IDENTIFIER_FIXUP_3261;
    _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_2520.x;
    _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_2520.y;
    _RESERVED_IDENTIFIER_FIXUP_3263.z = _RESERVED_IDENTIFIER_FIXUP_2520.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2531 = _RESERVED_IDENTIFIER_FIXUP_3263.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3269 = _RESERVED_IDENTIFIER_FIXUP_3263;
    _RESERVED_IDENTIFIER_FIXUP_3269.x = _RESERVED_IDENTIFIER_FIXUP_2531.x;
    _RESERVED_IDENTIFIER_FIXUP_3269.y = _RESERVED_IDENTIFIER_FIXUP_2531.y;
    _RESERVED_IDENTIFIER_FIXUP_3269.z = _RESERVED_IDENTIFIER_FIXUP_2531.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2542 = _RESERVED_IDENTIFIER_FIXUP_3269.xyz + _RESERVED_IDENTIFIER_FIXUP_3269.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3275 = _RESERVED_IDENTIFIER_FIXUP_3269;
    _RESERVED_IDENTIFIER_FIXUP_3275.x = _RESERVED_IDENTIFIER_FIXUP_2542.x;
    _RESERVED_IDENTIFIER_FIXUP_3275.y = _RESERVED_IDENTIFIER_FIXUP_2542.y;
    _RESERVED_IDENTIFIER_FIXUP_3275.z = _RESERVED_IDENTIFIER_FIXUP_2542.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2553 = _RESERVED_IDENTIFIER_FIXUP_1876.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3281 = _RESERVED_IDENTIFIER_FIXUP_1876;
    _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_2553.x;
    _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_2553.y;
    _RESERVED_IDENTIFIER_FIXUP_3281.z = _RESERVED_IDENTIFIER_FIXUP_2553.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2567 = (_RESERVED_IDENTIFIER_FIXUP_3281.xyz * _RESERVED_IDENTIFIER_FIXUP_3258.xxx) + _RESERVED_IDENTIFIER_FIXUP_3275.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3287 = _RESERVED_IDENTIFIER_FIXUP_3275;
    _RESERVED_IDENTIFIER_FIXUP_3287.x = _RESERVED_IDENTIFIER_FIXUP_2567.x;
    _RESERVED_IDENTIFIER_FIXUP_3287.y = _RESERVED_IDENTIFIER_FIXUP_2567.y;
    _RESERVED_IDENTIFIER_FIXUP_3287.z = _RESERVED_IDENTIFIER_FIXUP_2567.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2580 = _RESERVED_IDENTIFIER_FIXUP_3287.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3293 = _RESERVED_IDENTIFIER_FIXUP_3287;
    _RESERVED_IDENTIFIER_FIXUP_3293.x = _RESERVED_IDENTIFIER_FIXUP_2580.x;
    _RESERVED_IDENTIFIER_FIXUP_3293.y = _RESERVED_IDENTIFIER_FIXUP_2580.y;
    _RESERVED_IDENTIFIER_FIXUP_3293.z = _RESERVED_IDENTIFIER_FIXUP_2580.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3293.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_914 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_923;
    if (_RESERVED_IDENTIFIER_FIXUP_914)
    {
        _RESERVED_IDENTIFIER_FIXUP_923 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_923 = _RESERVED_IDENTIFIER_FIXUP_914;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_923)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_960 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2963.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_987 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2639;
    if (_RESERVED_IDENTIFIER_FIXUP_960 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2639 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_960), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_987);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2639 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_987);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2639;
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
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB152 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB152.x;
        r0.z = hdB152.y;
        vec2 hdB174 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB174.x;
        r3.y = hdB174.y;
        vec2 hdB182 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB182.x;
        r3.w = hdB182.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r0.w = r2.x + r3.x;
        vec2 hdB205 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB205.x;
        r2.y = hdB205.y;
        vec2 hdB212 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB212.x;
        r2.w = hdB212.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r0.w += r2.x;
        vec2 hdB235 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB235.x;
        r2.y = hdB235.y;
        vec2 hdB242 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB242.x;
        r2.w = hdB242.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r0.w += r2.x;
        vec2 hdB265 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB265.x;
        r2.y = hdB265.y;
        vec2 hdB272 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB272.x;
        r2.w = hdB272.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r0.y = r0.w + r2.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v6.x), abs(v6.y));
    if (r0.y < 1.0)
    {
        r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        vec2 hdB332 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB332.x;
        r0.z = hdB332.y;
        vec2 hdB342 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB342.x;
        r3.y = hdB342.y;
        vec2 hdB349 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB349.x;
        r3.w = hdB349.y;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r0.w = r2.x + r3.x;
        vec2 hdB371 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB371.x;
        r2.y = hdB371.y;
        vec2 hdB378 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB378.x;
        r2.w = hdB378.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod6(param_18, param_19);
        r0.w += r2.x;
        vec2 hdB400 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB400.x;
        r2.y = hdB400.y;
        vec2 hdB407 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB407.x;
        r2.w = hdB407.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod6(param_20, param_21);
        r0.w += r2.x;
        vec2 hdB429 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB429.x;
        r2.y = hdB429.y;
        vec2 hdB436 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB436.x;
        r2.w = hdB436.y;
        vec2 param_22 = r2.xy;
        float param_23 = r2.w;
        r2 = hdLod6(param_22, param_23);
        r0.y = r0.w + r2.x;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v7.x), abs(v7.y));
        if (r0.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            vec2 hdB485 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB485.x;
            r0.w = hdB485.y;
            vec2 hdB495 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB495.x;
            r3.y = hdB495.y;
            vec2 hdB502 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB502.x;
            r3.w = hdB502.y;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r2.x += r3.x;
            vec2 hdB524 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB524.x;
            r3.y = hdB524.y;
            vec2 hdB531 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB531.x;
            r3.w = hdB531.y;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r2.x += r3.x;
            vec2 hdB553 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB553.x;
            r3.y = hdB553.y;
            vec2 hdB560 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB560.x;
            r3.w = hdB560.y;
            vec2 param_30 = r3.xy;
            float param_31 = r3.w;
            r3 = hdLod7(param_30, param_31);
            r2.x += r3.x;
            vec2 hdB582 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB582.x;
            r3.y = hdB582.y;
            vec2 hdB589 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB589.x;
            r3.w = hdB589.y;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod7(param_32, param_33);
            r0.z = r2.x + r3.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v5.w;
            r0.w = v6.w;
            vec2 hdB621 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB621.x;
            r2.w = hdB621.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_34 = r2.xy;
            float param_35 = r2.w;
            r3 = hdLod8(param_34, param_35);
            vec2 hdB646 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB646.x;
            r4.y = hdB646.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r5 = hdLod8(param_36, param_37);
            r2.z = r3.x + r5.x;
            vec2 hdB674 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB674.x;
            r4.y = hdB674.y;
            vec2 param_38 = r4.xy;
            float param_39 = r4.w;
            r3 = hdLod8(param_38, param_39);
            r2.z += r3.x;
            vec2 hdB696 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB696.x;
            r4.y = hdB696.y;
            vec2 param_40 = r4.xy;
            float param_41 = r4.w;
            r3 = hdLod8(param_40, param_41);
            r2.z += r3.x;
            vec2 hdB718 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB718.x;
            r4.y = hdB718.y;
            vec2 param_42 = r4.xy;
            float param_43 = r4.w;
            r3 = hdLod8(param_42, param_43);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r0.z), abs(r0.w));
            r0.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.z * r0.w) + 1.0;
        }
    }
    r2.x = min(r0.y, r0.x);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB778 = r0;
    vec3 hdB780 = r1.xyz * hdB778.xxx;
    r0.x = hdB780.x;
    r0.y = hdB780.y;
    r0.z = hdB780.z;
    vec4 hdB787 = r0;
    vec3 hdB791 = hdB787.xyz * v0.xyz;
    r0.x = hdB791.x;
    r0.y = hdB791.y;
    r0.z = hdB791.z;
    vec4 hdB798 = r0;
    vec4 hdB800 = r0;
    vec3 hdB802 = hdB798.xyz + hdB800.xyz;
    r0.x = hdB802.x;
    r0.y = hdB802.y;
    r0.z = hdB802.z;
    vec4 hdB809 = r1;
    vec3 hdB813 = hdB809.www * v1.xyz;
    r1.x = hdB813.x;
    r1.y = hdB813.y;
    r1.z = hdB813.z;
    vec4 hdB825 = r0;
    vec3 hdB827 = (r1.xyz * r2.xxx) + hdB825.xyz;
    r0.x = hdB827.x;
    r0.y = hdB827.y;
    r0.z = hdB827.z;
    vec4 hdB834 = r0;
    vec3 hdB841 = hdB834.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB841.x;
    r0.y = hdB841.y;
    r0.z = hdB841.z;
    vec3 hdB856 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB856.x;
    oC0.y = hdB856.y;
    oC0.z = hdB856.z;
    oC0.w = 1.0;
    bool hdB869 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB877;
    if (hdB869)
    {
        hdB877 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB877 = hdB869;
    }
    if (hdB877)
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
    bool _3186 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3196;
    if (_3186)
    {
        _3196 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3196 = _3186;
    }
    if (_3196)
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
        bool _3221 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3236;
        if (!_3221)
        {
            _3236 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3236 = _3221;
        }
        if (_3236)
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
