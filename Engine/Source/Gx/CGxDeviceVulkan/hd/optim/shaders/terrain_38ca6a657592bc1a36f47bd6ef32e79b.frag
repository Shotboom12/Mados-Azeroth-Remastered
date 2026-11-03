#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3809;
vec4 _RESERVED_IDENTIFIER_FIXUP_3810;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _58 = hdOverride >= 0;
    bool _78;
    if (_58)
    {
        _78 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _78 = _58;
    }
    vec4 _79;
    if (_78)
    {
        _79 = vec4(float(hdOverride));
    }
    else
    {
        _79 = value;
    }
    return _79;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _96 = hdOverride >= 0;
    bool _105;
    if (_96)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _105 = _96;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1169 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1173 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1177 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1173.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2984 = _RESERVED_IDENTIFIER_FIXUP_1173;
    _RESERVED_IDENTIFIER_FIXUP_2984.x = _RESERVED_IDENTIFIER_FIXUP_1177;
    _RESERVED_IDENTIFIER_FIXUP_2984.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1177;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1187 = _RESERVED_IDENTIFIER_FIXUP_1169 * _RESERVED_IDENTIFIER_FIXUP_2984.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_1194 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2991 = _RESERVED_IDENTIFIER_FIXUP_2984;
    _RESERVED_IDENTIFIER_FIXUP_2991.x = _RESERVED_IDENTIFIER_FIXUP_1194;
    float _RESERVED_IDENTIFIER_FIXUP_1200 = clamp((_RESERVED_IDENTIFIER_FIXUP_1194 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2991.x = _RESERVED_IDENTIFIER_FIXUP_1200;
    float _RESERVED_IDENTIFIER_FIXUP_1206 = ((-_RESERVED_IDENTIFIER_FIXUP_1200) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2991.x = _RESERVED_IDENTIFIER_FIXUP_1206;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3811;
    if (_RESERVED_IDENTIFIER_FIXUP_1206 != (-_RESERVED_IDENTIFIER_FIXUP_1206))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1218 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3230;
        _RESERVED_IDENTIFIER_FIXUP_3230.x = _RESERVED_IDENTIFIER_FIXUP_1218.x;
        _RESERVED_IDENTIFIER_FIXUP_3230.y = _RESERVED_IDENTIFIER_FIXUP_1218.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_3230.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3234;
        _RESERVED_IDENTIFIER_FIXUP_3234.x = _RESERVED_IDENTIFIER_FIXUP_1228.x;
        _RESERVED_IDENTIFIER_FIXUP_3234.y = _RESERVED_IDENTIFIER_FIXUP_1228.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_3230.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3238;
        _RESERVED_IDENTIFIER_FIXUP_3238.x = _RESERVED_IDENTIFIER_FIXUP_1238.x;
        _RESERVED_IDENTIFIER_FIXUP_3238.y = _RESERVED_IDENTIFIER_FIXUP_1238.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1248 = _RESERVED_IDENTIFIER_FIXUP_3230.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3242;
        _RESERVED_IDENTIFIER_FIXUP_3242.x = _RESERVED_IDENTIFIER_FIXUP_1248.x;
        _RESERVED_IDENTIFIER_FIXUP_3242.y = _RESERVED_IDENTIFIER_FIXUP_1248.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_3230.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3246;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1258.x;
        _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1258.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1268 = _RESERVED_IDENTIFIER_FIXUP_3230.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3250;
        _RESERVED_IDENTIFIER_FIXUP_3250.x = _RESERVED_IDENTIFIER_FIXUP_1268.x;
        _RESERVED_IDENTIFIER_FIXUP_3250.y = _RESERVED_IDENTIFIER_FIXUP_1268.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1278 = _RESERVED_IDENTIFIER_FIXUP_3230.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3254;
        _RESERVED_IDENTIFIER_FIXUP_3254.x = _RESERVED_IDENTIFIER_FIXUP_1278.x;
        _RESERVED_IDENTIFIER_FIXUP_3254.y = _RESERVED_IDENTIFIER_FIXUP_1278.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_3230.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3258;
        _RESERVED_IDENTIFIER_FIXUP_3258.x = _RESERVED_IDENTIFIER_FIXUP_1288.x;
        _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_1288.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1298 = _RESERVED_IDENTIFIER_FIXUP_3230.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3262;
        _RESERVED_IDENTIFIER_FIXUP_3262.x = _RESERVED_IDENTIFIER_FIXUP_1298.x;
        _RESERVED_IDENTIFIER_FIXUP_3262.y = _RESERVED_IDENTIFIER_FIXUP_1298.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1306 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1306.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1306.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_3234.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3238.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3242.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3246.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3246.xy;
        float param_5 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1352 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3250.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3254.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3258.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3262.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3262.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1392 = hdLod5(param_6, param_7);
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3234.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1312.y = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3238.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1312.z = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3242.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1312.w = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3250.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1352.y = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3254.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1352.z = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3258.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1352.w = hdLod5(param_18, param_19).x;
        float _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_1392.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3327 = _RESERVED_IDENTIFIER_FIXUP_1392;
        _RESERVED_IDENTIFIER_FIXUP_3327.x = _RESERVED_IDENTIFIER_FIXUP_1432;
        float _RESERVED_IDENTIFIER_FIXUP_1437 = float(_RESERVED_IDENTIFIER_FIXUP_1432 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3327.x = _RESERVED_IDENTIFIER_FIXUP_1437;
        float _RESERVED_IDENTIFIER_FIXUP_1440 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1312 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3327.y = _RESERVED_IDENTIFIER_FIXUP_1440;
        float _RESERVED_IDENTIFIER_FIXUP_1443 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1352 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3327.z = _RESERVED_IDENTIFIER_FIXUP_1443;
        float _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_1440 + _RESERVED_IDENTIFIER_FIXUP_1443;
        _RESERVED_IDENTIFIER_FIXUP_3327.y = _RESERVED_IDENTIFIER_FIXUP_1449;
        float _RESERVED_IDENTIFIER_FIXUP_1455 = _RESERVED_IDENTIFIER_FIXUP_1437 + _RESERVED_IDENTIFIER_FIXUP_1449;
        _RESERVED_IDENTIFIER_FIXUP_3327.x = _RESERVED_IDENTIFIER_FIXUP_1455;
        _RESERVED_IDENTIFIER_FIXUP_3327.x = _RESERVED_IDENTIFIER_FIXUP_1455 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3811 = _RESERVED_IDENTIFIER_FIXUP_3327;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1468 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2991.y = _RESERVED_IDENTIFIER_FIXUP_1468;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3812;
        if (_RESERVED_IDENTIFIER_FIXUP_1468 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1477 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3164 = _RESERVED_IDENTIFIER_FIXUP_2991;
            _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_1477.x;
            _RESERVED_IDENTIFIER_FIXUP_3164.z = _RESERVED_IDENTIFIER_FIXUP_1477.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1487 = _RESERVED_IDENTIFIER_FIXUP_3164.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3168;
            _RESERVED_IDENTIFIER_FIXUP_3168.x = _RESERVED_IDENTIFIER_FIXUP_1487.x;
            _RESERVED_IDENTIFIER_FIXUP_3168.y = _RESERVED_IDENTIFIER_FIXUP_1487.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_3164.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3172;
            _RESERVED_IDENTIFIER_FIXUP_3172.x = _RESERVED_IDENTIFIER_FIXUP_1497.x;
            _RESERVED_IDENTIFIER_FIXUP_3172.y = _RESERVED_IDENTIFIER_FIXUP_1497.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_3164.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3176;
            _RESERVED_IDENTIFIER_FIXUP_3176.x = _RESERVED_IDENTIFIER_FIXUP_1507.x;
            _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1507.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_3164.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3180;
            _RESERVED_IDENTIFIER_FIXUP_3180.x = _RESERVED_IDENTIFIER_FIXUP_1517.x;
            _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_1517.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1525 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1525.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1525.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1531 = hdLod6(param_20, param_21);
            _RESERVED_IDENTIFIER_FIXUP_3168.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3172.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3176.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3180.w = 0.0;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3168.xy;
            float param_23 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1531.y = hdLod6(param_22, param_23).x;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3172.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1531.z = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3176.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1531.w = hdLod6(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3180.xy;
            float param_29 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1594 = hdLod6(param_28, param_29).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_1594;
            float _RESERVED_IDENTIFIER_FIXUP_1599 = float(_RESERVED_IDENTIFIER_FIXUP_1594 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_1599;
            float _RESERVED_IDENTIFIER_FIXUP_1602 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1531 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3164.z = _RESERVED_IDENTIFIER_FIXUP_1602;
            float _RESERVED_IDENTIFIER_FIXUP_1608 = _RESERVED_IDENTIFIER_FIXUP_1599 + _RESERVED_IDENTIFIER_FIXUP_1602;
            _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_1608;
            _RESERVED_IDENTIFIER_FIXUP_3164.x = _RESERVED_IDENTIFIER_FIXUP_1608 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3812 = _RESERVED_IDENTIFIER_FIXUP_3164;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1621 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3008 = _RESERVED_IDENTIFIER_FIXUP_2991;
            _RESERVED_IDENTIFIER_FIXUP_3008.y = _RESERVED_IDENTIFIER_FIXUP_1621;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3813;
            if (_RESERVED_IDENTIFIER_FIXUP_1621 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1630 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3098 = _RESERVED_IDENTIFIER_FIXUP_3008;
                _RESERVED_IDENTIFIER_FIXUP_3098.y = _RESERVED_IDENTIFIER_FIXUP_1630.x;
                _RESERVED_IDENTIFIER_FIXUP_3098.z = _RESERVED_IDENTIFIER_FIXUP_1630.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1640 = _RESERVED_IDENTIFIER_FIXUP_3098.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3102;
                _RESERVED_IDENTIFIER_FIXUP_3102.x = _RESERVED_IDENTIFIER_FIXUP_1640.x;
                _RESERVED_IDENTIFIER_FIXUP_3102.y = _RESERVED_IDENTIFIER_FIXUP_1640.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1650 = _RESERVED_IDENTIFIER_FIXUP_3098.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3106;
                _RESERVED_IDENTIFIER_FIXUP_3106.x = _RESERVED_IDENTIFIER_FIXUP_1650.x;
                _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1650.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1660 = _RESERVED_IDENTIFIER_FIXUP_3098.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3110;
                _RESERVED_IDENTIFIER_FIXUP_3110.x = _RESERVED_IDENTIFIER_FIXUP_1660.x;
                _RESERVED_IDENTIFIER_FIXUP_3110.y = _RESERVED_IDENTIFIER_FIXUP_1660.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1670 = _RESERVED_IDENTIFIER_FIXUP_3098.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3114;
                _RESERVED_IDENTIFIER_FIXUP_3114.x = _RESERVED_IDENTIFIER_FIXUP_1670.x;
                _RESERVED_IDENTIFIER_FIXUP_3114.y = _RESERVED_IDENTIFIER_FIXUP_1670.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1678 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1678.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1678.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1684 = hdLod7(param_30, param_31);
                _RESERVED_IDENTIFIER_FIXUP_3102.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3106.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3110.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3114.w = 0.0;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3102.xy;
                float param_33 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1684.y = hdLod7(param_32, param_33).x;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3106.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1684.z = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3110.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1684.w = hdLod7(param_36, param_37).x;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3114.xy;
                float param_39 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1747 = hdLod7(param_38, param_39).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3098.y = _RESERVED_IDENTIFIER_FIXUP_1747;
                float _RESERVED_IDENTIFIER_FIXUP_1752 = float(_RESERVED_IDENTIFIER_FIXUP_1747 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3098.y = _RESERVED_IDENTIFIER_FIXUP_1752;
                float _RESERVED_IDENTIFIER_FIXUP_1755 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1684 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3098.z = _RESERVED_IDENTIFIER_FIXUP_1755;
                float _RESERVED_IDENTIFIER_FIXUP_1761 = _RESERVED_IDENTIFIER_FIXUP_1752 + _RESERVED_IDENTIFIER_FIXUP_1755;
                _RESERVED_IDENTIFIER_FIXUP_3098.y = _RESERVED_IDENTIFIER_FIXUP_1761;
                _RESERVED_IDENTIFIER_FIXUP_3098.x = _RESERVED_IDENTIFIER_FIXUP_1761 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3813 = _RESERVED_IDENTIFIER_FIXUP_3098;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3012 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_3012.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3012.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1777 = (_RESERVED_IDENTIFIER_FIXUP_3012.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3017;
                _RESERVED_IDENTIFIER_FIXUP_3017.x = _RESERVED_IDENTIFIER_FIXUP_1777.x;
                _RESERVED_IDENTIFIER_FIXUP_3017.y = _RESERVED_IDENTIFIER_FIXUP_1777.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1787 = _RESERVED_IDENTIFIER_FIXUP_3017.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3021;
                _RESERVED_IDENTIFIER_FIXUP_3021.x = _RESERVED_IDENTIFIER_FIXUP_1787.x;
                _RESERVED_IDENTIFIER_FIXUP_3021.y = _RESERVED_IDENTIFIER_FIXUP_1787.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_3017.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3025;
                _RESERVED_IDENTIFIER_FIXUP_3025.x = _RESERVED_IDENTIFIER_FIXUP_1797.x;
                _RESERVED_IDENTIFIER_FIXUP_3025.y = _RESERVED_IDENTIFIER_FIXUP_1797.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1807 = _RESERVED_IDENTIFIER_FIXUP_3017.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3029;
                _RESERVED_IDENTIFIER_FIXUP_3029.x = _RESERVED_IDENTIFIER_FIXUP_1807.x;
                _RESERVED_IDENTIFIER_FIXUP_3029.y = _RESERVED_IDENTIFIER_FIXUP_1807.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1817 = _RESERVED_IDENTIFIER_FIXUP_3017.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3033;
                _RESERVED_IDENTIFIER_FIXUP_3033.x = _RESERVED_IDENTIFIER_FIXUP_1817.x;
                _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1817.y;
                _RESERVED_IDENTIFIER_FIXUP_3017.w = 0.0;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3017.xy;
                float param_41 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1831 = hdLod8(param_40, param_41);
                _RESERVED_IDENTIFIER_FIXUP_3021.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3025.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3029.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3033.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3021.xy;
                float param_43 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1831.y = hdLod8(param_42, param_43).x;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3025.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1831.z = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3029.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1831.w = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3033.xy;
                float param_49 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1894 = hdLod8(param_48, param_49).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3073 = _RESERVED_IDENTIFIER_FIXUP_3008;
                _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1894;
                float _RESERVED_IDENTIFIER_FIXUP_1899 = float(_RESERVED_IDENTIFIER_FIXUP_1894 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1899;
                float _RESERVED_IDENTIFIER_FIXUP_1902 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1831 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3073.z = _RESERVED_IDENTIFIER_FIXUP_1902;
                float _RESERVED_IDENTIFIER_FIXUP_1908 = _RESERVED_IDENTIFIER_FIXUP_1899 + _RESERVED_IDENTIFIER_FIXUP_1902;
                _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1908;
                float _RESERVED_IDENTIFIER_FIXUP_1916 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3073.z = _RESERVED_IDENTIFIER_FIXUP_1916;
                float _RESERVED_IDENTIFIER_FIXUP_1922 = clamp((_RESERVED_IDENTIFIER_FIXUP_1916 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3073.z = _RESERVED_IDENTIFIER_FIXUP_1922;
                float _RESERVED_IDENTIFIER_FIXUP_1927 = (_RESERVED_IDENTIFIER_FIXUP_1908 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1927;
                _RESERVED_IDENTIFIER_FIXUP_3073.x = (_RESERVED_IDENTIFIER_FIXUP_1922 * _RESERVED_IDENTIFIER_FIXUP_1927) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3813 = _RESERVED_IDENTIFIER_FIXUP_3073;
            }
            _RESERVED_IDENTIFIER_FIXUP_3812 = _RESERVED_IDENTIFIER_FIXUP_3813;
        }
        _RESERVED_IDENTIFIER_FIXUP_3811 = _RESERVED_IDENTIFIER_FIXUP_3812;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3350 = _RESERVED_IDENTIFIER_FIXUP_3811;
    _RESERVED_IDENTIFIER_FIXUP_3350.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1955 = _RESERVED_IDENTIFIER_FIXUP_1187.xyz * _RESERVED_IDENTIFIER_FIXUP_3350.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3352 = _RESERVED_IDENTIFIER_FIXUP_1187;
    _RESERVED_IDENTIFIER_FIXUP_3352.x = _RESERVED_IDENTIFIER_FIXUP_1955.x;
    _RESERVED_IDENTIFIER_FIXUP_3352.y = _RESERVED_IDENTIFIER_FIXUP_1955.y;
    _RESERVED_IDENTIFIER_FIXUP_3352.z = _RESERVED_IDENTIFIER_FIXUP_1955.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1966 = _RESERVED_IDENTIFIER_FIXUP_3352.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3809).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_3352;
    _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_1966.x;
    _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_1966.y;
    _RESERVED_IDENTIFIER_FIXUP_3358.z = _RESERVED_IDENTIFIER_FIXUP_1966.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1977 = _RESERVED_IDENTIFIER_FIXUP_3358.xyz + _RESERVED_IDENTIFIER_FIXUP_3358.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3364 = _RESERVED_IDENTIFIER_FIXUP_3358;
    _RESERVED_IDENTIFIER_FIXUP_3364.x = _RESERVED_IDENTIFIER_FIXUP_1977.x;
    _RESERVED_IDENTIFIER_FIXUP_3364.y = _RESERVED_IDENTIFIER_FIXUP_1977.y;
    _RESERVED_IDENTIFIER_FIXUP_3364.z = _RESERVED_IDENTIFIER_FIXUP_1977.z;
    _RESERVED_IDENTIFIER_FIXUP_3350.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3350.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3350.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2002 = (_RESERVED_IDENTIFIER_FIXUP_3350.yzw * _RESERVED_IDENTIFIER_FIXUP_3350.xxx) + _RESERVED_IDENTIFIER_FIXUP_3364.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3376 = _RESERVED_IDENTIFIER_FIXUP_3364;
    _RESERVED_IDENTIFIER_FIXUP_3376.x = _RESERVED_IDENTIFIER_FIXUP_2002.x;
    _RESERVED_IDENTIFIER_FIXUP_3376.y = _RESERVED_IDENTIFIER_FIXUP_2002.y;
    _RESERVED_IDENTIFIER_FIXUP_3376.z = _RESERVED_IDENTIFIER_FIXUP_2002.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2015 = _RESERVED_IDENTIFIER_FIXUP_3376.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3382 = _RESERVED_IDENTIFIER_FIXUP_3376;
    _RESERVED_IDENTIFIER_FIXUP_3382.x = _RESERVED_IDENTIFIER_FIXUP_2015.x;
    _RESERVED_IDENTIFIER_FIXUP_3382.y = _RESERVED_IDENTIFIER_FIXUP_2015.y;
    _RESERVED_IDENTIFIER_FIXUP_3382.z = _RESERVED_IDENTIFIER_FIXUP_2015.z;
    vec2 param_50 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2072 = hdTex0(param_50);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2076 = hdTex1(param_51);
    float _RESERVED_IDENTIFIER_FIXUP_2080 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2076.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3396 = _RESERVED_IDENTIFIER_FIXUP_2076;
    _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_2080;
    _RESERVED_IDENTIFIER_FIXUP_3396.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2080;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2090 = _RESERVED_IDENTIFIER_FIXUP_2072 * _RESERVED_IDENTIFIER_FIXUP_3396.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3403 = _RESERVED_IDENTIFIER_FIXUP_3396;
    _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_1194;
    float _RESERVED_IDENTIFIER_FIXUP_2103 = clamp((_RESERVED_IDENTIFIER_FIXUP_1194 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_2103;
    float _RESERVED_IDENTIFIER_FIXUP_2109 = ((-_RESERVED_IDENTIFIER_FIXUP_2103) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_2109;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3820;
    if (_RESERVED_IDENTIFIER_FIXUP_2109 != (-_RESERVED_IDENTIFIER_FIXUP_2109))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2121 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3642;
        _RESERVED_IDENTIFIER_FIXUP_3642.x = _RESERVED_IDENTIFIER_FIXUP_2121.x;
        _RESERVED_IDENTIFIER_FIXUP_3642.y = _RESERVED_IDENTIFIER_FIXUP_2121.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2131 = _RESERVED_IDENTIFIER_FIXUP_3642.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3646;
        _RESERVED_IDENTIFIER_FIXUP_3646.x = _RESERVED_IDENTIFIER_FIXUP_2131.x;
        _RESERVED_IDENTIFIER_FIXUP_3646.y = _RESERVED_IDENTIFIER_FIXUP_2131.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2141 = _RESERVED_IDENTIFIER_FIXUP_3642.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3650;
        _RESERVED_IDENTIFIER_FIXUP_3650.x = _RESERVED_IDENTIFIER_FIXUP_2141.x;
        _RESERVED_IDENTIFIER_FIXUP_3650.y = _RESERVED_IDENTIFIER_FIXUP_2141.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2151 = _RESERVED_IDENTIFIER_FIXUP_3642.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3654;
        _RESERVED_IDENTIFIER_FIXUP_3654.x = _RESERVED_IDENTIFIER_FIXUP_2151.x;
        _RESERVED_IDENTIFIER_FIXUP_3654.y = _RESERVED_IDENTIFIER_FIXUP_2151.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2161 = _RESERVED_IDENTIFIER_FIXUP_3642.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3658;
        _RESERVED_IDENTIFIER_FIXUP_3658.x = _RESERVED_IDENTIFIER_FIXUP_2161.x;
        _RESERVED_IDENTIFIER_FIXUP_3658.y = _RESERVED_IDENTIFIER_FIXUP_2161.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2171 = _RESERVED_IDENTIFIER_FIXUP_3642.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3662;
        _RESERVED_IDENTIFIER_FIXUP_3662.x = _RESERVED_IDENTIFIER_FIXUP_2171.x;
        _RESERVED_IDENTIFIER_FIXUP_3662.y = _RESERVED_IDENTIFIER_FIXUP_2171.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2181 = _RESERVED_IDENTIFIER_FIXUP_3642.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3666;
        _RESERVED_IDENTIFIER_FIXUP_3666.x = _RESERVED_IDENTIFIER_FIXUP_2181.x;
        _RESERVED_IDENTIFIER_FIXUP_3666.y = _RESERVED_IDENTIFIER_FIXUP_2181.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2191 = _RESERVED_IDENTIFIER_FIXUP_3642.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3670;
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2191.x;
        _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_2191.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2201 = _RESERVED_IDENTIFIER_FIXUP_3642.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3674;
        _RESERVED_IDENTIFIER_FIXUP_3674.x = _RESERVED_IDENTIFIER_FIXUP_2201.x;
        _RESERVED_IDENTIFIER_FIXUP_3674.y = _RESERVED_IDENTIFIER_FIXUP_2201.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2209 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2209.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2209.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2215 = hdLod5(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3646.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3650.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3654.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3658.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3658.xy;
        float param_55 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2255 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3662.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3666.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3670.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3674.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3674.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2295 = hdLod5(param_56, param_57);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3646.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2215.y = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3650.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2215.z = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3654.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2215.w = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3662.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2255.y = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3666.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2255.z = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3670.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2255.w = hdLod5(param_68, param_69).x;
        float _RESERVED_IDENTIFIER_FIXUP_2335 = _RESERVED_IDENTIFIER_FIXUP_2295.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3739 = _RESERVED_IDENTIFIER_FIXUP_2295;
        _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_2335;
        float _RESERVED_IDENTIFIER_FIXUP_2340 = float(_RESERVED_IDENTIFIER_FIXUP_2335 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_2340;
        float _RESERVED_IDENTIFIER_FIXUP_2343 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2215 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2343;
        float _RESERVED_IDENTIFIER_FIXUP_2346 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2255 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3739.z = _RESERVED_IDENTIFIER_FIXUP_2346;
        float _RESERVED_IDENTIFIER_FIXUP_2352 = _RESERVED_IDENTIFIER_FIXUP_2343 + _RESERVED_IDENTIFIER_FIXUP_2346;
        _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2352;
        float _RESERVED_IDENTIFIER_FIXUP_2358 = _RESERVED_IDENTIFIER_FIXUP_2340 + _RESERVED_IDENTIFIER_FIXUP_2352;
        _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_2358;
        _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_2358 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3820 = _RESERVED_IDENTIFIER_FIXUP_3739;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2371 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3403.y = _RESERVED_IDENTIFIER_FIXUP_2371;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3821;
        if (_RESERVED_IDENTIFIER_FIXUP_2371 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2380 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3576 = _RESERVED_IDENTIFIER_FIXUP_3403;
            _RESERVED_IDENTIFIER_FIXUP_3576.y = _RESERVED_IDENTIFIER_FIXUP_2380.x;
            _RESERVED_IDENTIFIER_FIXUP_3576.z = _RESERVED_IDENTIFIER_FIXUP_2380.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2390 = _RESERVED_IDENTIFIER_FIXUP_3576.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3580;
            _RESERVED_IDENTIFIER_FIXUP_3580.x = _RESERVED_IDENTIFIER_FIXUP_2390.x;
            _RESERVED_IDENTIFIER_FIXUP_3580.y = _RESERVED_IDENTIFIER_FIXUP_2390.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2400 = _RESERVED_IDENTIFIER_FIXUP_3576.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3584;
            _RESERVED_IDENTIFIER_FIXUP_3584.x = _RESERVED_IDENTIFIER_FIXUP_2400.x;
            _RESERVED_IDENTIFIER_FIXUP_3584.y = _RESERVED_IDENTIFIER_FIXUP_2400.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2410 = _RESERVED_IDENTIFIER_FIXUP_3576.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3588;
            _RESERVED_IDENTIFIER_FIXUP_3588.x = _RESERVED_IDENTIFIER_FIXUP_2410.x;
            _RESERVED_IDENTIFIER_FIXUP_3588.y = _RESERVED_IDENTIFIER_FIXUP_2410.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2420 = _RESERVED_IDENTIFIER_FIXUP_3576.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3592;
            _RESERVED_IDENTIFIER_FIXUP_3592.x = _RESERVED_IDENTIFIER_FIXUP_2420.x;
            _RESERVED_IDENTIFIER_FIXUP_3592.y = _RESERVED_IDENTIFIER_FIXUP_2420.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2428 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2428.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2428.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2434 = hdLod6(param_70, param_71);
            _RESERVED_IDENTIFIER_FIXUP_3580.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3584.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3588.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3592.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3580.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2434.y = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3584.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2434.z = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3588.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2434.w = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3592.xy;
            float param_79 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2497 = hdLod6(param_78, param_79).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3576.y = _RESERVED_IDENTIFIER_FIXUP_2497;
            float _RESERVED_IDENTIFIER_FIXUP_2502 = float(_RESERVED_IDENTIFIER_FIXUP_2497 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3576.y = _RESERVED_IDENTIFIER_FIXUP_2502;
            float _RESERVED_IDENTIFIER_FIXUP_2505 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2434 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3576.z = _RESERVED_IDENTIFIER_FIXUP_2505;
            float _RESERVED_IDENTIFIER_FIXUP_2511 = _RESERVED_IDENTIFIER_FIXUP_2502 + _RESERVED_IDENTIFIER_FIXUP_2505;
            _RESERVED_IDENTIFIER_FIXUP_3576.y = _RESERVED_IDENTIFIER_FIXUP_2511;
            _RESERVED_IDENTIFIER_FIXUP_3576.x = _RESERVED_IDENTIFIER_FIXUP_2511 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3821 = _RESERVED_IDENTIFIER_FIXUP_3576;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2524 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3420 = _RESERVED_IDENTIFIER_FIXUP_3403;
            _RESERVED_IDENTIFIER_FIXUP_3420.y = _RESERVED_IDENTIFIER_FIXUP_2524;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3822;
            if (_RESERVED_IDENTIFIER_FIXUP_2524 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2533 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3510 = _RESERVED_IDENTIFIER_FIXUP_3420;
                _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_2533.x;
                _RESERVED_IDENTIFIER_FIXUP_3510.z = _RESERVED_IDENTIFIER_FIXUP_2533.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2543 = _RESERVED_IDENTIFIER_FIXUP_3510.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3514;
                _RESERVED_IDENTIFIER_FIXUP_3514.x = _RESERVED_IDENTIFIER_FIXUP_2543.x;
                _RESERVED_IDENTIFIER_FIXUP_3514.y = _RESERVED_IDENTIFIER_FIXUP_2543.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2553 = _RESERVED_IDENTIFIER_FIXUP_3510.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3518;
                _RESERVED_IDENTIFIER_FIXUP_3518.x = _RESERVED_IDENTIFIER_FIXUP_2553.x;
                _RESERVED_IDENTIFIER_FIXUP_3518.y = _RESERVED_IDENTIFIER_FIXUP_2553.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2563 = _RESERVED_IDENTIFIER_FIXUP_3510.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3522;
                _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2563.x;
                _RESERVED_IDENTIFIER_FIXUP_3522.y = _RESERVED_IDENTIFIER_FIXUP_2563.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2573 = _RESERVED_IDENTIFIER_FIXUP_3510.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3526;
                _RESERVED_IDENTIFIER_FIXUP_3526.x = _RESERVED_IDENTIFIER_FIXUP_2573.x;
                _RESERVED_IDENTIFIER_FIXUP_3526.y = _RESERVED_IDENTIFIER_FIXUP_2573.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2581 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2581.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2581.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2587 = hdLod7(param_80, param_81);
                _RESERVED_IDENTIFIER_FIXUP_3514.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3518.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3522.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3526.w = 0.0;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3514.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2587.y = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3518.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2587.z = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3522.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2587.w = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3526.xy;
                float param_89 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2650 = hdLod7(param_88, param_89).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_2650;
                float _RESERVED_IDENTIFIER_FIXUP_2655 = float(_RESERVED_IDENTIFIER_FIXUP_2650 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_2655;
                float _RESERVED_IDENTIFIER_FIXUP_2658 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2587 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3510.z = _RESERVED_IDENTIFIER_FIXUP_2658;
                float _RESERVED_IDENTIFIER_FIXUP_2664 = _RESERVED_IDENTIFIER_FIXUP_2655 + _RESERVED_IDENTIFIER_FIXUP_2658;
                _RESERVED_IDENTIFIER_FIXUP_3510.y = _RESERVED_IDENTIFIER_FIXUP_2664;
                _RESERVED_IDENTIFIER_FIXUP_3510.x = _RESERVED_IDENTIFIER_FIXUP_2664 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3822 = _RESERVED_IDENTIFIER_FIXUP_3510;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3424 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_3424.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3424.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2680 = (_RESERVED_IDENTIFIER_FIXUP_3424.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3429;
                _RESERVED_IDENTIFIER_FIXUP_3429.x = _RESERVED_IDENTIFIER_FIXUP_2680.x;
                _RESERVED_IDENTIFIER_FIXUP_3429.y = _RESERVED_IDENTIFIER_FIXUP_2680.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2690 = _RESERVED_IDENTIFIER_FIXUP_3429.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3433;
                _RESERVED_IDENTIFIER_FIXUP_3433.x = _RESERVED_IDENTIFIER_FIXUP_2690.x;
                _RESERVED_IDENTIFIER_FIXUP_3433.y = _RESERVED_IDENTIFIER_FIXUP_2690.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2700 = _RESERVED_IDENTIFIER_FIXUP_3429.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3437;
                _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_2700.x;
                _RESERVED_IDENTIFIER_FIXUP_3437.y = _RESERVED_IDENTIFIER_FIXUP_2700.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2710 = _RESERVED_IDENTIFIER_FIXUP_3429.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3441;
                _RESERVED_IDENTIFIER_FIXUP_3441.x = _RESERVED_IDENTIFIER_FIXUP_2710.x;
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_2710.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2720 = _RESERVED_IDENTIFIER_FIXUP_3429.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3445;
                _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_2720.x;
                _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2720.y;
                _RESERVED_IDENTIFIER_FIXUP_3429.w = 0.0;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3429.xy;
                float param_91 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2734 = hdLod8(param_90, param_91);
                _RESERVED_IDENTIFIER_FIXUP_3433.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3437.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3441.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3445.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3433.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2734.y = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3437.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2734.z = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3441.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2734.w = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3445.xy;
                float param_99 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2797 = hdLod8(param_98, param_99).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3485 = _RESERVED_IDENTIFIER_FIXUP_3420;
                _RESERVED_IDENTIFIER_FIXUP_3485.y = _RESERVED_IDENTIFIER_FIXUP_2797;
                float _RESERVED_IDENTIFIER_FIXUP_2802 = float(_RESERVED_IDENTIFIER_FIXUP_2797 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3485.y = _RESERVED_IDENTIFIER_FIXUP_2802;
                float _RESERVED_IDENTIFIER_FIXUP_2805 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2734 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3485.z = _RESERVED_IDENTIFIER_FIXUP_2805;
                float _RESERVED_IDENTIFIER_FIXUP_2811 = _RESERVED_IDENTIFIER_FIXUP_2802 + _RESERVED_IDENTIFIER_FIXUP_2805;
                _RESERVED_IDENTIFIER_FIXUP_3485.y = _RESERVED_IDENTIFIER_FIXUP_2811;
                float _RESERVED_IDENTIFIER_FIXUP_2819 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3485.z = _RESERVED_IDENTIFIER_FIXUP_2819;
                float _RESERVED_IDENTIFIER_FIXUP_2825 = clamp((_RESERVED_IDENTIFIER_FIXUP_2819 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3485.z = _RESERVED_IDENTIFIER_FIXUP_2825;
                float _RESERVED_IDENTIFIER_FIXUP_2830 = (_RESERVED_IDENTIFIER_FIXUP_2811 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3485.y = _RESERVED_IDENTIFIER_FIXUP_2830;
                _RESERVED_IDENTIFIER_FIXUP_3485.x = (_RESERVED_IDENTIFIER_FIXUP_2825 * _RESERVED_IDENTIFIER_FIXUP_2830) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3822 = _RESERVED_IDENTIFIER_FIXUP_3485;
            }
            _RESERVED_IDENTIFIER_FIXUP_3821 = _RESERVED_IDENTIFIER_FIXUP_3822;
        }
        _RESERVED_IDENTIFIER_FIXUP_3820 = _RESERVED_IDENTIFIER_FIXUP_3821;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2845 = (_RESERVED_IDENTIFIER_FIXUP_3820.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3760 = _RESERVED_IDENTIFIER_FIXUP_3820;
    _RESERVED_IDENTIFIER_FIXUP_3760.y = _RESERVED_IDENTIFIER_FIXUP_2845;
    _RESERVED_IDENTIFIER_FIXUP_3760.y = _RESERVED_IDENTIFIER_FIXUP_2845;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2858 = _RESERVED_IDENTIFIER_FIXUP_2090.xyz * _RESERVED_IDENTIFIER_FIXUP_3760.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3766 = _RESERVED_IDENTIFIER_FIXUP_2090;
    _RESERVED_IDENTIFIER_FIXUP_3766.x = _RESERVED_IDENTIFIER_FIXUP_2858.x;
    _RESERVED_IDENTIFIER_FIXUP_3766.y = _RESERVED_IDENTIFIER_FIXUP_2858.y;
    _RESERVED_IDENTIFIER_FIXUP_3766.z = _RESERVED_IDENTIFIER_FIXUP_2858.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2869 = _RESERVED_IDENTIFIER_FIXUP_3766.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3772 = _RESERVED_IDENTIFIER_FIXUP_3766;
    _RESERVED_IDENTIFIER_FIXUP_3772.x = _RESERVED_IDENTIFIER_FIXUP_2869.x;
    _RESERVED_IDENTIFIER_FIXUP_3772.y = _RESERVED_IDENTIFIER_FIXUP_2869.y;
    _RESERVED_IDENTIFIER_FIXUP_3772.z = _RESERVED_IDENTIFIER_FIXUP_2869.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2880 = _RESERVED_IDENTIFIER_FIXUP_3772.xyz + _RESERVED_IDENTIFIER_FIXUP_3772.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3778 = _RESERVED_IDENTIFIER_FIXUP_3772;
    _RESERVED_IDENTIFIER_FIXUP_3778.x = _RESERVED_IDENTIFIER_FIXUP_2880.x;
    _RESERVED_IDENTIFIER_FIXUP_3778.y = _RESERVED_IDENTIFIER_FIXUP_2880.y;
    _RESERVED_IDENTIFIER_FIXUP_3778.z = _RESERVED_IDENTIFIER_FIXUP_2880.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2891 = _RESERVED_IDENTIFIER_FIXUP_3778.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3760.y = _RESERVED_IDENTIFIER_FIXUP_2891.x;
    _RESERVED_IDENTIFIER_FIXUP_3760.z = _RESERVED_IDENTIFIER_FIXUP_2891.y;
    _RESERVED_IDENTIFIER_FIXUP_3760.w = _RESERVED_IDENTIFIER_FIXUP_2891.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2905 = (_RESERVED_IDENTIFIER_FIXUP_3760.yzw * _RESERVED_IDENTIFIER_FIXUP_3760.xxx) + _RESERVED_IDENTIFIER_FIXUP_3778.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3790 = _RESERVED_IDENTIFIER_FIXUP_3778;
    _RESERVED_IDENTIFIER_FIXUP_3790.x = _RESERVED_IDENTIFIER_FIXUP_2905.x;
    _RESERVED_IDENTIFIER_FIXUP_3790.y = _RESERVED_IDENTIFIER_FIXUP_2905.y;
    _RESERVED_IDENTIFIER_FIXUP_3790.z = _RESERVED_IDENTIFIER_FIXUP_2905.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2918 = _RESERVED_IDENTIFIER_FIXUP_3790.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3796 = _RESERVED_IDENTIFIER_FIXUP_3790;
    _RESERVED_IDENTIFIER_FIXUP_3796.x = _RESERVED_IDENTIFIER_FIXUP_2918.x;
    _RESERVED_IDENTIFIER_FIXUP_3796.y = _RESERVED_IDENTIFIER_FIXUP_2918.y;
    _RESERVED_IDENTIFIER_FIXUP_3796.z = _RESERVED_IDENTIFIER_FIXUP_2918.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3796.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1026 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1035;
    if (_RESERVED_IDENTIFIER_FIXUP_1026)
    {
        _RESERVED_IDENTIFIER_FIXUP_1035 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1035 = _RESERVED_IDENTIFIER_FIXUP_1026;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1035)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1072 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3382.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1099 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2977;
    if (_RESERVED_IDENTIFIER_FIXUP_1072 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2977 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1072), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1099);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2977 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1099);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2977;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2845);
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
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB121 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB121.x;
        r1.y = hdB121.y;
        vec2 hdB142 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB142.x;
        r2.y = hdB142.y;
        vec2 hdB153 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB153.x;
        r3.y = hdB153.y;
        vec2 hdB164 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB164.x;
        r4.y = hdB164.y;
        vec2 hdB175 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB175.x;
        r5.y = hdB175.y;
        vec2 hdB186 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB186.x;
        r6.y = hdB186.y;
        vec2 hdB197 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB197.x;
        r7.y = hdB197.y;
        vec2 hdB208 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB208.x;
        r8.y = hdB208.y;
        vec4 hdB213 = r1;
        vec2 hdB219 = hdB213.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB219.x;
        r1.y = hdB219.y;
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
            vec2 hdB407 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB407.x;
            r1.z = hdB407.y;
            vec2 hdB417 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB417.x;
            r2.y = hdB417.y;
            vec2 hdB427 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB427.x;
            r3.y = hdB427.y;
            vec2 hdB437 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB437.x;
            r4.y = hdB437.y;
            vec2 hdB447 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB447.x;
            r5.y = hdB447.y;
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
                vec2 hdB563 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB563.x;
                r1.z = hdB563.y;
                vec2 hdB573 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB573.x;
                r2.y = hdB573.y;
                vec2 hdB583 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB583.x;
                r3.y = hdB583.y;
                vec2 hdB593 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB593.x;
                r4.y = hdB593.y;
                vec2 hdB603 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB603.x;
                r5.y = hdB603.y;
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
                vec2 hdB711 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB711.x;
                r3.y = hdB711.y;
                vec2 hdB721 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB721.x;
                r4.y = hdB721.y;
                vec2 hdB731 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB731.x;
                r5.y = hdB731.y;
                vec2 hdB741 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB741.x;
                r6.y = hdB741.y;
                vec2 hdB751 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB751.x;
                r7.y = hdB751.y;
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
    vec4 hdB881 = r0;
    vec3 hdB885 = hdB881.xyz * r1.yyy;
    r0.x = hdB885.x;
    r0.y = hdB885.y;
    r0.z = hdB885.z;
    vec4 hdB892 = r0;
    vec3 hdB896 = hdB892.xyz * v0.xyz;
    r0.x = hdB896.x;
    r0.y = hdB896.y;
    r0.z = hdB896.z;
    vec4 hdB903 = r0;
    vec4 hdB905 = r0;
    vec3 hdB907 = hdB903.xyz + hdB905.xyz;
    r0.x = hdB907.x;
    r0.y = hdB907.y;
    r0.z = hdB907.z;
    vec3 hdB918 = r0.www * v1.xyz;
    r1.y = hdB918.x;
    r1.z = hdB918.y;
    r1.w = hdB918.z;
    vec4 hdB930 = r0;
    vec3 hdB932 = (r1.yzw * r1.xxx) + hdB930.xyz;
    r0.x = hdB932.x;
    r0.y = hdB932.y;
    r0.z = hdB932.z;
    vec4 hdB939 = r0;
    vec3 hdB946 = hdB939.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB946.x;
    r0.y = hdB946.y;
    r0.z = hdB946.z;
    vec3 hdB961 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB961.x;
    oC0.y = hdB961.y;
    oC0.z = hdB961.z;
    oC0.w = 1.0;
    bool hdB974 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB982;
    if (hdB974)
    {
        hdB982 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB982 = hdB974;
    }
    if (hdB982)
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
    bool _3261 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3271;
    if (_3261)
    {
        _3271 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 483u) != 0u;
    }
    else
    {
        _3271 = _3261;
    }
    if (_3271)
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
        bool _3296 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3311;
        if (!_3296)
        {
            _3311 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 483u) != 0u;
        }
        else
        {
            _3311 = _3296;
        }
        if (_3311)
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
