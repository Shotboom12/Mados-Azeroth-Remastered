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
float _RESERVED_IDENTIFIER_FIXUP_3446;
vec4 _RESERVED_IDENTIFIER_FIXUP_3447;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1072 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1076 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1080 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1084 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1080.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2709 = _RESERVED_IDENTIFIER_FIXUP_1080;
    _RESERVED_IDENTIFIER_FIXUP_2709.y = _RESERVED_IDENTIFIER_FIXUP_1084;
    _RESERVED_IDENTIFIER_FIXUP_2709.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1084;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1094 = _RESERVED_IDENTIFIER_FIXUP_1076 * _RESERVED_IDENTIFIER_FIXUP_2709.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1100 = (_RESERVED_IDENTIFIER_FIXUP_1072 * _RESERVED_IDENTIFIER_FIXUP_2709.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1094;
    float _RESERVED_IDENTIFIER_FIXUP_1107 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2716 = _RESERVED_IDENTIFIER_FIXUP_1094;
    _RESERVED_IDENTIFIER_FIXUP_2716.x = _RESERVED_IDENTIFIER_FIXUP_1107;
    float _RESERVED_IDENTIFIER_FIXUP_1113 = clamp((_RESERVED_IDENTIFIER_FIXUP_1107 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2716.x = _RESERVED_IDENTIFIER_FIXUP_1113;
    float _RESERVED_IDENTIFIER_FIXUP_1119 = ((-_RESERVED_IDENTIFIER_FIXUP_1113) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2716.y = _RESERVED_IDENTIFIER_FIXUP_1119;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3449;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
    if (_RESERVED_IDENTIFIER_FIXUP_1119 != (-_RESERVED_IDENTIFIER_FIXUP_1119))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1131 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2728 = _RESERVED_IDENTIFIER_FIXUP_2716;
        _RESERVED_IDENTIFIER_FIXUP_2728.y = _RESERVED_IDENTIFIER_FIXUP_1131.x;
        _RESERVED_IDENTIFIER_FIXUP_2728.z = _RESERVED_IDENTIFIER_FIXUP_1131.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1141 = _RESERVED_IDENTIFIER_FIXUP_2728.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2732;
        _RESERVED_IDENTIFIER_FIXUP_2732.x = _RESERVED_IDENTIFIER_FIXUP_1141.x;
        _RESERVED_IDENTIFIER_FIXUP_2732.y = _RESERVED_IDENTIFIER_FIXUP_1141.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_2728.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2736;
        _RESERVED_IDENTIFIER_FIXUP_2736.x = _RESERVED_IDENTIFIER_FIXUP_1151.x;
        _RESERVED_IDENTIFIER_FIXUP_2736.y = _RESERVED_IDENTIFIER_FIXUP_1151.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1161 = _RESERVED_IDENTIFIER_FIXUP_2728.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2740;
        _RESERVED_IDENTIFIER_FIXUP_2740.x = _RESERVED_IDENTIFIER_FIXUP_1161.x;
        _RESERVED_IDENTIFIER_FIXUP_2740.y = _RESERVED_IDENTIFIER_FIXUP_1161.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1171 = _RESERVED_IDENTIFIER_FIXUP_2728.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2744;
        _RESERVED_IDENTIFIER_FIXUP_2744.x = _RESERVED_IDENTIFIER_FIXUP_1171.x;
        _RESERVED_IDENTIFIER_FIXUP_2744.y = _RESERVED_IDENTIFIER_FIXUP_1171.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1179 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1179.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1179.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1185 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_2732.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2736.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2740.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2744.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2732.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1185.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2736.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1185.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2740.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1185.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1242 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1185 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2744.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1248 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2728.y = _RESERVED_IDENTIFIER_FIXUP_1248;
        float _RESERVED_IDENTIFIER_FIXUP_1253 = float(_RESERVED_IDENTIFIER_FIXUP_1248 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2728.y = _RESERVED_IDENTIFIER_FIXUP_1253;
        float _RESERVED_IDENTIFIER_FIXUP_1256 = dot(_RESERVED_IDENTIFIER_FIXUP_1242, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2728.z = _RESERVED_IDENTIFIER_FIXUP_1256;
        float _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_1253 + _RESERVED_IDENTIFIER_FIXUP_1256;
        _RESERVED_IDENTIFIER_FIXUP_2728.y = _RESERVED_IDENTIFIER_FIXUP_1262;
        float _RESERVED_IDENTIFIER_FIXUP_1267 = (_RESERVED_IDENTIFIER_FIXUP_1262 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2728.y = _RESERVED_IDENTIFIER_FIXUP_1267;
        _RESERVED_IDENTIFIER_FIXUP_2728.x = (_RESERVED_IDENTIFIER_FIXUP_1113 * _RESERVED_IDENTIFIER_FIXUP_1267) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3449 = _RESERVED_IDENTIFIER_FIXUP_1242;
        _RESERVED_IDENTIFIER_FIXUP_3448 = _RESERVED_IDENTIFIER_FIXUP_2728;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2726 = _RESERVED_IDENTIFIER_FIXUP_2716;
        _RESERVED_IDENTIFIER_FIXUP_2726.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3449 = _RESERVED_IDENTIFIER_FIXUP_2709;
        _RESERVED_IDENTIFIER_FIXUP_3448 = _RESERVED_IDENTIFIER_FIXUP_2726;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1285 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2800 = _RESERVED_IDENTIFIER_FIXUP_3448;
    _RESERVED_IDENTIFIER_FIXUP_2800.y = _RESERVED_IDENTIFIER_FIXUP_1285;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3452;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3450;
    if (_RESERVED_IDENTIFIER_FIXUP_1285 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1294 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2961 = _RESERVED_IDENTIFIER_FIXUP_2800;
        _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1294.x;
        _RESERVED_IDENTIFIER_FIXUP_2961.z = _RESERVED_IDENTIFIER_FIXUP_1294.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1304 = _RESERVED_IDENTIFIER_FIXUP_2961.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2965;
        _RESERVED_IDENTIFIER_FIXUP_2965.x = _RESERVED_IDENTIFIER_FIXUP_1304.x;
        _RESERVED_IDENTIFIER_FIXUP_2965.y = _RESERVED_IDENTIFIER_FIXUP_1304.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1314 = _RESERVED_IDENTIFIER_FIXUP_2961.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2969;
        _RESERVED_IDENTIFIER_FIXUP_2969.x = _RESERVED_IDENTIFIER_FIXUP_1314.x;
        _RESERVED_IDENTIFIER_FIXUP_2969.y = _RESERVED_IDENTIFIER_FIXUP_1314.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1324 = _RESERVED_IDENTIFIER_FIXUP_2961.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2973;
        _RESERVED_IDENTIFIER_FIXUP_2973.x = _RESERVED_IDENTIFIER_FIXUP_1324.x;
        _RESERVED_IDENTIFIER_FIXUP_2973.y = _RESERVED_IDENTIFIER_FIXUP_1324.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_2961.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2977;
        _RESERVED_IDENTIFIER_FIXUP_2977.x = _RESERVED_IDENTIFIER_FIXUP_1334.x;
        _RESERVED_IDENTIFIER_FIXUP_2977.y = _RESERVED_IDENTIFIER_FIXUP_1334.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1342 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1342.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1342.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1348 = hdLod6(param_13, param_14);
        _RESERVED_IDENTIFIER_FIXUP_2965.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2969.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2973.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2977.w = 0.0;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_2965.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1348.y = hdLod6(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2969.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1348.z = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2973.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1348.w = hdLod6(param_19, param_20).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1405 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1348 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_2977.xy;
        float param_22 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1411 = hdLod6(param_21, param_22).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1411;
        float _RESERVED_IDENTIFIER_FIXUP_1416 = float(_RESERVED_IDENTIFIER_FIXUP_1411 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1416;
        float _RESERVED_IDENTIFIER_FIXUP_1419 = dot(_RESERVED_IDENTIFIER_FIXUP_1405, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2961.z = _RESERVED_IDENTIFIER_FIXUP_1419;
        float _RESERVED_IDENTIFIER_FIXUP_1425 = _RESERVED_IDENTIFIER_FIXUP_1416 + _RESERVED_IDENTIFIER_FIXUP_1419;
        _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1425;
        _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1425 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3452 = _RESERVED_IDENTIFIER_FIXUP_1405;
        _RESERVED_IDENTIFIER_FIXUP_3450 = _RESERVED_IDENTIFIER_FIXUP_2961;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1438 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2805 = _RESERVED_IDENTIFIER_FIXUP_2800;
        _RESERVED_IDENTIFIER_FIXUP_2805.z = _RESERVED_IDENTIFIER_FIXUP_1438;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3453;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3451;
        if (_RESERVED_IDENTIFIER_FIXUP_1438 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1447 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2895 = _RESERVED_IDENTIFIER_FIXUP_2805;
            _RESERVED_IDENTIFIER_FIXUP_2895.z = _RESERVED_IDENTIFIER_FIXUP_1447.x;
            _RESERVED_IDENTIFIER_FIXUP_2895.w = _RESERVED_IDENTIFIER_FIXUP_1447.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1457 = _RESERVED_IDENTIFIER_FIXUP_2895.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2899;
            _RESERVED_IDENTIFIER_FIXUP_2899.x = _RESERVED_IDENTIFIER_FIXUP_1457.x;
            _RESERVED_IDENTIFIER_FIXUP_2899.y = _RESERVED_IDENTIFIER_FIXUP_1457.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1467 = _RESERVED_IDENTIFIER_FIXUP_2895.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2903;
            _RESERVED_IDENTIFIER_FIXUP_2903.x = _RESERVED_IDENTIFIER_FIXUP_1467.x;
            _RESERVED_IDENTIFIER_FIXUP_2903.y = _RESERVED_IDENTIFIER_FIXUP_1467.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_2895.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2907;
            _RESERVED_IDENTIFIER_FIXUP_2907.x = _RESERVED_IDENTIFIER_FIXUP_1477.x;
            _RESERVED_IDENTIFIER_FIXUP_2907.y = _RESERVED_IDENTIFIER_FIXUP_1477.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1487 = _RESERVED_IDENTIFIER_FIXUP_2895.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2911;
            _RESERVED_IDENTIFIER_FIXUP_2911.x = _RESERVED_IDENTIFIER_FIXUP_1487.x;
            _RESERVED_IDENTIFIER_FIXUP_2911.y = _RESERVED_IDENTIFIER_FIXUP_1487.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1495 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1495.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1495.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1501 = hdLod7(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_2899.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2903.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2907.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2911.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_2899.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1501.y = hdLod7(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2903.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1501.z = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2907.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1501.w = hdLod7(param_29, param_30).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1558 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1501 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2911.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1564 = hdLod7(param_31, param_32).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2895.z = _RESERVED_IDENTIFIER_FIXUP_1564;
            float _RESERVED_IDENTIFIER_FIXUP_1569 = float(_RESERVED_IDENTIFIER_FIXUP_1564 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2895.z = _RESERVED_IDENTIFIER_FIXUP_1569;
            float _RESERVED_IDENTIFIER_FIXUP_1572 = dot(_RESERVED_IDENTIFIER_FIXUP_1558, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2895.w = _RESERVED_IDENTIFIER_FIXUP_1572;
            float _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_1569 + _RESERVED_IDENTIFIER_FIXUP_1572;
            _RESERVED_IDENTIFIER_FIXUP_2895.z = _RESERVED_IDENTIFIER_FIXUP_1578;
            _RESERVED_IDENTIFIER_FIXUP_2895.y = _RESERVED_IDENTIFIER_FIXUP_1578 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3453 = _RESERVED_IDENTIFIER_FIXUP_1558;
            _RESERVED_IDENTIFIER_FIXUP_3451 = _RESERVED_IDENTIFIER_FIXUP_2895;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2809 = _RESERVED_IDENTIFIER_FIXUP_3449;
            _RESERVED_IDENTIFIER_FIXUP_2809.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2809.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1594 = (_RESERVED_IDENTIFIER_FIXUP_2809.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2814;
            _RESERVED_IDENTIFIER_FIXUP_2814.x = _RESERVED_IDENTIFIER_FIXUP_1594.x;
            _RESERVED_IDENTIFIER_FIXUP_2814.y = _RESERVED_IDENTIFIER_FIXUP_1594.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_2814.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2818;
            _RESERVED_IDENTIFIER_FIXUP_2818.x = _RESERVED_IDENTIFIER_FIXUP_1604.x;
            _RESERVED_IDENTIFIER_FIXUP_2818.y = _RESERVED_IDENTIFIER_FIXUP_1604.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1614 = _RESERVED_IDENTIFIER_FIXUP_2814.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2822;
            _RESERVED_IDENTIFIER_FIXUP_2822.x = _RESERVED_IDENTIFIER_FIXUP_1614.x;
            _RESERVED_IDENTIFIER_FIXUP_2822.y = _RESERVED_IDENTIFIER_FIXUP_1614.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1624 = _RESERVED_IDENTIFIER_FIXUP_2814.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2826;
            _RESERVED_IDENTIFIER_FIXUP_2826.x = _RESERVED_IDENTIFIER_FIXUP_1624.x;
            _RESERVED_IDENTIFIER_FIXUP_2826.y = _RESERVED_IDENTIFIER_FIXUP_1624.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1634 = _RESERVED_IDENTIFIER_FIXUP_2814.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2830;
            _RESERVED_IDENTIFIER_FIXUP_2830.x = _RESERVED_IDENTIFIER_FIXUP_1634.x;
            _RESERVED_IDENTIFIER_FIXUP_2830.y = _RESERVED_IDENTIFIER_FIXUP_1634.y;
            _RESERVED_IDENTIFIER_FIXUP_2814.w = 0.0;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2814.xy;
            float param_34 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1648 = hdLod8(param_33, param_34);
            _RESERVED_IDENTIFIER_FIXUP_2818.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2822.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2826.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2830.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_2818.xy;
            float param_36 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1648.y = hdLod8(param_35, param_36).x;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2822.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1648.z = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2826.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1648.w = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2830.xy;
            float param_42 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1711 = hdLod8(param_41, param_42).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2870 = _RESERVED_IDENTIFIER_FIXUP_2805;
            _RESERVED_IDENTIFIER_FIXUP_2870.z = _RESERVED_IDENTIFIER_FIXUP_1711;
            float _RESERVED_IDENTIFIER_FIXUP_1716 = float(_RESERVED_IDENTIFIER_FIXUP_1711 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2870.z = _RESERVED_IDENTIFIER_FIXUP_1716;
            float _RESERVED_IDENTIFIER_FIXUP_1719 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1648 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2870.w = _RESERVED_IDENTIFIER_FIXUP_1719;
            float _RESERVED_IDENTIFIER_FIXUP_1725 = _RESERVED_IDENTIFIER_FIXUP_1716 + _RESERVED_IDENTIFIER_FIXUP_1719;
            _RESERVED_IDENTIFIER_FIXUP_2870.z = _RESERVED_IDENTIFIER_FIXUP_1725;
            float _RESERVED_IDENTIFIER_FIXUP_1733 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2870.w = _RESERVED_IDENTIFIER_FIXUP_1733;
            float _RESERVED_IDENTIFIER_FIXUP_1739 = clamp((_RESERVED_IDENTIFIER_FIXUP_1733 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2870.w = _RESERVED_IDENTIFIER_FIXUP_1739;
            float _RESERVED_IDENTIFIER_FIXUP_1744 = (_RESERVED_IDENTIFIER_FIXUP_1725 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2870.z = _RESERVED_IDENTIFIER_FIXUP_1744;
            _RESERVED_IDENTIFIER_FIXUP_2870.y = (_RESERVED_IDENTIFIER_FIXUP_1739 * _RESERVED_IDENTIFIER_FIXUP_1744) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3453 = _RESERVED_IDENTIFIER_FIXUP_2809;
            _RESERVED_IDENTIFIER_FIXUP_3451 = _RESERVED_IDENTIFIER_FIXUP_2870;
        }
        _RESERVED_IDENTIFIER_FIXUP_3452 = _RESERVED_IDENTIFIER_FIXUP_3453;
        _RESERVED_IDENTIFIER_FIXUP_3450 = _RESERVED_IDENTIFIER_FIXUP_3451;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1759 = min(_RESERVED_IDENTIFIER_FIXUP_3450.y, _RESERVED_IDENTIFIER_FIXUP_3450.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3029 = _RESERVED_IDENTIFIER_FIXUP_3452;
    _RESERVED_IDENTIFIER_FIXUP_3029.x = _RESERVED_IDENTIFIER_FIXUP_1759;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3032 = _RESERVED_IDENTIFIER_FIXUP_3450;
    _RESERVED_IDENTIFIER_FIXUP_3032.x = (_RESERVED_IDENTIFIER_FIXUP_1759 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1770 = _RESERVED_IDENTIFIER_FIXUP_1100.xyz * _RESERVED_IDENTIFIER_FIXUP_3032.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3034 = _RESERVED_IDENTIFIER_FIXUP_1100;
    _RESERVED_IDENTIFIER_FIXUP_3034.x = _RESERVED_IDENTIFIER_FIXUP_1770.x;
    _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1770.y;
    _RESERVED_IDENTIFIER_FIXUP_3034.z = _RESERVED_IDENTIFIER_FIXUP_1770.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1781 = _RESERVED_IDENTIFIER_FIXUP_3034.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3446).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3040 = _RESERVED_IDENTIFIER_FIXUP_3034;
    _RESERVED_IDENTIFIER_FIXUP_3040.x = _RESERVED_IDENTIFIER_FIXUP_1781.x;
    _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1781.y;
    _RESERVED_IDENTIFIER_FIXUP_3040.z = _RESERVED_IDENTIFIER_FIXUP_1781.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1792 = _RESERVED_IDENTIFIER_FIXUP_3040.xyz + _RESERVED_IDENTIFIER_FIXUP_3040.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3046 = _RESERVED_IDENTIFIER_FIXUP_3040;
    _RESERVED_IDENTIFIER_FIXUP_3046.x = _RESERVED_IDENTIFIER_FIXUP_1792.x;
    _RESERVED_IDENTIFIER_FIXUP_3046.y = _RESERVED_IDENTIFIER_FIXUP_1792.y;
    _RESERVED_IDENTIFIER_FIXUP_3046.z = _RESERVED_IDENTIFIER_FIXUP_1792.z;
    _RESERVED_IDENTIFIER_FIXUP_3032.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3032.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3032.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1817 = (_RESERVED_IDENTIFIER_FIXUP_3032.xyz * _RESERVED_IDENTIFIER_FIXUP_3029.xxx) + _RESERVED_IDENTIFIER_FIXUP_3046.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3058 = _RESERVED_IDENTIFIER_FIXUP_3046;
    _RESERVED_IDENTIFIER_FIXUP_3058.x = _RESERVED_IDENTIFIER_FIXUP_1817.x;
    _RESERVED_IDENTIFIER_FIXUP_3058.y = _RESERVED_IDENTIFIER_FIXUP_1817.y;
    _RESERVED_IDENTIFIER_FIXUP_3058.z = _RESERVED_IDENTIFIER_FIXUP_1817.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1830 = _RESERVED_IDENTIFIER_FIXUP_3058.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3064 = _RESERVED_IDENTIFIER_FIXUP_3058;
    _RESERVED_IDENTIFIER_FIXUP_3064.x = _RESERVED_IDENTIFIER_FIXUP_1830.x;
    _RESERVED_IDENTIFIER_FIXUP_3064.y = _RESERVED_IDENTIFIER_FIXUP_1830.y;
    _RESERVED_IDENTIFIER_FIXUP_3064.z = _RESERVED_IDENTIFIER_FIXUP_1830.z;
    vec2 param_43 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1885 = hdTex0(param_43);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1889 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1893 = hdTex2(param_45);
    float _RESERVED_IDENTIFIER_FIXUP_1897 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1893.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3078 = _RESERVED_IDENTIFIER_FIXUP_1893;
    _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1897;
    _RESERVED_IDENTIFIER_FIXUP_3078.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1897;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1907 = _RESERVED_IDENTIFIER_FIXUP_1889 * _RESERVED_IDENTIFIER_FIXUP_3078.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1913 = (_RESERVED_IDENTIFIER_FIXUP_1885 * _RESERVED_IDENTIFIER_FIXUP_3078.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1907;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3085 = _RESERVED_IDENTIFIER_FIXUP_1907;
    _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_1107;
    float _RESERVED_IDENTIFIER_FIXUP_1926 = clamp((_RESERVED_IDENTIFIER_FIXUP_1107 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_1926;
    float _RESERVED_IDENTIFIER_FIXUP_1932 = ((-_RESERVED_IDENTIFIER_FIXUP_1926) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1932;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3461;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3460;
    if (_RESERVED_IDENTIFIER_FIXUP_1932 != (-_RESERVED_IDENTIFIER_FIXUP_1932))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1944 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3097 = _RESERVED_IDENTIFIER_FIXUP_3085;
        _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1944.x;
        _RESERVED_IDENTIFIER_FIXUP_3097.z = _RESERVED_IDENTIFIER_FIXUP_1944.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1954 = _RESERVED_IDENTIFIER_FIXUP_3097.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3101;
        _RESERVED_IDENTIFIER_FIXUP_3101.x = _RESERVED_IDENTIFIER_FIXUP_1954.x;
        _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1954.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1964 = _RESERVED_IDENTIFIER_FIXUP_3097.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3105;
        _RESERVED_IDENTIFIER_FIXUP_3105.x = _RESERVED_IDENTIFIER_FIXUP_1964.x;
        _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_1964.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1974 = _RESERVED_IDENTIFIER_FIXUP_3097.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3109;
        _RESERVED_IDENTIFIER_FIXUP_3109.x = _RESERVED_IDENTIFIER_FIXUP_1974.x;
        _RESERVED_IDENTIFIER_FIXUP_3109.y = _RESERVED_IDENTIFIER_FIXUP_1974.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1984 = _RESERVED_IDENTIFIER_FIXUP_3097.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3113;
        _RESERVED_IDENTIFIER_FIXUP_3113.x = _RESERVED_IDENTIFIER_FIXUP_1984.x;
        _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1984.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1992 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_1992.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_1992.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1998 = hdLod5(param_46, param_47);
        _RESERVED_IDENTIFIER_FIXUP_3101.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3105.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3109.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3113.w = 0.0;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3101.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1998.y = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3105.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1998.z = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3109.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1998.w = hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2055 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1998 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3113.xy;
        float param_55 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2061 = hdLod5(param_54, param_55).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_2061;
        float _RESERVED_IDENTIFIER_FIXUP_2066 = float(_RESERVED_IDENTIFIER_FIXUP_2061 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_2066;
        float _RESERVED_IDENTIFIER_FIXUP_2069 = dot(_RESERVED_IDENTIFIER_FIXUP_2055, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3097.z = _RESERVED_IDENTIFIER_FIXUP_2069;
        float _RESERVED_IDENTIFIER_FIXUP_2075 = _RESERVED_IDENTIFIER_FIXUP_2066 + _RESERVED_IDENTIFIER_FIXUP_2069;
        _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_2075;
        float _RESERVED_IDENTIFIER_FIXUP_2080 = (_RESERVED_IDENTIFIER_FIXUP_2075 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_2080;
        _RESERVED_IDENTIFIER_FIXUP_3097.x = (_RESERVED_IDENTIFIER_FIXUP_1926 * _RESERVED_IDENTIFIER_FIXUP_2080) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3461 = _RESERVED_IDENTIFIER_FIXUP_2055;
        _RESERVED_IDENTIFIER_FIXUP_3460 = _RESERVED_IDENTIFIER_FIXUP_3097;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3095 = _RESERVED_IDENTIFIER_FIXUP_3085;
        _RESERVED_IDENTIFIER_FIXUP_3095.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3461 = _RESERVED_IDENTIFIER_FIXUP_3078;
        _RESERVED_IDENTIFIER_FIXUP_3460 = _RESERVED_IDENTIFIER_FIXUP_3095;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3169 = _RESERVED_IDENTIFIER_FIXUP_3460;
    _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_1285;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3464;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3462;
    if (_RESERVED_IDENTIFIER_FIXUP_1285 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2107 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3330 = _RESERVED_IDENTIFIER_FIXUP_3169;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2107.x;
        _RESERVED_IDENTIFIER_FIXUP_3330.z = _RESERVED_IDENTIFIER_FIXUP_2107.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2117 = _RESERVED_IDENTIFIER_FIXUP_3330.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3334;
        _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_2117.x;
        _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_2117.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2127 = _RESERVED_IDENTIFIER_FIXUP_3330.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3338;
        _RESERVED_IDENTIFIER_FIXUP_3338.x = _RESERVED_IDENTIFIER_FIXUP_2127.x;
        _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2127.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2137 = _RESERVED_IDENTIFIER_FIXUP_3330.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3342;
        _RESERVED_IDENTIFIER_FIXUP_3342.x = _RESERVED_IDENTIFIER_FIXUP_2137.x;
        _RESERVED_IDENTIFIER_FIXUP_3342.y = _RESERVED_IDENTIFIER_FIXUP_2137.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2147 = _RESERVED_IDENTIFIER_FIXUP_3330.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3346;
        _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_2147.x;
        _RESERVED_IDENTIFIER_FIXUP_3346.y = _RESERVED_IDENTIFIER_FIXUP_2147.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2155 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2155.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2155.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2161 = hdLod6(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3334.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3338.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3342.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3346.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3334.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2161.y = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3338.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2161.z = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3342.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2161.w = hdLod6(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2218 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2161 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3346.xy;
        float param_65 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2224 = hdLod6(param_64, param_65).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2224;
        float _RESERVED_IDENTIFIER_FIXUP_2229 = float(_RESERVED_IDENTIFIER_FIXUP_2224 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2229;
        float _RESERVED_IDENTIFIER_FIXUP_2232 = dot(_RESERVED_IDENTIFIER_FIXUP_2218, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3330.z = _RESERVED_IDENTIFIER_FIXUP_2232;
        float _RESERVED_IDENTIFIER_FIXUP_2238 = _RESERVED_IDENTIFIER_FIXUP_2229 + _RESERVED_IDENTIFIER_FIXUP_2232;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2238;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2238 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_2218;
        _RESERVED_IDENTIFIER_FIXUP_3462 = _RESERVED_IDENTIFIER_FIXUP_3330;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2251 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3174 = _RESERVED_IDENTIFIER_FIXUP_3169;
        _RESERVED_IDENTIFIER_FIXUP_3174.z = _RESERVED_IDENTIFIER_FIXUP_2251;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3465;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3463;
        if (_RESERVED_IDENTIFIER_FIXUP_2251 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2260 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3264 = _RESERVED_IDENTIFIER_FIXUP_3174;
            _RESERVED_IDENTIFIER_FIXUP_3264.z = _RESERVED_IDENTIFIER_FIXUP_2260.x;
            _RESERVED_IDENTIFIER_FIXUP_3264.w = _RESERVED_IDENTIFIER_FIXUP_2260.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2270 = _RESERVED_IDENTIFIER_FIXUP_3264.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3268;
            _RESERVED_IDENTIFIER_FIXUP_3268.x = _RESERVED_IDENTIFIER_FIXUP_2270.x;
            _RESERVED_IDENTIFIER_FIXUP_3268.y = _RESERVED_IDENTIFIER_FIXUP_2270.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2280 = _RESERVED_IDENTIFIER_FIXUP_3264.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3272;
            _RESERVED_IDENTIFIER_FIXUP_3272.x = _RESERVED_IDENTIFIER_FIXUP_2280.x;
            _RESERVED_IDENTIFIER_FIXUP_3272.y = _RESERVED_IDENTIFIER_FIXUP_2280.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2290 = _RESERVED_IDENTIFIER_FIXUP_3264.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3276;
            _RESERVED_IDENTIFIER_FIXUP_3276.x = _RESERVED_IDENTIFIER_FIXUP_2290.x;
            _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_2290.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2300 = _RESERVED_IDENTIFIER_FIXUP_3264.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3280;
            _RESERVED_IDENTIFIER_FIXUP_3280.x = _RESERVED_IDENTIFIER_FIXUP_2300.x;
            _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_2300.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2308 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2308.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2308.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2314 = hdLod7(param_66, param_67);
            _RESERVED_IDENTIFIER_FIXUP_3268.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3272.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3276.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3280.w = 0.0;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3268.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2314.y = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3272.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2314.z = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3276.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2314.w = hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2371 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2314 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3280.xy;
            float param_75 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2377 = hdLod7(param_74, param_75).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3264.z = _RESERVED_IDENTIFIER_FIXUP_2377;
            float _RESERVED_IDENTIFIER_FIXUP_2382 = float(_RESERVED_IDENTIFIER_FIXUP_2377 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3264.z = _RESERVED_IDENTIFIER_FIXUP_2382;
            float _RESERVED_IDENTIFIER_FIXUP_2385 = dot(_RESERVED_IDENTIFIER_FIXUP_2371, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3264.w = _RESERVED_IDENTIFIER_FIXUP_2385;
            float _RESERVED_IDENTIFIER_FIXUP_2391 = _RESERVED_IDENTIFIER_FIXUP_2382 + _RESERVED_IDENTIFIER_FIXUP_2385;
            _RESERVED_IDENTIFIER_FIXUP_3264.z = _RESERVED_IDENTIFIER_FIXUP_2391;
            _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_2391 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3465 = _RESERVED_IDENTIFIER_FIXUP_2371;
            _RESERVED_IDENTIFIER_FIXUP_3463 = _RESERVED_IDENTIFIER_FIXUP_3264;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3178 = _RESERVED_IDENTIFIER_FIXUP_3461;
            _RESERVED_IDENTIFIER_FIXUP_3178.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3178.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2407 = (_RESERVED_IDENTIFIER_FIXUP_3178.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3183;
            _RESERVED_IDENTIFIER_FIXUP_3183.x = _RESERVED_IDENTIFIER_FIXUP_2407.x;
            _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_2407.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2417 = _RESERVED_IDENTIFIER_FIXUP_3183.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3187;
            _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_2417.x;
            _RESERVED_IDENTIFIER_FIXUP_3187.y = _RESERVED_IDENTIFIER_FIXUP_2417.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2427 = _RESERVED_IDENTIFIER_FIXUP_3183.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3191;
            _RESERVED_IDENTIFIER_FIXUP_3191.x = _RESERVED_IDENTIFIER_FIXUP_2427.x;
            _RESERVED_IDENTIFIER_FIXUP_3191.y = _RESERVED_IDENTIFIER_FIXUP_2427.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2437 = _RESERVED_IDENTIFIER_FIXUP_3183.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3195;
            _RESERVED_IDENTIFIER_FIXUP_3195.x = _RESERVED_IDENTIFIER_FIXUP_2437.x;
            _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_2437.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2447 = _RESERVED_IDENTIFIER_FIXUP_3183.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3199;
            _RESERVED_IDENTIFIER_FIXUP_3199.x = _RESERVED_IDENTIFIER_FIXUP_2447.x;
            _RESERVED_IDENTIFIER_FIXUP_3199.y = _RESERVED_IDENTIFIER_FIXUP_2447.y;
            _RESERVED_IDENTIFIER_FIXUP_3183.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3183.xy;
            float param_77 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2461 = hdLod8(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3187.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3191.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3195.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3199.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3187.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2461.y = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3191.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2461.z = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3195.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2461.w = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3199.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2524 = hdLod8(param_84, param_85).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3239 = _RESERVED_IDENTIFIER_FIXUP_3174;
            _RESERVED_IDENTIFIER_FIXUP_3239.z = _RESERVED_IDENTIFIER_FIXUP_2524;
            float _RESERVED_IDENTIFIER_FIXUP_2529 = float(_RESERVED_IDENTIFIER_FIXUP_2524 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3239.z = _RESERVED_IDENTIFIER_FIXUP_2529;
            float _RESERVED_IDENTIFIER_FIXUP_2532 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2461 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3239.w = _RESERVED_IDENTIFIER_FIXUP_2532;
            float _RESERVED_IDENTIFIER_FIXUP_2538 = _RESERVED_IDENTIFIER_FIXUP_2529 + _RESERVED_IDENTIFIER_FIXUP_2532;
            _RESERVED_IDENTIFIER_FIXUP_3239.z = _RESERVED_IDENTIFIER_FIXUP_2538;
            float _RESERVED_IDENTIFIER_FIXUP_2546 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3239.w = _RESERVED_IDENTIFIER_FIXUP_2546;
            float _RESERVED_IDENTIFIER_FIXUP_2552 = clamp((_RESERVED_IDENTIFIER_FIXUP_2546 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3239.w = _RESERVED_IDENTIFIER_FIXUP_2552;
            float _RESERVED_IDENTIFIER_FIXUP_2557 = (_RESERVED_IDENTIFIER_FIXUP_2538 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3239.z = _RESERVED_IDENTIFIER_FIXUP_2557;
            _RESERVED_IDENTIFIER_FIXUP_3239.y = (_RESERVED_IDENTIFIER_FIXUP_2552 * _RESERVED_IDENTIFIER_FIXUP_2557) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3465 = _RESERVED_IDENTIFIER_FIXUP_3178;
            _RESERVED_IDENTIFIER_FIXUP_3463 = _RESERVED_IDENTIFIER_FIXUP_3239;
        }
        _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_3465;
        _RESERVED_IDENTIFIER_FIXUP_3462 = _RESERVED_IDENTIFIER_FIXUP_3463;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2572 = min(_RESERVED_IDENTIFIER_FIXUP_3462.y, _RESERVED_IDENTIFIER_FIXUP_3462.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3398 = _RESERVED_IDENTIFIER_FIXUP_3464;
    _RESERVED_IDENTIFIER_FIXUP_3398.x = _RESERVED_IDENTIFIER_FIXUP_2572;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3401 = _RESERVED_IDENTIFIER_FIXUP_3462;
    _RESERVED_IDENTIFIER_FIXUP_3401.x = (_RESERVED_IDENTIFIER_FIXUP_2572 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2583 = _RESERVED_IDENTIFIER_FIXUP_1913.xyz * _RESERVED_IDENTIFIER_FIXUP_3401.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3403 = _RESERVED_IDENTIFIER_FIXUP_1913;
    _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_2583.x;
    _RESERVED_IDENTIFIER_FIXUP_3403.y = _RESERVED_IDENTIFIER_FIXUP_2583.y;
    _RESERVED_IDENTIFIER_FIXUP_3403.z = _RESERVED_IDENTIFIER_FIXUP_2583.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_3403.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3409 = _RESERVED_IDENTIFIER_FIXUP_3403;
    _RESERVED_IDENTIFIER_FIXUP_3409.x = _RESERVED_IDENTIFIER_FIXUP_2594.x;
    _RESERVED_IDENTIFIER_FIXUP_3409.y = _RESERVED_IDENTIFIER_FIXUP_2594.y;
    _RESERVED_IDENTIFIER_FIXUP_3409.z = _RESERVED_IDENTIFIER_FIXUP_2594.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2605 = _RESERVED_IDENTIFIER_FIXUP_3409.xyz + _RESERVED_IDENTIFIER_FIXUP_3409.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3415 = _RESERVED_IDENTIFIER_FIXUP_3409;
    _RESERVED_IDENTIFIER_FIXUP_3415.x = _RESERVED_IDENTIFIER_FIXUP_2605.x;
    _RESERVED_IDENTIFIER_FIXUP_3415.y = _RESERVED_IDENTIFIER_FIXUP_2605.y;
    _RESERVED_IDENTIFIER_FIXUP_3415.z = _RESERVED_IDENTIFIER_FIXUP_2605.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2616 = _RESERVED_IDENTIFIER_FIXUP_3415.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3401.x = _RESERVED_IDENTIFIER_FIXUP_2616.x;
    _RESERVED_IDENTIFIER_FIXUP_3401.y = _RESERVED_IDENTIFIER_FIXUP_2616.y;
    _RESERVED_IDENTIFIER_FIXUP_3401.z = _RESERVED_IDENTIFIER_FIXUP_2616.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2630 = (_RESERVED_IDENTIFIER_FIXUP_3401.xyz * _RESERVED_IDENTIFIER_FIXUP_3398.xxx) + _RESERVED_IDENTIFIER_FIXUP_3415.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3427 = _RESERVED_IDENTIFIER_FIXUP_3415;
    _RESERVED_IDENTIFIER_FIXUP_3427.x = _RESERVED_IDENTIFIER_FIXUP_2630.x;
    _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_2630.y;
    _RESERVED_IDENTIFIER_FIXUP_3427.z = _RESERVED_IDENTIFIER_FIXUP_2630.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2643 = _RESERVED_IDENTIFIER_FIXUP_3427.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_3427;
    _RESERVED_IDENTIFIER_FIXUP_3433.x = _RESERVED_IDENTIFIER_FIXUP_2643.x;
    _RESERVED_IDENTIFIER_FIXUP_3433.y = _RESERVED_IDENTIFIER_FIXUP_2643.y;
    _RESERVED_IDENTIFIER_FIXUP_3433.z = _RESERVED_IDENTIFIER_FIXUP_2643.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3433.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3064.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1005 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2702;
    if (_RESERVED_IDENTIFIER_FIXUP_978 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2702 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_978), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1005);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2702 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1005);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2702;
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
        vec2 hdB130 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB130.x;
        r1.z = hdB130.y;
        vec2 hdB152 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB152.x;
        r2.y = hdB152.y;
        vec2 hdB163 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB163.x;
        r3.y = hdB163.y;
        vec2 hdB174 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB174.x;
        r4.y = hdB174.y;
        vec2 hdB185 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB185.x;
        r5.y = hdB185.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
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
    r1.y = max(abs(v5.x), abs(v5.y));
    if (r1.y < 1.0)
    {
        vec2 hdB316 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB316.x;
        r1.z = hdB316.y;
        vec2 hdB326 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB326.x;
        r2.y = hdB326.y;
        vec2 hdB336 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB336.x;
        r3.y = hdB336.y;
        vec2 hdB346 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB346.x;
        r4.y = hdB346.y;
        vec2 hdB356 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB356.x;
        r5.y = hdB356.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            vec2 hdB471 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB471.x;
            r1.w = hdB471.y;
            vec2 hdB481 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB481.x;
            r2.y = hdB481.y;
            vec2 hdB491 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB491.x;
            r3.y = hdB491.y;
            vec2 hdB501 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB501.x;
            r4.y = hdB501.y;
            vec2 hdB511 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB511.x;
            r5.y = hdB511.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v6.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v4.w;
            r2.y = v5.w;
            vec2 hdB619 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB619.x;
            r3.y = hdB619.y;
            vec2 hdB629 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB629.x;
            r4.y = hdB629.y;
            vec2 hdB639 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB639.x;
            r5.y = hdB639.y;
            vec2 hdB649 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB649.x;
            r6.y = hdB649.y;
            vec2 hdB659 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB659.x;
            r7.y = hdB659.y;
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
            r3 += (-v6.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v6.w);
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
    vec3 hdB874 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
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
    bool _3073 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3083;
    if (_3073)
    {
        _3083 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3083 = _3073;
    }
    if (_3083)
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
        bool _3108 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3123;
        if (!_3108)
        {
            _3123 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3123 = _3108;
        }
        if (_3123)
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
