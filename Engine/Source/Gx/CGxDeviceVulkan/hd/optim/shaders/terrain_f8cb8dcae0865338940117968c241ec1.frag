#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1583;
vec4 _RESERVED_IDENTIFIER_FIXUP_1584;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
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
    bool _116 = hdOverride >= 0;
    bool _126;
    if (_116)
    {
        _126 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _126 = _116;
    }
    vec4 _127;
    if (_126)
    {
        _127 = vec4(float(hdOverride));
    }
    else
    {
        _127 = value;
    }
    return _127;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _144 = hdOverride >= 0;
    bool _153;
    if (_144)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _153 = _144;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_598 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_601 = _RESERVED_IDENTIFIER_FIXUP_598.xy;
    float _RESERVED_IDENTIFIER_FIXUP_603 = _RESERVED_IDENTIFIER_FIXUP_598.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_601;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_603;
    vec4 _RESERVED_IDENTIFIER_FIXUP_604 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_607 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_611 = _RESERVED_IDENTIFIER_FIXUP_607.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1293.w = _RESERVED_IDENTIFIER_FIXUP_611;
    vec2 _RESERVED_IDENTIFIER_FIXUP_615 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_617 = _RESERVED_IDENTIFIER_FIXUP_615.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_604;
    _RESERVED_IDENTIFIER_FIXUP_1295.y = _RESERVED_IDENTIFIER_FIXUP_617;
    float _RESERVED_IDENTIFIER_FIXUP_619 = _RESERVED_IDENTIFIER_FIXUP_615.y;
    _RESERVED_IDENTIFIER_FIXUP_1295.z = _RESERVED_IDENTIFIER_FIXUP_619;
    vec2 _RESERVED_IDENTIFIER_FIXUP_625 = _RESERVED_IDENTIFIER_FIXUP_1295.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1299.x = _RESERVED_IDENTIFIER_FIXUP_625.x;
    _RESERVED_IDENTIFIER_FIXUP_1299.y = _RESERVED_IDENTIFIER_FIXUP_625.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1299.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_611;
    float _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_604.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1295.x = _RESERVED_IDENTIFIER_FIXUP_640;
    vec2 _RESERVED_IDENTIFIER_FIXUP_654 = _RESERVED_IDENTIFIER_FIXUP_1295.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_654.x;
    _RESERVED_IDENTIFIER_FIXUP_1312.y = _RESERVED_IDENTIFIER_FIXUP_654.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1312.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_611;
    float _RESERVED_IDENTIFIER_FIXUP_669 = _RESERVED_IDENTIFIER_FIXUP_640 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1295.x = _RESERVED_IDENTIFIER_FIXUP_669;
    vec2 _RESERVED_IDENTIFIER_FIXUP_676 = _RESERVED_IDENTIFIER_FIXUP_1295.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1321;
    _RESERVED_IDENTIFIER_FIXUP_1321.x = _RESERVED_IDENTIFIER_FIXUP_676.x;
    _RESERVED_IDENTIFIER_FIXUP_1321.y = _RESERVED_IDENTIFIER_FIXUP_676.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_686 = _RESERVED_IDENTIFIER_FIXUP_1295.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1325;
    _RESERVED_IDENTIFIER_FIXUP_1325.x = _RESERVED_IDENTIFIER_FIXUP_686.x;
    _RESERVED_IDENTIFIER_FIXUP_1325.y = _RESERVED_IDENTIFIER_FIXUP_686.y;
    _RESERVED_IDENTIFIER_FIXUP_1321.w = _RESERVED_IDENTIFIER_FIXUP_611;
    _RESERVED_IDENTIFIER_FIXUP_1325.w = _RESERVED_IDENTIFIER_FIXUP_611;
    float _RESERVED_IDENTIFIER_FIXUP_740 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_758 = hdTex2(param_6);
    vec2 _RESERVED_IDENTIFIER_FIXUP_768 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1365;
    _RESERVED_IDENTIFIER_FIXUP_1365.x = _RESERVED_IDENTIFIER_FIXUP_768.x;
    float _RESERVED_IDENTIFIER_FIXUP_772 = _RESERVED_IDENTIFIER_FIXUP_768.y;
    _RESERVED_IDENTIFIER_FIXUP_1365.y = _RESERVED_IDENTIFIER_FIXUP_772;
    vec3 _RESERVED_IDENTIFIER_FIXUP_774 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1583).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_777 = _RESERVED_IDENTIFIER_FIXUP_774 + _RESERVED_IDENTIFIER_FIXUP_774;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1369 = _RESERVED_IDENTIFIER_FIXUP_758;
    _RESERVED_IDENTIFIER_FIXUP_1369.y = _RESERVED_IDENTIFIER_FIXUP_777.x;
    _RESERVED_IDENTIFIER_FIXUP_1369.z = _RESERVED_IDENTIFIER_FIXUP_777.y;
    _RESERVED_IDENTIFIER_FIXUP_1369.w = _RESERVED_IDENTIFIER_FIXUP_777.z;
    vec2 param_7 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_791 = hdTex0(param_7).xyz;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1321.xy;
    float param_9 = _RESERVED_IDENTIFIER_FIXUP_611;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1325.xy;
    float param_11 = _RESERVED_IDENTIFIER_FIXUP_611;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1585 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_740 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_669 + hdLod5(param_8, param_9).x) + hdLod5(param_10, param_11).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_758.w), _RESERVED_IDENTIFIER_FIXUP_1369.yzw * _RESERVED_IDENTIFIER_FIXUP_791);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_806 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1365.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_807 = mix(_RESERVED_IDENTIFIER_FIXUP_1585.yzw, _RESERVED_IDENTIFIER_FIXUP_791, _RESERVED_IDENTIFIER_FIXUP_806);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381;
    _RESERVED_IDENTIFIER_FIXUP_1381.x = _RESERVED_IDENTIFIER_FIXUP_807.x;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_807.y;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = _RESERVED_IDENTIFIER_FIXUP_807.z;
    vec2 param_12 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_821 = hdTex1(param_12).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_822 = _RESERVED_IDENTIFIER_FIXUP_1369.yzw * _RESERVED_IDENTIFIER_FIXUP_821;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1586 = vec4(_RESERVED_IDENTIFIER_FIXUP_822.x, _RESERVED_IDENTIFIER_FIXUP_772, _RESERVED_IDENTIFIER_FIXUP_822.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_837 = mix(_RESERVED_IDENTIFIER_FIXUP_1586.xzw, _RESERVED_IDENTIFIER_FIXUP_821, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1586.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1393;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_837.x;
    _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_837.y;
    _RESERVED_IDENTIFIER_FIXUP_1393.z = _RESERVED_IDENTIFIER_FIXUP_837.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_848 = mix(_RESERVED_IDENTIFIER_FIXUP_1381, _RESERVED_IDENTIFIER_FIXUP_1393, _RESERVED_IDENTIFIER_FIXUP_1369.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1399;
    _RESERVED_IDENTIFIER_FIXUP_1399.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1399.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1399.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_864 = _RESERVED_IDENTIFIER_FIXUP_1585.xxx * _RESERVED_IDENTIFIER_FIXUP_1399.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1405;
    _RESERVED_IDENTIFIER_FIXUP_1405.x = _RESERVED_IDENTIFIER_FIXUP_864.x;
    _RESERVED_IDENTIFIER_FIXUP_1405.y = _RESERVED_IDENTIFIER_FIXUP_864.y;
    _RESERVED_IDENTIFIER_FIXUP_1405.z = _RESERVED_IDENTIFIER_FIXUP_864.z;
    _RESERVED_IDENTIFIER_FIXUP_848.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_890 = (_RESERVED_IDENTIFIER_FIXUP_848.xyz * _RESERVED_IDENTIFIER_FIXUP_848.www) + _RESERVED_IDENTIFIER_FIXUP_1405.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1416;
    _RESERVED_IDENTIFIER_FIXUP_1416.x = _RESERVED_IDENTIFIER_FIXUP_890.x;
    _RESERVED_IDENTIFIER_FIXUP_1416.y = _RESERVED_IDENTIFIER_FIXUP_890.y;
    _RESERVED_IDENTIFIER_FIXUP_1416.z = _RESERVED_IDENTIFIER_FIXUP_890.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_903 = _RESERVED_IDENTIFIER_FIXUP_1416.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1422;
    _RESERVED_IDENTIFIER_FIXUP_1422.x = _RESERVED_IDENTIFIER_FIXUP_903.x;
    _RESERVED_IDENTIFIER_FIXUP_1422.y = _RESERVED_IDENTIFIER_FIXUP_903.y;
    _RESERVED_IDENTIFIER_FIXUP_1422.z = _RESERVED_IDENTIFIER_FIXUP_903.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_918 = _RESERVED_IDENTIFIER_FIXUP_1422.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1428;
    _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_918.x;
    _RESERVED_IDENTIFIER_FIXUP_1428.y = _RESERVED_IDENTIFIER_FIXUP_918.y;
    _RESERVED_IDENTIFIER_FIXUP_1428.z = _RESERVED_IDENTIFIER_FIXUP_918.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_601;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_603;
    vec4 _RESERVED_IDENTIFIER_FIXUP_957 = hdLod5(param_13, param_14);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1441 = _RESERVED_IDENTIFIER_FIXUP_957;
    _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_617;
    _RESERVED_IDENTIFIER_FIXUP_1441.z = _RESERVED_IDENTIFIER_FIXUP_619;
    vec2 _RESERVED_IDENTIFIER_FIXUP_978 = _RESERVED_IDENTIFIER_FIXUP_1441.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1445 = _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1445.x = _RESERVED_IDENTIFIER_FIXUP_978.x;
    _RESERVED_IDENTIFIER_FIXUP_1445.y = _RESERVED_IDENTIFIER_FIXUP_978.y;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1445.xy;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_611;
    float _RESERVED_IDENTIFIER_FIXUP_993 = _RESERVED_IDENTIFIER_FIXUP_957.x + hdLod5(param_15, param_16).x;
    _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_993;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1007 = _RESERVED_IDENTIFIER_FIXUP_1441.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_1007.x;
    _RESERVED_IDENTIFIER_FIXUP_1458.y = _RESERVED_IDENTIFIER_FIXUP_1007.y;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1458.xy;
    float param_18 = _RESERVED_IDENTIFIER_FIXUP_611;
    float _RESERVED_IDENTIFIER_FIXUP_1022 = _RESERVED_IDENTIFIER_FIXUP_993 + hdLod5(param_17, param_18).x;
    _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_1022;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1029 = _RESERVED_IDENTIFIER_FIXUP_1441.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1467;
    _RESERVED_IDENTIFIER_FIXUP_1467.x = _RESERVED_IDENTIFIER_FIXUP_1029.x;
    _RESERVED_IDENTIFIER_FIXUP_1467.y = _RESERVED_IDENTIFIER_FIXUP_1029.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1039 = _RESERVED_IDENTIFIER_FIXUP_1441.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1471;
    _RESERVED_IDENTIFIER_FIXUP_1471.x = _RESERVED_IDENTIFIER_FIXUP_1039.x;
    _RESERVED_IDENTIFIER_FIXUP_1471.y = _RESERVED_IDENTIFIER_FIXUP_1039.y;
    _RESERVED_IDENTIFIER_FIXUP_1467.w = _RESERVED_IDENTIFIER_FIXUP_611;
    _RESERVED_IDENTIFIER_FIXUP_1471.w = _RESERVED_IDENTIFIER_FIXUP_611;
    vec2 param_19 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1111 = hdTex2(param_19);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1467.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_611;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1471.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_611;
    float _RESERVED_IDENTIFIER_FIXUP_1116 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_740 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_1022 + hdLod5(param_20, param_21).x) + hdLod5(param_22, param_23).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1111.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1130 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1515 = _RESERVED_IDENTIFIER_FIXUP_1111;
    _RESERVED_IDENTIFIER_FIXUP_1515.y = _RESERVED_IDENTIFIER_FIXUP_1130.x;
    _RESERVED_IDENTIFIER_FIXUP_1515.z = _RESERVED_IDENTIFIER_FIXUP_1130.y;
    _RESERVED_IDENTIFIER_FIXUP_1515.w = _RESERVED_IDENTIFIER_FIXUP_1130.z;
    vec2 param_24 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1140 = hdTex0(param_24);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1144 = _RESERVED_IDENTIFIER_FIXUP_1140.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1587 = vec4(_RESERVED_IDENTIFIER_FIXUP_1116, _RESERVED_IDENTIFIER_FIXUP_1515.yzw * _RESERVED_IDENTIFIER_FIXUP_1144);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1160 = mix(_RESERVED_IDENTIFIER_FIXUP_1587.yzw, _RESERVED_IDENTIFIER_FIXUP_1144, _RESERVED_IDENTIFIER_FIXUP_806);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_1140;
    _RESERVED_IDENTIFIER_FIXUP_1527.x = _RESERVED_IDENTIFIER_FIXUP_1160.x;
    _RESERVED_IDENTIFIER_FIXUP_1527.y = _RESERVED_IDENTIFIER_FIXUP_1160.y;
    _RESERVED_IDENTIFIER_FIXUP_1527.z = _RESERVED_IDENTIFIER_FIXUP_1160.z;
    vec2 param_25 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1170 = hdTex1(param_25);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1170.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1175 = _RESERVED_IDENTIFIER_FIXUP_1515.yzw * _RESERVED_IDENTIFIER_FIXUP_1174;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1588 = vec4(_RESERVED_IDENTIFIER_FIXUP_1175.x, _RESERVED_IDENTIFIER_FIXUP_772, _RESERVED_IDENTIFIER_FIXUP_1175.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1190 = mix(_RESERVED_IDENTIFIER_FIXUP_1588.xzw, _RESERVED_IDENTIFIER_FIXUP_1174, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1588.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1539 = _RESERVED_IDENTIFIER_FIXUP_1170;
    _RESERVED_IDENTIFIER_FIXUP_1539.x = _RESERVED_IDENTIFIER_FIXUP_1190.x;
    _RESERVED_IDENTIFIER_FIXUP_1539.y = _RESERVED_IDENTIFIER_FIXUP_1190.y;
    _RESERVED_IDENTIFIER_FIXUP_1539.z = _RESERVED_IDENTIFIER_FIXUP_1190.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1201 = mix(_RESERVED_IDENTIFIER_FIXUP_1527, _RESERVED_IDENTIFIER_FIXUP_1539, _RESERVED_IDENTIFIER_FIXUP_1515.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1206 = _RESERVED_IDENTIFIER_FIXUP_1201.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1545;
    _RESERVED_IDENTIFIER_FIXUP_1545.x = _RESERVED_IDENTIFIER_FIXUP_1206.x;
    _RESERVED_IDENTIFIER_FIXUP_1545.y = _RESERVED_IDENTIFIER_FIXUP_1206.y;
    _RESERVED_IDENTIFIER_FIXUP_1545.z = _RESERVED_IDENTIFIER_FIXUP_1206.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1217 = _RESERVED_IDENTIFIER_FIXUP_1587.xxx * _RESERVED_IDENTIFIER_FIXUP_1545.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1551;
    _RESERVED_IDENTIFIER_FIXUP_1551.x = _RESERVED_IDENTIFIER_FIXUP_1217.x;
    _RESERVED_IDENTIFIER_FIXUP_1551.y = _RESERVED_IDENTIFIER_FIXUP_1217.y;
    _RESERVED_IDENTIFIER_FIXUP_1551.z = _RESERVED_IDENTIFIER_FIXUP_1217.z;
    float _RESERVED_IDENTIFIER_FIXUP_1227 = (_RESERVED_IDENTIFIER_FIXUP_1116 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1201.w = _RESERVED_IDENTIFIER_FIXUP_1227;
    _RESERVED_IDENTIFIER_FIXUP_1201.w = _RESERVED_IDENTIFIER_FIXUP_1227;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1243 = (_RESERVED_IDENTIFIER_FIXUP_1201.xyz * _RESERVED_IDENTIFIER_FIXUP_1201.www) + _RESERVED_IDENTIFIER_FIXUP_1551.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564;
    _RESERVED_IDENTIFIER_FIXUP_1564.x = _RESERVED_IDENTIFIER_FIXUP_1243.x;
    _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_1243.y;
    _RESERVED_IDENTIFIER_FIXUP_1564.z = _RESERVED_IDENTIFIER_FIXUP_1243.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1256 = _RESERVED_IDENTIFIER_FIXUP_1564.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1570;
    _RESERVED_IDENTIFIER_FIXUP_1570.x = _RESERVED_IDENTIFIER_FIXUP_1256.x;
    _RESERVED_IDENTIFIER_FIXUP_1570.y = _RESERVED_IDENTIFIER_FIXUP_1256.y;
    _RESERVED_IDENTIFIER_FIXUP_1570.z = _RESERVED_IDENTIFIER_FIXUP_1256.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1570.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_465 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_474;
    if (_RESERVED_IDENTIFIER_FIXUP_465)
    {
        _RESERVED_IDENTIFIER_FIXUP_474 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_474 = _RESERVED_IDENTIFIER_FIXUP_465;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_474)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_511 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1428.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_537 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1282;
    if (_RESERVED_IDENTIFIER_FIXUP_511 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1282 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_511), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_537);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1282 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_537);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1282;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1227);
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
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB64 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB64.x;
    r1.w = hdB64.y;
    vec2 hdB74 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB74.x;
    r0.z = hdB74.y;
    vec2 hdB96 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB96.x;
    r1.y = hdB96.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB116 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB116.x;
    r1.w = hdB116.y;
    vec2 hdB127 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB127.x;
    r1.y = hdB127.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB150 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB150.x;
    r1.y = hdB150.y;
    vec2 hdB161 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB161.x;
    r2.y = hdB161.y;
    vec2 hdB168 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB168.x;
    r1.w = hdB168.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB187 = vec2(1.0, 0.0) * v4.zx;
    r2.z = hdB187.x;
    r2.w = hdB187.y;
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
    vec2 hdB249 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.x = hdB249.x;
    r0.y = hdB249.y;
    vec3 hdB259 = v0.xyz + v0.xyz;
    r1.y = hdB259.x;
    r1.z = hdB259.y;
    r1.w = hdB259.z;
    vec2 param_11 = v2.xy;
    r3 = hdTex0(param_11);
    vec3 hdB275 = r1.yzw * r3.xyz;
    r2.y = hdB275.x;
    r2.z = hdB275.y;
    r2.w = hdB275.z;
    vec4 hdB284 = r3;
    vec3 hdB293 = mix(r2.yzw, hdB284.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r3.x = hdB293.x;
    r3.y = hdB293.y;
    r3.z = hdB293.z;
    vec2 param_12 = v3.xy;
    r4 = hdTex1(param_12);
    vec3 hdB309 = r1.yzw * r4.xyz;
    r0.x = hdB309.x;
    r0.z = hdB309.y;
    r0.w = hdB309.z;
    vec4 hdB318 = r4;
    vec3 hdB324 = mix(r0.xzw, hdB318.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = hdB324.x;
    r4.y = hdB324.y;
    r4.z = hdB324.z;
    r0 = mix(r3, r4, r1.xxxx);
    vec3 hdB340 = r0.www * v1.xyz;
    r1.x = hdB340.x;
    r1.y = hdB340.y;
    r1.z = hdB340.z;
    vec4 hdB349 = r1;
    vec3 hdB351 = r2.xxx * hdB349.xyz;
    r1.x = hdB351.x;
    r1.y = hdB351.y;
    r1.z = hdB351.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB365 = r0;
    vec4 hdB367 = r0;
    vec3 hdB372 = (hdB365.xyz * hdB367.www) + r1.xyz;
    r0.x = hdB372.x;
    r0.y = hdB372.y;
    r0.z = hdB372.z;
    vec4 hdB379 = r0;
    vec3 hdB386 = hdB379.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB386.x;
    r0.y = hdB386.y;
    r0.z = hdB386.z;
    vec3 hdB401 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB401.x;
    oC0.y = hdB401.y;
    oC0.z = hdB401.z;
    oC0.w = 1.0;
    bool hdB413 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB421;
    if (hdB413)
    {
        hdB421 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB421 = hdB413;
    }
    if (hdB421)
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
    bool _1463 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1473;
    if (_1463)
    {
        _1473 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1473 = _1463;
    }
    if (_1473)
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
        bool _1498 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1513;
        if (!_1498)
        {
            _1513 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1513 = _1498;
        }
        if (_1513)
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
