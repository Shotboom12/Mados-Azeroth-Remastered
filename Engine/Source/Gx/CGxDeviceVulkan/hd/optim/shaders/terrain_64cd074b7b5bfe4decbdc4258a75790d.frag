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
float _RESERVED_IDENTIFIER_FIXUP_3714;
vec4 _RESERVED_IDENTIFIER_FIXUP_3715;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1156 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1160 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1164 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1168 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1164.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2955 = _RESERVED_IDENTIFIER_FIXUP_1164;
    _RESERVED_IDENTIFIER_FIXUP_2955.y = _RESERVED_IDENTIFIER_FIXUP_1168;
    _RESERVED_IDENTIFIER_FIXUP_2955.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1168;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = _RESERVED_IDENTIFIER_FIXUP_1160 * _RESERVED_IDENTIFIER_FIXUP_2955.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184 = (_RESERVED_IDENTIFIER_FIXUP_1156 * _RESERVED_IDENTIFIER_FIXUP_2955.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1178;
    float _RESERVED_IDENTIFIER_FIXUP_1191 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2962 = _RESERVED_IDENTIFIER_FIXUP_1178;
    _RESERVED_IDENTIFIER_FIXUP_2962.x = _RESERVED_IDENTIFIER_FIXUP_1191;
    float _RESERVED_IDENTIFIER_FIXUP_1197 = clamp((_RESERVED_IDENTIFIER_FIXUP_1191 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2962.x = _RESERVED_IDENTIFIER_FIXUP_1197;
    float _RESERVED_IDENTIFIER_FIXUP_1203 = ((-_RESERVED_IDENTIFIER_FIXUP_1197) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2962.x = _RESERVED_IDENTIFIER_FIXUP_1203;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3716;
    if (_RESERVED_IDENTIFIER_FIXUP_1203 != (-_RESERVED_IDENTIFIER_FIXUP_1203))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1215.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1215.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1221 = hdLod5(param_3, param_4);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1225 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3174 = _RESERVED_IDENTIFIER_FIXUP_1221;
        _RESERVED_IDENTIFIER_FIXUP_3174.y = _RESERVED_IDENTIFIER_FIXUP_1225.x;
        _RESERVED_IDENTIFIER_FIXUP_3174.z = _RESERVED_IDENTIFIER_FIXUP_1225.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_3174.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3178;
        _RESERVED_IDENTIFIER_FIXUP_3178.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
        _RESERVED_IDENTIFIER_FIXUP_3178.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1242 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1246 = _RESERVED_IDENTIFIER_FIXUP_1242.y;
        _RESERVED_IDENTIFIER_FIXUP_3178.w = _RESERVED_IDENTIFIER_FIXUP_1246;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3178.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1246;
        float _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_1221.x + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1257;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_3174.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3191;
        _RESERVED_IDENTIFIER_FIXUP_3191.x = _RESERVED_IDENTIFIER_FIXUP_1264.x;
        _RESERVED_IDENTIFIER_FIXUP_3191.y = _RESERVED_IDENTIFIER_FIXUP_1264.y;
        _RESERVED_IDENTIFIER_FIXUP_3191.w = _RESERVED_IDENTIFIER_FIXUP_1246;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3191.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1246;
        float _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_1257 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1293 = _RESERVED_IDENTIFIER_FIXUP_3174.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3204;
        _RESERVED_IDENTIFIER_FIXUP_3204.x = _RESERVED_IDENTIFIER_FIXUP_1293.x;
        _RESERVED_IDENTIFIER_FIXUP_3204.y = _RESERVED_IDENTIFIER_FIXUP_1293.y;
        _RESERVED_IDENTIFIER_FIXUP_3204.w = _RESERVED_IDENTIFIER_FIXUP_1246;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3204.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1246;
        float _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_1286 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1315;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1322 = _RESERVED_IDENTIFIER_FIXUP_3174.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3217;
        _RESERVED_IDENTIFIER_FIXUP_3217.x = _RESERVED_IDENTIFIER_FIXUP_1322.x;
        _RESERVED_IDENTIFIER_FIXUP_3217.y = _RESERVED_IDENTIFIER_FIXUP_1322.y;
        _RESERVED_IDENTIFIER_FIXUP_3217.w = _RESERVED_IDENTIFIER_FIXUP_1246;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3217.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1246;
        float _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1315 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1344;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1351 = _RESERVED_IDENTIFIER_FIXUP_3174.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3230;
        _RESERVED_IDENTIFIER_FIXUP_3230.x = _RESERVED_IDENTIFIER_FIXUP_1351.x;
        _RESERVED_IDENTIFIER_FIXUP_3230.y = _RESERVED_IDENTIFIER_FIXUP_1351.y;
        _RESERVED_IDENTIFIER_FIXUP_3230.w = _RESERVED_IDENTIFIER_FIXUP_1246;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3230.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1246;
        float _RESERVED_IDENTIFIER_FIXUP_1373 = _RESERVED_IDENTIFIER_FIXUP_1344 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1373;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1380 = _RESERVED_IDENTIFIER_FIXUP_3174.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3243;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1380.x;
        _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_1380.y;
        _RESERVED_IDENTIFIER_FIXUP_3243.w = _RESERVED_IDENTIFIER_FIXUP_1246;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3243.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1246;
        float _RESERVED_IDENTIFIER_FIXUP_1402 = _RESERVED_IDENTIFIER_FIXUP_1373 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1402;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1409 = _RESERVED_IDENTIFIER_FIXUP_3174.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3256;
        _RESERVED_IDENTIFIER_FIXUP_3256.x = _RESERVED_IDENTIFIER_FIXUP_1409.x;
        _RESERVED_IDENTIFIER_FIXUP_3256.y = _RESERVED_IDENTIFIER_FIXUP_1409.y;
        _RESERVED_IDENTIFIER_FIXUP_3256.w = _RESERVED_IDENTIFIER_FIXUP_1246;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3256.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1246;
        float _RESERVED_IDENTIFIER_FIXUP_1431 = _RESERVED_IDENTIFIER_FIXUP_1402 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1431;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1438 = _RESERVED_IDENTIFIER_FIXUP_3174.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3269;
        _RESERVED_IDENTIFIER_FIXUP_3269.x = _RESERVED_IDENTIFIER_FIXUP_1438.x;
        _RESERVED_IDENTIFIER_FIXUP_3269.y = _RESERVED_IDENTIFIER_FIXUP_1438.y;
        _RESERVED_IDENTIFIER_FIXUP_3269.w = _RESERVED_IDENTIFIER_FIXUP_1246;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3269.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1246;
        float _RESERVED_IDENTIFIER_FIXUP_1460 = _RESERVED_IDENTIFIER_FIXUP_1431 + hdLod5(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1460;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1460 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3716 = _RESERVED_IDENTIFIER_FIXUP_3174;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1473 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2962.y = _RESERVED_IDENTIFIER_FIXUP_1473;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3717;
        if (_RESERVED_IDENTIFIER_FIXUP_1473 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1482 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1492 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1494 = _RESERVED_IDENTIFIER_FIXUP_1492.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3114 = _RESERVED_IDENTIFIER_FIXUP_2962;
            _RESERVED_IDENTIFIER_FIXUP_3114.y = _RESERVED_IDENTIFIER_FIXUP_1494;
            _RESERVED_IDENTIFIER_FIXUP_3114.z = _RESERVED_IDENTIFIER_FIXUP_1492.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1502 = _RESERVED_IDENTIFIER_FIXUP_3114.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3118;
            _RESERVED_IDENTIFIER_FIXUP_3118.x = _RESERVED_IDENTIFIER_FIXUP_1502.x;
            _RESERVED_IDENTIFIER_FIXUP_3118.y = _RESERVED_IDENTIFIER_FIXUP_1502.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1509 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_1509.y;
            _RESERVED_IDENTIFIER_FIXUP_3118.w = _RESERVED_IDENTIFIER_FIXUP_1513;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1482.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1482.w;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3118.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1513;
            float _RESERVED_IDENTIFIER_FIXUP_1524 = hdLod6(param_21, param_22).x + hdLod6(param_23, param_24).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3739 = vec4(_RESERVED_IDENTIFIER_FIXUP_1203, _RESERVED_IDENTIFIER_FIXUP_1494, _RESERVED_IDENTIFIER_FIXUP_1492.y, _RESERVED_IDENTIFIER_FIXUP_1524);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_3739.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3131;
            _RESERVED_IDENTIFIER_FIXUP_3131.x = _RESERVED_IDENTIFIER_FIXUP_1531.x;
            _RESERVED_IDENTIFIER_FIXUP_3131.y = _RESERVED_IDENTIFIER_FIXUP_1531.y;
            _RESERVED_IDENTIFIER_FIXUP_3131.w = _RESERVED_IDENTIFIER_FIXUP_1513;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3131.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1513;
            float _RESERVED_IDENTIFIER_FIXUP_1553 = _RESERVED_IDENTIFIER_FIXUP_1524 + hdLod6(param_25, param_26).x;
            _RESERVED_IDENTIFIER_FIXUP_3739.w = _RESERVED_IDENTIFIER_FIXUP_1553;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_3739.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3144;
            _RESERVED_IDENTIFIER_FIXUP_3144.x = _RESERVED_IDENTIFIER_FIXUP_1560.x;
            _RESERVED_IDENTIFIER_FIXUP_3144.y = _RESERVED_IDENTIFIER_FIXUP_1560.y;
            _RESERVED_IDENTIFIER_FIXUP_3144.w = _RESERVED_IDENTIFIER_FIXUP_1513;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3144.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1513;
            float _RESERVED_IDENTIFIER_FIXUP_1582 = _RESERVED_IDENTIFIER_FIXUP_1553 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_3739.w = _RESERVED_IDENTIFIER_FIXUP_1582;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1589 = _RESERVED_IDENTIFIER_FIXUP_3739.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3157;
            _RESERVED_IDENTIFIER_FIXUP_3157.x = _RESERVED_IDENTIFIER_FIXUP_1589.x;
            _RESERVED_IDENTIFIER_FIXUP_3157.y = _RESERVED_IDENTIFIER_FIXUP_1589.y;
            _RESERVED_IDENTIFIER_FIXUP_3157.w = _RESERVED_IDENTIFIER_FIXUP_1513;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3157.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1513;
            float _RESERVED_IDENTIFIER_FIXUP_1611 = _RESERVED_IDENTIFIER_FIXUP_1582 + hdLod6(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_1611;
            _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_1611 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3717 = _RESERVED_IDENTIFIER_FIXUP_3739;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1624 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2979 = _RESERVED_IDENTIFIER_FIXUP_2962;
            _RESERVED_IDENTIFIER_FIXUP_2979.y = _RESERVED_IDENTIFIER_FIXUP_1624;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3718;
            if (_RESERVED_IDENTIFIER_FIXUP_1624 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1633 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1643 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1645 = _RESERVED_IDENTIFIER_FIXUP_1643.x;
                _RESERVED_IDENTIFIER_FIXUP_2979.y = _RESERVED_IDENTIFIER_FIXUP_1645;
                _RESERVED_IDENTIFIER_FIXUP_2979.z = _RESERVED_IDENTIFIER_FIXUP_1643.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1653 = _RESERVED_IDENTIFIER_FIXUP_2979.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3058;
                _RESERVED_IDENTIFIER_FIXUP_3058.x = _RESERVED_IDENTIFIER_FIXUP_1653.x;
                _RESERVED_IDENTIFIER_FIXUP_3058.y = _RESERVED_IDENTIFIER_FIXUP_1653.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1660 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1664 = _RESERVED_IDENTIFIER_FIXUP_1660.y;
                _RESERVED_IDENTIFIER_FIXUP_3058.w = _RESERVED_IDENTIFIER_FIXUP_1664;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1633.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1633.w;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3058.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1664;
                float _RESERVED_IDENTIFIER_FIXUP_1675 = hdLod7(param_31, param_32).x + hdLod7(param_33, param_34).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3738 = vec4(_RESERVED_IDENTIFIER_FIXUP_1203, _RESERVED_IDENTIFIER_FIXUP_1645, _RESERVED_IDENTIFIER_FIXUP_1643.y, _RESERVED_IDENTIFIER_FIXUP_1675);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1682 = _RESERVED_IDENTIFIER_FIXUP_3738.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3071;
                _RESERVED_IDENTIFIER_FIXUP_3071.x = _RESERVED_IDENTIFIER_FIXUP_1682.x;
                _RESERVED_IDENTIFIER_FIXUP_3071.y = _RESERVED_IDENTIFIER_FIXUP_1682.y;
                _RESERVED_IDENTIFIER_FIXUP_3071.w = _RESERVED_IDENTIFIER_FIXUP_1664;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3071.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1664;
                float _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_1675 + hdLod7(param_35, param_36).x;
                _RESERVED_IDENTIFIER_FIXUP_3738.w = _RESERVED_IDENTIFIER_FIXUP_1704;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_3738.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3084;
                _RESERVED_IDENTIFIER_FIXUP_3084.x = _RESERVED_IDENTIFIER_FIXUP_1711.x;
                _RESERVED_IDENTIFIER_FIXUP_3084.y = _RESERVED_IDENTIFIER_FIXUP_1711.y;
                _RESERVED_IDENTIFIER_FIXUP_3084.w = _RESERVED_IDENTIFIER_FIXUP_1664;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3084.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1664;
                float _RESERVED_IDENTIFIER_FIXUP_1733 = _RESERVED_IDENTIFIER_FIXUP_1704 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_3738.w = _RESERVED_IDENTIFIER_FIXUP_1733;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1740 = _RESERVED_IDENTIFIER_FIXUP_3738.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3097;
                _RESERVED_IDENTIFIER_FIXUP_3097.x = _RESERVED_IDENTIFIER_FIXUP_1740.x;
                _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1740.y;
                _RESERVED_IDENTIFIER_FIXUP_3097.w = _RESERVED_IDENTIFIER_FIXUP_1664;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3097.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1664;
                float _RESERVED_IDENTIFIER_FIXUP_1762 = _RESERVED_IDENTIFIER_FIXUP_1733 + hdLod7(param_39, param_40).x;
                _RESERVED_IDENTIFIER_FIXUP_3738.y = _RESERVED_IDENTIFIER_FIXUP_1762;
                _RESERVED_IDENTIFIER_FIXUP_3738.x = _RESERVED_IDENTIFIER_FIXUP_1762 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3718 = _RESERVED_IDENTIFIER_FIXUP_3738;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1778 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1782 = _RESERVED_IDENTIFIER_FIXUP_1778.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1793 = vec4(_RESERVED_IDENTIFIER_FIXUP_1778.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1782).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3735 = vec4(_RESERVED_IDENTIFIER_FIXUP_1793 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1782);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1830 = _RESERVED_IDENTIFIER_FIXUP_1793 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3012 = _RESERVED_IDENTIFIER_FIXUP_3735;
                _RESERVED_IDENTIFIER_FIXUP_3012.x = _RESERVED_IDENTIFIER_FIXUP_1830.x;
                _RESERVED_IDENTIFIER_FIXUP_3012.y = _RESERVED_IDENTIFIER_FIXUP_1830.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1852 = _RESERVED_IDENTIFIER_FIXUP_1793 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3021 = _RESERVED_IDENTIFIER_FIXUP_3012;
                _RESERVED_IDENTIFIER_FIXUP_3021.x = _RESERVED_IDENTIFIER_FIXUP_1852.x;
                _RESERVED_IDENTIFIER_FIXUP_3021.y = _RESERVED_IDENTIFIER_FIXUP_1852.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1874 = _RESERVED_IDENTIFIER_FIXUP_1793 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3030 = _RESERVED_IDENTIFIER_FIXUP_3021;
                _RESERVED_IDENTIFIER_FIXUP_3030.x = _RESERVED_IDENTIFIER_FIXUP_1874.x;
                _RESERVED_IDENTIFIER_FIXUP_3030.y = _RESERVED_IDENTIFIER_FIXUP_1874.y;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_1793;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1782;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3735.xy;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1782;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3012.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1782;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3021.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1782;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3030.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_1782;
                float _RESERVED_IDENTIFIER_FIXUP_1889 = (((hdLod8(param_41, param_42).x + hdLod8(param_43, param_44).x) + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x;
                float _RESERVED_IDENTIFIER_FIXUP_1903 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1908 = (_RESERVED_IDENTIFIER_FIXUP_1889 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3718 = vec4((_RESERVED_IDENTIFIER_FIXUP_1903 * _RESERVED_IDENTIFIER_FIXUP_1908) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1903, _RESERVED_IDENTIFIER_FIXUP_1908, _RESERVED_IDENTIFIER_FIXUP_1889);
            }
            _RESERVED_IDENTIFIER_FIXUP_3717 = _RESERVED_IDENTIFIER_FIXUP_3718;
        }
        _RESERVED_IDENTIFIER_FIXUP_3716 = _RESERVED_IDENTIFIER_FIXUP_3717;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3288 = _RESERVED_IDENTIFIER_FIXUP_3716;
    _RESERVED_IDENTIFIER_FIXUP_3288.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1936 = _RESERVED_IDENTIFIER_FIXUP_1184.xyz * _RESERVED_IDENTIFIER_FIXUP_3288.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3290 = _RESERVED_IDENTIFIER_FIXUP_1184;
    _RESERVED_IDENTIFIER_FIXUP_3290.x = _RESERVED_IDENTIFIER_FIXUP_1936.x;
    _RESERVED_IDENTIFIER_FIXUP_3290.y = _RESERVED_IDENTIFIER_FIXUP_1936.y;
    _RESERVED_IDENTIFIER_FIXUP_3290.z = _RESERVED_IDENTIFIER_FIXUP_1936.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1947 = _RESERVED_IDENTIFIER_FIXUP_3290.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3714).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3296 = _RESERVED_IDENTIFIER_FIXUP_3290;
    _RESERVED_IDENTIFIER_FIXUP_3296.x = _RESERVED_IDENTIFIER_FIXUP_1947.x;
    _RESERVED_IDENTIFIER_FIXUP_3296.y = _RESERVED_IDENTIFIER_FIXUP_1947.y;
    _RESERVED_IDENTIFIER_FIXUP_3296.z = _RESERVED_IDENTIFIER_FIXUP_1947.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1958 = _RESERVED_IDENTIFIER_FIXUP_3296.xyz + _RESERVED_IDENTIFIER_FIXUP_3296.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3302 = _RESERVED_IDENTIFIER_FIXUP_3296;
    _RESERVED_IDENTIFIER_FIXUP_3302.x = _RESERVED_IDENTIFIER_FIXUP_1958.x;
    _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_1958.y;
    _RESERVED_IDENTIFIER_FIXUP_3302.z = _RESERVED_IDENTIFIER_FIXUP_1958.z;
    _RESERVED_IDENTIFIER_FIXUP_3288.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3288.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3288.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1983 = (_RESERVED_IDENTIFIER_FIXUP_3288.yzw * _RESERVED_IDENTIFIER_FIXUP_3288.xxx) + _RESERVED_IDENTIFIER_FIXUP_3302.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3314 = _RESERVED_IDENTIFIER_FIXUP_3302;
    _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_1983.x;
    _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1983.y;
    _RESERVED_IDENTIFIER_FIXUP_3314.z = _RESERVED_IDENTIFIER_FIXUP_1983.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1996 = _RESERVED_IDENTIFIER_FIXUP_3314.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3320 = _RESERVED_IDENTIFIER_FIXUP_3314;
    _RESERVED_IDENTIFIER_FIXUP_3320.x = _RESERVED_IDENTIFIER_FIXUP_1996.x;
    _RESERVED_IDENTIFIER_FIXUP_3320.y = _RESERVED_IDENTIFIER_FIXUP_1996.y;
    _RESERVED_IDENTIFIER_FIXUP_3320.z = _RESERVED_IDENTIFIER_FIXUP_1996.z;
    vec2 param_51 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2049 = hdTex0(param_51);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2053 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2057 = hdTex2(param_53);
    float _RESERVED_IDENTIFIER_FIXUP_2061 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2057.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3334 = _RESERVED_IDENTIFIER_FIXUP_2057;
    _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_2061;
    _RESERVED_IDENTIFIER_FIXUP_3334.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2061;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2071 = _RESERVED_IDENTIFIER_FIXUP_2053 * _RESERVED_IDENTIFIER_FIXUP_3334.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2077 = (_RESERVED_IDENTIFIER_FIXUP_2049 * _RESERVED_IDENTIFIER_FIXUP_3334.yyyy) + _RESERVED_IDENTIFIER_FIXUP_2071;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3341 = _RESERVED_IDENTIFIER_FIXUP_2071;
    _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_1191;
    float _RESERVED_IDENTIFIER_FIXUP_2090 = clamp((_RESERVED_IDENTIFIER_FIXUP_1191 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_2090;
    float _RESERVED_IDENTIFIER_FIXUP_2096 = ((-_RESERVED_IDENTIFIER_FIXUP_2090) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_2096;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3725;
    if (_RESERVED_IDENTIFIER_FIXUP_2096 != (-_RESERVED_IDENTIFIER_FIXUP_2096))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2108 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2108.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2108.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2114 = hdLod5(param_54, param_55);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2118 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3553 = _RESERVED_IDENTIFIER_FIXUP_2114;
        _RESERVED_IDENTIFIER_FIXUP_3553.y = _RESERVED_IDENTIFIER_FIXUP_2118.x;
        _RESERVED_IDENTIFIER_FIXUP_3553.z = _RESERVED_IDENTIFIER_FIXUP_2118.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2128 = _RESERVED_IDENTIFIER_FIXUP_3553.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3557;
        _RESERVED_IDENTIFIER_FIXUP_3557.x = _RESERVED_IDENTIFIER_FIXUP_2128.x;
        _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2128.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2135 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2139 = _RESERVED_IDENTIFIER_FIXUP_2135.y;
        _RESERVED_IDENTIFIER_FIXUP_3557.w = _RESERVED_IDENTIFIER_FIXUP_2139;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3557.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2139;
        float _RESERVED_IDENTIFIER_FIXUP_2150 = _RESERVED_IDENTIFIER_FIXUP_2114.x + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2150;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2157 = _RESERVED_IDENTIFIER_FIXUP_3553.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3570;
        _RESERVED_IDENTIFIER_FIXUP_3570.x = _RESERVED_IDENTIFIER_FIXUP_2157.x;
        _RESERVED_IDENTIFIER_FIXUP_3570.y = _RESERVED_IDENTIFIER_FIXUP_2157.y;
        _RESERVED_IDENTIFIER_FIXUP_3570.w = _RESERVED_IDENTIFIER_FIXUP_2139;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3570.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2139;
        float _RESERVED_IDENTIFIER_FIXUP_2179 = _RESERVED_IDENTIFIER_FIXUP_2150 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2179;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2186 = _RESERVED_IDENTIFIER_FIXUP_3553.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3583;
        _RESERVED_IDENTIFIER_FIXUP_3583.x = _RESERVED_IDENTIFIER_FIXUP_2186.x;
        _RESERVED_IDENTIFIER_FIXUP_3583.y = _RESERVED_IDENTIFIER_FIXUP_2186.y;
        _RESERVED_IDENTIFIER_FIXUP_3583.w = _RESERVED_IDENTIFIER_FIXUP_2139;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3583.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2139;
        float _RESERVED_IDENTIFIER_FIXUP_2208 = _RESERVED_IDENTIFIER_FIXUP_2179 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2208;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2215 = _RESERVED_IDENTIFIER_FIXUP_3553.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3596;
        _RESERVED_IDENTIFIER_FIXUP_3596.x = _RESERVED_IDENTIFIER_FIXUP_2215.x;
        _RESERVED_IDENTIFIER_FIXUP_3596.y = _RESERVED_IDENTIFIER_FIXUP_2215.y;
        _RESERVED_IDENTIFIER_FIXUP_3596.w = _RESERVED_IDENTIFIER_FIXUP_2139;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3596.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2139;
        float _RESERVED_IDENTIFIER_FIXUP_2237 = _RESERVED_IDENTIFIER_FIXUP_2208 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2237;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2244 = _RESERVED_IDENTIFIER_FIXUP_3553.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3609;
        _RESERVED_IDENTIFIER_FIXUP_3609.x = _RESERVED_IDENTIFIER_FIXUP_2244.x;
        _RESERVED_IDENTIFIER_FIXUP_3609.y = _RESERVED_IDENTIFIER_FIXUP_2244.y;
        _RESERVED_IDENTIFIER_FIXUP_3609.w = _RESERVED_IDENTIFIER_FIXUP_2139;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3609.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2139;
        float _RESERVED_IDENTIFIER_FIXUP_2266 = _RESERVED_IDENTIFIER_FIXUP_2237 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2266;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2273 = _RESERVED_IDENTIFIER_FIXUP_3553.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3622;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2273.x;
        _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2273.y;
        _RESERVED_IDENTIFIER_FIXUP_3622.w = _RESERVED_IDENTIFIER_FIXUP_2139;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3622.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2139;
        float _RESERVED_IDENTIFIER_FIXUP_2295 = _RESERVED_IDENTIFIER_FIXUP_2266 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2295;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2302 = _RESERVED_IDENTIFIER_FIXUP_3553.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3635;
        _RESERVED_IDENTIFIER_FIXUP_3635.x = _RESERVED_IDENTIFIER_FIXUP_2302.x;
        _RESERVED_IDENTIFIER_FIXUP_3635.y = _RESERVED_IDENTIFIER_FIXUP_2302.y;
        _RESERVED_IDENTIFIER_FIXUP_3635.w = _RESERVED_IDENTIFIER_FIXUP_2139;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3635.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2139;
        float _RESERVED_IDENTIFIER_FIXUP_2324 = _RESERVED_IDENTIFIER_FIXUP_2295 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2324;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2331 = _RESERVED_IDENTIFIER_FIXUP_3553.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3648;
        _RESERVED_IDENTIFIER_FIXUP_3648.x = _RESERVED_IDENTIFIER_FIXUP_2331.x;
        _RESERVED_IDENTIFIER_FIXUP_3648.y = _RESERVED_IDENTIFIER_FIXUP_2331.y;
        _RESERVED_IDENTIFIER_FIXUP_3648.w = _RESERVED_IDENTIFIER_FIXUP_2139;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3648.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2139;
        float _RESERVED_IDENTIFIER_FIXUP_2353 = _RESERVED_IDENTIFIER_FIXUP_2324 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2353;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2353 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3725 = _RESERVED_IDENTIFIER_FIXUP_3553;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2366 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2366;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3726;
        if (_RESERVED_IDENTIFIER_FIXUP_2366 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2375 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2385 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2387 = _RESERVED_IDENTIFIER_FIXUP_2385.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3493 = _RESERVED_IDENTIFIER_FIXUP_3341;
            _RESERVED_IDENTIFIER_FIXUP_3493.y = _RESERVED_IDENTIFIER_FIXUP_2387;
            _RESERVED_IDENTIFIER_FIXUP_3493.z = _RESERVED_IDENTIFIER_FIXUP_2385.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2395 = _RESERVED_IDENTIFIER_FIXUP_3493.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3497;
            _RESERVED_IDENTIFIER_FIXUP_3497.x = _RESERVED_IDENTIFIER_FIXUP_2395.x;
            _RESERVED_IDENTIFIER_FIXUP_3497.y = _RESERVED_IDENTIFIER_FIXUP_2395.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2402 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2406 = _RESERVED_IDENTIFIER_FIXUP_2402.y;
            _RESERVED_IDENTIFIER_FIXUP_3497.w = _RESERVED_IDENTIFIER_FIXUP_2406;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2375.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2375.w;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3497.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2406;
            float _RESERVED_IDENTIFIER_FIXUP_2417 = hdLod6(param_72, param_73).x + hdLod6(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3746 = vec4(_RESERVED_IDENTIFIER_FIXUP_2096, _RESERVED_IDENTIFIER_FIXUP_2387, _RESERVED_IDENTIFIER_FIXUP_2385.y, _RESERVED_IDENTIFIER_FIXUP_2417);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2424 = _RESERVED_IDENTIFIER_FIXUP_3746.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3510;
            _RESERVED_IDENTIFIER_FIXUP_3510.x = _RESERVED_IDENTIFIER_FIXUP_2424.x;
            _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_2424.y;
            _RESERVED_IDENTIFIER_FIXUP_3510.w = _RESERVED_IDENTIFIER_FIXUP_2406;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3510.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2406;
            float _RESERVED_IDENTIFIER_FIXUP_2446 = _RESERVED_IDENTIFIER_FIXUP_2417 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3746.w = _RESERVED_IDENTIFIER_FIXUP_2446;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2453 = _RESERVED_IDENTIFIER_FIXUP_3746.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3523;
            _RESERVED_IDENTIFIER_FIXUP_3523.x = _RESERVED_IDENTIFIER_FIXUP_2453.x;
            _RESERVED_IDENTIFIER_FIXUP_3523.y = _RESERVED_IDENTIFIER_FIXUP_2453.y;
            _RESERVED_IDENTIFIER_FIXUP_3523.w = _RESERVED_IDENTIFIER_FIXUP_2406;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3523.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2406;
            float _RESERVED_IDENTIFIER_FIXUP_2475 = _RESERVED_IDENTIFIER_FIXUP_2446 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3746.w = _RESERVED_IDENTIFIER_FIXUP_2475;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2482 = _RESERVED_IDENTIFIER_FIXUP_3746.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3536;
            _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2482.x;
            _RESERVED_IDENTIFIER_FIXUP_3536.y = _RESERVED_IDENTIFIER_FIXUP_2482.y;
            _RESERVED_IDENTIFIER_FIXUP_3536.w = _RESERVED_IDENTIFIER_FIXUP_2406;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3536.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2406;
            float _RESERVED_IDENTIFIER_FIXUP_2504 = _RESERVED_IDENTIFIER_FIXUP_2475 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3746.y = _RESERVED_IDENTIFIER_FIXUP_2504;
            _RESERVED_IDENTIFIER_FIXUP_3746.x = _RESERVED_IDENTIFIER_FIXUP_2504 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3726 = _RESERVED_IDENTIFIER_FIXUP_3746;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2517 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_3341;
            _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_2517;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3727;
            if (_RESERVED_IDENTIFIER_FIXUP_2517 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2526 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2536 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2538 = _RESERVED_IDENTIFIER_FIXUP_2536.x;
                _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_2538;
                _RESERVED_IDENTIFIER_FIXUP_3358.z = _RESERVED_IDENTIFIER_FIXUP_2536.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2546 = _RESERVED_IDENTIFIER_FIXUP_3358.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3437;
                _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_2546.x;
                _RESERVED_IDENTIFIER_FIXUP_3437.y = _RESERVED_IDENTIFIER_FIXUP_2546.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2553 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2557 = _RESERVED_IDENTIFIER_FIXUP_2553.y;
                _RESERVED_IDENTIFIER_FIXUP_3437.w = _RESERVED_IDENTIFIER_FIXUP_2557;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2526.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2526.w;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3437.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2557;
                float _RESERVED_IDENTIFIER_FIXUP_2568 = hdLod7(param_82, param_83).x + hdLod7(param_84, param_85).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3745 = vec4(_RESERVED_IDENTIFIER_FIXUP_2096, _RESERVED_IDENTIFIER_FIXUP_2538, _RESERVED_IDENTIFIER_FIXUP_2536.y, _RESERVED_IDENTIFIER_FIXUP_2568);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2575 = _RESERVED_IDENTIFIER_FIXUP_3745.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3450;
                _RESERVED_IDENTIFIER_FIXUP_3450.x = _RESERVED_IDENTIFIER_FIXUP_2575.x;
                _RESERVED_IDENTIFIER_FIXUP_3450.y = _RESERVED_IDENTIFIER_FIXUP_2575.y;
                _RESERVED_IDENTIFIER_FIXUP_3450.w = _RESERVED_IDENTIFIER_FIXUP_2557;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3450.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2557;
                float _RESERVED_IDENTIFIER_FIXUP_2597 = _RESERVED_IDENTIFIER_FIXUP_2568 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3745.w = _RESERVED_IDENTIFIER_FIXUP_2597;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2604 = _RESERVED_IDENTIFIER_FIXUP_3745.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3463;
                _RESERVED_IDENTIFIER_FIXUP_3463.x = _RESERVED_IDENTIFIER_FIXUP_2604.x;
                _RESERVED_IDENTIFIER_FIXUP_3463.y = _RESERVED_IDENTIFIER_FIXUP_2604.y;
                _RESERVED_IDENTIFIER_FIXUP_3463.w = _RESERVED_IDENTIFIER_FIXUP_2557;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3463.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2557;
                float _RESERVED_IDENTIFIER_FIXUP_2626 = _RESERVED_IDENTIFIER_FIXUP_2597 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3745.w = _RESERVED_IDENTIFIER_FIXUP_2626;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2633 = _RESERVED_IDENTIFIER_FIXUP_3745.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3476;
                _RESERVED_IDENTIFIER_FIXUP_3476.x = _RESERVED_IDENTIFIER_FIXUP_2633.x;
                _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2633.y;
                _RESERVED_IDENTIFIER_FIXUP_3476.w = _RESERVED_IDENTIFIER_FIXUP_2557;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3476.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2557;
                float _RESERVED_IDENTIFIER_FIXUP_2655 = _RESERVED_IDENTIFIER_FIXUP_2626 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_3745.y = _RESERVED_IDENTIFIER_FIXUP_2655;
                _RESERVED_IDENTIFIER_FIXUP_3745.x = _RESERVED_IDENTIFIER_FIXUP_2655 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3727 = _RESERVED_IDENTIFIER_FIXUP_3745;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2671 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2675 = _RESERVED_IDENTIFIER_FIXUP_2671.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2686 = vec4(_RESERVED_IDENTIFIER_FIXUP_2671.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2675).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3742 = vec4(_RESERVED_IDENTIFIER_FIXUP_2686 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2675);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2723 = _RESERVED_IDENTIFIER_FIXUP_2686 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3391 = _RESERVED_IDENTIFIER_FIXUP_3742;
                _RESERVED_IDENTIFIER_FIXUP_3391.x = _RESERVED_IDENTIFIER_FIXUP_2723.x;
                _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_2723.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2745 = _RESERVED_IDENTIFIER_FIXUP_2686 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3400 = _RESERVED_IDENTIFIER_FIXUP_3391;
                _RESERVED_IDENTIFIER_FIXUP_3400.x = _RESERVED_IDENTIFIER_FIXUP_2745.x;
                _RESERVED_IDENTIFIER_FIXUP_3400.y = _RESERVED_IDENTIFIER_FIXUP_2745.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2767 = _RESERVED_IDENTIFIER_FIXUP_2686 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3409 = _RESERVED_IDENTIFIER_FIXUP_3400;
                _RESERVED_IDENTIFIER_FIXUP_3409.x = _RESERVED_IDENTIFIER_FIXUP_2767.x;
                _RESERVED_IDENTIFIER_FIXUP_3409.y = _RESERVED_IDENTIFIER_FIXUP_2767.y;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_2686;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2675;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3742.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2675;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3391.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2675;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3400.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2675;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3409.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2675;
                float _RESERVED_IDENTIFIER_FIXUP_2782 = (((hdLod8(param_92, param_93).x + hdLod8(param_94, param_95).x) + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x;
                float _RESERVED_IDENTIFIER_FIXUP_2796 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2801 = (_RESERVED_IDENTIFIER_FIXUP_2782 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3727 = vec4((_RESERVED_IDENTIFIER_FIXUP_2796 * _RESERVED_IDENTIFIER_FIXUP_2801) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2796, _RESERVED_IDENTIFIER_FIXUP_2801, _RESERVED_IDENTIFIER_FIXUP_2782);
            }
            _RESERVED_IDENTIFIER_FIXUP_3726 = _RESERVED_IDENTIFIER_FIXUP_3727;
        }
        _RESERVED_IDENTIFIER_FIXUP_3725 = _RESERVED_IDENTIFIER_FIXUP_3726;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2816 = (_RESERVED_IDENTIFIER_FIXUP_3725.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3665 = _RESERVED_IDENTIFIER_FIXUP_3725;
    _RESERVED_IDENTIFIER_FIXUP_3665.y = _RESERVED_IDENTIFIER_FIXUP_2816;
    _RESERVED_IDENTIFIER_FIXUP_3665.y = _RESERVED_IDENTIFIER_FIXUP_2816;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2829 = _RESERVED_IDENTIFIER_FIXUP_2077.xyz * _RESERVED_IDENTIFIER_FIXUP_3665.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3671 = _RESERVED_IDENTIFIER_FIXUP_2077;
    _RESERVED_IDENTIFIER_FIXUP_3671.x = _RESERVED_IDENTIFIER_FIXUP_2829.x;
    _RESERVED_IDENTIFIER_FIXUP_3671.y = _RESERVED_IDENTIFIER_FIXUP_2829.y;
    _RESERVED_IDENTIFIER_FIXUP_3671.z = _RESERVED_IDENTIFIER_FIXUP_2829.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2840 = _RESERVED_IDENTIFIER_FIXUP_3671.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3677 = _RESERVED_IDENTIFIER_FIXUP_3671;
    _RESERVED_IDENTIFIER_FIXUP_3677.x = _RESERVED_IDENTIFIER_FIXUP_2840.x;
    _RESERVED_IDENTIFIER_FIXUP_3677.y = _RESERVED_IDENTIFIER_FIXUP_2840.y;
    _RESERVED_IDENTIFIER_FIXUP_3677.z = _RESERVED_IDENTIFIER_FIXUP_2840.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2851 = _RESERVED_IDENTIFIER_FIXUP_3677.xyz + _RESERVED_IDENTIFIER_FIXUP_3677.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3683 = _RESERVED_IDENTIFIER_FIXUP_3677;
    _RESERVED_IDENTIFIER_FIXUP_3683.x = _RESERVED_IDENTIFIER_FIXUP_2851.x;
    _RESERVED_IDENTIFIER_FIXUP_3683.y = _RESERVED_IDENTIFIER_FIXUP_2851.y;
    _RESERVED_IDENTIFIER_FIXUP_3683.z = _RESERVED_IDENTIFIER_FIXUP_2851.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2862 = _RESERVED_IDENTIFIER_FIXUP_3683.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3665.y = _RESERVED_IDENTIFIER_FIXUP_2862.x;
    _RESERVED_IDENTIFIER_FIXUP_3665.z = _RESERVED_IDENTIFIER_FIXUP_2862.y;
    _RESERVED_IDENTIFIER_FIXUP_3665.w = _RESERVED_IDENTIFIER_FIXUP_2862.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2876 = (_RESERVED_IDENTIFIER_FIXUP_3665.yzw * _RESERVED_IDENTIFIER_FIXUP_3665.xxx) + _RESERVED_IDENTIFIER_FIXUP_3683.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3695 = _RESERVED_IDENTIFIER_FIXUP_3683;
    _RESERVED_IDENTIFIER_FIXUP_3695.x = _RESERVED_IDENTIFIER_FIXUP_2876.x;
    _RESERVED_IDENTIFIER_FIXUP_3695.y = _RESERVED_IDENTIFIER_FIXUP_2876.y;
    _RESERVED_IDENTIFIER_FIXUP_3695.z = _RESERVED_IDENTIFIER_FIXUP_2876.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2889 = _RESERVED_IDENTIFIER_FIXUP_3695.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3701 = _RESERVED_IDENTIFIER_FIXUP_3695;
    _RESERVED_IDENTIFIER_FIXUP_3701.x = _RESERVED_IDENTIFIER_FIXUP_2889.x;
    _RESERVED_IDENTIFIER_FIXUP_3701.y = _RESERVED_IDENTIFIER_FIXUP_2889.y;
    _RESERVED_IDENTIFIER_FIXUP_3701.z = _RESERVED_IDENTIFIER_FIXUP_2889.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3701.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1017 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1026;
    if (_RESERVED_IDENTIFIER_FIXUP_1017)
    {
        _RESERVED_IDENTIFIER_FIXUP_1026 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1026 = _RESERVED_IDENTIFIER_FIXUP_1017;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1026)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1063 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3320.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1090 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2948;
    if (_RESERVED_IDENTIFIER_FIXUP_1063 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2948 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1063), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1090);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2948 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1090);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2948;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2816);
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
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r1.xy;
        float param_4 = r1.w;
        r1 = hdLod5(param_3, param_4);
        vec2 hdB142 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB142.x;
        r1.z = hdB142.y;
        vec2 hdB164 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB164.x;
        r2.y = hdB164.y;
        vec2 hdB172 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB172.x;
        r2.w = hdB172.y;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r1.x += r2.x;
        vec2 hdB195 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB195.x;
        r2.y = hdB195.y;
        vec2 hdB202 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB202.x;
        r2.w = hdB202.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.x += r2.x;
        vec2 hdB225 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB225.x;
        r2.y = hdB225.y;
        vec2 hdB232 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB232.x;
        r2.w = hdB232.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.x += r2.x;
        vec2 hdB255 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB255.x;
        r2.y = hdB255.y;
        vec2 hdB262 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB262.x;
        r2.w = hdB262.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.x += r2.x;
        vec2 hdB285 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB285.x;
        r2.y = hdB285.y;
        vec2 hdB292 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB292.x;
        r2.w = hdB292.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.x += r2.x;
        vec2 hdB315 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB315.x;
        r2.y = hdB315.y;
        vec2 hdB322 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB322.x;
        r2.w = hdB322.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r1.x += r2.x;
        vec2 hdB345 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB345.x;
        r2.y = hdB345.y;
        vec2 hdB352 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB352.x;
        r2.w = hdB352.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r1.x += r2.x;
        vec2 hdB375 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB375.x;
        r2.y = hdB375.y;
        vec2 hdB382 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB382.x;
        r2.w = hdB382.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod5(param_19, param_20);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v5.x), abs(v5.y));
        if (r1.y < 1.0)
        {
            r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r2.xy;
            float param_22 = r2.w;
            r2 = hdLod6(param_21, param_22);
            vec2 hdB432 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB432.x;
            r1.z = hdB432.y;
            vec2 hdB442 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB442.x;
            r3.y = hdB442.y;
            vec2 hdB449 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB449.x;
            r3.w = hdB449.y;
            vec2 param_23 = r3.xy;
            float param_24 = r3.w;
            r3 = hdLod6(param_23, param_24);
            r1.w = r2.x + r3.x;
            vec2 hdB471 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB471.x;
            r2.y = hdB471.y;
            vec2 hdB478 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB478.x;
            r2.w = hdB478.y;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
            r1.w += r2.x;
            vec2 hdB500 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB500.x;
            r2.y = hdB500.y;
            vec2 hdB507 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB507.x;
            r2.w = hdB507.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r1.w += r2.x;
            vec2 hdB529 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB529.x;
            r2.y = hdB529.y;
            vec2 hdB536 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB536.x;
            r2.w = hdB536.y;
            vec2 param_29 = r2.xy;
            float param_30 = r2.w;
            r2 = hdLod6(param_29, param_30);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v6.x), abs(v6.y));
            if (r1.y < 1.0)
            {
                r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r2.xy;
                float param_32 = r2.w;
                r2 = hdLod7(param_31, param_32);
                vec2 hdB586 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB586.x;
                r1.z = hdB586.y;
                vec2 hdB596 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB596.x;
                r3.y = hdB596.y;
                vec2 hdB603 = vec2(1.0, 0.0) * v6.zx;
                r3.z = hdB603.x;
                r3.w = hdB603.y;
                vec2 param_33 = r3.xy;
                float param_34 = r3.w;
                r3 = hdLod7(param_33, param_34);
                r1.w = r2.x + r3.x;
                vec2 hdB625 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB625.x;
                r2.y = hdB625.y;
                vec2 hdB632 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB632.x;
                r2.w = hdB632.y;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
                r1.w += r2.x;
                vec2 hdB654 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB654.x;
                r2.y = hdB654.y;
                vec2 hdB661 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB661.x;
                r2.w = hdB661.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r1.w += r2.x;
                vec2 hdB683 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB683.x;
                r2.y = hdB683.y;
                vec2 hdB690 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB690.x;
                r2.w = hdB690.y;
                vec2 param_39 = r2.xy;
                float param_40 = r2.w;
                r2 = hdLod7(param_39, param_40);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 hdB722 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB722.x;
                r2.w = hdB722.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r3 = hdLod8(param_41, param_42);
                vec2 hdB747 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB747.x;
                r4.y = hdB747.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r5 = hdLod8(param_43, param_44);
                r1.w = r3.x + r5.x;
                vec2 hdB775 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB775.x;
                r4.y = hdB775.y;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r3 = hdLod8(param_45, param_46);
                r1.w += r3.x;
                vec2 hdB797 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB797.x;
                r4.y = hdB797.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r3 = hdLod8(param_47, param_48);
                r1.w += r3.x;
                vec2 hdB819 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB819.x;
                r4.y = hdB819.y;
                vec2 param_49 = r4.xy;
                float param_50 = r4.w;
                r2 = hdLod8(param_49, param_50);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB872 = r0;
    vec3 hdB876 = hdB872.xyz * r1.yyy;
    r0.x = hdB876.x;
    r0.y = hdB876.y;
    r0.z = hdB876.z;
    vec4 hdB883 = r0;
    vec3 hdB887 = hdB883.xyz * v0.xyz;
    r0.x = hdB887.x;
    r0.y = hdB887.y;
    r0.z = hdB887.z;
    vec4 hdB894 = r0;
    vec4 hdB896 = r0;
    vec3 hdB898 = hdB894.xyz + hdB896.xyz;
    r0.x = hdB898.x;
    r0.y = hdB898.y;
    r0.z = hdB898.z;
    vec3 hdB909 = r0.www * v1.xyz;
    r1.y = hdB909.x;
    r1.z = hdB909.y;
    r1.w = hdB909.z;
    vec4 hdB921 = r0;
    vec3 hdB923 = (r1.yzw * r1.xxx) + hdB921.xyz;
    r0.x = hdB923.x;
    r0.y = hdB923.y;
    r0.z = hdB923.z;
    vec4 hdB930 = r0;
    vec3 hdB937 = hdB930.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB937.x;
    r0.y = hdB937.y;
    r0.z = hdB937.z;
    vec3 hdB952 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB952.x;
    oC0.y = hdB952.y;
    oC0.z = hdB952.z;
    oC0.w = 1.0;
    bool hdB965 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB973;
    if (hdB965)
    {
        hdB973 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB973 = hdB965;
    }
    if (hdB973)
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
    bool _3381 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3391;
    if (_3381)
    {
        _3391 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3391 = _3381;
    }
    if (_3391)
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
        bool _3416 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3431;
        if (!_3416)
        {
            _3431 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3431 = _3416;
        }
        if (_3431)
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
