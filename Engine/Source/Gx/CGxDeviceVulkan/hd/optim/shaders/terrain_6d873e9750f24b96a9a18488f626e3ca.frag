#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1415;
vec4 _RESERVED_IDENTIFIER_FIXUP_1416;


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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _47 = hdOverride >= 0;
    bool _67;
    if (_47)
    {
        _67 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _67 = _47;
    }
    vec4 _68;
    if (_67)
    {
        _68 = vec4(float(hdOverride));
    }
    else
    {
        _68 = value;
    }
    return _68;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _85 = hdOverride >= 0;
    bool _95;
    if (_85)
    {
        _95 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _95 = _85;
    }
    vec4 _96;
    if (_95)
    {
        _96 = vec4(float(hdOverride));
    }
    else
    {
        _96 = value;
    }
    return _96;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _113 = hdOverride >= 0;
    bool _122;
    if (_113)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _122 = _113;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_555 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_558 = _RESERVED_IDENTIFIER_FIXUP_555.xy;
    float _RESERVED_IDENTIFIER_FIXUP_560 = _RESERVED_IDENTIFIER_FIXUP_555.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_558;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_560;
    vec4 _RESERVED_IDENTIFIER_FIXUP_561 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1157;
    _RESERVED_IDENTIFIER_FIXUP_1157.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_569 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1159;
    _RESERVED_IDENTIFIER_FIXUP_1159.x = _RESERVED_IDENTIFIER_FIXUP_569.x;
    _RESERVED_IDENTIFIER_FIXUP_1159.y = _RESERVED_IDENTIFIER_FIXUP_569.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_579 = _RESERVED_IDENTIFIER_FIXUP_1159.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1163 = _RESERVED_IDENTIFIER_FIXUP_1157;
    _RESERVED_IDENTIFIER_FIXUP_1163.x = _RESERVED_IDENTIFIER_FIXUP_579.x;
    _RESERVED_IDENTIFIER_FIXUP_1163.y = _RESERVED_IDENTIFIER_FIXUP_579.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1163.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_561.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_602 = _RESERVED_IDENTIFIER_FIXUP_1159.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1175 = _RESERVED_IDENTIFIER_FIXUP_1157;
    _RESERVED_IDENTIFIER_FIXUP_1175.x = _RESERVED_IDENTIFIER_FIXUP_602.x;
    _RESERVED_IDENTIFIER_FIXUP_1175.y = _RESERVED_IDENTIFIER_FIXUP_602.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1175.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_561.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_1159.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1183;
    _RESERVED_IDENTIFIER_FIXUP_1183.x = _RESERVED_IDENTIFIER_FIXUP_621.x;
    _RESERVED_IDENTIFIER_FIXUP_1183.y = _RESERVED_IDENTIFIER_FIXUP_621.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_631 = _RESERVED_IDENTIFIER_FIXUP_1159.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1187;
    _RESERVED_IDENTIFIER_FIXUP_1187.x = _RESERVED_IDENTIFIER_FIXUP_631.x;
    _RESERVED_IDENTIFIER_FIXUP_1187.y = _RESERVED_IDENTIFIER_FIXUP_631.y;
    _RESERVED_IDENTIFIER_FIXUP_1183.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1183.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_561.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1187.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_699 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_717 = hdTex2(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1187.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1233;
    _RESERVED_IDENTIFIER_FIXUP_1233.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_699 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_561 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_717.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1238;
    _RESERVED_IDENTIFIER_FIXUP_1238.x = 1.0;
    vec2 param_11 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_753 = _RESERVED_IDENTIFIER_FIXUP_1238.xxx * mix(OptTex0( texcoord0.xyz), hdTex1(param_11), _RESERVED_IDENTIFIER_FIXUP_717.xxxx).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1240;
    _RESERVED_IDENTIFIER_FIXUP_1240.x = _RESERVED_IDENTIFIER_FIXUP_753.x;
    _RESERVED_IDENTIFIER_FIXUP_1240.y = _RESERVED_IDENTIFIER_FIXUP_753.y;
    _RESERVED_IDENTIFIER_FIXUP_1240.z = _RESERVED_IDENTIFIER_FIXUP_753.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1246;
    _RESERVED_IDENTIFIER_FIXUP_1246.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1246.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1246.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = _RESERVED_IDENTIFIER_FIXUP_1240.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1415).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1252;
    _RESERVED_IDENTIFIER_FIXUP_1252.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1252.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1252.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_786 = _RESERVED_IDENTIFIER_FIXUP_1252.xyz + _RESERVED_IDENTIFIER_FIXUP_1252.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1258;
    _RESERVED_IDENTIFIER_FIXUP_1258.x = _RESERVED_IDENTIFIER_FIXUP_786.x;
    _RESERVED_IDENTIFIER_FIXUP_1258.y = _RESERVED_IDENTIFIER_FIXUP_786.y;
    _RESERVED_IDENTIFIER_FIXUP_1258.z = _RESERVED_IDENTIFIER_FIXUP_786.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_800 = (_RESERVED_IDENTIFIER_FIXUP_1246.xyz * _RESERVED_IDENTIFIER_FIXUP_1233.xxx) + _RESERVED_IDENTIFIER_FIXUP_1258.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1264;
    _RESERVED_IDENTIFIER_FIXUP_1264.x = _RESERVED_IDENTIFIER_FIXUP_800.x;
    _RESERVED_IDENTIFIER_FIXUP_1264.y = _RESERVED_IDENTIFIER_FIXUP_800.y;
    _RESERVED_IDENTIFIER_FIXUP_1264.z = _RESERVED_IDENTIFIER_FIXUP_800.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_813 = _RESERVED_IDENTIFIER_FIXUP_1264.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270;
    _RESERVED_IDENTIFIER_FIXUP_1270.x = _RESERVED_IDENTIFIER_FIXUP_813.x;
    _RESERVED_IDENTIFIER_FIXUP_1270.y = _RESERVED_IDENTIFIER_FIXUP_813.y;
    _RESERVED_IDENTIFIER_FIXUP_1270.z = _RESERVED_IDENTIFIER_FIXUP_813.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_828 = _RESERVED_IDENTIFIER_FIXUP_1270.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1276;
    _RESERVED_IDENTIFIER_FIXUP_1276.x = _RESERVED_IDENTIFIER_FIXUP_828.x;
    _RESERVED_IDENTIFIER_FIXUP_1276.y = _RESERVED_IDENTIFIER_FIXUP_828.y;
    _RESERVED_IDENTIFIER_FIXUP_1276.z = _RESERVED_IDENTIFIER_FIXUP_828.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_558;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_560;
    vec4 _RESERVED_IDENTIFIER_FIXUP_868 = hdLod5(param_12, param_13);
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1163.xy;
    float param_15 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_868.y = hdLod5(param_14, param_15).x;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1175.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_868.z = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1183.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_868.w = hdLod5(param_18, param_19).x;
    vec2 param_20 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1024 = hdTex2(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1187.xy;
    float param_22 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1029 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_699 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_868 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_21, param_22).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1024.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1363;
    _RESERVED_IDENTIFIER_FIXUP_1363.x = _RESERVED_IDENTIFIER_FIXUP_1029;
    float _RESERVED_IDENTIFIER_FIXUP_1034 = (_RESERVED_IDENTIFIER_FIXUP_1029 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1370;
    _RESERVED_IDENTIFIER_FIXUP_1370.x = _RESERVED_IDENTIFIER_FIXUP_1034;
    vec2 param_23 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1055 = mix(OptTex0( texcoord0.xyz), hdTex1(param_23), _RESERVED_IDENTIFIER_FIXUP_1024.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1060 = _RESERVED_IDENTIFIER_FIXUP_1370.xxx * _RESERVED_IDENTIFIER_FIXUP_1055.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1372;
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_1060.x;
    _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_1060.y;
    _RESERVED_IDENTIFIER_FIXUP_1372.z = _RESERVED_IDENTIFIER_FIXUP_1060.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1071 = _RESERVED_IDENTIFIER_FIXUP_1055.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378;
    _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_1071.x;
    _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_1071.y;
    _RESERVED_IDENTIFIER_FIXUP_1378.z = _RESERVED_IDENTIFIER_FIXUP_1071.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1082 = _RESERVED_IDENTIFIER_FIXUP_1372.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = _RESERVED_IDENTIFIER_FIXUP_1082.x;
    _RESERVED_IDENTIFIER_FIXUP_1384.y = _RESERVED_IDENTIFIER_FIXUP_1082.y;
    _RESERVED_IDENTIFIER_FIXUP_1384.z = _RESERVED_IDENTIFIER_FIXUP_1082.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1093 = _RESERVED_IDENTIFIER_FIXUP_1384.xyz + _RESERVED_IDENTIFIER_FIXUP_1384.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1390;
    _RESERVED_IDENTIFIER_FIXUP_1390.x = _RESERVED_IDENTIFIER_FIXUP_1093.x;
    _RESERVED_IDENTIFIER_FIXUP_1390.y = _RESERVED_IDENTIFIER_FIXUP_1093.y;
    _RESERVED_IDENTIFIER_FIXUP_1390.z = _RESERVED_IDENTIFIER_FIXUP_1093.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1107 = (_RESERVED_IDENTIFIER_FIXUP_1378.xyz * _RESERVED_IDENTIFIER_FIXUP_1363.xxx) + _RESERVED_IDENTIFIER_FIXUP_1390.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1396;
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_1107.x;
    _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_1107.y;
    _RESERVED_IDENTIFIER_FIXUP_1396.z = _RESERVED_IDENTIFIER_FIXUP_1107.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1396.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1402;
    _RESERVED_IDENTIFIER_FIXUP_1402.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
    _RESERVED_IDENTIFIER_FIXUP_1402.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
    _RESERVED_IDENTIFIER_FIXUP_1402.z = _RESERVED_IDENTIFIER_FIXUP_1120.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1402.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_421 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_430;
    if (_RESERVED_IDENTIFIER_FIXUP_421)
    {
        _RESERVED_IDENTIFIER_FIXUP_430 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_430 = _RESERVED_IDENTIFIER_FIXUP_421;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_430)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_467 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1276.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_494 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1146;
    if (_RESERVED_IDENTIFIER_FIXUP_467 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1146 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_467), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_494);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1146 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_494);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1146;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1034);
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
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB70 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB70.x;
    r2.y = hdB70.y;
    vec2 hdB93 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB93.x;
    r1.y = hdB93.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB117 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB117.x;
    r1.y = hdB117.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB137 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB137.x;
    r1.y = hdB137.y;
    vec4 hdB142 = r2;
    vec2 hdB148 = hdB142.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB148.x;
    r2.y = hdB148.y;
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
    r3 = OptTex0( v2.xyz);
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    r5 = mix(r3, r4, r1.xxxx);
    vec4 hdB276 = r0;
    vec3 hdB280 = hdB276.xxx * r5.xyz;
    r0.x = hdB280.x;
    r0.y = hdB280.y;
    r0.z = hdB280.z;
    vec3 hdB291 = r5.www * v1.xyz;
    r1.x = hdB291.x;
    r1.y = hdB291.y;
    r1.z = hdB291.z;
    vec4 hdB298 = r0;
    vec3 hdB302 = hdB298.xyz * v0.xyz;
    r0.x = hdB302.x;
    r0.y = hdB302.y;
    r0.z = hdB302.z;
    vec4 hdB309 = r0;
    vec4 hdB311 = r0;
    vec3 hdB313 = hdB309.xyz + hdB311.xyz;
    r0.x = hdB313.x;
    r0.y = hdB313.y;
    r0.z = hdB313.z;
    vec4 hdB325 = r0;
    vec3 hdB327 = (r1.xyz * r2.xxx) + hdB325.xyz;
    r0.x = hdB327.x;
    r0.y = hdB327.y;
    r0.z = hdB327.z;
    vec4 hdB334 = r0;
    vec3 hdB341 = hdB334.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB341.x;
    r0.y = hdB341.y;
    r0.z = hdB341.z;
    vec3 hdB356 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB356.x;
    oC0.y = hdB356.y;
    oC0.z = hdB356.z;
    oC0.w = 1.0;
    bool hdB369 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB377;
    if (hdB369)
    {
        hdB377 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB377 = hdB369;
    }
    if (hdB377)
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
    bool _1147 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1157;
    if (_1147)
    {
        _1157 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1157 = _1147;
    }
    if (_1157)
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
        bool _1182 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1197;
        if (!_1182)
        {
            _1197 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1197 = _1182;
        }
        if (_1197)
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
