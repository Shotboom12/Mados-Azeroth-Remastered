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
float _RESERVED_IDENTIFIER_FIXUP_1443;
vec4 _RESERVED_IDENTIFIER_FIXUP_1444;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_562 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_565 = _RESERVED_IDENTIFIER_FIXUP_562.xy;
    float _RESERVED_IDENTIFIER_FIXUP_567 = _RESERVED_IDENTIFIER_FIXUP_562.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_565;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_567;
    vec4 _RESERVED_IDENTIFIER_FIXUP_568 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_571 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_575 = _RESERVED_IDENTIFIER_FIXUP_571.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1187;
    _RESERVED_IDENTIFIER_FIXUP_1187.w = _RESERVED_IDENTIFIER_FIXUP_575;
    vec2 _RESERVED_IDENTIFIER_FIXUP_579 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_581 = _RESERVED_IDENTIFIER_FIXUP_579.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1189 = _RESERVED_IDENTIFIER_FIXUP_568;
    _RESERVED_IDENTIFIER_FIXUP_1189.y = _RESERVED_IDENTIFIER_FIXUP_581;
    float _RESERVED_IDENTIFIER_FIXUP_583 = _RESERVED_IDENTIFIER_FIXUP_579.y;
    _RESERVED_IDENTIFIER_FIXUP_1189.z = _RESERVED_IDENTIFIER_FIXUP_583;
    vec2 _RESERVED_IDENTIFIER_FIXUP_589 = _RESERVED_IDENTIFIER_FIXUP_1189.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193 = _RESERVED_IDENTIFIER_FIXUP_1187;
    _RESERVED_IDENTIFIER_FIXUP_1193.x = _RESERVED_IDENTIFIER_FIXUP_589.x;
    _RESERVED_IDENTIFIER_FIXUP_1193.y = _RESERVED_IDENTIFIER_FIXUP_589.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1193.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_575;
    float _RESERVED_IDENTIFIER_FIXUP_604 = _RESERVED_IDENTIFIER_FIXUP_568.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1189.x = _RESERVED_IDENTIFIER_FIXUP_604;
    vec2 _RESERVED_IDENTIFIER_FIXUP_618 = _RESERVED_IDENTIFIER_FIXUP_1189.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1206 = _RESERVED_IDENTIFIER_FIXUP_1187;
    _RESERVED_IDENTIFIER_FIXUP_1206.x = _RESERVED_IDENTIFIER_FIXUP_618.x;
    _RESERVED_IDENTIFIER_FIXUP_1206.y = _RESERVED_IDENTIFIER_FIXUP_618.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1206.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_575;
    float _RESERVED_IDENTIFIER_FIXUP_633 = _RESERVED_IDENTIFIER_FIXUP_604 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1189.x = _RESERVED_IDENTIFIER_FIXUP_633;
    vec2 _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_1189.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_1215.x = _RESERVED_IDENTIFIER_FIXUP_640.x;
    _RESERVED_IDENTIFIER_FIXUP_1215.y = _RESERVED_IDENTIFIER_FIXUP_640.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_650 = _RESERVED_IDENTIFIER_FIXUP_1189.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1219;
    _RESERVED_IDENTIFIER_FIXUP_1219.x = _RESERVED_IDENTIFIER_FIXUP_650.x;
    _RESERVED_IDENTIFIER_FIXUP_1219.y = _RESERVED_IDENTIFIER_FIXUP_650.y;
    _RESERVED_IDENTIFIER_FIXUP_1215.w = _RESERVED_IDENTIFIER_FIXUP_575;
    _RESERVED_IDENTIFIER_FIXUP_1219.w = _RESERVED_IDENTIFIER_FIXUP_575;
    float _RESERVED_IDENTIFIER_FIXUP_704 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_722 = hdTex2(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1215.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_575;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1219.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_575;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1257;
    _RESERVED_IDENTIFIER_FIXUP_1257.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_704 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_633 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_722.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1262;
    _RESERVED_IDENTIFIER_FIXUP_1262.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_744 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_722.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1262.y = _RESERVED_IDENTIFIER_FIXUP_744;
    _RESERVED_IDENTIFIER_FIXUP_1262.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_744;
    vec2 param_11 = texcoord0.xy;
    vec2 param_12 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_773 = _RESERVED_IDENTIFIER_FIXUP_1262.xxx * ((hdTex0(param_11) * _RESERVED_IDENTIFIER_FIXUP_1262.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_722.xxxx * hdTex1(param_12))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1269;
    _RESERVED_IDENTIFIER_FIXUP_1269.x = _RESERVED_IDENTIFIER_FIXUP_773.x;
    _RESERVED_IDENTIFIER_FIXUP_1269.y = _RESERVED_IDENTIFIER_FIXUP_773.y;
    _RESERVED_IDENTIFIER_FIXUP_1269.z = _RESERVED_IDENTIFIER_FIXUP_773.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1275;
    _RESERVED_IDENTIFIER_FIXUP_1275.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1275.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1275.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_795 = _RESERVED_IDENTIFIER_FIXUP_1269.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1443).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1281;
    _RESERVED_IDENTIFIER_FIXUP_1281.x = _RESERVED_IDENTIFIER_FIXUP_795.x;
    _RESERVED_IDENTIFIER_FIXUP_1281.y = _RESERVED_IDENTIFIER_FIXUP_795.y;
    _RESERVED_IDENTIFIER_FIXUP_1281.z = _RESERVED_IDENTIFIER_FIXUP_795.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_806 = _RESERVED_IDENTIFIER_FIXUP_1281.xyz + _RESERVED_IDENTIFIER_FIXUP_1281.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287;
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_806.x;
    _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_806.y;
    _RESERVED_IDENTIFIER_FIXUP_1287.z = _RESERVED_IDENTIFIER_FIXUP_806.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_820 = (_RESERVED_IDENTIFIER_FIXUP_1275.xyz * _RESERVED_IDENTIFIER_FIXUP_1257.xxx) + _RESERVED_IDENTIFIER_FIXUP_1287.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1293.x = _RESERVED_IDENTIFIER_FIXUP_820.x;
    _RESERVED_IDENTIFIER_FIXUP_1293.y = _RESERVED_IDENTIFIER_FIXUP_820.y;
    _RESERVED_IDENTIFIER_FIXUP_1293.z = _RESERVED_IDENTIFIER_FIXUP_820.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_833 = _RESERVED_IDENTIFIER_FIXUP_1293.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_1299.x = _RESERVED_IDENTIFIER_FIXUP_833.x;
    _RESERVED_IDENTIFIER_FIXUP_1299.y = _RESERVED_IDENTIFIER_FIXUP_833.y;
    _RESERVED_IDENTIFIER_FIXUP_1299.z = _RESERVED_IDENTIFIER_FIXUP_833.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_848 = _RESERVED_IDENTIFIER_FIXUP_1299.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1305;
    _RESERVED_IDENTIFIER_FIXUP_1305.x = _RESERVED_IDENTIFIER_FIXUP_848.x;
    _RESERVED_IDENTIFIER_FIXUP_1305.y = _RESERVED_IDENTIFIER_FIXUP_848.y;
    _RESERVED_IDENTIFIER_FIXUP_1305.z = _RESERVED_IDENTIFIER_FIXUP_848.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_565;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_567;
    vec4 _RESERVED_IDENTIFIER_FIXUP_886 = hdLod5(param_13, param_14);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1318 = _RESERVED_IDENTIFIER_FIXUP_886;
    _RESERVED_IDENTIFIER_FIXUP_1318.y = _RESERVED_IDENTIFIER_FIXUP_581;
    _RESERVED_IDENTIFIER_FIXUP_1318.z = _RESERVED_IDENTIFIER_FIXUP_583;
    vec2 _RESERVED_IDENTIFIER_FIXUP_907 = _RESERVED_IDENTIFIER_FIXUP_1318.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1322 = _RESERVED_IDENTIFIER_FIXUP_1187;
    _RESERVED_IDENTIFIER_FIXUP_1322.x = _RESERVED_IDENTIFIER_FIXUP_907.x;
    _RESERVED_IDENTIFIER_FIXUP_1322.y = _RESERVED_IDENTIFIER_FIXUP_907.y;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1322.xy;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_575;
    float _RESERVED_IDENTIFIER_FIXUP_922 = _RESERVED_IDENTIFIER_FIXUP_886.x + hdLod5(param_15, param_16).x;
    _RESERVED_IDENTIFIER_FIXUP_1318.x = _RESERVED_IDENTIFIER_FIXUP_922;
    vec2 _RESERVED_IDENTIFIER_FIXUP_936 = _RESERVED_IDENTIFIER_FIXUP_1318.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1335 = _RESERVED_IDENTIFIER_FIXUP_1187;
    _RESERVED_IDENTIFIER_FIXUP_1335.x = _RESERVED_IDENTIFIER_FIXUP_936.x;
    _RESERVED_IDENTIFIER_FIXUP_1335.y = _RESERVED_IDENTIFIER_FIXUP_936.y;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1335.xy;
    float param_18 = _RESERVED_IDENTIFIER_FIXUP_575;
    float _RESERVED_IDENTIFIER_FIXUP_951 = _RESERVED_IDENTIFIER_FIXUP_922 + hdLod5(param_17, param_18).x;
    _RESERVED_IDENTIFIER_FIXUP_1318.x = _RESERVED_IDENTIFIER_FIXUP_951;
    vec2 _RESERVED_IDENTIFIER_FIXUP_958 = _RESERVED_IDENTIFIER_FIXUP_1318.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344;
    _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_958.x;
    _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_958.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_968 = _RESERVED_IDENTIFIER_FIXUP_1318.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1348;
    _RESERVED_IDENTIFIER_FIXUP_1348.x = _RESERVED_IDENTIFIER_FIXUP_968.x;
    _RESERVED_IDENTIFIER_FIXUP_1348.y = _RESERVED_IDENTIFIER_FIXUP_968.y;
    _RESERVED_IDENTIFIER_FIXUP_1344.w = _RESERVED_IDENTIFIER_FIXUP_575;
    _RESERVED_IDENTIFIER_FIXUP_1348.w = _RESERVED_IDENTIFIER_FIXUP_575;
    vec2 param_19 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1040 = hdTex2(param_19);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1344.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_575;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1348.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_575;
    float _RESERVED_IDENTIFIER_FIXUP_1045 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_704 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_951 + hdLod5(param_20, param_21).x) + hdLod5(param_22, param_23).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1040.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1386;
    _RESERVED_IDENTIFIER_FIXUP_1386.x = _RESERVED_IDENTIFIER_FIXUP_1045;
    float _RESERVED_IDENTIFIER_FIXUP_1050 = (_RESERVED_IDENTIFIER_FIXUP_1045 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1393;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_1050;
    float _RESERVED_IDENTIFIER_FIXUP_1062 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1040.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_1062;
    _RESERVED_IDENTIFIER_FIXUP_1393.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1062;
    vec2 param_24 = texcoord0.xy;
    vec2 param_25 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1086 = (hdTex0(param_24) * _RESERVED_IDENTIFIER_FIXUP_1393.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1040.xxxx * hdTex1(param_25));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1091 = _RESERVED_IDENTIFIER_FIXUP_1393.xxx * _RESERVED_IDENTIFIER_FIXUP_1086.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1400;
    _RESERVED_IDENTIFIER_FIXUP_1400.x = _RESERVED_IDENTIFIER_FIXUP_1091.x;
    _RESERVED_IDENTIFIER_FIXUP_1400.y = _RESERVED_IDENTIFIER_FIXUP_1091.y;
    _RESERVED_IDENTIFIER_FIXUP_1400.z = _RESERVED_IDENTIFIER_FIXUP_1091.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1102 = _RESERVED_IDENTIFIER_FIXUP_1086.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1406;
    _RESERVED_IDENTIFIER_FIXUP_1406.x = _RESERVED_IDENTIFIER_FIXUP_1102.x;
    _RESERVED_IDENTIFIER_FIXUP_1406.y = _RESERVED_IDENTIFIER_FIXUP_1102.y;
    _RESERVED_IDENTIFIER_FIXUP_1406.z = _RESERVED_IDENTIFIER_FIXUP_1102.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1113 = _RESERVED_IDENTIFIER_FIXUP_1400.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1412;
    _RESERVED_IDENTIFIER_FIXUP_1412.x = _RESERVED_IDENTIFIER_FIXUP_1113.x;
    _RESERVED_IDENTIFIER_FIXUP_1412.y = _RESERVED_IDENTIFIER_FIXUP_1113.y;
    _RESERVED_IDENTIFIER_FIXUP_1412.z = _RESERVED_IDENTIFIER_FIXUP_1113.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1124 = _RESERVED_IDENTIFIER_FIXUP_1412.xyz + _RESERVED_IDENTIFIER_FIXUP_1412.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1418;
    _RESERVED_IDENTIFIER_FIXUP_1418.x = _RESERVED_IDENTIFIER_FIXUP_1124.x;
    _RESERVED_IDENTIFIER_FIXUP_1418.y = _RESERVED_IDENTIFIER_FIXUP_1124.y;
    _RESERVED_IDENTIFIER_FIXUP_1418.z = _RESERVED_IDENTIFIER_FIXUP_1124.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1138 = (_RESERVED_IDENTIFIER_FIXUP_1406.xyz * _RESERVED_IDENTIFIER_FIXUP_1386.xxx) + _RESERVED_IDENTIFIER_FIXUP_1418.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1424;
    _RESERVED_IDENTIFIER_FIXUP_1424.x = _RESERVED_IDENTIFIER_FIXUP_1138.x;
    _RESERVED_IDENTIFIER_FIXUP_1424.y = _RESERVED_IDENTIFIER_FIXUP_1138.y;
    _RESERVED_IDENTIFIER_FIXUP_1424.z = _RESERVED_IDENTIFIER_FIXUP_1138.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_1424.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1430;
    _RESERVED_IDENTIFIER_FIXUP_1430.x = _RESERVED_IDENTIFIER_FIXUP_1151.x;
    _RESERVED_IDENTIFIER_FIXUP_1430.y = _RESERVED_IDENTIFIER_FIXUP_1151.y;
    _RESERVED_IDENTIFIER_FIXUP_1430.z = _RESERVED_IDENTIFIER_FIXUP_1151.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1430.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_429 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_438;
    if (_RESERVED_IDENTIFIER_FIXUP_429)
    {
        _RESERVED_IDENTIFIER_FIXUP_438 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_438 = _RESERVED_IDENTIFIER_FIXUP_429;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_438)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_475 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1305.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_502 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1177;
    if (_RESERVED_IDENTIFIER_FIXUP_475 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1177 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_475), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_502);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1177 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_502);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1177;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1050);
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
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB63 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB63.x;
    r1.w = hdB63.y;
    vec2 hdB73 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB73.x;
    r0.z = hdB73.y;
    vec2 hdB95 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB95.x;
    r1.y = hdB95.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB115 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB115.x;
    r1.w = hdB115.y;
    vec2 hdB126 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB126.x;
    r1.y = hdB126.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB149 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB149.x;
    r1.y = hdB149.y;
    vec2 hdB160 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB160.x;
    r2.y = hdB160.y;
    vec2 hdB167 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB167.x;
    r1.w = hdB167.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB186 = vec2(1.0, 0.0) * v4.zx;
    r2.z = hdB186.x;
    r2.w = hdB186.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
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
    vec4 hdB283 = r0;
    vec3 hdB287 = hdB283.xxx * r1.xyz;
    r0.x = hdB287.x;
    r0.y = hdB287.y;
    r0.z = hdB287.z;
    vec4 hdB294 = r1;
    vec3 hdB298 = hdB294.www * v1.xyz;
    r1.x = hdB298.x;
    r1.y = hdB298.y;
    r1.z = hdB298.z;
    vec4 hdB305 = r0;
    vec3 hdB309 = hdB305.xyz * v0.xyz;
    r0.x = hdB309.x;
    r0.y = hdB309.y;
    r0.z = hdB309.z;
    vec4 hdB316 = r0;
    vec4 hdB318 = r0;
    vec3 hdB320 = hdB316.xyz + hdB318.xyz;
    r0.x = hdB320.x;
    r0.y = hdB320.y;
    r0.z = hdB320.z;
    vec4 hdB332 = r0;
    vec3 hdB334 = (r1.xyz * r2.xxx) + hdB332.xyz;
    r0.x = hdB334.x;
    r0.y = hdB334.y;
    r0.z = hdB334.z;
    vec4 hdB341 = r0;
    vec3 hdB348 = hdB341.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB348.x;
    r0.y = hdB348.y;
    r0.z = hdB348.z;
    vec3 hdB363 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB363.x;
    oC0.y = hdB363.y;
    oC0.z = hdB363.z;
    oC0.w = 1.0;
    bool hdB377 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB385;
    if (hdB377)
    {
        hdB385 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB385 = hdB377;
    }
    if (hdB385)
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
    bool _1320 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1330;
    if (_1320)
    {
        _1330 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1330 = _1320;
    }
    if (_1330)
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
        bool _1355 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1370;
        if (!_1355)
        {
            _1370 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1370 = _1355;
        }
        if (_1370)
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
