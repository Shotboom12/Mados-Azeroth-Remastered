#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1595;
vec4 _RESERVED_IDENTIFIER_FIXUP_1596;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _49 = hdOverride >= 0;
    bool _68;
    if (_49)
    {
        _68 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _68 = _49;
    }
    vec4 _69;
    if (_68)
    {
        _69 = vec4(float(hdOverride));
    }
    else
    {
        _69 = value;
    }
    return _69;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _86 = hdOverride >= 0;
    bool _96;
    if (_86)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _96 = _86;
    }
    vec4 _97;
    if (_96)
    {
        _97 = vec4(float(hdOverride));
    }
    else
    {
        _97 = value;
    }
    return _97;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _114 = hdOverride >= 0;
    bool _124;
    if (_114)
    {
        _124 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _124 = _114;
    }
    vec4 _125;
    if (_124)
    {
        _125 = vec4(float(hdOverride));
    }
    else
    {
        _125 = value;
    }
    return _125;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_609 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_613 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_617 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_621 = hdTex3(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_625 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_621.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1308 = _RESERVED_IDENTIFIER_FIXUP_621;
    _RESERVED_IDENTIFIER_FIXUP_1308.z = _RESERVED_IDENTIFIER_FIXUP_625;
    _RESERVED_IDENTIFIER_FIXUP_1308.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_625;
    vec4 _RESERVED_IDENTIFIER_FIXUP_635 = _RESERVED_IDENTIFIER_FIXUP_613 * _RESERVED_IDENTIFIER_FIXUP_1308.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_647 = (_RESERVED_IDENTIFIER_FIXUP_617 * _RESERVED_IDENTIFIER_FIXUP_1308.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_609 * _RESERVED_IDENTIFIER_FIXUP_1308.zzzz) + _RESERVED_IDENTIFIER_FIXUP_635);
    float _RESERVED_IDENTIFIER_FIXUP_654 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_635;
    _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_654;
    float _RESERVED_IDENTIFIER_FIXUP_660 = clamp((_RESERVED_IDENTIFIER_FIXUP_654 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_660;
    float _RESERVED_IDENTIFIER_FIXUP_666 = ((-_RESERVED_IDENTIFIER_FIXUP_660) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1315.y = _RESERVED_IDENTIFIER_FIXUP_666;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1598;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1597;
    if (_RESERVED_IDENTIFIER_FIXUP_666 != (-_RESERVED_IDENTIFIER_FIXUP_666))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_678 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1328 = _RESERVED_IDENTIFIER_FIXUP_1315;
        _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_678.x;
        _RESERVED_IDENTIFIER_FIXUP_1328.z = _RESERVED_IDENTIFIER_FIXUP_678.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_688 = _RESERVED_IDENTIFIER_FIXUP_1328.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1332;
        _RESERVED_IDENTIFIER_FIXUP_1332.x = _RESERVED_IDENTIFIER_FIXUP_688.x;
        _RESERVED_IDENTIFIER_FIXUP_1332.y = _RESERVED_IDENTIFIER_FIXUP_688.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_698 = _RESERVED_IDENTIFIER_FIXUP_1328.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1336;
        _RESERVED_IDENTIFIER_FIXUP_1336.x = _RESERVED_IDENTIFIER_FIXUP_698.x;
        _RESERVED_IDENTIFIER_FIXUP_1336.y = _RESERVED_IDENTIFIER_FIXUP_698.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_708 = _RESERVED_IDENTIFIER_FIXUP_1328.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1340;
        _RESERVED_IDENTIFIER_FIXUP_1340.x = _RESERVED_IDENTIFIER_FIXUP_708.x;
        _RESERVED_IDENTIFIER_FIXUP_1340.y = _RESERVED_IDENTIFIER_FIXUP_708.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_718 = _RESERVED_IDENTIFIER_FIXUP_1328.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1344;
        _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_718.x;
        _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_718.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_726 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_726.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_726.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_732 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_1332.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1336.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1340.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1344.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1332.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_732.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1336.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_732.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1340.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_732.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_789 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_732 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1344.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_795 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_795;
        float _RESERVED_IDENTIFIER_FIXUP_800 = float(_RESERVED_IDENTIFIER_FIXUP_795 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_800;
        float _RESERVED_IDENTIFIER_FIXUP_803 = dot(_RESERVED_IDENTIFIER_FIXUP_789, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1328.z = _RESERVED_IDENTIFIER_FIXUP_803;
        float _RESERVED_IDENTIFIER_FIXUP_809 = _RESERVED_IDENTIFIER_FIXUP_800 + _RESERVED_IDENTIFIER_FIXUP_803;
        _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_809;
        float _RESERVED_IDENTIFIER_FIXUP_814 = (_RESERVED_IDENTIFIER_FIXUP_809 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_814;
        float _RESERVED_IDENTIFIER_FIXUP_821 = (_RESERVED_IDENTIFIER_FIXUP_660 * _RESERVED_IDENTIFIER_FIXUP_814) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1328.x = _RESERVED_IDENTIFIER_FIXUP_821;
        _RESERVED_IDENTIFIER_FIXUP_789.x = min(_RESERVED_IDENTIFIER_FIXUP_821, _RESERVED_IDENTIFIER_FIXUP_621.w);
        _RESERVED_IDENTIFIER_FIXUP_1598 = _RESERVED_IDENTIFIER_FIXUP_1328;
        _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_789;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_617.x = _RESERVED_IDENTIFIER_FIXUP_621.w;
        _RESERVED_IDENTIFIER_FIXUP_1598 = _RESERVED_IDENTIFIER_FIXUP_1315;
        _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_617;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1405 = _RESERVED_IDENTIFIER_FIXUP_1598;
    _RESERVED_IDENTIFIER_FIXUP_1405.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_850 = _RESERVED_IDENTIFIER_FIXUP_647.xyz * _RESERVED_IDENTIFIER_FIXUP_1405.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_647;
    _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_850.x;
    _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_850.y;
    _RESERVED_IDENTIFIER_FIXUP_1407.z = _RESERVED_IDENTIFIER_FIXUP_850.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_861 = _RESERVED_IDENTIFIER_FIXUP_1407.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1595).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_1407;
    _RESERVED_IDENTIFIER_FIXUP_1413.x = _RESERVED_IDENTIFIER_FIXUP_861.x;
    _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_861.y;
    _RESERVED_IDENTIFIER_FIXUP_1413.z = _RESERVED_IDENTIFIER_FIXUP_861.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_872 = _RESERVED_IDENTIFIER_FIXUP_1413.xyz + _RESERVED_IDENTIFIER_FIXUP_1413.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1419 = _RESERVED_IDENTIFIER_FIXUP_1413;
    _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_872.x;
    _RESERVED_IDENTIFIER_FIXUP_1419.y = _RESERVED_IDENTIFIER_FIXUP_872.y;
    _RESERVED_IDENTIFIER_FIXUP_1419.z = _RESERVED_IDENTIFIER_FIXUP_872.z;
    _RESERVED_IDENTIFIER_FIXUP_1405.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1405.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1405.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_897 = (_RESERVED_IDENTIFIER_FIXUP_1405.xyz * _RESERVED_IDENTIFIER_FIXUP_1597.xxx) + _RESERVED_IDENTIFIER_FIXUP_1419.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1431 = _RESERVED_IDENTIFIER_FIXUP_1419;
    _RESERVED_IDENTIFIER_FIXUP_1431.x = _RESERVED_IDENTIFIER_FIXUP_897.x;
    _RESERVED_IDENTIFIER_FIXUP_1431.y = _RESERVED_IDENTIFIER_FIXUP_897.y;
    _RESERVED_IDENTIFIER_FIXUP_1431.z = _RESERVED_IDENTIFIER_FIXUP_897.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_910 = _RESERVED_IDENTIFIER_FIXUP_1431.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437 = _RESERVED_IDENTIFIER_FIXUP_1431;
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_910.x;
    _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_910.y;
    _RESERVED_IDENTIFIER_FIXUP_1437.z = _RESERVED_IDENTIFIER_FIXUP_910.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_963 = OptTex0( texcoord0.xyz);
    vec2 param_13 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_967 = hdTex1(param_13);
    vec2 param_14 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_971 = hdTex2(param_14);
    vec2 param_15 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_975 = hdTex3(param_15);
    float _RESERVED_IDENTIFIER_FIXUP_979 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_975.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1451 = _RESERVED_IDENTIFIER_FIXUP_975;
    _RESERVED_IDENTIFIER_FIXUP_1451.z = _RESERVED_IDENTIFIER_FIXUP_979;
    _RESERVED_IDENTIFIER_FIXUP_1451.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_979;
    vec4 _RESERVED_IDENTIFIER_FIXUP_989 = _RESERVED_IDENTIFIER_FIXUP_967 * _RESERVED_IDENTIFIER_FIXUP_1451.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1001 = (_RESERVED_IDENTIFIER_FIXUP_971 * _RESERVED_IDENTIFIER_FIXUP_1451.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_963 * _RESERVED_IDENTIFIER_FIXUP_1451.zzzz) + _RESERVED_IDENTIFIER_FIXUP_989);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_989;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_654;
    float _RESERVED_IDENTIFIER_FIXUP_1014 = clamp((_RESERVED_IDENTIFIER_FIXUP_654 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_1014;
    float _RESERVED_IDENTIFIER_FIXUP_1020 = ((-_RESERVED_IDENTIFIER_FIXUP_1014) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1458.y = _RESERVED_IDENTIFIER_FIXUP_1020;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1602;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1601;
    if (_RESERVED_IDENTIFIER_FIXUP_1020 != (-_RESERVED_IDENTIFIER_FIXUP_1020))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1032 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1471 = _RESERVED_IDENTIFIER_FIXUP_1458;
        _RESERVED_IDENTIFIER_FIXUP_1471.y = _RESERVED_IDENTIFIER_FIXUP_1032.x;
        _RESERVED_IDENTIFIER_FIXUP_1471.z = _RESERVED_IDENTIFIER_FIXUP_1032.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1042 = _RESERVED_IDENTIFIER_FIXUP_1471.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1475;
        _RESERVED_IDENTIFIER_FIXUP_1475.x = _RESERVED_IDENTIFIER_FIXUP_1042.x;
        _RESERVED_IDENTIFIER_FIXUP_1475.y = _RESERVED_IDENTIFIER_FIXUP_1042.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1052 = _RESERVED_IDENTIFIER_FIXUP_1471.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1479;
        _RESERVED_IDENTIFIER_FIXUP_1479.x = _RESERVED_IDENTIFIER_FIXUP_1052.x;
        _RESERVED_IDENTIFIER_FIXUP_1479.y = _RESERVED_IDENTIFIER_FIXUP_1052.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1062 = _RESERVED_IDENTIFIER_FIXUP_1471.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1483;
        _RESERVED_IDENTIFIER_FIXUP_1483.x = _RESERVED_IDENTIFIER_FIXUP_1062.x;
        _RESERVED_IDENTIFIER_FIXUP_1483.y = _RESERVED_IDENTIFIER_FIXUP_1062.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1072 = _RESERVED_IDENTIFIER_FIXUP_1471.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1487;
        _RESERVED_IDENTIFIER_FIXUP_1487.x = _RESERVED_IDENTIFIER_FIXUP_1072.x;
        _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_1072.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1080 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1080.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1080.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1086 = hdLod5(param_16, param_17);
        _RESERVED_IDENTIFIER_FIXUP_1475.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1479.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1483.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1487.w = 0.0;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1475.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1086.y = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1479.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1086.z = hdLod5(param_20, param_21).x;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1483.xy;
        float param_23 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1086.w = hdLod5(param_22, param_23).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1143 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1086 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1487.xy;
        float param_25 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1149 = hdLod5(param_24, param_25).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1471.y = _RESERVED_IDENTIFIER_FIXUP_1149;
        float _RESERVED_IDENTIFIER_FIXUP_1154 = float(_RESERVED_IDENTIFIER_FIXUP_1149 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1471.y = _RESERVED_IDENTIFIER_FIXUP_1154;
        float _RESERVED_IDENTIFIER_FIXUP_1157 = dot(_RESERVED_IDENTIFIER_FIXUP_1143, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1471.z = _RESERVED_IDENTIFIER_FIXUP_1157;
        float _RESERVED_IDENTIFIER_FIXUP_1163 = _RESERVED_IDENTIFIER_FIXUP_1154 + _RESERVED_IDENTIFIER_FIXUP_1157;
        _RESERVED_IDENTIFIER_FIXUP_1471.y = _RESERVED_IDENTIFIER_FIXUP_1163;
        float _RESERVED_IDENTIFIER_FIXUP_1168 = (_RESERVED_IDENTIFIER_FIXUP_1163 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1471.y = _RESERVED_IDENTIFIER_FIXUP_1168;
        float _RESERVED_IDENTIFIER_FIXUP_1175 = (_RESERVED_IDENTIFIER_FIXUP_1014 * _RESERVED_IDENTIFIER_FIXUP_1168) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1471.x = _RESERVED_IDENTIFIER_FIXUP_1175;
        _RESERVED_IDENTIFIER_FIXUP_1143.x = min(_RESERVED_IDENTIFIER_FIXUP_1175, _RESERVED_IDENTIFIER_FIXUP_975.w);
        _RESERVED_IDENTIFIER_FIXUP_1602 = _RESERVED_IDENTIFIER_FIXUP_1471;
        _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_1143;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_971.x = _RESERVED_IDENTIFIER_FIXUP_975.w;
        _RESERVED_IDENTIFIER_FIXUP_1602 = _RESERVED_IDENTIFIER_FIXUP_1458;
        _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_971;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1191 = (_RESERVED_IDENTIFIER_FIXUP_1601.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1602;
    _RESERVED_IDENTIFIER_FIXUP_1546.x = _RESERVED_IDENTIFIER_FIXUP_1191;
    _RESERVED_IDENTIFIER_FIXUP_1546.x = _RESERVED_IDENTIFIER_FIXUP_1191;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1204 = _RESERVED_IDENTIFIER_FIXUP_1001.xyz * _RESERVED_IDENTIFIER_FIXUP_1546.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1552 = _RESERVED_IDENTIFIER_FIXUP_1001;
    _RESERVED_IDENTIFIER_FIXUP_1552.x = _RESERVED_IDENTIFIER_FIXUP_1204.x;
    _RESERVED_IDENTIFIER_FIXUP_1552.y = _RESERVED_IDENTIFIER_FIXUP_1204.y;
    _RESERVED_IDENTIFIER_FIXUP_1552.z = _RESERVED_IDENTIFIER_FIXUP_1204.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1215 = _RESERVED_IDENTIFIER_FIXUP_1552.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1558 = _RESERVED_IDENTIFIER_FIXUP_1552;
    _RESERVED_IDENTIFIER_FIXUP_1558.x = _RESERVED_IDENTIFIER_FIXUP_1215.x;
    _RESERVED_IDENTIFIER_FIXUP_1558.y = _RESERVED_IDENTIFIER_FIXUP_1215.y;
    _RESERVED_IDENTIFIER_FIXUP_1558.z = _RESERVED_IDENTIFIER_FIXUP_1215.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_1558.xyz + _RESERVED_IDENTIFIER_FIXUP_1558.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_1558;
    _RESERVED_IDENTIFIER_FIXUP_1564.x = _RESERVED_IDENTIFIER_FIXUP_1226.x;
    _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_1226.y;
    _RESERVED_IDENTIFIER_FIXUP_1564.z = _RESERVED_IDENTIFIER_FIXUP_1226.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1237 = _RESERVED_IDENTIFIER_FIXUP_1564.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1546.x = _RESERVED_IDENTIFIER_FIXUP_1237.x;
    _RESERVED_IDENTIFIER_FIXUP_1546.y = _RESERVED_IDENTIFIER_FIXUP_1237.y;
    _RESERVED_IDENTIFIER_FIXUP_1546.z = _RESERVED_IDENTIFIER_FIXUP_1237.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1251 = (_RESERVED_IDENTIFIER_FIXUP_1546.xyz * _RESERVED_IDENTIFIER_FIXUP_1601.xxx) + _RESERVED_IDENTIFIER_FIXUP_1564.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1576 = _RESERVED_IDENTIFIER_FIXUP_1564;
    _RESERVED_IDENTIFIER_FIXUP_1576.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
    _RESERVED_IDENTIFIER_FIXUP_1576.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
    _RESERVED_IDENTIFIER_FIXUP_1576.z = _RESERVED_IDENTIFIER_FIXUP_1251.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_1576.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1582 = _RESERVED_IDENTIFIER_FIXUP_1576;
    _RESERVED_IDENTIFIER_FIXUP_1582.x = _RESERVED_IDENTIFIER_FIXUP_1264.x;
    _RESERVED_IDENTIFIER_FIXUP_1582.y = _RESERVED_IDENTIFIER_FIXUP_1264.y;
    _RESERVED_IDENTIFIER_FIXUP_1582.z = _RESERVED_IDENTIFIER_FIXUP_1264.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1582.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1437.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_544 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1301;
    if (_RESERVED_IDENTIFIER_FIXUP_517 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1301 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_517), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_544);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1301 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_544);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1301;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1191);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    vec4 r6 = vec4(0.0);
    vec4 r7 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 *= r3.xxxx;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB142 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB142.x;
        r1.z = hdB142.y;
        vec2 hdB163 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB163.x;
        r2.y = hdB163.y;
        vec2 hdB174 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB174.x;
        r4.y = hdB174.y;
        vec2 hdB185 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB185.x;
        r5.y = hdB185.y;
        vec2 hdB196 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB196.x;
        r6.y = hdB196.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r7.xy;
        float param_4 = r7.w;
        r7 = hdLod5(param_3, param_4);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_7 = r4.xy;
        float param_8 = r4.w;
        r4 = hdLod5(param_7, param_8);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_9 = r5.xy;
        float param_10 = r5.w;
        r5 = hdLod5(param_9, param_10);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_11 = r6.xy;
        float param_12 = r6.w;
        r6 = hdLod5(param_11, param_12);
        r7.y = r2.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r2 = r7 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r6.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r3.w);
    }
    else
    {
        r2.x = r3.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB326 = r0;
    vec3 hdB330 = hdB326.xyz * r1.xxx;
    r0.x = hdB330.x;
    r0.y = hdB330.y;
    r0.z = hdB330.z;
    vec4 hdB337 = r0;
    vec3 hdB341 = hdB337.xyz * v0.xyz;
    r0.x = hdB341.x;
    r0.y = hdB341.y;
    r0.z = hdB341.z;
    vec4 hdB348 = r0;
    vec4 hdB350 = r0;
    vec3 hdB352 = hdB348.xyz + hdB350.xyz;
    r0.x = hdB352.x;
    r0.y = hdB352.y;
    r0.z = hdB352.z;
    vec3 hdB363 = r0.www * v1.xyz;
    r1.x = hdB363.x;
    r1.y = hdB363.y;
    r1.z = hdB363.z;
    vec4 hdB375 = r0;
    vec3 hdB377 = (r1.xyz * r2.xxx) + hdB375.xyz;
    r0.x = hdB377.x;
    r0.y = hdB377.y;
    r0.z = hdB377.z;
    vec4 hdB384 = r0;
    vec3 hdB391 = hdB384.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB391.x;
    r0.y = hdB391.y;
    r0.z = hdB391.z;
    vec3 hdB406 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB406.x;
    oC0.y = hdB406.y;
    oC0.z = hdB406.z;
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
    bool _1481 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1491;
    if (_1481)
    {
        _1491 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1491 = _1481;
    }
    if (_1491)
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
        bool _1516 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1531;
        if (!_1516)
        {
            _1531 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1531 = _1516;
        }
        if (_1531)
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
