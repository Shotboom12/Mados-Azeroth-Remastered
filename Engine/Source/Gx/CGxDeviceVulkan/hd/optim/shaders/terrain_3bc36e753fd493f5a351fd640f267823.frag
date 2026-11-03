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
float _RESERVED_IDENTIFIER_FIXUP_3367;
vec4 _RESERVED_IDENTIFIER_FIXUP_3368;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1073 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1077 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1081 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1085 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1089 = hdTex4(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_1093 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1089.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2698 = _RESERVED_IDENTIFIER_FIXUP_1089;
    _RESERVED_IDENTIFIER_FIXUP_2698.w = _RESERVED_IDENTIFIER_FIXUP_1093;
    float _RESERVED_IDENTIFIER_FIXUP_1098 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1093;
    _RESERVED_IDENTIFIER_FIXUP_2698.w = _RESERVED_IDENTIFIER_FIXUP_1098;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1103 = _RESERVED_IDENTIFIER_FIXUP_1077 * _RESERVED_IDENTIFIER_FIXUP_2698.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1121 = (_RESERVED_IDENTIFIER_FIXUP_1085 * _RESERVED_IDENTIFIER_FIXUP_2698.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1081 * _RESERVED_IDENTIFIER_FIXUP_2698.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1073 * _RESERVED_IDENTIFIER_FIXUP_2698.wwww) + _RESERVED_IDENTIFIER_FIXUP_1103));
    float _RESERVED_IDENTIFIER_FIXUP_1128 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2705 = _RESERVED_IDENTIFIER_FIXUP_1103;
    _RESERVED_IDENTIFIER_FIXUP_2705.x = _RESERVED_IDENTIFIER_FIXUP_1128;
    float _RESERVED_IDENTIFIER_FIXUP_1134 = clamp((_RESERVED_IDENTIFIER_FIXUP_1128 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2705.x = _RESERVED_IDENTIFIER_FIXUP_1134;
    float _RESERVED_IDENTIFIER_FIXUP_1140 = ((-_RESERVED_IDENTIFIER_FIXUP_1134) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2705.y = _RESERVED_IDENTIFIER_FIXUP_1140;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3369;
    if (_RESERVED_IDENTIFIER_FIXUP_1140 != (-_RESERVED_IDENTIFIER_FIXUP_1140))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1152 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1162 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1164 = _RESERVED_IDENTIFIER_FIXUP_1162.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2718 = _RESERVED_IDENTIFIER_FIXUP_2705;
        _RESERVED_IDENTIFIER_FIXUP_2718.y = _RESERVED_IDENTIFIER_FIXUP_1164;
        _RESERVED_IDENTIFIER_FIXUP_2718.z = _RESERVED_IDENTIFIER_FIXUP_1162.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1172 = _RESERVED_IDENTIFIER_FIXUP_2718.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2722;
        _RESERVED_IDENTIFIER_FIXUP_2722.x = _RESERVED_IDENTIFIER_FIXUP_1172.x;
        _RESERVED_IDENTIFIER_FIXUP_2722.y = _RESERVED_IDENTIFIER_FIXUP_1172.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1179 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_1179.y;
        _RESERVED_IDENTIFIER_FIXUP_2722.w = _RESERVED_IDENTIFIER_FIXUP_1183;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1152.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1152.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2722.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1183;
        float _RESERVED_IDENTIFIER_FIXUP_1194 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3395 = vec4(_RESERVED_IDENTIFIER_FIXUP_1134, _RESERVED_IDENTIFIER_FIXUP_1164, _RESERVED_IDENTIFIER_FIXUP_1162.y, _RESERVED_IDENTIFIER_FIXUP_1194);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1201 = _RESERVED_IDENTIFIER_FIXUP_3395.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2735;
        _RESERVED_IDENTIFIER_FIXUP_2735.x = _RESERVED_IDENTIFIER_FIXUP_1201.x;
        _RESERVED_IDENTIFIER_FIXUP_2735.y = _RESERVED_IDENTIFIER_FIXUP_1201.y;
        _RESERVED_IDENTIFIER_FIXUP_2735.w = _RESERVED_IDENTIFIER_FIXUP_1183;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2735.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1183;
        float _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1194 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3395.w = _RESERVED_IDENTIFIER_FIXUP_1223;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_3395.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2748;
        _RESERVED_IDENTIFIER_FIXUP_2748.x = _RESERVED_IDENTIFIER_FIXUP_1230.x;
        _RESERVED_IDENTIFIER_FIXUP_2748.y = _RESERVED_IDENTIFIER_FIXUP_1230.y;
        _RESERVED_IDENTIFIER_FIXUP_2748.w = _RESERVED_IDENTIFIER_FIXUP_1183;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2748.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1183;
        float _RESERVED_IDENTIFIER_FIXUP_1252 = _RESERVED_IDENTIFIER_FIXUP_1223 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3395.w = _RESERVED_IDENTIFIER_FIXUP_1252;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1259 = _RESERVED_IDENTIFIER_FIXUP_3395.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2761;
        _RESERVED_IDENTIFIER_FIXUP_2761.x = _RESERVED_IDENTIFIER_FIXUP_1259.x;
        _RESERVED_IDENTIFIER_FIXUP_2761.y = _RESERVED_IDENTIFIER_FIXUP_1259.y;
        _RESERVED_IDENTIFIER_FIXUP_2761.w = _RESERVED_IDENTIFIER_FIXUP_1183;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_2761.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1183;
        float _RESERVED_IDENTIFIER_FIXUP_1281 = _RESERVED_IDENTIFIER_FIXUP_1252 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_1281;
        float _RESERVED_IDENTIFIER_FIXUP_1286 = (_RESERVED_IDENTIFIER_FIXUP_1281 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_1286;
        _RESERVED_IDENTIFIER_FIXUP_3395.x = (_RESERVED_IDENTIFIER_FIXUP_1134 * _RESERVED_IDENTIFIER_FIXUP_1286) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3369 = _RESERVED_IDENTIFIER_FIXUP_3395;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2715 = _RESERVED_IDENTIFIER_FIXUP_2705;
        _RESERVED_IDENTIFIER_FIXUP_2715.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3369 = _RESERVED_IDENTIFIER_FIXUP_2715;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1304 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2783 = _RESERVED_IDENTIFIER_FIXUP_3369;
    _RESERVED_IDENTIFIER_FIXUP_2783.y = _RESERVED_IDENTIFIER_FIXUP_1304;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3374;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3372;
    if (_RESERVED_IDENTIFIER_FIXUP_1304 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1313 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1323 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2923 = _RESERVED_IDENTIFIER_FIXUP_2783;
        _RESERVED_IDENTIFIER_FIXUP_2923.y = _RESERVED_IDENTIFIER_FIXUP_1323.x;
        _RESERVED_IDENTIFIER_FIXUP_2923.z = _RESERVED_IDENTIFIER_FIXUP_1323.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1333 = _RESERVED_IDENTIFIER_FIXUP_2923.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2927;
        _RESERVED_IDENTIFIER_FIXUP_2927.x = _RESERVED_IDENTIFIER_FIXUP_1333.x;
        _RESERVED_IDENTIFIER_FIXUP_2927.y = _RESERVED_IDENTIFIER_FIXUP_1333.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1340 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1340.y;
        _RESERVED_IDENTIFIER_FIXUP_2927.w = _RESERVED_IDENTIFIER_FIXUP_1344;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1313.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1313.w;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2927.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1344;
        float _RESERVED_IDENTIFIER_FIXUP_1355 = hdLod6(param_14, param_15).x + hdLod6(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_2923.w = _RESERVED_IDENTIFIER_FIXUP_1355;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_2923.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2940;
        _RESERVED_IDENTIFIER_FIXUP_2940.x = _RESERVED_IDENTIFIER_FIXUP_1362.x;
        _RESERVED_IDENTIFIER_FIXUP_2940.y = _RESERVED_IDENTIFIER_FIXUP_1362.y;
        _RESERVED_IDENTIFIER_FIXUP_2940.w = _RESERVED_IDENTIFIER_FIXUP_1344;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2940.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1344;
        float _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_1355 + hdLod6(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_2923.w = _RESERVED_IDENTIFIER_FIXUP_1384;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_2923.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2953;
        _RESERVED_IDENTIFIER_FIXUP_2953.x = _RESERVED_IDENTIFIER_FIXUP_1391.x;
        _RESERVED_IDENTIFIER_FIXUP_2953.y = _RESERVED_IDENTIFIER_FIXUP_1391.y;
        _RESERVED_IDENTIFIER_FIXUP_2953.w = _RESERVED_IDENTIFIER_FIXUP_1344;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2953.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1344;
        float _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_1384 + hdLod6(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_2923.w = _RESERVED_IDENTIFIER_FIXUP_1413;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_2923.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2966;
        _RESERVED_IDENTIFIER_FIXUP_2966.x = _RESERVED_IDENTIFIER_FIXUP_1420.x;
        _RESERVED_IDENTIFIER_FIXUP_2966.y = _RESERVED_IDENTIFIER_FIXUP_1420.y;
        _RESERVED_IDENTIFIER_FIXUP_2966.w = _RESERVED_IDENTIFIER_FIXUP_1344;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_2966.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1344;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1437 = hdLod6(param_22, param_23);
        float _RESERVED_IDENTIFIER_FIXUP_1442 = _RESERVED_IDENTIFIER_FIXUP_1413 + _RESERVED_IDENTIFIER_FIXUP_1437.x;
        _RESERVED_IDENTIFIER_FIXUP_2923.y = _RESERVED_IDENTIFIER_FIXUP_1442;
        _RESERVED_IDENTIFIER_FIXUP_2923.y = _RESERVED_IDENTIFIER_FIXUP_1442 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_1437;
        _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_2923;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1455 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2788 = _RESERVED_IDENTIFIER_FIXUP_2783;
        _RESERVED_IDENTIFIER_FIXUP_2788.z = _RESERVED_IDENTIFIER_FIXUP_1455;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3375;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3373;
        if (_RESERVED_IDENTIFIER_FIXUP_1455 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1464 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1464.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1464.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1470 = hdLod7(param_24, param_25);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1474 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2863 = _RESERVED_IDENTIFIER_FIXUP_2788;
            _RESERVED_IDENTIFIER_FIXUP_2863.z = _RESERVED_IDENTIFIER_FIXUP_1474.x;
            _RESERVED_IDENTIFIER_FIXUP_2863.w = _RESERVED_IDENTIFIER_FIXUP_1474.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1484 = _RESERVED_IDENTIFIER_FIXUP_2863.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2867;
            _RESERVED_IDENTIFIER_FIXUP_2867.x = _RESERVED_IDENTIFIER_FIXUP_1484.x;
            _RESERVED_IDENTIFIER_FIXUP_2867.y = _RESERVED_IDENTIFIER_FIXUP_1484.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1491 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_1491.y;
            _RESERVED_IDENTIFIER_FIXUP_2867.w = _RESERVED_IDENTIFIER_FIXUP_1495;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2867.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1495;
            float _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_1470.x + hdLod7(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2878 = _RESERVED_IDENTIFIER_FIXUP_1470;
            _RESERVED_IDENTIFIER_FIXUP_2878.x = _RESERVED_IDENTIFIER_FIXUP_1506;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_2863.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2880;
            _RESERVED_IDENTIFIER_FIXUP_2880.x = _RESERVED_IDENTIFIER_FIXUP_1513.x;
            _RESERVED_IDENTIFIER_FIXUP_2880.y = _RESERVED_IDENTIFIER_FIXUP_1513.y;
            _RESERVED_IDENTIFIER_FIXUP_2880.w = _RESERVED_IDENTIFIER_FIXUP_1495;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2880.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1495;
            float _RESERVED_IDENTIFIER_FIXUP_1535 = _RESERVED_IDENTIFIER_FIXUP_1506 + hdLod7(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_2878.x = _RESERVED_IDENTIFIER_FIXUP_1535;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1542 = _RESERVED_IDENTIFIER_FIXUP_2863.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2893;
            _RESERVED_IDENTIFIER_FIXUP_2893.x = _RESERVED_IDENTIFIER_FIXUP_1542.x;
            _RESERVED_IDENTIFIER_FIXUP_2893.y = _RESERVED_IDENTIFIER_FIXUP_1542.y;
            _RESERVED_IDENTIFIER_FIXUP_2893.w = _RESERVED_IDENTIFIER_FIXUP_1495;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2893.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1495;
            float _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_1535 + hdLod7(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_2878.x = _RESERVED_IDENTIFIER_FIXUP_1564;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_2863.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2906;
            _RESERVED_IDENTIFIER_FIXUP_2906.x = _RESERVED_IDENTIFIER_FIXUP_1571.x;
            _RESERVED_IDENTIFIER_FIXUP_2906.y = _RESERVED_IDENTIFIER_FIXUP_1571.y;
            _RESERVED_IDENTIFIER_FIXUP_2906.w = _RESERVED_IDENTIFIER_FIXUP_1495;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2906.xy;
            float param_33 = _RESERVED_IDENTIFIER_FIXUP_1495;
            float _RESERVED_IDENTIFIER_FIXUP_1593 = _RESERVED_IDENTIFIER_FIXUP_1564 + hdLod7(param_32, param_33).x;
            _RESERVED_IDENTIFIER_FIXUP_2863.z = _RESERVED_IDENTIFIER_FIXUP_1593;
            _RESERVED_IDENTIFIER_FIXUP_2863.y = _RESERVED_IDENTIFIER_FIXUP_1593 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3375 = _RESERVED_IDENTIFIER_FIXUP_2878;
            _RESERVED_IDENTIFIER_FIXUP_3373 = _RESERVED_IDENTIFIER_FIXUP_2863;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2792 = _RESERVED_IDENTIFIER_FIXUP_2788;
            _RESERVED_IDENTIFIER_FIXUP_2792.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2792.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1609 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1613 = _RESERVED_IDENTIFIER_FIXUP_1609.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3396 = vec4(_RESERVED_IDENTIFIER_FIXUP_1609.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1613);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1624 = _RESERVED_IDENTIFIER_FIXUP_3396.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3397 = vec4(_RESERVED_IDENTIFIER_FIXUP_1624 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1098);
            _RESERVED_IDENTIFIER_FIXUP_3397.w = _RESERVED_IDENTIFIER_FIXUP_1613;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_1624;
            float param_35 = _RESERVED_IDENTIFIER_FIXUP_1613;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3397.xy;
            float param_37 = _RESERVED_IDENTIFIER_FIXUP_1613;
            float _RESERVED_IDENTIFIER_FIXUP_1654 = hdLod8(param_34, param_35).x + hdLod8(param_36, param_37).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2819 = _RESERVED_IDENTIFIER_FIXUP_3396;
            _RESERVED_IDENTIFIER_FIXUP_2819.z = _RESERVED_IDENTIFIER_FIXUP_1654;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1661 = _RESERVED_IDENTIFIER_FIXUP_2819.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2821 = _RESERVED_IDENTIFIER_FIXUP_3397;
            _RESERVED_IDENTIFIER_FIXUP_2821.x = _RESERVED_IDENTIFIER_FIXUP_1661.x;
            _RESERVED_IDENTIFIER_FIXUP_2821.y = _RESERVED_IDENTIFIER_FIXUP_1661.y;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2821.xy;
            float param_39 = _RESERVED_IDENTIFIER_FIXUP_1613;
            float _RESERVED_IDENTIFIER_FIXUP_1676 = _RESERVED_IDENTIFIER_FIXUP_1654 + hdLod8(param_38, param_39).x;
            _RESERVED_IDENTIFIER_FIXUP_2819.z = _RESERVED_IDENTIFIER_FIXUP_1676;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1683 = _RESERVED_IDENTIFIER_FIXUP_2819.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2830 = _RESERVED_IDENTIFIER_FIXUP_2821;
            _RESERVED_IDENTIFIER_FIXUP_2830.x = _RESERVED_IDENTIFIER_FIXUP_1683.x;
            _RESERVED_IDENTIFIER_FIXUP_2830.y = _RESERVED_IDENTIFIER_FIXUP_1683.y;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2830.xy;
            float param_41 = _RESERVED_IDENTIFIER_FIXUP_1613;
            float _RESERVED_IDENTIFIER_FIXUP_1698 = _RESERVED_IDENTIFIER_FIXUP_1676 + hdLod8(param_40, param_41).x;
            _RESERVED_IDENTIFIER_FIXUP_2819.z = _RESERVED_IDENTIFIER_FIXUP_1698;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1705 = _RESERVED_IDENTIFIER_FIXUP_2819.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2839 = _RESERVED_IDENTIFIER_FIXUP_2830;
            _RESERVED_IDENTIFIER_FIXUP_2839.x = _RESERVED_IDENTIFIER_FIXUP_1705.x;
            _RESERVED_IDENTIFIER_FIXUP_2839.y = _RESERVED_IDENTIFIER_FIXUP_1705.y;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_2839.xy;
            float param_43 = _RESERVED_IDENTIFIER_FIXUP_1613;
            float _RESERVED_IDENTIFIER_FIXUP_1720 = _RESERVED_IDENTIFIER_FIXUP_1698 + hdLod8(param_42, param_43).x;
            _RESERVED_IDENTIFIER_FIXUP_2819.x = _RESERVED_IDENTIFIER_FIXUP_1720;
            float _RESERVED_IDENTIFIER_FIXUP_1728 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2819.y = _RESERVED_IDENTIFIER_FIXUP_1728;
            float _RESERVED_IDENTIFIER_FIXUP_1734 = clamp((_RESERVED_IDENTIFIER_FIXUP_1728 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2792.z = _RESERVED_IDENTIFIER_FIXUP_1734;
            float _RESERVED_IDENTIFIER_FIXUP_1739 = (_RESERVED_IDENTIFIER_FIXUP_1720 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2792.w = _RESERVED_IDENTIFIER_FIXUP_1739;
            _RESERVED_IDENTIFIER_FIXUP_2792.y = (_RESERVED_IDENTIFIER_FIXUP_1734 * _RESERVED_IDENTIFIER_FIXUP_1739) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3375 = _RESERVED_IDENTIFIER_FIXUP_2819;
            _RESERVED_IDENTIFIER_FIXUP_3373 = _RESERVED_IDENTIFIER_FIXUP_2792;
        }
        _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_3375;
        _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_3373;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1754 = min(_RESERVED_IDENTIFIER_FIXUP_3372.y, _RESERVED_IDENTIFIER_FIXUP_3372.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2984 = _RESERVED_IDENTIFIER_FIXUP_3374;
    _RESERVED_IDENTIFIER_FIXUP_2984.x = _RESERVED_IDENTIFIER_FIXUP_1754;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2987 = _RESERVED_IDENTIFIER_FIXUP_3372;
    _RESERVED_IDENTIFIER_FIXUP_2987.x = (_RESERVED_IDENTIFIER_FIXUP_1754 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1765 = _RESERVED_IDENTIFIER_FIXUP_1121.xyz * _RESERVED_IDENTIFIER_FIXUP_2987.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2989 = _RESERVED_IDENTIFIER_FIXUP_1121;
    _RESERVED_IDENTIFIER_FIXUP_2989.x = _RESERVED_IDENTIFIER_FIXUP_1765.x;
    _RESERVED_IDENTIFIER_FIXUP_2989.y = _RESERVED_IDENTIFIER_FIXUP_1765.y;
    _RESERVED_IDENTIFIER_FIXUP_2989.z = _RESERVED_IDENTIFIER_FIXUP_1765.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1776 = _RESERVED_IDENTIFIER_FIXUP_2989.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3367).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2995 = _RESERVED_IDENTIFIER_FIXUP_2989;
    _RESERVED_IDENTIFIER_FIXUP_2995.x = _RESERVED_IDENTIFIER_FIXUP_1776.x;
    _RESERVED_IDENTIFIER_FIXUP_2995.y = _RESERVED_IDENTIFIER_FIXUP_1776.y;
    _RESERVED_IDENTIFIER_FIXUP_2995.z = _RESERVED_IDENTIFIER_FIXUP_1776.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1787 = _RESERVED_IDENTIFIER_FIXUP_2995.xyz + _RESERVED_IDENTIFIER_FIXUP_2995.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3001 = _RESERVED_IDENTIFIER_FIXUP_2995;
    _RESERVED_IDENTIFIER_FIXUP_3001.x = _RESERVED_IDENTIFIER_FIXUP_1787.x;
    _RESERVED_IDENTIFIER_FIXUP_3001.y = _RESERVED_IDENTIFIER_FIXUP_1787.y;
    _RESERVED_IDENTIFIER_FIXUP_3001.z = _RESERVED_IDENTIFIER_FIXUP_1787.z;
    _RESERVED_IDENTIFIER_FIXUP_2987.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2987.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2987.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1812 = (_RESERVED_IDENTIFIER_FIXUP_2987.xyz * _RESERVED_IDENTIFIER_FIXUP_2984.xxx) + _RESERVED_IDENTIFIER_FIXUP_3001.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3013 = _RESERVED_IDENTIFIER_FIXUP_3001;
    _RESERVED_IDENTIFIER_FIXUP_3013.x = _RESERVED_IDENTIFIER_FIXUP_1812.x;
    _RESERVED_IDENTIFIER_FIXUP_3013.y = _RESERVED_IDENTIFIER_FIXUP_1812.y;
    _RESERVED_IDENTIFIER_FIXUP_3013.z = _RESERVED_IDENTIFIER_FIXUP_1812.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1825 = _RESERVED_IDENTIFIER_FIXUP_3013.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3019 = _RESERVED_IDENTIFIER_FIXUP_3013;
    _RESERVED_IDENTIFIER_FIXUP_3019.x = _RESERVED_IDENTIFIER_FIXUP_1825.x;
    _RESERVED_IDENTIFIER_FIXUP_3019.y = _RESERVED_IDENTIFIER_FIXUP_1825.y;
    _RESERVED_IDENTIFIER_FIXUP_3019.z = _RESERVED_IDENTIFIER_FIXUP_1825.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1880 = OptTex0( texcoord0.xyz);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1884 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1888 = hdTex2(param_45);
    vec2 param_46 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1892 = hdTex3(param_46);
    vec2 param_47 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1896 = hdTex4(param_47);
    float _RESERVED_IDENTIFIER_FIXUP_1900 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1896.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3033 = _RESERVED_IDENTIFIER_FIXUP_1896;
    _RESERVED_IDENTIFIER_FIXUP_3033.w = _RESERVED_IDENTIFIER_FIXUP_1900;
    float _RESERVED_IDENTIFIER_FIXUP_1905 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1900;
    _RESERVED_IDENTIFIER_FIXUP_3033.w = _RESERVED_IDENTIFIER_FIXUP_1905;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1910 = _RESERVED_IDENTIFIER_FIXUP_1884 * _RESERVED_IDENTIFIER_FIXUP_3033.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1928 = (_RESERVED_IDENTIFIER_FIXUP_1892 * _RESERVED_IDENTIFIER_FIXUP_3033.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1888 * _RESERVED_IDENTIFIER_FIXUP_3033.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1880 * _RESERVED_IDENTIFIER_FIXUP_3033.wwww) + _RESERVED_IDENTIFIER_FIXUP_1910));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3040 = _RESERVED_IDENTIFIER_FIXUP_1910;
    _RESERVED_IDENTIFIER_FIXUP_3040.x = _RESERVED_IDENTIFIER_FIXUP_1128;
    float _RESERVED_IDENTIFIER_FIXUP_1941 = clamp((_RESERVED_IDENTIFIER_FIXUP_1128 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3040.x = _RESERVED_IDENTIFIER_FIXUP_1941;
    float _RESERVED_IDENTIFIER_FIXUP_1947 = ((-_RESERVED_IDENTIFIER_FIXUP_1941) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1947;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3382;
    if (_RESERVED_IDENTIFIER_FIXUP_1947 != (-_RESERVED_IDENTIFIER_FIXUP_1947))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1959 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1969 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1971 = _RESERVED_IDENTIFIER_FIXUP_1969.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3053 = _RESERVED_IDENTIFIER_FIXUP_3040;
        _RESERVED_IDENTIFIER_FIXUP_3053.y = _RESERVED_IDENTIFIER_FIXUP_1971;
        _RESERVED_IDENTIFIER_FIXUP_3053.z = _RESERVED_IDENTIFIER_FIXUP_1969.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1979 = _RESERVED_IDENTIFIER_FIXUP_3053.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3057;
        _RESERVED_IDENTIFIER_FIXUP_3057.x = _RESERVED_IDENTIFIER_FIXUP_1979.x;
        _RESERVED_IDENTIFIER_FIXUP_3057.y = _RESERVED_IDENTIFIER_FIXUP_1979.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1986 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1990 = _RESERVED_IDENTIFIER_FIXUP_1986.y;
        _RESERVED_IDENTIFIER_FIXUP_3057.w = _RESERVED_IDENTIFIER_FIXUP_1990;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_1959.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1959.w;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3057.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1990;
        float _RESERVED_IDENTIFIER_FIXUP_2001 = hdLod5(param_48, param_49).x + hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3399 = vec4(_RESERVED_IDENTIFIER_FIXUP_1941, _RESERVED_IDENTIFIER_FIXUP_1971, _RESERVED_IDENTIFIER_FIXUP_1969.y, _RESERVED_IDENTIFIER_FIXUP_2001);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2008 = _RESERVED_IDENTIFIER_FIXUP_3399.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3070;
        _RESERVED_IDENTIFIER_FIXUP_3070.x = _RESERVED_IDENTIFIER_FIXUP_2008.x;
        _RESERVED_IDENTIFIER_FIXUP_3070.y = _RESERVED_IDENTIFIER_FIXUP_2008.y;
        _RESERVED_IDENTIFIER_FIXUP_3070.w = _RESERVED_IDENTIFIER_FIXUP_1990;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3070.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1990;
        float _RESERVED_IDENTIFIER_FIXUP_2030 = _RESERVED_IDENTIFIER_FIXUP_2001 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3399.w = _RESERVED_IDENTIFIER_FIXUP_2030;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2037 = _RESERVED_IDENTIFIER_FIXUP_3399.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3083;
        _RESERVED_IDENTIFIER_FIXUP_3083.x = _RESERVED_IDENTIFIER_FIXUP_2037.x;
        _RESERVED_IDENTIFIER_FIXUP_3083.y = _RESERVED_IDENTIFIER_FIXUP_2037.y;
        _RESERVED_IDENTIFIER_FIXUP_3083.w = _RESERVED_IDENTIFIER_FIXUP_1990;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3083.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_1990;
        float _RESERVED_IDENTIFIER_FIXUP_2059 = _RESERVED_IDENTIFIER_FIXUP_2030 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3399.w = _RESERVED_IDENTIFIER_FIXUP_2059;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2066 = _RESERVED_IDENTIFIER_FIXUP_3399.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3096;
        _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_2066.x;
        _RESERVED_IDENTIFIER_FIXUP_3096.y = _RESERVED_IDENTIFIER_FIXUP_2066.y;
        _RESERVED_IDENTIFIER_FIXUP_3096.w = _RESERVED_IDENTIFIER_FIXUP_1990;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3096.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_1990;
        float _RESERVED_IDENTIFIER_FIXUP_2088 = _RESERVED_IDENTIFIER_FIXUP_2059 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2088;
        float _RESERVED_IDENTIFIER_FIXUP_2093 = (_RESERVED_IDENTIFIER_FIXUP_2088 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2093;
        _RESERVED_IDENTIFIER_FIXUP_3399.x = (_RESERVED_IDENTIFIER_FIXUP_1941 * _RESERVED_IDENTIFIER_FIXUP_2093) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3382 = _RESERVED_IDENTIFIER_FIXUP_3399;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3050 = _RESERVED_IDENTIFIER_FIXUP_3040;
        _RESERVED_IDENTIFIER_FIXUP_3050.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3382 = _RESERVED_IDENTIFIER_FIXUP_3050;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3118 = _RESERVED_IDENTIFIER_FIXUP_3382;
    _RESERVED_IDENTIFIER_FIXUP_3118.y = _RESERVED_IDENTIFIER_FIXUP_1304;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3387;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3385;
    if (_RESERVED_IDENTIFIER_FIXUP_1304 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2120 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2130 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3258 = _RESERVED_IDENTIFIER_FIXUP_3118;
        _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_2130.x;
        _RESERVED_IDENTIFIER_FIXUP_3258.z = _RESERVED_IDENTIFIER_FIXUP_2130.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2140 = _RESERVED_IDENTIFIER_FIXUP_3258.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3262;
        _RESERVED_IDENTIFIER_FIXUP_3262.x = _RESERVED_IDENTIFIER_FIXUP_2140.x;
        _RESERVED_IDENTIFIER_FIXUP_3262.y = _RESERVED_IDENTIFIER_FIXUP_2140.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2147 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2151 = _RESERVED_IDENTIFIER_FIXUP_2147.y;
        _RESERVED_IDENTIFIER_FIXUP_3262.w = _RESERVED_IDENTIFIER_FIXUP_2151;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2120.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2120.w;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3262.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2151;
        float _RESERVED_IDENTIFIER_FIXUP_2162 = hdLod6(param_58, param_59).x + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3258.w = _RESERVED_IDENTIFIER_FIXUP_2162;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2169 = _RESERVED_IDENTIFIER_FIXUP_3258.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3275;
        _RESERVED_IDENTIFIER_FIXUP_3275.x = _RESERVED_IDENTIFIER_FIXUP_2169.x;
        _RESERVED_IDENTIFIER_FIXUP_3275.y = _RESERVED_IDENTIFIER_FIXUP_2169.y;
        _RESERVED_IDENTIFIER_FIXUP_3275.w = _RESERVED_IDENTIFIER_FIXUP_2151;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3275.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2151;
        float _RESERVED_IDENTIFIER_FIXUP_2191 = _RESERVED_IDENTIFIER_FIXUP_2162 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3258.w = _RESERVED_IDENTIFIER_FIXUP_2191;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2198 = _RESERVED_IDENTIFIER_FIXUP_3258.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3288;
        _RESERVED_IDENTIFIER_FIXUP_3288.x = _RESERVED_IDENTIFIER_FIXUP_2198.x;
        _RESERVED_IDENTIFIER_FIXUP_3288.y = _RESERVED_IDENTIFIER_FIXUP_2198.y;
        _RESERVED_IDENTIFIER_FIXUP_3288.w = _RESERVED_IDENTIFIER_FIXUP_2151;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3288.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2151;
        float _RESERVED_IDENTIFIER_FIXUP_2220 = _RESERVED_IDENTIFIER_FIXUP_2191 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3258.w = _RESERVED_IDENTIFIER_FIXUP_2220;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2227 = _RESERVED_IDENTIFIER_FIXUP_3258.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3301;
        _RESERVED_IDENTIFIER_FIXUP_3301.x = _RESERVED_IDENTIFIER_FIXUP_2227.x;
        _RESERVED_IDENTIFIER_FIXUP_3301.y = _RESERVED_IDENTIFIER_FIXUP_2227.y;
        _RESERVED_IDENTIFIER_FIXUP_3301.w = _RESERVED_IDENTIFIER_FIXUP_2151;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3301.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2151;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2244 = hdLod6(param_66, param_67);
        float _RESERVED_IDENTIFIER_FIXUP_2249 = _RESERVED_IDENTIFIER_FIXUP_2220 + _RESERVED_IDENTIFIER_FIXUP_2244.x;
        _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_2249;
        _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_2249 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3387 = _RESERVED_IDENTIFIER_FIXUP_2244;
        _RESERVED_IDENTIFIER_FIXUP_3385 = _RESERVED_IDENTIFIER_FIXUP_3258;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2262 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3123 = _RESERVED_IDENTIFIER_FIXUP_3118;
        _RESERVED_IDENTIFIER_FIXUP_3123.z = _RESERVED_IDENTIFIER_FIXUP_2262;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3388;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3386;
        if (_RESERVED_IDENTIFIER_FIXUP_2262 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2271 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2271.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2271.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2277 = hdLod7(param_68, param_69);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2281 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3198 = _RESERVED_IDENTIFIER_FIXUP_3123;
            _RESERVED_IDENTIFIER_FIXUP_3198.z = _RESERVED_IDENTIFIER_FIXUP_2281.x;
            _RESERVED_IDENTIFIER_FIXUP_3198.w = _RESERVED_IDENTIFIER_FIXUP_2281.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2291 = _RESERVED_IDENTIFIER_FIXUP_3198.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3202;
            _RESERVED_IDENTIFIER_FIXUP_3202.x = _RESERVED_IDENTIFIER_FIXUP_2291.x;
            _RESERVED_IDENTIFIER_FIXUP_3202.y = _RESERVED_IDENTIFIER_FIXUP_2291.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2298 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2302 = _RESERVED_IDENTIFIER_FIXUP_2298.y;
            _RESERVED_IDENTIFIER_FIXUP_3202.w = _RESERVED_IDENTIFIER_FIXUP_2302;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3202.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2302;
            float _RESERVED_IDENTIFIER_FIXUP_2313 = _RESERVED_IDENTIFIER_FIXUP_2277.x + hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3213 = _RESERVED_IDENTIFIER_FIXUP_2277;
            _RESERVED_IDENTIFIER_FIXUP_3213.x = _RESERVED_IDENTIFIER_FIXUP_2313;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2320 = _RESERVED_IDENTIFIER_FIXUP_3198.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3215;
            _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_2320.x;
            _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_2320.y;
            _RESERVED_IDENTIFIER_FIXUP_3215.w = _RESERVED_IDENTIFIER_FIXUP_2302;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3215.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2302;
            float _RESERVED_IDENTIFIER_FIXUP_2342 = _RESERVED_IDENTIFIER_FIXUP_2313 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3213.x = _RESERVED_IDENTIFIER_FIXUP_2342;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2349 = _RESERVED_IDENTIFIER_FIXUP_3198.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
            _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_2349.x;
            _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_2349.y;
            _RESERVED_IDENTIFIER_FIXUP_3228.w = _RESERVED_IDENTIFIER_FIXUP_2302;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3228.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2302;
            float _RESERVED_IDENTIFIER_FIXUP_2371 = _RESERVED_IDENTIFIER_FIXUP_2342 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3213.x = _RESERVED_IDENTIFIER_FIXUP_2371;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2378 = _RESERVED_IDENTIFIER_FIXUP_3198.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3241;
            _RESERVED_IDENTIFIER_FIXUP_3241.x = _RESERVED_IDENTIFIER_FIXUP_2378.x;
            _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_2378.y;
            _RESERVED_IDENTIFIER_FIXUP_3241.w = _RESERVED_IDENTIFIER_FIXUP_2302;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3241.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2302;
            float _RESERVED_IDENTIFIER_FIXUP_2400 = _RESERVED_IDENTIFIER_FIXUP_2371 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3198.z = _RESERVED_IDENTIFIER_FIXUP_2400;
            _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_2400 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3388 = _RESERVED_IDENTIFIER_FIXUP_3213;
            _RESERVED_IDENTIFIER_FIXUP_3386 = _RESERVED_IDENTIFIER_FIXUP_3198;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3127 = _RESERVED_IDENTIFIER_FIXUP_3123;
            _RESERVED_IDENTIFIER_FIXUP_3127.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3127.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2416 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2420 = _RESERVED_IDENTIFIER_FIXUP_2416.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3400 = vec4(_RESERVED_IDENTIFIER_FIXUP_2416.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2420);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2431 = _RESERVED_IDENTIFIER_FIXUP_3400.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3401 = vec4(_RESERVED_IDENTIFIER_FIXUP_2431 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1905);
            _RESERVED_IDENTIFIER_FIXUP_3401.w = _RESERVED_IDENTIFIER_FIXUP_2420;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2431;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2420;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3401.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2420;
            float _RESERVED_IDENTIFIER_FIXUP_2461 = hdLod8(param_78, param_79).x + hdLod8(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3154 = _RESERVED_IDENTIFIER_FIXUP_3400;
            _RESERVED_IDENTIFIER_FIXUP_3154.z = _RESERVED_IDENTIFIER_FIXUP_2461;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2468 = _RESERVED_IDENTIFIER_FIXUP_3154.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3156 = _RESERVED_IDENTIFIER_FIXUP_3401;
            _RESERVED_IDENTIFIER_FIXUP_3156.x = _RESERVED_IDENTIFIER_FIXUP_2468.x;
            _RESERVED_IDENTIFIER_FIXUP_3156.y = _RESERVED_IDENTIFIER_FIXUP_2468.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3156.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2420;
            float _RESERVED_IDENTIFIER_FIXUP_2483 = _RESERVED_IDENTIFIER_FIXUP_2461 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3154.z = _RESERVED_IDENTIFIER_FIXUP_2483;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2490 = _RESERVED_IDENTIFIER_FIXUP_3154.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3165 = _RESERVED_IDENTIFIER_FIXUP_3156;
            _RESERVED_IDENTIFIER_FIXUP_3165.x = _RESERVED_IDENTIFIER_FIXUP_2490.x;
            _RESERVED_IDENTIFIER_FIXUP_3165.y = _RESERVED_IDENTIFIER_FIXUP_2490.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3165.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2420;
            float _RESERVED_IDENTIFIER_FIXUP_2505 = _RESERVED_IDENTIFIER_FIXUP_2483 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3154.z = _RESERVED_IDENTIFIER_FIXUP_2505;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2512 = _RESERVED_IDENTIFIER_FIXUP_3154.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3174 = _RESERVED_IDENTIFIER_FIXUP_3165;
            _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_2512.x;
            _RESERVED_IDENTIFIER_FIXUP_3174.y = _RESERVED_IDENTIFIER_FIXUP_2512.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3174.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2420;
            float _RESERVED_IDENTIFIER_FIXUP_2527 = _RESERVED_IDENTIFIER_FIXUP_2505 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3154.x = _RESERVED_IDENTIFIER_FIXUP_2527;
            float _RESERVED_IDENTIFIER_FIXUP_2535 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_2535;
            float _RESERVED_IDENTIFIER_FIXUP_2541 = clamp((_RESERVED_IDENTIFIER_FIXUP_2535 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3127.z = _RESERVED_IDENTIFIER_FIXUP_2541;
            float _RESERVED_IDENTIFIER_FIXUP_2546 = (_RESERVED_IDENTIFIER_FIXUP_2527 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3127.w = _RESERVED_IDENTIFIER_FIXUP_2546;
            _RESERVED_IDENTIFIER_FIXUP_3127.y = (_RESERVED_IDENTIFIER_FIXUP_2541 * _RESERVED_IDENTIFIER_FIXUP_2546) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3388 = _RESERVED_IDENTIFIER_FIXUP_3154;
            _RESERVED_IDENTIFIER_FIXUP_3386 = _RESERVED_IDENTIFIER_FIXUP_3127;
        }
        _RESERVED_IDENTIFIER_FIXUP_3387 = _RESERVED_IDENTIFIER_FIXUP_3388;
        _RESERVED_IDENTIFIER_FIXUP_3385 = _RESERVED_IDENTIFIER_FIXUP_3386;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2561 = min(_RESERVED_IDENTIFIER_FIXUP_3385.y, _RESERVED_IDENTIFIER_FIXUP_3385.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3319 = _RESERVED_IDENTIFIER_FIXUP_3387;
    _RESERVED_IDENTIFIER_FIXUP_3319.x = _RESERVED_IDENTIFIER_FIXUP_2561;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3322 = _RESERVED_IDENTIFIER_FIXUP_3385;
    _RESERVED_IDENTIFIER_FIXUP_3322.x = (_RESERVED_IDENTIFIER_FIXUP_2561 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2572 = _RESERVED_IDENTIFIER_FIXUP_1928.xyz * _RESERVED_IDENTIFIER_FIXUP_3322.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_1928;
    _RESERVED_IDENTIFIER_FIXUP_3324.x = _RESERVED_IDENTIFIER_FIXUP_2572.x;
    _RESERVED_IDENTIFIER_FIXUP_3324.y = _RESERVED_IDENTIFIER_FIXUP_2572.y;
    _RESERVED_IDENTIFIER_FIXUP_3324.z = _RESERVED_IDENTIFIER_FIXUP_2572.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2583 = _RESERVED_IDENTIFIER_FIXUP_3324.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3330 = _RESERVED_IDENTIFIER_FIXUP_3324;
    _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_2583.x;
    _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2583.y;
    _RESERVED_IDENTIFIER_FIXUP_3330.z = _RESERVED_IDENTIFIER_FIXUP_2583.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_3330.xyz + _RESERVED_IDENTIFIER_FIXUP_3330.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3336 = _RESERVED_IDENTIFIER_FIXUP_3330;
    _RESERVED_IDENTIFIER_FIXUP_3336.x = _RESERVED_IDENTIFIER_FIXUP_2594.x;
    _RESERVED_IDENTIFIER_FIXUP_3336.y = _RESERVED_IDENTIFIER_FIXUP_2594.y;
    _RESERVED_IDENTIFIER_FIXUP_3336.z = _RESERVED_IDENTIFIER_FIXUP_2594.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2605 = _RESERVED_IDENTIFIER_FIXUP_3336.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3322.x = _RESERVED_IDENTIFIER_FIXUP_2605.x;
    _RESERVED_IDENTIFIER_FIXUP_3322.y = _RESERVED_IDENTIFIER_FIXUP_2605.y;
    _RESERVED_IDENTIFIER_FIXUP_3322.z = _RESERVED_IDENTIFIER_FIXUP_2605.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2619 = (_RESERVED_IDENTIFIER_FIXUP_3322.xyz * _RESERVED_IDENTIFIER_FIXUP_3319.xxx) + _RESERVED_IDENTIFIER_FIXUP_3336.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3348 = _RESERVED_IDENTIFIER_FIXUP_3336;
    _RESERVED_IDENTIFIER_FIXUP_3348.x = _RESERVED_IDENTIFIER_FIXUP_2619.x;
    _RESERVED_IDENTIFIER_FIXUP_3348.y = _RESERVED_IDENTIFIER_FIXUP_2619.y;
    _RESERVED_IDENTIFIER_FIXUP_3348.z = _RESERVED_IDENTIFIER_FIXUP_2619.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2632 = _RESERVED_IDENTIFIER_FIXUP_3348.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3354 = _RESERVED_IDENTIFIER_FIXUP_3348;
    _RESERVED_IDENTIFIER_FIXUP_3354.x = _RESERVED_IDENTIFIER_FIXUP_2632.x;
    _RESERVED_IDENTIFIER_FIXUP_3354.y = _RESERVED_IDENTIFIER_FIXUP_2632.y;
    _RESERVED_IDENTIFIER_FIXUP_3354.z = _RESERVED_IDENTIFIER_FIXUP_2632.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3354.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_932 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_941;
    if (_RESERVED_IDENTIFIER_FIXUP_932)
    {
        _RESERVED_IDENTIFIER_FIXUP_941 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_941 = _RESERVED_IDENTIFIER_FIXUP_932;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_941)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_978 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3019.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1005 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2691;
    if (_RESERVED_IDENTIFIER_FIXUP_978 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2691 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_978), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1005);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2691 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1005);
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
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB170 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB170.x;
        r1.z = hdB170.y;
        vec2 hdB192 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB192.x;
        r3.y = hdB192.y;
        vec2 hdB200 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB200.x;
        r3.w = hdB200.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r1.w = r2.x + r3.x;
        vec2 hdB223 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB223.x;
        r2.y = hdB223.y;
        vec2 hdB230 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB230.x;
        r2.w = hdB230.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB253 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB253.x;
        r2.y = hdB253.y;
        vec2 hdB260 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB260.x;
        r2.w = hdB260.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB283 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB283.x;
        r2.y = hdB283.y;
        vec2 hdB290 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB290.x;
        r2.w = hdB290.y;
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
        vec2 hdB350 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB350.x;
        r1.z = hdB350.y;
        vec2 hdB360 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB360.x;
        r3.y = hdB360.y;
        vec2 hdB367 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB367.x;
        r3.w = hdB367.y;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r1.w = r2.x + r3.x;
        vec2 hdB389 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB389.x;
        r2.y = hdB389.y;
        vec2 hdB396 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB396.x;
        r2.w = hdB396.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod6(param_18, param_19);
        r1.w += r2.x;
        vec2 hdB418 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB418.x;
        r2.y = hdB418.y;
        vec2 hdB425 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB425.x;
        r2.w = hdB425.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod6(param_20, param_21);
        r1.w += r2.x;
        vec2 hdB447 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB447.x;
        r2.y = hdB447.y;
        vec2 hdB454 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB454.x;
        r2.w = hdB454.y;
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
            vec2 hdB503 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB503.x;
            r1.w = hdB503.y;
            vec2 hdB513 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB513.x;
            r3.y = hdB513.y;
            vec2 hdB520 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB520.x;
            r3.w = hdB520.y;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r2.x += r3.x;
            vec2 hdB542 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB542.x;
            r3.y = hdB542.y;
            vec2 hdB549 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB549.x;
            r3.w = hdB549.y;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r2.x += r3.x;
            vec2 hdB571 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB571.x;
            r3.y = hdB571.y;
            vec2 hdB578 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB578.x;
            r3.w = hdB578.y;
            vec2 param_30 = r3.xy;
            float param_31 = r3.w;
            r3 = hdLod7(param_30, param_31);
            r2.x += r3.x;
            vec2 hdB600 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB600.x;
            r3.y = hdB600.y;
            vec2 hdB607 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB607.x;
            r3.w = hdB607.y;
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
            vec2 hdB639 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB639.x;
            r2.w = hdB639.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_34 = r2.xy;
            float param_35 = r2.w;
            r3 = hdLod8(param_34, param_35);
            vec2 hdB664 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB664.x;
            r4.y = hdB664.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r5 = hdLod8(param_36, param_37);
            r2.z = r3.x + r5.x;
            vec2 hdB692 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB692.x;
            r4.y = hdB692.y;
            vec2 param_38 = r4.xy;
            float param_39 = r4.w;
            r3 = hdLod8(param_38, param_39);
            r2.z += r3.x;
            vec2 hdB714 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB714.x;
            r4.y = hdB714.y;
            vec2 param_40 = r4.xy;
            float param_41 = r4.w;
            r3 = hdLod8(param_40, param_41);
            r2.z += r3.x;
            vec2 hdB736 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB736.x;
            r4.y = hdB736.y;
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
    vec4 hdB794 = r0;
    vec3 hdB798 = hdB794.xyz * r1.xxx;
    r0.x = hdB798.x;
    r0.y = hdB798.y;
    r0.z = hdB798.z;
    vec4 hdB805 = r0;
    vec3 hdB809 = hdB805.xyz * v0.xyz;
    r0.x = hdB809.x;
    r0.y = hdB809.y;
    r0.z = hdB809.z;
    vec4 hdB816 = r0;
    vec4 hdB818 = r0;
    vec3 hdB820 = hdB816.xyz + hdB818.xyz;
    r0.x = hdB820.x;
    r0.y = hdB820.y;
    r0.z = hdB820.z;
    vec3 hdB831 = r0.www * v1.xyz;
    r1.x = hdB831.x;
    r1.y = hdB831.y;
    r1.z = hdB831.z;
    vec4 hdB843 = r0;
    vec3 hdB845 = (r1.xyz * r2.xxx) + hdB843.xyz;
    r0.x = hdB845.x;
    r0.y = hdB845.y;
    r0.z = hdB845.z;
    vec4 hdB852 = r0;
    vec3 hdB859 = hdB852.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB859.x;
    r0.y = hdB859.y;
    r0.z = hdB859.z;
    vec3 hdB874 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB874.x;
    oC0.y = hdB874.y;
    oC0.z = hdB874.z;
    oC0.w = 1.0;
    bool hdB887 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB895;
    if (hdB887)
    {
        hdB895 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB895 = hdB887;
    }
    if (hdB895)
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
    bool _3244 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3254;
    if (_3244)
    {
        _3254 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3254 = _3244;
    }
    if (_3254)
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
        bool _3279 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3294;
        if (!_3279)
        {
            _3294 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3294 = _3279;
        }
        if (_3294)
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
