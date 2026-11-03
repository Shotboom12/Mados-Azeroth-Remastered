#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1537;
vec4 _RESERVED_IDENTIFIER_FIXUP_1538;


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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _86 = hdOverride >= 0;
    bool _96;
    if (_86)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _114 = hdOverride >= 0;
    bool _124;
    if (_114)
    {
        _124 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_592 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_596 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_600 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_604 = hdTex3(param_2);
    vec4 _RESERVED_IDENTIFIER_FIXUP_614 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_592, _RESERVED_IDENTIFIER_FIXUP_596, _RESERVED_IDENTIFIER_FIXUP_604.xxxx), _RESERVED_IDENTIFIER_FIXUP_600, _RESERVED_IDENTIFIER_FIXUP_604.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_621 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_596;
    _RESERVED_IDENTIFIER_FIXUP_1262.x = _RESERVED_IDENTIFIER_FIXUP_621;
    float _RESERVED_IDENTIFIER_FIXUP_627 = clamp((_RESERVED_IDENTIFIER_FIXUP_621 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1262.x = _RESERVED_IDENTIFIER_FIXUP_627;
    float _RESERVED_IDENTIFIER_FIXUP_633 = ((-_RESERVED_IDENTIFIER_FIXUP_627) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1262.y = _RESERVED_IDENTIFIER_FIXUP_633;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1540;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1539;
    if (_RESERVED_IDENTIFIER_FIXUP_633 != (-_RESERVED_IDENTIFIER_FIXUP_633))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_645 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_1262;
        _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_645.x;
        _RESERVED_IDENTIFIER_FIXUP_1275.z = _RESERVED_IDENTIFIER_FIXUP_645.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_655 = _RESERVED_IDENTIFIER_FIXUP_1275.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1279;
        _RESERVED_IDENTIFIER_FIXUP_1279.x = _RESERVED_IDENTIFIER_FIXUP_655.x;
        _RESERVED_IDENTIFIER_FIXUP_1279.y = _RESERVED_IDENTIFIER_FIXUP_655.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_665 = _RESERVED_IDENTIFIER_FIXUP_1275.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1283;
        _RESERVED_IDENTIFIER_FIXUP_1283.x = _RESERVED_IDENTIFIER_FIXUP_665.x;
        _RESERVED_IDENTIFIER_FIXUP_1283.y = _RESERVED_IDENTIFIER_FIXUP_665.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_675 = _RESERVED_IDENTIFIER_FIXUP_1275.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1287;
        _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_675.x;
        _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_675.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_685 = _RESERVED_IDENTIFIER_FIXUP_1275.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1291;
        _RESERVED_IDENTIFIER_FIXUP_1291.x = _RESERVED_IDENTIFIER_FIXUP_685.x;
        _RESERVED_IDENTIFIER_FIXUP_1291.y = _RESERVED_IDENTIFIER_FIXUP_685.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_693 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_693.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_693.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_699 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_1279.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1283.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1287.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1291.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1279.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_699.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1283.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_699.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1287.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_699.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_756 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_699 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1291.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_762 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_762;
        float _RESERVED_IDENTIFIER_FIXUP_767 = float(_RESERVED_IDENTIFIER_FIXUP_762 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_767;
        float _RESERVED_IDENTIFIER_FIXUP_770 = dot(_RESERVED_IDENTIFIER_FIXUP_756, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1275.z = _RESERVED_IDENTIFIER_FIXUP_770;
        float _RESERVED_IDENTIFIER_FIXUP_776 = _RESERVED_IDENTIFIER_FIXUP_767 + _RESERVED_IDENTIFIER_FIXUP_770;
        _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_776;
        float _RESERVED_IDENTIFIER_FIXUP_781 = (_RESERVED_IDENTIFIER_FIXUP_776 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_781;
        float _RESERVED_IDENTIFIER_FIXUP_788 = (_RESERVED_IDENTIFIER_FIXUP_627 * _RESERVED_IDENTIFIER_FIXUP_781) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1275.x = _RESERVED_IDENTIFIER_FIXUP_788;
        _RESERVED_IDENTIFIER_FIXUP_756.x = min(_RESERVED_IDENTIFIER_FIXUP_788, _RESERVED_IDENTIFIER_FIXUP_604.w);
        _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_1275;
        _RESERVED_IDENTIFIER_FIXUP_1539 = _RESERVED_IDENTIFIER_FIXUP_756;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_600.x = _RESERVED_IDENTIFIER_FIXUP_604.w;
        _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_1262;
        _RESERVED_IDENTIFIER_FIXUP_1539 = _RESERVED_IDENTIFIER_FIXUP_600;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1352 = _RESERVED_IDENTIFIER_FIXUP_1540;
    _RESERVED_IDENTIFIER_FIXUP_1352.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_817 = _RESERVED_IDENTIFIER_FIXUP_614.xyz * _RESERVED_IDENTIFIER_FIXUP_1352.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_614;
    _RESERVED_IDENTIFIER_FIXUP_1354.x = _RESERVED_IDENTIFIER_FIXUP_817.x;
    _RESERVED_IDENTIFIER_FIXUP_1354.y = _RESERVED_IDENTIFIER_FIXUP_817.y;
    _RESERVED_IDENTIFIER_FIXUP_1354.z = _RESERVED_IDENTIFIER_FIXUP_817.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_828 = _RESERVED_IDENTIFIER_FIXUP_1354.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1537).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1360 = _RESERVED_IDENTIFIER_FIXUP_1354;
    _RESERVED_IDENTIFIER_FIXUP_1360.x = _RESERVED_IDENTIFIER_FIXUP_828.x;
    _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_828.y;
    _RESERVED_IDENTIFIER_FIXUP_1360.z = _RESERVED_IDENTIFIER_FIXUP_828.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_839 = _RESERVED_IDENTIFIER_FIXUP_1360.xyz + _RESERVED_IDENTIFIER_FIXUP_1360.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1366 = _RESERVED_IDENTIFIER_FIXUP_1360;
    _RESERVED_IDENTIFIER_FIXUP_1366.x = _RESERVED_IDENTIFIER_FIXUP_839.x;
    _RESERVED_IDENTIFIER_FIXUP_1366.y = _RESERVED_IDENTIFIER_FIXUP_839.y;
    _RESERVED_IDENTIFIER_FIXUP_1366.z = _RESERVED_IDENTIFIER_FIXUP_839.z;
    _RESERVED_IDENTIFIER_FIXUP_1352.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1352.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1352.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_864 = (_RESERVED_IDENTIFIER_FIXUP_1352.xyz * _RESERVED_IDENTIFIER_FIXUP_1539.xxx) + _RESERVED_IDENTIFIER_FIXUP_1366.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378 = _RESERVED_IDENTIFIER_FIXUP_1366;
    _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_864.x;
    _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_864.y;
    _RESERVED_IDENTIFIER_FIXUP_1378.z = _RESERVED_IDENTIFIER_FIXUP_864.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_877 = _RESERVED_IDENTIFIER_FIXUP_1378.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_1378;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = _RESERVED_IDENTIFIER_FIXUP_877.x;
    _RESERVED_IDENTIFIER_FIXUP_1384.y = _RESERVED_IDENTIFIER_FIXUP_877.y;
    _RESERVED_IDENTIFIER_FIXUP_1384.z = _RESERVED_IDENTIFIER_FIXUP_877.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_930 = OptTex0( texcoord0.xyz);
    vec2 param_13 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_934 = hdTex1(param_13);
    vec2 param_14 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_938 = hdTex2(param_14);
    vec2 param_15 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_942 = hdTex3(param_15);
    vec4 _RESERVED_IDENTIFIER_FIXUP_952 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_930, _RESERVED_IDENTIFIER_FIXUP_934, _RESERVED_IDENTIFIER_FIXUP_942.xxxx), _RESERVED_IDENTIFIER_FIXUP_938, _RESERVED_IDENTIFIER_FIXUP_942.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1400 = _RESERVED_IDENTIFIER_FIXUP_934;
    _RESERVED_IDENTIFIER_FIXUP_1400.x = _RESERVED_IDENTIFIER_FIXUP_621;
    float _RESERVED_IDENTIFIER_FIXUP_965 = clamp((_RESERVED_IDENTIFIER_FIXUP_621 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1400.x = _RESERVED_IDENTIFIER_FIXUP_965;
    float _RESERVED_IDENTIFIER_FIXUP_971 = ((-_RESERVED_IDENTIFIER_FIXUP_965) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1400.y = _RESERVED_IDENTIFIER_FIXUP_971;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1544;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1543;
    if (_RESERVED_IDENTIFIER_FIXUP_971 != (-_RESERVED_IDENTIFIER_FIXUP_971))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_983 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_1400;
        _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_983.x;
        _RESERVED_IDENTIFIER_FIXUP_1413.z = _RESERVED_IDENTIFIER_FIXUP_983.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_993 = _RESERVED_IDENTIFIER_FIXUP_1413.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1417;
        _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_993.x;
        _RESERVED_IDENTIFIER_FIXUP_1417.y = _RESERVED_IDENTIFIER_FIXUP_993.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1003 = _RESERVED_IDENTIFIER_FIXUP_1413.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1421;
        _RESERVED_IDENTIFIER_FIXUP_1421.x = _RESERVED_IDENTIFIER_FIXUP_1003.x;
        _RESERVED_IDENTIFIER_FIXUP_1421.y = _RESERVED_IDENTIFIER_FIXUP_1003.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1013 = _RESERVED_IDENTIFIER_FIXUP_1413.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1425;
        _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_1013.x;
        _RESERVED_IDENTIFIER_FIXUP_1425.y = _RESERVED_IDENTIFIER_FIXUP_1013.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1023 = _RESERVED_IDENTIFIER_FIXUP_1413.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1429;
        _RESERVED_IDENTIFIER_FIXUP_1429.x = _RESERVED_IDENTIFIER_FIXUP_1023.x;
        _RESERVED_IDENTIFIER_FIXUP_1429.y = _RESERVED_IDENTIFIER_FIXUP_1023.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1031 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1031.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1031.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1037 = hdLod5(param_16, param_17);
        _RESERVED_IDENTIFIER_FIXUP_1417.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1421.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1425.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1429.w = 0.0;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1417.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1037.y = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1421.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1037.z = hdLod5(param_20, param_21).x;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1425.xy;
        float param_23 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1037.w = hdLod5(param_22, param_23).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1094 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1037 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1429.xy;
        float param_25 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1100 = hdLod5(param_24, param_25).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_1100;
        float _RESERVED_IDENTIFIER_FIXUP_1105 = float(_RESERVED_IDENTIFIER_FIXUP_1100 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_1105;
        float _RESERVED_IDENTIFIER_FIXUP_1108 = dot(_RESERVED_IDENTIFIER_FIXUP_1094, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1413.z = _RESERVED_IDENTIFIER_FIXUP_1108;
        float _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_1105 + _RESERVED_IDENTIFIER_FIXUP_1108;
        _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_1114;
        float _RESERVED_IDENTIFIER_FIXUP_1119 = (_RESERVED_IDENTIFIER_FIXUP_1114 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_1119;
        float _RESERVED_IDENTIFIER_FIXUP_1126 = (_RESERVED_IDENTIFIER_FIXUP_965 * _RESERVED_IDENTIFIER_FIXUP_1119) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1413.x = _RESERVED_IDENTIFIER_FIXUP_1126;
        _RESERVED_IDENTIFIER_FIXUP_1094.x = min(_RESERVED_IDENTIFIER_FIXUP_1126, _RESERVED_IDENTIFIER_FIXUP_942.w);
        _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_1413;
        _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_1094;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_938.x = _RESERVED_IDENTIFIER_FIXUP_942.w;
        _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_1400;
        _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_938;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1142 = (_RESERVED_IDENTIFIER_FIXUP_1543.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1488 = _RESERVED_IDENTIFIER_FIXUP_1544;
    _RESERVED_IDENTIFIER_FIXUP_1488.x = _RESERVED_IDENTIFIER_FIXUP_1142;
    _RESERVED_IDENTIFIER_FIXUP_1488.x = _RESERVED_IDENTIFIER_FIXUP_1142;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1155 = _RESERVED_IDENTIFIER_FIXUP_952.xyz * _RESERVED_IDENTIFIER_FIXUP_1488.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1494 = _RESERVED_IDENTIFIER_FIXUP_952;
    _RESERVED_IDENTIFIER_FIXUP_1494.x = _RESERVED_IDENTIFIER_FIXUP_1155.x;
    _RESERVED_IDENTIFIER_FIXUP_1494.y = _RESERVED_IDENTIFIER_FIXUP_1155.y;
    _RESERVED_IDENTIFIER_FIXUP_1494.z = _RESERVED_IDENTIFIER_FIXUP_1155.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1166 = _RESERVED_IDENTIFIER_FIXUP_1494.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_1494;
    _RESERVED_IDENTIFIER_FIXUP_1500.x = _RESERVED_IDENTIFIER_FIXUP_1166.x;
    _RESERVED_IDENTIFIER_FIXUP_1500.y = _RESERVED_IDENTIFIER_FIXUP_1166.y;
    _RESERVED_IDENTIFIER_FIXUP_1500.z = _RESERVED_IDENTIFIER_FIXUP_1166.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1500.xyz + _RESERVED_IDENTIFIER_FIXUP_1500.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_1500;
    _RESERVED_IDENTIFIER_FIXUP_1506.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
    _RESERVED_IDENTIFIER_FIXUP_1506.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
    _RESERVED_IDENTIFIER_FIXUP_1506.z = _RESERVED_IDENTIFIER_FIXUP_1177.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_1506.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1488.x = _RESERVED_IDENTIFIER_FIXUP_1188.x;
    _RESERVED_IDENTIFIER_FIXUP_1488.y = _RESERVED_IDENTIFIER_FIXUP_1188.y;
    _RESERVED_IDENTIFIER_FIXUP_1488.z = _RESERVED_IDENTIFIER_FIXUP_1188.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = (_RESERVED_IDENTIFIER_FIXUP_1488.xyz * _RESERVED_IDENTIFIER_FIXUP_1543.xxx) + _RESERVED_IDENTIFIER_FIXUP_1506.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1518 = _RESERVED_IDENTIFIER_FIXUP_1506;
    _RESERVED_IDENTIFIER_FIXUP_1518.x = _RESERVED_IDENTIFIER_FIXUP_1202.x;
    _RESERVED_IDENTIFIER_FIXUP_1518.y = _RESERVED_IDENTIFIER_FIXUP_1202.y;
    _RESERVED_IDENTIFIER_FIXUP_1518.z = _RESERVED_IDENTIFIER_FIXUP_1202.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1215 = _RESERVED_IDENTIFIER_FIXUP_1518.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_1518;
    _RESERVED_IDENTIFIER_FIXUP_1524.x = _RESERVED_IDENTIFIER_FIXUP_1215.x;
    _RESERVED_IDENTIFIER_FIXUP_1524.y = _RESERVED_IDENTIFIER_FIXUP_1215.y;
    _RESERVED_IDENTIFIER_FIXUP_1524.z = _RESERVED_IDENTIFIER_FIXUP_1215.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1524.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_454 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_463;
    if (_RESERVED_IDENTIFIER_FIXUP_454)
    {
        _RESERVED_IDENTIFIER_FIXUP_463 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_463 = _RESERVED_IDENTIFIER_FIXUP_454;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_463)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_500 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1384.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_527 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1252;
    if (_RESERVED_IDENTIFIER_FIXUP_500 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1252 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_500), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_527);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1252 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_527);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1252;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1142);
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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB124 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB124.x;
        r1.z = hdB124.y;
        vec2 hdB146 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB146.x;
        r2.y = hdB146.y;
        vec2 hdB157 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB157.x;
        r4.y = hdB157.y;
        vec2 hdB168 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB168.x;
        r5.y = hdB168.y;
        vec2 hdB179 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB179.x;
        r6.y = hdB179.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r7.xy;
        float param_4 = r7.w;
        r7 = hdLod5(param_3, param_4);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
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
        r7.y = r2.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r2 = r7 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r6.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r3.w);
    }
    else
    {
        r2.x = r3.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB309 = r0;
    vec3 hdB313 = hdB309.xyz * r1.xxx;
    r0.x = hdB313.x;
    r0.y = hdB313.y;
    r0.z = hdB313.z;
    vec4 hdB320 = r0;
    vec3 hdB324 = hdB320.xyz * v0.xyz;
    r0.x = hdB324.x;
    r0.y = hdB324.y;
    r0.z = hdB324.z;
    vec4 hdB331 = r0;
    vec4 hdB333 = r0;
    vec3 hdB335 = hdB331.xyz + hdB333.xyz;
    r0.x = hdB335.x;
    r0.y = hdB335.y;
    r0.z = hdB335.z;
    vec3 hdB346 = r0.www * v1.xyz;
    r1.x = hdB346.x;
    r1.y = hdB346.y;
    r1.z = hdB346.z;
    vec4 hdB358 = r0;
    vec3 hdB360 = (r1.xyz * r2.xxx) + hdB358.xyz;
    r0.x = hdB360.x;
    r0.y = hdB360.y;
    r0.z = hdB360.z;
    vec4 hdB367 = r0;
    vec3 hdB374 = hdB367.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB374.x;
    r0.y = hdB374.y;
    r0.z = hdB374.z;
    vec3 hdB389 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB389.x;
    oC0.y = hdB389.y;
    oC0.z = hdB389.z;
    oC0.w = 1.0;
    bool hdB402 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB410;
    if (hdB402)
    {
        hdB410 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB410 = hdB402;
    }
    if (hdB410)
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
    bool _1426 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1436;
    if (_1426)
    {
        _1436 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1436 = _1426;
    }
    if (_1436)
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
        bool _1461 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1476;
        if (!_1461)
        {
            _1476 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1476 = _1461;
        }
        if (_1476)
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
