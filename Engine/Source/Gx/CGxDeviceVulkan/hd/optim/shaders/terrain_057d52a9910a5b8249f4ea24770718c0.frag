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
float _RESERVED_IDENTIFIER_FIXUP_1486;
vec4 _RESERVED_IDENTIFIER_FIXUP_1487;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_572 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_575 = _RESERVED_IDENTIFIER_FIXUP_572.xy;
    float _RESERVED_IDENTIFIER_FIXUP_577 = _RESERVED_IDENTIFIER_FIXUP_572.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_575;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_577;
    vec4 _RESERVED_IDENTIFIER_FIXUP_578 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_581 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_585 = _RESERVED_IDENTIFIER_FIXUP_581.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1214.w = _RESERVED_IDENTIFIER_FIXUP_585;
    vec2 _RESERVED_IDENTIFIER_FIXUP_589 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_591 = _RESERVED_IDENTIFIER_FIXUP_589.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1216 = _RESERVED_IDENTIFIER_FIXUP_578;
    _RESERVED_IDENTIFIER_FIXUP_1216.y = _RESERVED_IDENTIFIER_FIXUP_591;
    float _RESERVED_IDENTIFIER_FIXUP_593 = _RESERVED_IDENTIFIER_FIXUP_589.y;
    _RESERVED_IDENTIFIER_FIXUP_1216.z = _RESERVED_IDENTIFIER_FIXUP_593;
    vec2 _RESERVED_IDENTIFIER_FIXUP_599 = _RESERVED_IDENTIFIER_FIXUP_1216.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1220 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1220.x = _RESERVED_IDENTIFIER_FIXUP_599.x;
    _RESERVED_IDENTIFIER_FIXUP_1220.y = _RESERVED_IDENTIFIER_FIXUP_599.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1220.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_585;
    float _RESERVED_IDENTIFIER_FIXUP_614 = _RESERVED_IDENTIFIER_FIXUP_578.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1216.x = _RESERVED_IDENTIFIER_FIXUP_614;
    vec2 _RESERVED_IDENTIFIER_FIXUP_628 = _RESERVED_IDENTIFIER_FIXUP_1216.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1233 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1233.x = _RESERVED_IDENTIFIER_FIXUP_628.x;
    _RESERVED_IDENTIFIER_FIXUP_1233.y = _RESERVED_IDENTIFIER_FIXUP_628.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1233.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_585;
    float _RESERVED_IDENTIFIER_FIXUP_643 = _RESERVED_IDENTIFIER_FIXUP_614 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1216.x = _RESERVED_IDENTIFIER_FIXUP_643;
    vec2 _RESERVED_IDENTIFIER_FIXUP_650 = _RESERVED_IDENTIFIER_FIXUP_1216.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1242;
    _RESERVED_IDENTIFIER_FIXUP_1242.x = _RESERVED_IDENTIFIER_FIXUP_650.x;
    _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_650.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_660 = _RESERVED_IDENTIFIER_FIXUP_1216.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1246;
    _RESERVED_IDENTIFIER_FIXUP_1246.x = _RESERVED_IDENTIFIER_FIXUP_660.x;
    _RESERVED_IDENTIFIER_FIXUP_1246.y = _RESERVED_IDENTIFIER_FIXUP_660.y;
    _RESERVED_IDENTIFIER_FIXUP_1242.w = _RESERVED_IDENTIFIER_FIXUP_585;
    _RESERVED_IDENTIFIER_FIXUP_1246.w = _RESERVED_IDENTIFIER_FIXUP_585;
    float _RESERVED_IDENTIFIER_FIXUP_714 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_732 = hdTex1(param_6);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1289;
    _RESERVED_IDENTIFIER_FIXUP_1289.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_732.xyz, vec3(1.0)), 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_751 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_1289.y = _RESERVED_IDENTIFIER_FIXUP_751;
    vec3 _RESERVED_IDENTIFIER_FIXUP_758 = OptTex0( texcoord0.xyz).xyz;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1242.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_585;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1246.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_585;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1488 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_714 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_643 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_732.w), _RESERVED_IDENTIFIER_FIXUP_758 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1486).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_769 = _RESERVED_IDENTIFIER_FIXUP_1488.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = _RESERVED_IDENTIFIER_FIXUP_769 + _RESERVED_IDENTIFIER_FIXUP_769;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_1488;
    _RESERVED_IDENTIFIER_FIXUP_1299.y = _RESERVED_IDENTIFIER_FIXUP_772.x;
    _RESERVED_IDENTIFIER_FIXUP_1299.z = _RESERVED_IDENTIFIER_FIXUP_772.y;
    _RESERVED_IDENTIFIER_FIXUP_1299.w = _RESERVED_IDENTIFIER_FIXUP_772.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_787 = mix(_RESERVED_IDENTIFIER_FIXUP_1299.yzw, _RESERVED_IDENTIFIER_FIXUP_758, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1289.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1305;
    _RESERVED_IDENTIFIER_FIXUP_1305.x = _RESERVED_IDENTIFIER_FIXUP_787.x;
    _RESERVED_IDENTIFIER_FIXUP_1305.y = _RESERVED_IDENTIFIER_FIXUP_787.y;
    _RESERVED_IDENTIFIER_FIXUP_1305.z = _RESERVED_IDENTIFIER_FIXUP_787.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_797 = _RESERVED_IDENTIFIER_FIXUP_1289.xxxx * _RESERVED_IDENTIFIER_FIXUP_1305;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1311;
    _RESERVED_IDENTIFIER_FIXUP_1311.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1311.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1311.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_813 = _RESERVED_IDENTIFIER_FIXUP_1299.xxx * _RESERVED_IDENTIFIER_FIXUP_1311.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1317;
    _RESERVED_IDENTIFIER_FIXUP_1317.x = _RESERVED_IDENTIFIER_FIXUP_813.x;
    _RESERVED_IDENTIFIER_FIXUP_1317.y = _RESERVED_IDENTIFIER_FIXUP_813.y;
    _RESERVED_IDENTIFIER_FIXUP_1317.z = _RESERVED_IDENTIFIER_FIXUP_813.z;
    _RESERVED_IDENTIFIER_FIXUP_797.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_839 = (_RESERVED_IDENTIFIER_FIXUP_797.xyz * _RESERVED_IDENTIFIER_FIXUP_797.www) + _RESERVED_IDENTIFIER_FIXUP_1317.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1328;
    _RESERVED_IDENTIFIER_FIXUP_1328.x = _RESERVED_IDENTIFIER_FIXUP_839.x;
    _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_839.y;
    _RESERVED_IDENTIFIER_FIXUP_1328.z = _RESERVED_IDENTIFIER_FIXUP_839.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_852 = _RESERVED_IDENTIFIER_FIXUP_1328.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1334;
    _RESERVED_IDENTIFIER_FIXUP_1334.x = _RESERVED_IDENTIFIER_FIXUP_852.x;
    _RESERVED_IDENTIFIER_FIXUP_1334.y = _RESERVED_IDENTIFIER_FIXUP_852.y;
    _RESERVED_IDENTIFIER_FIXUP_1334.z = _RESERVED_IDENTIFIER_FIXUP_852.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_867 = _RESERVED_IDENTIFIER_FIXUP_1334.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1340;
    _RESERVED_IDENTIFIER_FIXUP_1340.x = _RESERVED_IDENTIFIER_FIXUP_867.x;
    _RESERVED_IDENTIFIER_FIXUP_1340.y = _RESERVED_IDENTIFIER_FIXUP_867.y;
    _RESERVED_IDENTIFIER_FIXUP_1340.z = _RESERVED_IDENTIFIER_FIXUP_867.z;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_575;
    float param_12 = _RESERVED_IDENTIFIER_FIXUP_577;
    vec4 _RESERVED_IDENTIFIER_FIXUP_904 = hdLod5(param_11, param_12);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1353 = _RESERVED_IDENTIFIER_FIXUP_904;
    _RESERVED_IDENTIFIER_FIXUP_1353.y = _RESERVED_IDENTIFIER_FIXUP_591;
    _RESERVED_IDENTIFIER_FIXUP_1353.z = _RESERVED_IDENTIFIER_FIXUP_593;
    vec2 _RESERVED_IDENTIFIER_FIXUP_925 = _RESERVED_IDENTIFIER_FIXUP_1353.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_925.x;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_925.y;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1357.xy;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_585;
    float _RESERVED_IDENTIFIER_FIXUP_940 = _RESERVED_IDENTIFIER_FIXUP_904.x + hdLod5(param_13, param_14).x;
    _RESERVED_IDENTIFIER_FIXUP_1353.x = _RESERVED_IDENTIFIER_FIXUP_940;
    vec2 _RESERVED_IDENTIFIER_FIXUP_954 = _RESERVED_IDENTIFIER_FIXUP_1353.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1370 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1370.x = _RESERVED_IDENTIFIER_FIXUP_954.x;
    _RESERVED_IDENTIFIER_FIXUP_1370.y = _RESERVED_IDENTIFIER_FIXUP_954.y;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1370.xy;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_585;
    float _RESERVED_IDENTIFIER_FIXUP_969 = _RESERVED_IDENTIFIER_FIXUP_940 + hdLod5(param_15, param_16).x;
    _RESERVED_IDENTIFIER_FIXUP_1353.x = _RESERVED_IDENTIFIER_FIXUP_969;
    vec2 _RESERVED_IDENTIFIER_FIXUP_976 = _RESERVED_IDENTIFIER_FIXUP_1353.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1379;
    _RESERVED_IDENTIFIER_FIXUP_1379.x = _RESERVED_IDENTIFIER_FIXUP_976.x;
    _RESERVED_IDENTIFIER_FIXUP_1379.y = _RESERVED_IDENTIFIER_FIXUP_976.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_986 = _RESERVED_IDENTIFIER_FIXUP_1353.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1383;
    _RESERVED_IDENTIFIER_FIXUP_1383.x = _RESERVED_IDENTIFIER_FIXUP_986.x;
    _RESERVED_IDENTIFIER_FIXUP_1383.y = _RESERVED_IDENTIFIER_FIXUP_986.y;
    _RESERVED_IDENTIFIER_FIXUP_1379.w = _RESERVED_IDENTIFIER_FIXUP_585;
    _RESERVED_IDENTIFIER_FIXUP_1383.w = _RESERVED_IDENTIFIER_FIXUP_585;
    vec2 param_17 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1058 = hdTex1(param_17);
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1379.xy;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_585;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1383.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_585;
    float _RESERVED_IDENTIFIER_FIXUP_1063 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_714 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_969 + hdLod5(param_18, param_19).x) + hdLod5(param_20, param_21).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1058.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1426;
    _RESERVED_IDENTIFIER_FIXUP_1426.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1058.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1426.y = _RESERVED_IDENTIFIER_FIXUP_751;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1082 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1084 = _RESERVED_IDENTIFIER_FIXUP_1082.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1489 = vec4(_RESERVED_IDENTIFIER_FIXUP_1063, _RESERVED_IDENTIFIER_FIXUP_1084 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1095 = _RESERVED_IDENTIFIER_FIXUP_1489.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1098 = _RESERVED_IDENTIFIER_FIXUP_1095 + _RESERVED_IDENTIFIER_FIXUP_1095;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1436 = _RESERVED_IDENTIFIER_FIXUP_1489;
    _RESERVED_IDENTIFIER_FIXUP_1436.y = _RESERVED_IDENTIFIER_FIXUP_1098.x;
    _RESERVED_IDENTIFIER_FIXUP_1436.z = _RESERVED_IDENTIFIER_FIXUP_1098.y;
    _RESERVED_IDENTIFIER_FIXUP_1436.w = _RESERVED_IDENTIFIER_FIXUP_1098.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1113 = mix(_RESERVED_IDENTIFIER_FIXUP_1436.yzw, _RESERVED_IDENTIFIER_FIXUP_1084, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1426.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1442 = _RESERVED_IDENTIFIER_FIXUP_1082;
    _RESERVED_IDENTIFIER_FIXUP_1442.x = _RESERVED_IDENTIFIER_FIXUP_1113.x;
    _RESERVED_IDENTIFIER_FIXUP_1442.y = _RESERVED_IDENTIFIER_FIXUP_1113.y;
    _RESERVED_IDENTIFIER_FIXUP_1442.z = _RESERVED_IDENTIFIER_FIXUP_1113.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_1426.xxxx * _RESERVED_IDENTIFIER_FIXUP_1442;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1128 = _RESERVED_IDENTIFIER_FIXUP_1123.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1448;
    _RESERVED_IDENTIFIER_FIXUP_1448.x = _RESERVED_IDENTIFIER_FIXUP_1128.x;
    _RESERVED_IDENTIFIER_FIXUP_1448.y = _RESERVED_IDENTIFIER_FIXUP_1128.y;
    _RESERVED_IDENTIFIER_FIXUP_1448.z = _RESERVED_IDENTIFIER_FIXUP_1128.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1436.xxx * _RESERVED_IDENTIFIER_FIXUP_1448.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1454;
    _RESERVED_IDENTIFIER_FIXUP_1454.x = _RESERVED_IDENTIFIER_FIXUP_1139.x;
    _RESERVED_IDENTIFIER_FIXUP_1454.y = _RESERVED_IDENTIFIER_FIXUP_1139.y;
    _RESERVED_IDENTIFIER_FIXUP_1454.z = _RESERVED_IDENTIFIER_FIXUP_1139.z;
    float _RESERVED_IDENTIFIER_FIXUP_1149 = (_RESERVED_IDENTIFIER_FIXUP_1063 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1123.w = _RESERVED_IDENTIFIER_FIXUP_1149;
    _RESERVED_IDENTIFIER_FIXUP_1123.w = _RESERVED_IDENTIFIER_FIXUP_1149;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1165 = (_RESERVED_IDENTIFIER_FIXUP_1123.xyz * _RESERVED_IDENTIFIER_FIXUP_1123.www) + _RESERVED_IDENTIFIER_FIXUP_1454.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1467;
    _RESERVED_IDENTIFIER_FIXUP_1467.x = _RESERVED_IDENTIFIER_FIXUP_1165.x;
    _RESERVED_IDENTIFIER_FIXUP_1467.y = _RESERVED_IDENTIFIER_FIXUP_1165.y;
    _RESERVED_IDENTIFIER_FIXUP_1467.z = _RESERVED_IDENTIFIER_FIXUP_1165.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1178 = _RESERVED_IDENTIFIER_FIXUP_1467.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1473;
    _RESERVED_IDENTIFIER_FIXUP_1473.x = _RESERVED_IDENTIFIER_FIXUP_1178.x;
    _RESERVED_IDENTIFIER_FIXUP_1473.y = _RESERVED_IDENTIFIER_FIXUP_1178.y;
    _RESERVED_IDENTIFIER_FIXUP_1473.z = _RESERVED_IDENTIFIER_FIXUP_1178.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1473.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_441 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_450;
    if (_RESERVED_IDENTIFIER_FIXUP_441)
    {
        _RESERVED_IDENTIFIER_FIXUP_450 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_450 = _RESERVED_IDENTIFIER_FIXUP_441;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_450)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_487 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1340.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_513 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1204;
    if (_RESERVED_IDENTIFIER_FIXUP_487 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1204 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_487), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_513);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1204 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_513);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1204;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1149);
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
    r0.y = abs(optRegs.rows[optTile*82u+uint(1)].x);
    r1 = OptTex0( v2.xyz);
    vec3 hdB273 = r1.xyz * v0.xyz;
    r2.y = hdB273.x;
    r2.z = hdB273.y;
    r2.w = hdB273.z;
    vec4 hdB280 = r2;
    vec4 hdB282 = r2;
    vec3 hdB284 = hdB280.yzw + hdB282.yzw;
    r2.y = hdB284.x;
    r2.z = hdB284.y;
    r2.w = hdB284.z;
    vec4 hdB293 = r1;
    vec3 hdB302 = mix(r2.yzw, hdB293.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r1.x = hdB302.x;
    r1.y = hdB302.y;
    r1.z = hdB302.z;
    r0 = r0.xxxx * r1;
    vec3 hdB317 = r0.www * v1.xyz;
    r1.x = hdB317.x;
    r1.y = hdB317.y;
    r1.z = hdB317.z;
    vec4 hdB326 = r1;
    vec3 hdB328 = r2.xxx * hdB326.xyz;
    r1.x = hdB328.x;
    r1.y = hdB328.y;
    r1.z = hdB328.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB342 = r0;
    vec4 hdB344 = r0;
    vec3 hdB349 = (hdB342.xyz * hdB344.www) + r1.xyz;
    r0.x = hdB349.x;
    r0.y = hdB349.y;
    r0.z = hdB349.z;
    vec4 hdB356 = r0;
    vec3 hdB363 = hdB356.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB363.x;
    r0.y = hdB363.y;
    r0.z = hdB363.z;
    vec3 hdB378 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB378.x;
    oC0.y = hdB378.y;
    oC0.z = hdB378.z;
    oC0.w = 1.0;
    bool hdB389 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB397;
    if (hdB389)
    {
        hdB397 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB397 = hdB389;
    }
    if (hdB397)
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
    bool _1297 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1307;
    if (_1297)
    {
        _1307 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1307 = _1297;
    }
    if (_1307)
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
        bool _1332 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1347;
        if (!_1332)
        {
            _1347 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1347 = _1332;
        }
        if (_1347)
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
