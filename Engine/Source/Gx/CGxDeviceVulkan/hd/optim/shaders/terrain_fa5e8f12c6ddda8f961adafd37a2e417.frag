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
float _RESERVED_IDENTIFIER_FIXUP_3722;
vec4 _RESERVED_IDENTIFIER_FIXUP_3723;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1165 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1169 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1173 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1177 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1191 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1165, _RESERVED_IDENTIFIER_FIXUP_1169, _RESERVED_IDENTIFIER_FIXUP_1181.xxxx), _RESERVED_IDENTIFIER_FIXUP_1173, _RESERVED_IDENTIFIER_FIXUP_1181.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196 = mix(_RESERVED_IDENTIFIER_FIXUP_1191, _RESERVED_IDENTIFIER_FIXUP_1177, _RESERVED_IDENTIFIER_FIXUP_1181.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_1203 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2975 = _RESERVED_IDENTIFIER_FIXUP_1191;
    _RESERVED_IDENTIFIER_FIXUP_2975.x = _RESERVED_IDENTIFIER_FIXUP_1203;
    float _RESERVED_IDENTIFIER_FIXUP_1209 = clamp((_RESERVED_IDENTIFIER_FIXUP_1203 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2975.x = _RESERVED_IDENTIFIER_FIXUP_1209;
    float _RESERVED_IDENTIFIER_FIXUP_1215 = ((-_RESERVED_IDENTIFIER_FIXUP_1209) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2975.x = _RESERVED_IDENTIFIER_FIXUP_1215;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3724;
    if (_RESERVED_IDENTIFIER_FIXUP_1215 != (-_RESERVED_IDENTIFIER_FIXUP_1215))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1227 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1227.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1227.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1233 = hdLod5(param_5, param_6);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1237 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3187 = _RESERVED_IDENTIFIER_FIXUP_1233;
        _RESERVED_IDENTIFIER_FIXUP_3187.y = _RESERVED_IDENTIFIER_FIXUP_1237.x;
        _RESERVED_IDENTIFIER_FIXUP_3187.z = _RESERVED_IDENTIFIER_FIXUP_1237.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1247 = _RESERVED_IDENTIFIER_FIXUP_3187.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3191;
        _RESERVED_IDENTIFIER_FIXUP_3191.x = _RESERVED_IDENTIFIER_FIXUP_1247.x;
        _RESERVED_IDENTIFIER_FIXUP_3191.y = _RESERVED_IDENTIFIER_FIXUP_1247.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1254 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_1254.y;
        _RESERVED_IDENTIFIER_FIXUP_3191.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3191.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1269 = _RESERVED_IDENTIFIER_FIXUP_1233.x + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1269;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1276 = _RESERVED_IDENTIFIER_FIXUP_3187.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3204;
        _RESERVED_IDENTIFIER_FIXUP_3204.x = _RESERVED_IDENTIFIER_FIXUP_1276.x;
        _RESERVED_IDENTIFIER_FIXUP_3204.y = _RESERVED_IDENTIFIER_FIXUP_1276.y;
        _RESERVED_IDENTIFIER_FIXUP_3204.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3204.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1298 = _RESERVED_IDENTIFIER_FIXUP_1269 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1298;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_3187.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3217;
        _RESERVED_IDENTIFIER_FIXUP_3217.x = _RESERVED_IDENTIFIER_FIXUP_1305.x;
        _RESERVED_IDENTIFIER_FIXUP_3217.y = _RESERVED_IDENTIFIER_FIXUP_1305.y;
        _RESERVED_IDENTIFIER_FIXUP_3217.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3217.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_1298 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1327;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_3187.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3230;
        _RESERVED_IDENTIFIER_FIXUP_3230.x = _RESERVED_IDENTIFIER_FIXUP_1334.x;
        _RESERVED_IDENTIFIER_FIXUP_3230.y = _RESERVED_IDENTIFIER_FIXUP_1334.y;
        _RESERVED_IDENTIFIER_FIXUP_3230.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3230.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1356 = _RESERVED_IDENTIFIER_FIXUP_1327 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1356;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1363 = _RESERVED_IDENTIFIER_FIXUP_3187.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3243;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1363.x;
        _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_1363.y;
        _RESERVED_IDENTIFIER_FIXUP_3243.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3243.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1385 = _RESERVED_IDENTIFIER_FIXUP_1356 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1385;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1392 = _RESERVED_IDENTIFIER_FIXUP_3187.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3256;
        _RESERVED_IDENTIFIER_FIXUP_3256.x = _RESERVED_IDENTIFIER_FIXUP_1392.x;
        _RESERVED_IDENTIFIER_FIXUP_3256.y = _RESERVED_IDENTIFIER_FIXUP_1392.y;
        _RESERVED_IDENTIFIER_FIXUP_3256.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3256.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1414 = _RESERVED_IDENTIFIER_FIXUP_1385 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1414;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1421 = _RESERVED_IDENTIFIER_FIXUP_3187.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3269;
        _RESERVED_IDENTIFIER_FIXUP_3269.x = _RESERVED_IDENTIFIER_FIXUP_1421.x;
        _RESERVED_IDENTIFIER_FIXUP_3269.y = _RESERVED_IDENTIFIER_FIXUP_1421.y;
        _RESERVED_IDENTIFIER_FIXUP_3269.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3269.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1443 = _RESERVED_IDENTIFIER_FIXUP_1414 + hdLod5(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1443;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1450 = _RESERVED_IDENTIFIER_FIXUP_3187.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3282;
        _RESERVED_IDENTIFIER_FIXUP_3282.x = _RESERVED_IDENTIFIER_FIXUP_1450.x;
        _RESERVED_IDENTIFIER_FIXUP_3282.y = _RESERVED_IDENTIFIER_FIXUP_1450.y;
        _RESERVED_IDENTIFIER_FIXUP_3282.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3282.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1472 = _RESERVED_IDENTIFIER_FIXUP_1443 + hdLod5(param_21, param_22).x;
        _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1472;
        _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1472 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3724 = _RESERVED_IDENTIFIER_FIXUP_3187;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1485 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2975.y = _RESERVED_IDENTIFIER_FIXUP_1485;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3725;
        if (_RESERVED_IDENTIFIER_FIXUP_1485 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1494 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1504 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_1504.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3127 = _RESERVED_IDENTIFIER_FIXUP_2975;
            _RESERVED_IDENTIFIER_FIXUP_3127.y = _RESERVED_IDENTIFIER_FIXUP_1506;
            _RESERVED_IDENTIFIER_FIXUP_3127.z = _RESERVED_IDENTIFIER_FIXUP_1504.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_3127.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3131;
            _RESERVED_IDENTIFIER_FIXUP_3131.x = _RESERVED_IDENTIFIER_FIXUP_1514.x;
            _RESERVED_IDENTIFIER_FIXUP_3131.y = _RESERVED_IDENTIFIER_FIXUP_1514.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1521 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_1521.y;
            _RESERVED_IDENTIFIER_FIXUP_3131.w = _RESERVED_IDENTIFIER_FIXUP_1525;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1494.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1494.w;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3131.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1525;
            float _RESERVED_IDENTIFIER_FIXUP_1536 = hdLod6(param_23, param_24).x + hdLod6(param_25, param_26).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3747 = vec4(_RESERVED_IDENTIFIER_FIXUP_1215, _RESERVED_IDENTIFIER_FIXUP_1506, _RESERVED_IDENTIFIER_FIXUP_1504.y, _RESERVED_IDENTIFIER_FIXUP_1536);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_3747.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3144;
            _RESERVED_IDENTIFIER_FIXUP_3144.x = _RESERVED_IDENTIFIER_FIXUP_1543.x;
            _RESERVED_IDENTIFIER_FIXUP_3144.y = _RESERVED_IDENTIFIER_FIXUP_1543.y;
            _RESERVED_IDENTIFIER_FIXUP_3144.w = _RESERVED_IDENTIFIER_FIXUP_1525;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3144.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1525;
            float _RESERVED_IDENTIFIER_FIXUP_1565 = _RESERVED_IDENTIFIER_FIXUP_1536 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_3747.w = _RESERVED_IDENTIFIER_FIXUP_1565;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1572 = _RESERVED_IDENTIFIER_FIXUP_3747.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3157;
            _RESERVED_IDENTIFIER_FIXUP_3157.x = _RESERVED_IDENTIFIER_FIXUP_1572.x;
            _RESERVED_IDENTIFIER_FIXUP_3157.y = _RESERVED_IDENTIFIER_FIXUP_1572.y;
            _RESERVED_IDENTIFIER_FIXUP_3157.w = _RESERVED_IDENTIFIER_FIXUP_1525;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3157.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1525;
            float _RESERVED_IDENTIFIER_FIXUP_1594 = _RESERVED_IDENTIFIER_FIXUP_1565 + hdLod6(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_3747.w = _RESERVED_IDENTIFIER_FIXUP_1594;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_3747.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3170;
            _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_1601.x;
            _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1601.y;
            _RESERVED_IDENTIFIER_FIXUP_3170.w = _RESERVED_IDENTIFIER_FIXUP_1525;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3170.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1525;
            float _RESERVED_IDENTIFIER_FIXUP_1623 = _RESERVED_IDENTIFIER_FIXUP_1594 + hdLod6(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_3747.y = _RESERVED_IDENTIFIER_FIXUP_1623;
            _RESERVED_IDENTIFIER_FIXUP_3747.x = _RESERVED_IDENTIFIER_FIXUP_1623 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3725 = _RESERVED_IDENTIFIER_FIXUP_3747;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1636 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2992 = _RESERVED_IDENTIFIER_FIXUP_2975;
            _RESERVED_IDENTIFIER_FIXUP_2992.y = _RESERVED_IDENTIFIER_FIXUP_1636;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3726;
            if (_RESERVED_IDENTIFIER_FIXUP_1636 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1645 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1655 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1657 = _RESERVED_IDENTIFIER_FIXUP_1655.x;
                _RESERVED_IDENTIFIER_FIXUP_2992.y = _RESERVED_IDENTIFIER_FIXUP_1657;
                _RESERVED_IDENTIFIER_FIXUP_2992.z = _RESERVED_IDENTIFIER_FIXUP_1655.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1665 = _RESERVED_IDENTIFIER_FIXUP_2992.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3071;
                _RESERVED_IDENTIFIER_FIXUP_3071.x = _RESERVED_IDENTIFIER_FIXUP_1665.x;
                _RESERVED_IDENTIFIER_FIXUP_3071.y = _RESERVED_IDENTIFIER_FIXUP_1665.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1672 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1676 = _RESERVED_IDENTIFIER_FIXUP_1672.y;
                _RESERVED_IDENTIFIER_FIXUP_3071.w = _RESERVED_IDENTIFIER_FIXUP_1676;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1645.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1645.w;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3071.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1676;
                float _RESERVED_IDENTIFIER_FIXUP_1687 = hdLod7(param_33, param_34).x + hdLod7(param_35, param_36).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3746 = vec4(_RESERVED_IDENTIFIER_FIXUP_1215, _RESERVED_IDENTIFIER_FIXUP_1657, _RESERVED_IDENTIFIER_FIXUP_1655.y, _RESERVED_IDENTIFIER_FIXUP_1687);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_3746.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3084;
                _RESERVED_IDENTIFIER_FIXUP_3084.x = _RESERVED_IDENTIFIER_FIXUP_1694.x;
                _RESERVED_IDENTIFIER_FIXUP_3084.y = _RESERVED_IDENTIFIER_FIXUP_1694.y;
                _RESERVED_IDENTIFIER_FIXUP_3084.w = _RESERVED_IDENTIFIER_FIXUP_1676;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3084.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1676;
                float _RESERVED_IDENTIFIER_FIXUP_1716 = _RESERVED_IDENTIFIER_FIXUP_1687 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_3746.w = _RESERVED_IDENTIFIER_FIXUP_1716;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1723 = _RESERVED_IDENTIFIER_FIXUP_3746.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3097;
                _RESERVED_IDENTIFIER_FIXUP_3097.x = _RESERVED_IDENTIFIER_FIXUP_1723.x;
                _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1723.y;
                _RESERVED_IDENTIFIER_FIXUP_3097.w = _RESERVED_IDENTIFIER_FIXUP_1676;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3097.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1676;
                float _RESERVED_IDENTIFIER_FIXUP_1745 = _RESERVED_IDENTIFIER_FIXUP_1716 + hdLod7(param_39, param_40).x;
                _RESERVED_IDENTIFIER_FIXUP_3746.w = _RESERVED_IDENTIFIER_FIXUP_1745;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1752 = _RESERVED_IDENTIFIER_FIXUP_3746.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3110;
                _RESERVED_IDENTIFIER_FIXUP_3110.x = _RESERVED_IDENTIFIER_FIXUP_1752.x;
                _RESERVED_IDENTIFIER_FIXUP_3110.y = _RESERVED_IDENTIFIER_FIXUP_1752.y;
                _RESERVED_IDENTIFIER_FIXUP_3110.w = _RESERVED_IDENTIFIER_FIXUP_1676;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3110.xy;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1676;
                float _RESERVED_IDENTIFIER_FIXUP_1774 = _RESERVED_IDENTIFIER_FIXUP_1745 + hdLod7(param_41, param_42).x;
                _RESERVED_IDENTIFIER_FIXUP_3746.y = _RESERVED_IDENTIFIER_FIXUP_1774;
                _RESERVED_IDENTIFIER_FIXUP_3746.x = _RESERVED_IDENTIFIER_FIXUP_1774 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3726 = _RESERVED_IDENTIFIER_FIXUP_3746;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1790 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1794 = _RESERVED_IDENTIFIER_FIXUP_1790.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1805 = vec4(_RESERVED_IDENTIFIER_FIXUP_1790.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1794).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3743 = vec4(_RESERVED_IDENTIFIER_FIXUP_1805 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1794);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1842 = _RESERVED_IDENTIFIER_FIXUP_1805 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3025 = _RESERVED_IDENTIFIER_FIXUP_3743;
                _RESERVED_IDENTIFIER_FIXUP_3025.x = _RESERVED_IDENTIFIER_FIXUP_1842.x;
                _RESERVED_IDENTIFIER_FIXUP_3025.y = _RESERVED_IDENTIFIER_FIXUP_1842.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1864 = _RESERVED_IDENTIFIER_FIXUP_1805 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3034 = _RESERVED_IDENTIFIER_FIXUP_3025;
                _RESERVED_IDENTIFIER_FIXUP_3034.x = _RESERVED_IDENTIFIER_FIXUP_1864.x;
                _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1864.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1886 = _RESERVED_IDENTIFIER_FIXUP_1805 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3043 = _RESERVED_IDENTIFIER_FIXUP_3034;
                _RESERVED_IDENTIFIER_FIXUP_3043.x = _RESERVED_IDENTIFIER_FIXUP_1886.x;
                _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1886.y;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_1805;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1794;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3743.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1794;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3025.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1794;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3034.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_1794;
                vec2 param_51 = _RESERVED_IDENTIFIER_FIXUP_3043.xy;
                float param_52 = _RESERVED_IDENTIFIER_FIXUP_1794;
                float _RESERVED_IDENTIFIER_FIXUP_1901 = (((hdLod8(param_43, param_44).x + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x) + hdLod8(param_51, param_52).x;
                float _RESERVED_IDENTIFIER_FIXUP_1915 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1920 = (_RESERVED_IDENTIFIER_FIXUP_1901 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3726 = vec4((_RESERVED_IDENTIFIER_FIXUP_1915 * _RESERVED_IDENTIFIER_FIXUP_1920) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1915, _RESERVED_IDENTIFIER_FIXUP_1920, _RESERVED_IDENTIFIER_FIXUP_1901);
            }
            _RESERVED_IDENTIFIER_FIXUP_3725 = _RESERVED_IDENTIFIER_FIXUP_3726;
        }
        _RESERVED_IDENTIFIER_FIXUP_3724 = _RESERVED_IDENTIFIER_FIXUP_3725;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3301 = _RESERVED_IDENTIFIER_FIXUP_3724;
    _RESERVED_IDENTIFIER_FIXUP_3301.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1948 = _RESERVED_IDENTIFIER_FIXUP_1196.xyz * _RESERVED_IDENTIFIER_FIXUP_3301.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3303 = _RESERVED_IDENTIFIER_FIXUP_3301;
    _RESERVED_IDENTIFIER_FIXUP_3303.y = _RESERVED_IDENTIFIER_FIXUP_1948.x;
    _RESERVED_IDENTIFIER_FIXUP_3303.z = _RESERVED_IDENTIFIER_FIXUP_1948.y;
    _RESERVED_IDENTIFIER_FIXUP_3303.w = _RESERVED_IDENTIFIER_FIXUP_1948.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1959 = _RESERVED_IDENTIFIER_FIXUP_3303.yzw * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3722).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3309 = _RESERVED_IDENTIFIER_FIXUP_3303;
    _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_1959.x;
    _RESERVED_IDENTIFIER_FIXUP_3309.z = _RESERVED_IDENTIFIER_FIXUP_1959.y;
    _RESERVED_IDENTIFIER_FIXUP_3309.w = _RESERVED_IDENTIFIER_FIXUP_1959.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1970 = _RESERVED_IDENTIFIER_FIXUP_3309.yzw + _RESERVED_IDENTIFIER_FIXUP_3309.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1972 = _RESERVED_IDENTIFIER_FIXUP_1970.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3315 = _RESERVED_IDENTIFIER_FIXUP_3309;
    _RESERVED_IDENTIFIER_FIXUP_3315.y = _RESERVED_IDENTIFIER_FIXUP_1972;
    _RESERVED_IDENTIFIER_FIXUP_3315.z = _RESERVED_IDENTIFIER_FIXUP_1970.y;
    _RESERVED_IDENTIFIER_FIXUP_3315.w = _RESERVED_IDENTIFIER_FIXUP_1970.z;
    _RESERVED_IDENTIFIER_FIXUP_1196.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1196.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1196.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1995 = (_RESERVED_IDENTIFIER_FIXUP_1196.xyz * _RESERVED_IDENTIFIER_FIXUP_3315.xxx) + _RESERVED_IDENTIFIER_FIXUP_3315.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3748 = vec4(_RESERVED_IDENTIFIER_FIXUP_1995.x, _RESERVED_IDENTIFIER_FIXUP_1972, _RESERVED_IDENTIFIER_FIXUP_1970.yz);
    _RESERVED_IDENTIFIER_FIXUP_3748.y = _RESERVED_IDENTIFIER_FIXUP_1995.y;
    _RESERVED_IDENTIFIER_FIXUP_3748.z = _RESERVED_IDENTIFIER_FIXUP_1995.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2008 = _RESERVED_IDENTIFIER_FIXUP_3748.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3333 = _RESERVED_IDENTIFIER_FIXUP_3748;
    _RESERVED_IDENTIFIER_FIXUP_3333.x = _RESERVED_IDENTIFIER_FIXUP_2008.x;
    _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_2008.y;
    _RESERVED_IDENTIFIER_FIXUP_3333.z = _RESERVED_IDENTIFIER_FIXUP_2008.z;
    vec2 param_53 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2063 = hdTex0(param_53);
    vec2 param_54 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2067 = hdTex1(param_54);
    vec2 param_55 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2071 = hdTex2(param_55);
    vec2 param_56 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2075 = hdTex3(param_56);
    vec2 param_57 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2079 = hdTex4(param_57);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2089 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2063, _RESERVED_IDENTIFIER_FIXUP_2067, _RESERVED_IDENTIFIER_FIXUP_2079.xxxx), _RESERVED_IDENTIFIER_FIXUP_2071, _RESERVED_IDENTIFIER_FIXUP_2079.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2094 = mix(_RESERVED_IDENTIFIER_FIXUP_2089, _RESERVED_IDENTIFIER_FIXUP_2075, _RESERVED_IDENTIFIER_FIXUP_2079.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3349 = _RESERVED_IDENTIFIER_FIXUP_2089;
    _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_1203;
    float _RESERVED_IDENTIFIER_FIXUP_2107 = clamp((_RESERVED_IDENTIFIER_FIXUP_1203 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_2107;
    float _RESERVED_IDENTIFIER_FIXUP_2113 = ((-_RESERVED_IDENTIFIER_FIXUP_2107) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_2113;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3733;
    if (_RESERVED_IDENTIFIER_FIXUP_2113 != (-_RESERVED_IDENTIFIER_FIXUP_2113))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2125 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2125.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2125.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2131 = hdLod5(param_58, param_59);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2135 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3561 = _RESERVED_IDENTIFIER_FIXUP_2131;
        _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_2135.x;
        _RESERVED_IDENTIFIER_FIXUP_3561.z = _RESERVED_IDENTIFIER_FIXUP_2135.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2145 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3565;
        _RESERVED_IDENTIFIER_FIXUP_3565.x = _RESERVED_IDENTIFIER_FIXUP_2145.x;
        _RESERVED_IDENTIFIER_FIXUP_3565.y = _RESERVED_IDENTIFIER_FIXUP_2145.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2152 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2156 = _RESERVED_IDENTIFIER_FIXUP_2152.y;
        _RESERVED_IDENTIFIER_FIXUP_3565.w = _RESERVED_IDENTIFIER_FIXUP_2156;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3565.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2156;
        float _RESERVED_IDENTIFIER_FIXUP_2167 = _RESERVED_IDENTIFIER_FIXUP_2131.x + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2167;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2174 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3578;
        _RESERVED_IDENTIFIER_FIXUP_3578.x = _RESERVED_IDENTIFIER_FIXUP_2174.x;
        _RESERVED_IDENTIFIER_FIXUP_3578.y = _RESERVED_IDENTIFIER_FIXUP_2174.y;
        _RESERVED_IDENTIFIER_FIXUP_3578.w = _RESERVED_IDENTIFIER_FIXUP_2156;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3578.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2156;
        float _RESERVED_IDENTIFIER_FIXUP_2196 = _RESERVED_IDENTIFIER_FIXUP_2167 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2196;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2203 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3591;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2203.x;
        _RESERVED_IDENTIFIER_FIXUP_3591.y = _RESERVED_IDENTIFIER_FIXUP_2203.y;
        _RESERVED_IDENTIFIER_FIXUP_3591.w = _RESERVED_IDENTIFIER_FIXUP_2156;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3591.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2156;
        float _RESERVED_IDENTIFIER_FIXUP_2225 = _RESERVED_IDENTIFIER_FIXUP_2196 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2225;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2232 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3604;
        _RESERVED_IDENTIFIER_FIXUP_3604.x = _RESERVED_IDENTIFIER_FIXUP_2232.x;
        _RESERVED_IDENTIFIER_FIXUP_3604.y = _RESERVED_IDENTIFIER_FIXUP_2232.y;
        _RESERVED_IDENTIFIER_FIXUP_3604.w = _RESERVED_IDENTIFIER_FIXUP_2156;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3604.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2156;
        float _RESERVED_IDENTIFIER_FIXUP_2254 = _RESERVED_IDENTIFIER_FIXUP_2225 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2254;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2261 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3617;
        _RESERVED_IDENTIFIER_FIXUP_3617.x = _RESERVED_IDENTIFIER_FIXUP_2261.x;
        _RESERVED_IDENTIFIER_FIXUP_3617.y = _RESERVED_IDENTIFIER_FIXUP_2261.y;
        _RESERVED_IDENTIFIER_FIXUP_3617.w = _RESERVED_IDENTIFIER_FIXUP_2156;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3617.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2156;
        float _RESERVED_IDENTIFIER_FIXUP_2283 = _RESERVED_IDENTIFIER_FIXUP_2254 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2283;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2290 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3630;
        _RESERVED_IDENTIFIER_FIXUP_3630.x = _RESERVED_IDENTIFIER_FIXUP_2290.x;
        _RESERVED_IDENTIFIER_FIXUP_3630.y = _RESERVED_IDENTIFIER_FIXUP_2290.y;
        _RESERVED_IDENTIFIER_FIXUP_3630.w = _RESERVED_IDENTIFIER_FIXUP_2156;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3630.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2156;
        float _RESERVED_IDENTIFIER_FIXUP_2312 = _RESERVED_IDENTIFIER_FIXUP_2283 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2312;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2319 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3643;
        _RESERVED_IDENTIFIER_FIXUP_3643.x = _RESERVED_IDENTIFIER_FIXUP_2319.x;
        _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_2319.y;
        _RESERVED_IDENTIFIER_FIXUP_3643.w = _RESERVED_IDENTIFIER_FIXUP_2156;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3643.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2156;
        float _RESERVED_IDENTIFIER_FIXUP_2341 = _RESERVED_IDENTIFIER_FIXUP_2312 + hdLod5(param_72, param_73).x;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2341;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2348 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3656;
        _RESERVED_IDENTIFIER_FIXUP_3656.x = _RESERVED_IDENTIFIER_FIXUP_2348.x;
        _RESERVED_IDENTIFIER_FIXUP_3656.y = _RESERVED_IDENTIFIER_FIXUP_2348.y;
        _RESERVED_IDENTIFIER_FIXUP_3656.w = _RESERVED_IDENTIFIER_FIXUP_2156;
        vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3656.xy;
        float param_75 = _RESERVED_IDENTIFIER_FIXUP_2156;
        float _RESERVED_IDENTIFIER_FIXUP_2370 = _RESERVED_IDENTIFIER_FIXUP_2341 + hdLod5(param_74, param_75).x;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2370;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2370 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3733 = _RESERVED_IDENTIFIER_FIXUP_3561;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2383 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3349.y = _RESERVED_IDENTIFIER_FIXUP_2383;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3734;
        if (_RESERVED_IDENTIFIER_FIXUP_2383 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2392 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2402 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2404 = _RESERVED_IDENTIFIER_FIXUP_2402.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3501 = _RESERVED_IDENTIFIER_FIXUP_3349;
            _RESERVED_IDENTIFIER_FIXUP_3501.y = _RESERVED_IDENTIFIER_FIXUP_2404;
            _RESERVED_IDENTIFIER_FIXUP_3501.z = _RESERVED_IDENTIFIER_FIXUP_2402.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2412 = _RESERVED_IDENTIFIER_FIXUP_3501.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3505;
            _RESERVED_IDENTIFIER_FIXUP_3505.x = _RESERVED_IDENTIFIER_FIXUP_2412.x;
            _RESERVED_IDENTIFIER_FIXUP_3505.y = _RESERVED_IDENTIFIER_FIXUP_2412.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2419 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2423 = _RESERVED_IDENTIFIER_FIXUP_2419.y;
            _RESERVED_IDENTIFIER_FIXUP_3505.w = _RESERVED_IDENTIFIER_FIXUP_2423;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2392.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2392.w;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3505.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2423;
            float _RESERVED_IDENTIFIER_FIXUP_2434 = hdLod6(param_76, param_77).x + hdLod6(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3755 = vec4(_RESERVED_IDENTIFIER_FIXUP_2113, _RESERVED_IDENTIFIER_FIXUP_2404, _RESERVED_IDENTIFIER_FIXUP_2402.y, _RESERVED_IDENTIFIER_FIXUP_2434);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2441 = _RESERVED_IDENTIFIER_FIXUP_3755.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3518;
            _RESERVED_IDENTIFIER_FIXUP_3518.x = _RESERVED_IDENTIFIER_FIXUP_2441.x;
            _RESERVED_IDENTIFIER_FIXUP_3518.y = _RESERVED_IDENTIFIER_FIXUP_2441.y;
            _RESERVED_IDENTIFIER_FIXUP_3518.w = _RESERVED_IDENTIFIER_FIXUP_2423;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3518.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2423;
            float _RESERVED_IDENTIFIER_FIXUP_2463 = _RESERVED_IDENTIFIER_FIXUP_2434 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3755.w = _RESERVED_IDENTIFIER_FIXUP_2463;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2470 = _RESERVED_IDENTIFIER_FIXUP_3755.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3531;
            _RESERVED_IDENTIFIER_FIXUP_3531.x = _RESERVED_IDENTIFIER_FIXUP_2470.x;
            _RESERVED_IDENTIFIER_FIXUP_3531.y = _RESERVED_IDENTIFIER_FIXUP_2470.y;
            _RESERVED_IDENTIFIER_FIXUP_3531.w = _RESERVED_IDENTIFIER_FIXUP_2423;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3531.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2423;
            float _RESERVED_IDENTIFIER_FIXUP_2492 = _RESERVED_IDENTIFIER_FIXUP_2463 + hdLod6(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3755.w = _RESERVED_IDENTIFIER_FIXUP_2492;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2499 = _RESERVED_IDENTIFIER_FIXUP_3755.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3544;
            _RESERVED_IDENTIFIER_FIXUP_3544.x = _RESERVED_IDENTIFIER_FIXUP_2499.x;
            _RESERVED_IDENTIFIER_FIXUP_3544.y = _RESERVED_IDENTIFIER_FIXUP_2499.y;
            _RESERVED_IDENTIFIER_FIXUP_3544.w = _RESERVED_IDENTIFIER_FIXUP_2423;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3544.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2423;
            float _RESERVED_IDENTIFIER_FIXUP_2521 = _RESERVED_IDENTIFIER_FIXUP_2492 + hdLod6(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3755.y = _RESERVED_IDENTIFIER_FIXUP_2521;
            _RESERVED_IDENTIFIER_FIXUP_3755.x = _RESERVED_IDENTIFIER_FIXUP_2521 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3734 = _RESERVED_IDENTIFIER_FIXUP_3755;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2534 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3366 = _RESERVED_IDENTIFIER_FIXUP_3349;
            _RESERVED_IDENTIFIER_FIXUP_3366.y = _RESERVED_IDENTIFIER_FIXUP_2534;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3735;
            if (_RESERVED_IDENTIFIER_FIXUP_2534 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2543 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2553 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2555 = _RESERVED_IDENTIFIER_FIXUP_2553.x;
                _RESERVED_IDENTIFIER_FIXUP_3366.y = _RESERVED_IDENTIFIER_FIXUP_2555;
                _RESERVED_IDENTIFIER_FIXUP_3366.z = _RESERVED_IDENTIFIER_FIXUP_2553.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2563 = _RESERVED_IDENTIFIER_FIXUP_3366.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3445;
                _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_2563.x;
                _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2563.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2570 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2574 = _RESERVED_IDENTIFIER_FIXUP_2570.y;
                _RESERVED_IDENTIFIER_FIXUP_3445.w = _RESERVED_IDENTIFIER_FIXUP_2574;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_2543.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2543.w;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3445.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2574;
                float _RESERVED_IDENTIFIER_FIXUP_2585 = hdLod7(param_86, param_87).x + hdLod7(param_88, param_89).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3754 = vec4(_RESERVED_IDENTIFIER_FIXUP_2113, _RESERVED_IDENTIFIER_FIXUP_2555, _RESERVED_IDENTIFIER_FIXUP_2553.y, _RESERVED_IDENTIFIER_FIXUP_2585);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2592 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3458;
                _RESERVED_IDENTIFIER_FIXUP_3458.x = _RESERVED_IDENTIFIER_FIXUP_2592.x;
                _RESERVED_IDENTIFIER_FIXUP_3458.y = _RESERVED_IDENTIFIER_FIXUP_2592.y;
                _RESERVED_IDENTIFIER_FIXUP_3458.w = _RESERVED_IDENTIFIER_FIXUP_2574;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3458.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2574;
                float _RESERVED_IDENTIFIER_FIXUP_2614 = _RESERVED_IDENTIFIER_FIXUP_2585 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_3754.w = _RESERVED_IDENTIFIER_FIXUP_2614;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2621 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3471;
                _RESERVED_IDENTIFIER_FIXUP_3471.x = _RESERVED_IDENTIFIER_FIXUP_2621.x;
                _RESERVED_IDENTIFIER_FIXUP_3471.y = _RESERVED_IDENTIFIER_FIXUP_2621.y;
                _RESERVED_IDENTIFIER_FIXUP_3471.w = _RESERVED_IDENTIFIER_FIXUP_2574;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3471.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2574;
                float _RESERVED_IDENTIFIER_FIXUP_2643 = _RESERVED_IDENTIFIER_FIXUP_2614 + hdLod7(param_92, param_93).x;
                _RESERVED_IDENTIFIER_FIXUP_3754.w = _RESERVED_IDENTIFIER_FIXUP_2643;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2650 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3484;
                _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_2650.x;
                _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2650.y;
                _RESERVED_IDENTIFIER_FIXUP_3484.w = _RESERVED_IDENTIFIER_FIXUP_2574;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3484.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2574;
                float _RESERVED_IDENTIFIER_FIXUP_2672 = _RESERVED_IDENTIFIER_FIXUP_2643 + hdLod7(param_94, param_95).x;
                _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2672;
                _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2672 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3735 = _RESERVED_IDENTIFIER_FIXUP_3754;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2688 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2692 = _RESERVED_IDENTIFIER_FIXUP_2688.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2703 = vec4(_RESERVED_IDENTIFIER_FIXUP_2688.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2692).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3751 = vec4(_RESERVED_IDENTIFIER_FIXUP_2703 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2692);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2740 = _RESERVED_IDENTIFIER_FIXUP_2703 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_3751;
                _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_2740.x;
                _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2740.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2762 = _RESERVED_IDENTIFIER_FIXUP_2703 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3408 = _RESERVED_IDENTIFIER_FIXUP_3399;
                _RESERVED_IDENTIFIER_FIXUP_3408.x = _RESERVED_IDENTIFIER_FIXUP_2762.x;
                _RESERVED_IDENTIFIER_FIXUP_3408.y = _RESERVED_IDENTIFIER_FIXUP_2762.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2784 = _RESERVED_IDENTIFIER_FIXUP_2703 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3417 = _RESERVED_IDENTIFIER_FIXUP_3408;
                _RESERVED_IDENTIFIER_FIXUP_3417.x = _RESERVED_IDENTIFIER_FIXUP_2784.x;
                _RESERVED_IDENTIFIER_FIXUP_3417.y = _RESERVED_IDENTIFIER_FIXUP_2784.y;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_2703;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2692;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3751.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2692;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3399.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2692;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3408.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_2692;
                vec2 param_104 = _RESERVED_IDENTIFIER_FIXUP_3417.xy;
                float param_105 = _RESERVED_IDENTIFIER_FIXUP_2692;
                float _RESERVED_IDENTIFIER_FIXUP_2799 = (((hdLod8(param_96, param_97).x + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x) + hdLod8(param_104, param_105).x;
                float _RESERVED_IDENTIFIER_FIXUP_2813 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2818 = (_RESERVED_IDENTIFIER_FIXUP_2799 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3735 = vec4((_RESERVED_IDENTIFIER_FIXUP_2813 * _RESERVED_IDENTIFIER_FIXUP_2818) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2813, _RESERVED_IDENTIFIER_FIXUP_2818, _RESERVED_IDENTIFIER_FIXUP_2799);
            }
            _RESERVED_IDENTIFIER_FIXUP_3734 = _RESERVED_IDENTIFIER_FIXUP_3735;
        }
        _RESERVED_IDENTIFIER_FIXUP_3733 = _RESERVED_IDENTIFIER_FIXUP_3734;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2833 = (_RESERVED_IDENTIFIER_FIXUP_3733.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3673 = _RESERVED_IDENTIFIER_FIXUP_3733;
    _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_2833;
    _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_2833;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2846 = _RESERVED_IDENTIFIER_FIXUP_2094.xyz * _RESERVED_IDENTIFIER_FIXUP_3673.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3679 = _RESERVED_IDENTIFIER_FIXUP_3673;
    _RESERVED_IDENTIFIER_FIXUP_3679.y = _RESERVED_IDENTIFIER_FIXUP_2846.x;
    _RESERVED_IDENTIFIER_FIXUP_3679.z = _RESERVED_IDENTIFIER_FIXUP_2846.y;
    _RESERVED_IDENTIFIER_FIXUP_3679.w = _RESERVED_IDENTIFIER_FIXUP_2846.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2857 = _RESERVED_IDENTIFIER_FIXUP_3679.yzw * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3685 = _RESERVED_IDENTIFIER_FIXUP_3679;
    _RESERVED_IDENTIFIER_FIXUP_3685.y = _RESERVED_IDENTIFIER_FIXUP_2857.x;
    _RESERVED_IDENTIFIER_FIXUP_3685.z = _RESERVED_IDENTIFIER_FIXUP_2857.y;
    _RESERVED_IDENTIFIER_FIXUP_3685.w = _RESERVED_IDENTIFIER_FIXUP_2857.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2868 = _RESERVED_IDENTIFIER_FIXUP_3685.yzw + _RESERVED_IDENTIFIER_FIXUP_3685.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2870 = _RESERVED_IDENTIFIER_FIXUP_2868.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3691 = _RESERVED_IDENTIFIER_FIXUP_3685;
    _RESERVED_IDENTIFIER_FIXUP_3691.y = _RESERVED_IDENTIFIER_FIXUP_2870;
    _RESERVED_IDENTIFIER_FIXUP_3691.z = _RESERVED_IDENTIFIER_FIXUP_2868.y;
    _RESERVED_IDENTIFIER_FIXUP_3691.w = _RESERVED_IDENTIFIER_FIXUP_2868.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2879 = _RESERVED_IDENTIFIER_FIXUP_2094.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3697 = _RESERVED_IDENTIFIER_FIXUP_2094;
    _RESERVED_IDENTIFIER_FIXUP_3697.x = _RESERVED_IDENTIFIER_FIXUP_2879.x;
    _RESERVED_IDENTIFIER_FIXUP_3697.y = _RESERVED_IDENTIFIER_FIXUP_2879.y;
    _RESERVED_IDENTIFIER_FIXUP_3697.z = _RESERVED_IDENTIFIER_FIXUP_2879.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2893 = (_RESERVED_IDENTIFIER_FIXUP_3697.xyz * _RESERVED_IDENTIFIER_FIXUP_3691.xxx) + _RESERVED_IDENTIFIER_FIXUP_3691.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3756 = vec4(_RESERVED_IDENTIFIER_FIXUP_2893.x, _RESERVED_IDENTIFIER_FIXUP_2870, _RESERVED_IDENTIFIER_FIXUP_2868.yz);
    _RESERVED_IDENTIFIER_FIXUP_3756.y = _RESERVED_IDENTIFIER_FIXUP_2893.y;
    _RESERVED_IDENTIFIER_FIXUP_3756.z = _RESERVED_IDENTIFIER_FIXUP_2893.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2906 = _RESERVED_IDENTIFIER_FIXUP_3756.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3709 = _RESERVED_IDENTIFIER_FIXUP_3756;
    _RESERVED_IDENTIFIER_FIXUP_3709.x = _RESERVED_IDENTIFIER_FIXUP_2906.x;
    _RESERVED_IDENTIFIER_FIXUP_3709.y = _RESERVED_IDENTIFIER_FIXUP_2906.y;
    _RESERVED_IDENTIFIER_FIXUP_3709.z = _RESERVED_IDENTIFIER_FIXUP_2906.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3709.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1024 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1033;
    if (_RESERVED_IDENTIFIER_FIXUP_1024)
    {
        _RESERVED_IDENTIFIER_FIXUP_1033 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1033 = _RESERVED_IDENTIFIER_FIXUP_1024;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1033)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1070 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3333.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1097 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2965;
    if (_RESERVED_IDENTIFIER_FIXUP_1070 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2965 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1070), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1097);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2965 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1097);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2965;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2833);
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
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r0.xy;
        float param_6 = r0.w;
        r0 = hdLod5(param_5, param_6);
        vec2 hdB148 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB148.x;
        r0.z = hdB148.y;
        vec2 hdB170 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB170.x;
        r2.y = hdB170.y;
        vec2 hdB178 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB178.x;
        r2.w = hdB178.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r0.x += r2.x;
        vec2 hdB201 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB201.x;
        r2.y = hdB201.y;
        vec2 hdB208 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB208.x;
        r2.w = hdB208.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r0.x += r2.x;
        vec2 hdB231 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB231.x;
        r2.y = hdB231.y;
        vec2 hdB238 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB238.x;
        r2.w = hdB238.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r0.x += r2.x;
        vec2 hdB261 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB261.x;
        r2.y = hdB261.y;
        vec2 hdB268 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB268.x;
        r2.w = hdB268.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r0.x += r2.x;
        vec2 hdB291 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB291.x;
        r2.y = hdB291.y;
        vec2 hdB298 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB298.x;
        r2.w = hdB298.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r0.x += r2.x;
        vec2 hdB321 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB321.x;
        r2.y = hdB321.y;
        vec2 hdB328 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB328.x;
        r2.w = hdB328.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r0.x += r2.x;
        vec2 hdB351 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB351.x;
        r2.y = hdB351.y;
        vec2 hdB358 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB358.x;
        r2.w = hdB358.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod5(param_19, param_20);
        r0.x += r2.x;
        vec2 hdB381 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB381.x;
        r2.y = hdB381.y;
        vec2 hdB388 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB388.x;
        r2.w = hdB388.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod5(param_21, param_22);
        r0.x += r2.x;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v6.x), abs(v6.y));
        if (r0.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            vec2 hdB438 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB438.x;
            r0.z = hdB438.y;
            vec2 hdB448 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB448.x;
            r3.y = hdB448.y;
            vec2 hdB455 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB455.x;
            r3.w = hdB455.y;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod6(param_25, param_26);
            r0.w = r2.x + r3.x;
            vec2 hdB477 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB477.x;
            r2.y = hdB477.y;
            vec2 hdB484 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB484.x;
            r2.w = hdB484.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r0.w += r2.x;
            vec2 hdB506 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB506.x;
            r2.y = hdB506.y;
            vec2 hdB513 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB513.x;
            r2.w = hdB513.y;
            vec2 param_29 = r2.xy;
            float param_30 = r2.w;
            r2 = hdLod6(param_29, param_30);
            r0.w += r2.x;
            vec2 hdB535 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB535.x;
            r2.y = hdB535.y;
            vec2 hdB542 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB542.x;
            r2.w = hdB542.y;
            vec2 param_31 = r2.xy;
            float param_32 = r2.w;
            r2 = hdLod6(param_31, param_32);
            r0.y = r0.w + r2.x;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v7.x), abs(v7.y));
            if (r0.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                vec2 hdB592 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB592.x;
                r0.z = hdB592.y;
                vec2 hdB602 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB602.x;
                r3.y = hdB602.y;
                vec2 hdB609 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB609.x;
                r3.w = hdB609.y;
                vec2 param_35 = r3.xy;
                float param_36 = r3.w;
                r3 = hdLod7(param_35, param_36);
                r0.w = r2.x + r3.x;
                vec2 hdB631 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB631.x;
                r2.y = hdB631.y;
                vec2 hdB638 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB638.x;
                r2.w = hdB638.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r0.w += r2.x;
                vec2 hdB660 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB660.x;
                r2.y = hdB660.y;
                vec2 hdB667 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB667.x;
                r2.w = hdB667.y;
                vec2 param_39 = r2.xy;
                float param_40 = r2.w;
                r2 = hdLod7(param_39, param_40);
                r0.w += r2.x;
                vec2 hdB689 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB689.x;
                r2.y = hdB689.y;
                vec2 hdB696 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB696.x;
                r2.w = hdB696.y;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r2 = hdLod7(param_41, param_42);
                r0.y = r0.w + r2.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v5.w;
                r0.z = v6.w;
                vec2 hdB728 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB728.x;
                r2.w = hdB728.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_43 = r2.xy;
                float param_44 = r2.w;
                r3 = hdLod8(param_43, param_44);
                vec2 hdB753 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB753.x;
                r4.y = hdB753.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r5 = hdLod8(param_45, param_46);
                r0.w = r3.x + r5.x;
                vec2 hdB781 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB781.x;
                r4.y = hdB781.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r3 = hdLod8(param_47, param_48);
                r0.w += r3.x;
                vec2 hdB803 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB803.x;
                r4.y = hdB803.y;
                vec2 param_49 = r4.xy;
                float param_50 = r4.w;
                r3 = hdLod8(param_49, param_50);
                r0.w += r3.x;
                vec2 hdB825 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB825.x;
                r4.y = hdB825.y;
                vec2 param_51 = r4.xy;
                float param_52 = r4.w;
                r2 = hdLod8(param_51, param_52);
                r0.w += r2.x;
                r2.x = max(abs(r0.y), abs(r0.z));
                r0.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.z = (r0.w * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.y * r0.z) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB881 = r0;
    vec3 hdB883 = r1.xyz * hdB881.yyy;
    r0.y = hdB883.x;
    r0.z = hdB883.y;
    r0.w = hdB883.z;
    vec4 hdB890 = r0;
    vec3 hdB894 = hdB890.yzw * v0.xyz;
    r0.y = hdB894.x;
    r0.z = hdB894.y;
    r0.w = hdB894.z;
    vec4 hdB901 = r0;
    vec4 hdB903 = r0;
    vec3 hdB905 = hdB901.yzw + hdB903.yzw;
    r0.y = hdB905.x;
    r0.z = hdB905.y;
    r0.w = hdB905.z;
    vec4 hdB912 = r1;
    vec3 hdB916 = hdB912.www * v1.xyz;
    r1.x = hdB916.x;
    r1.y = hdB916.y;
    r1.z = hdB916.z;
    vec4 hdB925 = r0;
    vec4 hdB928 = r0;
    vec3 hdB930 = (r1.xyz * hdB925.xxx) + hdB928.yzw;
    r0.x = hdB930.x;
    r0.y = hdB930.y;
    r0.z = hdB930.z;
    vec4 hdB937 = r0;
    vec3 hdB944 = hdB937.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB944.x;
    r0.y = hdB944.y;
    r0.z = hdB944.z;
    vec3 hdB959 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB959.x;
    oC0.y = hdB959.y;
    oC0.z = hdB959.z;
    oC0.w = 1.0;
    bool hdB972 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB980;
    if (hdB972)
    {
        hdB980 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB980 = hdB972;
    }
    if (hdB980)
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
    bool _3469 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3479;
    if (_3469)
    {
        _3479 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3479 = _3469;
    }
    if (_3479)
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
        bool _3504 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3519;
        if (!_3504)
        {
            _3519 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3519 = _3504;
        }
        if (_3519)
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
