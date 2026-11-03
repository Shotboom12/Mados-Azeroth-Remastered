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
float _RESERVED_IDENTIFIER_FIXUP_1641;
vec4 _RESERVED_IDENTIFIER_FIXUP_1642;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_617 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_620 = _RESERVED_IDENTIFIER_FIXUP_617.xy;
    float _RESERVED_IDENTIFIER_FIXUP_622 = _RESERVED_IDENTIFIER_FIXUP_617.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_620;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_622;
    vec4 _RESERVED_IDENTIFIER_FIXUP_623 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_626 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_630 = _RESERVED_IDENTIFIER_FIXUP_626.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1341.w = _RESERVED_IDENTIFIER_FIXUP_630;
    vec2 _RESERVED_IDENTIFIER_FIXUP_634 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_636 = _RESERVED_IDENTIFIER_FIXUP_634.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1343 = _RESERVED_IDENTIFIER_FIXUP_623;
    _RESERVED_IDENTIFIER_FIXUP_1343.y = _RESERVED_IDENTIFIER_FIXUP_636;
    float _RESERVED_IDENTIFIER_FIXUP_638 = _RESERVED_IDENTIFIER_FIXUP_634.y;
    _RESERVED_IDENTIFIER_FIXUP_1343.z = _RESERVED_IDENTIFIER_FIXUP_638;
    vec2 _RESERVED_IDENTIFIER_FIXUP_644 = _RESERVED_IDENTIFIER_FIXUP_1343.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1347.x = _RESERVED_IDENTIFIER_FIXUP_644.x;
    _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_644.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1347.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_630;
    float _RESERVED_IDENTIFIER_FIXUP_659 = _RESERVED_IDENTIFIER_FIXUP_623.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1343.x = _RESERVED_IDENTIFIER_FIXUP_659;
    vec2 _RESERVED_IDENTIFIER_FIXUP_673 = _RESERVED_IDENTIFIER_FIXUP_1343.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1360 = _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1360.x = _RESERVED_IDENTIFIER_FIXUP_673.x;
    _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_673.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1360.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_630;
    float _RESERVED_IDENTIFIER_FIXUP_688 = _RESERVED_IDENTIFIER_FIXUP_659 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1343.x = _RESERVED_IDENTIFIER_FIXUP_688;
    vec2 _RESERVED_IDENTIFIER_FIXUP_695 = _RESERVED_IDENTIFIER_FIXUP_1343.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1369;
    _RESERVED_IDENTIFIER_FIXUP_1369.x = _RESERVED_IDENTIFIER_FIXUP_695.x;
    _RESERVED_IDENTIFIER_FIXUP_1369.y = _RESERVED_IDENTIFIER_FIXUP_695.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_705 = _RESERVED_IDENTIFIER_FIXUP_1343.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1373;
    _RESERVED_IDENTIFIER_FIXUP_1373.x = _RESERVED_IDENTIFIER_FIXUP_705.x;
    _RESERVED_IDENTIFIER_FIXUP_1373.y = _RESERVED_IDENTIFIER_FIXUP_705.y;
    _RESERVED_IDENTIFIER_FIXUP_1369.w = _RESERVED_IDENTIFIER_FIXUP_630;
    _RESERVED_IDENTIFIER_FIXUP_1373.w = _RESERVED_IDENTIFIER_FIXUP_630;
    float _RESERVED_IDENTIFIER_FIXUP_759 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_777 = hdTex2(param_6);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1416;
    _RESERVED_IDENTIFIER_FIXUP_1416.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_777.xyz, vec3(1.0)), 0.0, 1.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_797 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_799 = _RESERVED_IDENTIFIER_FIXUP_797.x;
    _RESERVED_IDENTIFIER_FIXUP_1416.y = _RESERVED_IDENTIFIER_FIXUP_799;
    float _RESERVED_IDENTIFIER_FIXUP_801 = _RESERVED_IDENTIFIER_FIXUP_797.y;
    _RESERVED_IDENTIFIER_FIXUP_1416.z = _RESERVED_IDENTIFIER_FIXUP_801;
    vec3 _RESERVED_IDENTIFIER_FIXUP_803 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1641).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_806 = _RESERVED_IDENTIFIER_FIXUP_803 + _RESERVED_IDENTIFIER_FIXUP_803;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1422 = _RESERVED_IDENTIFIER_FIXUP_777;
    _RESERVED_IDENTIFIER_FIXUP_1422.y = _RESERVED_IDENTIFIER_FIXUP_806.x;
    _RESERVED_IDENTIFIER_FIXUP_1422.z = _RESERVED_IDENTIFIER_FIXUP_806.y;
    _RESERVED_IDENTIFIER_FIXUP_1422.w = _RESERVED_IDENTIFIER_FIXUP_806.z;
    vec2 param_7 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_820 = hdTex1(param_7).xyz;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1369.xy;
    float param_9 = _RESERVED_IDENTIFIER_FIXUP_630;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1373.xy;
    float param_11 = _RESERVED_IDENTIFIER_FIXUP_630;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1643 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_759 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_688 + hdLod5(param_8, param_9).x) + hdLod5(param_10, param_11).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_777.w), _RESERVED_IDENTIFIER_FIXUP_1422.yzw * _RESERVED_IDENTIFIER_FIXUP_820);
    vec3 _RESERVED_IDENTIFIER_FIXUP_836 = mix(_RESERVED_IDENTIFIER_FIXUP_1643.yzw, _RESERVED_IDENTIFIER_FIXUP_820, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1416.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434;
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_836.x;
    _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_836.y;
    _RESERVED_IDENTIFIER_FIXUP_1434.z = _RESERVED_IDENTIFIER_FIXUP_836.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_854 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_855 = _RESERVED_IDENTIFIER_FIXUP_1422.yzw * _RESERVED_IDENTIFIER_FIXUP_854;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1440;
    _RESERVED_IDENTIFIER_FIXUP_1440.x = _RESERVED_IDENTIFIER_FIXUP_855.x;
    _RESERVED_IDENTIFIER_FIXUP_1440.y = _RESERVED_IDENTIFIER_FIXUP_855.y;
    _RESERVED_IDENTIFIER_FIXUP_1440.z = _RESERVED_IDENTIFIER_FIXUP_855.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_870 = mix(_RESERVED_IDENTIFIER_FIXUP_1440.xyz, _RESERVED_IDENTIFIER_FIXUP_854, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1416.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1446;
    _RESERVED_IDENTIFIER_FIXUP_1446.x = _RESERVED_IDENTIFIER_FIXUP_870.x;
    _RESERVED_IDENTIFIER_FIXUP_1446.y = _RESERVED_IDENTIFIER_FIXUP_870.y;
    _RESERVED_IDENTIFIER_FIXUP_1446.z = _RESERVED_IDENTIFIER_FIXUP_870.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_882 = (_RESERVED_IDENTIFIER_FIXUP_1446 * _RESERVED_IDENTIFIER_FIXUP_1416.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_1422.xxxx * _RESERVED_IDENTIFIER_FIXUP_1434);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1452;
    _RESERVED_IDENTIFIER_FIXUP_1452.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1452.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1452.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_898 = _RESERVED_IDENTIFIER_FIXUP_1643.xxx * _RESERVED_IDENTIFIER_FIXUP_1452.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1458;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_898.x;
    _RESERVED_IDENTIFIER_FIXUP_1458.y = _RESERVED_IDENTIFIER_FIXUP_898.y;
    _RESERVED_IDENTIFIER_FIXUP_1458.z = _RESERVED_IDENTIFIER_FIXUP_898.z;
    _RESERVED_IDENTIFIER_FIXUP_882.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_924 = (_RESERVED_IDENTIFIER_FIXUP_882.xyz * _RESERVED_IDENTIFIER_FIXUP_882.www) + _RESERVED_IDENTIFIER_FIXUP_1458.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1469;
    _RESERVED_IDENTIFIER_FIXUP_1469.x = _RESERVED_IDENTIFIER_FIXUP_924.x;
    _RESERVED_IDENTIFIER_FIXUP_1469.y = _RESERVED_IDENTIFIER_FIXUP_924.y;
    _RESERVED_IDENTIFIER_FIXUP_1469.z = _RESERVED_IDENTIFIER_FIXUP_924.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_937 = _RESERVED_IDENTIFIER_FIXUP_1469.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1475;
    _RESERVED_IDENTIFIER_FIXUP_1475.x = _RESERVED_IDENTIFIER_FIXUP_937.x;
    _RESERVED_IDENTIFIER_FIXUP_1475.y = _RESERVED_IDENTIFIER_FIXUP_937.y;
    _RESERVED_IDENTIFIER_FIXUP_1475.z = _RESERVED_IDENTIFIER_FIXUP_937.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_952 = _RESERVED_IDENTIFIER_FIXUP_1475.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1481;
    _RESERVED_IDENTIFIER_FIXUP_1481.x = _RESERVED_IDENTIFIER_FIXUP_952.x;
    _RESERVED_IDENTIFIER_FIXUP_1481.y = _RESERVED_IDENTIFIER_FIXUP_952.y;
    _RESERVED_IDENTIFIER_FIXUP_1481.z = _RESERVED_IDENTIFIER_FIXUP_952.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_620;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_622;
    vec4 _RESERVED_IDENTIFIER_FIXUP_991 = hdLod5(param_12, param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1494 = _RESERVED_IDENTIFIER_FIXUP_991;
    _RESERVED_IDENTIFIER_FIXUP_1494.y = _RESERVED_IDENTIFIER_FIXUP_636;
    _RESERVED_IDENTIFIER_FIXUP_1494.z = _RESERVED_IDENTIFIER_FIXUP_638;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1012 = _RESERVED_IDENTIFIER_FIXUP_1494.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1498 = _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1498.x = _RESERVED_IDENTIFIER_FIXUP_1012.x;
    _RESERVED_IDENTIFIER_FIXUP_1498.y = _RESERVED_IDENTIFIER_FIXUP_1012.y;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1498.xy;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_630;
    float _RESERVED_IDENTIFIER_FIXUP_1027 = _RESERVED_IDENTIFIER_FIXUP_991.x + hdLod5(param_14, param_15).x;
    _RESERVED_IDENTIFIER_FIXUP_1494.x = _RESERVED_IDENTIFIER_FIXUP_1027;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1041 = _RESERVED_IDENTIFIER_FIXUP_1494.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1511 = _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1511.x = _RESERVED_IDENTIFIER_FIXUP_1041.x;
    _RESERVED_IDENTIFIER_FIXUP_1511.y = _RESERVED_IDENTIFIER_FIXUP_1041.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1511.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_630;
    float _RESERVED_IDENTIFIER_FIXUP_1056 = _RESERVED_IDENTIFIER_FIXUP_1027 + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1494.x = _RESERVED_IDENTIFIER_FIXUP_1056;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1063 = _RESERVED_IDENTIFIER_FIXUP_1494.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1520;
    _RESERVED_IDENTIFIER_FIXUP_1520.x = _RESERVED_IDENTIFIER_FIXUP_1063.x;
    _RESERVED_IDENTIFIER_FIXUP_1520.y = _RESERVED_IDENTIFIER_FIXUP_1063.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1073 = _RESERVED_IDENTIFIER_FIXUP_1494.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1524;
    _RESERVED_IDENTIFIER_FIXUP_1524.x = _RESERVED_IDENTIFIER_FIXUP_1073.x;
    _RESERVED_IDENTIFIER_FIXUP_1524.y = _RESERVED_IDENTIFIER_FIXUP_1073.y;
    _RESERVED_IDENTIFIER_FIXUP_1520.w = _RESERVED_IDENTIFIER_FIXUP_630;
    _RESERVED_IDENTIFIER_FIXUP_1524.w = _RESERVED_IDENTIFIER_FIXUP_630;
    vec2 param_18 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1145 = hdTex2(param_18);
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1520.xy;
    float param_20 = _RESERVED_IDENTIFIER_FIXUP_630;
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1524.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_630;
    float _RESERVED_IDENTIFIER_FIXUP_1150 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_759 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_1056 + hdLod5(param_19, param_20).x) + hdLod5(param_21, param_22).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1145.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567;
    _RESERVED_IDENTIFIER_FIXUP_1567.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1145.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1567.y = _RESERVED_IDENTIFIER_FIXUP_799;
    _RESERVED_IDENTIFIER_FIXUP_1567.z = _RESERVED_IDENTIFIER_FIXUP_801;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1573 = _RESERVED_IDENTIFIER_FIXUP_1145;
    _RESERVED_IDENTIFIER_FIXUP_1573.y = _RESERVED_IDENTIFIER_FIXUP_1174.x;
    _RESERVED_IDENTIFIER_FIXUP_1573.z = _RESERVED_IDENTIFIER_FIXUP_1174.y;
    _RESERVED_IDENTIFIER_FIXUP_1573.w = _RESERVED_IDENTIFIER_FIXUP_1174.z;
    vec2 param_23 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184 = hdTex1(param_23);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_1184.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1644 = vec4(_RESERVED_IDENTIFIER_FIXUP_1150, _RESERVED_IDENTIFIER_FIXUP_1573.yzw * _RESERVED_IDENTIFIER_FIXUP_1188);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1204 = mix(_RESERVED_IDENTIFIER_FIXUP_1644.yzw, _RESERVED_IDENTIFIER_FIXUP_1188, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1567.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1585 = _RESERVED_IDENTIFIER_FIXUP_1184;
    _RESERVED_IDENTIFIER_FIXUP_1585.x = _RESERVED_IDENTIFIER_FIXUP_1204.x;
    _RESERVED_IDENTIFIER_FIXUP_1585.y = _RESERVED_IDENTIFIER_FIXUP_1204.y;
    _RESERVED_IDENTIFIER_FIXUP_1585.z = _RESERVED_IDENTIFIER_FIXUP_1204.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1218.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1573.yzw * _RESERVED_IDENTIFIER_FIXUP_1222;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1591;
    _RESERVED_IDENTIFIER_FIXUP_1591.x = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_1591.y = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_1591.z = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1238 = mix(_RESERVED_IDENTIFIER_FIXUP_1591.xyz, _RESERVED_IDENTIFIER_FIXUP_1222, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1567.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1597.x = _RESERVED_IDENTIFIER_FIXUP_1238.x;
    _RESERVED_IDENTIFIER_FIXUP_1597.y = _RESERVED_IDENTIFIER_FIXUP_1238.y;
    _RESERVED_IDENTIFIER_FIXUP_1597.z = _RESERVED_IDENTIFIER_FIXUP_1238.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1250 = (_RESERVED_IDENTIFIER_FIXUP_1597 * _RESERVED_IDENTIFIER_FIXUP_1567.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_1573.xxxx * _RESERVED_IDENTIFIER_FIXUP_1585);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1255 = _RESERVED_IDENTIFIER_FIXUP_1250.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1603;
    _RESERVED_IDENTIFIER_FIXUP_1603.x = _RESERVED_IDENTIFIER_FIXUP_1255.x;
    _RESERVED_IDENTIFIER_FIXUP_1603.y = _RESERVED_IDENTIFIER_FIXUP_1255.y;
    _RESERVED_IDENTIFIER_FIXUP_1603.z = _RESERVED_IDENTIFIER_FIXUP_1255.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1266 = _RESERVED_IDENTIFIER_FIXUP_1644.xxx * _RESERVED_IDENTIFIER_FIXUP_1603.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1609;
    _RESERVED_IDENTIFIER_FIXUP_1609.x = _RESERVED_IDENTIFIER_FIXUP_1266.x;
    _RESERVED_IDENTIFIER_FIXUP_1609.y = _RESERVED_IDENTIFIER_FIXUP_1266.y;
    _RESERVED_IDENTIFIER_FIXUP_1609.z = _RESERVED_IDENTIFIER_FIXUP_1266.z;
    float _RESERVED_IDENTIFIER_FIXUP_1276 = (_RESERVED_IDENTIFIER_FIXUP_1150 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1250.w = _RESERVED_IDENTIFIER_FIXUP_1276;
    _RESERVED_IDENTIFIER_FIXUP_1250.w = _RESERVED_IDENTIFIER_FIXUP_1276;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1292 = (_RESERVED_IDENTIFIER_FIXUP_1250.xyz * _RESERVED_IDENTIFIER_FIXUP_1250.www) + _RESERVED_IDENTIFIER_FIXUP_1609.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1622;
    _RESERVED_IDENTIFIER_FIXUP_1622.x = _RESERVED_IDENTIFIER_FIXUP_1292.x;
    _RESERVED_IDENTIFIER_FIXUP_1622.y = _RESERVED_IDENTIFIER_FIXUP_1292.y;
    _RESERVED_IDENTIFIER_FIXUP_1622.z = _RESERVED_IDENTIFIER_FIXUP_1292.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_1622.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1628;
    _RESERVED_IDENTIFIER_FIXUP_1628.x = _RESERVED_IDENTIFIER_FIXUP_1305.x;
    _RESERVED_IDENTIFIER_FIXUP_1628.y = _RESERVED_IDENTIFIER_FIXUP_1305.y;
    _RESERVED_IDENTIFIER_FIXUP_1628.z = _RESERVED_IDENTIFIER_FIXUP_1305.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1628.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_484 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_493;
    if (_RESERVED_IDENTIFIER_FIXUP_484)
    {
        _RESERVED_IDENTIFIER_FIXUP_493 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_493 = _RESERVED_IDENTIFIER_FIXUP_484;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_493)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_530 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1481.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_556 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1331;
    if (_RESERVED_IDENTIFIER_FIXUP_530 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1331 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_530), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_556);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1331 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_556);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1331;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1276);
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
    r4 = OptTex0( v2.xyz);
    vec4 hdB323 = r1;
    vec3 hdB327 = hdB323.yzw * r4.xyz;
    r1.x = hdB327.x;
    r1.y = hdB327.y;
    r1.z = hdB327.z;
    vec4 hdB336 = r4;
    vec3 hdB342 = mix(r1.xyz, hdB336.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = hdB342.x;
    r4.y = hdB342.y;
    r4.z = hdB342.z;
    r0 = (r4 * r0.xxxx) + r3;
    vec3 hdB359 = r0.www * v1.xyz;
    r1.x = hdB359.x;
    r1.y = hdB359.y;
    r1.z = hdB359.z;
    vec4 hdB368 = r1;
    vec3 hdB370 = r2.xxx * hdB368.xyz;
    r1.x = hdB370.x;
    r1.y = hdB370.y;
    r1.z = hdB370.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB384 = r0;
    vec4 hdB386 = r0;
    vec3 hdB391 = (hdB384.xyz * hdB386.www) + r1.xyz;
    r0.x = hdB391.x;
    r0.y = hdB391.y;
    r0.z = hdB391.z;
    vec4 hdB398 = r0;
    vec3 hdB405 = hdB398.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB405.x;
    r0.y = hdB405.y;
    r0.z = hdB405.z;
    vec3 hdB420 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB420.x;
    oC0.y = hdB420.y;
    oC0.z = hdB420.z;
    oC0.w = 1.0;
    bool hdB432 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB440;
    if (hdB432)
    {
        hdB440 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB440 = hdB432;
    }
    if (hdB440)
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
    bool _1484 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1494;
    if (_1484)
    {
        _1494 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1494 = _1484;
    }
    if (_1494)
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
        bool _1519 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1534;
        if (!_1519)
        {
            _1534 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1534 = _1519;
        }
        if (_1534)
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
