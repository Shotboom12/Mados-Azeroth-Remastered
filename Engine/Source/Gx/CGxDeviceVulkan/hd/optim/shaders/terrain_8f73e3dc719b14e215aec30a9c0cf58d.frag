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
float _RESERVED_IDENTIFIER_FIXUP_3824;
vec4 _RESERVED_IDENTIFIER_FIXUP_3825;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1185 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1189 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1197 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1200 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3824).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1202 + _RESERVED_IDENTIFIER_FIXUP_1202;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3013 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3013.x = _RESERVED_IDENTIFIER_FIXUP_1205.x;
    _RESERVED_IDENTIFIER_FIXUP_3013.y = _RESERVED_IDENTIFIER_FIXUP_1205.y;
    _RESERVED_IDENTIFIER_FIXUP_3013.z = _RESERVED_IDENTIFIER_FIXUP_1205.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1213 = _RESERVED_IDENTIFIER_FIXUP_1181.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1216 = _RESERVED_IDENTIFIER_FIXUP_1213 * _RESERVED_IDENTIFIER_FIXUP_3013.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3019 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3019.x = _RESERVED_IDENTIFIER_FIXUP_1216.x;
    _RESERVED_IDENTIFIER_FIXUP_3019.y = _RESERVED_IDENTIFIER_FIXUP_1216.y;
    _RESERVED_IDENTIFIER_FIXUP_3019.z = _RESERVED_IDENTIFIER_FIXUP_1216.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1230 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1200.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = mix(_RESERVED_IDENTIFIER_FIXUP_3019.xyz, _RESERVED_IDENTIFIER_FIXUP_1213, _RESERVED_IDENTIFIER_FIXUP_1230);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3025 = _RESERVED_IDENTIFIER_FIXUP_1181;
    _RESERVED_IDENTIFIER_FIXUP_3025.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
    _RESERVED_IDENTIFIER_FIXUP_3025.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
    _RESERVED_IDENTIFIER_FIXUP_3025.z = _RESERVED_IDENTIFIER_FIXUP_1231.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1185.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1242 = _RESERVED_IDENTIFIER_FIXUP_1239 * _RESERVED_IDENTIFIER_FIXUP_3013.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3019.x = _RESERVED_IDENTIFIER_FIXUP_1242.x;
    _RESERVED_IDENTIFIER_FIXUP_3019.y = _RESERVED_IDENTIFIER_FIXUP_1242.y;
    _RESERVED_IDENTIFIER_FIXUP_3019.z = _RESERVED_IDENTIFIER_FIXUP_1242.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1256 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1200.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1257 = mix(_RESERVED_IDENTIFIER_FIXUP_3019.xyz, _RESERVED_IDENTIFIER_FIXUP_1239, _RESERVED_IDENTIFIER_FIXUP_1256);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3037 = _RESERVED_IDENTIFIER_FIXUP_1185;
    _RESERVED_IDENTIFIER_FIXUP_3037.x = _RESERVED_IDENTIFIER_FIXUP_1257.x;
    _RESERVED_IDENTIFIER_FIXUP_3037.y = _RESERVED_IDENTIFIER_FIXUP_1257.y;
    _RESERVED_IDENTIFIER_FIXUP_3037.z = _RESERVED_IDENTIFIER_FIXUP_1257.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1189.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1268 = _RESERVED_IDENTIFIER_FIXUP_1265 * _RESERVED_IDENTIFIER_FIXUP_3013.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3019.x = _RESERVED_IDENTIFIER_FIXUP_1268.x;
    _RESERVED_IDENTIFIER_FIXUP_3019.y = _RESERVED_IDENTIFIER_FIXUP_1268.y;
    _RESERVED_IDENTIFIER_FIXUP_3019.z = _RESERVED_IDENTIFIER_FIXUP_1268.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1282 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1200.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1283 = mix(_RESERVED_IDENTIFIER_FIXUP_3019.xyz, _RESERVED_IDENTIFIER_FIXUP_1265, _RESERVED_IDENTIFIER_FIXUP_1282);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3049 = _RESERVED_IDENTIFIER_FIXUP_1189;
    _RESERVED_IDENTIFIER_FIXUP_3049.x = _RESERVED_IDENTIFIER_FIXUP_1283.x;
    _RESERVED_IDENTIFIER_FIXUP_3049.y = _RESERVED_IDENTIFIER_FIXUP_1283.y;
    _RESERVED_IDENTIFIER_FIXUP_3049.z = _RESERVED_IDENTIFIER_FIXUP_1283.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_1193.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_1291 * _RESERVED_IDENTIFIER_FIXUP_3013.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3055 = _RESERVED_IDENTIFIER_FIXUP_1200;
    _RESERVED_IDENTIFIER_FIXUP_3055.x = _RESERVED_IDENTIFIER_FIXUP_1294.x;
    _RESERVED_IDENTIFIER_FIXUP_3055.y = _RESERVED_IDENTIFIER_FIXUP_1294.y;
    _RESERVED_IDENTIFIER_FIXUP_3055.z = _RESERVED_IDENTIFIER_FIXUP_1294.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1309 = mix(_RESERVED_IDENTIFIER_FIXUP_3055.xyz, _RESERVED_IDENTIFIER_FIXUP_1291, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3055.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3061 = _RESERVED_IDENTIFIER_FIXUP_1193;
    _RESERVED_IDENTIFIER_FIXUP_3061.x = _RESERVED_IDENTIFIER_FIXUP_1309.x;
    _RESERVED_IDENTIFIER_FIXUP_3061.y = _RESERVED_IDENTIFIER_FIXUP_1309.y;
    _RESERVED_IDENTIFIER_FIXUP_3061.z = _RESERVED_IDENTIFIER_FIXUP_1309.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1325 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3025, _RESERVED_IDENTIFIER_FIXUP_3037, _RESERVED_IDENTIFIER_FIXUP_1197.xxxx), _RESERVED_IDENTIFIER_FIXUP_3049, _RESERVED_IDENTIFIER_FIXUP_1197.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1337 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3069 = _RESERVED_IDENTIFIER_FIXUP_1325;
    _RESERVED_IDENTIFIER_FIXUP_3069.x = _RESERVED_IDENTIFIER_FIXUP_1337;
    float _RESERVED_IDENTIFIER_FIXUP_1343 = clamp((_RESERVED_IDENTIFIER_FIXUP_1337 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3069.x = _RESERVED_IDENTIFIER_FIXUP_1343;
    float _RESERVED_IDENTIFIER_FIXUP_1349 = ((-_RESERVED_IDENTIFIER_FIXUP_1343) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3069.y = _RESERVED_IDENTIFIER_FIXUP_1349;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3827;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3826;
    if (_RESERVED_IDENTIFIER_FIXUP_1349 != (-_RESERVED_IDENTIFIER_FIXUP_1349))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1361 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3081 = _RESERVED_IDENTIFIER_FIXUP_3069;
        _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1361.x;
        _RESERVED_IDENTIFIER_FIXUP_3081.z = _RESERVED_IDENTIFIER_FIXUP_1361.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1371 = _RESERVED_IDENTIFIER_FIXUP_3081.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3085;
        _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_1371.x;
        _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1371.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_3081.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3089;
        _RESERVED_IDENTIFIER_FIXUP_3089.x = _RESERVED_IDENTIFIER_FIXUP_1381.x;
        _RESERVED_IDENTIFIER_FIXUP_3089.y = _RESERVED_IDENTIFIER_FIXUP_1381.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_3081.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3093;
        _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_1391.x;
        _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_1391.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1401 = _RESERVED_IDENTIFIER_FIXUP_3081.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3097;
        _RESERVED_IDENTIFIER_FIXUP_3097.x = _RESERVED_IDENTIFIER_FIXUP_1401.x;
        _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1401.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1409 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1409.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1409.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1415 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3085.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3089.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3093.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3097.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3085.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1415.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3089.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1415.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3093.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1415.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1472 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1415 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3097.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1478 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1478;
        float _RESERVED_IDENTIFIER_FIXUP_1483 = float(_RESERVED_IDENTIFIER_FIXUP_1478 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1483;
        float _RESERVED_IDENTIFIER_FIXUP_1486 = dot(_RESERVED_IDENTIFIER_FIXUP_1472, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3081.z = _RESERVED_IDENTIFIER_FIXUP_1486;
        float _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_1483 + _RESERVED_IDENTIFIER_FIXUP_1486;
        _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1492;
        float _RESERVED_IDENTIFIER_FIXUP_1497 = (_RESERVED_IDENTIFIER_FIXUP_1492 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1497;
        _RESERVED_IDENTIFIER_FIXUP_3081.x = (_RESERVED_IDENTIFIER_FIXUP_1343 * _RESERVED_IDENTIFIER_FIXUP_1497) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3827 = _RESERVED_IDENTIFIER_FIXUP_1472;
        _RESERVED_IDENTIFIER_FIXUP_3826 = _RESERVED_IDENTIFIER_FIXUP_3081;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3079 = _RESERVED_IDENTIFIER_FIXUP_3069;
        _RESERVED_IDENTIFIER_FIXUP_3079.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3827 = _RESERVED_IDENTIFIER_FIXUP_3049;
        _RESERVED_IDENTIFIER_FIXUP_3826 = _RESERVED_IDENTIFIER_FIXUP_3079;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1515 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3153 = _RESERVED_IDENTIFIER_FIXUP_3826;
    _RESERVED_IDENTIFIER_FIXUP_3153.y = _RESERVED_IDENTIFIER_FIXUP_1515;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3830;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3828;
    if (_RESERVED_IDENTIFIER_FIXUP_1515 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1524 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3314 = _RESERVED_IDENTIFIER_FIXUP_3153;
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1524.x;
        _RESERVED_IDENTIFIER_FIXUP_3314.z = _RESERVED_IDENTIFIER_FIXUP_1524.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_3314.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3318;
        _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_1534.x;
        _RESERVED_IDENTIFIER_FIXUP_3318.y = _RESERVED_IDENTIFIER_FIXUP_1534.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_3314.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3322;
        _RESERVED_IDENTIFIER_FIXUP_3322.x = _RESERVED_IDENTIFIER_FIXUP_1544.x;
        _RESERVED_IDENTIFIER_FIXUP_3322.y = _RESERVED_IDENTIFIER_FIXUP_1544.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1554 = _RESERVED_IDENTIFIER_FIXUP_3314.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3326;
        _RESERVED_IDENTIFIER_FIXUP_3326.x = _RESERVED_IDENTIFIER_FIXUP_1554.x;
        _RESERVED_IDENTIFIER_FIXUP_3326.y = _RESERVED_IDENTIFIER_FIXUP_1554.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_3314.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3330;
        _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_1564.x;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_1564.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1572 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1572.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1572.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1578 = hdLod6(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_3318.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3322.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3326.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3330.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3318.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1578.y = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3322.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1578.z = hdLod6(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3326.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1578.w = hdLod6(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1635 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1578 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3330.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1641 = hdLod6(param_22, param_23).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1641;
        float _RESERVED_IDENTIFIER_FIXUP_1646 = float(_RESERVED_IDENTIFIER_FIXUP_1641 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1646;
        float _RESERVED_IDENTIFIER_FIXUP_1649 = dot(_RESERVED_IDENTIFIER_FIXUP_1635, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3314.z = _RESERVED_IDENTIFIER_FIXUP_1649;
        float _RESERVED_IDENTIFIER_FIXUP_1655 = _RESERVED_IDENTIFIER_FIXUP_1646 + _RESERVED_IDENTIFIER_FIXUP_1649;
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1655;
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1655 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3830 = _RESERVED_IDENTIFIER_FIXUP_1635;
        _RESERVED_IDENTIFIER_FIXUP_3828 = _RESERVED_IDENTIFIER_FIXUP_3314;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1668 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3158 = _RESERVED_IDENTIFIER_FIXUP_3153;
        _RESERVED_IDENTIFIER_FIXUP_3158.z = _RESERVED_IDENTIFIER_FIXUP_1668;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3831;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3829;
        if (_RESERVED_IDENTIFIER_FIXUP_1668 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1677 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3248 = _RESERVED_IDENTIFIER_FIXUP_3158;
            _RESERVED_IDENTIFIER_FIXUP_3248.z = _RESERVED_IDENTIFIER_FIXUP_1677.x;
            _RESERVED_IDENTIFIER_FIXUP_3248.w = _RESERVED_IDENTIFIER_FIXUP_1677.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1687 = _RESERVED_IDENTIFIER_FIXUP_3248.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3252;
            _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_1687.x;
            _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_1687.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_3248.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3256;
            _RESERVED_IDENTIFIER_FIXUP_3256.x = _RESERVED_IDENTIFIER_FIXUP_1697.x;
            _RESERVED_IDENTIFIER_FIXUP_3256.y = _RESERVED_IDENTIFIER_FIXUP_1697.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_3248.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3260;
            _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_1707.x;
            _RESERVED_IDENTIFIER_FIXUP_3260.y = _RESERVED_IDENTIFIER_FIXUP_1707.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1717 = _RESERVED_IDENTIFIER_FIXUP_3248.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3264;
            _RESERVED_IDENTIFIER_FIXUP_3264.x = _RESERVED_IDENTIFIER_FIXUP_1717.x;
            _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_1717.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1725 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1725.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1725.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1731 = hdLod7(param_24, param_25);
            _RESERVED_IDENTIFIER_FIXUP_3252.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3256.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3260.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3264.w = 0.0;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3252.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1731.y = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3256.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1731.z = hdLod7(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3260.xy;
            float param_31 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1731.w = hdLod7(param_30, param_31).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1788 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1731 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3264.xy;
            float param_33 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1794 = hdLod7(param_32, param_33).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3248.z = _RESERVED_IDENTIFIER_FIXUP_1794;
            float _RESERVED_IDENTIFIER_FIXUP_1799 = float(_RESERVED_IDENTIFIER_FIXUP_1794 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3248.z = _RESERVED_IDENTIFIER_FIXUP_1799;
            float _RESERVED_IDENTIFIER_FIXUP_1802 = dot(_RESERVED_IDENTIFIER_FIXUP_1788, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3248.w = _RESERVED_IDENTIFIER_FIXUP_1802;
            float _RESERVED_IDENTIFIER_FIXUP_1808 = _RESERVED_IDENTIFIER_FIXUP_1799 + _RESERVED_IDENTIFIER_FIXUP_1802;
            _RESERVED_IDENTIFIER_FIXUP_3248.z = _RESERVED_IDENTIFIER_FIXUP_1808;
            _RESERVED_IDENTIFIER_FIXUP_3248.y = _RESERVED_IDENTIFIER_FIXUP_1808 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3831 = _RESERVED_IDENTIFIER_FIXUP_1788;
            _RESERVED_IDENTIFIER_FIXUP_3829 = _RESERVED_IDENTIFIER_FIXUP_3248;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3162 = _RESERVED_IDENTIFIER_FIXUP_3827;
            _RESERVED_IDENTIFIER_FIXUP_3162.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3162.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1824 = (_RESERVED_IDENTIFIER_FIXUP_3162.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3167;
            _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_1824.x;
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1824.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1834 = _RESERVED_IDENTIFIER_FIXUP_3167.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3171;
            _RESERVED_IDENTIFIER_FIXUP_3171.x = _RESERVED_IDENTIFIER_FIXUP_1834.x;
            _RESERVED_IDENTIFIER_FIXUP_3171.y = _RESERVED_IDENTIFIER_FIXUP_1834.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1844 = _RESERVED_IDENTIFIER_FIXUP_3167.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3175;
            _RESERVED_IDENTIFIER_FIXUP_3175.x = _RESERVED_IDENTIFIER_FIXUP_1844.x;
            _RESERVED_IDENTIFIER_FIXUP_3175.y = _RESERVED_IDENTIFIER_FIXUP_1844.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1854 = _RESERVED_IDENTIFIER_FIXUP_3167.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3179;
            _RESERVED_IDENTIFIER_FIXUP_3179.x = _RESERVED_IDENTIFIER_FIXUP_1854.x;
            _RESERVED_IDENTIFIER_FIXUP_3179.y = _RESERVED_IDENTIFIER_FIXUP_1854.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1864 = _RESERVED_IDENTIFIER_FIXUP_3167.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3183;
            _RESERVED_IDENTIFIER_FIXUP_3183.x = _RESERVED_IDENTIFIER_FIXUP_1864.x;
            _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1864.y;
            _RESERVED_IDENTIFIER_FIXUP_3167.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3167.xy;
            float param_35 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1878 = hdLod8(param_34, param_35);
            _RESERVED_IDENTIFIER_FIXUP_3171.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3175.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3179.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3183.w = 0.0;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3171.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1878.y = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3175.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1878.z = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3179.xy;
            float param_41 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1878.w = hdLod8(param_40, param_41).x;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3183.xy;
            float param_43 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1941 = hdLod8(param_42, param_43).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3223 = _RESERVED_IDENTIFIER_FIXUP_3158;
            _RESERVED_IDENTIFIER_FIXUP_3223.z = _RESERVED_IDENTIFIER_FIXUP_1941;
            float _RESERVED_IDENTIFIER_FIXUP_1946 = float(_RESERVED_IDENTIFIER_FIXUP_1941 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3223.z = _RESERVED_IDENTIFIER_FIXUP_1946;
            float _RESERVED_IDENTIFIER_FIXUP_1949 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1878 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3223.w = _RESERVED_IDENTIFIER_FIXUP_1949;
            float _RESERVED_IDENTIFIER_FIXUP_1955 = _RESERVED_IDENTIFIER_FIXUP_1946 + _RESERVED_IDENTIFIER_FIXUP_1949;
            _RESERVED_IDENTIFIER_FIXUP_3223.z = _RESERVED_IDENTIFIER_FIXUP_1955;
            float _RESERVED_IDENTIFIER_FIXUP_1963 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3223.w = _RESERVED_IDENTIFIER_FIXUP_1963;
            float _RESERVED_IDENTIFIER_FIXUP_1969 = clamp((_RESERVED_IDENTIFIER_FIXUP_1963 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3223.w = _RESERVED_IDENTIFIER_FIXUP_1969;
            float _RESERVED_IDENTIFIER_FIXUP_1974 = (_RESERVED_IDENTIFIER_FIXUP_1955 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3223.z = _RESERVED_IDENTIFIER_FIXUP_1974;
            _RESERVED_IDENTIFIER_FIXUP_3223.y = (_RESERVED_IDENTIFIER_FIXUP_1969 * _RESERVED_IDENTIFIER_FIXUP_1974) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3831 = _RESERVED_IDENTIFIER_FIXUP_3162;
            _RESERVED_IDENTIFIER_FIXUP_3829 = _RESERVED_IDENTIFIER_FIXUP_3223;
        }
        _RESERVED_IDENTIFIER_FIXUP_3830 = _RESERVED_IDENTIFIER_FIXUP_3831;
        _RESERVED_IDENTIFIER_FIXUP_3828 = _RESERVED_IDENTIFIER_FIXUP_3829;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1989 = min(_RESERVED_IDENTIFIER_FIXUP_3828.y, _RESERVED_IDENTIFIER_FIXUP_3828.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3382 = _RESERVED_IDENTIFIER_FIXUP_3830;
    _RESERVED_IDENTIFIER_FIXUP_3382.x = _RESERVED_IDENTIFIER_FIXUP_1989;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3844 = vec4((_RESERVED_IDENTIFIER_FIXUP_1989 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2011 = _RESERVED_IDENTIFIER_FIXUP_3382.xxx * _RESERVED_IDENTIFIER_FIXUP_3844.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2013 = _RESERVED_IDENTIFIER_FIXUP_2011.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3393 = _RESERVED_IDENTIFIER_FIXUP_3844;
    _RESERVED_IDENTIFIER_FIXUP_3393.y = _RESERVED_IDENTIFIER_FIXUP_2013;
    _RESERVED_IDENTIFIER_FIXUP_3393.z = _RESERVED_IDENTIFIER_FIXUP_2011.y;
    _RESERVED_IDENTIFIER_FIXUP_3393.w = _RESERVED_IDENTIFIER_FIXUP_2011.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2025 = (mix(_RESERVED_IDENTIFIER_FIXUP_1325, _RESERVED_IDENTIFIER_FIXUP_3061, _RESERVED_IDENTIFIER_FIXUP_1197.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_3393.xxx) + _RESERVED_IDENTIFIER_FIXUP_3393.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3845 = vec4(_RESERVED_IDENTIFIER_FIXUP_2025.x, _RESERVED_IDENTIFIER_FIXUP_2013, _RESERVED_IDENTIFIER_FIXUP_2011.yz);
    _RESERVED_IDENTIFIER_FIXUP_3845.y = _RESERVED_IDENTIFIER_FIXUP_2025.y;
    _RESERVED_IDENTIFIER_FIXUP_3845.z = _RESERVED_IDENTIFIER_FIXUP_2025.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2038 = _RESERVED_IDENTIFIER_FIXUP_3845.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3405 = _RESERVED_IDENTIFIER_FIXUP_3845;
    _RESERVED_IDENTIFIER_FIXUP_3405.x = _RESERVED_IDENTIFIER_FIXUP_2038.x;
    _RESERVED_IDENTIFIER_FIXUP_3405.y = _RESERVED_IDENTIFIER_FIXUP_2038.y;
    _RESERVED_IDENTIFIER_FIXUP_3405.z = _RESERVED_IDENTIFIER_FIXUP_2038.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2095 = OptTex0( texcoord0.xyz);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2099 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2103 = hdTex2(param_45);
    vec2 param_46 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2107 = hdTex3(param_46);
    vec2 param_47 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2111 = hdTex4(param_47);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2119 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3419 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3419.x = _RESERVED_IDENTIFIER_FIXUP_2119.x;
    _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_2119.y;
    _RESERVED_IDENTIFIER_FIXUP_3419.z = _RESERVED_IDENTIFIER_FIXUP_2119.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2127 = _RESERVED_IDENTIFIER_FIXUP_2095.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2130 = _RESERVED_IDENTIFIER_FIXUP_2127 * _RESERVED_IDENTIFIER_FIXUP_3419.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3425 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3425.x = _RESERVED_IDENTIFIER_FIXUP_2130.x;
    _RESERVED_IDENTIFIER_FIXUP_3425.y = _RESERVED_IDENTIFIER_FIXUP_2130.y;
    _RESERVED_IDENTIFIER_FIXUP_3425.z = _RESERVED_IDENTIFIER_FIXUP_2130.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2145 = mix(_RESERVED_IDENTIFIER_FIXUP_3425.xyz, _RESERVED_IDENTIFIER_FIXUP_2127, _RESERVED_IDENTIFIER_FIXUP_1230);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_2095;
    _RESERVED_IDENTIFIER_FIXUP_3431.x = _RESERVED_IDENTIFIER_FIXUP_2145.x;
    _RESERVED_IDENTIFIER_FIXUP_3431.y = _RESERVED_IDENTIFIER_FIXUP_2145.y;
    _RESERVED_IDENTIFIER_FIXUP_3431.z = _RESERVED_IDENTIFIER_FIXUP_2145.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2153 = _RESERVED_IDENTIFIER_FIXUP_2099.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2156 = _RESERVED_IDENTIFIER_FIXUP_2153 * _RESERVED_IDENTIFIER_FIXUP_3419.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3425.x = _RESERVED_IDENTIFIER_FIXUP_2156.x;
    _RESERVED_IDENTIFIER_FIXUP_3425.y = _RESERVED_IDENTIFIER_FIXUP_2156.y;
    _RESERVED_IDENTIFIER_FIXUP_3425.z = _RESERVED_IDENTIFIER_FIXUP_2156.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2171 = mix(_RESERVED_IDENTIFIER_FIXUP_3425.xyz, _RESERVED_IDENTIFIER_FIXUP_2153, _RESERVED_IDENTIFIER_FIXUP_1256);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3443 = _RESERVED_IDENTIFIER_FIXUP_2099;
    _RESERVED_IDENTIFIER_FIXUP_3443.x = _RESERVED_IDENTIFIER_FIXUP_2171.x;
    _RESERVED_IDENTIFIER_FIXUP_3443.y = _RESERVED_IDENTIFIER_FIXUP_2171.y;
    _RESERVED_IDENTIFIER_FIXUP_3443.z = _RESERVED_IDENTIFIER_FIXUP_2171.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2179 = _RESERVED_IDENTIFIER_FIXUP_2103.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2182 = _RESERVED_IDENTIFIER_FIXUP_2179 * _RESERVED_IDENTIFIER_FIXUP_3419.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3425.x = _RESERVED_IDENTIFIER_FIXUP_2182.x;
    _RESERVED_IDENTIFIER_FIXUP_3425.y = _RESERVED_IDENTIFIER_FIXUP_2182.y;
    _RESERVED_IDENTIFIER_FIXUP_3425.z = _RESERVED_IDENTIFIER_FIXUP_2182.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2197 = mix(_RESERVED_IDENTIFIER_FIXUP_3425.xyz, _RESERVED_IDENTIFIER_FIXUP_2179, _RESERVED_IDENTIFIER_FIXUP_1282);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3455 = _RESERVED_IDENTIFIER_FIXUP_2103;
    _RESERVED_IDENTIFIER_FIXUP_3455.x = _RESERVED_IDENTIFIER_FIXUP_2197.x;
    _RESERVED_IDENTIFIER_FIXUP_3455.y = _RESERVED_IDENTIFIER_FIXUP_2197.y;
    _RESERVED_IDENTIFIER_FIXUP_3455.z = _RESERVED_IDENTIFIER_FIXUP_2197.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2205 = _RESERVED_IDENTIFIER_FIXUP_2107.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2208 = _RESERVED_IDENTIFIER_FIXUP_2205 * _RESERVED_IDENTIFIER_FIXUP_3419.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3461 = _RESERVED_IDENTIFIER_FIXUP_1200;
    _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_2208.x;
    _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_2208.y;
    _RESERVED_IDENTIFIER_FIXUP_3461.z = _RESERVED_IDENTIFIER_FIXUP_2208.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2223 = mix(_RESERVED_IDENTIFIER_FIXUP_3461.xyz, _RESERVED_IDENTIFIER_FIXUP_2205, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3461.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3467 = _RESERVED_IDENTIFIER_FIXUP_2107;
    _RESERVED_IDENTIFIER_FIXUP_3467.x = _RESERVED_IDENTIFIER_FIXUP_2223.x;
    _RESERVED_IDENTIFIER_FIXUP_3467.y = _RESERVED_IDENTIFIER_FIXUP_2223.y;
    _RESERVED_IDENTIFIER_FIXUP_3467.z = _RESERVED_IDENTIFIER_FIXUP_2223.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2239 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3431, _RESERVED_IDENTIFIER_FIXUP_3443, _RESERVED_IDENTIFIER_FIXUP_2111.xxxx), _RESERVED_IDENTIFIER_FIXUP_3455, _RESERVED_IDENTIFIER_FIXUP_2111.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2244 = mix(_RESERVED_IDENTIFIER_FIXUP_2239, _RESERVED_IDENTIFIER_FIXUP_3467, _RESERVED_IDENTIFIER_FIXUP_2111.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3475 = _RESERVED_IDENTIFIER_FIXUP_2239;
    _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_1337;
    float _RESERVED_IDENTIFIER_FIXUP_2257 = clamp((_RESERVED_IDENTIFIER_FIXUP_1337 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_2257;
    float _RESERVED_IDENTIFIER_FIXUP_2263 = ((-_RESERVED_IDENTIFIER_FIXUP_2257) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3475.y = _RESERVED_IDENTIFIER_FIXUP_2263;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3836;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3835;
    if (_RESERVED_IDENTIFIER_FIXUP_2263 != (-_RESERVED_IDENTIFIER_FIXUP_2263))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2275 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3487 = _RESERVED_IDENTIFIER_FIXUP_3475;
        _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2275.x;
        _RESERVED_IDENTIFIER_FIXUP_3487.z = _RESERVED_IDENTIFIER_FIXUP_2275.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2285 = _RESERVED_IDENTIFIER_FIXUP_3487.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3491;
        _RESERVED_IDENTIFIER_FIXUP_3491.x = _RESERVED_IDENTIFIER_FIXUP_2285.x;
        _RESERVED_IDENTIFIER_FIXUP_3491.y = _RESERVED_IDENTIFIER_FIXUP_2285.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2295 = _RESERVED_IDENTIFIER_FIXUP_3487.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3495;
        _RESERVED_IDENTIFIER_FIXUP_3495.x = _RESERVED_IDENTIFIER_FIXUP_2295.x;
        _RESERVED_IDENTIFIER_FIXUP_3495.y = _RESERVED_IDENTIFIER_FIXUP_2295.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2305 = _RESERVED_IDENTIFIER_FIXUP_3487.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3499;
        _RESERVED_IDENTIFIER_FIXUP_3499.x = _RESERVED_IDENTIFIER_FIXUP_2305.x;
        _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_2305.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2315 = _RESERVED_IDENTIFIER_FIXUP_3487.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3503;
        _RESERVED_IDENTIFIER_FIXUP_3503.x = _RESERVED_IDENTIFIER_FIXUP_2315.x;
        _RESERVED_IDENTIFIER_FIXUP_3503.y = _RESERVED_IDENTIFIER_FIXUP_2315.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2323 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2323.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2323.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2329 = hdLod5(param_48, param_49);
        _RESERVED_IDENTIFIER_FIXUP_3491.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3495.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3499.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3503.w = 0.0;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3491.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2329.y = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3495.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2329.z = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3499.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2329.w = hdLod5(param_54, param_55).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2386 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2329 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3503.xy;
        float param_57 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2392 = hdLod5(param_56, param_57).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2392;
        float _RESERVED_IDENTIFIER_FIXUP_2397 = float(_RESERVED_IDENTIFIER_FIXUP_2392 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2397;
        float _RESERVED_IDENTIFIER_FIXUP_2400 = dot(_RESERVED_IDENTIFIER_FIXUP_2386, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3487.z = _RESERVED_IDENTIFIER_FIXUP_2400;
        float _RESERVED_IDENTIFIER_FIXUP_2406 = _RESERVED_IDENTIFIER_FIXUP_2397 + _RESERVED_IDENTIFIER_FIXUP_2400;
        _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2406;
        float _RESERVED_IDENTIFIER_FIXUP_2411 = (_RESERVED_IDENTIFIER_FIXUP_2406 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2411;
        _RESERVED_IDENTIFIER_FIXUP_3487.x = (_RESERVED_IDENTIFIER_FIXUP_2257 * _RESERVED_IDENTIFIER_FIXUP_2411) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3836 = _RESERVED_IDENTIFIER_FIXUP_2386;
        _RESERVED_IDENTIFIER_FIXUP_3835 = _RESERVED_IDENTIFIER_FIXUP_3487;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3485 = _RESERVED_IDENTIFIER_FIXUP_3475;
        _RESERVED_IDENTIFIER_FIXUP_3485.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3836 = _RESERVED_IDENTIFIER_FIXUP_3455;
        _RESERVED_IDENTIFIER_FIXUP_3835 = _RESERVED_IDENTIFIER_FIXUP_3485;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3559 = _RESERVED_IDENTIFIER_FIXUP_3835;
    _RESERVED_IDENTIFIER_FIXUP_3559.y = _RESERVED_IDENTIFIER_FIXUP_1515;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3839;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3837;
    if (_RESERVED_IDENTIFIER_FIXUP_1515 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2438 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3720 = _RESERVED_IDENTIFIER_FIXUP_3559;
        _RESERVED_IDENTIFIER_FIXUP_3720.y = _RESERVED_IDENTIFIER_FIXUP_2438.x;
        _RESERVED_IDENTIFIER_FIXUP_3720.z = _RESERVED_IDENTIFIER_FIXUP_2438.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2448 = _RESERVED_IDENTIFIER_FIXUP_3720.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3724;
        _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2448.x;
        _RESERVED_IDENTIFIER_FIXUP_3724.y = _RESERVED_IDENTIFIER_FIXUP_2448.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2458 = _RESERVED_IDENTIFIER_FIXUP_3720.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3728;
        _RESERVED_IDENTIFIER_FIXUP_3728.x = _RESERVED_IDENTIFIER_FIXUP_2458.x;
        _RESERVED_IDENTIFIER_FIXUP_3728.y = _RESERVED_IDENTIFIER_FIXUP_2458.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2468 = _RESERVED_IDENTIFIER_FIXUP_3720.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3732;
        _RESERVED_IDENTIFIER_FIXUP_3732.x = _RESERVED_IDENTIFIER_FIXUP_2468.x;
        _RESERVED_IDENTIFIER_FIXUP_3732.y = _RESERVED_IDENTIFIER_FIXUP_2468.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2478 = _RESERVED_IDENTIFIER_FIXUP_3720.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3736;
        _RESERVED_IDENTIFIER_FIXUP_3736.x = _RESERVED_IDENTIFIER_FIXUP_2478.x;
        _RESERVED_IDENTIFIER_FIXUP_3736.y = _RESERVED_IDENTIFIER_FIXUP_2478.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2486 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2486.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2486.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2492 = hdLod6(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3724.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3728.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3732.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3736.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3724.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2492.y = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3728.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2492.z = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3732.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2492.w = hdLod6(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2549 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2492 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3736.xy;
        float param_67 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2555 = hdLod6(param_66, param_67).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3720.y = _RESERVED_IDENTIFIER_FIXUP_2555;
        float _RESERVED_IDENTIFIER_FIXUP_2560 = float(_RESERVED_IDENTIFIER_FIXUP_2555 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3720.y = _RESERVED_IDENTIFIER_FIXUP_2560;
        float _RESERVED_IDENTIFIER_FIXUP_2563 = dot(_RESERVED_IDENTIFIER_FIXUP_2549, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3720.z = _RESERVED_IDENTIFIER_FIXUP_2563;
        float _RESERVED_IDENTIFIER_FIXUP_2569 = _RESERVED_IDENTIFIER_FIXUP_2560 + _RESERVED_IDENTIFIER_FIXUP_2563;
        _RESERVED_IDENTIFIER_FIXUP_3720.y = _RESERVED_IDENTIFIER_FIXUP_2569;
        _RESERVED_IDENTIFIER_FIXUP_3720.y = _RESERVED_IDENTIFIER_FIXUP_2569 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3839 = _RESERVED_IDENTIFIER_FIXUP_2549;
        _RESERVED_IDENTIFIER_FIXUP_3837 = _RESERVED_IDENTIFIER_FIXUP_3720;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2582 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3564 = _RESERVED_IDENTIFIER_FIXUP_3559;
        _RESERVED_IDENTIFIER_FIXUP_3564.z = _RESERVED_IDENTIFIER_FIXUP_2582;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3840;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3838;
        if (_RESERVED_IDENTIFIER_FIXUP_2582 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2591 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3654 = _RESERVED_IDENTIFIER_FIXUP_3564;
            _RESERVED_IDENTIFIER_FIXUP_3654.z = _RESERVED_IDENTIFIER_FIXUP_2591.x;
            _RESERVED_IDENTIFIER_FIXUP_3654.w = _RESERVED_IDENTIFIER_FIXUP_2591.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2601 = _RESERVED_IDENTIFIER_FIXUP_3654.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3658;
            _RESERVED_IDENTIFIER_FIXUP_3658.x = _RESERVED_IDENTIFIER_FIXUP_2601.x;
            _RESERVED_IDENTIFIER_FIXUP_3658.y = _RESERVED_IDENTIFIER_FIXUP_2601.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2611 = _RESERVED_IDENTIFIER_FIXUP_3654.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3662;
            _RESERVED_IDENTIFIER_FIXUP_3662.x = _RESERVED_IDENTIFIER_FIXUP_2611.x;
            _RESERVED_IDENTIFIER_FIXUP_3662.y = _RESERVED_IDENTIFIER_FIXUP_2611.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2621 = _RESERVED_IDENTIFIER_FIXUP_3654.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3666;
            _RESERVED_IDENTIFIER_FIXUP_3666.x = _RESERVED_IDENTIFIER_FIXUP_2621.x;
            _RESERVED_IDENTIFIER_FIXUP_3666.y = _RESERVED_IDENTIFIER_FIXUP_2621.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2631 = _RESERVED_IDENTIFIER_FIXUP_3654.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3670;
            _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2631.x;
            _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_2631.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2639 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2639.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2639.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2645 = hdLod7(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3658.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3662.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3666.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3670.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3658.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2645.y = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3662.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2645.z = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3666.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2645.w = hdLod7(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2702 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2645 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3670.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2708 = hdLod7(param_76, param_77).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3654.z = _RESERVED_IDENTIFIER_FIXUP_2708;
            float _RESERVED_IDENTIFIER_FIXUP_2713 = float(_RESERVED_IDENTIFIER_FIXUP_2708 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3654.z = _RESERVED_IDENTIFIER_FIXUP_2713;
            float _RESERVED_IDENTIFIER_FIXUP_2716 = dot(_RESERVED_IDENTIFIER_FIXUP_2702, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3654.w = _RESERVED_IDENTIFIER_FIXUP_2716;
            float _RESERVED_IDENTIFIER_FIXUP_2722 = _RESERVED_IDENTIFIER_FIXUP_2713 + _RESERVED_IDENTIFIER_FIXUP_2716;
            _RESERVED_IDENTIFIER_FIXUP_3654.z = _RESERVED_IDENTIFIER_FIXUP_2722;
            _RESERVED_IDENTIFIER_FIXUP_3654.y = _RESERVED_IDENTIFIER_FIXUP_2722 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3840 = _RESERVED_IDENTIFIER_FIXUP_2702;
            _RESERVED_IDENTIFIER_FIXUP_3838 = _RESERVED_IDENTIFIER_FIXUP_3654;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3568 = _RESERVED_IDENTIFIER_FIXUP_3836;
            _RESERVED_IDENTIFIER_FIXUP_3568.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3568.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2738 = (_RESERVED_IDENTIFIER_FIXUP_3568.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3573;
            _RESERVED_IDENTIFIER_FIXUP_3573.x = _RESERVED_IDENTIFIER_FIXUP_2738.x;
            _RESERVED_IDENTIFIER_FIXUP_3573.y = _RESERVED_IDENTIFIER_FIXUP_2738.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2748 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3577;
            _RESERVED_IDENTIFIER_FIXUP_3577.x = _RESERVED_IDENTIFIER_FIXUP_2748.x;
            _RESERVED_IDENTIFIER_FIXUP_3577.y = _RESERVED_IDENTIFIER_FIXUP_2748.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2758 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3581;
            _RESERVED_IDENTIFIER_FIXUP_3581.x = _RESERVED_IDENTIFIER_FIXUP_2758.x;
            _RESERVED_IDENTIFIER_FIXUP_3581.y = _RESERVED_IDENTIFIER_FIXUP_2758.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2768 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3585;
            _RESERVED_IDENTIFIER_FIXUP_3585.x = _RESERVED_IDENTIFIER_FIXUP_2768.x;
            _RESERVED_IDENTIFIER_FIXUP_3585.y = _RESERVED_IDENTIFIER_FIXUP_2768.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2778 = _RESERVED_IDENTIFIER_FIXUP_3573.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3589;
            _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_2778.x;
            _RESERVED_IDENTIFIER_FIXUP_3589.y = _RESERVED_IDENTIFIER_FIXUP_2778.y;
            _RESERVED_IDENTIFIER_FIXUP_3573.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3573.xy;
            float param_79 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2792 = hdLod8(param_78, param_79);
            _RESERVED_IDENTIFIER_FIXUP_3577.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3581.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3585.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3589.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3577.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2792.y = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3581.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2792.z = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3585.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2792.w = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3589.xy;
            float param_87 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2855 = hdLod8(param_86, param_87).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3629 = _RESERVED_IDENTIFIER_FIXUP_3564;
            _RESERVED_IDENTIFIER_FIXUP_3629.z = _RESERVED_IDENTIFIER_FIXUP_2855;
            float _RESERVED_IDENTIFIER_FIXUP_2860 = float(_RESERVED_IDENTIFIER_FIXUP_2855 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3629.z = _RESERVED_IDENTIFIER_FIXUP_2860;
            float _RESERVED_IDENTIFIER_FIXUP_2863 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2792 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3629.w = _RESERVED_IDENTIFIER_FIXUP_2863;
            float _RESERVED_IDENTIFIER_FIXUP_2869 = _RESERVED_IDENTIFIER_FIXUP_2860 + _RESERVED_IDENTIFIER_FIXUP_2863;
            _RESERVED_IDENTIFIER_FIXUP_3629.z = _RESERVED_IDENTIFIER_FIXUP_2869;
            float _RESERVED_IDENTIFIER_FIXUP_2877 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3629.w = _RESERVED_IDENTIFIER_FIXUP_2877;
            float _RESERVED_IDENTIFIER_FIXUP_2883 = clamp((_RESERVED_IDENTIFIER_FIXUP_2877 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3629.w = _RESERVED_IDENTIFIER_FIXUP_2883;
            float _RESERVED_IDENTIFIER_FIXUP_2888 = (_RESERVED_IDENTIFIER_FIXUP_2869 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3629.z = _RESERVED_IDENTIFIER_FIXUP_2888;
            _RESERVED_IDENTIFIER_FIXUP_3629.y = (_RESERVED_IDENTIFIER_FIXUP_2883 * _RESERVED_IDENTIFIER_FIXUP_2888) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3840 = _RESERVED_IDENTIFIER_FIXUP_3568;
            _RESERVED_IDENTIFIER_FIXUP_3838 = _RESERVED_IDENTIFIER_FIXUP_3629;
        }
        _RESERVED_IDENTIFIER_FIXUP_3839 = _RESERVED_IDENTIFIER_FIXUP_3840;
        _RESERVED_IDENTIFIER_FIXUP_3837 = _RESERVED_IDENTIFIER_FIXUP_3838;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2903 = min(_RESERVED_IDENTIFIER_FIXUP_3837.y, _RESERVED_IDENTIFIER_FIXUP_3837.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3788 = _RESERVED_IDENTIFIER_FIXUP_3839;
    _RESERVED_IDENTIFIER_FIXUP_3788.x = _RESERVED_IDENTIFIER_FIXUP_2903;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3847 = vec4((_RESERVED_IDENTIFIER_FIXUP_2903 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2244.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2925 = _RESERVED_IDENTIFIER_FIXUP_3788.xxx * _RESERVED_IDENTIFIER_FIXUP_3847.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2927 = _RESERVED_IDENTIFIER_FIXUP_2925.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_3847;
    _RESERVED_IDENTIFIER_FIXUP_3799.y = _RESERVED_IDENTIFIER_FIXUP_2927;
    _RESERVED_IDENTIFIER_FIXUP_3799.z = _RESERVED_IDENTIFIER_FIXUP_2925.y;
    _RESERVED_IDENTIFIER_FIXUP_3799.w = _RESERVED_IDENTIFIER_FIXUP_2925.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2939 = (_RESERVED_IDENTIFIER_FIXUP_2244.xyz * _RESERVED_IDENTIFIER_FIXUP_3799.xxx) + _RESERVED_IDENTIFIER_FIXUP_3799.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3848 = vec4(_RESERVED_IDENTIFIER_FIXUP_2939.x, _RESERVED_IDENTIFIER_FIXUP_2927, _RESERVED_IDENTIFIER_FIXUP_2925.yz);
    _RESERVED_IDENTIFIER_FIXUP_3848.y = _RESERVED_IDENTIFIER_FIXUP_2939.y;
    _RESERVED_IDENTIFIER_FIXUP_3848.z = _RESERVED_IDENTIFIER_FIXUP_2939.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2952 = _RESERVED_IDENTIFIER_FIXUP_3848.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3811 = _RESERVED_IDENTIFIER_FIXUP_3848;
    _RESERVED_IDENTIFIER_FIXUP_3811.x = _RESERVED_IDENTIFIER_FIXUP_2952.x;
    _RESERVED_IDENTIFIER_FIXUP_3811.y = _RESERVED_IDENTIFIER_FIXUP_2952.y;
    _RESERVED_IDENTIFIER_FIXUP_3811.z = _RESERVED_IDENTIFIER_FIXUP_2952.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3811.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1040 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1049;
    if (_RESERVED_IDENTIFIER_FIXUP_1040)
    {
        _RESERVED_IDENTIFIER_FIXUP_1049 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1049 = _RESERVED_IDENTIFIER_FIXUP_1040;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1049)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1086 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3405.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1112 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3005;
    if (_RESERVED_IDENTIFIER_FIXUP_1086 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3005 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1086), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1112);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3005 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1112);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3005;
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
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB272 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB272.x;
        r0.z = hdB272.y;
        vec2 hdB283 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB283.x;
        r2.y = hdB283.y;
        vec2 hdB294 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB294.x;
        r3.y = hdB294.y;
        vec2 hdB305 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB305.x;
        r4.y = hdB305.y;
        vec2 hdB316 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB316.x;
        r5.y = hdB316.y;
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
        vec2 hdB447 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB447.x;
        r0.z = hdB447.y;
        vec2 hdB457 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB457.x;
        r2.y = hdB457.y;
        vec2 hdB467 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB467.x;
        r3.y = hdB467.y;
        vec2 hdB477 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB477.x;
        r4.y = hdB477.y;
        vec2 hdB487 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB487.x;
        r5.y = hdB487.y;
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
            vec2 hdB602 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB602.x;
            r0.w = hdB602.y;
            vec2 hdB612 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB612.x;
            r2.y = hdB612.y;
            vec2 hdB622 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB622.x;
            r3.y = hdB622.y;
            vec2 hdB632 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB632.x;
            r4.y = hdB632.y;
            vec2 hdB642 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB642.x;
            r5.y = hdB642.y;
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
            vec2 hdB750 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB750.x;
            r3.y = hdB750.y;
            vec2 hdB760 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB760.x;
            r4.y = hdB760.y;
            vec2 hdB770 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB770.x;
            r5.y = hdB770.y;
            vec2 hdB780 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB780.x;
            r6.y = hdB780.y;
            vec2 hdB790 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB790.x;
            r7.y = hdB790.y;
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
    vec3 hdB929 = r1.www * v1.xyz;
    r0.y = hdB929.x;
    r0.z = hdB929.y;
    r0.w = hdB929.z;
    vec4 hdB938 = r0;
    vec3 hdB940 = r2.xxx * hdB938.yzw;
    r0.y = hdB940.x;
    r0.z = hdB940.y;
    r0.w = hdB940.z;
    vec4 hdB949 = r0;
    vec4 hdB952 = r0;
    vec3 hdB954 = (r1.xyz * hdB949.xxx) + hdB952.yzw;
    r0.x = hdB954.x;
    r0.y = hdB954.y;
    r0.z = hdB954.z;
    vec4 hdB961 = r0;
    vec3 hdB968 = hdB961.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB968.x;
    r0.y = hdB968.y;
    r0.z = hdB968.z;
    vec3 hdB983 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB983.x;
    oC0.y = hdB983.y;
    oC0.z = hdB983.z;
    oC0.w = 1.0;
    bool hdB995 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1003;
    if (hdB995)
    {
        hdB1003 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1003 = hdB995;
    }
    if (hdB1003)
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
        _3523 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
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
            _3563 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
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
