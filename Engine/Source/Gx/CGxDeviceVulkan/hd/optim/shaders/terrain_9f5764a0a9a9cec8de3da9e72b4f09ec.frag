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
float _RESERVED_IDENTIFIER_FIXUP_4095;
vec4 _RESERVED_IDENTIFIER_FIXUP_4096;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1266 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1274 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1282 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1285 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1287 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4095).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1290 = _RESERVED_IDENTIFIER_FIXUP_1287 + _RESERVED_IDENTIFIER_FIXUP_1287;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3262;
    _RESERVED_IDENTIFIER_FIXUP_3262.x = _RESERVED_IDENTIFIER_FIXUP_1290.x;
    _RESERVED_IDENTIFIER_FIXUP_3262.y = _RESERVED_IDENTIFIER_FIXUP_1290.y;
    _RESERVED_IDENTIFIER_FIXUP_3262.z = _RESERVED_IDENTIFIER_FIXUP_1290.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1298 = _RESERVED_IDENTIFIER_FIXUP_1266.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1301 = _RESERVED_IDENTIFIER_FIXUP_1298 * _RESERVED_IDENTIFIER_FIXUP_3262.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3268;
    _RESERVED_IDENTIFIER_FIXUP_3268.x = _RESERVED_IDENTIFIER_FIXUP_1301.x;
    _RESERVED_IDENTIFIER_FIXUP_3268.y = _RESERVED_IDENTIFIER_FIXUP_1301.y;
    _RESERVED_IDENTIFIER_FIXUP_3268.z = _RESERVED_IDENTIFIER_FIXUP_1301.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1315 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1285.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1316 = mix(_RESERVED_IDENTIFIER_FIXUP_3268.xyz, _RESERVED_IDENTIFIER_FIXUP_1298, _RESERVED_IDENTIFIER_FIXUP_1315);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3274 = _RESERVED_IDENTIFIER_FIXUP_1266;
    _RESERVED_IDENTIFIER_FIXUP_3274.x = _RESERVED_IDENTIFIER_FIXUP_1316.x;
    _RESERVED_IDENTIFIER_FIXUP_3274.y = _RESERVED_IDENTIFIER_FIXUP_1316.y;
    _RESERVED_IDENTIFIER_FIXUP_3274.z = _RESERVED_IDENTIFIER_FIXUP_1316.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1324 = _RESERVED_IDENTIFIER_FIXUP_1270.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_1324 * _RESERVED_IDENTIFIER_FIXUP_3262.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3280;
    _RESERVED_IDENTIFIER_FIXUP_3280.x = _RESERVED_IDENTIFIER_FIXUP_1327.x;
    _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_1327.y;
    _RESERVED_IDENTIFIER_FIXUP_3280.z = _RESERVED_IDENTIFIER_FIXUP_1327.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1341 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1285.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1342 = mix(_RESERVED_IDENTIFIER_FIXUP_3280.xyz, _RESERVED_IDENTIFIER_FIXUP_1324, _RESERVED_IDENTIFIER_FIXUP_1341);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3286 = _RESERVED_IDENTIFIER_FIXUP_1270;
    _RESERVED_IDENTIFIER_FIXUP_3286.x = _RESERVED_IDENTIFIER_FIXUP_1342.x;
    _RESERVED_IDENTIFIER_FIXUP_3286.y = _RESERVED_IDENTIFIER_FIXUP_1342.y;
    _RESERVED_IDENTIFIER_FIXUP_3286.z = _RESERVED_IDENTIFIER_FIXUP_1342.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1350 = _RESERVED_IDENTIFIER_FIXUP_1274.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1353 = _RESERVED_IDENTIFIER_FIXUP_1350 * _RESERVED_IDENTIFIER_FIXUP_3262.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3292;
    _RESERVED_IDENTIFIER_FIXUP_3292.x = _RESERVED_IDENTIFIER_FIXUP_1353.x;
    _RESERVED_IDENTIFIER_FIXUP_3292.y = _RESERVED_IDENTIFIER_FIXUP_1353.y;
    _RESERVED_IDENTIFIER_FIXUP_3292.z = _RESERVED_IDENTIFIER_FIXUP_1353.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1367 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1285.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1368 = mix(_RESERVED_IDENTIFIER_FIXUP_3292.xyz, _RESERVED_IDENTIFIER_FIXUP_1350, _RESERVED_IDENTIFIER_FIXUP_1367);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3298 = _RESERVED_IDENTIFIER_FIXUP_1274;
    _RESERVED_IDENTIFIER_FIXUP_3298.x = _RESERVED_IDENTIFIER_FIXUP_1368.x;
    _RESERVED_IDENTIFIER_FIXUP_3298.y = _RESERVED_IDENTIFIER_FIXUP_1368.y;
    _RESERVED_IDENTIFIER_FIXUP_3298.z = _RESERVED_IDENTIFIER_FIXUP_1368.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_1278.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_1376 * _RESERVED_IDENTIFIER_FIXUP_3262.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3304 = _RESERVED_IDENTIFIER_FIXUP_1285;
    _RESERVED_IDENTIFIER_FIXUP_3304.x = _RESERVED_IDENTIFIER_FIXUP_1379.x;
    _RESERVED_IDENTIFIER_FIXUP_3304.y = _RESERVED_IDENTIFIER_FIXUP_1379.y;
    _RESERVED_IDENTIFIER_FIXUP_3304.z = _RESERVED_IDENTIFIER_FIXUP_1379.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1394 = mix(_RESERVED_IDENTIFIER_FIXUP_3304.xyz, _RESERVED_IDENTIFIER_FIXUP_1376, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3304.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3310 = _RESERVED_IDENTIFIER_FIXUP_1278;
    _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_1394.x;
    _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_1394.y;
    _RESERVED_IDENTIFIER_FIXUP_3310.z = _RESERVED_IDENTIFIER_FIXUP_1394.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3274, _RESERVED_IDENTIFIER_FIXUP_3286, _RESERVED_IDENTIFIER_FIXUP_1282.xxxx), _RESERVED_IDENTIFIER_FIXUP_3298, _RESERVED_IDENTIFIER_FIXUP_1282.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1422 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3318 = _RESERVED_IDENTIFIER_FIXUP_1410;
    _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_1422;
    float _RESERVED_IDENTIFIER_FIXUP_1428 = clamp((_RESERVED_IDENTIFIER_FIXUP_1422 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_1428;
    float _RESERVED_IDENTIFIER_FIXUP_1434 = ((-_RESERVED_IDENTIFIER_FIXUP_1428) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_1434;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4100;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4097;
    if (_RESERVED_IDENTIFIER_FIXUP_1434 != (-_RESERVED_IDENTIFIER_FIXUP_1434))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1446 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1446.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1446.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1452 = hdLod5(param_5, param_6);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1456 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3530 = _RESERVED_IDENTIFIER_FIXUP_1452;
        _RESERVED_IDENTIFIER_FIXUP_3530.y = _RESERVED_IDENTIFIER_FIXUP_1456.x;
        _RESERVED_IDENTIFIER_FIXUP_3530.z = _RESERVED_IDENTIFIER_FIXUP_1456.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1466 = _RESERVED_IDENTIFIER_FIXUP_3530.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3534;
        _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_1466.x;
        _RESERVED_IDENTIFIER_FIXUP_3534.y = _RESERVED_IDENTIFIER_FIXUP_1466.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1473 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_1473.y;
        _RESERVED_IDENTIFIER_FIXUP_3534.w = _RESERVED_IDENTIFIER_FIXUP_1477;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3534.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1477;
        float _RESERVED_IDENTIFIER_FIXUP_1488 = _RESERVED_IDENTIFIER_FIXUP_1452.x + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_1488;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_3530.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3547;
        _RESERVED_IDENTIFIER_FIXUP_3547.x = _RESERVED_IDENTIFIER_FIXUP_1495.x;
        _RESERVED_IDENTIFIER_FIXUP_3547.y = _RESERVED_IDENTIFIER_FIXUP_1495.y;
        _RESERVED_IDENTIFIER_FIXUP_3547.w = _RESERVED_IDENTIFIER_FIXUP_1477;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3547.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1477;
        float _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_1488 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_1517;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_3530.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3560;
        _RESERVED_IDENTIFIER_FIXUP_3560.x = _RESERVED_IDENTIFIER_FIXUP_1524.x;
        _RESERVED_IDENTIFIER_FIXUP_3560.y = _RESERVED_IDENTIFIER_FIXUP_1524.y;
        _RESERVED_IDENTIFIER_FIXUP_3560.w = _RESERVED_IDENTIFIER_FIXUP_1477;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3560.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1477;
        float _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1517 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_1546;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1553 = _RESERVED_IDENTIFIER_FIXUP_3530.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3573;
        _RESERVED_IDENTIFIER_FIXUP_3573.x = _RESERVED_IDENTIFIER_FIXUP_1553.x;
        _RESERVED_IDENTIFIER_FIXUP_3573.y = _RESERVED_IDENTIFIER_FIXUP_1553.y;
        _RESERVED_IDENTIFIER_FIXUP_3573.w = _RESERVED_IDENTIFIER_FIXUP_1477;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3573.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1477;
        float _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_1546 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_1575;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1582 = _RESERVED_IDENTIFIER_FIXUP_3530.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3586;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_1582.x;
        _RESERVED_IDENTIFIER_FIXUP_3586.y = _RESERVED_IDENTIFIER_FIXUP_1582.y;
        _RESERVED_IDENTIFIER_FIXUP_3586.w = _RESERVED_IDENTIFIER_FIXUP_1477;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3586.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1477;
        float _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_1575 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_1604;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1611 = _RESERVED_IDENTIFIER_FIXUP_3530.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3599;
        _RESERVED_IDENTIFIER_FIXUP_3599.x = _RESERVED_IDENTIFIER_FIXUP_1611.x;
        _RESERVED_IDENTIFIER_FIXUP_3599.y = _RESERVED_IDENTIFIER_FIXUP_1611.y;
        _RESERVED_IDENTIFIER_FIXUP_3599.w = _RESERVED_IDENTIFIER_FIXUP_1477;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3599.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1477;
        float _RESERVED_IDENTIFIER_FIXUP_1633 = _RESERVED_IDENTIFIER_FIXUP_1604 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_1633;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1640 = _RESERVED_IDENTIFIER_FIXUP_3530.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3612;
        _RESERVED_IDENTIFIER_FIXUP_3612.x = _RESERVED_IDENTIFIER_FIXUP_1640.x;
        _RESERVED_IDENTIFIER_FIXUP_3612.y = _RESERVED_IDENTIFIER_FIXUP_1640.y;
        _RESERVED_IDENTIFIER_FIXUP_3612.w = _RESERVED_IDENTIFIER_FIXUP_1477;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3612.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1477;
        float _RESERVED_IDENTIFIER_FIXUP_1662 = _RESERVED_IDENTIFIER_FIXUP_1633 + hdLod5(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_1662;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1669 = _RESERVED_IDENTIFIER_FIXUP_3530.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3625;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_1669.x;
        _RESERVED_IDENTIFIER_FIXUP_3625.y = _RESERVED_IDENTIFIER_FIXUP_1669.y;
        _RESERVED_IDENTIFIER_FIXUP_3625.w = _RESERVED_IDENTIFIER_FIXUP_1477;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3625.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1477;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1686 = hdLod5(param_21, param_22);
        float _RESERVED_IDENTIFIER_FIXUP_1691 = _RESERVED_IDENTIFIER_FIXUP_1662 + _RESERVED_IDENTIFIER_FIXUP_1686.x;
        _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_1691;
        _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_1691 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4100 = _RESERVED_IDENTIFIER_FIXUP_1686;
        _RESERVED_IDENTIFIER_FIXUP_4097 = _RESERVED_IDENTIFIER_FIXUP_3530;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1704 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3318.y = _RESERVED_IDENTIFIER_FIXUP_1704;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4101;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4098;
        if (_RESERVED_IDENTIFIER_FIXUP_1704 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1713 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1723 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1725 = _RESERVED_IDENTIFIER_FIXUP_1723.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3470 = _RESERVED_IDENTIFIER_FIXUP_3318;
            _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_1725;
            _RESERVED_IDENTIFIER_FIXUP_3470.z = _RESERVED_IDENTIFIER_FIXUP_1723.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1733 = _RESERVED_IDENTIFIER_FIXUP_3470.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3474;
            _RESERVED_IDENTIFIER_FIXUP_3474.x = _RESERVED_IDENTIFIER_FIXUP_1733.x;
            _RESERVED_IDENTIFIER_FIXUP_3474.y = _RESERVED_IDENTIFIER_FIXUP_1733.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1740 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_1740.y;
            _RESERVED_IDENTIFIER_FIXUP_3474.w = _RESERVED_IDENTIFIER_FIXUP_1744;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1713.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1713.w;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3474.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1744;
            float _RESERVED_IDENTIFIER_FIXUP_1755 = hdLod6(param_23, param_24).x + hdLod6(param_25, param_26).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4120 = vec4(_RESERVED_IDENTIFIER_FIXUP_1434, _RESERVED_IDENTIFIER_FIXUP_1725, _RESERVED_IDENTIFIER_FIXUP_1723.y, _RESERVED_IDENTIFIER_FIXUP_1755);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1762 = _RESERVED_IDENTIFIER_FIXUP_4120.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3487;
            _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_1762.x;
            _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_1762.y;
            _RESERVED_IDENTIFIER_FIXUP_3487.w = _RESERVED_IDENTIFIER_FIXUP_1744;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3487.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1744;
            float _RESERVED_IDENTIFIER_FIXUP_1784 = _RESERVED_IDENTIFIER_FIXUP_1755 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_4120.w = _RESERVED_IDENTIFIER_FIXUP_1784;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1791 = _RESERVED_IDENTIFIER_FIXUP_4120.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3500;
            _RESERVED_IDENTIFIER_FIXUP_3500.x = _RESERVED_IDENTIFIER_FIXUP_1791.x;
            _RESERVED_IDENTIFIER_FIXUP_3500.y = _RESERVED_IDENTIFIER_FIXUP_1791.y;
            _RESERVED_IDENTIFIER_FIXUP_3500.w = _RESERVED_IDENTIFIER_FIXUP_1744;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3500.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1744;
            float _RESERVED_IDENTIFIER_FIXUP_1813 = _RESERVED_IDENTIFIER_FIXUP_1784 + hdLod6(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_4120.w = _RESERVED_IDENTIFIER_FIXUP_1813;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1820 = _RESERVED_IDENTIFIER_FIXUP_4120.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3513;
            _RESERVED_IDENTIFIER_FIXUP_3513.x = _RESERVED_IDENTIFIER_FIXUP_1820.x;
            _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_1820.y;
            _RESERVED_IDENTIFIER_FIXUP_3513.w = _RESERVED_IDENTIFIER_FIXUP_1744;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3513.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1744;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1837 = hdLod6(param_31, param_32);
            float _RESERVED_IDENTIFIER_FIXUP_1842 = _RESERVED_IDENTIFIER_FIXUP_1813 + _RESERVED_IDENTIFIER_FIXUP_1837.x;
            _RESERVED_IDENTIFIER_FIXUP_4120.y = _RESERVED_IDENTIFIER_FIXUP_1842;
            _RESERVED_IDENTIFIER_FIXUP_4120.x = _RESERVED_IDENTIFIER_FIXUP_1842 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4101 = _RESERVED_IDENTIFIER_FIXUP_1837;
            _RESERVED_IDENTIFIER_FIXUP_4098 = _RESERVED_IDENTIFIER_FIXUP_4120;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1855 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3335 = _RESERVED_IDENTIFIER_FIXUP_3318;
            _RESERVED_IDENTIFIER_FIXUP_3335.y = _RESERVED_IDENTIFIER_FIXUP_1855;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4102;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4099;
            if (_RESERVED_IDENTIFIER_FIXUP_1855 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1864 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1874 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1876 = _RESERVED_IDENTIFIER_FIXUP_1874.x;
                _RESERVED_IDENTIFIER_FIXUP_3335.y = _RESERVED_IDENTIFIER_FIXUP_1876;
                _RESERVED_IDENTIFIER_FIXUP_3335.z = _RESERVED_IDENTIFIER_FIXUP_1874.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1884 = _RESERVED_IDENTIFIER_FIXUP_3335.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3414;
                _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_1884.x;
                _RESERVED_IDENTIFIER_FIXUP_3414.y = _RESERVED_IDENTIFIER_FIXUP_1884.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1891 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1895 = _RESERVED_IDENTIFIER_FIXUP_1891.y;
                _RESERVED_IDENTIFIER_FIXUP_3414.w = _RESERVED_IDENTIFIER_FIXUP_1895;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1864.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1864.w;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3414.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1895;
                float _RESERVED_IDENTIFIER_FIXUP_1906 = hdLod7(param_33, param_34).x + hdLod7(param_35, param_36).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4119 = vec4(_RESERVED_IDENTIFIER_FIXUP_1434, _RESERVED_IDENTIFIER_FIXUP_1876, _RESERVED_IDENTIFIER_FIXUP_1874.y, _RESERVED_IDENTIFIER_FIXUP_1906);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1913 = _RESERVED_IDENTIFIER_FIXUP_4119.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3427;
                _RESERVED_IDENTIFIER_FIXUP_3427.x = _RESERVED_IDENTIFIER_FIXUP_1913.x;
                _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_1913.y;
                _RESERVED_IDENTIFIER_FIXUP_3427.w = _RESERVED_IDENTIFIER_FIXUP_1895;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3427.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1895;
                float _RESERVED_IDENTIFIER_FIXUP_1935 = _RESERVED_IDENTIFIER_FIXUP_1906 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_4119.w = _RESERVED_IDENTIFIER_FIXUP_1935;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1942 = _RESERVED_IDENTIFIER_FIXUP_4119.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3440;
                _RESERVED_IDENTIFIER_FIXUP_3440.x = _RESERVED_IDENTIFIER_FIXUP_1942.x;
                _RESERVED_IDENTIFIER_FIXUP_3440.y = _RESERVED_IDENTIFIER_FIXUP_1942.y;
                _RESERVED_IDENTIFIER_FIXUP_3440.w = _RESERVED_IDENTIFIER_FIXUP_1895;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3440.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1895;
                float _RESERVED_IDENTIFIER_FIXUP_1964 = _RESERVED_IDENTIFIER_FIXUP_1935 + hdLod7(param_39, param_40).x;
                _RESERVED_IDENTIFIER_FIXUP_4119.w = _RESERVED_IDENTIFIER_FIXUP_1964;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1971 = _RESERVED_IDENTIFIER_FIXUP_4119.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3453;
                _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_1971.x;
                _RESERVED_IDENTIFIER_FIXUP_3453.y = _RESERVED_IDENTIFIER_FIXUP_1971.y;
                _RESERVED_IDENTIFIER_FIXUP_3453.w = _RESERVED_IDENTIFIER_FIXUP_1895;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3453.xy;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1895;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1988 = hdLod7(param_41, param_42);
                float _RESERVED_IDENTIFIER_FIXUP_1993 = _RESERVED_IDENTIFIER_FIXUP_1964 + _RESERVED_IDENTIFIER_FIXUP_1988.x;
                _RESERVED_IDENTIFIER_FIXUP_4119.y = _RESERVED_IDENTIFIER_FIXUP_1993;
                _RESERVED_IDENTIFIER_FIXUP_4119.x = _RESERVED_IDENTIFIER_FIXUP_1993 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4102 = _RESERVED_IDENTIFIER_FIXUP_1988;
                _RESERVED_IDENTIFIER_FIXUP_4099 = _RESERVED_IDENTIFIER_FIXUP_4119;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2009 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2013 = _RESERVED_IDENTIFIER_FIXUP_2009.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2024 = vec4(_RESERVED_IDENTIFIER_FIXUP_2009.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2013).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4116 = vec4(_RESERVED_IDENTIFIER_FIXUP_2024 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2013);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2061 = _RESERVED_IDENTIFIER_FIXUP_2024 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3368 = _RESERVED_IDENTIFIER_FIXUP_4116;
                _RESERVED_IDENTIFIER_FIXUP_3368.x = _RESERVED_IDENTIFIER_FIXUP_2061.x;
                _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_2061.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2083 = _RESERVED_IDENTIFIER_FIXUP_2024 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3377 = _RESERVED_IDENTIFIER_FIXUP_3368;
                _RESERVED_IDENTIFIER_FIXUP_3377.x = _RESERVED_IDENTIFIER_FIXUP_2083.x;
                _RESERVED_IDENTIFIER_FIXUP_3377.y = _RESERVED_IDENTIFIER_FIXUP_2083.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2105 = _RESERVED_IDENTIFIER_FIXUP_2024 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3386 = _RESERVED_IDENTIFIER_FIXUP_3377;
                _RESERVED_IDENTIFIER_FIXUP_3386.x = _RESERVED_IDENTIFIER_FIXUP_2105.x;
                _RESERVED_IDENTIFIER_FIXUP_3386.y = _RESERVED_IDENTIFIER_FIXUP_2105.y;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3386.xy;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_2013;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2115 = hdLod8(param_43, param_44);
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_2024;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_2013;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_4116.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_2013;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3368.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_2013;
                vec2 param_51 = _RESERVED_IDENTIFIER_FIXUP_3377.xy;
                float param_52 = _RESERVED_IDENTIFIER_FIXUP_2013;
                float _RESERVED_IDENTIFIER_FIXUP_2120 = (((hdLod8(param_45, param_46).x + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x) + hdLod8(param_51, param_52).x) + _RESERVED_IDENTIFIER_FIXUP_2115.x;
                float _RESERVED_IDENTIFIER_FIXUP_2128 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3397 = _RESERVED_IDENTIFIER_FIXUP_2115;
                _RESERVED_IDENTIFIER_FIXUP_3397.x = _RESERVED_IDENTIFIER_FIXUP_2128;
                float _RESERVED_IDENTIFIER_FIXUP_2134 = clamp((_RESERVED_IDENTIFIER_FIXUP_2128 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2139 = (_RESERVED_IDENTIFIER_FIXUP_2120 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4102 = _RESERVED_IDENTIFIER_FIXUP_3397;
                _RESERVED_IDENTIFIER_FIXUP_4099 = vec4((_RESERVED_IDENTIFIER_FIXUP_2134 * _RESERVED_IDENTIFIER_FIXUP_2139) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2134, _RESERVED_IDENTIFIER_FIXUP_2139, _RESERVED_IDENTIFIER_FIXUP_2120);
            }
            _RESERVED_IDENTIFIER_FIXUP_4101 = _RESERVED_IDENTIFIER_FIXUP_4102;
            _RESERVED_IDENTIFIER_FIXUP_4098 = _RESERVED_IDENTIFIER_FIXUP_4099;
        }
        _RESERVED_IDENTIFIER_FIXUP_4100 = _RESERVED_IDENTIFIER_FIXUP_4101;
        _RESERVED_IDENTIFIER_FIXUP_4097 = _RESERVED_IDENTIFIER_FIXUP_4098;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3644 = _RESERVED_IDENTIFIER_FIXUP_4097;
    _RESERVED_IDENTIFIER_FIXUP_3644.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3646 = _RESERVED_IDENTIFIER_FIXUP_4100;
    _RESERVED_IDENTIFIER_FIXUP_3646.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3646.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3646.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2178 = _RESERVED_IDENTIFIER_FIXUP_3644.xxx * _RESERVED_IDENTIFIER_FIXUP_3646.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4121 = vec4(_RESERVED_IDENTIFIER_FIXUP_2178.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2178.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2192 = (mix(_RESERVED_IDENTIFIER_FIXUP_1410, _RESERVED_IDENTIFIER_FIXUP_3310, _RESERVED_IDENTIFIER_FIXUP_1282.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_4121.yyy) + _RESERVED_IDENTIFIER_FIXUP_4121.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3658 = _RESERVED_IDENTIFIER_FIXUP_4121;
    _RESERVED_IDENTIFIER_FIXUP_3658.x = _RESERVED_IDENTIFIER_FIXUP_2192.x;
    _RESERVED_IDENTIFIER_FIXUP_3658.y = _RESERVED_IDENTIFIER_FIXUP_2192.y;
    _RESERVED_IDENTIFIER_FIXUP_3658.z = _RESERVED_IDENTIFIER_FIXUP_2192.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2205 = _RESERVED_IDENTIFIER_FIXUP_3658.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3664 = _RESERVED_IDENTIFIER_FIXUP_3658;
    _RESERVED_IDENTIFIER_FIXUP_3664.x = _RESERVED_IDENTIFIER_FIXUP_2205.x;
    _RESERVED_IDENTIFIER_FIXUP_3664.y = _RESERVED_IDENTIFIER_FIXUP_2205.y;
    _RESERVED_IDENTIFIER_FIXUP_3664.z = _RESERVED_IDENTIFIER_FIXUP_2205.z;
    vec2 param_53 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2262 = hdTex0(param_53);
    vec2 param_54 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2266 = hdTex1(param_54);
    vec2 param_55 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2270 = hdTex2(param_55);
    vec2 param_56 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2274 = hdTex3(param_56);
    vec2 param_57 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2278 = hdTex4(param_57);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2286 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3678;
    _RESERVED_IDENTIFIER_FIXUP_3678.x = _RESERVED_IDENTIFIER_FIXUP_2286.x;
    _RESERVED_IDENTIFIER_FIXUP_3678.y = _RESERVED_IDENTIFIER_FIXUP_2286.y;
    _RESERVED_IDENTIFIER_FIXUP_3678.z = _RESERVED_IDENTIFIER_FIXUP_2286.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2294 = _RESERVED_IDENTIFIER_FIXUP_2262.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2297 = _RESERVED_IDENTIFIER_FIXUP_2294 * _RESERVED_IDENTIFIER_FIXUP_3678.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3684;
    _RESERVED_IDENTIFIER_FIXUP_3684.x = _RESERVED_IDENTIFIER_FIXUP_2297.x;
    _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2297.y;
    _RESERVED_IDENTIFIER_FIXUP_3684.z = _RESERVED_IDENTIFIER_FIXUP_2297.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2312 = mix(_RESERVED_IDENTIFIER_FIXUP_3684.xyz, _RESERVED_IDENTIFIER_FIXUP_2294, _RESERVED_IDENTIFIER_FIXUP_1315);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3690 = _RESERVED_IDENTIFIER_FIXUP_2262;
    _RESERVED_IDENTIFIER_FIXUP_3690.x = _RESERVED_IDENTIFIER_FIXUP_2312.x;
    _RESERVED_IDENTIFIER_FIXUP_3690.y = _RESERVED_IDENTIFIER_FIXUP_2312.y;
    _RESERVED_IDENTIFIER_FIXUP_3690.z = _RESERVED_IDENTIFIER_FIXUP_2312.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2320 = _RESERVED_IDENTIFIER_FIXUP_2266.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2323 = _RESERVED_IDENTIFIER_FIXUP_2320 * _RESERVED_IDENTIFIER_FIXUP_3678.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3696;
    _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2323.x;
    _RESERVED_IDENTIFIER_FIXUP_3696.y = _RESERVED_IDENTIFIER_FIXUP_2323.y;
    _RESERVED_IDENTIFIER_FIXUP_3696.z = _RESERVED_IDENTIFIER_FIXUP_2323.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2338 = mix(_RESERVED_IDENTIFIER_FIXUP_3696.xyz, _RESERVED_IDENTIFIER_FIXUP_2320, _RESERVED_IDENTIFIER_FIXUP_1341);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3702 = _RESERVED_IDENTIFIER_FIXUP_2266;
    _RESERVED_IDENTIFIER_FIXUP_3702.x = _RESERVED_IDENTIFIER_FIXUP_2338.x;
    _RESERVED_IDENTIFIER_FIXUP_3702.y = _RESERVED_IDENTIFIER_FIXUP_2338.y;
    _RESERVED_IDENTIFIER_FIXUP_3702.z = _RESERVED_IDENTIFIER_FIXUP_2338.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2346 = _RESERVED_IDENTIFIER_FIXUP_2270.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2349 = _RESERVED_IDENTIFIER_FIXUP_2346 * _RESERVED_IDENTIFIER_FIXUP_3678.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3708;
    _RESERVED_IDENTIFIER_FIXUP_3708.x = _RESERVED_IDENTIFIER_FIXUP_2349.x;
    _RESERVED_IDENTIFIER_FIXUP_3708.y = _RESERVED_IDENTIFIER_FIXUP_2349.y;
    _RESERVED_IDENTIFIER_FIXUP_3708.z = _RESERVED_IDENTIFIER_FIXUP_2349.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2364 = mix(_RESERVED_IDENTIFIER_FIXUP_3708.xyz, _RESERVED_IDENTIFIER_FIXUP_2346, _RESERVED_IDENTIFIER_FIXUP_1367);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3714 = _RESERVED_IDENTIFIER_FIXUP_2270;
    _RESERVED_IDENTIFIER_FIXUP_3714.x = _RESERVED_IDENTIFIER_FIXUP_2364.x;
    _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_2364.y;
    _RESERVED_IDENTIFIER_FIXUP_3714.z = _RESERVED_IDENTIFIER_FIXUP_2364.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2372 = _RESERVED_IDENTIFIER_FIXUP_2274.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2375 = _RESERVED_IDENTIFIER_FIXUP_2372 * _RESERVED_IDENTIFIER_FIXUP_3678.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3720 = _RESERVED_IDENTIFIER_FIXUP_1285;
    _RESERVED_IDENTIFIER_FIXUP_3720.x = _RESERVED_IDENTIFIER_FIXUP_2375.x;
    _RESERVED_IDENTIFIER_FIXUP_3720.y = _RESERVED_IDENTIFIER_FIXUP_2375.y;
    _RESERVED_IDENTIFIER_FIXUP_3720.z = _RESERVED_IDENTIFIER_FIXUP_2375.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2390 = mix(_RESERVED_IDENTIFIER_FIXUP_3720.xyz, _RESERVED_IDENTIFIER_FIXUP_2372, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3720.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3726 = _RESERVED_IDENTIFIER_FIXUP_2274;
    _RESERVED_IDENTIFIER_FIXUP_3726.x = _RESERVED_IDENTIFIER_FIXUP_2390.x;
    _RESERVED_IDENTIFIER_FIXUP_3726.y = _RESERVED_IDENTIFIER_FIXUP_2390.y;
    _RESERVED_IDENTIFIER_FIXUP_3726.z = _RESERVED_IDENTIFIER_FIXUP_2390.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2406 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3690, _RESERVED_IDENTIFIER_FIXUP_3702, _RESERVED_IDENTIFIER_FIXUP_2278.xxxx), _RESERVED_IDENTIFIER_FIXUP_3714, _RESERVED_IDENTIFIER_FIXUP_2278.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2411 = mix(_RESERVED_IDENTIFIER_FIXUP_2406, _RESERVED_IDENTIFIER_FIXUP_3726, _RESERVED_IDENTIFIER_FIXUP_2278.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3734 = _RESERVED_IDENTIFIER_FIXUP_2406;
    _RESERVED_IDENTIFIER_FIXUP_3734.x = _RESERVED_IDENTIFIER_FIXUP_1422;
    float _RESERVED_IDENTIFIER_FIXUP_2424 = clamp((_RESERVED_IDENTIFIER_FIXUP_1422 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3734.x = _RESERVED_IDENTIFIER_FIXUP_2424;
    float _RESERVED_IDENTIFIER_FIXUP_2430 = ((-_RESERVED_IDENTIFIER_FIXUP_2424) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3734.x = _RESERVED_IDENTIFIER_FIXUP_2430;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4109;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4106;
    if (_RESERVED_IDENTIFIER_FIXUP_2430 != (-_RESERVED_IDENTIFIER_FIXUP_2430))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2442 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2442.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2442.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2448 = hdLod5(param_58, param_59);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2452 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3946 = _RESERVED_IDENTIFIER_FIXUP_2448;
        _RESERVED_IDENTIFIER_FIXUP_3946.y = _RESERVED_IDENTIFIER_FIXUP_2452.x;
        _RESERVED_IDENTIFIER_FIXUP_3946.z = _RESERVED_IDENTIFIER_FIXUP_2452.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2462 = _RESERVED_IDENTIFIER_FIXUP_3946.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3950;
        _RESERVED_IDENTIFIER_FIXUP_3950.x = _RESERVED_IDENTIFIER_FIXUP_2462.x;
        _RESERVED_IDENTIFIER_FIXUP_3950.y = _RESERVED_IDENTIFIER_FIXUP_2462.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2469 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2473 = _RESERVED_IDENTIFIER_FIXUP_2469.y;
        _RESERVED_IDENTIFIER_FIXUP_3950.w = _RESERVED_IDENTIFIER_FIXUP_2473;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3950.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2473;
        float _RESERVED_IDENTIFIER_FIXUP_2484 = _RESERVED_IDENTIFIER_FIXUP_2448.x + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3946.x = _RESERVED_IDENTIFIER_FIXUP_2484;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2491 = _RESERVED_IDENTIFIER_FIXUP_3946.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3963;
        _RESERVED_IDENTIFIER_FIXUP_3963.x = _RESERVED_IDENTIFIER_FIXUP_2491.x;
        _RESERVED_IDENTIFIER_FIXUP_3963.y = _RESERVED_IDENTIFIER_FIXUP_2491.y;
        _RESERVED_IDENTIFIER_FIXUP_3963.w = _RESERVED_IDENTIFIER_FIXUP_2473;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3963.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2473;
        float _RESERVED_IDENTIFIER_FIXUP_2513 = _RESERVED_IDENTIFIER_FIXUP_2484 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3946.x = _RESERVED_IDENTIFIER_FIXUP_2513;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2520 = _RESERVED_IDENTIFIER_FIXUP_3946.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3976;
        _RESERVED_IDENTIFIER_FIXUP_3976.x = _RESERVED_IDENTIFIER_FIXUP_2520.x;
        _RESERVED_IDENTIFIER_FIXUP_3976.y = _RESERVED_IDENTIFIER_FIXUP_2520.y;
        _RESERVED_IDENTIFIER_FIXUP_3976.w = _RESERVED_IDENTIFIER_FIXUP_2473;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3976.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2473;
        float _RESERVED_IDENTIFIER_FIXUP_2542 = _RESERVED_IDENTIFIER_FIXUP_2513 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3946.x = _RESERVED_IDENTIFIER_FIXUP_2542;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2549 = _RESERVED_IDENTIFIER_FIXUP_3946.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3989;
        _RESERVED_IDENTIFIER_FIXUP_3989.x = _RESERVED_IDENTIFIER_FIXUP_2549.x;
        _RESERVED_IDENTIFIER_FIXUP_3989.y = _RESERVED_IDENTIFIER_FIXUP_2549.y;
        _RESERVED_IDENTIFIER_FIXUP_3989.w = _RESERVED_IDENTIFIER_FIXUP_2473;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3989.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2473;
        float _RESERVED_IDENTIFIER_FIXUP_2571 = _RESERVED_IDENTIFIER_FIXUP_2542 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3946.x = _RESERVED_IDENTIFIER_FIXUP_2571;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2578 = _RESERVED_IDENTIFIER_FIXUP_3946.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4002;
        _RESERVED_IDENTIFIER_FIXUP_4002.x = _RESERVED_IDENTIFIER_FIXUP_2578.x;
        _RESERVED_IDENTIFIER_FIXUP_4002.y = _RESERVED_IDENTIFIER_FIXUP_2578.y;
        _RESERVED_IDENTIFIER_FIXUP_4002.w = _RESERVED_IDENTIFIER_FIXUP_2473;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_4002.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2473;
        float _RESERVED_IDENTIFIER_FIXUP_2600 = _RESERVED_IDENTIFIER_FIXUP_2571 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3946.x = _RESERVED_IDENTIFIER_FIXUP_2600;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2607 = _RESERVED_IDENTIFIER_FIXUP_3946.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4015;
        _RESERVED_IDENTIFIER_FIXUP_4015.x = _RESERVED_IDENTIFIER_FIXUP_2607.x;
        _RESERVED_IDENTIFIER_FIXUP_4015.y = _RESERVED_IDENTIFIER_FIXUP_2607.y;
        _RESERVED_IDENTIFIER_FIXUP_4015.w = _RESERVED_IDENTIFIER_FIXUP_2473;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_4015.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2473;
        float _RESERVED_IDENTIFIER_FIXUP_2629 = _RESERVED_IDENTIFIER_FIXUP_2600 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3946.x = _RESERVED_IDENTIFIER_FIXUP_2629;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2636 = _RESERVED_IDENTIFIER_FIXUP_3946.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4028;
        _RESERVED_IDENTIFIER_FIXUP_4028.x = _RESERVED_IDENTIFIER_FIXUP_2636.x;
        _RESERVED_IDENTIFIER_FIXUP_4028.y = _RESERVED_IDENTIFIER_FIXUP_2636.y;
        _RESERVED_IDENTIFIER_FIXUP_4028.w = _RESERVED_IDENTIFIER_FIXUP_2473;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_4028.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2473;
        float _RESERVED_IDENTIFIER_FIXUP_2658 = _RESERVED_IDENTIFIER_FIXUP_2629 + hdLod5(param_72, param_73).x;
        _RESERVED_IDENTIFIER_FIXUP_3946.x = _RESERVED_IDENTIFIER_FIXUP_2658;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2665 = _RESERVED_IDENTIFIER_FIXUP_3946.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4041;
        _RESERVED_IDENTIFIER_FIXUP_4041.x = _RESERVED_IDENTIFIER_FIXUP_2665.x;
        _RESERVED_IDENTIFIER_FIXUP_4041.y = _RESERVED_IDENTIFIER_FIXUP_2665.y;
        _RESERVED_IDENTIFIER_FIXUP_4041.w = _RESERVED_IDENTIFIER_FIXUP_2473;
        vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_4041.xy;
        float param_75 = _RESERVED_IDENTIFIER_FIXUP_2473;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2682 = hdLod5(param_74, param_75);
        float _RESERVED_IDENTIFIER_FIXUP_2687 = _RESERVED_IDENTIFIER_FIXUP_2658 + _RESERVED_IDENTIFIER_FIXUP_2682.x;
        _RESERVED_IDENTIFIER_FIXUP_3946.x = _RESERVED_IDENTIFIER_FIXUP_2687;
        _RESERVED_IDENTIFIER_FIXUP_3946.x = _RESERVED_IDENTIFIER_FIXUP_2687 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4109 = _RESERVED_IDENTIFIER_FIXUP_2682;
        _RESERVED_IDENTIFIER_FIXUP_4106 = _RESERVED_IDENTIFIER_FIXUP_3946;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2700 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3734.y = _RESERVED_IDENTIFIER_FIXUP_2700;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4110;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4107;
        if (_RESERVED_IDENTIFIER_FIXUP_2700 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2709 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2719 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2721 = _RESERVED_IDENTIFIER_FIXUP_2719.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3886 = _RESERVED_IDENTIFIER_FIXUP_3734;
            _RESERVED_IDENTIFIER_FIXUP_3886.y = _RESERVED_IDENTIFIER_FIXUP_2721;
            _RESERVED_IDENTIFIER_FIXUP_3886.z = _RESERVED_IDENTIFIER_FIXUP_2719.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2729 = _RESERVED_IDENTIFIER_FIXUP_3886.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3890;
            _RESERVED_IDENTIFIER_FIXUP_3890.x = _RESERVED_IDENTIFIER_FIXUP_2729.x;
            _RESERVED_IDENTIFIER_FIXUP_3890.y = _RESERVED_IDENTIFIER_FIXUP_2729.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2736 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2740 = _RESERVED_IDENTIFIER_FIXUP_2736.y;
            _RESERVED_IDENTIFIER_FIXUP_3890.w = _RESERVED_IDENTIFIER_FIXUP_2740;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2709.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2709.w;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3890.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2740;
            float _RESERVED_IDENTIFIER_FIXUP_2751 = hdLod6(param_76, param_77).x + hdLod6(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4128 = vec4(_RESERVED_IDENTIFIER_FIXUP_2430, _RESERVED_IDENTIFIER_FIXUP_2721, _RESERVED_IDENTIFIER_FIXUP_2719.y, _RESERVED_IDENTIFIER_FIXUP_2751);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2758 = _RESERVED_IDENTIFIER_FIXUP_4128.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3903;
            _RESERVED_IDENTIFIER_FIXUP_3903.x = _RESERVED_IDENTIFIER_FIXUP_2758.x;
            _RESERVED_IDENTIFIER_FIXUP_3903.y = _RESERVED_IDENTIFIER_FIXUP_2758.y;
            _RESERVED_IDENTIFIER_FIXUP_3903.w = _RESERVED_IDENTIFIER_FIXUP_2740;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3903.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2740;
            float _RESERVED_IDENTIFIER_FIXUP_2780 = _RESERVED_IDENTIFIER_FIXUP_2751 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_4128.w = _RESERVED_IDENTIFIER_FIXUP_2780;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2787 = _RESERVED_IDENTIFIER_FIXUP_4128.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3916;
            _RESERVED_IDENTIFIER_FIXUP_3916.x = _RESERVED_IDENTIFIER_FIXUP_2787.x;
            _RESERVED_IDENTIFIER_FIXUP_3916.y = _RESERVED_IDENTIFIER_FIXUP_2787.y;
            _RESERVED_IDENTIFIER_FIXUP_3916.w = _RESERVED_IDENTIFIER_FIXUP_2740;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3916.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2740;
            float _RESERVED_IDENTIFIER_FIXUP_2809 = _RESERVED_IDENTIFIER_FIXUP_2780 + hdLod6(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_4128.w = _RESERVED_IDENTIFIER_FIXUP_2809;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2816 = _RESERVED_IDENTIFIER_FIXUP_4128.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3929;
            _RESERVED_IDENTIFIER_FIXUP_3929.x = _RESERVED_IDENTIFIER_FIXUP_2816.x;
            _RESERVED_IDENTIFIER_FIXUP_3929.y = _RESERVED_IDENTIFIER_FIXUP_2816.y;
            _RESERVED_IDENTIFIER_FIXUP_3929.w = _RESERVED_IDENTIFIER_FIXUP_2740;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3929.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2740;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2833 = hdLod6(param_84, param_85);
            float _RESERVED_IDENTIFIER_FIXUP_2838 = _RESERVED_IDENTIFIER_FIXUP_2809 + _RESERVED_IDENTIFIER_FIXUP_2833.x;
            _RESERVED_IDENTIFIER_FIXUP_4128.y = _RESERVED_IDENTIFIER_FIXUP_2838;
            _RESERVED_IDENTIFIER_FIXUP_4128.x = _RESERVED_IDENTIFIER_FIXUP_2838 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4110 = _RESERVED_IDENTIFIER_FIXUP_2833;
            _RESERVED_IDENTIFIER_FIXUP_4107 = _RESERVED_IDENTIFIER_FIXUP_4128;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2851 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3751 = _RESERVED_IDENTIFIER_FIXUP_3734;
            _RESERVED_IDENTIFIER_FIXUP_3751.y = _RESERVED_IDENTIFIER_FIXUP_2851;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4111;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4108;
            if (_RESERVED_IDENTIFIER_FIXUP_2851 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2860 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2870 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2872 = _RESERVED_IDENTIFIER_FIXUP_2870.x;
                _RESERVED_IDENTIFIER_FIXUP_3751.y = _RESERVED_IDENTIFIER_FIXUP_2872;
                _RESERVED_IDENTIFIER_FIXUP_3751.z = _RESERVED_IDENTIFIER_FIXUP_2870.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2880 = _RESERVED_IDENTIFIER_FIXUP_3751.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3830;
                _RESERVED_IDENTIFIER_FIXUP_3830.x = _RESERVED_IDENTIFIER_FIXUP_2880.x;
                _RESERVED_IDENTIFIER_FIXUP_3830.y = _RESERVED_IDENTIFIER_FIXUP_2880.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2887 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2891 = _RESERVED_IDENTIFIER_FIXUP_2887.y;
                _RESERVED_IDENTIFIER_FIXUP_3830.w = _RESERVED_IDENTIFIER_FIXUP_2891;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_2860.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2860.w;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3830.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2891;
                float _RESERVED_IDENTIFIER_FIXUP_2902 = hdLod7(param_86, param_87).x + hdLod7(param_88, param_89).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4127 = vec4(_RESERVED_IDENTIFIER_FIXUP_2430, _RESERVED_IDENTIFIER_FIXUP_2872, _RESERVED_IDENTIFIER_FIXUP_2870.y, _RESERVED_IDENTIFIER_FIXUP_2902);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2909 = _RESERVED_IDENTIFIER_FIXUP_4127.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3843;
                _RESERVED_IDENTIFIER_FIXUP_3843.x = _RESERVED_IDENTIFIER_FIXUP_2909.x;
                _RESERVED_IDENTIFIER_FIXUP_3843.y = _RESERVED_IDENTIFIER_FIXUP_2909.y;
                _RESERVED_IDENTIFIER_FIXUP_3843.w = _RESERVED_IDENTIFIER_FIXUP_2891;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3843.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2891;
                float _RESERVED_IDENTIFIER_FIXUP_2931 = _RESERVED_IDENTIFIER_FIXUP_2902 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_4127.w = _RESERVED_IDENTIFIER_FIXUP_2931;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2938 = _RESERVED_IDENTIFIER_FIXUP_4127.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3856;
                _RESERVED_IDENTIFIER_FIXUP_3856.x = _RESERVED_IDENTIFIER_FIXUP_2938.x;
                _RESERVED_IDENTIFIER_FIXUP_3856.y = _RESERVED_IDENTIFIER_FIXUP_2938.y;
                _RESERVED_IDENTIFIER_FIXUP_3856.w = _RESERVED_IDENTIFIER_FIXUP_2891;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3856.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2891;
                float _RESERVED_IDENTIFIER_FIXUP_2960 = _RESERVED_IDENTIFIER_FIXUP_2931 + hdLod7(param_92, param_93).x;
                _RESERVED_IDENTIFIER_FIXUP_4127.w = _RESERVED_IDENTIFIER_FIXUP_2960;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2967 = _RESERVED_IDENTIFIER_FIXUP_4127.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3869;
                _RESERVED_IDENTIFIER_FIXUP_3869.x = _RESERVED_IDENTIFIER_FIXUP_2967.x;
                _RESERVED_IDENTIFIER_FIXUP_3869.y = _RESERVED_IDENTIFIER_FIXUP_2967.y;
                _RESERVED_IDENTIFIER_FIXUP_3869.w = _RESERVED_IDENTIFIER_FIXUP_2891;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3869.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2891;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2984 = hdLod7(param_94, param_95);
                float _RESERVED_IDENTIFIER_FIXUP_2989 = _RESERVED_IDENTIFIER_FIXUP_2960 + _RESERVED_IDENTIFIER_FIXUP_2984.x;
                _RESERVED_IDENTIFIER_FIXUP_4127.y = _RESERVED_IDENTIFIER_FIXUP_2989;
                _RESERVED_IDENTIFIER_FIXUP_4127.x = _RESERVED_IDENTIFIER_FIXUP_2989 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4111 = _RESERVED_IDENTIFIER_FIXUP_2984;
                _RESERVED_IDENTIFIER_FIXUP_4108 = _RESERVED_IDENTIFIER_FIXUP_4127;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_3005 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_3009 = _RESERVED_IDENTIFIER_FIXUP_3005.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3020 = vec4(_RESERVED_IDENTIFIER_FIXUP_3005.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_3009).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4124 = vec4(_RESERVED_IDENTIFIER_FIXUP_3020 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_3009);
                vec2 _RESERVED_IDENTIFIER_FIXUP_3057 = _RESERVED_IDENTIFIER_FIXUP_3020 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3784 = _RESERVED_IDENTIFIER_FIXUP_4124;
                _RESERVED_IDENTIFIER_FIXUP_3784.x = _RESERVED_IDENTIFIER_FIXUP_3057.x;
                _RESERVED_IDENTIFIER_FIXUP_3784.y = _RESERVED_IDENTIFIER_FIXUP_3057.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3079 = _RESERVED_IDENTIFIER_FIXUP_3020 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3793 = _RESERVED_IDENTIFIER_FIXUP_3784;
                _RESERVED_IDENTIFIER_FIXUP_3793.x = _RESERVED_IDENTIFIER_FIXUP_3079.x;
                _RESERVED_IDENTIFIER_FIXUP_3793.y = _RESERVED_IDENTIFIER_FIXUP_3079.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3101 = _RESERVED_IDENTIFIER_FIXUP_3020 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3802 = _RESERVED_IDENTIFIER_FIXUP_3793;
                _RESERVED_IDENTIFIER_FIXUP_3802.x = _RESERVED_IDENTIFIER_FIXUP_3101.x;
                _RESERVED_IDENTIFIER_FIXUP_3802.y = _RESERVED_IDENTIFIER_FIXUP_3101.y;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3802.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_3009;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3111 = hdLod8(param_96, param_97);
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3020;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_3009;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_4124.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_3009;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3784.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_3009;
                vec2 param_104 = _RESERVED_IDENTIFIER_FIXUP_3793.xy;
                float param_105 = _RESERVED_IDENTIFIER_FIXUP_3009;
                float _RESERVED_IDENTIFIER_FIXUP_3116 = (((hdLod8(param_98, param_99).x + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x) + hdLod8(param_104, param_105).x) + _RESERVED_IDENTIFIER_FIXUP_3111.x;
                float _RESERVED_IDENTIFIER_FIXUP_3124 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3813 = _RESERVED_IDENTIFIER_FIXUP_3111;
                _RESERVED_IDENTIFIER_FIXUP_3813.x = _RESERVED_IDENTIFIER_FIXUP_3124;
                float _RESERVED_IDENTIFIER_FIXUP_3130 = clamp((_RESERVED_IDENTIFIER_FIXUP_3124 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_3135 = (_RESERVED_IDENTIFIER_FIXUP_3116 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4111 = _RESERVED_IDENTIFIER_FIXUP_3813;
                _RESERVED_IDENTIFIER_FIXUP_4108 = vec4((_RESERVED_IDENTIFIER_FIXUP_3130 * _RESERVED_IDENTIFIER_FIXUP_3135) + 1.0, _RESERVED_IDENTIFIER_FIXUP_3130, _RESERVED_IDENTIFIER_FIXUP_3135, _RESERVED_IDENTIFIER_FIXUP_3116);
            }
            _RESERVED_IDENTIFIER_FIXUP_4110 = _RESERVED_IDENTIFIER_FIXUP_4111;
            _RESERVED_IDENTIFIER_FIXUP_4107 = _RESERVED_IDENTIFIER_FIXUP_4108;
        }
        _RESERVED_IDENTIFIER_FIXUP_4109 = _RESERVED_IDENTIFIER_FIXUP_4110;
        _RESERVED_IDENTIFIER_FIXUP_4106 = _RESERVED_IDENTIFIER_FIXUP_4107;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3150 = (_RESERVED_IDENTIFIER_FIXUP_4106.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4058 = _RESERVED_IDENTIFIER_FIXUP_4106;
    _RESERVED_IDENTIFIER_FIXUP_4058.y = _RESERVED_IDENTIFIER_FIXUP_3150;
    _RESERVED_IDENTIFIER_FIXUP_4058.y = _RESERVED_IDENTIFIER_FIXUP_3150;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3163 = _RESERVED_IDENTIFIER_FIXUP_2411.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4064 = _RESERVED_IDENTIFIER_FIXUP_4109;
    _RESERVED_IDENTIFIER_FIXUP_4064.x = _RESERVED_IDENTIFIER_FIXUP_3163.x;
    _RESERVED_IDENTIFIER_FIXUP_4064.y = _RESERVED_IDENTIFIER_FIXUP_3163.y;
    _RESERVED_IDENTIFIER_FIXUP_4064.z = _RESERVED_IDENTIFIER_FIXUP_3163.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3174 = _RESERVED_IDENTIFIER_FIXUP_4058.xxx * _RESERVED_IDENTIFIER_FIXUP_4064.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4129 = vec4(_RESERVED_IDENTIFIER_FIXUP_3174.x, _RESERVED_IDENTIFIER_FIXUP_3150, _RESERVED_IDENTIFIER_FIXUP_3174.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3188 = (_RESERVED_IDENTIFIER_FIXUP_2411.xyz * _RESERVED_IDENTIFIER_FIXUP_4129.yyy) + _RESERVED_IDENTIFIER_FIXUP_4129.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4076 = _RESERVED_IDENTIFIER_FIXUP_4129;
    _RESERVED_IDENTIFIER_FIXUP_4076.x = _RESERVED_IDENTIFIER_FIXUP_3188.x;
    _RESERVED_IDENTIFIER_FIXUP_4076.y = _RESERVED_IDENTIFIER_FIXUP_3188.y;
    _RESERVED_IDENTIFIER_FIXUP_4076.z = _RESERVED_IDENTIFIER_FIXUP_3188.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3201 = _RESERVED_IDENTIFIER_FIXUP_4076.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4082 = _RESERVED_IDENTIFIER_FIXUP_4076;
    _RESERVED_IDENTIFIER_FIXUP_4082.x = _RESERVED_IDENTIFIER_FIXUP_3201.x;
    _RESERVED_IDENTIFIER_FIXUP_4082.y = _RESERVED_IDENTIFIER_FIXUP_3201.y;
    _RESERVED_IDENTIFIER_FIXUP_4082.z = _RESERVED_IDENTIFIER_FIXUP_3201.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4082.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1124 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1133;
    if (_RESERVED_IDENTIFIER_FIXUP_1124)
    {
        _RESERVED_IDENTIFIER_FIXUP_1133 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1133 = _RESERVED_IDENTIFIER_FIXUP_1124;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1133)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1170 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3664.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1196 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3254;
    if (_RESERVED_IDENTIFIER_FIXUP_1170 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3254 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1170), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1196);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3254 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1196);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3254;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3150);
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
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 hdB100 = v0.xyz + v0.xyz;
    r6.x = hdB100.x;
    r6.y = hdB100.y;
    r6.z = hdB100.z;
    vec3 hdB115 = r0.xyz * r6.xyz;
    r7.x = hdB115.x;
    r7.y = hdB115.y;
    r7.z = hdB115.z;
    vec4 hdB124 = r0;
    vec3 hdB133 = mix(r7.xyz, hdB124.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB133.x;
    r0.y = hdB133.y;
    r0.z = hdB133.z;
    vec3 hdB144 = r1.xyz * r6.xyz;
    r7.x = hdB144.x;
    r7.y = hdB144.y;
    r7.z = hdB144.z;
    vec4 hdB153 = r1;
    vec3 hdB159 = mix(r7.xyz, hdB153.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB159.x;
    r1.y = hdB159.y;
    r1.z = hdB159.z;
    vec3 hdB170 = r2.xyz * r6.xyz;
    r7.x = hdB170.x;
    r7.y = hdB170.y;
    r7.z = hdB170.z;
    vec4 hdB179 = r2;
    vec3 hdB185 = mix(r7.xyz, hdB179.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB185.x;
    r2.y = hdB185.y;
    r2.z = hdB185.z;
    vec3 hdB196 = r3.xyz * r6.xyz;
    r5.x = hdB196.x;
    r5.y = hdB196.y;
    r5.z = hdB196.z;
    vec4 hdB205 = r3;
    vec3 hdB211 = mix(r5.xyz, hdB205.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB211.x;
    r3.y = hdB211.y;
    r3.z = hdB211.z;
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
        vec2 hdB283 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB283.x;
        r0.z = hdB283.y;
        vec2 hdB294 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB294.x;
        r2.y = hdB294.y;
        vec2 hdB302 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB302.x;
        r2.w = hdB302.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r0.x += r2.x;
        vec2 hdB325 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB325.x;
        r2.y = hdB325.y;
        vec2 hdB332 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB332.x;
        r2.w = hdB332.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r0.x += r2.x;
        vec2 hdB355 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB355.x;
        r2.y = hdB355.y;
        vec2 hdB362 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB362.x;
        r2.w = hdB362.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r0.x += r2.x;
        vec2 hdB385 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB385.x;
        r2.y = hdB385.y;
        vec2 hdB392 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB392.x;
        r2.w = hdB392.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r0.x += r2.x;
        vec2 hdB415 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB415.x;
        r2.y = hdB415.y;
        vec2 hdB422 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB422.x;
        r2.w = hdB422.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r0.x += r2.x;
        vec2 hdB445 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB445.x;
        r2.y = hdB445.y;
        vec2 hdB452 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB452.x;
        r2.w = hdB452.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r0.x += r2.x;
        vec2 hdB475 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB475.x;
        r2.y = hdB475.y;
        vec2 hdB482 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB482.x;
        r2.w = hdB482.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod5(param_19, param_20);
        r0.x += r2.x;
        vec2 hdB505 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB505.x;
        r2.y = hdB505.y;
        vec2 hdB512 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB512.x;
        r2.w = hdB512.y;
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
            vec2 hdB562 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB562.x;
            r0.z = hdB562.y;
            vec2 hdB572 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB572.x;
            r3.y = hdB572.y;
            vec2 hdB579 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB579.x;
            r3.w = hdB579.y;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod6(param_25, param_26);
            r0.w = r2.x + r3.x;
            vec2 hdB601 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB601.x;
            r2.y = hdB601.y;
            vec2 hdB608 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB608.x;
            r2.w = hdB608.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r0.w += r2.x;
            vec2 hdB630 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB630.x;
            r2.y = hdB630.y;
            vec2 hdB637 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB637.x;
            r2.w = hdB637.y;
            vec2 param_29 = r2.xy;
            float param_30 = r2.w;
            r2 = hdLod6(param_29, param_30);
            r0.w += r2.x;
            vec2 hdB659 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB659.x;
            r2.y = hdB659.y;
            vec2 hdB666 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB666.x;
            r2.w = hdB666.y;
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
                vec2 hdB716 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB716.x;
                r0.z = hdB716.y;
                vec2 hdB726 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB726.x;
                r3.y = hdB726.y;
                vec2 hdB733 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB733.x;
                r3.w = hdB733.y;
                vec2 param_35 = r3.xy;
                float param_36 = r3.w;
                r3 = hdLod7(param_35, param_36);
                r0.w = r2.x + r3.x;
                vec2 hdB755 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB755.x;
                r2.y = hdB755.y;
                vec2 hdB762 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB762.x;
                r2.w = hdB762.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r0.w += r2.x;
                vec2 hdB784 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB784.x;
                r2.y = hdB784.y;
                vec2 hdB791 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB791.x;
                r2.w = hdB791.y;
                vec2 param_39 = r2.xy;
                float param_40 = r2.w;
                r2 = hdLod7(param_39, param_40);
                r0.w += r2.x;
                vec2 hdB813 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB813.x;
                r2.y = hdB813.y;
                vec2 hdB820 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB820.x;
                r2.w = hdB820.y;
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
                vec2 hdB852 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB852.x;
                r2.w = hdB852.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_43 = r2.xy;
                float param_44 = r2.w;
                r3 = hdLod8(param_43, param_44);
                vec2 hdB877 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB877.x;
                r4.y = hdB877.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r5 = hdLod8(param_45, param_46);
                r0.w = r3.x + r5.x;
                vec2 hdB905 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB905.x;
                r4.y = hdB905.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r3 = hdLod8(param_47, param_48);
                r0.w += r3.x;
                vec2 hdB927 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB927.x;
                r4.y = hdB927.y;
                vec2 param_49 = r4.xy;
                float param_50 = r4.w;
                r3 = hdLod8(param_49, param_50);
                r0.w += r3.x;
                vec2 hdB949 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB949.x;
                r4.y = hdB949.y;
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
    vec3 hdB1006 = r1.www * v1.xyz;
    r2.x = hdB1006.x;
    r2.y = hdB1006.y;
    r2.z = hdB1006.z;
    vec4 hdB1013 = r0;
    vec3 hdB1017 = hdB1013.xxx * r2.xyz;
    r0.x = hdB1017.x;
    r0.z = hdB1017.y;
    r0.w = hdB1017.z;
    vec4 hdB1026 = r0;
    vec4 hdB1029 = r0;
    vec3 hdB1031 = (r1.xyz * hdB1026.yyy) + hdB1029.xzw;
    r0.x = hdB1031.x;
    r0.y = hdB1031.y;
    r0.z = hdB1031.z;
    vec4 hdB1038 = r0;
    vec3 hdB1045 = hdB1038.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1045.x;
    r0.y = hdB1045.y;
    r0.z = hdB1045.z;
    vec3 hdB1060 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1060.x;
    oC0.y = hdB1060.y;
    oC0.z = hdB1060.z;
    oC0.w = 1.0;
    bool hdB1072 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1080;
    if (hdB1072)
    {
        hdB1080 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1080 = hdB1072;
    }
    if (hdB1080)
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
    bool _3898 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3908;
    if (_3898)
    {
        _3908 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3908 = _3898;
    }
    if (_3908)
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
        bool _3933 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3948;
        if (!_3933)
        {
            _3948 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3948 = _3933;
        }
        if (_3948)
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
