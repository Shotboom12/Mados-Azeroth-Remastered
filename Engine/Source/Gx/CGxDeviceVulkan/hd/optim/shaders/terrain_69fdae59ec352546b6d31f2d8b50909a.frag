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
float _RESERVED_IDENTIFIER_FIXUP_3845;
vec4 _RESERVED_IDENTIFIER_FIXUP_3846;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1190 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1194 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1198 = hdTex2(param_2);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1202 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_1204 = _RESERVED_IDENTIFIER_FIXUP_1202.x;
    _RESERVED_IDENTIFIER_FIXUP_1198.y = _RESERVED_IDENTIFIER_FIXUP_1204;
    float _RESERVED_IDENTIFIER_FIXUP_1206 = _RESERVED_IDENTIFIER_FIXUP_1202.y;
    _RESERVED_IDENTIFIER_FIXUP_1198.z = _RESERVED_IDENTIFIER_FIXUP_1206;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1208 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3845).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1211 = _RESERVED_IDENTIFIER_FIXUP_1208 + _RESERVED_IDENTIFIER_FIXUP_1208;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3056;
    _RESERVED_IDENTIFIER_FIXUP_3056.x = _RESERVED_IDENTIFIER_FIXUP_1211.x;
    _RESERVED_IDENTIFIER_FIXUP_3056.y = _RESERVED_IDENTIFIER_FIXUP_1211.y;
    _RESERVED_IDENTIFIER_FIXUP_3056.z = _RESERVED_IDENTIFIER_FIXUP_1211.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1219 = _RESERVED_IDENTIFIER_FIXUP_1190.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1219 * _RESERVED_IDENTIFIER_FIXUP_3056.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3062 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3062.x = _RESERVED_IDENTIFIER_FIXUP_1222.x;
    _RESERVED_IDENTIFIER_FIXUP_3062.y = _RESERVED_IDENTIFIER_FIXUP_1222.y;
    _RESERVED_IDENTIFIER_FIXUP_3062.z = _RESERVED_IDENTIFIER_FIXUP_1222.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1237 = mix(_RESERVED_IDENTIFIER_FIXUP_3062.xyz, _RESERVED_IDENTIFIER_FIXUP_1219, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1198.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3068 = _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_3068.x = _RESERVED_IDENTIFIER_FIXUP_1237.x;
    _RESERVED_IDENTIFIER_FIXUP_3068.y = _RESERVED_IDENTIFIER_FIXUP_1237.y;
    _RESERVED_IDENTIFIER_FIXUP_3068.z = _RESERVED_IDENTIFIER_FIXUP_1237.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1245 = _RESERVED_IDENTIFIER_FIXUP_1194.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1248 = _RESERVED_IDENTIFIER_FIXUP_1245 * _RESERVED_IDENTIFIER_FIXUP_3056.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3074;
    _RESERVED_IDENTIFIER_FIXUP_3074.x = _RESERVED_IDENTIFIER_FIXUP_1248.x;
    _RESERVED_IDENTIFIER_FIXUP_3074.y = _RESERVED_IDENTIFIER_FIXUP_1248.y;
    _RESERVED_IDENTIFIER_FIXUP_3074.z = _RESERVED_IDENTIFIER_FIXUP_1248.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1263 = mix(_RESERVED_IDENTIFIER_FIXUP_3074.xyz, _RESERVED_IDENTIFIER_FIXUP_1245, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1198.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3080 = _RESERVED_IDENTIFIER_FIXUP_1194;
    _RESERVED_IDENTIFIER_FIXUP_3080.x = _RESERVED_IDENTIFIER_FIXUP_1263.x;
    _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_1263.y;
    _RESERVED_IDENTIFIER_FIXUP_3080.z = _RESERVED_IDENTIFIER_FIXUP_1263.z;
    float _RESERVED_IDENTIFIER_FIXUP_1281 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3088 = _RESERVED_IDENTIFIER_FIXUP_3068;
    _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_1281;
    float _RESERVED_IDENTIFIER_FIXUP_1287 = clamp((_RESERVED_IDENTIFIER_FIXUP_1281 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_1287;
    float _RESERVED_IDENTIFIER_FIXUP_1293 = ((-_RESERVED_IDENTIFIER_FIXUP_1287) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_1293;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3850;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3847;
    if (_RESERVED_IDENTIFIER_FIXUP_1293 != (-_RESERVED_IDENTIFIER_FIXUP_1293))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1305 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1305.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1305.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1311 = hdLod5(param_3, param_4);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1315 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3300 = _RESERVED_IDENTIFIER_FIXUP_1311;
        _RESERVED_IDENTIFIER_FIXUP_3300.y = _RESERVED_IDENTIFIER_FIXUP_1315.x;
        _RESERVED_IDENTIFIER_FIXUP_3300.z = _RESERVED_IDENTIFIER_FIXUP_1315.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1325 = _RESERVED_IDENTIFIER_FIXUP_3300.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3304;
        _RESERVED_IDENTIFIER_FIXUP_3304.x = _RESERVED_IDENTIFIER_FIXUP_1325.x;
        _RESERVED_IDENTIFIER_FIXUP_3304.y = _RESERVED_IDENTIFIER_FIXUP_1325.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1332 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1336 = _RESERVED_IDENTIFIER_FIXUP_1332.y;
        _RESERVED_IDENTIFIER_FIXUP_3304.w = _RESERVED_IDENTIFIER_FIXUP_1336;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3304.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1336;
        float _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1311.x + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1347;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_3300.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3317;
        _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_1354.x;
        _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_1354.y;
        _RESERVED_IDENTIFIER_FIXUP_3317.w = _RESERVED_IDENTIFIER_FIXUP_1336;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3317.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1336;
        float _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_1347 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1376;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_3300.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3330;
        _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_1383.x;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_1383.y;
        _RESERVED_IDENTIFIER_FIXUP_3330.w = _RESERVED_IDENTIFIER_FIXUP_1336;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3330.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1336;
        float _RESERVED_IDENTIFIER_FIXUP_1405 = _RESERVED_IDENTIFIER_FIXUP_1376 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1405;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1412 = _RESERVED_IDENTIFIER_FIXUP_3300.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3343;
        _RESERVED_IDENTIFIER_FIXUP_3343.x = _RESERVED_IDENTIFIER_FIXUP_1412.x;
        _RESERVED_IDENTIFIER_FIXUP_3343.y = _RESERVED_IDENTIFIER_FIXUP_1412.y;
        _RESERVED_IDENTIFIER_FIXUP_3343.w = _RESERVED_IDENTIFIER_FIXUP_1336;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3343.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1336;
        float _RESERVED_IDENTIFIER_FIXUP_1434 = _RESERVED_IDENTIFIER_FIXUP_1405 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1434;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1441 = _RESERVED_IDENTIFIER_FIXUP_3300.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3356;
        _RESERVED_IDENTIFIER_FIXUP_3356.x = _RESERVED_IDENTIFIER_FIXUP_1441.x;
        _RESERVED_IDENTIFIER_FIXUP_3356.y = _RESERVED_IDENTIFIER_FIXUP_1441.y;
        _RESERVED_IDENTIFIER_FIXUP_3356.w = _RESERVED_IDENTIFIER_FIXUP_1336;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3356.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1336;
        float _RESERVED_IDENTIFIER_FIXUP_1463 = _RESERVED_IDENTIFIER_FIXUP_1434 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1463;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_3300.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3369;
        _RESERVED_IDENTIFIER_FIXUP_3369.x = _RESERVED_IDENTIFIER_FIXUP_1470.x;
        _RESERVED_IDENTIFIER_FIXUP_3369.y = _RESERVED_IDENTIFIER_FIXUP_1470.y;
        _RESERVED_IDENTIFIER_FIXUP_3369.w = _RESERVED_IDENTIFIER_FIXUP_1336;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3369.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1336;
        float _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_1463 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1492;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_3300.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3382;
        _RESERVED_IDENTIFIER_FIXUP_3382.x = _RESERVED_IDENTIFIER_FIXUP_1499.x;
        _RESERVED_IDENTIFIER_FIXUP_3382.y = _RESERVED_IDENTIFIER_FIXUP_1499.y;
        _RESERVED_IDENTIFIER_FIXUP_3382.w = _RESERVED_IDENTIFIER_FIXUP_1336;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3382.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1336;
        float _RESERVED_IDENTIFIER_FIXUP_1521 = _RESERVED_IDENTIFIER_FIXUP_1492 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1521;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_3300.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3395;
        _RESERVED_IDENTIFIER_FIXUP_3395.x = _RESERVED_IDENTIFIER_FIXUP_1528.x;
        _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_1528.y;
        _RESERVED_IDENTIFIER_FIXUP_3395.w = _RESERVED_IDENTIFIER_FIXUP_1336;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3395.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1336;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1545 = hdLod5(param_19, param_20);
        float _RESERVED_IDENTIFIER_FIXUP_1550 = _RESERVED_IDENTIFIER_FIXUP_1521 + _RESERVED_IDENTIFIER_FIXUP_1545.x;
        _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1550;
        _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_1550 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3850 = _RESERVED_IDENTIFIER_FIXUP_1545;
        _RESERVED_IDENTIFIER_FIXUP_3847 = _RESERVED_IDENTIFIER_FIXUP_3300;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1563 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_1563;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3851;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3848;
        if (_RESERVED_IDENTIFIER_FIXUP_1563 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1572 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1582 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1584 = _RESERVED_IDENTIFIER_FIXUP_1582.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3240 = _RESERVED_IDENTIFIER_FIXUP_3088;
            _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_1584;
            _RESERVED_IDENTIFIER_FIXUP_3240.z = _RESERVED_IDENTIFIER_FIXUP_1582.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1592 = _RESERVED_IDENTIFIER_FIXUP_3240.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3244;
            _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_1592.x;
            _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_1592.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1599 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1603 = _RESERVED_IDENTIFIER_FIXUP_1599.y;
            _RESERVED_IDENTIFIER_FIXUP_3244.w = _RESERVED_IDENTIFIER_FIXUP_1603;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1572.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1572.w;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3244.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1603;
            float _RESERVED_IDENTIFIER_FIXUP_1614 = hdLod6(param_21, param_22).x + hdLod6(param_23, param_24).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3870 = vec4(_RESERVED_IDENTIFIER_FIXUP_1293, _RESERVED_IDENTIFIER_FIXUP_1584, _RESERVED_IDENTIFIER_FIXUP_1582.y, _RESERVED_IDENTIFIER_FIXUP_1614);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1621 = _RESERVED_IDENTIFIER_FIXUP_3870.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3257;
            _RESERVED_IDENTIFIER_FIXUP_3257.x = _RESERVED_IDENTIFIER_FIXUP_1621.x;
            _RESERVED_IDENTIFIER_FIXUP_3257.y = _RESERVED_IDENTIFIER_FIXUP_1621.y;
            _RESERVED_IDENTIFIER_FIXUP_3257.w = _RESERVED_IDENTIFIER_FIXUP_1603;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3257.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1603;
            float _RESERVED_IDENTIFIER_FIXUP_1643 = _RESERVED_IDENTIFIER_FIXUP_1614 + hdLod6(param_25, param_26).x;
            _RESERVED_IDENTIFIER_FIXUP_3870.w = _RESERVED_IDENTIFIER_FIXUP_1643;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1650 = _RESERVED_IDENTIFIER_FIXUP_3870.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3270;
            _RESERVED_IDENTIFIER_FIXUP_3270.x = _RESERVED_IDENTIFIER_FIXUP_1650.x;
            _RESERVED_IDENTIFIER_FIXUP_3270.y = _RESERVED_IDENTIFIER_FIXUP_1650.y;
            _RESERVED_IDENTIFIER_FIXUP_3270.w = _RESERVED_IDENTIFIER_FIXUP_1603;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3270.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1603;
            float _RESERVED_IDENTIFIER_FIXUP_1672 = _RESERVED_IDENTIFIER_FIXUP_1643 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_3870.w = _RESERVED_IDENTIFIER_FIXUP_1672;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1679 = _RESERVED_IDENTIFIER_FIXUP_3870.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3283;
            _RESERVED_IDENTIFIER_FIXUP_3283.x = _RESERVED_IDENTIFIER_FIXUP_1679.x;
            _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_1679.y;
            _RESERVED_IDENTIFIER_FIXUP_3283.w = _RESERVED_IDENTIFIER_FIXUP_1603;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3283.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1603;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1696 = hdLod6(param_29, param_30);
            float _RESERVED_IDENTIFIER_FIXUP_1701 = _RESERVED_IDENTIFIER_FIXUP_1672 + _RESERVED_IDENTIFIER_FIXUP_1696.x;
            _RESERVED_IDENTIFIER_FIXUP_3870.y = _RESERVED_IDENTIFIER_FIXUP_1701;
            _RESERVED_IDENTIFIER_FIXUP_3870.x = _RESERVED_IDENTIFIER_FIXUP_1701 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3851 = _RESERVED_IDENTIFIER_FIXUP_1696;
            _RESERVED_IDENTIFIER_FIXUP_3848 = _RESERVED_IDENTIFIER_FIXUP_3870;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1714 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3105 = _RESERVED_IDENTIFIER_FIXUP_3088;
            _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_1714;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3852;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3849;
            if (_RESERVED_IDENTIFIER_FIXUP_1714 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1723 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1733 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1735 = _RESERVED_IDENTIFIER_FIXUP_1733.x;
                _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_1735;
                _RESERVED_IDENTIFIER_FIXUP_3105.z = _RESERVED_IDENTIFIER_FIXUP_1733.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1743 = _RESERVED_IDENTIFIER_FIXUP_3105.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3184;
                _RESERVED_IDENTIFIER_FIXUP_3184.x = _RESERVED_IDENTIFIER_FIXUP_1743.x;
                _RESERVED_IDENTIFIER_FIXUP_3184.y = _RESERVED_IDENTIFIER_FIXUP_1743.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1750 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1754 = _RESERVED_IDENTIFIER_FIXUP_1750.y;
                _RESERVED_IDENTIFIER_FIXUP_3184.w = _RESERVED_IDENTIFIER_FIXUP_1754;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1723.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1723.w;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3184.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1754;
                float _RESERVED_IDENTIFIER_FIXUP_1765 = hdLod7(param_31, param_32).x + hdLod7(param_33, param_34).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3869 = vec4(_RESERVED_IDENTIFIER_FIXUP_1293, _RESERVED_IDENTIFIER_FIXUP_1735, _RESERVED_IDENTIFIER_FIXUP_1733.y, _RESERVED_IDENTIFIER_FIXUP_1765);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1772 = _RESERVED_IDENTIFIER_FIXUP_3869.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3197;
                _RESERVED_IDENTIFIER_FIXUP_3197.x = _RESERVED_IDENTIFIER_FIXUP_1772.x;
                _RESERVED_IDENTIFIER_FIXUP_3197.y = _RESERVED_IDENTIFIER_FIXUP_1772.y;
                _RESERVED_IDENTIFIER_FIXUP_3197.w = _RESERVED_IDENTIFIER_FIXUP_1754;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3197.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1754;
                float _RESERVED_IDENTIFIER_FIXUP_1794 = _RESERVED_IDENTIFIER_FIXUP_1765 + hdLod7(param_35, param_36).x;
                _RESERVED_IDENTIFIER_FIXUP_3869.w = _RESERVED_IDENTIFIER_FIXUP_1794;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1801 = _RESERVED_IDENTIFIER_FIXUP_3869.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3210;
                _RESERVED_IDENTIFIER_FIXUP_3210.x = _RESERVED_IDENTIFIER_FIXUP_1801.x;
                _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_1801.y;
                _RESERVED_IDENTIFIER_FIXUP_3210.w = _RESERVED_IDENTIFIER_FIXUP_1754;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3210.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1754;
                float _RESERVED_IDENTIFIER_FIXUP_1823 = _RESERVED_IDENTIFIER_FIXUP_1794 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_3869.w = _RESERVED_IDENTIFIER_FIXUP_1823;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1830 = _RESERVED_IDENTIFIER_FIXUP_3869.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3223;
                _RESERVED_IDENTIFIER_FIXUP_3223.x = _RESERVED_IDENTIFIER_FIXUP_1830.x;
                _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_1830.y;
                _RESERVED_IDENTIFIER_FIXUP_3223.w = _RESERVED_IDENTIFIER_FIXUP_1754;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3223.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1754;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1847 = hdLod7(param_39, param_40);
                float _RESERVED_IDENTIFIER_FIXUP_1852 = _RESERVED_IDENTIFIER_FIXUP_1823 + _RESERVED_IDENTIFIER_FIXUP_1847.x;
                _RESERVED_IDENTIFIER_FIXUP_3869.y = _RESERVED_IDENTIFIER_FIXUP_1852;
                _RESERVED_IDENTIFIER_FIXUP_3869.x = _RESERVED_IDENTIFIER_FIXUP_1852 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3852 = _RESERVED_IDENTIFIER_FIXUP_1847;
                _RESERVED_IDENTIFIER_FIXUP_3849 = _RESERVED_IDENTIFIER_FIXUP_3869;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1868 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1872 = _RESERVED_IDENTIFIER_FIXUP_1868.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1883 = vec4(_RESERVED_IDENTIFIER_FIXUP_1868.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1872).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3866 = vec4(_RESERVED_IDENTIFIER_FIXUP_1883 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1872);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1920 = _RESERVED_IDENTIFIER_FIXUP_1883 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3138 = _RESERVED_IDENTIFIER_FIXUP_3866;
                _RESERVED_IDENTIFIER_FIXUP_3138.x = _RESERVED_IDENTIFIER_FIXUP_1920.x;
                _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_1920.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1942 = _RESERVED_IDENTIFIER_FIXUP_1883 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3147 = _RESERVED_IDENTIFIER_FIXUP_3138;
                _RESERVED_IDENTIFIER_FIXUP_3147.x = _RESERVED_IDENTIFIER_FIXUP_1942.x;
                _RESERVED_IDENTIFIER_FIXUP_3147.y = _RESERVED_IDENTIFIER_FIXUP_1942.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1964 = _RESERVED_IDENTIFIER_FIXUP_1883 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3156 = _RESERVED_IDENTIFIER_FIXUP_3147;
                _RESERVED_IDENTIFIER_FIXUP_3156.x = _RESERVED_IDENTIFIER_FIXUP_1964.x;
                _RESERVED_IDENTIFIER_FIXUP_3156.y = _RESERVED_IDENTIFIER_FIXUP_1964.y;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3156.xy;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1872;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1974 = hdLod8(param_41, param_42);
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_1883;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1872;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3866.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1872;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3138.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1872;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3147.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_1872;
                float _RESERVED_IDENTIFIER_FIXUP_1979 = (((hdLod8(param_43, param_44).x + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x) + _RESERVED_IDENTIFIER_FIXUP_1974.x;
                float _RESERVED_IDENTIFIER_FIXUP_1987 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3167 = _RESERVED_IDENTIFIER_FIXUP_1974;
                _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_1987;
                float _RESERVED_IDENTIFIER_FIXUP_1993 = clamp((_RESERVED_IDENTIFIER_FIXUP_1987 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1998 = (_RESERVED_IDENTIFIER_FIXUP_1979 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3852 = _RESERVED_IDENTIFIER_FIXUP_3167;
                _RESERVED_IDENTIFIER_FIXUP_3849 = vec4((_RESERVED_IDENTIFIER_FIXUP_1993 * _RESERVED_IDENTIFIER_FIXUP_1998) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1993, _RESERVED_IDENTIFIER_FIXUP_1998, _RESERVED_IDENTIFIER_FIXUP_1979);
            }
            _RESERVED_IDENTIFIER_FIXUP_3851 = _RESERVED_IDENTIFIER_FIXUP_3852;
            _RESERVED_IDENTIFIER_FIXUP_3848 = _RESERVED_IDENTIFIER_FIXUP_3849;
        }
        _RESERVED_IDENTIFIER_FIXUP_3850 = _RESERVED_IDENTIFIER_FIXUP_3851;
        _RESERVED_IDENTIFIER_FIXUP_3847 = _RESERVED_IDENTIFIER_FIXUP_3848;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3414 = _RESERVED_IDENTIFIER_FIXUP_3847;
    _RESERVED_IDENTIFIER_FIXUP_3414.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3416 = _RESERVED_IDENTIFIER_FIXUP_3850;
    _RESERVED_IDENTIFIER_FIXUP_3416.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3416.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3416.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2037 = _RESERVED_IDENTIFIER_FIXUP_3414.xxx * _RESERVED_IDENTIFIER_FIXUP_3416.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3871 = vec4(_RESERVED_IDENTIFIER_FIXUP_2037.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2037.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2051 = (mix(_RESERVED_IDENTIFIER_FIXUP_3068, _RESERVED_IDENTIFIER_FIXUP_3080, _RESERVED_IDENTIFIER_FIXUP_1198.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_3871.yyy) + _RESERVED_IDENTIFIER_FIXUP_3871.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3428 = _RESERVED_IDENTIFIER_FIXUP_3871;
    _RESERVED_IDENTIFIER_FIXUP_3428.x = _RESERVED_IDENTIFIER_FIXUP_2051.x;
    _RESERVED_IDENTIFIER_FIXUP_3428.y = _RESERVED_IDENTIFIER_FIXUP_2051.y;
    _RESERVED_IDENTIFIER_FIXUP_3428.z = _RESERVED_IDENTIFIER_FIXUP_2051.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2064 = _RESERVED_IDENTIFIER_FIXUP_3428.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3434 = _RESERVED_IDENTIFIER_FIXUP_3428;
    _RESERVED_IDENTIFIER_FIXUP_3434.x = _RESERVED_IDENTIFIER_FIXUP_2064.x;
    _RESERVED_IDENTIFIER_FIXUP_3434.y = _RESERVED_IDENTIFIER_FIXUP_2064.y;
    _RESERVED_IDENTIFIER_FIXUP_3434.z = _RESERVED_IDENTIFIER_FIXUP_2064.z;
    vec2 param_51 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2117 = hdTex0(param_51);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2121 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2125 = hdTex2(param_53);
    _RESERVED_IDENTIFIER_FIXUP_2125.y = _RESERVED_IDENTIFIER_FIXUP_1204;
    _RESERVED_IDENTIFIER_FIXUP_2125.z = _RESERVED_IDENTIFIER_FIXUP_1206;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2138 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3452;
    _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_2138.x;
    _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_2138.y;
    _RESERVED_IDENTIFIER_FIXUP_3452.z = _RESERVED_IDENTIFIER_FIXUP_2138.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2146 = _RESERVED_IDENTIFIER_FIXUP_2117.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2149 = _RESERVED_IDENTIFIER_FIXUP_2146 * _RESERVED_IDENTIFIER_FIXUP_3452.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3458 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3458.x = _RESERVED_IDENTIFIER_FIXUP_2149.x;
    _RESERVED_IDENTIFIER_FIXUP_3458.y = _RESERVED_IDENTIFIER_FIXUP_2149.y;
    _RESERVED_IDENTIFIER_FIXUP_3458.z = _RESERVED_IDENTIFIER_FIXUP_2149.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2164 = mix(_RESERVED_IDENTIFIER_FIXUP_3458.xyz, _RESERVED_IDENTIFIER_FIXUP_2146, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2125.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_2117;
    _RESERVED_IDENTIFIER_FIXUP_3464.x = _RESERVED_IDENTIFIER_FIXUP_2164.x;
    _RESERVED_IDENTIFIER_FIXUP_3464.y = _RESERVED_IDENTIFIER_FIXUP_2164.y;
    _RESERVED_IDENTIFIER_FIXUP_3464.z = _RESERVED_IDENTIFIER_FIXUP_2164.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2172 = _RESERVED_IDENTIFIER_FIXUP_2121.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2175 = _RESERVED_IDENTIFIER_FIXUP_2172 * _RESERVED_IDENTIFIER_FIXUP_3452.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3470;
    _RESERVED_IDENTIFIER_FIXUP_3470.x = _RESERVED_IDENTIFIER_FIXUP_2175.x;
    _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_2175.y;
    _RESERVED_IDENTIFIER_FIXUP_3470.z = _RESERVED_IDENTIFIER_FIXUP_2175.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2190 = mix(_RESERVED_IDENTIFIER_FIXUP_3470.xyz, _RESERVED_IDENTIFIER_FIXUP_2172, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2125.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3476 = _RESERVED_IDENTIFIER_FIXUP_2121;
    _RESERVED_IDENTIFIER_FIXUP_3476.x = _RESERVED_IDENTIFIER_FIXUP_2190.x;
    _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2190.y;
    _RESERVED_IDENTIFIER_FIXUP_3476.z = _RESERVED_IDENTIFIER_FIXUP_2190.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2201 = mix(_RESERVED_IDENTIFIER_FIXUP_3464, _RESERVED_IDENTIFIER_FIXUP_3476, _RESERVED_IDENTIFIER_FIXUP_2125.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3484 = _RESERVED_IDENTIFIER_FIXUP_3464;
    _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_1281;
    float _RESERVED_IDENTIFIER_FIXUP_2214 = clamp((_RESERVED_IDENTIFIER_FIXUP_1281 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_2214;
    float _RESERVED_IDENTIFIER_FIXUP_2220 = ((-_RESERVED_IDENTIFIER_FIXUP_2214) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_2220;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3859;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3856;
    if (_RESERVED_IDENTIFIER_FIXUP_2220 != (-_RESERVED_IDENTIFIER_FIXUP_2220))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2232 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2232.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2232.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2238 = hdLod5(param_54, param_55);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2242 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3696 = _RESERVED_IDENTIFIER_FIXUP_2238;
        _RESERVED_IDENTIFIER_FIXUP_3696.y = _RESERVED_IDENTIFIER_FIXUP_2242.x;
        _RESERVED_IDENTIFIER_FIXUP_3696.z = _RESERVED_IDENTIFIER_FIXUP_2242.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2252 = _RESERVED_IDENTIFIER_FIXUP_3696.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3700;
        _RESERVED_IDENTIFIER_FIXUP_3700.x = _RESERVED_IDENTIFIER_FIXUP_2252.x;
        _RESERVED_IDENTIFIER_FIXUP_3700.y = _RESERVED_IDENTIFIER_FIXUP_2252.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2259 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2263 = _RESERVED_IDENTIFIER_FIXUP_2259.y;
        _RESERVED_IDENTIFIER_FIXUP_3700.w = _RESERVED_IDENTIFIER_FIXUP_2263;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3700.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2263;
        float _RESERVED_IDENTIFIER_FIXUP_2274 = _RESERVED_IDENTIFIER_FIXUP_2238.x + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2274;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2281 = _RESERVED_IDENTIFIER_FIXUP_3696.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3713;
        _RESERVED_IDENTIFIER_FIXUP_3713.x = _RESERVED_IDENTIFIER_FIXUP_2281.x;
        _RESERVED_IDENTIFIER_FIXUP_3713.y = _RESERVED_IDENTIFIER_FIXUP_2281.y;
        _RESERVED_IDENTIFIER_FIXUP_3713.w = _RESERVED_IDENTIFIER_FIXUP_2263;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3713.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2263;
        float _RESERVED_IDENTIFIER_FIXUP_2303 = _RESERVED_IDENTIFIER_FIXUP_2274 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2303;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2310 = _RESERVED_IDENTIFIER_FIXUP_3696.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3726;
        _RESERVED_IDENTIFIER_FIXUP_3726.x = _RESERVED_IDENTIFIER_FIXUP_2310.x;
        _RESERVED_IDENTIFIER_FIXUP_3726.y = _RESERVED_IDENTIFIER_FIXUP_2310.y;
        _RESERVED_IDENTIFIER_FIXUP_3726.w = _RESERVED_IDENTIFIER_FIXUP_2263;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3726.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2263;
        float _RESERVED_IDENTIFIER_FIXUP_2332 = _RESERVED_IDENTIFIER_FIXUP_2303 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2332;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2339 = _RESERVED_IDENTIFIER_FIXUP_3696.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3739;
        _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_2339.x;
        _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2339.y;
        _RESERVED_IDENTIFIER_FIXUP_3739.w = _RESERVED_IDENTIFIER_FIXUP_2263;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3739.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2263;
        float _RESERVED_IDENTIFIER_FIXUP_2361 = _RESERVED_IDENTIFIER_FIXUP_2332 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2361;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2368 = _RESERVED_IDENTIFIER_FIXUP_3696.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3752;
        _RESERVED_IDENTIFIER_FIXUP_3752.x = _RESERVED_IDENTIFIER_FIXUP_2368.x;
        _RESERVED_IDENTIFIER_FIXUP_3752.y = _RESERVED_IDENTIFIER_FIXUP_2368.y;
        _RESERVED_IDENTIFIER_FIXUP_3752.w = _RESERVED_IDENTIFIER_FIXUP_2263;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3752.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2263;
        float _RESERVED_IDENTIFIER_FIXUP_2390 = _RESERVED_IDENTIFIER_FIXUP_2361 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2390;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2397 = _RESERVED_IDENTIFIER_FIXUP_3696.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3765;
        _RESERVED_IDENTIFIER_FIXUP_3765.x = _RESERVED_IDENTIFIER_FIXUP_2397.x;
        _RESERVED_IDENTIFIER_FIXUP_3765.y = _RESERVED_IDENTIFIER_FIXUP_2397.y;
        _RESERVED_IDENTIFIER_FIXUP_3765.w = _RESERVED_IDENTIFIER_FIXUP_2263;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3765.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2263;
        float _RESERVED_IDENTIFIER_FIXUP_2419 = _RESERVED_IDENTIFIER_FIXUP_2390 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2419;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2426 = _RESERVED_IDENTIFIER_FIXUP_3696.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3778;
        _RESERVED_IDENTIFIER_FIXUP_3778.x = _RESERVED_IDENTIFIER_FIXUP_2426.x;
        _RESERVED_IDENTIFIER_FIXUP_3778.y = _RESERVED_IDENTIFIER_FIXUP_2426.y;
        _RESERVED_IDENTIFIER_FIXUP_3778.w = _RESERVED_IDENTIFIER_FIXUP_2263;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3778.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2263;
        float _RESERVED_IDENTIFIER_FIXUP_2448 = _RESERVED_IDENTIFIER_FIXUP_2419 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2448;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2455 = _RESERVED_IDENTIFIER_FIXUP_3696.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3791;
        _RESERVED_IDENTIFIER_FIXUP_3791.x = _RESERVED_IDENTIFIER_FIXUP_2455.x;
        _RESERVED_IDENTIFIER_FIXUP_3791.y = _RESERVED_IDENTIFIER_FIXUP_2455.y;
        _RESERVED_IDENTIFIER_FIXUP_3791.w = _RESERVED_IDENTIFIER_FIXUP_2263;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3791.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2263;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2472 = hdLod5(param_70, param_71);
        float _RESERVED_IDENTIFIER_FIXUP_2477 = _RESERVED_IDENTIFIER_FIXUP_2448 + _RESERVED_IDENTIFIER_FIXUP_2472.x;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2477;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2477 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3859 = _RESERVED_IDENTIFIER_FIXUP_2472;
        _RESERVED_IDENTIFIER_FIXUP_3856 = _RESERVED_IDENTIFIER_FIXUP_3696;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2490 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2490;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3860;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3857;
        if (_RESERVED_IDENTIFIER_FIXUP_2490 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2499 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2509 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2511 = _RESERVED_IDENTIFIER_FIXUP_2509.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3636 = _RESERVED_IDENTIFIER_FIXUP_3484;
            _RESERVED_IDENTIFIER_FIXUP_3636.y = _RESERVED_IDENTIFIER_FIXUP_2511;
            _RESERVED_IDENTIFIER_FIXUP_3636.z = _RESERVED_IDENTIFIER_FIXUP_2509.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2519 = _RESERVED_IDENTIFIER_FIXUP_3636.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3640;
            _RESERVED_IDENTIFIER_FIXUP_3640.x = _RESERVED_IDENTIFIER_FIXUP_2519.x;
            _RESERVED_IDENTIFIER_FIXUP_3640.y = _RESERVED_IDENTIFIER_FIXUP_2519.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2526 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2530 = _RESERVED_IDENTIFIER_FIXUP_2526.y;
            _RESERVED_IDENTIFIER_FIXUP_3640.w = _RESERVED_IDENTIFIER_FIXUP_2530;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2499.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2499.w;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3640.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2530;
            float _RESERVED_IDENTIFIER_FIXUP_2541 = hdLod6(param_72, param_73).x + hdLod6(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3878 = vec4(_RESERVED_IDENTIFIER_FIXUP_2220, _RESERVED_IDENTIFIER_FIXUP_2511, _RESERVED_IDENTIFIER_FIXUP_2509.y, _RESERVED_IDENTIFIER_FIXUP_2541);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2548 = _RESERVED_IDENTIFIER_FIXUP_3878.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3653;
            _RESERVED_IDENTIFIER_FIXUP_3653.x = _RESERVED_IDENTIFIER_FIXUP_2548.x;
            _RESERVED_IDENTIFIER_FIXUP_3653.y = _RESERVED_IDENTIFIER_FIXUP_2548.y;
            _RESERVED_IDENTIFIER_FIXUP_3653.w = _RESERVED_IDENTIFIER_FIXUP_2530;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3653.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2530;
            float _RESERVED_IDENTIFIER_FIXUP_2570 = _RESERVED_IDENTIFIER_FIXUP_2541 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3878.w = _RESERVED_IDENTIFIER_FIXUP_2570;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2577 = _RESERVED_IDENTIFIER_FIXUP_3878.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3666;
            _RESERVED_IDENTIFIER_FIXUP_3666.x = _RESERVED_IDENTIFIER_FIXUP_2577.x;
            _RESERVED_IDENTIFIER_FIXUP_3666.y = _RESERVED_IDENTIFIER_FIXUP_2577.y;
            _RESERVED_IDENTIFIER_FIXUP_3666.w = _RESERVED_IDENTIFIER_FIXUP_2530;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3666.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2530;
            float _RESERVED_IDENTIFIER_FIXUP_2599 = _RESERVED_IDENTIFIER_FIXUP_2570 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3878.w = _RESERVED_IDENTIFIER_FIXUP_2599;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2606 = _RESERVED_IDENTIFIER_FIXUP_3878.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3679;
            _RESERVED_IDENTIFIER_FIXUP_3679.x = _RESERVED_IDENTIFIER_FIXUP_2606.x;
            _RESERVED_IDENTIFIER_FIXUP_3679.y = _RESERVED_IDENTIFIER_FIXUP_2606.y;
            _RESERVED_IDENTIFIER_FIXUP_3679.w = _RESERVED_IDENTIFIER_FIXUP_2530;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3679.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2530;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2623 = hdLod6(param_80, param_81);
            float _RESERVED_IDENTIFIER_FIXUP_2628 = _RESERVED_IDENTIFIER_FIXUP_2599 + _RESERVED_IDENTIFIER_FIXUP_2623.x;
            _RESERVED_IDENTIFIER_FIXUP_3878.y = _RESERVED_IDENTIFIER_FIXUP_2628;
            _RESERVED_IDENTIFIER_FIXUP_3878.x = _RESERVED_IDENTIFIER_FIXUP_2628 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3860 = _RESERVED_IDENTIFIER_FIXUP_2623;
            _RESERVED_IDENTIFIER_FIXUP_3857 = _RESERVED_IDENTIFIER_FIXUP_3878;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2641 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3501 = _RESERVED_IDENTIFIER_FIXUP_3484;
            _RESERVED_IDENTIFIER_FIXUP_3501.y = _RESERVED_IDENTIFIER_FIXUP_2641;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3861;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3858;
            if (_RESERVED_IDENTIFIER_FIXUP_2641 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2650 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2660 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2662 = _RESERVED_IDENTIFIER_FIXUP_2660.x;
                _RESERVED_IDENTIFIER_FIXUP_3501.y = _RESERVED_IDENTIFIER_FIXUP_2662;
                _RESERVED_IDENTIFIER_FIXUP_3501.z = _RESERVED_IDENTIFIER_FIXUP_2660.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2670 = _RESERVED_IDENTIFIER_FIXUP_3501.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3580;
                _RESERVED_IDENTIFIER_FIXUP_3580.x = _RESERVED_IDENTIFIER_FIXUP_2670.x;
                _RESERVED_IDENTIFIER_FIXUP_3580.y = _RESERVED_IDENTIFIER_FIXUP_2670.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2677 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2681 = _RESERVED_IDENTIFIER_FIXUP_2677.y;
                _RESERVED_IDENTIFIER_FIXUP_3580.w = _RESERVED_IDENTIFIER_FIXUP_2681;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2650.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2650.w;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3580.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2681;
                float _RESERVED_IDENTIFIER_FIXUP_2692 = hdLod7(param_82, param_83).x + hdLod7(param_84, param_85).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3877 = vec4(_RESERVED_IDENTIFIER_FIXUP_2220, _RESERVED_IDENTIFIER_FIXUP_2662, _RESERVED_IDENTIFIER_FIXUP_2660.y, _RESERVED_IDENTIFIER_FIXUP_2692);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2699 = _RESERVED_IDENTIFIER_FIXUP_3877.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3593;
                _RESERVED_IDENTIFIER_FIXUP_3593.x = _RESERVED_IDENTIFIER_FIXUP_2699.x;
                _RESERVED_IDENTIFIER_FIXUP_3593.y = _RESERVED_IDENTIFIER_FIXUP_2699.y;
                _RESERVED_IDENTIFIER_FIXUP_3593.w = _RESERVED_IDENTIFIER_FIXUP_2681;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3593.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2681;
                float _RESERVED_IDENTIFIER_FIXUP_2721 = _RESERVED_IDENTIFIER_FIXUP_2692 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3877.w = _RESERVED_IDENTIFIER_FIXUP_2721;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2728 = _RESERVED_IDENTIFIER_FIXUP_3877.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3606;
                _RESERVED_IDENTIFIER_FIXUP_3606.x = _RESERVED_IDENTIFIER_FIXUP_2728.x;
                _RESERVED_IDENTIFIER_FIXUP_3606.y = _RESERVED_IDENTIFIER_FIXUP_2728.y;
                _RESERVED_IDENTIFIER_FIXUP_3606.w = _RESERVED_IDENTIFIER_FIXUP_2681;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3606.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2681;
                float _RESERVED_IDENTIFIER_FIXUP_2750 = _RESERVED_IDENTIFIER_FIXUP_2721 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3877.w = _RESERVED_IDENTIFIER_FIXUP_2750;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2757 = _RESERVED_IDENTIFIER_FIXUP_3877.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3619;
                _RESERVED_IDENTIFIER_FIXUP_3619.x = _RESERVED_IDENTIFIER_FIXUP_2757.x;
                _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_2757.y;
                _RESERVED_IDENTIFIER_FIXUP_3619.w = _RESERVED_IDENTIFIER_FIXUP_2681;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3619.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2681;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2774 = hdLod7(param_90, param_91);
                float _RESERVED_IDENTIFIER_FIXUP_2779 = _RESERVED_IDENTIFIER_FIXUP_2750 + _RESERVED_IDENTIFIER_FIXUP_2774.x;
                _RESERVED_IDENTIFIER_FIXUP_3877.y = _RESERVED_IDENTIFIER_FIXUP_2779;
                _RESERVED_IDENTIFIER_FIXUP_3877.x = _RESERVED_IDENTIFIER_FIXUP_2779 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3861 = _RESERVED_IDENTIFIER_FIXUP_2774;
                _RESERVED_IDENTIFIER_FIXUP_3858 = _RESERVED_IDENTIFIER_FIXUP_3877;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2795 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2799 = _RESERVED_IDENTIFIER_FIXUP_2795.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2810 = vec4(_RESERVED_IDENTIFIER_FIXUP_2795.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2799).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3874 = vec4(_RESERVED_IDENTIFIER_FIXUP_2810 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2799);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2847 = _RESERVED_IDENTIFIER_FIXUP_2810 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3534 = _RESERVED_IDENTIFIER_FIXUP_3874;
                _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_2847.x;
                _RESERVED_IDENTIFIER_FIXUP_3534.y = _RESERVED_IDENTIFIER_FIXUP_2847.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2869 = _RESERVED_IDENTIFIER_FIXUP_2810 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3543 = _RESERVED_IDENTIFIER_FIXUP_3534;
                _RESERVED_IDENTIFIER_FIXUP_3543.x = _RESERVED_IDENTIFIER_FIXUP_2869.x;
                _RESERVED_IDENTIFIER_FIXUP_3543.y = _RESERVED_IDENTIFIER_FIXUP_2869.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2891 = _RESERVED_IDENTIFIER_FIXUP_2810 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3552 = _RESERVED_IDENTIFIER_FIXUP_3543;
                _RESERVED_IDENTIFIER_FIXUP_3552.x = _RESERVED_IDENTIFIER_FIXUP_2891.x;
                _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_2891.y;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3552.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2799;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2901 = hdLod8(param_92, param_93);
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_2810;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2799;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3874.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2799;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3534.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2799;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3543.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2799;
                float _RESERVED_IDENTIFIER_FIXUP_2906 = (((hdLod8(param_94, param_95).x + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + _RESERVED_IDENTIFIER_FIXUP_2901.x;
                float _RESERVED_IDENTIFIER_FIXUP_2914 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3563 = _RESERVED_IDENTIFIER_FIXUP_2901;
                _RESERVED_IDENTIFIER_FIXUP_3563.x = _RESERVED_IDENTIFIER_FIXUP_2914;
                float _RESERVED_IDENTIFIER_FIXUP_2920 = clamp((_RESERVED_IDENTIFIER_FIXUP_2914 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2925 = (_RESERVED_IDENTIFIER_FIXUP_2906 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3861 = _RESERVED_IDENTIFIER_FIXUP_3563;
                _RESERVED_IDENTIFIER_FIXUP_3858 = vec4((_RESERVED_IDENTIFIER_FIXUP_2920 * _RESERVED_IDENTIFIER_FIXUP_2925) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2920, _RESERVED_IDENTIFIER_FIXUP_2925, _RESERVED_IDENTIFIER_FIXUP_2906);
            }
            _RESERVED_IDENTIFIER_FIXUP_3860 = _RESERVED_IDENTIFIER_FIXUP_3861;
            _RESERVED_IDENTIFIER_FIXUP_3857 = _RESERVED_IDENTIFIER_FIXUP_3858;
        }
        _RESERVED_IDENTIFIER_FIXUP_3859 = _RESERVED_IDENTIFIER_FIXUP_3860;
        _RESERVED_IDENTIFIER_FIXUP_3856 = _RESERVED_IDENTIFIER_FIXUP_3857;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2940 = (_RESERVED_IDENTIFIER_FIXUP_3856.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3808 = _RESERVED_IDENTIFIER_FIXUP_3856;
    _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_2940;
    _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_2940;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2953 = _RESERVED_IDENTIFIER_FIXUP_2201.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3814 = _RESERVED_IDENTIFIER_FIXUP_3859;
    _RESERVED_IDENTIFIER_FIXUP_3814.x = _RESERVED_IDENTIFIER_FIXUP_2953.x;
    _RESERVED_IDENTIFIER_FIXUP_3814.y = _RESERVED_IDENTIFIER_FIXUP_2953.y;
    _RESERVED_IDENTIFIER_FIXUP_3814.z = _RESERVED_IDENTIFIER_FIXUP_2953.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2964 = _RESERVED_IDENTIFIER_FIXUP_3808.xxx * _RESERVED_IDENTIFIER_FIXUP_3814.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3879 = vec4(_RESERVED_IDENTIFIER_FIXUP_2964.x, _RESERVED_IDENTIFIER_FIXUP_2940, _RESERVED_IDENTIFIER_FIXUP_2964.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2978 = (_RESERVED_IDENTIFIER_FIXUP_2201.xyz * _RESERVED_IDENTIFIER_FIXUP_3879.yyy) + _RESERVED_IDENTIFIER_FIXUP_3879.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3826 = _RESERVED_IDENTIFIER_FIXUP_3879;
    _RESERVED_IDENTIFIER_FIXUP_3826.x = _RESERVED_IDENTIFIER_FIXUP_2978.x;
    _RESERVED_IDENTIFIER_FIXUP_3826.y = _RESERVED_IDENTIFIER_FIXUP_2978.y;
    _RESERVED_IDENTIFIER_FIXUP_3826.z = _RESERVED_IDENTIFIER_FIXUP_2978.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2991 = _RESERVED_IDENTIFIER_FIXUP_3826.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3832 = _RESERVED_IDENTIFIER_FIXUP_3826;
    _RESERVED_IDENTIFIER_FIXUP_3832.x = _RESERVED_IDENTIFIER_FIXUP_2991.x;
    _RESERVED_IDENTIFIER_FIXUP_3832.y = _RESERVED_IDENTIFIER_FIXUP_2991.y;
    _RESERVED_IDENTIFIER_FIXUP_3832.z = _RESERVED_IDENTIFIER_FIXUP_2991.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3832.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1052 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1061;
    if (_RESERVED_IDENTIFIER_FIXUP_1052)
    {
        _RESERVED_IDENTIFIER_FIXUP_1061 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1061 = _RESERVED_IDENTIFIER_FIXUP_1052;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1061)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1098 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3434.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1124 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3044;
    if (_RESERVED_IDENTIFIER_FIXUP_1098 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3044 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1098), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1124);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3044 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1124);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3044;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2940);
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
    r2.y = hdB80.x;
    r2.z = hdB80.y;
    vec3 hdB93 = v0.xyz + v0.xyz;
    r3.x = hdB93.x;
    r3.y = hdB93.y;
    r3.z = hdB93.z;
    vec3 hdB105 = r0.xyz * r3.xyz;
    r4.x = hdB105.x;
    r4.y = hdB105.y;
    r4.z = hdB105.z;
    vec4 hdB114 = r0;
    vec3 hdB123 = mix(r4.xyz, hdB114.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = hdB123.x;
    r0.y = hdB123.y;
    r0.z = hdB123.z;
    vec4 hdB132 = r3;
    vec3 hdB134 = r1.xyz * hdB132.xyz;
    r3.x = hdB134.x;
    r3.y = hdB134.y;
    r3.z = hdB134.z;
    vec4 hdB143 = r1;
    vec3 hdB149 = mix(r3.xyz, hdB143.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = hdB149.x;
    r1.y = hdB149.y;
    r1.z = hdB149.z;
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
        vec2 hdB211 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB211.x;
        r0.z = hdB211.y;
        vec2 hdB222 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB222.x;
        r1.y = hdB222.y;
        vec2 hdB230 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB230.x;
        r1.w = hdB230.y;
        vec2 param_5 = r1.xy;
        float param_6 = r1.w;
        r1 = hdLod5(param_5, param_6);
        r0.x += r1.x;
        vec2 hdB253 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r1.x = hdB253.x;
        r1.y = hdB253.y;
        vec2 hdB260 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB260.x;
        r1.w = hdB260.y;
        vec2 param_7 = r1.xy;
        float param_8 = r1.w;
        r1 = hdLod5(param_7, param_8);
        r0.x += r1.x;
        vec2 hdB283 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB283.x;
        r1.y = hdB283.y;
        vec2 hdB290 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB290.x;
        r1.w = hdB290.y;
        vec2 param_9 = r1.xy;
        float param_10 = r1.w;
        r1 = hdLod5(param_9, param_10);
        r0.x += r1.x;
        vec2 hdB313 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r1.x = hdB313.x;
        r1.y = hdB313.y;
        vec2 hdB320 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB320.x;
        r1.w = hdB320.y;
        vec2 param_11 = r1.xy;
        float param_12 = r1.w;
        r1 = hdLod5(param_11, param_12);
        r0.x += r1.x;
        vec2 hdB343 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB343.x;
        r1.y = hdB343.y;
        vec2 hdB350 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB350.x;
        r1.w = hdB350.y;
        vec2 param_13 = r1.xy;
        float param_14 = r1.w;
        r1 = hdLod5(param_13, param_14);
        r0.x += r1.x;
        vec2 hdB373 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r1.x = hdB373.x;
        r1.y = hdB373.y;
        vec2 hdB380 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB380.x;
        r1.w = hdB380.y;
        vec2 param_15 = r1.xy;
        float param_16 = r1.w;
        r1 = hdLod5(param_15, param_16);
        r0.x += r1.x;
        vec2 hdB403 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB403.x;
        r1.y = hdB403.y;
        vec2 hdB410 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB410.x;
        r1.w = hdB410.y;
        vec2 param_17 = r1.xy;
        float param_18 = r1.w;
        r1 = hdLod5(param_17, param_18);
        r0.x += r1.x;
        vec2 hdB433 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB433.x;
        r1.y = hdB433.y;
        vec2 hdB440 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB440.x;
        r1.w = hdB440.y;
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
            vec2 hdB490 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB490.x;
            r0.z = hdB490.y;
            vec2 hdB500 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB500.x;
            r2.y = hdB500.y;
            vec2 hdB507 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB507.x;
            r2.w = hdB507.y;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            r0.w = r1.x + r2.x;
            vec2 hdB529 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r1.x = hdB529.x;
            r1.y = hdB529.y;
            vec2 hdB536 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB536.x;
            r1.w = hdB536.y;
            vec2 param_25 = r1.xy;
            float param_26 = r1.w;
            r1 = hdLod6(param_25, param_26);
            r0.w += r1.x;
            vec2 hdB558 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r1.x = hdB558.x;
            r1.y = hdB558.y;
            vec2 hdB565 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB565.x;
            r1.w = hdB565.y;
            vec2 param_27 = r1.xy;
            float param_28 = r1.w;
            r1 = hdLod6(param_27, param_28);
            r0.w += r1.x;
            vec2 hdB587 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r1.x = hdB587.x;
            r1.y = hdB587.y;
            vec2 hdB594 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB594.x;
            r1.w = hdB594.y;
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
                vec2 hdB644 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB644.x;
                r0.z = hdB644.y;
                vec2 hdB654 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB654.x;
                r2.y = hdB654.y;
                vec2 hdB661 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB661.x;
                r2.w = hdB661.y;
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                r0.w = r1.x + r2.x;
                vec2 hdB683 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r1.x = hdB683.x;
                r1.y = hdB683.y;
                vec2 hdB690 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB690.x;
                r1.w = hdB690.y;
                vec2 param_35 = r1.xy;
                float param_36 = r1.w;
                r1 = hdLod7(param_35, param_36);
                r0.w += r1.x;
                vec2 hdB712 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r1.x = hdB712.x;
                r1.y = hdB712.y;
                vec2 hdB719 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB719.x;
                r1.w = hdB719.y;
                vec2 param_37 = r1.xy;
                float param_38 = r1.w;
                r1 = hdLod7(param_37, param_38);
                r0.w += r1.x;
                vec2 hdB741 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r1.x = hdB741.x;
                r1.y = hdB741.y;
                vec2 hdB748 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB748.x;
                r1.w = hdB748.y;
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
                vec2 hdB780 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r1.x = hdB780.x;
                r1.w = hdB780.y;
                r1.y = (v5.w * 0.5) + 0.5;
                r1.z = v6.w;
                vec2 param_41 = r1.xy;
                float param_42 = r1.w;
                r2 = hdLod8(param_41, param_42);
                vec2 hdB805 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB805.x;
                r4.y = hdB805.y;
                r4.z = r1.z;
                r4.w = r1.w;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r5 = hdLod8(param_43, param_44);
                r0.w = r2.x + r5.x;
                vec2 hdB833 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB833.x;
                r4.y = hdB833.y;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r2 = hdLod8(param_45, param_46);
                r0.w += r2.x;
                vec2 hdB855 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB855.x;
                r4.y = hdB855.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r2 = hdLod8(param_47, param_48);
                r0.w += r2.x;
                vec2 hdB877 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB877.x;
                r4.y = hdB877.y;
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
    vec3 hdB934 = r3.www * v1.xyz;
    r1.x = hdB934.x;
    r1.y = hdB934.y;
    r1.z = hdB934.z;
    vec4 hdB941 = r0;
    vec3 hdB945 = hdB941.xxx * r1.xyz;
    r0.x = hdB945.x;
    r0.z = hdB945.y;
    r0.w = hdB945.z;
    vec4 hdB954 = r0;
    vec4 hdB957 = r0;
    vec3 hdB959 = (r3.xyz * hdB954.yyy) + hdB957.xzw;
    r0.x = hdB959.x;
    r0.y = hdB959.y;
    r0.z = hdB959.z;
    vec4 hdB966 = r0;
    vec3 hdB973 = hdB966.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB973.x;
    r0.y = hdB973.y;
    r0.z = hdB973.z;
    vec3 hdB988 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB988.x;
    oC0.y = hdB988.y;
    oC0.z = hdB988.z;
    oC0.w = 1.0;
    bool hdB1000 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1008;
    if (hdB1000)
    {
        hdB1008 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1008 = hdB1000;
    }
    if (hdB1008)
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
    bool _3575 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3585;
    if (_3575)
    {
        _3585 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3585 = _3575;
    }
    if (_3585)
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
        bool _3610 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3625;
        if (!_3610)
        {
            _3625 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3625 = _3610;
        }
        if (_3625)
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
