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
float _RESERVED_IDENTIFIER_FIXUP_3848;
vec4 _RESERVED_IDENTIFIER_FIXUP_3849;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1197 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1201 = hdTex2(param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1205 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_1207 = _RESERVED_IDENTIFIER_FIXUP_1205.x;
    _RESERVED_IDENTIFIER_FIXUP_1201.y = _RESERVED_IDENTIFIER_FIXUP_1207;
    float _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_1205.y;
    _RESERVED_IDENTIFIER_FIXUP_1201.z = _RESERVED_IDENTIFIER_FIXUP_1209;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1211 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3848).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1214 = _RESERVED_IDENTIFIER_FIXUP_1211 + _RESERVED_IDENTIFIER_FIXUP_1211;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3059;
    _RESERVED_IDENTIFIER_FIXUP_3059.x = _RESERVED_IDENTIFIER_FIXUP_1214.x;
    _RESERVED_IDENTIFIER_FIXUP_3059.y = _RESERVED_IDENTIFIER_FIXUP_1214.y;
    _RESERVED_IDENTIFIER_FIXUP_3059.z = _RESERVED_IDENTIFIER_FIXUP_1214.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1193.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_1222 * _RESERVED_IDENTIFIER_FIXUP_3059.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3065 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3065.x = _RESERVED_IDENTIFIER_FIXUP_1225.x;
    _RESERVED_IDENTIFIER_FIXUP_3065.y = _RESERVED_IDENTIFIER_FIXUP_1225.y;
    _RESERVED_IDENTIFIER_FIXUP_3065.z = _RESERVED_IDENTIFIER_FIXUP_1225.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1240 = mix(_RESERVED_IDENTIFIER_FIXUP_3065.xyz, _RESERVED_IDENTIFIER_FIXUP_1222, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1201.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3071 = _RESERVED_IDENTIFIER_FIXUP_1193;
    _RESERVED_IDENTIFIER_FIXUP_3071.x = _RESERVED_IDENTIFIER_FIXUP_1240.x;
    _RESERVED_IDENTIFIER_FIXUP_3071.y = _RESERVED_IDENTIFIER_FIXUP_1240.y;
    _RESERVED_IDENTIFIER_FIXUP_3071.z = _RESERVED_IDENTIFIER_FIXUP_1240.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1248 = _RESERVED_IDENTIFIER_FIXUP_1197.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1251 = _RESERVED_IDENTIFIER_FIXUP_1248 * _RESERVED_IDENTIFIER_FIXUP_3059.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3077;
    _RESERVED_IDENTIFIER_FIXUP_3077.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
    _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
    _RESERVED_IDENTIFIER_FIXUP_3077.z = _RESERVED_IDENTIFIER_FIXUP_1251.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1266 = mix(_RESERVED_IDENTIFIER_FIXUP_3077.xyz, _RESERVED_IDENTIFIER_FIXUP_1248, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1201.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3083 = _RESERVED_IDENTIFIER_FIXUP_1197;
    _RESERVED_IDENTIFIER_FIXUP_3083.x = _RESERVED_IDENTIFIER_FIXUP_1266.x;
    _RESERVED_IDENTIFIER_FIXUP_3083.y = _RESERVED_IDENTIFIER_FIXUP_1266.y;
    _RESERVED_IDENTIFIER_FIXUP_3083.z = _RESERVED_IDENTIFIER_FIXUP_1266.z;
    float _RESERVED_IDENTIFIER_FIXUP_1284 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3091 = _RESERVED_IDENTIFIER_FIXUP_3071;
    _RESERVED_IDENTIFIER_FIXUP_3091.x = _RESERVED_IDENTIFIER_FIXUP_1284;
    float _RESERVED_IDENTIFIER_FIXUP_1290 = clamp((_RESERVED_IDENTIFIER_FIXUP_1284 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3091.x = _RESERVED_IDENTIFIER_FIXUP_1290;
    float _RESERVED_IDENTIFIER_FIXUP_1296 = ((-_RESERVED_IDENTIFIER_FIXUP_1290) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3091.x = _RESERVED_IDENTIFIER_FIXUP_1296;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3853;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3850;
    if (_RESERVED_IDENTIFIER_FIXUP_1296 != (-_RESERVED_IDENTIFIER_FIXUP_1296))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1308 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1308.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1308.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1314 = hdLod5(param_2, param_3);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1318 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3303 = _RESERVED_IDENTIFIER_FIXUP_1314;
        _RESERVED_IDENTIFIER_FIXUP_3303.y = _RESERVED_IDENTIFIER_FIXUP_1318.x;
        _RESERVED_IDENTIFIER_FIXUP_3303.z = _RESERVED_IDENTIFIER_FIXUP_1318.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1328 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3307;
        _RESERVED_IDENTIFIER_FIXUP_3307.x = _RESERVED_IDENTIFIER_FIXUP_1328.x;
        _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_1328.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1335 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_1335.y;
        _RESERVED_IDENTIFIER_FIXUP_3307.w = _RESERVED_IDENTIFIER_FIXUP_1339;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3307.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1339;
        float _RESERVED_IDENTIFIER_FIXUP_1350 = _RESERVED_IDENTIFIER_FIXUP_1314.x + hdLod5(param_4, param_5).x;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_1350;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3320;
        _RESERVED_IDENTIFIER_FIXUP_3320.x = _RESERVED_IDENTIFIER_FIXUP_1357.x;
        _RESERVED_IDENTIFIER_FIXUP_3320.y = _RESERVED_IDENTIFIER_FIXUP_1357.y;
        _RESERVED_IDENTIFIER_FIXUP_3320.w = _RESERVED_IDENTIFIER_FIXUP_1339;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3320.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1339;
        float _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_1350 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_1379;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1386 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3333;
        _RESERVED_IDENTIFIER_FIXUP_3333.x = _RESERVED_IDENTIFIER_FIXUP_1386.x;
        _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_1386.y;
        _RESERVED_IDENTIFIER_FIXUP_3333.w = _RESERVED_IDENTIFIER_FIXUP_1339;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3333.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1339;
        float _RESERVED_IDENTIFIER_FIXUP_1408 = _RESERVED_IDENTIFIER_FIXUP_1379 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_1408;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1415 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3346;
        _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_1415.x;
        _RESERVED_IDENTIFIER_FIXUP_3346.y = _RESERVED_IDENTIFIER_FIXUP_1415.y;
        _RESERVED_IDENTIFIER_FIXUP_3346.w = _RESERVED_IDENTIFIER_FIXUP_1339;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3346.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1339;
        float _RESERVED_IDENTIFIER_FIXUP_1437 = _RESERVED_IDENTIFIER_FIXUP_1408 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_1437;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1444 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3359;
        _RESERVED_IDENTIFIER_FIXUP_3359.x = _RESERVED_IDENTIFIER_FIXUP_1444.x;
        _RESERVED_IDENTIFIER_FIXUP_3359.y = _RESERVED_IDENTIFIER_FIXUP_1444.y;
        _RESERVED_IDENTIFIER_FIXUP_3359.w = _RESERVED_IDENTIFIER_FIXUP_1339;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3359.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1339;
        float _RESERVED_IDENTIFIER_FIXUP_1466 = _RESERVED_IDENTIFIER_FIXUP_1437 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_1466;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1473 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3372;
        _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_1473.x;
        _RESERVED_IDENTIFIER_FIXUP_3372.y = _RESERVED_IDENTIFIER_FIXUP_1473.y;
        _RESERVED_IDENTIFIER_FIXUP_3372.w = _RESERVED_IDENTIFIER_FIXUP_1339;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3372.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1339;
        float _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_1466 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_1495;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1502 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3385;
        _RESERVED_IDENTIFIER_FIXUP_3385.x = _RESERVED_IDENTIFIER_FIXUP_1502.x;
        _RESERVED_IDENTIFIER_FIXUP_3385.y = _RESERVED_IDENTIFIER_FIXUP_1502.y;
        _RESERVED_IDENTIFIER_FIXUP_3385.w = _RESERVED_IDENTIFIER_FIXUP_1339;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3385.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1339;
        float _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_1495 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_1524;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_3303.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3398;
        _RESERVED_IDENTIFIER_FIXUP_3398.x = _RESERVED_IDENTIFIER_FIXUP_1531.x;
        _RESERVED_IDENTIFIER_FIXUP_3398.y = _RESERVED_IDENTIFIER_FIXUP_1531.y;
        _RESERVED_IDENTIFIER_FIXUP_3398.w = _RESERVED_IDENTIFIER_FIXUP_1339;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3398.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1339;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1548 = hdLod5(param_18, param_19);
        float _RESERVED_IDENTIFIER_FIXUP_1553 = _RESERVED_IDENTIFIER_FIXUP_1524 + _RESERVED_IDENTIFIER_FIXUP_1548.x;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_1553;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_1553 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3853 = _RESERVED_IDENTIFIER_FIXUP_1548;
        _RESERVED_IDENTIFIER_FIXUP_3850 = _RESERVED_IDENTIFIER_FIXUP_3303;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1566 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3091.y = _RESERVED_IDENTIFIER_FIXUP_1566;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3854;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3851;
        if (_RESERVED_IDENTIFIER_FIXUP_1566 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1575 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1585 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1587 = _RESERVED_IDENTIFIER_FIXUP_1585.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3243 = _RESERVED_IDENTIFIER_FIXUP_3091;
            _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_1587;
            _RESERVED_IDENTIFIER_FIXUP_3243.z = _RESERVED_IDENTIFIER_FIXUP_1585.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1595 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3247;
            _RESERVED_IDENTIFIER_FIXUP_3247.x = _RESERVED_IDENTIFIER_FIXUP_1595.x;
            _RESERVED_IDENTIFIER_FIXUP_3247.y = _RESERVED_IDENTIFIER_FIXUP_1595.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1602 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1606 = _RESERVED_IDENTIFIER_FIXUP_1602.y;
            _RESERVED_IDENTIFIER_FIXUP_3247.w = _RESERVED_IDENTIFIER_FIXUP_1606;
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1575.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1575.w;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3247.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1606;
            float _RESERVED_IDENTIFIER_FIXUP_1617 = hdLod6(param_20, param_21).x + hdLod6(param_22, param_23).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3873 = vec4(_RESERVED_IDENTIFIER_FIXUP_1296, _RESERVED_IDENTIFIER_FIXUP_1587, _RESERVED_IDENTIFIER_FIXUP_1585.y, _RESERVED_IDENTIFIER_FIXUP_1617);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1624 = _RESERVED_IDENTIFIER_FIXUP_3873.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3260;
            _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_1624.x;
            _RESERVED_IDENTIFIER_FIXUP_3260.y = _RESERVED_IDENTIFIER_FIXUP_1624.y;
            _RESERVED_IDENTIFIER_FIXUP_3260.w = _RESERVED_IDENTIFIER_FIXUP_1606;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3260.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1606;
            float _RESERVED_IDENTIFIER_FIXUP_1646 = _RESERVED_IDENTIFIER_FIXUP_1617 + hdLod6(param_24, param_25).x;
            _RESERVED_IDENTIFIER_FIXUP_3873.w = _RESERVED_IDENTIFIER_FIXUP_1646;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1653 = _RESERVED_IDENTIFIER_FIXUP_3873.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3273;
            _RESERVED_IDENTIFIER_FIXUP_3273.x = _RESERVED_IDENTIFIER_FIXUP_1653.x;
            _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1653.y;
            _RESERVED_IDENTIFIER_FIXUP_3273.w = _RESERVED_IDENTIFIER_FIXUP_1606;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3273.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1606;
            float _RESERVED_IDENTIFIER_FIXUP_1675 = _RESERVED_IDENTIFIER_FIXUP_1646 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_3873.w = _RESERVED_IDENTIFIER_FIXUP_1675;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1682 = _RESERVED_IDENTIFIER_FIXUP_3873.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3286;
            _RESERVED_IDENTIFIER_FIXUP_3286.x = _RESERVED_IDENTIFIER_FIXUP_1682.x;
            _RESERVED_IDENTIFIER_FIXUP_3286.y = _RESERVED_IDENTIFIER_FIXUP_1682.y;
            _RESERVED_IDENTIFIER_FIXUP_3286.w = _RESERVED_IDENTIFIER_FIXUP_1606;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3286.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1606;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1699 = hdLod6(param_28, param_29);
            float _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_1675 + _RESERVED_IDENTIFIER_FIXUP_1699.x;
            _RESERVED_IDENTIFIER_FIXUP_3873.y = _RESERVED_IDENTIFIER_FIXUP_1704;
            _RESERVED_IDENTIFIER_FIXUP_3873.x = _RESERVED_IDENTIFIER_FIXUP_1704 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3854 = _RESERVED_IDENTIFIER_FIXUP_1699;
            _RESERVED_IDENTIFIER_FIXUP_3851 = _RESERVED_IDENTIFIER_FIXUP_3873;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1717 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3108 = _RESERVED_IDENTIFIER_FIXUP_3091;
            _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_1717;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3855;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3852;
            if (_RESERVED_IDENTIFIER_FIXUP_1717 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1726 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1736 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1738 = _RESERVED_IDENTIFIER_FIXUP_1736.x;
                _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_1738;
                _RESERVED_IDENTIFIER_FIXUP_3108.z = _RESERVED_IDENTIFIER_FIXUP_1736.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1746 = _RESERVED_IDENTIFIER_FIXUP_3108.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3187;
                _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1746.x;
                _RESERVED_IDENTIFIER_FIXUP_3187.y = _RESERVED_IDENTIFIER_FIXUP_1746.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1753 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1757 = _RESERVED_IDENTIFIER_FIXUP_1753.y;
                _RESERVED_IDENTIFIER_FIXUP_3187.w = _RESERVED_IDENTIFIER_FIXUP_1757;
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1726.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1726.w;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3187.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1757;
                float _RESERVED_IDENTIFIER_FIXUP_1768 = hdLod7(param_30, param_31).x + hdLod7(param_32, param_33).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3872 = vec4(_RESERVED_IDENTIFIER_FIXUP_1296, _RESERVED_IDENTIFIER_FIXUP_1738, _RESERVED_IDENTIFIER_FIXUP_1736.y, _RESERVED_IDENTIFIER_FIXUP_1768);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1775 = _RESERVED_IDENTIFIER_FIXUP_3872.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3200;
                _RESERVED_IDENTIFIER_FIXUP_3200.x = _RESERVED_IDENTIFIER_FIXUP_1775.x;
                _RESERVED_IDENTIFIER_FIXUP_3200.y = _RESERVED_IDENTIFIER_FIXUP_1775.y;
                _RESERVED_IDENTIFIER_FIXUP_3200.w = _RESERVED_IDENTIFIER_FIXUP_1757;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3200.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1757;
                float _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_1768 + hdLod7(param_34, param_35).x;
                _RESERVED_IDENTIFIER_FIXUP_3872.w = _RESERVED_IDENTIFIER_FIXUP_1797;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1804 = _RESERVED_IDENTIFIER_FIXUP_3872.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3213;
                _RESERVED_IDENTIFIER_FIXUP_3213.x = _RESERVED_IDENTIFIER_FIXUP_1804.x;
                _RESERVED_IDENTIFIER_FIXUP_3213.y = _RESERVED_IDENTIFIER_FIXUP_1804.y;
                _RESERVED_IDENTIFIER_FIXUP_3213.w = _RESERVED_IDENTIFIER_FIXUP_1757;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3213.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1757;
                float _RESERVED_IDENTIFIER_FIXUP_1826 = _RESERVED_IDENTIFIER_FIXUP_1797 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_3872.w = _RESERVED_IDENTIFIER_FIXUP_1826;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1833 = _RESERVED_IDENTIFIER_FIXUP_3872.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3226;
                _RESERVED_IDENTIFIER_FIXUP_3226.x = _RESERVED_IDENTIFIER_FIXUP_1833.x;
                _RESERVED_IDENTIFIER_FIXUP_3226.y = _RESERVED_IDENTIFIER_FIXUP_1833.y;
                _RESERVED_IDENTIFIER_FIXUP_3226.w = _RESERVED_IDENTIFIER_FIXUP_1757;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3226.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1757;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1850 = hdLod7(param_38, param_39);
                float _RESERVED_IDENTIFIER_FIXUP_1855 = _RESERVED_IDENTIFIER_FIXUP_1826 + _RESERVED_IDENTIFIER_FIXUP_1850.x;
                _RESERVED_IDENTIFIER_FIXUP_3872.y = _RESERVED_IDENTIFIER_FIXUP_1855;
                _RESERVED_IDENTIFIER_FIXUP_3872.x = _RESERVED_IDENTIFIER_FIXUP_1855 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3855 = _RESERVED_IDENTIFIER_FIXUP_1850;
                _RESERVED_IDENTIFIER_FIXUP_3852 = _RESERVED_IDENTIFIER_FIXUP_3872;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1871 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1875 = _RESERVED_IDENTIFIER_FIXUP_1871.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1886 = vec4(_RESERVED_IDENTIFIER_FIXUP_1871.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1875).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3869 = vec4(_RESERVED_IDENTIFIER_FIXUP_1886 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1875);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1923 = _RESERVED_IDENTIFIER_FIXUP_1886 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3141 = _RESERVED_IDENTIFIER_FIXUP_3869;
                _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_1923.x;
                _RESERVED_IDENTIFIER_FIXUP_3141.y = _RESERVED_IDENTIFIER_FIXUP_1923.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1945 = _RESERVED_IDENTIFIER_FIXUP_1886 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3150 = _RESERVED_IDENTIFIER_FIXUP_3141;
                _RESERVED_IDENTIFIER_FIXUP_3150.x = _RESERVED_IDENTIFIER_FIXUP_1945.x;
                _RESERVED_IDENTIFIER_FIXUP_3150.y = _RESERVED_IDENTIFIER_FIXUP_1945.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1967 = _RESERVED_IDENTIFIER_FIXUP_1886 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3159 = _RESERVED_IDENTIFIER_FIXUP_3150;
                _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1967.x;
                _RESERVED_IDENTIFIER_FIXUP_3159.y = _RESERVED_IDENTIFIER_FIXUP_1967.y;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3159.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1875;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1977 = hdLod8(param_40, param_41);
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_1886;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1875;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3869.xy;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1875;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3141.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1875;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3150.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1875;
                float _RESERVED_IDENTIFIER_FIXUP_1982 = (((hdLod8(param_42, param_43).x + hdLod8(param_44, param_45).x) + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + _RESERVED_IDENTIFIER_FIXUP_1977.x;
                float _RESERVED_IDENTIFIER_FIXUP_1990 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3170 = _RESERVED_IDENTIFIER_FIXUP_1977;
                _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_1990;
                float _RESERVED_IDENTIFIER_FIXUP_1996 = clamp((_RESERVED_IDENTIFIER_FIXUP_1990 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2001 = (_RESERVED_IDENTIFIER_FIXUP_1982 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3855 = _RESERVED_IDENTIFIER_FIXUP_3170;
                _RESERVED_IDENTIFIER_FIXUP_3852 = vec4((_RESERVED_IDENTIFIER_FIXUP_1996 * _RESERVED_IDENTIFIER_FIXUP_2001) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1996, _RESERVED_IDENTIFIER_FIXUP_2001, _RESERVED_IDENTIFIER_FIXUP_1982);
            }
            _RESERVED_IDENTIFIER_FIXUP_3854 = _RESERVED_IDENTIFIER_FIXUP_3855;
            _RESERVED_IDENTIFIER_FIXUP_3851 = _RESERVED_IDENTIFIER_FIXUP_3852;
        }
        _RESERVED_IDENTIFIER_FIXUP_3853 = _RESERVED_IDENTIFIER_FIXUP_3854;
        _RESERVED_IDENTIFIER_FIXUP_3850 = _RESERVED_IDENTIFIER_FIXUP_3851;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3417 = _RESERVED_IDENTIFIER_FIXUP_3850;
    _RESERVED_IDENTIFIER_FIXUP_3417.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3419 = _RESERVED_IDENTIFIER_FIXUP_3853;
    _RESERVED_IDENTIFIER_FIXUP_3419.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3419.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3419.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2040 = _RESERVED_IDENTIFIER_FIXUP_3417.xxx * _RESERVED_IDENTIFIER_FIXUP_3419.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3874 = vec4(_RESERVED_IDENTIFIER_FIXUP_2040.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2040.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2054 = (mix(_RESERVED_IDENTIFIER_FIXUP_3071, _RESERVED_IDENTIFIER_FIXUP_3083, _RESERVED_IDENTIFIER_FIXUP_1201.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_3874.yyy) + _RESERVED_IDENTIFIER_FIXUP_3874.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_3874;
    _RESERVED_IDENTIFIER_FIXUP_3431.x = _RESERVED_IDENTIFIER_FIXUP_2054.x;
    _RESERVED_IDENTIFIER_FIXUP_3431.y = _RESERVED_IDENTIFIER_FIXUP_2054.y;
    _RESERVED_IDENTIFIER_FIXUP_3431.z = _RESERVED_IDENTIFIER_FIXUP_2054.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2067 = _RESERVED_IDENTIFIER_FIXUP_3431.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3437 = _RESERVED_IDENTIFIER_FIXUP_3431;
    _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_2067.x;
    _RESERVED_IDENTIFIER_FIXUP_3437.y = _RESERVED_IDENTIFIER_FIXUP_2067.y;
    _RESERVED_IDENTIFIER_FIXUP_3437.z = _RESERVED_IDENTIFIER_FIXUP_2067.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2120 = OptTex0( texcoord0.xyz);
    vec2 param_50 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2124 = hdTex1(param_50);
    vec2 param_51 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2128 = hdTex2(param_51);
    _RESERVED_IDENTIFIER_FIXUP_2128.y = _RESERVED_IDENTIFIER_FIXUP_1207;
    _RESERVED_IDENTIFIER_FIXUP_2128.z = _RESERVED_IDENTIFIER_FIXUP_1209;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2141 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3455;
    _RESERVED_IDENTIFIER_FIXUP_3455.x = _RESERVED_IDENTIFIER_FIXUP_2141.x;
    _RESERVED_IDENTIFIER_FIXUP_3455.y = _RESERVED_IDENTIFIER_FIXUP_2141.y;
    _RESERVED_IDENTIFIER_FIXUP_3455.z = _RESERVED_IDENTIFIER_FIXUP_2141.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2149 = _RESERVED_IDENTIFIER_FIXUP_2120.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2152 = _RESERVED_IDENTIFIER_FIXUP_2149 * _RESERVED_IDENTIFIER_FIXUP_3455.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3461 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_2152.x;
    _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_2152.y;
    _RESERVED_IDENTIFIER_FIXUP_3461.z = _RESERVED_IDENTIFIER_FIXUP_2152.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2167 = mix(_RESERVED_IDENTIFIER_FIXUP_3461.xyz, _RESERVED_IDENTIFIER_FIXUP_2149, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2128.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3467 = _RESERVED_IDENTIFIER_FIXUP_2120;
    _RESERVED_IDENTIFIER_FIXUP_3467.x = _RESERVED_IDENTIFIER_FIXUP_2167.x;
    _RESERVED_IDENTIFIER_FIXUP_3467.y = _RESERVED_IDENTIFIER_FIXUP_2167.y;
    _RESERVED_IDENTIFIER_FIXUP_3467.z = _RESERVED_IDENTIFIER_FIXUP_2167.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2175 = _RESERVED_IDENTIFIER_FIXUP_2124.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2178 = _RESERVED_IDENTIFIER_FIXUP_2175 * _RESERVED_IDENTIFIER_FIXUP_3455.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3473;
    _RESERVED_IDENTIFIER_FIXUP_3473.x = _RESERVED_IDENTIFIER_FIXUP_2178.x;
    _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2178.y;
    _RESERVED_IDENTIFIER_FIXUP_3473.z = _RESERVED_IDENTIFIER_FIXUP_2178.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2193 = mix(_RESERVED_IDENTIFIER_FIXUP_3473.xyz, _RESERVED_IDENTIFIER_FIXUP_2175, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2128.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3479 = _RESERVED_IDENTIFIER_FIXUP_2124;
    _RESERVED_IDENTIFIER_FIXUP_3479.x = _RESERVED_IDENTIFIER_FIXUP_2193.x;
    _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2193.y;
    _RESERVED_IDENTIFIER_FIXUP_3479.z = _RESERVED_IDENTIFIER_FIXUP_2193.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2204 = mix(_RESERVED_IDENTIFIER_FIXUP_3467, _RESERVED_IDENTIFIER_FIXUP_3479, _RESERVED_IDENTIFIER_FIXUP_2128.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3487 = _RESERVED_IDENTIFIER_FIXUP_3467;
    _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_1284;
    float _RESERVED_IDENTIFIER_FIXUP_2217 = clamp((_RESERVED_IDENTIFIER_FIXUP_1284 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_2217;
    float _RESERVED_IDENTIFIER_FIXUP_2223 = ((-_RESERVED_IDENTIFIER_FIXUP_2217) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_2223;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3862;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3859;
    if (_RESERVED_IDENTIFIER_FIXUP_2223 != (-_RESERVED_IDENTIFIER_FIXUP_2223))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2235 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2235.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2235.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2241 = hdLod5(param_52, param_53);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2245 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3699 = _RESERVED_IDENTIFIER_FIXUP_2241;
        _RESERVED_IDENTIFIER_FIXUP_3699.y = _RESERVED_IDENTIFIER_FIXUP_2245.x;
        _RESERVED_IDENTIFIER_FIXUP_3699.z = _RESERVED_IDENTIFIER_FIXUP_2245.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2255 = _RESERVED_IDENTIFIER_FIXUP_3699.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3703;
        _RESERVED_IDENTIFIER_FIXUP_3703.x = _RESERVED_IDENTIFIER_FIXUP_2255.x;
        _RESERVED_IDENTIFIER_FIXUP_3703.y = _RESERVED_IDENTIFIER_FIXUP_2255.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2262 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2266 = _RESERVED_IDENTIFIER_FIXUP_2262.y;
        _RESERVED_IDENTIFIER_FIXUP_3703.w = _RESERVED_IDENTIFIER_FIXUP_2266;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3703.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2266;
        float _RESERVED_IDENTIFIER_FIXUP_2277 = _RESERVED_IDENTIFIER_FIXUP_2241.x + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2277;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2284 = _RESERVED_IDENTIFIER_FIXUP_3699.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3716;
        _RESERVED_IDENTIFIER_FIXUP_3716.x = _RESERVED_IDENTIFIER_FIXUP_2284.x;
        _RESERVED_IDENTIFIER_FIXUP_3716.y = _RESERVED_IDENTIFIER_FIXUP_2284.y;
        _RESERVED_IDENTIFIER_FIXUP_3716.w = _RESERVED_IDENTIFIER_FIXUP_2266;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3716.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2266;
        float _RESERVED_IDENTIFIER_FIXUP_2306 = _RESERVED_IDENTIFIER_FIXUP_2277 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2306;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2313 = _RESERVED_IDENTIFIER_FIXUP_3699.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3729;
        _RESERVED_IDENTIFIER_FIXUP_3729.x = _RESERVED_IDENTIFIER_FIXUP_2313.x;
        _RESERVED_IDENTIFIER_FIXUP_3729.y = _RESERVED_IDENTIFIER_FIXUP_2313.y;
        _RESERVED_IDENTIFIER_FIXUP_3729.w = _RESERVED_IDENTIFIER_FIXUP_2266;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3729.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2266;
        float _RESERVED_IDENTIFIER_FIXUP_2335 = _RESERVED_IDENTIFIER_FIXUP_2306 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2335;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2342 = _RESERVED_IDENTIFIER_FIXUP_3699.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3742;
        _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2342.x;
        _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2342.y;
        _RESERVED_IDENTIFIER_FIXUP_3742.w = _RESERVED_IDENTIFIER_FIXUP_2266;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3742.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2266;
        float _RESERVED_IDENTIFIER_FIXUP_2364 = _RESERVED_IDENTIFIER_FIXUP_2335 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2364;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2371 = _RESERVED_IDENTIFIER_FIXUP_3699.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3755;
        _RESERVED_IDENTIFIER_FIXUP_3755.x = _RESERVED_IDENTIFIER_FIXUP_2371.x;
        _RESERVED_IDENTIFIER_FIXUP_3755.y = _RESERVED_IDENTIFIER_FIXUP_2371.y;
        _RESERVED_IDENTIFIER_FIXUP_3755.w = _RESERVED_IDENTIFIER_FIXUP_2266;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3755.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2266;
        float _RESERVED_IDENTIFIER_FIXUP_2393 = _RESERVED_IDENTIFIER_FIXUP_2364 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2393;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2400 = _RESERVED_IDENTIFIER_FIXUP_3699.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3768;
        _RESERVED_IDENTIFIER_FIXUP_3768.x = _RESERVED_IDENTIFIER_FIXUP_2400.x;
        _RESERVED_IDENTIFIER_FIXUP_3768.y = _RESERVED_IDENTIFIER_FIXUP_2400.y;
        _RESERVED_IDENTIFIER_FIXUP_3768.w = _RESERVED_IDENTIFIER_FIXUP_2266;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3768.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2266;
        float _RESERVED_IDENTIFIER_FIXUP_2422 = _RESERVED_IDENTIFIER_FIXUP_2393 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2422;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2429 = _RESERVED_IDENTIFIER_FIXUP_3699.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3781;
        _RESERVED_IDENTIFIER_FIXUP_3781.x = _RESERVED_IDENTIFIER_FIXUP_2429.x;
        _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2429.y;
        _RESERVED_IDENTIFIER_FIXUP_3781.w = _RESERVED_IDENTIFIER_FIXUP_2266;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3781.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2266;
        float _RESERVED_IDENTIFIER_FIXUP_2451 = _RESERVED_IDENTIFIER_FIXUP_2422 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2451;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2458 = _RESERVED_IDENTIFIER_FIXUP_3699.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3794;
        _RESERVED_IDENTIFIER_FIXUP_3794.x = _RESERVED_IDENTIFIER_FIXUP_2458.x;
        _RESERVED_IDENTIFIER_FIXUP_3794.y = _RESERVED_IDENTIFIER_FIXUP_2458.y;
        _RESERVED_IDENTIFIER_FIXUP_3794.w = _RESERVED_IDENTIFIER_FIXUP_2266;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3794.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2266;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2475 = hdLod5(param_68, param_69);
        float _RESERVED_IDENTIFIER_FIXUP_2480 = _RESERVED_IDENTIFIER_FIXUP_2451 + _RESERVED_IDENTIFIER_FIXUP_2475.x;
        _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2480;
        _RESERVED_IDENTIFIER_FIXUP_3699.x = _RESERVED_IDENTIFIER_FIXUP_2480 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3862 = _RESERVED_IDENTIFIER_FIXUP_2475;
        _RESERVED_IDENTIFIER_FIXUP_3859 = _RESERVED_IDENTIFIER_FIXUP_3699;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2493 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2493;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3863;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3860;
        if (_RESERVED_IDENTIFIER_FIXUP_2493 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2502 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2512 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2514 = _RESERVED_IDENTIFIER_FIXUP_2512.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3639 = _RESERVED_IDENTIFIER_FIXUP_3487;
            _RESERVED_IDENTIFIER_FIXUP_3639.y = _RESERVED_IDENTIFIER_FIXUP_2514;
            _RESERVED_IDENTIFIER_FIXUP_3639.z = _RESERVED_IDENTIFIER_FIXUP_2512.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2522 = _RESERVED_IDENTIFIER_FIXUP_3639.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3643;
            _RESERVED_IDENTIFIER_FIXUP_3643.x = _RESERVED_IDENTIFIER_FIXUP_2522.x;
            _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_2522.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2529 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2533 = _RESERVED_IDENTIFIER_FIXUP_2529.y;
            _RESERVED_IDENTIFIER_FIXUP_3643.w = _RESERVED_IDENTIFIER_FIXUP_2533;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2502.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2502.w;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3643.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2533;
            float _RESERVED_IDENTIFIER_FIXUP_2544 = hdLod6(param_70, param_71).x + hdLod6(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3881 = vec4(_RESERVED_IDENTIFIER_FIXUP_2223, _RESERVED_IDENTIFIER_FIXUP_2514, _RESERVED_IDENTIFIER_FIXUP_2512.y, _RESERVED_IDENTIFIER_FIXUP_2544);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2551 = _RESERVED_IDENTIFIER_FIXUP_3881.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3656;
            _RESERVED_IDENTIFIER_FIXUP_3656.x = _RESERVED_IDENTIFIER_FIXUP_2551.x;
            _RESERVED_IDENTIFIER_FIXUP_3656.y = _RESERVED_IDENTIFIER_FIXUP_2551.y;
            _RESERVED_IDENTIFIER_FIXUP_3656.w = _RESERVED_IDENTIFIER_FIXUP_2533;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3656.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2533;
            float _RESERVED_IDENTIFIER_FIXUP_2573 = _RESERVED_IDENTIFIER_FIXUP_2544 + hdLod6(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3881.w = _RESERVED_IDENTIFIER_FIXUP_2573;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2580 = _RESERVED_IDENTIFIER_FIXUP_3881.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3669;
            _RESERVED_IDENTIFIER_FIXUP_3669.x = _RESERVED_IDENTIFIER_FIXUP_2580.x;
            _RESERVED_IDENTIFIER_FIXUP_3669.y = _RESERVED_IDENTIFIER_FIXUP_2580.y;
            _RESERVED_IDENTIFIER_FIXUP_3669.w = _RESERVED_IDENTIFIER_FIXUP_2533;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3669.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2533;
            float _RESERVED_IDENTIFIER_FIXUP_2602 = _RESERVED_IDENTIFIER_FIXUP_2573 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3881.w = _RESERVED_IDENTIFIER_FIXUP_2602;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2609 = _RESERVED_IDENTIFIER_FIXUP_3881.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3682;
            _RESERVED_IDENTIFIER_FIXUP_3682.x = _RESERVED_IDENTIFIER_FIXUP_2609.x;
            _RESERVED_IDENTIFIER_FIXUP_3682.y = _RESERVED_IDENTIFIER_FIXUP_2609.y;
            _RESERVED_IDENTIFIER_FIXUP_3682.w = _RESERVED_IDENTIFIER_FIXUP_2533;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3682.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2533;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2626 = hdLod6(param_78, param_79);
            float _RESERVED_IDENTIFIER_FIXUP_2631 = _RESERVED_IDENTIFIER_FIXUP_2602 + _RESERVED_IDENTIFIER_FIXUP_2626.x;
            _RESERVED_IDENTIFIER_FIXUP_3881.y = _RESERVED_IDENTIFIER_FIXUP_2631;
            _RESERVED_IDENTIFIER_FIXUP_3881.x = _RESERVED_IDENTIFIER_FIXUP_2631 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3863 = _RESERVED_IDENTIFIER_FIXUP_2626;
            _RESERVED_IDENTIFIER_FIXUP_3860 = _RESERVED_IDENTIFIER_FIXUP_3881;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2644 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3504 = _RESERVED_IDENTIFIER_FIXUP_3487;
            _RESERVED_IDENTIFIER_FIXUP_3504.y = _RESERVED_IDENTIFIER_FIXUP_2644;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3864;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3861;
            if (_RESERVED_IDENTIFIER_FIXUP_2644 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2653 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2663 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2665 = _RESERVED_IDENTIFIER_FIXUP_2663.x;
                _RESERVED_IDENTIFIER_FIXUP_3504.y = _RESERVED_IDENTIFIER_FIXUP_2665;
                _RESERVED_IDENTIFIER_FIXUP_3504.z = _RESERVED_IDENTIFIER_FIXUP_2663.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2673 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3583;
                _RESERVED_IDENTIFIER_FIXUP_3583.x = _RESERVED_IDENTIFIER_FIXUP_2673.x;
                _RESERVED_IDENTIFIER_FIXUP_3583.y = _RESERVED_IDENTIFIER_FIXUP_2673.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2680 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2684 = _RESERVED_IDENTIFIER_FIXUP_2680.y;
                _RESERVED_IDENTIFIER_FIXUP_3583.w = _RESERVED_IDENTIFIER_FIXUP_2684;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2653.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2653.w;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3583.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2684;
                float _RESERVED_IDENTIFIER_FIXUP_2695 = hdLod7(param_80, param_81).x + hdLod7(param_82, param_83).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3880 = vec4(_RESERVED_IDENTIFIER_FIXUP_2223, _RESERVED_IDENTIFIER_FIXUP_2665, _RESERVED_IDENTIFIER_FIXUP_2663.y, _RESERVED_IDENTIFIER_FIXUP_2695);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2702 = _RESERVED_IDENTIFIER_FIXUP_3880.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3596;
                _RESERVED_IDENTIFIER_FIXUP_3596.x = _RESERVED_IDENTIFIER_FIXUP_2702.x;
                _RESERVED_IDENTIFIER_FIXUP_3596.y = _RESERVED_IDENTIFIER_FIXUP_2702.y;
                _RESERVED_IDENTIFIER_FIXUP_3596.w = _RESERVED_IDENTIFIER_FIXUP_2684;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3596.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2684;
                float _RESERVED_IDENTIFIER_FIXUP_2724 = _RESERVED_IDENTIFIER_FIXUP_2695 + hdLod7(param_84, param_85).x;
                _RESERVED_IDENTIFIER_FIXUP_3880.w = _RESERVED_IDENTIFIER_FIXUP_2724;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2731 = _RESERVED_IDENTIFIER_FIXUP_3880.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3609;
                _RESERVED_IDENTIFIER_FIXUP_3609.x = _RESERVED_IDENTIFIER_FIXUP_2731.x;
                _RESERVED_IDENTIFIER_FIXUP_3609.y = _RESERVED_IDENTIFIER_FIXUP_2731.y;
                _RESERVED_IDENTIFIER_FIXUP_3609.w = _RESERVED_IDENTIFIER_FIXUP_2684;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3609.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2684;
                float _RESERVED_IDENTIFIER_FIXUP_2753 = _RESERVED_IDENTIFIER_FIXUP_2724 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3880.w = _RESERVED_IDENTIFIER_FIXUP_2753;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2760 = _RESERVED_IDENTIFIER_FIXUP_3880.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3622;
                _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2760.x;
                _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2760.y;
                _RESERVED_IDENTIFIER_FIXUP_3622.w = _RESERVED_IDENTIFIER_FIXUP_2684;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3622.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2684;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2777 = hdLod7(param_88, param_89);
                float _RESERVED_IDENTIFIER_FIXUP_2782 = _RESERVED_IDENTIFIER_FIXUP_2753 + _RESERVED_IDENTIFIER_FIXUP_2777.x;
                _RESERVED_IDENTIFIER_FIXUP_3880.y = _RESERVED_IDENTIFIER_FIXUP_2782;
                _RESERVED_IDENTIFIER_FIXUP_3880.x = _RESERVED_IDENTIFIER_FIXUP_2782 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3864 = _RESERVED_IDENTIFIER_FIXUP_2777;
                _RESERVED_IDENTIFIER_FIXUP_3861 = _RESERVED_IDENTIFIER_FIXUP_3880;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2798 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2802 = _RESERVED_IDENTIFIER_FIXUP_2798.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2813 = vec4(_RESERVED_IDENTIFIER_FIXUP_2798.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2802).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3877 = vec4(_RESERVED_IDENTIFIER_FIXUP_2813 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2802);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2850 = _RESERVED_IDENTIFIER_FIXUP_2813 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3537 = _RESERVED_IDENTIFIER_FIXUP_3877;
                _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_2850.x;
                _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_2850.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2872 = _RESERVED_IDENTIFIER_FIXUP_2813 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3546 = _RESERVED_IDENTIFIER_FIXUP_3537;
                _RESERVED_IDENTIFIER_FIXUP_3546.x = _RESERVED_IDENTIFIER_FIXUP_2872.x;
                _RESERVED_IDENTIFIER_FIXUP_3546.y = _RESERVED_IDENTIFIER_FIXUP_2872.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2894 = _RESERVED_IDENTIFIER_FIXUP_2813 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3555 = _RESERVED_IDENTIFIER_FIXUP_3546;
                _RESERVED_IDENTIFIER_FIXUP_3555.x = _RESERVED_IDENTIFIER_FIXUP_2894.x;
                _RESERVED_IDENTIFIER_FIXUP_3555.y = _RESERVED_IDENTIFIER_FIXUP_2894.y;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3555.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2802;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2904 = hdLod8(param_90, param_91);
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_2813;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2802;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3877.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2802;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3537.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2802;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3546.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2802;
                float _RESERVED_IDENTIFIER_FIXUP_2909 = (((hdLod8(param_92, param_93).x + hdLod8(param_94, param_95).x) + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + _RESERVED_IDENTIFIER_FIXUP_2904.x;
                float _RESERVED_IDENTIFIER_FIXUP_2917 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3566 = _RESERVED_IDENTIFIER_FIXUP_2904;
                _RESERVED_IDENTIFIER_FIXUP_3566.x = _RESERVED_IDENTIFIER_FIXUP_2917;
                float _RESERVED_IDENTIFIER_FIXUP_2923 = clamp((_RESERVED_IDENTIFIER_FIXUP_2917 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2928 = (_RESERVED_IDENTIFIER_FIXUP_2909 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3864 = _RESERVED_IDENTIFIER_FIXUP_3566;
                _RESERVED_IDENTIFIER_FIXUP_3861 = vec4((_RESERVED_IDENTIFIER_FIXUP_2923 * _RESERVED_IDENTIFIER_FIXUP_2928) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2923, _RESERVED_IDENTIFIER_FIXUP_2928, _RESERVED_IDENTIFIER_FIXUP_2909);
            }
            _RESERVED_IDENTIFIER_FIXUP_3863 = _RESERVED_IDENTIFIER_FIXUP_3864;
            _RESERVED_IDENTIFIER_FIXUP_3860 = _RESERVED_IDENTIFIER_FIXUP_3861;
        }
        _RESERVED_IDENTIFIER_FIXUP_3862 = _RESERVED_IDENTIFIER_FIXUP_3863;
        _RESERVED_IDENTIFIER_FIXUP_3859 = _RESERVED_IDENTIFIER_FIXUP_3860;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2943 = (_RESERVED_IDENTIFIER_FIXUP_3859.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3811 = _RESERVED_IDENTIFIER_FIXUP_3859;
    _RESERVED_IDENTIFIER_FIXUP_3811.y = _RESERVED_IDENTIFIER_FIXUP_2943;
    _RESERVED_IDENTIFIER_FIXUP_3811.y = _RESERVED_IDENTIFIER_FIXUP_2943;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2956 = _RESERVED_IDENTIFIER_FIXUP_2204.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3817 = _RESERVED_IDENTIFIER_FIXUP_3862;
    _RESERVED_IDENTIFIER_FIXUP_3817.x = _RESERVED_IDENTIFIER_FIXUP_2956.x;
    _RESERVED_IDENTIFIER_FIXUP_3817.y = _RESERVED_IDENTIFIER_FIXUP_2956.y;
    _RESERVED_IDENTIFIER_FIXUP_3817.z = _RESERVED_IDENTIFIER_FIXUP_2956.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2967 = _RESERVED_IDENTIFIER_FIXUP_3811.xxx * _RESERVED_IDENTIFIER_FIXUP_3817.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3882 = vec4(_RESERVED_IDENTIFIER_FIXUP_2967.x, _RESERVED_IDENTIFIER_FIXUP_2943, _RESERVED_IDENTIFIER_FIXUP_2967.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2981 = (_RESERVED_IDENTIFIER_FIXUP_2204.xyz * _RESERVED_IDENTIFIER_FIXUP_3882.yyy) + _RESERVED_IDENTIFIER_FIXUP_3882.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3829 = _RESERVED_IDENTIFIER_FIXUP_3882;
    _RESERVED_IDENTIFIER_FIXUP_3829.x = _RESERVED_IDENTIFIER_FIXUP_2981.x;
    _RESERVED_IDENTIFIER_FIXUP_3829.y = _RESERVED_IDENTIFIER_FIXUP_2981.y;
    _RESERVED_IDENTIFIER_FIXUP_3829.z = _RESERVED_IDENTIFIER_FIXUP_2981.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2994 = _RESERVED_IDENTIFIER_FIXUP_3829.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3835 = _RESERVED_IDENTIFIER_FIXUP_3829;
    _RESERVED_IDENTIFIER_FIXUP_3835.x = _RESERVED_IDENTIFIER_FIXUP_2994.x;
    _RESERVED_IDENTIFIER_FIXUP_3835.y = _RESERVED_IDENTIFIER_FIXUP_2994.y;
    _RESERVED_IDENTIFIER_FIXUP_3835.z = _RESERVED_IDENTIFIER_FIXUP_2994.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3835.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1055 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1064;
    if (_RESERVED_IDENTIFIER_FIXUP_1055)
    {
        _RESERVED_IDENTIFIER_FIXUP_1064 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1064 = _RESERVED_IDENTIFIER_FIXUP_1055;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1064)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1101 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3437.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1127 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3047;
    if (_RESERVED_IDENTIFIER_FIXUP_1101 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3047 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1101), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1127);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3047 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1127);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3047;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2943);
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
    r2.y = hdB84.x;
    r2.z = hdB84.y;
    vec3 hdB96 = v0.xyz + v0.xyz;
    r3.x = hdB96.x;
    r3.y = hdB96.y;
    r3.z = hdB96.z;
    vec3 hdB108 = r0.xyz * r3.xyz;
    r4.x = hdB108.x;
    r4.y = hdB108.y;
    r4.z = hdB108.z;
    vec4 hdB117 = r0;
    vec3 hdB126 = mix(r4.xyz, hdB117.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = hdB126.x;
    r0.y = hdB126.y;
    r0.z = hdB126.z;
    vec4 hdB135 = r3;
    vec3 hdB137 = r1.xyz * hdB135.xyz;
    r3.x = hdB137.x;
    r3.y = hdB137.y;
    r3.z = hdB137.z;
    vec4 hdB146 = r1;
    vec3 hdB152 = mix(r3.xyz, hdB146.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = hdB152.x;
    r1.y = hdB152.y;
    r1.z = hdB152.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r0.xy;
        float param_3 = r0.w;
        r0 = hdLod5(param_2, param_3);
        vec2 hdB214 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB214.x;
        r0.z = hdB214.y;
        vec2 hdB225 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB225.x;
        r1.y = hdB225.y;
        vec2 hdB233 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB233.x;
        r1.w = hdB233.y;
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
        r0.x += r1.x;
        vec2 hdB256 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r1.x = hdB256.x;
        r1.y = hdB256.y;
        vec2 hdB263 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB263.x;
        r1.w = hdB263.y;
        vec2 param_6 = r1.xy;
        float param_7 = r1.w;
        r1 = hdLod5(param_6, param_7);
        r0.x += r1.x;
        vec2 hdB286 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB286.x;
        r1.y = hdB286.y;
        vec2 hdB293 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB293.x;
        r1.w = hdB293.y;
        vec2 param_8 = r1.xy;
        float param_9 = r1.w;
        r1 = hdLod5(param_8, param_9);
        r0.x += r1.x;
        vec2 hdB316 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r1.x = hdB316.x;
        r1.y = hdB316.y;
        vec2 hdB323 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB323.x;
        r1.w = hdB323.y;
        vec2 param_10 = r1.xy;
        float param_11 = r1.w;
        r1 = hdLod5(param_10, param_11);
        r0.x += r1.x;
        vec2 hdB346 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB346.x;
        r1.y = hdB346.y;
        vec2 hdB353 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB353.x;
        r1.w = hdB353.y;
        vec2 param_12 = r1.xy;
        float param_13 = r1.w;
        r1 = hdLod5(param_12, param_13);
        r0.x += r1.x;
        vec2 hdB376 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r1.x = hdB376.x;
        r1.y = hdB376.y;
        vec2 hdB383 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB383.x;
        r1.w = hdB383.y;
        vec2 param_14 = r1.xy;
        float param_15 = r1.w;
        r1 = hdLod5(param_14, param_15);
        r0.x += r1.x;
        vec2 hdB406 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB406.x;
        r1.y = hdB406.y;
        vec2 hdB413 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB413.x;
        r1.w = hdB413.y;
        vec2 param_16 = r1.xy;
        float param_17 = r1.w;
        r1 = hdLod5(param_16, param_17);
        r0.x += r1.x;
        vec2 hdB436 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB436.x;
        r1.y = hdB436.y;
        vec2 hdB443 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB443.x;
        r1.w = hdB443.y;
        vec2 param_18 = r1.xy;
        float param_19 = r1.w;
        r1 = hdLod5(param_18, param_19);
        r0.x += r1.x;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = r1.xy;
            float param_21 = r1.w;
            r1 = hdLod6(param_20, param_21);
            vec2 hdB493 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB493.x;
            r0.z = hdB493.y;
            vec2 hdB503 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB503.x;
            r2.y = hdB503.y;
            vec2 hdB510 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB510.x;
            r2.w = hdB510.y;
            vec2 param_22 = r2.xy;
            float param_23 = r2.w;
            r2 = hdLod6(param_22, param_23);
            r0.w = r1.x + r2.x;
            vec2 hdB532 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r1.x = hdB532.x;
            r1.y = hdB532.y;
            vec2 hdB539 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB539.x;
            r1.w = hdB539.y;
            vec2 param_24 = r1.xy;
            float param_25 = r1.w;
            r1 = hdLod6(param_24, param_25);
            r0.w += r1.x;
            vec2 hdB561 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r1.x = hdB561.x;
            r1.y = hdB561.y;
            vec2 hdB568 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB568.x;
            r1.w = hdB568.y;
            vec2 param_26 = r1.xy;
            float param_27 = r1.w;
            r1 = hdLod6(param_26, param_27);
            r0.w += r1.x;
            vec2 hdB590 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r1.x = hdB590.x;
            r1.y = hdB590.y;
            vec2 hdB597 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB597.x;
            r1.w = hdB597.y;
            vec2 param_28 = r1.xy;
            float param_29 = r1.w;
            r1 = hdLod6(param_28, param_29);
            r0.y = r0.w + r1.x;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = r1.xy;
                float param_31 = r1.w;
                r1 = hdLod7(param_30, param_31);
                vec2 hdB647 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB647.x;
                r0.z = hdB647.y;
                vec2 hdB657 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB657.x;
                r2.y = hdB657.y;
                vec2 hdB664 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB664.x;
                r2.w = hdB664.y;
                vec2 param_32 = r2.xy;
                float param_33 = r2.w;
                r2 = hdLod7(param_32, param_33);
                r0.w = r1.x + r2.x;
                vec2 hdB686 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r1.x = hdB686.x;
                r1.y = hdB686.y;
                vec2 hdB693 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB693.x;
                r1.w = hdB693.y;
                vec2 param_34 = r1.xy;
                float param_35 = r1.w;
                r1 = hdLod7(param_34, param_35);
                r0.w += r1.x;
                vec2 hdB715 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r1.x = hdB715.x;
                r1.y = hdB715.y;
                vec2 hdB722 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB722.x;
                r1.w = hdB722.y;
                vec2 param_36 = r1.xy;
                float param_37 = r1.w;
                r1 = hdLod7(param_36, param_37);
                r0.w += r1.x;
                vec2 hdB744 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r1.x = hdB744.x;
                r1.y = hdB744.y;
                vec2 hdB751 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB751.x;
                r1.w = hdB751.y;
                vec2 param_38 = r1.xy;
                float param_39 = r1.w;
                r1 = hdLod7(param_38, param_39);
                r0.y = r0.w + r1.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v4.w;
                r0.z = v5.w;
                vec2 hdB783 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r1.x = hdB783.x;
                r1.w = hdB783.y;
                r1.y = (v5.w * 0.5) + 0.5;
                r1.z = v6.w;
                vec2 param_40 = r1.xy;
                float param_41 = r1.w;
                r2 = hdLod8(param_40, param_41);
                vec2 hdB808 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB808.x;
                r4.y = hdB808.y;
                r4.z = r1.z;
                r4.w = r1.w;
                vec2 param_42 = r4.xy;
                float param_43 = r4.w;
                r5 = hdLod8(param_42, param_43);
                r0.w = r2.x + r5.x;
                vec2 hdB836 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB836.x;
                r4.y = hdB836.y;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r2 = hdLod8(param_44, param_45);
                r0.w += r2.x;
                vec2 hdB858 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB858.x;
                r4.y = hdB858.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r2 = hdLod8(param_46, param_47);
                r0.w += r2.x;
                vec2 hdB880 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB880.x;
                r4.y = hdB880.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r1 = hdLod8(param_48, param_49);
                r0.w += r1.x;
                r1.x = max(abs(r0.y), abs(r0.z));
                r0.y = clamp((r1.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.z = (r0.w * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.y * r0.z) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB937 = r3.www * v1.xyz;
    r1.x = hdB937.x;
    r1.y = hdB937.y;
    r1.z = hdB937.z;
    vec4 hdB944 = r0;
    vec3 hdB948 = hdB944.xxx * r1.xyz;
    r0.x = hdB948.x;
    r0.z = hdB948.y;
    r0.w = hdB948.z;
    vec4 hdB957 = r0;
    vec4 hdB960 = r0;
    vec3 hdB962 = (r3.xyz * hdB957.yyy) + hdB960.xzw;
    r0.x = hdB962.x;
    r0.y = hdB962.y;
    r0.z = hdB962.z;
    vec4 hdB969 = r0;
    vec3 hdB976 = hdB969.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB976.x;
    r0.y = hdB976.y;
    r0.z = hdB976.z;
    vec3 hdB991 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB991.x;
    oC0.y = hdB991.y;
    oC0.z = hdB991.z;
    oC0.w = 1.0;
    bool hdB1003 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1011;
    if (hdB1003)
    {
        hdB1011 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1011 = hdB1003;
    }
    if (hdB1011)
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
    bool _3549 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3559;
    if (_3549)
    {
        _3559 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3559 = _3549;
    }
    if (_3559)
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
        bool _3584 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3599;
        if (!_3584)
        {
            _3599 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3599 = _3584;
        }
        if (_3599)
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
