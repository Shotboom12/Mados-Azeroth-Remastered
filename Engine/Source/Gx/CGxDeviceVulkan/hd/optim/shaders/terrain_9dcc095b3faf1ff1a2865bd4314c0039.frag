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
float _RESERVED_IDENTIFIER_FIXUP_1501;
vec4 _RESERVED_IDENTIFIER_FIXUP_1502;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_574 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_578 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_582 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_594 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_574;
    _RESERVED_IDENTIFIER_FIXUP_1226.x = _RESERVED_IDENTIFIER_FIXUP_594;
    float _RESERVED_IDENTIFIER_FIXUP_600 = clamp((_RESERVED_IDENTIFIER_FIXUP_594 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1226.x = _RESERVED_IDENTIFIER_FIXUP_600;
    float _RESERVED_IDENTIFIER_FIXUP_606 = ((-_RESERVED_IDENTIFIER_FIXUP_600) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1226.y = _RESERVED_IDENTIFIER_FIXUP_606;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1504;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1503;
    if (_RESERVED_IDENTIFIER_FIXUP_606 != (-_RESERVED_IDENTIFIER_FIXUP_606))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_618 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1226;
        _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_618.x;
        _RESERVED_IDENTIFIER_FIXUP_1239.z = _RESERVED_IDENTIFIER_FIXUP_618.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_628 = _RESERVED_IDENTIFIER_FIXUP_1239.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1243;
        _RESERVED_IDENTIFIER_FIXUP_1243.x = _RESERVED_IDENTIFIER_FIXUP_628.x;
        _RESERVED_IDENTIFIER_FIXUP_1243.y = _RESERVED_IDENTIFIER_FIXUP_628.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_638 = _RESERVED_IDENTIFIER_FIXUP_1239.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1247;
        _RESERVED_IDENTIFIER_FIXUP_1247.x = _RESERVED_IDENTIFIER_FIXUP_638.x;
        _RESERVED_IDENTIFIER_FIXUP_1247.y = _RESERVED_IDENTIFIER_FIXUP_638.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_648 = _RESERVED_IDENTIFIER_FIXUP_1239.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1251;
        _RESERVED_IDENTIFIER_FIXUP_1251.x = _RESERVED_IDENTIFIER_FIXUP_648.x;
        _RESERVED_IDENTIFIER_FIXUP_1251.y = _RESERVED_IDENTIFIER_FIXUP_648.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_658 = _RESERVED_IDENTIFIER_FIXUP_1239.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1255;
        _RESERVED_IDENTIFIER_FIXUP_1255.x = _RESERVED_IDENTIFIER_FIXUP_658.x;
        _RESERVED_IDENTIFIER_FIXUP_1255.y = _RESERVED_IDENTIFIER_FIXUP_658.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_666 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_666.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_666.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_672 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_1243.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1247.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1251.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1255.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1243.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_672.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1247.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_672.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1251.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_672.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_729 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_672 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1255.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_735 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_735;
        float _RESERVED_IDENTIFIER_FIXUP_740 = float(_RESERVED_IDENTIFIER_FIXUP_735 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_740;
        float _RESERVED_IDENTIFIER_FIXUP_743 = dot(_RESERVED_IDENTIFIER_FIXUP_729, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1239.z = _RESERVED_IDENTIFIER_FIXUP_743;
        float _RESERVED_IDENTIFIER_FIXUP_749 = _RESERVED_IDENTIFIER_FIXUP_740 + _RESERVED_IDENTIFIER_FIXUP_743;
        _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_749;
        float _RESERVED_IDENTIFIER_FIXUP_754 = (_RESERVED_IDENTIFIER_FIXUP_749 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_754;
        float _RESERVED_IDENTIFIER_FIXUP_761 = (_RESERVED_IDENTIFIER_FIXUP_600 * _RESERVED_IDENTIFIER_FIXUP_754) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1239.x = _RESERVED_IDENTIFIER_FIXUP_761;
        _RESERVED_IDENTIFIER_FIXUP_729.x = min(_RESERVED_IDENTIFIER_FIXUP_761, _RESERVED_IDENTIFIER_FIXUP_582.w);
        _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_1239;
        _RESERVED_IDENTIFIER_FIXUP_1503 = _RESERVED_IDENTIFIER_FIXUP_729;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1237 = _RESERVED_IDENTIFIER_FIXUP_578;
        _RESERVED_IDENTIFIER_FIXUP_1237.x = _RESERVED_IDENTIFIER_FIXUP_582.w;
        _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_1226;
        _RESERVED_IDENTIFIER_FIXUP_1503 = _RESERVED_IDENTIFIER_FIXUP_1237;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_1504;
    _RESERVED_IDENTIFIER_FIXUP_1316.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_790 = mix(_RESERVED_IDENTIFIER_FIXUP_574, _RESERVED_IDENTIFIER_FIXUP_578, _RESERVED_IDENTIFIER_FIXUP_582.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_1316.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1318 = _RESERVED_IDENTIFIER_FIXUP_1316;
    _RESERVED_IDENTIFIER_FIXUP_1318.x = _RESERVED_IDENTIFIER_FIXUP_790.x;
    _RESERVED_IDENTIFIER_FIXUP_1318.y = _RESERVED_IDENTIFIER_FIXUP_790.y;
    _RESERVED_IDENTIFIER_FIXUP_1318.z = _RESERVED_IDENTIFIER_FIXUP_790.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_801 = _RESERVED_IDENTIFIER_FIXUP_1318.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1501).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1324 = _RESERVED_IDENTIFIER_FIXUP_1318;
    _RESERVED_IDENTIFIER_FIXUP_1324.x = _RESERVED_IDENTIFIER_FIXUP_801.x;
    _RESERVED_IDENTIFIER_FIXUP_1324.y = _RESERVED_IDENTIFIER_FIXUP_801.y;
    _RESERVED_IDENTIFIER_FIXUP_1324.z = _RESERVED_IDENTIFIER_FIXUP_801.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_812 = _RESERVED_IDENTIFIER_FIXUP_1324.xyz + _RESERVED_IDENTIFIER_FIXUP_1324.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_1324;
    _RESERVED_IDENTIFIER_FIXUP_1330.x = _RESERVED_IDENTIFIER_FIXUP_812.x;
    _RESERVED_IDENTIFIER_FIXUP_1330.y = _RESERVED_IDENTIFIER_FIXUP_812.y;
    _RESERVED_IDENTIFIER_FIXUP_1330.z = _RESERVED_IDENTIFIER_FIXUP_812.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1336 = _RESERVED_IDENTIFIER_FIXUP_1503;
    _RESERVED_IDENTIFIER_FIXUP_1336.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1336.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1336.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_837 = (_RESERVED_IDENTIFIER_FIXUP_1336.yzw * _RESERVED_IDENTIFIER_FIXUP_1336.xxx) + _RESERVED_IDENTIFIER_FIXUP_1330.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_1330;
    _RESERVED_IDENTIFIER_FIXUP_1342.x = _RESERVED_IDENTIFIER_FIXUP_837.x;
    _RESERVED_IDENTIFIER_FIXUP_1342.y = _RESERVED_IDENTIFIER_FIXUP_837.y;
    _RESERVED_IDENTIFIER_FIXUP_1342.z = _RESERVED_IDENTIFIER_FIXUP_837.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_850 = _RESERVED_IDENTIFIER_FIXUP_1342.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1348 = _RESERVED_IDENTIFIER_FIXUP_1342;
    _RESERVED_IDENTIFIER_FIXUP_1348.x = _RESERVED_IDENTIFIER_FIXUP_850.x;
    _RESERVED_IDENTIFIER_FIXUP_1348.y = _RESERVED_IDENTIFIER_FIXUP_850.y;
    _RESERVED_IDENTIFIER_FIXUP_1348.z = _RESERVED_IDENTIFIER_FIXUP_850.z;
    vec2 param_13 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_901 = hdTex0(param_13);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_905 = hdTex1(param_14);
    vec2 param_15 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_909 = hdTex2(param_15);
    vec4 _RESERVED_IDENTIFIER_FIXUP_914 = mix(_RESERVED_IDENTIFIER_FIXUP_901, _RESERVED_IDENTIFIER_FIXUP_905, _RESERVED_IDENTIFIER_FIXUP_909.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_901;
    _RESERVED_IDENTIFIER_FIXUP_1364.x = _RESERVED_IDENTIFIER_FIXUP_594;
    float _RESERVED_IDENTIFIER_FIXUP_927 = clamp((_RESERVED_IDENTIFIER_FIXUP_594 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1364.x = _RESERVED_IDENTIFIER_FIXUP_927;
    float _RESERVED_IDENTIFIER_FIXUP_933 = ((-_RESERVED_IDENTIFIER_FIXUP_927) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1364.y = _RESERVED_IDENTIFIER_FIXUP_933;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1507;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1506;
    if (_RESERVED_IDENTIFIER_FIXUP_933 != (-_RESERVED_IDENTIFIER_FIXUP_933))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_945 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1377 = _RESERVED_IDENTIFIER_FIXUP_1364;
        _RESERVED_IDENTIFIER_FIXUP_1377.y = _RESERVED_IDENTIFIER_FIXUP_945.x;
        _RESERVED_IDENTIFIER_FIXUP_1377.z = _RESERVED_IDENTIFIER_FIXUP_945.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_955 = _RESERVED_IDENTIFIER_FIXUP_1377.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1381;
        _RESERVED_IDENTIFIER_FIXUP_1381.x = _RESERVED_IDENTIFIER_FIXUP_955.x;
        _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_955.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_965 = _RESERVED_IDENTIFIER_FIXUP_1377.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1385;
        _RESERVED_IDENTIFIER_FIXUP_1385.x = _RESERVED_IDENTIFIER_FIXUP_965.x;
        _RESERVED_IDENTIFIER_FIXUP_1385.y = _RESERVED_IDENTIFIER_FIXUP_965.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_975 = _RESERVED_IDENTIFIER_FIXUP_1377.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1389;
        _RESERVED_IDENTIFIER_FIXUP_1389.x = _RESERVED_IDENTIFIER_FIXUP_975.x;
        _RESERVED_IDENTIFIER_FIXUP_1389.y = _RESERVED_IDENTIFIER_FIXUP_975.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_985 = _RESERVED_IDENTIFIER_FIXUP_1377.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1393;
        _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_985.x;
        _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_985.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_993 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_993.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_993.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_999 = hdLod5(param_16, param_17);
        _RESERVED_IDENTIFIER_FIXUP_1381.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1385.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1389.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1393.w = 0.0;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1381.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_999.y = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1385.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_999.z = hdLod5(param_20, param_21).x;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1389.xy;
        float param_23 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_999.w = hdLod5(param_22, param_23).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1056 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_999 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1393.xy;
        float param_25 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1062 = hdLod5(param_24, param_25).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1377.y = _RESERVED_IDENTIFIER_FIXUP_1062;
        float _RESERVED_IDENTIFIER_FIXUP_1067 = float(_RESERVED_IDENTIFIER_FIXUP_1062 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1377.y = _RESERVED_IDENTIFIER_FIXUP_1067;
        float _RESERVED_IDENTIFIER_FIXUP_1070 = dot(_RESERVED_IDENTIFIER_FIXUP_1056, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1377.z = _RESERVED_IDENTIFIER_FIXUP_1070;
        float _RESERVED_IDENTIFIER_FIXUP_1076 = _RESERVED_IDENTIFIER_FIXUP_1067 + _RESERVED_IDENTIFIER_FIXUP_1070;
        _RESERVED_IDENTIFIER_FIXUP_1377.y = _RESERVED_IDENTIFIER_FIXUP_1076;
        float _RESERVED_IDENTIFIER_FIXUP_1081 = (_RESERVED_IDENTIFIER_FIXUP_1076 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1377.y = _RESERVED_IDENTIFIER_FIXUP_1081;
        float _RESERVED_IDENTIFIER_FIXUP_1088 = (_RESERVED_IDENTIFIER_FIXUP_927 * _RESERVED_IDENTIFIER_FIXUP_1081) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1377.x = _RESERVED_IDENTIFIER_FIXUP_1088;
        _RESERVED_IDENTIFIER_FIXUP_1056.x = min(_RESERVED_IDENTIFIER_FIXUP_1088, _RESERVED_IDENTIFIER_FIXUP_909.w);
        _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_1377;
        _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_1056;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_905.x = _RESERVED_IDENTIFIER_FIXUP_909.w;
        _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_1364;
        _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_905;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1104 = (_RESERVED_IDENTIFIER_FIXUP_1506.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1452 = _RESERVED_IDENTIFIER_FIXUP_1507;
    _RESERVED_IDENTIFIER_FIXUP_1452.x = _RESERVED_IDENTIFIER_FIXUP_1104;
    _RESERVED_IDENTIFIER_FIXUP_1452.x = _RESERVED_IDENTIFIER_FIXUP_1104;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_914.xyz * _RESERVED_IDENTIFIER_FIXUP_1452.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_1452;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_1117.x;
    _RESERVED_IDENTIFIER_FIXUP_1458.y = _RESERVED_IDENTIFIER_FIXUP_1117.y;
    _RESERVED_IDENTIFIER_FIXUP_1458.z = _RESERVED_IDENTIFIER_FIXUP_1117.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1128 = _RESERVED_IDENTIFIER_FIXUP_1458.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1464 = _RESERVED_IDENTIFIER_FIXUP_1458;
    _RESERVED_IDENTIFIER_FIXUP_1464.x = _RESERVED_IDENTIFIER_FIXUP_1128.x;
    _RESERVED_IDENTIFIER_FIXUP_1464.y = _RESERVED_IDENTIFIER_FIXUP_1128.y;
    _RESERVED_IDENTIFIER_FIXUP_1464.z = _RESERVED_IDENTIFIER_FIXUP_1128.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1464.xyz + _RESERVED_IDENTIFIER_FIXUP_1464.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_1464;
    _RESERVED_IDENTIFIER_FIXUP_1470.x = _RESERVED_IDENTIFIER_FIXUP_1139.x;
    _RESERVED_IDENTIFIER_FIXUP_1470.y = _RESERVED_IDENTIFIER_FIXUP_1139.y;
    _RESERVED_IDENTIFIER_FIXUP_1470.z = _RESERVED_IDENTIFIER_FIXUP_1139.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1150 = _RESERVED_IDENTIFIER_FIXUP_914.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1476 = _RESERVED_IDENTIFIER_FIXUP_1506;
    _RESERVED_IDENTIFIER_FIXUP_1476.y = _RESERVED_IDENTIFIER_FIXUP_1150.x;
    _RESERVED_IDENTIFIER_FIXUP_1476.z = _RESERVED_IDENTIFIER_FIXUP_1150.y;
    _RESERVED_IDENTIFIER_FIXUP_1476.w = _RESERVED_IDENTIFIER_FIXUP_1150.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1164 = (_RESERVED_IDENTIFIER_FIXUP_1476.yzw * _RESERVED_IDENTIFIER_FIXUP_1476.xxx) + _RESERVED_IDENTIFIER_FIXUP_1470.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_1470;
    _RESERVED_IDENTIFIER_FIXUP_1482.x = _RESERVED_IDENTIFIER_FIXUP_1164.x;
    _RESERVED_IDENTIFIER_FIXUP_1482.y = _RESERVED_IDENTIFIER_FIXUP_1164.y;
    _RESERVED_IDENTIFIER_FIXUP_1482.z = _RESERVED_IDENTIFIER_FIXUP_1164.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1482.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1488 = _RESERVED_IDENTIFIER_FIXUP_1482;
    _RESERVED_IDENTIFIER_FIXUP_1488.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
    _RESERVED_IDENTIFIER_FIXUP_1488.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
    _RESERVED_IDENTIFIER_FIXUP_1488.z = _RESERVED_IDENTIFIER_FIXUP_1177.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1488.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_438 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_447;
    if (_RESERVED_IDENTIFIER_FIXUP_438)
    {
        _RESERVED_IDENTIFIER_FIXUP_447 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_447 = _RESERVED_IDENTIFIER_FIXUP_438;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_447)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_484 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1348.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_511 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1216;
    if (_RESERVED_IDENTIFIER_FIXUP_484 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1216 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_484), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_511);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1216 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_511);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1216;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1104);
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
        vec2 hdB107 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB107.x;
        r0.z = hdB107.y;
        vec2 hdB129 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB129.x;
        r1.y = hdB129.y;
        vec2 hdB140 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB140.x;
        r4.y = hdB140.y;
        vec2 hdB151 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB151.x;
        r5.y = hdB151.y;
        vec2 hdB162 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB162.x;
        r6.y = hdB162.y;
        r7 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r7.xy;
        float param_4 = r7.w;
        r7 = hdLod5(param_3, param_4);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_5 = r1.xy;
        float param_6 = r1.w;
        r1 = hdLod5(param_5, param_6);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_7 = r4.xy;
        float param_8 = r4.w;
        r4 = hdLod5(param_7, param_8);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_9 = r5.xy;
        float param_10 = r5.w;
        r5 = hdLod5(param_9, param_10);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_11 = r6.xy;
        float param_12 = r6.w;
        r6 = hdLod5(param_11, param_12);
        r7.y = r1.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r1 = r7 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r0.y = r6.x + (-v4.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r1, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r1.x = min(r0.x, r2.w);
    }
    else
    {
        r1.x = r2.w;
    }
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB295 = r0;
    vec3 hdB297 = r3.xyz * hdB295.xxx;
    r0.x = hdB297.x;
    r0.y = hdB297.y;
    r0.z = hdB297.z;
    vec4 hdB304 = r0;
    vec3 hdB308 = hdB304.xyz * v0.xyz;
    r0.x = hdB308.x;
    r0.y = hdB308.y;
    r0.z = hdB308.z;
    vec4 hdB315 = r0;
    vec4 hdB317 = r0;
    vec3 hdB319 = hdB315.xyz + hdB317.xyz;
    r0.x = hdB319.x;
    r0.y = hdB319.y;
    r0.z = hdB319.z;
    vec3 hdB330 = r3.www * v1.xyz;
    r1.y = hdB330.x;
    r1.z = hdB330.y;
    r1.w = hdB330.z;
    vec4 hdB342 = r0;
    vec3 hdB344 = (r1.yzw * r1.xxx) + hdB342.xyz;
    r0.x = hdB344.x;
    r0.y = hdB344.y;
    r0.z = hdB344.z;
    vec4 hdB351 = r0;
    vec3 hdB358 = hdB351.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB358.x;
    r0.y = hdB358.y;
    r0.z = hdB358.z;
    vec3 hdB373 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB373.x;
    oC0.y = hdB373.y;
    oC0.z = hdB373.z;
    oC0.w = 1.0;
    bool hdB386 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB394;
    if (hdB386)
    {
        hdB394 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB394 = hdB386;
    }
    if (hdB394)
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
    bool _1395 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1405;
    if (_1395)
    {
        _1405 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1405 = _1395;
    }
    if (_1405)
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
        bool _1430 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1445;
        if (!_1430)
        {
            _1445 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1445 = _1430;
        }
        if (_1445)
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
