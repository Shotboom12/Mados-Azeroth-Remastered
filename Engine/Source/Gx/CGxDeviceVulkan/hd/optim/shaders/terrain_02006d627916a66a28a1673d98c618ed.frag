#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1510;
vec4 _RESERVED_IDENTIFIER_FIXUP_1511;


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
    bool _49 = hdOverride >= 0;
    bool _68;
    if (_49)
    {
        _68 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _68 = _49;
    }
    vec4 _69;
    if (_68)
    {
        _69 = vec4(float(hdOverride));
    }
    else
    {
        _69 = value;
    }
    return _69;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _86 = hdOverride >= 0;
    bool _96;
    if (_86)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _96 = _86;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _114 = hdOverride >= 0;
    bool _124;
    if (_114)
    {
        _124 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_584 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_588 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_592 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_596 = hdTex3(param_2);
    vec4 _RESERVED_IDENTIFIER_FIXUP_606 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_584, _RESERVED_IDENTIFIER_FIXUP_588, _RESERVED_IDENTIFIER_FIXUP_596.xxxx), _RESERVED_IDENTIFIER_FIXUP_592, _RESERVED_IDENTIFIER_FIXUP_596.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_613 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1247 = _RESERVED_IDENTIFIER_FIXUP_588;
    _RESERVED_IDENTIFIER_FIXUP_1247.x = _RESERVED_IDENTIFIER_FIXUP_613;
    float _RESERVED_IDENTIFIER_FIXUP_619 = clamp((_RESERVED_IDENTIFIER_FIXUP_613 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1247.x = _RESERVED_IDENTIFIER_FIXUP_619;
    float _RESERVED_IDENTIFIER_FIXUP_625 = ((-_RESERVED_IDENTIFIER_FIXUP_619) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1247.y = _RESERVED_IDENTIFIER_FIXUP_625;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1513;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1512;
    if (_RESERVED_IDENTIFIER_FIXUP_625 != (-_RESERVED_IDENTIFIER_FIXUP_625))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_637 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_647 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_649 = _RESERVED_IDENTIFIER_FIXUP_647.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_1247;
        _RESERVED_IDENTIFIER_FIXUP_1261.y = _RESERVED_IDENTIFIER_FIXUP_649;
        _RESERVED_IDENTIFIER_FIXUP_1261.z = _RESERVED_IDENTIFIER_FIXUP_647.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_657 = _RESERVED_IDENTIFIER_FIXUP_1261.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1265;
        _RESERVED_IDENTIFIER_FIXUP_1265.x = _RESERVED_IDENTIFIER_FIXUP_657.x;
        _RESERVED_IDENTIFIER_FIXUP_1265.y = _RESERVED_IDENTIFIER_FIXUP_657.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_664 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_668 = _RESERVED_IDENTIFIER_FIXUP_664.y;
        _RESERVED_IDENTIFIER_FIXUP_1265.w = _RESERVED_IDENTIFIER_FIXUP_668;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_637.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_637.w;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1265.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_668;
        float _RESERVED_IDENTIFIER_FIXUP_679 = hdLod5(param_3, param_4).x + hdLod5(param_5, param_6).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1520 = vec4(_RESERVED_IDENTIFIER_FIXUP_619, _RESERVED_IDENTIFIER_FIXUP_649, _RESERVED_IDENTIFIER_FIXUP_647.y, _RESERVED_IDENTIFIER_FIXUP_679);
        vec2 _RESERVED_IDENTIFIER_FIXUP_686 = _RESERVED_IDENTIFIER_FIXUP_1520.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1278;
        _RESERVED_IDENTIFIER_FIXUP_1278.x = _RESERVED_IDENTIFIER_FIXUP_686.x;
        _RESERVED_IDENTIFIER_FIXUP_1278.y = _RESERVED_IDENTIFIER_FIXUP_686.y;
        _RESERVED_IDENTIFIER_FIXUP_1278.w = _RESERVED_IDENTIFIER_FIXUP_668;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1278.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_668;
        float _RESERVED_IDENTIFIER_FIXUP_708 = _RESERVED_IDENTIFIER_FIXUP_679 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_1520.w = _RESERVED_IDENTIFIER_FIXUP_708;
        vec2 _RESERVED_IDENTIFIER_FIXUP_715 = _RESERVED_IDENTIFIER_FIXUP_1520.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1291;
        _RESERVED_IDENTIFIER_FIXUP_1291.x = _RESERVED_IDENTIFIER_FIXUP_715.x;
        _RESERVED_IDENTIFIER_FIXUP_1291.y = _RESERVED_IDENTIFIER_FIXUP_715.y;
        _RESERVED_IDENTIFIER_FIXUP_1291.w = _RESERVED_IDENTIFIER_FIXUP_668;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1291.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_668;
        float _RESERVED_IDENTIFIER_FIXUP_737 = _RESERVED_IDENTIFIER_FIXUP_708 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_1520.w = _RESERVED_IDENTIFIER_FIXUP_737;
        vec2 _RESERVED_IDENTIFIER_FIXUP_744 = _RESERVED_IDENTIFIER_FIXUP_1520.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1304;
        _RESERVED_IDENTIFIER_FIXUP_1304.x = _RESERVED_IDENTIFIER_FIXUP_744.x;
        _RESERVED_IDENTIFIER_FIXUP_1304.y = _RESERVED_IDENTIFIER_FIXUP_744.y;
        _RESERVED_IDENTIFIER_FIXUP_1304.w = _RESERVED_IDENTIFIER_FIXUP_668;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1304.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_668;
        vec4 _RESERVED_IDENTIFIER_FIXUP_761 = hdLod5(param_11, param_12);
        float _RESERVED_IDENTIFIER_FIXUP_766 = _RESERVED_IDENTIFIER_FIXUP_737 + _RESERVED_IDENTIFIER_FIXUP_761.x;
        _RESERVED_IDENTIFIER_FIXUP_1520.y = _RESERVED_IDENTIFIER_FIXUP_766;
        float _RESERVED_IDENTIFIER_FIXUP_771 = (_RESERVED_IDENTIFIER_FIXUP_766 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1520.y = _RESERVED_IDENTIFIER_FIXUP_771;
        float _RESERVED_IDENTIFIER_FIXUP_778 = (_RESERVED_IDENTIFIER_FIXUP_619 * _RESERVED_IDENTIFIER_FIXUP_771) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1520.x = _RESERVED_IDENTIFIER_FIXUP_778;
        _RESERVED_IDENTIFIER_FIXUP_761.x = min(_RESERVED_IDENTIFIER_FIXUP_778, _RESERVED_IDENTIFIER_FIXUP_596.w);
        _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_1520;
        _RESERVED_IDENTIFIER_FIXUP_1512 = _RESERVED_IDENTIFIER_FIXUP_761;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_592.x = _RESERVED_IDENTIFIER_FIXUP_596.w;
        _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_1247;
        _RESERVED_IDENTIFIER_FIXUP_1512 = _RESERVED_IDENTIFIER_FIXUP_592;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1331 = _RESERVED_IDENTIFIER_FIXUP_1513;
    _RESERVED_IDENTIFIER_FIXUP_1331.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_807 = _RESERVED_IDENTIFIER_FIXUP_606.xyz * _RESERVED_IDENTIFIER_FIXUP_1331.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1333 = _RESERVED_IDENTIFIER_FIXUP_606;
    _RESERVED_IDENTIFIER_FIXUP_1333.x = _RESERVED_IDENTIFIER_FIXUP_807.x;
    _RESERVED_IDENTIFIER_FIXUP_1333.y = _RESERVED_IDENTIFIER_FIXUP_807.y;
    _RESERVED_IDENTIFIER_FIXUP_1333.z = _RESERVED_IDENTIFIER_FIXUP_807.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_818 = _RESERVED_IDENTIFIER_FIXUP_1333.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1510).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_1333;
    _RESERVED_IDENTIFIER_FIXUP_1339.x = _RESERVED_IDENTIFIER_FIXUP_818.x;
    _RESERVED_IDENTIFIER_FIXUP_1339.y = _RESERVED_IDENTIFIER_FIXUP_818.y;
    _RESERVED_IDENTIFIER_FIXUP_1339.z = _RESERVED_IDENTIFIER_FIXUP_818.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_829 = _RESERVED_IDENTIFIER_FIXUP_1339.xyz + _RESERVED_IDENTIFIER_FIXUP_1339.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_1339;
    _RESERVED_IDENTIFIER_FIXUP_1345.x = _RESERVED_IDENTIFIER_FIXUP_829.x;
    _RESERVED_IDENTIFIER_FIXUP_1345.y = _RESERVED_IDENTIFIER_FIXUP_829.y;
    _RESERVED_IDENTIFIER_FIXUP_1345.z = _RESERVED_IDENTIFIER_FIXUP_829.z;
    _RESERVED_IDENTIFIER_FIXUP_1331.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1331.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1331.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_854 = (_RESERVED_IDENTIFIER_FIXUP_1331.xyz * _RESERVED_IDENTIFIER_FIXUP_1512.xxx) + _RESERVED_IDENTIFIER_FIXUP_1345.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_1345;
    _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_854.x;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_854.y;
    _RESERVED_IDENTIFIER_FIXUP_1357.z = _RESERVED_IDENTIFIER_FIXUP_854.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_867 = _RESERVED_IDENTIFIER_FIXUP_1357.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1363 = _RESERVED_IDENTIFIER_FIXUP_1357;
    _RESERVED_IDENTIFIER_FIXUP_1363.x = _RESERVED_IDENTIFIER_FIXUP_867.x;
    _RESERVED_IDENTIFIER_FIXUP_1363.y = _RESERVED_IDENTIFIER_FIXUP_867.y;
    _RESERVED_IDENTIFIER_FIXUP_1363.z = _RESERVED_IDENTIFIER_FIXUP_867.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_917 = OptTex0( texcoord0.xyz);
    vec2 param_13 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_921 = hdTex1(param_13);
    vec2 param_14 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_925 = hdTex2(param_14);
    vec2 param_15 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_929 = hdTex3(param_15);
    vec4 _RESERVED_IDENTIFIER_FIXUP_939 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_917, _RESERVED_IDENTIFIER_FIXUP_921, _RESERVED_IDENTIFIER_FIXUP_929.xxxx), _RESERVED_IDENTIFIER_FIXUP_925, _RESERVED_IDENTIFIER_FIXUP_929.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_921;
    _RESERVED_IDENTIFIER_FIXUP_1379.x = _RESERVED_IDENTIFIER_FIXUP_613;
    float _RESERVED_IDENTIFIER_FIXUP_952 = clamp((_RESERVED_IDENTIFIER_FIXUP_613 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1379.x = _RESERVED_IDENTIFIER_FIXUP_952;
    float _RESERVED_IDENTIFIER_FIXUP_958 = ((-_RESERVED_IDENTIFIER_FIXUP_952) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1379.y = _RESERVED_IDENTIFIER_FIXUP_958;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1517;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1516;
    if (_RESERVED_IDENTIFIER_FIXUP_958 != (-_RESERVED_IDENTIFIER_FIXUP_958))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_970 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_980 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_982 = _RESERVED_IDENTIFIER_FIXUP_980.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1393 = _RESERVED_IDENTIFIER_FIXUP_1379;
        _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_982;
        _RESERVED_IDENTIFIER_FIXUP_1393.z = _RESERVED_IDENTIFIER_FIXUP_980.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_990 = _RESERVED_IDENTIFIER_FIXUP_1393.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1397;
        _RESERVED_IDENTIFIER_FIXUP_1397.x = _RESERVED_IDENTIFIER_FIXUP_990.x;
        _RESERVED_IDENTIFIER_FIXUP_1397.y = _RESERVED_IDENTIFIER_FIXUP_990.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_997 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1001 = _RESERVED_IDENTIFIER_FIXUP_997.y;
        _RESERVED_IDENTIFIER_FIXUP_1397.w = _RESERVED_IDENTIFIER_FIXUP_1001;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_970.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_970.w;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1397.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1001;
        float _RESERVED_IDENTIFIER_FIXUP_1012 = hdLod5(param_16, param_17).x + hdLod5(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1522 = vec4(_RESERVED_IDENTIFIER_FIXUP_952, _RESERVED_IDENTIFIER_FIXUP_982, _RESERVED_IDENTIFIER_FIXUP_980.y, _RESERVED_IDENTIFIER_FIXUP_1012);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1019 = _RESERVED_IDENTIFIER_FIXUP_1522.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1410;
        _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_1019.x;
        _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_1019.y;
        _RESERVED_IDENTIFIER_FIXUP_1410.w = _RESERVED_IDENTIFIER_FIXUP_1001;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1410.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1001;
        float _RESERVED_IDENTIFIER_FIXUP_1041 = _RESERVED_IDENTIFIER_FIXUP_1012 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_1522.w = _RESERVED_IDENTIFIER_FIXUP_1041;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1048 = _RESERVED_IDENTIFIER_FIXUP_1522.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1423;
        _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_1048.x;
        _RESERVED_IDENTIFIER_FIXUP_1423.y = _RESERVED_IDENTIFIER_FIXUP_1048.y;
        _RESERVED_IDENTIFIER_FIXUP_1423.w = _RESERVED_IDENTIFIER_FIXUP_1001;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1423.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1001;
        float _RESERVED_IDENTIFIER_FIXUP_1070 = _RESERVED_IDENTIFIER_FIXUP_1041 + hdLod5(param_22, param_23).x;
        _RESERVED_IDENTIFIER_FIXUP_1522.w = _RESERVED_IDENTIFIER_FIXUP_1070;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1077 = _RESERVED_IDENTIFIER_FIXUP_1522.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1436;
        _RESERVED_IDENTIFIER_FIXUP_1436.x = _RESERVED_IDENTIFIER_FIXUP_1077.x;
        _RESERVED_IDENTIFIER_FIXUP_1436.y = _RESERVED_IDENTIFIER_FIXUP_1077.y;
        _RESERVED_IDENTIFIER_FIXUP_1436.w = _RESERVED_IDENTIFIER_FIXUP_1001;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1436.xy;
        float param_25 = _RESERVED_IDENTIFIER_FIXUP_1001;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1094 = hdLod5(param_24, param_25);
        float _RESERVED_IDENTIFIER_FIXUP_1099 = _RESERVED_IDENTIFIER_FIXUP_1070 + _RESERVED_IDENTIFIER_FIXUP_1094.x;
        _RESERVED_IDENTIFIER_FIXUP_1522.y = _RESERVED_IDENTIFIER_FIXUP_1099;
        float _RESERVED_IDENTIFIER_FIXUP_1104 = (_RESERVED_IDENTIFIER_FIXUP_1099 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1522.y = _RESERVED_IDENTIFIER_FIXUP_1104;
        float _RESERVED_IDENTIFIER_FIXUP_1111 = (_RESERVED_IDENTIFIER_FIXUP_952 * _RESERVED_IDENTIFIER_FIXUP_1104) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1522.x = _RESERVED_IDENTIFIER_FIXUP_1111;
        _RESERVED_IDENTIFIER_FIXUP_1094.x = min(_RESERVED_IDENTIFIER_FIXUP_1111, _RESERVED_IDENTIFIER_FIXUP_929.w);
        _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_1522;
        _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_1094;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_925.x = _RESERVED_IDENTIFIER_FIXUP_929.w;
        _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_1379;
        _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_925;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1127 = (_RESERVED_IDENTIFIER_FIXUP_1516.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1461 = _RESERVED_IDENTIFIER_FIXUP_1517;
    _RESERVED_IDENTIFIER_FIXUP_1461.x = _RESERVED_IDENTIFIER_FIXUP_1127;
    _RESERVED_IDENTIFIER_FIXUP_1461.x = _RESERVED_IDENTIFIER_FIXUP_1127;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1140 = _RESERVED_IDENTIFIER_FIXUP_939.xyz * _RESERVED_IDENTIFIER_FIXUP_1461.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1467 = _RESERVED_IDENTIFIER_FIXUP_939;
    _RESERVED_IDENTIFIER_FIXUP_1467.x = _RESERVED_IDENTIFIER_FIXUP_1140.x;
    _RESERVED_IDENTIFIER_FIXUP_1467.y = _RESERVED_IDENTIFIER_FIXUP_1140.y;
    _RESERVED_IDENTIFIER_FIXUP_1467.z = _RESERVED_IDENTIFIER_FIXUP_1140.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_1467.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1473 = _RESERVED_IDENTIFIER_FIXUP_1467;
    _RESERVED_IDENTIFIER_FIXUP_1473.x = _RESERVED_IDENTIFIER_FIXUP_1151.x;
    _RESERVED_IDENTIFIER_FIXUP_1473.y = _RESERVED_IDENTIFIER_FIXUP_1151.y;
    _RESERVED_IDENTIFIER_FIXUP_1473.z = _RESERVED_IDENTIFIER_FIXUP_1151.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1162 = _RESERVED_IDENTIFIER_FIXUP_1473.xyz + _RESERVED_IDENTIFIER_FIXUP_1473.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_1473;
    _RESERVED_IDENTIFIER_FIXUP_1479.x = _RESERVED_IDENTIFIER_FIXUP_1162.x;
    _RESERVED_IDENTIFIER_FIXUP_1479.y = _RESERVED_IDENTIFIER_FIXUP_1162.y;
    _RESERVED_IDENTIFIER_FIXUP_1479.z = _RESERVED_IDENTIFIER_FIXUP_1162.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1173 = _RESERVED_IDENTIFIER_FIXUP_1479.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1461.x = _RESERVED_IDENTIFIER_FIXUP_1173.x;
    _RESERVED_IDENTIFIER_FIXUP_1461.y = _RESERVED_IDENTIFIER_FIXUP_1173.y;
    _RESERVED_IDENTIFIER_FIXUP_1461.z = _RESERVED_IDENTIFIER_FIXUP_1173.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1187 = (_RESERVED_IDENTIFIER_FIXUP_1461.xyz * _RESERVED_IDENTIFIER_FIXUP_1516.xxx) + _RESERVED_IDENTIFIER_FIXUP_1479.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1491 = _RESERVED_IDENTIFIER_FIXUP_1479;
    _RESERVED_IDENTIFIER_FIXUP_1491.x = _RESERVED_IDENTIFIER_FIXUP_1187.x;
    _RESERVED_IDENTIFIER_FIXUP_1491.y = _RESERVED_IDENTIFIER_FIXUP_1187.y;
    _RESERVED_IDENTIFIER_FIXUP_1491.z = _RESERVED_IDENTIFIER_FIXUP_1187.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_1491.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_1491;
    _RESERVED_IDENTIFIER_FIXUP_1497.x = _RESERVED_IDENTIFIER_FIXUP_1200.x;
    _RESERVED_IDENTIFIER_FIXUP_1497.y = _RESERVED_IDENTIFIER_FIXUP_1200.y;
    _RESERVED_IDENTIFIER_FIXUP_1497.z = _RESERVED_IDENTIFIER_FIXUP_1200.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1497.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_448 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_457;
    if (_RESERVED_IDENTIFIER_FIXUP_448)
    {
        _RESERVED_IDENTIFIER_FIXUP_457 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_457 = _RESERVED_IDENTIFIER_FIXUP_448;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_457)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_494 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1363.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_521 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1237;
    if (_RESERVED_IDENTIFIER_FIXUP_494 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1237 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_494), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_521);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1237 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_521);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1237;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1127);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        vec2 hdB135 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB135.x;
        r1.z = hdB135.y;
        vec2 hdB157 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB157.x;
        r4.y = hdB157.y;
        vec2 hdB165 = vec2(1.0, 0.0) * v5.zx;
        r4.z = hdB165.x;
        r4.w = hdB165.y;
        vec2 param_5 = r4.xy;
        float param_6 = r4.w;
        r4 = hdLod5(param_5, param_6);
        r1.w = r2.x + r4.x;
        vec2 hdB188 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB188.x;
        r2.y = hdB188.y;
        vec2 hdB195 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB195.x;
        r2.w = hdB195.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.w += r2.x;
        vec2 hdB218 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB218.x;
        r2.y = hdB218.y;
        vec2 hdB225 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB225.x;
        r2.w = hdB225.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB248 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB248.x;
        r2.y = hdB248.y;
        vec2 hdB255 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB255.x;
        r2.w = hdB255.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
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
    vec4 hdB303 = r0;
    vec3 hdB307 = hdB303.xyz * r1.xxx;
    r0.x = hdB307.x;
    r0.y = hdB307.y;
    r0.z = hdB307.z;
    vec4 hdB314 = r0;
    vec3 hdB318 = hdB314.xyz * v0.xyz;
    r0.x = hdB318.x;
    r0.y = hdB318.y;
    r0.z = hdB318.z;
    vec4 hdB325 = r0;
    vec4 hdB327 = r0;
    vec3 hdB329 = hdB325.xyz + hdB327.xyz;
    r0.x = hdB329.x;
    r0.y = hdB329.y;
    r0.z = hdB329.z;
    vec3 hdB340 = r0.www * v1.xyz;
    r1.x = hdB340.x;
    r1.y = hdB340.y;
    r1.z = hdB340.z;
    vec4 hdB352 = r0;
    vec3 hdB354 = (r1.xyz * r2.xxx) + hdB352.xyz;
    r0.x = hdB354.x;
    r0.y = hdB354.y;
    r0.z = hdB354.z;
    vec4 hdB361 = r0;
    vec3 hdB368 = hdB361.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB368.x;
    r0.y = hdB368.y;
    r0.z = hdB368.z;
    vec3 hdB383 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB383.x;
    oC0.y = hdB383.y;
    oC0.z = hdB383.z;
    oC0.w = 1.0;
    bool hdB396 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB404;
    if (hdB396)
    {
        hdB404 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB404 = hdB396;
    }
    if (hdB404)
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
    bool _1461 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1471;
    if (_1461)
    {
        _1471 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1471 = _1461;
    }
    if (_1471)
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
        bool _1496 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1511;
        if (!_1496)
        {
            _1511 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1511 = _1496;
        }
        if (_1511)
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
