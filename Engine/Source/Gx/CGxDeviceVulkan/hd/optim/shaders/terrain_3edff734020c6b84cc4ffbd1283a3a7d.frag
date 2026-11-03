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
float _RESERVED_IDENTIFIER_FIXUP_3848;
vec4 _RESERVED_IDENTIFIER_FIXUP_3849;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1189 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1197 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1201 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1205 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1189, _RESERVED_IDENTIFIER_FIXUP_1193, _RESERVED_IDENTIFIER_FIXUP_1205.xxxx), _RESERVED_IDENTIFIER_FIXUP_1197, _RESERVED_IDENTIFIER_FIXUP_1205.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1220 = mix(_RESERVED_IDENTIFIER_FIXUP_1215, _RESERVED_IDENTIFIER_FIXUP_1201, _RESERVED_IDENTIFIER_FIXUP_1205.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_1227 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3035 = _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_3035.x = _RESERVED_IDENTIFIER_FIXUP_1227;
    float _RESERVED_IDENTIFIER_FIXUP_1233 = clamp((_RESERVED_IDENTIFIER_FIXUP_1227 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3035.x = _RESERVED_IDENTIFIER_FIXUP_1233;
    float _RESERVED_IDENTIFIER_FIXUP_1239 = ((-_RESERVED_IDENTIFIER_FIXUP_1233) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3035.x = _RESERVED_IDENTIFIER_FIXUP_1239;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3850;
    if (_RESERVED_IDENTIFIER_FIXUP_1239 != (-_RESERVED_IDENTIFIER_FIXUP_1239))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1251 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3274;
        _RESERVED_IDENTIFIER_FIXUP_3274.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
        _RESERVED_IDENTIFIER_FIXUP_3274.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_3274.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3278;
        _RESERVED_IDENTIFIER_FIXUP_3278.x = _RESERVED_IDENTIFIER_FIXUP_1261.x;
        _RESERVED_IDENTIFIER_FIXUP_3278.y = _RESERVED_IDENTIFIER_FIXUP_1261.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1271 = _RESERVED_IDENTIFIER_FIXUP_3274.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3282;
        _RESERVED_IDENTIFIER_FIXUP_3282.x = _RESERVED_IDENTIFIER_FIXUP_1271.x;
        _RESERVED_IDENTIFIER_FIXUP_3282.y = _RESERVED_IDENTIFIER_FIXUP_1271.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1281 = _RESERVED_IDENTIFIER_FIXUP_3274.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3286;
        _RESERVED_IDENTIFIER_FIXUP_3286.x = _RESERVED_IDENTIFIER_FIXUP_1281.x;
        _RESERVED_IDENTIFIER_FIXUP_3286.y = _RESERVED_IDENTIFIER_FIXUP_1281.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_3274.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3290;
        _RESERVED_IDENTIFIER_FIXUP_3290.x = _RESERVED_IDENTIFIER_FIXUP_1291.x;
        _RESERVED_IDENTIFIER_FIXUP_3290.y = _RESERVED_IDENTIFIER_FIXUP_1291.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1301 = _RESERVED_IDENTIFIER_FIXUP_3274.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3294;
        _RESERVED_IDENTIFIER_FIXUP_3294.x = _RESERVED_IDENTIFIER_FIXUP_1301.x;
        _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_1301.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1311 = _RESERVED_IDENTIFIER_FIXUP_3274.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3298;
        _RESERVED_IDENTIFIER_FIXUP_3298.x = _RESERVED_IDENTIFIER_FIXUP_1311.x;
        _RESERVED_IDENTIFIER_FIXUP_3298.y = _RESERVED_IDENTIFIER_FIXUP_1311.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1321 = _RESERVED_IDENTIFIER_FIXUP_3274.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3302;
        _RESERVED_IDENTIFIER_FIXUP_3302.x = _RESERVED_IDENTIFIER_FIXUP_1321.x;
        _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_1321.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1331 = _RESERVED_IDENTIFIER_FIXUP_3274.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3306;
        _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_1331.x;
        _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_1331.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1339 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1339.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1339.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1345 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3278.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3282.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3286.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3290.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3290.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1385 = hdLod5(param_7, param_8);
        _RESERVED_IDENTIFIER_FIXUP_3294.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3298.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3302.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3306.w = 0.0;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3306.xy;
        float param_10 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1425 = hdLod5(param_9, param_10);
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3278.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1345.y = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3282.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1345.z = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3286.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1345.w = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3294.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1385.y = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3298.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1385.z = hdLod5(param_19, param_20).x;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3302.xy;
        float param_22 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1385.w = hdLod5(param_21, param_22).x;
        float _RESERVED_IDENTIFIER_FIXUP_1465 = _RESERVED_IDENTIFIER_FIXUP_1425.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_1425;
        _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_1465;
        float _RESERVED_IDENTIFIER_FIXUP_1470 = float(_RESERVED_IDENTIFIER_FIXUP_1465 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_1470;
        float _RESERVED_IDENTIFIER_FIXUP_1473 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1345 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_1473;
        float _RESERVED_IDENTIFIER_FIXUP_1476 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1385 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3371.z = _RESERVED_IDENTIFIER_FIXUP_1476;
        float _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_1473 + _RESERVED_IDENTIFIER_FIXUP_1476;
        _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_1482;
        float _RESERVED_IDENTIFIER_FIXUP_1488 = _RESERVED_IDENTIFIER_FIXUP_1470 + _RESERVED_IDENTIFIER_FIXUP_1482;
        _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_1488;
        _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_1488 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3850 = _RESERVED_IDENTIFIER_FIXUP_3371;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1501 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3035.y = _RESERVED_IDENTIFIER_FIXUP_1501;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3851;
        if (_RESERVED_IDENTIFIER_FIXUP_1501 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1510 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3208 = _RESERVED_IDENTIFIER_FIXUP_3035;
            _RESERVED_IDENTIFIER_FIXUP_3208.y = _RESERVED_IDENTIFIER_FIXUP_1510.x;
            _RESERVED_IDENTIFIER_FIXUP_3208.z = _RESERVED_IDENTIFIER_FIXUP_1510.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1520 = _RESERVED_IDENTIFIER_FIXUP_3208.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3212;
            _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1520.x;
            _RESERVED_IDENTIFIER_FIXUP_3212.y = _RESERVED_IDENTIFIER_FIXUP_1520.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_3208.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3216;
            _RESERVED_IDENTIFIER_FIXUP_3216.x = _RESERVED_IDENTIFIER_FIXUP_1530.x;
            _RESERVED_IDENTIFIER_FIXUP_3216.y = _RESERVED_IDENTIFIER_FIXUP_1530.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_3208.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3220;
            _RESERVED_IDENTIFIER_FIXUP_3220.x = _RESERVED_IDENTIFIER_FIXUP_1540.x;
            _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1540.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1550 = _RESERVED_IDENTIFIER_FIXUP_3208.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3224;
            _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_1550.x;
            _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_1550.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1558 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1558.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1558.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1564 = hdLod6(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_3212.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3216.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3220.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3224.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3212.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1564.y = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3216.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1564.z = hdLod6(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3220.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1564.w = hdLod6(param_29, param_30).x;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3224.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1627 = hdLod6(param_31, param_32).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3208.y = _RESERVED_IDENTIFIER_FIXUP_1627;
            float _RESERVED_IDENTIFIER_FIXUP_1632 = float(_RESERVED_IDENTIFIER_FIXUP_1627 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3208.y = _RESERVED_IDENTIFIER_FIXUP_1632;
            float _RESERVED_IDENTIFIER_FIXUP_1635 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1564 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3208.z = _RESERVED_IDENTIFIER_FIXUP_1635;
            float _RESERVED_IDENTIFIER_FIXUP_1641 = _RESERVED_IDENTIFIER_FIXUP_1632 + _RESERVED_IDENTIFIER_FIXUP_1635;
            _RESERVED_IDENTIFIER_FIXUP_3208.y = _RESERVED_IDENTIFIER_FIXUP_1641;
            _RESERVED_IDENTIFIER_FIXUP_3208.x = _RESERVED_IDENTIFIER_FIXUP_1641 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3851 = _RESERVED_IDENTIFIER_FIXUP_3208;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1654 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3052 = _RESERVED_IDENTIFIER_FIXUP_3035;
            _RESERVED_IDENTIFIER_FIXUP_3052.y = _RESERVED_IDENTIFIER_FIXUP_1654;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3852;
            if (_RESERVED_IDENTIFIER_FIXUP_1654 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1663 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3142 = _RESERVED_IDENTIFIER_FIXUP_3052;
                _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1663.x;
                _RESERVED_IDENTIFIER_FIXUP_3142.z = _RESERVED_IDENTIFIER_FIXUP_1663.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1673 = _RESERVED_IDENTIFIER_FIXUP_3142.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3146;
                _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1673.x;
                _RESERVED_IDENTIFIER_FIXUP_3146.y = _RESERVED_IDENTIFIER_FIXUP_1673.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1683 = _RESERVED_IDENTIFIER_FIXUP_3142.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3150;
                _RESERVED_IDENTIFIER_FIXUP_3150.x = _RESERVED_IDENTIFIER_FIXUP_1683.x;
                _RESERVED_IDENTIFIER_FIXUP_3150.y = _RESERVED_IDENTIFIER_FIXUP_1683.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1693 = _RESERVED_IDENTIFIER_FIXUP_3142.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3154;
                _RESERVED_IDENTIFIER_FIXUP_3154.x = _RESERVED_IDENTIFIER_FIXUP_1693.x;
                _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_1693.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1703 = _RESERVED_IDENTIFIER_FIXUP_3142.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3158;
                _RESERVED_IDENTIFIER_FIXUP_3158.x = _RESERVED_IDENTIFIER_FIXUP_1703.x;
                _RESERVED_IDENTIFIER_FIXUP_3158.y = _RESERVED_IDENTIFIER_FIXUP_1703.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1711 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1711.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1711.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1717 = hdLod7(param_33, param_34);
                _RESERVED_IDENTIFIER_FIXUP_3146.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3150.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3154.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3158.w = 0.0;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3146.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1717.y = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3150.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1717.z = hdLod7(param_37, param_38).x;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3154.xy;
                float param_40 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1717.w = hdLod7(param_39, param_40).x;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3158.xy;
                float param_42 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1780 = hdLod7(param_41, param_42).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1780;
                float _RESERVED_IDENTIFIER_FIXUP_1785 = float(_RESERVED_IDENTIFIER_FIXUP_1780 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1785;
                float _RESERVED_IDENTIFIER_FIXUP_1788 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1717 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3142.z = _RESERVED_IDENTIFIER_FIXUP_1788;
                float _RESERVED_IDENTIFIER_FIXUP_1794 = _RESERVED_IDENTIFIER_FIXUP_1785 + _RESERVED_IDENTIFIER_FIXUP_1788;
                _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1794;
                _RESERVED_IDENTIFIER_FIXUP_3142.x = _RESERVED_IDENTIFIER_FIXUP_1794 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3852 = _RESERVED_IDENTIFIER_FIXUP_3142;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_1197.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_1197.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1810 = (_RESERVED_IDENTIFIER_FIXUP_1197.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3061;
                _RESERVED_IDENTIFIER_FIXUP_3061.x = _RESERVED_IDENTIFIER_FIXUP_1810.x;
                _RESERVED_IDENTIFIER_FIXUP_3061.y = _RESERVED_IDENTIFIER_FIXUP_1810.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1820 = _RESERVED_IDENTIFIER_FIXUP_3061.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3065;
                _RESERVED_IDENTIFIER_FIXUP_3065.x = _RESERVED_IDENTIFIER_FIXUP_1820.x;
                _RESERVED_IDENTIFIER_FIXUP_3065.y = _RESERVED_IDENTIFIER_FIXUP_1820.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1830 = _RESERVED_IDENTIFIER_FIXUP_3061.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3069;
                _RESERVED_IDENTIFIER_FIXUP_3069.x = _RESERVED_IDENTIFIER_FIXUP_1830.x;
                _RESERVED_IDENTIFIER_FIXUP_3069.y = _RESERVED_IDENTIFIER_FIXUP_1830.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1840 = _RESERVED_IDENTIFIER_FIXUP_3061.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3073;
                _RESERVED_IDENTIFIER_FIXUP_3073.x = _RESERVED_IDENTIFIER_FIXUP_1840.x;
                _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1840.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1850 = _RESERVED_IDENTIFIER_FIXUP_3061.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3077;
                _RESERVED_IDENTIFIER_FIXUP_3077.x = _RESERVED_IDENTIFIER_FIXUP_1850.x;
                _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_1850.y;
                _RESERVED_IDENTIFIER_FIXUP_3061.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3061.xy;
                float param_44 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1864 = hdLod8(param_43, param_44);
                _RESERVED_IDENTIFIER_FIXUP_3065.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3069.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3073.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3077.w = 0.0;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3065.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1864.y = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3069.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1864.z = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3073.xy;
                float param_50 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1864.w = hdLod8(param_49, param_50).x;
                vec2 param_51 = _RESERVED_IDENTIFIER_FIXUP_3077.xy;
                float param_52 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1927 = hdLod8(param_51, param_52).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3117 = _RESERVED_IDENTIFIER_FIXUP_3052;
                _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1927;
                float _RESERVED_IDENTIFIER_FIXUP_1932 = float(_RESERVED_IDENTIFIER_FIXUP_1927 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1932;
                float _RESERVED_IDENTIFIER_FIXUP_1935 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1864 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3117.z = _RESERVED_IDENTIFIER_FIXUP_1935;
                float _RESERVED_IDENTIFIER_FIXUP_1941 = _RESERVED_IDENTIFIER_FIXUP_1932 + _RESERVED_IDENTIFIER_FIXUP_1935;
                _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1941;
                float _RESERVED_IDENTIFIER_FIXUP_1949 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3117.z = _RESERVED_IDENTIFIER_FIXUP_1949;
                float _RESERVED_IDENTIFIER_FIXUP_1955 = clamp((_RESERVED_IDENTIFIER_FIXUP_1949 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3117.z = _RESERVED_IDENTIFIER_FIXUP_1955;
                float _RESERVED_IDENTIFIER_FIXUP_1960 = (_RESERVED_IDENTIFIER_FIXUP_1941 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1960;
                _RESERVED_IDENTIFIER_FIXUP_3117.x = (_RESERVED_IDENTIFIER_FIXUP_1955 * _RESERVED_IDENTIFIER_FIXUP_1960) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3852 = _RESERVED_IDENTIFIER_FIXUP_3117;
            }
            _RESERVED_IDENTIFIER_FIXUP_3851 = _RESERVED_IDENTIFIER_FIXUP_3852;
        }
        _RESERVED_IDENTIFIER_FIXUP_3850 = _RESERVED_IDENTIFIER_FIXUP_3851;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3394 = _RESERVED_IDENTIFIER_FIXUP_3850;
    _RESERVED_IDENTIFIER_FIXUP_3394.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1988 = _RESERVED_IDENTIFIER_FIXUP_1220.xyz * _RESERVED_IDENTIFIER_FIXUP_3394.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3396 = _RESERVED_IDENTIFIER_FIXUP_3394;
    _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_1988.x;
    _RESERVED_IDENTIFIER_FIXUP_3396.z = _RESERVED_IDENTIFIER_FIXUP_1988.y;
    _RESERVED_IDENTIFIER_FIXUP_3396.w = _RESERVED_IDENTIFIER_FIXUP_1988.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1999 = _RESERVED_IDENTIFIER_FIXUP_3396.yzw * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3848).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_3396;
    _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_1999.x;
    _RESERVED_IDENTIFIER_FIXUP_3402.z = _RESERVED_IDENTIFIER_FIXUP_1999.y;
    _RESERVED_IDENTIFIER_FIXUP_3402.w = _RESERVED_IDENTIFIER_FIXUP_1999.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2010 = _RESERVED_IDENTIFIER_FIXUP_3402.yzw + _RESERVED_IDENTIFIER_FIXUP_3402.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2012 = _RESERVED_IDENTIFIER_FIXUP_2010.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3408 = _RESERVED_IDENTIFIER_FIXUP_3402;
    _RESERVED_IDENTIFIER_FIXUP_3408.y = _RESERVED_IDENTIFIER_FIXUP_2012;
    _RESERVED_IDENTIFIER_FIXUP_3408.z = _RESERVED_IDENTIFIER_FIXUP_2010.y;
    _RESERVED_IDENTIFIER_FIXUP_3408.w = _RESERVED_IDENTIFIER_FIXUP_2010.z;
    _RESERVED_IDENTIFIER_FIXUP_1220.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1220.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1220.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2035 = (_RESERVED_IDENTIFIER_FIXUP_1220.xyz * _RESERVED_IDENTIFIER_FIXUP_3408.xxx) + _RESERVED_IDENTIFIER_FIXUP_3408.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3868 = vec4(_RESERVED_IDENTIFIER_FIXUP_2035.x, _RESERVED_IDENTIFIER_FIXUP_2012, _RESERVED_IDENTIFIER_FIXUP_2010.yz);
    _RESERVED_IDENTIFIER_FIXUP_3868.y = _RESERVED_IDENTIFIER_FIXUP_2035.y;
    _RESERVED_IDENTIFIER_FIXUP_3868.z = _RESERVED_IDENTIFIER_FIXUP_2035.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2048 = _RESERVED_IDENTIFIER_FIXUP_3868.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3426 = _RESERVED_IDENTIFIER_FIXUP_3868;
    _RESERVED_IDENTIFIER_FIXUP_3426.x = _RESERVED_IDENTIFIER_FIXUP_2048.x;
    _RESERVED_IDENTIFIER_FIXUP_3426.y = _RESERVED_IDENTIFIER_FIXUP_2048.y;
    _RESERVED_IDENTIFIER_FIXUP_3426.z = _RESERVED_IDENTIFIER_FIXUP_2048.z;
    vec2 param_53 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2107 = hdTex0(param_53);
    vec2 param_54 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2111 = hdTex1(param_54);
    vec2 param_55 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2115 = hdTex2(param_55);
    vec2 param_56 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2119 = hdTex3(param_56);
    vec2 param_57 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2123 = hdTex4(param_57);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2133 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2107, _RESERVED_IDENTIFIER_FIXUP_2111, _RESERVED_IDENTIFIER_FIXUP_2123.xxxx), _RESERVED_IDENTIFIER_FIXUP_2115, _RESERVED_IDENTIFIER_FIXUP_2123.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2138 = mix(_RESERVED_IDENTIFIER_FIXUP_2133, _RESERVED_IDENTIFIER_FIXUP_2119, _RESERVED_IDENTIFIER_FIXUP_2123.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3442 = _RESERVED_IDENTIFIER_FIXUP_2133;
    _RESERVED_IDENTIFIER_FIXUP_3442.x = _RESERVED_IDENTIFIER_FIXUP_1227;
    float _RESERVED_IDENTIFIER_FIXUP_2151 = clamp((_RESERVED_IDENTIFIER_FIXUP_1227 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3442.x = _RESERVED_IDENTIFIER_FIXUP_2151;
    float _RESERVED_IDENTIFIER_FIXUP_2157 = ((-_RESERVED_IDENTIFIER_FIXUP_2151) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3442.x = _RESERVED_IDENTIFIER_FIXUP_2157;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3859;
    if (_RESERVED_IDENTIFIER_FIXUP_2157 != (-_RESERVED_IDENTIFIER_FIXUP_2157))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2169 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
        _RESERVED_IDENTIFIER_FIXUP_3681.x = _RESERVED_IDENTIFIER_FIXUP_2169.x;
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2169.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2179 = _RESERVED_IDENTIFIER_FIXUP_3681.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3685;
        _RESERVED_IDENTIFIER_FIXUP_3685.x = _RESERVED_IDENTIFIER_FIXUP_2179.x;
        _RESERVED_IDENTIFIER_FIXUP_3685.y = _RESERVED_IDENTIFIER_FIXUP_2179.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2189 = _RESERVED_IDENTIFIER_FIXUP_3681.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3689;
        _RESERVED_IDENTIFIER_FIXUP_3689.x = _RESERVED_IDENTIFIER_FIXUP_2189.x;
        _RESERVED_IDENTIFIER_FIXUP_3689.y = _RESERVED_IDENTIFIER_FIXUP_2189.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2199 = _RESERVED_IDENTIFIER_FIXUP_3681.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3693;
        _RESERVED_IDENTIFIER_FIXUP_3693.x = _RESERVED_IDENTIFIER_FIXUP_2199.x;
        _RESERVED_IDENTIFIER_FIXUP_3693.y = _RESERVED_IDENTIFIER_FIXUP_2199.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2209 = _RESERVED_IDENTIFIER_FIXUP_3681.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3697;
        _RESERVED_IDENTIFIER_FIXUP_3697.x = _RESERVED_IDENTIFIER_FIXUP_2209.x;
        _RESERVED_IDENTIFIER_FIXUP_3697.y = _RESERVED_IDENTIFIER_FIXUP_2209.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2219 = _RESERVED_IDENTIFIER_FIXUP_3681.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3701;
        _RESERVED_IDENTIFIER_FIXUP_3701.x = _RESERVED_IDENTIFIER_FIXUP_2219.x;
        _RESERVED_IDENTIFIER_FIXUP_3701.y = _RESERVED_IDENTIFIER_FIXUP_2219.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2229 = _RESERVED_IDENTIFIER_FIXUP_3681.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3705;
        _RESERVED_IDENTIFIER_FIXUP_3705.x = _RESERVED_IDENTIFIER_FIXUP_2229.x;
        _RESERVED_IDENTIFIER_FIXUP_3705.y = _RESERVED_IDENTIFIER_FIXUP_2229.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2239 = _RESERVED_IDENTIFIER_FIXUP_3681.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3709;
        _RESERVED_IDENTIFIER_FIXUP_3709.x = _RESERVED_IDENTIFIER_FIXUP_2239.x;
        _RESERVED_IDENTIFIER_FIXUP_3709.y = _RESERVED_IDENTIFIER_FIXUP_2239.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2249 = _RESERVED_IDENTIFIER_FIXUP_3681.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3713;
        _RESERVED_IDENTIFIER_FIXUP_3713.x = _RESERVED_IDENTIFIER_FIXUP_2249.x;
        _RESERVED_IDENTIFIER_FIXUP_3713.y = _RESERVED_IDENTIFIER_FIXUP_2249.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2257 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2257.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2257.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2263 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3685.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3689.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3693.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3697.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3697.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2303 = hdLod5(param_60, param_61);
        _RESERVED_IDENTIFIER_FIXUP_3701.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3705.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3709.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3713.w = 0.0;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3713.xy;
        float param_63 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2343 = hdLod5(param_62, param_63);
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3685.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2263.y = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3689.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2263.z = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3693.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2263.w = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3701.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2303.y = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3705.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2303.z = hdLod5(param_72, param_73).x;
        vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3709.xy;
        float param_75 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2303.w = hdLod5(param_74, param_75).x;
        float _RESERVED_IDENTIFIER_FIXUP_2383 = _RESERVED_IDENTIFIER_FIXUP_2343.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3778 = _RESERVED_IDENTIFIER_FIXUP_2343;
        _RESERVED_IDENTIFIER_FIXUP_3778.x = _RESERVED_IDENTIFIER_FIXUP_2383;
        float _RESERVED_IDENTIFIER_FIXUP_2388 = float(_RESERVED_IDENTIFIER_FIXUP_2383 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3778.x = _RESERVED_IDENTIFIER_FIXUP_2388;
        float _RESERVED_IDENTIFIER_FIXUP_2391 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2263 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3778.y = _RESERVED_IDENTIFIER_FIXUP_2391;
        float _RESERVED_IDENTIFIER_FIXUP_2394 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2303 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3778.z = _RESERVED_IDENTIFIER_FIXUP_2394;
        float _RESERVED_IDENTIFIER_FIXUP_2400 = _RESERVED_IDENTIFIER_FIXUP_2391 + _RESERVED_IDENTIFIER_FIXUP_2394;
        _RESERVED_IDENTIFIER_FIXUP_3778.y = _RESERVED_IDENTIFIER_FIXUP_2400;
        float _RESERVED_IDENTIFIER_FIXUP_2406 = _RESERVED_IDENTIFIER_FIXUP_2388 + _RESERVED_IDENTIFIER_FIXUP_2400;
        _RESERVED_IDENTIFIER_FIXUP_3778.x = _RESERVED_IDENTIFIER_FIXUP_2406;
        _RESERVED_IDENTIFIER_FIXUP_3778.x = _RESERVED_IDENTIFIER_FIXUP_2406 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3859 = _RESERVED_IDENTIFIER_FIXUP_3778;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2419 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3442.y = _RESERVED_IDENTIFIER_FIXUP_2419;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3860;
        if (_RESERVED_IDENTIFIER_FIXUP_2419 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2428 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3615 = _RESERVED_IDENTIFIER_FIXUP_3442;
            _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_2428.x;
            _RESERVED_IDENTIFIER_FIXUP_3615.z = _RESERVED_IDENTIFIER_FIXUP_2428.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2438 = _RESERVED_IDENTIFIER_FIXUP_3615.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3619;
            _RESERVED_IDENTIFIER_FIXUP_3619.x = _RESERVED_IDENTIFIER_FIXUP_2438.x;
            _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_2438.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2448 = _RESERVED_IDENTIFIER_FIXUP_3615.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3623;
            _RESERVED_IDENTIFIER_FIXUP_3623.x = _RESERVED_IDENTIFIER_FIXUP_2448.x;
            _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_2448.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2458 = _RESERVED_IDENTIFIER_FIXUP_3615.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3627;
            _RESERVED_IDENTIFIER_FIXUP_3627.x = _RESERVED_IDENTIFIER_FIXUP_2458.x;
            _RESERVED_IDENTIFIER_FIXUP_3627.y = _RESERVED_IDENTIFIER_FIXUP_2458.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2468 = _RESERVED_IDENTIFIER_FIXUP_3615.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3631;
            _RESERVED_IDENTIFIER_FIXUP_3631.x = _RESERVED_IDENTIFIER_FIXUP_2468.x;
            _RESERVED_IDENTIFIER_FIXUP_3631.y = _RESERVED_IDENTIFIER_FIXUP_2468.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2476 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2476.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2476.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2482 = hdLod6(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3619.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3623.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3627.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3631.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3619.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2482.y = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3623.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2482.z = hdLod6(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3627.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2482.w = hdLod6(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3631.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2545 = hdLod6(param_84, param_85).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_2545;
            float _RESERVED_IDENTIFIER_FIXUP_2550 = float(_RESERVED_IDENTIFIER_FIXUP_2545 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_2550;
            float _RESERVED_IDENTIFIER_FIXUP_2553 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2482 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3615.z = _RESERVED_IDENTIFIER_FIXUP_2553;
            float _RESERVED_IDENTIFIER_FIXUP_2559 = _RESERVED_IDENTIFIER_FIXUP_2550 + _RESERVED_IDENTIFIER_FIXUP_2553;
            _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_2559;
            _RESERVED_IDENTIFIER_FIXUP_3615.x = _RESERVED_IDENTIFIER_FIXUP_2559 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3860 = _RESERVED_IDENTIFIER_FIXUP_3615;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2572 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3459 = _RESERVED_IDENTIFIER_FIXUP_3442;
            _RESERVED_IDENTIFIER_FIXUP_3459.y = _RESERVED_IDENTIFIER_FIXUP_2572;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3861;
            if (_RESERVED_IDENTIFIER_FIXUP_2572 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2581 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3549 = _RESERVED_IDENTIFIER_FIXUP_3459;
                _RESERVED_IDENTIFIER_FIXUP_3549.y = _RESERVED_IDENTIFIER_FIXUP_2581.x;
                _RESERVED_IDENTIFIER_FIXUP_3549.z = _RESERVED_IDENTIFIER_FIXUP_2581.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2591 = _RESERVED_IDENTIFIER_FIXUP_3549.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3553;
                _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2591.x;
                _RESERVED_IDENTIFIER_FIXUP_3553.y = _RESERVED_IDENTIFIER_FIXUP_2591.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2601 = _RESERVED_IDENTIFIER_FIXUP_3549.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3557;
                _RESERVED_IDENTIFIER_FIXUP_3557.x = _RESERVED_IDENTIFIER_FIXUP_2601.x;
                _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2601.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2611 = _RESERVED_IDENTIFIER_FIXUP_3549.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3561;
                _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2611.x;
                _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_2611.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2621 = _RESERVED_IDENTIFIER_FIXUP_3549.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3565;
                _RESERVED_IDENTIFIER_FIXUP_3565.x = _RESERVED_IDENTIFIER_FIXUP_2621.x;
                _RESERVED_IDENTIFIER_FIXUP_3565.y = _RESERVED_IDENTIFIER_FIXUP_2621.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2629 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_2629.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2629.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2635 = hdLod7(param_86, param_87);
                _RESERVED_IDENTIFIER_FIXUP_3553.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3557.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3561.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3565.w = 0.0;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3553.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2635.y = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3557.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2635.z = hdLod7(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3561.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2635.w = hdLod7(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3565.xy;
                float param_95 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2698 = hdLod7(param_94, param_95).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3549.y = _RESERVED_IDENTIFIER_FIXUP_2698;
                float _RESERVED_IDENTIFIER_FIXUP_2703 = float(_RESERVED_IDENTIFIER_FIXUP_2698 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3549.y = _RESERVED_IDENTIFIER_FIXUP_2703;
                float _RESERVED_IDENTIFIER_FIXUP_2706 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2635 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3549.z = _RESERVED_IDENTIFIER_FIXUP_2706;
                float _RESERVED_IDENTIFIER_FIXUP_2712 = _RESERVED_IDENTIFIER_FIXUP_2703 + _RESERVED_IDENTIFIER_FIXUP_2706;
                _RESERVED_IDENTIFIER_FIXUP_3549.y = _RESERVED_IDENTIFIER_FIXUP_2712;
                _RESERVED_IDENTIFIER_FIXUP_3549.x = _RESERVED_IDENTIFIER_FIXUP_2712 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3861 = _RESERVED_IDENTIFIER_FIXUP_3549;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_2115.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2115.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2728 = (_RESERVED_IDENTIFIER_FIXUP_2115.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3468;
                _RESERVED_IDENTIFIER_FIXUP_3468.x = _RESERVED_IDENTIFIER_FIXUP_2728.x;
                _RESERVED_IDENTIFIER_FIXUP_3468.y = _RESERVED_IDENTIFIER_FIXUP_2728.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2738 = _RESERVED_IDENTIFIER_FIXUP_3468.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3472;
                _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_2738.x;
                _RESERVED_IDENTIFIER_FIXUP_3472.y = _RESERVED_IDENTIFIER_FIXUP_2738.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2748 = _RESERVED_IDENTIFIER_FIXUP_3468.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3476;
                _RESERVED_IDENTIFIER_FIXUP_3476.x = _RESERVED_IDENTIFIER_FIXUP_2748.x;
                _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2748.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2758 = _RESERVED_IDENTIFIER_FIXUP_3468.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3480;
                _RESERVED_IDENTIFIER_FIXUP_3480.x = _RESERVED_IDENTIFIER_FIXUP_2758.x;
                _RESERVED_IDENTIFIER_FIXUP_3480.y = _RESERVED_IDENTIFIER_FIXUP_2758.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2768 = _RESERVED_IDENTIFIER_FIXUP_3468.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3484;
                _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_2768.x;
                _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2768.y;
                _RESERVED_IDENTIFIER_FIXUP_3468.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3468.xy;
                float param_97 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2782 = hdLod8(param_96, param_97);
                _RESERVED_IDENTIFIER_FIXUP_3472.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3476.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3480.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3484.w = 0.0;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3472.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2782.y = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3476.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2782.z = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3480.xy;
                float param_103 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2782.w = hdLod8(param_102, param_103).x;
                vec2 param_104 = _RESERVED_IDENTIFIER_FIXUP_3484.xy;
                float param_105 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2845 = hdLod8(param_104, param_105).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3524 = _RESERVED_IDENTIFIER_FIXUP_3459;
                _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2845;
                float _RESERVED_IDENTIFIER_FIXUP_2850 = float(_RESERVED_IDENTIFIER_FIXUP_2845 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2850;
                float _RESERVED_IDENTIFIER_FIXUP_2853 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2782 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3524.z = _RESERVED_IDENTIFIER_FIXUP_2853;
                float _RESERVED_IDENTIFIER_FIXUP_2859 = _RESERVED_IDENTIFIER_FIXUP_2850 + _RESERVED_IDENTIFIER_FIXUP_2853;
                _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2859;
                float _RESERVED_IDENTIFIER_FIXUP_2867 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3524.z = _RESERVED_IDENTIFIER_FIXUP_2867;
                float _RESERVED_IDENTIFIER_FIXUP_2873 = clamp((_RESERVED_IDENTIFIER_FIXUP_2867 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3524.z = _RESERVED_IDENTIFIER_FIXUP_2873;
                float _RESERVED_IDENTIFIER_FIXUP_2878 = (_RESERVED_IDENTIFIER_FIXUP_2859 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2878;
                _RESERVED_IDENTIFIER_FIXUP_3524.x = (_RESERVED_IDENTIFIER_FIXUP_2873 * _RESERVED_IDENTIFIER_FIXUP_2878) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3861 = _RESERVED_IDENTIFIER_FIXUP_3524;
            }
            _RESERVED_IDENTIFIER_FIXUP_3860 = _RESERVED_IDENTIFIER_FIXUP_3861;
        }
        _RESERVED_IDENTIFIER_FIXUP_3859 = _RESERVED_IDENTIFIER_FIXUP_3860;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2893 = (_RESERVED_IDENTIFIER_FIXUP_3859.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_3859;
    _RESERVED_IDENTIFIER_FIXUP_3799.y = _RESERVED_IDENTIFIER_FIXUP_2893;
    _RESERVED_IDENTIFIER_FIXUP_3799.y = _RESERVED_IDENTIFIER_FIXUP_2893;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2906 = _RESERVED_IDENTIFIER_FIXUP_2138.xyz * _RESERVED_IDENTIFIER_FIXUP_3799.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3805 = _RESERVED_IDENTIFIER_FIXUP_3799;
    _RESERVED_IDENTIFIER_FIXUP_3805.y = _RESERVED_IDENTIFIER_FIXUP_2906.x;
    _RESERVED_IDENTIFIER_FIXUP_3805.z = _RESERVED_IDENTIFIER_FIXUP_2906.y;
    _RESERVED_IDENTIFIER_FIXUP_3805.w = _RESERVED_IDENTIFIER_FIXUP_2906.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2917 = _RESERVED_IDENTIFIER_FIXUP_3805.yzw * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3811 = _RESERVED_IDENTIFIER_FIXUP_3805;
    _RESERVED_IDENTIFIER_FIXUP_3811.y = _RESERVED_IDENTIFIER_FIXUP_2917.x;
    _RESERVED_IDENTIFIER_FIXUP_3811.z = _RESERVED_IDENTIFIER_FIXUP_2917.y;
    _RESERVED_IDENTIFIER_FIXUP_3811.w = _RESERVED_IDENTIFIER_FIXUP_2917.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2928 = _RESERVED_IDENTIFIER_FIXUP_3811.yzw + _RESERVED_IDENTIFIER_FIXUP_3811.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2930 = _RESERVED_IDENTIFIER_FIXUP_2928.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3817 = _RESERVED_IDENTIFIER_FIXUP_3811;
    _RESERVED_IDENTIFIER_FIXUP_3817.y = _RESERVED_IDENTIFIER_FIXUP_2930;
    _RESERVED_IDENTIFIER_FIXUP_3817.z = _RESERVED_IDENTIFIER_FIXUP_2928.y;
    _RESERVED_IDENTIFIER_FIXUP_3817.w = _RESERVED_IDENTIFIER_FIXUP_2928.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2939 = _RESERVED_IDENTIFIER_FIXUP_2138.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3823 = _RESERVED_IDENTIFIER_FIXUP_2138;
    _RESERVED_IDENTIFIER_FIXUP_3823.x = _RESERVED_IDENTIFIER_FIXUP_2939.x;
    _RESERVED_IDENTIFIER_FIXUP_3823.y = _RESERVED_IDENTIFIER_FIXUP_2939.y;
    _RESERVED_IDENTIFIER_FIXUP_3823.z = _RESERVED_IDENTIFIER_FIXUP_2939.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2953 = (_RESERVED_IDENTIFIER_FIXUP_3823.xyz * _RESERVED_IDENTIFIER_FIXUP_3817.xxx) + _RESERVED_IDENTIFIER_FIXUP_3817.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3870 = vec4(_RESERVED_IDENTIFIER_FIXUP_2953.x, _RESERVED_IDENTIFIER_FIXUP_2930, _RESERVED_IDENTIFIER_FIXUP_2928.yz);
    _RESERVED_IDENTIFIER_FIXUP_3870.y = _RESERVED_IDENTIFIER_FIXUP_2953.y;
    _RESERVED_IDENTIFIER_FIXUP_3870.z = _RESERVED_IDENTIFIER_FIXUP_2953.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2966 = _RESERVED_IDENTIFIER_FIXUP_3870.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3835 = _RESERVED_IDENTIFIER_FIXUP_3870;
    _RESERVED_IDENTIFIER_FIXUP_3835.x = _RESERVED_IDENTIFIER_FIXUP_2966.x;
    _RESERVED_IDENTIFIER_FIXUP_3835.y = _RESERVED_IDENTIFIER_FIXUP_2966.y;
    _RESERVED_IDENTIFIER_FIXUP_3835.z = _RESERVED_IDENTIFIER_FIXUP_2966.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3835.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1044 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1053;
    if (_RESERVED_IDENTIFIER_FIXUP_1044)
    {
        _RESERVED_IDENTIFIER_FIXUP_1053 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1053 = _RESERVED_IDENTIFIER_FIXUP_1044;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1053)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1090 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3426.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1117 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3025;
    if (_RESERVED_IDENTIFIER_FIXUP_1090 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3025 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1090), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1117);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3025 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1117);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3025;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2893);
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
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
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
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        vec2 hdB138 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.x = hdB138.x;
        r0.y = hdB138.y;
        vec2 hdB159 = r0.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB159.x;
        r2.y = hdB159.y;
        vec2 hdB170 = r0.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB170.x;
        r3.y = hdB170.y;
        vec2 hdB181 = r0.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB181.x;
        r4.y = hdB181.y;
        vec2 hdB192 = r0.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB192.x;
        r5.y = hdB192.y;
        vec2 hdB203 = r0.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB203.x;
        r6.y = hdB203.y;
        vec2 hdB214 = r0.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB214.x;
        r7.y = hdB214.y;
        vec2 hdB225 = r0.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB225.x;
        r8.y = hdB225.y;
        vec4 hdB230 = r0;
        vec2 hdB236 = hdB230.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r0.x = hdB236.x;
        r0.y = hdB236.y;
        r9 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r9.xy;
        float param_6 = r9.w;
        r9 = hdLod5(param_5, param_6);
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
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_15 = r6.xy;
        float param_16 = r6.w;
        r6 = hdLod5(param_15, param_16);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_17 = r7.xy;
        float param_18 = r7.w;
        r7 = hdLod5(param_17, param_18);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_19 = r8.xy;
        float param_20 = r8.w;
        r8 = hdLod5(param_19, param_20);
        r0.z = 0.0;
        r0.w = 0.0;
        vec2 param_21 = r0.xy;
        float param_22 = r0.w;
        r0 = hdLod5(param_21, param_22);
        r9.y = r2.x;
        r9.z = r3.x;
        r9.w = r4.x;
        r2 = r9 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v5.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r0.x += (-v5.z);
        r0.x = float(r0.x >= 0.0);
        r0.y = dot(r2, vec4(1.0));
        r0.z = dot(r3, vec4(1.0));
        r0.y += r0.z;
        r0.x += r0.y;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v6.x), abs(v6.y));
        if (r0.y < 1.0)
        {
            vec2 hdB424 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB424.x;
            r0.z = hdB424.y;
            vec2 hdB434 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB434.x;
            r2.y = hdB434.y;
            vec2 hdB444 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB444.x;
            r3.y = hdB444.y;
            vec2 hdB454 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB454.x;
            r4.y = hdB454.y;
            vec2 hdB464 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB464.x;
            r5.y = hdB464.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r6.xy;
            float param_24 = r6.w;
            r6 = hdLod6(param_23, param_24);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod6(param_27, param_28);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_29 = r4.xy;
            float param_30 = r4.w;
            r4 = hdLod6(param_29, param_30);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_31 = r5.xy;
            float param_32 = r5.w;
            r5 = hdLod6(param_31, param_32);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r0.y = r5.x + (-v6.z);
            r0.y = float(r0.y >= 0.0);
            r0.z = dot(r2, vec4(1.0));
            r0.y += r0.z;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v7.x), abs(v7.y));
            if (r0.y < 1.0)
            {
                vec2 hdB580 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB580.x;
                r0.z = hdB580.y;
                vec2 hdB590 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB590.x;
                r2.y = hdB590.y;
                vec2 hdB600 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB600.x;
                r3.y = hdB600.y;
                vec2 hdB610 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB610.x;
                r4.y = hdB610.y;
                vec2 hdB620 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB620.x;
                r5.y = hdB620.y;
                r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_33 = r6.xy;
                float param_34 = r6.w;
                r6 = hdLod7(param_33, param_34);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_37 = r3.xy;
                float param_38 = r3.w;
                r3 = hdLod7(param_37, param_38);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_39 = r4.xy;
                float param_40 = r4.w;
                r4 = hdLod7(param_39, param_40);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_41 = r5.xy;
                float param_42 = r5.w;
                r5 = hdLod7(param_41, param_42);
                r6.y = r2.x;
                r6.z = r3.x;
                r6.w = r4.x;
                r2 = r6 + (-v7.zzzz);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r0.y = r5.x + (-v7.z);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r2, vec4(1.0));
                r0.y += r0.z;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v5.w;
                r2.y = v6.w;
                vec2 hdB728 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB728.x;
                r3.y = hdB728.y;
                vec2 hdB738 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB738.x;
                r4.y = hdB738.y;
                vec2 hdB748 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB748.x;
                r5.y = hdB748.y;
                vec2 hdB758 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB758.x;
                r6.y = hdB758.y;
                vec2 hdB768 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB768.x;
                r7.y = hdB768.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_43 = r3.xy;
                float param_44 = r3.w;
                r3 = hdLod8(param_43, param_44);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r4 = hdLod8(param_45, param_46);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_47 = r5.xy;
                float param_48 = r5.w;
                r5 = hdLod8(param_47, param_48);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_49 = r6.xy;
                float param_50 = r6.w;
                r6 = hdLod8(param_49, param_50);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_51 = r7.xy;
                float param_52 = r7.w;
                r7 = hdLod8(param_51, param_52);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v7.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r0.y = r7.x + (-v7.w);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r3, vec4(1.0));
                r0.y += r0.z;
                r0.z = max(abs(r2.x), abs(r2.y));
                r0.z = clamp((r0.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.z * r0.y) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB901 = r0;
    vec3 hdB903 = r1.xyz * hdB901.yyy;
    r0.y = hdB903.x;
    r0.z = hdB903.y;
    r0.w = hdB903.z;
    vec4 hdB910 = r0;
    vec3 hdB914 = hdB910.yzw * v0.xyz;
    r0.y = hdB914.x;
    r0.z = hdB914.y;
    r0.w = hdB914.z;
    vec4 hdB921 = r0;
    vec4 hdB923 = r0;
    vec3 hdB925 = hdB921.yzw + hdB923.yzw;
    r0.y = hdB925.x;
    r0.z = hdB925.y;
    r0.w = hdB925.z;
    vec4 hdB932 = r1;
    vec3 hdB936 = hdB932.www * v1.xyz;
    r1.x = hdB936.x;
    r1.y = hdB936.y;
    r1.z = hdB936.z;
    vec4 hdB945 = r0;
    vec4 hdB948 = r0;
    vec3 hdB950 = (r1.xyz * hdB945.xxx) + hdB948.yzw;
    r0.x = hdB950.x;
    r0.y = hdB950.y;
    r0.z = hdB950.z;
    vec4 hdB957 = r0;
    vec3 hdB964 = hdB957.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB964.x;
    r0.y = hdB964.y;
    r0.z = hdB964.z;
    vec3 hdB979 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB979.x;
    oC0.y = hdB979.y;
    oC0.z = hdB979.z;
    oC0.w = 1.0;
    bool hdB992 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1000;
    if (hdB992)
    {
        hdB1000 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1000 = hdB992;
    }
    if (hdB1000)
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
    bool _3412 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3422;
    if (_3412)
    {
        _3422 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3422 = _3412;
    }
    if (_3422)
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
        bool _3447 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3462;
        if (!_3447)
        {
            _3462 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3462 = _3447;
        }
        if (_3462)
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
