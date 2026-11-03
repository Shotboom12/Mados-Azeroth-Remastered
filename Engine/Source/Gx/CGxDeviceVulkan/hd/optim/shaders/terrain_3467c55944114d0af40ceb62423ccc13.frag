#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1462;
vec4 _RESERVED_IDENTIFIER_FIXUP_1463;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _50 = hdOverride >= 0;
    bool _70;
    if (_50)
    {
        _70 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _70 = _50;
    }
    vec4 _71;
    if (_70)
    {
        _71 = vec4(float(hdOverride));
    }
    else
    {
        _71 = value;
    }
    return _71;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _88 = hdOverride >= 0;
    bool _98;
    if (_88)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _98 = _88;
    }
    vec4 _99;
    if (_98)
    {
        _99 = vec4(float(hdOverride));
    }
    else
    {
        _99 = value;
    }
    return _99;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _153 = _143;
    }
    vec4 _154;
    if (_153)
    {
        _154 = vec4(float(hdOverride));
    }
    else
    {
        _154 = value;
    }
    return _154;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _116 = hdOverride >= 0;
    bool _125;
    if (_116)
    {
        _125 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _125 = _116;
    }
    vec4 _126;
    if (_125)
    {
        _126 = vec4(float(hdOverride));
    }
    else
    {
        _126 = value;
    }
    return _126;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_565 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_568 = _RESERVED_IDENTIFIER_FIXUP_565.xy;
    float _RESERVED_IDENTIFIER_FIXUP_570 = _RESERVED_IDENTIFIER_FIXUP_565.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_568;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_570;
    vec4 _RESERVED_IDENTIFIER_FIXUP_571 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1194;
    _RESERVED_IDENTIFIER_FIXUP_1194.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_579 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196;
    _RESERVED_IDENTIFIER_FIXUP_1196.x = _RESERVED_IDENTIFIER_FIXUP_579.x;
    _RESERVED_IDENTIFIER_FIXUP_1196.y = _RESERVED_IDENTIFIER_FIXUP_579.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_589 = _RESERVED_IDENTIFIER_FIXUP_1196.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_1194;
    _RESERVED_IDENTIFIER_FIXUP_1200.x = _RESERVED_IDENTIFIER_FIXUP_589.x;
    _RESERVED_IDENTIFIER_FIXUP_1200.y = _RESERVED_IDENTIFIER_FIXUP_589.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1200.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_571.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_612 = _RESERVED_IDENTIFIER_FIXUP_1196.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1212 = _RESERVED_IDENTIFIER_FIXUP_1194;
    _RESERVED_IDENTIFIER_FIXUP_1212.x = _RESERVED_IDENTIFIER_FIXUP_612.x;
    _RESERVED_IDENTIFIER_FIXUP_1212.y = _RESERVED_IDENTIFIER_FIXUP_612.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1212.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_571.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_631 = _RESERVED_IDENTIFIER_FIXUP_1196.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1220;
    _RESERVED_IDENTIFIER_FIXUP_1220.x = _RESERVED_IDENTIFIER_FIXUP_631.x;
    _RESERVED_IDENTIFIER_FIXUP_1220.y = _RESERVED_IDENTIFIER_FIXUP_631.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_1196.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1224;
    _RESERVED_IDENTIFIER_FIXUP_1224.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
    _RESERVED_IDENTIFIER_FIXUP_1224.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
    _RESERVED_IDENTIFIER_FIXUP_1220.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1220.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_571.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1224.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_709 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_727 = hdTex2(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1224.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270;
    _RESERVED_IDENTIFIER_FIXUP_1270.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_709 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_571 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_727.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1275;
    _RESERVED_IDENTIFIER_FIXUP_1275.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_749 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_727.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_749;
    _RESERVED_IDENTIFIER_FIXUP_1275.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_749;
    vec2 param_11 = texcoord0.xy;
    vec2 param_12 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_778 = _RESERVED_IDENTIFIER_FIXUP_1275.xxx * ((hdTex0(param_11) * _RESERVED_IDENTIFIER_FIXUP_1275.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_727.xxxx * hdTex1(param_12))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1282;
    _RESERVED_IDENTIFIER_FIXUP_1282.x = _RESERVED_IDENTIFIER_FIXUP_778.x;
    _RESERVED_IDENTIFIER_FIXUP_1282.y = _RESERVED_IDENTIFIER_FIXUP_778.y;
    _RESERVED_IDENTIFIER_FIXUP_1282.z = _RESERVED_IDENTIFIER_FIXUP_778.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1288;
    _RESERVED_IDENTIFIER_FIXUP_1288.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1288.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1288.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_800 = _RESERVED_IDENTIFIER_FIXUP_1282.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1462).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1294;
    _RESERVED_IDENTIFIER_FIXUP_1294.x = _RESERVED_IDENTIFIER_FIXUP_800.x;
    _RESERVED_IDENTIFIER_FIXUP_1294.y = _RESERVED_IDENTIFIER_FIXUP_800.y;
    _RESERVED_IDENTIFIER_FIXUP_1294.z = _RESERVED_IDENTIFIER_FIXUP_800.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_811 = _RESERVED_IDENTIFIER_FIXUP_1294.xyz + _RESERVED_IDENTIFIER_FIXUP_1294.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1300;
    _RESERVED_IDENTIFIER_FIXUP_1300.x = _RESERVED_IDENTIFIER_FIXUP_811.x;
    _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_811.y;
    _RESERVED_IDENTIFIER_FIXUP_1300.z = _RESERVED_IDENTIFIER_FIXUP_811.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = (_RESERVED_IDENTIFIER_FIXUP_1288.xyz * _RESERVED_IDENTIFIER_FIXUP_1270.xxx) + _RESERVED_IDENTIFIER_FIXUP_1300.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1306;
    _RESERVED_IDENTIFIER_FIXUP_1306.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1306.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1306.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_838 = _RESERVED_IDENTIFIER_FIXUP_1306.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_838.x;
    _RESERVED_IDENTIFIER_FIXUP_1312.y = _RESERVED_IDENTIFIER_FIXUP_838.y;
    _RESERVED_IDENTIFIER_FIXUP_1312.z = _RESERVED_IDENTIFIER_FIXUP_838.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_853 = _RESERVED_IDENTIFIER_FIXUP_1312.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1318;
    _RESERVED_IDENTIFIER_FIXUP_1318.x = _RESERVED_IDENTIFIER_FIXUP_853.x;
    _RESERVED_IDENTIFIER_FIXUP_1318.y = _RESERVED_IDENTIFIER_FIXUP_853.y;
    _RESERVED_IDENTIFIER_FIXUP_1318.z = _RESERVED_IDENTIFIER_FIXUP_853.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_568;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_570;
    vec4 _RESERVED_IDENTIFIER_FIXUP_891 = hdLod5(param_13, param_14);
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1200.xy;
    float param_16 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_891.y = hdLod5(param_15, param_16).x;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1212.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_891.z = hdLod5(param_17, param_18).x;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1220.xy;
    float param_20 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_891.w = hdLod5(param_19, param_20).x;
    vec2 param_21 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1047 = hdTex2(param_21);
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1224.xy;
    float param_23 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1052 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_709 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_891 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_22, param_23).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1047.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1405;
    _RESERVED_IDENTIFIER_FIXUP_1405.x = _RESERVED_IDENTIFIER_FIXUP_1052;
    float _RESERVED_IDENTIFIER_FIXUP_1057 = (_RESERVED_IDENTIFIER_FIXUP_1052 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1412;
    _RESERVED_IDENTIFIER_FIXUP_1412.x = _RESERVED_IDENTIFIER_FIXUP_1057;
    float _RESERVED_IDENTIFIER_FIXUP_1069 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1047.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1412.y = _RESERVED_IDENTIFIER_FIXUP_1069;
    _RESERVED_IDENTIFIER_FIXUP_1412.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1069;
    vec2 param_24 = texcoord0.xy;
    vec2 param_25 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1093 = (hdTex0(param_24) * _RESERVED_IDENTIFIER_FIXUP_1412.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1047.xxxx * hdTex1(param_25));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1098 = _RESERVED_IDENTIFIER_FIXUP_1412.xxx * _RESERVED_IDENTIFIER_FIXUP_1093.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1419;
    _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_1098.x;
    _RESERVED_IDENTIFIER_FIXUP_1419.y = _RESERVED_IDENTIFIER_FIXUP_1098.y;
    _RESERVED_IDENTIFIER_FIXUP_1419.z = _RESERVED_IDENTIFIER_FIXUP_1098.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1109 = _RESERVED_IDENTIFIER_FIXUP_1093.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1425;
    _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_1109.x;
    _RESERVED_IDENTIFIER_FIXUP_1425.y = _RESERVED_IDENTIFIER_FIXUP_1109.y;
    _RESERVED_IDENTIFIER_FIXUP_1425.z = _RESERVED_IDENTIFIER_FIXUP_1109.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1419.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1431;
    _RESERVED_IDENTIFIER_FIXUP_1431.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
    _RESERVED_IDENTIFIER_FIXUP_1431.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
    _RESERVED_IDENTIFIER_FIXUP_1431.z = _RESERVED_IDENTIFIER_FIXUP_1120.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1131 = _RESERVED_IDENTIFIER_FIXUP_1431.xyz + _RESERVED_IDENTIFIER_FIXUP_1431.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437;
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_1131.x;
    _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_1131.y;
    _RESERVED_IDENTIFIER_FIXUP_1437.z = _RESERVED_IDENTIFIER_FIXUP_1131.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1145 = (_RESERVED_IDENTIFIER_FIXUP_1425.xyz * _RESERVED_IDENTIFIER_FIXUP_1405.xxx) + _RESERVED_IDENTIFIER_FIXUP_1437.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1443;
    _RESERVED_IDENTIFIER_FIXUP_1443.x = _RESERVED_IDENTIFIER_FIXUP_1145.x;
    _RESERVED_IDENTIFIER_FIXUP_1443.y = _RESERVED_IDENTIFIER_FIXUP_1145.y;
    _RESERVED_IDENTIFIER_FIXUP_1443.z = _RESERVED_IDENTIFIER_FIXUP_1145.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1158 = _RESERVED_IDENTIFIER_FIXUP_1443.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1449;
    _RESERVED_IDENTIFIER_FIXUP_1449.x = _RESERVED_IDENTIFIER_FIXUP_1158.x;
    _RESERVED_IDENTIFIER_FIXUP_1449.y = _RESERVED_IDENTIFIER_FIXUP_1158.y;
    _RESERVED_IDENTIFIER_FIXUP_1449.z = _RESERVED_IDENTIFIER_FIXUP_1158.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1449.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_432 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_441;
    if (_RESERVED_IDENTIFIER_FIXUP_432)
    {
        _RESERVED_IDENTIFIER_FIXUP_441 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_441 = _RESERVED_IDENTIFIER_FIXUP_432;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_441)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_478 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1318.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_505 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184;
    if (_RESERVED_IDENTIFIER_FIXUP_478 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1184 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_478), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_505);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1184 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_505);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1184;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1057);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
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
    vec2 hdB68 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB68.x;
    r2.y = hdB68.y;
    vec2 hdB91 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB91.x;
    r1.y = hdB91.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB115 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB115.x;
    r1.y = hdB115.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB135 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB135.x;
    r1.y = hdB135.y;
    vec4 hdB140 = r2;
    vec2 hdB146 = hdB140.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB146.x;
    r2.y = hdB146.y;
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
    vec2 param_10 = v3.wz;
    r1 = hdTex2(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r0.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.y = (-r0.y) + 1.0;
    vec2 param_11 = v3.xy;
    r3 = hdTex1(param_11);
    r1 = r1.xxxx * r3;
    vec2 param_12 = v2.xy;
    r3 = hdTex0(param_12);
    r1 = (r3 * r0.yyyy) + r1;
    vec4 hdB287 = r0;
    vec3 hdB291 = hdB287.xxx * r1.xyz;
    r0.x = hdB291.x;
    r0.y = hdB291.y;
    r0.z = hdB291.z;
    vec4 hdB298 = r1;
    vec3 hdB302 = hdB298.www * v1.xyz;
    r1.x = hdB302.x;
    r1.y = hdB302.y;
    r1.z = hdB302.z;
    vec4 hdB309 = r0;
    vec3 hdB313 = hdB309.xyz * v0.xyz;
    r0.x = hdB313.x;
    r0.y = hdB313.y;
    r0.z = hdB313.z;
    vec4 hdB320 = r0;
    vec4 hdB322 = r0;
    vec3 hdB324 = hdB320.xyz + hdB322.xyz;
    r0.x = hdB324.x;
    r0.y = hdB324.y;
    r0.z = hdB324.z;
    vec4 hdB336 = r0;
    vec3 hdB338 = (r1.xyz * r2.xxx) + hdB336.xyz;
    r0.x = hdB338.x;
    r0.y = hdB338.y;
    r0.z = hdB338.z;
    vec4 hdB345 = r0;
    vec3 hdB352 = hdB345.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB352.x;
    r0.y = hdB352.y;
    r0.z = hdB352.z;
    vec3 hdB367 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB367.x;
    oC0.y = hdB367.y;
    oC0.z = hdB367.z;
    oC0.w = 1.0;
    bool hdB380 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB388;
    if (hdB380)
    {
        hdB388 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB388 = hdB380;
    }
    if (hdB388)
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
    bool _1217 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1227;
    if (_1217)
    {
        _1227 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1227 = _1217;
    }
    if (_1227)
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
        bool _1252 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1267;
        if (!_1252)
        {
            _1267 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1267 = _1252;
        }
        if (_1267)
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
