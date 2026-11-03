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
float _RESERVED_IDENTIFIER_FIXUP_1813;
vec4 _RESERVED_IDENTIFIER_FIXUP_1814;


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
    vec3 _RESERVED_IDENTIFIER_FIXUP_668 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1813).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_671 = _RESERVED_IDENTIFIER_FIXUP_668 + _RESERVED_IDENTIFIER_FIXUP_668;
    float _RESERVED_IDENTIFIER_FIXUP_673 = _RESERVED_IDENTIFIER_FIXUP_671.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1470;
    _RESERVED_IDENTIFIER_FIXUP_1470.x = _RESERVED_IDENTIFIER_FIXUP_673;
    _RESERVED_IDENTIFIER_FIXUP_1470.y = _RESERVED_IDENTIFIER_FIXUP_671.y;
    _RESERVED_IDENTIFIER_FIXUP_1470.z = _RESERVED_IDENTIFIER_FIXUP_671.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_679 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_682 = _RESERVED_IDENTIFIER_FIXUP_679 * _RESERVED_IDENTIFIER_FIXUP_1470.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1476;
    _RESERVED_IDENTIFIER_FIXUP_1476.x = _RESERVED_IDENTIFIER_FIXUP_682.x;
    _RESERVED_IDENTIFIER_FIXUP_1476.y = _RESERVED_IDENTIFIER_FIXUP_682.y;
    _RESERVED_IDENTIFIER_FIXUP_1476.z = _RESERVED_IDENTIFIER_FIXUP_682.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_692 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1482;
    _RESERVED_IDENTIFIER_FIXUP_1482.x = _RESERVED_IDENTIFIER_FIXUP_692.x;
    _RESERVED_IDENTIFIER_FIXUP_1482.y = _RESERVED_IDENTIFIER_FIXUP_692.y;
    _RESERVED_IDENTIFIER_FIXUP_1482.z = _RESERVED_IDENTIFIER_FIXUP_692.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_706 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1482.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_707 = mix(_RESERVED_IDENTIFIER_FIXUP_1476.xyz, _RESERVED_IDENTIFIER_FIXUP_679, _RESERVED_IDENTIFIER_FIXUP_706);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1488;
    _RESERVED_IDENTIFIER_FIXUP_1488.x = _RESERVED_IDENTIFIER_FIXUP_707.x;
    _RESERVED_IDENTIFIER_FIXUP_1488.y = _RESERVED_IDENTIFIER_FIXUP_707.y;
    _RESERVED_IDENTIFIER_FIXUP_1488.z = _RESERVED_IDENTIFIER_FIXUP_707.z;
    vec2 param_1 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_717 = hdTex3(param_1);
    vec3 _RESERVED_IDENTIFIER_FIXUP_729 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_730 = _RESERVED_IDENTIFIER_FIXUP_1470.xyz * _RESERVED_IDENTIFIER_FIXUP_729;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1494;
    _RESERVED_IDENTIFIER_FIXUP_1494.x = _RESERVED_IDENTIFIER_FIXUP_730.x;
    _RESERVED_IDENTIFIER_FIXUP_1494.y = _RESERVED_IDENTIFIER_FIXUP_730.y;
    _RESERVED_IDENTIFIER_FIXUP_1494.z = _RESERVED_IDENTIFIER_FIXUP_730.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_744 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1482.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_745 = mix(_RESERVED_IDENTIFIER_FIXUP_1494.xyz, _RESERVED_IDENTIFIER_FIXUP_729, _RESERVED_IDENTIFIER_FIXUP_744);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1500;
    _RESERVED_IDENTIFIER_FIXUP_1500.x = _RESERVED_IDENTIFIER_FIXUP_745.x;
    _RESERVED_IDENTIFIER_FIXUP_1500.y = _RESERVED_IDENTIFIER_FIXUP_745.y;
    _RESERVED_IDENTIFIER_FIXUP_1500.z = _RESERVED_IDENTIFIER_FIXUP_745.z;
    float _RESERVED_IDENTIFIER_FIXUP_755 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_717.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1815 = vec4(_RESERVED_IDENTIFIER_FIXUP_673, _RESERVED_IDENTIFIER_FIXUP_671.yz, _RESERVED_IDENTIFIER_FIXUP_755);
    _RESERVED_IDENTIFIER_FIXUP_1815.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_755;
    vec2 param_2 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = hdTex2(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_776 = _RESERVED_IDENTIFIER_FIXUP_1815.xyz * _RESERVED_IDENTIFIER_FIXUP_775;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1511;
    _RESERVED_IDENTIFIER_FIXUP_1511.x = _RESERVED_IDENTIFIER_FIXUP_776.x;
    _RESERVED_IDENTIFIER_FIXUP_1511.y = _RESERVED_IDENTIFIER_FIXUP_776.y;
    _RESERVED_IDENTIFIER_FIXUP_1511.z = _RESERVED_IDENTIFIER_FIXUP_776.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_790 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1482.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_791 = mix(_RESERVED_IDENTIFIER_FIXUP_1511.xyz, _RESERVED_IDENTIFIER_FIXUP_775, _RESERVED_IDENTIFIER_FIXUP_790);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1517;
    _RESERVED_IDENTIFIER_FIXUP_1517.x = _RESERVED_IDENTIFIER_FIXUP_791.x;
    _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_791.y;
    _RESERVED_IDENTIFIER_FIXUP_1517.z = _RESERVED_IDENTIFIER_FIXUP_791.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_803 = (_RESERVED_IDENTIFIER_FIXUP_1517 * _RESERVED_IDENTIFIER_FIXUP_717.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1500 * _RESERVED_IDENTIFIER_FIXUP_1815.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1488 * _RESERVED_IDENTIFIER_FIXUP_717.xxxx));
    vec4 _RESERVED_IDENTIFIER_FIXUP_818 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_821 = _RESERVED_IDENTIFIER_FIXUP_818.xy;
    float _RESERVED_IDENTIFIER_FIXUP_823 = _RESERVED_IDENTIFIER_FIXUP_818.w;
    vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_821;
    float param_4 = _RESERVED_IDENTIFIER_FIXUP_823;
    vec4 _RESERVED_IDENTIFIER_FIXUP_824 = hdLod5(param_3, param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1532;
    _RESERVED_IDENTIFIER_FIXUP_1532.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_832 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_834 = _RESERVED_IDENTIFIER_FIXUP_832.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_717;
    _RESERVED_IDENTIFIER_FIXUP_1534.x = _RESERVED_IDENTIFIER_FIXUP_834;
    float _RESERVED_IDENTIFIER_FIXUP_836 = _RESERVED_IDENTIFIER_FIXUP_832.y;
    _RESERVED_IDENTIFIER_FIXUP_1534.y = _RESERVED_IDENTIFIER_FIXUP_836;
    vec2 _RESERVED_IDENTIFIER_FIXUP_842 = _RESERVED_IDENTIFIER_FIXUP_1534.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1538 = _RESERVED_IDENTIFIER_FIXUP_1532;
    _RESERVED_IDENTIFIER_FIXUP_1538.x = _RESERVED_IDENTIFIER_FIXUP_842.x;
    _RESERVED_IDENTIFIER_FIXUP_1538.y = _RESERVED_IDENTIFIER_FIXUP_842.y;
    vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1538.xy;
    float param_6 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_824.y = hdLod5(param_5, param_6).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_865 = _RESERVED_IDENTIFIER_FIXUP_1534.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1550 = _RESERVED_IDENTIFIER_FIXUP_1532;
    _RESERVED_IDENTIFIER_FIXUP_1550.x = _RESERVED_IDENTIFIER_FIXUP_865.x;
    _RESERVED_IDENTIFIER_FIXUP_1550.y = _RESERVED_IDENTIFIER_FIXUP_865.y;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1550.xy;
    float param_8 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_824.z = hdLod5(param_7, param_8).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_884 = _RESERVED_IDENTIFIER_FIXUP_1534.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1558;
    _RESERVED_IDENTIFIER_FIXUP_1558.x = _RESERVED_IDENTIFIER_FIXUP_884.x;
    _RESERVED_IDENTIFIER_FIXUP_1558.y = _RESERVED_IDENTIFIER_FIXUP_884.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_894 = _RESERVED_IDENTIFIER_FIXUP_1534.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1562;
    _RESERVED_IDENTIFIER_FIXUP_1562.x = _RESERVED_IDENTIFIER_FIXUP_894.x;
    _RESERVED_IDENTIFIER_FIXUP_1562.y = _RESERVED_IDENTIFIER_FIXUP_894.y;
    _RESERVED_IDENTIFIER_FIXUP_1558.w = 0.0;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1558.xy;
    float param_10 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_824.w = hdLod5(param_9, param_10).x;
    float _RESERVED_IDENTIFIER_FIXUP_921 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_824 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    _RESERVED_IDENTIFIER_FIXUP_803.w = _RESERVED_IDENTIFIER_FIXUP_921;
    _RESERVED_IDENTIFIER_FIXUP_1562.w = 0.0;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1562.xy;
    float param_12 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_938 = hdLod5(param_11, param_12).x - texcoord4.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1816 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_938);
    float _RESERVED_IDENTIFIER_FIXUP_943 = float(_RESERVED_IDENTIFIER_FIXUP_938 >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1816.w = _RESERVED_IDENTIFIER_FIXUP_943;
    float _RESERVED_IDENTIFIER_FIXUP_949 = _RESERVED_IDENTIFIER_FIXUP_921 + _RESERVED_IDENTIFIER_FIXUP_943;
    _RESERVED_IDENTIFIER_FIXUP_803.w = _RESERVED_IDENTIFIER_FIXUP_949;
    float _RESERVED_IDENTIFIER_FIXUP_954 = (_RESERVED_IDENTIFIER_FIXUP_949 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_803.w = _RESERVED_IDENTIFIER_FIXUP_954;
    float _RESERVED_IDENTIFIER_FIXUP_962 = max(abs(texcoord4.x), abs(texcoord4.y));
    _RESERVED_IDENTIFIER_FIXUP_1816.w = _RESERVED_IDENTIFIER_FIXUP_962;
    float _RESERVED_IDENTIFIER_FIXUP_968 = clamp((_RESERVED_IDENTIFIER_FIXUP_962 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1816.w = _RESERVED_IDENTIFIER_FIXUP_968;
    float _RESERVED_IDENTIFIER_FIXUP_975 = (_RESERVED_IDENTIFIER_FIXUP_968 * _RESERVED_IDENTIFIER_FIXUP_954) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_803.w = _RESERVED_IDENTIFIER_FIXUP_975;
    _RESERVED_IDENTIFIER_FIXUP_1816.w = min(_RESERVED_IDENTIFIER_FIXUP_975, _RESERVED_IDENTIFIER_FIXUP_717.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_987 = _RESERVED_IDENTIFIER_FIXUP_1816.xyz * _RESERVED_IDENTIFIER_FIXUP_1816.www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1610;
    _RESERVED_IDENTIFIER_FIXUP_1610.x = _RESERVED_IDENTIFIER_FIXUP_987.x;
    _RESERVED_IDENTIFIER_FIXUP_1610.y = _RESERVED_IDENTIFIER_FIXUP_987.y;
    _RESERVED_IDENTIFIER_FIXUP_1610.z = _RESERVED_IDENTIFIER_FIXUP_987.z;
    _RESERVED_IDENTIFIER_FIXUP_803.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1013 = (_RESERVED_IDENTIFIER_FIXUP_803.xyz * _RESERVED_IDENTIFIER_FIXUP_803.www) + _RESERVED_IDENTIFIER_FIXUP_1610.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1621;
    _RESERVED_IDENTIFIER_FIXUP_1621.x = _RESERVED_IDENTIFIER_FIXUP_1013.x;
    _RESERVED_IDENTIFIER_FIXUP_1621.y = _RESERVED_IDENTIFIER_FIXUP_1013.y;
    _RESERVED_IDENTIFIER_FIXUP_1621.z = _RESERVED_IDENTIFIER_FIXUP_1013.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1026 = _RESERVED_IDENTIFIER_FIXUP_1621.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1627;
    _RESERVED_IDENTIFIER_FIXUP_1627.x = _RESERVED_IDENTIFIER_FIXUP_1026.x;
    _RESERVED_IDENTIFIER_FIXUP_1627.y = _RESERVED_IDENTIFIER_FIXUP_1026.y;
    _RESERVED_IDENTIFIER_FIXUP_1627.z = _RESERVED_IDENTIFIER_FIXUP_1026.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1041 = _RESERVED_IDENTIFIER_FIXUP_1627.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1633;
    _RESERVED_IDENTIFIER_FIXUP_1633.x = _RESERVED_IDENTIFIER_FIXUP_1041.x;
    _RESERVED_IDENTIFIER_FIXUP_1633.y = _RESERVED_IDENTIFIER_FIXUP_1041.y;
    _RESERVED_IDENTIFIER_FIXUP_1633.z = _RESERVED_IDENTIFIER_FIXUP_1041.z;
    vec2 param_13 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1077 = hdTex1(param_13);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1082 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_1084 = _RESERVED_IDENTIFIER_FIXUP_1082.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1641;
    _RESERVED_IDENTIFIER_FIXUP_1641.x = _RESERVED_IDENTIFIER_FIXUP_1084;
    _RESERVED_IDENTIFIER_FIXUP_1641.y = _RESERVED_IDENTIFIER_FIXUP_1082.y;
    _RESERVED_IDENTIFIER_FIXUP_1641.z = _RESERVED_IDENTIFIER_FIXUP_1082.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1090 = _RESERVED_IDENTIFIER_FIXUP_1077.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1093 = _RESERVED_IDENTIFIER_FIXUP_1090 * _RESERVED_IDENTIFIER_FIXUP_1641.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1647;
    _RESERVED_IDENTIFIER_FIXUP_1647.x = _RESERVED_IDENTIFIER_FIXUP_1093.x;
    _RESERVED_IDENTIFIER_FIXUP_1647.y = _RESERVED_IDENTIFIER_FIXUP_1093.y;
    _RESERVED_IDENTIFIER_FIXUP_1647.z = _RESERVED_IDENTIFIER_FIXUP_1093.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1118 = mix(_RESERVED_IDENTIFIER_FIXUP_1647.xyz, _RESERVED_IDENTIFIER_FIXUP_1090, _RESERVED_IDENTIFIER_FIXUP_706);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1659 = _RESERVED_IDENTIFIER_FIXUP_1077;
    _RESERVED_IDENTIFIER_FIXUP_1659.x = _RESERVED_IDENTIFIER_FIXUP_1118.x;
    _RESERVED_IDENTIFIER_FIXUP_1659.y = _RESERVED_IDENTIFIER_FIXUP_1118.y;
    _RESERVED_IDENTIFIER_FIXUP_1659.z = _RESERVED_IDENTIFIER_FIXUP_1118.z;
    vec2 param_14 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1128 = hdTex3(param_14);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1136 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1140 = _RESERVED_IDENTIFIER_FIXUP_1136.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1141 = _RESERVED_IDENTIFIER_FIXUP_1641.xyz * _RESERVED_IDENTIFIER_FIXUP_1140;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1665;
    _RESERVED_IDENTIFIER_FIXUP_1665.x = _RESERVED_IDENTIFIER_FIXUP_1141.x;
    _RESERVED_IDENTIFIER_FIXUP_1665.y = _RESERVED_IDENTIFIER_FIXUP_1141.y;
    _RESERVED_IDENTIFIER_FIXUP_1665.z = _RESERVED_IDENTIFIER_FIXUP_1141.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1156 = mix(_RESERVED_IDENTIFIER_FIXUP_1665.xyz, _RESERVED_IDENTIFIER_FIXUP_1140, _RESERVED_IDENTIFIER_FIXUP_744);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1671 = _RESERVED_IDENTIFIER_FIXUP_1136;
    _RESERVED_IDENTIFIER_FIXUP_1671.x = _RESERVED_IDENTIFIER_FIXUP_1156.x;
    _RESERVED_IDENTIFIER_FIXUP_1671.y = _RESERVED_IDENTIFIER_FIXUP_1156.y;
    _RESERVED_IDENTIFIER_FIXUP_1671.z = _RESERVED_IDENTIFIER_FIXUP_1156.z;
    float _RESERVED_IDENTIFIER_FIXUP_1166 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1128.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1817 = vec4(_RESERVED_IDENTIFIER_FIXUP_1084, _RESERVED_IDENTIFIER_FIXUP_1082.yz, _RESERVED_IDENTIFIER_FIXUP_1166);
    _RESERVED_IDENTIFIER_FIXUP_1817.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1166;
    vec2 param_15 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1182 = hdTex2(param_15);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1186 = _RESERVED_IDENTIFIER_FIXUP_1182.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1187 = _RESERVED_IDENTIFIER_FIXUP_1817.xyz * _RESERVED_IDENTIFIER_FIXUP_1186;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1682;
    _RESERVED_IDENTIFIER_FIXUP_1682.x = _RESERVED_IDENTIFIER_FIXUP_1187.x;
    _RESERVED_IDENTIFIER_FIXUP_1682.y = _RESERVED_IDENTIFIER_FIXUP_1187.y;
    _RESERVED_IDENTIFIER_FIXUP_1682.z = _RESERVED_IDENTIFIER_FIXUP_1187.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = mix(_RESERVED_IDENTIFIER_FIXUP_1682.xyz, _RESERVED_IDENTIFIER_FIXUP_1186, _RESERVED_IDENTIFIER_FIXUP_790);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1688 = _RESERVED_IDENTIFIER_FIXUP_1182;
    _RESERVED_IDENTIFIER_FIXUP_1688.x = _RESERVED_IDENTIFIER_FIXUP_1202.x;
    _RESERVED_IDENTIFIER_FIXUP_1688.y = _RESERVED_IDENTIFIER_FIXUP_1202.y;
    _RESERVED_IDENTIFIER_FIXUP_1688.z = _RESERVED_IDENTIFIER_FIXUP_1202.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1214 = (_RESERVED_IDENTIFIER_FIXUP_1688 * _RESERVED_IDENTIFIER_FIXUP_1128.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1671 * _RESERVED_IDENTIFIER_FIXUP_1817.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1659 * _RESERVED_IDENTIFIER_FIXUP_1128.xxxx));
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_821;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_823;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1235 = hdLod5(param_16, param_17);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1705 = _RESERVED_IDENTIFIER_FIXUP_1128;
    _RESERVED_IDENTIFIER_FIXUP_1705.x = _RESERVED_IDENTIFIER_FIXUP_834;
    _RESERVED_IDENTIFIER_FIXUP_1705.y = _RESERVED_IDENTIFIER_FIXUP_836;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1253 = _RESERVED_IDENTIFIER_FIXUP_1705.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1709 = _RESERVED_IDENTIFIER_FIXUP_1532;
    _RESERVED_IDENTIFIER_FIXUP_1709.x = _RESERVED_IDENTIFIER_FIXUP_1253.x;
    _RESERVED_IDENTIFIER_FIXUP_1709.y = _RESERVED_IDENTIFIER_FIXUP_1253.y;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1709.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1235.y = hdLod5(param_18, param_19).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1276 = _RESERVED_IDENTIFIER_FIXUP_1705.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1721 = _RESERVED_IDENTIFIER_FIXUP_1532;
    _RESERVED_IDENTIFIER_FIXUP_1721.x = _RESERVED_IDENTIFIER_FIXUP_1276.x;
    _RESERVED_IDENTIFIER_FIXUP_1721.y = _RESERVED_IDENTIFIER_FIXUP_1276.y;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1721.xy;
    float param_21 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1235.z = hdLod5(param_20, param_21).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_1705.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1729;
    _RESERVED_IDENTIFIER_FIXUP_1729.x = _RESERVED_IDENTIFIER_FIXUP_1295.x;
    _RESERVED_IDENTIFIER_FIXUP_1729.y = _RESERVED_IDENTIFIER_FIXUP_1295.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_1705.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1733;
    _RESERVED_IDENTIFIER_FIXUP_1733.x = _RESERVED_IDENTIFIER_FIXUP_1305.x;
    _RESERVED_IDENTIFIER_FIXUP_1733.y = _RESERVED_IDENTIFIER_FIXUP_1305.y;
    _RESERVED_IDENTIFIER_FIXUP_1729.w = 0.0;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1729.xy;
    float param_23 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1235.w = hdLod5(param_22, param_23).x;
    float _RESERVED_IDENTIFIER_FIXUP_1332 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1235 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1745 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1745.w = _RESERVED_IDENTIFIER_FIXUP_1332;
    _RESERVED_IDENTIFIER_FIXUP_1733.w = 0.0;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1733.xy;
    float param_25 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1349 = hdLod5(param_24, param_25).x - texcoord4.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1818 = vec4(_RESERVED_IDENTIFIER_FIXUP_1214.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_1349);
    float _RESERVED_IDENTIFIER_FIXUP_1354 = float(_RESERVED_IDENTIFIER_FIXUP_1349 >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1818.w = _RESERVED_IDENTIFIER_FIXUP_1354;
    float _RESERVED_IDENTIFIER_FIXUP_1360 = _RESERVED_IDENTIFIER_FIXUP_1332 + _RESERVED_IDENTIFIER_FIXUP_1354;
    _RESERVED_IDENTIFIER_FIXUP_1745.w = _RESERVED_IDENTIFIER_FIXUP_1360;
    float _RESERVED_IDENTIFIER_FIXUP_1365 = (_RESERVED_IDENTIFIER_FIXUP_1360 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1745.w = _RESERVED_IDENTIFIER_FIXUP_1365;
    _RESERVED_IDENTIFIER_FIXUP_1818.w = _RESERVED_IDENTIFIER_FIXUP_962;
    float _RESERVED_IDENTIFIER_FIXUP_1379 = clamp((_RESERVED_IDENTIFIER_FIXUP_962 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1818.w = _RESERVED_IDENTIFIER_FIXUP_1379;
    float _RESERVED_IDENTIFIER_FIXUP_1386 = (_RESERVED_IDENTIFIER_FIXUP_1379 * _RESERVED_IDENTIFIER_FIXUP_1365) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1745.w = _RESERVED_IDENTIFIER_FIXUP_1386;
    float _RESERVED_IDENTIFIER_FIXUP_1392 = min(_RESERVED_IDENTIFIER_FIXUP_1386, _RESERVED_IDENTIFIER_FIXUP_1128.w);
    _RESERVED_IDENTIFIER_FIXUP_1818.w = _RESERVED_IDENTIFIER_FIXUP_1392;
    float _RESERVED_IDENTIFIER_FIXUP_1408 = (_RESERVED_IDENTIFIER_FIXUP_1392 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1745.w = _RESERVED_IDENTIFIER_FIXUP_1408;
    _RESERVED_IDENTIFIER_FIXUP_1745.w = _RESERVED_IDENTIFIER_FIXUP_1408;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1424 = (_RESERVED_IDENTIFIER_FIXUP_1745.xyz * _RESERVED_IDENTIFIER_FIXUP_1745.www) + vec4(_RESERVED_IDENTIFIER_FIXUP_1818.xyz * _RESERVED_IDENTIFIER_FIXUP_1818.www, _RESERVED_IDENTIFIER_FIXUP_1392).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1794;
    _RESERVED_IDENTIFIER_FIXUP_1794.x = _RESERVED_IDENTIFIER_FIXUP_1424.x;
    _RESERVED_IDENTIFIER_FIXUP_1794.y = _RESERVED_IDENTIFIER_FIXUP_1424.y;
    _RESERVED_IDENTIFIER_FIXUP_1794.z = _RESERVED_IDENTIFIER_FIXUP_1424.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1437 = _RESERVED_IDENTIFIER_FIXUP_1794.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1800;
    _RESERVED_IDENTIFIER_FIXUP_1800.x = _RESERVED_IDENTIFIER_FIXUP_1437.x;
    _RESERVED_IDENTIFIER_FIXUP_1800.y = _RESERVED_IDENTIFIER_FIXUP_1437.y;
    _RESERVED_IDENTIFIER_FIXUP_1800.z = _RESERVED_IDENTIFIER_FIXUP_1437.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1800.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_530 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_539;
    if (_RESERVED_IDENTIFIER_FIXUP_530)
    {
        _RESERVED_IDENTIFIER_FIXUP_539 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_539 = _RESERVED_IDENTIFIER_FIXUP_530;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_539)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_576 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1633.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_602 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1463;
    if (_RESERVED_IDENTIFIER_FIXUP_576 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1463 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_576), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_602);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1463 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_602);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1463;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1408);
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
    r3 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_3 = r3.xy;
    float param_4 = r3.w;
    r3 = hdLod5(param_3, param_4);
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB251 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB251.x;
    r2.y = hdB251.y;
    vec2 hdB262 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB262.x;
    r4.y = hdB262.y;
    vec2 param_5 = r4.xy;
    float param_6 = r4.w;
    r4 = hdLod5(param_5, param_6);
    r3.y = r4.x;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB286 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = hdB286.x;
    r4.y = hdB286.y;
    vec2 param_7 = r4.xy;
    float param_8 = r4.w;
    r4 = hdLod5(param_7, param_8);
    r3.z = r4.x;
    vec2 hdB306 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = hdB306.x;
    r4.y = hdB306.y;
    vec2 hdB317 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r5.x = hdB317.x;
    r5.y = hdB317.y;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 param_9 = r4.xy;
    float param_10 = r4.w;
    r4 = hdLod5(param_9, param_10);
    r3.w = r4.x;
    r3 += (-v5.zzzz);
    r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
    r0.w = dot(r3, vec4(1.0));
    r5.z = 0.0;
    r5.w = 0.0;
    vec2 param_11 = r5.xy;
    float param_12 = r5.w;
    r3 = hdLod5(param_11, param_12);
    r1.w = r3.x + (-v5.z);
    r1.w = float(r1.w >= 0.0);
    r0.w += r1.w;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.w = max(abs(v5.x), abs(v5.y));
    r1.w = clamp((r1.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.w * r0.w) + 1.0;
    r1.w = min(r0.w, r2.w);
    vec4 hdB412 = r1;
    vec4 hdB414 = r1;
    vec3 hdB416 = hdB412.xyz * hdB414.www;
    r1.x = hdB416.x;
    r1.y = hdB416.y;
    r1.z = hdB416.z;
    r0.w = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB430 = r0;
    vec4 hdB432 = r0;
    vec3 hdB437 = (hdB430.xyz * hdB432.www) + r1.xyz;
    r0.x = hdB437.x;
    r0.y = hdB437.y;
    r0.z = hdB437.z;
    vec4 hdB444 = r0;
    vec3 hdB451 = hdB444.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB451.x;
    r0.y = hdB451.y;
    r0.z = hdB451.z;
    vec3 hdB466 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB466.x;
    oC0.y = hdB466.y;
    oC0.z = hdB466.z;
    oC0.w = 1.0;
    bool hdB478 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB486;
    if (hdB478)
    {
        hdB486 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB486 = hdB478;
    }
    if (hdB486)
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
    bool _1702 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1712;
    if (_1702)
    {
        _1712 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1712 = _1702;
    }
    if (_1712)
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
        bool _1737 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1752;
        if (!_1737)
        {
            _1752 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1752 = _1737;
        }
        if (_1752)
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
