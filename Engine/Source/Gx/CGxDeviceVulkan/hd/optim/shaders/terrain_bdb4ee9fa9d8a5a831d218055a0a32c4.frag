#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1465;
vec4 _RESERVED_IDENTIFIER_FIXUP_1466;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _47 = hdOverride >= 0;
    bool _67;
    if (_47)
    {
        _67 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _67 = _47;
    }
    vec4 _68;
    if (_67)
    {
        _68 = vec4(float(hdOverride));
    }
    else
    {
        _68 = value;
    }
    return _68;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _85 = hdOverride >= 0;
    bool _95;
    if (_85)
    {
        _95 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _95 = _85;
    }
    vec4 _96;
    if (_95)
    {
        _96 = vec4(float(hdOverride));
    }
    else
    {
        _96 = value;
    }
    return _96;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _113 = hdOverride >= 0;
    bool _122;
    if (_113)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _122 = _113;
    }
    vec4 _123;
    if (_122)
    {
        _123 = vec4(float(hdOverride));
    }
    else
    {
        _123 = value;
    }
    return _123;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_568 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_571 = _RESERVED_IDENTIFIER_FIXUP_568.xy;
    float _RESERVED_IDENTIFIER_FIXUP_573 = _RESERVED_IDENTIFIER_FIXUP_568.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_571;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_573;
    vec4 _RESERVED_IDENTIFIER_FIXUP_574 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1197;
    _RESERVED_IDENTIFIER_FIXUP_1197.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_582 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1199;
    _RESERVED_IDENTIFIER_FIXUP_1199.x = _RESERVED_IDENTIFIER_FIXUP_582.x;
    _RESERVED_IDENTIFIER_FIXUP_1199.y = _RESERVED_IDENTIFIER_FIXUP_582.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_592 = _RESERVED_IDENTIFIER_FIXUP_1199.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1203 = _RESERVED_IDENTIFIER_FIXUP_1197;
    _RESERVED_IDENTIFIER_FIXUP_1203.x = _RESERVED_IDENTIFIER_FIXUP_592.x;
    _RESERVED_IDENTIFIER_FIXUP_1203.y = _RESERVED_IDENTIFIER_FIXUP_592.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1203.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_574.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_615 = _RESERVED_IDENTIFIER_FIXUP_1199.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = _RESERVED_IDENTIFIER_FIXUP_1197;
    _RESERVED_IDENTIFIER_FIXUP_1215.x = _RESERVED_IDENTIFIER_FIXUP_615.x;
    _RESERVED_IDENTIFIER_FIXUP_1215.y = _RESERVED_IDENTIFIER_FIXUP_615.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1215.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_574.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_634 = _RESERVED_IDENTIFIER_FIXUP_1199.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1223;
    _RESERVED_IDENTIFIER_FIXUP_1223.x = _RESERVED_IDENTIFIER_FIXUP_634.x;
    _RESERVED_IDENTIFIER_FIXUP_1223.y = _RESERVED_IDENTIFIER_FIXUP_634.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_644 = _RESERVED_IDENTIFIER_FIXUP_1199.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1227;
    _RESERVED_IDENTIFIER_FIXUP_1227.x = _RESERVED_IDENTIFIER_FIXUP_644.x;
    _RESERVED_IDENTIFIER_FIXUP_1227.y = _RESERVED_IDENTIFIER_FIXUP_644.y;
    _RESERVED_IDENTIFIER_FIXUP_1223.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1223.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_574.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1227.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_712 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_730 = hdTex2(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1227.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1273;
    _RESERVED_IDENTIFIER_FIXUP_1273.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_712 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_574 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_730.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278;
    _RESERVED_IDENTIFIER_FIXUP_1278.x = 1.0;
    float _RESERVED_IDENTIFIER_FIXUP_752 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_730.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1278.y = _RESERVED_IDENTIFIER_FIXUP_752;
    _RESERVED_IDENTIFIER_FIXUP_1278.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_752;
    vec2 param_11 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_781 = _RESERVED_IDENTIFIER_FIXUP_1278.xxx * ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1278.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_730.xxxx * hdTex1(param_11))).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1285;
    _RESERVED_IDENTIFIER_FIXUP_1285.x = _RESERVED_IDENTIFIER_FIXUP_781.x;
    _RESERVED_IDENTIFIER_FIXUP_1285.y = _RESERVED_IDENTIFIER_FIXUP_781.y;
    _RESERVED_IDENTIFIER_FIXUP_1285.z = _RESERVED_IDENTIFIER_FIXUP_781.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291;
    _RESERVED_IDENTIFIER_FIXUP_1291.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1291.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1291.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_803 = _RESERVED_IDENTIFIER_FIXUP_1285.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1465).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297;
    _RESERVED_IDENTIFIER_FIXUP_1297.x = _RESERVED_IDENTIFIER_FIXUP_803.x;
    _RESERVED_IDENTIFIER_FIXUP_1297.y = _RESERVED_IDENTIFIER_FIXUP_803.y;
    _RESERVED_IDENTIFIER_FIXUP_1297.z = _RESERVED_IDENTIFIER_FIXUP_803.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_814 = _RESERVED_IDENTIFIER_FIXUP_1297.xyz + _RESERVED_IDENTIFIER_FIXUP_1297.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_814.x;
    _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_814.y;
    _RESERVED_IDENTIFIER_FIXUP_1303.z = _RESERVED_IDENTIFIER_FIXUP_814.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_828 = (_RESERVED_IDENTIFIER_FIXUP_1291.xyz * _RESERVED_IDENTIFIER_FIXUP_1273.xxx) + _RESERVED_IDENTIFIER_FIXUP_1303.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1309;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = _RESERVED_IDENTIFIER_FIXUP_828.x;
    _RESERVED_IDENTIFIER_FIXUP_1309.y = _RESERVED_IDENTIFIER_FIXUP_828.y;
    _RESERVED_IDENTIFIER_FIXUP_1309.z = _RESERVED_IDENTIFIER_FIXUP_828.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_841 = _RESERVED_IDENTIFIER_FIXUP_1309.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315;
    _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_841.x;
    _RESERVED_IDENTIFIER_FIXUP_1315.y = _RESERVED_IDENTIFIER_FIXUP_841.y;
    _RESERVED_IDENTIFIER_FIXUP_1315.z = _RESERVED_IDENTIFIER_FIXUP_841.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_856 = _RESERVED_IDENTIFIER_FIXUP_1315.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1321;
    _RESERVED_IDENTIFIER_FIXUP_1321.x = _RESERVED_IDENTIFIER_FIXUP_856.x;
    _RESERVED_IDENTIFIER_FIXUP_1321.y = _RESERVED_IDENTIFIER_FIXUP_856.y;
    _RESERVED_IDENTIFIER_FIXUP_1321.z = _RESERVED_IDENTIFIER_FIXUP_856.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_571;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_573;
    vec4 _RESERVED_IDENTIFIER_FIXUP_894 = hdLod5(param_12, param_13);
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1203.xy;
    float param_15 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_894.y = hdLod5(param_14, param_15).x;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1215.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_894.z = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1223.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_894.w = hdLod5(param_18, param_19).x;
    vec2 param_20 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1050 = hdTex2(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1227.xy;
    float param_22 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1055 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_712 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_894 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_21, param_22).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1050.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1408;
    _RESERVED_IDENTIFIER_FIXUP_1408.x = _RESERVED_IDENTIFIER_FIXUP_1055;
    float _RESERVED_IDENTIFIER_FIXUP_1060 = (_RESERVED_IDENTIFIER_FIXUP_1055 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1415;
    _RESERVED_IDENTIFIER_FIXUP_1415.x = _RESERVED_IDENTIFIER_FIXUP_1060;
    float _RESERVED_IDENTIFIER_FIXUP_1072 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1050.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1415.y = _RESERVED_IDENTIFIER_FIXUP_1072;
    _RESERVED_IDENTIFIER_FIXUP_1415.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1072;
    vec2 param_23 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1096 = (OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_1415.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1050.xxxx * hdTex1(param_23));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1101 = _RESERVED_IDENTIFIER_FIXUP_1415.xxx * _RESERVED_IDENTIFIER_FIXUP_1096.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1422;
    _RESERVED_IDENTIFIER_FIXUP_1422.x = _RESERVED_IDENTIFIER_FIXUP_1101.x;
    _RESERVED_IDENTIFIER_FIXUP_1422.y = _RESERVED_IDENTIFIER_FIXUP_1101.y;
    _RESERVED_IDENTIFIER_FIXUP_1422.z = _RESERVED_IDENTIFIER_FIXUP_1101.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1112 = _RESERVED_IDENTIFIER_FIXUP_1096.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1428;
    _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_1112.x;
    _RESERVED_IDENTIFIER_FIXUP_1428.y = _RESERVED_IDENTIFIER_FIXUP_1112.y;
    _RESERVED_IDENTIFIER_FIXUP_1428.z = _RESERVED_IDENTIFIER_FIXUP_1112.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_1422.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434;
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_1123.x;
    _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_1123.y;
    _RESERVED_IDENTIFIER_FIXUP_1434.z = _RESERVED_IDENTIFIER_FIXUP_1123.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1134 = _RESERVED_IDENTIFIER_FIXUP_1434.xyz + _RESERVED_IDENTIFIER_FIXUP_1434.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1440;
    _RESERVED_IDENTIFIER_FIXUP_1440.x = _RESERVED_IDENTIFIER_FIXUP_1134.x;
    _RESERVED_IDENTIFIER_FIXUP_1440.y = _RESERVED_IDENTIFIER_FIXUP_1134.y;
    _RESERVED_IDENTIFIER_FIXUP_1440.z = _RESERVED_IDENTIFIER_FIXUP_1134.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1148 = (_RESERVED_IDENTIFIER_FIXUP_1428.xyz * _RESERVED_IDENTIFIER_FIXUP_1408.xxx) + _RESERVED_IDENTIFIER_FIXUP_1440.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1446;
    _RESERVED_IDENTIFIER_FIXUP_1446.x = _RESERVED_IDENTIFIER_FIXUP_1148.x;
    _RESERVED_IDENTIFIER_FIXUP_1446.y = _RESERVED_IDENTIFIER_FIXUP_1148.y;
    _RESERVED_IDENTIFIER_FIXUP_1446.z = _RESERVED_IDENTIFIER_FIXUP_1148.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1161 = _RESERVED_IDENTIFIER_FIXUP_1446.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1452;
    _RESERVED_IDENTIFIER_FIXUP_1452.x = _RESERVED_IDENTIFIER_FIXUP_1161.x;
    _RESERVED_IDENTIFIER_FIXUP_1452.y = _RESERVED_IDENTIFIER_FIXUP_1161.y;
    _RESERVED_IDENTIFIER_FIXUP_1452.z = _RESERVED_IDENTIFIER_FIXUP_1161.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1452.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_435 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_444;
    if (_RESERVED_IDENTIFIER_FIXUP_435)
    {
        _RESERVED_IDENTIFIER_FIXUP_444 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_444 = _RESERVED_IDENTIFIER_FIXUP_435;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_444)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_481 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1321.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_508 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1187;
    if (_RESERVED_IDENTIFIER_FIXUP_481 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1187 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_481), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_508);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1187 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_508);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1187;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1060);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB68 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB68.x;
    r2.y = hdB68.y;
    vec2 hdB91 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB91.x;
    r1.y = hdB91.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB115 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB115.x;
    r1.y = hdB115.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB135 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB135.x;
    r1.y = hdB135.y;
    vec4 hdB140 = r2;
    vec2 hdB146 = hdB140.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB146.x;
    r2.y = hdB146.y;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.w = r1.x;
    r0 += (-v4.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.y = r1.x + (-v4.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v3.wz;
    r1 = hdTex2(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r0.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.y = (-r0.y) + 1.0;
    vec2 param_11 = v3.xy;
    r3 = hdTex1(param_11);
    r1 = r1.xxxx * r3;
    r3 = OptTex0( v2.xyz);
    r1 = (r3 * r0.yyyy) + r1;
    vec4 hdB290 = r0;
    vec3 hdB294 = hdB290.xxx * r1.xyz;
    r0.x = hdB294.x;
    r0.y = hdB294.y;
    r0.z = hdB294.z;
    vec4 hdB301 = r1;
    vec3 hdB305 = hdB301.www * v1.xyz;
    r1.x = hdB305.x;
    r1.y = hdB305.y;
    r1.z = hdB305.z;
    vec4 hdB312 = r0;
    vec3 hdB316 = hdB312.xyz * v0.xyz;
    r0.x = hdB316.x;
    r0.y = hdB316.y;
    r0.z = hdB316.z;
    vec4 hdB323 = r0;
    vec4 hdB325 = r0;
    vec3 hdB327 = hdB323.xyz + hdB325.xyz;
    r0.x = hdB327.x;
    r0.y = hdB327.y;
    r0.z = hdB327.z;
    vec4 hdB339 = r0;
    vec3 hdB341 = (r1.xyz * r2.xxx) + hdB339.xyz;
    r0.x = hdB341.x;
    r0.y = hdB341.y;
    r0.z = hdB341.z;
    vec4 hdB348 = r0;
    vec3 hdB355 = hdB348.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB355.x;
    r0.y = hdB355.y;
    r0.z = hdB355.z;
    vec3 hdB370 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB370.x;
    oC0.y = hdB370.y;
    oC0.z = hdB370.z;
    oC0.w = 1.0;
    bool hdB383 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB391;
    if (hdB383)
    {
        hdB391 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB391 = hdB383;
    }
    if (hdB391)
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
    bool _1191 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1201;
    if (_1191)
    {
        _1201 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1201 = _1191;
    }
    if (_1201)
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
        bool _1226 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1241;
        if (!_1226)
        {
            _1241 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1241 = _1226;
        }
        if (_1241)
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
