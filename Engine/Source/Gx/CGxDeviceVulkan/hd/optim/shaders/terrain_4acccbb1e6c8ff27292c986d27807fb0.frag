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
float _RESERVED_IDENTIFIER_FIXUP_3877;
vec4 _RESERVED_IDENTIFIER_FIXUP_3878;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1189 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1196 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_1193.w = _RESERVED_IDENTIFIER_FIXUP_1196;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = _RESERVED_IDENTIFIER_FIXUP_1189.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1199 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3877).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3038 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3038.x = _RESERVED_IDENTIFIER_FIXUP_1202.x;
    _RESERVED_IDENTIFIER_FIXUP_3038.y = _RESERVED_IDENTIFIER_FIXUP_1202.y;
    _RESERVED_IDENTIFIER_FIXUP_3038.z = _RESERVED_IDENTIFIER_FIXUP_1202.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1213 = _RESERVED_IDENTIFIER_FIXUP_3038.xyz + _RESERVED_IDENTIFIER_FIXUP_3038.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3044 = _RESERVED_IDENTIFIER_FIXUP_3038;
    _RESERVED_IDENTIFIER_FIXUP_3044.x = _RESERVED_IDENTIFIER_FIXUP_1213.x;
    _RESERVED_IDENTIFIER_FIXUP_3044.y = _RESERVED_IDENTIFIER_FIXUP_1213.y;
    _RESERVED_IDENTIFIER_FIXUP_3044.z = _RESERVED_IDENTIFIER_FIXUP_1213.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1228 = mix(_RESERVED_IDENTIFIER_FIXUP_3044.xyz, _RESERVED_IDENTIFIER_FIXUP_1199, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1193.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3050 = _RESERVED_IDENTIFIER_FIXUP_1189;
    _RESERVED_IDENTIFIER_FIXUP_3050.x = _RESERVED_IDENTIFIER_FIXUP_1228.x;
    _RESERVED_IDENTIFIER_FIXUP_3050.y = _RESERVED_IDENTIFIER_FIXUP_1228.y;
    _RESERVED_IDENTIFIER_FIXUP_3050.z = _RESERVED_IDENTIFIER_FIXUP_1228.z;
    float _RESERVED_IDENTIFIER_FIXUP_1238 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1193.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3056 = _RESERVED_IDENTIFIER_FIXUP_1193;
    _RESERVED_IDENTIFIER_FIXUP_3056.x = _RESERVED_IDENTIFIER_FIXUP_1238;
    _RESERVED_IDENTIFIER_FIXUP_3056.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1238;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1248 = _RESERVED_IDENTIFIER_FIXUP_3050 * _RESERVED_IDENTIFIER_FIXUP_3056.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_1255 = max(abs(texcoord4.x), abs(texcoord4.y));
    float _RESERVED_IDENTIFIER_FIXUP_1267 = ((-clamp((_RESERVED_IDENTIFIER_FIXUP_1255 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0)) >= 0.0) ? 0.0 : 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3882;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3879;
    if (_RESERVED_IDENTIFIER_FIXUP_1267 != (-_RESERVED_IDENTIFIER_FIXUP_1267))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1279 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3302;
        _RESERVED_IDENTIFIER_FIXUP_3302.x = _RESERVED_IDENTIFIER_FIXUP_1279.x;
        _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_1279.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1289 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3306;
        _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_1289.x;
        _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_1289.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
        _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_1299.x;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_1299.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3314;
        _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_1309.x;
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1309.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3318;
        _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_1319.x;
        _RESERVED_IDENTIFIER_FIXUP_3318.y = _RESERVED_IDENTIFIER_FIXUP_1319.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1329 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3322;
        _RESERVED_IDENTIFIER_FIXUP_3322.x = _RESERVED_IDENTIFIER_FIXUP_1329.x;
        _RESERVED_IDENTIFIER_FIXUP_3322.y = _RESERVED_IDENTIFIER_FIXUP_1329.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3326;
        _RESERVED_IDENTIFIER_FIXUP_3326.x = _RESERVED_IDENTIFIER_FIXUP_1339.x;
        _RESERVED_IDENTIFIER_FIXUP_3326.y = _RESERVED_IDENTIFIER_FIXUP_1339.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1349 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3330;
        _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_1349.x;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_1349.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3334;
        _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_1359.x;
        _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_1359.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1367 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1367.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1367.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1373 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_3306.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3310.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3314.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3318.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3318.xy;
        float param_5 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3322.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3326.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3330.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3334.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3334.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1453 = hdLod5(param_6, param_7);
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3306.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.y = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3310.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.z = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3314.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.w = hdLod5(param_12, param_13).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1470 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1373 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3322.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1413.y = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3326.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1413.z = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3330.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1413.w = hdLod5(param_18, param_19).x;
        float _RESERVED_IDENTIFIER_FIXUP_1493 = _RESERVED_IDENTIFIER_FIXUP_1453.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_1453;
        _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1493;
        float _RESERVED_IDENTIFIER_FIXUP_1498 = float(_RESERVED_IDENTIFIER_FIXUP_1493 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1498;
        float _RESERVED_IDENTIFIER_FIXUP_1501 = dot(_RESERVED_IDENTIFIER_FIXUP_1470, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_1501;
        float _RESERVED_IDENTIFIER_FIXUP_1504 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1413 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3399.z = _RESERVED_IDENTIFIER_FIXUP_1504;
        float _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_1501 + _RESERVED_IDENTIFIER_FIXUP_1504;
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_1510;
        float _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_1498 + _RESERVED_IDENTIFIER_FIXUP_1510;
        _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1516;
        _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1516 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3882 = _RESERVED_IDENTIFIER_FIXUP_1470;
        _RESERVED_IDENTIFIER_FIXUP_3879 = _RESERVED_IDENTIFIER_FIXUP_3399;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3883;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3880;
        if (max(abs(texcoord5.x), abs(texcoord5.y)) < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3905 = vec4(_RESERVED_IDENTIFIER_FIXUP_1267, (texcoord5.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1196);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_3905.yz;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1548 = _RESERVED_IDENTIFIER_FIXUP_1544 + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3240;
            _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_1548.x;
            _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_1548.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1558 = _RESERVED_IDENTIFIER_FIXUP_1544 + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3244;
            _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_1558.x;
            _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_1558.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1544 + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3248;
            _RESERVED_IDENTIFIER_FIXUP_3248.x = _RESERVED_IDENTIFIER_FIXUP_1568.x;
            _RESERVED_IDENTIFIER_FIXUP_3248.y = _RESERVED_IDENTIFIER_FIXUP_1568.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_1544 + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3252;
            _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_1578.x;
            _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_1578.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1586 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1586.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1586.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1592 = hdLod6(param_20, param_21);
            _RESERVED_IDENTIFIER_FIXUP_3240.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3244.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3248.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3252.w = 0.0;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3240.xy;
            float param_23 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1592.y = hdLod6(param_22, param_23).x;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3244.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1592.z = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3248.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1592.w = hdLod6(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1649 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1592 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3252.xy;
            float param_29 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1655 = hdLod6(param_28, param_29).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3905.y = _RESERVED_IDENTIFIER_FIXUP_1655;
            float _RESERVED_IDENTIFIER_FIXUP_1660 = float(_RESERVED_IDENTIFIER_FIXUP_1655 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3905.y = _RESERVED_IDENTIFIER_FIXUP_1660;
            float _RESERVED_IDENTIFIER_FIXUP_1663 = dot(_RESERVED_IDENTIFIER_FIXUP_1649, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3905.z = _RESERVED_IDENTIFIER_FIXUP_1663;
            float _RESERVED_IDENTIFIER_FIXUP_1669 = _RESERVED_IDENTIFIER_FIXUP_1660 + _RESERVED_IDENTIFIER_FIXUP_1663;
            _RESERVED_IDENTIFIER_FIXUP_3905.y = _RESERVED_IDENTIFIER_FIXUP_1669;
            _RESERVED_IDENTIFIER_FIXUP_3905.x = _RESERVED_IDENTIFIER_FIXUP_1669 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3883 = _RESERVED_IDENTIFIER_FIXUP_1649;
            _RESERVED_IDENTIFIER_FIXUP_3880 = _RESERVED_IDENTIFIER_FIXUP_3905;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3884;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3881;
            if (max(abs(texcoord6.x), abs(texcoord6.y)) < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3904 = vec4(_RESERVED_IDENTIFIER_FIXUP_1267, (texcoord6.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1196);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_3904.yz;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1701 = _RESERVED_IDENTIFIER_FIXUP_1697 + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3174;
                _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1701.x;
                _RESERVED_IDENTIFIER_FIXUP_3174.y = _RESERVED_IDENTIFIER_FIXUP_1701.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_1697 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3178;
                _RESERVED_IDENTIFIER_FIXUP_3178.x = _RESERVED_IDENTIFIER_FIXUP_1711.x;
                _RESERVED_IDENTIFIER_FIXUP_3178.y = _RESERVED_IDENTIFIER_FIXUP_1711.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1721 = _RESERVED_IDENTIFIER_FIXUP_1697 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3182;
                _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_1721.x;
                _RESERVED_IDENTIFIER_FIXUP_3182.y = _RESERVED_IDENTIFIER_FIXUP_1721.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1731 = _RESERVED_IDENTIFIER_FIXUP_1697 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3186;
                _RESERVED_IDENTIFIER_FIXUP_3186.x = _RESERVED_IDENTIFIER_FIXUP_1731.x;
                _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_1731.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1739 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1739.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1739.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1745 = hdLod7(param_30, param_31);
                _RESERVED_IDENTIFIER_FIXUP_3174.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3178.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3182.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3186.w = 0.0;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3174.xy;
                float param_33 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1745.y = hdLod7(param_32, param_33).x;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3178.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1745.z = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3182.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1745.w = hdLod7(param_36, param_37).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1802 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1745 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3186.xy;
                float param_39 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1808 = hdLod7(param_38, param_39).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3904.y = _RESERVED_IDENTIFIER_FIXUP_1808;
                float _RESERVED_IDENTIFIER_FIXUP_1813 = float(_RESERVED_IDENTIFIER_FIXUP_1808 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3904.y = _RESERVED_IDENTIFIER_FIXUP_1813;
                float _RESERVED_IDENTIFIER_FIXUP_1816 = dot(_RESERVED_IDENTIFIER_FIXUP_1802, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3904.z = _RESERVED_IDENTIFIER_FIXUP_1816;
                float _RESERVED_IDENTIFIER_FIXUP_1822 = _RESERVED_IDENTIFIER_FIXUP_1813 + _RESERVED_IDENTIFIER_FIXUP_1816;
                _RESERVED_IDENTIFIER_FIXUP_3904.y = _RESERVED_IDENTIFIER_FIXUP_1822;
                _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_1822 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3884 = _RESERVED_IDENTIFIER_FIXUP_1802;
                _RESERVED_IDENTIFIER_FIXUP_3881 = _RESERVED_IDENTIFIER_FIXUP_3904;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_3044.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3044.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1838 = (_RESERVED_IDENTIFIER_FIXUP_3044.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3089;
                _RESERVED_IDENTIFIER_FIXUP_3089.x = _RESERVED_IDENTIFIER_FIXUP_1838.x;
                _RESERVED_IDENTIFIER_FIXUP_3089.y = _RESERVED_IDENTIFIER_FIXUP_1838.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1848 = _RESERVED_IDENTIFIER_FIXUP_3089.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3093;
                _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_1848.x;
                _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_1848.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1858 = _RESERVED_IDENTIFIER_FIXUP_3089.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3097;
                _RESERVED_IDENTIFIER_FIXUP_3097.x = _RESERVED_IDENTIFIER_FIXUP_1858.x;
                _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1858.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1868 = _RESERVED_IDENTIFIER_FIXUP_3089.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3101;
                _RESERVED_IDENTIFIER_FIXUP_3101.x = _RESERVED_IDENTIFIER_FIXUP_1868.x;
                _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1868.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1878 = _RESERVED_IDENTIFIER_FIXUP_3089.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3105;
                _RESERVED_IDENTIFIER_FIXUP_3105.x = _RESERVED_IDENTIFIER_FIXUP_1878.x;
                _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_1878.y;
                _RESERVED_IDENTIFIER_FIXUP_3089.w = 0.0;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3089.xy;
                float param_41 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1892 = hdLod8(param_40, param_41);
                _RESERVED_IDENTIFIER_FIXUP_3093.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3097.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3101.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3105.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3093.xy;
                float param_43 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1892.y = hdLod8(param_42, param_43).x;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3097.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1892.z = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3101.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1892.w = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3105.xy;
                float param_49 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1960 = float((hdLod8(param_48, param_49).x - texcoord6.w) >= 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1963 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1892 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3903 = vec4(_RESERVED_IDENTIFIER_FIXUP_1267, _RESERVED_IDENTIFIER_FIXUP_1960, _RESERVED_IDENTIFIER_FIXUP_1963, _RESERVED_IDENTIFIER_FIXUP_1196);
                float _RESERVED_IDENTIFIER_FIXUP_1969 = _RESERVED_IDENTIFIER_FIXUP_1960 + _RESERVED_IDENTIFIER_FIXUP_1963;
                _RESERVED_IDENTIFIER_FIXUP_3903.y = _RESERVED_IDENTIFIER_FIXUP_1969;
                float _RESERVED_IDENTIFIER_FIXUP_1977 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3903.z = _RESERVED_IDENTIFIER_FIXUP_1977;
                float _RESERVED_IDENTIFIER_FIXUP_1983 = clamp((_RESERVED_IDENTIFIER_FIXUP_1977 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3903.z = _RESERVED_IDENTIFIER_FIXUP_1983;
                float _RESERVED_IDENTIFIER_FIXUP_1988 = (_RESERVED_IDENTIFIER_FIXUP_1969 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3903.y = _RESERVED_IDENTIFIER_FIXUP_1988;
                _RESERVED_IDENTIFIER_FIXUP_3903.x = (_RESERVED_IDENTIFIER_FIXUP_1983 * _RESERVED_IDENTIFIER_FIXUP_1988) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3884 = _RESERVED_IDENTIFIER_FIXUP_3044;
                _RESERVED_IDENTIFIER_FIXUP_3881 = _RESERVED_IDENTIFIER_FIXUP_3903;
            }
            _RESERVED_IDENTIFIER_FIXUP_3883 = _RESERVED_IDENTIFIER_FIXUP_3884;
            _RESERVED_IDENTIFIER_FIXUP_3880 = _RESERVED_IDENTIFIER_FIXUP_3881;
        }
        _RESERVED_IDENTIFIER_FIXUP_3882 = _RESERVED_IDENTIFIER_FIXUP_3883;
        _RESERVED_IDENTIFIER_FIXUP_3879 = _RESERVED_IDENTIFIER_FIXUP_3880;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3422 = _RESERVED_IDENTIFIER_FIXUP_3879;
    _RESERVED_IDENTIFIER_FIXUP_3422.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3424 = _RESERVED_IDENTIFIER_FIXUP_3882;
    _RESERVED_IDENTIFIER_FIXUP_3424.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3424.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3424.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2027 = _RESERVED_IDENTIFIER_FIXUP_3422.xxx * _RESERVED_IDENTIFIER_FIXUP_3424.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3906 = vec4(_RESERVED_IDENTIFIER_FIXUP_2027.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2027.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2041 = (_RESERVED_IDENTIFIER_FIXUP_1248.xyz * _RESERVED_IDENTIFIER_FIXUP_3906.yyy) + _RESERVED_IDENTIFIER_FIXUP_3906.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_1248;
    _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_2041.x;
    _RESERVED_IDENTIFIER_FIXUP_3436.y = _RESERVED_IDENTIFIER_FIXUP_2041.y;
    _RESERVED_IDENTIFIER_FIXUP_3436.z = _RESERVED_IDENTIFIER_FIXUP_2041.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2054 = _RESERVED_IDENTIFIER_FIXUP_3436.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3442 = _RESERVED_IDENTIFIER_FIXUP_3436;
    _RESERVED_IDENTIFIER_FIXUP_3442.x = _RESERVED_IDENTIFIER_FIXUP_2054.x;
    _RESERVED_IDENTIFIER_FIXUP_3442.y = _RESERVED_IDENTIFIER_FIXUP_2054.y;
    _RESERVED_IDENTIFIER_FIXUP_3442.z = _RESERVED_IDENTIFIER_FIXUP_2054.z;
    vec2 param_50 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2111 = hdTex0(param_50);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2115 = hdTex1(param_51);
    _RESERVED_IDENTIFIER_FIXUP_2115.w = _RESERVED_IDENTIFIER_FIXUP_1196;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2121 = _RESERVED_IDENTIFIER_FIXUP_2111.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2124 = _RESERVED_IDENTIFIER_FIXUP_2121 * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3458 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3458.x = _RESERVED_IDENTIFIER_FIXUP_2124.x;
    _RESERVED_IDENTIFIER_FIXUP_3458.y = _RESERVED_IDENTIFIER_FIXUP_2124.y;
    _RESERVED_IDENTIFIER_FIXUP_3458.z = _RESERVED_IDENTIFIER_FIXUP_2124.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2135 = _RESERVED_IDENTIFIER_FIXUP_3458.xyz + _RESERVED_IDENTIFIER_FIXUP_3458.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_3458;
    _RESERVED_IDENTIFIER_FIXUP_3464.x = _RESERVED_IDENTIFIER_FIXUP_2135.x;
    _RESERVED_IDENTIFIER_FIXUP_3464.y = _RESERVED_IDENTIFIER_FIXUP_2135.y;
    _RESERVED_IDENTIFIER_FIXUP_3464.z = _RESERVED_IDENTIFIER_FIXUP_2135.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2150 = mix(_RESERVED_IDENTIFIER_FIXUP_3464.xyz, _RESERVED_IDENTIFIER_FIXUP_2121, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2115.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3470 = _RESERVED_IDENTIFIER_FIXUP_2111;
    _RESERVED_IDENTIFIER_FIXUP_3470.x = _RESERVED_IDENTIFIER_FIXUP_2150.x;
    _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_2150.y;
    _RESERVED_IDENTIFIER_FIXUP_3470.z = _RESERVED_IDENTIFIER_FIXUP_2150.z;
    float _RESERVED_IDENTIFIER_FIXUP_2160 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2115.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3476 = _RESERVED_IDENTIFIER_FIXUP_2115;
    _RESERVED_IDENTIFIER_FIXUP_3476.x = _RESERVED_IDENTIFIER_FIXUP_2160;
    _RESERVED_IDENTIFIER_FIXUP_3476.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2160;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2170 = _RESERVED_IDENTIFIER_FIXUP_3470 * _RESERVED_IDENTIFIER_FIXUP_3476.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_2189 = ((-clamp((_RESERVED_IDENTIFIER_FIXUP_1255 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0)) >= 0.0) ? 0.0 : 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3897;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3891;
    if (_RESERVED_IDENTIFIER_FIXUP_2189 != (-_RESERVED_IDENTIFIER_FIXUP_2189))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2201 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3722;
        _RESERVED_IDENTIFIER_FIXUP_3722.x = _RESERVED_IDENTIFIER_FIXUP_2201.x;
        _RESERVED_IDENTIFIER_FIXUP_3722.y = _RESERVED_IDENTIFIER_FIXUP_2201.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2211 = _RESERVED_IDENTIFIER_FIXUP_3722.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3726;
        _RESERVED_IDENTIFIER_FIXUP_3726.x = _RESERVED_IDENTIFIER_FIXUP_2211.x;
        _RESERVED_IDENTIFIER_FIXUP_3726.y = _RESERVED_IDENTIFIER_FIXUP_2211.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2221 = _RESERVED_IDENTIFIER_FIXUP_3722.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3730;
        _RESERVED_IDENTIFIER_FIXUP_3730.x = _RESERVED_IDENTIFIER_FIXUP_2221.x;
        _RESERVED_IDENTIFIER_FIXUP_3730.y = _RESERVED_IDENTIFIER_FIXUP_2221.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2231 = _RESERVED_IDENTIFIER_FIXUP_3722.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3734;
        _RESERVED_IDENTIFIER_FIXUP_3734.x = _RESERVED_IDENTIFIER_FIXUP_2231.x;
        _RESERVED_IDENTIFIER_FIXUP_3734.y = _RESERVED_IDENTIFIER_FIXUP_2231.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2241 = _RESERVED_IDENTIFIER_FIXUP_3722.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3738;
        _RESERVED_IDENTIFIER_FIXUP_3738.x = _RESERVED_IDENTIFIER_FIXUP_2241.x;
        _RESERVED_IDENTIFIER_FIXUP_3738.y = _RESERVED_IDENTIFIER_FIXUP_2241.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2251 = _RESERVED_IDENTIFIER_FIXUP_3722.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3742;
        _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2251.x;
        _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2251.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2261 = _RESERVED_IDENTIFIER_FIXUP_3722.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3746;
        _RESERVED_IDENTIFIER_FIXUP_3746.x = _RESERVED_IDENTIFIER_FIXUP_2261.x;
        _RESERVED_IDENTIFIER_FIXUP_3746.y = _RESERVED_IDENTIFIER_FIXUP_2261.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2271 = _RESERVED_IDENTIFIER_FIXUP_3722.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3750;
        _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2271.x;
        _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2271.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2281 = _RESERVED_IDENTIFIER_FIXUP_3722.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3754;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2281.x;
        _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2281.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2289 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2289.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2289.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2295 = hdLod5(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3726.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3730.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3734.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3738.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3738.xy;
        float param_55 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2335 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3742.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3746.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3750.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3754.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3754.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2375 = hdLod5(param_56, param_57);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3726.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2295.y = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3730.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2295.z = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3734.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2295.w = hdLod5(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2392 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2295 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3742.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2335.y = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3746.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2335.z = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3750.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2335.w = hdLod5(param_68, param_69).x;
        float _RESERVED_IDENTIFIER_FIXUP_2415 = _RESERVED_IDENTIFIER_FIXUP_2375.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3819 = _RESERVED_IDENTIFIER_FIXUP_2375;
        _RESERVED_IDENTIFIER_FIXUP_3819.x = _RESERVED_IDENTIFIER_FIXUP_2415;
        float _RESERVED_IDENTIFIER_FIXUP_2420 = float(_RESERVED_IDENTIFIER_FIXUP_2415 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3819.x = _RESERVED_IDENTIFIER_FIXUP_2420;
        float _RESERVED_IDENTIFIER_FIXUP_2423 = dot(_RESERVED_IDENTIFIER_FIXUP_2392, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3819.y = _RESERVED_IDENTIFIER_FIXUP_2423;
        float _RESERVED_IDENTIFIER_FIXUP_2426 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2335 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3819.z = _RESERVED_IDENTIFIER_FIXUP_2426;
        float _RESERVED_IDENTIFIER_FIXUP_2432 = _RESERVED_IDENTIFIER_FIXUP_2423 + _RESERVED_IDENTIFIER_FIXUP_2426;
        _RESERVED_IDENTIFIER_FIXUP_3819.y = _RESERVED_IDENTIFIER_FIXUP_2432;
        float _RESERVED_IDENTIFIER_FIXUP_2438 = _RESERVED_IDENTIFIER_FIXUP_2420 + _RESERVED_IDENTIFIER_FIXUP_2432;
        _RESERVED_IDENTIFIER_FIXUP_3819.x = _RESERVED_IDENTIFIER_FIXUP_2438;
        _RESERVED_IDENTIFIER_FIXUP_3819.x = _RESERVED_IDENTIFIER_FIXUP_2438 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3897 = _RESERVED_IDENTIFIER_FIXUP_2392;
        _RESERVED_IDENTIFIER_FIXUP_3891 = _RESERVED_IDENTIFIER_FIXUP_3819;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3898;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3892;
        if (max(abs(texcoord5.x), abs(texcoord5.y)) < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3910 = vec4(_RESERVED_IDENTIFIER_FIXUP_2189, (texcoord5.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1196);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2466 = _RESERVED_IDENTIFIER_FIXUP_3910.yz;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2470 = _RESERVED_IDENTIFIER_FIXUP_2466 + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3660;
            _RESERVED_IDENTIFIER_FIXUP_3660.x = _RESERVED_IDENTIFIER_FIXUP_2470.x;
            _RESERVED_IDENTIFIER_FIXUP_3660.y = _RESERVED_IDENTIFIER_FIXUP_2470.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2480 = _RESERVED_IDENTIFIER_FIXUP_2466 + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3664;
            _RESERVED_IDENTIFIER_FIXUP_3664.x = _RESERVED_IDENTIFIER_FIXUP_2480.x;
            _RESERVED_IDENTIFIER_FIXUP_3664.y = _RESERVED_IDENTIFIER_FIXUP_2480.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2490 = _RESERVED_IDENTIFIER_FIXUP_2466 + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3668;
            _RESERVED_IDENTIFIER_FIXUP_3668.x = _RESERVED_IDENTIFIER_FIXUP_2490.x;
            _RESERVED_IDENTIFIER_FIXUP_3668.y = _RESERVED_IDENTIFIER_FIXUP_2490.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2500 = _RESERVED_IDENTIFIER_FIXUP_2466 + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3672;
            _RESERVED_IDENTIFIER_FIXUP_3672.x = _RESERVED_IDENTIFIER_FIXUP_2500.x;
            _RESERVED_IDENTIFIER_FIXUP_3672.y = _RESERVED_IDENTIFIER_FIXUP_2500.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2508 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2508.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2508.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2514 = hdLod6(param_70, param_71);
            _RESERVED_IDENTIFIER_FIXUP_3660.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3664.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3668.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3672.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3660.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2514.y = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3664.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2514.z = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3668.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2514.w = hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2571 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2514 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3672.xy;
            float param_79 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2577 = hdLod6(param_78, param_79).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3910.y = _RESERVED_IDENTIFIER_FIXUP_2577;
            float _RESERVED_IDENTIFIER_FIXUP_2582 = float(_RESERVED_IDENTIFIER_FIXUP_2577 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3910.y = _RESERVED_IDENTIFIER_FIXUP_2582;
            float _RESERVED_IDENTIFIER_FIXUP_2585 = dot(_RESERVED_IDENTIFIER_FIXUP_2571, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3910.z = _RESERVED_IDENTIFIER_FIXUP_2585;
            float _RESERVED_IDENTIFIER_FIXUP_2591 = _RESERVED_IDENTIFIER_FIXUP_2582 + _RESERVED_IDENTIFIER_FIXUP_2585;
            _RESERVED_IDENTIFIER_FIXUP_3910.y = _RESERVED_IDENTIFIER_FIXUP_2591;
            _RESERVED_IDENTIFIER_FIXUP_3910.x = _RESERVED_IDENTIFIER_FIXUP_2591 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3898 = _RESERVED_IDENTIFIER_FIXUP_2571;
            _RESERVED_IDENTIFIER_FIXUP_3892 = _RESERVED_IDENTIFIER_FIXUP_3910;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3899;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3893;
            if (max(abs(texcoord6.x), abs(texcoord6.y)) < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3909 = vec4(_RESERVED_IDENTIFIER_FIXUP_2189, (texcoord6.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1196);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2619 = _RESERVED_IDENTIFIER_FIXUP_3909.yz;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2623 = _RESERVED_IDENTIFIER_FIXUP_2619 + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3594;
                _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2623.x;
                _RESERVED_IDENTIFIER_FIXUP_3594.y = _RESERVED_IDENTIFIER_FIXUP_2623.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2633 = _RESERVED_IDENTIFIER_FIXUP_2619 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3598;
                _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2633.x;
                _RESERVED_IDENTIFIER_FIXUP_3598.y = _RESERVED_IDENTIFIER_FIXUP_2633.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2643 = _RESERVED_IDENTIFIER_FIXUP_2619 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3602;
                _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2643.x;
                _RESERVED_IDENTIFIER_FIXUP_3602.y = _RESERVED_IDENTIFIER_FIXUP_2643.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2653 = _RESERVED_IDENTIFIER_FIXUP_2619 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3606;
                _RESERVED_IDENTIFIER_FIXUP_3606.x = _RESERVED_IDENTIFIER_FIXUP_2653.x;
                _RESERVED_IDENTIFIER_FIXUP_3606.y = _RESERVED_IDENTIFIER_FIXUP_2653.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2661 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2661.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2661.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2667 = hdLod7(param_80, param_81);
                _RESERVED_IDENTIFIER_FIXUP_3594.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3598.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3602.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3606.w = 0.0;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3594.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2667.y = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3598.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2667.z = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3602.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2667.w = hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2724 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2667 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3606.xy;
                float param_89 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2730 = hdLod7(param_88, param_89).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3909.y = _RESERVED_IDENTIFIER_FIXUP_2730;
                float _RESERVED_IDENTIFIER_FIXUP_2735 = float(_RESERVED_IDENTIFIER_FIXUP_2730 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3909.y = _RESERVED_IDENTIFIER_FIXUP_2735;
                float _RESERVED_IDENTIFIER_FIXUP_2738 = dot(_RESERVED_IDENTIFIER_FIXUP_2724, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3909.z = _RESERVED_IDENTIFIER_FIXUP_2738;
                float _RESERVED_IDENTIFIER_FIXUP_2744 = _RESERVED_IDENTIFIER_FIXUP_2735 + _RESERVED_IDENTIFIER_FIXUP_2738;
                _RESERVED_IDENTIFIER_FIXUP_3909.y = _RESERVED_IDENTIFIER_FIXUP_2744;
                _RESERVED_IDENTIFIER_FIXUP_3909.x = _RESERVED_IDENTIFIER_FIXUP_2744 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3899 = _RESERVED_IDENTIFIER_FIXUP_2724;
                _RESERVED_IDENTIFIER_FIXUP_3893 = _RESERVED_IDENTIFIER_FIXUP_3909;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_3464.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3464.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2760 = (_RESERVED_IDENTIFIER_FIXUP_3464.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3509;
                _RESERVED_IDENTIFIER_FIXUP_3509.x = _RESERVED_IDENTIFIER_FIXUP_2760.x;
                _RESERVED_IDENTIFIER_FIXUP_3509.y = _RESERVED_IDENTIFIER_FIXUP_2760.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2770 = _RESERVED_IDENTIFIER_FIXUP_3509.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3513;
                _RESERVED_IDENTIFIER_FIXUP_3513.x = _RESERVED_IDENTIFIER_FIXUP_2770.x;
                _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2770.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2780 = _RESERVED_IDENTIFIER_FIXUP_3509.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3517;
                _RESERVED_IDENTIFIER_FIXUP_3517.x = _RESERVED_IDENTIFIER_FIXUP_2780.x;
                _RESERVED_IDENTIFIER_FIXUP_3517.y = _RESERVED_IDENTIFIER_FIXUP_2780.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2790 = _RESERVED_IDENTIFIER_FIXUP_3509.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3521;
                _RESERVED_IDENTIFIER_FIXUP_3521.x = _RESERVED_IDENTIFIER_FIXUP_2790.x;
                _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2790.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2800 = _RESERVED_IDENTIFIER_FIXUP_3509.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3525;
                _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2800.x;
                _RESERVED_IDENTIFIER_FIXUP_3525.y = _RESERVED_IDENTIFIER_FIXUP_2800.y;
                _RESERVED_IDENTIFIER_FIXUP_3509.w = 0.0;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3509.xy;
                float param_91 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2814 = hdLod8(param_90, param_91);
                _RESERVED_IDENTIFIER_FIXUP_3513.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3517.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3521.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3525.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3513.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2814.y = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3517.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2814.z = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3521.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2814.w = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3525.xy;
                float param_99 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2882 = float((hdLod8(param_98, param_99).x - texcoord6.w) >= 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2885 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2814 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3908 = vec4(_RESERVED_IDENTIFIER_FIXUP_2189, _RESERVED_IDENTIFIER_FIXUP_2882, _RESERVED_IDENTIFIER_FIXUP_2885, _RESERVED_IDENTIFIER_FIXUP_1196);
                float _RESERVED_IDENTIFIER_FIXUP_2891 = _RESERVED_IDENTIFIER_FIXUP_2882 + _RESERVED_IDENTIFIER_FIXUP_2885;
                _RESERVED_IDENTIFIER_FIXUP_3908.y = _RESERVED_IDENTIFIER_FIXUP_2891;
                float _RESERVED_IDENTIFIER_FIXUP_2899 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3908.z = _RESERVED_IDENTIFIER_FIXUP_2899;
                float _RESERVED_IDENTIFIER_FIXUP_2905 = clamp((_RESERVED_IDENTIFIER_FIXUP_2899 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3908.z = _RESERVED_IDENTIFIER_FIXUP_2905;
                float _RESERVED_IDENTIFIER_FIXUP_2910 = (_RESERVED_IDENTIFIER_FIXUP_2891 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3908.y = _RESERVED_IDENTIFIER_FIXUP_2910;
                _RESERVED_IDENTIFIER_FIXUP_3908.x = (_RESERVED_IDENTIFIER_FIXUP_2905 * _RESERVED_IDENTIFIER_FIXUP_2910) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3899 = _RESERVED_IDENTIFIER_FIXUP_3464;
                _RESERVED_IDENTIFIER_FIXUP_3893 = _RESERVED_IDENTIFIER_FIXUP_3908;
            }
            _RESERVED_IDENTIFIER_FIXUP_3898 = _RESERVED_IDENTIFIER_FIXUP_3899;
            _RESERVED_IDENTIFIER_FIXUP_3892 = _RESERVED_IDENTIFIER_FIXUP_3893;
        }
        _RESERVED_IDENTIFIER_FIXUP_3897 = _RESERVED_IDENTIFIER_FIXUP_3898;
        _RESERVED_IDENTIFIER_FIXUP_3891 = _RESERVED_IDENTIFIER_FIXUP_3892;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2925 = (_RESERVED_IDENTIFIER_FIXUP_3891.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3840 = _RESERVED_IDENTIFIER_FIXUP_3891;
    _RESERVED_IDENTIFIER_FIXUP_3840.y = _RESERVED_IDENTIFIER_FIXUP_2925;
    _RESERVED_IDENTIFIER_FIXUP_3840.y = _RESERVED_IDENTIFIER_FIXUP_2925;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2938 = _RESERVED_IDENTIFIER_FIXUP_2170.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3846 = _RESERVED_IDENTIFIER_FIXUP_3897;
    _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2938.x;
    _RESERVED_IDENTIFIER_FIXUP_3846.y = _RESERVED_IDENTIFIER_FIXUP_2938.y;
    _RESERVED_IDENTIFIER_FIXUP_3846.z = _RESERVED_IDENTIFIER_FIXUP_2938.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2949 = _RESERVED_IDENTIFIER_FIXUP_3840.xxx * _RESERVED_IDENTIFIER_FIXUP_3846.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3911 = vec4(_RESERVED_IDENTIFIER_FIXUP_2949.x, _RESERVED_IDENTIFIER_FIXUP_2925, _RESERVED_IDENTIFIER_FIXUP_2949.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2963 = (_RESERVED_IDENTIFIER_FIXUP_2170.xyz * _RESERVED_IDENTIFIER_FIXUP_3911.yyy) + _RESERVED_IDENTIFIER_FIXUP_3911.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3858 = _RESERVED_IDENTIFIER_FIXUP_2170;
    _RESERVED_IDENTIFIER_FIXUP_3858.x = _RESERVED_IDENTIFIER_FIXUP_2963.x;
    _RESERVED_IDENTIFIER_FIXUP_3858.y = _RESERVED_IDENTIFIER_FIXUP_2963.y;
    _RESERVED_IDENTIFIER_FIXUP_3858.z = _RESERVED_IDENTIFIER_FIXUP_2963.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2976 = _RESERVED_IDENTIFIER_FIXUP_3858.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3864 = _RESERVED_IDENTIFIER_FIXUP_3858;
    _RESERVED_IDENTIFIER_FIXUP_3864.x = _RESERVED_IDENTIFIER_FIXUP_2976.x;
    _RESERVED_IDENTIFIER_FIXUP_3864.y = _RESERVED_IDENTIFIER_FIXUP_2976.y;
    _RESERVED_IDENTIFIER_FIXUP_3864.z = _RESERVED_IDENTIFIER_FIXUP_2976.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3864.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1047 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1056;
    if (_RESERVED_IDENTIFIER_FIXUP_1047)
    {
        _RESERVED_IDENTIFIER_FIXUP_1056 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1056 = _RESERVED_IDENTIFIER_FIXUP_1047;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1056)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1093 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3442.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1119 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3029;
    if (_RESERVED_IDENTIFIER_FIXUP_1093 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3029 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1093), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1119);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3029 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1119);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3029;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2925);
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
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB88 = r0.xyz * v0.xyz;
    r2.x = hdB88.x;
    r2.y = hdB88.y;
    r2.z = hdB88.z;
    vec4 hdB97 = r2;
    vec4 hdB99 = r2;
    vec3 hdB101 = hdB97.xyz + hdB99.xyz;
    r2.x = hdB101.x;
    r2.y = hdB101.y;
    r2.z = hdB101.z;
    vec4 hdB110 = r0;
    vec3 hdB119 = mix(r2.xyz, hdB110.xyz, greaterThanEqual(-r1.www, vec3(0.0)));
    r0.x = hdB119.x;
    r0.y = hdB119.y;
    r0.z = hdB119.z;
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB177 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB177.x;
        r1.y = hdB177.y;
        vec2 hdB189 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB189.x;
        r2.y = hdB189.y;
        vec2 hdB200 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB200.x;
        r3.y = hdB200.y;
        vec2 hdB211 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB211.x;
        r4.y = hdB211.y;
        vec2 hdB222 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB222.x;
        r5.y = hdB222.y;
        vec2 hdB233 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB233.x;
        r6.y = hdB233.y;
        vec2 hdB244 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB244.x;
        r7.y = hdB244.y;
        vec2 hdB255 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB255.x;
        r8.y = hdB255.y;
        vec4 hdB260 = r1;
        vec2 hdB266 = hdB260.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB266.x;
        r1.y = hdB266.y;
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
            vec2 hdB452 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB452.x;
            r1.z = hdB452.y;
            vec2 hdB462 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB462.x;
            r2.y = hdB462.y;
            vec2 hdB472 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB472.x;
            r3.y = hdB472.y;
            vec2 hdB482 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB482.x;
            r4.y = hdB482.y;
            vec2 hdB492 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB492.x;
            r5.y = hdB492.y;
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
                vec2 hdB608 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB608.x;
                r1.z = hdB608.y;
                vec2 hdB618 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB618.x;
                r2.y = hdB618.y;
                vec2 hdB628 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB628.x;
                r3.y = hdB628.y;
                vec2 hdB638 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB638.x;
                r4.y = hdB638.y;
                vec2 hdB648 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB648.x;
                r5.y = hdB648.y;
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
                vec2 hdB756 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB756.x;
                r3.y = hdB756.y;
                vec2 hdB766 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB766.x;
                r4.y = hdB766.y;
                vec2 hdB776 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB776.x;
                r5.y = hdB776.y;
                vec2 hdB786 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB786.x;
                r6.y = hdB786.y;
                vec2 hdB796 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB796.x;
                r7.y = hdB796.y;
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
    vec3 hdB930 = r0.www * v1.xyz;
    r2.x = hdB930.x;
    r2.y = hdB930.y;
    r2.z = hdB930.z;
    vec4 hdB937 = r1;
    vec3 hdB941 = hdB937.xxx * r2.xyz;
    r1.x = hdB941.x;
    r1.z = hdB941.y;
    r1.w = hdB941.z;
    vec4 hdB948 = r0;
    vec3 hdB955 = (hdB948.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB955.x;
    r0.y = hdB955.y;
    r0.z = hdB955.z;
    vec4 hdB962 = r0;
    vec3 hdB969 = hdB962.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB969.x;
    r0.y = hdB969.y;
    r0.z = hdB969.z;
    vec3 hdB984 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB984.x;
    oC0.y = hdB984.y;
    oC0.z = hdB984.z;
    oC0.w = 1.0;
    bool hdB995 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1003;
    if (hdB995)
    {
        hdB1003 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1003 = hdB995;
    }
    if (hdB1003)
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
    bool _3298 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3308;
    if (_3298)
    {
        _3308 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 483u) != 0u;
    }
    else
    {
        _3308 = _3298;
    }
    if (_3308)
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
        bool _3333 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3348;
        if (!_3333)
        {
            _3348 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 483u) != 0u;
        }
        else
        {
            _3348 = _3333;
        }
        if (_3348)
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
