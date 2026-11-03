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
float _RESERVED_IDENTIFIER_FIXUP_1428;
vec4 _RESERVED_IDENTIFIER_FIXUP_1429;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_552 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_555 = _RESERVED_IDENTIFIER_FIXUP_552.xy;
    float _RESERVED_IDENTIFIER_FIXUP_557 = _RESERVED_IDENTIFIER_FIXUP_552.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_555;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_557;
    vec4 _RESERVED_IDENTIFIER_FIXUP_558 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1160;
    _RESERVED_IDENTIFIER_FIXUP_1160.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_566 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1162;
    _RESERVED_IDENTIFIER_FIXUP_1162.x = _RESERVED_IDENTIFIER_FIXUP_566.x;
    _RESERVED_IDENTIFIER_FIXUP_1162.y = _RESERVED_IDENTIFIER_FIXUP_566.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_576 = _RESERVED_IDENTIFIER_FIXUP_1162.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1166 = _RESERVED_IDENTIFIER_FIXUP_1160;
    _RESERVED_IDENTIFIER_FIXUP_1166.x = _RESERVED_IDENTIFIER_FIXUP_576.x;
    _RESERVED_IDENTIFIER_FIXUP_1166.y = _RESERVED_IDENTIFIER_FIXUP_576.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1166.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_558.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_599 = _RESERVED_IDENTIFIER_FIXUP_1162.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = _RESERVED_IDENTIFIER_FIXUP_1160;
    _RESERVED_IDENTIFIER_FIXUP_1178.x = _RESERVED_IDENTIFIER_FIXUP_599.x;
    _RESERVED_IDENTIFIER_FIXUP_1178.y = _RESERVED_IDENTIFIER_FIXUP_599.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1178.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_558.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_618 = _RESERVED_IDENTIFIER_FIXUP_1162.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_1186.x = _RESERVED_IDENTIFIER_FIXUP_618.x;
    _RESERVED_IDENTIFIER_FIXUP_1186.y = _RESERVED_IDENTIFIER_FIXUP_618.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_628 = _RESERVED_IDENTIFIER_FIXUP_1162.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_1190.x = _RESERVED_IDENTIFIER_FIXUP_628.x;
    _RESERVED_IDENTIFIER_FIXUP_1190.y = _RESERVED_IDENTIFIER_FIXUP_628.y;
    _RESERVED_IDENTIFIER_FIXUP_1186.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1186.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_558.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1190.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_696 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_714 = hdTex1(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1190.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1236;
    _RESERVED_IDENTIFIER_FIXUP_1236.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_696 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_558 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_714.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1241;
    _RESERVED_IDENTIFIER_FIXUP_1241.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_714.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1241.y = 1.0;
    vec2 param_11 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_755 = _RESERVED_IDENTIFIER_FIXUP_1241.yyy * (_RESERVED_IDENTIFIER_FIXUP_1241.xxxx * hdTex0(param_11)).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1248;
    _RESERVED_IDENTIFIER_FIXUP_1248.x = _RESERVED_IDENTIFIER_FIXUP_755.x;
    _RESERVED_IDENTIFIER_FIXUP_1248.y = _RESERVED_IDENTIFIER_FIXUP_755.y;
    _RESERVED_IDENTIFIER_FIXUP_1248.z = _RESERVED_IDENTIFIER_FIXUP_755.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1254;
    _RESERVED_IDENTIFIER_FIXUP_1254.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1254.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1254.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_777 = _RESERVED_IDENTIFIER_FIXUP_1248.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1428).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1260;
    _RESERVED_IDENTIFIER_FIXUP_1260.x = _RESERVED_IDENTIFIER_FIXUP_777.x;
    _RESERVED_IDENTIFIER_FIXUP_1260.y = _RESERVED_IDENTIFIER_FIXUP_777.y;
    _RESERVED_IDENTIFIER_FIXUP_1260.z = _RESERVED_IDENTIFIER_FIXUP_777.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_788 = _RESERVED_IDENTIFIER_FIXUP_1260.xyz + _RESERVED_IDENTIFIER_FIXUP_1260.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1266;
    _RESERVED_IDENTIFIER_FIXUP_1266.x = _RESERVED_IDENTIFIER_FIXUP_788.x;
    _RESERVED_IDENTIFIER_FIXUP_1266.y = _RESERVED_IDENTIFIER_FIXUP_788.y;
    _RESERVED_IDENTIFIER_FIXUP_1266.z = _RESERVED_IDENTIFIER_FIXUP_788.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_802 = (_RESERVED_IDENTIFIER_FIXUP_1254.xyz * _RESERVED_IDENTIFIER_FIXUP_1236.xxx) + _RESERVED_IDENTIFIER_FIXUP_1266.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1272;
    _RESERVED_IDENTIFIER_FIXUP_1272.x = _RESERVED_IDENTIFIER_FIXUP_802.x;
    _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_802.y;
    _RESERVED_IDENTIFIER_FIXUP_1272.z = _RESERVED_IDENTIFIER_FIXUP_802.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_815 = _RESERVED_IDENTIFIER_FIXUP_1272.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278;
    _RESERVED_IDENTIFIER_FIXUP_1278.x = _RESERVED_IDENTIFIER_FIXUP_815.x;
    _RESERVED_IDENTIFIER_FIXUP_1278.y = _RESERVED_IDENTIFIER_FIXUP_815.y;
    _RESERVED_IDENTIFIER_FIXUP_1278.z = _RESERVED_IDENTIFIER_FIXUP_815.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_830 = _RESERVED_IDENTIFIER_FIXUP_1278.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1284;
    _RESERVED_IDENTIFIER_FIXUP_1284.x = _RESERVED_IDENTIFIER_FIXUP_830.x;
    _RESERVED_IDENTIFIER_FIXUP_1284.y = _RESERVED_IDENTIFIER_FIXUP_830.y;
    _RESERVED_IDENTIFIER_FIXUP_1284.z = _RESERVED_IDENTIFIER_FIXUP_830.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_555;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_557;
    vec4 _RESERVED_IDENTIFIER_FIXUP_867 = hdLod5(param_12, param_13);
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1166.xy;
    float param_15 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_867.y = hdLod5(param_14, param_15).x;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1178.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_867.z = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1186.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_867.w = hdLod5(param_18, param_19).x;
    vec2 param_20 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1023 = hdTex1(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1190.xy;
    float param_22 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1028 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_696 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_867 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_21, param_22).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1023.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1371;
    _RESERVED_IDENTIFIER_FIXUP_1371.x = _RESERVED_IDENTIFIER_FIXUP_1028;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1376;
    _RESERVED_IDENTIFIER_FIXUP_1376.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1023.xyz, vec3(1.0)), 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_1043 = (_RESERVED_IDENTIFIER_FIXUP_1028 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1376.y = _RESERVED_IDENTIFIER_FIXUP_1043;
    _RESERVED_IDENTIFIER_FIXUP_1376.y = _RESERVED_IDENTIFIER_FIXUP_1043;
    vec2 param_23 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1059 = _RESERVED_IDENTIFIER_FIXUP_1376.xxxx * hdTex0(param_23);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1064 = _RESERVED_IDENTIFIER_FIXUP_1376.yyy * _RESERVED_IDENTIFIER_FIXUP_1059.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1385;
    _RESERVED_IDENTIFIER_FIXUP_1385.x = _RESERVED_IDENTIFIER_FIXUP_1064.x;
    _RESERVED_IDENTIFIER_FIXUP_1385.y = _RESERVED_IDENTIFIER_FIXUP_1064.y;
    _RESERVED_IDENTIFIER_FIXUP_1385.z = _RESERVED_IDENTIFIER_FIXUP_1064.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1075 = _RESERVED_IDENTIFIER_FIXUP_1059.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1391;
    _RESERVED_IDENTIFIER_FIXUP_1391.x = _RESERVED_IDENTIFIER_FIXUP_1075.x;
    _RESERVED_IDENTIFIER_FIXUP_1391.y = _RESERVED_IDENTIFIER_FIXUP_1075.y;
    _RESERVED_IDENTIFIER_FIXUP_1391.z = _RESERVED_IDENTIFIER_FIXUP_1075.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1086 = _RESERVED_IDENTIFIER_FIXUP_1385.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1397;
    _RESERVED_IDENTIFIER_FIXUP_1397.x = _RESERVED_IDENTIFIER_FIXUP_1086.x;
    _RESERVED_IDENTIFIER_FIXUP_1397.y = _RESERVED_IDENTIFIER_FIXUP_1086.y;
    _RESERVED_IDENTIFIER_FIXUP_1397.z = _RESERVED_IDENTIFIER_FIXUP_1086.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1097 = _RESERVED_IDENTIFIER_FIXUP_1397.xyz + _RESERVED_IDENTIFIER_FIXUP_1397.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1403;
    _RESERVED_IDENTIFIER_FIXUP_1403.x = _RESERVED_IDENTIFIER_FIXUP_1097.x;
    _RESERVED_IDENTIFIER_FIXUP_1403.y = _RESERVED_IDENTIFIER_FIXUP_1097.y;
    _RESERVED_IDENTIFIER_FIXUP_1403.z = _RESERVED_IDENTIFIER_FIXUP_1097.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1111 = (_RESERVED_IDENTIFIER_FIXUP_1391.xyz * _RESERVED_IDENTIFIER_FIXUP_1371.xxx) + _RESERVED_IDENTIFIER_FIXUP_1403.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1409;
    _RESERVED_IDENTIFIER_FIXUP_1409.x = _RESERVED_IDENTIFIER_FIXUP_1111.x;
    _RESERVED_IDENTIFIER_FIXUP_1409.y = _RESERVED_IDENTIFIER_FIXUP_1111.y;
    _RESERVED_IDENTIFIER_FIXUP_1409.z = _RESERVED_IDENTIFIER_FIXUP_1111.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1124 = _RESERVED_IDENTIFIER_FIXUP_1409.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1415;
    _RESERVED_IDENTIFIER_FIXUP_1415.x = _RESERVED_IDENTIFIER_FIXUP_1124.x;
    _RESERVED_IDENTIFIER_FIXUP_1415.y = _RESERVED_IDENTIFIER_FIXUP_1124.y;
    _RESERVED_IDENTIFIER_FIXUP_1415.z = _RESERVED_IDENTIFIER_FIXUP_1124.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1415.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_420 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_429;
    if (_RESERVED_IDENTIFIER_FIXUP_420)
    {
        _RESERVED_IDENTIFIER_FIXUP_429 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_429 = _RESERVED_IDENTIFIER_FIXUP_420;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_429)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_466 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1284.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_493 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1150;
    if (_RESERVED_IDENTIFIER_FIXUP_466 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1150 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_466), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_493);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1150 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_493);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1150;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1043);
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
    r0.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r0.y = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_11 = v2.xy;
    r1 = hdTex0(param_11);
    r1 = r0.xxxx * r1;
    vec4 hdB275 = r0;
    vec3 hdB279 = hdB275.yyy * r1.xyz;
    r0.x = hdB279.x;
    r0.y = hdB279.y;
    r0.z = hdB279.z;
    vec4 hdB286 = r1;
    vec3 hdB290 = hdB286.www * v1.xyz;
    r1.x = hdB290.x;
    r1.y = hdB290.y;
    r1.z = hdB290.z;
    vec4 hdB297 = r0;
    vec3 hdB301 = hdB297.xyz * v0.xyz;
    r0.x = hdB301.x;
    r0.y = hdB301.y;
    r0.z = hdB301.z;
    vec4 hdB308 = r0;
    vec4 hdB310 = r0;
    vec3 hdB312 = hdB308.xyz + hdB310.xyz;
    r0.x = hdB312.x;
    r0.y = hdB312.y;
    r0.z = hdB312.z;
    vec4 hdB324 = r0;
    vec3 hdB326 = (r1.xyz * r2.xxx) + hdB324.xyz;
    r0.x = hdB326.x;
    r0.y = hdB326.y;
    r0.z = hdB326.z;
    vec4 hdB333 = r0;
    vec3 hdB340 = hdB333.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB340.x;
    r0.y = hdB340.y;
    r0.z = hdB340.z;
    vec3 hdB355 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB355.x;
    oC0.y = hdB355.y;
    oC0.z = hdB355.z;
    oC0.w = 1.0;
    bool hdB368 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB376;
    if (hdB368)
    {
        hdB376 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB376 = hdB368;
    }
    if (hdB376)
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
    bool _1153 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1163;
    if (_1153)
    {
        _1163 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1163 = _1153;
    }
    if (_1163)
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
        bool _1188 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1203;
        if (!_1188)
        {
            _1203 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1203 = _1188;
        }
        if (_1203)
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
