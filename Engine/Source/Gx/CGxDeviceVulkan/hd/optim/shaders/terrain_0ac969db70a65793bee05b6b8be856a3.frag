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
float _RESERVED_IDENTIFIER_FIXUP_1507;
vec4 _RESERVED_IDENTIFIER_FIXUP_1508;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_581 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_585 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_589 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_593 = hdTex3(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_603 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_581, _RESERVED_IDENTIFIER_FIXUP_585, _RESERVED_IDENTIFIER_FIXUP_593.xxxx), _RESERVED_IDENTIFIER_FIXUP_589, _RESERVED_IDENTIFIER_FIXUP_593.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_610 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1244 = _RESERVED_IDENTIFIER_FIXUP_585;
    _RESERVED_IDENTIFIER_FIXUP_1244.x = _RESERVED_IDENTIFIER_FIXUP_610;
    float _RESERVED_IDENTIFIER_FIXUP_616 = clamp((_RESERVED_IDENTIFIER_FIXUP_610 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1244.x = _RESERVED_IDENTIFIER_FIXUP_616;
    float _RESERVED_IDENTIFIER_FIXUP_622 = ((-_RESERVED_IDENTIFIER_FIXUP_616) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1244.y = _RESERVED_IDENTIFIER_FIXUP_622;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1510;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1509;
    if (_RESERVED_IDENTIFIER_FIXUP_622 != (-_RESERVED_IDENTIFIER_FIXUP_622))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_634 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_644 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_646 = _RESERVED_IDENTIFIER_FIXUP_644.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_1244;
        _RESERVED_IDENTIFIER_FIXUP_1258.y = _RESERVED_IDENTIFIER_FIXUP_646;
        _RESERVED_IDENTIFIER_FIXUP_1258.z = _RESERVED_IDENTIFIER_FIXUP_644.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_654 = _RESERVED_IDENTIFIER_FIXUP_1258.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1262;
        _RESERVED_IDENTIFIER_FIXUP_1262.x = _RESERVED_IDENTIFIER_FIXUP_654.x;
        _RESERVED_IDENTIFIER_FIXUP_1262.y = _RESERVED_IDENTIFIER_FIXUP_654.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_661 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_665 = _RESERVED_IDENTIFIER_FIXUP_661.y;
        _RESERVED_IDENTIFIER_FIXUP_1262.w = _RESERVED_IDENTIFIER_FIXUP_665;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_634.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_634.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1262.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_665;
        float _RESERVED_IDENTIFIER_FIXUP_676 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1517 = vec4(_RESERVED_IDENTIFIER_FIXUP_616, _RESERVED_IDENTIFIER_FIXUP_646, _RESERVED_IDENTIFIER_FIXUP_644.y, _RESERVED_IDENTIFIER_FIXUP_676);
        vec2 _RESERVED_IDENTIFIER_FIXUP_683 = _RESERVED_IDENTIFIER_FIXUP_1517.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1275;
        _RESERVED_IDENTIFIER_FIXUP_1275.x = _RESERVED_IDENTIFIER_FIXUP_683.x;
        _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_683.y;
        _RESERVED_IDENTIFIER_FIXUP_1275.w = _RESERVED_IDENTIFIER_FIXUP_665;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1275.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_665;
        float _RESERVED_IDENTIFIER_FIXUP_705 = _RESERVED_IDENTIFIER_FIXUP_676 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1517.w = _RESERVED_IDENTIFIER_FIXUP_705;
        vec2 _RESERVED_IDENTIFIER_FIXUP_712 = _RESERVED_IDENTIFIER_FIXUP_1517.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1288;
        _RESERVED_IDENTIFIER_FIXUP_1288.x = _RESERVED_IDENTIFIER_FIXUP_712.x;
        _RESERVED_IDENTIFIER_FIXUP_1288.y = _RESERVED_IDENTIFIER_FIXUP_712.y;
        _RESERVED_IDENTIFIER_FIXUP_1288.w = _RESERVED_IDENTIFIER_FIXUP_665;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1288.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_665;
        float _RESERVED_IDENTIFIER_FIXUP_734 = _RESERVED_IDENTIFIER_FIXUP_705 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1517.w = _RESERVED_IDENTIFIER_FIXUP_734;
        vec2 _RESERVED_IDENTIFIER_FIXUP_741 = _RESERVED_IDENTIFIER_FIXUP_1517.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1301;
        _RESERVED_IDENTIFIER_FIXUP_1301.x = _RESERVED_IDENTIFIER_FIXUP_741.x;
        _RESERVED_IDENTIFIER_FIXUP_1301.y = _RESERVED_IDENTIFIER_FIXUP_741.y;
        _RESERVED_IDENTIFIER_FIXUP_1301.w = _RESERVED_IDENTIFIER_FIXUP_665;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1301.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_665;
        vec4 _RESERVED_IDENTIFIER_FIXUP_758 = hdLod5(param_12, param_13);
        float _RESERVED_IDENTIFIER_FIXUP_763 = _RESERVED_IDENTIFIER_FIXUP_734 + _RESERVED_IDENTIFIER_FIXUP_758.x;
        _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_763;
        float _RESERVED_IDENTIFIER_FIXUP_768 = (_RESERVED_IDENTIFIER_FIXUP_763 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_768;
        float _RESERVED_IDENTIFIER_FIXUP_775 = (_RESERVED_IDENTIFIER_FIXUP_616 * _RESERVED_IDENTIFIER_FIXUP_768) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1517.x = _RESERVED_IDENTIFIER_FIXUP_775;
        _RESERVED_IDENTIFIER_FIXUP_758.x = min(_RESERVED_IDENTIFIER_FIXUP_775, _RESERVED_IDENTIFIER_FIXUP_593.w);
        _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_1517;
        _RESERVED_IDENTIFIER_FIXUP_1509 = _RESERVED_IDENTIFIER_FIXUP_758;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_589.x = _RESERVED_IDENTIFIER_FIXUP_593.w;
        _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_1244;
        _RESERVED_IDENTIFIER_FIXUP_1509 = _RESERVED_IDENTIFIER_FIXUP_589;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1328 = _RESERVED_IDENTIFIER_FIXUP_1510;
    _RESERVED_IDENTIFIER_FIXUP_1328.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_804 = _RESERVED_IDENTIFIER_FIXUP_603.xyz * _RESERVED_IDENTIFIER_FIXUP_1328.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_603;
    _RESERVED_IDENTIFIER_FIXUP_1330.x = _RESERVED_IDENTIFIER_FIXUP_804.x;
    _RESERVED_IDENTIFIER_FIXUP_1330.y = _RESERVED_IDENTIFIER_FIXUP_804.y;
    _RESERVED_IDENTIFIER_FIXUP_1330.z = _RESERVED_IDENTIFIER_FIXUP_804.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_815 = _RESERVED_IDENTIFIER_FIXUP_1330.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1507).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1336 = _RESERVED_IDENTIFIER_FIXUP_1330;
    _RESERVED_IDENTIFIER_FIXUP_1336.x = _RESERVED_IDENTIFIER_FIXUP_815.x;
    _RESERVED_IDENTIFIER_FIXUP_1336.y = _RESERVED_IDENTIFIER_FIXUP_815.y;
    _RESERVED_IDENTIFIER_FIXUP_1336.z = _RESERVED_IDENTIFIER_FIXUP_815.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_826 = _RESERVED_IDENTIFIER_FIXUP_1336.xyz + _RESERVED_IDENTIFIER_FIXUP_1336.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_1336;
    _RESERVED_IDENTIFIER_FIXUP_1342.x = _RESERVED_IDENTIFIER_FIXUP_826.x;
    _RESERVED_IDENTIFIER_FIXUP_1342.y = _RESERVED_IDENTIFIER_FIXUP_826.y;
    _RESERVED_IDENTIFIER_FIXUP_1342.z = _RESERVED_IDENTIFIER_FIXUP_826.z;
    _RESERVED_IDENTIFIER_FIXUP_1328.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1328.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1328.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_851 = (_RESERVED_IDENTIFIER_FIXUP_1328.xyz * _RESERVED_IDENTIFIER_FIXUP_1509.xxx) + _RESERVED_IDENTIFIER_FIXUP_1342.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_1342;
    _RESERVED_IDENTIFIER_FIXUP_1354.x = _RESERVED_IDENTIFIER_FIXUP_851.x;
    _RESERVED_IDENTIFIER_FIXUP_1354.y = _RESERVED_IDENTIFIER_FIXUP_851.y;
    _RESERVED_IDENTIFIER_FIXUP_1354.z = _RESERVED_IDENTIFIER_FIXUP_851.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_864 = _RESERVED_IDENTIFIER_FIXUP_1354.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1360 = _RESERVED_IDENTIFIER_FIXUP_1354;
    _RESERVED_IDENTIFIER_FIXUP_1360.x = _RESERVED_IDENTIFIER_FIXUP_864.x;
    _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_864.y;
    _RESERVED_IDENTIFIER_FIXUP_1360.z = _RESERVED_IDENTIFIER_FIXUP_864.z;
    vec2 param_14 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_914 = hdTex0(param_14);
    vec2 param_15 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_918 = hdTex1(param_15);
    vec2 param_16 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_922 = hdTex2(param_16);
    vec2 param_17 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_926 = hdTex3(param_17);
    vec4 _RESERVED_IDENTIFIER_FIXUP_936 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_914, _RESERVED_IDENTIFIER_FIXUP_918, _RESERVED_IDENTIFIER_FIXUP_926.xxxx), _RESERVED_IDENTIFIER_FIXUP_922, _RESERVED_IDENTIFIER_FIXUP_926.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_918;
    _RESERVED_IDENTIFIER_FIXUP_1376.x = _RESERVED_IDENTIFIER_FIXUP_610;
    float _RESERVED_IDENTIFIER_FIXUP_949 = clamp((_RESERVED_IDENTIFIER_FIXUP_610 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1376.x = _RESERVED_IDENTIFIER_FIXUP_949;
    float _RESERVED_IDENTIFIER_FIXUP_955 = ((-_RESERVED_IDENTIFIER_FIXUP_949) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1376.y = _RESERVED_IDENTIFIER_FIXUP_955;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1514;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1513;
    if (_RESERVED_IDENTIFIER_FIXUP_955 != (-_RESERVED_IDENTIFIER_FIXUP_955))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_967 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_977 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_979 = _RESERVED_IDENTIFIER_FIXUP_977.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1390 = _RESERVED_IDENTIFIER_FIXUP_1376;
        _RESERVED_IDENTIFIER_FIXUP_1390.y = _RESERVED_IDENTIFIER_FIXUP_979;
        _RESERVED_IDENTIFIER_FIXUP_1390.z = _RESERVED_IDENTIFIER_FIXUP_977.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_987 = _RESERVED_IDENTIFIER_FIXUP_1390.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1394;
        _RESERVED_IDENTIFIER_FIXUP_1394.x = _RESERVED_IDENTIFIER_FIXUP_987.x;
        _RESERVED_IDENTIFIER_FIXUP_1394.y = _RESERVED_IDENTIFIER_FIXUP_987.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_994 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_998 = _RESERVED_IDENTIFIER_FIXUP_994.y;
        _RESERVED_IDENTIFIER_FIXUP_1394.w = _RESERVED_IDENTIFIER_FIXUP_998;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_967.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_967.w;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1394.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_998;
        float _RESERVED_IDENTIFIER_FIXUP_1009 = hdLod5(param_18, param_19).x + hdLod5(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1519 = vec4(_RESERVED_IDENTIFIER_FIXUP_949, _RESERVED_IDENTIFIER_FIXUP_979, _RESERVED_IDENTIFIER_FIXUP_977.y, _RESERVED_IDENTIFIER_FIXUP_1009);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1016 = _RESERVED_IDENTIFIER_FIXUP_1519.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1407;
        _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_1016.x;
        _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_1016.y;
        _RESERVED_IDENTIFIER_FIXUP_1407.w = _RESERVED_IDENTIFIER_FIXUP_998;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1407.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_998;
        float _RESERVED_IDENTIFIER_FIXUP_1038 = _RESERVED_IDENTIFIER_FIXUP_1009 + hdLod5(param_22, param_23).x;
        _RESERVED_IDENTIFIER_FIXUP_1519.w = _RESERVED_IDENTIFIER_FIXUP_1038;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1045 = _RESERVED_IDENTIFIER_FIXUP_1519.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1420;
        _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_1045.x;
        _RESERVED_IDENTIFIER_FIXUP_1420.y = _RESERVED_IDENTIFIER_FIXUP_1045.y;
        _RESERVED_IDENTIFIER_FIXUP_1420.w = _RESERVED_IDENTIFIER_FIXUP_998;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1420.xy;
        float param_25 = _RESERVED_IDENTIFIER_FIXUP_998;
        float _RESERVED_IDENTIFIER_FIXUP_1067 = _RESERVED_IDENTIFIER_FIXUP_1038 + hdLod5(param_24, param_25).x;
        _RESERVED_IDENTIFIER_FIXUP_1519.w = _RESERVED_IDENTIFIER_FIXUP_1067;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1074 = _RESERVED_IDENTIFIER_FIXUP_1519.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1433;
        _RESERVED_IDENTIFIER_FIXUP_1433.x = _RESERVED_IDENTIFIER_FIXUP_1074.x;
        _RESERVED_IDENTIFIER_FIXUP_1433.y = _RESERVED_IDENTIFIER_FIXUP_1074.y;
        _RESERVED_IDENTIFIER_FIXUP_1433.w = _RESERVED_IDENTIFIER_FIXUP_998;
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1433.xy;
        float param_27 = _RESERVED_IDENTIFIER_FIXUP_998;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1091 = hdLod5(param_26, param_27);
        float _RESERVED_IDENTIFIER_FIXUP_1096 = _RESERVED_IDENTIFIER_FIXUP_1067 + _RESERVED_IDENTIFIER_FIXUP_1091.x;
        _RESERVED_IDENTIFIER_FIXUP_1519.y = _RESERVED_IDENTIFIER_FIXUP_1096;
        float _RESERVED_IDENTIFIER_FIXUP_1101 = (_RESERVED_IDENTIFIER_FIXUP_1096 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1519.y = _RESERVED_IDENTIFIER_FIXUP_1101;
        float _RESERVED_IDENTIFIER_FIXUP_1108 = (_RESERVED_IDENTIFIER_FIXUP_949 * _RESERVED_IDENTIFIER_FIXUP_1101) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1519.x = _RESERVED_IDENTIFIER_FIXUP_1108;
        _RESERVED_IDENTIFIER_FIXUP_1091.x = min(_RESERVED_IDENTIFIER_FIXUP_1108, _RESERVED_IDENTIFIER_FIXUP_926.w);
        _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_1519;
        _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_1091;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_922.x = _RESERVED_IDENTIFIER_FIXUP_926.w;
        _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_1376;
        _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_922;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1124 = (_RESERVED_IDENTIFIER_FIXUP_1513.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_1514;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_1124;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_1124;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1137 = _RESERVED_IDENTIFIER_FIXUP_936.xyz * _RESERVED_IDENTIFIER_FIXUP_1458.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1464 = _RESERVED_IDENTIFIER_FIXUP_936;
    _RESERVED_IDENTIFIER_FIXUP_1464.x = _RESERVED_IDENTIFIER_FIXUP_1137.x;
    _RESERVED_IDENTIFIER_FIXUP_1464.y = _RESERVED_IDENTIFIER_FIXUP_1137.y;
    _RESERVED_IDENTIFIER_FIXUP_1464.z = _RESERVED_IDENTIFIER_FIXUP_1137.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1148 = _RESERVED_IDENTIFIER_FIXUP_1464.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_1464;
    _RESERVED_IDENTIFIER_FIXUP_1470.x = _RESERVED_IDENTIFIER_FIXUP_1148.x;
    _RESERVED_IDENTIFIER_FIXUP_1470.y = _RESERVED_IDENTIFIER_FIXUP_1148.y;
    _RESERVED_IDENTIFIER_FIXUP_1470.z = _RESERVED_IDENTIFIER_FIXUP_1148.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1159 = _RESERVED_IDENTIFIER_FIXUP_1470.xyz + _RESERVED_IDENTIFIER_FIXUP_1470.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1476 = _RESERVED_IDENTIFIER_FIXUP_1470;
    _RESERVED_IDENTIFIER_FIXUP_1476.x = _RESERVED_IDENTIFIER_FIXUP_1159.x;
    _RESERVED_IDENTIFIER_FIXUP_1476.y = _RESERVED_IDENTIFIER_FIXUP_1159.y;
    _RESERVED_IDENTIFIER_FIXUP_1476.z = _RESERVED_IDENTIFIER_FIXUP_1159.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1170 = _RESERVED_IDENTIFIER_FIXUP_1476.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_1170.x;
    _RESERVED_IDENTIFIER_FIXUP_1458.y = _RESERVED_IDENTIFIER_FIXUP_1170.y;
    _RESERVED_IDENTIFIER_FIXUP_1458.z = _RESERVED_IDENTIFIER_FIXUP_1170.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1184 = (_RESERVED_IDENTIFIER_FIXUP_1458.xyz * _RESERVED_IDENTIFIER_FIXUP_1513.xxx) + _RESERVED_IDENTIFIER_FIXUP_1476.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1488 = _RESERVED_IDENTIFIER_FIXUP_1476;
    _RESERVED_IDENTIFIER_FIXUP_1488.x = _RESERVED_IDENTIFIER_FIXUP_1184.x;
    _RESERVED_IDENTIFIER_FIXUP_1488.y = _RESERVED_IDENTIFIER_FIXUP_1184.y;
    _RESERVED_IDENTIFIER_FIXUP_1488.z = _RESERVED_IDENTIFIER_FIXUP_1184.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1197 = _RESERVED_IDENTIFIER_FIXUP_1488.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1494 = _RESERVED_IDENTIFIER_FIXUP_1488;
    _RESERVED_IDENTIFIER_FIXUP_1494.x = _RESERVED_IDENTIFIER_FIXUP_1197.x;
    _RESERVED_IDENTIFIER_FIXUP_1494.y = _RESERVED_IDENTIFIER_FIXUP_1197.y;
    _RESERVED_IDENTIFIER_FIXUP_1494.z = _RESERVED_IDENTIFIER_FIXUP_1197.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1494.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1360.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_518 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1234;
    if (_RESERVED_IDENTIFIER_FIXUP_491 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1234 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_491), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_518);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1234 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_518);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1234;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1124);
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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB131 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB131.x;
        r1.z = hdB131.y;
        vec2 hdB153 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB153.x;
        r4.y = hdB153.y;
        vec2 hdB161 = vec2(1.0, 0.0) * v5.zx;
        r4.z = hdB161.x;
        r4.w = hdB161.y;
        vec2 param_6 = r4.xy;
        float param_7 = r4.w;
        r4 = hdLod5(param_6, param_7);
        r1.w = r2.x + r4.x;
        vec2 hdB184 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB184.x;
        r2.y = hdB184.y;
        vec2 hdB191 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB191.x;
        r2.w = hdB191.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB214 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB214.x;
        r2.y = hdB214.y;
        vec2 hdB221 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB221.x;
        r2.w = hdB221.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB244 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB244.x;
        r2.y = hdB244.y;
        vec2 hdB251 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB251.x;
        r2.w = hdB251.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r3.w);
    }
    else
    {
        r2.x = r3.w;
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
    vec3 hdB380 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
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
    bool _1487 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1497;
    if (_1487)
    {
        _1497 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1497 = _1487;
    }
    if (_1497)
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
        bool _1522 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1537;
        if (!_1522)
        {
            _1537 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1537 = _1522;
        }
        if (_1537)
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
