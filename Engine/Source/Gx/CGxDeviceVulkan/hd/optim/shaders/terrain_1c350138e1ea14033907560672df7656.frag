#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1638;
vec4 _RESERVED_IDENTIFIER_FIXUP_1639;


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
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_614 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_617 = _RESERVED_IDENTIFIER_FIXUP_614.xy;
    float _RESERVED_IDENTIFIER_FIXUP_619 = _RESERVED_IDENTIFIER_FIXUP_614.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_617;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_619;
    vec4 _RESERVED_IDENTIFIER_FIXUP_620 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_623 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_627 = _RESERVED_IDENTIFIER_FIXUP_623.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1338.w = _RESERVED_IDENTIFIER_FIXUP_627;
    vec2 _RESERVED_IDENTIFIER_FIXUP_631 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_633 = _RESERVED_IDENTIFIER_FIXUP_631.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1340 = _RESERVED_IDENTIFIER_FIXUP_620;
    _RESERVED_IDENTIFIER_FIXUP_1340.y = _RESERVED_IDENTIFIER_FIXUP_633;
    float _RESERVED_IDENTIFIER_FIXUP_635 = _RESERVED_IDENTIFIER_FIXUP_631.y;
    _RESERVED_IDENTIFIER_FIXUP_1340.z = _RESERVED_IDENTIFIER_FIXUP_635;
    vec2 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_1340.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
    _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1344.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_627;
    float _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_620.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1340.x = _RESERVED_IDENTIFIER_FIXUP_656;
    vec2 _RESERVED_IDENTIFIER_FIXUP_670 = _RESERVED_IDENTIFIER_FIXUP_1340.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_670.x;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_670.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1357.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_627;
    float _RESERVED_IDENTIFIER_FIXUP_685 = _RESERVED_IDENTIFIER_FIXUP_656 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1340.x = _RESERVED_IDENTIFIER_FIXUP_685;
    vec2 _RESERVED_IDENTIFIER_FIXUP_692 = _RESERVED_IDENTIFIER_FIXUP_1340.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1366;
    _RESERVED_IDENTIFIER_FIXUP_1366.x = _RESERVED_IDENTIFIER_FIXUP_692.x;
    _RESERVED_IDENTIFIER_FIXUP_1366.y = _RESERVED_IDENTIFIER_FIXUP_692.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_702 = _RESERVED_IDENTIFIER_FIXUP_1340.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1370;
    _RESERVED_IDENTIFIER_FIXUP_1370.x = _RESERVED_IDENTIFIER_FIXUP_702.x;
    _RESERVED_IDENTIFIER_FIXUP_1370.y = _RESERVED_IDENTIFIER_FIXUP_702.y;
    _RESERVED_IDENTIFIER_FIXUP_1366.w = _RESERVED_IDENTIFIER_FIXUP_627;
    _RESERVED_IDENTIFIER_FIXUP_1370.w = _RESERVED_IDENTIFIER_FIXUP_627;
    float _RESERVED_IDENTIFIER_FIXUP_756 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_774 = hdTex2(param_6);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413;
    _RESERVED_IDENTIFIER_FIXUP_1413.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_774.xyz, vec3(1.0)), 0.0, 1.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_794 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_796 = _RESERVED_IDENTIFIER_FIXUP_794.x;
    _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_796;
    float _RESERVED_IDENTIFIER_FIXUP_798 = _RESERVED_IDENTIFIER_FIXUP_794.y;
    _RESERVED_IDENTIFIER_FIXUP_1413.z = _RESERVED_IDENTIFIER_FIXUP_798;
    vec3 _RESERVED_IDENTIFIER_FIXUP_800 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1638).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_803 = _RESERVED_IDENTIFIER_FIXUP_800 + _RESERVED_IDENTIFIER_FIXUP_800;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1419 = _RESERVED_IDENTIFIER_FIXUP_774;
    _RESERVED_IDENTIFIER_FIXUP_1419.y = _RESERVED_IDENTIFIER_FIXUP_803.x;
    _RESERVED_IDENTIFIER_FIXUP_1419.z = _RESERVED_IDENTIFIER_FIXUP_803.y;
    _RESERVED_IDENTIFIER_FIXUP_1419.w = _RESERVED_IDENTIFIER_FIXUP_803.z;
    vec2 param_7 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_817 = hdTex1(param_7).xyz;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1366.xy;
    float param_9 = _RESERVED_IDENTIFIER_FIXUP_627;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1370.xy;
    float param_11 = _RESERVED_IDENTIFIER_FIXUP_627;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1640 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_756 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_685 + hdLod5(param_8, param_9).x) + hdLod5(param_10, param_11).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_774.w), _RESERVED_IDENTIFIER_FIXUP_1419.yzw * _RESERVED_IDENTIFIER_FIXUP_817);
    vec3 _RESERVED_IDENTIFIER_FIXUP_833 = mix(_RESERVED_IDENTIFIER_FIXUP_1640.yzw, _RESERVED_IDENTIFIER_FIXUP_817, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1413.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1431;
    _RESERVED_IDENTIFIER_FIXUP_1431.x = _RESERVED_IDENTIFIER_FIXUP_833.x;
    _RESERVED_IDENTIFIER_FIXUP_1431.y = _RESERVED_IDENTIFIER_FIXUP_833.y;
    _RESERVED_IDENTIFIER_FIXUP_1431.z = _RESERVED_IDENTIFIER_FIXUP_833.z;
    vec2 param_12 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_851 = hdTex0(param_12).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_852 = _RESERVED_IDENTIFIER_FIXUP_1419.yzw * _RESERVED_IDENTIFIER_FIXUP_851;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437;
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_852.x;
    _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_852.y;
    _RESERVED_IDENTIFIER_FIXUP_1437.z = _RESERVED_IDENTIFIER_FIXUP_852.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_867 = mix(_RESERVED_IDENTIFIER_FIXUP_1437.xyz, _RESERVED_IDENTIFIER_FIXUP_851, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1413.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1443;
    _RESERVED_IDENTIFIER_FIXUP_1443.x = _RESERVED_IDENTIFIER_FIXUP_867.x;
    _RESERVED_IDENTIFIER_FIXUP_1443.y = _RESERVED_IDENTIFIER_FIXUP_867.y;
    _RESERVED_IDENTIFIER_FIXUP_1443.z = _RESERVED_IDENTIFIER_FIXUP_867.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_879 = (_RESERVED_IDENTIFIER_FIXUP_1443 * _RESERVED_IDENTIFIER_FIXUP_1413.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_1419.xxxx * _RESERVED_IDENTIFIER_FIXUP_1431);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1449;
    _RESERVED_IDENTIFIER_FIXUP_1449.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1449.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1449.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_895 = _RESERVED_IDENTIFIER_FIXUP_1640.xxx * _RESERVED_IDENTIFIER_FIXUP_1449.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1455;
    _RESERVED_IDENTIFIER_FIXUP_1455.x = _RESERVED_IDENTIFIER_FIXUP_895.x;
    _RESERVED_IDENTIFIER_FIXUP_1455.y = _RESERVED_IDENTIFIER_FIXUP_895.y;
    _RESERVED_IDENTIFIER_FIXUP_1455.z = _RESERVED_IDENTIFIER_FIXUP_895.z;
    _RESERVED_IDENTIFIER_FIXUP_879.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_921 = (_RESERVED_IDENTIFIER_FIXUP_879.xyz * _RESERVED_IDENTIFIER_FIXUP_879.www) + _RESERVED_IDENTIFIER_FIXUP_1455.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1466;
    _RESERVED_IDENTIFIER_FIXUP_1466.x = _RESERVED_IDENTIFIER_FIXUP_921.x;
    _RESERVED_IDENTIFIER_FIXUP_1466.y = _RESERVED_IDENTIFIER_FIXUP_921.y;
    _RESERVED_IDENTIFIER_FIXUP_1466.z = _RESERVED_IDENTIFIER_FIXUP_921.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_934 = _RESERVED_IDENTIFIER_FIXUP_1466.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1472;
    _RESERVED_IDENTIFIER_FIXUP_1472.x = _RESERVED_IDENTIFIER_FIXUP_934.x;
    _RESERVED_IDENTIFIER_FIXUP_1472.y = _RESERVED_IDENTIFIER_FIXUP_934.y;
    _RESERVED_IDENTIFIER_FIXUP_1472.z = _RESERVED_IDENTIFIER_FIXUP_934.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_949 = _RESERVED_IDENTIFIER_FIXUP_1472.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1478;
    _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_949.x;
    _RESERVED_IDENTIFIER_FIXUP_1478.y = _RESERVED_IDENTIFIER_FIXUP_949.y;
    _RESERVED_IDENTIFIER_FIXUP_1478.z = _RESERVED_IDENTIFIER_FIXUP_949.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_617;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_619;
    vec4 _RESERVED_IDENTIFIER_FIXUP_988 = hdLod5(param_13, param_14);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1491 = _RESERVED_IDENTIFIER_FIXUP_988;
    _RESERVED_IDENTIFIER_FIXUP_1491.y = _RESERVED_IDENTIFIER_FIXUP_633;
    _RESERVED_IDENTIFIER_FIXUP_1491.z = _RESERVED_IDENTIFIER_FIXUP_635;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1009 = _RESERVED_IDENTIFIER_FIXUP_1491.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1495.x = _RESERVED_IDENTIFIER_FIXUP_1009.x;
    _RESERVED_IDENTIFIER_FIXUP_1495.y = _RESERVED_IDENTIFIER_FIXUP_1009.y;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1495.xy;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_627;
    float _RESERVED_IDENTIFIER_FIXUP_1024 = _RESERVED_IDENTIFIER_FIXUP_988.x + hdLod5(param_15, param_16).x;
    _RESERVED_IDENTIFIER_FIXUP_1491.x = _RESERVED_IDENTIFIER_FIXUP_1024;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1038 = _RESERVED_IDENTIFIER_FIXUP_1491.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1508 = _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1508.x = _RESERVED_IDENTIFIER_FIXUP_1038.x;
    _RESERVED_IDENTIFIER_FIXUP_1508.y = _RESERVED_IDENTIFIER_FIXUP_1038.y;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1508.xy;
    float param_18 = _RESERVED_IDENTIFIER_FIXUP_627;
    float _RESERVED_IDENTIFIER_FIXUP_1053 = _RESERVED_IDENTIFIER_FIXUP_1024 + hdLod5(param_17, param_18).x;
    _RESERVED_IDENTIFIER_FIXUP_1491.x = _RESERVED_IDENTIFIER_FIXUP_1053;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1060 = _RESERVED_IDENTIFIER_FIXUP_1491.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1517;
    _RESERVED_IDENTIFIER_FIXUP_1517.x = _RESERVED_IDENTIFIER_FIXUP_1060.x;
    _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_1060.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1070 = _RESERVED_IDENTIFIER_FIXUP_1491.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1521;
    _RESERVED_IDENTIFIER_FIXUP_1521.x = _RESERVED_IDENTIFIER_FIXUP_1070.x;
    _RESERVED_IDENTIFIER_FIXUP_1521.y = _RESERVED_IDENTIFIER_FIXUP_1070.y;
    _RESERVED_IDENTIFIER_FIXUP_1517.w = _RESERVED_IDENTIFIER_FIXUP_627;
    _RESERVED_IDENTIFIER_FIXUP_1521.w = _RESERVED_IDENTIFIER_FIXUP_627;
    vec2 param_19 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1142 = hdTex2(param_19);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1517.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_627;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1521.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_627;
    float _RESERVED_IDENTIFIER_FIXUP_1147 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_756 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_1053 + hdLod5(param_20, param_21).x) + hdLod5(param_22, param_23).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1142.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564;
    _RESERVED_IDENTIFIER_FIXUP_1564.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1142.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_796;
    _RESERVED_IDENTIFIER_FIXUP_1564.z = _RESERVED_IDENTIFIER_FIXUP_798;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1171 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1570 = _RESERVED_IDENTIFIER_FIXUP_1142;
    _RESERVED_IDENTIFIER_FIXUP_1570.y = _RESERVED_IDENTIFIER_FIXUP_1171.x;
    _RESERVED_IDENTIFIER_FIXUP_1570.z = _RESERVED_IDENTIFIER_FIXUP_1171.y;
    _RESERVED_IDENTIFIER_FIXUP_1570.w = _RESERVED_IDENTIFIER_FIXUP_1171.z;
    vec2 param_24 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = hdTex1(param_24);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_1181.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1641 = vec4(_RESERVED_IDENTIFIER_FIXUP_1147, _RESERVED_IDENTIFIER_FIXUP_1570.yzw * _RESERVED_IDENTIFIER_FIXUP_1185);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1201 = mix(_RESERVED_IDENTIFIER_FIXUP_1641.yzw, _RESERVED_IDENTIFIER_FIXUP_1185, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1564.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1582 = _RESERVED_IDENTIFIER_FIXUP_1181;
    _RESERVED_IDENTIFIER_FIXUP_1582.x = _RESERVED_IDENTIFIER_FIXUP_1201.x;
    _RESERVED_IDENTIFIER_FIXUP_1582.y = _RESERVED_IDENTIFIER_FIXUP_1201.y;
    _RESERVED_IDENTIFIER_FIXUP_1582.z = _RESERVED_IDENTIFIER_FIXUP_1201.z;
    vec2 param_25 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = hdTex0(param_25);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1219 = _RESERVED_IDENTIFIER_FIXUP_1215.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1220 = _RESERVED_IDENTIFIER_FIXUP_1570.yzw * _RESERVED_IDENTIFIER_FIXUP_1219;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1588;
    _RESERVED_IDENTIFIER_FIXUP_1588.x = _RESERVED_IDENTIFIER_FIXUP_1220.x;
    _RESERVED_IDENTIFIER_FIXUP_1588.y = _RESERVED_IDENTIFIER_FIXUP_1220.y;
    _RESERVED_IDENTIFIER_FIXUP_1588.z = _RESERVED_IDENTIFIER_FIXUP_1220.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = mix(_RESERVED_IDENTIFIER_FIXUP_1588.xyz, _RESERVED_IDENTIFIER_FIXUP_1219, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1564.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1594 = _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_1594.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
    _RESERVED_IDENTIFIER_FIXUP_1594.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
    _RESERVED_IDENTIFIER_FIXUP_1594.z = _RESERVED_IDENTIFIER_FIXUP_1235.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1247 = (_RESERVED_IDENTIFIER_FIXUP_1594 * _RESERVED_IDENTIFIER_FIXUP_1564.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_1570.xxxx * _RESERVED_IDENTIFIER_FIXUP_1582);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1252 = _RESERVED_IDENTIFIER_FIXUP_1247.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1600;
    _RESERVED_IDENTIFIER_FIXUP_1600.x = _RESERVED_IDENTIFIER_FIXUP_1252.x;
    _RESERVED_IDENTIFIER_FIXUP_1600.y = _RESERVED_IDENTIFIER_FIXUP_1252.y;
    _RESERVED_IDENTIFIER_FIXUP_1600.z = _RESERVED_IDENTIFIER_FIXUP_1252.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1263 = _RESERVED_IDENTIFIER_FIXUP_1641.xxx * _RESERVED_IDENTIFIER_FIXUP_1600.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1606;
    _RESERVED_IDENTIFIER_FIXUP_1606.x = _RESERVED_IDENTIFIER_FIXUP_1263.x;
    _RESERVED_IDENTIFIER_FIXUP_1606.y = _RESERVED_IDENTIFIER_FIXUP_1263.y;
    _RESERVED_IDENTIFIER_FIXUP_1606.z = _RESERVED_IDENTIFIER_FIXUP_1263.z;
    float _RESERVED_IDENTIFIER_FIXUP_1273 = (_RESERVED_IDENTIFIER_FIXUP_1147 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1247.w = _RESERVED_IDENTIFIER_FIXUP_1273;
    _RESERVED_IDENTIFIER_FIXUP_1247.w = _RESERVED_IDENTIFIER_FIXUP_1273;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1289 = (_RESERVED_IDENTIFIER_FIXUP_1247.xyz * _RESERVED_IDENTIFIER_FIXUP_1247.www) + _RESERVED_IDENTIFIER_FIXUP_1606.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1619;
    _RESERVED_IDENTIFIER_FIXUP_1619.x = _RESERVED_IDENTIFIER_FIXUP_1289.x;
    _RESERVED_IDENTIFIER_FIXUP_1619.y = _RESERVED_IDENTIFIER_FIXUP_1289.y;
    _RESERVED_IDENTIFIER_FIXUP_1619.z = _RESERVED_IDENTIFIER_FIXUP_1289.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_1619.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1625;
    _RESERVED_IDENTIFIER_FIXUP_1625.x = _RESERVED_IDENTIFIER_FIXUP_1302.x;
    _RESERVED_IDENTIFIER_FIXUP_1625.y = _RESERVED_IDENTIFIER_FIXUP_1302.y;
    _RESERVED_IDENTIFIER_FIXUP_1625.z = _RESERVED_IDENTIFIER_FIXUP_1302.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1625.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_481 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_490;
    if (_RESERVED_IDENTIFIER_FIXUP_481)
    {
        _RESERVED_IDENTIFIER_FIXUP_490 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_490 = _RESERVED_IDENTIFIER_FIXUP_481;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_490)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_527 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1478.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_553 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1328;
    if (_RESERVED_IDENTIFIER_FIXUP_527 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1328 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_527), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_553);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1328 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_553);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1328;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1273);
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
    r0.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    vec2 hdB261 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.y = hdB261.x;
    r0.z = hdB261.y;
    vec3 hdB270 = v0.xyz + v0.xyz;
    r1.y = hdB270.x;
    r1.z = hdB270.y;
    r1.w = hdB270.z;
    vec2 param_11 = v3.xy;
    r3 = hdTex1(param_11);
    vec3 hdB286 = r1.yzw * r3.xyz;
    r2.y = hdB286.x;
    r2.z = hdB286.y;
    r2.w = hdB286.z;
    vec4 hdB295 = r3;
    vec3 hdB304 = mix(r2.yzw, hdB295.xyz, greaterThanEqual(-r0.zzz, vec3(0.0)));
    r3.x = hdB304.x;
    r3.y = hdB304.y;
    r3.z = hdB304.z;
    r3 = r1.xxxx * r3;
    vec2 param_12 = v2.xy;
    r4 = hdTex0(param_12);
    vec4 hdB320 = r1;
    vec3 hdB324 = hdB320.yzw * r4.xyz;
    r1.x = hdB324.x;
    r1.y = hdB324.y;
    r1.z = hdB324.z;
    vec4 hdB333 = r4;
    vec3 hdB339 = mix(r1.xyz, hdB333.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = hdB339.x;
    r4.y = hdB339.y;
    r4.z = hdB339.z;
    r0 = (r4 * r0.xxxx) + r3;
    vec3 hdB356 = r0.www * v1.xyz;
    r1.x = hdB356.x;
    r1.y = hdB356.y;
    r1.z = hdB356.z;
    vec4 hdB365 = r1;
    vec3 hdB367 = r2.xxx * hdB365.xyz;
    r1.x = hdB367.x;
    r1.y = hdB367.y;
    r1.z = hdB367.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB381 = r0;
    vec4 hdB383 = r0;
    vec3 hdB388 = (hdB381.xyz * hdB383.www) + r1.xyz;
    r0.x = hdB388.x;
    r0.y = hdB388.y;
    r0.z = hdB388.z;
    vec4 hdB395 = r0;
    vec3 hdB402 = hdB395.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB402.x;
    r0.y = hdB402.y;
    r0.z = hdB402.z;
    vec3 hdB417 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB417.x;
    oC0.y = hdB417.y;
    oC0.z = hdB417.z;
    oC0.w = 1.0;
    bool hdB429 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB437;
    if (hdB429)
    {
        hdB437 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB437 = hdB429;
    }
    if (hdB437)
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
    bool _1510 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1520;
    if (_1510)
    {
        _1520 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1520 = _1510;
    }
    if (_1520)
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
        bool _1545 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1560;
        if (!_1545)
        {
            _1560 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1560 = _1545;
        }
        if (_1560)
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
