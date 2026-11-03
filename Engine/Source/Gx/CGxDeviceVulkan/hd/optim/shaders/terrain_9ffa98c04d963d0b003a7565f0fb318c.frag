#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1733;
vec4 _RESERVED_IDENTIFIER_FIXUP_1734;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _91 = hdOverride >= 0;
    bool _101;
    if (_91)
    {
        _101 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _101 = _91;
    }
    vec4 _102;
    if (_101)
    {
        _102 = vec4(float(hdOverride));
    }
    else
    {
        _102 = value;
    }
    return _102;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _119 = hdOverride >= 0;
    bool _129;
    if (_119)
    {
        _129 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _129 = _119;
    }
    vec4 _130;
    if (_129)
    {
        _130 = vec4(float(hdOverride));
    }
    else
    {
        _130 = value;
    }
    return _130;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _147 = hdOverride >= 0;
    bool _156;
    if (_147)
    {
        _156 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _156 = _147;
    }
    vec4 _157;
    if (_156)
    {
        _157 = vec4(float(hdOverride));
    }
    else
    {
        _157 = value;
    }
    return _157;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _174 = hdOverride >= 0;
    bool _184;
    if (_174)
    {
        _184 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_643 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_646 = _RESERVED_IDENTIFIER_FIXUP_643.xy;
    float _RESERVED_IDENTIFIER_FIXUP_648 = _RESERVED_IDENTIFIER_FIXUP_643.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_646;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_648;
    vec4 _RESERVED_IDENTIFIER_FIXUP_649 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_652 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_652.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1415;
    _RESERVED_IDENTIFIER_FIXUP_1415.w = _RESERVED_IDENTIFIER_FIXUP_656;
    vec2 _RESERVED_IDENTIFIER_FIXUP_660 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_662 = _RESERVED_IDENTIFIER_FIXUP_660.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_649;
    _RESERVED_IDENTIFIER_FIXUP_1417.y = _RESERVED_IDENTIFIER_FIXUP_662;
    float _RESERVED_IDENTIFIER_FIXUP_664 = _RESERVED_IDENTIFIER_FIXUP_660.y;
    _RESERVED_IDENTIFIER_FIXUP_1417.z = _RESERVED_IDENTIFIER_FIXUP_664;
    vec2 _RESERVED_IDENTIFIER_FIXUP_670 = _RESERVED_IDENTIFIER_FIXUP_1417.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1421 = _RESERVED_IDENTIFIER_FIXUP_1415;
    _RESERVED_IDENTIFIER_FIXUP_1421.x = _RESERVED_IDENTIFIER_FIXUP_670.x;
    _RESERVED_IDENTIFIER_FIXUP_1421.y = _RESERVED_IDENTIFIER_FIXUP_670.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1421.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_656;
    float _RESERVED_IDENTIFIER_FIXUP_685 = _RESERVED_IDENTIFIER_FIXUP_649.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_685;
    vec2 _RESERVED_IDENTIFIER_FIXUP_699 = _RESERVED_IDENTIFIER_FIXUP_1417.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434 = _RESERVED_IDENTIFIER_FIXUP_1415;
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_699.x;
    _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_699.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1434.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_656;
    float _RESERVED_IDENTIFIER_FIXUP_714 = _RESERVED_IDENTIFIER_FIXUP_685 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_714;
    vec2 _RESERVED_IDENTIFIER_FIXUP_721 = _RESERVED_IDENTIFIER_FIXUP_1417.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1443;
    _RESERVED_IDENTIFIER_FIXUP_1443.x = _RESERVED_IDENTIFIER_FIXUP_721.x;
    _RESERVED_IDENTIFIER_FIXUP_1443.y = _RESERVED_IDENTIFIER_FIXUP_721.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_731 = _RESERVED_IDENTIFIER_FIXUP_1417.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_731.x;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_731.y;
    _RESERVED_IDENTIFIER_FIXUP_1443.w = _RESERVED_IDENTIFIER_FIXUP_656;
    _RESERVED_IDENTIFIER_FIXUP_1447.w = _RESERVED_IDENTIFIER_FIXUP_656;
    float _RESERVED_IDENTIFIER_FIXUP_785 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_803 = hdTex3(param_6);
    vec3 _RESERVED_IDENTIFIER_FIXUP_815 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1733).xyz;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1443.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_656;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1447.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_656;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1735 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_785 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_714 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_803.w), _RESERVED_IDENTIFIER_FIXUP_815 + _RESERVED_IDENTIFIER_FIXUP_815);
    vec2 param_11 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_826 = hdTex0(param_11).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_828 = _RESERVED_IDENTIFIER_FIXUP_1735.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_829 = _RESERVED_IDENTIFIER_FIXUP_826 * _RESERVED_IDENTIFIER_FIXUP_828;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1493;
    _RESERVED_IDENTIFIER_FIXUP_1493.x = _RESERVED_IDENTIFIER_FIXUP_829.x;
    _RESERVED_IDENTIFIER_FIXUP_1493.y = _RESERVED_IDENTIFIER_FIXUP_829.y;
    _RESERVED_IDENTIFIER_FIXUP_1493.z = _RESERVED_IDENTIFIER_FIXUP_829.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_839 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1499;
    _RESERVED_IDENTIFIER_FIXUP_1499.x = _RESERVED_IDENTIFIER_FIXUP_839.x;
    _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_839.y;
    _RESERVED_IDENTIFIER_FIXUP_1499.z = _RESERVED_IDENTIFIER_FIXUP_839.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_853 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1499.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_854 = mix(_RESERVED_IDENTIFIER_FIXUP_1493.xyz, _RESERVED_IDENTIFIER_FIXUP_826, _RESERVED_IDENTIFIER_FIXUP_853);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1505;
    _RESERVED_IDENTIFIER_FIXUP_1505.x = _RESERVED_IDENTIFIER_FIXUP_854.x;
    _RESERVED_IDENTIFIER_FIXUP_1505.y = _RESERVED_IDENTIFIER_FIXUP_854.y;
    _RESERVED_IDENTIFIER_FIXUP_1505.z = _RESERVED_IDENTIFIER_FIXUP_854.z;
    vec2 param_12 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_868 = hdTex1(param_12).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_869 = _RESERVED_IDENTIFIER_FIXUP_828 * _RESERVED_IDENTIFIER_FIXUP_868;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1511;
    _RESERVED_IDENTIFIER_FIXUP_1511.x = _RESERVED_IDENTIFIER_FIXUP_869.x;
    _RESERVED_IDENTIFIER_FIXUP_1511.y = _RESERVED_IDENTIFIER_FIXUP_869.y;
    _RESERVED_IDENTIFIER_FIXUP_1511.z = _RESERVED_IDENTIFIER_FIXUP_869.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_883 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1499.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_884 = mix(_RESERVED_IDENTIFIER_FIXUP_1511.xyz, _RESERVED_IDENTIFIER_FIXUP_868, _RESERVED_IDENTIFIER_FIXUP_883);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1517;
    _RESERVED_IDENTIFIER_FIXUP_1517.x = _RESERVED_IDENTIFIER_FIXUP_884.x;
    _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_884.y;
    _RESERVED_IDENTIFIER_FIXUP_1517.z = _RESERVED_IDENTIFIER_FIXUP_884.z;
    vec2 param_13 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_903 = hdTex2(param_13).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_904 = _RESERVED_IDENTIFIER_FIXUP_828 * _RESERVED_IDENTIFIER_FIXUP_903;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_803;
    _RESERVED_IDENTIFIER_FIXUP_1523.x = _RESERVED_IDENTIFIER_FIXUP_904.x;
    _RESERVED_IDENTIFIER_FIXUP_1523.z = _RESERVED_IDENTIFIER_FIXUP_904.y;
    _RESERVED_IDENTIFIER_FIXUP_1523.w = _RESERVED_IDENTIFIER_FIXUP_904.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_918 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1499.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_919 = mix(_RESERVED_IDENTIFIER_FIXUP_1523.xzw, _RESERVED_IDENTIFIER_FIXUP_903, _RESERVED_IDENTIFIER_FIXUP_918);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1529;
    _RESERVED_IDENTIFIER_FIXUP_1529.x = _RESERVED_IDENTIFIER_FIXUP_919.x;
    _RESERVED_IDENTIFIER_FIXUP_1529.y = _RESERVED_IDENTIFIER_FIXUP_919.y;
    _RESERVED_IDENTIFIER_FIXUP_1529.z = _RESERVED_IDENTIFIER_FIXUP_919.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1535;
    _RESERVED_IDENTIFIER_FIXUP_1535.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1535.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1535.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1736 = vec4(_RESERVED_IDENTIFIER_FIXUP_1735.xxx * _RESERVED_IDENTIFIER_FIXUP_1535.xyz, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_972 = (mix(mix(_RESERVED_IDENTIFIER_FIXUP_1505, _RESERVED_IDENTIFIER_FIXUP_1517, _RESERVED_IDENTIFIER_FIXUP_803.xxxx), _RESERVED_IDENTIFIER_FIXUP_1529, _RESERVED_IDENTIFIER_FIXUP_1523.yyyy).xyz * _RESERVED_IDENTIFIER_FIXUP_1736.www) + _RESERVED_IDENTIFIER_FIXUP_1736.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1552;
    _RESERVED_IDENTIFIER_FIXUP_1552.x = _RESERVED_IDENTIFIER_FIXUP_972.x;
    _RESERVED_IDENTIFIER_FIXUP_1552.y = _RESERVED_IDENTIFIER_FIXUP_972.y;
    _RESERVED_IDENTIFIER_FIXUP_1552.z = _RESERVED_IDENTIFIER_FIXUP_972.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_985 = _RESERVED_IDENTIFIER_FIXUP_1552.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1558;
    _RESERVED_IDENTIFIER_FIXUP_1558.x = _RESERVED_IDENTIFIER_FIXUP_985.x;
    _RESERVED_IDENTIFIER_FIXUP_1558.y = _RESERVED_IDENTIFIER_FIXUP_985.y;
    _RESERVED_IDENTIFIER_FIXUP_1558.z = _RESERVED_IDENTIFIER_FIXUP_985.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1000 = _RESERVED_IDENTIFIER_FIXUP_1558.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564;
    _RESERVED_IDENTIFIER_FIXUP_1564.x = _RESERVED_IDENTIFIER_FIXUP_1000.x;
    _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_1000.y;
    _RESERVED_IDENTIFIER_FIXUP_1564.z = _RESERVED_IDENTIFIER_FIXUP_1000.z;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_646;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_648;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1042 = hdLod5(param_14, param_15);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1577 = _RESERVED_IDENTIFIER_FIXUP_1042;
    _RESERVED_IDENTIFIER_FIXUP_1577.y = _RESERVED_IDENTIFIER_FIXUP_662;
    _RESERVED_IDENTIFIER_FIXUP_1577.z = _RESERVED_IDENTIFIER_FIXUP_664;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1063 = _RESERVED_IDENTIFIER_FIXUP_1577.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_1415;
    _RESERVED_IDENTIFIER_FIXUP_1581.x = _RESERVED_IDENTIFIER_FIXUP_1063.x;
    _RESERVED_IDENTIFIER_FIXUP_1581.y = _RESERVED_IDENTIFIER_FIXUP_1063.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1581.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_656;
    float _RESERVED_IDENTIFIER_FIXUP_1078 = _RESERVED_IDENTIFIER_FIXUP_1042.x + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1577.x = _RESERVED_IDENTIFIER_FIXUP_1078;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1092 = _RESERVED_IDENTIFIER_FIXUP_1577.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1594 = _RESERVED_IDENTIFIER_FIXUP_1415;
    _RESERVED_IDENTIFIER_FIXUP_1594.x = _RESERVED_IDENTIFIER_FIXUP_1092.x;
    _RESERVED_IDENTIFIER_FIXUP_1594.y = _RESERVED_IDENTIFIER_FIXUP_1092.y;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1594.xy;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_656;
    float _RESERVED_IDENTIFIER_FIXUP_1107 = _RESERVED_IDENTIFIER_FIXUP_1078 + hdLod5(param_18, param_19).x;
    _RESERVED_IDENTIFIER_FIXUP_1577.x = _RESERVED_IDENTIFIER_FIXUP_1107;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_1577.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1603;
    _RESERVED_IDENTIFIER_FIXUP_1603.x = _RESERVED_IDENTIFIER_FIXUP_1114.x;
    _RESERVED_IDENTIFIER_FIXUP_1603.y = _RESERVED_IDENTIFIER_FIXUP_1114.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1124 = _RESERVED_IDENTIFIER_FIXUP_1577.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1607;
    _RESERVED_IDENTIFIER_FIXUP_1607.x = _RESERVED_IDENTIFIER_FIXUP_1124.x;
    _RESERVED_IDENTIFIER_FIXUP_1607.y = _RESERVED_IDENTIFIER_FIXUP_1124.y;
    _RESERVED_IDENTIFIER_FIXUP_1603.w = _RESERVED_IDENTIFIER_FIXUP_656;
    _RESERVED_IDENTIFIER_FIXUP_1607.w = _RESERVED_IDENTIFIER_FIXUP_656;
    vec2 param_20 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196 = hdTex3(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1603.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_656;
    vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1607.xy;
    float param_24 = _RESERVED_IDENTIFIER_FIXUP_656;
    float _RESERVED_IDENTIFIER_FIXUP_1201 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_785 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_1107 + hdLod5(param_21, param_22).x) + hdLod5(param_23, param_24).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1196.w);
    vec2 param_25 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1206 = hdTex0(param_25);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1737 = vec4(_RESERVED_IDENTIFIER_FIXUP_1201, color0.xyz + color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1219 = _RESERVED_IDENTIFIER_FIXUP_1206.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1221 = _RESERVED_IDENTIFIER_FIXUP_1737.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1219 * _RESERVED_IDENTIFIER_FIXUP_1221;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1653;
    _RESERVED_IDENTIFIER_FIXUP_1653.x = _RESERVED_IDENTIFIER_FIXUP_1222.x;
    _RESERVED_IDENTIFIER_FIXUP_1653.y = _RESERVED_IDENTIFIER_FIXUP_1222.y;
    _RESERVED_IDENTIFIER_FIXUP_1653.z = _RESERVED_IDENTIFIER_FIXUP_1222.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1247 = mix(_RESERVED_IDENTIFIER_FIXUP_1653.xyz, _RESERVED_IDENTIFIER_FIXUP_1219, _RESERVED_IDENTIFIER_FIXUP_853);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1665 = _RESERVED_IDENTIFIER_FIXUP_1206;
    _RESERVED_IDENTIFIER_FIXUP_1665.x = _RESERVED_IDENTIFIER_FIXUP_1247.x;
    _RESERVED_IDENTIFIER_FIXUP_1665.y = _RESERVED_IDENTIFIER_FIXUP_1247.y;
    _RESERVED_IDENTIFIER_FIXUP_1665.z = _RESERVED_IDENTIFIER_FIXUP_1247.z;
    vec2 param_26 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1257 = hdTex1(param_26);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_1257.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_1221 * _RESERVED_IDENTIFIER_FIXUP_1261;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1671;
    _RESERVED_IDENTIFIER_FIXUP_1671.x = _RESERVED_IDENTIFIER_FIXUP_1262.x;
    _RESERVED_IDENTIFIER_FIXUP_1671.y = _RESERVED_IDENTIFIER_FIXUP_1262.y;
    _RESERVED_IDENTIFIER_FIXUP_1671.z = _RESERVED_IDENTIFIER_FIXUP_1262.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1277 = mix(_RESERVED_IDENTIFIER_FIXUP_1671.xyz, _RESERVED_IDENTIFIER_FIXUP_1261, _RESERVED_IDENTIFIER_FIXUP_883);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1677 = _RESERVED_IDENTIFIER_FIXUP_1257;
    _RESERVED_IDENTIFIER_FIXUP_1677.x = _RESERVED_IDENTIFIER_FIXUP_1277.x;
    _RESERVED_IDENTIFIER_FIXUP_1677.y = _RESERVED_IDENTIFIER_FIXUP_1277.y;
    _RESERVED_IDENTIFIER_FIXUP_1677.z = _RESERVED_IDENTIFIER_FIXUP_1277.z;
    vec2 param_27 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1292 = hdTex2(param_27);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_1292.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_1221 * _RESERVED_IDENTIFIER_FIXUP_1296;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1683 = _RESERVED_IDENTIFIER_FIXUP_1196;
    _RESERVED_IDENTIFIER_FIXUP_1683.x = _RESERVED_IDENTIFIER_FIXUP_1297.x;
    _RESERVED_IDENTIFIER_FIXUP_1683.z = _RESERVED_IDENTIFIER_FIXUP_1297.y;
    _RESERVED_IDENTIFIER_FIXUP_1683.w = _RESERVED_IDENTIFIER_FIXUP_1297.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1312 = mix(_RESERVED_IDENTIFIER_FIXUP_1683.xzw, _RESERVED_IDENTIFIER_FIXUP_1296, _RESERVED_IDENTIFIER_FIXUP_918);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1689 = _RESERVED_IDENTIFIER_FIXUP_1292;
    _RESERVED_IDENTIFIER_FIXUP_1689.x = _RESERVED_IDENTIFIER_FIXUP_1312.x;
    _RESERVED_IDENTIFIER_FIXUP_1689.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
    _RESERVED_IDENTIFIER_FIXUP_1689.z = _RESERVED_IDENTIFIER_FIXUP_1312.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1323 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1665, _RESERVED_IDENTIFIER_FIXUP_1677, _RESERVED_IDENTIFIER_FIXUP_1196.xxxx), _RESERVED_IDENTIFIER_FIXUP_1689, _RESERVED_IDENTIFIER_FIXUP_1683.yyyy);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1328 = _RESERVED_IDENTIFIER_FIXUP_1323.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1695;
    _RESERVED_IDENTIFIER_FIXUP_1695.x = _RESERVED_IDENTIFIER_FIXUP_1328.x;
    _RESERVED_IDENTIFIER_FIXUP_1695.y = _RESERVED_IDENTIFIER_FIXUP_1328.y;
    _RESERVED_IDENTIFIER_FIXUP_1695.z = _RESERVED_IDENTIFIER_FIXUP_1328.z;
    float _RESERVED_IDENTIFIER_FIXUP_1349 = (_RESERVED_IDENTIFIER_FIXUP_1201 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1738 = vec4(_RESERVED_IDENTIFIER_FIXUP_1737.xxx * _RESERVED_IDENTIFIER_FIXUP_1695.xyz, _RESERVED_IDENTIFIER_FIXUP_1349);
    _RESERVED_IDENTIFIER_FIXUP_1738.w = _RESERVED_IDENTIFIER_FIXUP_1349;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1365 = (_RESERVED_IDENTIFIER_FIXUP_1323.xyz * _RESERVED_IDENTIFIER_FIXUP_1738.www) + _RESERVED_IDENTIFIER_FIXUP_1738.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1714;
    _RESERVED_IDENTIFIER_FIXUP_1714.x = _RESERVED_IDENTIFIER_FIXUP_1365.x;
    _RESERVED_IDENTIFIER_FIXUP_1714.y = _RESERVED_IDENTIFIER_FIXUP_1365.y;
    _RESERVED_IDENTIFIER_FIXUP_1714.z = _RESERVED_IDENTIFIER_FIXUP_1365.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1378 = _RESERVED_IDENTIFIER_FIXUP_1714.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1720;
    _RESERVED_IDENTIFIER_FIXUP_1720.x = _RESERVED_IDENTIFIER_FIXUP_1378.x;
    _RESERVED_IDENTIFIER_FIXUP_1720.y = _RESERVED_IDENTIFIER_FIXUP_1378.y;
    _RESERVED_IDENTIFIER_FIXUP_1720.z = _RESERVED_IDENTIFIER_FIXUP_1378.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1720.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_507 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_516;
    if (_RESERVED_IDENTIFIER_FIXUP_507)
    {
        _RESERVED_IDENTIFIER_FIXUP_516 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_516 = _RESERVED_IDENTIFIER_FIXUP_507;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_516)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_553 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1564.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_579 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1404;
    if (_RESERVED_IDENTIFIER_FIXUP_553 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1404 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_553), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_579);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1404 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_579);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1404;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1349);
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
    r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB68 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB68.x;
    r1.w = hdB68.y;
    vec2 hdB78 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB78.x;
    r0.z = hdB78.y;
    vec2 hdB100 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB100.x;
    r1.y = hdB100.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB120 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB120.x;
    r1.w = hdB120.y;
    vec2 hdB131 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB131.x;
    r1.y = hdB131.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB154 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB154.x;
    r1.y = hdB154.y;
    vec2 hdB165 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB165.x;
    r2.y = hdB165.y;
    vec2 hdB172 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB172.x;
    r1.w = hdB172.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB191 = vec2(1.0, 0.0) * v5.zx;
    r2.z = hdB191.x;
    r2.w = hdB191.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v4.xy;
    r1 = hdTex3(param_10);
    r2.x = min(r0.x, r1.w);
    vec2 param_11 = v2.xy;
    r0 = hdTex0(param_11);
    vec3 hdB259 = v0.xyz + v0.xyz;
    r2.y = hdB259.x;
    r2.z = hdB259.y;
    r2.w = hdB259.z;
    vec3 hdB270 = r0.xyz * r2.yzw;
    r3.x = hdB270.x;
    r3.y = hdB270.y;
    r3.z = hdB270.z;
    vec3 hdB281 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB281.x;
    r4.y = hdB281.y;
    r4.z = hdB281.z;
    vec4 hdB290 = r0;
    vec3 hdB299 = mix(r3.xyz, hdB290.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB299.x;
    r0.y = hdB299.y;
    r0.z = hdB299.z;
    vec2 param_12 = v3.xy;
    r3 = hdTex1(param_12);
    vec3 hdB315 = r2.yzw * r3.xyz;
    r5.x = hdB315.x;
    r5.y = hdB315.y;
    r5.z = hdB315.z;
    vec4 hdB324 = r3;
    vec3 hdB330 = mix(r5.xyz, hdB324.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r3.x = hdB330.x;
    r3.y = hdB330.y;
    r3.z = hdB330.z;
    r5 = mix(r0, r3, r1.xxxx);
    vec2 param_13 = v3.wz;
    r0 = hdTex2(param_13);
    vec3 hdB351 = r2.yzw * r0.xyz;
    r1.x = hdB351.x;
    r1.z = hdB351.y;
    r1.w = hdB351.z;
    vec4 hdB360 = r0;
    vec3 hdB366 = mix(r1.xzw, hdB360.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = hdB366.x;
    r0.y = hdB366.y;
    r0.z = hdB366.z;
    r3 = mix(r5, r0, r1.yyyy);
    vec3 hdB382 = r3.www * v1.xyz;
    r0.x = hdB382.x;
    r0.y = hdB382.y;
    r0.z = hdB382.z;
    vec4 hdB391 = r0;
    vec3 hdB393 = r2.xxx * hdB391.xyz;
    r0.x = hdB393.x;
    r0.y = hdB393.y;
    r0.z = hdB393.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB409 = r0;
    vec4 hdB412 = r0;
    vec3 hdB414 = (r3.xyz * hdB409.www) + hdB412.xyz;
    r0.x = hdB414.x;
    r0.y = hdB414.y;
    r0.z = hdB414.z;
    vec4 hdB421 = r0;
    vec3 hdB428 = hdB421.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB428.x;
    r0.y = hdB428.y;
    r0.z = hdB428.z;
    vec3 hdB443 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB443.x;
    oC0.y = hdB443.y;
    oC0.z = hdB443.z;
    oC0.w = 1.0;
    bool hdB455 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB463;
    if (hdB455)
    {
        hdB463 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB463 = hdB455;
    }
    if (hdB463)
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
    bool _1622 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1632;
    if (_1622)
    {
        _1632 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1632 = _1622;
    }
    if (_1632)
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
        bool _1657 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1672;
        if (!_1657)
        {
            _1672 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1672 = _1657;
        }
        if (_1672)
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
