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
float _RESERVED_IDENTIFIER_FIXUP_4121;
vec4 _RESERVED_IDENTIFIER_FIXUP_4122;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1260 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1264 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1268 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1272 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1276 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3234;
    _RESERVED_IDENTIFIER_FIXUP_3234.x = _RESERVED_IDENTIFIER_FIXUP_1276.x;
    _RESERVED_IDENTIFIER_FIXUP_3234.y = _RESERVED_IDENTIFIER_FIXUP_1276.y;
    float _RESERVED_IDENTIFIER_FIXUP_1282 = _RESERVED_IDENTIFIER_FIXUP_1276.z;
    _RESERVED_IDENTIFIER_FIXUP_3234.z = _RESERVED_IDENTIFIER_FIXUP_1282;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1284 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4121).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_1284 + _RESERVED_IDENTIFIER_FIXUP_1284;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3240 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_1287.x;
    _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_1287.y;
    _RESERVED_IDENTIFIER_FIXUP_3240.z = _RESERVED_IDENTIFIER_FIXUP_1287.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_1260.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1298 = _RESERVED_IDENTIFIER_FIXUP_1295 * _RESERVED_IDENTIFIER_FIXUP_3240.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3246 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1298.x;
    _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1298.y;
    _RESERVED_IDENTIFIER_FIXUP_3246.z = _RESERVED_IDENTIFIER_FIXUP_1298.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1312 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3234.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1313 = mix(_RESERVED_IDENTIFIER_FIXUP_3246.xyz, _RESERVED_IDENTIFIER_FIXUP_1295, _RESERVED_IDENTIFIER_FIXUP_1312);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3252 = _RESERVED_IDENTIFIER_FIXUP_1260;
    _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_1313.x;
    _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_1313.y;
    _RESERVED_IDENTIFIER_FIXUP_3252.z = _RESERVED_IDENTIFIER_FIXUP_1313.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1321 = _RESERVED_IDENTIFIER_FIXUP_1264.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1324 = _RESERVED_IDENTIFIER_FIXUP_1321 * _RESERVED_IDENTIFIER_FIXUP_3240.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1324.x;
    _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1324.y;
    _RESERVED_IDENTIFIER_FIXUP_3246.z = _RESERVED_IDENTIFIER_FIXUP_1324.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1338 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3234.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1339 = mix(_RESERVED_IDENTIFIER_FIXUP_3246.xyz, _RESERVED_IDENTIFIER_FIXUP_1321, _RESERVED_IDENTIFIER_FIXUP_1338);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3264 = _RESERVED_IDENTIFIER_FIXUP_1264;
    _RESERVED_IDENTIFIER_FIXUP_3264.x = _RESERVED_IDENTIFIER_FIXUP_1339.x;
    _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_1339.y;
    _RESERVED_IDENTIFIER_FIXUP_3264.z = _RESERVED_IDENTIFIER_FIXUP_1339.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1268.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1350 = _RESERVED_IDENTIFIER_FIXUP_1347 * _RESERVED_IDENTIFIER_FIXUP_3240.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4147 = vec4(_RESERVED_IDENTIFIER_FIXUP_1350.xy, _RESERVED_IDENTIFIER_FIXUP_1282, _RESERVED_IDENTIFIER_FIXUP_1350.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1365 = mix(_RESERVED_IDENTIFIER_FIXUP_4147.xyw, _RESERVED_IDENTIFIER_FIXUP_1347, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4147.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3276 = _RESERVED_IDENTIFIER_FIXUP_1268;
    _RESERVED_IDENTIFIER_FIXUP_3276.x = _RESERVED_IDENTIFIER_FIXUP_1365.x;
    _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1365.y;
    _RESERVED_IDENTIFIER_FIXUP_3276.z = _RESERVED_IDENTIFIER_FIXUP_1365.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3252, _RESERVED_IDENTIFIER_FIXUP_3264, _RESERVED_IDENTIFIER_FIXUP_1272.xxxx), _RESERVED_IDENTIFIER_FIXUP_3276, _RESERVED_IDENTIFIER_FIXUP_1272.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1388 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3284 = _RESERVED_IDENTIFIER_FIXUP_3264;
    _RESERVED_IDENTIFIER_FIXUP_3284.x = _RESERVED_IDENTIFIER_FIXUP_1388;
    float _RESERVED_IDENTIFIER_FIXUP_1394 = clamp((_RESERVED_IDENTIFIER_FIXUP_1388 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3284.x = _RESERVED_IDENTIFIER_FIXUP_1394;
    float _RESERVED_IDENTIFIER_FIXUP_1400 = ((-_RESERVED_IDENTIFIER_FIXUP_1394) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3284.x = _RESERVED_IDENTIFIER_FIXUP_1400;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4126;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4123;
    if (_RESERVED_IDENTIFIER_FIXUP_1400 != (-_RESERVED_IDENTIFIER_FIXUP_1400))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1412 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3523;
        _RESERVED_IDENTIFIER_FIXUP_3523.x = _RESERVED_IDENTIFIER_FIXUP_1412.x;
        _RESERVED_IDENTIFIER_FIXUP_3523.y = _RESERVED_IDENTIFIER_FIXUP_1412.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1422 = _RESERVED_IDENTIFIER_FIXUP_3523.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3527;
        _RESERVED_IDENTIFIER_FIXUP_3527.x = _RESERVED_IDENTIFIER_FIXUP_1422.x;
        _RESERVED_IDENTIFIER_FIXUP_3527.y = _RESERVED_IDENTIFIER_FIXUP_1422.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_3523.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3531;
        _RESERVED_IDENTIFIER_FIXUP_3531.x = _RESERVED_IDENTIFIER_FIXUP_1432.x;
        _RESERVED_IDENTIFIER_FIXUP_3531.y = _RESERVED_IDENTIFIER_FIXUP_1432.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1442 = _RESERVED_IDENTIFIER_FIXUP_3523.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3535;
        _RESERVED_IDENTIFIER_FIXUP_3535.x = _RESERVED_IDENTIFIER_FIXUP_1442.x;
        _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_1442.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1452 = _RESERVED_IDENTIFIER_FIXUP_3523.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3539;
        _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_1452.x;
        _RESERVED_IDENTIFIER_FIXUP_3539.y = _RESERVED_IDENTIFIER_FIXUP_1452.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1462 = _RESERVED_IDENTIFIER_FIXUP_3523.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3543;
        _RESERVED_IDENTIFIER_FIXUP_3543.x = _RESERVED_IDENTIFIER_FIXUP_1462.x;
        _RESERVED_IDENTIFIER_FIXUP_3543.y = _RESERVED_IDENTIFIER_FIXUP_1462.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1472 = _RESERVED_IDENTIFIER_FIXUP_3523.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3547;
        _RESERVED_IDENTIFIER_FIXUP_3547.x = _RESERVED_IDENTIFIER_FIXUP_1472.x;
        _RESERVED_IDENTIFIER_FIXUP_3547.y = _RESERVED_IDENTIFIER_FIXUP_1472.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_3523.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3551;
        _RESERVED_IDENTIFIER_FIXUP_3551.x = _RESERVED_IDENTIFIER_FIXUP_1482.x;
        _RESERVED_IDENTIFIER_FIXUP_3551.y = _RESERVED_IDENTIFIER_FIXUP_1482.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_3523.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3555;
        _RESERVED_IDENTIFIER_FIXUP_3555.x = _RESERVED_IDENTIFIER_FIXUP_1492.x;
        _RESERVED_IDENTIFIER_FIXUP_3555.y = _RESERVED_IDENTIFIER_FIXUP_1492.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1500 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1500.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1500.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1506 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3527.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3531.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3535.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3539.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3539.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1546 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3543.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3547.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3551.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3555.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3555.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1586 = hdLod5(param_7, param_8);
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3527.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1506.y = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3531.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1506.z = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3535.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1506.w = hdLod5(param_13, param_14).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1603 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1506 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3543.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1546.y = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3547.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1546.z = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3551.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1546.w = hdLod5(param_19, param_20).x;
        float _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_1586.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3620 = _RESERVED_IDENTIFIER_FIXUP_1586;
        _RESERVED_IDENTIFIER_FIXUP_3620.x = _RESERVED_IDENTIFIER_FIXUP_1626;
        float _RESERVED_IDENTIFIER_FIXUP_1631 = float(_RESERVED_IDENTIFIER_FIXUP_1626 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3620.x = _RESERVED_IDENTIFIER_FIXUP_1631;
        float _RESERVED_IDENTIFIER_FIXUP_1634 = dot(_RESERVED_IDENTIFIER_FIXUP_1603, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_1634;
        float _RESERVED_IDENTIFIER_FIXUP_1637 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1546 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3620.z = _RESERVED_IDENTIFIER_FIXUP_1637;
        float _RESERVED_IDENTIFIER_FIXUP_1643 = _RESERVED_IDENTIFIER_FIXUP_1634 + _RESERVED_IDENTIFIER_FIXUP_1637;
        _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_1643;
        float _RESERVED_IDENTIFIER_FIXUP_1649 = _RESERVED_IDENTIFIER_FIXUP_1631 + _RESERVED_IDENTIFIER_FIXUP_1643;
        _RESERVED_IDENTIFIER_FIXUP_3620.x = _RESERVED_IDENTIFIER_FIXUP_1649;
        _RESERVED_IDENTIFIER_FIXUP_3620.x = _RESERVED_IDENTIFIER_FIXUP_1649 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4126 = _RESERVED_IDENTIFIER_FIXUP_1603;
        _RESERVED_IDENTIFIER_FIXUP_4123 = _RESERVED_IDENTIFIER_FIXUP_3620;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1662 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_1662;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4127;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4124;
        if (_RESERVED_IDENTIFIER_FIXUP_1662 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1671 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3457 = _RESERVED_IDENTIFIER_FIXUP_3284;
            _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_1671.x;
            _RESERVED_IDENTIFIER_FIXUP_3457.z = _RESERVED_IDENTIFIER_FIXUP_1671.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1681 = _RESERVED_IDENTIFIER_FIXUP_3457.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3461;
            _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_1681.x;
            _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_1681.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1691 = _RESERVED_IDENTIFIER_FIXUP_3457.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3465;
            _RESERVED_IDENTIFIER_FIXUP_3465.x = _RESERVED_IDENTIFIER_FIXUP_1691.x;
            _RESERVED_IDENTIFIER_FIXUP_3465.y = _RESERVED_IDENTIFIER_FIXUP_1691.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1701 = _RESERVED_IDENTIFIER_FIXUP_3457.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3469;
            _RESERVED_IDENTIFIER_FIXUP_3469.x = _RESERVED_IDENTIFIER_FIXUP_1701.x;
            _RESERVED_IDENTIFIER_FIXUP_3469.y = _RESERVED_IDENTIFIER_FIXUP_1701.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_3457.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3473;
            _RESERVED_IDENTIFIER_FIXUP_3473.x = _RESERVED_IDENTIFIER_FIXUP_1711.x;
            _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_1711.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1719 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1719.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1719.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1725 = hdLod6(param_21, param_22);
            _RESERVED_IDENTIFIER_FIXUP_3461.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3465.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3469.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3473.w = 0.0;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3461.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1725.y = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3465.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1725.z = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3469.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1725.w = hdLod6(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1782 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1725 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3473.xy;
            float param_30 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1788 = hdLod6(param_29, param_30).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_1788;
            float _RESERVED_IDENTIFIER_FIXUP_1793 = float(_RESERVED_IDENTIFIER_FIXUP_1788 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_1793;
            float _RESERVED_IDENTIFIER_FIXUP_1796 = dot(_RESERVED_IDENTIFIER_FIXUP_1782, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3457.z = _RESERVED_IDENTIFIER_FIXUP_1796;
            float _RESERVED_IDENTIFIER_FIXUP_1802 = _RESERVED_IDENTIFIER_FIXUP_1793 + _RESERVED_IDENTIFIER_FIXUP_1796;
            _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_1802;
            _RESERVED_IDENTIFIER_FIXUP_3457.x = _RESERVED_IDENTIFIER_FIXUP_1802 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4127 = _RESERVED_IDENTIFIER_FIXUP_1782;
            _RESERVED_IDENTIFIER_FIXUP_4124 = _RESERVED_IDENTIFIER_FIXUP_3457;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1815 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3301 = _RESERVED_IDENTIFIER_FIXUP_3284;
            _RESERVED_IDENTIFIER_FIXUP_3301.y = _RESERVED_IDENTIFIER_FIXUP_1815;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4128;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4125;
            if (_RESERVED_IDENTIFIER_FIXUP_1815 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1824 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3391 = _RESERVED_IDENTIFIER_FIXUP_3301;
                _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_1824.x;
                _RESERVED_IDENTIFIER_FIXUP_3391.z = _RESERVED_IDENTIFIER_FIXUP_1824.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1834 = _RESERVED_IDENTIFIER_FIXUP_3391.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3395;
                _RESERVED_IDENTIFIER_FIXUP_3395.x = _RESERVED_IDENTIFIER_FIXUP_1834.x;
                _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_1834.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1844 = _RESERVED_IDENTIFIER_FIXUP_3391.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3399;
                _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1844.x;
                _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_1844.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1854 = _RESERVED_IDENTIFIER_FIXUP_3391.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3403;
                _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_1854.x;
                _RESERVED_IDENTIFIER_FIXUP_3403.y = _RESERVED_IDENTIFIER_FIXUP_1854.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1864 = _RESERVED_IDENTIFIER_FIXUP_3391.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3407;
                _RESERVED_IDENTIFIER_FIXUP_3407.x = _RESERVED_IDENTIFIER_FIXUP_1864.x;
                _RESERVED_IDENTIFIER_FIXUP_3407.y = _RESERVED_IDENTIFIER_FIXUP_1864.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1872 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1872.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1872.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1878 = hdLod7(param_31, param_32);
                _RESERVED_IDENTIFIER_FIXUP_3395.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3399.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3403.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3407.w = 0.0;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3395.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1878.y = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3399.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1878.z = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3403.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1878.w = hdLod7(param_37, param_38).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1935 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1878 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3407.xy;
                float param_40 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1941 = hdLod7(param_39, param_40).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_1941;
                float _RESERVED_IDENTIFIER_FIXUP_1946 = float(_RESERVED_IDENTIFIER_FIXUP_1941 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_1946;
                float _RESERVED_IDENTIFIER_FIXUP_1949 = dot(_RESERVED_IDENTIFIER_FIXUP_1935, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3391.z = _RESERVED_IDENTIFIER_FIXUP_1949;
                float _RESERVED_IDENTIFIER_FIXUP_1955 = _RESERVED_IDENTIFIER_FIXUP_1946 + _RESERVED_IDENTIFIER_FIXUP_1949;
                _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_1955;
                _RESERVED_IDENTIFIER_FIXUP_3391.x = _RESERVED_IDENTIFIER_FIXUP_1955 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4128 = _RESERVED_IDENTIFIER_FIXUP_1935;
                _RESERVED_IDENTIFIER_FIXUP_4125 = _RESERVED_IDENTIFIER_FIXUP_3391;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_3276;
                _RESERVED_IDENTIFIER_FIXUP_3305.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3305.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1971 = (_RESERVED_IDENTIFIER_FIXUP_3305.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
                _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_1971.x;
                _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_1971.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1981 = _RESERVED_IDENTIFIER_FIXUP_3310.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3314;
                _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_1981.x;
                _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1981.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1991 = _RESERVED_IDENTIFIER_FIXUP_3310.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3318;
                _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_1991.x;
                _RESERVED_IDENTIFIER_FIXUP_3318.y = _RESERVED_IDENTIFIER_FIXUP_1991.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2001 = _RESERVED_IDENTIFIER_FIXUP_3310.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3322;
                _RESERVED_IDENTIFIER_FIXUP_3322.x = _RESERVED_IDENTIFIER_FIXUP_2001.x;
                _RESERVED_IDENTIFIER_FIXUP_3322.y = _RESERVED_IDENTIFIER_FIXUP_2001.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2011 = _RESERVED_IDENTIFIER_FIXUP_3310.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3326;
                _RESERVED_IDENTIFIER_FIXUP_3326.x = _RESERVED_IDENTIFIER_FIXUP_2011.x;
                _RESERVED_IDENTIFIER_FIXUP_3326.y = _RESERVED_IDENTIFIER_FIXUP_2011.y;
                _RESERVED_IDENTIFIER_FIXUP_3310.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3310.xy;
                float param_42 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2025 = hdLod8(param_41, param_42);
                _RESERVED_IDENTIFIER_FIXUP_3314.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3318.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3322.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3326.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3314.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2025.y = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3318.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2025.z = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3322.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2025.w = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3326.xy;
                float param_50 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2088 = hdLod8(param_49, param_50).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3366 = _RESERVED_IDENTIFIER_FIXUP_3301;
                _RESERVED_IDENTIFIER_FIXUP_3366.y = _RESERVED_IDENTIFIER_FIXUP_2088;
                float _RESERVED_IDENTIFIER_FIXUP_2093 = float(_RESERVED_IDENTIFIER_FIXUP_2088 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3366.y = _RESERVED_IDENTIFIER_FIXUP_2093;
                float _RESERVED_IDENTIFIER_FIXUP_2096 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2025 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3366.z = _RESERVED_IDENTIFIER_FIXUP_2096;
                float _RESERVED_IDENTIFIER_FIXUP_2102 = _RESERVED_IDENTIFIER_FIXUP_2093 + _RESERVED_IDENTIFIER_FIXUP_2096;
                _RESERVED_IDENTIFIER_FIXUP_3366.y = _RESERVED_IDENTIFIER_FIXUP_2102;
                float _RESERVED_IDENTIFIER_FIXUP_2110 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3366.z = _RESERVED_IDENTIFIER_FIXUP_2110;
                float _RESERVED_IDENTIFIER_FIXUP_2116 = clamp((_RESERVED_IDENTIFIER_FIXUP_2110 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3366.z = _RESERVED_IDENTIFIER_FIXUP_2116;
                float _RESERVED_IDENTIFIER_FIXUP_2121 = (_RESERVED_IDENTIFIER_FIXUP_2102 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3366.y = _RESERVED_IDENTIFIER_FIXUP_2121;
                _RESERVED_IDENTIFIER_FIXUP_3366.x = (_RESERVED_IDENTIFIER_FIXUP_2116 * _RESERVED_IDENTIFIER_FIXUP_2121) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4128 = _RESERVED_IDENTIFIER_FIXUP_3305;
                _RESERVED_IDENTIFIER_FIXUP_4125 = _RESERVED_IDENTIFIER_FIXUP_3366;
            }
            _RESERVED_IDENTIFIER_FIXUP_4127 = _RESERVED_IDENTIFIER_FIXUP_4128;
            _RESERVED_IDENTIFIER_FIXUP_4124 = _RESERVED_IDENTIFIER_FIXUP_4125;
        }
        _RESERVED_IDENTIFIER_FIXUP_4126 = _RESERVED_IDENTIFIER_FIXUP_4127;
        _RESERVED_IDENTIFIER_FIXUP_4123 = _RESERVED_IDENTIFIER_FIXUP_4124;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3643 = _RESERVED_IDENTIFIER_FIXUP_4123;
    _RESERVED_IDENTIFIER_FIXUP_3643.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3645 = _RESERVED_IDENTIFIER_FIXUP_4126;
    _RESERVED_IDENTIFIER_FIXUP_3645.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3645.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3645.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2160 = _RESERVED_IDENTIFIER_FIXUP_3643.xxx * _RESERVED_IDENTIFIER_FIXUP_3645.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4148 = vec4(_RESERVED_IDENTIFIER_FIXUP_2160.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2160.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2174 = (_RESERVED_IDENTIFIER_FIXUP_1381.xyz * _RESERVED_IDENTIFIER_FIXUP_4148.yyy) + _RESERVED_IDENTIFIER_FIXUP_4148.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3657 = _RESERVED_IDENTIFIER_FIXUP_1381;
    _RESERVED_IDENTIFIER_FIXUP_3657.x = _RESERVED_IDENTIFIER_FIXUP_2174.x;
    _RESERVED_IDENTIFIER_FIXUP_3657.y = _RESERVED_IDENTIFIER_FIXUP_2174.y;
    _RESERVED_IDENTIFIER_FIXUP_3657.z = _RESERVED_IDENTIFIER_FIXUP_2174.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2187 = _RESERVED_IDENTIFIER_FIXUP_3657.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3663 = _RESERVED_IDENTIFIER_FIXUP_3657;
    _RESERVED_IDENTIFIER_FIXUP_3663.x = _RESERVED_IDENTIFIER_FIXUP_2187.x;
    _RESERVED_IDENTIFIER_FIXUP_3663.y = _RESERVED_IDENTIFIER_FIXUP_2187.y;
    _RESERVED_IDENTIFIER_FIXUP_3663.z = _RESERVED_IDENTIFIER_FIXUP_2187.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2246 = OptTex0( texcoord0.xyz);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2250 = hdTex1(param_51);
    vec2 param_52 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2254 = hdTex2(param_52);
    vec2 param_53 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2258 = hdTex3(param_53);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2273 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3683 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3683.x = _RESERVED_IDENTIFIER_FIXUP_2273.x;
    _RESERVED_IDENTIFIER_FIXUP_3683.y = _RESERVED_IDENTIFIER_FIXUP_2273.y;
    _RESERVED_IDENTIFIER_FIXUP_3683.z = _RESERVED_IDENTIFIER_FIXUP_2273.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2281 = _RESERVED_IDENTIFIER_FIXUP_2246.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2284 = _RESERVED_IDENTIFIER_FIXUP_2281 * _RESERVED_IDENTIFIER_FIXUP_3683.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3689 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3689.x = _RESERVED_IDENTIFIER_FIXUP_2284.x;
    _RESERVED_IDENTIFIER_FIXUP_3689.y = _RESERVED_IDENTIFIER_FIXUP_2284.y;
    _RESERVED_IDENTIFIER_FIXUP_3689.z = _RESERVED_IDENTIFIER_FIXUP_2284.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2299 = mix(_RESERVED_IDENTIFIER_FIXUP_3689.xyz, _RESERVED_IDENTIFIER_FIXUP_2281, _RESERVED_IDENTIFIER_FIXUP_1312);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3695 = _RESERVED_IDENTIFIER_FIXUP_2246;
    _RESERVED_IDENTIFIER_FIXUP_3695.x = _RESERVED_IDENTIFIER_FIXUP_2299.x;
    _RESERVED_IDENTIFIER_FIXUP_3695.y = _RESERVED_IDENTIFIER_FIXUP_2299.y;
    _RESERVED_IDENTIFIER_FIXUP_3695.z = _RESERVED_IDENTIFIER_FIXUP_2299.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2307 = _RESERVED_IDENTIFIER_FIXUP_2250.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2310 = _RESERVED_IDENTIFIER_FIXUP_2307 * _RESERVED_IDENTIFIER_FIXUP_3683.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3689.x = _RESERVED_IDENTIFIER_FIXUP_2310.x;
    _RESERVED_IDENTIFIER_FIXUP_3689.y = _RESERVED_IDENTIFIER_FIXUP_2310.y;
    _RESERVED_IDENTIFIER_FIXUP_3689.z = _RESERVED_IDENTIFIER_FIXUP_2310.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2325 = mix(_RESERVED_IDENTIFIER_FIXUP_3689.xyz, _RESERVED_IDENTIFIER_FIXUP_2307, _RESERVED_IDENTIFIER_FIXUP_1338);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3707 = _RESERVED_IDENTIFIER_FIXUP_2250;
    _RESERVED_IDENTIFIER_FIXUP_3707.x = _RESERVED_IDENTIFIER_FIXUP_2325.x;
    _RESERVED_IDENTIFIER_FIXUP_3707.y = _RESERVED_IDENTIFIER_FIXUP_2325.y;
    _RESERVED_IDENTIFIER_FIXUP_3707.z = _RESERVED_IDENTIFIER_FIXUP_2325.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2333 = _RESERVED_IDENTIFIER_FIXUP_2254.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2336 = _RESERVED_IDENTIFIER_FIXUP_2333 * _RESERVED_IDENTIFIER_FIXUP_3683.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4150 = vec4(_RESERVED_IDENTIFIER_FIXUP_2336.xy, _RESERVED_IDENTIFIER_FIXUP_1282, _RESERVED_IDENTIFIER_FIXUP_2336.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2351 = mix(_RESERVED_IDENTIFIER_FIXUP_4150.xyw, _RESERVED_IDENTIFIER_FIXUP_2333, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4150.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3719 = _RESERVED_IDENTIFIER_FIXUP_2254;
    _RESERVED_IDENTIFIER_FIXUP_3719.x = _RESERVED_IDENTIFIER_FIXUP_2351.x;
    _RESERVED_IDENTIFIER_FIXUP_3719.y = _RESERVED_IDENTIFIER_FIXUP_2351.y;
    _RESERVED_IDENTIFIER_FIXUP_3719.z = _RESERVED_IDENTIFIER_FIXUP_2351.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2367 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3695, _RESERVED_IDENTIFIER_FIXUP_3707, _RESERVED_IDENTIFIER_FIXUP_2258.xxxx), _RESERVED_IDENTIFIER_FIXUP_3719, _RESERVED_IDENTIFIER_FIXUP_2258.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3727 = _RESERVED_IDENTIFIER_FIXUP_3707;
    _RESERVED_IDENTIFIER_FIXUP_3727.x = _RESERVED_IDENTIFIER_FIXUP_1388;
    float _RESERVED_IDENTIFIER_FIXUP_2380 = clamp((_RESERVED_IDENTIFIER_FIXUP_1388 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3727.x = _RESERVED_IDENTIFIER_FIXUP_2380;
    float _RESERVED_IDENTIFIER_FIXUP_2386 = ((-_RESERVED_IDENTIFIER_FIXUP_2380) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3727.x = _RESERVED_IDENTIFIER_FIXUP_2386;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4141;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4135;
    if (_RESERVED_IDENTIFIER_FIXUP_2386 != (-_RESERVED_IDENTIFIER_FIXUP_2386))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2398 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3966;
        _RESERVED_IDENTIFIER_FIXUP_3966.x = _RESERVED_IDENTIFIER_FIXUP_2398.x;
        _RESERVED_IDENTIFIER_FIXUP_3966.y = _RESERVED_IDENTIFIER_FIXUP_2398.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2408 = _RESERVED_IDENTIFIER_FIXUP_3966.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3970;
        _RESERVED_IDENTIFIER_FIXUP_3970.x = _RESERVED_IDENTIFIER_FIXUP_2408.x;
        _RESERVED_IDENTIFIER_FIXUP_3970.y = _RESERVED_IDENTIFIER_FIXUP_2408.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2418 = _RESERVED_IDENTIFIER_FIXUP_3966.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3974;
        _RESERVED_IDENTIFIER_FIXUP_3974.x = _RESERVED_IDENTIFIER_FIXUP_2418.x;
        _RESERVED_IDENTIFIER_FIXUP_3974.y = _RESERVED_IDENTIFIER_FIXUP_2418.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2428 = _RESERVED_IDENTIFIER_FIXUP_3966.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3978;
        _RESERVED_IDENTIFIER_FIXUP_3978.x = _RESERVED_IDENTIFIER_FIXUP_2428.x;
        _RESERVED_IDENTIFIER_FIXUP_3978.y = _RESERVED_IDENTIFIER_FIXUP_2428.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2438 = _RESERVED_IDENTIFIER_FIXUP_3966.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3982;
        _RESERVED_IDENTIFIER_FIXUP_3982.x = _RESERVED_IDENTIFIER_FIXUP_2438.x;
        _RESERVED_IDENTIFIER_FIXUP_3982.y = _RESERVED_IDENTIFIER_FIXUP_2438.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2448 = _RESERVED_IDENTIFIER_FIXUP_3966.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3986;
        _RESERVED_IDENTIFIER_FIXUP_3986.x = _RESERVED_IDENTIFIER_FIXUP_2448.x;
        _RESERVED_IDENTIFIER_FIXUP_3986.y = _RESERVED_IDENTIFIER_FIXUP_2448.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2458 = _RESERVED_IDENTIFIER_FIXUP_3966.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3990;
        _RESERVED_IDENTIFIER_FIXUP_3990.x = _RESERVED_IDENTIFIER_FIXUP_2458.x;
        _RESERVED_IDENTIFIER_FIXUP_3990.y = _RESERVED_IDENTIFIER_FIXUP_2458.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2468 = _RESERVED_IDENTIFIER_FIXUP_3966.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3994;
        _RESERVED_IDENTIFIER_FIXUP_3994.x = _RESERVED_IDENTIFIER_FIXUP_2468.x;
        _RESERVED_IDENTIFIER_FIXUP_3994.y = _RESERVED_IDENTIFIER_FIXUP_2468.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2478 = _RESERVED_IDENTIFIER_FIXUP_3966.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3998;
        _RESERVED_IDENTIFIER_FIXUP_3998.x = _RESERVED_IDENTIFIER_FIXUP_2478.x;
        _RESERVED_IDENTIFIER_FIXUP_3998.y = _RESERVED_IDENTIFIER_FIXUP_2478.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2486 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2486.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2486.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2492 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3970.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3974.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3978.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3982.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3982.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2532 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3986.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3990.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3994.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3998.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3998.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2572 = hdLod5(param_58, param_59);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3970.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2492.y = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3974.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2492.z = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3978.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2492.w = hdLod5(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2589 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2492 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3986.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2532.y = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3990.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2532.z = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3994.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2532.w = hdLod5(param_70, param_71).x;
        float _RESERVED_IDENTIFIER_FIXUP_2612 = _RESERVED_IDENTIFIER_FIXUP_2572.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4063 = _RESERVED_IDENTIFIER_FIXUP_2572;
        _RESERVED_IDENTIFIER_FIXUP_4063.x = _RESERVED_IDENTIFIER_FIXUP_2612;
        float _RESERVED_IDENTIFIER_FIXUP_2617 = float(_RESERVED_IDENTIFIER_FIXUP_2612 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_4063.x = _RESERVED_IDENTIFIER_FIXUP_2617;
        float _RESERVED_IDENTIFIER_FIXUP_2620 = dot(_RESERVED_IDENTIFIER_FIXUP_2589, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4063.y = _RESERVED_IDENTIFIER_FIXUP_2620;
        float _RESERVED_IDENTIFIER_FIXUP_2623 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2532 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_4063.z = _RESERVED_IDENTIFIER_FIXUP_2623;
        float _RESERVED_IDENTIFIER_FIXUP_2629 = _RESERVED_IDENTIFIER_FIXUP_2620 + _RESERVED_IDENTIFIER_FIXUP_2623;
        _RESERVED_IDENTIFIER_FIXUP_4063.y = _RESERVED_IDENTIFIER_FIXUP_2629;
        float _RESERVED_IDENTIFIER_FIXUP_2635 = _RESERVED_IDENTIFIER_FIXUP_2617 + _RESERVED_IDENTIFIER_FIXUP_2629;
        _RESERVED_IDENTIFIER_FIXUP_4063.x = _RESERVED_IDENTIFIER_FIXUP_2635;
        _RESERVED_IDENTIFIER_FIXUP_4063.x = _RESERVED_IDENTIFIER_FIXUP_2635 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4141 = _RESERVED_IDENTIFIER_FIXUP_2589;
        _RESERVED_IDENTIFIER_FIXUP_4135 = _RESERVED_IDENTIFIER_FIXUP_4063;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2648 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3727.y = _RESERVED_IDENTIFIER_FIXUP_2648;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4142;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4136;
        if (_RESERVED_IDENTIFIER_FIXUP_2648 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2657 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3900 = _RESERVED_IDENTIFIER_FIXUP_3727;
            _RESERVED_IDENTIFIER_FIXUP_3900.y = _RESERVED_IDENTIFIER_FIXUP_2657.x;
            _RESERVED_IDENTIFIER_FIXUP_3900.z = _RESERVED_IDENTIFIER_FIXUP_2657.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2667 = _RESERVED_IDENTIFIER_FIXUP_3900.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3904;
            _RESERVED_IDENTIFIER_FIXUP_3904.x = _RESERVED_IDENTIFIER_FIXUP_2667.x;
            _RESERVED_IDENTIFIER_FIXUP_3904.y = _RESERVED_IDENTIFIER_FIXUP_2667.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2677 = _RESERVED_IDENTIFIER_FIXUP_3900.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3908;
            _RESERVED_IDENTIFIER_FIXUP_3908.x = _RESERVED_IDENTIFIER_FIXUP_2677.x;
            _RESERVED_IDENTIFIER_FIXUP_3908.y = _RESERVED_IDENTIFIER_FIXUP_2677.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2687 = _RESERVED_IDENTIFIER_FIXUP_3900.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3912;
            _RESERVED_IDENTIFIER_FIXUP_3912.x = _RESERVED_IDENTIFIER_FIXUP_2687.x;
            _RESERVED_IDENTIFIER_FIXUP_3912.y = _RESERVED_IDENTIFIER_FIXUP_2687.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2697 = _RESERVED_IDENTIFIER_FIXUP_3900.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3916;
            _RESERVED_IDENTIFIER_FIXUP_3916.x = _RESERVED_IDENTIFIER_FIXUP_2697.x;
            _RESERVED_IDENTIFIER_FIXUP_3916.y = _RESERVED_IDENTIFIER_FIXUP_2697.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2705 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2705.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2705.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2711 = hdLod6(param_72, param_73);
            _RESERVED_IDENTIFIER_FIXUP_3904.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3908.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3912.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3916.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3904.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2711.y = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3908.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2711.z = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3912.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2711.w = hdLod6(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2768 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2711 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3916.xy;
            float param_81 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2774 = hdLod6(param_80, param_81).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3900.y = _RESERVED_IDENTIFIER_FIXUP_2774;
            float _RESERVED_IDENTIFIER_FIXUP_2779 = float(_RESERVED_IDENTIFIER_FIXUP_2774 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3900.y = _RESERVED_IDENTIFIER_FIXUP_2779;
            float _RESERVED_IDENTIFIER_FIXUP_2782 = dot(_RESERVED_IDENTIFIER_FIXUP_2768, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3900.z = _RESERVED_IDENTIFIER_FIXUP_2782;
            float _RESERVED_IDENTIFIER_FIXUP_2788 = _RESERVED_IDENTIFIER_FIXUP_2779 + _RESERVED_IDENTIFIER_FIXUP_2782;
            _RESERVED_IDENTIFIER_FIXUP_3900.y = _RESERVED_IDENTIFIER_FIXUP_2788;
            _RESERVED_IDENTIFIER_FIXUP_3900.x = _RESERVED_IDENTIFIER_FIXUP_2788 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4142 = _RESERVED_IDENTIFIER_FIXUP_2768;
            _RESERVED_IDENTIFIER_FIXUP_4136 = _RESERVED_IDENTIFIER_FIXUP_3900;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2801 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3744 = _RESERVED_IDENTIFIER_FIXUP_3727;
            _RESERVED_IDENTIFIER_FIXUP_3744.y = _RESERVED_IDENTIFIER_FIXUP_2801;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4143;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4137;
            if (_RESERVED_IDENTIFIER_FIXUP_2801 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2810 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3834 = _RESERVED_IDENTIFIER_FIXUP_3744;
                _RESERVED_IDENTIFIER_FIXUP_3834.y = _RESERVED_IDENTIFIER_FIXUP_2810.x;
                _RESERVED_IDENTIFIER_FIXUP_3834.z = _RESERVED_IDENTIFIER_FIXUP_2810.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2820 = _RESERVED_IDENTIFIER_FIXUP_3834.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3838;
                _RESERVED_IDENTIFIER_FIXUP_3838.x = _RESERVED_IDENTIFIER_FIXUP_2820.x;
                _RESERVED_IDENTIFIER_FIXUP_3838.y = _RESERVED_IDENTIFIER_FIXUP_2820.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2830 = _RESERVED_IDENTIFIER_FIXUP_3834.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3842;
                _RESERVED_IDENTIFIER_FIXUP_3842.x = _RESERVED_IDENTIFIER_FIXUP_2830.x;
                _RESERVED_IDENTIFIER_FIXUP_3842.y = _RESERVED_IDENTIFIER_FIXUP_2830.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2840 = _RESERVED_IDENTIFIER_FIXUP_3834.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3846;
                _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2840.x;
                _RESERVED_IDENTIFIER_FIXUP_3846.y = _RESERVED_IDENTIFIER_FIXUP_2840.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2850 = _RESERVED_IDENTIFIER_FIXUP_3834.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3850;
                _RESERVED_IDENTIFIER_FIXUP_3850.x = _RESERVED_IDENTIFIER_FIXUP_2850.x;
                _RESERVED_IDENTIFIER_FIXUP_3850.y = _RESERVED_IDENTIFIER_FIXUP_2850.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2858 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2858.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2858.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2864 = hdLod7(param_82, param_83);
                _RESERVED_IDENTIFIER_FIXUP_3838.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3842.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3846.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3850.w = 0.0;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3838.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2864.y = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3842.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2864.z = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3846.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2864.w = hdLod7(param_88, param_89).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2921 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2864 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3850.xy;
                float param_91 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2927 = hdLod7(param_90, param_91).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3834.y = _RESERVED_IDENTIFIER_FIXUP_2927;
                float _RESERVED_IDENTIFIER_FIXUP_2932 = float(_RESERVED_IDENTIFIER_FIXUP_2927 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3834.y = _RESERVED_IDENTIFIER_FIXUP_2932;
                float _RESERVED_IDENTIFIER_FIXUP_2935 = dot(_RESERVED_IDENTIFIER_FIXUP_2921, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3834.z = _RESERVED_IDENTIFIER_FIXUP_2935;
                float _RESERVED_IDENTIFIER_FIXUP_2941 = _RESERVED_IDENTIFIER_FIXUP_2932 + _RESERVED_IDENTIFIER_FIXUP_2935;
                _RESERVED_IDENTIFIER_FIXUP_3834.y = _RESERVED_IDENTIFIER_FIXUP_2941;
                _RESERVED_IDENTIFIER_FIXUP_3834.x = _RESERVED_IDENTIFIER_FIXUP_2941 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4143 = _RESERVED_IDENTIFIER_FIXUP_2921;
                _RESERVED_IDENTIFIER_FIXUP_4137 = _RESERVED_IDENTIFIER_FIXUP_3834;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3748 = _RESERVED_IDENTIFIER_FIXUP_3719;
                _RESERVED_IDENTIFIER_FIXUP_3748.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3748.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2957 = (_RESERVED_IDENTIFIER_FIXUP_3748.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3753;
                _RESERVED_IDENTIFIER_FIXUP_3753.x = _RESERVED_IDENTIFIER_FIXUP_2957.x;
                _RESERVED_IDENTIFIER_FIXUP_3753.y = _RESERVED_IDENTIFIER_FIXUP_2957.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2967 = _RESERVED_IDENTIFIER_FIXUP_3753.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3757;
                _RESERVED_IDENTIFIER_FIXUP_3757.x = _RESERVED_IDENTIFIER_FIXUP_2967.x;
                _RESERVED_IDENTIFIER_FIXUP_3757.y = _RESERVED_IDENTIFIER_FIXUP_2967.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2977 = _RESERVED_IDENTIFIER_FIXUP_3753.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3761;
                _RESERVED_IDENTIFIER_FIXUP_3761.x = _RESERVED_IDENTIFIER_FIXUP_2977.x;
                _RESERVED_IDENTIFIER_FIXUP_3761.y = _RESERVED_IDENTIFIER_FIXUP_2977.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2987 = _RESERVED_IDENTIFIER_FIXUP_3753.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3765;
                _RESERVED_IDENTIFIER_FIXUP_3765.x = _RESERVED_IDENTIFIER_FIXUP_2987.x;
                _RESERVED_IDENTIFIER_FIXUP_3765.y = _RESERVED_IDENTIFIER_FIXUP_2987.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2997 = _RESERVED_IDENTIFIER_FIXUP_3753.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3769;
                _RESERVED_IDENTIFIER_FIXUP_3769.x = _RESERVED_IDENTIFIER_FIXUP_2997.x;
                _RESERVED_IDENTIFIER_FIXUP_3769.y = _RESERVED_IDENTIFIER_FIXUP_2997.y;
                _RESERVED_IDENTIFIER_FIXUP_3753.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3753.xy;
                float param_93 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3011 = hdLod8(param_92, param_93);
                _RESERVED_IDENTIFIER_FIXUP_3757.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3761.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3765.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3769.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3757.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3011.y = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3761.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3011.z = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3765.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3011.w = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3769.xy;
                float param_101 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3074 = hdLod8(param_100, param_101).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3809 = _RESERVED_IDENTIFIER_FIXUP_3744;
                _RESERVED_IDENTIFIER_FIXUP_3809.y = _RESERVED_IDENTIFIER_FIXUP_3074;
                float _RESERVED_IDENTIFIER_FIXUP_3079 = float(_RESERVED_IDENTIFIER_FIXUP_3074 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3809.y = _RESERVED_IDENTIFIER_FIXUP_3079;
                float _RESERVED_IDENTIFIER_FIXUP_3082 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_3011 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3809.z = _RESERVED_IDENTIFIER_FIXUP_3082;
                float _RESERVED_IDENTIFIER_FIXUP_3088 = _RESERVED_IDENTIFIER_FIXUP_3079 + _RESERVED_IDENTIFIER_FIXUP_3082;
                _RESERVED_IDENTIFIER_FIXUP_3809.y = _RESERVED_IDENTIFIER_FIXUP_3088;
                float _RESERVED_IDENTIFIER_FIXUP_3096 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3809.z = _RESERVED_IDENTIFIER_FIXUP_3096;
                float _RESERVED_IDENTIFIER_FIXUP_3102 = clamp((_RESERVED_IDENTIFIER_FIXUP_3096 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3809.z = _RESERVED_IDENTIFIER_FIXUP_3102;
                float _RESERVED_IDENTIFIER_FIXUP_3107 = (_RESERVED_IDENTIFIER_FIXUP_3088 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3809.y = _RESERVED_IDENTIFIER_FIXUP_3107;
                _RESERVED_IDENTIFIER_FIXUP_3809.x = (_RESERVED_IDENTIFIER_FIXUP_3102 * _RESERVED_IDENTIFIER_FIXUP_3107) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4143 = _RESERVED_IDENTIFIER_FIXUP_3748;
                _RESERVED_IDENTIFIER_FIXUP_4137 = _RESERVED_IDENTIFIER_FIXUP_3809;
            }
            _RESERVED_IDENTIFIER_FIXUP_4142 = _RESERVED_IDENTIFIER_FIXUP_4143;
            _RESERVED_IDENTIFIER_FIXUP_4136 = _RESERVED_IDENTIFIER_FIXUP_4137;
        }
        _RESERVED_IDENTIFIER_FIXUP_4141 = _RESERVED_IDENTIFIER_FIXUP_4142;
        _RESERVED_IDENTIFIER_FIXUP_4135 = _RESERVED_IDENTIFIER_FIXUP_4136;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3122 = (_RESERVED_IDENTIFIER_FIXUP_4135.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4084 = _RESERVED_IDENTIFIER_FIXUP_4135;
    _RESERVED_IDENTIFIER_FIXUP_4084.y = _RESERVED_IDENTIFIER_FIXUP_3122;
    _RESERVED_IDENTIFIER_FIXUP_4084.y = _RESERVED_IDENTIFIER_FIXUP_3122;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3135 = _RESERVED_IDENTIFIER_FIXUP_2367.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4090 = _RESERVED_IDENTIFIER_FIXUP_4141;
    _RESERVED_IDENTIFIER_FIXUP_4090.x = _RESERVED_IDENTIFIER_FIXUP_3135.x;
    _RESERVED_IDENTIFIER_FIXUP_4090.y = _RESERVED_IDENTIFIER_FIXUP_3135.y;
    _RESERVED_IDENTIFIER_FIXUP_4090.z = _RESERVED_IDENTIFIER_FIXUP_3135.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3146 = _RESERVED_IDENTIFIER_FIXUP_4084.xxx * _RESERVED_IDENTIFIER_FIXUP_4090.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4151 = vec4(_RESERVED_IDENTIFIER_FIXUP_3146.x, _RESERVED_IDENTIFIER_FIXUP_3122, _RESERVED_IDENTIFIER_FIXUP_3146.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3160 = (_RESERVED_IDENTIFIER_FIXUP_2367.xyz * _RESERVED_IDENTIFIER_FIXUP_4151.yyy) + _RESERVED_IDENTIFIER_FIXUP_4151.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4102 = _RESERVED_IDENTIFIER_FIXUP_2367;
    _RESERVED_IDENTIFIER_FIXUP_4102.x = _RESERVED_IDENTIFIER_FIXUP_3160.x;
    _RESERVED_IDENTIFIER_FIXUP_4102.y = _RESERVED_IDENTIFIER_FIXUP_3160.y;
    _RESERVED_IDENTIFIER_FIXUP_4102.z = _RESERVED_IDENTIFIER_FIXUP_3160.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3173 = _RESERVED_IDENTIFIER_FIXUP_4102.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4108 = _RESERVED_IDENTIFIER_FIXUP_4102;
    _RESERVED_IDENTIFIER_FIXUP_4108.x = _RESERVED_IDENTIFIER_FIXUP_3173.x;
    _RESERVED_IDENTIFIER_FIXUP_4108.y = _RESERVED_IDENTIFIER_FIXUP_3173.y;
    _RESERVED_IDENTIFIER_FIXUP_4108.z = _RESERVED_IDENTIFIER_FIXUP_3173.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4108.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1116 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1125;
    if (_RESERVED_IDENTIFIER_FIXUP_1116)
    {
        _RESERVED_IDENTIFIER_FIXUP_1125 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1125 = _RESERVED_IDENTIFIER_FIXUP_1116;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1125)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1162 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3663.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1188 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3226;
    if (_RESERVED_IDENTIFIER_FIXUP_1162 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3226 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1162), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1188);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3226 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1188);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3226;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3122);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    vec3 hdB96 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB96.x;
    r4.y = hdB96.y;
    r4.z = hdB96.z;
    vec3 hdB111 = v0.xyz + v0.xyz;
    r5.x = hdB111.x;
    r5.y = hdB111.y;
    r5.z = hdB111.z;
    vec3 hdB122 = r0.xyz * r5.xyz;
    r6.x = hdB122.x;
    r6.y = hdB122.y;
    r6.z = hdB122.z;
    vec4 hdB131 = r0;
    vec3 hdB140 = mix(r6.xyz, hdB131.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB140.x;
    r0.y = hdB140.y;
    r0.z = hdB140.z;
    vec3 hdB151 = r1.xyz * r5.xyz;
    r6.x = hdB151.x;
    r6.y = hdB151.y;
    r6.z = hdB151.z;
    vec4 hdB160 = r1;
    vec3 hdB166 = mix(r6.xyz, hdB160.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB166.x;
    r1.y = hdB166.y;
    r1.z = hdB166.z;
    vec3 hdB177 = r2.xyz * r5.xyz;
    r4.x = hdB177.x;
    r4.y = hdB177.y;
    r4.w = hdB177.z;
    vec4 hdB187 = r2;
    vec3 hdB193 = mix(r4.xyw, hdB187.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB193.x;
    r2.y = hdB193.y;
    r2.z = hdB193.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB246 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB246.x;
        r1.y = hdB246.y;
        vec2 hdB257 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB257.x;
        r2.y = hdB257.y;
        vec2 hdB268 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB268.x;
        r3.y = hdB268.y;
        vec2 hdB279 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB279.x;
        r4.y = hdB279.y;
        vec2 hdB290 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB290.x;
        r5.y = hdB290.y;
        vec2 hdB301 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB301.x;
        r6.y = hdB301.y;
        vec2 hdB312 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB312.x;
        r7.y = hdB312.y;
        vec2 hdB323 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB323.x;
        r8.y = hdB323.y;
        vec4 hdB328 = r1;
        vec2 hdB334 = hdB328.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB334.x;
        r1.y = hdB334.y;
        r9 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r9.xy;
        float param_4 = r9.w;
        r9 = hdLod5(param_3, param_4);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_9 = r4.xy;
        float param_10 = r4.w;
        r4 = hdLod5(param_9, param_10);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_11 = r5.xy;
        float param_12 = r5.w;
        r5 = hdLod5(param_11, param_12);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod5(param_13, param_14);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_15 = r7.xy;
        float param_16 = r7.w;
        r7 = hdLod5(param_15, param_16);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_17 = r8.xy;
        float param_18 = r8.w;
        r8 = hdLod5(param_17, param_18);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_19 = r1.xy;
        float param_20 = r1.w;
        r1 = hdLod5(param_19, param_20);
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
        r1.x += (-v5.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            vec2 hdB520 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB520.x;
            r1.z = hdB520.y;
            vec2 hdB530 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB530.x;
            r2.y = hdB530.y;
            vec2 hdB540 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB540.x;
            r3.y = hdB540.y;
            vec2 hdB550 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB550.x;
            r4.y = hdB550.y;
            vec2 hdB560 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB560.x;
            r5.y = hdB560.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod6(param_21, param_22);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod6(param_25, param_26);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_27 = r4.xy;
            float param_28 = r4.w;
            r4 = hdLod6(param_27, param_28);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_29 = r5.xy;
            float param_30 = r5.w;
            r5 = hdLod6(param_29, param_30);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v6.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                vec2 hdB676 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB676.x;
                r1.z = hdB676.y;
                vec2 hdB686 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB686.x;
                r2.y = hdB686.y;
                vec2 hdB696 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB696.x;
                r3.y = hdB696.y;
                vec2 hdB706 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB706.x;
                r4.y = hdB706.y;
                vec2 hdB716 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB716.x;
                r5.y = hdB716.y;
                r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r6.xy;
                float param_32 = r6.w;
                r6 = hdLod7(param_31, param_32);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_35 = r3.xy;
                float param_36 = r3.w;
                r3 = hdLod7(param_35, param_36);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_37 = r4.xy;
                float param_38 = r4.w;
                r4 = hdLod7(param_37, param_38);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_39 = r5.xy;
                float param_40 = r5.w;
                r5 = hdLod7(param_39, param_40);
                r6.y = r2.x;
                r6.z = r3.x;
                r6.w = r4.x;
                r2 = r6 + (-v7.zzzz);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r1.y = r5.x + (-v7.z);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r2, vec4(1.0));
                r1.y += r1.z;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v5.w;
                r2.y = v6.w;
                vec2 hdB824 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB824.x;
                r3.y = hdB824.y;
                vec2 hdB834 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB834.x;
                r4.y = hdB834.y;
                vec2 hdB844 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB844.x;
                r5.y = hdB844.y;
                vec2 hdB854 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB854.x;
                r6.y = hdB854.y;
                vec2 hdB864 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB864.x;
                r7.y = hdB864.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_41 = r3.xy;
                float param_42 = r3.w;
                r3 = hdLod8(param_41, param_42);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r4 = hdLod8(param_43, param_44);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_45 = r5.xy;
                float param_46 = r5.w;
                r5 = hdLod8(param_45, param_46);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_47 = r6.xy;
                float param_48 = r6.w;
                r6 = hdLod8(param_47, param_48);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_49 = r7.xy;
                float param_50 = r7.w;
                r7 = hdLod8(param_49, param_50);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v7.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v7.w);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r3, vec4(1.0));
                r1.y += r1.z;
                r1.z = max(abs(r2.x), abs(r2.y));
                r1.z = clamp((r1.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.z * r1.y) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB998 = r0.www * v1.xyz;
    r2.x = hdB998.x;
    r2.y = hdB998.y;
    r2.z = hdB998.z;
    vec4 hdB1005 = r1;
    vec3 hdB1009 = hdB1005.xxx * r2.xyz;
    r1.x = hdB1009.x;
    r1.z = hdB1009.y;
    r1.w = hdB1009.z;
    vec4 hdB1016 = r0;
    vec3 hdB1023 = (hdB1016.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB1023.x;
    r0.y = hdB1023.y;
    r0.z = hdB1023.z;
    vec4 hdB1030 = r0;
    vec3 hdB1037 = hdB1030.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1037.x;
    r0.y = hdB1037.y;
    r0.z = hdB1037.z;
    vec3 hdB1052 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1052.x;
    oC0.y = hdB1052.y;
    oC0.z = hdB1052.z;
    oC0.w = 1.0;
    bool hdB1064 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1072;
    if (hdB1064)
    {
        hdB1072 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1072 = hdB1064;
    }
    if (hdB1072)
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
    bool _3647 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3657;
    if (_3647)
    {
        _3657 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3657 = _3647;
    }
    if (_3657)
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
        bool _3682 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3697;
        if (!_3682)
        {
            _3697 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3697 = _3682;
        }
        if (_3697)
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
