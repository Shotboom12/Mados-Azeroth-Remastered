#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3298;
vec4 _RESERVED_IDENTIFIER_FIXUP_3299;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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
    bool _58 = hdOverride >= 0;
    bool _77;
    if (_58)
    {
        _77 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _77 = _58;
    }
    vec4 _78;
    if (_77)
    {
        _78 = vec4(float(hdOverride));
    }
    else
    {
        _78 = value;
    }
    return _78;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _95 = hdOverride >= 0;
    bool _105;
    if (_95)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _105 = _95;
    }
    vec4 _106;
    if (_105)
    {
        _106 = vec4(float(hdOverride));
    }
    else
    {
        _106 = value;
    }
    return _106;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _124 = hdOverride >= 0;
    bool _134;
    if (_124)
    {
        _134 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _134 = _124;
    }
    vec4 _135;
    if (_134)
    {
        _135 = vec4(float(hdOverride));
    }
    else
    {
        _135 = value;
    }
    return _135;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _153 = hdOverride >= 0;
    bool _163;
    if (_153)
    {
        _163 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _163 = _153;
    }
    vec4 _164;
    if (_163)
    {
        _164 = vec4(float(hdOverride));
    }
    else
    {
        _164 = value;
    }
    return _164;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _182 = hdOverride >= 0;
    bool _192;
    if (_182)
    {
        _192 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _192 = _182;
    }
    vec4 _193;
    if (_192)
    {
        _193 = vec4(float(hdOverride));
    }
    else
    {
        _193 = value;
    }
    return _193;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _211 = hdOverride >= 0;
    bool _221;
    if (_211)
    {
        _221 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _221 = _211;
    }
    vec4 _222;
    if (_221)
    {
        _222 = vec4(float(hdOverride));
    }
    else
    {
        _222 = value;
    }
    return _222;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1046 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1050 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1054 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1058 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1054.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2629 = _RESERVED_IDENTIFIER_FIXUP_1054;
    _RESERVED_IDENTIFIER_FIXUP_2629.y = _RESERVED_IDENTIFIER_FIXUP_1058;
    _RESERVED_IDENTIFIER_FIXUP_2629.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1058;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1068 = _RESERVED_IDENTIFIER_FIXUP_1050 * _RESERVED_IDENTIFIER_FIXUP_2629.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1074 = (_RESERVED_IDENTIFIER_FIXUP_1046 * _RESERVED_IDENTIFIER_FIXUP_2629.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1068;
    float _RESERVED_IDENTIFIER_FIXUP_1081 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2636 = _RESERVED_IDENTIFIER_FIXUP_1068;
    _RESERVED_IDENTIFIER_FIXUP_2636.x = _RESERVED_IDENTIFIER_FIXUP_1081;
    float _RESERVED_IDENTIFIER_FIXUP_1087 = clamp((_RESERVED_IDENTIFIER_FIXUP_1081 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2636.x = _RESERVED_IDENTIFIER_FIXUP_1087;
    float _RESERVED_IDENTIFIER_FIXUP_1093 = ((-_RESERVED_IDENTIFIER_FIXUP_1087) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2636.y = _RESERVED_IDENTIFIER_FIXUP_1093;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3300;
    if (_RESERVED_IDENTIFIER_FIXUP_1093 != (-_RESERVED_IDENTIFIER_FIXUP_1093))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1105 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1115 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1115.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2649 = _RESERVED_IDENTIFIER_FIXUP_2636;
        _RESERVED_IDENTIFIER_FIXUP_2649.y = _RESERVED_IDENTIFIER_FIXUP_1117;
        _RESERVED_IDENTIFIER_FIXUP_2649.z = _RESERVED_IDENTIFIER_FIXUP_1115.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1125 = _RESERVED_IDENTIFIER_FIXUP_2649.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2653;
        _RESERVED_IDENTIFIER_FIXUP_2653.x = _RESERVED_IDENTIFIER_FIXUP_1125.x;
        _RESERVED_IDENTIFIER_FIXUP_2653.y = _RESERVED_IDENTIFIER_FIXUP_1125.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1132 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1136 = _RESERVED_IDENTIFIER_FIXUP_1132.y;
        _RESERVED_IDENTIFIER_FIXUP_2653.w = _RESERVED_IDENTIFIER_FIXUP_1136;
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1105.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1105.w;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_2653.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1136;
        float _RESERVED_IDENTIFIER_FIXUP_1147 = hdLod5(param_2, param_3).x + hdLod5(param_4, param_5).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3326 = vec4(_RESERVED_IDENTIFIER_FIXUP_1087, _RESERVED_IDENTIFIER_FIXUP_1117, _RESERVED_IDENTIFIER_FIXUP_1115.y, _RESERVED_IDENTIFIER_FIXUP_1147);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_3326.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2666;
        _RESERVED_IDENTIFIER_FIXUP_2666.x = _RESERVED_IDENTIFIER_FIXUP_1154.x;
        _RESERVED_IDENTIFIER_FIXUP_2666.y = _RESERVED_IDENTIFIER_FIXUP_1154.y;
        _RESERVED_IDENTIFIER_FIXUP_2666.w = _RESERVED_IDENTIFIER_FIXUP_1136;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2666.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1136;
        float _RESERVED_IDENTIFIER_FIXUP_1176 = _RESERVED_IDENTIFIER_FIXUP_1147 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3326.w = _RESERVED_IDENTIFIER_FIXUP_1176;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_3326.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2679;
        _RESERVED_IDENTIFIER_FIXUP_2679.x = _RESERVED_IDENTIFIER_FIXUP_1183.x;
        _RESERVED_IDENTIFIER_FIXUP_2679.y = _RESERVED_IDENTIFIER_FIXUP_1183.y;
        _RESERVED_IDENTIFIER_FIXUP_2679.w = _RESERVED_IDENTIFIER_FIXUP_1136;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2679.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1136;
        float _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1176 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3326.w = _RESERVED_IDENTIFIER_FIXUP_1205;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1212 = _RESERVED_IDENTIFIER_FIXUP_3326.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2692;
        _RESERVED_IDENTIFIER_FIXUP_2692.x = _RESERVED_IDENTIFIER_FIXUP_1212.x;
        _RESERVED_IDENTIFIER_FIXUP_2692.y = _RESERVED_IDENTIFIER_FIXUP_1212.y;
        _RESERVED_IDENTIFIER_FIXUP_2692.w = _RESERVED_IDENTIFIER_FIXUP_1136;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2692.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1136;
        float _RESERVED_IDENTIFIER_FIXUP_1234 = _RESERVED_IDENTIFIER_FIXUP_1205 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3326.y = _RESERVED_IDENTIFIER_FIXUP_1234;
        float _RESERVED_IDENTIFIER_FIXUP_1239 = (_RESERVED_IDENTIFIER_FIXUP_1234 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3326.y = _RESERVED_IDENTIFIER_FIXUP_1239;
        _RESERVED_IDENTIFIER_FIXUP_3326.x = (_RESERVED_IDENTIFIER_FIXUP_1087 * _RESERVED_IDENTIFIER_FIXUP_1239) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3300 = _RESERVED_IDENTIFIER_FIXUP_3326;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2646 = _RESERVED_IDENTIFIER_FIXUP_2636;
        _RESERVED_IDENTIFIER_FIXUP_2646.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3300 = _RESERVED_IDENTIFIER_FIXUP_2646;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1257 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2714 = _RESERVED_IDENTIFIER_FIXUP_3300;
    _RESERVED_IDENTIFIER_FIXUP_2714.y = _RESERVED_IDENTIFIER_FIXUP_1257;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3305;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3303;
    if (_RESERVED_IDENTIFIER_FIXUP_1257 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1266 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1276 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2854 = _RESERVED_IDENTIFIER_FIXUP_2714;
        _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1276.x;
        _RESERVED_IDENTIFIER_FIXUP_2854.z = _RESERVED_IDENTIFIER_FIXUP_1276.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_2854.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2858;
        _RESERVED_IDENTIFIER_FIXUP_2858.x = _RESERVED_IDENTIFIER_FIXUP_1286.x;
        _RESERVED_IDENTIFIER_FIXUP_2858.y = _RESERVED_IDENTIFIER_FIXUP_1286.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1293 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_1293.y;
        _RESERVED_IDENTIFIER_FIXUP_2858.w = _RESERVED_IDENTIFIER_FIXUP_1297;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1266.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1266.w;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_2858.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1297;
        float _RESERVED_IDENTIFIER_FIXUP_1308 = hdLod6(param_12, param_13).x + hdLod6(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_2854.w = _RESERVED_IDENTIFIER_FIXUP_1308;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_2854.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2871;
        _RESERVED_IDENTIFIER_FIXUP_2871.x = _RESERVED_IDENTIFIER_FIXUP_1315.x;
        _RESERVED_IDENTIFIER_FIXUP_2871.y = _RESERVED_IDENTIFIER_FIXUP_1315.y;
        _RESERVED_IDENTIFIER_FIXUP_2871.w = _RESERVED_IDENTIFIER_FIXUP_1297;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2871.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1297;
        float _RESERVED_IDENTIFIER_FIXUP_1337 = _RESERVED_IDENTIFIER_FIXUP_1308 + hdLod6(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_2854.w = _RESERVED_IDENTIFIER_FIXUP_1337;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_2854.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2884;
        _RESERVED_IDENTIFIER_FIXUP_2884.x = _RESERVED_IDENTIFIER_FIXUP_1344.x;
        _RESERVED_IDENTIFIER_FIXUP_2884.y = _RESERVED_IDENTIFIER_FIXUP_1344.y;
        _RESERVED_IDENTIFIER_FIXUP_2884.w = _RESERVED_IDENTIFIER_FIXUP_1297;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2884.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1297;
        float _RESERVED_IDENTIFIER_FIXUP_1366 = _RESERVED_IDENTIFIER_FIXUP_1337 + hdLod6(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_2854.w = _RESERVED_IDENTIFIER_FIXUP_1366;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1373 = _RESERVED_IDENTIFIER_FIXUP_2854.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2897;
        _RESERVED_IDENTIFIER_FIXUP_2897.x = _RESERVED_IDENTIFIER_FIXUP_1373.x;
        _RESERVED_IDENTIFIER_FIXUP_2897.y = _RESERVED_IDENTIFIER_FIXUP_1373.y;
        _RESERVED_IDENTIFIER_FIXUP_2897.w = _RESERVED_IDENTIFIER_FIXUP_1297;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2897.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1297;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1390 = hdLod6(param_20, param_21);
        float _RESERVED_IDENTIFIER_FIXUP_1395 = _RESERVED_IDENTIFIER_FIXUP_1366 + _RESERVED_IDENTIFIER_FIXUP_1390.x;
        _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1395;
        _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1395 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_1390;
        _RESERVED_IDENTIFIER_FIXUP_3303 = _RESERVED_IDENTIFIER_FIXUP_2854;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1408 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2719 = _RESERVED_IDENTIFIER_FIXUP_2714;
        _RESERVED_IDENTIFIER_FIXUP_2719.z = _RESERVED_IDENTIFIER_FIXUP_1408;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3306;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3304;
        if (_RESERVED_IDENTIFIER_FIXUP_1408 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1417 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1417.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1417.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1423 = hdLod7(param_22, param_23);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1427 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2794 = _RESERVED_IDENTIFIER_FIXUP_2719;
            _RESERVED_IDENTIFIER_FIXUP_2794.z = _RESERVED_IDENTIFIER_FIXUP_1427.x;
            _RESERVED_IDENTIFIER_FIXUP_2794.w = _RESERVED_IDENTIFIER_FIXUP_1427.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1437 = _RESERVED_IDENTIFIER_FIXUP_2794.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2798;
            _RESERVED_IDENTIFIER_FIXUP_2798.x = _RESERVED_IDENTIFIER_FIXUP_1437.x;
            _RESERVED_IDENTIFIER_FIXUP_2798.y = _RESERVED_IDENTIFIER_FIXUP_1437.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1444 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_1444.y;
            _RESERVED_IDENTIFIER_FIXUP_2798.w = _RESERVED_IDENTIFIER_FIXUP_1448;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_2798.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1448;
            float _RESERVED_IDENTIFIER_FIXUP_1459 = _RESERVED_IDENTIFIER_FIXUP_1423.x + hdLod7(param_24, param_25).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2809 = _RESERVED_IDENTIFIER_FIXUP_1423;
            _RESERVED_IDENTIFIER_FIXUP_2809.x = _RESERVED_IDENTIFIER_FIXUP_1459;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1466 = _RESERVED_IDENTIFIER_FIXUP_2794.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2811;
            _RESERVED_IDENTIFIER_FIXUP_2811.x = _RESERVED_IDENTIFIER_FIXUP_1466.x;
            _RESERVED_IDENTIFIER_FIXUP_2811.y = _RESERVED_IDENTIFIER_FIXUP_1466.y;
            _RESERVED_IDENTIFIER_FIXUP_2811.w = _RESERVED_IDENTIFIER_FIXUP_1448;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2811.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1448;
            float _RESERVED_IDENTIFIER_FIXUP_1488 = _RESERVED_IDENTIFIER_FIXUP_1459 + hdLod7(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_2809.x = _RESERVED_IDENTIFIER_FIXUP_1488;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_2794.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2824;
            _RESERVED_IDENTIFIER_FIXUP_2824.x = _RESERVED_IDENTIFIER_FIXUP_1495.x;
            _RESERVED_IDENTIFIER_FIXUP_2824.y = _RESERVED_IDENTIFIER_FIXUP_1495.y;
            _RESERVED_IDENTIFIER_FIXUP_2824.w = _RESERVED_IDENTIFIER_FIXUP_1448;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2824.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1448;
            float _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_1488 + hdLod7(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_2809.x = _RESERVED_IDENTIFIER_FIXUP_1517;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_2794.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2837;
            _RESERVED_IDENTIFIER_FIXUP_2837.x = _RESERVED_IDENTIFIER_FIXUP_1524.x;
            _RESERVED_IDENTIFIER_FIXUP_2837.y = _RESERVED_IDENTIFIER_FIXUP_1524.y;
            _RESERVED_IDENTIFIER_FIXUP_2837.w = _RESERVED_IDENTIFIER_FIXUP_1448;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2837.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1448;
            float _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1517 + hdLod7(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_2794.z = _RESERVED_IDENTIFIER_FIXUP_1546;
            _RESERVED_IDENTIFIER_FIXUP_2794.y = _RESERVED_IDENTIFIER_FIXUP_1546 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3306 = _RESERVED_IDENTIFIER_FIXUP_2809;
            _RESERVED_IDENTIFIER_FIXUP_3304 = _RESERVED_IDENTIFIER_FIXUP_2794;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2723 = _RESERVED_IDENTIFIER_FIXUP_2719;
            _RESERVED_IDENTIFIER_FIXUP_2723.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2723.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1562 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1566 = _RESERVED_IDENTIFIER_FIXUP_1562.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3327 = vec4(_RESERVED_IDENTIFIER_FIXUP_1562.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1566);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1577 = _RESERVED_IDENTIFIER_FIXUP_3327.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3328 = vec4(_RESERVED_IDENTIFIER_FIXUP_1577 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1566);
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1577;
            float param_33 = _RESERVED_IDENTIFIER_FIXUP_1566;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3328.xy;
            float param_35 = _RESERVED_IDENTIFIER_FIXUP_1566;
            float _RESERVED_IDENTIFIER_FIXUP_1607 = hdLod8(param_32, param_33).x + hdLod8(param_34, param_35).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2750 = _RESERVED_IDENTIFIER_FIXUP_3327;
            _RESERVED_IDENTIFIER_FIXUP_2750.z = _RESERVED_IDENTIFIER_FIXUP_1607;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1614 = _RESERVED_IDENTIFIER_FIXUP_2750.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2752 = _RESERVED_IDENTIFIER_FIXUP_3328;
            _RESERVED_IDENTIFIER_FIXUP_2752.x = _RESERVED_IDENTIFIER_FIXUP_1614.x;
            _RESERVED_IDENTIFIER_FIXUP_2752.y = _RESERVED_IDENTIFIER_FIXUP_1614.y;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2752.xy;
            float param_37 = _RESERVED_IDENTIFIER_FIXUP_1566;
            float _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_1607 + hdLod8(param_36, param_37).x;
            _RESERVED_IDENTIFIER_FIXUP_2750.z = _RESERVED_IDENTIFIER_FIXUP_1629;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1636 = _RESERVED_IDENTIFIER_FIXUP_2750.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2761 = _RESERVED_IDENTIFIER_FIXUP_2752;
            _RESERVED_IDENTIFIER_FIXUP_2761.x = _RESERVED_IDENTIFIER_FIXUP_1636.x;
            _RESERVED_IDENTIFIER_FIXUP_2761.y = _RESERVED_IDENTIFIER_FIXUP_1636.y;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2761.xy;
            float param_39 = _RESERVED_IDENTIFIER_FIXUP_1566;
            float _RESERVED_IDENTIFIER_FIXUP_1651 = _RESERVED_IDENTIFIER_FIXUP_1629 + hdLod8(param_38, param_39).x;
            _RESERVED_IDENTIFIER_FIXUP_2750.z = _RESERVED_IDENTIFIER_FIXUP_1651;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1658 = _RESERVED_IDENTIFIER_FIXUP_2750.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2770 = _RESERVED_IDENTIFIER_FIXUP_2761;
            _RESERVED_IDENTIFIER_FIXUP_2770.x = _RESERVED_IDENTIFIER_FIXUP_1658.x;
            _RESERVED_IDENTIFIER_FIXUP_2770.y = _RESERVED_IDENTIFIER_FIXUP_1658.y;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2770.xy;
            float param_41 = _RESERVED_IDENTIFIER_FIXUP_1566;
            float _RESERVED_IDENTIFIER_FIXUP_1673 = _RESERVED_IDENTIFIER_FIXUP_1651 + hdLod8(param_40, param_41).x;
            _RESERVED_IDENTIFIER_FIXUP_2750.x = _RESERVED_IDENTIFIER_FIXUP_1673;
            float _RESERVED_IDENTIFIER_FIXUP_1681 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2750.y = _RESERVED_IDENTIFIER_FIXUP_1681;
            float _RESERVED_IDENTIFIER_FIXUP_1687 = clamp((_RESERVED_IDENTIFIER_FIXUP_1681 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2723.z = _RESERVED_IDENTIFIER_FIXUP_1687;
            float _RESERVED_IDENTIFIER_FIXUP_1692 = (_RESERVED_IDENTIFIER_FIXUP_1673 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2723.w = _RESERVED_IDENTIFIER_FIXUP_1692;
            _RESERVED_IDENTIFIER_FIXUP_2723.y = (_RESERVED_IDENTIFIER_FIXUP_1687 * _RESERVED_IDENTIFIER_FIXUP_1692) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3306 = _RESERVED_IDENTIFIER_FIXUP_2750;
            _RESERVED_IDENTIFIER_FIXUP_3304 = _RESERVED_IDENTIFIER_FIXUP_2723;
        }
        _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_3306;
        _RESERVED_IDENTIFIER_FIXUP_3303 = _RESERVED_IDENTIFIER_FIXUP_3304;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1707 = min(_RESERVED_IDENTIFIER_FIXUP_3303.y, _RESERVED_IDENTIFIER_FIXUP_3303.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2915 = _RESERVED_IDENTIFIER_FIXUP_3305;
    _RESERVED_IDENTIFIER_FIXUP_2915.x = _RESERVED_IDENTIFIER_FIXUP_1707;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2918 = _RESERVED_IDENTIFIER_FIXUP_3303;
    _RESERVED_IDENTIFIER_FIXUP_2918.x = (_RESERVED_IDENTIFIER_FIXUP_1707 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1718 = _RESERVED_IDENTIFIER_FIXUP_1074.xyz * _RESERVED_IDENTIFIER_FIXUP_2918.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2920 = _RESERVED_IDENTIFIER_FIXUP_1074;
    _RESERVED_IDENTIFIER_FIXUP_2920.x = _RESERVED_IDENTIFIER_FIXUP_1718.x;
    _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1718.y;
    _RESERVED_IDENTIFIER_FIXUP_2920.z = _RESERVED_IDENTIFIER_FIXUP_1718.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1729 = _RESERVED_IDENTIFIER_FIXUP_2920.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3298).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2926 = _RESERVED_IDENTIFIER_FIXUP_2920;
    _RESERVED_IDENTIFIER_FIXUP_2926.x = _RESERVED_IDENTIFIER_FIXUP_1729.x;
    _RESERVED_IDENTIFIER_FIXUP_2926.y = _RESERVED_IDENTIFIER_FIXUP_1729.y;
    _RESERVED_IDENTIFIER_FIXUP_2926.z = _RESERVED_IDENTIFIER_FIXUP_1729.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1740 = _RESERVED_IDENTIFIER_FIXUP_2926.xyz + _RESERVED_IDENTIFIER_FIXUP_2926.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2932 = _RESERVED_IDENTIFIER_FIXUP_2926;
    _RESERVED_IDENTIFIER_FIXUP_2932.x = _RESERVED_IDENTIFIER_FIXUP_1740.x;
    _RESERVED_IDENTIFIER_FIXUP_2932.y = _RESERVED_IDENTIFIER_FIXUP_1740.y;
    _RESERVED_IDENTIFIER_FIXUP_2932.z = _RESERVED_IDENTIFIER_FIXUP_1740.z;
    _RESERVED_IDENTIFIER_FIXUP_2918.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2918.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2918.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1765 = (_RESERVED_IDENTIFIER_FIXUP_2918.xyz * _RESERVED_IDENTIFIER_FIXUP_2915.xxx) + _RESERVED_IDENTIFIER_FIXUP_2932.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2944 = _RESERVED_IDENTIFIER_FIXUP_2932;
    _RESERVED_IDENTIFIER_FIXUP_2944.x = _RESERVED_IDENTIFIER_FIXUP_1765.x;
    _RESERVED_IDENTIFIER_FIXUP_2944.y = _RESERVED_IDENTIFIER_FIXUP_1765.y;
    _RESERVED_IDENTIFIER_FIXUP_2944.z = _RESERVED_IDENTIFIER_FIXUP_1765.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1778 = _RESERVED_IDENTIFIER_FIXUP_2944.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2950 = _RESERVED_IDENTIFIER_FIXUP_2944;
    _RESERVED_IDENTIFIER_FIXUP_2950.x = _RESERVED_IDENTIFIER_FIXUP_1778.x;
    _RESERVED_IDENTIFIER_FIXUP_2950.y = _RESERVED_IDENTIFIER_FIXUP_1778.y;
    _RESERVED_IDENTIFIER_FIXUP_2950.z = _RESERVED_IDENTIFIER_FIXUP_1778.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1831 = OptTex0( texcoord0.xyz);
    vec2 param_42 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1835 = hdTex1(param_42);
    vec2 param_43 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1839 = hdTex2(param_43);
    float _RESERVED_IDENTIFIER_FIXUP_1843 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1839.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2964 = _RESERVED_IDENTIFIER_FIXUP_1839;
    _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1843;
    _RESERVED_IDENTIFIER_FIXUP_2964.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1843;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1853 = _RESERVED_IDENTIFIER_FIXUP_1835 * _RESERVED_IDENTIFIER_FIXUP_2964.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1859 = (_RESERVED_IDENTIFIER_FIXUP_1831 * _RESERVED_IDENTIFIER_FIXUP_2964.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1853;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2971 = _RESERVED_IDENTIFIER_FIXUP_1853;
    _RESERVED_IDENTIFIER_FIXUP_2971.x = _RESERVED_IDENTIFIER_FIXUP_1081;
    float _RESERVED_IDENTIFIER_FIXUP_1872 = clamp((_RESERVED_IDENTIFIER_FIXUP_1081 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2971.x = _RESERVED_IDENTIFIER_FIXUP_1872;
    float _RESERVED_IDENTIFIER_FIXUP_1878 = ((-_RESERVED_IDENTIFIER_FIXUP_1872) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2971.y = _RESERVED_IDENTIFIER_FIXUP_1878;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3313;
    if (_RESERVED_IDENTIFIER_FIXUP_1878 != (-_RESERVED_IDENTIFIER_FIXUP_1878))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1890 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1900 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1902 = _RESERVED_IDENTIFIER_FIXUP_1900.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2984 = _RESERVED_IDENTIFIER_FIXUP_2971;
        _RESERVED_IDENTIFIER_FIXUP_2984.y = _RESERVED_IDENTIFIER_FIXUP_1902;
        _RESERVED_IDENTIFIER_FIXUP_2984.z = _RESERVED_IDENTIFIER_FIXUP_1900.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1910 = _RESERVED_IDENTIFIER_FIXUP_2984.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2988;
        _RESERVED_IDENTIFIER_FIXUP_2988.x = _RESERVED_IDENTIFIER_FIXUP_1910.x;
        _RESERVED_IDENTIFIER_FIXUP_2988.y = _RESERVED_IDENTIFIER_FIXUP_1910.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1917 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1921 = _RESERVED_IDENTIFIER_FIXUP_1917.y;
        _RESERVED_IDENTIFIER_FIXUP_2988.w = _RESERVED_IDENTIFIER_FIXUP_1921;
        vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_1890.xy;
        float param_45 = _RESERVED_IDENTIFIER_FIXUP_1890.w;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2988.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_1921;
        float _RESERVED_IDENTIFIER_FIXUP_1932 = hdLod5(param_44, param_45).x + hdLod5(param_46, param_47).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3330 = vec4(_RESERVED_IDENTIFIER_FIXUP_1872, _RESERVED_IDENTIFIER_FIXUP_1902, _RESERVED_IDENTIFIER_FIXUP_1900.y, _RESERVED_IDENTIFIER_FIXUP_1932);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1939 = _RESERVED_IDENTIFIER_FIXUP_3330.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3001;
        _RESERVED_IDENTIFIER_FIXUP_3001.x = _RESERVED_IDENTIFIER_FIXUP_1939.x;
        _RESERVED_IDENTIFIER_FIXUP_3001.y = _RESERVED_IDENTIFIER_FIXUP_1939.y;
        _RESERVED_IDENTIFIER_FIXUP_3001.w = _RESERVED_IDENTIFIER_FIXUP_1921;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3001.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1921;
        float _RESERVED_IDENTIFIER_FIXUP_1961 = _RESERVED_IDENTIFIER_FIXUP_1932 + hdLod5(param_48, param_49).x;
        _RESERVED_IDENTIFIER_FIXUP_3330.w = _RESERVED_IDENTIFIER_FIXUP_1961;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1968 = _RESERVED_IDENTIFIER_FIXUP_3330.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3014;
        _RESERVED_IDENTIFIER_FIXUP_3014.x = _RESERVED_IDENTIFIER_FIXUP_1968.x;
        _RESERVED_IDENTIFIER_FIXUP_3014.y = _RESERVED_IDENTIFIER_FIXUP_1968.y;
        _RESERVED_IDENTIFIER_FIXUP_3014.w = _RESERVED_IDENTIFIER_FIXUP_1921;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3014.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1921;
        float _RESERVED_IDENTIFIER_FIXUP_1990 = _RESERVED_IDENTIFIER_FIXUP_1961 + hdLod5(param_50, param_51).x;
        _RESERVED_IDENTIFIER_FIXUP_3330.w = _RESERVED_IDENTIFIER_FIXUP_1990;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1997 = _RESERVED_IDENTIFIER_FIXUP_3330.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3027;
        _RESERVED_IDENTIFIER_FIXUP_3027.x = _RESERVED_IDENTIFIER_FIXUP_1997.x;
        _RESERVED_IDENTIFIER_FIXUP_3027.y = _RESERVED_IDENTIFIER_FIXUP_1997.y;
        _RESERVED_IDENTIFIER_FIXUP_3027.w = _RESERVED_IDENTIFIER_FIXUP_1921;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3027.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1921;
        float _RESERVED_IDENTIFIER_FIXUP_2019 = _RESERVED_IDENTIFIER_FIXUP_1990 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2019;
        float _RESERVED_IDENTIFIER_FIXUP_2024 = (_RESERVED_IDENTIFIER_FIXUP_2019 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2024;
        _RESERVED_IDENTIFIER_FIXUP_3330.x = (_RESERVED_IDENTIFIER_FIXUP_1872 * _RESERVED_IDENTIFIER_FIXUP_2024) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3313 = _RESERVED_IDENTIFIER_FIXUP_3330;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2981 = _RESERVED_IDENTIFIER_FIXUP_2971;
        _RESERVED_IDENTIFIER_FIXUP_2981.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3313 = _RESERVED_IDENTIFIER_FIXUP_2981;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3049 = _RESERVED_IDENTIFIER_FIXUP_3313;
    _RESERVED_IDENTIFIER_FIXUP_3049.y = _RESERVED_IDENTIFIER_FIXUP_1257;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3318;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3316;
    if (_RESERVED_IDENTIFIER_FIXUP_1257 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2051 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2061 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3189 = _RESERVED_IDENTIFIER_FIXUP_3049;
        _RESERVED_IDENTIFIER_FIXUP_3189.y = _RESERVED_IDENTIFIER_FIXUP_2061.x;
        _RESERVED_IDENTIFIER_FIXUP_3189.z = _RESERVED_IDENTIFIER_FIXUP_2061.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2071 = _RESERVED_IDENTIFIER_FIXUP_3189.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3193;
        _RESERVED_IDENTIFIER_FIXUP_3193.x = _RESERVED_IDENTIFIER_FIXUP_2071.x;
        _RESERVED_IDENTIFIER_FIXUP_3193.y = _RESERVED_IDENTIFIER_FIXUP_2071.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2078 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2082 = _RESERVED_IDENTIFIER_FIXUP_2078.y;
        _RESERVED_IDENTIFIER_FIXUP_3193.w = _RESERVED_IDENTIFIER_FIXUP_2082;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2051.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2051.w;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3193.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2082;
        float _RESERVED_IDENTIFIER_FIXUP_2093 = hdLod6(param_54, param_55).x + hdLod6(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3189.w = _RESERVED_IDENTIFIER_FIXUP_2093;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2100 = _RESERVED_IDENTIFIER_FIXUP_3189.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3206;
        _RESERVED_IDENTIFIER_FIXUP_3206.x = _RESERVED_IDENTIFIER_FIXUP_2100.x;
        _RESERVED_IDENTIFIER_FIXUP_3206.y = _RESERVED_IDENTIFIER_FIXUP_2100.y;
        _RESERVED_IDENTIFIER_FIXUP_3206.w = _RESERVED_IDENTIFIER_FIXUP_2082;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3206.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2082;
        float _RESERVED_IDENTIFIER_FIXUP_2122 = _RESERVED_IDENTIFIER_FIXUP_2093 + hdLod6(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3189.w = _RESERVED_IDENTIFIER_FIXUP_2122;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2129 = _RESERVED_IDENTIFIER_FIXUP_3189.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3219;
        _RESERVED_IDENTIFIER_FIXUP_3219.x = _RESERVED_IDENTIFIER_FIXUP_2129.x;
        _RESERVED_IDENTIFIER_FIXUP_3219.y = _RESERVED_IDENTIFIER_FIXUP_2129.y;
        _RESERVED_IDENTIFIER_FIXUP_3219.w = _RESERVED_IDENTIFIER_FIXUP_2082;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3219.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2082;
        float _RESERVED_IDENTIFIER_FIXUP_2151 = _RESERVED_IDENTIFIER_FIXUP_2122 + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3189.w = _RESERVED_IDENTIFIER_FIXUP_2151;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2158 = _RESERVED_IDENTIFIER_FIXUP_3189.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3232;
        _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_2158.x;
        _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_2158.y;
        _RESERVED_IDENTIFIER_FIXUP_3232.w = _RESERVED_IDENTIFIER_FIXUP_2082;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3232.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2082;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2175 = hdLod6(param_62, param_63);
        float _RESERVED_IDENTIFIER_FIXUP_2180 = _RESERVED_IDENTIFIER_FIXUP_2151 + _RESERVED_IDENTIFIER_FIXUP_2175.x;
        _RESERVED_IDENTIFIER_FIXUP_3189.y = _RESERVED_IDENTIFIER_FIXUP_2180;
        _RESERVED_IDENTIFIER_FIXUP_3189.y = _RESERVED_IDENTIFIER_FIXUP_2180 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3318 = _RESERVED_IDENTIFIER_FIXUP_2175;
        _RESERVED_IDENTIFIER_FIXUP_3316 = _RESERVED_IDENTIFIER_FIXUP_3189;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2193 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3054 = _RESERVED_IDENTIFIER_FIXUP_3049;
        _RESERVED_IDENTIFIER_FIXUP_3054.z = _RESERVED_IDENTIFIER_FIXUP_2193;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3319;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3317;
        if (_RESERVED_IDENTIFIER_FIXUP_2193 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2202 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_2202.xy;
            float param_65 = _RESERVED_IDENTIFIER_FIXUP_2202.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2208 = hdLod7(param_64, param_65);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2212 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3129 = _RESERVED_IDENTIFIER_FIXUP_3054;
            _RESERVED_IDENTIFIER_FIXUP_3129.z = _RESERVED_IDENTIFIER_FIXUP_2212.x;
            _RESERVED_IDENTIFIER_FIXUP_3129.w = _RESERVED_IDENTIFIER_FIXUP_2212.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2222 = _RESERVED_IDENTIFIER_FIXUP_3129.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3133;
            _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_2222.x;
            _RESERVED_IDENTIFIER_FIXUP_3133.y = _RESERVED_IDENTIFIER_FIXUP_2222.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2229 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2233 = _RESERVED_IDENTIFIER_FIXUP_2229.y;
            _RESERVED_IDENTIFIER_FIXUP_3133.w = _RESERVED_IDENTIFIER_FIXUP_2233;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3133.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2233;
            float _RESERVED_IDENTIFIER_FIXUP_2244 = _RESERVED_IDENTIFIER_FIXUP_2208.x + hdLod7(param_66, param_67).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3144 = _RESERVED_IDENTIFIER_FIXUP_2208;
            _RESERVED_IDENTIFIER_FIXUP_3144.x = _RESERVED_IDENTIFIER_FIXUP_2244;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2251 = _RESERVED_IDENTIFIER_FIXUP_3129.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3146;
            _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_2251.x;
            _RESERVED_IDENTIFIER_FIXUP_3146.y = _RESERVED_IDENTIFIER_FIXUP_2251.y;
            _RESERVED_IDENTIFIER_FIXUP_3146.w = _RESERVED_IDENTIFIER_FIXUP_2233;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3146.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2233;
            float _RESERVED_IDENTIFIER_FIXUP_2273 = _RESERVED_IDENTIFIER_FIXUP_2244 + hdLod7(param_68, param_69).x;
            _RESERVED_IDENTIFIER_FIXUP_3144.x = _RESERVED_IDENTIFIER_FIXUP_2273;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2280 = _RESERVED_IDENTIFIER_FIXUP_3129.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3159;
            _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_2280.x;
            _RESERVED_IDENTIFIER_FIXUP_3159.y = _RESERVED_IDENTIFIER_FIXUP_2280.y;
            _RESERVED_IDENTIFIER_FIXUP_3159.w = _RESERVED_IDENTIFIER_FIXUP_2233;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3159.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2233;
            float _RESERVED_IDENTIFIER_FIXUP_2302 = _RESERVED_IDENTIFIER_FIXUP_2273 + hdLod7(param_70, param_71).x;
            _RESERVED_IDENTIFIER_FIXUP_3144.x = _RESERVED_IDENTIFIER_FIXUP_2302;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2309 = _RESERVED_IDENTIFIER_FIXUP_3129.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3172;
            _RESERVED_IDENTIFIER_FIXUP_3172.x = _RESERVED_IDENTIFIER_FIXUP_2309.x;
            _RESERVED_IDENTIFIER_FIXUP_3172.y = _RESERVED_IDENTIFIER_FIXUP_2309.y;
            _RESERVED_IDENTIFIER_FIXUP_3172.w = _RESERVED_IDENTIFIER_FIXUP_2233;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3172.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2233;
            float _RESERVED_IDENTIFIER_FIXUP_2331 = _RESERVED_IDENTIFIER_FIXUP_2302 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3129.z = _RESERVED_IDENTIFIER_FIXUP_2331;
            _RESERVED_IDENTIFIER_FIXUP_3129.y = _RESERVED_IDENTIFIER_FIXUP_2331 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3319 = _RESERVED_IDENTIFIER_FIXUP_3144;
            _RESERVED_IDENTIFIER_FIXUP_3317 = _RESERVED_IDENTIFIER_FIXUP_3129;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3058 = _RESERVED_IDENTIFIER_FIXUP_3054;
            _RESERVED_IDENTIFIER_FIXUP_3058.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3058.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2347 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2351 = _RESERVED_IDENTIFIER_FIXUP_2347.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3331 = vec4(_RESERVED_IDENTIFIER_FIXUP_2347.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2351);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2362 = _RESERVED_IDENTIFIER_FIXUP_3331.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3332 = vec4(_RESERVED_IDENTIFIER_FIXUP_2362 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2351);
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2362;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2351;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3332.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2351;
            float _RESERVED_IDENTIFIER_FIXUP_2392 = hdLod8(param_74, param_75).x + hdLod8(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3085 = _RESERVED_IDENTIFIER_FIXUP_3331;
            _RESERVED_IDENTIFIER_FIXUP_3085.z = _RESERVED_IDENTIFIER_FIXUP_2392;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2399 = _RESERVED_IDENTIFIER_FIXUP_3085.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3087 = _RESERVED_IDENTIFIER_FIXUP_3332;
            _RESERVED_IDENTIFIER_FIXUP_3087.x = _RESERVED_IDENTIFIER_FIXUP_2399.x;
            _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_2399.y;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3087.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2351;
            float _RESERVED_IDENTIFIER_FIXUP_2414 = _RESERVED_IDENTIFIER_FIXUP_2392 + hdLod8(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3085.z = _RESERVED_IDENTIFIER_FIXUP_2414;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2421 = _RESERVED_IDENTIFIER_FIXUP_3085.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3096 = _RESERVED_IDENTIFIER_FIXUP_3087;
            _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_2421.x;
            _RESERVED_IDENTIFIER_FIXUP_3096.y = _RESERVED_IDENTIFIER_FIXUP_2421.y;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3096.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2351;
            float _RESERVED_IDENTIFIER_FIXUP_2436 = _RESERVED_IDENTIFIER_FIXUP_2414 + hdLod8(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3085.z = _RESERVED_IDENTIFIER_FIXUP_2436;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2443 = _RESERVED_IDENTIFIER_FIXUP_3085.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3105 = _RESERVED_IDENTIFIER_FIXUP_3096;
            _RESERVED_IDENTIFIER_FIXUP_3105.x = _RESERVED_IDENTIFIER_FIXUP_2443.x;
            _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_2443.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3105.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2351;
            float _RESERVED_IDENTIFIER_FIXUP_2458 = _RESERVED_IDENTIFIER_FIXUP_2436 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_2458;
            float _RESERVED_IDENTIFIER_FIXUP_2466 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_2466;
            float _RESERVED_IDENTIFIER_FIXUP_2472 = clamp((_RESERVED_IDENTIFIER_FIXUP_2466 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3058.z = _RESERVED_IDENTIFIER_FIXUP_2472;
            float _RESERVED_IDENTIFIER_FIXUP_2477 = (_RESERVED_IDENTIFIER_FIXUP_2458 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3058.w = _RESERVED_IDENTIFIER_FIXUP_2477;
            _RESERVED_IDENTIFIER_FIXUP_3058.y = (_RESERVED_IDENTIFIER_FIXUP_2472 * _RESERVED_IDENTIFIER_FIXUP_2477) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3319 = _RESERVED_IDENTIFIER_FIXUP_3085;
            _RESERVED_IDENTIFIER_FIXUP_3317 = _RESERVED_IDENTIFIER_FIXUP_3058;
        }
        _RESERVED_IDENTIFIER_FIXUP_3318 = _RESERVED_IDENTIFIER_FIXUP_3319;
        _RESERVED_IDENTIFIER_FIXUP_3316 = _RESERVED_IDENTIFIER_FIXUP_3317;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2492 = min(_RESERVED_IDENTIFIER_FIXUP_3316.y, _RESERVED_IDENTIFIER_FIXUP_3316.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3250 = _RESERVED_IDENTIFIER_FIXUP_3318;
    _RESERVED_IDENTIFIER_FIXUP_3250.x = _RESERVED_IDENTIFIER_FIXUP_2492;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3253 = _RESERVED_IDENTIFIER_FIXUP_3316;
    _RESERVED_IDENTIFIER_FIXUP_3253.x = (_RESERVED_IDENTIFIER_FIXUP_2492 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2503 = _RESERVED_IDENTIFIER_FIXUP_1859.xyz * _RESERVED_IDENTIFIER_FIXUP_3253.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3255 = _RESERVED_IDENTIFIER_FIXUP_1859;
    _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_2503.x;
    _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_2503.y;
    _RESERVED_IDENTIFIER_FIXUP_3255.z = _RESERVED_IDENTIFIER_FIXUP_2503.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2514 = _RESERVED_IDENTIFIER_FIXUP_3255.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3261 = _RESERVED_IDENTIFIER_FIXUP_3255;
    _RESERVED_IDENTIFIER_FIXUP_3261.x = _RESERVED_IDENTIFIER_FIXUP_2514.x;
    _RESERVED_IDENTIFIER_FIXUP_3261.y = _RESERVED_IDENTIFIER_FIXUP_2514.y;
    _RESERVED_IDENTIFIER_FIXUP_3261.z = _RESERVED_IDENTIFIER_FIXUP_2514.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2525 = _RESERVED_IDENTIFIER_FIXUP_3261.xyz + _RESERVED_IDENTIFIER_FIXUP_3261.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3267 = _RESERVED_IDENTIFIER_FIXUP_3261;
    _RESERVED_IDENTIFIER_FIXUP_3267.x = _RESERVED_IDENTIFIER_FIXUP_2525.x;
    _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_2525.y;
    _RESERVED_IDENTIFIER_FIXUP_3267.z = _RESERVED_IDENTIFIER_FIXUP_2525.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2536 = _RESERVED_IDENTIFIER_FIXUP_3267.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3253.x = _RESERVED_IDENTIFIER_FIXUP_2536.x;
    _RESERVED_IDENTIFIER_FIXUP_3253.y = _RESERVED_IDENTIFIER_FIXUP_2536.y;
    _RESERVED_IDENTIFIER_FIXUP_3253.z = _RESERVED_IDENTIFIER_FIXUP_2536.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2550 = (_RESERVED_IDENTIFIER_FIXUP_3253.xyz * _RESERVED_IDENTIFIER_FIXUP_3250.xxx) + _RESERVED_IDENTIFIER_FIXUP_3267.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3279 = _RESERVED_IDENTIFIER_FIXUP_3267;
    _RESERVED_IDENTIFIER_FIXUP_3279.x = _RESERVED_IDENTIFIER_FIXUP_2550.x;
    _RESERVED_IDENTIFIER_FIXUP_3279.y = _RESERVED_IDENTIFIER_FIXUP_2550.y;
    _RESERVED_IDENTIFIER_FIXUP_3279.z = _RESERVED_IDENTIFIER_FIXUP_2550.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2563 = _RESERVED_IDENTIFIER_FIXUP_3279.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3285 = _RESERVED_IDENTIFIER_FIXUP_3279;
    _RESERVED_IDENTIFIER_FIXUP_3285.x = _RESERVED_IDENTIFIER_FIXUP_2563.x;
    _RESERVED_IDENTIFIER_FIXUP_3285.y = _RESERVED_IDENTIFIER_FIXUP_2563.y;
    _RESERVED_IDENTIFIER_FIXUP_3285.z = _RESERVED_IDENTIFIER_FIXUP_2563.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3285.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_907 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_916;
    if (_RESERVED_IDENTIFIER_FIXUP_907)
    {
        _RESERVED_IDENTIFIER_FIXUP_916 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_916 = _RESERVED_IDENTIFIER_FIXUP_907;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_916)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_953 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2950.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_980 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2622;
    if (_RESERVED_IDENTIFIER_FIXUP_953 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2622 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_953), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_980);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2622 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_980);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2622;
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 *= r2.xxxx;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r2.xy;
        float param_3 = r2.w;
        r2 = hdLod5(param_2, param_3);
        vec2 hdB145 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB145.x;
        r1.z = hdB145.y;
        vec2 hdB167 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB167.x;
        r3.y = hdB167.y;
        vec2 hdB175 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB175.x;
        r3.w = hdB175.y;
        vec2 param_4 = r3.xy;
        float param_5 = r3.w;
        r3 = hdLod5(param_4, param_5);
        r1.w = r2.x + r3.x;
        vec2 hdB198 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB198.x;
        r2.y = hdB198.y;
        vec2 hdB205 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB205.x;
        r2.w = hdB205.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.w += r2.x;
        vec2 hdB228 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB228.x;
        r2.y = hdB228.y;
        vec2 hdB235 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB235.x;
        r2.w = hdB235.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB258 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB258.x;
        r2.y = hdB258.y;
        vec2 hdB265 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB265.x;
        r2.w = hdB265.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v5.x), abs(v5.y));
    if (r1.y < 1.0)
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod6(param_12, param_13);
        vec2 hdB325 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB325.x;
        r1.z = hdB325.y;
        vec2 hdB335 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB335.x;
        r3.y = hdB335.y;
        vec2 hdB342 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB342.x;
        r3.w = hdB342.y;
        vec2 param_14 = r3.xy;
        float param_15 = r3.w;
        r3 = hdLod6(param_14, param_15);
        r1.w = r2.x + r3.x;
        vec2 hdB364 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB364.x;
        r2.y = hdB364.y;
        vec2 hdB371 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB371.x;
        r2.w = hdB371.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod6(param_16, param_17);
        r1.w += r2.x;
        vec2 hdB393 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB393.x;
        r2.y = hdB393.y;
        vec2 hdB400 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB400.x;
        r2.w = hdB400.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod6(param_18, param_19);
        r1.w += r2.x;
        vec2 hdB422 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB422.x;
        r2.y = hdB422.y;
        vec2 hdB429 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB429.x;
        r2.w = hdB429.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod6(param_20, param_21);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r2.xy;
            float param_23 = r2.w;
            r2 = hdLod7(param_22, param_23);
            vec2 hdB478 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB478.x;
            r1.w = hdB478.y;
            vec2 hdB488 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB488.x;
            r3.y = hdB488.y;
            vec2 hdB495 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB495.x;
            r3.w = hdB495.y;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod7(param_24, param_25);
            r2.x += r3.x;
            vec2 hdB517 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB517.x;
            r3.y = hdB517.y;
            vec2 hdB524 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB524.x;
            r3.w = hdB524.y;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r2.x += r3.x;
            vec2 hdB546 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB546.x;
            r3.y = hdB546.y;
            vec2 hdB553 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB553.x;
            r3.w = hdB553.y;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r2.x += r3.x;
            vec2 hdB575 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB575.x;
            r3.y = hdB575.y;
            vec2 hdB582 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB582.x;
            r3.w = hdB582.y;
            vec2 param_30 = r3.xy;
            float param_31 = r3.w;
            r3 = hdLod7(param_30, param_31);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v4.w;
            r1.w = v5.w;
            vec2 hdB614 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB614.x;
            r2.w = hdB614.y;
            r2.y = (v5.w * 0.5) + 0.5;
            r2.z = v6.w;
            vec2 param_32 = r2.xy;
            float param_33 = r2.w;
            r3 = hdLod8(param_32, param_33);
            vec2 hdB639 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB639.x;
            r4.y = hdB639.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_34 = r4.xy;
            float param_35 = r4.w;
            r5 = hdLod8(param_34, param_35);
            r2.z = r3.x + r5.x;
            vec2 hdB667 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB667.x;
            r4.y = hdB667.y;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r3 = hdLod8(param_36, param_37);
            r2.z += r3.x;
            vec2 hdB689 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB689.x;
            r4.y = hdB689.y;
            vec2 param_38 = r4.xy;
            float param_39 = r4.w;
            r3 = hdLod8(param_38, param_39);
            r2.z += r3.x;
            vec2 hdB711 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB711.x;
            r4.y = hdB711.y;
            vec2 param_40 = r4.xy;
            float param_41 = r4.w;
            r3 = hdLod8(param_40, param_41);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB769 = r0;
    vec3 hdB773 = hdB769.xyz * r1.xxx;
    r0.x = hdB773.x;
    r0.y = hdB773.y;
    r0.z = hdB773.z;
    vec4 hdB780 = r0;
    vec3 hdB784 = hdB780.xyz * v0.xyz;
    r0.x = hdB784.x;
    r0.y = hdB784.y;
    r0.z = hdB784.z;
    vec4 hdB791 = r0;
    vec4 hdB793 = r0;
    vec3 hdB795 = hdB791.xyz + hdB793.xyz;
    r0.x = hdB795.x;
    r0.y = hdB795.y;
    r0.z = hdB795.z;
    vec3 hdB806 = r0.www * v1.xyz;
    r1.x = hdB806.x;
    r1.y = hdB806.y;
    r1.z = hdB806.z;
    vec4 hdB818 = r0;
    vec3 hdB820 = (r1.xyz * r2.xxx) + hdB818.xyz;
    r0.x = hdB820.x;
    r0.y = hdB820.y;
    r0.z = hdB820.z;
    vec4 hdB827 = r0;
    vec3 hdB834 = hdB827.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB834.x;
    r0.y = hdB834.y;
    r0.z = hdB834.z;
    vec3 hdB849 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB849.x;
    oC0.y = hdB849.y;
    oC0.z = hdB849.z;
    oC0.w = 1.0;
    bool hdB862 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB870;
    if (hdB862)
    {
        hdB870 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB870 = hdB862;
    }
    if (hdB870)
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
    bool _3112 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3122;
    if (_3112)
    {
        _3122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3122 = _3112;
    }
    if (_3122)
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
        bool _3147 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3162;
        if (!_3147)
        {
            _3162 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3162 = _3147;
        }
        if (_3162)
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
