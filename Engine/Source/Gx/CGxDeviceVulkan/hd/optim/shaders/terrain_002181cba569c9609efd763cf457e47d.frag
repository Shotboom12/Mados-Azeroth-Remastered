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
float _RESERVED_IDENTIFIER_FIXUP_1397;
vec4 _RESERVED_IDENTIFIER_FIXUP_1398;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_553 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_556 = _RESERVED_IDENTIFIER_FIXUP_553.xy;
    float _RESERVED_IDENTIFIER_FIXUP_558 = _RESERVED_IDENTIFIER_FIXUP_553.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_556;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_558;
    vec4 _RESERVED_IDENTIFIER_FIXUP_559 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_562 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_566 = _RESERVED_IDENTIFIER_FIXUP_562.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1151;
    _RESERVED_IDENTIFIER_FIXUP_1151.w = _RESERVED_IDENTIFIER_FIXUP_566;
    vec2 _RESERVED_IDENTIFIER_FIXUP_570 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_572 = _RESERVED_IDENTIFIER_FIXUP_570.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_559;
    _RESERVED_IDENTIFIER_FIXUP_1153.y = _RESERVED_IDENTIFIER_FIXUP_572;
    float _RESERVED_IDENTIFIER_FIXUP_574 = _RESERVED_IDENTIFIER_FIXUP_570.y;
    _RESERVED_IDENTIFIER_FIXUP_1153.z = _RESERVED_IDENTIFIER_FIXUP_574;
    vec2 _RESERVED_IDENTIFIER_FIXUP_580 = _RESERVED_IDENTIFIER_FIXUP_1153.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1157 = _RESERVED_IDENTIFIER_FIXUP_1151;
    _RESERVED_IDENTIFIER_FIXUP_1157.x = _RESERVED_IDENTIFIER_FIXUP_580.x;
    _RESERVED_IDENTIFIER_FIXUP_1157.y = _RESERVED_IDENTIFIER_FIXUP_580.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1157.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_566;
    float _RESERVED_IDENTIFIER_FIXUP_595 = _RESERVED_IDENTIFIER_FIXUP_559.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1153.x = _RESERVED_IDENTIFIER_FIXUP_595;
    vec2 _RESERVED_IDENTIFIER_FIXUP_609 = _RESERVED_IDENTIFIER_FIXUP_1153.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1170 = _RESERVED_IDENTIFIER_FIXUP_1151;
    _RESERVED_IDENTIFIER_FIXUP_1170.x = _RESERVED_IDENTIFIER_FIXUP_609.x;
    _RESERVED_IDENTIFIER_FIXUP_1170.y = _RESERVED_IDENTIFIER_FIXUP_609.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1170.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_566;
    float _RESERVED_IDENTIFIER_FIXUP_624 = _RESERVED_IDENTIFIER_FIXUP_595 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1153.x = _RESERVED_IDENTIFIER_FIXUP_624;
    vec2 _RESERVED_IDENTIFIER_FIXUP_631 = _RESERVED_IDENTIFIER_FIXUP_1153.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1179;
    _RESERVED_IDENTIFIER_FIXUP_1179.x = _RESERVED_IDENTIFIER_FIXUP_631.x;
    _RESERVED_IDENTIFIER_FIXUP_1179.y = _RESERVED_IDENTIFIER_FIXUP_631.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_1153.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1183;
    _RESERVED_IDENTIFIER_FIXUP_1183.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
    _RESERVED_IDENTIFIER_FIXUP_1183.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
    _RESERVED_IDENTIFIER_FIXUP_1179.w = _RESERVED_IDENTIFIER_FIXUP_566;
    _RESERVED_IDENTIFIER_FIXUP_1183.w = _RESERVED_IDENTIFIER_FIXUP_566;
    float _RESERVED_IDENTIFIER_FIXUP_695 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_713 = hdTex2(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1179.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_566;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1183.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_566;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1221;
    _RESERVED_IDENTIFIER_FIXUP_1221.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_695 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_624 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_713.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1226;
    _RESERVED_IDENTIFIER_FIXUP_1226.x = 1.0;
    vec2 param_11 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_749 = _RESERVED_IDENTIFIER_FIXUP_1226.xxx * mix(OptTex0( texcoord0.xyz), hdTex1(param_11), _RESERVED_IDENTIFIER_FIXUP_713.xxxx).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1228;
    _RESERVED_IDENTIFIER_FIXUP_1228.x = _RESERVED_IDENTIFIER_FIXUP_749.x;
    _RESERVED_IDENTIFIER_FIXUP_1228.y = _RESERVED_IDENTIFIER_FIXUP_749.y;
    _RESERVED_IDENTIFIER_FIXUP_1228.z = _RESERVED_IDENTIFIER_FIXUP_749.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1234;
    _RESERVED_IDENTIFIER_FIXUP_1234.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1234.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1234.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_771 = _RESERVED_IDENTIFIER_FIXUP_1228.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1397).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1240;
    _RESERVED_IDENTIFIER_FIXUP_1240.x = _RESERVED_IDENTIFIER_FIXUP_771.x;
    _RESERVED_IDENTIFIER_FIXUP_1240.y = _RESERVED_IDENTIFIER_FIXUP_771.y;
    _RESERVED_IDENTIFIER_FIXUP_1240.z = _RESERVED_IDENTIFIER_FIXUP_771.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_782 = _RESERVED_IDENTIFIER_FIXUP_1240.xyz + _RESERVED_IDENTIFIER_FIXUP_1240.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1246;
    _RESERVED_IDENTIFIER_FIXUP_1246.x = _RESERVED_IDENTIFIER_FIXUP_782.x;
    _RESERVED_IDENTIFIER_FIXUP_1246.y = _RESERVED_IDENTIFIER_FIXUP_782.y;
    _RESERVED_IDENTIFIER_FIXUP_1246.z = _RESERVED_IDENTIFIER_FIXUP_782.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_796 = (_RESERVED_IDENTIFIER_FIXUP_1234.xyz * _RESERVED_IDENTIFIER_FIXUP_1221.xxx) + _RESERVED_IDENTIFIER_FIXUP_1246.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1252;
    _RESERVED_IDENTIFIER_FIXUP_1252.x = _RESERVED_IDENTIFIER_FIXUP_796.x;
    _RESERVED_IDENTIFIER_FIXUP_1252.y = _RESERVED_IDENTIFIER_FIXUP_796.y;
    _RESERVED_IDENTIFIER_FIXUP_1252.z = _RESERVED_IDENTIFIER_FIXUP_796.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_809 = _RESERVED_IDENTIFIER_FIXUP_1252.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1258;
    _RESERVED_IDENTIFIER_FIXUP_1258.x = _RESERVED_IDENTIFIER_FIXUP_809.x;
    _RESERVED_IDENTIFIER_FIXUP_1258.y = _RESERVED_IDENTIFIER_FIXUP_809.y;
    _RESERVED_IDENTIFIER_FIXUP_1258.z = _RESERVED_IDENTIFIER_FIXUP_809.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_824 = _RESERVED_IDENTIFIER_FIXUP_1258.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1264;
    _RESERVED_IDENTIFIER_FIXUP_1264.x = _RESERVED_IDENTIFIER_FIXUP_824.x;
    _RESERVED_IDENTIFIER_FIXUP_1264.y = _RESERVED_IDENTIFIER_FIXUP_824.y;
    _RESERVED_IDENTIFIER_FIXUP_1264.z = _RESERVED_IDENTIFIER_FIXUP_824.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_556;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_558;
    vec4 _RESERVED_IDENTIFIER_FIXUP_864 = hdLod5(param_12, param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1277 = _RESERVED_IDENTIFIER_FIXUP_864;
    _RESERVED_IDENTIFIER_FIXUP_1277.y = _RESERVED_IDENTIFIER_FIXUP_572;
    _RESERVED_IDENTIFIER_FIXUP_1277.z = _RESERVED_IDENTIFIER_FIXUP_574;
    vec2 _RESERVED_IDENTIFIER_FIXUP_885 = _RESERVED_IDENTIFIER_FIXUP_1277.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1281 = _RESERVED_IDENTIFIER_FIXUP_1151;
    _RESERVED_IDENTIFIER_FIXUP_1281.x = _RESERVED_IDENTIFIER_FIXUP_885.x;
    _RESERVED_IDENTIFIER_FIXUP_1281.y = _RESERVED_IDENTIFIER_FIXUP_885.y;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1281.xy;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_566;
    float _RESERVED_IDENTIFIER_FIXUP_900 = _RESERVED_IDENTIFIER_FIXUP_864.x + hdLod5(param_14, param_15).x;
    _RESERVED_IDENTIFIER_FIXUP_1277.x = _RESERVED_IDENTIFIER_FIXUP_900;
    vec2 _RESERVED_IDENTIFIER_FIXUP_914 = _RESERVED_IDENTIFIER_FIXUP_1277.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_1151;
    _RESERVED_IDENTIFIER_FIXUP_1294.x = _RESERVED_IDENTIFIER_FIXUP_914.x;
    _RESERVED_IDENTIFIER_FIXUP_1294.y = _RESERVED_IDENTIFIER_FIXUP_914.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1294.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_566;
    float _RESERVED_IDENTIFIER_FIXUP_929 = _RESERVED_IDENTIFIER_FIXUP_900 + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1277.x = _RESERVED_IDENTIFIER_FIXUP_929;
    vec2 _RESERVED_IDENTIFIER_FIXUP_936 = _RESERVED_IDENTIFIER_FIXUP_1277.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_936.x;
    _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_936.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_946 = _RESERVED_IDENTIFIER_FIXUP_1277.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1307;
    _RESERVED_IDENTIFIER_FIXUP_1307.x = _RESERVED_IDENTIFIER_FIXUP_946.x;
    _RESERVED_IDENTIFIER_FIXUP_1307.y = _RESERVED_IDENTIFIER_FIXUP_946.y;
    _RESERVED_IDENTIFIER_FIXUP_1303.w = _RESERVED_IDENTIFIER_FIXUP_566;
    _RESERVED_IDENTIFIER_FIXUP_1307.w = _RESERVED_IDENTIFIER_FIXUP_566;
    vec2 param_18 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1018 = hdTex2(param_18);
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1303.xy;
    float param_20 = _RESERVED_IDENTIFIER_FIXUP_566;
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1307.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_566;
    float _RESERVED_IDENTIFIER_FIXUP_1023 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_695 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_929 + hdLod5(param_19, param_20).x) + hdLod5(param_21, param_22).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1018.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1345;
    _RESERVED_IDENTIFIER_FIXUP_1345.x = _RESERVED_IDENTIFIER_FIXUP_1023;
    float _RESERVED_IDENTIFIER_FIXUP_1028 = (_RESERVED_IDENTIFIER_FIXUP_1023 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1352;
    _RESERVED_IDENTIFIER_FIXUP_1352.x = _RESERVED_IDENTIFIER_FIXUP_1028;
    vec2 param_23 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1049 = mix(OptTex0( texcoord0.xyz), hdTex1(param_23), _RESERVED_IDENTIFIER_FIXUP_1018.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1054 = _RESERVED_IDENTIFIER_FIXUP_1352.xxx * _RESERVED_IDENTIFIER_FIXUP_1049.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1354;
    _RESERVED_IDENTIFIER_FIXUP_1354.x = _RESERVED_IDENTIFIER_FIXUP_1054.x;
    _RESERVED_IDENTIFIER_FIXUP_1354.y = _RESERVED_IDENTIFIER_FIXUP_1054.y;
    _RESERVED_IDENTIFIER_FIXUP_1354.z = _RESERVED_IDENTIFIER_FIXUP_1054.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1065 = _RESERVED_IDENTIFIER_FIXUP_1049.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1360;
    _RESERVED_IDENTIFIER_FIXUP_1360.x = _RESERVED_IDENTIFIER_FIXUP_1065.x;
    _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_1065.y;
    _RESERVED_IDENTIFIER_FIXUP_1360.z = _RESERVED_IDENTIFIER_FIXUP_1065.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1076 = _RESERVED_IDENTIFIER_FIXUP_1354.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1366;
    _RESERVED_IDENTIFIER_FIXUP_1366.x = _RESERVED_IDENTIFIER_FIXUP_1076.x;
    _RESERVED_IDENTIFIER_FIXUP_1366.y = _RESERVED_IDENTIFIER_FIXUP_1076.y;
    _RESERVED_IDENTIFIER_FIXUP_1366.z = _RESERVED_IDENTIFIER_FIXUP_1076.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1087 = _RESERVED_IDENTIFIER_FIXUP_1366.xyz + _RESERVED_IDENTIFIER_FIXUP_1366.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1372;
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_1087.x;
    _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_1087.y;
    _RESERVED_IDENTIFIER_FIXUP_1372.z = _RESERVED_IDENTIFIER_FIXUP_1087.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1101 = (_RESERVED_IDENTIFIER_FIXUP_1360.xyz * _RESERVED_IDENTIFIER_FIXUP_1345.xxx) + _RESERVED_IDENTIFIER_FIXUP_1372.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378;
    _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_1101.x;
    _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_1101.y;
    _RESERVED_IDENTIFIER_FIXUP_1378.z = _RESERVED_IDENTIFIER_FIXUP_1101.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_1378.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = _RESERVED_IDENTIFIER_FIXUP_1114.x;
    _RESERVED_IDENTIFIER_FIXUP_1384.y = _RESERVED_IDENTIFIER_FIXUP_1114.y;
    _RESERVED_IDENTIFIER_FIXUP_1384.z = _RESERVED_IDENTIFIER_FIXUP_1114.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1384.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_418 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_427;
    if (_RESERVED_IDENTIFIER_FIXUP_418)
    {
        _RESERVED_IDENTIFIER_FIXUP_427 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_427 = _RESERVED_IDENTIFIER_FIXUP_418;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_427)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_464 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1264.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_491 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1140;
    if (_RESERVED_IDENTIFIER_FIXUP_464 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1140 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_464), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_491);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1140 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_491);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1140;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1028);
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
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB65 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB65.x;
    r1.w = hdB65.y;
    vec2 hdB75 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB75.x;
    r0.z = hdB75.y;
    vec2 hdB97 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB97.x;
    r1.y = hdB97.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB117 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB117.x;
    r1.w = hdB117.y;
    vec2 hdB128 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB128.x;
    r1.y = hdB128.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB151 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB151.x;
    r1.y = hdB151.y;
    vec2 hdB162 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB162.x;
    r2.y = hdB162.y;
    vec2 hdB169 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB169.x;
    r1.w = hdB169.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB188 = vec2(1.0, 0.0) * v4.zx;
    r2.z = hdB188.x;
    r2.w = hdB188.y;
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
    r3 = OptTex0( v2.xyz);
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    r5 = mix(r3, r4, r1.xxxx);
    vec4 hdB272 = r0;
    vec3 hdB276 = hdB272.xxx * r5.xyz;
    r0.x = hdB276.x;
    r0.y = hdB276.y;
    r0.z = hdB276.z;
    vec3 hdB287 = r5.www * v1.xyz;
    r1.x = hdB287.x;
    r1.y = hdB287.y;
    r1.z = hdB287.z;
    vec4 hdB294 = r0;
    vec3 hdB298 = hdB294.xyz * v0.xyz;
    r0.x = hdB298.x;
    r0.y = hdB298.y;
    r0.z = hdB298.z;
    vec4 hdB305 = r0;
    vec4 hdB307 = r0;
    vec3 hdB309 = hdB305.xyz + hdB307.xyz;
    r0.x = hdB309.x;
    r0.y = hdB309.y;
    r0.z = hdB309.z;
    vec4 hdB321 = r0;
    vec3 hdB323 = (r1.xyz * r2.xxx) + hdB321.xyz;
    r0.x = hdB323.x;
    r0.y = hdB323.y;
    r0.z = hdB323.z;
    vec4 hdB330 = r0;
    vec3 hdB337 = hdB330.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB337.x;
    r0.y = hdB337.y;
    r0.z = hdB337.z;
    vec3 hdB352 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB352.x;
    oC0.y = hdB352.y;
    oC0.z = hdB352.z;
    oC0.w = 1.0;
    bool hdB366 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB374;
    if (hdB366)
    {
        hdB374 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB374 = hdB366;
    }
    if (hdB374)
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
    bool _1250 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1260;
    if (_1250)
    {
        _1260 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1260 = _1250;
    }
    if (_1260)
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
        bool _1285 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1300;
        if (!_1285)
        {
            _1300 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1300 = _1285;
        }
        if (_1300)
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
