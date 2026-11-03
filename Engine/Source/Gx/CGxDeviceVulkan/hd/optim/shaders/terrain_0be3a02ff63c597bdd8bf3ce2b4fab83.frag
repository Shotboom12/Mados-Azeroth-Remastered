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
float _RESERVED_IDENTIFIER_FIXUP_1602;
vec4 _RESERVED_IDENTIFIER_FIXUP_1603;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_614 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_618 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_622 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_626 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_630 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1330;
    _RESERVED_IDENTIFIER_FIXUP_1330.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_630.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_644 = _RESERVED_IDENTIFIER_FIXUP_618 * _RESERVED_IDENTIFIER_FIXUP_630.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_662 = (_RESERVED_IDENTIFIER_FIXUP_626 * _RESERVED_IDENTIFIER_FIXUP_630.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_622 * _RESERVED_IDENTIFIER_FIXUP_630.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_614 * _RESERVED_IDENTIFIER_FIXUP_1330.xxxx) + _RESERVED_IDENTIFIER_FIXUP_644));
    float _RESERVED_IDENTIFIER_FIXUP_669 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_644;
    _RESERVED_IDENTIFIER_FIXUP_1334.x = _RESERVED_IDENTIFIER_FIXUP_669;
    float _RESERVED_IDENTIFIER_FIXUP_675 = clamp((_RESERVED_IDENTIFIER_FIXUP_669 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1334.x = _RESERVED_IDENTIFIER_FIXUP_675;
    float _RESERVED_IDENTIFIER_FIXUP_681 = ((-_RESERVED_IDENTIFIER_FIXUP_675) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1334.y = _RESERVED_IDENTIFIER_FIXUP_681;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1605;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1604;
    if (_RESERVED_IDENTIFIER_FIXUP_681 != (-_RESERVED_IDENTIFIER_FIXUP_681))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_693 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_703 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_705 = _RESERVED_IDENTIFIER_FIXUP_703.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1348 = _RESERVED_IDENTIFIER_FIXUP_1334;
        _RESERVED_IDENTIFIER_FIXUP_1348.y = _RESERVED_IDENTIFIER_FIXUP_705;
        _RESERVED_IDENTIFIER_FIXUP_1348.z = _RESERVED_IDENTIFIER_FIXUP_703.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_713 = _RESERVED_IDENTIFIER_FIXUP_1348.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1352;
        _RESERVED_IDENTIFIER_FIXUP_1352.x = _RESERVED_IDENTIFIER_FIXUP_713.x;
        _RESERVED_IDENTIFIER_FIXUP_1352.y = _RESERVED_IDENTIFIER_FIXUP_713.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_720 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_724 = _RESERVED_IDENTIFIER_FIXUP_720.y;
        _RESERVED_IDENTIFIER_FIXUP_1352.w = _RESERVED_IDENTIFIER_FIXUP_724;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_693.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_693.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1352.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_724;
        float _RESERVED_IDENTIFIER_FIXUP_735 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1612 = vec4(_RESERVED_IDENTIFIER_FIXUP_675, _RESERVED_IDENTIFIER_FIXUP_705, _RESERVED_IDENTIFIER_FIXUP_703.y, _RESERVED_IDENTIFIER_FIXUP_735);
        vec2 _RESERVED_IDENTIFIER_FIXUP_742 = _RESERVED_IDENTIFIER_FIXUP_1612.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1365;
        _RESERVED_IDENTIFIER_FIXUP_1365.x = _RESERVED_IDENTIFIER_FIXUP_742.x;
        _RESERVED_IDENTIFIER_FIXUP_1365.y = _RESERVED_IDENTIFIER_FIXUP_742.y;
        _RESERVED_IDENTIFIER_FIXUP_1365.w = _RESERVED_IDENTIFIER_FIXUP_724;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1365.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_724;
        float _RESERVED_IDENTIFIER_FIXUP_764 = _RESERVED_IDENTIFIER_FIXUP_735 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1612.w = _RESERVED_IDENTIFIER_FIXUP_764;
        vec2 _RESERVED_IDENTIFIER_FIXUP_771 = _RESERVED_IDENTIFIER_FIXUP_1612.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1378;
        _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_771.x;
        _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_771.y;
        _RESERVED_IDENTIFIER_FIXUP_1378.w = _RESERVED_IDENTIFIER_FIXUP_724;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1378.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_724;
        float _RESERVED_IDENTIFIER_FIXUP_793 = _RESERVED_IDENTIFIER_FIXUP_764 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1612.w = _RESERVED_IDENTIFIER_FIXUP_793;
        vec2 _RESERVED_IDENTIFIER_FIXUP_800 = _RESERVED_IDENTIFIER_FIXUP_1612.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1391;
        _RESERVED_IDENTIFIER_FIXUP_1391.x = _RESERVED_IDENTIFIER_FIXUP_800.x;
        _RESERVED_IDENTIFIER_FIXUP_1391.y = _RESERVED_IDENTIFIER_FIXUP_800.y;
        _RESERVED_IDENTIFIER_FIXUP_1391.w = _RESERVED_IDENTIFIER_FIXUP_724;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1391.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_724;
        vec4 _RESERVED_IDENTIFIER_FIXUP_817 = hdLod5(param_12, param_13);
        float _RESERVED_IDENTIFIER_FIXUP_822 = _RESERVED_IDENTIFIER_FIXUP_793 + _RESERVED_IDENTIFIER_FIXUP_817.x;
        _RESERVED_IDENTIFIER_FIXUP_1612.y = _RESERVED_IDENTIFIER_FIXUP_822;
        float _RESERVED_IDENTIFIER_FIXUP_827 = (_RESERVED_IDENTIFIER_FIXUP_822 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1612.y = _RESERVED_IDENTIFIER_FIXUP_827;
        float _RESERVED_IDENTIFIER_FIXUP_834 = (_RESERVED_IDENTIFIER_FIXUP_675 * _RESERVED_IDENTIFIER_FIXUP_827) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1612.x = _RESERVED_IDENTIFIER_FIXUP_834;
        _RESERVED_IDENTIFIER_FIXUP_817.x = min(_RESERVED_IDENTIFIER_FIXUP_834, _RESERVED_IDENTIFIER_FIXUP_630.w);
        _RESERVED_IDENTIFIER_FIXUP_1605 = _RESERVED_IDENTIFIER_FIXUP_1612;
        _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_817;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_622.x = _RESERVED_IDENTIFIER_FIXUP_630.w;
        _RESERVED_IDENTIFIER_FIXUP_1605 = _RESERVED_IDENTIFIER_FIXUP_1334;
        _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_622;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1418 = _RESERVED_IDENTIFIER_FIXUP_1605;
    _RESERVED_IDENTIFIER_FIXUP_1418.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_863 = _RESERVED_IDENTIFIER_FIXUP_662.xyz * _RESERVED_IDENTIFIER_FIXUP_1418.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_662;
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_863.x;
    _RESERVED_IDENTIFIER_FIXUP_1420.y = _RESERVED_IDENTIFIER_FIXUP_863.y;
    _RESERVED_IDENTIFIER_FIXUP_1420.z = _RESERVED_IDENTIFIER_FIXUP_863.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_874 = _RESERVED_IDENTIFIER_FIXUP_1420.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1602).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1426 = _RESERVED_IDENTIFIER_FIXUP_1420;
    _RESERVED_IDENTIFIER_FIXUP_1426.x = _RESERVED_IDENTIFIER_FIXUP_874.x;
    _RESERVED_IDENTIFIER_FIXUP_1426.y = _RESERVED_IDENTIFIER_FIXUP_874.y;
    _RESERVED_IDENTIFIER_FIXUP_1426.z = _RESERVED_IDENTIFIER_FIXUP_874.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_885 = _RESERVED_IDENTIFIER_FIXUP_1426.xyz + _RESERVED_IDENTIFIER_FIXUP_1426.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_1426;
    _RESERVED_IDENTIFIER_FIXUP_1432.x = _RESERVED_IDENTIFIER_FIXUP_885.x;
    _RESERVED_IDENTIFIER_FIXUP_1432.y = _RESERVED_IDENTIFIER_FIXUP_885.y;
    _RESERVED_IDENTIFIER_FIXUP_1432.z = _RESERVED_IDENTIFIER_FIXUP_885.z;
    _RESERVED_IDENTIFIER_FIXUP_1418.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1418.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1418.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_910 = (_RESERVED_IDENTIFIER_FIXUP_1418.xyz * _RESERVED_IDENTIFIER_FIXUP_1604.xxx) + _RESERVED_IDENTIFIER_FIXUP_1432.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1444 = _RESERVED_IDENTIFIER_FIXUP_1432;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_910.x;
    _RESERVED_IDENTIFIER_FIXUP_1444.y = _RESERVED_IDENTIFIER_FIXUP_910.y;
    _RESERVED_IDENTIFIER_FIXUP_1444.z = _RESERVED_IDENTIFIER_FIXUP_910.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_923 = _RESERVED_IDENTIFIER_FIXUP_1444.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450 = _RESERVED_IDENTIFIER_FIXUP_1444;
    _RESERVED_IDENTIFIER_FIXUP_1450.x = _RESERVED_IDENTIFIER_FIXUP_923.x;
    _RESERVED_IDENTIFIER_FIXUP_1450.y = _RESERVED_IDENTIFIER_FIXUP_923.y;
    _RESERVED_IDENTIFIER_FIXUP_1450.z = _RESERVED_IDENTIFIER_FIXUP_923.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_974 = OptTex0( texcoord0.xyz);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_978 = hdTex1(param_14);
    vec2 param_15 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_982 = hdTex2(param_15);
    vec2 param_16 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_986 = hdTex3(param_16);
    vec2 param_17 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_990 = hdTex4(param_17);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1467;
    _RESERVED_IDENTIFIER_FIXUP_1467.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_990.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1004 = _RESERVED_IDENTIFIER_FIXUP_978 * _RESERVED_IDENTIFIER_FIXUP_990.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1022 = (_RESERVED_IDENTIFIER_FIXUP_986 * _RESERVED_IDENTIFIER_FIXUP_990.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_982 * _RESERVED_IDENTIFIER_FIXUP_990.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_974 * _RESERVED_IDENTIFIER_FIXUP_1467.xxxx) + _RESERVED_IDENTIFIER_FIXUP_1004));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1471 = _RESERVED_IDENTIFIER_FIXUP_1004;
    _RESERVED_IDENTIFIER_FIXUP_1471.x = _RESERVED_IDENTIFIER_FIXUP_669;
    float _RESERVED_IDENTIFIER_FIXUP_1035 = clamp((_RESERVED_IDENTIFIER_FIXUP_669 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1471.x = _RESERVED_IDENTIFIER_FIXUP_1035;
    float _RESERVED_IDENTIFIER_FIXUP_1041 = ((-_RESERVED_IDENTIFIER_FIXUP_1035) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1471.y = _RESERVED_IDENTIFIER_FIXUP_1041;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1609;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1608;
    if (_RESERVED_IDENTIFIER_FIXUP_1041 != (-_RESERVED_IDENTIFIER_FIXUP_1041))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1053 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1063 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1065 = _RESERVED_IDENTIFIER_FIXUP_1063.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1485 = _RESERVED_IDENTIFIER_FIXUP_1471;
        _RESERVED_IDENTIFIER_FIXUP_1485.y = _RESERVED_IDENTIFIER_FIXUP_1065;
        _RESERVED_IDENTIFIER_FIXUP_1485.z = _RESERVED_IDENTIFIER_FIXUP_1063.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1073 = _RESERVED_IDENTIFIER_FIXUP_1485.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1489;
        _RESERVED_IDENTIFIER_FIXUP_1489.x = _RESERVED_IDENTIFIER_FIXUP_1073.x;
        _RESERVED_IDENTIFIER_FIXUP_1489.y = _RESERVED_IDENTIFIER_FIXUP_1073.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1080 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1084 = _RESERVED_IDENTIFIER_FIXUP_1080.y;
        _RESERVED_IDENTIFIER_FIXUP_1489.w = _RESERVED_IDENTIFIER_FIXUP_1084;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1053.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1053.w;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1489.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1084;
        float _RESERVED_IDENTIFIER_FIXUP_1095 = hdLod5(param_18, param_19).x + hdLod5(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1614 = vec4(_RESERVED_IDENTIFIER_FIXUP_1035, _RESERVED_IDENTIFIER_FIXUP_1065, _RESERVED_IDENTIFIER_FIXUP_1063.y, _RESERVED_IDENTIFIER_FIXUP_1095);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1102 = _RESERVED_IDENTIFIER_FIXUP_1614.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1502;
        _RESERVED_IDENTIFIER_FIXUP_1502.x = _RESERVED_IDENTIFIER_FIXUP_1102.x;
        _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_1102.y;
        _RESERVED_IDENTIFIER_FIXUP_1502.w = _RESERVED_IDENTIFIER_FIXUP_1084;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1502.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1084;
        float _RESERVED_IDENTIFIER_FIXUP_1124 = _RESERVED_IDENTIFIER_FIXUP_1095 + hdLod5(param_22, param_23).x;
        _RESERVED_IDENTIFIER_FIXUP_1614.w = _RESERVED_IDENTIFIER_FIXUP_1124;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1131 = _RESERVED_IDENTIFIER_FIXUP_1614.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1515;
        _RESERVED_IDENTIFIER_FIXUP_1515.x = _RESERVED_IDENTIFIER_FIXUP_1131.x;
        _RESERVED_IDENTIFIER_FIXUP_1515.y = _RESERVED_IDENTIFIER_FIXUP_1131.y;
        _RESERVED_IDENTIFIER_FIXUP_1515.w = _RESERVED_IDENTIFIER_FIXUP_1084;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1515.xy;
        float param_25 = _RESERVED_IDENTIFIER_FIXUP_1084;
        float _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_1124 + hdLod5(param_24, param_25).x;
        _RESERVED_IDENTIFIER_FIXUP_1614.w = _RESERVED_IDENTIFIER_FIXUP_1153;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1160 = _RESERVED_IDENTIFIER_FIXUP_1614.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1528;
        _RESERVED_IDENTIFIER_FIXUP_1528.x = _RESERVED_IDENTIFIER_FIXUP_1160.x;
        _RESERVED_IDENTIFIER_FIXUP_1528.y = _RESERVED_IDENTIFIER_FIXUP_1160.y;
        _RESERVED_IDENTIFIER_FIXUP_1528.w = _RESERVED_IDENTIFIER_FIXUP_1084;
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1528.xy;
        float param_27 = _RESERVED_IDENTIFIER_FIXUP_1084;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1177 = hdLod5(param_26, param_27);
        float _RESERVED_IDENTIFIER_FIXUP_1182 = _RESERVED_IDENTIFIER_FIXUP_1153 + _RESERVED_IDENTIFIER_FIXUP_1177.x;
        _RESERVED_IDENTIFIER_FIXUP_1614.y = _RESERVED_IDENTIFIER_FIXUP_1182;
        float _RESERVED_IDENTIFIER_FIXUP_1187 = (_RESERVED_IDENTIFIER_FIXUP_1182 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1614.y = _RESERVED_IDENTIFIER_FIXUP_1187;
        float _RESERVED_IDENTIFIER_FIXUP_1194 = (_RESERVED_IDENTIFIER_FIXUP_1035 * _RESERVED_IDENTIFIER_FIXUP_1187) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1614.x = _RESERVED_IDENTIFIER_FIXUP_1194;
        _RESERVED_IDENTIFIER_FIXUP_1177.x = min(_RESERVED_IDENTIFIER_FIXUP_1194, _RESERVED_IDENTIFIER_FIXUP_990.w);
        _RESERVED_IDENTIFIER_FIXUP_1609 = _RESERVED_IDENTIFIER_FIXUP_1614;
        _RESERVED_IDENTIFIER_FIXUP_1608 = _RESERVED_IDENTIFIER_FIXUP_1177;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_982.x = _RESERVED_IDENTIFIER_FIXUP_990.w;
        _RESERVED_IDENTIFIER_FIXUP_1609 = _RESERVED_IDENTIFIER_FIXUP_1471;
        _RESERVED_IDENTIFIER_FIXUP_1608 = _RESERVED_IDENTIFIER_FIXUP_982;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1210 = (_RESERVED_IDENTIFIER_FIXUP_1608.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1553 = _RESERVED_IDENTIFIER_FIXUP_1609;
    _RESERVED_IDENTIFIER_FIXUP_1553.x = _RESERVED_IDENTIFIER_FIXUP_1210;
    _RESERVED_IDENTIFIER_FIXUP_1553.x = _RESERVED_IDENTIFIER_FIXUP_1210;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1022.xyz * _RESERVED_IDENTIFIER_FIXUP_1553.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1559 = _RESERVED_IDENTIFIER_FIXUP_1022;
    _RESERVED_IDENTIFIER_FIXUP_1559.x = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_1559.y = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_1559.z = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1234 = _RESERVED_IDENTIFIER_FIXUP_1559.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1565 = _RESERVED_IDENTIFIER_FIXUP_1559;
    _RESERVED_IDENTIFIER_FIXUP_1565.x = _RESERVED_IDENTIFIER_FIXUP_1234.x;
    _RESERVED_IDENTIFIER_FIXUP_1565.y = _RESERVED_IDENTIFIER_FIXUP_1234.y;
    _RESERVED_IDENTIFIER_FIXUP_1565.z = _RESERVED_IDENTIFIER_FIXUP_1234.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1245 = _RESERVED_IDENTIFIER_FIXUP_1565.xyz + _RESERVED_IDENTIFIER_FIXUP_1565.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_1565;
    _RESERVED_IDENTIFIER_FIXUP_1571.x = _RESERVED_IDENTIFIER_FIXUP_1245.x;
    _RESERVED_IDENTIFIER_FIXUP_1571.y = _RESERVED_IDENTIFIER_FIXUP_1245.y;
    _RESERVED_IDENTIFIER_FIXUP_1571.z = _RESERVED_IDENTIFIER_FIXUP_1245.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1256 = _RESERVED_IDENTIFIER_FIXUP_1571.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1553.x = _RESERVED_IDENTIFIER_FIXUP_1256.x;
    _RESERVED_IDENTIFIER_FIXUP_1553.y = _RESERVED_IDENTIFIER_FIXUP_1256.y;
    _RESERVED_IDENTIFIER_FIXUP_1553.z = _RESERVED_IDENTIFIER_FIXUP_1256.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1270 = (_RESERVED_IDENTIFIER_FIXUP_1553.xyz * _RESERVED_IDENTIFIER_FIXUP_1608.xxx) + _RESERVED_IDENTIFIER_FIXUP_1571.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1583 = _RESERVED_IDENTIFIER_FIXUP_1571;
    _RESERVED_IDENTIFIER_FIXUP_1583.x = _RESERVED_IDENTIFIER_FIXUP_1270.x;
    _RESERVED_IDENTIFIER_FIXUP_1583.y = _RESERVED_IDENTIFIER_FIXUP_1270.y;
    _RESERVED_IDENTIFIER_FIXUP_1583.z = _RESERVED_IDENTIFIER_FIXUP_1270.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_1583.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1589 = _RESERVED_IDENTIFIER_FIXUP_1583;
    _RESERVED_IDENTIFIER_FIXUP_1589.x = _RESERVED_IDENTIFIER_FIXUP_1283.x;
    _RESERVED_IDENTIFIER_FIXUP_1589.y = _RESERVED_IDENTIFIER_FIXUP_1283.y;
    _RESERVED_IDENTIFIER_FIXUP_1589.z = _RESERVED_IDENTIFIER_FIXUP_1283.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1589.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_477 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_486;
    if (_RESERVED_IDENTIFIER_FIXUP_477)
    {
        _RESERVED_IDENTIFIER_FIXUP_486 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_486 = _RESERVED_IDENTIFIER_FIXUP_477;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_486)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_523 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1450.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_550 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1320;
    if (_RESERVED_IDENTIFIER_FIXUP_523 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1320 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_523), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_550);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1320 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_550);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1320;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1210);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
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
    r5.x = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r5.x = (-r5.x) + 1.0;
    r1 *= r4.xxxx;
    r0 = (r0 * r5.xxxx) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB164 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB164.x;
        r1.z = hdB164.y;
        vec2 hdB186 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB186.x;
        r3.y = hdB186.y;
        vec2 hdB194 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB194.x;
        r3.w = hdB194.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r1.w = r2.x + r3.x;
        vec2 hdB217 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB217.x;
        r2.y = hdB217.y;
        vec2 hdB224 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB224.x;
        r2.w = hdB224.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB247 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB247.x;
        r2.y = hdB247.y;
        vec2 hdB254 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB254.x;
        r2.w = hdB254.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB277 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB277.x;
        r2.y = hdB277.y;
        vec2 hdB284 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB284.x;
        r2.w = hdB284.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB332 = r0;
    vec3 hdB336 = hdB332.xyz * r1.xxx;
    r0.x = hdB336.x;
    r0.y = hdB336.y;
    r0.z = hdB336.z;
    vec4 hdB343 = r0;
    vec3 hdB347 = hdB343.xyz * v0.xyz;
    r0.x = hdB347.x;
    r0.y = hdB347.y;
    r0.z = hdB347.z;
    vec4 hdB354 = r0;
    vec4 hdB356 = r0;
    vec3 hdB358 = hdB354.xyz + hdB356.xyz;
    r0.x = hdB358.x;
    r0.y = hdB358.y;
    r0.z = hdB358.z;
    vec3 hdB369 = r0.www * v1.xyz;
    r1.x = hdB369.x;
    r1.y = hdB369.y;
    r1.z = hdB369.z;
    vec4 hdB381 = r0;
    vec3 hdB383 = (r1.xyz * r2.xxx) + hdB381.xyz;
    r0.x = hdB383.x;
    r0.y = hdB383.y;
    r0.z = hdB383.z;
    vec4 hdB390 = r0;
    vec3 hdB397 = hdB390.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB397.x;
    r0.y = hdB397.y;
    r0.z = hdB397.z;
    vec3 hdB412 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB412.x;
    oC0.y = hdB412.y;
    oC0.z = hdB412.z;
    oC0.w = 1.0;
    bool hdB425 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB433;
    if (hdB425)
    {
        hdB433 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB433 = hdB425;
    }
    if (hdB433)
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
    bool _1567 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1577;
    if (_1567)
    {
        _1577 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1577 = _1567;
    }
    if (_1577)
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
        bool _1602 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1617;
        if (!_1602)
        {
            _1617 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1617 = _1602;
        }
        if (_1617)
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
