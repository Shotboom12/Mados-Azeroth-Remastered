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
float _RESERVED_IDENTIFIER_FIXUP_3364;
vec4 _RESERVED_IDENTIFIER_FIXUP_3365;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1070 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1074 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1078 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1082 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1086 = hdTex4(param_4);
    float _RESERVED_IDENTIFIER_FIXUP_1090 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1086.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2695 = _RESERVED_IDENTIFIER_FIXUP_1086;
    _RESERVED_IDENTIFIER_FIXUP_2695.w = _RESERVED_IDENTIFIER_FIXUP_1090;
    float _RESERVED_IDENTIFIER_FIXUP_1095 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1090;
    _RESERVED_IDENTIFIER_FIXUP_2695.w = _RESERVED_IDENTIFIER_FIXUP_1095;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1100 = _RESERVED_IDENTIFIER_FIXUP_1074 * _RESERVED_IDENTIFIER_FIXUP_2695.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1118 = (_RESERVED_IDENTIFIER_FIXUP_1082 * _RESERVED_IDENTIFIER_FIXUP_2695.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1078 * _RESERVED_IDENTIFIER_FIXUP_2695.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1070 * _RESERVED_IDENTIFIER_FIXUP_2695.wwww) + _RESERVED_IDENTIFIER_FIXUP_1100));
    float _RESERVED_IDENTIFIER_FIXUP_1125 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2702 = _RESERVED_IDENTIFIER_FIXUP_1100;
    _RESERVED_IDENTIFIER_FIXUP_2702.x = _RESERVED_IDENTIFIER_FIXUP_1125;
    float _RESERVED_IDENTIFIER_FIXUP_1131 = clamp((_RESERVED_IDENTIFIER_FIXUP_1125 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2702.x = _RESERVED_IDENTIFIER_FIXUP_1131;
    float _RESERVED_IDENTIFIER_FIXUP_1137 = ((-_RESERVED_IDENTIFIER_FIXUP_1131) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2702.y = _RESERVED_IDENTIFIER_FIXUP_1137;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3366;
    if (_RESERVED_IDENTIFIER_FIXUP_1137 != (-_RESERVED_IDENTIFIER_FIXUP_1137))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1149 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1159 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1161 = _RESERVED_IDENTIFIER_FIXUP_1159.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2715 = _RESERVED_IDENTIFIER_FIXUP_2702;
        _RESERVED_IDENTIFIER_FIXUP_2715.y = _RESERVED_IDENTIFIER_FIXUP_1161;
        _RESERVED_IDENTIFIER_FIXUP_2715.z = _RESERVED_IDENTIFIER_FIXUP_1159.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1169 = _RESERVED_IDENTIFIER_FIXUP_2715.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2719;
        _RESERVED_IDENTIFIER_FIXUP_2719.x = _RESERVED_IDENTIFIER_FIXUP_1169.x;
        _RESERVED_IDENTIFIER_FIXUP_2719.y = _RESERVED_IDENTIFIER_FIXUP_1169.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1176 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_1176.y;
        _RESERVED_IDENTIFIER_FIXUP_2719.w = _RESERVED_IDENTIFIER_FIXUP_1180;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1149.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1149.w;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2719.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1180;
        float _RESERVED_IDENTIFIER_FIXUP_1191 = hdLod5(param_5, param_6).x + hdLod5(param_7, param_8).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3392 = vec4(_RESERVED_IDENTIFIER_FIXUP_1131, _RESERVED_IDENTIFIER_FIXUP_1161, _RESERVED_IDENTIFIER_FIXUP_1159.y, _RESERVED_IDENTIFIER_FIXUP_1191);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_3392.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2732;
        _RESERVED_IDENTIFIER_FIXUP_2732.x = _RESERVED_IDENTIFIER_FIXUP_1198.x;
        _RESERVED_IDENTIFIER_FIXUP_2732.y = _RESERVED_IDENTIFIER_FIXUP_1198.y;
        _RESERVED_IDENTIFIER_FIXUP_2732.w = _RESERVED_IDENTIFIER_FIXUP_1180;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2732.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1180;
        float _RESERVED_IDENTIFIER_FIXUP_1220 = _RESERVED_IDENTIFIER_FIXUP_1191 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3392.w = _RESERVED_IDENTIFIER_FIXUP_1220;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1227 = _RESERVED_IDENTIFIER_FIXUP_3392.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2745;
        _RESERVED_IDENTIFIER_FIXUP_2745.x = _RESERVED_IDENTIFIER_FIXUP_1227.x;
        _RESERVED_IDENTIFIER_FIXUP_2745.y = _RESERVED_IDENTIFIER_FIXUP_1227.y;
        _RESERVED_IDENTIFIER_FIXUP_2745.w = _RESERVED_IDENTIFIER_FIXUP_1180;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2745.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1180;
        float _RESERVED_IDENTIFIER_FIXUP_1249 = _RESERVED_IDENTIFIER_FIXUP_1220 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3392.w = _RESERVED_IDENTIFIER_FIXUP_1249;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1256 = _RESERVED_IDENTIFIER_FIXUP_3392.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2758;
        _RESERVED_IDENTIFIER_FIXUP_2758.x = _RESERVED_IDENTIFIER_FIXUP_1256.x;
        _RESERVED_IDENTIFIER_FIXUP_2758.y = _RESERVED_IDENTIFIER_FIXUP_1256.y;
        _RESERVED_IDENTIFIER_FIXUP_2758.w = _RESERVED_IDENTIFIER_FIXUP_1180;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_2758.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1180;
        float _RESERVED_IDENTIFIER_FIXUP_1278 = _RESERVED_IDENTIFIER_FIXUP_1249 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3392.y = _RESERVED_IDENTIFIER_FIXUP_1278;
        float _RESERVED_IDENTIFIER_FIXUP_1283 = (_RESERVED_IDENTIFIER_FIXUP_1278 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3392.y = _RESERVED_IDENTIFIER_FIXUP_1283;
        _RESERVED_IDENTIFIER_FIXUP_3392.x = (_RESERVED_IDENTIFIER_FIXUP_1131 * _RESERVED_IDENTIFIER_FIXUP_1283) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3366 = _RESERVED_IDENTIFIER_FIXUP_3392;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2712 = _RESERVED_IDENTIFIER_FIXUP_2702;
        _RESERVED_IDENTIFIER_FIXUP_2712.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3366 = _RESERVED_IDENTIFIER_FIXUP_2712;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1301 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2780 = _RESERVED_IDENTIFIER_FIXUP_3366;
    _RESERVED_IDENTIFIER_FIXUP_2780.y = _RESERVED_IDENTIFIER_FIXUP_1301;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3371;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3369;
    if (_RESERVED_IDENTIFIER_FIXUP_1301 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1310 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1320 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2920 = _RESERVED_IDENTIFIER_FIXUP_2780;
        _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1320.x;
        _RESERVED_IDENTIFIER_FIXUP_2920.z = _RESERVED_IDENTIFIER_FIXUP_1320.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_2920.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2924;
        _RESERVED_IDENTIFIER_FIXUP_2924.x = _RESERVED_IDENTIFIER_FIXUP_1330.x;
        _RESERVED_IDENTIFIER_FIXUP_2924.y = _RESERVED_IDENTIFIER_FIXUP_1330.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1337 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1341 = _RESERVED_IDENTIFIER_FIXUP_1337.y;
        _RESERVED_IDENTIFIER_FIXUP_2924.w = _RESERVED_IDENTIFIER_FIXUP_1341;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1310.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1310.w;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2924.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1341;
        float _RESERVED_IDENTIFIER_FIXUP_1352 = hdLod6(param_15, param_16).x + hdLod6(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_2920.w = _RESERVED_IDENTIFIER_FIXUP_1352;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_2920.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2937;
        _RESERVED_IDENTIFIER_FIXUP_2937.x = _RESERVED_IDENTIFIER_FIXUP_1359.x;
        _RESERVED_IDENTIFIER_FIXUP_2937.y = _RESERVED_IDENTIFIER_FIXUP_1359.y;
        _RESERVED_IDENTIFIER_FIXUP_2937.w = _RESERVED_IDENTIFIER_FIXUP_1341;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2937.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1341;
        float _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_1352 + hdLod6(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_2920.w = _RESERVED_IDENTIFIER_FIXUP_1381;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1388 = _RESERVED_IDENTIFIER_FIXUP_2920.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2950;
        _RESERVED_IDENTIFIER_FIXUP_2950.x = _RESERVED_IDENTIFIER_FIXUP_1388.x;
        _RESERVED_IDENTIFIER_FIXUP_2950.y = _RESERVED_IDENTIFIER_FIXUP_1388.y;
        _RESERVED_IDENTIFIER_FIXUP_2950.w = _RESERVED_IDENTIFIER_FIXUP_1341;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_2950.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1341;
        float _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_1381 + hdLod6(param_21, param_22).x;
        _RESERVED_IDENTIFIER_FIXUP_2920.w = _RESERVED_IDENTIFIER_FIXUP_1410;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_2920.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2963;
        _RESERVED_IDENTIFIER_FIXUP_2963.x = _RESERVED_IDENTIFIER_FIXUP_1417.x;
        _RESERVED_IDENTIFIER_FIXUP_2963.y = _RESERVED_IDENTIFIER_FIXUP_1417.y;
        _RESERVED_IDENTIFIER_FIXUP_2963.w = _RESERVED_IDENTIFIER_FIXUP_1341;
        vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_2963.xy;
        float param_24 = _RESERVED_IDENTIFIER_FIXUP_1341;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1434 = hdLod6(param_23, param_24);
        float _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_1410 + _RESERVED_IDENTIFIER_FIXUP_1434.x;
        _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1439;
        _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1439 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_1434;
        _RESERVED_IDENTIFIER_FIXUP_3369 = _RESERVED_IDENTIFIER_FIXUP_2920;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1452 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2785 = _RESERVED_IDENTIFIER_FIXUP_2780;
        _RESERVED_IDENTIFIER_FIXUP_2785.z = _RESERVED_IDENTIFIER_FIXUP_1452;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3372;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3370;
        if (_RESERVED_IDENTIFIER_FIXUP_1452 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1461 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_1461.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1461.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1467 = hdLod7(param_25, param_26);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1471 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2860 = _RESERVED_IDENTIFIER_FIXUP_2785;
            _RESERVED_IDENTIFIER_FIXUP_2860.z = _RESERVED_IDENTIFIER_FIXUP_1471.x;
            _RESERVED_IDENTIFIER_FIXUP_2860.w = _RESERVED_IDENTIFIER_FIXUP_1471.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1481 = _RESERVED_IDENTIFIER_FIXUP_2860.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2864;
            _RESERVED_IDENTIFIER_FIXUP_2864.x = _RESERVED_IDENTIFIER_FIXUP_1481.x;
            _RESERVED_IDENTIFIER_FIXUP_2864.y = _RESERVED_IDENTIFIER_FIXUP_1481.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1488 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_1488.y;
            _RESERVED_IDENTIFIER_FIXUP_2864.w = _RESERVED_IDENTIFIER_FIXUP_1492;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2864.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1492;
            float _RESERVED_IDENTIFIER_FIXUP_1503 = _RESERVED_IDENTIFIER_FIXUP_1467.x + hdLod7(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2875 = _RESERVED_IDENTIFIER_FIXUP_1467;
            _RESERVED_IDENTIFIER_FIXUP_2875.x = _RESERVED_IDENTIFIER_FIXUP_1503;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_2860.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2877;
            _RESERVED_IDENTIFIER_FIXUP_2877.x = _RESERVED_IDENTIFIER_FIXUP_1510.x;
            _RESERVED_IDENTIFIER_FIXUP_2877.y = _RESERVED_IDENTIFIER_FIXUP_1510.y;
            _RESERVED_IDENTIFIER_FIXUP_2877.w = _RESERVED_IDENTIFIER_FIXUP_1492;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2877.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1492;
            float _RESERVED_IDENTIFIER_FIXUP_1532 = _RESERVED_IDENTIFIER_FIXUP_1503 + hdLod7(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_2875.x = _RESERVED_IDENTIFIER_FIXUP_1532;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1539 = _RESERVED_IDENTIFIER_FIXUP_2860.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2890;
            _RESERVED_IDENTIFIER_FIXUP_2890.x = _RESERVED_IDENTIFIER_FIXUP_1539.x;
            _RESERVED_IDENTIFIER_FIXUP_2890.y = _RESERVED_IDENTIFIER_FIXUP_1539.y;
            _RESERVED_IDENTIFIER_FIXUP_2890.w = _RESERVED_IDENTIFIER_FIXUP_1492;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2890.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1492;
            float _RESERVED_IDENTIFIER_FIXUP_1561 = _RESERVED_IDENTIFIER_FIXUP_1532 + hdLod7(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_2875.x = _RESERVED_IDENTIFIER_FIXUP_1561;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_2860.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2903;
            _RESERVED_IDENTIFIER_FIXUP_2903.x = _RESERVED_IDENTIFIER_FIXUP_1568.x;
            _RESERVED_IDENTIFIER_FIXUP_2903.y = _RESERVED_IDENTIFIER_FIXUP_1568.y;
            _RESERVED_IDENTIFIER_FIXUP_2903.w = _RESERVED_IDENTIFIER_FIXUP_1492;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2903.xy;
            float param_34 = _RESERVED_IDENTIFIER_FIXUP_1492;
            float _RESERVED_IDENTIFIER_FIXUP_1590 = _RESERVED_IDENTIFIER_FIXUP_1561 + hdLod7(param_33, param_34).x;
            _RESERVED_IDENTIFIER_FIXUP_2860.z = _RESERVED_IDENTIFIER_FIXUP_1590;
            _RESERVED_IDENTIFIER_FIXUP_2860.y = _RESERVED_IDENTIFIER_FIXUP_1590 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_2875;
            _RESERVED_IDENTIFIER_FIXUP_3370 = _RESERVED_IDENTIFIER_FIXUP_2860;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2789 = _RESERVED_IDENTIFIER_FIXUP_2785;
            _RESERVED_IDENTIFIER_FIXUP_2789.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2789.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1606 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1610 = _RESERVED_IDENTIFIER_FIXUP_1606.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3393 = vec4(_RESERVED_IDENTIFIER_FIXUP_1606.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1610);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1621 = _RESERVED_IDENTIFIER_FIXUP_3393.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3394 = vec4(_RESERVED_IDENTIFIER_FIXUP_1621 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1095);
            _RESERVED_IDENTIFIER_FIXUP_3394.w = _RESERVED_IDENTIFIER_FIXUP_1610;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_1621;
            float param_36 = _RESERVED_IDENTIFIER_FIXUP_1610;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3394.xy;
            float param_38 = _RESERVED_IDENTIFIER_FIXUP_1610;
            float _RESERVED_IDENTIFIER_FIXUP_1651 = hdLod8(param_35, param_36).x + hdLod8(param_37, param_38).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2816 = _RESERVED_IDENTIFIER_FIXUP_3393;
            _RESERVED_IDENTIFIER_FIXUP_2816.z = _RESERVED_IDENTIFIER_FIXUP_1651;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1658 = _RESERVED_IDENTIFIER_FIXUP_2816.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2818 = _RESERVED_IDENTIFIER_FIXUP_3394;
            _RESERVED_IDENTIFIER_FIXUP_2818.x = _RESERVED_IDENTIFIER_FIXUP_1658.x;
            _RESERVED_IDENTIFIER_FIXUP_2818.y = _RESERVED_IDENTIFIER_FIXUP_1658.y;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2818.xy;
            float param_40 = _RESERVED_IDENTIFIER_FIXUP_1610;
            float _RESERVED_IDENTIFIER_FIXUP_1673 = _RESERVED_IDENTIFIER_FIXUP_1651 + hdLod8(param_39, param_40).x;
            _RESERVED_IDENTIFIER_FIXUP_2816.z = _RESERVED_IDENTIFIER_FIXUP_1673;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1680 = _RESERVED_IDENTIFIER_FIXUP_2816.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2827 = _RESERVED_IDENTIFIER_FIXUP_2818;
            _RESERVED_IDENTIFIER_FIXUP_2827.x = _RESERVED_IDENTIFIER_FIXUP_1680.x;
            _RESERVED_IDENTIFIER_FIXUP_2827.y = _RESERVED_IDENTIFIER_FIXUP_1680.y;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2827.xy;
            float param_42 = _RESERVED_IDENTIFIER_FIXUP_1610;
            float _RESERVED_IDENTIFIER_FIXUP_1695 = _RESERVED_IDENTIFIER_FIXUP_1673 + hdLod8(param_41, param_42).x;
            _RESERVED_IDENTIFIER_FIXUP_2816.z = _RESERVED_IDENTIFIER_FIXUP_1695;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1702 = _RESERVED_IDENTIFIER_FIXUP_2816.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2836 = _RESERVED_IDENTIFIER_FIXUP_2827;
            _RESERVED_IDENTIFIER_FIXUP_2836.x = _RESERVED_IDENTIFIER_FIXUP_1702.x;
            _RESERVED_IDENTIFIER_FIXUP_2836.y = _RESERVED_IDENTIFIER_FIXUP_1702.y;
            vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_2836.xy;
            float param_44 = _RESERVED_IDENTIFIER_FIXUP_1610;
            float _RESERVED_IDENTIFIER_FIXUP_1717 = _RESERVED_IDENTIFIER_FIXUP_1695 + hdLod8(param_43, param_44).x;
            _RESERVED_IDENTIFIER_FIXUP_2816.x = _RESERVED_IDENTIFIER_FIXUP_1717;
            float _RESERVED_IDENTIFIER_FIXUP_1725 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2816.y = _RESERVED_IDENTIFIER_FIXUP_1725;
            float _RESERVED_IDENTIFIER_FIXUP_1731 = clamp((_RESERVED_IDENTIFIER_FIXUP_1725 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2789.z = _RESERVED_IDENTIFIER_FIXUP_1731;
            float _RESERVED_IDENTIFIER_FIXUP_1736 = (_RESERVED_IDENTIFIER_FIXUP_1717 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2789.w = _RESERVED_IDENTIFIER_FIXUP_1736;
            _RESERVED_IDENTIFIER_FIXUP_2789.y = (_RESERVED_IDENTIFIER_FIXUP_1731 * _RESERVED_IDENTIFIER_FIXUP_1736) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_2816;
            _RESERVED_IDENTIFIER_FIXUP_3370 = _RESERVED_IDENTIFIER_FIXUP_2789;
        }
        _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_3372;
        _RESERVED_IDENTIFIER_FIXUP_3369 = _RESERVED_IDENTIFIER_FIXUP_3370;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1751 = min(_RESERVED_IDENTIFIER_FIXUP_3369.y, _RESERVED_IDENTIFIER_FIXUP_3369.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2981 = _RESERVED_IDENTIFIER_FIXUP_3371;
    _RESERVED_IDENTIFIER_FIXUP_2981.x = _RESERVED_IDENTIFIER_FIXUP_1751;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2984 = _RESERVED_IDENTIFIER_FIXUP_3369;
    _RESERVED_IDENTIFIER_FIXUP_2984.x = (_RESERVED_IDENTIFIER_FIXUP_1751 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1762 = _RESERVED_IDENTIFIER_FIXUP_1118.xyz * _RESERVED_IDENTIFIER_FIXUP_2984.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2986 = _RESERVED_IDENTIFIER_FIXUP_1118;
    _RESERVED_IDENTIFIER_FIXUP_2986.x = _RESERVED_IDENTIFIER_FIXUP_1762.x;
    _RESERVED_IDENTIFIER_FIXUP_2986.y = _RESERVED_IDENTIFIER_FIXUP_1762.y;
    _RESERVED_IDENTIFIER_FIXUP_2986.z = _RESERVED_IDENTIFIER_FIXUP_1762.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1773 = _RESERVED_IDENTIFIER_FIXUP_2986.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3364).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2992 = _RESERVED_IDENTIFIER_FIXUP_2986;
    _RESERVED_IDENTIFIER_FIXUP_2992.x = _RESERVED_IDENTIFIER_FIXUP_1773.x;
    _RESERVED_IDENTIFIER_FIXUP_2992.y = _RESERVED_IDENTIFIER_FIXUP_1773.y;
    _RESERVED_IDENTIFIER_FIXUP_2992.z = _RESERVED_IDENTIFIER_FIXUP_1773.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1784 = _RESERVED_IDENTIFIER_FIXUP_2992.xyz + _RESERVED_IDENTIFIER_FIXUP_2992.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2998 = _RESERVED_IDENTIFIER_FIXUP_2992;
    _RESERVED_IDENTIFIER_FIXUP_2998.x = _RESERVED_IDENTIFIER_FIXUP_1784.x;
    _RESERVED_IDENTIFIER_FIXUP_2998.y = _RESERVED_IDENTIFIER_FIXUP_1784.y;
    _RESERVED_IDENTIFIER_FIXUP_2998.z = _RESERVED_IDENTIFIER_FIXUP_1784.z;
    _RESERVED_IDENTIFIER_FIXUP_2984.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2984.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2984.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1809 = (_RESERVED_IDENTIFIER_FIXUP_2984.xyz * _RESERVED_IDENTIFIER_FIXUP_2981.xxx) + _RESERVED_IDENTIFIER_FIXUP_2998.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3010 = _RESERVED_IDENTIFIER_FIXUP_2998;
    _RESERVED_IDENTIFIER_FIXUP_3010.x = _RESERVED_IDENTIFIER_FIXUP_1809.x;
    _RESERVED_IDENTIFIER_FIXUP_3010.y = _RESERVED_IDENTIFIER_FIXUP_1809.y;
    _RESERVED_IDENTIFIER_FIXUP_3010.z = _RESERVED_IDENTIFIER_FIXUP_1809.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1822 = _RESERVED_IDENTIFIER_FIXUP_3010.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3016 = _RESERVED_IDENTIFIER_FIXUP_3010;
    _RESERVED_IDENTIFIER_FIXUP_3016.x = _RESERVED_IDENTIFIER_FIXUP_1822.x;
    _RESERVED_IDENTIFIER_FIXUP_3016.y = _RESERVED_IDENTIFIER_FIXUP_1822.y;
    _RESERVED_IDENTIFIER_FIXUP_3016.z = _RESERVED_IDENTIFIER_FIXUP_1822.z;
    vec2 param_45 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1877 = hdTex0(param_45);
    vec2 param_46 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1881 = hdTex1(param_46);
    vec2 param_47 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1885 = hdTex2(param_47);
    vec2 param_48 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1889 = hdTex3(param_48);
    vec2 param_49 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1893 = hdTex4(param_49);
    float _RESERVED_IDENTIFIER_FIXUP_1897 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1893.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3030 = _RESERVED_IDENTIFIER_FIXUP_1893;
    _RESERVED_IDENTIFIER_FIXUP_3030.w = _RESERVED_IDENTIFIER_FIXUP_1897;
    float _RESERVED_IDENTIFIER_FIXUP_1902 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1897;
    _RESERVED_IDENTIFIER_FIXUP_3030.w = _RESERVED_IDENTIFIER_FIXUP_1902;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1907 = _RESERVED_IDENTIFIER_FIXUP_1881 * _RESERVED_IDENTIFIER_FIXUP_3030.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1925 = (_RESERVED_IDENTIFIER_FIXUP_1889 * _RESERVED_IDENTIFIER_FIXUP_3030.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1885 * _RESERVED_IDENTIFIER_FIXUP_3030.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1877 * _RESERVED_IDENTIFIER_FIXUP_3030.wwww) + _RESERVED_IDENTIFIER_FIXUP_1907));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3037 = _RESERVED_IDENTIFIER_FIXUP_1907;
    _RESERVED_IDENTIFIER_FIXUP_3037.x = _RESERVED_IDENTIFIER_FIXUP_1125;
    float _RESERVED_IDENTIFIER_FIXUP_1938 = clamp((_RESERVED_IDENTIFIER_FIXUP_1125 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3037.x = _RESERVED_IDENTIFIER_FIXUP_1938;
    float _RESERVED_IDENTIFIER_FIXUP_1944 = ((-_RESERVED_IDENTIFIER_FIXUP_1938) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3037.y = _RESERVED_IDENTIFIER_FIXUP_1944;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3379;
    if (_RESERVED_IDENTIFIER_FIXUP_1944 != (-_RESERVED_IDENTIFIER_FIXUP_1944))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1956 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1966 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1968 = _RESERVED_IDENTIFIER_FIXUP_1966.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3050 = _RESERVED_IDENTIFIER_FIXUP_3037;
        _RESERVED_IDENTIFIER_FIXUP_3050.y = _RESERVED_IDENTIFIER_FIXUP_1968;
        _RESERVED_IDENTIFIER_FIXUP_3050.z = _RESERVED_IDENTIFIER_FIXUP_1966.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1976 = _RESERVED_IDENTIFIER_FIXUP_3050.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3054;
        _RESERVED_IDENTIFIER_FIXUP_3054.x = _RESERVED_IDENTIFIER_FIXUP_1976.x;
        _RESERVED_IDENTIFIER_FIXUP_3054.y = _RESERVED_IDENTIFIER_FIXUP_1976.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1983 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_1983.y;
        _RESERVED_IDENTIFIER_FIXUP_3054.w = _RESERVED_IDENTIFIER_FIXUP_1987;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_1956.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1956.w;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3054.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1987;
        float _RESERVED_IDENTIFIER_FIXUP_1998 = hdLod5(param_50, param_51).x + hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3396 = vec4(_RESERVED_IDENTIFIER_FIXUP_1938, _RESERVED_IDENTIFIER_FIXUP_1968, _RESERVED_IDENTIFIER_FIXUP_1966.y, _RESERVED_IDENTIFIER_FIXUP_1998);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2005 = _RESERVED_IDENTIFIER_FIXUP_3396.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3067;
        _RESERVED_IDENTIFIER_FIXUP_3067.x = _RESERVED_IDENTIFIER_FIXUP_2005.x;
        _RESERVED_IDENTIFIER_FIXUP_3067.y = _RESERVED_IDENTIFIER_FIXUP_2005.y;
        _RESERVED_IDENTIFIER_FIXUP_3067.w = _RESERVED_IDENTIFIER_FIXUP_1987;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3067.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_1987;
        float _RESERVED_IDENTIFIER_FIXUP_2027 = _RESERVED_IDENTIFIER_FIXUP_1998 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3396.w = _RESERVED_IDENTIFIER_FIXUP_2027;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2034 = _RESERVED_IDENTIFIER_FIXUP_3396.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3080;
        _RESERVED_IDENTIFIER_FIXUP_3080.x = _RESERVED_IDENTIFIER_FIXUP_2034.x;
        _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_2034.y;
        _RESERVED_IDENTIFIER_FIXUP_3080.w = _RESERVED_IDENTIFIER_FIXUP_1987;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3080.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_1987;
        float _RESERVED_IDENTIFIER_FIXUP_2056 = _RESERVED_IDENTIFIER_FIXUP_2027 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3396.w = _RESERVED_IDENTIFIER_FIXUP_2056;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2063 = _RESERVED_IDENTIFIER_FIXUP_3396.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3093;
        _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_2063.x;
        _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_2063.y;
        _RESERVED_IDENTIFIER_FIXUP_3093.w = _RESERVED_IDENTIFIER_FIXUP_1987;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3093.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_1987;
        float _RESERVED_IDENTIFIER_FIXUP_2085 = _RESERVED_IDENTIFIER_FIXUP_2056 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_2085;
        float _RESERVED_IDENTIFIER_FIXUP_2090 = (_RESERVED_IDENTIFIER_FIXUP_2085 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_2090;
        _RESERVED_IDENTIFIER_FIXUP_3396.x = (_RESERVED_IDENTIFIER_FIXUP_1938 * _RESERVED_IDENTIFIER_FIXUP_2090) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3379 = _RESERVED_IDENTIFIER_FIXUP_3396;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3047 = _RESERVED_IDENTIFIER_FIXUP_3037;
        _RESERVED_IDENTIFIER_FIXUP_3047.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3379 = _RESERVED_IDENTIFIER_FIXUP_3047;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3115 = _RESERVED_IDENTIFIER_FIXUP_3379;
    _RESERVED_IDENTIFIER_FIXUP_3115.y = _RESERVED_IDENTIFIER_FIXUP_1301;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3384;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3382;
    if (_RESERVED_IDENTIFIER_FIXUP_1301 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2117 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2127 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3255 = _RESERVED_IDENTIFIER_FIXUP_3115;
        _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_2127.x;
        _RESERVED_IDENTIFIER_FIXUP_3255.z = _RESERVED_IDENTIFIER_FIXUP_2127.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2137 = _RESERVED_IDENTIFIER_FIXUP_3255.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3259;
        _RESERVED_IDENTIFIER_FIXUP_3259.x = _RESERVED_IDENTIFIER_FIXUP_2137.x;
        _RESERVED_IDENTIFIER_FIXUP_3259.y = _RESERVED_IDENTIFIER_FIXUP_2137.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2144 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2148 = _RESERVED_IDENTIFIER_FIXUP_2144.y;
        _RESERVED_IDENTIFIER_FIXUP_3259.w = _RESERVED_IDENTIFIER_FIXUP_2148;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_2117.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2117.w;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3259.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2148;
        float _RESERVED_IDENTIFIER_FIXUP_2159 = hdLod6(param_60, param_61).x + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3255.w = _RESERVED_IDENTIFIER_FIXUP_2159;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2166 = _RESERVED_IDENTIFIER_FIXUP_3255.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3272;
        _RESERVED_IDENTIFIER_FIXUP_3272.x = _RESERVED_IDENTIFIER_FIXUP_2166.x;
        _RESERVED_IDENTIFIER_FIXUP_3272.y = _RESERVED_IDENTIFIER_FIXUP_2166.y;
        _RESERVED_IDENTIFIER_FIXUP_3272.w = _RESERVED_IDENTIFIER_FIXUP_2148;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3272.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2148;
        float _RESERVED_IDENTIFIER_FIXUP_2188 = _RESERVED_IDENTIFIER_FIXUP_2159 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3255.w = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2195 = _RESERVED_IDENTIFIER_FIXUP_3255.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3285;
        _RESERVED_IDENTIFIER_FIXUP_3285.x = _RESERVED_IDENTIFIER_FIXUP_2195.x;
        _RESERVED_IDENTIFIER_FIXUP_3285.y = _RESERVED_IDENTIFIER_FIXUP_2195.y;
        _RESERVED_IDENTIFIER_FIXUP_3285.w = _RESERVED_IDENTIFIER_FIXUP_2148;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3285.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2148;
        float _RESERVED_IDENTIFIER_FIXUP_2217 = _RESERVED_IDENTIFIER_FIXUP_2188 + hdLod6(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3255.w = _RESERVED_IDENTIFIER_FIXUP_2217;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2224 = _RESERVED_IDENTIFIER_FIXUP_3255.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3298;
        _RESERVED_IDENTIFIER_FIXUP_3298.x = _RESERVED_IDENTIFIER_FIXUP_2224.x;
        _RESERVED_IDENTIFIER_FIXUP_3298.y = _RESERVED_IDENTIFIER_FIXUP_2224.y;
        _RESERVED_IDENTIFIER_FIXUP_3298.w = _RESERVED_IDENTIFIER_FIXUP_2148;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3298.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2148;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2241 = hdLod6(param_68, param_69);
        float _RESERVED_IDENTIFIER_FIXUP_2246 = _RESERVED_IDENTIFIER_FIXUP_2217 + _RESERVED_IDENTIFIER_FIXUP_2241.x;
        _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_2246;
        _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_2246 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3384 = _RESERVED_IDENTIFIER_FIXUP_2241;
        _RESERVED_IDENTIFIER_FIXUP_3382 = _RESERVED_IDENTIFIER_FIXUP_3255;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2259 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3120 = _RESERVED_IDENTIFIER_FIXUP_3115;
        _RESERVED_IDENTIFIER_FIXUP_3120.z = _RESERVED_IDENTIFIER_FIXUP_2259;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3385;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3383;
        if (_RESERVED_IDENTIFIER_FIXUP_2259 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2268 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2268.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2268.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2274 = hdLod7(param_70, param_71);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2278 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3195 = _RESERVED_IDENTIFIER_FIXUP_3120;
            _RESERVED_IDENTIFIER_FIXUP_3195.z = _RESERVED_IDENTIFIER_FIXUP_2278.x;
            _RESERVED_IDENTIFIER_FIXUP_3195.w = _RESERVED_IDENTIFIER_FIXUP_2278.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2288 = _RESERVED_IDENTIFIER_FIXUP_3195.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3199;
            _RESERVED_IDENTIFIER_FIXUP_3199.x = _RESERVED_IDENTIFIER_FIXUP_2288.x;
            _RESERVED_IDENTIFIER_FIXUP_3199.y = _RESERVED_IDENTIFIER_FIXUP_2288.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2295 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2299 = _RESERVED_IDENTIFIER_FIXUP_2295.y;
            _RESERVED_IDENTIFIER_FIXUP_3199.w = _RESERVED_IDENTIFIER_FIXUP_2299;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3199.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2299;
            float _RESERVED_IDENTIFIER_FIXUP_2310 = _RESERVED_IDENTIFIER_FIXUP_2274.x + hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3210 = _RESERVED_IDENTIFIER_FIXUP_2274;
            _RESERVED_IDENTIFIER_FIXUP_3210.x = _RESERVED_IDENTIFIER_FIXUP_2310;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2317 = _RESERVED_IDENTIFIER_FIXUP_3195.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3212;
            _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_2317.x;
            _RESERVED_IDENTIFIER_FIXUP_3212.y = _RESERVED_IDENTIFIER_FIXUP_2317.y;
            _RESERVED_IDENTIFIER_FIXUP_3212.w = _RESERVED_IDENTIFIER_FIXUP_2299;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3212.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2299;
            float _RESERVED_IDENTIFIER_FIXUP_2339 = _RESERVED_IDENTIFIER_FIXUP_2310 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3210.x = _RESERVED_IDENTIFIER_FIXUP_2339;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2346 = _RESERVED_IDENTIFIER_FIXUP_3195.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3225;
            _RESERVED_IDENTIFIER_FIXUP_3225.x = _RESERVED_IDENTIFIER_FIXUP_2346.x;
            _RESERVED_IDENTIFIER_FIXUP_3225.y = _RESERVED_IDENTIFIER_FIXUP_2346.y;
            _RESERVED_IDENTIFIER_FIXUP_3225.w = _RESERVED_IDENTIFIER_FIXUP_2299;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3225.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2299;
            float _RESERVED_IDENTIFIER_FIXUP_2368 = _RESERVED_IDENTIFIER_FIXUP_2339 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3210.x = _RESERVED_IDENTIFIER_FIXUP_2368;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2375 = _RESERVED_IDENTIFIER_FIXUP_3195.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3238;
            _RESERVED_IDENTIFIER_FIXUP_3238.x = _RESERVED_IDENTIFIER_FIXUP_2375.x;
            _RESERVED_IDENTIFIER_FIXUP_3238.y = _RESERVED_IDENTIFIER_FIXUP_2375.y;
            _RESERVED_IDENTIFIER_FIXUP_3238.w = _RESERVED_IDENTIFIER_FIXUP_2299;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3238.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2299;
            float _RESERVED_IDENTIFIER_FIXUP_2397 = _RESERVED_IDENTIFIER_FIXUP_2368 + hdLod7(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3195.z = _RESERVED_IDENTIFIER_FIXUP_2397;
            _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_2397 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3385 = _RESERVED_IDENTIFIER_FIXUP_3210;
            _RESERVED_IDENTIFIER_FIXUP_3383 = _RESERVED_IDENTIFIER_FIXUP_3195;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3124 = _RESERVED_IDENTIFIER_FIXUP_3120;
            _RESERVED_IDENTIFIER_FIXUP_3124.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3124.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2413 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2417 = _RESERVED_IDENTIFIER_FIXUP_2413.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3397 = vec4(_RESERVED_IDENTIFIER_FIXUP_2413.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2417);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2428 = _RESERVED_IDENTIFIER_FIXUP_3397.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3398 = vec4(_RESERVED_IDENTIFIER_FIXUP_2428 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1902);
            _RESERVED_IDENTIFIER_FIXUP_3398.w = _RESERVED_IDENTIFIER_FIXUP_2417;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2428;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2417;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3398.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2417;
            float _RESERVED_IDENTIFIER_FIXUP_2458 = hdLod8(param_80, param_81).x + hdLod8(param_82, param_83).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3151 = _RESERVED_IDENTIFIER_FIXUP_3397;
            _RESERVED_IDENTIFIER_FIXUP_3151.z = _RESERVED_IDENTIFIER_FIXUP_2458;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2465 = _RESERVED_IDENTIFIER_FIXUP_3151.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3153 = _RESERVED_IDENTIFIER_FIXUP_3398;
            _RESERVED_IDENTIFIER_FIXUP_3153.x = _RESERVED_IDENTIFIER_FIXUP_2465.x;
            _RESERVED_IDENTIFIER_FIXUP_3153.y = _RESERVED_IDENTIFIER_FIXUP_2465.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3153.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2417;
            float _RESERVED_IDENTIFIER_FIXUP_2480 = _RESERVED_IDENTIFIER_FIXUP_2458 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3151.z = _RESERVED_IDENTIFIER_FIXUP_2480;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2487 = _RESERVED_IDENTIFIER_FIXUP_3151.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3162 = _RESERVED_IDENTIFIER_FIXUP_3153;
            _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_2487.x;
            _RESERVED_IDENTIFIER_FIXUP_3162.y = _RESERVED_IDENTIFIER_FIXUP_2487.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3162.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2417;
            float _RESERVED_IDENTIFIER_FIXUP_2502 = _RESERVED_IDENTIFIER_FIXUP_2480 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3151.z = _RESERVED_IDENTIFIER_FIXUP_2502;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2509 = _RESERVED_IDENTIFIER_FIXUP_3151.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3171 = _RESERVED_IDENTIFIER_FIXUP_3162;
            _RESERVED_IDENTIFIER_FIXUP_3171.x = _RESERVED_IDENTIFIER_FIXUP_2509.x;
            _RESERVED_IDENTIFIER_FIXUP_3171.y = _RESERVED_IDENTIFIER_FIXUP_2509.y;
            vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3171.xy;
            float param_89 = _RESERVED_IDENTIFIER_FIXUP_2417;
            float _RESERVED_IDENTIFIER_FIXUP_2524 = _RESERVED_IDENTIFIER_FIXUP_2502 + hdLod8(param_88, param_89).x;
            _RESERVED_IDENTIFIER_FIXUP_3151.x = _RESERVED_IDENTIFIER_FIXUP_2524;
            float _RESERVED_IDENTIFIER_FIXUP_2532 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3151.y = _RESERVED_IDENTIFIER_FIXUP_2532;
            float _RESERVED_IDENTIFIER_FIXUP_2538 = clamp((_RESERVED_IDENTIFIER_FIXUP_2532 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3124.z = _RESERVED_IDENTIFIER_FIXUP_2538;
            float _RESERVED_IDENTIFIER_FIXUP_2543 = (_RESERVED_IDENTIFIER_FIXUP_2524 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3124.w = _RESERVED_IDENTIFIER_FIXUP_2543;
            _RESERVED_IDENTIFIER_FIXUP_3124.y = (_RESERVED_IDENTIFIER_FIXUP_2538 * _RESERVED_IDENTIFIER_FIXUP_2543) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3385 = _RESERVED_IDENTIFIER_FIXUP_3151;
            _RESERVED_IDENTIFIER_FIXUP_3383 = _RESERVED_IDENTIFIER_FIXUP_3124;
        }
        _RESERVED_IDENTIFIER_FIXUP_3384 = _RESERVED_IDENTIFIER_FIXUP_3385;
        _RESERVED_IDENTIFIER_FIXUP_3382 = _RESERVED_IDENTIFIER_FIXUP_3383;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2558 = min(_RESERVED_IDENTIFIER_FIXUP_3382.y, _RESERVED_IDENTIFIER_FIXUP_3382.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3316 = _RESERVED_IDENTIFIER_FIXUP_3384;
    _RESERVED_IDENTIFIER_FIXUP_3316.x = _RESERVED_IDENTIFIER_FIXUP_2558;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3319 = _RESERVED_IDENTIFIER_FIXUP_3382;
    _RESERVED_IDENTIFIER_FIXUP_3319.x = (_RESERVED_IDENTIFIER_FIXUP_2558 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2569 = _RESERVED_IDENTIFIER_FIXUP_1925.xyz * _RESERVED_IDENTIFIER_FIXUP_3319.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3321 = _RESERVED_IDENTIFIER_FIXUP_1925;
    _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_2569.x;
    _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_2569.y;
    _RESERVED_IDENTIFIER_FIXUP_3321.z = _RESERVED_IDENTIFIER_FIXUP_2569.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2580 = _RESERVED_IDENTIFIER_FIXUP_3321.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3327 = _RESERVED_IDENTIFIER_FIXUP_3321;
    _RESERVED_IDENTIFIER_FIXUP_3327.x = _RESERVED_IDENTIFIER_FIXUP_2580.x;
    _RESERVED_IDENTIFIER_FIXUP_3327.y = _RESERVED_IDENTIFIER_FIXUP_2580.y;
    _RESERVED_IDENTIFIER_FIXUP_3327.z = _RESERVED_IDENTIFIER_FIXUP_2580.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2591 = _RESERVED_IDENTIFIER_FIXUP_3327.xyz + _RESERVED_IDENTIFIER_FIXUP_3327.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3333 = _RESERVED_IDENTIFIER_FIXUP_3327;
    _RESERVED_IDENTIFIER_FIXUP_3333.x = _RESERVED_IDENTIFIER_FIXUP_2591.x;
    _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_2591.y;
    _RESERVED_IDENTIFIER_FIXUP_3333.z = _RESERVED_IDENTIFIER_FIXUP_2591.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2602 = _RESERVED_IDENTIFIER_FIXUP_3333.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3319.x = _RESERVED_IDENTIFIER_FIXUP_2602.x;
    _RESERVED_IDENTIFIER_FIXUP_3319.y = _RESERVED_IDENTIFIER_FIXUP_2602.y;
    _RESERVED_IDENTIFIER_FIXUP_3319.z = _RESERVED_IDENTIFIER_FIXUP_2602.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2616 = (_RESERVED_IDENTIFIER_FIXUP_3319.xyz * _RESERVED_IDENTIFIER_FIXUP_3316.xxx) + _RESERVED_IDENTIFIER_FIXUP_3333.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3345 = _RESERVED_IDENTIFIER_FIXUP_3333;
    _RESERVED_IDENTIFIER_FIXUP_3345.x = _RESERVED_IDENTIFIER_FIXUP_2616.x;
    _RESERVED_IDENTIFIER_FIXUP_3345.y = _RESERVED_IDENTIFIER_FIXUP_2616.y;
    _RESERVED_IDENTIFIER_FIXUP_3345.z = _RESERVED_IDENTIFIER_FIXUP_2616.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2629 = _RESERVED_IDENTIFIER_FIXUP_3345.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3351 = _RESERVED_IDENTIFIER_FIXUP_3345;
    _RESERVED_IDENTIFIER_FIXUP_3351.x = _RESERVED_IDENTIFIER_FIXUP_2629.x;
    _RESERVED_IDENTIFIER_FIXUP_3351.y = _RESERVED_IDENTIFIER_FIXUP_2629.y;
    _RESERVED_IDENTIFIER_FIXUP_3351.z = _RESERVED_IDENTIFIER_FIXUP_2629.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3351.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_929 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_938;
    if (_RESERVED_IDENTIFIER_FIXUP_929)
    {
        _RESERVED_IDENTIFIER_FIXUP_938 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_938 = _RESERVED_IDENTIFIER_FIXUP_929;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_938)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_975 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3016.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1002 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2688;
    if (_RESERVED_IDENTIFIER_FIXUP_975 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2688 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_975), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1002);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2688 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1002);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2688;
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        vec2 hdB167 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB167.x;
        r1.z = hdB167.y;
        vec2 hdB189 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB189.x;
        r3.y = hdB189.y;
        vec2 hdB197 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB197.x;
        r3.w = hdB197.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r1.w = r2.x + r3.x;
        vec2 hdB220 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB220.x;
        r2.y = hdB220.y;
        vec2 hdB227 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB227.x;
        r2.w = hdB227.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB250 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB250.x;
        r2.y = hdB250.y;
        vec2 hdB257 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB257.x;
        r2.w = hdB257.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.w += r2.x;
        vec2 hdB280 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB280.x;
        r2.y = hdB280.y;
        vec2 hdB287 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB287.x;
        r2.w = hdB287.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.y = r1.w + r2.x;
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
        r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod6(param_15, param_16);
        vec2 hdB347 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB347.x;
        r1.z = hdB347.y;
        vec2 hdB357 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB357.x;
        r3.y = hdB357.y;
        vec2 hdB364 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB364.x;
        r3.w = hdB364.y;
        vec2 param_17 = r3.xy;
        float param_18 = r3.w;
        r3 = hdLod6(param_17, param_18);
        r1.w = r2.x + r3.x;
        vec2 hdB386 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB386.x;
        r2.y = hdB386.y;
        vec2 hdB393 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB393.x;
        r2.w = hdB393.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod6(param_19, param_20);
        r1.w += r2.x;
        vec2 hdB415 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB415.x;
        r2.y = hdB415.y;
        vec2 hdB422 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB422.x;
        r2.w = hdB422.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod6(param_21, param_22);
        r1.w += r2.x;
        vec2 hdB444 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB444.x;
        r2.y = hdB444.y;
        vec2 hdB451 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB451.x;
        r2.w = hdB451.y;
        vec2 param_23 = r2.xy;
        float param_24 = r2.w;
        r2 = hdLod6(param_23, param_24);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod7(param_25, param_26);
            vec2 hdB500 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB500.x;
            r1.w = hdB500.y;
            vec2 hdB510 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB510.x;
            r3.y = hdB510.y;
            vec2 hdB517 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB517.x;
            r3.w = hdB517.y;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r2.x += r3.x;
            vec2 hdB539 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB539.x;
            r3.y = hdB539.y;
            vec2 hdB546 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB546.x;
            r3.w = hdB546.y;
            vec2 param_29 = r3.xy;
            float param_30 = r3.w;
            r3 = hdLod7(param_29, param_30);
            r2.x += r3.x;
            vec2 hdB568 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB568.x;
            r3.y = hdB568.y;
            vec2 hdB575 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB575.x;
            r3.w = hdB575.y;
            vec2 param_31 = r3.xy;
            float param_32 = r3.w;
            r3 = hdLod7(param_31, param_32);
            r2.x += r3.x;
            vec2 hdB597 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB597.x;
            r3.y = hdB597.y;
            vec2 hdB604 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB604.x;
            r3.w = hdB604.y;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod7(param_33, param_34);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 hdB636 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB636.x;
            r2.w = hdB636.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_35 = r2.xy;
            float param_36 = r2.w;
            r3 = hdLod8(param_35, param_36);
            vec2 hdB661 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB661.x;
            r4.y = hdB661.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r5 = hdLod8(param_37, param_38);
            r2.z = r3.x + r5.x;
            vec2 hdB689 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB689.x;
            r4.y = hdB689.y;
            vec2 param_39 = r4.xy;
            float param_40 = r4.w;
            r3 = hdLod8(param_39, param_40);
            r2.z += r3.x;
            vec2 hdB711 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB711.x;
            r4.y = hdB711.y;
            vec2 param_41 = r4.xy;
            float param_42 = r4.w;
            r3 = hdLod8(param_41, param_42);
            r2.z += r3.x;
            vec2 hdB733 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB733.x;
            r4.y = hdB733.y;
            vec2 param_43 = r4.xy;
            float param_44 = r4.w;
            r3 = hdLod8(param_43, param_44);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB791 = r0;
    vec3 hdB795 = hdB791.xyz * r1.xxx;
    r0.x = hdB795.x;
    r0.y = hdB795.y;
    r0.z = hdB795.z;
    vec4 hdB802 = r0;
    vec3 hdB806 = hdB802.xyz * v0.xyz;
    r0.x = hdB806.x;
    r0.y = hdB806.y;
    r0.z = hdB806.z;
    vec4 hdB813 = r0;
    vec4 hdB815 = r0;
    vec3 hdB817 = hdB813.xyz + hdB815.xyz;
    r0.x = hdB817.x;
    r0.y = hdB817.y;
    r0.z = hdB817.z;
    vec3 hdB828 = r0.www * v1.xyz;
    r1.x = hdB828.x;
    r1.y = hdB828.y;
    r1.z = hdB828.z;
    vec4 hdB840 = r0;
    vec3 hdB842 = (r1.xyz * r2.xxx) + hdB840.xyz;
    r0.x = hdB842.x;
    r0.y = hdB842.y;
    r0.z = hdB842.z;
    vec4 hdB849 = r0;
    vec3 hdB856 = hdB849.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB856.x;
    r0.y = hdB856.y;
    r0.z = hdB856.z;
    vec3 hdB871 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB871.x;
    oC0.y = hdB871.y;
    oC0.z = hdB871.z;
    oC0.w = 1.0;
    bool hdB884 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB892;
    if (hdB884)
    {
        hdB892 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB892 = hdB884;
    }
    if (hdB892)
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
    bool _3270 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3280;
    if (_3270)
    {
        _3280 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3280 = _3270;
    }
    if (_3280)
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
        bool _3305 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3320;
        if (!_3305)
        {
            _3320 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3320 = _3305;
        }
        if (_3320)
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
