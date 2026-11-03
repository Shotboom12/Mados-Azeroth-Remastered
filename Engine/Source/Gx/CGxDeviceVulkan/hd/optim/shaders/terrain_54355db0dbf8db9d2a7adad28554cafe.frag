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
float _RESERVED_IDENTIFIER_FIXUP_1446;
vec4 _RESERVED_IDENTIFIER_FIXUP_1447;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_565 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_568 = _RESERVED_IDENTIFIER_FIXUP_565.xy;
    float _RESERVED_IDENTIFIER_FIXUP_570 = _RESERVED_IDENTIFIER_FIXUP_565.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_568;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_570;
    vec4 _RESERVED_IDENTIFIER_FIXUP_571 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_574 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_578 = _RESERVED_IDENTIFIER_FIXUP_574.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_1190.w = _RESERVED_IDENTIFIER_FIXUP_578;
    vec2 _RESERVED_IDENTIFIER_FIXUP_582 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_584 = _RESERVED_IDENTIFIER_FIXUP_582.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1192 = _RESERVED_IDENTIFIER_FIXUP_571;
    _RESERVED_IDENTIFIER_FIXUP_1192.y = _RESERVED_IDENTIFIER_FIXUP_584;
    float _RESERVED_IDENTIFIER_FIXUP_586 = _RESERVED_IDENTIFIER_FIXUP_582.y;
    _RESERVED_IDENTIFIER_FIXUP_1192.z = _RESERVED_IDENTIFIER_FIXUP_586;
    vec2 _RESERVED_IDENTIFIER_FIXUP_592 = _RESERVED_IDENTIFIER_FIXUP_1192.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196 = _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_1196.x = _RESERVED_IDENTIFIER_FIXUP_592.x;
    _RESERVED_IDENTIFIER_FIXUP_1196.y = _RESERVED_IDENTIFIER_FIXUP_592.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1196.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_607 = _RESERVED_IDENTIFIER_FIXUP_571.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1192.x = _RESERVED_IDENTIFIER_FIXUP_607;
    vec2 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_1192.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_1209.x = _RESERVED_IDENTIFIER_FIXUP_621.x;
    _RESERVED_IDENTIFIER_FIXUP_1209.y = _RESERVED_IDENTIFIER_FIXUP_621.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1209.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_636 = _RESERVED_IDENTIFIER_FIXUP_607 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1192.x = _RESERVED_IDENTIFIER_FIXUP_636;
    vec2 _RESERVED_IDENTIFIER_FIXUP_643 = _RESERVED_IDENTIFIER_FIXUP_1192.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1218.x = _RESERVED_IDENTIFIER_FIXUP_643.x;
    _RESERVED_IDENTIFIER_FIXUP_1218.y = _RESERVED_IDENTIFIER_FIXUP_643.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_653 = _RESERVED_IDENTIFIER_FIXUP_1192.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1222;
    _RESERVED_IDENTIFIER_FIXUP_1222.x = _RESERVED_IDENTIFIER_FIXUP_653.x;
    _RESERVED_IDENTIFIER_FIXUP_1222.y = _RESERVED_IDENTIFIER_FIXUP_653.y;
    _RESERVED_IDENTIFIER_FIXUP_1218.w = _RESERVED_IDENTIFIER_FIXUP_578;
    _RESERVED_IDENTIFIER_FIXUP_1222.w = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_707 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_725 = hdTex2(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1218.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_578;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1222.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_578;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1260;
    _RESERVED_IDENTIFIER_FIXUP_1260.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_707 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_636 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_725.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1265;
    _RESERVED_IDENTIFIER_FIXUP_1265.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_747 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_725.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1265.y = _RESERVED_IDENTIFIER_FIXUP_747;
    _RESERVED_IDENTIFIER_FIXUP_1265.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_747;
    vec2 param_11 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_776 = _RESERVED_IDENTIFIER_FIXUP_1265.xxx * ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1265.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_725.xxxx * hdTex1(param_11))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1272;
    _RESERVED_IDENTIFIER_FIXUP_1272.x = _RESERVED_IDENTIFIER_FIXUP_776.x;
    _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_776.y;
    _RESERVED_IDENTIFIER_FIXUP_1272.z = _RESERVED_IDENTIFIER_FIXUP_776.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278;
    _RESERVED_IDENTIFIER_FIXUP_1278.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1278.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1278.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_798 = _RESERVED_IDENTIFIER_FIXUP_1272.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1446).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1284;
    _RESERVED_IDENTIFIER_FIXUP_1284.x = _RESERVED_IDENTIFIER_FIXUP_798.x;
    _RESERVED_IDENTIFIER_FIXUP_1284.y = _RESERVED_IDENTIFIER_FIXUP_798.y;
    _RESERVED_IDENTIFIER_FIXUP_1284.z = _RESERVED_IDENTIFIER_FIXUP_798.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_809 = _RESERVED_IDENTIFIER_FIXUP_1284.xyz + _RESERVED_IDENTIFIER_FIXUP_1284.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1290;
    _RESERVED_IDENTIFIER_FIXUP_1290.x = _RESERVED_IDENTIFIER_FIXUP_809.x;
    _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_809.y;
    _RESERVED_IDENTIFIER_FIXUP_1290.z = _RESERVED_IDENTIFIER_FIXUP_809.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_823 = (_RESERVED_IDENTIFIER_FIXUP_1278.xyz * _RESERVED_IDENTIFIER_FIXUP_1260.xxx) + _RESERVED_IDENTIFIER_FIXUP_1290.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1296.x = _RESERVED_IDENTIFIER_FIXUP_823.x;
    _RESERVED_IDENTIFIER_FIXUP_1296.y = _RESERVED_IDENTIFIER_FIXUP_823.y;
    _RESERVED_IDENTIFIER_FIXUP_1296.z = _RESERVED_IDENTIFIER_FIXUP_823.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_836 = _RESERVED_IDENTIFIER_FIXUP_1296.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1302;
    _RESERVED_IDENTIFIER_FIXUP_1302.x = _RESERVED_IDENTIFIER_FIXUP_836.x;
    _RESERVED_IDENTIFIER_FIXUP_1302.y = _RESERVED_IDENTIFIER_FIXUP_836.y;
    _RESERVED_IDENTIFIER_FIXUP_1302.z = _RESERVED_IDENTIFIER_FIXUP_836.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_851 = _RESERVED_IDENTIFIER_FIXUP_1302.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1308;
    _RESERVED_IDENTIFIER_FIXUP_1308.x = _RESERVED_IDENTIFIER_FIXUP_851.x;
    _RESERVED_IDENTIFIER_FIXUP_1308.y = _RESERVED_IDENTIFIER_FIXUP_851.y;
    _RESERVED_IDENTIFIER_FIXUP_1308.z = _RESERVED_IDENTIFIER_FIXUP_851.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_568;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_570;
    vec4 _RESERVED_IDENTIFIER_FIXUP_889 = hdLod5(param_12, param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1321 = _RESERVED_IDENTIFIER_FIXUP_889;
    _RESERVED_IDENTIFIER_FIXUP_1321.y = _RESERVED_IDENTIFIER_FIXUP_584;
    _RESERVED_IDENTIFIER_FIXUP_1321.z = _RESERVED_IDENTIFIER_FIXUP_586;
    vec2 _RESERVED_IDENTIFIER_FIXUP_910 = _RESERVED_IDENTIFIER_FIXUP_1321.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1325 = _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_1325.x = _RESERVED_IDENTIFIER_FIXUP_910.x;
    _RESERVED_IDENTIFIER_FIXUP_1325.y = _RESERVED_IDENTIFIER_FIXUP_910.y;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1325.xy;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_925 = _RESERVED_IDENTIFIER_FIXUP_889.x + hdLod5(param_14, param_15).x;
    _RESERVED_IDENTIFIER_FIXUP_1321.x = _RESERVED_IDENTIFIER_FIXUP_925;
    vec2 _RESERVED_IDENTIFIER_FIXUP_939 = _RESERVED_IDENTIFIER_FIXUP_1321.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_1338.x = _RESERVED_IDENTIFIER_FIXUP_939.x;
    _RESERVED_IDENTIFIER_FIXUP_1338.y = _RESERVED_IDENTIFIER_FIXUP_939.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1338.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_954 = _RESERVED_IDENTIFIER_FIXUP_925 + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1321.x = _RESERVED_IDENTIFIER_FIXUP_954;
    vec2 _RESERVED_IDENTIFIER_FIXUP_961 = _RESERVED_IDENTIFIER_FIXUP_1321.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347;
    _RESERVED_IDENTIFIER_FIXUP_1347.x = _RESERVED_IDENTIFIER_FIXUP_961.x;
    _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_961.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_971 = _RESERVED_IDENTIFIER_FIXUP_1321.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1351;
    _RESERVED_IDENTIFIER_FIXUP_1351.x = _RESERVED_IDENTIFIER_FIXUP_971.x;
    _RESERVED_IDENTIFIER_FIXUP_1351.y = _RESERVED_IDENTIFIER_FIXUP_971.y;
    _RESERVED_IDENTIFIER_FIXUP_1347.w = _RESERVED_IDENTIFIER_FIXUP_578;
    _RESERVED_IDENTIFIER_FIXUP_1351.w = _RESERVED_IDENTIFIER_FIXUP_578;
    vec2 param_18 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1043 = hdTex2(param_18);
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1347.xy;
    float param_20 = _RESERVED_IDENTIFIER_FIXUP_578;
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1351.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_1048 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_707 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_954 + hdLod5(param_19, param_20).x) + hdLod5(param_21, param_22).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1043.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1389;
    _RESERVED_IDENTIFIER_FIXUP_1389.x = _RESERVED_IDENTIFIER_FIXUP_1048;
    float _RESERVED_IDENTIFIER_FIXUP_1053 = (_RESERVED_IDENTIFIER_FIXUP_1048 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1396;
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_1053;
    float _RESERVED_IDENTIFIER_FIXUP_1065 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1043.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_1065;
    _RESERVED_IDENTIFIER_FIXUP_1396.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1065;
    vec2 param_23 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1089 = (OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1396.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1043.xxxx * hdTex1(param_23));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1094 = _RESERVED_IDENTIFIER_FIXUP_1396.xxx * _RESERVED_IDENTIFIER_FIXUP_1089.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1403;
    _RESERVED_IDENTIFIER_FIXUP_1403.x = _RESERVED_IDENTIFIER_FIXUP_1094.x;
    _RESERVED_IDENTIFIER_FIXUP_1403.y = _RESERVED_IDENTIFIER_FIXUP_1094.y;
    _RESERVED_IDENTIFIER_FIXUP_1403.z = _RESERVED_IDENTIFIER_FIXUP_1094.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1105 = _RESERVED_IDENTIFIER_FIXUP_1089.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1409;
    _RESERVED_IDENTIFIER_FIXUP_1409.x = _RESERVED_IDENTIFIER_FIXUP_1105.x;
    _RESERVED_IDENTIFIER_FIXUP_1409.y = _RESERVED_IDENTIFIER_FIXUP_1105.y;
    _RESERVED_IDENTIFIER_FIXUP_1409.z = _RESERVED_IDENTIFIER_FIXUP_1105.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1116 = _RESERVED_IDENTIFIER_FIXUP_1403.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1415;
    _RESERVED_IDENTIFIER_FIXUP_1415.x = _RESERVED_IDENTIFIER_FIXUP_1116.x;
    _RESERVED_IDENTIFIER_FIXUP_1415.y = _RESERVED_IDENTIFIER_FIXUP_1116.y;
    _RESERVED_IDENTIFIER_FIXUP_1415.z = _RESERVED_IDENTIFIER_FIXUP_1116.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1127 = _RESERVED_IDENTIFIER_FIXUP_1415.xyz + _RESERVED_IDENTIFIER_FIXUP_1415.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1421;
    _RESERVED_IDENTIFIER_FIXUP_1421.x = _RESERVED_IDENTIFIER_FIXUP_1127.x;
    _RESERVED_IDENTIFIER_FIXUP_1421.y = _RESERVED_IDENTIFIER_FIXUP_1127.y;
    _RESERVED_IDENTIFIER_FIXUP_1421.z = _RESERVED_IDENTIFIER_FIXUP_1127.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1141 = (_RESERVED_IDENTIFIER_FIXUP_1409.xyz * _RESERVED_IDENTIFIER_FIXUP_1389.xxx) + _RESERVED_IDENTIFIER_FIXUP_1421.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1427;
    _RESERVED_IDENTIFIER_FIXUP_1427.x = _RESERVED_IDENTIFIER_FIXUP_1141.x;
    _RESERVED_IDENTIFIER_FIXUP_1427.y = _RESERVED_IDENTIFIER_FIXUP_1141.y;
    _RESERVED_IDENTIFIER_FIXUP_1427.z = _RESERVED_IDENTIFIER_FIXUP_1141.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_1427.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1433;
    _RESERVED_IDENTIFIER_FIXUP_1433.x = _RESERVED_IDENTIFIER_FIXUP_1154.x;
    _RESERVED_IDENTIFIER_FIXUP_1433.y = _RESERVED_IDENTIFIER_FIXUP_1154.y;
    _RESERVED_IDENTIFIER_FIXUP_1433.z = _RESERVED_IDENTIFIER_FIXUP_1154.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1433.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1308.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_505 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1180;
    if (_RESERVED_IDENTIFIER_FIXUP_478 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1180 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_478), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_505);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1180 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_505);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1180;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1053);
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
    r3 = OptTex0( v2.xyz);
    r1 = (r3 * r0.yyyy) + r1;
    vec4 hdB286 = r0;
    vec3 hdB290 = hdB286.xxx * r1.xyz;
    r0.x = hdB290.x;
    r0.y = hdB290.y;
    r0.z = hdB290.z;
    vec4 hdB297 = r1;
    vec3 hdB301 = hdB297.www * v1.xyz;
    r1.x = hdB301.x;
    r1.y = hdB301.y;
    r1.z = hdB301.z;
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
    vec4 hdB335 = r0;
    vec3 hdB337 = (r1.xyz * r2.xxx) + hdB335.xyz;
    r0.x = hdB337.x;
    r0.y = hdB337.y;
    r0.z = hdB337.z;
    vec4 hdB344 = r0;
    vec3 hdB351 = hdB344.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB351.x;
    r0.y = hdB351.y;
    r0.z = hdB351.z;
    vec3 hdB366 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB366.x;
    oC0.y = hdB366.y;
    oC0.z = hdB366.z;
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
    bool _1294 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1304;
    if (_1294)
    {
        _1304 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1304 = _1294;
    }
    if (_1304)
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
        bool _1329 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1344;
        if (!_1329)
        {
            _1344 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1344 = _1329;
        }
        if (_1344)
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
