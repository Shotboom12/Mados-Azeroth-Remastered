#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1910;
vec4 _RESERVED_IDENTIFIER_FIXUP_1911;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _120 = hdOverride >= 0;
    bool _129;
    if (_120)
    {
        _129 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _129 = _120;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _147 = hdOverride >= 0;
    bool _157;
    if (_147)
    {
        _157 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _157 = _147;
    }
    vec4 _158;
    if (_157)
    {
        _158 = vec4(float(hdOverride));
    }
    else
    {
        _158 = value;
    }
    return _158;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _175 = hdOverride >= 0;
    bool _185;
    if (_175)
    {
        _185 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _185 = _175;
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
    vec3 _RESERVED_IDENTIFIER_FIXUP_699 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1910).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_702 = _RESERVED_IDENTIFIER_FIXUP_699 + _RESERVED_IDENTIFIER_FIXUP_699;
    float _RESERVED_IDENTIFIER_FIXUP_704 = _RESERVED_IDENTIFIER_FIXUP_702.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1555;
    _RESERVED_IDENTIFIER_FIXUP_1555.x = _RESERVED_IDENTIFIER_FIXUP_704;
    _RESERVED_IDENTIFIER_FIXUP_1555.y = _RESERVED_IDENTIFIER_FIXUP_702.y;
    _RESERVED_IDENTIFIER_FIXUP_1555.z = _RESERVED_IDENTIFIER_FIXUP_702.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_710 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_713 = _RESERVED_IDENTIFIER_FIXUP_710 * _RESERVED_IDENTIFIER_FIXUP_1555.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1561;
    _RESERVED_IDENTIFIER_FIXUP_1561.x = _RESERVED_IDENTIFIER_FIXUP_713.x;
    _RESERVED_IDENTIFIER_FIXUP_1561.y = _RESERVED_IDENTIFIER_FIXUP_713.y;
    _RESERVED_IDENTIFIER_FIXUP_1561.z = _RESERVED_IDENTIFIER_FIXUP_713.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_722 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_730 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_722.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_731 = mix(_RESERVED_IDENTIFIER_FIXUP_1561.xyz, _RESERVED_IDENTIFIER_FIXUP_710, _RESERVED_IDENTIFIER_FIXUP_730);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567;
    _RESERVED_IDENTIFIER_FIXUP_1567.x = _RESERVED_IDENTIFIER_FIXUP_731.x;
    _RESERVED_IDENTIFIER_FIXUP_1567.y = _RESERVED_IDENTIFIER_FIXUP_731.y;
    _RESERVED_IDENTIFIER_FIXUP_1567.z = _RESERVED_IDENTIFIER_FIXUP_731.z;
    vec2 param_1 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_741 = hdTex4(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_749 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_741.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1912 = vec4(_RESERVED_IDENTIFIER_FIXUP_704, _RESERVED_IDENTIFIER_FIXUP_702.yz, _RESERVED_IDENTIFIER_FIXUP_749);
    _RESERVED_IDENTIFIER_FIXUP_1912.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_749;
    vec2 param_2 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_757 = hdTex0(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_760 = _RESERVED_IDENTIFIER_FIXUP_757 * _RESERVED_IDENTIFIER_FIXUP_1912.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1578;
    _RESERVED_IDENTIFIER_FIXUP_1578.x = _RESERVED_IDENTIFIER_FIXUP_760.x;
    _RESERVED_IDENTIFIER_FIXUP_1578.y = _RESERVED_IDENTIFIER_FIXUP_760.y;
    _RESERVED_IDENTIFIER_FIXUP_1578.z = _RESERVED_IDENTIFIER_FIXUP_760.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_774 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_722.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = mix(_RESERVED_IDENTIFIER_FIXUP_1578.xyz, _RESERVED_IDENTIFIER_FIXUP_757, _RESERVED_IDENTIFIER_FIXUP_774);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1584;
    _RESERVED_IDENTIFIER_FIXUP_1584.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1584.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1584.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    vec2 param_3 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_795 = hdTex2(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_796 = _RESERVED_IDENTIFIER_FIXUP_1912.xyz * _RESERVED_IDENTIFIER_FIXUP_795;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1590;
    _RESERVED_IDENTIFIER_FIXUP_1590.x = _RESERVED_IDENTIFIER_FIXUP_796.x;
    _RESERVED_IDENTIFIER_FIXUP_1590.y = _RESERVED_IDENTIFIER_FIXUP_796.y;
    _RESERVED_IDENTIFIER_FIXUP_1590.z = _RESERVED_IDENTIFIER_FIXUP_796.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_810 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_722.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_811 = mix(_RESERVED_IDENTIFIER_FIXUP_1590.xyz, _RESERVED_IDENTIFIER_FIXUP_795, _RESERVED_IDENTIFIER_FIXUP_810);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1596;
    _RESERVED_IDENTIFIER_FIXUP_1596.x = _RESERVED_IDENTIFIER_FIXUP_811.x;
    _RESERVED_IDENTIFIER_FIXUP_1596.y = _RESERVED_IDENTIFIER_FIXUP_811.y;
    _RESERVED_IDENTIFIER_FIXUP_1596.z = _RESERVED_IDENTIFIER_FIXUP_811.z;
    vec2 param_4 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_831 = hdTex3(param_4).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_832 = _RESERVED_IDENTIFIER_FIXUP_1912.xyz * _RESERVED_IDENTIFIER_FIXUP_831;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1602;
    _RESERVED_IDENTIFIER_FIXUP_1602.x = _RESERVED_IDENTIFIER_FIXUP_832.x;
    _RESERVED_IDENTIFIER_FIXUP_1602.y = _RESERVED_IDENTIFIER_FIXUP_832.y;
    _RESERVED_IDENTIFIER_FIXUP_1602.z = _RESERVED_IDENTIFIER_FIXUP_832.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_846 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_722.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_847 = mix(_RESERVED_IDENTIFIER_FIXUP_1602.xyz, _RESERVED_IDENTIFIER_FIXUP_831, _RESERVED_IDENTIFIER_FIXUP_846);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1608;
    _RESERVED_IDENTIFIER_FIXUP_1608.x = _RESERVED_IDENTIFIER_FIXUP_847.x;
    _RESERVED_IDENTIFIER_FIXUP_1608.y = _RESERVED_IDENTIFIER_FIXUP_847.y;
    _RESERVED_IDENTIFIER_FIXUP_1608.z = _RESERVED_IDENTIFIER_FIXUP_847.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_859 = (_RESERVED_IDENTIFIER_FIXUP_1608 * _RESERVED_IDENTIFIER_FIXUP_741.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1596 * _RESERVED_IDENTIFIER_FIXUP_741.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1584 * _RESERVED_IDENTIFIER_FIXUP_1912.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1567 * _RESERVED_IDENTIFIER_FIXUP_741.xxxx)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_874 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_877 = _RESERVED_IDENTIFIER_FIXUP_874.xy;
    float _RESERVED_IDENTIFIER_FIXUP_879 = _RESERVED_IDENTIFIER_FIXUP_874.w;
    vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_877;
    float param_6 = _RESERVED_IDENTIFIER_FIXUP_879;
    vec4 _RESERVED_IDENTIFIER_FIXUP_880 = hdLod5(param_5, param_6);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1623;
    _RESERVED_IDENTIFIER_FIXUP_1623.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_888 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_890 = _RESERVED_IDENTIFIER_FIXUP_888.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1625 = _RESERVED_IDENTIFIER_FIXUP_741;
    _RESERVED_IDENTIFIER_FIXUP_1625.x = _RESERVED_IDENTIFIER_FIXUP_890;
    float _RESERVED_IDENTIFIER_FIXUP_892 = _RESERVED_IDENTIFIER_FIXUP_888.y;
    _RESERVED_IDENTIFIER_FIXUP_1625.y = _RESERVED_IDENTIFIER_FIXUP_892;
    vec2 _RESERVED_IDENTIFIER_FIXUP_898 = _RESERVED_IDENTIFIER_FIXUP_1625.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_1623;
    _RESERVED_IDENTIFIER_FIXUP_1629.x = _RESERVED_IDENTIFIER_FIXUP_898.x;
    _RESERVED_IDENTIFIER_FIXUP_1629.y = _RESERVED_IDENTIFIER_FIXUP_898.y;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1629.xy;
    float param_8 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_880.y = hdLod5(param_7, param_8).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_921 = _RESERVED_IDENTIFIER_FIXUP_1625.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1641 = _RESERVED_IDENTIFIER_FIXUP_1623;
    _RESERVED_IDENTIFIER_FIXUP_1641.x = _RESERVED_IDENTIFIER_FIXUP_921.x;
    _RESERVED_IDENTIFIER_FIXUP_1641.y = _RESERVED_IDENTIFIER_FIXUP_921.y;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1641.xy;
    float param_10 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_880.z = hdLod5(param_9, param_10).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_940 = _RESERVED_IDENTIFIER_FIXUP_1625.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1649;
    _RESERVED_IDENTIFIER_FIXUP_1649.x = _RESERVED_IDENTIFIER_FIXUP_940.x;
    _RESERVED_IDENTIFIER_FIXUP_1649.y = _RESERVED_IDENTIFIER_FIXUP_940.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_950 = _RESERVED_IDENTIFIER_FIXUP_1625.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1653;
    _RESERVED_IDENTIFIER_FIXUP_1653.x = _RESERVED_IDENTIFIER_FIXUP_950.x;
    _RESERVED_IDENTIFIER_FIXUP_1653.y = _RESERVED_IDENTIFIER_FIXUP_950.y;
    _RESERVED_IDENTIFIER_FIXUP_1649.w = 0.0;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1649.xy;
    float param_12 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_880.w = hdLod5(param_11, param_12).x;
    float _RESERVED_IDENTIFIER_FIXUP_977 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_880 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    _RESERVED_IDENTIFIER_FIXUP_859.w = _RESERVED_IDENTIFIER_FIXUP_977;
    _RESERVED_IDENTIFIER_FIXUP_1653.w = 0.0;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1653.xy;
    float param_14 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_994 = hdLod5(param_13, param_14).x - texcoord4.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1913 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_994);
    float _RESERVED_IDENTIFIER_FIXUP_999 = float(_RESERVED_IDENTIFIER_FIXUP_994 >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1913.w = _RESERVED_IDENTIFIER_FIXUP_999;
    float _RESERVED_IDENTIFIER_FIXUP_1005 = _RESERVED_IDENTIFIER_FIXUP_977 + _RESERVED_IDENTIFIER_FIXUP_999;
    _RESERVED_IDENTIFIER_FIXUP_859.w = _RESERVED_IDENTIFIER_FIXUP_1005;
    float _RESERVED_IDENTIFIER_FIXUP_1010 = (_RESERVED_IDENTIFIER_FIXUP_1005 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_859.w = _RESERVED_IDENTIFIER_FIXUP_1010;
    float _RESERVED_IDENTIFIER_FIXUP_1018 = max(abs(texcoord4.x), abs(texcoord4.y));
    _RESERVED_IDENTIFIER_FIXUP_1913.w = _RESERVED_IDENTIFIER_FIXUP_1018;
    float _RESERVED_IDENTIFIER_FIXUP_1024 = clamp((_RESERVED_IDENTIFIER_FIXUP_1018 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1913.w = _RESERVED_IDENTIFIER_FIXUP_1024;
    float _RESERVED_IDENTIFIER_FIXUP_1031 = (_RESERVED_IDENTIFIER_FIXUP_1024 * _RESERVED_IDENTIFIER_FIXUP_1010) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_859.w = _RESERVED_IDENTIFIER_FIXUP_1031;
    _RESERVED_IDENTIFIER_FIXUP_1913.w = min(_RESERVED_IDENTIFIER_FIXUP_1031, _RESERVED_IDENTIFIER_FIXUP_741.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1043 = _RESERVED_IDENTIFIER_FIXUP_1913.xyz * _RESERVED_IDENTIFIER_FIXUP_1913.www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1701;
    _RESERVED_IDENTIFIER_FIXUP_1701.x = _RESERVED_IDENTIFIER_FIXUP_1043.x;
    _RESERVED_IDENTIFIER_FIXUP_1701.y = _RESERVED_IDENTIFIER_FIXUP_1043.y;
    _RESERVED_IDENTIFIER_FIXUP_1701.z = _RESERVED_IDENTIFIER_FIXUP_1043.z;
    _RESERVED_IDENTIFIER_FIXUP_859.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1069 = (_RESERVED_IDENTIFIER_FIXUP_859.xyz * _RESERVED_IDENTIFIER_FIXUP_859.www) + _RESERVED_IDENTIFIER_FIXUP_1701.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1712;
    _RESERVED_IDENTIFIER_FIXUP_1712.x = _RESERVED_IDENTIFIER_FIXUP_1069.x;
    _RESERVED_IDENTIFIER_FIXUP_1712.y = _RESERVED_IDENTIFIER_FIXUP_1069.y;
    _RESERVED_IDENTIFIER_FIXUP_1712.z = _RESERVED_IDENTIFIER_FIXUP_1069.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1082 = _RESERVED_IDENTIFIER_FIXUP_1712.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1718;
    _RESERVED_IDENTIFIER_FIXUP_1718.x = _RESERVED_IDENTIFIER_FIXUP_1082.x;
    _RESERVED_IDENTIFIER_FIXUP_1718.y = _RESERVED_IDENTIFIER_FIXUP_1082.y;
    _RESERVED_IDENTIFIER_FIXUP_1718.z = _RESERVED_IDENTIFIER_FIXUP_1082.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1097 = _RESERVED_IDENTIFIER_FIXUP_1718.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1724;
    _RESERVED_IDENTIFIER_FIXUP_1724.x = _RESERVED_IDENTIFIER_FIXUP_1097.x;
    _RESERVED_IDENTIFIER_FIXUP_1724.y = _RESERVED_IDENTIFIER_FIXUP_1097.y;
    _RESERVED_IDENTIFIER_FIXUP_1724.z = _RESERVED_IDENTIFIER_FIXUP_1097.z;
    vec2 param_15 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1133 = hdTex0(param_15);
    vec2 param_16 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1137 = hdTex1(param_16);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1142 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_1144 = _RESERVED_IDENTIFIER_FIXUP_1142.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1732;
    _RESERVED_IDENTIFIER_FIXUP_1732.x = _RESERVED_IDENTIFIER_FIXUP_1144;
    _RESERVED_IDENTIFIER_FIXUP_1732.y = _RESERVED_IDENTIFIER_FIXUP_1142.y;
    _RESERVED_IDENTIFIER_FIXUP_1732.z = _RESERVED_IDENTIFIER_FIXUP_1142.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1150 = _RESERVED_IDENTIFIER_FIXUP_1137.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_1150 * _RESERVED_IDENTIFIER_FIXUP_1732.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1738;
    _RESERVED_IDENTIFIER_FIXUP_1738.x = _RESERVED_IDENTIFIER_FIXUP_1153.x;
    _RESERVED_IDENTIFIER_FIXUP_1738.y = _RESERVED_IDENTIFIER_FIXUP_1153.y;
    _RESERVED_IDENTIFIER_FIXUP_1738.z = _RESERVED_IDENTIFIER_FIXUP_1153.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1171 = mix(_RESERVED_IDENTIFIER_FIXUP_1738.xyz, _RESERVED_IDENTIFIER_FIXUP_1150, _RESERVED_IDENTIFIER_FIXUP_730);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_1137;
    _RESERVED_IDENTIFIER_FIXUP_1744.x = _RESERVED_IDENTIFIER_FIXUP_1171.x;
    _RESERVED_IDENTIFIER_FIXUP_1744.y = _RESERVED_IDENTIFIER_FIXUP_1171.y;
    _RESERVED_IDENTIFIER_FIXUP_1744.z = _RESERVED_IDENTIFIER_FIXUP_1171.z;
    vec2 param_17 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = hdTex4(param_17);
    float _RESERVED_IDENTIFIER_FIXUP_1189 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1181.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1914 = vec4(_RESERVED_IDENTIFIER_FIXUP_1144, _RESERVED_IDENTIFIER_FIXUP_1142.yz, _RESERVED_IDENTIFIER_FIXUP_1189);
    _RESERVED_IDENTIFIER_FIXUP_1914.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1189;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1197 = _RESERVED_IDENTIFIER_FIXUP_1133.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_1197 * _RESERVED_IDENTIFIER_FIXUP_1914.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1755;
    _RESERVED_IDENTIFIER_FIXUP_1755.x = _RESERVED_IDENTIFIER_FIXUP_1200.x;
    _RESERVED_IDENTIFIER_FIXUP_1755.y = _RESERVED_IDENTIFIER_FIXUP_1200.y;
    _RESERVED_IDENTIFIER_FIXUP_1755.z = _RESERVED_IDENTIFIER_FIXUP_1200.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1215 = mix(_RESERVED_IDENTIFIER_FIXUP_1755.xyz, _RESERVED_IDENTIFIER_FIXUP_1197, _RESERVED_IDENTIFIER_FIXUP_774);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1761 = _RESERVED_IDENTIFIER_FIXUP_1133;
    _RESERVED_IDENTIFIER_FIXUP_1761.x = _RESERVED_IDENTIFIER_FIXUP_1215.x;
    _RESERVED_IDENTIFIER_FIXUP_1761.y = _RESERVED_IDENTIFIER_FIXUP_1215.y;
    _RESERVED_IDENTIFIER_FIXUP_1761.z = _RESERVED_IDENTIFIER_FIXUP_1215.z;
    vec2 param_18 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1231 = hdTex2(param_18);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_1231.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1236 = _RESERVED_IDENTIFIER_FIXUP_1914.xyz * _RESERVED_IDENTIFIER_FIXUP_1235;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1767;
    _RESERVED_IDENTIFIER_FIXUP_1767.x = _RESERVED_IDENTIFIER_FIXUP_1236.x;
    _RESERVED_IDENTIFIER_FIXUP_1767.y = _RESERVED_IDENTIFIER_FIXUP_1236.y;
    _RESERVED_IDENTIFIER_FIXUP_1767.z = _RESERVED_IDENTIFIER_FIXUP_1236.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1251 = mix(_RESERVED_IDENTIFIER_FIXUP_1767.xyz, _RESERVED_IDENTIFIER_FIXUP_1235, _RESERVED_IDENTIFIER_FIXUP_810);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1773 = _RESERVED_IDENTIFIER_FIXUP_1231;
    _RESERVED_IDENTIFIER_FIXUP_1773.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
    _RESERVED_IDENTIFIER_FIXUP_1773.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
    _RESERVED_IDENTIFIER_FIXUP_1773.z = _RESERVED_IDENTIFIER_FIXUP_1251.z;
    vec2 param_19 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1267 = hdTex3(param_19);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1271 = _RESERVED_IDENTIFIER_FIXUP_1267.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_1914.xyz * _RESERVED_IDENTIFIER_FIXUP_1271;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1779;
    _RESERVED_IDENTIFIER_FIXUP_1779.x = _RESERVED_IDENTIFIER_FIXUP_1272.x;
    _RESERVED_IDENTIFIER_FIXUP_1779.y = _RESERVED_IDENTIFIER_FIXUP_1272.y;
    _RESERVED_IDENTIFIER_FIXUP_1779.z = _RESERVED_IDENTIFIER_FIXUP_1272.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1287 = mix(_RESERVED_IDENTIFIER_FIXUP_1779.xyz, _RESERVED_IDENTIFIER_FIXUP_1271, _RESERVED_IDENTIFIER_FIXUP_846);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1785 = _RESERVED_IDENTIFIER_FIXUP_1267;
    _RESERVED_IDENTIFIER_FIXUP_1785.x = _RESERVED_IDENTIFIER_FIXUP_1287.x;
    _RESERVED_IDENTIFIER_FIXUP_1785.y = _RESERVED_IDENTIFIER_FIXUP_1287.y;
    _RESERVED_IDENTIFIER_FIXUP_1785.z = _RESERVED_IDENTIFIER_FIXUP_1287.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299 = (_RESERVED_IDENTIFIER_FIXUP_1785 * _RESERVED_IDENTIFIER_FIXUP_1181.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1773 * _RESERVED_IDENTIFIER_FIXUP_1181.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1761 * _RESERVED_IDENTIFIER_FIXUP_1914.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1744 * _RESERVED_IDENTIFIER_FIXUP_1181.xxxx)));
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_877;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_879;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1320 = hdLod5(param_20, param_21);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1802 = _RESERVED_IDENTIFIER_FIXUP_1181;
    _RESERVED_IDENTIFIER_FIXUP_1802.x = _RESERVED_IDENTIFIER_FIXUP_890;
    _RESERVED_IDENTIFIER_FIXUP_1802.y = _RESERVED_IDENTIFIER_FIXUP_892;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_1802.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1806 = _RESERVED_IDENTIFIER_FIXUP_1623;
    _RESERVED_IDENTIFIER_FIXUP_1806.x = _RESERVED_IDENTIFIER_FIXUP_1338.x;
    _RESERVED_IDENTIFIER_FIXUP_1806.y = _RESERVED_IDENTIFIER_FIXUP_1338.y;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1806.xy;
    float param_23 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1320.y = hdLod5(param_22, param_23).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1361 = _RESERVED_IDENTIFIER_FIXUP_1802.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1818 = _RESERVED_IDENTIFIER_FIXUP_1623;
    _RESERVED_IDENTIFIER_FIXUP_1818.x = _RESERVED_IDENTIFIER_FIXUP_1361.x;
    _RESERVED_IDENTIFIER_FIXUP_1818.y = _RESERVED_IDENTIFIER_FIXUP_1361.y;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1818.xy;
    float param_25 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1320.z = hdLod5(param_24, param_25).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1380 = _RESERVED_IDENTIFIER_FIXUP_1802.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1826;
    _RESERVED_IDENTIFIER_FIXUP_1826.x = _RESERVED_IDENTIFIER_FIXUP_1380.x;
    _RESERVED_IDENTIFIER_FIXUP_1826.y = _RESERVED_IDENTIFIER_FIXUP_1380.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1390 = _RESERVED_IDENTIFIER_FIXUP_1802.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1830;
    _RESERVED_IDENTIFIER_FIXUP_1830.x = _RESERVED_IDENTIFIER_FIXUP_1390.x;
    _RESERVED_IDENTIFIER_FIXUP_1830.y = _RESERVED_IDENTIFIER_FIXUP_1390.y;
    _RESERVED_IDENTIFIER_FIXUP_1826.w = 0.0;
    vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1826.xy;
    float param_27 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1320.w = hdLod5(param_26, param_27).x;
    float _RESERVED_IDENTIFIER_FIXUP_1417 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1320 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1842 = _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_1842.w = _RESERVED_IDENTIFIER_FIXUP_1417;
    _RESERVED_IDENTIFIER_FIXUP_1830.w = 0.0;
    vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_1830.xy;
    float param_29 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1434 = hdLod5(param_28, param_29).x - texcoord4.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1915 = vec4(_RESERVED_IDENTIFIER_FIXUP_1299.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_1434);
    float _RESERVED_IDENTIFIER_FIXUP_1439 = float(_RESERVED_IDENTIFIER_FIXUP_1434 >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1915.w = _RESERVED_IDENTIFIER_FIXUP_1439;
    float _RESERVED_IDENTIFIER_FIXUP_1445 = _RESERVED_IDENTIFIER_FIXUP_1417 + _RESERVED_IDENTIFIER_FIXUP_1439;
    _RESERVED_IDENTIFIER_FIXUP_1842.w = _RESERVED_IDENTIFIER_FIXUP_1445;
    float _RESERVED_IDENTIFIER_FIXUP_1450 = (_RESERVED_IDENTIFIER_FIXUP_1445 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1842.w = _RESERVED_IDENTIFIER_FIXUP_1450;
    _RESERVED_IDENTIFIER_FIXUP_1915.w = _RESERVED_IDENTIFIER_FIXUP_1018;
    float _RESERVED_IDENTIFIER_FIXUP_1464 = clamp((_RESERVED_IDENTIFIER_FIXUP_1018 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1915.w = _RESERVED_IDENTIFIER_FIXUP_1464;
    float _RESERVED_IDENTIFIER_FIXUP_1471 = (_RESERVED_IDENTIFIER_FIXUP_1464 * _RESERVED_IDENTIFIER_FIXUP_1450) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1842.w = _RESERVED_IDENTIFIER_FIXUP_1471;
    float _RESERVED_IDENTIFIER_FIXUP_1477 = min(_RESERVED_IDENTIFIER_FIXUP_1471, _RESERVED_IDENTIFIER_FIXUP_1181.w);
    _RESERVED_IDENTIFIER_FIXUP_1915.w = _RESERVED_IDENTIFIER_FIXUP_1477;
    float _RESERVED_IDENTIFIER_FIXUP_1493 = (_RESERVED_IDENTIFIER_FIXUP_1477 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1842.w = _RESERVED_IDENTIFIER_FIXUP_1493;
    _RESERVED_IDENTIFIER_FIXUP_1842.w = _RESERVED_IDENTIFIER_FIXUP_1493;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1509 = (_RESERVED_IDENTIFIER_FIXUP_1842.xyz * _RESERVED_IDENTIFIER_FIXUP_1842.www) + vec4(_RESERVED_IDENTIFIER_FIXUP_1915.xyz * _RESERVED_IDENTIFIER_FIXUP_1915.www, _RESERVED_IDENTIFIER_FIXUP_1477).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1891;
    _RESERVED_IDENTIFIER_FIXUP_1891.x = _RESERVED_IDENTIFIER_FIXUP_1509.x;
    _RESERVED_IDENTIFIER_FIXUP_1891.y = _RESERVED_IDENTIFIER_FIXUP_1509.y;
    _RESERVED_IDENTIFIER_FIXUP_1891.z = _RESERVED_IDENTIFIER_FIXUP_1509.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1522 = _RESERVED_IDENTIFIER_FIXUP_1891.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1897;
    _RESERVED_IDENTIFIER_FIXUP_1897.x = _RESERVED_IDENTIFIER_FIXUP_1522.x;
    _RESERVED_IDENTIFIER_FIXUP_1897.y = _RESERVED_IDENTIFIER_FIXUP_1522.y;
    _RESERVED_IDENTIFIER_FIXUP_1897.z = _RESERVED_IDENTIFIER_FIXUP_1522.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1897.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_557 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_566;
    if (_RESERVED_IDENTIFIER_FIXUP_557)
    {
        _RESERVED_IDENTIFIER_FIXUP_566 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_566 = _RESERVED_IDENTIFIER_FIXUP_557;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_566)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_603 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1724.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_629 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1548;
    if (_RESERVED_IDENTIFIER_FIXUP_603 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1548 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_603), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_629);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1548 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_629);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1548;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1493);
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
    vec3 hdB62 = v0.xyz + v0.xyz;
    r2.x = hdB62.x;
    r2.y = hdB62.y;
    r2.z = hdB62.z;
    vec3 hdB78 = r1.xyz * r2.xyz;
    r3.x = hdB78.x;
    r3.y = hdB78.y;
    r3.z = hdB78.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB101 = r1;
    vec3 hdB110 = mix(r3.xyz, hdB101.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB110.x;
    r1.y = hdB110.y;
    r1.z = hdB110.z;
    vec2 param_2 = v4.wz;
    r3 = hdTex4(param_2);
    r1 *= r3.xxxx;
    r2.w = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r2.w = (-r2.w) + 1.0;
    vec3 hdB143 = r0.xyz * r2.xyz;
    r5.x = hdB143.x;
    r5.y = hdB143.y;
    r5.z = hdB143.z;
    vec4 hdB152 = r0;
    vec3 hdB158 = mix(r5.xyz, hdB152.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB158.x;
    r0.y = hdB158.y;
    r0.z = hdB158.z;
    r0 = (r0 * r2.wwww) + r1;
    vec2 param_3 = v3.wz;
    r1 = hdTex2(param_3);
    vec3 hdB180 = r2.xyz * r1.xyz;
    r5.x = hdB180.x;
    r5.y = hdB180.y;
    r5.z = hdB180.z;
    vec4 hdB189 = r1;
    vec3 hdB195 = mix(r5.xyz, hdB189.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r1.x = hdB195.x;
    r1.y = hdB195.y;
    r1.z = hdB195.z;
    r0 = (r1 * r3.yyyy) + r0;
    vec2 param_4 = v4.xy;
    r1 = hdTex3(param_4);
    vec4 hdB213 = r2;
    vec3 hdB217 = hdB213.xyz * r1.xyz;
    r2.x = hdB217.x;
    r2.y = hdB217.y;
    r2.z = hdB217.z;
    vec4 hdB226 = r1;
    vec3 hdB232 = mix(r2.xyz, hdB226.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r1.x = hdB232.x;
    r1.y = hdB232.y;
    r1.z = hdB232.z;
    r0 = (r1 * r3.zzzz) + r0;
    vec3 hdB249 = r0.www * v1.xyz;
    r1.x = hdB249.x;
    r1.y = hdB249.y;
    r1.z = hdB249.z;
    r2 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_5 = r2.xy;
    float param_6 = r2.w;
    r2 = hdLod5(param_5, param_6);
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB278 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r3.x = hdB278.x;
    r3.y = hdB278.y;
    vec2 hdB289 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB289.x;
    r4.y = hdB289.y;
    vec2 param_7 = r4.xy;
    float param_8 = r4.w;
    r4 = hdLod5(param_7, param_8);
    r2.y = r4.x;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB313 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = hdB313.x;
    r4.y = hdB313.y;
    vec2 param_9 = r4.xy;
    float param_10 = r4.w;
    r4 = hdLod5(param_9, param_10);
    r2.z = r4.x;
    vec2 hdB333 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = hdB333.x;
    r4.y = hdB333.y;
    vec2 hdB344 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r5.x = hdB344.x;
    r5.y = hdB344.y;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 param_11 = r4.xy;
    float param_12 = r4.w;
    r4 = hdLod5(param_11, param_12);
    r2.w = r4.x;
    r2 += (-v5.zzzz);
    r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
    r0.w = dot(r2, vec4(1.0));
    r5.z = 0.0;
    r5.w = 0.0;
    vec2 param_13 = r5.xy;
    float param_14 = r5.w;
    r2 = hdLod5(param_13, param_14);
    r1.w = r2.x + (-v5.z);
    r1.w = float(r1.w >= 0.0);
    r0.w += r1.w;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.w = max(abs(v5.x), abs(v5.y));
    r1.w = clamp((r1.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.w * r0.w) + 1.0;
    r1.w = min(r0.w, r3.w);
    vec4 hdB439 = r1;
    vec4 hdB441 = r1;
    vec3 hdB443 = hdB439.xyz * hdB441.www;
    r1.x = hdB443.x;
    r1.y = hdB443.y;
    r1.z = hdB443.z;
    r0.w = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB457 = r0;
    vec4 hdB459 = r0;
    vec3 hdB464 = (hdB457.xyz * hdB459.www) + r1.xyz;
    r0.x = hdB464.x;
    r0.y = hdB464.y;
    r0.z = hdB464.z;
    vec4 hdB471 = r0;
    vec3 hdB478 = hdB471.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB478.x;
    r0.y = hdB478.y;
    r0.z = hdB478.z;
    vec3 hdB493 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB493.x;
    oC0.y = hdB493.y;
    oC0.z = hdB493.z;
    oC0.w = 1.0;
    bool hdB505 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB513;
    if (hdB505)
    {
        hdB513 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB513 = hdB505;
    }
    if (hdB513)
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
    bool _1874 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1884;
    if (_1874)
    {
        _1884 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1884 = _1874;
    }
    if (_1884)
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
        bool _1909 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1924;
        if (!_1909)
        {
            _1924 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1924 = _1909;
        }
        if (_1924)
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
