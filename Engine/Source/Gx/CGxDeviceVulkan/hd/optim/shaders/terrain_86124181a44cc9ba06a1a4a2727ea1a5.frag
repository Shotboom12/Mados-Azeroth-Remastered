#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1412;
vec4 _RESERVED_IDENTIFIER_FIXUP_1413;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _50 = hdOverride >= 0;
    bool _70;
    if (_50)
    {
        _70 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _70 = _50;
    }
    vec4 _71;
    if (_70)
    {
        _71 = vec4(float(hdOverride));
    }
    else
    {
        _71 = value;
    }
    return _71;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _88 = hdOverride >= 0;
    bool _98;
    if (_88)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _98 = _88;
    }
    vec4 _99;
    if (_98)
    {
        _99 = vec4(float(hdOverride));
    }
    else
    {
        _99 = value;
    }
    return _99;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _116 = hdOverride >= 0;
    bool _126;
    if (_116)
    {
        _126 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _126 = _116;
    }
    vec4 _127;
    if (_126)
    {
        _127 = vec4(float(hdOverride));
    }
    else
    {
        _127 = value;
    }
    return _127;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _144 = hdOverride >= 0;
    bool _153;
    if (_144)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _153 = _144;
    }
    vec4 _154;
    if (_153)
    {
        _154 = vec4(float(hdOverride));
    }
    else
    {
        _154 = value;
    }
    return _154;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_552 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_555 = _RESERVED_IDENTIFIER_FIXUP_552.xy;
    float _RESERVED_IDENTIFIER_FIXUP_557 = _RESERVED_IDENTIFIER_FIXUP_552.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_555;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_557;
    vec4 _RESERVED_IDENTIFIER_FIXUP_558 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1154;
    _RESERVED_IDENTIFIER_FIXUP_1154.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_566 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1156;
    _RESERVED_IDENTIFIER_FIXUP_1156.x = _RESERVED_IDENTIFIER_FIXUP_566.x;
    _RESERVED_IDENTIFIER_FIXUP_1156.y = _RESERVED_IDENTIFIER_FIXUP_566.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_576 = _RESERVED_IDENTIFIER_FIXUP_1156.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1160 = _RESERVED_IDENTIFIER_FIXUP_1154;
    _RESERVED_IDENTIFIER_FIXUP_1160.x = _RESERVED_IDENTIFIER_FIXUP_576.x;
    _RESERVED_IDENTIFIER_FIXUP_1160.y = _RESERVED_IDENTIFIER_FIXUP_576.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1160.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_558.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_599 = _RESERVED_IDENTIFIER_FIXUP_1156.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1172 = _RESERVED_IDENTIFIER_FIXUP_1154;
    _RESERVED_IDENTIFIER_FIXUP_1172.x = _RESERVED_IDENTIFIER_FIXUP_599.x;
    _RESERVED_IDENTIFIER_FIXUP_1172.y = _RESERVED_IDENTIFIER_FIXUP_599.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1172.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_558.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_618 = _RESERVED_IDENTIFIER_FIXUP_1156.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1180;
    _RESERVED_IDENTIFIER_FIXUP_1180.x = _RESERVED_IDENTIFIER_FIXUP_618.x;
    _RESERVED_IDENTIFIER_FIXUP_1180.y = _RESERVED_IDENTIFIER_FIXUP_618.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_628 = _RESERVED_IDENTIFIER_FIXUP_1156.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184;
    _RESERVED_IDENTIFIER_FIXUP_1184.x = _RESERVED_IDENTIFIER_FIXUP_628.x;
    _RESERVED_IDENTIFIER_FIXUP_1184.y = _RESERVED_IDENTIFIER_FIXUP_628.y;
    _RESERVED_IDENTIFIER_FIXUP_1180.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1180.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_558.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1184.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_696 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_714 = hdTex2(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1184.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1230;
    _RESERVED_IDENTIFIER_FIXUP_1230.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_696 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_558 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_714.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1235;
    _RESERVED_IDENTIFIER_FIXUP_1235.x = 1.0;
    vec2 param_11 = texcoord0.xy;
    vec2 param_12 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_750 = _RESERVED_IDENTIFIER_FIXUP_1235.xxx * mix(hdTex0(param_11), hdTex1(param_12), _RESERVED_IDENTIFIER_FIXUP_714.xxxx).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1237;
    _RESERVED_IDENTIFIER_FIXUP_1237.x = _RESERVED_IDENTIFIER_FIXUP_750.x;
    _RESERVED_IDENTIFIER_FIXUP_1237.y = _RESERVED_IDENTIFIER_FIXUP_750.y;
    _RESERVED_IDENTIFIER_FIXUP_1237.z = _RESERVED_IDENTIFIER_FIXUP_750.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1243;
    _RESERVED_IDENTIFIER_FIXUP_1243.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1243.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1243.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = _RESERVED_IDENTIFIER_FIXUP_1237.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1412).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1249;
    _RESERVED_IDENTIFIER_FIXUP_1249.x = _RESERVED_IDENTIFIER_FIXUP_772.x;
    _RESERVED_IDENTIFIER_FIXUP_1249.y = _RESERVED_IDENTIFIER_FIXUP_772.y;
    _RESERVED_IDENTIFIER_FIXUP_1249.z = _RESERVED_IDENTIFIER_FIXUP_772.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_783 = _RESERVED_IDENTIFIER_FIXUP_1249.xyz + _RESERVED_IDENTIFIER_FIXUP_1249.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1255;
    _RESERVED_IDENTIFIER_FIXUP_1255.x = _RESERVED_IDENTIFIER_FIXUP_783.x;
    _RESERVED_IDENTIFIER_FIXUP_1255.y = _RESERVED_IDENTIFIER_FIXUP_783.y;
    _RESERVED_IDENTIFIER_FIXUP_1255.z = _RESERVED_IDENTIFIER_FIXUP_783.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_797 = (_RESERVED_IDENTIFIER_FIXUP_1243.xyz * _RESERVED_IDENTIFIER_FIXUP_1230.xxx) + _RESERVED_IDENTIFIER_FIXUP_1255.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1261;
    _RESERVED_IDENTIFIER_FIXUP_1261.x = _RESERVED_IDENTIFIER_FIXUP_797.x;
    _RESERVED_IDENTIFIER_FIXUP_1261.y = _RESERVED_IDENTIFIER_FIXUP_797.y;
    _RESERVED_IDENTIFIER_FIXUP_1261.z = _RESERVED_IDENTIFIER_FIXUP_797.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_810 = _RESERVED_IDENTIFIER_FIXUP_1261.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1267;
    _RESERVED_IDENTIFIER_FIXUP_1267.x = _RESERVED_IDENTIFIER_FIXUP_810.x;
    _RESERVED_IDENTIFIER_FIXUP_1267.y = _RESERVED_IDENTIFIER_FIXUP_810.y;
    _RESERVED_IDENTIFIER_FIXUP_1267.z = _RESERVED_IDENTIFIER_FIXUP_810.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_1267.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1273;
    _RESERVED_IDENTIFIER_FIXUP_1273.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1273.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1273.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_555;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_557;
    vec4 _RESERVED_IDENTIFIER_FIXUP_865 = hdLod5(param_13, param_14);
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1160.xy;
    float param_16 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_865.y = hdLod5(param_15, param_16).x;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1172.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_865.z = hdLod5(param_17, param_18).x;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1180.xy;
    float param_20 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_865.w = hdLod5(param_19, param_20).x;
    vec2 param_21 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1021 = hdTex2(param_21);
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1184.xy;
    float param_23 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1026 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_696 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_865 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_22, param_23).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1021.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1360;
    _RESERVED_IDENTIFIER_FIXUP_1360.x = _RESERVED_IDENTIFIER_FIXUP_1026;
    float _RESERVED_IDENTIFIER_FIXUP_1031 = (_RESERVED_IDENTIFIER_FIXUP_1026 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1367;
    _RESERVED_IDENTIFIER_FIXUP_1367.x = _RESERVED_IDENTIFIER_FIXUP_1031;
    vec2 param_24 = texcoord0.xy;
    vec2 param_25 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1052 = mix(hdTex0(param_24), hdTex1(param_25), _RESERVED_IDENTIFIER_FIXUP_1021.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1057 = _RESERVED_IDENTIFIER_FIXUP_1367.xxx * _RESERVED_IDENTIFIER_FIXUP_1052.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1369;
    _RESERVED_IDENTIFIER_FIXUP_1369.x = _RESERVED_IDENTIFIER_FIXUP_1057.x;
    _RESERVED_IDENTIFIER_FIXUP_1369.y = _RESERVED_IDENTIFIER_FIXUP_1057.y;
    _RESERVED_IDENTIFIER_FIXUP_1369.z = _RESERVED_IDENTIFIER_FIXUP_1057.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1068 = _RESERVED_IDENTIFIER_FIXUP_1052.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_1068.x;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_1068.y;
    _RESERVED_IDENTIFIER_FIXUP_1375.z = _RESERVED_IDENTIFIER_FIXUP_1068.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1079 = _RESERVED_IDENTIFIER_FIXUP_1369.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381;
    _RESERVED_IDENTIFIER_FIXUP_1381.x = _RESERVED_IDENTIFIER_FIXUP_1079.x;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_1079.y;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = _RESERVED_IDENTIFIER_FIXUP_1079.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1090 = _RESERVED_IDENTIFIER_FIXUP_1381.xyz + _RESERVED_IDENTIFIER_FIXUP_1381.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1387;
    _RESERVED_IDENTIFIER_FIXUP_1387.x = _RESERVED_IDENTIFIER_FIXUP_1090.x;
    _RESERVED_IDENTIFIER_FIXUP_1387.y = _RESERVED_IDENTIFIER_FIXUP_1090.y;
    _RESERVED_IDENTIFIER_FIXUP_1387.z = _RESERVED_IDENTIFIER_FIXUP_1090.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1104 = (_RESERVED_IDENTIFIER_FIXUP_1375.xyz * _RESERVED_IDENTIFIER_FIXUP_1360.xxx) + _RESERVED_IDENTIFIER_FIXUP_1387.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1393;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_1104.x;
    _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_1104.y;
    _RESERVED_IDENTIFIER_FIXUP_1393.z = _RESERVED_IDENTIFIER_FIXUP_1104.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1393.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1399;
    _RESERVED_IDENTIFIER_FIXUP_1399.x = _RESERVED_IDENTIFIER_FIXUP_1117.x;
    _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_1117.y;
    _RESERVED_IDENTIFIER_FIXUP_1399.z = _RESERVED_IDENTIFIER_FIXUP_1117.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1399.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_418 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_427;
    if (_RESERVED_IDENTIFIER_FIXUP_418)
    {
        _RESERVED_IDENTIFIER_FIXUP_427 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_427 = _RESERVED_IDENTIFIER_FIXUP_418;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_427)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_464 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1273.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_491 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1143;
    if (_RESERVED_IDENTIFIER_FIXUP_464 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1143 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_464), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_491);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1143 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_491);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1143;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1031);
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
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB70 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB70.x;
    r2.y = hdB70.y;
    vec2 hdB93 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB93.x;
    r1.y = hdB93.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB117 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB117.x;
    r1.y = hdB117.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB137 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB137.x;
    r1.y = hdB137.y;
    vec4 hdB142 = r2;
    vec2 hdB148 = hdB142.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB148.x;
    r2.y = hdB148.y;
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
    vec2 param_11 = v2.xy;
    r3 = hdTex0(param_11);
    vec2 param_12 = v3.xy;
    r4 = hdTex1(param_12);
    r5 = mix(r3, r4, r1.xxxx);
    vec4 hdB273 = r0;
    vec3 hdB277 = hdB273.xxx * r5.xyz;
    r0.x = hdB277.x;
    r0.y = hdB277.y;
    r0.z = hdB277.z;
    vec3 hdB288 = r5.www * v1.xyz;
    r1.x = hdB288.x;
    r1.y = hdB288.y;
    r1.z = hdB288.z;
    vec4 hdB295 = r0;
    vec3 hdB299 = hdB295.xyz * v0.xyz;
    r0.x = hdB299.x;
    r0.y = hdB299.y;
    r0.z = hdB299.z;
    vec4 hdB306 = r0;
    vec4 hdB308 = r0;
    vec3 hdB310 = hdB306.xyz + hdB308.xyz;
    r0.x = hdB310.x;
    r0.y = hdB310.y;
    r0.z = hdB310.z;
    vec4 hdB322 = r0;
    vec3 hdB324 = (r1.xyz * r2.xxx) + hdB322.xyz;
    r0.x = hdB324.x;
    r0.y = hdB324.y;
    r0.z = hdB324.z;
    vec4 hdB331 = r0;
    vec3 hdB338 = hdB331.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB338.x;
    r0.y = hdB338.y;
    r0.z = hdB338.z;
    vec3 hdB353 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB353.x;
    oC0.y = hdB353.y;
    oC0.z = hdB353.z;
    oC0.w = 1.0;
    bool hdB366 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB374;
    if (hdB366)
    {
        hdB374 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB374 = hdB366;
    }
    if (hdB374)
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
    bool _1173 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1183;
    if (_1173)
    {
        _1183 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1183 = _1173;
    }
    if (_1183)
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
        bool _1208 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1223;
        if (!_1208)
        {
            _1223 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1223 = _1208;
        }
        if (_1223)
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
