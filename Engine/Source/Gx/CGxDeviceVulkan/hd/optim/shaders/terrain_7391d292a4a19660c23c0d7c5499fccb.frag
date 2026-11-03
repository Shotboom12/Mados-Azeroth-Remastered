#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_3885;
vec4 _RESERVED_IDENTIFIER_FIXUP_3886;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _64 = hdOverride >= 0;
    bool _83;
    if (_64)
    {
        _83 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _83 = _64;
    }
    vec4 _84;
    if (_83)
    {
        _84 = vec4(float(hdOverride));
    }
    else
    {
        _84 = value;
    }
    return _84;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _101 = hdOverride >= 0;
    bool _111;
    if (_101)
    {
        _111 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _111 = _101;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _129 = hdOverride >= 0;
    bool _139;
    if (_129)
    {
        _139 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _157 = hdOverride >= 0;
    bool _166;
    if (_157)
    {
        _166 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _166 = _157;
    }
    vec4 _167;
    if (_166)
    {
        _167 = vec4(float(hdOverride));
    }
    else
    {
        _167 = value;
    }
    return _167;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _185 = hdOverride >= 0;
    bool _195;
    if (_185)
    {
        _195 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _195 = _185;
    }
    vec4 _196;
    if (_195)
    {
        _196 = vec4(float(hdOverride));
    }
    else
    {
        _196 = value;
    }
    return _196;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _214 = hdOverride >= 0;
    bool _224;
    if (_214)
    {
        _224 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _224 = _214;
    }
    vec4 _225;
    if (_224)
    {
        _225 = vec4(float(hdOverride));
    }
    else
    {
        _225 = value;
    }
    return _225;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _243 = hdOverride >= 0;
    bool _253;
    if (_243)
    {
        _253 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _253 = _243;
    }
    vec4 _254;
    if (_253)
    {
        _254 = vec4(float(hdOverride));
    }
    else
    {
        _254 = value;
    }
    return _254;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _272 = hdOverride >= 0;
    bool _282;
    if (_272)
    {
        _282 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _282 = _272;
    }
    vec4 _283;
    if (_282)
    {
        _283 = vec4(float(hdOverride));
    }
    else
    {
        _283 = value;
    }
    return _283;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1199 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1203 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1207 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1220 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3885).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1220 + _RESERVED_IDENTIFIER_FIXUP_1220;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3064 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3064.x = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_3064.y = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_3064.z = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1199.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1234 = _RESERVED_IDENTIFIER_FIXUP_1231 * _RESERVED_IDENTIFIER_FIXUP_3064.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3070 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3070.x = _RESERVED_IDENTIFIER_FIXUP_1234.x;
    _RESERVED_IDENTIFIER_FIXUP_3070.y = _RESERVED_IDENTIFIER_FIXUP_1234.y;
    _RESERVED_IDENTIFIER_FIXUP_3070.z = _RESERVED_IDENTIFIER_FIXUP_1234.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1248 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1218.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1249 = mix(_RESERVED_IDENTIFIER_FIXUP_3070.xyz, _RESERVED_IDENTIFIER_FIXUP_1231, _RESERVED_IDENTIFIER_FIXUP_1248);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3076 = _RESERVED_IDENTIFIER_FIXUP_1199;
    _RESERVED_IDENTIFIER_FIXUP_3076.x = _RESERVED_IDENTIFIER_FIXUP_1249.x;
    _RESERVED_IDENTIFIER_FIXUP_3076.y = _RESERVED_IDENTIFIER_FIXUP_1249.y;
    _RESERVED_IDENTIFIER_FIXUP_3076.z = _RESERVED_IDENTIFIER_FIXUP_1249.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_1203.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1260 = _RESERVED_IDENTIFIER_FIXUP_1257 * _RESERVED_IDENTIFIER_FIXUP_3064.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3070.x = _RESERVED_IDENTIFIER_FIXUP_1260.x;
    _RESERVED_IDENTIFIER_FIXUP_3070.y = _RESERVED_IDENTIFIER_FIXUP_1260.y;
    _RESERVED_IDENTIFIER_FIXUP_3070.z = _RESERVED_IDENTIFIER_FIXUP_1260.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1274 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1218.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1275 = mix(_RESERVED_IDENTIFIER_FIXUP_3070.xyz, _RESERVED_IDENTIFIER_FIXUP_1257, _RESERVED_IDENTIFIER_FIXUP_1274);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3088 = _RESERVED_IDENTIFIER_FIXUP_1203;
    _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_1275.x;
    _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_1275.y;
    _RESERVED_IDENTIFIER_FIXUP_3088.z = _RESERVED_IDENTIFIER_FIXUP_1275.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_1207.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_1283 * _RESERVED_IDENTIFIER_FIXUP_3064.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3070.x = _RESERVED_IDENTIFIER_FIXUP_1286.x;
    _RESERVED_IDENTIFIER_FIXUP_3070.y = _RESERVED_IDENTIFIER_FIXUP_1286.y;
    _RESERVED_IDENTIFIER_FIXUP_3070.z = _RESERVED_IDENTIFIER_FIXUP_1286.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1300 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1218.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1301 = mix(_RESERVED_IDENTIFIER_FIXUP_3070.xyz, _RESERVED_IDENTIFIER_FIXUP_1283, _RESERVED_IDENTIFIER_FIXUP_1300);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3100 = _RESERVED_IDENTIFIER_FIXUP_1207;
    _RESERVED_IDENTIFIER_FIXUP_3100.x = _RESERVED_IDENTIFIER_FIXUP_1301.x;
    _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1301.y;
    _RESERVED_IDENTIFIER_FIXUP_3100.z = _RESERVED_IDENTIFIER_FIXUP_1301.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1211.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1309 * _RESERVED_IDENTIFIER_FIXUP_3064.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3106 = _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_3106.x = _RESERVED_IDENTIFIER_FIXUP_1312.x;
    _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1312.y;
    _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_1312.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1327 = mix(_RESERVED_IDENTIFIER_FIXUP_3106.xyz, _RESERVED_IDENTIFIER_FIXUP_1309, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3106.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3112 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_3112.x = _RESERVED_IDENTIFIER_FIXUP_1327.x;
    _RESERVED_IDENTIFIER_FIXUP_3112.y = _RESERVED_IDENTIFIER_FIXUP_1327.y;
    _RESERVED_IDENTIFIER_FIXUP_3112.z = _RESERVED_IDENTIFIER_FIXUP_1327.z;
    float _RESERVED_IDENTIFIER_FIXUP_1337 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1215.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3118 = _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_3118.w = _RESERVED_IDENTIFIER_FIXUP_1337;
    _RESERVED_IDENTIFIER_FIXUP_3118.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1337;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_3118.xxxx * _RESERVED_IDENTIFIER_FIXUP_3088;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1365 = (_RESERVED_IDENTIFIER_FIXUP_3112 * _RESERVED_IDENTIFIER_FIXUP_3118.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3100 * _RESERVED_IDENTIFIER_FIXUP_3118.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3076 * _RESERVED_IDENTIFIER_FIXUP_3118.wwww) + _RESERVED_IDENTIFIER_FIXUP_1347));
    float _RESERVED_IDENTIFIER_FIXUP_1372 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3125 = _RESERVED_IDENTIFIER_FIXUP_1347;
    _RESERVED_IDENTIFIER_FIXUP_3125.x = _RESERVED_IDENTIFIER_FIXUP_1372;
    float _RESERVED_IDENTIFIER_FIXUP_1378 = clamp((_RESERVED_IDENTIFIER_FIXUP_1372 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3125.x = _RESERVED_IDENTIFIER_FIXUP_1378;
    float _RESERVED_IDENTIFIER_FIXUP_1384 = ((-_RESERVED_IDENTIFIER_FIXUP_1378) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3125.y = _RESERVED_IDENTIFIER_FIXUP_1384;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3888;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3887;
    if (_RESERVED_IDENTIFIER_FIXUP_1384 != (-_RESERVED_IDENTIFIER_FIXUP_1384))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1396 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3137 = _RESERVED_IDENTIFIER_FIXUP_3125;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1396.x;
        _RESERVED_IDENTIFIER_FIXUP_3137.z = _RESERVED_IDENTIFIER_FIXUP_1396.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1406 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3141;
        _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_1406.x;
        _RESERVED_IDENTIFIER_FIXUP_3141.y = _RESERVED_IDENTIFIER_FIXUP_1406.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1416 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3145;
        _RESERVED_IDENTIFIER_FIXUP_3145.x = _RESERVED_IDENTIFIER_FIXUP_1416.x;
        _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1416.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1426 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3149;
        _RESERVED_IDENTIFIER_FIXUP_3149.x = _RESERVED_IDENTIFIER_FIXUP_1426.x;
        _RESERVED_IDENTIFIER_FIXUP_3149.y = _RESERVED_IDENTIFIER_FIXUP_1426.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1436 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3153;
        _RESERVED_IDENTIFIER_FIXUP_3153.x = _RESERVED_IDENTIFIER_FIXUP_1436.x;
        _RESERVED_IDENTIFIER_FIXUP_3153.y = _RESERVED_IDENTIFIER_FIXUP_1436.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1444 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1444.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1444.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1450 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3141.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3145.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3149.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3153.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3141.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1450.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3145.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1450.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3149.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1450.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1507 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1450 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3153.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1513 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1513;
        float _RESERVED_IDENTIFIER_FIXUP_1518 = float(_RESERVED_IDENTIFIER_FIXUP_1513 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1518;
        float _RESERVED_IDENTIFIER_FIXUP_1521 = dot(_RESERVED_IDENTIFIER_FIXUP_1507, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3137.z = _RESERVED_IDENTIFIER_FIXUP_1521;
        float _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_1518 + _RESERVED_IDENTIFIER_FIXUP_1521;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1527;
        float _RESERVED_IDENTIFIER_FIXUP_1532 = (_RESERVED_IDENTIFIER_FIXUP_1527 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1532;
        _RESERVED_IDENTIFIER_FIXUP_3137.x = (_RESERVED_IDENTIFIER_FIXUP_1378 * _RESERVED_IDENTIFIER_FIXUP_1532) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3888 = _RESERVED_IDENTIFIER_FIXUP_1507;
        _RESERVED_IDENTIFIER_FIXUP_3887 = _RESERVED_IDENTIFIER_FIXUP_3137;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3135 = _RESERVED_IDENTIFIER_FIXUP_3125;
        _RESERVED_IDENTIFIER_FIXUP_3135.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3888 = _RESERVED_IDENTIFIER_FIXUP_3100;
        _RESERVED_IDENTIFIER_FIXUP_3887 = _RESERVED_IDENTIFIER_FIXUP_3135;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1550 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3209 = _RESERVED_IDENTIFIER_FIXUP_3887;
    _RESERVED_IDENTIFIER_FIXUP_3209.y = _RESERVED_IDENTIFIER_FIXUP_1550;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3891;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3889;
    if (_RESERVED_IDENTIFIER_FIXUP_1550 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1559 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3370 = _RESERVED_IDENTIFIER_FIXUP_3209;
        _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_1559.x;
        _RESERVED_IDENTIFIER_FIXUP_3370.z = _RESERVED_IDENTIFIER_FIXUP_1559.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1569 = _RESERVED_IDENTIFIER_FIXUP_3370.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3374;
        _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_1569.x;
        _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_1569.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1579 = _RESERVED_IDENTIFIER_FIXUP_3370.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3378;
        _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_1579.x;
        _RESERVED_IDENTIFIER_FIXUP_3378.y = _RESERVED_IDENTIFIER_FIXUP_1579.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1589 = _RESERVED_IDENTIFIER_FIXUP_3370.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3382;
        _RESERVED_IDENTIFIER_FIXUP_3382.x = _RESERVED_IDENTIFIER_FIXUP_1589.x;
        _RESERVED_IDENTIFIER_FIXUP_3382.y = _RESERVED_IDENTIFIER_FIXUP_1589.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1599 = _RESERVED_IDENTIFIER_FIXUP_3370.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3386;
        _RESERVED_IDENTIFIER_FIXUP_3386.x = _RESERVED_IDENTIFIER_FIXUP_1599.x;
        _RESERVED_IDENTIFIER_FIXUP_3386.y = _RESERVED_IDENTIFIER_FIXUP_1599.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1607 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1607.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1607.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1613 = hdLod6(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_3374.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3378.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3382.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3386.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3374.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1613.y = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3378.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1613.z = hdLod6(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3382.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1613.w = hdLod6(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1670 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1613 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3386.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1676 = hdLod6(param_22, param_23).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_1676;
        float _RESERVED_IDENTIFIER_FIXUP_1681 = float(_RESERVED_IDENTIFIER_FIXUP_1676 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_1681;
        float _RESERVED_IDENTIFIER_FIXUP_1684 = dot(_RESERVED_IDENTIFIER_FIXUP_1670, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3370.z = _RESERVED_IDENTIFIER_FIXUP_1684;
        float _RESERVED_IDENTIFIER_FIXUP_1690 = _RESERVED_IDENTIFIER_FIXUP_1681 + _RESERVED_IDENTIFIER_FIXUP_1684;
        _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_1690;
        _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_1690 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3891 = _RESERVED_IDENTIFIER_FIXUP_1670;
        _RESERVED_IDENTIFIER_FIXUP_3889 = _RESERVED_IDENTIFIER_FIXUP_3370;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1703 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3214 = _RESERVED_IDENTIFIER_FIXUP_3209;
        _RESERVED_IDENTIFIER_FIXUP_3214.z = _RESERVED_IDENTIFIER_FIXUP_1703;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3892;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3890;
        if (_RESERVED_IDENTIFIER_FIXUP_1703 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1712 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3304 = _RESERVED_IDENTIFIER_FIXUP_3214;
            _RESERVED_IDENTIFIER_FIXUP_3304.z = _RESERVED_IDENTIFIER_FIXUP_1712.x;
            _RESERVED_IDENTIFIER_FIXUP_3304.w = _RESERVED_IDENTIFIER_FIXUP_1712.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1722 = _RESERVED_IDENTIFIER_FIXUP_3304.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3308;
            _RESERVED_IDENTIFIER_FIXUP_3308.x = _RESERVED_IDENTIFIER_FIXUP_1722.x;
            _RESERVED_IDENTIFIER_FIXUP_3308.y = _RESERVED_IDENTIFIER_FIXUP_1722.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1732 = _RESERVED_IDENTIFIER_FIXUP_3304.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3312;
            _RESERVED_IDENTIFIER_FIXUP_3312.x = _RESERVED_IDENTIFIER_FIXUP_1732.x;
            _RESERVED_IDENTIFIER_FIXUP_3312.y = _RESERVED_IDENTIFIER_FIXUP_1732.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1742 = _RESERVED_IDENTIFIER_FIXUP_3304.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3316;
            _RESERVED_IDENTIFIER_FIXUP_3316.x = _RESERVED_IDENTIFIER_FIXUP_1742.x;
            _RESERVED_IDENTIFIER_FIXUP_3316.y = _RESERVED_IDENTIFIER_FIXUP_1742.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1752 = _RESERVED_IDENTIFIER_FIXUP_3304.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3320;
            _RESERVED_IDENTIFIER_FIXUP_3320.x = _RESERVED_IDENTIFIER_FIXUP_1752.x;
            _RESERVED_IDENTIFIER_FIXUP_3320.y = _RESERVED_IDENTIFIER_FIXUP_1752.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1760 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1760.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1760.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1766 = hdLod7(param_24, param_25);
            _RESERVED_IDENTIFIER_FIXUP_3308.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3312.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3316.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3320.w = 0.0;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3308.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1766.y = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3312.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1766.z = hdLod7(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3316.xy;
            float param_31 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1766.w = hdLod7(param_30, param_31).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1823 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1766 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3320.xy;
            float param_33 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1829 = hdLod7(param_32, param_33).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3304.z = _RESERVED_IDENTIFIER_FIXUP_1829;
            float _RESERVED_IDENTIFIER_FIXUP_1834 = float(_RESERVED_IDENTIFIER_FIXUP_1829 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3304.z = _RESERVED_IDENTIFIER_FIXUP_1834;
            float _RESERVED_IDENTIFIER_FIXUP_1837 = dot(_RESERVED_IDENTIFIER_FIXUP_1823, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3304.w = _RESERVED_IDENTIFIER_FIXUP_1837;
            float _RESERVED_IDENTIFIER_FIXUP_1843 = _RESERVED_IDENTIFIER_FIXUP_1834 + _RESERVED_IDENTIFIER_FIXUP_1837;
            _RESERVED_IDENTIFIER_FIXUP_3304.z = _RESERVED_IDENTIFIER_FIXUP_1843;
            _RESERVED_IDENTIFIER_FIXUP_3304.y = _RESERVED_IDENTIFIER_FIXUP_1843 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3892 = _RESERVED_IDENTIFIER_FIXUP_1823;
            _RESERVED_IDENTIFIER_FIXUP_3890 = _RESERVED_IDENTIFIER_FIXUP_3304;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3218 = _RESERVED_IDENTIFIER_FIXUP_3888;
            _RESERVED_IDENTIFIER_FIXUP_3218.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3218.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1859 = (_RESERVED_IDENTIFIER_FIXUP_3218.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3223;
            _RESERVED_IDENTIFIER_FIXUP_3223.x = _RESERVED_IDENTIFIER_FIXUP_1859.x;
            _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_1859.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1869 = _RESERVED_IDENTIFIER_FIXUP_3223.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3227;
            _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_1869.x;
            _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_1869.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1879 = _RESERVED_IDENTIFIER_FIXUP_3223.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3231;
            _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_1879.x;
            _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_1879.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1889 = _RESERVED_IDENTIFIER_FIXUP_3223.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3235;
            _RESERVED_IDENTIFIER_FIXUP_3235.x = _RESERVED_IDENTIFIER_FIXUP_1889.x;
            _RESERVED_IDENTIFIER_FIXUP_3235.y = _RESERVED_IDENTIFIER_FIXUP_1889.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1899 = _RESERVED_IDENTIFIER_FIXUP_3223.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3239;
            _RESERVED_IDENTIFIER_FIXUP_3239.x = _RESERVED_IDENTIFIER_FIXUP_1899.x;
            _RESERVED_IDENTIFIER_FIXUP_3239.y = _RESERVED_IDENTIFIER_FIXUP_1899.y;
            _RESERVED_IDENTIFIER_FIXUP_3223.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3223.xy;
            float param_35 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1913 = hdLod8(param_34, param_35);
            _RESERVED_IDENTIFIER_FIXUP_3227.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3231.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3235.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3239.w = 0.0;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3227.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1913.y = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3231.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1913.z = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3235.xy;
            float param_41 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1913.w = hdLod8(param_40, param_41).x;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3239.xy;
            float param_43 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1976 = hdLod8(param_42, param_43).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3279 = _RESERVED_IDENTIFIER_FIXUP_3214;
            _RESERVED_IDENTIFIER_FIXUP_3279.z = _RESERVED_IDENTIFIER_FIXUP_1976;
            float _RESERVED_IDENTIFIER_FIXUP_1981 = float(_RESERVED_IDENTIFIER_FIXUP_1976 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3279.z = _RESERVED_IDENTIFIER_FIXUP_1981;
            float _RESERVED_IDENTIFIER_FIXUP_1984 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1913 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3279.w = _RESERVED_IDENTIFIER_FIXUP_1984;
            float _RESERVED_IDENTIFIER_FIXUP_1990 = _RESERVED_IDENTIFIER_FIXUP_1981 + _RESERVED_IDENTIFIER_FIXUP_1984;
            _RESERVED_IDENTIFIER_FIXUP_3279.z = _RESERVED_IDENTIFIER_FIXUP_1990;
            float _RESERVED_IDENTIFIER_FIXUP_1998 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3279.w = _RESERVED_IDENTIFIER_FIXUP_1998;
            float _RESERVED_IDENTIFIER_FIXUP_2004 = clamp((_RESERVED_IDENTIFIER_FIXUP_1998 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3279.w = _RESERVED_IDENTIFIER_FIXUP_2004;
            float _RESERVED_IDENTIFIER_FIXUP_2009 = (_RESERVED_IDENTIFIER_FIXUP_1990 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3279.z = _RESERVED_IDENTIFIER_FIXUP_2009;
            _RESERVED_IDENTIFIER_FIXUP_3279.y = (_RESERVED_IDENTIFIER_FIXUP_2004 * _RESERVED_IDENTIFIER_FIXUP_2009) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3892 = _RESERVED_IDENTIFIER_FIXUP_3218;
            _RESERVED_IDENTIFIER_FIXUP_3890 = _RESERVED_IDENTIFIER_FIXUP_3279;
        }
        _RESERVED_IDENTIFIER_FIXUP_3891 = _RESERVED_IDENTIFIER_FIXUP_3892;
        _RESERVED_IDENTIFIER_FIXUP_3889 = _RESERVED_IDENTIFIER_FIXUP_3890;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2024 = min(_RESERVED_IDENTIFIER_FIXUP_3889.y, _RESERVED_IDENTIFIER_FIXUP_3889.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3438 = _RESERVED_IDENTIFIER_FIXUP_3891;
    _RESERVED_IDENTIFIER_FIXUP_3438.x = _RESERVED_IDENTIFIER_FIXUP_2024;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3911 = vec4((_RESERVED_IDENTIFIER_FIXUP_2024 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2046 = _RESERVED_IDENTIFIER_FIXUP_3438.xxx * _RESERVED_IDENTIFIER_FIXUP_3911.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3449 = _RESERVED_IDENTIFIER_FIXUP_3911;
    _RESERVED_IDENTIFIER_FIXUP_3449.y = _RESERVED_IDENTIFIER_FIXUP_2046.x;
    _RESERVED_IDENTIFIER_FIXUP_3449.z = _RESERVED_IDENTIFIER_FIXUP_2046.y;
    _RESERVED_IDENTIFIER_FIXUP_3449.w = _RESERVED_IDENTIFIER_FIXUP_2046.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2060 = (_RESERVED_IDENTIFIER_FIXUP_1365.xyz * _RESERVED_IDENTIFIER_FIXUP_3449.xxx) + _RESERVED_IDENTIFIER_FIXUP_3449.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3455 = _RESERVED_IDENTIFIER_FIXUP_1365;
    _RESERVED_IDENTIFIER_FIXUP_3455.x = _RESERVED_IDENTIFIER_FIXUP_2060.x;
    _RESERVED_IDENTIFIER_FIXUP_3455.y = _RESERVED_IDENTIFIER_FIXUP_2060.y;
    _RESERVED_IDENTIFIER_FIXUP_3455.z = _RESERVED_IDENTIFIER_FIXUP_2060.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2073 = _RESERVED_IDENTIFIER_FIXUP_3455.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3461 = _RESERVED_IDENTIFIER_FIXUP_3455;
    _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_2073.x;
    _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_2073.y;
    _RESERVED_IDENTIFIER_FIXUP_3461.z = _RESERVED_IDENTIFIER_FIXUP_2073.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2130 = OptTex0( texcoord0.xyz);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2134 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2138 = hdTex2(param_45);
    vec2 param_46 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2142 = hdTex3(param_46);
    vec2 param_47 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2146 = hdTex4(param_47);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2154 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3475 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_2154.x;
    _RESERVED_IDENTIFIER_FIXUP_3475.y = _RESERVED_IDENTIFIER_FIXUP_2154.y;
    _RESERVED_IDENTIFIER_FIXUP_3475.z = _RESERVED_IDENTIFIER_FIXUP_2154.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2162 = _RESERVED_IDENTIFIER_FIXUP_2130.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2165 = _RESERVED_IDENTIFIER_FIXUP_2162 * _RESERVED_IDENTIFIER_FIXUP_3475.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3481 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2165.x;
    _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2165.y;
    _RESERVED_IDENTIFIER_FIXUP_3481.z = _RESERVED_IDENTIFIER_FIXUP_2165.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2180 = mix(_RESERVED_IDENTIFIER_FIXUP_3481.xyz, _RESERVED_IDENTIFIER_FIXUP_2162, _RESERVED_IDENTIFIER_FIXUP_1248);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3487 = _RESERVED_IDENTIFIER_FIXUP_2130;
    _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_2180.x;
    _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2180.y;
    _RESERVED_IDENTIFIER_FIXUP_3487.z = _RESERVED_IDENTIFIER_FIXUP_2180.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2188 = _RESERVED_IDENTIFIER_FIXUP_2134.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2191 = _RESERVED_IDENTIFIER_FIXUP_2188 * _RESERVED_IDENTIFIER_FIXUP_3475.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2191.x;
    _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2191.y;
    _RESERVED_IDENTIFIER_FIXUP_3481.z = _RESERVED_IDENTIFIER_FIXUP_2191.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2206 = mix(_RESERVED_IDENTIFIER_FIXUP_3481.xyz, _RESERVED_IDENTIFIER_FIXUP_2188, _RESERVED_IDENTIFIER_FIXUP_1274);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3499 = _RESERVED_IDENTIFIER_FIXUP_2134;
    _RESERVED_IDENTIFIER_FIXUP_3499.x = _RESERVED_IDENTIFIER_FIXUP_2206.x;
    _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_2206.y;
    _RESERVED_IDENTIFIER_FIXUP_3499.z = _RESERVED_IDENTIFIER_FIXUP_2206.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2214 = _RESERVED_IDENTIFIER_FIXUP_2138.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2217 = _RESERVED_IDENTIFIER_FIXUP_2214 * _RESERVED_IDENTIFIER_FIXUP_3475.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2217.x;
    _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2217.y;
    _RESERVED_IDENTIFIER_FIXUP_3481.z = _RESERVED_IDENTIFIER_FIXUP_2217.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2232 = mix(_RESERVED_IDENTIFIER_FIXUP_3481.xyz, _RESERVED_IDENTIFIER_FIXUP_2214, _RESERVED_IDENTIFIER_FIXUP_1300);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3511 = _RESERVED_IDENTIFIER_FIXUP_2138;
    _RESERVED_IDENTIFIER_FIXUP_3511.x = _RESERVED_IDENTIFIER_FIXUP_2232.x;
    _RESERVED_IDENTIFIER_FIXUP_3511.y = _RESERVED_IDENTIFIER_FIXUP_2232.y;
    _RESERVED_IDENTIFIER_FIXUP_3511.z = _RESERVED_IDENTIFIER_FIXUP_2232.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2240 = _RESERVED_IDENTIFIER_FIXUP_2142.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2243 = _RESERVED_IDENTIFIER_FIXUP_2240 * _RESERVED_IDENTIFIER_FIXUP_3475.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3517 = _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_3517.x = _RESERVED_IDENTIFIER_FIXUP_2243.x;
    _RESERVED_IDENTIFIER_FIXUP_3517.y = _RESERVED_IDENTIFIER_FIXUP_2243.y;
    _RESERVED_IDENTIFIER_FIXUP_3517.z = _RESERVED_IDENTIFIER_FIXUP_2243.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2258 = mix(_RESERVED_IDENTIFIER_FIXUP_3517.xyz, _RESERVED_IDENTIFIER_FIXUP_2240, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3517.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3523 = _RESERVED_IDENTIFIER_FIXUP_2142;
    _RESERVED_IDENTIFIER_FIXUP_3523.x = _RESERVED_IDENTIFIER_FIXUP_2258.x;
    _RESERVED_IDENTIFIER_FIXUP_3523.y = _RESERVED_IDENTIFIER_FIXUP_2258.y;
    _RESERVED_IDENTIFIER_FIXUP_3523.z = _RESERVED_IDENTIFIER_FIXUP_2258.z;
    float _RESERVED_IDENTIFIER_FIXUP_2268 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2146.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3529 = _RESERVED_IDENTIFIER_FIXUP_2146;
    _RESERVED_IDENTIFIER_FIXUP_3529.w = _RESERVED_IDENTIFIER_FIXUP_2268;
    _RESERVED_IDENTIFIER_FIXUP_3529.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2268;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2278 = _RESERVED_IDENTIFIER_FIXUP_3529.xxxx * _RESERVED_IDENTIFIER_FIXUP_3499;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2296 = (_RESERVED_IDENTIFIER_FIXUP_3523 * _RESERVED_IDENTIFIER_FIXUP_3529.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3511 * _RESERVED_IDENTIFIER_FIXUP_3529.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3487 * _RESERVED_IDENTIFIER_FIXUP_3529.wwww) + _RESERVED_IDENTIFIER_FIXUP_2278));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3536 = _RESERVED_IDENTIFIER_FIXUP_2278;
    _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_1372;
    float _RESERVED_IDENTIFIER_FIXUP_2309 = clamp((_RESERVED_IDENTIFIER_FIXUP_1372 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2309;
    float _RESERVED_IDENTIFIER_FIXUP_2315 = ((-_RESERVED_IDENTIFIER_FIXUP_2309) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3536.y = _RESERVED_IDENTIFIER_FIXUP_2315;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3900;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3899;
    if (_RESERVED_IDENTIFIER_FIXUP_2315 != (-_RESERVED_IDENTIFIER_FIXUP_2315))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2327 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3548 = _RESERVED_IDENTIFIER_FIXUP_3536;
        _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_2327.x;
        _RESERVED_IDENTIFIER_FIXUP_3548.z = _RESERVED_IDENTIFIER_FIXUP_2327.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2337 = _RESERVED_IDENTIFIER_FIXUP_3548.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3552;
        _RESERVED_IDENTIFIER_FIXUP_3552.x = _RESERVED_IDENTIFIER_FIXUP_2337.x;
        _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_2337.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2347 = _RESERVED_IDENTIFIER_FIXUP_3548.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3556;
        _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2347.x;
        _RESERVED_IDENTIFIER_FIXUP_3556.y = _RESERVED_IDENTIFIER_FIXUP_2347.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2357 = _RESERVED_IDENTIFIER_FIXUP_3548.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3560;
        _RESERVED_IDENTIFIER_FIXUP_3560.x = _RESERVED_IDENTIFIER_FIXUP_2357.x;
        _RESERVED_IDENTIFIER_FIXUP_3560.y = _RESERVED_IDENTIFIER_FIXUP_2357.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2367 = _RESERVED_IDENTIFIER_FIXUP_3548.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3564;
        _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2367.x;
        _RESERVED_IDENTIFIER_FIXUP_3564.y = _RESERVED_IDENTIFIER_FIXUP_2367.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2375 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2375.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2375.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2381 = hdLod5(param_48, param_49);
        _RESERVED_IDENTIFIER_FIXUP_3552.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3556.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3560.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3564.w = 0.0;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3552.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2381.y = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3556.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2381.z = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3560.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2381.w = hdLod5(param_54, param_55).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2438 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2381 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3564.xy;
        float param_57 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2444 = hdLod5(param_56, param_57).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_2444;
        float _RESERVED_IDENTIFIER_FIXUP_2449 = float(_RESERVED_IDENTIFIER_FIXUP_2444 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_2449;
        float _RESERVED_IDENTIFIER_FIXUP_2452 = dot(_RESERVED_IDENTIFIER_FIXUP_2438, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3548.z = _RESERVED_IDENTIFIER_FIXUP_2452;
        float _RESERVED_IDENTIFIER_FIXUP_2458 = _RESERVED_IDENTIFIER_FIXUP_2449 + _RESERVED_IDENTIFIER_FIXUP_2452;
        _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_2458;
        float _RESERVED_IDENTIFIER_FIXUP_2463 = (_RESERVED_IDENTIFIER_FIXUP_2458 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_2463;
        _RESERVED_IDENTIFIER_FIXUP_3548.x = (_RESERVED_IDENTIFIER_FIXUP_2309 * _RESERVED_IDENTIFIER_FIXUP_2463) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3900 = _RESERVED_IDENTIFIER_FIXUP_2438;
        _RESERVED_IDENTIFIER_FIXUP_3899 = _RESERVED_IDENTIFIER_FIXUP_3548;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3546 = _RESERVED_IDENTIFIER_FIXUP_3536;
        _RESERVED_IDENTIFIER_FIXUP_3546.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3900 = _RESERVED_IDENTIFIER_FIXUP_3511;
        _RESERVED_IDENTIFIER_FIXUP_3899 = _RESERVED_IDENTIFIER_FIXUP_3546;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3620 = _RESERVED_IDENTIFIER_FIXUP_3899;
    _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_1550;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3903;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3901;
    if (_RESERVED_IDENTIFIER_FIXUP_1550 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2490 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3781 = _RESERVED_IDENTIFIER_FIXUP_3620;
        _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2490.x;
        _RESERVED_IDENTIFIER_FIXUP_3781.z = _RESERVED_IDENTIFIER_FIXUP_2490.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2500 = _RESERVED_IDENTIFIER_FIXUP_3781.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3785;
        _RESERVED_IDENTIFIER_FIXUP_3785.x = _RESERVED_IDENTIFIER_FIXUP_2500.x;
        _RESERVED_IDENTIFIER_FIXUP_3785.y = _RESERVED_IDENTIFIER_FIXUP_2500.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2510 = _RESERVED_IDENTIFIER_FIXUP_3781.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3789;
        _RESERVED_IDENTIFIER_FIXUP_3789.x = _RESERVED_IDENTIFIER_FIXUP_2510.x;
        _RESERVED_IDENTIFIER_FIXUP_3789.y = _RESERVED_IDENTIFIER_FIXUP_2510.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2520 = _RESERVED_IDENTIFIER_FIXUP_3781.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3793;
        _RESERVED_IDENTIFIER_FIXUP_3793.x = _RESERVED_IDENTIFIER_FIXUP_2520.x;
        _RESERVED_IDENTIFIER_FIXUP_3793.y = _RESERVED_IDENTIFIER_FIXUP_2520.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2530 = _RESERVED_IDENTIFIER_FIXUP_3781.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3797;
        _RESERVED_IDENTIFIER_FIXUP_3797.x = _RESERVED_IDENTIFIER_FIXUP_2530.x;
        _RESERVED_IDENTIFIER_FIXUP_3797.y = _RESERVED_IDENTIFIER_FIXUP_2530.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2538 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2538.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2538.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2544 = hdLod6(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3785.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3789.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3793.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3797.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3785.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2544.y = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3789.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2544.z = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3793.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2544.w = hdLod6(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2601 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2544 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3797.xy;
        float param_67 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2607 = hdLod6(param_66, param_67).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2607;
        float _RESERVED_IDENTIFIER_FIXUP_2612 = float(_RESERVED_IDENTIFIER_FIXUP_2607 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2612;
        float _RESERVED_IDENTIFIER_FIXUP_2615 = dot(_RESERVED_IDENTIFIER_FIXUP_2601, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3781.z = _RESERVED_IDENTIFIER_FIXUP_2615;
        float _RESERVED_IDENTIFIER_FIXUP_2621 = _RESERVED_IDENTIFIER_FIXUP_2612 + _RESERVED_IDENTIFIER_FIXUP_2615;
        _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2621;
        _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2621 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3903 = _RESERVED_IDENTIFIER_FIXUP_2601;
        _RESERVED_IDENTIFIER_FIXUP_3901 = _RESERVED_IDENTIFIER_FIXUP_3781;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2634 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3625 = _RESERVED_IDENTIFIER_FIXUP_3620;
        _RESERVED_IDENTIFIER_FIXUP_3625.z = _RESERVED_IDENTIFIER_FIXUP_2634;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3904;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3902;
        if (_RESERVED_IDENTIFIER_FIXUP_2634 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2643 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3715 = _RESERVED_IDENTIFIER_FIXUP_3625;
            _RESERVED_IDENTIFIER_FIXUP_3715.z = _RESERVED_IDENTIFIER_FIXUP_2643.x;
            _RESERVED_IDENTIFIER_FIXUP_3715.w = _RESERVED_IDENTIFIER_FIXUP_2643.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2653 = _RESERVED_IDENTIFIER_FIXUP_3715.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3719;
            _RESERVED_IDENTIFIER_FIXUP_3719.x = _RESERVED_IDENTIFIER_FIXUP_2653.x;
            _RESERVED_IDENTIFIER_FIXUP_3719.y = _RESERVED_IDENTIFIER_FIXUP_2653.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2663 = _RESERVED_IDENTIFIER_FIXUP_3715.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3723;
            _RESERVED_IDENTIFIER_FIXUP_3723.x = _RESERVED_IDENTIFIER_FIXUP_2663.x;
            _RESERVED_IDENTIFIER_FIXUP_3723.y = _RESERVED_IDENTIFIER_FIXUP_2663.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2673 = _RESERVED_IDENTIFIER_FIXUP_3715.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3727;
            _RESERVED_IDENTIFIER_FIXUP_3727.x = _RESERVED_IDENTIFIER_FIXUP_2673.x;
            _RESERVED_IDENTIFIER_FIXUP_3727.y = _RESERVED_IDENTIFIER_FIXUP_2673.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2683 = _RESERVED_IDENTIFIER_FIXUP_3715.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3731;
            _RESERVED_IDENTIFIER_FIXUP_3731.x = _RESERVED_IDENTIFIER_FIXUP_2683.x;
            _RESERVED_IDENTIFIER_FIXUP_3731.y = _RESERVED_IDENTIFIER_FIXUP_2683.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2691 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2691.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2691.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2697 = hdLod7(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3719.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3723.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3727.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3731.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3719.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2697.y = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3723.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2697.z = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3727.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2697.w = hdLod7(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2754 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2697 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3731.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2760 = hdLod7(param_76, param_77).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3715.z = _RESERVED_IDENTIFIER_FIXUP_2760;
            float _RESERVED_IDENTIFIER_FIXUP_2765 = float(_RESERVED_IDENTIFIER_FIXUP_2760 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3715.z = _RESERVED_IDENTIFIER_FIXUP_2765;
            float _RESERVED_IDENTIFIER_FIXUP_2768 = dot(_RESERVED_IDENTIFIER_FIXUP_2754, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3715.w = _RESERVED_IDENTIFIER_FIXUP_2768;
            float _RESERVED_IDENTIFIER_FIXUP_2774 = _RESERVED_IDENTIFIER_FIXUP_2765 + _RESERVED_IDENTIFIER_FIXUP_2768;
            _RESERVED_IDENTIFIER_FIXUP_3715.z = _RESERVED_IDENTIFIER_FIXUP_2774;
            _RESERVED_IDENTIFIER_FIXUP_3715.y = _RESERVED_IDENTIFIER_FIXUP_2774 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3904 = _RESERVED_IDENTIFIER_FIXUP_2754;
            _RESERVED_IDENTIFIER_FIXUP_3902 = _RESERVED_IDENTIFIER_FIXUP_3715;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3629 = _RESERVED_IDENTIFIER_FIXUP_3900;
            _RESERVED_IDENTIFIER_FIXUP_3629.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3629.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2790 = (_RESERVED_IDENTIFIER_FIXUP_3629.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3634;
            _RESERVED_IDENTIFIER_FIXUP_3634.x = _RESERVED_IDENTIFIER_FIXUP_2790.x;
            _RESERVED_IDENTIFIER_FIXUP_3634.y = _RESERVED_IDENTIFIER_FIXUP_2790.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2800 = _RESERVED_IDENTIFIER_FIXUP_3634.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3638;
            _RESERVED_IDENTIFIER_FIXUP_3638.x = _RESERVED_IDENTIFIER_FIXUP_2800.x;
            _RESERVED_IDENTIFIER_FIXUP_3638.y = _RESERVED_IDENTIFIER_FIXUP_2800.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2810 = _RESERVED_IDENTIFIER_FIXUP_3634.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3642;
            _RESERVED_IDENTIFIER_FIXUP_3642.x = _RESERVED_IDENTIFIER_FIXUP_2810.x;
            _RESERVED_IDENTIFIER_FIXUP_3642.y = _RESERVED_IDENTIFIER_FIXUP_2810.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2820 = _RESERVED_IDENTIFIER_FIXUP_3634.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3646;
            _RESERVED_IDENTIFIER_FIXUP_3646.x = _RESERVED_IDENTIFIER_FIXUP_2820.x;
            _RESERVED_IDENTIFIER_FIXUP_3646.y = _RESERVED_IDENTIFIER_FIXUP_2820.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2830 = _RESERVED_IDENTIFIER_FIXUP_3634.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3650;
            _RESERVED_IDENTIFIER_FIXUP_3650.x = _RESERVED_IDENTIFIER_FIXUP_2830.x;
            _RESERVED_IDENTIFIER_FIXUP_3650.y = _RESERVED_IDENTIFIER_FIXUP_2830.y;
            _RESERVED_IDENTIFIER_FIXUP_3634.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3634.xy;
            float param_79 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2844 = hdLod8(param_78, param_79);
            _RESERVED_IDENTIFIER_FIXUP_3638.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3642.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3646.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3650.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3638.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2844.y = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3642.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2844.z = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3646.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2844.w = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3650.xy;
            float param_87 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2907 = hdLod8(param_86, param_87).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3690 = _RESERVED_IDENTIFIER_FIXUP_3625;
            _RESERVED_IDENTIFIER_FIXUP_3690.z = _RESERVED_IDENTIFIER_FIXUP_2907;
            float _RESERVED_IDENTIFIER_FIXUP_2912 = float(_RESERVED_IDENTIFIER_FIXUP_2907 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3690.z = _RESERVED_IDENTIFIER_FIXUP_2912;
            float _RESERVED_IDENTIFIER_FIXUP_2915 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2844 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3690.w = _RESERVED_IDENTIFIER_FIXUP_2915;
            float _RESERVED_IDENTIFIER_FIXUP_2921 = _RESERVED_IDENTIFIER_FIXUP_2912 + _RESERVED_IDENTIFIER_FIXUP_2915;
            _RESERVED_IDENTIFIER_FIXUP_3690.z = _RESERVED_IDENTIFIER_FIXUP_2921;
            float _RESERVED_IDENTIFIER_FIXUP_2929 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3690.w = _RESERVED_IDENTIFIER_FIXUP_2929;
            float _RESERVED_IDENTIFIER_FIXUP_2935 = clamp((_RESERVED_IDENTIFIER_FIXUP_2929 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3690.w = _RESERVED_IDENTIFIER_FIXUP_2935;
            float _RESERVED_IDENTIFIER_FIXUP_2940 = (_RESERVED_IDENTIFIER_FIXUP_2921 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3690.z = _RESERVED_IDENTIFIER_FIXUP_2940;
            _RESERVED_IDENTIFIER_FIXUP_3690.y = (_RESERVED_IDENTIFIER_FIXUP_2935 * _RESERVED_IDENTIFIER_FIXUP_2940) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3904 = _RESERVED_IDENTIFIER_FIXUP_3629;
            _RESERVED_IDENTIFIER_FIXUP_3902 = _RESERVED_IDENTIFIER_FIXUP_3690;
        }
        _RESERVED_IDENTIFIER_FIXUP_3903 = _RESERVED_IDENTIFIER_FIXUP_3904;
        _RESERVED_IDENTIFIER_FIXUP_3901 = _RESERVED_IDENTIFIER_FIXUP_3902;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2955 = min(_RESERVED_IDENTIFIER_FIXUP_3901.y, _RESERVED_IDENTIFIER_FIXUP_3901.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3849 = _RESERVED_IDENTIFIER_FIXUP_3903;
    _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2955;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3913 = vec4((_RESERVED_IDENTIFIER_FIXUP_2955 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2296.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2977 = _RESERVED_IDENTIFIER_FIXUP_3849.xxx * _RESERVED_IDENTIFIER_FIXUP_3913.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3860 = _RESERVED_IDENTIFIER_FIXUP_3913;
    _RESERVED_IDENTIFIER_FIXUP_3860.y = _RESERVED_IDENTIFIER_FIXUP_2977.x;
    _RESERVED_IDENTIFIER_FIXUP_3860.z = _RESERVED_IDENTIFIER_FIXUP_2977.y;
    _RESERVED_IDENTIFIER_FIXUP_3860.w = _RESERVED_IDENTIFIER_FIXUP_2977.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2991 = (_RESERVED_IDENTIFIER_FIXUP_2296.xyz * _RESERVED_IDENTIFIER_FIXUP_3860.xxx) + _RESERVED_IDENTIFIER_FIXUP_3860.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3866 = _RESERVED_IDENTIFIER_FIXUP_2296;
    _RESERVED_IDENTIFIER_FIXUP_3866.x = _RESERVED_IDENTIFIER_FIXUP_2991.x;
    _RESERVED_IDENTIFIER_FIXUP_3866.y = _RESERVED_IDENTIFIER_FIXUP_2991.y;
    _RESERVED_IDENTIFIER_FIXUP_3866.z = _RESERVED_IDENTIFIER_FIXUP_2991.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3004 = _RESERVED_IDENTIFIER_FIXUP_3866.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3872 = _RESERVED_IDENTIFIER_FIXUP_3866;
    _RESERVED_IDENTIFIER_FIXUP_3872.x = _RESERVED_IDENTIFIER_FIXUP_3004.x;
    _RESERVED_IDENTIFIER_FIXUP_3872.y = _RESERVED_IDENTIFIER_FIXUP_3004.y;
    _RESERVED_IDENTIFIER_FIXUP_3872.z = _RESERVED_IDENTIFIER_FIXUP_3004.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3872.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1058 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1067;
    if (_RESERVED_IDENTIFIER_FIXUP_1058)
    {
        _RESERVED_IDENTIFIER_FIXUP_1067 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1067 = _RESERVED_IDENTIFIER_FIXUP_1058;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1067)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1104 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3461.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1130 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3057;
    if (_RESERVED_IDENTIFIER_FIXUP_1104 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3057 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1104), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1130);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3057 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1130);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3057;
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    vec2 param_3 = v4.wz;
    r4 = hdTex4(param_3);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 hdB103 = v0.xyz + v0.xyz;
    r6.x = hdB103.x;
    r6.y = hdB103.y;
    r6.z = hdB103.z;
    vec3 hdB118 = r0.xyz * r6.xyz;
    r7.x = hdB118.x;
    r7.y = hdB118.y;
    r7.z = hdB118.z;
    vec4 hdB127 = r0;
    vec3 hdB136 = mix(r7.xyz, hdB127.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB136.x;
    r0.y = hdB136.y;
    r0.z = hdB136.z;
    vec3 hdB147 = r1.xyz * r6.xyz;
    r7.x = hdB147.x;
    r7.y = hdB147.y;
    r7.z = hdB147.z;
    vec4 hdB156 = r1;
    vec3 hdB162 = mix(r7.xyz, hdB156.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB162.x;
    r1.y = hdB162.y;
    r1.z = hdB162.z;
    vec3 hdB173 = r2.xyz * r6.xyz;
    r7.x = hdB173.x;
    r7.y = hdB173.y;
    r7.z = hdB173.z;
    vec4 hdB182 = r2;
    vec3 hdB188 = mix(r7.xyz, hdB182.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB188.x;
    r2.y = hdB188.y;
    r2.z = hdB188.z;
    vec3 hdB199 = r3.xyz * r6.xyz;
    r5.x = hdB199.x;
    r5.y = hdB199.y;
    r5.z = hdB199.z;
    vec4 hdB208 = r3;
    vec3 hdB214 = mix(r5.xyz, hdB208.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB214.x;
    r3.y = hdB214.y;
    r3.z = hdB214.z;
    r4.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r4.w = (-r4.w) + 1.0;
    r1 = r4.xxxx * r1;
    r0 = (r0 * r4.wwww) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB291 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB291.x;
        r1.z = hdB291.y;
        vec2 hdB302 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB302.x;
        r2.y = hdB302.y;
        vec2 hdB313 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB313.x;
        r3.y = hdB313.y;
        vec2 hdB324 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB324.x;
        r4.y = hdB324.y;
        vec2 hdB335 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB335.x;
        r5.y = hdB335.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r6.xy;
        float param_5 = r6.w;
        r6 = hdLod5(param_4, param_5);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_10 = r4.xy;
        float param_11 = r4.w;
        r4 = hdLod5(param_10, param_11);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_12 = r5.xy;
        float param_13 = r5.w;
        r5 = hdLod5(param_12, param_13);
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
        vec2 hdB465 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB465.x;
        r1.z = hdB465.y;
        vec2 hdB475 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB475.x;
        r2.y = hdB475.y;
        vec2 hdB485 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB485.x;
        r3.y = hdB485.y;
        vec2 hdB495 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB495.x;
        r4.y = hdB495.y;
        vec2 hdB505 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB505.x;
        r5.y = hdB505.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = r6.xy;
        float param_15 = r6.w;
        r6 = hdLod6(param_14, param_15);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod6(param_16, param_17);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_18 = r3.xy;
        float param_19 = r3.w;
        r3 = hdLod6(param_18, param_19);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_20 = r4.xy;
        float param_21 = r4.w;
        r4 = hdLod6(param_20, param_21);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_22 = r5.xy;
        float param_23 = r5.w;
        r5 = hdLod6(param_22, param_23);
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
            vec2 hdB620 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB620.x;
            r1.w = hdB620.y;
            vec2 hdB630 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB630.x;
            r2.y = hdB630.y;
            vec2 hdB640 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB640.x;
            r3.y = hdB640.y;
            vec2 hdB650 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB650.x;
            r4.y = hdB650.y;
            vec2 hdB660 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB660.x;
            r5.y = hdB660.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r6.xy;
            float param_25 = r6.w;
            r6 = hdLod7(param_24, param_25);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod7(param_26, param_27);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_30 = r4.xy;
            float param_31 = r4.w;
            r4 = hdLod7(param_30, param_31);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_32 = r5.xy;
            float param_33 = r5.w;
            r5 = hdLod7(param_32, param_33);
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
            vec2 hdB768 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB768.x;
            r3.y = hdB768.y;
            vec2 hdB778 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB778.x;
            r4.y = hdB778.y;
            vec2 hdB788 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB788.x;
            r5.y = hdB788.y;
            vec2 hdB798 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB798.x;
            r6.y = hdB798.y;
            vec2 hdB808 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB808.x;
            r7.y = hdB808.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_34 = r3.xy;
            float param_35 = r3.w;
            r3 = hdLod8(param_34, param_35);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r4 = hdLod8(param_36, param_37);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_38 = r5.xy;
            float param_39 = r5.w;
            r5 = hdLod8(param_38, param_39);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_40 = r6.xy;
            float param_41 = r6.w;
            r6 = hdLod8(param_40, param_41);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_42 = r7.xy;
            float param_43 = r7.w;
            r7 = hdLod8(param_42, param_43);
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
    vec3 hdB947 = r0.www * v1.xyz;
    r1.y = hdB947.x;
    r1.z = hdB947.y;
    r1.w = hdB947.z;
    vec4 hdB956 = r1;
    vec3 hdB958 = r2.xxx * hdB956.yzw;
    r1.y = hdB958.x;
    r1.z = hdB958.y;
    r1.w = hdB958.z;
    vec4 hdB965 = r0;
    vec3 hdB972 = (hdB965.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB972.x;
    r0.y = hdB972.y;
    r0.z = hdB972.z;
    vec4 hdB979 = r0;
    vec3 hdB986 = hdB979.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB986.x;
    r0.y = hdB986.y;
    r0.z = hdB986.z;
    vec3 hdB1001 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1001.x;
    oC0.y = hdB1001.y;
    oC0.z = hdB1001.z;
    oC0.w = 1.0;
    bool hdB1013 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1021;
    if (hdB1013)
    {
        hdB1021 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1021 = hdB1013;
    }
    if (hdB1021)
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
    bool _3555 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3565;
    if (_3555)
    {
        _3565 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3565 = _3555;
    }
    if (_3565)
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
        bool _3590 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3605;
        if (!_3590)
        {
            _3605 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3605 = _3590;
        }
        if (_3605)
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
