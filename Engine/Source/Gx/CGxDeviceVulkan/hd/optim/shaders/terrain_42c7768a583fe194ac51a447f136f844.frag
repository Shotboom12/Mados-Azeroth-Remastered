#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1794;
vec4 _RESERVED_IDENTIFIER_FIXUP_1795;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _86 = hdOverride >= 0;
    bool _96;
    if (_86)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _114 = hdOverride >= 0;
    bool _124;
    if (_114)
    {
        _124 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    vec3 _RESERVED_IDENTIFIER_FIXUP_665 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1794).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_668 = _RESERVED_IDENTIFIER_FIXUP_665 + _RESERVED_IDENTIFIER_FIXUP_665;
    float _RESERVED_IDENTIFIER_FIXUP_670 = _RESERVED_IDENTIFIER_FIXUP_668.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1463;
    _RESERVED_IDENTIFIER_FIXUP_1463.x = _RESERVED_IDENTIFIER_FIXUP_670;
    _RESERVED_IDENTIFIER_FIXUP_1463.y = _RESERVED_IDENTIFIER_FIXUP_668.y;
    _RESERVED_IDENTIFIER_FIXUP_1463.z = _RESERVED_IDENTIFIER_FIXUP_668.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_676 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_679 = _RESERVED_IDENTIFIER_FIXUP_676 * _RESERVED_IDENTIFIER_FIXUP_1463.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1469;
    _RESERVED_IDENTIFIER_FIXUP_1469.x = _RESERVED_IDENTIFIER_FIXUP_679.x;
    _RESERVED_IDENTIFIER_FIXUP_1469.y = _RESERVED_IDENTIFIER_FIXUP_679.y;
    _RESERVED_IDENTIFIER_FIXUP_1469.z = _RESERVED_IDENTIFIER_FIXUP_679.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_689 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1475;
    _RESERVED_IDENTIFIER_FIXUP_1475.x = _RESERVED_IDENTIFIER_FIXUP_689.x;
    _RESERVED_IDENTIFIER_FIXUP_1475.y = _RESERVED_IDENTIFIER_FIXUP_689.y;
    _RESERVED_IDENTIFIER_FIXUP_1475.z = _RESERVED_IDENTIFIER_FIXUP_689.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_703 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1475.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_704 = mix(_RESERVED_IDENTIFIER_FIXUP_1469.xyz, _RESERVED_IDENTIFIER_FIXUP_676, _RESERVED_IDENTIFIER_FIXUP_703);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1481;
    _RESERVED_IDENTIFIER_FIXUP_1481.x = _RESERVED_IDENTIFIER_FIXUP_704.x;
    _RESERVED_IDENTIFIER_FIXUP_1481.y = _RESERVED_IDENTIFIER_FIXUP_704.y;
    _RESERVED_IDENTIFIER_FIXUP_1481.z = _RESERVED_IDENTIFIER_FIXUP_704.z;
    vec2 param_1 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_714 = hdTex3(param_1);
    vec3 _RESERVED_IDENTIFIER_FIXUP_726 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_727 = _RESERVED_IDENTIFIER_FIXUP_1463.xyz * _RESERVED_IDENTIFIER_FIXUP_726;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1487;
    _RESERVED_IDENTIFIER_FIXUP_1487.x = _RESERVED_IDENTIFIER_FIXUP_727.x;
    _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_727.y;
    _RESERVED_IDENTIFIER_FIXUP_1487.z = _RESERVED_IDENTIFIER_FIXUP_727.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_741 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1475.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_742 = mix(_RESERVED_IDENTIFIER_FIXUP_1487.xyz, _RESERVED_IDENTIFIER_FIXUP_726, _RESERVED_IDENTIFIER_FIXUP_741);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1493;
    _RESERVED_IDENTIFIER_FIXUP_1493.x = _RESERVED_IDENTIFIER_FIXUP_742.x;
    _RESERVED_IDENTIFIER_FIXUP_1493.y = _RESERVED_IDENTIFIER_FIXUP_742.y;
    _RESERVED_IDENTIFIER_FIXUP_1493.z = _RESERVED_IDENTIFIER_FIXUP_742.z;
    float _RESERVED_IDENTIFIER_FIXUP_752 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_714.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1796 = vec4(_RESERVED_IDENTIFIER_FIXUP_670, _RESERVED_IDENTIFIER_FIXUP_668.yz, _RESERVED_IDENTIFIER_FIXUP_752);
    _RESERVED_IDENTIFIER_FIXUP_1796.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_752;
    vec2 param_2 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = hdTex2(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_773 = _RESERVED_IDENTIFIER_FIXUP_1796.xyz * _RESERVED_IDENTIFIER_FIXUP_772;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1504;
    _RESERVED_IDENTIFIER_FIXUP_1504.x = _RESERVED_IDENTIFIER_FIXUP_773.x;
    _RESERVED_IDENTIFIER_FIXUP_1504.y = _RESERVED_IDENTIFIER_FIXUP_773.y;
    _RESERVED_IDENTIFIER_FIXUP_1504.z = _RESERVED_IDENTIFIER_FIXUP_773.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_787 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1475.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_788 = mix(_RESERVED_IDENTIFIER_FIXUP_1504.xyz, _RESERVED_IDENTIFIER_FIXUP_772, _RESERVED_IDENTIFIER_FIXUP_787);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1510;
    _RESERVED_IDENTIFIER_FIXUP_1510.x = _RESERVED_IDENTIFIER_FIXUP_788.x;
    _RESERVED_IDENTIFIER_FIXUP_1510.y = _RESERVED_IDENTIFIER_FIXUP_788.y;
    _RESERVED_IDENTIFIER_FIXUP_1510.z = _RESERVED_IDENTIFIER_FIXUP_788.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_800 = (_RESERVED_IDENTIFIER_FIXUP_1510 * _RESERVED_IDENTIFIER_FIXUP_714.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1493 * _RESERVED_IDENTIFIER_FIXUP_1796.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1481 * _RESERVED_IDENTIFIER_FIXUP_714.xxxx));
    vec4 _RESERVED_IDENTIFIER_FIXUP_815 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_818 = _RESERVED_IDENTIFIER_FIXUP_815.xy;
    float _RESERVED_IDENTIFIER_FIXUP_820 = _RESERVED_IDENTIFIER_FIXUP_815.w;
    vec2 _RESERVED_IDENTIFIER_FIXUP_824 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_828 = _RESERVED_IDENTIFIER_FIXUP_824.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1525;
    _RESERVED_IDENTIFIER_FIXUP_1525.w = _RESERVED_IDENTIFIER_FIXUP_828;
    vec2 _RESERVED_IDENTIFIER_FIXUP_832 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_834 = _RESERVED_IDENTIFIER_FIXUP_832.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_714;
    _RESERVED_IDENTIFIER_FIXUP_1527.x = _RESERVED_IDENTIFIER_FIXUP_834;
    float _RESERVED_IDENTIFIER_FIXUP_836 = _RESERVED_IDENTIFIER_FIXUP_832.y;
    _RESERVED_IDENTIFIER_FIXUP_1527.y = _RESERVED_IDENTIFIER_FIXUP_836;
    vec2 _RESERVED_IDENTIFIER_FIXUP_842 = _RESERVED_IDENTIFIER_FIXUP_1527.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_1525;
    _RESERVED_IDENTIFIER_FIXUP_1531.x = _RESERVED_IDENTIFIER_FIXUP_842.x;
    _RESERVED_IDENTIFIER_FIXUP_1531.y = _RESERVED_IDENTIFIER_FIXUP_842.y;
    vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_818;
    float param_4 = _RESERVED_IDENTIFIER_FIXUP_820;
    vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1531.xy;
    float param_6 = _RESERVED_IDENTIFIER_FIXUP_828;
    float _RESERVED_IDENTIFIER_FIXUP_857 = hdLod5(param_3, param_4).x + hdLod5(param_5, param_6).x;
    _RESERVED_IDENTIFIER_FIXUP_800.w = _RESERVED_IDENTIFIER_FIXUP_857;
    vec2 _RESERVED_IDENTIFIER_FIXUP_871 = _RESERVED_IDENTIFIER_FIXUP_1527.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_1525;
    _RESERVED_IDENTIFIER_FIXUP_1544.x = _RESERVED_IDENTIFIER_FIXUP_871.x;
    _RESERVED_IDENTIFIER_FIXUP_1544.y = _RESERVED_IDENTIFIER_FIXUP_871.y;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1544.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_828;
    float _RESERVED_IDENTIFIER_FIXUP_886 = _RESERVED_IDENTIFIER_FIXUP_857 + hdLod5(param_7, param_8).x;
    _RESERVED_IDENTIFIER_FIXUP_800.w = _RESERVED_IDENTIFIER_FIXUP_886;
    vec2 _RESERVED_IDENTIFIER_FIXUP_893 = _RESERVED_IDENTIFIER_FIXUP_1527.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1553;
    _RESERVED_IDENTIFIER_FIXUP_1553.x = _RESERVED_IDENTIFIER_FIXUP_893.x;
    _RESERVED_IDENTIFIER_FIXUP_1553.y = _RESERVED_IDENTIFIER_FIXUP_893.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_903 = _RESERVED_IDENTIFIER_FIXUP_1527.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1557;
    _RESERVED_IDENTIFIER_FIXUP_1557.x = _RESERVED_IDENTIFIER_FIXUP_903.x;
    _RESERVED_IDENTIFIER_FIXUP_1557.y = _RESERVED_IDENTIFIER_FIXUP_903.y;
    _RESERVED_IDENTIFIER_FIXUP_1553.w = _RESERVED_IDENTIFIER_FIXUP_828;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1553.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_828;
    float _RESERVED_IDENTIFIER_FIXUP_925 = _RESERVED_IDENTIFIER_FIXUP_886 + hdLod5(param_9, param_10).x;
    _RESERVED_IDENTIFIER_FIXUP_800.w = _RESERVED_IDENTIFIER_FIXUP_925;
    _RESERVED_IDENTIFIER_FIXUP_1557.w = _RESERVED_IDENTIFIER_FIXUP_828;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1557.xy;
    float param_12 = _RESERVED_IDENTIFIER_FIXUP_828;
    float _RESERVED_IDENTIFIER_FIXUP_944 = _RESERVED_IDENTIFIER_FIXUP_925 + hdLod5(param_11, param_12).x;
    _RESERVED_IDENTIFIER_FIXUP_800.w = _RESERVED_IDENTIFIER_FIXUP_944;
    float _RESERVED_IDENTIFIER_FIXUP_949 = (_RESERVED_IDENTIFIER_FIXUP_944 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_800.w = _RESERVED_IDENTIFIER_FIXUP_949;
    float _RESERVED_IDENTIFIER_FIXUP_957 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1797 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_957);
    float _RESERVED_IDENTIFIER_FIXUP_963 = clamp((_RESERVED_IDENTIFIER_FIXUP_957 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1797.w = _RESERVED_IDENTIFIER_FIXUP_963;
    float _RESERVED_IDENTIFIER_FIXUP_970 = (_RESERVED_IDENTIFIER_FIXUP_963 * _RESERVED_IDENTIFIER_FIXUP_949) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_800.w = _RESERVED_IDENTIFIER_FIXUP_970;
    _RESERVED_IDENTIFIER_FIXUP_1797.w = min(_RESERVED_IDENTIFIER_FIXUP_970, _RESERVED_IDENTIFIER_FIXUP_714.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_982 = _RESERVED_IDENTIFIER_FIXUP_1797.xyz * _RESERVED_IDENTIFIER_FIXUP_1797.www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1597;
    _RESERVED_IDENTIFIER_FIXUP_1597.x = _RESERVED_IDENTIFIER_FIXUP_982.x;
    _RESERVED_IDENTIFIER_FIXUP_1597.y = _RESERVED_IDENTIFIER_FIXUP_982.y;
    _RESERVED_IDENTIFIER_FIXUP_1597.z = _RESERVED_IDENTIFIER_FIXUP_982.z;
    _RESERVED_IDENTIFIER_FIXUP_800.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1008 = (_RESERVED_IDENTIFIER_FIXUP_800.xyz * _RESERVED_IDENTIFIER_FIXUP_800.www) + _RESERVED_IDENTIFIER_FIXUP_1597.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1608;
    _RESERVED_IDENTIFIER_FIXUP_1608.x = _RESERVED_IDENTIFIER_FIXUP_1008.x;
    _RESERVED_IDENTIFIER_FIXUP_1608.y = _RESERVED_IDENTIFIER_FIXUP_1008.y;
    _RESERVED_IDENTIFIER_FIXUP_1608.z = _RESERVED_IDENTIFIER_FIXUP_1008.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1021 = _RESERVED_IDENTIFIER_FIXUP_1608.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1614;
    _RESERVED_IDENTIFIER_FIXUP_1614.x = _RESERVED_IDENTIFIER_FIXUP_1021.x;
    _RESERVED_IDENTIFIER_FIXUP_1614.y = _RESERVED_IDENTIFIER_FIXUP_1021.y;
    _RESERVED_IDENTIFIER_FIXUP_1614.z = _RESERVED_IDENTIFIER_FIXUP_1021.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1036 = _RESERVED_IDENTIFIER_FIXUP_1614.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1620;
    _RESERVED_IDENTIFIER_FIXUP_1620.x = _RESERVED_IDENTIFIER_FIXUP_1036.x;
    _RESERVED_IDENTIFIER_FIXUP_1620.y = _RESERVED_IDENTIFIER_FIXUP_1036.y;
    _RESERVED_IDENTIFIER_FIXUP_1620.z = _RESERVED_IDENTIFIER_FIXUP_1036.z;
    vec2 param_13 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1072 = hdTex1(param_13);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1077 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_1079 = _RESERVED_IDENTIFIER_FIXUP_1077.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1628;
    _RESERVED_IDENTIFIER_FIXUP_1628.x = _RESERVED_IDENTIFIER_FIXUP_1079;
    _RESERVED_IDENTIFIER_FIXUP_1628.y = _RESERVED_IDENTIFIER_FIXUP_1077.y;
    _RESERVED_IDENTIFIER_FIXUP_1628.z = _RESERVED_IDENTIFIER_FIXUP_1077.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1085 = _RESERVED_IDENTIFIER_FIXUP_1072.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1088 = _RESERVED_IDENTIFIER_FIXUP_1085 * _RESERVED_IDENTIFIER_FIXUP_1628.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1634;
    _RESERVED_IDENTIFIER_FIXUP_1634.x = _RESERVED_IDENTIFIER_FIXUP_1088.x;
    _RESERVED_IDENTIFIER_FIXUP_1634.y = _RESERVED_IDENTIFIER_FIXUP_1088.y;
    _RESERVED_IDENTIFIER_FIXUP_1634.z = _RESERVED_IDENTIFIER_FIXUP_1088.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1113 = mix(_RESERVED_IDENTIFIER_FIXUP_1634.xyz, _RESERVED_IDENTIFIER_FIXUP_1085, _RESERVED_IDENTIFIER_FIXUP_703);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1646 = _RESERVED_IDENTIFIER_FIXUP_1072;
    _RESERVED_IDENTIFIER_FIXUP_1646.x = _RESERVED_IDENTIFIER_FIXUP_1113.x;
    _RESERVED_IDENTIFIER_FIXUP_1646.y = _RESERVED_IDENTIFIER_FIXUP_1113.y;
    _RESERVED_IDENTIFIER_FIXUP_1646.z = _RESERVED_IDENTIFIER_FIXUP_1113.z;
    vec2 param_14 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1123 = hdTex3(param_14);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1131 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1135 = _RESERVED_IDENTIFIER_FIXUP_1131.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1136 = _RESERVED_IDENTIFIER_FIXUP_1628.xyz * _RESERVED_IDENTIFIER_FIXUP_1135;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1652;
    _RESERVED_IDENTIFIER_FIXUP_1652.x = _RESERVED_IDENTIFIER_FIXUP_1136.x;
    _RESERVED_IDENTIFIER_FIXUP_1652.y = _RESERVED_IDENTIFIER_FIXUP_1136.y;
    _RESERVED_IDENTIFIER_FIXUP_1652.z = _RESERVED_IDENTIFIER_FIXUP_1136.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1151 = mix(_RESERVED_IDENTIFIER_FIXUP_1652.xyz, _RESERVED_IDENTIFIER_FIXUP_1135, _RESERVED_IDENTIFIER_FIXUP_741);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1658 = _RESERVED_IDENTIFIER_FIXUP_1131;
    _RESERVED_IDENTIFIER_FIXUP_1658.x = _RESERVED_IDENTIFIER_FIXUP_1151.x;
    _RESERVED_IDENTIFIER_FIXUP_1658.y = _RESERVED_IDENTIFIER_FIXUP_1151.y;
    _RESERVED_IDENTIFIER_FIXUP_1658.z = _RESERVED_IDENTIFIER_FIXUP_1151.z;
    float _RESERVED_IDENTIFIER_FIXUP_1161 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1123.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1798 = vec4(_RESERVED_IDENTIFIER_FIXUP_1079, _RESERVED_IDENTIFIER_FIXUP_1077.yz, _RESERVED_IDENTIFIER_FIXUP_1161);
    _RESERVED_IDENTIFIER_FIXUP_1798.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1161;
    vec2 param_15 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1177 = hdTex2(param_15);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_1177.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1182 = _RESERVED_IDENTIFIER_FIXUP_1798.xyz * _RESERVED_IDENTIFIER_FIXUP_1181;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1669;
    _RESERVED_IDENTIFIER_FIXUP_1669.x = _RESERVED_IDENTIFIER_FIXUP_1182.x;
    _RESERVED_IDENTIFIER_FIXUP_1669.y = _RESERVED_IDENTIFIER_FIXUP_1182.y;
    _RESERVED_IDENTIFIER_FIXUP_1669.z = _RESERVED_IDENTIFIER_FIXUP_1182.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1197 = mix(_RESERVED_IDENTIFIER_FIXUP_1669.xyz, _RESERVED_IDENTIFIER_FIXUP_1181, _RESERVED_IDENTIFIER_FIXUP_787);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1675 = _RESERVED_IDENTIFIER_FIXUP_1177;
    _RESERVED_IDENTIFIER_FIXUP_1675.x = _RESERVED_IDENTIFIER_FIXUP_1197.x;
    _RESERVED_IDENTIFIER_FIXUP_1675.y = _RESERVED_IDENTIFIER_FIXUP_1197.y;
    _RESERVED_IDENTIFIER_FIXUP_1675.z = _RESERVED_IDENTIFIER_FIXUP_1197.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1209 = (_RESERVED_IDENTIFIER_FIXUP_1675 * _RESERVED_IDENTIFIER_FIXUP_1123.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1658 * _RESERVED_IDENTIFIER_FIXUP_1798.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1646 * _RESERVED_IDENTIFIER_FIXUP_1123.xxxx));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1692 = _RESERVED_IDENTIFIER_FIXUP_1123;
    _RESERVED_IDENTIFIER_FIXUP_1692.x = _RESERVED_IDENTIFIER_FIXUP_834;
    _RESERVED_IDENTIFIER_FIXUP_1692.y = _RESERVED_IDENTIFIER_FIXUP_836;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1251 = _RESERVED_IDENTIFIER_FIXUP_1692.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1696 = _RESERVED_IDENTIFIER_FIXUP_1525;
    _RESERVED_IDENTIFIER_FIXUP_1696.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
    _RESERVED_IDENTIFIER_FIXUP_1696.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_818;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_820;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1696.xy;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_828;
    float _RESERVED_IDENTIFIER_FIXUP_1266 = hdLod5(param_16, param_17).x + hdLod5(param_18, param_19).x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1703 = _RESERVED_IDENTIFIER_FIXUP_1209;
    _RESERVED_IDENTIFIER_FIXUP_1703.w = _RESERVED_IDENTIFIER_FIXUP_1266;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1280 = _RESERVED_IDENTIFIER_FIXUP_1692.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1709 = _RESERVED_IDENTIFIER_FIXUP_1525;
    _RESERVED_IDENTIFIER_FIXUP_1709.x = _RESERVED_IDENTIFIER_FIXUP_1280.x;
    _RESERVED_IDENTIFIER_FIXUP_1709.y = _RESERVED_IDENTIFIER_FIXUP_1280.y;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1709.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_828;
    float _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_1266 + hdLod5(param_20, param_21).x;
    _RESERVED_IDENTIFIER_FIXUP_1703.w = _RESERVED_IDENTIFIER_FIXUP_1295;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_1692.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1718;
    _RESERVED_IDENTIFIER_FIXUP_1718.x = _RESERVED_IDENTIFIER_FIXUP_1302.x;
    _RESERVED_IDENTIFIER_FIXUP_1718.y = _RESERVED_IDENTIFIER_FIXUP_1302.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1692.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1722;
    _RESERVED_IDENTIFIER_FIXUP_1722.x = _RESERVED_IDENTIFIER_FIXUP_1312.x;
    _RESERVED_IDENTIFIER_FIXUP_1722.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
    _RESERVED_IDENTIFIER_FIXUP_1718.w = _RESERVED_IDENTIFIER_FIXUP_828;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1718.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_828;
    float _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_1295 + hdLod5(param_22, param_23).x;
    _RESERVED_IDENTIFIER_FIXUP_1703.w = _RESERVED_IDENTIFIER_FIXUP_1334;
    _RESERVED_IDENTIFIER_FIXUP_1722.w = _RESERVED_IDENTIFIER_FIXUP_828;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1722.xy;
    float param_25 = _RESERVED_IDENTIFIER_FIXUP_828;
    float _RESERVED_IDENTIFIER_FIXUP_1353 = _RESERVED_IDENTIFIER_FIXUP_1334 + hdLod5(param_24, param_25).x;
    _RESERVED_IDENTIFIER_FIXUP_1703.w = _RESERVED_IDENTIFIER_FIXUP_1353;
    float _RESERVED_IDENTIFIER_FIXUP_1358 = (_RESERVED_IDENTIFIER_FIXUP_1353 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1703.w = _RESERVED_IDENTIFIER_FIXUP_1358;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1799 = vec4(_RESERVED_IDENTIFIER_FIXUP_1209.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_957);
    float _RESERVED_IDENTIFIER_FIXUP_1372 = clamp((_RESERVED_IDENTIFIER_FIXUP_957 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1799.w = _RESERVED_IDENTIFIER_FIXUP_1372;
    float _RESERVED_IDENTIFIER_FIXUP_1379 = (_RESERVED_IDENTIFIER_FIXUP_1372 * _RESERVED_IDENTIFIER_FIXUP_1358) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1703.w = _RESERVED_IDENTIFIER_FIXUP_1379;
    float _RESERVED_IDENTIFIER_FIXUP_1385 = min(_RESERVED_IDENTIFIER_FIXUP_1379, _RESERVED_IDENTIFIER_FIXUP_1123.w);
    _RESERVED_IDENTIFIER_FIXUP_1799.w = _RESERVED_IDENTIFIER_FIXUP_1385;
    float _RESERVED_IDENTIFIER_FIXUP_1401 = (_RESERVED_IDENTIFIER_FIXUP_1385 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1703.w = _RESERVED_IDENTIFIER_FIXUP_1401;
    _RESERVED_IDENTIFIER_FIXUP_1703.w = _RESERVED_IDENTIFIER_FIXUP_1401;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1417 = (_RESERVED_IDENTIFIER_FIXUP_1703.xyz * _RESERVED_IDENTIFIER_FIXUP_1703.www) + vec4(_RESERVED_IDENTIFIER_FIXUP_1799.xyz * _RESERVED_IDENTIFIER_FIXUP_1799.www, _RESERVED_IDENTIFIER_FIXUP_1385).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1775;
    _RESERVED_IDENTIFIER_FIXUP_1775.x = _RESERVED_IDENTIFIER_FIXUP_1417.x;
    _RESERVED_IDENTIFIER_FIXUP_1775.y = _RESERVED_IDENTIFIER_FIXUP_1417.y;
    _RESERVED_IDENTIFIER_FIXUP_1775.z = _RESERVED_IDENTIFIER_FIXUP_1417.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1430 = _RESERVED_IDENTIFIER_FIXUP_1775.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1781;
    _RESERVED_IDENTIFIER_FIXUP_1781.x = _RESERVED_IDENTIFIER_FIXUP_1430.x;
    _RESERVED_IDENTIFIER_FIXUP_1781.y = _RESERVED_IDENTIFIER_FIXUP_1430.y;
    _RESERVED_IDENTIFIER_FIXUP_1781.z = _RESERVED_IDENTIFIER_FIXUP_1430.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1781.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_527 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_536;
    if (_RESERVED_IDENTIFIER_FIXUP_527)
    {
        _RESERVED_IDENTIFIER_FIXUP_536 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_536 = _RESERVED_IDENTIFIER_FIXUP_527;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_536)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_573 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1620.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_599 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1456;
    if (_RESERVED_IDENTIFIER_FIXUP_573 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1456 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_573), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_599);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1456 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_599);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1456;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1401);
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
    vec2 param = v3.xy;
    r0 = hdTex1(param);
    vec3 hdB57 = v0.xyz + v0.xyz;
    r1.x = hdB57.x;
    r1.y = hdB57.y;
    r1.z = hdB57.z;
    vec3 hdB73 = r0.xyz * r1.xyz;
    r2.x = hdB73.x;
    r2.y = hdB73.y;
    r2.z = hdB73.z;
    vec3 hdB94 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r3.x = hdB94.x;
    r3.y = hdB94.y;
    r3.z = hdB94.z;
    vec4 hdB103 = r0;
    vec3 hdB112 = mix(r2.xyz, hdB103.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r0.x = hdB112.x;
    r0.y = hdB112.y;
    r0.z = hdB112.z;
    vec2 param_1 = v4.xy;
    r2 = hdTex3(param_1);
    r0 *= r2.xxxx;
    r4 = OptTex0( v2.xyz);
    vec3 hdB140 = r1.xyz * r4.xyz;
    r5.x = hdB140.x;
    r5.y = hdB140.y;
    r5.z = hdB140.z;
    vec4 hdB149 = r4;
    vec3 hdB155 = mix(r5.xyz, hdB149.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r4.x = hdB155.x;
    r4.y = hdB155.y;
    r4.z = hdB155.z;
    r1.w = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r4 * r1.wwww) + r0;
    vec2 param_2 = v3.wz;
    r4 = hdTex2(param_2);
    vec4 hdB186 = r1;
    vec3 hdB190 = hdB186.xyz * r4.xyz;
    r1.x = hdB190.x;
    r1.y = hdB190.y;
    r1.z = hdB190.z;
    vec4 hdB199 = r4;
    vec3 hdB205 = mix(r1.xyz, hdB199.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r4.x = hdB205.x;
    r4.y = hdB205.y;
    r4.z = hdB205.z;
    r0 = (r4 * r2.yyyy) + r0;
    vec3 hdB222 = r0.www * v1.xyz;
    r1.x = hdB222.x;
    r1.y = hdB222.y;
    r1.z = hdB222.z;
    r3 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_3 = r3.xy;
    float param_4 = r3.w;
    r3 = hdLod5(param_3, param_4);
    vec2 hdB246 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB246.x;
    r4.w = hdB246.y;
    vec2 hdB255 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB255.x;
    r2.y = hdB255.y;
    vec2 hdB266 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB266.x;
    r4.y = hdB266.y;
    vec2 param_5 = r4.xy;
    float param_6 = r4.w;
    r4 = hdLod5(param_5, param_6);
    r0.w = r3.x + r4.x;
    vec2 hdB285 = vec2(1.0, 0.0) * v5.zx;
    r3.z = hdB285.x;
    r3.w = hdB285.y;
    vec2 hdB296 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r3.x = hdB296.x;
    r3.y = hdB296.y;
    vec2 param_7 = r3.xy;
    float param_8 = r3.w;
    r3 = hdLod5(param_7, param_8);
    r0.w += r3.x;
    vec2 hdB319 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r3.x = hdB319.x;
    r3.y = hdB319.y;
    vec2 hdB330 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r4.x = hdB330.x;
    r4.y = hdB330.y;
    vec2 hdB337 = vec2(1.0, 0.0) * v5.zx;
    r3.z = hdB337.x;
    r3.w = hdB337.y;
    vec2 param_9 = r3.xy;
    float param_10 = r3.w;
    r3 = hdLod5(param_9, param_10);
    r0.w += r3.x;
    vec2 hdB356 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB356.x;
    r4.w = hdB356.y;
    vec2 param_11 = r4.xy;
    float param_12 = r4.w;
    r3 = hdLod5(param_11, param_12);
    r0.w += r3.x;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.w = max(abs(v5.x), abs(v5.y));
    r1.w = clamp((r1.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.w * r0.w) + 1.0;
    r1.w = min(r0.w, r2.w);
    vec4 hdB409 = r1;
    vec4 hdB411 = r1;
    vec3 hdB413 = hdB409.xyz * hdB411.www;
    r1.x = hdB413.x;
    r1.y = hdB413.y;
    r1.z = hdB413.z;
    r0.w = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB427 = r0;
    vec4 hdB429 = r0;
    vec3 hdB434 = (hdB427.xyz * hdB429.www) + r1.xyz;
    r0.x = hdB434.x;
    r0.y = hdB434.y;
    r0.z = hdB434.z;
    vec4 hdB441 = r0;
    vec3 hdB448 = hdB441.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB448.x;
    r0.y = hdB448.y;
    r0.z = hdB448.z;
    vec3 hdB463 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB463.x;
    oC0.y = hdB463.y;
    oC0.z = hdB463.z;
    oC0.w = 1.0;
    bool hdB475 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB483;
    if (hdB475)
    {
        hdB483 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB483 = hdB475;
    }
    if (hdB483)
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
    bool _1716 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1726;
    if (_1716)
    {
        _1726 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1726 = _1716;
    }
    if (_1726)
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
        bool _1751 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1766;
        if (!_1751)
        {
            _1766 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1766 = _1751;
        }
        if (_1766)
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
