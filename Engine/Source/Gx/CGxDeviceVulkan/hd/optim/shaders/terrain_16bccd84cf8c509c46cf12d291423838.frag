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
float _RESERVED_IDENTIFIER_FIXUP_1447;
vec4 _RESERVED_IDENTIFIER_FIXUP_1448;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_567 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_570 = _RESERVED_IDENTIFIER_FIXUP_567.xy;
    float _RESERVED_IDENTIFIER_FIXUP_572 = _RESERVED_IDENTIFIER_FIXUP_567.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_570;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_572;
    vec4 _RESERVED_IDENTIFIER_FIXUP_573 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1189;
    _RESERVED_IDENTIFIER_FIXUP_1189.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_581 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1191;
    _RESERVED_IDENTIFIER_FIXUP_1191.x = _RESERVED_IDENTIFIER_FIXUP_581.x;
    _RESERVED_IDENTIFIER_FIXUP_1191.y = _RESERVED_IDENTIFIER_FIXUP_581.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_591 = _RESERVED_IDENTIFIER_FIXUP_1191.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_1189;
    _RESERVED_IDENTIFIER_FIXUP_1195.x = _RESERVED_IDENTIFIER_FIXUP_591.x;
    _RESERVED_IDENTIFIER_FIXUP_1195.y = _RESERVED_IDENTIFIER_FIXUP_591.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1195.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_573.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_614 = _RESERVED_IDENTIFIER_FIXUP_1191.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1207 = _RESERVED_IDENTIFIER_FIXUP_1189;
    _RESERVED_IDENTIFIER_FIXUP_1207.x = _RESERVED_IDENTIFIER_FIXUP_614.x;
    _RESERVED_IDENTIFIER_FIXUP_1207.y = _RESERVED_IDENTIFIER_FIXUP_614.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1207.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_573.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_633 = _RESERVED_IDENTIFIER_FIXUP_1191.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_1215.x = _RESERVED_IDENTIFIER_FIXUP_633.x;
    _RESERVED_IDENTIFIER_FIXUP_1215.y = _RESERVED_IDENTIFIER_FIXUP_633.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_643 = _RESERVED_IDENTIFIER_FIXUP_1191.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1219;
    _RESERVED_IDENTIFIER_FIXUP_1219.x = _RESERVED_IDENTIFIER_FIXUP_643.x;
    _RESERVED_IDENTIFIER_FIXUP_1219.y = _RESERVED_IDENTIFIER_FIXUP_643.y;
    _RESERVED_IDENTIFIER_FIXUP_1215.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1215.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_573.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1219.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_711 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_729 = hdTex3(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1219.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1265;
    _RESERVED_IDENTIFIER_FIXUP_1265.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_711 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_573 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_729.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270;
    _RESERVED_IDENTIFIER_FIXUP_1270.x = 1.0;
    vec2 param_11 = texcoord0.xy;
    vec2 param_12 = texcoord1.xy;
    vec2 param_13 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_774 = _RESERVED_IDENTIFIER_FIXUP_1270.xxx * mix(mix(hdTex0(param_11), hdTex1(param_12), _RESERVED_IDENTIFIER_FIXUP_729.xxxx), hdTex2(param_13), _RESERVED_IDENTIFIER_FIXUP_729.yyyy).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1272;
    _RESERVED_IDENTIFIER_FIXUP_1272.x = _RESERVED_IDENTIFIER_FIXUP_774.x;
    _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_774.y;
    _RESERVED_IDENTIFIER_FIXUP_1272.z = _RESERVED_IDENTIFIER_FIXUP_774.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278;
    _RESERVED_IDENTIFIER_FIXUP_1278.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1278.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1278.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_796 = _RESERVED_IDENTIFIER_FIXUP_1272.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1447).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1284;
    _RESERVED_IDENTIFIER_FIXUP_1284.x = _RESERVED_IDENTIFIER_FIXUP_796.x;
    _RESERVED_IDENTIFIER_FIXUP_1284.y = _RESERVED_IDENTIFIER_FIXUP_796.y;
    _RESERVED_IDENTIFIER_FIXUP_1284.z = _RESERVED_IDENTIFIER_FIXUP_796.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_807 = _RESERVED_IDENTIFIER_FIXUP_1284.xyz + _RESERVED_IDENTIFIER_FIXUP_1284.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1290;
    _RESERVED_IDENTIFIER_FIXUP_1290.x = _RESERVED_IDENTIFIER_FIXUP_807.x;
    _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_807.y;
    _RESERVED_IDENTIFIER_FIXUP_1290.z = _RESERVED_IDENTIFIER_FIXUP_807.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_821 = (_RESERVED_IDENTIFIER_FIXUP_1278.xyz * _RESERVED_IDENTIFIER_FIXUP_1265.xxx) + _RESERVED_IDENTIFIER_FIXUP_1290.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1296.x = _RESERVED_IDENTIFIER_FIXUP_821.x;
    _RESERVED_IDENTIFIER_FIXUP_1296.y = _RESERVED_IDENTIFIER_FIXUP_821.y;
    _RESERVED_IDENTIFIER_FIXUP_1296.z = _RESERVED_IDENTIFIER_FIXUP_821.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_834 = _RESERVED_IDENTIFIER_FIXUP_1296.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1302;
    _RESERVED_IDENTIFIER_FIXUP_1302.x = _RESERVED_IDENTIFIER_FIXUP_834.x;
    _RESERVED_IDENTIFIER_FIXUP_1302.y = _RESERVED_IDENTIFIER_FIXUP_834.y;
    _RESERVED_IDENTIFIER_FIXUP_1302.z = _RESERVED_IDENTIFIER_FIXUP_834.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_849 = _RESERVED_IDENTIFIER_FIXUP_1302.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1308;
    _RESERVED_IDENTIFIER_FIXUP_1308.x = _RESERVED_IDENTIFIER_FIXUP_849.x;
    _RESERVED_IDENTIFIER_FIXUP_1308.y = _RESERVED_IDENTIFIER_FIXUP_849.y;
    _RESERVED_IDENTIFIER_FIXUP_1308.z = _RESERVED_IDENTIFIER_FIXUP_849.z;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_570;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_572;
    vec4 _RESERVED_IDENTIFIER_FIXUP_891 = hdLod5(param_14, param_15);
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1195.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_891.y = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1207.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_891.z = hdLod5(param_18, param_19).x;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1215.xy;
    float param_21 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_891.w = hdLod5(param_20, param_21).x;
    vec2 param_22 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1047 = hdTex3(param_22);
    vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1219.xy;
    float param_24 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1052 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_711 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_891 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_23, param_24).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1047.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1395;
    _RESERVED_IDENTIFIER_FIXUP_1395.x = _RESERVED_IDENTIFIER_FIXUP_1052;
    float _RESERVED_IDENTIFIER_FIXUP_1057 = (_RESERVED_IDENTIFIER_FIXUP_1052 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1402;
    _RESERVED_IDENTIFIER_FIXUP_1402.x = _RESERVED_IDENTIFIER_FIXUP_1057;
    vec2 param_25 = texcoord0.xy;
    vec2 param_26 = texcoord1.xy;
    vec2 param_27 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1087 = mix(mix(hdTex0(param_25), hdTex1(param_26), _RESERVED_IDENTIFIER_FIXUP_1047.xxxx), hdTex2(param_27), _RESERVED_IDENTIFIER_FIXUP_1047.yyyy);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1092 = _RESERVED_IDENTIFIER_FIXUP_1402.xxx * _RESERVED_IDENTIFIER_FIXUP_1087.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1404;
    _RESERVED_IDENTIFIER_FIXUP_1404.x = _RESERVED_IDENTIFIER_FIXUP_1092.x;
    _RESERVED_IDENTIFIER_FIXUP_1404.y = _RESERVED_IDENTIFIER_FIXUP_1092.y;
    _RESERVED_IDENTIFIER_FIXUP_1404.z = _RESERVED_IDENTIFIER_FIXUP_1092.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1103 = _RESERVED_IDENTIFIER_FIXUP_1087.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410;
    _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_1103.x;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_1103.y;
    _RESERVED_IDENTIFIER_FIXUP_1410.z = _RESERVED_IDENTIFIER_FIXUP_1103.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_1404.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1416;
    _RESERVED_IDENTIFIER_FIXUP_1416.x = _RESERVED_IDENTIFIER_FIXUP_1114.x;
    _RESERVED_IDENTIFIER_FIXUP_1416.y = _RESERVED_IDENTIFIER_FIXUP_1114.y;
    _RESERVED_IDENTIFIER_FIXUP_1416.z = _RESERVED_IDENTIFIER_FIXUP_1114.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1125 = _RESERVED_IDENTIFIER_FIXUP_1416.xyz + _RESERVED_IDENTIFIER_FIXUP_1416.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1422;
    _RESERVED_IDENTIFIER_FIXUP_1422.x = _RESERVED_IDENTIFIER_FIXUP_1125.x;
    _RESERVED_IDENTIFIER_FIXUP_1422.y = _RESERVED_IDENTIFIER_FIXUP_1125.y;
    _RESERVED_IDENTIFIER_FIXUP_1422.z = _RESERVED_IDENTIFIER_FIXUP_1125.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1139 = (_RESERVED_IDENTIFIER_FIXUP_1410.xyz * _RESERVED_IDENTIFIER_FIXUP_1395.xxx) + _RESERVED_IDENTIFIER_FIXUP_1422.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1428;
    _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_1139.x;
    _RESERVED_IDENTIFIER_FIXUP_1428.y = _RESERVED_IDENTIFIER_FIXUP_1139.y;
    _RESERVED_IDENTIFIER_FIXUP_1428.z = _RESERVED_IDENTIFIER_FIXUP_1139.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1152 = _RESERVED_IDENTIFIER_FIXUP_1428.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434;
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_1152.x;
    _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_1152.y;
    _RESERVED_IDENTIFIER_FIXUP_1434.z = _RESERVED_IDENTIFIER_FIXUP_1152.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1434.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_431 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_440;
    if (_RESERVED_IDENTIFIER_FIXUP_431)
    {
        _RESERVED_IDENTIFIER_FIXUP_440 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_440 = _RESERVED_IDENTIFIER_FIXUP_431;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_440)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_477 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1308.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_504 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178;
    if (_RESERVED_IDENTIFIER_FIXUP_477 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1178 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_477), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_504);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1178 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_504);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1178;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1057);
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
    r0 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB73 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB73.x;
    r2.y = hdB73.y;
    vec2 hdB96 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB96.x;
    r1.y = hdB96.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB120 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB120.x;
    r1.y = hdB120.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB140 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB140.x;
    r1.y = hdB140.y;
    vec4 hdB145 = r2;
    vec2 hdB151 = hdB145.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB151.x;
    r2.y = hdB151.y;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.w = r1.x;
    r0 += (-v5.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.y = r1.x + (-v5.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
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
    vec4 hdB286 = r0;
    vec3 hdB290 = hdB286.xxx * r4.xyz;
    r0.x = hdB290.x;
    r0.y = hdB290.y;
    r0.z = hdB290.z;
    vec3 hdB301 = r4.www * v1.xyz;
    r1.x = hdB301.x;
    r1.y = hdB301.y;
    r1.z = hdB301.z;
    vec4 hdB308 = r0;
    vec3 hdB312 = hdB308.xyz * v0.xyz;
    r0.x = hdB312.x;
    r0.y = hdB312.y;
    r0.z = hdB312.z;
    vec4 hdB319 = r0;
    vec4 hdB321 = r0;
    vec3 hdB323 = hdB319.xyz + hdB321.xyz;
    r0.x = hdB323.x;
    r0.y = hdB323.y;
    r0.z = hdB323.z;
    vec4 hdB335 = r0;
    vec3 hdB337 = (r1.xyz * r2.xxx) + hdB335.xyz;
    r0.x = hdB337.x;
    r0.y = hdB337.y;
    r0.z = hdB337.z;
    vec4 hdB344 = r0;
    vec3 hdB351 = hdB344.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB351.x;
    r0.y = hdB351.y;
    r0.z = hdB351.z;
    vec3 hdB366 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB366.x;
    oC0.y = hdB366.y;
    oC0.z = hdB366.z;
    oC0.w = 1.0;
    bool hdB379 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB387;
    if (hdB379)
    {
        hdB387 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB387 = hdB379;
    }
    if (hdB387)
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
    bool _1230 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1240;
    if (_1230)
    {
        _1240 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1240 = _1230;
    }
    if (_1240)
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
        bool _1265 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1280;
        if (!_1265)
        {
            _1280 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1280 = _1265;
        }
        if (_1280)
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
