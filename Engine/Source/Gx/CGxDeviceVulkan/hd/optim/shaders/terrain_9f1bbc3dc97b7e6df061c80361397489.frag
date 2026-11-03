#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3843;
vec4 _RESERVED_IDENTIFIER_FIXUP_3844;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _58 = hdOverride >= 0;
    bool _77;
    if (_58)
    {
        _77 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _77 = _58;
    }
    vec4 _78;
    if (_77)
    {
        _78 = vec4(float(hdOverride));
    }
    else
    {
        _78 = value;
    }
    return _78;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _95 = hdOverride >= 0;
    bool _105;
    if (_95)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _105 = _95;
    }
    vec4 _106;
    if (_105)
    {
        _106 = vec4(float(hdOverride));
    }
    else
    {
        _106 = value;
    }
    return _106;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _124 = hdOverride >= 0;
    bool _134;
    if (_124)
    {
        _134 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _134 = _124;
    }
    vec4 _135;
    if (_134)
    {
        _135 = vec4(float(hdOverride));
    }
    else
    {
        _135 = value;
    }
    return _135;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _153 = hdOverride >= 0;
    bool _163;
    if (_153)
    {
        _163 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _163 = _153;
    }
    vec4 _164;
    if (_163)
    {
        _164 = vec4(float(hdOverride));
    }
    else
    {
        _164 = value;
    }
    return _164;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _182 = hdOverride >= 0;
    bool _192;
    if (_182)
    {
        _192 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _192 = _182;
    }
    vec4 _193;
    if (_192)
    {
        _193 = vec4(float(hdOverride));
    }
    else
    {
        _193 = value;
    }
    return _193;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _211 = hdOverride >= 0;
    bool _221;
    if (_211)
    {
        _221 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _221 = _211;
    }
    vec4 _222;
    if (_221)
    {
        _222 = vec4(float(hdOverride));
    }
    else
    {
        _222 = value;
    }
    return _222;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1183 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1187 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1191 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1195 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1191.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3018 = _RESERVED_IDENTIFIER_FIXUP_1191;
    _RESERVED_IDENTIFIER_FIXUP_3018.y = _RESERVED_IDENTIFIER_FIXUP_1195;
    _RESERVED_IDENTIFIER_FIXUP_3018.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1195;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1187 * _RESERVED_IDENTIFIER_FIXUP_3018.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211 = (_RESERVED_IDENTIFIER_FIXUP_1183 * _RESERVED_IDENTIFIER_FIXUP_3018.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1205;
    float _RESERVED_IDENTIFIER_FIXUP_1218 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3025 = _RESERVED_IDENTIFIER_FIXUP_1205;
    _RESERVED_IDENTIFIER_FIXUP_3025.x = _RESERVED_IDENTIFIER_FIXUP_1218;
    float _RESERVED_IDENTIFIER_FIXUP_1224 = clamp((_RESERVED_IDENTIFIER_FIXUP_1218 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3025.x = _RESERVED_IDENTIFIER_FIXUP_1224;
    float _RESERVED_IDENTIFIER_FIXUP_1230 = ((-_RESERVED_IDENTIFIER_FIXUP_1224) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3025.x = _RESERVED_IDENTIFIER_FIXUP_1230;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3845;
    if (_RESERVED_IDENTIFIER_FIXUP_1230 != (-_RESERVED_IDENTIFIER_FIXUP_1230))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1242 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3264;
        _RESERVED_IDENTIFIER_FIXUP_3264.x = _RESERVED_IDENTIFIER_FIXUP_1242.x;
        _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_1242.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1252 = _RESERVED_IDENTIFIER_FIXUP_3264.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3268;
        _RESERVED_IDENTIFIER_FIXUP_3268.x = _RESERVED_IDENTIFIER_FIXUP_1252.x;
        _RESERVED_IDENTIFIER_FIXUP_3268.y = _RESERVED_IDENTIFIER_FIXUP_1252.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_3264.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3272;
        _RESERVED_IDENTIFIER_FIXUP_3272.x = _RESERVED_IDENTIFIER_FIXUP_1262.x;
        _RESERVED_IDENTIFIER_FIXUP_3272.y = _RESERVED_IDENTIFIER_FIXUP_1262.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_3264.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3276;
        _RESERVED_IDENTIFIER_FIXUP_3276.x = _RESERVED_IDENTIFIER_FIXUP_1272.x;
        _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1272.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1282 = _RESERVED_IDENTIFIER_FIXUP_3264.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3280;
        _RESERVED_IDENTIFIER_FIXUP_3280.x = _RESERVED_IDENTIFIER_FIXUP_1282.x;
        _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_1282.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1292 = _RESERVED_IDENTIFIER_FIXUP_3264.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3284;
        _RESERVED_IDENTIFIER_FIXUP_3284.x = _RESERVED_IDENTIFIER_FIXUP_1292.x;
        _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_1292.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_3264.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3288;
        _RESERVED_IDENTIFIER_FIXUP_3288.x = _RESERVED_IDENTIFIER_FIXUP_1302.x;
        _RESERVED_IDENTIFIER_FIXUP_3288.y = _RESERVED_IDENTIFIER_FIXUP_1302.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_3264.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3292;
        _RESERVED_IDENTIFIER_FIXUP_3292.x = _RESERVED_IDENTIFIER_FIXUP_1312.x;
        _RESERVED_IDENTIFIER_FIXUP_3292.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1322 = _RESERVED_IDENTIFIER_FIXUP_3264.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3296;
        _RESERVED_IDENTIFIER_FIXUP_3296.x = _RESERVED_IDENTIFIER_FIXUP_1322.x;
        _RESERVED_IDENTIFIER_FIXUP_3296.y = _RESERVED_IDENTIFIER_FIXUP_1322.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1330 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1330.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1330.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1336 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_3268.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3272.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3276.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3280.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3280.xy;
        float param_5 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1376 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3284.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3288.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3292.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3296.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3296.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1416 = hdLod5(param_6, param_7);
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3268.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1336.y = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3272.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1336.z = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3276.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1336.w = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3284.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1376.y = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3288.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1376.z = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3292.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1376.w = hdLod5(param_18, param_19).x;
        float _RESERVED_IDENTIFIER_FIXUP_1456 = _RESERVED_IDENTIFIER_FIXUP_1416.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3361 = _RESERVED_IDENTIFIER_FIXUP_1416;
        _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_1456;
        float _RESERVED_IDENTIFIER_FIXUP_1461 = float(_RESERVED_IDENTIFIER_FIXUP_1456 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_1461;
        float _RESERVED_IDENTIFIER_FIXUP_1464 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1336 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_1464;
        float _RESERVED_IDENTIFIER_FIXUP_1467 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1376 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3361.z = _RESERVED_IDENTIFIER_FIXUP_1467;
        float _RESERVED_IDENTIFIER_FIXUP_1473 = _RESERVED_IDENTIFIER_FIXUP_1464 + _RESERVED_IDENTIFIER_FIXUP_1467;
        _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_1473;
        float _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_1461 + _RESERVED_IDENTIFIER_FIXUP_1473;
        _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_1479;
        _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_1479 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3845 = _RESERVED_IDENTIFIER_FIXUP_3361;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1492 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3025.y = _RESERVED_IDENTIFIER_FIXUP_1492;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3846;
        if (_RESERVED_IDENTIFIER_FIXUP_1492 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1501 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3198 = _RESERVED_IDENTIFIER_FIXUP_3025;
            _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1501.x;
            _RESERVED_IDENTIFIER_FIXUP_3198.z = _RESERVED_IDENTIFIER_FIXUP_1501.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1511 = _RESERVED_IDENTIFIER_FIXUP_3198.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3202;
            _RESERVED_IDENTIFIER_FIXUP_3202.x = _RESERVED_IDENTIFIER_FIXUP_1511.x;
            _RESERVED_IDENTIFIER_FIXUP_3202.y = _RESERVED_IDENTIFIER_FIXUP_1511.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1521 = _RESERVED_IDENTIFIER_FIXUP_3198.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3206;
            _RESERVED_IDENTIFIER_FIXUP_3206.x = _RESERVED_IDENTIFIER_FIXUP_1521.x;
            _RESERVED_IDENTIFIER_FIXUP_3206.y = _RESERVED_IDENTIFIER_FIXUP_1521.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_3198.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3210;
            _RESERVED_IDENTIFIER_FIXUP_3210.x = _RESERVED_IDENTIFIER_FIXUP_1531.x;
            _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_1531.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1541 = _RESERVED_IDENTIFIER_FIXUP_3198.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3214;
            _RESERVED_IDENTIFIER_FIXUP_3214.x = _RESERVED_IDENTIFIER_FIXUP_1541.x;
            _RESERVED_IDENTIFIER_FIXUP_3214.y = _RESERVED_IDENTIFIER_FIXUP_1541.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1549 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1549.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1549.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1555 = hdLod6(param_20, param_21);
            _RESERVED_IDENTIFIER_FIXUP_3202.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3206.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3210.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3214.w = 0.0;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3202.xy;
            float param_23 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1555.y = hdLod6(param_22, param_23).x;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3206.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1555.z = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3210.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1555.w = hdLod6(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3214.xy;
            float param_29 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1618 = hdLod6(param_28, param_29).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1618;
            float _RESERVED_IDENTIFIER_FIXUP_1623 = float(_RESERVED_IDENTIFIER_FIXUP_1618 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1623;
            float _RESERVED_IDENTIFIER_FIXUP_1626 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1555 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3198.z = _RESERVED_IDENTIFIER_FIXUP_1626;
            float _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_1623 + _RESERVED_IDENTIFIER_FIXUP_1626;
            _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1632;
            _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_1632 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3846 = _RESERVED_IDENTIFIER_FIXUP_3198;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1645 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3042 = _RESERVED_IDENTIFIER_FIXUP_3025;
            _RESERVED_IDENTIFIER_FIXUP_3042.y = _RESERVED_IDENTIFIER_FIXUP_1645;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3847;
            if (_RESERVED_IDENTIFIER_FIXUP_1645 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1654 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3132 = _RESERVED_IDENTIFIER_FIXUP_3042;
                _RESERVED_IDENTIFIER_FIXUP_3132.y = _RESERVED_IDENTIFIER_FIXUP_1654.x;
                _RESERVED_IDENTIFIER_FIXUP_3132.z = _RESERVED_IDENTIFIER_FIXUP_1654.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1664 = _RESERVED_IDENTIFIER_FIXUP_3132.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3136;
                _RESERVED_IDENTIFIER_FIXUP_3136.x = _RESERVED_IDENTIFIER_FIXUP_1664.x;
                _RESERVED_IDENTIFIER_FIXUP_3136.y = _RESERVED_IDENTIFIER_FIXUP_1664.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1674 = _RESERVED_IDENTIFIER_FIXUP_3132.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3140;
                _RESERVED_IDENTIFIER_FIXUP_3140.x = _RESERVED_IDENTIFIER_FIXUP_1674.x;
                _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_1674.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1684 = _RESERVED_IDENTIFIER_FIXUP_3132.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3144;
                _RESERVED_IDENTIFIER_FIXUP_3144.x = _RESERVED_IDENTIFIER_FIXUP_1684.x;
                _RESERVED_IDENTIFIER_FIXUP_3144.y = _RESERVED_IDENTIFIER_FIXUP_1684.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_3132.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3148;
                _RESERVED_IDENTIFIER_FIXUP_3148.x = _RESERVED_IDENTIFIER_FIXUP_1694.x;
                _RESERVED_IDENTIFIER_FIXUP_3148.y = _RESERVED_IDENTIFIER_FIXUP_1694.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1702 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1702.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1702.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1708 = hdLod7(param_30, param_31);
                _RESERVED_IDENTIFIER_FIXUP_3136.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3140.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3144.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3148.w = 0.0;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3136.xy;
                float param_33 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1708.y = hdLod7(param_32, param_33).x;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3140.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1708.z = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3144.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1708.w = hdLod7(param_36, param_37).x;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3148.xy;
                float param_39 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1771 = hdLod7(param_38, param_39).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3132.y = _RESERVED_IDENTIFIER_FIXUP_1771;
                float _RESERVED_IDENTIFIER_FIXUP_1776 = float(_RESERVED_IDENTIFIER_FIXUP_1771 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3132.y = _RESERVED_IDENTIFIER_FIXUP_1776;
                float _RESERVED_IDENTIFIER_FIXUP_1779 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1708 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3132.z = _RESERVED_IDENTIFIER_FIXUP_1779;
                float _RESERVED_IDENTIFIER_FIXUP_1785 = _RESERVED_IDENTIFIER_FIXUP_1776 + _RESERVED_IDENTIFIER_FIXUP_1779;
                _RESERVED_IDENTIFIER_FIXUP_3132.y = _RESERVED_IDENTIFIER_FIXUP_1785;
                _RESERVED_IDENTIFIER_FIXUP_3132.x = _RESERVED_IDENTIFIER_FIXUP_1785 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3847 = _RESERVED_IDENTIFIER_FIXUP_3132;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3046 = _RESERVED_IDENTIFIER_FIXUP_3018;
                _RESERVED_IDENTIFIER_FIXUP_3046.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3046.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1801 = (_RESERVED_IDENTIFIER_FIXUP_3046.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3051;
                _RESERVED_IDENTIFIER_FIXUP_3051.x = _RESERVED_IDENTIFIER_FIXUP_1801.x;
                _RESERVED_IDENTIFIER_FIXUP_3051.y = _RESERVED_IDENTIFIER_FIXUP_1801.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1811 = _RESERVED_IDENTIFIER_FIXUP_3051.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3055;
                _RESERVED_IDENTIFIER_FIXUP_3055.x = _RESERVED_IDENTIFIER_FIXUP_1811.x;
                _RESERVED_IDENTIFIER_FIXUP_3055.y = _RESERVED_IDENTIFIER_FIXUP_1811.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1821 = _RESERVED_IDENTIFIER_FIXUP_3051.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3059;
                _RESERVED_IDENTIFIER_FIXUP_3059.x = _RESERVED_IDENTIFIER_FIXUP_1821.x;
                _RESERVED_IDENTIFIER_FIXUP_3059.y = _RESERVED_IDENTIFIER_FIXUP_1821.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1831 = _RESERVED_IDENTIFIER_FIXUP_3051.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3063;
                _RESERVED_IDENTIFIER_FIXUP_3063.x = _RESERVED_IDENTIFIER_FIXUP_1831.x;
                _RESERVED_IDENTIFIER_FIXUP_3063.y = _RESERVED_IDENTIFIER_FIXUP_1831.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1841 = _RESERVED_IDENTIFIER_FIXUP_3051.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3067;
                _RESERVED_IDENTIFIER_FIXUP_3067.x = _RESERVED_IDENTIFIER_FIXUP_1841.x;
                _RESERVED_IDENTIFIER_FIXUP_3067.y = _RESERVED_IDENTIFIER_FIXUP_1841.y;
                _RESERVED_IDENTIFIER_FIXUP_3051.w = 0.0;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3051.xy;
                float param_41 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1855 = hdLod8(param_40, param_41);
                _RESERVED_IDENTIFIER_FIXUP_3055.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3059.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3063.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3067.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3055.xy;
                float param_43 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1855.y = hdLod8(param_42, param_43).x;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3059.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1855.z = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3063.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1855.w = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3067.xy;
                float param_49 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1918 = hdLod8(param_48, param_49).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3107 = _RESERVED_IDENTIFIER_FIXUP_3042;
                _RESERVED_IDENTIFIER_FIXUP_3107.y = _RESERVED_IDENTIFIER_FIXUP_1918;
                float _RESERVED_IDENTIFIER_FIXUP_1923 = float(_RESERVED_IDENTIFIER_FIXUP_1918 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3107.y = _RESERVED_IDENTIFIER_FIXUP_1923;
                float _RESERVED_IDENTIFIER_FIXUP_1926 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1855 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3107.z = _RESERVED_IDENTIFIER_FIXUP_1926;
                float _RESERVED_IDENTIFIER_FIXUP_1932 = _RESERVED_IDENTIFIER_FIXUP_1923 + _RESERVED_IDENTIFIER_FIXUP_1926;
                _RESERVED_IDENTIFIER_FIXUP_3107.y = _RESERVED_IDENTIFIER_FIXUP_1932;
                float _RESERVED_IDENTIFIER_FIXUP_1940 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3107.z = _RESERVED_IDENTIFIER_FIXUP_1940;
                float _RESERVED_IDENTIFIER_FIXUP_1946 = clamp((_RESERVED_IDENTIFIER_FIXUP_1940 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3107.z = _RESERVED_IDENTIFIER_FIXUP_1946;
                float _RESERVED_IDENTIFIER_FIXUP_1951 = (_RESERVED_IDENTIFIER_FIXUP_1932 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3107.y = _RESERVED_IDENTIFIER_FIXUP_1951;
                _RESERVED_IDENTIFIER_FIXUP_3107.x = (_RESERVED_IDENTIFIER_FIXUP_1946 * _RESERVED_IDENTIFIER_FIXUP_1951) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3847 = _RESERVED_IDENTIFIER_FIXUP_3107;
            }
            _RESERVED_IDENTIFIER_FIXUP_3846 = _RESERVED_IDENTIFIER_FIXUP_3847;
        }
        _RESERVED_IDENTIFIER_FIXUP_3845 = _RESERVED_IDENTIFIER_FIXUP_3846;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3384 = _RESERVED_IDENTIFIER_FIXUP_3845;
    _RESERVED_IDENTIFIER_FIXUP_3384.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1979 = _RESERVED_IDENTIFIER_FIXUP_1211.xyz * _RESERVED_IDENTIFIER_FIXUP_3384.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3386 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_3386.x = _RESERVED_IDENTIFIER_FIXUP_1979.x;
    _RESERVED_IDENTIFIER_FIXUP_3386.y = _RESERVED_IDENTIFIER_FIXUP_1979.y;
    _RESERVED_IDENTIFIER_FIXUP_3386.z = _RESERVED_IDENTIFIER_FIXUP_1979.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1990 = _RESERVED_IDENTIFIER_FIXUP_3386.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3843).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3392 = _RESERVED_IDENTIFIER_FIXUP_3386;
    _RESERVED_IDENTIFIER_FIXUP_3392.x = _RESERVED_IDENTIFIER_FIXUP_1990.x;
    _RESERVED_IDENTIFIER_FIXUP_3392.y = _RESERVED_IDENTIFIER_FIXUP_1990.y;
    _RESERVED_IDENTIFIER_FIXUP_3392.z = _RESERVED_IDENTIFIER_FIXUP_1990.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2001 = _RESERVED_IDENTIFIER_FIXUP_3392.xyz + _RESERVED_IDENTIFIER_FIXUP_3392.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3398 = _RESERVED_IDENTIFIER_FIXUP_3392;
    _RESERVED_IDENTIFIER_FIXUP_3398.x = _RESERVED_IDENTIFIER_FIXUP_2001.x;
    _RESERVED_IDENTIFIER_FIXUP_3398.y = _RESERVED_IDENTIFIER_FIXUP_2001.y;
    _RESERVED_IDENTIFIER_FIXUP_3398.z = _RESERVED_IDENTIFIER_FIXUP_2001.z;
    _RESERVED_IDENTIFIER_FIXUP_3384.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3384.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3384.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2026 = (_RESERVED_IDENTIFIER_FIXUP_3384.yzw * _RESERVED_IDENTIFIER_FIXUP_3384.xxx) + _RESERVED_IDENTIFIER_FIXUP_3398.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3410 = _RESERVED_IDENTIFIER_FIXUP_3398;
    _RESERVED_IDENTIFIER_FIXUP_3410.x = _RESERVED_IDENTIFIER_FIXUP_2026.x;
    _RESERVED_IDENTIFIER_FIXUP_3410.y = _RESERVED_IDENTIFIER_FIXUP_2026.y;
    _RESERVED_IDENTIFIER_FIXUP_3410.z = _RESERVED_IDENTIFIER_FIXUP_2026.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2039 = _RESERVED_IDENTIFIER_FIXUP_3410.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3416 = _RESERVED_IDENTIFIER_FIXUP_3410;
    _RESERVED_IDENTIFIER_FIXUP_3416.x = _RESERVED_IDENTIFIER_FIXUP_2039.x;
    _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2039.y;
    _RESERVED_IDENTIFIER_FIXUP_3416.z = _RESERVED_IDENTIFIER_FIXUP_2039.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2096 = OptTex0( texcoord0.xyz);
    vec2 param_50 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2100 = hdTex1(param_50);
    vec2 param_51 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2104 = hdTex2(param_51);
    float _RESERVED_IDENTIFIER_FIXUP_2108 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2104.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3430 = _RESERVED_IDENTIFIER_FIXUP_2104;
    _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_2108;
    _RESERVED_IDENTIFIER_FIXUP_3430.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2108;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2118 = _RESERVED_IDENTIFIER_FIXUP_2100 * _RESERVED_IDENTIFIER_FIXUP_3430.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2124 = (_RESERVED_IDENTIFIER_FIXUP_2096 * _RESERVED_IDENTIFIER_FIXUP_3430.yyyy) + _RESERVED_IDENTIFIER_FIXUP_2118;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3437 = _RESERVED_IDENTIFIER_FIXUP_2118;
    _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_1218;
    float _RESERVED_IDENTIFIER_FIXUP_2137 = clamp((_RESERVED_IDENTIFIER_FIXUP_1218 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_2137;
    float _RESERVED_IDENTIFIER_FIXUP_2143 = ((-_RESERVED_IDENTIFIER_FIXUP_2137) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_2143;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3854;
    if (_RESERVED_IDENTIFIER_FIXUP_2143 != (-_RESERVED_IDENTIFIER_FIXUP_2143))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2155 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3676;
        _RESERVED_IDENTIFIER_FIXUP_3676.x = _RESERVED_IDENTIFIER_FIXUP_2155.x;
        _RESERVED_IDENTIFIER_FIXUP_3676.y = _RESERVED_IDENTIFIER_FIXUP_2155.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2165 = _RESERVED_IDENTIFIER_FIXUP_3676.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3680;
        _RESERVED_IDENTIFIER_FIXUP_3680.x = _RESERVED_IDENTIFIER_FIXUP_2165.x;
        _RESERVED_IDENTIFIER_FIXUP_3680.y = _RESERVED_IDENTIFIER_FIXUP_2165.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2175 = _RESERVED_IDENTIFIER_FIXUP_3676.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3684;
        _RESERVED_IDENTIFIER_FIXUP_3684.x = _RESERVED_IDENTIFIER_FIXUP_2175.x;
        _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2175.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2185 = _RESERVED_IDENTIFIER_FIXUP_3676.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3688;
        _RESERVED_IDENTIFIER_FIXUP_3688.x = _RESERVED_IDENTIFIER_FIXUP_2185.x;
        _RESERVED_IDENTIFIER_FIXUP_3688.y = _RESERVED_IDENTIFIER_FIXUP_2185.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2195 = _RESERVED_IDENTIFIER_FIXUP_3676.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3692;
        _RESERVED_IDENTIFIER_FIXUP_3692.x = _RESERVED_IDENTIFIER_FIXUP_2195.x;
        _RESERVED_IDENTIFIER_FIXUP_3692.y = _RESERVED_IDENTIFIER_FIXUP_2195.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2205 = _RESERVED_IDENTIFIER_FIXUP_3676.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3696;
        _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2205.x;
        _RESERVED_IDENTIFIER_FIXUP_3696.y = _RESERVED_IDENTIFIER_FIXUP_2205.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2215 = _RESERVED_IDENTIFIER_FIXUP_3676.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3700;
        _RESERVED_IDENTIFIER_FIXUP_3700.x = _RESERVED_IDENTIFIER_FIXUP_2215.x;
        _RESERVED_IDENTIFIER_FIXUP_3700.y = _RESERVED_IDENTIFIER_FIXUP_2215.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2225 = _RESERVED_IDENTIFIER_FIXUP_3676.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3704;
        _RESERVED_IDENTIFIER_FIXUP_3704.x = _RESERVED_IDENTIFIER_FIXUP_2225.x;
        _RESERVED_IDENTIFIER_FIXUP_3704.y = _RESERVED_IDENTIFIER_FIXUP_2225.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2235 = _RESERVED_IDENTIFIER_FIXUP_3676.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3708;
        _RESERVED_IDENTIFIER_FIXUP_3708.x = _RESERVED_IDENTIFIER_FIXUP_2235.x;
        _RESERVED_IDENTIFIER_FIXUP_3708.y = _RESERVED_IDENTIFIER_FIXUP_2235.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2243 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2243.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2243.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2249 = hdLod5(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3680.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3684.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3688.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3692.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3692.xy;
        float param_55 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2289 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3696.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3700.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3704.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3708.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3708.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2329 = hdLod5(param_56, param_57);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3680.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2249.y = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3684.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2249.z = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3688.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2249.w = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3696.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2289.y = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3700.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2289.z = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3704.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2289.w = hdLod5(param_68, param_69).x;
        float _RESERVED_IDENTIFIER_FIXUP_2369 = _RESERVED_IDENTIFIER_FIXUP_2329.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3773 = _RESERVED_IDENTIFIER_FIXUP_2329;
        _RESERVED_IDENTIFIER_FIXUP_3773.x = _RESERVED_IDENTIFIER_FIXUP_2369;
        float _RESERVED_IDENTIFIER_FIXUP_2374 = float(_RESERVED_IDENTIFIER_FIXUP_2369 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3773.x = _RESERVED_IDENTIFIER_FIXUP_2374;
        float _RESERVED_IDENTIFIER_FIXUP_2377 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2249 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3773.y = _RESERVED_IDENTIFIER_FIXUP_2377;
        float _RESERVED_IDENTIFIER_FIXUP_2380 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2289 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3773.z = _RESERVED_IDENTIFIER_FIXUP_2380;
        float _RESERVED_IDENTIFIER_FIXUP_2386 = _RESERVED_IDENTIFIER_FIXUP_2377 + _RESERVED_IDENTIFIER_FIXUP_2380;
        _RESERVED_IDENTIFIER_FIXUP_3773.y = _RESERVED_IDENTIFIER_FIXUP_2386;
        float _RESERVED_IDENTIFIER_FIXUP_2392 = _RESERVED_IDENTIFIER_FIXUP_2374 + _RESERVED_IDENTIFIER_FIXUP_2386;
        _RESERVED_IDENTIFIER_FIXUP_3773.x = _RESERVED_IDENTIFIER_FIXUP_2392;
        _RESERVED_IDENTIFIER_FIXUP_3773.x = _RESERVED_IDENTIFIER_FIXUP_2392 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3854 = _RESERVED_IDENTIFIER_FIXUP_3773;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2405 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3437.y = _RESERVED_IDENTIFIER_FIXUP_2405;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3855;
        if (_RESERVED_IDENTIFIER_FIXUP_2405 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2414 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3610 = _RESERVED_IDENTIFIER_FIXUP_3437;
            _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2414.x;
            _RESERVED_IDENTIFIER_FIXUP_3610.z = _RESERVED_IDENTIFIER_FIXUP_2414.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2424 = _RESERVED_IDENTIFIER_FIXUP_3610.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3614;
            _RESERVED_IDENTIFIER_FIXUP_3614.x = _RESERVED_IDENTIFIER_FIXUP_2424.x;
            _RESERVED_IDENTIFIER_FIXUP_3614.y = _RESERVED_IDENTIFIER_FIXUP_2424.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2434 = _RESERVED_IDENTIFIER_FIXUP_3610.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3618;
            _RESERVED_IDENTIFIER_FIXUP_3618.x = _RESERVED_IDENTIFIER_FIXUP_2434.x;
            _RESERVED_IDENTIFIER_FIXUP_3618.y = _RESERVED_IDENTIFIER_FIXUP_2434.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2444 = _RESERVED_IDENTIFIER_FIXUP_3610.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3622;
            _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2444.x;
            _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2444.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2454 = _RESERVED_IDENTIFIER_FIXUP_3610.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3626;
            _RESERVED_IDENTIFIER_FIXUP_3626.x = _RESERVED_IDENTIFIER_FIXUP_2454.x;
            _RESERVED_IDENTIFIER_FIXUP_3626.y = _RESERVED_IDENTIFIER_FIXUP_2454.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2462 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2462.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2462.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2468 = hdLod6(param_70, param_71);
            _RESERVED_IDENTIFIER_FIXUP_3614.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3618.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3622.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3626.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3614.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2468.y = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3618.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2468.z = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3622.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2468.w = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3626.xy;
            float param_79 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2531 = hdLod6(param_78, param_79).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2531;
            float _RESERVED_IDENTIFIER_FIXUP_2536 = float(_RESERVED_IDENTIFIER_FIXUP_2531 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2536;
            float _RESERVED_IDENTIFIER_FIXUP_2539 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2468 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3610.z = _RESERVED_IDENTIFIER_FIXUP_2539;
            float _RESERVED_IDENTIFIER_FIXUP_2545 = _RESERVED_IDENTIFIER_FIXUP_2536 + _RESERVED_IDENTIFIER_FIXUP_2539;
            _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2545;
            _RESERVED_IDENTIFIER_FIXUP_3610.x = _RESERVED_IDENTIFIER_FIXUP_2545 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3855 = _RESERVED_IDENTIFIER_FIXUP_3610;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2558 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3454 = _RESERVED_IDENTIFIER_FIXUP_3437;
            _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_2558;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3856;
            if (_RESERVED_IDENTIFIER_FIXUP_2558 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2567 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3544 = _RESERVED_IDENTIFIER_FIXUP_3454;
                _RESERVED_IDENTIFIER_FIXUP_3544.y = _RESERVED_IDENTIFIER_FIXUP_2567.x;
                _RESERVED_IDENTIFIER_FIXUP_3544.z = _RESERVED_IDENTIFIER_FIXUP_2567.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2577 = _RESERVED_IDENTIFIER_FIXUP_3544.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3548;
                _RESERVED_IDENTIFIER_FIXUP_3548.x = _RESERVED_IDENTIFIER_FIXUP_2577.x;
                _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_2577.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2587 = _RESERVED_IDENTIFIER_FIXUP_3544.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3552;
                _RESERVED_IDENTIFIER_FIXUP_3552.x = _RESERVED_IDENTIFIER_FIXUP_2587.x;
                _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_2587.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2597 = _RESERVED_IDENTIFIER_FIXUP_3544.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3556;
                _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2597.x;
                _RESERVED_IDENTIFIER_FIXUP_3556.y = _RESERVED_IDENTIFIER_FIXUP_2597.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2607 = _RESERVED_IDENTIFIER_FIXUP_3544.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3560;
                _RESERVED_IDENTIFIER_FIXUP_3560.x = _RESERVED_IDENTIFIER_FIXUP_2607.x;
                _RESERVED_IDENTIFIER_FIXUP_3560.y = _RESERVED_IDENTIFIER_FIXUP_2607.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2615 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2615.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2615.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2621 = hdLod7(param_80, param_81);
                _RESERVED_IDENTIFIER_FIXUP_3548.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3552.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3556.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3560.w = 0.0;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3548.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2621.y = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3552.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2621.z = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3556.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2621.w = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3560.xy;
                float param_89 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2684 = hdLod7(param_88, param_89).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3544.y = _RESERVED_IDENTIFIER_FIXUP_2684;
                float _RESERVED_IDENTIFIER_FIXUP_2689 = float(_RESERVED_IDENTIFIER_FIXUP_2684 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3544.y = _RESERVED_IDENTIFIER_FIXUP_2689;
                float _RESERVED_IDENTIFIER_FIXUP_2692 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2621 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3544.z = _RESERVED_IDENTIFIER_FIXUP_2692;
                float _RESERVED_IDENTIFIER_FIXUP_2698 = _RESERVED_IDENTIFIER_FIXUP_2689 + _RESERVED_IDENTIFIER_FIXUP_2692;
                _RESERVED_IDENTIFIER_FIXUP_3544.y = _RESERVED_IDENTIFIER_FIXUP_2698;
                _RESERVED_IDENTIFIER_FIXUP_3544.x = _RESERVED_IDENTIFIER_FIXUP_2698 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3856 = _RESERVED_IDENTIFIER_FIXUP_3544;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3458 = _RESERVED_IDENTIFIER_FIXUP_3430;
                _RESERVED_IDENTIFIER_FIXUP_3458.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3458.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2714 = (_RESERVED_IDENTIFIER_FIXUP_3458.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3463;
                _RESERVED_IDENTIFIER_FIXUP_3463.x = _RESERVED_IDENTIFIER_FIXUP_2714.x;
                _RESERVED_IDENTIFIER_FIXUP_3463.y = _RESERVED_IDENTIFIER_FIXUP_2714.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2724 = _RESERVED_IDENTIFIER_FIXUP_3463.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3467;
                _RESERVED_IDENTIFIER_FIXUP_3467.x = _RESERVED_IDENTIFIER_FIXUP_2724.x;
                _RESERVED_IDENTIFIER_FIXUP_3467.y = _RESERVED_IDENTIFIER_FIXUP_2724.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2734 = _RESERVED_IDENTIFIER_FIXUP_3463.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3471;
                _RESERVED_IDENTIFIER_FIXUP_3471.x = _RESERVED_IDENTIFIER_FIXUP_2734.x;
                _RESERVED_IDENTIFIER_FIXUP_3471.y = _RESERVED_IDENTIFIER_FIXUP_2734.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2744 = _RESERVED_IDENTIFIER_FIXUP_3463.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3475;
                _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_2744.x;
                _RESERVED_IDENTIFIER_FIXUP_3475.y = _RESERVED_IDENTIFIER_FIXUP_2744.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2754 = _RESERVED_IDENTIFIER_FIXUP_3463.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3479;
                _RESERVED_IDENTIFIER_FIXUP_3479.x = _RESERVED_IDENTIFIER_FIXUP_2754.x;
                _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2754.y;
                _RESERVED_IDENTIFIER_FIXUP_3463.w = 0.0;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3463.xy;
                float param_91 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2768 = hdLod8(param_90, param_91);
                _RESERVED_IDENTIFIER_FIXUP_3467.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3471.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3475.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3479.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3467.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2768.y = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3471.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2768.z = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3475.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2768.w = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3479.xy;
                float param_99 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2831 = hdLod8(param_98, param_99).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3519 = _RESERVED_IDENTIFIER_FIXUP_3454;
                _RESERVED_IDENTIFIER_FIXUP_3519.y = _RESERVED_IDENTIFIER_FIXUP_2831;
                float _RESERVED_IDENTIFIER_FIXUP_2836 = float(_RESERVED_IDENTIFIER_FIXUP_2831 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3519.y = _RESERVED_IDENTIFIER_FIXUP_2836;
                float _RESERVED_IDENTIFIER_FIXUP_2839 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2768 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3519.z = _RESERVED_IDENTIFIER_FIXUP_2839;
                float _RESERVED_IDENTIFIER_FIXUP_2845 = _RESERVED_IDENTIFIER_FIXUP_2836 + _RESERVED_IDENTIFIER_FIXUP_2839;
                _RESERVED_IDENTIFIER_FIXUP_3519.y = _RESERVED_IDENTIFIER_FIXUP_2845;
                float _RESERVED_IDENTIFIER_FIXUP_2853 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3519.z = _RESERVED_IDENTIFIER_FIXUP_2853;
                float _RESERVED_IDENTIFIER_FIXUP_2859 = clamp((_RESERVED_IDENTIFIER_FIXUP_2853 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3519.z = _RESERVED_IDENTIFIER_FIXUP_2859;
                float _RESERVED_IDENTIFIER_FIXUP_2864 = (_RESERVED_IDENTIFIER_FIXUP_2845 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3519.y = _RESERVED_IDENTIFIER_FIXUP_2864;
                _RESERVED_IDENTIFIER_FIXUP_3519.x = (_RESERVED_IDENTIFIER_FIXUP_2859 * _RESERVED_IDENTIFIER_FIXUP_2864) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3856 = _RESERVED_IDENTIFIER_FIXUP_3519;
            }
            _RESERVED_IDENTIFIER_FIXUP_3855 = _RESERVED_IDENTIFIER_FIXUP_3856;
        }
        _RESERVED_IDENTIFIER_FIXUP_3854 = _RESERVED_IDENTIFIER_FIXUP_3855;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2879 = (_RESERVED_IDENTIFIER_FIXUP_3854.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3794 = _RESERVED_IDENTIFIER_FIXUP_3854;
    _RESERVED_IDENTIFIER_FIXUP_3794.y = _RESERVED_IDENTIFIER_FIXUP_2879;
    _RESERVED_IDENTIFIER_FIXUP_3794.y = _RESERVED_IDENTIFIER_FIXUP_2879;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2892 = _RESERVED_IDENTIFIER_FIXUP_2124.xyz * _RESERVED_IDENTIFIER_FIXUP_3794.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3800 = _RESERVED_IDENTIFIER_FIXUP_2124;
    _RESERVED_IDENTIFIER_FIXUP_3800.x = _RESERVED_IDENTIFIER_FIXUP_2892.x;
    _RESERVED_IDENTIFIER_FIXUP_3800.y = _RESERVED_IDENTIFIER_FIXUP_2892.y;
    _RESERVED_IDENTIFIER_FIXUP_3800.z = _RESERVED_IDENTIFIER_FIXUP_2892.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2903 = _RESERVED_IDENTIFIER_FIXUP_3800.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3806 = _RESERVED_IDENTIFIER_FIXUP_3800;
    _RESERVED_IDENTIFIER_FIXUP_3806.x = _RESERVED_IDENTIFIER_FIXUP_2903.x;
    _RESERVED_IDENTIFIER_FIXUP_3806.y = _RESERVED_IDENTIFIER_FIXUP_2903.y;
    _RESERVED_IDENTIFIER_FIXUP_3806.z = _RESERVED_IDENTIFIER_FIXUP_2903.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2914 = _RESERVED_IDENTIFIER_FIXUP_3806.xyz + _RESERVED_IDENTIFIER_FIXUP_3806.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3812 = _RESERVED_IDENTIFIER_FIXUP_3806;
    _RESERVED_IDENTIFIER_FIXUP_3812.x = _RESERVED_IDENTIFIER_FIXUP_2914.x;
    _RESERVED_IDENTIFIER_FIXUP_3812.y = _RESERVED_IDENTIFIER_FIXUP_2914.y;
    _RESERVED_IDENTIFIER_FIXUP_3812.z = _RESERVED_IDENTIFIER_FIXUP_2914.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2925 = _RESERVED_IDENTIFIER_FIXUP_3812.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3794.y = _RESERVED_IDENTIFIER_FIXUP_2925.x;
    _RESERVED_IDENTIFIER_FIXUP_3794.z = _RESERVED_IDENTIFIER_FIXUP_2925.y;
    _RESERVED_IDENTIFIER_FIXUP_3794.w = _RESERVED_IDENTIFIER_FIXUP_2925.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2939 = (_RESERVED_IDENTIFIER_FIXUP_3794.yzw * _RESERVED_IDENTIFIER_FIXUP_3794.xxx) + _RESERVED_IDENTIFIER_FIXUP_3812.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3824 = _RESERVED_IDENTIFIER_FIXUP_3812;
    _RESERVED_IDENTIFIER_FIXUP_3824.x = _RESERVED_IDENTIFIER_FIXUP_2939.x;
    _RESERVED_IDENTIFIER_FIXUP_3824.y = _RESERVED_IDENTIFIER_FIXUP_2939.y;
    _RESERVED_IDENTIFIER_FIXUP_3824.z = _RESERVED_IDENTIFIER_FIXUP_2939.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2952 = _RESERVED_IDENTIFIER_FIXUP_3824.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3830 = _RESERVED_IDENTIFIER_FIXUP_3824;
    _RESERVED_IDENTIFIER_FIXUP_3830.x = _RESERVED_IDENTIFIER_FIXUP_2952.x;
    _RESERVED_IDENTIFIER_FIXUP_3830.y = _RESERVED_IDENTIFIER_FIXUP_2952.y;
    _RESERVED_IDENTIFIER_FIXUP_3830.z = _RESERVED_IDENTIFIER_FIXUP_2952.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3830.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1040 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1049;
    if (_RESERVED_IDENTIFIER_FIXUP_1040)
    {
        _RESERVED_IDENTIFIER_FIXUP_1049 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1049 = _RESERVED_IDENTIFIER_FIXUP_1040;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1049)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1086 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3416.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1113 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3011;
    if (_RESERVED_IDENTIFIER_FIXUP_1086 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3011 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1086), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1113);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3011 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1113);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3011;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2879);
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
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 *= r2.xxxx;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB135 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB135.x;
        r1.y = hdB135.y;
        vec2 hdB156 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB156.x;
        r2.y = hdB156.y;
        vec2 hdB167 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB167.x;
        r3.y = hdB167.y;
        vec2 hdB178 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB178.x;
        r4.y = hdB178.y;
        vec2 hdB189 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB189.x;
        r5.y = hdB189.y;
        vec2 hdB200 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB200.x;
        r6.y = hdB200.y;
        vec2 hdB211 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB211.x;
        r7.y = hdB211.y;
        vec2 hdB222 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB222.x;
        r8.y = hdB222.y;
        vec4 hdB227 = r1;
        vec2 hdB233 = hdB227.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB233.x;
        r1.y = hdB233.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r9.xy;
        float param_3 = r9.w;
        r9 = hdLod5(param_2, param_3);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_8 = r4.xy;
        float param_9 = r4.w;
        r4 = hdLod5(param_8, param_9);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_10 = r5.xy;
        float param_11 = r5.w;
        r5 = hdLod5(param_10, param_11);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod5(param_12, param_13);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_14 = r7.xy;
        float param_15 = r7.w;
        r7 = hdLod5(param_14, param_15);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_16 = r8.xy;
        float param_17 = r8.w;
        r8 = hdLod5(param_16, param_17);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_18 = r1.xy;
        float param_19 = r1.w;
        r1 = hdLod5(param_18, param_19);
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
            vec2 hdB421 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB421.x;
            r1.z = hdB421.y;
            vec2 hdB431 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB431.x;
            r2.y = hdB431.y;
            vec2 hdB441 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB441.x;
            r3.y = hdB441.y;
            vec2 hdB451 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB451.x;
            r4.y = hdB451.y;
            vec2 hdB461 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB461.x;
            r5.y = hdB461.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = r6.xy;
            float param_21 = r6.w;
            r6 = hdLod6(param_20, param_21);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_22 = r2.xy;
            float param_23 = r2.w;
            r2 = hdLod6(param_22, param_23);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod6(param_24, param_25);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_26 = r4.xy;
            float param_27 = r4.w;
            r4 = hdLod6(param_26, param_27);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_28 = r5.xy;
            float param_29 = r5.w;
            r5 = hdLod6(param_28, param_29);
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
                vec2 hdB577 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB577.x;
                r1.z = hdB577.y;
                vec2 hdB587 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB587.x;
                r2.y = hdB587.y;
                vec2 hdB597 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB597.x;
                r3.y = hdB597.y;
                vec2 hdB607 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB607.x;
                r4.y = hdB607.y;
                vec2 hdB617 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB617.x;
                r5.y = hdB617.y;
                r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = r6.xy;
                float param_31 = r6.w;
                r6 = hdLod7(param_30, param_31);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_32 = r2.xy;
                float param_33 = r2.w;
                r2 = hdLod7(param_32, param_33);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_34 = r3.xy;
                float param_35 = r3.w;
                r3 = hdLod7(param_34, param_35);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_36 = r4.xy;
                float param_37 = r4.w;
                r4 = hdLod7(param_36, param_37);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_38 = r5.xy;
                float param_39 = r5.w;
                r5 = hdLod7(param_38, param_39);
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
                vec2 hdB725 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB725.x;
                r3.y = hdB725.y;
                vec2 hdB735 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB735.x;
                r4.y = hdB735.y;
                vec2 hdB745 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB745.x;
                r5.y = hdB745.y;
                vec2 hdB755 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB755.x;
                r6.y = hdB755.y;
                vec2 hdB765 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB765.x;
                r7.y = hdB765.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_40 = r3.xy;
                float param_41 = r3.w;
                r3 = hdLod8(param_40, param_41);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_42 = r4.xy;
                float param_43 = r4.w;
                r4 = hdLod8(param_42, param_43);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_44 = r5.xy;
                float param_45 = r5.w;
                r5 = hdLod8(param_44, param_45);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_46 = r6.xy;
                float param_47 = r6.w;
                r6 = hdLod8(param_46, param_47);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_48 = r7.xy;
                float param_49 = r7.w;
                r7 = hdLod8(param_48, param_49);
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
    vec4 hdB895 = r0;
    vec3 hdB899 = hdB895.xyz * r1.yyy;
    r0.x = hdB899.x;
    r0.y = hdB899.y;
    r0.z = hdB899.z;
    vec4 hdB906 = r0;
    vec3 hdB910 = hdB906.xyz * v0.xyz;
    r0.x = hdB910.x;
    r0.y = hdB910.y;
    r0.z = hdB910.z;
    vec4 hdB917 = r0;
    vec4 hdB919 = r0;
    vec3 hdB921 = hdB917.xyz + hdB919.xyz;
    r0.x = hdB921.x;
    r0.y = hdB921.y;
    r0.z = hdB921.z;
    vec3 hdB932 = r0.www * v1.xyz;
    r1.y = hdB932.x;
    r1.z = hdB932.y;
    r1.w = hdB932.z;
    vec4 hdB944 = r0;
    vec3 hdB946 = (r1.yzw * r1.xxx) + hdB944.xyz;
    r0.x = hdB946.x;
    r0.y = hdB946.y;
    r0.z = hdB946.z;
    vec4 hdB953 = r0;
    vec3 hdB960 = hdB953.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB960.x;
    r0.y = hdB960.y;
    r0.z = hdB960.z;
    vec3 hdB975 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB975.x;
    oC0.y = hdB975.y;
    oC0.z = hdB975.z;
    oC0.w = 1.0;
    bool hdB988 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB996;
    if (hdB988)
    {
        hdB996 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB996 = hdB988;
    }
    if (hdB996)
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
    bool _3302 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3312;
    if (_3302)
    {
        _3312 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3312 = _3302;
    }
    if (_3312)
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
        bool _3337 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3352;
        if (!_3337)
        {
            _3352 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3352 = _3337;
        }
        if (_3352)
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
