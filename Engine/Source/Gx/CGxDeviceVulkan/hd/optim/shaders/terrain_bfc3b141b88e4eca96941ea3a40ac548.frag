#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1474;
vec4 _RESERVED_IDENTIFIER_FIXUP_1475;


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
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _49 = hdOverride >= 0;
    bool _69;
    if (_49)
    {
        _69 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _69 = _49;
    }
    vec4 _70;
    if (_69)
    {
        _70 = vec4(float(hdOverride));
    }
    else
    {
        _70 = value;
    }
    return _70;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _87 = hdOverride >= 0;
    bool _96;
    if (_87)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _96 = _87;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_566 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_570 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_574 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_586 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211 = _RESERVED_IDENTIFIER_FIXUP_566;
    _RESERVED_IDENTIFIER_FIXUP_1211.x = _RESERVED_IDENTIFIER_FIXUP_586;
    float _RESERVED_IDENTIFIER_FIXUP_592 = clamp((_RESERVED_IDENTIFIER_FIXUP_586 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1211.x = _RESERVED_IDENTIFIER_FIXUP_592;
    float _RESERVED_IDENTIFIER_FIXUP_598 = ((-_RESERVED_IDENTIFIER_FIXUP_592) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1211.y = _RESERVED_IDENTIFIER_FIXUP_598;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1477;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1476;
    if (_RESERVED_IDENTIFIER_FIXUP_598 != (-_RESERVED_IDENTIFIER_FIXUP_598))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_610 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_620 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_622 = _RESERVED_IDENTIFIER_FIXUP_620.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_1211;
        _RESERVED_IDENTIFIER_FIXUP_1225.y = _RESERVED_IDENTIFIER_FIXUP_622;
        _RESERVED_IDENTIFIER_FIXUP_1225.z = _RESERVED_IDENTIFIER_FIXUP_620.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_630 = _RESERVED_IDENTIFIER_FIXUP_1225.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1229;
        _RESERVED_IDENTIFIER_FIXUP_1229.x = _RESERVED_IDENTIFIER_FIXUP_630.x;
        _RESERVED_IDENTIFIER_FIXUP_1229.y = _RESERVED_IDENTIFIER_FIXUP_630.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_637 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_637.y;
        _RESERVED_IDENTIFIER_FIXUP_1229.w = _RESERVED_IDENTIFIER_FIXUP_641;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_610.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_610.w;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1229.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_641;
        float _RESERVED_IDENTIFIER_FIXUP_652 = hdLod5(param_3, param_4).x + hdLod5(param_5, param_6).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1482 = vec4(_RESERVED_IDENTIFIER_FIXUP_592, _RESERVED_IDENTIFIER_FIXUP_622, _RESERVED_IDENTIFIER_FIXUP_620.y, _RESERVED_IDENTIFIER_FIXUP_652);
        vec2 _RESERVED_IDENTIFIER_FIXUP_659 = _RESERVED_IDENTIFIER_FIXUP_1482.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1242;
        _RESERVED_IDENTIFIER_FIXUP_1242.x = _RESERVED_IDENTIFIER_FIXUP_659.x;
        _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_659.y;
        _RESERVED_IDENTIFIER_FIXUP_1242.w = _RESERVED_IDENTIFIER_FIXUP_641;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1242.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_641;
        float _RESERVED_IDENTIFIER_FIXUP_681 = _RESERVED_IDENTIFIER_FIXUP_652 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_1482.w = _RESERVED_IDENTIFIER_FIXUP_681;
        vec2 _RESERVED_IDENTIFIER_FIXUP_688 = _RESERVED_IDENTIFIER_FIXUP_1482.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1255;
        _RESERVED_IDENTIFIER_FIXUP_1255.x = _RESERVED_IDENTIFIER_FIXUP_688.x;
        _RESERVED_IDENTIFIER_FIXUP_1255.y = _RESERVED_IDENTIFIER_FIXUP_688.y;
        _RESERVED_IDENTIFIER_FIXUP_1255.w = _RESERVED_IDENTIFIER_FIXUP_641;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1255.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_641;
        float _RESERVED_IDENTIFIER_FIXUP_710 = _RESERVED_IDENTIFIER_FIXUP_681 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_1482.w = _RESERVED_IDENTIFIER_FIXUP_710;
        vec2 _RESERVED_IDENTIFIER_FIXUP_717 = _RESERVED_IDENTIFIER_FIXUP_1482.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1268;
        _RESERVED_IDENTIFIER_FIXUP_1268.x = _RESERVED_IDENTIFIER_FIXUP_717.x;
        _RESERVED_IDENTIFIER_FIXUP_1268.y = _RESERVED_IDENTIFIER_FIXUP_717.y;
        _RESERVED_IDENTIFIER_FIXUP_1268.w = _RESERVED_IDENTIFIER_FIXUP_641;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1268.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_641;
        vec4 _RESERVED_IDENTIFIER_FIXUP_734 = hdLod5(param_11, param_12);
        float _RESERVED_IDENTIFIER_FIXUP_739 = _RESERVED_IDENTIFIER_FIXUP_710 + _RESERVED_IDENTIFIER_FIXUP_734.x;
        _RESERVED_IDENTIFIER_FIXUP_1482.y = _RESERVED_IDENTIFIER_FIXUP_739;
        float _RESERVED_IDENTIFIER_FIXUP_744 = (_RESERVED_IDENTIFIER_FIXUP_739 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1482.y = _RESERVED_IDENTIFIER_FIXUP_744;
        float _RESERVED_IDENTIFIER_FIXUP_751 = (_RESERVED_IDENTIFIER_FIXUP_592 * _RESERVED_IDENTIFIER_FIXUP_744) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1482.x = _RESERVED_IDENTIFIER_FIXUP_751;
        _RESERVED_IDENTIFIER_FIXUP_734.x = min(_RESERVED_IDENTIFIER_FIXUP_751, _RESERVED_IDENTIFIER_FIXUP_574.w);
        _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_1482;
        _RESERVED_IDENTIFIER_FIXUP_1476 = _RESERVED_IDENTIFIER_FIXUP_734;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_570;
        _RESERVED_IDENTIFIER_FIXUP_1222.x = _RESERVED_IDENTIFIER_FIXUP_574.w;
        _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_1211;
        _RESERVED_IDENTIFIER_FIXUP_1476 = _RESERVED_IDENTIFIER_FIXUP_1222;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_1477;
    _RESERVED_IDENTIFIER_FIXUP_1295.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_780 = mix(_RESERVED_IDENTIFIER_FIXUP_566, _RESERVED_IDENTIFIER_FIXUP_570, _RESERVED_IDENTIFIER_FIXUP_574.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_1295.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_1295;
    _RESERVED_IDENTIFIER_FIXUP_1297.x = _RESERVED_IDENTIFIER_FIXUP_780.x;
    _RESERVED_IDENTIFIER_FIXUP_1297.y = _RESERVED_IDENTIFIER_FIXUP_780.y;
    _RESERVED_IDENTIFIER_FIXUP_1297.z = _RESERVED_IDENTIFIER_FIXUP_780.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_791 = _RESERVED_IDENTIFIER_FIXUP_1297.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1474).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303 = _RESERVED_IDENTIFIER_FIXUP_1297;
    _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_791.x;
    _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_791.y;
    _RESERVED_IDENTIFIER_FIXUP_1303.z = _RESERVED_IDENTIFIER_FIXUP_791.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_802 = _RESERVED_IDENTIFIER_FIXUP_1303.xyz + _RESERVED_IDENTIFIER_FIXUP_1303.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = _RESERVED_IDENTIFIER_FIXUP_802.x;
    _RESERVED_IDENTIFIER_FIXUP_1309.y = _RESERVED_IDENTIFIER_FIXUP_802.y;
    _RESERVED_IDENTIFIER_FIXUP_1309.z = _RESERVED_IDENTIFIER_FIXUP_802.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_1476;
    _RESERVED_IDENTIFIER_FIXUP_1315.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1315.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1315.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_827 = (_RESERVED_IDENTIFIER_FIXUP_1315.yzw * _RESERVED_IDENTIFIER_FIXUP_1315.xxx) + _RESERVED_IDENTIFIER_FIXUP_1309.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1321 = _RESERVED_IDENTIFIER_FIXUP_1309;
    _RESERVED_IDENTIFIER_FIXUP_1321.x = _RESERVED_IDENTIFIER_FIXUP_827.x;
    _RESERVED_IDENTIFIER_FIXUP_1321.y = _RESERVED_IDENTIFIER_FIXUP_827.y;
    _RESERVED_IDENTIFIER_FIXUP_1321.z = _RESERVED_IDENTIFIER_FIXUP_827.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_840 = _RESERVED_IDENTIFIER_FIXUP_1321.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_1321;
    _RESERVED_IDENTIFIER_FIXUP_1327.x = _RESERVED_IDENTIFIER_FIXUP_840.x;
    _RESERVED_IDENTIFIER_FIXUP_1327.y = _RESERVED_IDENTIFIER_FIXUP_840.y;
    _RESERVED_IDENTIFIER_FIXUP_1327.z = _RESERVED_IDENTIFIER_FIXUP_840.z;
    vec2 param_13 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_888 = hdTex0(param_13);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_892 = hdTex1(param_14);
    vec2 param_15 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_896 = hdTex2(param_15);
    vec4 _RESERVED_IDENTIFIER_FIXUP_901 = mix(_RESERVED_IDENTIFIER_FIXUP_888, _RESERVED_IDENTIFIER_FIXUP_892, _RESERVED_IDENTIFIER_FIXUP_896.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1343 = _RESERVED_IDENTIFIER_FIXUP_888;
    _RESERVED_IDENTIFIER_FIXUP_1343.x = _RESERVED_IDENTIFIER_FIXUP_586;
    float _RESERVED_IDENTIFIER_FIXUP_914 = clamp((_RESERVED_IDENTIFIER_FIXUP_586 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1343.x = _RESERVED_IDENTIFIER_FIXUP_914;
    float _RESERVED_IDENTIFIER_FIXUP_920 = ((-_RESERVED_IDENTIFIER_FIXUP_914) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1343.y = _RESERVED_IDENTIFIER_FIXUP_920;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1480;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1479;
    if (_RESERVED_IDENTIFIER_FIXUP_920 != (-_RESERVED_IDENTIFIER_FIXUP_920))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_932 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_942 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_944 = _RESERVED_IDENTIFIER_FIXUP_942.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_1343;
        _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_944;
        _RESERVED_IDENTIFIER_FIXUP_1357.z = _RESERVED_IDENTIFIER_FIXUP_942.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_952 = _RESERVED_IDENTIFIER_FIXUP_1357.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1361;
        _RESERVED_IDENTIFIER_FIXUP_1361.x = _RESERVED_IDENTIFIER_FIXUP_952.x;
        _RESERVED_IDENTIFIER_FIXUP_1361.y = _RESERVED_IDENTIFIER_FIXUP_952.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_959 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_963 = _RESERVED_IDENTIFIER_FIXUP_959.y;
        _RESERVED_IDENTIFIER_FIXUP_1361.w = _RESERVED_IDENTIFIER_FIXUP_963;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_932.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_932.w;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1361.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_963;
        float _RESERVED_IDENTIFIER_FIXUP_974 = hdLod5(param_16, param_17).x + hdLod5(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1484 = vec4(_RESERVED_IDENTIFIER_FIXUP_914, _RESERVED_IDENTIFIER_FIXUP_944, _RESERVED_IDENTIFIER_FIXUP_942.y, _RESERVED_IDENTIFIER_FIXUP_974);
        vec2 _RESERVED_IDENTIFIER_FIXUP_981 = _RESERVED_IDENTIFIER_FIXUP_1484.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1374;
        _RESERVED_IDENTIFIER_FIXUP_1374.x = _RESERVED_IDENTIFIER_FIXUP_981.x;
        _RESERVED_IDENTIFIER_FIXUP_1374.y = _RESERVED_IDENTIFIER_FIXUP_981.y;
        _RESERVED_IDENTIFIER_FIXUP_1374.w = _RESERVED_IDENTIFIER_FIXUP_963;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1374.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_963;
        float _RESERVED_IDENTIFIER_FIXUP_1003 = _RESERVED_IDENTIFIER_FIXUP_974 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_1484.w = _RESERVED_IDENTIFIER_FIXUP_1003;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1010 = _RESERVED_IDENTIFIER_FIXUP_1484.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1387;
        _RESERVED_IDENTIFIER_FIXUP_1387.x = _RESERVED_IDENTIFIER_FIXUP_1010.x;
        _RESERVED_IDENTIFIER_FIXUP_1387.y = _RESERVED_IDENTIFIER_FIXUP_1010.y;
        _RESERVED_IDENTIFIER_FIXUP_1387.w = _RESERVED_IDENTIFIER_FIXUP_963;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1387.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_963;
        float _RESERVED_IDENTIFIER_FIXUP_1032 = _RESERVED_IDENTIFIER_FIXUP_1003 + hdLod5(param_22, param_23).x;
        _RESERVED_IDENTIFIER_FIXUP_1484.w = _RESERVED_IDENTIFIER_FIXUP_1032;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1039 = _RESERVED_IDENTIFIER_FIXUP_1484.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1400;
        _RESERVED_IDENTIFIER_FIXUP_1400.x = _RESERVED_IDENTIFIER_FIXUP_1039.x;
        _RESERVED_IDENTIFIER_FIXUP_1400.y = _RESERVED_IDENTIFIER_FIXUP_1039.y;
        _RESERVED_IDENTIFIER_FIXUP_1400.w = _RESERVED_IDENTIFIER_FIXUP_963;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1400.xy;
        float param_25 = _RESERVED_IDENTIFIER_FIXUP_963;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1056 = hdLod5(param_24, param_25);
        float _RESERVED_IDENTIFIER_FIXUP_1061 = _RESERVED_IDENTIFIER_FIXUP_1032 + _RESERVED_IDENTIFIER_FIXUP_1056.x;
        _RESERVED_IDENTIFIER_FIXUP_1484.y = _RESERVED_IDENTIFIER_FIXUP_1061;
        float _RESERVED_IDENTIFIER_FIXUP_1066 = (_RESERVED_IDENTIFIER_FIXUP_1061 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1484.y = _RESERVED_IDENTIFIER_FIXUP_1066;
        float _RESERVED_IDENTIFIER_FIXUP_1073 = (_RESERVED_IDENTIFIER_FIXUP_914 * _RESERVED_IDENTIFIER_FIXUP_1066) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1484.x = _RESERVED_IDENTIFIER_FIXUP_1073;
        _RESERVED_IDENTIFIER_FIXUP_1056.x = min(_RESERVED_IDENTIFIER_FIXUP_1073, _RESERVED_IDENTIFIER_FIXUP_896.w);
        _RESERVED_IDENTIFIER_FIXUP_1480 = _RESERVED_IDENTIFIER_FIXUP_1484;
        _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_1056;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_892.x = _RESERVED_IDENTIFIER_FIXUP_896.w;
        _RESERVED_IDENTIFIER_FIXUP_1480 = _RESERVED_IDENTIFIER_FIXUP_1343;
        _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_892;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1089 = (_RESERVED_IDENTIFIER_FIXUP_1479.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1425 = _RESERVED_IDENTIFIER_FIXUP_1480;
    _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_1089;
    _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_1089;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1102 = _RESERVED_IDENTIFIER_FIXUP_901.xyz * _RESERVED_IDENTIFIER_FIXUP_1425.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1431 = _RESERVED_IDENTIFIER_FIXUP_1425;
    _RESERVED_IDENTIFIER_FIXUP_1431.x = _RESERVED_IDENTIFIER_FIXUP_1102.x;
    _RESERVED_IDENTIFIER_FIXUP_1431.y = _RESERVED_IDENTIFIER_FIXUP_1102.y;
    _RESERVED_IDENTIFIER_FIXUP_1431.z = _RESERVED_IDENTIFIER_FIXUP_1102.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1113 = _RESERVED_IDENTIFIER_FIXUP_1431.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437 = _RESERVED_IDENTIFIER_FIXUP_1431;
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_1113.x;
    _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_1113.y;
    _RESERVED_IDENTIFIER_FIXUP_1437.z = _RESERVED_IDENTIFIER_FIXUP_1113.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1124 = _RESERVED_IDENTIFIER_FIXUP_1437.xyz + _RESERVED_IDENTIFIER_FIXUP_1437.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1443 = _RESERVED_IDENTIFIER_FIXUP_1437;
    _RESERVED_IDENTIFIER_FIXUP_1443.x = _RESERVED_IDENTIFIER_FIXUP_1124.x;
    _RESERVED_IDENTIFIER_FIXUP_1443.y = _RESERVED_IDENTIFIER_FIXUP_1124.y;
    _RESERVED_IDENTIFIER_FIXUP_1443.z = _RESERVED_IDENTIFIER_FIXUP_1124.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1135 = _RESERVED_IDENTIFIER_FIXUP_901.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_1479;
    _RESERVED_IDENTIFIER_FIXUP_1449.y = _RESERVED_IDENTIFIER_FIXUP_1135.x;
    _RESERVED_IDENTIFIER_FIXUP_1449.z = _RESERVED_IDENTIFIER_FIXUP_1135.y;
    _RESERVED_IDENTIFIER_FIXUP_1449.w = _RESERVED_IDENTIFIER_FIXUP_1135.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1149 = (_RESERVED_IDENTIFIER_FIXUP_1449.yzw * _RESERVED_IDENTIFIER_FIXUP_1449.xxx) + _RESERVED_IDENTIFIER_FIXUP_1443.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1455 = _RESERVED_IDENTIFIER_FIXUP_1443;
    _RESERVED_IDENTIFIER_FIXUP_1455.x = _RESERVED_IDENTIFIER_FIXUP_1149.x;
    _RESERVED_IDENTIFIER_FIXUP_1455.y = _RESERVED_IDENTIFIER_FIXUP_1149.y;
    _RESERVED_IDENTIFIER_FIXUP_1455.z = _RESERVED_IDENTIFIER_FIXUP_1149.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1162 = _RESERVED_IDENTIFIER_FIXUP_1455.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1461 = _RESERVED_IDENTIFIER_FIXUP_1455;
    _RESERVED_IDENTIFIER_FIXUP_1461.x = _RESERVED_IDENTIFIER_FIXUP_1162.x;
    _RESERVED_IDENTIFIER_FIXUP_1461.y = _RESERVED_IDENTIFIER_FIXUP_1162.y;
    _RESERVED_IDENTIFIER_FIXUP_1461.z = _RESERVED_IDENTIFIER_FIXUP_1162.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1461.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_432 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_441;
    if (_RESERVED_IDENTIFIER_FIXUP_432)
    {
        _RESERVED_IDENTIFIER_FIXUP_441 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_441 = _RESERVED_IDENTIFIER_FIXUP_432;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_441)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_478 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1327.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_505 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1201;
    if (_RESERVED_IDENTIFIER_FIXUP_478 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1201 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_478), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_505);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1201 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_505);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1201;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1089);
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
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r1.xy;
        float param_4 = r1.w;
        r1 = hdLod5(param_3, param_4);
        vec2 hdB118 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB118.x;
        r0.z = hdB118.y;
        vec2 hdB140 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB140.x;
        r4.y = hdB140.y;
        vec2 hdB148 = vec2(1.0, 0.0) * v4.zx;
        r4.z = hdB148.x;
        r4.w = hdB148.y;
        vec2 param_5 = r4.xy;
        float param_6 = r4.w;
        r4 = hdLod5(param_5, param_6);
        r0.w = r1.x + r4.x;
        vec2 hdB171 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB171.x;
        r1.y = hdB171.y;
        vec2 hdB178 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB178.x;
        r1.w = hdB178.y;
        vec2 param_7 = r1.xy;
        float param_8 = r1.w;
        r1 = hdLod5(param_7, param_8);
        r0.w += r1.x;
        vec2 hdB201 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB201.x;
        r1.y = hdB201.y;
        vec2 hdB208 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB208.x;
        r1.w = hdB208.y;
        vec2 param_9 = r1.xy;
        float param_10 = r1.w;
        r1 = hdLod5(param_9, param_10);
        r0.w += r1.x;
        vec2 hdB231 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB231.x;
        r1.y = hdB231.y;
        vec2 hdB238 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB238.x;
        r1.w = hdB238.y;
        vec2 param_11 = r1.xy;
        float param_12 = r1.w;
        r1 = hdLod5(param_11, param_12);
        r0.y = r0.w + r1.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r1.x = min(r0.x, r2.w);
    }
    else
    {
        r1.x = r2.w;
    }
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB289 = r0;
    vec3 hdB291 = r3.xyz * hdB289.xxx;
    r0.x = hdB291.x;
    r0.y = hdB291.y;
    r0.z = hdB291.z;
    vec4 hdB298 = r0;
    vec3 hdB302 = hdB298.xyz * v0.xyz;
    r0.x = hdB302.x;
    r0.y = hdB302.y;
    r0.z = hdB302.z;
    vec4 hdB309 = r0;
    vec4 hdB311 = r0;
    vec3 hdB313 = hdB309.xyz + hdB311.xyz;
    r0.x = hdB313.x;
    r0.y = hdB313.y;
    r0.z = hdB313.z;
    vec3 hdB324 = r3.www * v1.xyz;
    r1.y = hdB324.x;
    r1.z = hdB324.y;
    r1.w = hdB324.z;
    vec4 hdB336 = r0;
    vec3 hdB338 = (r1.yzw * r1.xxx) + hdB336.xyz;
    r0.x = hdB338.x;
    r0.y = hdB338.y;
    r0.z = hdB338.z;
    vec4 hdB345 = r0;
    vec3 hdB352 = hdB345.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB352.x;
    r0.y = hdB352.y;
    r0.z = hdB352.z;
    vec3 hdB367 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB367.x;
    oC0.y = hdB367.y;
    oC0.z = hdB367.z;
    oC0.w = 1.0;
    bool hdB380 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB388;
    if (hdB380)
    {
        hdB388 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB388 = hdB380;
    }
    if (hdB388)
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
    bool _1430 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1440;
    if (_1430)
    {
        _1440 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1440 = _1430;
    }
    if (_1440)
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
        bool _1465 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1480;
        if (!_1465)
        {
            _1480 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1480 = _1465;
        }
        if (_1480)
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
