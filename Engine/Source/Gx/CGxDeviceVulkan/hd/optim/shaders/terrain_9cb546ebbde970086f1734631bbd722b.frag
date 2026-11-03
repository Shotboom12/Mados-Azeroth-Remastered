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
float _RESERVED_IDENTIFIER_FIXUP_3755;
vec4 _RESERVED_IDENTIFIER_FIXUP_3756;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1175 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1179 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1183 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1187 = hdTex3(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1191 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1187.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2996 = _RESERVED_IDENTIFIER_FIXUP_1187;
    _RESERVED_IDENTIFIER_FIXUP_2996.z = _RESERVED_IDENTIFIER_FIXUP_1191;
    _RESERVED_IDENTIFIER_FIXUP_2996.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1191;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1201 = _RESERVED_IDENTIFIER_FIXUP_1179 * _RESERVED_IDENTIFIER_FIXUP_2996.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1213 = (_RESERVED_IDENTIFIER_FIXUP_1183 * _RESERVED_IDENTIFIER_FIXUP_2996.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1175 * _RESERVED_IDENTIFIER_FIXUP_2996.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1201);
    float _RESERVED_IDENTIFIER_FIXUP_1220 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3003 = _RESERVED_IDENTIFIER_FIXUP_1201;
    _RESERVED_IDENTIFIER_FIXUP_3003.x = _RESERVED_IDENTIFIER_FIXUP_1220;
    float _RESERVED_IDENTIFIER_FIXUP_1226 = clamp((_RESERVED_IDENTIFIER_FIXUP_1220 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3003.x = _RESERVED_IDENTIFIER_FIXUP_1226;
    float _RESERVED_IDENTIFIER_FIXUP_1232 = ((-_RESERVED_IDENTIFIER_FIXUP_1226) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3003.x = _RESERVED_IDENTIFIER_FIXUP_1232;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3757;
    if (_RESERVED_IDENTIFIER_FIXUP_1232 != (-_RESERVED_IDENTIFIER_FIXUP_1232))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1244 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1244.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1244.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1250 = hdLod5(param_3, param_4);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1254 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3215 = _RESERVED_IDENTIFIER_FIXUP_1250;
        _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_1254.x;
        _RESERVED_IDENTIFIER_FIXUP_3215.z = _RESERVED_IDENTIFIER_FIXUP_1254.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3219;
        _RESERVED_IDENTIFIER_FIXUP_3219.x = _RESERVED_IDENTIFIER_FIXUP_1264.x;
        _RESERVED_IDENTIFIER_FIXUP_3219.y = _RESERVED_IDENTIFIER_FIXUP_1264.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1271 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_1271.y;
        _RESERVED_IDENTIFIER_FIXUP_3219.w = _RESERVED_IDENTIFIER_FIXUP_1275;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3219.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1275;
        float _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_1250.x + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1293 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3232;
        _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_1293.x;
        _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_1293.y;
        _RESERVED_IDENTIFIER_FIXUP_3232.w = _RESERVED_IDENTIFIER_FIXUP_1275;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3232.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1275;
        float _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_1286 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1315;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1322 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3245;
        _RESERVED_IDENTIFIER_FIXUP_3245.x = _RESERVED_IDENTIFIER_FIXUP_1322.x;
        _RESERVED_IDENTIFIER_FIXUP_3245.y = _RESERVED_IDENTIFIER_FIXUP_1322.y;
        _RESERVED_IDENTIFIER_FIXUP_3245.w = _RESERVED_IDENTIFIER_FIXUP_1275;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3245.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1275;
        float _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1315 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1344;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1351 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3258;
        _RESERVED_IDENTIFIER_FIXUP_3258.x = _RESERVED_IDENTIFIER_FIXUP_1351.x;
        _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_1351.y;
        _RESERVED_IDENTIFIER_FIXUP_3258.w = _RESERVED_IDENTIFIER_FIXUP_1275;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3258.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1275;
        float _RESERVED_IDENTIFIER_FIXUP_1373 = _RESERVED_IDENTIFIER_FIXUP_1344 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1373;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1380 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3271;
        _RESERVED_IDENTIFIER_FIXUP_3271.x = _RESERVED_IDENTIFIER_FIXUP_1380.x;
        _RESERVED_IDENTIFIER_FIXUP_3271.y = _RESERVED_IDENTIFIER_FIXUP_1380.y;
        _RESERVED_IDENTIFIER_FIXUP_3271.w = _RESERVED_IDENTIFIER_FIXUP_1275;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3271.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1275;
        float _RESERVED_IDENTIFIER_FIXUP_1402 = _RESERVED_IDENTIFIER_FIXUP_1373 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1402;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1409 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3284;
        _RESERVED_IDENTIFIER_FIXUP_3284.x = _RESERVED_IDENTIFIER_FIXUP_1409.x;
        _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_1409.y;
        _RESERVED_IDENTIFIER_FIXUP_3284.w = _RESERVED_IDENTIFIER_FIXUP_1275;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3284.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1275;
        float _RESERVED_IDENTIFIER_FIXUP_1431 = _RESERVED_IDENTIFIER_FIXUP_1402 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1431;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1438 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3297;
        _RESERVED_IDENTIFIER_FIXUP_3297.x = _RESERVED_IDENTIFIER_FIXUP_1438.x;
        _RESERVED_IDENTIFIER_FIXUP_3297.y = _RESERVED_IDENTIFIER_FIXUP_1438.y;
        _RESERVED_IDENTIFIER_FIXUP_3297.w = _RESERVED_IDENTIFIER_FIXUP_1275;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3297.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1275;
        float _RESERVED_IDENTIFIER_FIXUP_1460 = _RESERVED_IDENTIFIER_FIXUP_1431 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1460;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1467 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
        _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_1467.x;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_1467.y;
        _RESERVED_IDENTIFIER_FIXUP_3310.w = _RESERVED_IDENTIFIER_FIXUP_1275;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3310.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1275;
        float _RESERVED_IDENTIFIER_FIXUP_1489 = _RESERVED_IDENTIFIER_FIXUP_1460 + hdLod5(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1489;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1489 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3757 = _RESERVED_IDENTIFIER_FIXUP_3215;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1502 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3003.y = _RESERVED_IDENTIFIER_FIXUP_1502;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3758;
        if (_RESERVED_IDENTIFIER_FIXUP_1502 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1511 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1521 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_1521.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3155 = _RESERVED_IDENTIFIER_FIXUP_3003;
            _RESERVED_IDENTIFIER_FIXUP_3155.y = _RESERVED_IDENTIFIER_FIXUP_1523;
            _RESERVED_IDENTIFIER_FIXUP_3155.z = _RESERVED_IDENTIFIER_FIXUP_1521.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_3155.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3159;
            _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1531.x;
            _RESERVED_IDENTIFIER_FIXUP_3159.y = _RESERVED_IDENTIFIER_FIXUP_1531.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1538 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1542 = _RESERVED_IDENTIFIER_FIXUP_1538.y;
            _RESERVED_IDENTIFIER_FIXUP_3159.w = _RESERVED_IDENTIFIER_FIXUP_1542;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1511.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1511.w;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3159.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1542;
            float _RESERVED_IDENTIFIER_FIXUP_1553 = hdLod6(param_21, param_22).x + hdLod6(param_23, param_24).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3780 = vec4(_RESERVED_IDENTIFIER_FIXUP_1232, _RESERVED_IDENTIFIER_FIXUP_1523, _RESERVED_IDENTIFIER_FIXUP_1521.y, _RESERVED_IDENTIFIER_FIXUP_1553);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_3780.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3172;
            _RESERVED_IDENTIFIER_FIXUP_3172.x = _RESERVED_IDENTIFIER_FIXUP_1560.x;
            _RESERVED_IDENTIFIER_FIXUP_3172.y = _RESERVED_IDENTIFIER_FIXUP_1560.y;
            _RESERVED_IDENTIFIER_FIXUP_3172.w = _RESERVED_IDENTIFIER_FIXUP_1542;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3172.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1542;
            float _RESERVED_IDENTIFIER_FIXUP_1582 = _RESERVED_IDENTIFIER_FIXUP_1553 + hdLod6(param_25, param_26).x;
            _RESERVED_IDENTIFIER_FIXUP_3780.w = _RESERVED_IDENTIFIER_FIXUP_1582;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1589 = _RESERVED_IDENTIFIER_FIXUP_3780.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3185;
            _RESERVED_IDENTIFIER_FIXUP_3185.x = _RESERVED_IDENTIFIER_FIXUP_1589.x;
            _RESERVED_IDENTIFIER_FIXUP_3185.y = _RESERVED_IDENTIFIER_FIXUP_1589.y;
            _RESERVED_IDENTIFIER_FIXUP_3185.w = _RESERVED_IDENTIFIER_FIXUP_1542;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3185.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1542;
            float _RESERVED_IDENTIFIER_FIXUP_1611 = _RESERVED_IDENTIFIER_FIXUP_1582 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_3780.w = _RESERVED_IDENTIFIER_FIXUP_1611;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1618 = _RESERVED_IDENTIFIER_FIXUP_3780.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3198;
            _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_1618.x;
            _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1618.y;
            _RESERVED_IDENTIFIER_FIXUP_3198.w = _RESERVED_IDENTIFIER_FIXUP_1542;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3198.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1542;
            float _RESERVED_IDENTIFIER_FIXUP_1640 = _RESERVED_IDENTIFIER_FIXUP_1611 + hdLod6(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_3780.y = _RESERVED_IDENTIFIER_FIXUP_1640;
            _RESERVED_IDENTIFIER_FIXUP_3780.x = _RESERVED_IDENTIFIER_FIXUP_1640 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3758 = _RESERVED_IDENTIFIER_FIXUP_3780;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1653 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3020 = _RESERVED_IDENTIFIER_FIXUP_3003;
            _RESERVED_IDENTIFIER_FIXUP_3020.y = _RESERVED_IDENTIFIER_FIXUP_1653;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3759;
            if (_RESERVED_IDENTIFIER_FIXUP_1653 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1662 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1672 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1674 = _RESERVED_IDENTIFIER_FIXUP_1672.x;
                _RESERVED_IDENTIFIER_FIXUP_3020.y = _RESERVED_IDENTIFIER_FIXUP_1674;
                _RESERVED_IDENTIFIER_FIXUP_3020.z = _RESERVED_IDENTIFIER_FIXUP_1672.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1682 = _RESERVED_IDENTIFIER_FIXUP_3020.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3099;
                _RESERVED_IDENTIFIER_FIXUP_3099.x = _RESERVED_IDENTIFIER_FIXUP_1682.x;
                _RESERVED_IDENTIFIER_FIXUP_3099.y = _RESERVED_IDENTIFIER_FIXUP_1682.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1689 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1693 = _RESERVED_IDENTIFIER_FIXUP_1689.y;
                _RESERVED_IDENTIFIER_FIXUP_3099.w = _RESERVED_IDENTIFIER_FIXUP_1693;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1662.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1662.w;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3099.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1693;
                float _RESERVED_IDENTIFIER_FIXUP_1704 = hdLod7(param_31, param_32).x + hdLod7(param_33, param_34).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3779 = vec4(_RESERVED_IDENTIFIER_FIXUP_1232, _RESERVED_IDENTIFIER_FIXUP_1674, _RESERVED_IDENTIFIER_FIXUP_1672.y, _RESERVED_IDENTIFIER_FIXUP_1704);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_3779.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3112;
                _RESERVED_IDENTIFIER_FIXUP_3112.x = _RESERVED_IDENTIFIER_FIXUP_1711.x;
                _RESERVED_IDENTIFIER_FIXUP_3112.y = _RESERVED_IDENTIFIER_FIXUP_1711.y;
                _RESERVED_IDENTIFIER_FIXUP_3112.w = _RESERVED_IDENTIFIER_FIXUP_1693;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3112.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1693;
                float _RESERVED_IDENTIFIER_FIXUP_1733 = _RESERVED_IDENTIFIER_FIXUP_1704 + hdLod7(param_35, param_36).x;
                _RESERVED_IDENTIFIER_FIXUP_3779.w = _RESERVED_IDENTIFIER_FIXUP_1733;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1740 = _RESERVED_IDENTIFIER_FIXUP_3779.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3125;
                _RESERVED_IDENTIFIER_FIXUP_3125.x = _RESERVED_IDENTIFIER_FIXUP_1740.x;
                _RESERVED_IDENTIFIER_FIXUP_3125.y = _RESERVED_IDENTIFIER_FIXUP_1740.y;
                _RESERVED_IDENTIFIER_FIXUP_3125.w = _RESERVED_IDENTIFIER_FIXUP_1693;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3125.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1693;
                float _RESERVED_IDENTIFIER_FIXUP_1762 = _RESERVED_IDENTIFIER_FIXUP_1733 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_3779.w = _RESERVED_IDENTIFIER_FIXUP_1762;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1769 = _RESERVED_IDENTIFIER_FIXUP_3779.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3138;
                _RESERVED_IDENTIFIER_FIXUP_3138.x = _RESERVED_IDENTIFIER_FIXUP_1769.x;
                _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_1769.y;
                _RESERVED_IDENTIFIER_FIXUP_3138.w = _RESERVED_IDENTIFIER_FIXUP_1693;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3138.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1693;
                float _RESERVED_IDENTIFIER_FIXUP_1791 = _RESERVED_IDENTIFIER_FIXUP_1762 + hdLod7(param_39, param_40).x;
                _RESERVED_IDENTIFIER_FIXUP_3779.y = _RESERVED_IDENTIFIER_FIXUP_1791;
                _RESERVED_IDENTIFIER_FIXUP_3779.x = _RESERVED_IDENTIFIER_FIXUP_1791 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3759 = _RESERVED_IDENTIFIER_FIXUP_3779;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1807 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1811 = _RESERVED_IDENTIFIER_FIXUP_1807.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1822 = vec4(_RESERVED_IDENTIFIER_FIXUP_1807.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1811).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3776 = vec4(_RESERVED_IDENTIFIER_FIXUP_1822 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1811);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1859 = _RESERVED_IDENTIFIER_FIXUP_1822 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3053 = _RESERVED_IDENTIFIER_FIXUP_3776;
                _RESERVED_IDENTIFIER_FIXUP_3053.x = _RESERVED_IDENTIFIER_FIXUP_1859.x;
                _RESERVED_IDENTIFIER_FIXUP_3053.y = _RESERVED_IDENTIFIER_FIXUP_1859.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1881 = _RESERVED_IDENTIFIER_FIXUP_1822 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3062 = _RESERVED_IDENTIFIER_FIXUP_3053;
                _RESERVED_IDENTIFIER_FIXUP_3062.x = _RESERVED_IDENTIFIER_FIXUP_1881.x;
                _RESERVED_IDENTIFIER_FIXUP_3062.y = _RESERVED_IDENTIFIER_FIXUP_1881.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1903 = _RESERVED_IDENTIFIER_FIXUP_1822 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3071 = _RESERVED_IDENTIFIER_FIXUP_3062;
                _RESERVED_IDENTIFIER_FIXUP_3071.x = _RESERVED_IDENTIFIER_FIXUP_1903.x;
                _RESERVED_IDENTIFIER_FIXUP_3071.y = _RESERVED_IDENTIFIER_FIXUP_1903.y;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_1822;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1811;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3776.xy;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1811;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3053.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1811;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3062.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1811;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3071.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_1811;
                float _RESERVED_IDENTIFIER_FIXUP_1918 = (((hdLod8(param_41, param_42).x + hdLod8(param_43, param_44).x) + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x;
                float _RESERVED_IDENTIFIER_FIXUP_1932 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1937 = (_RESERVED_IDENTIFIER_FIXUP_1918 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3759 = vec4((_RESERVED_IDENTIFIER_FIXUP_1932 * _RESERVED_IDENTIFIER_FIXUP_1937) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1932, _RESERVED_IDENTIFIER_FIXUP_1937, _RESERVED_IDENTIFIER_FIXUP_1918);
            }
            _RESERVED_IDENTIFIER_FIXUP_3758 = _RESERVED_IDENTIFIER_FIXUP_3759;
        }
        _RESERVED_IDENTIFIER_FIXUP_3757 = _RESERVED_IDENTIFIER_FIXUP_3758;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3329 = _RESERVED_IDENTIFIER_FIXUP_3757;
    _RESERVED_IDENTIFIER_FIXUP_3329.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1965 = _RESERVED_IDENTIFIER_FIXUP_1213.xyz * _RESERVED_IDENTIFIER_FIXUP_3329.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3331 = _RESERVED_IDENTIFIER_FIXUP_1213;
    _RESERVED_IDENTIFIER_FIXUP_3331.x = _RESERVED_IDENTIFIER_FIXUP_1965.x;
    _RESERVED_IDENTIFIER_FIXUP_3331.y = _RESERVED_IDENTIFIER_FIXUP_1965.y;
    _RESERVED_IDENTIFIER_FIXUP_3331.z = _RESERVED_IDENTIFIER_FIXUP_1965.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1976 = _RESERVED_IDENTIFIER_FIXUP_3331.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3755).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3337 = _RESERVED_IDENTIFIER_FIXUP_3331;
    _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_1976.x;
    _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_1976.y;
    _RESERVED_IDENTIFIER_FIXUP_3337.z = _RESERVED_IDENTIFIER_FIXUP_1976.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_3337.xyz + _RESERVED_IDENTIFIER_FIXUP_3337.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3343 = _RESERVED_IDENTIFIER_FIXUP_3337;
    _RESERVED_IDENTIFIER_FIXUP_3343.x = _RESERVED_IDENTIFIER_FIXUP_1987.x;
    _RESERVED_IDENTIFIER_FIXUP_3343.y = _RESERVED_IDENTIFIER_FIXUP_1987.y;
    _RESERVED_IDENTIFIER_FIXUP_3343.z = _RESERVED_IDENTIFIER_FIXUP_1987.z;
    _RESERVED_IDENTIFIER_FIXUP_3329.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3329.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3329.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2012 = (_RESERVED_IDENTIFIER_FIXUP_3329.yzw * _RESERVED_IDENTIFIER_FIXUP_3329.xxx) + _RESERVED_IDENTIFIER_FIXUP_3343.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_3343;
    _RESERVED_IDENTIFIER_FIXUP_3355.x = _RESERVED_IDENTIFIER_FIXUP_2012.x;
    _RESERVED_IDENTIFIER_FIXUP_3355.y = _RESERVED_IDENTIFIER_FIXUP_2012.y;
    _RESERVED_IDENTIFIER_FIXUP_3355.z = _RESERVED_IDENTIFIER_FIXUP_2012.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2025 = _RESERVED_IDENTIFIER_FIXUP_3355.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3361 = _RESERVED_IDENTIFIER_FIXUP_3355;
    _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_2025.x;
    _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_2025.y;
    _RESERVED_IDENTIFIER_FIXUP_3361.z = _RESERVED_IDENTIFIER_FIXUP_2025.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2080 = OptTex0( texcoord0.xyz);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2084 = hdTex1(param_51);
    vec2 param_52 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2088 = hdTex2(param_52);
    vec2 param_53 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2092 = hdTex3(param_53);
    float _RESERVED_IDENTIFIER_FIXUP_2096 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2092.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3375 = _RESERVED_IDENTIFIER_FIXUP_2092;
    _RESERVED_IDENTIFIER_FIXUP_3375.z = _RESERVED_IDENTIFIER_FIXUP_2096;
    _RESERVED_IDENTIFIER_FIXUP_3375.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2096;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2106 = _RESERVED_IDENTIFIER_FIXUP_2084 * _RESERVED_IDENTIFIER_FIXUP_3375.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2118 = (_RESERVED_IDENTIFIER_FIXUP_2088 * _RESERVED_IDENTIFIER_FIXUP_3375.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2080 * _RESERVED_IDENTIFIER_FIXUP_3375.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2106);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3382 = _RESERVED_IDENTIFIER_FIXUP_2106;
    _RESERVED_IDENTIFIER_FIXUP_3382.x = _RESERVED_IDENTIFIER_FIXUP_1220;
    float _RESERVED_IDENTIFIER_FIXUP_2131 = clamp((_RESERVED_IDENTIFIER_FIXUP_1220 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3382.x = _RESERVED_IDENTIFIER_FIXUP_2131;
    float _RESERVED_IDENTIFIER_FIXUP_2137 = ((-_RESERVED_IDENTIFIER_FIXUP_2131) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3382.x = _RESERVED_IDENTIFIER_FIXUP_2137;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3766;
    if (_RESERVED_IDENTIFIER_FIXUP_2137 != (-_RESERVED_IDENTIFIER_FIXUP_2137))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2149 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2149.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2149.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2155 = hdLod5(param_54, param_55);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2159 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3594 = _RESERVED_IDENTIFIER_FIXUP_2155;
        _RESERVED_IDENTIFIER_FIXUP_3594.y = _RESERVED_IDENTIFIER_FIXUP_2159.x;
        _RESERVED_IDENTIFIER_FIXUP_3594.z = _RESERVED_IDENTIFIER_FIXUP_2159.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2169 = _RESERVED_IDENTIFIER_FIXUP_3594.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3598;
        _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2169.x;
        _RESERVED_IDENTIFIER_FIXUP_3598.y = _RESERVED_IDENTIFIER_FIXUP_2169.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2176 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2180 = _RESERVED_IDENTIFIER_FIXUP_2176.y;
        _RESERVED_IDENTIFIER_FIXUP_3598.w = _RESERVED_IDENTIFIER_FIXUP_2180;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3598.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2180;
        float _RESERVED_IDENTIFIER_FIXUP_2191 = _RESERVED_IDENTIFIER_FIXUP_2155.x + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2191;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2198 = _RESERVED_IDENTIFIER_FIXUP_3594.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3611;
        _RESERVED_IDENTIFIER_FIXUP_3611.x = _RESERVED_IDENTIFIER_FIXUP_2198.x;
        _RESERVED_IDENTIFIER_FIXUP_3611.y = _RESERVED_IDENTIFIER_FIXUP_2198.y;
        _RESERVED_IDENTIFIER_FIXUP_3611.w = _RESERVED_IDENTIFIER_FIXUP_2180;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3611.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2180;
        float _RESERVED_IDENTIFIER_FIXUP_2220 = _RESERVED_IDENTIFIER_FIXUP_2191 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2220;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2227 = _RESERVED_IDENTIFIER_FIXUP_3594.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3624;
        _RESERVED_IDENTIFIER_FIXUP_3624.x = _RESERVED_IDENTIFIER_FIXUP_2227.x;
        _RESERVED_IDENTIFIER_FIXUP_3624.y = _RESERVED_IDENTIFIER_FIXUP_2227.y;
        _RESERVED_IDENTIFIER_FIXUP_3624.w = _RESERVED_IDENTIFIER_FIXUP_2180;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3624.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2180;
        float _RESERVED_IDENTIFIER_FIXUP_2249 = _RESERVED_IDENTIFIER_FIXUP_2220 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2249;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2256 = _RESERVED_IDENTIFIER_FIXUP_3594.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3637;
        _RESERVED_IDENTIFIER_FIXUP_3637.x = _RESERVED_IDENTIFIER_FIXUP_2256.x;
        _RESERVED_IDENTIFIER_FIXUP_3637.y = _RESERVED_IDENTIFIER_FIXUP_2256.y;
        _RESERVED_IDENTIFIER_FIXUP_3637.w = _RESERVED_IDENTIFIER_FIXUP_2180;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3637.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2180;
        float _RESERVED_IDENTIFIER_FIXUP_2278 = _RESERVED_IDENTIFIER_FIXUP_2249 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2278;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2285 = _RESERVED_IDENTIFIER_FIXUP_3594.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3650;
        _RESERVED_IDENTIFIER_FIXUP_3650.x = _RESERVED_IDENTIFIER_FIXUP_2285.x;
        _RESERVED_IDENTIFIER_FIXUP_3650.y = _RESERVED_IDENTIFIER_FIXUP_2285.y;
        _RESERVED_IDENTIFIER_FIXUP_3650.w = _RESERVED_IDENTIFIER_FIXUP_2180;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3650.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2180;
        float _RESERVED_IDENTIFIER_FIXUP_2307 = _RESERVED_IDENTIFIER_FIXUP_2278 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2307;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2314 = _RESERVED_IDENTIFIER_FIXUP_3594.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3663;
        _RESERVED_IDENTIFIER_FIXUP_3663.x = _RESERVED_IDENTIFIER_FIXUP_2314.x;
        _RESERVED_IDENTIFIER_FIXUP_3663.y = _RESERVED_IDENTIFIER_FIXUP_2314.y;
        _RESERVED_IDENTIFIER_FIXUP_3663.w = _RESERVED_IDENTIFIER_FIXUP_2180;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3663.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2180;
        float _RESERVED_IDENTIFIER_FIXUP_2336 = _RESERVED_IDENTIFIER_FIXUP_2307 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2336;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2343 = _RESERVED_IDENTIFIER_FIXUP_3594.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3676;
        _RESERVED_IDENTIFIER_FIXUP_3676.x = _RESERVED_IDENTIFIER_FIXUP_2343.x;
        _RESERVED_IDENTIFIER_FIXUP_3676.y = _RESERVED_IDENTIFIER_FIXUP_2343.y;
        _RESERVED_IDENTIFIER_FIXUP_3676.w = _RESERVED_IDENTIFIER_FIXUP_2180;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3676.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2180;
        float _RESERVED_IDENTIFIER_FIXUP_2365 = _RESERVED_IDENTIFIER_FIXUP_2336 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2365;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2372 = _RESERVED_IDENTIFIER_FIXUP_3594.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3689;
        _RESERVED_IDENTIFIER_FIXUP_3689.x = _RESERVED_IDENTIFIER_FIXUP_2372.x;
        _RESERVED_IDENTIFIER_FIXUP_3689.y = _RESERVED_IDENTIFIER_FIXUP_2372.y;
        _RESERVED_IDENTIFIER_FIXUP_3689.w = _RESERVED_IDENTIFIER_FIXUP_2180;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3689.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2180;
        float _RESERVED_IDENTIFIER_FIXUP_2394 = _RESERVED_IDENTIFIER_FIXUP_2365 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2394;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2394 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3766 = _RESERVED_IDENTIFIER_FIXUP_3594;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2407 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3382.y = _RESERVED_IDENTIFIER_FIXUP_2407;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3767;
        if (_RESERVED_IDENTIFIER_FIXUP_2407 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2416 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2426 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2428 = _RESERVED_IDENTIFIER_FIXUP_2426.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3534 = _RESERVED_IDENTIFIER_FIXUP_3382;
            _RESERVED_IDENTIFIER_FIXUP_3534.y = _RESERVED_IDENTIFIER_FIXUP_2428;
            _RESERVED_IDENTIFIER_FIXUP_3534.z = _RESERVED_IDENTIFIER_FIXUP_2426.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2436 = _RESERVED_IDENTIFIER_FIXUP_3534.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3538;
            _RESERVED_IDENTIFIER_FIXUP_3538.x = _RESERVED_IDENTIFIER_FIXUP_2436.x;
            _RESERVED_IDENTIFIER_FIXUP_3538.y = _RESERVED_IDENTIFIER_FIXUP_2436.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2443 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2447 = _RESERVED_IDENTIFIER_FIXUP_2443.y;
            _RESERVED_IDENTIFIER_FIXUP_3538.w = _RESERVED_IDENTIFIER_FIXUP_2447;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2416.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2416.w;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3538.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2447;
            float _RESERVED_IDENTIFIER_FIXUP_2458 = hdLod6(param_72, param_73).x + hdLod6(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3787 = vec4(_RESERVED_IDENTIFIER_FIXUP_2137, _RESERVED_IDENTIFIER_FIXUP_2428, _RESERVED_IDENTIFIER_FIXUP_2426.y, _RESERVED_IDENTIFIER_FIXUP_2458);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2465 = _RESERVED_IDENTIFIER_FIXUP_3787.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3551;
            _RESERVED_IDENTIFIER_FIXUP_3551.x = _RESERVED_IDENTIFIER_FIXUP_2465.x;
            _RESERVED_IDENTIFIER_FIXUP_3551.y = _RESERVED_IDENTIFIER_FIXUP_2465.y;
            _RESERVED_IDENTIFIER_FIXUP_3551.w = _RESERVED_IDENTIFIER_FIXUP_2447;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3551.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2447;
            float _RESERVED_IDENTIFIER_FIXUP_2487 = _RESERVED_IDENTIFIER_FIXUP_2458 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3787.w = _RESERVED_IDENTIFIER_FIXUP_2487;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2494 = _RESERVED_IDENTIFIER_FIXUP_3787.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3564;
            _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2494.x;
            _RESERVED_IDENTIFIER_FIXUP_3564.y = _RESERVED_IDENTIFIER_FIXUP_2494.y;
            _RESERVED_IDENTIFIER_FIXUP_3564.w = _RESERVED_IDENTIFIER_FIXUP_2447;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3564.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2447;
            float _RESERVED_IDENTIFIER_FIXUP_2516 = _RESERVED_IDENTIFIER_FIXUP_2487 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3787.w = _RESERVED_IDENTIFIER_FIXUP_2516;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2523 = _RESERVED_IDENTIFIER_FIXUP_3787.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3577;
            _RESERVED_IDENTIFIER_FIXUP_3577.x = _RESERVED_IDENTIFIER_FIXUP_2523.x;
            _RESERVED_IDENTIFIER_FIXUP_3577.y = _RESERVED_IDENTIFIER_FIXUP_2523.y;
            _RESERVED_IDENTIFIER_FIXUP_3577.w = _RESERVED_IDENTIFIER_FIXUP_2447;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3577.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2447;
            float _RESERVED_IDENTIFIER_FIXUP_2545 = _RESERVED_IDENTIFIER_FIXUP_2516 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3787.y = _RESERVED_IDENTIFIER_FIXUP_2545;
            _RESERVED_IDENTIFIER_FIXUP_3787.x = _RESERVED_IDENTIFIER_FIXUP_2545 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3767 = _RESERVED_IDENTIFIER_FIXUP_3787;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2558 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_3382;
            _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2558;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3768;
            if (_RESERVED_IDENTIFIER_FIXUP_2558 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2567 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2577 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2579 = _RESERVED_IDENTIFIER_FIXUP_2577.x;
                _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2579;
                _RESERVED_IDENTIFIER_FIXUP_3399.z = _RESERVED_IDENTIFIER_FIXUP_2577.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2587 = _RESERVED_IDENTIFIER_FIXUP_3399.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3478;
                _RESERVED_IDENTIFIER_FIXUP_3478.x = _RESERVED_IDENTIFIER_FIXUP_2587.x;
                _RESERVED_IDENTIFIER_FIXUP_3478.y = _RESERVED_IDENTIFIER_FIXUP_2587.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2594 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2598 = _RESERVED_IDENTIFIER_FIXUP_2594.y;
                _RESERVED_IDENTIFIER_FIXUP_3478.w = _RESERVED_IDENTIFIER_FIXUP_2598;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2567.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2567.w;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3478.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2598;
                float _RESERVED_IDENTIFIER_FIXUP_2609 = hdLod7(param_82, param_83).x + hdLod7(param_84, param_85).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3786 = vec4(_RESERVED_IDENTIFIER_FIXUP_2137, _RESERVED_IDENTIFIER_FIXUP_2579, _RESERVED_IDENTIFIER_FIXUP_2577.y, _RESERVED_IDENTIFIER_FIXUP_2609);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2616 = _RESERVED_IDENTIFIER_FIXUP_3786.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3491;
                _RESERVED_IDENTIFIER_FIXUP_3491.x = _RESERVED_IDENTIFIER_FIXUP_2616.x;
                _RESERVED_IDENTIFIER_FIXUP_3491.y = _RESERVED_IDENTIFIER_FIXUP_2616.y;
                _RESERVED_IDENTIFIER_FIXUP_3491.w = _RESERVED_IDENTIFIER_FIXUP_2598;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3491.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2598;
                float _RESERVED_IDENTIFIER_FIXUP_2638 = _RESERVED_IDENTIFIER_FIXUP_2609 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3786.w = _RESERVED_IDENTIFIER_FIXUP_2638;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2645 = _RESERVED_IDENTIFIER_FIXUP_3786.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3504;
                _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2645.x;
                _RESERVED_IDENTIFIER_FIXUP_3504.y = _RESERVED_IDENTIFIER_FIXUP_2645.y;
                _RESERVED_IDENTIFIER_FIXUP_3504.w = _RESERVED_IDENTIFIER_FIXUP_2598;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3504.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2598;
                float _RESERVED_IDENTIFIER_FIXUP_2667 = _RESERVED_IDENTIFIER_FIXUP_2638 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3786.w = _RESERVED_IDENTIFIER_FIXUP_2667;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2674 = _RESERVED_IDENTIFIER_FIXUP_3786.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3517;
                _RESERVED_IDENTIFIER_FIXUP_3517.x = _RESERVED_IDENTIFIER_FIXUP_2674.x;
                _RESERVED_IDENTIFIER_FIXUP_3517.y = _RESERVED_IDENTIFIER_FIXUP_2674.y;
                _RESERVED_IDENTIFIER_FIXUP_3517.w = _RESERVED_IDENTIFIER_FIXUP_2598;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3517.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2598;
                float _RESERVED_IDENTIFIER_FIXUP_2696 = _RESERVED_IDENTIFIER_FIXUP_2667 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_3786.y = _RESERVED_IDENTIFIER_FIXUP_2696;
                _RESERVED_IDENTIFIER_FIXUP_3786.x = _RESERVED_IDENTIFIER_FIXUP_2696 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3768 = _RESERVED_IDENTIFIER_FIXUP_3786;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2712 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2716 = _RESERVED_IDENTIFIER_FIXUP_2712.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2727 = vec4(_RESERVED_IDENTIFIER_FIXUP_2712.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2716).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3783 = vec4(_RESERVED_IDENTIFIER_FIXUP_2727 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2716);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2764 = _RESERVED_IDENTIFIER_FIXUP_2727 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_3783;
                _RESERVED_IDENTIFIER_FIXUP_3432.x = _RESERVED_IDENTIFIER_FIXUP_2764.x;
                _RESERVED_IDENTIFIER_FIXUP_3432.y = _RESERVED_IDENTIFIER_FIXUP_2764.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2786 = _RESERVED_IDENTIFIER_FIXUP_2727 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3441 = _RESERVED_IDENTIFIER_FIXUP_3432;
                _RESERVED_IDENTIFIER_FIXUP_3441.x = _RESERVED_IDENTIFIER_FIXUP_2786.x;
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_2786.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2808 = _RESERVED_IDENTIFIER_FIXUP_2727 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3450 = _RESERVED_IDENTIFIER_FIXUP_3441;
                _RESERVED_IDENTIFIER_FIXUP_3450.x = _RESERVED_IDENTIFIER_FIXUP_2808.x;
                _RESERVED_IDENTIFIER_FIXUP_3450.y = _RESERVED_IDENTIFIER_FIXUP_2808.y;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_2727;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2716;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3783.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2716;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3432.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2716;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3441.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2716;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3450.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2716;
                float _RESERVED_IDENTIFIER_FIXUP_2823 = (((hdLod8(param_92, param_93).x + hdLod8(param_94, param_95).x) + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x;
                float _RESERVED_IDENTIFIER_FIXUP_2837 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2842 = (_RESERVED_IDENTIFIER_FIXUP_2823 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3768 = vec4((_RESERVED_IDENTIFIER_FIXUP_2837 * _RESERVED_IDENTIFIER_FIXUP_2842) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2837, _RESERVED_IDENTIFIER_FIXUP_2842, _RESERVED_IDENTIFIER_FIXUP_2823);
            }
            _RESERVED_IDENTIFIER_FIXUP_3767 = _RESERVED_IDENTIFIER_FIXUP_3768;
        }
        _RESERVED_IDENTIFIER_FIXUP_3766 = _RESERVED_IDENTIFIER_FIXUP_3767;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2857 = (_RESERVED_IDENTIFIER_FIXUP_3766.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3706 = _RESERVED_IDENTIFIER_FIXUP_3766;
    _RESERVED_IDENTIFIER_FIXUP_3706.y = _RESERVED_IDENTIFIER_FIXUP_2857;
    _RESERVED_IDENTIFIER_FIXUP_3706.y = _RESERVED_IDENTIFIER_FIXUP_2857;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2870 = _RESERVED_IDENTIFIER_FIXUP_2118.xyz * _RESERVED_IDENTIFIER_FIXUP_3706.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3712 = _RESERVED_IDENTIFIER_FIXUP_2118;
    _RESERVED_IDENTIFIER_FIXUP_3712.x = _RESERVED_IDENTIFIER_FIXUP_2870.x;
    _RESERVED_IDENTIFIER_FIXUP_3712.y = _RESERVED_IDENTIFIER_FIXUP_2870.y;
    _RESERVED_IDENTIFIER_FIXUP_3712.z = _RESERVED_IDENTIFIER_FIXUP_2870.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2881 = _RESERVED_IDENTIFIER_FIXUP_3712.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3718 = _RESERVED_IDENTIFIER_FIXUP_3712;
    _RESERVED_IDENTIFIER_FIXUP_3718.x = _RESERVED_IDENTIFIER_FIXUP_2881.x;
    _RESERVED_IDENTIFIER_FIXUP_3718.y = _RESERVED_IDENTIFIER_FIXUP_2881.y;
    _RESERVED_IDENTIFIER_FIXUP_3718.z = _RESERVED_IDENTIFIER_FIXUP_2881.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2892 = _RESERVED_IDENTIFIER_FIXUP_3718.xyz + _RESERVED_IDENTIFIER_FIXUP_3718.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3724 = _RESERVED_IDENTIFIER_FIXUP_3718;
    _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2892.x;
    _RESERVED_IDENTIFIER_FIXUP_3724.y = _RESERVED_IDENTIFIER_FIXUP_2892.y;
    _RESERVED_IDENTIFIER_FIXUP_3724.z = _RESERVED_IDENTIFIER_FIXUP_2892.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2903 = _RESERVED_IDENTIFIER_FIXUP_3724.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3706.y = _RESERVED_IDENTIFIER_FIXUP_2903.x;
    _RESERVED_IDENTIFIER_FIXUP_3706.z = _RESERVED_IDENTIFIER_FIXUP_2903.y;
    _RESERVED_IDENTIFIER_FIXUP_3706.w = _RESERVED_IDENTIFIER_FIXUP_2903.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2917 = (_RESERVED_IDENTIFIER_FIXUP_3706.yzw * _RESERVED_IDENTIFIER_FIXUP_3706.xxx) + _RESERVED_IDENTIFIER_FIXUP_3724.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3736 = _RESERVED_IDENTIFIER_FIXUP_3724;
    _RESERVED_IDENTIFIER_FIXUP_3736.x = _RESERVED_IDENTIFIER_FIXUP_2917.x;
    _RESERVED_IDENTIFIER_FIXUP_3736.y = _RESERVED_IDENTIFIER_FIXUP_2917.y;
    _RESERVED_IDENTIFIER_FIXUP_3736.z = _RESERVED_IDENTIFIER_FIXUP_2917.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2930 = _RESERVED_IDENTIFIER_FIXUP_3736.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3736;
    _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2930.x;
    _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2930.y;
    _RESERVED_IDENTIFIER_FIXUP_3742.z = _RESERVED_IDENTIFIER_FIXUP_2930.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3742.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1034 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1043;
    if (_RESERVED_IDENTIFIER_FIXUP_1034)
    {
        _RESERVED_IDENTIFIER_FIXUP_1043 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1043 = _RESERVED_IDENTIFIER_FIXUP_1034;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1043)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1080 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3361.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1107 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2989;
    if (_RESERVED_IDENTIFIER_FIXUP_1080 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2989 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1080), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1107);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2989 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1107);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2989;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2857);
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
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r1.xy;
        float param_4 = r1.w;
        r1 = hdLod5(param_3, param_4);
        vec2 hdB160 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB160.x;
        r1.z = hdB160.y;
        vec2 hdB181 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB181.x;
        r2.y = hdB181.y;
        vec2 hdB189 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB189.x;
        r2.w = hdB189.y;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r1.x += r2.x;
        vec2 hdB212 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB212.x;
        r2.y = hdB212.y;
        vec2 hdB219 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB219.x;
        r2.w = hdB219.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.x += r2.x;
        vec2 hdB242 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB242.x;
        r2.y = hdB242.y;
        vec2 hdB249 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB249.x;
        r2.w = hdB249.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.x += r2.x;
        vec2 hdB272 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB272.x;
        r2.y = hdB272.y;
        vec2 hdB279 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB279.x;
        r2.w = hdB279.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.x += r2.x;
        vec2 hdB302 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB302.x;
        r2.y = hdB302.y;
        vec2 hdB309 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB309.x;
        r2.w = hdB309.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.x += r2.x;
        vec2 hdB332 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB332.x;
        r2.y = hdB332.y;
        vec2 hdB339 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB339.x;
        r2.w = hdB339.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r1.x += r2.x;
        vec2 hdB362 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB362.x;
        r2.y = hdB362.y;
        vec2 hdB369 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB369.x;
        r2.w = hdB369.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r1.x += r2.x;
        vec2 hdB392 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB392.x;
        r2.y = hdB392.y;
        vec2 hdB399 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB399.x;
        r2.w = hdB399.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod5(param_19, param_20);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r2.xy;
            float param_22 = r2.w;
            r2 = hdLod6(param_21, param_22);
            vec2 hdB449 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB449.x;
            r1.z = hdB449.y;
            vec2 hdB459 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB459.x;
            r3.y = hdB459.y;
            vec2 hdB466 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB466.x;
            r3.w = hdB466.y;
            vec2 param_23 = r3.xy;
            float param_24 = r3.w;
            r3 = hdLod6(param_23, param_24);
            r1.w = r2.x + r3.x;
            vec2 hdB488 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB488.x;
            r2.y = hdB488.y;
            vec2 hdB495 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB495.x;
            r2.w = hdB495.y;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
            r1.w += r2.x;
            vec2 hdB517 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB517.x;
            r2.y = hdB517.y;
            vec2 hdB524 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB524.x;
            r2.w = hdB524.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r1.w += r2.x;
            vec2 hdB546 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB546.x;
            r2.y = hdB546.y;
            vec2 hdB553 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB553.x;
            r2.w = hdB553.y;
            vec2 param_29 = r2.xy;
            float param_30 = r2.w;
            r2 = hdLod6(param_29, param_30);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r2.xy;
                float param_32 = r2.w;
                r2 = hdLod7(param_31, param_32);
                vec2 hdB603 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB603.x;
                r1.z = hdB603.y;
                vec2 hdB613 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB613.x;
                r3.y = hdB613.y;
                vec2 hdB620 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB620.x;
                r3.w = hdB620.y;
                vec2 param_33 = r3.xy;
                float param_34 = r3.w;
                r3 = hdLod7(param_33, param_34);
                r1.w = r2.x + r3.x;
                vec2 hdB642 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB642.x;
                r2.y = hdB642.y;
                vec2 hdB649 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB649.x;
                r2.w = hdB649.y;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
                r1.w += r2.x;
                vec2 hdB671 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB671.x;
                r2.y = hdB671.y;
                vec2 hdB678 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB678.x;
                r2.w = hdB678.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r1.w += r2.x;
                vec2 hdB700 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB700.x;
                r2.y = hdB700.y;
                vec2 hdB707 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB707.x;
                r2.w = hdB707.y;
                vec2 param_39 = r2.xy;
                float param_40 = r2.w;
                r2 = hdLod7(param_39, param_40);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 hdB739 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB739.x;
                r2.w = hdB739.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r3 = hdLod8(param_41, param_42);
                vec2 hdB764 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB764.x;
                r4.y = hdB764.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r5 = hdLod8(param_43, param_44);
                r1.w = r3.x + r5.x;
                vec2 hdB792 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB792.x;
                r4.y = hdB792.y;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r3 = hdLod8(param_45, param_46);
                r1.w += r3.x;
                vec2 hdB814 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB814.x;
                r4.y = hdB814.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r3 = hdLod8(param_47, param_48);
                r1.w += r3.x;
                vec2 hdB836 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB836.x;
                r4.y = hdB836.y;
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
    vec4 hdB889 = r0;
    vec3 hdB893 = hdB889.xyz * r1.yyy;
    r0.x = hdB893.x;
    r0.y = hdB893.y;
    r0.z = hdB893.z;
    vec4 hdB900 = r0;
    vec3 hdB904 = hdB900.xyz * v0.xyz;
    r0.x = hdB904.x;
    r0.y = hdB904.y;
    r0.z = hdB904.z;
    vec4 hdB911 = r0;
    vec4 hdB913 = r0;
    vec3 hdB915 = hdB911.xyz + hdB913.xyz;
    r0.x = hdB915.x;
    r0.y = hdB915.y;
    r0.z = hdB915.z;
    vec3 hdB926 = r0.www * v1.xyz;
    r1.y = hdB926.x;
    r1.z = hdB926.y;
    r1.w = hdB926.z;
    vec4 hdB938 = r0;
    vec3 hdB940 = (r1.yzw * r1.xxx) + hdB938.xyz;
    r0.x = hdB940.x;
    r0.y = hdB940.y;
    r0.z = hdB940.z;
    vec4 hdB947 = r0;
    vec3 hdB954 = hdB947.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB954.x;
    r0.y = hdB954.y;
    r0.z = hdB954.z;
    vec3 hdB969 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB969.x;
    oC0.y = hdB969.y;
    oC0.z = hdB969.z;
    oC0.w = 1.0;
    bool hdB982 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB990;
    if (hdB982)
    {
        hdB990 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB990 = hdB982;
    }
    if (hdB990)
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
    bool _3419 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3429;
    if (_3419)
    {
        _3429 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3429 = _3419;
    }
    if (_3429)
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
        bool _3454 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3469;
        if (!_3454)
        {
            _3469 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3469 = _3454;
        }
        if (_3469)
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
