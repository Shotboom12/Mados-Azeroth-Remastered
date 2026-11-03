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
float _RESERVED_IDENTIFIER_FIXUP_1626;
vec4 _RESERVED_IDENTIFIER_FIXUP_1627;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_620 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_624 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_628 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_632 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_636 = hdTex4(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_640 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_636.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1339 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1339.x = _RESERVED_IDENTIFIER_FIXUP_640;
    _RESERVED_IDENTIFIER_FIXUP_1339.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_640;
    vec4 _RESERVED_IDENTIFIER_FIXUP_650 = _RESERVED_IDENTIFIER_FIXUP_624 * _RESERVED_IDENTIFIER_FIXUP_636.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_668 = (_RESERVED_IDENTIFIER_FIXUP_632 * _RESERVED_IDENTIFIER_FIXUP_636.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_628 * _RESERVED_IDENTIFIER_FIXUP_636.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_620 * _RESERVED_IDENTIFIER_FIXUP_1339.xxxx) + _RESERVED_IDENTIFIER_FIXUP_650));
    float _RESERVED_IDENTIFIER_FIXUP_675 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1346 = _RESERVED_IDENTIFIER_FIXUP_650;
    _RESERVED_IDENTIFIER_FIXUP_1346.x = _RESERVED_IDENTIFIER_FIXUP_675;
    float _RESERVED_IDENTIFIER_FIXUP_681 = clamp((_RESERVED_IDENTIFIER_FIXUP_675 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1346.x = _RESERVED_IDENTIFIER_FIXUP_681;
    float _RESERVED_IDENTIFIER_FIXUP_687 = ((-_RESERVED_IDENTIFIER_FIXUP_681) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1346.y = _RESERVED_IDENTIFIER_FIXUP_687;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1629;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1628;
    if (_RESERVED_IDENTIFIER_FIXUP_687 != (-_RESERVED_IDENTIFIER_FIXUP_687))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_699 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_1346;
        _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_699.x;
        _RESERVED_IDENTIFIER_FIXUP_1359.z = _RESERVED_IDENTIFIER_FIXUP_699.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_709 = _RESERVED_IDENTIFIER_FIXUP_1359.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1363;
        _RESERVED_IDENTIFIER_FIXUP_1363.x = _RESERVED_IDENTIFIER_FIXUP_709.x;
        _RESERVED_IDENTIFIER_FIXUP_1363.y = _RESERVED_IDENTIFIER_FIXUP_709.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_719 = _RESERVED_IDENTIFIER_FIXUP_1359.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1367;
        _RESERVED_IDENTIFIER_FIXUP_1367.x = _RESERVED_IDENTIFIER_FIXUP_719.x;
        _RESERVED_IDENTIFIER_FIXUP_1367.y = _RESERVED_IDENTIFIER_FIXUP_719.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_729 = _RESERVED_IDENTIFIER_FIXUP_1359.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1371;
        _RESERVED_IDENTIFIER_FIXUP_1371.x = _RESERVED_IDENTIFIER_FIXUP_729.x;
        _RESERVED_IDENTIFIER_FIXUP_1371.y = _RESERVED_IDENTIFIER_FIXUP_729.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_739 = _RESERVED_IDENTIFIER_FIXUP_1359.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1375;
        _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_739.x;
        _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_739.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_747 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_747.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_747.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_753 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_1363.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1367.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1371.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1375.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1363.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_753.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1367.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_753.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1371.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_753.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_810 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_753 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1375.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_816 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_816;
        float _RESERVED_IDENTIFIER_FIXUP_821 = float(_RESERVED_IDENTIFIER_FIXUP_816 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_821;
        float _RESERVED_IDENTIFIER_FIXUP_824 = dot(_RESERVED_IDENTIFIER_FIXUP_810, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1359.z = _RESERVED_IDENTIFIER_FIXUP_824;
        float _RESERVED_IDENTIFIER_FIXUP_830 = _RESERVED_IDENTIFIER_FIXUP_821 + _RESERVED_IDENTIFIER_FIXUP_824;
        _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_830;
        float _RESERVED_IDENTIFIER_FIXUP_835 = (_RESERVED_IDENTIFIER_FIXUP_830 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_835;
        float _RESERVED_IDENTIFIER_FIXUP_842 = (_RESERVED_IDENTIFIER_FIXUP_681 * _RESERVED_IDENTIFIER_FIXUP_835) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1359.x = _RESERVED_IDENTIFIER_FIXUP_842;
        _RESERVED_IDENTIFIER_FIXUP_810.x = min(_RESERVED_IDENTIFIER_FIXUP_842, _RESERVED_IDENTIFIER_FIXUP_636.w);
        _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_1359;
        _RESERVED_IDENTIFIER_FIXUP_1628 = _RESERVED_IDENTIFIER_FIXUP_810;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_628.x = _RESERVED_IDENTIFIER_FIXUP_636.w;
        _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_1346;
        _RESERVED_IDENTIFIER_FIXUP_1628 = _RESERVED_IDENTIFIER_FIXUP_628;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1436 = _RESERVED_IDENTIFIER_FIXUP_1629;
    _RESERVED_IDENTIFIER_FIXUP_1436.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_871 = _RESERVED_IDENTIFIER_FIXUP_668.xyz * _RESERVED_IDENTIFIER_FIXUP_1436.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1438 = _RESERVED_IDENTIFIER_FIXUP_668;
    _RESERVED_IDENTIFIER_FIXUP_1438.x = _RESERVED_IDENTIFIER_FIXUP_871.x;
    _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_871.y;
    _RESERVED_IDENTIFIER_FIXUP_1438.z = _RESERVED_IDENTIFIER_FIXUP_871.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_882 = _RESERVED_IDENTIFIER_FIXUP_1438.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1626).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1444 = _RESERVED_IDENTIFIER_FIXUP_1438;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_882.x;
    _RESERVED_IDENTIFIER_FIXUP_1444.y = _RESERVED_IDENTIFIER_FIXUP_882.y;
    _RESERVED_IDENTIFIER_FIXUP_1444.z = _RESERVED_IDENTIFIER_FIXUP_882.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_893 = _RESERVED_IDENTIFIER_FIXUP_1444.xyz + _RESERVED_IDENTIFIER_FIXUP_1444.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450 = _RESERVED_IDENTIFIER_FIXUP_1444;
    _RESERVED_IDENTIFIER_FIXUP_1450.x = _RESERVED_IDENTIFIER_FIXUP_893.x;
    _RESERVED_IDENTIFIER_FIXUP_1450.y = _RESERVED_IDENTIFIER_FIXUP_893.y;
    _RESERVED_IDENTIFIER_FIXUP_1450.z = _RESERVED_IDENTIFIER_FIXUP_893.z;
    _RESERVED_IDENTIFIER_FIXUP_1436.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1436.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1436.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_918 = (_RESERVED_IDENTIFIER_FIXUP_1436.xyz * _RESERVED_IDENTIFIER_FIXUP_1628.xxx) + _RESERVED_IDENTIFIER_FIXUP_1450.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1462 = _RESERVED_IDENTIFIER_FIXUP_1450;
    _RESERVED_IDENTIFIER_FIXUP_1462.x = _RESERVED_IDENTIFIER_FIXUP_918.x;
    _RESERVED_IDENTIFIER_FIXUP_1462.y = _RESERVED_IDENTIFIER_FIXUP_918.y;
    _RESERVED_IDENTIFIER_FIXUP_1462.z = _RESERVED_IDENTIFIER_FIXUP_918.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_931 = _RESERVED_IDENTIFIER_FIXUP_1462.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1468 = _RESERVED_IDENTIFIER_FIXUP_1462;
    _RESERVED_IDENTIFIER_FIXUP_1468.x = _RESERVED_IDENTIFIER_FIXUP_931.x;
    _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_931.y;
    _RESERVED_IDENTIFIER_FIXUP_1468.z = _RESERVED_IDENTIFIER_FIXUP_931.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_984 = OptTex0( texcoord0.xyz);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_988 = hdTex1(param_14);
    vec2 param_15 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_992 = hdTex2(param_15);
    vec2 param_16 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_996 = hdTex3(param_16);
    vec2 param_17 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1000 = hdTex4(param_17);
    float _RESERVED_IDENTIFIER_FIXUP_1004 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1000.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1482 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1482.x = _RESERVED_IDENTIFIER_FIXUP_1004;
    _RESERVED_IDENTIFIER_FIXUP_1482.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1004;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1014 = _RESERVED_IDENTIFIER_FIXUP_988 * _RESERVED_IDENTIFIER_FIXUP_1000.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1032 = (_RESERVED_IDENTIFIER_FIXUP_996 * _RESERVED_IDENTIFIER_FIXUP_1000.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_992 * _RESERVED_IDENTIFIER_FIXUP_1000.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_984 * _RESERVED_IDENTIFIER_FIXUP_1482.xxxx) + _RESERVED_IDENTIFIER_FIXUP_1014));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1489 = _RESERVED_IDENTIFIER_FIXUP_1014;
    _RESERVED_IDENTIFIER_FIXUP_1489.x = _RESERVED_IDENTIFIER_FIXUP_675;
    float _RESERVED_IDENTIFIER_FIXUP_1045 = clamp((_RESERVED_IDENTIFIER_FIXUP_675 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1489.x = _RESERVED_IDENTIFIER_FIXUP_1045;
    float _RESERVED_IDENTIFIER_FIXUP_1051 = ((-_RESERVED_IDENTIFIER_FIXUP_1045) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1489.y = _RESERVED_IDENTIFIER_FIXUP_1051;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1633;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1632;
    if (_RESERVED_IDENTIFIER_FIXUP_1051 != (-_RESERVED_IDENTIFIER_FIXUP_1051))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1063 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1502 = _RESERVED_IDENTIFIER_FIXUP_1489;
        _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_1063.x;
        _RESERVED_IDENTIFIER_FIXUP_1502.z = _RESERVED_IDENTIFIER_FIXUP_1063.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1073 = _RESERVED_IDENTIFIER_FIXUP_1502.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1506;
        _RESERVED_IDENTIFIER_FIXUP_1506.x = _RESERVED_IDENTIFIER_FIXUP_1073.x;
        _RESERVED_IDENTIFIER_FIXUP_1506.y = _RESERVED_IDENTIFIER_FIXUP_1073.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1083 = _RESERVED_IDENTIFIER_FIXUP_1502.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1510;
        _RESERVED_IDENTIFIER_FIXUP_1510.x = _RESERVED_IDENTIFIER_FIXUP_1083.x;
        _RESERVED_IDENTIFIER_FIXUP_1510.y = _RESERVED_IDENTIFIER_FIXUP_1083.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1093 = _RESERVED_IDENTIFIER_FIXUP_1502.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1514;
        _RESERVED_IDENTIFIER_FIXUP_1514.x = _RESERVED_IDENTIFIER_FIXUP_1093.x;
        _RESERVED_IDENTIFIER_FIXUP_1514.y = _RESERVED_IDENTIFIER_FIXUP_1093.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1103 = _RESERVED_IDENTIFIER_FIXUP_1502.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1518;
        _RESERVED_IDENTIFIER_FIXUP_1518.x = _RESERVED_IDENTIFIER_FIXUP_1103.x;
        _RESERVED_IDENTIFIER_FIXUP_1518.y = _RESERVED_IDENTIFIER_FIXUP_1103.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1111 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1111.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1111.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1117 = hdLod5(param_18, param_19);
        _RESERVED_IDENTIFIER_FIXUP_1506.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1510.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1514.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1518.w = 0.0;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1506.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1117.y = hdLod5(param_20, param_21).x;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1510.xy;
        float param_23 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1117.z = hdLod5(param_22, param_23).x;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1514.xy;
        float param_25 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1117.w = hdLod5(param_24, param_25).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1174 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1117 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1518.xy;
        float param_27 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1180 = hdLod5(param_26, param_27).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_1180;
        float _RESERVED_IDENTIFIER_FIXUP_1185 = float(_RESERVED_IDENTIFIER_FIXUP_1180 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_1185;
        float _RESERVED_IDENTIFIER_FIXUP_1188 = dot(_RESERVED_IDENTIFIER_FIXUP_1174, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1502.z = _RESERVED_IDENTIFIER_FIXUP_1188;
        float _RESERVED_IDENTIFIER_FIXUP_1194 = _RESERVED_IDENTIFIER_FIXUP_1185 + _RESERVED_IDENTIFIER_FIXUP_1188;
        _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_1194;
        float _RESERVED_IDENTIFIER_FIXUP_1199 = (_RESERVED_IDENTIFIER_FIXUP_1194 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_1199;
        float _RESERVED_IDENTIFIER_FIXUP_1206 = (_RESERVED_IDENTIFIER_FIXUP_1045 * _RESERVED_IDENTIFIER_FIXUP_1199) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1502.x = _RESERVED_IDENTIFIER_FIXUP_1206;
        _RESERVED_IDENTIFIER_FIXUP_1174.x = min(_RESERVED_IDENTIFIER_FIXUP_1206, _RESERVED_IDENTIFIER_FIXUP_1000.w);
        _RESERVED_IDENTIFIER_FIXUP_1633 = _RESERVED_IDENTIFIER_FIXUP_1502;
        _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_1174;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_992.x = _RESERVED_IDENTIFIER_FIXUP_1000.w;
        _RESERVED_IDENTIFIER_FIXUP_1633 = _RESERVED_IDENTIFIER_FIXUP_1489;
        _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_992;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1222 = (_RESERVED_IDENTIFIER_FIXUP_1632.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1577 = _RESERVED_IDENTIFIER_FIXUP_1633;
    _RESERVED_IDENTIFIER_FIXUP_1577.x = _RESERVED_IDENTIFIER_FIXUP_1222;
    _RESERVED_IDENTIFIER_FIXUP_1577.x = _RESERVED_IDENTIFIER_FIXUP_1222;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_1032.xyz * _RESERVED_IDENTIFIER_FIXUP_1577.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1583 = _RESERVED_IDENTIFIER_FIXUP_1032;
    _RESERVED_IDENTIFIER_FIXUP_1583.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
    _RESERVED_IDENTIFIER_FIXUP_1583.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
    _RESERVED_IDENTIFIER_FIXUP_1583.z = _RESERVED_IDENTIFIER_FIXUP_1235.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1246 = _RESERVED_IDENTIFIER_FIXUP_1583.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1589 = _RESERVED_IDENTIFIER_FIXUP_1583;
    _RESERVED_IDENTIFIER_FIXUP_1589.x = _RESERVED_IDENTIFIER_FIXUP_1246.x;
    _RESERVED_IDENTIFIER_FIXUP_1589.y = _RESERVED_IDENTIFIER_FIXUP_1246.y;
    _RESERVED_IDENTIFIER_FIXUP_1589.z = _RESERVED_IDENTIFIER_FIXUP_1246.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_1589.xyz + _RESERVED_IDENTIFIER_FIXUP_1589.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1595 = _RESERVED_IDENTIFIER_FIXUP_1589;
    _RESERVED_IDENTIFIER_FIXUP_1595.x = _RESERVED_IDENTIFIER_FIXUP_1257.x;
    _RESERVED_IDENTIFIER_FIXUP_1595.y = _RESERVED_IDENTIFIER_FIXUP_1257.y;
    _RESERVED_IDENTIFIER_FIXUP_1595.z = _RESERVED_IDENTIFIER_FIXUP_1257.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1268 = _RESERVED_IDENTIFIER_FIXUP_1595.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1577.x = _RESERVED_IDENTIFIER_FIXUP_1268.x;
    _RESERVED_IDENTIFIER_FIXUP_1577.y = _RESERVED_IDENTIFIER_FIXUP_1268.y;
    _RESERVED_IDENTIFIER_FIXUP_1577.z = _RESERVED_IDENTIFIER_FIXUP_1268.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1282 = (_RESERVED_IDENTIFIER_FIXUP_1577.xyz * _RESERVED_IDENTIFIER_FIXUP_1632.xxx) + _RESERVED_IDENTIFIER_FIXUP_1595.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_1595;
    _RESERVED_IDENTIFIER_FIXUP_1607.x = _RESERVED_IDENTIFIER_FIXUP_1282.x;
    _RESERVED_IDENTIFIER_FIXUP_1607.y = _RESERVED_IDENTIFIER_FIXUP_1282.y;
    _RESERVED_IDENTIFIER_FIXUP_1607.z = _RESERVED_IDENTIFIER_FIXUP_1282.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_1607.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1613 = _RESERVED_IDENTIFIER_FIXUP_1607;
    _RESERVED_IDENTIFIER_FIXUP_1613.x = _RESERVED_IDENTIFIER_FIXUP_1295.x;
    _RESERVED_IDENTIFIER_FIXUP_1613.y = _RESERVED_IDENTIFIER_FIXUP_1295.y;
    _RESERVED_IDENTIFIER_FIXUP_1613.z = _RESERVED_IDENTIFIER_FIXUP_1295.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1613.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_482 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_491;
    if (_RESERVED_IDENTIFIER_FIXUP_482)
    {
        _RESERVED_IDENTIFIER_FIXUP_491 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_491 = _RESERVED_IDENTIFIER_FIXUP_482;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_491)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_528 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1468.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_555 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1332;
    if (_RESERVED_IDENTIFIER_FIXUP_528 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1332 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_528), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_555);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1332 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_555);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1332;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1222);
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
        vec2 hdB152 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB152.x;
        r1.z = hdB152.y;
        vec2 hdB174 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB174.x;
        r2.y = hdB174.y;
        vec2 hdB185 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB185.x;
        r3.y = hdB185.y;
        vec2 hdB196 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB196.x;
        r5.y = hdB196.y;
        vec2 hdB207 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB207.x;
        r6.y = hdB207.y;
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
        r1.y = r6.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB337 = r0;
    vec3 hdB341 = hdB337.xyz * r1.xxx;
    r0.x = hdB341.x;
    r0.y = hdB341.y;
    r0.z = hdB341.z;
    vec4 hdB348 = r0;
    vec3 hdB352 = hdB348.xyz * v0.xyz;
    r0.x = hdB352.x;
    r0.y = hdB352.y;
    r0.z = hdB352.z;
    vec4 hdB359 = r0;
    vec4 hdB361 = r0;
    vec3 hdB363 = hdB359.xyz + hdB361.xyz;
    r0.x = hdB363.x;
    r0.y = hdB363.y;
    r0.z = hdB363.z;
    vec3 hdB374 = r0.www * v1.xyz;
    r1.x = hdB374.x;
    r1.y = hdB374.y;
    r1.z = hdB374.z;
    vec4 hdB386 = r0;
    vec3 hdB388 = (r1.xyz * r2.xxx) + hdB386.xyz;
    r0.x = hdB388.x;
    r0.y = hdB388.y;
    r0.z = hdB388.z;
    vec4 hdB395 = r0;
    vec3 hdB402 = hdB395.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB402.x;
    r0.y = hdB402.y;
    r0.z = hdB402.z;
    vec3 hdB417 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB417.x;
    oC0.y = hdB417.y;
    oC0.z = hdB417.z;
    oC0.w = 1.0;
    bool hdB430 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB438;
    if (hdB430)
    {
        hdB438 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB438 = hdB430;
    }
    if (hdB438)
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
    bool _1539 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1549;
    if (_1539)
    {
        _1549 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1549 = _1539;
    }
    if (_1549)
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
        bool _1574 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1589;
        if (!_1574)
        {
            _1589 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1589 = _1574;
        }
        if (_1589)
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
