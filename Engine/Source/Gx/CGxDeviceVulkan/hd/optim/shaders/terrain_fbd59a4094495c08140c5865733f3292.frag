#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1518;
vec4 _RESERVED_IDENTIFIER_FIXUP_1519;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _53 = hdOverride >= 0;
    bool _73;
    if (_53)
    {
        _73 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _73 = _53;
    }
    vec4 _74;
    if (_73)
    {
        _74 = vec4(float(hdOverride));
    }
    else
    {
        _74 = value;
    }
    return _74;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _91 = hdOverride >= 0;
    bool _100;
    if (_91)
    {
        _100 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _100 = _91;
    }
    vec4 _101;
    if (_100)
    {
        _101 = vec4(float(hdOverride));
    }
    else
    {
        _101 = value;
    }
    return _101;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _173 = hdOverride >= 0;
    bool _183;
    if (_173)
    {
        _183 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _145 = hdOverride >= 0;
    bool _155;
    if (_145)
    {
        _155 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _118 = hdOverride >= 0;
    bool _127;
    if (_118)
    {
        _127 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _127 = _118;
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

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_594 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_597 = _RESERVED_IDENTIFIER_FIXUP_594.xy;
    float _RESERVED_IDENTIFIER_FIXUP_599 = _RESERVED_IDENTIFIER_FIXUP_594.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_597;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_599;
    vec4 _RESERVED_IDENTIFIER_FIXUP_600 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_603 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_607 = _RESERVED_IDENTIFIER_FIXUP_603.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1262;
    _RESERVED_IDENTIFIER_FIXUP_1262.w = _RESERVED_IDENTIFIER_FIXUP_607;
    vec2 _RESERVED_IDENTIFIER_FIXUP_611 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_613 = _RESERVED_IDENTIFIER_FIXUP_611.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_600;
    _RESERVED_IDENTIFIER_FIXUP_1264.y = _RESERVED_IDENTIFIER_FIXUP_613;
    float _RESERVED_IDENTIFIER_FIXUP_615 = _RESERVED_IDENTIFIER_FIXUP_611.y;
    _RESERVED_IDENTIFIER_FIXUP_1264.z = _RESERVED_IDENTIFIER_FIXUP_615;
    vec2 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_1264.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1268 = _RESERVED_IDENTIFIER_FIXUP_1262;
    _RESERVED_IDENTIFIER_FIXUP_1268.x = _RESERVED_IDENTIFIER_FIXUP_621.x;
    _RESERVED_IDENTIFIER_FIXUP_1268.y = _RESERVED_IDENTIFIER_FIXUP_621.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1268.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_607;
    float _RESERVED_IDENTIFIER_FIXUP_636 = _RESERVED_IDENTIFIER_FIXUP_600.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1264.x = _RESERVED_IDENTIFIER_FIXUP_636;
    vec2 _RESERVED_IDENTIFIER_FIXUP_650 = _RESERVED_IDENTIFIER_FIXUP_1264.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1281 = _RESERVED_IDENTIFIER_FIXUP_1262;
    _RESERVED_IDENTIFIER_FIXUP_1281.x = _RESERVED_IDENTIFIER_FIXUP_650.x;
    _RESERVED_IDENTIFIER_FIXUP_1281.y = _RESERVED_IDENTIFIER_FIXUP_650.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1281.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_607;
    float _RESERVED_IDENTIFIER_FIXUP_665 = _RESERVED_IDENTIFIER_FIXUP_636 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1264.x = _RESERVED_IDENTIFIER_FIXUP_665;
    vec2 _RESERVED_IDENTIFIER_FIXUP_672 = _RESERVED_IDENTIFIER_FIXUP_1264.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1290;
    _RESERVED_IDENTIFIER_FIXUP_1290.x = _RESERVED_IDENTIFIER_FIXUP_672.x;
    _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_672.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_682 = _RESERVED_IDENTIFIER_FIXUP_1264.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1294;
    _RESERVED_IDENTIFIER_FIXUP_1294.x = _RESERVED_IDENTIFIER_FIXUP_682.x;
    _RESERVED_IDENTIFIER_FIXUP_1294.y = _RESERVED_IDENTIFIER_FIXUP_682.y;
    _RESERVED_IDENTIFIER_FIXUP_1290.w = _RESERVED_IDENTIFIER_FIXUP_607;
    _RESERVED_IDENTIFIER_FIXUP_1294.w = _RESERVED_IDENTIFIER_FIXUP_607;
    float _RESERVED_IDENTIFIER_FIXUP_736 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_754 = hdTex4(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1290.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_607;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1294.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_607;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1332;
    _RESERVED_IDENTIFIER_FIXUP_1332.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_736 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_665 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_754.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1337;
    _RESERVED_IDENTIFIER_FIXUP_1337.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_780 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_754.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1337.y = _RESERVED_IDENTIFIER_FIXUP_780;
    _RESERVED_IDENTIFIER_FIXUP_1337.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_780;
    vec2 param_11 = texcoord2.xy;
    vec2 param_12 = texcoord1.wz;
    vec2 param_13 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_1337.xxx * ((hdTex3(param_11) * _RESERVED_IDENTIFIER_FIXUP_754.zzzz) + ((hdTex2(param_12) * _RESERVED_IDENTIFIER_FIXUP_754.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1337.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_754.xxxx * hdTex1(param_13))))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344;
    _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1344.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1350;
    _RESERVED_IDENTIFIER_FIXUP_1350.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1350.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1350.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_847 = _RESERVED_IDENTIFIER_FIXUP_1344.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1518).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1356;
    _RESERVED_IDENTIFIER_FIXUP_1356.x = _RESERVED_IDENTIFIER_FIXUP_847.x;
    _RESERVED_IDENTIFIER_FIXUP_1356.y = _RESERVED_IDENTIFIER_FIXUP_847.y;
    _RESERVED_IDENTIFIER_FIXUP_1356.z = _RESERVED_IDENTIFIER_FIXUP_847.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_858 = _RESERVED_IDENTIFIER_FIXUP_1356.xyz + _RESERVED_IDENTIFIER_FIXUP_1356.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1362;
    _RESERVED_IDENTIFIER_FIXUP_1362.x = _RESERVED_IDENTIFIER_FIXUP_858.x;
    _RESERVED_IDENTIFIER_FIXUP_1362.y = _RESERVED_IDENTIFIER_FIXUP_858.y;
    _RESERVED_IDENTIFIER_FIXUP_1362.z = _RESERVED_IDENTIFIER_FIXUP_858.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_872 = (_RESERVED_IDENTIFIER_FIXUP_1350.xyz * _RESERVED_IDENTIFIER_FIXUP_1332.xxx) + _RESERVED_IDENTIFIER_FIXUP_1362.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1368;
    _RESERVED_IDENTIFIER_FIXUP_1368.x = _RESERVED_IDENTIFIER_FIXUP_872.x;
    _RESERVED_IDENTIFIER_FIXUP_1368.y = _RESERVED_IDENTIFIER_FIXUP_872.y;
    _RESERVED_IDENTIFIER_FIXUP_1368.z = _RESERVED_IDENTIFIER_FIXUP_872.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_885 = _RESERVED_IDENTIFIER_FIXUP_1368.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1374;
    _RESERVED_IDENTIFIER_FIXUP_1374.x = _RESERVED_IDENTIFIER_FIXUP_885.x;
    _RESERVED_IDENTIFIER_FIXUP_1374.y = _RESERVED_IDENTIFIER_FIXUP_885.y;
    _RESERVED_IDENTIFIER_FIXUP_1374.z = _RESERVED_IDENTIFIER_FIXUP_885.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_900 = _RESERVED_IDENTIFIER_FIXUP_1374.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1380;
    _RESERVED_IDENTIFIER_FIXUP_1380.x = _RESERVED_IDENTIFIER_FIXUP_900.x;
    _RESERVED_IDENTIFIER_FIXUP_1380.y = _RESERVED_IDENTIFIER_FIXUP_900.y;
    _RESERVED_IDENTIFIER_FIXUP_1380.z = _RESERVED_IDENTIFIER_FIXUP_900.z;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_597;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_599;
    vec4 _RESERVED_IDENTIFIER_FIXUP_941 = hdLod5(param_14, param_15);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1393 = _RESERVED_IDENTIFIER_FIXUP_941;
    _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_613;
    _RESERVED_IDENTIFIER_FIXUP_1393.z = _RESERVED_IDENTIFIER_FIXUP_615;
    vec2 _RESERVED_IDENTIFIER_FIXUP_962 = _RESERVED_IDENTIFIER_FIXUP_1393.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1397 = _RESERVED_IDENTIFIER_FIXUP_1262;
    _RESERVED_IDENTIFIER_FIXUP_1397.x = _RESERVED_IDENTIFIER_FIXUP_962.x;
    _RESERVED_IDENTIFIER_FIXUP_1397.y = _RESERVED_IDENTIFIER_FIXUP_962.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1397.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_607;
    float _RESERVED_IDENTIFIER_FIXUP_977 = _RESERVED_IDENTIFIER_FIXUP_941.x + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_977;
    vec2 _RESERVED_IDENTIFIER_FIXUP_991 = _RESERVED_IDENTIFIER_FIXUP_1393.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_1262;
    _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_991.x;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_991.y;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1410.xy;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_607;
    float _RESERVED_IDENTIFIER_FIXUP_1006 = _RESERVED_IDENTIFIER_FIXUP_977 + hdLod5(param_18, param_19).x;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_1006;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1013 = _RESERVED_IDENTIFIER_FIXUP_1393.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1419;
    _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_1013.x;
    _RESERVED_IDENTIFIER_FIXUP_1419.y = _RESERVED_IDENTIFIER_FIXUP_1013.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1023 = _RESERVED_IDENTIFIER_FIXUP_1393.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1423;
    _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_1023.x;
    _RESERVED_IDENTIFIER_FIXUP_1423.y = _RESERVED_IDENTIFIER_FIXUP_1023.y;
    _RESERVED_IDENTIFIER_FIXUP_1419.w = _RESERVED_IDENTIFIER_FIXUP_607;
    _RESERVED_IDENTIFIER_FIXUP_1423.w = _RESERVED_IDENTIFIER_FIXUP_607;
    vec2 param_20 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1095 = hdTex4(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1419.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_607;
    vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1423.xy;
    float param_24 = _RESERVED_IDENTIFIER_FIXUP_607;
    float _RESERVED_IDENTIFIER_FIXUP_1100 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_736 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_1006 + hdLod5(param_21, param_22).x) + hdLod5(param_23, param_24).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1095.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1461;
    _RESERVED_IDENTIFIER_FIXUP_1461.x = _RESERVED_IDENTIFIER_FIXUP_1100;
    float _RESERVED_IDENTIFIER_FIXUP_1105 = (_RESERVED_IDENTIFIER_FIXUP_1100 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1468;
    _RESERVED_IDENTIFIER_FIXUP_1468.x = _RESERVED_IDENTIFIER_FIXUP_1105;
    float _RESERVED_IDENTIFIER_FIXUP_1121 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1095.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_1121;
    _RESERVED_IDENTIFIER_FIXUP_1468.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1121;
    vec2 param_25 = texcoord2.xy;
    vec2 param_26 = texcoord1.wz;
    vec2 param_27 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1161 = (hdTex3(param_25) * _RESERVED_IDENTIFIER_FIXUP_1095.zzzz) + ((hdTex2(param_26) * _RESERVED_IDENTIFIER_FIXUP_1095.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1468.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1095.xxxx * hdTex1(param_27))));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1166 = _RESERVED_IDENTIFIER_FIXUP_1468.xxx * _RESERVED_IDENTIFIER_FIXUP_1161.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1475;
    _RESERVED_IDENTIFIER_FIXUP_1475.x = _RESERVED_IDENTIFIER_FIXUP_1166.x;
    _RESERVED_IDENTIFIER_FIXUP_1475.y = _RESERVED_IDENTIFIER_FIXUP_1166.y;
    _RESERVED_IDENTIFIER_FIXUP_1475.z = _RESERVED_IDENTIFIER_FIXUP_1166.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1161.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1481;
    _RESERVED_IDENTIFIER_FIXUP_1481.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
    _RESERVED_IDENTIFIER_FIXUP_1481.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
    _RESERVED_IDENTIFIER_FIXUP_1481.z = _RESERVED_IDENTIFIER_FIXUP_1177.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_1475.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1487;
    _RESERVED_IDENTIFIER_FIXUP_1487.x = _RESERVED_IDENTIFIER_FIXUP_1188.x;
    _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_1188.y;
    _RESERVED_IDENTIFIER_FIXUP_1487.z = _RESERVED_IDENTIFIER_FIXUP_1188.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = _RESERVED_IDENTIFIER_FIXUP_1487.xyz + _RESERVED_IDENTIFIER_FIXUP_1487.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1493;
    _RESERVED_IDENTIFIER_FIXUP_1493.x = _RESERVED_IDENTIFIER_FIXUP_1199.x;
    _RESERVED_IDENTIFIER_FIXUP_1493.y = _RESERVED_IDENTIFIER_FIXUP_1199.y;
    _RESERVED_IDENTIFIER_FIXUP_1493.z = _RESERVED_IDENTIFIER_FIXUP_1199.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1213 = (_RESERVED_IDENTIFIER_FIXUP_1481.xyz * _RESERVED_IDENTIFIER_FIXUP_1461.xxx) + _RESERVED_IDENTIFIER_FIXUP_1493.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1499;
    _RESERVED_IDENTIFIER_FIXUP_1499.x = _RESERVED_IDENTIFIER_FIXUP_1213.x;
    _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_1213.y;
    _RESERVED_IDENTIFIER_FIXUP_1499.z = _RESERVED_IDENTIFIER_FIXUP_1213.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_1499.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1505;
    _RESERVED_IDENTIFIER_FIXUP_1505.x = _RESERVED_IDENTIFIER_FIXUP_1226.x;
    _RESERVED_IDENTIFIER_FIXUP_1505.y = _RESERVED_IDENTIFIER_FIXUP_1226.y;
    _RESERVED_IDENTIFIER_FIXUP_1505.z = _RESERVED_IDENTIFIER_FIXUP_1226.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1505.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_458 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_467;
    if (_RESERVED_IDENTIFIER_FIXUP_458)
    {
        _RESERVED_IDENTIFIER_FIXUP_467 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_467 = _RESERVED_IDENTIFIER_FIXUP_458;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_467)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_504 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1380.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_531 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1252;
    if (_RESERVED_IDENTIFIER_FIXUP_504 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1252 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_504), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_531);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1252 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_531);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1252;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1105);
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
    r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB67 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB67.x;
    r1.w = hdB67.y;
    vec2 hdB77 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB77.x;
    r0.z = hdB77.y;
    vec2 hdB99 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB99.x;
    r1.y = hdB99.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB119 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB119.x;
    r1.w = hdB119.y;
    vec2 hdB130 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB130.x;
    r1.y = hdB130.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB153 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB153.x;
    r1.y = hdB153.y;
    vec2 hdB164 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB164.x;
    r2.y = hdB164.y;
    vec2 hdB171 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB171.x;
    r1.w = hdB171.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB190 = vec2(1.0, 0.0) * v5.zx;
    r2.z = hdB190.x;
    r2.w = hdB190.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v4.wz;
    r1 = hdTex4(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r3 = OptTex0( v2.xyz);
    r0.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.y = (-r0.y) + 1.0;
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    r4 = r1.xxxx * r4;
    r3 = (r3 * r0.yyyy) + r4;
    vec2 param_12 = v3.wz;
    r4 = hdTex2(param_12);
    r3 = (r4 * r1.yyyy) + r3;
    vec2 param_13 = v4.xy;
    r4 = hdTex3(param_13);
    r1 = (r4 * r1.zzzz) + r3;
    vec4 hdB312 = r0;
    vec3 hdB316 = hdB312.xxx * r1.xyz;
    r0.x = hdB316.x;
    r0.y = hdB316.y;
    r0.z = hdB316.z;
    vec4 hdB323 = r1;
    vec3 hdB327 = hdB323.www * v1.xyz;
    r1.x = hdB327.x;
    r1.y = hdB327.y;
    r1.z = hdB327.z;
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
    vec4 hdB361 = r0;
    vec3 hdB363 = (r1.xyz * r2.xxx) + hdB361.xyz;
    r0.x = hdB363.x;
    r0.y = hdB363.y;
    r0.z = hdB363.z;
    vec4 hdB370 = r0;
    vec3 hdB377 = hdB370.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB377.x;
    r0.y = hdB377.y;
    r0.z = hdB377.z;
    vec3 hdB392 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB392.x;
    oC0.y = hdB392.y;
    oC0.z = hdB392.z;
    oC0.w = 1.0;
    bool hdB406 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB414;
    if (hdB406)
    {
        hdB414 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB414 = hdB406;
    }
    if (hdB414)
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
    bool _1411 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1421;
    if (_1411)
    {
        _1421 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1421 = _1411;
    }
    if (_1421)
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
        bool _1446 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1461;
        if (!_1446)
        {
            _1461 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1461 = _1446;
        }
        if (_1461)
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
