#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

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
float _RESERVED_IDENTIFIER_FIXUP_3295;
vec4 _RESERVED_IDENTIFIER_FIXUP_3296;


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
    bool _61 = hdOverride >= 0;
    bool _81;
    if (_61)
    {
        _81 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _81 = _61;
    }
    vec4 _82;
    if (_81)
    {
        _82 = vec4(float(hdOverride));
    }
    else
    {
        _82 = value;
    }
    return _82;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _99 = hdOverride >= 0;
    bool _108;
    if (_99)
    {
        _108 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _108 = _99;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _126 = hdOverride >= 0;
    bool _136;
    if (_126)
    {
        _136 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1043 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1047 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1051 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1055 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1051.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2626 = _RESERVED_IDENTIFIER_FIXUP_1051;
    _RESERVED_IDENTIFIER_FIXUP_2626.y = _RESERVED_IDENTIFIER_FIXUP_1055;
    _RESERVED_IDENTIFIER_FIXUP_2626.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1055;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1065 = _RESERVED_IDENTIFIER_FIXUP_1047 * _RESERVED_IDENTIFIER_FIXUP_2626.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1071 = (_RESERVED_IDENTIFIER_FIXUP_1043 * _RESERVED_IDENTIFIER_FIXUP_2626.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1065;
    float _RESERVED_IDENTIFIER_FIXUP_1078 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2633 = _RESERVED_IDENTIFIER_FIXUP_1065;
    _RESERVED_IDENTIFIER_FIXUP_2633.x = _RESERVED_IDENTIFIER_FIXUP_1078;
    float _RESERVED_IDENTIFIER_FIXUP_1084 = clamp((_RESERVED_IDENTIFIER_FIXUP_1078 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2633.x = _RESERVED_IDENTIFIER_FIXUP_1084;
    float _RESERVED_IDENTIFIER_FIXUP_1090 = ((-_RESERVED_IDENTIFIER_FIXUP_1084) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2633.y = _RESERVED_IDENTIFIER_FIXUP_1090;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3297;
    if (_RESERVED_IDENTIFIER_FIXUP_1090 != (-_RESERVED_IDENTIFIER_FIXUP_1090))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1102 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1112 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_1112.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2646 = _RESERVED_IDENTIFIER_FIXUP_2633;
        _RESERVED_IDENTIFIER_FIXUP_2646.y = _RESERVED_IDENTIFIER_FIXUP_1114;
        _RESERVED_IDENTIFIER_FIXUP_2646.z = _RESERVED_IDENTIFIER_FIXUP_1112.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1122 = _RESERVED_IDENTIFIER_FIXUP_2646.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2650;
        _RESERVED_IDENTIFIER_FIXUP_2650.x = _RESERVED_IDENTIFIER_FIXUP_1122.x;
        _RESERVED_IDENTIFIER_FIXUP_2650.y = _RESERVED_IDENTIFIER_FIXUP_1122.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1129 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1133 = _RESERVED_IDENTIFIER_FIXUP_1129.y;
        _RESERVED_IDENTIFIER_FIXUP_2650.w = _RESERVED_IDENTIFIER_FIXUP_1133;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1102.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1102.w;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2650.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1133;
        float _RESERVED_IDENTIFIER_FIXUP_1144 = hdLod5(param_3, param_4).x + hdLod5(param_5, param_6).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3323 = vec4(_RESERVED_IDENTIFIER_FIXUP_1084, _RESERVED_IDENTIFIER_FIXUP_1114, _RESERVED_IDENTIFIER_FIXUP_1112.y, _RESERVED_IDENTIFIER_FIXUP_1144);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_3323.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2663;
        _RESERVED_IDENTIFIER_FIXUP_2663.x = _RESERVED_IDENTIFIER_FIXUP_1151.x;
        _RESERVED_IDENTIFIER_FIXUP_2663.y = _RESERVED_IDENTIFIER_FIXUP_1151.y;
        _RESERVED_IDENTIFIER_FIXUP_2663.w = _RESERVED_IDENTIFIER_FIXUP_1133;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2663.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1133;
        float _RESERVED_IDENTIFIER_FIXUP_1173 = _RESERVED_IDENTIFIER_FIXUP_1144 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3323.w = _RESERVED_IDENTIFIER_FIXUP_1173;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_3323.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2676;
        _RESERVED_IDENTIFIER_FIXUP_2676.x = _RESERVED_IDENTIFIER_FIXUP_1180.x;
        _RESERVED_IDENTIFIER_FIXUP_2676.y = _RESERVED_IDENTIFIER_FIXUP_1180.y;
        _RESERVED_IDENTIFIER_FIXUP_2676.w = _RESERVED_IDENTIFIER_FIXUP_1133;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2676.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1133;
        float _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1173 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3323.w = _RESERVED_IDENTIFIER_FIXUP_1202;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_3323.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2689;
        _RESERVED_IDENTIFIER_FIXUP_2689.x = _RESERVED_IDENTIFIER_FIXUP_1209.x;
        _RESERVED_IDENTIFIER_FIXUP_2689.y = _RESERVED_IDENTIFIER_FIXUP_1209.y;
        _RESERVED_IDENTIFIER_FIXUP_2689.w = _RESERVED_IDENTIFIER_FIXUP_1133;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2689.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1133;
        float _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1202 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3323.y = _RESERVED_IDENTIFIER_FIXUP_1231;
        float _RESERVED_IDENTIFIER_FIXUP_1236 = (_RESERVED_IDENTIFIER_FIXUP_1231 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3323.y = _RESERVED_IDENTIFIER_FIXUP_1236;
        _RESERVED_IDENTIFIER_FIXUP_3323.x = (_RESERVED_IDENTIFIER_FIXUP_1084 * _RESERVED_IDENTIFIER_FIXUP_1236) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3297 = _RESERVED_IDENTIFIER_FIXUP_3323;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2643 = _RESERVED_IDENTIFIER_FIXUP_2633;
        _RESERVED_IDENTIFIER_FIXUP_2643.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3297 = _RESERVED_IDENTIFIER_FIXUP_2643;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1254 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2711 = _RESERVED_IDENTIFIER_FIXUP_3297;
    _RESERVED_IDENTIFIER_FIXUP_2711.y = _RESERVED_IDENTIFIER_FIXUP_1254;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3302;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3300;
    if (_RESERVED_IDENTIFIER_FIXUP_1254 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1263 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1273 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2851 = _RESERVED_IDENTIFIER_FIXUP_2711;
        _RESERVED_IDENTIFIER_FIXUP_2851.y = _RESERVED_IDENTIFIER_FIXUP_1273.x;
        _RESERVED_IDENTIFIER_FIXUP_2851.z = _RESERVED_IDENTIFIER_FIXUP_1273.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_2851.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2855;
        _RESERVED_IDENTIFIER_FIXUP_2855.x = _RESERVED_IDENTIFIER_FIXUP_1283.x;
        _RESERVED_IDENTIFIER_FIXUP_2855.y = _RESERVED_IDENTIFIER_FIXUP_1283.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1290 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_1290.y;
        _RESERVED_IDENTIFIER_FIXUP_2855.w = _RESERVED_IDENTIFIER_FIXUP_1294;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1263.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1263.w;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_2855.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1294;
        float _RESERVED_IDENTIFIER_FIXUP_1305 = hdLod6(param_13, param_14).x + hdLod6(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_2851.w = _RESERVED_IDENTIFIER_FIXUP_1305;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_2851.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2868;
        _RESERVED_IDENTIFIER_FIXUP_2868.x = _RESERVED_IDENTIFIER_FIXUP_1312.x;
        _RESERVED_IDENTIFIER_FIXUP_2868.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
        _RESERVED_IDENTIFIER_FIXUP_2868.w = _RESERVED_IDENTIFIER_FIXUP_1294;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2868.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1294;
        float _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_1305 + hdLod6(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_2851.w = _RESERVED_IDENTIFIER_FIXUP_1334;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1341 = _RESERVED_IDENTIFIER_FIXUP_2851.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2881;
        _RESERVED_IDENTIFIER_FIXUP_2881.x = _RESERVED_IDENTIFIER_FIXUP_1341.x;
        _RESERVED_IDENTIFIER_FIXUP_2881.y = _RESERVED_IDENTIFIER_FIXUP_1341.y;
        _RESERVED_IDENTIFIER_FIXUP_2881.w = _RESERVED_IDENTIFIER_FIXUP_1294;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2881.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1294;
        float _RESERVED_IDENTIFIER_FIXUP_1363 = _RESERVED_IDENTIFIER_FIXUP_1334 + hdLod6(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_2851.w = _RESERVED_IDENTIFIER_FIXUP_1363;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1370 = _RESERVED_IDENTIFIER_FIXUP_2851.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2894;
        _RESERVED_IDENTIFIER_FIXUP_2894.x = _RESERVED_IDENTIFIER_FIXUP_1370.x;
        _RESERVED_IDENTIFIER_FIXUP_2894.y = _RESERVED_IDENTIFIER_FIXUP_1370.y;
        _RESERVED_IDENTIFIER_FIXUP_2894.w = _RESERVED_IDENTIFIER_FIXUP_1294;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_2894.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1294;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1387 = hdLod6(param_21, param_22);
        float _RESERVED_IDENTIFIER_FIXUP_1392 = _RESERVED_IDENTIFIER_FIXUP_1363 + _RESERVED_IDENTIFIER_FIXUP_1387.x;
        _RESERVED_IDENTIFIER_FIXUP_2851.y = _RESERVED_IDENTIFIER_FIXUP_1392;
        _RESERVED_IDENTIFIER_FIXUP_2851.y = _RESERVED_IDENTIFIER_FIXUP_1392 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3302 = _RESERVED_IDENTIFIER_FIXUP_1387;
        _RESERVED_IDENTIFIER_FIXUP_3300 = _RESERVED_IDENTIFIER_FIXUP_2851;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1405 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2716 = _RESERVED_IDENTIFIER_FIXUP_2711;
        _RESERVED_IDENTIFIER_FIXUP_2716.z = _RESERVED_IDENTIFIER_FIXUP_1405;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3303;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3301;
        if (_RESERVED_IDENTIFIER_FIXUP_1405 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1414 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1414.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1414.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = hdLod7(param_23, param_24);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1424 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2791 = _RESERVED_IDENTIFIER_FIXUP_2716;
            _RESERVED_IDENTIFIER_FIXUP_2791.z = _RESERVED_IDENTIFIER_FIXUP_1424.x;
            _RESERVED_IDENTIFIER_FIXUP_2791.w = _RESERVED_IDENTIFIER_FIXUP_1424.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1434 = _RESERVED_IDENTIFIER_FIXUP_2791.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2795;
            _RESERVED_IDENTIFIER_FIXUP_2795.x = _RESERVED_IDENTIFIER_FIXUP_1434.x;
            _RESERVED_IDENTIFIER_FIXUP_2795.y = _RESERVED_IDENTIFIER_FIXUP_1434.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1441 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1445 = _RESERVED_IDENTIFIER_FIXUP_1441.y;
            _RESERVED_IDENTIFIER_FIXUP_2795.w = _RESERVED_IDENTIFIER_FIXUP_1445;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_2795.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1445;
            float _RESERVED_IDENTIFIER_FIXUP_1456 = _RESERVED_IDENTIFIER_FIXUP_1420.x + hdLod7(param_25, param_26).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2806 = _RESERVED_IDENTIFIER_FIXUP_1420;
            _RESERVED_IDENTIFIER_FIXUP_2806.x = _RESERVED_IDENTIFIER_FIXUP_1456;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1463 = _RESERVED_IDENTIFIER_FIXUP_2791.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2808;
            _RESERVED_IDENTIFIER_FIXUP_2808.x = _RESERVED_IDENTIFIER_FIXUP_1463.x;
            _RESERVED_IDENTIFIER_FIXUP_2808.y = _RESERVED_IDENTIFIER_FIXUP_1463.y;
            _RESERVED_IDENTIFIER_FIXUP_2808.w = _RESERVED_IDENTIFIER_FIXUP_1445;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2808.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1445;
            float _RESERVED_IDENTIFIER_FIXUP_1485 = _RESERVED_IDENTIFIER_FIXUP_1456 + hdLod7(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_2806.x = _RESERVED_IDENTIFIER_FIXUP_1485;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_2791.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2821;
            _RESERVED_IDENTIFIER_FIXUP_2821.x = _RESERVED_IDENTIFIER_FIXUP_1492.x;
            _RESERVED_IDENTIFIER_FIXUP_2821.y = _RESERVED_IDENTIFIER_FIXUP_1492.y;
            _RESERVED_IDENTIFIER_FIXUP_2821.w = _RESERVED_IDENTIFIER_FIXUP_1445;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2821.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1445;
            float _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_1485 + hdLod7(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_2806.x = _RESERVED_IDENTIFIER_FIXUP_1514;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1521 = _RESERVED_IDENTIFIER_FIXUP_2791.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2834;
            _RESERVED_IDENTIFIER_FIXUP_2834.x = _RESERVED_IDENTIFIER_FIXUP_1521.x;
            _RESERVED_IDENTIFIER_FIXUP_2834.y = _RESERVED_IDENTIFIER_FIXUP_1521.y;
            _RESERVED_IDENTIFIER_FIXUP_2834.w = _RESERVED_IDENTIFIER_FIXUP_1445;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2834.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1445;
            float _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_1514 + hdLod7(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_2791.z = _RESERVED_IDENTIFIER_FIXUP_1543;
            _RESERVED_IDENTIFIER_FIXUP_2791.y = _RESERVED_IDENTIFIER_FIXUP_1543 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3303 = _RESERVED_IDENTIFIER_FIXUP_2806;
            _RESERVED_IDENTIFIER_FIXUP_3301 = _RESERVED_IDENTIFIER_FIXUP_2791;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2720 = _RESERVED_IDENTIFIER_FIXUP_2716;
            _RESERVED_IDENTIFIER_FIXUP_2720.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2720.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1559 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1563 = _RESERVED_IDENTIFIER_FIXUP_1559.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3324 = vec4(_RESERVED_IDENTIFIER_FIXUP_1559.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1563);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1574 = _RESERVED_IDENTIFIER_FIXUP_3324.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3325 = vec4(_RESERVED_IDENTIFIER_FIXUP_1574 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1563);
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1574;
            float param_34 = _RESERVED_IDENTIFIER_FIXUP_1563;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3325.xy;
            float param_36 = _RESERVED_IDENTIFIER_FIXUP_1563;
            float _RESERVED_IDENTIFIER_FIXUP_1604 = hdLod8(param_33, param_34).x + hdLod8(param_35, param_36).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2747 = _RESERVED_IDENTIFIER_FIXUP_3324;
            _RESERVED_IDENTIFIER_FIXUP_2747.z = _RESERVED_IDENTIFIER_FIXUP_1604;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1611 = _RESERVED_IDENTIFIER_FIXUP_2747.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2749 = _RESERVED_IDENTIFIER_FIXUP_3325;
            _RESERVED_IDENTIFIER_FIXUP_2749.x = _RESERVED_IDENTIFIER_FIXUP_1611.x;
            _RESERVED_IDENTIFIER_FIXUP_2749.y = _RESERVED_IDENTIFIER_FIXUP_1611.y;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2749.xy;
            float param_38 = _RESERVED_IDENTIFIER_FIXUP_1563;
            float _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_1604 + hdLod8(param_37, param_38).x;
            _RESERVED_IDENTIFIER_FIXUP_2747.z = _RESERVED_IDENTIFIER_FIXUP_1626;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1633 = _RESERVED_IDENTIFIER_FIXUP_2747.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2758 = _RESERVED_IDENTIFIER_FIXUP_2749;
            _RESERVED_IDENTIFIER_FIXUP_2758.x = _RESERVED_IDENTIFIER_FIXUP_1633.x;
            _RESERVED_IDENTIFIER_FIXUP_2758.y = _RESERVED_IDENTIFIER_FIXUP_1633.y;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2758.xy;
            float param_40 = _RESERVED_IDENTIFIER_FIXUP_1563;
            float _RESERVED_IDENTIFIER_FIXUP_1648 = _RESERVED_IDENTIFIER_FIXUP_1626 + hdLod8(param_39, param_40).x;
            _RESERVED_IDENTIFIER_FIXUP_2747.z = _RESERVED_IDENTIFIER_FIXUP_1648;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1655 = _RESERVED_IDENTIFIER_FIXUP_2747.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2767 = _RESERVED_IDENTIFIER_FIXUP_2758;
            _RESERVED_IDENTIFIER_FIXUP_2767.x = _RESERVED_IDENTIFIER_FIXUP_1655.x;
            _RESERVED_IDENTIFIER_FIXUP_2767.y = _RESERVED_IDENTIFIER_FIXUP_1655.y;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2767.xy;
            float param_42 = _RESERVED_IDENTIFIER_FIXUP_1563;
            float _RESERVED_IDENTIFIER_FIXUP_1670 = _RESERVED_IDENTIFIER_FIXUP_1648 + hdLod8(param_41, param_42).x;
            _RESERVED_IDENTIFIER_FIXUP_2747.x = _RESERVED_IDENTIFIER_FIXUP_1670;
            float _RESERVED_IDENTIFIER_FIXUP_1678 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2747.y = _RESERVED_IDENTIFIER_FIXUP_1678;
            float _RESERVED_IDENTIFIER_FIXUP_1684 = clamp((_RESERVED_IDENTIFIER_FIXUP_1678 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2720.z = _RESERVED_IDENTIFIER_FIXUP_1684;
            float _RESERVED_IDENTIFIER_FIXUP_1689 = (_RESERVED_IDENTIFIER_FIXUP_1670 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2720.w = _RESERVED_IDENTIFIER_FIXUP_1689;
            _RESERVED_IDENTIFIER_FIXUP_2720.y = (_RESERVED_IDENTIFIER_FIXUP_1684 * _RESERVED_IDENTIFIER_FIXUP_1689) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3303 = _RESERVED_IDENTIFIER_FIXUP_2747;
            _RESERVED_IDENTIFIER_FIXUP_3301 = _RESERVED_IDENTIFIER_FIXUP_2720;
        }
        _RESERVED_IDENTIFIER_FIXUP_3302 = _RESERVED_IDENTIFIER_FIXUP_3303;
        _RESERVED_IDENTIFIER_FIXUP_3300 = _RESERVED_IDENTIFIER_FIXUP_3301;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1704 = min(_RESERVED_IDENTIFIER_FIXUP_3300.y, _RESERVED_IDENTIFIER_FIXUP_3300.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2912 = _RESERVED_IDENTIFIER_FIXUP_3302;
    _RESERVED_IDENTIFIER_FIXUP_2912.x = _RESERVED_IDENTIFIER_FIXUP_1704;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2915 = _RESERVED_IDENTIFIER_FIXUP_3300;
    _RESERVED_IDENTIFIER_FIXUP_2915.x = (_RESERVED_IDENTIFIER_FIXUP_1704 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1715 = _RESERVED_IDENTIFIER_FIXUP_1071.xyz * _RESERVED_IDENTIFIER_FIXUP_2915.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2917 = _RESERVED_IDENTIFIER_FIXUP_1071;
    _RESERVED_IDENTIFIER_FIXUP_2917.x = _RESERVED_IDENTIFIER_FIXUP_1715.x;
    _RESERVED_IDENTIFIER_FIXUP_2917.y = _RESERVED_IDENTIFIER_FIXUP_1715.y;
    _RESERVED_IDENTIFIER_FIXUP_2917.z = _RESERVED_IDENTIFIER_FIXUP_1715.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1726 = _RESERVED_IDENTIFIER_FIXUP_2917.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3295).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2923 = _RESERVED_IDENTIFIER_FIXUP_2917;
    _RESERVED_IDENTIFIER_FIXUP_2923.x = _RESERVED_IDENTIFIER_FIXUP_1726.x;
    _RESERVED_IDENTIFIER_FIXUP_2923.y = _RESERVED_IDENTIFIER_FIXUP_1726.y;
    _RESERVED_IDENTIFIER_FIXUP_2923.z = _RESERVED_IDENTIFIER_FIXUP_1726.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1737 = _RESERVED_IDENTIFIER_FIXUP_2923.xyz + _RESERVED_IDENTIFIER_FIXUP_2923.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2929 = _RESERVED_IDENTIFIER_FIXUP_2923;
    _RESERVED_IDENTIFIER_FIXUP_2929.x = _RESERVED_IDENTIFIER_FIXUP_1737.x;
    _RESERVED_IDENTIFIER_FIXUP_2929.y = _RESERVED_IDENTIFIER_FIXUP_1737.y;
    _RESERVED_IDENTIFIER_FIXUP_2929.z = _RESERVED_IDENTIFIER_FIXUP_1737.z;
    _RESERVED_IDENTIFIER_FIXUP_2915.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2915.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2915.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1762 = (_RESERVED_IDENTIFIER_FIXUP_2915.xyz * _RESERVED_IDENTIFIER_FIXUP_2912.xxx) + _RESERVED_IDENTIFIER_FIXUP_2929.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2941 = _RESERVED_IDENTIFIER_FIXUP_2929;
    _RESERVED_IDENTIFIER_FIXUP_2941.x = _RESERVED_IDENTIFIER_FIXUP_1762.x;
    _RESERVED_IDENTIFIER_FIXUP_2941.y = _RESERVED_IDENTIFIER_FIXUP_1762.y;
    _RESERVED_IDENTIFIER_FIXUP_2941.z = _RESERVED_IDENTIFIER_FIXUP_1762.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1775 = _RESERVED_IDENTIFIER_FIXUP_2941.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2947 = _RESERVED_IDENTIFIER_FIXUP_2941;
    _RESERVED_IDENTIFIER_FIXUP_2947.x = _RESERVED_IDENTIFIER_FIXUP_1775.x;
    _RESERVED_IDENTIFIER_FIXUP_2947.y = _RESERVED_IDENTIFIER_FIXUP_1775.y;
    _RESERVED_IDENTIFIER_FIXUP_2947.z = _RESERVED_IDENTIFIER_FIXUP_1775.z;
    vec2 param_43 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1828 = hdTex0(param_43);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1832 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1836 = hdTex2(param_45);
    float _RESERVED_IDENTIFIER_FIXUP_1840 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1836.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2961 = _RESERVED_IDENTIFIER_FIXUP_1836;
    _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1840;
    _RESERVED_IDENTIFIER_FIXUP_2961.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1840;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1850 = _RESERVED_IDENTIFIER_FIXUP_1832 * _RESERVED_IDENTIFIER_FIXUP_2961.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1856 = (_RESERVED_IDENTIFIER_FIXUP_1828 * _RESERVED_IDENTIFIER_FIXUP_2961.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1850;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2968 = _RESERVED_IDENTIFIER_FIXUP_1850;
    _RESERVED_IDENTIFIER_FIXUP_2968.x = _RESERVED_IDENTIFIER_FIXUP_1078;
    float _RESERVED_IDENTIFIER_FIXUP_1869 = clamp((_RESERVED_IDENTIFIER_FIXUP_1078 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2968.x = _RESERVED_IDENTIFIER_FIXUP_1869;
    float _RESERVED_IDENTIFIER_FIXUP_1875 = ((-_RESERVED_IDENTIFIER_FIXUP_1869) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2968.y = _RESERVED_IDENTIFIER_FIXUP_1875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
    if (_RESERVED_IDENTIFIER_FIXUP_1875 != (-_RESERVED_IDENTIFIER_FIXUP_1875))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1887 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1897 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1899 = _RESERVED_IDENTIFIER_FIXUP_1897.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2981 = _RESERVED_IDENTIFIER_FIXUP_2968;
        _RESERVED_IDENTIFIER_FIXUP_2981.y = _RESERVED_IDENTIFIER_FIXUP_1899;
        _RESERVED_IDENTIFIER_FIXUP_2981.z = _RESERVED_IDENTIFIER_FIXUP_1897.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1907 = _RESERVED_IDENTIFIER_FIXUP_2981.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2985;
        _RESERVED_IDENTIFIER_FIXUP_2985.x = _RESERVED_IDENTIFIER_FIXUP_1907.x;
        _RESERVED_IDENTIFIER_FIXUP_2985.y = _RESERVED_IDENTIFIER_FIXUP_1907.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1914 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1918 = _RESERVED_IDENTIFIER_FIXUP_1914.y;
        _RESERVED_IDENTIFIER_FIXUP_2985.w = _RESERVED_IDENTIFIER_FIXUP_1918;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_1887.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_1887.w;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2985.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1918;
        float _RESERVED_IDENTIFIER_FIXUP_1929 = hdLod5(param_46, param_47).x + hdLod5(param_48, param_49).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3327 = vec4(_RESERVED_IDENTIFIER_FIXUP_1869, _RESERVED_IDENTIFIER_FIXUP_1899, _RESERVED_IDENTIFIER_FIXUP_1897.y, _RESERVED_IDENTIFIER_FIXUP_1929);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1936 = _RESERVED_IDENTIFIER_FIXUP_3327.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2998;
        _RESERVED_IDENTIFIER_FIXUP_2998.x = _RESERVED_IDENTIFIER_FIXUP_1936.x;
        _RESERVED_IDENTIFIER_FIXUP_2998.y = _RESERVED_IDENTIFIER_FIXUP_1936.y;
        _RESERVED_IDENTIFIER_FIXUP_2998.w = _RESERVED_IDENTIFIER_FIXUP_1918;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2998.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1918;
        float _RESERVED_IDENTIFIER_FIXUP_1958 = _RESERVED_IDENTIFIER_FIXUP_1929 + hdLod5(param_50, param_51).x;
        _RESERVED_IDENTIFIER_FIXUP_3327.w = _RESERVED_IDENTIFIER_FIXUP_1958;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1965 = _RESERVED_IDENTIFIER_FIXUP_3327.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3011;
        _RESERVED_IDENTIFIER_FIXUP_3011.x = _RESERVED_IDENTIFIER_FIXUP_1965.x;
        _RESERVED_IDENTIFIER_FIXUP_3011.y = _RESERVED_IDENTIFIER_FIXUP_1965.y;
        _RESERVED_IDENTIFIER_FIXUP_3011.w = _RESERVED_IDENTIFIER_FIXUP_1918;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3011.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1918;
        float _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_1958 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3327.w = _RESERVED_IDENTIFIER_FIXUP_1987;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1994 = _RESERVED_IDENTIFIER_FIXUP_3327.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3024;
        _RESERVED_IDENTIFIER_FIXUP_3024.x = _RESERVED_IDENTIFIER_FIXUP_1994.x;
        _RESERVED_IDENTIFIER_FIXUP_3024.y = _RESERVED_IDENTIFIER_FIXUP_1994.y;
        _RESERVED_IDENTIFIER_FIXUP_3024.w = _RESERVED_IDENTIFIER_FIXUP_1918;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3024.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_1918;
        float _RESERVED_IDENTIFIER_FIXUP_2016 = _RESERVED_IDENTIFIER_FIXUP_1987 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3327.y = _RESERVED_IDENTIFIER_FIXUP_2016;
        float _RESERVED_IDENTIFIER_FIXUP_2021 = (_RESERVED_IDENTIFIER_FIXUP_2016 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3327.y = _RESERVED_IDENTIFIER_FIXUP_2021;
        _RESERVED_IDENTIFIER_FIXUP_3327.x = (_RESERVED_IDENTIFIER_FIXUP_1869 * _RESERVED_IDENTIFIER_FIXUP_2021) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3310 = _RESERVED_IDENTIFIER_FIXUP_3327;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2978 = _RESERVED_IDENTIFIER_FIXUP_2968;
        _RESERVED_IDENTIFIER_FIXUP_2978.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3310 = _RESERVED_IDENTIFIER_FIXUP_2978;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3046 = _RESERVED_IDENTIFIER_FIXUP_3310;
    _RESERVED_IDENTIFIER_FIXUP_3046.y = _RESERVED_IDENTIFIER_FIXUP_1254;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3315;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3313;
    if (_RESERVED_IDENTIFIER_FIXUP_1254 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2048 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2058 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3186 = _RESERVED_IDENTIFIER_FIXUP_3046;
        _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_2058.x;
        _RESERVED_IDENTIFIER_FIXUP_3186.z = _RESERVED_IDENTIFIER_FIXUP_2058.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2068 = _RESERVED_IDENTIFIER_FIXUP_3186.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3190;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_2068.x;
        _RESERVED_IDENTIFIER_FIXUP_3190.y = _RESERVED_IDENTIFIER_FIXUP_2068.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2075 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2079 = _RESERVED_IDENTIFIER_FIXUP_2075.y;
        _RESERVED_IDENTIFIER_FIXUP_3190.w = _RESERVED_IDENTIFIER_FIXUP_2079;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2048.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2048.w;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3190.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2079;
        float _RESERVED_IDENTIFIER_FIXUP_2090 = hdLod6(param_56, param_57).x + hdLod6(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3186.w = _RESERVED_IDENTIFIER_FIXUP_2090;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2097 = _RESERVED_IDENTIFIER_FIXUP_3186.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3203;
        _RESERVED_IDENTIFIER_FIXUP_3203.x = _RESERVED_IDENTIFIER_FIXUP_2097.x;
        _RESERVED_IDENTIFIER_FIXUP_3203.y = _RESERVED_IDENTIFIER_FIXUP_2097.y;
        _RESERVED_IDENTIFIER_FIXUP_3203.w = _RESERVED_IDENTIFIER_FIXUP_2079;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3203.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2079;
        float _RESERVED_IDENTIFIER_FIXUP_2119 = _RESERVED_IDENTIFIER_FIXUP_2090 + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3186.w = _RESERVED_IDENTIFIER_FIXUP_2119;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2126 = _RESERVED_IDENTIFIER_FIXUP_3186.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3216;
        _RESERVED_IDENTIFIER_FIXUP_3216.x = _RESERVED_IDENTIFIER_FIXUP_2126.x;
        _RESERVED_IDENTIFIER_FIXUP_3216.y = _RESERVED_IDENTIFIER_FIXUP_2126.y;
        _RESERVED_IDENTIFIER_FIXUP_3216.w = _RESERVED_IDENTIFIER_FIXUP_2079;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3216.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2079;
        float _RESERVED_IDENTIFIER_FIXUP_2148 = _RESERVED_IDENTIFIER_FIXUP_2119 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3186.w = _RESERVED_IDENTIFIER_FIXUP_2148;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2155 = _RESERVED_IDENTIFIER_FIXUP_3186.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3229;
        _RESERVED_IDENTIFIER_FIXUP_3229.x = _RESERVED_IDENTIFIER_FIXUP_2155.x;
        _RESERVED_IDENTIFIER_FIXUP_3229.y = _RESERVED_IDENTIFIER_FIXUP_2155.y;
        _RESERVED_IDENTIFIER_FIXUP_3229.w = _RESERVED_IDENTIFIER_FIXUP_2079;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3229.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2079;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2172 = hdLod6(param_64, param_65);
        float _RESERVED_IDENTIFIER_FIXUP_2177 = _RESERVED_IDENTIFIER_FIXUP_2148 + _RESERVED_IDENTIFIER_FIXUP_2172.x;
        _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_2177;
        _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_2177 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3315 = _RESERVED_IDENTIFIER_FIXUP_2172;
        _RESERVED_IDENTIFIER_FIXUP_3313 = _RESERVED_IDENTIFIER_FIXUP_3186;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2190 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3051 = _RESERVED_IDENTIFIER_FIXUP_3046;
        _RESERVED_IDENTIFIER_FIXUP_3051.z = _RESERVED_IDENTIFIER_FIXUP_2190;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3316;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3314;
        if (_RESERVED_IDENTIFIER_FIXUP_2190 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2199 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2199.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2199.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2205 = hdLod7(param_66, param_67);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2209 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3126 = _RESERVED_IDENTIFIER_FIXUP_3051;
            _RESERVED_IDENTIFIER_FIXUP_3126.z = _RESERVED_IDENTIFIER_FIXUP_2209.x;
            _RESERVED_IDENTIFIER_FIXUP_3126.w = _RESERVED_IDENTIFIER_FIXUP_2209.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2219 = _RESERVED_IDENTIFIER_FIXUP_3126.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3130;
            _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_2219.x;
            _RESERVED_IDENTIFIER_FIXUP_3130.y = _RESERVED_IDENTIFIER_FIXUP_2219.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2226 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2230 = _RESERVED_IDENTIFIER_FIXUP_2226.y;
            _RESERVED_IDENTIFIER_FIXUP_3130.w = _RESERVED_IDENTIFIER_FIXUP_2230;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3130.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2230;
            float _RESERVED_IDENTIFIER_FIXUP_2241 = _RESERVED_IDENTIFIER_FIXUP_2205.x + hdLod7(param_68, param_69).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3141 = _RESERVED_IDENTIFIER_FIXUP_2205;
            _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_2241;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2248 = _RESERVED_IDENTIFIER_FIXUP_3126.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3143;
            _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_2248.x;
            _RESERVED_IDENTIFIER_FIXUP_3143.y = _RESERVED_IDENTIFIER_FIXUP_2248.y;
            _RESERVED_IDENTIFIER_FIXUP_3143.w = _RESERVED_IDENTIFIER_FIXUP_2230;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3143.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2230;
            float _RESERVED_IDENTIFIER_FIXUP_2270 = _RESERVED_IDENTIFIER_FIXUP_2241 + hdLod7(param_70, param_71).x;
            _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_2270;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2277 = _RESERVED_IDENTIFIER_FIXUP_3126.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3156;
            _RESERVED_IDENTIFIER_FIXUP_3156.x = _RESERVED_IDENTIFIER_FIXUP_2277.x;
            _RESERVED_IDENTIFIER_FIXUP_3156.y = _RESERVED_IDENTIFIER_FIXUP_2277.y;
            _RESERVED_IDENTIFIER_FIXUP_3156.w = _RESERVED_IDENTIFIER_FIXUP_2230;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3156.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2230;
            float _RESERVED_IDENTIFIER_FIXUP_2299 = _RESERVED_IDENTIFIER_FIXUP_2270 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_2299;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2306 = _RESERVED_IDENTIFIER_FIXUP_3126.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3169;
            _RESERVED_IDENTIFIER_FIXUP_3169.x = _RESERVED_IDENTIFIER_FIXUP_2306.x;
            _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_2306.y;
            _RESERVED_IDENTIFIER_FIXUP_3169.w = _RESERVED_IDENTIFIER_FIXUP_2230;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3169.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2230;
            float _RESERVED_IDENTIFIER_FIXUP_2328 = _RESERVED_IDENTIFIER_FIXUP_2299 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3126.z = _RESERVED_IDENTIFIER_FIXUP_2328;
            _RESERVED_IDENTIFIER_FIXUP_3126.y = _RESERVED_IDENTIFIER_FIXUP_2328 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3316 = _RESERVED_IDENTIFIER_FIXUP_3141;
            _RESERVED_IDENTIFIER_FIXUP_3314 = _RESERVED_IDENTIFIER_FIXUP_3126;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3055 = _RESERVED_IDENTIFIER_FIXUP_3051;
            _RESERVED_IDENTIFIER_FIXUP_3055.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3055.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2344 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2348 = _RESERVED_IDENTIFIER_FIXUP_2344.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3328 = vec4(_RESERVED_IDENTIFIER_FIXUP_2344.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2348);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2359 = _RESERVED_IDENTIFIER_FIXUP_3328.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3329 = vec4(_RESERVED_IDENTIFIER_FIXUP_2359 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2348);
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2359;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2348;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3329.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2348;
            float _RESERVED_IDENTIFIER_FIXUP_2389 = hdLod8(param_76, param_77).x + hdLod8(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3082 = _RESERVED_IDENTIFIER_FIXUP_3328;
            _RESERVED_IDENTIFIER_FIXUP_3082.z = _RESERVED_IDENTIFIER_FIXUP_2389;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2396 = _RESERVED_IDENTIFIER_FIXUP_3082.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3084 = _RESERVED_IDENTIFIER_FIXUP_3329;
            _RESERVED_IDENTIFIER_FIXUP_3084.x = _RESERVED_IDENTIFIER_FIXUP_2396.x;
            _RESERVED_IDENTIFIER_FIXUP_3084.y = _RESERVED_IDENTIFIER_FIXUP_2396.y;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3084.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2348;
            float _RESERVED_IDENTIFIER_FIXUP_2411 = _RESERVED_IDENTIFIER_FIXUP_2389 + hdLod8(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3082.z = _RESERVED_IDENTIFIER_FIXUP_2411;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2418 = _RESERVED_IDENTIFIER_FIXUP_3082.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3093 = _RESERVED_IDENTIFIER_FIXUP_3084;
            _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_2418.x;
            _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_2418.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3093.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2348;
            float _RESERVED_IDENTIFIER_FIXUP_2433 = _RESERVED_IDENTIFIER_FIXUP_2411 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3082.z = _RESERVED_IDENTIFIER_FIXUP_2433;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2440 = _RESERVED_IDENTIFIER_FIXUP_3082.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3102 = _RESERVED_IDENTIFIER_FIXUP_3093;
            _RESERVED_IDENTIFIER_FIXUP_3102.x = _RESERVED_IDENTIFIER_FIXUP_2440.x;
            _RESERVED_IDENTIFIER_FIXUP_3102.y = _RESERVED_IDENTIFIER_FIXUP_2440.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3102.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2348;
            float _RESERVED_IDENTIFIER_FIXUP_2455 = _RESERVED_IDENTIFIER_FIXUP_2433 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3082.x = _RESERVED_IDENTIFIER_FIXUP_2455;
            float _RESERVED_IDENTIFIER_FIXUP_2463 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3082.y = _RESERVED_IDENTIFIER_FIXUP_2463;
            float _RESERVED_IDENTIFIER_FIXUP_2469 = clamp((_RESERVED_IDENTIFIER_FIXUP_2463 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3055.z = _RESERVED_IDENTIFIER_FIXUP_2469;
            float _RESERVED_IDENTIFIER_FIXUP_2474 = (_RESERVED_IDENTIFIER_FIXUP_2455 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3055.w = _RESERVED_IDENTIFIER_FIXUP_2474;
            _RESERVED_IDENTIFIER_FIXUP_3055.y = (_RESERVED_IDENTIFIER_FIXUP_2469 * _RESERVED_IDENTIFIER_FIXUP_2474) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3316 = _RESERVED_IDENTIFIER_FIXUP_3082;
            _RESERVED_IDENTIFIER_FIXUP_3314 = _RESERVED_IDENTIFIER_FIXUP_3055;
        }
        _RESERVED_IDENTIFIER_FIXUP_3315 = _RESERVED_IDENTIFIER_FIXUP_3316;
        _RESERVED_IDENTIFIER_FIXUP_3313 = _RESERVED_IDENTIFIER_FIXUP_3314;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2489 = min(_RESERVED_IDENTIFIER_FIXUP_3313.y, _RESERVED_IDENTIFIER_FIXUP_3313.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3247 = _RESERVED_IDENTIFIER_FIXUP_3315;
    _RESERVED_IDENTIFIER_FIXUP_3247.x = _RESERVED_IDENTIFIER_FIXUP_2489;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3250 = _RESERVED_IDENTIFIER_FIXUP_3313;
    _RESERVED_IDENTIFIER_FIXUP_3250.x = (_RESERVED_IDENTIFIER_FIXUP_2489 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2500 = _RESERVED_IDENTIFIER_FIXUP_1856.xyz * _RESERVED_IDENTIFIER_FIXUP_3250.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3252 = _RESERVED_IDENTIFIER_FIXUP_1856;
    _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_2500.x;
    _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_2500.y;
    _RESERVED_IDENTIFIER_FIXUP_3252.z = _RESERVED_IDENTIFIER_FIXUP_2500.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2511 = _RESERVED_IDENTIFIER_FIXUP_3252.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3258 = _RESERVED_IDENTIFIER_FIXUP_3252;
    _RESERVED_IDENTIFIER_FIXUP_3258.x = _RESERVED_IDENTIFIER_FIXUP_2511.x;
    _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_2511.y;
    _RESERVED_IDENTIFIER_FIXUP_3258.z = _RESERVED_IDENTIFIER_FIXUP_2511.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2522 = _RESERVED_IDENTIFIER_FIXUP_3258.xyz + _RESERVED_IDENTIFIER_FIXUP_3258.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3264 = _RESERVED_IDENTIFIER_FIXUP_3258;
    _RESERVED_IDENTIFIER_FIXUP_3264.x = _RESERVED_IDENTIFIER_FIXUP_2522.x;
    _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_2522.y;
    _RESERVED_IDENTIFIER_FIXUP_3264.z = _RESERVED_IDENTIFIER_FIXUP_2522.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2533 = _RESERVED_IDENTIFIER_FIXUP_3264.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3250.x = _RESERVED_IDENTIFIER_FIXUP_2533.x;
    _RESERVED_IDENTIFIER_FIXUP_3250.y = _RESERVED_IDENTIFIER_FIXUP_2533.y;
    _RESERVED_IDENTIFIER_FIXUP_3250.z = _RESERVED_IDENTIFIER_FIXUP_2533.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2547 = (_RESERVED_IDENTIFIER_FIXUP_3250.xyz * _RESERVED_IDENTIFIER_FIXUP_3247.xxx) + _RESERVED_IDENTIFIER_FIXUP_3264.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3276 = _RESERVED_IDENTIFIER_FIXUP_3264;
    _RESERVED_IDENTIFIER_FIXUP_3276.x = _RESERVED_IDENTIFIER_FIXUP_2547.x;
    _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_2547.y;
    _RESERVED_IDENTIFIER_FIXUP_3276.z = _RESERVED_IDENTIFIER_FIXUP_2547.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2560 = _RESERVED_IDENTIFIER_FIXUP_3276.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3282 = _RESERVED_IDENTIFIER_FIXUP_3276;
    _RESERVED_IDENTIFIER_FIXUP_3282.x = _RESERVED_IDENTIFIER_FIXUP_2560.x;
    _RESERVED_IDENTIFIER_FIXUP_3282.y = _RESERVED_IDENTIFIER_FIXUP_2560.y;
    _RESERVED_IDENTIFIER_FIXUP_3282.z = _RESERVED_IDENTIFIER_FIXUP_2560.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3282.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_904 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_913;
    if (_RESERVED_IDENTIFIER_FIXUP_904)
    {
        _RESERVED_IDENTIFIER_FIXUP_913 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_913 = _RESERVED_IDENTIFIER_FIXUP_904;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_913)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_950 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2947.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_977 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2619;
    if (_RESERVED_IDENTIFIER_FIXUP_950 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2619 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_950), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_977);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2619 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_977);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2619;
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
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
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        vec2 hdB142 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB142.x;
        r1.z = hdB142.y;
        vec2 hdB164 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB164.x;
        r3.y = hdB164.y;
        vec2 hdB172 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB172.x;
        r3.w = hdB172.y;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r1.w = r2.x + r3.x;
        vec2 hdB195 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB195.x;
        r2.y = hdB195.y;
        vec2 hdB202 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB202.x;
        r2.w = hdB202.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.w += r2.x;
        vec2 hdB225 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB225.x;
        r2.y = hdB225.y;
        vec2 hdB232 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB232.x;
        r2.w = hdB232.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB255 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB255.x;
        r2.y = hdB255.y;
        vec2 hdB262 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB262.x;
        r2.w = hdB262.y;
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
    r1.y = max(abs(v5.x), abs(v5.y));
    if (r1.y < 1.0)
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod6(param_13, param_14);
        vec2 hdB322 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB322.x;
        r1.z = hdB322.y;
        vec2 hdB332 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB332.x;
        r3.y = hdB332.y;
        vec2 hdB339 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB339.x;
        r3.w = hdB339.y;
        vec2 param_15 = r3.xy;
        float param_16 = r3.w;
        r3 = hdLod6(param_15, param_16);
        r1.w = r2.x + r3.x;
        vec2 hdB361 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB361.x;
        r2.y = hdB361.y;
        vec2 hdB368 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB368.x;
        r2.w = hdB368.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod6(param_17, param_18);
        r1.w += r2.x;
        vec2 hdB390 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB390.x;
        r2.y = hdB390.y;
        vec2 hdB397 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB397.x;
        r2.w = hdB397.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod6(param_19, param_20);
        r1.w += r2.x;
        vec2 hdB419 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB419.x;
        r2.y = hdB419.y;
        vec2 hdB426 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB426.x;
        r2.w = hdB426.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod6(param_21, param_22);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod7(param_23, param_24);
            vec2 hdB475 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB475.x;
            r1.w = hdB475.y;
            vec2 hdB485 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB485.x;
            r3.y = hdB485.y;
            vec2 hdB492 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB492.x;
            r3.w = hdB492.y;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod7(param_25, param_26);
            r2.x += r3.x;
            vec2 hdB514 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB514.x;
            r3.y = hdB514.y;
            vec2 hdB521 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB521.x;
            r3.w = hdB521.y;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r2.x += r3.x;
            vec2 hdB543 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB543.x;
            r3.y = hdB543.y;
            vec2 hdB550 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB550.x;
            r3.w = hdB550.y;
            vec2 param_29 = r3.xy;
            float param_30 = r3.w;
            r3 = hdLod7(param_29, param_30);
            r2.x += r3.x;
            vec2 hdB572 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB572.x;
            r3.y = hdB572.y;
            vec2 hdB579 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB579.x;
            r3.w = hdB579.y;
            vec2 param_31 = r3.xy;
            float param_32 = r3.w;
            r3 = hdLod7(param_31, param_32);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v4.w;
            r1.w = v5.w;
            vec2 hdB611 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB611.x;
            r2.w = hdB611.y;
            r2.y = (v5.w * 0.5) + 0.5;
            r2.z = v6.w;
            vec2 param_33 = r2.xy;
            float param_34 = r2.w;
            r3 = hdLod8(param_33, param_34);
            vec2 hdB636 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB636.x;
            r4.y = hdB636.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r5 = hdLod8(param_35, param_36);
            r2.z = r3.x + r5.x;
            vec2 hdB664 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB664.x;
            r4.y = hdB664.y;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r3 = hdLod8(param_37, param_38);
            r2.z += r3.x;
            vec2 hdB686 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB686.x;
            r4.y = hdB686.y;
            vec2 param_39 = r4.xy;
            float param_40 = r4.w;
            r3 = hdLod8(param_39, param_40);
            r2.z += r3.x;
            vec2 hdB708 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB708.x;
            r4.y = hdB708.y;
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
    vec4 hdB766 = r0;
    vec3 hdB770 = hdB766.xyz * r1.xxx;
    r0.x = hdB770.x;
    r0.y = hdB770.y;
    r0.z = hdB770.z;
    vec4 hdB777 = r0;
    vec3 hdB781 = hdB777.xyz * v0.xyz;
    r0.x = hdB781.x;
    r0.y = hdB781.y;
    r0.z = hdB781.z;
    vec4 hdB788 = r0;
    vec4 hdB790 = r0;
    vec3 hdB792 = hdB788.xyz + hdB790.xyz;
    r0.x = hdB792.x;
    r0.y = hdB792.y;
    r0.z = hdB792.z;
    vec3 hdB803 = r0.www * v1.xyz;
    r1.x = hdB803.x;
    r1.y = hdB803.y;
    r1.z = hdB803.z;
    vec4 hdB815 = r0;
    vec3 hdB817 = (r1.xyz * r2.xxx) + hdB815.xyz;
    r0.x = hdB817.x;
    r0.y = hdB817.y;
    r0.z = hdB817.z;
    vec4 hdB824 = r0;
    vec3 hdB831 = hdB824.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB831.x;
    r0.y = hdB831.y;
    r0.z = hdB831.z;
    vec3 hdB846 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB846.x;
    oC0.y = hdB846.y;
    oC0.z = hdB846.z;
    oC0.w = 1.0;
    bool hdB859 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB867;
    if (hdB859)
    {
        hdB867 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB867 = hdB859;
    }
    if (hdB867)
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
    bool _3138 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3148;
    if (_3138)
    {
        _3148 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3148 = _3138;
    }
    if (_3148)
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
        bool _3173 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3188;
        if (!_3173)
        {
            _3188 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3188 = _3173;
        }
        if (_3188)
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
