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
float _RESERVED_IDENTIFIER_FIXUP_3900;
vec4 _RESERVED_IDENTIFIER_FIXUP_3901;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1206 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1210 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1214 = hdTex2(param_2);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1218 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3097 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3097.x = _RESERVED_IDENTIFIER_FIXUP_1218.x;
    float _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1218.y;
    _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1222;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1224 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3900).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1227 = _RESERVED_IDENTIFIER_FIXUP_1224 + _RESERVED_IDENTIFIER_FIXUP_1224;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3101 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3101.x = _RESERVED_IDENTIFIER_FIXUP_1227.x;
    _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1227.y;
    _RESERVED_IDENTIFIER_FIXUP_3101.z = _RESERVED_IDENTIFIER_FIXUP_1227.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_1206.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_1235 * _RESERVED_IDENTIFIER_FIXUP_3101.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3107;
    _RESERVED_IDENTIFIER_FIXUP_3107.x = _RESERVED_IDENTIFIER_FIXUP_1238.x;
    _RESERVED_IDENTIFIER_FIXUP_3107.y = _RESERVED_IDENTIFIER_FIXUP_1238.y;
    _RESERVED_IDENTIFIER_FIXUP_3107.z = _RESERVED_IDENTIFIER_FIXUP_1238.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1252 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3097.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1253 = mix(_RESERVED_IDENTIFIER_FIXUP_3107.xyz, _RESERVED_IDENTIFIER_FIXUP_1235, _RESERVED_IDENTIFIER_FIXUP_1252);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3113 = _RESERVED_IDENTIFIER_FIXUP_1206;
    _RESERVED_IDENTIFIER_FIXUP_3113.x = _RESERVED_IDENTIFIER_FIXUP_1253.x;
    _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1253.y;
    _RESERVED_IDENTIFIER_FIXUP_3113.z = _RESERVED_IDENTIFIER_FIXUP_1253.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_1210.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_1261 * _RESERVED_IDENTIFIER_FIXUP_3101.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3926 = vec4(_RESERVED_IDENTIFIER_FIXUP_1264.x, _RESERVED_IDENTIFIER_FIXUP_1222, _RESERVED_IDENTIFIER_FIXUP_1264.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1279 = mix(_RESERVED_IDENTIFIER_FIXUP_3926.xzw, _RESERVED_IDENTIFIER_FIXUP_1261, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3926.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3125 = _RESERVED_IDENTIFIER_FIXUP_1210;
    _RESERVED_IDENTIFIER_FIXUP_3125.x = _RESERVED_IDENTIFIER_FIXUP_1279.x;
    _RESERVED_IDENTIFIER_FIXUP_3125.y = _RESERVED_IDENTIFIER_FIXUP_1279.y;
    _RESERVED_IDENTIFIER_FIXUP_3125.z = _RESERVED_IDENTIFIER_FIXUP_1279.z;
    float _RESERVED_IDENTIFIER_FIXUP_1289 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1214.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3131 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_3131.y = _RESERVED_IDENTIFIER_FIXUP_1289;
    _RESERVED_IDENTIFIER_FIXUP_3131.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1289;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_3131.xxxx * _RESERVED_IDENTIFIER_FIXUP_3125;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1305 = (_RESERVED_IDENTIFIER_FIXUP_3113 * _RESERVED_IDENTIFIER_FIXUP_3131.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1299;
    float _RESERVED_IDENTIFIER_FIXUP_1312 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3138 = _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_3138.x = _RESERVED_IDENTIFIER_FIXUP_1312;
    float _RESERVED_IDENTIFIER_FIXUP_1318 = clamp((_RESERVED_IDENTIFIER_FIXUP_1312 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3138.x = _RESERVED_IDENTIFIER_FIXUP_1318;
    float _RESERVED_IDENTIFIER_FIXUP_1324 = ((-_RESERVED_IDENTIFIER_FIXUP_1318) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3138.x = _RESERVED_IDENTIFIER_FIXUP_1324;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3905;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3902;
    if (_RESERVED_IDENTIFIER_FIXUP_1324 != (-_RESERVED_IDENTIFIER_FIXUP_1324))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1336 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1336.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1336.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1342 = hdLod5(param_3, param_4);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1346 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3350 = _RESERVED_IDENTIFIER_FIXUP_1342;
        _RESERVED_IDENTIFIER_FIXUP_3350.y = _RESERVED_IDENTIFIER_FIXUP_1346.x;
        _RESERVED_IDENTIFIER_FIXUP_3350.z = _RESERVED_IDENTIFIER_FIXUP_1346.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1356 = _RESERVED_IDENTIFIER_FIXUP_3350.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3354;
        _RESERVED_IDENTIFIER_FIXUP_3354.x = _RESERVED_IDENTIFIER_FIXUP_1356.x;
        _RESERVED_IDENTIFIER_FIXUP_3354.y = _RESERVED_IDENTIFIER_FIXUP_1356.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1363 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_1363.y;
        _RESERVED_IDENTIFIER_FIXUP_3354.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3354.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1378 = _RESERVED_IDENTIFIER_FIXUP_1342.x + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_1378;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1385 = _RESERVED_IDENTIFIER_FIXUP_3350.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3367;
        _RESERVED_IDENTIFIER_FIXUP_3367.x = _RESERVED_IDENTIFIER_FIXUP_1385.x;
        _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_1385.y;
        _RESERVED_IDENTIFIER_FIXUP_3367.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3367.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_1378 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_1407;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1414 = _RESERVED_IDENTIFIER_FIXUP_3350.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3380;
        _RESERVED_IDENTIFIER_FIXUP_3380.x = _RESERVED_IDENTIFIER_FIXUP_1414.x;
        _RESERVED_IDENTIFIER_FIXUP_3380.y = _RESERVED_IDENTIFIER_FIXUP_1414.y;
        _RESERVED_IDENTIFIER_FIXUP_3380.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3380.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1436 = _RESERVED_IDENTIFIER_FIXUP_1407 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_1436;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1443 = _RESERVED_IDENTIFIER_FIXUP_3350.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3393;
        _RESERVED_IDENTIFIER_FIXUP_3393.x = _RESERVED_IDENTIFIER_FIXUP_1443.x;
        _RESERVED_IDENTIFIER_FIXUP_3393.y = _RESERVED_IDENTIFIER_FIXUP_1443.y;
        _RESERVED_IDENTIFIER_FIXUP_3393.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3393.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1465 = _RESERVED_IDENTIFIER_FIXUP_1436 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_1465;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1472 = _RESERVED_IDENTIFIER_FIXUP_3350.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3406;
        _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_1472.x;
        _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_1472.y;
        _RESERVED_IDENTIFIER_FIXUP_3406.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3406.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1494 = _RESERVED_IDENTIFIER_FIXUP_1465 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_1494;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1501 = _RESERVED_IDENTIFIER_FIXUP_3350.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3419;
        _RESERVED_IDENTIFIER_FIXUP_3419.x = _RESERVED_IDENTIFIER_FIXUP_1501.x;
        _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_1501.y;
        _RESERVED_IDENTIFIER_FIXUP_3419.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3419.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_1494 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_1523;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_3350.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3432;
        _RESERVED_IDENTIFIER_FIXUP_3432.x = _RESERVED_IDENTIFIER_FIXUP_1530.x;
        _RESERVED_IDENTIFIER_FIXUP_3432.y = _RESERVED_IDENTIFIER_FIXUP_1530.y;
        _RESERVED_IDENTIFIER_FIXUP_3432.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3432.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1552 = _RESERVED_IDENTIFIER_FIXUP_1523 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_1552;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1559 = _RESERVED_IDENTIFIER_FIXUP_3350.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3445;
        _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_1559.x;
        _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_1559.y;
        _RESERVED_IDENTIFIER_FIXUP_3445.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3445.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1576 = hdLod5(param_19, param_20);
        float _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_1552 + _RESERVED_IDENTIFIER_FIXUP_1576.x;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_1581;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_1581 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3905 = _RESERVED_IDENTIFIER_FIXUP_1576;
        _RESERVED_IDENTIFIER_FIXUP_3902 = _RESERVED_IDENTIFIER_FIXUP_3350;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1594 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_1594;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3906;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3903;
        if (_RESERVED_IDENTIFIER_FIXUP_1594 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1603 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1613 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1615 = _RESERVED_IDENTIFIER_FIXUP_1613.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3290 = _RESERVED_IDENTIFIER_FIXUP_3138;
            _RESERVED_IDENTIFIER_FIXUP_3290.y = _RESERVED_IDENTIFIER_FIXUP_1615;
            _RESERVED_IDENTIFIER_FIXUP_3290.z = _RESERVED_IDENTIFIER_FIXUP_1613.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1623 = _RESERVED_IDENTIFIER_FIXUP_3290.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3294;
            _RESERVED_IDENTIFIER_FIXUP_3294.x = _RESERVED_IDENTIFIER_FIXUP_1623.x;
            _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_1623.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1630 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1634 = _RESERVED_IDENTIFIER_FIXUP_1630.y;
            _RESERVED_IDENTIFIER_FIXUP_3294.w = _RESERVED_IDENTIFIER_FIXUP_1634;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1603.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1603.w;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3294.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1634;
            float _RESERVED_IDENTIFIER_FIXUP_1645 = hdLod6(param_21, param_22).x + hdLod6(param_23, param_24).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3932 = vec4(_RESERVED_IDENTIFIER_FIXUP_1324, _RESERVED_IDENTIFIER_FIXUP_1615, _RESERVED_IDENTIFIER_FIXUP_1613.y, _RESERVED_IDENTIFIER_FIXUP_1645);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1652 = _RESERVED_IDENTIFIER_FIXUP_3932.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3307;
            _RESERVED_IDENTIFIER_FIXUP_3307.x = _RESERVED_IDENTIFIER_FIXUP_1652.x;
            _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_1652.y;
            _RESERVED_IDENTIFIER_FIXUP_3307.w = _RESERVED_IDENTIFIER_FIXUP_1634;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3307.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1634;
            float _RESERVED_IDENTIFIER_FIXUP_1674 = _RESERVED_IDENTIFIER_FIXUP_1645 + hdLod6(param_25, param_26).x;
            _RESERVED_IDENTIFIER_FIXUP_3932.w = _RESERVED_IDENTIFIER_FIXUP_1674;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1681 = _RESERVED_IDENTIFIER_FIXUP_3932.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3320;
            _RESERVED_IDENTIFIER_FIXUP_3320.x = _RESERVED_IDENTIFIER_FIXUP_1681.x;
            _RESERVED_IDENTIFIER_FIXUP_3320.y = _RESERVED_IDENTIFIER_FIXUP_1681.y;
            _RESERVED_IDENTIFIER_FIXUP_3320.w = _RESERVED_IDENTIFIER_FIXUP_1634;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3320.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1634;
            float _RESERVED_IDENTIFIER_FIXUP_1703 = _RESERVED_IDENTIFIER_FIXUP_1674 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_3932.w = _RESERVED_IDENTIFIER_FIXUP_1703;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1710 = _RESERVED_IDENTIFIER_FIXUP_3932.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3333;
            _RESERVED_IDENTIFIER_FIXUP_3333.x = _RESERVED_IDENTIFIER_FIXUP_1710.x;
            _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_1710.y;
            _RESERVED_IDENTIFIER_FIXUP_3333.w = _RESERVED_IDENTIFIER_FIXUP_1634;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3333.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1634;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1727 = hdLod6(param_29, param_30);
            float _RESERVED_IDENTIFIER_FIXUP_1732 = _RESERVED_IDENTIFIER_FIXUP_1703 + _RESERVED_IDENTIFIER_FIXUP_1727.x;
            _RESERVED_IDENTIFIER_FIXUP_3932.y = _RESERVED_IDENTIFIER_FIXUP_1732;
            _RESERVED_IDENTIFIER_FIXUP_3932.x = _RESERVED_IDENTIFIER_FIXUP_1732 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3906 = _RESERVED_IDENTIFIER_FIXUP_1727;
            _RESERVED_IDENTIFIER_FIXUP_3903 = _RESERVED_IDENTIFIER_FIXUP_3932;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1745 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3155 = _RESERVED_IDENTIFIER_FIXUP_3138;
            _RESERVED_IDENTIFIER_FIXUP_3155.y = _RESERVED_IDENTIFIER_FIXUP_1745;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3907;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3904;
            if (_RESERVED_IDENTIFIER_FIXUP_1745 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1754 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1764 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1766 = _RESERVED_IDENTIFIER_FIXUP_1764.x;
                _RESERVED_IDENTIFIER_FIXUP_3155.y = _RESERVED_IDENTIFIER_FIXUP_1766;
                _RESERVED_IDENTIFIER_FIXUP_3155.z = _RESERVED_IDENTIFIER_FIXUP_1764.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1774 = _RESERVED_IDENTIFIER_FIXUP_3155.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3234;
                _RESERVED_IDENTIFIER_FIXUP_3234.x = _RESERVED_IDENTIFIER_FIXUP_1774.x;
                _RESERVED_IDENTIFIER_FIXUP_3234.y = _RESERVED_IDENTIFIER_FIXUP_1774.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1781 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1785 = _RESERVED_IDENTIFIER_FIXUP_1781.y;
                _RESERVED_IDENTIFIER_FIXUP_3234.w = _RESERVED_IDENTIFIER_FIXUP_1785;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1754.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1754.w;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3234.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1785;
                float _RESERVED_IDENTIFIER_FIXUP_1796 = hdLod7(param_31, param_32).x + hdLod7(param_33, param_34).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3931 = vec4(_RESERVED_IDENTIFIER_FIXUP_1324, _RESERVED_IDENTIFIER_FIXUP_1766, _RESERVED_IDENTIFIER_FIXUP_1764.y, _RESERVED_IDENTIFIER_FIXUP_1796);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1803 = _RESERVED_IDENTIFIER_FIXUP_3931.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3247;
                _RESERVED_IDENTIFIER_FIXUP_3247.x = _RESERVED_IDENTIFIER_FIXUP_1803.x;
                _RESERVED_IDENTIFIER_FIXUP_3247.y = _RESERVED_IDENTIFIER_FIXUP_1803.y;
                _RESERVED_IDENTIFIER_FIXUP_3247.w = _RESERVED_IDENTIFIER_FIXUP_1785;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3247.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1785;
                float _RESERVED_IDENTIFIER_FIXUP_1825 = _RESERVED_IDENTIFIER_FIXUP_1796 + hdLod7(param_35, param_36).x;
                _RESERVED_IDENTIFIER_FIXUP_3931.w = _RESERVED_IDENTIFIER_FIXUP_1825;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1832 = _RESERVED_IDENTIFIER_FIXUP_3931.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3260;
                _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_1832.x;
                _RESERVED_IDENTIFIER_FIXUP_3260.y = _RESERVED_IDENTIFIER_FIXUP_1832.y;
                _RESERVED_IDENTIFIER_FIXUP_3260.w = _RESERVED_IDENTIFIER_FIXUP_1785;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3260.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1785;
                float _RESERVED_IDENTIFIER_FIXUP_1854 = _RESERVED_IDENTIFIER_FIXUP_1825 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_3931.w = _RESERVED_IDENTIFIER_FIXUP_1854;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1861 = _RESERVED_IDENTIFIER_FIXUP_3931.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3273;
                _RESERVED_IDENTIFIER_FIXUP_3273.x = _RESERVED_IDENTIFIER_FIXUP_1861.x;
                _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1861.y;
                _RESERVED_IDENTIFIER_FIXUP_3273.w = _RESERVED_IDENTIFIER_FIXUP_1785;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3273.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1785;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1878 = hdLod7(param_39, param_40);
                float _RESERVED_IDENTIFIER_FIXUP_1883 = _RESERVED_IDENTIFIER_FIXUP_1854 + _RESERVED_IDENTIFIER_FIXUP_1878.x;
                _RESERVED_IDENTIFIER_FIXUP_3931.y = _RESERVED_IDENTIFIER_FIXUP_1883;
                _RESERVED_IDENTIFIER_FIXUP_3931.x = _RESERVED_IDENTIFIER_FIXUP_1883 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3907 = _RESERVED_IDENTIFIER_FIXUP_1878;
                _RESERVED_IDENTIFIER_FIXUP_3904 = _RESERVED_IDENTIFIER_FIXUP_3931;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1899 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1903 = _RESERVED_IDENTIFIER_FIXUP_1899.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1914 = vec4(_RESERVED_IDENTIFIER_FIXUP_1899.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1903).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3928 = vec4(_RESERVED_IDENTIFIER_FIXUP_1914 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1903);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1951 = _RESERVED_IDENTIFIER_FIXUP_1914 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3188 = _RESERVED_IDENTIFIER_FIXUP_3928;
                _RESERVED_IDENTIFIER_FIXUP_3188.x = _RESERVED_IDENTIFIER_FIXUP_1951.x;
                _RESERVED_IDENTIFIER_FIXUP_3188.y = _RESERVED_IDENTIFIER_FIXUP_1951.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1973 = _RESERVED_IDENTIFIER_FIXUP_1914 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3197 = _RESERVED_IDENTIFIER_FIXUP_3188;
                _RESERVED_IDENTIFIER_FIXUP_3197.x = _RESERVED_IDENTIFIER_FIXUP_1973.x;
                _RESERVED_IDENTIFIER_FIXUP_3197.y = _RESERVED_IDENTIFIER_FIXUP_1973.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1995 = _RESERVED_IDENTIFIER_FIXUP_1914 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3206 = _RESERVED_IDENTIFIER_FIXUP_3197;
                _RESERVED_IDENTIFIER_FIXUP_3206.x = _RESERVED_IDENTIFIER_FIXUP_1995.x;
                _RESERVED_IDENTIFIER_FIXUP_3206.y = _RESERVED_IDENTIFIER_FIXUP_1995.y;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3206.xy;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1903;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2005 = hdLod8(param_41, param_42);
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_1914;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1903;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3928.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1903;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3188.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1903;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3197.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_1903;
                float _RESERVED_IDENTIFIER_FIXUP_2010 = (((hdLod8(param_43, param_44).x + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x) + _RESERVED_IDENTIFIER_FIXUP_2005.x;
                float _RESERVED_IDENTIFIER_FIXUP_2018 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3217 = _RESERVED_IDENTIFIER_FIXUP_2005;
                _RESERVED_IDENTIFIER_FIXUP_3217.x = _RESERVED_IDENTIFIER_FIXUP_2018;
                float _RESERVED_IDENTIFIER_FIXUP_2024 = clamp((_RESERVED_IDENTIFIER_FIXUP_2018 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2029 = (_RESERVED_IDENTIFIER_FIXUP_2010 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3907 = _RESERVED_IDENTIFIER_FIXUP_3217;
                _RESERVED_IDENTIFIER_FIXUP_3904 = vec4((_RESERVED_IDENTIFIER_FIXUP_2024 * _RESERVED_IDENTIFIER_FIXUP_2029) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2024, _RESERVED_IDENTIFIER_FIXUP_2029, _RESERVED_IDENTIFIER_FIXUP_2010);
            }
            _RESERVED_IDENTIFIER_FIXUP_3906 = _RESERVED_IDENTIFIER_FIXUP_3907;
            _RESERVED_IDENTIFIER_FIXUP_3903 = _RESERVED_IDENTIFIER_FIXUP_3904;
        }
        _RESERVED_IDENTIFIER_FIXUP_3905 = _RESERVED_IDENTIFIER_FIXUP_3906;
        _RESERVED_IDENTIFIER_FIXUP_3902 = _RESERVED_IDENTIFIER_FIXUP_3903;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_3902;
    _RESERVED_IDENTIFIER_FIXUP_3464.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3466 = _RESERVED_IDENTIFIER_FIXUP_3905;
    _RESERVED_IDENTIFIER_FIXUP_3466.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3466.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3466.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2068 = _RESERVED_IDENTIFIER_FIXUP_3464.xxx * _RESERVED_IDENTIFIER_FIXUP_3466.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3933 = vec4(_RESERVED_IDENTIFIER_FIXUP_2068.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2068.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2082 = (_RESERVED_IDENTIFIER_FIXUP_1305.xyz * _RESERVED_IDENTIFIER_FIXUP_3933.yyy) + _RESERVED_IDENTIFIER_FIXUP_3933.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3478 = _RESERVED_IDENTIFIER_FIXUP_1305;
    _RESERVED_IDENTIFIER_FIXUP_3478.x = _RESERVED_IDENTIFIER_FIXUP_2082.x;
    _RESERVED_IDENTIFIER_FIXUP_3478.y = _RESERVED_IDENTIFIER_FIXUP_2082.y;
    _RESERVED_IDENTIFIER_FIXUP_3478.z = _RESERVED_IDENTIFIER_FIXUP_2082.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2095 = _RESERVED_IDENTIFIER_FIXUP_3478.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3484 = _RESERVED_IDENTIFIER_FIXUP_3478;
    _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_2095.x;
    _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2095.y;
    _RESERVED_IDENTIFIER_FIXUP_3484.z = _RESERVED_IDENTIFIER_FIXUP_2095.z;
    vec2 param_51 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2148 = hdTex0(param_51);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2152 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2156 = hdTex2(param_53);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2169 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3502 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3502.x = _RESERVED_IDENTIFIER_FIXUP_2169.x;
    _RESERVED_IDENTIFIER_FIXUP_3502.y = _RESERVED_IDENTIFIER_FIXUP_2169.y;
    _RESERVED_IDENTIFIER_FIXUP_3502.z = _RESERVED_IDENTIFIER_FIXUP_2169.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2177 = _RESERVED_IDENTIFIER_FIXUP_2148.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2180 = _RESERVED_IDENTIFIER_FIXUP_2177 * _RESERVED_IDENTIFIER_FIXUP_3502.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3508;
    _RESERVED_IDENTIFIER_FIXUP_3508.x = _RESERVED_IDENTIFIER_FIXUP_2180.x;
    _RESERVED_IDENTIFIER_FIXUP_3508.y = _RESERVED_IDENTIFIER_FIXUP_2180.y;
    _RESERVED_IDENTIFIER_FIXUP_3508.z = _RESERVED_IDENTIFIER_FIXUP_2180.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2195 = mix(_RESERVED_IDENTIFIER_FIXUP_3508.xyz, _RESERVED_IDENTIFIER_FIXUP_2177, _RESERVED_IDENTIFIER_FIXUP_1252);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3514 = _RESERVED_IDENTIFIER_FIXUP_2148;
    _RESERVED_IDENTIFIER_FIXUP_3514.x = _RESERVED_IDENTIFIER_FIXUP_2195.x;
    _RESERVED_IDENTIFIER_FIXUP_3514.y = _RESERVED_IDENTIFIER_FIXUP_2195.y;
    _RESERVED_IDENTIFIER_FIXUP_3514.z = _RESERVED_IDENTIFIER_FIXUP_2195.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2203 = _RESERVED_IDENTIFIER_FIXUP_2152.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2206 = _RESERVED_IDENTIFIER_FIXUP_2203 * _RESERVED_IDENTIFIER_FIXUP_3502.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3935 = vec4(_RESERVED_IDENTIFIER_FIXUP_2206.x, _RESERVED_IDENTIFIER_FIXUP_1222, _RESERVED_IDENTIFIER_FIXUP_2206.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2221 = mix(_RESERVED_IDENTIFIER_FIXUP_3935.xzw, _RESERVED_IDENTIFIER_FIXUP_2203, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3935.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3526 = _RESERVED_IDENTIFIER_FIXUP_2152;
    _RESERVED_IDENTIFIER_FIXUP_3526.x = _RESERVED_IDENTIFIER_FIXUP_2221.x;
    _RESERVED_IDENTIFIER_FIXUP_3526.y = _RESERVED_IDENTIFIER_FIXUP_2221.y;
    _RESERVED_IDENTIFIER_FIXUP_3526.z = _RESERVED_IDENTIFIER_FIXUP_2221.z;
    float _RESERVED_IDENTIFIER_FIXUP_2231 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2156.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3532 = _RESERVED_IDENTIFIER_FIXUP_2156;
    _RESERVED_IDENTIFIER_FIXUP_3532.y = _RESERVED_IDENTIFIER_FIXUP_2231;
    _RESERVED_IDENTIFIER_FIXUP_3532.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2231;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2241 = _RESERVED_IDENTIFIER_FIXUP_3532.xxxx * _RESERVED_IDENTIFIER_FIXUP_3526;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2247 = (_RESERVED_IDENTIFIER_FIXUP_3514 * _RESERVED_IDENTIFIER_FIXUP_3532.yyyy) + _RESERVED_IDENTIFIER_FIXUP_2241;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3539 = _RESERVED_IDENTIFIER_FIXUP_2241;
    _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_1312;
    float _RESERVED_IDENTIFIER_FIXUP_2260 = clamp((_RESERVED_IDENTIFIER_FIXUP_1312 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_2260;
    float _RESERVED_IDENTIFIER_FIXUP_2266 = ((-_RESERVED_IDENTIFIER_FIXUP_2260) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_2266;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3920;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3914;
    if (_RESERVED_IDENTIFIER_FIXUP_2266 != (-_RESERVED_IDENTIFIER_FIXUP_2266))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2278 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2278.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2278.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2284 = hdLod5(param_54, param_55);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2288 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3751 = _RESERVED_IDENTIFIER_FIXUP_2284;
        _RESERVED_IDENTIFIER_FIXUP_3751.y = _RESERVED_IDENTIFIER_FIXUP_2288.x;
        _RESERVED_IDENTIFIER_FIXUP_3751.z = _RESERVED_IDENTIFIER_FIXUP_2288.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2298 = _RESERVED_IDENTIFIER_FIXUP_3751.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3755;
        _RESERVED_IDENTIFIER_FIXUP_3755.x = _RESERVED_IDENTIFIER_FIXUP_2298.x;
        _RESERVED_IDENTIFIER_FIXUP_3755.y = _RESERVED_IDENTIFIER_FIXUP_2298.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2305 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2309 = _RESERVED_IDENTIFIER_FIXUP_2305.y;
        _RESERVED_IDENTIFIER_FIXUP_3755.w = _RESERVED_IDENTIFIER_FIXUP_2309;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3755.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2309;
        float _RESERVED_IDENTIFIER_FIXUP_2320 = _RESERVED_IDENTIFIER_FIXUP_2284.x + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2320;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2327 = _RESERVED_IDENTIFIER_FIXUP_3751.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3768;
        _RESERVED_IDENTIFIER_FIXUP_3768.x = _RESERVED_IDENTIFIER_FIXUP_2327.x;
        _RESERVED_IDENTIFIER_FIXUP_3768.y = _RESERVED_IDENTIFIER_FIXUP_2327.y;
        _RESERVED_IDENTIFIER_FIXUP_3768.w = _RESERVED_IDENTIFIER_FIXUP_2309;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3768.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2309;
        float _RESERVED_IDENTIFIER_FIXUP_2349 = _RESERVED_IDENTIFIER_FIXUP_2320 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2349;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2356 = _RESERVED_IDENTIFIER_FIXUP_3751.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3781;
        _RESERVED_IDENTIFIER_FIXUP_3781.x = _RESERVED_IDENTIFIER_FIXUP_2356.x;
        _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2356.y;
        _RESERVED_IDENTIFIER_FIXUP_3781.w = _RESERVED_IDENTIFIER_FIXUP_2309;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3781.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2309;
        float _RESERVED_IDENTIFIER_FIXUP_2378 = _RESERVED_IDENTIFIER_FIXUP_2349 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2378;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2385 = _RESERVED_IDENTIFIER_FIXUP_3751.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3794;
        _RESERVED_IDENTIFIER_FIXUP_3794.x = _RESERVED_IDENTIFIER_FIXUP_2385.x;
        _RESERVED_IDENTIFIER_FIXUP_3794.y = _RESERVED_IDENTIFIER_FIXUP_2385.y;
        _RESERVED_IDENTIFIER_FIXUP_3794.w = _RESERVED_IDENTIFIER_FIXUP_2309;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3794.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2309;
        float _RESERVED_IDENTIFIER_FIXUP_2407 = _RESERVED_IDENTIFIER_FIXUP_2378 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2407;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2414 = _RESERVED_IDENTIFIER_FIXUP_3751.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3807;
        _RESERVED_IDENTIFIER_FIXUP_3807.x = _RESERVED_IDENTIFIER_FIXUP_2414.x;
        _RESERVED_IDENTIFIER_FIXUP_3807.y = _RESERVED_IDENTIFIER_FIXUP_2414.y;
        _RESERVED_IDENTIFIER_FIXUP_3807.w = _RESERVED_IDENTIFIER_FIXUP_2309;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3807.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2309;
        float _RESERVED_IDENTIFIER_FIXUP_2436 = _RESERVED_IDENTIFIER_FIXUP_2407 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2436;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2443 = _RESERVED_IDENTIFIER_FIXUP_3751.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3820;
        _RESERVED_IDENTIFIER_FIXUP_3820.x = _RESERVED_IDENTIFIER_FIXUP_2443.x;
        _RESERVED_IDENTIFIER_FIXUP_3820.y = _RESERVED_IDENTIFIER_FIXUP_2443.y;
        _RESERVED_IDENTIFIER_FIXUP_3820.w = _RESERVED_IDENTIFIER_FIXUP_2309;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3820.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2309;
        float _RESERVED_IDENTIFIER_FIXUP_2465 = _RESERVED_IDENTIFIER_FIXUP_2436 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2465;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2472 = _RESERVED_IDENTIFIER_FIXUP_3751.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3833;
        _RESERVED_IDENTIFIER_FIXUP_3833.x = _RESERVED_IDENTIFIER_FIXUP_2472.x;
        _RESERVED_IDENTIFIER_FIXUP_3833.y = _RESERVED_IDENTIFIER_FIXUP_2472.y;
        _RESERVED_IDENTIFIER_FIXUP_3833.w = _RESERVED_IDENTIFIER_FIXUP_2309;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3833.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2309;
        float _RESERVED_IDENTIFIER_FIXUP_2494 = _RESERVED_IDENTIFIER_FIXUP_2465 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2494;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2501 = _RESERVED_IDENTIFIER_FIXUP_3751.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3846;
        _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2501.x;
        _RESERVED_IDENTIFIER_FIXUP_3846.y = _RESERVED_IDENTIFIER_FIXUP_2501.y;
        _RESERVED_IDENTIFIER_FIXUP_3846.w = _RESERVED_IDENTIFIER_FIXUP_2309;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3846.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2309;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2518 = hdLod5(param_70, param_71);
        float _RESERVED_IDENTIFIER_FIXUP_2523 = _RESERVED_IDENTIFIER_FIXUP_2494 + _RESERVED_IDENTIFIER_FIXUP_2518.x;
        _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2523;
        _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2523 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3920 = _RESERVED_IDENTIFIER_FIXUP_2518;
        _RESERVED_IDENTIFIER_FIXUP_3914 = _RESERVED_IDENTIFIER_FIXUP_3751;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2536 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3539.y = _RESERVED_IDENTIFIER_FIXUP_2536;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3921;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3915;
        if (_RESERVED_IDENTIFIER_FIXUP_2536 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2545 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2555 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2557 = _RESERVED_IDENTIFIER_FIXUP_2555.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3691 = _RESERVED_IDENTIFIER_FIXUP_3539;
            _RESERVED_IDENTIFIER_FIXUP_3691.y = _RESERVED_IDENTIFIER_FIXUP_2557;
            _RESERVED_IDENTIFIER_FIXUP_3691.z = _RESERVED_IDENTIFIER_FIXUP_2555.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2565 = _RESERVED_IDENTIFIER_FIXUP_3691.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3695;
            _RESERVED_IDENTIFIER_FIXUP_3695.x = _RESERVED_IDENTIFIER_FIXUP_2565.x;
            _RESERVED_IDENTIFIER_FIXUP_3695.y = _RESERVED_IDENTIFIER_FIXUP_2565.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2572 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2576 = _RESERVED_IDENTIFIER_FIXUP_2572.y;
            _RESERVED_IDENTIFIER_FIXUP_3695.w = _RESERVED_IDENTIFIER_FIXUP_2576;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2545.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2545.w;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3695.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2576;
            float _RESERVED_IDENTIFIER_FIXUP_2587 = hdLod6(param_72, param_73).x + hdLod6(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3941 = vec4(_RESERVED_IDENTIFIER_FIXUP_2266, _RESERVED_IDENTIFIER_FIXUP_2557, _RESERVED_IDENTIFIER_FIXUP_2555.y, _RESERVED_IDENTIFIER_FIXUP_2587);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_3941.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3708;
            _RESERVED_IDENTIFIER_FIXUP_3708.x = _RESERVED_IDENTIFIER_FIXUP_2594.x;
            _RESERVED_IDENTIFIER_FIXUP_3708.y = _RESERVED_IDENTIFIER_FIXUP_2594.y;
            _RESERVED_IDENTIFIER_FIXUP_3708.w = _RESERVED_IDENTIFIER_FIXUP_2576;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3708.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2576;
            float _RESERVED_IDENTIFIER_FIXUP_2616 = _RESERVED_IDENTIFIER_FIXUP_2587 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3941.w = _RESERVED_IDENTIFIER_FIXUP_2616;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2623 = _RESERVED_IDENTIFIER_FIXUP_3941.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3721;
            _RESERVED_IDENTIFIER_FIXUP_3721.x = _RESERVED_IDENTIFIER_FIXUP_2623.x;
            _RESERVED_IDENTIFIER_FIXUP_3721.y = _RESERVED_IDENTIFIER_FIXUP_2623.y;
            _RESERVED_IDENTIFIER_FIXUP_3721.w = _RESERVED_IDENTIFIER_FIXUP_2576;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3721.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2576;
            float _RESERVED_IDENTIFIER_FIXUP_2645 = _RESERVED_IDENTIFIER_FIXUP_2616 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3941.w = _RESERVED_IDENTIFIER_FIXUP_2645;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2652 = _RESERVED_IDENTIFIER_FIXUP_3941.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3734;
            _RESERVED_IDENTIFIER_FIXUP_3734.x = _RESERVED_IDENTIFIER_FIXUP_2652.x;
            _RESERVED_IDENTIFIER_FIXUP_3734.y = _RESERVED_IDENTIFIER_FIXUP_2652.y;
            _RESERVED_IDENTIFIER_FIXUP_3734.w = _RESERVED_IDENTIFIER_FIXUP_2576;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3734.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2576;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2669 = hdLod6(param_80, param_81);
            float _RESERVED_IDENTIFIER_FIXUP_2674 = _RESERVED_IDENTIFIER_FIXUP_2645 + _RESERVED_IDENTIFIER_FIXUP_2669.x;
            _RESERVED_IDENTIFIER_FIXUP_3941.y = _RESERVED_IDENTIFIER_FIXUP_2674;
            _RESERVED_IDENTIFIER_FIXUP_3941.x = _RESERVED_IDENTIFIER_FIXUP_2674 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3921 = _RESERVED_IDENTIFIER_FIXUP_2669;
            _RESERVED_IDENTIFIER_FIXUP_3915 = _RESERVED_IDENTIFIER_FIXUP_3941;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2687 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3556 = _RESERVED_IDENTIFIER_FIXUP_3539;
            _RESERVED_IDENTIFIER_FIXUP_3556.y = _RESERVED_IDENTIFIER_FIXUP_2687;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3922;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3916;
            if (_RESERVED_IDENTIFIER_FIXUP_2687 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2696 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2706 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2708 = _RESERVED_IDENTIFIER_FIXUP_2706.x;
                _RESERVED_IDENTIFIER_FIXUP_3556.y = _RESERVED_IDENTIFIER_FIXUP_2708;
                _RESERVED_IDENTIFIER_FIXUP_3556.z = _RESERVED_IDENTIFIER_FIXUP_2706.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2716 = _RESERVED_IDENTIFIER_FIXUP_3556.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3635;
                _RESERVED_IDENTIFIER_FIXUP_3635.x = _RESERVED_IDENTIFIER_FIXUP_2716.x;
                _RESERVED_IDENTIFIER_FIXUP_3635.y = _RESERVED_IDENTIFIER_FIXUP_2716.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2723 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2727 = _RESERVED_IDENTIFIER_FIXUP_2723.y;
                _RESERVED_IDENTIFIER_FIXUP_3635.w = _RESERVED_IDENTIFIER_FIXUP_2727;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2696.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2696.w;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3635.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2727;
                float _RESERVED_IDENTIFIER_FIXUP_2738 = hdLod7(param_82, param_83).x + hdLod7(param_84, param_85).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3940 = vec4(_RESERVED_IDENTIFIER_FIXUP_2266, _RESERVED_IDENTIFIER_FIXUP_2708, _RESERVED_IDENTIFIER_FIXUP_2706.y, _RESERVED_IDENTIFIER_FIXUP_2738);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2745 = _RESERVED_IDENTIFIER_FIXUP_3940.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3648;
                _RESERVED_IDENTIFIER_FIXUP_3648.x = _RESERVED_IDENTIFIER_FIXUP_2745.x;
                _RESERVED_IDENTIFIER_FIXUP_3648.y = _RESERVED_IDENTIFIER_FIXUP_2745.y;
                _RESERVED_IDENTIFIER_FIXUP_3648.w = _RESERVED_IDENTIFIER_FIXUP_2727;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3648.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2727;
                float _RESERVED_IDENTIFIER_FIXUP_2767 = _RESERVED_IDENTIFIER_FIXUP_2738 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3940.w = _RESERVED_IDENTIFIER_FIXUP_2767;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2774 = _RESERVED_IDENTIFIER_FIXUP_3940.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3661;
                _RESERVED_IDENTIFIER_FIXUP_3661.x = _RESERVED_IDENTIFIER_FIXUP_2774.x;
                _RESERVED_IDENTIFIER_FIXUP_3661.y = _RESERVED_IDENTIFIER_FIXUP_2774.y;
                _RESERVED_IDENTIFIER_FIXUP_3661.w = _RESERVED_IDENTIFIER_FIXUP_2727;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3661.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2727;
                float _RESERVED_IDENTIFIER_FIXUP_2796 = _RESERVED_IDENTIFIER_FIXUP_2767 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3940.w = _RESERVED_IDENTIFIER_FIXUP_2796;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2803 = _RESERVED_IDENTIFIER_FIXUP_3940.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3674;
                _RESERVED_IDENTIFIER_FIXUP_3674.x = _RESERVED_IDENTIFIER_FIXUP_2803.x;
                _RESERVED_IDENTIFIER_FIXUP_3674.y = _RESERVED_IDENTIFIER_FIXUP_2803.y;
                _RESERVED_IDENTIFIER_FIXUP_3674.w = _RESERVED_IDENTIFIER_FIXUP_2727;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3674.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2727;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2820 = hdLod7(param_90, param_91);
                float _RESERVED_IDENTIFIER_FIXUP_2825 = _RESERVED_IDENTIFIER_FIXUP_2796 + _RESERVED_IDENTIFIER_FIXUP_2820.x;
                _RESERVED_IDENTIFIER_FIXUP_3940.y = _RESERVED_IDENTIFIER_FIXUP_2825;
                _RESERVED_IDENTIFIER_FIXUP_3940.x = _RESERVED_IDENTIFIER_FIXUP_2825 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3922 = _RESERVED_IDENTIFIER_FIXUP_2820;
                _RESERVED_IDENTIFIER_FIXUP_3916 = _RESERVED_IDENTIFIER_FIXUP_3940;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2841 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2845 = _RESERVED_IDENTIFIER_FIXUP_2841.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2856 = vec4(_RESERVED_IDENTIFIER_FIXUP_2841.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2845).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3937 = vec4(_RESERVED_IDENTIFIER_FIXUP_2856 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2845);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2893 = _RESERVED_IDENTIFIER_FIXUP_2856 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3589 = _RESERVED_IDENTIFIER_FIXUP_3937;
                _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_2893.x;
                _RESERVED_IDENTIFIER_FIXUP_3589.y = _RESERVED_IDENTIFIER_FIXUP_2893.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2915 = _RESERVED_IDENTIFIER_FIXUP_2856 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3598 = _RESERVED_IDENTIFIER_FIXUP_3589;
                _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2915.x;
                _RESERVED_IDENTIFIER_FIXUP_3598.y = _RESERVED_IDENTIFIER_FIXUP_2915.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2937 = _RESERVED_IDENTIFIER_FIXUP_2856 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3607 = _RESERVED_IDENTIFIER_FIXUP_3598;
                _RESERVED_IDENTIFIER_FIXUP_3607.x = _RESERVED_IDENTIFIER_FIXUP_2937.x;
                _RESERVED_IDENTIFIER_FIXUP_3607.y = _RESERVED_IDENTIFIER_FIXUP_2937.y;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3607.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2845;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2947 = hdLod8(param_92, param_93);
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_2856;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2845;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3937.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2845;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3589.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2845;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3598.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2845;
                float _RESERVED_IDENTIFIER_FIXUP_2952 = (((hdLod8(param_94, param_95).x + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + _RESERVED_IDENTIFIER_FIXUP_2947.x;
                float _RESERVED_IDENTIFIER_FIXUP_2960 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3618 = _RESERVED_IDENTIFIER_FIXUP_2947;
                _RESERVED_IDENTIFIER_FIXUP_3618.x = _RESERVED_IDENTIFIER_FIXUP_2960;
                float _RESERVED_IDENTIFIER_FIXUP_2966 = clamp((_RESERVED_IDENTIFIER_FIXUP_2960 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2971 = (_RESERVED_IDENTIFIER_FIXUP_2952 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3922 = _RESERVED_IDENTIFIER_FIXUP_3618;
                _RESERVED_IDENTIFIER_FIXUP_3916 = vec4((_RESERVED_IDENTIFIER_FIXUP_2966 * _RESERVED_IDENTIFIER_FIXUP_2971) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2966, _RESERVED_IDENTIFIER_FIXUP_2971, _RESERVED_IDENTIFIER_FIXUP_2952);
            }
            _RESERVED_IDENTIFIER_FIXUP_3921 = _RESERVED_IDENTIFIER_FIXUP_3922;
            _RESERVED_IDENTIFIER_FIXUP_3915 = _RESERVED_IDENTIFIER_FIXUP_3916;
        }
        _RESERVED_IDENTIFIER_FIXUP_3920 = _RESERVED_IDENTIFIER_FIXUP_3921;
        _RESERVED_IDENTIFIER_FIXUP_3914 = _RESERVED_IDENTIFIER_FIXUP_3915;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2986 = (_RESERVED_IDENTIFIER_FIXUP_3914.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3863 = _RESERVED_IDENTIFIER_FIXUP_3914;
    _RESERVED_IDENTIFIER_FIXUP_3863.y = _RESERVED_IDENTIFIER_FIXUP_2986;
    _RESERVED_IDENTIFIER_FIXUP_3863.y = _RESERVED_IDENTIFIER_FIXUP_2986;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2999 = _RESERVED_IDENTIFIER_FIXUP_2247.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3869 = _RESERVED_IDENTIFIER_FIXUP_3920;
    _RESERVED_IDENTIFIER_FIXUP_3869.x = _RESERVED_IDENTIFIER_FIXUP_2999.x;
    _RESERVED_IDENTIFIER_FIXUP_3869.y = _RESERVED_IDENTIFIER_FIXUP_2999.y;
    _RESERVED_IDENTIFIER_FIXUP_3869.z = _RESERVED_IDENTIFIER_FIXUP_2999.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3010 = _RESERVED_IDENTIFIER_FIXUP_3863.xxx * _RESERVED_IDENTIFIER_FIXUP_3869.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3942 = vec4(_RESERVED_IDENTIFIER_FIXUP_3010.x, _RESERVED_IDENTIFIER_FIXUP_2986, _RESERVED_IDENTIFIER_FIXUP_3010.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3024 = (_RESERVED_IDENTIFIER_FIXUP_2247.xyz * _RESERVED_IDENTIFIER_FIXUP_3942.yyy) + _RESERVED_IDENTIFIER_FIXUP_3942.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3881 = _RESERVED_IDENTIFIER_FIXUP_2247;
    _RESERVED_IDENTIFIER_FIXUP_3881.x = _RESERVED_IDENTIFIER_FIXUP_3024.x;
    _RESERVED_IDENTIFIER_FIXUP_3881.y = _RESERVED_IDENTIFIER_FIXUP_3024.y;
    _RESERVED_IDENTIFIER_FIXUP_3881.z = _RESERVED_IDENTIFIER_FIXUP_3024.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3037 = _RESERVED_IDENTIFIER_FIXUP_3881.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3887 = _RESERVED_IDENTIFIER_FIXUP_3881;
    _RESERVED_IDENTIFIER_FIXUP_3887.x = _RESERVED_IDENTIFIER_FIXUP_3037.x;
    _RESERVED_IDENTIFIER_FIXUP_3887.y = _RESERVED_IDENTIFIER_FIXUP_3037.y;
    _RESERVED_IDENTIFIER_FIXUP_3887.z = _RESERVED_IDENTIFIER_FIXUP_3037.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3887.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1068 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1077;
    if (_RESERVED_IDENTIFIER_FIXUP_1068)
    {
        _RESERVED_IDENTIFIER_FIXUP_1077 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1077 = _RESERVED_IDENTIFIER_FIXUP_1068;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1077)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1114 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3484.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1140 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3090;
    if (_RESERVED_IDENTIFIER_FIXUP_1114 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3090 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1114), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1140);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3090 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1140);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3090;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2986);
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
    vec2 hdB80 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = hdB80.x;
    r3.y = hdB80.y;
    vec3 hdB93 = v0.xyz + v0.xyz;
    r4.x = hdB93.x;
    r4.y = hdB93.y;
    r4.z = hdB93.z;
    vec3 hdB105 = r0.xyz * r4.xyz;
    r5.x = hdB105.x;
    r5.y = hdB105.y;
    r5.z = hdB105.z;
    vec4 hdB114 = r0;
    vec3 hdB123 = mix(r5.xyz, hdB114.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB123.x;
    r0.y = hdB123.y;
    r0.z = hdB123.z;
    vec3 hdB134 = r1.xyz * r4.xyz;
    r3.x = hdB134.x;
    r3.z = hdB134.y;
    r3.w = hdB134.z;
    vec4 hdB144 = r1;
    vec3 hdB150 = mix(r3.xzw, hdB144.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = hdB150.x;
    r1.y = hdB150.y;
    r1.z = hdB150.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
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
        vec2 hdB227 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB227.x;
        r1.z = hdB227.y;
        vec2 hdB238 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB238.x;
        r2.y = hdB238.y;
        vec2 hdB246 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB246.x;
        r2.w = hdB246.y;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r1.x += r2.x;
        vec2 hdB269 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB269.x;
        r2.y = hdB269.y;
        vec2 hdB276 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB276.x;
        r2.w = hdB276.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.x += r2.x;
        vec2 hdB299 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB299.x;
        r2.y = hdB299.y;
        vec2 hdB306 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB306.x;
        r2.w = hdB306.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.x += r2.x;
        vec2 hdB329 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB329.x;
        r2.y = hdB329.y;
        vec2 hdB336 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB336.x;
        r2.w = hdB336.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.x += r2.x;
        vec2 hdB359 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB359.x;
        r2.y = hdB359.y;
        vec2 hdB366 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB366.x;
        r2.w = hdB366.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.x += r2.x;
        vec2 hdB389 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB389.x;
        r2.y = hdB389.y;
        vec2 hdB396 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB396.x;
        r2.w = hdB396.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r1.x += r2.x;
        vec2 hdB419 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB419.x;
        r2.y = hdB419.y;
        vec2 hdB426 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB426.x;
        r2.w = hdB426.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r1.x += r2.x;
        vec2 hdB449 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB449.x;
        r2.y = hdB449.y;
        vec2 hdB456 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB456.x;
        r2.w = hdB456.y;
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
            vec2 hdB506 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB506.x;
            r1.z = hdB506.y;
            vec2 hdB516 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB516.x;
            r3.y = hdB516.y;
            vec2 hdB523 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB523.x;
            r3.w = hdB523.y;
            vec2 param_23 = r3.xy;
            float param_24 = r3.w;
            r3 = hdLod6(param_23, param_24);
            r1.w = r2.x + r3.x;
            vec2 hdB545 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB545.x;
            r2.y = hdB545.y;
            vec2 hdB552 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB552.x;
            r2.w = hdB552.y;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
            r1.w += r2.x;
            vec2 hdB574 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB574.x;
            r2.y = hdB574.y;
            vec2 hdB581 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB581.x;
            r2.w = hdB581.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r1.w += r2.x;
            vec2 hdB603 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB603.x;
            r2.y = hdB603.y;
            vec2 hdB610 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB610.x;
            r2.w = hdB610.y;
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
                vec2 hdB660 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB660.x;
                r1.z = hdB660.y;
                vec2 hdB670 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB670.x;
                r3.y = hdB670.y;
                vec2 hdB677 = vec2(1.0, 0.0) * v6.zx;
                r3.z = hdB677.x;
                r3.w = hdB677.y;
                vec2 param_33 = r3.xy;
                float param_34 = r3.w;
                r3 = hdLod7(param_33, param_34);
                r1.w = r2.x + r3.x;
                vec2 hdB699 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB699.x;
                r2.y = hdB699.y;
                vec2 hdB706 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB706.x;
                r2.w = hdB706.y;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
                r1.w += r2.x;
                vec2 hdB728 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB728.x;
                r2.y = hdB728.y;
                vec2 hdB735 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB735.x;
                r2.w = hdB735.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r1.w += r2.x;
                vec2 hdB757 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB757.x;
                r2.y = hdB757.y;
                vec2 hdB764 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB764.x;
                r2.w = hdB764.y;
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
                vec2 hdB796 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB796.x;
                r2.w = hdB796.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r3 = hdLod8(param_41, param_42);
                vec2 hdB821 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB821.x;
                r4.y = hdB821.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r5 = hdLod8(param_43, param_44);
                r1.w = r3.x + r5.x;
                vec2 hdB849 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB849.x;
                r4.y = hdB849.y;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r3 = hdLod8(param_45, param_46);
                r1.w += r3.x;
                vec2 hdB871 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB871.x;
                r4.y = hdB871.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r3 = hdLod8(param_47, param_48);
                r1.w += r3.x;
                vec2 hdB893 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB893.x;
                r4.y = hdB893.y;
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
    vec3 hdB950 = r0.www * v1.xyz;
    r2.x = hdB950.x;
    r2.y = hdB950.y;
    r2.z = hdB950.z;
    vec4 hdB957 = r1;
    vec3 hdB961 = hdB957.xxx * r2.xyz;
    r1.x = hdB961.x;
    r1.z = hdB961.y;
    r1.w = hdB961.z;
    vec4 hdB968 = r0;
    vec3 hdB975 = (hdB968.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB975.x;
    r0.y = hdB975.y;
    r0.z = hdB975.z;
    vec4 hdB982 = r0;
    vec3 hdB989 = hdB982.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB989.x;
    r0.y = hdB989.y;
    r0.z = hdB989.z;
    vec3 hdB1004 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1004.x;
    oC0.y = hdB1004.y;
    oC0.z = hdB1004.z;
    oC0.w = 1.0;
    bool hdB1016 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1024;
    if (hdB1016)
    {
        hdB1024 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1024 = hdB1016;
    }
    if (hdB1024)
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
    bool _3618 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3628;
    if (_3618)
    {
        _3628 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3628 = _3618;
    }
    if (_3628)
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
        bool _3653 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3668;
        if (!_3653)
        {
            _3668 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3668 = _3653;
        }
        if (_3668)
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
