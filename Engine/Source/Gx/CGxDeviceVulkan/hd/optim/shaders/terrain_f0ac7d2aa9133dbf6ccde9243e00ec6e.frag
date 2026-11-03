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
float _RESERVED_IDENTIFIER_FIXUP_1484;
vec4 _RESERVED_IDENTIFIER_FIXUP_1485;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_580 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_583 = _RESERVED_IDENTIFIER_FIXUP_580.xy;
    float _RESERVED_IDENTIFIER_FIXUP_585 = _RESERVED_IDENTIFIER_FIXUP_580.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_583;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_585;
    vec4 _RESERVED_IDENTIFIER_FIXUP_586 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_589 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_593 = _RESERVED_IDENTIFIER_FIXUP_589.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1228;
    _RESERVED_IDENTIFIER_FIXUP_1228.w = _RESERVED_IDENTIFIER_FIXUP_593;
    vec2 _RESERVED_IDENTIFIER_FIXUP_597 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_599 = _RESERVED_IDENTIFIER_FIXUP_597.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_586;
    _RESERVED_IDENTIFIER_FIXUP_1230.y = _RESERVED_IDENTIFIER_FIXUP_599;
    float _RESERVED_IDENTIFIER_FIXUP_601 = _RESERVED_IDENTIFIER_FIXUP_597.y;
    _RESERVED_IDENTIFIER_FIXUP_1230.z = _RESERVED_IDENTIFIER_FIXUP_601;
    vec2 _RESERVED_IDENTIFIER_FIXUP_607 = _RESERVED_IDENTIFIER_FIXUP_1230.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1234 = _RESERVED_IDENTIFIER_FIXUP_1228;
    _RESERVED_IDENTIFIER_FIXUP_1234.x = _RESERVED_IDENTIFIER_FIXUP_607.x;
    _RESERVED_IDENTIFIER_FIXUP_1234.y = _RESERVED_IDENTIFIER_FIXUP_607.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1234.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_593;
    float _RESERVED_IDENTIFIER_FIXUP_622 = _RESERVED_IDENTIFIER_FIXUP_586.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1230.x = _RESERVED_IDENTIFIER_FIXUP_622;
    vec2 _RESERVED_IDENTIFIER_FIXUP_636 = _RESERVED_IDENTIFIER_FIXUP_1230.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1247 = _RESERVED_IDENTIFIER_FIXUP_1228;
    _RESERVED_IDENTIFIER_FIXUP_1247.x = _RESERVED_IDENTIFIER_FIXUP_636.x;
    _RESERVED_IDENTIFIER_FIXUP_1247.y = _RESERVED_IDENTIFIER_FIXUP_636.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1247.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_593;
    float _RESERVED_IDENTIFIER_FIXUP_651 = _RESERVED_IDENTIFIER_FIXUP_622 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1230.x = _RESERVED_IDENTIFIER_FIXUP_651;
    vec2 _RESERVED_IDENTIFIER_FIXUP_658 = _RESERVED_IDENTIFIER_FIXUP_1230.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1256;
    _RESERVED_IDENTIFIER_FIXUP_1256.x = _RESERVED_IDENTIFIER_FIXUP_658.x;
    _RESERVED_IDENTIFIER_FIXUP_1256.y = _RESERVED_IDENTIFIER_FIXUP_658.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_668 = _RESERVED_IDENTIFIER_FIXUP_1230.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1260;
    _RESERVED_IDENTIFIER_FIXUP_1260.x = _RESERVED_IDENTIFIER_FIXUP_668.x;
    _RESERVED_IDENTIFIER_FIXUP_1260.y = _RESERVED_IDENTIFIER_FIXUP_668.y;
    _RESERVED_IDENTIFIER_FIXUP_1256.w = _RESERVED_IDENTIFIER_FIXUP_593;
    _RESERVED_IDENTIFIER_FIXUP_1260.w = _RESERVED_IDENTIFIER_FIXUP_593;
    float _RESERVED_IDENTIFIER_FIXUP_722 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_740 = hdTex3(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1256.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_593;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1260.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_593;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1298;
    _RESERVED_IDENTIFIER_FIXUP_1298.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_722 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_651 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_740.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_1303.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_766 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_740.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_766;
    _RESERVED_IDENTIFIER_FIXUP_1303.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_766;
    vec2 param_11 = texcoord1.wz;
    vec2 param_12 = texcoord0.xy;
    vec2 param_13 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_801 = _RESERVED_IDENTIFIER_FIXUP_1303.xxx * ((hdTex2(param_11) * _RESERVED_IDENTIFIER_FIXUP_740.yyyy) + ((hdTex0(param_12) * _RESERVED_IDENTIFIER_FIXUP_1303.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_740.xxxx * hdTex1(param_13)))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1310;
    _RESERVED_IDENTIFIER_FIXUP_1310.x = _RESERVED_IDENTIFIER_FIXUP_801.x;
    _RESERVED_IDENTIFIER_FIXUP_1310.y = _RESERVED_IDENTIFIER_FIXUP_801.y;
    _RESERVED_IDENTIFIER_FIXUP_1310.z = _RESERVED_IDENTIFIER_FIXUP_801.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1316;
    _RESERVED_IDENTIFIER_FIXUP_1316.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1316.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1316.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_823 = _RESERVED_IDENTIFIER_FIXUP_1310.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1484).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1322;
    _RESERVED_IDENTIFIER_FIXUP_1322.x = _RESERVED_IDENTIFIER_FIXUP_823.x;
    _RESERVED_IDENTIFIER_FIXUP_1322.y = _RESERVED_IDENTIFIER_FIXUP_823.y;
    _RESERVED_IDENTIFIER_FIXUP_1322.z = _RESERVED_IDENTIFIER_FIXUP_823.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_834 = _RESERVED_IDENTIFIER_FIXUP_1322.xyz + _RESERVED_IDENTIFIER_FIXUP_1322.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1328;
    _RESERVED_IDENTIFIER_FIXUP_1328.x = _RESERVED_IDENTIFIER_FIXUP_834.x;
    _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_834.y;
    _RESERVED_IDENTIFIER_FIXUP_1328.z = _RESERVED_IDENTIFIER_FIXUP_834.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_848 = (_RESERVED_IDENTIFIER_FIXUP_1316.xyz * _RESERVED_IDENTIFIER_FIXUP_1298.xxx) + _RESERVED_IDENTIFIER_FIXUP_1328.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1334;
    _RESERVED_IDENTIFIER_FIXUP_1334.x = _RESERVED_IDENTIFIER_FIXUP_848.x;
    _RESERVED_IDENTIFIER_FIXUP_1334.y = _RESERVED_IDENTIFIER_FIXUP_848.y;
    _RESERVED_IDENTIFIER_FIXUP_1334.z = _RESERVED_IDENTIFIER_FIXUP_848.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_861 = _RESERVED_IDENTIFIER_FIXUP_1334.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1340;
    _RESERVED_IDENTIFIER_FIXUP_1340.x = _RESERVED_IDENTIFIER_FIXUP_861.x;
    _RESERVED_IDENTIFIER_FIXUP_1340.y = _RESERVED_IDENTIFIER_FIXUP_861.y;
    _RESERVED_IDENTIFIER_FIXUP_1340.z = _RESERVED_IDENTIFIER_FIXUP_861.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_876 = _RESERVED_IDENTIFIER_FIXUP_1340.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1346;
    _RESERVED_IDENTIFIER_FIXUP_1346.x = _RESERVED_IDENTIFIER_FIXUP_876.x;
    _RESERVED_IDENTIFIER_FIXUP_1346.y = _RESERVED_IDENTIFIER_FIXUP_876.y;
    _RESERVED_IDENTIFIER_FIXUP_1346.z = _RESERVED_IDENTIFIER_FIXUP_876.z;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_583;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_585;
    vec4 _RESERVED_IDENTIFIER_FIXUP_917 = hdLod5(param_14, param_15);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_917;
    _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_599;
    _RESERVED_IDENTIFIER_FIXUP_1359.z = _RESERVED_IDENTIFIER_FIXUP_601;
    vec2 _RESERVED_IDENTIFIER_FIXUP_938 = _RESERVED_IDENTIFIER_FIXUP_1359.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1363 = _RESERVED_IDENTIFIER_FIXUP_1228;
    _RESERVED_IDENTIFIER_FIXUP_1363.x = _RESERVED_IDENTIFIER_FIXUP_938.x;
    _RESERVED_IDENTIFIER_FIXUP_1363.y = _RESERVED_IDENTIFIER_FIXUP_938.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1363.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_593;
    float _RESERVED_IDENTIFIER_FIXUP_953 = _RESERVED_IDENTIFIER_FIXUP_917.x + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1359.x = _RESERVED_IDENTIFIER_FIXUP_953;
    vec2 _RESERVED_IDENTIFIER_FIXUP_967 = _RESERVED_IDENTIFIER_FIXUP_1359.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_1228;
    _RESERVED_IDENTIFIER_FIXUP_1376.x = _RESERVED_IDENTIFIER_FIXUP_967.x;
    _RESERVED_IDENTIFIER_FIXUP_1376.y = _RESERVED_IDENTIFIER_FIXUP_967.y;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1376.xy;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_593;
    float _RESERVED_IDENTIFIER_FIXUP_982 = _RESERVED_IDENTIFIER_FIXUP_953 + hdLod5(param_18, param_19).x;
    _RESERVED_IDENTIFIER_FIXUP_1359.x = _RESERVED_IDENTIFIER_FIXUP_982;
    vec2 _RESERVED_IDENTIFIER_FIXUP_989 = _RESERVED_IDENTIFIER_FIXUP_1359.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1385;
    _RESERVED_IDENTIFIER_FIXUP_1385.x = _RESERVED_IDENTIFIER_FIXUP_989.x;
    _RESERVED_IDENTIFIER_FIXUP_1385.y = _RESERVED_IDENTIFIER_FIXUP_989.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_999 = _RESERVED_IDENTIFIER_FIXUP_1359.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1389;
    _RESERVED_IDENTIFIER_FIXUP_1389.x = _RESERVED_IDENTIFIER_FIXUP_999.x;
    _RESERVED_IDENTIFIER_FIXUP_1389.y = _RESERVED_IDENTIFIER_FIXUP_999.y;
    _RESERVED_IDENTIFIER_FIXUP_1385.w = _RESERVED_IDENTIFIER_FIXUP_593;
    _RESERVED_IDENTIFIER_FIXUP_1389.w = _RESERVED_IDENTIFIER_FIXUP_593;
    vec2 param_20 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1071 = hdTex3(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1385.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_593;
    vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1389.xy;
    float param_24 = _RESERVED_IDENTIFIER_FIXUP_593;
    float _RESERVED_IDENTIFIER_FIXUP_1076 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_722 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_982 + hdLod5(param_21, param_22).x) + hdLod5(param_23, param_24).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1071.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1427;
    _RESERVED_IDENTIFIER_FIXUP_1427.x = _RESERVED_IDENTIFIER_FIXUP_1076;
    float _RESERVED_IDENTIFIER_FIXUP_1081 = (_RESERVED_IDENTIFIER_FIXUP_1076 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434;
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_1081;
    float _RESERVED_IDENTIFIER_FIXUP_1097 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1071.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_1097;
    _RESERVED_IDENTIFIER_FIXUP_1434.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1097;
    vec2 param_25 = texcoord1.wz;
    vec2 param_26 = texcoord0.xy;
    vec2 param_27 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1127 = (hdTex2(param_25) * _RESERVED_IDENTIFIER_FIXUP_1071.yyyy) + ((hdTex0(param_26) * _RESERVED_IDENTIFIER_FIXUP_1434.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1071.xxxx * hdTex1(param_27)));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1132 = _RESERVED_IDENTIFIER_FIXUP_1434.xxx * _RESERVED_IDENTIFIER_FIXUP_1127.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1441;
    _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_1132.x;
    _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1132.y;
    _RESERVED_IDENTIFIER_FIXUP_1441.z = _RESERVED_IDENTIFIER_FIXUP_1132.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1143 = _RESERVED_IDENTIFIER_FIXUP_1127.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_1143.x;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_1143.y;
    _RESERVED_IDENTIFIER_FIXUP_1447.z = _RESERVED_IDENTIFIER_FIXUP_1143.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_1441.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1453;
    _RESERVED_IDENTIFIER_FIXUP_1453.x = _RESERVED_IDENTIFIER_FIXUP_1154.x;
    _RESERVED_IDENTIFIER_FIXUP_1453.y = _RESERVED_IDENTIFIER_FIXUP_1154.y;
    _RESERVED_IDENTIFIER_FIXUP_1453.z = _RESERVED_IDENTIFIER_FIXUP_1154.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1165 = _RESERVED_IDENTIFIER_FIXUP_1453.xyz + _RESERVED_IDENTIFIER_FIXUP_1453.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1459;
    _RESERVED_IDENTIFIER_FIXUP_1459.x = _RESERVED_IDENTIFIER_FIXUP_1165.x;
    _RESERVED_IDENTIFIER_FIXUP_1459.y = _RESERVED_IDENTIFIER_FIXUP_1165.y;
    _RESERVED_IDENTIFIER_FIXUP_1459.z = _RESERVED_IDENTIFIER_FIXUP_1165.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1179 = (_RESERVED_IDENTIFIER_FIXUP_1447.xyz * _RESERVED_IDENTIFIER_FIXUP_1427.xxx) + _RESERVED_IDENTIFIER_FIXUP_1459.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1465;
    _RESERVED_IDENTIFIER_FIXUP_1465.x = _RESERVED_IDENTIFIER_FIXUP_1179.x;
    _RESERVED_IDENTIFIER_FIXUP_1465.y = _RESERVED_IDENTIFIER_FIXUP_1179.y;
    _RESERVED_IDENTIFIER_FIXUP_1465.z = _RESERVED_IDENTIFIER_FIXUP_1179.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1192 = _RESERVED_IDENTIFIER_FIXUP_1465.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1471;
    _RESERVED_IDENTIFIER_FIXUP_1471.x = _RESERVED_IDENTIFIER_FIXUP_1192.x;
    _RESERVED_IDENTIFIER_FIXUP_1471.y = _RESERVED_IDENTIFIER_FIXUP_1192.y;
    _RESERVED_IDENTIFIER_FIXUP_1471.z = _RESERVED_IDENTIFIER_FIXUP_1192.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1471.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1346.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_517 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218;
    if (_RESERVED_IDENTIFIER_FIXUP_490 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1218 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_490), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_517);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1218 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_517);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1218;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1081);
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
    r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB67 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB67.x;
    r1.w = hdB67.y;
    vec2 hdB77 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB77.x;
    r0.z = hdB77.y;
    vec2 hdB99 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB99.x;
    r1.y = hdB99.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB119 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB119.x;
    r1.w = hdB119.y;
    vec2 hdB130 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB130.x;
    r1.y = hdB130.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB153 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB153.x;
    r1.y = hdB153.y;
    vec2 hdB164 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB164.x;
    r2.y = hdB164.y;
    vec2 hdB171 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB171.x;
    r1.w = hdB171.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB190 = vec2(1.0, 0.0) * v5.zx;
    r2.z = hdB190.x;
    r2.w = hdB190.y;
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
    vec4 hdB298 = r0;
    vec3 hdB302 = hdB298.xxx * r1.xyz;
    r0.x = hdB302.x;
    r0.y = hdB302.y;
    r0.z = hdB302.z;
    vec4 hdB309 = r1;
    vec3 hdB313 = hdB309.www * v1.xyz;
    r1.x = hdB313.x;
    r1.y = hdB313.y;
    r1.z = hdB313.z;
    vec4 hdB320 = r0;
    vec3 hdB324 = hdB320.xyz * v0.xyz;
    r0.x = hdB324.x;
    r0.y = hdB324.y;
    r0.z = hdB324.z;
    vec4 hdB331 = r0;
    vec4 hdB333 = r0;
    vec3 hdB335 = hdB331.xyz + hdB333.xyz;
    r0.x = hdB335.x;
    r0.y = hdB335.y;
    r0.z = hdB335.z;
    vec4 hdB347 = r0;
    vec3 hdB349 = (r1.xyz * r2.xxx) + hdB347.xyz;
    r0.x = hdB349.x;
    r0.y = hdB349.y;
    r0.z = hdB349.z;
    vec4 hdB356 = r0;
    vec3 hdB363 = hdB356.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB363.x;
    r0.y = hdB363.y;
    r0.z = hdB363.z;
    vec3 hdB378 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB378.x;
    oC0.y = hdB378.y;
    oC0.z = hdB378.z;
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
    bool _1381 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1391;
    if (_1381)
    {
        _1391 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1391 = _1381;
    }
    if (_1391)
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
        bool _1416 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1431;
        if (!_1416)
        {
            _1431 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1431 = _1416;
        }
        if (_1431)
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
