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
float _RESERVED_IDENTIFIER_FIXUP_1449;
vec4 _RESERVED_IDENTIFIER_FIXUP_1450;


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

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_556 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1175;
    _RESERVED_IDENTIFIER_FIXUP_1175.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_570 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1177;
    _RESERVED_IDENTIFIER_FIXUP_1177.x = _RESERVED_IDENTIFIER_FIXUP_570.x;
    _RESERVED_IDENTIFIER_FIXUP_1177.y = _RESERVED_IDENTIFIER_FIXUP_570.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_580 = _RESERVED_IDENTIFIER_FIXUP_1177.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_1175;
    _RESERVED_IDENTIFIER_FIXUP_1181.x = _RESERVED_IDENTIFIER_FIXUP_580.x;
    _RESERVED_IDENTIFIER_FIXUP_1181.y = _RESERVED_IDENTIFIER_FIXUP_580.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_603 = _RESERVED_IDENTIFIER_FIXUP_1177.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193 = _RESERVED_IDENTIFIER_FIXUP_1175;
    _RESERVED_IDENTIFIER_FIXUP_1193.x = _RESERVED_IDENTIFIER_FIXUP_603.x;
    _RESERVED_IDENTIFIER_FIXUP_1193.y = _RESERVED_IDENTIFIER_FIXUP_603.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_622 = _RESERVED_IDENTIFIER_FIXUP_1177.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1201;
    _RESERVED_IDENTIFIER_FIXUP_1201.x = _RESERVED_IDENTIFIER_FIXUP_622.x;
    _RESERVED_IDENTIFIER_FIXUP_1201.y = _RESERVED_IDENTIFIER_FIXUP_622.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_632 = _RESERVED_IDENTIFIER_FIXUP_1177.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1205;
    _RESERVED_IDENTIFIER_FIXUP_1205.x = _RESERVED_IDENTIFIER_FIXUP_632.x;
    _RESERVED_IDENTIFIER_FIXUP_1205.y = _RESERVED_IDENTIFIER_FIXUP_632.y;
    _RESERVED_IDENTIFIER_FIXUP_1201.w = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1205.w = 0.0;
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_740 = hdTex0(param);
    vec3 _RESERVED_IDENTIFIER_FIXUP_767 = _RESERVED_IDENTIFIER_FIXUP_740.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1449).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270;
    _RESERVED_IDENTIFIER_FIXUP_1270.x = _RESERVED_IDENTIFIER_FIXUP_767.x;
    _RESERVED_IDENTIFIER_FIXUP_1270.y = _RESERVED_IDENTIFIER_FIXUP_767.y;
    _RESERVED_IDENTIFIER_FIXUP_1270.z = _RESERVED_IDENTIFIER_FIXUP_767.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_778 = _RESERVED_IDENTIFIER_FIXUP_1270.xyz + _RESERVED_IDENTIFIER_FIXUP_1270.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1276;
    _RESERVED_IDENTIFIER_FIXUP_1276.x = _RESERVED_IDENTIFIER_FIXUP_778.x;
    _RESERVED_IDENTIFIER_FIXUP_1276.y = _RESERVED_IDENTIFIER_FIXUP_778.y;
    _RESERVED_IDENTIFIER_FIXUP_1276.z = _RESERVED_IDENTIFIER_FIXUP_778.z;
    float _RESERVED_IDENTIFIER_FIXUP_787 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_740.w = _RESERVED_IDENTIFIER_FIXUP_787;
    vec3 _RESERVED_IDENTIFIER_FIXUP_797 = mix(_RESERVED_IDENTIFIER_FIXUP_1276.xyz, _RESERVED_IDENTIFIER_FIXUP_740.xyz, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_740.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1290;
    _RESERVED_IDENTIFIER_FIXUP_1290.x = _RESERVED_IDENTIFIER_FIXUP_797.x;
    _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_797.y;
    _RESERVED_IDENTIFIER_FIXUP_1290.z = _RESERVED_IDENTIFIER_FIXUP_797.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_824 = _RESERVED_IDENTIFIER_FIXUP_1290.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1296.x = _RESERVED_IDENTIFIER_FIXUP_824.x;
    _RESERVED_IDENTIFIER_FIXUP_1296.y = _RESERVED_IDENTIFIER_FIXUP_824.y;
    _RESERVED_IDENTIFIER_FIXUP_1296.z = _RESERVED_IDENTIFIER_FIXUP_824.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_839 = _RESERVED_IDENTIFIER_FIXUP_1296.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1302;
    _RESERVED_IDENTIFIER_FIXUP_1302.x = _RESERVED_IDENTIFIER_FIXUP_839.x;
    _RESERVED_IDENTIFIER_FIXUP_1302.y = _RESERVED_IDENTIFIER_FIXUP_839.y;
    _RESERVED_IDENTIFIER_FIXUP_1302.z = _RESERVED_IDENTIFIER_FIXUP_839.z;
    vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_556.xy;
    float param_2 = _RESERVED_IDENTIFIER_FIXUP_556.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_876 = hdLod5(param_1, param_2);
    vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1181.xy;
    float param_4 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_876.y = hdLod5(param_3, param_4).x;
    vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1193.xy;
    float param_6 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_876.z = hdLod5(param_5, param_6).x;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1201.xy;
    float param_8 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_876.w = hdLod5(param_7, param_8).x;
    vec2 param_9 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1032 = hdTex1(param_9);
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1205.xy;
    float param_11 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1037 = min((clamp((max(abs(texcoord4.x), abs(texcoord4.y)) * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_876 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_10, param_11).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1032.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1389;
    _RESERVED_IDENTIFIER_FIXUP_1389.x = _RESERVED_IDENTIFIER_FIXUP_1037;
    float _RESERVED_IDENTIFIER_FIXUP_1042 = (_RESERVED_IDENTIFIER_FIXUP_1037 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_12 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1054 = hdTex0(param_12);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1452 = vec4(_RESERVED_IDENTIFIER_FIXUP_1042, _RESERVED_IDENTIFIER_FIXUP_1054.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1070 = _RESERVED_IDENTIFIER_FIXUP_1389.xxx * _RESERVED_IDENTIFIER_FIXUP_1452.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1404 = _RESERVED_IDENTIFIER_FIXUP_1452;
    _RESERVED_IDENTIFIER_FIXUP_1404.y = _RESERVED_IDENTIFIER_FIXUP_1070.x;
    _RESERVED_IDENTIFIER_FIXUP_1404.z = _RESERVED_IDENTIFIER_FIXUP_1070.y;
    _RESERVED_IDENTIFIER_FIXUP_1404.w = _RESERVED_IDENTIFIER_FIXUP_1070.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1081 = _RESERVED_IDENTIFIER_FIXUP_1054.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410;
    _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_1081.x;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_1081.y;
    _RESERVED_IDENTIFIER_FIXUP_1410.z = _RESERVED_IDENTIFIER_FIXUP_1081.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1092 = _RESERVED_IDENTIFIER_FIXUP_1410.xyz + _RESERVED_IDENTIFIER_FIXUP_1410.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1416;
    _RESERVED_IDENTIFIER_FIXUP_1416.x = _RESERVED_IDENTIFIER_FIXUP_1092.x;
    _RESERVED_IDENTIFIER_FIXUP_1416.y = _RESERVED_IDENTIFIER_FIXUP_1092.y;
    _RESERVED_IDENTIFIER_FIXUP_1416.z = _RESERVED_IDENTIFIER_FIXUP_1092.z;
    _RESERVED_IDENTIFIER_FIXUP_1054.w = _RESERVED_IDENTIFIER_FIXUP_787;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1111 = mix(_RESERVED_IDENTIFIER_FIXUP_1416.xyz, _RESERVED_IDENTIFIER_FIXUP_1054.xyz, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1054.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1424;
    _RESERVED_IDENTIFIER_FIXUP_1424.x = _RESERVED_IDENTIFIER_FIXUP_1111.x;
    _RESERVED_IDENTIFIER_FIXUP_1424.y = _RESERVED_IDENTIFIER_FIXUP_1111.y;
    _RESERVED_IDENTIFIER_FIXUP_1424.z = _RESERVED_IDENTIFIER_FIXUP_1111.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1125 = (_RESERVED_IDENTIFIER_FIXUP_1424.xyz * _RESERVED_IDENTIFIER_FIXUP_1404.xxx) + _RESERVED_IDENTIFIER_FIXUP_1404.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1430;
    _RESERVED_IDENTIFIER_FIXUP_1430.x = _RESERVED_IDENTIFIER_FIXUP_1125.x;
    _RESERVED_IDENTIFIER_FIXUP_1430.y = _RESERVED_IDENTIFIER_FIXUP_1125.y;
    _RESERVED_IDENTIFIER_FIXUP_1430.z = _RESERVED_IDENTIFIER_FIXUP_1125.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1138 = _RESERVED_IDENTIFIER_FIXUP_1430.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1436;
    _RESERVED_IDENTIFIER_FIXUP_1436.x = _RESERVED_IDENTIFIER_FIXUP_1138.x;
    _RESERVED_IDENTIFIER_FIXUP_1436.y = _RESERVED_IDENTIFIER_FIXUP_1138.y;
    _RESERVED_IDENTIFIER_FIXUP_1436.z = _RESERVED_IDENTIFIER_FIXUP_1138.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1436.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_426 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_435;
    if (_RESERVED_IDENTIFIER_FIXUP_426)
    {
        _RESERVED_IDENTIFIER_FIXUP_435 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_435 = _RESERVED_IDENTIFIER_FIXUP_426;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_435)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_472 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1302.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_498 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1164;
    if (_RESERVED_IDENTIFIER_FIXUP_472 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1164 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_472), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_498);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1164 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_498);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1164;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1042);
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
    vec3 hdB264 = r1.www * v1.xyz;
    r0.y = hdB264.x;
    r0.z = hdB264.y;
    r0.w = hdB264.z;
    vec4 hdB273 = r0;
    vec3 hdB275 = r2.xxx * hdB273.yzw;
    r0.y = hdB275.x;
    r0.z = hdB275.y;
    r0.w = hdB275.z;
    vec3 hdB286 = r1.xyz * v0.xyz;
    r2.x = hdB286.x;
    r2.y = hdB286.y;
    r2.z = hdB286.z;
    vec4 hdB293 = r2;
    vec4 hdB295 = r2;
    vec3 hdB297 = hdB293.xyz + hdB295.xyz;
    r2.x = hdB297.x;
    r2.y = hdB297.y;
    r2.z = hdB297.z;
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec4 hdB312 = r1;
    vec4 hdB314 = r1;
    vec3 hdB320 = mix(r2.xyz, hdB312.xyz, greaterThanEqual(-hdB314.www, vec3(0.0)));
    r1.x = hdB320.x;
    r1.y = hdB320.y;
    r1.z = hdB320.z;
    vec4 hdB329 = r0;
    vec4 hdB332 = r0;
    vec3 hdB334 = (r1.xyz * hdB329.xxx) + hdB332.yzw;
    r0.x = hdB334.x;
    r0.y = hdB334.y;
    r0.z = hdB334.z;
    vec4 hdB341 = r0;
    vec3 hdB348 = hdB341.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB348.x;
    r0.y = hdB348.y;
    r0.z = hdB348.z;
    vec3 hdB363 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB363.x;
    oC0.y = hdB363.y;
    oC0.z = hdB363.z;
    oC0.w = 1.0;
    bool hdB374 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB382;
    if (hdB374)
    {
        hdB382 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB382 = hdB374;
    }
    if (hdB382)
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
    bool _1076 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1086;
    if (_1076)
    {
        _1086 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1086 = _1076;
    }
    if (_1086)
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
        bool _1111 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1126;
        if (!_1111)
        {
            _1126 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1126 = _1111;
        }
        if (_1126)
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
