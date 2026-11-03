#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3903;
vec4 _RESERVED_IDENTIFIER_FIXUP_3904;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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
    bool _58 = hdOverride >= 0;
    bool _77;
    if (_58)
    {
        _77 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _77 = _58;
    }
    vec4 _78;
    if (_77)
    {
        _78 = vec4(float(hdOverride));
    }
    else
    {
        _78 = value;
    }
    return _78;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _95 = hdOverride >= 0;
    bool _105;
    if (_95)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _105 = _95;
    }
    vec4 _106;
    if (_105)
    {
        _106 = vec4(float(hdOverride));
    }
    else
    {
        _106 = value;
    }
    return _106;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _124 = hdOverride >= 0;
    bool _134;
    if (_124)
    {
        _134 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _134 = _124;
    }
    vec4 _135;
    if (_134)
    {
        _135 = vec4(float(hdOverride));
    }
    else
    {
        _135 = value;
    }
    return _135;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _153 = hdOverride >= 0;
    bool _163;
    if (_153)
    {
        _163 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _163 = _153;
    }
    vec4 _164;
    if (_163)
    {
        _164 = vec4(float(hdOverride));
    }
    else
    {
        _164 = value;
    }
    return _164;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _182 = hdOverride >= 0;
    bool _192;
    if (_182)
    {
        _192 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _192 = _182;
    }
    vec4 _193;
    if (_192)
    {
        _193 = vec4(float(hdOverride));
    }
    else
    {
        _193 = value;
    }
    return _193;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _211 = hdOverride >= 0;
    bool _221;
    if (_211)
    {
        _221 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _221 = _211;
    }
    vec4 _222;
    if (_221)
    {
        _222 = vec4(float(hdOverride));
    }
    else
    {
        _222 = value;
    }
    return _222;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1209 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1213 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1217 = hdTex2(param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1221 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3100 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3100.x = _RESERVED_IDENTIFIER_FIXUP_1221.x;
    float _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_1221.y;
    _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1225;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1227 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3903).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_1227 + _RESERVED_IDENTIFIER_FIXUP_1227;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3104 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3104.x = _RESERVED_IDENTIFIER_FIXUP_1230.x;
    _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_1230.y;
    _RESERVED_IDENTIFIER_FIXUP_3104.z = _RESERVED_IDENTIFIER_FIXUP_1230.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_1209.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1241 = _RESERVED_IDENTIFIER_FIXUP_1238 * _RESERVED_IDENTIFIER_FIXUP_3104.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3110;
    _RESERVED_IDENTIFIER_FIXUP_3110.x = _RESERVED_IDENTIFIER_FIXUP_1241.x;
    _RESERVED_IDENTIFIER_FIXUP_3110.y = _RESERVED_IDENTIFIER_FIXUP_1241.y;
    _RESERVED_IDENTIFIER_FIXUP_3110.z = _RESERVED_IDENTIFIER_FIXUP_1241.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1255 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3100.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1256 = mix(_RESERVED_IDENTIFIER_FIXUP_3110.xyz, _RESERVED_IDENTIFIER_FIXUP_1238, _RESERVED_IDENTIFIER_FIXUP_1255);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3116 = _RESERVED_IDENTIFIER_FIXUP_1209;
    _RESERVED_IDENTIFIER_FIXUP_3116.x = _RESERVED_IDENTIFIER_FIXUP_1256.x;
    _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1256.y;
    _RESERVED_IDENTIFIER_FIXUP_3116.z = _RESERVED_IDENTIFIER_FIXUP_1256.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_1213.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1267 = _RESERVED_IDENTIFIER_FIXUP_1264 * _RESERVED_IDENTIFIER_FIXUP_3104.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3929 = vec4(_RESERVED_IDENTIFIER_FIXUP_1267.x, _RESERVED_IDENTIFIER_FIXUP_1225, _RESERVED_IDENTIFIER_FIXUP_1267.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1282 = mix(_RESERVED_IDENTIFIER_FIXUP_3929.xzw, _RESERVED_IDENTIFIER_FIXUP_1264, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3929.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3128 = _RESERVED_IDENTIFIER_FIXUP_1213;
    _RESERVED_IDENTIFIER_FIXUP_3128.x = _RESERVED_IDENTIFIER_FIXUP_1282.x;
    _RESERVED_IDENTIFIER_FIXUP_3128.y = _RESERVED_IDENTIFIER_FIXUP_1282.y;
    _RESERVED_IDENTIFIER_FIXUP_3128.z = _RESERVED_IDENTIFIER_FIXUP_1282.z;
    float _RESERVED_IDENTIFIER_FIXUP_1292 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1217.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3134 = _RESERVED_IDENTIFIER_FIXUP_1217;
    _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1292;
    _RESERVED_IDENTIFIER_FIXUP_3134.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1292;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_3134.xxxx * _RESERVED_IDENTIFIER_FIXUP_3128;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1308 = (_RESERVED_IDENTIFIER_FIXUP_3116 * _RESERVED_IDENTIFIER_FIXUP_3134.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1302;
    float _RESERVED_IDENTIFIER_FIXUP_1315 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3141 = _RESERVED_IDENTIFIER_FIXUP_1302;
    _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_1315;
    float _RESERVED_IDENTIFIER_FIXUP_1321 = clamp((_RESERVED_IDENTIFIER_FIXUP_1315 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_1321;
    float _RESERVED_IDENTIFIER_FIXUP_1327 = ((-_RESERVED_IDENTIFIER_FIXUP_1321) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_1327;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3908;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3905;
    if (_RESERVED_IDENTIFIER_FIXUP_1327 != (-_RESERVED_IDENTIFIER_FIXUP_1327))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1339 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1339.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1339.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1345 = hdLod5(param_2, param_3);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1349 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3353 = _RESERVED_IDENTIFIER_FIXUP_1345;
        _RESERVED_IDENTIFIER_FIXUP_3353.y = _RESERVED_IDENTIFIER_FIXUP_1349.x;
        _RESERVED_IDENTIFIER_FIXUP_3353.z = _RESERVED_IDENTIFIER_FIXUP_1349.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_3353.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3357;
        _RESERVED_IDENTIFIER_FIXUP_3357.x = _RESERVED_IDENTIFIER_FIXUP_1359.x;
        _RESERVED_IDENTIFIER_FIXUP_3357.y = _RESERVED_IDENTIFIER_FIXUP_1359.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1366 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1370 = _RESERVED_IDENTIFIER_FIXUP_1366.y;
        _RESERVED_IDENTIFIER_FIXUP_3357.w = _RESERVED_IDENTIFIER_FIXUP_1370;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3357.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1370;
        float _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_1345.x + hdLod5(param_4, param_5).x;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_1381;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1388 = _RESERVED_IDENTIFIER_FIXUP_3353.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3370;
        _RESERVED_IDENTIFIER_FIXUP_3370.x = _RESERVED_IDENTIFIER_FIXUP_1388.x;
        _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_1388.y;
        _RESERVED_IDENTIFIER_FIXUP_3370.w = _RESERVED_IDENTIFIER_FIXUP_1370;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3370.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1370;
        float _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_1381 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_1410;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_3353.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3383;
        _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_1417.x;
        _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_1417.y;
        _RESERVED_IDENTIFIER_FIXUP_3383.w = _RESERVED_IDENTIFIER_FIXUP_1370;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3383.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1370;
        float _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_1410 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_1439;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_3353.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3396;
        _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_1446.x;
        _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_1446.y;
        _RESERVED_IDENTIFIER_FIXUP_3396.w = _RESERVED_IDENTIFIER_FIXUP_1370;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3396.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1370;
        float _RESERVED_IDENTIFIER_FIXUP_1468 = _RESERVED_IDENTIFIER_FIXUP_1439 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_1468;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1475 = _RESERVED_IDENTIFIER_FIXUP_3353.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3409;
        _RESERVED_IDENTIFIER_FIXUP_3409.x = _RESERVED_IDENTIFIER_FIXUP_1475.x;
        _RESERVED_IDENTIFIER_FIXUP_3409.y = _RESERVED_IDENTIFIER_FIXUP_1475.y;
        _RESERVED_IDENTIFIER_FIXUP_3409.w = _RESERVED_IDENTIFIER_FIXUP_1370;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3409.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1370;
        float _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_1468 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_1497;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_3353.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3422;
        _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_1504.x;
        _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_1504.y;
        _RESERVED_IDENTIFIER_FIXUP_3422.w = _RESERVED_IDENTIFIER_FIXUP_1370;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3422.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1370;
        float _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_1497 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_1526;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1533 = _RESERVED_IDENTIFIER_FIXUP_3353.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3435;
        _RESERVED_IDENTIFIER_FIXUP_3435.x = _RESERVED_IDENTIFIER_FIXUP_1533.x;
        _RESERVED_IDENTIFIER_FIXUP_3435.y = _RESERVED_IDENTIFIER_FIXUP_1533.y;
        _RESERVED_IDENTIFIER_FIXUP_3435.w = _RESERVED_IDENTIFIER_FIXUP_1370;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3435.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1370;
        float _RESERVED_IDENTIFIER_FIXUP_1555 = _RESERVED_IDENTIFIER_FIXUP_1526 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_1555;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1562 = _RESERVED_IDENTIFIER_FIXUP_3353.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
        _RESERVED_IDENTIFIER_FIXUP_3448.x = _RESERVED_IDENTIFIER_FIXUP_1562.x;
        _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_1562.y;
        _RESERVED_IDENTIFIER_FIXUP_3448.w = _RESERVED_IDENTIFIER_FIXUP_1370;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3448.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1370;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1579 = hdLod5(param_18, param_19);
        float _RESERVED_IDENTIFIER_FIXUP_1584 = _RESERVED_IDENTIFIER_FIXUP_1555 + _RESERVED_IDENTIFIER_FIXUP_1579.x;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_1584;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_1584 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3908 = _RESERVED_IDENTIFIER_FIXUP_1579;
        _RESERVED_IDENTIFIER_FIXUP_3905 = _RESERVED_IDENTIFIER_FIXUP_3353;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1597 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3141.y = _RESERVED_IDENTIFIER_FIXUP_1597;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3909;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3906;
        if (_RESERVED_IDENTIFIER_FIXUP_1597 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1606 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1616 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1618 = _RESERVED_IDENTIFIER_FIXUP_1616.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3293 = _RESERVED_IDENTIFIER_FIXUP_3141;
            _RESERVED_IDENTIFIER_FIXUP_3293.y = _RESERVED_IDENTIFIER_FIXUP_1618;
            _RESERVED_IDENTIFIER_FIXUP_3293.z = _RESERVED_IDENTIFIER_FIXUP_1616.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_3293.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3297;
            _RESERVED_IDENTIFIER_FIXUP_3297.x = _RESERVED_IDENTIFIER_FIXUP_1626.x;
            _RESERVED_IDENTIFIER_FIXUP_3297.y = _RESERVED_IDENTIFIER_FIXUP_1626.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1633 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1637 = _RESERVED_IDENTIFIER_FIXUP_1633.y;
            _RESERVED_IDENTIFIER_FIXUP_3297.w = _RESERVED_IDENTIFIER_FIXUP_1637;
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1606.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1606.w;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3297.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1637;
            float _RESERVED_IDENTIFIER_FIXUP_1648 = hdLod6(param_20, param_21).x + hdLod6(param_22, param_23).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3935 = vec4(_RESERVED_IDENTIFIER_FIXUP_1327, _RESERVED_IDENTIFIER_FIXUP_1618, _RESERVED_IDENTIFIER_FIXUP_1616.y, _RESERVED_IDENTIFIER_FIXUP_1648);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1655 = _RESERVED_IDENTIFIER_FIXUP_3935.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
            _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_1655.x;
            _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_1655.y;
            _RESERVED_IDENTIFIER_FIXUP_3310.w = _RESERVED_IDENTIFIER_FIXUP_1637;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3310.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1637;
            float _RESERVED_IDENTIFIER_FIXUP_1677 = _RESERVED_IDENTIFIER_FIXUP_1648 + hdLod6(param_24, param_25).x;
            _RESERVED_IDENTIFIER_FIXUP_3935.w = _RESERVED_IDENTIFIER_FIXUP_1677;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1684 = _RESERVED_IDENTIFIER_FIXUP_3935.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3323;
            _RESERVED_IDENTIFIER_FIXUP_3323.x = _RESERVED_IDENTIFIER_FIXUP_1684.x;
            _RESERVED_IDENTIFIER_FIXUP_3323.y = _RESERVED_IDENTIFIER_FIXUP_1684.y;
            _RESERVED_IDENTIFIER_FIXUP_3323.w = _RESERVED_IDENTIFIER_FIXUP_1637;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3323.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1637;
            float _RESERVED_IDENTIFIER_FIXUP_1706 = _RESERVED_IDENTIFIER_FIXUP_1677 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_3935.w = _RESERVED_IDENTIFIER_FIXUP_1706;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1713 = _RESERVED_IDENTIFIER_FIXUP_3935.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3336;
            _RESERVED_IDENTIFIER_FIXUP_3336.x = _RESERVED_IDENTIFIER_FIXUP_1713.x;
            _RESERVED_IDENTIFIER_FIXUP_3336.y = _RESERVED_IDENTIFIER_FIXUP_1713.y;
            _RESERVED_IDENTIFIER_FIXUP_3336.w = _RESERVED_IDENTIFIER_FIXUP_1637;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3336.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1637;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1730 = hdLod6(param_28, param_29);
            float _RESERVED_IDENTIFIER_FIXUP_1735 = _RESERVED_IDENTIFIER_FIXUP_1706 + _RESERVED_IDENTIFIER_FIXUP_1730.x;
            _RESERVED_IDENTIFIER_FIXUP_3935.y = _RESERVED_IDENTIFIER_FIXUP_1735;
            _RESERVED_IDENTIFIER_FIXUP_3935.x = _RESERVED_IDENTIFIER_FIXUP_1735 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3909 = _RESERVED_IDENTIFIER_FIXUP_1730;
            _RESERVED_IDENTIFIER_FIXUP_3906 = _RESERVED_IDENTIFIER_FIXUP_3935;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1748 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3158 = _RESERVED_IDENTIFIER_FIXUP_3141;
            _RESERVED_IDENTIFIER_FIXUP_3158.y = _RESERVED_IDENTIFIER_FIXUP_1748;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3910;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3907;
            if (_RESERVED_IDENTIFIER_FIXUP_1748 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1757 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1767 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1769 = _RESERVED_IDENTIFIER_FIXUP_1767.x;
                _RESERVED_IDENTIFIER_FIXUP_3158.y = _RESERVED_IDENTIFIER_FIXUP_1769;
                _RESERVED_IDENTIFIER_FIXUP_3158.z = _RESERVED_IDENTIFIER_FIXUP_1767.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1777 = _RESERVED_IDENTIFIER_FIXUP_3158.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3237;
                _RESERVED_IDENTIFIER_FIXUP_3237.x = _RESERVED_IDENTIFIER_FIXUP_1777.x;
                _RESERVED_IDENTIFIER_FIXUP_3237.y = _RESERVED_IDENTIFIER_FIXUP_1777.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1784 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1788 = _RESERVED_IDENTIFIER_FIXUP_1784.y;
                _RESERVED_IDENTIFIER_FIXUP_3237.w = _RESERVED_IDENTIFIER_FIXUP_1788;
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1757.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1757.w;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3237.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1788;
                float _RESERVED_IDENTIFIER_FIXUP_1799 = hdLod7(param_30, param_31).x + hdLod7(param_32, param_33).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3934 = vec4(_RESERVED_IDENTIFIER_FIXUP_1327, _RESERVED_IDENTIFIER_FIXUP_1769, _RESERVED_IDENTIFIER_FIXUP_1767.y, _RESERVED_IDENTIFIER_FIXUP_1799);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1806 = _RESERVED_IDENTIFIER_FIXUP_3934.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3250;
                _RESERVED_IDENTIFIER_FIXUP_3250.x = _RESERVED_IDENTIFIER_FIXUP_1806.x;
                _RESERVED_IDENTIFIER_FIXUP_3250.y = _RESERVED_IDENTIFIER_FIXUP_1806.y;
                _RESERVED_IDENTIFIER_FIXUP_3250.w = _RESERVED_IDENTIFIER_FIXUP_1788;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3250.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1788;
                float _RESERVED_IDENTIFIER_FIXUP_1828 = _RESERVED_IDENTIFIER_FIXUP_1799 + hdLod7(param_34, param_35).x;
                _RESERVED_IDENTIFIER_FIXUP_3934.w = _RESERVED_IDENTIFIER_FIXUP_1828;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1835 = _RESERVED_IDENTIFIER_FIXUP_3934.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3263;
                _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_1835.x;
                _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_1835.y;
                _RESERVED_IDENTIFIER_FIXUP_3263.w = _RESERVED_IDENTIFIER_FIXUP_1788;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3263.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1788;
                float _RESERVED_IDENTIFIER_FIXUP_1857 = _RESERVED_IDENTIFIER_FIXUP_1828 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_3934.w = _RESERVED_IDENTIFIER_FIXUP_1857;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1864 = _RESERVED_IDENTIFIER_FIXUP_3934.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3276;
                _RESERVED_IDENTIFIER_FIXUP_3276.x = _RESERVED_IDENTIFIER_FIXUP_1864.x;
                _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1864.y;
                _RESERVED_IDENTIFIER_FIXUP_3276.w = _RESERVED_IDENTIFIER_FIXUP_1788;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3276.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1788;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1881 = hdLod7(param_38, param_39);
                float _RESERVED_IDENTIFIER_FIXUP_1886 = _RESERVED_IDENTIFIER_FIXUP_1857 + _RESERVED_IDENTIFIER_FIXUP_1881.x;
                _RESERVED_IDENTIFIER_FIXUP_3934.y = _RESERVED_IDENTIFIER_FIXUP_1886;
                _RESERVED_IDENTIFIER_FIXUP_3934.x = _RESERVED_IDENTIFIER_FIXUP_1886 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3910 = _RESERVED_IDENTIFIER_FIXUP_1881;
                _RESERVED_IDENTIFIER_FIXUP_3907 = _RESERVED_IDENTIFIER_FIXUP_3934;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1902 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1906 = _RESERVED_IDENTIFIER_FIXUP_1902.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1917 = vec4(_RESERVED_IDENTIFIER_FIXUP_1902.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1906).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3931 = vec4(_RESERVED_IDENTIFIER_FIXUP_1917 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1906);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1954 = _RESERVED_IDENTIFIER_FIXUP_1917 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3191 = _RESERVED_IDENTIFIER_FIXUP_3931;
                _RESERVED_IDENTIFIER_FIXUP_3191.x = _RESERVED_IDENTIFIER_FIXUP_1954.x;
                _RESERVED_IDENTIFIER_FIXUP_3191.y = _RESERVED_IDENTIFIER_FIXUP_1954.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1976 = _RESERVED_IDENTIFIER_FIXUP_1917 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3200 = _RESERVED_IDENTIFIER_FIXUP_3191;
                _RESERVED_IDENTIFIER_FIXUP_3200.x = _RESERVED_IDENTIFIER_FIXUP_1976.x;
                _RESERVED_IDENTIFIER_FIXUP_3200.y = _RESERVED_IDENTIFIER_FIXUP_1976.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1998 = _RESERVED_IDENTIFIER_FIXUP_1917 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3209 = _RESERVED_IDENTIFIER_FIXUP_3200;
                _RESERVED_IDENTIFIER_FIXUP_3209.x = _RESERVED_IDENTIFIER_FIXUP_1998.x;
                _RESERVED_IDENTIFIER_FIXUP_3209.y = _RESERVED_IDENTIFIER_FIXUP_1998.y;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3209.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1906;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2008 = hdLod8(param_40, param_41);
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_1917;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1906;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3931.xy;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1906;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3191.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1906;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3200.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1906;
                float _RESERVED_IDENTIFIER_FIXUP_2013 = (((hdLod8(param_42, param_43).x + hdLod8(param_44, param_45).x) + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + _RESERVED_IDENTIFIER_FIXUP_2008.x;
                float _RESERVED_IDENTIFIER_FIXUP_2021 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3220 = _RESERVED_IDENTIFIER_FIXUP_2008;
                _RESERVED_IDENTIFIER_FIXUP_3220.x = _RESERVED_IDENTIFIER_FIXUP_2021;
                float _RESERVED_IDENTIFIER_FIXUP_2027 = clamp((_RESERVED_IDENTIFIER_FIXUP_2021 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2032 = (_RESERVED_IDENTIFIER_FIXUP_2013 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3910 = _RESERVED_IDENTIFIER_FIXUP_3220;
                _RESERVED_IDENTIFIER_FIXUP_3907 = vec4((_RESERVED_IDENTIFIER_FIXUP_2027 * _RESERVED_IDENTIFIER_FIXUP_2032) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2027, _RESERVED_IDENTIFIER_FIXUP_2032, _RESERVED_IDENTIFIER_FIXUP_2013);
            }
            _RESERVED_IDENTIFIER_FIXUP_3909 = _RESERVED_IDENTIFIER_FIXUP_3910;
            _RESERVED_IDENTIFIER_FIXUP_3906 = _RESERVED_IDENTIFIER_FIXUP_3907;
        }
        _RESERVED_IDENTIFIER_FIXUP_3908 = _RESERVED_IDENTIFIER_FIXUP_3909;
        _RESERVED_IDENTIFIER_FIXUP_3905 = _RESERVED_IDENTIFIER_FIXUP_3906;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3467 = _RESERVED_IDENTIFIER_FIXUP_3905;
    _RESERVED_IDENTIFIER_FIXUP_3467.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3469 = _RESERVED_IDENTIFIER_FIXUP_3908;
    _RESERVED_IDENTIFIER_FIXUP_3469.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3469.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3469.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2071 = _RESERVED_IDENTIFIER_FIXUP_3467.xxx * _RESERVED_IDENTIFIER_FIXUP_3469.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3936 = vec4(_RESERVED_IDENTIFIER_FIXUP_2071.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2071.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2085 = (_RESERVED_IDENTIFIER_FIXUP_1308.xyz * _RESERVED_IDENTIFIER_FIXUP_3936.yyy) + _RESERVED_IDENTIFIER_FIXUP_3936.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3481 = _RESERVED_IDENTIFIER_FIXUP_1308;
    _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2085.x;
    _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2085.y;
    _RESERVED_IDENTIFIER_FIXUP_3481.z = _RESERVED_IDENTIFIER_FIXUP_2085.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2098 = _RESERVED_IDENTIFIER_FIXUP_3481.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3487 = _RESERVED_IDENTIFIER_FIXUP_3481;
    _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_2098.x;
    _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2098.y;
    _RESERVED_IDENTIFIER_FIXUP_3487.z = _RESERVED_IDENTIFIER_FIXUP_2098.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2151 = OptTex0( texcoord0.xyz);
    vec2 param_50 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2155 = hdTex1(param_50);
    vec2 param_51 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2159 = hdTex2(param_51);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2172 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3505 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3505.x = _RESERVED_IDENTIFIER_FIXUP_2172.x;
    _RESERVED_IDENTIFIER_FIXUP_3505.y = _RESERVED_IDENTIFIER_FIXUP_2172.y;
    _RESERVED_IDENTIFIER_FIXUP_3505.z = _RESERVED_IDENTIFIER_FIXUP_2172.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2180 = _RESERVED_IDENTIFIER_FIXUP_2151.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2183 = _RESERVED_IDENTIFIER_FIXUP_2180 * _RESERVED_IDENTIFIER_FIXUP_3505.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3511;
    _RESERVED_IDENTIFIER_FIXUP_3511.x = _RESERVED_IDENTIFIER_FIXUP_2183.x;
    _RESERVED_IDENTIFIER_FIXUP_3511.y = _RESERVED_IDENTIFIER_FIXUP_2183.y;
    _RESERVED_IDENTIFIER_FIXUP_3511.z = _RESERVED_IDENTIFIER_FIXUP_2183.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2198 = mix(_RESERVED_IDENTIFIER_FIXUP_3511.xyz, _RESERVED_IDENTIFIER_FIXUP_2180, _RESERVED_IDENTIFIER_FIXUP_1255);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3517 = _RESERVED_IDENTIFIER_FIXUP_2151;
    _RESERVED_IDENTIFIER_FIXUP_3517.x = _RESERVED_IDENTIFIER_FIXUP_2198.x;
    _RESERVED_IDENTIFIER_FIXUP_3517.y = _RESERVED_IDENTIFIER_FIXUP_2198.y;
    _RESERVED_IDENTIFIER_FIXUP_3517.z = _RESERVED_IDENTIFIER_FIXUP_2198.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2206 = _RESERVED_IDENTIFIER_FIXUP_2155.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2209 = _RESERVED_IDENTIFIER_FIXUP_2206 * _RESERVED_IDENTIFIER_FIXUP_3505.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3938 = vec4(_RESERVED_IDENTIFIER_FIXUP_2209.x, _RESERVED_IDENTIFIER_FIXUP_1225, _RESERVED_IDENTIFIER_FIXUP_2209.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2224 = mix(_RESERVED_IDENTIFIER_FIXUP_3938.xzw, _RESERVED_IDENTIFIER_FIXUP_2206, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3938.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3529 = _RESERVED_IDENTIFIER_FIXUP_2155;
    _RESERVED_IDENTIFIER_FIXUP_3529.x = _RESERVED_IDENTIFIER_FIXUP_2224.x;
    _RESERVED_IDENTIFIER_FIXUP_3529.y = _RESERVED_IDENTIFIER_FIXUP_2224.y;
    _RESERVED_IDENTIFIER_FIXUP_3529.z = _RESERVED_IDENTIFIER_FIXUP_2224.z;
    float _RESERVED_IDENTIFIER_FIXUP_2234 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2159.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3535 = _RESERVED_IDENTIFIER_FIXUP_2159;
    _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_2234;
    _RESERVED_IDENTIFIER_FIXUP_3535.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2234;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2244 = _RESERVED_IDENTIFIER_FIXUP_3535.xxxx * _RESERVED_IDENTIFIER_FIXUP_3529;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2250 = (_RESERVED_IDENTIFIER_FIXUP_3517 * _RESERVED_IDENTIFIER_FIXUP_3535.yyyy) + _RESERVED_IDENTIFIER_FIXUP_2244;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3542 = _RESERVED_IDENTIFIER_FIXUP_2244;
    _RESERVED_IDENTIFIER_FIXUP_3542.x = _RESERVED_IDENTIFIER_FIXUP_1315;
    float _RESERVED_IDENTIFIER_FIXUP_2263 = clamp((_RESERVED_IDENTIFIER_FIXUP_1315 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3542.x = _RESERVED_IDENTIFIER_FIXUP_2263;
    float _RESERVED_IDENTIFIER_FIXUP_2269 = ((-_RESERVED_IDENTIFIER_FIXUP_2263) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3542.x = _RESERVED_IDENTIFIER_FIXUP_2269;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3923;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3917;
    if (_RESERVED_IDENTIFIER_FIXUP_2269 != (-_RESERVED_IDENTIFIER_FIXUP_2269))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2281 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2281.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2281.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2287 = hdLod5(param_52, param_53);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2291 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3754 = _RESERVED_IDENTIFIER_FIXUP_2287;
        _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2291.x;
        _RESERVED_IDENTIFIER_FIXUP_3754.z = _RESERVED_IDENTIFIER_FIXUP_2291.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2301 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3758;
        _RESERVED_IDENTIFIER_FIXUP_3758.x = _RESERVED_IDENTIFIER_FIXUP_2301.x;
        _RESERVED_IDENTIFIER_FIXUP_3758.y = _RESERVED_IDENTIFIER_FIXUP_2301.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2308 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2312 = _RESERVED_IDENTIFIER_FIXUP_2308.y;
        _RESERVED_IDENTIFIER_FIXUP_3758.w = _RESERVED_IDENTIFIER_FIXUP_2312;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3758.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2312;
        float _RESERVED_IDENTIFIER_FIXUP_2323 = _RESERVED_IDENTIFIER_FIXUP_2287.x + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2323;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2330 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3771;
        _RESERVED_IDENTIFIER_FIXUP_3771.x = _RESERVED_IDENTIFIER_FIXUP_2330.x;
        _RESERVED_IDENTIFIER_FIXUP_3771.y = _RESERVED_IDENTIFIER_FIXUP_2330.y;
        _RESERVED_IDENTIFIER_FIXUP_3771.w = _RESERVED_IDENTIFIER_FIXUP_2312;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3771.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2312;
        float _RESERVED_IDENTIFIER_FIXUP_2352 = _RESERVED_IDENTIFIER_FIXUP_2323 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2352;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2359 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3784;
        _RESERVED_IDENTIFIER_FIXUP_3784.x = _RESERVED_IDENTIFIER_FIXUP_2359.x;
        _RESERVED_IDENTIFIER_FIXUP_3784.y = _RESERVED_IDENTIFIER_FIXUP_2359.y;
        _RESERVED_IDENTIFIER_FIXUP_3784.w = _RESERVED_IDENTIFIER_FIXUP_2312;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3784.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2312;
        float _RESERVED_IDENTIFIER_FIXUP_2381 = _RESERVED_IDENTIFIER_FIXUP_2352 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2381;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2388 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3797;
        _RESERVED_IDENTIFIER_FIXUP_3797.x = _RESERVED_IDENTIFIER_FIXUP_2388.x;
        _RESERVED_IDENTIFIER_FIXUP_3797.y = _RESERVED_IDENTIFIER_FIXUP_2388.y;
        _RESERVED_IDENTIFIER_FIXUP_3797.w = _RESERVED_IDENTIFIER_FIXUP_2312;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3797.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2312;
        float _RESERVED_IDENTIFIER_FIXUP_2410 = _RESERVED_IDENTIFIER_FIXUP_2381 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2410;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2417 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3810;
        _RESERVED_IDENTIFIER_FIXUP_3810.x = _RESERVED_IDENTIFIER_FIXUP_2417.x;
        _RESERVED_IDENTIFIER_FIXUP_3810.y = _RESERVED_IDENTIFIER_FIXUP_2417.y;
        _RESERVED_IDENTIFIER_FIXUP_3810.w = _RESERVED_IDENTIFIER_FIXUP_2312;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3810.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2312;
        float _RESERVED_IDENTIFIER_FIXUP_2439 = _RESERVED_IDENTIFIER_FIXUP_2410 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2439;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2446 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3823;
        _RESERVED_IDENTIFIER_FIXUP_3823.x = _RESERVED_IDENTIFIER_FIXUP_2446.x;
        _RESERVED_IDENTIFIER_FIXUP_3823.y = _RESERVED_IDENTIFIER_FIXUP_2446.y;
        _RESERVED_IDENTIFIER_FIXUP_3823.w = _RESERVED_IDENTIFIER_FIXUP_2312;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3823.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2312;
        float _RESERVED_IDENTIFIER_FIXUP_2468 = _RESERVED_IDENTIFIER_FIXUP_2439 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2468;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2475 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3836;
        _RESERVED_IDENTIFIER_FIXUP_3836.x = _RESERVED_IDENTIFIER_FIXUP_2475.x;
        _RESERVED_IDENTIFIER_FIXUP_3836.y = _RESERVED_IDENTIFIER_FIXUP_2475.y;
        _RESERVED_IDENTIFIER_FIXUP_3836.w = _RESERVED_IDENTIFIER_FIXUP_2312;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3836.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2312;
        float _RESERVED_IDENTIFIER_FIXUP_2497 = _RESERVED_IDENTIFIER_FIXUP_2468 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2497;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2504 = _RESERVED_IDENTIFIER_FIXUP_3754.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3849;
        _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2504.x;
        _RESERVED_IDENTIFIER_FIXUP_3849.y = _RESERVED_IDENTIFIER_FIXUP_2504.y;
        _RESERVED_IDENTIFIER_FIXUP_3849.w = _RESERVED_IDENTIFIER_FIXUP_2312;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3849.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2312;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2521 = hdLod5(param_68, param_69);
        float _RESERVED_IDENTIFIER_FIXUP_2526 = _RESERVED_IDENTIFIER_FIXUP_2497 + _RESERVED_IDENTIFIER_FIXUP_2521.x;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2526;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2526 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3923 = _RESERVED_IDENTIFIER_FIXUP_2521;
        _RESERVED_IDENTIFIER_FIXUP_3917 = _RESERVED_IDENTIFIER_FIXUP_3754;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2539 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3542.y = _RESERVED_IDENTIFIER_FIXUP_2539;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3924;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3918;
        if (_RESERVED_IDENTIFIER_FIXUP_2539 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2548 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2558 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2560 = _RESERVED_IDENTIFIER_FIXUP_2558.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3694 = _RESERVED_IDENTIFIER_FIXUP_3542;
            _RESERVED_IDENTIFIER_FIXUP_3694.y = _RESERVED_IDENTIFIER_FIXUP_2560;
            _RESERVED_IDENTIFIER_FIXUP_3694.z = _RESERVED_IDENTIFIER_FIXUP_2558.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2568 = _RESERVED_IDENTIFIER_FIXUP_3694.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3698;
            _RESERVED_IDENTIFIER_FIXUP_3698.x = _RESERVED_IDENTIFIER_FIXUP_2568.x;
            _RESERVED_IDENTIFIER_FIXUP_3698.y = _RESERVED_IDENTIFIER_FIXUP_2568.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2575 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2579 = _RESERVED_IDENTIFIER_FIXUP_2575.y;
            _RESERVED_IDENTIFIER_FIXUP_3698.w = _RESERVED_IDENTIFIER_FIXUP_2579;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2548.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2548.w;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3698.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2579;
            float _RESERVED_IDENTIFIER_FIXUP_2590 = hdLod6(param_70, param_71).x + hdLod6(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3944 = vec4(_RESERVED_IDENTIFIER_FIXUP_2269, _RESERVED_IDENTIFIER_FIXUP_2560, _RESERVED_IDENTIFIER_FIXUP_2558.y, _RESERVED_IDENTIFIER_FIXUP_2590);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2597 = _RESERVED_IDENTIFIER_FIXUP_3944.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3711;
            _RESERVED_IDENTIFIER_FIXUP_3711.x = _RESERVED_IDENTIFIER_FIXUP_2597.x;
            _RESERVED_IDENTIFIER_FIXUP_3711.y = _RESERVED_IDENTIFIER_FIXUP_2597.y;
            _RESERVED_IDENTIFIER_FIXUP_3711.w = _RESERVED_IDENTIFIER_FIXUP_2579;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3711.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2579;
            float _RESERVED_IDENTIFIER_FIXUP_2619 = _RESERVED_IDENTIFIER_FIXUP_2590 + hdLod6(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3944.w = _RESERVED_IDENTIFIER_FIXUP_2619;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2626 = _RESERVED_IDENTIFIER_FIXUP_3944.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3724;
            _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2626.x;
            _RESERVED_IDENTIFIER_FIXUP_3724.y = _RESERVED_IDENTIFIER_FIXUP_2626.y;
            _RESERVED_IDENTIFIER_FIXUP_3724.w = _RESERVED_IDENTIFIER_FIXUP_2579;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3724.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2579;
            float _RESERVED_IDENTIFIER_FIXUP_2648 = _RESERVED_IDENTIFIER_FIXUP_2619 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3944.w = _RESERVED_IDENTIFIER_FIXUP_2648;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2655 = _RESERVED_IDENTIFIER_FIXUP_3944.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3737;
            _RESERVED_IDENTIFIER_FIXUP_3737.x = _RESERVED_IDENTIFIER_FIXUP_2655.x;
            _RESERVED_IDENTIFIER_FIXUP_3737.y = _RESERVED_IDENTIFIER_FIXUP_2655.y;
            _RESERVED_IDENTIFIER_FIXUP_3737.w = _RESERVED_IDENTIFIER_FIXUP_2579;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3737.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2579;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2672 = hdLod6(param_78, param_79);
            float _RESERVED_IDENTIFIER_FIXUP_2677 = _RESERVED_IDENTIFIER_FIXUP_2648 + _RESERVED_IDENTIFIER_FIXUP_2672.x;
            _RESERVED_IDENTIFIER_FIXUP_3944.y = _RESERVED_IDENTIFIER_FIXUP_2677;
            _RESERVED_IDENTIFIER_FIXUP_3944.x = _RESERVED_IDENTIFIER_FIXUP_2677 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3924 = _RESERVED_IDENTIFIER_FIXUP_2672;
            _RESERVED_IDENTIFIER_FIXUP_3918 = _RESERVED_IDENTIFIER_FIXUP_3944;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2690 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3559 = _RESERVED_IDENTIFIER_FIXUP_3542;
            _RESERVED_IDENTIFIER_FIXUP_3559.y = _RESERVED_IDENTIFIER_FIXUP_2690;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3925;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3919;
            if (_RESERVED_IDENTIFIER_FIXUP_2690 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2699 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2709 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2711 = _RESERVED_IDENTIFIER_FIXUP_2709.x;
                _RESERVED_IDENTIFIER_FIXUP_3559.y = _RESERVED_IDENTIFIER_FIXUP_2711;
                _RESERVED_IDENTIFIER_FIXUP_3559.z = _RESERVED_IDENTIFIER_FIXUP_2709.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2719 = _RESERVED_IDENTIFIER_FIXUP_3559.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3638;
                _RESERVED_IDENTIFIER_FIXUP_3638.x = _RESERVED_IDENTIFIER_FIXUP_2719.x;
                _RESERVED_IDENTIFIER_FIXUP_3638.y = _RESERVED_IDENTIFIER_FIXUP_2719.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2726 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2730 = _RESERVED_IDENTIFIER_FIXUP_2726.y;
                _RESERVED_IDENTIFIER_FIXUP_3638.w = _RESERVED_IDENTIFIER_FIXUP_2730;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2699.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2699.w;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3638.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2730;
                float _RESERVED_IDENTIFIER_FIXUP_2741 = hdLod7(param_80, param_81).x + hdLod7(param_82, param_83).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3943 = vec4(_RESERVED_IDENTIFIER_FIXUP_2269, _RESERVED_IDENTIFIER_FIXUP_2711, _RESERVED_IDENTIFIER_FIXUP_2709.y, _RESERVED_IDENTIFIER_FIXUP_2741);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2748 = _RESERVED_IDENTIFIER_FIXUP_3943.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3651;
                _RESERVED_IDENTIFIER_FIXUP_3651.x = _RESERVED_IDENTIFIER_FIXUP_2748.x;
                _RESERVED_IDENTIFIER_FIXUP_3651.y = _RESERVED_IDENTIFIER_FIXUP_2748.y;
                _RESERVED_IDENTIFIER_FIXUP_3651.w = _RESERVED_IDENTIFIER_FIXUP_2730;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3651.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2730;
                float _RESERVED_IDENTIFIER_FIXUP_2770 = _RESERVED_IDENTIFIER_FIXUP_2741 + hdLod7(param_84, param_85).x;
                _RESERVED_IDENTIFIER_FIXUP_3943.w = _RESERVED_IDENTIFIER_FIXUP_2770;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2777 = _RESERVED_IDENTIFIER_FIXUP_3943.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3664;
                _RESERVED_IDENTIFIER_FIXUP_3664.x = _RESERVED_IDENTIFIER_FIXUP_2777.x;
                _RESERVED_IDENTIFIER_FIXUP_3664.y = _RESERVED_IDENTIFIER_FIXUP_2777.y;
                _RESERVED_IDENTIFIER_FIXUP_3664.w = _RESERVED_IDENTIFIER_FIXUP_2730;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3664.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2730;
                float _RESERVED_IDENTIFIER_FIXUP_2799 = _RESERVED_IDENTIFIER_FIXUP_2770 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3943.w = _RESERVED_IDENTIFIER_FIXUP_2799;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2806 = _RESERVED_IDENTIFIER_FIXUP_3943.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3677;
                _RESERVED_IDENTIFIER_FIXUP_3677.x = _RESERVED_IDENTIFIER_FIXUP_2806.x;
                _RESERVED_IDENTIFIER_FIXUP_3677.y = _RESERVED_IDENTIFIER_FIXUP_2806.y;
                _RESERVED_IDENTIFIER_FIXUP_3677.w = _RESERVED_IDENTIFIER_FIXUP_2730;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3677.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2730;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2823 = hdLod7(param_88, param_89);
                float _RESERVED_IDENTIFIER_FIXUP_2828 = _RESERVED_IDENTIFIER_FIXUP_2799 + _RESERVED_IDENTIFIER_FIXUP_2823.x;
                _RESERVED_IDENTIFIER_FIXUP_3943.y = _RESERVED_IDENTIFIER_FIXUP_2828;
                _RESERVED_IDENTIFIER_FIXUP_3943.x = _RESERVED_IDENTIFIER_FIXUP_2828 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3925 = _RESERVED_IDENTIFIER_FIXUP_2823;
                _RESERVED_IDENTIFIER_FIXUP_3919 = _RESERVED_IDENTIFIER_FIXUP_3943;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2844 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2848 = _RESERVED_IDENTIFIER_FIXUP_2844.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2859 = vec4(_RESERVED_IDENTIFIER_FIXUP_2844.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2848).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3940 = vec4(_RESERVED_IDENTIFIER_FIXUP_2859 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2848);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2896 = _RESERVED_IDENTIFIER_FIXUP_2859 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3592 = _RESERVED_IDENTIFIER_FIXUP_3940;
                _RESERVED_IDENTIFIER_FIXUP_3592.x = _RESERVED_IDENTIFIER_FIXUP_2896.x;
                _RESERVED_IDENTIFIER_FIXUP_3592.y = _RESERVED_IDENTIFIER_FIXUP_2896.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2918 = _RESERVED_IDENTIFIER_FIXUP_2859 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3601 = _RESERVED_IDENTIFIER_FIXUP_3592;
                _RESERVED_IDENTIFIER_FIXUP_3601.x = _RESERVED_IDENTIFIER_FIXUP_2918.x;
                _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_2918.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2940 = _RESERVED_IDENTIFIER_FIXUP_2859 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3610 = _RESERVED_IDENTIFIER_FIXUP_3601;
                _RESERVED_IDENTIFIER_FIXUP_3610.x = _RESERVED_IDENTIFIER_FIXUP_2940.x;
                _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2940.y;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3610.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2848;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2950 = hdLod8(param_90, param_91);
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_2859;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2848;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3940.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2848;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3592.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2848;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3601.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2848;
                float _RESERVED_IDENTIFIER_FIXUP_2955 = (((hdLod8(param_92, param_93).x + hdLod8(param_94, param_95).x) + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + _RESERVED_IDENTIFIER_FIXUP_2950.x;
                float _RESERVED_IDENTIFIER_FIXUP_2963 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3621 = _RESERVED_IDENTIFIER_FIXUP_2950;
                _RESERVED_IDENTIFIER_FIXUP_3621.x = _RESERVED_IDENTIFIER_FIXUP_2963;
                float _RESERVED_IDENTIFIER_FIXUP_2969 = clamp((_RESERVED_IDENTIFIER_FIXUP_2963 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2974 = (_RESERVED_IDENTIFIER_FIXUP_2955 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3925 = _RESERVED_IDENTIFIER_FIXUP_3621;
                _RESERVED_IDENTIFIER_FIXUP_3919 = vec4((_RESERVED_IDENTIFIER_FIXUP_2969 * _RESERVED_IDENTIFIER_FIXUP_2974) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2969, _RESERVED_IDENTIFIER_FIXUP_2974, _RESERVED_IDENTIFIER_FIXUP_2955);
            }
            _RESERVED_IDENTIFIER_FIXUP_3924 = _RESERVED_IDENTIFIER_FIXUP_3925;
            _RESERVED_IDENTIFIER_FIXUP_3918 = _RESERVED_IDENTIFIER_FIXUP_3919;
        }
        _RESERVED_IDENTIFIER_FIXUP_3923 = _RESERVED_IDENTIFIER_FIXUP_3924;
        _RESERVED_IDENTIFIER_FIXUP_3917 = _RESERVED_IDENTIFIER_FIXUP_3918;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2989 = (_RESERVED_IDENTIFIER_FIXUP_3917.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3866 = _RESERVED_IDENTIFIER_FIXUP_3917;
    _RESERVED_IDENTIFIER_FIXUP_3866.y = _RESERVED_IDENTIFIER_FIXUP_2989;
    _RESERVED_IDENTIFIER_FIXUP_3866.y = _RESERVED_IDENTIFIER_FIXUP_2989;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3002 = _RESERVED_IDENTIFIER_FIXUP_2250.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3872 = _RESERVED_IDENTIFIER_FIXUP_3923;
    _RESERVED_IDENTIFIER_FIXUP_3872.x = _RESERVED_IDENTIFIER_FIXUP_3002.x;
    _RESERVED_IDENTIFIER_FIXUP_3872.y = _RESERVED_IDENTIFIER_FIXUP_3002.y;
    _RESERVED_IDENTIFIER_FIXUP_3872.z = _RESERVED_IDENTIFIER_FIXUP_3002.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3013 = _RESERVED_IDENTIFIER_FIXUP_3866.xxx * _RESERVED_IDENTIFIER_FIXUP_3872.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3945 = vec4(_RESERVED_IDENTIFIER_FIXUP_3013.x, _RESERVED_IDENTIFIER_FIXUP_2989, _RESERVED_IDENTIFIER_FIXUP_3013.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3027 = (_RESERVED_IDENTIFIER_FIXUP_2250.xyz * _RESERVED_IDENTIFIER_FIXUP_3945.yyy) + _RESERVED_IDENTIFIER_FIXUP_3945.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3884 = _RESERVED_IDENTIFIER_FIXUP_2250;
    _RESERVED_IDENTIFIER_FIXUP_3884.x = _RESERVED_IDENTIFIER_FIXUP_3027.x;
    _RESERVED_IDENTIFIER_FIXUP_3884.y = _RESERVED_IDENTIFIER_FIXUP_3027.y;
    _RESERVED_IDENTIFIER_FIXUP_3884.z = _RESERVED_IDENTIFIER_FIXUP_3027.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3040 = _RESERVED_IDENTIFIER_FIXUP_3884.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3890 = _RESERVED_IDENTIFIER_FIXUP_3884;
    _RESERVED_IDENTIFIER_FIXUP_3890.x = _RESERVED_IDENTIFIER_FIXUP_3040.x;
    _RESERVED_IDENTIFIER_FIXUP_3890.y = _RESERVED_IDENTIFIER_FIXUP_3040.y;
    _RESERVED_IDENTIFIER_FIXUP_3890.z = _RESERVED_IDENTIFIER_FIXUP_3040.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3890.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1071 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1080;
    if (_RESERVED_IDENTIFIER_FIXUP_1071)
    {
        _RESERVED_IDENTIFIER_FIXUP_1080 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1080 = _RESERVED_IDENTIFIER_FIXUP_1071;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1080)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1117 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3487.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1143 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3093;
    if (_RESERVED_IDENTIFIER_FIXUP_1117 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3093 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1117), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1143);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3093 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1143);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3093;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2989);
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 hdB84 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = hdB84.x;
    r3.y = hdB84.y;
    vec3 hdB96 = v0.xyz + v0.xyz;
    r4.x = hdB96.x;
    r4.y = hdB96.y;
    r4.z = hdB96.z;
    vec3 hdB108 = r0.xyz * r4.xyz;
    r5.x = hdB108.x;
    r5.y = hdB108.y;
    r5.z = hdB108.z;
    vec4 hdB117 = r0;
    vec3 hdB126 = mix(r5.xyz, hdB117.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB126.x;
    r0.y = hdB126.y;
    r0.z = hdB126.z;
    vec3 hdB137 = r1.xyz * r4.xyz;
    r3.x = hdB137.x;
    r3.z = hdB137.y;
    r3.w = hdB137.z;
    vec4 hdB147 = r1;
    vec3 hdB153 = mix(r3.xzw, hdB147.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = hdB153.x;
    r1.y = hdB153.y;
    r1.z = hdB153.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r1.xy;
        float param_3 = r1.w;
        r1 = hdLod5(param_2, param_3);
        vec2 hdB230 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB230.x;
        r1.z = hdB230.y;
        vec2 hdB241 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB241.x;
        r2.y = hdB241.y;
        vec2 hdB249 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB249.x;
        r2.w = hdB249.y;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r1.x += r2.x;
        vec2 hdB272 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB272.x;
        r2.y = hdB272.y;
        vec2 hdB279 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB279.x;
        r2.w = hdB279.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.x += r2.x;
        vec2 hdB302 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB302.x;
        r2.y = hdB302.y;
        vec2 hdB309 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB309.x;
        r2.w = hdB309.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.x += r2.x;
        vec2 hdB332 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB332.x;
        r2.y = hdB332.y;
        vec2 hdB339 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB339.x;
        r2.w = hdB339.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.x += r2.x;
        vec2 hdB362 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB362.x;
        r2.y = hdB362.y;
        vec2 hdB369 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB369.x;
        r2.w = hdB369.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.x += r2.x;
        vec2 hdB392 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB392.x;
        r2.y = hdB392.y;
        vec2 hdB399 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB399.x;
        r2.w = hdB399.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r1.x += r2.x;
        vec2 hdB422 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB422.x;
        r2.y = hdB422.y;
        vec2 hdB429 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB429.x;
        r2.w = hdB429.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r1.x += r2.x;
        vec2 hdB452 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB452.x;
        r2.y = hdB452.y;
        vec2 hdB459 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB459.x;
        r2.w = hdB459.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod5(param_18, param_19);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v5.x), abs(v5.y));
        if (r1.y < 1.0)
        {
            r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = r2.xy;
            float param_21 = r2.w;
            r2 = hdLod6(param_20, param_21);
            vec2 hdB509 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB509.x;
            r1.z = hdB509.y;
            vec2 hdB519 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB519.x;
            r3.y = hdB519.y;
            vec2 hdB526 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB526.x;
            r3.w = hdB526.y;
            vec2 param_22 = r3.xy;
            float param_23 = r3.w;
            r3 = hdLod6(param_22, param_23);
            r1.w = r2.x + r3.x;
            vec2 hdB548 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB548.x;
            r2.y = hdB548.y;
            vec2 hdB555 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB555.x;
            r2.w = hdB555.y;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod6(param_24, param_25);
            r1.w += r2.x;
            vec2 hdB577 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB577.x;
            r2.y = hdB577.y;
            vec2 hdB584 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB584.x;
            r2.w = hdB584.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r1.w += r2.x;
            vec2 hdB606 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB606.x;
            r2.y = hdB606.y;
            vec2 hdB613 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB613.x;
            r2.w = hdB613.y;
            vec2 param_28 = r2.xy;
            float param_29 = r2.w;
            r2 = hdLod6(param_28, param_29);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v6.x), abs(v6.y));
            if (r1.y < 1.0)
            {
                r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = r2.xy;
                float param_31 = r2.w;
                r2 = hdLod7(param_30, param_31);
                vec2 hdB663 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB663.x;
                r1.z = hdB663.y;
                vec2 hdB673 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB673.x;
                r3.y = hdB673.y;
                vec2 hdB680 = vec2(1.0, 0.0) * v6.zx;
                r3.z = hdB680.x;
                r3.w = hdB680.y;
                vec2 param_32 = r3.xy;
                float param_33 = r3.w;
                r3 = hdLod7(param_32, param_33);
                r1.w = r2.x + r3.x;
                vec2 hdB702 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB702.x;
                r2.y = hdB702.y;
                vec2 hdB709 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB709.x;
                r2.w = hdB709.y;
                vec2 param_34 = r2.xy;
                float param_35 = r2.w;
                r2 = hdLod7(param_34, param_35);
                r1.w += r2.x;
                vec2 hdB731 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB731.x;
                r2.y = hdB731.y;
                vec2 hdB738 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB738.x;
                r2.w = hdB738.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r1.w += r2.x;
                vec2 hdB760 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB760.x;
                r2.y = hdB760.y;
                vec2 hdB767 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB767.x;
                r2.w = hdB767.y;
                vec2 param_38 = r2.xy;
                float param_39 = r2.w;
                r2 = hdLod7(param_38, param_39);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 hdB799 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB799.x;
                r2.w = hdB799.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                vec2 param_40 = r2.xy;
                float param_41 = r2.w;
                r3 = hdLod8(param_40, param_41);
                vec2 hdB824 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB824.x;
                r4.y = hdB824.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_42 = r4.xy;
                float param_43 = r4.w;
                r5 = hdLod8(param_42, param_43);
                r1.w = r3.x + r5.x;
                vec2 hdB852 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB852.x;
                r4.y = hdB852.y;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r3 = hdLod8(param_44, param_45);
                r1.w += r3.x;
                vec2 hdB874 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB874.x;
                r4.y = hdB874.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r1.w += r3.x;
                vec2 hdB896 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB896.x;
                r4.y = hdB896.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r2 = hdLod8(param_48, param_49);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB953 = r0.www * v1.xyz;
    r2.x = hdB953.x;
    r2.y = hdB953.y;
    r2.z = hdB953.z;
    vec4 hdB960 = r1;
    vec3 hdB964 = hdB960.xxx * r2.xyz;
    r1.x = hdB964.x;
    r1.z = hdB964.y;
    r1.w = hdB964.z;
    vec4 hdB971 = r0;
    vec3 hdB978 = (hdB971.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB978.x;
    r0.y = hdB978.y;
    r0.z = hdB978.z;
    vec4 hdB985 = r0;
    vec3 hdB992 = hdB985.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB992.x;
    r0.y = hdB992.y;
    r0.z = hdB992.z;
    vec3 hdB1007 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1007.x;
    oC0.y = hdB1007.y;
    oC0.z = hdB1007.z;
    oC0.w = 1.0;
    bool hdB1019 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1027;
    if (hdB1019)
    {
        hdB1027 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1027 = hdB1019;
    }
    if (hdB1027)
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
    bool _3592 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3602;
    if (_3592)
    {
        _3602 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3602 = _3592;
    }
    if (_3602)
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
        bool _3627 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3642;
        if (!_3627)
        {
            _3642 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3642 = _3627;
        }
        if (_3642)
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
