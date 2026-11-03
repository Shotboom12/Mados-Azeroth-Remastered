#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1554;
vec4 _RESERVED_IDENTIFIER_FIXUP_1555;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _49 = hdOverride >= 0;
    bool _69;
    if (_49)
    {
        _69 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _69 = _49;
    }
    vec4 _70;
    if (_69)
    {
        _70 = vec4(float(hdOverride));
    }
    else
    {
        _70 = value;
    }
    return _70;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _87 = hdOverride >= 0;
    bool _96;
    if (_87)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _96 = _87;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _114 = hdOverride >= 0;
    bool _124;
    if (_114)
    {
        _124 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_590 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_594 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_598 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_602 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_598.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1267 = _RESERVED_IDENTIFIER_FIXUP_598;
    _RESERVED_IDENTIFIER_FIXUP_1267.y = _RESERVED_IDENTIFIER_FIXUP_602;
    _RESERVED_IDENTIFIER_FIXUP_1267.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_602;
    vec4 _RESERVED_IDENTIFIER_FIXUP_612 = _RESERVED_IDENTIFIER_FIXUP_594 * _RESERVED_IDENTIFIER_FIXUP_1267.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_618 = (_RESERVED_IDENTIFIER_FIXUP_590 * _RESERVED_IDENTIFIER_FIXUP_1267.yyyy) + _RESERVED_IDENTIFIER_FIXUP_612;
    float _RESERVED_IDENTIFIER_FIXUP_625 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1274 = _RESERVED_IDENTIFIER_FIXUP_612;
    _RESERVED_IDENTIFIER_FIXUP_1274.x = _RESERVED_IDENTIFIER_FIXUP_625;
    float _RESERVED_IDENTIFIER_FIXUP_631 = clamp((_RESERVED_IDENTIFIER_FIXUP_625 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1274.x = _RESERVED_IDENTIFIER_FIXUP_631;
    float _RESERVED_IDENTIFIER_FIXUP_637 = ((-_RESERVED_IDENTIFIER_FIXUP_631) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1274.y = _RESERVED_IDENTIFIER_FIXUP_637;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1557;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1556;
    if (_RESERVED_IDENTIFIER_FIXUP_637 != (-_RESERVED_IDENTIFIER_FIXUP_637))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_649 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_1274;
        _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_649.x;
        _RESERVED_IDENTIFIER_FIXUP_1287.z = _RESERVED_IDENTIFIER_FIXUP_649.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_659 = _RESERVED_IDENTIFIER_FIXUP_1287.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1291;
        _RESERVED_IDENTIFIER_FIXUP_1291.x = _RESERVED_IDENTIFIER_FIXUP_659.x;
        _RESERVED_IDENTIFIER_FIXUP_1291.y = _RESERVED_IDENTIFIER_FIXUP_659.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_669 = _RESERVED_IDENTIFIER_FIXUP_1287.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1295;
        _RESERVED_IDENTIFIER_FIXUP_1295.x = _RESERVED_IDENTIFIER_FIXUP_669.x;
        _RESERVED_IDENTIFIER_FIXUP_1295.y = _RESERVED_IDENTIFIER_FIXUP_669.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_679 = _RESERVED_IDENTIFIER_FIXUP_1287.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1299;
        _RESERVED_IDENTIFIER_FIXUP_1299.x = _RESERVED_IDENTIFIER_FIXUP_679.x;
        _RESERVED_IDENTIFIER_FIXUP_1299.y = _RESERVED_IDENTIFIER_FIXUP_679.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_689 = _RESERVED_IDENTIFIER_FIXUP_1287.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1303;
        _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_689.x;
        _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_689.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_697 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_697.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_697.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_703 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_1291.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1295.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1299.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1303.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1291.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_703.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1295.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_703.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1299.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_703.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_760 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_703 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1303.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_766 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_766;
        float _RESERVED_IDENTIFIER_FIXUP_771 = float(_RESERVED_IDENTIFIER_FIXUP_766 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_771;
        float _RESERVED_IDENTIFIER_FIXUP_774 = dot(_RESERVED_IDENTIFIER_FIXUP_760, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1287.z = _RESERVED_IDENTIFIER_FIXUP_774;
        float _RESERVED_IDENTIFIER_FIXUP_780 = _RESERVED_IDENTIFIER_FIXUP_771 + _RESERVED_IDENTIFIER_FIXUP_774;
        _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_780;
        float _RESERVED_IDENTIFIER_FIXUP_785 = (_RESERVED_IDENTIFIER_FIXUP_780 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_785;
        float _RESERVED_IDENTIFIER_FIXUP_792 = (_RESERVED_IDENTIFIER_FIXUP_631 * _RESERVED_IDENTIFIER_FIXUP_785) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_792;
        _RESERVED_IDENTIFIER_FIXUP_760.x = min(_RESERVED_IDENTIFIER_FIXUP_792, _RESERVED_IDENTIFIER_FIXUP_598.w);
        _RESERVED_IDENTIFIER_FIXUP_1557 = _RESERVED_IDENTIFIER_FIXUP_1287;
        _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_760;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1285 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1285.x = _RESERVED_IDENTIFIER_FIXUP_598.w;
        _RESERVED_IDENTIFIER_FIXUP_1557 = _RESERVED_IDENTIFIER_FIXUP_1274;
        _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_1285;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_1557;
    _RESERVED_IDENTIFIER_FIXUP_1364.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_821 = _RESERVED_IDENTIFIER_FIXUP_618.xyz * _RESERVED_IDENTIFIER_FIXUP_1364.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1366 = _RESERVED_IDENTIFIER_FIXUP_618;
    _RESERVED_IDENTIFIER_FIXUP_1366.x = _RESERVED_IDENTIFIER_FIXUP_821.x;
    _RESERVED_IDENTIFIER_FIXUP_1366.y = _RESERVED_IDENTIFIER_FIXUP_821.y;
    _RESERVED_IDENTIFIER_FIXUP_1366.z = _RESERVED_IDENTIFIER_FIXUP_821.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_832 = _RESERVED_IDENTIFIER_FIXUP_1366.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1554).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1372 = _RESERVED_IDENTIFIER_FIXUP_1366;
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_832.x;
    _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_832.y;
    _RESERVED_IDENTIFIER_FIXUP_1372.z = _RESERVED_IDENTIFIER_FIXUP_832.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_843 = _RESERVED_IDENTIFIER_FIXUP_1372.xyz + _RESERVED_IDENTIFIER_FIXUP_1372.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378 = _RESERVED_IDENTIFIER_FIXUP_1372;
    _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_843.x;
    _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_843.y;
    _RESERVED_IDENTIFIER_FIXUP_1378.z = _RESERVED_IDENTIFIER_FIXUP_843.z;
    _RESERVED_IDENTIFIER_FIXUP_1364.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1364.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1364.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_868 = (_RESERVED_IDENTIFIER_FIXUP_1364.xyz * _RESERVED_IDENTIFIER_FIXUP_1556.xxx) + _RESERVED_IDENTIFIER_FIXUP_1378.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1390 = _RESERVED_IDENTIFIER_FIXUP_1378;
    _RESERVED_IDENTIFIER_FIXUP_1390.x = _RESERVED_IDENTIFIER_FIXUP_868.x;
    _RESERVED_IDENTIFIER_FIXUP_1390.y = _RESERVED_IDENTIFIER_FIXUP_868.y;
    _RESERVED_IDENTIFIER_FIXUP_1390.z = _RESERVED_IDENTIFIER_FIXUP_868.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_881 = _RESERVED_IDENTIFIER_FIXUP_1390.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1396 = _RESERVED_IDENTIFIER_FIXUP_1390;
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_881.x;
    _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_881.y;
    _RESERVED_IDENTIFIER_FIXUP_1396.z = _RESERVED_IDENTIFIER_FIXUP_881.z;
    vec2 param_13 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_932 = hdTex0(param_13);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_936 = hdTex1(param_14);
    vec2 param_15 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_940 = hdTex2(param_15);
    float _RESERVED_IDENTIFIER_FIXUP_944 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_940.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_940;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_944;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_944;
    vec4 _RESERVED_IDENTIFIER_FIXUP_954 = _RESERVED_IDENTIFIER_FIXUP_936 * _RESERVED_IDENTIFIER_FIXUP_1410.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_960 = (_RESERVED_IDENTIFIER_FIXUP_932 * _RESERVED_IDENTIFIER_FIXUP_1410.yyyy) + _RESERVED_IDENTIFIER_FIXUP_954;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_954;
    _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_625;
    float _RESERVED_IDENTIFIER_FIXUP_973 = clamp((_RESERVED_IDENTIFIER_FIXUP_625 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_973;
    float _RESERVED_IDENTIFIER_FIXUP_979 = ((-_RESERVED_IDENTIFIER_FIXUP_973) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1417.y = _RESERVED_IDENTIFIER_FIXUP_979;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1561;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1560;
    if (_RESERVED_IDENTIFIER_FIXUP_979 != (-_RESERVED_IDENTIFIER_FIXUP_979))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_991 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1430 = _RESERVED_IDENTIFIER_FIXUP_1417;
        _RESERVED_IDENTIFIER_FIXUP_1430.y = _RESERVED_IDENTIFIER_FIXUP_991.x;
        _RESERVED_IDENTIFIER_FIXUP_1430.z = _RESERVED_IDENTIFIER_FIXUP_991.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1001 = _RESERVED_IDENTIFIER_FIXUP_1430.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1434;
        _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_1001.x;
        _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_1001.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1011 = _RESERVED_IDENTIFIER_FIXUP_1430.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1438;
        _RESERVED_IDENTIFIER_FIXUP_1438.x = _RESERVED_IDENTIFIER_FIXUP_1011.x;
        _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_1011.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1021 = _RESERVED_IDENTIFIER_FIXUP_1430.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1442;
        _RESERVED_IDENTIFIER_FIXUP_1442.x = _RESERVED_IDENTIFIER_FIXUP_1021.x;
        _RESERVED_IDENTIFIER_FIXUP_1442.y = _RESERVED_IDENTIFIER_FIXUP_1021.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1031 = _RESERVED_IDENTIFIER_FIXUP_1430.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1446;
        _RESERVED_IDENTIFIER_FIXUP_1446.x = _RESERVED_IDENTIFIER_FIXUP_1031.x;
        _RESERVED_IDENTIFIER_FIXUP_1446.y = _RESERVED_IDENTIFIER_FIXUP_1031.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1039 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1039.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1039.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1045 = hdLod5(param_16, param_17);
        _RESERVED_IDENTIFIER_FIXUP_1434.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1438.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1442.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1446.w = 0.0;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1434.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1045.y = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1438.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1045.z = hdLod5(param_20, param_21).x;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1442.xy;
        float param_23 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1045.w = hdLod5(param_22, param_23).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1102 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1045 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1446.xy;
        float param_25 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1108 = hdLod5(param_24, param_25).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1430.y = _RESERVED_IDENTIFIER_FIXUP_1108;
        float _RESERVED_IDENTIFIER_FIXUP_1113 = float(_RESERVED_IDENTIFIER_FIXUP_1108 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1430.y = _RESERVED_IDENTIFIER_FIXUP_1113;
        float _RESERVED_IDENTIFIER_FIXUP_1116 = dot(_RESERVED_IDENTIFIER_FIXUP_1102, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1430.z = _RESERVED_IDENTIFIER_FIXUP_1116;
        float _RESERVED_IDENTIFIER_FIXUP_1122 = _RESERVED_IDENTIFIER_FIXUP_1113 + _RESERVED_IDENTIFIER_FIXUP_1116;
        _RESERVED_IDENTIFIER_FIXUP_1430.y = _RESERVED_IDENTIFIER_FIXUP_1122;
        float _RESERVED_IDENTIFIER_FIXUP_1127 = (_RESERVED_IDENTIFIER_FIXUP_1122 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1430.y = _RESERVED_IDENTIFIER_FIXUP_1127;
        float _RESERVED_IDENTIFIER_FIXUP_1134 = (_RESERVED_IDENTIFIER_FIXUP_973 * _RESERVED_IDENTIFIER_FIXUP_1127) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1430.x = _RESERVED_IDENTIFIER_FIXUP_1134;
        _RESERVED_IDENTIFIER_FIXUP_1102.x = min(_RESERVED_IDENTIFIER_FIXUP_1134, _RESERVED_IDENTIFIER_FIXUP_940.w);
        _RESERVED_IDENTIFIER_FIXUP_1561 = _RESERVED_IDENTIFIER_FIXUP_1430;
        _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_1102;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1428 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_940.w;
        _RESERVED_IDENTIFIER_FIXUP_1561 = _RESERVED_IDENTIFIER_FIXUP_1417;
        _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_1428;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1150 = (_RESERVED_IDENTIFIER_FIXUP_1560.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1505 = _RESERVED_IDENTIFIER_FIXUP_1561;
    _RESERVED_IDENTIFIER_FIXUP_1505.x = _RESERVED_IDENTIFIER_FIXUP_1150;
    _RESERVED_IDENTIFIER_FIXUP_1505.x = _RESERVED_IDENTIFIER_FIXUP_1150;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1163 = _RESERVED_IDENTIFIER_FIXUP_960.xyz * _RESERVED_IDENTIFIER_FIXUP_1505.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1511 = _RESERVED_IDENTIFIER_FIXUP_960;
    _RESERVED_IDENTIFIER_FIXUP_1511.x = _RESERVED_IDENTIFIER_FIXUP_1163.x;
    _RESERVED_IDENTIFIER_FIXUP_1511.y = _RESERVED_IDENTIFIER_FIXUP_1163.y;
    _RESERVED_IDENTIFIER_FIXUP_1511.z = _RESERVED_IDENTIFIER_FIXUP_1163.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1511.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_1511;
    _RESERVED_IDENTIFIER_FIXUP_1517.x = _RESERVED_IDENTIFIER_FIXUP_1174.x;
    _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_1174.y;
    _RESERVED_IDENTIFIER_FIXUP_1517.z = _RESERVED_IDENTIFIER_FIXUP_1174.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_1517.xyz + _RESERVED_IDENTIFIER_FIXUP_1517.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_1517;
    _RESERVED_IDENTIFIER_FIXUP_1523.x = _RESERVED_IDENTIFIER_FIXUP_1185.x;
    _RESERVED_IDENTIFIER_FIXUP_1523.y = _RESERVED_IDENTIFIER_FIXUP_1185.y;
    _RESERVED_IDENTIFIER_FIXUP_1523.z = _RESERVED_IDENTIFIER_FIXUP_1185.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1196 = _RESERVED_IDENTIFIER_FIXUP_1523.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1505.x = _RESERVED_IDENTIFIER_FIXUP_1196.x;
    _RESERVED_IDENTIFIER_FIXUP_1505.y = _RESERVED_IDENTIFIER_FIXUP_1196.y;
    _RESERVED_IDENTIFIER_FIXUP_1505.z = _RESERVED_IDENTIFIER_FIXUP_1196.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1210 = (_RESERVED_IDENTIFIER_FIXUP_1505.xyz * _RESERVED_IDENTIFIER_FIXUP_1560.xxx) + _RESERVED_IDENTIFIER_FIXUP_1523.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1535 = _RESERVED_IDENTIFIER_FIXUP_1523;
    _RESERVED_IDENTIFIER_FIXUP_1535.x = _RESERVED_IDENTIFIER_FIXUP_1210.x;
    _RESERVED_IDENTIFIER_FIXUP_1535.y = _RESERVED_IDENTIFIER_FIXUP_1210.y;
    _RESERVED_IDENTIFIER_FIXUP_1535.z = _RESERVED_IDENTIFIER_FIXUP_1210.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1535.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1541 = _RESERVED_IDENTIFIER_FIXUP_1535;
    _RESERVED_IDENTIFIER_FIXUP_1541.x = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_1541.y = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_1541.z = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1541.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_454 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_463;
    if (_RESERVED_IDENTIFIER_FIXUP_454)
    {
        _RESERVED_IDENTIFIER_FIXUP_463 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_463 = _RESERVED_IDENTIFIER_FIXUP_454;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_463)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_500 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1396.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_527 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1260;
    if (_RESERVED_IDENTIFIER_FIXUP_500 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1260 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_500), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_527);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1260 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_527);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1260;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1150);
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
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 *= r2.xxxx;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB124 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB124.x;
        r1.z = hdB124.y;
        vec2 hdB146 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB146.x;
        r3.y = hdB146.y;
        vec2 hdB157 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB157.x;
        r4.y = hdB157.y;
        vec2 hdB168 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB168.x;
        r5.y = hdB168.y;
        vec2 hdB179 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB179.x;
        r6.y = hdB179.y;
        r7 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r7.xy;
        float param_4 = r7.w;
        r7 = hdLod5(param_3, param_4);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
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
        r7.y = r3.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r3 = r7 + (-v4.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.y = r6.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r3.x = min(r1.x, r2.w);
    }
    else
    {
        r3.x = r2.w;
    }
    r1.x = (r3.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB309 = r0;
    vec3 hdB313 = hdB309.xyz * r1.xxx;
    r0.x = hdB313.x;
    r0.y = hdB313.y;
    r0.z = hdB313.z;
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
    vec3 hdB346 = r0.www * v1.xyz;
    r1.x = hdB346.x;
    r1.y = hdB346.y;
    r1.z = hdB346.z;
    vec4 hdB358 = r0;
    vec3 hdB360 = (r1.xyz * r3.xxx) + hdB358.xyz;
    r0.x = hdB360.x;
    r0.y = hdB360.y;
    r0.z = hdB360.z;
    vec4 hdB367 = r0;
    vec3 hdB374 = hdB367.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB374.x;
    r0.y = hdB374.y;
    r0.z = hdB374.z;
    vec3 hdB389 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB389.x;
    oC0.y = hdB389.y;
    oC0.z = hdB389.z;
    oC0.w = 1.0;
    bool hdB402 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB410;
    if (hdB402)
    {
        hdB410 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB410 = hdB402;
    }
    if (hdB410)
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
    bool _1445 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1455;
    if (_1445)
    {
        _1455 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1455 = _1445;
    }
    if (_1455)
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
        bool _1480 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1495;
        if (!_1480)
        {
            _1495 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1495 = _1480;
        }
        if (_1495)
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
