#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1565;
vec4 _RESERVED_IDENTIFIER_FIXUP_1566;


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
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
    bool _52 = hdOverride >= 0;
    bool _71;
    if (_52)
    {
        _71 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _71 = _52;
    }
    vec4 _72;
    if (_71)
    {
        _72 = vec4(float(hdOverride));
    }
    else
    {
        _72 = value;
    }
    return _72;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _89 = hdOverride >= 0;
    bool _99;
    if (_89)
    {
        _99 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _99 = _89;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _117 = hdOverride >= 0;
    bool _127;
    if (_117)
    {
        _127 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _145 = hdOverride >= 0;
    bool _154;
    if (_145)
    {
        _154 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _154 = _145;
    }
    vec4 _155;
    if (_154)
    {
        _155 = vec4(float(hdOverride));
    }
    else
    {
        _155 = value;
    }
    return _155;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _173 = hdOverride >= 0;
    bool _183;
    if (_173)
    {
        _183 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _183 = _173;
    }
    vec4 _184;
    if (_183)
    {
        _184 = vec4(float(hdOverride));
    }
    else
    {
        _184 = value;
    }
    return _184;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_602 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_606 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_610 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_614 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_618 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_628 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_602, _RESERVED_IDENTIFIER_FIXUP_606, _RESERVED_IDENTIFIER_FIXUP_618.xxxx), _RESERVED_IDENTIFIER_FIXUP_610, _RESERVED_IDENTIFIER_FIXUP_618.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_633 = mix(_RESERVED_IDENTIFIER_FIXUP_628, _RESERVED_IDENTIFIER_FIXUP_614, _RESERVED_IDENTIFIER_FIXUP_618.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_640 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1290 = _RESERVED_IDENTIFIER_FIXUP_628;
    _RESERVED_IDENTIFIER_FIXUP_1290.x = _RESERVED_IDENTIFIER_FIXUP_640;
    float _RESERVED_IDENTIFIER_FIXUP_646 = clamp((_RESERVED_IDENTIFIER_FIXUP_640 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1290.x = _RESERVED_IDENTIFIER_FIXUP_646;
    float _RESERVED_IDENTIFIER_FIXUP_652 = ((-_RESERVED_IDENTIFIER_FIXUP_646) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_652;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1568;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567;
    if (_RESERVED_IDENTIFIER_FIXUP_652 != (-_RESERVED_IDENTIFIER_FIXUP_652))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_664 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1303 = _RESERVED_IDENTIFIER_FIXUP_1290;
        _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_664.x;
        _RESERVED_IDENTIFIER_FIXUP_1303.z = _RESERVED_IDENTIFIER_FIXUP_664.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_674 = _RESERVED_IDENTIFIER_FIXUP_1303.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1307;
        _RESERVED_IDENTIFIER_FIXUP_1307.x = _RESERVED_IDENTIFIER_FIXUP_674.x;
        _RESERVED_IDENTIFIER_FIXUP_1307.y = _RESERVED_IDENTIFIER_FIXUP_674.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_684 = _RESERVED_IDENTIFIER_FIXUP_1303.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1311;
        _RESERVED_IDENTIFIER_FIXUP_1311.x = _RESERVED_IDENTIFIER_FIXUP_684.x;
        _RESERVED_IDENTIFIER_FIXUP_1311.y = _RESERVED_IDENTIFIER_FIXUP_684.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_694 = _RESERVED_IDENTIFIER_FIXUP_1303.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1315;
        _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_694.x;
        _RESERVED_IDENTIFIER_FIXUP_1315.y = _RESERVED_IDENTIFIER_FIXUP_694.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_704 = _RESERVED_IDENTIFIER_FIXUP_1303.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1319;
        _RESERVED_IDENTIFIER_FIXUP_1319.x = _RESERVED_IDENTIFIER_FIXUP_704.x;
        _RESERVED_IDENTIFIER_FIXUP_1319.y = _RESERVED_IDENTIFIER_FIXUP_704.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_712 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_712.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_712.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_718 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_1307.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1311.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1315.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1319.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1307.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_718.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1311.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_718.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1315.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_718.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_775 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_718 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1319.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_781 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_781;
        float _RESERVED_IDENTIFIER_FIXUP_786 = float(_RESERVED_IDENTIFIER_FIXUP_781 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_786;
        float _RESERVED_IDENTIFIER_FIXUP_789 = dot(_RESERVED_IDENTIFIER_FIXUP_775, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1303.z = _RESERVED_IDENTIFIER_FIXUP_789;
        float _RESERVED_IDENTIFIER_FIXUP_795 = _RESERVED_IDENTIFIER_FIXUP_786 + _RESERVED_IDENTIFIER_FIXUP_789;
        _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_795;
        float _RESERVED_IDENTIFIER_FIXUP_800 = (_RESERVED_IDENTIFIER_FIXUP_795 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_800;
        float _RESERVED_IDENTIFIER_FIXUP_807 = (_RESERVED_IDENTIFIER_FIXUP_646 * _RESERVED_IDENTIFIER_FIXUP_800) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_807;
        _RESERVED_IDENTIFIER_FIXUP_775.x = min(_RESERVED_IDENTIFIER_FIXUP_807, _RESERVED_IDENTIFIER_FIXUP_618.w);
        _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1303;
        _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_775;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_610.x = _RESERVED_IDENTIFIER_FIXUP_618.w;
        _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1290;
        _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_610;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1380 = _RESERVED_IDENTIFIER_FIXUP_1568;
    _RESERVED_IDENTIFIER_FIXUP_1380.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_836 = _RESERVED_IDENTIFIER_FIXUP_633.xyz * _RESERVED_IDENTIFIER_FIXUP_1380.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1382 = _RESERVED_IDENTIFIER_FIXUP_1380;
    _RESERVED_IDENTIFIER_FIXUP_1382.x = _RESERVED_IDENTIFIER_FIXUP_836.x;
    _RESERVED_IDENTIFIER_FIXUP_1382.y = _RESERVED_IDENTIFIER_FIXUP_836.y;
    _RESERVED_IDENTIFIER_FIXUP_1382.z = _RESERVED_IDENTIFIER_FIXUP_836.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_847 = _RESERVED_IDENTIFIER_FIXUP_1382.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1565).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1388 = _RESERVED_IDENTIFIER_FIXUP_1382;
    _RESERVED_IDENTIFIER_FIXUP_1388.x = _RESERVED_IDENTIFIER_FIXUP_847.x;
    _RESERVED_IDENTIFIER_FIXUP_1388.y = _RESERVED_IDENTIFIER_FIXUP_847.y;
    _RESERVED_IDENTIFIER_FIXUP_1388.z = _RESERVED_IDENTIFIER_FIXUP_847.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_858 = _RESERVED_IDENTIFIER_FIXUP_1388.xyz + _RESERVED_IDENTIFIER_FIXUP_1388.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1394 = _RESERVED_IDENTIFIER_FIXUP_1388;
    _RESERVED_IDENTIFIER_FIXUP_1394.x = _RESERVED_IDENTIFIER_FIXUP_858.x;
    _RESERVED_IDENTIFIER_FIXUP_1394.y = _RESERVED_IDENTIFIER_FIXUP_858.y;
    _RESERVED_IDENTIFIER_FIXUP_1394.z = _RESERVED_IDENTIFIER_FIXUP_858.z;
    _RESERVED_IDENTIFIER_FIXUP_633.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_633.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_633.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_883 = (_RESERVED_IDENTIFIER_FIXUP_633.xyz * _RESERVED_IDENTIFIER_FIXUP_1567.xxx) + _RESERVED_IDENTIFIER_FIXUP_1394.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1406 = _RESERVED_IDENTIFIER_FIXUP_1394;
    _RESERVED_IDENTIFIER_FIXUP_1406.x = _RESERVED_IDENTIFIER_FIXUP_883.x;
    _RESERVED_IDENTIFIER_FIXUP_1406.y = _RESERVED_IDENTIFIER_FIXUP_883.y;
    _RESERVED_IDENTIFIER_FIXUP_1406.z = _RESERVED_IDENTIFIER_FIXUP_883.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_896 = _RESERVED_IDENTIFIER_FIXUP_1406.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1412 = _RESERVED_IDENTIFIER_FIXUP_1406;
    _RESERVED_IDENTIFIER_FIXUP_1412.x = _RESERVED_IDENTIFIER_FIXUP_896.x;
    _RESERVED_IDENTIFIER_FIXUP_1412.y = _RESERVED_IDENTIFIER_FIXUP_896.y;
    _RESERVED_IDENTIFIER_FIXUP_1412.z = _RESERVED_IDENTIFIER_FIXUP_896.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_949 = OptTex0( texcoord0.xyz);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_953 = hdTex1(param_14);
    vec2 param_15 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_957 = hdTex2(param_15);
    vec2 param_16 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_961 = hdTex3(param_16);
    vec2 param_17 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_965 = hdTex4(param_17);
    vec4 _RESERVED_IDENTIFIER_FIXUP_975 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_949, _RESERVED_IDENTIFIER_FIXUP_953, _RESERVED_IDENTIFIER_FIXUP_965.xxxx), _RESERVED_IDENTIFIER_FIXUP_957, _RESERVED_IDENTIFIER_FIXUP_965.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_980 = mix(_RESERVED_IDENTIFIER_FIXUP_975, _RESERVED_IDENTIFIER_FIXUP_961, _RESERVED_IDENTIFIER_FIXUP_965.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1428 = _RESERVED_IDENTIFIER_FIXUP_975;
    _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_640;
    float _RESERVED_IDENTIFIER_FIXUP_993 = clamp((_RESERVED_IDENTIFIER_FIXUP_640 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_993;
    float _RESERVED_IDENTIFIER_FIXUP_999 = ((-_RESERVED_IDENTIFIER_FIXUP_993) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1428.y = _RESERVED_IDENTIFIER_FIXUP_999;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1572;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1571;
    if (_RESERVED_IDENTIFIER_FIXUP_999 != (-_RESERVED_IDENTIFIER_FIXUP_999))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1011 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1441 = _RESERVED_IDENTIFIER_FIXUP_1428;
        _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1011.x;
        _RESERVED_IDENTIFIER_FIXUP_1441.z = _RESERVED_IDENTIFIER_FIXUP_1011.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1021 = _RESERVED_IDENTIFIER_FIXUP_1441.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1445;
        _RESERVED_IDENTIFIER_FIXUP_1445.x = _RESERVED_IDENTIFIER_FIXUP_1021.x;
        _RESERVED_IDENTIFIER_FIXUP_1445.y = _RESERVED_IDENTIFIER_FIXUP_1021.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1031 = _RESERVED_IDENTIFIER_FIXUP_1441.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1449;
        _RESERVED_IDENTIFIER_FIXUP_1449.x = _RESERVED_IDENTIFIER_FIXUP_1031.x;
        _RESERVED_IDENTIFIER_FIXUP_1449.y = _RESERVED_IDENTIFIER_FIXUP_1031.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1041 = _RESERVED_IDENTIFIER_FIXUP_1441.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1453;
        _RESERVED_IDENTIFIER_FIXUP_1453.x = _RESERVED_IDENTIFIER_FIXUP_1041.x;
        _RESERVED_IDENTIFIER_FIXUP_1453.y = _RESERVED_IDENTIFIER_FIXUP_1041.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1051 = _RESERVED_IDENTIFIER_FIXUP_1441.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1457;
        _RESERVED_IDENTIFIER_FIXUP_1457.x = _RESERVED_IDENTIFIER_FIXUP_1051.x;
        _RESERVED_IDENTIFIER_FIXUP_1457.y = _RESERVED_IDENTIFIER_FIXUP_1051.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1059 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1059.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1059.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1065 = hdLod5(param_18, param_19);
        _RESERVED_IDENTIFIER_FIXUP_1445.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1449.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1453.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1457.w = 0.0;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1445.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1065.y = hdLod5(param_20, param_21).x;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1449.xy;
        float param_23 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1065.z = hdLod5(param_22, param_23).x;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1453.xy;
        float param_25 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1065.w = hdLod5(param_24, param_25).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1122 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1065 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1457.xy;
        float param_27 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1128 = hdLod5(param_26, param_27).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1128;
        float _RESERVED_IDENTIFIER_FIXUP_1133 = float(_RESERVED_IDENTIFIER_FIXUP_1128 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1133;
        float _RESERVED_IDENTIFIER_FIXUP_1136 = dot(_RESERVED_IDENTIFIER_FIXUP_1122, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1441.z = _RESERVED_IDENTIFIER_FIXUP_1136;
        float _RESERVED_IDENTIFIER_FIXUP_1142 = _RESERVED_IDENTIFIER_FIXUP_1133 + _RESERVED_IDENTIFIER_FIXUP_1136;
        _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1142;
        float _RESERVED_IDENTIFIER_FIXUP_1147 = (_RESERVED_IDENTIFIER_FIXUP_1142 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1147;
        float _RESERVED_IDENTIFIER_FIXUP_1154 = (_RESERVED_IDENTIFIER_FIXUP_993 * _RESERVED_IDENTIFIER_FIXUP_1147) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_1154;
        _RESERVED_IDENTIFIER_FIXUP_1122.x = min(_RESERVED_IDENTIFIER_FIXUP_1154, _RESERVED_IDENTIFIER_FIXUP_965.w);
        _RESERVED_IDENTIFIER_FIXUP_1572 = _RESERVED_IDENTIFIER_FIXUP_1441;
        _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_1122;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_957.x = _RESERVED_IDENTIFIER_FIXUP_965.w;
        _RESERVED_IDENTIFIER_FIXUP_1572 = _RESERVED_IDENTIFIER_FIXUP_1428;
        _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_957;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1170 = (_RESERVED_IDENTIFIER_FIXUP_1571.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_1572;
    _RESERVED_IDENTIFIER_FIXUP_1516.x = _RESERVED_IDENTIFIER_FIXUP_1170;
    _RESERVED_IDENTIFIER_FIXUP_1516.x = _RESERVED_IDENTIFIER_FIXUP_1170;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_980.xyz * _RESERVED_IDENTIFIER_FIXUP_1516.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1522 = _RESERVED_IDENTIFIER_FIXUP_1516;
    _RESERVED_IDENTIFIER_FIXUP_1522.x = _RESERVED_IDENTIFIER_FIXUP_1183.x;
    _RESERVED_IDENTIFIER_FIXUP_1522.y = _RESERVED_IDENTIFIER_FIXUP_1183.y;
    _RESERVED_IDENTIFIER_FIXUP_1522.z = _RESERVED_IDENTIFIER_FIXUP_1183.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1194 = _RESERVED_IDENTIFIER_FIXUP_1522.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_1522;
    _RESERVED_IDENTIFIER_FIXUP_1528.x = _RESERVED_IDENTIFIER_FIXUP_1194.x;
    _RESERVED_IDENTIFIER_FIXUP_1528.y = _RESERVED_IDENTIFIER_FIXUP_1194.y;
    _RESERVED_IDENTIFIER_FIXUP_1528.z = _RESERVED_IDENTIFIER_FIXUP_1194.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1528.xyz + _RESERVED_IDENTIFIER_FIXUP_1528.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_1528;
    _RESERVED_IDENTIFIER_FIXUP_1534.x = _RESERVED_IDENTIFIER_FIXUP_1205.x;
    _RESERVED_IDENTIFIER_FIXUP_1534.y = _RESERVED_IDENTIFIER_FIXUP_1205.y;
    _RESERVED_IDENTIFIER_FIXUP_1534.z = _RESERVED_IDENTIFIER_FIXUP_1205.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1216 = _RESERVED_IDENTIFIER_FIXUP_980.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_980;
    _RESERVED_IDENTIFIER_FIXUP_1540.x = _RESERVED_IDENTIFIER_FIXUP_1216.x;
    _RESERVED_IDENTIFIER_FIXUP_1540.y = _RESERVED_IDENTIFIER_FIXUP_1216.y;
    _RESERVED_IDENTIFIER_FIXUP_1540.z = _RESERVED_IDENTIFIER_FIXUP_1216.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1230 = (_RESERVED_IDENTIFIER_FIXUP_1540.xyz * _RESERVED_IDENTIFIER_FIXUP_1571.xxx) + _RESERVED_IDENTIFIER_FIXUP_1534.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1534;
    _RESERVED_IDENTIFIER_FIXUP_1546.x = _RESERVED_IDENTIFIER_FIXUP_1230.x;
    _RESERVED_IDENTIFIER_FIXUP_1546.y = _RESERVED_IDENTIFIER_FIXUP_1230.y;
    _RESERVED_IDENTIFIER_FIXUP_1546.z = _RESERVED_IDENTIFIER_FIXUP_1230.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1243 = _RESERVED_IDENTIFIER_FIXUP_1546.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1552 = _RESERVED_IDENTIFIER_FIXUP_1546;
    _RESERVED_IDENTIFIER_FIXUP_1552.x = _RESERVED_IDENTIFIER_FIXUP_1243.x;
    _RESERVED_IDENTIFIER_FIXUP_1552.y = _RESERVED_IDENTIFIER_FIXUP_1243.y;
    _RESERVED_IDENTIFIER_FIXUP_1552.z = _RESERVED_IDENTIFIER_FIXUP_1243.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1552.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_464 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_473;
    if (_RESERVED_IDENTIFIER_FIXUP_464)
    {
        _RESERVED_IDENTIFIER_FIXUP_473 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_473 = _RESERVED_IDENTIFIER_FIXUP_464;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_473)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_510 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1412.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_537 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1280;
    if (_RESERVED_IDENTIFIER_FIXUP_510 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1280 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_510), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_537);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1280 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_537);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1280;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1170);
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
    vec2 param_3 = v4.wz;
    r4 = hdTex4(param_3);
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB134 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB134.x;
        r0.z = hdB134.y;
        vec2 hdB156 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB156.x;
        r2.y = hdB156.y;
        vec2 hdB167 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB167.x;
        r3.y = hdB167.y;
        vec2 hdB178 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB178.x;
        r5.y = hdB178.y;
        vec2 hdB189 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB189.x;
        r6.y = hdB189.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r7.xy;
        float param_5 = r7.w;
        r7 = hdLod5(param_4, param_5);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
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
        r7.z = r3.x;
        r7.w = r5.x;
        r2 = r7 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r0.y = r6.x + (-v5.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r2.x = min(r0.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB321 = r0;
    vec3 hdB323 = r1.xyz * hdB321.xxx;
    r0.x = hdB323.x;
    r0.y = hdB323.y;
    r0.z = hdB323.z;
    vec4 hdB330 = r0;
    vec3 hdB334 = hdB330.xyz * v0.xyz;
    r0.x = hdB334.x;
    r0.y = hdB334.y;
    r0.z = hdB334.z;
    vec4 hdB341 = r0;
    vec4 hdB343 = r0;
    vec3 hdB345 = hdB341.xyz + hdB343.xyz;
    r0.x = hdB345.x;
    r0.y = hdB345.y;
    r0.z = hdB345.z;
    vec4 hdB352 = r1;
    vec3 hdB356 = hdB352.www * v1.xyz;
    r1.x = hdB356.x;
    r1.y = hdB356.y;
    r1.z = hdB356.z;
    vec4 hdB368 = r0;
    vec3 hdB370 = (r1.xyz * r2.xxx) + hdB368.xyz;
    r0.x = hdB370.x;
    r0.y = hdB370.y;
    r0.z = hdB370.z;
    vec4 hdB377 = r0;
    vec3 hdB384 = hdB377.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB384.x;
    r0.y = hdB384.y;
    r0.z = hdB384.z;
    vec3 hdB399 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB399.x;
    oC0.y = hdB399.y;
    oC0.z = hdB399.z;
    oC0.w = 1.0;
    bool hdB412 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB420;
    if (hdB412)
    {
        hdB420 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB420 = hdB412;
    }
    if (hdB420)
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
    bool _1491 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1501;
    if (_1491)
    {
        _1501 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1501 = _1491;
    }
    if (_1501)
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
        bool _1526 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1541;
        if (!_1526)
        {
            _1541 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1541 = _1526;
        }
        if (_1541)
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
