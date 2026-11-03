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
float _RESERVED_IDENTIFIER_FIXUP_3397;
vec4 _RESERVED_IDENTIFIER_FIXUP_3398;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1056 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1060 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1064 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1076 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2672 = _RESERVED_IDENTIFIER_FIXUP_1056;
    _RESERVED_IDENTIFIER_FIXUP_2672.x = _RESERVED_IDENTIFIER_FIXUP_1076;
    float _RESERVED_IDENTIFIER_FIXUP_1082 = clamp((_RESERVED_IDENTIFIER_FIXUP_1076 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2672.x = _RESERVED_IDENTIFIER_FIXUP_1082;
    float _RESERVED_IDENTIFIER_FIXUP_1088 = ((-_RESERVED_IDENTIFIER_FIXUP_1082) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2672.y = _RESERVED_IDENTIFIER_FIXUP_1088;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3400;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3399;
    if (_RESERVED_IDENTIFIER_FIXUP_1088 != (-_RESERVED_IDENTIFIER_FIXUP_1088))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1100 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2684 = _RESERVED_IDENTIFIER_FIXUP_2672;
        _RESERVED_IDENTIFIER_FIXUP_2684.y = _RESERVED_IDENTIFIER_FIXUP_1100.x;
        _RESERVED_IDENTIFIER_FIXUP_2684.z = _RESERVED_IDENTIFIER_FIXUP_1100.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1110 = _RESERVED_IDENTIFIER_FIXUP_2684.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2688;
        _RESERVED_IDENTIFIER_FIXUP_2688.x = _RESERVED_IDENTIFIER_FIXUP_1110.x;
        _RESERVED_IDENTIFIER_FIXUP_2688.y = _RESERVED_IDENTIFIER_FIXUP_1110.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_2684.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2692;
        _RESERVED_IDENTIFIER_FIXUP_2692.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
        _RESERVED_IDENTIFIER_FIXUP_2692.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1130 = _RESERVED_IDENTIFIER_FIXUP_2684.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2696;
        _RESERVED_IDENTIFIER_FIXUP_2696.x = _RESERVED_IDENTIFIER_FIXUP_1130.x;
        _RESERVED_IDENTIFIER_FIXUP_2696.y = _RESERVED_IDENTIFIER_FIXUP_1130.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1140 = _RESERVED_IDENTIFIER_FIXUP_2684.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2700;
        _RESERVED_IDENTIFIER_FIXUP_2700.x = _RESERVED_IDENTIFIER_FIXUP_1140.x;
        _RESERVED_IDENTIFIER_FIXUP_2700.y = _RESERVED_IDENTIFIER_FIXUP_1140.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1148 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1148.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1148.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1154 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_2688.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2692.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2696.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2700.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2688.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1154.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2692.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1154.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2696.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1154.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1211 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1154 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2700.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1217 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2684.y = _RESERVED_IDENTIFIER_FIXUP_1217;
        float _RESERVED_IDENTIFIER_FIXUP_1222 = float(_RESERVED_IDENTIFIER_FIXUP_1217 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2684.y = _RESERVED_IDENTIFIER_FIXUP_1222;
        float _RESERVED_IDENTIFIER_FIXUP_1225 = dot(_RESERVED_IDENTIFIER_FIXUP_1211, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2684.z = _RESERVED_IDENTIFIER_FIXUP_1225;
        float _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1222 + _RESERVED_IDENTIFIER_FIXUP_1225;
        _RESERVED_IDENTIFIER_FIXUP_2684.y = _RESERVED_IDENTIFIER_FIXUP_1231;
        float _RESERVED_IDENTIFIER_FIXUP_1236 = (_RESERVED_IDENTIFIER_FIXUP_1231 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2684.y = _RESERVED_IDENTIFIER_FIXUP_1236;
        _RESERVED_IDENTIFIER_FIXUP_2684.x = (_RESERVED_IDENTIFIER_FIXUP_1082 * _RESERVED_IDENTIFIER_FIXUP_1236) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3400 = _RESERVED_IDENTIFIER_FIXUP_1211;
        _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_2684;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2682 = _RESERVED_IDENTIFIER_FIXUP_2672;
        _RESERVED_IDENTIFIER_FIXUP_2682.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3400 = _RESERVED_IDENTIFIER_FIXUP_1060;
        _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_2682;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1254 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2756 = _RESERVED_IDENTIFIER_FIXUP_3399;
    _RESERVED_IDENTIFIER_FIXUP_2756.y = _RESERVED_IDENTIFIER_FIXUP_1254;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3401;
    if (_RESERVED_IDENTIFIER_FIXUP_1254 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1263 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2917 = _RESERVED_IDENTIFIER_FIXUP_2756;
        _RESERVED_IDENTIFIER_FIXUP_2917.y = _RESERVED_IDENTIFIER_FIXUP_1263.x;
        _RESERVED_IDENTIFIER_FIXUP_2917.z = _RESERVED_IDENTIFIER_FIXUP_1263.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1273 = _RESERVED_IDENTIFIER_FIXUP_2917.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2921;
        _RESERVED_IDENTIFIER_FIXUP_2921.x = _RESERVED_IDENTIFIER_FIXUP_1273.x;
        _RESERVED_IDENTIFIER_FIXUP_2921.y = _RESERVED_IDENTIFIER_FIXUP_1273.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_2917.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2925;
        _RESERVED_IDENTIFIER_FIXUP_2925.x = _RESERVED_IDENTIFIER_FIXUP_1283.x;
        _RESERVED_IDENTIFIER_FIXUP_2925.y = _RESERVED_IDENTIFIER_FIXUP_1283.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1293 = _RESERVED_IDENTIFIER_FIXUP_2917.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2929;
        _RESERVED_IDENTIFIER_FIXUP_2929.x = _RESERVED_IDENTIFIER_FIXUP_1293.x;
        _RESERVED_IDENTIFIER_FIXUP_2929.y = _RESERVED_IDENTIFIER_FIXUP_1293.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1303 = _RESERVED_IDENTIFIER_FIXUP_2917.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2933;
        _RESERVED_IDENTIFIER_FIXUP_2933.x = _RESERVED_IDENTIFIER_FIXUP_1303.x;
        _RESERVED_IDENTIFIER_FIXUP_2933.y = _RESERVED_IDENTIFIER_FIXUP_1303.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1311 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1311.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1311.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1317 = hdLod6(param_13, param_14);
        _RESERVED_IDENTIFIER_FIXUP_2921.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2925.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2929.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2933.w = 0.0;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_2921.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1317.y = hdLod6(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2925.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1317.z = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2929.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1317.w = hdLod6(param_19, param_20).x;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_2933.xy;
        float param_22 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1380 = hdLod6(param_21, param_22).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2917.y = _RESERVED_IDENTIFIER_FIXUP_1380;
        float _RESERVED_IDENTIFIER_FIXUP_1385 = float(_RESERVED_IDENTIFIER_FIXUP_1380 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2917.y = _RESERVED_IDENTIFIER_FIXUP_1385;
        float _RESERVED_IDENTIFIER_FIXUP_1388 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1317 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2917.z = _RESERVED_IDENTIFIER_FIXUP_1388;
        float _RESERVED_IDENTIFIER_FIXUP_1394 = _RESERVED_IDENTIFIER_FIXUP_1385 + _RESERVED_IDENTIFIER_FIXUP_1388;
        _RESERVED_IDENTIFIER_FIXUP_2917.y = _RESERVED_IDENTIFIER_FIXUP_1394;
        _RESERVED_IDENTIFIER_FIXUP_2917.y = _RESERVED_IDENTIFIER_FIXUP_1394 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3401 = _RESERVED_IDENTIFIER_FIXUP_2917;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1407 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2761 = _RESERVED_IDENTIFIER_FIXUP_2756;
        _RESERVED_IDENTIFIER_FIXUP_2761.z = _RESERVED_IDENTIFIER_FIXUP_1407;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3402;
        if (_RESERVED_IDENTIFIER_FIXUP_1407 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1416 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2851 = _RESERVED_IDENTIFIER_FIXUP_2761;
            _RESERVED_IDENTIFIER_FIXUP_2851.z = _RESERVED_IDENTIFIER_FIXUP_1416.x;
            _RESERVED_IDENTIFIER_FIXUP_2851.w = _RESERVED_IDENTIFIER_FIXUP_1416.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1426 = _RESERVED_IDENTIFIER_FIXUP_2851.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2855;
            _RESERVED_IDENTIFIER_FIXUP_2855.x = _RESERVED_IDENTIFIER_FIXUP_1426.x;
            _RESERVED_IDENTIFIER_FIXUP_2855.y = _RESERVED_IDENTIFIER_FIXUP_1426.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1436 = _RESERVED_IDENTIFIER_FIXUP_2851.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2859;
            _RESERVED_IDENTIFIER_FIXUP_2859.x = _RESERVED_IDENTIFIER_FIXUP_1436.x;
            _RESERVED_IDENTIFIER_FIXUP_2859.y = _RESERVED_IDENTIFIER_FIXUP_1436.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_2851.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2863;
            _RESERVED_IDENTIFIER_FIXUP_2863.x = _RESERVED_IDENTIFIER_FIXUP_1446.x;
            _RESERVED_IDENTIFIER_FIXUP_2863.y = _RESERVED_IDENTIFIER_FIXUP_1446.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1456 = _RESERVED_IDENTIFIER_FIXUP_2851.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2867;
            _RESERVED_IDENTIFIER_FIXUP_2867.x = _RESERVED_IDENTIFIER_FIXUP_1456.x;
            _RESERVED_IDENTIFIER_FIXUP_2867.y = _RESERVED_IDENTIFIER_FIXUP_1456.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1464 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1464.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1464.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1470 = hdLod7(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_2855.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2859.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2863.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2867.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_2855.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1470.y = hdLod7(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2859.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1470.z = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2863.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1470.w = hdLod7(param_29, param_30).x;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2867.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1533 = hdLod7(param_31, param_32).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2851.z = _RESERVED_IDENTIFIER_FIXUP_1533;
            float _RESERVED_IDENTIFIER_FIXUP_1538 = float(_RESERVED_IDENTIFIER_FIXUP_1533 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2851.z = _RESERVED_IDENTIFIER_FIXUP_1538;
            float _RESERVED_IDENTIFIER_FIXUP_1541 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1470 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2851.w = _RESERVED_IDENTIFIER_FIXUP_1541;
            float _RESERVED_IDENTIFIER_FIXUP_1547 = _RESERVED_IDENTIFIER_FIXUP_1538 + _RESERVED_IDENTIFIER_FIXUP_1541;
            _RESERVED_IDENTIFIER_FIXUP_2851.z = _RESERVED_IDENTIFIER_FIXUP_1547;
            _RESERVED_IDENTIFIER_FIXUP_2851.y = _RESERVED_IDENTIFIER_FIXUP_1547 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_2851;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2765 = _RESERVED_IDENTIFIER_FIXUP_3400;
            _RESERVED_IDENTIFIER_FIXUP_2765.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2765.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1563 = (_RESERVED_IDENTIFIER_FIXUP_2765.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2770;
            _RESERVED_IDENTIFIER_FIXUP_2770.x = _RESERVED_IDENTIFIER_FIXUP_1563.x;
            _RESERVED_IDENTIFIER_FIXUP_2770.y = _RESERVED_IDENTIFIER_FIXUP_1563.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1573 = _RESERVED_IDENTIFIER_FIXUP_2770.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2774;
            _RESERVED_IDENTIFIER_FIXUP_2774.x = _RESERVED_IDENTIFIER_FIXUP_1573.x;
            _RESERVED_IDENTIFIER_FIXUP_2774.y = _RESERVED_IDENTIFIER_FIXUP_1573.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1583 = _RESERVED_IDENTIFIER_FIXUP_2770.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2778;
            _RESERVED_IDENTIFIER_FIXUP_2778.x = _RESERVED_IDENTIFIER_FIXUP_1583.x;
            _RESERVED_IDENTIFIER_FIXUP_2778.y = _RESERVED_IDENTIFIER_FIXUP_1583.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1593 = _RESERVED_IDENTIFIER_FIXUP_2770.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2782;
            _RESERVED_IDENTIFIER_FIXUP_2782.x = _RESERVED_IDENTIFIER_FIXUP_1593.x;
            _RESERVED_IDENTIFIER_FIXUP_2782.y = _RESERVED_IDENTIFIER_FIXUP_1593.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1603 = _RESERVED_IDENTIFIER_FIXUP_2770.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2786;
            _RESERVED_IDENTIFIER_FIXUP_2786.x = _RESERVED_IDENTIFIER_FIXUP_1603.x;
            _RESERVED_IDENTIFIER_FIXUP_2786.y = _RESERVED_IDENTIFIER_FIXUP_1603.y;
            _RESERVED_IDENTIFIER_FIXUP_2770.w = 0.0;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2770.xy;
            float param_34 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1617 = hdLod8(param_33, param_34);
            _RESERVED_IDENTIFIER_FIXUP_2774.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2778.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2782.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2786.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_2774.xy;
            float param_36 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1617.y = hdLod8(param_35, param_36).x;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2778.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1617.z = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2782.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1617.w = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2786.xy;
            float param_42 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1680 = hdLod8(param_41, param_42).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2826 = _RESERVED_IDENTIFIER_FIXUP_2761;
            _RESERVED_IDENTIFIER_FIXUP_2826.z = _RESERVED_IDENTIFIER_FIXUP_1680;
            float _RESERVED_IDENTIFIER_FIXUP_1685 = float(_RESERVED_IDENTIFIER_FIXUP_1680 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2826.z = _RESERVED_IDENTIFIER_FIXUP_1685;
            float _RESERVED_IDENTIFIER_FIXUP_1688 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1617 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2826.w = _RESERVED_IDENTIFIER_FIXUP_1688;
            float _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_1685 + _RESERVED_IDENTIFIER_FIXUP_1688;
            _RESERVED_IDENTIFIER_FIXUP_2826.z = _RESERVED_IDENTIFIER_FIXUP_1694;
            float _RESERVED_IDENTIFIER_FIXUP_1702 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2826.w = _RESERVED_IDENTIFIER_FIXUP_1702;
            float _RESERVED_IDENTIFIER_FIXUP_1708 = clamp((_RESERVED_IDENTIFIER_FIXUP_1702 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2826.w = _RESERVED_IDENTIFIER_FIXUP_1708;
            float _RESERVED_IDENTIFIER_FIXUP_1713 = (_RESERVED_IDENTIFIER_FIXUP_1694 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2826.z = _RESERVED_IDENTIFIER_FIXUP_1713;
            _RESERVED_IDENTIFIER_FIXUP_2826.y = (_RESERVED_IDENTIFIER_FIXUP_1708 * _RESERVED_IDENTIFIER_FIXUP_1713) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_2826;
        }
        _RESERVED_IDENTIFIER_FIXUP_3401 = _RESERVED_IDENTIFIER_FIXUP_3402;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1728 = min(_RESERVED_IDENTIFIER_FIXUP_3401.y, _RESERVED_IDENTIFIER_FIXUP_3401.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2988 = _RESERVED_IDENTIFIER_FIXUP_3401;
    _RESERVED_IDENTIFIER_FIXUP_2988.x = (_RESERVED_IDENTIFIER_FIXUP_1728 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1739 = mix(_RESERVED_IDENTIFIER_FIXUP_1056, _RESERVED_IDENTIFIER_FIXUP_1060, _RESERVED_IDENTIFIER_FIXUP_1064.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_2988.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2990 = _RESERVED_IDENTIFIER_FIXUP_2988;
    _RESERVED_IDENTIFIER_FIXUP_2990.x = _RESERVED_IDENTIFIER_FIXUP_1739.x;
    _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1739.y;
    _RESERVED_IDENTIFIER_FIXUP_2990.z = _RESERVED_IDENTIFIER_FIXUP_1739.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1750 = _RESERVED_IDENTIFIER_FIXUP_2990.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3397).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2996 = _RESERVED_IDENTIFIER_FIXUP_2990;
    _RESERVED_IDENTIFIER_FIXUP_2996.x = _RESERVED_IDENTIFIER_FIXUP_1750.x;
    _RESERVED_IDENTIFIER_FIXUP_2996.y = _RESERVED_IDENTIFIER_FIXUP_1750.y;
    _RESERVED_IDENTIFIER_FIXUP_2996.z = _RESERVED_IDENTIFIER_FIXUP_1750.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1761 = _RESERVED_IDENTIFIER_FIXUP_2996.xyz + _RESERVED_IDENTIFIER_FIXUP_2996.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3002 = _RESERVED_IDENTIFIER_FIXUP_2996;
    _RESERVED_IDENTIFIER_FIXUP_3002.x = _RESERVED_IDENTIFIER_FIXUP_1761.x;
    _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1761.y;
    _RESERVED_IDENTIFIER_FIXUP_3002.z = _RESERVED_IDENTIFIER_FIXUP_1761.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3417 = vec4(_RESERVED_IDENTIFIER_FIXUP_1728, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1786 = (_RESERVED_IDENTIFIER_FIXUP_3417.yzw * _RESERVED_IDENTIFIER_FIXUP_3417.xxx) + _RESERVED_IDENTIFIER_FIXUP_3002.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3014 = _RESERVED_IDENTIFIER_FIXUP_3002;
    _RESERVED_IDENTIFIER_FIXUP_3014.x = _RESERVED_IDENTIFIER_FIXUP_1786.x;
    _RESERVED_IDENTIFIER_FIXUP_3014.y = _RESERVED_IDENTIFIER_FIXUP_1786.y;
    _RESERVED_IDENTIFIER_FIXUP_3014.z = _RESERVED_IDENTIFIER_FIXUP_1786.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1799 = _RESERVED_IDENTIFIER_FIXUP_3014.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3020 = _RESERVED_IDENTIFIER_FIXUP_3014;
    _RESERVED_IDENTIFIER_FIXUP_3020.x = _RESERVED_IDENTIFIER_FIXUP_1799.x;
    _RESERVED_IDENTIFIER_FIXUP_3020.y = _RESERVED_IDENTIFIER_FIXUP_1799.y;
    _RESERVED_IDENTIFIER_FIXUP_3020.z = _RESERVED_IDENTIFIER_FIXUP_1799.z;
    vec2 param_43 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1854 = hdTex0(param_43);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1858 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1862 = hdTex2(param_45);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1867 = mix(_RESERVED_IDENTIFIER_FIXUP_1854, _RESERVED_IDENTIFIER_FIXUP_1858, _RESERVED_IDENTIFIER_FIXUP_1862.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3036 = _RESERVED_IDENTIFIER_FIXUP_1854;
    _RESERVED_IDENTIFIER_FIXUP_3036.x = _RESERVED_IDENTIFIER_FIXUP_1076;
    float _RESERVED_IDENTIFIER_FIXUP_1880 = clamp((_RESERVED_IDENTIFIER_FIXUP_1076 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3036.x = _RESERVED_IDENTIFIER_FIXUP_1880;
    float _RESERVED_IDENTIFIER_FIXUP_1886 = ((-_RESERVED_IDENTIFIER_FIXUP_1880) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3036.y = _RESERVED_IDENTIFIER_FIXUP_1886;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3409;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3408;
    if (_RESERVED_IDENTIFIER_FIXUP_1886 != (-_RESERVED_IDENTIFIER_FIXUP_1886))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1898 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3048 = _RESERVED_IDENTIFIER_FIXUP_3036;
        _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_1898.x;
        _RESERVED_IDENTIFIER_FIXUP_3048.z = _RESERVED_IDENTIFIER_FIXUP_1898.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1908 = _RESERVED_IDENTIFIER_FIXUP_3048.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3052;
        _RESERVED_IDENTIFIER_FIXUP_3052.x = _RESERVED_IDENTIFIER_FIXUP_1908.x;
        _RESERVED_IDENTIFIER_FIXUP_3052.y = _RESERVED_IDENTIFIER_FIXUP_1908.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1918 = _RESERVED_IDENTIFIER_FIXUP_3048.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3056;
        _RESERVED_IDENTIFIER_FIXUP_3056.x = _RESERVED_IDENTIFIER_FIXUP_1918.x;
        _RESERVED_IDENTIFIER_FIXUP_3056.y = _RESERVED_IDENTIFIER_FIXUP_1918.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1928 = _RESERVED_IDENTIFIER_FIXUP_3048.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3060;
        _RESERVED_IDENTIFIER_FIXUP_3060.x = _RESERVED_IDENTIFIER_FIXUP_1928.x;
        _RESERVED_IDENTIFIER_FIXUP_3060.y = _RESERVED_IDENTIFIER_FIXUP_1928.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1938 = _RESERVED_IDENTIFIER_FIXUP_3048.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3064;
        _RESERVED_IDENTIFIER_FIXUP_3064.x = _RESERVED_IDENTIFIER_FIXUP_1938.x;
        _RESERVED_IDENTIFIER_FIXUP_3064.y = _RESERVED_IDENTIFIER_FIXUP_1938.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1946 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_1946.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_1946.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1952 = hdLod5(param_46, param_47);
        _RESERVED_IDENTIFIER_FIXUP_3052.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3056.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3060.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3064.w = 0.0;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3052.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1952.y = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3056.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1952.z = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3060.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1952.w = hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2009 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1952 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3064.xy;
        float param_55 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2015 = hdLod5(param_54, param_55).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_2015;
        float _RESERVED_IDENTIFIER_FIXUP_2020 = float(_RESERVED_IDENTIFIER_FIXUP_2015 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_2020;
        float _RESERVED_IDENTIFIER_FIXUP_2023 = dot(_RESERVED_IDENTIFIER_FIXUP_2009, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3048.z = _RESERVED_IDENTIFIER_FIXUP_2023;
        float _RESERVED_IDENTIFIER_FIXUP_2029 = _RESERVED_IDENTIFIER_FIXUP_2020 + _RESERVED_IDENTIFIER_FIXUP_2023;
        _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_2029;
        float _RESERVED_IDENTIFIER_FIXUP_2034 = (_RESERVED_IDENTIFIER_FIXUP_2029 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_2034;
        _RESERVED_IDENTIFIER_FIXUP_3048.x = (_RESERVED_IDENTIFIER_FIXUP_1880 * _RESERVED_IDENTIFIER_FIXUP_2034) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3409 = _RESERVED_IDENTIFIER_FIXUP_2009;
        _RESERVED_IDENTIFIER_FIXUP_3408 = _RESERVED_IDENTIFIER_FIXUP_3048;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3046 = _RESERVED_IDENTIFIER_FIXUP_3036;
        _RESERVED_IDENTIFIER_FIXUP_3046.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3409 = _RESERVED_IDENTIFIER_FIXUP_1858;
        _RESERVED_IDENTIFIER_FIXUP_3408 = _RESERVED_IDENTIFIER_FIXUP_3046;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3120 = _RESERVED_IDENTIFIER_FIXUP_3408;
    _RESERVED_IDENTIFIER_FIXUP_3120.y = _RESERVED_IDENTIFIER_FIXUP_1254;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3410;
    if (_RESERVED_IDENTIFIER_FIXUP_1254 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2061 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3281 = _RESERVED_IDENTIFIER_FIXUP_3120;
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_2061.x;
        _RESERVED_IDENTIFIER_FIXUP_3281.z = _RESERVED_IDENTIFIER_FIXUP_2061.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2071 = _RESERVED_IDENTIFIER_FIXUP_3281.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3285;
        _RESERVED_IDENTIFIER_FIXUP_3285.x = _RESERVED_IDENTIFIER_FIXUP_2071.x;
        _RESERVED_IDENTIFIER_FIXUP_3285.y = _RESERVED_IDENTIFIER_FIXUP_2071.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2081 = _RESERVED_IDENTIFIER_FIXUP_3281.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3289;
        _RESERVED_IDENTIFIER_FIXUP_3289.x = _RESERVED_IDENTIFIER_FIXUP_2081.x;
        _RESERVED_IDENTIFIER_FIXUP_3289.y = _RESERVED_IDENTIFIER_FIXUP_2081.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2091 = _RESERVED_IDENTIFIER_FIXUP_3281.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3293;
        _RESERVED_IDENTIFIER_FIXUP_3293.x = _RESERVED_IDENTIFIER_FIXUP_2091.x;
        _RESERVED_IDENTIFIER_FIXUP_3293.y = _RESERVED_IDENTIFIER_FIXUP_2091.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2101 = _RESERVED_IDENTIFIER_FIXUP_3281.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3297;
        _RESERVED_IDENTIFIER_FIXUP_3297.x = _RESERVED_IDENTIFIER_FIXUP_2101.x;
        _RESERVED_IDENTIFIER_FIXUP_3297.y = _RESERVED_IDENTIFIER_FIXUP_2101.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2109 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2109.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2109.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2115 = hdLod6(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3285.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3289.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3293.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3297.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3285.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2115.y = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3289.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2115.z = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3293.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2115.w = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3297.xy;
        float param_65 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2178 = hdLod6(param_64, param_65).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_2178;
        float _RESERVED_IDENTIFIER_FIXUP_2183 = float(_RESERVED_IDENTIFIER_FIXUP_2178 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_2183;
        float _RESERVED_IDENTIFIER_FIXUP_2186 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2115 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3281.z = _RESERVED_IDENTIFIER_FIXUP_2186;
        float _RESERVED_IDENTIFIER_FIXUP_2192 = _RESERVED_IDENTIFIER_FIXUP_2183 + _RESERVED_IDENTIFIER_FIXUP_2186;
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_2192;
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_2192 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3410 = _RESERVED_IDENTIFIER_FIXUP_3281;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2205 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3125 = _RESERVED_IDENTIFIER_FIXUP_3120;
        _RESERVED_IDENTIFIER_FIXUP_3125.z = _RESERVED_IDENTIFIER_FIXUP_2205;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3411;
        if (_RESERVED_IDENTIFIER_FIXUP_2205 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2214 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3215 = _RESERVED_IDENTIFIER_FIXUP_3125;
            _RESERVED_IDENTIFIER_FIXUP_3215.z = _RESERVED_IDENTIFIER_FIXUP_2214.x;
            _RESERVED_IDENTIFIER_FIXUP_3215.w = _RESERVED_IDENTIFIER_FIXUP_2214.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2224 = _RESERVED_IDENTIFIER_FIXUP_3215.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3219;
            _RESERVED_IDENTIFIER_FIXUP_3219.x = _RESERVED_IDENTIFIER_FIXUP_2224.x;
            _RESERVED_IDENTIFIER_FIXUP_3219.y = _RESERVED_IDENTIFIER_FIXUP_2224.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2234 = _RESERVED_IDENTIFIER_FIXUP_3215.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3223;
            _RESERVED_IDENTIFIER_FIXUP_3223.x = _RESERVED_IDENTIFIER_FIXUP_2234.x;
            _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_2234.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2244 = _RESERVED_IDENTIFIER_FIXUP_3215.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3227;
            _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_2244.x;
            _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2244.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2254 = _RESERVED_IDENTIFIER_FIXUP_3215.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3231;
            _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_2254.x;
            _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_2254.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2262 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2262.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2262.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2268 = hdLod7(param_66, param_67);
            _RESERVED_IDENTIFIER_FIXUP_3219.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3223.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3227.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3231.w = 0.0;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3219.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2268.y = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3223.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2268.z = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3227.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2268.w = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3231.xy;
            float param_75 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2331 = hdLod7(param_74, param_75).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3215.z = _RESERVED_IDENTIFIER_FIXUP_2331;
            float _RESERVED_IDENTIFIER_FIXUP_2336 = float(_RESERVED_IDENTIFIER_FIXUP_2331 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3215.z = _RESERVED_IDENTIFIER_FIXUP_2336;
            float _RESERVED_IDENTIFIER_FIXUP_2339 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2268 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3215.w = _RESERVED_IDENTIFIER_FIXUP_2339;
            float _RESERVED_IDENTIFIER_FIXUP_2345 = _RESERVED_IDENTIFIER_FIXUP_2336 + _RESERVED_IDENTIFIER_FIXUP_2339;
            _RESERVED_IDENTIFIER_FIXUP_3215.z = _RESERVED_IDENTIFIER_FIXUP_2345;
            _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_2345 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3411 = _RESERVED_IDENTIFIER_FIXUP_3215;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3129 = _RESERVED_IDENTIFIER_FIXUP_3409;
            _RESERVED_IDENTIFIER_FIXUP_3129.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3129.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2361 = (_RESERVED_IDENTIFIER_FIXUP_3129.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3134;
            _RESERVED_IDENTIFIER_FIXUP_3134.x = _RESERVED_IDENTIFIER_FIXUP_2361.x;
            _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_2361.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2371 = _RESERVED_IDENTIFIER_FIXUP_3134.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3138;
            _RESERVED_IDENTIFIER_FIXUP_3138.x = _RESERVED_IDENTIFIER_FIXUP_2371.x;
            _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_2371.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2381 = _RESERVED_IDENTIFIER_FIXUP_3134.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3142;
            _RESERVED_IDENTIFIER_FIXUP_3142.x = _RESERVED_IDENTIFIER_FIXUP_2381.x;
            _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_2381.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2391 = _RESERVED_IDENTIFIER_FIXUP_3134.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3146;
            _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_2391.x;
            _RESERVED_IDENTIFIER_FIXUP_3146.y = _RESERVED_IDENTIFIER_FIXUP_2391.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2401 = _RESERVED_IDENTIFIER_FIXUP_3134.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3150;
            _RESERVED_IDENTIFIER_FIXUP_3150.x = _RESERVED_IDENTIFIER_FIXUP_2401.x;
            _RESERVED_IDENTIFIER_FIXUP_3150.y = _RESERVED_IDENTIFIER_FIXUP_2401.y;
            _RESERVED_IDENTIFIER_FIXUP_3134.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3134.xy;
            float param_77 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2415 = hdLod8(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3138.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3142.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3146.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3150.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3138.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2415.y = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3142.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2415.z = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3146.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2415.w = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3150.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2478 = hdLod8(param_84, param_85).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3190 = _RESERVED_IDENTIFIER_FIXUP_3125;
            _RESERVED_IDENTIFIER_FIXUP_3190.z = _RESERVED_IDENTIFIER_FIXUP_2478;
            float _RESERVED_IDENTIFIER_FIXUP_2483 = float(_RESERVED_IDENTIFIER_FIXUP_2478 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3190.z = _RESERVED_IDENTIFIER_FIXUP_2483;
            float _RESERVED_IDENTIFIER_FIXUP_2486 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2415 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3190.w = _RESERVED_IDENTIFIER_FIXUP_2486;
            float _RESERVED_IDENTIFIER_FIXUP_2492 = _RESERVED_IDENTIFIER_FIXUP_2483 + _RESERVED_IDENTIFIER_FIXUP_2486;
            _RESERVED_IDENTIFIER_FIXUP_3190.z = _RESERVED_IDENTIFIER_FIXUP_2492;
            float _RESERVED_IDENTIFIER_FIXUP_2500 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3190.w = _RESERVED_IDENTIFIER_FIXUP_2500;
            float _RESERVED_IDENTIFIER_FIXUP_2506 = clamp((_RESERVED_IDENTIFIER_FIXUP_2500 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3190.w = _RESERVED_IDENTIFIER_FIXUP_2506;
            float _RESERVED_IDENTIFIER_FIXUP_2511 = (_RESERVED_IDENTIFIER_FIXUP_2492 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3190.z = _RESERVED_IDENTIFIER_FIXUP_2511;
            _RESERVED_IDENTIFIER_FIXUP_3190.y = (_RESERVED_IDENTIFIER_FIXUP_2506 * _RESERVED_IDENTIFIER_FIXUP_2511) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3411 = _RESERVED_IDENTIFIER_FIXUP_3190;
        }
        _RESERVED_IDENTIFIER_FIXUP_3410 = _RESERVED_IDENTIFIER_FIXUP_3411;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2526 = min(_RESERVED_IDENTIFIER_FIXUP_3410.y, _RESERVED_IDENTIFIER_FIXUP_3410.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3352 = _RESERVED_IDENTIFIER_FIXUP_3410;
    _RESERVED_IDENTIFIER_FIXUP_3352.x = (_RESERVED_IDENTIFIER_FIXUP_2526 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2537 = _RESERVED_IDENTIFIER_FIXUP_1867.xyz * _RESERVED_IDENTIFIER_FIXUP_3352.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3354 = _RESERVED_IDENTIFIER_FIXUP_3352;
    _RESERVED_IDENTIFIER_FIXUP_3354.x = _RESERVED_IDENTIFIER_FIXUP_2537.x;
    _RESERVED_IDENTIFIER_FIXUP_3354.y = _RESERVED_IDENTIFIER_FIXUP_2537.y;
    _RESERVED_IDENTIFIER_FIXUP_3354.z = _RESERVED_IDENTIFIER_FIXUP_2537.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2548 = _RESERVED_IDENTIFIER_FIXUP_3354.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3360 = _RESERVED_IDENTIFIER_FIXUP_3354;
    _RESERVED_IDENTIFIER_FIXUP_3360.x = _RESERVED_IDENTIFIER_FIXUP_2548.x;
    _RESERVED_IDENTIFIER_FIXUP_3360.y = _RESERVED_IDENTIFIER_FIXUP_2548.y;
    _RESERVED_IDENTIFIER_FIXUP_3360.z = _RESERVED_IDENTIFIER_FIXUP_2548.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2559 = _RESERVED_IDENTIFIER_FIXUP_3360.xyz + _RESERVED_IDENTIFIER_FIXUP_3360.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3366 = _RESERVED_IDENTIFIER_FIXUP_3360;
    _RESERVED_IDENTIFIER_FIXUP_3366.x = _RESERVED_IDENTIFIER_FIXUP_2559.x;
    _RESERVED_IDENTIFIER_FIXUP_3366.y = _RESERVED_IDENTIFIER_FIXUP_2559.y;
    _RESERVED_IDENTIFIER_FIXUP_3366.z = _RESERVED_IDENTIFIER_FIXUP_2559.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3419 = vec4(_RESERVED_IDENTIFIER_FIXUP_2526, _RESERVED_IDENTIFIER_FIXUP_1867.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2584 = (_RESERVED_IDENTIFIER_FIXUP_3419.yzw * _RESERVED_IDENTIFIER_FIXUP_3419.xxx) + _RESERVED_IDENTIFIER_FIXUP_3366.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3378 = _RESERVED_IDENTIFIER_FIXUP_3366;
    _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_2584.x;
    _RESERVED_IDENTIFIER_FIXUP_3378.y = _RESERVED_IDENTIFIER_FIXUP_2584.y;
    _RESERVED_IDENTIFIER_FIXUP_3378.z = _RESERVED_IDENTIFIER_FIXUP_2584.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2597 = _RESERVED_IDENTIFIER_FIXUP_3378.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3384 = _RESERVED_IDENTIFIER_FIXUP_3378;
    _RESERVED_IDENTIFIER_FIXUP_3384.x = _RESERVED_IDENTIFIER_FIXUP_2597.x;
    _RESERVED_IDENTIFIER_FIXUP_3384.y = _RESERVED_IDENTIFIER_FIXUP_2597.y;
    _RESERVED_IDENTIFIER_FIXUP_3384.z = _RESERVED_IDENTIFIER_FIXUP_2597.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3384.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_916 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_925;
    if (_RESERVED_IDENTIFIER_FIXUP_916)
    {
        _RESERVED_IDENTIFIER_FIXUP_925 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_925 = _RESERVED_IDENTIFIER_FIXUP_916;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_925)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_962 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3020.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_989 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2662;
    if (_RESERVED_IDENTIFIER_FIXUP_962 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2662 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_962), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_989);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2662 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_989);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2662;
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
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB113 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB113.x;
        r0.z = hdB113.y;
        vec2 hdB135 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB135.x;
        r1.y = hdB135.y;
        vec2 hdB146 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB146.x;
        r2.y = hdB146.y;
        vec2 hdB157 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB157.x;
        r4.y = hdB157.y;
        vec2 hdB168 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB168.x;
        r5.y = hdB168.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r6.xy;
        float param_4 = r6.w;
        r6 = hdLod5(param_3, param_4);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_5 = r1.xy;
        float param_6 = r1.w;
        r1 = hdLod5(param_5, param_6);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
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
        r6.y = r1.x;
        r6.z = r2.x;
        r6.w = r4.x;
        r1 = r6 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r0.y = r5.x + (-v4.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r1, vec4(1.0));
        r0.y += r0.z;
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
        vec2 hdB299 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB299.x;
        r0.z = hdB299.y;
        vec2 hdB309 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB309.x;
        r1.y = hdB309.y;
        vec2 hdB319 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB319.x;
        r2.y = hdB319.y;
        vec2 hdB329 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB329.x;
        r4.y = hdB329.y;
        vec2 hdB339 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB339.x;
        r5.y = hdB339.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod6(param_13, param_14);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_15 = r1.xy;
        float param_16 = r1.w;
        r1 = hdLod6(param_15, param_16);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod6(param_17, param_18);
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
        r6.y = r1.x;
        r6.z = r2.x;
        r6.w = r4.x;
        r1 = r6 + (-v5.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r0.y = r5.x + (-v5.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r1, vec4(1.0));
        r0.y += r0.z;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v6.x), abs(v6.y));
        if (r0.z < 1.0)
        {
            vec2 hdB454 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB454.x;
            r0.w = hdB454.y;
            vec2 hdB464 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = hdB464.x;
            r1.y = hdB464.y;
            vec2 hdB474 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB474.x;
            r2.y = hdB474.y;
            vec2 hdB484 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB484.x;
            r4.y = hdB484.y;
            vec2 hdB494 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB494.x;
            r5.y = hdB494.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r6.xy;
            float param_24 = r6.w;
            r6 = hdLod7(param_23, param_24);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_25 = r1.xy;
            float param_26 = r1.w;
            r1 = hdLod7(param_25, param_26);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod7(param_27, param_28);
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
            r6.y = r1.x;
            r6.z = r2.x;
            r6.w = r4.x;
            r1 = r6 + (-v6.zzzz);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r0.z = r5.x + (-v6.z);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r1, vec4(1.0));
            r0.z += r0.w;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.x = v4.w;
            r1.y = v5.w;
            vec2 hdB602 = (r1.xy * vec2(0.5)) + vec2(0.5);
            r2.x = hdB602.x;
            r2.y = hdB602.y;
            vec2 hdB612 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB612.x;
            r4.y = hdB612.y;
            vec2 hdB622 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB622.x;
            r5.y = hdB622.y;
            vec2 hdB632 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB632.x;
            r6.y = hdB632.y;
            vec2 hdB642 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB642.x;
            r7.y = hdB642.y;
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_33 = r2.xy;
            float param_34 = r2.w;
            r2 = hdLod8(param_33, param_34);
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
            r2.y = r4.x;
            r2.z = r5.x;
            r2.w = r6.x;
            r2 += (-v6.wwww);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r0.z = r7.x + (-v6.w);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r2, vec4(1.0));
            r0.z += r0.w;
            r0.w = max(abs(r1.x), abs(r1.y));
            r0.w = clamp((r0.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.z = (r0.z * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.w * r0.z) + 1.0;
        }
    }
    r1.x = min(r0.y, r0.x);
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB780 = r0;
    vec3 hdB782 = r3.xyz * hdB780.xxx;
    r0.x = hdB782.x;
    r0.y = hdB782.y;
    r0.z = hdB782.z;
    vec4 hdB789 = r0;
    vec3 hdB793 = hdB789.xyz * v0.xyz;
    r0.x = hdB793.x;
    r0.y = hdB793.y;
    r0.z = hdB793.z;
    vec4 hdB800 = r0;
    vec4 hdB802 = r0;
    vec3 hdB804 = hdB800.xyz + hdB802.xyz;
    r0.x = hdB804.x;
    r0.y = hdB804.y;
    r0.z = hdB804.z;
    vec3 hdB815 = r3.www * v1.xyz;
    r1.y = hdB815.x;
    r1.z = hdB815.y;
    r1.w = hdB815.z;
    vec4 hdB827 = r0;
    vec3 hdB829 = (r1.yzw * r1.xxx) + hdB827.xyz;
    r0.x = hdB829.x;
    r0.y = hdB829.y;
    r0.z = hdB829.z;
    vec4 hdB836 = r0;
    vec3 hdB843 = hdB836.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB843.x;
    r0.y = hdB843.y;
    r0.z = hdB843.z;
    vec3 hdB858 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB858.x;
    oC0.y = hdB858.y;
    oC0.z = hdB858.z;
    oC0.w = 1.0;
    bool hdB871 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB879;
    if (hdB871)
    {
        hdB879 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB879 = hdB871;
    }
    if (hdB879)
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
    bool _2987 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _2997;
    if (_2987)
    {
        _2997 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _2997 = _2987;
    }
    if (_2997)
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
        bool _3022 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3037;
        if (!_3022)
        {
            _3037 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3037 = _3022;
        }
        if (_3037)
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
