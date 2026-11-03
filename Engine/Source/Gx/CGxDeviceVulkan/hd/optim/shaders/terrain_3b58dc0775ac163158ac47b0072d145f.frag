#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1475;
vec4 _RESERVED_IDENTIFIER_FIXUP_1476;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _56 = hdOverride >= 0;
    bool _76;
    if (_56)
    {
        _76 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _76 = _56;
    }
    vec4 _77;
    if (_76)
    {
        _77 = vec4(float(hdOverride));
    }
    else
    {
        _77 = value;
    }
    return _77;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _94 = hdOverride >= 0;
    bool _103;
    if (_94)
    {
        _103 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _103 = _94;
    }
    vec4 _104;
    if (_103)
    {
        _104 = vec4(float(hdOverride));
    }
    else
    {
        _104 = value;
    }
    return _104;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _121 = hdOverride >= 0;
    bool _131;
    if (_121)
    {
        _131 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _131 = _121;
    }
    vec4 _132;
    if (_131)
    {
        _132 = vec4(float(hdOverride));
    }
    else
    {
        _132 = value;
    }
    return _132;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _149 = hdOverride >= 0;
    bool _158;
    if (_149)
    {
        _158 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _158 = _149;
    }
    vec4 _159;
    if (_158)
    {
        _159 = vec4(float(hdOverride));
    }
    else
    {
        _159 = value;
    }
    return _159;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _176 = hdOverride >= 0;
    bool _186;
    if (_176)
    {
        _186 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _186 = _176;
    }
    vec4 _187;
    if (_186)
    {
        _187 = vec4(float(hdOverride));
    }
    else
    {
        _187 = value;
    }
    return _187;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _204 = hdOverride >= 0;
    bool _214;
    if (_204)
    {
        _214 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _214 = _204;
    }
    vec4 _215;
    if (_214)
    {
        _215 = vec4(float(hdOverride));
    }
    else
    {
        _215 = value;
    }
    return _215;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_577 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_580 = _RESERVED_IDENTIFIER_FIXUP_577.xy;
    float _RESERVED_IDENTIFIER_FIXUP_582 = _RESERVED_IDENTIFIER_FIXUP_577.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_580;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_582;
    vec4 _RESERVED_IDENTIFIER_FIXUP_583 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1217;
    _RESERVED_IDENTIFIER_FIXUP_1217.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_591 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1219;
    _RESERVED_IDENTIFIER_FIXUP_1219.x = _RESERVED_IDENTIFIER_FIXUP_591.x;
    _RESERVED_IDENTIFIER_FIXUP_1219.y = _RESERVED_IDENTIFIER_FIXUP_591.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_601 = _RESERVED_IDENTIFIER_FIXUP_1219.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1217;
    _RESERVED_IDENTIFIER_FIXUP_1223.x = _RESERVED_IDENTIFIER_FIXUP_601.x;
    _RESERVED_IDENTIFIER_FIXUP_1223.y = _RESERVED_IDENTIFIER_FIXUP_601.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1223.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_583.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_624 = _RESERVED_IDENTIFIER_FIXUP_1219.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_1217;
    _RESERVED_IDENTIFIER_FIXUP_1235.x = _RESERVED_IDENTIFIER_FIXUP_624.x;
    _RESERVED_IDENTIFIER_FIXUP_1235.y = _RESERVED_IDENTIFIER_FIXUP_624.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1235.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_583.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_643 = _RESERVED_IDENTIFIER_FIXUP_1219.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1243;
    _RESERVED_IDENTIFIER_FIXUP_1243.x = _RESERVED_IDENTIFIER_FIXUP_643.x;
    _RESERVED_IDENTIFIER_FIXUP_1243.y = _RESERVED_IDENTIFIER_FIXUP_643.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_653 = _RESERVED_IDENTIFIER_FIXUP_1219.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1247;
    _RESERVED_IDENTIFIER_FIXUP_1247.x = _RESERVED_IDENTIFIER_FIXUP_653.x;
    _RESERVED_IDENTIFIER_FIXUP_1247.y = _RESERVED_IDENTIFIER_FIXUP_653.y;
    _RESERVED_IDENTIFIER_FIXUP_1243.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1243.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_583.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1247.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_721 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_739 = hdTex4(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1247.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1293.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_721 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_583 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_739.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1298;
    _RESERVED_IDENTIFIER_FIXUP_1298.x = 1.0;
    vec2 param_11 = texcoord0.xy;
    vec2 param_12 = texcoord1.xy;
    vec2 param_13 = texcoord1.wz;
    vec2 param_14 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_793 = _RESERVED_IDENTIFIER_FIXUP_1298.xxx * mix(mix(mix(hdTex0(param_11), hdTex1(param_12), _RESERVED_IDENTIFIER_FIXUP_739.xxxx), hdTex2(param_13), _RESERVED_IDENTIFIER_FIXUP_739.yyyy), hdTex3(param_14), _RESERVED_IDENTIFIER_FIXUP_739.zzzz).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1300;
    _RESERVED_IDENTIFIER_FIXUP_1300.x = _RESERVED_IDENTIFIER_FIXUP_793.x;
    _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_793.y;
    _RESERVED_IDENTIFIER_FIXUP_1300.z = _RESERVED_IDENTIFIER_FIXUP_793.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1306;
    _RESERVED_IDENTIFIER_FIXUP_1306.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1306.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1306.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_815 = _RESERVED_IDENTIFIER_FIXUP_1300.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1475).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_815.x;
    _RESERVED_IDENTIFIER_FIXUP_1312.y = _RESERVED_IDENTIFIER_FIXUP_815.y;
    _RESERVED_IDENTIFIER_FIXUP_1312.z = _RESERVED_IDENTIFIER_FIXUP_815.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_826 = _RESERVED_IDENTIFIER_FIXUP_1312.xyz + _RESERVED_IDENTIFIER_FIXUP_1312.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1318;
    _RESERVED_IDENTIFIER_FIXUP_1318.x = _RESERVED_IDENTIFIER_FIXUP_826.x;
    _RESERVED_IDENTIFIER_FIXUP_1318.y = _RESERVED_IDENTIFIER_FIXUP_826.y;
    _RESERVED_IDENTIFIER_FIXUP_1318.z = _RESERVED_IDENTIFIER_FIXUP_826.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_840 = (_RESERVED_IDENTIFIER_FIXUP_1306.xyz * _RESERVED_IDENTIFIER_FIXUP_1293.xxx) + _RESERVED_IDENTIFIER_FIXUP_1318.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1324;
    _RESERVED_IDENTIFIER_FIXUP_1324.x = _RESERVED_IDENTIFIER_FIXUP_840.x;
    _RESERVED_IDENTIFIER_FIXUP_1324.y = _RESERVED_IDENTIFIER_FIXUP_840.y;
    _RESERVED_IDENTIFIER_FIXUP_1324.z = _RESERVED_IDENTIFIER_FIXUP_840.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_853 = _RESERVED_IDENTIFIER_FIXUP_1324.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1330;
    _RESERVED_IDENTIFIER_FIXUP_1330.x = _RESERVED_IDENTIFIER_FIXUP_853.x;
    _RESERVED_IDENTIFIER_FIXUP_1330.y = _RESERVED_IDENTIFIER_FIXUP_853.y;
    _RESERVED_IDENTIFIER_FIXUP_1330.z = _RESERVED_IDENTIFIER_FIXUP_853.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_868 = _RESERVED_IDENTIFIER_FIXUP_1330.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1336;
    _RESERVED_IDENTIFIER_FIXUP_1336.x = _RESERVED_IDENTIFIER_FIXUP_868.x;
    _RESERVED_IDENTIFIER_FIXUP_1336.y = _RESERVED_IDENTIFIER_FIXUP_868.y;
    _RESERVED_IDENTIFIER_FIXUP_1336.z = _RESERVED_IDENTIFIER_FIXUP_868.z;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_580;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_582;
    vec4 _RESERVED_IDENTIFIER_FIXUP_910 = hdLod5(param_15, param_16);
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1223.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_910.y = hdLod5(param_17, param_18).x;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1235.xy;
    float param_20 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_910.z = hdLod5(param_19, param_20).x;
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1243.xy;
    float param_22 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_910.w = hdLod5(param_21, param_22).x;
    vec2 param_23 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1066 = hdTex4(param_23);
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1247.xy;
    float param_25 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1071 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_721 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_910 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_24, param_25).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1066.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1423;
    _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_1071;
    float _RESERVED_IDENTIFIER_FIXUP_1076 = (_RESERVED_IDENTIFIER_FIXUP_1071 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1430;
    _RESERVED_IDENTIFIER_FIXUP_1430.x = _RESERVED_IDENTIFIER_FIXUP_1076;
    vec2 param_26 = texcoord0.xy;
    vec2 param_27 = texcoord1.xy;
    vec2 param_28 = texcoord1.wz;
    vec2 param_29 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1115 = mix(mix(mix(hdTex0(param_26), hdTex1(param_27), _RESERVED_IDENTIFIER_FIXUP_1066.xxxx), hdTex2(param_28), _RESERVED_IDENTIFIER_FIXUP_1066.yyyy), hdTex3(param_29), _RESERVED_IDENTIFIER_FIXUP_1066.zzzz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1430.xxx * _RESERVED_IDENTIFIER_FIXUP_1115.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1432;
    _RESERVED_IDENTIFIER_FIXUP_1432.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
    _RESERVED_IDENTIFIER_FIXUP_1432.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
    _RESERVED_IDENTIFIER_FIXUP_1432.z = _RESERVED_IDENTIFIER_FIXUP_1120.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1131 = _RESERVED_IDENTIFIER_FIXUP_1115.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1438;
    _RESERVED_IDENTIFIER_FIXUP_1438.x = _RESERVED_IDENTIFIER_FIXUP_1131.x;
    _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_1131.y;
    _RESERVED_IDENTIFIER_FIXUP_1438.z = _RESERVED_IDENTIFIER_FIXUP_1131.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1142 = _RESERVED_IDENTIFIER_FIXUP_1432.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1444;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_1142.x;
    _RESERVED_IDENTIFIER_FIXUP_1444.y = _RESERVED_IDENTIFIER_FIXUP_1142.y;
    _RESERVED_IDENTIFIER_FIXUP_1444.z = _RESERVED_IDENTIFIER_FIXUP_1142.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_1444.xyz + _RESERVED_IDENTIFIER_FIXUP_1444.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450;
    _RESERVED_IDENTIFIER_FIXUP_1450.x = _RESERVED_IDENTIFIER_FIXUP_1153.x;
    _RESERVED_IDENTIFIER_FIXUP_1450.y = _RESERVED_IDENTIFIER_FIXUP_1153.y;
    _RESERVED_IDENTIFIER_FIXUP_1450.z = _RESERVED_IDENTIFIER_FIXUP_1153.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1167 = (_RESERVED_IDENTIFIER_FIXUP_1438.xyz * _RESERVED_IDENTIFIER_FIXUP_1423.xxx) + _RESERVED_IDENTIFIER_FIXUP_1450.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1456;
    _RESERVED_IDENTIFIER_FIXUP_1456.x = _RESERVED_IDENTIFIER_FIXUP_1167.x;
    _RESERVED_IDENTIFIER_FIXUP_1456.y = _RESERVED_IDENTIFIER_FIXUP_1167.y;
    _RESERVED_IDENTIFIER_FIXUP_1456.z = _RESERVED_IDENTIFIER_FIXUP_1167.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_1456.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1462;
    _RESERVED_IDENTIFIER_FIXUP_1462.x = _RESERVED_IDENTIFIER_FIXUP_1180.x;
    _RESERVED_IDENTIFIER_FIXUP_1462.y = _RESERVED_IDENTIFIER_FIXUP_1180.y;
    _RESERVED_IDENTIFIER_FIXUP_1462.z = _RESERVED_IDENTIFIER_FIXUP_1180.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1462.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_441 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_450;
    if (_RESERVED_IDENTIFIER_FIXUP_441)
    {
        _RESERVED_IDENTIFIER_FIXUP_450 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_450 = _RESERVED_IDENTIFIER_FIXUP_441;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_450)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_487 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1336.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_514 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1206;
    if (_RESERVED_IDENTIFIER_FIXUP_487 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1206 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_487), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_514);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1206 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_514);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1206;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1076);
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
    vec2 param_10 = v4.wz;
    r1 = hdTex4(param_10);
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
    vec2 param_14 = v4.xy;
    r3 = hdTex3(param_14);
    r5 = mix(r4, r3, r1.zzzz);
    vec4 hdB296 = r0;
    vec3 hdB300 = hdB296.xxx * r5.xyz;
    r0.x = hdB300.x;
    r0.y = hdB300.y;
    r0.z = hdB300.z;
    vec3 hdB311 = r5.www * v1.xyz;
    r1.x = hdB311.x;
    r1.y = hdB311.y;
    r1.z = hdB311.z;
    vec4 hdB318 = r0;
    vec3 hdB322 = hdB318.xyz * v0.xyz;
    r0.x = hdB322.x;
    r0.y = hdB322.y;
    r0.z = hdB322.z;
    vec4 hdB329 = r0;
    vec4 hdB331 = r0;
    vec3 hdB333 = hdB329.xyz + hdB331.xyz;
    r0.x = hdB333.x;
    r0.y = hdB333.y;
    r0.z = hdB333.z;
    vec4 hdB345 = r0;
    vec3 hdB347 = (r1.xyz * r2.xxx) + hdB345.xyz;
    r0.x = hdB347.x;
    r0.y = hdB347.y;
    r0.z = hdB347.z;
    vec4 hdB354 = r0;
    vec3 hdB361 = hdB354.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB361.x;
    r0.y = hdB361.y;
    r0.z = hdB361.z;
    vec3 hdB376 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB376.x;
    oC0.y = hdB376.y;
    oC0.z = hdB376.z;
    oC0.w = 1.0;
    bool hdB389 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB397;
    if (hdB389)
    {
        hdB397 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB397 = hdB389;
    }
    if (hdB397)
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
    bool _1283 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1293;
    if (_1283)
    {
        _1293 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1293 = _1283;
    }
    if (_1293)
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
        bool _1318 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1333;
        if (!_1318)
        {
            _1333 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1333 = _1318;
        }
        if (_1333)
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
