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
float _RESERVED_IDENTIFIER_FIXUP_1360;
vec4 _RESERVED_IDENTIFIER_FIXUP_1361;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_537 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_540 = _RESERVED_IDENTIFIER_FIXUP_537.xy;
    float _RESERVED_IDENTIFIER_FIXUP_542 = _RESERVED_IDENTIFIER_FIXUP_537.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_540;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_542;
    vec4 _RESERVED_IDENTIFIER_FIXUP_543 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_546 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_550 = _RESERVED_IDENTIFIER_FIXUP_546.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_1114.w = _RESERVED_IDENTIFIER_FIXUP_550;
    vec2 _RESERVED_IDENTIFIER_FIXUP_554 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_556 = _RESERVED_IDENTIFIER_FIXUP_554.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1116 = _RESERVED_IDENTIFIER_FIXUP_543;
    _RESERVED_IDENTIFIER_FIXUP_1116.y = _RESERVED_IDENTIFIER_FIXUP_556;
    float _RESERVED_IDENTIFIER_FIXUP_558 = _RESERVED_IDENTIFIER_FIXUP_554.y;
    _RESERVED_IDENTIFIER_FIXUP_1116.z = _RESERVED_IDENTIFIER_FIXUP_558;
    vec2 _RESERVED_IDENTIFIER_FIXUP_564 = _RESERVED_IDENTIFIER_FIXUP_1116.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_1120.x = _RESERVED_IDENTIFIER_FIXUP_564.x;
    _RESERVED_IDENTIFIER_FIXUP_1120.y = _RESERVED_IDENTIFIER_FIXUP_564.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1120.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_550;
    float _RESERVED_IDENTIFIER_FIXUP_579 = _RESERVED_IDENTIFIER_FIXUP_543.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1116.x = _RESERVED_IDENTIFIER_FIXUP_579;
    vec2 _RESERVED_IDENTIFIER_FIXUP_593 = _RESERVED_IDENTIFIER_FIXUP_1116.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1133 = _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_1133.x = _RESERVED_IDENTIFIER_FIXUP_593.x;
    _RESERVED_IDENTIFIER_FIXUP_1133.y = _RESERVED_IDENTIFIER_FIXUP_593.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1133.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_550;
    float _RESERVED_IDENTIFIER_FIXUP_608 = _RESERVED_IDENTIFIER_FIXUP_579 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1116.x = _RESERVED_IDENTIFIER_FIXUP_608;
    vec2 _RESERVED_IDENTIFIER_FIXUP_615 = _RESERVED_IDENTIFIER_FIXUP_1116.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1142;
    _RESERVED_IDENTIFIER_FIXUP_1142.x = _RESERVED_IDENTIFIER_FIXUP_615.x;
    _RESERVED_IDENTIFIER_FIXUP_1142.y = _RESERVED_IDENTIFIER_FIXUP_615.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_625 = _RESERVED_IDENTIFIER_FIXUP_1116.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1146;
    _RESERVED_IDENTIFIER_FIXUP_1146.x = _RESERVED_IDENTIFIER_FIXUP_625.x;
    _RESERVED_IDENTIFIER_FIXUP_1146.y = _RESERVED_IDENTIFIER_FIXUP_625.y;
    _RESERVED_IDENTIFIER_FIXUP_1142.w = _RESERVED_IDENTIFIER_FIXUP_550;
    _RESERVED_IDENTIFIER_FIXUP_1146.w = _RESERVED_IDENTIFIER_FIXUP_550;
    float _RESERVED_IDENTIFIER_FIXUP_679 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1142.xy;
    float param_7 = _RESERVED_IDENTIFIER_FIXUP_550;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1146.xy;
    float param_9 = _RESERVED_IDENTIFIER_FIXUP_550;
    vec2 param_10 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184;
    _RESERVED_IDENTIFIER_FIXUP_1184.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_679 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_608 + hdLod5(param_6, param_7).x) + hdLod5(param_8, param_9).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, hdTex1(param_10).w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1189;
    _RESERVED_IDENTIFIER_FIXUP_1189.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_724 = _RESERVED_IDENTIFIER_FIXUP_1189.xxx * OptTex0( texcoord0.xyz).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1191;
    _RESERVED_IDENTIFIER_FIXUP_1191.x = _RESERVED_IDENTIFIER_FIXUP_724.x;
    _RESERVED_IDENTIFIER_FIXUP_1191.y = _RESERVED_IDENTIFIER_FIXUP_724.y;
    _RESERVED_IDENTIFIER_FIXUP_1191.z = _RESERVED_IDENTIFIER_FIXUP_724.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1197;
    _RESERVED_IDENTIFIER_FIXUP_1197.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1197.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1197.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_746 = _RESERVED_IDENTIFIER_FIXUP_1191.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1360).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1203;
    _RESERVED_IDENTIFIER_FIXUP_1203.x = _RESERVED_IDENTIFIER_FIXUP_746.x;
    _RESERVED_IDENTIFIER_FIXUP_1203.y = _RESERVED_IDENTIFIER_FIXUP_746.y;
    _RESERVED_IDENTIFIER_FIXUP_1203.z = _RESERVED_IDENTIFIER_FIXUP_746.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_757 = _RESERVED_IDENTIFIER_FIXUP_1203.xyz + _RESERVED_IDENTIFIER_FIXUP_1203.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1209;
    _RESERVED_IDENTIFIER_FIXUP_1209.x = _RESERVED_IDENTIFIER_FIXUP_757.x;
    _RESERVED_IDENTIFIER_FIXUP_1209.y = _RESERVED_IDENTIFIER_FIXUP_757.y;
    _RESERVED_IDENTIFIER_FIXUP_1209.z = _RESERVED_IDENTIFIER_FIXUP_757.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_771 = (_RESERVED_IDENTIFIER_FIXUP_1197.xyz * _RESERVED_IDENTIFIER_FIXUP_1184.xxx) + _RESERVED_IDENTIFIER_FIXUP_1209.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_1215.x = _RESERVED_IDENTIFIER_FIXUP_771.x;
    _RESERVED_IDENTIFIER_FIXUP_1215.y = _RESERVED_IDENTIFIER_FIXUP_771.y;
    _RESERVED_IDENTIFIER_FIXUP_1215.z = _RESERVED_IDENTIFIER_FIXUP_771.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_784 = _RESERVED_IDENTIFIER_FIXUP_1215.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1221;
    _RESERVED_IDENTIFIER_FIXUP_1221.x = _RESERVED_IDENTIFIER_FIXUP_784.x;
    _RESERVED_IDENTIFIER_FIXUP_1221.y = _RESERVED_IDENTIFIER_FIXUP_784.y;
    _RESERVED_IDENTIFIER_FIXUP_1221.z = _RESERVED_IDENTIFIER_FIXUP_784.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_799 = _RESERVED_IDENTIFIER_FIXUP_1221.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1227;
    _RESERVED_IDENTIFIER_FIXUP_1227.x = _RESERVED_IDENTIFIER_FIXUP_799.x;
    _RESERVED_IDENTIFIER_FIXUP_1227.y = _RESERVED_IDENTIFIER_FIXUP_799.y;
    _RESERVED_IDENTIFIER_FIXUP_1227.z = _RESERVED_IDENTIFIER_FIXUP_799.z;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_540;
    float param_12 = _RESERVED_IDENTIFIER_FIXUP_542;
    vec4 _RESERVED_IDENTIFIER_FIXUP_836 = hdLod5(param_11, param_12);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1240 = _RESERVED_IDENTIFIER_FIXUP_836;
    _RESERVED_IDENTIFIER_FIXUP_1240.y = _RESERVED_IDENTIFIER_FIXUP_556;
    _RESERVED_IDENTIFIER_FIXUP_1240.z = _RESERVED_IDENTIFIER_FIXUP_558;
    vec2 _RESERVED_IDENTIFIER_FIXUP_857 = _RESERVED_IDENTIFIER_FIXUP_1240.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1244 = _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_1244.x = _RESERVED_IDENTIFIER_FIXUP_857.x;
    _RESERVED_IDENTIFIER_FIXUP_1244.y = _RESERVED_IDENTIFIER_FIXUP_857.y;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1244.xy;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_550;
    float _RESERVED_IDENTIFIER_FIXUP_872 = _RESERVED_IDENTIFIER_FIXUP_836.x + hdLod5(param_13, param_14).x;
    _RESERVED_IDENTIFIER_FIXUP_1240.x = _RESERVED_IDENTIFIER_FIXUP_872;
    vec2 _RESERVED_IDENTIFIER_FIXUP_886 = _RESERVED_IDENTIFIER_FIXUP_1240.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_1257.x = _RESERVED_IDENTIFIER_FIXUP_886.x;
    _RESERVED_IDENTIFIER_FIXUP_1257.y = _RESERVED_IDENTIFIER_FIXUP_886.y;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1257.xy;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_550;
    float _RESERVED_IDENTIFIER_FIXUP_901 = _RESERVED_IDENTIFIER_FIXUP_872 + hdLod5(param_15, param_16).x;
    _RESERVED_IDENTIFIER_FIXUP_1240.x = _RESERVED_IDENTIFIER_FIXUP_901;
    vec2 _RESERVED_IDENTIFIER_FIXUP_908 = _RESERVED_IDENTIFIER_FIXUP_1240.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1266;
    _RESERVED_IDENTIFIER_FIXUP_1266.x = _RESERVED_IDENTIFIER_FIXUP_908.x;
    _RESERVED_IDENTIFIER_FIXUP_1266.y = _RESERVED_IDENTIFIER_FIXUP_908.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_918 = _RESERVED_IDENTIFIER_FIXUP_1240.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270;
    _RESERVED_IDENTIFIER_FIXUP_1270.x = _RESERVED_IDENTIFIER_FIXUP_918.x;
    _RESERVED_IDENTIFIER_FIXUP_1270.y = _RESERVED_IDENTIFIER_FIXUP_918.y;
    _RESERVED_IDENTIFIER_FIXUP_1266.w = _RESERVED_IDENTIFIER_FIXUP_550;
    _RESERVED_IDENTIFIER_FIXUP_1270.w = _RESERVED_IDENTIFIER_FIXUP_550;
    vec2 param_17 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_990 = hdTex1(param_17);
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1266.xy;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_550;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1270.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_550;
    float _RESERVED_IDENTIFIER_FIXUP_995 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_679 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_901 + hdLod5(param_18, param_19).x) + hdLod5(param_20, param_21).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_990.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1308;
    _RESERVED_IDENTIFIER_FIXUP_1308.x = _RESERVED_IDENTIFIER_FIXUP_995;
    float _RESERVED_IDENTIFIER_FIXUP_1000 = (_RESERVED_IDENTIFIER_FIXUP_995 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315;
    _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_1000;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1012 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1017 = _RESERVED_IDENTIFIER_FIXUP_1315.xxx * _RESERVED_IDENTIFIER_FIXUP_1012.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1317;
    _RESERVED_IDENTIFIER_FIXUP_1317.x = _RESERVED_IDENTIFIER_FIXUP_1017.x;
    _RESERVED_IDENTIFIER_FIXUP_1317.y = _RESERVED_IDENTIFIER_FIXUP_1017.y;
    _RESERVED_IDENTIFIER_FIXUP_1317.z = _RESERVED_IDENTIFIER_FIXUP_1017.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1028 = _RESERVED_IDENTIFIER_FIXUP_1012.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1323;
    _RESERVED_IDENTIFIER_FIXUP_1323.x = _RESERVED_IDENTIFIER_FIXUP_1028.x;
    _RESERVED_IDENTIFIER_FIXUP_1323.y = _RESERVED_IDENTIFIER_FIXUP_1028.y;
    _RESERVED_IDENTIFIER_FIXUP_1323.z = _RESERVED_IDENTIFIER_FIXUP_1028.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1039 = _RESERVED_IDENTIFIER_FIXUP_1317.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1329;
    _RESERVED_IDENTIFIER_FIXUP_1329.x = _RESERVED_IDENTIFIER_FIXUP_1039.x;
    _RESERVED_IDENTIFIER_FIXUP_1329.y = _RESERVED_IDENTIFIER_FIXUP_1039.y;
    _RESERVED_IDENTIFIER_FIXUP_1329.z = _RESERVED_IDENTIFIER_FIXUP_1039.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1050 = _RESERVED_IDENTIFIER_FIXUP_1329.xyz + _RESERVED_IDENTIFIER_FIXUP_1329.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1335;
    _RESERVED_IDENTIFIER_FIXUP_1335.x = _RESERVED_IDENTIFIER_FIXUP_1050.x;
    _RESERVED_IDENTIFIER_FIXUP_1335.y = _RESERVED_IDENTIFIER_FIXUP_1050.y;
    _RESERVED_IDENTIFIER_FIXUP_1335.z = _RESERVED_IDENTIFIER_FIXUP_1050.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1064 = (_RESERVED_IDENTIFIER_FIXUP_1323.xyz * _RESERVED_IDENTIFIER_FIXUP_1308.xxx) + _RESERVED_IDENTIFIER_FIXUP_1335.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1341;
    _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_1064.x;
    _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_1064.y;
    _RESERVED_IDENTIFIER_FIXUP_1341.z = _RESERVED_IDENTIFIER_FIXUP_1064.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1077 = _RESERVED_IDENTIFIER_FIXUP_1341.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347;
    _RESERVED_IDENTIFIER_FIXUP_1347.x = _RESERVED_IDENTIFIER_FIXUP_1077.x;
    _RESERVED_IDENTIFIER_FIXUP_1347.y = _RESERVED_IDENTIFIER_FIXUP_1077.y;
    _RESERVED_IDENTIFIER_FIXUP_1347.z = _RESERVED_IDENTIFIER_FIXUP_1077.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1347.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1227.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_478 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1103;
    if (_RESERVED_IDENTIFIER_FIXUP_451 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1103 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_451), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_478);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1103 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_478);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1103;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1000);
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
    r1 = OptTex0( v2.xyz);
    vec4 hdB259 = r0;
    vec3 hdB263 = hdB259.xxx * r1.xyz;
    r0.x = hdB263.x;
    r0.y = hdB263.y;
    r0.z = hdB263.z;
    vec4 hdB270 = r1;
    vec3 hdB274 = hdB270.www * v1.xyz;
    r1.x = hdB274.x;
    r1.y = hdB274.y;
    r1.z = hdB274.z;
    vec4 hdB281 = r0;
    vec3 hdB285 = hdB281.xyz * v0.xyz;
    r0.x = hdB285.x;
    r0.y = hdB285.y;
    r0.z = hdB285.z;
    vec4 hdB292 = r0;
    vec4 hdB294 = r0;
    vec3 hdB296 = hdB292.xyz + hdB294.xyz;
    r0.x = hdB296.x;
    r0.y = hdB296.y;
    r0.z = hdB296.z;
    vec4 hdB308 = r0;
    vec3 hdB310 = (r1.xyz * r2.xxx) + hdB308.xyz;
    r0.x = hdB310.x;
    r0.y = hdB310.y;
    r0.z = hdB310.z;
    vec4 hdB317 = r0;
    vec3 hdB324 = hdB317.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB324.x;
    r0.y = hdB324.y;
    r0.z = hdB324.z;
    vec3 hdB339 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB339.x;
    oC0.y = hdB339.y;
    oC0.z = hdB339.z;
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
    bool _1193 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1203;
    if (_1193)
    {
        _1203 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1203 = _1193;
    }
    if (_1203)
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
        bool _1228 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1243;
        if (!_1228)
        {
            _1243 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1243 = _1228;
        }
        if (_1243)
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
