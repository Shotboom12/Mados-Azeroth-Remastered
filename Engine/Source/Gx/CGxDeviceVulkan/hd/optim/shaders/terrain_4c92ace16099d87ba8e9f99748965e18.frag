#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _91 = hdOverride >= 0;
    bool _100;
    if (_91)
    {
        _100 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _100 = _91;
    }
    vec4 _101;
    if (_100)
    {
        _101 = vec4(float(hdOverride));
    }
    else
    {
        _101 = value;
    }
    return _101;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _173 = hdOverride >= 0;
    bool _183;
    if (_173)
    {
        _183 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _145 = hdOverride >= 0;
    bool _155;
    if (_145)
    {
        _155 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _155 = _145;
    }
    vec4 _156;
    if (_155)
    {
        _156 = vec4(float(hdOverride));
    }
    else
    {
        _156 = value;
    }
    return _156;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _118 = hdOverride >= 0;
    bool _127;
    if (_118)
    {
        _127 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _127 = _118;
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

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_597 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_600 = _RESERVED_IDENTIFIER_FIXUP_597.xy;
    float _RESERVED_IDENTIFIER_FIXUP_602 = _RESERVED_IDENTIFIER_FIXUP_597.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_600;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_602;
    vec4 _RESERVED_IDENTIFIER_FIXUP_603 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1269;
    _RESERVED_IDENTIFIER_FIXUP_1269.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_611 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1271;
    _RESERVED_IDENTIFIER_FIXUP_1271.x = _RESERVED_IDENTIFIER_FIXUP_611.x;
    _RESERVED_IDENTIFIER_FIXUP_1271.y = _RESERVED_IDENTIFIER_FIXUP_611.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_1271.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_1269;
    _RESERVED_IDENTIFIER_FIXUP_1275.x = _RESERVED_IDENTIFIER_FIXUP_621.x;
    _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_621.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1275.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_603.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_644 = _RESERVED_IDENTIFIER_FIXUP_1271.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_1269;
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_644.x;
    _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_644.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1287.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_603.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_663 = _RESERVED_IDENTIFIER_FIXUP_1271.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1295;
    _RESERVED_IDENTIFIER_FIXUP_1295.x = _RESERVED_IDENTIFIER_FIXUP_663.x;
    _RESERVED_IDENTIFIER_FIXUP_1295.y = _RESERVED_IDENTIFIER_FIXUP_663.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_673 = _RESERVED_IDENTIFIER_FIXUP_1271.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_1299.x = _RESERVED_IDENTIFIER_FIXUP_673.x;
    _RESERVED_IDENTIFIER_FIXUP_1299.y = _RESERVED_IDENTIFIER_FIXUP_673.y;
    _RESERVED_IDENTIFIER_FIXUP_1295.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1295.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_603.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1299.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_741 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_759 = hdTex4(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1299.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1345;
    _RESERVED_IDENTIFIER_FIXUP_1345.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_741 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_603 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_759.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1350;
    _RESERVED_IDENTIFIER_FIXUP_1350.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_785 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_759.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1350.y = _RESERVED_IDENTIFIER_FIXUP_785;
    _RESERVED_IDENTIFIER_FIXUP_1350.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_785;
    vec2 param_11 = texcoord2.xy;
    vec2 param_12 = texcoord1.wz;
    vec2 param_13 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_830 = _RESERVED_IDENTIFIER_FIXUP_1350.xxx * ((hdTex3(param_11) * _RESERVED_IDENTIFIER_FIXUP_759.zzzz) + ((hdTex2(param_12) * _RESERVED_IDENTIFIER_FIXUP_759.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1350.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_759.xxxx * hdTex1(param_13))))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1357;
    _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_830.x;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_830.y;
    _RESERVED_IDENTIFIER_FIXUP_1357.z = _RESERVED_IDENTIFIER_FIXUP_830.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1363;
    _RESERVED_IDENTIFIER_FIXUP_1363.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1363.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1363.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_852 = _RESERVED_IDENTIFIER_FIXUP_1357.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1537).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1369;
    _RESERVED_IDENTIFIER_FIXUP_1369.x = _RESERVED_IDENTIFIER_FIXUP_852.x;
    _RESERVED_IDENTIFIER_FIXUP_1369.y = _RESERVED_IDENTIFIER_FIXUP_852.y;
    _RESERVED_IDENTIFIER_FIXUP_1369.z = _RESERVED_IDENTIFIER_FIXUP_852.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_863 = _RESERVED_IDENTIFIER_FIXUP_1369.xyz + _RESERVED_IDENTIFIER_FIXUP_1369.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_863.x;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_863.y;
    _RESERVED_IDENTIFIER_FIXUP_1375.z = _RESERVED_IDENTIFIER_FIXUP_863.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_877 = (_RESERVED_IDENTIFIER_FIXUP_1363.xyz * _RESERVED_IDENTIFIER_FIXUP_1345.xxx) + _RESERVED_IDENTIFIER_FIXUP_1375.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381;
    _RESERVED_IDENTIFIER_FIXUP_1381.x = _RESERVED_IDENTIFIER_FIXUP_877.x;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_877.y;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = _RESERVED_IDENTIFIER_FIXUP_877.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_890 = _RESERVED_IDENTIFIER_FIXUP_1381.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1387;
    _RESERVED_IDENTIFIER_FIXUP_1387.x = _RESERVED_IDENTIFIER_FIXUP_890.x;
    _RESERVED_IDENTIFIER_FIXUP_1387.y = _RESERVED_IDENTIFIER_FIXUP_890.y;
    _RESERVED_IDENTIFIER_FIXUP_1387.z = _RESERVED_IDENTIFIER_FIXUP_890.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_905 = _RESERVED_IDENTIFIER_FIXUP_1387.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1393;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_905.x;
    _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_905.y;
    _RESERVED_IDENTIFIER_FIXUP_1393.z = _RESERVED_IDENTIFIER_FIXUP_905.z;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_600;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_602;
    vec4 _RESERVED_IDENTIFIER_FIXUP_946 = hdLod5(param_14, param_15);
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1275.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_946.y = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1287.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_946.z = hdLod5(param_18, param_19).x;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1295.xy;
    float param_21 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_946.w = hdLod5(param_20, param_21).x;
    vec2 param_22 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1102 = hdTex4(param_22);
    vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1299.xy;
    float param_24 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1107 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_741 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_946 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_23, param_24).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1102.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1480;
    _RESERVED_IDENTIFIER_FIXUP_1480.x = _RESERVED_IDENTIFIER_FIXUP_1107;
    float _RESERVED_IDENTIFIER_FIXUP_1112 = (_RESERVED_IDENTIFIER_FIXUP_1107 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1487;
    _RESERVED_IDENTIFIER_FIXUP_1487.x = _RESERVED_IDENTIFIER_FIXUP_1112;
    float _RESERVED_IDENTIFIER_FIXUP_1128 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1102.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_1128;
    _RESERVED_IDENTIFIER_FIXUP_1487.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1128;
    vec2 param_25 = texcoord2.xy;
    vec2 param_26 = texcoord1.wz;
    vec2 param_27 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1168 = (hdTex3(param_25) * _RESERVED_IDENTIFIER_FIXUP_1102.zzzz) + ((hdTex2(param_26) * _RESERVED_IDENTIFIER_FIXUP_1102.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1487.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1102.xxxx * hdTex1(param_27))));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1173 = _RESERVED_IDENTIFIER_FIXUP_1487.xxx * _RESERVED_IDENTIFIER_FIXUP_1168.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1494;
    _RESERVED_IDENTIFIER_FIXUP_1494.x = _RESERVED_IDENTIFIER_FIXUP_1173.x;
    _RESERVED_IDENTIFIER_FIXUP_1494.y = _RESERVED_IDENTIFIER_FIXUP_1173.y;
    _RESERVED_IDENTIFIER_FIXUP_1494.z = _RESERVED_IDENTIFIER_FIXUP_1173.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_1168.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1500;
    _RESERVED_IDENTIFIER_FIXUP_1500.x = _RESERVED_IDENTIFIER_FIXUP_1184.x;
    _RESERVED_IDENTIFIER_FIXUP_1500.y = _RESERVED_IDENTIFIER_FIXUP_1184.y;
    _RESERVED_IDENTIFIER_FIXUP_1500.z = _RESERVED_IDENTIFIER_FIXUP_1184.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_1494.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1506;
    _RESERVED_IDENTIFIER_FIXUP_1506.x = _RESERVED_IDENTIFIER_FIXUP_1195.x;
    _RESERVED_IDENTIFIER_FIXUP_1506.y = _RESERVED_IDENTIFIER_FIXUP_1195.y;
    _RESERVED_IDENTIFIER_FIXUP_1506.z = _RESERVED_IDENTIFIER_FIXUP_1195.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1206 = _RESERVED_IDENTIFIER_FIXUP_1506.xyz + _RESERVED_IDENTIFIER_FIXUP_1506.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1512;
    _RESERVED_IDENTIFIER_FIXUP_1512.x = _RESERVED_IDENTIFIER_FIXUP_1206.x;
    _RESERVED_IDENTIFIER_FIXUP_1512.y = _RESERVED_IDENTIFIER_FIXUP_1206.y;
    _RESERVED_IDENTIFIER_FIXUP_1512.z = _RESERVED_IDENTIFIER_FIXUP_1206.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1220 = (_RESERVED_IDENTIFIER_FIXUP_1500.xyz * _RESERVED_IDENTIFIER_FIXUP_1480.xxx) + _RESERVED_IDENTIFIER_FIXUP_1512.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1518;
    _RESERVED_IDENTIFIER_FIXUP_1518.x = _RESERVED_IDENTIFIER_FIXUP_1220.x;
    _RESERVED_IDENTIFIER_FIXUP_1518.y = _RESERVED_IDENTIFIER_FIXUP_1220.y;
    _RESERVED_IDENTIFIER_FIXUP_1518.z = _RESERVED_IDENTIFIER_FIXUP_1220.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1233 = _RESERVED_IDENTIFIER_FIXUP_1518.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1524;
    _RESERVED_IDENTIFIER_FIXUP_1524.x = _RESERVED_IDENTIFIER_FIXUP_1233.x;
    _RESERVED_IDENTIFIER_FIXUP_1524.y = _RESERVED_IDENTIFIER_FIXUP_1233.y;
    _RESERVED_IDENTIFIER_FIXUP_1524.z = _RESERVED_IDENTIFIER_FIXUP_1233.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1524.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_461 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_470;
    if (_RESERVED_IDENTIFIER_FIXUP_461)
    {
        _RESERVED_IDENTIFIER_FIXUP_470 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_470 = _RESERVED_IDENTIFIER_FIXUP_461;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_470)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_507 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1393.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_534 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1259;
    if (_RESERVED_IDENTIFIER_FIXUP_507 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1259 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_507), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_534);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1259 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_534);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1259;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1112);
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB72 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB72.x;
    r2.y = hdB72.y;
    vec2 hdB95 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB95.x;
    r1.y = hdB95.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB119 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB119.x;
    r1.y = hdB119.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB139 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB139.x;
    r1.y = hdB139.y;
    vec4 hdB144 = r2;
    vec2 hdB150 = hdB144.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB150.x;
    r2.y = hdB150.y;
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
    vec2 param_10 = v4.wz;
    r1 = hdTex4(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r3 = OptTex0( v2.xyz);
    r0.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.y = (-r0.y) + 1.0;
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    r4 = r1.xxxx * r4;
    r3 = (r3 * r0.yyyy) + r4;
    vec2 param_12 = v3.wz;
    r4 = hdTex2(param_12);
    r3 = (r4 * r1.yyyy) + r3;
    vec2 param_13 = v4.xy;
    r4 = hdTex3(param_13);
    r1 = (r4 * r1.zzzz) + r3;
    vec4 hdB316 = r0;
    vec3 hdB320 = hdB316.xxx * r1.xyz;
    r0.x = hdB320.x;
    r0.y = hdB320.y;
    r0.z = hdB320.z;
    vec4 hdB327 = r1;
    vec3 hdB331 = hdB327.www * v1.xyz;
    r1.x = hdB331.x;
    r1.y = hdB331.y;
    r1.z = hdB331.z;
    vec4 hdB338 = r0;
    vec3 hdB342 = hdB338.xyz * v0.xyz;
    r0.x = hdB342.x;
    r0.y = hdB342.y;
    r0.z = hdB342.z;
    vec4 hdB349 = r0;
    vec4 hdB351 = r0;
    vec3 hdB353 = hdB349.xyz + hdB351.xyz;
    r0.x = hdB353.x;
    r0.y = hdB353.y;
    r0.z = hdB353.z;
    vec4 hdB365 = r0;
    vec3 hdB367 = (r1.xyz * r2.xxx) + hdB365.xyz;
    r0.x = hdB367.x;
    r0.y = hdB367.y;
    r0.z = hdB367.z;
    vec4 hdB374 = r0;
    vec3 hdB381 = hdB374.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB381.x;
    r0.y = hdB381.y;
    r0.z = hdB381.z;
    vec3 hdB396 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB396.x;
    oC0.y = hdB396.y;
    oC0.z = hdB396.z;
    oC0.w = 1.0;
    bool hdB409 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB417;
    if (hdB409)
    {
        hdB417 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB417 = hdB409;
    }
    if (hdB417)
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
    bool _1308 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1318;
    if (_1308)
    {
        _1318 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1318 = _1308;
    }
    if (_1318)
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
        bool _1343 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1358;
        if (!_1343)
        {
            _1358 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1358 = _1343;
        }
        if (_1358)
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
