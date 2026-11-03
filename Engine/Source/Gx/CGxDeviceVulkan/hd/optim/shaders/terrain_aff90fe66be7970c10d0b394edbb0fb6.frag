#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1599;
vec4 _RESERVED_IDENTIFIER_FIXUP_1600;


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
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _55 = hdOverride >= 0;
    bool _75;
    if (_55)
    {
        _75 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _75 = _55;
    }
    vec4 _76;
    if (_75)
    {
        _76 = vec4(float(hdOverride));
    }
    else
    {
        _76 = value;
    }
    return _76;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _93 = hdOverride >= 0;
    bool _102;
    if (_93)
    {
        _102 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _102 = _93;
    }
    vec4 _103;
    if (_102)
    {
        _103 = vec4(float(hdOverride));
    }
    else
    {
        _103 = value;
    }
    return _103;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _120 = hdOverride >= 0;
    bool _130;
    if (_120)
    {
        _130 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _130 = _120;
    }
    vec4 _131;
    if (_130)
    {
        _131 = vec4(float(hdOverride));
    }
    else
    {
        _131 = value;
    }
    return _131;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _148 = hdOverride >= 0;
    bool _158;
    if (_148)
    {
        _158 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _158 = _148;
    }
    vec4 _159;
    if (_158)
    {
        _159 = vec4(float(hdOverride));
    }
    else
    {
        _159 = value;
    }
    return _159;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _176 = hdOverride >= 0;
    bool _185;
    if (_176)
    {
        _185 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _185 = _176;
    }
    vec4 _186;
    if (_185)
    {
        _186 = vec4(float(hdOverride));
    }
    else
    {
        _186 = value;
    }
    return _186;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _204 = hdOverride >= 0;
    bool _214;
    if (_204)
    {
        _214 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _214 = _204;
    }
    vec4 _215;
    if (_214)
    {
        _215 = vec4(float(hdOverride));
    }
    else
    {
        _215 = value;
    }
    return _215;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_611 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_615 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_619 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_623 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_627 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1327;
    _RESERVED_IDENTIFIER_FIXUP_1327.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_627.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_615 * _RESERVED_IDENTIFIER_FIXUP_627.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_659 = (_RESERVED_IDENTIFIER_FIXUP_623 * _RESERVED_IDENTIFIER_FIXUP_627.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_619 * _RESERVED_IDENTIFIER_FIXUP_627.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_611 * _RESERVED_IDENTIFIER_FIXUP_1327.xxxx) + _RESERVED_IDENTIFIER_FIXUP_641));
    float _RESERVED_IDENTIFIER_FIXUP_666 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1331 = _RESERVED_IDENTIFIER_FIXUP_641;
    _RESERVED_IDENTIFIER_FIXUP_1331.x = _RESERVED_IDENTIFIER_FIXUP_666;
    float _RESERVED_IDENTIFIER_FIXUP_672 = clamp((_RESERVED_IDENTIFIER_FIXUP_666 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1331.x = _RESERVED_IDENTIFIER_FIXUP_672;
    float _RESERVED_IDENTIFIER_FIXUP_678 = ((-_RESERVED_IDENTIFIER_FIXUP_672) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1331.y = _RESERVED_IDENTIFIER_FIXUP_678;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1602;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1601;
    if (_RESERVED_IDENTIFIER_FIXUP_678 != (-_RESERVED_IDENTIFIER_FIXUP_678))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_690 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_700 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_702 = _RESERVED_IDENTIFIER_FIXUP_700.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_1331;
        _RESERVED_IDENTIFIER_FIXUP_1345.y = _RESERVED_IDENTIFIER_FIXUP_702;
        _RESERVED_IDENTIFIER_FIXUP_1345.z = _RESERVED_IDENTIFIER_FIXUP_700.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_710 = _RESERVED_IDENTIFIER_FIXUP_1345.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1349;
        _RESERVED_IDENTIFIER_FIXUP_1349.x = _RESERVED_IDENTIFIER_FIXUP_710.x;
        _RESERVED_IDENTIFIER_FIXUP_1349.y = _RESERVED_IDENTIFIER_FIXUP_710.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_717 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_721 = _RESERVED_IDENTIFIER_FIXUP_717.y;
        _RESERVED_IDENTIFIER_FIXUP_1349.w = _RESERVED_IDENTIFIER_FIXUP_721;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_690.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_690.w;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1349.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_721;
        float _RESERVED_IDENTIFIER_FIXUP_732 = hdLod5(param_5, param_6).x + hdLod5(param_7, param_8).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1609 = vec4(_RESERVED_IDENTIFIER_FIXUP_672, _RESERVED_IDENTIFIER_FIXUP_702, _RESERVED_IDENTIFIER_FIXUP_700.y, _RESERVED_IDENTIFIER_FIXUP_732);
        vec2 _RESERVED_IDENTIFIER_FIXUP_739 = _RESERVED_IDENTIFIER_FIXUP_1609.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1362;
        _RESERVED_IDENTIFIER_FIXUP_1362.x = _RESERVED_IDENTIFIER_FIXUP_739.x;
        _RESERVED_IDENTIFIER_FIXUP_1362.y = _RESERVED_IDENTIFIER_FIXUP_739.y;
        _RESERVED_IDENTIFIER_FIXUP_1362.w = _RESERVED_IDENTIFIER_FIXUP_721;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1362.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_721;
        float _RESERVED_IDENTIFIER_FIXUP_761 = _RESERVED_IDENTIFIER_FIXUP_732 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_1609.w = _RESERVED_IDENTIFIER_FIXUP_761;
        vec2 _RESERVED_IDENTIFIER_FIXUP_768 = _RESERVED_IDENTIFIER_FIXUP_1609.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1375;
        _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_768.x;
        _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_768.y;
        _RESERVED_IDENTIFIER_FIXUP_1375.w = _RESERVED_IDENTIFIER_FIXUP_721;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1375.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_721;
        float _RESERVED_IDENTIFIER_FIXUP_790 = _RESERVED_IDENTIFIER_FIXUP_761 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_1609.w = _RESERVED_IDENTIFIER_FIXUP_790;
        vec2 _RESERVED_IDENTIFIER_FIXUP_797 = _RESERVED_IDENTIFIER_FIXUP_1609.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1388;
        _RESERVED_IDENTIFIER_FIXUP_1388.x = _RESERVED_IDENTIFIER_FIXUP_797.x;
        _RESERVED_IDENTIFIER_FIXUP_1388.y = _RESERVED_IDENTIFIER_FIXUP_797.y;
        _RESERVED_IDENTIFIER_FIXUP_1388.w = _RESERVED_IDENTIFIER_FIXUP_721;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1388.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_721;
        vec4 _RESERVED_IDENTIFIER_FIXUP_814 = hdLod5(param_13, param_14);
        float _RESERVED_IDENTIFIER_FIXUP_819 = _RESERVED_IDENTIFIER_FIXUP_790 + _RESERVED_IDENTIFIER_FIXUP_814.x;
        _RESERVED_IDENTIFIER_FIXUP_1609.y = _RESERVED_IDENTIFIER_FIXUP_819;
        float _RESERVED_IDENTIFIER_FIXUP_824 = (_RESERVED_IDENTIFIER_FIXUP_819 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1609.y = _RESERVED_IDENTIFIER_FIXUP_824;
        float _RESERVED_IDENTIFIER_FIXUP_831 = (_RESERVED_IDENTIFIER_FIXUP_672 * _RESERVED_IDENTIFIER_FIXUP_824) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1609.x = _RESERVED_IDENTIFIER_FIXUP_831;
        _RESERVED_IDENTIFIER_FIXUP_814.x = min(_RESERVED_IDENTIFIER_FIXUP_831, _RESERVED_IDENTIFIER_FIXUP_627.w);
        _RESERVED_IDENTIFIER_FIXUP_1602 = _RESERVED_IDENTIFIER_FIXUP_1609;
        _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_814;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_619.x = _RESERVED_IDENTIFIER_FIXUP_627.w;
        _RESERVED_IDENTIFIER_FIXUP_1602 = _RESERVED_IDENTIFIER_FIXUP_1331;
        _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_619;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1415 = _RESERVED_IDENTIFIER_FIXUP_1602;
    _RESERVED_IDENTIFIER_FIXUP_1415.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_860 = _RESERVED_IDENTIFIER_FIXUP_659.xyz * _RESERVED_IDENTIFIER_FIXUP_1415.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_659;
    _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_860.x;
    _RESERVED_IDENTIFIER_FIXUP_1417.y = _RESERVED_IDENTIFIER_FIXUP_860.y;
    _RESERVED_IDENTIFIER_FIXUP_1417.z = _RESERVED_IDENTIFIER_FIXUP_860.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_871 = _RESERVED_IDENTIFIER_FIXUP_1417.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1599).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1423 = _RESERVED_IDENTIFIER_FIXUP_1417;
    _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_871.x;
    _RESERVED_IDENTIFIER_FIXUP_1423.y = _RESERVED_IDENTIFIER_FIXUP_871.y;
    _RESERVED_IDENTIFIER_FIXUP_1423.z = _RESERVED_IDENTIFIER_FIXUP_871.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_882 = _RESERVED_IDENTIFIER_FIXUP_1423.xyz + _RESERVED_IDENTIFIER_FIXUP_1423.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1429 = _RESERVED_IDENTIFIER_FIXUP_1423;
    _RESERVED_IDENTIFIER_FIXUP_1429.x = _RESERVED_IDENTIFIER_FIXUP_882.x;
    _RESERVED_IDENTIFIER_FIXUP_1429.y = _RESERVED_IDENTIFIER_FIXUP_882.y;
    _RESERVED_IDENTIFIER_FIXUP_1429.z = _RESERVED_IDENTIFIER_FIXUP_882.z;
    _RESERVED_IDENTIFIER_FIXUP_1415.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1415.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1415.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_907 = (_RESERVED_IDENTIFIER_FIXUP_1415.xyz * _RESERVED_IDENTIFIER_FIXUP_1601.xxx) + _RESERVED_IDENTIFIER_FIXUP_1429.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1441 = _RESERVED_IDENTIFIER_FIXUP_1429;
    _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_907.x;
    _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_907.y;
    _RESERVED_IDENTIFIER_FIXUP_1441.z = _RESERVED_IDENTIFIER_FIXUP_907.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_920 = _RESERVED_IDENTIFIER_FIXUP_1441.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447 = _RESERVED_IDENTIFIER_FIXUP_1441;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_920.x;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_920.y;
    _RESERVED_IDENTIFIER_FIXUP_1447.z = _RESERVED_IDENTIFIER_FIXUP_920.z;
    vec2 param_15 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_971 = hdTex0(param_15);
    vec2 param_16 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_975 = hdTex1(param_16);
    vec2 param_17 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_979 = hdTex2(param_17);
    vec2 param_18 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_983 = hdTex3(param_18);
    vec2 param_19 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_987 = hdTex4(param_19);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1464;
    _RESERVED_IDENTIFIER_FIXUP_1464.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_987.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1001 = _RESERVED_IDENTIFIER_FIXUP_975 * _RESERVED_IDENTIFIER_FIXUP_987.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1019 = (_RESERVED_IDENTIFIER_FIXUP_983 * _RESERVED_IDENTIFIER_FIXUP_987.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_979 * _RESERVED_IDENTIFIER_FIXUP_987.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_971 * _RESERVED_IDENTIFIER_FIXUP_1464.xxxx) + _RESERVED_IDENTIFIER_FIXUP_1001));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1468 = _RESERVED_IDENTIFIER_FIXUP_1001;
    _RESERVED_IDENTIFIER_FIXUP_1468.x = _RESERVED_IDENTIFIER_FIXUP_666;
    float _RESERVED_IDENTIFIER_FIXUP_1032 = clamp((_RESERVED_IDENTIFIER_FIXUP_666 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1468.x = _RESERVED_IDENTIFIER_FIXUP_1032;
    float _RESERVED_IDENTIFIER_FIXUP_1038 = ((-_RESERVED_IDENTIFIER_FIXUP_1032) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_1038;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1606;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1605;
    if (_RESERVED_IDENTIFIER_FIXUP_1038 != (-_RESERVED_IDENTIFIER_FIXUP_1038))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1050 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1060 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1062 = _RESERVED_IDENTIFIER_FIXUP_1060.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_1468;
        _RESERVED_IDENTIFIER_FIXUP_1482.y = _RESERVED_IDENTIFIER_FIXUP_1062;
        _RESERVED_IDENTIFIER_FIXUP_1482.z = _RESERVED_IDENTIFIER_FIXUP_1060.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1070 = _RESERVED_IDENTIFIER_FIXUP_1482.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1486;
        _RESERVED_IDENTIFIER_FIXUP_1486.x = _RESERVED_IDENTIFIER_FIXUP_1070.x;
        _RESERVED_IDENTIFIER_FIXUP_1486.y = _RESERVED_IDENTIFIER_FIXUP_1070.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1077 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1081 = _RESERVED_IDENTIFIER_FIXUP_1077.y;
        _RESERVED_IDENTIFIER_FIXUP_1486.w = _RESERVED_IDENTIFIER_FIXUP_1081;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1050.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1050.w;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1486.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1081;
        float _RESERVED_IDENTIFIER_FIXUP_1092 = hdLod5(param_20, param_21).x + hdLod5(param_22, param_23).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1611 = vec4(_RESERVED_IDENTIFIER_FIXUP_1032, _RESERVED_IDENTIFIER_FIXUP_1062, _RESERVED_IDENTIFIER_FIXUP_1060.y, _RESERVED_IDENTIFIER_FIXUP_1092);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1099 = _RESERVED_IDENTIFIER_FIXUP_1611.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1499;
        _RESERVED_IDENTIFIER_FIXUP_1499.x = _RESERVED_IDENTIFIER_FIXUP_1099.x;
        _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_1099.y;
        _RESERVED_IDENTIFIER_FIXUP_1499.w = _RESERVED_IDENTIFIER_FIXUP_1081;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1499.xy;
        float param_25 = _RESERVED_IDENTIFIER_FIXUP_1081;
        float _RESERVED_IDENTIFIER_FIXUP_1121 = _RESERVED_IDENTIFIER_FIXUP_1092 + hdLod5(param_24, param_25).x;
        _RESERVED_IDENTIFIER_FIXUP_1611.w = _RESERVED_IDENTIFIER_FIXUP_1121;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1128 = _RESERVED_IDENTIFIER_FIXUP_1611.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1512;
        _RESERVED_IDENTIFIER_FIXUP_1512.x = _RESERVED_IDENTIFIER_FIXUP_1128.x;
        _RESERVED_IDENTIFIER_FIXUP_1512.y = _RESERVED_IDENTIFIER_FIXUP_1128.y;
        _RESERVED_IDENTIFIER_FIXUP_1512.w = _RESERVED_IDENTIFIER_FIXUP_1081;
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1512.xy;
        float param_27 = _RESERVED_IDENTIFIER_FIXUP_1081;
        float _RESERVED_IDENTIFIER_FIXUP_1150 = _RESERVED_IDENTIFIER_FIXUP_1121 + hdLod5(param_26, param_27).x;
        _RESERVED_IDENTIFIER_FIXUP_1611.w = _RESERVED_IDENTIFIER_FIXUP_1150;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1157 = _RESERVED_IDENTIFIER_FIXUP_1611.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1525;
        _RESERVED_IDENTIFIER_FIXUP_1525.x = _RESERVED_IDENTIFIER_FIXUP_1157.x;
        _RESERVED_IDENTIFIER_FIXUP_1525.y = _RESERVED_IDENTIFIER_FIXUP_1157.y;
        _RESERVED_IDENTIFIER_FIXUP_1525.w = _RESERVED_IDENTIFIER_FIXUP_1081;
        vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_1525.xy;
        float param_29 = _RESERVED_IDENTIFIER_FIXUP_1081;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1174 = hdLod5(param_28, param_29);
        float _RESERVED_IDENTIFIER_FIXUP_1179 = _RESERVED_IDENTIFIER_FIXUP_1150 + _RESERVED_IDENTIFIER_FIXUP_1174.x;
        _RESERVED_IDENTIFIER_FIXUP_1611.y = _RESERVED_IDENTIFIER_FIXUP_1179;
        float _RESERVED_IDENTIFIER_FIXUP_1184 = (_RESERVED_IDENTIFIER_FIXUP_1179 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1611.y = _RESERVED_IDENTIFIER_FIXUP_1184;
        float _RESERVED_IDENTIFIER_FIXUP_1191 = (_RESERVED_IDENTIFIER_FIXUP_1032 * _RESERVED_IDENTIFIER_FIXUP_1184) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1611.x = _RESERVED_IDENTIFIER_FIXUP_1191;
        _RESERVED_IDENTIFIER_FIXUP_1174.x = min(_RESERVED_IDENTIFIER_FIXUP_1191, _RESERVED_IDENTIFIER_FIXUP_987.w);
        _RESERVED_IDENTIFIER_FIXUP_1606 = _RESERVED_IDENTIFIER_FIXUP_1611;
        _RESERVED_IDENTIFIER_FIXUP_1605 = _RESERVED_IDENTIFIER_FIXUP_1174;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_979.x = _RESERVED_IDENTIFIER_FIXUP_987.w;
        _RESERVED_IDENTIFIER_FIXUP_1606 = _RESERVED_IDENTIFIER_FIXUP_1468;
        _RESERVED_IDENTIFIER_FIXUP_1605 = _RESERVED_IDENTIFIER_FIXUP_979;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1207 = (_RESERVED_IDENTIFIER_FIXUP_1605.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1550 = _RESERVED_IDENTIFIER_FIXUP_1606;
    _RESERVED_IDENTIFIER_FIXUP_1550.x = _RESERVED_IDENTIFIER_FIXUP_1207;
    _RESERVED_IDENTIFIER_FIXUP_1550.x = _RESERVED_IDENTIFIER_FIXUP_1207;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1220 = _RESERVED_IDENTIFIER_FIXUP_1019.xyz * _RESERVED_IDENTIFIER_FIXUP_1550.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_1019;
    _RESERVED_IDENTIFIER_FIXUP_1556.x = _RESERVED_IDENTIFIER_FIXUP_1220.x;
    _RESERVED_IDENTIFIER_FIXUP_1556.y = _RESERVED_IDENTIFIER_FIXUP_1220.y;
    _RESERVED_IDENTIFIER_FIXUP_1556.z = _RESERVED_IDENTIFIER_FIXUP_1220.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1556.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1562 = _RESERVED_IDENTIFIER_FIXUP_1556;
    _RESERVED_IDENTIFIER_FIXUP_1562.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
    _RESERVED_IDENTIFIER_FIXUP_1562.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
    _RESERVED_IDENTIFIER_FIXUP_1562.z = _RESERVED_IDENTIFIER_FIXUP_1231.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1242 = _RESERVED_IDENTIFIER_FIXUP_1562.xyz + _RESERVED_IDENTIFIER_FIXUP_1562.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1562;
    _RESERVED_IDENTIFIER_FIXUP_1568.x = _RESERVED_IDENTIFIER_FIXUP_1242.x;
    _RESERVED_IDENTIFIER_FIXUP_1568.y = _RESERVED_IDENTIFIER_FIXUP_1242.y;
    _RESERVED_IDENTIFIER_FIXUP_1568.z = _RESERVED_IDENTIFIER_FIXUP_1242.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1253 = _RESERVED_IDENTIFIER_FIXUP_1568.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1550.x = _RESERVED_IDENTIFIER_FIXUP_1253.x;
    _RESERVED_IDENTIFIER_FIXUP_1550.y = _RESERVED_IDENTIFIER_FIXUP_1253.y;
    _RESERVED_IDENTIFIER_FIXUP_1550.z = _RESERVED_IDENTIFIER_FIXUP_1253.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1267 = (_RESERVED_IDENTIFIER_FIXUP_1550.xyz * _RESERVED_IDENTIFIER_FIXUP_1605.xxx) + _RESERVED_IDENTIFIER_FIXUP_1568.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1580 = _RESERVED_IDENTIFIER_FIXUP_1568;
    _RESERVED_IDENTIFIER_FIXUP_1580.x = _RESERVED_IDENTIFIER_FIXUP_1267.x;
    _RESERVED_IDENTIFIER_FIXUP_1580.y = _RESERVED_IDENTIFIER_FIXUP_1267.y;
    _RESERVED_IDENTIFIER_FIXUP_1580.z = _RESERVED_IDENTIFIER_FIXUP_1267.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1280 = _RESERVED_IDENTIFIER_FIXUP_1580.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1586 = _RESERVED_IDENTIFIER_FIXUP_1580;
    _RESERVED_IDENTIFIER_FIXUP_1586.x = _RESERVED_IDENTIFIER_FIXUP_1280.x;
    _RESERVED_IDENTIFIER_FIXUP_1586.y = _RESERVED_IDENTIFIER_FIXUP_1280.y;
    _RESERVED_IDENTIFIER_FIXUP_1586.z = _RESERVED_IDENTIFIER_FIXUP_1280.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1586.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_474 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_483;
    if (_RESERVED_IDENTIFIER_FIXUP_474)
    {
        _RESERVED_IDENTIFIER_FIXUP_483 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_483 = _RESERVED_IDENTIFIER_FIXUP_474;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_483)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_520 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1447.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_547 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1317;
    if (_RESERVED_IDENTIFIER_FIXUP_520 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1317 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_520), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_547);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1317 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_547);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1317;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1207);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    vec2 param_4 = v4.wz;
    r4 = hdTex4(param_4);
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
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        vec2 hdB161 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB161.x;
        r1.z = hdB161.y;
        vec2 hdB183 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB183.x;
        r3.y = hdB183.y;
        vec2 hdB191 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB191.x;
        r3.w = hdB191.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r1.w = r2.x + r3.x;
        vec2 hdB214 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB214.x;
        r2.y = hdB214.y;
        vec2 hdB221 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB221.x;
        r2.w = hdB221.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB244 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB244.x;
        r2.y = hdB244.y;
        vec2 hdB251 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB251.x;
        r2.w = hdB251.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.w += r2.x;
        vec2 hdB274 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB274.x;
        r2.y = hdB274.y;
        vec2 hdB281 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB281.x;
        r2.w = hdB281.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
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
    vec4 hdB329 = r0;
    vec3 hdB333 = hdB329.xyz * r1.xxx;
    r0.x = hdB333.x;
    r0.y = hdB333.y;
    r0.z = hdB333.z;
    vec4 hdB340 = r0;
    vec3 hdB344 = hdB340.xyz * v0.xyz;
    r0.x = hdB344.x;
    r0.y = hdB344.y;
    r0.z = hdB344.z;
    vec4 hdB351 = r0;
    vec4 hdB353 = r0;
    vec3 hdB355 = hdB351.xyz + hdB353.xyz;
    r0.x = hdB355.x;
    r0.y = hdB355.y;
    r0.z = hdB355.z;
    vec3 hdB366 = r0.www * v1.xyz;
    r1.x = hdB366.x;
    r1.y = hdB366.y;
    r1.z = hdB366.z;
    vec4 hdB378 = r0;
    vec3 hdB380 = (r1.xyz * r2.xxx) + hdB378.xyz;
    r0.x = hdB380.x;
    r0.y = hdB380.y;
    r0.z = hdB380.z;
    vec4 hdB387 = r0;
    vec3 hdB394 = hdB387.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB394.x;
    r0.y = hdB394.y;
    r0.z = hdB394.z;
    vec3 hdB409 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB409.x;
    oC0.y = hdB409.y;
    oC0.z = hdB409.z;
    oC0.w = 1.0;
    bool hdB422 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB430;
    if (hdB422)
    {
        hdB430 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB430 = hdB422;
    }
    if (hdB430)
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
    bool _1593 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1603;
    if (_1593)
    {
        _1603 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1603 = _1593;
    }
    if (_1603)
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
        bool _1628 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1643;
        if (!_1628)
        {
            _1643 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1643 = _1628;
        }
        if (_1643)
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
