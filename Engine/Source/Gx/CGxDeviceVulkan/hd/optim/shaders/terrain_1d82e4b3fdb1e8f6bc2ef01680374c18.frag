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
float _RESERVED_IDENTIFIER_FIXUP_1562;
vec4 _RESERVED_IDENTIFIER_FIXUP_1563;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_599 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_603 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_607 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_611 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_615 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_625 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_599, _RESERVED_IDENTIFIER_FIXUP_603, _RESERVED_IDENTIFIER_FIXUP_615.xxxx), _RESERVED_IDENTIFIER_FIXUP_607, _RESERVED_IDENTIFIER_FIXUP_615.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_630 = mix(_RESERVED_IDENTIFIER_FIXUP_625, _RESERVED_IDENTIFIER_FIXUP_611, _RESERVED_IDENTIFIER_FIXUP_615.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_637 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_625;
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_637;
    float _RESERVED_IDENTIFIER_FIXUP_643 = clamp((_RESERVED_IDENTIFIER_FIXUP_637 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_643;
    float _RESERVED_IDENTIFIER_FIXUP_649 = ((-_RESERVED_IDENTIFIER_FIXUP_643) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_649;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1565;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564;
    if (_RESERVED_IDENTIFIER_FIXUP_649 != (-_RESERVED_IDENTIFIER_FIXUP_649))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_661 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1300 = _RESERVED_IDENTIFIER_FIXUP_1287;
        _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_661.x;
        _RESERVED_IDENTIFIER_FIXUP_1300.z = _RESERVED_IDENTIFIER_FIXUP_661.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_671 = _RESERVED_IDENTIFIER_FIXUP_1300.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1304;
        _RESERVED_IDENTIFIER_FIXUP_1304.x = _RESERVED_IDENTIFIER_FIXUP_671.x;
        _RESERVED_IDENTIFIER_FIXUP_1304.y = _RESERVED_IDENTIFIER_FIXUP_671.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_681 = _RESERVED_IDENTIFIER_FIXUP_1300.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1308;
        _RESERVED_IDENTIFIER_FIXUP_1308.x = _RESERVED_IDENTIFIER_FIXUP_681.x;
        _RESERVED_IDENTIFIER_FIXUP_1308.y = _RESERVED_IDENTIFIER_FIXUP_681.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_691 = _RESERVED_IDENTIFIER_FIXUP_1300.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1312;
        _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_691.x;
        _RESERVED_IDENTIFIER_FIXUP_1312.y = _RESERVED_IDENTIFIER_FIXUP_691.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_701 = _RESERVED_IDENTIFIER_FIXUP_1300.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1316;
        _RESERVED_IDENTIFIER_FIXUP_1316.x = _RESERVED_IDENTIFIER_FIXUP_701.x;
        _RESERVED_IDENTIFIER_FIXUP_1316.y = _RESERVED_IDENTIFIER_FIXUP_701.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_709 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_709.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_709.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_715 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_1304.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1308.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1312.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1316.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1304.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_715.y = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1308.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_715.z = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1312.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_715.w = hdLod5(param_11, param_12).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_772 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_715 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1316.xy;
        float param_14 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_778 = hdLod5(param_13, param_14).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_778;
        float _RESERVED_IDENTIFIER_FIXUP_783 = float(_RESERVED_IDENTIFIER_FIXUP_778 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_783;
        float _RESERVED_IDENTIFIER_FIXUP_786 = dot(_RESERVED_IDENTIFIER_FIXUP_772, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1300.z = _RESERVED_IDENTIFIER_FIXUP_786;
        float _RESERVED_IDENTIFIER_FIXUP_792 = _RESERVED_IDENTIFIER_FIXUP_783 + _RESERVED_IDENTIFIER_FIXUP_786;
        _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_792;
        float _RESERVED_IDENTIFIER_FIXUP_797 = (_RESERVED_IDENTIFIER_FIXUP_792 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_797;
        float _RESERVED_IDENTIFIER_FIXUP_804 = (_RESERVED_IDENTIFIER_FIXUP_643 * _RESERVED_IDENTIFIER_FIXUP_797) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1300.x = _RESERVED_IDENTIFIER_FIXUP_804;
        _RESERVED_IDENTIFIER_FIXUP_772.x = min(_RESERVED_IDENTIFIER_FIXUP_804, _RESERVED_IDENTIFIER_FIXUP_615.w);
        _RESERVED_IDENTIFIER_FIXUP_1565 = _RESERVED_IDENTIFIER_FIXUP_1300;
        _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_772;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_607.x = _RESERVED_IDENTIFIER_FIXUP_615.w;
        _RESERVED_IDENTIFIER_FIXUP_1565 = _RESERVED_IDENTIFIER_FIXUP_1287;
        _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_607;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1377 = _RESERVED_IDENTIFIER_FIXUP_1565;
    _RESERVED_IDENTIFIER_FIXUP_1377.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_833 = _RESERVED_IDENTIFIER_FIXUP_630.xyz * _RESERVED_IDENTIFIER_FIXUP_1377.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_1377;
    _RESERVED_IDENTIFIER_FIXUP_1379.x = _RESERVED_IDENTIFIER_FIXUP_833.x;
    _RESERVED_IDENTIFIER_FIXUP_1379.y = _RESERVED_IDENTIFIER_FIXUP_833.y;
    _RESERVED_IDENTIFIER_FIXUP_1379.z = _RESERVED_IDENTIFIER_FIXUP_833.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_844 = _RESERVED_IDENTIFIER_FIXUP_1379.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1562).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1385 = _RESERVED_IDENTIFIER_FIXUP_1379;
    _RESERVED_IDENTIFIER_FIXUP_1385.x = _RESERVED_IDENTIFIER_FIXUP_844.x;
    _RESERVED_IDENTIFIER_FIXUP_1385.y = _RESERVED_IDENTIFIER_FIXUP_844.y;
    _RESERVED_IDENTIFIER_FIXUP_1385.z = _RESERVED_IDENTIFIER_FIXUP_844.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_855 = _RESERVED_IDENTIFIER_FIXUP_1385.xyz + _RESERVED_IDENTIFIER_FIXUP_1385.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_1385;
    _RESERVED_IDENTIFIER_FIXUP_1391.x = _RESERVED_IDENTIFIER_FIXUP_855.x;
    _RESERVED_IDENTIFIER_FIXUP_1391.y = _RESERVED_IDENTIFIER_FIXUP_855.y;
    _RESERVED_IDENTIFIER_FIXUP_1391.z = _RESERVED_IDENTIFIER_FIXUP_855.z;
    _RESERVED_IDENTIFIER_FIXUP_630.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_630.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_630.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_880 = (_RESERVED_IDENTIFIER_FIXUP_630.xyz * _RESERVED_IDENTIFIER_FIXUP_1564.xxx) + _RESERVED_IDENTIFIER_FIXUP_1391.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1403 = _RESERVED_IDENTIFIER_FIXUP_1391;
    _RESERVED_IDENTIFIER_FIXUP_1403.x = _RESERVED_IDENTIFIER_FIXUP_880.x;
    _RESERVED_IDENTIFIER_FIXUP_1403.y = _RESERVED_IDENTIFIER_FIXUP_880.y;
    _RESERVED_IDENTIFIER_FIXUP_1403.z = _RESERVED_IDENTIFIER_FIXUP_880.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_893 = _RESERVED_IDENTIFIER_FIXUP_1403.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1409 = _RESERVED_IDENTIFIER_FIXUP_1403;
    _RESERVED_IDENTIFIER_FIXUP_1409.x = _RESERVED_IDENTIFIER_FIXUP_893.x;
    _RESERVED_IDENTIFIER_FIXUP_1409.y = _RESERVED_IDENTIFIER_FIXUP_893.y;
    _RESERVED_IDENTIFIER_FIXUP_1409.z = _RESERVED_IDENTIFIER_FIXUP_893.z;
    vec2 param_15 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_946 = hdTex0(param_15);
    vec2 param_16 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_950 = hdTex1(param_16);
    vec2 param_17 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_954 = hdTex2(param_17);
    vec2 param_18 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_958 = hdTex3(param_18);
    vec2 param_19 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_962 = hdTex4(param_19);
    vec4 _RESERVED_IDENTIFIER_FIXUP_972 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_946, _RESERVED_IDENTIFIER_FIXUP_950, _RESERVED_IDENTIFIER_FIXUP_962.xxxx), _RESERVED_IDENTIFIER_FIXUP_954, _RESERVED_IDENTIFIER_FIXUP_962.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_977 = mix(_RESERVED_IDENTIFIER_FIXUP_972, _RESERVED_IDENTIFIER_FIXUP_958, _RESERVED_IDENTIFIER_FIXUP_962.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1425 = _RESERVED_IDENTIFIER_FIXUP_972;
    _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_637;
    float _RESERVED_IDENTIFIER_FIXUP_990 = clamp((_RESERVED_IDENTIFIER_FIXUP_637 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_990;
    float _RESERVED_IDENTIFIER_FIXUP_996 = ((-_RESERVED_IDENTIFIER_FIXUP_990) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1425.y = _RESERVED_IDENTIFIER_FIXUP_996;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1569;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1568;
    if (_RESERVED_IDENTIFIER_FIXUP_996 != (-_RESERVED_IDENTIFIER_FIXUP_996))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1008 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1438 = _RESERVED_IDENTIFIER_FIXUP_1425;
        _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_1008.x;
        _RESERVED_IDENTIFIER_FIXUP_1438.z = _RESERVED_IDENTIFIER_FIXUP_1008.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1018 = _RESERVED_IDENTIFIER_FIXUP_1438.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1442;
        _RESERVED_IDENTIFIER_FIXUP_1442.x = _RESERVED_IDENTIFIER_FIXUP_1018.x;
        _RESERVED_IDENTIFIER_FIXUP_1442.y = _RESERVED_IDENTIFIER_FIXUP_1018.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1028 = _RESERVED_IDENTIFIER_FIXUP_1438.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1446;
        _RESERVED_IDENTIFIER_FIXUP_1446.x = _RESERVED_IDENTIFIER_FIXUP_1028.x;
        _RESERVED_IDENTIFIER_FIXUP_1446.y = _RESERVED_IDENTIFIER_FIXUP_1028.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1038 = _RESERVED_IDENTIFIER_FIXUP_1438.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1450;
        _RESERVED_IDENTIFIER_FIXUP_1450.x = _RESERVED_IDENTIFIER_FIXUP_1038.x;
        _RESERVED_IDENTIFIER_FIXUP_1450.y = _RESERVED_IDENTIFIER_FIXUP_1038.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1048 = _RESERVED_IDENTIFIER_FIXUP_1438.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1454;
        _RESERVED_IDENTIFIER_FIXUP_1454.x = _RESERVED_IDENTIFIER_FIXUP_1048.x;
        _RESERVED_IDENTIFIER_FIXUP_1454.y = _RESERVED_IDENTIFIER_FIXUP_1048.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1056 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1056.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1056.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1062 = hdLod5(param_20, param_21);
        _RESERVED_IDENTIFIER_FIXUP_1442.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1446.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1450.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1454.w = 0.0;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1442.xy;
        float param_23 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1062.y = hdLod5(param_22, param_23).x;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1446.xy;
        float param_25 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1062.z = hdLod5(param_24, param_25).x;
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1450.xy;
        float param_27 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1062.w = hdLod5(param_26, param_27).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1119 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1062 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_1454.xy;
        float param_29 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1125 = hdLod5(param_28, param_29).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_1125;
        float _RESERVED_IDENTIFIER_FIXUP_1130 = float(_RESERVED_IDENTIFIER_FIXUP_1125 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_1130;
        float _RESERVED_IDENTIFIER_FIXUP_1133 = dot(_RESERVED_IDENTIFIER_FIXUP_1119, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1438.z = _RESERVED_IDENTIFIER_FIXUP_1133;
        float _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1130 + _RESERVED_IDENTIFIER_FIXUP_1133;
        _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_1139;
        float _RESERVED_IDENTIFIER_FIXUP_1144 = (_RESERVED_IDENTIFIER_FIXUP_1139 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_1144;
        float _RESERVED_IDENTIFIER_FIXUP_1151 = (_RESERVED_IDENTIFIER_FIXUP_990 * _RESERVED_IDENTIFIER_FIXUP_1144) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1438.x = _RESERVED_IDENTIFIER_FIXUP_1151;
        _RESERVED_IDENTIFIER_FIXUP_1119.x = min(_RESERVED_IDENTIFIER_FIXUP_1151, _RESERVED_IDENTIFIER_FIXUP_962.w);
        _RESERVED_IDENTIFIER_FIXUP_1569 = _RESERVED_IDENTIFIER_FIXUP_1438;
        _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1119;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_954.x = _RESERVED_IDENTIFIER_FIXUP_962.w;
        _RESERVED_IDENTIFIER_FIXUP_1569 = _RESERVED_IDENTIFIER_FIXUP_1425;
        _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_954;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1167 = (_RESERVED_IDENTIFIER_FIXUP_1568.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_1569;
    _RESERVED_IDENTIFIER_FIXUP_1513.x = _RESERVED_IDENTIFIER_FIXUP_1167;
    _RESERVED_IDENTIFIER_FIXUP_1513.x = _RESERVED_IDENTIFIER_FIXUP_1167;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_977.xyz * _RESERVED_IDENTIFIER_FIXUP_1513.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1519 = _RESERVED_IDENTIFIER_FIXUP_1513;
    _RESERVED_IDENTIFIER_FIXUP_1519.x = _RESERVED_IDENTIFIER_FIXUP_1180.x;
    _RESERVED_IDENTIFIER_FIXUP_1519.y = _RESERVED_IDENTIFIER_FIXUP_1180.y;
    _RESERVED_IDENTIFIER_FIXUP_1519.z = _RESERVED_IDENTIFIER_FIXUP_1180.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1191 = _RESERVED_IDENTIFIER_FIXUP_1519.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_1519;
    _RESERVED_IDENTIFIER_FIXUP_1525.x = _RESERVED_IDENTIFIER_FIXUP_1191.x;
    _RESERVED_IDENTIFIER_FIXUP_1525.y = _RESERVED_IDENTIFIER_FIXUP_1191.y;
    _RESERVED_IDENTIFIER_FIXUP_1525.z = _RESERVED_IDENTIFIER_FIXUP_1191.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1525.xyz + _RESERVED_IDENTIFIER_FIXUP_1525.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_1525;
    _RESERVED_IDENTIFIER_FIXUP_1531.x = _RESERVED_IDENTIFIER_FIXUP_1202.x;
    _RESERVED_IDENTIFIER_FIXUP_1531.y = _RESERVED_IDENTIFIER_FIXUP_1202.y;
    _RESERVED_IDENTIFIER_FIXUP_1531.z = _RESERVED_IDENTIFIER_FIXUP_1202.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1213 = _RESERVED_IDENTIFIER_FIXUP_977.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1537 = _RESERVED_IDENTIFIER_FIXUP_977;
    _RESERVED_IDENTIFIER_FIXUP_1537.x = _RESERVED_IDENTIFIER_FIXUP_1213.x;
    _RESERVED_IDENTIFIER_FIXUP_1537.y = _RESERVED_IDENTIFIER_FIXUP_1213.y;
    _RESERVED_IDENTIFIER_FIXUP_1537.z = _RESERVED_IDENTIFIER_FIXUP_1213.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1227 = (_RESERVED_IDENTIFIER_FIXUP_1537.xyz * _RESERVED_IDENTIFIER_FIXUP_1568.xxx) + _RESERVED_IDENTIFIER_FIXUP_1531.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_1531;
    _RESERVED_IDENTIFIER_FIXUP_1543.x = _RESERVED_IDENTIFIER_FIXUP_1227.x;
    _RESERVED_IDENTIFIER_FIXUP_1543.y = _RESERVED_IDENTIFIER_FIXUP_1227.y;
    _RESERVED_IDENTIFIER_FIXUP_1543.z = _RESERVED_IDENTIFIER_FIXUP_1227.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1240 = _RESERVED_IDENTIFIER_FIXUP_1543.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_1543;
    _RESERVED_IDENTIFIER_FIXUP_1549.x = _RESERVED_IDENTIFIER_FIXUP_1240.x;
    _RESERVED_IDENTIFIER_FIXUP_1549.y = _RESERVED_IDENTIFIER_FIXUP_1240.y;
    _RESERVED_IDENTIFIER_FIXUP_1549.z = _RESERVED_IDENTIFIER_FIXUP_1240.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1549.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_461 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_470;
    if (_RESERVED_IDENTIFIER_FIXUP_461)
    {
        _RESERVED_IDENTIFIER_FIXUP_470 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_470 = _RESERVED_IDENTIFIER_FIXUP_461;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_470)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_507 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1409.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_534 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1277;
    if (_RESERVED_IDENTIFIER_FIXUP_507 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1277 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_507), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_534);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1277 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_534);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1277;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1167);
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
    vec2 param_4 = v4.wz;
    r4 = hdTex4(param_4);
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB130 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB130.x;
        r0.z = hdB130.y;
        vec2 hdB152 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB152.x;
        r2.y = hdB152.y;
        vec2 hdB163 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB163.x;
        r3.y = hdB163.y;
        vec2 hdB174 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB174.x;
        r5.y = hdB174.y;
        vec2 hdB185 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB185.x;
        r6.y = hdB185.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r7.xy;
        float param_6 = r7.w;
        r7 = hdLod5(param_5, param_6);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_11 = r5.xy;
        float param_12 = r5.w;
        r5 = hdLod5(param_11, param_12);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod5(param_13, param_14);
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
    vec4 hdB318 = r0;
    vec3 hdB320 = r1.xyz * hdB318.xxx;
    r0.x = hdB320.x;
    r0.y = hdB320.y;
    r0.z = hdB320.z;
    vec4 hdB327 = r0;
    vec3 hdB331 = hdB327.xyz * v0.xyz;
    r0.x = hdB331.x;
    r0.y = hdB331.y;
    r0.z = hdB331.z;
    vec4 hdB338 = r0;
    vec4 hdB340 = r0;
    vec3 hdB342 = hdB338.xyz + hdB340.xyz;
    r0.x = hdB342.x;
    r0.y = hdB342.y;
    r0.z = hdB342.z;
    vec4 hdB349 = r1;
    vec3 hdB353 = hdB349.www * v1.xyz;
    r1.x = hdB353.x;
    r1.y = hdB353.y;
    r1.z = hdB353.z;
    vec4 hdB365 = r0;
    vec3 hdB367 = (r1.xyz * r2.xxx) + hdB365.xyz;
    r0.x = hdB367.x;
    r0.y = hdB367.y;
    r0.z = hdB367.z;
    vec4 hdB374 = r0;
    vec3 hdB381 = hdB374.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB381.x;
    r0.y = hdB381.y;
    r0.z = hdB381.z;
    vec3 hdB396 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB396.x;
    oC0.y = hdB396.y;
    oC0.z = hdB396.z;
    oC0.w = 1.0;
    bool hdB409 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB417;
    if (hdB409)
    {
        hdB417 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB417 = hdB409;
    }
    if (hdB417)
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
    bool _1517 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1527;
    if (_1517)
    {
        _1527 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1527 = _1517;
    }
    if (_1527)
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
        bool _1552 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1567;
        if (!_1552)
        {
            _1567 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1567 = _1552;
        }
        if (_1567)
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
