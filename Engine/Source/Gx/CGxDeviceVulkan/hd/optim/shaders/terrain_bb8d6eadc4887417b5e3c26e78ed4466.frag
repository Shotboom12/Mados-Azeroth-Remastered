#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3880;
vec4 _RESERVED_IDENTIFIER_FIXUP_3881;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
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
    bool _55 = hdOverride >= 0;
    bool _74;
    if (_55)
    {
        _74 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _74 = _55;
    }
    vec4 _75;
    if (_74)
    {
        _75 = vec4(float(hdOverride));
    }
    else
    {
        _75 = value;
    }
    return _75;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _93 = hdOverride >= 0;
    bool _103;
    if (_93)
    {
        _103 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _103 = _93;
    }
    vec4 _104;
    if (_103)
    {
        _104 = vec4(float(hdOverride));
    }
    else
    {
        _104 = value;
    }
    return _104;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _122 = hdOverride >= 0;
    bool _132;
    if (_122)
    {
        _132 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _132 = _122;
    }
    vec4 _133;
    if (_132)
    {
        _133 = vec4(float(hdOverride));
    }
    else
    {
        _133 = value;
    }
    return _133;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _151 = hdOverride >= 0;
    bool _161;
    if (_151)
    {
        _161 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _161 = _151;
    }
    vec4 _162;
    if (_161)
    {
        _162 = vec4(float(hdOverride));
    }
    else
    {
        _162 = value;
    }
    return _162;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _180 = hdOverride >= 0;
    bool _190;
    if (_180)
    {
        _190 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _190 = _180;
    }
    vec4 _191;
    if (_190)
    {
        _191 = vec4(float(hdOverride));
    }
    else
    {
        _191 = value;
    }
    return _191;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1192 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_1199 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_1196.w = _RESERVED_IDENTIFIER_FIXUP_1199;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1192.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1202 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3880).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3041 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3041.x = _RESERVED_IDENTIFIER_FIXUP_1205.x;
    _RESERVED_IDENTIFIER_FIXUP_3041.y = _RESERVED_IDENTIFIER_FIXUP_1205.y;
    _RESERVED_IDENTIFIER_FIXUP_3041.z = _RESERVED_IDENTIFIER_FIXUP_1205.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1216 = _RESERVED_IDENTIFIER_FIXUP_3041.xyz + _RESERVED_IDENTIFIER_FIXUP_3041.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3047 = _RESERVED_IDENTIFIER_FIXUP_3041;
    _RESERVED_IDENTIFIER_FIXUP_3047.x = _RESERVED_IDENTIFIER_FIXUP_1216.x;
    _RESERVED_IDENTIFIER_FIXUP_3047.y = _RESERVED_IDENTIFIER_FIXUP_1216.y;
    _RESERVED_IDENTIFIER_FIXUP_3047.z = _RESERVED_IDENTIFIER_FIXUP_1216.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = mix(_RESERVED_IDENTIFIER_FIXUP_3047.xyz, _RESERVED_IDENTIFIER_FIXUP_1202, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1196.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3053 = _RESERVED_IDENTIFIER_FIXUP_1192;
    _RESERVED_IDENTIFIER_FIXUP_3053.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
    _RESERVED_IDENTIFIER_FIXUP_3053.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
    _RESERVED_IDENTIFIER_FIXUP_3053.z = _RESERVED_IDENTIFIER_FIXUP_1231.z;
    float _RESERVED_IDENTIFIER_FIXUP_1241 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1196.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3059 = _RESERVED_IDENTIFIER_FIXUP_1196;
    _RESERVED_IDENTIFIER_FIXUP_3059.x = _RESERVED_IDENTIFIER_FIXUP_1241;
    _RESERVED_IDENTIFIER_FIXUP_3059.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1241;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1251 = _RESERVED_IDENTIFIER_FIXUP_3053 * _RESERVED_IDENTIFIER_FIXUP_3059.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_1258 = max(abs(texcoord4.x), abs(texcoord4.y));
    float _RESERVED_IDENTIFIER_FIXUP_1270 = ((-clamp((_RESERVED_IDENTIFIER_FIXUP_1258 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0)) >= 0.0) ? 0.0 : 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3885;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3882;
    if (_RESERVED_IDENTIFIER_FIXUP_1270 != (-_RESERVED_IDENTIFIER_FIXUP_1270))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1282 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3305;
        _RESERVED_IDENTIFIER_FIXUP_3305.x = _RESERVED_IDENTIFIER_FIXUP_1282.x;
        _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_1282.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1292 = _RESERVED_IDENTIFIER_FIXUP_3305.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3309;
        _RESERVED_IDENTIFIER_FIXUP_3309.x = _RESERVED_IDENTIFIER_FIXUP_1292.x;
        _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_1292.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_3305.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3313;
        _RESERVED_IDENTIFIER_FIXUP_3313.x = _RESERVED_IDENTIFIER_FIXUP_1302.x;
        _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_1302.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_3305.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3317;
        _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_1312.x;
        _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1322 = _RESERVED_IDENTIFIER_FIXUP_3305.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3321;
        _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_1322.x;
        _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_1322.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1332 = _RESERVED_IDENTIFIER_FIXUP_3305.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3325;
        _RESERVED_IDENTIFIER_FIXUP_3325.x = _RESERVED_IDENTIFIER_FIXUP_1332.x;
        _RESERVED_IDENTIFIER_FIXUP_3325.y = _RESERVED_IDENTIFIER_FIXUP_1332.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_3305.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3329;
        _RESERVED_IDENTIFIER_FIXUP_3329.x = _RESERVED_IDENTIFIER_FIXUP_1342.x;
        _RESERVED_IDENTIFIER_FIXUP_3329.y = _RESERVED_IDENTIFIER_FIXUP_1342.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1352 = _RESERVED_IDENTIFIER_FIXUP_3305.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3333;
        _RESERVED_IDENTIFIER_FIXUP_3333.x = _RESERVED_IDENTIFIER_FIXUP_1352.x;
        _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_1352.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_3305.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3337;
        _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_1362.x;
        _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_1362.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1370 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_1370.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_1370.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1376 = hdLod5(param_1, param_2);
        _RESERVED_IDENTIFIER_FIXUP_3309.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3313.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3317.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3321.w = 0.0;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_3321.xy;
        float param_4 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1416 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3325.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3329.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3333.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3337.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3337.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1456 = hdLod5(param_5, param_6);
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3309.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1376.y = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3313.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1376.z = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3317.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1376.w = hdLod5(param_11, param_12).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1473 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1376 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3325.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1416.y = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3329.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1416.z = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3333.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1416.w = hdLod5(param_17, param_18).x;
        float _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_1456.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_1456;
        _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_1496;
        float _RESERVED_IDENTIFIER_FIXUP_1501 = float(_RESERVED_IDENTIFIER_FIXUP_1496 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_1501;
        float _RESERVED_IDENTIFIER_FIXUP_1504 = dot(_RESERVED_IDENTIFIER_FIXUP_1473, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_1504;
        float _RESERVED_IDENTIFIER_FIXUP_1507 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1416 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3402.z = _RESERVED_IDENTIFIER_FIXUP_1507;
        float _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_1504 + _RESERVED_IDENTIFIER_FIXUP_1507;
        _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_1513;
        float _RESERVED_IDENTIFIER_FIXUP_1519 = _RESERVED_IDENTIFIER_FIXUP_1501 + _RESERVED_IDENTIFIER_FIXUP_1513;
        _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_1519;
        _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_1519 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3885 = _RESERVED_IDENTIFIER_FIXUP_1473;
        _RESERVED_IDENTIFIER_FIXUP_3882 = _RESERVED_IDENTIFIER_FIXUP_3402;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3886;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3883;
        if (max(abs(texcoord5.x), abs(texcoord5.y)) < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3908 = vec4(_RESERVED_IDENTIFIER_FIXUP_1270, (texcoord5.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1199);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1547 = _RESERVED_IDENTIFIER_FIXUP_3908.yz;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1551 = _RESERVED_IDENTIFIER_FIXUP_1547 + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3243;
            _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1551.x;
            _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_1551.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1561 = _RESERVED_IDENTIFIER_FIXUP_1547 + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3247;
            _RESERVED_IDENTIFIER_FIXUP_3247.x = _RESERVED_IDENTIFIER_FIXUP_1561.x;
            _RESERVED_IDENTIFIER_FIXUP_3247.y = _RESERVED_IDENTIFIER_FIXUP_1561.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_1547 + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3251;
            _RESERVED_IDENTIFIER_FIXUP_3251.x = _RESERVED_IDENTIFIER_FIXUP_1571.x;
            _RESERVED_IDENTIFIER_FIXUP_3251.y = _RESERVED_IDENTIFIER_FIXUP_1571.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_1547 + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3255;
            _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_1581.x;
            _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_1581.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1589 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1589.xy;
            float param_20 = _RESERVED_IDENTIFIER_FIXUP_1589.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1595 = hdLod6(param_19, param_20);
            _RESERVED_IDENTIFIER_FIXUP_3243.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3247.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3251.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3255.w = 0.0;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3243.xy;
            float param_22 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1595.y = hdLod6(param_21, param_22).x;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3247.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1595.z = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3251.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1595.w = hdLod6(param_25, param_26).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1652 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1595 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3255.xy;
            float param_28 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1658 = hdLod6(param_27, param_28).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3908.y = _RESERVED_IDENTIFIER_FIXUP_1658;
            float _RESERVED_IDENTIFIER_FIXUP_1663 = float(_RESERVED_IDENTIFIER_FIXUP_1658 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3908.y = _RESERVED_IDENTIFIER_FIXUP_1663;
            float _RESERVED_IDENTIFIER_FIXUP_1666 = dot(_RESERVED_IDENTIFIER_FIXUP_1652, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3908.z = _RESERVED_IDENTIFIER_FIXUP_1666;
            float _RESERVED_IDENTIFIER_FIXUP_1672 = _RESERVED_IDENTIFIER_FIXUP_1663 + _RESERVED_IDENTIFIER_FIXUP_1666;
            _RESERVED_IDENTIFIER_FIXUP_3908.y = _RESERVED_IDENTIFIER_FIXUP_1672;
            _RESERVED_IDENTIFIER_FIXUP_3908.x = _RESERVED_IDENTIFIER_FIXUP_1672 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3886 = _RESERVED_IDENTIFIER_FIXUP_1652;
            _RESERVED_IDENTIFIER_FIXUP_3883 = _RESERVED_IDENTIFIER_FIXUP_3908;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3887;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3884;
            if (max(abs(texcoord6.x), abs(texcoord6.y)) < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3907 = vec4(_RESERVED_IDENTIFIER_FIXUP_1270, (texcoord6.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1199);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1700 = _RESERVED_IDENTIFIER_FIXUP_3907.yz;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_1700 + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3177;
                _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1704.x;
                _RESERVED_IDENTIFIER_FIXUP_3177.y = _RESERVED_IDENTIFIER_FIXUP_1704.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1714 = _RESERVED_IDENTIFIER_FIXUP_1700 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3181;
                _RESERVED_IDENTIFIER_FIXUP_3181.x = _RESERVED_IDENTIFIER_FIXUP_1714.x;
                _RESERVED_IDENTIFIER_FIXUP_3181.y = _RESERVED_IDENTIFIER_FIXUP_1714.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1724 = _RESERVED_IDENTIFIER_FIXUP_1700 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3185;
                _RESERVED_IDENTIFIER_FIXUP_3185.x = _RESERVED_IDENTIFIER_FIXUP_1724.x;
                _RESERVED_IDENTIFIER_FIXUP_3185.y = _RESERVED_IDENTIFIER_FIXUP_1724.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1734 = _RESERVED_IDENTIFIER_FIXUP_1700 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3189;
                _RESERVED_IDENTIFIER_FIXUP_3189.x = _RESERVED_IDENTIFIER_FIXUP_1734.x;
                _RESERVED_IDENTIFIER_FIXUP_3189.y = _RESERVED_IDENTIFIER_FIXUP_1734.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1742 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_1742.xy;
                float param_30 = _RESERVED_IDENTIFIER_FIXUP_1742.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1748 = hdLod7(param_29, param_30);
                _RESERVED_IDENTIFIER_FIXUP_3177.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3181.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3185.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3189.w = 0.0;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3177.xy;
                float param_32 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1748.y = hdLod7(param_31, param_32).x;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3181.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1748.z = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3185.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1748.w = hdLod7(param_35, param_36).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1805 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1748 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3189.xy;
                float param_38 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1811 = hdLod7(param_37, param_38).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3907.y = _RESERVED_IDENTIFIER_FIXUP_1811;
                float _RESERVED_IDENTIFIER_FIXUP_1816 = float(_RESERVED_IDENTIFIER_FIXUP_1811 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3907.y = _RESERVED_IDENTIFIER_FIXUP_1816;
                float _RESERVED_IDENTIFIER_FIXUP_1819 = dot(_RESERVED_IDENTIFIER_FIXUP_1805, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3907.z = _RESERVED_IDENTIFIER_FIXUP_1819;
                float _RESERVED_IDENTIFIER_FIXUP_1825 = _RESERVED_IDENTIFIER_FIXUP_1816 + _RESERVED_IDENTIFIER_FIXUP_1819;
                _RESERVED_IDENTIFIER_FIXUP_3907.y = _RESERVED_IDENTIFIER_FIXUP_1825;
                _RESERVED_IDENTIFIER_FIXUP_3907.x = _RESERVED_IDENTIFIER_FIXUP_1825 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3887 = _RESERVED_IDENTIFIER_FIXUP_1805;
                _RESERVED_IDENTIFIER_FIXUP_3884 = _RESERVED_IDENTIFIER_FIXUP_3907;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_3047.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3047.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1841 = (_RESERVED_IDENTIFIER_FIXUP_3047.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3092;
                _RESERVED_IDENTIFIER_FIXUP_3092.x = _RESERVED_IDENTIFIER_FIXUP_1841.x;
                _RESERVED_IDENTIFIER_FIXUP_3092.y = _RESERVED_IDENTIFIER_FIXUP_1841.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1851 = _RESERVED_IDENTIFIER_FIXUP_3092.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3096;
                _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_1851.x;
                _RESERVED_IDENTIFIER_FIXUP_3096.y = _RESERVED_IDENTIFIER_FIXUP_1851.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1861 = _RESERVED_IDENTIFIER_FIXUP_3092.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3100;
                _RESERVED_IDENTIFIER_FIXUP_3100.x = _RESERVED_IDENTIFIER_FIXUP_1861.x;
                _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1861.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1871 = _RESERVED_IDENTIFIER_FIXUP_3092.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3104;
                _RESERVED_IDENTIFIER_FIXUP_3104.x = _RESERVED_IDENTIFIER_FIXUP_1871.x;
                _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_1871.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1881 = _RESERVED_IDENTIFIER_FIXUP_3092.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3108;
                _RESERVED_IDENTIFIER_FIXUP_3108.x = _RESERVED_IDENTIFIER_FIXUP_1881.x;
                _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_1881.y;
                _RESERVED_IDENTIFIER_FIXUP_3092.w = 0.0;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3092.xy;
                float param_40 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1895 = hdLod8(param_39, param_40);
                _RESERVED_IDENTIFIER_FIXUP_3096.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3100.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3104.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3108.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3096.xy;
                float param_42 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1895.y = hdLod8(param_41, param_42).x;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3100.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1895.z = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3104.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1895.w = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3108.xy;
                float param_48 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1963 = float((hdLod8(param_47, param_48).x - texcoord6.w) >= 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1966 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1895 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3906 = vec4(_RESERVED_IDENTIFIER_FIXUP_1270, _RESERVED_IDENTIFIER_FIXUP_1963, _RESERVED_IDENTIFIER_FIXUP_1966, _RESERVED_IDENTIFIER_FIXUP_1199);
                float _RESERVED_IDENTIFIER_FIXUP_1972 = _RESERVED_IDENTIFIER_FIXUP_1963 + _RESERVED_IDENTIFIER_FIXUP_1966;
                _RESERVED_IDENTIFIER_FIXUP_3906.y = _RESERVED_IDENTIFIER_FIXUP_1972;
                float _RESERVED_IDENTIFIER_FIXUP_1980 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3906.z = _RESERVED_IDENTIFIER_FIXUP_1980;
                float _RESERVED_IDENTIFIER_FIXUP_1986 = clamp((_RESERVED_IDENTIFIER_FIXUP_1980 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3906.z = _RESERVED_IDENTIFIER_FIXUP_1986;
                float _RESERVED_IDENTIFIER_FIXUP_1991 = (_RESERVED_IDENTIFIER_FIXUP_1972 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3906.y = _RESERVED_IDENTIFIER_FIXUP_1991;
                _RESERVED_IDENTIFIER_FIXUP_3906.x = (_RESERVED_IDENTIFIER_FIXUP_1986 * _RESERVED_IDENTIFIER_FIXUP_1991) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3887 = _RESERVED_IDENTIFIER_FIXUP_3047;
                _RESERVED_IDENTIFIER_FIXUP_3884 = _RESERVED_IDENTIFIER_FIXUP_3906;
            }
            _RESERVED_IDENTIFIER_FIXUP_3886 = _RESERVED_IDENTIFIER_FIXUP_3887;
            _RESERVED_IDENTIFIER_FIXUP_3883 = _RESERVED_IDENTIFIER_FIXUP_3884;
        }
        _RESERVED_IDENTIFIER_FIXUP_3885 = _RESERVED_IDENTIFIER_FIXUP_3886;
        _RESERVED_IDENTIFIER_FIXUP_3882 = _RESERVED_IDENTIFIER_FIXUP_3883;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3425 = _RESERVED_IDENTIFIER_FIXUP_3882;
    _RESERVED_IDENTIFIER_FIXUP_3425.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3427 = _RESERVED_IDENTIFIER_FIXUP_3885;
    _RESERVED_IDENTIFIER_FIXUP_3427.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3427.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3427.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2030 = _RESERVED_IDENTIFIER_FIXUP_3425.xxx * _RESERVED_IDENTIFIER_FIXUP_3427.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3909 = vec4(_RESERVED_IDENTIFIER_FIXUP_2030.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2030.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2044 = (_RESERVED_IDENTIFIER_FIXUP_1251.xyz * _RESERVED_IDENTIFIER_FIXUP_3909.yyy) + _RESERVED_IDENTIFIER_FIXUP_3909.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3439 = _RESERVED_IDENTIFIER_FIXUP_1251;
    _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_2044.x;
    _RESERVED_IDENTIFIER_FIXUP_3439.y = _RESERVED_IDENTIFIER_FIXUP_2044.y;
    _RESERVED_IDENTIFIER_FIXUP_3439.z = _RESERVED_IDENTIFIER_FIXUP_2044.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2057 = _RESERVED_IDENTIFIER_FIXUP_3439.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3445 = _RESERVED_IDENTIFIER_FIXUP_3439;
    _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_2057.x;
    _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2057.y;
    _RESERVED_IDENTIFIER_FIXUP_3445.z = _RESERVED_IDENTIFIER_FIXUP_2057.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2114 = OptTex0( texcoord0.xyz);
    vec2 param_49 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2118 = hdTex1(param_49);
    _RESERVED_IDENTIFIER_FIXUP_2118.w = _RESERVED_IDENTIFIER_FIXUP_1199;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2124 = _RESERVED_IDENTIFIER_FIXUP_2114.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2127 = _RESERVED_IDENTIFIER_FIXUP_2124 * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3461 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_2127.x;
    _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_2127.y;
    _RESERVED_IDENTIFIER_FIXUP_3461.z = _RESERVED_IDENTIFIER_FIXUP_2127.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2138 = _RESERVED_IDENTIFIER_FIXUP_3461.xyz + _RESERVED_IDENTIFIER_FIXUP_3461.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3467 = _RESERVED_IDENTIFIER_FIXUP_3461;
    _RESERVED_IDENTIFIER_FIXUP_3467.x = _RESERVED_IDENTIFIER_FIXUP_2138.x;
    _RESERVED_IDENTIFIER_FIXUP_3467.y = _RESERVED_IDENTIFIER_FIXUP_2138.y;
    _RESERVED_IDENTIFIER_FIXUP_3467.z = _RESERVED_IDENTIFIER_FIXUP_2138.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2153 = mix(_RESERVED_IDENTIFIER_FIXUP_3467.xyz, _RESERVED_IDENTIFIER_FIXUP_2124, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2118.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3473 = _RESERVED_IDENTIFIER_FIXUP_2114;
    _RESERVED_IDENTIFIER_FIXUP_3473.x = _RESERVED_IDENTIFIER_FIXUP_2153.x;
    _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2153.y;
    _RESERVED_IDENTIFIER_FIXUP_3473.z = _RESERVED_IDENTIFIER_FIXUP_2153.z;
    float _RESERVED_IDENTIFIER_FIXUP_2163 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2118.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3479 = _RESERVED_IDENTIFIER_FIXUP_2118;
    _RESERVED_IDENTIFIER_FIXUP_3479.x = _RESERVED_IDENTIFIER_FIXUP_2163;
    _RESERVED_IDENTIFIER_FIXUP_3479.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2163;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2173 = _RESERVED_IDENTIFIER_FIXUP_3473 * _RESERVED_IDENTIFIER_FIXUP_3479.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_2192 = ((-clamp((_RESERVED_IDENTIFIER_FIXUP_1258 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0)) >= 0.0) ? 0.0 : 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3900;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3894;
    if (_RESERVED_IDENTIFIER_FIXUP_2192 != (-_RESERVED_IDENTIFIER_FIXUP_2192))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2204 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3725;
        _RESERVED_IDENTIFIER_FIXUP_3725.x = _RESERVED_IDENTIFIER_FIXUP_2204.x;
        _RESERVED_IDENTIFIER_FIXUP_3725.y = _RESERVED_IDENTIFIER_FIXUP_2204.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2214 = _RESERVED_IDENTIFIER_FIXUP_3725.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3729;
        _RESERVED_IDENTIFIER_FIXUP_3729.x = _RESERVED_IDENTIFIER_FIXUP_2214.x;
        _RESERVED_IDENTIFIER_FIXUP_3729.y = _RESERVED_IDENTIFIER_FIXUP_2214.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2224 = _RESERVED_IDENTIFIER_FIXUP_3725.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3733;
        _RESERVED_IDENTIFIER_FIXUP_3733.x = _RESERVED_IDENTIFIER_FIXUP_2224.x;
        _RESERVED_IDENTIFIER_FIXUP_3733.y = _RESERVED_IDENTIFIER_FIXUP_2224.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2234 = _RESERVED_IDENTIFIER_FIXUP_3725.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3737;
        _RESERVED_IDENTIFIER_FIXUP_3737.x = _RESERVED_IDENTIFIER_FIXUP_2234.x;
        _RESERVED_IDENTIFIER_FIXUP_3737.y = _RESERVED_IDENTIFIER_FIXUP_2234.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2244 = _RESERVED_IDENTIFIER_FIXUP_3725.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3741;
        _RESERVED_IDENTIFIER_FIXUP_3741.x = _RESERVED_IDENTIFIER_FIXUP_2244.x;
        _RESERVED_IDENTIFIER_FIXUP_3741.y = _RESERVED_IDENTIFIER_FIXUP_2244.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2254 = _RESERVED_IDENTIFIER_FIXUP_3725.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3745;
        _RESERVED_IDENTIFIER_FIXUP_3745.x = _RESERVED_IDENTIFIER_FIXUP_2254.x;
        _RESERVED_IDENTIFIER_FIXUP_3745.y = _RESERVED_IDENTIFIER_FIXUP_2254.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2264 = _RESERVED_IDENTIFIER_FIXUP_3725.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3749;
        _RESERVED_IDENTIFIER_FIXUP_3749.x = _RESERVED_IDENTIFIER_FIXUP_2264.x;
        _RESERVED_IDENTIFIER_FIXUP_3749.y = _RESERVED_IDENTIFIER_FIXUP_2264.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2274 = _RESERVED_IDENTIFIER_FIXUP_3725.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3753;
        _RESERVED_IDENTIFIER_FIXUP_3753.x = _RESERVED_IDENTIFIER_FIXUP_2274.x;
        _RESERVED_IDENTIFIER_FIXUP_3753.y = _RESERVED_IDENTIFIER_FIXUP_2274.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2284 = _RESERVED_IDENTIFIER_FIXUP_3725.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3757;
        _RESERVED_IDENTIFIER_FIXUP_3757.x = _RESERVED_IDENTIFIER_FIXUP_2284.x;
        _RESERVED_IDENTIFIER_FIXUP_3757.y = _RESERVED_IDENTIFIER_FIXUP_2284.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2292 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2292.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2292.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2298 = hdLod5(param_50, param_51);
        _RESERVED_IDENTIFIER_FIXUP_3729.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3733.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3737.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3741.w = 0.0;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3741.xy;
        float param_53 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2338 = hdLod5(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3745.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3749.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3753.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3757.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3757.xy;
        float param_55 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2378 = hdLod5(param_54, param_55);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3729.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2298.y = hdLod5(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3733.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2298.z = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3737.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2298.w = hdLod5(param_60, param_61).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2395 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2298 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3745.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2338.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3749.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2338.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3753.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2338.w = hdLod5(param_66, param_67).x;
        float _RESERVED_IDENTIFIER_FIXUP_2418 = _RESERVED_IDENTIFIER_FIXUP_2378.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3822 = _RESERVED_IDENTIFIER_FIXUP_2378;
        _RESERVED_IDENTIFIER_FIXUP_3822.x = _RESERVED_IDENTIFIER_FIXUP_2418;
        float _RESERVED_IDENTIFIER_FIXUP_2423 = float(_RESERVED_IDENTIFIER_FIXUP_2418 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3822.x = _RESERVED_IDENTIFIER_FIXUP_2423;
        float _RESERVED_IDENTIFIER_FIXUP_2426 = dot(_RESERVED_IDENTIFIER_FIXUP_2395, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3822.y = _RESERVED_IDENTIFIER_FIXUP_2426;
        float _RESERVED_IDENTIFIER_FIXUP_2429 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2338 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3822.z = _RESERVED_IDENTIFIER_FIXUP_2429;
        float _RESERVED_IDENTIFIER_FIXUP_2435 = _RESERVED_IDENTIFIER_FIXUP_2426 + _RESERVED_IDENTIFIER_FIXUP_2429;
        _RESERVED_IDENTIFIER_FIXUP_3822.y = _RESERVED_IDENTIFIER_FIXUP_2435;
        float _RESERVED_IDENTIFIER_FIXUP_2441 = _RESERVED_IDENTIFIER_FIXUP_2423 + _RESERVED_IDENTIFIER_FIXUP_2435;
        _RESERVED_IDENTIFIER_FIXUP_3822.x = _RESERVED_IDENTIFIER_FIXUP_2441;
        _RESERVED_IDENTIFIER_FIXUP_3822.x = _RESERVED_IDENTIFIER_FIXUP_2441 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3900 = _RESERVED_IDENTIFIER_FIXUP_2395;
        _RESERVED_IDENTIFIER_FIXUP_3894 = _RESERVED_IDENTIFIER_FIXUP_3822;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3901;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3895;
        if (max(abs(texcoord5.x), abs(texcoord5.y)) < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3913 = vec4(_RESERVED_IDENTIFIER_FIXUP_2192, (texcoord5.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1199);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2469 = _RESERVED_IDENTIFIER_FIXUP_3913.yz;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2473 = _RESERVED_IDENTIFIER_FIXUP_2469 + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3663;
            _RESERVED_IDENTIFIER_FIXUP_3663.x = _RESERVED_IDENTIFIER_FIXUP_2473.x;
            _RESERVED_IDENTIFIER_FIXUP_3663.y = _RESERVED_IDENTIFIER_FIXUP_2473.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2483 = _RESERVED_IDENTIFIER_FIXUP_2469 + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3667;
            _RESERVED_IDENTIFIER_FIXUP_3667.x = _RESERVED_IDENTIFIER_FIXUP_2483.x;
            _RESERVED_IDENTIFIER_FIXUP_3667.y = _RESERVED_IDENTIFIER_FIXUP_2483.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2493 = _RESERVED_IDENTIFIER_FIXUP_2469 + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3671;
            _RESERVED_IDENTIFIER_FIXUP_3671.x = _RESERVED_IDENTIFIER_FIXUP_2493.x;
            _RESERVED_IDENTIFIER_FIXUP_3671.y = _RESERVED_IDENTIFIER_FIXUP_2493.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2503 = _RESERVED_IDENTIFIER_FIXUP_2469 + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3675;
            _RESERVED_IDENTIFIER_FIXUP_3675.x = _RESERVED_IDENTIFIER_FIXUP_2503.x;
            _RESERVED_IDENTIFIER_FIXUP_3675.y = _RESERVED_IDENTIFIER_FIXUP_2503.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2511 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2511.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2511.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2517 = hdLod6(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3663.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3667.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3671.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3675.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3663.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2517.y = hdLod6(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3667.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2517.z = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3671.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2517.w = hdLod6(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2574 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2517 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3675.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2580 = hdLod6(param_76, param_77).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3913.y = _RESERVED_IDENTIFIER_FIXUP_2580;
            float _RESERVED_IDENTIFIER_FIXUP_2585 = float(_RESERVED_IDENTIFIER_FIXUP_2580 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3913.y = _RESERVED_IDENTIFIER_FIXUP_2585;
            float _RESERVED_IDENTIFIER_FIXUP_2588 = dot(_RESERVED_IDENTIFIER_FIXUP_2574, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3913.z = _RESERVED_IDENTIFIER_FIXUP_2588;
            float _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_2585 + _RESERVED_IDENTIFIER_FIXUP_2588;
            _RESERVED_IDENTIFIER_FIXUP_3913.y = _RESERVED_IDENTIFIER_FIXUP_2594;
            _RESERVED_IDENTIFIER_FIXUP_3913.x = _RESERVED_IDENTIFIER_FIXUP_2594 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3901 = _RESERVED_IDENTIFIER_FIXUP_2574;
            _RESERVED_IDENTIFIER_FIXUP_3895 = _RESERVED_IDENTIFIER_FIXUP_3913;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3902;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3896;
            if (max(abs(texcoord6.x), abs(texcoord6.y)) < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3912 = vec4(_RESERVED_IDENTIFIER_FIXUP_2192, (texcoord6.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1199);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2622 = _RESERVED_IDENTIFIER_FIXUP_3912.yz;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2626 = _RESERVED_IDENTIFIER_FIXUP_2622 + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3597;
                _RESERVED_IDENTIFIER_FIXUP_3597.x = _RESERVED_IDENTIFIER_FIXUP_2626.x;
                _RESERVED_IDENTIFIER_FIXUP_3597.y = _RESERVED_IDENTIFIER_FIXUP_2626.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2636 = _RESERVED_IDENTIFIER_FIXUP_2622 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3601;
                _RESERVED_IDENTIFIER_FIXUP_3601.x = _RESERVED_IDENTIFIER_FIXUP_2636.x;
                _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_2636.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2646 = _RESERVED_IDENTIFIER_FIXUP_2622 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3605;
                _RESERVED_IDENTIFIER_FIXUP_3605.x = _RESERVED_IDENTIFIER_FIXUP_2646.x;
                _RESERVED_IDENTIFIER_FIXUP_3605.y = _RESERVED_IDENTIFIER_FIXUP_2646.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2656 = _RESERVED_IDENTIFIER_FIXUP_2622 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3609;
                _RESERVED_IDENTIFIER_FIXUP_3609.x = _RESERVED_IDENTIFIER_FIXUP_2656.x;
                _RESERVED_IDENTIFIER_FIXUP_3609.y = _RESERVED_IDENTIFIER_FIXUP_2656.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2664 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2664.xy;
                float param_79 = _RESERVED_IDENTIFIER_FIXUP_2664.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2670 = hdLod7(param_78, param_79);
                _RESERVED_IDENTIFIER_FIXUP_3597.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3601.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3605.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3609.w = 0.0;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3597.xy;
                float param_81 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2670.y = hdLod7(param_80, param_81).x;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3601.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2670.z = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3605.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2670.w = hdLod7(param_84, param_85).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2727 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2670 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3609.xy;
                float param_87 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2733 = hdLod7(param_86, param_87).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3912.y = _RESERVED_IDENTIFIER_FIXUP_2733;
                float _RESERVED_IDENTIFIER_FIXUP_2738 = float(_RESERVED_IDENTIFIER_FIXUP_2733 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3912.y = _RESERVED_IDENTIFIER_FIXUP_2738;
                float _RESERVED_IDENTIFIER_FIXUP_2741 = dot(_RESERVED_IDENTIFIER_FIXUP_2727, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3912.z = _RESERVED_IDENTIFIER_FIXUP_2741;
                float _RESERVED_IDENTIFIER_FIXUP_2747 = _RESERVED_IDENTIFIER_FIXUP_2738 + _RESERVED_IDENTIFIER_FIXUP_2741;
                _RESERVED_IDENTIFIER_FIXUP_3912.y = _RESERVED_IDENTIFIER_FIXUP_2747;
                _RESERVED_IDENTIFIER_FIXUP_3912.x = _RESERVED_IDENTIFIER_FIXUP_2747 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3902 = _RESERVED_IDENTIFIER_FIXUP_2727;
                _RESERVED_IDENTIFIER_FIXUP_3896 = _RESERVED_IDENTIFIER_FIXUP_3912;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_3467.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3467.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2763 = (_RESERVED_IDENTIFIER_FIXUP_3467.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3512;
                _RESERVED_IDENTIFIER_FIXUP_3512.x = _RESERVED_IDENTIFIER_FIXUP_2763.x;
                _RESERVED_IDENTIFIER_FIXUP_3512.y = _RESERVED_IDENTIFIER_FIXUP_2763.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2773 = _RESERVED_IDENTIFIER_FIXUP_3512.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3516;
                _RESERVED_IDENTIFIER_FIXUP_3516.x = _RESERVED_IDENTIFIER_FIXUP_2773.x;
                _RESERVED_IDENTIFIER_FIXUP_3516.y = _RESERVED_IDENTIFIER_FIXUP_2773.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2783 = _RESERVED_IDENTIFIER_FIXUP_3512.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3520;
                _RESERVED_IDENTIFIER_FIXUP_3520.x = _RESERVED_IDENTIFIER_FIXUP_2783.x;
                _RESERVED_IDENTIFIER_FIXUP_3520.y = _RESERVED_IDENTIFIER_FIXUP_2783.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2793 = _RESERVED_IDENTIFIER_FIXUP_3512.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3524;
                _RESERVED_IDENTIFIER_FIXUP_3524.x = _RESERVED_IDENTIFIER_FIXUP_2793.x;
                _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2793.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2803 = _RESERVED_IDENTIFIER_FIXUP_3512.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3528;
                _RESERVED_IDENTIFIER_FIXUP_3528.x = _RESERVED_IDENTIFIER_FIXUP_2803.x;
                _RESERVED_IDENTIFIER_FIXUP_3528.y = _RESERVED_IDENTIFIER_FIXUP_2803.y;
                _RESERVED_IDENTIFIER_FIXUP_3512.w = 0.0;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3512.xy;
                float param_89 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2817 = hdLod8(param_88, param_89);
                _RESERVED_IDENTIFIER_FIXUP_3516.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3520.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3524.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3528.w = 0.0;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3516.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2817.y = hdLod8(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3520.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2817.z = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3524.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2817.w = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3528.xy;
                float param_97 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2885 = float((hdLod8(param_96, param_97).x - texcoord6.w) >= 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2888 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2817 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3911 = vec4(_RESERVED_IDENTIFIER_FIXUP_2192, _RESERVED_IDENTIFIER_FIXUP_2885, _RESERVED_IDENTIFIER_FIXUP_2888, _RESERVED_IDENTIFIER_FIXUP_1199);
                float _RESERVED_IDENTIFIER_FIXUP_2894 = _RESERVED_IDENTIFIER_FIXUP_2885 + _RESERVED_IDENTIFIER_FIXUP_2888;
                _RESERVED_IDENTIFIER_FIXUP_3911.y = _RESERVED_IDENTIFIER_FIXUP_2894;
                float _RESERVED_IDENTIFIER_FIXUP_2902 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3911.z = _RESERVED_IDENTIFIER_FIXUP_2902;
                float _RESERVED_IDENTIFIER_FIXUP_2908 = clamp((_RESERVED_IDENTIFIER_FIXUP_2902 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3911.z = _RESERVED_IDENTIFIER_FIXUP_2908;
                float _RESERVED_IDENTIFIER_FIXUP_2913 = (_RESERVED_IDENTIFIER_FIXUP_2894 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3911.y = _RESERVED_IDENTIFIER_FIXUP_2913;
                _RESERVED_IDENTIFIER_FIXUP_3911.x = (_RESERVED_IDENTIFIER_FIXUP_2908 * _RESERVED_IDENTIFIER_FIXUP_2913) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3902 = _RESERVED_IDENTIFIER_FIXUP_3467;
                _RESERVED_IDENTIFIER_FIXUP_3896 = _RESERVED_IDENTIFIER_FIXUP_3911;
            }
            _RESERVED_IDENTIFIER_FIXUP_3901 = _RESERVED_IDENTIFIER_FIXUP_3902;
            _RESERVED_IDENTIFIER_FIXUP_3895 = _RESERVED_IDENTIFIER_FIXUP_3896;
        }
        _RESERVED_IDENTIFIER_FIXUP_3900 = _RESERVED_IDENTIFIER_FIXUP_3901;
        _RESERVED_IDENTIFIER_FIXUP_3894 = _RESERVED_IDENTIFIER_FIXUP_3895;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2928 = (_RESERVED_IDENTIFIER_FIXUP_3894.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3843 = _RESERVED_IDENTIFIER_FIXUP_3894;
    _RESERVED_IDENTIFIER_FIXUP_3843.y = _RESERVED_IDENTIFIER_FIXUP_2928;
    _RESERVED_IDENTIFIER_FIXUP_3843.y = _RESERVED_IDENTIFIER_FIXUP_2928;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2941 = _RESERVED_IDENTIFIER_FIXUP_2173.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3849 = _RESERVED_IDENTIFIER_FIXUP_3900;
    _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2941.x;
    _RESERVED_IDENTIFIER_FIXUP_3849.y = _RESERVED_IDENTIFIER_FIXUP_2941.y;
    _RESERVED_IDENTIFIER_FIXUP_3849.z = _RESERVED_IDENTIFIER_FIXUP_2941.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2952 = _RESERVED_IDENTIFIER_FIXUP_3843.xxx * _RESERVED_IDENTIFIER_FIXUP_3849.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3914 = vec4(_RESERVED_IDENTIFIER_FIXUP_2952.x, _RESERVED_IDENTIFIER_FIXUP_2928, _RESERVED_IDENTIFIER_FIXUP_2952.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2966 = (_RESERVED_IDENTIFIER_FIXUP_2173.xyz * _RESERVED_IDENTIFIER_FIXUP_3914.yyy) + _RESERVED_IDENTIFIER_FIXUP_3914.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3861 = _RESERVED_IDENTIFIER_FIXUP_2173;
    _RESERVED_IDENTIFIER_FIXUP_3861.x = _RESERVED_IDENTIFIER_FIXUP_2966.x;
    _RESERVED_IDENTIFIER_FIXUP_3861.y = _RESERVED_IDENTIFIER_FIXUP_2966.y;
    _RESERVED_IDENTIFIER_FIXUP_3861.z = _RESERVED_IDENTIFIER_FIXUP_2966.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2979 = _RESERVED_IDENTIFIER_FIXUP_3861.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3867 = _RESERVED_IDENTIFIER_FIXUP_3861;
    _RESERVED_IDENTIFIER_FIXUP_3867.x = _RESERVED_IDENTIFIER_FIXUP_2979.x;
    _RESERVED_IDENTIFIER_FIXUP_3867.y = _RESERVED_IDENTIFIER_FIXUP_2979.y;
    _RESERVED_IDENTIFIER_FIXUP_3867.z = _RESERVED_IDENTIFIER_FIXUP_2979.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3867.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1050 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1059;
    if (_RESERVED_IDENTIFIER_FIXUP_1050)
    {
        _RESERVED_IDENTIFIER_FIXUP_1059 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1059 = _RESERVED_IDENTIFIER_FIXUP_1050;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1059)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1096 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3445.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1122 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3032;
    if (_RESERVED_IDENTIFIER_FIXUP_1096 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3032 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1096), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1122);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3032 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1122);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3032;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2928);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB91 = r0.xyz * v0.xyz;
    r2.x = hdB91.x;
    r2.y = hdB91.y;
    r2.z = hdB91.z;
    vec4 hdB100 = r2;
    vec4 hdB102 = r2;
    vec3 hdB104 = hdB100.xyz + hdB102.xyz;
    r2.x = hdB104.x;
    r2.y = hdB104.y;
    r2.z = hdB104.z;
    vec4 hdB113 = r0;
    vec3 hdB122 = mix(r2.xyz, hdB113.xyz, greaterThanEqual(-r1.www, vec3(0.0)));
    r0.x = hdB122.x;
    r0.y = hdB122.y;
    r0.z = hdB122.z;
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB180 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB180.x;
        r1.y = hdB180.y;
        vec2 hdB192 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB192.x;
        r2.y = hdB192.y;
        vec2 hdB203 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB203.x;
        r3.y = hdB203.y;
        vec2 hdB214 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB214.x;
        r4.y = hdB214.y;
        vec2 hdB225 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB225.x;
        r5.y = hdB225.y;
        vec2 hdB236 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB236.x;
        r6.y = hdB236.y;
        vec2 hdB247 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB247.x;
        r7.y = hdB247.y;
        vec2 hdB258 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB258.x;
        r8.y = hdB258.y;
        vec4 hdB263 = r1;
        vec2 hdB269 = hdB263.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB269.x;
        r1.y = hdB269.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r9.xy;
        float param_2 = r9.w;
        r9 = hdLod5(param_1, param_2);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_7 = r4.xy;
        float param_8 = r4.w;
        r4 = hdLod5(param_7, param_8);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_9 = r5.xy;
        float param_10 = r5.w;
        r5 = hdLod5(param_9, param_10);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_11 = r6.xy;
        float param_12 = r6.w;
        r6 = hdLod5(param_11, param_12);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_13 = r7.xy;
        float param_14 = r7.w;
        r7 = hdLod5(param_13, param_14);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_15 = r8.xy;
        float param_16 = r8.w;
        r8 = hdLod5(param_15, param_16);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_17 = r1.xy;
        float param_18 = r1.w;
        r1 = hdLod5(param_17, param_18);
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
            vec2 hdB455 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB455.x;
            r1.z = hdB455.y;
            vec2 hdB465 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB465.x;
            r2.y = hdB465.y;
            vec2 hdB475 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB475.x;
            r3.y = hdB475.y;
            vec2 hdB485 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB485.x;
            r4.y = hdB485.y;
            vec2 hdB495 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB495.x;
            r5.y = hdB495.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_19 = r6.xy;
            float param_20 = r6.w;
            r6 = hdLod6(param_19, param_20);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_21 = r2.xy;
            float param_22 = r2.w;
            r2 = hdLod6(param_21, param_22);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_23 = r3.xy;
            float param_24 = r3.w;
            r3 = hdLod6(param_23, param_24);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_25 = r4.xy;
            float param_26 = r4.w;
            r4 = hdLod6(param_25, param_26);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_27 = r5.xy;
            float param_28 = r5.w;
            r5 = hdLod6(param_27, param_28);
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
                vec2 hdB611 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB611.x;
                r1.z = hdB611.y;
                vec2 hdB621 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB621.x;
                r2.y = hdB621.y;
                vec2 hdB631 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB631.x;
                r3.y = hdB631.y;
                vec2 hdB641 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB641.x;
                r4.y = hdB641.y;
                vec2 hdB651 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB651.x;
                r5.y = hdB651.y;
                r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_29 = r6.xy;
                float param_30 = r6.w;
                r6 = hdLod7(param_29, param_30);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_31 = r2.xy;
                float param_32 = r2.w;
                r2 = hdLod7(param_31, param_32);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_33 = r3.xy;
                float param_34 = r3.w;
                r3 = hdLod7(param_33, param_34);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_35 = r4.xy;
                float param_36 = r4.w;
                r4 = hdLod7(param_35, param_36);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_37 = r5.xy;
                float param_38 = r5.w;
                r5 = hdLod7(param_37, param_38);
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
                vec2 hdB759 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB759.x;
                r3.y = hdB759.y;
                vec2 hdB769 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB769.x;
                r4.y = hdB769.y;
                vec2 hdB779 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB779.x;
                r5.y = hdB779.y;
                vec2 hdB789 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB789.x;
                r6.y = hdB789.y;
                vec2 hdB799 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB799.x;
                r7.y = hdB799.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_39 = r3.xy;
                float param_40 = r3.w;
                r3 = hdLod8(param_39, param_40);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_41 = r4.xy;
                float param_42 = r4.w;
                r4 = hdLod8(param_41, param_42);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_43 = r5.xy;
                float param_44 = r5.w;
                r5 = hdLod8(param_43, param_44);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_45 = r6.xy;
                float param_46 = r6.w;
                r6 = hdLod8(param_45, param_46);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_47 = r7.xy;
                float param_48 = r7.w;
                r7 = hdLod8(param_47, param_48);
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
    vec3 hdB933 = r0.www * v1.xyz;
    r2.x = hdB933.x;
    r2.y = hdB933.y;
    r2.z = hdB933.z;
    vec4 hdB940 = r1;
    vec3 hdB944 = hdB940.xxx * r2.xyz;
    r1.x = hdB944.x;
    r1.z = hdB944.y;
    r1.w = hdB944.z;
    vec4 hdB951 = r0;
    vec3 hdB958 = (hdB951.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB958.x;
    r0.y = hdB958.y;
    r0.z = hdB958.z;
    vec4 hdB965 = r0;
    vec3 hdB972 = hdB965.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB972.x;
    r0.y = hdB972.y;
    r0.z = hdB972.z;
    vec3 hdB987 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB987.x;
    oC0.y = hdB987.y;
    oC0.z = hdB987.z;
    oC0.w = 1.0;
    bool hdB998 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1006;
    if (hdB998)
    {
        hdB1006 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1006 = hdB998;
    }
    if (hdB1006)
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
    bool _3272 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3282;
    if (_3272)
    {
        _3282 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 482u) != 0u;
    }
    else
    {
        _3282 = _3272;
    }
    if (_3282)
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
        bool _3307 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3322;
        if (!_3307)
        {
            _3322 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 482u) != 0u;
        }
        else
        {
            _3322 = _3307;
        }
        if (_3322)
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
