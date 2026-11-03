#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3998;
vec4 _RESERVED_IDENTIFIER_FIXUP_3999;


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
    bool _61 = hdOverride >= 0;
    bool _80;
    if (_61)
    {
        _80 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _80 = _61;
    }
    vec4 _81;
    if (_80)
    {
        _81 = vec4(float(hdOverride));
    }
    else
    {
        _81 = value;
    }
    return _81;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _98 = hdOverride >= 0;
    bool _108;
    if (_98)
    {
        _108 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _108 = _98;
    }
    vec4 _109;
    if (_108)
    {
        _109 = vec4(float(hdOverride));
    }
    else
    {
        _109 = value;
    }
    return _109;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _126 = hdOverride >= 0;
    bool _136;
    if (_126)
    {
        _136 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _136 = _126;
    }
    vec4 _137;
    if (_136)
    {
        _137 = vec4(float(hdOverride));
    }
    else
    {
        _137 = value;
    }
    return _137;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _155 = hdOverride >= 0;
    bool _165;
    if (_155)
    {
        _165 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _165 = _155;
    }
    vec4 _166;
    if (_165)
    {
        _166 = vec4(float(hdOverride));
    }
    else
    {
        _166 = value;
    }
    return _166;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _184 = hdOverride >= 0;
    bool _194;
    if (_184)
    {
        _194 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _194 = _184;
    }
    vec4 _195;
    if (_194)
    {
        _195 = vec4(float(hdOverride));
    }
    else
    {
        _195 = value;
    }
    return _195;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _213 = hdOverride >= 0;
    bool _223;
    if (_213)
    {
        _223 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _223 = _213;
    }
    vec4 _224;
    if (_223)
    {
        _224 = vec4(float(hdOverride));
    }
    else
    {
        _224 = value;
    }
    return _224;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _242 = hdOverride >= 0;
    bool _252;
    if (_242)
    {
        _252 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _252 = _242;
    }
    vec4 _253;
    if (_252)
    {
        _253 = vec4(float(hdOverride));
    }
    else
    {
        _253 = value;
    }
    return _253;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1238 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1242 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1246 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1250 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1254 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3177;
    _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1254.x;
    _RESERVED_IDENTIFIER_FIXUP_3177.y = _RESERVED_IDENTIFIER_FIXUP_1254.y;
    float _RESERVED_IDENTIFIER_FIXUP_1260 = _RESERVED_IDENTIFIER_FIXUP_1254.z;
    _RESERVED_IDENTIFIER_FIXUP_3177.z = _RESERVED_IDENTIFIER_FIXUP_1260;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1262 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3998).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1262 + _RESERVED_IDENTIFIER_FIXUP_1262;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3183;
    _RESERVED_IDENTIFIER_FIXUP_3183.x = _RESERVED_IDENTIFIER_FIXUP_1265.x;
    _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1265.y;
    _RESERVED_IDENTIFIER_FIXUP_3183.z = _RESERVED_IDENTIFIER_FIXUP_1265.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1273 = _RESERVED_IDENTIFIER_FIXUP_1238.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1276 = _RESERVED_IDENTIFIER_FIXUP_1273 * _RESERVED_IDENTIFIER_FIXUP_3183.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3189;
    _RESERVED_IDENTIFIER_FIXUP_3189.x = _RESERVED_IDENTIFIER_FIXUP_1276.x;
    _RESERVED_IDENTIFIER_FIXUP_3189.y = _RESERVED_IDENTIFIER_FIXUP_1276.y;
    _RESERVED_IDENTIFIER_FIXUP_3189.z = _RESERVED_IDENTIFIER_FIXUP_1276.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1290 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3177.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1291 = mix(_RESERVED_IDENTIFIER_FIXUP_3189.xyz, _RESERVED_IDENTIFIER_FIXUP_1273, _RESERVED_IDENTIFIER_FIXUP_1290);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3195 = _RESERVED_IDENTIFIER_FIXUP_1238;
    _RESERVED_IDENTIFIER_FIXUP_3195.x = _RESERVED_IDENTIFIER_FIXUP_1291.x;
    _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_1291.y;
    _RESERVED_IDENTIFIER_FIXUP_3195.z = _RESERVED_IDENTIFIER_FIXUP_1291.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_1242.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_1299 * _RESERVED_IDENTIFIER_FIXUP_3183.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3201;
    _RESERVED_IDENTIFIER_FIXUP_3201.x = _RESERVED_IDENTIFIER_FIXUP_1302.x;
    _RESERVED_IDENTIFIER_FIXUP_3201.y = _RESERVED_IDENTIFIER_FIXUP_1302.y;
    _RESERVED_IDENTIFIER_FIXUP_3201.z = _RESERVED_IDENTIFIER_FIXUP_1302.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1316 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3177.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1317 = mix(_RESERVED_IDENTIFIER_FIXUP_3201.xyz, _RESERVED_IDENTIFIER_FIXUP_1299, _RESERVED_IDENTIFIER_FIXUP_1316);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3207 = _RESERVED_IDENTIFIER_FIXUP_1242;
    _RESERVED_IDENTIFIER_FIXUP_3207.x = _RESERVED_IDENTIFIER_FIXUP_1317.x;
    _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_1317.y;
    _RESERVED_IDENTIFIER_FIXUP_3207.z = _RESERVED_IDENTIFIER_FIXUP_1317.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1325 = _RESERVED_IDENTIFIER_FIXUP_1246.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1328 = _RESERVED_IDENTIFIER_FIXUP_1325 * _RESERVED_IDENTIFIER_FIXUP_3183.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4024 = vec4(_RESERVED_IDENTIFIER_FIXUP_1328.xy, _RESERVED_IDENTIFIER_FIXUP_1260, _RESERVED_IDENTIFIER_FIXUP_1328.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1343 = mix(_RESERVED_IDENTIFIER_FIXUP_4024.xyw, _RESERVED_IDENTIFIER_FIXUP_1325, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4024.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3219 = _RESERVED_IDENTIFIER_FIXUP_1246;
    _RESERVED_IDENTIFIER_FIXUP_3219.x = _RESERVED_IDENTIFIER_FIXUP_1343.x;
    _RESERVED_IDENTIFIER_FIXUP_3219.y = _RESERVED_IDENTIFIER_FIXUP_1343.y;
    _RESERVED_IDENTIFIER_FIXUP_3219.z = _RESERVED_IDENTIFIER_FIXUP_1343.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1359 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3195, _RESERVED_IDENTIFIER_FIXUP_3207, _RESERVED_IDENTIFIER_FIXUP_1250.xxxx), _RESERVED_IDENTIFIER_FIXUP_3219, _RESERVED_IDENTIFIER_FIXUP_1250.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1366 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3227 = _RESERVED_IDENTIFIER_FIXUP_3207;
    _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_1366;
    float _RESERVED_IDENTIFIER_FIXUP_1372 = clamp((_RESERVED_IDENTIFIER_FIXUP_1366 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_1372;
    float _RESERVED_IDENTIFIER_FIXUP_1378 = ((-_RESERVED_IDENTIFIER_FIXUP_1372) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_1378;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4003;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4000;
    if (_RESERVED_IDENTIFIER_FIXUP_1378 != (-_RESERVED_IDENTIFIER_FIXUP_1378))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1390 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1390.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1390.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1396 = hdLod5(param_3, param_4);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1400 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3439 = _RESERVED_IDENTIFIER_FIXUP_1396;
        _RESERVED_IDENTIFIER_FIXUP_3439.y = _RESERVED_IDENTIFIER_FIXUP_1400.x;
        _RESERVED_IDENTIFIER_FIXUP_3439.z = _RESERVED_IDENTIFIER_FIXUP_1400.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_3439.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3443;
        _RESERVED_IDENTIFIER_FIXUP_3443.x = _RESERVED_IDENTIFIER_FIXUP_1410.x;
        _RESERVED_IDENTIFIER_FIXUP_3443.y = _RESERVED_IDENTIFIER_FIXUP_1410.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1417 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1421 = _RESERVED_IDENTIFIER_FIXUP_1417.y;
        _RESERVED_IDENTIFIER_FIXUP_3443.w = _RESERVED_IDENTIFIER_FIXUP_1421;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3443.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1421;
        float _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_1396.x + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_1432;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_3439.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3456;
        _RESERVED_IDENTIFIER_FIXUP_3456.x = _RESERVED_IDENTIFIER_FIXUP_1439.x;
        _RESERVED_IDENTIFIER_FIXUP_3456.y = _RESERVED_IDENTIFIER_FIXUP_1439.y;
        _RESERVED_IDENTIFIER_FIXUP_3456.w = _RESERVED_IDENTIFIER_FIXUP_1421;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3456.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1421;
        float _RESERVED_IDENTIFIER_FIXUP_1461 = _RESERVED_IDENTIFIER_FIXUP_1432 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_1461;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1468 = _RESERVED_IDENTIFIER_FIXUP_3439.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3469;
        _RESERVED_IDENTIFIER_FIXUP_3469.x = _RESERVED_IDENTIFIER_FIXUP_1468.x;
        _RESERVED_IDENTIFIER_FIXUP_3469.y = _RESERVED_IDENTIFIER_FIXUP_1468.y;
        _RESERVED_IDENTIFIER_FIXUP_3469.w = _RESERVED_IDENTIFIER_FIXUP_1421;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3469.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1421;
        float _RESERVED_IDENTIFIER_FIXUP_1490 = _RESERVED_IDENTIFIER_FIXUP_1461 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_1490;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_3439.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3482;
        _RESERVED_IDENTIFIER_FIXUP_3482.x = _RESERVED_IDENTIFIER_FIXUP_1497.x;
        _RESERVED_IDENTIFIER_FIXUP_3482.y = _RESERVED_IDENTIFIER_FIXUP_1497.y;
        _RESERVED_IDENTIFIER_FIXUP_3482.w = _RESERVED_IDENTIFIER_FIXUP_1421;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3482.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1421;
        float _RESERVED_IDENTIFIER_FIXUP_1519 = _RESERVED_IDENTIFIER_FIXUP_1490 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_1519;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_3439.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3495;
        _RESERVED_IDENTIFIER_FIXUP_3495.x = _RESERVED_IDENTIFIER_FIXUP_1526.x;
        _RESERVED_IDENTIFIER_FIXUP_3495.y = _RESERVED_IDENTIFIER_FIXUP_1526.y;
        _RESERVED_IDENTIFIER_FIXUP_3495.w = _RESERVED_IDENTIFIER_FIXUP_1421;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3495.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1421;
        float _RESERVED_IDENTIFIER_FIXUP_1548 = _RESERVED_IDENTIFIER_FIXUP_1519 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_1548;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1555 = _RESERVED_IDENTIFIER_FIXUP_3439.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3508;
        _RESERVED_IDENTIFIER_FIXUP_3508.x = _RESERVED_IDENTIFIER_FIXUP_1555.x;
        _RESERVED_IDENTIFIER_FIXUP_3508.y = _RESERVED_IDENTIFIER_FIXUP_1555.y;
        _RESERVED_IDENTIFIER_FIXUP_3508.w = _RESERVED_IDENTIFIER_FIXUP_1421;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3508.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1421;
        float _RESERVED_IDENTIFIER_FIXUP_1577 = _RESERVED_IDENTIFIER_FIXUP_1548 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_1577;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1584 = _RESERVED_IDENTIFIER_FIXUP_3439.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3521;
        _RESERVED_IDENTIFIER_FIXUP_3521.x = _RESERVED_IDENTIFIER_FIXUP_1584.x;
        _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_1584.y;
        _RESERVED_IDENTIFIER_FIXUP_3521.w = _RESERVED_IDENTIFIER_FIXUP_1421;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3521.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1421;
        float _RESERVED_IDENTIFIER_FIXUP_1606 = _RESERVED_IDENTIFIER_FIXUP_1577 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_1606;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1613 = _RESERVED_IDENTIFIER_FIXUP_3439.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3534;
        _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_1613.x;
        _RESERVED_IDENTIFIER_FIXUP_3534.y = _RESERVED_IDENTIFIER_FIXUP_1613.y;
        _RESERVED_IDENTIFIER_FIXUP_3534.w = _RESERVED_IDENTIFIER_FIXUP_1421;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3534.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1421;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1630 = hdLod5(param_19, param_20);
        float _RESERVED_IDENTIFIER_FIXUP_1635 = _RESERVED_IDENTIFIER_FIXUP_1606 + _RESERVED_IDENTIFIER_FIXUP_1630.x;
        _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_1635;
        _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_1635 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4003 = _RESERVED_IDENTIFIER_FIXUP_1630;
        _RESERVED_IDENTIFIER_FIXUP_4000 = _RESERVED_IDENTIFIER_FIXUP_3439;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1648 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_1648;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4004;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4001;
        if (_RESERVED_IDENTIFIER_FIXUP_1648 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1657 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1667 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1669 = _RESERVED_IDENTIFIER_FIXUP_1667.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3379 = _RESERVED_IDENTIFIER_FIXUP_3227;
            _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_1669;
            _RESERVED_IDENTIFIER_FIXUP_3379.z = _RESERVED_IDENTIFIER_FIXUP_1667.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1677 = _RESERVED_IDENTIFIER_FIXUP_3379.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3383;
            _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_1677.x;
            _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_1677.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1684 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1688 = _RESERVED_IDENTIFIER_FIXUP_1684.y;
            _RESERVED_IDENTIFIER_FIXUP_3383.w = _RESERVED_IDENTIFIER_FIXUP_1688;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1657.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1657.w;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3383.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1688;
            float _RESERVED_IDENTIFIER_FIXUP_1699 = hdLod6(param_21, param_22).x + hdLod6(param_23, param_24).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4030 = vec4(_RESERVED_IDENTIFIER_FIXUP_1378, _RESERVED_IDENTIFIER_FIXUP_1669, _RESERVED_IDENTIFIER_FIXUP_1667.y, _RESERVED_IDENTIFIER_FIXUP_1699);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1706 = _RESERVED_IDENTIFIER_FIXUP_4030.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3396;
            _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_1706.x;
            _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_1706.y;
            _RESERVED_IDENTIFIER_FIXUP_3396.w = _RESERVED_IDENTIFIER_FIXUP_1688;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3396.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1688;
            float _RESERVED_IDENTIFIER_FIXUP_1728 = _RESERVED_IDENTIFIER_FIXUP_1699 + hdLod6(param_25, param_26).x;
            _RESERVED_IDENTIFIER_FIXUP_4030.w = _RESERVED_IDENTIFIER_FIXUP_1728;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1735 = _RESERVED_IDENTIFIER_FIXUP_4030.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3409;
            _RESERVED_IDENTIFIER_FIXUP_3409.x = _RESERVED_IDENTIFIER_FIXUP_1735.x;
            _RESERVED_IDENTIFIER_FIXUP_3409.y = _RESERVED_IDENTIFIER_FIXUP_1735.y;
            _RESERVED_IDENTIFIER_FIXUP_3409.w = _RESERVED_IDENTIFIER_FIXUP_1688;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3409.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1688;
            float _RESERVED_IDENTIFIER_FIXUP_1757 = _RESERVED_IDENTIFIER_FIXUP_1728 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_4030.w = _RESERVED_IDENTIFIER_FIXUP_1757;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1764 = _RESERVED_IDENTIFIER_FIXUP_4030.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3422;
            _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_1764.x;
            _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_1764.y;
            _RESERVED_IDENTIFIER_FIXUP_3422.w = _RESERVED_IDENTIFIER_FIXUP_1688;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3422.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1688;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1781 = hdLod6(param_29, param_30);
            float _RESERVED_IDENTIFIER_FIXUP_1786 = _RESERVED_IDENTIFIER_FIXUP_1757 + _RESERVED_IDENTIFIER_FIXUP_1781.x;
            _RESERVED_IDENTIFIER_FIXUP_4030.y = _RESERVED_IDENTIFIER_FIXUP_1786;
            _RESERVED_IDENTIFIER_FIXUP_4030.x = _RESERVED_IDENTIFIER_FIXUP_1786 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4004 = _RESERVED_IDENTIFIER_FIXUP_1781;
            _RESERVED_IDENTIFIER_FIXUP_4001 = _RESERVED_IDENTIFIER_FIXUP_4030;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1799 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3244 = _RESERVED_IDENTIFIER_FIXUP_3227;
            _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_1799;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4005;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4002;
            if (_RESERVED_IDENTIFIER_FIXUP_1799 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1808 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1818 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1820 = _RESERVED_IDENTIFIER_FIXUP_1818.x;
                _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_1820;
                _RESERVED_IDENTIFIER_FIXUP_3244.z = _RESERVED_IDENTIFIER_FIXUP_1818.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1828 = _RESERVED_IDENTIFIER_FIXUP_3244.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3323;
                _RESERVED_IDENTIFIER_FIXUP_3323.x = _RESERVED_IDENTIFIER_FIXUP_1828.x;
                _RESERVED_IDENTIFIER_FIXUP_3323.y = _RESERVED_IDENTIFIER_FIXUP_1828.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1835 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1839 = _RESERVED_IDENTIFIER_FIXUP_1835.y;
                _RESERVED_IDENTIFIER_FIXUP_3323.w = _RESERVED_IDENTIFIER_FIXUP_1839;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1808.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1808.w;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3323.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1839;
                float _RESERVED_IDENTIFIER_FIXUP_1850 = hdLod7(param_31, param_32).x + hdLod7(param_33, param_34).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4029 = vec4(_RESERVED_IDENTIFIER_FIXUP_1378, _RESERVED_IDENTIFIER_FIXUP_1820, _RESERVED_IDENTIFIER_FIXUP_1818.y, _RESERVED_IDENTIFIER_FIXUP_1850);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1857 = _RESERVED_IDENTIFIER_FIXUP_4029.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3336;
                _RESERVED_IDENTIFIER_FIXUP_3336.x = _RESERVED_IDENTIFIER_FIXUP_1857.x;
                _RESERVED_IDENTIFIER_FIXUP_3336.y = _RESERVED_IDENTIFIER_FIXUP_1857.y;
                _RESERVED_IDENTIFIER_FIXUP_3336.w = _RESERVED_IDENTIFIER_FIXUP_1839;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3336.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1839;
                float _RESERVED_IDENTIFIER_FIXUP_1879 = _RESERVED_IDENTIFIER_FIXUP_1850 + hdLod7(param_35, param_36).x;
                _RESERVED_IDENTIFIER_FIXUP_4029.w = _RESERVED_IDENTIFIER_FIXUP_1879;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1886 = _RESERVED_IDENTIFIER_FIXUP_4029.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3349;
                _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_1886.x;
                _RESERVED_IDENTIFIER_FIXUP_3349.y = _RESERVED_IDENTIFIER_FIXUP_1886.y;
                _RESERVED_IDENTIFIER_FIXUP_3349.w = _RESERVED_IDENTIFIER_FIXUP_1839;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3349.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1839;
                float _RESERVED_IDENTIFIER_FIXUP_1908 = _RESERVED_IDENTIFIER_FIXUP_1879 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_4029.w = _RESERVED_IDENTIFIER_FIXUP_1908;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1915 = _RESERVED_IDENTIFIER_FIXUP_4029.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3362;
                _RESERVED_IDENTIFIER_FIXUP_3362.x = _RESERVED_IDENTIFIER_FIXUP_1915.x;
                _RESERVED_IDENTIFIER_FIXUP_3362.y = _RESERVED_IDENTIFIER_FIXUP_1915.y;
                _RESERVED_IDENTIFIER_FIXUP_3362.w = _RESERVED_IDENTIFIER_FIXUP_1839;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3362.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1839;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1932 = hdLod7(param_39, param_40);
                float _RESERVED_IDENTIFIER_FIXUP_1937 = _RESERVED_IDENTIFIER_FIXUP_1908 + _RESERVED_IDENTIFIER_FIXUP_1932.x;
                _RESERVED_IDENTIFIER_FIXUP_4029.y = _RESERVED_IDENTIFIER_FIXUP_1937;
                _RESERVED_IDENTIFIER_FIXUP_4029.x = _RESERVED_IDENTIFIER_FIXUP_1937 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4005 = _RESERVED_IDENTIFIER_FIXUP_1932;
                _RESERVED_IDENTIFIER_FIXUP_4002 = _RESERVED_IDENTIFIER_FIXUP_4029;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1953 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1957 = _RESERVED_IDENTIFIER_FIXUP_1953.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1968 = vec4(_RESERVED_IDENTIFIER_FIXUP_1953.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1957).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4026 = vec4(_RESERVED_IDENTIFIER_FIXUP_1968 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1957);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2005 = _RESERVED_IDENTIFIER_FIXUP_1968 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3277 = _RESERVED_IDENTIFIER_FIXUP_4026;
                _RESERVED_IDENTIFIER_FIXUP_3277.x = _RESERVED_IDENTIFIER_FIXUP_2005.x;
                _RESERVED_IDENTIFIER_FIXUP_3277.y = _RESERVED_IDENTIFIER_FIXUP_2005.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2027 = _RESERVED_IDENTIFIER_FIXUP_1968 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3286 = _RESERVED_IDENTIFIER_FIXUP_3277;
                _RESERVED_IDENTIFIER_FIXUP_3286.x = _RESERVED_IDENTIFIER_FIXUP_2027.x;
                _RESERVED_IDENTIFIER_FIXUP_3286.y = _RESERVED_IDENTIFIER_FIXUP_2027.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2049 = _RESERVED_IDENTIFIER_FIXUP_1968 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3295 = _RESERVED_IDENTIFIER_FIXUP_3286;
                _RESERVED_IDENTIFIER_FIXUP_3295.x = _RESERVED_IDENTIFIER_FIXUP_2049.x;
                _RESERVED_IDENTIFIER_FIXUP_3295.y = _RESERVED_IDENTIFIER_FIXUP_2049.y;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3295.xy;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1957;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2059 = hdLod8(param_41, param_42);
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_1968;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1957;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_4026.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1957;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3277.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1957;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3286.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_1957;
                float _RESERVED_IDENTIFIER_FIXUP_2064 = (((hdLod8(param_43, param_44).x + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x) + _RESERVED_IDENTIFIER_FIXUP_2059.x;
                float _RESERVED_IDENTIFIER_FIXUP_2072 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3306 = _RESERVED_IDENTIFIER_FIXUP_2059;
                _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_2072;
                float _RESERVED_IDENTIFIER_FIXUP_2078 = clamp((_RESERVED_IDENTIFIER_FIXUP_2072 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2083 = (_RESERVED_IDENTIFIER_FIXUP_2064 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4005 = _RESERVED_IDENTIFIER_FIXUP_3306;
                _RESERVED_IDENTIFIER_FIXUP_4002 = vec4((_RESERVED_IDENTIFIER_FIXUP_2078 * _RESERVED_IDENTIFIER_FIXUP_2083) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2078, _RESERVED_IDENTIFIER_FIXUP_2083, _RESERVED_IDENTIFIER_FIXUP_2064);
            }
            _RESERVED_IDENTIFIER_FIXUP_4004 = _RESERVED_IDENTIFIER_FIXUP_4005;
            _RESERVED_IDENTIFIER_FIXUP_4001 = _RESERVED_IDENTIFIER_FIXUP_4002;
        }
        _RESERVED_IDENTIFIER_FIXUP_4003 = _RESERVED_IDENTIFIER_FIXUP_4004;
        _RESERVED_IDENTIFIER_FIXUP_4000 = _RESERVED_IDENTIFIER_FIXUP_4001;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3553 = _RESERVED_IDENTIFIER_FIXUP_4000;
    _RESERVED_IDENTIFIER_FIXUP_3553.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3555 = _RESERVED_IDENTIFIER_FIXUP_4003;
    _RESERVED_IDENTIFIER_FIXUP_3555.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3555.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3555.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2122 = _RESERVED_IDENTIFIER_FIXUP_3553.xxx * _RESERVED_IDENTIFIER_FIXUP_3555.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4031 = vec4(_RESERVED_IDENTIFIER_FIXUP_2122.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2122.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2136 = (_RESERVED_IDENTIFIER_FIXUP_1359.xyz * _RESERVED_IDENTIFIER_FIXUP_4031.yyy) + _RESERVED_IDENTIFIER_FIXUP_4031.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3567 = _RESERVED_IDENTIFIER_FIXUP_1359;
    _RESERVED_IDENTIFIER_FIXUP_3567.x = _RESERVED_IDENTIFIER_FIXUP_2136.x;
    _RESERVED_IDENTIFIER_FIXUP_3567.y = _RESERVED_IDENTIFIER_FIXUP_2136.y;
    _RESERVED_IDENTIFIER_FIXUP_3567.z = _RESERVED_IDENTIFIER_FIXUP_2136.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2149 = _RESERVED_IDENTIFIER_FIXUP_3567.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3573 = _RESERVED_IDENTIFIER_FIXUP_3567;
    _RESERVED_IDENTIFIER_FIXUP_3573.x = _RESERVED_IDENTIFIER_FIXUP_2149.x;
    _RESERVED_IDENTIFIER_FIXUP_3573.y = _RESERVED_IDENTIFIER_FIXUP_2149.y;
    _RESERVED_IDENTIFIER_FIXUP_3573.z = _RESERVED_IDENTIFIER_FIXUP_2149.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2205 = OptTex0( texcoord0.xyz);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2209 = hdTex1(param_51);
    vec2 param_52 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2213 = hdTex2(param_52);
    vec2 param_53 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2217 = hdTex3(param_53);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2232 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3593;
    _RESERVED_IDENTIFIER_FIXUP_3593.x = _RESERVED_IDENTIFIER_FIXUP_2232.x;
    _RESERVED_IDENTIFIER_FIXUP_3593.y = _RESERVED_IDENTIFIER_FIXUP_2232.y;
    _RESERVED_IDENTIFIER_FIXUP_3593.z = _RESERVED_IDENTIFIER_FIXUP_2232.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2240 = _RESERVED_IDENTIFIER_FIXUP_2205.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2243 = _RESERVED_IDENTIFIER_FIXUP_2240 * _RESERVED_IDENTIFIER_FIXUP_3593.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3599;
    _RESERVED_IDENTIFIER_FIXUP_3599.x = _RESERVED_IDENTIFIER_FIXUP_2243.x;
    _RESERVED_IDENTIFIER_FIXUP_3599.y = _RESERVED_IDENTIFIER_FIXUP_2243.y;
    _RESERVED_IDENTIFIER_FIXUP_3599.z = _RESERVED_IDENTIFIER_FIXUP_2243.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2258 = mix(_RESERVED_IDENTIFIER_FIXUP_3599.xyz, _RESERVED_IDENTIFIER_FIXUP_2240, _RESERVED_IDENTIFIER_FIXUP_1290);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3605 = _RESERVED_IDENTIFIER_FIXUP_2205;
    _RESERVED_IDENTIFIER_FIXUP_3605.x = _RESERVED_IDENTIFIER_FIXUP_2258.x;
    _RESERVED_IDENTIFIER_FIXUP_3605.y = _RESERVED_IDENTIFIER_FIXUP_2258.y;
    _RESERVED_IDENTIFIER_FIXUP_3605.z = _RESERVED_IDENTIFIER_FIXUP_2258.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2266 = _RESERVED_IDENTIFIER_FIXUP_2209.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2269 = _RESERVED_IDENTIFIER_FIXUP_2266 * _RESERVED_IDENTIFIER_FIXUP_3593.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3611;
    _RESERVED_IDENTIFIER_FIXUP_3611.x = _RESERVED_IDENTIFIER_FIXUP_2269.x;
    _RESERVED_IDENTIFIER_FIXUP_3611.y = _RESERVED_IDENTIFIER_FIXUP_2269.y;
    _RESERVED_IDENTIFIER_FIXUP_3611.z = _RESERVED_IDENTIFIER_FIXUP_2269.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2284 = mix(_RESERVED_IDENTIFIER_FIXUP_3611.xyz, _RESERVED_IDENTIFIER_FIXUP_2266, _RESERVED_IDENTIFIER_FIXUP_1316);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3617 = _RESERVED_IDENTIFIER_FIXUP_2209;
    _RESERVED_IDENTIFIER_FIXUP_3617.x = _RESERVED_IDENTIFIER_FIXUP_2284.x;
    _RESERVED_IDENTIFIER_FIXUP_3617.y = _RESERVED_IDENTIFIER_FIXUP_2284.y;
    _RESERVED_IDENTIFIER_FIXUP_3617.z = _RESERVED_IDENTIFIER_FIXUP_2284.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2292 = _RESERVED_IDENTIFIER_FIXUP_2213.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2295 = _RESERVED_IDENTIFIER_FIXUP_2292 * _RESERVED_IDENTIFIER_FIXUP_3593.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4033 = vec4(_RESERVED_IDENTIFIER_FIXUP_2295.xy, _RESERVED_IDENTIFIER_FIXUP_1260, _RESERVED_IDENTIFIER_FIXUP_2295.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2310 = mix(_RESERVED_IDENTIFIER_FIXUP_4033.xyw, _RESERVED_IDENTIFIER_FIXUP_2292, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4033.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3629 = _RESERVED_IDENTIFIER_FIXUP_2213;
    _RESERVED_IDENTIFIER_FIXUP_3629.x = _RESERVED_IDENTIFIER_FIXUP_2310.x;
    _RESERVED_IDENTIFIER_FIXUP_3629.y = _RESERVED_IDENTIFIER_FIXUP_2310.y;
    _RESERVED_IDENTIFIER_FIXUP_3629.z = _RESERVED_IDENTIFIER_FIXUP_2310.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2326 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3605, _RESERVED_IDENTIFIER_FIXUP_3617, _RESERVED_IDENTIFIER_FIXUP_2217.xxxx), _RESERVED_IDENTIFIER_FIXUP_3629, _RESERVED_IDENTIFIER_FIXUP_2217.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3637 = _RESERVED_IDENTIFIER_FIXUP_3617;
    _RESERVED_IDENTIFIER_FIXUP_3637.x = _RESERVED_IDENTIFIER_FIXUP_1366;
    float _RESERVED_IDENTIFIER_FIXUP_2339 = clamp((_RESERVED_IDENTIFIER_FIXUP_1366 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3637.x = _RESERVED_IDENTIFIER_FIXUP_2339;
    float _RESERVED_IDENTIFIER_FIXUP_2345 = ((-_RESERVED_IDENTIFIER_FIXUP_2339) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3637.x = _RESERVED_IDENTIFIER_FIXUP_2345;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4018;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4012;
    if (_RESERVED_IDENTIFIER_FIXUP_2345 != (-_RESERVED_IDENTIFIER_FIXUP_2345))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2357 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2357.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2357.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2363 = hdLod5(param_54, param_55);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2367 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3849 = _RESERVED_IDENTIFIER_FIXUP_2363;
        _RESERVED_IDENTIFIER_FIXUP_3849.y = _RESERVED_IDENTIFIER_FIXUP_2367.x;
        _RESERVED_IDENTIFIER_FIXUP_3849.z = _RESERVED_IDENTIFIER_FIXUP_2367.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2377 = _RESERVED_IDENTIFIER_FIXUP_3849.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3853;
        _RESERVED_IDENTIFIER_FIXUP_3853.x = _RESERVED_IDENTIFIER_FIXUP_2377.x;
        _RESERVED_IDENTIFIER_FIXUP_3853.y = _RESERVED_IDENTIFIER_FIXUP_2377.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2384 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2388 = _RESERVED_IDENTIFIER_FIXUP_2384.y;
        _RESERVED_IDENTIFIER_FIXUP_3853.w = _RESERVED_IDENTIFIER_FIXUP_2388;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3853.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2388;
        float _RESERVED_IDENTIFIER_FIXUP_2399 = _RESERVED_IDENTIFIER_FIXUP_2363.x + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2399;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2406 = _RESERVED_IDENTIFIER_FIXUP_3849.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3866;
        _RESERVED_IDENTIFIER_FIXUP_3866.x = _RESERVED_IDENTIFIER_FIXUP_2406.x;
        _RESERVED_IDENTIFIER_FIXUP_3866.y = _RESERVED_IDENTIFIER_FIXUP_2406.y;
        _RESERVED_IDENTIFIER_FIXUP_3866.w = _RESERVED_IDENTIFIER_FIXUP_2388;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3866.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2388;
        float _RESERVED_IDENTIFIER_FIXUP_2428 = _RESERVED_IDENTIFIER_FIXUP_2399 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2428;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2435 = _RESERVED_IDENTIFIER_FIXUP_3849.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3879;
        _RESERVED_IDENTIFIER_FIXUP_3879.x = _RESERVED_IDENTIFIER_FIXUP_2435.x;
        _RESERVED_IDENTIFIER_FIXUP_3879.y = _RESERVED_IDENTIFIER_FIXUP_2435.y;
        _RESERVED_IDENTIFIER_FIXUP_3879.w = _RESERVED_IDENTIFIER_FIXUP_2388;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3879.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2388;
        float _RESERVED_IDENTIFIER_FIXUP_2457 = _RESERVED_IDENTIFIER_FIXUP_2428 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2457;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2464 = _RESERVED_IDENTIFIER_FIXUP_3849.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3892;
        _RESERVED_IDENTIFIER_FIXUP_3892.x = _RESERVED_IDENTIFIER_FIXUP_2464.x;
        _RESERVED_IDENTIFIER_FIXUP_3892.y = _RESERVED_IDENTIFIER_FIXUP_2464.y;
        _RESERVED_IDENTIFIER_FIXUP_3892.w = _RESERVED_IDENTIFIER_FIXUP_2388;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3892.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2388;
        float _RESERVED_IDENTIFIER_FIXUP_2486 = _RESERVED_IDENTIFIER_FIXUP_2457 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2486;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2493 = _RESERVED_IDENTIFIER_FIXUP_3849.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3905;
        _RESERVED_IDENTIFIER_FIXUP_3905.x = _RESERVED_IDENTIFIER_FIXUP_2493.x;
        _RESERVED_IDENTIFIER_FIXUP_3905.y = _RESERVED_IDENTIFIER_FIXUP_2493.y;
        _RESERVED_IDENTIFIER_FIXUP_3905.w = _RESERVED_IDENTIFIER_FIXUP_2388;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3905.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2388;
        float _RESERVED_IDENTIFIER_FIXUP_2515 = _RESERVED_IDENTIFIER_FIXUP_2486 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2515;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2522 = _RESERVED_IDENTIFIER_FIXUP_3849.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3918;
        _RESERVED_IDENTIFIER_FIXUP_3918.x = _RESERVED_IDENTIFIER_FIXUP_2522.x;
        _RESERVED_IDENTIFIER_FIXUP_3918.y = _RESERVED_IDENTIFIER_FIXUP_2522.y;
        _RESERVED_IDENTIFIER_FIXUP_3918.w = _RESERVED_IDENTIFIER_FIXUP_2388;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3918.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2388;
        float _RESERVED_IDENTIFIER_FIXUP_2544 = _RESERVED_IDENTIFIER_FIXUP_2515 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2544;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2551 = _RESERVED_IDENTIFIER_FIXUP_3849.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3931;
        _RESERVED_IDENTIFIER_FIXUP_3931.x = _RESERVED_IDENTIFIER_FIXUP_2551.x;
        _RESERVED_IDENTIFIER_FIXUP_3931.y = _RESERVED_IDENTIFIER_FIXUP_2551.y;
        _RESERVED_IDENTIFIER_FIXUP_3931.w = _RESERVED_IDENTIFIER_FIXUP_2388;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3931.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2388;
        float _RESERVED_IDENTIFIER_FIXUP_2573 = _RESERVED_IDENTIFIER_FIXUP_2544 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2573;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2580 = _RESERVED_IDENTIFIER_FIXUP_3849.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3944;
        _RESERVED_IDENTIFIER_FIXUP_3944.x = _RESERVED_IDENTIFIER_FIXUP_2580.x;
        _RESERVED_IDENTIFIER_FIXUP_3944.y = _RESERVED_IDENTIFIER_FIXUP_2580.y;
        _RESERVED_IDENTIFIER_FIXUP_3944.w = _RESERVED_IDENTIFIER_FIXUP_2388;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3944.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2388;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2597 = hdLod5(param_70, param_71);
        float _RESERVED_IDENTIFIER_FIXUP_2602 = _RESERVED_IDENTIFIER_FIXUP_2573 + _RESERVED_IDENTIFIER_FIXUP_2597.x;
        _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2602;
        _RESERVED_IDENTIFIER_FIXUP_3849.x = _RESERVED_IDENTIFIER_FIXUP_2602 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4018 = _RESERVED_IDENTIFIER_FIXUP_2597;
        _RESERVED_IDENTIFIER_FIXUP_4012 = _RESERVED_IDENTIFIER_FIXUP_3849;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2615 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3637.y = _RESERVED_IDENTIFIER_FIXUP_2615;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4019;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4013;
        if (_RESERVED_IDENTIFIER_FIXUP_2615 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2624 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2634 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2636 = _RESERVED_IDENTIFIER_FIXUP_2634.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_3637;
            _RESERVED_IDENTIFIER_FIXUP_3789.y = _RESERVED_IDENTIFIER_FIXUP_2636;
            _RESERVED_IDENTIFIER_FIXUP_3789.z = _RESERVED_IDENTIFIER_FIXUP_2634.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2644 = _RESERVED_IDENTIFIER_FIXUP_3789.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3793;
            _RESERVED_IDENTIFIER_FIXUP_3793.x = _RESERVED_IDENTIFIER_FIXUP_2644.x;
            _RESERVED_IDENTIFIER_FIXUP_3793.y = _RESERVED_IDENTIFIER_FIXUP_2644.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2651 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2655 = _RESERVED_IDENTIFIER_FIXUP_2651.y;
            _RESERVED_IDENTIFIER_FIXUP_3793.w = _RESERVED_IDENTIFIER_FIXUP_2655;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2624.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2624.w;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3793.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2655;
            float _RESERVED_IDENTIFIER_FIXUP_2666 = hdLod6(param_72, param_73).x + hdLod6(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4039 = vec4(_RESERVED_IDENTIFIER_FIXUP_2345, _RESERVED_IDENTIFIER_FIXUP_2636, _RESERVED_IDENTIFIER_FIXUP_2634.y, _RESERVED_IDENTIFIER_FIXUP_2666);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2673 = _RESERVED_IDENTIFIER_FIXUP_4039.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3806;
            _RESERVED_IDENTIFIER_FIXUP_3806.x = _RESERVED_IDENTIFIER_FIXUP_2673.x;
            _RESERVED_IDENTIFIER_FIXUP_3806.y = _RESERVED_IDENTIFIER_FIXUP_2673.y;
            _RESERVED_IDENTIFIER_FIXUP_3806.w = _RESERVED_IDENTIFIER_FIXUP_2655;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3806.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2655;
            float _RESERVED_IDENTIFIER_FIXUP_2695 = _RESERVED_IDENTIFIER_FIXUP_2666 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_4039.w = _RESERVED_IDENTIFIER_FIXUP_2695;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2702 = _RESERVED_IDENTIFIER_FIXUP_4039.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3819;
            _RESERVED_IDENTIFIER_FIXUP_3819.x = _RESERVED_IDENTIFIER_FIXUP_2702.x;
            _RESERVED_IDENTIFIER_FIXUP_3819.y = _RESERVED_IDENTIFIER_FIXUP_2702.y;
            _RESERVED_IDENTIFIER_FIXUP_3819.w = _RESERVED_IDENTIFIER_FIXUP_2655;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3819.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2655;
            float _RESERVED_IDENTIFIER_FIXUP_2724 = _RESERVED_IDENTIFIER_FIXUP_2695 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_4039.w = _RESERVED_IDENTIFIER_FIXUP_2724;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2731 = _RESERVED_IDENTIFIER_FIXUP_4039.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3832;
            _RESERVED_IDENTIFIER_FIXUP_3832.x = _RESERVED_IDENTIFIER_FIXUP_2731.x;
            _RESERVED_IDENTIFIER_FIXUP_3832.y = _RESERVED_IDENTIFIER_FIXUP_2731.y;
            _RESERVED_IDENTIFIER_FIXUP_3832.w = _RESERVED_IDENTIFIER_FIXUP_2655;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3832.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2655;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2748 = hdLod6(param_80, param_81);
            float _RESERVED_IDENTIFIER_FIXUP_2753 = _RESERVED_IDENTIFIER_FIXUP_2724 + _RESERVED_IDENTIFIER_FIXUP_2748.x;
            _RESERVED_IDENTIFIER_FIXUP_4039.y = _RESERVED_IDENTIFIER_FIXUP_2753;
            _RESERVED_IDENTIFIER_FIXUP_4039.x = _RESERVED_IDENTIFIER_FIXUP_2753 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4019 = _RESERVED_IDENTIFIER_FIXUP_2748;
            _RESERVED_IDENTIFIER_FIXUP_4013 = _RESERVED_IDENTIFIER_FIXUP_4039;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2766 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3654 = _RESERVED_IDENTIFIER_FIXUP_3637;
            _RESERVED_IDENTIFIER_FIXUP_3654.y = _RESERVED_IDENTIFIER_FIXUP_2766;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4020;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4014;
            if (_RESERVED_IDENTIFIER_FIXUP_2766 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2775 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2785 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2787 = _RESERVED_IDENTIFIER_FIXUP_2785.x;
                _RESERVED_IDENTIFIER_FIXUP_3654.y = _RESERVED_IDENTIFIER_FIXUP_2787;
                _RESERVED_IDENTIFIER_FIXUP_3654.z = _RESERVED_IDENTIFIER_FIXUP_2785.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2795 = _RESERVED_IDENTIFIER_FIXUP_3654.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3733;
                _RESERVED_IDENTIFIER_FIXUP_3733.x = _RESERVED_IDENTIFIER_FIXUP_2795.x;
                _RESERVED_IDENTIFIER_FIXUP_3733.y = _RESERVED_IDENTIFIER_FIXUP_2795.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2802 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2806 = _RESERVED_IDENTIFIER_FIXUP_2802.y;
                _RESERVED_IDENTIFIER_FIXUP_3733.w = _RESERVED_IDENTIFIER_FIXUP_2806;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2775.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2775.w;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3733.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2806;
                float _RESERVED_IDENTIFIER_FIXUP_2817 = hdLod7(param_82, param_83).x + hdLod7(param_84, param_85).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4038 = vec4(_RESERVED_IDENTIFIER_FIXUP_2345, _RESERVED_IDENTIFIER_FIXUP_2787, _RESERVED_IDENTIFIER_FIXUP_2785.y, _RESERVED_IDENTIFIER_FIXUP_2817);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2824 = _RESERVED_IDENTIFIER_FIXUP_4038.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3746;
                _RESERVED_IDENTIFIER_FIXUP_3746.x = _RESERVED_IDENTIFIER_FIXUP_2824.x;
                _RESERVED_IDENTIFIER_FIXUP_3746.y = _RESERVED_IDENTIFIER_FIXUP_2824.y;
                _RESERVED_IDENTIFIER_FIXUP_3746.w = _RESERVED_IDENTIFIER_FIXUP_2806;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3746.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2806;
                float _RESERVED_IDENTIFIER_FIXUP_2846 = _RESERVED_IDENTIFIER_FIXUP_2817 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_4038.w = _RESERVED_IDENTIFIER_FIXUP_2846;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2853 = _RESERVED_IDENTIFIER_FIXUP_4038.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3759;
                _RESERVED_IDENTIFIER_FIXUP_3759.x = _RESERVED_IDENTIFIER_FIXUP_2853.x;
                _RESERVED_IDENTIFIER_FIXUP_3759.y = _RESERVED_IDENTIFIER_FIXUP_2853.y;
                _RESERVED_IDENTIFIER_FIXUP_3759.w = _RESERVED_IDENTIFIER_FIXUP_2806;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3759.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2806;
                float _RESERVED_IDENTIFIER_FIXUP_2875 = _RESERVED_IDENTIFIER_FIXUP_2846 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_4038.w = _RESERVED_IDENTIFIER_FIXUP_2875;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2882 = _RESERVED_IDENTIFIER_FIXUP_4038.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3772;
                _RESERVED_IDENTIFIER_FIXUP_3772.x = _RESERVED_IDENTIFIER_FIXUP_2882.x;
                _RESERVED_IDENTIFIER_FIXUP_3772.y = _RESERVED_IDENTIFIER_FIXUP_2882.y;
                _RESERVED_IDENTIFIER_FIXUP_3772.w = _RESERVED_IDENTIFIER_FIXUP_2806;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3772.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2806;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2899 = hdLod7(param_90, param_91);
                float _RESERVED_IDENTIFIER_FIXUP_2904 = _RESERVED_IDENTIFIER_FIXUP_2875 + _RESERVED_IDENTIFIER_FIXUP_2899.x;
                _RESERVED_IDENTIFIER_FIXUP_4038.y = _RESERVED_IDENTIFIER_FIXUP_2904;
                _RESERVED_IDENTIFIER_FIXUP_4038.x = _RESERVED_IDENTIFIER_FIXUP_2904 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4020 = _RESERVED_IDENTIFIER_FIXUP_2899;
                _RESERVED_IDENTIFIER_FIXUP_4014 = _RESERVED_IDENTIFIER_FIXUP_4038;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2920 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2924 = _RESERVED_IDENTIFIER_FIXUP_2920.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2935 = vec4(_RESERVED_IDENTIFIER_FIXUP_2920.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2924).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_4035 = vec4(_RESERVED_IDENTIFIER_FIXUP_2935 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2924);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2972 = _RESERVED_IDENTIFIER_FIXUP_2935 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3687 = _RESERVED_IDENTIFIER_FIXUP_4035;
                _RESERVED_IDENTIFIER_FIXUP_3687.x = _RESERVED_IDENTIFIER_FIXUP_2972.x;
                _RESERVED_IDENTIFIER_FIXUP_3687.y = _RESERVED_IDENTIFIER_FIXUP_2972.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2994 = _RESERVED_IDENTIFIER_FIXUP_2935 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3696 = _RESERVED_IDENTIFIER_FIXUP_3687;
                _RESERVED_IDENTIFIER_FIXUP_3696.x = _RESERVED_IDENTIFIER_FIXUP_2994.x;
                _RESERVED_IDENTIFIER_FIXUP_3696.y = _RESERVED_IDENTIFIER_FIXUP_2994.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_3016 = _RESERVED_IDENTIFIER_FIXUP_2935 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3705 = _RESERVED_IDENTIFIER_FIXUP_3696;
                _RESERVED_IDENTIFIER_FIXUP_3705.x = _RESERVED_IDENTIFIER_FIXUP_3016.x;
                _RESERVED_IDENTIFIER_FIXUP_3705.y = _RESERVED_IDENTIFIER_FIXUP_3016.y;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3705.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2924;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3026 = hdLod8(param_92, param_93);
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_2935;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2924;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_4035.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2924;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3687.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2924;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3696.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2924;
                float _RESERVED_IDENTIFIER_FIXUP_3031 = (((hdLod8(param_94, param_95).x + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + _RESERVED_IDENTIFIER_FIXUP_3026.x;
                float _RESERVED_IDENTIFIER_FIXUP_3039 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3716 = _RESERVED_IDENTIFIER_FIXUP_3026;
                _RESERVED_IDENTIFIER_FIXUP_3716.x = _RESERVED_IDENTIFIER_FIXUP_3039;
                float _RESERVED_IDENTIFIER_FIXUP_3045 = clamp((_RESERVED_IDENTIFIER_FIXUP_3039 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_3050 = (_RESERVED_IDENTIFIER_FIXUP_3031 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_4020 = _RESERVED_IDENTIFIER_FIXUP_3716;
                _RESERVED_IDENTIFIER_FIXUP_4014 = vec4((_RESERVED_IDENTIFIER_FIXUP_3045 * _RESERVED_IDENTIFIER_FIXUP_3050) + 1.0, _RESERVED_IDENTIFIER_FIXUP_3045, _RESERVED_IDENTIFIER_FIXUP_3050, _RESERVED_IDENTIFIER_FIXUP_3031);
            }
            _RESERVED_IDENTIFIER_FIXUP_4019 = _RESERVED_IDENTIFIER_FIXUP_4020;
            _RESERVED_IDENTIFIER_FIXUP_4013 = _RESERVED_IDENTIFIER_FIXUP_4014;
        }
        _RESERVED_IDENTIFIER_FIXUP_4018 = _RESERVED_IDENTIFIER_FIXUP_4019;
        _RESERVED_IDENTIFIER_FIXUP_4012 = _RESERVED_IDENTIFIER_FIXUP_4013;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3065 = (_RESERVED_IDENTIFIER_FIXUP_4012.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3961 = _RESERVED_IDENTIFIER_FIXUP_4012;
    _RESERVED_IDENTIFIER_FIXUP_3961.y = _RESERVED_IDENTIFIER_FIXUP_3065;
    _RESERVED_IDENTIFIER_FIXUP_3961.y = _RESERVED_IDENTIFIER_FIXUP_3065;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3078 = _RESERVED_IDENTIFIER_FIXUP_2326.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3967 = _RESERVED_IDENTIFIER_FIXUP_4018;
    _RESERVED_IDENTIFIER_FIXUP_3967.x = _RESERVED_IDENTIFIER_FIXUP_3078.x;
    _RESERVED_IDENTIFIER_FIXUP_3967.y = _RESERVED_IDENTIFIER_FIXUP_3078.y;
    _RESERVED_IDENTIFIER_FIXUP_3967.z = _RESERVED_IDENTIFIER_FIXUP_3078.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3089 = _RESERVED_IDENTIFIER_FIXUP_3961.xxx * _RESERVED_IDENTIFIER_FIXUP_3967.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4040 = vec4(_RESERVED_IDENTIFIER_FIXUP_3089.x, _RESERVED_IDENTIFIER_FIXUP_3065, _RESERVED_IDENTIFIER_FIXUP_3089.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3103 = (_RESERVED_IDENTIFIER_FIXUP_2326.xyz * _RESERVED_IDENTIFIER_FIXUP_4040.yyy) + _RESERVED_IDENTIFIER_FIXUP_4040.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3979 = _RESERVED_IDENTIFIER_FIXUP_2326;
    _RESERVED_IDENTIFIER_FIXUP_3979.x = _RESERVED_IDENTIFIER_FIXUP_3103.x;
    _RESERVED_IDENTIFIER_FIXUP_3979.y = _RESERVED_IDENTIFIER_FIXUP_3103.y;
    _RESERVED_IDENTIFIER_FIXUP_3979.z = _RESERVED_IDENTIFIER_FIXUP_3103.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3116 = _RESERVED_IDENTIFIER_FIXUP_3979.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3985 = _RESERVED_IDENTIFIER_FIXUP_3979;
    _RESERVED_IDENTIFIER_FIXUP_3985.x = _RESERVED_IDENTIFIER_FIXUP_3116.x;
    _RESERVED_IDENTIFIER_FIXUP_3985.y = _RESERVED_IDENTIFIER_FIXUP_3116.y;
    _RESERVED_IDENTIFIER_FIXUP_3985.z = _RESERVED_IDENTIFIER_FIXUP_3116.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3985.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1097 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1106;
    if (_RESERVED_IDENTIFIER_FIXUP_1097)
    {
        _RESERVED_IDENTIFIER_FIXUP_1106 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1106 = _RESERVED_IDENTIFIER_FIXUP_1097;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1106)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1143 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3573.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1169 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3169;
    if (_RESERVED_IDENTIFIER_FIXUP_1143 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3169 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1143), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1169);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3169 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1169);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3169;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3065);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    vec3 hdB93 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB93.x;
    r4.y = hdB93.y;
    r4.z = hdB93.z;
    vec3 hdB108 = v0.xyz + v0.xyz;
    r5.x = hdB108.x;
    r5.y = hdB108.y;
    r5.z = hdB108.z;
    vec3 hdB119 = r0.xyz * r5.xyz;
    r6.x = hdB119.x;
    r6.y = hdB119.y;
    r6.z = hdB119.z;
    vec4 hdB128 = r0;
    vec3 hdB137 = mix(r6.xyz, hdB128.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB137.x;
    r0.y = hdB137.y;
    r0.z = hdB137.z;
    vec3 hdB148 = r1.xyz * r5.xyz;
    r6.x = hdB148.x;
    r6.y = hdB148.y;
    r6.z = hdB148.z;
    vec4 hdB157 = r1;
    vec3 hdB163 = mix(r6.xyz, hdB157.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB163.x;
    r1.y = hdB163.y;
    r1.z = hdB163.z;
    vec3 hdB174 = r2.xyz * r5.xyz;
    r4.x = hdB174.x;
    r4.y = hdB174.y;
    r4.w = hdB174.z;
    vec4 hdB184 = r2;
    vec3 hdB190 = mix(r4.xyw, hdB184.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB190.x;
    r2.y = hdB190.y;
    r2.z = hdB190.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r1.xy;
        float param_4 = r1.w;
        r1 = hdLod5(param_3, param_4);
        vec2 hdB256 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB256.x;
        r1.z = hdB256.y;
        vec2 hdB267 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB267.x;
        r2.y = hdB267.y;
        vec2 hdB275 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB275.x;
        r2.w = hdB275.y;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r1.x += r2.x;
        vec2 hdB298 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB298.x;
        r2.y = hdB298.y;
        vec2 hdB305 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB305.x;
        r2.w = hdB305.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.x += r2.x;
        vec2 hdB328 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB328.x;
        r2.y = hdB328.y;
        vec2 hdB335 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB335.x;
        r2.w = hdB335.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.x += r2.x;
        vec2 hdB358 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB358.x;
        r2.y = hdB358.y;
        vec2 hdB365 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB365.x;
        r2.w = hdB365.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.x += r2.x;
        vec2 hdB388 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB388.x;
        r2.y = hdB388.y;
        vec2 hdB395 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB395.x;
        r2.w = hdB395.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.x += r2.x;
        vec2 hdB418 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB418.x;
        r2.y = hdB418.y;
        vec2 hdB425 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB425.x;
        r2.w = hdB425.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r1.x += r2.x;
        vec2 hdB448 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB448.x;
        r2.y = hdB448.y;
        vec2 hdB455 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB455.x;
        r2.w = hdB455.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r1.x += r2.x;
        vec2 hdB478 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB478.x;
        r2.y = hdB478.y;
        vec2 hdB485 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB485.x;
        r2.w = hdB485.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod5(param_19, param_20);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r2.xy;
            float param_22 = r2.w;
            r2 = hdLod6(param_21, param_22);
            vec2 hdB535 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB535.x;
            r1.z = hdB535.y;
            vec2 hdB545 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB545.x;
            r3.y = hdB545.y;
            vec2 hdB552 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB552.x;
            r3.w = hdB552.y;
            vec2 param_23 = r3.xy;
            float param_24 = r3.w;
            r3 = hdLod6(param_23, param_24);
            r1.w = r2.x + r3.x;
            vec2 hdB574 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB574.x;
            r2.y = hdB574.y;
            vec2 hdB581 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB581.x;
            r2.w = hdB581.y;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
            r1.w += r2.x;
            vec2 hdB603 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB603.x;
            r2.y = hdB603.y;
            vec2 hdB610 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB610.x;
            r2.w = hdB610.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r1.w += r2.x;
            vec2 hdB632 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB632.x;
            r2.y = hdB632.y;
            vec2 hdB639 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB639.x;
            r2.w = hdB639.y;
            vec2 param_29 = r2.xy;
            float param_30 = r2.w;
            r2 = hdLod6(param_29, param_30);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r2.xy;
                float param_32 = r2.w;
                r2 = hdLod7(param_31, param_32);
                vec2 hdB689 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB689.x;
                r1.z = hdB689.y;
                vec2 hdB699 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB699.x;
                r3.y = hdB699.y;
                vec2 hdB706 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB706.x;
                r3.w = hdB706.y;
                vec2 param_33 = r3.xy;
                float param_34 = r3.w;
                r3 = hdLod7(param_33, param_34);
                r1.w = r2.x + r3.x;
                vec2 hdB728 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB728.x;
                r2.y = hdB728.y;
                vec2 hdB735 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB735.x;
                r2.w = hdB735.y;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
                r1.w += r2.x;
                vec2 hdB757 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB757.x;
                r2.y = hdB757.y;
                vec2 hdB764 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB764.x;
                r2.w = hdB764.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r1.w += r2.x;
                vec2 hdB786 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB786.x;
                r2.y = hdB786.y;
                vec2 hdB793 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB793.x;
                r2.w = hdB793.y;
                vec2 param_39 = r2.xy;
                float param_40 = r2.w;
                r2 = hdLod7(param_39, param_40);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 hdB825 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB825.x;
                r2.w = hdB825.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r3 = hdLod8(param_41, param_42);
                vec2 hdB850 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB850.x;
                r4.y = hdB850.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r5 = hdLod8(param_43, param_44);
                r1.w = r3.x + r5.x;
                vec2 hdB878 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB878.x;
                r4.y = hdB878.y;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r3 = hdLod8(param_45, param_46);
                r1.w += r3.x;
                vec2 hdB900 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB900.x;
                r4.y = hdB900.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r3 = hdLod8(param_47, param_48);
                r1.w += r3.x;
                vec2 hdB922 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB922.x;
                r4.y = hdB922.y;
                vec2 param_49 = r4.xy;
                float param_50 = r4.w;
                r2 = hdLod8(param_49, param_50);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB979 = r0.www * v1.xyz;
    r2.x = hdB979.x;
    r2.y = hdB979.y;
    r2.z = hdB979.z;
    vec4 hdB986 = r1;
    vec3 hdB990 = hdB986.xxx * r2.xyz;
    r1.x = hdB990.x;
    r1.z = hdB990.y;
    r1.w = hdB990.z;
    vec4 hdB997 = r0;
    vec3 hdB1004 = (hdB997.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB1004.x;
    r0.y = hdB1004.y;
    r0.z = hdB1004.z;
    vec4 hdB1011 = r0;
    vec3 hdB1018 = hdB1011.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1018.x;
    r0.y = hdB1018.y;
    r0.z = hdB1018.z;
    vec3 hdB1033 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1033.x;
    oC0.y = hdB1033.y;
    oC0.z = hdB1033.z;
    oC0.w = 1.0;
    bool hdB1045 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1053;
    if (hdB1045)
    {
        hdB1053 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1053 = hdB1045;
    }
    if (hdB1053)
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
    bool _3719 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3729;
    if (_3719)
    {
        _3729 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3729 = _3719;
    }
    if (_3729)
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
        bool _3754 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3769;
        if (!_3754)
        {
            _3769 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3769 = _3754;
        }
        if (_3769)
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
