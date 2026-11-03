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
float _RESERVED_IDENTIFIER_FIXUP_1496;
vec4 _RESERVED_IDENTIFIER_FIXUP_1497;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_572 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_576 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_580 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_576.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1221 = _RESERVED_IDENTIFIER_FIXUP_576;
    _RESERVED_IDENTIFIER_FIXUP_1221.x = _RESERVED_IDENTIFIER_FIXUP_580;
    _RESERVED_IDENTIFIER_FIXUP_1221.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_580;
    vec4 _RESERVED_IDENTIFIER_FIXUP_590 = _RESERVED_IDENTIFIER_FIXUP_572 * _RESERVED_IDENTIFIER_FIXUP_1221.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_597 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_1221;
    _RESERVED_IDENTIFIER_FIXUP_1228.x = _RESERVED_IDENTIFIER_FIXUP_597;
    float _RESERVED_IDENTIFIER_FIXUP_603 = clamp((_RESERVED_IDENTIFIER_FIXUP_597 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1228.x = _RESERVED_IDENTIFIER_FIXUP_603;
    float _RESERVED_IDENTIFIER_FIXUP_609 = ((-_RESERVED_IDENTIFIER_FIXUP_603) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1228.y = _RESERVED_IDENTIFIER_FIXUP_609;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1499;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1498;
    if (_RESERVED_IDENTIFIER_FIXUP_609 != (-_RESERVED_IDENTIFIER_FIXUP_609))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_621 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_621.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_621.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_627 = hdLod5(param_1, param_2);
        vec2 _RESERVED_IDENTIFIER_FIXUP_631 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1242 = _RESERVED_IDENTIFIER_FIXUP_1228;
        _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_631.x;
        _RESERVED_IDENTIFIER_FIXUP_1242.z = _RESERVED_IDENTIFIER_FIXUP_631.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_1242.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1246;
        _RESERVED_IDENTIFIER_FIXUP_1246.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
        _RESERVED_IDENTIFIER_FIXUP_1246.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_648 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_652 = _RESERVED_IDENTIFIER_FIXUP_648.y;
        _RESERVED_IDENTIFIER_FIXUP_1246.w = _RESERVED_IDENTIFIER_FIXUP_652;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1246.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_652;
        float _RESERVED_IDENTIFIER_FIXUP_663 = _RESERVED_IDENTIFIER_FIXUP_627.x + hdLod5(param_3, param_4).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_627;
        _RESERVED_IDENTIFIER_FIXUP_1257.x = _RESERVED_IDENTIFIER_FIXUP_663;
        vec2 _RESERVED_IDENTIFIER_FIXUP_670 = _RESERVED_IDENTIFIER_FIXUP_1242.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1259;
        _RESERVED_IDENTIFIER_FIXUP_1259.x = _RESERVED_IDENTIFIER_FIXUP_670.x;
        _RESERVED_IDENTIFIER_FIXUP_1259.y = _RESERVED_IDENTIFIER_FIXUP_670.y;
        _RESERVED_IDENTIFIER_FIXUP_1259.w = _RESERVED_IDENTIFIER_FIXUP_652;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1259.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_652;
        float _RESERVED_IDENTIFIER_FIXUP_692 = _RESERVED_IDENTIFIER_FIXUP_663 + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_1257.x = _RESERVED_IDENTIFIER_FIXUP_692;
        vec2 _RESERVED_IDENTIFIER_FIXUP_699 = _RESERVED_IDENTIFIER_FIXUP_1242.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1272;
        _RESERVED_IDENTIFIER_FIXUP_1272.x = _RESERVED_IDENTIFIER_FIXUP_699.x;
        _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_699.y;
        _RESERVED_IDENTIFIER_FIXUP_1272.w = _RESERVED_IDENTIFIER_FIXUP_652;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1272.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_652;
        float _RESERVED_IDENTIFIER_FIXUP_721 = _RESERVED_IDENTIFIER_FIXUP_692 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_1257.x = _RESERVED_IDENTIFIER_FIXUP_721;
        vec2 _RESERVED_IDENTIFIER_FIXUP_728 = _RESERVED_IDENTIFIER_FIXUP_1242.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1285;
        _RESERVED_IDENTIFIER_FIXUP_1285.x = _RESERVED_IDENTIFIER_FIXUP_728.x;
        _RESERVED_IDENTIFIER_FIXUP_1285.y = _RESERVED_IDENTIFIER_FIXUP_728.y;
        _RESERVED_IDENTIFIER_FIXUP_1285.w = _RESERVED_IDENTIFIER_FIXUP_652;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1285.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_652;
        float _RESERVED_IDENTIFIER_FIXUP_750 = _RESERVED_IDENTIFIER_FIXUP_721 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_750;
        float _RESERVED_IDENTIFIER_FIXUP_755 = (_RESERVED_IDENTIFIER_FIXUP_750 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_755;
        float _RESERVED_IDENTIFIER_FIXUP_762 = (_RESERVED_IDENTIFIER_FIXUP_603 * _RESERVED_IDENTIFIER_FIXUP_755) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1242.x = _RESERVED_IDENTIFIER_FIXUP_762;
        _RESERVED_IDENTIFIER_FIXUP_1257.x = min(_RESERVED_IDENTIFIER_FIXUP_762, _RESERVED_IDENTIFIER_FIXUP_576.w);
        _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_1242;
        _RESERVED_IDENTIFIER_FIXUP_1498 = _RESERVED_IDENTIFIER_FIXUP_1257;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1239 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1239.x = _RESERVED_IDENTIFIER_FIXUP_576.w;
        _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_1228;
        _RESERVED_IDENTIFIER_FIXUP_1498 = _RESERVED_IDENTIFIER_FIXUP_1239;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1499;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_791 = _RESERVED_IDENTIFIER_FIXUP_590.xyz * _RESERVED_IDENTIFIER_FIXUP_1312.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1314 = _RESERVED_IDENTIFIER_FIXUP_590;
    _RESERVED_IDENTIFIER_FIXUP_1314.x = _RESERVED_IDENTIFIER_FIXUP_791.x;
    _RESERVED_IDENTIFIER_FIXUP_1314.y = _RESERVED_IDENTIFIER_FIXUP_791.y;
    _RESERVED_IDENTIFIER_FIXUP_1314.z = _RESERVED_IDENTIFIER_FIXUP_791.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_802 = _RESERVED_IDENTIFIER_FIXUP_1314.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1496).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1320 = _RESERVED_IDENTIFIER_FIXUP_1314;
    _RESERVED_IDENTIFIER_FIXUP_1320.x = _RESERVED_IDENTIFIER_FIXUP_802.x;
    _RESERVED_IDENTIFIER_FIXUP_1320.y = _RESERVED_IDENTIFIER_FIXUP_802.y;
    _RESERVED_IDENTIFIER_FIXUP_1320.z = _RESERVED_IDENTIFIER_FIXUP_802.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_813 = _RESERVED_IDENTIFIER_FIXUP_1320.xyz + _RESERVED_IDENTIFIER_FIXUP_1320.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1326 = _RESERVED_IDENTIFIER_FIXUP_1320;
    _RESERVED_IDENTIFIER_FIXUP_1326.x = _RESERVED_IDENTIFIER_FIXUP_813.x;
    _RESERVED_IDENTIFIER_FIXUP_1326.y = _RESERVED_IDENTIFIER_FIXUP_813.y;
    _RESERVED_IDENTIFIER_FIXUP_1326.z = _RESERVED_IDENTIFIER_FIXUP_813.z;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1312.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1312.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_838 = (_RESERVED_IDENTIFIER_FIXUP_1312.xyz * _RESERVED_IDENTIFIER_FIXUP_1498.xxx) + _RESERVED_IDENTIFIER_FIXUP_1326.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_1326;
    _RESERVED_IDENTIFIER_FIXUP_1338.x = _RESERVED_IDENTIFIER_FIXUP_838.x;
    _RESERVED_IDENTIFIER_FIXUP_1338.y = _RESERVED_IDENTIFIER_FIXUP_838.y;
    _RESERVED_IDENTIFIER_FIXUP_1338.z = _RESERVED_IDENTIFIER_FIXUP_838.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_851 = _RESERVED_IDENTIFIER_FIXUP_1338.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_851.x;
    _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_851.y;
    _RESERVED_IDENTIFIER_FIXUP_1344.z = _RESERVED_IDENTIFIER_FIXUP_851.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_898 = OptTex0( texcoord0.xyz);
    vec2 param_11 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_902 = hdTex1(param_11);
    float _RESERVED_IDENTIFIER_FIXUP_906 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_902.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1358 = _RESERVED_IDENTIFIER_FIXUP_902;
    _RESERVED_IDENTIFIER_FIXUP_1358.x = _RESERVED_IDENTIFIER_FIXUP_906;
    _RESERVED_IDENTIFIER_FIXUP_1358.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_906;
    vec4 _RESERVED_IDENTIFIER_FIXUP_916 = _RESERVED_IDENTIFIER_FIXUP_898 * _RESERVED_IDENTIFIER_FIXUP_1358.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1365 = _RESERVED_IDENTIFIER_FIXUP_1358;
    _RESERVED_IDENTIFIER_FIXUP_1365.x = _RESERVED_IDENTIFIER_FIXUP_597;
    float _RESERVED_IDENTIFIER_FIXUP_929 = clamp((_RESERVED_IDENTIFIER_FIXUP_597 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1365.x = _RESERVED_IDENTIFIER_FIXUP_929;
    float _RESERVED_IDENTIFIER_FIXUP_935 = ((-_RESERVED_IDENTIFIER_FIXUP_929) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1365.y = _RESERVED_IDENTIFIER_FIXUP_935;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1503;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1502;
    if (_RESERVED_IDENTIFIER_FIXUP_935 != (-_RESERVED_IDENTIFIER_FIXUP_935))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_947 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_947.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_947.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_953 = hdLod5(param_12, param_13);
        vec2 _RESERVED_IDENTIFIER_FIXUP_957 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_1365;
        _RESERVED_IDENTIFIER_FIXUP_1379.y = _RESERVED_IDENTIFIER_FIXUP_957.x;
        _RESERVED_IDENTIFIER_FIXUP_1379.z = _RESERVED_IDENTIFIER_FIXUP_957.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_967 = _RESERVED_IDENTIFIER_FIXUP_1379.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1383;
        _RESERVED_IDENTIFIER_FIXUP_1383.x = _RESERVED_IDENTIFIER_FIXUP_967.x;
        _RESERVED_IDENTIFIER_FIXUP_1383.y = _RESERVED_IDENTIFIER_FIXUP_967.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_974 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_978 = _RESERVED_IDENTIFIER_FIXUP_974.y;
        _RESERVED_IDENTIFIER_FIXUP_1383.w = _RESERVED_IDENTIFIER_FIXUP_978;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1383.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_978;
        float _RESERVED_IDENTIFIER_FIXUP_989 = _RESERVED_IDENTIFIER_FIXUP_953.x + hdLod5(param_14, param_15).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1394 = _RESERVED_IDENTIFIER_FIXUP_953;
        _RESERVED_IDENTIFIER_FIXUP_1394.x = _RESERVED_IDENTIFIER_FIXUP_989;
        vec2 _RESERVED_IDENTIFIER_FIXUP_996 = _RESERVED_IDENTIFIER_FIXUP_1379.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1396;
        _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_996.x;
        _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_996.y;
        _RESERVED_IDENTIFIER_FIXUP_1396.w = _RESERVED_IDENTIFIER_FIXUP_978;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1396.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_978;
        float _RESERVED_IDENTIFIER_FIXUP_1018 = _RESERVED_IDENTIFIER_FIXUP_989 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_1394.x = _RESERVED_IDENTIFIER_FIXUP_1018;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1025 = _RESERVED_IDENTIFIER_FIXUP_1379.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1409;
        _RESERVED_IDENTIFIER_FIXUP_1409.x = _RESERVED_IDENTIFIER_FIXUP_1025.x;
        _RESERVED_IDENTIFIER_FIXUP_1409.y = _RESERVED_IDENTIFIER_FIXUP_1025.y;
        _RESERVED_IDENTIFIER_FIXUP_1409.w = _RESERVED_IDENTIFIER_FIXUP_978;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1409.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_978;
        float _RESERVED_IDENTIFIER_FIXUP_1047 = _RESERVED_IDENTIFIER_FIXUP_1018 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_1394.x = _RESERVED_IDENTIFIER_FIXUP_1047;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1054 = _RESERVED_IDENTIFIER_FIXUP_1379.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1422;
        _RESERVED_IDENTIFIER_FIXUP_1422.x = _RESERVED_IDENTIFIER_FIXUP_1054.x;
        _RESERVED_IDENTIFIER_FIXUP_1422.y = _RESERVED_IDENTIFIER_FIXUP_1054.y;
        _RESERVED_IDENTIFIER_FIXUP_1422.w = _RESERVED_IDENTIFIER_FIXUP_978;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1422.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_978;
        float _RESERVED_IDENTIFIER_FIXUP_1076 = _RESERVED_IDENTIFIER_FIXUP_1047 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_1379.y = _RESERVED_IDENTIFIER_FIXUP_1076;
        float _RESERVED_IDENTIFIER_FIXUP_1081 = (_RESERVED_IDENTIFIER_FIXUP_1076 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1379.y = _RESERVED_IDENTIFIER_FIXUP_1081;
        float _RESERVED_IDENTIFIER_FIXUP_1088 = (_RESERVED_IDENTIFIER_FIXUP_929 * _RESERVED_IDENTIFIER_FIXUP_1081) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1379.x = _RESERVED_IDENTIFIER_FIXUP_1088;
        _RESERVED_IDENTIFIER_FIXUP_1394.x = min(_RESERVED_IDENTIFIER_FIXUP_1088, _RESERVED_IDENTIFIER_FIXUP_902.w);
        _RESERVED_IDENTIFIER_FIXUP_1503 = _RESERVED_IDENTIFIER_FIXUP_1379;
        _RESERVED_IDENTIFIER_FIXUP_1502 = _RESERVED_IDENTIFIER_FIXUP_1394;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1376 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1376.x = _RESERVED_IDENTIFIER_FIXUP_902.w;
        _RESERVED_IDENTIFIER_FIXUP_1503 = _RESERVED_IDENTIFIER_FIXUP_1365;
        _RESERVED_IDENTIFIER_FIXUP_1502 = _RESERVED_IDENTIFIER_FIXUP_1376;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1104 = (_RESERVED_IDENTIFIER_FIXUP_1502.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447 = _RESERVED_IDENTIFIER_FIXUP_1503;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_1104;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_1104;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_916.xyz * _RESERVED_IDENTIFIER_FIXUP_1447.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1453 = _RESERVED_IDENTIFIER_FIXUP_916;
    _RESERVED_IDENTIFIER_FIXUP_1453.x = _RESERVED_IDENTIFIER_FIXUP_1117.x;
    _RESERVED_IDENTIFIER_FIXUP_1453.y = _RESERVED_IDENTIFIER_FIXUP_1117.y;
    _RESERVED_IDENTIFIER_FIXUP_1453.z = _RESERVED_IDENTIFIER_FIXUP_1117.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1128 = _RESERVED_IDENTIFIER_FIXUP_1453.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1459 = _RESERVED_IDENTIFIER_FIXUP_1453;
    _RESERVED_IDENTIFIER_FIXUP_1459.x = _RESERVED_IDENTIFIER_FIXUP_1128.x;
    _RESERVED_IDENTIFIER_FIXUP_1459.y = _RESERVED_IDENTIFIER_FIXUP_1128.y;
    _RESERVED_IDENTIFIER_FIXUP_1459.z = _RESERVED_IDENTIFIER_FIXUP_1128.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1459.xyz + _RESERVED_IDENTIFIER_FIXUP_1459.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1465 = _RESERVED_IDENTIFIER_FIXUP_1459;
    _RESERVED_IDENTIFIER_FIXUP_1465.x = _RESERVED_IDENTIFIER_FIXUP_1139.x;
    _RESERVED_IDENTIFIER_FIXUP_1465.y = _RESERVED_IDENTIFIER_FIXUP_1139.y;
    _RESERVED_IDENTIFIER_FIXUP_1465.z = _RESERVED_IDENTIFIER_FIXUP_1139.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1150 = _RESERVED_IDENTIFIER_FIXUP_1465.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_1150.x;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_1150.y;
    _RESERVED_IDENTIFIER_FIXUP_1447.z = _RESERVED_IDENTIFIER_FIXUP_1150.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1164 = (_RESERVED_IDENTIFIER_FIXUP_1447.xyz * _RESERVED_IDENTIFIER_FIXUP_1502.xxx) + _RESERVED_IDENTIFIER_FIXUP_1465.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_1465;
    _RESERVED_IDENTIFIER_FIXUP_1477.x = _RESERVED_IDENTIFIER_FIXUP_1164.x;
    _RESERVED_IDENTIFIER_FIXUP_1477.y = _RESERVED_IDENTIFIER_FIXUP_1164.y;
    _RESERVED_IDENTIFIER_FIXUP_1477.z = _RESERVED_IDENTIFIER_FIXUP_1164.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1477.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1483 = _RESERVED_IDENTIFIER_FIXUP_1477;
    _RESERVED_IDENTIFIER_FIXUP_1483.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
    _RESERVED_IDENTIFIER_FIXUP_1483.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
    _RESERVED_IDENTIFIER_FIXUP_1483.z = _RESERVED_IDENTIFIER_FIXUP_1177.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1483.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_439 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_448;
    if (_RESERVED_IDENTIFIER_FIXUP_439)
    {
        _RESERVED_IDENTIFIER_FIXUP_448 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_448 = _RESERVED_IDENTIFIER_FIXUP_439;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_448)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_485 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1344.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_512 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1214;
    if (_RESERVED_IDENTIFIER_FIXUP_485 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1214 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_485), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_512);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1214 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_512);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1214;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1104);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
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
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r2.xy;
        float param_2 = r2.w;
        r2 = hdLod5(param_1, param_2);
        vec2 hdB126 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB126.x;
        r1.z = hdB126.y;
        vec2 hdB148 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB148.x;
        r3.y = hdB148.y;
        vec2 hdB156 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB156.x;
        r3.w = hdB156.y;
        vec2 param_3 = r3.xy;
        float param_4 = r3.w;
        r3 = hdLod5(param_3, param_4);
        r2.x += r3.x;
        vec2 hdB179 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB179.x;
        r3.y = hdB179.y;
        vec2 hdB186 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB186.x;
        r3.w = hdB186.y;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r2.x += r3.x;
        vec2 hdB209 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB209.x;
        r3.y = hdB209.y;
        vec2 hdB216 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB216.x;
        r3.w = hdB216.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r2.x += r3.x;
        vec2 hdB239 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB239.x;
        r3.y = hdB239.y;
        vec2 hdB246 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB246.x;
        r3.w = hdB246.y;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
        r1.y = r2.x + r3.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r1.w);
    }
    else
    {
        r2.x = r1.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB294 = r0;
    vec3 hdB298 = hdB294.xyz * r1.xxx;
    r0.x = hdB298.x;
    r0.y = hdB298.y;
    r0.z = hdB298.z;
    vec4 hdB305 = r0;
    vec3 hdB309 = hdB305.xyz * v0.xyz;
    r0.x = hdB309.x;
    r0.y = hdB309.y;
    r0.z = hdB309.z;
    vec4 hdB316 = r0;
    vec4 hdB318 = r0;
    vec3 hdB320 = hdB316.xyz + hdB318.xyz;
    r0.x = hdB320.x;
    r0.y = hdB320.y;
    r0.z = hdB320.z;
    vec3 hdB331 = r0.www * v1.xyz;
    r1.x = hdB331.x;
    r1.y = hdB331.y;
    r1.z = hdB331.z;
    vec4 hdB343 = r0;
    vec3 hdB345 = (r1.xyz * r2.xxx) + hdB343.xyz;
    r0.x = hdB345.x;
    r0.y = hdB345.y;
    r0.z = hdB345.z;
    vec4 hdB352 = r0;
    vec3 hdB359 = hdB352.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB359.x;
    r0.y = hdB359.y;
    r0.z = hdB359.z;
    vec3 hdB374 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB374.x;
    oC0.y = hdB374.y;
    oC0.z = hdB374.z;
    oC0.w = 1.0;
    bool hdB387 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB395;
    if (hdB387)
    {
        hdB395 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB395 = hdB387;
    }
    if (hdB395)
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
    bool _1378 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1388;
    if (_1378)
    {
        _1388 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1388 = _1378;
    }
    if (_1388)
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
        bool _1413 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1428;
        if (!_1413)
        {
            _1428 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1428 = _1413;
        }
        if (_1428)
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
