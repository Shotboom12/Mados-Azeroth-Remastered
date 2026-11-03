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
float _RESERVED_IDENTIFIER_FIXUP_1604;
vec4 _RESERVED_IDENTIFIER_FIXUP_1605;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_603 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_606 = _RESERVED_IDENTIFIER_FIXUP_603.xy;
    float _RESERVED_IDENTIFIER_FIXUP_608 = _RESERVED_IDENTIFIER_FIXUP_603.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_606;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_608;
    vec4 _RESERVED_IDENTIFIER_FIXUP_609 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1302;
    _RESERVED_IDENTIFIER_FIXUP_1302.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_617 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1304;
    _RESERVED_IDENTIFIER_FIXUP_1304.x = _RESERVED_IDENTIFIER_FIXUP_617.x;
    _RESERVED_IDENTIFIER_FIXUP_1304.y = _RESERVED_IDENTIFIER_FIXUP_617.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_627 = _RESERVED_IDENTIFIER_FIXUP_1304.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1308 = _RESERVED_IDENTIFIER_FIXUP_1302;
    _RESERVED_IDENTIFIER_FIXUP_1308.x = _RESERVED_IDENTIFIER_FIXUP_627.x;
    _RESERVED_IDENTIFIER_FIXUP_1308.y = _RESERVED_IDENTIFIER_FIXUP_627.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1308.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_609.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_650 = _RESERVED_IDENTIFIER_FIXUP_1304.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1320 = _RESERVED_IDENTIFIER_FIXUP_1302;
    _RESERVED_IDENTIFIER_FIXUP_1320.x = _RESERVED_IDENTIFIER_FIXUP_650.x;
    _RESERVED_IDENTIFIER_FIXUP_1320.y = _RESERVED_IDENTIFIER_FIXUP_650.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1320.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_609.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_669 = _RESERVED_IDENTIFIER_FIXUP_1304.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1328;
    _RESERVED_IDENTIFIER_FIXUP_1328.x = _RESERVED_IDENTIFIER_FIXUP_669.x;
    _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_669.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_679 = _RESERVED_IDENTIFIER_FIXUP_1304.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1332;
    _RESERVED_IDENTIFIER_FIXUP_1332.x = _RESERVED_IDENTIFIER_FIXUP_679.x;
    _RESERVED_IDENTIFIER_FIXUP_1332.y = _RESERVED_IDENTIFIER_FIXUP_679.y;
    _RESERVED_IDENTIFIER_FIXUP_1328.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1328.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_609.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1332.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_747 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_765 = hdTex2(param_8);
    vec2 _RESERVED_IDENTIFIER_FIXUP_775 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1380;
    _RESERVED_IDENTIFIER_FIXUP_1380.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    float _RESERVED_IDENTIFIER_FIXUP_779 = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1380.y = _RESERVED_IDENTIFIER_FIXUP_779;
    vec3 _RESERVED_IDENTIFIER_FIXUP_781 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1604).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_784 = _RESERVED_IDENTIFIER_FIXUP_781 + _RESERVED_IDENTIFIER_FIXUP_781;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_765;
    _RESERVED_IDENTIFIER_FIXUP_1384.y = _RESERVED_IDENTIFIER_FIXUP_784.x;
    _RESERVED_IDENTIFIER_FIXUP_1384.z = _RESERVED_IDENTIFIER_FIXUP_784.y;
    _RESERVED_IDENTIFIER_FIXUP_1384.w = _RESERVED_IDENTIFIER_FIXUP_784.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_798 = OptTex0( texcoord0.xyz).xyz;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1332.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1606 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_747 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_609 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_765.w), _RESERVED_IDENTIFIER_FIXUP_1384.yzw * _RESERVED_IDENTIFIER_FIXUP_798);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_813 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1380.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_814 = mix(_RESERVED_IDENTIFIER_FIXUP_1606.yzw, _RESERVED_IDENTIFIER_FIXUP_798, _RESERVED_IDENTIFIER_FIXUP_813);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1396;
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_814.x;
    _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_814.y;
    _RESERVED_IDENTIFIER_FIXUP_1396.z = _RESERVED_IDENTIFIER_FIXUP_814.z;
    vec2 param_11 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_828 = hdTex1(param_11).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_829 = _RESERVED_IDENTIFIER_FIXUP_1384.yzw * _RESERVED_IDENTIFIER_FIXUP_828;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1607 = vec4(_RESERVED_IDENTIFIER_FIXUP_829.x, _RESERVED_IDENTIFIER_FIXUP_779, _RESERVED_IDENTIFIER_FIXUP_829.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_844 = mix(_RESERVED_IDENTIFIER_FIXUP_1607.xzw, _RESERVED_IDENTIFIER_FIXUP_828, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1607.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1408;
    _RESERVED_IDENTIFIER_FIXUP_1408.x = _RESERVED_IDENTIFIER_FIXUP_844.x;
    _RESERVED_IDENTIFIER_FIXUP_1408.y = _RESERVED_IDENTIFIER_FIXUP_844.y;
    _RESERVED_IDENTIFIER_FIXUP_1408.z = _RESERVED_IDENTIFIER_FIXUP_844.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_855 = mix(_RESERVED_IDENTIFIER_FIXUP_1396, _RESERVED_IDENTIFIER_FIXUP_1408, _RESERVED_IDENTIFIER_FIXUP_1384.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1414;
    _RESERVED_IDENTIFIER_FIXUP_1414.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1414.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1414.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_871 = _RESERVED_IDENTIFIER_FIXUP_1606.xxx * _RESERVED_IDENTIFIER_FIXUP_1414.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1420;
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_871.x;
    _RESERVED_IDENTIFIER_FIXUP_1420.y = _RESERVED_IDENTIFIER_FIXUP_871.y;
    _RESERVED_IDENTIFIER_FIXUP_1420.z = _RESERVED_IDENTIFIER_FIXUP_871.z;
    _RESERVED_IDENTIFIER_FIXUP_855.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_897 = (_RESERVED_IDENTIFIER_FIXUP_855.xyz * _RESERVED_IDENTIFIER_FIXUP_855.www) + _RESERVED_IDENTIFIER_FIXUP_1420.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1431;
    _RESERVED_IDENTIFIER_FIXUP_1431.x = _RESERVED_IDENTIFIER_FIXUP_897.x;
    _RESERVED_IDENTIFIER_FIXUP_1431.y = _RESERVED_IDENTIFIER_FIXUP_897.y;
    _RESERVED_IDENTIFIER_FIXUP_1431.z = _RESERVED_IDENTIFIER_FIXUP_897.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_910 = _RESERVED_IDENTIFIER_FIXUP_1431.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437;
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_910.x;
    _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_910.y;
    _RESERVED_IDENTIFIER_FIXUP_1437.z = _RESERVED_IDENTIFIER_FIXUP_910.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_925 = _RESERVED_IDENTIFIER_FIXUP_1437.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1443;
    _RESERVED_IDENTIFIER_FIXUP_1443.x = _RESERVED_IDENTIFIER_FIXUP_925.x;
    _RESERVED_IDENTIFIER_FIXUP_1443.y = _RESERVED_IDENTIFIER_FIXUP_925.y;
    _RESERVED_IDENTIFIER_FIXUP_1443.z = _RESERVED_IDENTIFIER_FIXUP_925.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_606;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_608;
    vec4 _RESERVED_IDENTIFIER_FIXUP_964 = hdLod5(param_12, param_13);
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1308.xy;
    float param_15 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_964.y = hdLod5(param_14, param_15).x;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1320.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_964.z = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1328.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_964.w = hdLod5(param_18, param_19).x;
    vec2 param_20 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1120 = hdTex2(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1332.xy;
    float param_22 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1125 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_747 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_964 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_21, param_22).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1120.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1139 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1536 = _RESERVED_IDENTIFIER_FIXUP_1120;
    _RESERVED_IDENTIFIER_FIXUP_1536.y = _RESERVED_IDENTIFIER_FIXUP_1139.x;
    _RESERVED_IDENTIFIER_FIXUP_1536.z = _RESERVED_IDENTIFIER_FIXUP_1139.y;
    _RESERVED_IDENTIFIER_FIXUP_1536.w = _RESERVED_IDENTIFIER_FIXUP_1139.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1149 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_1149.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1608 = vec4(_RESERVED_IDENTIFIER_FIXUP_1125, _RESERVED_IDENTIFIER_FIXUP_1536.yzw * _RESERVED_IDENTIFIER_FIXUP_1153);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1169 = mix(_RESERVED_IDENTIFIER_FIXUP_1608.yzw, _RESERVED_IDENTIFIER_FIXUP_1153, _RESERVED_IDENTIFIER_FIXUP_813);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1548 = _RESERVED_IDENTIFIER_FIXUP_1149;
    _RESERVED_IDENTIFIER_FIXUP_1548.x = _RESERVED_IDENTIFIER_FIXUP_1169.x;
    _RESERVED_IDENTIFIER_FIXUP_1548.y = _RESERVED_IDENTIFIER_FIXUP_1169.y;
    _RESERVED_IDENTIFIER_FIXUP_1548.z = _RESERVED_IDENTIFIER_FIXUP_1169.z;
    vec2 param_23 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1179 = hdTex1(param_23);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_1179.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_1536.yzw * _RESERVED_IDENTIFIER_FIXUP_1183;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1609 = vec4(_RESERVED_IDENTIFIER_FIXUP_1184.x, _RESERVED_IDENTIFIER_FIXUP_779, _RESERVED_IDENTIFIER_FIXUP_1184.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = mix(_RESERVED_IDENTIFIER_FIXUP_1609.xzw, _RESERVED_IDENTIFIER_FIXUP_1183, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1609.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_1179;
    _RESERVED_IDENTIFIER_FIXUP_1560.x = _RESERVED_IDENTIFIER_FIXUP_1199.x;
    _RESERVED_IDENTIFIER_FIXUP_1560.y = _RESERVED_IDENTIFIER_FIXUP_1199.y;
    _RESERVED_IDENTIFIER_FIXUP_1560.z = _RESERVED_IDENTIFIER_FIXUP_1199.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1210 = mix(_RESERVED_IDENTIFIER_FIXUP_1548, _RESERVED_IDENTIFIER_FIXUP_1560, _RESERVED_IDENTIFIER_FIXUP_1536.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1215 = _RESERVED_IDENTIFIER_FIXUP_1210.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1566;
    _RESERVED_IDENTIFIER_FIXUP_1566.x = _RESERVED_IDENTIFIER_FIXUP_1215.x;
    _RESERVED_IDENTIFIER_FIXUP_1566.y = _RESERVED_IDENTIFIER_FIXUP_1215.y;
    _RESERVED_IDENTIFIER_FIXUP_1566.z = _RESERVED_IDENTIFIER_FIXUP_1215.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_1608.xxx * _RESERVED_IDENTIFIER_FIXUP_1566.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1572;
    _RESERVED_IDENTIFIER_FIXUP_1572.x = _RESERVED_IDENTIFIER_FIXUP_1226.x;
    _RESERVED_IDENTIFIER_FIXUP_1572.y = _RESERVED_IDENTIFIER_FIXUP_1226.y;
    _RESERVED_IDENTIFIER_FIXUP_1572.z = _RESERVED_IDENTIFIER_FIXUP_1226.z;
    float _RESERVED_IDENTIFIER_FIXUP_1236 = (_RESERVED_IDENTIFIER_FIXUP_1125 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1210.w = _RESERVED_IDENTIFIER_FIXUP_1236;
    _RESERVED_IDENTIFIER_FIXUP_1210.w = _RESERVED_IDENTIFIER_FIXUP_1236;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1252 = (_RESERVED_IDENTIFIER_FIXUP_1210.xyz * _RESERVED_IDENTIFIER_FIXUP_1210.www) + _RESERVED_IDENTIFIER_FIXUP_1572.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1585;
    _RESERVED_IDENTIFIER_FIXUP_1585.x = _RESERVED_IDENTIFIER_FIXUP_1252.x;
    _RESERVED_IDENTIFIER_FIXUP_1585.y = _RESERVED_IDENTIFIER_FIXUP_1252.y;
    _RESERVED_IDENTIFIER_FIXUP_1585.z = _RESERVED_IDENTIFIER_FIXUP_1252.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1585.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1591;
    _RESERVED_IDENTIFIER_FIXUP_1591.x = _RESERVED_IDENTIFIER_FIXUP_1265.x;
    _RESERVED_IDENTIFIER_FIXUP_1591.y = _RESERVED_IDENTIFIER_FIXUP_1265.y;
    _RESERVED_IDENTIFIER_FIXUP_1591.z = _RESERVED_IDENTIFIER_FIXUP_1265.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1591.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_471 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_480;
    if (_RESERVED_IDENTIFIER_FIXUP_471)
    {
        _RESERVED_IDENTIFIER_FIXUP_480 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_480 = _RESERVED_IDENTIFIER_FIXUP_471;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_480)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_517 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1443.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_543 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291;
    if (_RESERVED_IDENTIFIER_FIXUP_517 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1291 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_517), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_543);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1291 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_543);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1291;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1236);
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
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB69 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB69.x;
    r2.y = hdB69.y;
    vec2 hdB92 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB92.x;
    r1.y = hdB92.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB116 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB116.x;
    r1.y = hdB116.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB136 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB136.x;
    r1.y = hdB136.y;
    vec4 hdB141 = r2;
    vec2 hdB147 = hdB141.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB147.x;
    r2.y = hdB147.y;
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
    vec2 param_10 = v3.wz;
    r1 = hdTex2(param_10);
    r2.x = min(r0.x, r1.w);
    vec2 hdB253 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.x = hdB253.x;
    r0.y = hdB253.y;
    vec3 hdB263 = v0.xyz + v0.xyz;
    r1.y = hdB263.x;
    r1.z = hdB263.y;
    r1.w = hdB263.z;
    r3 = OptTex0( v2.xyz);
    vec3 hdB282 = r1.yzw * r3.xyz;
    r2.y = hdB282.x;
    r2.z = hdB282.y;
    r2.w = hdB282.z;
    vec4 hdB291 = r3;
    vec3 hdB299 = mix(r2.yzw, hdB291.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r3.x = hdB299.x;
    r3.y = hdB299.y;
    r3.z = hdB299.z;
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    vec3 hdB315 = r1.yzw * r4.xyz;
    r0.x = hdB315.x;
    r0.z = hdB315.y;
    r0.w = hdB315.z;
    vec4 hdB324 = r4;
    vec3 hdB330 = mix(r0.xzw, hdB324.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = hdB330.x;
    r4.y = hdB330.y;
    r4.z = hdB330.z;
    r0 = mix(r3, r4, r1.xxxx);
    vec3 hdB346 = r0.www * v1.xyz;
    r1.x = hdB346.x;
    r1.y = hdB346.y;
    r1.z = hdB346.z;
    vec4 hdB355 = r1;
    vec3 hdB357 = r2.xxx * hdB355.xyz;
    r1.x = hdB357.x;
    r1.y = hdB357.y;
    r1.z = hdB357.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB371 = r0;
    vec4 hdB373 = r0;
    vec3 hdB378 = (hdB371.xyz * hdB373.www) + r1.xyz;
    r0.x = hdB378.x;
    r0.y = hdB378.y;
    r0.z = hdB378.z;
    vec4 hdB385 = r0;
    vec3 hdB392 = hdB385.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB392.x;
    r0.y = hdB392.y;
    r0.z = hdB392.z;
    vec3 hdB407 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB407.x;
    oC0.y = hdB407.y;
    oC0.z = hdB407.z;
    oC0.w = 1.0;
    bool hdB419 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB427;
    if (hdB419)
    {
        hdB427 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB427 = hdB419;
    }
    if (hdB427)
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
    bool _1334 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1344;
    if (_1334)
    {
        _1344 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1344 = _1334;
    }
    if (_1344)
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
        bool _1369 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1384;
        if (!_1369)
        {
            _1384 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1384 = _1369;
        }
        if (_1384)
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
