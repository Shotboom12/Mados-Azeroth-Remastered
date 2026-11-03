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
float _RESERVED_IDENTIFIER_FIXUP_1505;
vec4 _RESERVED_IDENTIFIER_FIXUP_1506;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_575 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_578 = _RESERVED_IDENTIFIER_FIXUP_575.xy;
    float _RESERVED_IDENTIFIER_FIXUP_580 = _RESERVED_IDENTIFIER_FIXUP_575.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_578;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_580;
    vec4 _RESERVED_IDENTIFIER_FIXUP_581 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1221;
    _RESERVED_IDENTIFIER_FIXUP_1221.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_589 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1223;
    _RESERVED_IDENTIFIER_FIXUP_1223.x = _RESERVED_IDENTIFIER_FIXUP_589.x;
    _RESERVED_IDENTIFIER_FIXUP_1223.y = _RESERVED_IDENTIFIER_FIXUP_589.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_599 = _RESERVED_IDENTIFIER_FIXUP_1223.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1227 = _RESERVED_IDENTIFIER_FIXUP_1221;
    _RESERVED_IDENTIFIER_FIXUP_1227.x = _RESERVED_IDENTIFIER_FIXUP_599.x;
    _RESERVED_IDENTIFIER_FIXUP_1227.y = _RESERVED_IDENTIFIER_FIXUP_599.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1227.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_581.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_622 = _RESERVED_IDENTIFIER_FIXUP_1223.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1221;
    _RESERVED_IDENTIFIER_FIXUP_1239.x = _RESERVED_IDENTIFIER_FIXUP_622.x;
    _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_622.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1239.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_581.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_1223.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1247;
    _RESERVED_IDENTIFIER_FIXUP_1247.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
    _RESERVED_IDENTIFIER_FIXUP_1247.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_651 = _RESERVED_IDENTIFIER_FIXUP_1223.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1251;
    _RESERVED_IDENTIFIER_FIXUP_1251.x = _RESERVED_IDENTIFIER_FIXUP_651.x;
    _RESERVED_IDENTIFIER_FIXUP_1251.y = _RESERVED_IDENTIFIER_FIXUP_651.y;
    _RESERVED_IDENTIFIER_FIXUP_1247.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1247.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_581.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1251.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_719 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_737 = hdTex1(param_8);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1302;
    _RESERVED_IDENTIFIER_FIXUP_1302.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_737.xyz, vec3(1.0)), 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_756 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_1302.y = _RESERVED_IDENTIFIER_FIXUP_756;
    vec3 _RESERVED_IDENTIFIER_FIXUP_763 = OptTex0( texcoord0.xyz).xyz;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1251.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1507 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_719 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_581 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_737.w), _RESERVED_IDENTIFIER_FIXUP_763 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1505).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_774 = _RESERVED_IDENTIFIER_FIXUP_1507.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_777 = _RESERVED_IDENTIFIER_FIXUP_774 + _RESERVED_IDENTIFIER_FIXUP_774;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1507;
    _RESERVED_IDENTIFIER_FIXUP_1312.y = _RESERVED_IDENTIFIER_FIXUP_777.x;
    _RESERVED_IDENTIFIER_FIXUP_1312.z = _RESERVED_IDENTIFIER_FIXUP_777.y;
    _RESERVED_IDENTIFIER_FIXUP_1312.w = _RESERVED_IDENTIFIER_FIXUP_777.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_792 = mix(_RESERVED_IDENTIFIER_FIXUP_1312.yzw, _RESERVED_IDENTIFIER_FIXUP_763, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1302.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1318;
    _RESERVED_IDENTIFIER_FIXUP_1318.x = _RESERVED_IDENTIFIER_FIXUP_792.x;
    _RESERVED_IDENTIFIER_FIXUP_1318.y = _RESERVED_IDENTIFIER_FIXUP_792.y;
    _RESERVED_IDENTIFIER_FIXUP_1318.z = _RESERVED_IDENTIFIER_FIXUP_792.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_802 = _RESERVED_IDENTIFIER_FIXUP_1302.xxxx * _RESERVED_IDENTIFIER_FIXUP_1318;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1324;
    _RESERVED_IDENTIFIER_FIXUP_1324.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1324.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1324.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_818 = _RESERVED_IDENTIFIER_FIXUP_1312.xxx * _RESERVED_IDENTIFIER_FIXUP_1324.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1330;
    _RESERVED_IDENTIFIER_FIXUP_1330.x = _RESERVED_IDENTIFIER_FIXUP_818.x;
    _RESERVED_IDENTIFIER_FIXUP_1330.y = _RESERVED_IDENTIFIER_FIXUP_818.y;
    _RESERVED_IDENTIFIER_FIXUP_1330.z = _RESERVED_IDENTIFIER_FIXUP_818.z;
    _RESERVED_IDENTIFIER_FIXUP_802.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_844 = (_RESERVED_IDENTIFIER_FIXUP_802.xyz * _RESERVED_IDENTIFIER_FIXUP_802.www) + _RESERVED_IDENTIFIER_FIXUP_1330.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_844.x;
    _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_844.y;
    _RESERVED_IDENTIFIER_FIXUP_1341.z = _RESERVED_IDENTIFIER_FIXUP_844.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_857 = _RESERVED_IDENTIFIER_FIXUP_1341.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347;
    _RESERVED_IDENTIFIER_FIXUP_1347.x = _RESERVED_IDENTIFIER_FIXUP_857.x;
    _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_857.y;
    _RESERVED_IDENTIFIER_FIXUP_1347.z = _RESERVED_IDENTIFIER_FIXUP_857.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_872 = _RESERVED_IDENTIFIER_FIXUP_1347.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1353;
    _RESERVED_IDENTIFIER_FIXUP_1353.x = _RESERVED_IDENTIFIER_FIXUP_872.x;
    _RESERVED_IDENTIFIER_FIXUP_1353.y = _RESERVED_IDENTIFIER_FIXUP_872.y;
    _RESERVED_IDENTIFIER_FIXUP_1353.z = _RESERVED_IDENTIFIER_FIXUP_872.z;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_578;
    float param_12 = _RESERVED_IDENTIFIER_FIXUP_580;
    vec4 _RESERVED_IDENTIFIER_FIXUP_909 = hdLod5(param_11, param_12);
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1227.xy;
    float param_14 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_909.y = hdLod5(param_13, param_14).x;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1239.xy;
    float param_16 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_909.z = hdLod5(param_15, param_16).x;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1247.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_909.w = hdLod5(param_17, param_18).x;
    vec2 param_19 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1065 = hdTex1(param_19);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1251.xy;
    float param_21 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1070 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_719 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_909 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_20, param_21).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1065.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1445;
    _RESERVED_IDENTIFIER_FIXUP_1445.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1065.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1445.y = _RESERVED_IDENTIFIER_FIXUP_756;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1089 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1091 = _RESERVED_IDENTIFIER_FIXUP_1089.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1508 = vec4(_RESERVED_IDENTIFIER_FIXUP_1070, _RESERVED_IDENTIFIER_FIXUP_1091 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1102 = _RESERVED_IDENTIFIER_FIXUP_1508.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1105 = _RESERVED_IDENTIFIER_FIXUP_1102 + _RESERVED_IDENTIFIER_FIXUP_1102;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1455 = _RESERVED_IDENTIFIER_FIXUP_1508;
    _RESERVED_IDENTIFIER_FIXUP_1455.y = _RESERVED_IDENTIFIER_FIXUP_1105.x;
    _RESERVED_IDENTIFIER_FIXUP_1455.z = _RESERVED_IDENTIFIER_FIXUP_1105.y;
    _RESERVED_IDENTIFIER_FIXUP_1455.w = _RESERVED_IDENTIFIER_FIXUP_1105.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = mix(_RESERVED_IDENTIFIER_FIXUP_1455.yzw, _RESERVED_IDENTIFIER_FIXUP_1091, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1445.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1461 = _RESERVED_IDENTIFIER_FIXUP_1089;
    _RESERVED_IDENTIFIER_FIXUP_1461.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
    _RESERVED_IDENTIFIER_FIXUP_1461.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
    _RESERVED_IDENTIFIER_FIXUP_1461.z = _RESERVED_IDENTIFIER_FIXUP_1120.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1130 = _RESERVED_IDENTIFIER_FIXUP_1445.xxxx * _RESERVED_IDENTIFIER_FIXUP_1461;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1135 = _RESERVED_IDENTIFIER_FIXUP_1130.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1467;
    _RESERVED_IDENTIFIER_FIXUP_1467.x = _RESERVED_IDENTIFIER_FIXUP_1135.x;
    _RESERVED_IDENTIFIER_FIXUP_1467.y = _RESERVED_IDENTIFIER_FIXUP_1135.y;
    _RESERVED_IDENTIFIER_FIXUP_1467.z = _RESERVED_IDENTIFIER_FIXUP_1135.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1455.xxx * _RESERVED_IDENTIFIER_FIXUP_1467.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1473;
    _RESERVED_IDENTIFIER_FIXUP_1473.x = _RESERVED_IDENTIFIER_FIXUP_1146.x;
    _RESERVED_IDENTIFIER_FIXUP_1473.y = _RESERVED_IDENTIFIER_FIXUP_1146.y;
    _RESERVED_IDENTIFIER_FIXUP_1473.z = _RESERVED_IDENTIFIER_FIXUP_1146.z;
    float _RESERVED_IDENTIFIER_FIXUP_1156 = (_RESERVED_IDENTIFIER_FIXUP_1070 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1130.w = _RESERVED_IDENTIFIER_FIXUP_1156;
    _RESERVED_IDENTIFIER_FIXUP_1130.w = _RESERVED_IDENTIFIER_FIXUP_1156;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1172 = (_RESERVED_IDENTIFIER_FIXUP_1130.xyz * _RESERVED_IDENTIFIER_FIXUP_1130.www) + _RESERVED_IDENTIFIER_FIXUP_1473.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1486;
    _RESERVED_IDENTIFIER_FIXUP_1486.x = _RESERVED_IDENTIFIER_FIXUP_1172.x;
    _RESERVED_IDENTIFIER_FIXUP_1486.y = _RESERVED_IDENTIFIER_FIXUP_1172.y;
    _RESERVED_IDENTIFIER_FIXUP_1486.z = _RESERVED_IDENTIFIER_FIXUP_1172.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_1486.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1492;
    _RESERVED_IDENTIFIER_FIXUP_1492.x = _RESERVED_IDENTIFIER_FIXUP_1185.x;
    _RESERVED_IDENTIFIER_FIXUP_1492.y = _RESERVED_IDENTIFIER_FIXUP_1185.y;
    _RESERVED_IDENTIFIER_FIXUP_1492.z = _RESERVED_IDENTIFIER_FIXUP_1185.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1492.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_444 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_453;
    if (_RESERVED_IDENTIFIER_FIXUP_444)
    {
        _RESERVED_IDENTIFIER_FIXUP_453 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_453 = _RESERVED_IDENTIFIER_FIXUP_444;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_453)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_490 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1353.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_516 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211;
    if (_RESERVED_IDENTIFIER_FIXUP_490 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1211 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_490), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_516);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1211 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_516);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1211;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1156);
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
    r0.y = abs(optRegs.rows[optTile*82u+uint(1)].x);
    r1 = OptTex0( v2.xyz);
    vec3 hdB277 = r1.xyz * v0.xyz;
    r2.y = hdB277.x;
    r2.z = hdB277.y;
    r2.w = hdB277.z;
    vec4 hdB284 = r2;
    vec4 hdB286 = r2;
    vec3 hdB288 = hdB284.yzw + hdB286.yzw;
    r2.y = hdB288.x;
    r2.z = hdB288.y;
    r2.w = hdB288.z;
    vec4 hdB297 = r1;
    vec3 hdB305 = mix(r2.yzw, hdB297.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r1.x = hdB305.x;
    r1.y = hdB305.y;
    r1.z = hdB305.z;
    r0 = r0.xxxx * r1;
    vec3 hdB320 = r0.www * v1.xyz;
    r1.x = hdB320.x;
    r1.y = hdB320.y;
    r1.z = hdB320.z;
    vec4 hdB329 = r1;
    vec3 hdB331 = r2.xxx * hdB329.xyz;
    r1.x = hdB331.x;
    r1.y = hdB331.y;
    r1.z = hdB331.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB345 = r0;
    vec4 hdB347 = r0;
    vec3 hdB352 = (hdB345.xyz * hdB347.www) + r1.xyz;
    r0.x = hdB352.x;
    r0.y = hdB352.y;
    r0.z = hdB352.z;
    vec4 hdB359 = r0;
    vec3 hdB366 = hdB359.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB366.x;
    r0.y = hdB366.y;
    r0.z = hdB366.z;
    vec3 hdB381 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB381.x;
    oC0.y = hdB381.y;
    oC0.z = hdB381.z;
    oC0.w = 1.0;
    bool hdB392 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB400;
    if (hdB392)
    {
        hdB400 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB400 = hdB392;
    }
    if (hdB400)
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
    bool _1194 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1204;
    if (_1194)
    {
        _1204 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1204 = _1194;
    }
    if (_1204)
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
        bool _1229 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1244;
        if (!_1229)
        {
            _1244 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1244 = _1229;
        }
        if (_1244)
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
