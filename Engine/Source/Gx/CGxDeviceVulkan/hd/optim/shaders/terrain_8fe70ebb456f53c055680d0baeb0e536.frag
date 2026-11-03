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
float _RESERVED_IDENTIFIER_FIXUP_3665;
vec4 _RESERVED_IDENTIFIER_FIXUP_3666;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1140 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1144 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1148 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1160 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2918 = _RESERVED_IDENTIFIER_FIXUP_1140;
    _RESERVED_IDENTIFIER_FIXUP_2918.x = _RESERVED_IDENTIFIER_FIXUP_1160;
    float _RESERVED_IDENTIFIER_FIXUP_1166 = clamp((_RESERVED_IDENTIFIER_FIXUP_1160 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2918.x = _RESERVED_IDENTIFIER_FIXUP_1166;
    float _RESERVED_IDENTIFIER_FIXUP_1172 = ((-_RESERVED_IDENTIFIER_FIXUP_1166) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2918.x = _RESERVED_IDENTIFIER_FIXUP_1172;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3670;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3667;
    if (_RESERVED_IDENTIFIER_FIXUP_1172 != (-_RESERVED_IDENTIFIER_FIXUP_1172))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1184 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1184.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1184.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1190 = hdLod5(param_3, param_4);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1194 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3130 = _RESERVED_IDENTIFIER_FIXUP_1190;
        _RESERVED_IDENTIFIER_FIXUP_3130.y = _RESERVED_IDENTIFIER_FIXUP_1194.x;
        _RESERVED_IDENTIFIER_FIXUP_3130.z = _RESERVED_IDENTIFIER_FIXUP_1194.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1204 = _RESERVED_IDENTIFIER_FIXUP_3130.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3134;
        _RESERVED_IDENTIFIER_FIXUP_3134.x = _RESERVED_IDENTIFIER_FIXUP_1204.x;
        _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1204.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1211 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1215 = _RESERVED_IDENTIFIER_FIXUP_1211.y;
        _RESERVED_IDENTIFIER_FIXUP_3134.w = _RESERVED_IDENTIFIER_FIXUP_1215;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3134.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1215;
        float _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_1190.x + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1226;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1233 = _RESERVED_IDENTIFIER_FIXUP_3130.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3147;
        _RESERVED_IDENTIFIER_FIXUP_3147.x = _RESERVED_IDENTIFIER_FIXUP_1233.x;
        _RESERVED_IDENTIFIER_FIXUP_3147.y = _RESERVED_IDENTIFIER_FIXUP_1233.y;
        _RESERVED_IDENTIFIER_FIXUP_3147.w = _RESERVED_IDENTIFIER_FIXUP_1215;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3147.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1215;
        float _RESERVED_IDENTIFIER_FIXUP_1255 = _RESERVED_IDENTIFIER_FIXUP_1226 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1255;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_3130.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3160;
        _RESERVED_IDENTIFIER_FIXUP_3160.x = _RESERVED_IDENTIFIER_FIXUP_1262.x;
        _RESERVED_IDENTIFIER_FIXUP_3160.y = _RESERVED_IDENTIFIER_FIXUP_1262.y;
        _RESERVED_IDENTIFIER_FIXUP_3160.w = _RESERVED_IDENTIFIER_FIXUP_1215;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3160.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1215;
        float _RESERVED_IDENTIFIER_FIXUP_1284 = _RESERVED_IDENTIFIER_FIXUP_1255 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1284;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_3130.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3173;
        _RESERVED_IDENTIFIER_FIXUP_3173.x = _RESERVED_IDENTIFIER_FIXUP_1291.x;
        _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1291.y;
        _RESERVED_IDENTIFIER_FIXUP_3173.w = _RESERVED_IDENTIFIER_FIXUP_1215;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3173.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1215;
        float _RESERVED_IDENTIFIER_FIXUP_1313 = _RESERVED_IDENTIFIER_FIXUP_1284 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1313;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1320 = _RESERVED_IDENTIFIER_FIXUP_3130.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3186;
        _RESERVED_IDENTIFIER_FIXUP_3186.x = _RESERVED_IDENTIFIER_FIXUP_1320.x;
        _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_1320.y;
        _RESERVED_IDENTIFIER_FIXUP_3186.w = _RESERVED_IDENTIFIER_FIXUP_1215;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3186.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1215;
        float _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_1313 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1342;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1349 = _RESERVED_IDENTIFIER_FIXUP_3130.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3199;
        _RESERVED_IDENTIFIER_FIXUP_3199.x = _RESERVED_IDENTIFIER_FIXUP_1349.x;
        _RESERVED_IDENTIFIER_FIXUP_3199.y = _RESERVED_IDENTIFIER_FIXUP_1349.y;
        _RESERVED_IDENTIFIER_FIXUP_3199.w = _RESERVED_IDENTIFIER_FIXUP_1215;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3199.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1215;
        float _RESERVED_IDENTIFIER_FIXUP_1371 = _RESERVED_IDENTIFIER_FIXUP_1342 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1371;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1378 = _RESERVED_IDENTIFIER_FIXUP_3130.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3212;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1378.x;
        _RESERVED_IDENTIFIER_FIXUP_3212.y = _RESERVED_IDENTIFIER_FIXUP_1378.y;
        _RESERVED_IDENTIFIER_FIXUP_3212.w = _RESERVED_IDENTIFIER_FIXUP_1215;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3212.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1215;
        float _RESERVED_IDENTIFIER_FIXUP_1400 = _RESERVED_IDENTIFIER_FIXUP_1371 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1400;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_3130.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3225;
        _RESERVED_IDENTIFIER_FIXUP_3225.x = _RESERVED_IDENTIFIER_FIXUP_1407.x;
        _RESERVED_IDENTIFIER_FIXUP_3225.y = _RESERVED_IDENTIFIER_FIXUP_1407.y;
        _RESERVED_IDENTIFIER_FIXUP_3225.w = _RESERVED_IDENTIFIER_FIXUP_1215;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3225.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1215;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1424 = hdLod5(param_19, param_20);
        float _RESERVED_IDENTIFIER_FIXUP_1429 = _RESERVED_IDENTIFIER_FIXUP_1400 + _RESERVED_IDENTIFIER_FIXUP_1424.x;
        _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1429;
        _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1429 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3670 = _RESERVED_IDENTIFIER_FIXUP_1424;
        _RESERVED_IDENTIFIER_FIXUP_3667 = _RESERVED_IDENTIFIER_FIXUP_3130;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1442 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2918.y = _RESERVED_IDENTIFIER_FIXUP_1442;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3671;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3668;
        if (_RESERVED_IDENTIFIER_FIXUP_1442 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1451 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1461 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1463 = _RESERVED_IDENTIFIER_FIXUP_1461.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3070 = _RESERVED_IDENTIFIER_FIXUP_2918;
            _RESERVED_IDENTIFIER_FIXUP_3070.y = _RESERVED_IDENTIFIER_FIXUP_1463;
            _RESERVED_IDENTIFIER_FIXUP_3070.z = _RESERVED_IDENTIFIER_FIXUP_1461.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1471 = _RESERVED_IDENTIFIER_FIXUP_3070.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3074;
            _RESERVED_IDENTIFIER_FIXUP_3074.x = _RESERVED_IDENTIFIER_FIXUP_1471.x;
            _RESERVED_IDENTIFIER_FIXUP_3074.y = _RESERVED_IDENTIFIER_FIXUP_1471.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1478 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_1478.y;
            _RESERVED_IDENTIFIER_FIXUP_3074.w = _RESERVED_IDENTIFIER_FIXUP_1482;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1451.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1451.w;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3074.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1482;
            float _RESERVED_IDENTIFIER_FIXUP_1493 = hdLod6(param_21, param_22).x + hdLod6(param_23, param_24).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3690 = vec4(_RESERVED_IDENTIFIER_FIXUP_1172, _RESERVED_IDENTIFIER_FIXUP_1463, _RESERVED_IDENTIFIER_FIXUP_1461.y, _RESERVED_IDENTIFIER_FIXUP_1493);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_3690.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3087;
            _RESERVED_IDENTIFIER_FIXUP_3087.x = _RESERVED_IDENTIFIER_FIXUP_1500.x;
            _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1500.y;
            _RESERVED_IDENTIFIER_FIXUP_3087.w = _RESERVED_IDENTIFIER_FIXUP_1482;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3087.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1482;
            float _RESERVED_IDENTIFIER_FIXUP_1522 = _RESERVED_IDENTIFIER_FIXUP_1493 + hdLod6(param_25, param_26).x;
            _RESERVED_IDENTIFIER_FIXUP_3690.w = _RESERVED_IDENTIFIER_FIXUP_1522;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1529 = _RESERVED_IDENTIFIER_FIXUP_3690.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3100;
            _RESERVED_IDENTIFIER_FIXUP_3100.x = _RESERVED_IDENTIFIER_FIXUP_1529.x;
            _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1529.y;
            _RESERVED_IDENTIFIER_FIXUP_3100.w = _RESERVED_IDENTIFIER_FIXUP_1482;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3100.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1482;
            float _RESERVED_IDENTIFIER_FIXUP_1551 = _RESERVED_IDENTIFIER_FIXUP_1522 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_3690.w = _RESERVED_IDENTIFIER_FIXUP_1551;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1558 = _RESERVED_IDENTIFIER_FIXUP_3690.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3113;
            _RESERVED_IDENTIFIER_FIXUP_3113.x = _RESERVED_IDENTIFIER_FIXUP_1558.x;
            _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1558.y;
            _RESERVED_IDENTIFIER_FIXUP_3113.w = _RESERVED_IDENTIFIER_FIXUP_1482;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3113.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1482;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1575 = hdLod6(param_29, param_30);
            float _RESERVED_IDENTIFIER_FIXUP_1580 = _RESERVED_IDENTIFIER_FIXUP_1551 + _RESERVED_IDENTIFIER_FIXUP_1575.x;
            _RESERVED_IDENTIFIER_FIXUP_3690.y = _RESERVED_IDENTIFIER_FIXUP_1580;
            _RESERVED_IDENTIFIER_FIXUP_3690.x = _RESERVED_IDENTIFIER_FIXUP_1580 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3671 = _RESERVED_IDENTIFIER_FIXUP_1575;
            _RESERVED_IDENTIFIER_FIXUP_3668 = _RESERVED_IDENTIFIER_FIXUP_3690;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1593 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2935 = _RESERVED_IDENTIFIER_FIXUP_2918;
            _RESERVED_IDENTIFIER_FIXUP_2935.y = _RESERVED_IDENTIFIER_FIXUP_1593;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3672;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3669;
            if (_RESERVED_IDENTIFIER_FIXUP_1593 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1602 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1612 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1614 = _RESERVED_IDENTIFIER_FIXUP_1612.x;
                _RESERVED_IDENTIFIER_FIXUP_2935.y = _RESERVED_IDENTIFIER_FIXUP_1614;
                _RESERVED_IDENTIFIER_FIXUP_2935.z = _RESERVED_IDENTIFIER_FIXUP_1612.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1622 = _RESERVED_IDENTIFIER_FIXUP_2935.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3014;
                _RESERVED_IDENTIFIER_FIXUP_3014.x = _RESERVED_IDENTIFIER_FIXUP_1622.x;
                _RESERVED_IDENTIFIER_FIXUP_3014.y = _RESERVED_IDENTIFIER_FIXUP_1622.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1629 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1633 = _RESERVED_IDENTIFIER_FIXUP_1629.y;
                _RESERVED_IDENTIFIER_FIXUP_3014.w = _RESERVED_IDENTIFIER_FIXUP_1633;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1602.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1602.w;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3014.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1633;
                float _RESERVED_IDENTIFIER_FIXUP_1644 = hdLod7(param_31, param_32).x + hdLod7(param_33, param_34).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3689 = vec4(_RESERVED_IDENTIFIER_FIXUP_1172, _RESERVED_IDENTIFIER_FIXUP_1614, _RESERVED_IDENTIFIER_FIXUP_1612.y, _RESERVED_IDENTIFIER_FIXUP_1644);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1651 = _RESERVED_IDENTIFIER_FIXUP_3689.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3027;
                _RESERVED_IDENTIFIER_FIXUP_3027.x = _RESERVED_IDENTIFIER_FIXUP_1651.x;
                _RESERVED_IDENTIFIER_FIXUP_3027.y = _RESERVED_IDENTIFIER_FIXUP_1651.y;
                _RESERVED_IDENTIFIER_FIXUP_3027.w = _RESERVED_IDENTIFIER_FIXUP_1633;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3027.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1633;
                float _RESERVED_IDENTIFIER_FIXUP_1673 = _RESERVED_IDENTIFIER_FIXUP_1644 + hdLod7(param_35, param_36).x;
                _RESERVED_IDENTIFIER_FIXUP_3689.w = _RESERVED_IDENTIFIER_FIXUP_1673;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1680 = _RESERVED_IDENTIFIER_FIXUP_3689.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3040;
                _RESERVED_IDENTIFIER_FIXUP_3040.x = _RESERVED_IDENTIFIER_FIXUP_1680.x;
                _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1680.y;
                _RESERVED_IDENTIFIER_FIXUP_3040.w = _RESERVED_IDENTIFIER_FIXUP_1633;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3040.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1633;
                float _RESERVED_IDENTIFIER_FIXUP_1702 = _RESERVED_IDENTIFIER_FIXUP_1673 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_3689.w = _RESERVED_IDENTIFIER_FIXUP_1702;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1709 = _RESERVED_IDENTIFIER_FIXUP_3689.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3053;
                _RESERVED_IDENTIFIER_FIXUP_3053.x = _RESERVED_IDENTIFIER_FIXUP_1709.x;
                _RESERVED_IDENTIFIER_FIXUP_3053.y = _RESERVED_IDENTIFIER_FIXUP_1709.y;
                _RESERVED_IDENTIFIER_FIXUP_3053.w = _RESERVED_IDENTIFIER_FIXUP_1633;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3053.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1633;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1726 = hdLod7(param_39, param_40);
                float _RESERVED_IDENTIFIER_FIXUP_1731 = _RESERVED_IDENTIFIER_FIXUP_1702 + _RESERVED_IDENTIFIER_FIXUP_1726.x;
                _RESERVED_IDENTIFIER_FIXUP_3689.y = _RESERVED_IDENTIFIER_FIXUP_1731;
                _RESERVED_IDENTIFIER_FIXUP_3689.x = _RESERVED_IDENTIFIER_FIXUP_1731 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3672 = _RESERVED_IDENTIFIER_FIXUP_1726;
                _RESERVED_IDENTIFIER_FIXUP_3669 = _RESERVED_IDENTIFIER_FIXUP_3689;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1747 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1751 = _RESERVED_IDENTIFIER_FIXUP_1747.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1762 = vec4(_RESERVED_IDENTIFIER_FIXUP_1747.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1751).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3686 = vec4(_RESERVED_IDENTIFIER_FIXUP_1762 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1751);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1799 = _RESERVED_IDENTIFIER_FIXUP_1762 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2968 = _RESERVED_IDENTIFIER_FIXUP_3686;
                _RESERVED_IDENTIFIER_FIXUP_2968.x = _RESERVED_IDENTIFIER_FIXUP_1799.x;
                _RESERVED_IDENTIFIER_FIXUP_2968.y = _RESERVED_IDENTIFIER_FIXUP_1799.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1821 = _RESERVED_IDENTIFIER_FIXUP_1762 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2977 = _RESERVED_IDENTIFIER_FIXUP_2968;
                _RESERVED_IDENTIFIER_FIXUP_2977.x = _RESERVED_IDENTIFIER_FIXUP_1821.x;
                _RESERVED_IDENTIFIER_FIXUP_2977.y = _RESERVED_IDENTIFIER_FIXUP_1821.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1843 = _RESERVED_IDENTIFIER_FIXUP_1762 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2986 = _RESERVED_IDENTIFIER_FIXUP_2977;
                _RESERVED_IDENTIFIER_FIXUP_2986.x = _RESERVED_IDENTIFIER_FIXUP_1843.x;
                _RESERVED_IDENTIFIER_FIXUP_2986.y = _RESERVED_IDENTIFIER_FIXUP_1843.y;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2986.xy;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1751;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1853 = hdLod8(param_41, param_42);
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_1762;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1751;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3686.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1751;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_2968.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1751;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_2977.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_1751;
                float _RESERVED_IDENTIFIER_FIXUP_1858 = (((hdLod8(param_43, param_44).x + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x) + _RESERVED_IDENTIFIER_FIXUP_1853.x;
                float _RESERVED_IDENTIFIER_FIXUP_1866 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_2997 = _RESERVED_IDENTIFIER_FIXUP_1853;
                _RESERVED_IDENTIFIER_FIXUP_2997.x = _RESERVED_IDENTIFIER_FIXUP_1866;
                float _RESERVED_IDENTIFIER_FIXUP_1872 = clamp((_RESERVED_IDENTIFIER_FIXUP_1866 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1877 = (_RESERVED_IDENTIFIER_FIXUP_1858 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3672 = _RESERVED_IDENTIFIER_FIXUP_2997;
                _RESERVED_IDENTIFIER_FIXUP_3669 = vec4((_RESERVED_IDENTIFIER_FIXUP_1872 * _RESERVED_IDENTIFIER_FIXUP_1877) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1872, _RESERVED_IDENTIFIER_FIXUP_1877, _RESERVED_IDENTIFIER_FIXUP_1858);
            }
            _RESERVED_IDENTIFIER_FIXUP_3671 = _RESERVED_IDENTIFIER_FIXUP_3672;
            _RESERVED_IDENTIFIER_FIXUP_3668 = _RESERVED_IDENTIFIER_FIXUP_3669;
        }
        _RESERVED_IDENTIFIER_FIXUP_3670 = _RESERVED_IDENTIFIER_FIXUP_3671;
        _RESERVED_IDENTIFIER_FIXUP_3667 = _RESERVED_IDENTIFIER_FIXUP_3668;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3244 = _RESERVED_IDENTIFIER_FIXUP_3667;
    _RESERVED_IDENTIFIER_FIXUP_3244.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1905 = mix(_RESERVED_IDENTIFIER_FIXUP_1140, _RESERVED_IDENTIFIER_FIXUP_1144, _RESERVED_IDENTIFIER_FIXUP_1148.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_3244.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3246 = _RESERVED_IDENTIFIER_FIXUP_3244;
    _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1905.x;
    _RESERVED_IDENTIFIER_FIXUP_3246.z = _RESERVED_IDENTIFIER_FIXUP_1905.y;
    _RESERVED_IDENTIFIER_FIXUP_3246.w = _RESERVED_IDENTIFIER_FIXUP_1905.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1916 = _RESERVED_IDENTIFIER_FIXUP_3246.yzw * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3665).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3252 = _RESERVED_IDENTIFIER_FIXUP_3246;
    _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_1916.x;
    _RESERVED_IDENTIFIER_FIXUP_3252.z = _RESERVED_IDENTIFIER_FIXUP_1916.y;
    _RESERVED_IDENTIFIER_FIXUP_3252.w = _RESERVED_IDENTIFIER_FIXUP_1916.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1927 = _RESERVED_IDENTIFIER_FIXUP_3252.yzw + _RESERVED_IDENTIFIER_FIXUP_3252.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1929 = _RESERVED_IDENTIFIER_FIXUP_1927.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3258 = _RESERVED_IDENTIFIER_FIXUP_3252;
    _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_1929;
    _RESERVED_IDENTIFIER_FIXUP_3258.z = _RESERVED_IDENTIFIER_FIXUP_1927.y;
    _RESERVED_IDENTIFIER_FIXUP_3258.w = _RESERVED_IDENTIFIER_FIXUP_1927.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3264 = _RESERVED_IDENTIFIER_FIXUP_3670;
    _RESERVED_IDENTIFIER_FIXUP_3264.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3264.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3264.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1952 = (_RESERVED_IDENTIFIER_FIXUP_3264.xyz * _RESERVED_IDENTIFIER_FIXUP_3258.xxx) + _RESERVED_IDENTIFIER_FIXUP_3258.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3691 = vec4(_RESERVED_IDENTIFIER_FIXUP_1952.x, _RESERVED_IDENTIFIER_FIXUP_1929, _RESERVED_IDENTIFIER_FIXUP_1927.yz);
    _RESERVED_IDENTIFIER_FIXUP_3691.y = _RESERVED_IDENTIFIER_FIXUP_1952.y;
    _RESERVED_IDENTIFIER_FIXUP_3691.z = _RESERVED_IDENTIFIER_FIXUP_1952.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1965 = _RESERVED_IDENTIFIER_FIXUP_3691.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3276 = _RESERVED_IDENTIFIER_FIXUP_3691;
    _RESERVED_IDENTIFIER_FIXUP_3276.x = _RESERVED_IDENTIFIER_FIXUP_1965.x;
    _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1965.y;
    _RESERVED_IDENTIFIER_FIXUP_3276.z = _RESERVED_IDENTIFIER_FIXUP_1965.z;
    vec2 param_51 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2018 = hdTex0(param_51);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2022 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2026 = hdTex2(param_53);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2031 = mix(_RESERVED_IDENTIFIER_FIXUP_2018, _RESERVED_IDENTIFIER_FIXUP_2022, _RESERVED_IDENTIFIER_FIXUP_2026.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3292 = _RESERVED_IDENTIFIER_FIXUP_2018;
    _RESERVED_IDENTIFIER_FIXUP_3292.x = _RESERVED_IDENTIFIER_FIXUP_1160;
    float _RESERVED_IDENTIFIER_FIXUP_2044 = clamp((_RESERVED_IDENTIFIER_FIXUP_1160 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3292.x = _RESERVED_IDENTIFIER_FIXUP_2044;
    float _RESERVED_IDENTIFIER_FIXUP_2050 = ((-_RESERVED_IDENTIFIER_FIXUP_2044) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3292.x = _RESERVED_IDENTIFIER_FIXUP_2050;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3679;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3676;
    if (_RESERVED_IDENTIFIER_FIXUP_2050 != (-_RESERVED_IDENTIFIER_FIXUP_2050))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2062 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2062.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2062.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2068 = hdLod5(param_54, param_55);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2072 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3504 = _RESERVED_IDENTIFIER_FIXUP_2068;
        _RESERVED_IDENTIFIER_FIXUP_3504.y = _RESERVED_IDENTIFIER_FIXUP_2072.x;
        _RESERVED_IDENTIFIER_FIXUP_3504.z = _RESERVED_IDENTIFIER_FIXUP_2072.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2082 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3508;
        _RESERVED_IDENTIFIER_FIXUP_3508.x = _RESERVED_IDENTIFIER_FIXUP_2082.x;
        _RESERVED_IDENTIFIER_FIXUP_3508.y = _RESERVED_IDENTIFIER_FIXUP_2082.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2089 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2093 = _RESERVED_IDENTIFIER_FIXUP_2089.y;
        _RESERVED_IDENTIFIER_FIXUP_3508.w = _RESERVED_IDENTIFIER_FIXUP_2093;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3508.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2093;
        float _RESERVED_IDENTIFIER_FIXUP_2104 = _RESERVED_IDENTIFIER_FIXUP_2068.x + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2104;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2111 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3521;
        _RESERVED_IDENTIFIER_FIXUP_3521.x = _RESERVED_IDENTIFIER_FIXUP_2111.x;
        _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2111.y;
        _RESERVED_IDENTIFIER_FIXUP_3521.w = _RESERVED_IDENTIFIER_FIXUP_2093;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3521.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2093;
        float _RESERVED_IDENTIFIER_FIXUP_2133 = _RESERVED_IDENTIFIER_FIXUP_2104 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2133;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2140 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3534;
        _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_2140.x;
        _RESERVED_IDENTIFIER_FIXUP_3534.y = _RESERVED_IDENTIFIER_FIXUP_2140.y;
        _RESERVED_IDENTIFIER_FIXUP_3534.w = _RESERVED_IDENTIFIER_FIXUP_2093;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3534.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2093;
        float _RESERVED_IDENTIFIER_FIXUP_2162 = _RESERVED_IDENTIFIER_FIXUP_2133 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2162;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2169 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3547;
        _RESERVED_IDENTIFIER_FIXUP_3547.x = _RESERVED_IDENTIFIER_FIXUP_2169.x;
        _RESERVED_IDENTIFIER_FIXUP_3547.y = _RESERVED_IDENTIFIER_FIXUP_2169.y;
        _RESERVED_IDENTIFIER_FIXUP_3547.w = _RESERVED_IDENTIFIER_FIXUP_2093;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3547.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2093;
        float _RESERVED_IDENTIFIER_FIXUP_2191 = _RESERVED_IDENTIFIER_FIXUP_2162 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2191;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2198 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3560;
        _RESERVED_IDENTIFIER_FIXUP_3560.x = _RESERVED_IDENTIFIER_FIXUP_2198.x;
        _RESERVED_IDENTIFIER_FIXUP_3560.y = _RESERVED_IDENTIFIER_FIXUP_2198.y;
        _RESERVED_IDENTIFIER_FIXUP_3560.w = _RESERVED_IDENTIFIER_FIXUP_2093;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3560.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2093;
        float _RESERVED_IDENTIFIER_FIXUP_2220 = _RESERVED_IDENTIFIER_FIXUP_2191 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2220;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2227 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3573;
        _RESERVED_IDENTIFIER_FIXUP_3573.x = _RESERVED_IDENTIFIER_FIXUP_2227.x;
        _RESERVED_IDENTIFIER_FIXUP_3573.y = _RESERVED_IDENTIFIER_FIXUP_2227.y;
        _RESERVED_IDENTIFIER_FIXUP_3573.w = _RESERVED_IDENTIFIER_FIXUP_2093;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3573.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2093;
        float _RESERVED_IDENTIFIER_FIXUP_2249 = _RESERVED_IDENTIFIER_FIXUP_2220 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2249;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2256 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3586;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_2256.x;
        _RESERVED_IDENTIFIER_FIXUP_3586.y = _RESERVED_IDENTIFIER_FIXUP_2256.y;
        _RESERVED_IDENTIFIER_FIXUP_3586.w = _RESERVED_IDENTIFIER_FIXUP_2093;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3586.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2093;
        float _RESERVED_IDENTIFIER_FIXUP_2278 = _RESERVED_IDENTIFIER_FIXUP_2249 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2278;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2285 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3599;
        _RESERVED_IDENTIFIER_FIXUP_3599.x = _RESERVED_IDENTIFIER_FIXUP_2285.x;
        _RESERVED_IDENTIFIER_FIXUP_3599.y = _RESERVED_IDENTIFIER_FIXUP_2285.y;
        _RESERVED_IDENTIFIER_FIXUP_3599.w = _RESERVED_IDENTIFIER_FIXUP_2093;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3599.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2093;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2302 = hdLod5(param_70, param_71);
        float _RESERVED_IDENTIFIER_FIXUP_2307 = _RESERVED_IDENTIFIER_FIXUP_2278 + _RESERVED_IDENTIFIER_FIXUP_2302.x;
        _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2307;
        _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2307 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3679 = _RESERVED_IDENTIFIER_FIXUP_2302;
        _RESERVED_IDENTIFIER_FIXUP_3676 = _RESERVED_IDENTIFIER_FIXUP_3504;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2320 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3292.y = _RESERVED_IDENTIFIER_FIXUP_2320;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3680;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3677;
        if (_RESERVED_IDENTIFIER_FIXUP_2320 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2329 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2339 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2341 = _RESERVED_IDENTIFIER_FIXUP_2339.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3444 = _RESERVED_IDENTIFIER_FIXUP_3292;
            _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_2341;
            _RESERVED_IDENTIFIER_FIXUP_3444.z = _RESERVED_IDENTIFIER_FIXUP_2339.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2349 = _RESERVED_IDENTIFIER_FIXUP_3444.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
            _RESERVED_IDENTIFIER_FIXUP_3448.x = _RESERVED_IDENTIFIER_FIXUP_2349.x;
            _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2349.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2356 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2360 = _RESERVED_IDENTIFIER_FIXUP_2356.y;
            _RESERVED_IDENTIFIER_FIXUP_3448.w = _RESERVED_IDENTIFIER_FIXUP_2360;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2329.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2329.w;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3448.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2360;
            float _RESERVED_IDENTIFIER_FIXUP_2371 = hdLod6(param_72, param_73).x + hdLod6(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3698 = vec4(_RESERVED_IDENTIFIER_FIXUP_2050, _RESERVED_IDENTIFIER_FIXUP_2341, _RESERVED_IDENTIFIER_FIXUP_2339.y, _RESERVED_IDENTIFIER_FIXUP_2371);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2378 = _RESERVED_IDENTIFIER_FIXUP_3698.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3461;
            _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_2378.x;
            _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_2378.y;
            _RESERVED_IDENTIFIER_FIXUP_3461.w = _RESERVED_IDENTIFIER_FIXUP_2360;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3461.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2360;
            float _RESERVED_IDENTIFIER_FIXUP_2400 = _RESERVED_IDENTIFIER_FIXUP_2371 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3698.w = _RESERVED_IDENTIFIER_FIXUP_2400;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2407 = _RESERVED_IDENTIFIER_FIXUP_3698.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3474;
            _RESERVED_IDENTIFIER_FIXUP_3474.x = _RESERVED_IDENTIFIER_FIXUP_2407.x;
            _RESERVED_IDENTIFIER_FIXUP_3474.y = _RESERVED_IDENTIFIER_FIXUP_2407.y;
            _RESERVED_IDENTIFIER_FIXUP_3474.w = _RESERVED_IDENTIFIER_FIXUP_2360;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3474.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2360;
            float _RESERVED_IDENTIFIER_FIXUP_2429 = _RESERVED_IDENTIFIER_FIXUP_2400 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3698.w = _RESERVED_IDENTIFIER_FIXUP_2429;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2436 = _RESERVED_IDENTIFIER_FIXUP_3698.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3487;
            _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_2436.x;
            _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2436.y;
            _RESERVED_IDENTIFIER_FIXUP_3487.w = _RESERVED_IDENTIFIER_FIXUP_2360;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3487.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2360;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2453 = hdLod6(param_80, param_81);
            float _RESERVED_IDENTIFIER_FIXUP_2458 = _RESERVED_IDENTIFIER_FIXUP_2429 + _RESERVED_IDENTIFIER_FIXUP_2453.x;
            _RESERVED_IDENTIFIER_FIXUP_3698.y = _RESERVED_IDENTIFIER_FIXUP_2458;
            _RESERVED_IDENTIFIER_FIXUP_3698.x = _RESERVED_IDENTIFIER_FIXUP_2458 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3680 = _RESERVED_IDENTIFIER_FIXUP_2453;
            _RESERVED_IDENTIFIER_FIXUP_3677 = _RESERVED_IDENTIFIER_FIXUP_3698;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2471 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3309 = _RESERVED_IDENTIFIER_FIXUP_3292;
            _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_2471;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3678;
            if (_RESERVED_IDENTIFIER_FIXUP_2471 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2480 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2490 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2492 = _RESERVED_IDENTIFIER_FIXUP_2490.x;
                _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_2492;
                _RESERVED_IDENTIFIER_FIXUP_3309.z = _RESERVED_IDENTIFIER_FIXUP_2490.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2500 = _RESERVED_IDENTIFIER_FIXUP_3309.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3388;
                _RESERVED_IDENTIFIER_FIXUP_3388.x = _RESERVED_IDENTIFIER_FIXUP_2500.x;
                _RESERVED_IDENTIFIER_FIXUP_3388.y = _RESERVED_IDENTIFIER_FIXUP_2500.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2507 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2511 = _RESERVED_IDENTIFIER_FIXUP_2507.y;
                _RESERVED_IDENTIFIER_FIXUP_3388.w = _RESERVED_IDENTIFIER_FIXUP_2511;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2480.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2480.w;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3388.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2511;
                float _RESERVED_IDENTIFIER_FIXUP_2522 = hdLod7(param_82, param_83).x + hdLod7(param_84, param_85).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3697 = vec4(_RESERVED_IDENTIFIER_FIXUP_2050, _RESERVED_IDENTIFIER_FIXUP_2492, _RESERVED_IDENTIFIER_FIXUP_2490.y, _RESERVED_IDENTIFIER_FIXUP_2522);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2529 = _RESERVED_IDENTIFIER_FIXUP_3697.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3401;
                _RESERVED_IDENTIFIER_FIXUP_3401.x = _RESERVED_IDENTIFIER_FIXUP_2529.x;
                _RESERVED_IDENTIFIER_FIXUP_3401.y = _RESERVED_IDENTIFIER_FIXUP_2529.y;
                _RESERVED_IDENTIFIER_FIXUP_3401.w = _RESERVED_IDENTIFIER_FIXUP_2511;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3401.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2511;
                float _RESERVED_IDENTIFIER_FIXUP_2551 = _RESERVED_IDENTIFIER_FIXUP_2522 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3697.w = _RESERVED_IDENTIFIER_FIXUP_2551;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2558 = _RESERVED_IDENTIFIER_FIXUP_3697.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3414;
                _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_2558.x;
                _RESERVED_IDENTIFIER_FIXUP_3414.y = _RESERVED_IDENTIFIER_FIXUP_2558.y;
                _RESERVED_IDENTIFIER_FIXUP_3414.w = _RESERVED_IDENTIFIER_FIXUP_2511;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3414.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2511;
                float _RESERVED_IDENTIFIER_FIXUP_2580 = _RESERVED_IDENTIFIER_FIXUP_2551 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3697.w = _RESERVED_IDENTIFIER_FIXUP_2580;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2587 = _RESERVED_IDENTIFIER_FIXUP_3697.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3427;
                _RESERVED_IDENTIFIER_FIXUP_3427.x = _RESERVED_IDENTIFIER_FIXUP_2587.x;
                _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_2587.y;
                _RESERVED_IDENTIFIER_FIXUP_3427.w = _RESERVED_IDENTIFIER_FIXUP_2511;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3427.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2511;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2604 = hdLod7(param_90, param_91);
                float _RESERVED_IDENTIFIER_FIXUP_2609 = _RESERVED_IDENTIFIER_FIXUP_2580 + _RESERVED_IDENTIFIER_FIXUP_2604.x;
                _RESERVED_IDENTIFIER_FIXUP_3697.y = _RESERVED_IDENTIFIER_FIXUP_2609;
                _RESERVED_IDENTIFIER_FIXUP_3697.x = _RESERVED_IDENTIFIER_FIXUP_2609 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3681 = _RESERVED_IDENTIFIER_FIXUP_2604;
                _RESERVED_IDENTIFIER_FIXUP_3678 = _RESERVED_IDENTIFIER_FIXUP_3697;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2625 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2629 = _RESERVED_IDENTIFIER_FIXUP_2625.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2640 = vec4(_RESERVED_IDENTIFIER_FIXUP_2625.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2629).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3694 = vec4(_RESERVED_IDENTIFIER_FIXUP_2640 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2629);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2677 = _RESERVED_IDENTIFIER_FIXUP_2640 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3342 = _RESERVED_IDENTIFIER_FIXUP_3694;
                _RESERVED_IDENTIFIER_FIXUP_3342.x = _RESERVED_IDENTIFIER_FIXUP_2677.x;
                _RESERVED_IDENTIFIER_FIXUP_3342.y = _RESERVED_IDENTIFIER_FIXUP_2677.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2699 = _RESERVED_IDENTIFIER_FIXUP_2640 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3351 = _RESERVED_IDENTIFIER_FIXUP_3342;
                _RESERVED_IDENTIFIER_FIXUP_3351.x = _RESERVED_IDENTIFIER_FIXUP_2699.x;
                _RESERVED_IDENTIFIER_FIXUP_3351.y = _RESERVED_IDENTIFIER_FIXUP_2699.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2721 = _RESERVED_IDENTIFIER_FIXUP_2640 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3360 = _RESERVED_IDENTIFIER_FIXUP_3351;
                _RESERVED_IDENTIFIER_FIXUP_3360.x = _RESERVED_IDENTIFIER_FIXUP_2721.x;
                _RESERVED_IDENTIFIER_FIXUP_3360.y = _RESERVED_IDENTIFIER_FIXUP_2721.y;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3360.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2629;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2731 = hdLod8(param_92, param_93);
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_2640;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2629;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3694.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2629;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3342.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2629;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3351.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2629;
                float _RESERVED_IDENTIFIER_FIXUP_2736 = (((hdLod8(param_94, param_95).x + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + _RESERVED_IDENTIFIER_FIXUP_2731.x;
                float _RESERVED_IDENTIFIER_FIXUP_2744 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_2731;
                _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_2744;
                float _RESERVED_IDENTIFIER_FIXUP_2750 = clamp((_RESERVED_IDENTIFIER_FIXUP_2744 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2755 = (_RESERVED_IDENTIFIER_FIXUP_2736 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3681 = _RESERVED_IDENTIFIER_FIXUP_3371;
                _RESERVED_IDENTIFIER_FIXUP_3678 = vec4((_RESERVED_IDENTIFIER_FIXUP_2750 * _RESERVED_IDENTIFIER_FIXUP_2755) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2750, _RESERVED_IDENTIFIER_FIXUP_2755, _RESERVED_IDENTIFIER_FIXUP_2736);
            }
            _RESERVED_IDENTIFIER_FIXUP_3680 = _RESERVED_IDENTIFIER_FIXUP_3681;
            _RESERVED_IDENTIFIER_FIXUP_3677 = _RESERVED_IDENTIFIER_FIXUP_3678;
        }
        _RESERVED_IDENTIFIER_FIXUP_3679 = _RESERVED_IDENTIFIER_FIXUP_3680;
        _RESERVED_IDENTIFIER_FIXUP_3676 = _RESERVED_IDENTIFIER_FIXUP_3677;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2770 = (_RESERVED_IDENTIFIER_FIXUP_3676.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3616 = _RESERVED_IDENTIFIER_FIXUP_3676;
    _RESERVED_IDENTIFIER_FIXUP_3616.y = _RESERVED_IDENTIFIER_FIXUP_2770;
    _RESERVED_IDENTIFIER_FIXUP_3616.y = _RESERVED_IDENTIFIER_FIXUP_2770;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2783 = _RESERVED_IDENTIFIER_FIXUP_2031.xyz * _RESERVED_IDENTIFIER_FIXUP_3616.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3622 = _RESERVED_IDENTIFIER_FIXUP_3616;
    _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2783.x;
    _RESERVED_IDENTIFIER_FIXUP_3622.z = _RESERVED_IDENTIFIER_FIXUP_2783.y;
    _RESERVED_IDENTIFIER_FIXUP_3622.w = _RESERVED_IDENTIFIER_FIXUP_2783.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2794 = _RESERVED_IDENTIFIER_FIXUP_3622.yzw * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3628 = _RESERVED_IDENTIFIER_FIXUP_3622;
    _RESERVED_IDENTIFIER_FIXUP_3628.y = _RESERVED_IDENTIFIER_FIXUP_2794.x;
    _RESERVED_IDENTIFIER_FIXUP_3628.z = _RESERVED_IDENTIFIER_FIXUP_2794.y;
    _RESERVED_IDENTIFIER_FIXUP_3628.w = _RESERVED_IDENTIFIER_FIXUP_2794.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2805 = _RESERVED_IDENTIFIER_FIXUP_3628.yzw + _RESERVED_IDENTIFIER_FIXUP_3628.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2807 = _RESERVED_IDENTIFIER_FIXUP_2805.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3634 = _RESERVED_IDENTIFIER_FIXUP_3628;
    _RESERVED_IDENTIFIER_FIXUP_3634.y = _RESERVED_IDENTIFIER_FIXUP_2807;
    _RESERVED_IDENTIFIER_FIXUP_3634.z = _RESERVED_IDENTIFIER_FIXUP_2805.y;
    _RESERVED_IDENTIFIER_FIXUP_3634.w = _RESERVED_IDENTIFIER_FIXUP_2805.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2816 = _RESERVED_IDENTIFIER_FIXUP_2031.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3640 = _RESERVED_IDENTIFIER_FIXUP_3679;
    _RESERVED_IDENTIFIER_FIXUP_3640.x = _RESERVED_IDENTIFIER_FIXUP_2816.x;
    _RESERVED_IDENTIFIER_FIXUP_3640.y = _RESERVED_IDENTIFIER_FIXUP_2816.y;
    _RESERVED_IDENTIFIER_FIXUP_3640.z = _RESERVED_IDENTIFIER_FIXUP_2816.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2830 = (_RESERVED_IDENTIFIER_FIXUP_3640.xyz * _RESERVED_IDENTIFIER_FIXUP_3634.xxx) + _RESERVED_IDENTIFIER_FIXUP_3634.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3699 = vec4(_RESERVED_IDENTIFIER_FIXUP_2830.x, _RESERVED_IDENTIFIER_FIXUP_2807, _RESERVED_IDENTIFIER_FIXUP_2805.yz);
    _RESERVED_IDENTIFIER_FIXUP_3699.y = _RESERVED_IDENTIFIER_FIXUP_2830.y;
    _RESERVED_IDENTIFIER_FIXUP_3699.z = _RESERVED_IDENTIFIER_FIXUP_2830.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2843 = _RESERVED_IDENTIFIER_FIXUP_3699.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3652 = _RESERVED_IDENTIFIER_FIXUP_3699;
    _RESERVED_IDENTIFIER_FIXUP_3652.x = _RESERVED_IDENTIFIER_FIXUP_2843.x;
    _RESERVED_IDENTIFIER_FIXUP_3652.y = _RESERVED_IDENTIFIER_FIXUP_2843.y;
    _RESERVED_IDENTIFIER_FIXUP_3652.z = _RESERVED_IDENTIFIER_FIXUP_2843.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3652.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1001 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1010;
    if (_RESERVED_IDENTIFIER_FIXUP_1001)
    {
        _RESERVED_IDENTIFIER_FIXUP_1010 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1010 = _RESERVED_IDENTIFIER_FIXUP_1001;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1010)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1047 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3276.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1074 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2908;
    if (_RESERVED_IDENTIFIER_FIXUP_1047 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2908 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1047), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1074);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2908 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1074);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2908;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2770);
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
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r0.xy;
        float param_4 = r0.w;
        r0 = hdLod5(param_3, param_4);
        vec2 hdB125 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB125.x;
        r0.z = hdB125.y;
        vec2 hdB147 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB147.x;
        r1.y = hdB147.y;
        vec2 hdB155 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB155.x;
        r1.w = hdB155.y;
        vec2 param_5 = r1.xy;
        float param_6 = r1.w;
        r1 = hdLod5(param_5, param_6);
        r0.x += r1.x;
        vec2 hdB178 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r1.x = hdB178.x;
        r1.y = hdB178.y;
        vec2 hdB185 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB185.x;
        r1.w = hdB185.y;
        vec2 param_7 = r1.xy;
        float param_8 = r1.w;
        r1 = hdLod5(param_7, param_8);
        r0.x += r1.x;
        vec2 hdB208 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB208.x;
        r1.y = hdB208.y;
        vec2 hdB215 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB215.x;
        r1.w = hdB215.y;
        vec2 param_9 = r1.xy;
        float param_10 = r1.w;
        r1 = hdLod5(param_9, param_10);
        r0.x += r1.x;
        vec2 hdB238 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r1.x = hdB238.x;
        r1.y = hdB238.y;
        vec2 hdB245 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB245.x;
        r1.w = hdB245.y;
        vec2 param_11 = r1.xy;
        float param_12 = r1.w;
        r1 = hdLod5(param_11, param_12);
        r0.x += r1.x;
        vec2 hdB268 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB268.x;
        r1.y = hdB268.y;
        vec2 hdB275 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB275.x;
        r1.w = hdB275.y;
        vec2 param_13 = r1.xy;
        float param_14 = r1.w;
        r1 = hdLod5(param_13, param_14);
        r0.x += r1.x;
        vec2 hdB298 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r1.x = hdB298.x;
        r1.y = hdB298.y;
        vec2 hdB305 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB305.x;
        r1.w = hdB305.y;
        vec2 param_15 = r1.xy;
        float param_16 = r1.w;
        r1 = hdLod5(param_15, param_16);
        r0.x += r1.x;
        vec2 hdB328 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB328.x;
        r1.y = hdB328.y;
        vec2 hdB335 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB335.x;
        r1.w = hdB335.y;
        vec2 param_17 = r1.xy;
        float param_18 = r1.w;
        r1 = hdLod5(param_17, param_18);
        r0.x += r1.x;
        vec2 hdB358 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB358.x;
        r1.y = hdB358.y;
        vec2 hdB365 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB365.x;
        r1.w = hdB365.y;
        vec2 param_19 = r1.xy;
        float param_20 = r1.w;
        r1 = hdLod5(param_19, param_20);
        r0.x += r1.x;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r1.xy;
            float param_22 = r1.w;
            r1 = hdLod6(param_21, param_22);
            vec2 hdB415 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB415.x;
            r0.z = hdB415.y;
            vec2 hdB425 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB425.x;
            r2.y = hdB425.y;
            vec2 hdB432 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB432.x;
            r2.w = hdB432.y;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            r0.w = r1.x + r2.x;
            vec2 hdB454 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r1.x = hdB454.x;
            r1.y = hdB454.y;
            vec2 hdB461 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB461.x;
            r1.w = hdB461.y;
            vec2 param_25 = r1.xy;
            float param_26 = r1.w;
            r1 = hdLod6(param_25, param_26);
            r0.w += r1.x;
            vec2 hdB483 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r1.x = hdB483.x;
            r1.y = hdB483.y;
            vec2 hdB490 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB490.x;
            r1.w = hdB490.y;
            vec2 param_27 = r1.xy;
            float param_28 = r1.w;
            r1 = hdLod6(param_27, param_28);
            r0.w += r1.x;
            vec2 hdB512 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r1.x = hdB512.x;
            r1.y = hdB512.y;
            vec2 hdB519 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB519.x;
            r1.w = hdB519.y;
            vec2 param_29 = r1.xy;
            float param_30 = r1.w;
            r1 = hdLod6(param_29, param_30);
            r0.y = r0.w + r1.x;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r1.xy;
                float param_32 = r1.w;
                r1 = hdLod7(param_31, param_32);
                vec2 hdB569 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB569.x;
                r0.z = hdB569.y;
                vec2 hdB579 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB579.x;
                r2.y = hdB579.y;
                vec2 hdB586 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB586.x;
                r2.w = hdB586.y;
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                r0.w = r1.x + r2.x;
                vec2 hdB608 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r1.x = hdB608.x;
                r1.y = hdB608.y;
                vec2 hdB615 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB615.x;
                r1.w = hdB615.y;
                vec2 param_35 = r1.xy;
                float param_36 = r1.w;
                r1 = hdLod7(param_35, param_36);
                r0.w += r1.x;
                vec2 hdB637 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r1.x = hdB637.x;
                r1.y = hdB637.y;
                vec2 hdB644 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB644.x;
                r1.w = hdB644.y;
                vec2 param_37 = r1.xy;
                float param_38 = r1.w;
                r1 = hdLod7(param_37, param_38);
                r0.w += r1.x;
                vec2 hdB666 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r1.x = hdB666.x;
                r1.y = hdB666.y;
                vec2 hdB673 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB673.x;
                r1.w = hdB673.y;
                vec2 param_39 = r1.xy;
                float param_40 = r1.w;
                r1 = hdLod7(param_39, param_40);
                r0.y = r0.w + r1.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v4.w;
                r0.z = v5.w;
                vec2 hdB705 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r1.x = hdB705.x;
                r1.w = hdB705.y;
                r1.y = (v5.w * 0.5) + 0.5;
                r1.z = v6.w;
                vec2 param_41 = r1.xy;
                float param_42 = r1.w;
                r2 = hdLod8(param_41, param_42);
                vec2 hdB730 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB730.x;
                r4.y = hdB730.y;
                r4.z = r1.z;
                r4.w = r1.w;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r5 = hdLod8(param_43, param_44);
                r0.w = r2.x + r5.x;
                vec2 hdB758 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB758.x;
                r4.y = hdB758.y;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r2 = hdLod8(param_45, param_46);
                r0.w += r2.x;
                vec2 hdB780 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB780.x;
                r4.y = hdB780.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r2 = hdLod8(param_47, param_48);
                r0.w += r2.x;
                vec2 hdB802 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB802.x;
                r4.y = hdB802.y;
                vec2 param_49 = r4.xy;
                float param_50 = r4.w;
                r1 = hdLod8(param_49, param_50);
                r0.w += r1.x;
                r1.x = max(abs(r0.y), abs(r0.z));
                r0.y = clamp((r1.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.z = (r0.w * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.y * r0.z) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB858 = r0;
    vec3 hdB860 = r3.xyz * hdB858.yyy;
    r0.y = hdB860.x;
    r0.z = hdB860.y;
    r0.w = hdB860.z;
    vec4 hdB867 = r0;
    vec3 hdB871 = hdB867.yzw * v0.xyz;
    r0.y = hdB871.x;
    r0.z = hdB871.y;
    r0.w = hdB871.z;
    vec4 hdB878 = r0;
    vec4 hdB880 = r0;
    vec3 hdB882 = hdB878.yzw + hdB880.yzw;
    r0.y = hdB882.x;
    r0.z = hdB882.y;
    r0.w = hdB882.z;
    vec3 hdB893 = r3.www * v1.xyz;
    r1.x = hdB893.x;
    r1.y = hdB893.y;
    r1.z = hdB893.z;
    vec4 hdB902 = r0;
    vec4 hdB905 = r0;
    vec3 hdB907 = (r1.xyz * hdB902.xxx) + hdB905.yzw;
    r0.x = hdB907.x;
    r0.y = hdB907.y;
    r0.z = hdB907.z;
    vec4 hdB914 = r0;
    vec3 hdB921 = hdB914.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB921.x;
    r0.y = hdB921.y;
    r0.z = hdB921.z;
    vec3 hdB936 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB936.x;
    oC0.y = hdB936.y;
    oC0.z = hdB936.z;
    oC0.w = 1.0;
    bool hdB949 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB957;
    if (hdB949)
    {
        hdB957 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB957 = hdB949;
    }
    if (hdB957)
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
    bool _3391 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3401;
    if (_3391)
    {
        _3401 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3401 = _3391;
    }
    if (_3401)
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
        bool _3426 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3441;
        if (!_3426)
        {
            _3441 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3441 = _3426;
        }
        if (_3441)
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
