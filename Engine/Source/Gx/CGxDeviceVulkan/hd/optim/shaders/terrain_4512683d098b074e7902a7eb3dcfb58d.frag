#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1736;
vec4 _RESERVED_IDENTIFIER_FIXUP_1737;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _50 = hdOverride >= 0;
    bool _70;
    if (_50)
    {
        _70 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _70 = _50;
    }
    vec4 _71;
    if (_70)
    {
        _71 = vec4(float(hdOverride));
    }
    else
    {
        _71 = value;
    }
    return _71;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _88 = hdOverride >= 0;
    bool _98;
    if (_88)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _98 = _88;
    }
    vec4 _99;
    if (_98)
    {
        _99 = vec4(float(hdOverride));
    }
    else
    {
        _99 = value;
    }
    return _99;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _116 = hdOverride >= 0;
    bool _125;
    if (_116)
    {
        _125 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _125 = _116;
    }
    vec4 _126;
    if (_125)
    {
        _126 = vec4(float(hdOverride));
    }
    else
    {
        _126 = value;
    }
    return _126;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_646 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_649 = _RESERVED_IDENTIFIER_FIXUP_646.xy;
    float _RESERVED_IDENTIFIER_FIXUP_651 = _RESERVED_IDENTIFIER_FIXUP_646.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_649;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_651;
    vec4 _RESERVED_IDENTIFIER_FIXUP_652 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_655 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_659 = _RESERVED_IDENTIFIER_FIXUP_655.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1418;
    _RESERVED_IDENTIFIER_FIXUP_1418.w = _RESERVED_IDENTIFIER_FIXUP_659;
    vec2 _RESERVED_IDENTIFIER_FIXUP_663 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_665 = _RESERVED_IDENTIFIER_FIXUP_663.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_652;
    _RESERVED_IDENTIFIER_FIXUP_1420.y = _RESERVED_IDENTIFIER_FIXUP_665;
    float _RESERVED_IDENTIFIER_FIXUP_667 = _RESERVED_IDENTIFIER_FIXUP_663.y;
    _RESERVED_IDENTIFIER_FIXUP_1420.z = _RESERVED_IDENTIFIER_FIXUP_667;
    vec2 _RESERVED_IDENTIFIER_FIXUP_673 = _RESERVED_IDENTIFIER_FIXUP_1420.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1424 = _RESERVED_IDENTIFIER_FIXUP_1418;
    _RESERVED_IDENTIFIER_FIXUP_1424.x = _RESERVED_IDENTIFIER_FIXUP_673.x;
    _RESERVED_IDENTIFIER_FIXUP_1424.y = _RESERVED_IDENTIFIER_FIXUP_673.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1424.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_659;
    float _RESERVED_IDENTIFIER_FIXUP_688 = _RESERVED_IDENTIFIER_FIXUP_652.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_688;
    vec2 _RESERVED_IDENTIFIER_FIXUP_702 = _RESERVED_IDENTIFIER_FIXUP_1420.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437 = _RESERVED_IDENTIFIER_FIXUP_1418;
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_702.x;
    _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_702.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1437.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_659;
    float _RESERVED_IDENTIFIER_FIXUP_717 = _RESERVED_IDENTIFIER_FIXUP_688 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_717;
    vec2 _RESERVED_IDENTIFIER_FIXUP_724 = _RESERVED_IDENTIFIER_FIXUP_1420.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1446;
    _RESERVED_IDENTIFIER_FIXUP_1446.x = _RESERVED_IDENTIFIER_FIXUP_724.x;
    _RESERVED_IDENTIFIER_FIXUP_1446.y = _RESERVED_IDENTIFIER_FIXUP_724.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_734 = _RESERVED_IDENTIFIER_FIXUP_1420.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450;
    _RESERVED_IDENTIFIER_FIXUP_1450.x = _RESERVED_IDENTIFIER_FIXUP_734.x;
    _RESERVED_IDENTIFIER_FIXUP_1450.y = _RESERVED_IDENTIFIER_FIXUP_734.y;
    _RESERVED_IDENTIFIER_FIXUP_1446.w = _RESERVED_IDENTIFIER_FIXUP_659;
    _RESERVED_IDENTIFIER_FIXUP_1450.w = _RESERVED_IDENTIFIER_FIXUP_659;
    float _RESERVED_IDENTIFIER_FIXUP_788 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_806 = hdTex3(param_6);
    vec3 _RESERVED_IDENTIFIER_FIXUP_818 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1736).xyz;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1446.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_659;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1450.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_659;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1738 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_788 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_717 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_806.w), _RESERVED_IDENTIFIER_FIXUP_818 + _RESERVED_IDENTIFIER_FIXUP_818);
    vec3 _RESERVED_IDENTIFIER_FIXUP_829 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_831 = _RESERVED_IDENTIFIER_FIXUP_1738.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_832 = _RESERVED_IDENTIFIER_FIXUP_829 * _RESERVED_IDENTIFIER_FIXUP_831;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1496;
    _RESERVED_IDENTIFIER_FIXUP_1496.x = _RESERVED_IDENTIFIER_FIXUP_832.x;
    _RESERVED_IDENTIFIER_FIXUP_1496.y = _RESERVED_IDENTIFIER_FIXUP_832.y;
    _RESERVED_IDENTIFIER_FIXUP_1496.z = _RESERVED_IDENTIFIER_FIXUP_832.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_842 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1502;
    _RESERVED_IDENTIFIER_FIXUP_1502.x = _RESERVED_IDENTIFIER_FIXUP_842.x;
    _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_842.y;
    _RESERVED_IDENTIFIER_FIXUP_1502.z = _RESERVED_IDENTIFIER_FIXUP_842.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_856 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1502.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_857 = mix(_RESERVED_IDENTIFIER_FIXUP_1496.xyz, _RESERVED_IDENTIFIER_FIXUP_829, _RESERVED_IDENTIFIER_FIXUP_856);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1508;
    _RESERVED_IDENTIFIER_FIXUP_1508.x = _RESERVED_IDENTIFIER_FIXUP_857.x;
    _RESERVED_IDENTIFIER_FIXUP_1508.y = _RESERVED_IDENTIFIER_FIXUP_857.y;
    _RESERVED_IDENTIFIER_FIXUP_1508.z = _RESERVED_IDENTIFIER_FIXUP_857.z;
    vec2 param_11 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_871 = hdTex1(param_11).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_872 = _RESERVED_IDENTIFIER_FIXUP_831 * _RESERVED_IDENTIFIER_FIXUP_871;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1514;
    _RESERVED_IDENTIFIER_FIXUP_1514.x = _RESERVED_IDENTIFIER_FIXUP_872.x;
    _RESERVED_IDENTIFIER_FIXUP_1514.y = _RESERVED_IDENTIFIER_FIXUP_872.y;
    _RESERVED_IDENTIFIER_FIXUP_1514.z = _RESERVED_IDENTIFIER_FIXUP_872.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_886 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1502.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_887 = mix(_RESERVED_IDENTIFIER_FIXUP_1514.xyz, _RESERVED_IDENTIFIER_FIXUP_871, _RESERVED_IDENTIFIER_FIXUP_886);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1520;
    _RESERVED_IDENTIFIER_FIXUP_1520.x = _RESERVED_IDENTIFIER_FIXUP_887.x;
    _RESERVED_IDENTIFIER_FIXUP_1520.y = _RESERVED_IDENTIFIER_FIXUP_887.y;
    _RESERVED_IDENTIFIER_FIXUP_1520.z = _RESERVED_IDENTIFIER_FIXUP_887.z;
    vec2 param_12 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_906 = hdTex2(param_12).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_907 = _RESERVED_IDENTIFIER_FIXUP_831 * _RESERVED_IDENTIFIER_FIXUP_906;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_806;
    _RESERVED_IDENTIFIER_FIXUP_1526.x = _RESERVED_IDENTIFIER_FIXUP_907.x;
    _RESERVED_IDENTIFIER_FIXUP_1526.z = _RESERVED_IDENTIFIER_FIXUP_907.y;
    _RESERVED_IDENTIFIER_FIXUP_1526.w = _RESERVED_IDENTIFIER_FIXUP_907.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_921 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1502.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_922 = mix(_RESERVED_IDENTIFIER_FIXUP_1526.xzw, _RESERVED_IDENTIFIER_FIXUP_906, _RESERVED_IDENTIFIER_FIXUP_921);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1532;
    _RESERVED_IDENTIFIER_FIXUP_1532.x = _RESERVED_IDENTIFIER_FIXUP_922.x;
    _RESERVED_IDENTIFIER_FIXUP_1532.y = _RESERVED_IDENTIFIER_FIXUP_922.y;
    _RESERVED_IDENTIFIER_FIXUP_1532.z = _RESERVED_IDENTIFIER_FIXUP_922.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1538;
    _RESERVED_IDENTIFIER_FIXUP_1538.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1538.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1538.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1739 = vec4(_RESERVED_IDENTIFIER_FIXUP_1738.xxx * _RESERVED_IDENTIFIER_FIXUP_1538.xyz, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_975 = (mix(mix(_RESERVED_IDENTIFIER_FIXUP_1508, _RESERVED_IDENTIFIER_FIXUP_1520, _RESERVED_IDENTIFIER_FIXUP_806.xxxx), _RESERVED_IDENTIFIER_FIXUP_1532, _RESERVED_IDENTIFIER_FIXUP_1526.yyyy).xyz * _RESERVED_IDENTIFIER_FIXUP_1739.www) + _RESERVED_IDENTIFIER_FIXUP_1739.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1555;
    _RESERVED_IDENTIFIER_FIXUP_1555.x = _RESERVED_IDENTIFIER_FIXUP_975.x;
    _RESERVED_IDENTIFIER_FIXUP_1555.y = _RESERVED_IDENTIFIER_FIXUP_975.y;
    _RESERVED_IDENTIFIER_FIXUP_1555.z = _RESERVED_IDENTIFIER_FIXUP_975.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_988 = _RESERVED_IDENTIFIER_FIXUP_1555.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1561;
    _RESERVED_IDENTIFIER_FIXUP_1561.x = _RESERVED_IDENTIFIER_FIXUP_988.x;
    _RESERVED_IDENTIFIER_FIXUP_1561.y = _RESERVED_IDENTIFIER_FIXUP_988.y;
    _RESERVED_IDENTIFIER_FIXUP_1561.z = _RESERVED_IDENTIFIER_FIXUP_988.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1003 = _RESERVED_IDENTIFIER_FIXUP_1561.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567;
    _RESERVED_IDENTIFIER_FIXUP_1567.x = _RESERVED_IDENTIFIER_FIXUP_1003.x;
    _RESERVED_IDENTIFIER_FIXUP_1567.y = _RESERVED_IDENTIFIER_FIXUP_1003.y;
    _RESERVED_IDENTIFIER_FIXUP_1567.z = _RESERVED_IDENTIFIER_FIXUP_1003.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_649;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_651;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1045 = hdLod5(param_13, param_14);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1580 = _RESERVED_IDENTIFIER_FIXUP_1045;
    _RESERVED_IDENTIFIER_FIXUP_1580.y = _RESERVED_IDENTIFIER_FIXUP_665;
    _RESERVED_IDENTIFIER_FIXUP_1580.z = _RESERVED_IDENTIFIER_FIXUP_667;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1066 = _RESERVED_IDENTIFIER_FIXUP_1580.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1584 = _RESERVED_IDENTIFIER_FIXUP_1418;
    _RESERVED_IDENTIFIER_FIXUP_1584.x = _RESERVED_IDENTIFIER_FIXUP_1066.x;
    _RESERVED_IDENTIFIER_FIXUP_1584.y = _RESERVED_IDENTIFIER_FIXUP_1066.y;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1584.xy;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_659;
    float _RESERVED_IDENTIFIER_FIXUP_1081 = _RESERVED_IDENTIFIER_FIXUP_1045.x + hdLod5(param_15, param_16).x;
    _RESERVED_IDENTIFIER_FIXUP_1580.x = _RESERVED_IDENTIFIER_FIXUP_1081;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1095 = _RESERVED_IDENTIFIER_FIXUP_1580.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_1418;
    _RESERVED_IDENTIFIER_FIXUP_1597.x = _RESERVED_IDENTIFIER_FIXUP_1095.x;
    _RESERVED_IDENTIFIER_FIXUP_1597.y = _RESERVED_IDENTIFIER_FIXUP_1095.y;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1597.xy;
    float param_18 = _RESERVED_IDENTIFIER_FIXUP_659;
    float _RESERVED_IDENTIFIER_FIXUP_1110 = _RESERVED_IDENTIFIER_FIXUP_1081 + hdLod5(param_17, param_18).x;
    _RESERVED_IDENTIFIER_FIXUP_1580.x = _RESERVED_IDENTIFIER_FIXUP_1110;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1580.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1606;
    _RESERVED_IDENTIFIER_FIXUP_1606.x = _RESERVED_IDENTIFIER_FIXUP_1117.x;
    _RESERVED_IDENTIFIER_FIXUP_1606.y = _RESERVED_IDENTIFIER_FIXUP_1117.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1127 = _RESERVED_IDENTIFIER_FIXUP_1580.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1610;
    _RESERVED_IDENTIFIER_FIXUP_1610.x = _RESERVED_IDENTIFIER_FIXUP_1127.x;
    _RESERVED_IDENTIFIER_FIXUP_1610.y = _RESERVED_IDENTIFIER_FIXUP_1127.y;
    _RESERVED_IDENTIFIER_FIXUP_1606.w = _RESERVED_IDENTIFIER_FIXUP_659;
    _RESERVED_IDENTIFIER_FIXUP_1610.w = _RESERVED_IDENTIFIER_FIXUP_659;
    vec2 param_19 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1199 = hdTex3(param_19);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1606.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_659;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1610.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_659;
    float _RESERVED_IDENTIFIER_FIXUP_1204 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_788 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_1110 + hdLod5(param_20, param_21).x) + hdLod5(param_22, param_23).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1199.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1209 = OptTex0( texcoord0.xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1740 = vec4(_RESERVED_IDENTIFIER_FIXUP_1204, color0.xyz + color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1209.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1224 = _RESERVED_IDENTIFIER_FIXUP_1740.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_1222 * _RESERVED_IDENTIFIER_FIXUP_1224;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1656;
    _RESERVED_IDENTIFIER_FIXUP_1656.x = _RESERVED_IDENTIFIER_FIXUP_1225.x;
    _RESERVED_IDENTIFIER_FIXUP_1656.y = _RESERVED_IDENTIFIER_FIXUP_1225.y;
    _RESERVED_IDENTIFIER_FIXUP_1656.z = _RESERVED_IDENTIFIER_FIXUP_1225.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1250 = mix(_RESERVED_IDENTIFIER_FIXUP_1656.xyz, _RESERVED_IDENTIFIER_FIXUP_1222, _RESERVED_IDENTIFIER_FIXUP_856);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_1209;
    _RESERVED_IDENTIFIER_FIXUP_1668.x = _RESERVED_IDENTIFIER_FIXUP_1250.x;
    _RESERVED_IDENTIFIER_FIXUP_1668.y = _RESERVED_IDENTIFIER_FIXUP_1250.y;
    _RESERVED_IDENTIFIER_FIXUP_1668.z = _RESERVED_IDENTIFIER_FIXUP_1250.z;
    vec2 param_24 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1260 = hdTex1(param_24);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_1260.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1224 * _RESERVED_IDENTIFIER_FIXUP_1264;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1674;
    _RESERVED_IDENTIFIER_FIXUP_1674.x = _RESERVED_IDENTIFIER_FIXUP_1265.x;
    _RESERVED_IDENTIFIER_FIXUP_1674.y = _RESERVED_IDENTIFIER_FIXUP_1265.y;
    _RESERVED_IDENTIFIER_FIXUP_1674.z = _RESERVED_IDENTIFIER_FIXUP_1265.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1280 = mix(_RESERVED_IDENTIFIER_FIXUP_1674.xyz, _RESERVED_IDENTIFIER_FIXUP_1264, _RESERVED_IDENTIFIER_FIXUP_886);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1680 = _RESERVED_IDENTIFIER_FIXUP_1260;
    _RESERVED_IDENTIFIER_FIXUP_1680.x = _RESERVED_IDENTIFIER_FIXUP_1280.x;
    _RESERVED_IDENTIFIER_FIXUP_1680.y = _RESERVED_IDENTIFIER_FIXUP_1280.y;
    _RESERVED_IDENTIFIER_FIXUP_1680.z = _RESERVED_IDENTIFIER_FIXUP_1280.z;
    vec2 param_25 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1295 = hdTex2(param_25);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_1295.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1300 = _RESERVED_IDENTIFIER_FIXUP_1224 * _RESERVED_IDENTIFIER_FIXUP_1299;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1686 = _RESERVED_IDENTIFIER_FIXUP_1199;
    _RESERVED_IDENTIFIER_FIXUP_1686.x = _RESERVED_IDENTIFIER_FIXUP_1300.x;
    _RESERVED_IDENTIFIER_FIXUP_1686.z = _RESERVED_IDENTIFIER_FIXUP_1300.y;
    _RESERVED_IDENTIFIER_FIXUP_1686.w = _RESERVED_IDENTIFIER_FIXUP_1300.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1315 = mix(_RESERVED_IDENTIFIER_FIXUP_1686.xzw, _RESERVED_IDENTIFIER_FIXUP_1299, _RESERVED_IDENTIFIER_FIXUP_921);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1692 = _RESERVED_IDENTIFIER_FIXUP_1295;
    _RESERVED_IDENTIFIER_FIXUP_1692.x = _RESERVED_IDENTIFIER_FIXUP_1315.x;
    _RESERVED_IDENTIFIER_FIXUP_1692.y = _RESERVED_IDENTIFIER_FIXUP_1315.y;
    _RESERVED_IDENTIFIER_FIXUP_1692.z = _RESERVED_IDENTIFIER_FIXUP_1315.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1326 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1668, _RESERVED_IDENTIFIER_FIXUP_1680, _RESERVED_IDENTIFIER_FIXUP_1199.xxxx), _RESERVED_IDENTIFIER_FIXUP_1692, _RESERVED_IDENTIFIER_FIXUP_1686.yyyy);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1331 = _RESERVED_IDENTIFIER_FIXUP_1326.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1698;
    _RESERVED_IDENTIFIER_FIXUP_1698.x = _RESERVED_IDENTIFIER_FIXUP_1331.x;
    _RESERVED_IDENTIFIER_FIXUP_1698.y = _RESERVED_IDENTIFIER_FIXUP_1331.y;
    _RESERVED_IDENTIFIER_FIXUP_1698.z = _RESERVED_IDENTIFIER_FIXUP_1331.z;
    float _RESERVED_IDENTIFIER_FIXUP_1352 = (_RESERVED_IDENTIFIER_FIXUP_1204 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1741 = vec4(_RESERVED_IDENTIFIER_FIXUP_1740.xxx * _RESERVED_IDENTIFIER_FIXUP_1698.xyz, _RESERVED_IDENTIFIER_FIXUP_1352);
    _RESERVED_IDENTIFIER_FIXUP_1741.w = _RESERVED_IDENTIFIER_FIXUP_1352;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1368 = (_RESERVED_IDENTIFIER_FIXUP_1326.xyz * _RESERVED_IDENTIFIER_FIXUP_1741.www) + _RESERVED_IDENTIFIER_FIXUP_1741.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1717;
    _RESERVED_IDENTIFIER_FIXUP_1717.x = _RESERVED_IDENTIFIER_FIXUP_1368.x;
    _RESERVED_IDENTIFIER_FIXUP_1717.y = _RESERVED_IDENTIFIER_FIXUP_1368.y;
    _RESERVED_IDENTIFIER_FIXUP_1717.z = _RESERVED_IDENTIFIER_FIXUP_1368.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_1717.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1723;
    _RESERVED_IDENTIFIER_FIXUP_1723.x = _RESERVED_IDENTIFIER_FIXUP_1381.x;
    _RESERVED_IDENTIFIER_FIXUP_1723.y = _RESERVED_IDENTIFIER_FIXUP_1381.y;
    _RESERVED_IDENTIFIER_FIXUP_1723.z = _RESERVED_IDENTIFIER_FIXUP_1381.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1723.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_510 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_519;
    if (_RESERVED_IDENTIFIER_FIXUP_510)
    {
        _RESERVED_IDENTIFIER_FIXUP_519 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_519 = _RESERVED_IDENTIFIER_FIXUP_510;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_519)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_556 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1567.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_582 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1407;
    if (_RESERVED_IDENTIFIER_FIXUP_556 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1407 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_556), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_582);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1407 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_582);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1407;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1352);
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
    r0 = OptTex0( v2.xyz);
    vec3 hdB262 = v0.xyz + v0.xyz;
    r2.y = hdB262.x;
    r2.z = hdB262.y;
    r2.w = hdB262.z;
    vec3 hdB273 = r0.xyz * r2.yzw;
    r3.x = hdB273.x;
    r3.y = hdB273.y;
    r3.z = hdB273.z;
    vec3 hdB284 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB284.x;
    r4.y = hdB284.y;
    r4.z = hdB284.z;
    vec4 hdB293 = r0;
    vec3 hdB302 = mix(r3.xyz, hdB293.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB302.x;
    r0.y = hdB302.y;
    r0.z = hdB302.z;
    vec2 param_11 = v3.xy;
    r3 = hdTex1(param_11);
    vec3 hdB318 = r2.yzw * r3.xyz;
    r5.x = hdB318.x;
    r5.y = hdB318.y;
    r5.z = hdB318.z;
    vec4 hdB327 = r3;
    vec3 hdB333 = mix(r5.xyz, hdB327.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r3.x = hdB333.x;
    r3.y = hdB333.y;
    r3.z = hdB333.z;
    r5 = mix(r0, r3, r1.xxxx);
    vec2 param_12 = v3.wz;
    r0 = hdTex2(param_12);
    vec3 hdB354 = r2.yzw * r0.xyz;
    r1.x = hdB354.x;
    r1.z = hdB354.y;
    r1.w = hdB354.z;
    vec4 hdB363 = r0;
    vec3 hdB369 = mix(r1.xzw, hdB363.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = hdB369.x;
    r0.y = hdB369.y;
    r0.z = hdB369.z;
    r3 = mix(r5, r0, r1.yyyy);
    vec3 hdB385 = r3.www * v1.xyz;
    r0.x = hdB385.x;
    r0.y = hdB385.y;
    r0.z = hdB385.z;
    vec4 hdB394 = r0;
    vec3 hdB396 = r2.xxx * hdB394.xyz;
    r0.x = hdB396.x;
    r0.y = hdB396.y;
    r0.z = hdB396.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB412 = r0;
    vec4 hdB415 = r0;
    vec3 hdB417 = (r3.xyz * hdB412.www) + hdB415.xyz;
    r0.x = hdB417.x;
    r0.y = hdB417.y;
    r0.z = hdB417.z;
    vec4 hdB424 = r0;
    vec3 hdB431 = hdB424.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB431.x;
    r0.y = hdB431.y;
    r0.z = hdB431.z;
    vec3 hdB446 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB446.x;
    oC0.y = hdB446.y;
    oC0.z = hdB446.z;
    oC0.w = 1.0;
    bool hdB458 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB466;
    if (hdB458)
    {
        hdB466 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB466 = hdB458;
    }
    if (hdB466)
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
    bool _1596 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1606;
    if (_1596)
    {
        _1606 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1606 = _1596;
    }
    if (_1606)
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
        bool _1631 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1646;
        if (!_1631)
        {
            _1646 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1646 = _1631;
        }
        if (_1646)
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
