#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1592;
vec4 _RESERVED_IDENTIFIER_FIXUP_1593;


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
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _52 = hdOverride >= 0;
    bool _72;
    if (_52)
    {
        _72 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _72 = _52;
    }
    vec4 _73;
    if (_72)
    {
        _73 = vec4(float(hdOverride));
    }
    else
    {
        _73 = value;
    }
    return _73;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _90 = hdOverride >= 0;
    bool _99;
    if (_90)
    {
        _99 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _99 = _90;
    }
    vec4 _100;
    if (_99)
    {
        _100 = vec4(float(hdOverride));
    }
    else
    {
        _100 = value;
    }
    return _100;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _117 = hdOverride >= 0;
    bool _127;
    if (_117)
    {
        _127 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _127 = _117;
    }
    vec4 _128;
    if (_127)
    {
        _128 = vec4(float(hdOverride));
    }
    else
    {
        _128 = value;
    }
    return _128;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _145 = hdOverride >= 0;
    bool _155;
    if (_145)
    {
        _155 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _155 = _145;
    }
    vec4 _156;
    if (_155)
    {
        _156 = vec4(float(hdOverride));
    }
    else
    {
        _156 = value;
    }
    return _156;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _174 = hdOverride >= 0;
    bool _184;
    if (_174)
    {
        _184 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
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

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_606 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_610 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_614 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_618 = hdTex3(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_622 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_618.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_618;
    _RESERVED_IDENTIFIER_FIXUP_1305.z = _RESERVED_IDENTIFIER_FIXUP_622;
    _RESERVED_IDENTIFIER_FIXUP_1305.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_622;
    vec4 _RESERVED_IDENTIFIER_FIXUP_632 = _RESERVED_IDENTIFIER_FIXUP_610 * _RESERVED_IDENTIFIER_FIXUP_1305.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_644 = (_RESERVED_IDENTIFIER_FIXUP_614 * _RESERVED_IDENTIFIER_FIXUP_1305.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_606 * _RESERVED_IDENTIFIER_FIXUP_1305.zzzz) + _RESERVED_IDENTIFIER_FIXUP_632);
    float _RESERVED_IDENTIFIER_FIXUP_651 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_632;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_651;
    float _RESERVED_IDENTIFIER_FIXUP_657 = clamp((_RESERVED_IDENTIFIER_FIXUP_651 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_657;
    float _RESERVED_IDENTIFIER_FIXUP_663 = ((-_RESERVED_IDENTIFIER_FIXUP_657) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1312.y = _RESERVED_IDENTIFIER_FIXUP_663;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1595;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1594;
    if (_RESERVED_IDENTIFIER_FIXUP_663 != (-_RESERVED_IDENTIFIER_FIXUP_663))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_675 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1325 = _RESERVED_IDENTIFIER_FIXUP_1312;
        _RESERVED_IDENTIFIER_FIXUP_1325.y = _RESERVED_IDENTIFIER_FIXUP_675.x;
        _RESERVED_IDENTIFIER_FIXUP_1325.z = _RESERVED_IDENTIFIER_FIXUP_675.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_685 = _RESERVED_IDENTIFIER_FIXUP_1325.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1329;
        _RESERVED_IDENTIFIER_FIXUP_1329.x = _RESERVED_IDENTIFIER_FIXUP_685.x;
        _RESERVED_IDENTIFIER_FIXUP_1329.y = _RESERVED_IDENTIFIER_FIXUP_685.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_695 = _RESERVED_IDENTIFIER_FIXUP_1325.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1333;
        _RESERVED_IDENTIFIER_FIXUP_1333.x = _RESERVED_IDENTIFIER_FIXUP_695.x;
        _RESERVED_IDENTIFIER_FIXUP_1333.y = _RESERVED_IDENTIFIER_FIXUP_695.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_705 = _RESERVED_IDENTIFIER_FIXUP_1325.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1337;
        _RESERVED_IDENTIFIER_FIXUP_1337.x = _RESERVED_IDENTIFIER_FIXUP_705.x;
        _RESERVED_IDENTIFIER_FIXUP_1337.y = _RESERVED_IDENTIFIER_FIXUP_705.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_715 = _RESERVED_IDENTIFIER_FIXUP_1325.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1341;
        _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_715.x;
        _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_715.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_723 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_723.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_723.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_729 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_1329.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1333.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1337.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1341.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1329.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_729.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1333.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_729.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1337.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_729.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_786 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_729 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1341.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_792 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1325.y = _RESERVED_IDENTIFIER_FIXUP_792;
        float _RESERVED_IDENTIFIER_FIXUP_797 = float(_RESERVED_IDENTIFIER_FIXUP_792 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1325.y = _RESERVED_IDENTIFIER_FIXUP_797;
        float _RESERVED_IDENTIFIER_FIXUP_800 = dot(_RESERVED_IDENTIFIER_FIXUP_786, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1325.z = _RESERVED_IDENTIFIER_FIXUP_800;
        float _RESERVED_IDENTIFIER_FIXUP_806 = _RESERVED_IDENTIFIER_FIXUP_797 + _RESERVED_IDENTIFIER_FIXUP_800;
        _RESERVED_IDENTIFIER_FIXUP_1325.y = _RESERVED_IDENTIFIER_FIXUP_806;
        float _RESERVED_IDENTIFIER_FIXUP_811 = (_RESERVED_IDENTIFIER_FIXUP_806 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1325.y = _RESERVED_IDENTIFIER_FIXUP_811;
        float _RESERVED_IDENTIFIER_FIXUP_818 = (_RESERVED_IDENTIFIER_FIXUP_657 * _RESERVED_IDENTIFIER_FIXUP_811) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1325.x = _RESERVED_IDENTIFIER_FIXUP_818;
        _RESERVED_IDENTIFIER_FIXUP_786.x = min(_RESERVED_IDENTIFIER_FIXUP_818, _RESERVED_IDENTIFIER_FIXUP_618.w);
        _RESERVED_IDENTIFIER_FIXUP_1595 = _RESERVED_IDENTIFIER_FIXUP_1325;
        _RESERVED_IDENTIFIER_FIXUP_1594 = _RESERVED_IDENTIFIER_FIXUP_786;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_614.x = _RESERVED_IDENTIFIER_FIXUP_618.w;
        _RESERVED_IDENTIFIER_FIXUP_1595 = _RESERVED_IDENTIFIER_FIXUP_1312;
        _RESERVED_IDENTIFIER_FIXUP_1594 = _RESERVED_IDENTIFIER_FIXUP_614;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1402 = _RESERVED_IDENTIFIER_FIXUP_1595;
    _RESERVED_IDENTIFIER_FIXUP_1402.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_847 = _RESERVED_IDENTIFIER_FIXUP_644.xyz * _RESERVED_IDENTIFIER_FIXUP_1402.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1404 = _RESERVED_IDENTIFIER_FIXUP_644;
    _RESERVED_IDENTIFIER_FIXUP_1404.x = _RESERVED_IDENTIFIER_FIXUP_847.x;
    _RESERVED_IDENTIFIER_FIXUP_1404.y = _RESERVED_IDENTIFIER_FIXUP_847.y;
    _RESERVED_IDENTIFIER_FIXUP_1404.z = _RESERVED_IDENTIFIER_FIXUP_847.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_858 = _RESERVED_IDENTIFIER_FIXUP_1404.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1592).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_1404;
    _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_858.x;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_858.y;
    _RESERVED_IDENTIFIER_FIXUP_1410.z = _RESERVED_IDENTIFIER_FIXUP_858.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_869 = _RESERVED_IDENTIFIER_FIXUP_1410.xyz + _RESERVED_IDENTIFIER_FIXUP_1410.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1416 = _RESERVED_IDENTIFIER_FIXUP_1410;
    _RESERVED_IDENTIFIER_FIXUP_1416.x = _RESERVED_IDENTIFIER_FIXUP_869.x;
    _RESERVED_IDENTIFIER_FIXUP_1416.y = _RESERVED_IDENTIFIER_FIXUP_869.y;
    _RESERVED_IDENTIFIER_FIXUP_1416.z = _RESERVED_IDENTIFIER_FIXUP_869.z;
    _RESERVED_IDENTIFIER_FIXUP_1402.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1402.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1402.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_894 = (_RESERVED_IDENTIFIER_FIXUP_1402.xyz * _RESERVED_IDENTIFIER_FIXUP_1594.xxx) + _RESERVED_IDENTIFIER_FIXUP_1416.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1428 = _RESERVED_IDENTIFIER_FIXUP_1416;
    _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_894.x;
    _RESERVED_IDENTIFIER_FIXUP_1428.y = _RESERVED_IDENTIFIER_FIXUP_894.y;
    _RESERVED_IDENTIFIER_FIXUP_1428.z = _RESERVED_IDENTIFIER_FIXUP_894.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_907 = _RESERVED_IDENTIFIER_FIXUP_1428.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434 = _RESERVED_IDENTIFIER_FIXUP_1428;
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_907.x;
    _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_907.y;
    _RESERVED_IDENTIFIER_FIXUP_1434.z = _RESERVED_IDENTIFIER_FIXUP_907.z;
    vec2 param_14 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_960 = hdTex0(param_14);
    vec2 param_15 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_964 = hdTex1(param_15);
    vec2 param_16 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_968 = hdTex2(param_16);
    vec2 param_17 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_972 = hdTex3(param_17);
    float _RESERVED_IDENTIFIER_FIXUP_976 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_972.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_972;
    _RESERVED_IDENTIFIER_FIXUP_1448.z = _RESERVED_IDENTIFIER_FIXUP_976;
    _RESERVED_IDENTIFIER_FIXUP_1448.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_976;
    vec4 _RESERVED_IDENTIFIER_FIXUP_986 = _RESERVED_IDENTIFIER_FIXUP_964 * _RESERVED_IDENTIFIER_FIXUP_1448.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_998 = (_RESERVED_IDENTIFIER_FIXUP_968 * _RESERVED_IDENTIFIER_FIXUP_1448.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_960 * _RESERVED_IDENTIFIER_FIXUP_1448.zzzz) + _RESERVED_IDENTIFIER_FIXUP_986);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1455 = _RESERVED_IDENTIFIER_FIXUP_986;
    _RESERVED_IDENTIFIER_FIXUP_1455.x = _RESERVED_IDENTIFIER_FIXUP_651;
    float _RESERVED_IDENTIFIER_FIXUP_1011 = clamp((_RESERVED_IDENTIFIER_FIXUP_651 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1455.x = _RESERVED_IDENTIFIER_FIXUP_1011;
    float _RESERVED_IDENTIFIER_FIXUP_1017 = ((-_RESERVED_IDENTIFIER_FIXUP_1011) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1455.y = _RESERVED_IDENTIFIER_FIXUP_1017;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1599;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1598;
    if (_RESERVED_IDENTIFIER_FIXUP_1017 != (-_RESERVED_IDENTIFIER_FIXUP_1017))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1029 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1468 = _RESERVED_IDENTIFIER_FIXUP_1455;
        _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_1029.x;
        _RESERVED_IDENTIFIER_FIXUP_1468.z = _RESERVED_IDENTIFIER_FIXUP_1029.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1039 = _RESERVED_IDENTIFIER_FIXUP_1468.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1472;
        _RESERVED_IDENTIFIER_FIXUP_1472.x = _RESERVED_IDENTIFIER_FIXUP_1039.x;
        _RESERVED_IDENTIFIER_FIXUP_1472.y = _RESERVED_IDENTIFIER_FIXUP_1039.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1049 = _RESERVED_IDENTIFIER_FIXUP_1468.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1476;
        _RESERVED_IDENTIFIER_FIXUP_1476.x = _RESERVED_IDENTIFIER_FIXUP_1049.x;
        _RESERVED_IDENTIFIER_FIXUP_1476.y = _RESERVED_IDENTIFIER_FIXUP_1049.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1059 = _RESERVED_IDENTIFIER_FIXUP_1468.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1480;
        _RESERVED_IDENTIFIER_FIXUP_1480.x = _RESERVED_IDENTIFIER_FIXUP_1059.x;
        _RESERVED_IDENTIFIER_FIXUP_1480.y = _RESERVED_IDENTIFIER_FIXUP_1059.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1069 = _RESERVED_IDENTIFIER_FIXUP_1468.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1484;
        _RESERVED_IDENTIFIER_FIXUP_1484.x = _RESERVED_IDENTIFIER_FIXUP_1069.x;
        _RESERVED_IDENTIFIER_FIXUP_1484.y = _RESERVED_IDENTIFIER_FIXUP_1069.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1077 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1077.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1077.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1083 = hdLod5(param_18, param_19);
        _RESERVED_IDENTIFIER_FIXUP_1472.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1476.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1480.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1484.w = 0.0;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1472.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1083.y = hdLod5(param_20, param_21).x;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1476.xy;
        float param_23 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1083.z = hdLod5(param_22, param_23).x;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1480.xy;
        float param_25 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1083.w = hdLod5(param_24, param_25).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1140 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1083 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1484.xy;
        float param_27 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1146 = hdLod5(param_26, param_27).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_1146;
        float _RESERVED_IDENTIFIER_FIXUP_1151 = float(_RESERVED_IDENTIFIER_FIXUP_1146 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_1151;
        float _RESERVED_IDENTIFIER_FIXUP_1154 = dot(_RESERVED_IDENTIFIER_FIXUP_1140, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1468.z = _RESERVED_IDENTIFIER_FIXUP_1154;
        float _RESERVED_IDENTIFIER_FIXUP_1160 = _RESERVED_IDENTIFIER_FIXUP_1151 + _RESERVED_IDENTIFIER_FIXUP_1154;
        _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_1160;
        float _RESERVED_IDENTIFIER_FIXUP_1165 = (_RESERVED_IDENTIFIER_FIXUP_1160 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_1165;
        float _RESERVED_IDENTIFIER_FIXUP_1172 = (_RESERVED_IDENTIFIER_FIXUP_1011 * _RESERVED_IDENTIFIER_FIXUP_1165) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1468.x = _RESERVED_IDENTIFIER_FIXUP_1172;
        _RESERVED_IDENTIFIER_FIXUP_1140.x = min(_RESERVED_IDENTIFIER_FIXUP_1172, _RESERVED_IDENTIFIER_FIXUP_972.w);
        _RESERVED_IDENTIFIER_FIXUP_1599 = _RESERVED_IDENTIFIER_FIXUP_1468;
        _RESERVED_IDENTIFIER_FIXUP_1598 = _RESERVED_IDENTIFIER_FIXUP_1140;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_968.x = _RESERVED_IDENTIFIER_FIXUP_972.w;
        _RESERVED_IDENTIFIER_FIXUP_1599 = _RESERVED_IDENTIFIER_FIXUP_1455;
        _RESERVED_IDENTIFIER_FIXUP_1598 = _RESERVED_IDENTIFIER_FIXUP_968;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1188 = (_RESERVED_IDENTIFIER_FIXUP_1598.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_1599;
    _RESERVED_IDENTIFIER_FIXUP_1543.x = _RESERVED_IDENTIFIER_FIXUP_1188;
    _RESERVED_IDENTIFIER_FIXUP_1543.x = _RESERVED_IDENTIFIER_FIXUP_1188;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1201 = _RESERVED_IDENTIFIER_FIXUP_998.xyz * _RESERVED_IDENTIFIER_FIXUP_1543.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_998;
    _RESERVED_IDENTIFIER_FIXUP_1549.x = _RESERVED_IDENTIFIER_FIXUP_1201.x;
    _RESERVED_IDENTIFIER_FIXUP_1549.y = _RESERVED_IDENTIFIER_FIXUP_1201.y;
    _RESERVED_IDENTIFIER_FIXUP_1549.z = _RESERVED_IDENTIFIER_FIXUP_1201.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1212 = _RESERVED_IDENTIFIER_FIXUP_1549.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1555 = _RESERVED_IDENTIFIER_FIXUP_1549;
    _RESERVED_IDENTIFIER_FIXUP_1555.x = _RESERVED_IDENTIFIER_FIXUP_1212.x;
    _RESERVED_IDENTIFIER_FIXUP_1555.y = _RESERVED_IDENTIFIER_FIXUP_1212.y;
    _RESERVED_IDENTIFIER_FIXUP_1555.z = _RESERVED_IDENTIFIER_FIXUP_1212.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1555.xyz + _RESERVED_IDENTIFIER_FIXUP_1555.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1561 = _RESERVED_IDENTIFIER_FIXUP_1555;
    _RESERVED_IDENTIFIER_FIXUP_1561.x = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_1561.y = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_1561.z = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1234 = _RESERVED_IDENTIFIER_FIXUP_1561.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1543.x = _RESERVED_IDENTIFIER_FIXUP_1234.x;
    _RESERVED_IDENTIFIER_FIXUP_1543.y = _RESERVED_IDENTIFIER_FIXUP_1234.y;
    _RESERVED_IDENTIFIER_FIXUP_1543.z = _RESERVED_IDENTIFIER_FIXUP_1234.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1248 = (_RESERVED_IDENTIFIER_FIXUP_1543.xyz * _RESERVED_IDENTIFIER_FIXUP_1598.xxx) + _RESERVED_IDENTIFIER_FIXUP_1561.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1573 = _RESERVED_IDENTIFIER_FIXUP_1561;
    _RESERVED_IDENTIFIER_FIXUP_1573.x = _RESERVED_IDENTIFIER_FIXUP_1248.x;
    _RESERVED_IDENTIFIER_FIXUP_1573.y = _RESERVED_IDENTIFIER_FIXUP_1248.y;
    _RESERVED_IDENTIFIER_FIXUP_1573.z = _RESERVED_IDENTIFIER_FIXUP_1248.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_1573.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1579 = _RESERVED_IDENTIFIER_FIXUP_1573;
    _RESERVED_IDENTIFIER_FIXUP_1579.x = _RESERVED_IDENTIFIER_FIXUP_1261.x;
    _RESERVED_IDENTIFIER_FIXUP_1579.y = _RESERVED_IDENTIFIER_FIXUP_1261.y;
    _RESERVED_IDENTIFIER_FIXUP_1579.z = _RESERVED_IDENTIFIER_FIXUP_1261.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1579.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_468 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_477;
    if (_RESERVED_IDENTIFIER_FIXUP_468)
    {
        _RESERVED_IDENTIFIER_FIXUP_477 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_477 = _RESERVED_IDENTIFIER_FIXUP_468;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_477)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_514 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1434.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_541 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1298;
    if (_RESERVED_IDENTIFIER_FIXUP_514 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1298 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_514), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_541);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1298 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_541);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1298;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1188);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
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
        vec2 hdB139 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB139.x;
        r1.z = hdB139.y;
        vec2 hdB160 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB160.x;
        r2.y = hdB160.y;
        vec2 hdB171 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB171.x;
        r4.y = hdB171.y;
        vec2 hdB182 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB182.x;
        r5.y = hdB182.y;
        vec2 hdB193 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB193.x;
        r6.y = hdB193.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r7.xy;
        float param_5 = r7.w;
        r7 = hdLod5(param_4, param_5);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_8 = r4.xy;
        float param_9 = r4.w;
        r4 = hdLod5(param_8, param_9);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_10 = r5.xy;
        float param_11 = r5.w;
        r5 = hdLod5(param_10, param_11);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod5(param_12, param_13);
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
    vec4 hdB323 = r0;
    vec3 hdB327 = hdB323.xyz * r1.xxx;
    r0.x = hdB327.x;
    r0.y = hdB327.y;
    r0.z = hdB327.z;
    vec4 hdB334 = r0;
    vec3 hdB338 = hdB334.xyz * v0.xyz;
    r0.x = hdB338.x;
    r0.y = hdB338.y;
    r0.z = hdB338.z;
    vec4 hdB345 = r0;
    vec4 hdB347 = r0;
    vec3 hdB349 = hdB345.xyz + hdB347.xyz;
    r0.x = hdB349.x;
    r0.y = hdB349.y;
    r0.z = hdB349.z;
    vec3 hdB360 = r0.www * v1.xyz;
    r1.x = hdB360.x;
    r1.y = hdB360.y;
    r1.z = hdB360.z;
    vec4 hdB372 = r0;
    vec3 hdB374 = (r1.xyz * r2.xxx) + hdB372.xyz;
    r0.x = hdB374.x;
    r0.y = hdB374.y;
    r0.z = hdB374.z;
    vec4 hdB381 = r0;
    vec3 hdB388 = hdB381.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB388.x;
    r0.y = hdB388.y;
    r0.z = hdB388.z;
    vec3 hdB403 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB403.x;
    oC0.y = hdB403.y;
    oC0.z = hdB403.z;
    oC0.w = 1.0;
    bool hdB416 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB424;
    if (hdB416)
    {
        hdB424 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB424 = hdB416;
    }
    if (hdB424)
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
    bool _1507 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1517;
    if (_1507)
    {
        _1517 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1517 = _1507;
    }
    if (_1517)
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
        bool _1542 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1557;
        if (!_1542)
        {
            _1557 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1557 = _1542;
        }
        if (_1557)
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
