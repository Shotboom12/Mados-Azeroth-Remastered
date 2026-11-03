#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1523;
vec4 _RESERVED_IDENTIFIER_FIXUP_1524;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
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
    bool _43 = hdOverride >= 0;
    bool _62;
    if (_43)
    {
        _62 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _62 = _43;
    }
    vec4 _63;
    if (_62)
    {
        _63 = vec4(float(hdOverride));
    }
    else
    {
        _63 = value;
    }
    return _63;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _81 = hdOverride >= 0;
    bool _91;
    if (_81)
    {
        _91 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _91 = _81;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_580 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_584 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_588 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_584.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1236 = _RESERVED_IDENTIFIER_FIXUP_584;
    _RESERVED_IDENTIFIER_FIXUP_1236.x = _RESERVED_IDENTIFIER_FIXUP_588;
    _RESERVED_IDENTIFIER_FIXUP_1236.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_588;
    vec4 _RESERVED_IDENTIFIER_FIXUP_598 = _RESERVED_IDENTIFIER_FIXUP_580 * _RESERVED_IDENTIFIER_FIXUP_1236.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_605 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1243 = _RESERVED_IDENTIFIER_FIXUP_1236;
    _RESERVED_IDENTIFIER_FIXUP_1243.x = _RESERVED_IDENTIFIER_FIXUP_605;
    float _RESERVED_IDENTIFIER_FIXUP_611 = clamp((_RESERVED_IDENTIFIER_FIXUP_605 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1243.x = _RESERVED_IDENTIFIER_FIXUP_611;
    float _RESERVED_IDENTIFIER_FIXUP_617 = ((-_RESERVED_IDENTIFIER_FIXUP_611) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1243.y = _RESERVED_IDENTIFIER_FIXUP_617;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1526;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1525;
    if (_RESERVED_IDENTIFIER_FIXUP_617 != (-_RESERVED_IDENTIFIER_FIXUP_617))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_629 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1256 = _RESERVED_IDENTIFIER_FIXUP_1243;
        _RESERVED_IDENTIFIER_FIXUP_1256.y = _RESERVED_IDENTIFIER_FIXUP_629.x;
        _RESERVED_IDENTIFIER_FIXUP_1256.z = _RESERVED_IDENTIFIER_FIXUP_629.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_639 = _RESERVED_IDENTIFIER_FIXUP_1256.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1260;
        _RESERVED_IDENTIFIER_FIXUP_1260.x = _RESERVED_IDENTIFIER_FIXUP_639.x;
        _RESERVED_IDENTIFIER_FIXUP_1260.y = _RESERVED_IDENTIFIER_FIXUP_639.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_649 = _RESERVED_IDENTIFIER_FIXUP_1256.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1264;
        _RESERVED_IDENTIFIER_FIXUP_1264.x = _RESERVED_IDENTIFIER_FIXUP_649.x;
        _RESERVED_IDENTIFIER_FIXUP_1264.y = _RESERVED_IDENTIFIER_FIXUP_649.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_659 = _RESERVED_IDENTIFIER_FIXUP_1256.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1268;
        _RESERVED_IDENTIFIER_FIXUP_1268.x = _RESERVED_IDENTIFIER_FIXUP_659.x;
        _RESERVED_IDENTIFIER_FIXUP_1268.y = _RESERVED_IDENTIFIER_FIXUP_659.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_669 = _RESERVED_IDENTIFIER_FIXUP_1256.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1272;
        _RESERVED_IDENTIFIER_FIXUP_1272.x = _RESERVED_IDENTIFIER_FIXUP_669.x;
        _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_669.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_677 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_677.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_677.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_683 = hdLod5(param_1, param_2);
        _RESERVED_IDENTIFIER_FIXUP_1260.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1264.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1268.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1272.w = 0.0;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1260.xy;
        float param_4 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_683.y = hdLod5(param_3, param_4).x;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1264.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_683.z = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1268.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_683.w = hdLod5(param_7, param_8).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_740 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_683 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1272.xy;
        float param_10 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_746 = hdLod5(param_9, param_10).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1256.y = _RESERVED_IDENTIFIER_FIXUP_746;
        float _RESERVED_IDENTIFIER_FIXUP_751 = float(_RESERVED_IDENTIFIER_FIXUP_746 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1256.y = _RESERVED_IDENTIFIER_FIXUP_751;
        float _RESERVED_IDENTIFIER_FIXUP_754 = dot(_RESERVED_IDENTIFIER_FIXUP_740, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1256.z = _RESERVED_IDENTIFIER_FIXUP_754;
        float _RESERVED_IDENTIFIER_FIXUP_760 = _RESERVED_IDENTIFIER_FIXUP_751 + _RESERVED_IDENTIFIER_FIXUP_754;
        _RESERVED_IDENTIFIER_FIXUP_1256.y = _RESERVED_IDENTIFIER_FIXUP_760;
        float _RESERVED_IDENTIFIER_FIXUP_765 = (_RESERVED_IDENTIFIER_FIXUP_760 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1256.y = _RESERVED_IDENTIFIER_FIXUP_765;
        float _RESERVED_IDENTIFIER_FIXUP_772 = (_RESERVED_IDENTIFIER_FIXUP_611 * _RESERVED_IDENTIFIER_FIXUP_765) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1256.x = _RESERVED_IDENTIFIER_FIXUP_772;
        _RESERVED_IDENTIFIER_FIXUP_740.x = min(_RESERVED_IDENTIFIER_FIXUP_772, _RESERVED_IDENTIFIER_FIXUP_584.w);
        _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_1256;
        _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_740;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1254 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1254.x = _RESERVED_IDENTIFIER_FIXUP_584.w;
        _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_1243;
        _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_1254;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1333 = _RESERVED_IDENTIFIER_FIXUP_1526;
    _RESERVED_IDENTIFIER_FIXUP_1333.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_801 = _RESERVED_IDENTIFIER_FIXUP_598.xyz * _RESERVED_IDENTIFIER_FIXUP_1333.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1335 = _RESERVED_IDENTIFIER_FIXUP_598;
    _RESERVED_IDENTIFIER_FIXUP_1335.x = _RESERVED_IDENTIFIER_FIXUP_801.x;
    _RESERVED_IDENTIFIER_FIXUP_1335.y = _RESERVED_IDENTIFIER_FIXUP_801.y;
    _RESERVED_IDENTIFIER_FIXUP_1335.z = _RESERVED_IDENTIFIER_FIXUP_801.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_812 = _RESERVED_IDENTIFIER_FIXUP_1335.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1523).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1341 = _RESERVED_IDENTIFIER_FIXUP_1335;
    _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_812.x;
    _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_812.y;
    _RESERVED_IDENTIFIER_FIXUP_1341.z = _RESERVED_IDENTIFIER_FIXUP_812.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_823 = _RESERVED_IDENTIFIER_FIXUP_1341.xyz + _RESERVED_IDENTIFIER_FIXUP_1341.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1347.x = _RESERVED_IDENTIFIER_FIXUP_823.x;
    _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_823.y;
    _RESERVED_IDENTIFIER_FIXUP_1347.z = _RESERVED_IDENTIFIER_FIXUP_823.z;
    _RESERVED_IDENTIFIER_FIXUP_1333.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1333.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1333.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_848 = (_RESERVED_IDENTIFIER_FIXUP_1333.xyz * _RESERVED_IDENTIFIER_FIXUP_1525.xxx) + _RESERVED_IDENTIFIER_FIXUP_1347.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_1347;
    _RESERVED_IDENTIFIER_FIXUP_1359.x = _RESERVED_IDENTIFIER_FIXUP_848.x;
    _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_848.y;
    _RESERVED_IDENTIFIER_FIXUP_1359.z = _RESERVED_IDENTIFIER_FIXUP_848.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_861 = _RESERVED_IDENTIFIER_FIXUP_1359.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1365 = _RESERVED_IDENTIFIER_FIXUP_1359;
    _RESERVED_IDENTIFIER_FIXUP_1365.x = _RESERVED_IDENTIFIER_FIXUP_861.x;
    _RESERVED_IDENTIFIER_FIXUP_1365.y = _RESERVED_IDENTIFIER_FIXUP_861.y;
    _RESERVED_IDENTIFIER_FIXUP_1365.z = _RESERVED_IDENTIFIER_FIXUP_861.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_911 = OptTex0( texcoord0.xyz);
    vec2 param_11 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_915 = hdTex1(param_11);
    float _RESERVED_IDENTIFIER_FIXUP_919 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_915.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_915;
    _RESERVED_IDENTIFIER_FIXUP_1379.x = _RESERVED_IDENTIFIER_FIXUP_919;
    _RESERVED_IDENTIFIER_FIXUP_1379.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_919;
    vec4 _RESERVED_IDENTIFIER_FIXUP_929 = _RESERVED_IDENTIFIER_FIXUP_911 * _RESERVED_IDENTIFIER_FIXUP_1379.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1386 = _RESERVED_IDENTIFIER_FIXUP_1379;
    _RESERVED_IDENTIFIER_FIXUP_1386.x = _RESERVED_IDENTIFIER_FIXUP_605;
    float _RESERVED_IDENTIFIER_FIXUP_942 = clamp((_RESERVED_IDENTIFIER_FIXUP_605 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1386.x = _RESERVED_IDENTIFIER_FIXUP_942;
    float _RESERVED_IDENTIFIER_FIXUP_948 = ((-_RESERVED_IDENTIFIER_FIXUP_942) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1386.y = _RESERVED_IDENTIFIER_FIXUP_948;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1530;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1529;
    if (_RESERVED_IDENTIFIER_FIXUP_948 != (-_RESERVED_IDENTIFIER_FIXUP_948))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_960 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_1386;
        _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_960.x;
        _RESERVED_IDENTIFIER_FIXUP_1399.z = _RESERVED_IDENTIFIER_FIXUP_960.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_970 = _RESERVED_IDENTIFIER_FIXUP_1399.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1403;
        _RESERVED_IDENTIFIER_FIXUP_1403.x = _RESERVED_IDENTIFIER_FIXUP_970.x;
        _RESERVED_IDENTIFIER_FIXUP_1403.y = _RESERVED_IDENTIFIER_FIXUP_970.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_980 = _RESERVED_IDENTIFIER_FIXUP_1399.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1407;
        _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_980.x;
        _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_980.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_990 = _RESERVED_IDENTIFIER_FIXUP_1399.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1411;
        _RESERVED_IDENTIFIER_FIXUP_1411.x = _RESERVED_IDENTIFIER_FIXUP_990.x;
        _RESERVED_IDENTIFIER_FIXUP_1411.y = _RESERVED_IDENTIFIER_FIXUP_990.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1000 = _RESERVED_IDENTIFIER_FIXUP_1399.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1415;
        _RESERVED_IDENTIFIER_FIXUP_1415.x = _RESERVED_IDENTIFIER_FIXUP_1000.x;
        _RESERVED_IDENTIFIER_FIXUP_1415.y = _RESERVED_IDENTIFIER_FIXUP_1000.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1008 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1008.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1008.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1014 = hdLod5(param_12, param_13);
        _RESERVED_IDENTIFIER_FIXUP_1403.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1407.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1411.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1415.w = 0.0;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1403.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1014.y = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1407.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1014.z = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1411.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1014.w = hdLod5(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1071 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1014 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1415.xy;
        float param_21 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1077 = hdLod5(param_20, param_21).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_1077;
        float _RESERVED_IDENTIFIER_FIXUP_1082 = float(_RESERVED_IDENTIFIER_FIXUP_1077 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_1082;
        float _RESERVED_IDENTIFIER_FIXUP_1085 = dot(_RESERVED_IDENTIFIER_FIXUP_1071, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1399.z = _RESERVED_IDENTIFIER_FIXUP_1085;
        float _RESERVED_IDENTIFIER_FIXUP_1091 = _RESERVED_IDENTIFIER_FIXUP_1082 + _RESERVED_IDENTIFIER_FIXUP_1085;
        _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_1091;
        float _RESERVED_IDENTIFIER_FIXUP_1096 = (_RESERVED_IDENTIFIER_FIXUP_1091 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_1096;
        float _RESERVED_IDENTIFIER_FIXUP_1103 = (_RESERVED_IDENTIFIER_FIXUP_942 * _RESERVED_IDENTIFIER_FIXUP_1096) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1399.x = _RESERVED_IDENTIFIER_FIXUP_1103;
        _RESERVED_IDENTIFIER_FIXUP_1071.x = min(_RESERVED_IDENTIFIER_FIXUP_1103, _RESERVED_IDENTIFIER_FIXUP_915.w);
        _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_1399;
        _RESERVED_IDENTIFIER_FIXUP_1529 = _RESERVED_IDENTIFIER_FIXUP_1071;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1397 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1397.x = _RESERVED_IDENTIFIER_FIXUP_915.w;
        _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_1386;
        _RESERVED_IDENTIFIER_FIXUP_1529 = _RESERVED_IDENTIFIER_FIXUP_1397;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1119 = (_RESERVED_IDENTIFIER_FIXUP_1529.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_1530;
    _RESERVED_IDENTIFIER_FIXUP_1474.x = _RESERVED_IDENTIFIER_FIXUP_1119;
    _RESERVED_IDENTIFIER_FIXUP_1474.x = _RESERVED_IDENTIFIER_FIXUP_1119;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1132 = _RESERVED_IDENTIFIER_FIXUP_929.xyz * _RESERVED_IDENTIFIER_FIXUP_1474.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1480 = _RESERVED_IDENTIFIER_FIXUP_929;
    _RESERVED_IDENTIFIER_FIXUP_1480.x = _RESERVED_IDENTIFIER_FIXUP_1132.x;
    _RESERVED_IDENTIFIER_FIXUP_1480.y = _RESERVED_IDENTIFIER_FIXUP_1132.y;
    _RESERVED_IDENTIFIER_FIXUP_1480.z = _RESERVED_IDENTIFIER_FIXUP_1132.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1143 = _RESERVED_IDENTIFIER_FIXUP_1480.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1486 = _RESERVED_IDENTIFIER_FIXUP_1480;
    _RESERVED_IDENTIFIER_FIXUP_1486.x = _RESERVED_IDENTIFIER_FIXUP_1143.x;
    _RESERVED_IDENTIFIER_FIXUP_1486.y = _RESERVED_IDENTIFIER_FIXUP_1143.y;
    _RESERVED_IDENTIFIER_FIXUP_1486.z = _RESERVED_IDENTIFIER_FIXUP_1143.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_1486.xyz + _RESERVED_IDENTIFIER_FIXUP_1486.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_1486;
    _RESERVED_IDENTIFIER_FIXUP_1492.x = _RESERVED_IDENTIFIER_FIXUP_1154.x;
    _RESERVED_IDENTIFIER_FIXUP_1492.y = _RESERVED_IDENTIFIER_FIXUP_1154.y;
    _RESERVED_IDENTIFIER_FIXUP_1492.z = _RESERVED_IDENTIFIER_FIXUP_1154.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1165 = _RESERVED_IDENTIFIER_FIXUP_1492.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1474.x = _RESERVED_IDENTIFIER_FIXUP_1165.x;
    _RESERVED_IDENTIFIER_FIXUP_1474.y = _RESERVED_IDENTIFIER_FIXUP_1165.y;
    _RESERVED_IDENTIFIER_FIXUP_1474.z = _RESERVED_IDENTIFIER_FIXUP_1165.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1179 = (_RESERVED_IDENTIFIER_FIXUP_1474.xyz * _RESERVED_IDENTIFIER_FIXUP_1529.xxx) + _RESERVED_IDENTIFIER_FIXUP_1492.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_1492;
    _RESERVED_IDENTIFIER_FIXUP_1504.x = _RESERVED_IDENTIFIER_FIXUP_1179.x;
    _RESERVED_IDENTIFIER_FIXUP_1504.y = _RESERVED_IDENTIFIER_FIXUP_1179.y;
    _RESERVED_IDENTIFIER_FIXUP_1504.z = _RESERVED_IDENTIFIER_FIXUP_1179.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1192 = _RESERVED_IDENTIFIER_FIXUP_1504.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_1504;
    _RESERVED_IDENTIFIER_FIXUP_1510.x = _RESERVED_IDENTIFIER_FIXUP_1192.x;
    _RESERVED_IDENTIFIER_FIXUP_1510.y = _RESERVED_IDENTIFIER_FIXUP_1192.y;
    _RESERVED_IDENTIFIER_FIXUP_1510.z = _RESERVED_IDENTIFIER_FIXUP_1192.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1510.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_445 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_454;
    if (_RESERVED_IDENTIFIER_FIXUP_445)
    {
        _RESERVED_IDENTIFIER_FIXUP_454 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_454 = _RESERVED_IDENTIFIER_FIXUP_445;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_454)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_491 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1365.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_518 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1229;
    if (_RESERVED_IDENTIFIER_FIXUP_491 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1229 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_491), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_518);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1229 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_518);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1229;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1119);
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
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB115 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB115.x;
        r1.z = hdB115.y;
        vec2 hdB137 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB137.x;
        r2.y = hdB137.y;
        vec2 hdB148 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB148.x;
        r3.y = hdB148.y;
        vec2 hdB159 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB159.x;
        r4.y = hdB159.y;
        vec2 hdB170 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB170.x;
        r5.y = hdB170.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r6.xy;
        float param_2 = r6.w;
        r6 = hdLod5(param_1, param_2);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
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
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r1.w);
    }
    else
    {
        r2.x = r1.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB300 = r0;
    vec3 hdB304 = hdB300.xyz * r1.xxx;
    r0.x = hdB304.x;
    r0.y = hdB304.y;
    r0.z = hdB304.z;
    vec4 hdB311 = r0;
    vec3 hdB315 = hdB311.xyz * v0.xyz;
    r0.x = hdB315.x;
    r0.y = hdB315.y;
    r0.z = hdB315.z;
    vec4 hdB322 = r0;
    vec4 hdB324 = r0;
    vec3 hdB326 = hdB322.xyz + hdB324.xyz;
    r0.x = hdB326.x;
    r0.y = hdB326.y;
    r0.z = hdB326.z;
    vec3 hdB337 = r0.www * v1.xyz;
    r1.x = hdB337.x;
    r1.y = hdB337.y;
    r1.z = hdB337.z;
    vec4 hdB349 = r0;
    vec3 hdB351 = (r1.xyz * r2.xxx) + hdB349.xyz;
    r0.x = hdB351.x;
    r0.y = hdB351.y;
    r0.z = hdB351.z;
    vec4 hdB358 = r0;
    vec3 hdB365 = hdB358.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB365.x;
    r0.y = hdB365.y;
    r0.z = hdB365.z;
    vec3 hdB380 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB380.x;
    oC0.y = hdB380.y;
    oC0.z = hdB380.z;
    oC0.w = 1.0;
    bool hdB393 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB401;
    if (hdB393)
    {
        hdB401 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB401 = hdB393;
    }
    if (hdB401)
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
    bool _1353 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1363;
    if (_1353)
    {
        _1363 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1363 = _1353;
    }
    if (_1363)
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
        bool _1388 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1403;
        if (!_1388)
        {
            _1403 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1403 = _1388;
        }
        if (_1403)
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
