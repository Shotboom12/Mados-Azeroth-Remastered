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
float _RESERVED_IDENTIFIER_FIXUP_3971;
vec4 _RESERVED_IDENTIFIER_FIXUP_3972;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1214 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1222 = hdTex2(param_2);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1226 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_1226.x;
    _RESERVED_IDENTIFIER_FIXUP_1222.y = _RESERVED_IDENTIFIER_FIXUP_1228;
    float _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_1226.y;
    _RESERVED_IDENTIFIER_FIXUP_1222.z = _RESERVED_IDENTIFIER_FIXUP_1230;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1232 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3971).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_1232 + _RESERVED_IDENTIFIER_FIXUP_1232;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3116;
    _RESERVED_IDENTIFIER_FIXUP_3116.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
    _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
    _RESERVED_IDENTIFIER_FIXUP_3116.z = _RESERVED_IDENTIFIER_FIXUP_1235.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1243 = _RESERVED_IDENTIFIER_FIXUP_1214.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1246 = _RESERVED_IDENTIFIER_FIXUP_1243 * _RESERVED_IDENTIFIER_FIXUP_3116.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3122 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3122.x = _RESERVED_IDENTIFIER_FIXUP_1246.x;
    _RESERVED_IDENTIFIER_FIXUP_3122.y = _RESERVED_IDENTIFIER_FIXUP_1246.y;
    _RESERVED_IDENTIFIER_FIXUP_3122.z = _RESERVED_IDENTIFIER_FIXUP_1246.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1261 = mix(_RESERVED_IDENTIFIER_FIXUP_3122.xyz, _RESERVED_IDENTIFIER_FIXUP_1243, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1222.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3128 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_3128.x = _RESERVED_IDENTIFIER_FIXUP_1261.x;
    _RESERVED_IDENTIFIER_FIXUP_3128.y = _RESERVED_IDENTIFIER_FIXUP_1261.y;
    _RESERVED_IDENTIFIER_FIXUP_3128.z = _RESERVED_IDENTIFIER_FIXUP_1261.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1269 = _RESERVED_IDENTIFIER_FIXUP_1218.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_1269 * _RESERVED_IDENTIFIER_FIXUP_3116.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3134;
    _RESERVED_IDENTIFIER_FIXUP_3134.x = _RESERVED_IDENTIFIER_FIXUP_1272.x;
    _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1272.y;
    _RESERVED_IDENTIFIER_FIXUP_3134.z = _RESERVED_IDENTIFIER_FIXUP_1272.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1287 = mix(_RESERVED_IDENTIFIER_FIXUP_3134.xyz, _RESERVED_IDENTIFIER_FIXUP_1269, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1222.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3140 = _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_3140.x = _RESERVED_IDENTIFIER_FIXUP_1287.x;
    _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_1287.y;
    _RESERVED_IDENTIFIER_FIXUP_3140.z = _RESERVED_IDENTIFIER_FIXUP_1287.z;
    float _RESERVED_IDENTIFIER_FIXUP_1305 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3148 = _RESERVED_IDENTIFIER_FIXUP_3128;
    _RESERVED_IDENTIFIER_FIXUP_3148.x = _RESERVED_IDENTIFIER_FIXUP_1305;
    float _RESERVED_IDENTIFIER_FIXUP_1311 = clamp((_RESERVED_IDENTIFIER_FIXUP_1305 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3148.x = _RESERVED_IDENTIFIER_FIXUP_1311;
    float _RESERVED_IDENTIFIER_FIXUP_1317 = ((-_RESERVED_IDENTIFIER_FIXUP_1311) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3148.x = _RESERVED_IDENTIFIER_FIXUP_1317;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3976;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3973;
    if (_RESERVED_IDENTIFIER_FIXUP_1317 != (-_RESERVED_IDENTIFIER_FIXUP_1317))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1329 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3387;
        _RESERVED_IDENTIFIER_FIXUP_3387.x = _RESERVED_IDENTIFIER_FIXUP_1329.x;
        _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_1329.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_3387.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3391;
        _RESERVED_IDENTIFIER_FIXUP_3391.x = _RESERVED_IDENTIFIER_FIXUP_1339.x;
        _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_1339.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1349 = _RESERVED_IDENTIFIER_FIXUP_3387.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3395;
        _RESERVED_IDENTIFIER_FIXUP_3395.x = _RESERVED_IDENTIFIER_FIXUP_1349.x;
        _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_1349.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_3387.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3399;
        _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1359.x;
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_1359.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1369 = _RESERVED_IDENTIFIER_FIXUP_3387.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3403;
        _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_1369.x;
        _RESERVED_IDENTIFIER_FIXUP_3403.y = _RESERVED_IDENTIFIER_FIXUP_1369.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_3387.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3407;
        _RESERVED_IDENTIFIER_FIXUP_3407.x = _RESERVED_IDENTIFIER_FIXUP_1379.x;
        _RESERVED_IDENTIFIER_FIXUP_3407.y = _RESERVED_IDENTIFIER_FIXUP_1379.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1389 = _RESERVED_IDENTIFIER_FIXUP_3387.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3411;
        _RESERVED_IDENTIFIER_FIXUP_3411.x = _RESERVED_IDENTIFIER_FIXUP_1389.x;
        _RESERVED_IDENTIFIER_FIXUP_3411.y = _RESERVED_IDENTIFIER_FIXUP_1389.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_3387.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3415;
        _RESERVED_IDENTIFIER_FIXUP_3415.x = _RESERVED_IDENTIFIER_FIXUP_1399.x;
        _RESERVED_IDENTIFIER_FIXUP_3415.y = _RESERVED_IDENTIFIER_FIXUP_1399.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1409 = _RESERVED_IDENTIFIER_FIXUP_3387.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3419;
        _RESERVED_IDENTIFIER_FIXUP_3419.x = _RESERVED_IDENTIFIER_FIXUP_1409.x;
        _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_1409.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1417 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1417.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1417.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1423 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3391.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3395.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3399.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3403.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3403.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1463 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3407.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3411.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3415.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3419.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3419.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1503 = hdLod5(param_7, param_8);
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3391.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1423.y = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3395.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1423.z = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3399.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1423.w = hdLod5(param_13, param_14).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1520 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1423 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3407.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1463.y = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3411.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1463.z = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3415.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1463.w = hdLod5(param_19, param_20).x;
        float _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_1503.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3484 = _RESERVED_IDENTIFIER_FIXUP_1503;
        _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_1543;
        float _RESERVED_IDENTIFIER_FIXUP_1548 = float(_RESERVED_IDENTIFIER_FIXUP_1543 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_1548;
        float _RESERVED_IDENTIFIER_FIXUP_1551 = dot(_RESERVED_IDENTIFIER_FIXUP_1520, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_1551;
        float _RESERVED_IDENTIFIER_FIXUP_1554 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1463 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3484.z = _RESERVED_IDENTIFIER_FIXUP_1554;
        float _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_1551 + _RESERVED_IDENTIFIER_FIXUP_1554;
        _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_1560;
        float _RESERVED_IDENTIFIER_FIXUP_1566 = _RESERVED_IDENTIFIER_FIXUP_1548 + _RESERVED_IDENTIFIER_FIXUP_1560;
        _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_1566;
        _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_1566 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3976 = _RESERVED_IDENTIFIER_FIXUP_1520;
        _RESERVED_IDENTIFIER_FIXUP_3973 = _RESERVED_IDENTIFIER_FIXUP_3484;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1579 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3148.y = _RESERVED_IDENTIFIER_FIXUP_1579;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3977;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3974;
        if (_RESERVED_IDENTIFIER_FIXUP_1579 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1588 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3321 = _RESERVED_IDENTIFIER_FIXUP_3148;
            _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_1588.x;
            _RESERVED_IDENTIFIER_FIXUP_3321.z = _RESERVED_IDENTIFIER_FIXUP_1588.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1598 = _RESERVED_IDENTIFIER_FIXUP_3321.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3325;
            _RESERVED_IDENTIFIER_FIXUP_3325.x = _RESERVED_IDENTIFIER_FIXUP_1598.x;
            _RESERVED_IDENTIFIER_FIXUP_3325.y = _RESERVED_IDENTIFIER_FIXUP_1598.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1608 = _RESERVED_IDENTIFIER_FIXUP_3321.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3329;
            _RESERVED_IDENTIFIER_FIXUP_3329.x = _RESERVED_IDENTIFIER_FIXUP_1608.x;
            _RESERVED_IDENTIFIER_FIXUP_3329.y = _RESERVED_IDENTIFIER_FIXUP_1608.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1618 = _RESERVED_IDENTIFIER_FIXUP_3321.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3333;
            _RESERVED_IDENTIFIER_FIXUP_3333.x = _RESERVED_IDENTIFIER_FIXUP_1618.x;
            _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_1618.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1628 = _RESERVED_IDENTIFIER_FIXUP_3321.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3337;
            _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_1628.x;
            _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_1628.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1636 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1636.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1636.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1642 = hdLod6(param_21, param_22);
            _RESERVED_IDENTIFIER_FIXUP_3325.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3329.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3333.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3337.w = 0.0;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3325.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1642.y = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3329.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1642.z = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3333.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1642.w = hdLod6(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1699 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1642 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3337.xy;
            float param_30 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1705 = hdLod6(param_29, param_30).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_1705;
            float _RESERVED_IDENTIFIER_FIXUP_1710 = float(_RESERVED_IDENTIFIER_FIXUP_1705 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_1710;
            float _RESERVED_IDENTIFIER_FIXUP_1713 = dot(_RESERVED_IDENTIFIER_FIXUP_1699, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3321.z = _RESERVED_IDENTIFIER_FIXUP_1713;
            float _RESERVED_IDENTIFIER_FIXUP_1719 = _RESERVED_IDENTIFIER_FIXUP_1710 + _RESERVED_IDENTIFIER_FIXUP_1713;
            _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_1719;
            _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_1719 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3977 = _RESERVED_IDENTIFIER_FIXUP_1699;
            _RESERVED_IDENTIFIER_FIXUP_3974 = _RESERVED_IDENTIFIER_FIXUP_3321;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1732 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3165 = _RESERVED_IDENTIFIER_FIXUP_3148;
            _RESERVED_IDENTIFIER_FIXUP_3165.y = _RESERVED_IDENTIFIER_FIXUP_1732;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3978;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3975;
            if (_RESERVED_IDENTIFIER_FIXUP_1732 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1741 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3255 = _RESERVED_IDENTIFIER_FIXUP_3165;
                _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_1741.x;
                _RESERVED_IDENTIFIER_FIXUP_3255.z = _RESERVED_IDENTIFIER_FIXUP_1741.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1751 = _RESERVED_IDENTIFIER_FIXUP_3255.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3259;
                _RESERVED_IDENTIFIER_FIXUP_3259.x = _RESERVED_IDENTIFIER_FIXUP_1751.x;
                _RESERVED_IDENTIFIER_FIXUP_3259.y = _RESERVED_IDENTIFIER_FIXUP_1751.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1761 = _RESERVED_IDENTIFIER_FIXUP_3255.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3263;
                _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_1761.x;
                _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_1761.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1771 = _RESERVED_IDENTIFIER_FIXUP_3255.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3267;
                _RESERVED_IDENTIFIER_FIXUP_3267.x = _RESERVED_IDENTIFIER_FIXUP_1771.x;
                _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_1771.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1781 = _RESERVED_IDENTIFIER_FIXUP_3255.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3271;
                _RESERVED_IDENTIFIER_FIXUP_3271.x = _RESERVED_IDENTIFIER_FIXUP_1781.x;
                _RESERVED_IDENTIFIER_FIXUP_3271.y = _RESERVED_IDENTIFIER_FIXUP_1781.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1789 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1789.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1789.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1795 = hdLod7(param_31, param_32);
                _RESERVED_IDENTIFIER_FIXUP_3259.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3263.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3267.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3271.w = 0.0;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3259.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1795.y = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3263.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1795.z = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3267.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1795.w = hdLod7(param_37, param_38).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1852 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1795 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3271.xy;
                float param_40 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1858 = hdLod7(param_39, param_40).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_1858;
                float _RESERVED_IDENTIFIER_FIXUP_1863 = float(_RESERVED_IDENTIFIER_FIXUP_1858 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_1863;
                float _RESERVED_IDENTIFIER_FIXUP_1866 = dot(_RESERVED_IDENTIFIER_FIXUP_1852, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3255.z = _RESERVED_IDENTIFIER_FIXUP_1866;
                float _RESERVED_IDENTIFIER_FIXUP_1872 = _RESERVED_IDENTIFIER_FIXUP_1863 + _RESERVED_IDENTIFIER_FIXUP_1866;
                _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_1872;
                _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_1872 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3978 = _RESERVED_IDENTIFIER_FIXUP_1852;
                _RESERVED_IDENTIFIER_FIXUP_3975 = _RESERVED_IDENTIFIER_FIXUP_3255;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3169 = _RESERVED_IDENTIFIER_FIXUP_3140;
                _RESERVED_IDENTIFIER_FIXUP_3169.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3169.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1888 = (_RESERVED_IDENTIFIER_FIXUP_3169.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3174;
                _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1888.x;
                _RESERVED_IDENTIFIER_FIXUP_3174.y = _RESERVED_IDENTIFIER_FIXUP_1888.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1898 = _RESERVED_IDENTIFIER_FIXUP_3174.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3178;
                _RESERVED_IDENTIFIER_FIXUP_3178.x = _RESERVED_IDENTIFIER_FIXUP_1898.x;
                _RESERVED_IDENTIFIER_FIXUP_3178.y = _RESERVED_IDENTIFIER_FIXUP_1898.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1908 = _RESERVED_IDENTIFIER_FIXUP_3174.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3182;
                _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_1908.x;
                _RESERVED_IDENTIFIER_FIXUP_3182.y = _RESERVED_IDENTIFIER_FIXUP_1908.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1918 = _RESERVED_IDENTIFIER_FIXUP_3174.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3186;
                _RESERVED_IDENTIFIER_FIXUP_3186.x = _RESERVED_IDENTIFIER_FIXUP_1918.x;
                _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_1918.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1928 = _RESERVED_IDENTIFIER_FIXUP_3174.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3190;
                _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1928.x;
                _RESERVED_IDENTIFIER_FIXUP_3190.y = _RESERVED_IDENTIFIER_FIXUP_1928.y;
                _RESERVED_IDENTIFIER_FIXUP_3174.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3174.xy;
                float param_42 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1942 = hdLod8(param_41, param_42);
                _RESERVED_IDENTIFIER_FIXUP_3178.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3182.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3186.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3190.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3178.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1942.y = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3182.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1942.z = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3186.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1942.w = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3190.xy;
                float param_50 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2005 = hdLod8(param_49, param_50).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3230 = _RESERVED_IDENTIFIER_FIXUP_3165;
                _RESERVED_IDENTIFIER_FIXUP_3230.y = _RESERVED_IDENTIFIER_FIXUP_2005;
                float _RESERVED_IDENTIFIER_FIXUP_2010 = float(_RESERVED_IDENTIFIER_FIXUP_2005 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3230.y = _RESERVED_IDENTIFIER_FIXUP_2010;
                float _RESERVED_IDENTIFIER_FIXUP_2013 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1942 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3230.z = _RESERVED_IDENTIFIER_FIXUP_2013;
                float _RESERVED_IDENTIFIER_FIXUP_2019 = _RESERVED_IDENTIFIER_FIXUP_2010 + _RESERVED_IDENTIFIER_FIXUP_2013;
                _RESERVED_IDENTIFIER_FIXUP_3230.y = _RESERVED_IDENTIFIER_FIXUP_2019;
                float _RESERVED_IDENTIFIER_FIXUP_2027 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3230.z = _RESERVED_IDENTIFIER_FIXUP_2027;
                float _RESERVED_IDENTIFIER_FIXUP_2033 = clamp((_RESERVED_IDENTIFIER_FIXUP_2027 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3230.z = _RESERVED_IDENTIFIER_FIXUP_2033;
                float _RESERVED_IDENTIFIER_FIXUP_2038 = (_RESERVED_IDENTIFIER_FIXUP_2019 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3230.y = _RESERVED_IDENTIFIER_FIXUP_2038;
                _RESERVED_IDENTIFIER_FIXUP_3230.x = (_RESERVED_IDENTIFIER_FIXUP_2033 * _RESERVED_IDENTIFIER_FIXUP_2038) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3978 = _RESERVED_IDENTIFIER_FIXUP_3169;
                _RESERVED_IDENTIFIER_FIXUP_3975 = _RESERVED_IDENTIFIER_FIXUP_3230;
            }
            _RESERVED_IDENTIFIER_FIXUP_3977 = _RESERVED_IDENTIFIER_FIXUP_3978;
            _RESERVED_IDENTIFIER_FIXUP_3974 = _RESERVED_IDENTIFIER_FIXUP_3975;
        }
        _RESERVED_IDENTIFIER_FIXUP_3976 = _RESERVED_IDENTIFIER_FIXUP_3977;
        _RESERVED_IDENTIFIER_FIXUP_3973 = _RESERVED_IDENTIFIER_FIXUP_3974;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3507 = _RESERVED_IDENTIFIER_FIXUP_3973;
    _RESERVED_IDENTIFIER_FIXUP_3507.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3509 = _RESERVED_IDENTIFIER_FIXUP_3976;
    _RESERVED_IDENTIFIER_FIXUP_3509.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3509.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3509.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2077 = _RESERVED_IDENTIFIER_FIXUP_3507.xxx * _RESERVED_IDENTIFIER_FIXUP_3509.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3991 = vec4(_RESERVED_IDENTIFIER_FIXUP_2077.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2077.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2091 = (mix(_RESERVED_IDENTIFIER_FIXUP_3128, _RESERVED_IDENTIFIER_FIXUP_3140, _RESERVED_IDENTIFIER_FIXUP_1222.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_3991.yyy) + _RESERVED_IDENTIFIER_FIXUP_3991.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3521 = _RESERVED_IDENTIFIER_FIXUP_3991;
    _RESERVED_IDENTIFIER_FIXUP_3521.x = _RESERVED_IDENTIFIER_FIXUP_2091.x;
    _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2091.y;
    _RESERVED_IDENTIFIER_FIXUP_3521.z = _RESERVED_IDENTIFIER_FIXUP_2091.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2104 = _RESERVED_IDENTIFIER_FIXUP_3521.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3527 = _RESERVED_IDENTIFIER_FIXUP_3521;
    _RESERVED_IDENTIFIER_FIXUP_3527.x = _RESERVED_IDENTIFIER_FIXUP_2104.x;
    _RESERVED_IDENTIFIER_FIXUP_3527.y = _RESERVED_IDENTIFIER_FIXUP_2104.y;
    _RESERVED_IDENTIFIER_FIXUP_3527.z = _RESERVED_IDENTIFIER_FIXUP_2104.z;
    vec2 param_51 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2161 = hdTex0(param_51);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2165 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2169 = hdTex2(param_53);
    _RESERVED_IDENTIFIER_FIXUP_2169.y = _RESERVED_IDENTIFIER_FIXUP_1228;
    _RESERVED_IDENTIFIER_FIXUP_2169.z = _RESERVED_IDENTIFIER_FIXUP_1230;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2182 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3545;
    _RESERVED_IDENTIFIER_FIXUP_3545.x = _RESERVED_IDENTIFIER_FIXUP_2182.x;
    _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_2182.y;
    _RESERVED_IDENTIFIER_FIXUP_3545.z = _RESERVED_IDENTIFIER_FIXUP_2182.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2190 = _RESERVED_IDENTIFIER_FIXUP_2161.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2193 = _RESERVED_IDENTIFIER_FIXUP_2190 * _RESERVED_IDENTIFIER_FIXUP_3545.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3551 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3551.x = _RESERVED_IDENTIFIER_FIXUP_2193.x;
    _RESERVED_IDENTIFIER_FIXUP_3551.y = _RESERVED_IDENTIFIER_FIXUP_2193.y;
    _RESERVED_IDENTIFIER_FIXUP_3551.z = _RESERVED_IDENTIFIER_FIXUP_2193.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2208 = mix(_RESERVED_IDENTIFIER_FIXUP_3551.xyz, _RESERVED_IDENTIFIER_FIXUP_2190, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2169.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3557 = _RESERVED_IDENTIFIER_FIXUP_2161;
    _RESERVED_IDENTIFIER_FIXUP_3557.x = _RESERVED_IDENTIFIER_FIXUP_2208.x;
    _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2208.y;
    _RESERVED_IDENTIFIER_FIXUP_3557.z = _RESERVED_IDENTIFIER_FIXUP_2208.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2216 = _RESERVED_IDENTIFIER_FIXUP_2165.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2219 = _RESERVED_IDENTIFIER_FIXUP_2216 * _RESERVED_IDENTIFIER_FIXUP_3545.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3563;
    _RESERVED_IDENTIFIER_FIXUP_3563.x = _RESERVED_IDENTIFIER_FIXUP_2219.x;
    _RESERVED_IDENTIFIER_FIXUP_3563.y = _RESERVED_IDENTIFIER_FIXUP_2219.y;
    _RESERVED_IDENTIFIER_FIXUP_3563.z = _RESERVED_IDENTIFIER_FIXUP_2219.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2234 = mix(_RESERVED_IDENTIFIER_FIXUP_3563.xyz, _RESERVED_IDENTIFIER_FIXUP_2216, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2169.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3569 = _RESERVED_IDENTIFIER_FIXUP_2165;
    _RESERVED_IDENTIFIER_FIXUP_3569.x = _RESERVED_IDENTIFIER_FIXUP_2234.x;
    _RESERVED_IDENTIFIER_FIXUP_3569.y = _RESERVED_IDENTIFIER_FIXUP_2234.y;
    _RESERVED_IDENTIFIER_FIXUP_3569.z = _RESERVED_IDENTIFIER_FIXUP_2234.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2245 = mix(_RESERVED_IDENTIFIER_FIXUP_3557, _RESERVED_IDENTIFIER_FIXUP_3569, _RESERVED_IDENTIFIER_FIXUP_2169.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3577 = _RESERVED_IDENTIFIER_FIXUP_3557;
    _RESERVED_IDENTIFIER_FIXUP_3577.x = _RESERVED_IDENTIFIER_FIXUP_1305;
    float _RESERVED_IDENTIFIER_FIXUP_2258 = clamp((_RESERVED_IDENTIFIER_FIXUP_1305 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3577.x = _RESERVED_IDENTIFIER_FIXUP_2258;
    float _RESERVED_IDENTIFIER_FIXUP_2264 = ((-_RESERVED_IDENTIFIER_FIXUP_2258) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3577.x = _RESERVED_IDENTIFIER_FIXUP_2264;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3985;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3982;
    if (_RESERVED_IDENTIFIER_FIXUP_2264 != (-_RESERVED_IDENTIFIER_FIXUP_2264))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2276 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3816;
        _RESERVED_IDENTIFIER_FIXUP_3816.x = _RESERVED_IDENTIFIER_FIXUP_2276.x;
        _RESERVED_IDENTIFIER_FIXUP_3816.y = _RESERVED_IDENTIFIER_FIXUP_2276.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2286 = _RESERVED_IDENTIFIER_FIXUP_3816.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3820;
        _RESERVED_IDENTIFIER_FIXUP_3820.x = _RESERVED_IDENTIFIER_FIXUP_2286.x;
        _RESERVED_IDENTIFIER_FIXUP_3820.y = _RESERVED_IDENTIFIER_FIXUP_2286.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2296 = _RESERVED_IDENTIFIER_FIXUP_3816.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3824;
        _RESERVED_IDENTIFIER_FIXUP_3824.x = _RESERVED_IDENTIFIER_FIXUP_2296.x;
        _RESERVED_IDENTIFIER_FIXUP_3824.y = _RESERVED_IDENTIFIER_FIXUP_2296.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2306 = _RESERVED_IDENTIFIER_FIXUP_3816.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3828;
        _RESERVED_IDENTIFIER_FIXUP_3828.x = _RESERVED_IDENTIFIER_FIXUP_2306.x;
        _RESERVED_IDENTIFIER_FIXUP_3828.y = _RESERVED_IDENTIFIER_FIXUP_2306.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2316 = _RESERVED_IDENTIFIER_FIXUP_3816.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3832;
        _RESERVED_IDENTIFIER_FIXUP_3832.x = _RESERVED_IDENTIFIER_FIXUP_2316.x;
        _RESERVED_IDENTIFIER_FIXUP_3832.y = _RESERVED_IDENTIFIER_FIXUP_2316.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2326 = _RESERVED_IDENTIFIER_FIXUP_3816.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3836;
        _RESERVED_IDENTIFIER_FIXUP_3836.x = _RESERVED_IDENTIFIER_FIXUP_2326.x;
        _RESERVED_IDENTIFIER_FIXUP_3836.y = _RESERVED_IDENTIFIER_FIXUP_2326.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2336 = _RESERVED_IDENTIFIER_FIXUP_3816.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3840;
        _RESERVED_IDENTIFIER_FIXUP_3840.x = _RESERVED_IDENTIFIER_FIXUP_2336.x;
        _RESERVED_IDENTIFIER_FIXUP_3840.y = _RESERVED_IDENTIFIER_FIXUP_2336.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2346 = _RESERVED_IDENTIFIER_FIXUP_3816.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3844;
        _RESERVED_IDENTIFIER_FIXUP_3844.x = _RESERVED_IDENTIFIER_FIXUP_2346.x;
        _RESERVED_IDENTIFIER_FIXUP_3844.y = _RESERVED_IDENTIFIER_FIXUP_2346.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2356 = _RESERVED_IDENTIFIER_FIXUP_3816.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3848;
        _RESERVED_IDENTIFIER_FIXUP_3848.x = _RESERVED_IDENTIFIER_FIXUP_2356.x;
        _RESERVED_IDENTIFIER_FIXUP_3848.y = _RESERVED_IDENTIFIER_FIXUP_2356.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2364 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2364.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2364.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2370 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3820.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3824.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3828.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3832.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3832.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2410 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3836.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3840.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3844.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3848.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3848.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2450 = hdLod5(param_58, param_59);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3820.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2370.y = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3824.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2370.z = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3828.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2370.w = hdLod5(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2467 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2370 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3836.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2410.y = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3840.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2410.z = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3844.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2410.w = hdLod5(param_70, param_71).x;
        float _RESERVED_IDENTIFIER_FIXUP_2490 = _RESERVED_IDENTIFIER_FIXUP_2450.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3913 = _RESERVED_IDENTIFIER_FIXUP_2450;
        _RESERVED_IDENTIFIER_FIXUP_3913.x = _RESERVED_IDENTIFIER_FIXUP_2490;
        float _RESERVED_IDENTIFIER_FIXUP_2495 = float(_RESERVED_IDENTIFIER_FIXUP_2490 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3913.x = _RESERVED_IDENTIFIER_FIXUP_2495;
        float _RESERVED_IDENTIFIER_FIXUP_2498 = dot(_RESERVED_IDENTIFIER_FIXUP_2467, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3913.y = _RESERVED_IDENTIFIER_FIXUP_2498;
        float _RESERVED_IDENTIFIER_FIXUP_2501 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2410 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3913.z = _RESERVED_IDENTIFIER_FIXUP_2501;
        float _RESERVED_IDENTIFIER_FIXUP_2507 = _RESERVED_IDENTIFIER_FIXUP_2498 + _RESERVED_IDENTIFIER_FIXUP_2501;
        _RESERVED_IDENTIFIER_FIXUP_3913.y = _RESERVED_IDENTIFIER_FIXUP_2507;
        float _RESERVED_IDENTIFIER_FIXUP_2513 = _RESERVED_IDENTIFIER_FIXUP_2495 + _RESERVED_IDENTIFIER_FIXUP_2507;
        _RESERVED_IDENTIFIER_FIXUP_3913.x = _RESERVED_IDENTIFIER_FIXUP_2513;
        _RESERVED_IDENTIFIER_FIXUP_3913.x = _RESERVED_IDENTIFIER_FIXUP_2513 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3985 = _RESERVED_IDENTIFIER_FIXUP_2467;
        _RESERVED_IDENTIFIER_FIXUP_3982 = _RESERVED_IDENTIFIER_FIXUP_3913;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2526 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3577.y = _RESERVED_IDENTIFIER_FIXUP_2526;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3986;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3983;
        if (_RESERVED_IDENTIFIER_FIXUP_2526 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2535 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3750 = _RESERVED_IDENTIFIER_FIXUP_3577;
            _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2535.x;
            _RESERVED_IDENTIFIER_FIXUP_3750.z = _RESERVED_IDENTIFIER_FIXUP_2535.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2545 = _RESERVED_IDENTIFIER_FIXUP_3750.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3754;
            _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2545.x;
            _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2545.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2555 = _RESERVED_IDENTIFIER_FIXUP_3750.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3758;
            _RESERVED_IDENTIFIER_FIXUP_3758.x = _RESERVED_IDENTIFIER_FIXUP_2555.x;
            _RESERVED_IDENTIFIER_FIXUP_3758.y = _RESERVED_IDENTIFIER_FIXUP_2555.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2565 = _RESERVED_IDENTIFIER_FIXUP_3750.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3762;
            _RESERVED_IDENTIFIER_FIXUP_3762.x = _RESERVED_IDENTIFIER_FIXUP_2565.x;
            _RESERVED_IDENTIFIER_FIXUP_3762.y = _RESERVED_IDENTIFIER_FIXUP_2565.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2575 = _RESERVED_IDENTIFIER_FIXUP_3750.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3766;
            _RESERVED_IDENTIFIER_FIXUP_3766.x = _RESERVED_IDENTIFIER_FIXUP_2575.x;
            _RESERVED_IDENTIFIER_FIXUP_3766.y = _RESERVED_IDENTIFIER_FIXUP_2575.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2583 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2583.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2583.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2589 = hdLod6(param_72, param_73);
            _RESERVED_IDENTIFIER_FIXUP_3754.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3758.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3762.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3766.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3754.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2589.y = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3758.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2589.z = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3762.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2589.w = hdLod6(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2646 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2589 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3766.xy;
            float param_81 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2652 = hdLod6(param_80, param_81).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2652;
            float _RESERVED_IDENTIFIER_FIXUP_2657 = float(_RESERVED_IDENTIFIER_FIXUP_2652 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2657;
            float _RESERVED_IDENTIFIER_FIXUP_2660 = dot(_RESERVED_IDENTIFIER_FIXUP_2646, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3750.z = _RESERVED_IDENTIFIER_FIXUP_2660;
            float _RESERVED_IDENTIFIER_FIXUP_2666 = _RESERVED_IDENTIFIER_FIXUP_2657 + _RESERVED_IDENTIFIER_FIXUP_2660;
            _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2666;
            _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2666 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3986 = _RESERVED_IDENTIFIER_FIXUP_2646;
            _RESERVED_IDENTIFIER_FIXUP_3983 = _RESERVED_IDENTIFIER_FIXUP_3750;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2679 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3594 = _RESERVED_IDENTIFIER_FIXUP_3577;
            _RESERVED_IDENTIFIER_FIXUP_3594.y = _RESERVED_IDENTIFIER_FIXUP_2679;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3987;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3984;
            if (_RESERVED_IDENTIFIER_FIXUP_2679 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2688 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3684 = _RESERVED_IDENTIFIER_FIXUP_3594;
                _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2688.x;
                _RESERVED_IDENTIFIER_FIXUP_3684.z = _RESERVED_IDENTIFIER_FIXUP_2688.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2698 = _RESERVED_IDENTIFIER_FIXUP_3684.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3688;
                _RESERVED_IDENTIFIER_FIXUP_3688.x = _RESERVED_IDENTIFIER_FIXUP_2698.x;
                _RESERVED_IDENTIFIER_FIXUP_3688.y = _RESERVED_IDENTIFIER_FIXUP_2698.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2708 = _RESERVED_IDENTIFIER_FIXUP_3684.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3692;
                _RESERVED_IDENTIFIER_FIXUP_3692.x = _RESERVED_IDENTIFIER_FIXUP_2708.x;
                _RESERVED_IDENTIFIER_FIXUP_3692.y = _RESERVED_IDENTIFIER_FIXUP_2708.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2718 = _RESERVED_IDENTIFIER_FIXUP_3684.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3696;
                _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2718.x;
                _RESERVED_IDENTIFIER_FIXUP_3696.y = _RESERVED_IDENTIFIER_FIXUP_2718.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2728 = _RESERVED_IDENTIFIER_FIXUP_3684.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3700;
                _RESERVED_IDENTIFIER_FIXUP_3700.x = _RESERVED_IDENTIFIER_FIXUP_2728.x;
                _RESERVED_IDENTIFIER_FIXUP_3700.y = _RESERVED_IDENTIFIER_FIXUP_2728.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2736 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2736.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2736.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2742 = hdLod7(param_82, param_83);
                _RESERVED_IDENTIFIER_FIXUP_3688.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3692.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3696.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3700.w = 0.0;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3688.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2742.y = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3692.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2742.z = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3696.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2742.w = hdLod7(param_88, param_89).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2799 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2742 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3700.xy;
                float param_91 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2805 = hdLod7(param_90, param_91).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2805;
                float _RESERVED_IDENTIFIER_FIXUP_2810 = float(_RESERVED_IDENTIFIER_FIXUP_2805 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2810;
                float _RESERVED_IDENTIFIER_FIXUP_2813 = dot(_RESERVED_IDENTIFIER_FIXUP_2799, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3684.z = _RESERVED_IDENTIFIER_FIXUP_2813;
                float _RESERVED_IDENTIFIER_FIXUP_2819 = _RESERVED_IDENTIFIER_FIXUP_2810 + _RESERVED_IDENTIFIER_FIXUP_2813;
                _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2819;
                _RESERVED_IDENTIFIER_FIXUP_3684.x = _RESERVED_IDENTIFIER_FIXUP_2819 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3987 = _RESERVED_IDENTIFIER_FIXUP_2799;
                _RESERVED_IDENTIFIER_FIXUP_3984 = _RESERVED_IDENTIFIER_FIXUP_3684;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3598 = _RESERVED_IDENTIFIER_FIXUP_3569;
                _RESERVED_IDENTIFIER_FIXUP_3598.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3598.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2835 = (_RESERVED_IDENTIFIER_FIXUP_3598.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3603;
                _RESERVED_IDENTIFIER_FIXUP_3603.x = _RESERVED_IDENTIFIER_FIXUP_2835.x;
                _RESERVED_IDENTIFIER_FIXUP_3603.y = _RESERVED_IDENTIFIER_FIXUP_2835.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2845 = _RESERVED_IDENTIFIER_FIXUP_3603.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3607;
                _RESERVED_IDENTIFIER_FIXUP_3607.x = _RESERVED_IDENTIFIER_FIXUP_2845.x;
                _RESERVED_IDENTIFIER_FIXUP_3607.y = _RESERVED_IDENTIFIER_FIXUP_2845.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2855 = _RESERVED_IDENTIFIER_FIXUP_3603.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3611;
                _RESERVED_IDENTIFIER_FIXUP_3611.x = _RESERVED_IDENTIFIER_FIXUP_2855.x;
                _RESERVED_IDENTIFIER_FIXUP_3611.y = _RESERVED_IDENTIFIER_FIXUP_2855.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2865 = _RESERVED_IDENTIFIER_FIXUP_3603.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3615;
                _RESERVED_IDENTIFIER_FIXUP_3615.x = _RESERVED_IDENTIFIER_FIXUP_2865.x;
                _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_2865.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2875 = _RESERVED_IDENTIFIER_FIXUP_3603.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3619;
                _RESERVED_IDENTIFIER_FIXUP_3619.x = _RESERVED_IDENTIFIER_FIXUP_2875.x;
                _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_2875.y;
                _RESERVED_IDENTIFIER_FIXUP_3603.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3603.xy;
                float param_93 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2889 = hdLod8(param_92, param_93);
                _RESERVED_IDENTIFIER_FIXUP_3607.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3611.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3615.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3619.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3607.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2889.y = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3611.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2889.z = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3615.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2889.w = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3619.xy;
                float param_101 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2952 = hdLod8(param_100, param_101).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3659 = _RESERVED_IDENTIFIER_FIXUP_3594;
                _RESERVED_IDENTIFIER_FIXUP_3659.y = _RESERVED_IDENTIFIER_FIXUP_2952;
                float _RESERVED_IDENTIFIER_FIXUP_2957 = float(_RESERVED_IDENTIFIER_FIXUP_2952 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3659.y = _RESERVED_IDENTIFIER_FIXUP_2957;
                float _RESERVED_IDENTIFIER_FIXUP_2960 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2889 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3659.z = _RESERVED_IDENTIFIER_FIXUP_2960;
                float _RESERVED_IDENTIFIER_FIXUP_2966 = _RESERVED_IDENTIFIER_FIXUP_2957 + _RESERVED_IDENTIFIER_FIXUP_2960;
                _RESERVED_IDENTIFIER_FIXUP_3659.y = _RESERVED_IDENTIFIER_FIXUP_2966;
                float _RESERVED_IDENTIFIER_FIXUP_2974 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3659.z = _RESERVED_IDENTIFIER_FIXUP_2974;
                float _RESERVED_IDENTIFIER_FIXUP_2980 = clamp((_RESERVED_IDENTIFIER_FIXUP_2974 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3659.z = _RESERVED_IDENTIFIER_FIXUP_2980;
                float _RESERVED_IDENTIFIER_FIXUP_2985 = (_RESERVED_IDENTIFIER_FIXUP_2966 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3659.y = _RESERVED_IDENTIFIER_FIXUP_2985;
                _RESERVED_IDENTIFIER_FIXUP_3659.x = (_RESERVED_IDENTIFIER_FIXUP_2980 * _RESERVED_IDENTIFIER_FIXUP_2985) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3987 = _RESERVED_IDENTIFIER_FIXUP_3598;
                _RESERVED_IDENTIFIER_FIXUP_3984 = _RESERVED_IDENTIFIER_FIXUP_3659;
            }
            _RESERVED_IDENTIFIER_FIXUP_3986 = _RESERVED_IDENTIFIER_FIXUP_3987;
            _RESERVED_IDENTIFIER_FIXUP_3983 = _RESERVED_IDENTIFIER_FIXUP_3984;
        }
        _RESERVED_IDENTIFIER_FIXUP_3985 = _RESERVED_IDENTIFIER_FIXUP_3986;
        _RESERVED_IDENTIFIER_FIXUP_3982 = _RESERVED_IDENTIFIER_FIXUP_3983;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3000 = (_RESERVED_IDENTIFIER_FIXUP_3982.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3934 = _RESERVED_IDENTIFIER_FIXUP_3982;
    _RESERVED_IDENTIFIER_FIXUP_3934.y = _RESERVED_IDENTIFIER_FIXUP_3000;
    _RESERVED_IDENTIFIER_FIXUP_3934.y = _RESERVED_IDENTIFIER_FIXUP_3000;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3013 = _RESERVED_IDENTIFIER_FIXUP_2245.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3940 = _RESERVED_IDENTIFIER_FIXUP_3985;
    _RESERVED_IDENTIFIER_FIXUP_3940.x = _RESERVED_IDENTIFIER_FIXUP_3013.x;
    _RESERVED_IDENTIFIER_FIXUP_3940.y = _RESERVED_IDENTIFIER_FIXUP_3013.y;
    _RESERVED_IDENTIFIER_FIXUP_3940.z = _RESERVED_IDENTIFIER_FIXUP_3013.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3024 = _RESERVED_IDENTIFIER_FIXUP_3934.xxx * _RESERVED_IDENTIFIER_FIXUP_3940.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3993 = vec4(_RESERVED_IDENTIFIER_FIXUP_3024.x, _RESERVED_IDENTIFIER_FIXUP_3000, _RESERVED_IDENTIFIER_FIXUP_3024.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3038 = (_RESERVED_IDENTIFIER_FIXUP_2245.xyz * _RESERVED_IDENTIFIER_FIXUP_3993.yyy) + _RESERVED_IDENTIFIER_FIXUP_3993.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3952 = _RESERVED_IDENTIFIER_FIXUP_3993;
    _RESERVED_IDENTIFIER_FIXUP_3952.x = _RESERVED_IDENTIFIER_FIXUP_3038.x;
    _RESERVED_IDENTIFIER_FIXUP_3952.y = _RESERVED_IDENTIFIER_FIXUP_3038.y;
    _RESERVED_IDENTIFIER_FIXUP_3952.z = _RESERVED_IDENTIFIER_FIXUP_3038.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3051 = _RESERVED_IDENTIFIER_FIXUP_3952.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3958 = _RESERVED_IDENTIFIER_FIXUP_3952;
    _RESERVED_IDENTIFIER_FIXUP_3958.x = _RESERVED_IDENTIFIER_FIXUP_3051.x;
    _RESERVED_IDENTIFIER_FIXUP_3958.y = _RESERVED_IDENTIFIER_FIXUP_3051.y;
    _RESERVED_IDENTIFIER_FIXUP_3958.z = _RESERVED_IDENTIFIER_FIXUP_3051.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3958.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1072 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1081;
    if (_RESERVED_IDENTIFIER_FIXUP_1072)
    {
        _RESERVED_IDENTIFIER_FIXUP_1081 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1081 = _RESERVED_IDENTIFIER_FIXUP_1072;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1081)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1118 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3527.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1144 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3104;
    if (_RESERVED_IDENTIFIER_FIXUP_1118 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3104 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1118), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1144);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3104 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1144);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3104;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3000);
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
    vec2 hdB84 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = hdB84.x;
    r2.z = hdB84.y;
    vec3 hdB97 = v0.xyz + v0.xyz;
    r3.x = hdB97.x;
    r3.y = hdB97.y;
    r3.z = hdB97.z;
    vec3 hdB109 = r0.xyz * r3.xyz;
    r4.x = hdB109.x;
    r4.y = hdB109.y;
    r4.z = hdB109.z;
    vec4 hdB118 = r0;
    vec3 hdB127 = mix(r4.xyz, hdB118.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = hdB127.x;
    r0.y = hdB127.y;
    r0.z = hdB127.z;
    vec4 hdB136 = r3;
    vec3 hdB138 = r1.xyz * hdB136.xyz;
    r3.x = hdB138.x;
    r3.y = hdB138.y;
    r3.z = hdB138.z;
    vec4 hdB147 = r1;
    vec3 hdB153 = mix(r3.xyz, hdB147.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = hdB153.x;
    r1.y = hdB153.y;
    r1.z = hdB153.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        vec2 hdB201 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.x = hdB201.x;
        r0.y = hdB201.y;
        vec2 hdB212 = r0.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB212.x;
        r1.y = hdB212.y;
        vec2 hdB223 = r0.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB223.x;
        r2.y = hdB223.y;
        vec2 hdB234 = r0.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB234.x;
        r4.y = hdB234.y;
        vec2 hdB245 = r0.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB245.x;
        r5.y = hdB245.y;
        vec2 hdB256 = r0.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB256.x;
        r6.y = hdB256.y;
        vec2 hdB267 = r0.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB267.x;
        r7.y = hdB267.y;
        vec2 hdB278 = r0.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB278.x;
        r8.y = hdB278.y;
        vec4 hdB283 = r0;
        vec2 hdB289 = hdB283.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r0.x = hdB289.x;
        r0.y = hdB289.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r9.xy;
        float param_4 = r9.w;
        r9 = hdLod5(param_3, param_4);
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
        r0.z = 0.0;
        r0.w = 0.0;
        vec2 param_19 = r0.xy;
        float param_20 = r0.w;
        r0 = hdLod5(param_19, param_20);
        r9.y = r1.x;
        r9.z = r2.x;
        r9.w = r4.x;
        r1 = r9 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r2 = r5 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r0.x += (-v4.z);
        r0.x = float(r0.x >= 0.0);
        r0.y = dot(r1, vec4(1.0));
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.x += r0.y;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            vec2 hdB476 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB476.x;
            r0.z = hdB476.y;
            vec2 hdB486 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = hdB486.x;
            r1.y = hdB486.y;
            vec2 hdB496 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB496.x;
            r2.y = hdB496.y;
            vec2 hdB506 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB506.x;
            r4.y = hdB506.y;
            vec2 hdB516 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB516.x;
            r5.y = hdB516.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod6(param_21, param_22);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_23 = r1.xy;
            float param_24 = r1.w;
            r1 = hdLod6(param_23, param_24);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
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
            r6.y = r1.x;
            r6.z = r2.x;
            r6.w = r4.x;
            r1 = r6 + (-v5.zzzz);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r0.y = r5.x + (-v5.z);
            r0.y = float(r0.y >= 0.0);
            r0.z = dot(r1, vec4(1.0));
            r0.y += r0.z;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                vec2 hdB632 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB632.x;
                r0.z = hdB632.y;
                vec2 hdB642 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r1.x = hdB642.x;
                r1.y = hdB642.y;
                vec2 hdB652 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB652.x;
                r2.y = hdB652.y;
                vec2 hdB662 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB662.x;
                r4.y = hdB662.y;
                vec2 hdB672 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB672.x;
                r5.y = hdB672.y;
                r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r6.xy;
                float param_32 = r6.w;
                r6 = hdLod7(param_31, param_32);
                r1.z = 0.0;
                r1.w = 0.0;
                vec2 param_33 = r1.xy;
                float param_34 = r1.w;
                r1 = hdLod7(param_33, param_34);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
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
                r6.y = r1.x;
                r6.z = r2.x;
                r6.w = r4.x;
                r1 = r6 + (-v6.zzzz);
                r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
                r0.y = r5.x + (-v6.z);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r1, vec4(1.0));
                r0.y += r0.z;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.x = v4.w;
                r1.y = v5.w;
                vec2 hdB780 = (r1.xy * vec2(0.5)) + vec2(0.5);
                r2.x = hdB780.x;
                r2.y = hdB780.y;
                vec2 hdB790 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB790.x;
                r4.y = hdB790.y;
                vec2 hdB800 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB800.x;
                r5.y = hdB800.y;
                vec2 hdB810 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB810.x;
                r6.y = hdB810.y;
                vec2 hdB820 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB820.x;
                r7.y = hdB820.y;
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r2 = hdLod8(param_41, param_42);
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
                r2.y = r4.x;
                r2.z = r5.x;
                r2.w = r6.x;
                r2 += (-v6.wwww);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r0.y = r7.x + (-v6.w);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r2, vec4(1.0));
                r0.y += r0.z;
                r0.z = max(abs(r1.x), abs(r1.y));
                r0.z = clamp((r0.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.z * r0.y) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB954 = r3.www * v1.xyz;
    r1.x = hdB954.x;
    r1.y = hdB954.y;
    r1.z = hdB954.z;
    vec4 hdB961 = r0;
    vec3 hdB965 = hdB961.xxx * r1.xyz;
    r0.x = hdB965.x;
    r0.z = hdB965.y;
    r0.w = hdB965.z;
    vec4 hdB974 = r0;
    vec4 hdB977 = r0;
    vec3 hdB979 = (r3.xyz * hdB974.yyy) + hdB977.xzw;
    r0.x = hdB979.x;
    r0.y = hdB979.y;
    r0.z = hdB979.z;
    vec4 hdB986 = r0;
    vec3 hdB993 = hdB986.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB993.x;
    r0.y = hdB993.y;
    r0.z = hdB993.z;
    vec3 hdB1008 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1008.x;
    oC0.y = hdB1008.y;
    oC0.z = hdB1008.z;
    oC0.w = 1.0;
    bool hdB1020 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1028;
    if (hdB1020)
    {
        hdB1028 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1028 = hdB1020;
    }
    if (hdB1028)
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
    bool _3506 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3516;
    if (_3506)
    {
        _3516 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3516 = _3506;
    }
    if (_3516)
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
        bool _3541 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3556;
        if (!_3541)
        {
            _3556 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3556 = _3541;
        }
        if (_3556)
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
