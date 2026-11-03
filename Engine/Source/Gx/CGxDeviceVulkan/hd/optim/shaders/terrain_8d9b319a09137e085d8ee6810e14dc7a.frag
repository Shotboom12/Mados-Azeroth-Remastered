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
float _RESERVED_IDENTIFIER_FIXUP_3740;
vec4 _RESERVED_IDENTIFIER_FIXUP_3741;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1174 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1182 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1186 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1190 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1195 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3740).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_1195 + _RESERVED_IDENTIFIER_FIXUP_1195;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2987;
    _RESERVED_IDENTIFIER_FIXUP_2987.x = _RESERVED_IDENTIFIER_FIXUP_1198.x;
    _RESERVED_IDENTIFIER_FIXUP_2987.y = _RESERVED_IDENTIFIER_FIXUP_1198.y;
    _RESERVED_IDENTIFIER_FIXUP_2987.z = _RESERVED_IDENTIFIER_FIXUP_1198.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1206 = _RESERVED_IDENTIFIER_FIXUP_1174.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_1206 * _RESERVED_IDENTIFIER_FIXUP_2987.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2993;
    _RESERVED_IDENTIFIER_FIXUP_2993.x = _RESERVED_IDENTIFIER_FIXUP_1209.x;
    _RESERVED_IDENTIFIER_FIXUP_2993.y = _RESERVED_IDENTIFIER_FIXUP_1209.y;
    _RESERVED_IDENTIFIER_FIXUP_2993.z = _RESERVED_IDENTIFIER_FIXUP_1209.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1223 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1193.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1224 = mix(_RESERVED_IDENTIFIER_FIXUP_2993.xyz, _RESERVED_IDENTIFIER_FIXUP_1206, _RESERVED_IDENTIFIER_FIXUP_1223);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2999 = _RESERVED_IDENTIFIER_FIXUP_1174;
    _RESERVED_IDENTIFIER_FIXUP_2999.x = _RESERVED_IDENTIFIER_FIXUP_1224.x;
    _RESERVED_IDENTIFIER_FIXUP_2999.y = _RESERVED_IDENTIFIER_FIXUP_1224.y;
    _RESERVED_IDENTIFIER_FIXUP_2999.z = _RESERVED_IDENTIFIER_FIXUP_1224.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1232 = _RESERVED_IDENTIFIER_FIXUP_1178.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_1232 * _RESERVED_IDENTIFIER_FIXUP_2987.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3005;
    _RESERVED_IDENTIFIER_FIXUP_3005.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
    _RESERVED_IDENTIFIER_FIXUP_3005.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
    _RESERVED_IDENTIFIER_FIXUP_3005.z = _RESERVED_IDENTIFIER_FIXUP_1235.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1249 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1193.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1250 = mix(_RESERVED_IDENTIFIER_FIXUP_3005.xyz, _RESERVED_IDENTIFIER_FIXUP_1232, _RESERVED_IDENTIFIER_FIXUP_1249);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3011 = _RESERVED_IDENTIFIER_FIXUP_1178;
    _RESERVED_IDENTIFIER_FIXUP_3011.x = _RESERVED_IDENTIFIER_FIXUP_1250.x;
    _RESERVED_IDENTIFIER_FIXUP_3011.y = _RESERVED_IDENTIFIER_FIXUP_1250.y;
    _RESERVED_IDENTIFIER_FIXUP_3011.z = _RESERVED_IDENTIFIER_FIXUP_1250.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_1182.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_1258 * _RESERVED_IDENTIFIER_FIXUP_2987.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3017;
    _RESERVED_IDENTIFIER_FIXUP_3017.x = _RESERVED_IDENTIFIER_FIXUP_1261.x;
    _RESERVED_IDENTIFIER_FIXUP_3017.y = _RESERVED_IDENTIFIER_FIXUP_1261.y;
    _RESERVED_IDENTIFIER_FIXUP_3017.z = _RESERVED_IDENTIFIER_FIXUP_1261.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1275 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1193.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1276 = mix(_RESERVED_IDENTIFIER_FIXUP_3017.xyz, _RESERVED_IDENTIFIER_FIXUP_1258, _RESERVED_IDENTIFIER_FIXUP_1275);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3023 = _RESERVED_IDENTIFIER_FIXUP_1182;
    _RESERVED_IDENTIFIER_FIXUP_3023.x = _RESERVED_IDENTIFIER_FIXUP_1276.x;
    _RESERVED_IDENTIFIER_FIXUP_3023.y = _RESERVED_IDENTIFIER_FIXUP_1276.y;
    _RESERVED_IDENTIFIER_FIXUP_3023.z = _RESERVED_IDENTIFIER_FIXUP_1276.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1284 = _RESERVED_IDENTIFIER_FIXUP_1186.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_1284 * _RESERVED_IDENTIFIER_FIXUP_2987.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3029 = _RESERVED_IDENTIFIER_FIXUP_1193;
    _RESERVED_IDENTIFIER_FIXUP_3029.x = _RESERVED_IDENTIFIER_FIXUP_1287.x;
    _RESERVED_IDENTIFIER_FIXUP_3029.y = _RESERVED_IDENTIFIER_FIXUP_1287.y;
    _RESERVED_IDENTIFIER_FIXUP_3029.z = _RESERVED_IDENTIFIER_FIXUP_1287.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1302 = mix(_RESERVED_IDENTIFIER_FIXUP_3029.xyz, _RESERVED_IDENTIFIER_FIXUP_1284, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3029.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3035 = _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_3035.x = _RESERVED_IDENTIFIER_FIXUP_1302.x;
    _RESERVED_IDENTIFIER_FIXUP_3035.y = _RESERVED_IDENTIFIER_FIXUP_1302.y;
    _RESERVED_IDENTIFIER_FIXUP_3035.z = _RESERVED_IDENTIFIER_FIXUP_1302.z;
    float _RESERVED_IDENTIFIER_FIXUP_1312 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1190.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3041 = _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_3041.w = _RESERVED_IDENTIFIER_FIXUP_1312;
    float _RESERVED_IDENTIFIER_FIXUP_1317 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1312;
    _RESERVED_IDENTIFIER_FIXUP_3041.w = _RESERVED_IDENTIFIER_FIXUP_1317;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1322 = _RESERVED_IDENTIFIER_FIXUP_3041.xxxx * _RESERVED_IDENTIFIER_FIXUP_3011;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1340 = (_RESERVED_IDENTIFIER_FIXUP_3035 * _RESERVED_IDENTIFIER_FIXUP_3041.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3023 * _RESERVED_IDENTIFIER_FIXUP_3041.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2999 * _RESERVED_IDENTIFIER_FIXUP_3041.wwww) + _RESERVED_IDENTIFIER_FIXUP_1322));
    float _RESERVED_IDENTIFIER_FIXUP_1347 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3048 = _RESERVED_IDENTIFIER_FIXUP_1322;
    _RESERVED_IDENTIFIER_FIXUP_3048.x = _RESERVED_IDENTIFIER_FIXUP_1347;
    float _RESERVED_IDENTIFIER_FIXUP_1353 = clamp((_RESERVED_IDENTIFIER_FIXUP_1347 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3048.x = _RESERVED_IDENTIFIER_FIXUP_1353;
    float _RESERVED_IDENTIFIER_FIXUP_1359 = ((-_RESERVED_IDENTIFIER_FIXUP_1353) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_1359;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3742;
    if (_RESERVED_IDENTIFIER_FIXUP_1359 != (-_RESERVED_IDENTIFIER_FIXUP_1359))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1371 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1381 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_1381.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3061 = _RESERVED_IDENTIFIER_FIXUP_3048;
        _RESERVED_IDENTIFIER_FIXUP_3061.y = _RESERVED_IDENTIFIER_FIXUP_1383;
        _RESERVED_IDENTIFIER_FIXUP_3061.z = _RESERVED_IDENTIFIER_FIXUP_1381.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_3061.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3065;
        _RESERVED_IDENTIFIER_FIXUP_3065.x = _RESERVED_IDENTIFIER_FIXUP_1391.x;
        _RESERVED_IDENTIFIER_FIXUP_3065.y = _RESERVED_IDENTIFIER_FIXUP_1391.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1398 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1402 = _RESERVED_IDENTIFIER_FIXUP_1398.y;
        _RESERVED_IDENTIFIER_FIXUP_3065.w = _RESERVED_IDENTIFIER_FIXUP_1402;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1371.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1371.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3065.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1402;
        float _RESERVED_IDENTIFIER_FIXUP_1413 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3768 = vec4(_RESERVED_IDENTIFIER_FIXUP_1353, _RESERVED_IDENTIFIER_FIXUP_1383, _RESERVED_IDENTIFIER_FIXUP_1381.y, _RESERVED_IDENTIFIER_FIXUP_1413);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_3768.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3078;
        _RESERVED_IDENTIFIER_FIXUP_3078.x = _RESERVED_IDENTIFIER_FIXUP_1420.x;
        _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1420.y;
        _RESERVED_IDENTIFIER_FIXUP_3078.w = _RESERVED_IDENTIFIER_FIXUP_1402;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3078.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1402;
        float _RESERVED_IDENTIFIER_FIXUP_1442 = _RESERVED_IDENTIFIER_FIXUP_1413 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3768.w = _RESERVED_IDENTIFIER_FIXUP_1442;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_3768.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3091;
        _RESERVED_IDENTIFIER_FIXUP_3091.x = _RESERVED_IDENTIFIER_FIXUP_1449.x;
        _RESERVED_IDENTIFIER_FIXUP_3091.y = _RESERVED_IDENTIFIER_FIXUP_1449.y;
        _RESERVED_IDENTIFIER_FIXUP_3091.w = _RESERVED_IDENTIFIER_FIXUP_1402;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3091.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1402;
        float _RESERVED_IDENTIFIER_FIXUP_1471 = _RESERVED_IDENTIFIER_FIXUP_1442 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3768.w = _RESERVED_IDENTIFIER_FIXUP_1471;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1478 = _RESERVED_IDENTIFIER_FIXUP_3768.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3104;
        _RESERVED_IDENTIFIER_FIXUP_3104.x = _RESERVED_IDENTIFIER_FIXUP_1478.x;
        _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_1478.y;
        _RESERVED_IDENTIFIER_FIXUP_3104.w = _RESERVED_IDENTIFIER_FIXUP_1402;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3104.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1402;
        float _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_1471 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3768.y = _RESERVED_IDENTIFIER_FIXUP_1500;
        float _RESERVED_IDENTIFIER_FIXUP_1505 = (_RESERVED_IDENTIFIER_FIXUP_1500 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3768.y = _RESERVED_IDENTIFIER_FIXUP_1505;
        _RESERVED_IDENTIFIER_FIXUP_3768.x = (_RESERVED_IDENTIFIER_FIXUP_1353 * _RESERVED_IDENTIFIER_FIXUP_1505) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3768;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3058 = _RESERVED_IDENTIFIER_FIXUP_3048;
        _RESERVED_IDENTIFIER_FIXUP_3058.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3058;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1523 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3126 = _RESERVED_IDENTIFIER_FIXUP_3742;
    _RESERVED_IDENTIFIER_FIXUP_3126.y = _RESERVED_IDENTIFIER_FIXUP_1523;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3747;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3745;
    if (_RESERVED_IDENTIFIER_FIXUP_1523 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1532 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1542 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3266 = _RESERVED_IDENTIFIER_FIXUP_3126;
        _RESERVED_IDENTIFIER_FIXUP_3266.y = _RESERVED_IDENTIFIER_FIXUP_1542.x;
        _RESERVED_IDENTIFIER_FIXUP_3266.z = _RESERVED_IDENTIFIER_FIXUP_1542.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1552 = _RESERVED_IDENTIFIER_FIXUP_3266.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3270;
        _RESERVED_IDENTIFIER_FIXUP_3270.x = _RESERVED_IDENTIFIER_FIXUP_1552.x;
        _RESERVED_IDENTIFIER_FIXUP_3270.y = _RESERVED_IDENTIFIER_FIXUP_1552.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1559 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1563 = _RESERVED_IDENTIFIER_FIXUP_1559.y;
        _RESERVED_IDENTIFIER_FIXUP_3270.w = _RESERVED_IDENTIFIER_FIXUP_1563;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1532.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1532.w;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3270.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1563;
        float _RESERVED_IDENTIFIER_FIXUP_1574 = hdLod6(param_14, param_15).x + hdLod6(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3266.w = _RESERVED_IDENTIFIER_FIXUP_1574;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_3266.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3283;
        _RESERVED_IDENTIFIER_FIXUP_3283.x = _RESERVED_IDENTIFIER_FIXUP_1581.x;
        _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_1581.y;
        _RESERVED_IDENTIFIER_FIXUP_3283.w = _RESERVED_IDENTIFIER_FIXUP_1563;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3283.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1563;
        float _RESERVED_IDENTIFIER_FIXUP_1603 = _RESERVED_IDENTIFIER_FIXUP_1574 + hdLod6(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3266.w = _RESERVED_IDENTIFIER_FIXUP_1603;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1610 = _RESERVED_IDENTIFIER_FIXUP_3266.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3296;
        _RESERVED_IDENTIFIER_FIXUP_3296.x = _RESERVED_IDENTIFIER_FIXUP_1610.x;
        _RESERVED_IDENTIFIER_FIXUP_3296.y = _RESERVED_IDENTIFIER_FIXUP_1610.y;
        _RESERVED_IDENTIFIER_FIXUP_3296.w = _RESERVED_IDENTIFIER_FIXUP_1563;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3296.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1563;
        float _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_1603 + hdLod6(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_3266.w = _RESERVED_IDENTIFIER_FIXUP_1632;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1639 = _RESERVED_IDENTIFIER_FIXUP_3266.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3309;
        _RESERVED_IDENTIFIER_FIXUP_3309.x = _RESERVED_IDENTIFIER_FIXUP_1639.x;
        _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_1639.y;
        _RESERVED_IDENTIFIER_FIXUP_3309.w = _RESERVED_IDENTIFIER_FIXUP_1563;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3309.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1563;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1656 = hdLod6(param_22, param_23);
        float _RESERVED_IDENTIFIER_FIXUP_1661 = _RESERVED_IDENTIFIER_FIXUP_1632 + _RESERVED_IDENTIFIER_FIXUP_1656.x;
        _RESERVED_IDENTIFIER_FIXUP_3266.y = _RESERVED_IDENTIFIER_FIXUP_1661;
        _RESERVED_IDENTIFIER_FIXUP_3266.y = _RESERVED_IDENTIFIER_FIXUP_1661 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3747 = _RESERVED_IDENTIFIER_FIXUP_1656;
        _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_3266;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1674 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3131 = _RESERVED_IDENTIFIER_FIXUP_3126;
        _RESERVED_IDENTIFIER_FIXUP_3131.z = _RESERVED_IDENTIFIER_FIXUP_1674;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3748;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3746;
        if (_RESERVED_IDENTIFIER_FIXUP_1674 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1683 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1683.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1683.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1689 = hdLod7(param_24, param_25);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1693 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3206 = _RESERVED_IDENTIFIER_FIXUP_3131;
            _RESERVED_IDENTIFIER_FIXUP_3206.z = _RESERVED_IDENTIFIER_FIXUP_1693.x;
            _RESERVED_IDENTIFIER_FIXUP_3206.w = _RESERVED_IDENTIFIER_FIXUP_1693.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1703 = _RESERVED_IDENTIFIER_FIXUP_3206.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3210;
            _RESERVED_IDENTIFIER_FIXUP_3210.x = _RESERVED_IDENTIFIER_FIXUP_1703.x;
            _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_1703.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1710 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1714 = _RESERVED_IDENTIFIER_FIXUP_1710.y;
            _RESERVED_IDENTIFIER_FIXUP_3210.w = _RESERVED_IDENTIFIER_FIXUP_1714;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3210.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1714;
            float _RESERVED_IDENTIFIER_FIXUP_1725 = _RESERVED_IDENTIFIER_FIXUP_1689.x + hdLod7(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3221 = _RESERVED_IDENTIFIER_FIXUP_1689;
            _RESERVED_IDENTIFIER_FIXUP_3221.x = _RESERVED_IDENTIFIER_FIXUP_1725;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1732 = _RESERVED_IDENTIFIER_FIXUP_3206.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3223;
            _RESERVED_IDENTIFIER_FIXUP_3223.x = _RESERVED_IDENTIFIER_FIXUP_1732.x;
            _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_1732.y;
            _RESERVED_IDENTIFIER_FIXUP_3223.w = _RESERVED_IDENTIFIER_FIXUP_1714;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3223.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1714;
            float _RESERVED_IDENTIFIER_FIXUP_1754 = _RESERVED_IDENTIFIER_FIXUP_1725 + hdLod7(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_3221.x = _RESERVED_IDENTIFIER_FIXUP_1754;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1761 = _RESERVED_IDENTIFIER_FIXUP_3206.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3236;
            _RESERVED_IDENTIFIER_FIXUP_3236.x = _RESERVED_IDENTIFIER_FIXUP_1761.x;
            _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_1761.y;
            _RESERVED_IDENTIFIER_FIXUP_3236.w = _RESERVED_IDENTIFIER_FIXUP_1714;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3236.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1714;
            float _RESERVED_IDENTIFIER_FIXUP_1783 = _RESERVED_IDENTIFIER_FIXUP_1754 + hdLod7(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_3221.x = _RESERVED_IDENTIFIER_FIXUP_1783;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1790 = _RESERVED_IDENTIFIER_FIXUP_3206.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3249;
            _RESERVED_IDENTIFIER_FIXUP_3249.x = _RESERVED_IDENTIFIER_FIXUP_1790.x;
            _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_1790.y;
            _RESERVED_IDENTIFIER_FIXUP_3249.w = _RESERVED_IDENTIFIER_FIXUP_1714;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3249.xy;
            float param_33 = _RESERVED_IDENTIFIER_FIXUP_1714;
            float _RESERVED_IDENTIFIER_FIXUP_1812 = _RESERVED_IDENTIFIER_FIXUP_1783 + hdLod7(param_32, param_33).x;
            _RESERVED_IDENTIFIER_FIXUP_3206.z = _RESERVED_IDENTIFIER_FIXUP_1812;
            _RESERVED_IDENTIFIER_FIXUP_3206.y = _RESERVED_IDENTIFIER_FIXUP_1812 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3748 = _RESERVED_IDENTIFIER_FIXUP_3221;
            _RESERVED_IDENTIFIER_FIXUP_3746 = _RESERVED_IDENTIFIER_FIXUP_3206;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3135 = _RESERVED_IDENTIFIER_FIXUP_3131;
            _RESERVED_IDENTIFIER_FIXUP_3135.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3135.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1828 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1832 = _RESERVED_IDENTIFIER_FIXUP_1828.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3769 = vec4(_RESERVED_IDENTIFIER_FIXUP_1828.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1832);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1843 = _RESERVED_IDENTIFIER_FIXUP_3769.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3770 = vec4(_RESERVED_IDENTIFIER_FIXUP_1843 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1317);
            _RESERVED_IDENTIFIER_FIXUP_3770.w = _RESERVED_IDENTIFIER_FIXUP_1832;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_1843;
            float param_35 = _RESERVED_IDENTIFIER_FIXUP_1832;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3770.xy;
            float param_37 = _RESERVED_IDENTIFIER_FIXUP_1832;
            float _RESERVED_IDENTIFIER_FIXUP_1873 = hdLod8(param_34, param_35).x + hdLod8(param_36, param_37).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3162 = _RESERVED_IDENTIFIER_FIXUP_3769;
            _RESERVED_IDENTIFIER_FIXUP_3162.z = _RESERVED_IDENTIFIER_FIXUP_1873;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1880 = _RESERVED_IDENTIFIER_FIXUP_3162.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3164 = _RESERVED_IDENTIFIER_FIXUP_3770;
            _RESERVED_IDENTIFIER_FIXUP_3164.x = _RESERVED_IDENTIFIER_FIXUP_1880.x;
            _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_1880.y;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3164.xy;
            float param_39 = _RESERVED_IDENTIFIER_FIXUP_1832;
            float _RESERVED_IDENTIFIER_FIXUP_1895 = _RESERVED_IDENTIFIER_FIXUP_1873 + hdLod8(param_38, param_39).x;
            _RESERVED_IDENTIFIER_FIXUP_3162.z = _RESERVED_IDENTIFIER_FIXUP_1895;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1902 = _RESERVED_IDENTIFIER_FIXUP_3162.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3173 = _RESERVED_IDENTIFIER_FIXUP_3164;
            _RESERVED_IDENTIFIER_FIXUP_3173.x = _RESERVED_IDENTIFIER_FIXUP_1902.x;
            _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1902.y;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3173.xy;
            float param_41 = _RESERVED_IDENTIFIER_FIXUP_1832;
            float _RESERVED_IDENTIFIER_FIXUP_1917 = _RESERVED_IDENTIFIER_FIXUP_1895 + hdLod8(param_40, param_41).x;
            _RESERVED_IDENTIFIER_FIXUP_3162.z = _RESERVED_IDENTIFIER_FIXUP_1917;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1924 = _RESERVED_IDENTIFIER_FIXUP_3162.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3182 = _RESERVED_IDENTIFIER_FIXUP_3173;
            _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_1924.x;
            _RESERVED_IDENTIFIER_FIXUP_3182.y = _RESERVED_IDENTIFIER_FIXUP_1924.y;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3182.xy;
            float param_43 = _RESERVED_IDENTIFIER_FIXUP_1832;
            float _RESERVED_IDENTIFIER_FIXUP_1939 = _RESERVED_IDENTIFIER_FIXUP_1917 + hdLod8(param_42, param_43).x;
            _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1939;
            float _RESERVED_IDENTIFIER_FIXUP_1947 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3162.y = _RESERVED_IDENTIFIER_FIXUP_1947;
            float _RESERVED_IDENTIFIER_FIXUP_1953 = clamp((_RESERVED_IDENTIFIER_FIXUP_1947 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3135.z = _RESERVED_IDENTIFIER_FIXUP_1953;
            float _RESERVED_IDENTIFIER_FIXUP_1958 = (_RESERVED_IDENTIFIER_FIXUP_1939 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3135.w = _RESERVED_IDENTIFIER_FIXUP_1958;
            _RESERVED_IDENTIFIER_FIXUP_3135.y = (_RESERVED_IDENTIFIER_FIXUP_1953 * _RESERVED_IDENTIFIER_FIXUP_1958) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3748 = _RESERVED_IDENTIFIER_FIXUP_3162;
            _RESERVED_IDENTIFIER_FIXUP_3746 = _RESERVED_IDENTIFIER_FIXUP_3135;
        }
        _RESERVED_IDENTIFIER_FIXUP_3747 = _RESERVED_IDENTIFIER_FIXUP_3748;
        _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_3746;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1973 = min(_RESERVED_IDENTIFIER_FIXUP_3745.y, _RESERVED_IDENTIFIER_FIXUP_3745.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3327 = _RESERVED_IDENTIFIER_FIXUP_3747;
    _RESERVED_IDENTIFIER_FIXUP_3327.x = _RESERVED_IDENTIFIER_FIXUP_1973;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3771 = vec4((_RESERVED_IDENTIFIER_FIXUP_1973 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1995 = _RESERVED_IDENTIFIER_FIXUP_3327.xxx * _RESERVED_IDENTIFIER_FIXUP_3771.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3338 = _RESERVED_IDENTIFIER_FIXUP_3771;
    _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_1995.x;
    _RESERVED_IDENTIFIER_FIXUP_3338.z = _RESERVED_IDENTIFIER_FIXUP_1995.y;
    _RESERVED_IDENTIFIER_FIXUP_3338.w = _RESERVED_IDENTIFIER_FIXUP_1995.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2009 = (_RESERVED_IDENTIFIER_FIXUP_1340.xyz * _RESERVED_IDENTIFIER_FIXUP_3338.xxx) + _RESERVED_IDENTIFIER_FIXUP_3338.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3344 = _RESERVED_IDENTIFIER_FIXUP_1340;
    _RESERVED_IDENTIFIER_FIXUP_3344.x = _RESERVED_IDENTIFIER_FIXUP_2009.x;
    _RESERVED_IDENTIFIER_FIXUP_3344.y = _RESERVED_IDENTIFIER_FIXUP_2009.y;
    _RESERVED_IDENTIFIER_FIXUP_3344.z = _RESERVED_IDENTIFIER_FIXUP_2009.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2022 = _RESERVED_IDENTIFIER_FIXUP_3344.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3350 = _RESERVED_IDENTIFIER_FIXUP_3344;
    _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_2022.x;
    _RESERVED_IDENTIFIER_FIXUP_3350.y = _RESERVED_IDENTIFIER_FIXUP_2022.y;
    _RESERVED_IDENTIFIER_FIXUP_3350.z = _RESERVED_IDENTIFIER_FIXUP_2022.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2079 = OptTex0( texcoord0.xyz);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2083 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2087 = hdTex2(param_45);
    vec2 param_46 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2091 = hdTex3(param_46);
    vec2 param_47 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2095 = hdTex4(param_47);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2103 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3364;
    _RESERVED_IDENTIFIER_FIXUP_3364.x = _RESERVED_IDENTIFIER_FIXUP_2103.x;
    _RESERVED_IDENTIFIER_FIXUP_3364.y = _RESERVED_IDENTIFIER_FIXUP_2103.y;
    _RESERVED_IDENTIFIER_FIXUP_3364.z = _RESERVED_IDENTIFIER_FIXUP_2103.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2111 = _RESERVED_IDENTIFIER_FIXUP_2079.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2114 = _RESERVED_IDENTIFIER_FIXUP_2111 * _RESERVED_IDENTIFIER_FIXUP_3364.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3370;
    _RESERVED_IDENTIFIER_FIXUP_3370.x = _RESERVED_IDENTIFIER_FIXUP_2114.x;
    _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_2114.y;
    _RESERVED_IDENTIFIER_FIXUP_3370.z = _RESERVED_IDENTIFIER_FIXUP_2114.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2129 = mix(_RESERVED_IDENTIFIER_FIXUP_3370.xyz, _RESERVED_IDENTIFIER_FIXUP_2111, _RESERVED_IDENTIFIER_FIXUP_1223);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3376 = _RESERVED_IDENTIFIER_FIXUP_2079;
    _RESERVED_IDENTIFIER_FIXUP_3376.x = _RESERVED_IDENTIFIER_FIXUP_2129.x;
    _RESERVED_IDENTIFIER_FIXUP_3376.y = _RESERVED_IDENTIFIER_FIXUP_2129.y;
    _RESERVED_IDENTIFIER_FIXUP_3376.z = _RESERVED_IDENTIFIER_FIXUP_2129.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2137 = _RESERVED_IDENTIFIER_FIXUP_2083.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2140 = _RESERVED_IDENTIFIER_FIXUP_2137 * _RESERVED_IDENTIFIER_FIXUP_3364.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3382;
    _RESERVED_IDENTIFIER_FIXUP_3382.x = _RESERVED_IDENTIFIER_FIXUP_2140.x;
    _RESERVED_IDENTIFIER_FIXUP_3382.y = _RESERVED_IDENTIFIER_FIXUP_2140.y;
    _RESERVED_IDENTIFIER_FIXUP_3382.z = _RESERVED_IDENTIFIER_FIXUP_2140.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2155 = mix(_RESERVED_IDENTIFIER_FIXUP_3382.xyz, _RESERVED_IDENTIFIER_FIXUP_2137, _RESERVED_IDENTIFIER_FIXUP_1249);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3388 = _RESERVED_IDENTIFIER_FIXUP_2083;
    _RESERVED_IDENTIFIER_FIXUP_3388.x = _RESERVED_IDENTIFIER_FIXUP_2155.x;
    _RESERVED_IDENTIFIER_FIXUP_3388.y = _RESERVED_IDENTIFIER_FIXUP_2155.y;
    _RESERVED_IDENTIFIER_FIXUP_3388.z = _RESERVED_IDENTIFIER_FIXUP_2155.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2163 = _RESERVED_IDENTIFIER_FIXUP_2087.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2166 = _RESERVED_IDENTIFIER_FIXUP_2163 * _RESERVED_IDENTIFIER_FIXUP_3364.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3394;
    _RESERVED_IDENTIFIER_FIXUP_3394.x = _RESERVED_IDENTIFIER_FIXUP_2166.x;
    _RESERVED_IDENTIFIER_FIXUP_3394.y = _RESERVED_IDENTIFIER_FIXUP_2166.y;
    _RESERVED_IDENTIFIER_FIXUP_3394.z = _RESERVED_IDENTIFIER_FIXUP_2166.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2181 = mix(_RESERVED_IDENTIFIER_FIXUP_3394.xyz, _RESERVED_IDENTIFIER_FIXUP_2163, _RESERVED_IDENTIFIER_FIXUP_1275);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3400 = _RESERVED_IDENTIFIER_FIXUP_2087;
    _RESERVED_IDENTIFIER_FIXUP_3400.x = _RESERVED_IDENTIFIER_FIXUP_2181.x;
    _RESERVED_IDENTIFIER_FIXUP_3400.y = _RESERVED_IDENTIFIER_FIXUP_2181.y;
    _RESERVED_IDENTIFIER_FIXUP_3400.z = _RESERVED_IDENTIFIER_FIXUP_2181.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2189 = _RESERVED_IDENTIFIER_FIXUP_2091.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2192 = _RESERVED_IDENTIFIER_FIXUP_2189 * _RESERVED_IDENTIFIER_FIXUP_3364.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3406 = _RESERVED_IDENTIFIER_FIXUP_1193;
    _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_2192.x;
    _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_2192.y;
    _RESERVED_IDENTIFIER_FIXUP_3406.z = _RESERVED_IDENTIFIER_FIXUP_2192.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2207 = mix(_RESERVED_IDENTIFIER_FIXUP_3406.xyz, _RESERVED_IDENTIFIER_FIXUP_2189, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3406.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3412 = _RESERVED_IDENTIFIER_FIXUP_2091;
    _RESERVED_IDENTIFIER_FIXUP_3412.x = _RESERVED_IDENTIFIER_FIXUP_2207.x;
    _RESERVED_IDENTIFIER_FIXUP_3412.y = _RESERVED_IDENTIFIER_FIXUP_2207.y;
    _RESERVED_IDENTIFIER_FIXUP_3412.z = _RESERVED_IDENTIFIER_FIXUP_2207.z;
    float _RESERVED_IDENTIFIER_FIXUP_2217 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2095.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3418 = _RESERVED_IDENTIFIER_FIXUP_2095;
    _RESERVED_IDENTIFIER_FIXUP_3418.w = _RESERVED_IDENTIFIER_FIXUP_2217;
    float _RESERVED_IDENTIFIER_FIXUP_2222 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2217;
    _RESERVED_IDENTIFIER_FIXUP_3418.w = _RESERVED_IDENTIFIER_FIXUP_2222;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2227 = _RESERVED_IDENTIFIER_FIXUP_3418.xxxx * _RESERVED_IDENTIFIER_FIXUP_3388;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2245 = (_RESERVED_IDENTIFIER_FIXUP_3412 * _RESERVED_IDENTIFIER_FIXUP_3418.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3400 * _RESERVED_IDENTIFIER_FIXUP_3418.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3376 * _RESERVED_IDENTIFIER_FIXUP_3418.wwww) + _RESERVED_IDENTIFIER_FIXUP_2227));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3425 = _RESERVED_IDENTIFIER_FIXUP_2227;
    _RESERVED_IDENTIFIER_FIXUP_3425.x = _RESERVED_IDENTIFIER_FIXUP_1347;
    float _RESERVED_IDENTIFIER_FIXUP_2258 = clamp((_RESERVED_IDENTIFIER_FIXUP_1347 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3425.x = _RESERVED_IDENTIFIER_FIXUP_2258;
    float _RESERVED_IDENTIFIER_FIXUP_2264 = ((-_RESERVED_IDENTIFIER_FIXUP_2258) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3425.y = _RESERVED_IDENTIFIER_FIXUP_2264;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3755;
    if (_RESERVED_IDENTIFIER_FIXUP_2264 != (-_RESERVED_IDENTIFIER_FIXUP_2264))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2276 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2286 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_2288 = _RESERVED_IDENTIFIER_FIXUP_2286.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3438 = _RESERVED_IDENTIFIER_FIXUP_3425;
        _RESERVED_IDENTIFIER_FIXUP_3438.y = _RESERVED_IDENTIFIER_FIXUP_2288;
        _RESERVED_IDENTIFIER_FIXUP_3438.z = _RESERVED_IDENTIFIER_FIXUP_2286.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2296 = _RESERVED_IDENTIFIER_FIXUP_3438.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3442;
        _RESERVED_IDENTIFIER_FIXUP_3442.x = _RESERVED_IDENTIFIER_FIXUP_2296.x;
        _RESERVED_IDENTIFIER_FIXUP_3442.y = _RESERVED_IDENTIFIER_FIXUP_2296.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2303 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2307 = _RESERVED_IDENTIFIER_FIXUP_2303.y;
        _RESERVED_IDENTIFIER_FIXUP_3442.w = _RESERVED_IDENTIFIER_FIXUP_2307;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2276.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2276.w;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3442.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2307;
        float _RESERVED_IDENTIFIER_FIXUP_2318 = hdLod5(param_48, param_49).x + hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3773 = vec4(_RESERVED_IDENTIFIER_FIXUP_2258, _RESERVED_IDENTIFIER_FIXUP_2288, _RESERVED_IDENTIFIER_FIXUP_2286.y, _RESERVED_IDENTIFIER_FIXUP_2318);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2325 = _RESERVED_IDENTIFIER_FIXUP_3773.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3455;
        _RESERVED_IDENTIFIER_FIXUP_3455.x = _RESERVED_IDENTIFIER_FIXUP_2325.x;
        _RESERVED_IDENTIFIER_FIXUP_3455.y = _RESERVED_IDENTIFIER_FIXUP_2325.y;
        _RESERVED_IDENTIFIER_FIXUP_3455.w = _RESERVED_IDENTIFIER_FIXUP_2307;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3455.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2307;
        float _RESERVED_IDENTIFIER_FIXUP_2347 = _RESERVED_IDENTIFIER_FIXUP_2318 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3773.w = _RESERVED_IDENTIFIER_FIXUP_2347;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2354 = _RESERVED_IDENTIFIER_FIXUP_3773.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3468;
        _RESERVED_IDENTIFIER_FIXUP_3468.x = _RESERVED_IDENTIFIER_FIXUP_2354.x;
        _RESERVED_IDENTIFIER_FIXUP_3468.y = _RESERVED_IDENTIFIER_FIXUP_2354.y;
        _RESERVED_IDENTIFIER_FIXUP_3468.w = _RESERVED_IDENTIFIER_FIXUP_2307;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3468.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2307;
        float _RESERVED_IDENTIFIER_FIXUP_2376 = _RESERVED_IDENTIFIER_FIXUP_2347 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3773.w = _RESERVED_IDENTIFIER_FIXUP_2376;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2383 = _RESERVED_IDENTIFIER_FIXUP_3773.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3481;
        _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2383.x;
        _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2383.y;
        _RESERVED_IDENTIFIER_FIXUP_3481.w = _RESERVED_IDENTIFIER_FIXUP_2307;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3481.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2307;
        float _RESERVED_IDENTIFIER_FIXUP_2405 = _RESERVED_IDENTIFIER_FIXUP_2376 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3773.y = _RESERVED_IDENTIFIER_FIXUP_2405;
        float _RESERVED_IDENTIFIER_FIXUP_2410 = (_RESERVED_IDENTIFIER_FIXUP_2405 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3773.y = _RESERVED_IDENTIFIER_FIXUP_2410;
        _RESERVED_IDENTIFIER_FIXUP_3773.x = (_RESERVED_IDENTIFIER_FIXUP_2258 * _RESERVED_IDENTIFIER_FIXUP_2410) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3755 = _RESERVED_IDENTIFIER_FIXUP_3773;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3435 = _RESERVED_IDENTIFIER_FIXUP_3425;
        _RESERVED_IDENTIFIER_FIXUP_3435.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3755 = _RESERVED_IDENTIFIER_FIXUP_3435;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3503 = _RESERVED_IDENTIFIER_FIXUP_3755;
    _RESERVED_IDENTIFIER_FIXUP_3503.y = _RESERVED_IDENTIFIER_FIXUP_1523;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3760;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3758;
    if (_RESERVED_IDENTIFIER_FIXUP_1523 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2437 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2447 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3643 = _RESERVED_IDENTIFIER_FIXUP_3503;
        _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_2447.x;
        _RESERVED_IDENTIFIER_FIXUP_3643.z = _RESERVED_IDENTIFIER_FIXUP_2447.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2457 = _RESERVED_IDENTIFIER_FIXUP_3643.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3647;
        _RESERVED_IDENTIFIER_FIXUP_3647.x = _RESERVED_IDENTIFIER_FIXUP_2457.x;
        _RESERVED_IDENTIFIER_FIXUP_3647.y = _RESERVED_IDENTIFIER_FIXUP_2457.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2464 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2468 = _RESERVED_IDENTIFIER_FIXUP_2464.y;
        _RESERVED_IDENTIFIER_FIXUP_3647.w = _RESERVED_IDENTIFIER_FIXUP_2468;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2437.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2437.w;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3647.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2468;
        float _RESERVED_IDENTIFIER_FIXUP_2479 = hdLod6(param_58, param_59).x + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3643.w = _RESERVED_IDENTIFIER_FIXUP_2479;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2486 = _RESERVED_IDENTIFIER_FIXUP_3643.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3660;
        _RESERVED_IDENTIFIER_FIXUP_3660.x = _RESERVED_IDENTIFIER_FIXUP_2486.x;
        _RESERVED_IDENTIFIER_FIXUP_3660.y = _RESERVED_IDENTIFIER_FIXUP_2486.y;
        _RESERVED_IDENTIFIER_FIXUP_3660.w = _RESERVED_IDENTIFIER_FIXUP_2468;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3660.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2468;
        float _RESERVED_IDENTIFIER_FIXUP_2508 = _RESERVED_IDENTIFIER_FIXUP_2479 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3643.w = _RESERVED_IDENTIFIER_FIXUP_2508;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2515 = _RESERVED_IDENTIFIER_FIXUP_3643.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3673;
        _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_2515.x;
        _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_2515.y;
        _RESERVED_IDENTIFIER_FIXUP_3673.w = _RESERVED_IDENTIFIER_FIXUP_2468;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3673.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2468;
        float _RESERVED_IDENTIFIER_FIXUP_2537 = _RESERVED_IDENTIFIER_FIXUP_2508 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3643.w = _RESERVED_IDENTIFIER_FIXUP_2537;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2544 = _RESERVED_IDENTIFIER_FIXUP_3643.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3686;
        _RESERVED_IDENTIFIER_FIXUP_3686.x = _RESERVED_IDENTIFIER_FIXUP_2544.x;
        _RESERVED_IDENTIFIER_FIXUP_3686.y = _RESERVED_IDENTIFIER_FIXUP_2544.y;
        _RESERVED_IDENTIFIER_FIXUP_3686.w = _RESERVED_IDENTIFIER_FIXUP_2468;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3686.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2468;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2561 = hdLod6(param_66, param_67);
        float _RESERVED_IDENTIFIER_FIXUP_2566 = _RESERVED_IDENTIFIER_FIXUP_2537 + _RESERVED_IDENTIFIER_FIXUP_2561.x;
        _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_2566;
        _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_2566 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3760 = _RESERVED_IDENTIFIER_FIXUP_2561;
        _RESERVED_IDENTIFIER_FIXUP_3758 = _RESERVED_IDENTIFIER_FIXUP_3643;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2579 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3508 = _RESERVED_IDENTIFIER_FIXUP_3503;
        _RESERVED_IDENTIFIER_FIXUP_3508.z = _RESERVED_IDENTIFIER_FIXUP_2579;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3761;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3759;
        if (_RESERVED_IDENTIFIER_FIXUP_2579 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2588 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2588.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2588.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2594 = hdLod7(param_68, param_69);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2598 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3583 = _RESERVED_IDENTIFIER_FIXUP_3508;
            _RESERVED_IDENTIFIER_FIXUP_3583.z = _RESERVED_IDENTIFIER_FIXUP_2598.x;
            _RESERVED_IDENTIFIER_FIXUP_3583.w = _RESERVED_IDENTIFIER_FIXUP_2598.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2608 = _RESERVED_IDENTIFIER_FIXUP_3583.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3587;
            _RESERVED_IDENTIFIER_FIXUP_3587.x = _RESERVED_IDENTIFIER_FIXUP_2608.x;
            _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2608.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2615 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2619 = _RESERVED_IDENTIFIER_FIXUP_2615.y;
            _RESERVED_IDENTIFIER_FIXUP_3587.w = _RESERVED_IDENTIFIER_FIXUP_2619;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3587.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2619;
            float _RESERVED_IDENTIFIER_FIXUP_2630 = _RESERVED_IDENTIFIER_FIXUP_2594.x + hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3598 = _RESERVED_IDENTIFIER_FIXUP_2594;
            _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2630;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2637 = _RESERVED_IDENTIFIER_FIXUP_3583.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3600;
            _RESERVED_IDENTIFIER_FIXUP_3600.x = _RESERVED_IDENTIFIER_FIXUP_2637.x;
            _RESERVED_IDENTIFIER_FIXUP_3600.y = _RESERVED_IDENTIFIER_FIXUP_2637.y;
            _RESERVED_IDENTIFIER_FIXUP_3600.w = _RESERVED_IDENTIFIER_FIXUP_2619;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3600.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2619;
            float _RESERVED_IDENTIFIER_FIXUP_2659 = _RESERVED_IDENTIFIER_FIXUP_2630 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2659;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2666 = _RESERVED_IDENTIFIER_FIXUP_3583.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3613;
            _RESERVED_IDENTIFIER_FIXUP_3613.x = _RESERVED_IDENTIFIER_FIXUP_2666.x;
            _RESERVED_IDENTIFIER_FIXUP_3613.y = _RESERVED_IDENTIFIER_FIXUP_2666.y;
            _RESERVED_IDENTIFIER_FIXUP_3613.w = _RESERVED_IDENTIFIER_FIXUP_2619;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3613.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2619;
            float _RESERVED_IDENTIFIER_FIXUP_2688 = _RESERVED_IDENTIFIER_FIXUP_2659 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2688;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2695 = _RESERVED_IDENTIFIER_FIXUP_3583.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3626;
            _RESERVED_IDENTIFIER_FIXUP_3626.x = _RESERVED_IDENTIFIER_FIXUP_2695.x;
            _RESERVED_IDENTIFIER_FIXUP_3626.y = _RESERVED_IDENTIFIER_FIXUP_2695.y;
            _RESERVED_IDENTIFIER_FIXUP_3626.w = _RESERVED_IDENTIFIER_FIXUP_2619;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3626.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2619;
            float _RESERVED_IDENTIFIER_FIXUP_2717 = _RESERVED_IDENTIFIER_FIXUP_2688 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3583.z = _RESERVED_IDENTIFIER_FIXUP_2717;
            _RESERVED_IDENTIFIER_FIXUP_3583.y = _RESERVED_IDENTIFIER_FIXUP_2717 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3761 = _RESERVED_IDENTIFIER_FIXUP_3598;
            _RESERVED_IDENTIFIER_FIXUP_3759 = _RESERVED_IDENTIFIER_FIXUP_3583;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3512 = _RESERVED_IDENTIFIER_FIXUP_3508;
            _RESERVED_IDENTIFIER_FIXUP_3512.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3512.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2733 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2737 = _RESERVED_IDENTIFIER_FIXUP_2733.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3774 = vec4(_RESERVED_IDENTIFIER_FIXUP_2733.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2737);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2748 = _RESERVED_IDENTIFIER_FIXUP_3774.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3775 = vec4(_RESERVED_IDENTIFIER_FIXUP_2748 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2222);
            _RESERVED_IDENTIFIER_FIXUP_3775.w = _RESERVED_IDENTIFIER_FIXUP_2737;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2748;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2737;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3775.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2737;
            float _RESERVED_IDENTIFIER_FIXUP_2778 = hdLod8(param_78, param_79).x + hdLod8(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3539 = _RESERVED_IDENTIFIER_FIXUP_3774;
            _RESERVED_IDENTIFIER_FIXUP_3539.z = _RESERVED_IDENTIFIER_FIXUP_2778;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2785 = _RESERVED_IDENTIFIER_FIXUP_3539.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3541 = _RESERVED_IDENTIFIER_FIXUP_3775;
            _RESERVED_IDENTIFIER_FIXUP_3541.x = _RESERVED_IDENTIFIER_FIXUP_2785.x;
            _RESERVED_IDENTIFIER_FIXUP_3541.y = _RESERVED_IDENTIFIER_FIXUP_2785.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3541.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2737;
            float _RESERVED_IDENTIFIER_FIXUP_2800 = _RESERVED_IDENTIFIER_FIXUP_2778 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3539.z = _RESERVED_IDENTIFIER_FIXUP_2800;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2807 = _RESERVED_IDENTIFIER_FIXUP_3539.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3550 = _RESERVED_IDENTIFIER_FIXUP_3541;
            _RESERVED_IDENTIFIER_FIXUP_3550.x = _RESERVED_IDENTIFIER_FIXUP_2807.x;
            _RESERVED_IDENTIFIER_FIXUP_3550.y = _RESERVED_IDENTIFIER_FIXUP_2807.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3550.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2737;
            float _RESERVED_IDENTIFIER_FIXUP_2822 = _RESERVED_IDENTIFIER_FIXUP_2800 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3539.z = _RESERVED_IDENTIFIER_FIXUP_2822;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2829 = _RESERVED_IDENTIFIER_FIXUP_3539.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3559 = _RESERVED_IDENTIFIER_FIXUP_3550;
            _RESERVED_IDENTIFIER_FIXUP_3559.x = _RESERVED_IDENTIFIER_FIXUP_2829.x;
            _RESERVED_IDENTIFIER_FIXUP_3559.y = _RESERVED_IDENTIFIER_FIXUP_2829.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3559.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2737;
            float _RESERVED_IDENTIFIER_FIXUP_2844 = _RESERVED_IDENTIFIER_FIXUP_2822 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_2844;
            float _RESERVED_IDENTIFIER_FIXUP_2852 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3539.y = _RESERVED_IDENTIFIER_FIXUP_2852;
            float _RESERVED_IDENTIFIER_FIXUP_2858 = clamp((_RESERVED_IDENTIFIER_FIXUP_2852 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3512.z = _RESERVED_IDENTIFIER_FIXUP_2858;
            float _RESERVED_IDENTIFIER_FIXUP_2863 = (_RESERVED_IDENTIFIER_FIXUP_2844 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3512.w = _RESERVED_IDENTIFIER_FIXUP_2863;
            _RESERVED_IDENTIFIER_FIXUP_3512.y = (_RESERVED_IDENTIFIER_FIXUP_2858 * _RESERVED_IDENTIFIER_FIXUP_2863) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3761 = _RESERVED_IDENTIFIER_FIXUP_3539;
            _RESERVED_IDENTIFIER_FIXUP_3759 = _RESERVED_IDENTIFIER_FIXUP_3512;
        }
        _RESERVED_IDENTIFIER_FIXUP_3760 = _RESERVED_IDENTIFIER_FIXUP_3761;
        _RESERVED_IDENTIFIER_FIXUP_3758 = _RESERVED_IDENTIFIER_FIXUP_3759;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2878 = min(_RESERVED_IDENTIFIER_FIXUP_3758.y, _RESERVED_IDENTIFIER_FIXUP_3758.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3704 = _RESERVED_IDENTIFIER_FIXUP_3760;
    _RESERVED_IDENTIFIER_FIXUP_3704.x = _RESERVED_IDENTIFIER_FIXUP_2878;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3776 = vec4((_RESERVED_IDENTIFIER_FIXUP_2878 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2245.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2900 = _RESERVED_IDENTIFIER_FIXUP_3704.xxx * _RESERVED_IDENTIFIER_FIXUP_3776.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3715 = _RESERVED_IDENTIFIER_FIXUP_3776;
    _RESERVED_IDENTIFIER_FIXUP_3715.y = _RESERVED_IDENTIFIER_FIXUP_2900.x;
    _RESERVED_IDENTIFIER_FIXUP_3715.z = _RESERVED_IDENTIFIER_FIXUP_2900.y;
    _RESERVED_IDENTIFIER_FIXUP_3715.w = _RESERVED_IDENTIFIER_FIXUP_2900.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2914 = (_RESERVED_IDENTIFIER_FIXUP_2245.xyz * _RESERVED_IDENTIFIER_FIXUP_3715.xxx) + _RESERVED_IDENTIFIER_FIXUP_3715.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3721 = _RESERVED_IDENTIFIER_FIXUP_2245;
    _RESERVED_IDENTIFIER_FIXUP_3721.x = _RESERVED_IDENTIFIER_FIXUP_2914.x;
    _RESERVED_IDENTIFIER_FIXUP_3721.y = _RESERVED_IDENTIFIER_FIXUP_2914.y;
    _RESERVED_IDENTIFIER_FIXUP_3721.z = _RESERVED_IDENTIFIER_FIXUP_2914.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2927 = _RESERVED_IDENTIFIER_FIXUP_3721.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3727 = _RESERVED_IDENTIFIER_FIXUP_3721;
    _RESERVED_IDENTIFIER_FIXUP_3727.x = _RESERVED_IDENTIFIER_FIXUP_2927.x;
    _RESERVED_IDENTIFIER_FIXUP_3727.y = _RESERVED_IDENTIFIER_FIXUP_2927.y;
    _RESERVED_IDENTIFIER_FIXUP_3727.z = _RESERVED_IDENTIFIER_FIXUP_2927.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3727.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1032 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1041;
    if (_RESERVED_IDENTIFIER_FIXUP_1032)
    {
        _RESERVED_IDENTIFIER_FIXUP_1041 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1041 = _RESERVED_IDENTIFIER_FIXUP_1032;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1041)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1078 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3350.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1104 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2980;
    if (_RESERVED_IDENTIFIER_FIXUP_1078 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2980 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1078), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1104);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2980 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1104);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2980;
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB304 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB304.x;
        r1.z = hdB304.y;
        vec2 hdB315 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB315.x;
        r3.y = hdB315.y;
        vec2 hdB323 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB323.x;
        r3.w = hdB323.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r1.w = r2.x + r3.x;
        vec2 hdB346 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB346.x;
        r2.y = hdB346.y;
        vec2 hdB353 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB353.x;
        r2.w = hdB353.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB376 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB376.x;
        r2.y = hdB376.y;
        vec2 hdB383 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB383.x;
        r2.w = hdB383.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB406 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB406.x;
        r2.y = hdB406.y;
        vec2 hdB413 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB413.x;
        r2.w = hdB413.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
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
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        vec2 hdB473 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB473.x;
        r1.z = hdB473.y;
        vec2 hdB483 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB483.x;
        r3.y = hdB483.y;
        vec2 hdB490 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB490.x;
        r3.w = hdB490.y;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r1.w = r2.x + r3.x;
        vec2 hdB512 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB512.x;
        r2.y = hdB512.y;
        vec2 hdB519 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB519.x;
        r2.w = hdB519.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod6(param_18, param_19);
        r1.w += r2.x;
        vec2 hdB541 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB541.x;
        r2.y = hdB541.y;
        vec2 hdB548 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB548.x;
        r2.w = hdB548.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod6(param_20, param_21);
        r1.w += r2.x;
        vec2 hdB570 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB570.x;
        r2.y = hdB570.y;
        vec2 hdB577 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB577.x;
        r2.w = hdB577.y;
        vec2 param_22 = r2.xy;
        float param_23 = r2.w;
        r2 = hdLod6(param_22, param_23);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            vec2 hdB626 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB626.x;
            r1.w = hdB626.y;
            vec2 hdB636 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB636.x;
            r3.y = hdB636.y;
            vec2 hdB643 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB643.x;
            r3.w = hdB643.y;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r2.x += r3.x;
            vec2 hdB665 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB665.x;
            r3.y = hdB665.y;
            vec2 hdB672 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB672.x;
            r3.w = hdB672.y;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r2.x += r3.x;
            vec2 hdB694 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB694.x;
            r3.y = hdB694.y;
            vec2 hdB701 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB701.x;
            r3.w = hdB701.y;
            vec2 param_30 = r3.xy;
            float param_31 = r3.w;
            r3 = hdLod7(param_30, param_31);
            r2.x += r3.x;
            vec2 hdB723 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB723.x;
            r3.y = hdB723.y;
            vec2 hdB730 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB730.x;
            r3.w = hdB730.y;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod7(param_32, param_33);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 hdB762 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB762.x;
            r2.w = hdB762.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_34 = r2.xy;
            float param_35 = r2.w;
            r3 = hdLod8(param_34, param_35);
            vec2 hdB787 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB787.x;
            r4.y = hdB787.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r5 = hdLod8(param_36, param_37);
            r2.z = r3.x + r5.x;
            vec2 hdB815 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB815.x;
            r4.y = hdB815.y;
            vec2 param_38 = r4.xy;
            float param_39 = r4.w;
            r3 = hdLod8(param_38, param_39);
            r2.z += r3.x;
            vec2 hdB837 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB837.x;
            r4.y = hdB837.y;
            vec2 param_40 = r4.xy;
            float param_41 = r4.w;
            r3 = hdLod8(param_40, param_41);
            r2.z += r3.x;
            vec2 hdB859 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB859.x;
            r4.y = hdB859.y;
            vec2 param_42 = r4.xy;
            float param_43 = r4.w;
            r3 = hdLod8(param_42, param_43);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB921 = r0.www * v1.xyz;
    r1.y = hdB921.x;
    r1.z = hdB921.y;
    r1.w = hdB921.z;
    vec4 hdB930 = r1;
    vec3 hdB932 = r2.xxx * hdB930.yzw;
    r1.y = hdB932.x;
    r1.z = hdB932.y;
    r1.w = hdB932.z;
    vec4 hdB939 = r0;
    vec3 hdB946 = (hdB939.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB946.x;
    r0.y = hdB946.y;
    r0.z = hdB946.z;
    vec4 hdB953 = r0;
    vec3 hdB960 = hdB953.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB960.x;
    r0.y = hdB960.y;
    r0.z = hdB960.z;
    vec3 hdB975 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB975.x;
    oC0.y = hdB975.y;
    oC0.z = hdB975.z;
    oC0.w = 1.0;
    bool hdB987 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB995;
    if (hdB987)
    {
        hdB995 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB995 = hdB987;
    }
    if (hdB995)
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
    bool _3634 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3644;
    if (_3634)
    {
        _3644 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3644 = _3634;
    }
    if (_3644)
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
        bool _3669 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3684;
        if (!_3669)
        {
            _3684 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3684 = _3669;
        }
        if (_3684)
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
