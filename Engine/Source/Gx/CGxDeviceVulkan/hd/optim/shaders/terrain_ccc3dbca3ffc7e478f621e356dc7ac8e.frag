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
float _RESERVED_IDENTIFIER_FIXUP_3840;
vec4 _RESERVED_IDENTIFIER_FIXUP_3841;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1180 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1188 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1192 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1188.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3015 = _RESERVED_IDENTIFIER_FIXUP_1188;
    _RESERVED_IDENTIFIER_FIXUP_3015.y = _RESERVED_IDENTIFIER_FIXUP_1192;
    _RESERVED_IDENTIFIER_FIXUP_3015.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1192;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1184 * _RESERVED_IDENTIFIER_FIXUP_3015.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1208 = (_RESERVED_IDENTIFIER_FIXUP_1180 * _RESERVED_IDENTIFIER_FIXUP_3015.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1202;
    float _RESERVED_IDENTIFIER_FIXUP_1215 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3022 = _RESERVED_IDENTIFIER_FIXUP_1202;
    _RESERVED_IDENTIFIER_FIXUP_3022.x = _RESERVED_IDENTIFIER_FIXUP_1215;
    float _RESERVED_IDENTIFIER_FIXUP_1221 = clamp((_RESERVED_IDENTIFIER_FIXUP_1215 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3022.x = _RESERVED_IDENTIFIER_FIXUP_1221;
    float _RESERVED_IDENTIFIER_FIXUP_1227 = ((-_RESERVED_IDENTIFIER_FIXUP_1221) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3022.x = _RESERVED_IDENTIFIER_FIXUP_1227;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3842;
    if (_RESERVED_IDENTIFIER_FIXUP_1227 != (-_RESERVED_IDENTIFIER_FIXUP_1227))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1239 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3261;
        _RESERVED_IDENTIFIER_FIXUP_3261.x = _RESERVED_IDENTIFIER_FIXUP_1239.x;
        _RESERVED_IDENTIFIER_FIXUP_3261.y = _RESERVED_IDENTIFIER_FIXUP_1239.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1249 = _RESERVED_IDENTIFIER_FIXUP_3261.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3265;
        _RESERVED_IDENTIFIER_FIXUP_3265.x = _RESERVED_IDENTIFIER_FIXUP_1249.x;
        _RESERVED_IDENTIFIER_FIXUP_3265.y = _RESERVED_IDENTIFIER_FIXUP_1249.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1259 = _RESERVED_IDENTIFIER_FIXUP_3261.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3269;
        _RESERVED_IDENTIFIER_FIXUP_3269.x = _RESERVED_IDENTIFIER_FIXUP_1259.x;
        _RESERVED_IDENTIFIER_FIXUP_3269.y = _RESERVED_IDENTIFIER_FIXUP_1259.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1269 = _RESERVED_IDENTIFIER_FIXUP_3261.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3273;
        _RESERVED_IDENTIFIER_FIXUP_3273.x = _RESERVED_IDENTIFIER_FIXUP_1269.x;
        _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1269.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1279 = _RESERVED_IDENTIFIER_FIXUP_3261.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3277;
        _RESERVED_IDENTIFIER_FIXUP_3277.x = _RESERVED_IDENTIFIER_FIXUP_1279.x;
        _RESERVED_IDENTIFIER_FIXUP_3277.y = _RESERVED_IDENTIFIER_FIXUP_1279.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1289 = _RESERVED_IDENTIFIER_FIXUP_3261.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3281;
        _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_1289.x;
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_1289.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_3261.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3285;
        _RESERVED_IDENTIFIER_FIXUP_3285.x = _RESERVED_IDENTIFIER_FIXUP_1299.x;
        _RESERVED_IDENTIFIER_FIXUP_3285.y = _RESERVED_IDENTIFIER_FIXUP_1299.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_3261.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3289;
        _RESERVED_IDENTIFIER_FIXUP_3289.x = _RESERVED_IDENTIFIER_FIXUP_1309.x;
        _RESERVED_IDENTIFIER_FIXUP_3289.y = _RESERVED_IDENTIFIER_FIXUP_1309.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_3261.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3293;
        _RESERVED_IDENTIFIER_FIXUP_3293.x = _RESERVED_IDENTIFIER_FIXUP_1319.x;
        _RESERVED_IDENTIFIER_FIXUP_3293.y = _RESERVED_IDENTIFIER_FIXUP_1319.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1327 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1327.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1327.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1333 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3265.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3269.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3273.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3277.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3277.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1373 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3281.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3285.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3289.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3293.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3293.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = hdLod5(param_7, param_8);
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3265.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1333.y = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3269.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1333.z = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3273.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1333.w = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3281.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.y = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3285.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.z = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3289.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.w = hdLod5(param_19, param_20).x;
        float _RESERVED_IDENTIFIER_FIXUP_1453 = _RESERVED_IDENTIFIER_FIXUP_1413.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_1413;
        _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_1453;
        float _RESERVED_IDENTIFIER_FIXUP_1458 = float(_RESERVED_IDENTIFIER_FIXUP_1453 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_1458;
        float _RESERVED_IDENTIFIER_FIXUP_1461 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1333 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_1461;
        float _RESERVED_IDENTIFIER_FIXUP_1464 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1373 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3358.z = _RESERVED_IDENTIFIER_FIXUP_1464;
        float _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_1461 + _RESERVED_IDENTIFIER_FIXUP_1464;
        _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_1470;
        float _RESERVED_IDENTIFIER_FIXUP_1476 = _RESERVED_IDENTIFIER_FIXUP_1458 + _RESERVED_IDENTIFIER_FIXUP_1470;
        _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_1476;
        _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_1476 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3842 = _RESERVED_IDENTIFIER_FIXUP_3358;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1489 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3022.y = _RESERVED_IDENTIFIER_FIXUP_1489;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3843;
        if (_RESERVED_IDENTIFIER_FIXUP_1489 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1498 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3195 = _RESERVED_IDENTIFIER_FIXUP_3022;
            _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_1498.x;
            _RESERVED_IDENTIFIER_FIXUP_3195.z = _RESERVED_IDENTIFIER_FIXUP_1498.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1508 = _RESERVED_IDENTIFIER_FIXUP_3195.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3199;
            _RESERVED_IDENTIFIER_FIXUP_3199.x = _RESERVED_IDENTIFIER_FIXUP_1508.x;
            _RESERVED_IDENTIFIER_FIXUP_3199.y = _RESERVED_IDENTIFIER_FIXUP_1508.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1518 = _RESERVED_IDENTIFIER_FIXUP_3195.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3203;
            _RESERVED_IDENTIFIER_FIXUP_3203.x = _RESERVED_IDENTIFIER_FIXUP_1518.x;
            _RESERVED_IDENTIFIER_FIXUP_3203.y = _RESERVED_IDENTIFIER_FIXUP_1518.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_3195.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3207;
            _RESERVED_IDENTIFIER_FIXUP_3207.x = _RESERVED_IDENTIFIER_FIXUP_1528.x;
            _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_1528.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1538 = _RESERVED_IDENTIFIER_FIXUP_3195.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3211;
            _RESERVED_IDENTIFIER_FIXUP_3211.x = _RESERVED_IDENTIFIER_FIXUP_1538.x;
            _RESERVED_IDENTIFIER_FIXUP_3211.y = _RESERVED_IDENTIFIER_FIXUP_1538.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1546 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1546.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1546.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1552 = hdLod6(param_21, param_22);
            _RESERVED_IDENTIFIER_FIXUP_3199.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3203.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3207.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3211.w = 0.0;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3199.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1552.y = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3203.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1552.z = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3207.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1552.w = hdLod6(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3211.xy;
            float param_30 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1615 = hdLod6(param_29, param_30).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_1615;
            float _RESERVED_IDENTIFIER_FIXUP_1620 = float(_RESERVED_IDENTIFIER_FIXUP_1615 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_1620;
            float _RESERVED_IDENTIFIER_FIXUP_1623 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1552 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3195.z = _RESERVED_IDENTIFIER_FIXUP_1623;
            float _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_1620 + _RESERVED_IDENTIFIER_FIXUP_1623;
            _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_1629;
            _RESERVED_IDENTIFIER_FIXUP_3195.x = _RESERVED_IDENTIFIER_FIXUP_1629 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3843 = _RESERVED_IDENTIFIER_FIXUP_3195;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1642 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3039 = _RESERVED_IDENTIFIER_FIXUP_3022;
            _RESERVED_IDENTIFIER_FIXUP_3039.y = _RESERVED_IDENTIFIER_FIXUP_1642;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3844;
            if (_RESERVED_IDENTIFIER_FIXUP_1642 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1651 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3129 = _RESERVED_IDENTIFIER_FIXUP_3039;
                _RESERVED_IDENTIFIER_FIXUP_3129.y = _RESERVED_IDENTIFIER_FIXUP_1651.x;
                _RESERVED_IDENTIFIER_FIXUP_3129.z = _RESERVED_IDENTIFIER_FIXUP_1651.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1661 = _RESERVED_IDENTIFIER_FIXUP_3129.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3133;
                _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1661.x;
                _RESERVED_IDENTIFIER_FIXUP_3133.y = _RESERVED_IDENTIFIER_FIXUP_1661.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1671 = _RESERVED_IDENTIFIER_FIXUP_3129.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3137;
                _RESERVED_IDENTIFIER_FIXUP_3137.x = _RESERVED_IDENTIFIER_FIXUP_1671.x;
                _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1671.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1681 = _RESERVED_IDENTIFIER_FIXUP_3129.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3141;
                _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_1681.x;
                _RESERVED_IDENTIFIER_FIXUP_3141.y = _RESERVED_IDENTIFIER_FIXUP_1681.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1691 = _RESERVED_IDENTIFIER_FIXUP_3129.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3145;
                _RESERVED_IDENTIFIER_FIXUP_3145.x = _RESERVED_IDENTIFIER_FIXUP_1691.x;
                _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1691.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1699 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1699.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1699.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1705 = hdLod7(param_31, param_32);
                _RESERVED_IDENTIFIER_FIXUP_3133.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3137.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3141.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3145.w = 0.0;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3133.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1705.y = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3137.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1705.z = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3141.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1705.w = hdLod7(param_37, param_38).x;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3145.xy;
                float param_40 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1768 = hdLod7(param_39, param_40).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3129.y = _RESERVED_IDENTIFIER_FIXUP_1768;
                float _RESERVED_IDENTIFIER_FIXUP_1773 = float(_RESERVED_IDENTIFIER_FIXUP_1768 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3129.y = _RESERVED_IDENTIFIER_FIXUP_1773;
                float _RESERVED_IDENTIFIER_FIXUP_1776 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1705 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3129.z = _RESERVED_IDENTIFIER_FIXUP_1776;
                float _RESERVED_IDENTIFIER_FIXUP_1782 = _RESERVED_IDENTIFIER_FIXUP_1773 + _RESERVED_IDENTIFIER_FIXUP_1776;
                _RESERVED_IDENTIFIER_FIXUP_3129.y = _RESERVED_IDENTIFIER_FIXUP_1782;
                _RESERVED_IDENTIFIER_FIXUP_3129.x = _RESERVED_IDENTIFIER_FIXUP_1782 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3844 = _RESERVED_IDENTIFIER_FIXUP_3129;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3043 = _RESERVED_IDENTIFIER_FIXUP_3015;
                _RESERVED_IDENTIFIER_FIXUP_3043.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3043.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1798 = (_RESERVED_IDENTIFIER_FIXUP_3043.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3048;
                _RESERVED_IDENTIFIER_FIXUP_3048.x = _RESERVED_IDENTIFIER_FIXUP_1798.x;
                _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_1798.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1808 = _RESERVED_IDENTIFIER_FIXUP_3048.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3052;
                _RESERVED_IDENTIFIER_FIXUP_3052.x = _RESERVED_IDENTIFIER_FIXUP_1808.x;
                _RESERVED_IDENTIFIER_FIXUP_3052.y = _RESERVED_IDENTIFIER_FIXUP_1808.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1818 = _RESERVED_IDENTIFIER_FIXUP_3048.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3056;
                _RESERVED_IDENTIFIER_FIXUP_3056.x = _RESERVED_IDENTIFIER_FIXUP_1818.x;
                _RESERVED_IDENTIFIER_FIXUP_3056.y = _RESERVED_IDENTIFIER_FIXUP_1818.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1828 = _RESERVED_IDENTIFIER_FIXUP_3048.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3060;
                _RESERVED_IDENTIFIER_FIXUP_3060.x = _RESERVED_IDENTIFIER_FIXUP_1828.x;
                _RESERVED_IDENTIFIER_FIXUP_3060.y = _RESERVED_IDENTIFIER_FIXUP_1828.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1838 = _RESERVED_IDENTIFIER_FIXUP_3048.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3064;
                _RESERVED_IDENTIFIER_FIXUP_3064.x = _RESERVED_IDENTIFIER_FIXUP_1838.x;
                _RESERVED_IDENTIFIER_FIXUP_3064.y = _RESERVED_IDENTIFIER_FIXUP_1838.y;
                _RESERVED_IDENTIFIER_FIXUP_3048.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3048.xy;
                float param_42 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1852 = hdLod8(param_41, param_42);
                _RESERVED_IDENTIFIER_FIXUP_3052.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3056.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3060.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3064.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3052.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1852.y = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3056.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1852.z = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3060.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1852.w = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3064.xy;
                float param_50 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1915 = hdLod8(param_49, param_50).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3104 = _RESERVED_IDENTIFIER_FIXUP_3039;
                _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_1915;
                float _RESERVED_IDENTIFIER_FIXUP_1920 = float(_RESERVED_IDENTIFIER_FIXUP_1915 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_1920;
                float _RESERVED_IDENTIFIER_FIXUP_1923 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1852 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3104.z = _RESERVED_IDENTIFIER_FIXUP_1923;
                float _RESERVED_IDENTIFIER_FIXUP_1929 = _RESERVED_IDENTIFIER_FIXUP_1920 + _RESERVED_IDENTIFIER_FIXUP_1923;
                _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_1929;
                float _RESERVED_IDENTIFIER_FIXUP_1937 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3104.z = _RESERVED_IDENTIFIER_FIXUP_1937;
                float _RESERVED_IDENTIFIER_FIXUP_1943 = clamp((_RESERVED_IDENTIFIER_FIXUP_1937 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3104.z = _RESERVED_IDENTIFIER_FIXUP_1943;
                float _RESERVED_IDENTIFIER_FIXUP_1948 = (_RESERVED_IDENTIFIER_FIXUP_1929 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_1948;
                _RESERVED_IDENTIFIER_FIXUP_3104.x = (_RESERVED_IDENTIFIER_FIXUP_1943 * _RESERVED_IDENTIFIER_FIXUP_1948) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3844 = _RESERVED_IDENTIFIER_FIXUP_3104;
            }
            _RESERVED_IDENTIFIER_FIXUP_3843 = _RESERVED_IDENTIFIER_FIXUP_3844;
        }
        _RESERVED_IDENTIFIER_FIXUP_3842 = _RESERVED_IDENTIFIER_FIXUP_3843;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3381 = _RESERVED_IDENTIFIER_FIXUP_3842;
    _RESERVED_IDENTIFIER_FIXUP_3381.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1976 = _RESERVED_IDENTIFIER_FIXUP_1208.xyz * _RESERVED_IDENTIFIER_FIXUP_3381.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3383 = _RESERVED_IDENTIFIER_FIXUP_1208;
    _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_1976.x;
    _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_1976.y;
    _RESERVED_IDENTIFIER_FIXUP_3383.z = _RESERVED_IDENTIFIER_FIXUP_1976.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_3383.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3840).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3389 = _RESERVED_IDENTIFIER_FIXUP_3383;
    _RESERVED_IDENTIFIER_FIXUP_3389.x = _RESERVED_IDENTIFIER_FIXUP_1987.x;
    _RESERVED_IDENTIFIER_FIXUP_3389.y = _RESERVED_IDENTIFIER_FIXUP_1987.y;
    _RESERVED_IDENTIFIER_FIXUP_3389.z = _RESERVED_IDENTIFIER_FIXUP_1987.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1998 = _RESERVED_IDENTIFIER_FIXUP_3389.xyz + _RESERVED_IDENTIFIER_FIXUP_3389.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3395 = _RESERVED_IDENTIFIER_FIXUP_3389;
    _RESERVED_IDENTIFIER_FIXUP_3395.x = _RESERVED_IDENTIFIER_FIXUP_1998.x;
    _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_1998.y;
    _RESERVED_IDENTIFIER_FIXUP_3395.z = _RESERVED_IDENTIFIER_FIXUP_1998.z;
    _RESERVED_IDENTIFIER_FIXUP_3381.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3381.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3381.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2023 = (_RESERVED_IDENTIFIER_FIXUP_3381.yzw * _RESERVED_IDENTIFIER_FIXUP_3381.xxx) + _RESERVED_IDENTIFIER_FIXUP_3395.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3407 = _RESERVED_IDENTIFIER_FIXUP_3395;
    _RESERVED_IDENTIFIER_FIXUP_3407.x = _RESERVED_IDENTIFIER_FIXUP_2023.x;
    _RESERVED_IDENTIFIER_FIXUP_3407.y = _RESERVED_IDENTIFIER_FIXUP_2023.y;
    _RESERVED_IDENTIFIER_FIXUP_3407.z = _RESERVED_IDENTIFIER_FIXUP_2023.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2036 = _RESERVED_IDENTIFIER_FIXUP_3407.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3413 = _RESERVED_IDENTIFIER_FIXUP_3407;
    _RESERVED_IDENTIFIER_FIXUP_3413.x = _RESERVED_IDENTIFIER_FIXUP_2036.x;
    _RESERVED_IDENTIFIER_FIXUP_3413.y = _RESERVED_IDENTIFIER_FIXUP_2036.y;
    _RESERVED_IDENTIFIER_FIXUP_3413.z = _RESERVED_IDENTIFIER_FIXUP_2036.z;
    vec2 param_51 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2093 = hdTex0(param_51);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2097 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2101 = hdTex2(param_53);
    float _RESERVED_IDENTIFIER_FIXUP_2105 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2101.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3427 = _RESERVED_IDENTIFIER_FIXUP_2101;
    _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_2105;
    _RESERVED_IDENTIFIER_FIXUP_3427.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2105;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2115 = _RESERVED_IDENTIFIER_FIXUP_2097 * _RESERVED_IDENTIFIER_FIXUP_3427.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2121 = (_RESERVED_IDENTIFIER_FIXUP_2093 * _RESERVED_IDENTIFIER_FIXUP_3427.yyyy) + _RESERVED_IDENTIFIER_FIXUP_2115;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3434 = _RESERVED_IDENTIFIER_FIXUP_2115;
    _RESERVED_IDENTIFIER_FIXUP_3434.x = _RESERVED_IDENTIFIER_FIXUP_1215;
    float _RESERVED_IDENTIFIER_FIXUP_2134 = clamp((_RESERVED_IDENTIFIER_FIXUP_1215 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3434.x = _RESERVED_IDENTIFIER_FIXUP_2134;
    float _RESERVED_IDENTIFIER_FIXUP_2140 = ((-_RESERVED_IDENTIFIER_FIXUP_2134) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3434.x = _RESERVED_IDENTIFIER_FIXUP_2140;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3851;
    if (_RESERVED_IDENTIFIER_FIXUP_2140 != (-_RESERVED_IDENTIFIER_FIXUP_2140))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2152 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3673;
        _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_2152.x;
        _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_2152.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2162 = _RESERVED_IDENTIFIER_FIXUP_3673.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3677;
        _RESERVED_IDENTIFIER_FIXUP_3677.x = _RESERVED_IDENTIFIER_FIXUP_2162.x;
        _RESERVED_IDENTIFIER_FIXUP_3677.y = _RESERVED_IDENTIFIER_FIXUP_2162.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2172 = _RESERVED_IDENTIFIER_FIXUP_3673.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
        _RESERVED_IDENTIFIER_FIXUP_3681.x = _RESERVED_IDENTIFIER_FIXUP_2172.x;
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2172.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2182 = _RESERVED_IDENTIFIER_FIXUP_3673.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3685;
        _RESERVED_IDENTIFIER_FIXUP_3685.x = _RESERVED_IDENTIFIER_FIXUP_2182.x;
        _RESERVED_IDENTIFIER_FIXUP_3685.y = _RESERVED_IDENTIFIER_FIXUP_2182.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2192 = _RESERVED_IDENTIFIER_FIXUP_3673.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3689;
        _RESERVED_IDENTIFIER_FIXUP_3689.x = _RESERVED_IDENTIFIER_FIXUP_2192.x;
        _RESERVED_IDENTIFIER_FIXUP_3689.y = _RESERVED_IDENTIFIER_FIXUP_2192.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2202 = _RESERVED_IDENTIFIER_FIXUP_3673.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3693;
        _RESERVED_IDENTIFIER_FIXUP_3693.x = _RESERVED_IDENTIFIER_FIXUP_2202.x;
        _RESERVED_IDENTIFIER_FIXUP_3693.y = _RESERVED_IDENTIFIER_FIXUP_2202.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2212 = _RESERVED_IDENTIFIER_FIXUP_3673.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3697;
        _RESERVED_IDENTIFIER_FIXUP_3697.x = _RESERVED_IDENTIFIER_FIXUP_2212.x;
        _RESERVED_IDENTIFIER_FIXUP_3697.y = _RESERVED_IDENTIFIER_FIXUP_2212.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2222 = _RESERVED_IDENTIFIER_FIXUP_3673.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3701;
        _RESERVED_IDENTIFIER_FIXUP_3701.x = _RESERVED_IDENTIFIER_FIXUP_2222.x;
        _RESERVED_IDENTIFIER_FIXUP_3701.y = _RESERVED_IDENTIFIER_FIXUP_2222.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2232 = _RESERVED_IDENTIFIER_FIXUP_3673.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3705;
        _RESERVED_IDENTIFIER_FIXUP_3705.x = _RESERVED_IDENTIFIER_FIXUP_2232.x;
        _RESERVED_IDENTIFIER_FIXUP_3705.y = _RESERVED_IDENTIFIER_FIXUP_2232.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2240 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2240.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2240.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2246 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3677.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3681.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3685.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3689.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3689.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2286 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3693.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3697.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3701.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3705.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3705.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2326 = hdLod5(param_58, param_59);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3677.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2246.y = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3681.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2246.z = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3685.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2246.w = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3693.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2286.y = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3697.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2286.z = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3701.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2286.w = hdLod5(param_70, param_71).x;
        float _RESERVED_IDENTIFIER_FIXUP_2366 = _RESERVED_IDENTIFIER_FIXUP_2326.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3770 = _RESERVED_IDENTIFIER_FIXUP_2326;
        _RESERVED_IDENTIFIER_FIXUP_3770.x = _RESERVED_IDENTIFIER_FIXUP_2366;
        float _RESERVED_IDENTIFIER_FIXUP_2371 = float(_RESERVED_IDENTIFIER_FIXUP_2366 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3770.x = _RESERVED_IDENTIFIER_FIXUP_2371;
        float _RESERVED_IDENTIFIER_FIXUP_2374 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2246 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3770.y = _RESERVED_IDENTIFIER_FIXUP_2374;
        float _RESERVED_IDENTIFIER_FIXUP_2377 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2286 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3770.z = _RESERVED_IDENTIFIER_FIXUP_2377;
        float _RESERVED_IDENTIFIER_FIXUP_2383 = _RESERVED_IDENTIFIER_FIXUP_2374 + _RESERVED_IDENTIFIER_FIXUP_2377;
        _RESERVED_IDENTIFIER_FIXUP_3770.y = _RESERVED_IDENTIFIER_FIXUP_2383;
        float _RESERVED_IDENTIFIER_FIXUP_2389 = _RESERVED_IDENTIFIER_FIXUP_2371 + _RESERVED_IDENTIFIER_FIXUP_2383;
        _RESERVED_IDENTIFIER_FIXUP_3770.x = _RESERVED_IDENTIFIER_FIXUP_2389;
        _RESERVED_IDENTIFIER_FIXUP_3770.x = _RESERVED_IDENTIFIER_FIXUP_2389 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3851 = _RESERVED_IDENTIFIER_FIXUP_3770;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2402 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3434.y = _RESERVED_IDENTIFIER_FIXUP_2402;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3852;
        if (_RESERVED_IDENTIFIER_FIXUP_2402 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2411 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3607 = _RESERVED_IDENTIFIER_FIXUP_3434;
            _RESERVED_IDENTIFIER_FIXUP_3607.y = _RESERVED_IDENTIFIER_FIXUP_2411.x;
            _RESERVED_IDENTIFIER_FIXUP_3607.z = _RESERVED_IDENTIFIER_FIXUP_2411.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2421 = _RESERVED_IDENTIFIER_FIXUP_3607.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3611;
            _RESERVED_IDENTIFIER_FIXUP_3611.x = _RESERVED_IDENTIFIER_FIXUP_2421.x;
            _RESERVED_IDENTIFIER_FIXUP_3611.y = _RESERVED_IDENTIFIER_FIXUP_2421.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2431 = _RESERVED_IDENTIFIER_FIXUP_3607.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3615;
            _RESERVED_IDENTIFIER_FIXUP_3615.x = _RESERVED_IDENTIFIER_FIXUP_2431.x;
            _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_2431.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2441 = _RESERVED_IDENTIFIER_FIXUP_3607.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3619;
            _RESERVED_IDENTIFIER_FIXUP_3619.x = _RESERVED_IDENTIFIER_FIXUP_2441.x;
            _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_2441.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2451 = _RESERVED_IDENTIFIER_FIXUP_3607.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3623;
            _RESERVED_IDENTIFIER_FIXUP_3623.x = _RESERVED_IDENTIFIER_FIXUP_2451.x;
            _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_2451.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2459 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2459.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2459.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2465 = hdLod6(param_72, param_73);
            _RESERVED_IDENTIFIER_FIXUP_3611.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3615.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3619.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3623.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3611.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2465.y = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3615.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2465.z = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3619.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2465.w = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3623.xy;
            float param_81 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2528 = hdLod6(param_80, param_81).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3607.y = _RESERVED_IDENTIFIER_FIXUP_2528;
            float _RESERVED_IDENTIFIER_FIXUP_2533 = float(_RESERVED_IDENTIFIER_FIXUP_2528 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3607.y = _RESERVED_IDENTIFIER_FIXUP_2533;
            float _RESERVED_IDENTIFIER_FIXUP_2536 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2465 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3607.z = _RESERVED_IDENTIFIER_FIXUP_2536;
            float _RESERVED_IDENTIFIER_FIXUP_2542 = _RESERVED_IDENTIFIER_FIXUP_2533 + _RESERVED_IDENTIFIER_FIXUP_2536;
            _RESERVED_IDENTIFIER_FIXUP_3607.y = _RESERVED_IDENTIFIER_FIXUP_2542;
            _RESERVED_IDENTIFIER_FIXUP_3607.x = _RESERVED_IDENTIFIER_FIXUP_2542 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3852 = _RESERVED_IDENTIFIER_FIXUP_3607;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2555 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3451 = _RESERVED_IDENTIFIER_FIXUP_3434;
            _RESERVED_IDENTIFIER_FIXUP_3451.y = _RESERVED_IDENTIFIER_FIXUP_2555;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3853;
            if (_RESERVED_IDENTIFIER_FIXUP_2555 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2564 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3541 = _RESERVED_IDENTIFIER_FIXUP_3451;
                _RESERVED_IDENTIFIER_FIXUP_3541.y = _RESERVED_IDENTIFIER_FIXUP_2564.x;
                _RESERVED_IDENTIFIER_FIXUP_3541.z = _RESERVED_IDENTIFIER_FIXUP_2564.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2574 = _RESERVED_IDENTIFIER_FIXUP_3541.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3545;
                _RESERVED_IDENTIFIER_FIXUP_3545.x = _RESERVED_IDENTIFIER_FIXUP_2574.x;
                _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_2574.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2584 = _RESERVED_IDENTIFIER_FIXUP_3541.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3549;
                _RESERVED_IDENTIFIER_FIXUP_3549.x = _RESERVED_IDENTIFIER_FIXUP_2584.x;
                _RESERVED_IDENTIFIER_FIXUP_3549.y = _RESERVED_IDENTIFIER_FIXUP_2584.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_3541.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3553;
                _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2594.x;
                _RESERVED_IDENTIFIER_FIXUP_3553.y = _RESERVED_IDENTIFIER_FIXUP_2594.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2604 = _RESERVED_IDENTIFIER_FIXUP_3541.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3557;
                _RESERVED_IDENTIFIER_FIXUP_3557.x = _RESERVED_IDENTIFIER_FIXUP_2604.x;
                _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2604.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2612 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2612.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2612.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2618 = hdLod7(param_82, param_83);
                _RESERVED_IDENTIFIER_FIXUP_3545.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3549.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3553.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3557.w = 0.0;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3545.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2618.y = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3549.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2618.z = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3553.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2618.w = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3557.xy;
                float param_91 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2681 = hdLod7(param_90, param_91).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3541.y = _RESERVED_IDENTIFIER_FIXUP_2681;
                float _RESERVED_IDENTIFIER_FIXUP_2686 = float(_RESERVED_IDENTIFIER_FIXUP_2681 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3541.y = _RESERVED_IDENTIFIER_FIXUP_2686;
                float _RESERVED_IDENTIFIER_FIXUP_2689 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2618 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3541.z = _RESERVED_IDENTIFIER_FIXUP_2689;
                float _RESERVED_IDENTIFIER_FIXUP_2695 = _RESERVED_IDENTIFIER_FIXUP_2686 + _RESERVED_IDENTIFIER_FIXUP_2689;
                _RESERVED_IDENTIFIER_FIXUP_3541.y = _RESERVED_IDENTIFIER_FIXUP_2695;
                _RESERVED_IDENTIFIER_FIXUP_3541.x = _RESERVED_IDENTIFIER_FIXUP_2695 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3853 = _RESERVED_IDENTIFIER_FIXUP_3541;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3455 = _RESERVED_IDENTIFIER_FIXUP_3427;
                _RESERVED_IDENTIFIER_FIXUP_3455.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3455.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2711 = (_RESERVED_IDENTIFIER_FIXUP_3455.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3460;
                _RESERVED_IDENTIFIER_FIXUP_3460.x = _RESERVED_IDENTIFIER_FIXUP_2711.x;
                _RESERVED_IDENTIFIER_FIXUP_3460.y = _RESERVED_IDENTIFIER_FIXUP_2711.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2721 = _RESERVED_IDENTIFIER_FIXUP_3460.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3464;
                _RESERVED_IDENTIFIER_FIXUP_3464.x = _RESERVED_IDENTIFIER_FIXUP_2721.x;
                _RESERVED_IDENTIFIER_FIXUP_3464.y = _RESERVED_IDENTIFIER_FIXUP_2721.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2731 = _RESERVED_IDENTIFIER_FIXUP_3460.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3468;
                _RESERVED_IDENTIFIER_FIXUP_3468.x = _RESERVED_IDENTIFIER_FIXUP_2731.x;
                _RESERVED_IDENTIFIER_FIXUP_3468.y = _RESERVED_IDENTIFIER_FIXUP_2731.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2741 = _RESERVED_IDENTIFIER_FIXUP_3460.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3472;
                _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_2741.x;
                _RESERVED_IDENTIFIER_FIXUP_3472.y = _RESERVED_IDENTIFIER_FIXUP_2741.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2751 = _RESERVED_IDENTIFIER_FIXUP_3460.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3476;
                _RESERVED_IDENTIFIER_FIXUP_3476.x = _RESERVED_IDENTIFIER_FIXUP_2751.x;
                _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2751.y;
                _RESERVED_IDENTIFIER_FIXUP_3460.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3460.xy;
                float param_93 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2765 = hdLod8(param_92, param_93);
                _RESERVED_IDENTIFIER_FIXUP_3464.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3468.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3472.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3476.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3464.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2765.y = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3468.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2765.z = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3472.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2765.w = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3476.xy;
                float param_101 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2828 = hdLod8(param_100, param_101).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3516 = _RESERVED_IDENTIFIER_FIXUP_3451;
                _RESERVED_IDENTIFIER_FIXUP_3516.y = _RESERVED_IDENTIFIER_FIXUP_2828;
                float _RESERVED_IDENTIFIER_FIXUP_2833 = float(_RESERVED_IDENTIFIER_FIXUP_2828 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3516.y = _RESERVED_IDENTIFIER_FIXUP_2833;
                float _RESERVED_IDENTIFIER_FIXUP_2836 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2765 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3516.z = _RESERVED_IDENTIFIER_FIXUP_2836;
                float _RESERVED_IDENTIFIER_FIXUP_2842 = _RESERVED_IDENTIFIER_FIXUP_2833 + _RESERVED_IDENTIFIER_FIXUP_2836;
                _RESERVED_IDENTIFIER_FIXUP_3516.y = _RESERVED_IDENTIFIER_FIXUP_2842;
                float _RESERVED_IDENTIFIER_FIXUP_2850 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3516.z = _RESERVED_IDENTIFIER_FIXUP_2850;
                float _RESERVED_IDENTIFIER_FIXUP_2856 = clamp((_RESERVED_IDENTIFIER_FIXUP_2850 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3516.z = _RESERVED_IDENTIFIER_FIXUP_2856;
                float _RESERVED_IDENTIFIER_FIXUP_2861 = (_RESERVED_IDENTIFIER_FIXUP_2842 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3516.y = _RESERVED_IDENTIFIER_FIXUP_2861;
                _RESERVED_IDENTIFIER_FIXUP_3516.x = (_RESERVED_IDENTIFIER_FIXUP_2856 * _RESERVED_IDENTIFIER_FIXUP_2861) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3853 = _RESERVED_IDENTIFIER_FIXUP_3516;
            }
            _RESERVED_IDENTIFIER_FIXUP_3852 = _RESERVED_IDENTIFIER_FIXUP_3853;
        }
        _RESERVED_IDENTIFIER_FIXUP_3851 = _RESERVED_IDENTIFIER_FIXUP_3852;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2876 = (_RESERVED_IDENTIFIER_FIXUP_3851.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3791 = _RESERVED_IDENTIFIER_FIXUP_3851;
    _RESERVED_IDENTIFIER_FIXUP_3791.y = _RESERVED_IDENTIFIER_FIXUP_2876;
    _RESERVED_IDENTIFIER_FIXUP_3791.y = _RESERVED_IDENTIFIER_FIXUP_2876;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2889 = _RESERVED_IDENTIFIER_FIXUP_2121.xyz * _RESERVED_IDENTIFIER_FIXUP_3791.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3797 = _RESERVED_IDENTIFIER_FIXUP_2121;
    _RESERVED_IDENTIFIER_FIXUP_3797.x = _RESERVED_IDENTIFIER_FIXUP_2889.x;
    _RESERVED_IDENTIFIER_FIXUP_3797.y = _RESERVED_IDENTIFIER_FIXUP_2889.y;
    _RESERVED_IDENTIFIER_FIXUP_3797.z = _RESERVED_IDENTIFIER_FIXUP_2889.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2900 = _RESERVED_IDENTIFIER_FIXUP_3797.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3803 = _RESERVED_IDENTIFIER_FIXUP_3797;
    _RESERVED_IDENTIFIER_FIXUP_3803.x = _RESERVED_IDENTIFIER_FIXUP_2900.x;
    _RESERVED_IDENTIFIER_FIXUP_3803.y = _RESERVED_IDENTIFIER_FIXUP_2900.y;
    _RESERVED_IDENTIFIER_FIXUP_3803.z = _RESERVED_IDENTIFIER_FIXUP_2900.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2911 = _RESERVED_IDENTIFIER_FIXUP_3803.xyz + _RESERVED_IDENTIFIER_FIXUP_3803.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3809 = _RESERVED_IDENTIFIER_FIXUP_3803;
    _RESERVED_IDENTIFIER_FIXUP_3809.x = _RESERVED_IDENTIFIER_FIXUP_2911.x;
    _RESERVED_IDENTIFIER_FIXUP_3809.y = _RESERVED_IDENTIFIER_FIXUP_2911.y;
    _RESERVED_IDENTIFIER_FIXUP_3809.z = _RESERVED_IDENTIFIER_FIXUP_2911.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2922 = _RESERVED_IDENTIFIER_FIXUP_3809.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3791.y = _RESERVED_IDENTIFIER_FIXUP_2922.x;
    _RESERVED_IDENTIFIER_FIXUP_3791.z = _RESERVED_IDENTIFIER_FIXUP_2922.y;
    _RESERVED_IDENTIFIER_FIXUP_3791.w = _RESERVED_IDENTIFIER_FIXUP_2922.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2936 = (_RESERVED_IDENTIFIER_FIXUP_3791.yzw * _RESERVED_IDENTIFIER_FIXUP_3791.xxx) + _RESERVED_IDENTIFIER_FIXUP_3809.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3821 = _RESERVED_IDENTIFIER_FIXUP_3809;
    _RESERVED_IDENTIFIER_FIXUP_3821.x = _RESERVED_IDENTIFIER_FIXUP_2936.x;
    _RESERVED_IDENTIFIER_FIXUP_3821.y = _RESERVED_IDENTIFIER_FIXUP_2936.y;
    _RESERVED_IDENTIFIER_FIXUP_3821.z = _RESERVED_IDENTIFIER_FIXUP_2936.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2949 = _RESERVED_IDENTIFIER_FIXUP_3821.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3827 = _RESERVED_IDENTIFIER_FIXUP_3821;
    _RESERVED_IDENTIFIER_FIXUP_3827.x = _RESERVED_IDENTIFIER_FIXUP_2949.x;
    _RESERVED_IDENTIFIER_FIXUP_3827.y = _RESERVED_IDENTIFIER_FIXUP_2949.y;
    _RESERVED_IDENTIFIER_FIXUP_3827.z = _RESERVED_IDENTIFIER_FIXUP_2949.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3827.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1037 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1046;
    if (_RESERVED_IDENTIFIER_FIXUP_1037)
    {
        _RESERVED_IDENTIFIER_FIXUP_1046 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1046 = _RESERVED_IDENTIFIER_FIXUP_1037;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1046)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1083 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3413.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1110 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3008;
    if (_RESERVED_IDENTIFIER_FIXUP_1083 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3008 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1083), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1110);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3008 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1110);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3008;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2876);
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
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
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
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB132 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB132.x;
        r1.y = hdB132.y;
        vec2 hdB153 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB153.x;
        r2.y = hdB153.y;
        vec2 hdB164 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB164.x;
        r3.y = hdB164.y;
        vec2 hdB175 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB175.x;
        r4.y = hdB175.y;
        vec2 hdB186 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB186.x;
        r5.y = hdB186.y;
        vec2 hdB197 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB197.x;
        r6.y = hdB197.y;
        vec2 hdB208 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB208.x;
        r7.y = hdB208.y;
        vec2 hdB219 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB219.x;
        r8.y = hdB219.y;
        vec4 hdB224 = r1;
        vec2 hdB230 = hdB224.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB230.x;
        r1.y = hdB230.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r9.xy;
        float param_4 = r9.w;
        r9 = hdLod5(param_3, param_4);
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
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod5(param_13, param_14);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_15 = r7.xy;
        float param_16 = r7.w;
        r7 = hdLod5(param_15, param_16);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_17 = r8.xy;
        float param_18 = r8.w;
        r8 = hdLod5(param_17, param_18);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_19 = r1.xy;
        float param_20 = r1.w;
        r1 = hdLod5(param_19, param_20);
        r9.y = r2.x;
        r9.z = r3.x;
        r9.w = r4.x;
        r2 = r9 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v4.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.x += (-v4.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v5.x), abs(v5.y));
        if (r1.y < 1.0)
        {
            vec2 hdB418 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB418.x;
            r1.z = hdB418.y;
            vec2 hdB428 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB428.x;
            r2.y = hdB428.y;
            vec2 hdB438 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB438.x;
            r3.y = hdB438.y;
            vec2 hdB448 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB448.x;
            r4.y = hdB448.y;
            vec2 hdB458 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB458.x;
            r5.y = hdB458.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod6(param_21, param_22);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod6(param_25, param_26);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_27 = r4.xy;
            float param_28 = r4.w;
            r4 = hdLod6(param_27, param_28);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_29 = r5.xy;
            float param_30 = r5.w;
            r5 = hdLod6(param_29, param_30);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v5.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v6.x), abs(v6.y));
            if (r1.y < 1.0)
            {
                vec2 hdB574 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB574.x;
                r1.z = hdB574.y;
                vec2 hdB584 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB584.x;
                r2.y = hdB584.y;
                vec2 hdB594 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB594.x;
                r3.y = hdB594.y;
                vec2 hdB604 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB604.x;
                r4.y = hdB604.y;
                vec2 hdB614 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB614.x;
                r5.y = hdB614.y;
                r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r6.xy;
                float param_32 = r6.w;
                r6 = hdLod7(param_31, param_32);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_35 = r3.xy;
                float param_36 = r3.w;
                r3 = hdLod7(param_35, param_36);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_37 = r4.xy;
                float param_38 = r4.w;
                r4 = hdLod7(param_37, param_38);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_39 = r5.xy;
                float param_40 = r5.w;
                r5 = hdLod7(param_39, param_40);
                r6.y = r2.x;
                r6.z = r3.x;
                r6.w = r4.x;
                r2 = r6 + (-v6.zzzz);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r1.y = r5.x + (-v6.z);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r2, vec4(1.0));
                r1.y += r1.z;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v4.w;
                r2.y = v5.w;
                vec2 hdB722 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB722.x;
                r3.y = hdB722.y;
                vec2 hdB732 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB732.x;
                r4.y = hdB732.y;
                vec2 hdB742 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB742.x;
                r5.y = hdB742.y;
                vec2 hdB752 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB752.x;
                r6.y = hdB752.y;
                vec2 hdB762 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB762.x;
                r7.y = hdB762.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_41 = r3.xy;
                float param_42 = r3.w;
                r3 = hdLod8(param_41, param_42);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r4 = hdLod8(param_43, param_44);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_45 = r5.xy;
                float param_46 = r5.w;
                r5 = hdLod8(param_45, param_46);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_47 = r6.xy;
                float param_48 = r6.w;
                r6 = hdLod8(param_47, param_48);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_49 = r7.xy;
                float param_50 = r7.w;
                r7 = hdLod8(param_49, param_50);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v6.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v6.w);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r3, vec4(1.0));
                r1.y += r1.z;
                r1.z = max(abs(r2.x), abs(r2.y));
                r1.z = clamp((r1.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.z * r1.y) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB892 = r0;
    vec3 hdB896 = hdB892.xyz * r1.yyy;
    r0.x = hdB896.x;
    r0.y = hdB896.y;
    r0.z = hdB896.z;
    vec4 hdB903 = r0;
    vec3 hdB907 = hdB903.xyz * v0.xyz;
    r0.x = hdB907.x;
    r0.y = hdB907.y;
    r0.z = hdB907.z;
    vec4 hdB914 = r0;
    vec4 hdB916 = r0;
    vec3 hdB918 = hdB914.xyz + hdB916.xyz;
    r0.x = hdB918.x;
    r0.y = hdB918.y;
    r0.z = hdB918.z;
    vec3 hdB929 = r0.www * v1.xyz;
    r1.y = hdB929.x;
    r1.z = hdB929.y;
    r1.w = hdB929.z;
    vec4 hdB941 = r0;
    vec3 hdB943 = (r1.yzw * r1.xxx) + hdB941.xyz;
    r0.x = hdB943.x;
    r0.y = hdB943.y;
    r0.z = hdB943.z;
    vec4 hdB950 = r0;
    vec3 hdB957 = hdB950.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB957.x;
    r0.y = hdB957.y;
    r0.z = hdB957.z;
    vec3 hdB972 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB972.x;
    oC0.y = hdB972.y;
    oC0.z = hdB972.z;
    oC0.w = 1.0;
    bool hdB985 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB993;
    if (hdB985)
    {
        hdB993 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB993 = hdB985;
    }
    if (hdB993)
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
    bool _3328 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3338;
    if (_3328)
    {
        _3338 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3338 = _3328;
    }
    if (_3338)
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
        bool _3363 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3378;
        if (!_3363)
        {
            _3378 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3378 = _3363;
        }
        if (_3378)
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
