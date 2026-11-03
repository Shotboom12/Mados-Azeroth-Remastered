#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
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
float _RESERVED_IDENTIFIER_FIXUP_3343;
vec4 _RESERVED_IDENTIFIER_FIXUP_3344;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
    bool _55 = hdOverride >= 0;
    bool _75;
    if (_55)
    {
        _75 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _75 = _55;
    }
    vec4 _76;
    if (_75)
    {
        _76 = vec4(float(hdOverride));
    }
    else
    {
        _76 = value;
    }
    return _76;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _94 = hdOverride >= 0;
    bool _104;
    if (_94)
    {
        _104 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _104 = _94;
    }
    vec4 _105;
    if (_104)
    {
        _105 = vec4(float(hdOverride));
    }
    else
    {
        _105 = value;
    }
    return _105;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _123 = hdOverride >= 0;
    bool _133;
    if (_123)
    {
        _133 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _133 = _123;
    }
    vec4 _134;
    if (_133)
    {
        _134 = vec4(float(hdOverride));
    }
    else
    {
        _134 = value;
    }
    return _134;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _152 = hdOverride >= 0;
    bool _162;
    if (_152)
    {
        _162 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _162 = _152;
    }
    vec4 _163;
    if (_162)
    {
        _163 = vec4(float(hdOverride));
    }
    else
    {
        _163 = value;
    }
    return _163;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _181 = hdOverride >= 0;
    bool _191;
    if (_181)
    {
        _191 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _191 = _181;
    }
    vec4 _192;
    if (_191)
    {
        _192 = vec4(float(hdOverride));
    }
    else
    {
        _192 = value;
    }
    return _192;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1036 = hdTex0(param);
    float _RESERVED_IDENTIFIER_FIXUP_1043 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2618 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2618.x = _RESERVED_IDENTIFIER_FIXUP_1043;
    float _RESERVED_IDENTIFIER_FIXUP_1049 = clamp((_RESERVED_IDENTIFIER_FIXUP_1043 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2618.x = _RESERVED_IDENTIFIER_FIXUP_1049;
    float _RESERVED_IDENTIFIER_FIXUP_1055 = ((-_RESERVED_IDENTIFIER_FIXUP_1049) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2618.y = _RESERVED_IDENTIFIER_FIXUP_1055;
    bool _RESERVED_IDENTIFIER_FIXUP_1062 = _RESERVED_IDENTIFIER_FIXUP_1055 != (-_RESERVED_IDENTIFIER_FIXUP_1055);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3346;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3345;
    if (_RESERVED_IDENTIFIER_FIXUP_1062)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1067 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2630 = _RESERVED_IDENTIFIER_FIXUP_2618;
        _RESERVED_IDENTIFIER_FIXUP_2630.y = _RESERVED_IDENTIFIER_FIXUP_1067.x;
        _RESERVED_IDENTIFIER_FIXUP_2630.z = _RESERVED_IDENTIFIER_FIXUP_1067.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1077 = _RESERVED_IDENTIFIER_FIXUP_2630.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2634;
        _RESERVED_IDENTIFIER_FIXUP_2634.x = _RESERVED_IDENTIFIER_FIXUP_1077.x;
        _RESERVED_IDENTIFIER_FIXUP_2634.y = _RESERVED_IDENTIFIER_FIXUP_1077.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1087 = _RESERVED_IDENTIFIER_FIXUP_2630.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2638;
        _RESERVED_IDENTIFIER_FIXUP_2638.x = _RESERVED_IDENTIFIER_FIXUP_1087.x;
        _RESERVED_IDENTIFIER_FIXUP_2638.y = _RESERVED_IDENTIFIER_FIXUP_1087.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1097 = _RESERVED_IDENTIFIER_FIXUP_2630.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2642;
        _RESERVED_IDENTIFIER_FIXUP_2642.x = _RESERVED_IDENTIFIER_FIXUP_1097.x;
        _RESERVED_IDENTIFIER_FIXUP_2642.y = _RESERVED_IDENTIFIER_FIXUP_1097.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1107 = _RESERVED_IDENTIFIER_FIXUP_2630.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2646;
        _RESERVED_IDENTIFIER_FIXUP_2646.x = _RESERVED_IDENTIFIER_FIXUP_1107.x;
        _RESERVED_IDENTIFIER_FIXUP_2646.y = _RESERVED_IDENTIFIER_FIXUP_1107.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1115 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_1115.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_1115.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1121 = hdLod5(param_1, param_2);
        _RESERVED_IDENTIFIER_FIXUP_2634.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2638.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2642.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2646.w = 0.0;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_2634.xy;
        float param_4 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1121.y = hdLod5(param_3, param_4).x;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2638.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1121.z = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2642.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1121.w = hdLod5(param_7, param_8).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1121 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2646.xy;
        float param_10 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1184 = hdLod5(param_9, param_10).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2630.y = _RESERVED_IDENTIFIER_FIXUP_1184;
        float _RESERVED_IDENTIFIER_FIXUP_1189 = float(_RESERVED_IDENTIFIER_FIXUP_1184 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2630.y = _RESERVED_IDENTIFIER_FIXUP_1189;
        float _RESERVED_IDENTIFIER_FIXUP_1192 = dot(_RESERVED_IDENTIFIER_FIXUP_1178, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2630.z = _RESERVED_IDENTIFIER_FIXUP_1192;
        float _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_1189 + _RESERVED_IDENTIFIER_FIXUP_1192;
        _RESERVED_IDENTIFIER_FIXUP_2630.y = _RESERVED_IDENTIFIER_FIXUP_1198;
        float _RESERVED_IDENTIFIER_FIXUP_1203 = (_RESERVED_IDENTIFIER_FIXUP_1198 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2630.y = _RESERVED_IDENTIFIER_FIXUP_1203;
        _RESERVED_IDENTIFIER_FIXUP_2630.x = (_RESERVED_IDENTIFIER_FIXUP_1049 * _RESERVED_IDENTIFIER_FIXUP_1203) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3346 = _RESERVED_IDENTIFIER_FIXUP_1178;
        _RESERVED_IDENTIFIER_FIXUP_3345 = _RESERVED_IDENTIFIER_FIXUP_2630;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2628 = _RESERVED_IDENTIFIER_FIXUP_2618;
        _RESERVED_IDENTIFIER_FIXUP_2628.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3346 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_3345 = _RESERVED_IDENTIFIER_FIXUP_2628;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1221 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2702 = _RESERVED_IDENTIFIER_FIXUP_3345;
    _RESERVED_IDENTIFIER_FIXUP_2702.y = _RESERVED_IDENTIFIER_FIXUP_1221;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3349;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3347;
    if (_RESERVED_IDENTIFIER_FIXUP_1221 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1230 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2863 = _RESERVED_IDENTIFIER_FIXUP_2702;
        _RESERVED_IDENTIFIER_FIXUP_2863.y = _RESERVED_IDENTIFIER_FIXUP_1230.x;
        _RESERVED_IDENTIFIER_FIXUP_2863.z = _RESERVED_IDENTIFIER_FIXUP_1230.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1240 = _RESERVED_IDENTIFIER_FIXUP_2863.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2867;
        _RESERVED_IDENTIFIER_FIXUP_2867.x = _RESERVED_IDENTIFIER_FIXUP_1240.x;
        _RESERVED_IDENTIFIER_FIXUP_2867.y = _RESERVED_IDENTIFIER_FIXUP_1240.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1250 = _RESERVED_IDENTIFIER_FIXUP_2863.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2871;
        _RESERVED_IDENTIFIER_FIXUP_2871.x = _RESERVED_IDENTIFIER_FIXUP_1250.x;
        _RESERVED_IDENTIFIER_FIXUP_2871.y = _RESERVED_IDENTIFIER_FIXUP_1250.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1260 = _RESERVED_IDENTIFIER_FIXUP_2863.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2875;
        _RESERVED_IDENTIFIER_FIXUP_2875.x = _RESERVED_IDENTIFIER_FIXUP_1260.x;
        _RESERVED_IDENTIFIER_FIXUP_2875.y = _RESERVED_IDENTIFIER_FIXUP_1260.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1270 = _RESERVED_IDENTIFIER_FIXUP_2863.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2879;
        _RESERVED_IDENTIFIER_FIXUP_2879.x = _RESERVED_IDENTIFIER_FIXUP_1270.x;
        _RESERVED_IDENTIFIER_FIXUP_2879.y = _RESERVED_IDENTIFIER_FIXUP_1270.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1278 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1278.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1278.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1284 = hdLod6(param_11, param_12);
        _RESERVED_IDENTIFIER_FIXUP_2867.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2871.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2875.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2879.w = 0.0;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_2867.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1284.y = hdLod6(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_2871.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1284.z = hdLod6(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2875.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1284.w = hdLod6(param_17, param_18).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1341 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1284 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2879.xy;
        float param_20 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1347 = hdLod6(param_19, param_20).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2863.y = _RESERVED_IDENTIFIER_FIXUP_1347;
        float _RESERVED_IDENTIFIER_FIXUP_1352 = float(_RESERVED_IDENTIFIER_FIXUP_1347 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2863.y = _RESERVED_IDENTIFIER_FIXUP_1352;
        float _RESERVED_IDENTIFIER_FIXUP_1355 = dot(_RESERVED_IDENTIFIER_FIXUP_1341, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2863.z = _RESERVED_IDENTIFIER_FIXUP_1355;
        float _RESERVED_IDENTIFIER_FIXUP_1361 = _RESERVED_IDENTIFIER_FIXUP_1352 + _RESERVED_IDENTIFIER_FIXUP_1355;
        _RESERVED_IDENTIFIER_FIXUP_2863.y = _RESERVED_IDENTIFIER_FIXUP_1361;
        _RESERVED_IDENTIFIER_FIXUP_2863.y = _RESERVED_IDENTIFIER_FIXUP_1361 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3349 = _RESERVED_IDENTIFIER_FIXUP_1341;
        _RESERVED_IDENTIFIER_FIXUP_3347 = _RESERVED_IDENTIFIER_FIXUP_2863;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1374 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2707 = _RESERVED_IDENTIFIER_FIXUP_2702;
        _RESERVED_IDENTIFIER_FIXUP_2707.z = _RESERVED_IDENTIFIER_FIXUP_1374;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3350;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3348;
        if (_RESERVED_IDENTIFIER_FIXUP_1374 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1383 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2797 = _RESERVED_IDENTIFIER_FIXUP_2707;
            _RESERVED_IDENTIFIER_FIXUP_2797.z = _RESERVED_IDENTIFIER_FIXUP_1383.x;
            _RESERVED_IDENTIFIER_FIXUP_2797.w = _RESERVED_IDENTIFIER_FIXUP_1383.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1393 = _RESERVED_IDENTIFIER_FIXUP_2797.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2801;
            _RESERVED_IDENTIFIER_FIXUP_2801.x = _RESERVED_IDENTIFIER_FIXUP_1393.x;
            _RESERVED_IDENTIFIER_FIXUP_2801.y = _RESERVED_IDENTIFIER_FIXUP_1393.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1403 = _RESERVED_IDENTIFIER_FIXUP_2797.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2805;
            _RESERVED_IDENTIFIER_FIXUP_2805.x = _RESERVED_IDENTIFIER_FIXUP_1403.x;
            _RESERVED_IDENTIFIER_FIXUP_2805.y = _RESERVED_IDENTIFIER_FIXUP_1403.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_2797.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2809;
            _RESERVED_IDENTIFIER_FIXUP_2809.x = _RESERVED_IDENTIFIER_FIXUP_1413.x;
            _RESERVED_IDENTIFIER_FIXUP_2809.y = _RESERVED_IDENTIFIER_FIXUP_1413.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1423 = _RESERVED_IDENTIFIER_FIXUP_2797.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2813;
            _RESERVED_IDENTIFIER_FIXUP_2813.x = _RESERVED_IDENTIFIER_FIXUP_1423.x;
            _RESERVED_IDENTIFIER_FIXUP_2813.y = _RESERVED_IDENTIFIER_FIXUP_1423.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1431 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1431.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1431.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1437 = hdLod7(param_21, param_22);
            _RESERVED_IDENTIFIER_FIXUP_2801.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2805.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2809.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2813.w = 0.0;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_2801.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1437.y = hdLod7(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_2805.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1437.z = hdLod7(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2809.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1437.w = hdLod7(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1494 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1437 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2813.xy;
            float param_30 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1500 = hdLod7(param_29, param_30).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2797.z = _RESERVED_IDENTIFIER_FIXUP_1500;
            float _RESERVED_IDENTIFIER_FIXUP_1505 = float(_RESERVED_IDENTIFIER_FIXUP_1500 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2797.z = _RESERVED_IDENTIFIER_FIXUP_1505;
            float _RESERVED_IDENTIFIER_FIXUP_1508 = dot(_RESERVED_IDENTIFIER_FIXUP_1494, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2797.w = _RESERVED_IDENTIFIER_FIXUP_1508;
            float _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_1505 + _RESERVED_IDENTIFIER_FIXUP_1508;
            _RESERVED_IDENTIFIER_FIXUP_2797.z = _RESERVED_IDENTIFIER_FIXUP_1514;
            _RESERVED_IDENTIFIER_FIXUP_2797.y = _RESERVED_IDENTIFIER_FIXUP_1514 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3350 = _RESERVED_IDENTIFIER_FIXUP_1494;
            _RESERVED_IDENTIFIER_FIXUP_3348 = _RESERVED_IDENTIFIER_FIXUP_2797;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2711 = _RESERVED_IDENTIFIER_FIXUP_3346;
            _RESERVED_IDENTIFIER_FIXUP_2711.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2711.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1530 = (_RESERVED_IDENTIFIER_FIXUP_2711.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2716;
            _RESERVED_IDENTIFIER_FIXUP_2716.x = _RESERVED_IDENTIFIER_FIXUP_1530.x;
            _RESERVED_IDENTIFIER_FIXUP_2716.y = _RESERVED_IDENTIFIER_FIXUP_1530.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_2716.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2720;
            _RESERVED_IDENTIFIER_FIXUP_2720.x = _RESERVED_IDENTIFIER_FIXUP_1540.x;
            _RESERVED_IDENTIFIER_FIXUP_2720.y = _RESERVED_IDENTIFIER_FIXUP_1540.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1550 = _RESERVED_IDENTIFIER_FIXUP_2716.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2724;
            _RESERVED_IDENTIFIER_FIXUP_2724.x = _RESERVED_IDENTIFIER_FIXUP_1550.x;
            _RESERVED_IDENTIFIER_FIXUP_2724.y = _RESERVED_IDENTIFIER_FIXUP_1550.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_2716.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2728;
            _RESERVED_IDENTIFIER_FIXUP_2728.x = _RESERVED_IDENTIFIER_FIXUP_1560.x;
            _RESERVED_IDENTIFIER_FIXUP_2728.y = _RESERVED_IDENTIFIER_FIXUP_1560.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1570 = _RESERVED_IDENTIFIER_FIXUP_2716.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2732;
            _RESERVED_IDENTIFIER_FIXUP_2732.x = _RESERVED_IDENTIFIER_FIXUP_1570.x;
            _RESERVED_IDENTIFIER_FIXUP_2732.y = _RESERVED_IDENTIFIER_FIXUP_1570.y;
            _RESERVED_IDENTIFIER_FIXUP_2716.w = 0.0;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2716.xy;
            float param_32 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1584 = hdLod8(param_31, param_32);
            _RESERVED_IDENTIFIER_FIXUP_2720.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2724.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2728.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2732.w = 0.0;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2720.xy;
            float param_34 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1584.y = hdLod8(param_33, param_34).x;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_2724.xy;
            float param_36 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1584.z = hdLod8(param_35, param_36).x;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2728.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1584.w = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2732.xy;
            float param_40 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1647 = hdLod8(param_39, param_40).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2772 = _RESERVED_IDENTIFIER_FIXUP_2707;
            _RESERVED_IDENTIFIER_FIXUP_2772.z = _RESERVED_IDENTIFIER_FIXUP_1647;
            float _RESERVED_IDENTIFIER_FIXUP_1652 = float(_RESERVED_IDENTIFIER_FIXUP_1647 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2772.z = _RESERVED_IDENTIFIER_FIXUP_1652;
            float _RESERVED_IDENTIFIER_FIXUP_1655 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1584 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2772.w = _RESERVED_IDENTIFIER_FIXUP_1655;
            float _RESERVED_IDENTIFIER_FIXUP_1661 = _RESERVED_IDENTIFIER_FIXUP_1652 + _RESERVED_IDENTIFIER_FIXUP_1655;
            _RESERVED_IDENTIFIER_FIXUP_2772.z = _RESERVED_IDENTIFIER_FIXUP_1661;
            float _RESERVED_IDENTIFIER_FIXUP_1669 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2772.w = _RESERVED_IDENTIFIER_FIXUP_1669;
            float _RESERVED_IDENTIFIER_FIXUP_1675 = clamp((_RESERVED_IDENTIFIER_FIXUP_1669 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2772.w = _RESERVED_IDENTIFIER_FIXUP_1675;
            float _RESERVED_IDENTIFIER_FIXUP_1680 = (_RESERVED_IDENTIFIER_FIXUP_1661 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2772.z = _RESERVED_IDENTIFIER_FIXUP_1680;
            _RESERVED_IDENTIFIER_FIXUP_2772.y = (_RESERVED_IDENTIFIER_FIXUP_1675 * _RESERVED_IDENTIFIER_FIXUP_1680) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3350 = _RESERVED_IDENTIFIER_FIXUP_2711;
            _RESERVED_IDENTIFIER_FIXUP_3348 = _RESERVED_IDENTIFIER_FIXUP_2772;
        }
        _RESERVED_IDENTIFIER_FIXUP_3349 = _RESERVED_IDENTIFIER_FIXUP_3350;
        _RESERVED_IDENTIFIER_FIXUP_3347 = _RESERVED_IDENTIFIER_FIXUP_3348;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1695 = min(_RESERVED_IDENTIFIER_FIXUP_3347.y, _RESERVED_IDENTIFIER_FIXUP_3347.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2931 = _RESERVED_IDENTIFIER_FIXUP_3349;
    _RESERVED_IDENTIFIER_FIXUP_2931.x = _RESERVED_IDENTIFIER_FIXUP_1695;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2934 = _RESERVED_IDENTIFIER_FIXUP_3347;
    _RESERVED_IDENTIFIER_FIXUP_2934.x = (_RESERVED_IDENTIFIER_FIXUP_1695 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1706 = _RESERVED_IDENTIFIER_FIXUP_1036.xyz * _RESERVED_IDENTIFIER_FIXUP_2934.xxx;
    _RESERVED_IDENTIFIER_FIXUP_1036.x = _RESERVED_IDENTIFIER_FIXUP_1706.x;
    _RESERVED_IDENTIFIER_FIXUP_1036.y = _RESERVED_IDENTIFIER_FIXUP_1706.y;
    _RESERVED_IDENTIFIER_FIXUP_1036.z = _RESERVED_IDENTIFIER_FIXUP_1706.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1717 = _RESERVED_IDENTIFIER_FIXUP_1036.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3343).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2942 = _RESERVED_IDENTIFIER_FIXUP_1036;
    _RESERVED_IDENTIFIER_FIXUP_2942.x = _RESERVED_IDENTIFIER_FIXUP_1717.x;
    _RESERVED_IDENTIFIER_FIXUP_2942.y = _RESERVED_IDENTIFIER_FIXUP_1717.y;
    _RESERVED_IDENTIFIER_FIXUP_2942.z = _RESERVED_IDENTIFIER_FIXUP_1717.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1728 = _RESERVED_IDENTIFIER_FIXUP_2942.xyz + _RESERVED_IDENTIFIER_FIXUP_2942.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2948 = _RESERVED_IDENTIFIER_FIXUP_2942;
    _RESERVED_IDENTIFIER_FIXUP_2948.x = _RESERVED_IDENTIFIER_FIXUP_1728.x;
    _RESERVED_IDENTIFIER_FIXUP_2948.y = _RESERVED_IDENTIFIER_FIXUP_1728.y;
    _RESERVED_IDENTIFIER_FIXUP_2948.z = _RESERVED_IDENTIFIER_FIXUP_1728.z;
    _RESERVED_IDENTIFIER_FIXUP_2934.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2934.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2934.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1753 = (_RESERVED_IDENTIFIER_FIXUP_2934.xyz * _RESERVED_IDENTIFIER_FIXUP_2931.xxx) + _RESERVED_IDENTIFIER_FIXUP_2948.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2960 = _RESERVED_IDENTIFIER_FIXUP_2948;
    _RESERVED_IDENTIFIER_FIXUP_2960.x = _RESERVED_IDENTIFIER_FIXUP_1753.x;
    _RESERVED_IDENTIFIER_FIXUP_2960.y = _RESERVED_IDENTIFIER_FIXUP_1753.y;
    _RESERVED_IDENTIFIER_FIXUP_2960.z = _RESERVED_IDENTIFIER_FIXUP_1753.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1766 = _RESERVED_IDENTIFIER_FIXUP_2960.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2966 = _RESERVED_IDENTIFIER_FIXUP_2960;
    _RESERVED_IDENTIFIER_FIXUP_2966.x = _RESERVED_IDENTIFIER_FIXUP_1766.x;
    _RESERVED_IDENTIFIER_FIXUP_2966.y = _RESERVED_IDENTIFIER_FIXUP_1766.y;
    _RESERVED_IDENTIFIER_FIXUP_2966.z = _RESERVED_IDENTIFIER_FIXUP_1766.z;
    vec2 param_41 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1819 = hdTex0(param_41);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3358;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3357;
    if (_RESERVED_IDENTIFIER_FIXUP_1062)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1850 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2994 = _RESERVED_IDENTIFIER_FIXUP_2618;
        _RESERVED_IDENTIFIER_FIXUP_2994.y = _RESERVED_IDENTIFIER_FIXUP_1850.x;
        _RESERVED_IDENTIFIER_FIXUP_2994.z = _RESERVED_IDENTIFIER_FIXUP_1850.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1860 = _RESERVED_IDENTIFIER_FIXUP_2994.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2998;
        _RESERVED_IDENTIFIER_FIXUP_2998.x = _RESERVED_IDENTIFIER_FIXUP_1860.x;
        _RESERVED_IDENTIFIER_FIXUP_2998.y = _RESERVED_IDENTIFIER_FIXUP_1860.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1870 = _RESERVED_IDENTIFIER_FIXUP_2994.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3002;
        _RESERVED_IDENTIFIER_FIXUP_3002.x = _RESERVED_IDENTIFIER_FIXUP_1870.x;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1870.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1880 = _RESERVED_IDENTIFIER_FIXUP_2994.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3006;
        _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1880.x;
        _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1880.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1890 = _RESERVED_IDENTIFIER_FIXUP_2994.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3010;
        _RESERVED_IDENTIFIER_FIXUP_3010.x = _RESERVED_IDENTIFIER_FIXUP_1890.x;
        _RESERVED_IDENTIFIER_FIXUP_3010.y = _RESERVED_IDENTIFIER_FIXUP_1890.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1898 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_1898.xy;
        float param_43 = _RESERVED_IDENTIFIER_FIXUP_1898.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1904 = hdLod5(param_42, param_43);
        _RESERVED_IDENTIFIER_FIXUP_2998.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3002.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3006.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3010.w = 0.0;
        vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_2998.xy;
        float param_45 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1904.y = hdLod5(param_44, param_45).x;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3002.xy;
        float param_47 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1904.z = hdLod5(param_46, param_47).x;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3006.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1904.w = hdLod5(param_48, param_49).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1961 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1904 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3010.xy;
        float param_51 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1967 = hdLod5(param_50, param_51).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2994.y = _RESERVED_IDENTIFIER_FIXUP_1967;
        float _RESERVED_IDENTIFIER_FIXUP_1972 = float(_RESERVED_IDENTIFIER_FIXUP_1967 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2994.y = _RESERVED_IDENTIFIER_FIXUP_1972;
        float _RESERVED_IDENTIFIER_FIXUP_1975 = dot(_RESERVED_IDENTIFIER_FIXUP_1961, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2994.z = _RESERVED_IDENTIFIER_FIXUP_1975;
        float _RESERVED_IDENTIFIER_FIXUP_1981 = _RESERVED_IDENTIFIER_FIXUP_1972 + _RESERVED_IDENTIFIER_FIXUP_1975;
        _RESERVED_IDENTIFIER_FIXUP_2994.y = _RESERVED_IDENTIFIER_FIXUP_1981;
        float _RESERVED_IDENTIFIER_FIXUP_1986 = (_RESERVED_IDENTIFIER_FIXUP_1981 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2994.y = _RESERVED_IDENTIFIER_FIXUP_1986;
        _RESERVED_IDENTIFIER_FIXUP_2994.x = (_RESERVED_IDENTIFIER_FIXUP_1049 * _RESERVED_IDENTIFIER_FIXUP_1986) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_1961;
        _RESERVED_IDENTIFIER_FIXUP_3357 = _RESERVED_IDENTIFIER_FIXUP_2994;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2992 = _RESERVED_IDENTIFIER_FIXUP_2618;
        _RESERVED_IDENTIFIER_FIXUP_2992.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3358 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_3357 = _RESERVED_IDENTIFIER_FIXUP_2992;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3066 = _RESERVED_IDENTIFIER_FIXUP_3357;
    _RESERVED_IDENTIFIER_FIXUP_3066.y = _RESERVED_IDENTIFIER_FIXUP_1221;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3361;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3359;
    if (_RESERVED_IDENTIFIER_FIXUP_1221 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2013 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3227 = _RESERVED_IDENTIFIER_FIXUP_3066;
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2013.x;
        _RESERVED_IDENTIFIER_FIXUP_3227.z = _RESERVED_IDENTIFIER_FIXUP_2013.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2023 = _RESERVED_IDENTIFIER_FIXUP_3227.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3231;
        _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_2023.x;
        _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_2023.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2033 = _RESERVED_IDENTIFIER_FIXUP_3227.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3235;
        _RESERVED_IDENTIFIER_FIXUP_3235.x = _RESERVED_IDENTIFIER_FIXUP_2033.x;
        _RESERVED_IDENTIFIER_FIXUP_3235.y = _RESERVED_IDENTIFIER_FIXUP_2033.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2043 = _RESERVED_IDENTIFIER_FIXUP_3227.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3239;
        _RESERVED_IDENTIFIER_FIXUP_3239.x = _RESERVED_IDENTIFIER_FIXUP_2043.x;
        _RESERVED_IDENTIFIER_FIXUP_3239.y = _RESERVED_IDENTIFIER_FIXUP_2043.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2053 = _RESERVED_IDENTIFIER_FIXUP_3227.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3243;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_2053.x;
        _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_2053.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2061 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2061.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2061.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2067 = hdLod6(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3231.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3235.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3239.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3243.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3231.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2067.y = hdLod6(param_54, param_55).x;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3235.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2067.z = hdLod6(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3239.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2067.w = hdLod6(param_58, param_59).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2124 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2067 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3243.xy;
        float param_61 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2130 = hdLod6(param_60, param_61).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2130;
        float _RESERVED_IDENTIFIER_FIXUP_2135 = float(_RESERVED_IDENTIFIER_FIXUP_2130 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2135;
        float _RESERVED_IDENTIFIER_FIXUP_2138 = dot(_RESERVED_IDENTIFIER_FIXUP_2124, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3227.z = _RESERVED_IDENTIFIER_FIXUP_2138;
        float _RESERVED_IDENTIFIER_FIXUP_2144 = _RESERVED_IDENTIFIER_FIXUP_2135 + _RESERVED_IDENTIFIER_FIXUP_2138;
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2144;
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_2144 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3361 = _RESERVED_IDENTIFIER_FIXUP_2124;
        _RESERVED_IDENTIFIER_FIXUP_3359 = _RESERVED_IDENTIFIER_FIXUP_3227;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2157 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3071 = _RESERVED_IDENTIFIER_FIXUP_3066;
        _RESERVED_IDENTIFIER_FIXUP_3071.z = _RESERVED_IDENTIFIER_FIXUP_2157;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3362;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3360;
        if (_RESERVED_IDENTIFIER_FIXUP_2157 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2166 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3161 = _RESERVED_IDENTIFIER_FIXUP_3071;
            _RESERVED_IDENTIFIER_FIXUP_3161.z = _RESERVED_IDENTIFIER_FIXUP_2166.x;
            _RESERVED_IDENTIFIER_FIXUP_3161.w = _RESERVED_IDENTIFIER_FIXUP_2166.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2176 = _RESERVED_IDENTIFIER_FIXUP_3161.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3165;
            _RESERVED_IDENTIFIER_FIXUP_3165.x = _RESERVED_IDENTIFIER_FIXUP_2176.x;
            _RESERVED_IDENTIFIER_FIXUP_3165.y = _RESERVED_IDENTIFIER_FIXUP_2176.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2186 = _RESERVED_IDENTIFIER_FIXUP_3161.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3169;
            _RESERVED_IDENTIFIER_FIXUP_3169.x = _RESERVED_IDENTIFIER_FIXUP_2186.x;
            _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_2186.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2196 = _RESERVED_IDENTIFIER_FIXUP_3161.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3173;
            _RESERVED_IDENTIFIER_FIXUP_3173.x = _RESERVED_IDENTIFIER_FIXUP_2196.x;
            _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_2196.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2206 = _RESERVED_IDENTIFIER_FIXUP_3161.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3177;
            _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_2206.x;
            _RESERVED_IDENTIFIER_FIXUP_3177.y = _RESERVED_IDENTIFIER_FIXUP_2206.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2214 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_2214.xy;
            float param_63 = _RESERVED_IDENTIFIER_FIXUP_2214.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2220 = hdLod7(param_62, param_63);
            _RESERVED_IDENTIFIER_FIXUP_3165.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3169.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3173.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3177.w = 0.0;
            vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3165.xy;
            float param_65 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2220.y = hdLod7(param_64, param_65).x;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3169.xy;
            float param_67 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2220.z = hdLod7(param_66, param_67).x;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3173.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2220.w = hdLod7(param_68, param_69).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2277 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2220 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3177.xy;
            float param_71 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2283 = hdLod7(param_70, param_71).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3161.z = _RESERVED_IDENTIFIER_FIXUP_2283;
            float _RESERVED_IDENTIFIER_FIXUP_2288 = float(_RESERVED_IDENTIFIER_FIXUP_2283 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3161.z = _RESERVED_IDENTIFIER_FIXUP_2288;
            float _RESERVED_IDENTIFIER_FIXUP_2291 = dot(_RESERVED_IDENTIFIER_FIXUP_2277, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3161.w = _RESERVED_IDENTIFIER_FIXUP_2291;
            float _RESERVED_IDENTIFIER_FIXUP_2297 = _RESERVED_IDENTIFIER_FIXUP_2288 + _RESERVED_IDENTIFIER_FIXUP_2291;
            _RESERVED_IDENTIFIER_FIXUP_3161.z = _RESERVED_IDENTIFIER_FIXUP_2297;
            _RESERVED_IDENTIFIER_FIXUP_3161.y = _RESERVED_IDENTIFIER_FIXUP_2297 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3362 = _RESERVED_IDENTIFIER_FIXUP_2277;
            _RESERVED_IDENTIFIER_FIXUP_3360 = _RESERVED_IDENTIFIER_FIXUP_3161;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3075 = _RESERVED_IDENTIFIER_FIXUP_3358;
            _RESERVED_IDENTIFIER_FIXUP_3075.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3075.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2313 = (_RESERVED_IDENTIFIER_FIXUP_3075.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3080;
            _RESERVED_IDENTIFIER_FIXUP_3080.x = _RESERVED_IDENTIFIER_FIXUP_2313.x;
            _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_2313.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2323 = _RESERVED_IDENTIFIER_FIXUP_3080.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3084;
            _RESERVED_IDENTIFIER_FIXUP_3084.x = _RESERVED_IDENTIFIER_FIXUP_2323.x;
            _RESERVED_IDENTIFIER_FIXUP_3084.y = _RESERVED_IDENTIFIER_FIXUP_2323.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2333 = _RESERVED_IDENTIFIER_FIXUP_3080.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3088;
            _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_2333.x;
            _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_2333.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2343 = _RESERVED_IDENTIFIER_FIXUP_3080.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3092;
            _RESERVED_IDENTIFIER_FIXUP_3092.x = _RESERVED_IDENTIFIER_FIXUP_2343.x;
            _RESERVED_IDENTIFIER_FIXUP_3092.y = _RESERVED_IDENTIFIER_FIXUP_2343.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2353 = _RESERVED_IDENTIFIER_FIXUP_3080.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3096;
            _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_2353.x;
            _RESERVED_IDENTIFIER_FIXUP_3096.y = _RESERVED_IDENTIFIER_FIXUP_2353.y;
            _RESERVED_IDENTIFIER_FIXUP_3080.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3080.xy;
            float param_73 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2367 = hdLod8(param_72, param_73);
            _RESERVED_IDENTIFIER_FIXUP_3084.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3088.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3092.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3096.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3084.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2367.y = hdLod8(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3088.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2367.z = hdLod8(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3092.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2367.w = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3096.xy;
            float param_81 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2430 = hdLod8(param_80, param_81).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3136 = _RESERVED_IDENTIFIER_FIXUP_3071;
            _RESERVED_IDENTIFIER_FIXUP_3136.z = _RESERVED_IDENTIFIER_FIXUP_2430;
            float _RESERVED_IDENTIFIER_FIXUP_2435 = float(_RESERVED_IDENTIFIER_FIXUP_2430 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3136.z = _RESERVED_IDENTIFIER_FIXUP_2435;
            float _RESERVED_IDENTIFIER_FIXUP_2438 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2367 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3136.w = _RESERVED_IDENTIFIER_FIXUP_2438;
            float _RESERVED_IDENTIFIER_FIXUP_2444 = _RESERVED_IDENTIFIER_FIXUP_2435 + _RESERVED_IDENTIFIER_FIXUP_2438;
            _RESERVED_IDENTIFIER_FIXUP_3136.z = _RESERVED_IDENTIFIER_FIXUP_2444;
            float _RESERVED_IDENTIFIER_FIXUP_2452 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3136.w = _RESERVED_IDENTIFIER_FIXUP_2452;
            float _RESERVED_IDENTIFIER_FIXUP_2458 = clamp((_RESERVED_IDENTIFIER_FIXUP_2452 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3136.w = _RESERVED_IDENTIFIER_FIXUP_2458;
            float _RESERVED_IDENTIFIER_FIXUP_2463 = (_RESERVED_IDENTIFIER_FIXUP_2444 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3136.z = _RESERVED_IDENTIFIER_FIXUP_2463;
            _RESERVED_IDENTIFIER_FIXUP_3136.y = (_RESERVED_IDENTIFIER_FIXUP_2458 * _RESERVED_IDENTIFIER_FIXUP_2463) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3362 = _RESERVED_IDENTIFIER_FIXUP_3075;
            _RESERVED_IDENTIFIER_FIXUP_3360 = _RESERVED_IDENTIFIER_FIXUP_3136;
        }
        _RESERVED_IDENTIFIER_FIXUP_3361 = _RESERVED_IDENTIFIER_FIXUP_3362;
        _RESERVED_IDENTIFIER_FIXUP_3359 = _RESERVED_IDENTIFIER_FIXUP_3360;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2478 = min(_RESERVED_IDENTIFIER_FIXUP_3359.y, _RESERVED_IDENTIFIER_FIXUP_3359.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3295 = _RESERVED_IDENTIFIER_FIXUP_3361;
    _RESERVED_IDENTIFIER_FIXUP_3295.x = _RESERVED_IDENTIFIER_FIXUP_2478;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3298 = _RESERVED_IDENTIFIER_FIXUP_3359;
    _RESERVED_IDENTIFIER_FIXUP_3298.x = (_RESERVED_IDENTIFIER_FIXUP_2478 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2489 = _RESERVED_IDENTIFIER_FIXUP_1819.xyz * _RESERVED_IDENTIFIER_FIXUP_3298.xxx;
    _RESERVED_IDENTIFIER_FIXUP_1819.x = _RESERVED_IDENTIFIER_FIXUP_2489.x;
    _RESERVED_IDENTIFIER_FIXUP_1819.y = _RESERVED_IDENTIFIER_FIXUP_2489.y;
    _RESERVED_IDENTIFIER_FIXUP_1819.z = _RESERVED_IDENTIFIER_FIXUP_2489.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2500 = _RESERVED_IDENTIFIER_FIXUP_1819.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3306 = _RESERVED_IDENTIFIER_FIXUP_1819;
    _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_2500.x;
    _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_2500.y;
    _RESERVED_IDENTIFIER_FIXUP_3306.z = _RESERVED_IDENTIFIER_FIXUP_2500.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2511 = _RESERVED_IDENTIFIER_FIXUP_3306.xyz + _RESERVED_IDENTIFIER_FIXUP_3306.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3312 = _RESERVED_IDENTIFIER_FIXUP_3306;
    _RESERVED_IDENTIFIER_FIXUP_3312.x = _RESERVED_IDENTIFIER_FIXUP_2511.x;
    _RESERVED_IDENTIFIER_FIXUP_3312.y = _RESERVED_IDENTIFIER_FIXUP_2511.y;
    _RESERVED_IDENTIFIER_FIXUP_3312.z = _RESERVED_IDENTIFIER_FIXUP_2511.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2522 = _RESERVED_IDENTIFIER_FIXUP_3312.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3298.x = _RESERVED_IDENTIFIER_FIXUP_2522.x;
    _RESERVED_IDENTIFIER_FIXUP_3298.y = _RESERVED_IDENTIFIER_FIXUP_2522.y;
    _RESERVED_IDENTIFIER_FIXUP_3298.z = _RESERVED_IDENTIFIER_FIXUP_2522.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2536 = (_RESERVED_IDENTIFIER_FIXUP_3298.xyz * _RESERVED_IDENTIFIER_FIXUP_3295.xxx) + _RESERVED_IDENTIFIER_FIXUP_3312.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_3312;
    _RESERVED_IDENTIFIER_FIXUP_3324.x = _RESERVED_IDENTIFIER_FIXUP_2536.x;
    _RESERVED_IDENTIFIER_FIXUP_3324.y = _RESERVED_IDENTIFIER_FIXUP_2536.y;
    _RESERVED_IDENTIFIER_FIXUP_3324.z = _RESERVED_IDENTIFIER_FIXUP_2536.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2549 = _RESERVED_IDENTIFIER_FIXUP_3324.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3330 = _RESERVED_IDENTIFIER_FIXUP_3324;
    _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_2549.x;
    _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2549.y;
    _RESERVED_IDENTIFIER_FIXUP_3330.z = _RESERVED_IDENTIFIER_FIXUP_2549.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3330.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_898 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_907;
    if (_RESERVED_IDENTIFIER_FIXUP_898)
    {
        _RESERVED_IDENTIFIER_FIXUP_907 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_907 = _RESERVED_IDENTIFIER_FIXUP_898;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_907)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_944 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2966.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_971 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2608;
    if (_RESERVED_IDENTIFIER_FIXUP_944 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2608 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_944), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_971);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2608 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_971);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2608;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
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
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord4;
    vec4 v4 = texcoord5;
    vec4 v5 = texcoord6;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    r1.x = max(abs(v3.x), abs(v3.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB95 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB95.x;
        r1.z = hdB95.y;
        vec2 hdB117 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB117.x;
        r2.y = hdB117.y;
        vec2 hdB128 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB128.x;
        r3.y = hdB128.y;
        vec2 hdB139 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB139.x;
        r4.y = hdB139.y;
        vec2 hdB150 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB150.x;
        r5.y = hdB150.y;
        r6 = (v3.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r6.xy;
        float param_2 = r6.w;
        r6 = hdLod5(param_1, param_2);
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
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v3.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v3.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v4.x), abs(v4.y));
    if (r1.y < 1.0)
    {
        vec2 hdB281 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB281.x;
        r1.z = hdB281.y;
        vec2 hdB291 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB291.x;
        r2.y = hdB291.y;
        vec2 hdB301 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB301.x;
        r3.y = hdB301.y;
        vec2 hdB311 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB311.x;
        r4.y = hdB311.y;
        vec2 hdB321 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB321.x;
        r5.y = hdB321.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_11 = r6.xy;
        float param_12 = r6.w;
        r6 = hdLod6(param_11, param_12);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod6(param_13, param_14);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_15 = r3.xy;
        float param_16 = r3.w;
        r3 = hdLod6(param_15, param_16);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_17 = r4.xy;
        float param_18 = r4.w;
        r4 = hdLod6(param_17, param_18);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_19 = r5.xy;
        float param_20 = r5.w;
        r5 = hdLod6(param_19, param_20);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v5.x), abs(v5.y));
        if (r1.z < 1.0)
        {
            vec2 hdB436 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB436.x;
            r1.w = hdB436.y;
            vec2 hdB446 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB446.x;
            r2.y = hdB446.y;
            vec2 hdB456 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB456.x;
            r3.y = hdB456.y;
            vec2 hdB466 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB466.x;
            r4.y = hdB466.y;
            vec2 hdB476 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB476.x;
            r5.y = hdB476.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod7(param_21, param_22);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod7(param_23, param_24);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod7(param_25, param_26);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_27 = r4.xy;
            float param_28 = r4.w;
            r4 = hdLod7(param_27, param_28);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_29 = r5.xy;
            float param_30 = r5.w;
            r5 = hdLod7(param_29, param_30);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v5.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v3.w;
            r2.y = v4.w;
            vec2 hdB584 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB584.x;
            r3.y = hdB584.y;
            vec2 hdB594 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB594.x;
            r4.y = hdB594.y;
            vec2 hdB604 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB604.x;
            r5.y = hdB604.y;
            vec2 hdB614 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB614.x;
            r6.y = hdB614.y;
            vec2 hdB624 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB624.x;
            r7.y = hdB624.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_31 = r3.xy;
            float param_32 = r3.w;
            r3 = hdLod8(param_31, param_32);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_33 = r4.xy;
            float param_34 = r4.w;
            r4 = hdLod8(param_33, param_34);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_35 = r5.xy;
            float param_36 = r5.w;
            r5 = hdLod8(param_35, param_36);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_37 = r6.xy;
            float param_38 = r6.w;
            r6 = hdLod8(param_37, param_38);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_39 = r7.xy;
            float param_40 = r7.w;
            r7 = hdLod8(param_39, param_40);
            r3.y = r4.x;
            r3.z = r5.x;
            r3.w = r6.x;
            r3 += (-v5.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v5.w);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r3, vec4(1.0));
            r1.z += r1.w;
            r1.w = max(abs(r2.x), abs(r2.y));
            r1.w = clamp((r1.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.z = (r1.z * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.w * r1.z) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB760 = r0;
    vec3 hdB764 = hdB760.xyz * r1.xxx;
    r0.x = hdB764.x;
    r0.y = hdB764.y;
    r0.z = hdB764.z;
    vec4 hdB771 = r0;
    vec3 hdB775 = hdB771.xyz * v0.xyz;
    r0.x = hdB775.x;
    r0.y = hdB775.y;
    r0.z = hdB775.z;
    vec4 hdB782 = r0;
    vec4 hdB784 = r0;
    vec3 hdB786 = hdB782.xyz + hdB784.xyz;
    r0.x = hdB786.x;
    r0.y = hdB786.y;
    r0.z = hdB786.z;
    vec3 hdB797 = r0.www * v1.xyz;
    r1.x = hdB797.x;
    r1.y = hdB797.y;
    r1.z = hdB797.z;
    vec4 hdB809 = r0;
    vec3 hdB811 = (r1.xyz * r2.xxx) + hdB809.xyz;
    r0.x = hdB811.x;
    r0.y = hdB811.y;
    r0.z = hdB811.z;
    vec4 hdB818 = r0;
    vec3 hdB825 = hdB818.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB825.x;
    r0.y = hdB825.y;
    r0.z = hdB825.z;
    vec3 hdB840 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB840.x;
    oC0.y = hdB840.y;
    oC0.z = hdB840.z;
    oC0.w = 1.0;
    bool hdB853 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB861;
    if (hdB853)
    {
        hdB861 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB861 = hdB853;
    }
    if (hdB861)
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
    bool _2886 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _2896;
    if (_2886)
    {
        _2896 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 481u) != 0u;
    }
    else
    {
        _2896 = _2886;
    }
    if (_2896)
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
        bool _2921 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _2936;
        if (!_2921)
        {
            _2936 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 481u) != 0u;
        }
        else
        {
            _2936 = _2921;
        }
        if (_2936)
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
