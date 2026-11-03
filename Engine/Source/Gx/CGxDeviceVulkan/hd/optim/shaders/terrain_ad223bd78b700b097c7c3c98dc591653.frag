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
float _RESERVED_IDENTIFIER_FIXUP_3303;
vec4 _RESERVED_IDENTIFIER_FIXUP_3304;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1052 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1056 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1060 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1064 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1068 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1078 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1052, _RESERVED_IDENTIFIER_FIXUP_1056, _RESERVED_IDENTIFIER_FIXUP_1068.xxxx), _RESERVED_IDENTIFIER_FIXUP_1060, _RESERVED_IDENTIFIER_FIXUP_1068.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1083 = mix(_RESERVED_IDENTIFIER_FIXUP_1078, _RESERVED_IDENTIFIER_FIXUP_1064, _RESERVED_IDENTIFIER_FIXUP_1068.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_1090 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2646 = _RESERVED_IDENTIFIER_FIXUP_1078;
    _RESERVED_IDENTIFIER_FIXUP_2646.x = _RESERVED_IDENTIFIER_FIXUP_1090;
    float _RESERVED_IDENTIFIER_FIXUP_1096 = clamp((_RESERVED_IDENTIFIER_FIXUP_1090 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2646.x = _RESERVED_IDENTIFIER_FIXUP_1096;
    float _RESERVED_IDENTIFIER_FIXUP_1102 = ((-_RESERVED_IDENTIFIER_FIXUP_1096) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2646.y = _RESERVED_IDENTIFIER_FIXUP_1102;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3305;
    if (_RESERVED_IDENTIFIER_FIXUP_1102 != (-_RESERVED_IDENTIFIER_FIXUP_1102))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1114 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1124 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1126 = _RESERVED_IDENTIFIER_FIXUP_1124.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2659 = _RESERVED_IDENTIFIER_FIXUP_2646;
        _RESERVED_IDENTIFIER_FIXUP_2659.y = _RESERVED_IDENTIFIER_FIXUP_1126;
        _RESERVED_IDENTIFIER_FIXUP_2659.z = _RESERVED_IDENTIFIER_FIXUP_1124.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1134 = _RESERVED_IDENTIFIER_FIXUP_2659.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2663;
        _RESERVED_IDENTIFIER_FIXUP_2663.x = _RESERVED_IDENTIFIER_FIXUP_1134.x;
        _RESERVED_IDENTIFIER_FIXUP_2663.y = _RESERVED_IDENTIFIER_FIXUP_1134.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1141 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1145 = _RESERVED_IDENTIFIER_FIXUP_1141.y;
        _RESERVED_IDENTIFIER_FIXUP_2663.w = _RESERVED_IDENTIFIER_FIXUP_1145;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1114.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1114.w;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2663.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1145;
        float _RESERVED_IDENTIFIER_FIXUP_1156 = hdLod5(param_5, param_6).x + hdLod5(param_7, param_8).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3331 = vec4(_RESERVED_IDENTIFIER_FIXUP_1096, _RESERVED_IDENTIFIER_FIXUP_1126, _RESERVED_IDENTIFIER_FIXUP_1124.y, _RESERVED_IDENTIFIER_FIXUP_1156);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1163 = _RESERVED_IDENTIFIER_FIXUP_3331.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2676;
        _RESERVED_IDENTIFIER_FIXUP_2676.x = _RESERVED_IDENTIFIER_FIXUP_1163.x;
        _RESERVED_IDENTIFIER_FIXUP_2676.y = _RESERVED_IDENTIFIER_FIXUP_1163.y;
        _RESERVED_IDENTIFIER_FIXUP_2676.w = _RESERVED_IDENTIFIER_FIXUP_1145;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2676.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1145;
        float _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_1156 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3331.w = _RESERVED_IDENTIFIER_FIXUP_1185;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1192 = _RESERVED_IDENTIFIER_FIXUP_3331.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2689;
        _RESERVED_IDENTIFIER_FIXUP_2689.x = _RESERVED_IDENTIFIER_FIXUP_1192.x;
        _RESERVED_IDENTIFIER_FIXUP_2689.y = _RESERVED_IDENTIFIER_FIXUP_1192.y;
        _RESERVED_IDENTIFIER_FIXUP_2689.w = _RESERVED_IDENTIFIER_FIXUP_1145;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2689.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1145;
        float _RESERVED_IDENTIFIER_FIXUP_1214 = _RESERVED_IDENTIFIER_FIXUP_1185 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3331.w = _RESERVED_IDENTIFIER_FIXUP_1214;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1221 = _RESERVED_IDENTIFIER_FIXUP_3331.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2702;
        _RESERVED_IDENTIFIER_FIXUP_2702.x = _RESERVED_IDENTIFIER_FIXUP_1221.x;
        _RESERVED_IDENTIFIER_FIXUP_2702.y = _RESERVED_IDENTIFIER_FIXUP_1221.y;
        _RESERVED_IDENTIFIER_FIXUP_2702.w = _RESERVED_IDENTIFIER_FIXUP_1145;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_2702.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1145;
        float _RESERVED_IDENTIFIER_FIXUP_1243 = _RESERVED_IDENTIFIER_FIXUP_1214 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3331.y = _RESERVED_IDENTIFIER_FIXUP_1243;
        float _RESERVED_IDENTIFIER_FIXUP_1248 = (_RESERVED_IDENTIFIER_FIXUP_1243 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3331.y = _RESERVED_IDENTIFIER_FIXUP_1248;
        _RESERVED_IDENTIFIER_FIXUP_3331.x = (_RESERVED_IDENTIFIER_FIXUP_1096 * _RESERVED_IDENTIFIER_FIXUP_1248) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_3331;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2656 = _RESERVED_IDENTIFIER_FIXUP_2646;
        _RESERVED_IDENTIFIER_FIXUP_2656.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_2656;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1266 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2724 = _RESERVED_IDENTIFIER_FIXUP_3305;
    _RESERVED_IDENTIFIER_FIXUP_2724.y = _RESERVED_IDENTIFIER_FIXUP_1266;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3308;
    if (_RESERVED_IDENTIFIER_FIXUP_1266 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1275 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1285 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2864 = _RESERVED_IDENTIFIER_FIXUP_2724;
        _RESERVED_IDENTIFIER_FIXUP_2864.y = _RESERVED_IDENTIFIER_FIXUP_1285.x;
        _RESERVED_IDENTIFIER_FIXUP_2864.z = _RESERVED_IDENTIFIER_FIXUP_1285.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_2864.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2868;
        _RESERVED_IDENTIFIER_FIXUP_2868.x = _RESERVED_IDENTIFIER_FIXUP_1295.x;
        _RESERVED_IDENTIFIER_FIXUP_2868.y = _RESERVED_IDENTIFIER_FIXUP_1295.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1302 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_1302.y;
        _RESERVED_IDENTIFIER_FIXUP_2868.w = _RESERVED_IDENTIFIER_FIXUP_1306;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1275.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1275.w;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2868.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1306;
        float _RESERVED_IDENTIFIER_FIXUP_1317 = hdLod6(param_15, param_16).x + hdLod6(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_2864.w = _RESERVED_IDENTIFIER_FIXUP_1317;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1324 = _RESERVED_IDENTIFIER_FIXUP_2864.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2881;
        _RESERVED_IDENTIFIER_FIXUP_2881.x = _RESERVED_IDENTIFIER_FIXUP_1324.x;
        _RESERVED_IDENTIFIER_FIXUP_2881.y = _RESERVED_IDENTIFIER_FIXUP_1324.y;
        _RESERVED_IDENTIFIER_FIXUP_2881.w = _RESERVED_IDENTIFIER_FIXUP_1306;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2881.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1306;
        float _RESERVED_IDENTIFIER_FIXUP_1346 = _RESERVED_IDENTIFIER_FIXUP_1317 + hdLod6(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_2864.w = _RESERVED_IDENTIFIER_FIXUP_1346;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1353 = _RESERVED_IDENTIFIER_FIXUP_2864.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2894;
        _RESERVED_IDENTIFIER_FIXUP_2894.x = _RESERVED_IDENTIFIER_FIXUP_1353.x;
        _RESERVED_IDENTIFIER_FIXUP_2894.y = _RESERVED_IDENTIFIER_FIXUP_1353.y;
        _RESERVED_IDENTIFIER_FIXUP_2894.w = _RESERVED_IDENTIFIER_FIXUP_1306;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_2894.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1306;
        float _RESERVED_IDENTIFIER_FIXUP_1375 = _RESERVED_IDENTIFIER_FIXUP_1346 + hdLod6(param_21, param_22).x;
        _RESERVED_IDENTIFIER_FIXUP_2864.w = _RESERVED_IDENTIFIER_FIXUP_1375;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1382 = _RESERVED_IDENTIFIER_FIXUP_2864.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2907;
        _RESERVED_IDENTIFIER_FIXUP_2907.x = _RESERVED_IDENTIFIER_FIXUP_1382.x;
        _RESERVED_IDENTIFIER_FIXUP_2907.y = _RESERVED_IDENTIFIER_FIXUP_1382.y;
        _RESERVED_IDENTIFIER_FIXUP_2907.w = _RESERVED_IDENTIFIER_FIXUP_1306;
        vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_2907.xy;
        float param_24 = _RESERVED_IDENTIFIER_FIXUP_1306;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1399 = hdLod6(param_23, param_24);
        float _RESERVED_IDENTIFIER_FIXUP_1404 = _RESERVED_IDENTIFIER_FIXUP_1375 + _RESERVED_IDENTIFIER_FIXUP_1399.x;
        _RESERVED_IDENTIFIER_FIXUP_2864.y = _RESERVED_IDENTIFIER_FIXUP_1404;
        _RESERVED_IDENTIFIER_FIXUP_2864.y = _RESERVED_IDENTIFIER_FIXUP_1404 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3310 = _RESERVED_IDENTIFIER_FIXUP_1399;
        _RESERVED_IDENTIFIER_FIXUP_3308 = _RESERVED_IDENTIFIER_FIXUP_2864;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1417 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2729 = _RESERVED_IDENTIFIER_FIXUP_2724;
        _RESERVED_IDENTIFIER_FIXUP_2729.z = _RESERVED_IDENTIFIER_FIXUP_1417;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3311;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3309;
        if (_RESERVED_IDENTIFIER_FIXUP_1417 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1426 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_1426.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1426.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1432 = hdLod7(param_25, param_26);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1436 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2804 = _RESERVED_IDENTIFIER_FIXUP_2729;
            _RESERVED_IDENTIFIER_FIXUP_2804.z = _RESERVED_IDENTIFIER_FIXUP_1436.x;
            _RESERVED_IDENTIFIER_FIXUP_2804.w = _RESERVED_IDENTIFIER_FIXUP_1436.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_2804.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2808;
            _RESERVED_IDENTIFIER_FIXUP_2808.x = _RESERVED_IDENTIFIER_FIXUP_1446.x;
            _RESERVED_IDENTIFIER_FIXUP_2808.y = _RESERVED_IDENTIFIER_FIXUP_1446.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1453 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1457 = _RESERVED_IDENTIFIER_FIXUP_1453.y;
            _RESERVED_IDENTIFIER_FIXUP_2808.w = _RESERVED_IDENTIFIER_FIXUP_1457;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2808.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1457;
            float _RESERVED_IDENTIFIER_FIXUP_1468 = _RESERVED_IDENTIFIER_FIXUP_1432.x + hdLod7(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2819 = _RESERVED_IDENTIFIER_FIXUP_1432;
            _RESERVED_IDENTIFIER_FIXUP_2819.x = _RESERVED_IDENTIFIER_FIXUP_1468;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1475 = _RESERVED_IDENTIFIER_FIXUP_2804.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2821;
            _RESERVED_IDENTIFIER_FIXUP_2821.x = _RESERVED_IDENTIFIER_FIXUP_1475.x;
            _RESERVED_IDENTIFIER_FIXUP_2821.y = _RESERVED_IDENTIFIER_FIXUP_1475.y;
            _RESERVED_IDENTIFIER_FIXUP_2821.w = _RESERVED_IDENTIFIER_FIXUP_1457;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2821.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1457;
            float _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_1468 + hdLod7(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_2819.x = _RESERVED_IDENTIFIER_FIXUP_1497;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_2804.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2834;
            _RESERVED_IDENTIFIER_FIXUP_2834.x = _RESERVED_IDENTIFIER_FIXUP_1504.x;
            _RESERVED_IDENTIFIER_FIXUP_2834.y = _RESERVED_IDENTIFIER_FIXUP_1504.y;
            _RESERVED_IDENTIFIER_FIXUP_2834.w = _RESERVED_IDENTIFIER_FIXUP_1457;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2834.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1457;
            float _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_1497 + hdLod7(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_2819.x = _RESERVED_IDENTIFIER_FIXUP_1526;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1533 = _RESERVED_IDENTIFIER_FIXUP_2804.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2847;
            _RESERVED_IDENTIFIER_FIXUP_2847.x = _RESERVED_IDENTIFIER_FIXUP_1533.x;
            _RESERVED_IDENTIFIER_FIXUP_2847.y = _RESERVED_IDENTIFIER_FIXUP_1533.y;
            _RESERVED_IDENTIFIER_FIXUP_2847.w = _RESERVED_IDENTIFIER_FIXUP_1457;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2847.xy;
            float param_34 = _RESERVED_IDENTIFIER_FIXUP_1457;
            float _RESERVED_IDENTIFIER_FIXUP_1555 = _RESERVED_IDENTIFIER_FIXUP_1526 + hdLod7(param_33, param_34).x;
            _RESERVED_IDENTIFIER_FIXUP_2804.z = _RESERVED_IDENTIFIER_FIXUP_1555;
            _RESERVED_IDENTIFIER_FIXUP_2804.y = _RESERVED_IDENTIFIER_FIXUP_1555 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3311 = _RESERVED_IDENTIFIER_FIXUP_2819;
            _RESERVED_IDENTIFIER_FIXUP_3309 = _RESERVED_IDENTIFIER_FIXUP_2804;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2733 = _RESERVED_IDENTIFIER_FIXUP_2729;
            _RESERVED_IDENTIFIER_FIXUP_2733.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2733.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1571 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_1571.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3332 = vec4(_RESERVED_IDENTIFIER_FIXUP_1571.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1575);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1586 = _RESERVED_IDENTIFIER_FIXUP_3332.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3333 = vec4(_RESERVED_IDENTIFIER_FIXUP_1586 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1575);
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_1586;
            float param_36 = _RESERVED_IDENTIFIER_FIXUP_1575;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3333.xy;
            float param_38 = _RESERVED_IDENTIFIER_FIXUP_1575;
            float _RESERVED_IDENTIFIER_FIXUP_1616 = hdLod8(param_35, param_36).x + hdLod8(param_37, param_38).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2760 = _RESERVED_IDENTIFIER_FIXUP_3332;
            _RESERVED_IDENTIFIER_FIXUP_2760.z = _RESERVED_IDENTIFIER_FIXUP_1616;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1623 = _RESERVED_IDENTIFIER_FIXUP_2760.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2762 = _RESERVED_IDENTIFIER_FIXUP_3333;
            _RESERVED_IDENTIFIER_FIXUP_2762.x = _RESERVED_IDENTIFIER_FIXUP_1623.x;
            _RESERVED_IDENTIFIER_FIXUP_2762.y = _RESERVED_IDENTIFIER_FIXUP_1623.y;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2762.xy;
            float param_40 = _RESERVED_IDENTIFIER_FIXUP_1575;
            float _RESERVED_IDENTIFIER_FIXUP_1638 = _RESERVED_IDENTIFIER_FIXUP_1616 + hdLod8(param_39, param_40).x;
            _RESERVED_IDENTIFIER_FIXUP_2760.z = _RESERVED_IDENTIFIER_FIXUP_1638;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1645 = _RESERVED_IDENTIFIER_FIXUP_2760.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2771 = _RESERVED_IDENTIFIER_FIXUP_2762;
            _RESERVED_IDENTIFIER_FIXUP_2771.x = _RESERVED_IDENTIFIER_FIXUP_1645.x;
            _RESERVED_IDENTIFIER_FIXUP_2771.y = _RESERVED_IDENTIFIER_FIXUP_1645.y;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2771.xy;
            float param_42 = _RESERVED_IDENTIFIER_FIXUP_1575;
            float _RESERVED_IDENTIFIER_FIXUP_1660 = _RESERVED_IDENTIFIER_FIXUP_1638 + hdLod8(param_41, param_42).x;
            _RESERVED_IDENTIFIER_FIXUP_2760.z = _RESERVED_IDENTIFIER_FIXUP_1660;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1667 = _RESERVED_IDENTIFIER_FIXUP_2760.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2780 = _RESERVED_IDENTIFIER_FIXUP_2771;
            _RESERVED_IDENTIFIER_FIXUP_2780.x = _RESERVED_IDENTIFIER_FIXUP_1667.x;
            _RESERVED_IDENTIFIER_FIXUP_2780.y = _RESERVED_IDENTIFIER_FIXUP_1667.y;
            vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_2780.xy;
            float param_44 = _RESERVED_IDENTIFIER_FIXUP_1575;
            float _RESERVED_IDENTIFIER_FIXUP_1682 = _RESERVED_IDENTIFIER_FIXUP_1660 + hdLod8(param_43, param_44).x;
            _RESERVED_IDENTIFIER_FIXUP_2760.x = _RESERVED_IDENTIFIER_FIXUP_1682;
            float _RESERVED_IDENTIFIER_FIXUP_1690 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2760.y = _RESERVED_IDENTIFIER_FIXUP_1690;
            float _RESERVED_IDENTIFIER_FIXUP_1696 = clamp((_RESERVED_IDENTIFIER_FIXUP_1690 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2733.z = _RESERVED_IDENTIFIER_FIXUP_1696;
            float _RESERVED_IDENTIFIER_FIXUP_1701 = (_RESERVED_IDENTIFIER_FIXUP_1682 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2733.w = _RESERVED_IDENTIFIER_FIXUP_1701;
            _RESERVED_IDENTIFIER_FIXUP_2733.y = (_RESERVED_IDENTIFIER_FIXUP_1696 * _RESERVED_IDENTIFIER_FIXUP_1701) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3311 = _RESERVED_IDENTIFIER_FIXUP_2760;
            _RESERVED_IDENTIFIER_FIXUP_3309 = _RESERVED_IDENTIFIER_FIXUP_2733;
        }
        _RESERVED_IDENTIFIER_FIXUP_3310 = _RESERVED_IDENTIFIER_FIXUP_3311;
        _RESERVED_IDENTIFIER_FIXUP_3308 = _RESERVED_IDENTIFIER_FIXUP_3309;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1716 = min(_RESERVED_IDENTIFIER_FIXUP_3308.y, _RESERVED_IDENTIFIER_FIXUP_3308.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2925 = _RESERVED_IDENTIFIER_FIXUP_3310;
    _RESERVED_IDENTIFIER_FIXUP_2925.x = _RESERVED_IDENTIFIER_FIXUP_1716;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2928 = _RESERVED_IDENTIFIER_FIXUP_3308;
    _RESERVED_IDENTIFIER_FIXUP_2928.x = (_RESERVED_IDENTIFIER_FIXUP_1716 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1727 = _RESERVED_IDENTIFIER_FIXUP_1083.xyz * _RESERVED_IDENTIFIER_FIXUP_2928.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2930 = _RESERVED_IDENTIFIER_FIXUP_2928;
    _RESERVED_IDENTIFIER_FIXUP_2930.x = _RESERVED_IDENTIFIER_FIXUP_1727.x;
    _RESERVED_IDENTIFIER_FIXUP_2930.y = _RESERVED_IDENTIFIER_FIXUP_1727.y;
    _RESERVED_IDENTIFIER_FIXUP_2930.z = _RESERVED_IDENTIFIER_FIXUP_1727.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1738 = _RESERVED_IDENTIFIER_FIXUP_2930.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3303).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2936 = _RESERVED_IDENTIFIER_FIXUP_2930;
    _RESERVED_IDENTIFIER_FIXUP_2936.x = _RESERVED_IDENTIFIER_FIXUP_1738.x;
    _RESERVED_IDENTIFIER_FIXUP_2936.y = _RESERVED_IDENTIFIER_FIXUP_1738.y;
    _RESERVED_IDENTIFIER_FIXUP_2936.z = _RESERVED_IDENTIFIER_FIXUP_1738.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1749 = _RESERVED_IDENTIFIER_FIXUP_2936.xyz + _RESERVED_IDENTIFIER_FIXUP_2936.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2942 = _RESERVED_IDENTIFIER_FIXUP_2936;
    _RESERVED_IDENTIFIER_FIXUP_2942.x = _RESERVED_IDENTIFIER_FIXUP_1749.x;
    _RESERVED_IDENTIFIER_FIXUP_2942.y = _RESERVED_IDENTIFIER_FIXUP_1749.y;
    _RESERVED_IDENTIFIER_FIXUP_2942.z = _RESERVED_IDENTIFIER_FIXUP_1749.z;
    _RESERVED_IDENTIFIER_FIXUP_1083.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1083.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1083.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1774 = (_RESERVED_IDENTIFIER_FIXUP_1083.xyz * _RESERVED_IDENTIFIER_FIXUP_2925.xxx) + _RESERVED_IDENTIFIER_FIXUP_2942.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2954 = _RESERVED_IDENTIFIER_FIXUP_2942;
    _RESERVED_IDENTIFIER_FIXUP_2954.x = _RESERVED_IDENTIFIER_FIXUP_1774.x;
    _RESERVED_IDENTIFIER_FIXUP_2954.y = _RESERVED_IDENTIFIER_FIXUP_1774.y;
    _RESERVED_IDENTIFIER_FIXUP_2954.z = _RESERVED_IDENTIFIER_FIXUP_1774.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1787 = _RESERVED_IDENTIFIER_FIXUP_2954.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2960 = _RESERVED_IDENTIFIER_FIXUP_2954;
    _RESERVED_IDENTIFIER_FIXUP_2960.x = _RESERVED_IDENTIFIER_FIXUP_1787.x;
    _RESERVED_IDENTIFIER_FIXUP_2960.y = _RESERVED_IDENTIFIER_FIXUP_1787.y;
    _RESERVED_IDENTIFIER_FIXUP_2960.z = _RESERVED_IDENTIFIER_FIXUP_1787.z;
    vec2 param_45 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1842 = hdTex0(param_45);
    vec2 param_46 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1846 = hdTex1(param_46);
    vec2 param_47 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1850 = hdTex2(param_47);
    vec2 param_48 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1854 = hdTex3(param_48);
    vec2 param_49 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1858 = hdTex4(param_49);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1868 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1842, _RESERVED_IDENTIFIER_FIXUP_1846, _RESERVED_IDENTIFIER_FIXUP_1858.xxxx), _RESERVED_IDENTIFIER_FIXUP_1850, _RESERVED_IDENTIFIER_FIXUP_1858.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1873 = mix(_RESERVED_IDENTIFIER_FIXUP_1868, _RESERVED_IDENTIFIER_FIXUP_1854, _RESERVED_IDENTIFIER_FIXUP_1858.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2976 = _RESERVED_IDENTIFIER_FIXUP_1868;
    _RESERVED_IDENTIFIER_FIXUP_2976.x = _RESERVED_IDENTIFIER_FIXUP_1090;
    float _RESERVED_IDENTIFIER_FIXUP_1886 = clamp((_RESERVED_IDENTIFIER_FIXUP_1090 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2976.x = _RESERVED_IDENTIFIER_FIXUP_1886;
    float _RESERVED_IDENTIFIER_FIXUP_1892 = ((-_RESERVED_IDENTIFIER_FIXUP_1886) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2976.y = _RESERVED_IDENTIFIER_FIXUP_1892;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3318;
    if (_RESERVED_IDENTIFIER_FIXUP_1892 != (-_RESERVED_IDENTIFIER_FIXUP_1892))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1904 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1914 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1916 = _RESERVED_IDENTIFIER_FIXUP_1914.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2989 = _RESERVED_IDENTIFIER_FIXUP_2976;
        _RESERVED_IDENTIFIER_FIXUP_2989.y = _RESERVED_IDENTIFIER_FIXUP_1916;
        _RESERVED_IDENTIFIER_FIXUP_2989.z = _RESERVED_IDENTIFIER_FIXUP_1914.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1924 = _RESERVED_IDENTIFIER_FIXUP_2989.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2993;
        _RESERVED_IDENTIFIER_FIXUP_2993.x = _RESERVED_IDENTIFIER_FIXUP_1924.x;
        _RESERVED_IDENTIFIER_FIXUP_2993.y = _RESERVED_IDENTIFIER_FIXUP_1924.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1931 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1935 = _RESERVED_IDENTIFIER_FIXUP_1931.y;
        _RESERVED_IDENTIFIER_FIXUP_2993.w = _RESERVED_IDENTIFIER_FIXUP_1935;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_1904.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1904.w;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2993.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1935;
        float _RESERVED_IDENTIFIER_FIXUP_1946 = hdLod5(param_50, param_51).x + hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3335 = vec4(_RESERVED_IDENTIFIER_FIXUP_1886, _RESERVED_IDENTIFIER_FIXUP_1916, _RESERVED_IDENTIFIER_FIXUP_1914.y, _RESERVED_IDENTIFIER_FIXUP_1946);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1953 = _RESERVED_IDENTIFIER_FIXUP_3335.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3006;
        _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1953.x;
        _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1953.y;
        _RESERVED_IDENTIFIER_FIXUP_3006.w = _RESERVED_IDENTIFIER_FIXUP_1935;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3006.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_1935;
        float _RESERVED_IDENTIFIER_FIXUP_1975 = _RESERVED_IDENTIFIER_FIXUP_1946 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3335.w = _RESERVED_IDENTIFIER_FIXUP_1975;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1982 = _RESERVED_IDENTIFIER_FIXUP_3335.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3019;
        _RESERVED_IDENTIFIER_FIXUP_3019.x = _RESERVED_IDENTIFIER_FIXUP_1982.x;
        _RESERVED_IDENTIFIER_FIXUP_3019.y = _RESERVED_IDENTIFIER_FIXUP_1982.y;
        _RESERVED_IDENTIFIER_FIXUP_3019.w = _RESERVED_IDENTIFIER_FIXUP_1935;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3019.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_1935;
        float _RESERVED_IDENTIFIER_FIXUP_2004 = _RESERVED_IDENTIFIER_FIXUP_1975 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3335.w = _RESERVED_IDENTIFIER_FIXUP_2004;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2011 = _RESERVED_IDENTIFIER_FIXUP_3335.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3032;
        _RESERVED_IDENTIFIER_FIXUP_3032.x = _RESERVED_IDENTIFIER_FIXUP_2011.x;
        _RESERVED_IDENTIFIER_FIXUP_3032.y = _RESERVED_IDENTIFIER_FIXUP_2011.y;
        _RESERVED_IDENTIFIER_FIXUP_3032.w = _RESERVED_IDENTIFIER_FIXUP_1935;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3032.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_1935;
        float _RESERVED_IDENTIFIER_FIXUP_2033 = _RESERVED_IDENTIFIER_FIXUP_2004 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3335.y = _RESERVED_IDENTIFIER_FIXUP_2033;
        float _RESERVED_IDENTIFIER_FIXUP_2038 = (_RESERVED_IDENTIFIER_FIXUP_2033 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3335.y = _RESERVED_IDENTIFIER_FIXUP_2038;
        _RESERVED_IDENTIFIER_FIXUP_3335.x = (_RESERVED_IDENTIFIER_FIXUP_1886 * _RESERVED_IDENTIFIER_FIXUP_2038) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3318 = _RESERVED_IDENTIFIER_FIXUP_3335;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2986 = _RESERVED_IDENTIFIER_FIXUP_2976;
        _RESERVED_IDENTIFIER_FIXUP_2986.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3318 = _RESERVED_IDENTIFIER_FIXUP_2986;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3054 = _RESERVED_IDENTIFIER_FIXUP_3318;
    _RESERVED_IDENTIFIER_FIXUP_3054.y = _RESERVED_IDENTIFIER_FIXUP_1266;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3323;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3321;
    if (_RESERVED_IDENTIFIER_FIXUP_1266 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2065 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2075 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3194 = _RESERVED_IDENTIFIER_FIXUP_3054;
        _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_2075.x;
        _RESERVED_IDENTIFIER_FIXUP_3194.z = _RESERVED_IDENTIFIER_FIXUP_2075.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2085 = _RESERVED_IDENTIFIER_FIXUP_3194.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3198;
        _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_2085.x;
        _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_2085.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2092 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2096 = _RESERVED_IDENTIFIER_FIXUP_2092.y;
        _RESERVED_IDENTIFIER_FIXUP_3198.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_2065.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2065.w;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3198.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2096;
        float _RESERVED_IDENTIFIER_FIXUP_2107 = hdLod6(param_60, param_61).x + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3194.w = _RESERVED_IDENTIFIER_FIXUP_2107;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2114 = _RESERVED_IDENTIFIER_FIXUP_3194.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3211;
        _RESERVED_IDENTIFIER_FIXUP_3211.x = _RESERVED_IDENTIFIER_FIXUP_2114.x;
        _RESERVED_IDENTIFIER_FIXUP_3211.y = _RESERVED_IDENTIFIER_FIXUP_2114.y;
        _RESERVED_IDENTIFIER_FIXUP_3211.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3211.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2096;
        float _RESERVED_IDENTIFIER_FIXUP_2136 = _RESERVED_IDENTIFIER_FIXUP_2107 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3194.w = _RESERVED_IDENTIFIER_FIXUP_2136;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2143 = _RESERVED_IDENTIFIER_FIXUP_3194.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3224;
        _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_2143.x;
        _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_2143.y;
        _RESERVED_IDENTIFIER_FIXUP_3224.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3224.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2096;
        float _RESERVED_IDENTIFIER_FIXUP_2165 = _RESERVED_IDENTIFIER_FIXUP_2136 + hdLod6(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3194.w = _RESERVED_IDENTIFIER_FIXUP_2165;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2172 = _RESERVED_IDENTIFIER_FIXUP_3194.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3237;
        _RESERVED_IDENTIFIER_FIXUP_3237.x = _RESERVED_IDENTIFIER_FIXUP_2172.x;
        _RESERVED_IDENTIFIER_FIXUP_3237.y = _RESERVED_IDENTIFIER_FIXUP_2172.y;
        _RESERVED_IDENTIFIER_FIXUP_3237.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3237.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2189 = hdLod6(param_68, param_69);
        float _RESERVED_IDENTIFIER_FIXUP_2194 = _RESERVED_IDENTIFIER_FIXUP_2165 + _RESERVED_IDENTIFIER_FIXUP_2189.x;
        _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_2194;
        _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_2194 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3323 = _RESERVED_IDENTIFIER_FIXUP_2189;
        _RESERVED_IDENTIFIER_FIXUP_3321 = _RESERVED_IDENTIFIER_FIXUP_3194;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2207 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3059 = _RESERVED_IDENTIFIER_FIXUP_3054;
        _RESERVED_IDENTIFIER_FIXUP_3059.z = _RESERVED_IDENTIFIER_FIXUP_2207;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3324;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3322;
        if (_RESERVED_IDENTIFIER_FIXUP_2207 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2216 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2216.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2216.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2222 = hdLod7(param_70, param_71);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2226 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3134 = _RESERVED_IDENTIFIER_FIXUP_3059;
            _RESERVED_IDENTIFIER_FIXUP_3134.z = _RESERVED_IDENTIFIER_FIXUP_2226.x;
            _RESERVED_IDENTIFIER_FIXUP_3134.w = _RESERVED_IDENTIFIER_FIXUP_2226.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2236 = _RESERVED_IDENTIFIER_FIXUP_3134.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3138;
            _RESERVED_IDENTIFIER_FIXUP_3138.x = _RESERVED_IDENTIFIER_FIXUP_2236.x;
            _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_2236.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2243 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2247 = _RESERVED_IDENTIFIER_FIXUP_2243.y;
            _RESERVED_IDENTIFIER_FIXUP_3138.w = _RESERVED_IDENTIFIER_FIXUP_2247;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3138.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2247;
            float _RESERVED_IDENTIFIER_FIXUP_2258 = _RESERVED_IDENTIFIER_FIXUP_2222.x + hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3149 = _RESERVED_IDENTIFIER_FIXUP_2222;
            _RESERVED_IDENTIFIER_FIXUP_3149.x = _RESERVED_IDENTIFIER_FIXUP_2258;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2265 = _RESERVED_IDENTIFIER_FIXUP_3134.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3151;
            _RESERVED_IDENTIFIER_FIXUP_3151.x = _RESERVED_IDENTIFIER_FIXUP_2265.x;
            _RESERVED_IDENTIFIER_FIXUP_3151.y = _RESERVED_IDENTIFIER_FIXUP_2265.y;
            _RESERVED_IDENTIFIER_FIXUP_3151.w = _RESERVED_IDENTIFIER_FIXUP_2247;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3151.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2247;
            float _RESERVED_IDENTIFIER_FIXUP_2287 = _RESERVED_IDENTIFIER_FIXUP_2258 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3149.x = _RESERVED_IDENTIFIER_FIXUP_2287;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2294 = _RESERVED_IDENTIFIER_FIXUP_3134.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3164;
            _RESERVED_IDENTIFIER_FIXUP_3164.x = _RESERVED_IDENTIFIER_FIXUP_2294.x;
            _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_2294.y;
            _RESERVED_IDENTIFIER_FIXUP_3164.w = _RESERVED_IDENTIFIER_FIXUP_2247;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3164.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2247;
            float _RESERVED_IDENTIFIER_FIXUP_2316 = _RESERVED_IDENTIFIER_FIXUP_2287 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3149.x = _RESERVED_IDENTIFIER_FIXUP_2316;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2323 = _RESERVED_IDENTIFIER_FIXUP_3134.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3177;
            _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_2323.x;
            _RESERVED_IDENTIFIER_FIXUP_3177.y = _RESERVED_IDENTIFIER_FIXUP_2323.y;
            _RESERVED_IDENTIFIER_FIXUP_3177.w = _RESERVED_IDENTIFIER_FIXUP_2247;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3177.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2247;
            float _RESERVED_IDENTIFIER_FIXUP_2345 = _RESERVED_IDENTIFIER_FIXUP_2316 + hdLod7(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3134.z = _RESERVED_IDENTIFIER_FIXUP_2345;
            _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_2345 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_3149;
            _RESERVED_IDENTIFIER_FIXUP_3322 = _RESERVED_IDENTIFIER_FIXUP_3134;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3063 = _RESERVED_IDENTIFIER_FIXUP_3059;
            _RESERVED_IDENTIFIER_FIXUP_3063.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3063.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2361 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2365 = _RESERVED_IDENTIFIER_FIXUP_2361.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3336 = vec4(_RESERVED_IDENTIFIER_FIXUP_2361.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2365);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2376 = _RESERVED_IDENTIFIER_FIXUP_3336.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3337 = vec4(_RESERVED_IDENTIFIER_FIXUP_2376 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2365);
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2376;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2365;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3337.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2365;
            float _RESERVED_IDENTIFIER_FIXUP_2406 = hdLod8(param_80, param_81).x + hdLod8(param_82, param_83).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3090 = _RESERVED_IDENTIFIER_FIXUP_3336;
            _RESERVED_IDENTIFIER_FIXUP_3090.z = _RESERVED_IDENTIFIER_FIXUP_2406;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2413 = _RESERVED_IDENTIFIER_FIXUP_3090.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3092 = _RESERVED_IDENTIFIER_FIXUP_3337;
            _RESERVED_IDENTIFIER_FIXUP_3092.x = _RESERVED_IDENTIFIER_FIXUP_2413.x;
            _RESERVED_IDENTIFIER_FIXUP_3092.y = _RESERVED_IDENTIFIER_FIXUP_2413.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3092.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2365;
            float _RESERVED_IDENTIFIER_FIXUP_2428 = _RESERVED_IDENTIFIER_FIXUP_2406 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3090.z = _RESERVED_IDENTIFIER_FIXUP_2428;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2435 = _RESERVED_IDENTIFIER_FIXUP_3090.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3101 = _RESERVED_IDENTIFIER_FIXUP_3092;
            _RESERVED_IDENTIFIER_FIXUP_3101.x = _RESERVED_IDENTIFIER_FIXUP_2435.x;
            _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_2435.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3101.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2365;
            float _RESERVED_IDENTIFIER_FIXUP_2450 = _RESERVED_IDENTIFIER_FIXUP_2428 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3090.z = _RESERVED_IDENTIFIER_FIXUP_2450;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2457 = _RESERVED_IDENTIFIER_FIXUP_3090.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3110 = _RESERVED_IDENTIFIER_FIXUP_3101;
            _RESERVED_IDENTIFIER_FIXUP_3110.x = _RESERVED_IDENTIFIER_FIXUP_2457.x;
            _RESERVED_IDENTIFIER_FIXUP_3110.y = _RESERVED_IDENTIFIER_FIXUP_2457.y;
            vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3110.xy;
            float param_89 = _RESERVED_IDENTIFIER_FIXUP_2365;
            float _RESERVED_IDENTIFIER_FIXUP_2472 = _RESERVED_IDENTIFIER_FIXUP_2450 + hdLod8(param_88, param_89).x;
            _RESERVED_IDENTIFIER_FIXUP_3090.x = _RESERVED_IDENTIFIER_FIXUP_2472;
            float _RESERVED_IDENTIFIER_FIXUP_2480 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_2480;
            float _RESERVED_IDENTIFIER_FIXUP_2486 = clamp((_RESERVED_IDENTIFIER_FIXUP_2480 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3063.z = _RESERVED_IDENTIFIER_FIXUP_2486;
            float _RESERVED_IDENTIFIER_FIXUP_2491 = (_RESERVED_IDENTIFIER_FIXUP_2472 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3063.w = _RESERVED_IDENTIFIER_FIXUP_2491;
            _RESERVED_IDENTIFIER_FIXUP_3063.y = (_RESERVED_IDENTIFIER_FIXUP_2486 * _RESERVED_IDENTIFIER_FIXUP_2491) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_3090;
            _RESERVED_IDENTIFIER_FIXUP_3322 = _RESERVED_IDENTIFIER_FIXUP_3063;
        }
        _RESERVED_IDENTIFIER_FIXUP_3323 = _RESERVED_IDENTIFIER_FIXUP_3324;
        _RESERVED_IDENTIFIER_FIXUP_3321 = _RESERVED_IDENTIFIER_FIXUP_3322;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2506 = min(_RESERVED_IDENTIFIER_FIXUP_3321.y, _RESERVED_IDENTIFIER_FIXUP_3321.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3255 = _RESERVED_IDENTIFIER_FIXUP_3323;
    _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_2506;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3258 = _RESERVED_IDENTIFIER_FIXUP_3321;
    _RESERVED_IDENTIFIER_FIXUP_3258.x = (_RESERVED_IDENTIFIER_FIXUP_2506 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2517 = _RESERVED_IDENTIFIER_FIXUP_1873.xyz * _RESERVED_IDENTIFIER_FIXUP_3258.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3260 = _RESERVED_IDENTIFIER_FIXUP_3258;
    _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_2517.x;
    _RESERVED_IDENTIFIER_FIXUP_3260.y = _RESERVED_IDENTIFIER_FIXUP_2517.y;
    _RESERVED_IDENTIFIER_FIXUP_3260.z = _RESERVED_IDENTIFIER_FIXUP_2517.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2528 = _RESERVED_IDENTIFIER_FIXUP_3260.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3266 = _RESERVED_IDENTIFIER_FIXUP_3260;
    _RESERVED_IDENTIFIER_FIXUP_3266.x = _RESERVED_IDENTIFIER_FIXUP_2528.x;
    _RESERVED_IDENTIFIER_FIXUP_3266.y = _RESERVED_IDENTIFIER_FIXUP_2528.y;
    _RESERVED_IDENTIFIER_FIXUP_3266.z = _RESERVED_IDENTIFIER_FIXUP_2528.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2539 = _RESERVED_IDENTIFIER_FIXUP_3266.xyz + _RESERVED_IDENTIFIER_FIXUP_3266.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3272 = _RESERVED_IDENTIFIER_FIXUP_3266;
    _RESERVED_IDENTIFIER_FIXUP_3272.x = _RESERVED_IDENTIFIER_FIXUP_2539.x;
    _RESERVED_IDENTIFIER_FIXUP_3272.y = _RESERVED_IDENTIFIER_FIXUP_2539.y;
    _RESERVED_IDENTIFIER_FIXUP_3272.z = _RESERVED_IDENTIFIER_FIXUP_2539.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2550 = _RESERVED_IDENTIFIER_FIXUP_1873.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3278 = _RESERVED_IDENTIFIER_FIXUP_1873;
    _RESERVED_IDENTIFIER_FIXUP_3278.x = _RESERVED_IDENTIFIER_FIXUP_2550.x;
    _RESERVED_IDENTIFIER_FIXUP_3278.y = _RESERVED_IDENTIFIER_FIXUP_2550.y;
    _RESERVED_IDENTIFIER_FIXUP_3278.z = _RESERVED_IDENTIFIER_FIXUP_2550.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2564 = (_RESERVED_IDENTIFIER_FIXUP_3278.xyz * _RESERVED_IDENTIFIER_FIXUP_3255.xxx) + _RESERVED_IDENTIFIER_FIXUP_3272.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3284 = _RESERVED_IDENTIFIER_FIXUP_3272;
    _RESERVED_IDENTIFIER_FIXUP_3284.x = _RESERVED_IDENTIFIER_FIXUP_2564.x;
    _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_2564.y;
    _RESERVED_IDENTIFIER_FIXUP_3284.z = _RESERVED_IDENTIFIER_FIXUP_2564.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2577 = _RESERVED_IDENTIFIER_FIXUP_3284.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3290 = _RESERVED_IDENTIFIER_FIXUP_3284;
    _RESERVED_IDENTIFIER_FIXUP_3290.x = _RESERVED_IDENTIFIER_FIXUP_2577.x;
    _RESERVED_IDENTIFIER_FIXUP_3290.y = _RESERVED_IDENTIFIER_FIXUP_2577.y;
    _RESERVED_IDENTIFIER_FIXUP_3290.z = _RESERVED_IDENTIFIER_FIXUP_2577.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3290.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_911 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_920;
    if (_RESERVED_IDENTIFIER_FIXUP_911)
    {
        _RESERVED_IDENTIFIER_FIXUP_920 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_920 = _RESERVED_IDENTIFIER_FIXUP_911;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_920)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_957 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2960.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_984 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2636;
    if (_RESERVED_IDENTIFIER_FIXUP_957 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2636 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_957), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_984);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2636 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_984);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2636;
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        vec2 hdB148 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB148.x;
        r0.z = hdB148.y;
        vec2 hdB170 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB170.x;
        r3.y = hdB170.y;
        vec2 hdB178 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB178.x;
        r3.w = hdB178.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r0.w = r2.x + r3.x;
        vec2 hdB201 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB201.x;
        r2.y = hdB201.y;
        vec2 hdB208 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB208.x;
        r2.w = hdB208.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r0.w += r2.x;
        vec2 hdB231 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB231.x;
        r2.y = hdB231.y;
        vec2 hdB238 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB238.x;
        r2.w = hdB238.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r0.w += r2.x;
        vec2 hdB261 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB261.x;
        r2.y = hdB261.y;
        vec2 hdB268 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB268.x;
        r2.w = hdB268.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r0.y = r0.w + r2.x;
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
        r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod6(param_15, param_16);
        vec2 hdB328 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB328.x;
        r0.z = hdB328.y;
        vec2 hdB338 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB338.x;
        r3.y = hdB338.y;
        vec2 hdB345 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB345.x;
        r3.w = hdB345.y;
        vec2 param_17 = r3.xy;
        float param_18 = r3.w;
        r3 = hdLod6(param_17, param_18);
        r0.w = r2.x + r3.x;
        vec2 hdB367 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB367.x;
        r2.y = hdB367.y;
        vec2 hdB374 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB374.x;
        r2.w = hdB374.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod6(param_19, param_20);
        r0.w += r2.x;
        vec2 hdB396 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB396.x;
        r2.y = hdB396.y;
        vec2 hdB403 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB403.x;
        r2.w = hdB403.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod6(param_21, param_22);
        r0.w += r2.x;
        vec2 hdB425 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB425.x;
        r2.y = hdB425.y;
        vec2 hdB432 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB432.x;
        r2.w = hdB432.y;
        vec2 param_23 = r2.xy;
        float param_24 = r2.w;
        r2 = hdLod6(param_23, param_24);
        r0.y = r0.w + r2.x;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v7.x), abs(v7.y));
        if (r0.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod7(param_25, param_26);
            vec2 hdB481 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB481.x;
            r0.w = hdB481.y;
            vec2 hdB491 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB491.x;
            r3.y = hdB491.y;
            vec2 hdB498 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB498.x;
            r3.w = hdB498.y;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r2.x += r3.x;
            vec2 hdB520 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB520.x;
            r3.y = hdB520.y;
            vec2 hdB527 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB527.x;
            r3.w = hdB527.y;
            vec2 param_29 = r3.xy;
            float param_30 = r3.w;
            r3 = hdLod7(param_29, param_30);
            r2.x += r3.x;
            vec2 hdB549 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB549.x;
            r3.y = hdB549.y;
            vec2 hdB556 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB556.x;
            r3.w = hdB556.y;
            vec2 param_31 = r3.xy;
            float param_32 = r3.w;
            r3 = hdLod7(param_31, param_32);
            r2.x += r3.x;
            vec2 hdB578 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB578.x;
            r3.y = hdB578.y;
            vec2 hdB585 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB585.x;
            r3.w = hdB585.y;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod7(param_33, param_34);
            r0.z = r2.x + r3.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v5.w;
            r0.w = v6.w;
            vec2 hdB617 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB617.x;
            r2.w = hdB617.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_35 = r2.xy;
            float param_36 = r2.w;
            r3 = hdLod8(param_35, param_36);
            vec2 hdB642 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB642.x;
            r4.y = hdB642.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r5 = hdLod8(param_37, param_38);
            r2.z = r3.x + r5.x;
            vec2 hdB670 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB670.x;
            r4.y = hdB670.y;
            vec2 param_39 = r4.xy;
            float param_40 = r4.w;
            r3 = hdLod8(param_39, param_40);
            r2.z += r3.x;
            vec2 hdB692 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB692.x;
            r4.y = hdB692.y;
            vec2 param_41 = r4.xy;
            float param_42 = r4.w;
            r3 = hdLod8(param_41, param_42);
            r2.z += r3.x;
            vec2 hdB714 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB714.x;
            r4.y = hdB714.y;
            vec2 param_43 = r4.xy;
            float param_44 = r4.w;
            r3 = hdLod8(param_43, param_44);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r0.z), abs(r0.w));
            r0.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.z * r0.w) + 1.0;
        }
    }
    r2.x = min(r0.y, r0.x);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB775 = r0;
    vec3 hdB777 = r1.xyz * hdB775.xxx;
    r0.x = hdB777.x;
    r0.y = hdB777.y;
    r0.z = hdB777.z;
    vec4 hdB784 = r0;
    vec3 hdB788 = hdB784.xyz * v0.xyz;
    r0.x = hdB788.x;
    r0.y = hdB788.y;
    r0.z = hdB788.z;
    vec4 hdB795 = r0;
    vec4 hdB797 = r0;
    vec3 hdB799 = hdB795.xyz + hdB797.xyz;
    r0.x = hdB799.x;
    r0.y = hdB799.y;
    r0.z = hdB799.z;
    vec4 hdB806 = r1;
    vec3 hdB810 = hdB806.www * v1.xyz;
    r1.x = hdB810.x;
    r1.y = hdB810.y;
    r1.z = hdB810.z;
    vec4 hdB822 = r0;
    vec3 hdB824 = (r1.xyz * r2.xxx) + hdB822.xyz;
    r0.x = hdB824.x;
    r0.y = hdB824.y;
    r0.z = hdB824.z;
    vec4 hdB831 = r0;
    vec3 hdB838 = hdB831.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB838.x;
    r0.y = hdB838.y;
    r0.z = hdB838.z;
    vec3 hdB853 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB853.x;
    oC0.y = hdB853.y;
    oC0.z = hdB853.z;
    oC0.w = 1.0;
    bool hdB866 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB874;
    if (hdB866)
    {
        hdB874 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB874 = hdB866;
    }
    if (hdB874)
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
    bool _3212 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3222;
    if (_3212)
    {
        _3222 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3222 = _3212;
    }
    if (_3222)
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
        bool _3247 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3262;
        if (!_3247)
        {
            _3262 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3262 = _3247;
        }
        if (_3262)
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
