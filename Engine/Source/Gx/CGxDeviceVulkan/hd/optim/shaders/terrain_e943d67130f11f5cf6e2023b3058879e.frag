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
float _RESERVED_IDENTIFIER_FIXUP_3974;
vec4 _RESERVED_IDENTIFIER_FIXUP_3975;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1217 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1221 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1225 = hdTex2(param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1229 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1229.x;
    _RESERVED_IDENTIFIER_FIXUP_1225.y = _RESERVED_IDENTIFIER_FIXUP_1231;
    float _RESERVED_IDENTIFIER_FIXUP_1233 = _RESERVED_IDENTIFIER_FIXUP_1229.y;
    _RESERVED_IDENTIFIER_FIXUP_1225.z = _RESERVED_IDENTIFIER_FIXUP_1233;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3974).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_1235 + _RESERVED_IDENTIFIER_FIXUP_1235;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3119;
    _RESERVED_IDENTIFIER_FIXUP_3119.x = _RESERVED_IDENTIFIER_FIXUP_1238.x;
    _RESERVED_IDENTIFIER_FIXUP_3119.y = _RESERVED_IDENTIFIER_FIXUP_1238.y;
    _RESERVED_IDENTIFIER_FIXUP_3119.z = _RESERVED_IDENTIFIER_FIXUP_1238.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1246 = _RESERVED_IDENTIFIER_FIXUP_1217.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1249 = _RESERVED_IDENTIFIER_FIXUP_1246 * _RESERVED_IDENTIFIER_FIXUP_3119.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3125 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3125.x = _RESERVED_IDENTIFIER_FIXUP_1249.x;
    _RESERVED_IDENTIFIER_FIXUP_3125.y = _RESERVED_IDENTIFIER_FIXUP_1249.y;
    _RESERVED_IDENTIFIER_FIXUP_3125.z = _RESERVED_IDENTIFIER_FIXUP_1249.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1264 = mix(_RESERVED_IDENTIFIER_FIXUP_3125.xyz, _RESERVED_IDENTIFIER_FIXUP_1246, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1225.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3131 = _RESERVED_IDENTIFIER_FIXUP_1217;
    _RESERVED_IDENTIFIER_FIXUP_3131.x = _RESERVED_IDENTIFIER_FIXUP_1264.x;
    _RESERVED_IDENTIFIER_FIXUP_3131.y = _RESERVED_IDENTIFIER_FIXUP_1264.y;
    _RESERVED_IDENTIFIER_FIXUP_3131.z = _RESERVED_IDENTIFIER_FIXUP_1264.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_1221.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_1272 * _RESERVED_IDENTIFIER_FIXUP_3119.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3137;
    _RESERVED_IDENTIFIER_FIXUP_3137.x = _RESERVED_IDENTIFIER_FIXUP_1275.x;
    _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1275.y;
    _RESERVED_IDENTIFIER_FIXUP_3137.z = _RESERVED_IDENTIFIER_FIXUP_1275.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1290 = mix(_RESERVED_IDENTIFIER_FIXUP_3137.xyz, _RESERVED_IDENTIFIER_FIXUP_1272, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1225.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3143 = _RESERVED_IDENTIFIER_FIXUP_1221;
    _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1290.x;
    _RESERVED_IDENTIFIER_FIXUP_3143.y = _RESERVED_IDENTIFIER_FIXUP_1290.y;
    _RESERVED_IDENTIFIER_FIXUP_3143.z = _RESERVED_IDENTIFIER_FIXUP_1290.z;
    float _RESERVED_IDENTIFIER_FIXUP_1308 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3151 = _RESERVED_IDENTIFIER_FIXUP_3131;
    _RESERVED_IDENTIFIER_FIXUP_3151.x = _RESERVED_IDENTIFIER_FIXUP_1308;
    float _RESERVED_IDENTIFIER_FIXUP_1314 = clamp((_RESERVED_IDENTIFIER_FIXUP_1308 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3151.x = _RESERVED_IDENTIFIER_FIXUP_1314;
    float _RESERVED_IDENTIFIER_FIXUP_1320 = ((-_RESERVED_IDENTIFIER_FIXUP_1314) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3151.x = _RESERVED_IDENTIFIER_FIXUP_1320;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3979;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3976;
    if (_RESERVED_IDENTIFIER_FIXUP_1320 != (-_RESERVED_IDENTIFIER_FIXUP_1320))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1332 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3390;
        _RESERVED_IDENTIFIER_FIXUP_3390.x = _RESERVED_IDENTIFIER_FIXUP_1332.x;
        _RESERVED_IDENTIFIER_FIXUP_3390.y = _RESERVED_IDENTIFIER_FIXUP_1332.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_3390.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3394;
        _RESERVED_IDENTIFIER_FIXUP_3394.x = _RESERVED_IDENTIFIER_FIXUP_1342.x;
        _RESERVED_IDENTIFIER_FIXUP_3394.y = _RESERVED_IDENTIFIER_FIXUP_1342.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1352 = _RESERVED_IDENTIFIER_FIXUP_3390.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3398;
        _RESERVED_IDENTIFIER_FIXUP_3398.x = _RESERVED_IDENTIFIER_FIXUP_1352.x;
        _RESERVED_IDENTIFIER_FIXUP_3398.y = _RESERVED_IDENTIFIER_FIXUP_1352.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_3390.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3402;
        _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_1362.x;
        _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_1362.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1372 = _RESERVED_IDENTIFIER_FIXUP_3390.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3406;
        _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_1372.x;
        _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_1372.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1382 = _RESERVED_IDENTIFIER_FIXUP_3390.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3410;
        _RESERVED_IDENTIFIER_FIXUP_3410.x = _RESERVED_IDENTIFIER_FIXUP_1382.x;
        _RESERVED_IDENTIFIER_FIXUP_3410.y = _RESERVED_IDENTIFIER_FIXUP_1382.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1392 = _RESERVED_IDENTIFIER_FIXUP_3390.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3414;
        _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_1392.x;
        _RESERVED_IDENTIFIER_FIXUP_3414.y = _RESERVED_IDENTIFIER_FIXUP_1392.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1402 = _RESERVED_IDENTIFIER_FIXUP_3390.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3418;
        _RESERVED_IDENTIFIER_FIXUP_3418.x = _RESERVED_IDENTIFIER_FIXUP_1402.x;
        _RESERVED_IDENTIFIER_FIXUP_3418.y = _RESERVED_IDENTIFIER_FIXUP_1402.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1412 = _RESERVED_IDENTIFIER_FIXUP_3390.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3422;
        _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_1412.x;
        _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_1412.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1420.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1420.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1426 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_3394.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3398.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3402.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3406.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3406.xy;
        float param_5 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1466 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3410.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3414.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3418.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3422.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3422.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1506 = hdLod5(param_6, param_7);
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3394.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1426.y = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3398.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1426.z = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3402.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1426.w = hdLod5(param_12, param_13).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1523 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1426 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3410.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1466.y = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3414.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1466.z = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3418.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1466.w = hdLod5(param_18, param_19).x;
        float _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1506.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3487 = _RESERVED_IDENTIFIER_FIXUP_1506;
        _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_1546;
        float _RESERVED_IDENTIFIER_FIXUP_1551 = float(_RESERVED_IDENTIFIER_FIXUP_1546 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_1551;
        float _RESERVED_IDENTIFIER_FIXUP_1554 = dot(_RESERVED_IDENTIFIER_FIXUP_1523, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_1554;
        float _RESERVED_IDENTIFIER_FIXUP_1557 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1466 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3487.z = _RESERVED_IDENTIFIER_FIXUP_1557;
        float _RESERVED_IDENTIFIER_FIXUP_1563 = _RESERVED_IDENTIFIER_FIXUP_1554 + _RESERVED_IDENTIFIER_FIXUP_1557;
        _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_1563;
        float _RESERVED_IDENTIFIER_FIXUP_1569 = _RESERVED_IDENTIFIER_FIXUP_1551 + _RESERVED_IDENTIFIER_FIXUP_1563;
        _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_1569;
        _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_1569 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3979 = _RESERVED_IDENTIFIER_FIXUP_1523;
        _RESERVED_IDENTIFIER_FIXUP_3976 = _RESERVED_IDENTIFIER_FIXUP_3487;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1582 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3151.y = _RESERVED_IDENTIFIER_FIXUP_1582;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3980;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3977;
        if (_RESERVED_IDENTIFIER_FIXUP_1582 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1591 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_3151;
            _RESERVED_IDENTIFIER_FIXUP_3324.y = _RESERVED_IDENTIFIER_FIXUP_1591.x;
            _RESERVED_IDENTIFIER_FIXUP_3324.z = _RESERVED_IDENTIFIER_FIXUP_1591.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_3324.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3328;
            _RESERVED_IDENTIFIER_FIXUP_3328.x = _RESERVED_IDENTIFIER_FIXUP_1601.x;
            _RESERVED_IDENTIFIER_FIXUP_3328.y = _RESERVED_IDENTIFIER_FIXUP_1601.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1611 = _RESERVED_IDENTIFIER_FIXUP_3324.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3332;
            _RESERVED_IDENTIFIER_FIXUP_3332.x = _RESERVED_IDENTIFIER_FIXUP_1611.x;
            _RESERVED_IDENTIFIER_FIXUP_3332.y = _RESERVED_IDENTIFIER_FIXUP_1611.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1621 = _RESERVED_IDENTIFIER_FIXUP_3324.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3336;
            _RESERVED_IDENTIFIER_FIXUP_3336.x = _RESERVED_IDENTIFIER_FIXUP_1621.x;
            _RESERVED_IDENTIFIER_FIXUP_3336.y = _RESERVED_IDENTIFIER_FIXUP_1621.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1631 = _RESERVED_IDENTIFIER_FIXUP_3324.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3340;
            _RESERVED_IDENTIFIER_FIXUP_3340.x = _RESERVED_IDENTIFIER_FIXUP_1631.x;
            _RESERVED_IDENTIFIER_FIXUP_3340.y = _RESERVED_IDENTIFIER_FIXUP_1631.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1639 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1639.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1639.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1645 = hdLod6(param_20, param_21);
            _RESERVED_IDENTIFIER_FIXUP_3328.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3332.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3336.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3340.w = 0.0;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3328.xy;
            float param_23 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1645.y = hdLod6(param_22, param_23).x;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3332.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1645.z = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3336.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1645.w = hdLod6(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1702 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1645 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3340.xy;
            float param_29 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1708 = hdLod6(param_28, param_29).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3324.y = _RESERVED_IDENTIFIER_FIXUP_1708;
            float _RESERVED_IDENTIFIER_FIXUP_1713 = float(_RESERVED_IDENTIFIER_FIXUP_1708 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3324.y = _RESERVED_IDENTIFIER_FIXUP_1713;
            float _RESERVED_IDENTIFIER_FIXUP_1716 = dot(_RESERVED_IDENTIFIER_FIXUP_1702, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3324.z = _RESERVED_IDENTIFIER_FIXUP_1716;
            float _RESERVED_IDENTIFIER_FIXUP_1722 = _RESERVED_IDENTIFIER_FIXUP_1713 + _RESERVED_IDENTIFIER_FIXUP_1716;
            _RESERVED_IDENTIFIER_FIXUP_3324.y = _RESERVED_IDENTIFIER_FIXUP_1722;
            _RESERVED_IDENTIFIER_FIXUP_3324.x = _RESERVED_IDENTIFIER_FIXUP_1722 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3980 = _RESERVED_IDENTIFIER_FIXUP_1702;
            _RESERVED_IDENTIFIER_FIXUP_3977 = _RESERVED_IDENTIFIER_FIXUP_3324;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1735 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3168 = _RESERVED_IDENTIFIER_FIXUP_3151;
            _RESERVED_IDENTIFIER_FIXUP_3168.y = _RESERVED_IDENTIFIER_FIXUP_1735;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3981;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3978;
            if (_RESERVED_IDENTIFIER_FIXUP_1735 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1744 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3258 = _RESERVED_IDENTIFIER_FIXUP_3168;
                _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_1744.x;
                _RESERVED_IDENTIFIER_FIXUP_3258.z = _RESERVED_IDENTIFIER_FIXUP_1744.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1754 = _RESERVED_IDENTIFIER_FIXUP_3258.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3262;
                _RESERVED_IDENTIFIER_FIXUP_3262.x = _RESERVED_IDENTIFIER_FIXUP_1754.x;
                _RESERVED_IDENTIFIER_FIXUP_3262.y = _RESERVED_IDENTIFIER_FIXUP_1754.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1764 = _RESERVED_IDENTIFIER_FIXUP_3258.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3266;
                _RESERVED_IDENTIFIER_FIXUP_3266.x = _RESERVED_IDENTIFIER_FIXUP_1764.x;
                _RESERVED_IDENTIFIER_FIXUP_3266.y = _RESERVED_IDENTIFIER_FIXUP_1764.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1774 = _RESERVED_IDENTIFIER_FIXUP_3258.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3270;
                _RESERVED_IDENTIFIER_FIXUP_3270.x = _RESERVED_IDENTIFIER_FIXUP_1774.x;
                _RESERVED_IDENTIFIER_FIXUP_3270.y = _RESERVED_IDENTIFIER_FIXUP_1774.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1784 = _RESERVED_IDENTIFIER_FIXUP_3258.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3274;
                _RESERVED_IDENTIFIER_FIXUP_3274.x = _RESERVED_IDENTIFIER_FIXUP_1784.x;
                _RESERVED_IDENTIFIER_FIXUP_3274.y = _RESERVED_IDENTIFIER_FIXUP_1784.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1792 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1792.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1792.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1798 = hdLod7(param_30, param_31);
                _RESERVED_IDENTIFIER_FIXUP_3262.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3266.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3270.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3274.w = 0.0;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3262.xy;
                float param_33 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1798.y = hdLod7(param_32, param_33).x;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3266.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1798.z = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3270.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1798.w = hdLod7(param_36, param_37).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1855 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1798 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3274.xy;
                float param_39 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1861 = hdLod7(param_38, param_39).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_1861;
                float _RESERVED_IDENTIFIER_FIXUP_1866 = float(_RESERVED_IDENTIFIER_FIXUP_1861 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_1866;
                float _RESERVED_IDENTIFIER_FIXUP_1869 = dot(_RESERVED_IDENTIFIER_FIXUP_1855, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3258.z = _RESERVED_IDENTIFIER_FIXUP_1869;
                float _RESERVED_IDENTIFIER_FIXUP_1875 = _RESERVED_IDENTIFIER_FIXUP_1866 + _RESERVED_IDENTIFIER_FIXUP_1869;
                _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_1875;
                _RESERVED_IDENTIFIER_FIXUP_3258.x = _RESERVED_IDENTIFIER_FIXUP_1875 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3981 = _RESERVED_IDENTIFIER_FIXUP_1855;
                _RESERVED_IDENTIFIER_FIXUP_3978 = _RESERVED_IDENTIFIER_FIXUP_3258;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3172 = _RESERVED_IDENTIFIER_FIXUP_3143;
                _RESERVED_IDENTIFIER_FIXUP_3172.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3172.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1891 = (_RESERVED_IDENTIFIER_FIXUP_3172.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3177;
                _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1891.x;
                _RESERVED_IDENTIFIER_FIXUP_3177.y = _RESERVED_IDENTIFIER_FIXUP_1891.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1901 = _RESERVED_IDENTIFIER_FIXUP_3177.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3181;
                _RESERVED_IDENTIFIER_FIXUP_3181.x = _RESERVED_IDENTIFIER_FIXUP_1901.x;
                _RESERVED_IDENTIFIER_FIXUP_3181.y = _RESERVED_IDENTIFIER_FIXUP_1901.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1911 = _RESERVED_IDENTIFIER_FIXUP_3177.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3185;
                _RESERVED_IDENTIFIER_FIXUP_3185.x = _RESERVED_IDENTIFIER_FIXUP_1911.x;
                _RESERVED_IDENTIFIER_FIXUP_3185.y = _RESERVED_IDENTIFIER_FIXUP_1911.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1921 = _RESERVED_IDENTIFIER_FIXUP_3177.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3189;
                _RESERVED_IDENTIFIER_FIXUP_3189.x = _RESERVED_IDENTIFIER_FIXUP_1921.x;
                _RESERVED_IDENTIFIER_FIXUP_3189.y = _RESERVED_IDENTIFIER_FIXUP_1921.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1931 = _RESERVED_IDENTIFIER_FIXUP_3177.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3193;
                _RESERVED_IDENTIFIER_FIXUP_3193.x = _RESERVED_IDENTIFIER_FIXUP_1931.x;
                _RESERVED_IDENTIFIER_FIXUP_3193.y = _RESERVED_IDENTIFIER_FIXUP_1931.y;
                _RESERVED_IDENTIFIER_FIXUP_3177.w = 0.0;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3177.xy;
                float param_41 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1945 = hdLod8(param_40, param_41);
                _RESERVED_IDENTIFIER_FIXUP_3181.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3185.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3189.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3193.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3181.xy;
                float param_43 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1945.y = hdLod8(param_42, param_43).x;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3185.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1945.z = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3189.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1945.w = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3193.xy;
                float param_49 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2008 = hdLod8(param_48, param_49).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3233 = _RESERVED_IDENTIFIER_FIXUP_3168;
                _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_2008;
                float _RESERVED_IDENTIFIER_FIXUP_2013 = float(_RESERVED_IDENTIFIER_FIXUP_2008 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_2013;
                float _RESERVED_IDENTIFIER_FIXUP_2016 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1945 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_2016;
                float _RESERVED_IDENTIFIER_FIXUP_2022 = _RESERVED_IDENTIFIER_FIXUP_2013 + _RESERVED_IDENTIFIER_FIXUP_2016;
                _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_2022;
                float _RESERVED_IDENTIFIER_FIXUP_2030 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_2030;
                float _RESERVED_IDENTIFIER_FIXUP_2036 = clamp((_RESERVED_IDENTIFIER_FIXUP_2030 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_2036;
                float _RESERVED_IDENTIFIER_FIXUP_2041 = (_RESERVED_IDENTIFIER_FIXUP_2022 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_2041;
                _RESERVED_IDENTIFIER_FIXUP_3233.x = (_RESERVED_IDENTIFIER_FIXUP_2036 * _RESERVED_IDENTIFIER_FIXUP_2041) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3981 = _RESERVED_IDENTIFIER_FIXUP_3172;
                _RESERVED_IDENTIFIER_FIXUP_3978 = _RESERVED_IDENTIFIER_FIXUP_3233;
            }
            _RESERVED_IDENTIFIER_FIXUP_3980 = _RESERVED_IDENTIFIER_FIXUP_3981;
            _RESERVED_IDENTIFIER_FIXUP_3977 = _RESERVED_IDENTIFIER_FIXUP_3978;
        }
        _RESERVED_IDENTIFIER_FIXUP_3979 = _RESERVED_IDENTIFIER_FIXUP_3980;
        _RESERVED_IDENTIFIER_FIXUP_3976 = _RESERVED_IDENTIFIER_FIXUP_3977;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3510 = _RESERVED_IDENTIFIER_FIXUP_3976;
    _RESERVED_IDENTIFIER_FIXUP_3510.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3512 = _RESERVED_IDENTIFIER_FIXUP_3979;
    _RESERVED_IDENTIFIER_FIXUP_3512.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3512.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3512.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2080 = _RESERVED_IDENTIFIER_FIXUP_3510.xxx * _RESERVED_IDENTIFIER_FIXUP_3512.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3994 = vec4(_RESERVED_IDENTIFIER_FIXUP_2080.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2080.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2094 = (mix(_RESERVED_IDENTIFIER_FIXUP_3131, _RESERVED_IDENTIFIER_FIXUP_3143, _RESERVED_IDENTIFIER_FIXUP_1225.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_3994.yyy) + _RESERVED_IDENTIFIER_FIXUP_3994.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3524 = _RESERVED_IDENTIFIER_FIXUP_3994;
    _RESERVED_IDENTIFIER_FIXUP_3524.x = _RESERVED_IDENTIFIER_FIXUP_2094.x;
    _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2094.y;
    _RESERVED_IDENTIFIER_FIXUP_3524.z = _RESERVED_IDENTIFIER_FIXUP_2094.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2107 = _RESERVED_IDENTIFIER_FIXUP_3524.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3530 = _RESERVED_IDENTIFIER_FIXUP_3524;
    _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_2107.x;
    _RESERVED_IDENTIFIER_FIXUP_3530.y = _RESERVED_IDENTIFIER_FIXUP_2107.y;
    _RESERVED_IDENTIFIER_FIXUP_3530.z = _RESERVED_IDENTIFIER_FIXUP_2107.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2164 = OptTex0( texcoord0.xyz);
    vec2 param_50 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2168 = hdTex1(param_50);
    vec2 param_51 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2172 = hdTex2(param_51);
    _RESERVED_IDENTIFIER_FIXUP_2172.y = _RESERVED_IDENTIFIER_FIXUP_1231;
    _RESERVED_IDENTIFIER_FIXUP_2172.z = _RESERVED_IDENTIFIER_FIXUP_1233;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2185 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3548;
    _RESERVED_IDENTIFIER_FIXUP_3548.x = _RESERVED_IDENTIFIER_FIXUP_2185.x;
    _RESERVED_IDENTIFIER_FIXUP_3548.y = _RESERVED_IDENTIFIER_FIXUP_2185.y;
    _RESERVED_IDENTIFIER_FIXUP_3548.z = _RESERVED_IDENTIFIER_FIXUP_2185.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2193 = _RESERVED_IDENTIFIER_FIXUP_2164.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2196 = _RESERVED_IDENTIFIER_FIXUP_2193 * _RESERVED_IDENTIFIER_FIXUP_3548.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3554 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3554.x = _RESERVED_IDENTIFIER_FIXUP_2196.x;
    _RESERVED_IDENTIFIER_FIXUP_3554.y = _RESERVED_IDENTIFIER_FIXUP_2196.y;
    _RESERVED_IDENTIFIER_FIXUP_3554.z = _RESERVED_IDENTIFIER_FIXUP_2196.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2211 = mix(_RESERVED_IDENTIFIER_FIXUP_3554.xyz, _RESERVED_IDENTIFIER_FIXUP_2193, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2172.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3560 = _RESERVED_IDENTIFIER_FIXUP_2164;
    _RESERVED_IDENTIFIER_FIXUP_3560.x = _RESERVED_IDENTIFIER_FIXUP_2211.x;
    _RESERVED_IDENTIFIER_FIXUP_3560.y = _RESERVED_IDENTIFIER_FIXUP_2211.y;
    _RESERVED_IDENTIFIER_FIXUP_3560.z = _RESERVED_IDENTIFIER_FIXUP_2211.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2219 = _RESERVED_IDENTIFIER_FIXUP_2168.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2222 = _RESERVED_IDENTIFIER_FIXUP_2219 * _RESERVED_IDENTIFIER_FIXUP_3548.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3566;
    _RESERVED_IDENTIFIER_FIXUP_3566.x = _RESERVED_IDENTIFIER_FIXUP_2222.x;
    _RESERVED_IDENTIFIER_FIXUP_3566.y = _RESERVED_IDENTIFIER_FIXUP_2222.y;
    _RESERVED_IDENTIFIER_FIXUP_3566.z = _RESERVED_IDENTIFIER_FIXUP_2222.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2237 = mix(_RESERVED_IDENTIFIER_FIXUP_3566.xyz, _RESERVED_IDENTIFIER_FIXUP_2219, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2172.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3572 = _RESERVED_IDENTIFIER_FIXUP_2168;
    _RESERVED_IDENTIFIER_FIXUP_3572.x = _RESERVED_IDENTIFIER_FIXUP_2237.x;
    _RESERVED_IDENTIFIER_FIXUP_3572.y = _RESERVED_IDENTIFIER_FIXUP_2237.y;
    _RESERVED_IDENTIFIER_FIXUP_3572.z = _RESERVED_IDENTIFIER_FIXUP_2237.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2248 = mix(_RESERVED_IDENTIFIER_FIXUP_3560, _RESERVED_IDENTIFIER_FIXUP_3572, _RESERVED_IDENTIFIER_FIXUP_2172.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3580 = _RESERVED_IDENTIFIER_FIXUP_3560;
    _RESERVED_IDENTIFIER_FIXUP_3580.x = _RESERVED_IDENTIFIER_FIXUP_1308;
    float _RESERVED_IDENTIFIER_FIXUP_2261 = clamp((_RESERVED_IDENTIFIER_FIXUP_1308 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3580.x = _RESERVED_IDENTIFIER_FIXUP_2261;
    float _RESERVED_IDENTIFIER_FIXUP_2267 = ((-_RESERVED_IDENTIFIER_FIXUP_2261) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3580.x = _RESERVED_IDENTIFIER_FIXUP_2267;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3988;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3985;
    if (_RESERVED_IDENTIFIER_FIXUP_2267 != (-_RESERVED_IDENTIFIER_FIXUP_2267))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2279 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3819;
        _RESERVED_IDENTIFIER_FIXUP_3819.x = _RESERVED_IDENTIFIER_FIXUP_2279.x;
        _RESERVED_IDENTIFIER_FIXUP_3819.y = _RESERVED_IDENTIFIER_FIXUP_2279.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2289 = _RESERVED_IDENTIFIER_FIXUP_3819.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3823;
        _RESERVED_IDENTIFIER_FIXUP_3823.x = _RESERVED_IDENTIFIER_FIXUP_2289.x;
        _RESERVED_IDENTIFIER_FIXUP_3823.y = _RESERVED_IDENTIFIER_FIXUP_2289.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2299 = _RESERVED_IDENTIFIER_FIXUP_3819.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3827;
        _RESERVED_IDENTIFIER_FIXUP_3827.x = _RESERVED_IDENTIFIER_FIXUP_2299.x;
        _RESERVED_IDENTIFIER_FIXUP_3827.y = _RESERVED_IDENTIFIER_FIXUP_2299.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2309 = _RESERVED_IDENTIFIER_FIXUP_3819.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3831;
        _RESERVED_IDENTIFIER_FIXUP_3831.x = _RESERVED_IDENTIFIER_FIXUP_2309.x;
        _RESERVED_IDENTIFIER_FIXUP_3831.y = _RESERVED_IDENTIFIER_FIXUP_2309.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2319 = _RESERVED_IDENTIFIER_FIXUP_3819.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3835;
        _RESERVED_IDENTIFIER_FIXUP_3835.x = _RESERVED_IDENTIFIER_FIXUP_2319.x;
        _RESERVED_IDENTIFIER_FIXUP_3835.y = _RESERVED_IDENTIFIER_FIXUP_2319.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2329 = _RESERVED_IDENTIFIER_FIXUP_3819.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3839;
        _RESERVED_IDENTIFIER_FIXUP_3839.x = _RESERVED_IDENTIFIER_FIXUP_2329.x;
        _RESERVED_IDENTIFIER_FIXUP_3839.y = _RESERVED_IDENTIFIER_FIXUP_2329.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2339 = _RESERVED_IDENTIFIER_FIXUP_3819.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3843;
        _RESERVED_IDENTIFIER_FIXUP_3843.x = _RESERVED_IDENTIFIER_FIXUP_2339.x;
        _RESERVED_IDENTIFIER_FIXUP_3843.y = _RESERVED_IDENTIFIER_FIXUP_2339.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2349 = _RESERVED_IDENTIFIER_FIXUP_3819.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3847;
        _RESERVED_IDENTIFIER_FIXUP_3847.x = _RESERVED_IDENTIFIER_FIXUP_2349.x;
        _RESERVED_IDENTIFIER_FIXUP_3847.y = _RESERVED_IDENTIFIER_FIXUP_2349.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2359 = _RESERVED_IDENTIFIER_FIXUP_3819.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3851;
        _RESERVED_IDENTIFIER_FIXUP_3851.x = _RESERVED_IDENTIFIER_FIXUP_2359.x;
        _RESERVED_IDENTIFIER_FIXUP_3851.y = _RESERVED_IDENTIFIER_FIXUP_2359.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2367 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2367.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2367.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2373 = hdLod5(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3823.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3827.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3831.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3835.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3835.xy;
        float param_55 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2413 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3839.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3843.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3847.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3851.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3851.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2453 = hdLod5(param_56, param_57);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3823.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2373.y = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3827.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2373.z = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3831.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2373.w = hdLod5(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2470 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2373 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3839.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2413.y = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3843.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2413.z = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3847.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2413.w = hdLod5(param_68, param_69).x;
        float _RESERVED_IDENTIFIER_FIXUP_2493 = _RESERVED_IDENTIFIER_FIXUP_2453.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3916 = _RESERVED_IDENTIFIER_FIXUP_2453;
        _RESERVED_IDENTIFIER_FIXUP_3916.x = _RESERVED_IDENTIFIER_FIXUP_2493;
        float _RESERVED_IDENTIFIER_FIXUP_2498 = float(_RESERVED_IDENTIFIER_FIXUP_2493 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3916.x = _RESERVED_IDENTIFIER_FIXUP_2498;
        float _RESERVED_IDENTIFIER_FIXUP_2501 = dot(_RESERVED_IDENTIFIER_FIXUP_2470, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3916.y = _RESERVED_IDENTIFIER_FIXUP_2501;
        float _RESERVED_IDENTIFIER_FIXUP_2504 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2413 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3916.z = _RESERVED_IDENTIFIER_FIXUP_2504;
        float _RESERVED_IDENTIFIER_FIXUP_2510 = _RESERVED_IDENTIFIER_FIXUP_2501 + _RESERVED_IDENTIFIER_FIXUP_2504;
        _RESERVED_IDENTIFIER_FIXUP_3916.y = _RESERVED_IDENTIFIER_FIXUP_2510;
        float _RESERVED_IDENTIFIER_FIXUP_2516 = _RESERVED_IDENTIFIER_FIXUP_2498 + _RESERVED_IDENTIFIER_FIXUP_2510;
        _RESERVED_IDENTIFIER_FIXUP_3916.x = _RESERVED_IDENTIFIER_FIXUP_2516;
        _RESERVED_IDENTIFIER_FIXUP_3916.x = _RESERVED_IDENTIFIER_FIXUP_2516 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3988 = _RESERVED_IDENTIFIER_FIXUP_2470;
        _RESERVED_IDENTIFIER_FIXUP_3985 = _RESERVED_IDENTIFIER_FIXUP_3916;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2529 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3580.y = _RESERVED_IDENTIFIER_FIXUP_2529;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3989;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3986;
        if (_RESERVED_IDENTIFIER_FIXUP_2529 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2538 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3753 = _RESERVED_IDENTIFIER_FIXUP_3580;
            _RESERVED_IDENTIFIER_FIXUP_3753.y = _RESERVED_IDENTIFIER_FIXUP_2538.x;
            _RESERVED_IDENTIFIER_FIXUP_3753.z = _RESERVED_IDENTIFIER_FIXUP_2538.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2548 = _RESERVED_IDENTIFIER_FIXUP_3753.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3757;
            _RESERVED_IDENTIFIER_FIXUP_3757.x = _RESERVED_IDENTIFIER_FIXUP_2548.x;
            _RESERVED_IDENTIFIER_FIXUP_3757.y = _RESERVED_IDENTIFIER_FIXUP_2548.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2558 = _RESERVED_IDENTIFIER_FIXUP_3753.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3761;
            _RESERVED_IDENTIFIER_FIXUP_3761.x = _RESERVED_IDENTIFIER_FIXUP_2558.x;
            _RESERVED_IDENTIFIER_FIXUP_3761.y = _RESERVED_IDENTIFIER_FIXUP_2558.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2568 = _RESERVED_IDENTIFIER_FIXUP_3753.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3765;
            _RESERVED_IDENTIFIER_FIXUP_3765.x = _RESERVED_IDENTIFIER_FIXUP_2568.x;
            _RESERVED_IDENTIFIER_FIXUP_3765.y = _RESERVED_IDENTIFIER_FIXUP_2568.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2578 = _RESERVED_IDENTIFIER_FIXUP_3753.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3769;
            _RESERVED_IDENTIFIER_FIXUP_3769.x = _RESERVED_IDENTIFIER_FIXUP_2578.x;
            _RESERVED_IDENTIFIER_FIXUP_3769.y = _RESERVED_IDENTIFIER_FIXUP_2578.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2586 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2586.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2586.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2592 = hdLod6(param_70, param_71);
            _RESERVED_IDENTIFIER_FIXUP_3757.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3761.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3765.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3769.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3757.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2592.y = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3761.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2592.z = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3765.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2592.w = hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2649 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2592 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3769.xy;
            float param_79 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2655 = hdLod6(param_78, param_79).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3753.y = _RESERVED_IDENTIFIER_FIXUP_2655;
            float _RESERVED_IDENTIFIER_FIXUP_2660 = float(_RESERVED_IDENTIFIER_FIXUP_2655 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3753.y = _RESERVED_IDENTIFIER_FIXUP_2660;
            float _RESERVED_IDENTIFIER_FIXUP_2663 = dot(_RESERVED_IDENTIFIER_FIXUP_2649, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3753.z = _RESERVED_IDENTIFIER_FIXUP_2663;
            float _RESERVED_IDENTIFIER_FIXUP_2669 = _RESERVED_IDENTIFIER_FIXUP_2660 + _RESERVED_IDENTIFIER_FIXUP_2663;
            _RESERVED_IDENTIFIER_FIXUP_3753.y = _RESERVED_IDENTIFIER_FIXUP_2669;
            _RESERVED_IDENTIFIER_FIXUP_3753.x = _RESERVED_IDENTIFIER_FIXUP_2669 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3989 = _RESERVED_IDENTIFIER_FIXUP_2649;
            _RESERVED_IDENTIFIER_FIXUP_3986 = _RESERVED_IDENTIFIER_FIXUP_3753;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2682 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3597 = _RESERVED_IDENTIFIER_FIXUP_3580;
            _RESERVED_IDENTIFIER_FIXUP_3597.y = _RESERVED_IDENTIFIER_FIXUP_2682;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3990;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3987;
            if (_RESERVED_IDENTIFIER_FIXUP_2682 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2691 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3687 = _RESERVED_IDENTIFIER_FIXUP_3597;
                _RESERVED_IDENTIFIER_FIXUP_3687.y = _RESERVED_IDENTIFIER_FIXUP_2691.x;
                _RESERVED_IDENTIFIER_FIXUP_3687.z = _RESERVED_IDENTIFIER_FIXUP_2691.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2701 = _RESERVED_IDENTIFIER_FIXUP_3687.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3691;
                _RESERVED_IDENTIFIER_FIXUP_3691.x = _RESERVED_IDENTIFIER_FIXUP_2701.x;
                _RESERVED_IDENTIFIER_FIXUP_3691.y = _RESERVED_IDENTIFIER_FIXUP_2701.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2711 = _RESERVED_IDENTIFIER_FIXUP_3687.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3695;
                _RESERVED_IDENTIFIER_FIXUP_3695.x = _RESERVED_IDENTIFIER_FIXUP_2711.x;
                _RESERVED_IDENTIFIER_FIXUP_3695.y = _RESERVED_IDENTIFIER_FIXUP_2711.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2721 = _RESERVED_IDENTIFIER_FIXUP_3687.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3699;
                _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2721.x;
                _RESERVED_IDENTIFIER_FIXUP_3699.y = _RESERVED_IDENTIFIER_FIXUP_2721.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2731 = _RESERVED_IDENTIFIER_FIXUP_3687.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3703;
                _RESERVED_IDENTIFIER_FIXUP_3703.x = _RESERVED_IDENTIFIER_FIXUP_2731.x;
                _RESERVED_IDENTIFIER_FIXUP_3703.y = _RESERVED_IDENTIFIER_FIXUP_2731.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2739 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2739.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2739.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2745 = hdLod7(param_80, param_81);
                _RESERVED_IDENTIFIER_FIXUP_3691.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3695.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3699.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3703.w = 0.0;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3691.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2745.y = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3695.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2745.z = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3699.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2745.w = hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2802 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2745 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3703.xy;
                float param_89 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2808 = hdLod7(param_88, param_89).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3687.y = _RESERVED_IDENTIFIER_FIXUP_2808;
                float _RESERVED_IDENTIFIER_FIXUP_2813 = float(_RESERVED_IDENTIFIER_FIXUP_2808 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3687.y = _RESERVED_IDENTIFIER_FIXUP_2813;
                float _RESERVED_IDENTIFIER_FIXUP_2816 = dot(_RESERVED_IDENTIFIER_FIXUP_2802, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3687.z = _RESERVED_IDENTIFIER_FIXUP_2816;
                float _RESERVED_IDENTIFIER_FIXUP_2822 = _RESERVED_IDENTIFIER_FIXUP_2813 + _RESERVED_IDENTIFIER_FIXUP_2816;
                _RESERVED_IDENTIFIER_FIXUP_3687.y = _RESERVED_IDENTIFIER_FIXUP_2822;
                _RESERVED_IDENTIFIER_FIXUP_3687.x = _RESERVED_IDENTIFIER_FIXUP_2822 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3990 = _RESERVED_IDENTIFIER_FIXUP_2802;
                _RESERVED_IDENTIFIER_FIXUP_3987 = _RESERVED_IDENTIFIER_FIXUP_3687;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3601 = _RESERVED_IDENTIFIER_FIXUP_3572;
                _RESERVED_IDENTIFIER_FIXUP_3601.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3601.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2838 = (_RESERVED_IDENTIFIER_FIXUP_3601.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3606;
                _RESERVED_IDENTIFIER_FIXUP_3606.x = _RESERVED_IDENTIFIER_FIXUP_2838.x;
                _RESERVED_IDENTIFIER_FIXUP_3606.y = _RESERVED_IDENTIFIER_FIXUP_2838.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2848 = _RESERVED_IDENTIFIER_FIXUP_3606.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3610;
                _RESERVED_IDENTIFIER_FIXUP_3610.x = _RESERVED_IDENTIFIER_FIXUP_2848.x;
                _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2848.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2858 = _RESERVED_IDENTIFIER_FIXUP_3606.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3614;
                _RESERVED_IDENTIFIER_FIXUP_3614.x = _RESERVED_IDENTIFIER_FIXUP_2858.x;
                _RESERVED_IDENTIFIER_FIXUP_3614.y = _RESERVED_IDENTIFIER_FIXUP_2858.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2868 = _RESERVED_IDENTIFIER_FIXUP_3606.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3618;
                _RESERVED_IDENTIFIER_FIXUP_3618.x = _RESERVED_IDENTIFIER_FIXUP_2868.x;
                _RESERVED_IDENTIFIER_FIXUP_3618.y = _RESERVED_IDENTIFIER_FIXUP_2868.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2878 = _RESERVED_IDENTIFIER_FIXUP_3606.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3622;
                _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2878.x;
                _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2878.y;
                _RESERVED_IDENTIFIER_FIXUP_3606.w = 0.0;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3606.xy;
                float param_91 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2892 = hdLod8(param_90, param_91);
                _RESERVED_IDENTIFIER_FIXUP_3610.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3614.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3618.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3622.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3610.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2892.y = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3614.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2892.z = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3618.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2892.w = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3622.xy;
                float param_99 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2955 = hdLod8(param_98, param_99).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3662 = _RESERVED_IDENTIFIER_FIXUP_3597;
                _RESERVED_IDENTIFIER_FIXUP_3662.y = _RESERVED_IDENTIFIER_FIXUP_2955;
                float _RESERVED_IDENTIFIER_FIXUP_2960 = float(_RESERVED_IDENTIFIER_FIXUP_2955 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3662.y = _RESERVED_IDENTIFIER_FIXUP_2960;
                float _RESERVED_IDENTIFIER_FIXUP_2963 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2892 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3662.z = _RESERVED_IDENTIFIER_FIXUP_2963;
                float _RESERVED_IDENTIFIER_FIXUP_2969 = _RESERVED_IDENTIFIER_FIXUP_2960 + _RESERVED_IDENTIFIER_FIXUP_2963;
                _RESERVED_IDENTIFIER_FIXUP_3662.y = _RESERVED_IDENTIFIER_FIXUP_2969;
                float _RESERVED_IDENTIFIER_FIXUP_2977 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3662.z = _RESERVED_IDENTIFIER_FIXUP_2977;
                float _RESERVED_IDENTIFIER_FIXUP_2983 = clamp((_RESERVED_IDENTIFIER_FIXUP_2977 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3662.z = _RESERVED_IDENTIFIER_FIXUP_2983;
                float _RESERVED_IDENTIFIER_FIXUP_2988 = (_RESERVED_IDENTIFIER_FIXUP_2969 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3662.y = _RESERVED_IDENTIFIER_FIXUP_2988;
                _RESERVED_IDENTIFIER_FIXUP_3662.x = (_RESERVED_IDENTIFIER_FIXUP_2983 * _RESERVED_IDENTIFIER_FIXUP_2988) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3990 = _RESERVED_IDENTIFIER_FIXUP_3601;
                _RESERVED_IDENTIFIER_FIXUP_3987 = _RESERVED_IDENTIFIER_FIXUP_3662;
            }
            _RESERVED_IDENTIFIER_FIXUP_3989 = _RESERVED_IDENTIFIER_FIXUP_3990;
            _RESERVED_IDENTIFIER_FIXUP_3986 = _RESERVED_IDENTIFIER_FIXUP_3987;
        }
        _RESERVED_IDENTIFIER_FIXUP_3988 = _RESERVED_IDENTIFIER_FIXUP_3989;
        _RESERVED_IDENTIFIER_FIXUP_3985 = _RESERVED_IDENTIFIER_FIXUP_3986;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3003 = (_RESERVED_IDENTIFIER_FIXUP_3985.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3937 = _RESERVED_IDENTIFIER_FIXUP_3985;
    _RESERVED_IDENTIFIER_FIXUP_3937.y = _RESERVED_IDENTIFIER_FIXUP_3003;
    _RESERVED_IDENTIFIER_FIXUP_3937.y = _RESERVED_IDENTIFIER_FIXUP_3003;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3016 = _RESERVED_IDENTIFIER_FIXUP_2248.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3943 = _RESERVED_IDENTIFIER_FIXUP_3988;
    _RESERVED_IDENTIFIER_FIXUP_3943.x = _RESERVED_IDENTIFIER_FIXUP_3016.x;
    _RESERVED_IDENTIFIER_FIXUP_3943.y = _RESERVED_IDENTIFIER_FIXUP_3016.y;
    _RESERVED_IDENTIFIER_FIXUP_3943.z = _RESERVED_IDENTIFIER_FIXUP_3016.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3027 = _RESERVED_IDENTIFIER_FIXUP_3937.xxx * _RESERVED_IDENTIFIER_FIXUP_3943.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3996 = vec4(_RESERVED_IDENTIFIER_FIXUP_3027.x, _RESERVED_IDENTIFIER_FIXUP_3003, _RESERVED_IDENTIFIER_FIXUP_3027.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3041 = (_RESERVED_IDENTIFIER_FIXUP_2248.xyz * _RESERVED_IDENTIFIER_FIXUP_3996.yyy) + _RESERVED_IDENTIFIER_FIXUP_3996.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3955 = _RESERVED_IDENTIFIER_FIXUP_3996;
    _RESERVED_IDENTIFIER_FIXUP_3955.x = _RESERVED_IDENTIFIER_FIXUP_3041.x;
    _RESERVED_IDENTIFIER_FIXUP_3955.y = _RESERVED_IDENTIFIER_FIXUP_3041.y;
    _RESERVED_IDENTIFIER_FIXUP_3955.z = _RESERVED_IDENTIFIER_FIXUP_3041.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3054 = _RESERVED_IDENTIFIER_FIXUP_3955.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3961 = _RESERVED_IDENTIFIER_FIXUP_3955;
    _RESERVED_IDENTIFIER_FIXUP_3961.x = _RESERVED_IDENTIFIER_FIXUP_3054.x;
    _RESERVED_IDENTIFIER_FIXUP_3961.y = _RESERVED_IDENTIFIER_FIXUP_3054.y;
    _RESERVED_IDENTIFIER_FIXUP_3961.z = _RESERVED_IDENTIFIER_FIXUP_3054.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3961.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1075 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1084;
    if (_RESERVED_IDENTIFIER_FIXUP_1075)
    {
        _RESERVED_IDENTIFIER_FIXUP_1084 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1084 = _RESERVED_IDENTIFIER_FIXUP_1075;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1084)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1121 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3530.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1147 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3107;
    if (_RESERVED_IDENTIFIER_FIXUP_1121 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3107 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1121), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1147);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3107 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1147);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3107;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3003);
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 hdB88 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = hdB88.x;
    r2.z = hdB88.y;
    vec3 hdB100 = v0.xyz + v0.xyz;
    r3.x = hdB100.x;
    r3.y = hdB100.y;
    r3.z = hdB100.z;
    vec3 hdB112 = r0.xyz * r3.xyz;
    r4.x = hdB112.x;
    r4.y = hdB112.y;
    r4.z = hdB112.z;
    vec4 hdB121 = r0;
    vec3 hdB130 = mix(r4.xyz, hdB121.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = hdB130.x;
    r0.y = hdB130.y;
    r0.z = hdB130.z;
    vec4 hdB139 = r3;
    vec3 hdB141 = r1.xyz * hdB139.xyz;
    r3.x = hdB141.x;
    r3.y = hdB141.y;
    r3.z = hdB141.z;
    vec4 hdB150 = r1;
    vec3 hdB156 = mix(r3.xyz, hdB150.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = hdB156.x;
    r1.y = hdB156.y;
    r1.z = hdB156.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        vec2 hdB204 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.x = hdB204.x;
        r0.y = hdB204.y;
        vec2 hdB215 = r0.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB215.x;
        r1.y = hdB215.y;
        vec2 hdB226 = r0.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB226.x;
        r2.y = hdB226.y;
        vec2 hdB237 = r0.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB237.x;
        r4.y = hdB237.y;
        vec2 hdB248 = r0.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB248.x;
        r5.y = hdB248.y;
        vec2 hdB259 = r0.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB259.x;
        r6.y = hdB259.y;
        vec2 hdB270 = r0.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB270.x;
        r7.y = hdB270.y;
        vec2 hdB281 = r0.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB281.x;
        r8.y = hdB281.y;
        vec4 hdB286 = r0;
        vec2 hdB292 = hdB286.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r0.x = hdB292.x;
        r0.y = hdB292.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r9.xy;
        float param_3 = r9.w;
        r9 = hdLod5(param_2, param_3);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_8 = r4.xy;
        float param_9 = r4.w;
        r4 = hdLod5(param_8, param_9);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_10 = r5.xy;
        float param_11 = r5.w;
        r5 = hdLod5(param_10, param_11);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod5(param_12, param_13);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_14 = r7.xy;
        float param_15 = r7.w;
        r7 = hdLod5(param_14, param_15);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_16 = r8.xy;
        float param_17 = r8.w;
        r8 = hdLod5(param_16, param_17);
        r0.z = 0.0;
        r0.w = 0.0;
        vec2 param_18 = r0.xy;
        float param_19 = r0.w;
        r0 = hdLod5(param_18, param_19);
        r9.y = r1.x;
        r9.z = r2.x;
        r9.w = r4.x;
        r1 = r9 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r2 = r5 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r0.x += (-v4.z);
        r0.x = float(r0.x >= 0.0);
        r0.y = dot(r1, vec4(1.0));
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.x += r0.y;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            vec2 hdB479 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB479.x;
            r0.z = hdB479.y;
            vec2 hdB489 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = hdB489.x;
            r1.y = hdB489.y;
            vec2 hdB499 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB499.x;
            r2.y = hdB499.y;
            vec2 hdB509 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB509.x;
            r4.y = hdB509.y;
            vec2 hdB519 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB519.x;
            r5.y = hdB519.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = r6.xy;
            float param_21 = r6.w;
            r6 = hdLod6(param_20, param_21);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_22 = r1.xy;
            float param_23 = r1.w;
            r1 = hdLod6(param_22, param_23);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod6(param_24, param_25);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_26 = r4.xy;
            float param_27 = r4.w;
            r4 = hdLod6(param_26, param_27);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_28 = r5.xy;
            float param_29 = r5.w;
            r5 = hdLod6(param_28, param_29);
            r6.y = r1.x;
            r6.z = r2.x;
            r6.w = r4.x;
            r1 = r6 + (-v5.zzzz);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r0.y = r5.x + (-v5.z);
            r0.y = float(r0.y >= 0.0);
            r0.z = dot(r1, vec4(1.0));
            r0.y += r0.z;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                vec2 hdB635 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB635.x;
                r0.z = hdB635.y;
                vec2 hdB645 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r1.x = hdB645.x;
                r1.y = hdB645.y;
                vec2 hdB655 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB655.x;
                r2.y = hdB655.y;
                vec2 hdB665 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB665.x;
                r4.y = hdB665.y;
                vec2 hdB675 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB675.x;
                r5.y = hdB675.y;
                r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = r6.xy;
                float param_31 = r6.w;
                r6 = hdLod7(param_30, param_31);
                r1.z = 0.0;
                r1.w = 0.0;
                vec2 param_32 = r1.xy;
                float param_33 = r1.w;
                r1 = hdLod7(param_32, param_33);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_34 = r2.xy;
                float param_35 = r2.w;
                r2 = hdLod7(param_34, param_35);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_36 = r4.xy;
                float param_37 = r4.w;
                r4 = hdLod7(param_36, param_37);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_38 = r5.xy;
                float param_39 = r5.w;
                r5 = hdLod7(param_38, param_39);
                r6.y = r1.x;
                r6.z = r2.x;
                r6.w = r4.x;
                r1 = r6 + (-v6.zzzz);
                r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
                r0.y = r5.x + (-v6.z);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r1, vec4(1.0));
                r0.y += r0.z;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.x = v4.w;
                r1.y = v5.w;
                vec2 hdB783 = (r1.xy * vec2(0.5)) + vec2(0.5);
                r2.x = hdB783.x;
                r2.y = hdB783.y;
                vec2 hdB793 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB793.x;
                r4.y = hdB793.y;
                vec2 hdB803 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB803.x;
                r5.y = hdB803.y;
                vec2 hdB813 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB813.x;
                r6.y = hdB813.y;
                vec2 hdB823 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB823.x;
                r7.y = hdB823.y;
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_40 = r2.xy;
                float param_41 = r2.w;
                r2 = hdLod8(param_40, param_41);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_42 = r4.xy;
                float param_43 = r4.w;
                r4 = hdLod8(param_42, param_43);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_44 = r5.xy;
                float param_45 = r5.w;
                r5 = hdLod8(param_44, param_45);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_46 = r6.xy;
                float param_47 = r6.w;
                r6 = hdLod8(param_46, param_47);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_48 = r7.xy;
                float param_49 = r7.w;
                r7 = hdLod8(param_48, param_49);
                r2.y = r4.x;
                r2.z = r5.x;
                r2.w = r6.x;
                r2 += (-v6.wwww);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r0.y = r7.x + (-v6.w);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r2, vec4(1.0));
                r0.y += r0.z;
                r0.z = max(abs(r1.x), abs(r1.y));
                r0.z = clamp((r0.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.z * r0.y) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB957 = r3.www * v1.xyz;
    r1.x = hdB957.x;
    r1.y = hdB957.y;
    r1.z = hdB957.z;
    vec4 hdB964 = r0;
    vec3 hdB968 = hdB964.xxx * r1.xyz;
    r0.x = hdB968.x;
    r0.z = hdB968.y;
    r0.w = hdB968.z;
    vec4 hdB977 = r0;
    vec4 hdB980 = r0;
    vec3 hdB982 = (r3.xyz * hdB977.yyy) + hdB980.xzw;
    r0.x = hdB982.x;
    r0.y = hdB982.y;
    r0.z = hdB982.z;
    vec4 hdB989 = r0;
    vec3 hdB996 = hdB989.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB996.x;
    r0.y = hdB996.y;
    r0.z = hdB996.z;
    vec3 hdB1011 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1011.x;
    oC0.y = hdB1011.y;
    oC0.z = hdB1011.z;
    oC0.w = 1.0;
    bool hdB1023 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1031;
    if (hdB1023)
    {
        hdB1031 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1031 = hdB1023;
    }
    if (hdB1031)
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
    bool _3480 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3490;
    if (_3480)
    {
        _3490 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3490 = _3480;
    }
    if (_3490)
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
        bool _3515 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3530;
        if (!_3515)
        {
            _3530 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3530 = _3515;
        }
        if (_3530)
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
