#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1431;
vec4 _RESERVED_IDENTIFIER_FIXUP_1432;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _44 = hdOverride >= 0;
    bool _64;
    if (_44)
    {
        _64 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _64 = _44;
    }
    vec4 _65;
    if (_64)
    {
        _65 = vec4(float(hdOverride));
    }
    else
    {
        _65 = value;
    }
    return _65;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _82 = hdOverride >= 0;
    bool _91;
    if (_82)
    {
        _91 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _91 = _82;
    }
    vec4 _92;
    if (_91)
    {
        _92 = vec4(float(hdOverride));
    }
    else
    {
        _92 = value;
    }
    return _92;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_555 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_558 = _RESERVED_IDENTIFIER_FIXUP_555.xy;
    float _RESERVED_IDENTIFIER_FIXUP_560 = _RESERVED_IDENTIFIER_FIXUP_555.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_558;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_560;
    vec4 _RESERVED_IDENTIFIER_FIXUP_561 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1163;
    _RESERVED_IDENTIFIER_FIXUP_1163.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_569 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1165;
    _RESERVED_IDENTIFIER_FIXUP_1165.x = _RESERVED_IDENTIFIER_FIXUP_569.x;
    _RESERVED_IDENTIFIER_FIXUP_1165.y = _RESERVED_IDENTIFIER_FIXUP_569.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_579 = _RESERVED_IDENTIFIER_FIXUP_1165.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1169 = _RESERVED_IDENTIFIER_FIXUP_1163;
    _RESERVED_IDENTIFIER_FIXUP_1169.x = _RESERVED_IDENTIFIER_FIXUP_579.x;
    _RESERVED_IDENTIFIER_FIXUP_1169.y = _RESERVED_IDENTIFIER_FIXUP_579.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1169.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_561.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_602 = _RESERVED_IDENTIFIER_FIXUP_1165.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_1163;
    _RESERVED_IDENTIFIER_FIXUP_1181.x = _RESERVED_IDENTIFIER_FIXUP_602.x;
    _RESERVED_IDENTIFIER_FIXUP_1181.y = _RESERVED_IDENTIFIER_FIXUP_602.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1181.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_561.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_1165.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1189;
    _RESERVED_IDENTIFIER_FIXUP_1189.x = _RESERVED_IDENTIFIER_FIXUP_621.x;
    _RESERVED_IDENTIFIER_FIXUP_1189.y = _RESERVED_IDENTIFIER_FIXUP_621.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_631 = _RESERVED_IDENTIFIER_FIXUP_1165.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193;
    _RESERVED_IDENTIFIER_FIXUP_1193.x = _RESERVED_IDENTIFIER_FIXUP_631.x;
    _RESERVED_IDENTIFIER_FIXUP_1193.y = _RESERVED_IDENTIFIER_FIXUP_631.y;
    _RESERVED_IDENTIFIER_FIXUP_1189.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1189.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_561.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1193.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_699 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_717 = hdTex1(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1193.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1239;
    _RESERVED_IDENTIFIER_FIXUP_1239.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_699 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_561 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_717.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1244;
    _RESERVED_IDENTIFIER_FIXUP_1244.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_717.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1244.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_758 = _RESERVED_IDENTIFIER_FIXUP_1244.yyy * (_RESERVED_IDENTIFIER_FIXUP_1244.xxxx * OptTex0( texcoord0.xyz)).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1251;
    _RESERVED_IDENTIFIER_FIXUP_1251.x = _RESERVED_IDENTIFIER_FIXUP_758.x;
    _RESERVED_IDENTIFIER_FIXUP_1251.y = _RESERVED_IDENTIFIER_FIXUP_758.y;
    _RESERVED_IDENTIFIER_FIXUP_1251.z = _RESERVED_IDENTIFIER_FIXUP_758.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1257;
    _RESERVED_IDENTIFIER_FIXUP_1257.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1257.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1257.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_780 = _RESERVED_IDENTIFIER_FIXUP_1251.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1431).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1263;
    _RESERVED_IDENTIFIER_FIXUP_1263.x = _RESERVED_IDENTIFIER_FIXUP_780.x;
    _RESERVED_IDENTIFIER_FIXUP_1263.y = _RESERVED_IDENTIFIER_FIXUP_780.y;
    _RESERVED_IDENTIFIER_FIXUP_1263.z = _RESERVED_IDENTIFIER_FIXUP_780.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_791 = _RESERVED_IDENTIFIER_FIXUP_1263.xyz + _RESERVED_IDENTIFIER_FIXUP_1263.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1269;
    _RESERVED_IDENTIFIER_FIXUP_1269.x = _RESERVED_IDENTIFIER_FIXUP_791.x;
    _RESERVED_IDENTIFIER_FIXUP_1269.y = _RESERVED_IDENTIFIER_FIXUP_791.y;
    _RESERVED_IDENTIFIER_FIXUP_1269.z = _RESERVED_IDENTIFIER_FIXUP_791.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_805 = (_RESERVED_IDENTIFIER_FIXUP_1257.xyz * _RESERVED_IDENTIFIER_FIXUP_1239.xxx) + _RESERVED_IDENTIFIER_FIXUP_1269.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1275;
    _RESERVED_IDENTIFIER_FIXUP_1275.x = _RESERVED_IDENTIFIER_FIXUP_805.x;
    _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_805.y;
    _RESERVED_IDENTIFIER_FIXUP_1275.z = _RESERVED_IDENTIFIER_FIXUP_805.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_818 = _RESERVED_IDENTIFIER_FIXUP_1275.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1281;
    _RESERVED_IDENTIFIER_FIXUP_1281.x = _RESERVED_IDENTIFIER_FIXUP_818.x;
    _RESERVED_IDENTIFIER_FIXUP_1281.y = _RESERVED_IDENTIFIER_FIXUP_818.y;
    _RESERVED_IDENTIFIER_FIXUP_1281.z = _RESERVED_IDENTIFIER_FIXUP_818.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_833 = _RESERVED_IDENTIFIER_FIXUP_1281.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287;
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_833.x;
    _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_833.y;
    _RESERVED_IDENTIFIER_FIXUP_1287.z = _RESERVED_IDENTIFIER_FIXUP_833.z;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_558;
    float param_12 = _RESERVED_IDENTIFIER_FIXUP_560;
    vec4 _RESERVED_IDENTIFIER_FIXUP_870 = hdLod5(param_11, param_12);
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1169.xy;
    float param_14 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_870.y = hdLod5(param_13, param_14).x;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1181.xy;
    float param_16 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_870.z = hdLod5(param_15, param_16).x;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1189.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_870.w = hdLod5(param_17, param_18).x;
    vec2 param_19 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1026 = hdTex1(param_19);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1193.xy;
    float param_21 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1031 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_699 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_870 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_20, param_21).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1026.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1374;
    _RESERVED_IDENTIFIER_FIXUP_1374.x = _RESERVED_IDENTIFIER_FIXUP_1031;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1379;
    _RESERVED_IDENTIFIER_FIXUP_1379.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1026.xyz, vec3(1.0)), 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_1046 = (_RESERVED_IDENTIFIER_FIXUP_1031 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1379.y = _RESERVED_IDENTIFIER_FIXUP_1046;
    _RESERVED_IDENTIFIER_FIXUP_1379.y = _RESERVED_IDENTIFIER_FIXUP_1046;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1062 = _RESERVED_IDENTIFIER_FIXUP_1379.xxxx * OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1067 = _RESERVED_IDENTIFIER_FIXUP_1379.yyy * _RESERVED_IDENTIFIER_FIXUP_1062.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1388;
    _RESERVED_IDENTIFIER_FIXUP_1388.x = _RESERVED_IDENTIFIER_FIXUP_1067.x;
    _RESERVED_IDENTIFIER_FIXUP_1388.y = _RESERVED_IDENTIFIER_FIXUP_1067.y;
    _RESERVED_IDENTIFIER_FIXUP_1388.z = _RESERVED_IDENTIFIER_FIXUP_1067.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1078 = _RESERVED_IDENTIFIER_FIXUP_1062.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1394;
    _RESERVED_IDENTIFIER_FIXUP_1394.x = _RESERVED_IDENTIFIER_FIXUP_1078.x;
    _RESERVED_IDENTIFIER_FIXUP_1394.y = _RESERVED_IDENTIFIER_FIXUP_1078.y;
    _RESERVED_IDENTIFIER_FIXUP_1394.z = _RESERVED_IDENTIFIER_FIXUP_1078.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1089 = _RESERVED_IDENTIFIER_FIXUP_1388.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1400;
    _RESERVED_IDENTIFIER_FIXUP_1400.x = _RESERVED_IDENTIFIER_FIXUP_1089.x;
    _RESERVED_IDENTIFIER_FIXUP_1400.y = _RESERVED_IDENTIFIER_FIXUP_1089.y;
    _RESERVED_IDENTIFIER_FIXUP_1400.z = _RESERVED_IDENTIFIER_FIXUP_1089.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1100 = _RESERVED_IDENTIFIER_FIXUP_1400.xyz + _RESERVED_IDENTIFIER_FIXUP_1400.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1406;
    _RESERVED_IDENTIFIER_FIXUP_1406.x = _RESERVED_IDENTIFIER_FIXUP_1100.x;
    _RESERVED_IDENTIFIER_FIXUP_1406.y = _RESERVED_IDENTIFIER_FIXUP_1100.y;
    _RESERVED_IDENTIFIER_FIXUP_1406.z = _RESERVED_IDENTIFIER_FIXUP_1100.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1114 = (_RESERVED_IDENTIFIER_FIXUP_1394.xyz * _RESERVED_IDENTIFIER_FIXUP_1374.xxx) + _RESERVED_IDENTIFIER_FIXUP_1406.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1412;
    _RESERVED_IDENTIFIER_FIXUP_1412.x = _RESERVED_IDENTIFIER_FIXUP_1114.x;
    _RESERVED_IDENTIFIER_FIXUP_1412.y = _RESERVED_IDENTIFIER_FIXUP_1114.y;
    _RESERVED_IDENTIFIER_FIXUP_1412.z = _RESERVED_IDENTIFIER_FIXUP_1114.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1127 = _RESERVED_IDENTIFIER_FIXUP_1412.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1418;
    _RESERVED_IDENTIFIER_FIXUP_1418.x = _RESERVED_IDENTIFIER_FIXUP_1127.x;
    _RESERVED_IDENTIFIER_FIXUP_1418.y = _RESERVED_IDENTIFIER_FIXUP_1127.y;
    _RESERVED_IDENTIFIER_FIXUP_1418.z = _RESERVED_IDENTIFIER_FIXUP_1127.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1418.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_423 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_432;
    if (_RESERVED_IDENTIFIER_FIXUP_423)
    {
        _RESERVED_IDENTIFIER_FIXUP_432 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_432 = _RESERVED_IDENTIFIER_FIXUP_423;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_432)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_469 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1287.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_496 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1153;
    if (_RESERVED_IDENTIFIER_FIXUP_469 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1153 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_469), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_496);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1153 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_496);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1153;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1046);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB67 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB67.x;
    r2.y = hdB67.y;
    vec2 hdB90 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB90.x;
    r1.y = hdB90.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB114 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB114.x;
    r1.y = hdB114.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB134 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB134.x;
    r1.y = hdB134.y;
    vec4 hdB139 = r2;
    vec2 hdB145 = hdB139.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB145.x;
    r2.y = hdB145.y;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.w = r1.x;
    r0 += (-v4.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.y = r1.x + (-v4.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v3.xy;
    r1 = hdTex1(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r0.y = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r1 = OptTex0( v2.xyz);
    r1 = r0.xxxx * r1;
    vec4 hdB278 = r0;
    vec3 hdB282 = hdB278.yyy * r1.xyz;
    r0.x = hdB282.x;
    r0.y = hdB282.y;
    r0.z = hdB282.z;
    vec4 hdB289 = r1;
    vec3 hdB293 = hdB289.www * v1.xyz;
    r1.x = hdB293.x;
    r1.y = hdB293.y;
    r1.z = hdB293.z;
    vec4 hdB300 = r0;
    vec3 hdB304 = hdB300.xyz * v0.xyz;
    r0.x = hdB304.x;
    r0.y = hdB304.y;
    r0.z = hdB304.z;
    vec4 hdB311 = r0;
    vec4 hdB313 = r0;
    vec3 hdB315 = hdB311.xyz + hdB313.xyz;
    r0.x = hdB315.x;
    r0.y = hdB315.y;
    r0.z = hdB315.z;
    vec4 hdB327 = r0;
    vec3 hdB329 = (r1.xyz * r2.xxx) + hdB327.xyz;
    r0.x = hdB329.x;
    r0.y = hdB329.y;
    r0.z = hdB329.z;
    vec4 hdB336 = r0;
    vec3 hdB343 = hdB336.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB343.x;
    r0.y = hdB343.y;
    r0.z = hdB343.z;
    vec3 hdB358 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB358.x;
    oC0.y = hdB358.y;
    oC0.z = hdB358.z;
    oC0.w = 1.0;
    bool hdB371 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB379;
    if (hdB371)
    {
        hdB379 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB379 = hdB371;
    }
    if (hdB379)
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
    bool _1127 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1137;
    if (_1127)
    {
        _1137 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1137 = _1127;
    }
    if (_1137)
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
        bool _1162 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1177;
        if (!_1162)
        {
            _1177 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1177 = _1162;
        }
        if (_1177)
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
