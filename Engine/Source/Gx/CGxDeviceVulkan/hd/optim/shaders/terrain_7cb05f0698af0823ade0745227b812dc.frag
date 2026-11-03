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
float _RESERVED_IDENTIFIER_FIXUP_3454;
vec4 _RESERVED_IDENTIFIER_FIXUP_3455;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1081 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1085 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1089 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1093 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1097 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1107 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1081, _RESERVED_IDENTIFIER_FIXUP_1085, _RESERVED_IDENTIFIER_FIXUP_1097.xxxx), _RESERVED_IDENTIFIER_FIXUP_1089, _RESERVED_IDENTIFIER_FIXUP_1097.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1112 = mix(_RESERVED_IDENTIFIER_FIXUP_1107, _RESERVED_IDENTIFIER_FIXUP_1093, _RESERVED_IDENTIFIER_FIXUP_1097.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_1119 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2729 = _RESERVED_IDENTIFIER_FIXUP_1107;
    _RESERVED_IDENTIFIER_FIXUP_2729.x = _RESERVED_IDENTIFIER_FIXUP_1119;
    float _RESERVED_IDENTIFIER_FIXUP_1125 = clamp((_RESERVED_IDENTIFIER_FIXUP_1119 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2729.x = _RESERVED_IDENTIFIER_FIXUP_1125;
    float _RESERVED_IDENTIFIER_FIXUP_1131 = ((-_RESERVED_IDENTIFIER_FIXUP_1125) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2729.y = _RESERVED_IDENTIFIER_FIXUP_1131;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3457;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3456;
    if (_RESERVED_IDENTIFIER_FIXUP_1131 != (-_RESERVED_IDENTIFIER_FIXUP_1131))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1143 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2741 = _RESERVED_IDENTIFIER_FIXUP_2729;
        _RESERVED_IDENTIFIER_FIXUP_2741.y = _RESERVED_IDENTIFIER_FIXUP_1143.x;
        _RESERVED_IDENTIFIER_FIXUP_2741.z = _RESERVED_IDENTIFIER_FIXUP_1143.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_2741.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2745;
        _RESERVED_IDENTIFIER_FIXUP_2745.x = _RESERVED_IDENTIFIER_FIXUP_1153.x;
        _RESERVED_IDENTIFIER_FIXUP_2745.y = _RESERVED_IDENTIFIER_FIXUP_1153.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1163 = _RESERVED_IDENTIFIER_FIXUP_2741.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2749;
        _RESERVED_IDENTIFIER_FIXUP_2749.x = _RESERVED_IDENTIFIER_FIXUP_1163.x;
        _RESERVED_IDENTIFIER_FIXUP_2749.y = _RESERVED_IDENTIFIER_FIXUP_1163.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1173 = _RESERVED_IDENTIFIER_FIXUP_2741.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2753;
        _RESERVED_IDENTIFIER_FIXUP_2753.x = _RESERVED_IDENTIFIER_FIXUP_1173.x;
        _RESERVED_IDENTIFIER_FIXUP_2753.y = _RESERVED_IDENTIFIER_FIXUP_1173.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_2741.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2757;
        _RESERVED_IDENTIFIER_FIXUP_2757.x = _RESERVED_IDENTIFIER_FIXUP_1183.x;
        _RESERVED_IDENTIFIER_FIXUP_2757.y = _RESERVED_IDENTIFIER_FIXUP_1183.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1191 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1191.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1191.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1197 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_2745.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2749.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2753.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2757.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2745.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1197.y = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2749.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1197.z = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2753.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1197.w = hdLod5(param_11, param_12).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1254 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1197 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_2757.xy;
        float param_14 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1260 = hdLod5(param_13, param_14).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2741.y = _RESERVED_IDENTIFIER_FIXUP_1260;
        float _RESERVED_IDENTIFIER_FIXUP_1265 = float(_RESERVED_IDENTIFIER_FIXUP_1260 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2741.y = _RESERVED_IDENTIFIER_FIXUP_1265;
        float _RESERVED_IDENTIFIER_FIXUP_1268 = dot(_RESERVED_IDENTIFIER_FIXUP_1254, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2741.z = _RESERVED_IDENTIFIER_FIXUP_1268;
        float _RESERVED_IDENTIFIER_FIXUP_1274 = _RESERVED_IDENTIFIER_FIXUP_1265 + _RESERVED_IDENTIFIER_FIXUP_1268;
        _RESERVED_IDENTIFIER_FIXUP_2741.y = _RESERVED_IDENTIFIER_FIXUP_1274;
        float _RESERVED_IDENTIFIER_FIXUP_1279 = (_RESERVED_IDENTIFIER_FIXUP_1274 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2741.y = _RESERVED_IDENTIFIER_FIXUP_1279;
        _RESERVED_IDENTIFIER_FIXUP_2741.x = (_RESERVED_IDENTIFIER_FIXUP_1125 * _RESERVED_IDENTIFIER_FIXUP_1279) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3457 = _RESERVED_IDENTIFIER_FIXUP_1254;
        _RESERVED_IDENTIFIER_FIXUP_3456 = _RESERVED_IDENTIFIER_FIXUP_2741;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2739 = _RESERVED_IDENTIFIER_FIXUP_2729;
        _RESERVED_IDENTIFIER_FIXUP_2739.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3457 = _RESERVED_IDENTIFIER_FIXUP_1089;
        _RESERVED_IDENTIFIER_FIXUP_3456 = _RESERVED_IDENTIFIER_FIXUP_2739;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1297 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2813 = _RESERVED_IDENTIFIER_FIXUP_3456;
    _RESERVED_IDENTIFIER_FIXUP_2813.y = _RESERVED_IDENTIFIER_FIXUP_1297;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3460;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3458;
    if (_RESERVED_IDENTIFIER_FIXUP_1297 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1306 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2974 = _RESERVED_IDENTIFIER_FIXUP_2813;
        _RESERVED_IDENTIFIER_FIXUP_2974.y = _RESERVED_IDENTIFIER_FIXUP_1306.x;
        _RESERVED_IDENTIFIER_FIXUP_2974.z = _RESERVED_IDENTIFIER_FIXUP_1306.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_2974.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2978;
        _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1316.x;
        _RESERVED_IDENTIFIER_FIXUP_2978.y = _RESERVED_IDENTIFIER_FIXUP_1316.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1326 = _RESERVED_IDENTIFIER_FIXUP_2974.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2982;
        _RESERVED_IDENTIFIER_FIXUP_2982.x = _RESERVED_IDENTIFIER_FIXUP_1326.x;
        _RESERVED_IDENTIFIER_FIXUP_2982.y = _RESERVED_IDENTIFIER_FIXUP_1326.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1336 = _RESERVED_IDENTIFIER_FIXUP_2974.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2986;
        _RESERVED_IDENTIFIER_FIXUP_2986.x = _RESERVED_IDENTIFIER_FIXUP_1336.x;
        _RESERVED_IDENTIFIER_FIXUP_2986.y = _RESERVED_IDENTIFIER_FIXUP_1336.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1346 = _RESERVED_IDENTIFIER_FIXUP_2974.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2990;
        _RESERVED_IDENTIFIER_FIXUP_2990.x = _RESERVED_IDENTIFIER_FIXUP_1346.x;
        _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1346.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1354 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1354.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1354.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1360 = hdLod6(param_15, param_16);
        _RESERVED_IDENTIFIER_FIXUP_2978.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2982.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2986.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2990.w = 0.0;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2978.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1360.y = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2982.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1360.z = hdLod6(param_19, param_20).x;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_2986.xy;
        float param_22 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1360.w = hdLod6(param_21, param_22).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1417 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1360 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_2990.xy;
        float param_24 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1423 = hdLod6(param_23, param_24).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2974.y = _RESERVED_IDENTIFIER_FIXUP_1423;
        float _RESERVED_IDENTIFIER_FIXUP_1428 = float(_RESERVED_IDENTIFIER_FIXUP_1423 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2974.y = _RESERVED_IDENTIFIER_FIXUP_1428;
        float _RESERVED_IDENTIFIER_FIXUP_1431 = dot(_RESERVED_IDENTIFIER_FIXUP_1417, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2974.z = _RESERVED_IDENTIFIER_FIXUP_1431;
        float _RESERVED_IDENTIFIER_FIXUP_1437 = _RESERVED_IDENTIFIER_FIXUP_1428 + _RESERVED_IDENTIFIER_FIXUP_1431;
        _RESERVED_IDENTIFIER_FIXUP_2974.y = _RESERVED_IDENTIFIER_FIXUP_1437;
        _RESERVED_IDENTIFIER_FIXUP_2974.y = _RESERVED_IDENTIFIER_FIXUP_1437 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3460 = _RESERVED_IDENTIFIER_FIXUP_1417;
        _RESERVED_IDENTIFIER_FIXUP_3458 = _RESERVED_IDENTIFIER_FIXUP_2974;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1450 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2818 = _RESERVED_IDENTIFIER_FIXUP_2813;
        _RESERVED_IDENTIFIER_FIXUP_2818.z = _RESERVED_IDENTIFIER_FIXUP_1450;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3461;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3459;
        if (_RESERVED_IDENTIFIER_FIXUP_1450 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1459 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2908 = _RESERVED_IDENTIFIER_FIXUP_2818;
            _RESERVED_IDENTIFIER_FIXUP_2908.z = _RESERVED_IDENTIFIER_FIXUP_1459.x;
            _RESERVED_IDENTIFIER_FIXUP_2908.w = _RESERVED_IDENTIFIER_FIXUP_1459.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1469 = _RESERVED_IDENTIFIER_FIXUP_2908.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2912;
            _RESERVED_IDENTIFIER_FIXUP_2912.x = _RESERVED_IDENTIFIER_FIXUP_1469.x;
            _RESERVED_IDENTIFIER_FIXUP_2912.y = _RESERVED_IDENTIFIER_FIXUP_1469.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_2908.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2916;
            _RESERVED_IDENTIFIER_FIXUP_2916.x = _RESERVED_IDENTIFIER_FIXUP_1479.x;
            _RESERVED_IDENTIFIER_FIXUP_2916.y = _RESERVED_IDENTIFIER_FIXUP_1479.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1489 = _RESERVED_IDENTIFIER_FIXUP_2908.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2920;
            _RESERVED_IDENTIFIER_FIXUP_2920.x = _RESERVED_IDENTIFIER_FIXUP_1489.x;
            _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1489.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_2908.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2924;
            _RESERVED_IDENTIFIER_FIXUP_2924.x = _RESERVED_IDENTIFIER_FIXUP_1499.x;
            _RESERVED_IDENTIFIER_FIXUP_2924.y = _RESERVED_IDENTIFIER_FIXUP_1499.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1507 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_1507.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1507.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1513 = hdLod7(param_25, param_26);
            _RESERVED_IDENTIFIER_FIXUP_2912.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2916.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2920.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2924.w = 0.0;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2912.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1513.y = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2916.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1513.z = hdLod7(param_29, param_30).x;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2920.xy;
            float param_32 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1513.w = hdLod7(param_31, param_32).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1570 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1513 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2924.xy;
            float param_34 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1576 = hdLod7(param_33, param_34).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2908.z = _RESERVED_IDENTIFIER_FIXUP_1576;
            float _RESERVED_IDENTIFIER_FIXUP_1581 = float(_RESERVED_IDENTIFIER_FIXUP_1576 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2908.z = _RESERVED_IDENTIFIER_FIXUP_1581;
            float _RESERVED_IDENTIFIER_FIXUP_1584 = dot(_RESERVED_IDENTIFIER_FIXUP_1570, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2908.w = _RESERVED_IDENTIFIER_FIXUP_1584;
            float _RESERVED_IDENTIFIER_FIXUP_1590 = _RESERVED_IDENTIFIER_FIXUP_1581 + _RESERVED_IDENTIFIER_FIXUP_1584;
            _RESERVED_IDENTIFIER_FIXUP_2908.z = _RESERVED_IDENTIFIER_FIXUP_1590;
            _RESERVED_IDENTIFIER_FIXUP_2908.y = _RESERVED_IDENTIFIER_FIXUP_1590 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3461 = _RESERVED_IDENTIFIER_FIXUP_1570;
            _RESERVED_IDENTIFIER_FIXUP_3459 = _RESERVED_IDENTIFIER_FIXUP_2908;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2822 = _RESERVED_IDENTIFIER_FIXUP_3457;
            _RESERVED_IDENTIFIER_FIXUP_2822.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2822.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1606 = (_RESERVED_IDENTIFIER_FIXUP_2822.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2827;
            _RESERVED_IDENTIFIER_FIXUP_2827.x = _RESERVED_IDENTIFIER_FIXUP_1606.x;
            _RESERVED_IDENTIFIER_FIXUP_2827.y = _RESERVED_IDENTIFIER_FIXUP_1606.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1616 = _RESERVED_IDENTIFIER_FIXUP_2827.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2831;
            _RESERVED_IDENTIFIER_FIXUP_2831.x = _RESERVED_IDENTIFIER_FIXUP_1616.x;
            _RESERVED_IDENTIFIER_FIXUP_2831.y = _RESERVED_IDENTIFIER_FIXUP_1616.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_2827.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2835;
            _RESERVED_IDENTIFIER_FIXUP_2835.x = _RESERVED_IDENTIFIER_FIXUP_1626.x;
            _RESERVED_IDENTIFIER_FIXUP_2835.y = _RESERVED_IDENTIFIER_FIXUP_1626.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1636 = _RESERVED_IDENTIFIER_FIXUP_2827.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2839;
            _RESERVED_IDENTIFIER_FIXUP_2839.x = _RESERVED_IDENTIFIER_FIXUP_1636.x;
            _RESERVED_IDENTIFIER_FIXUP_2839.y = _RESERVED_IDENTIFIER_FIXUP_1636.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1646 = _RESERVED_IDENTIFIER_FIXUP_2827.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2843;
            _RESERVED_IDENTIFIER_FIXUP_2843.x = _RESERVED_IDENTIFIER_FIXUP_1646.x;
            _RESERVED_IDENTIFIER_FIXUP_2843.y = _RESERVED_IDENTIFIER_FIXUP_1646.y;
            _RESERVED_IDENTIFIER_FIXUP_2827.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_2827.xy;
            float param_36 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1660 = hdLod8(param_35, param_36);
            _RESERVED_IDENTIFIER_FIXUP_2831.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2835.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2839.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2843.w = 0.0;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2831.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1660.y = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2835.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1660.z = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2839.xy;
            float param_42 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1660.w = hdLod8(param_41, param_42).x;
            vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_2843.xy;
            float param_44 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1723 = hdLod8(param_43, param_44).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2883 = _RESERVED_IDENTIFIER_FIXUP_2818;
            _RESERVED_IDENTIFIER_FIXUP_2883.z = _RESERVED_IDENTIFIER_FIXUP_1723;
            float _RESERVED_IDENTIFIER_FIXUP_1728 = float(_RESERVED_IDENTIFIER_FIXUP_1723 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2883.z = _RESERVED_IDENTIFIER_FIXUP_1728;
            float _RESERVED_IDENTIFIER_FIXUP_1731 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1660 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2883.w = _RESERVED_IDENTIFIER_FIXUP_1731;
            float _RESERVED_IDENTIFIER_FIXUP_1737 = _RESERVED_IDENTIFIER_FIXUP_1728 + _RESERVED_IDENTIFIER_FIXUP_1731;
            _RESERVED_IDENTIFIER_FIXUP_2883.z = _RESERVED_IDENTIFIER_FIXUP_1737;
            float _RESERVED_IDENTIFIER_FIXUP_1745 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2883.w = _RESERVED_IDENTIFIER_FIXUP_1745;
            float _RESERVED_IDENTIFIER_FIXUP_1751 = clamp((_RESERVED_IDENTIFIER_FIXUP_1745 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2883.w = _RESERVED_IDENTIFIER_FIXUP_1751;
            float _RESERVED_IDENTIFIER_FIXUP_1756 = (_RESERVED_IDENTIFIER_FIXUP_1737 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2883.z = _RESERVED_IDENTIFIER_FIXUP_1756;
            _RESERVED_IDENTIFIER_FIXUP_2883.y = (_RESERVED_IDENTIFIER_FIXUP_1751 * _RESERVED_IDENTIFIER_FIXUP_1756) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3461 = _RESERVED_IDENTIFIER_FIXUP_2822;
            _RESERVED_IDENTIFIER_FIXUP_3459 = _RESERVED_IDENTIFIER_FIXUP_2883;
        }
        _RESERVED_IDENTIFIER_FIXUP_3460 = _RESERVED_IDENTIFIER_FIXUP_3461;
        _RESERVED_IDENTIFIER_FIXUP_3458 = _RESERVED_IDENTIFIER_FIXUP_3459;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1771 = min(_RESERVED_IDENTIFIER_FIXUP_3458.y, _RESERVED_IDENTIFIER_FIXUP_3458.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3042 = _RESERVED_IDENTIFIER_FIXUP_3460;
    _RESERVED_IDENTIFIER_FIXUP_3042.x = _RESERVED_IDENTIFIER_FIXUP_1771;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3045 = _RESERVED_IDENTIFIER_FIXUP_3458;
    _RESERVED_IDENTIFIER_FIXUP_3045.x = (_RESERVED_IDENTIFIER_FIXUP_1771 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1782 = _RESERVED_IDENTIFIER_FIXUP_1112.xyz * _RESERVED_IDENTIFIER_FIXUP_3045.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3047 = _RESERVED_IDENTIFIER_FIXUP_3045;
    _RESERVED_IDENTIFIER_FIXUP_3047.x = _RESERVED_IDENTIFIER_FIXUP_1782.x;
    _RESERVED_IDENTIFIER_FIXUP_3047.y = _RESERVED_IDENTIFIER_FIXUP_1782.y;
    _RESERVED_IDENTIFIER_FIXUP_3047.z = _RESERVED_IDENTIFIER_FIXUP_1782.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1793 = _RESERVED_IDENTIFIER_FIXUP_3047.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3454).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3053 = _RESERVED_IDENTIFIER_FIXUP_3047;
    _RESERVED_IDENTIFIER_FIXUP_3053.x = _RESERVED_IDENTIFIER_FIXUP_1793.x;
    _RESERVED_IDENTIFIER_FIXUP_3053.y = _RESERVED_IDENTIFIER_FIXUP_1793.y;
    _RESERVED_IDENTIFIER_FIXUP_3053.z = _RESERVED_IDENTIFIER_FIXUP_1793.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1804 = _RESERVED_IDENTIFIER_FIXUP_3053.xyz + _RESERVED_IDENTIFIER_FIXUP_3053.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3059 = _RESERVED_IDENTIFIER_FIXUP_3053;
    _RESERVED_IDENTIFIER_FIXUP_3059.x = _RESERVED_IDENTIFIER_FIXUP_1804.x;
    _RESERVED_IDENTIFIER_FIXUP_3059.y = _RESERVED_IDENTIFIER_FIXUP_1804.y;
    _RESERVED_IDENTIFIER_FIXUP_3059.z = _RESERVED_IDENTIFIER_FIXUP_1804.z;
    _RESERVED_IDENTIFIER_FIXUP_1112.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1112.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1112.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1829 = (_RESERVED_IDENTIFIER_FIXUP_1112.xyz * _RESERVED_IDENTIFIER_FIXUP_3042.xxx) + _RESERVED_IDENTIFIER_FIXUP_3059.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3071 = _RESERVED_IDENTIFIER_FIXUP_3059;
    _RESERVED_IDENTIFIER_FIXUP_3071.x = _RESERVED_IDENTIFIER_FIXUP_1829.x;
    _RESERVED_IDENTIFIER_FIXUP_3071.y = _RESERVED_IDENTIFIER_FIXUP_1829.y;
    _RESERVED_IDENTIFIER_FIXUP_3071.z = _RESERVED_IDENTIFIER_FIXUP_1829.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1842 = _RESERVED_IDENTIFIER_FIXUP_3071.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3077 = _RESERVED_IDENTIFIER_FIXUP_3071;
    _RESERVED_IDENTIFIER_FIXUP_3077.x = _RESERVED_IDENTIFIER_FIXUP_1842.x;
    _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_1842.y;
    _RESERVED_IDENTIFIER_FIXUP_3077.z = _RESERVED_IDENTIFIER_FIXUP_1842.z;
    vec2 param_45 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1899 = hdTex0(param_45);
    vec2 param_46 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1903 = hdTex1(param_46);
    vec2 param_47 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1907 = hdTex2(param_47);
    vec2 param_48 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1911 = hdTex3(param_48);
    vec2 param_49 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1915 = hdTex4(param_49);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1925 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1899, _RESERVED_IDENTIFIER_FIXUP_1903, _RESERVED_IDENTIFIER_FIXUP_1915.xxxx), _RESERVED_IDENTIFIER_FIXUP_1907, _RESERVED_IDENTIFIER_FIXUP_1915.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1930 = mix(_RESERVED_IDENTIFIER_FIXUP_1925, _RESERVED_IDENTIFIER_FIXUP_1911, _RESERVED_IDENTIFIER_FIXUP_1915.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3093 = _RESERVED_IDENTIFIER_FIXUP_1925;
    _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_1119;
    float _RESERVED_IDENTIFIER_FIXUP_1943 = clamp((_RESERVED_IDENTIFIER_FIXUP_1119 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_1943;
    float _RESERVED_IDENTIFIER_FIXUP_1949 = ((-_RESERVED_IDENTIFIER_FIXUP_1943) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_1949;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3469;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3468;
    if (_RESERVED_IDENTIFIER_FIXUP_1949 != (-_RESERVED_IDENTIFIER_FIXUP_1949))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1961 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3105 = _RESERVED_IDENTIFIER_FIXUP_3093;
        _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_1961.x;
        _RESERVED_IDENTIFIER_FIXUP_3105.z = _RESERVED_IDENTIFIER_FIXUP_1961.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1971 = _RESERVED_IDENTIFIER_FIXUP_3105.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3109;
        _RESERVED_IDENTIFIER_FIXUP_3109.x = _RESERVED_IDENTIFIER_FIXUP_1971.x;
        _RESERVED_IDENTIFIER_FIXUP_3109.y = _RESERVED_IDENTIFIER_FIXUP_1971.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1981 = _RESERVED_IDENTIFIER_FIXUP_3105.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3113;
        _RESERVED_IDENTIFIER_FIXUP_3113.x = _RESERVED_IDENTIFIER_FIXUP_1981.x;
        _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1981.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1991 = _RESERVED_IDENTIFIER_FIXUP_3105.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3117;
        _RESERVED_IDENTIFIER_FIXUP_3117.x = _RESERVED_IDENTIFIER_FIXUP_1991.x;
        _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1991.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2001 = _RESERVED_IDENTIFIER_FIXUP_3105.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3121;
        _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_2001.x;
        _RESERVED_IDENTIFIER_FIXUP_3121.y = _RESERVED_IDENTIFIER_FIXUP_2001.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2009 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2009.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2009.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2015 = hdLod5(param_50, param_51);
        _RESERVED_IDENTIFIER_FIXUP_3109.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3113.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3117.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3121.w = 0.0;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3109.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2015.y = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3113.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2015.z = hdLod5(param_54, param_55).x;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3117.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2015.w = hdLod5(param_56, param_57).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2072 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2015 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3121.xy;
        float param_59 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2078 = hdLod5(param_58, param_59).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_2078;
        float _RESERVED_IDENTIFIER_FIXUP_2083 = float(_RESERVED_IDENTIFIER_FIXUP_2078 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_2083;
        float _RESERVED_IDENTIFIER_FIXUP_2086 = dot(_RESERVED_IDENTIFIER_FIXUP_2072, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3105.z = _RESERVED_IDENTIFIER_FIXUP_2086;
        float _RESERVED_IDENTIFIER_FIXUP_2092 = _RESERVED_IDENTIFIER_FIXUP_2083 + _RESERVED_IDENTIFIER_FIXUP_2086;
        _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_2092;
        float _RESERVED_IDENTIFIER_FIXUP_2097 = (_RESERVED_IDENTIFIER_FIXUP_2092 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_2097;
        _RESERVED_IDENTIFIER_FIXUP_3105.x = (_RESERVED_IDENTIFIER_FIXUP_1943 * _RESERVED_IDENTIFIER_FIXUP_2097) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3469 = _RESERVED_IDENTIFIER_FIXUP_2072;
        _RESERVED_IDENTIFIER_FIXUP_3468 = _RESERVED_IDENTIFIER_FIXUP_3105;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3103 = _RESERVED_IDENTIFIER_FIXUP_3093;
        _RESERVED_IDENTIFIER_FIXUP_3103.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3469 = _RESERVED_IDENTIFIER_FIXUP_1907;
        _RESERVED_IDENTIFIER_FIXUP_3468 = _RESERVED_IDENTIFIER_FIXUP_3103;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3177 = _RESERVED_IDENTIFIER_FIXUP_3468;
    _RESERVED_IDENTIFIER_FIXUP_3177.y = _RESERVED_IDENTIFIER_FIXUP_1297;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3472;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3470;
    if (_RESERVED_IDENTIFIER_FIXUP_1297 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2124 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3338 = _RESERVED_IDENTIFIER_FIXUP_3177;
        _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2124.x;
        _RESERVED_IDENTIFIER_FIXUP_3338.z = _RESERVED_IDENTIFIER_FIXUP_2124.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2134 = _RESERVED_IDENTIFIER_FIXUP_3338.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3342;
        _RESERVED_IDENTIFIER_FIXUP_3342.x = _RESERVED_IDENTIFIER_FIXUP_2134.x;
        _RESERVED_IDENTIFIER_FIXUP_3342.y = _RESERVED_IDENTIFIER_FIXUP_2134.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2144 = _RESERVED_IDENTIFIER_FIXUP_3338.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3346;
        _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_2144.x;
        _RESERVED_IDENTIFIER_FIXUP_3346.y = _RESERVED_IDENTIFIER_FIXUP_2144.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2154 = _RESERVED_IDENTIFIER_FIXUP_3338.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3350;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_2154.x;
        _RESERVED_IDENTIFIER_FIXUP_3350.y = _RESERVED_IDENTIFIER_FIXUP_2154.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2164 = _RESERVED_IDENTIFIER_FIXUP_3338.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3354;
        _RESERVED_IDENTIFIER_FIXUP_3354.x = _RESERVED_IDENTIFIER_FIXUP_2164.x;
        _RESERVED_IDENTIFIER_FIXUP_3354.y = _RESERVED_IDENTIFIER_FIXUP_2164.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2172 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_2172.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2172.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2178 = hdLod6(param_60, param_61);
        _RESERVED_IDENTIFIER_FIXUP_3342.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3346.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3350.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3354.w = 0.0;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3342.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2178.y = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3346.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2178.z = hdLod6(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3350.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2178.w = hdLod6(param_66, param_67).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2235 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2178 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3354.xy;
        float param_69 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2241 = hdLod6(param_68, param_69).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2241;
        float _RESERVED_IDENTIFIER_FIXUP_2246 = float(_RESERVED_IDENTIFIER_FIXUP_2241 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2246;
        float _RESERVED_IDENTIFIER_FIXUP_2249 = dot(_RESERVED_IDENTIFIER_FIXUP_2235, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3338.z = _RESERVED_IDENTIFIER_FIXUP_2249;
        float _RESERVED_IDENTIFIER_FIXUP_2255 = _RESERVED_IDENTIFIER_FIXUP_2246 + _RESERVED_IDENTIFIER_FIXUP_2249;
        _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2255;
        _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2255 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3472 = _RESERVED_IDENTIFIER_FIXUP_2235;
        _RESERVED_IDENTIFIER_FIXUP_3470 = _RESERVED_IDENTIFIER_FIXUP_3338;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2268 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3182 = _RESERVED_IDENTIFIER_FIXUP_3177;
        _RESERVED_IDENTIFIER_FIXUP_3182.z = _RESERVED_IDENTIFIER_FIXUP_2268;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3473;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3471;
        if (_RESERVED_IDENTIFIER_FIXUP_2268 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2277 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3272 = _RESERVED_IDENTIFIER_FIXUP_3182;
            _RESERVED_IDENTIFIER_FIXUP_3272.z = _RESERVED_IDENTIFIER_FIXUP_2277.x;
            _RESERVED_IDENTIFIER_FIXUP_3272.w = _RESERVED_IDENTIFIER_FIXUP_2277.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2287 = _RESERVED_IDENTIFIER_FIXUP_3272.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3276;
            _RESERVED_IDENTIFIER_FIXUP_3276.x = _RESERVED_IDENTIFIER_FIXUP_2287.x;
            _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_2287.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2297 = _RESERVED_IDENTIFIER_FIXUP_3272.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3280;
            _RESERVED_IDENTIFIER_FIXUP_3280.x = _RESERVED_IDENTIFIER_FIXUP_2297.x;
            _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_2297.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2307 = _RESERVED_IDENTIFIER_FIXUP_3272.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3284;
            _RESERVED_IDENTIFIER_FIXUP_3284.x = _RESERVED_IDENTIFIER_FIXUP_2307.x;
            _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_2307.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2317 = _RESERVED_IDENTIFIER_FIXUP_3272.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3288;
            _RESERVED_IDENTIFIER_FIXUP_3288.x = _RESERVED_IDENTIFIER_FIXUP_2317.x;
            _RESERVED_IDENTIFIER_FIXUP_3288.y = _RESERVED_IDENTIFIER_FIXUP_2317.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2325 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2325.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2325.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2331 = hdLod7(param_70, param_71);
            _RESERVED_IDENTIFIER_FIXUP_3276.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3280.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3284.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3288.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3276.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2331.y = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3280.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2331.z = hdLod7(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3284.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2331.w = hdLod7(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2388 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2331 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3288.xy;
            float param_79 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2394 = hdLod7(param_78, param_79).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3272.z = _RESERVED_IDENTIFIER_FIXUP_2394;
            float _RESERVED_IDENTIFIER_FIXUP_2399 = float(_RESERVED_IDENTIFIER_FIXUP_2394 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3272.z = _RESERVED_IDENTIFIER_FIXUP_2399;
            float _RESERVED_IDENTIFIER_FIXUP_2402 = dot(_RESERVED_IDENTIFIER_FIXUP_2388, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3272.w = _RESERVED_IDENTIFIER_FIXUP_2402;
            float _RESERVED_IDENTIFIER_FIXUP_2408 = _RESERVED_IDENTIFIER_FIXUP_2399 + _RESERVED_IDENTIFIER_FIXUP_2402;
            _RESERVED_IDENTIFIER_FIXUP_3272.z = _RESERVED_IDENTIFIER_FIXUP_2408;
            _RESERVED_IDENTIFIER_FIXUP_3272.y = _RESERVED_IDENTIFIER_FIXUP_2408 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3473 = _RESERVED_IDENTIFIER_FIXUP_2388;
            _RESERVED_IDENTIFIER_FIXUP_3471 = _RESERVED_IDENTIFIER_FIXUP_3272;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3186 = _RESERVED_IDENTIFIER_FIXUP_3469;
            _RESERVED_IDENTIFIER_FIXUP_3186.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3186.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2424 = (_RESERVED_IDENTIFIER_FIXUP_3186.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3191;
            _RESERVED_IDENTIFIER_FIXUP_3191.x = _RESERVED_IDENTIFIER_FIXUP_2424.x;
            _RESERVED_IDENTIFIER_FIXUP_3191.y = _RESERVED_IDENTIFIER_FIXUP_2424.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2434 = _RESERVED_IDENTIFIER_FIXUP_3191.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3195;
            _RESERVED_IDENTIFIER_FIXUP_3195.x = _RESERVED_IDENTIFIER_FIXUP_2434.x;
            _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_2434.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2444 = _RESERVED_IDENTIFIER_FIXUP_3191.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3199;
            _RESERVED_IDENTIFIER_FIXUP_3199.x = _RESERVED_IDENTIFIER_FIXUP_2444.x;
            _RESERVED_IDENTIFIER_FIXUP_3199.y = _RESERVED_IDENTIFIER_FIXUP_2444.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2454 = _RESERVED_IDENTIFIER_FIXUP_3191.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3203;
            _RESERVED_IDENTIFIER_FIXUP_3203.x = _RESERVED_IDENTIFIER_FIXUP_2454.x;
            _RESERVED_IDENTIFIER_FIXUP_3203.y = _RESERVED_IDENTIFIER_FIXUP_2454.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2464 = _RESERVED_IDENTIFIER_FIXUP_3191.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3207;
            _RESERVED_IDENTIFIER_FIXUP_3207.x = _RESERVED_IDENTIFIER_FIXUP_2464.x;
            _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_2464.y;
            _RESERVED_IDENTIFIER_FIXUP_3191.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3191.xy;
            float param_81 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2478 = hdLod8(param_80, param_81);
            _RESERVED_IDENTIFIER_FIXUP_3195.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3199.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3203.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3207.w = 0.0;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3195.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2478.y = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3199.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2478.z = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3203.xy;
            float param_87 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2478.w = hdLod8(param_86, param_87).x;
            vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3207.xy;
            float param_89 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2541 = hdLod8(param_88, param_89).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3247 = _RESERVED_IDENTIFIER_FIXUP_3182;
            _RESERVED_IDENTIFIER_FIXUP_3247.z = _RESERVED_IDENTIFIER_FIXUP_2541;
            float _RESERVED_IDENTIFIER_FIXUP_2546 = float(_RESERVED_IDENTIFIER_FIXUP_2541 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3247.z = _RESERVED_IDENTIFIER_FIXUP_2546;
            float _RESERVED_IDENTIFIER_FIXUP_2549 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2478 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3247.w = _RESERVED_IDENTIFIER_FIXUP_2549;
            float _RESERVED_IDENTIFIER_FIXUP_2555 = _RESERVED_IDENTIFIER_FIXUP_2546 + _RESERVED_IDENTIFIER_FIXUP_2549;
            _RESERVED_IDENTIFIER_FIXUP_3247.z = _RESERVED_IDENTIFIER_FIXUP_2555;
            float _RESERVED_IDENTIFIER_FIXUP_2563 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3247.w = _RESERVED_IDENTIFIER_FIXUP_2563;
            float _RESERVED_IDENTIFIER_FIXUP_2569 = clamp((_RESERVED_IDENTIFIER_FIXUP_2563 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3247.w = _RESERVED_IDENTIFIER_FIXUP_2569;
            float _RESERVED_IDENTIFIER_FIXUP_2574 = (_RESERVED_IDENTIFIER_FIXUP_2555 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3247.z = _RESERVED_IDENTIFIER_FIXUP_2574;
            _RESERVED_IDENTIFIER_FIXUP_3247.y = (_RESERVED_IDENTIFIER_FIXUP_2569 * _RESERVED_IDENTIFIER_FIXUP_2574) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3473 = _RESERVED_IDENTIFIER_FIXUP_3186;
            _RESERVED_IDENTIFIER_FIXUP_3471 = _RESERVED_IDENTIFIER_FIXUP_3247;
        }
        _RESERVED_IDENTIFIER_FIXUP_3472 = _RESERVED_IDENTIFIER_FIXUP_3473;
        _RESERVED_IDENTIFIER_FIXUP_3470 = _RESERVED_IDENTIFIER_FIXUP_3471;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2589 = min(_RESERVED_IDENTIFIER_FIXUP_3470.y, _RESERVED_IDENTIFIER_FIXUP_3470.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3406 = _RESERVED_IDENTIFIER_FIXUP_3472;
    _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_2589;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3409 = _RESERVED_IDENTIFIER_FIXUP_3470;
    _RESERVED_IDENTIFIER_FIXUP_3409.x = (_RESERVED_IDENTIFIER_FIXUP_2589 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2600 = _RESERVED_IDENTIFIER_FIXUP_1930.xyz * _RESERVED_IDENTIFIER_FIXUP_3409.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3411 = _RESERVED_IDENTIFIER_FIXUP_3409;
    _RESERVED_IDENTIFIER_FIXUP_3411.x = _RESERVED_IDENTIFIER_FIXUP_2600.x;
    _RESERVED_IDENTIFIER_FIXUP_3411.y = _RESERVED_IDENTIFIER_FIXUP_2600.y;
    _RESERVED_IDENTIFIER_FIXUP_3411.z = _RESERVED_IDENTIFIER_FIXUP_2600.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2611 = _RESERVED_IDENTIFIER_FIXUP_3411.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3417 = _RESERVED_IDENTIFIER_FIXUP_3411;
    _RESERVED_IDENTIFIER_FIXUP_3417.x = _RESERVED_IDENTIFIER_FIXUP_2611.x;
    _RESERVED_IDENTIFIER_FIXUP_3417.y = _RESERVED_IDENTIFIER_FIXUP_2611.y;
    _RESERVED_IDENTIFIER_FIXUP_3417.z = _RESERVED_IDENTIFIER_FIXUP_2611.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2622 = _RESERVED_IDENTIFIER_FIXUP_3417.xyz + _RESERVED_IDENTIFIER_FIXUP_3417.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3423 = _RESERVED_IDENTIFIER_FIXUP_3417;
    _RESERVED_IDENTIFIER_FIXUP_3423.x = _RESERVED_IDENTIFIER_FIXUP_2622.x;
    _RESERVED_IDENTIFIER_FIXUP_3423.y = _RESERVED_IDENTIFIER_FIXUP_2622.y;
    _RESERVED_IDENTIFIER_FIXUP_3423.z = _RESERVED_IDENTIFIER_FIXUP_2622.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2633 = _RESERVED_IDENTIFIER_FIXUP_1930.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3429 = _RESERVED_IDENTIFIER_FIXUP_1930;
    _RESERVED_IDENTIFIER_FIXUP_3429.x = _RESERVED_IDENTIFIER_FIXUP_2633.x;
    _RESERVED_IDENTIFIER_FIXUP_3429.y = _RESERVED_IDENTIFIER_FIXUP_2633.y;
    _RESERVED_IDENTIFIER_FIXUP_3429.z = _RESERVED_IDENTIFIER_FIXUP_2633.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2647 = (_RESERVED_IDENTIFIER_FIXUP_3429.xyz * _RESERVED_IDENTIFIER_FIXUP_3406.xxx) + _RESERVED_IDENTIFIER_FIXUP_3423.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3435 = _RESERVED_IDENTIFIER_FIXUP_3423;
    _RESERVED_IDENTIFIER_FIXUP_3435.x = _RESERVED_IDENTIFIER_FIXUP_2647.x;
    _RESERVED_IDENTIFIER_FIXUP_3435.y = _RESERVED_IDENTIFIER_FIXUP_2647.y;
    _RESERVED_IDENTIFIER_FIXUP_3435.z = _RESERVED_IDENTIFIER_FIXUP_2647.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2660 = _RESERVED_IDENTIFIER_FIXUP_3435.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3441 = _RESERVED_IDENTIFIER_FIXUP_3435;
    _RESERVED_IDENTIFIER_FIXUP_3441.x = _RESERVED_IDENTIFIER_FIXUP_2660.x;
    _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_2660.y;
    _RESERVED_IDENTIFIER_FIXUP_3441.z = _RESERVED_IDENTIFIER_FIXUP_2660.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3441.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_939 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_948;
    if (_RESERVED_IDENTIFIER_FIXUP_939)
    {
        _RESERVED_IDENTIFIER_FIXUP_948 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_948 = _RESERVED_IDENTIFIER_FIXUP_939;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_948)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_985 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3077.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1012 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2719;
    if (_RESERVED_IDENTIFIER_FIXUP_985 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2719 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_985), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1012);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2719 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1012);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2719;
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
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB136 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB136.x;
        r0.z = hdB136.y;
        vec2 hdB158 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB158.x;
        r2.y = hdB158.y;
        vec2 hdB169 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB169.x;
        r3.y = hdB169.y;
        vec2 hdB180 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB180.x;
        r4.y = hdB180.y;
        vec2 hdB191 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB191.x;
        r5.y = hdB191.y;
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
        r0.y = r5.x + (-v5.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v6.x), abs(v6.y));
    if (r0.y < 1.0)
    {
        vec2 hdB322 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB322.x;
        r0.z = hdB322.y;
        vec2 hdB332 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB332.x;
        r2.y = hdB332.y;
        vec2 hdB342 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB342.x;
        r3.y = hdB342.y;
        vec2 hdB352 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB352.x;
        r4.y = hdB352.y;
        vec2 hdB362 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB362.x;
        r5.y = hdB362.y;
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
        r0.y = r5.x + (-v6.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v7.x), abs(v7.y));
        if (r0.z < 1.0)
        {
            vec2 hdB477 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB477.x;
            r0.w = hdB477.y;
            vec2 hdB487 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB487.x;
            r2.y = hdB487.y;
            vec2 hdB497 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB497.x;
            r3.y = hdB497.y;
            vec2 hdB507 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB507.x;
            r4.y = hdB507.y;
            vec2 hdB517 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB517.x;
            r5.y = hdB517.y;
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
            r0.z = r5.x + (-v7.z);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r2, vec4(1.0));
            r0.z += r0.w;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v5.w;
            r2.y = v6.w;
            vec2 hdB625 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB625.x;
            r3.y = hdB625.y;
            vec2 hdB635 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB635.x;
            r4.y = hdB635.y;
            vec2 hdB645 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB645.x;
            r5.y = hdB645.y;
            vec2 hdB655 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB655.x;
            r6.y = hdB655.y;
            vec2 hdB665 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB665.x;
            r7.y = hdB665.y;
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
            r0.z = r7.x + (-v7.w);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r3, vec4(1.0));
            r0.z += r0.w;
            r0.w = max(abs(r2.x), abs(r2.y));
            r0.w = clamp((r0.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.z = (r0.z * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.w * r0.z) + 1.0;
        }
    }
    r2.x = min(r0.y, r0.x);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB803 = r0;
    vec3 hdB805 = r1.xyz * hdB803.xxx;
    r0.x = hdB805.x;
    r0.y = hdB805.y;
    r0.z = hdB805.z;
    vec4 hdB812 = r0;
    vec3 hdB816 = hdB812.xyz * v0.xyz;
    r0.x = hdB816.x;
    r0.y = hdB816.y;
    r0.z = hdB816.z;
    vec4 hdB823 = r0;
    vec4 hdB825 = r0;
    vec3 hdB827 = hdB823.xyz + hdB825.xyz;
    r0.x = hdB827.x;
    r0.y = hdB827.y;
    r0.z = hdB827.z;
    vec4 hdB834 = r1;
    vec3 hdB838 = hdB834.www * v1.xyz;
    r1.x = hdB838.x;
    r1.y = hdB838.y;
    r1.z = hdB838.z;
    vec4 hdB850 = r0;
    vec3 hdB852 = (r1.xyz * r2.xxx) + hdB850.xyz;
    r0.x = hdB852.x;
    r0.y = hdB852.y;
    r0.z = hdB852.z;
    vec4 hdB859 = r0;
    vec3 hdB866 = hdB859.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB866.x;
    r0.y = hdB866.y;
    r0.z = hdB866.z;
    vec3 hdB881 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB881.x;
    oC0.y = hdB881.y;
    oC0.z = hdB881.z;
    oC0.w = 1.0;
    bool hdB894 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB902;
    if (hdB894)
    {
        hdB902 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB902 = hdB894;
    }
    if (hdB902)
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
    bool _3147 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3157;
    if (_3147)
    {
        _3157 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3157 = _3147;
    }
    if (_3157)
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
        bool _3182 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3197;
        if (!_3182)
        {
            _3197 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3197 = _3182;
        }
        if (_3197)
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
