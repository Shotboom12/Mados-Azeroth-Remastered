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
float _RESERVED_IDENTIFIER_FIXUP_1357;
vec4 _RESERVED_IDENTIFIER_FIXUP_1358;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_534 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_537 = _RESERVED_IDENTIFIER_FIXUP_534.xy;
    float _RESERVED_IDENTIFIER_FIXUP_539 = _RESERVED_IDENTIFIER_FIXUP_534.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_537;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_539;
    vec4 _RESERVED_IDENTIFIER_FIXUP_540 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_543 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_547 = _RESERVED_IDENTIFIER_FIXUP_543.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1111;
    _RESERVED_IDENTIFIER_FIXUP_1111.w = _RESERVED_IDENTIFIER_FIXUP_547;
    vec2 _RESERVED_IDENTIFIER_FIXUP_551 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_553 = _RESERVED_IDENTIFIER_FIXUP_551.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1113 = _RESERVED_IDENTIFIER_FIXUP_540;
    _RESERVED_IDENTIFIER_FIXUP_1113.y = _RESERVED_IDENTIFIER_FIXUP_553;
    float _RESERVED_IDENTIFIER_FIXUP_555 = _RESERVED_IDENTIFIER_FIXUP_551.y;
    _RESERVED_IDENTIFIER_FIXUP_1113.z = _RESERVED_IDENTIFIER_FIXUP_555;
    vec2 _RESERVED_IDENTIFIER_FIXUP_561 = _RESERVED_IDENTIFIER_FIXUP_1113.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1111;
    _RESERVED_IDENTIFIER_FIXUP_1117.x = _RESERVED_IDENTIFIER_FIXUP_561.x;
    _RESERVED_IDENTIFIER_FIXUP_1117.y = _RESERVED_IDENTIFIER_FIXUP_561.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1117.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_547;
    float _RESERVED_IDENTIFIER_FIXUP_576 = _RESERVED_IDENTIFIER_FIXUP_540.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1113.x = _RESERVED_IDENTIFIER_FIXUP_576;
    vec2 _RESERVED_IDENTIFIER_FIXUP_590 = _RESERVED_IDENTIFIER_FIXUP_1113.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1130 = _RESERVED_IDENTIFIER_FIXUP_1111;
    _RESERVED_IDENTIFIER_FIXUP_1130.x = _RESERVED_IDENTIFIER_FIXUP_590.x;
    _RESERVED_IDENTIFIER_FIXUP_1130.y = _RESERVED_IDENTIFIER_FIXUP_590.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1130.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_547;
    float _RESERVED_IDENTIFIER_FIXUP_605 = _RESERVED_IDENTIFIER_FIXUP_576 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1113.x = _RESERVED_IDENTIFIER_FIXUP_605;
    vec2 _RESERVED_IDENTIFIER_FIXUP_612 = _RESERVED_IDENTIFIER_FIXUP_1113.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1139;
    _RESERVED_IDENTIFIER_FIXUP_1139.x = _RESERVED_IDENTIFIER_FIXUP_612.x;
    _RESERVED_IDENTIFIER_FIXUP_1139.y = _RESERVED_IDENTIFIER_FIXUP_612.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_622 = _RESERVED_IDENTIFIER_FIXUP_1113.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1143;
    _RESERVED_IDENTIFIER_FIXUP_1143.x = _RESERVED_IDENTIFIER_FIXUP_622.x;
    _RESERVED_IDENTIFIER_FIXUP_1143.y = _RESERVED_IDENTIFIER_FIXUP_622.y;
    _RESERVED_IDENTIFIER_FIXUP_1139.w = _RESERVED_IDENTIFIER_FIXUP_547;
    _RESERVED_IDENTIFIER_FIXUP_1143.w = _RESERVED_IDENTIFIER_FIXUP_547;
    float _RESERVED_IDENTIFIER_FIXUP_676 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1139.xy;
    float param_7 = _RESERVED_IDENTIFIER_FIXUP_547;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1143.xy;
    float param_9 = _RESERVED_IDENTIFIER_FIXUP_547;
    vec2 param_10 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181;
    _RESERVED_IDENTIFIER_FIXUP_1181.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_676 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_605 + hdLod5(param_6, param_7).x) + hdLod5(param_8, param_9).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, hdTex1(param_10).w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_1186.x = 1.0;
    vec2 param_11 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_721 = _RESERVED_IDENTIFIER_FIXUP_1186.xxx * hdTex0(param_11).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1188;
    _RESERVED_IDENTIFIER_FIXUP_1188.x = _RESERVED_IDENTIFIER_FIXUP_721.x;
    _RESERVED_IDENTIFIER_FIXUP_1188.y = _RESERVED_IDENTIFIER_FIXUP_721.y;
    _RESERVED_IDENTIFIER_FIXUP_1188.z = _RESERVED_IDENTIFIER_FIXUP_721.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1194;
    _RESERVED_IDENTIFIER_FIXUP_1194.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1194.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1194.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_743 = _RESERVED_IDENTIFIER_FIXUP_1188.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1357).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1200;
    _RESERVED_IDENTIFIER_FIXUP_1200.x = _RESERVED_IDENTIFIER_FIXUP_743.x;
    _RESERVED_IDENTIFIER_FIXUP_1200.y = _RESERVED_IDENTIFIER_FIXUP_743.y;
    _RESERVED_IDENTIFIER_FIXUP_1200.z = _RESERVED_IDENTIFIER_FIXUP_743.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_754 = _RESERVED_IDENTIFIER_FIXUP_1200.xyz + _RESERVED_IDENTIFIER_FIXUP_1200.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1206;
    _RESERVED_IDENTIFIER_FIXUP_1206.x = _RESERVED_IDENTIFIER_FIXUP_754.x;
    _RESERVED_IDENTIFIER_FIXUP_1206.y = _RESERVED_IDENTIFIER_FIXUP_754.y;
    _RESERVED_IDENTIFIER_FIXUP_1206.z = _RESERVED_IDENTIFIER_FIXUP_754.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_768 = (_RESERVED_IDENTIFIER_FIXUP_1194.xyz * _RESERVED_IDENTIFIER_FIXUP_1181.xxx) + _RESERVED_IDENTIFIER_FIXUP_1206.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1212;
    _RESERVED_IDENTIFIER_FIXUP_1212.x = _RESERVED_IDENTIFIER_FIXUP_768.x;
    _RESERVED_IDENTIFIER_FIXUP_1212.y = _RESERVED_IDENTIFIER_FIXUP_768.y;
    _RESERVED_IDENTIFIER_FIXUP_1212.z = _RESERVED_IDENTIFIER_FIXUP_768.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_781 = _RESERVED_IDENTIFIER_FIXUP_1212.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1218.x = _RESERVED_IDENTIFIER_FIXUP_781.x;
    _RESERVED_IDENTIFIER_FIXUP_1218.y = _RESERVED_IDENTIFIER_FIXUP_781.y;
    _RESERVED_IDENTIFIER_FIXUP_1218.z = _RESERVED_IDENTIFIER_FIXUP_781.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_796 = _RESERVED_IDENTIFIER_FIXUP_1218.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1224;
    _RESERVED_IDENTIFIER_FIXUP_1224.x = _RESERVED_IDENTIFIER_FIXUP_796.x;
    _RESERVED_IDENTIFIER_FIXUP_1224.y = _RESERVED_IDENTIFIER_FIXUP_796.y;
    _RESERVED_IDENTIFIER_FIXUP_1224.z = _RESERVED_IDENTIFIER_FIXUP_796.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_537;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_539;
    vec4 _RESERVED_IDENTIFIER_FIXUP_833 = hdLod5(param_12, param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1237 = _RESERVED_IDENTIFIER_FIXUP_833;
    _RESERVED_IDENTIFIER_FIXUP_1237.y = _RESERVED_IDENTIFIER_FIXUP_553;
    _RESERVED_IDENTIFIER_FIXUP_1237.z = _RESERVED_IDENTIFIER_FIXUP_555;
    vec2 _RESERVED_IDENTIFIER_FIXUP_854 = _RESERVED_IDENTIFIER_FIXUP_1237.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1241 = _RESERVED_IDENTIFIER_FIXUP_1111;
    _RESERVED_IDENTIFIER_FIXUP_1241.x = _RESERVED_IDENTIFIER_FIXUP_854.x;
    _RESERVED_IDENTIFIER_FIXUP_1241.y = _RESERVED_IDENTIFIER_FIXUP_854.y;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1241.xy;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_547;
    float _RESERVED_IDENTIFIER_FIXUP_869 = _RESERVED_IDENTIFIER_FIXUP_833.x + hdLod5(param_14, param_15).x;
    _RESERVED_IDENTIFIER_FIXUP_1237.x = _RESERVED_IDENTIFIER_FIXUP_869;
    vec2 _RESERVED_IDENTIFIER_FIXUP_883 = _RESERVED_IDENTIFIER_FIXUP_1237.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1254 = _RESERVED_IDENTIFIER_FIXUP_1111;
    _RESERVED_IDENTIFIER_FIXUP_1254.x = _RESERVED_IDENTIFIER_FIXUP_883.x;
    _RESERVED_IDENTIFIER_FIXUP_1254.y = _RESERVED_IDENTIFIER_FIXUP_883.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1254.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_547;
    float _RESERVED_IDENTIFIER_FIXUP_898 = _RESERVED_IDENTIFIER_FIXUP_869 + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1237.x = _RESERVED_IDENTIFIER_FIXUP_898;
    vec2 _RESERVED_IDENTIFIER_FIXUP_905 = _RESERVED_IDENTIFIER_FIXUP_1237.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1263;
    _RESERVED_IDENTIFIER_FIXUP_1263.x = _RESERVED_IDENTIFIER_FIXUP_905.x;
    _RESERVED_IDENTIFIER_FIXUP_1263.y = _RESERVED_IDENTIFIER_FIXUP_905.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_915 = _RESERVED_IDENTIFIER_FIXUP_1237.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1267;
    _RESERVED_IDENTIFIER_FIXUP_1267.x = _RESERVED_IDENTIFIER_FIXUP_915.x;
    _RESERVED_IDENTIFIER_FIXUP_1267.y = _RESERVED_IDENTIFIER_FIXUP_915.y;
    _RESERVED_IDENTIFIER_FIXUP_1263.w = _RESERVED_IDENTIFIER_FIXUP_547;
    _RESERVED_IDENTIFIER_FIXUP_1267.w = _RESERVED_IDENTIFIER_FIXUP_547;
    vec2 param_18 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_987 = hdTex1(param_18);
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1263.xy;
    float param_20 = _RESERVED_IDENTIFIER_FIXUP_547;
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1267.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_547;
    float _RESERVED_IDENTIFIER_FIXUP_992 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_676 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_898 + hdLod5(param_19, param_20).x) + hdLod5(param_21, param_22).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_987.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1305;
    _RESERVED_IDENTIFIER_FIXUP_1305.x = _RESERVED_IDENTIFIER_FIXUP_992;
    float _RESERVED_IDENTIFIER_FIXUP_997 = (_RESERVED_IDENTIFIER_FIXUP_992 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_997;
    vec2 param_23 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1009 = hdTex0(param_23);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1014 = _RESERVED_IDENTIFIER_FIXUP_1312.xxx * _RESERVED_IDENTIFIER_FIXUP_1009.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1314;
    _RESERVED_IDENTIFIER_FIXUP_1314.x = _RESERVED_IDENTIFIER_FIXUP_1014.x;
    _RESERVED_IDENTIFIER_FIXUP_1314.y = _RESERVED_IDENTIFIER_FIXUP_1014.y;
    _RESERVED_IDENTIFIER_FIXUP_1314.z = _RESERVED_IDENTIFIER_FIXUP_1014.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1025 = _RESERVED_IDENTIFIER_FIXUP_1009.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1320;
    _RESERVED_IDENTIFIER_FIXUP_1320.x = _RESERVED_IDENTIFIER_FIXUP_1025.x;
    _RESERVED_IDENTIFIER_FIXUP_1320.y = _RESERVED_IDENTIFIER_FIXUP_1025.y;
    _RESERVED_IDENTIFIER_FIXUP_1320.z = _RESERVED_IDENTIFIER_FIXUP_1025.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1036 = _RESERVED_IDENTIFIER_FIXUP_1314.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1326;
    _RESERVED_IDENTIFIER_FIXUP_1326.x = _RESERVED_IDENTIFIER_FIXUP_1036.x;
    _RESERVED_IDENTIFIER_FIXUP_1326.y = _RESERVED_IDENTIFIER_FIXUP_1036.y;
    _RESERVED_IDENTIFIER_FIXUP_1326.z = _RESERVED_IDENTIFIER_FIXUP_1036.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1047 = _RESERVED_IDENTIFIER_FIXUP_1326.xyz + _RESERVED_IDENTIFIER_FIXUP_1326.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1332;
    _RESERVED_IDENTIFIER_FIXUP_1332.x = _RESERVED_IDENTIFIER_FIXUP_1047.x;
    _RESERVED_IDENTIFIER_FIXUP_1332.y = _RESERVED_IDENTIFIER_FIXUP_1047.y;
    _RESERVED_IDENTIFIER_FIXUP_1332.z = _RESERVED_IDENTIFIER_FIXUP_1047.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1061 = (_RESERVED_IDENTIFIER_FIXUP_1320.xyz * _RESERVED_IDENTIFIER_FIXUP_1305.xxx) + _RESERVED_IDENTIFIER_FIXUP_1332.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1338.x = _RESERVED_IDENTIFIER_FIXUP_1061.x;
    _RESERVED_IDENTIFIER_FIXUP_1338.y = _RESERVED_IDENTIFIER_FIXUP_1061.y;
    _RESERVED_IDENTIFIER_FIXUP_1338.z = _RESERVED_IDENTIFIER_FIXUP_1061.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1074 = _RESERVED_IDENTIFIER_FIXUP_1338.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344;
    _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_1074.x;
    _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_1074.y;
    _RESERVED_IDENTIFIER_FIXUP_1344.z = _RESERVED_IDENTIFIER_FIXUP_1074.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1344.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_402 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_411;
    if (_RESERVED_IDENTIFIER_FIXUP_402)
    {
        _RESERVED_IDENTIFIER_FIXUP_411 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_411 = _RESERVED_IDENTIFIER_FIXUP_402;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_411)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_448 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1224.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_475 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1100;
    if (_RESERVED_IDENTIFIER_FIXUP_448 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1100 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_448), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_475);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1100 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_475);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1100;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_997);
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
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB62 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB62.x;
    r1.w = hdB62.y;
    vec2 hdB72 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB72.x;
    r0.z = hdB72.y;
    vec2 hdB94 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB94.x;
    r1.y = hdB94.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB114 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB114.x;
    r1.w = hdB114.y;
    vec2 hdB125 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB125.x;
    r1.y = hdB125.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB148 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB148.x;
    r1.y = hdB148.y;
    vec2 hdB159 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB159.x;
    r2.y = hdB159.y;
    vec2 hdB166 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB166.x;
    r1.w = hdB166.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB185 = vec2(1.0, 0.0) * v4.zx;
    r2.z = hdB185.x;
    r2.w = hdB185.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
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
    vec4 hdB256 = r0;
    vec3 hdB260 = hdB256.xxx * r1.xyz;
    r0.x = hdB260.x;
    r0.y = hdB260.y;
    r0.z = hdB260.z;
    vec4 hdB267 = r1;
    vec3 hdB271 = hdB267.www * v1.xyz;
    r1.x = hdB271.x;
    r1.y = hdB271.y;
    r1.z = hdB271.z;
    vec4 hdB278 = r0;
    vec3 hdB282 = hdB278.xyz * v0.xyz;
    r0.x = hdB282.x;
    r0.y = hdB282.y;
    r0.z = hdB282.z;
    vec4 hdB289 = r0;
    vec4 hdB291 = r0;
    vec3 hdB293 = hdB289.xyz + hdB291.xyz;
    r0.x = hdB293.x;
    r0.y = hdB293.y;
    r0.z = hdB293.z;
    vec4 hdB305 = r0;
    vec3 hdB307 = (r1.xyz * r2.xxx) + hdB305.xyz;
    r0.x = hdB307.x;
    r0.y = hdB307.y;
    r0.z = hdB307.z;
    vec4 hdB314 = r0;
    vec3 hdB321 = hdB314.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB321.x;
    r0.y = hdB321.y;
    r0.z = hdB321.z;
    vec3 hdB336 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB336.x;
    oC0.y = hdB336.y;
    oC0.z = hdB336.z;
    oC0.w = 1.0;
    bool hdB350 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB358;
    if (hdB350)
    {
        hdB358 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB358 = hdB350;
    }
    if (hdB358)
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
    bool _1219 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1229;
    if (_1219)
    {
        _1229 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1229 = _1219;
    }
    if (_1229)
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
        bool _1254 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1269;
        if (!_1254)
        {
            _1269 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1269 = _1254;
        }
        if (_1269)
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
