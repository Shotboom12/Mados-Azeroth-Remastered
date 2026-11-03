#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3487;
vec4 _RESERVED_IDENTIFIER_FIXUP_3488;


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
    bool _61 = hdOverride >= 0;
    bool _80;
    if (_61)
    {
        _80 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _80 = _61;
    }
    vec4 _81;
    if (_80)
    {
        _81 = vec4(float(hdOverride));
    }
    else
    {
        _81 = value;
    }
    return _81;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _98 = hdOverride >= 0;
    bool _108;
    if (_98)
    {
        _108 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _108 = _98;
    }
    vec4 _109;
    if (_108)
    {
        _109 = vec4(float(hdOverride));
    }
    else
    {
        _109 = value;
    }
    return _109;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _126 = hdOverride >= 0;
    bool _136;
    if (_126)
    {
        _136 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _136 = _126;
    }
    vec4 _137;
    if (_136)
    {
        _137 = vec4(float(hdOverride));
    }
    else
    {
        _137 = value;
    }
    return _137;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _155 = hdOverride >= 0;
    bool _165;
    if (_155)
    {
        _165 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _165 = _155;
    }
    vec4 _166;
    if (_165)
    {
        _166 = vec4(float(hdOverride));
    }
    else
    {
        _166 = value;
    }
    return _166;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _184 = hdOverride >= 0;
    bool _194;
    if (_184)
    {
        _194 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _194 = _184;
    }
    vec4 _195;
    if (_194)
    {
        _195 = vec4(float(hdOverride));
    }
    else
    {
        _195 = value;
    }
    return _195;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _213 = hdOverride >= 0;
    bool _223;
    if (_213)
    {
        _223 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _223 = _213;
    }
    vec4 _224;
    if (_223)
    {
        _224 = vec4(float(hdOverride));
    }
    else
    {
        _224 = value;
    }
    return _224;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _242 = hdOverride >= 0;
    bool _252;
    if (_242)
    {
        _252 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _252 = _242;
    }
    vec4 _253;
    if (_252)
    {
        _253 = vec4(float(hdOverride));
    }
    else
    {
        _253 = value;
    }
    return _253;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1091 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1095 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1099 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1103 = hdTex3(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1107 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1103.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2750 = _RESERVED_IDENTIFIER_FIXUP_1103;
    _RESERVED_IDENTIFIER_FIXUP_2750.z = _RESERVED_IDENTIFIER_FIXUP_1107;
    _RESERVED_IDENTIFIER_FIXUP_2750.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1107;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1095 * _RESERVED_IDENTIFIER_FIXUP_2750.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1129 = (_RESERVED_IDENTIFIER_FIXUP_1099 * _RESERVED_IDENTIFIER_FIXUP_2750.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1091 * _RESERVED_IDENTIFIER_FIXUP_2750.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1117);
    float _RESERVED_IDENTIFIER_FIXUP_1136 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2757 = _RESERVED_IDENTIFIER_FIXUP_1117;
    _RESERVED_IDENTIFIER_FIXUP_2757.x = _RESERVED_IDENTIFIER_FIXUP_1136;
    float _RESERVED_IDENTIFIER_FIXUP_1142 = clamp((_RESERVED_IDENTIFIER_FIXUP_1136 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2757.x = _RESERVED_IDENTIFIER_FIXUP_1142;
    float _RESERVED_IDENTIFIER_FIXUP_1148 = ((-_RESERVED_IDENTIFIER_FIXUP_1142) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2757.y = _RESERVED_IDENTIFIER_FIXUP_1148;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3490;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3489;
    if (_RESERVED_IDENTIFIER_FIXUP_1148 != (-_RESERVED_IDENTIFIER_FIXUP_1148))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1160 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2769 = _RESERVED_IDENTIFIER_FIXUP_2757;
        _RESERVED_IDENTIFIER_FIXUP_2769.y = _RESERVED_IDENTIFIER_FIXUP_1160.x;
        _RESERVED_IDENTIFIER_FIXUP_2769.z = _RESERVED_IDENTIFIER_FIXUP_1160.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1170 = _RESERVED_IDENTIFIER_FIXUP_2769.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2773;
        _RESERVED_IDENTIFIER_FIXUP_2773.x = _RESERVED_IDENTIFIER_FIXUP_1170.x;
        _RESERVED_IDENTIFIER_FIXUP_2773.y = _RESERVED_IDENTIFIER_FIXUP_1170.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_2769.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2777;
        _RESERVED_IDENTIFIER_FIXUP_2777.x = _RESERVED_IDENTIFIER_FIXUP_1180.x;
        _RESERVED_IDENTIFIER_FIXUP_2777.y = _RESERVED_IDENTIFIER_FIXUP_1180.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1190 = _RESERVED_IDENTIFIER_FIXUP_2769.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2781;
        _RESERVED_IDENTIFIER_FIXUP_2781.x = _RESERVED_IDENTIFIER_FIXUP_1190.x;
        _RESERVED_IDENTIFIER_FIXUP_2781.y = _RESERVED_IDENTIFIER_FIXUP_1190.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_2769.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2785;
        _RESERVED_IDENTIFIER_FIXUP_2785.x = _RESERVED_IDENTIFIER_FIXUP_1200.x;
        _RESERVED_IDENTIFIER_FIXUP_2785.y = _RESERVED_IDENTIFIER_FIXUP_1200.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1208 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1208.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1208.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1214 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_2773.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2777.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2781.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2785.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2773.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1214.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2777.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1214.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2781.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1214.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1271 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1214 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2785.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1277 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2769.y = _RESERVED_IDENTIFIER_FIXUP_1277;
        float _RESERVED_IDENTIFIER_FIXUP_1282 = float(_RESERVED_IDENTIFIER_FIXUP_1277 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2769.y = _RESERVED_IDENTIFIER_FIXUP_1282;
        float _RESERVED_IDENTIFIER_FIXUP_1285 = dot(_RESERVED_IDENTIFIER_FIXUP_1271, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2769.z = _RESERVED_IDENTIFIER_FIXUP_1285;
        float _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_1282 + _RESERVED_IDENTIFIER_FIXUP_1285;
        _RESERVED_IDENTIFIER_FIXUP_2769.y = _RESERVED_IDENTIFIER_FIXUP_1291;
        float _RESERVED_IDENTIFIER_FIXUP_1296 = (_RESERVED_IDENTIFIER_FIXUP_1291 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2769.y = _RESERVED_IDENTIFIER_FIXUP_1296;
        _RESERVED_IDENTIFIER_FIXUP_2769.x = (_RESERVED_IDENTIFIER_FIXUP_1142 * _RESERVED_IDENTIFIER_FIXUP_1296) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3490 = _RESERVED_IDENTIFIER_FIXUP_1271;
        _RESERVED_IDENTIFIER_FIXUP_3489 = _RESERVED_IDENTIFIER_FIXUP_2769;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2767 = _RESERVED_IDENTIFIER_FIXUP_2757;
        _RESERVED_IDENTIFIER_FIXUP_2767.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3490 = _RESERVED_IDENTIFIER_FIXUP_1099;
        _RESERVED_IDENTIFIER_FIXUP_3489 = _RESERVED_IDENTIFIER_FIXUP_2767;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1314 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2841 = _RESERVED_IDENTIFIER_FIXUP_3489;
    _RESERVED_IDENTIFIER_FIXUP_2841.y = _RESERVED_IDENTIFIER_FIXUP_1314;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3493;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3491;
    if (_RESERVED_IDENTIFIER_FIXUP_1314 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1323 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3002 = _RESERVED_IDENTIFIER_FIXUP_2841;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1323.x;
        _RESERVED_IDENTIFIER_FIXUP_3002.z = _RESERVED_IDENTIFIER_FIXUP_1323.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1333 = _RESERVED_IDENTIFIER_FIXUP_3002.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3006;
        _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1333.x;
        _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1333.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1343 = _RESERVED_IDENTIFIER_FIXUP_3002.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3010;
        _RESERVED_IDENTIFIER_FIXUP_3010.x = _RESERVED_IDENTIFIER_FIXUP_1343.x;
        _RESERVED_IDENTIFIER_FIXUP_3010.y = _RESERVED_IDENTIFIER_FIXUP_1343.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1353 = _RESERVED_IDENTIFIER_FIXUP_3002.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3014;
        _RESERVED_IDENTIFIER_FIXUP_3014.x = _RESERVED_IDENTIFIER_FIXUP_1353.x;
        _RESERVED_IDENTIFIER_FIXUP_3014.y = _RESERVED_IDENTIFIER_FIXUP_1353.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1363 = _RESERVED_IDENTIFIER_FIXUP_3002.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3018;
        _RESERVED_IDENTIFIER_FIXUP_3018.x = _RESERVED_IDENTIFIER_FIXUP_1363.x;
        _RESERVED_IDENTIFIER_FIXUP_3018.y = _RESERVED_IDENTIFIER_FIXUP_1363.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1371 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1371.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1371.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1377 = hdLod6(param_13, param_14);
        _RESERVED_IDENTIFIER_FIXUP_3006.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3010.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3014.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3018.w = 0.0;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3006.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1377.y = hdLod6(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3010.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1377.z = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3014.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1377.w = hdLod6(param_19, param_20).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1434 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1377 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3018.xy;
        float param_22 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1440 = hdLod6(param_21, param_22).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1440;
        float _RESERVED_IDENTIFIER_FIXUP_1445 = float(_RESERVED_IDENTIFIER_FIXUP_1440 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1445;
        float _RESERVED_IDENTIFIER_FIXUP_1448 = dot(_RESERVED_IDENTIFIER_FIXUP_1434, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3002.z = _RESERVED_IDENTIFIER_FIXUP_1448;
        float _RESERVED_IDENTIFIER_FIXUP_1454 = _RESERVED_IDENTIFIER_FIXUP_1445 + _RESERVED_IDENTIFIER_FIXUP_1448;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1454;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1454 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3493 = _RESERVED_IDENTIFIER_FIXUP_1434;
        _RESERVED_IDENTIFIER_FIXUP_3491 = _RESERVED_IDENTIFIER_FIXUP_3002;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1467 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2846 = _RESERVED_IDENTIFIER_FIXUP_2841;
        _RESERVED_IDENTIFIER_FIXUP_2846.z = _RESERVED_IDENTIFIER_FIXUP_1467;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3494;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3492;
        if (_RESERVED_IDENTIFIER_FIXUP_1467 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1476 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2936 = _RESERVED_IDENTIFIER_FIXUP_2846;
            _RESERVED_IDENTIFIER_FIXUP_2936.z = _RESERVED_IDENTIFIER_FIXUP_1476.x;
            _RESERVED_IDENTIFIER_FIXUP_2936.w = _RESERVED_IDENTIFIER_FIXUP_1476.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1486 = _RESERVED_IDENTIFIER_FIXUP_2936.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2940;
            _RESERVED_IDENTIFIER_FIXUP_2940.x = _RESERVED_IDENTIFIER_FIXUP_1486.x;
            _RESERVED_IDENTIFIER_FIXUP_2940.y = _RESERVED_IDENTIFIER_FIXUP_1486.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_2936.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2944;
            _RESERVED_IDENTIFIER_FIXUP_2944.x = _RESERVED_IDENTIFIER_FIXUP_1496.x;
            _RESERVED_IDENTIFIER_FIXUP_2944.y = _RESERVED_IDENTIFIER_FIXUP_1496.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_2936.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2948;
            _RESERVED_IDENTIFIER_FIXUP_2948.x = _RESERVED_IDENTIFIER_FIXUP_1506.x;
            _RESERVED_IDENTIFIER_FIXUP_2948.y = _RESERVED_IDENTIFIER_FIXUP_1506.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_2936.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2952;
            _RESERVED_IDENTIFIER_FIXUP_2952.x = _RESERVED_IDENTIFIER_FIXUP_1516.x;
            _RESERVED_IDENTIFIER_FIXUP_2952.y = _RESERVED_IDENTIFIER_FIXUP_1516.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1524 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1524.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1524.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1530 = hdLod7(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_2940.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2944.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2948.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2952.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_2940.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1530.y = hdLod7(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2944.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1530.z = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2948.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1530.w = hdLod7(param_29, param_30).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1587 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1530 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2952.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1593 = hdLod7(param_31, param_32).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2936.z = _RESERVED_IDENTIFIER_FIXUP_1593;
            float _RESERVED_IDENTIFIER_FIXUP_1598 = float(_RESERVED_IDENTIFIER_FIXUP_1593 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2936.z = _RESERVED_IDENTIFIER_FIXUP_1598;
            float _RESERVED_IDENTIFIER_FIXUP_1601 = dot(_RESERVED_IDENTIFIER_FIXUP_1587, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2936.w = _RESERVED_IDENTIFIER_FIXUP_1601;
            float _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_1598 + _RESERVED_IDENTIFIER_FIXUP_1601;
            _RESERVED_IDENTIFIER_FIXUP_2936.z = _RESERVED_IDENTIFIER_FIXUP_1607;
            _RESERVED_IDENTIFIER_FIXUP_2936.y = _RESERVED_IDENTIFIER_FIXUP_1607 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3494 = _RESERVED_IDENTIFIER_FIXUP_1587;
            _RESERVED_IDENTIFIER_FIXUP_3492 = _RESERVED_IDENTIFIER_FIXUP_2936;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2850 = _RESERVED_IDENTIFIER_FIXUP_3490;
            _RESERVED_IDENTIFIER_FIXUP_2850.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2850.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1623 = (_RESERVED_IDENTIFIER_FIXUP_2850.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2855;
            _RESERVED_IDENTIFIER_FIXUP_2855.x = _RESERVED_IDENTIFIER_FIXUP_1623.x;
            _RESERVED_IDENTIFIER_FIXUP_2855.y = _RESERVED_IDENTIFIER_FIXUP_1623.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1633 = _RESERVED_IDENTIFIER_FIXUP_2855.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2859;
            _RESERVED_IDENTIFIER_FIXUP_2859.x = _RESERVED_IDENTIFIER_FIXUP_1633.x;
            _RESERVED_IDENTIFIER_FIXUP_2859.y = _RESERVED_IDENTIFIER_FIXUP_1633.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1643 = _RESERVED_IDENTIFIER_FIXUP_2855.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2863;
            _RESERVED_IDENTIFIER_FIXUP_2863.x = _RESERVED_IDENTIFIER_FIXUP_1643.x;
            _RESERVED_IDENTIFIER_FIXUP_2863.y = _RESERVED_IDENTIFIER_FIXUP_1643.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1653 = _RESERVED_IDENTIFIER_FIXUP_2855.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2867;
            _RESERVED_IDENTIFIER_FIXUP_2867.x = _RESERVED_IDENTIFIER_FIXUP_1653.x;
            _RESERVED_IDENTIFIER_FIXUP_2867.y = _RESERVED_IDENTIFIER_FIXUP_1653.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1663 = _RESERVED_IDENTIFIER_FIXUP_2855.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2871;
            _RESERVED_IDENTIFIER_FIXUP_2871.x = _RESERVED_IDENTIFIER_FIXUP_1663.x;
            _RESERVED_IDENTIFIER_FIXUP_2871.y = _RESERVED_IDENTIFIER_FIXUP_1663.y;
            _RESERVED_IDENTIFIER_FIXUP_2855.w = 0.0;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2855.xy;
            float param_34 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1677 = hdLod8(param_33, param_34);
            _RESERVED_IDENTIFIER_FIXUP_2859.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2863.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2867.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2871.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_2859.xy;
            float param_36 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1677.y = hdLod8(param_35, param_36).x;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2863.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1677.z = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2867.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1677.w = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2871.xy;
            float param_42 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1740 = hdLod8(param_41, param_42).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2911 = _RESERVED_IDENTIFIER_FIXUP_2846;
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1740;
            float _RESERVED_IDENTIFIER_FIXUP_1745 = float(_RESERVED_IDENTIFIER_FIXUP_1740 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1745;
            float _RESERVED_IDENTIFIER_FIXUP_1748 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1677 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2911.w = _RESERVED_IDENTIFIER_FIXUP_1748;
            float _RESERVED_IDENTIFIER_FIXUP_1754 = _RESERVED_IDENTIFIER_FIXUP_1745 + _RESERVED_IDENTIFIER_FIXUP_1748;
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1754;
            float _RESERVED_IDENTIFIER_FIXUP_1762 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2911.w = _RESERVED_IDENTIFIER_FIXUP_1762;
            float _RESERVED_IDENTIFIER_FIXUP_1768 = clamp((_RESERVED_IDENTIFIER_FIXUP_1762 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2911.w = _RESERVED_IDENTIFIER_FIXUP_1768;
            float _RESERVED_IDENTIFIER_FIXUP_1773 = (_RESERVED_IDENTIFIER_FIXUP_1754 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1773;
            _RESERVED_IDENTIFIER_FIXUP_2911.y = (_RESERVED_IDENTIFIER_FIXUP_1768 * _RESERVED_IDENTIFIER_FIXUP_1773) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3494 = _RESERVED_IDENTIFIER_FIXUP_2850;
            _RESERVED_IDENTIFIER_FIXUP_3492 = _RESERVED_IDENTIFIER_FIXUP_2911;
        }
        _RESERVED_IDENTIFIER_FIXUP_3493 = _RESERVED_IDENTIFIER_FIXUP_3494;
        _RESERVED_IDENTIFIER_FIXUP_3491 = _RESERVED_IDENTIFIER_FIXUP_3492;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1788 = min(_RESERVED_IDENTIFIER_FIXUP_3491.y, _RESERVED_IDENTIFIER_FIXUP_3491.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3070 = _RESERVED_IDENTIFIER_FIXUP_3493;
    _RESERVED_IDENTIFIER_FIXUP_3070.x = _RESERVED_IDENTIFIER_FIXUP_1788;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3073 = _RESERVED_IDENTIFIER_FIXUP_3491;
    _RESERVED_IDENTIFIER_FIXUP_3073.x = (_RESERVED_IDENTIFIER_FIXUP_1788 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1799 = _RESERVED_IDENTIFIER_FIXUP_1129.xyz * _RESERVED_IDENTIFIER_FIXUP_3073.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3075 = _RESERVED_IDENTIFIER_FIXUP_1129;
    _RESERVED_IDENTIFIER_FIXUP_3075.x = _RESERVED_IDENTIFIER_FIXUP_1799.x;
    _RESERVED_IDENTIFIER_FIXUP_3075.y = _RESERVED_IDENTIFIER_FIXUP_1799.y;
    _RESERVED_IDENTIFIER_FIXUP_3075.z = _RESERVED_IDENTIFIER_FIXUP_1799.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1810 = _RESERVED_IDENTIFIER_FIXUP_3075.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3487).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3081 = _RESERVED_IDENTIFIER_FIXUP_3075;
    _RESERVED_IDENTIFIER_FIXUP_3081.x = _RESERVED_IDENTIFIER_FIXUP_1810.x;
    _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1810.y;
    _RESERVED_IDENTIFIER_FIXUP_3081.z = _RESERVED_IDENTIFIER_FIXUP_1810.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1821 = _RESERVED_IDENTIFIER_FIXUP_3081.xyz + _RESERVED_IDENTIFIER_FIXUP_3081.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3087 = _RESERVED_IDENTIFIER_FIXUP_3081;
    _RESERVED_IDENTIFIER_FIXUP_3087.x = _RESERVED_IDENTIFIER_FIXUP_1821.x;
    _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1821.y;
    _RESERVED_IDENTIFIER_FIXUP_3087.z = _RESERVED_IDENTIFIER_FIXUP_1821.z;
    _RESERVED_IDENTIFIER_FIXUP_3073.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3073.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3073.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1846 = (_RESERVED_IDENTIFIER_FIXUP_3073.xyz * _RESERVED_IDENTIFIER_FIXUP_3070.xxx) + _RESERVED_IDENTIFIER_FIXUP_3087.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3099 = _RESERVED_IDENTIFIER_FIXUP_3087;
    _RESERVED_IDENTIFIER_FIXUP_3099.x = _RESERVED_IDENTIFIER_FIXUP_1846.x;
    _RESERVED_IDENTIFIER_FIXUP_3099.y = _RESERVED_IDENTIFIER_FIXUP_1846.y;
    _RESERVED_IDENTIFIER_FIXUP_3099.z = _RESERVED_IDENTIFIER_FIXUP_1846.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1859 = _RESERVED_IDENTIFIER_FIXUP_3099.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3105 = _RESERVED_IDENTIFIER_FIXUP_3099;
    _RESERVED_IDENTIFIER_FIXUP_3105.x = _RESERVED_IDENTIFIER_FIXUP_1859.x;
    _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_1859.y;
    _RESERVED_IDENTIFIER_FIXUP_3105.z = _RESERVED_IDENTIFIER_FIXUP_1859.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1916 = OptTex0( texcoord0.xyz);
    vec2 param_43 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1920 = hdTex1(param_43);
    vec2 param_44 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1924 = hdTex2(param_44);
    vec2 param_45 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1928 = hdTex3(param_45);
    float _RESERVED_IDENTIFIER_FIXUP_1932 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1928.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3119 = _RESERVED_IDENTIFIER_FIXUP_1928;
    _RESERVED_IDENTIFIER_FIXUP_3119.z = _RESERVED_IDENTIFIER_FIXUP_1932;
    _RESERVED_IDENTIFIER_FIXUP_3119.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1932;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1942 = _RESERVED_IDENTIFIER_FIXUP_1920 * _RESERVED_IDENTIFIER_FIXUP_3119.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1954 = (_RESERVED_IDENTIFIER_FIXUP_1924 * _RESERVED_IDENTIFIER_FIXUP_3119.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1916 * _RESERVED_IDENTIFIER_FIXUP_3119.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1942);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3126 = _RESERVED_IDENTIFIER_FIXUP_1942;
    _RESERVED_IDENTIFIER_FIXUP_3126.x = _RESERVED_IDENTIFIER_FIXUP_1136;
    float _RESERVED_IDENTIFIER_FIXUP_1967 = clamp((_RESERVED_IDENTIFIER_FIXUP_1136 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3126.x = _RESERVED_IDENTIFIER_FIXUP_1967;
    float _RESERVED_IDENTIFIER_FIXUP_1973 = ((-_RESERVED_IDENTIFIER_FIXUP_1967) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3126.y = _RESERVED_IDENTIFIER_FIXUP_1973;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3502;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3501;
    if (_RESERVED_IDENTIFIER_FIXUP_1973 != (-_RESERVED_IDENTIFIER_FIXUP_1973))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1985 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3138 = _RESERVED_IDENTIFIER_FIXUP_3126;
        _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_1985.x;
        _RESERVED_IDENTIFIER_FIXUP_3138.z = _RESERVED_IDENTIFIER_FIXUP_1985.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1995 = _RESERVED_IDENTIFIER_FIXUP_3138.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3142;
        _RESERVED_IDENTIFIER_FIXUP_3142.x = _RESERVED_IDENTIFIER_FIXUP_1995.x;
        _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1995.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2005 = _RESERVED_IDENTIFIER_FIXUP_3138.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3146;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_2005.x;
        _RESERVED_IDENTIFIER_FIXUP_3146.y = _RESERVED_IDENTIFIER_FIXUP_2005.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2015 = _RESERVED_IDENTIFIER_FIXUP_3138.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3150;
        _RESERVED_IDENTIFIER_FIXUP_3150.x = _RESERVED_IDENTIFIER_FIXUP_2015.x;
        _RESERVED_IDENTIFIER_FIXUP_3150.y = _RESERVED_IDENTIFIER_FIXUP_2015.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2025 = _RESERVED_IDENTIFIER_FIXUP_3138.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3154;
        _RESERVED_IDENTIFIER_FIXUP_3154.x = _RESERVED_IDENTIFIER_FIXUP_2025.x;
        _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_2025.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2033 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2033.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_2033.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2039 = hdLod5(param_46, param_47);
        _RESERVED_IDENTIFIER_FIXUP_3142.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3146.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3150.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3154.w = 0.0;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3142.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2039.y = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3146.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2039.z = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3150.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2039.w = hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2096 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2039 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3154.xy;
        float param_55 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2102 = hdLod5(param_54, param_55).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_2102;
        float _RESERVED_IDENTIFIER_FIXUP_2107 = float(_RESERVED_IDENTIFIER_FIXUP_2102 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_2107;
        float _RESERVED_IDENTIFIER_FIXUP_2110 = dot(_RESERVED_IDENTIFIER_FIXUP_2096, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3138.z = _RESERVED_IDENTIFIER_FIXUP_2110;
        float _RESERVED_IDENTIFIER_FIXUP_2116 = _RESERVED_IDENTIFIER_FIXUP_2107 + _RESERVED_IDENTIFIER_FIXUP_2110;
        _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_2116;
        float _RESERVED_IDENTIFIER_FIXUP_2121 = (_RESERVED_IDENTIFIER_FIXUP_2116 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_2121;
        _RESERVED_IDENTIFIER_FIXUP_3138.x = (_RESERVED_IDENTIFIER_FIXUP_1967 * _RESERVED_IDENTIFIER_FIXUP_2121) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3502 = _RESERVED_IDENTIFIER_FIXUP_2096;
        _RESERVED_IDENTIFIER_FIXUP_3501 = _RESERVED_IDENTIFIER_FIXUP_3138;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3136 = _RESERVED_IDENTIFIER_FIXUP_3126;
        _RESERVED_IDENTIFIER_FIXUP_3136.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3502 = _RESERVED_IDENTIFIER_FIXUP_1924;
        _RESERVED_IDENTIFIER_FIXUP_3501 = _RESERVED_IDENTIFIER_FIXUP_3136;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3210 = _RESERVED_IDENTIFIER_FIXUP_3501;
    _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_1314;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3505;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3503;
    if (_RESERVED_IDENTIFIER_FIXUP_1314 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2148 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_3210;
        _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_2148.x;
        _RESERVED_IDENTIFIER_FIXUP_3371.z = _RESERVED_IDENTIFIER_FIXUP_2148.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2158 = _RESERVED_IDENTIFIER_FIXUP_3371.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3375;
        _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_2158.x;
        _RESERVED_IDENTIFIER_FIXUP_3375.y = _RESERVED_IDENTIFIER_FIXUP_2158.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2168 = _RESERVED_IDENTIFIER_FIXUP_3371.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3379;
        _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_2168.x;
        _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_2168.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2178 = _RESERVED_IDENTIFIER_FIXUP_3371.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3383;
        _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_2178.x;
        _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_2178.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2188 = _RESERVED_IDENTIFIER_FIXUP_3371.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3387;
        _RESERVED_IDENTIFIER_FIXUP_3387.x = _RESERVED_IDENTIFIER_FIXUP_2188.x;
        _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_2188.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2196 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2196.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2196.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2202 = hdLod6(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3375.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3379.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3383.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3387.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3375.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2202.y = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3379.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2202.z = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3383.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2202.w = hdLod6(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2259 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2202 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3387.xy;
        float param_65 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2265 = hdLod6(param_64, param_65).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_2265;
        float _RESERVED_IDENTIFIER_FIXUP_2270 = float(_RESERVED_IDENTIFIER_FIXUP_2265 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_2270;
        float _RESERVED_IDENTIFIER_FIXUP_2273 = dot(_RESERVED_IDENTIFIER_FIXUP_2259, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3371.z = _RESERVED_IDENTIFIER_FIXUP_2273;
        float _RESERVED_IDENTIFIER_FIXUP_2279 = _RESERVED_IDENTIFIER_FIXUP_2270 + _RESERVED_IDENTIFIER_FIXUP_2273;
        _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_2279;
        _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_2279 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3505 = _RESERVED_IDENTIFIER_FIXUP_2259;
        _RESERVED_IDENTIFIER_FIXUP_3503 = _RESERVED_IDENTIFIER_FIXUP_3371;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2292 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3215 = _RESERVED_IDENTIFIER_FIXUP_3210;
        _RESERVED_IDENTIFIER_FIXUP_3215.z = _RESERVED_IDENTIFIER_FIXUP_2292;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3506;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3504;
        if (_RESERVED_IDENTIFIER_FIXUP_2292 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2301 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_3215;
            _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_2301.x;
            _RESERVED_IDENTIFIER_FIXUP_3305.w = _RESERVED_IDENTIFIER_FIXUP_2301.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2311 = _RESERVED_IDENTIFIER_FIXUP_3305.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3309;
            _RESERVED_IDENTIFIER_FIXUP_3309.x = _RESERVED_IDENTIFIER_FIXUP_2311.x;
            _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_2311.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2321 = _RESERVED_IDENTIFIER_FIXUP_3305.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3313;
            _RESERVED_IDENTIFIER_FIXUP_3313.x = _RESERVED_IDENTIFIER_FIXUP_2321.x;
            _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_2321.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2331 = _RESERVED_IDENTIFIER_FIXUP_3305.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3317;
            _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_2331.x;
            _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_2331.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2341 = _RESERVED_IDENTIFIER_FIXUP_3305.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3321;
            _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_2341.x;
            _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_2341.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2349 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2349.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2349.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2355 = hdLod7(param_66, param_67);
            _RESERVED_IDENTIFIER_FIXUP_3309.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3313.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3317.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3321.w = 0.0;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3309.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2355.y = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3313.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2355.z = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3317.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2355.w = hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2412 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2355 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3321.xy;
            float param_75 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2418 = hdLod7(param_74, param_75).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_2418;
            float _RESERVED_IDENTIFIER_FIXUP_2423 = float(_RESERVED_IDENTIFIER_FIXUP_2418 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_2423;
            float _RESERVED_IDENTIFIER_FIXUP_2426 = dot(_RESERVED_IDENTIFIER_FIXUP_2412, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3305.w = _RESERVED_IDENTIFIER_FIXUP_2426;
            float _RESERVED_IDENTIFIER_FIXUP_2432 = _RESERVED_IDENTIFIER_FIXUP_2423 + _RESERVED_IDENTIFIER_FIXUP_2426;
            _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_2432;
            _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_2432 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3506 = _RESERVED_IDENTIFIER_FIXUP_2412;
            _RESERVED_IDENTIFIER_FIXUP_3504 = _RESERVED_IDENTIFIER_FIXUP_3305;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3219 = _RESERVED_IDENTIFIER_FIXUP_3502;
            _RESERVED_IDENTIFIER_FIXUP_3219.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3219.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2448 = (_RESERVED_IDENTIFIER_FIXUP_3219.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3224;
            _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_2448.x;
            _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_2448.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2458 = _RESERVED_IDENTIFIER_FIXUP_3224.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
            _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_2458.x;
            _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_2458.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2468 = _RESERVED_IDENTIFIER_FIXUP_3224.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3232;
            _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_2468.x;
            _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_2468.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2478 = _RESERVED_IDENTIFIER_FIXUP_3224.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3236;
            _RESERVED_IDENTIFIER_FIXUP_3236.x = _RESERVED_IDENTIFIER_FIXUP_2478.x;
            _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_2478.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2488 = _RESERVED_IDENTIFIER_FIXUP_3224.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3240;
            _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_2488.x;
            _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_2488.y;
            _RESERVED_IDENTIFIER_FIXUP_3224.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3224.xy;
            float param_77 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2502 = hdLod8(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3228.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3232.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3236.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3240.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3228.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2502.y = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3232.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2502.z = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3236.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2502.w = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3240.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2565 = hdLod8(param_84, param_85).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3280 = _RESERVED_IDENTIFIER_FIXUP_3215;
            _RESERVED_IDENTIFIER_FIXUP_3280.z = _RESERVED_IDENTIFIER_FIXUP_2565;
            float _RESERVED_IDENTIFIER_FIXUP_2570 = float(_RESERVED_IDENTIFIER_FIXUP_2565 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3280.z = _RESERVED_IDENTIFIER_FIXUP_2570;
            float _RESERVED_IDENTIFIER_FIXUP_2573 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2502 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3280.w = _RESERVED_IDENTIFIER_FIXUP_2573;
            float _RESERVED_IDENTIFIER_FIXUP_2579 = _RESERVED_IDENTIFIER_FIXUP_2570 + _RESERVED_IDENTIFIER_FIXUP_2573;
            _RESERVED_IDENTIFIER_FIXUP_3280.z = _RESERVED_IDENTIFIER_FIXUP_2579;
            float _RESERVED_IDENTIFIER_FIXUP_2587 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3280.w = _RESERVED_IDENTIFIER_FIXUP_2587;
            float _RESERVED_IDENTIFIER_FIXUP_2593 = clamp((_RESERVED_IDENTIFIER_FIXUP_2587 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3280.w = _RESERVED_IDENTIFIER_FIXUP_2593;
            float _RESERVED_IDENTIFIER_FIXUP_2598 = (_RESERVED_IDENTIFIER_FIXUP_2579 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3280.z = _RESERVED_IDENTIFIER_FIXUP_2598;
            _RESERVED_IDENTIFIER_FIXUP_3280.y = (_RESERVED_IDENTIFIER_FIXUP_2593 * _RESERVED_IDENTIFIER_FIXUP_2598) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3506 = _RESERVED_IDENTIFIER_FIXUP_3219;
            _RESERVED_IDENTIFIER_FIXUP_3504 = _RESERVED_IDENTIFIER_FIXUP_3280;
        }
        _RESERVED_IDENTIFIER_FIXUP_3505 = _RESERVED_IDENTIFIER_FIXUP_3506;
        _RESERVED_IDENTIFIER_FIXUP_3503 = _RESERVED_IDENTIFIER_FIXUP_3504;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2613 = min(_RESERVED_IDENTIFIER_FIXUP_3503.y, _RESERVED_IDENTIFIER_FIXUP_3503.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3439 = _RESERVED_IDENTIFIER_FIXUP_3505;
    _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_2613;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3442 = _RESERVED_IDENTIFIER_FIXUP_3503;
    _RESERVED_IDENTIFIER_FIXUP_3442.x = (_RESERVED_IDENTIFIER_FIXUP_2613 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2624 = _RESERVED_IDENTIFIER_FIXUP_1954.xyz * _RESERVED_IDENTIFIER_FIXUP_3442.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3444 = _RESERVED_IDENTIFIER_FIXUP_1954;
    _RESERVED_IDENTIFIER_FIXUP_3444.x = _RESERVED_IDENTIFIER_FIXUP_2624.x;
    _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_2624.y;
    _RESERVED_IDENTIFIER_FIXUP_3444.z = _RESERVED_IDENTIFIER_FIXUP_2624.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2635 = _RESERVED_IDENTIFIER_FIXUP_3444.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3450 = _RESERVED_IDENTIFIER_FIXUP_3444;
    _RESERVED_IDENTIFIER_FIXUP_3450.x = _RESERVED_IDENTIFIER_FIXUP_2635.x;
    _RESERVED_IDENTIFIER_FIXUP_3450.y = _RESERVED_IDENTIFIER_FIXUP_2635.y;
    _RESERVED_IDENTIFIER_FIXUP_3450.z = _RESERVED_IDENTIFIER_FIXUP_2635.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2646 = _RESERVED_IDENTIFIER_FIXUP_3450.xyz + _RESERVED_IDENTIFIER_FIXUP_3450.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3456 = _RESERVED_IDENTIFIER_FIXUP_3450;
    _RESERVED_IDENTIFIER_FIXUP_3456.x = _RESERVED_IDENTIFIER_FIXUP_2646.x;
    _RESERVED_IDENTIFIER_FIXUP_3456.y = _RESERVED_IDENTIFIER_FIXUP_2646.y;
    _RESERVED_IDENTIFIER_FIXUP_3456.z = _RESERVED_IDENTIFIER_FIXUP_2646.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2657 = _RESERVED_IDENTIFIER_FIXUP_3456.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3442.x = _RESERVED_IDENTIFIER_FIXUP_2657.x;
    _RESERVED_IDENTIFIER_FIXUP_3442.y = _RESERVED_IDENTIFIER_FIXUP_2657.y;
    _RESERVED_IDENTIFIER_FIXUP_3442.z = _RESERVED_IDENTIFIER_FIXUP_2657.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2671 = (_RESERVED_IDENTIFIER_FIXUP_3442.xyz * _RESERVED_IDENTIFIER_FIXUP_3439.xxx) + _RESERVED_IDENTIFIER_FIXUP_3456.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3468 = _RESERVED_IDENTIFIER_FIXUP_3456;
    _RESERVED_IDENTIFIER_FIXUP_3468.x = _RESERVED_IDENTIFIER_FIXUP_2671.x;
    _RESERVED_IDENTIFIER_FIXUP_3468.y = _RESERVED_IDENTIFIER_FIXUP_2671.y;
    _RESERVED_IDENTIFIER_FIXUP_3468.z = _RESERVED_IDENTIFIER_FIXUP_2671.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2684 = _RESERVED_IDENTIFIER_FIXUP_3468.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3474 = _RESERVED_IDENTIFIER_FIXUP_3468;
    _RESERVED_IDENTIFIER_FIXUP_3474.x = _RESERVED_IDENTIFIER_FIXUP_2684.x;
    _RESERVED_IDENTIFIER_FIXUP_3474.y = _RESERVED_IDENTIFIER_FIXUP_2684.y;
    _RESERVED_IDENTIFIER_FIXUP_3474.z = _RESERVED_IDENTIFIER_FIXUP_2684.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3474.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_949 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_958;
    if (_RESERVED_IDENTIFIER_FIXUP_949)
    {
        _RESERVED_IDENTIFIER_FIXUP_958 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_958 = _RESERVED_IDENTIFIER_FIXUP_949;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_958)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_995 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3105.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1022 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2743;
    if (_RESERVED_IDENTIFIER_FIXUP_995 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2743 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_995), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1022);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2743 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1022);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2743;
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
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 *= r3.xxxx;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB148 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB148.x;
        r1.z = hdB148.y;
        vec2 hdB169 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB169.x;
        r2.y = hdB169.y;
        vec2 hdB180 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB180.x;
        r3.y = hdB180.y;
        vec2 hdB191 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB191.x;
        r4.y = hdB191.y;
        vec2 hdB202 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB202.x;
        r5.y = hdB202.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r6.xy;
        float param_4 = r6.w;
        r6 = hdLod5(param_3, param_4);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_9 = r4.xy;
        float param_10 = r4.w;
        r4 = hdLod5(param_9, param_10);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_11 = r5.xy;
        float param_12 = r5.w;
        r5 = hdLod5(param_11, param_12);
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
        vec2 hdB333 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB333.x;
        r1.z = hdB333.y;
        vec2 hdB343 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB343.x;
        r2.y = hdB343.y;
        vec2 hdB353 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB353.x;
        r3.y = hdB353.y;
        vec2 hdB363 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB363.x;
        r4.y = hdB363.y;
        vec2 hdB373 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB373.x;
        r5.y = hdB373.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod6(param_13, param_14);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod6(param_15, param_16);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_17 = r3.xy;
        float param_18 = r3.w;
        r3 = hdLod6(param_17, param_18);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_19 = r4.xy;
        float param_20 = r4.w;
        r4 = hdLod6(param_19, param_20);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_21 = r5.xy;
        float param_22 = r5.w;
        r5 = hdLod6(param_21, param_22);
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
            vec2 hdB488 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB488.x;
            r1.w = hdB488.y;
            vec2 hdB498 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB498.x;
            r2.y = hdB498.y;
            vec2 hdB508 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB508.x;
            r3.y = hdB508.y;
            vec2 hdB518 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB518.x;
            r4.y = hdB518.y;
            vec2 hdB528 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB528.x;
            r5.y = hdB528.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r6.xy;
            float param_24 = r6.w;
            r6 = hdLod7(param_23, param_24);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod7(param_25, param_26);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_29 = r4.xy;
            float param_30 = r4.w;
            r4 = hdLod7(param_29, param_30);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_31 = r5.xy;
            float param_32 = r5.w;
            r5 = hdLod7(param_31, param_32);
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
            vec2 hdB636 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB636.x;
            r3.y = hdB636.y;
            vec2 hdB646 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB646.x;
            r4.y = hdB646.y;
            vec2 hdB656 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB656.x;
            r5.y = hdB656.y;
            vec2 hdB666 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB666.x;
            r6.y = hdB666.y;
            vec2 hdB676 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB676.x;
            r7.y = hdB676.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod8(param_33, param_34);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r4 = hdLod8(param_35, param_36);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_37 = r5.xy;
            float param_38 = r5.w;
            r5 = hdLod8(param_37, param_38);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_39 = r6.xy;
            float param_40 = r6.w;
            r6 = hdLod8(param_39, param_40);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_41 = r7.xy;
            float param_42 = r7.w;
            r7 = hdLod8(param_41, param_42);
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
    vec4 hdB811 = r0;
    vec3 hdB815 = hdB811.xyz * r1.xxx;
    r0.x = hdB815.x;
    r0.y = hdB815.y;
    r0.z = hdB815.z;
    vec4 hdB822 = r0;
    vec3 hdB826 = hdB822.xyz * v0.xyz;
    r0.x = hdB826.x;
    r0.y = hdB826.y;
    r0.z = hdB826.z;
    vec4 hdB833 = r0;
    vec4 hdB835 = r0;
    vec3 hdB837 = hdB833.xyz + hdB835.xyz;
    r0.x = hdB837.x;
    r0.y = hdB837.y;
    r0.z = hdB837.z;
    vec3 hdB848 = r0.www * v1.xyz;
    r1.x = hdB848.x;
    r1.y = hdB848.y;
    r1.z = hdB848.z;
    vec4 hdB860 = r0;
    vec3 hdB862 = (r1.xyz * r2.xxx) + hdB860.xyz;
    r0.x = hdB862.x;
    r0.y = hdB862.y;
    r0.z = hdB862.z;
    vec4 hdB869 = r0;
    vec3 hdB876 = hdB869.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB876.x;
    r0.y = hdB876.y;
    r0.z = hdB876.z;
    vec3 hdB891 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB891.x;
    oC0.y = hdB891.y;
    oC0.z = hdB891.z;
    oC0.w = 1.0;
    bool hdB904 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB912;
    if (hdB904)
    {
        hdB912 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB912 = hdB904;
    }
    if (hdB912)
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
    bool _3111 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3121;
    if (_3111)
    {
        _3121 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3121 = _3111;
    }
    if (_3121)
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
        bool _3146 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3161;
        if (!_3146)
        {
            _3161 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3161 = _3146;
        }
        if (_3161)
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
