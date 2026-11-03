#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1493;
vec4 _RESERVED_IDENTIFIER_FIXUP_1494;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _46 = hdOverride >= 0;
    bool _66;
    if (_46)
    {
        _66 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _66 = _46;
    }
    vec4 _67;
    if (_66)
    {
        _67 = vec4(float(hdOverride));
    }
    else
    {
        _67 = value;
    }
    return _67;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _84 = hdOverride >= 0;
    bool _93;
    if (_84)
    {
        _93 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _93 = _84;
    }
    vec4 _94;
    if (_93)
    {
        _94 = vec4(float(hdOverride));
    }
    else
    {
        _94 = value;
    }
    return _94;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _112 = hdOverride >= 0;
    bool _122;
    if (_112)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _122 = _112;
    }
    vec4 _123;
    if (_122)
    {
        _123 = vec4(float(hdOverride));
    }
    else
    {
        _123 = value;
    }
    return _123;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_569 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_573 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_577 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_573.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218 = _RESERVED_IDENTIFIER_FIXUP_573;
    _RESERVED_IDENTIFIER_FIXUP_1218.x = _RESERVED_IDENTIFIER_FIXUP_577;
    _RESERVED_IDENTIFIER_FIXUP_1218.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_577;
    vec4 _RESERVED_IDENTIFIER_FIXUP_587 = _RESERVED_IDENTIFIER_FIXUP_569 * _RESERVED_IDENTIFIER_FIXUP_1218.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_594 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1225.x = _RESERVED_IDENTIFIER_FIXUP_594;
    float _RESERVED_IDENTIFIER_FIXUP_600 = clamp((_RESERVED_IDENTIFIER_FIXUP_594 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1225.x = _RESERVED_IDENTIFIER_FIXUP_600;
    float _RESERVED_IDENTIFIER_FIXUP_606 = ((-_RESERVED_IDENTIFIER_FIXUP_600) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1225.y = _RESERVED_IDENTIFIER_FIXUP_606;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1496;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1495;
    if (_RESERVED_IDENTIFIER_FIXUP_606 != (-_RESERVED_IDENTIFIER_FIXUP_606))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_618 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_618.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_618.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_624 = hdLod5(param_2, param_3);
        vec2 _RESERVED_IDENTIFIER_FIXUP_628 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1225;
        _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_628.x;
        _RESERVED_IDENTIFIER_FIXUP_1239.z = _RESERVED_IDENTIFIER_FIXUP_628.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_638 = _RESERVED_IDENTIFIER_FIXUP_1239.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1243;
        _RESERVED_IDENTIFIER_FIXUP_1243.x = _RESERVED_IDENTIFIER_FIXUP_638.x;
        _RESERVED_IDENTIFIER_FIXUP_1243.y = _RESERVED_IDENTIFIER_FIXUP_638.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_645 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_649 = _RESERVED_IDENTIFIER_FIXUP_645.y;
        _RESERVED_IDENTIFIER_FIXUP_1243.w = _RESERVED_IDENTIFIER_FIXUP_649;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1243.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_649;
        float _RESERVED_IDENTIFIER_FIXUP_660 = _RESERVED_IDENTIFIER_FIXUP_624.x + hdLod5(param_4, param_5).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1254 = _RESERVED_IDENTIFIER_FIXUP_624;
        _RESERVED_IDENTIFIER_FIXUP_1254.x = _RESERVED_IDENTIFIER_FIXUP_660;
        vec2 _RESERVED_IDENTIFIER_FIXUP_667 = _RESERVED_IDENTIFIER_FIXUP_1239.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1256;
        _RESERVED_IDENTIFIER_FIXUP_1256.x = _RESERVED_IDENTIFIER_FIXUP_667.x;
        _RESERVED_IDENTIFIER_FIXUP_1256.y = _RESERVED_IDENTIFIER_FIXUP_667.y;
        _RESERVED_IDENTIFIER_FIXUP_1256.w = _RESERVED_IDENTIFIER_FIXUP_649;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1256.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_649;
        float _RESERVED_IDENTIFIER_FIXUP_689 = _RESERVED_IDENTIFIER_FIXUP_660 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_1254.x = _RESERVED_IDENTIFIER_FIXUP_689;
        vec2 _RESERVED_IDENTIFIER_FIXUP_696 = _RESERVED_IDENTIFIER_FIXUP_1239.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1269;
        _RESERVED_IDENTIFIER_FIXUP_1269.x = _RESERVED_IDENTIFIER_FIXUP_696.x;
        _RESERVED_IDENTIFIER_FIXUP_1269.y = _RESERVED_IDENTIFIER_FIXUP_696.y;
        _RESERVED_IDENTIFIER_FIXUP_1269.w = _RESERVED_IDENTIFIER_FIXUP_649;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1269.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_649;
        float _RESERVED_IDENTIFIER_FIXUP_718 = _RESERVED_IDENTIFIER_FIXUP_689 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1254.x = _RESERVED_IDENTIFIER_FIXUP_718;
        vec2 _RESERVED_IDENTIFIER_FIXUP_725 = _RESERVED_IDENTIFIER_FIXUP_1239.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1282;
        _RESERVED_IDENTIFIER_FIXUP_1282.x = _RESERVED_IDENTIFIER_FIXUP_725.x;
        _RESERVED_IDENTIFIER_FIXUP_1282.y = _RESERVED_IDENTIFIER_FIXUP_725.y;
        _RESERVED_IDENTIFIER_FIXUP_1282.w = _RESERVED_IDENTIFIER_FIXUP_649;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1282.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_649;
        float _RESERVED_IDENTIFIER_FIXUP_747 = _RESERVED_IDENTIFIER_FIXUP_718 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_747;
        float _RESERVED_IDENTIFIER_FIXUP_752 = (_RESERVED_IDENTIFIER_FIXUP_747 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_752;
        float _RESERVED_IDENTIFIER_FIXUP_759 = (_RESERVED_IDENTIFIER_FIXUP_600 * _RESERVED_IDENTIFIER_FIXUP_752) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1239.x = _RESERVED_IDENTIFIER_FIXUP_759;
        _RESERVED_IDENTIFIER_FIXUP_1254.x = min(_RESERVED_IDENTIFIER_FIXUP_759, _RESERVED_IDENTIFIER_FIXUP_573.w);
        _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_1239;
        _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_1254;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1236 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1236.x = _RESERVED_IDENTIFIER_FIXUP_573.w;
        _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_1225;
        _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_1236;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1496;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_788 = _RESERVED_IDENTIFIER_FIXUP_587.xyz * _RESERVED_IDENTIFIER_FIXUP_1309.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1311 = _RESERVED_IDENTIFIER_FIXUP_587;
    _RESERVED_IDENTIFIER_FIXUP_1311.x = _RESERVED_IDENTIFIER_FIXUP_788.x;
    _RESERVED_IDENTIFIER_FIXUP_1311.y = _RESERVED_IDENTIFIER_FIXUP_788.y;
    _RESERVED_IDENTIFIER_FIXUP_1311.z = _RESERVED_IDENTIFIER_FIXUP_788.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_799 = _RESERVED_IDENTIFIER_FIXUP_1311.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1493).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1317 = _RESERVED_IDENTIFIER_FIXUP_1311;
    _RESERVED_IDENTIFIER_FIXUP_1317.x = _RESERVED_IDENTIFIER_FIXUP_799.x;
    _RESERVED_IDENTIFIER_FIXUP_1317.y = _RESERVED_IDENTIFIER_FIXUP_799.y;
    _RESERVED_IDENTIFIER_FIXUP_1317.z = _RESERVED_IDENTIFIER_FIXUP_799.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_810 = _RESERVED_IDENTIFIER_FIXUP_1317.xyz + _RESERVED_IDENTIFIER_FIXUP_1317.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1323 = _RESERVED_IDENTIFIER_FIXUP_1317;
    _RESERVED_IDENTIFIER_FIXUP_1323.x = _RESERVED_IDENTIFIER_FIXUP_810.x;
    _RESERVED_IDENTIFIER_FIXUP_1323.y = _RESERVED_IDENTIFIER_FIXUP_810.y;
    _RESERVED_IDENTIFIER_FIXUP_1323.z = _RESERVED_IDENTIFIER_FIXUP_810.z;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1309.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1309.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_835 = (_RESERVED_IDENTIFIER_FIXUP_1309.xyz * _RESERVED_IDENTIFIER_FIXUP_1495.xxx) + _RESERVED_IDENTIFIER_FIXUP_1323.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1335 = _RESERVED_IDENTIFIER_FIXUP_1323;
    _RESERVED_IDENTIFIER_FIXUP_1335.x = _RESERVED_IDENTIFIER_FIXUP_835.x;
    _RESERVED_IDENTIFIER_FIXUP_1335.y = _RESERVED_IDENTIFIER_FIXUP_835.y;
    _RESERVED_IDENTIFIER_FIXUP_1335.z = _RESERVED_IDENTIFIER_FIXUP_835.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_848 = _RESERVED_IDENTIFIER_FIXUP_1335.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1341 = _RESERVED_IDENTIFIER_FIXUP_1335;
    _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_848.x;
    _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_848.y;
    _RESERVED_IDENTIFIER_FIXUP_1341.z = _RESERVED_IDENTIFIER_FIXUP_848.z;
    vec2 param_12 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_895 = hdTex0(param_12);
    vec2 param_13 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_899 = hdTex1(param_13);
    float _RESERVED_IDENTIFIER_FIXUP_903 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_899.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1355 = _RESERVED_IDENTIFIER_FIXUP_899;
    _RESERVED_IDENTIFIER_FIXUP_1355.x = _RESERVED_IDENTIFIER_FIXUP_903;
    _RESERVED_IDENTIFIER_FIXUP_1355.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_903;
    vec4 _RESERVED_IDENTIFIER_FIXUP_913 = _RESERVED_IDENTIFIER_FIXUP_895 * _RESERVED_IDENTIFIER_FIXUP_1355.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_1355;
    _RESERVED_IDENTIFIER_FIXUP_1362.x = _RESERVED_IDENTIFIER_FIXUP_594;
    float _RESERVED_IDENTIFIER_FIXUP_926 = clamp((_RESERVED_IDENTIFIER_FIXUP_594 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1362.x = _RESERVED_IDENTIFIER_FIXUP_926;
    float _RESERVED_IDENTIFIER_FIXUP_932 = ((-_RESERVED_IDENTIFIER_FIXUP_926) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1362.y = _RESERVED_IDENTIFIER_FIXUP_932;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1500;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1499;
    if (_RESERVED_IDENTIFIER_FIXUP_932 != (-_RESERVED_IDENTIFIER_FIXUP_932))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_944 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_944.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_944.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_950 = hdLod5(param_14, param_15);
        vec2 _RESERVED_IDENTIFIER_FIXUP_954 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_1362;
        _RESERVED_IDENTIFIER_FIXUP_1376.y = _RESERVED_IDENTIFIER_FIXUP_954.x;
        _RESERVED_IDENTIFIER_FIXUP_1376.z = _RESERVED_IDENTIFIER_FIXUP_954.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_964 = _RESERVED_IDENTIFIER_FIXUP_1376.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1380;
        _RESERVED_IDENTIFIER_FIXUP_1380.x = _RESERVED_IDENTIFIER_FIXUP_964.x;
        _RESERVED_IDENTIFIER_FIXUP_1380.y = _RESERVED_IDENTIFIER_FIXUP_964.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_971 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_975 = _RESERVED_IDENTIFIER_FIXUP_971.y;
        _RESERVED_IDENTIFIER_FIXUP_1380.w = _RESERVED_IDENTIFIER_FIXUP_975;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1380.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_975;
        float _RESERVED_IDENTIFIER_FIXUP_986 = _RESERVED_IDENTIFIER_FIXUP_950.x + hdLod5(param_16, param_17).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_950;
        _RESERVED_IDENTIFIER_FIXUP_1391.x = _RESERVED_IDENTIFIER_FIXUP_986;
        vec2 _RESERVED_IDENTIFIER_FIXUP_993 = _RESERVED_IDENTIFIER_FIXUP_1376.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1393;
        _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_993.x;
        _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_993.y;
        _RESERVED_IDENTIFIER_FIXUP_1393.w = _RESERVED_IDENTIFIER_FIXUP_975;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1393.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_975;
        float _RESERVED_IDENTIFIER_FIXUP_1015 = _RESERVED_IDENTIFIER_FIXUP_986 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_1391.x = _RESERVED_IDENTIFIER_FIXUP_1015;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1022 = _RESERVED_IDENTIFIER_FIXUP_1376.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1406;
        _RESERVED_IDENTIFIER_FIXUP_1406.x = _RESERVED_IDENTIFIER_FIXUP_1022.x;
        _RESERVED_IDENTIFIER_FIXUP_1406.y = _RESERVED_IDENTIFIER_FIXUP_1022.y;
        _RESERVED_IDENTIFIER_FIXUP_1406.w = _RESERVED_IDENTIFIER_FIXUP_975;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1406.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_975;
        float _RESERVED_IDENTIFIER_FIXUP_1044 = _RESERVED_IDENTIFIER_FIXUP_1015 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_1391.x = _RESERVED_IDENTIFIER_FIXUP_1044;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1051 = _RESERVED_IDENTIFIER_FIXUP_1376.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1419;
        _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_1051.x;
        _RESERVED_IDENTIFIER_FIXUP_1419.y = _RESERVED_IDENTIFIER_FIXUP_1051.y;
        _RESERVED_IDENTIFIER_FIXUP_1419.w = _RESERVED_IDENTIFIER_FIXUP_975;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1419.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_975;
        float _RESERVED_IDENTIFIER_FIXUP_1073 = _RESERVED_IDENTIFIER_FIXUP_1044 + hdLod5(param_22, param_23).x;
        _RESERVED_IDENTIFIER_FIXUP_1376.y = _RESERVED_IDENTIFIER_FIXUP_1073;
        float _RESERVED_IDENTIFIER_FIXUP_1078 = (_RESERVED_IDENTIFIER_FIXUP_1073 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1376.y = _RESERVED_IDENTIFIER_FIXUP_1078;
        float _RESERVED_IDENTIFIER_FIXUP_1085 = (_RESERVED_IDENTIFIER_FIXUP_926 * _RESERVED_IDENTIFIER_FIXUP_1078) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1376.x = _RESERVED_IDENTIFIER_FIXUP_1085;
        _RESERVED_IDENTIFIER_FIXUP_1391.x = min(_RESERVED_IDENTIFIER_FIXUP_1085, _RESERVED_IDENTIFIER_FIXUP_899.w);
        _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_1376;
        _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_1391;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1373 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1373.x = _RESERVED_IDENTIFIER_FIXUP_899.w;
        _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_1362;
        _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_1373;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1101 = (_RESERVED_IDENTIFIER_FIXUP_1499.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1444 = _RESERVED_IDENTIFIER_FIXUP_1500;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_1101;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_1101;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_913.xyz * _RESERVED_IDENTIFIER_FIXUP_1444.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450 = _RESERVED_IDENTIFIER_FIXUP_913;
    _RESERVED_IDENTIFIER_FIXUP_1450.x = _RESERVED_IDENTIFIER_FIXUP_1114.x;
    _RESERVED_IDENTIFIER_FIXUP_1450.y = _RESERVED_IDENTIFIER_FIXUP_1114.y;
    _RESERVED_IDENTIFIER_FIXUP_1450.z = _RESERVED_IDENTIFIER_FIXUP_1114.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1125 = _RESERVED_IDENTIFIER_FIXUP_1450.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1456 = _RESERVED_IDENTIFIER_FIXUP_1450;
    _RESERVED_IDENTIFIER_FIXUP_1456.x = _RESERVED_IDENTIFIER_FIXUP_1125.x;
    _RESERVED_IDENTIFIER_FIXUP_1456.y = _RESERVED_IDENTIFIER_FIXUP_1125.y;
    _RESERVED_IDENTIFIER_FIXUP_1456.z = _RESERVED_IDENTIFIER_FIXUP_1125.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1136 = _RESERVED_IDENTIFIER_FIXUP_1456.xyz + _RESERVED_IDENTIFIER_FIXUP_1456.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1462 = _RESERVED_IDENTIFIER_FIXUP_1456;
    _RESERVED_IDENTIFIER_FIXUP_1462.x = _RESERVED_IDENTIFIER_FIXUP_1136.x;
    _RESERVED_IDENTIFIER_FIXUP_1462.y = _RESERVED_IDENTIFIER_FIXUP_1136.y;
    _RESERVED_IDENTIFIER_FIXUP_1462.z = _RESERVED_IDENTIFIER_FIXUP_1136.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1147 = _RESERVED_IDENTIFIER_FIXUP_1462.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_1147.x;
    _RESERVED_IDENTIFIER_FIXUP_1444.y = _RESERVED_IDENTIFIER_FIXUP_1147.y;
    _RESERVED_IDENTIFIER_FIXUP_1444.z = _RESERVED_IDENTIFIER_FIXUP_1147.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1161 = (_RESERVED_IDENTIFIER_FIXUP_1444.xyz * _RESERVED_IDENTIFIER_FIXUP_1499.xxx) + _RESERVED_IDENTIFIER_FIXUP_1462.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_1462;
    _RESERVED_IDENTIFIER_FIXUP_1474.x = _RESERVED_IDENTIFIER_FIXUP_1161.x;
    _RESERVED_IDENTIFIER_FIXUP_1474.y = _RESERVED_IDENTIFIER_FIXUP_1161.y;
    _RESERVED_IDENTIFIER_FIXUP_1474.z = _RESERVED_IDENTIFIER_FIXUP_1161.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1474.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1480 = _RESERVED_IDENTIFIER_FIXUP_1474;
    _RESERVED_IDENTIFIER_FIXUP_1480.x = _RESERVED_IDENTIFIER_FIXUP_1174.x;
    _RESERVED_IDENTIFIER_FIXUP_1480.y = _RESERVED_IDENTIFIER_FIXUP_1174.y;
    _RESERVED_IDENTIFIER_FIXUP_1480.z = _RESERVED_IDENTIFIER_FIXUP_1174.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1480.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_436 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_445;
    if (_RESERVED_IDENTIFIER_FIXUP_436)
    {
        _RESERVED_IDENTIFIER_FIXUP_445 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_445 = _RESERVED_IDENTIFIER_FIXUP_436;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_445)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_482 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1341.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_509 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211;
    if (_RESERVED_IDENTIFIER_FIXUP_482 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1211 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_482), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_509);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1211 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_509);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1211;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1101);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r2.xy;
        float param_3 = r2.w;
        r2 = hdLod5(param_2, param_3);
        vec2 hdB123 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB123.x;
        r1.z = hdB123.y;
        vec2 hdB145 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB145.x;
        r3.y = hdB145.y;
        vec2 hdB153 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB153.x;
        r3.w = hdB153.y;
        vec2 param_4 = r3.xy;
        float param_5 = r3.w;
        r3 = hdLod5(param_4, param_5);
        r2.x += r3.x;
        vec2 hdB176 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB176.x;
        r3.y = hdB176.y;
        vec2 hdB183 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB183.x;
        r3.w = hdB183.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r2.x += r3.x;
        vec2 hdB206 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB206.x;
        r3.y = hdB206.y;
        vec2 hdB213 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB213.x;
        r3.w = hdB213.y;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
        r2.x += r3.x;
        vec2 hdB236 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB236.x;
        r3.y = hdB236.y;
        vec2 hdB243 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB243.x;
        r3.w = hdB243.y;
        vec2 param_10 = r3.xy;
        float param_11 = r3.w;
        r3 = hdLod5(param_10, param_11);
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
    vec4 hdB291 = r0;
    vec3 hdB295 = hdB291.xyz * r1.xxx;
    r0.x = hdB295.x;
    r0.y = hdB295.y;
    r0.z = hdB295.z;
    vec4 hdB302 = r0;
    vec3 hdB306 = hdB302.xyz * v0.xyz;
    r0.x = hdB306.x;
    r0.y = hdB306.y;
    r0.z = hdB306.z;
    vec4 hdB313 = r0;
    vec4 hdB315 = r0;
    vec3 hdB317 = hdB313.xyz + hdB315.xyz;
    r0.x = hdB317.x;
    r0.y = hdB317.y;
    r0.z = hdB317.z;
    vec3 hdB328 = r0.www * v1.xyz;
    r1.x = hdB328.x;
    r1.y = hdB328.y;
    r1.z = hdB328.z;
    vec4 hdB340 = r0;
    vec3 hdB342 = (r1.xyz * r2.xxx) + hdB340.xyz;
    r0.x = hdB342.x;
    r0.y = hdB342.y;
    r0.z = hdB342.z;
    vec4 hdB349 = r0;
    vec3 hdB356 = hdB349.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB356.x;
    r0.y = hdB356.y;
    r0.z = hdB356.z;
    vec3 hdB371 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB371.x;
    oC0.y = hdB371.y;
    oC0.z = hdB371.z;
    oC0.w = 1.0;
    bool hdB384 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB392;
    if (hdB384)
    {
        hdB392 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB392 = hdB384;
    }
    if (hdB392)
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
    bool _1404 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1414;
    if (_1404)
    {
        _1414 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1414 = _1404;
    }
    if (_1414)
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
        bool _1439 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1454;
        if (!_1439)
        {
            _1454 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1454 = _1439;
        }
        if (_1454)
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
