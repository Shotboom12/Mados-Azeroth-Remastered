#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
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
float _RESERVED_IDENTIFIER_FIXUP_1506;
vec4 _RESERVED_IDENTIFIER_FIXUP_1507;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _88 = hdOverride >= 0;
    bool _98;
    if (_88)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_586 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_589 = _RESERVED_IDENTIFIER_FIXUP_586.xy;
    float _RESERVED_IDENTIFIER_FIXUP_591 = _RESERVED_IDENTIFIER_FIXUP_586.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_589;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_591;
    vec4 _RESERVED_IDENTIFIER_FIXUP_592 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1238;
    _RESERVED_IDENTIFIER_FIXUP_1238.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_600 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1240;
    _RESERVED_IDENTIFIER_FIXUP_1240.x = _RESERVED_IDENTIFIER_FIXUP_600.x;
    _RESERVED_IDENTIFIER_FIXUP_1240.y = _RESERVED_IDENTIFIER_FIXUP_600.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_610 = _RESERVED_IDENTIFIER_FIXUP_1240.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1244 = _RESERVED_IDENTIFIER_FIXUP_1238;
    _RESERVED_IDENTIFIER_FIXUP_1244.x = _RESERVED_IDENTIFIER_FIXUP_610.x;
    _RESERVED_IDENTIFIER_FIXUP_1244.y = _RESERVED_IDENTIFIER_FIXUP_610.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1244.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_592.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_633 = _RESERVED_IDENTIFIER_FIXUP_1240.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1256 = _RESERVED_IDENTIFIER_FIXUP_1238;
    _RESERVED_IDENTIFIER_FIXUP_1256.x = _RESERVED_IDENTIFIER_FIXUP_633.x;
    _RESERVED_IDENTIFIER_FIXUP_1256.y = _RESERVED_IDENTIFIER_FIXUP_633.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1256.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_592.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_652 = _RESERVED_IDENTIFIER_FIXUP_1240.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1264;
    _RESERVED_IDENTIFIER_FIXUP_1264.x = _RESERVED_IDENTIFIER_FIXUP_652.x;
    _RESERVED_IDENTIFIER_FIXUP_1264.y = _RESERVED_IDENTIFIER_FIXUP_652.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_662 = _RESERVED_IDENTIFIER_FIXUP_1240.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1268;
    _RESERVED_IDENTIFIER_FIXUP_1268.x = _RESERVED_IDENTIFIER_FIXUP_662.x;
    _RESERVED_IDENTIFIER_FIXUP_1268.y = _RESERVED_IDENTIFIER_FIXUP_662.y;
    _RESERVED_IDENTIFIER_FIXUP_1264.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1264.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_592.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1268.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_730 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_748 = hdTex3(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1268.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1314;
    _RESERVED_IDENTIFIER_FIXUP_1314.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_730 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_592 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_748.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1319;
    _RESERVED_IDENTIFIER_FIXUP_1319.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_774 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_748.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1319.y = _RESERVED_IDENTIFIER_FIXUP_774;
    _RESERVED_IDENTIFIER_FIXUP_1319.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_774;
    vec2 param_11 = texcoord1.wz;
    vec2 param_12 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_809 = _RESERVED_IDENTIFIER_FIXUP_1319.xxx * ((hdTex2(param_11) * _RESERVED_IDENTIFIER_FIXUP_748.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1319.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_748.xxxx * hdTex1(param_12)))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1326;
    _RESERVED_IDENTIFIER_FIXUP_1326.x = _RESERVED_IDENTIFIER_FIXUP_809.x;
    _RESERVED_IDENTIFIER_FIXUP_1326.y = _RESERVED_IDENTIFIER_FIXUP_809.y;
    _RESERVED_IDENTIFIER_FIXUP_1326.z = _RESERVED_IDENTIFIER_FIXUP_809.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1332;
    _RESERVED_IDENTIFIER_FIXUP_1332.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1332.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1332.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_831 = _RESERVED_IDENTIFIER_FIXUP_1326.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1506).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1338.x = _RESERVED_IDENTIFIER_FIXUP_831.x;
    _RESERVED_IDENTIFIER_FIXUP_1338.y = _RESERVED_IDENTIFIER_FIXUP_831.y;
    _RESERVED_IDENTIFIER_FIXUP_1338.z = _RESERVED_IDENTIFIER_FIXUP_831.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_842 = _RESERVED_IDENTIFIER_FIXUP_1338.xyz + _RESERVED_IDENTIFIER_FIXUP_1338.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344;
    _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_842.x;
    _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_842.y;
    _RESERVED_IDENTIFIER_FIXUP_1344.z = _RESERVED_IDENTIFIER_FIXUP_842.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_856 = (_RESERVED_IDENTIFIER_FIXUP_1332.xyz * _RESERVED_IDENTIFIER_FIXUP_1314.xxx) + _RESERVED_IDENTIFIER_FIXUP_1344.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1350;
    _RESERVED_IDENTIFIER_FIXUP_1350.x = _RESERVED_IDENTIFIER_FIXUP_856.x;
    _RESERVED_IDENTIFIER_FIXUP_1350.y = _RESERVED_IDENTIFIER_FIXUP_856.y;
    _RESERVED_IDENTIFIER_FIXUP_1350.z = _RESERVED_IDENTIFIER_FIXUP_856.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_869 = _RESERVED_IDENTIFIER_FIXUP_1350.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1356;
    _RESERVED_IDENTIFIER_FIXUP_1356.x = _RESERVED_IDENTIFIER_FIXUP_869.x;
    _RESERVED_IDENTIFIER_FIXUP_1356.y = _RESERVED_IDENTIFIER_FIXUP_869.y;
    _RESERVED_IDENTIFIER_FIXUP_1356.z = _RESERVED_IDENTIFIER_FIXUP_869.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_884 = _RESERVED_IDENTIFIER_FIXUP_1356.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1362;
    _RESERVED_IDENTIFIER_FIXUP_1362.x = _RESERVED_IDENTIFIER_FIXUP_884.x;
    _RESERVED_IDENTIFIER_FIXUP_1362.y = _RESERVED_IDENTIFIER_FIXUP_884.y;
    _RESERVED_IDENTIFIER_FIXUP_1362.z = _RESERVED_IDENTIFIER_FIXUP_884.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_589;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_591;
    vec4 _RESERVED_IDENTIFIER_FIXUP_925 = hdLod5(param_13, param_14);
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1244.xy;
    float param_16 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_925.y = hdLod5(param_15, param_16).x;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1256.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_925.z = hdLod5(param_17, param_18).x;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1264.xy;
    float param_20 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_925.w = hdLod5(param_19, param_20).x;
    vec2 param_21 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1081 = hdTex3(param_21);
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1268.xy;
    float param_23 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1086 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_730 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_925 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_22, param_23).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1081.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1449;
    _RESERVED_IDENTIFIER_FIXUP_1449.x = _RESERVED_IDENTIFIER_FIXUP_1086;
    float _RESERVED_IDENTIFIER_FIXUP_1091 = (_RESERVED_IDENTIFIER_FIXUP_1086 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1456;
    _RESERVED_IDENTIFIER_FIXUP_1456.x = _RESERVED_IDENTIFIER_FIXUP_1091;
    float _RESERVED_IDENTIFIER_FIXUP_1107 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1081.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1456.y = _RESERVED_IDENTIFIER_FIXUP_1107;
    _RESERVED_IDENTIFIER_FIXUP_1456.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1107;
    vec2 param_24 = texcoord1.wz;
    vec2 param_25 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1137 = (hdTex2(param_24) * _RESERVED_IDENTIFIER_FIXUP_1081.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1456.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1081.xxxx * hdTex1(param_25)));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1142 = _RESERVED_IDENTIFIER_FIXUP_1456.xxx * _RESERVED_IDENTIFIER_FIXUP_1137.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1463;
    _RESERVED_IDENTIFIER_FIXUP_1463.x = _RESERVED_IDENTIFIER_FIXUP_1142.x;
    _RESERVED_IDENTIFIER_FIXUP_1463.y = _RESERVED_IDENTIFIER_FIXUP_1142.y;
    _RESERVED_IDENTIFIER_FIXUP_1463.z = _RESERVED_IDENTIFIER_FIXUP_1142.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_1137.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1469;
    _RESERVED_IDENTIFIER_FIXUP_1469.x = _RESERVED_IDENTIFIER_FIXUP_1153.x;
    _RESERVED_IDENTIFIER_FIXUP_1469.y = _RESERVED_IDENTIFIER_FIXUP_1153.y;
    _RESERVED_IDENTIFIER_FIXUP_1469.z = _RESERVED_IDENTIFIER_FIXUP_1153.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1164 = _RESERVED_IDENTIFIER_FIXUP_1463.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1475;
    _RESERVED_IDENTIFIER_FIXUP_1475.x = _RESERVED_IDENTIFIER_FIXUP_1164.x;
    _RESERVED_IDENTIFIER_FIXUP_1475.y = _RESERVED_IDENTIFIER_FIXUP_1164.y;
    _RESERVED_IDENTIFIER_FIXUP_1475.z = _RESERVED_IDENTIFIER_FIXUP_1164.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1175 = _RESERVED_IDENTIFIER_FIXUP_1475.xyz + _RESERVED_IDENTIFIER_FIXUP_1475.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1481;
    _RESERVED_IDENTIFIER_FIXUP_1481.x = _RESERVED_IDENTIFIER_FIXUP_1175.x;
    _RESERVED_IDENTIFIER_FIXUP_1481.y = _RESERVED_IDENTIFIER_FIXUP_1175.y;
    _RESERVED_IDENTIFIER_FIXUP_1481.z = _RESERVED_IDENTIFIER_FIXUP_1175.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1189 = (_RESERVED_IDENTIFIER_FIXUP_1469.xyz * _RESERVED_IDENTIFIER_FIXUP_1449.xxx) + _RESERVED_IDENTIFIER_FIXUP_1481.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1487;
    _RESERVED_IDENTIFIER_FIXUP_1487.x = _RESERVED_IDENTIFIER_FIXUP_1189.x;
    _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_1189.y;
    _RESERVED_IDENTIFIER_FIXUP_1487.z = _RESERVED_IDENTIFIER_FIXUP_1189.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1487.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1493;
    _RESERVED_IDENTIFIER_FIXUP_1493.x = _RESERVED_IDENTIFIER_FIXUP_1202.x;
    _RESERVED_IDENTIFIER_FIXUP_1493.y = _RESERVED_IDENTIFIER_FIXUP_1202.y;
    _RESERVED_IDENTIFIER_FIXUP_1493.z = _RESERVED_IDENTIFIER_FIXUP_1202.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1493.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_450 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_459;
    if (_RESERVED_IDENTIFIER_FIXUP_450)
    {
        _RESERVED_IDENTIFIER_FIXUP_459 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_459 = _RESERVED_IDENTIFIER_FIXUP_450;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_459)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_496 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1362.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_523 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1228;
    if (_RESERVED_IDENTIFIER_FIXUP_496 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1228 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_496), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_523);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1228 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_523);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1228;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1091);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB72 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB72.x;
    r2.y = hdB72.y;
    vec2 hdB95 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB95.x;
    r1.y = hdB95.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB119 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB119.x;
    r1.y = hdB119.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB139 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB139.x;
    r1.y = hdB139.y;
    vec4 hdB144 = r2;
    vec2 hdB150 = hdB144.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB150.x;
    r2.y = hdB150.y;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.w = r1.x;
    r0 += (-v5.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.y = r1.x + (-v5.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v4.xy;
    r1 = hdTex3(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r3 = OptTex0( v2.xyz);
    r0.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.y = (-r0.y) + 1.0;
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    r4 = r1.xxxx * r4;
    r3 = (r3 * r0.yyyy) + r4;
    vec2 param_12 = v3.wz;
    r4 = hdTex2(param_12);
    r1 = (r4 * r1.yyyy) + r3;
    vec4 hdB305 = r0;
    vec3 hdB309 = hdB305.xxx * r1.xyz;
    r0.x = hdB309.x;
    r0.y = hdB309.y;
    r0.z = hdB309.z;
    vec4 hdB316 = r1;
    vec3 hdB320 = hdB316.www * v1.xyz;
    r1.x = hdB320.x;
    r1.y = hdB320.y;
    r1.z = hdB320.z;
    vec4 hdB327 = r0;
    vec3 hdB331 = hdB327.xyz * v0.xyz;
    r0.x = hdB331.x;
    r0.y = hdB331.y;
    r0.z = hdB331.z;
    vec4 hdB338 = r0;
    vec4 hdB340 = r0;
    vec3 hdB342 = hdB338.xyz + hdB340.xyz;
    r0.x = hdB342.x;
    r0.y = hdB342.y;
    r0.z = hdB342.z;
    vec4 hdB354 = r0;
    vec3 hdB356 = (r1.xyz * r2.xxx) + hdB354.xyz;
    r0.x = hdB356.x;
    r0.y = hdB356.y;
    r0.z = hdB356.z;
    vec4 hdB363 = r0;
    vec3 hdB370 = hdB363.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB370.x;
    r0.y = hdB370.y;
    r0.z = hdB370.z;
    vec3 hdB385 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB385.x;
    oC0.y = hdB385.y;
    oC0.z = hdB385.z;
    oC0.w = 1.0;
    bool hdB398 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB406;
    if (hdB398)
    {
        hdB406 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB406 = hdB398;
    }
    if (hdB406)
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
    bool _1252 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1262;
    if (_1252)
    {
        _1262 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1262 = _1252;
    }
    if (_1262)
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
        bool _1287 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1302;
        if (!_1287)
        {
            _1302 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1302 = _1287;
        }
        if (_1302)
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
