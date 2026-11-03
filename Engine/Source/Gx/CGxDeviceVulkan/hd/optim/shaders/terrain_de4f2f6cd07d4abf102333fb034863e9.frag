#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_4053;
vec4 _RESERVED_IDENTIFIER_FIXUP_4054;


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
    bool _64 = hdOverride >= 0;
    bool _84;
    if (_64)
    {
        _84 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _84 = _64;
    }
    vec4 _85;
    if (_84)
    {
        _85 = vec4(float(hdOverride));
    }
    else
    {
        _85 = value;
    }
    return _85;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _102 = hdOverride >= 0;
    bool _111;
    if (_102)
    {
        _111 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _111 = _102;
    }
    vec4 _112;
    if (_111)
    {
        _112 = vec4(float(hdOverride));
    }
    else
    {
        _112 = value;
    }
    return _112;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _129 = hdOverride >= 0;
    bool _139;
    if (_129)
    {
        _139 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _139 = _129;
    }
    vec4 _140;
    if (_139)
    {
        _140 = vec4(float(hdOverride));
    }
    else
    {
        _140 = value;
    }
    return _140;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _157 = hdOverride >= 0;
    bool _167;
    if (_157)
    {
        _167 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _167 = _157;
    }
    vec4 _168;
    if (_167)
    {
        _168 = vec4(float(hdOverride));
    }
    else
    {
        _168 = value;
    }
    return _168;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _186 = hdOverride >= 0;
    bool _196;
    if (_186)
    {
        _196 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _196 = _186;
    }
    vec4 _197;
    if (_196)
    {
        _197 = vec4(float(hdOverride));
    }
    else
    {
        _197 = value;
    }
    return _197;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _215 = hdOverride >= 0;
    bool _225;
    if (_215)
    {
        _225 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _225 = _215;
    }
    vec4 _226;
    if (_225)
    {
        _226 = vec4(float(hdOverride));
    }
    else
    {
        _226 = value;
    }
    return _226;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _244 = hdOverride >= 0;
    bool _254;
    if (_244)
    {
        _254 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _254 = _244;
    }
    vec4 _255;
    if (_254)
    {
        _255 = vec4(float(hdOverride));
    }
    else
    {
        _255 = value;
    }
    return _255;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _273 = hdOverride >= 0;
    bool _283;
    if (_273)
    {
        _283 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _283 = _273;
    }
    vec4 _284;
    if (_283)
    {
        _284 = vec4(float(hdOverride));
    }
    else
    {
        _284 = value;
    }
    return _284;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1252 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1256 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1260 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1264 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1268 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3222 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3222.x = _RESERVED_IDENTIFIER_FIXUP_1268.x;
    _RESERVED_IDENTIFIER_FIXUP_3222.y = _RESERVED_IDENTIFIER_FIXUP_1268.y;
    float _RESERVED_IDENTIFIER_FIXUP_1274 = _RESERVED_IDENTIFIER_FIXUP_1268.z;
    _RESERVED_IDENTIFIER_FIXUP_3222.z = _RESERVED_IDENTIFIER_FIXUP_1274;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1276 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4053).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1279 = _RESERVED_IDENTIFIER_FIXUP_1276 + _RESERVED_IDENTIFIER_FIXUP_1276;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
    _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_1279.x;
    _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_1279.y;
    _RESERVED_IDENTIFIER_FIXUP_3228.z = _RESERVED_IDENTIFIER_FIXUP_1279.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_1252.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1290 = _RESERVED_IDENTIFIER_FIXUP_1287 * _RESERVED_IDENTIFIER_FIXUP_3228.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3234;
    _RESERVED_IDENTIFIER_FIXUP_3234.x = _RESERVED_IDENTIFIER_FIXUP_1290.x;
    _RESERVED_IDENTIFIER_FIXUP_3234.y = _RESERVED_IDENTIFIER_FIXUP_1290.y;
    _RESERVED_IDENTIFIER_FIXUP_3234.z = _RESERVED_IDENTIFIER_FIXUP_1290.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1304 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3222.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1305 = mix(_RESERVED_IDENTIFIER_FIXUP_3234.xyz, _RESERVED_IDENTIFIER_FIXUP_1287, _RESERVED_IDENTIFIER_FIXUP_1304);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3240 = _RESERVED_IDENTIFIER_FIXUP_1252;
    _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_1305.x;
    _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_1305.y;
    _RESERVED_IDENTIFIER_FIXUP_3240.z = _RESERVED_IDENTIFIER_FIXUP_1305.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1313 = _RESERVED_IDENTIFIER_FIXUP_1256.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_1313 * _RESERVED_IDENTIFIER_FIXUP_3228.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3246;
    _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1316.x;
    _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1316.y;
    _RESERVED_IDENTIFIER_FIXUP_3246.z = _RESERVED_IDENTIFIER_FIXUP_1316.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1330 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3222.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1331 = mix(_RESERVED_IDENTIFIER_FIXUP_3246.xyz, _RESERVED_IDENTIFIER_FIXUP_1313, _RESERVED_IDENTIFIER_FIXUP_1330);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3252 = _RESERVED_IDENTIFIER_FIXUP_1256;
    _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_1331.x;
    _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_1331.y;
    _RESERVED_IDENTIFIER_FIXUP_3252.z = _RESERVED_IDENTIFIER_FIXUP_1331.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_1260.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_1339 * _RESERVED_IDENTIFIER_FIXUP_3228.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4079 = vec4(_RESERVED_IDENTIFIER_FIXUP_1342.xy, _RESERVED_IDENTIFIER_FIXUP_1274, _RESERVED_IDENTIFIER_FIXUP_1342.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1357 = mix(_RESERVED_IDENTIFIER_FIXUP_4079.xyw, _RESERVED_IDENTIFIER_FIXUP_1339, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4079.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3264 = _RESERVED_IDENTIFIER_FIXUP_1260;
    _RESERVED_IDENTIFIER_FIXUP_3264.x = _RESERVED_IDENTIFIER_FIXUP_1357.x;
    _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_1357.y;
    _RESERVED_IDENTIFIER_FIXUP_3264.z = _RESERVED_IDENTIFIER_FIXUP_1357.z;
    float _RESERVED_IDENTIFIER_FIXUP_1367 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1264.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3270 = _RESERVED_IDENTIFIER_FIXUP_1264;
    _RESERVED_IDENTIFIER_FIXUP_3270.z = _RESERVED_IDENTIFIER_FIXUP_1367;
    _RESERVED_IDENTIFIER_FIXUP_3270.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1367;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1377 = _RESERVED_IDENTIFIER_FIXUP_3270.xxxx * _RESERVED_IDENTIFIER_FIXUP_3252;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1389 = (_RESERVED_IDENTIFIER_FIXUP_3264 * _RESERVED_IDENTIFIER_FIXUP_3270.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3240 * _RESERVED_IDENTIFIER_FIXUP_3270.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1377);
    float _RESERVED_IDENTIFIER_FIXUP_1396 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3277 = _RESERVED_IDENTIFIER_FIXUP_1377;
    _RESERVED_IDENTIFIER_FIXUP_3277.x = _RESERVED_IDENTIFIER_FIXUP_1396;
    float _RESERVED_IDENTIFIER_FIXUP_1402 = clamp((_RESERVED_IDENTIFIER_FIXUP_1396 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3277.x = _RESERVED_IDENTIFIER_FIXUP_1402;
    float _RESERVED_IDENTIFIER_FIXUP_1408 = ((-_RESERVED_IDENTIFIER_FIXUP_1402) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3277.x = _RESERVED_IDENTIFIER_FIXUP_1408;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4058;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4055;
    if (_RESERVED_IDENTIFIER_FIXUP_1408 != (-_RESERVED_IDENTIFIER_FIXUP_1408))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1420.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1420.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1426 = hdLod5(param_4, param_5);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1430 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3489 = _RESERVED_IDENTIFIER_FIXUP_1426;
        _RESERVED_IDENTIFIER_FIXUP_3489.y = _RESERVED_IDENTIFIER_FIXUP_1430.x;
        _RESERVED_IDENTIFIER_FIXUP_3489.z = _RESERVED_IDENTIFIER_FIXUP_1430.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1440 = _RESERVED_IDENTIFIER_FIXUP_3489.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3493;
        _RESERVED_IDENTIFIER_FIXUP_3493.x = _RESERVED_IDENTIFIER_FIXUP_1440.x;
        _RESERVED_IDENTIFIER_FIXUP_3493.y = _RESERVED_IDENTIFIER_FIXUP_1440.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1447 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1451 = _RESERVED_IDENTIFIER_FIXUP_1447.y;
        _RESERVED_IDENTIFIER_FIXUP_3493.w = _RESERVED_IDENTIFIER_FIXUP_1451;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3493.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1451;
        float _RESERVED_IDENTIFIER_FIXUP_1462 = _RESERVED_IDENTIFIER_FIXUP_1426.x + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_1462;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1469 = _RESERVED_IDENTIFIER_FIXUP_3489.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3506;
        _RESERVED_IDENTIFIER_FIXUP_3506.x = _RESERVED_IDENTIFIER_FIXUP_1469.x;
        _RESERVED_IDENTIFIER_FIXUP_3506.y = _RESERVED_IDENTIFIER_FIXUP_1469.y;
        _RESERVED_IDENTIFIER_FIXUP_3506.w = _RESERVED_IDENTIFIER_FIXUP_1451;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3506.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1451;
        float _RESERVED_IDENTIFIER_FIXUP_1491 = _RESERVED_IDENTIFIER_FIXUP_1462 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_1491;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1498 = _RESERVED_IDENTIFIER_FIXUP_3489.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3519;
        _RESERVED_IDENTIFIER_FIXUP_3519.x = _RESERVED_IDENTIFIER_FIXUP_1498.x;
        _RESERVED_IDENTIFIER_FIXUP_3519.y = _RESERVED_IDENTIFIER_FIXUP_1498.y;
        _RESERVED_IDENTIFIER_FIXUP_3519.w = _RESERVED_IDENTIFIER_FIXUP_1451;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3519.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1451;
        float _RESERVED_IDENTIFIER_FIXUP_1520 = _RESERVED_IDENTIFIER_FIXUP_1491 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_1520;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_3489.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3532;
        _RESERVED_IDENTIFIER_FIXUP_3532.x = _RESERVED_IDENTIFIER_FIXUP_1527.x;
        _RESERVED_IDENTIFIER_FIXUP_3532.y = _RESERVED_IDENTIFIER_FIXUP_1527.y;
        _RESERVED_IDENTIFIER_FIXUP_3532.w = _RESERVED_IDENTIFIER_FIXUP_1451;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3532.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1451;
        float _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_1520 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_1549;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_3489.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3545;
        _RESERVED_IDENTIFIER_FIXUP_3545.x = _RESERVED_IDENTIFIER_FIXUP_1556.x;
        _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_1556.y;
        _RESERVED_IDENTIFIER_FIXUP_3545.w = _RESERVED_IDENTIFIER_FIXUP_1451;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3545.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1451;
        float _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_1549 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_1578;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1585 = _RESERVED_IDENTIFIER_FIXUP_3489.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3558;
        _RESERVED_IDENTIFIER_FIXUP_3558.x = _RESERVED_IDENTIFIER_FIXUP_1585.x;
        _RESERVED_IDENTIFIER_FIXUP_3558.y = _RESERVED_IDENTIFIER_FIXUP_1585.y;
        _RESERVED_IDENTIFIER_FIXUP_3558.w = _RESERVED_IDENTIFIER_FIXUP_1451;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3558.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1451;
        float _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_1578 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_1607;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1614 = _RESERVED_IDENTIFIER_FIXUP_3489.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3571;
        _RESERVED_IDENTIFIER_FIXUP_3571.x = _RESERVED_IDENTIFIER_FIXUP_1614.x;
        _RESERVED_IDENTIFIER_FIXUP_3571.y = _RESERVED_IDENTIFIER_FIXUP_1614.y;
        _RESERVED_IDENTIFIER_FIXUP_3571.w = _RESERVED_IDENTIFIER_FIXUP_1451;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3571.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1451;
        float _RESERVED_IDENTIFIER_FIXUP_1636 = _RESERVED_IDENTIFIER_FIXUP_1607 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_1636;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1643 = _RESERVED_IDENTIFIER_FIXUP_3489.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3584;
        _RESERVED_IDENTIFIER_FIXUP_3584.x = _RESERVED_IDENTIFIER_FIXUP_1643.x;
        _RESERVED_IDENTIFIER_FIXUP_3584.y = _RESERVED_IDENTIFIER_FIXUP_1643.y;
        _RESERVED_IDENTIFIER_FIXUP_3584.w = _RESERVED_IDENTIFIER_FIXUP_1451;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3584.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1451;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1660 = hdLod5(param_20, param_21);
        float _RESERVED_IDENTIFIER_FIXUP_1665 = _RESERVED_IDENTIFIER_FIXUP_1636 + _RESERVED_IDENTIFIER_FIXUP_1660.x;
        _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_1665;
        _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_1665 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4058 = _RESERVED_IDENTIFIER_FIXUP_1660;
        _RESERVED_IDENTIFIER_FIXUP_4055 = _RESERVED_IDENTIFIER_FIXUP_3489;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1678 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3277.y = _RESERVED_IDENTIFIER_FIXUP_1678;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4059;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4056;
        if (_RESERVED_IDENTIFIER_FIXUP_1678 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1687 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1697 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1699 = _RESERVED_IDENTIFIER_FIXUP_1697.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3429 = _RESERVED_IDENTIFIER_FIXUP_3277;
            _RESERVED_IDENTIFIER_FIXUP_3429.y = _RESERVED_IDENTIFIER_FIXUP_1699;
            _RESERVED_IDENTIFIER_FIXUP_3429.z = _RESERVED_IDENTIFIER_FIXUP_1697.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_3429.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3433;
            _RESERVED_IDENTIFIER_FIXUP_3433.x = _RESERVED_IDENTIFIER_FIXUP_1707.x;
            _RESERVED_IDENTIFIER_FIXUP_3433.y = _RESERVED_IDENTIFIER_FIXUP_1707.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1714 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1718 = _RESERVED_IDENTIFIER_FIXUP_1714.y;
            _RESERVED_IDENTIFIER_FIXUP_3433.w = _RESERVED_IDENTIFIER_FIXUP_1718;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1687.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1687.w;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3433.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1718;
            float _RESERVED_IDENTIFIER_FIXUP_1729 = hdLod6(param_22, param_23).x + hdLod6(param_24, param_25).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4085 = vec4(_RESERVED_IDENTIFIER_FIXUP_1408, _RESERVED_IDENTIFIER_FIXUP_1699, _RESERVED_IDENTIFIER_FIXUP_1697.y, _RESERVED_IDENTIFIER_FIXUP_1729);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1736 = _RESERVED_IDENTIFIER_FIXUP_4085.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3446;
            _RESERVED_IDENTIFIER_FIXUP_3446.x = _RESERVED_IDENTIFIER_FIXUP_1736.x;
            _RESERVED_IDENTIFIER_FIXUP_3446.y = _RESERVED_IDENTIFIER_FIXUP_1736.y;
            _RESERVED_IDENTIFIER_FIXUP_3446.w = _RESERVED_IDENTIFIER_FIXUP_1718;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3446.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1718;
            float _RESERVED_IDENTIFIER_FIXUP_1758 = _RESERVED_IDENTIFIER_FIXUP_1729 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_4085.w = _RESERVED_IDENTIFIER_FIXUP_1758;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1765 = _RESERVED_IDENTIFIER_FIXUP_4085.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3459;
            _RESERVED_IDENTIFIER_FIXUP_3459.x = _RESERVED_IDENTIFIER_FIXUP_1765.x;
            _RESERVED_IDENTIFIER_FIXUP_3459.y = _RESERVED_IDENTIFIER_FIXUP_1765.y;
            _RESERVED_IDENTIFIER_FIXUP_3459.w = _RESERVED_IDENTIFIER_FIXUP_1718;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3459.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1718;
            float _RESERVED_IDENTIFIER_FIXUP_1787 = _RESERVED_IDENTIFIER_FIXUP_1758 + hdLod6(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_4085.w = _RESERVED_IDENTIFIER_FIXUP_1787;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1794 = _RESERVED_IDENTIFIER_FIXUP_4085.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3472;
            _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_1794.x;
            _RESERVED_IDENTIFIER_FIXUP_3472.y = _RESERVED_IDENTIFIER_FIXUP_1794.y;
            _RESERVED_IDENTIFIER_FIXUP_3472.w = _RESERVED_IDENTIFIER_FIXUP_1718;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3472.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1718;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1811 = hdLod6(param_30, param_31);
            float _RESERVED_IDENTIFIER_FIXUP_1816 = _RESERVED_IDENTIFIER_FIXUP_1787 + _RESERVED_IDENTIFIER_FIXUP_1811.x;
            _RESERVED_IDENTIFIER_FIXUP_4085.y = _RESERVED_IDENTIFIER_FIXUP_1816;
            _RESERVED_IDENTIFIER_FIXUP_4085.x = _RESERVED_IDENTIFIER_FIXUP_1816 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4059 = _RESERVED_IDENTIFIER_FIXUP_1811;
            _RESERVED_IDENTIFIER_FIXUP_4056 = _RESERVED_IDENTIFIER_FIXUP_4085;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1829 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3294 = _RESERVED_IDENTIFIER_FIXUP_3277;
            _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_1829;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4060;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4057;
            if (_RESERVED_IDENTIFIER_FIXUP_1829 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1838 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1848 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1850 = _RESERVED_IDENTIFIER_FIXUP_1848.x;
                _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_1850;
                _RESERVED_IDENTIFIER_FIXUP_3294.z = _RESERVED_IDENTIFIER_FIXUP_1848.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1858 = _RESERVED_IDENTIFIER_FIXUP_3294.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3373;
                _RESERVED_IDENTIFIER_FIXUP_3373.x = _RESERVED_IDENTIFIER_FIXUP_1858.x;
                _RESERVED_IDENTIFIER_FIXUP_3373.y = _RESERVED_IDENTIFIER_FIXUP_1858.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1865 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1869 = _RESERVED_IDENTIFIER_FIXUP_1865.y;
                _RESERVED_IDENTIFIER_FIXUP_3373.w = _RESERVED_IDENTIFIER_FIXUP_1869;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1838.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1838.w;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3373.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1869;
                float _RESERVED_IDENTIFIER_FIXUP_1880 = hdLod7(param_32, param_33).x + hdLod7(param_34, param_35).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4084 = vec4(_RESERVED_IDENTIFIER_FIXUP_1408, _RESERVED_IDENTIFIER_FIXUP_1850, _RESERVED_IDENTIFIER_FIXUP_1848.y, _RESERVED_IDENTIFIER_FIXUP_1880);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1887 = _RESERVED_IDENTIFIER_FIXUP_4084.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3386;
                _RESERVED_IDENTIFIER_FIXUP_3386.x = _RESERVED_IDENTIFIER_FIXUP_1887.x;
                _RESERVED_IDENTIFIER_FIXUP_3386.y = _RESERVED_IDENTIFIER_FIXUP_1887.y;
                _RESERVED_IDENTIFIER_FIXUP_3386.w = _RESERVED_IDENTIFIER_FIXUP_1869;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3386.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1869;
                float _RESERVED_IDENTIFIER_FIXUP_1909 = _RESERVED_IDENTIFIER_FIXUP_1880 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_4084.w = _RESERVED_IDENTIFIER_FIXUP_1909;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1916 = _RESERVED_IDENTIFIER_FIXUP_4084.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3399;
                _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1916.x;
                _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_1916.y;
                _RESERVED_IDENTIFIER_FIXUP_3399.w = _RESERVED_IDENTIFIER_FIXUP_1869;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3399.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1869;
                float _RESERVED_IDENTIFIER_FIXUP_1938 = _RESERVED_IDENTIFIER_FIXUP_1909 + hdLod7(param_38, param_39).x;
                _RESERVED_IDENTIFIER_FIXUP_4084.w = _RESERVED_IDENTIFIER_FIXUP_1938;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1945 = _RESERVED_IDENTIFIER_FIXUP_4084.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3412;
                _RESERVED_IDENTIFIER_FIXUP_3412.x = _RESERVED_IDENTIFIER_FIXUP_1945.x;
                _RESERVED_IDENTIFIER_FIXUP_3412.y = _RESERVED_IDENTIFIER_FIXUP_1945.y;
                _RESERVED_IDENTIFIER_FIXUP_3412.w = _RESERVED_IDENTIFIER_FIXUP_1869;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3412.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1869;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1962 = hdLod7(param_40, param_41);
                float _RESERVED_IDENTIFIER_FIXUP_1967 = _RESERVED_IDENTIFIER_FIXUP_1938 + _RESERVED_IDENTIFIER_FIXUP_1962.x;
                _RESERVED_IDENTIFIER_FIXUP_4084.y = _RESERVED_IDENTIFIER_FIXUP_1967;
                _RESERVED_IDENTIFIER_FIXUP_4084.x = _RESERVED_IDENTIFIER_FIXUP_1967 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4060 = _RESERVED_IDENTIFIER_FIXUP_1962;
                _RESERVED_IDENTIFIER_FIXUP_4057 = _RESERVED_IDENTIFIER_FIXUP_4084;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1983 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_1983.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1998 = vec4(_RESERVED_IDENTIFIER_FIXUP_1983.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1987).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4081 = vec4(_RESERVED_IDENTIFIER_FIXUP_1998 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1987);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2035 = _RESERVED_IDENTIFIER_FIXUP_1998 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3327 = _RESERVED_IDENTIFIER_FIXUP_4081;
                _RESERVED_IDENTIFIER_FIXUP_3327.x = _RESERVED_IDENTIFIER_FIXUP_2035.x;
                _RESERVED_IDENTIFIER_FIXUP_3327.y = _RESERVED_IDENTIFIER_FIXUP_2035.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2057 = _RESERVED_IDENTIFIER_FIXUP_1998 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3336 = _RESERVED_IDENTIFIER_FIXUP_3327;
                _RESERVED_IDENTIFIER_FIXUP_3336.x = _RESERVED_IDENTIFIER_FIXUP_2057.x;
                _RESERVED_IDENTIFIER_FIXUP_3336.y = _RESERVED_IDENTIFIER_FIXUP_2057.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2079 = _RESERVED_IDENTIFIER_FIXUP_1998 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3345 = _RESERVED_IDENTIFIER_FIXUP_3336;
                _RESERVED_IDENTIFIER_FIXUP_3345.x = _RESERVED_IDENTIFIER_FIXUP_2079.x;
                _RESERVED_IDENTIFIER_FIXUP_3345.y = _RESERVED_IDENTIFIER_FIXUP_2079.y;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3345.xy;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1987;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2089 = hdLod8(param_42, param_43);
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_1998;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1987;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_4081.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1987;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3327.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1987;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3336.xy;
                float param_51 = _RESERVED_IDENTIFIER_FIXUP_1987;
                float _RESERVED_IDENTIFIER_FIXUP_2094 = (((hdLod8(param_44, param_45).x + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + hdLod8(param_50, param_51).x) + _RESERVED_IDENTIFIER_FIXUP_2089.x;
                float _RESERVED_IDENTIFIER_FIXUP_2102 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3356 = _RESERVED_IDENTIFIER_FIXUP_2089;
                _RESERVED_IDENTIFIER_FIXUP_3356.x = _RESERVED_IDENTIFIER_FIXUP_2102;
                float _RESERVED_IDENTIFIER_FIXUP_2108 = clamp((_RESERVED_IDENTIFIER_FIXUP_2102 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2113 = (_RESERVED_IDENTIFIER_FIXUP_2094 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4060 = _RESERVED_IDENTIFIER_FIXUP_3356;
                _RESERVED_IDENTIFIER_FIXUP_4057 = vec4((_RESERVED_IDENTIFIER_FIXUP_2108 * _RESERVED_IDENTIFIER_FIXUP_2113) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2108, _RESERVED_IDENTIFIER_FIXUP_2113, _RESERVED_IDENTIFIER_FIXUP_2094);
            }
            _RESERVED_IDENTIFIER_FIXUP_4059 = _RESERVED_IDENTIFIER_FIXUP_4060;
            _RESERVED_IDENTIFIER_FIXUP_4056 = _RESERVED_IDENTIFIER_FIXUP_4057;
        }
        _RESERVED_IDENTIFIER_FIXUP_4058 = _RESERVED_IDENTIFIER_FIXUP_4059;
        _RESERVED_IDENTIFIER_FIXUP_4055 = _RESERVED_IDENTIFIER_FIXUP_4056;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3603 = _RESERVED_IDENTIFIER_FIXUP_4055;
    _RESERVED_IDENTIFIER_FIXUP_3603.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3605 = _RESERVED_IDENTIFIER_FIXUP_4058;
    _RESERVED_IDENTIFIER_FIXUP_3605.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3605.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3605.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2152 = _RESERVED_IDENTIFIER_FIXUP_3603.xxx * _RESERVED_IDENTIFIER_FIXUP_3605.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4086 = vec4(_RESERVED_IDENTIFIER_FIXUP_2152.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2152.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2166 = (_RESERVED_IDENTIFIER_FIXUP_1389.xyz * _RESERVED_IDENTIFIER_FIXUP_4086.yyy) + _RESERVED_IDENTIFIER_FIXUP_4086.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3617 = _RESERVED_IDENTIFIER_FIXUP_1389;
    _RESERVED_IDENTIFIER_FIXUP_3617.x = _RESERVED_IDENTIFIER_FIXUP_2166.x;
    _RESERVED_IDENTIFIER_FIXUP_3617.y = _RESERVED_IDENTIFIER_FIXUP_2166.y;
    _RESERVED_IDENTIFIER_FIXUP_3617.z = _RESERVED_IDENTIFIER_FIXUP_2166.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2179 = _RESERVED_IDENTIFIER_FIXUP_3617.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3623 = _RESERVED_IDENTIFIER_FIXUP_3617;
    _RESERVED_IDENTIFIER_FIXUP_3623.x = _RESERVED_IDENTIFIER_FIXUP_2179.x;
    _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_2179.y;
    _RESERVED_IDENTIFIER_FIXUP_3623.z = _RESERVED_IDENTIFIER_FIXUP_2179.z;
    vec2 param_52 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2235 = hdTex0(param_52);
    vec2 param_53 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2239 = hdTex1(param_53);
    vec2 param_54 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2243 = hdTex2(param_54);
    vec2 param_55 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2247 = hdTex3(param_55);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2262 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3643;
    _RESERVED_IDENTIFIER_FIXUP_3643.x = _RESERVED_IDENTIFIER_FIXUP_2262.x;
    _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_2262.y;
    _RESERVED_IDENTIFIER_FIXUP_3643.z = _RESERVED_IDENTIFIER_FIXUP_2262.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2270 = _RESERVED_IDENTIFIER_FIXUP_2235.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2273 = _RESERVED_IDENTIFIER_FIXUP_2270 * _RESERVED_IDENTIFIER_FIXUP_3643.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3649;
    _RESERVED_IDENTIFIER_FIXUP_3649.x = _RESERVED_IDENTIFIER_FIXUP_2273.x;
    _RESERVED_IDENTIFIER_FIXUP_3649.y = _RESERVED_IDENTIFIER_FIXUP_2273.y;
    _RESERVED_IDENTIFIER_FIXUP_3649.z = _RESERVED_IDENTIFIER_FIXUP_2273.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2288 = mix(_RESERVED_IDENTIFIER_FIXUP_3649.xyz, _RESERVED_IDENTIFIER_FIXUP_2270, _RESERVED_IDENTIFIER_FIXUP_1304);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3655 = _RESERVED_IDENTIFIER_FIXUP_2235;
    _RESERVED_IDENTIFIER_FIXUP_3655.x = _RESERVED_IDENTIFIER_FIXUP_2288.x;
    _RESERVED_IDENTIFIER_FIXUP_3655.y = _RESERVED_IDENTIFIER_FIXUP_2288.y;
    _RESERVED_IDENTIFIER_FIXUP_3655.z = _RESERVED_IDENTIFIER_FIXUP_2288.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2296 = _RESERVED_IDENTIFIER_FIXUP_2239.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2299 = _RESERVED_IDENTIFIER_FIXUP_2296 * _RESERVED_IDENTIFIER_FIXUP_3643.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3661;
    _RESERVED_IDENTIFIER_FIXUP_3661.x = _RESERVED_IDENTIFIER_FIXUP_2299.x;
    _RESERVED_IDENTIFIER_FIXUP_3661.y = _RESERVED_IDENTIFIER_FIXUP_2299.y;
    _RESERVED_IDENTIFIER_FIXUP_3661.z = _RESERVED_IDENTIFIER_FIXUP_2299.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2314 = mix(_RESERVED_IDENTIFIER_FIXUP_3661.xyz, _RESERVED_IDENTIFIER_FIXUP_2296, _RESERVED_IDENTIFIER_FIXUP_1330);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3667 = _RESERVED_IDENTIFIER_FIXUP_2239;
    _RESERVED_IDENTIFIER_FIXUP_3667.x = _RESERVED_IDENTIFIER_FIXUP_2314.x;
    _RESERVED_IDENTIFIER_FIXUP_3667.y = _RESERVED_IDENTIFIER_FIXUP_2314.y;
    _RESERVED_IDENTIFIER_FIXUP_3667.z = _RESERVED_IDENTIFIER_FIXUP_2314.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2322 = _RESERVED_IDENTIFIER_FIXUP_2243.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2325 = _RESERVED_IDENTIFIER_FIXUP_2322 * _RESERVED_IDENTIFIER_FIXUP_3643.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4088 = vec4(_RESERVED_IDENTIFIER_FIXUP_2325.xy, _RESERVED_IDENTIFIER_FIXUP_1274, _RESERVED_IDENTIFIER_FIXUP_2325.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2340 = mix(_RESERVED_IDENTIFIER_FIXUP_4088.xyw, _RESERVED_IDENTIFIER_FIXUP_2322, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4088.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3679 = _RESERVED_IDENTIFIER_FIXUP_2243;
    _RESERVED_IDENTIFIER_FIXUP_3679.x = _RESERVED_IDENTIFIER_FIXUP_2340.x;
    _RESERVED_IDENTIFIER_FIXUP_3679.y = _RESERVED_IDENTIFIER_FIXUP_2340.y;
    _RESERVED_IDENTIFIER_FIXUP_3679.z = _RESERVED_IDENTIFIER_FIXUP_2340.z;
    float _RESERVED_IDENTIFIER_FIXUP_2350 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2247.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3685 = _RESERVED_IDENTIFIER_FIXUP_2247;
    _RESERVED_IDENTIFIER_FIXUP_3685.z = _RESERVED_IDENTIFIER_FIXUP_2350;
    _RESERVED_IDENTIFIER_FIXUP_3685.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2350;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2360 = _RESERVED_IDENTIFIER_FIXUP_3685.xxxx * _RESERVED_IDENTIFIER_FIXUP_3667;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2372 = (_RESERVED_IDENTIFIER_FIXUP_3679 * _RESERVED_IDENTIFIER_FIXUP_3685.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3655 * _RESERVED_IDENTIFIER_FIXUP_3685.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2360);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3692 = _RESERVED_IDENTIFIER_FIXUP_2360;
    _RESERVED_IDENTIFIER_FIXUP_3692.x = _RESERVED_IDENTIFIER_FIXUP_1396;
    float _RESERVED_IDENTIFIER_FIXUP_2385 = clamp((_RESERVED_IDENTIFIER_FIXUP_1396 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3692.x = _RESERVED_IDENTIFIER_FIXUP_2385;
    float _RESERVED_IDENTIFIER_FIXUP_2391 = ((-_RESERVED_IDENTIFIER_FIXUP_2385) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3692.x = _RESERVED_IDENTIFIER_FIXUP_2391;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4073;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4067;
    if (_RESERVED_IDENTIFIER_FIXUP_2391 != (-_RESERVED_IDENTIFIER_FIXUP_2391))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2403 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2403.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2403.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2409 = hdLod5(param_56, param_57);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2413 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3904 = _RESERVED_IDENTIFIER_FIXUP_2409;
        _RESERVED_IDENTIFIER_FIXUP_3904.y = _RESERVED_IDENTIFIER_FIXUP_2413.x;
        _RESERVED_IDENTIFIER_FIXUP_3904.z = _RESERVED_IDENTIFIER_FIXUP_2413.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2423 = _RESERVED_IDENTIFIER_FIXUP_3904.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3908;
        _RESERVED_IDENTIFIER_FIXUP_3908.x = _RESERVED_IDENTIFIER_FIXUP_2423.x;
        _RESERVED_IDENTIFIER_FIXUP_3908.y = _RESERVED_IDENTIFIER_FIXUP_2423.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2430 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2434 = _RESERVED_IDENTIFIER_FIXUP_2430.y;
        _RESERVED_IDENTIFIER_FIXUP_3908.w = _RESERVED_IDENTIFIER_FIXUP_2434;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3908.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2434;
        float _RESERVED_IDENTIFIER_FIXUP_2445 = _RESERVED_IDENTIFIER_FIXUP_2409.x + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2445;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2452 = _RESERVED_IDENTIFIER_FIXUP_3904.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3921;
        _RESERVED_IDENTIFIER_FIXUP_3921.x = _RESERVED_IDENTIFIER_FIXUP_2452.x;
        _RESERVED_IDENTIFIER_FIXUP_3921.y = _RESERVED_IDENTIFIER_FIXUP_2452.y;
        _RESERVED_IDENTIFIER_FIXUP_3921.w = _RESERVED_IDENTIFIER_FIXUP_2434;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3921.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2434;
        float _RESERVED_IDENTIFIER_FIXUP_2474 = _RESERVED_IDENTIFIER_FIXUP_2445 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2474;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2481 = _RESERVED_IDENTIFIER_FIXUP_3904.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3934;
        _RESERVED_IDENTIFIER_FIXUP_3934.x = _RESERVED_IDENTIFIER_FIXUP_2481.x;
        _RESERVED_IDENTIFIER_FIXUP_3934.y = _RESERVED_IDENTIFIER_FIXUP_2481.y;
        _RESERVED_IDENTIFIER_FIXUP_3934.w = _RESERVED_IDENTIFIER_FIXUP_2434;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3934.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2434;
        float _RESERVED_IDENTIFIER_FIXUP_2503 = _RESERVED_IDENTIFIER_FIXUP_2474 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2503;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2510 = _RESERVED_IDENTIFIER_FIXUP_3904.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3947;
        _RESERVED_IDENTIFIER_FIXUP_3947.x = _RESERVED_IDENTIFIER_FIXUP_2510.x;
        _RESERVED_IDENTIFIER_FIXUP_3947.y = _RESERVED_IDENTIFIER_FIXUP_2510.y;
        _RESERVED_IDENTIFIER_FIXUP_3947.w = _RESERVED_IDENTIFIER_FIXUP_2434;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3947.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2434;
        float _RESERVED_IDENTIFIER_FIXUP_2532 = _RESERVED_IDENTIFIER_FIXUP_2503 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2532;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2539 = _RESERVED_IDENTIFIER_FIXUP_3904.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3960;
        _RESERVED_IDENTIFIER_FIXUP_3960.x = _RESERVED_IDENTIFIER_FIXUP_2539.x;
        _RESERVED_IDENTIFIER_FIXUP_3960.y = _RESERVED_IDENTIFIER_FIXUP_2539.y;
        _RESERVED_IDENTIFIER_FIXUP_3960.w = _RESERVED_IDENTIFIER_FIXUP_2434;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3960.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2434;
        float _RESERVED_IDENTIFIER_FIXUP_2561 = _RESERVED_IDENTIFIER_FIXUP_2532 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2561;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2568 = _RESERVED_IDENTIFIER_FIXUP_3904.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3973;
        _RESERVED_IDENTIFIER_FIXUP_3973.x = _RESERVED_IDENTIFIER_FIXUP_2568.x;
        _RESERVED_IDENTIFIER_FIXUP_3973.y = _RESERVED_IDENTIFIER_FIXUP_2568.y;
        _RESERVED_IDENTIFIER_FIXUP_3973.w = _RESERVED_IDENTIFIER_FIXUP_2434;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3973.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2434;
        float _RESERVED_IDENTIFIER_FIXUP_2590 = _RESERVED_IDENTIFIER_FIXUP_2561 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2590;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2597 = _RESERVED_IDENTIFIER_FIXUP_3904.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3986;
        _RESERVED_IDENTIFIER_FIXUP_3986.x = _RESERVED_IDENTIFIER_FIXUP_2597.x;
        _RESERVED_IDENTIFIER_FIXUP_3986.y = _RESERVED_IDENTIFIER_FIXUP_2597.y;
        _RESERVED_IDENTIFIER_FIXUP_3986.w = _RESERVED_IDENTIFIER_FIXUP_2434;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3986.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2434;
        float _RESERVED_IDENTIFIER_FIXUP_2619 = _RESERVED_IDENTIFIER_FIXUP_2590 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2619;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2626 = _RESERVED_IDENTIFIER_FIXUP_3904.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3999;
        _RESERVED_IDENTIFIER_FIXUP_3999.x = _RESERVED_IDENTIFIER_FIXUP_2626.x;
        _RESERVED_IDENTIFIER_FIXUP_3999.y = _RESERVED_IDENTIFIER_FIXUP_2626.y;
        _RESERVED_IDENTIFIER_FIXUP_3999.w = _RESERVED_IDENTIFIER_FIXUP_2434;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3999.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2434;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2643 = hdLod5(param_72, param_73);
        float _RESERVED_IDENTIFIER_FIXUP_2648 = _RESERVED_IDENTIFIER_FIXUP_2619 + _RESERVED_IDENTIFIER_FIXUP_2643.x;
        _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2648;
        _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2648 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4073 = _RESERVED_IDENTIFIER_FIXUP_2643;
        _RESERVED_IDENTIFIER_FIXUP_4067 = _RESERVED_IDENTIFIER_FIXUP_3904;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2661 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3692.y = _RESERVED_IDENTIFIER_FIXUP_2661;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4074;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4068;
        if (_RESERVED_IDENTIFIER_FIXUP_2661 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2670 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2680 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2682 = _RESERVED_IDENTIFIER_FIXUP_2680.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3844 = _RESERVED_IDENTIFIER_FIXUP_3692;
            _RESERVED_IDENTIFIER_FIXUP_3844.y = _RESERVED_IDENTIFIER_FIXUP_2682;
            _RESERVED_IDENTIFIER_FIXUP_3844.z = _RESERVED_IDENTIFIER_FIXUP_2680.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2690 = _RESERVED_IDENTIFIER_FIXUP_3844.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3848;
            _RESERVED_IDENTIFIER_FIXUP_3848.x = _RESERVED_IDENTIFIER_FIXUP_2690.x;
            _RESERVED_IDENTIFIER_FIXUP_3848.y = _RESERVED_IDENTIFIER_FIXUP_2690.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2697 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2701 = _RESERVED_IDENTIFIER_FIXUP_2697.y;
            _RESERVED_IDENTIFIER_FIXUP_3848.w = _RESERVED_IDENTIFIER_FIXUP_2701;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2670.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2670.w;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3848.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2701;
            float _RESERVED_IDENTIFIER_FIXUP_2712 = hdLod6(param_74, param_75).x + hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4094 = vec4(_RESERVED_IDENTIFIER_FIXUP_2391, _RESERVED_IDENTIFIER_FIXUP_2682, _RESERVED_IDENTIFIER_FIXUP_2680.y, _RESERVED_IDENTIFIER_FIXUP_2712);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2719 = _RESERVED_IDENTIFIER_FIXUP_4094.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3861;
            _RESERVED_IDENTIFIER_FIXUP_3861.x = _RESERVED_IDENTIFIER_FIXUP_2719.x;
            _RESERVED_IDENTIFIER_FIXUP_3861.y = _RESERVED_IDENTIFIER_FIXUP_2719.y;
            _RESERVED_IDENTIFIER_FIXUP_3861.w = _RESERVED_IDENTIFIER_FIXUP_2701;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3861.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2701;
            float _RESERVED_IDENTIFIER_FIXUP_2741 = _RESERVED_IDENTIFIER_FIXUP_2712 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_4094.w = _RESERVED_IDENTIFIER_FIXUP_2741;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2748 = _RESERVED_IDENTIFIER_FIXUP_4094.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3874;
            _RESERVED_IDENTIFIER_FIXUP_3874.x = _RESERVED_IDENTIFIER_FIXUP_2748.x;
            _RESERVED_IDENTIFIER_FIXUP_3874.y = _RESERVED_IDENTIFIER_FIXUP_2748.y;
            _RESERVED_IDENTIFIER_FIXUP_3874.w = _RESERVED_IDENTIFIER_FIXUP_2701;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3874.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2701;
            float _RESERVED_IDENTIFIER_FIXUP_2770 = _RESERVED_IDENTIFIER_FIXUP_2741 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_4094.w = _RESERVED_IDENTIFIER_FIXUP_2770;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2777 = _RESERVED_IDENTIFIER_FIXUP_4094.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3887;
            _RESERVED_IDENTIFIER_FIXUP_3887.x = _RESERVED_IDENTIFIER_FIXUP_2777.x;
            _RESERVED_IDENTIFIER_FIXUP_3887.y = _RESERVED_IDENTIFIER_FIXUP_2777.y;
            _RESERVED_IDENTIFIER_FIXUP_3887.w = _RESERVED_IDENTIFIER_FIXUP_2701;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3887.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2701;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2794 = hdLod6(param_82, param_83);
            float _RESERVED_IDENTIFIER_FIXUP_2799 = _RESERVED_IDENTIFIER_FIXUP_2770 + _RESERVED_IDENTIFIER_FIXUP_2794.x;
            _RESERVED_IDENTIFIER_FIXUP_4094.y = _RESERVED_IDENTIFIER_FIXUP_2799;
            _RESERVED_IDENTIFIER_FIXUP_4094.x = _RESERVED_IDENTIFIER_FIXUP_2799 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4074 = _RESERVED_IDENTIFIER_FIXUP_2794;
            _RESERVED_IDENTIFIER_FIXUP_4068 = _RESERVED_IDENTIFIER_FIXUP_4094;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2812 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3709 = _RESERVED_IDENTIFIER_FIXUP_3692;
            _RESERVED_IDENTIFIER_FIXUP_3709.y = _RESERVED_IDENTIFIER_FIXUP_2812;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4075;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4069;
            if (_RESERVED_IDENTIFIER_FIXUP_2812 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2821 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2831 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2833 = _RESERVED_IDENTIFIER_FIXUP_2831.x;
                _RESERVED_IDENTIFIER_FIXUP_3709.y = _RESERVED_IDENTIFIER_FIXUP_2833;
                _RESERVED_IDENTIFIER_FIXUP_3709.z = _RESERVED_IDENTIFIER_FIXUP_2831.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2841 = _RESERVED_IDENTIFIER_FIXUP_3709.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3788;
                _RESERVED_IDENTIFIER_FIXUP_3788.x = _RESERVED_IDENTIFIER_FIXUP_2841.x;
                _RESERVED_IDENTIFIER_FIXUP_3788.y = _RESERVED_IDENTIFIER_FIXUP_2841.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2848 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2852 = _RESERVED_IDENTIFIER_FIXUP_2848.y;
                _RESERVED_IDENTIFIER_FIXUP_3788.w = _RESERVED_IDENTIFIER_FIXUP_2852;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2821.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2821.w;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3788.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2852;
                float _RESERVED_IDENTIFIER_FIXUP_2863 = hdLod7(param_84, param_85).x + hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4093 = vec4(_RESERVED_IDENTIFIER_FIXUP_2391, _RESERVED_IDENTIFIER_FIXUP_2833, _RESERVED_IDENTIFIER_FIXUP_2831.y, _RESERVED_IDENTIFIER_FIXUP_2863);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2870 = _RESERVED_IDENTIFIER_FIXUP_4093.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3801;
                _RESERVED_IDENTIFIER_FIXUP_3801.x = _RESERVED_IDENTIFIER_FIXUP_2870.x;
                _RESERVED_IDENTIFIER_FIXUP_3801.y = _RESERVED_IDENTIFIER_FIXUP_2870.y;
                _RESERVED_IDENTIFIER_FIXUP_3801.w = _RESERVED_IDENTIFIER_FIXUP_2852;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3801.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2852;
                float _RESERVED_IDENTIFIER_FIXUP_2892 = _RESERVED_IDENTIFIER_FIXUP_2863 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_4093.w = _RESERVED_IDENTIFIER_FIXUP_2892;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2899 = _RESERVED_IDENTIFIER_FIXUP_4093.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3814;
                _RESERVED_IDENTIFIER_FIXUP_3814.x = _RESERVED_IDENTIFIER_FIXUP_2899.x;
                _RESERVED_IDENTIFIER_FIXUP_3814.y = _RESERVED_IDENTIFIER_FIXUP_2899.y;
                _RESERVED_IDENTIFIER_FIXUP_3814.w = _RESERVED_IDENTIFIER_FIXUP_2852;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3814.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2852;
                float _RESERVED_IDENTIFIER_FIXUP_2921 = _RESERVED_IDENTIFIER_FIXUP_2892 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_4093.w = _RESERVED_IDENTIFIER_FIXUP_2921;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2928 = _RESERVED_IDENTIFIER_FIXUP_4093.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3827;
                _RESERVED_IDENTIFIER_FIXUP_3827.x = _RESERVED_IDENTIFIER_FIXUP_2928.x;
                _RESERVED_IDENTIFIER_FIXUP_3827.y = _RESERVED_IDENTIFIER_FIXUP_2928.y;
                _RESERVED_IDENTIFIER_FIXUP_3827.w = _RESERVED_IDENTIFIER_FIXUP_2852;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3827.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2852;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2945 = hdLod7(param_92, param_93);
                float _RESERVED_IDENTIFIER_FIXUP_2950 = _RESERVED_IDENTIFIER_FIXUP_2921 + _RESERVED_IDENTIFIER_FIXUP_2945.x;
                _RESERVED_IDENTIFIER_FIXUP_4093.y = _RESERVED_IDENTIFIER_FIXUP_2950;
                _RESERVED_IDENTIFIER_FIXUP_4093.x = _RESERVED_IDENTIFIER_FIXUP_2950 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4075 = _RESERVED_IDENTIFIER_FIXUP_2945;
                _RESERVED_IDENTIFIER_FIXUP_4069 = _RESERVED_IDENTIFIER_FIXUP_4093;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2966 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2970 = _RESERVED_IDENTIFIER_FIXUP_2966.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2981 = vec4(_RESERVED_IDENTIFIER_FIXUP_2966.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2970).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4090 = vec4(_RESERVED_IDENTIFIER_FIXUP_2981 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2970);
                vec2 _RESERVED_IDENTIFIER_FIXUP_3018 = _RESERVED_IDENTIFIER_FIXUP_2981 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_4090;
                _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_3018.x;
                _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_3018.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3040 = _RESERVED_IDENTIFIER_FIXUP_2981 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3751 = _RESERVED_IDENTIFIER_FIXUP_3742;
                _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_3040.x;
                _RESERVED_IDENTIFIER_FIXUP_3751.y = _RESERVED_IDENTIFIER_FIXUP_3040.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3062 = _RESERVED_IDENTIFIER_FIXUP_2981 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3760 = _RESERVED_IDENTIFIER_FIXUP_3751;
                _RESERVED_IDENTIFIER_FIXUP_3760.x = _RESERVED_IDENTIFIER_FIXUP_3062.x;
                _RESERVED_IDENTIFIER_FIXUP_3760.y = _RESERVED_IDENTIFIER_FIXUP_3062.y;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3760.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2970;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3072 = hdLod8(param_94, param_95);
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_2981;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2970;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_4090.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2970;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3742.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2970;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3751.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_2970;
                float _RESERVED_IDENTIFIER_FIXUP_3077 = (((hdLod8(param_96, param_97).x + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x) + _RESERVED_IDENTIFIER_FIXUP_3072.x;
                float _RESERVED_IDENTIFIER_FIXUP_3085 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3771 = _RESERVED_IDENTIFIER_FIXUP_3072;
                _RESERVED_IDENTIFIER_FIXUP_3771.x = _RESERVED_IDENTIFIER_FIXUP_3085;
                float _RESERVED_IDENTIFIER_FIXUP_3091 = clamp((_RESERVED_IDENTIFIER_FIXUP_3085 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_3096 = (_RESERVED_IDENTIFIER_FIXUP_3077 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4075 = _RESERVED_IDENTIFIER_FIXUP_3771;
                _RESERVED_IDENTIFIER_FIXUP_4069 = vec4((_RESERVED_IDENTIFIER_FIXUP_3091 * _RESERVED_IDENTIFIER_FIXUP_3096) + 1.0, _RESERVED_IDENTIFIER_FIXUP_3091, _RESERVED_IDENTIFIER_FIXUP_3096, _RESERVED_IDENTIFIER_FIXUP_3077);
            }
            _RESERVED_IDENTIFIER_FIXUP_4074 = _RESERVED_IDENTIFIER_FIXUP_4075;
            _RESERVED_IDENTIFIER_FIXUP_4068 = _RESERVED_IDENTIFIER_FIXUP_4069;
        }
        _RESERVED_IDENTIFIER_FIXUP_4073 = _RESERVED_IDENTIFIER_FIXUP_4074;
        _RESERVED_IDENTIFIER_FIXUP_4067 = _RESERVED_IDENTIFIER_FIXUP_4068;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3111 = (_RESERVED_IDENTIFIER_FIXUP_4067.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4016 = _RESERVED_IDENTIFIER_FIXUP_4067;
    _RESERVED_IDENTIFIER_FIXUP_4016.y = _RESERVED_IDENTIFIER_FIXUP_3111;
    _RESERVED_IDENTIFIER_FIXUP_4016.y = _RESERVED_IDENTIFIER_FIXUP_3111;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3124 = _RESERVED_IDENTIFIER_FIXUP_2372.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4022 = _RESERVED_IDENTIFIER_FIXUP_4073;
    _RESERVED_IDENTIFIER_FIXUP_4022.x = _RESERVED_IDENTIFIER_FIXUP_3124.x;
    _RESERVED_IDENTIFIER_FIXUP_4022.y = _RESERVED_IDENTIFIER_FIXUP_3124.y;
    _RESERVED_IDENTIFIER_FIXUP_4022.z = _RESERVED_IDENTIFIER_FIXUP_3124.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3135 = _RESERVED_IDENTIFIER_FIXUP_4016.xxx * _RESERVED_IDENTIFIER_FIXUP_4022.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4095 = vec4(_RESERVED_IDENTIFIER_FIXUP_3135.x, _RESERVED_IDENTIFIER_FIXUP_3111, _RESERVED_IDENTIFIER_FIXUP_3135.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3149 = (_RESERVED_IDENTIFIER_FIXUP_2372.xyz * _RESERVED_IDENTIFIER_FIXUP_4095.yyy) + _RESERVED_IDENTIFIER_FIXUP_4095.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4034 = _RESERVED_IDENTIFIER_FIXUP_2372;
    _RESERVED_IDENTIFIER_FIXUP_4034.x = _RESERVED_IDENTIFIER_FIXUP_3149.x;
    _RESERVED_IDENTIFIER_FIXUP_4034.y = _RESERVED_IDENTIFIER_FIXUP_3149.y;
    _RESERVED_IDENTIFIER_FIXUP_4034.z = _RESERVED_IDENTIFIER_FIXUP_3149.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3162 = _RESERVED_IDENTIFIER_FIXUP_4034.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4040 = _RESERVED_IDENTIFIER_FIXUP_4034;
    _RESERVED_IDENTIFIER_FIXUP_4040.x = _RESERVED_IDENTIFIER_FIXUP_3162.x;
    _RESERVED_IDENTIFIER_FIXUP_4040.y = _RESERVED_IDENTIFIER_FIXUP_3162.y;
    _RESERVED_IDENTIFIER_FIXUP_4040.z = _RESERVED_IDENTIFIER_FIXUP_3162.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4040.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1111 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1120;
    if (_RESERVED_IDENTIFIER_FIXUP_1111)
    {
        _RESERVED_IDENTIFIER_FIXUP_1120 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1111;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1120)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1157 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3623.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1183 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3215;
    if (_RESERVED_IDENTIFIER_FIXUP_1157 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3215 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1157), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1183);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3215 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1183);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3215;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3111);
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
    vec3 hdB90 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB90.x;
    r4.y = hdB90.y;
    r4.z = hdB90.z;
    vec3 hdB105 = v0.xyz + v0.xyz;
    r5.x = hdB105.x;
    r5.y = hdB105.y;
    r5.z = hdB105.z;
    vec3 hdB116 = r0.xyz * r5.xyz;
    r6.x = hdB116.x;
    r6.y = hdB116.y;
    r6.z = hdB116.z;
    vec4 hdB125 = r0;
    vec3 hdB134 = mix(r6.xyz, hdB125.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB134.x;
    r0.y = hdB134.y;
    r0.z = hdB134.z;
    vec3 hdB145 = r1.xyz * r5.xyz;
    r6.x = hdB145.x;
    r6.y = hdB145.y;
    r6.z = hdB145.z;
    vec4 hdB154 = r1;
    vec3 hdB160 = mix(r6.xyz, hdB154.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB160.x;
    r1.y = hdB160.y;
    r1.z = hdB160.z;
    vec3 hdB171 = r2.xyz * r5.xyz;
    r4.x = hdB171.x;
    r4.y = hdB171.y;
    r4.w = hdB171.z;
    vec4 hdB181 = r2;
    vec3 hdB187 = mix(r4.xyw, hdB181.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB187.x;
    r2.y = hdB187.y;
    r2.z = hdB187.z;
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 = r3.xxxx * r1;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
        vec2 hdB270 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB270.x;
        r1.z = hdB270.y;
        vec2 hdB281 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB281.x;
        r2.y = hdB281.y;
        vec2 hdB289 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB289.x;
        r2.w = hdB289.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.x += r2.x;
        vec2 hdB312 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB312.x;
        r2.y = hdB312.y;
        vec2 hdB319 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB319.x;
        r2.w = hdB319.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.x += r2.x;
        vec2 hdB342 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB342.x;
        r2.y = hdB342.y;
        vec2 hdB349 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB349.x;
        r2.w = hdB349.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.x += r2.x;
        vec2 hdB372 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB372.x;
        r2.y = hdB372.y;
        vec2 hdB379 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB379.x;
        r2.w = hdB379.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.x += r2.x;
        vec2 hdB402 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB402.x;
        r2.y = hdB402.y;
        vec2 hdB409 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB409.x;
        r2.w = hdB409.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r1.x += r2.x;
        vec2 hdB432 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB432.x;
        r2.y = hdB432.y;
        vec2 hdB439 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB439.x;
        r2.w = hdB439.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r1.x += r2.x;
        vec2 hdB462 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB462.x;
        r2.y = hdB462.y;
        vec2 hdB469 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB469.x;
        r2.w = hdB469.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod5(param_18, param_19);
        r1.x += r2.x;
        vec2 hdB492 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB492.x;
        r2.y = hdB492.y;
        vec2 hdB499 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB499.x;
        r2.w = hdB499.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod5(param_20, param_21);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r2.xy;
            float param_23 = r2.w;
            r2 = hdLod6(param_22, param_23);
            vec2 hdB549 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB549.x;
            r1.z = hdB549.y;
            vec2 hdB559 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB559.x;
            r3.y = hdB559.y;
            vec2 hdB566 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB566.x;
            r3.w = hdB566.y;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod6(param_24, param_25);
            r1.w = r2.x + r3.x;
            vec2 hdB588 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB588.x;
            r2.y = hdB588.y;
            vec2 hdB595 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB595.x;
            r2.w = hdB595.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r1.w += r2.x;
            vec2 hdB617 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB617.x;
            r2.y = hdB617.y;
            vec2 hdB624 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB624.x;
            r2.w = hdB624.y;
            vec2 param_28 = r2.xy;
            float param_29 = r2.w;
            r2 = hdLod6(param_28, param_29);
            r1.w += r2.x;
            vec2 hdB646 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB646.x;
            r2.y = hdB646.y;
            vec2 hdB653 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB653.x;
            r2.w = hdB653.y;
            vec2 param_30 = r2.xy;
            float param_31 = r2.w;
            r2 = hdLod6(param_30, param_31);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = r2.xy;
                float param_33 = r2.w;
                r2 = hdLod7(param_32, param_33);
                vec2 hdB703 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB703.x;
                r1.z = hdB703.y;
                vec2 hdB713 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB713.x;
                r3.y = hdB713.y;
                vec2 hdB720 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB720.x;
                r3.w = hdB720.y;
                vec2 param_34 = r3.xy;
                float param_35 = r3.w;
                r3 = hdLod7(param_34, param_35);
                r1.w = r2.x + r3.x;
                vec2 hdB742 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB742.x;
                r2.y = hdB742.y;
                vec2 hdB749 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB749.x;
                r2.w = hdB749.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r1.w += r2.x;
                vec2 hdB771 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB771.x;
                r2.y = hdB771.y;
                vec2 hdB778 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB778.x;
                r2.w = hdB778.y;
                vec2 param_38 = r2.xy;
                float param_39 = r2.w;
                r2 = hdLod7(param_38, param_39);
                r1.w += r2.x;
                vec2 hdB800 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB800.x;
                r2.y = hdB800.y;
                vec2 hdB807 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB807.x;
                r2.w = hdB807.y;
                vec2 param_40 = r2.xy;
                float param_41 = r2.w;
                r2 = hdLod7(param_40, param_41);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 hdB839 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB839.x;
                r2.w = hdB839.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_42 = r2.xy;
                float param_43 = r2.w;
                r3 = hdLod8(param_42, param_43);
                vec2 hdB864 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB864.x;
                r4.y = hdB864.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r5 = hdLod8(param_44, param_45);
                r1.w = r3.x + r5.x;
                vec2 hdB892 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB892.x;
                r4.y = hdB892.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r1.w += r3.x;
                vec2 hdB914 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB914.x;
                r4.y = hdB914.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r3 = hdLod8(param_48, param_49);
                r1.w += r3.x;
                vec2 hdB936 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB936.x;
                r4.y = hdB936.y;
                vec2 param_50 = r4.xy;
                float param_51 = r4.w;
                r2 = hdLod8(param_50, param_51);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB993 = r0.www * v1.xyz;
    r2.x = hdB993.x;
    r2.y = hdB993.y;
    r2.z = hdB993.z;
    vec4 hdB1000 = r1;
    vec3 hdB1004 = hdB1000.xxx * r2.xyz;
    r1.x = hdB1004.x;
    r1.z = hdB1004.y;
    r1.w = hdB1004.z;
    vec4 hdB1011 = r0;
    vec3 hdB1018 = (hdB1011.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB1018.x;
    r0.y = hdB1018.y;
    r0.z = hdB1018.z;
    vec4 hdB1025 = r0;
    vec3 hdB1032 = hdB1025.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1032.x;
    r0.y = hdB1032.y;
    r0.z = hdB1032.z;
    vec3 hdB1047 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1047.x;
    oC0.y = hdB1047.y;
    oC0.z = hdB1047.z;
    oC0.w = 1.0;
    bool hdB1059 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1067;
    if (hdB1059)
    {
        hdB1067 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1067 = hdB1059;
    }
    if (hdB1067)
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
    bool _3800 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3810;
    if (_3800)
    {
        _3810 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3810 = _3800;
    }
    if (_3810)
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
        bool _3835 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3850;
        if (!_3835)
        {
            _3850 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3850 = _3835;
        }
        if (_3850)
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
