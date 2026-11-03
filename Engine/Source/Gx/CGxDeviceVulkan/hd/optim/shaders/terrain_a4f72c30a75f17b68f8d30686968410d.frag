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
float _RESERVED_IDENTIFIER_FIXUP_3783;
vec4 _RESERVED_IDENTIFIER_FIXUP_3784;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1183 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1187 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1191 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1195 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1199 = hdTex4(param_4);
    float _RESERVED_IDENTIFIER_FIXUP_1203 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1199.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3024 = _RESERVED_IDENTIFIER_FIXUP_1199;
    _RESERVED_IDENTIFIER_FIXUP_3024.w = _RESERVED_IDENTIFIER_FIXUP_1203;
    float _RESERVED_IDENTIFIER_FIXUP_1208 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1203;
    _RESERVED_IDENTIFIER_FIXUP_3024.w = _RESERVED_IDENTIFIER_FIXUP_1208;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1213 = _RESERVED_IDENTIFIER_FIXUP_1187 * _RESERVED_IDENTIFIER_FIXUP_3024.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1231 = (_RESERVED_IDENTIFIER_FIXUP_1195 * _RESERVED_IDENTIFIER_FIXUP_3024.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1191 * _RESERVED_IDENTIFIER_FIXUP_3024.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1183 * _RESERVED_IDENTIFIER_FIXUP_3024.wwww) + _RESERVED_IDENTIFIER_FIXUP_1213));
    float _RESERVED_IDENTIFIER_FIXUP_1238 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3031 = _RESERVED_IDENTIFIER_FIXUP_1213;
    _RESERVED_IDENTIFIER_FIXUP_3031.x = _RESERVED_IDENTIFIER_FIXUP_1238;
    float _RESERVED_IDENTIFIER_FIXUP_1244 = clamp((_RESERVED_IDENTIFIER_FIXUP_1238 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3031.x = _RESERVED_IDENTIFIER_FIXUP_1244;
    float _RESERVED_IDENTIFIER_FIXUP_1250 = ((-_RESERVED_IDENTIFIER_FIXUP_1244) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3031.x = _RESERVED_IDENTIFIER_FIXUP_1250;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3785;
    if (_RESERVED_IDENTIFIER_FIXUP_1250 != (-_RESERVED_IDENTIFIER_FIXUP_1250))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1262 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1262.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1262.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1268 = hdLod5(param_5, param_6);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1272 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3243 = _RESERVED_IDENTIFIER_FIXUP_1268;
        _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_1272.x;
        _RESERVED_IDENTIFIER_FIXUP_3243.z = _RESERVED_IDENTIFIER_FIXUP_1272.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1282 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3247;
        _RESERVED_IDENTIFIER_FIXUP_3247.x = _RESERVED_IDENTIFIER_FIXUP_1282.x;
        _RESERVED_IDENTIFIER_FIXUP_3247.y = _RESERVED_IDENTIFIER_FIXUP_1282.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1289 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1293 = _RESERVED_IDENTIFIER_FIXUP_1289.y;
        _RESERVED_IDENTIFIER_FIXUP_3247.w = _RESERVED_IDENTIFIER_FIXUP_1293;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3247.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1293;
        float _RESERVED_IDENTIFIER_FIXUP_1304 = _RESERVED_IDENTIFIER_FIXUP_1268.x + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1304;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1311 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3260;
        _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_1311.x;
        _RESERVED_IDENTIFIER_FIXUP_3260.y = _RESERVED_IDENTIFIER_FIXUP_1311.y;
        _RESERVED_IDENTIFIER_FIXUP_3260.w = _RESERVED_IDENTIFIER_FIXUP_1293;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3260.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1293;
        float _RESERVED_IDENTIFIER_FIXUP_1333 = _RESERVED_IDENTIFIER_FIXUP_1304 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1333;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1340 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3273;
        _RESERVED_IDENTIFIER_FIXUP_3273.x = _RESERVED_IDENTIFIER_FIXUP_1340.x;
        _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1340.y;
        _RESERVED_IDENTIFIER_FIXUP_3273.w = _RESERVED_IDENTIFIER_FIXUP_1293;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3273.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1293;
        float _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_1333 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1362;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1369 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3286;
        _RESERVED_IDENTIFIER_FIXUP_3286.x = _RESERVED_IDENTIFIER_FIXUP_1369.x;
        _RESERVED_IDENTIFIER_FIXUP_3286.y = _RESERVED_IDENTIFIER_FIXUP_1369.y;
        _RESERVED_IDENTIFIER_FIXUP_3286.w = _RESERVED_IDENTIFIER_FIXUP_1293;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3286.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1293;
        float _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_1362 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1391;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1398 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3299;
        _RESERVED_IDENTIFIER_FIXUP_3299.x = _RESERVED_IDENTIFIER_FIXUP_1398.x;
        _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_1398.y;
        _RESERVED_IDENTIFIER_FIXUP_3299.w = _RESERVED_IDENTIFIER_FIXUP_1293;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3299.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1293;
        float _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_1391 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1420;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1427 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3312;
        _RESERVED_IDENTIFIER_FIXUP_3312.x = _RESERVED_IDENTIFIER_FIXUP_1427.x;
        _RESERVED_IDENTIFIER_FIXUP_3312.y = _RESERVED_IDENTIFIER_FIXUP_1427.y;
        _RESERVED_IDENTIFIER_FIXUP_3312.w = _RESERVED_IDENTIFIER_FIXUP_1293;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3312.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1293;
        float _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_1420 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1449;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1456 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3325;
        _RESERVED_IDENTIFIER_FIXUP_3325.x = _RESERVED_IDENTIFIER_FIXUP_1456.x;
        _RESERVED_IDENTIFIER_FIXUP_3325.y = _RESERVED_IDENTIFIER_FIXUP_1456.y;
        _RESERVED_IDENTIFIER_FIXUP_3325.w = _RESERVED_IDENTIFIER_FIXUP_1293;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3325.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1293;
        float _RESERVED_IDENTIFIER_FIXUP_1478 = _RESERVED_IDENTIFIER_FIXUP_1449 + hdLod5(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1478;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1485 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3338;
        _RESERVED_IDENTIFIER_FIXUP_3338.x = _RESERVED_IDENTIFIER_FIXUP_1485.x;
        _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_1485.y;
        _RESERVED_IDENTIFIER_FIXUP_3338.w = _RESERVED_IDENTIFIER_FIXUP_1293;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3338.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1293;
        float _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_1478 + hdLod5(param_21, param_22).x;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1507;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1507 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3785 = _RESERVED_IDENTIFIER_FIXUP_3243;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1520 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3031.y = _RESERVED_IDENTIFIER_FIXUP_1520;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3786;
        if (_RESERVED_IDENTIFIER_FIXUP_1520 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1529 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1539 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1541 = _RESERVED_IDENTIFIER_FIXUP_1539.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3183 = _RESERVED_IDENTIFIER_FIXUP_3031;
            _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1541;
            _RESERVED_IDENTIFIER_FIXUP_3183.z = _RESERVED_IDENTIFIER_FIXUP_1539.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_3183.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3187;
            _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1549.x;
            _RESERVED_IDENTIFIER_FIXUP_3187.y = _RESERVED_IDENTIFIER_FIXUP_1549.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1556 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_1556.y;
            _RESERVED_IDENTIFIER_FIXUP_3187.w = _RESERVED_IDENTIFIER_FIXUP_1560;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1529.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1529.w;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3187.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1560;
            float _RESERVED_IDENTIFIER_FIXUP_1571 = hdLod6(param_23, param_24).x + hdLod6(param_25, param_26).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3808 = vec4(_RESERVED_IDENTIFIER_FIXUP_1250, _RESERVED_IDENTIFIER_FIXUP_1541, _RESERVED_IDENTIFIER_FIXUP_1539.y, _RESERVED_IDENTIFIER_FIXUP_1571);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_3808.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3200;
            _RESERVED_IDENTIFIER_FIXUP_3200.x = _RESERVED_IDENTIFIER_FIXUP_1578.x;
            _RESERVED_IDENTIFIER_FIXUP_3200.y = _RESERVED_IDENTIFIER_FIXUP_1578.y;
            _RESERVED_IDENTIFIER_FIXUP_3200.w = _RESERVED_IDENTIFIER_FIXUP_1560;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3200.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1560;
            float _RESERVED_IDENTIFIER_FIXUP_1600 = _RESERVED_IDENTIFIER_FIXUP_1571 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_3808.w = _RESERVED_IDENTIFIER_FIXUP_1600;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_3808.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3213;
            _RESERVED_IDENTIFIER_FIXUP_3213.x = _RESERVED_IDENTIFIER_FIXUP_1607.x;
            _RESERVED_IDENTIFIER_FIXUP_3213.y = _RESERVED_IDENTIFIER_FIXUP_1607.y;
            _RESERVED_IDENTIFIER_FIXUP_3213.w = _RESERVED_IDENTIFIER_FIXUP_1560;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3213.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1560;
            float _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_1600 + hdLod6(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_3808.w = _RESERVED_IDENTIFIER_FIXUP_1629;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1636 = _RESERVED_IDENTIFIER_FIXUP_3808.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3226;
            _RESERVED_IDENTIFIER_FIXUP_3226.x = _RESERVED_IDENTIFIER_FIXUP_1636.x;
            _RESERVED_IDENTIFIER_FIXUP_3226.y = _RESERVED_IDENTIFIER_FIXUP_1636.y;
            _RESERVED_IDENTIFIER_FIXUP_3226.w = _RESERVED_IDENTIFIER_FIXUP_1560;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3226.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1560;
            float _RESERVED_IDENTIFIER_FIXUP_1658 = _RESERVED_IDENTIFIER_FIXUP_1629 + hdLod6(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_1658;
            _RESERVED_IDENTIFIER_FIXUP_3808.x = _RESERVED_IDENTIFIER_FIXUP_1658 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3786 = _RESERVED_IDENTIFIER_FIXUP_3808;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1671 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3048 = _RESERVED_IDENTIFIER_FIXUP_3031;
            _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_1671;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3787;
            if (_RESERVED_IDENTIFIER_FIXUP_1671 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1680 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1690 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1692 = _RESERVED_IDENTIFIER_FIXUP_1690.x;
                _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_1692;
                _RESERVED_IDENTIFIER_FIXUP_3048.z = _RESERVED_IDENTIFIER_FIXUP_1690.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1700 = _RESERVED_IDENTIFIER_FIXUP_3048.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3127;
                _RESERVED_IDENTIFIER_FIXUP_3127.x = _RESERVED_IDENTIFIER_FIXUP_1700.x;
                _RESERVED_IDENTIFIER_FIXUP_3127.y = _RESERVED_IDENTIFIER_FIXUP_1700.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1707 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_1707.y;
                _RESERVED_IDENTIFIER_FIXUP_3127.w = _RESERVED_IDENTIFIER_FIXUP_1711;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1680.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1680.w;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3127.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1711;
                float _RESERVED_IDENTIFIER_FIXUP_1722 = hdLod7(param_33, param_34).x + hdLod7(param_35, param_36).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3807 = vec4(_RESERVED_IDENTIFIER_FIXUP_1250, _RESERVED_IDENTIFIER_FIXUP_1692, _RESERVED_IDENTIFIER_FIXUP_1690.y, _RESERVED_IDENTIFIER_FIXUP_1722);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1729 = _RESERVED_IDENTIFIER_FIXUP_3807.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3140;
                _RESERVED_IDENTIFIER_FIXUP_3140.x = _RESERVED_IDENTIFIER_FIXUP_1729.x;
                _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_1729.y;
                _RESERVED_IDENTIFIER_FIXUP_3140.w = _RESERVED_IDENTIFIER_FIXUP_1711;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3140.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1711;
                float _RESERVED_IDENTIFIER_FIXUP_1751 = _RESERVED_IDENTIFIER_FIXUP_1722 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_3807.w = _RESERVED_IDENTIFIER_FIXUP_1751;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1758 = _RESERVED_IDENTIFIER_FIXUP_3807.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3153;
                _RESERVED_IDENTIFIER_FIXUP_3153.x = _RESERVED_IDENTIFIER_FIXUP_1758.x;
                _RESERVED_IDENTIFIER_FIXUP_3153.y = _RESERVED_IDENTIFIER_FIXUP_1758.y;
                _RESERVED_IDENTIFIER_FIXUP_3153.w = _RESERVED_IDENTIFIER_FIXUP_1711;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3153.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1711;
                float _RESERVED_IDENTIFIER_FIXUP_1780 = _RESERVED_IDENTIFIER_FIXUP_1751 + hdLod7(param_39, param_40).x;
                _RESERVED_IDENTIFIER_FIXUP_3807.w = _RESERVED_IDENTIFIER_FIXUP_1780;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1787 = _RESERVED_IDENTIFIER_FIXUP_3807.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3166;
                _RESERVED_IDENTIFIER_FIXUP_3166.x = _RESERVED_IDENTIFIER_FIXUP_1787.x;
                _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_1787.y;
                _RESERVED_IDENTIFIER_FIXUP_3166.w = _RESERVED_IDENTIFIER_FIXUP_1711;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3166.xy;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1711;
                float _RESERVED_IDENTIFIER_FIXUP_1809 = _RESERVED_IDENTIFIER_FIXUP_1780 + hdLod7(param_41, param_42).x;
                _RESERVED_IDENTIFIER_FIXUP_3807.y = _RESERVED_IDENTIFIER_FIXUP_1809;
                _RESERVED_IDENTIFIER_FIXUP_3807.x = _RESERVED_IDENTIFIER_FIXUP_1809 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3787 = _RESERVED_IDENTIFIER_FIXUP_3807;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1825 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1829 = _RESERVED_IDENTIFIER_FIXUP_1825.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1840 = vec4(_RESERVED_IDENTIFIER_FIXUP_1825.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1829).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3804 = vec4(_RESERVED_IDENTIFIER_FIXUP_1840 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1208);
                _RESERVED_IDENTIFIER_FIXUP_3804.w = _RESERVED_IDENTIFIER_FIXUP_1829;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1877 = _RESERVED_IDENTIFIER_FIXUP_1840 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3081 = _RESERVED_IDENTIFIER_FIXUP_3804;
                _RESERVED_IDENTIFIER_FIXUP_3081.x = _RESERVED_IDENTIFIER_FIXUP_1877.x;
                _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1877.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1899 = _RESERVED_IDENTIFIER_FIXUP_1840 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3090 = _RESERVED_IDENTIFIER_FIXUP_3081;
                _RESERVED_IDENTIFIER_FIXUP_3090.x = _RESERVED_IDENTIFIER_FIXUP_1899.x;
                _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1899.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1921 = _RESERVED_IDENTIFIER_FIXUP_1840 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3099 = _RESERVED_IDENTIFIER_FIXUP_3090;
                _RESERVED_IDENTIFIER_FIXUP_3099.x = _RESERVED_IDENTIFIER_FIXUP_1921.x;
                _RESERVED_IDENTIFIER_FIXUP_3099.y = _RESERVED_IDENTIFIER_FIXUP_1921.y;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_1840;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1829;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3804.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1829;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3081.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1829;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3090.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_1829;
                vec2 param_51 = _RESERVED_IDENTIFIER_FIXUP_3099.xy;
                float param_52 = _RESERVED_IDENTIFIER_FIXUP_1829;
                float _RESERVED_IDENTIFIER_FIXUP_1936 = (((hdLod8(param_43, param_44).x + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x) + hdLod8(param_51, param_52).x;
                float _RESERVED_IDENTIFIER_FIXUP_1950 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1955 = (_RESERVED_IDENTIFIER_FIXUP_1936 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3787 = vec4((_RESERVED_IDENTIFIER_FIXUP_1950 * _RESERVED_IDENTIFIER_FIXUP_1955) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1950, _RESERVED_IDENTIFIER_FIXUP_1955, _RESERVED_IDENTIFIER_FIXUP_1936);
            }
            _RESERVED_IDENTIFIER_FIXUP_3786 = _RESERVED_IDENTIFIER_FIXUP_3787;
        }
        _RESERVED_IDENTIFIER_FIXUP_3785 = _RESERVED_IDENTIFIER_FIXUP_3786;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3357 = _RESERVED_IDENTIFIER_FIXUP_3785;
    _RESERVED_IDENTIFIER_FIXUP_3357.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1983 = _RESERVED_IDENTIFIER_FIXUP_1231.xyz * _RESERVED_IDENTIFIER_FIXUP_3357.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3359 = _RESERVED_IDENTIFIER_FIXUP_1231;
    _RESERVED_IDENTIFIER_FIXUP_3359.x = _RESERVED_IDENTIFIER_FIXUP_1983.x;
    _RESERVED_IDENTIFIER_FIXUP_3359.y = _RESERVED_IDENTIFIER_FIXUP_1983.y;
    _RESERVED_IDENTIFIER_FIXUP_3359.z = _RESERVED_IDENTIFIER_FIXUP_1983.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1994 = _RESERVED_IDENTIFIER_FIXUP_3359.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3783).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3365 = _RESERVED_IDENTIFIER_FIXUP_3359;
    _RESERVED_IDENTIFIER_FIXUP_3365.x = _RESERVED_IDENTIFIER_FIXUP_1994.x;
    _RESERVED_IDENTIFIER_FIXUP_3365.y = _RESERVED_IDENTIFIER_FIXUP_1994.y;
    _RESERVED_IDENTIFIER_FIXUP_3365.z = _RESERVED_IDENTIFIER_FIXUP_1994.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2005 = _RESERVED_IDENTIFIER_FIXUP_3365.xyz + _RESERVED_IDENTIFIER_FIXUP_3365.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_3365;
    _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_2005.x;
    _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_2005.y;
    _RESERVED_IDENTIFIER_FIXUP_3371.z = _RESERVED_IDENTIFIER_FIXUP_2005.z;
    _RESERVED_IDENTIFIER_FIXUP_3357.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3357.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3357.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2030 = (_RESERVED_IDENTIFIER_FIXUP_3357.yzw * _RESERVED_IDENTIFIER_FIXUP_3357.xxx) + _RESERVED_IDENTIFIER_FIXUP_3371.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3383 = _RESERVED_IDENTIFIER_FIXUP_3371;
    _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_2030.x;
    _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_2030.y;
    _RESERVED_IDENTIFIER_FIXUP_3383.z = _RESERVED_IDENTIFIER_FIXUP_2030.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2043 = _RESERVED_IDENTIFIER_FIXUP_3383.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3389 = _RESERVED_IDENTIFIER_FIXUP_3383;
    _RESERVED_IDENTIFIER_FIXUP_3389.x = _RESERVED_IDENTIFIER_FIXUP_2043.x;
    _RESERVED_IDENTIFIER_FIXUP_3389.y = _RESERVED_IDENTIFIER_FIXUP_2043.y;
    _RESERVED_IDENTIFIER_FIXUP_3389.z = _RESERVED_IDENTIFIER_FIXUP_2043.z;
    vec2 param_53 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2098 = hdTex0(param_53);
    vec2 param_54 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2102 = hdTex1(param_54);
    vec2 param_55 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2106 = hdTex2(param_55);
    vec2 param_56 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2110 = hdTex3(param_56);
    vec2 param_57 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2114 = hdTex4(param_57);
    float _RESERVED_IDENTIFIER_FIXUP_2118 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2114.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3403 = _RESERVED_IDENTIFIER_FIXUP_2114;
    _RESERVED_IDENTIFIER_FIXUP_3403.w = _RESERVED_IDENTIFIER_FIXUP_2118;
    float _RESERVED_IDENTIFIER_FIXUP_2123 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2118;
    _RESERVED_IDENTIFIER_FIXUP_3403.w = _RESERVED_IDENTIFIER_FIXUP_2123;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2128 = _RESERVED_IDENTIFIER_FIXUP_2102 * _RESERVED_IDENTIFIER_FIXUP_3403.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2146 = (_RESERVED_IDENTIFIER_FIXUP_2110 * _RESERVED_IDENTIFIER_FIXUP_3403.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_2106 * _RESERVED_IDENTIFIER_FIXUP_3403.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2098 * _RESERVED_IDENTIFIER_FIXUP_3403.wwww) + _RESERVED_IDENTIFIER_FIXUP_2128));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3410 = _RESERVED_IDENTIFIER_FIXUP_2128;
    _RESERVED_IDENTIFIER_FIXUP_3410.x = _RESERVED_IDENTIFIER_FIXUP_1238;
    float _RESERVED_IDENTIFIER_FIXUP_2159 = clamp((_RESERVED_IDENTIFIER_FIXUP_1238 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3410.x = _RESERVED_IDENTIFIER_FIXUP_2159;
    float _RESERVED_IDENTIFIER_FIXUP_2165 = ((-_RESERVED_IDENTIFIER_FIXUP_2159) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3410.x = _RESERVED_IDENTIFIER_FIXUP_2165;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3794;
    if (_RESERVED_IDENTIFIER_FIXUP_2165 != (-_RESERVED_IDENTIFIER_FIXUP_2165))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2177 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2177.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2177.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2183 = hdLod5(param_58, param_59);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2187 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3622 = _RESERVED_IDENTIFIER_FIXUP_2183;
        _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2187.x;
        _RESERVED_IDENTIFIER_FIXUP_3622.z = _RESERVED_IDENTIFIER_FIXUP_2187.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2197 = _RESERVED_IDENTIFIER_FIXUP_3622.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3626;
        _RESERVED_IDENTIFIER_FIXUP_3626.x = _RESERVED_IDENTIFIER_FIXUP_2197.x;
        _RESERVED_IDENTIFIER_FIXUP_3626.y = _RESERVED_IDENTIFIER_FIXUP_2197.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2204 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2208 = _RESERVED_IDENTIFIER_FIXUP_2204.y;
        _RESERVED_IDENTIFIER_FIXUP_3626.w = _RESERVED_IDENTIFIER_FIXUP_2208;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3626.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2208;
        float _RESERVED_IDENTIFIER_FIXUP_2219 = _RESERVED_IDENTIFIER_FIXUP_2183.x + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2219;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2226 = _RESERVED_IDENTIFIER_FIXUP_3622.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3639;
        _RESERVED_IDENTIFIER_FIXUP_3639.x = _RESERVED_IDENTIFIER_FIXUP_2226.x;
        _RESERVED_IDENTIFIER_FIXUP_3639.y = _RESERVED_IDENTIFIER_FIXUP_2226.y;
        _RESERVED_IDENTIFIER_FIXUP_3639.w = _RESERVED_IDENTIFIER_FIXUP_2208;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3639.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2208;
        float _RESERVED_IDENTIFIER_FIXUP_2248 = _RESERVED_IDENTIFIER_FIXUP_2219 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2248;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2255 = _RESERVED_IDENTIFIER_FIXUP_3622.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3652;
        _RESERVED_IDENTIFIER_FIXUP_3652.x = _RESERVED_IDENTIFIER_FIXUP_2255.x;
        _RESERVED_IDENTIFIER_FIXUP_3652.y = _RESERVED_IDENTIFIER_FIXUP_2255.y;
        _RESERVED_IDENTIFIER_FIXUP_3652.w = _RESERVED_IDENTIFIER_FIXUP_2208;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3652.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2208;
        float _RESERVED_IDENTIFIER_FIXUP_2277 = _RESERVED_IDENTIFIER_FIXUP_2248 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2277;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2284 = _RESERVED_IDENTIFIER_FIXUP_3622.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3665;
        _RESERVED_IDENTIFIER_FIXUP_3665.x = _RESERVED_IDENTIFIER_FIXUP_2284.x;
        _RESERVED_IDENTIFIER_FIXUP_3665.y = _RESERVED_IDENTIFIER_FIXUP_2284.y;
        _RESERVED_IDENTIFIER_FIXUP_3665.w = _RESERVED_IDENTIFIER_FIXUP_2208;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3665.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2208;
        float _RESERVED_IDENTIFIER_FIXUP_2306 = _RESERVED_IDENTIFIER_FIXUP_2277 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2306;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2313 = _RESERVED_IDENTIFIER_FIXUP_3622.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3678;
        _RESERVED_IDENTIFIER_FIXUP_3678.x = _RESERVED_IDENTIFIER_FIXUP_2313.x;
        _RESERVED_IDENTIFIER_FIXUP_3678.y = _RESERVED_IDENTIFIER_FIXUP_2313.y;
        _RESERVED_IDENTIFIER_FIXUP_3678.w = _RESERVED_IDENTIFIER_FIXUP_2208;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3678.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2208;
        float _RESERVED_IDENTIFIER_FIXUP_2335 = _RESERVED_IDENTIFIER_FIXUP_2306 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2335;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2342 = _RESERVED_IDENTIFIER_FIXUP_3622.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3691;
        _RESERVED_IDENTIFIER_FIXUP_3691.x = _RESERVED_IDENTIFIER_FIXUP_2342.x;
        _RESERVED_IDENTIFIER_FIXUP_3691.y = _RESERVED_IDENTIFIER_FIXUP_2342.y;
        _RESERVED_IDENTIFIER_FIXUP_3691.w = _RESERVED_IDENTIFIER_FIXUP_2208;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3691.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2208;
        float _RESERVED_IDENTIFIER_FIXUP_2364 = _RESERVED_IDENTIFIER_FIXUP_2335 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2364;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2371 = _RESERVED_IDENTIFIER_FIXUP_3622.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3704;
        _RESERVED_IDENTIFIER_FIXUP_3704.x = _RESERVED_IDENTIFIER_FIXUP_2371.x;
        _RESERVED_IDENTIFIER_FIXUP_3704.y = _RESERVED_IDENTIFIER_FIXUP_2371.y;
        _RESERVED_IDENTIFIER_FIXUP_3704.w = _RESERVED_IDENTIFIER_FIXUP_2208;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3704.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2208;
        float _RESERVED_IDENTIFIER_FIXUP_2393 = _RESERVED_IDENTIFIER_FIXUP_2364 + hdLod5(param_72, param_73).x;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2393;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2400 = _RESERVED_IDENTIFIER_FIXUP_3622.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3717;
        _RESERVED_IDENTIFIER_FIXUP_3717.x = _RESERVED_IDENTIFIER_FIXUP_2400.x;
        _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_2400.y;
        _RESERVED_IDENTIFIER_FIXUP_3717.w = _RESERVED_IDENTIFIER_FIXUP_2208;
        vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3717.xy;
        float param_75 = _RESERVED_IDENTIFIER_FIXUP_2208;
        float _RESERVED_IDENTIFIER_FIXUP_2422 = _RESERVED_IDENTIFIER_FIXUP_2393 + hdLod5(param_74, param_75).x;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2422;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2422 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3794 = _RESERVED_IDENTIFIER_FIXUP_3622;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2435 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3410.y = _RESERVED_IDENTIFIER_FIXUP_2435;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3795;
        if (_RESERVED_IDENTIFIER_FIXUP_2435 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2444 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2454 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2456 = _RESERVED_IDENTIFIER_FIXUP_2454.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3562 = _RESERVED_IDENTIFIER_FIXUP_3410;
            _RESERVED_IDENTIFIER_FIXUP_3562.y = _RESERVED_IDENTIFIER_FIXUP_2456;
            _RESERVED_IDENTIFIER_FIXUP_3562.z = _RESERVED_IDENTIFIER_FIXUP_2454.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2464 = _RESERVED_IDENTIFIER_FIXUP_3562.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3566;
            _RESERVED_IDENTIFIER_FIXUP_3566.x = _RESERVED_IDENTIFIER_FIXUP_2464.x;
            _RESERVED_IDENTIFIER_FIXUP_3566.y = _RESERVED_IDENTIFIER_FIXUP_2464.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2471 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2475 = _RESERVED_IDENTIFIER_FIXUP_2471.y;
            _RESERVED_IDENTIFIER_FIXUP_3566.w = _RESERVED_IDENTIFIER_FIXUP_2475;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2444.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2444.w;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3566.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2475;
            float _RESERVED_IDENTIFIER_FIXUP_2486 = hdLod6(param_76, param_77).x + hdLod6(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3815 = vec4(_RESERVED_IDENTIFIER_FIXUP_2165, _RESERVED_IDENTIFIER_FIXUP_2456, _RESERVED_IDENTIFIER_FIXUP_2454.y, _RESERVED_IDENTIFIER_FIXUP_2486);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2493 = _RESERVED_IDENTIFIER_FIXUP_3815.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3579;
            _RESERVED_IDENTIFIER_FIXUP_3579.x = _RESERVED_IDENTIFIER_FIXUP_2493.x;
            _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2493.y;
            _RESERVED_IDENTIFIER_FIXUP_3579.w = _RESERVED_IDENTIFIER_FIXUP_2475;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3579.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2475;
            float _RESERVED_IDENTIFIER_FIXUP_2515 = _RESERVED_IDENTIFIER_FIXUP_2486 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3815.w = _RESERVED_IDENTIFIER_FIXUP_2515;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2522 = _RESERVED_IDENTIFIER_FIXUP_3815.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3592;
            _RESERVED_IDENTIFIER_FIXUP_3592.x = _RESERVED_IDENTIFIER_FIXUP_2522.x;
            _RESERVED_IDENTIFIER_FIXUP_3592.y = _RESERVED_IDENTIFIER_FIXUP_2522.y;
            _RESERVED_IDENTIFIER_FIXUP_3592.w = _RESERVED_IDENTIFIER_FIXUP_2475;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3592.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2475;
            float _RESERVED_IDENTIFIER_FIXUP_2544 = _RESERVED_IDENTIFIER_FIXUP_2515 + hdLod6(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3815.w = _RESERVED_IDENTIFIER_FIXUP_2544;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2551 = _RESERVED_IDENTIFIER_FIXUP_3815.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3605;
            _RESERVED_IDENTIFIER_FIXUP_3605.x = _RESERVED_IDENTIFIER_FIXUP_2551.x;
            _RESERVED_IDENTIFIER_FIXUP_3605.y = _RESERVED_IDENTIFIER_FIXUP_2551.y;
            _RESERVED_IDENTIFIER_FIXUP_3605.w = _RESERVED_IDENTIFIER_FIXUP_2475;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3605.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2475;
            float _RESERVED_IDENTIFIER_FIXUP_2573 = _RESERVED_IDENTIFIER_FIXUP_2544 + hdLod6(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3815.y = _RESERVED_IDENTIFIER_FIXUP_2573;
            _RESERVED_IDENTIFIER_FIXUP_3815.x = _RESERVED_IDENTIFIER_FIXUP_2573 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3795 = _RESERVED_IDENTIFIER_FIXUP_3815;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2586 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3427 = _RESERVED_IDENTIFIER_FIXUP_3410;
            _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_2586;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3796;
            if (_RESERVED_IDENTIFIER_FIXUP_2586 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2595 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2605 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2607 = _RESERVED_IDENTIFIER_FIXUP_2605.x;
                _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_2607;
                _RESERVED_IDENTIFIER_FIXUP_3427.z = _RESERVED_IDENTIFIER_FIXUP_2605.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2615 = _RESERVED_IDENTIFIER_FIXUP_3427.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3506;
                _RESERVED_IDENTIFIER_FIXUP_3506.x = _RESERVED_IDENTIFIER_FIXUP_2615.x;
                _RESERVED_IDENTIFIER_FIXUP_3506.y = _RESERVED_IDENTIFIER_FIXUP_2615.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2622 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2626 = _RESERVED_IDENTIFIER_FIXUP_2622.y;
                _RESERVED_IDENTIFIER_FIXUP_3506.w = _RESERVED_IDENTIFIER_FIXUP_2626;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_2595.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2595.w;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3506.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2626;
                float _RESERVED_IDENTIFIER_FIXUP_2637 = hdLod7(param_86, param_87).x + hdLod7(param_88, param_89).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3814 = vec4(_RESERVED_IDENTIFIER_FIXUP_2165, _RESERVED_IDENTIFIER_FIXUP_2607, _RESERVED_IDENTIFIER_FIXUP_2605.y, _RESERVED_IDENTIFIER_FIXUP_2637);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2644 = _RESERVED_IDENTIFIER_FIXUP_3814.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3519;
                _RESERVED_IDENTIFIER_FIXUP_3519.x = _RESERVED_IDENTIFIER_FIXUP_2644.x;
                _RESERVED_IDENTIFIER_FIXUP_3519.y = _RESERVED_IDENTIFIER_FIXUP_2644.y;
                _RESERVED_IDENTIFIER_FIXUP_3519.w = _RESERVED_IDENTIFIER_FIXUP_2626;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3519.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2626;
                float _RESERVED_IDENTIFIER_FIXUP_2666 = _RESERVED_IDENTIFIER_FIXUP_2637 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_3814.w = _RESERVED_IDENTIFIER_FIXUP_2666;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2673 = _RESERVED_IDENTIFIER_FIXUP_3814.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3532;
                _RESERVED_IDENTIFIER_FIXUP_3532.x = _RESERVED_IDENTIFIER_FIXUP_2673.x;
                _RESERVED_IDENTIFIER_FIXUP_3532.y = _RESERVED_IDENTIFIER_FIXUP_2673.y;
                _RESERVED_IDENTIFIER_FIXUP_3532.w = _RESERVED_IDENTIFIER_FIXUP_2626;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3532.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2626;
                float _RESERVED_IDENTIFIER_FIXUP_2695 = _RESERVED_IDENTIFIER_FIXUP_2666 + hdLod7(param_92, param_93).x;
                _RESERVED_IDENTIFIER_FIXUP_3814.w = _RESERVED_IDENTIFIER_FIXUP_2695;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2702 = _RESERVED_IDENTIFIER_FIXUP_3814.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3545;
                _RESERVED_IDENTIFIER_FIXUP_3545.x = _RESERVED_IDENTIFIER_FIXUP_2702.x;
                _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_2702.y;
                _RESERVED_IDENTIFIER_FIXUP_3545.w = _RESERVED_IDENTIFIER_FIXUP_2626;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3545.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2626;
                float _RESERVED_IDENTIFIER_FIXUP_2724 = _RESERVED_IDENTIFIER_FIXUP_2695 + hdLod7(param_94, param_95).x;
                _RESERVED_IDENTIFIER_FIXUP_3814.y = _RESERVED_IDENTIFIER_FIXUP_2724;
                _RESERVED_IDENTIFIER_FIXUP_3814.x = _RESERVED_IDENTIFIER_FIXUP_2724 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3796 = _RESERVED_IDENTIFIER_FIXUP_3814;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2740 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2744 = _RESERVED_IDENTIFIER_FIXUP_2740.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2755 = vec4(_RESERVED_IDENTIFIER_FIXUP_2740.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2744).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3811 = vec4(_RESERVED_IDENTIFIER_FIXUP_2755 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2123);
                _RESERVED_IDENTIFIER_FIXUP_3811.w = _RESERVED_IDENTIFIER_FIXUP_2744;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2792 = _RESERVED_IDENTIFIER_FIXUP_2755 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3460 = _RESERVED_IDENTIFIER_FIXUP_3811;
                _RESERVED_IDENTIFIER_FIXUP_3460.x = _RESERVED_IDENTIFIER_FIXUP_2792.x;
                _RESERVED_IDENTIFIER_FIXUP_3460.y = _RESERVED_IDENTIFIER_FIXUP_2792.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2814 = _RESERVED_IDENTIFIER_FIXUP_2755 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3469 = _RESERVED_IDENTIFIER_FIXUP_3460;
                _RESERVED_IDENTIFIER_FIXUP_3469.x = _RESERVED_IDENTIFIER_FIXUP_2814.x;
                _RESERVED_IDENTIFIER_FIXUP_3469.y = _RESERVED_IDENTIFIER_FIXUP_2814.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2836 = _RESERVED_IDENTIFIER_FIXUP_2755 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3478 = _RESERVED_IDENTIFIER_FIXUP_3469;
                _RESERVED_IDENTIFIER_FIXUP_3478.x = _RESERVED_IDENTIFIER_FIXUP_2836.x;
                _RESERVED_IDENTIFIER_FIXUP_3478.y = _RESERVED_IDENTIFIER_FIXUP_2836.y;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_2755;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2744;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3811.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2744;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3460.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2744;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3469.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_2744;
                vec2 param_104 = _RESERVED_IDENTIFIER_FIXUP_3478.xy;
                float param_105 = _RESERVED_IDENTIFIER_FIXUP_2744;
                float _RESERVED_IDENTIFIER_FIXUP_2851 = (((hdLod8(param_96, param_97).x + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x) + hdLod8(param_104, param_105).x;
                float _RESERVED_IDENTIFIER_FIXUP_2865 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2870 = (_RESERVED_IDENTIFIER_FIXUP_2851 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3796 = vec4((_RESERVED_IDENTIFIER_FIXUP_2865 * _RESERVED_IDENTIFIER_FIXUP_2870) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2865, _RESERVED_IDENTIFIER_FIXUP_2870, _RESERVED_IDENTIFIER_FIXUP_2851);
            }
            _RESERVED_IDENTIFIER_FIXUP_3795 = _RESERVED_IDENTIFIER_FIXUP_3796;
        }
        _RESERVED_IDENTIFIER_FIXUP_3794 = _RESERVED_IDENTIFIER_FIXUP_3795;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2885 = (_RESERVED_IDENTIFIER_FIXUP_3794.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3734 = _RESERVED_IDENTIFIER_FIXUP_3794;
    _RESERVED_IDENTIFIER_FIXUP_3734.y = _RESERVED_IDENTIFIER_FIXUP_2885;
    _RESERVED_IDENTIFIER_FIXUP_3734.y = _RESERVED_IDENTIFIER_FIXUP_2885;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2898 = _RESERVED_IDENTIFIER_FIXUP_2146.xyz * _RESERVED_IDENTIFIER_FIXUP_3734.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3740 = _RESERVED_IDENTIFIER_FIXUP_2146;
    _RESERVED_IDENTIFIER_FIXUP_3740.x = _RESERVED_IDENTIFIER_FIXUP_2898.x;
    _RESERVED_IDENTIFIER_FIXUP_3740.y = _RESERVED_IDENTIFIER_FIXUP_2898.y;
    _RESERVED_IDENTIFIER_FIXUP_3740.z = _RESERVED_IDENTIFIER_FIXUP_2898.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2909 = _RESERVED_IDENTIFIER_FIXUP_3740.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3746 = _RESERVED_IDENTIFIER_FIXUP_3740;
    _RESERVED_IDENTIFIER_FIXUP_3746.x = _RESERVED_IDENTIFIER_FIXUP_2909.x;
    _RESERVED_IDENTIFIER_FIXUP_3746.y = _RESERVED_IDENTIFIER_FIXUP_2909.y;
    _RESERVED_IDENTIFIER_FIXUP_3746.z = _RESERVED_IDENTIFIER_FIXUP_2909.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2920 = _RESERVED_IDENTIFIER_FIXUP_3746.xyz + _RESERVED_IDENTIFIER_FIXUP_3746.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3752 = _RESERVED_IDENTIFIER_FIXUP_3746;
    _RESERVED_IDENTIFIER_FIXUP_3752.x = _RESERVED_IDENTIFIER_FIXUP_2920.x;
    _RESERVED_IDENTIFIER_FIXUP_3752.y = _RESERVED_IDENTIFIER_FIXUP_2920.y;
    _RESERVED_IDENTIFIER_FIXUP_3752.z = _RESERVED_IDENTIFIER_FIXUP_2920.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2931 = _RESERVED_IDENTIFIER_FIXUP_3752.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3734.y = _RESERVED_IDENTIFIER_FIXUP_2931.x;
    _RESERVED_IDENTIFIER_FIXUP_3734.z = _RESERVED_IDENTIFIER_FIXUP_2931.y;
    _RESERVED_IDENTIFIER_FIXUP_3734.w = _RESERVED_IDENTIFIER_FIXUP_2931.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2945 = (_RESERVED_IDENTIFIER_FIXUP_3734.yzw * _RESERVED_IDENTIFIER_FIXUP_3734.xxx) + _RESERVED_IDENTIFIER_FIXUP_3752.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3764 = _RESERVED_IDENTIFIER_FIXUP_3752;
    _RESERVED_IDENTIFIER_FIXUP_3764.x = _RESERVED_IDENTIFIER_FIXUP_2945.x;
    _RESERVED_IDENTIFIER_FIXUP_3764.y = _RESERVED_IDENTIFIER_FIXUP_2945.y;
    _RESERVED_IDENTIFIER_FIXUP_3764.z = _RESERVED_IDENTIFIER_FIXUP_2945.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2958 = _RESERVED_IDENTIFIER_FIXUP_3764.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3770 = _RESERVED_IDENTIFIER_FIXUP_3764;
    _RESERVED_IDENTIFIER_FIXUP_3770.x = _RESERVED_IDENTIFIER_FIXUP_2958.x;
    _RESERVED_IDENTIFIER_FIXUP_3770.y = _RESERVED_IDENTIFIER_FIXUP_2958.y;
    _RESERVED_IDENTIFIER_FIXUP_3770.z = _RESERVED_IDENTIFIER_FIXUP_2958.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3770.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1042 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1051;
    if (_RESERVED_IDENTIFIER_FIXUP_1042)
    {
        _RESERVED_IDENTIFIER_FIXUP_1051 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1051 = _RESERVED_IDENTIFIER_FIXUP_1042;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1051)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1088 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3389.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1115 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3017;
    if (_RESERVED_IDENTIFIER_FIXUP_1088 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3017 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1088), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1115);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3017 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1115);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3017;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2885);
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
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r1.xy;
        float param_6 = r1.w;
        r1 = hdLod5(param_5, param_6);
        vec2 hdB167 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB167.x;
        r1.z = hdB167.y;
        vec2 hdB189 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB189.x;
        r2.y = hdB189.y;
        vec2 hdB197 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB197.x;
        r2.w = hdB197.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.x += r2.x;
        vec2 hdB220 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB220.x;
        r2.y = hdB220.y;
        vec2 hdB227 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB227.x;
        r2.w = hdB227.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.x += r2.x;
        vec2 hdB250 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB250.x;
        r2.y = hdB250.y;
        vec2 hdB257 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB257.x;
        r2.w = hdB257.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.x += r2.x;
        vec2 hdB280 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB280.x;
        r2.y = hdB280.y;
        vec2 hdB287 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB287.x;
        r2.w = hdB287.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.x += r2.x;
        vec2 hdB310 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB310.x;
        r2.y = hdB310.y;
        vec2 hdB317 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB317.x;
        r2.w = hdB317.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r1.x += r2.x;
        vec2 hdB340 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB340.x;
        r2.y = hdB340.y;
        vec2 hdB347 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB347.x;
        r2.w = hdB347.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r1.x += r2.x;
        vec2 hdB370 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB370.x;
        r2.y = hdB370.y;
        vec2 hdB377 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB377.x;
        r2.w = hdB377.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod5(param_19, param_20);
        r1.x += r2.x;
        vec2 hdB400 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB400.x;
        r2.y = hdB400.y;
        vec2 hdB407 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB407.x;
        r2.w = hdB407.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod5(param_21, param_22);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            vec2 hdB457 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB457.x;
            r1.z = hdB457.y;
            vec2 hdB467 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB467.x;
            r3.y = hdB467.y;
            vec2 hdB474 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB474.x;
            r3.w = hdB474.y;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod6(param_25, param_26);
            r1.w = r2.x + r3.x;
            vec2 hdB496 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB496.x;
            r2.y = hdB496.y;
            vec2 hdB503 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB503.x;
            r2.w = hdB503.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r1.w += r2.x;
            vec2 hdB525 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB525.x;
            r2.y = hdB525.y;
            vec2 hdB532 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB532.x;
            r2.w = hdB532.y;
            vec2 param_29 = r2.xy;
            float param_30 = r2.w;
            r2 = hdLod6(param_29, param_30);
            r1.w += r2.x;
            vec2 hdB554 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB554.x;
            r2.y = hdB554.y;
            vec2 hdB561 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB561.x;
            r2.w = hdB561.y;
            vec2 param_31 = r2.xy;
            float param_32 = r2.w;
            r2 = hdLod6(param_31, param_32);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                vec2 hdB611 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB611.x;
                r1.z = hdB611.y;
                vec2 hdB621 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB621.x;
                r3.y = hdB621.y;
                vec2 hdB628 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB628.x;
                r3.w = hdB628.y;
                vec2 param_35 = r3.xy;
                float param_36 = r3.w;
                r3 = hdLod7(param_35, param_36);
                r1.w = r2.x + r3.x;
                vec2 hdB650 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB650.x;
                r2.y = hdB650.y;
                vec2 hdB657 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB657.x;
                r2.w = hdB657.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r1.w += r2.x;
                vec2 hdB679 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB679.x;
                r2.y = hdB679.y;
                vec2 hdB686 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB686.x;
                r2.w = hdB686.y;
                vec2 param_39 = r2.xy;
                float param_40 = r2.w;
                r2 = hdLod7(param_39, param_40);
                r1.w += r2.x;
                vec2 hdB708 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB708.x;
                r2.y = hdB708.y;
                vec2 hdB715 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB715.x;
                r2.w = hdB715.y;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r2 = hdLod7(param_41, param_42);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 hdB747 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB747.x;
                r2.w = hdB747.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_43 = r2.xy;
                float param_44 = r2.w;
                r3 = hdLod8(param_43, param_44);
                vec2 hdB772 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB772.x;
                r4.y = hdB772.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r5 = hdLod8(param_45, param_46);
                r1.w = r3.x + r5.x;
                vec2 hdB800 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB800.x;
                r4.y = hdB800.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r3 = hdLod8(param_47, param_48);
                r1.w += r3.x;
                vec2 hdB822 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB822.x;
                r4.y = hdB822.y;
                vec2 param_49 = r4.xy;
                float param_50 = r4.w;
                r3 = hdLod8(param_49, param_50);
                r1.w += r3.x;
                vec2 hdB844 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB844.x;
                r4.y = hdB844.y;
                vec2 param_51 = r4.xy;
                float param_52 = r4.w;
                r2 = hdLod8(param_51, param_52);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB897 = r0;
    vec3 hdB901 = hdB897.xyz * r1.yyy;
    r0.x = hdB901.x;
    r0.y = hdB901.y;
    r0.z = hdB901.z;
    vec4 hdB908 = r0;
    vec3 hdB912 = hdB908.xyz * v0.xyz;
    r0.x = hdB912.x;
    r0.y = hdB912.y;
    r0.z = hdB912.z;
    vec4 hdB919 = r0;
    vec4 hdB921 = r0;
    vec3 hdB923 = hdB919.xyz + hdB921.xyz;
    r0.x = hdB923.x;
    r0.y = hdB923.y;
    r0.z = hdB923.z;
    vec3 hdB934 = r0.www * v1.xyz;
    r1.y = hdB934.x;
    r1.z = hdB934.y;
    r1.w = hdB934.z;
    vec4 hdB946 = r0;
    vec3 hdB948 = (r1.yzw * r1.xxx) + hdB946.xyz;
    r0.x = hdB948.x;
    r0.y = hdB948.y;
    r0.z = hdB948.z;
    vec4 hdB955 = r0;
    vec3 hdB962 = hdB955.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB962.x;
    r0.y = hdB962.y;
    r0.z = hdB962.z;
    vec3 hdB977 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB977.x;
    oC0.y = hdB977.y;
    oC0.z = hdB977.z;
    oC0.w = 1.0;
    bool hdB990 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB998;
    if (hdB990)
    {
        hdB998 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB998 = hdB990;
    }
    if (hdB998)
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
    bool _3513 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3523;
    if (_3513)
    {
        _3523 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3523 = _3513;
    }
    if (_3523)
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
        bool _3548 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3563;
        if (!_3548)
        {
            _3563 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3563 = _3548;
        }
        if (_3563)
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
