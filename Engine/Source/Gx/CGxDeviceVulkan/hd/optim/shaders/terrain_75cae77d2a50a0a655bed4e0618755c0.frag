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
float _RESERVED_IDENTIFIER_FIXUP_3518;
vec4 _RESERVED_IDENTIFIER_FIXUP_3519;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1102 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1106 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1110 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1114 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1118 = hdTex4(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_1122 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1118.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2781 = _RESERVED_IDENTIFIER_FIXUP_1118;
    _RESERVED_IDENTIFIER_FIXUP_2781.w = _RESERVED_IDENTIFIER_FIXUP_1122;
    _RESERVED_IDENTIFIER_FIXUP_2781.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1122;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1132 = _RESERVED_IDENTIFIER_FIXUP_1106 * _RESERVED_IDENTIFIER_FIXUP_2781.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1150 = (_RESERVED_IDENTIFIER_FIXUP_1114 * _RESERVED_IDENTIFIER_FIXUP_2781.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1110 * _RESERVED_IDENTIFIER_FIXUP_2781.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1102 * _RESERVED_IDENTIFIER_FIXUP_2781.wwww) + _RESERVED_IDENTIFIER_FIXUP_1132));
    float _RESERVED_IDENTIFIER_FIXUP_1157 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2788 = _RESERVED_IDENTIFIER_FIXUP_1132;
    _RESERVED_IDENTIFIER_FIXUP_2788.x = _RESERVED_IDENTIFIER_FIXUP_1157;
    float _RESERVED_IDENTIFIER_FIXUP_1163 = clamp((_RESERVED_IDENTIFIER_FIXUP_1157 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2788.x = _RESERVED_IDENTIFIER_FIXUP_1163;
    float _RESERVED_IDENTIFIER_FIXUP_1169 = ((-_RESERVED_IDENTIFIER_FIXUP_1163) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2788.y = _RESERVED_IDENTIFIER_FIXUP_1169;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3521;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3520;
    if (_RESERVED_IDENTIFIER_FIXUP_1169 != (-_RESERVED_IDENTIFIER_FIXUP_1169))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1181 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2800 = _RESERVED_IDENTIFIER_FIXUP_2788;
        _RESERVED_IDENTIFIER_FIXUP_2800.y = _RESERVED_IDENTIFIER_FIXUP_1181.x;
        _RESERVED_IDENTIFIER_FIXUP_2800.z = _RESERVED_IDENTIFIER_FIXUP_1181.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1191 = _RESERVED_IDENTIFIER_FIXUP_2800.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2804;
        _RESERVED_IDENTIFIER_FIXUP_2804.x = _RESERVED_IDENTIFIER_FIXUP_1191.x;
        _RESERVED_IDENTIFIER_FIXUP_2804.y = _RESERVED_IDENTIFIER_FIXUP_1191.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1201 = _RESERVED_IDENTIFIER_FIXUP_2800.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2808;
        _RESERVED_IDENTIFIER_FIXUP_2808.x = _RESERVED_IDENTIFIER_FIXUP_1201.x;
        _RESERVED_IDENTIFIER_FIXUP_2808.y = _RESERVED_IDENTIFIER_FIXUP_1201.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1211 = _RESERVED_IDENTIFIER_FIXUP_2800.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2812;
        _RESERVED_IDENTIFIER_FIXUP_2812.x = _RESERVED_IDENTIFIER_FIXUP_1211.x;
        _RESERVED_IDENTIFIER_FIXUP_2812.y = _RESERVED_IDENTIFIER_FIXUP_1211.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1221 = _RESERVED_IDENTIFIER_FIXUP_2800.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2816;
        _RESERVED_IDENTIFIER_FIXUP_2816.x = _RESERVED_IDENTIFIER_FIXUP_1221.x;
        _RESERVED_IDENTIFIER_FIXUP_2816.y = _RESERVED_IDENTIFIER_FIXUP_1221.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1229 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1229.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1229.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1235 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_2804.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2808.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2812.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2816.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2804.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1235.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2808.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1235.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2812.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1235.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1292 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1235 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_2816.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1298 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2800.y = _RESERVED_IDENTIFIER_FIXUP_1298;
        float _RESERVED_IDENTIFIER_FIXUP_1303 = float(_RESERVED_IDENTIFIER_FIXUP_1298 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2800.y = _RESERVED_IDENTIFIER_FIXUP_1303;
        float _RESERVED_IDENTIFIER_FIXUP_1306 = dot(_RESERVED_IDENTIFIER_FIXUP_1292, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2800.z = _RESERVED_IDENTIFIER_FIXUP_1306;
        float _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1303 + _RESERVED_IDENTIFIER_FIXUP_1306;
        _RESERVED_IDENTIFIER_FIXUP_2800.y = _RESERVED_IDENTIFIER_FIXUP_1312;
        float _RESERVED_IDENTIFIER_FIXUP_1317 = (_RESERVED_IDENTIFIER_FIXUP_1312 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2800.y = _RESERVED_IDENTIFIER_FIXUP_1317;
        _RESERVED_IDENTIFIER_FIXUP_2800.x = (_RESERVED_IDENTIFIER_FIXUP_1163 * _RESERVED_IDENTIFIER_FIXUP_1317) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3521 = _RESERVED_IDENTIFIER_FIXUP_1292;
        _RESERVED_IDENTIFIER_FIXUP_3520 = _RESERVED_IDENTIFIER_FIXUP_2800;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2798 = _RESERVED_IDENTIFIER_FIXUP_2788;
        _RESERVED_IDENTIFIER_FIXUP_2798.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3521 = _RESERVED_IDENTIFIER_FIXUP_1110;
        _RESERVED_IDENTIFIER_FIXUP_3520 = _RESERVED_IDENTIFIER_FIXUP_2798;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1335 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2872 = _RESERVED_IDENTIFIER_FIXUP_3520;
    _RESERVED_IDENTIFIER_FIXUP_2872.y = _RESERVED_IDENTIFIER_FIXUP_1335;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3524;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3522;
    if (_RESERVED_IDENTIFIER_FIXUP_1335 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1344 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3033 = _RESERVED_IDENTIFIER_FIXUP_2872;
        _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1344.x;
        _RESERVED_IDENTIFIER_FIXUP_3033.z = _RESERVED_IDENTIFIER_FIXUP_1344.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_3033.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3037;
        _RESERVED_IDENTIFIER_FIXUP_3037.x = _RESERVED_IDENTIFIER_FIXUP_1354.x;
        _RESERVED_IDENTIFIER_FIXUP_3037.y = _RESERVED_IDENTIFIER_FIXUP_1354.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_3033.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3041;
        _RESERVED_IDENTIFIER_FIXUP_3041.x = _RESERVED_IDENTIFIER_FIXUP_1364.x;
        _RESERVED_IDENTIFIER_FIXUP_3041.y = _RESERVED_IDENTIFIER_FIXUP_1364.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1374 = _RESERVED_IDENTIFIER_FIXUP_3033.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3045;
        _RESERVED_IDENTIFIER_FIXUP_3045.x = _RESERVED_IDENTIFIER_FIXUP_1374.x;
        _RESERVED_IDENTIFIER_FIXUP_3045.y = _RESERVED_IDENTIFIER_FIXUP_1374.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_3033.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3049;
        _RESERVED_IDENTIFIER_FIXUP_3049.x = _RESERVED_IDENTIFIER_FIXUP_1384.x;
        _RESERVED_IDENTIFIER_FIXUP_3049.y = _RESERVED_IDENTIFIER_FIXUP_1384.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1392 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1392.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1392.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1398 = hdLod6(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_3037.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3041.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3045.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3049.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3037.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1398.y = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3041.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1398.z = hdLod6(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3045.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1398.w = hdLod6(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1455 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1398 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3049.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1461 = hdLod6(param_22, param_23).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1461;
        float _RESERVED_IDENTIFIER_FIXUP_1466 = float(_RESERVED_IDENTIFIER_FIXUP_1461 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1466;
        float _RESERVED_IDENTIFIER_FIXUP_1469 = dot(_RESERVED_IDENTIFIER_FIXUP_1455, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3033.z = _RESERVED_IDENTIFIER_FIXUP_1469;
        float _RESERVED_IDENTIFIER_FIXUP_1475 = _RESERVED_IDENTIFIER_FIXUP_1466 + _RESERVED_IDENTIFIER_FIXUP_1469;
        _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1475;
        _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1475 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3524 = _RESERVED_IDENTIFIER_FIXUP_1455;
        _RESERVED_IDENTIFIER_FIXUP_3522 = _RESERVED_IDENTIFIER_FIXUP_3033;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1488 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2877 = _RESERVED_IDENTIFIER_FIXUP_2872;
        _RESERVED_IDENTIFIER_FIXUP_2877.z = _RESERVED_IDENTIFIER_FIXUP_1488;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3525;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3523;
        if (_RESERVED_IDENTIFIER_FIXUP_1488 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1497 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2967 = _RESERVED_IDENTIFIER_FIXUP_2877;
            _RESERVED_IDENTIFIER_FIXUP_2967.z = _RESERVED_IDENTIFIER_FIXUP_1497.x;
            _RESERVED_IDENTIFIER_FIXUP_2967.w = _RESERVED_IDENTIFIER_FIXUP_1497.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_2967.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2971;
            _RESERVED_IDENTIFIER_FIXUP_2971.x = _RESERVED_IDENTIFIER_FIXUP_1507.x;
            _RESERVED_IDENTIFIER_FIXUP_2971.y = _RESERVED_IDENTIFIER_FIXUP_1507.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_2967.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2975;
            _RESERVED_IDENTIFIER_FIXUP_2975.x = _RESERVED_IDENTIFIER_FIXUP_1517.x;
            _RESERVED_IDENTIFIER_FIXUP_2975.y = _RESERVED_IDENTIFIER_FIXUP_1517.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_2967.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2979;
            _RESERVED_IDENTIFIER_FIXUP_2979.x = _RESERVED_IDENTIFIER_FIXUP_1527.x;
            _RESERVED_IDENTIFIER_FIXUP_2979.y = _RESERVED_IDENTIFIER_FIXUP_1527.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1537 = _RESERVED_IDENTIFIER_FIXUP_2967.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2983;
            _RESERVED_IDENTIFIER_FIXUP_2983.x = _RESERVED_IDENTIFIER_FIXUP_1537.x;
            _RESERVED_IDENTIFIER_FIXUP_2983.y = _RESERVED_IDENTIFIER_FIXUP_1537.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1545 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1545.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1545.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1551 = hdLod7(param_24, param_25);
            _RESERVED_IDENTIFIER_FIXUP_2971.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2975.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2979.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2983.w = 0.0;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2971.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1551.y = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2975.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1551.z = hdLod7(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2979.xy;
            float param_31 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1551.w = hdLod7(param_30, param_31).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1608 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1551 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2983.xy;
            float param_33 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1614 = hdLod7(param_32, param_33).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2967.z = _RESERVED_IDENTIFIER_FIXUP_1614;
            float _RESERVED_IDENTIFIER_FIXUP_1619 = float(_RESERVED_IDENTIFIER_FIXUP_1614 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2967.z = _RESERVED_IDENTIFIER_FIXUP_1619;
            float _RESERVED_IDENTIFIER_FIXUP_1622 = dot(_RESERVED_IDENTIFIER_FIXUP_1608, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2967.w = _RESERVED_IDENTIFIER_FIXUP_1622;
            float _RESERVED_IDENTIFIER_FIXUP_1628 = _RESERVED_IDENTIFIER_FIXUP_1619 + _RESERVED_IDENTIFIER_FIXUP_1622;
            _RESERVED_IDENTIFIER_FIXUP_2967.z = _RESERVED_IDENTIFIER_FIXUP_1628;
            _RESERVED_IDENTIFIER_FIXUP_2967.y = _RESERVED_IDENTIFIER_FIXUP_1628 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3525 = _RESERVED_IDENTIFIER_FIXUP_1608;
            _RESERVED_IDENTIFIER_FIXUP_3523 = _RESERVED_IDENTIFIER_FIXUP_2967;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2881 = _RESERVED_IDENTIFIER_FIXUP_3521;
            _RESERVED_IDENTIFIER_FIXUP_2881.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2881.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1644 = (_RESERVED_IDENTIFIER_FIXUP_2881.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2886;
            _RESERVED_IDENTIFIER_FIXUP_2886.x = _RESERVED_IDENTIFIER_FIXUP_1644.x;
            _RESERVED_IDENTIFIER_FIXUP_2886.y = _RESERVED_IDENTIFIER_FIXUP_1644.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1654 = _RESERVED_IDENTIFIER_FIXUP_2886.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2890;
            _RESERVED_IDENTIFIER_FIXUP_2890.x = _RESERVED_IDENTIFIER_FIXUP_1654.x;
            _RESERVED_IDENTIFIER_FIXUP_2890.y = _RESERVED_IDENTIFIER_FIXUP_1654.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1664 = _RESERVED_IDENTIFIER_FIXUP_2886.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2894;
            _RESERVED_IDENTIFIER_FIXUP_2894.x = _RESERVED_IDENTIFIER_FIXUP_1664.x;
            _RESERVED_IDENTIFIER_FIXUP_2894.y = _RESERVED_IDENTIFIER_FIXUP_1664.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1674 = _RESERVED_IDENTIFIER_FIXUP_2886.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2898;
            _RESERVED_IDENTIFIER_FIXUP_2898.x = _RESERVED_IDENTIFIER_FIXUP_1674.x;
            _RESERVED_IDENTIFIER_FIXUP_2898.y = _RESERVED_IDENTIFIER_FIXUP_1674.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1684 = _RESERVED_IDENTIFIER_FIXUP_2886.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2902;
            _RESERVED_IDENTIFIER_FIXUP_2902.x = _RESERVED_IDENTIFIER_FIXUP_1684.x;
            _RESERVED_IDENTIFIER_FIXUP_2902.y = _RESERVED_IDENTIFIER_FIXUP_1684.y;
            _RESERVED_IDENTIFIER_FIXUP_2886.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_2886.xy;
            float param_35 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1698 = hdLod8(param_34, param_35);
            _RESERVED_IDENTIFIER_FIXUP_2890.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2894.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2898.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2902.w = 0.0;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2890.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1698.y = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2894.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1698.z = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2898.xy;
            float param_41 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1698.w = hdLod8(param_40, param_41).x;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_2902.xy;
            float param_43 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1761 = hdLod8(param_42, param_43).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2942 = _RESERVED_IDENTIFIER_FIXUP_2877;
            _RESERVED_IDENTIFIER_FIXUP_2942.z = _RESERVED_IDENTIFIER_FIXUP_1761;
            float _RESERVED_IDENTIFIER_FIXUP_1766 = float(_RESERVED_IDENTIFIER_FIXUP_1761 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2942.z = _RESERVED_IDENTIFIER_FIXUP_1766;
            float _RESERVED_IDENTIFIER_FIXUP_1769 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1698 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2942.w = _RESERVED_IDENTIFIER_FIXUP_1769;
            float _RESERVED_IDENTIFIER_FIXUP_1775 = _RESERVED_IDENTIFIER_FIXUP_1766 + _RESERVED_IDENTIFIER_FIXUP_1769;
            _RESERVED_IDENTIFIER_FIXUP_2942.z = _RESERVED_IDENTIFIER_FIXUP_1775;
            float _RESERVED_IDENTIFIER_FIXUP_1783 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2942.w = _RESERVED_IDENTIFIER_FIXUP_1783;
            float _RESERVED_IDENTIFIER_FIXUP_1789 = clamp((_RESERVED_IDENTIFIER_FIXUP_1783 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2942.w = _RESERVED_IDENTIFIER_FIXUP_1789;
            float _RESERVED_IDENTIFIER_FIXUP_1794 = (_RESERVED_IDENTIFIER_FIXUP_1775 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2942.z = _RESERVED_IDENTIFIER_FIXUP_1794;
            _RESERVED_IDENTIFIER_FIXUP_2942.y = (_RESERVED_IDENTIFIER_FIXUP_1789 * _RESERVED_IDENTIFIER_FIXUP_1794) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3525 = _RESERVED_IDENTIFIER_FIXUP_2881;
            _RESERVED_IDENTIFIER_FIXUP_3523 = _RESERVED_IDENTIFIER_FIXUP_2942;
        }
        _RESERVED_IDENTIFIER_FIXUP_3524 = _RESERVED_IDENTIFIER_FIXUP_3525;
        _RESERVED_IDENTIFIER_FIXUP_3522 = _RESERVED_IDENTIFIER_FIXUP_3523;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1809 = min(_RESERVED_IDENTIFIER_FIXUP_3522.y, _RESERVED_IDENTIFIER_FIXUP_3522.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3101 = _RESERVED_IDENTIFIER_FIXUP_3524;
    _RESERVED_IDENTIFIER_FIXUP_3101.x = _RESERVED_IDENTIFIER_FIXUP_1809;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3104 = _RESERVED_IDENTIFIER_FIXUP_3522;
    _RESERVED_IDENTIFIER_FIXUP_3104.x = (_RESERVED_IDENTIFIER_FIXUP_1809 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1820 = _RESERVED_IDENTIFIER_FIXUP_1150.xyz * _RESERVED_IDENTIFIER_FIXUP_3104.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3106 = _RESERVED_IDENTIFIER_FIXUP_1150;
    _RESERVED_IDENTIFIER_FIXUP_3106.x = _RESERVED_IDENTIFIER_FIXUP_1820.x;
    _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1820.y;
    _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_1820.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1831 = _RESERVED_IDENTIFIER_FIXUP_3106.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3518).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3112 = _RESERVED_IDENTIFIER_FIXUP_3106;
    _RESERVED_IDENTIFIER_FIXUP_3112.x = _RESERVED_IDENTIFIER_FIXUP_1831.x;
    _RESERVED_IDENTIFIER_FIXUP_3112.y = _RESERVED_IDENTIFIER_FIXUP_1831.y;
    _RESERVED_IDENTIFIER_FIXUP_3112.z = _RESERVED_IDENTIFIER_FIXUP_1831.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1842 = _RESERVED_IDENTIFIER_FIXUP_3112.xyz + _RESERVED_IDENTIFIER_FIXUP_3112.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3118 = _RESERVED_IDENTIFIER_FIXUP_3112;
    _RESERVED_IDENTIFIER_FIXUP_3118.x = _RESERVED_IDENTIFIER_FIXUP_1842.x;
    _RESERVED_IDENTIFIER_FIXUP_3118.y = _RESERVED_IDENTIFIER_FIXUP_1842.y;
    _RESERVED_IDENTIFIER_FIXUP_3118.z = _RESERVED_IDENTIFIER_FIXUP_1842.z;
    _RESERVED_IDENTIFIER_FIXUP_3104.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3104.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3104.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1867 = (_RESERVED_IDENTIFIER_FIXUP_3104.xyz * _RESERVED_IDENTIFIER_FIXUP_3101.xxx) + _RESERVED_IDENTIFIER_FIXUP_3118.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3130 = _RESERVED_IDENTIFIER_FIXUP_3118;
    _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1867.x;
    _RESERVED_IDENTIFIER_FIXUP_3130.y = _RESERVED_IDENTIFIER_FIXUP_1867.y;
    _RESERVED_IDENTIFIER_FIXUP_3130.z = _RESERVED_IDENTIFIER_FIXUP_1867.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1880 = _RESERVED_IDENTIFIER_FIXUP_3130.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3136 = _RESERVED_IDENTIFIER_FIXUP_3130;
    _RESERVED_IDENTIFIER_FIXUP_3136.x = _RESERVED_IDENTIFIER_FIXUP_1880.x;
    _RESERVED_IDENTIFIER_FIXUP_3136.y = _RESERVED_IDENTIFIER_FIXUP_1880.y;
    _RESERVED_IDENTIFIER_FIXUP_3136.z = _RESERVED_IDENTIFIER_FIXUP_1880.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1937 = OptTex0( texcoord0.xyz);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1941 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1945 = hdTex2(param_45);
    vec2 param_46 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1949 = hdTex3(param_46);
    vec2 param_47 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1953 = hdTex4(param_47);
    float _RESERVED_IDENTIFIER_FIXUP_1957 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1953.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3150 = _RESERVED_IDENTIFIER_FIXUP_1953;
    _RESERVED_IDENTIFIER_FIXUP_3150.w = _RESERVED_IDENTIFIER_FIXUP_1957;
    _RESERVED_IDENTIFIER_FIXUP_3150.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1957;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1967 = _RESERVED_IDENTIFIER_FIXUP_1941 * _RESERVED_IDENTIFIER_FIXUP_3150.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1985 = (_RESERVED_IDENTIFIER_FIXUP_1949 * _RESERVED_IDENTIFIER_FIXUP_3150.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1945 * _RESERVED_IDENTIFIER_FIXUP_3150.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1937 * _RESERVED_IDENTIFIER_FIXUP_3150.wwww) + _RESERVED_IDENTIFIER_FIXUP_1967));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3157 = _RESERVED_IDENTIFIER_FIXUP_1967;
    _RESERVED_IDENTIFIER_FIXUP_3157.x = _RESERVED_IDENTIFIER_FIXUP_1157;
    float _RESERVED_IDENTIFIER_FIXUP_1998 = clamp((_RESERVED_IDENTIFIER_FIXUP_1157 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3157.x = _RESERVED_IDENTIFIER_FIXUP_1998;
    float _RESERVED_IDENTIFIER_FIXUP_2004 = ((-_RESERVED_IDENTIFIER_FIXUP_1998) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3157.y = _RESERVED_IDENTIFIER_FIXUP_2004;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3533;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3532;
    if (_RESERVED_IDENTIFIER_FIXUP_2004 != (-_RESERVED_IDENTIFIER_FIXUP_2004))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2016 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3169 = _RESERVED_IDENTIFIER_FIXUP_3157;
        _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_2016.x;
        _RESERVED_IDENTIFIER_FIXUP_3169.z = _RESERVED_IDENTIFIER_FIXUP_2016.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2026 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3173;
        _RESERVED_IDENTIFIER_FIXUP_3173.x = _RESERVED_IDENTIFIER_FIXUP_2026.x;
        _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_2026.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2036 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3177;
        _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_2036.x;
        _RESERVED_IDENTIFIER_FIXUP_3177.y = _RESERVED_IDENTIFIER_FIXUP_2036.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2046 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3181;
        _RESERVED_IDENTIFIER_FIXUP_3181.x = _RESERVED_IDENTIFIER_FIXUP_2046.x;
        _RESERVED_IDENTIFIER_FIXUP_3181.y = _RESERVED_IDENTIFIER_FIXUP_2046.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2056 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3185;
        _RESERVED_IDENTIFIER_FIXUP_3185.x = _RESERVED_IDENTIFIER_FIXUP_2056.x;
        _RESERVED_IDENTIFIER_FIXUP_3185.y = _RESERVED_IDENTIFIER_FIXUP_2056.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2064 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2064.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2064.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2070 = hdLod5(param_48, param_49);
        _RESERVED_IDENTIFIER_FIXUP_3173.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3177.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3181.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3185.w = 0.0;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3173.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2070.y = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3177.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2070.z = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3181.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2070.w = hdLod5(param_54, param_55).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2127 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2070 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3185.xy;
        float param_57 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2133 = hdLod5(param_56, param_57).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_2133;
        float _RESERVED_IDENTIFIER_FIXUP_2138 = float(_RESERVED_IDENTIFIER_FIXUP_2133 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_2138;
        float _RESERVED_IDENTIFIER_FIXUP_2141 = dot(_RESERVED_IDENTIFIER_FIXUP_2127, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3169.z = _RESERVED_IDENTIFIER_FIXUP_2141;
        float _RESERVED_IDENTIFIER_FIXUP_2147 = _RESERVED_IDENTIFIER_FIXUP_2138 + _RESERVED_IDENTIFIER_FIXUP_2141;
        _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_2147;
        float _RESERVED_IDENTIFIER_FIXUP_2152 = (_RESERVED_IDENTIFIER_FIXUP_2147 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_2152;
        _RESERVED_IDENTIFIER_FIXUP_3169.x = (_RESERVED_IDENTIFIER_FIXUP_1998 * _RESERVED_IDENTIFIER_FIXUP_2152) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3533 = _RESERVED_IDENTIFIER_FIXUP_2127;
        _RESERVED_IDENTIFIER_FIXUP_3532 = _RESERVED_IDENTIFIER_FIXUP_3169;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3167 = _RESERVED_IDENTIFIER_FIXUP_3157;
        _RESERVED_IDENTIFIER_FIXUP_3167.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3533 = _RESERVED_IDENTIFIER_FIXUP_1945;
        _RESERVED_IDENTIFIER_FIXUP_3532 = _RESERVED_IDENTIFIER_FIXUP_3167;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3241 = _RESERVED_IDENTIFIER_FIXUP_3532;
    _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_1335;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3536;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3534;
    if (_RESERVED_IDENTIFIER_FIXUP_1335 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2179 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_3241;
        _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2179.x;
        _RESERVED_IDENTIFIER_FIXUP_3402.z = _RESERVED_IDENTIFIER_FIXUP_2179.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2189 = _RESERVED_IDENTIFIER_FIXUP_3402.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3406;
        _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_2189.x;
        _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_2189.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2199 = _RESERVED_IDENTIFIER_FIXUP_3402.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3410;
        _RESERVED_IDENTIFIER_FIXUP_3410.x = _RESERVED_IDENTIFIER_FIXUP_2199.x;
        _RESERVED_IDENTIFIER_FIXUP_3410.y = _RESERVED_IDENTIFIER_FIXUP_2199.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2209 = _RESERVED_IDENTIFIER_FIXUP_3402.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3414;
        _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_2209.x;
        _RESERVED_IDENTIFIER_FIXUP_3414.y = _RESERVED_IDENTIFIER_FIXUP_2209.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2219 = _RESERVED_IDENTIFIER_FIXUP_3402.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3418;
        _RESERVED_IDENTIFIER_FIXUP_3418.x = _RESERVED_IDENTIFIER_FIXUP_2219.x;
        _RESERVED_IDENTIFIER_FIXUP_3418.y = _RESERVED_IDENTIFIER_FIXUP_2219.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2227 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2227.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2227.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2233 = hdLod6(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3406.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3410.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3414.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3418.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3406.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2233.y = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3410.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2233.z = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3414.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2233.w = hdLod6(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2290 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2233 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3418.xy;
        float param_67 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2296 = hdLod6(param_66, param_67).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2296;
        float _RESERVED_IDENTIFIER_FIXUP_2301 = float(_RESERVED_IDENTIFIER_FIXUP_2296 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2301;
        float _RESERVED_IDENTIFIER_FIXUP_2304 = dot(_RESERVED_IDENTIFIER_FIXUP_2290, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3402.z = _RESERVED_IDENTIFIER_FIXUP_2304;
        float _RESERVED_IDENTIFIER_FIXUP_2310 = _RESERVED_IDENTIFIER_FIXUP_2301 + _RESERVED_IDENTIFIER_FIXUP_2304;
        _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2310;
        _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2310 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3536 = _RESERVED_IDENTIFIER_FIXUP_2290;
        _RESERVED_IDENTIFIER_FIXUP_3534 = _RESERVED_IDENTIFIER_FIXUP_3402;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2323 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3246 = _RESERVED_IDENTIFIER_FIXUP_3241;
        _RESERVED_IDENTIFIER_FIXUP_3246.z = _RESERVED_IDENTIFIER_FIXUP_2323;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3537;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3535;
        if (_RESERVED_IDENTIFIER_FIXUP_2323 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2332 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3336 = _RESERVED_IDENTIFIER_FIXUP_3246;
            _RESERVED_IDENTIFIER_FIXUP_3336.z = _RESERVED_IDENTIFIER_FIXUP_2332.x;
            _RESERVED_IDENTIFIER_FIXUP_3336.w = _RESERVED_IDENTIFIER_FIXUP_2332.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2342 = _RESERVED_IDENTIFIER_FIXUP_3336.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3340;
            _RESERVED_IDENTIFIER_FIXUP_3340.x = _RESERVED_IDENTIFIER_FIXUP_2342.x;
            _RESERVED_IDENTIFIER_FIXUP_3340.y = _RESERVED_IDENTIFIER_FIXUP_2342.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2352 = _RESERVED_IDENTIFIER_FIXUP_3336.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3344;
            _RESERVED_IDENTIFIER_FIXUP_3344.x = _RESERVED_IDENTIFIER_FIXUP_2352.x;
            _RESERVED_IDENTIFIER_FIXUP_3344.y = _RESERVED_IDENTIFIER_FIXUP_2352.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2362 = _RESERVED_IDENTIFIER_FIXUP_3336.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3348;
            _RESERVED_IDENTIFIER_FIXUP_3348.x = _RESERVED_IDENTIFIER_FIXUP_2362.x;
            _RESERVED_IDENTIFIER_FIXUP_3348.y = _RESERVED_IDENTIFIER_FIXUP_2362.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2372 = _RESERVED_IDENTIFIER_FIXUP_3336.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3352;
            _RESERVED_IDENTIFIER_FIXUP_3352.x = _RESERVED_IDENTIFIER_FIXUP_2372.x;
            _RESERVED_IDENTIFIER_FIXUP_3352.y = _RESERVED_IDENTIFIER_FIXUP_2372.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2380 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2380.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2380.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2386 = hdLod7(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3340.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3344.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3348.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3352.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3340.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2386.y = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3344.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2386.z = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3348.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2386.w = hdLod7(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2443 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2386 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3352.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2449 = hdLod7(param_76, param_77).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3336.z = _RESERVED_IDENTIFIER_FIXUP_2449;
            float _RESERVED_IDENTIFIER_FIXUP_2454 = float(_RESERVED_IDENTIFIER_FIXUP_2449 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3336.z = _RESERVED_IDENTIFIER_FIXUP_2454;
            float _RESERVED_IDENTIFIER_FIXUP_2457 = dot(_RESERVED_IDENTIFIER_FIXUP_2443, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3336.w = _RESERVED_IDENTIFIER_FIXUP_2457;
            float _RESERVED_IDENTIFIER_FIXUP_2463 = _RESERVED_IDENTIFIER_FIXUP_2454 + _RESERVED_IDENTIFIER_FIXUP_2457;
            _RESERVED_IDENTIFIER_FIXUP_3336.z = _RESERVED_IDENTIFIER_FIXUP_2463;
            _RESERVED_IDENTIFIER_FIXUP_3336.y = _RESERVED_IDENTIFIER_FIXUP_2463 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3537 = _RESERVED_IDENTIFIER_FIXUP_2443;
            _RESERVED_IDENTIFIER_FIXUP_3535 = _RESERVED_IDENTIFIER_FIXUP_3336;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3250 = _RESERVED_IDENTIFIER_FIXUP_3533;
            _RESERVED_IDENTIFIER_FIXUP_3250.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3250.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2479 = (_RESERVED_IDENTIFIER_FIXUP_3250.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3255;
            _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_2479.x;
            _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_2479.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2489 = _RESERVED_IDENTIFIER_FIXUP_3255.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3259;
            _RESERVED_IDENTIFIER_FIXUP_3259.x = _RESERVED_IDENTIFIER_FIXUP_2489.x;
            _RESERVED_IDENTIFIER_FIXUP_3259.y = _RESERVED_IDENTIFIER_FIXUP_2489.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2499 = _RESERVED_IDENTIFIER_FIXUP_3255.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3263;
            _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_2499.x;
            _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_2499.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2509 = _RESERVED_IDENTIFIER_FIXUP_3255.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3267;
            _RESERVED_IDENTIFIER_FIXUP_3267.x = _RESERVED_IDENTIFIER_FIXUP_2509.x;
            _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_2509.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2519 = _RESERVED_IDENTIFIER_FIXUP_3255.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3271;
            _RESERVED_IDENTIFIER_FIXUP_3271.x = _RESERVED_IDENTIFIER_FIXUP_2519.x;
            _RESERVED_IDENTIFIER_FIXUP_3271.y = _RESERVED_IDENTIFIER_FIXUP_2519.y;
            _RESERVED_IDENTIFIER_FIXUP_3255.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3255.xy;
            float param_79 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2533 = hdLod8(param_78, param_79);
            _RESERVED_IDENTIFIER_FIXUP_3259.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3263.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3267.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3271.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3259.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2533.y = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3263.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2533.z = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3267.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2533.w = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3271.xy;
            float param_87 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2596 = hdLod8(param_86, param_87).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3311 = _RESERVED_IDENTIFIER_FIXUP_3246;
            _RESERVED_IDENTIFIER_FIXUP_3311.z = _RESERVED_IDENTIFIER_FIXUP_2596;
            float _RESERVED_IDENTIFIER_FIXUP_2601 = float(_RESERVED_IDENTIFIER_FIXUP_2596 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3311.z = _RESERVED_IDENTIFIER_FIXUP_2601;
            float _RESERVED_IDENTIFIER_FIXUP_2604 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2533 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3311.w = _RESERVED_IDENTIFIER_FIXUP_2604;
            float _RESERVED_IDENTIFIER_FIXUP_2610 = _RESERVED_IDENTIFIER_FIXUP_2601 + _RESERVED_IDENTIFIER_FIXUP_2604;
            _RESERVED_IDENTIFIER_FIXUP_3311.z = _RESERVED_IDENTIFIER_FIXUP_2610;
            float _RESERVED_IDENTIFIER_FIXUP_2618 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3311.w = _RESERVED_IDENTIFIER_FIXUP_2618;
            float _RESERVED_IDENTIFIER_FIXUP_2624 = clamp((_RESERVED_IDENTIFIER_FIXUP_2618 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3311.w = _RESERVED_IDENTIFIER_FIXUP_2624;
            float _RESERVED_IDENTIFIER_FIXUP_2629 = (_RESERVED_IDENTIFIER_FIXUP_2610 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3311.z = _RESERVED_IDENTIFIER_FIXUP_2629;
            _RESERVED_IDENTIFIER_FIXUP_3311.y = (_RESERVED_IDENTIFIER_FIXUP_2624 * _RESERVED_IDENTIFIER_FIXUP_2629) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3537 = _RESERVED_IDENTIFIER_FIXUP_3250;
            _RESERVED_IDENTIFIER_FIXUP_3535 = _RESERVED_IDENTIFIER_FIXUP_3311;
        }
        _RESERVED_IDENTIFIER_FIXUP_3536 = _RESERVED_IDENTIFIER_FIXUP_3537;
        _RESERVED_IDENTIFIER_FIXUP_3534 = _RESERVED_IDENTIFIER_FIXUP_3535;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2644 = min(_RESERVED_IDENTIFIER_FIXUP_3534.y, _RESERVED_IDENTIFIER_FIXUP_3534.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3470 = _RESERVED_IDENTIFIER_FIXUP_3536;
    _RESERVED_IDENTIFIER_FIXUP_3470.x = _RESERVED_IDENTIFIER_FIXUP_2644;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3473 = _RESERVED_IDENTIFIER_FIXUP_3534;
    _RESERVED_IDENTIFIER_FIXUP_3473.x = (_RESERVED_IDENTIFIER_FIXUP_2644 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2655 = _RESERVED_IDENTIFIER_FIXUP_1985.xyz * _RESERVED_IDENTIFIER_FIXUP_3473.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3475 = _RESERVED_IDENTIFIER_FIXUP_1985;
    _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_2655.x;
    _RESERVED_IDENTIFIER_FIXUP_3475.y = _RESERVED_IDENTIFIER_FIXUP_2655.y;
    _RESERVED_IDENTIFIER_FIXUP_3475.z = _RESERVED_IDENTIFIER_FIXUP_2655.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2666 = _RESERVED_IDENTIFIER_FIXUP_3475.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3481 = _RESERVED_IDENTIFIER_FIXUP_3475;
    _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2666.x;
    _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2666.y;
    _RESERVED_IDENTIFIER_FIXUP_3481.z = _RESERVED_IDENTIFIER_FIXUP_2666.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2677 = _RESERVED_IDENTIFIER_FIXUP_3481.xyz + _RESERVED_IDENTIFIER_FIXUP_3481.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3487 = _RESERVED_IDENTIFIER_FIXUP_3481;
    _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_2677.x;
    _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2677.y;
    _RESERVED_IDENTIFIER_FIXUP_3487.z = _RESERVED_IDENTIFIER_FIXUP_2677.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2688 = _RESERVED_IDENTIFIER_FIXUP_3487.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3473.x = _RESERVED_IDENTIFIER_FIXUP_2688.x;
    _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2688.y;
    _RESERVED_IDENTIFIER_FIXUP_3473.z = _RESERVED_IDENTIFIER_FIXUP_2688.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2702 = (_RESERVED_IDENTIFIER_FIXUP_3473.xyz * _RESERVED_IDENTIFIER_FIXUP_3470.xxx) + _RESERVED_IDENTIFIER_FIXUP_3487.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3499 = _RESERVED_IDENTIFIER_FIXUP_3487;
    _RESERVED_IDENTIFIER_FIXUP_3499.x = _RESERVED_IDENTIFIER_FIXUP_2702.x;
    _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_2702.y;
    _RESERVED_IDENTIFIER_FIXUP_3499.z = _RESERVED_IDENTIFIER_FIXUP_2702.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2715 = _RESERVED_IDENTIFIER_FIXUP_3499.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3505 = _RESERVED_IDENTIFIER_FIXUP_3499;
    _RESERVED_IDENTIFIER_FIXUP_3505.x = _RESERVED_IDENTIFIER_FIXUP_2715.x;
    _RESERVED_IDENTIFIER_FIXUP_3505.y = _RESERVED_IDENTIFIER_FIXUP_2715.y;
    _RESERVED_IDENTIFIER_FIXUP_3505.z = _RESERVED_IDENTIFIER_FIXUP_2715.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3505.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_960 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_969;
    if (_RESERVED_IDENTIFIER_FIXUP_960)
    {
        _RESERVED_IDENTIFIER_FIXUP_969 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_969 = _RESERVED_IDENTIFIER_FIXUP_960;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_969)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1006 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3136.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1033 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2774;
    if (_RESERVED_IDENTIFIER_FIXUP_1006 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2774 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1006), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1033);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2774 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1033);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2774;
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
        vec2 hdB159 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB159.x;
        r1.z = hdB159.y;
        vec2 hdB181 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB181.x;
        r2.y = hdB181.y;
        vec2 hdB192 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB192.x;
        r3.y = hdB192.y;
        vec2 hdB203 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB203.x;
        r4.y = hdB203.y;
        vec2 hdB214 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB214.x;
        r5.y = hdB214.y;
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
        vec2 hdB344 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB344.x;
        r1.z = hdB344.y;
        vec2 hdB354 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB354.x;
        r2.y = hdB354.y;
        vec2 hdB364 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB364.x;
        r3.y = hdB364.y;
        vec2 hdB374 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB374.x;
        r4.y = hdB374.y;
        vec2 hdB384 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB384.x;
        r5.y = hdB384.y;
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
            vec2 hdB499 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB499.x;
            r1.w = hdB499.y;
            vec2 hdB509 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB509.x;
            r2.y = hdB509.y;
            vec2 hdB519 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB519.x;
            r3.y = hdB519.y;
            vec2 hdB529 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB529.x;
            r4.y = hdB529.y;
            vec2 hdB539 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB539.x;
            r5.y = hdB539.y;
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
            vec2 hdB647 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB647.x;
            r3.y = hdB647.y;
            vec2 hdB657 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB657.x;
            r4.y = hdB657.y;
            vec2 hdB667 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB667.x;
            r5.y = hdB667.y;
            vec2 hdB677 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB677.x;
            r6.y = hdB677.y;
            vec2 hdB687 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB687.x;
            r7.y = hdB687.y;
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
    vec4 hdB822 = r0;
    vec3 hdB826 = hdB822.xyz * r1.xxx;
    r0.x = hdB826.x;
    r0.y = hdB826.y;
    r0.z = hdB826.z;
    vec4 hdB833 = r0;
    vec3 hdB837 = hdB833.xyz * v0.xyz;
    r0.x = hdB837.x;
    r0.y = hdB837.y;
    r0.z = hdB837.z;
    vec4 hdB844 = r0;
    vec4 hdB846 = r0;
    vec3 hdB848 = hdB844.xyz + hdB846.xyz;
    r0.x = hdB848.x;
    r0.y = hdB848.y;
    r0.z = hdB848.z;
    vec3 hdB859 = r0.www * v1.xyz;
    r1.x = hdB859.x;
    r1.y = hdB859.y;
    r1.z = hdB859.z;
    vec4 hdB871 = r0;
    vec3 hdB873 = (r1.xyz * r2.xxx) + hdB871.xyz;
    r0.x = hdB873.x;
    r0.y = hdB873.y;
    r0.z = hdB873.z;
    vec4 hdB880 = r0;
    vec3 hdB887 = hdB880.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB887.x;
    r0.y = hdB887.y;
    r0.z = hdB887.z;
    vec3 hdB902 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB902.x;
    oC0.y = hdB902.y;
    oC0.z = hdB902.z;
    oC0.w = 1.0;
    bool hdB915 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB923;
    if (hdB915)
    {
        hdB923 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB923 = hdB915;
    }
    if (hdB923)
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
    bool _3171 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3181;
    if (_3171)
    {
        _3181 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3181 = _3171;
    }
    if (_3181)
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
        bool _3206 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3221;
        if (!_3206)
        {
            _3221 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3221 = _3206;
        }
        if (_3221)
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
