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
float _RESERVED_IDENTIFIER_FIXUP_3336;
vec4 _RESERVED_IDENTIFIER_FIXUP_3337;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1062 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1066 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1070 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1074 = hdTex3(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1078 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1074.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2667 = _RESERVED_IDENTIFIER_FIXUP_1074;
    _RESERVED_IDENTIFIER_FIXUP_2667.z = _RESERVED_IDENTIFIER_FIXUP_1078;
    _RESERVED_IDENTIFIER_FIXUP_2667.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1078;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1088 = _RESERVED_IDENTIFIER_FIXUP_1066 * _RESERVED_IDENTIFIER_FIXUP_2667.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1100 = (_RESERVED_IDENTIFIER_FIXUP_1070 * _RESERVED_IDENTIFIER_FIXUP_2667.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1062 * _RESERVED_IDENTIFIER_FIXUP_2667.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1088);
    float _RESERVED_IDENTIFIER_FIXUP_1107 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2674 = _RESERVED_IDENTIFIER_FIXUP_1088;
    _RESERVED_IDENTIFIER_FIXUP_2674.x = _RESERVED_IDENTIFIER_FIXUP_1107;
    float _RESERVED_IDENTIFIER_FIXUP_1113 = clamp((_RESERVED_IDENTIFIER_FIXUP_1107 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2674.x = _RESERVED_IDENTIFIER_FIXUP_1113;
    float _RESERVED_IDENTIFIER_FIXUP_1119 = ((-_RESERVED_IDENTIFIER_FIXUP_1113) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2674.y = _RESERVED_IDENTIFIER_FIXUP_1119;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3338;
    if (_RESERVED_IDENTIFIER_FIXUP_1119 != (-_RESERVED_IDENTIFIER_FIXUP_1119))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1131 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1141 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1143 = _RESERVED_IDENTIFIER_FIXUP_1141.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2687 = _RESERVED_IDENTIFIER_FIXUP_2674;
        _RESERVED_IDENTIFIER_FIXUP_2687.y = _RESERVED_IDENTIFIER_FIXUP_1143;
        _RESERVED_IDENTIFIER_FIXUP_2687.z = _RESERVED_IDENTIFIER_FIXUP_1141.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_2687.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2691;
        _RESERVED_IDENTIFIER_FIXUP_2691.x = _RESERVED_IDENTIFIER_FIXUP_1151.x;
        _RESERVED_IDENTIFIER_FIXUP_2691.y = _RESERVED_IDENTIFIER_FIXUP_1151.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1158 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1162 = _RESERVED_IDENTIFIER_FIXUP_1158.y;
        _RESERVED_IDENTIFIER_FIXUP_2691.w = _RESERVED_IDENTIFIER_FIXUP_1162;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1131.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1131.w;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2691.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1162;
        float _RESERVED_IDENTIFIER_FIXUP_1173 = hdLod5(param_3, param_4).x + hdLod5(param_5, param_6).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3364 = vec4(_RESERVED_IDENTIFIER_FIXUP_1113, _RESERVED_IDENTIFIER_FIXUP_1143, _RESERVED_IDENTIFIER_FIXUP_1141.y, _RESERVED_IDENTIFIER_FIXUP_1173);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_3364.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2704;
        _RESERVED_IDENTIFIER_FIXUP_2704.x = _RESERVED_IDENTIFIER_FIXUP_1180.x;
        _RESERVED_IDENTIFIER_FIXUP_2704.y = _RESERVED_IDENTIFIER_FIXUP_1180.y;
        _RESERVED_IDENTIFIER_FIXUP_2704.w = _RESERVED_IDENTIFIER_FIXUP_1162;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2704.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1162;
        float _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1173 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3364.w = _RESERVED_IDENTIFIER_FIXUP_1202;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_3364.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2717;
        _RESERVED_IDENTIFIER_FIXUP_2717.x = _RESERVED_IDENTIFIER_FIXUP_1209.x;
        _RESERVED_IDENTIFIER_FIXUP_2717.y = _RESERVED_IDENTIFIER_FIXUP_1209.y;
        _RESERVED_IDENTIFIER_FIXUP_2717.w = _RESERVED_IDENTIFIER_FIXUP_1162;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2717.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1162;
        float _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1202 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3364.w = _RESERVED_IDENTIFIER_FIXUP_1231;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_3364.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2730;
        _RESERVED_IDENTIFIER_FIXUP_2730.x = _RESERVED_IDENTIFIER_FIXUP_1238.x;
        _RESERVED_IDENTIFIER_FIXUP_2730.y = _RESERVED_IDENTIFIER_FIXUP_1238.y;
        _RESERVED_IDENTIFIER_FIXUP_2730.w = _RESERVED_IDENTIFIER_FIXUP_1162;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2730.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1162;
        float _RESERVED_IDENTIFIER_FIXUP_1260 = _RESERVED_IDENTIFIER_FIXUP_1231 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3364.y = _RESERVED_IDENTIFIER_FIXUP_1260;
        float _RESERVED_IDENTIFIER_FIXUP_1265 = (_RESERVED_IDENTIFIER_FIXUP_1260 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3364.y = _RESERVED_IDENTIFIER_FIXUP_1265;
        _RESERVED_IDENTIFIER_FIXUP_3364.x = (_RESERVED_IDENTIFIER_FIXUP_1113 * _RESERVED_IDENTIFIER_FIXUP_1265) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3338 = _RESERVED_IDENTIFIER_FIXUP_3364;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2684 = _RESERVED_IDENTIFIER_FIXUP_2674;
        _RESERVED_IDENTIFIER_FIXUP_2684.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3338 = _RESERVED_IDENTIFIER_FIXUP_2684;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1283 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2752 = _RESERVED_IDENTIFIER_FIXUP_3338;
    _RESERVED_IDENTIFIER_FIXUP_2752.y = _RESERVED_IDENTIFIER_FIXUP_1283;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3343;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3341;
    if (_RESERVED_IDENTIFIER_FIXUP_1283 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1292 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1302 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2892 = _RESERVED_IDENTIFIER_FIXUP_2752;
        _RESERVED_IDENTIFIER_FIXUP_2892.y = _RESERVED_IDENTIFIER_FIXUP_1302.x;
        _RESERVED_IDENTIFIER_FIXUP_2892.z = _RESERVED_IDENTIFIER_FIXUP_1302.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_2892.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2896;
        _RESERVED_IDENTIFIER_FIXUP_2896.x = _RESERVED_IDENTIFIER_FIXUP_1312.x;
        _RESERVED_IDENTIFIER_FIXUP_2896.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1319 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1323 = _RESERVED_IDENTIFIER_FIXUP_1319.y;
        _RESERVED_IDENTIFIER_FIXUP_2896.w = _RESERVED_IDENTIFIER_FIXUP_1323;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1292.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1292.w;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_2896.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1323;
        float _RESERVED_IDENTIFIER_FIXUP_1334 = hdLod6(param_13, param_14).x + hdLod6(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_2892.w = _RESERVED_IDENTIFIER_FIXUP_1334;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1341 = _RESERVED_IDENTIFIER_FIXUP_2892.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2909;
        _RESERVED_IDENTIFIER_FIXUP_2909.x = _RESERVED_IDENTIFIER_FIXUP_1341.x;
        _RESERVED_IDENTIFIER_FIXUP_2909.y = _RESERVED_IDENTIFIER_FIXUP_1341.y;
        _RESERVED_IDENTIFIER_FIXUP_2909.w = _RESERVED_IDENTIFIER_FIXUP_1323;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2909.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1323;
        float _RESERVED_IDENTIFIER_FIXUP_1363 = _RESERVED_IDENTIFIER_FIXUP_1334 + hdLod6(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_2892.w = _RESERVED_IDENTIFIER_FIXUP_1363;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1370 = _RESERVED_IDENTIFIER_FIXUP_2892.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2922;
        _RESERVED_IDENTIFIER_FIXUP_2922.x = _RESERVED_IDENTIFIER_FIXUP_1370.x;
        _RESERVED_IDENTIFIER_FIXUP_2922.y = _RESERVED_IDENTIFIER_FIXUP_1370.y;
        _RESERVED_IDENTIFIER_FIXUP_2922.w = _RESERVED_IDENTIFIER_FIXUP_1323;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2922.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1323;
        float _RESERVED_IDENTIFIER_FIXUP_1392 = _RESERVED_IDENTIFIER_FIXUP_1363 + hdLod6(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_2892.w = _RESERVED_IDENTIFIER_FIXUP_1392;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_2892.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2935;
        _RESERVED_IDENTIFIER_FIXUP_2935.x = _RESERVED_IDENTIFIER_FIXUP_1399.x;
        _RESERVED_IDENTIFIER_FIXUP_2935.y = _RESERVED_IDENTIFIER_FIXUP_1399.y;
        _RESERVED_IDENTIFIER_FIXUP_2935.w = _RESERVED_IDENTIFIER_FIXUP_1323;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_2935.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1323;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1416 = hdLod6(param_21, param_22);
        float _RESERVED_IDENTIFIER_FIXUP_1421 = _RESERVED_IDENTIFIER_FIXUP_1392 + _RESERVED_IDENTIFIER_FIXUP_1416.x;
        _RESERVED_IDENTIFIER_FIXUP_2892.y = _RESERVED_IDENTIFIER_FIXUP_1421;
        _RESERVED_IDENTIFIER_FIXUP_2892.y = _RESERVED_IDENTIFIER_FIXUP_1421 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3343 = _RESERVED_IDENTIFIER_FIXUP_1416;
        _RESERVED_IDENTIFIER_FIXUP_3341 = _RESERVED_IDENTIFIER_FIXUP_2892;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1434 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2757 = _RESERVED_IDENTIFIER_FIXUP_2752;
        _RESERVED_IDENTIFIER_FIXUP_2757.z = _RESERVED_IDENTIFIER_FIXUP_1434;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3344;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3342;
        if (_RESERVED_IDENTIFIER_FIXUP_1434 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1443 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1443.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1443.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1449 = hdLod7(param_23, param_24);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1453 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2832 = _RESERVED_IDENTIFIER_FIXUP_2757;
            _RESERVED_IDENTIFIER_FIXUP_2832.z = _RESERVED_IDENTIFIER_FIXUP_1453.x;
            _RESERVED_IDENTIFIER_FIXUP_2832.w = _RESERVED_IDENTIFIER_FIXUP_1453.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1463 = _RESERVED_IDENTIFIER_FIXUP_2832.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2836;
            _RESERVED_IDENTIFIER_FIXUP_2836.x = _RESERVED_IDENTIFIER_FIXUP_1463.x;
            _RESERVED_IDENTIFIER_FIXUP_2836.y = _RESERVED_IDENTIFIER_FIXUP_1463.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1470 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_1470.y;
            _RESERVED_IDENTIFIER_FIXUP_2836.w = _RESERVED_IDENTIFIER_FIXUP_1474;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_2836.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1474;
            float _RESERVED_IDENTIFIER_FIXUP_1485 = _RESERVED_IDENTIFIER_FIXUP_1449.x + hdLod7(param_25, param_26).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2847 = _RESERVED_IDENTIFIER_FIXUP_1449;
            _RESERVED_IDENTIFIER_FIXUP_2847.x = _RESERVED_IDENTIFIER_FIXUP_1485;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_2832.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2849;
            _RESERVED_IDENTIFIER_FIXUP_2849.x = _RESERVED_IDENTIFIER_FIXUP_1492.x;
            _RESERVED_IDENTIFIER_FIXUP_2849.y = _RESERVED_IDENTIFIER_FIXUP_1492.y;
            _RESERVED_IDENTIFIER_FIXUP_2849.w = _RESERVED_IDENTIFIER_FIXUP_1474;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2849.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1474;
            float _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_1485 + hdLod7(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_2847.x = _RESERVED_IDENTIFIER_FIXUP_1514;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1521 = _RESERVED_IDENTIFIER_FIXUP_2832.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2862;
            _RESERVED_IDENTIFIER_FIXUP_2862.x = _RESERVED_IDENTIFIER_FIXUP_1521.x;
            _RESERVED_IDENTIFIER_FIXUP_2862.y = _RESERVED_IDENTIFIER_FIXUP_1521.y;
            _RESERVED_IDENTIFIER_FIXUP_2862.w = _RESERVED_IDENTIFIER_FIXUP_1474;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2862.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1474;
            float _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_1514 + hdLod7(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_2847.x = _RESERVED_IDENTIFIER_FIXUP_1543;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1550 = _RESERVED_IDENTIFIER_FIXUP_2832.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2875;
            _RESERVED_IDENTIFIER_FIXUP_2875.x = _RESERVED_IDENTIFIER_FIXUP_1550.x;
            _RESERVED_IDENTIFIER_FIXUP_2875.y = _RESERVED_IDENTIFIER_FIXUP_1550.y;
            _RESERVED_IDENTIFIER_FIXUP_2875.w = _RESERVED_IDENTIFIER_FIXUP_1474;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2875.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1474;
            float _RESERVED_IDENTIFIER_FIXUP_1572 = _RESERVED_IDENTIFIER_FIXUP_1543 + hdLod7(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_2832.z = _RESERVED_IDENTIFIER_FIXUP_1572;
            _RESERVED_IDENTIFIER_FIXUP_2832.y = _RESERVED_IDENTIFIER_FIXUP_1572 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3344 = _RESERVED_IDENTIFIER_FIXUP_2847;
            _RESERVED_IDENTIFIER_FIXUP_3342 = _RESERVED_IDENTIFIER_FIXUP_2832;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2761 = _RESERVED_IDENTIFIER_FIXUP_2757;
            _RESERVED_IDENTIFIER_FIXUP_2761.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2761.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1588 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1592 = _RESERVED_IDENTIFIER_FIXUP_1588.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3365 = vec4(_RESERVED_IDENTIFIER_FIXUP_1588.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1592);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1603 = _RESERVED_IDENTIFIER_FIXUP_3365.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3366 = vec4(_RESERVED_IDENTIFIER_FIXUP_1603 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1592);
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1603;
            float param_34 = _RESERVED_IDENTIFIER_FIXUP_1592;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3366.xy;
            float param_36 = _RESERVED_IDENTIFIER_FIXUP_1592;
            float _RESERVED_IDENTIFIER_FIXUP_1633 = hdLod8(param_33, param_34).x + hdLod8(param_35, param_36).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2788 = _RESERVED_IDENTIFIER_FIXUP_3365;
            _RESERVED_IDENTIFIER_FIXUP_2788.z = _RESERVED_IDENTIFIER_FIXUP_1633;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1640 = _RESERVED_IDENTIFIER_FIXUP_2788.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2790 = _RESERVED_IDENTIFIER_FIXUP_3366;
            _RESERVED_IDENTIFIER_FIXUP_2790.x = _RESERVED_IDENTIFIER_FIXUP_1640.x;
            _RESERVED_IDENTIFIER_FIXUP_2790.y = _RESERVED_IDENTIFIER_FIXUP_1640.y;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2790.xy;
            float param_38 = _RESERVED_IDENTIFIER_FIXUP_1592;
            float _RESERVED_IDENTIFIER_FIXUP_1655 = _RESERVED_IDENTIFIER_FIXUP_1633 + hdLod8(param_37, param_38).x;
            _RESERVED_IDENTIFIER_FIXUP_2788.z = _RESERVED_IDENTIFIER_FIXUP_1655;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1662 = _RESERVED_IDENTIFIER_FIXUP_2788.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2799 = _RESERVED_IDENTIFIER_FIXUP_2790;
            _RESERVED_IDENTIFIER_FIXUP_2799.x = _RESERVED_IDENTIFIER_FIXUP_1662.x;
            _RESERVED_IDENTIFIER_FIXUP_2799.y = _RESERVED_IDENTIFIER_FIXUP_1662.y;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2799.xy;
            float param_40 = _RESERVED_IDENTIFIER_FIXUP_1592;
            float _RESERVED_IDENTIFIER_FIXUP_1677 = _RESERVED_IDENTIFIER_FIXUP_1655 + hdLod8(param_39, param_40).x;
            _RESERVED_IDENTIFIER_FIXUP_2788.z = _RESERVED_IDENTIFIER_FIXUP_1677;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1684 = _RESERVED_IDENTIFIER_FIXUP_2788.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2808 = _RESERVED_IDENTIFIER_FIXUP_2799;
            _RESERVED_IDENTIFIER_FIXUP_2808.x = _RESERVED_IDENTIFIER_FIXUP_1684.x;
            _RESERVED_IDENTIFIER_FIXUP_2808.y = _RESERVED_IDENTIFIER_FIXUP_1684.y;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2808.xy;
            float param_42 = _RESERVED_IDENTIFIER_FIXUP_1592;
            float _RESERVED_IDENTIFIER_FIXUP_1699 = _RESERVED_IDENTIFIER_FIXUP_1677 + hdLod8(param_41, param_42).x;
            _RESERVED_IDENTIFIER_FIXUP_2788.x = _RESERVED_IDENTIFIER_FIXUP_1699;
            float _RESERVED_IDENTIFIER_FIXUP_1707 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2788.y = _RESERVED_IDENTIFIER_FIXUP_1707;
            float _RESERVED_IDENTIFIER_FIXUP_1713 = clamp((_RESERVED_IDENTIFIER_FIXUP_1707 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2761.z = _RESERVED_IDENTIFIER_FIXUP_1713;
            float _RESERVED_IDENTIFIER_FIXUP_1718 = (_RESERVED_IDENTIFIER_FIXUP_1699 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2761.w = _RESERVED_IDENTIFIER_FIXUP_1718;
            _RESERVED_IDENTIFIER_FIXUP_2761.y = (_RESERVED_IDENTIFIER_FIXUP_1713 * _RESERVED_IDENTIFIER_FIXUP_1718) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3344 = _RESERVED_IDENTIFIER_FIXUP_2788;
            _RESERVED_IDENTIFIER_FIXUP_3342 = _RESERVED_IDENTIFIER_FIXUP_2761;
        }
        _RESERVED_IDENTIFIER_FIXUP_3343 = _RESERVED_IDENTIFIER_FIXUP_3344;
        _RESERVED_IDENTIFIER_FIXUP_3341 = _RESERVED_IDENTIFIER_FIXUP_3342;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1733 = min(_RESERVED_IDENTIFIER_FIXUP_3341.y, _RESERVED_IDENTIFIER_FIXUP_3341.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2953 = _RESERVED_IDENTIFIER_FIXUP_3343;
    _RESERVED_IDENTIFIER_FIXUP_2953.x = _RESERVED_IDENTIFIER_FIXUP_1733;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2956 = _RESERVED_IDENTIFIER_FIXUP_3341;
    _RESERVED_IDENTIFIER_FIXUP_2956.x = (_RESERVED_IDENTIFIER_FIXUP_1733 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_1100.xyz * _RESERVED_IDENTIFIER_FIXUP_2956.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2958 = _RESERVED_IDENTIFIER_FIXUP_1100;
    _RESERVED_IDENTIFIER_FIXUP_2958.x = _RESERVED_IDENTIFIER_FIXUP_1744.x;
    _RESERVED_IDENTIFIER_FIXUP_2958.y = _RESERVED_IDENTIFIER_FIXUP_1744.y;
    _RESERVED_IDENTIFIER_FIXUP_2958.z = _RESERVED_IDENTIFIER_FIXUP_1744.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1755 = _RESERVED_IDENTIFIER_FIXUP_2958.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3336).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2964 = _RESERVED_IDENTIFIER_FIXUP_2958;
    _RESERVED_IDENTIFIER_FIXUP_2964.x = _RESERVED_IDENTIFIER_FIXUP_1755.x;
    _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1755.y;
    _RESERVED_IDENTIFIER_FIXUP_2964.z = _RESERVED_IDENTIFIER_FIXUP_1755.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1766 = _RESERVED_IDENTIFIER_FIXUP_2964.xyz + _RESERVED_IDENTIFIER_FIXUP_2964.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2970 = _RESERVED_IDENTIFIER_FIXUP_2964;
    _RESERVED_IDENTIFIER_FIXUP_2970.x = _RESERVED_IDENTIFIER_FIXUP_1766.x;
    _RESERVED_IDENTIFIER_FIXUP_2970.y = _RESERVED_IDENTIFIER_FIXUP_1766.y;
    _RESERVED_IDENTIFIER_FIXUP_2970.z = _RESERVED_IDENTIFIER_FIXUP_1766.z;
    _RESERVED_IDENTIFIER_FIXUP_2956.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2956.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2956.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1791 = (_RESERVED_IDENTIFIER_FIXUP_2956.xyz * _RESERVED_IDENTIFIER_FIXUP_2953.xxx) + _RESERVED_IDENTIFIER_FIXUP_2970.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2982 = _RESERVED_IDENTIFIER_FIXUP_2970;
    _RESERVED_IDENTIFIER_FIXUP_2982.x = _RESERVED_IDENTIFIER_FIXUP_1791.x;
    _RESERVED_IDENTIFIER_FIXUP_2982.y = _RESERVED_IDENTIFIER_FIXUP_1791.y;
    _RESERVED_IDENTIFIER_FIXUP_2982.z = _RESERVED_IDENTIFIER_FIXUP_1791.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1804 = _RESERVED_IDENTIFIER_FIXUP_2982.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2988 = _RESERVED_IDENTIFIER_FIXUP_2982;
    _RESERVED_IDENTIFIER_FIXUP_2988.x = _RESERVED_IDENTIFIER_FIXUP_1804.x;
    _RESERVED_IDENTIFIER_FIXUP_2988.y = _RESERVED_IDENTIFIER_FIXUP_1804.y;
    _RESERVED_IDENTIFIER_FIXUP_2988.z = _RESERVED_IDENTIFIER_FIXUP_1804.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1859 = OptTex0( texcoord0.xyz);
    vec2 param_43 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1863 = hdTex1(param_43);
    vec2 param_44 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1867 = hdTex2(param_44);
    vec2 param_45 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1871 = hdTex3(param_45);
    float _RESERVED_IDENTIFIER_FIXUP_1875 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1871.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3002 = _RESERVED_IDENTIFIER_FIXUP_1871;
    _RESERVED_IDENTIFIER_FIXUP_3002.z = _RESERVED_IDENTIFIER_FIXUP_1875;
    _RESERVED_IDENTIFIER_FIXUP_3002.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1885 = _RESERVED_IDENTIFIER_FIXUP_1863 * _RESERVED_IDENTIFIER_FIXUP_3002.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1897 = (_RESERVED_IDENTIFIER_FIXUP_1867 * _RESERVED_IDENTIFIER_FIXUP_3002.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1859 * _RESERVED_IDENTIFIER_FIXUP_3002.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1885);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3009 = _RESERVED_IDENTIFIER_FIXUP_1885;
    _RESERVED_IDENTIFIER_FIXUP_3009.x = _RESERVED_IDENTIFIER_FIXUP_1107;
    float _RESERVED_IDENTIFIER_FIXUP_1910 = clamp((_RESERVED_IDENTIFIER_FIXUP_1107 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3009.x = _RESERVED_IDENTIFIER_FIXUP_1910;
    float _RESERVED_IDENTIFIER_FIXUP_1916 = ((-_RESERVED_IDENTIFIER_FIXUP_1910) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1916;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3351;
    if (_RESERVED_IDENTIFIER_FIXUP_1916 != (-_RESERVED_IDENTIFIER_FIXUP_1916))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1928 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1938 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1940 = _RESERVED_IDENTIFIER_FIXUP_1938.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3022 = _RESERVED_IDENTIFIER_FIXUP_3009;
        _RESERVED_IDENTIFIER_FIXUP_3022.y = _RESERVED_IDENTIFIER_FIXUP_1940;
        _RESERVED_IDENTIFIER_FIXUP_3022.z = _RESERVED_IDENTIFIER_FIXUP_1938.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1948 = _RESERVED_IDENTIFIER_FIXUP_3022.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3026;
        _RESERVED_IDENTIFIER_FIXUP_3026.x = _RESERVED_IDENTIFIER_FIXUP_1948.x;
        _RESERVED_IDENTIFIER_FIXUP_3026.y = _RESERVED_IDENTIFIER_FIXUP_1948.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1955 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1959 = _RESERVED_IDENTIFIER_FIXUP_1955.y;
        _RESERVED_IDENTIFIER_FIXUP_3026.w = _RESERVED_IDENTIFIER_FIXUP_1959;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_1928.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_1928.w;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3026.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1959;
        float _RESERVED_IDENTIFIER_FIXUP_1970 = hdLod5(param_46, param_47).x + hdLod5(param_48, param_49).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3368 = vec4(_RESERVED_IDENTIFIER_FIXUP_1910, _RESERVED_IDENTIFIER_FIXUP_1940, _RESERVED_IDENTIFIER_FIXUP_1938.y, _RESERVED_IDENTIFIER_FIXUP_1970);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1977 = _RESERVED_IDENTIFIER_FIXUP_3368.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3039;
        _RESERVED_IDENTIFIER_FIXUP_3039.x = _RESERVED_IDENTIFIER_FIXUP_1977.x;
        _RESERVED_IDENTIFIER_FIXUP_3039.y = _RESERVED_IDENTIFIER_FIXUP_1977.y;
        _RESERVED_IDENTIFIER_FIXUP_3039.w = _RESERVED_IDENTIFIER_FIXUP_1959;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3039.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1959;
        float _RESERVED_IDENTIFIER_FIXUP_1999 = _RESERVED_IDENTIFIER_FIXUP_1970 + hdLod5(param_50, param_51).x;
        _RESERVED_IDENTIFIER_FIXUP_3368.w = _RESERVED_IDENTIFIER_FIXUP_1999;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2006 = _RESERVED_IDENTIFIER_FIXUP_3368.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3052;
        _RESERVED_IDENTIFIER_FIXUP_3052.x = _RESERVED_IDENTIFIER_FIXUP_2006.x;
        _RESERVED_IDENTIFIER_FIXUP_3052.y = _RESERVED_IDENTIFIER_FIXUP_2006.y;
        _RESERVED_IDENTIFIER_FIXUP_3052.w = _RESERVED_IDENTIFIER_FIXUP_1959;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3052.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1959;
        float _RESERVED_IDENTIFIER_FIXUP_2028 = _RESERVED_IDENTIFIER_FIXUP_1999 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3368.w = _RESERVED_IDENTIFIER_FIXUP_2028;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2035 = _RESERVED_IDENTIFIER_FIXUP_3368.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3065;
        _RESERVED_IDENTIFIER_FIXUP_3065.x = _RESERVED_IDENTIFIER_FIXUP_2035.x;
        _RESERVED_IDENTIFIER_FIXUP_3065.y = _RESERVED_IDENTIFIER_FIXUP_2035.y;
        _RESERVED_IDENTIFIER_FIXUP_3065.w = _RESERVED_IDENTIFIER_FIXUP_1959;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3065.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_1959;
        float _RESERVED_IDENTIFIER_FIXUP_2057 = _RESERVED_IDENTIFIER_FIXUP_2028 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_2057;
        float _RESERVED_IDENTIFIER_FIXUP_2062 = (_RESERVED_IDENTIFIER_FIXUP_2057 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_2062;
        _RESERVED_IDENTIFIER_FIXUP_3368.x = (_RESERVED_IDENTIFIER_FIXUP_1910 * _RESERVED_IDENTIFIER_FIXUP_2062) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3351 = _RESERVED_IDENTIFIER_FIXUP_3368;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3019 = _RESERVED_IDENTIFIER_FIXUP_3009;
        _RESERVED_IDENTIFIER_FIXUP_3019.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3351 = _RESERVED_IDENTIFIER_FIXUP_3019;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3087 = _RESERVED_IDENTIFIER_FIXUP_3351;
    _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1283;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3356;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3354;
    if (_RESERVED_IDENTIFIER_FIXUP_1283 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2089 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2099 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3227 = _RESERVED_IDENTIFIER_FIXUP_3087;
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2099.x;
        _RESERVED_IDENTIFIER_FIXUP_3227.z = _RESERVED_IDENTIFIER_FIXUP_2099.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2109 = _RESERVED_IDENTIFIER_FIXUP_3227.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3231;
        _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_2109.x;
        _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_2109.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2116 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2120 = _RESERVED_IDENTIFIER_FIXUP_2116.y;
        _RESERVED_IDENTIFIER_FIXUP_3231.w = _RESERVED_IDENTIFIER_FIXUP_2120;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2089.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2089.w;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3231.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2120;
        float _RESERVED_IDENTIFIER_FIXUP_2131 = hdLod6(param_56, param_57).x + hdLod6(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3227.w = _RESERVED_IDENTIFIER_FIXUP_2131;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2138 = _RESERVED_IDENTIFIER_FIXUP_3227.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3244;
        _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_2138.x;
        _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_2138.y;
        _RESERVED_IDENTIFIER_FIXUP_3244.w = _RESERVED_IDENTIFIER_FIXUP_2120;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3244.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2120;
        float _RESERVED_IDENTIFIER_FIXUP_2160 = _RESERVED_IDENTIFIER_FIXUP_2131 + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3227.w = _RESERVED_IDENTIFIER_FIXUP_2160;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2167 = _RESERVED_IDENTIFIER_FIXUP_3227.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3257;
        _RESERVED_IDENTIFIER_FIXUP_3257.x = _RESERVED_IDENTIFIER_FIXUP_2167.x;
        _RESERVED_IDENTIFIER_FIXUP_3257.y = _RESERVED_IDENTIFIER_FIXUP_2167.y;
        _RESERVED_IDENTIFIER_FIXUP_3257.w = _RESERVED_IDENTIFIER_FIXUP_2120;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3257.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2120;
        float _RESERVED_IDENTIFIER_FIXUP_2189 = _RESERVED_IDENTIFIER_FIXUP_2160 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3227.w = _RESERVED_IDENTIFIER_FIXUP_2189;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2196 = _RESERVED_IDENTIFIER_FIXUP_3227.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3270;
        _RESERVED_IDENTIFIER_FIXUP_3270.x = _RESERVED_IDENTIFIER_FIXUP_2196.x;
        _RESERVED_IDENTIFIER_FIXUP_3270.y = _RESERVED_IDENTIFIER_FIXUP_2196.y;
        _RESERVED_IDENTIFIER_FIXUP_3270.w = _RESERVED_IDENTIFIER_FIXUP_2120;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3270.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2120;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2213 = hdLod6(param_64, param_65);
        float _RESERVED_IDENTIFIER_FIXUP_2218 = _RESERVED_IDENTIFIER_FIXUP_2189 + _RESERVED_IDENTIFIER_FIXUP_2213.x;
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2218;
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2218 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3356 = _RESERVED_IDENTIFIER_FIXUP_2213;
        _RESERVED_IDENTIFIER_FIXUP_3354 = _RESERVED_IDENTIFIER_FIXUP_3227;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2231 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3092 = _RESERVED_IDENTIFIER_FIXUP_3087;
        _RESERVED_IDENTIFIER_FIXUP_3092.z = _RESERVED_IDENTIFIER_FIXUP_2231;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3357;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3355;
        if (_RESERVED_IDENTIFIER_FIXUP_2231 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2240 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2240.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2240.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2246 = hdLod7(param_66, param_67);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2250 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3167 = _RESERVED_IDENTIFIER_FIXUP_3092;
            _RESERVED_IDENTIFIER_FIXUP_3167.z = _RESERVED_IDENTIFIER_FIXUP_2250.x;
            _RESERVED_IDENTIFIER_FIXUP_3167.w = _RESERVED_IDENTIFIER_FIXUP_2250.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2260 = _RESERVED_IDENTIFIER_FIXUP_3167.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3171;
            _RESERVED_IDENTIFIER_FIXUP_3171.x = _RESERVED_IDENTIFIER_FIXUP_2260.x;
            _RESERVED_IDENTIFIER_FIXUP_3171.y = _RESERVED_IDENTIFIER_FIXUP_2260.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2267 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2271 = _RESERVED_IDENTIFIER_FIXUP_2267.y;
            _RESERVED_IDENTIFIER_FIXUP_3171.w = _RESERVED_IDENTIFIER_FIXUP_2271;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3171.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2271;
            float _RESERVED_IDENTIFIER_FIXUP_2282 = _RESERVED_IDENTIFIER_FIXUP_2246.x + hdLod7(param_68, param_69).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3182 = _RESERVED_IDENTIFIER_FIXUP_2246;
            _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_2282;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2289 = _RESERVED_IDENTIFIER_FIXUP_3167.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3184;
            _RESERVED_IDENTIFIER_FIXUP_3184.x = _RESERVED_IDENTIFIER_FIXUP_2289.x;
            _RESERVED_IDENTIFIER_FIXUP_3184.y = _RESERVED_IDENTIFIER_FIXUP_2289.y;
            _RESERVED_IDENTIFIER_FIXUP_3184.w = _RESERVED_IDENTIFIER_FIXUP_2271;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3184.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2271;
            float _RESERVED_IDENTIFIER_FIXUP_2311 = _RESERVED_IDENTIFIER_FIXUP_2282 + hdLod7(param_70, param_71).x;
            _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_2311;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2318 = _RESERVED_IDENTIFIER_FIXUP_3167.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3197;
            _RESERVED_IDENTIFIER_FIXUP_3197.x = _RESERVED_IDENTIFIER_FIXUP_2318.x;
            _RESERVED_IDENTIFIER_FIXUP_3197.y = _RESERVED_IDENTIFIER_FIXUP_2318.y;
            _RESERVED_IDENTIFIER_FIXUP_3197.w = _RESERVED_IDENTIFIER_FIXUP_2271;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3197.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2271;
            float _RESERVED_IDENTIFIER_FIXUP_2340 = _RESERVED_IDENTIFIER_FIXUP_2311 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_2340;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2347 = _RESERVED_IDENTIFIER_FIXUP_3167.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3210;
            _RESERVED_IDENTIFIER_FIXUP_3210.x = _RESERVED_IDENTIFIER_FIXUP_2347.x;
            _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_2347.y;
            _RESERVED_IDENTIFIER_FIXUP_3210.w = _RESERVED_IDENTIFIER_FIXUP_2271;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3210.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2271;
            float _RESERVED_IDENTIFIER_FIXUP_2369 = _RESERVED_IDENTIFIER_FIXUP_2340 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3167.z = _RESERVED_IDENTIFIER_FIXUP_2369;
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_2369 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3357 = _RESERVED_IDENTIFIER_FIXUP_3182;
            _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_3167;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3096 = _RESERVED_IDENTIFIER_FIXUP_3092;
            _RESERVED_IDENTIFIER_FIXUP_3096.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3096.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2385 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2389 = _RESERVED_IDENTIFIER_FIXUP_2385.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3369 = vec4(_RESERVED_IDENTIFIER_FIXUP_2385.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2389);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2400 = _RESERVED_IDENTIFIER_FIXUP_3369.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3370 = vec4(_RESERVED_IDENTIFIER_FIXUP_2400 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2389);
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2400;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2389;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3370.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2389;
            float _RESERVED_IDENTIFIER_FIXUP_2430 = hdLod8(param_76, param_77).x + hdLod8(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3123 = _RESERVED_IDENTIFIER_FIXUP_3369;
            _RESERVED_IDENTIFIER_FIXUP_3123.z = _RESERVED_IDENTIFIER_FIXUP_2430;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2437 = _RESERVED_IDENTIFIER_FIXUP_3123.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3125 = _RESERVED_IDENTIFIER_FIXUP_3370;
            _RESERVED_IDENTIFIER_FIXUP_3125.x = _RESERVED_IDENTIFIER_FIXUP_2437.x;
            _RESERVED_IDENTIFIER_FIXUP_3125.y = _RESERVED_IDENTIFIER_FIXUP_2437.y;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3125.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2389;
            float _RESERVED_IDENTIFIER_FIXUP_2452 = _RESERVED_IDENTIFIER_FIXUP_2430 + hdLod8(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3123.z = _RESERVED_IDENTIFIER_FIXUP_2452;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2459 = _RESERVED_IDENTIFIER_FIXUP_3123.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3134 = _RESERVED_IDENTIFIER_FIXUP_3125;
            _RESERVED_IDENTIFIER_FIXUP_3134.x = _RESERVED_IDENTIFIER_FIXUP_2459.x;
            _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_2459.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3134.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2389;
            float _RESERVED_IDENTIFIER_FIXUP_2474 = _RESERVED_IDENTIFIER_FIXUP_2452 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3123.z = _RESERVED_IDENTIFIER_FIXUP_2474;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2481 = _RESERVED_IDENTIFIER_FIXUP_3123.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3143 = _RESERVED_IDENTIFIER_FIXUP_3134;
            _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_2481.x;
            _RESERVED_IDENTIFIER_FIXUP_3143.y = _RESERVED_IDENTIFIER_FIXUP_2481.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3143.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2389;
            float _RESERVED_IDENTIFIER_FIXUP_2496 = _RESERVED_IDENTIFIER_FIXUP_2474 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3123.x = _RESERVED_IDENTIFIER_FIXUP_2496;
            float _RESERVED_IDENTIFIER_FIXUP_2504 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3123.y = _RESERVED_IDENTIFIER_FIXUP_2504;
            float _RESERVED_IDENTIFIER_FIXUP_2510 = clamp((_RESERVED_IDENTIFIER_FIXUP_2504 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3096.z = _RESERVED_IDENTIFIER_FIXUP_2510;
            float _RESERVED_IDENTIFIER_FIXUP_2515 = (_RESERVED_IDENTIFIER_FIXUP_2496 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3096.w = _RESERVED_IDENTIFIER_FIXUP_2515;
            _RESERVED_IDENTIFIER_FIXUP_3096.y = (_RESERVED_IDENTIFIER_FIXUP_2510 * _RESERVED_IDENTIFIER_FIXUP_2515) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3357 = _RESERVED_IDENTIFIER_FIXUP_3123;
            _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_3096;
        }
        _RESERVED_IDENTIFIER_FIXUP_3356 = _RESERVED_IDENTIFIER_FIXUP_3357;
        _RESERVED_IDENTIFIER_FIXUP_3354 = _RESERVED_IDENTIFIER_FIXUP_3355;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2530 = min(_RESERVED_IDENTIFIER_FIXUP_3354.y, _RESERVED_IDENTIFIER_FIXUP_3354.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3288 = _RESERVED_IDENTIFIER_FIXUP_3356;
    _RESERVED_IDENTIFIER_FIXUP_3288.x = _RESERVED_IDENTIFIER_FIXUP_2530;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3291 = _RESERVED_IDENTIFIER_FIXUP_3354;
    _RESERVED_IDENTIFIER_FIXUP_3291.x = (_RESERVED_IDENTIFIER_FIXUP_2530 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2541 = _RESERVED_IDENTIFIER_FIXUP_1897.xyz * _RESERVED_IDENTIFIER_FIXUP_3291.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3293 = _RESERVED_IDENTIFIER_FIXUP_1897;
    _RESERVED_IDENTIFIER_FIXUP_3293.x = _RESERVED_IDENTIFIER_FIXUP_2541.x;
    _RESERVED_IDENTIFIER_FIXUP_3293.y = _RESERVED_IDENTIFIER_FIXUP_2541.y;
    _RESERVED_IDENTIFIER_FIXUP_3293.z = _RESERVED_IDENTIFIER_FIXUP_2541.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2552 = _RESERVED_IDENTIFIER_FIXUP_3293.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3299 = _RESERVED_IDENTIFIER_FIXUP_3293;
    _RESERVED_IDENTIFIER_FIXUP_3299.x = _RESERVED_IDENTIFIER_FIXUP_2552.x;
    _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_2552.y;
    _RESERVED_IDENTIFIER_FIXUP_3299.z = _RESERVED_IDENTIFIER_FIXUP_2552.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2563 = _RESERVED_IDENTIFIER_FIXUP_3299.xyz + _RESERVED_IDENTIFIER_FIXUP_3299.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_3299;
    _RESERVED_IDENTIFIER_FIXUP_3305.x = _RESERVED_IDENTIFIER_FIXUP_2563.x;
    _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_2563.y;
    _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_2563.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2574 = _RESERVED_IDENTIFIER_FIXUP_3305.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3291.x = _RESERVED_IDENTIFIER_FIXUP_2574.x;
    _RESERVED_IDENTIFIER_FIXUP_3291.y = _RESERVED_IDENTIFIER_FIXUP_2574.y;
    _RESERVED_IDENTIFIER_FIXUP_3291.z = _RESERVED_IDENTIFIER_FIXUP_2574.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2588 = (_RESERVED_IDENTIFIER_FIXUP_3291.xyz * _RESERVED_IDENTIFIER_FIXUP_3288.xxx) + _RESERVED_IDENTIFIER_FIXUP_3305.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3317 = _RESERVED_IDENTIFIER_FIXUP_3305;
    _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_2588.x;
    _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_2588.y;
    _RESERVED_IDENTIFIER_FIXUP_3317.z = _RESERVED_IDENTIFIER_FIXUP_2588.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2601 = _RESERVED_IDENTIFIER_FIXUP_3317.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3323 = _RESERVED_IDENTIFIER_FIXUP_3317;
    _RESERVED_IDENTIFIER_FIXUP_3323.x = _RESERVED_IDENTIFIER_FIXUP_2601.x;
    _RESERVED_IDENTIFIER_FIXUP_3323.y = _RESERVED_IDENTIFIER_FIXUP_2601.y;
    _RESERVED_IDENTIFIER_FIXUP_3323.z = _RESERVED_IDENTIFIER_FIXUP_2601.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3323.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_921 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_930;
    if (_RESERVED_IDENTIFIER_FIXUP_921)
    {
        _RESERVED_IDENTIFIER_FIXUP_930 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_930 = _RESERVED_IDENTIFIER_FIXUP_921;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_930)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_967 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2988.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_994 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2660;
    if (_RESERVED_IDENTIFIER_FIXUP_967 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2660 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_967), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_994);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2660 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_994);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2660;
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        vec2 hdB160 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB160.x;
        r1.z = hdB160.y;
        vec2 hdB181 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB181.x;
        r3.y = hdB181.y;
        vec2 hdB189 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB189.x;
        r3.w = hdB189.y;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r1.w = r2.x + r3.x;
        vec2 hdB212 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB212.x;
        r2.y = hdB212.y;
        vec2 hdB219 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB219.x;
        r2.w = hdB219.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.w += r2.x;
        vec2 hdB242 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB242.x;
        r2.y = hdB242.y;
        vec2 hdB249 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB249.x;
        r2.w = hdB249.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB272 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB272.x;
        r2.y = hdB272.y;
        vec2 hdB279 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB279.x;
        r2.w = hdB279.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
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
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod6(param_13, param_14);
        vec2 hdB339 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB339.x;
        r1.z = hdB339.y;
        vec2 hdB349 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB349.x;
        r3.y = hdB349.y;
        vec2 hdB356 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB356.x;
        r3.w = hdB356.y;
        vec2 param_15 = r3.xy;
        float param_16 = r3.w;
        r3 = hdLod6(param_15, param_16);
        r1.w = r2.x + r3.x;
        vec2 hdB378 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB378.x;
        r2.y = hdB378.y;
        vec2 hdB385 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB385.x;
        r2.w = hdB385.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod6(param_17, param_18);
        r1.w += r2.x;
        vec2 hdB407 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB407.x;
        r2.y = hdB407.y;
        vec2 hdB414 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB414.x;
        r2.w = hdB414.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod6(param_19, param_20);
        r1.w += r2.x;
        vec2 hdB436 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB436.x;
        r2.y = hdB436.y;
        vec2 hdB443 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB443.x;
        r2.w = hdB443.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod6(param_21, param_22);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod7(param_23, param_24);
            vec2 hdB492 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB492.x;
            r1.w = hdB492.y;
            vec2 hdB502 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB502.x;
            r3.y = hdB502.y;
            vec2 hdB509 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB509.x;
            r3.w = hdB509.y;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod7(param_25, param_26);
            r2.x += r3.x;
            vec2 hdB531 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB531.x;
            r3.y = hdB531.y;
            vec2 hdB538 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB538.x;
            r3.w = hdB538.y;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r2.x += r3.x;
            vec2 hdB560 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB560.x;
            r3.y = hdB560.y;
            vec2 hdB567 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB567.x;
            r3.w = hdB567.y;
            vec2 param_29 = r3.xy;
            float param_30 = r3.w;
            r3 = hdLod7(param_29, param_30);
            r2.x += r3.x;
            vec2 hdB589 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB589.x;
            r3.y = hdB589.y;
            vec2 hdB596 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB596.x;
            r3.w = hdB596.y;
            vec2 param_31 = r3.xy;
            float param_32 = r3.w;
            r3 = hdLod7(param_31, param_32);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 hdB628 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB628.x;
            r2.w = hdB628.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_33 = r2.xy;
            float param_34 = r2.w;
            r3 = hdLod8(param_33, param_34);
            vec2 hdB653 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB653.x;
            r4.y = hdB653.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r5 = hdLod8(param_35, param_36);
            r2.z = r3.x + r5.x;
            vec2 hdB681 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB681.x;
            r4.y = hdB681.y;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r3 = hdLod8(param_37, param_38);
            r2.z += r3.x;
            vec2 hdB703 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB703.x;
            r4.y = hdB703.y;
            vec2 param_39 = r4.xy;
            float param_40 = r4.w;
            r3 = hdLod8(param_39, param_40);
            r2.z += r3.x;
            vec2 hdB725 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB725.x;
            r4.y = hdB725.y;
            vec2 param_41 = r4.xy;
            float param_42 = r4.w;
            r3 = hdLod8(param_41, param_42);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB783 = r0;
    vec3 hdB787 = hdB783.xyz * r1.xxx;
    r0.x = hdB787.x;
    r0.y = hdB787.y;
    r0.z = hdB787.z;
    vec4 hdB794 = r0;
    vec3 hdB798 = hdB794.xyz * v0.xyz;
    r0.x = hdB798.x;
    r0.y = hdB798.y;
    r0.z = hdB798.z;
    vec4 hdB805 = r0;
    vec4 hdB807 = r0;
    vec3 hdB809 = hdB805.xyz + hdB807.xyz;
    r0.x = hdB809.x;
    r0.y = hdB809.y;
    r0.z = hdB809.z;
    vec3 hdB820 = r0.www * v1.xyz;
    r1.x = hdB820.x;
    r1.y = hdB820.y;
    r1.z = hdB820.z;
    vec4 hdB832 = r0;
    vec3 hdB834 = (r1.xyz * r2.xxx) + hdB832.xyz;
    r0.x = hdB834.x;
    r0.y = hdB834.y;
    r0.z = hdB834.z;
    vec4 hdB841 = r0;
    vec3 hdB848 = hdB841.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB848.x;
    r0.y = hdB848.y;
    r0.z = hdB848.z;
    vec3 hdB863 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB863.x;
    oC0.y = hdB863.y;
    oC0.z = hdB863.z;
    oC0.w = 1.0;
    bool hdB876 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB884;
    if (hdB876)
    {
        hdB884 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB884 = hdB876;
    }
    if (hdB884)
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
    bool _3176 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3186;
    if (_3176)
    {
        _3186 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3186 = _3176;
    }
    if (_3186)
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
        bool _3211 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3226;
        if (!_3211)
        {
            _3226 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3226 = _3211;
        }
        if (_3226)
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
