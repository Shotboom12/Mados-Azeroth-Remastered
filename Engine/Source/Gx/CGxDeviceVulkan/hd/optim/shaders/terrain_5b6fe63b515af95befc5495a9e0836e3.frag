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
float _RESERVED_IDENTIFIER_FIXUP_3249;
vec4 _RESERVED_IDENTIFIER_FIXUP_3250;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1030 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1034 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1038 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1050 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2592 = _RESERVED_IDENTIFIER_FIXUP_1030;
    _RESERVED_IDENTIFIER_FIXUP_2592.x = _RESERVED_IDENTIFIER_FIXUP_1050;
    float _RESERVED_IDENTIFIER_FIXUP_1056 = clamp((_RESERVED_IDENTIFIER_FIXUP_1050 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2592.x = _RESERVED_IDENTIFIER_FIXUP_1056;
    float _RESERVED_IDENTIFIER_FIXUP_1062 = ((-_RESERVED_IDENTIFIER_FIXUP_1056) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2592.y = _RESERVED_IDENTIFIER_FIXUP_1062;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3251;
    if (_RESERVED_IDENTIFIER_FIXUP_1062 != (-_RESERVED_IDENTIFIER_FIXUP_1062))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1074 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1084 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1086 = _RESERVED_IDENTIFIER_FIXUP_1084.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2605 = _RESERVED_IDENTIFIER_FIXUP_2592;
        _RESERVED_IDENTIFIER_FIXUP_2605.y = _RESERVED_IDENTIFIER_FIXUP_1086;
        _RESERVED_IDENTIFIER_FIXUP_2605.z = _RESERVED_IDENTIFIER_FIXUP_1084.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1094 = _RESERVED_IDENTIFIER_FIXUP_2605.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2609;
        _RESERVED_IDENTIFIER_FIXUP_2609.x = _RESERVED_IDENTIFIER_FIXUP_1094.x;
        _RESERVED_IDENTIFIER_FIXUP_2609.y = _RESERVED_IDENTIFIER_FIXUP_1094.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1101 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1105 = _RESERVED_IDENTIFIER_FIXUP_1101.y;
        _RESERVED_IDENTIFIER_FIXUP_2609.w = _RESERVED_IDENTIFIER_FIXUP_1105;
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1074.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1074.w;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_2609.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1105;
        float _RESERVED_IDENTIFIER_FIXUP_1116 = hdLod5(param_2, param_3).x + hdLod5(param_4, param_5).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3271 = vec4(_RESERVED_IDENTIFIER_FIXUP_1056, _RESERVED_IDENTIFIER_FIXUP_1086, _RESERVED_IDENTIFIER_FIXUP_1084.y, _RESERVED_IDENTIFIER_FIXUP_1116);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_3271.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2622;
        _RESERVED_IDENTIFIER_FIXUP_2622.x = _RESERVED_IDENTIFIER_FIXUP_1123.x;
        _RESERVED_IDENTIFIER_FIXUP_2622.y = _RESERVED_IDENTIFIER_FIXUP_1123.y;
        _RESERVED_IDENTIFIER_FIXUP_2622.w = _RESERVED_IDENTIFIER_FIXUP_1105;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2622.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1105;
        float _RESERVED_IDENTIFIER_FIXUP_1145 = _RESERVED_IDENTIFIER_FIXUP_1116 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3271.w = _RESERVED_IDENTIFIER_FIXUP_1145;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1152 = _RESERVED_IDENTIFIER_FIXUP_3271.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2635;
        _RESERVED_IDENTIFIER_FIXUP_2635.x = _RESERVED_IDENTIFIER_FIXUP_1152.x;
        _RESERVED_IDENTIFIER_FIXUP_2635.y = _RESERVED_IDENTIFIER_FIXUP_1152.y;
        _RESERVED_IDENTIFIER_FIXUP_2635.w = _RESERVED_IDENTIFIER_FIXUP_1105;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2635.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1105;
        float _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1145 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3271.w = _RESERVED_IDENTIFIER_FIXUP_1174;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_3271.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2648;
        _RESERVED_IDENTIFIER_FIXUP_2648.x = _RESERVED_IDENTIFIER_FIXUP_1181.x;
        _RESERVED_IDENTIFIER_FIXUP_2648.y = _RESERVED_IDENTIFIER_FIXUP_1181.y;
        _RESERVED_IDENTIFIER_FIXUP_2648.w = _RESERVED_IDENTIFIER_FIXUP_1105;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2648.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1105;
        float _RESERVED_IDENTIFIER_FIXUP_1203 = _RESERVED_IDENTIFIER_FIXUP_1174 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3271.y = _RESERVED_IDENTIFIER_FIXUP_1203;
        float _RESERVED_IDENTIFIER_FIXUP_1208 = (_RESERVED_IDENTIFIER_FIXUP_1203 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3271.y = _RESERVED_IDENTIFIER_FIXUP_1208;
        _RESERVED_IDENTIFIER_FIXUP_3271.x = (_RESERVED_IDENTIFIER_FIXUP_1056 * _RESERVED_IDENTIFIER_FIXUP_1208) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3251 = _RESERVED_IDENTIFIER_FIXUP_3271;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2602 = _RESERVED_IDENTIFIER_FIXUP_2592;
        _RESERVED_IDENTIFIER_FIXUP_2602.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3251 = _RESERVED_IDENTIFIER_FIXUP_2602;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1226 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2670 = _RESERVED_IDENTIFIER_FIXUP_3251;
    _RESERVED_IDENTIFIER_FIXUP_2670.y = _RESERVED_IDENTIFIER_FIXUP_1226;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3254;
    if (_RESERVED_IDENTIFIER_FIXUP_1226 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1235 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1245 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2810 = _RESERVED_IDENTIFIER_FIXUP_2670;
        _RESERVED_IDENTIFIER_FIXUP_2810.y = _RESERVED_IDENTIFIER_FIXUP_1245.x;
        _RESERVED_IDENTIFIER_FIXUP_2810.z = _RESERVED_IDENTIFIER_FIXUP_1245.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1255 = _RESERVED_IDENTIFIER_FIXUP_2810.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2814;
        _RESERVED_IDENTIFIER_FIXUP_2814.x = _RESERVED_IDENTIFIER_FIXUP_1255.x;
        _RESERVED_IDENTIFIER_FIXUP_2814.y = _RESERVED_IDENTIFIER_FIXUP_1255.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1262 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1266 = _RESERVED_IDENTIFIER_FIXUP_1262.y;
        _RESERVED_IDENTIFIER_FIXUP_2814.w = _RESERVED_IDENTIFIER_FIXUP_1266;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1235.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1235.w;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_2814.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1266;
        float _RESERVED_IDENTIFIER_FIXUP_1277 = hdLod6(param_12, param_13).x + hdLod6(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_2810.w = _RESERVED_IDENTIFIER_FIXUP_1277;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1284 = _RESERVED_IDENTIFIER_FIXUP_2810.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2827;
        _RESERVED_IDENTIFIER_FIXUP_2827.x = _RESERVED_IDENTIFIER_FIXUP_1284.x;
        _RESERVED_IDENTIFIER_FIXUP_2827.y = _RESERVED_IDENTIFIER_FIXUP_1284.y;
        _RESERVED_IDENTIFIER_FIXUP_2827.w = _RESERVED_IDENTIFIER_FIXUP_1266;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2827.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1266;
        float _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_1277 + hdLod6(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_2810.w = _RESERVED_IDENTIFIER_FIXUP_1306;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1313 = _RESERVED_IDENTIFIER_FIXUP_2810.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2840;
        _RESERVED_IDENTIFIER_FIXUP_2840.x = _RESERVED_IDENTIFIER_FIXUP_1313.x;
        _RESERVED_IDENTIFIER_FIXUP_2840.y = _RESERVED_IDENTIFIER_FIXUP_1313.y;
        _RESERVED_IDENTIFIER_FIXUP_2840.w = _RESERVED_IDENTIFIER_FIXUP_1266;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2840.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1266;
        float _RESERVED_IDENTIFIER_FIXUP_1335 = _RESERVED_IDENTIFIER_FIXUP_1306 + hdLod6(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_2810.w = _RESERVED_IDENTIFIER_FIXUP_1335;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_2810.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2853;
        _RESERVED_IDENTIFIER_FIXUP_2853.x = _RESERVED_IDENTIFIER_FIXUP_1342.x;
        _RESERVED_IDENTIFIER_FIXUP_2853.y = _RESERVED_IDENTIFIER_FIXUP_1342.y;
        _RESERVED_IDENTIFIER_FIXUP_2853.w = _RESERVED_IDENTIFIER_FIXUP_1266;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2853.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1266;
        float _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_1335 + hdLod6(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_2810.y = _RESERVED_IDENTIFIER_FIXUP_1364;
        _RESERVED_IDENTIFIER_FIXUP_2810.y = _RESERVED_IDENTIFIER_FIXUP_1364 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3254 = _RESERVED_IDENTIFIER_FIXUP_2810;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1377 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2675 = _RESERVED_IDENTIFIER_FIXUP_2670;
        _RESERVED_IDENTIFIER_FIXUP_2675.z = _RESERVED_IDENTIFIER_FIXUP_1377;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3255;
        if (_RESERVED_IDENTIFIER_FIXUP_1377 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1386 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1396 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2750 = _RESERVED_IDENTIFIER_FIXUP_2675;
            _RESERVED_IDENTIFIER_FIXUP_2750.z = _RESERVED_IDENTIFIER_FIXUP_1396.x;
            _RESERVED_IDENTIFIER_FIXUP_2750.w = _RESERVED_IDENTIFIER_FIXUP_1396.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1406 = _RESERVED_IDENTIFIER_FIXUP_2750.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2754;
            _RESERVED_IDENTIFIER_FIXUP_2754.x = _RESERVED_IDENTIFIER_FIXUP_1406.x;
            _RESERVED_IDENTIFIER_FIXUP_2754.y = _RESERVED_IDENTIFIER_FIXUP_1406.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1413 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_1413.y;
            _RESERVED_IDENTIFIER_FIXUP_2754.w = _RESERVED_IDENTIFIER_FIXUP_1417;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1435 = _RESERVED_IDENTIFIER_FIXUP_2750.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2767;
            _RESERVED_IDENTIFIER_FIXUP_2767.x = _RESERVED_IDENTIFIER_FIXUP_1435.x;
            _RESERVED_IDENTIFIER_FIXUP_2767.y = _RESERVED_IDENTIFIER_FIXUP_1435.y;
            _RESERVED_IDENTIFIER_FIXUP_2767.w = _RESERVED_IDENTIFIER_FIXUP_1417;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1464 = _RESERVED_IDENTIFIER_FIXUP_2750.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2780;
            _RESERVED_IDENTIFIER_FIXUP_2780.x = _RESERVED_IDENTIFIER_FIXUP_1464.x;
            _RESERVED_IDENTIFIER_FIXUP_2780.y = _RESERVED_IDENTIFIER_FIXUP_1464.y;
            _RESERVED_IDENTIFIER_FIXUP_2780.w = _RESERVED_IDENTIFIER_FIXUP_1417;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1493 = _RESERVED_IDENTIFIER_FIXUP_2750.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2793;
            _RESERVED_IDENTIFIER_FIXUP_2793.x = _RESERVED_IDENTIFIER_FIXUP_1493.x;
            _RESERVED_IDENTIFIER_FIXUP_2793.y = _RESERVED_IDENTIFIER_FIXUP_1493.y;
            _RESERVED_IDENTIFIER_FIXUP_2793.w = _RESERVED_IDENTIFIER_FIXUP_1417;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1386.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1386.w;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_2754.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1417;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2767.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1417;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2780.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1417;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2793.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1417;
            float _RESERVED_IDENTIFIER_FIXUP_1515 = (((hdLod7(param_22, param_23).x + hdLod7(param_24, param_25).x) + hdLod7(param_26, param_27).x) + hdLod7(param_28, param_29).x) + hdLod7(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_2750.z = _RESERVED_IDENTIFIER_FIXUP_1515;
            _RESERVED_IDENTIFIER_FIXUP_2750.y = _RESERVED_IDENTIFIER_FIXUP_1515 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3255 = _RESERVED_IDENTIFIER_FIXUP_2750;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2679 = _RESERVED_IDENTIFIER_FIXUP_2675;
            _RESERVED_IDENTIFIER_FIXUP_2679.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2679.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1531 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1535 = _RESERVED_IDENTIFIER_FIXUP_1531.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3272 = vec4(_RESERVED_IDENTIFIER_FIXUP_1531.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1535);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_3272.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3273 = vec4(_RESERVED_IDENTIFIER_FIXUP_1546 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1535);
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1546;
            float param_33 = _RESERVED_IDENTIFIER_FIXUP_1535;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3273.xy;
            float param_35 = _RESERVED_IDENTIFIER_FIXUP_1535;
            float _RESERVED_IDENTIFIER_FIXUP_1576 = hdLod8(param_32, param_33).x + hdLod8(param_34, param_35).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2706 = _RESERVED_IDENTIFIER_FIXUP_3272;
            _RESERVED_IDENTIFIER_FIXUP_2706.z = _RESERVED_IDENTIFIER_FIXUP_1576;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1583 = _RESERVED_IDENTIFIER_FIXUP_2706.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2708 = _RESERVED_IDENTIFIER_FIXUP_3273;
            _RESERVED_IDENTIFIER_FIXUP_2708.x = _RESERVED_IDENTIFIER_FIXUP_1583.x;
            _RESERVED_IDENTIFIER_FIXUP_2708.y = _RESERVED_IDENTIFIER_FIXUP_1583.y;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2708.xy;
            float param_37 = _RESERVED_IDENTIFIER_FIXUP_1535;
            float _RESERVED_IDENTIFIER_FIXUP_1598 = _RESERVED_IDENTIFIER_FIXUP_1576 + hdLod8(param_36, param_37).x;
            _RESERVED_IDENTIFIER_FIXUP_2706.z = _RESERVED_IDENTIFIER_FIXUP_1598;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1605 = _RESERVED_IDENTIFIER_FIXUP_2706.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2717 = _RESERVED_IDENTIFIER_FIXUP_2708;
            _RESERVED_IDENTIFIER_FIXUP_2717.x = _RESERVED_IDENTIFIER_FIXUP_1605.x;
            _RESERVED_IDENTIFIER_FIXUP_2717.y = _RESERVED_IDENTIFIER_FIXUP_1605.y;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2717.xy;
            float param_39 = _RESERVED_IDENTIFIER_FIXUP_1535;
            float _RESERVED_IDENTIFIER_FIXUP_1620 = _RESERVED_IDENTIFIER_FIXUP_1598 + hdLod8(param_38, param_39).x;
            _RESERVED_IDENTIFIER_FIXUP_2706.z = _RESERVED_IDENTIFIER_FIXUP_1620;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1627 = _RESERVED_IDENTIFIER_FIXUP_2706.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2726 = _RESERVED_IDENTIFIER_FIXUP_2717;
            _RESERVED_IDENTIFIER_FIXUP_2726.x = _RESERVED_IDENTIFIER_FIXUP_1627.x;
            _RESERVED_IDENTIFIER_FIXUP_2726.y = _RESERVED_IDENTIFIER_FIXUP_1627.y;
            float _RESERVED_IDENTIFIER_FIXUP_1656 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2679.z = _RESERVED_IDENTIFIER_FIXUP_1656;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2726.xy;
            float param_41 = _RESERVED_IDENTIFIER_FIXUP_1535;
            float _RESERVED_IDENTIFIER_FIXUP_1661 = ((_RESERVED_IDENTIFIER_FIXUP_1620 + hdLod8(param_40, param_41).x) * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2679.w = _RESERVED_IDENTIFIER_FIXUP_1661;
            _RESERVED_IDENTIFIER_FIXUP_2679.y = (_RESERVED_IDENTIFIER_FIXUP_1656 * _RESERVED_IDENTIFIER_FIXUP_1661) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3255 = _RESERVED_IDENTIFIER_FIXUP_2679;
        }
        _RESERVED_IDENTIFIER_FIXUP_3254 = _RESERVED_IDENTIFIER_FIXUP_3255;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1676 = min(_RESERVED_IDENTIFIER_FIXUP_3254.y, _RESERVED_IDENTIFIER_FIXUP_3254.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2874 = _RESERVED_IDENTIFIER_FIXUP_3254;
    _RESERVED_IDENTIFIER_FIXUP_2874.x = (_RESERVED_IDENTIFIER_FIXUP_1676 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1687 = mix(_RESERVED_IDENTIFIER_FIXUP_1030, _RESERVED_IDENTIFIER_FIXUP_1034, _RESERVED_IDENTIFIER_FIXUP_1038.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_2874.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2876 = _RESERVED_IDENTIFIER_FIXUP_2874;
    _RESERVED_IDENTIFIER_FIXUP_2876.x = _RESERVED_IDENTIFIER_FIXUP_1687.x;
    _RESERVED_IDENTIFIER_FIXUP_2876.y = _RESERVED_IDENTIFIER_FIXUP_1687.y;
    _RESERVED_IDENTIFIER_FIXUP_2876.z = _RESERVED_IDENTIFIER_FIXUP_1687.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1698 = _RESERVED_IDENTIFIER_FIXUP_2876.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3249).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2882 = _RESERVED_IDENTIFIER_FIXUP_2876;
    _RESERVED_IDENTIFIER_FIXUP_2882.x = _RESERVED_IDENTIFIER_FIXUP_1698.x;
    _RESERVED_IDENTIFIER_FIXUP_2882.y = _RESERVED_IDENTIFIER_FIXUP_1698.y;
    _RESERVED_IDENTIFIER_FIXUP_2882.z = _RESERVED_IDENTIFIER_FIXUP_1698.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1709 = _RESERVED_IDENTIFIER_FIXUP_2882.xyz + _RESERVED_IDENTIFIER_FIXUP_2882.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2888 = _RESERVED_IDENTIFIER_FIXUP_2882;
    _RESERVED_IDENTIFIER_FIXUP_2888.x = _RESERVED_IDENTIFIER_FIXUP_1709.x;
    _RESERVED_IDENTIFIER_FIXUP_2888.y = _RESERVED_IDENTIFIER_FIXUP_1709.y;
    _RESERVED_IDENTIFIER_FIXUP_2888.z = _RESERVED_IDENTIFIER_FIXUP_1709.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3274 = vec4(_RESERVED_IDENTIFIER_FIXUP_1676, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1734 = (_RESERVED_IDENTIFIER_FIXUP_3274.yzw * _RESERVED_IDENTIFIER_FIXUP_3274.xxx) + _RESERVED_IDENTIFIER_FIXUP_2888.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2900 = _RESERVED_IDENTIFIER_FIXUP_2888;
    _RESERVED_IDENTIFIER_FIXUP_2900.x = _RESERVED_IDENTIFIER_FIXUP_1734.x;
    _RESERVED_IDENTIFIER_FIXUP_2900.y = _RESERVED_IDENTIFIER_FIXUP_1734.y;
    _RESERVED_IDENTIFIER_FIXUP_2900.z = _RESERVED_IDENTIFIER_FIXUP_1734.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1747 = _RESERVED_IDENTIFIER_FIXUP_2900.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2906 = _RESERVED_IDENTIFIER_FIXUP_2900;
    _RESERVED_IDENTIFIER_FIXUP_2906.x = _RESERVED_IDENTIFIER_FIXUP_1747.x;
    _RESERVED_IDENTIFIER_FIXUP_2906.y = _RESERVED_IDENTIFIER_FIXUP_1747.y;
    _RESERVED_IDENTIFIER_FIXUP_2906.z = _RESERVED_IDENTIFIER_FIXUP_1747.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1800 = OptTex0( texcoord0.xyz);
    vec2 param_42 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1804 = hdTex1(param_42);
    vec2 param_43 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1808 = hdTex2(param_43);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1813 = mix(_RESERVED_IDENTIFIER_FIXUP_1800, _RESERVED_IDENTIFIER_FIXUP_1804, _RESERVED_IDENTIFIER_FIXUP_1808.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2922 = _RESERVED_IDENTIFIER_FIXUP_1800;
    _RESERVED_IDENTIFIER_FIXUP_2922.x = _RESERVED_IDENTIFIER_FIXUP_1050;
    float _RESERVED_IDENTIFIER_FIXUP_1826 = clamp((_RESERVED_IDENTIFIER_FIXUP_1050 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2922.x = _RESERVED_IDENTIFIER_FIXUP_1826;
    float _RESERVED_IDENTIFIER_FIXUP_1832 = ((-_RESERVED_IDENTIFIER_FIXUP_1826) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2922.y = _RESERVED_IDENTIFIER_FIXUP_1832;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3261;
    if (_RESERVED_IDENTIFIER_FIXUP_1832 != (-_RESERVED_IDENTIFIER_FIXUP_1832))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1844 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1854 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1856 = _RESERVED_IDENTIFIER_FIXUP_1854.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2935 = _RESERVED_IDENTIFIER_FIXUP_2922;
        _RESERVED_IDENTIFIER_FIXUP_2935.y = _RESERVED_IDENTIFIER_FIXUP_1856;
        _RESERVED_IDENTIFIER_FIXUP_2935.z = _RESERVED_IDENTIFIER_FIXUP_1854.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1864 = _RESERVED_IDENTIFIER_FIXUP_2935.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2939;
        _RESERVED_IDENTIFIER_FIXUP_2939.x = _RESERVED_IDENTIFIER_FIXUP_1864.x;
        _RESERVED_IDENTIFIER_FIXUP_2939.y = _RESERVED_IDENTIFIER_FIXUP_1864.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1871 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1875 = _RESERVED_IDENTIFIER_FIXUP_1871.y;
        _RESERVED_IDENTIFIER_FIXUP_2939.w = _RESERVED_IDENTIFIER_FIXUP_1875;
        vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_1844.xy;
        float param_45 = _RESERVED_IDENTIFIER_FIXUP_1844.w;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2939.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_1875;
        float _RESERVED_IDENTIFIER_FIXUP_1886 = hdLod5(param_44, param_45).x + hdLod5(param_46, param_47).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3276 = vec4(_RESERVED_IDENTIFIER_FIXUP_1826, _RESERVED_IDENTIFIER_FIXUP_1856, _RESERVED_IDENTIFIER_FIXUP_1854.y, _RESERVED_IDENTIFIER_FIXUP_1886);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1893 = _RESERVED_IDENTIFIER_FIXUP_3276.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2952;
        _RESERVED_IDENTIFIER_FIXUP_2952.x = _RESERVED_IDENTIFIER_FIXUP_1893.x;
        _RESERVED_IDENTIFIER_FIXUP_2952.y = _RESERVED_IDENTIFIER_FIXUP_1893.y;
        _RESERVED_IDENTIFIER_FIXUP_2952.w = _RESERVED_IDENTIFIER_FIXUP_1875;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2952.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1875;
        float _RESERVED_IDENTIFIER_FIXUP_1915 = _RESERVED_IDENTIFIER_FIXUP_1886 + hdLod5(param_48, param_49).x;
        _RESERVED_IDENTIFIER_FIXUP_3276.w = _RESERVED_IDENTIFIER_FIXUP_1915;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1922 = _RESERVED_IDENTIFIER_FIXUP_3276.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2965;
        _RESERVED_IDENTIFIER_FIXUP_2965.x = _RESERVED_IDENTIFIER_FIXUP_1922.x;
        _RESERVED_IDENTIFIER_FIXUP_2965.y = _RESERVED_IDENTIFIER_FIXUP_1922.y;
        _RESERVED_IDENTIFIER_FIXUP_2965.w = _RESERVED_IDENTIFIER_FIXUP_1875;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2965.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1875;
        float _RESERVED_IDENTIFIER_FIXUP_1944 = _RESERVED_IDENTIFIER_FIXUP_1915 + hdLod5(param_50, param_51).x;
        _RESERVED_IDENTIFIER_FIXUP_3276.w = _RESERVED_IDENTIFIER_FIXUP_1944;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1951 = _RESERVED_IDENTIFIER_FIXUP_3276.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2978;
        _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1951.x;
        _RESERVED_IDENTIFIER_FIXUP_2978.y = _RESERVED_IDENTIFIER_FIXUP_1951.y;
        _RESERVED_IDENTIFIER_FIXUP_2978.w = _RESERVED_IDENTIFIER_FIXUP_1875;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2978.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1875;
        float _RESERVED_IDENTIFIER_FIXUP_1973 = _RESERVED_IDENTIFIER_FIXUP_1944 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1973;
        float _RESERVED_IDENTIFIER_FIXUP_1978 = (_RESERVED_IDENTIFIER_FIXUP_1973 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1978;
        _RESERVED_IDENTIFIER_FIXUP_3276.x = (_RESERVED_IDENTIFIER_FIXUP_1826 * _RESERVED_IDENTIFIER_FIXUP_1978) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3261 = _RESERVED_IDENTIFIER_FIXUP_3276;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2932 = _RESERVED_IDENTIFIER_FIXUP_2922;
        _RESERVED_IDENTIFIER_FIXUP_2932.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3261 = _RESERVED_IDENTIFIER_FIXUP_2932;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3000 = _RESERVED_IDENTIFIER_FIXUP_3261;
    _RESERVED_IDENTIFIER_FIXUP_3000.y = _RESERVED_IDENTIFIER_FIXUP_1226;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3264;
    if (_RESERVED_IDENTIFIER_FIXUP_1226 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2005 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2015 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3140 = _RESERVED_IDENTIFIER_FIXUP_3000;
        _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_2015.x;
        _RESERVED_IDENTIFIER_FIXUP_3140.z = _RESERVED_IDENTIFIER_FIXUP_2015.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2025 = _RESERVED_IDENTIFIER_FIXUP_3140.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3144;
        _RESERVED_IDENTIFIER_FIXUP_3144.x = _RESERVED_IDENTIFIER_FIXUP_2025.x;
        _RESERVED_IDENTIFIER_FIXUP_3144.y = _RESERVED_IDENTIFIER_FIXUP_2025.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2032 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2036 = _RESERVED_IDENTIFIER_FIXUP_2032.y;
        _RESERVED_IDENTIFIER_FIXUP_3144.w = _RESERVED_IDENTIFIER_FIXUP_2036;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2005.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2005.w;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3144.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2036;
        float _RESERVED_IDENTIFIER_FIXUP_2047 = hdLod6(param_54, param_55).x + hdLod6(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3140.w = _RESERVED_IDENTIFIER_FIXUP_2047;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2054 = _RESERVED_IDENTIFIER_FIXUP_3140.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3157;
        _RESERVED_IDENTIFIER_FIXUP_3157.x = _RESERVED_IDENTIFIER_FIXUP_2054.x;
        _RESERVED_IDENTIFIER_FIXUP_3157.y = _RESERVED_IDENTIFIER_FIXUP_2054.y;
        _RESERVED_IDENTIFIER_FIXUP_3157.w = _RESERVED_IDENTIFIER_FIXUP_2036;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3157.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2036;
        float _RESERVED_IDENTIFIER_FIXUP_2076 = _RESERVED_IDENTIFIER_FIXUP_2047 + hdLod6(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3140.w = _RESERVED_IDENTIFIER_FIXUP_2076;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2083 = _RESERVED_IDENTIFIER_FIXUP_3140.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3170;
        _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_2083.x;
        _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_2083.y;
        _RESERVED_IDENTIFIER_FIXUP_3170.w = _RESERVED_IDENTIFIER_FIXUP_2036;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3170.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2036;
        float _RESERVED_IDENTIFIER_FIXUP_2105 = _RESERVED_IDENTIFIER_FIXUP_2076 + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3140.w = _RESERVED_IDENTIFIER_FIXUP_2105;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2112 = _RESERVED_IDENTIFIER_FIXUP_3140.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3183;
        _RESERVED_IDENTIFIER_FIXUP_3183.x = _RESERVED_IDENTIFIER_FIXUP_2112.x;
        _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_2112.y;
        _RESERVED_IDENTIFIER_FIXUP_3183.w = _RESERVED_IDENTIFIER_FIXUP_2036;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3183.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2036;
        float _RESERVED_IDENTIFIER_FIXUP_2134 = _RESERVED_IDENTIFIER_FIXUP_2105 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_2134;
        _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_2134 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3264 = _RESERVED_IDENTIFIER_FIXUP_3140;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2147 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3005 = _RESERVED_IDENTIFIER_FIXUP_3000;
        _RESERVED_IDENTIFIER_FIXUP_3005.z = _RESERVED_IDENTIFIER_FIXUP_2147;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3265;
        if (_RESERVED_IDENTIFIER_FIXUP_2147 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2156 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2166 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3080 = _RESERVED_IDENTIFIER_FIXUP_3005;
            _RESERVED_IDENTIFIER_FIXUP_3080.z = _RESERVED_IDENTIFIER_FIXUP_2166.x;
            _RESERVED_IDENTIFIER_FIXUP_3080.w = _RESERVED_IDENTIFIER_FIXUP_2166.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2176 = _RESERVED_IDENTIFIER_FIXUP_3080.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3084;
            _RESERVED_IDENTIFIER_FIXUP_3084.x = _RESERVED_IDENTIFIER_FIXUP_2176.x;
            _RESERVED_IDENTIFIER_FIXUP_3084.y = _RESERVED_IDENTIFIER_FIXUP_2176.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2183 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2187 = _RESERVED_IDENTIFIER_FIXUP_2183.y;
            _RESERVED_IDENTIFIER_FIXUP_3084.w = _RESERVED_IDENTIFIER_FIXUP_2187;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2205 = _RESERVED_IDENTIFIER_FIXUP_3080.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3097;
            _RESERVED_IDENTIFIER_FIXUP_3097.x = _RESERVED_IDENTIFIER_FIXUP_2205.x;
            _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_2205.y;
            _RESERVED_IDENTIFIER_FIXUP_3097.w = _RESERVED_IDENTIFIER_FIXUP_2187;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2234 = _RESERVED_IDENTIFIER_FIXUP_3080.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3110;
            _RESERVED_IDENTIFIER_FIXUP_3110.x = _RESERVED_IDENTIFIER_FIXUP_2234.x;
            _RESERVED_IDENTIFIER_FIXUP_3110.y = _RESERVED_IDENTIFIER_FIXUP_2234.y;
            _RESERVED_IDENTIFIER_FIXUP_3110.w = _RESERVED_IDENTIFIER_FIXUP_2187;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2263 = _RESERVED_IDENTIFIER_FIXUP_3080.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3123;
            _RESERVED_IDENTIFIER_FIXUP_3123.x = _RESERVED_IDENTIFIER_FIXUP_2263.x;
            _RESERVED_IDENTIFIER_FIXUP_3123.y = _RESERVED_IDENTIFIER_FIXUP_2263.y;
            _RESERVED_IDENTIFIER_FIXUP_3123.w = _RESERVED_IDENTIFIER_FIXUP_2187;
            vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_2156.xy;
            float param_65 = _RESERVED_IDENTIFIER_FIXUP_2156.w;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3084.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2187;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3097.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2187;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3110.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2187;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3123.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2187;
            float _RESERVED_IDENTIFIER_FIXUP_2285 = (((hdLod7(param_64, param_65).x + hdLod7(param_66, param_67).x) + hdLod7(param_68, param_69).x) + hdLod7(param_70, param_71).x) + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3080.z = _RESERVED_IDENTIFIER_FIXUP_2285;
            _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_2285 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3265 = _RESERVED_IDENTIFIER_FIXUP_3080;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3009 = _RESERVED_IDENTIFIER_FIXUP_3005;
            _RESERVED_IDENTIFIER_FIXUP_3009.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3009.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2301 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2305 = _RESERVED_IDENTIFIER_FIXUP_2301.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3277 = vec4(_RESERVED_IDENTIFIER_FIXUP_2301.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2305);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2316 = _RESERVED_IDENTIFIER_FIXUP_3277.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3278 = vec4(_RESERVED_IDENTIFIER_FIXUP_2316 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2305);
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2316;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2305;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3278.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2305;
            float _RESERVED_IDENTIFIER_FIXUP_2346 = hdLod8(param_74, param_75).x + hdLod8(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3036 = _RESERVED_IDENTIFIER_FIXUP_3277;
            _RESERVED_IDENTIFIER_FIXUP_3036.z = _RESERVED_IDENTIFIER_FIXUP_2346;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2353 = _RESERVED_IDENTIFIER_FIXUP_3036.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3038 = _RESERVED_IDENTIFIER_FIXUP_3278;
            _RESERVED_IDENTIFIER_FIXUP_3038.x = _RESERVED_IDENTIFIER_FIXUP_2353.x;
            _RESERVED_IDENTIFIER_FIXUP_3038.y = _RESERVED_IDENTIFIER_FIXUP_2353.y;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3038.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2305;
            float _RESERVED_IDENTIFIER_FIXUP_2368 = _RESERVED_IDENTIFIER_FIXUP_2346 + hdLod8(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3036.z = _RESERVED_IDENTIFIER_FIXUP_2368;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2375 = _RESERVED_IDENTIFIER_FIXUP_3036.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3047 = _RESERVED_IDENTIFIER_FIXUP_3038;
            _RESERVED_IDENTIFIER_FIXUP_3047.x = _RESERVED_IDENTIFIER_FIXUP_2375.x;
            _RESERVED_IDENTIFIER_FIXUP_3047.y = _RESERVED_IDENTIFIER_FIXUP_2375.y;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3047.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2305;
            float _RESERVED_IDENTIFIER_FIXUP_2390 = _RESERVED_IDENTIFIER_FIXUP_2368 + hdLod8(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3036.z = _RESERVED_IDENTIFIER_FIXUP_2390;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2397 = _RESERVED_IDENTIFIER_FIXUP_3036.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3056 = _RESERVED_IDENTIFIER_FIXUP_3047;
            _RESERVED_IDENTIFIER_FIXUP_3056.x = _RESERVED_IDENTIFIER_FIXUP_2397.x;
            _RESERVED_IDENTIFIER_FIXUP_3056.y = _RESERVED_IDENTIFIER_FIXUP_2397.y;
            float _RESERVED_IDENTIFIER_FIXUP_2426 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3009.z = _RESERVED_IDENTIFIER_FIXUP_2426;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3056.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2305;
            float _RESERVED_IDENTIFIER_FIXUP_2431 = ((_RESERVED_IDENTIFIER_FIXUP_2390 + hdLod8(param_82, param_83).x) * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3009.w = _RESERVED_IDENTIFIER_FIXUP_2431;
            _RESERVED_IDENTIFIER_FIXUP_3009.y = (_RESERVED_IDENTIFIER_FIXUP_2426 * _RESERVED_IDENTIFIER_FIXUP_2431) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3265 = _RESERVED_IDENTIFIER_FIXUP_3009;
        }
        _RESERVED_IDENTIFIER_FIXUP_3264 = _RESERVED_IDENTIFIER_FIXUP_3265;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2446 = min(_RESERVED_IDENTIFIER_FIXUP_3264.y, _RESERVED_IDENTIFIER_FIXUP_3264.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3204 = _RESERVED_IDENTIFIER_FIXUP_3264;
    _RESERVED_IDENTIFIER_FIXUP_3204.x = (_RESERVED_IDENTIFIER_FIXUP_2446 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2457 = _RESERVED_IDENTIFIER_FIXUP_1813.xyz * _RESERVED_IDENTIFIER_FIXUP_3204.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3206 = _RESERVED_IDENTIFIER_FIXUP_3204;
    _RESERVED_IDENTIFIER_FIXUP_3206.x = _RESERVED_IDENTIFIER_FIXUP_2457.x;
    _RESERVED_IDENTIFIER_FIXUP_3206.y = _RESERVED_IDENTIFIER_FIXUP_2457.y;
    _RESERVED_IDENTIFIER_FIXUP_3206.z = _RESERVED_IDENTIFIER_FIXUP_2457.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2468 = _RESERVED_IDENTIFIER_FIXUP_3206.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3212 = _RESERVED_IDENTIFIER_FIXUP_3206;
    _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_2468.x;
    _RESERVED_IDENTIFIER_FIXUP_3212.y = _RESERVED_IDENTIFIER_FIXUP_2468.y;
    _RESERVED_IDENTIFIER_FIXUP_3212.z = _RESERVED_IDENTIFIER_FIXUP_2468.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2479 = _RESERVED_IDENTIFIER_FIXUP_3212.xyz + _RESERVED_IDENTIFIER_FIXUP_3212.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3218 = _RESERVED_IDENTIFIER_FIXUP_3212;
    _RESERVED_IDENTIFIER_FIXUP_3218.x = _RESERVED_IDENTIFIER_FIXUP_2479.x;
    _RESERVED_IDENTIFIER_FIXUP_3218.y = _RESERVED_IDENTIFIER_FIXUP_2479.y;
    _RESERVED_IDENTIFIER_FIXUP_3218.z = _RESERVED_IDENTIFIER_FIXUP_2479.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3279 = vec4(_RESERVED_IDENTIFIER_FIXUP_2446, _RESERVED_IDENTIFIER_FIXUP_1813.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2504 = (_RESERVED_IDENTIFIER_FIXUP_3279.yzw * _RESERVED_IDENTIFIER_FIXUP_3279.xxx) + _RESERVED_IDENTIFIER_FIXUP_3218.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3230 = _RESERVED_IDENTIFIER_FIXUP_3218;
    _RESERVED_IDENTIFIER_FIXUP_3230.x = _RESERVED_IDENTIFIER_FIXUP_2504.x;
    _RESERVED_IDENTIFIER_FIXUP_3230.y = _RESERVED_IDENTIFIER_FIXUP_2504.y;
    _RESERVED_IDENTIFIER_FIXUP_3230.z = _RESERVED_IDENTIFIER_FIXUP_2504.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2517 = _RESERVED_IDENTIFIER_FIXUP_3230.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3236 = _RESERVED_IDENTIFIER_FIXUP_3230;
    _RESERVED_IDENTIFIER_FIXUP_3236.x = _RESERVED_IDENTIFIER_FIXUP_2517.x;
    _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_2517.y;
    _RESERVED_IDENTIFIER_FIXUP_3236.z = _RESERVED_IDENTIFIER_FIXUP_2517.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3236.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_891 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_900;
    if (_RESERVED_IDENTIFIER_FIXUP_891)
    {
        _RESERVED_IDENTIFIER_FIXUP_900 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_900 = _RESERVED_IDENTIFIER_FIXUP_891;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_900)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_937 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2906.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_964 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2582;
    if (_RESERVED_IDENTIFIER_FIXUP_937 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2582 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_937), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_964);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2582 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_964);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2582;
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
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r1.xy;
        float param_3 = r1.w;
        r1 = hdLod5(param_2, param_3);
        vec2 hdB129 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB129.x;
        r0.z = hdB129.y;
        vec2 hdB151 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB151.x;
        r2.y = hdB151.y;
        vec2 hdB159 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB159.x;
        r2.w = hdB159.y;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r0.w = r1.x + r2.x;
        vec2 hdB182 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB182.x;
        r1.y = hdB182.y;
        vec2 hdB189 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB189.x;
        r1.w = hdB189.y;
        vec2 param_6 = r1.xy;
        float param_7 = r1.w;
        r1 = hdLod5(param_6, param_7);
        r0.w += r1.x;
        vec2 hdB212 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB212.x;
        r1.y = hdB212.y;
        vec2 hdB219 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB219.x;
        r1.w = hdB219.y;
        vec2 param_8 = r1.xy;
        float param_9 = r1.w;
        r1 = hdLod5(param_8, param_9);
        r0.w += r1.x;
        vec2 hdB242 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB242.x;
        r1.y = hdB242.y;
        vec2 hdB249 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB249.x;
        r1.w = hdB249.y;
        vec2 param_10 = r1.xy;
        float param_11 = r1.w;
        r1 = hdLod5(param_10, param_11);
        r0.y = r0.w + r1.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v5.x), abs(v5.y));
    if (r0.y < 1.0)
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = r1.xy;
        float param_13 = r1.w;
        r1 = hdLod6(param_12, param_13);
        vec2 hdB309 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB309.x;
        r0.z = hdB309.y;
        vec2 hdB319 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB319.x;
        r2.y = hdB319.y;
        vec2 hdB326 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB326.x;
        r2.w = hdB326.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        r0.w = r1.x + r2.x;
        vec2 hdB348 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB348.x;
        r1.y = hdB348.y;
        vec2 hdB355 = vec2(1.0, 0.0) * v5.zx;
        r1.z = hdB355.x;
        r1.w = hdB355.y;
        vec2 param_16 = r1.xy;
        float param_17 = r1.w;
        r1 = hdLod6(param_16, param_17);
        r0.w += r1.x;
        vec2 hdB377 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB377.x;
        r1.y = hdB377.y;
        vec2 hdB384 = vec2(1.0, 0.0) * v5.zx;
        r1.z = hdB384.x;
        r1.w = hdB384.y;
        vec2 param_18 = r1.xy;
        float param_19 = r1.w;
        r1 = hdLod6(param_18, param_19);
        r0.w += r1.x;
        vec2 hdB406 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB406.x;
        r1.y = hdB406.y;
        vec2 hdB413 = vec2(1.0, 0.0) * v5.zx;
        r1.z = hdB413.x;
        r1.w = hdB413.y;
        vec2 param_20 = r1.xy;
        float param_21 = r1.w;
        r1 = hdLod6(param_20, param_21);
        r0.y = r0.w + r1.x;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v6.x), abs(v6.y));
        if (r0.z < 1.0)
        {
            r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r1.xy;
            float param_23 = r1.w;
            r1 = hdLod7(param_22, param_23);
            vec2 hdB462 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB462.x;
            r0.w = hdB462.y;
            vec2 hdB472 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB472.x;
            r2.y = hdB472.y;
            vec2 hdB479 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB479.x;
            r2.w = hdB479.y;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            r1.x += r2.x;
            vec2 hdB501 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB501.x;
            r2.y = hdB501.y;
            vec2 hdB508 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB508.x;
            r2.w = hdB508.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod7(param_26, param_27);
            r1.x += r2.x;
            vec2 hdB530 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB530.x;
            r2.y = hdB530.y;
            vec2 hdB537 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB537.x;
            r2.w = hdB537.y;
            vec2 param_28 = r2.xy;
            float param_29 = r2.w;
            r2 = hdLod7(param_28, param_29);
            r1.x += r2.x;
            vec2 hdB559 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB559.x;
            r2.y = hdB559.y;
            vec2 hdB566 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB566.x;
            r2.w = hdB566.y;
            vec2 param_30 = r2.xy;
            float param_31 = r2.w;
            r2 = hdLod7(param_30, param_31);
            r0.z = r1.x + r2.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v4.w;
            r0.w = v5.w;
            vec2 hdB598 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = hdB598.x;
            r1.w = hdB598.y;
            r1.y = (v5.w * 0.5) + 0.5;
            r1.z = v6.w;
            vec2 param_32 = r1.xy;
            float param_33 = r1.w;
            r2 = hdLod8(param_32, param_33);
            vec2 hdB623 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB623.x;
            r4.y = hdB623.y;
            r4.z = r1.z;
            r4.w = r1.w;
            vec2 param_34 = r4.xy;
            float param_35 = r4.w;
            r5 = hdLod8(param_34, param_35);
            r1.z = r2.x + r5.x;
            vec2 hdB651 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB651.x;
            r4.y = hdB651.y;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r2 = hdLod8(param_36, param_37);
            r1.z += r2.x;
            vec2 hdB673 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB673.x;
            r4.y = hdB673.y;
            vec2 param_38 = r4.xy;
            float param_39 = r4.w;
            r2 = hdLod8(param_38, param_39);
            r1.z += r2.x;
            vec2 hdB695 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB695.x;
            r4.y = hdB695.y;
            vec2 param_40 = r4.xy;
            float param_41 = r4.w;
            r2 = hdLod8(param_40, param_41);
            r1.x = r1.z + r2.x;
            r1.y = max(abs(r0.z), abs(r0.w));
            r0.z = clamp((r1.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.w = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.z * r0.w) + 1.0;
        }
    }
    r1.x = min(r0.y, r0.x);
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB755 = r0;
    vec3 hdB757 = r3.xyz * hdB755.xxx;
    r0.x = hdB757.x;
    r0.y = hdB757.y;
    r0.z = hdB757.z;
    vec4 hdB764 = r0;
    vec3 hdB768 = hdB764.xyz * v0.xyz;
    r0.x = hdB768.x;
    r0.y = hdB768.y;
    r0.z = hdB768.z;
    vec4 hdB775 = r0;
    vec4 hdB777 = r0;
    vec3 hdB779 = hdB775.xyz + hdB777.xyz;
    r0.x = hdB779.x;
    r0.y = hdB779.y;
    r0.z = hdB779.z;
    vec3 hdB790 = r3.www * v1.xyz;
    r1.y = hdB790.x;
    r1.z = hdB790.y;
    r1.w = hdB790.z;
    vec4 hdB802 = r0;
    vec3 hdB804 = (r1.yzw * r1.xxx) + hdB802.xyz;
    r0.x = hdB804.x;
    r0.y = hdB804.y;
    r0.z = hdB804.z;
    vec4 hdB811 = r0;
    vec3 hdB818 = hdB811.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB818.x;
    r0.y = hdB818.y;
    r0.z = hdB818.z;
    vec3 hdB833 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB833.x;
    oC0.y = hdB833.y;
    oC0.z = hdB833.z;
    oC0.w = 1.0;
    bool hdB846 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB854;
    if (hdB846)
    {
        hdB854 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB854 = hdB846;
    }
    if (hdB854)
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
    bool _2982 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _2992;
    if (_2982)
    {
        _2992 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _2992 = _2982;
    }
    if (_2992)
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
        bool _3017 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3032;
        if (!_3017)
        {
            _3032 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3032 = _3017;
        }
        if (_3032)
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
