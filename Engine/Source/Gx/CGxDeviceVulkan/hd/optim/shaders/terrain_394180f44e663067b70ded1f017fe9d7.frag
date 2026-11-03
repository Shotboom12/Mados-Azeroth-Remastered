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
float _RESERVED_IDENTIFIER_FIXUP_1541;
vec4 _RESERVED_IDENTIFIER_FIXUP_1542;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_596 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_600 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_604 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_608 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_612 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_622 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_596, _RESERVED_IDENTIFIER_FIXUP_600, _RESERVED_IDENTIFIER_FIXUP_612.xxxx), _RESERVED_IDENTIFIER_FIXUP_604, _RESERVED_IDENTIFIER_FIXUP_612.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_627 = mix(_RESERVED_IDENTIFIER_FIXUP_622, _RESERVED_IDENTIFIER_FIXUP_608, _RESERVED_IDENTIFIER_FIXUP_612.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_634 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278 = _RESERVED_IDENTIFIER_FIXUP_622;
    _RESERVED_IDENTIFIER_FIXUP_1278.x = _RESERVED_IDENTIFIER_FIXUP_634;
    float _RESERVED_IDENTIFIER_FIXUP_640 = clamp((_RESERVED_IDENTIFIER_FIXUP_634 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1278.x = _RESERVED_IDENTIFIER_FIXUP_640;
    float _RESERVED_IDENTIFIER_FIXUP_646 = ((-_RESERVED_IDENTIFIER_FIXUP_640) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1278.y = _RESERVED_IDENTIFIER_FIXUP_646;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1544;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1543;
    if (_RESERVED_IDENTIFIER_FIXUP_646 != (-_RESERVED_IDENTIFIER_FIXUP_646))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_658 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_668 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_670 = _RESERVED_IDENTIFIER_FIXUP_668.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1292 = _RESERVED_IDENTIFIER_FIXUP_1278;
        _RESERVED_IDENTIFIER_FIXUP_1292.y = _RESERVED_IDENTIFIER_FIXUP_670;
        _RESERVED_IDENTIFIER_FIXUP_1292.z = _RESERVED_IDENTIFIER_FIXUP_668.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_678 = _RESERVED_IDENTIFIER_FIXUP_1292.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1296;
        _RESERVED_IDENTIFIER_FIXUP_1296.x = _RESERVED_IDENTIFIER_FIXUP_678.x;
        _RESERVED_IDENTIFIER_FIXUP_1296.y = _RESERVED_IDENTIFIER_FIXUP_678.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_685 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_689 = _RESERVED_IDENTIFIER_FIXUP_685.y;
        _RESERVED_IDENTIFIER_FIXUP_1296.w = _RESERVED_IDENTIFIER_FIXUP_689;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_658.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_658.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1296.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_689;
        float _RESERVED_IDENTIFIER_FIXUP_700 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1551 = vec4(_RESERVED_IDENTIFIER_FIXUP_640, _RESERVED_IDENTIFIER_FIXUP_670, _RESERVED_IDENTIFIER_FIXUP_668.y, _RESERVED_IDENTIFIER_FIXUP_700);
        vec2 _RESERVED_IDENTIFIER_FIXUP_707 = _RESERVED_IDENTIFIER_FIXUP_1551.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1309;
        _RESERVED_IDENTIFIER_FIXUP_1309.x = _RESERVED_IDENTIFIER_FIXUP_707.x;
        _RESERVED_IDENTIFIER_FIXUP_1309.y = _RESERVED_IDENTIFIER_FIXUP_707.y;
        _RESERVED_IDENTIFIER_FIXUP_1309.w = _RESERVED_IDENTIFIER_FIXUP_689;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1309.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_689;
        float _RESERVED_IDENTIFIER_FIXUP_729 = _RESERVED_IDENTIFIER_FIXUP_700 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1551.w = _RESERVED_IDENTIFIER_FIXUP_729;
        vec2 _RESERVED_IDENTIFIER_FIXUP_736 = _RESERVED_IDENTIFIER_FIXUP_1551.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1322;
        _RESERVED_IDENTIFIER_FIXUP_1322.x = _RESERVED_IDENTIFIER_FIXUP_736.x;
        _RESERVED_IDENTIFIER_FIXUP_1322.y = _RESERVED_IDENTIFIER_FIXUP_736.y;
        _RESERVED_IDENTIFIER_FIXUP_1322.w = _RESERVED_IDENTIFIER_FIXUP_689;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1322.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_689;
        float _RESERVED_IDENTIFIER_FIXUP_758 = _RESERVED_IDENTIFIER_FIXUP_729 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1551.w = _RESERVED_IDENTIFIER_FIXUP_758;
        vec2 _RESERVED_IDENTIFIER_FIXUP_765 = _RESERVED_IDENTIFIER_FIXUP_1551.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1335;
        _RESERVED_IDENTIFIER_FIXUP_1335.x = _RESERVED_IDENTIFIER_FIXUP_765.x;
        _RESERVED_IDENTIFIER_FIXUP_1335.y = _RESERVED_IDENTIFIER_FIXUP_765.y;
        _RESERVED_IDENTIFIER_FIXUP_1335.w = _RESERVED_IDENTIFIER_FIXUP_689;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1335.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_689;
        vec4 _RESERVED_IDENTIFIER_FIXUP_782 = hdLod5(param_12, param_13);
        float _RESERVED_IDENTIFIER_FIXUP_787 = _RESERVED_IDENTIFIER_FIXUP_758 + _RESERVED_IDENTIFIER_FIXUP_782.x;
        _RESERVED_IDENTIFIER_FIXUP_1551.y = _RESERVED_IDENTIFIER_FIXUP_787;
        float _RESERVED_IDENTIFIER_FIXUP_792 = (_RESERVED_IDENTIFIER_FIXUP_787 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1551.y = _RESERVED_IDENTIFIER_FIXUP_792;
        float _RESERVED_IDENTIFIER_FIXUP_799 = (_RESERVED_IDENTIFIER_FIXUP_640 * _RESERVED_IDENTIFIER_FIXUP_792) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1551.x = _RESERVED_IDENTIFIER_FIXUP_799;
        _RESERVED_IDENTIFIER_FIXUP_782.x = min(_RESERVED_IDENTIFIER_FIXUP_799, _RESERVED_IDENTIFIER_FIXUP_612.w);
        _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_1551;
        _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_782;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_604.x = _RESERVED_IDENTIFIER_FIXUP_612.w;
        _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_1278;
        _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_604;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_1544;
    _RESERVED_IDENTIFIER_FIXUP_1362.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_828 = _RESERVED_IDENTIFIER_FIXUP_627.xyz * _RESERVED_IDENTIFIER_FIXUP_1362.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_1362;
    _RESERVED_IDENTIFIER_FIXUP_1364.x = _RESERVED_IDENTIFIER_FIXUP_828.x;
    _RESERVED_IDENTIFIER_FIXUP_1364.y = _RESERVED_IDENTIFIER_FIXUP_828.y;
    _RESERVED_IDENTIFIER_FIXUP_1364.z = _RESERVED_IDENTIFIER_FIXUP_828.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_839 = _RESERVED_IDENTIFIER_FIXUP_1364.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1541).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1370 = _RESERVED_IDENTIFIER_FIXUP_1364;
    _RESERVED_IDENTIFIER_FIXUP_1370.x = _RESERVED_IDENTIFIER_FIXUP_839.x;
    _RESERVED_IDENTIFIER_FIXUP_1370.y = _RESERVED_IDENTIFIER_FIXUP_839.y;
    _RESERVED_IDENTIFIER_FIXUP_1370.z = _RESERVED_IDENTIFIER_FIXUP_839.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_850 = _RESERVED_IDENTIFIER_FIXUP_1370.xyz + _RESERVED_IDENTIFIER_FIXUP_1370.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_1370;
    _RESERVED_IDENTIFIER_FIXUP_1376.x = _RESERVED_IDENTIFIER_FIXUP_850.x;
    _RESERVED_IDENTIFIER_FIXUP_1376.y = _RESERVED_IDENTIFIER_FIXUP_850.y;
    _RESERVED_IDENTIFIER_FIXUP_1376.z = _RESERVED_IDENTIFIER_FIXUP_850.z;
    _RESERVED_IDENTIFIER_FIXUP_627.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_627.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_627.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_875 = (_RESERVED_IDENTIFIER_FIXUP_627.xyz * _RESERVED_IDENTIFIER_FIXUP_1543.xxx) + _RESERVED_IDENTIFIER_FIXUP_1376.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1388 = _RESERVED_IDENTIFIER_FIXUP_1376;
    _RESERVED_IDENTIFIER_FIXUP_1388.x = _RESERVED_IDENTIFIER_FIXUP_875.x;
    _RESERVED_IDENTIFIER_FIXUP_1388.y = _RESERVED_IDENTIFIER_FIXUP_875.y;
    _RESERVED_IDENTIFIER_FIXUP_1388.z = _RESERVED_IDENTIFIER_FIXUP_875.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_888 = _RESERVED_IDENTIFIER_FIXUP_1388.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1394 = _RESERVED_IDENTIFIER_FIXUP_1388;
    _RESERVED_IDENTIFIER_FIXUP_1394.x = _RESERVED_IDENTIFIER_FIXUP_888.x;
    _RESERVED_IDENTIFIER_FIXUP_1394.y = _RESERVED_IDENTIFIER_FIXUP_888.y;
    _RESERVED_IDENTIFIER_FIXUP_1394.z = _RESERVED_IDENTIFIER_FIXUP_888.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_939 = OptTex0( texcoord0.xyz);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_943 = hdTex1(param_14);
    vec2 param_15 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_947 = hdTex2(param_15);
    vec2 param_16 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_951 = hdTex3(param_16);
    vec2 param_17 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_955 = hdTex4(param_17);
    vec4 _RESERVED_IDENTIFIER_FIXUP_965 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_939, _RESERVED_IDENTIFIER_FIXUP_943, _RESERVED_IDENTIFIER_FIXUP_955.xxxx), _RESERVED_IDENTIFIER_FIXUP_947, _RESERVED_IDENTIFIER_FIXUP_955.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_970 = mix(_RESERVED_IDENTIFIER_FIXUP_965, _RESERVED_IDENTIFIER_FIXUP_951, _RESERVED_IDENTIFIER_FIXUP_955.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_965;
    _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_634;
    float _RESERVED_IDENTIFIER_FIXUP_983 = clamp((_RESERVED_IDENTIFIER_FIXUP_634 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_983;
    float _RESERVED_IDENTIFIER_FIXUP_989 = ((-_RESERVED_IDENTIFIER_FIXUP_983) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_989;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1548;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1547;
    if (_RESERVED_IDENTIFIER_FIXUP_989 != (-_RESERVED_IDENTIFIER_FIXUP_989))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1001 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1011 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1013 = _RESERVED_IDENTIFIER_FIXUP_1011.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1424 = _RESERVED_IDENTIFIER_FIXUP_1410;
        _RESERVED_IDENTIFIER_FIXUP_1424.y = _RESERVED_IDENTIFIER_FIXUP_1013;
        _RESERVED_IDENTIFIER_FIXUP_1424.z = _RESERVED_IDENTIFIER_FIXUP_1011.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1021 = _RESERVED_IDENTIFIER_FIXUP_1424.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1428;
        _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_1021.x;
        _RESERVED_IDENTIFIER_FIXUP_1428.y = _RESERVED_IDENTIFIER_FIXUP_1021.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1028 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1032 = _RESERVED_IDENTIFIER_FIXUP_1028.y;
        _RESERVED_IDENTIFIER_FIXUP_1428.w = _RESERVED_IDENTIFIER_FIXUP_1032;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1001.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1001.w;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1428.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1032;
        float _RESERVED_IDENTIFIER_FIXUP_1043 = hdLod5(param_18, param_19).x + hdLod5(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1553 = vec4(_RESERVED_IDENTIFIER_FIXUP_983, _RESERVED_IDENTIFIER_FIXUP_1013, _RESERVED_IDENTIFIER_FIXUP_1011.y, _RESERVED_IDENTIFIER_FIXUP_1043);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1050 = _RESERVED_IDENTIFIER_FIXUP_1553.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1441;
        _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_1050.x;
        _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1050.y;
        _RESERVED_IDENTIFIER_FIXUP_1441.w = _RESERVED_IDENTIFIER_FIXUP_1032;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1441.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1032;
        float _RESERVED_IDENTIFIER_FIXUP_1072 = _RESERVED_IDENTIFIER_FIXUP_1043 + hdLod5(param_22, param_23).x;
        _RESERVED_IDENTIFIER_FIXUP_1553.w = _RESERVED_IDENTIFIER_FIXUP_1072;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1079 = _RESERVED_IDENTIFIER_FIXUP_1553.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1454;
        _RESERVED_IDENTIFIER_FIXUP_1454.x = _RESERVED_IDENTIFIER_FIXUP_1079.x;
        _RESERVED_IDENTIFIER_FIXUP_1454.y = _RESERVED_IDENTIFIER_FIXUP_1079.y;
        _RESERVED_IDENTIFIER_FIXUP_1454.w = _RESERVED_IDENTIFIER_FIXUP_1032;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1454.xy;
        float param_25 = _RESERVED_IDENTIFIER_FIXUP_1032;
        float _RESERVED_IDENTIFIER_FIXUP_1101 = _RESERVED_IDENTIFIER_FIXUP_1072 + hdLod5(param_24, param_25).x;
        _RESERVED_IDENTIFIER_FIXUP_1553.w = _RESERVED_IDENTIFIER_FIXUP_1101;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1108 = _RESERVED_IDENTIFIER_FIXUP_1553.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1467;
        _RESERVED_IDENTIFIER_FIXUP_1467.x = _RESERVED_IDENTIFIER_FIXUP_1108.x;
        _RESERVED_IDENTIFIER_FIXUP_1467.y = _RESERVED_IDENTIFIER_FIXUP_1108.y;
        _RESERVED_IDENTIFIER_FIXUP_1467.w = _RESERVED_IDENTIFIER_FIXUP_1032;
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1467.xy;
        float param_27 = _RESERVED_IDENTIFIER_FIXUP_1032;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1125 = hdLod5(param_26, param_27);
        float _RESERVED_IDENTIFIER_FIXUP_1130 = _RESERVED_IDENTIFIER_FIXUP_1101 + _RESERVED_IDENTIFIER_FIXUP_1125.x;
        _RESERVED_IDENTIFIER_FIXUP_1553.y = _RESERVED_IDENTIFIER_FIXUP_1130;
        float _RESERVED_IDENTIFIER_FIXUP_1135 = (_RESERVED_IDENTIFIER_FIXUP_1130 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1553.y = _RESERVED_IDENTIFIER_FIXUP_1135;
        float _RESERVED_IDENTIFIER_FIXUP_1142 = (_RESERVED_IDENTIFIER_FIXUP_983 * _RESERVED_IDENTIFIER_FIXUP_1135) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1553.x = _RESERVED_IDENTIFIER_FIXUP_1142;
        _RESERVED_IDENTIFIER_FIXUP_1125.x = min(_RESERVED_IDENTIFIER_FIXUP_1142, _RESERVED_IDENTIFIER_FIXUP_955.w);
        _RESERVED_IDENTIFIER_FIXUP_1548 = _RESERVED_IDENTIFIER_FIXUP_1553;
        _RESERVED_IDENTIFIER_FIXUP_1547 = _RESERVED_IDENTIFIER_FIXUP_1125;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_947.x = _RESERVED_IDENTIFIER_FIXUP_955.w;
        _RESERVED_IDENTIFIER_FIXUP_1548 = _RESERVED_IDENTIFIER_FIXUP_1410;
        _RESERVED_IDENTIFIER_FIXUP_1547 = _RESERVED_IDENTIFIER_FIXUP_947;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1158 = (_RESERVED_IDENTIFIER_FIXUP_1547.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_1548;
    _RESERVED_IDENTIFIER_FIXUP_1492.x = _RESERVED_IDENTIFIER_FIXUP_1158;
    _RESERVED_IDENTIFIER_FIXUP_1492.x = _RESERVED_IDENTIFIER_FIXUP_1158;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1171 = _RESERVED_IDENTIFIER_FIXUP_970.xyz * _RESERVED_IDENTIFIER_FIXUP_1492.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1498 = _RESERVED_IDENTIFIER_FIXUP_1492;
    _RESERVED_IDENTIFIER_FIXUP_1498.x = _RESERVED_IDENTIFIER_FIXUP_1171.x;
    _RESERVED_IDENTIFIER_FIXUP_1498.y = _RESERVED_IDENTIFIER_FIXUP_1171.y;
    _RESERVED_IDENTIFIER_FIXUP_1498.z = _RESERVED_IDENTIFIER_FIXUP_1171.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1182 = _RESERVED_IDENTIFIER_FIXUP_1498.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_1498;
    _RESERVED_IDENTIFIER_FIXUP_1504.x = _RESERVED_IDENTIFIER_FIXUP_1182.x;
    _RESERVED_IDENTIFIER_FIXUP_1504.y = _RESERVED_IDENTIFIER_FIXUP_1182.y;
    _RESERVED_IDENTIFIER_FIXUP_1504.z = _RESERVED_IDENTIFIER_FIXUP_1182.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1193 = _RESERVED_IDENTIFIER_FIXUP_1504.xyz + _RESERVED_IDENTIFIER_FIXUP_1504.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_1504;
    _RESERVED_IDENTIFIER_FIXUP_1510.x = _RESERVED_IDENTIFIER_FIXUP_1193.x;
    _RESERVED_IDENTIFIER_FIXUP_1510.y = _RESERVED_IDENTIFIER_FIXUP_1193.y;
    _RESERVED_IDENTIFIER_FIXUP_1510.z = _RESERVED_IDENTIFIER_FIXUP_1193.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1204 = _RESERVED_IDENTIFIER_FIXUP_970.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_970;
    _RESERVED_IDENTIFIER_FIXUP_1516.x = _RESERVED_IDENTIFIER_FIXUP_1204.x;
    _RESERVED_IDENTIFIER_FIXUP_1516.y = _RESERVED_IDENTIFIER_FIXUP_1204.y;
    _RESERVED_IDENTIFIER_FIXUP_1516.z = _RESERVED_IDENTIFIER_FIXUP_1204.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1218 = (_RESERVED_IDENTIFIER_FIXUP_1516.xyz * _RESERVED_IDENTIFIER_FIXUP_1547.xxx) + _RESERVED_IDENTIFIER_FIXUP_1510.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1522 = _RESERVED_IDENTIFIER_FIXUP_1510;
    _RESERVED_IDENTIFIER_FIXUP_1522.x = _RESERVED_IDENTIFIER_FIXUP_1218.x;
    _RESERVED_IDENTIFIER_FIXUP_1522.y = _RESERVED_IDENTIFIER_FIXUP_1218.y;
    _RESERVED_IDENTIFIER_FIXUP_1522.z = _RESERVED_IDENTIFIER_FIXUP_1218.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1522.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_1522;
    _RESERVED_IDENTIFIER_FIXUP_1528.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
    _RESERVED_IDENTIFIER_FIXUP_1528.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
    _RESERVED_IDENTIFIER_FIXUP_1528.z = _RESERVED_IDENTIFIER_FIXUP_1231.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1528.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_459 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_468;
    if (_RESERVED_IDENTIFIER_FIXUP_459)
    {
        _RESERVED_IDENTIFIER_FIXUP_468 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_468 = _RESERVED_IDENTIFIER_FIXUP_459;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_468)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_505 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1394.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_532 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1268;
    if (_RESERVED_IDENTIFIER_FIXUP_505 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1268 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_505), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_532);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1268 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_532);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1268;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1158);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    vec2 param_3 = v4.wz;
    r4 = hdTex4(param_3);
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB146 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB146.x;
        r0.z = hdB146.y;
        vec2 hdB168 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB168.x;
        r3.y = hdB168.y;
        vec2 hdB176 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB176.x;
        r3.w = hdB176.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r0.w = r2.x + r3.x;
        vec2 hdB199 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB199.x;
        r2.y = hdB199.y;
        vec2 hdB206 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB206.x;
        r2.w = hdB206.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r0.w += r2.x;
        vec2 hdB229 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB229.x;
        r2.y = hdB229.y;
        vec2 hdB236 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB236.x;
        r2.w = hdB236.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r0.w += r2.x;
        vec2 hdB259 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB259.x;
        r2.y = hdB259.y;
        vec2 hdB266 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB266.x;
        r2.w = hdB266.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r0.y = r0.w + r2.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r2.x = min(r0.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB316 = r0;
    vec3 hdB318 = r1.xyz * hdB316.xxx;
    r0.x = hdB318.x;
    r0.y = hdB318.y;
    r0.z = hdB318.z;
    vec4 hdB325 = r0;
    vec3 hdB329 = hdB325.xyz * v0.xyz;
    r0.x = hdB329.x;
    r0.y = hdB329.y;
    r0.z = hdB329.z;
    vec4 hdB336 = r0;
    vec4 hdB338 = r0;
    vec3 hdB340 = hdB336.xyz + hdB338.xyz;
    r0.x = hdB340.x;
    r0.y = hdB340.y;
    r0.z = hdB340.z;
    vec4 hdB347 = r1;
    vec3 hdB351 = hdB347.www * v1.xyz;
    r1.x = hdB351.x;
    r1.y = hdB351.y;
    r1.z = hdB351.z;
    vec4 hdB363 = r0;
    vec3 hdB365 = (r1.xyz * r2.xxx) + hdB363.xyz;
    r0.x = hdB365.x;
    r0.y = hdB365.y;
    r0.z = hdB365.z;
    vec4 hdB372 = r0;
    vec3 hdB379 = hdB372.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB379.x;
    r0.y = hdB379.y;
    r0.z = hdB379.z;
    vec3 hdB394 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB394.x;
    oC0.y = hdB394.y;
    oC0.z = hdB394.z;
    oC0.w = 1.0;
    bool hdB407 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB415;
    if (hdB407)
    {
        hdB415 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB415 = hdB407;
    }
    if (hdB415)
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
    bool _1527 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1537;
    if (_1527)
    {
        _1537 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1537 = _1527;
    }
    if (_1537)
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
        bool _1562 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1577;
        if (!_1562)
        {
            _1577 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1577 = _1562;
        }
        if (_1577)
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
