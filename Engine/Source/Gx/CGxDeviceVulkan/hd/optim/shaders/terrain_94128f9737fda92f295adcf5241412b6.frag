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
float _RESERVED_IDENTIFIER_FIXUP_1432;
vec4 _RESERVED_IDENTIFIER_FIXUP_1433;


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

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_568 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_571 = _RESERVED_IDENTIFIER_FIXUP_568.xy;
    float _RESERVED_IDENTIFIER_FIXUP_573 = _RESERVED_IDENTIFIER_FIXUP_568.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_571;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_573;
    vec4 _RESERVED_IDENTIFIER_FIXUP_574 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_577 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_581 = _RESERVED_IDENTIFIER_FIXUP_577.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_1186.w = _RESERVED_IDENTIFIER_FIXUP_581;
    vec2 _RESERVED_IDENTIFIER_FIXUP_585 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_587 = _RESERVED_IDENTIFIER_FIXUP_585.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_574;
    _RESERVED_IDENTIFIER_FIXUP_1188.y = _RESERVED_IDENTIFIER_FIXUP_587;
    float _RESERVED_IDENTIFIER_FIXUP_589 = _RESERVED_IDENTIFIER_FIXUP_585.y;
    _RESERVED_IDENTIFIER_FIXUP_1188.z = _RESERVED_IDENTIFIER_FIXUP_589;
    vec2 _RESERVED_IDENTIFIER_FIXUP_595 = _RESERVED_IDENTIFIER_FIXUP_1188.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1192 = _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_1192.x = _RESERVED_IDENTIFIER_FIXUP_595.x;
    _RESERVED_IDENTIFIER_FIXUP_1192.y = _RESERVED_IDENTIFIER_FIXUP_595.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1192.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_581;
    float _RESERVED_IDENTIFIER_FIXUP_610 = _RESERVED_IDENTIFIER_FIXUP_574.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1188.x = _RESERVED_IDENTIFIER_FIXUP_610;
    vec2 _RESERVED_IDENTIFIER_FIXUP_624 = _RESERVED_IDENTIFIER_FIXUP_1188.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_1205.x = _RESERVED_IDENTIFIER_FIXUP_624.x;
    _RESERVED_IDENTIFIER_FIXUP_1205.y = _RESERVED_IDENTIFIER_FIXUP_624.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1205.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_581;
    float _RESERVED_IDENTIFIER_FIXUP_639 = _RESERVED_IDENTIFIER_FIXUP_610 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1188.x = _RESERVED_IDENTIFIER_FIXUP_639;
    vec2 _RESERVED_IDENTIFIER_FIXUP_646 = _RESERVED_IDENTIFIER_FIXUP_1188.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1214.x = _RESERVED_IDENTIFIER_FIXUP_646.x;
    _RESERVED_IDENTIFIER_FIXUP_1214.y = _RESERVED_IDENTIFIER_FIXUP_646.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_1188.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1218.x = _RESERVED_IDENTIFIER_FIXUP_656.x;
    _RESERVED_IDENTIFIER_FIXUP_1218.y = _RESERVED_IDENTIFIER_FIXUP_656.y;
    _RESERVED_IDENTIFIER_FIXUP_1214.w = _RESERVED_IDENTIFIER_FIXUP_581;
    _RESERVED_IDENTIFIER_FIXUP_1218.w = _RESERVED_IDENTIFIER_FIXUP_581;
    float _RESERVED_IDENTIFIER_FIXUP_710 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_728 = hdTex3(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1214.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_581;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1218.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_581;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1256;
    _RESERVED_IDENTIFIER_FIXUP_1256.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_710 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_639 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_728.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1261;
    _RESERVED_IDENTIFIER_FIXUP_1261.x = 1.0;
    vec2 param_11 = texcoord1.xy;
    vec2 param_12 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_773 = _RESERVED_IDENTIFIER_FIXUP_1261.xxx * mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_11), _RESERVED_IDENTIFIER_FIXUP_728.xxxx), hdTex2(param_12), _RESERVED_IDENTIFIER_FIXUP_728.yyyy).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1263;
    _RESERVED_IDENTIFIER_FIXUP_1263.x = _RESERVED_IDENTIFIER_FIXUP_773.x;
    _RESERVED_IDENTIFIER_FIXUP_1263.y = _RESERVED_IDENTIFIER_FIXUP_773.y;
    _RESERVED_IDENTIFIER_FIXUP_1263.z = _RESERVED_IDENTIFIER_FIXUP_773.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1269;
    _RESERVED_IDENTIFIER_FIXUP_1269.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1269.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1269.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_795 = _RESERVED_IDENTIFIER_FIXUP_1263.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1432).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1275;
    _RESERVED_IDENTIFIER_FIXUP_1275.x = _RESERVED_IDENTIFIER_FIXUP_795.x;
    _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_795.y;
    _RESERVED_IDENTIFIER_FIXUP_1275.z = _RESERVED_IDENTIFIER_FIXUP_795.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_806 = _RESERVED_IDENTIFIER_FIXUP_1275.xyz + _RESERVED_IDENTIFIER_FIXUP_1275.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1281;
    _RESERVED_IDENTIFIER_FIXUP_1281.x = _RESERVED_IDENTIFIER_FIXUP_806.x;
    _RESERVED_IDENTIFIER_FIXUP_1281.y = _RESERVED_IDENTIFIER_FIXUP_806.y;
    _RESERVED_IDENTIFIER_FIXUP_1281.z = _RESERVED_IDENTIFIER_FIXUP_806.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_820 = (_RESERVED_IDENTIFIER_FIXUP_1269.xyz * _RESERVED_IDENTIFIER_FIXUP_1256.xxx) + _RESERVED_IDENTIFIER_FIXUP_1281.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287;
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_820.x;
    _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_820.y;
    _RESERVED_IDENTIFIER_FIXUP_1287.z = _RESERVED_IDENTIFIER_FIXUP_820.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_833 = _RESERVED_IDENTIFIER_FIXUP_1287.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1293.x = _RESERVED_IDENTIFIER_FIXUP_833.x;
    _RESERVED_IDENTIFIER_FIXUP_1293.y = _RESERVED_IDENTIFIER_FIXUP_833.y;
    _RESERVED_IDENTIFIER_FIXUP_1293.z = _RESERVED_IDENTIFIER_FIXUP_833.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_848 = _RESERVED_IDENTIFIER_FIXUP_1293.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_1299.x = _RESERVED_IDENTIFIER_FIXUP_848.x;
    _RESERVED_IDENTIFIER_FIXUP_1299.y = _RESERVED_IDENTIFIER_FIXUP_848.y;
    _RESERVED_IDENTIFIER_FIXUP_1299.z = _RESERVED_IDENTIFIER_FIXUP_848.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_571;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_573;
    vec4 _RESERVED_IDENTIFIER_FIXUP_890 = hdLod5(param_13, param_14);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_890;
    _RESERVED_IDENTIFIER_FIXUP_1312.y = _RESERVED_IDENTIFIER_FIXUP_587;
    _RESERVED_IDENTIFIER_FIXUP_1312.z = _RESERVED_IDENTIFIER_FIXUP_589;
    vec2 _RESERVED_IDENTIFIER_FIXUP_911 = _RESERVED_IDENTIFIER_FIXUP_1312.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_1316.x = _RESERVED_IDENTIFIER_FIXUP_911.x;
    _RESERVED_IDENTIFIER_FIXUP_1316.y = _RESERVED_IDENTIFIER_FIXUP_911.y;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1316.xy;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_581;
    float _RESERVED_IDENTIFIER_FIXUP_926 = _RESERVED_IDENTIFIER_FIXUP_890.x + hdLod5(param_15, param_16).x;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_926;
    vec2 _RESERVED_IDENTIFIER_FIXUP_940 = _RESERVED_IDENTIFIER_FIXUP_1312.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1329 = _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_1329.x = _RESERVED_IDENTIFIER_FIXUP_940.x;
    _RESERVED_IDENTIFIER_FIXUP_1329.y = _RESERVED_IDENTIFIER_FIXUP_940.y;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1329.xy;
    float param_18 = _RESERVED_IDENTIFIER_FIXUP_581;
    float _RESERVED_IDENTIFIER_FIXUP_955 = _RESERVED_IDENTIFIER_FIXUP_926 + hdLod5(param_17, param_18).x;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_955;
    vec2 _RESERVED_IDENTIFIER_FIXUP_962 = _RESERVED_IDENTIFIER_FIXUP_1312.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1338.x = _RESERVED_IDENTIFIER_FIXUP_962.x;
    _RESERVED_IDENTIFIER_FIXUP_1338.y = _RESERVED_IDENTIFIER_FIXUP_962.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_972 = _RESERVED_IDENTIFIER_FIXUP_1312.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1342;
    _RESERVED_IDENTIFIER_FIXUP_1342.x = _RESERVED_IDENTIFIER_FIXUP_972.x;
    _RESERVED_IDENTIFIER_FIXUP_1342.y = _RESERVED_IDENTIFIER_FIXUP_972.y;
    _RESERVED_IDENTIFIER_FIXUP_1338.w = _RESERVED_IDENTIFIER_FIXUP_581;
    _RESERVED_IDENTIFIER_FIXUP_1342.w = _RESERVED_IDENTIFIER_FIXUP_581;
    vec2 param_19 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1044 = hdTex3(param_19);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1338.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_581;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1342.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_581;
    float _RESERVED_IDENTIFIER_FIXUP_1049 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_710 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_955 + hdLod5(param_20, param_21).x) + hdLod5(param_22, param_23).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1044.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1380;
    _RESERVED_IDENTIFIER_FIXUP_1380.x = _RESERVED_IDENTIFIER_FIXUP_1049;
    float _RESERVED_IDENTIFIER_FIXUP_1054 = (_RESERVED_IDENTIFIER_FIXUP_1049 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1387;
    _RESERVED_IDENTIFIER_FIXUP_1387.x = _RESERVED_IDENTIFIER_FIXUP_1054;
    vec2 param_24 = texcoord1.xy;
    vec2 param_25 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1084 = mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_24), _RESERVED_IDENTIFIER_FIXUP_1044.xxxx), hdTex2(param_25), _RESERVED_IDENTIFIER_FIXUP_1044.yyyy);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1089 = _RESERVED_IDENTIFIER_FIXUP_1387.xxx * _RESERVED_IDENTIFIER_FIXUP_1084.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1389;
    _RESERVED_IDENTIFIER_FIXUP_1389.x = _RESERVED_IDENTIFIER_FIXUP_1089.x;
    _RESERVED_IDENTIFIER_FIXUP_1389.y = _RESERVED_IDENTIFIER_FIXUP_1089.y;
    _RESERVED_IDENTIFIER_FIXUP_1389.z = _RESERVED_IDENTIFIER_FIXUP_1089.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1100 = _RESERVED_IDENTIFIER_FIXUP_1084.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1395;
    _RESERVED_IDENTIFIER_FIXUP_1395.x = _RESERVED_IDENTIFIER_FIXUP_1100.x;
    _RESERVED_IDENTIFIER_FIXUP_1395.y = _RESERVED_IDENTIFIER_FIXUP_1100.y;
    _RESERVED_IDENTIFIER_FIXUP_1395.z = _RESERVED_IDENTIFIER_FIXUP_1100.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1111 = _RESERVED_IDENTIFIER_FIXUP_1389.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1401;
    _RESERVED_IDENTIFIER_FIXUP_1401.x = _RESERVED_IDENTIFIER_FIXUP_1111.x;
    _RESERVED_IDENTIFIER_FIXUP_1401.y = _RESERVED_IDENTIFIER_FIXUP_1111.y;
    _RESERVED_IDENTIFIER_FIXUP_1401.z = _RESERVED_IDENTIFIER_FIXUP_1111.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1122 = _RESERVED_IDENTIFIER_FIXUP_1401.xyz + _RESERVED_IDENTIFIER_FIXUP_1401.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1407;
    _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_1122.x;
    _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_1122.y;
    _RESERVED_IDENTIFIER_FIXUP_1407.z = _RESERVED_IDENTIFIER_FIXUP_1122.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1136 = (_RESERVED_IDENTIFIER_FIXUP_1395.xyz * _RESERVED_IDENTIFIER_FIXUP_1380.xxx) + _RESERVED_IDENTIFIER_FIXUP_1407.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413;
    _RESERVED_IDENTIFIER_FIXUP_1413.x = _RESERVED_IDENTIFIER_FIXUP_1136.x;
    _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_1136.y;
    _RESERVED_IDENTIFIER_FIXUP_1413.z = _RESERVED_IDENTIFIER_FIXUP_1136.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1149 = _RESERVED_IDENTIFIER_FIXUP_1413.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1419;
    _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_1149.x;
    _RESERVED_IDENTIFIER_FIXUP_1419.y = _RESERVED_IDENTIFIER_FIXUP_1149.y;
    _RESERVED_IDENTIFIER_FIXUP_1419.z = _RESERVED_IDENTIFIER_FIXUP_1149.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1419.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_431 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_440;
    if (_RESERVED_IDENTIFIER_FIXUP_431)
    {
        _RESERVED_IDENTIFIER_FIXUP_440 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_440 = _RESERVED_IDENTIFIER_FIXUP_431;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_440)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_477 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1299.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_504 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1175;
    if (_RESERVED_IDENTIFIER_FIXUP_477 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1175 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_477), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_504);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1175 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_504);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1175;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1054);
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB68 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB68.x;
    r1.w = hdB68.y;
    vec2 hdB78 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB78.x;
    r0.z = hdB78.y;
    vec2 hdB100 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB100.x;
    r1.y = hdB100.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB120 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB120.x;
    r1.w = hdB120.y;
    vec2 hdB131 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB131.x;
    r1.y = hdB131.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB154 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB154.x;
    r1.y = hdB154.y;
    vec2 hdB165 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB165.x;
    r2.y = hdB165.y;
    vec2 hdB172 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB172.x;
    r1.w = hdB172.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB191 = vec2(1.0, 0.0) * v5.zx;
    r2.z = hdB191.x;
    r2.w = hdB191.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v4.xy;
    r1 = hdTex3(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r3 = OptTex0( v2.xyz);
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    r5 = mix(r3, r4, r1.xxxx);
    vec2 param_12 = v3.wz;
    r3 = hdTex2(param_12);
    r4 = mix(r5, r3, r1.yyyy);
    vec4 hdB285 = r0;
    vec3 hdB289 = hdB285.xxx * r4.xyz;
    r0.x = hdB289.x;
    r0.y = hdB289.y;
    r0.z = hdB289.z;
    vec3 hdB300 = r4.www * v1.xyz;
    r1.x = hdB300.x;
    r1.y = hdB300.y;
    r1.z = hdB300.z;
    vec4 hdB307 = r0;
    vec3 hdB311 = hdB307.xyz * v0.xyz;
    r0.x = hdB311.x;
    r0.y = hdB311.y;
    r0.z = hdB311.z;
    vec4 hdB318 = r0;
    vec4 hdB320 = r0;
    vec3 hdB322 = hdB318.xyz + hdB320.xyz;
    r0.x = hdB322.x;
    r0.y = hdB322.y;
    r0.z = hdB322.z;
    vec4 hdB334 = r0;
    vec3 hdB336 = (r1.xyz * r2.xxx) + hdB334.xyz;
    r0.x = hdB336.x;
    r0.y = hdB336.y;
    r0.z = hdB336.z;
    vec4 hdB343 = r0;
    vec3 hdB350 = hdB343.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB350.x;
    r0.y = hdB350.y;
    r0.z = hdB350.z;
    vec3 hdB365 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB365.x;
    oC0.y = hdB365.y;
    oC0.z = hdB365.z;
    oC0.w = 1.0;
    bool hdB379 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB387;
    if (hdB379)
    {
        hdB387 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB387 = hdB379;
    }
    if (hdB387)
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
    bool _1307 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1317;
    if (_1307)
    {
        _1317 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1317 = _1307;
    }
    if (_1317)
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
        bool _1342 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1357;
        if (!_1342)
        {
            _1357 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1357 = _1342;
        }
        if (_1357)
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
