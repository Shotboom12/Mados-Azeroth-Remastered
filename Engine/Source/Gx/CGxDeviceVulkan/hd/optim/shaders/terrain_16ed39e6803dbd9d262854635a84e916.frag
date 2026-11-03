#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 6) in vec4 texcoord4;
layout(location = 7) in vec4 texcoord5;
layout(location = 8) in vec4 texcoord6;
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
float _RESERVED_IDENTIFIER_FIXUP_3515;
vec4 _RESERVED_IDENTIFIER_FIXUP_3516;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex6Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s6[0],uv,dx,dy);if(optTile==1u)return textureGrad(s6[1],uv,dx,dy);if(optTile==2u)return textureGrad(s6[2],uv,dx,dy);return textureGrad(s6[3],uv,dx,dy);}
vec4 OptTex6(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex6Grad(uv,dx,dy);}
vec4 OptTex6(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex6Grad(uv,dx,dy);}
vec4 OptTex6Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s6[0],uv,lod);if(optTile==1u)return textureLod(s6[1],uv,lod);if(optTile==2u)return textureLod(s6[2],uv,lod);return textureLod(s6[3],uv,lod);}
vec4 OptTex7Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s7[0],uv,dx,dy);if(optTile==1u)return textureGrad(s7[1],uv,dx,dy);if(optTile==2u)return textureGrad(s7[2],uv,dx,dy);return textureGrad(s7[3],uv,dx,dy);}
vec4 OptTex7(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex7Grad(uv,dx,dy);}
vec4 OptTex7(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex7Grad(uv,dx,dy);}
vec4 OptTex7Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s7[0],uv,lod);if(optTile==1u)return textureLod(s7[1],uv,lod);if(optTile==2u)return textureLod(s7[2],uv,lod);return textureLod(s7[3],uv,lod);}
vec4 OptTex8Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s8[0],uv,dx,dy);if(optTile==1u)return textureGrad(s8[1],uv,dx,dy);if(optTile==2u)return textureGrad(s8[2],uv,dx,dy);return textureGrad(s8[3],uv,dx,dy);}
vec4 OptTex8(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex8Grad(uv,dx,dy);}
vec4 OptTex8(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex8Grad(uv,dx,dy);}
vec4 OptTex8Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s8[0],uv,lod);if(optTile==1u)return textureLod(s8[1],uv,lod);if(optTile==2u)return textureLod(s8[2],uv,lod);return textureLod(s8[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _67 = hdOverride >= 0;
    bool _87;
    if (_67)
    {
        _87 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _87 = _67;
    }
    vec4 _88;
    if (_87)
    {
        _88 = vec4(float(hdOverride));
    }
    else
    {
        _88 = value;
    }
    return _88;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _105 = hdOverride >= 0;
    bool _114;
    if (_105)
    {
        _114 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _114 = _105;
    }
    vec4 _115;
    if (_114)
    {
        _115 = vec4(float(hdOverride));
    }
    else
    {
        _115 = value;
    }
    return _115;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _132 = hdOverride >= 0;
    bool _142;
    if (_132)
    {
        _142 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _142 = _132;
    }
    vec4 _143;
    if (_142)
    {
        _143 = vec4(float(hdOverride));
    }
    else
    {
        _143 = value;
    }
    return _143;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _160 = hdOverride >= 0;
    bool _170;
    if (_160)
    {
        _170 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _170 = _160;
    }
    vec4 _171;
    if (_170)
    {
        _171 = vec4(float(hdOverride));
    }
    else
    {
        _171 = value;
    }
    return _171;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _188 = hdOverride >= 0;
    bool _197;
    if (_188)
    {
        _197 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _197 = _188;
    }
    vec4 _198;
    if (_197)
    {
        _198 = vec4(float(hdOverride));
    }
    else
    {
        _198 = value;
    }
    return _198;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _216 = hdOverride >= 0;
    bool _226;
    if (_216)
    {
        _226 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _226 = _216;
    }
    vec4 _227;
    if (_226)
    {
        _227 = vec4(float(hdOverride));
    }
    else
    {
        _227 = value;
    }
    return _227;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _245 = hdOverride >= 0;
    bool _255;
    if (_245)
    {
        _255 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _255 = _245;
    }
    vec4 _256;
    if (_255)
    {
        _256 = vec4(float(hdOverride));
    }
    else
    {
        _256 = value;
    }
    return _256;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _274 = hdOverride >= 0;
    bool _284;
    if (_274)
    {
        _284 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _284 = _274;
    }
    vec4 _285;
    if (_284)
    {
        _285 = vec4(float(hdOverride));
    }
    else
    {
        _285 = value;
    }
    return _285;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _303 = hdOverride >= 0;
    bool _313;
    if (_303)
    {
        _313 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _313 = _303;
    }
    vec4 _314;
    if (_313)
    {
        _314 = vec4(float(hdOverride));
    }
    else
    {
        _314 = value;
    }
    return _314;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1099 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1103 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1107 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1111 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1115 = hdTex4(param_4);
    float _RESERVED_IDENTIFIER_FIXUP_1119 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1115.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2778 = _RESERVED_IDENTIFIER_FIXUP_1115;
    _RESERVED_IDENTIFIER_FIXUP_2778.w = _RESERVED_IDENTIFIER_FIXUP_1119;
    _RESERVED_IDENTIFIER_FIXUP_2778.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1119;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1129 = _RESERVED_IDENTIFIER_FIXUP_1103 * _RESERVED_IDENTIFIER_FIXUP_2778.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1147 = (_RESERVED_IDENTIFIER_FIXUP_1111 * _RESERVED_IDENTIFIER_FIXUP_2778.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1107 * _RESERVED_IDENTIFIER_FIXUP_2778.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1099 * _RESERVED_IDENTIFIER_FIXUP_2778.wwww) + _RESERVED_IDENTIFIER_FIXUP_1129));
    float _RESERVED_IDENTIFIER_FIXUP_1154 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2785 = _RESERVED_IDENTIFIER_FIXUP_1129;
    _RESERVED_IDENTIFIER_FIXUP_2785.x = _RESERVED_IDENTIFIER_FIXUP_1154;
    float _RESERVED_IDENTIFIER_FIXUP_1160 = clamp((_RESERVED_IDENTIFIER_FIXUP_1154 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2785.x = _RESERVED_IDENTIFIER_FIXUP_1160;
    float _RESERVED_IDENTIFIER_FIXUP_1166 = ((-_RESERVED_IDENTIFIER_FIXUP_1160) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2785.y = _RESERVED_IDENTIFIER_FIXUP_1166;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3518;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3517;
    if (_RESERVED_IDENTIFIER_FIXUP_1166 != (-_RESERVED_IDENTIFIER_FIXUP_1166))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1178 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2797 = _RESERVED_IDENTIFIER_FIXUP_2785;
        _RESERVED_IDENTIFIER_FIXUP_2797.y = _RESERVED_IDENTIFIER_FIXUP_1178.x;
        _RESERVED_IDENTIFIER_FIXUP_2797.z = _RESERVED_IDENTIFIER_FIXUP_1178.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_2797.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2801;
        _RESERVED_IDENTIFIER_FIXUP_2801.x = _RESERVED_IDENTIFIER_FIXUP_1188.x;
        _RESERVED_IDENTIFIER_FIXUP_2801.y = _RESERVED_IDENTIFIER_FIXUP_1188.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_2797.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2805;
        _RESERVED_IDENTIFIER_FIXUP_2805.x = _RESERVED_IDENTIFIER_FIXUP_1198.x;
        _RESERVED_IDENTIFIER_FIXUP_2805.y = _RESERVED_IDENTIFIER_FIXUP_1198.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1208 = _RESERVED_IDENTIFIER_FIXUP_2797.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2809;
        _RESERVED_IDENTIFIER_FIXUP_2809.x = _RESERVED_IDENTIFIER_FIXUP_1208.x;
        _RESERVED_IDENTIFIER_FIXUP_2809.y = _RESERVED_IDENTIFIER_FIXUP_1208.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1218 = _RESERVED_IDENTIFIER_FIXUP_2797.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2813;
        _RESERVED_IDENTIFIER_FIXUP_2813.x = _RESERVED_IDENTIFIER_FIXUP_1218.x;
        _RESERVED_IDENTIFIER_FIXUP_2813.y = _RESERVED_IDENTIFIER_FIXUP_1218.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1226 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1226.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1226.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1232 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_2801.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2805.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2809.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2813.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2801.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1232.y = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2805.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1232.z = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2809.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1232.w = hdLod5(param_11, param_12).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1289 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1232 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_2813.xy;
        float param_14 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1295 = hdLod5(param_13, param_14).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2797.y = _RESERVED_IDENTIFIER_FIXUP_1295;
        float _RESERVED_IDENTIFIER_FIXUP_1300 = float(_RESERVED_IDENTIFIER_FIXUP_1295 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2797.y = _RESERVED_IDENTIFIER_FIXUP_1300;
        float _RESERVED_IDENTIFIER_FIXUP_1303 = dot(_RESERVED_IDENTIFIER_FIXUP_1289, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2797.z = _RESERVED_IDENTIFIER_FIXUP_1303;
        float _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1300 + _RESERVED_IDENTIFIER_FIXUP_1303;
        _RESERVED_IDENTIFIER_FIXUP_2797.y = _RESERVED_IDENTIFIER_FIXUP_1309;
        float _RESERVED_IDENTIFIER_FIXUP_1314 = (_RESERVED_IDENTIFIER_FIXUP_1309 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2797.y = _RESERVED_IDENTIFIER_FIXUP_1314;
        _RESERVED_IDENTIFIER_FIXUP_2797.x = (_RESERVED_IDENTIFIER_FIXUP_1160 * _RESERVED_IDENTIFIER_FIXUP_1314) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3518 = _RESERVED_IDENTIFIER_FIXUP_1289;
        _RESERVED_IDENTIFIER_FIXUP_3517 = _RESERVED_IDENTIFIER_FIXUP_2797;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2795 = _RESERVED_IDENTIFIER_FIXUP_2785;
        _RESERVED_IDENTIFIER_FIXUP_2795.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3518 = _RESERVED_IDENTIFIER_FIXUP_1107;
        _RESERVED_IDENTIFIER_FIXUP_3517 = _RESERVED_IDENTIFIER_FIXUP_2795;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1332 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2869 = _RESERVED_IDENTIFIER_FIXUP_3517;
    _RESERVED_IDENTIFIER_FIXUP_2869.y = _RESERVED_IDENTIFIER_FIXUP_1332;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3521;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3519;
    if (_RESERVED_IDENTIFIER_FIXUP_1332 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1341 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3030 = _RESERVED_IDENTIFIER_FIXUP_2869;
        _RESERVED_IDENTIFIER_FIXUP_3030.y = _RESERVED_IDENTIFIER_FIXUP_1341.x;
        _RESERVED_IDENTIFIER_FIXUP_3030.z = _RESERVED_IDENTIFIER_FIXUP_1341.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1351 = _RESERVED_IDENTIFIER_FIXUP_3030.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3034;
        _RESERVED_IDENTIFIER_FIXUP_3034.x = _RESERVED_IDENTIFIER_FIXUP_1351.x;
        _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1351.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1361 = _RESERVED_IDENTIFIER_FIXUP_3030.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3038;
        _RESERVED_IDENTIFIER_FIXUP_3038.x = _RESERVED_IDENTIFIER_FIXUP_1361.x;
        _RESERVED_IDENTIFIER_FIXUP_3038.y = _RESERVED_IDENTIFIER_FIXUP_1361.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1371 = _RESERVED_IDENTIFIER_FIXUP_3030.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3042;
        _RESERVED_IDENTIFIER_FIXUP_3042.x = _RESERVED_IDENTIFIER_FIXUP_1371.x;
        _RESERVED_IDENTIFIER_FIXUP_3042.y = _RESERVED_IDENTIFIER_FIXUP_1371.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_3030.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3046;
        _RESERVED_IDENTIFIER_FIXUP_3046.x = _RESERVED_IDENTIFIER_FIXUP_1381.x;
        _RESERVED_IDENTIFIER_FIXUP_3046.y = _RESERVED_IDENTIFIER_FIXUP_1381.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1389 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1389.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1389.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1395 = hdLod6(param_15, param_16);
        _RESERVED_IDENTIFIER_FIXUP_3034.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3038.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3042.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3046.w = 0.0;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3034.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1395.y = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3038.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1395.z = hdLod6(param_19, param_20).x;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3042.xy;
        float param_22 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1395.w = hdLod6(param_21, param_22).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1452 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1395 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3046.xy;
        float param_24 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1458 = hdLod6(param_23, param_24).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3030.y = _RESERVED_IDENTIFIER_FIXUP_1458;
        float _RESERVED_IDENTIFIER_FIXUP_1463 = float(_RESERVED_IDENTIFIER_FIXUP_1458 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3030.y = _RESERVED_IDENTIFIER_FIXUP_1463;
        float _RESERVED_IDENTIFIER_FIXUP_1466 = dot(_RESERVED_IDENTIFIER_FIXUP_1452, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3030.z = _RESERVED_IDENTIFIER_FIXUP_1466;
        float _RESERVED_IDENTIFIER_FIXUP_1472 = _RESERVED_IDENTIFIER_FIXUP_1463 + _RESERVED_IDENTIFIER_FIXUP_1466;
        _RESERVED_IDENTIFIER_FIXUP_3030.y = _RESERVED_IDENTIFIER_FIXUP_1472;
        _RESERVED_IDENTIFIER_FIXUP_3030.y = _RESERVED_IDENTIFIER_FIXUP_1472 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3521 = _RESERVED_IDENTIFIER_FIXUP_1452;
        _RESERVED_IDENTIFIER_FIXUP_3519 = _RESERVED_IDENTIFIER_FIXUP_3030;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1485 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2874 = _RESERVED_IDENTIFIER_FIXUP_2869;
        _RESERVED_IDENTIFIER_FIXUP_2874.z = _RESERVED_IDENTIFIER_FIXUP_1485;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3522;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3520;
        if (_RESERVED_IDENTIFIER_FIXUP_1485 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1494 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2964 = _RESERVED_IDENTIFIER_FIXUP_2874;
            _RESERVED_IDENTIFIER_FIXUP_2964.z = _RESERVED_IDENTIFIER_FIXUP_1494.x;
            _RESERVED_IDENTIFIER_FIXUP_2964.w = _RESERVED_IDENTIFIER_FIXUP_1494.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_2964.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2968;
            _RESERVED_IDENTIFIER_FIXUP_2968.x = _RESERVED_IDENTIFIER_FIXUP_1504.x;
            _RESERVED_IDENTIFIER_FIXUP_2968.y = _RESERVED_IDENTIFIER_FIXUP_1504.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_2964.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2972;
            _RESERVED_IDENTIFIER_FIXUP_2972.x = _RESERVED_IDENTIFIER_FIXUP_1514.x;
            _RESERVED_IDENTIFIER_FIXUP_2972.y = _RESERVED_IDENTIFIER_FIXUP_1514.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_2964.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2976;
            _RESERVED_IDENTIFIER_FIXUP_2976.x = _RESERVED_IDENTIFIER_FIXUP_1524.x;
            _RESERVED_IDENTIFIER_FIXUP_2976.y = _RESERVED_IDENTIFIER_FIXUP_1524.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_2964.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2980;
            _RESERVED_IDENTIFIER_FIXUP_2980.x = _RESERVED_IDENTIFIER_FIXUP_1534.x;
            _RESERVED_IDENTIFIER_FIXUP_2980.y = _RESERVED_IDENTIFIER_FIXUP_1534.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1542 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_1542.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1542.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1548 = hdLod7(param_25, param_26);
            _RESERVED_IDENTIFIER_FIXUP_2968.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2972.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2976.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2980.w = 0.0;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2968.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1548.y = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2972.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1548.z = hdLod7(param_29, param_30).x;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2976.xy;
            float param_32 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1548.w = hdLod7(param_31, param_32).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1605 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1548 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2980.xy;
            float param_34 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1611 = hdLod7(param_33, param_34).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2964.z = _RESERVED_IDENTIFIER_FIXUP_1611;
            float _RESERVED_IDENTIFIER_FIXUP_1616 = float(_RESERVED_IDENTIFIER_FIXUP_1611 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2964.z = _RESERVED_IDENTIFIER_FIXUP_1616;
            float _RESERVED_IDENTIFIER_FIXUP_1619 = dot(_RESERVED_IDENTIFIER_FIXUP_1605, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2964.w = _RESERVED_IDENTIFIER_FIXUP_1619;
            float _RESERVED_IDENTIFIER_FIXUP_1625 = _RESERVED_IDENTIFIER_FIXUP_1616 + _RESERVED_IDENTIFIER_FIXUP_1619;
            _RESERVED_IDENTIFIER_FIXUP_2964.z = _RESERVED_IDENTIFIER_FIXUP_1625;
            _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1625 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3522 = _RESERVED_IDENTIFIER_FIXUP_1605;
            _RESERVED_IDENTIFIER_FIXUP_3520 = _RESERVED_IDENTIFIER_FIXUP_2964;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2878 = _RESERVED_IDENTIFIER_FIXUP_3518;
            _RESERVED_IDENTIFIER_FIXUP_2878.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2878.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1641 = (_RESERVED_IDENTIFIER_FIXUP_2878.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2883;
            _RESERVED_IDENTIFIER_FIXUP_2883.x = _RESERVED_IDENTIFIER_FIXUP_1641.x;
            _RESERVED_IDENTIFIER_FIXUP_2883.y = _RESERVED_IDENTIFIER_FIXUP_1641.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1651 = _RESERVED_IDENTIFIER_FIXUP_2883.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2887;
            _RESERVED_IDENTIFIER_FIXUP_2887.x = _RESERVED_IDENTIFIER_FIXUP_1651.x;
            _RESERVED_IDENTIFIER_FIXUP_2887.y = _RESERVED_IDENTIFIER_FIXUP_1651.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1661 = _RESERVED_IDENTIFIER_FIXUP_2883.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2891;
            _RESERVED_IDENTIFIER_FIXUP_2891.x = _RESERVED_IDENTIFIER_FIXUP_1661.x;
            _RESERVED_IDENTIFIER_FIXUP_2891.y = _RESERVED_IDENTIFIER_FIXUP_1661.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1671 = _RESERVED_IDENTIFIER_FIXUP_2883.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2895;
            _RESERVED_IDENTIFIER_FIXUP_2895.x = _RESERVED_IDENTIFIER_FIXUP_1671.x;
            _RESERVED_IDENTIFIER_FIXUP_2895.y = _RESERVED_IDENTIFIER_FIXUP_1671.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1681 = _RESERVED_IDENTIFIER_FIXUP_2883.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2899;
            _RESERVED_IDENTIFIER_FIXUP_2899.x = _RESERVED_IDENTIFIER_FIXUP_1681.x;
            _RESERVED_IDENTIFIER_FIXUP_2899.y = _RESERVED_IDENTIFIER_FIXUP_1681.y;
            _RESERVED_IDENTIFIER_FIXUP_2883.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_2883.xy;
            float param_36 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1695 = hdLod8(param_35, param_36);
            _RESERVED_IDENTIFIER_FIXUP_2887.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2891.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2895.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2899.w = 0.0;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2887.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1695.y = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2891.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1695.z = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2895.xy;
            float param_42 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1695.w = hdLod8(param_41, param_42).x;
            vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_2899.xy;
            float param_44 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1758 = hdLod8(param_43, param_44).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2939 = _RESERVED_IDENTIFIER_FIXUP_2874;
            _RESERVED_IDENTIFIER_FIXUP_2939.z = _RESERVED_IDENTIFIER_FIXUP_1758;
            float _RESERVED_IDENTIFIER_FIXUP_1763 = float(_RESERVED_IDENTIFIER_FIXUP_1758 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2939.z = _RESERVED_IDENTIFIER_FIXUP_1763;
            float _RESERVED_IDENTIFIER_FIXUP_1766 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1695 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2939.w = _RESERVED_IDENTIFIER_FIXUP_1766;
            float _RESERVED_IDENTIFIER_FIXUP_1772 = _RESERVED_IDENTIFIER_FIXUP_1763 + _RESERVED_IDENTIFIER_FIXUP_1766;
            _RESERVED_IDENTIFIER_FIXUP_2939.z = _RESERVED_IDENTIFIER_FIXUP_1772;
            float _RESERVED_IDENTIFIER_FIXUP_1780 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2939.w = _RESERVED_IDENTIFIER_FIXUP_1780;
            float _RESERVED_IDENTIFIER_FIXUP_1786 = clamp((_RESERVED_IDENTIFIER_FIXUP_1780 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2939.w = _RESERVED_IDENTIFIER_FIXUP_1786;
            float _RESERVED_IDENTIFIER_FIXUP_1791 = (_RESERVED_IDENTIFIER_FIXUP_1772 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2939.z = _RESERVED_IDENTIFIER_FIXUP_1791;
            _RESERVED_IDENTIFIER_FIXUP_2939.y = (_RESERVED_IDENTIFIER_FIXUP_1786 * _RESERVED_IDENTIFIER_FIXUP_1791) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3522 = _RESERVED_IDENTIFIER_FIXUP_2878;
            _RESERVED_IDENTIFIER_FIXUP_3520 = _RESERVED_IDENTIFIER_FIXUP_2939;
        }
        _RESERVED_IDENTIFIER_FIXUP_3521 = _RESERVED_IDENTIFIER_FIXUP_3522;
        _RESERVED_IDENTIFIER_FIXUP_3519 = _RESERVED_IDENTIFIER_FIXUP_3520;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1806 = min(_RESERVED_IDENTIFIER_FIXUP_3519.y, _RESERVED_IDENTIFIER_FIXUP_3519.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3098 = _RESERVED_IDENTIFIER_FIXUP_3521;
    _RESERVED_IDENTIFIER_FIXUP_3098.x = _RESERVED_IDENTIFIER_FIXUP_1806;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3101 = _RESERVED_IDENTIFIER_FIXUP_3519;
    _RESERVED_IDENTIFIER_FIXUP_3101.x = (_RESERVED_IDENTIFIER_FIXUP_1806 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1817 = _RESERVED_IDENTIFIER_FIXUP_1147.xyz * _RESERVED_IDENTIFIER_FIXUP_3101.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3103 = _RESERVED_IDENTIFIER_FIXUP_1147;
    _RESERVED_IDENTIFIER_FIXUP_3103.x = _RESERVED_IDENTIFIER_FIXUP_1817.x;
    _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1817.y;
    _RESERVED_IDENTIFIER_FIXUP_3103.z = _RESERVED_IDENTIFIER_FIXUP_1817.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1828 = _RESERVED_IDENTIFIER_FIXUP_3103.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3515).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3109 = _RESERVED_IDENTIFIER_FIXUP_3103;
    _RESERVED_IDENTIFIER_FIXUP_3109.x = _RESERVED_IDENTIFIER_FIXUP_1828.x;
    _RESERVED_IDENTIFIER_FIXUP_3109.y = _RESERVED_IDENTIFIER_FIXUP_1828.y;
    _RESERVED_IDENTIFIER_FIXUP_3109.z = _RESERVED_IDENTIFIER_FIXUP_1828.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1839 = _RESERVED_IDENTIFIER_FIXUP_3109.xyz + _RESERVED_IDENTIFIER_FIXUP_3109.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3115 = _RESERVED_IDENTIFIER_FIXUP_3109;
    _RESERVED_IDENTIFIER_FIXUP_3115.x = _RESERVED_IDENTIFIER_FIXUP_1839.x;
    _RESERVED_IDENTIFIER_FIXUP_3115.y = _RESERVED_IDENTIFIER_FIXUP_1839.y;
    _RESERVED_IDENTIFIER_FIXUP_3115.z = _RESERVED_IDENTIFIER_FIXUP_1839.z;
    _RESERVED_IDENTIFIER_FIXUP_3101.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3101.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3101.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1864 = (_RESERVED_IDENTIFIER_FIXUP_3101.xyz * _RESERVED_IDENTIFIER_FIXUP_3098.xxx) + _RESERVED_IDENTIFIER_FIXUP_3115.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3127 = _RESERVED_IDENTIFIER_FIXUP_3115;
    _RESERVED_IDENTIFIER_FIXUP_3127.x = _RESERVED_IDENTIFIER_FIXUP_1864.x;
    _RESERVED_IDENTIFIER_FIXUP_3127.y = _RESERVED_IDENTIFIER_FIXUP_1864.y;
    _RESERVED_IDENTIFIER_FIXUP_3127.z = _RESERVED_IDENTIFIER_FIXUP_1864.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1877 = _RESERVED_IDENTIFIER_FIXUP_3127.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3133 = _RESERVED_IDENTIFIER_FIXUP_3127;
    _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1877.x;
    _RESERVED_IDENTIFIER_FIXUP_3133.y = _RESERVED_IDENTIFIER_FIXUP_1877.y;
    _RESERVED_IDENTIFIER_FIXUP_3133.z = _RESERVED_IDENTIFIER_FIXUP_1877.z;
    vec2 param_45 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1934 = hdTex0(param_45);
    vec2 param_46 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1938 = hdTex1(param_46);
    vec2 param_47 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1942 = hdTex2(param_47);
    vec2 param_48 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1946 = hdTex3(param_48);
    vec2 param_49 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1950 = hdTex4(param_49);
    float _RESERVED_IDENTIFIER_FIXUP_1954 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1950.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3147 = _RESERVED_IDENTIFIER_FIXUP_1950;
    _RESERVED_IDENTIFIER_FIXUP_3147.w = _RESERVED_IDENTIFIER_FIXUP_1954;
    _RESERVED_IDENTIFIER_FIXUP_3147.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1954;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1964 = _RESERVED_IDENTIFIER_FIXUP_1938 * _RESERVED_IDENTIFIER_FIXUP_3147.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1982 = (_RESERVED_IDENTIFIER_FIXUP_1946 * _RESERVED_IDENTIFIER_FIXUP_3147.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1942 * _RESERVED_IDENTIFIER_FIXUP_3147.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1934 * _RESERVED_IDENTIFIER_FIXUP_3147.wwww) + _RESERVED_IDENTIFIER_FIXUP_1964));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3154 = _RESERVED_IDENTIFIER_FIXUP_1964;
    _RESERVED_IDENTIFIER_FIXUP_3154.x = _RESERVED_IDENTIFIER_FIXUP_1154;
    float _RESERVED_IDENTIFIER_FIXUP_1995 = clamp((_RESERVED_IDENTIFIER_FIXUP_1154 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3154.x = _RESERVED_IDENTIFIER_FIXUP_1995;
    float _RESERVED_IDENTIFIER_FIXUP_2001 = ((-_RESERVED_IDENTIFIER_FIXUP_1995) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_2001;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3530;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3529;
    if (_RESERVED_IDENTIFIER_FIXUP_2001 != (-_RESERVED_IDENTIFIER_FIXUP_2001))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2013 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3166 = _RESERVED_IDENTIFIER_FIXUP_3154;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_2013.x;
        _RESERVED_IDENTIFIER_FIXUP_3166.z = _RESERVED_IDENTIFIER_FIXUP_2013.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2023 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3170;
        _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_2023.x;
        _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_2023.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2033 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3174;
        _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_2033.x;
        _RESERVED_IDENTIFIER_FIXUP_3174.y = _RESERVED_IDENTIFIER_FIXUP_2033.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2043 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3178;
        _RESERVED_IDENTIFIER_FIXUP_3178.x = _RESERVED_IDENTIFIER_FIXUP_2043.x;
        _RESERVED_IDENTIFIER_FIXUP_3178.y = _RESERVED_IDENTIFIER_FIXUP_2043.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2053 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3182;
        _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_2053.x;
        _RESERVED_IDENTIFIER_FIXUP_3182.y = _RESERVED_IDENTIFIER_FIXUP_2053.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2061 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2061.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2061.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2067 = hdLod5(param_50, param_51);
        _RESERVED_IDENTIFIER_FIXUP_3170.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3174.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3178.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3182.w = 0.0;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3170.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2067.y = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3174.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2067.z = hdLod5(param_54, param_55).x;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3178.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2067.w = hdLod5(param_56, param_57).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2124 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2067 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3182.xy;
        float param_59 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2130 = hdLod5(param_58, param_59).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_2130;
        float _RESERVED_IDENTIFIER_FIXUP_2135 = float(_RESERVED_IDENTIFIER_FIXUP_2130 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_2135;
        float _RESERVED_IDENTIFIER_FIXUP_2138 = dot(_RESERVED_IDENTIFIER_FIXUP_2124, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3166.z = _RESERVED_IDENTIFIER_FIXUP_2138;
        float _RESERVED_IDENTIFIER_FIXUP_2144 = _RESERVED_IDENTIFIER_FIXUP_2135 + _RESERVED_IDENTIFIER_FIXUP_2138;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_2144;
        float _RESERVED_IDENTIFIER_FIXUP_2149 = (_RESERVED_IDENTIFIER_FIXUP_2144 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_2149;
        _RESERVED_IDENTIFIER_FIXUP_3166.x = (_RESERVED_IDENTIFIER_FIXUP_1995 * _RESERVED_IDENTIFIER_FIXUP_2149) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3530 = _RESERVED_IDENTIFIER_FIXUP_2124;
        _RESERVED_IDENTIFIER_FIXUP_3529 = _RESERVED_IDENTIFIER_FIXUP_3166;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3164 = _RESERVED_IDENTIFIER_FIXUP_3154;
        _RESERVED_IDENTIFIER_FIXUP_3164.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3530 = _RESERVED_IDENTIFIER_FIXUP_1942;
        _RESERVED_IDENTIFIER_FIXUP_3529 = _RESERVED_IDENTIFIER_FIXUP_3164;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3238 = _RESERVED_IDENTIFIER_FIXUP_3529;
    _RESERVED_IDENTIFIER_FIXUP_3238.y = _RESERVED_IDENTIFIER_FIXUP_1332;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3533;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3531;
    if (_RESERVED_IDENTIFIER_FIXUP_1332 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2176 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_3238;
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2176.x;
        _RESERVED_IDENTIFIER_FIXUP_3399.z = _RESERVED_IDENTIFIER_FIXUP_2176.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2186 = _RESERVED_IDENTIFIER_FIXUP_3399.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3403;
        _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_2186.x;
        _RESERVED_IDENTIFIER_FIXUP_3403.y = _RESERVED_IDENTIFIER_FIXUP_2186.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2196 = _RESERVED_IDENTIFIER_FIXUP_3399.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3407;
        _RESERVED_IDENTIFIER_FIXUP_3407.x = _RESERVED_IDENTIFIER_FIXUP_2196.x;
        _RESERVED_IDENTIFIER_FIXUP_3407.y = _RESERVED_IDENTIFIER_FIXUP_2196.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2206 = _RESERVED_IDENTIFIER_FIXUP_3399.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3411;
        _RESERVED_IDENTIFIER_FIXUP_3411.x = _RESERVED_IDENTIFIER_FIXUP_2206.x;
        _RESERVED_IDENTIFIER_FIXUP_3411.y = _RESERVED_IDENTIFIER_FIXUP_2206.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2216 = _RESERVED_IDENTIFIER_FIXUP_3399.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3415;
        _RESERVED_IDENTIFIER_FIXUP_3415.x = _RESERVED_IDENTIFIER_FIXUP_2216.x;
        _RESERVED_IDENTIFIER_FIXUP_3415.y = _RESERVED_IDENTIFIER_FIXUP_2216.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2224 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_2224.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2224.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2230 = hdLod6(param_60, param_61);
        _RESERVED_IDENTIFIER_FIXUP_3403.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3407.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3411.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3415.w = 0.0;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3403.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2230.y = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3407.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2230.z = hdLod6(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3411.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2230.w = hdLod6(param_66, param_67).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2287 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2230 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3415.xy;
        float param_69 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2293 = hdLod6(param_68, param_69).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2293;
        float _RESERVED_IDENTIFIER_FIXUP_2298 = float(_RESERVED_IDENTIFIER_FIXUP_2293 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2298;
        float _RESERVED_IDENTIFIER_FIXUP_2301 = dot(_RESERVED_IDENTIFIER_FIXUP_2287, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3399.z = _RESERVED_IDENTIFIER_FIXUP_2301;
        float _RESERVED_IDENTIFIER_FIXUP_2307 = _RESERVED_IDENTIFIER_FIXUP_2298 + _RESERVED_IDENTIFIER_FIXUP_2301;
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2307;
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2307 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3533 = _RESERVED_IDENTIFIER_FIXUP_2287;
        _RESERVED_IDENTIFIER_FIXUP_3531 = _RESERVED_IDENTIFIER_FIXUP_3399;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2320 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3243 = _RESERVED_IDENTIFIER_FIXUP_3238;
        _RESERVED_IDENTIFIER_FIXUP_3243.z = _RESERVED_IDENTIFIER_FIXUP_2320;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3534;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3532;
        if (_RESERVED_IDENTIFIER_FIXUP_2320 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2329 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3333 = _RESERVED_IDENTIFIER_FIXUP_3243;
            _RESERVED_IDENTIFIER_FIXUP_3333.z = _RESERVED_IDENTIFIER_FIXUP_2329.x;
            _RESERVED_IDENTIFIER_FIXUP_3333.w = _RESERVED_IDENTIFIER_FIXUP_2329.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2339 = _RESERVED_IDENTIFIER_FIXUP_3333.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3337;
            _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_2339.x;
            _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_2339.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2349 = _RESERVED_IDENTIFIER_FIXUP_3333.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3341;
            _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_2349.x;
            _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2349.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2359 = _RESERVED_IDENTIFIER_FIXUP_3333.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3345;
            _RESERVED_IDENTIFIER_FIXUP_3345.x = _RESERVED_IDENTIFIER_FIXUP_2359.x;
            _RESERVED_IDENTIFIER_FIXUP_3345.y = _RESERVED_IDENTIFIER_FIXUP_2359.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2369 = _RESERVED_IDENTIFIER_FIXUP_3333.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3349;
            _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_2369.x;
            _RESERVED_IDENTIFIER_FIXUP_3349.y = _RESERVED_IDENTIFIER_FIXUP_2369.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2377 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2377.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2377.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2383 = hdLod7(param_70, param_71);
            _RESERVED_IDENTIFIER_FIXUP_3337.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3341.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3345.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3349.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3337.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2383.y = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3341.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2383.z = hdLod7(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3345.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2383.w = hdLod7(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2440 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2383 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3349.xy;
            float param_79 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2446 = hdLod7(param_78, param_79).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3333.z = _RESERVED_IDENTIFIER_FIXUP_2446;
            float _RESERVED_IDENTIFIER_FIXUP_2451 = float(_RESERVED_IDENTIFIER_FIXUP_2446 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3333.z = _RESERVED_IDENTIFIER_FIXUP_2451;
            float _RESERVED_IDENTIFIER_FIXUP_2454 = dot(_RESERVED_IDENTIFIER_FIXUP_2440, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3333.w = _RESERVED_IDENTIFIER_FIXUP_2454;
            float _RESERVED_IDENTIFIER_FIXUP_2460 = _RESERVED_IDENTIFIER_FIXUP_2451 + _RESERVED_IDENTIFIER_FIXUP_2454;
            _RESERVED_IDENTIFIER_FIXUP_3333.z = _RESERVED_IDENTIFIER_FIXUP_2460;
            _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_2460 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3534 = _RESERVED_IDENTIFIER_FIXUP_2440;
            _RESERVED_IDENTIFIER_FIXUP_3532 = _RESERVED_IDENTIFIER_FIXUP_3333;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3247 = _RESERVED_IDENTIFIER_FIXUP_3530;
            _RESERVED_IDENTIFIER_FIXUP_3247.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3247.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2476 = (_RESERVED_IDENTIFIER_FIXUP_3247.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3252;
            _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_2476.x;
            _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_2476.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2486 = _RESERVED_IDENTIFIER_FIXUP_3252.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3256;
            _RESERVED_IDENTIFIER_FIXUP_3256.x = _RESERVED_IDENTIFIER_FIXUP_2486.x;
            _RESERVED_IDENTIFIER_FIXUP_3256.y = _RESERVED_IDENTIFIER_FIXUP_2486.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2496 = _RESERVED_IDENTIFIER_FIXUP_3252.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3260;
            _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_2496.x;
            _RESERVED_IDENTIFIER_FIXUP_3260.y = _RESERVED_IDENTIFIER_FIXUP_2496.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2506 = _RESERVED_IDENTIFIER_FIXUP_3252.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3264;
            _RESERVED_IDENTIFIER_FIXUP_3264.x = _RESERVED_IDENTIFIER_FIXUP_2506.x;
            _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_2506.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2516 = _RESERVED_IDENTIFIER_FIXUP_3252.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3268;
            _RESERVED_IDENTIFIER_FIXUP_3268.x = _RESERVED_IDENTIFIER_FIXUP_2516.x;
            _RESERVED_IDENTIFIER_FIXUP_3268.y = _RESERVED_IDENTIFIER_FIXUP_2516.y;
            _RESERVED_IDENTIFIER_FIXUP_3252.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3252.xy;
            float param_81 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2530 = hdLod8(param_80, param_81);
            _RESERVED_IDENTIFIER_FIXUP_3256.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3260.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3264.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3268.w = 0.0;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3256.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2530.y = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3260.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2530.z = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3264.xy;
            float param_87 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2530.w = hdLod8(param_86, param_87).x;
            vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3268.xy;
            float param_89 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2593 = hdLod8(param_88, param_89).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3308 = _RESERVED_IDENTIFIER_FIXUP_3243;
            _RESERVED_IDENTIFIER_FIXUP_3308.z = _RESERVED_IDENTIFIER_FIXUP_2593;
            float _RESERVED_IDENTIFIER_FIXUP_2598 = float(_RESERVED_IDENTIFIER_FIXUP_2593 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3308.z = _RESERVED_IDENTIFIER_FIXUP_2598;
            float _RESERVED_IDENTIFIER_FIXUP_2601 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2530 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3308.w = _RESERVED_IDENTIFIER_FIXUP_2601;
            float _RESERVED_IDENTIFIER_FIXUP_2607 = _RESERVED_IDENTIFIER_FIXUP_2598 + _RESERVED_IDENTIFIER_FIXUP_2601;
            _RESERVED_IDENTIFIER_FIXUP_3308.z = _RESERVED_IDENTIFIER_FIXUP_2607;
            float _RESERVED_IDENTIFIER_FIXUP_2615 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3308.w = _RESERVED_IDENTIFIER_FIXUP_2615;
            float _RESERVED_IDENTIFIER_FIXUP_2621 = clamp((_RESERVED_IDENTIFIER_FIXUP_2615 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3308.w = _RESERVED_IDENTIFIER_FIXUP_2621;
            float _RESERVED_IDENTIFIER_FIXUP_2626 = (_RESERVED_IDENTIFIER_FIXUP_2607 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3308.z = _RESERVED_IDENTIFIER_FIXUP_2626;
            _RESERVED_IDENTIFIER_FIXUP_3308.y = (_RESERVED_IDENTIFIER_FIXUP_2621 * _RESERVED_IDENTIFIER_FIXUP_2626) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3534 = _RESERVED_IDENTIFIER_FIXUP_3247;
            _RESERVED_IDENTIFIER_FIXUP_3532 = _RESERVED_IDENTIFIER_FIXUP_3308;
        }
        _RESERVED_IDENTIFIER_FIXUP_3533 = _RESERVED_IDENTIFIER_FIXUP_3534;
        _RESERVED_IDENTIFIER_FIXUP_3531 = _RESERVED_IDENTIFIER_FIXUP_3532;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2641 = min(_RESERVED_IDENTIFIER_FIXUP_3531.y, _RESERVED_IDENTIFIER_FIXUP_3531.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3467 = _RESERVED_IDENTIFIER_FIXUP_3533;
    _RESERVED_IDENTIFIER_FIXUP_3467.x = _RESERVED_IDENTIFIER_FIXUP_2641;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3470 = _RESERVED_IDENTIFIER_FIXUP_3531;
    _RESERVED_IDENTIFIER_FIXUP_3470.x = (_RESERVED_IDENTIFIER_FIXUP_2641 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2652 = _RESERVED_IDENTIFIER_FIXUP_1982.xyz * _RESERVED_IDENTIFIER_FIXUP_3470.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3472 = _RESERVED_IDENTIFIER_FIXUP_1982;
    _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_2652.x;
    _RESERVED_IDENTIFIER_FIXUP_3472.y = _RESERVED_IDENTIFIER_FIXUP_2652.y;
    _RESERVED_IDENTIFIER_FIXUP_3472.z = _RESERVED_IDENTIFIER_FIXUP_2652.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2663 = _RESERVED_IDENTIFIER_FIXUP_3472.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3478 = _RESERVED_IDENTIFIER_FIXUP_3472;
    _RESERVED_IDENTIFIER_FIXUP_3478.x = _RESERVED_IDENTIFIER_FIXUP_2663.x;
    _RESERVED_IDENTIFIER_FIXUP_3478.y = _RESERVED_IDENTIFIER_FIXUP_2663.y;
    _RESERVED_IDENTIFIER_FIXUP_3478.z = _RESERVED_IDENTIFIER_FIXUP_2663.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2674 = _RESERVED_IDENTIFIER_FIXUP_3478.xyz + _RESERVED_IDENTIFIER_FIXUP_3478.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3484 = _RESERVED_IDENTIFIER_FIXUP_3478;
    _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_2674.x;
    _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2674.y;
    _RESERVED_IDENTIFIER_FIXUP_3484.z = _RESERVED_IDENTIFIER_FIXUP_2674.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2685 = _RESERVED_IDENTIFIER_FIXUP_3484.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3470.x = _RESERVED_IDENTIFIER_FIXUP_2685.x;
    _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_2685.y;
    _RESERVED_IDENTIFIER_FIXUP_3470.z = _RESERVED_IDENTIFIER_FIXUP_2685.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2699 = (_RESERVED_IDENTIFIER_FIXUP_3470.xyz * _RESERVED_IDENTIFIER_FIXUP_3467.xxx) + _RESERVED_IDENTIFIER_FIXUP_3484.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3496 = _RESERVED_IDENTIFIER_FIXUP_3484;
    _RESERVED_IDENTIFIER_FIXUP_3496.x = _RESERVED_IDENTIFIER_FIXUP_2699.x;
    _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2699.y;
    _RESERVED_IDENTIFIER_FIXUP_3496.z = _RESERVED_IDENTIFIER_FIXUP_2699.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2712 = _RESERVED_IDENTIFIER_FIXUP_3496.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3502 = _RESERVED_IDENTIFIER_FIXUP_3496;
    _RESERVED_IDENTIFIER_FIXUP_3502.x = _RESERVED_IDENTIFIER_FIXUP_2712.x;
    _RESERVED_IDENTIFIER_FIXUP_3502.y = _RESERVED_IDENTIFIER_FIXUP_2712.y;
    _RESERVED_IDENTIFIER_FIXUP_3502.z = _RESERVED_IDENTIFIER_FIXUP_2712.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3502.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_957 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_966;
    if (_RESERVED_IDENTIFIER_FIXUP_957)
    {
        _RESERVED_IDENTIFIER_FIXUP_966 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_966 = _RESERVED_IDENTIFIER_FIXUP_957;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_966)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1003 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3133.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1030 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2771;
    if (_RESERVED_IDENTIFIER_FIXUP_1003 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2771 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1003), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1030);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2771 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1030);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2771;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    vec4 r6 = vec4(0.0);
    vec4 r7 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = texcoord5;
    vec4 v7 = texcoord6;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    vec2 param_4 = v4.wz;
    r4 = hdTex4(param_4);
    r4.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r4.w = (-r4.w) + 1.0;
    r1 *= r4.xxxx;
    r0 = (r0 * r4.wwww) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB156 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB156.x;
        r1.z = hdB156.y;
        vec2 hdB178 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB178.x;
        r2.y = hdB178.y;
        vec2 hdB189 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB189.x;
        r3.y = hdB189.y;
        vec2 hdB200 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB200.x;
        r4.y = hdB200.y;
        vec2 hdB211 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB211.x;
        r5.y = hdB211.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r6.xy;
        float param_6 = r6.w;
        r6 = hdLod5(param_5, param_6);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_11 = r4.xy;
        float param_12 = r4.w;
        r4 = hdLod5(param_11, param_12);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_13 = r5.xy;
        float param_14 = r5.w;
        r5 = hdLod5(param_13, param_14);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v6.x), abs(v6.y));
    if (r1.y < 1.0)
    {
        vec2 hdB341 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB341.x;
        r1.z = hdB341.y;
        vec2 hdB351 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB351.x;
        r2.y = hdB351.y;
        vec2 hdB361 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB361.x;
        r3.y = hdB361.y;
        vec2 hdB371 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB371.x;
        r4.y = hdB371.y;
        vec2 hdB381 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB381.x;
        r5.y = hdB381.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_15 = r6.xy;
        float param_16 = r6.w;
        r6 = hdLod6(param_15, param_16);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod6(param_17, param_18);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_19 = r3.xy;
        float param_20 = r3.w;
        r3 = hdLod6(param_19, param_20);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_21 = r4.xy;
        float param_22 = r4.w;
        r4 = hdLod6(param_21, param_22);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_23 = r5.xy;
        float param_24 = r5.w;
        r5 = hdLod6(param_23, param_24);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v6.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v6.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            vec2 hdB496 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB496.x;
            r1.w = hdB496.y;
            vec2 hdB506 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB506.x;
            r2.y = hdB506.y;
            vec2 hdB516 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB516.x;
            r3.y = hdB516.y;
            vec2 hdB526 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB526.x;
            r4.y = hdB526.y;
            vec2 hdB536 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB536.x;
            r5.y = hdB536.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = r6.xy;
            float param_26 = r6.w;
            r6 = hdLod7(param_25, param_26);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod7(param_27, param_28);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_29 = r3.xy;
            float param_30 = r3.w;
            r3 = hdLod7(param_29, param_30);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_31 = r4.xy;
            float param_32 = r4.w;
            r4 = hdLod7(param_31, param_32);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_33 = r5.xy;
            float param_34 = r5.w;
            r5 = hdLod7(param_33, param_34);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v7.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v7.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v5.w;
            r2.y = v6.w;
            vec2 hdB644 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB644.x;
            r3.y = hdB644.y;
            vec2 hdB654 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB654.x;
            r4.y = hdB654.y;
            vec2 hdB664 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB664.x;
            r5.y = hdB664.y;
            vec2 hdB674 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB674.x;
            r6.y = hdB674.y;
            vec2 hdB684 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB684.x;
            r7.y = hdB684.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_35 = r3.xy;
            float param_36 = r3.w;
            r3 = hdLod8(param_35, param_36);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r4 = hdLod8(param_37, param_38);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_39 = r5.xy;
            float param_40 = r5.w;
            r5 = hdLod8(param_39, param_40);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_41 = r6.xy;
            float param_42 = r6.w;
            r6 = hdLod8(param_41, param_42);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_43 = r7.xy;
            float param_44 = r7.w;
            r7 = hdLod8(param_43, param_44);
            r3.y = r4.x;
            r3.z = r5.x;
            r3.w = r6.x;
            r3 += (-v7.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v7.w);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r3, vec4(1.0));
            r1.z += r1.w;
            r1.w = max(abs(r2.x), abs(r2.y));
            r1.w = clamp((r1.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.z = (r1.z * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.w * r1.z) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB819 = r0;
    vec3 hdB823 = hdB819.xyz * r1.xxx;
    r0.x = hdB823.x;
    r0.y = hdB823.y;
    r0.z = hdB823.z;
    vec4 hdB830 = r0;
    vec3 hdB834 = hdB830.xyz * v0.xyz;
    r0.x = hdB834.x;
    r0.y = hdB834.y;
    r0.z = hdB834.z;
    vec4 hdB841 = r0;
    vec4 hdB843 = r0;
    vec3 hdB845 = hdB841.xyz + hdB843.xyz;
    r0.x = hdB845.x;
    r0.y = hdB845.y;
    r0.z = hdB845.z;
    vec3 hdB856 = r0.www * v1.xyz;
    r1.x = hdB856.x;
    r1.y = hdB856.y;
    r1.z = hdB856.z;
    vec4 hdB868 = r0;
    vec3 hdB870 = (r1.xyz * r2.xxx) + hdB868.xyz;
    r0.x = hdB870.x;
    r0.y = hdB870.y;
    r0.z = hdB870.z;
    vec4 hdB877 = r0;
    vec3 hdB884 = hdB877.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB884.x;
    r0.y = hdB884.y;
    r0.z = hdB884.z;
    vec3 hdB899 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB899.x;
    oC0.y = hdB899.y;
    oC0.z = hdB899.z;
    oC0.w = 1.0;
    bool hdB912 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB920;
    if (hdB912)
    {
        hdB920 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB920 = hdB912;
    }
    if (hdB920)
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
    bool _3197 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3207;
    if (_3197)
    {
        _3207 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3207 = _3197;
    }
    if (_3207)
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
        bool _3232 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3247;
        if (!_3232)
        {
            _3247 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3247 = _3232;
        }
        if (_3247)
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
