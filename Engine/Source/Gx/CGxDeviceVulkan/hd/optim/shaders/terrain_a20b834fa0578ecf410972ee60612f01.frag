#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1503;
vec4 _RESERVED_IDENTIFIER_FIXUP_1504;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _53 = hdOverride >= 0;
    bool _73;
    if (_53)
    {
        _73 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _73 = _53;
    }
    vec4 _74;
    if (_73)
    {
        _74 = vec4(float(hdOverride));
    }
    else
    {
        _74 = value;
    }
    return _74;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _91 = hdOverride >= 0;
    bool _101;
    if (_91)
    {
        _101 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _101 = _91;
    }
    vec4 _102;
    if (_101)
    {
        _102 = vec4(float(hdOverride));
    }
    else
    {
        _102 = value;
    }
    return _102;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _174 = hdOverride >= 0;
    bool _184;
    if (_174)
    {
        _184 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _184 = _174;
    }
    vec4 _185;
    if (_184)
    {
        _185 = vec4(float(hdOverride));
    }
    else
    {
        _185 = value;
    }
    return _185;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _119 = hdOverride >= 0;
    bool _129;
    if (_119)
    {
        _129 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _129 = _119;
    }
    vec4 _130;
    if (_129)
    {
        _130 = vec4(float(hdOverride));
    }
    else
    {
        _130 = value;
    }
    return _130;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _147 = hdOverride >= 0;
    bool _156;
    if (_147)
    {
        _156 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _156 = _147;
    }
    vec4 _157;
    if (_156)
    {
        _157 = vec4(float(hdOverride));
    }
    else
    {
        _157 = value;
    }
    return _157;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_583 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_586 = _RESERVED_IDENTIFIER_FIXUP_583.xy;
    float _RESERVED_IDENTIFIER_FIXUP_588 = _RESERVED_IDENTIFIER_FIXUP_583.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_586;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_588;
    vec4 _RESERVED_IDENTIFIER_FIXUP_589 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1235;
    _RESERVED_IDENTIFIER_FIXUP_1235.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_597 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1237;
    _RESERVED_IDENTIFIER_FIXUP_1237.x = _RESERVED_IDENTIFIER_FIXUP_597.x;
    _RESERVED_IDENTIFIER_FIXUP_1237.y = _RESERVED_IDENTIFIER_FIXUP_597.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_607 = _RESERVED_IDENTIFIER_FIXUP_1237.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1241 = _RESERVED_IDENTIFIER_FIXUP_1235;
    _RESERVED_IDENTIFIER_FIXUP_1241.x = _RESERVED_IDENTIFIER_FIXUP_607.x;
    _RESERVED_IDENTIFIER_FIXUP_1241.y = _RESERVED_IDENTIFIER_FIXUP_607.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1241.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_589.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_630 = _RESERVED_IDENTIFIER_FIXUP_1237.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1253 = _RESERVED_IDENTIFIER_FIXUP_1235;
    _RESERVED_IDENTIFIER_FIXUP_1253.x = _RESERVED_IDENTIFIER_FIXUP_630.x;
    _RESERVED_IDENTIFIER_FIXUP_1253.y = _RESERVED_IDENTIFIER_FIXUP_630.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1253.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_589.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_649 = _RESERVED_IDENTIFIER_FIXUP_1237.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1261;
    _RESERVED_IDENTIFIER_FIXUP_1261.x = _RESERVED_IDENTIFIER_FIXUP_649.x;
    _RESERVED_IDENTIFIER_FIXUP_1261.y = _RESERVED_IDENTIFIER_FIXUP_649.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_659 = _RESERVED_IDENTIFIER_FIXUP_1237.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1265;
    _RESERVED_IDENTIFIER_FIXUP_1265.x = _RESERVED_IDENTIFIER_FIXUP_659.x;
    _RESERVED_IDENTIFIER_FIXUP_1265.y = _RESERVED_IDENTIFIER_FIXUP_659.y;
    _RESERVED_IDENTIFIER_FIXUP_1261.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1261.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_589.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1265.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_727 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_745 = hdTex3(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1265.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1311;
    _RESERVED_IDENTIFIER_FIXUP_1311.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_727 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_589 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_745.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1316;
    _RESERVED_IDENTIFIER_FIXUP_1316.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_771 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_745.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1316.y = _RESERVED_IDENTIFIER_FIXUP_771;
    _RESERVED_IDENTIFIER_FIXUP_1316.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_771;
    vec2 param_11 = texcoord1.wz;
    vec2 param_12 = texcoord0.xy;
    vec2 param_13 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_806 = _RESERVED_IDENTIFIER_FIXUP_1316.xxx * ((hdTex2(param_11) * _RESERVED_IDENTIFIER_FIXUP_745.yyyy) + ((hdTex0(param_12) * _RESERVED_IDENTIFIER_FIXUP_1316.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_745.xxxx * hdTex1(param_13)))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1323;
    _RESERVED_IDENTIFIER_FIXUP_1323.x = _RESERVED_IDENTIFIER_FIXUP_806.x;
    _RESERVED_IDENTIFIER_FIXUP_1323.y = _RESERVED_IDENTIFIER_FIXUP_806.y;
    _RESERVED_IDENTIFIER_FIXUP_1323.z = _RESERVED_IDENTIFIER_FIXUP_806.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1329;
    _RESERVED_IDENTIFIER_FIXUP_1329.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1329.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1329.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_828 = _RESERVED_IDENTIFIER_FIXUP_1323.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1503).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1335;
    _RESERVED_IDENTIFIER_FIXUP_1335.x = _RESERVED_IDENTIFIER_FIXUP_828.x;
    _RESERVED_IDENTIFIER_FIXUP_1335.y = _RESERVED_IDENTIFIER_FIXUP_828.y;
    _RESERVED_IDENTIFIER_FIXUP_1335.z = _RESERVED_IDENTIFIER_FIXUP_828.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_839 = _RESERVED_IDENTIFIER_FIXUP_1335.xyz + _RESERVED_IDENTIFIER_FIXUP_1335.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_839.x;
    _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_839.y;
    _RESERVED_IDENTIFIER_FIXUP_1341.z = _RESERVED_IDENTIFIER_FIXUP_839.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_853 = (_RESERVED_IDENTIFIER_FIXUP_1329.xyz * _RESERVED_IDENTIFIER_FIXUP_1311.xxx) + _RESERVED_IDENTIFIER_FIXUP_1341.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347;
    _RESERVED_IDENTIFIER_FIXUP_1347.x = _RESERVED_IDENTIFIER_FIXUP_853.x;
    _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_853.y;
    _RESERVED_IDENTIFIER_FIXUP_1347.z = _RESERVED_IDENTIFIER_FIXUP_853.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_866 = _RESERVED_IDENTIFIER_FIXUP_1347.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1353;
    _RESERVED_IDENTIFIER_FIXUP_1353.x = _RESERVED_IDENTIFIER_FIXUP_866.x;
    _RESERVED_IDENTIFIER_FIXUP_1353.y = _RESERVED_IDENTIFIER_FIXUP_866.y;
    _RESERVED_IDENTIFIER_FIXUP_1353.z = _RESERVED_IDENTIFIER_FIXUP_866.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_881 = _RESERVED_IDENTIFIER_FIXUP_1353.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1359;
    _RESERVED_IDENTIFIER_FIXUP_1359.x = _RESERVED_IDENTIFIER_FIXUP_881.x;
    _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_881.y;
    _RESERVED_IDENTIFIER_FIXUP_1359.z = _RESERVED_IDENTIFIER_FIXUP_881.z;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_586;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_588;
    vec4 _RESERVED_IDENTIFIER_FIXUP_922 = hdLod5(param_14, param_15);
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1241.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_922.y = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1253.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_922.z = hdLod5(param_18, param_19).x;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1261.xy;
    float param_21 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_922.w = hdLod5(param_20, param_21).x;
    vec2 param_22 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1078 = hdTex3(param_22);
    vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1265.xy;
    float param_24 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1083 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_727 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_922 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_23, param_24).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1078.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1446;
    _RESERVED_IDENTIFIER_FIXUP_1446.x = _RESERVED_IDENTIFIER_FIXUP_1083;
    float _RESERVED_IDENTIFIER_FIXUP_1088 = (_RESERVED_IDENTIFIER_FIXUP_1083 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1453;
    _RESERVED_IDENTIFIER_FIXUP_1453.x = _RESERVED_IDENTIFIER_FIXUP_1088;
    float _RESERVED_IDENTIFIER_FIXUP_1104 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1078.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1453.y = _RESERVED_IDENTIFIER_FIXUP_1104;
    _RESERVED_IDENTIFIER_FIXUP_1453.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1104;
    vec2 param_25 = texcoord1.wz;
    vec2 param_26 = texcoord0.xy;
    vec2 param_27 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1134 = (hdTex2(param_25) * _RESERVED_IDENTIFIER_FIXUP_1078.yyyy) + ((hdTex0(param_26) * _RESERVED_IDENTIFIER_FIXUP_1453.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1078.xxxx * hdTex1(param_27)));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1453.xxx * _RESERVED_IDENTIFIER_FIXUP_1134.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1460;
    _RESERVED_IDENTIFIER_FIXUP_1460.x = _RESERVED_IDENTIFIER_FIXUP_1139.x;
    _RESERVED_IDENTIFIER_FIXUP_1460.y = _RESERVED_IDENTIFIER_FIXUP_1139.y;
    _RESERVED_IDENTIFIER_FIXUP_1460.z = _RESERVED_IDENTIFIER_FIXUP_1139.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1150 = _RESERVED_IDENTIFIER_FIXUP_1134.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1466;
    _RESERVED_IDENTIFIER_FIXUP_1466.x = _RESERVED_IDENTIFIER_FIXUP_1150.x;
    _RESERVED_IDENTIFIER_FIXUP_1466.y = _RESERVED_IDENTIFIER_FIXUP_1150.y;
    _RESERVED_IDENTIFIER_FIXUP_1466.z = _RESERVED_IDENTIFIER_FIXUP_1150.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1161 = _RESERVED_IDENTIFIER_FIXUP_1460.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1472;
    _RESERVED_IDENTIFIER_FIXUP_1472.x = _RESERVED_IDENTIFIER_FIXUP_1161.x;
    _RESERVED_IDENTIFIER_FIXUP_1472.y = _RESERVED_IDENTIFIER_FIXUP_1161.y;
    _RESERVED_IDENTIFIER_FIXUP_1472.z = _RESERVED_IDENTIFIER_FIXUP_1161.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1172 = _RESERVED_IDENTIFIER_FIXUP_1472.xyz + _RESERVED_IDENTIFIER_FIXUP_1472.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1478;
    _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_1172.x;
    _RESERVED_IDENTIFIER_FIXUP_1478.y = _RESERVED_IDENTIFIER_FIXUP_1172.y;
    _RESERVED_IDENTIFIER_FIXUP_1478.z = _RESERVED_IDENTIFIER_FIXUP_1172.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1186 = (_RESERVED_IDENTIFIER_FIXUP_1466.xyz * _RESERVED_IDENTIFIER_FIXUP_1446.xxx) + _RESERVED_IDENTIFIER_FIXUP_1478.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1484;
    _RESERVED_IDENTIFIER_FIXUP_1484.x = _RESERVED_IDENTIFIER_FIXUP_1186.x;
    _RESERVED_IDENTIFIER_FIXUP_1484.y = _RESERVED_IDENTIFIER_FIXUP_1186.y;
    _RESERVED_IDENTIFIER_FIXUP_1484.z = _RESERVED_IDENTIFIER_FIXUP_1186.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = _RESERVED_IDENTIFIER_FIXUP_1484.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1490;
    _RESERVED_IDENTIFIER_FIXUP_1490.x = _RESERVED_IDENTIFIER_FIXUP_1199.x;
    _RESERVED_IDENTIFIER_FIXUP_1490.y = _RESERVED_IDENTIFIER_FIXUP_1199.y;
    _RESERVED_IDENTIFIER_FIXUP_1490.z = _RESERVED_IDENTIFIER_FIXUP_1199.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1490.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_447 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_456;
    if (_RESERVED_IDENTIFIER_FIXUP_447)
    {
        _RESERVED_IDENTIFIER_FIXUP_456 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_456 = _RESERVED_IDENTIFIER_FIXUP_447;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_456)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_493 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1359.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_520 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1225;
    if (_RESERVED_IDENTIFIER_FIXUP_493 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1225 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_493), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_520);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1225 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_520);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1225;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1088);
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
    vec2 param_11 = v2.xy;
    r3 = hdTex0(param_11);
    r0.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.y = (-r0.y) + 1.0;
    vec2 param_12 = v3.xy;
    r4 = hdTex1(param_12);
    r4 = r1.xxxx * r4;
    r3 = (r3 * r0.yyyy) + r4;
    vec2 param_13 = v3.wz;
    r4 = hdTex2(param_13);
    r1 = (r4 * r1.yyyy) + r3;
    vec4 hdB302 = r0;
    vec3 hdB306 = hdB302.xxx * r1.xyz;
    r0.x = hdB306.x;
    r0.y = hdB306.y;
    r0.z = hdB306.z;
    vec4 hdB313 = r1;
    vec3 hdB317 = hdB313.www * v1.xyz;
    r1.x = hdB317.x;
    r1.y = hdB317.y;
    r1.z = hdB317.z;
    vec4 hdB324 = r0;
    vec3 hdB328 = hdB324.xyz * v0.xyz;
    r0.x = hdB328.x;
    r0.y = hdB328.y;
    r0.z = hdB328.z;
    vec4 hdB335 = r0;
    vec4 hdB337 = r0;
    vec3 hdB339 = hdB335.xyz + hdB337.xyz;
    r0.x = hdB339.x;
    r0.y = hdB339.y;
    r0.z = hdB339.z;
    vec4 hdB351 = r0;
    vec3 hdB353 = (r1.xyz * r2.xxx) + hdB351.xyz;
    r0.x = hdB353.x;
    r0.y = hdB353.y;
    r0.z = hdB353.z;
    vec4 hdB360 = r0;
    vec3 hdB367 = hdB360.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB367.x;
    r0.y = hdB367.y;
    r0.z = hdB367.z;
    vec3 hdB382 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB382.x;
    oC0.y = hdB382.y;
    oC0.z = hdB382.z;
    oC0.w = 1.0;
    bool hdB395 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB403;
    if (hdB395)
    {
        hdB403 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB403 = hdB395;
    }
    if (hdB403)
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
    bool _1278 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1288;
    if (_1278)
    {
        _1288 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1288 = _1278;
    }
    if (_1288)
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
        bool _1313 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1328;
        if (!_1313)
        {
            _1328 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1328 = _1313;
        }
        if (_1328)
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
