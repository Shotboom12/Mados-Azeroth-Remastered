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
float _RESERVED_IDENTIFIER_FIXUP_1429;
vec4 _RESERVED_IDENTIFIER_FIXUP_1430;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_565 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_568 = _RESERVED_IDENTIFIER_FIXUP_565.xy;
    float _RESERVED_IDENTIFIER_FIXUP_570 = _RESERVED_IDENTIFIER_FIXUP_565.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_568;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_570;
    vec4 _RESERVED_IDENTIFIER_FIXUP_571 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_574 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_578 = _RESERVED_IDENTIFIER_FIXUP_574.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1183;
    _RESERVED_IDENTIFIER_FIXUP_1183.w = _RESERVED_IDENTIFIER_FIXUP_578;
    vec2 _RESERVED_IDENTIFIER_FIXUP_582 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_584 = _RESERVED_IDENTIFIER_FIXUP_582.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_571;
    _RESERVED_IDENTIFIER_FIXUP_1185.y = _RESERVED_IDENTIFIER_FIXUP_584;
    float _RESERVED_IDENTIFIER_FIXUP_586 = _RESERVED_IDENTIFIER_FIXUP_582.y;
    _RESERVED_IDENTIFIER_FIXUP_1185.z = _RESERVED_IDENTIFIER_FIXUP_586;
    vec2 _RESERVED_IDENTIFIER_FIXUP_592 = _RESERVED_IDENTIFIER_FIXUP_1185.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1189 = _RESERVED_IDENTIFIER_FIXUP_1183;
    _RESERVED_IDENTIFIER_FIXUP_1189.x = _RESERVED_IDENTIFIER_FIXUP_592.x;
    _RESERVED_IDENTIFIER_FIXUP_1189.y = _RESERVED_IDENTIFIER_FIXUP_592.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1189.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_607 = _RESERVED_IDENTIFIER_FIXUP_571.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1185.x = _RESERVED_IDENTIFIER_FIXUP_607;
    vec2 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_1185.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1183;
    _RESERVED_IDENTIFIER_FIXUP_1202.x = _RESERVED_IDENTIFIER_FIXUP_621.x;
    _RESERVED_IDENTIFIER_FIXUP_1202.y = _RESERVED_IDENTIFIER_FIXUP_621.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1202.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_636 = _RESERVED_IDENTIFIER_FIXUP_607 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1185.x = _RESERVED_IDENTIFIER_FIXUP_636;
    vec2 _RESERVED_IDENTIFIER_FIXUP_643 = _RESERVED_IDENTIFIER_FIXUP_1185.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1211.x = _RESERVED_IDENTIFIER_FIXUP_643.x;
    _RESERVED_IDENTIFIER_FIXUP_1211.y = _RESERVED_IDENTIFIER_FIXUP_643.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_653 = _RESERVED_IDENTIFIER_FIXUP_1185.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_1215.x = _RESERVED_IDENTIFIER_FIXUP_653.x;
    _RESERVED_IDENTIFIER_FIXUP_1215.y = _RESERVED_IDENTIFIER_FIXUP_653.y;
    _RESERVED_IDENTIFIER_FIXUP_1211.w = _RESERVED_IDENTIFIER_FIXUP_578;
    _RESERVED_IDENTIFIER_FIXUP_1215.w = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_707 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_725 = hdTex3(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1211.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_578;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1215.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_578;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1253;
    _RESERVED_IDENTIFIER_FIXUP_1253.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_707 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_636 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_725.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1258;
    _RESERVED_IDENTIFIER_FIXUP_1258.x = 1.0;
    vec2 param_11 = texcoord0.xy;
    vec2 param_12 = texcoord1.xy;
    vec2 param_13 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_770 = _RESERVED_IDENTIFIER_FIXUP_1258.xxx * mix(mix(hdTex0(param_11), hdTex1(param_12), _RESERVED_IDENTIFIER_FIXUP_725.xxxx), hdTex2(param_13), _RESERVED_IDENTIFIER_FIXUP_725.yyyy).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1260;
    _RESERVED_IDENTIFIER_FIXUP_1260.x = _RESERVED_IDENTIFIER_FIXUP_770.x;
    _RESERVED_IDENTIFIER_FIXUP_1260.y = _RESERVED_IDENTIFIER_FIXUP_770.y;
    _RESERVED_IDENTIFIER_FIXUP_1260.z = _RESERVED_IDENTIFIER_FIXUP_770.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1266;
    _RESERVED_IDENTIFIER_FIXUP_1266.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1266.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1266.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_792 = _RESERVED_IDENTIFIER_FIXUP_1260.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1429).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1272;
    _RESERVED_IDENTIFIER_FIXUP_1272.x = _RESERVED_IDENTIFIER_FIXUP_792.x;
    _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_792.y;
    _RESERVED_IDENTIFIER_FIXUP_1272.z = _RESERVED_IDENTIFIER_FIXUP_792.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_803 = _RESERVED_IDENTIFIER_FIXUP_1272.xyz + _RESERVED_IDENTIFIER_FIXUP_1272.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278;
    _RESERVED_IDENTIFIER_FIXUP_1278.x = _RESERVED_IDENTIFIER_FIXUP_803.x;
    _RESERVED_IDENTIFIER_FIXUP_1278.y = _RESERVED_IDENTIFIER_FIXUP_803.y;
    _RESERVED_IDENTIFIER_FIXUP_1278.z = _RESERVED_IDENTIFIER_FIXUP_803.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_817 = (_RESERVED_IDENTIFIER_FIXUP_1266.xyz * _RESERVED_IDENTIFIER_FIXUP_1253.xxx) + _RESERVED_IDENTIFIER_FIXUP_1278.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1284;
    _RESERVED_IDENTIFIER_FIXUP_1284.x = _RESERVED_IDENTIFIER_FIXUP_817.x;
    _RESERVED_IDENTIFIER_FIXUP_1284.y = _RESERVED_IDENTIFIER_FIXUP_817.y;
    _RESERVED_IDENTIFIER_FIXUP_1284.z = _RESERVED_IDENTIFIER_FIXUP_817.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_830 = _RESERVED_IDENTIFIER_FIXUP_1284.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1290;
    _RESERVED_IDENTIFIER_FIXUP_1290.x = _RESERVED_IDENTIFIER_FIXUP_830.x;
    _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_830.y;
    _RESERVED_IDENTIFIER_FIXUP_1290.z = _RESERVED_IDENTIFIER_FIXUP_830.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_845 = _RESERVED_IDENTIFIER_FIXUP_1290.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1296.x = _RESERVED_IDENTIFIER_FIXUP_845.x;
    _RESERVED_IDENTIFIER_FIXUP_1296.y = _RESERVED_IDENTIFIER_FIXUP_845.y;
    _RESERVED_IDENTIFIER_FIXUP_1296.z = _RESERVED_IDENTIFIER_FIXUP_845.z;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_568;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_570;
    vec4 _RESERVED_IDENTIFIER_FIXUP_887 = hdLod5(param_14, param_15);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_887;
    _RESERVED_IDENTIFIER_FIXUP_1309.y = _RESERVED_IDENTIFIER_FIXUP_584;
    _RESERVED_IDENTIFIER_FIXUP_1309.z = _RESERVED_IDENTIFIER_FIXUP_586;
    vec2 _RESERVED_IDENTIFIER_FIXUP_908 = _RESERVED_IDENTIFIER_FIXUP_1309.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1313 = _RESERVED_IDENTIFIER_FIXUP_1183;
    _RESERVED_IDENTIFIER_FIXUP_1313.x = _RESERVED_IDENTIFIER_FIXUP_908.x;
    _RESERVED_IDENTIFIER_FIXUP_1313.y = _RESERVED_IDENTIFIER_FIXUP_908.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1313.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_923 = _RESERVED_IDENTIFIER_FIXUP_887.x + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = _RESERVED_IDENTIFIER_FIXUP_923;
    vec2 _RESERVED_IDENTIFIER_FIXUP_937 = _RESERVED_IDENTIFIER_FIXUP_1309.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1326 = _RESERVED_IDENTIFIER_FIXUP_1183;
    _RESERVED_IDENTIFIER_FIXUP_1326.x = _RESERVED_IDENTIFIER_FIXUP_937.x;
    _RESERVED_IDENTIFIER_FIXUP_1326.y = _RESERVED_IDENTIFIER_FIXUP_937.y;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1326.xy;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_952 = _RESERVED_IDENTIFIER_FIXUP_923 + hdLod5(param_18, param_19).x;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = _RESERVED_IDENTIFIER_FIXUP_952;
    vec2 _RESERVED_IDENTIFIER_FIXUP_959 = _RESERVED_IDENTIFIER_FIXUP_1309.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1335;
    _RESERVED_IDENTIFIER_FIXUP_1335.x = _RESERVED_IDENTIFIER_FIXUP_959.x;
    _RESERVED_IDENTIFIER_FIXUP_1335.y = _RESERVED_IDENTIFIER_FIXUP_959.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_969 = _RESERVED_IDENTIFIER_FIXUP_1309.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1339;
    _RESERVED_IDENTIFIER_FIXUP_1339.x = _RESERVED_IDENTIFIER_FIXUP_969.x;
    _RESERVED_IDENTIFIER_FIXUP_1339.y = _RESERVED_IDENTIFIER_FIXUP_969.y;
    _RESERVED_IDENTIFIER_FIXUP_1335.w = _RESERVED_IDENTIFIER_FIXUP_578;
    _RESERVED_IDENTIFIER_FIXUP_1339.w = _RESERVED_IDENTIFIER_FIXUP_578;
    vec2 param_20 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1041 = hdTex3(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1335.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_578;
    vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1339.xy;
    float param_24 = _RESERVED_IDENTIFIER_FIXUP_578;
    float _RESERVED_IDENTIFIER_FIXUP_1046 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_707 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_952 + hdLod5(param_21, param_22).x) + hdLod5(param_23, param_24).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1041.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1377;
    _RESERVED_IDENTIFIER_FIXUP_1377.x = _RESERVED_IDENTIFIER_FIXUP_1046;
    float _RESERVED_IDENTIFIER_FIXUP_1051 = (_RESERVED_IDENTIFIER_FIXUP_1046 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = _RESERVED_IDENTIFIER_FIXUP_1051;
    vec2 param_25 = texcoord0.xy;
    vec2 param_26 = texcoord1.xy;
    vec2 param_27 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1081 = mix(mix(hdTex0(param_25), hdTex1(param_26), _RESERVED_IDENTIFIER_FIXUP_1041.xxxx), hdTex2(param_27), _RESERVED_IDENTIFIER_FIXUP_1041.yyyy);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1086 = _RESERVED_IDENTIFIER_FIXUP_1384.xxx * _RESERVED_IDENTIFIER_FIXUP_1081.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1386;
    _RESERVED_IDENTIFIER_FIXUP_1386.x = _RESERVED_IDENTIFIER_FIXUP_1086.x;
    _RESERVED_IDENTIFIER_FIXUP_1386.y = _RESERVED_IDENTIFIER_FIXUP_1086.y;
    _RESERVED_IDENTIFIER_FIXUP_1386.z = _RESERVED_IDENTIFIER_FIXUP_1086.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1097 = _RESERVED_IDENTIFIER_FIXUP_1081.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1392;
    _RESERVED_IDENTIFIER_FIXUP_1392.x = _RESERVED_IDENTIFIER_FIXUP_1097.x;
    _RESERVED_IDENTIFIER_FIXUP_1392.y = _RESERVED_IDENTIFIER_FIXUP_1097.y;
    _RESERVED_IDENTIFIER_FIXUP_1392.z = _RESERVED_IDENTIFIER_FIXUP_1097.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1108 = _RESERVED_IDENTIFIER_FIXUP_1386.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1398;
    _RESERVED_IDENTIFIER_FIXUP_1398.x = _RESERVED_IDENTIFIER_FIXUP_1108.x;
    _RESERVED_IDENTIFIER_FIXUP_1398.y = _RESERVED_IDENTIFIER_FIXUP_1108.y;
    _RESERVED_IDENTIFIER_FIXUP_1398.z = _RESERVED_IDENTIFIER_FIXUP_1108.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1119 = _RESERVED_IDENTIFIER_FIXUP_1398.xyz + _RESERVED_IDENTIFIER_FIXUP_1398.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1404;
    _RESERVED_IDENTIFIER_FIXUP_1404.x = _RESERVED_IDENTIFIER_FIXUP_1119.x;
    _RESERVED_IDENTIFIER_FIXUP_1404.y = _RESERVED_IDENTIFIER_FIXUP_1119.y;
    _RESERVED_IDENTIFIER_FIXUP_1404.z = _RESERVED_IDENTIFIER_FIXUP_1119.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1133 = (_RESERVED_IDENTIFIER_FIXUP_1392.xyz * _RESERVED_IDENTIFIER_FIXUP_1377.xxx) + _RESERVED_IDENTIFIER_FIXUP_1404.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410;
    _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_1133.x;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_1133.y;
    _RESERVED_IDENTIFIER_FIXUP_1410.z = _RESERVED_IDENTIFIER_FIXUP_1133.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1410.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1416;
    _RESERVED_IDENTIFIER_FIXUP_1416.x = _RESERVED_IDENTIFIER_FIXUP_1146.x;
    _RESERVED_IDENTIFIER_FIXUP_1416.y = _RESERVED_IDENTIFIER_FIXUP_1146.y;
    _RESERVED_IDENTIFIER_FIXUP_1416.z = _RESERVED_IDENTIFIER_FIXUP_1146.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1416.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_428 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_437;
    if (_RESERVED_IDENTIFIER_FIXUP_428)
    {
        _RESERVED_IDENTIFIER_FIXUP_437 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_437 = _RESERVED_IDENTIFIER_FIXUP_428;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_437)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_474 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1296.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_501 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1172;
    if (_RESERVED_IDENTIFIER_FIXUP_474 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1172 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_474), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_501);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1172 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_501);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1172;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1051);
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
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_11 = v2.xy;
    r3 = hdTex0(param_11);
    vec2 param_12 = v3.xy;
    r4 = hdTex1(param_12);
    r5 = mix(r3, r4, r1.xxxx);
    vec2 param_13 = v3.wz;
    r3 = hdTex2(param_13);
    r4 = mix(r5, r3, r1.yyyy);
    vec4 hdB282 = r0;
    vec3 hdB286 = hdB282.xxx * r4.xyz;
    r0.x = hdB286.x;
    r0.y = hdB286.y;
    r0.z = hdB286.z;
    vec3 hdB297 = r4.www * v1.xyz;
    r1.x = hdB297.x;
    r1.y = hdB297.y;
    r1.z = hdB297.z;
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
    vec4 hdB331 = r0;
    vec3 hdB333 = (r1.xyz * r2.xxx) + hdB331.xyz;
    r0.x = hdB333.x;
    r0.y = hdB333.y;
    r0.z = hdB333.z;
    vec4 hdB340 = r0;
    vec3 hdB347 = hdB340.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB347.x;
    r0.y = hdB347.y;
    r0.z = hdB347.z;
    vec3 hdB362 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB362.x;
    oC0.y = hdB362.y;
    oC0.z = hdB362.z;
    oC0.w = 1.0;
    bool hdB376 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB384;
    if (hdB376)
    {
        hdB384 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB384 = hdB376;
    }
    if (hdB384)
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
    bool _1333 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1343;
    if (_1333)
    {
        _1343 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1343 = _1333;
    }
    if (_1343)
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
        bool _1368 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1383;
        if (!_1368)
        {
            _1383 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1383 = _1368;
        }
        if (_1383)
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
