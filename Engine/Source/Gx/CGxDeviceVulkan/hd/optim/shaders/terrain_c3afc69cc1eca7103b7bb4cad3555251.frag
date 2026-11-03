#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1378;
vec4 _RESERVED_IDENTIFIER_FIXUP_1379;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
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
    bool _44 = hdOverride >= 0;
    bool _64;
    if (_44)
    {
        _64 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _64 = _44;
    }
    vec4 _65;
    if (_64)
    {
        _65 = vec4(float(hdOverride));
    }
    else
    {
        _65 = value;
    }
    return _65;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _82 = hdOverride >= 0;
    bool _91;
    if (_82)
    {
        _91 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _91 = _82;
    }
    vec4 _92;
    if (_91)
    {
        _92 = vec4(float(hdOverride));
    }
    else
    {
        _92 = value;
    }
    return _92;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_539 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_542 = _RESERVED_IDENTIFIER_FIXUP_539.xy;
    float _RESERVED_IDENTIFIER_FIXUP_544 = _RESERVED_IDENTIFIER_FIXUP_539.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_542;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_544;
    vec4 _RESERVED_IDENTIFIER_FIXUP_545 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1120;
    _RESERVED_IDENTIFIER_FIXUP_1120.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_553 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1122;
    _RESERVED_IDENTIFIER_FIXUP_1122.x = _RESERVED_IDENTIFIER_FIXUP_553.x;
    _RESERVED_IDENTIFIER_FIXUP_1122.y = _RESERVED_IDENTIFIER_FIXUP_553.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_563 = _RESERVED_IDENTIFIER_FIXUP_1122.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1126 = _RESERVED_IDENTIFIER_FIXUP_1120;
    _RESERVED_IDENTIFIER_FIXUP_1126.x = _RESERVED_IDENTIFIER_FIXUP_563.x;
    _RESERVED_IDENTIFIER_FIXUP_1126.y = _RESERVED_IDENTIFIER_FIXUP_563.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1126.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_545.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_586 = _RESERVED_IDENTIFIER_FIXUP_1122.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1138 = _RESERVED_IDENTIFIER_FIXUP_1120;
    _RESERVED_IDENTIFIER_FIXUP_1138.x = _RESERVED_IDENTIFIER_FIXUP_586.x;
    _RESERVED_IDENTIFIER_FIXUP_1138.y = _RESERVED_IDENTIFIER_FIXUP_586.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1138.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_545.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_605 = _RESERVED_IDENTIFIER_FIXUP_1122.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1146;
    _RESERVED_IDENTIFIER_FIXUP_1146.x = _RESERVED_IDENTIFIER_FIXUP_605.x;
    _RESERVED_IDENTIFIER_FIXUP_1146.y = _RESERVED_IDENTIFIER_FIXUP_605.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_615 = _RESERVED_IDENTIFIER_FIXUP_1122.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1150;
    _RESERVED_IDENTIFIER_FIXUP_1150.x = _RESERVED_IDENTIFIER_FIXUP_615.x;
    _RESERVED_IDENTIFIER_FIXUP_1150.y = _RESERVED_IDENTIFIER_FIXUP_615.y;
    _RESERVED_IDENTIFIER_FIXUP_1146.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1146.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_545.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1150.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_683 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1150.xy;
    float param_9 = 0.0;
    vec2 param_10 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196;
    _RESERVED_IDENTIFIER_FIXUP_1196.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_683 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_545 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_8, param_9).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, hdTex1(param_10).w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1201;
    _RESERVED_IDENTIFIER_FIXUP_1201.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_728 = _RESERVED_IDENTIFIER_FIXUP_1201.xxx * OptTex0( texcoord0.xyz).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1203;
    _RESERVED_IDENTIFIER_FIXUP_1203.x = _RESERVED_IDENTIFIER_FIXUP_728.x;
    _RESERVED_IDENTIFIER_FIXUP_1203.y = _RESERVED_IDENTIFIER_FIXUP_728.y;
    _RESERVED_IDENTIFIER_FIXUP_1203.z = _RESERVED_IDENTIFIER_FIXUP_728.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1209;
    _RESERVED_IDENTIFIER_FIXUP_1209.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1209.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1209.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_750 = _RESERVED_IDENTIFIER_FIXUP_1203.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1378).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_1215.x = _RESERVED_IDENTIFIER_FIXUP_750.x;
    _RESERVED_IDENTIFIER_FIXUP_1215.y = _RESERVED_IDENTIFIER_FIXUP_750.y;
    _RESERVED_IDENTIFIER_FIXUP_1215.z = _RESERVED_IDENTIFIER_FIXUP_750.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_761 = _RESERVED_IDENTIFIER_FIXUP_1215.xyz + _RESERVED_IDENTIFIER_FIXUP_1215.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1221;
    _RESERVED_IDENTIFIER_FIXUP_1221.x = _RESERVED_IDENTIFIER_FIXUP_761.x;
    _RESERVED_IDENTIFIER_FIXUP_1221.y = _RESERVED_IDENTIFIER_FIXUP_761.y;
    _RESERVED_IDENTIFIER_FIXUP_1221.z = _RESERVED_IDENTIFIER_FIXUP_761.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = (_RESERVED_IDENTIFIER_FIXUP_1209.xyz * _RESERVED_IDENTIFIER_FIXUP_1196.xxx) + _RESERVED_IDENTIFIER_FIXUP_1221.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1227;
    _RESERVED_IDENTIFIER_FIXUP_1227.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1227.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1227.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_788 = _RESERVED_IDENTIFIER_FIXUP_1227.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1233;
    _RESERVED_IDENTIFIER_FIXUP_1233.x = _RESERVED_IDENTIFIER_FIXUP_788.x;
    _RESERVED_IDENTIFIER_FIXUP_1233.y = _RESERVED_IDENTIFIER_FIXUP_788.y;
    _RESERVED_IDENTIFIER_FIXUP_1233.z = _RESERVED_IDENTIFIER_FIXUP_788.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_803 = _RESERVED_IDENTIFIER_FIXUP_1233.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1239;
    _RESERVED_IDENTIFIER_FIXUP_1239.x = _RESERVED_IDENTIFIER_FIXUP_803.x;
    _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_803.y;
    _RESERVED_IDENTIFIER_FIXUP_1239.z = _RESERVED_IDENTIFIER_FIXUP_803.z;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_542;
    float param_12 = _RESERVED_IDENTIFIER_FIXUP_544;
    vec4 _RESERVED_IDENTIFIER_FIXUP_840 = hdLod5(param_11, param_12);
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1126.xy;
    float param_14 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_840.y = hdLod5(param_13, param_14).x;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1138.xy;
    float param_16 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_840.z = hdLod5(param_15, param_16).x;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1146.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_840.w = hdLod5(param_17, param_18).x;
    vec2 param_19 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_996 = hdTex1(param_19);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1150.xy;
    float param_21 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1001 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_683 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_840 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_20, param_21).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_996.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1326;
    _RESERVED_IDENTIFIER_FIXUP_1326.x = _RESERVED_IDENTIFIER_FIXUP_1001;
    float _RESERVED_IDENTIFIER_FIXUP_1006 = (_RESERVED_IDENTIFIER_FIXUP_1001 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1333;
    _RESERVED_IDENTIFIER_FIXUP_1333.x = _RESERVED_IDENTIFIER_FIXUP_1006;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1018 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1023 = _RESERVED_IDENTIFIER_FIXUP_1333.xxx * _RESERVED_IDENTIFIER_FIXUP_1018.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1335;
    _RESERVED_IDENTIFIER_FIXUP_1335.x = _RESERVED_IDENTIFIER_FIXUP_1023.x;
    _RESERVED_IDENTIFIER_FIXUP_1335.y = _RESERVED_IDENTIFIER_FIXUP_1023.y;
    _RESERVED_IDENTIFIER_FIXUP_1335.z = _RESERVED_IDENTIFIER_FIXUP_1023.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1034 = _RESERVED_IDENTIFIER_FIXUP_1018.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_1034.x;
    _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_1034.y;
    _RESERVED_IDENTIFIER_FIXUP_1341.z = _RESERVED_IDENTIFIER_FIXUP_1034.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1045 = _RESERVED_IDENTIFIER_FIXUP_1335.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347;
    _RESERVED_IDENTIFIER_FIXUP_1347.x = _RESERVED_IDENTIFIER_FIXUP_1045.x;
    _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_1045.y;
    _RESERVED_IDENTIFIER_FIXUP_1347.z = _RESERVED_IDENTIFIER_FIXUP_1045.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1056 = _RESERVED_IDENTIFIER_FIXUP_1347.xyz + _RESERVED_IDENTIFIER_FIXUP_1347.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1353;
    _RESERVED_IDENTIFIER_FIXUP_1353.x = _RESERVED_IDENTIFIER_FIXUP_1056.x;
    _RESERVED_IDENTIFIER_FIXUP_1353.y = _RESERVED_IDENTIFIER_FIXUP_1056.y;
    _RESERVED_IDENTIFIER_FIXUP_1353.z = _RESERVED_IDENTIFIER_FIXUP_1056.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1070 = (_RESERVED_IDENTIFIER_FIXUP_1341.xyz * _RESERVED_IDENTIFIER_FIXUP_1326.xxx) + _RESERVED_IDENTIFIER_FIXUP_1353.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1359;
    _RESERVED_IDENTIFIER_FIXUP_1359.x = _RESERVED_IDENTIFIER_FIXUP_1070.x;
    _RESERVED_IDENTIFIER_FIXUP_1359.y = _RESERVED_IDENTIFIER_FIXUP_1070.y;
    _RESERVED_IDENTIFIER_FIXUP_1359.z = _RESERVED_IDENTIFIER_FIXUP_1070.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1083 = _RESERVED_IDENTIFIER_FIXUP_1359.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1365;
    _RESERVED_IDENTIFIER_FIXUP_1365.x = _RESERVED_IDENTIFIER_FIXUP_1083.x;
    _RESERVED_IDENTIFIER_FIXUP_1365.y = _RESERVED_IDENTIFIER_FIXUP_1083.y;
    _RESERVED_IDENTIFIER_FIXUP_1365.z = _RESERVED_IDENTIFIER_FIXUP_1083.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1365.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_408 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_417;
    if (_RESERVED_IDENTIFIER_FIXUP_408)
    {
        _RESERVED_IDENTIFIER_FIXUP_417 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_417 = _RESERVED_IDENTIFIER_FIXUP_408;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_417)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_454 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1239.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_481 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1109;
    if (_RESERVED_IDENTIFIER_FIXUP_454 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1109 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_454), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_481);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1109 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_481);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1109;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1006);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
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
    vec2 hdB67 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB67.x;
    r2.y = hdB67.y;
    vec2 hdB90 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB90.x;
    r1.y = hdB90.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB114 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB114.x;
    r1.y = hdB114.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB134 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB134.x;
    r1.y = hdB134.y;
    vec4 hdB139 = r2;
    vec2 hdB145 = hdB139.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB145.x;
    r2.y = hdB145.y;
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
    vec2 param_10 = v3.xy;
    r1 = hdTex1(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r1 = OptTex0( v2.xyz);
    vec4 hdB263 = r0;
    vec3 hdB267 = hdB263.xxx * r1.xyz;
    r0.x = hdB267.x;
    r0.y = hdB267.y;
    r0.z = hdB267.z;
    vec4 hdB274 = r1;
    vec3 hdB278 = hdB274.www * v1.xyz;
    r1.x = hdB278.x;
    r1.y = hdB278.y;
    r1.z = hdB278.z;
    vec4 hdB285 = r0;
    vec3 hdB289 = hdB285.xyz * v0.xyz;
    r0.x = hdB289.x;
    r0.y = hdB289.y;
    r0.z = hdB289.z;
    vec4 hdB296 = r0;
    vec4 hdB298 = r0;
    vec3 hdB300 = hdB296.xyz + hdB298.xyz;
    r0.x = hdB300.x;
    r0.y = hdB300.y;
    r0.z = hdB300.z;
    vec4 hdB312 = r0;
    vec3 hdB314 = (r1.xyz * r2.xxx) + hdB312.xyz;
    r0.x = hdB314.x;
    r0.y = hdB314.y;
    r0.z = hdB314.z;
    vec4 hdB321 = r0;
    vec3 hdB328 = hdB321.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB328.x;
    r0.y = hdB328.y;
    r0.z = hdB328.z;
    vec3 hdB343 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB343.x;
    oC0.y = hdB343.y;
    oC0.z = hdB343.z;
    oC0.w = 1.0;
    bool hdB356 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB364;
    if (hdB356)
    {
        hdB364 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB364 = hdB356;
    }
    if (hdB364)
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
    bool _1090 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1100;
    if (_1090)
    {
        _1100 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1100 = _1090;
    }
    if (_1100)
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
        bool _1125 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1140;
        if (!_1125)
        {
            _1140 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1140 = _1125;
        }
        if (_1140)
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
