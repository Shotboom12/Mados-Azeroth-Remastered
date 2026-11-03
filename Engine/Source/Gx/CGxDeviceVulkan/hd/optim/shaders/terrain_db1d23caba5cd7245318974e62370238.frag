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
float _RESERVED_IDENTIFIER_FIXUP_1412;
vec4 _RESERVED_IDENTIFIER_FIXUP_1413;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_552 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_555 = _RESERVED_IDENTIFIER_FIXUP_552.xy;
    float _RESERVED_IDENTIFIER_FIXUP_557 = _RESERVED_IDENTIFIER_FIXUP_552.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_555;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_557;
    vec4 _RESERVED_IDENTIFIER_FIXUP_558 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_561 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_565 = _RESERVED_IDENTIFIER_FIXUP_561.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1156;
    _RESERVED_IDENTIFIER_FIXUP_1156.w = _RESERVED_IDENTIFIER_FIXUP_565;
    vec2 _RESERVED_IDENTIFIER_FIXUP_569 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_571 = _RESERVED_IDENTIFIER_FIXUP_569.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1158 = _RESERVED_IDENTIFIER_FIXUP_558;
    _RESERVED_IDENTIFIER_FIXUP_1158.y = _RESERVED_IDENTIFIER_FIXUP_571;
    float _RESERVED_IDENTIFIER_FIXUP_573 = _RESERVED_IDENTIFIER_FIXUP_569.y;
    _RESERVED_IDENTIFIER_FIXUP_1158.z = _RESERVED_IDENTIFIER_FIXUP_573;
    vec2 _RESERVED_IDENTIFIER_FIXUP_579 = _RESERVED_IDENTIFIER_FIXUP_1158.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1162 = _RESERVED_IDENTIFIER_FIXUP_1156;
    _RESERVED_IDENTIFIER_FIXUP_1162.x = _RESERVED_IDENTIFIER_FIXUP_579.x;
    _RESERVED_IDENTIFIER_FIXUP_1162.y = _RESERVED_IDENTIFIER_FIXUP_579.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1162.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_565;
    float _RESERVED_IDENTIFIER_FIXUP_594 = _RESERVED_IDENTIFIER_FIXUP_558.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1158.x = _RESERVED_IDENTIFIER_FIXUP_594;
    vec2 _RESERVED_IDENTIFIER_FIXUP_608 = _RESERVED_IDENTIFIER_FIXUP_1158.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1175 = _RESERVED_IDENTIFIER_FIXUP_1156;
    _RESERVED_IDENTIFIER_FIXUP_1175.x = _RESERVED_IDENTIFIER_FIXUP_608.x;
    _RESERVED_IDENTIFIER_FIXUP_1175.y = _RESERVED_IDENTIFIER_FIXUP_608.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1175.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_565;
    float _RESERVED_IDENTIFIER_FIXUP_623 = _RESERVED_IDENTIFIER_FIXUP_594 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1158.x = _RESERVED_IDENTIFIER_FIXUP_623;
    vec2 _RESERVED_IDENTIFIER_FIXUP_630 = _RESERVED_IDENTIFIER_FIXUP_1158.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184;
    _RESERVED_IDENTIFIER_FIXUP_1184.x = _RESERVED_IDENTIFIER_FIXUP_630.x;
    _RESERVED_IDENTIFIER_FIXUP_1184.y = _RESERVED_IDENTIFIER_FIXUP_630.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_1158.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1188;
    _RESERVED_IDENTIFIER_FIXUP_1188.x = _RESERVED_IDENTIFIER_FIXUP_640.x;
    _RESERVED_IDENTIFIER_FIXUP_1188.y = _RESERVED_IDENTIFIER_FIXUP_640.y;
    _RESERVED_IDENTIFIER_FIXUP_1184.w = _RESERVED_IDENTIFIER_FIXUP_565;
    _RESERVED_IDENTIFIER_FIXUP_1188.w = _RESERVED_IDENTIFIER_FIXUP_565;
    float _RESERVED_IDENTIFIER_FIXUP_694 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_712 = hdTex1(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1184.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_565;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1188.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_565;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1226;
    _RESERVED_IDENTIFIER_FIXUP_1226.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_694 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_623 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_712.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1231;
    _RESERVED_IDENTIFIER_FIXUP_1231.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_712.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1231.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_753 = _RESERVED_IDENTIFIER_FIXUP_1231.yyy * (_RESERVED_IDENTIFIER_FIXUP_1231.xxxx * OptTex0( texcoord0.xyz)).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1238;
    _RESERVED_IDENTIFIER_FIXUP_1238.x = _RESERVED_IDENTIFIER_FIXUP_753.x;
    _RESERVED_IDENTIFIER_FIXUP_1238.y = _RESERVED_IDENTIFIER_FIXUP_753.y;
    _RESERVED_IDENTIFIER_FIXUP_1238.z = _RESERVED_IDENTIFIER_FIXUP_753.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1244;
    _RESERVED_IDENTIFIER_FIXUP_1244.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1244.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1244.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = _RESERVED_IDENTIFIER_FIXUP_1238.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1412).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1250;
    _RESERVED_IDENTIFIER_FIXUP_1250.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1250.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1250.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_786 = _RESERVED_IDENTIFIER_FIXUP_1250.xyz + _RESERVED_IDENTIFIER_FIXUP_1250.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1256;
    _RESERVED_IDENTIFIER_FIXUP_1256.x = _RESERVED_IDENTIFIER_FIXUP_786.x;
    _RESERVED_IDENTIFIER_FIXUP_1256.y = _RESERVED_IDENTIFIER_FIXUP_786.y;
    _RESERVED_IDENTIFIER_FIXUP_1256.z = _RESERVED_IDENTIFIER_FIXUP_786.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_800 = (_RESERVED_IDENTIFIER_FIXUP_1244.xyz * _RESERVED_IDENTIFIER_FIXUP_1226.xxx) + _RESERVED_IDENTIFIER_FIXUP_1256.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1262;
    _RESERVED_IDENTIFIER_FIXUP_1262.x = _RESERVED_IDENTIFIER_FIXUP_800.x;
    _RESERVED_IDENTIFIER_FIXUP_1262.y = _RESERVED_IDENTIFIER_FIXUP_800.y;
    _RESERVED_IDENTIFIER_FIXUP_1262.z = _RESERVED_IDENTIFIER_FIXUP_800.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_813 = _RESERVED_IDENTIFIER_FIXUP_1262.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1268;
    _RESERVED_IDENTIFIER_FIXUP_1268.x = _RESERVED_IDENTIFIER_FIXUP_813.x;
    _RESERVED_IDENTIFIER_FIXUP_1268.y = _RESERVED_IDENTIFIER_FIXUP_813.y;
    _RESERVED_IDENTIFIER_FIXUP_1268.z = _RESERVED_IDENTIFIER_FIXUP_813.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_828 = _RESERVED_IDENTIFIER_FIXUP_1268.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1274;
    _RESERVED_IDENTIFIER_FIXUP_1274.x = _RESERVED_IDENTIFIER_FIXUP_828.x;
    _RESERVED_IDENTIFIER_FIXUP_1274.y = _RESERVED_IDENTIFIER_FIXUP_828.y;
    _RESERVED_IDENTIFIER_FIXUP_1274.z = _RESERVED_IDENTIFIER_FIXUP_828.z;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_555;
    float param_12 = _RESERVED_IDENTIFIER_FIXUP_557;
    vec4 _RESERVED_IDENTIFIER_FIXUP_865 = hdLod5(param_11, param_12);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_865;
    _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_571;
    _RESERVED_IDENTIFIER_FIXUP_1287.z = _RESERVED_IDENTIFIER_FIXUP_573;
    vec2 _RESERVED_IDENTIFIER_FIXUP_886 = _RESERVED_IDENTIFIER_FIXUP_1287.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_1156;
    _RESERVED_IDENTIFIER_FIXUP_1291.x = _RESERVED_IDENTIFIER_FIXUP_886.x;
    _RESERVED_IDENTIFIER_FIXUP_1291.y = _RESERVED_IDENTIFIER_FIXUP_886.y;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1291.xy;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_565;
    float _RESERVED_IDENTIFIER_FIXUP_901 = _RESERVED_IDENTIFIER_FIXUP_865.x + hdLod5(param_13, param_14).x;
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_901;
    vec2 _RESERVED_IDENTIFIER_FIXUP_915 = _RESERVED_IDENTIFIER_FIXUP_1287.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1304 = _RESERVED_IDENTIFIER_FIXUP_1156;
    _RESERVED_IDENTIFIER_FIXUP_1304.x = _RESERVED_IDENTIFIER_FIXUP_915.x;
    _RESERVED_IDENTIFIER_FIXUP_1304.y = _RESERVED_IDENTIFIER_FIXUP_915.y;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1304.xy;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_565;
    float _RESERVED_IDENTIFIER_FIXUP_930 = _RESERVED_IDENTIFIER_FIXUP_901 + hdLod5(param_15, param_16).x;
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_930;
    vec2 _RESERVED_IDENTIFIER_FIXUP_937 = _RESERVED_IDENTIFIER_FIXUP_1287.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1313;
    _RESERVED_IDENTIFIER_FIXUP_1313.x = _RESERVED_IDENTIFIER_FIXUP_937.x;
    _RESERVED_IDENTIFIER_FIXUP_1313.y = _RESERVED_IDENTIFIER_FIXUP_937.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_947 = _RESERVED_IDENTIFIER_FIXUP_1287.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1317;
    _RESERVED_IDENTIFIER_FIXUP_1317.x = _RESERVED_IDENTIFIER_FIXUP_947.x;
    _RESERVED_IDENTIFIER_FIXUP_1317.y = _RESERVED_IDENTIFIER_FIXUP_947.y;
    _RESERVED_IDENTIFIER_FIXUP_1313.w = _RESERVED_IDENTIFIER_FIXUP_565;
    _RESERVED_IDENTIFIER_FIXUP_1317.w = _RESERVED_IDENTIFIER_FIXUP_565;
    vec2 param_17 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1019 = hdTex1(param_17);
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1313.xy;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_565;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1317.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_565;
    float _RESERVED_IDENTIFIER_FIXUP_1024 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_694 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_930 + hdLod5(param_18, param_19).x) + hdLod5(param_20, param_21).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1019.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1355;
    _RESERVED_IDENTIFIER_FIXUP_1355.x = _RESERVED_IDENTIFIER_FIXUP_1024;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1360;
    _RESERVED_IDENTIFIER_FIXUP_1360.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1019.xyz, vec3(1.0)), 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_1039 = (_RESERVED_IDENTIFIER_FIXUP_1024 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_1039;
    _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_1039;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1055 = _RESERVED_IDENTIFIER_FIXUP_1360.xxxx * OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1060 = _RESERVED_IDENTIFIER_FIXUP_1360.yyy * _RESERVED_IDENTIFIER_FIXUP_1055.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1369;
    _RESERVED_IDENTIFIER_FIXUP_1369.x = _RESERVED_IDENTIFIER_FIXUP_1060.x;
    _RESERVED_IDENTIFIER_FIXUP_1369.y = _RESERVED_IDENTIFIER_FIXUP_1060.y;
    _RESERVED_IDENTIFIER_FIXUP_1369.z = _RESERVED_IDENTIFIER_FIXUP_1060.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1071 = _RESERVED_IDENTIFIER_FIXUP_1055.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_1071.x;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_1071.y;
    _RESERVED_IDENTIFIER_FIXUP_1375.z = _RESERVED_IDENTIFIER_FIXUP_1071.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1082 = _RESERVED_IDENTIFIER_FIXUP_1369.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381;
    _RESERVED_IDENTIFIER_FIXUP_1381.x = _RESERVED_IDENTIFIER_FIXUP_1082.x;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_1082.y;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = _RESERVED_IDENTIFIER_FIXUP_1082.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1093 = _RESERVED_IDENTIFIER_FIXUP_1381.xyz + _RESERVED_IDENTIFIER_FIXUP_1381.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1387;
    _RESERVED_IDENTIFIER_FIXUP_1387.x = _RESERVED_IDENTIFIER_FIXUP_1093.x;
    _RESERVED_IDENTIFIER_FIXUP_1387.y = _RESERVED_IDENTIFIER_FIXUP_1093.y;
    _RESERVED_IDENTIFIER_FIXUP_1387.z = _RESERVED_IDENTIFIER_FIXUP_1093.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1107 = (_RESERVED_IDENTIFIER_FIXUP_1375.xyz * _RESERVED_IDENTIFIER_FIXUP_1355.xxx) + _RESERVED_IDENTIFIER_FIXUP_1387.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1393;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_1107.x;
    _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_1107.y;
    _RESERVED_IDENTIFIER_FIXUP_1393.z = _RESERVED_IDENTIFIER_FIXUP_1107.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1393.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1399;
    _RESERVED_IDENTIFIER_FIXUP_1399.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
    _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
    _RESERVED_IDENTIFIER_FIXUP_1399.z = _RESERVED_IDENTIFIER_FIXUP_1120.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1399.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_420 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_429;
    if (_RESERVED_IDENTIFIER_FIXUP_420)
    {
        _RESERVED_IDENTIFIER_FIXUP_429 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_429 = _RESERVED_IDENTIFIER_FIXUP_420;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_429)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_466 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1274.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_493 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1146;
    if (_RESERVED_IDENTIFIER_FIXUP_466 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1146 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_466), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_493);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1146 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_493);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1146;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1039);
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
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB62 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB62.x;
    r1.w = hdB62.y;
    vec2 hdB72 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB72.x;
    r0.z = hdB72.y;
    vec2 hdB94 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB94.x;
    r1.y = hdB94.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB114 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB114.x;
    r1.w = hdB114.y;
    vec2 hdB125 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB125.x;
    r1.y = hdB125.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB148 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB148.x;
    r1.y = hdB148.y;
    vec2 hdB159 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB159.x;
    r2.y = hdB159.y;
    vec2 hdB166 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB166.x;
    r1.w = hdB166.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB185 = vec2(1.0, 0.0) * v4.zx;
    r2.z = hdB185.x;
    r2.w = hdB185.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
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
    vec4 hdB274 = r0;
    vec3 hdB278 = hdB274.yyy * r1.xyz;
    r0.x = hdB278.x;
    r0.y = hdB278.y;
    r0.z = hdB278.z;
    vec4 hdB285 = r1;
    vec3 hdB289 = hdB285.www * v1.xyz;
    r1.x = hdB289.x;
    r1.y = hdB289.y;
    r1.z = hdB289.z;
    vec4 hdB296 = r0;
    vec3 hdB300 = hdB296.xyz * v0.xyz;
    r0.x = hdB300.x;
    r0.y = hdB300.y;
    r0.z = hdB300.z;
    vec4 hdB307 = r0;
    vec4 hdB309 = r0;
    vec3 hdB311 = hdB307.xyz + hdB309.xyz;
    r0.x = hdB311.x;
    r0.y = hdB311.y;
    r0.z = hdB311.z;
    vec4 hdB323 = r0;
    vec3 hdB325 = (r1.xyz * r2.xxx) + hdB323.xyz;
    r0.x = hdB325.x;
    r0.y = hdB325.y;
    r0.z = hdB325.z;
    vec4 hdB332 = r0;
    vec3 hdB339 = hdB332.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB339.x;
    r0.y = hdB339.y;
    r0.z = hdB339.z;
    vec3 hdB354 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB354.x;
    oC0.y = hdB354.y;
    oC0.z = hdB354.z;
    oC0.w = 1.0;
    bool hdB368 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB376;
    if (hdB368)
    {
        hdB376 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB376 = hdB368;
    }
    if (hdB376)
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
    bool _1230 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1240;
    if (_1230)
    {
        _1240 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1240 = _1230;
    }
    if (_1240)
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
        bool _1265 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1280;
        if (!_1265)
        {
            _1280 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1280 = _1265;
        }
        if (_1280)
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
