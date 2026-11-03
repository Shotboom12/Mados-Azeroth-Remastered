#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
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
float _RESERVED_IDENTIFIER_FIXUP_1520;
vec4 _RESERVED_IDENTIFIER_FIXUP_1521;


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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _46 = hdOverride >= 0;
    bool _66;
    if (_46)
    {
        _66 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _66 = _46;
    }
    vec4 _67;
    if (_66)
    {
        _67 = vec4(float(hdOverride));
    }
    else
    {
        _67 = value;
    }
    return _67;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _84 = hdOverride >= 0;
    bool _93;
    if (_84)
    {
        _93 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _93 = _84;
    }
    vec4 _94;
    if (_93)
    {
        _94 = vec4(float(hdOverride));
    }
    else
    {
        _94 = value;
    }
    return _94;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _112 = hdOverride >= 0;
    bool _122;
    if (_112)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _122 = _112;
    }
    vec4 _123;
    if (_122)
    {
        _123 = vec4(float(hdOverride));
    }
    else
    {
        _123 = value;
    }
    return _123;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_577 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_581 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_585 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_581.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1233 = _RESERVED_IDENTIFIER_FIXUP_581;
    _RESERVED_IDENTIFIER_FIXUP_1233.x = _RESERVED_IDENTIFIER_FIXUP_585;
    _RESERVED_IDENTIFIER_FIXUP_1233.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_585;
    vec4 _RESERVED_IDENTIFIER_FIXUP_595 = _RESERVED_IDENTIFIER_FIXUP_577 * _RESERVED_IDENTIFIER_FIXUP_1233.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_602 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1240 = _RESERVED_IDENTIFIER_FIXUP_1233;
    _RESERVED_IDENTIFIER_FIXUP_1240.x = _RESERVED_IDENTIFIER_FIXUP_602;
    float _RESERVED_IDENTIFIER_FIXUP_608 = clamp((_RESERVED_IDENTIFIER_FIXUP_602 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1240.x = _RESERVED_IDENTIFIER_FIXUP_608;
    float _RESERVED_IDENTIFIER_FIXUP_614 = ((-_RESERVED_IDENTIFIER_FIXUP_608) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1240.y = _RESERVED_IDENTIFIER_FIXUP_614;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1523;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1522;
    if (_RESERVED_IDENTIFIER_FIXUP_614 != (-_RESERVED_IDENTIFIER_FIXUP_614))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_626 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1253 = _RESERVED_IDENTIFIER_FIXUP_1240;
        _RESERVED_IDENTIFIER_FIXUP_1253.y = _RESERVED_IDENTIFIER_FIXUP_626.x;
        _RESERVED_IDENTIFIER_FIXUP_1253.z = _RESERVED_IDENTIFIER_FIXUP_626.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_636 = _RESERVED_IDENTIFIER_FIXUP_1253.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1257;
        _RESERVED_IDENTIFIER_FIXUP_1257.x = _RESERVED_IDENTIFIER_FIXUP_636.x;
        _RESERVED_IDENTIFIER_FIXUP_1257.y = _RESERVED_IDENTIFIER_FIXUP_636.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_646 = _RESERVED_IDENTIFIER_FIXUP_1253.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1261;
        _RESERVED_IDENTIFIER_FIXUP_1261.x = _RESERVED_IDENTIFIER_FIXUP_646.x;
        _RESERVED_IDENTIFIER_FIXUP_1261.y = _RESERVED_IDENTIFIER_FIXUP_646.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_1253.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1265;
        _RESERVED_IDENTIFIER_FIXUP_1265.x = _RESERVED_IDENTIFIER_FIXUP_656.x;
        _RESERVED_IDENTIFIER_FIXUP_1265.y = _RESERVED_IDENTIFIER_FIXUP_656.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_666 = _RESERVED_IDENTIFIER_FIXUP_1253.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1269;
        _RESERVED_IDENTIFIER_FIXUP_1269.x = _RESERVED_IDENTIFIER_FIXUP_666.x;
        _RESERVED_IDENTIFIER_FIXUP_1269.y = _RESERVED_IDENTIFIER_FIXUP_666.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_674 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_674.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_674.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_680 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_1257.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1261.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1265.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1269.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1257.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_680.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1261.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_680.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1265.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_680.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_737 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_680 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1269.xy;
        float param_11 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_743 = hdLod5(param_10, param_11).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1253.y = _RESERVED_IDENTIFIER_FIXUP_743;
        float _RESERVED_IDENTIFIER_FIXUP_748 = float(_RESERVED_IDENTIFIER_FIXUP_743 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1253.y = _RESERVED_IDENTIFIER_FIXUP_748;
        float _RESERVED_IDENTIFIER_FIXUP_751 = dot(_RESERVED_IDENTIFIER_FIXUP_737, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1253.z = _RESERVED_IDENTIFIER_FIXUP_751;
        float _RESERVED_IDENTIFIER_FIXUP_757 = _RESERVED_IDENTIFIER_FIXUP_748 + _RESERVED_IDENTIFIER_FIXUP_751;
        _RESERVED_IDENTIFIER_FIXUP_1253.y = _RESERVED_IDENTIFIER_FIXUP_757;
        float _RESERVED_IDENTIFIER_FIXUP_762 = (_RESERVED_IDENTIFIER_FIXUP_757 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1253.y = _RESERVED_IDENTIFIER_FIXUP_762;
        float _RESERVED_IDENTIFIER_FIXUP_769 = (_RESERVED_IDENTIFIER_FIXUP_608 * _RESERVED_IDENTIFIER_FIXUP_762) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1253.x = _RESERVED_IDENTIFIER_FIXUP_769;
        _RESERVED_IDENTIFIER_FIXUP_737.x = min(_RESERVED_IDENTIFIER_FIXUP_769, _RESERVED_IDENTIFIER_FIXUP_581.w);
        _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_1253;
        _RESERVED_IDENTIFIER_FIXUP_1522 = _RESERVED_IDENTIFIER_FIXUP_737;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1251 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1251.x = _RESERVED_IDENTIFIER_FIXUP_581.w;
        _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_1240;
        _RESERVED_IDENTIFIER_FIXUP_1522 = _RESERVED_IDENTIFIER_FIXUP_1251;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_1523;
    _RESERVED_IDENTIFIER_FIXUP_1330.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_798 = _RESERVED_IDENTIFIER_FIXUP_595.xyz * _RESERVED_IDENTIFIER_FIXUP_1330.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1332 = _RESERVED_IDENTIFIER_FIXUP_595;
    _RESERVED_IDENTIFIER_FIXUP_1332.x = _RESERVED_IDENTIFIER_FIXUP_798.x;
    _RESERVED_IDENTIFIER_FIXUP_1332.y = _RESERVED_IDENTIFIER_FIXUP_798.y;
    _RESERVED_IDENTIFIER_FIXUP_1332.z = _RESERVED_IDENTIFIER_FIXUP_798.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_809 = _RESERVED_IDENTIFIER_FIXUP_1332.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1520).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_1332;
    _RESERVED_IDENTIFIER_FIXUP_1338.x = _RESERVED_IDENTIFIER_FIXUP_809.x;
    _RESERVED_IDENTIFIER_FIXUP_1338.y = _RESERVED_IDENTIFIER_FIXUP_809.y;
    _RESERVED_IDENTIFIER_FIXUP_1338.z = _RESERVED_IDENTIFIER_FIXUP_809.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_820 = _RESERVED_IDENTIFIER_FIXUP_1338.xyz + _RESERVED_IDENTIFIER_FIXUP_1338.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_820.x;
    _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_820.y;
    _RESERVED_IDENTIFIER_FIXUP_1344.z = _RESERVED_IDENTIFIER_FIXUP_820.z;
    _RESERVED_IDENTIFIER_FIXUP_1330.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1330.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1330.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_845 = (_RESERVED_IDENTIFIER_FIXUP_1330.xyz * _RESERVED_IDENTIFIER_FIXUP_1522.xxx) + _RESERVED_IDENTIFIER_FIXUP_1344.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1356 = _RESERVED_IDENTIFIER_FIXUP_1344;
    _RESERVED_IDENTIFIER_FIXUP_1356.x = _RESERVED_IDENTIFIER_FIXUP_845.x;
    _RESERVED_IDENTIFIER_FIXUP_1356.y = _RESERVED_IDENTIFIER_FIXUP_845.y;
    _RESERVED_IDENTIFIER_FIXUP_1356.z = _RESERVED_IDENTIFIER_FIXUP_845.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_858 = _RESERVED_IDENTIFIER_FIXUP_1356.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_1356;
    _RESERVED_IDENTIFIER_FIXUP_1362.x = _RESERVED_IDENTIFIER_FIXUP_858.x;
    _RESERVED_IDENTIFIER_FIXUP_1362.y = _RESERVED_IDENTIFIER_FIXUP_858.y;
    _RESERVED_IDENTIFIER_FIXUP_1362.z = _RESERVED_IDENTIFIER_FIXUP_858.z;
    vec2 param_12 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_908 = hdTex0(param_12);
    vec2 param_13 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_912 = hdTex1(param_13);
    float _RESERVED_IDENTIFIER_FIXUP_916 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_912.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_912;
    _RESERVED_IDENTIFIER_FIXUP_1376.x = _RESERVED_IDENTIFIER_FIXUP_916;
    _RESERVED_IDENTIFIER_FIXUP_1376.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_916;
    vec4 _RESERVED_IDENTIFIER_FIXUP_926 = _RESERVED_IDENTIFIER_FIXUP_908 * _RESERVED_IDENTIFIER_FIXUP_1376.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_1376;
    _RESERVED_IDENTIFIER_FIXUP_1383.x = _RESERVED_IDENTIFIER_FIXUP_602;
    float _RESERVED_IDENTIFIER_FIXUP_939 = clamp((_RESERVED_IDENTIFIER_FIXUP_602 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1383.x = _RESERVED_IDENTIFIER_FIXUP_939;
    float _RESERVED_IDENTIFIER_FIXUP_945 = ((-_RESERVED_IDENTIFIER_FIXUP_939) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1383.y = _RESERVED_IDENTIFIER_FIXUP_945;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1527;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1526;
    if (_RESERVED_IDENTIFIER_FIXUP_945 != (-_RESERVED_IDENTIFIER_FIXUP_945))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_957 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1396 = _RESERVED_IDENTIFIER_FIXUP_1383;
        _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_957.x;
        _RESERVED_IDENTIFIER_FIXUP_1396.z = _RESERVED_IDENTIFIER_FIXUP_957.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_967 = _RESERVED_IDENTIFIER_FIXUP_1396.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1400;
        _RESERVED_IDENTIFIER_FIXUP_1400.x = _RESERVED_IDENTIFIER_FIXUP_967.x;
        _RESERVED_IDENTIFIER_FIXUP_1400.y = _RESERVED_IDENTIFIER_FIXUP_967.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_977 = _RESERVED_IDENTIFIER_FIXUP_1396.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1404;
        _RESERVED_IDENTIFIER_FIXUP_1404.x = _RESERVED_IDENTIFIER_FIXUP_977.x;
        _RESERVED_IDENTIFIER_FIXUP_1404.y = _RESERVED_IDENTIFIER_FIXUP_977.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_987 = _RESERVED_IDENTIFIER_FIXUP_1396.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1408;
        _RESERVED_IDENTIFIER_FIXUP_1408.x = _RESERVED_IDENTIFIER_FIXUP_987.x;
        _RESERVED_IDENTIFIER_FIXUP_1408.y = _RESERVED_IDENTIFIER_FIXUP_987.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_997 = _RESERVED_IDENTIFIER_FIXUP_1396.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1412;
        _RESERVED_IDENTIFIER_FIXUP_1412.x = _RESERVED_IDENTIFIER_FIXUP_997.x;
        _RESERVED_IDENTIFIER_FIXUP_1412.y = _RESERVED_IDENTIFIER_FIXUP_997.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1005 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1005.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1005.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1011 = hdLod5(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_1400.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1404.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1408.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1412.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1400.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1011.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1404.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1011.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1408.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1011.w = hdLod5(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1068 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1011 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1412.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1074 = hdLod5(param_22, param_23).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_1074;
        float _RESERVED_IDENTIFIER_FIXUP_1079 = float(_RESERVED_IDENTIFIER_FIXUP_1074 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_1079;
        float _RESERVED_IDENTIFIER_FIXUP_1082 = dot(_RESERVED_IDENTIFIER_FIXUP_1068, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1396.z = _RESERVED_IDENTIFIER_FIXUP_1082;
        float _RESERVED_IDENTIFIER_FIXUP_1088 = _RESERVED_IDENTIFIER_FIXUP_1079 + _RESERVED_IDENTIFIER_FIXUP_1082;
        _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_1088;
        float _RESERVED_IDENTIFIER_FIXUP_1093 = (_RESERVED_IDENTIFIER_FIXUP_1088 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_1093;
        float _RESERVED_IDENTIFIER_FIXUP_1100 = (_RESERVED_IDENTIFIER_FIXUP_939 * _RESERVED_IDENTIFIER_FIXUP_1093) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_1100;
        _RESERVED_IDENTIFIER_FIXUP_1068.x = min(_RESERVED_IDENTIFIER_FIXUP_1100, _RESERVED_IDENTIFIER_FIXUP_912.w);
        _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_1396;
        _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_1068;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1394 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1394.x = _RESERVED_IDENTIFIER_FIXUP_912.w;
        _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_1383;
        _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_1394;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1116 = (_RESERVED_IDENTIFIER_FIXUP_1526.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1471 = _RESERVED_IDENTIFIER_FIXUP_1527;
    _RESERVED_IDENTIFIER_FIXUP_1471.x = _RESERVED_IDENTIFIER_FIXUP_1116;
    _RESERVED_IDENTIFIER_FIXUP_1471.x = _RESERVED_IDENTIFIER_FIXUP_1116;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1129 = _RESERVED_IDENTIFIER_FIXUP_926.xyz * _RESERVED_IDENTIFIER_FIXUP_1471.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_926;
    _RESERVED_IDENTIFIER_FIXUP_1477.x = _RESERVED_IDENTIFIER_FIXUP_1129.x;
    _RESERVED_IDENTIFIER_FIXUP_1477.y = _RESERVED_IDENTIFIER_FIXUP_1129.y;
    _RESERVED_IDENTIFIER_FIXUP_1477.z = _RESERVED_IDENTIFIER_FIXUP_1129.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1140 = _RESERVED_IDENTIFIER_FIXUP_1477.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1483 = _RESERVED_IDENTIFIER_FIXUP_1477;
    _RESERVED_IDENTIFIER_FIXUP_1483.x = _RESERVED_IDENTIFIER_FIXUP_1140.x;
    _RESERVED_IDENTIFIER_FIXUP_1483.y = _RESERVED_IDENTIFIER_FIXUP_1140.y;
    _RESERVED_IDENTIFIER_FIXUP_1483.z = _RESERVED_IDENTIFIER_FIXUP_1140.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_1483.xyz + _RESERVED_IDENTIFIER_FIXUP_1483.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1489 = _RESERVED_IDENTIFIER_FIXUP_1483;
    _RESERVED_IDENTIFIER_FIXUP_1489.x = _RESERVED_IDENTIFIER_FIXUP_1151.x;
    _RESERVED_IDENTIFIER_FIXUP_1489.y = _RESERVED_IDENTIFIER_FIXUP_1151.y;
    _RESERVED_IDENTIFIER_FIXUP_1489.z = _RESERVED_IDENTIFIER_FIXUP_1151.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1162 = _RESERVED_IDENTIFIER_FIXUP_1489.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1471.x = _RESERVED_IDENTIFIER_FIXUP_1162.x;
    _RESERVED_IDENTIFIER_FIXUP_1471.y = _RESERVED_IDENTIFIER_FIXUP_1162.y;
    _RESERVED_IDENTIFIER_FIXUP_1471.z = _RESERVED_IDENTIFIER_FIXUP_1162.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1176 = (_RESERVED_IDENTIFIER_FIXUP_1471.xyz * _RESERVED_IDENTIFIER_FIXUP_1526.xxx) + _RESERVED_IDENTIFIER_FIXUP_1489.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1501 = _RESERVED_IDENTIFIER_FIXUP_1489;
    _RESERVED_IDENTIFIER_FIXUP_1501.x = _RESERVED_IDENTIFIER_FIXUP_1176.x;
    _RESERVED_IDENTIFIER_FIXUP_1501.y = _RESERVED_IDENTIFIER_FIXUP_1176.y;
    _RESERVED_IDENTIFIER_FIXUP_1501.z = _RESERVED_IDENTIFIER_FIXUP_1176.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1189 = _RESERVED_IDENTIFIER_FIXUP_1501.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_1501;
    _RESERVED_IDENTIFIER_FIXUP_1507.x = _RESERVED_IDENTIFIER_FIXUP_1189.x;
    _RESERVED_IDENTIFIER_FIXUP_1507.y = _RESERVED_IDENTIFIER_FIXUP_1189.y;
    _RESERVED_IDENTIFIER_FIXUP_1507.z = _RESERVED_IDENTIFIER_FIXUP_1189.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1507.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_442 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_451;
    if (_RESERVED_IDENTIFIER_FIXUP_442)
    {
        _RESERVED_IDENTIFIER_FIXUP_451 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_451 = _RESERVED_IDENTIFIER_FIXUP_442;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_451)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_488 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1362.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_515 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1226;
    if (_RESERVED_IDENTIFIER_FIXUP_488 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1226 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_488), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_515);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1226 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_515);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1226;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1116);
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
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB112 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB112.x;
        r1.z = hdB112.y;
        vec2 hdB134 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB134.x;
        r2.y = hdB134.y;
        vec2 hdB145 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB145.x;
        r3.y = hdB145.y;
        vec2 hdB156 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB156.x;
        r4.y = hdB156.y;
        vec2 hdB167 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB167.x;
        r5.y = hdB167.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r6.xy;
        float param_3 = r6.w;
        r6 = hdLod5(param_2, param_3);
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
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r1.w);
    }
    else
    {
        r2.x = r1.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB297 = r0;
    vec3 hdB301 = hdB297.xyz * r1.xxx;
    r0.x = hdB301.x;
    r0.y = hdB301.y;
    r0.z = hdB301.z;
    vec4 hdB308 = r0;
    vec3 hdB312 = hdB308.xyz * v0.xyz;
    r0.x = hdB312.x;
    r0.y = hdB312.y;
    r0.z = hdB312.z;
    vec4 hdB319 = r0;
    vec4 hdB321 = r0;
    vec3 hdB323 = hdB319.xyz + hdB321.xyz;
    r0.x = hdB323.x;
    r0.y = hdB323.y;
    r0.z = hdB323.z;
    vec3 hdB334 = r0.www * v1.xyz;
    r1.x = hdB334.x;
    r1.y = hdB334.y;
    r1.z = hdB334.z;
    vec4 hdB346 = r0;
    vec3 hdB348 = (r1.xyz * r2.xxx) + hdB346.xyz;
    r0.x = hdB348.x;
    r0.y = hdB348.y;
    r0.z = hdB348.z;
    vec4 hdB355 = r0;
    vec3 hdB362 = hdB355.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB362.x;
    r0.y = hdB362.y;
    r0.z = hdB362.z;
    vec3 hdB377 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB377.x;
    oC0.y = hdB377.y;
    oC0.z = hdB377.z;
    oC0.w = 1.0;
    bool hdB390 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB398;
    if (hdB390)
    {
        hdB398 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB398 = hdB390;
    }
    if (hdB398)
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
    bool _1379 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1389;
    if (_1379)
    {
        _1389 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1389 = _1379;
    }
    if (_1389)
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
        bool _1414 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1429;
        if (!_1414)
        {
            _1429 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1429 = _1414;
        }
        if (_1429)
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
