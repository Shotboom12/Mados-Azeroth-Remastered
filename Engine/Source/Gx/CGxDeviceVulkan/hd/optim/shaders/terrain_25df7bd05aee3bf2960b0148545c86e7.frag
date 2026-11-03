#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1375;
vec4 _RESERVED_IDENTIFIER_FIXUP_1376;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _85 = hdOverride >= 0;
    bool _94;
    if (_85)
    {
        _94 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _94 = _85;
    }
    vec4 _95;
    if (_94)
    {
        _95 = vec4(float(hdOverride));
    }
    else
    {
        _95 = value;
    }
    return _95;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _112 = hdOverride >= 0;
    bool _122;
    if (_112)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _122 = _112;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_536 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_539 = _RESERVED_IDENTIFIER_FIXUP_536.xy;
    float _RESERVED_IDENTIFIER_FIXUP_541 = _RESERVED_IDENTIFIER_FIXUP_536.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_539;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_541;
    vec4 _RESERVED_IDENTIFIER_FIXUP_542 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1117;
    _RESERVED_IDENTIFIER_FIXUP_1117.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_550 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1119;
    _RESERVED_IDENTIFIER_FIXUP_1119.x = _RESERVED_IDENTIFIER_FIXUP_550.x;
    _RESERVED_IDENTIFIER_FIXUP_1119.y = _RESERVED_IDENTIFIER_FIXUP_550.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_560 = _RESERVED_IDENTIFIER_FIXUP_1119.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_1117;
    _RESERVED_IDENTIFIER_FIXUP_1123.x = _RESERVED_IDENTIFIER_FIXUP_560.x;
    _RESERVED_IDENTIFIER_FIXUP_1123.y = _RESERVED_IDENTIFIER_FIXUP_560.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1123.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_542.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_583 = _RESERVED_IDENTIFIER_FIXUP_1119.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1135 = _RESERVED_IDENTIFIER_FIXUP_1117;
    _RESERVED_IDENTIFIER_FIXUP_1135.x = _RESERVED_IDENTIFIER_FIXUP_583.x;
    _RESERVED_IDENTIFIER_FIXUP_1135.y = _RESERVED_IDENTIFIER_FIXUP_583.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1135.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_542.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_602 = _RESERVED_IDENTIFIER_FIXUP_1119.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1143;
    _RESERVED_IDENTIFIER_FIXUP_1143.x = _RESERVED_IDENTIFIER_FIXUP_602.x;
    _RESERVED_IDENTIFIER_FIXUP_1143.y = _RESERVED_IDENTIFIER_FIXUP_602.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_612 = _RESERVED_IDENTIFIER_FIXUP_1119.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1147;
    _RESERVED_IDENTIFIER_FIXUP_1147.x = _RESERVED_IDENTIFIER_FIXUP_612.x;
    _RESERVED_IDENTIFIER_FIXUP_1147.y = _RESERVED_IDENTIFIER_FIXUP_612.y;
    _RESERVED_IDENTIFIER_FIXUP_1143.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1143.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_542.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1147.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_680 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1147.xy;
    float param_9 = 0.0;
    vec2 param_10 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193;
    _RESERVED_IDENTIFIER_FIXUP_1193.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_680 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_542 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_8, param_9).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, hdTex1(param_10).w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1198;
    _RESERVED_IDENTIFIER_FIXUP_1198.x = 1.0;
    vec2 param_11 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_725 = _RESERVED_IDENTIFIER_FIXUP_1198.xxx * hdTex0(param_11).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1200;
    _RESERVED_IDENTIFIER_FIXUP_1200.x = _RESERVED_IDENTIFIER_FIXUP_725.x;
    _RESERVED_IDENTIFIER_FIXUP_1200.y = _RESERVED_IDENTIFIER_FIXUP_725.y;
    _RESERVED_IDENTIFIER_FIXUP_1200.z = _RESERVED_IDENTIFIER_FIXUP_725.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1206;
    _RESERVED_IDENTIFIER_FIXUP_1206.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1206.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1206.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_747 = _RESERVED_IDENTIFIER_FIXUP_1200.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1375).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1212;
    _RESERVED_IDENTIFIER_FIXUP_1212.x = _RESERVED_IDENTIFIER_FIXUP_747.x;
    _RESERVED_IDENTIFIER_FIXUP_1212.y = _RESERVED_IDENTIFIER_FIXUP_747.y;
    _RESERVED_IDENTIFIER_FIXUP_1212.z = _RESERVED_IDENTIFIER_FIXUP_747.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_758 = _RESERVED_IDENTIFIER_FIXUP_1212.xyz + _RESERVED_IDENTIFIER_FIXUP_1212.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1218.x = _RESERVED_IDENTIFIER_FIXUP_758.x;
    _RESERVED_IDENTIFIER_FIXUP_1218.y = _RESERVED_IDENTIFIER_FIXUP_758.y;
    _RESERVED_IDENTIFIER_FIXUP_1218.z = _RESERVED_IDENTIFIER_FIXUP_758.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = (_RESERVED_IDENTIFIER_FIXUP_1206.xyz * _RESERVED_IDENTIFIER_FIXUP_1193.xxx) + _RESERVED_IDENTIFIER_FIXUP_1218.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1224;
    _RESERVED_IDENTIFIER_FIXUP_1224.x = _RESERVED_IDENTIFIER_FIXUP_772.x;
    _RESERVED_IDENTIFIER_FIXUP_1224.y = _RESERVED_IDENTIFIER_FIXUP_772.y;
    _RESERVED_IDENTIFIER_FIXUP_1224.z = _RESERVED_IDENTIFIER_FIXUP_772.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_785 = _RESERVED_IDENTIFIER_FIXUP_1224.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1230;
    _RESERVED_IDENTIFIER_FIXUP_1230.x = _RESERVED_IDENTIFIER_FIXUP_785.x;
    _RESERVED_IDENTIFIER_FIXUP_1230.y = _RESERVED_IDENTIFIER_FIXUP_785.y;
    _RESERVED_IDENTIFIER_FIXUP_1230.z = _RESERVED_IDENTIFIER_FIXUP_785.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_800 = _RESERVED_IDENTIFIER_FIXUP_1230.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1236;
    _RESERVED_IDENTIFIER_FIXUP_1236.x = _RESERVED_IDENTIFIER_FIXUP_800.x;
    _RESERVED_IDENTIFIER_FIXUP_1236.y = _RESERVED_IDENTIFIER_FIXUP_800.y;
    _RESERVED_IDENTIFIER_FIXUP_1236.z = _RESERVED_IDENTIFIER_FIXUP_800.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_539;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_541;
    vec4 _RESERVED_IDENTIFIER_FIXUP_837 = hdLod5(param_12, param_13);
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1123.xy;
    float param_15 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_837.y = hdLod5(param_14, param_15).x;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1135.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_837.z = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1143.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_837.w = hdLod5(param_18, param_19).x;
    vec2 param_20 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_993 = hdTex1(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1147.xy;
    float param_22 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_998 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_680 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_837 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_21, param_22).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_993.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1323;
    _RESERVED_IDENTIFIER_FIXUP_1323.x = _RESERVED_IDENTIFIER_FIXUP_998;
    float _RESERVED_IDENTIFIER_FIXUP_1003 = (_RESERVED_IDENTIFIER_FIXUP_998 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1330;
    _RESERVED_IDENTIFIER_FIXUP_1330.x = _RESERVED_IDENTIFIER_FIXUP_1003;
    vec2 param_23 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1015 = hdTex0(param_23);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1020 = _RESERVED_IDENTIFIER_FIXUP_1330.xxx * _RESERVED_IDENTIFIER_FIXUP_1015.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1332;
    _RESERVED_IDENTIFIER_FIXUP_1332.x = _RESERVED_IDENTIFIER_FIXUP_1020.x;
    _RESERVED_IDENTIFIER_FIXUP_1332.y = _RESERVED_IDENTIFIER_FIXUP_1020.y;
    _RESERVED_IDENTIFIER_FIXUP_1332.z = _RESERVED_IDENTIFIER_FIXUP_1020.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1031 = _RESERVED_IDENTIFIER_FIXUP_1015.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1338.x = _RESERVED_IDENTIFIER_FIXUP_1031.x;
    _RESERVED_IDENTIFIER_FIXUP_1338.y = _RESERVED_IDENTIFIER_FIXUP_1031.y;
    _RESERVED_IDENTIFIER_FIXUP_1338.z = _RESERVED_IDENTIFIER_FIXUP_1031.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1042 = _RESERVED_IDENTIFIER_FIXUP_1332.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344;
    _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_1042.x;
    _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_1042.y;
    _RESERVED_IDENTIFIER_FIXUP_1344.z = _RESERVED_IDENTIFIER_FIXUP_1042.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1053 = _RESERVED_IDENTIFIER_FIXUP_1344.xyz + _RESERVED_IDENTIFIER_FIXUP_1344.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1350;
    _RESERVED_IDENTIFIER_FIXUP_1350.x = _RESERVED_IDENTIFIER_FIXUP_1053.x;
    _RESERVED_IDENTIFIER_FIXUP_1350.y = _RESERVED_IDENTIFIER_FIXUP_1053.y;
    _RESERVED_IDENTIFIER_FIXUP_1350.z = _RESERVED_IDENTIFIER_FIXUP_1053.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1067 = (_RESERVED_IDENTIFIER_FIXUP_1338.xyz * _RESERVED_IDENTIFIER_FIXUP_1323.xxx) + _RESERVED_IDENTIFIER_FIXUP_1350.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1356;
    _RESERVED_IDENTIFIER_FIXUP_1356.x = _RESERVED_IDENTIFIER_FIXUP_1067.x;
    _RESERVED_IDENTIFIER_FIXUP_1356.y = _RESERVED_IDENTIFIER_FIXUP_1067.y;
    _RESERVED_IDENTIFIER_FIXUP_1356.z = _RESERVED_IDENTIFIER_FIXUP_1067.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1080 = _RESERVED_IDENTIFIER_FIXUP_1356.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1362;
    _RESERVED_IDENTIFIER_FIXUP_1362.x = _RESERVED_IDENTIFIER_FIXUP_1080.x;
    _RESERVED_IDENTIFIER_FIXUP_1362.y = _RESERVED_IDENTIFIER_FIXUP_1080.y;
    _RESERVED_IDENTIFIER_FIXUP_1362.z = _RESERVED_IDENTIFIER_FIXUP_1080.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1362.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_405 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_414;
    if (_RESERVED_IDENTIFIER_FIXUP_405)
    {
        _RESERVED_IDENTIFIER_FIXUP_414 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_414 = _RESERVED_IDENTIFIER_FIXUP_405;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_414)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_451 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1236.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_478 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1106;
    if (_RESERVED_IDENTIFIER_FIXUP_451 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1106 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_451), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_478);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1106 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_478);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1106;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1003);
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
    vec2 param_11 = v2.xy;
    r1 = hdTex0(param_11);
    vec4 hdB260 = r0;
    vec3 hdB264 = hdB260.xxx * r1.xyz;
    r0.x = hdB264.x;
    r0.y = hdB264.y;
    r0.z = hdB264.z;
    vec4 hdB271 = r1;
    vec3 hdB275 = hdB271.www * v1.xyz;
    r1.x = hdB275.x;
    r1.y = hdB275.y;
    r1.z = hdB275.z;
    vec4 hdB282 = r0;
    vec3 hdB286 = hdB282.xyz * v0.xyz;
    r0.x = hdB286.x;
    r0.y = hdB286.y;
    r0.z = hdB286.z;
    vec4 hdB293 = r0;
    vec4 hdB295 = r0;
    vec3 hdB297 = hdB293.xyz + hdB295.xyz;
    r0.x = hdB297.x;
    r0.y = hdB297.y;
    r0.z = hdB297.z;
    vec4 hdB309 = r0;
    vec3 hdB311 = (r1.xyz * r2.xxx) + hdB309.xyz;
    r0.x = hdB311.x;
    r0.y = hdB311.y;
    r0.z = hdB311.z;
    vec4 hdB318 = r0;
    vec3 hdB325 = hdB318.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB325.x;
    r0.y = hdB325.y;
    r0.z = hdB325.z;
    vec3 hdB340 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB340.x;
    oC0.y = hdB340.y;
    oC0.z = hdB340.z;
    oC0.w = 1.0;
    bool hdB353 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB361;
    if (hdB353)
    {
        hdB361 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB361 = hdB353;
    }
    if (hdB361)
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
    bool _1116 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1126;
    if (_1116)
    {
        _1126 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1126 = _1116;
    }
    if (_1126)
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
        bool _1151 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1166;
        if (!_1151)
        {
            _1166 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1166 = _1151;
        }
        if (_1166)
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
