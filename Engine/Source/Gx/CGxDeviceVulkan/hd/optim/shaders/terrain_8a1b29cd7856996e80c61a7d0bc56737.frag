#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

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
float _RESERVED_IDENTIFIER_FIXUP_3751;
vec4 _RESERVED_IDENTIFIER_FIXUP_3752;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
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
    bool _58 = hdOverride >= 0;
    bool _78;
    if (_58)
    {
        _78 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _78 = _58;
    }
    vec4 _79;
    if (_78)
    {
        _79 = vec4(float(hdOverride));
    }
    else
    {
        _79 = value;
    }
    return _79;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _96 = hdOverride >= 0;
    bool _105;
    if (_96)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _105 = _96;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1165 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1169 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1172 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_1169.w = _RESERVED_IDENTIFIER_FIXUP_1172;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1175 = _RESERVED_IDENTIFIER_FIXUP_1165.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1178 = _RESERVED_IDENTIFIER_FIXUP_1175 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3751).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2978 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1178.x;
    _RESERVED_IDENTIFIER_FIXUP_2978.y = _RESERVED_IDENTIFIER_FIXUP_1178.y;
    _RESERVED_IDENTIFIER_FIXUP_2978.z = _RESERVED_IDENTIFIER_FIXUP_1178.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1189 = _RESERVED_IDENTIFIER_FIXUP_2978.xyz + _RESERVED_IDENTIFIER_FIXUP_2978.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2984 = _RESERVED_IDENTIFIER_FIXUP_2978;
    _RESERVED_IDENTIFIER_FIXUP_2984.x = _RESERVED_IDENTIFIER_FIXUP_1189.x;
    _RESERVED_IDENTIFIER_FIXUP_2984.y = _RESERVED_IDENTIFIER_FIXUP_1189.y;
    _RESERVED_IDENTIFIER_FIXUP_2984.z = _RESERVED_IDENTIFIER_FIXUP_1189.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1204 = mix(_RESERVED_IDENTIFIER_FIXUP_2984.xyz, _RESERVED_IDENTIFIER_FIXUP_1175, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1169.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2990 = _RESERVED_IDENTIFIER_FIXUP_1165;
    _RESERVED_IDENTIFIER_FIXUP_2990.x = _RESERVED_IDENTIFIER_FIXUP_1204.x;
    _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1204.y;
    _RESERVED_IDENTIFIER_FIXUP_2990.z = _RESERVED_IDENTIFIER_FIXUP_1204.z;
    float _RESERVED_IDENTIFIER_FIXUP_1214 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1169.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2996 = _RESERVED_IDENTIFIER_FIXUP_1169;
    _RESERVED_IDENTIFIER_FIXUP_2996.x = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_2996.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1214;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1224 = _RESERVED_IDENTIFIER_FIXUP_2990 * _RESERVED_IDENTIFIER_FIXUP_2996.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_1231 = max(abs(texcoord4.x), abs(texcoord4.y));
    float _RESERVED_IDENTIFIER_FIXUP_1243 = ((-clamp((_RESERVED_IDENTIFIER_FIXUP_1231 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0)) >= 0.0) ? 0.0 : 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3756;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3753;
    if (_RESERVED_IDENTIFIER_FIXUP_1243 != (-_RESERVED_IDENTIFIER_FIXUP_1243))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1255 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1255.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1255.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1261 = hdLod5(param_2, param_3);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1265 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3215 = _RESERVED_IDENTIFIER_FIXUP_1261;
        _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_1265.x;
        _RESERVED_IDENTIFIER_FIXUP_3215.z = _RESERVED_IDENTIFIER_FIXUP_1265.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3219;
        _RESERVED_IDENTIFIER_FIXUP_3219.x = _RESERVED_IDENTIFIER_FIXUP_1275.x;
        _RESERVED_IDENTIFIER_FIXUP_3219.y = _RESERVED_IDENTIFIER_FIXUP_1275.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1282 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_1282.y;
        _RESERVED_IDENTIFIER_FIXUP_3219.w = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3219.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1286;
        float _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_1261.x + hdLod5(param_4, param_5).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1297;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1304 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3232;
        _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_1304.x;
        _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_1304.y;
        _RESERVED_IDENTIFIER_FIXUP_3232.w = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3232.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1286;
        float _RESERVED_IDENTIFIER_FIXUP_1326 = _RESERVED_IDENTIFIER_FIXUP_1297 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1326;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1333 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3245;
        _RESERVED_IDENTIFIER_FIXUP_3245.x = _RESERVED_IDENTIFIER_FIXUP_1333.x;
        _RESERVED_IDENTIFIER_FIXUP_3245.y = _RESERVED_IDENTIFIER_FIXUP_1333.y;
        _RESERVED_IDENTIFIER_FIXUP_3245.w = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3245.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1286;
        float _RESERVED_IDENTIFIER_FIXUP_1355 = _RESERVED_IDENTIFIER_FIXUP_1326 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1355;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3258;
        _RESERVED_IDENTIFIER_FIXUP_3258.x = _RESERVED_IDENTIFIER_FIXUP_1362.x;
        _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_1362.y;
        _RESERVED_IDENTIFIER_FIXUP_3258.w = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3258.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1286;
        float _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_1355 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1384;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3271;
        _RESERVED_IDENTIFIER_FIXUP_3271.x = _RESERVED_IDENTIFIER_FIXUP_1391.x;
        _RESERVED_IDENTIFIER_FIXUP_3271.y = _RESERVED_IDENTIFIER_FIXUP_1391.y;
        _RESERVED_IDENTIFIER_FIXUP_3271.w = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3271.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1286;
        float _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_1384 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1413;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3284;
        _RESERVED_IDENTIFIER_FIXUP_3284.x = _RESERVED_IDENTIFIER_FIXUP_1420.x;
        _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_1420.y;
        _RESERVED_IDENTIFIER_FIXUP_3284.w = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3284.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1286;
        float _RESERVED_IDENTIFIER_FIXUP_1442 = _RESERVED_IDENTIFIER_FIXUP_1413 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1442;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3297;
        _RESERVED_IDENTIFIER_FIXUP_3297.x = _RESERVED_IDENTIFIER_FIXUP_1449.x;
        _RESERVED_IDENTIFIER_FIXUP_3297.y = _RESERVED_IDENTIFIER_FIXUP_1449.y;
        _RESERVED_IDENTIFIER_FIXUP_3297.w = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3297.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1286;
        float _RESERVED_IDENTIFIER_FIXUP_1471 = _RESERVED_IDENTIFIER_FIXUP_1442 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1471;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1478 = _RESERVED_IDENTIFIER_FIXUP_3215.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
        _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_1478.x;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_1478.y;
        _RESERVED_IDENTIFIER_FIXUP_3310.w = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3310.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1286;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1495 = hdLod5(param_18, param_19);
        float _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_1471 + _RESERVED_IDENTIFIER_FIXUP_1495.x;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1500;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1500 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3756 = _RESERVED_IDENTIFIER_FIXUP_1495;
        _RESERVED_IDENTIFIER_FIXUP_3753 = _RESERVED_IDENTIFIER_FIXUP_3215;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3757;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3754;
        if (max(abs(texcoord5.x), abs(texcoord5.y)) < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1522 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3782 = vec4(_RESERVED_IDENTIFIER_FIXUP_1243, (texcoord5.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1172);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1542 = _RESERVED_IDENTIFIER_FIXUP_3782.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3159;
            _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1542.x;
            _RESERVED_IDENTIFIER_FIXUP_3159.y = _RESERVED_IDENTIFIER_FIXUP_1542.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1549 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1553 = _RESERVED_IDENTIFIER_FIXUP_1549.y;
            _RESERVED_IDENTIFIER_FIXUP_3159.w = _RESERVED_IDENTIFIER_FIXUP_1553;
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1522.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1522.w;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3159.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1553;
            float _RESERVED_IDENTIFIER_FIXUP_1564 = hdLod6(param_20, param_21).x + hdLod6(param_22, param_23).x;
            _RESERVED_IDENTIFIER_FIXUP_3782.w = _RESERVED_IDENTIFIER_FIXUP_1564;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_3782.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3172;
            _RESERVED_IDENTIFIER_FIXUP_3172.x = _RESERVED_IDENTIFIER_FIXUP_1571.x;
            _RESERVED_IDENTIFIER_FIXUP_3172.y = _RESERVED_IDENTIFIER_FIXUP_1571.y;
            _RESERVED_IDENTIFIER_FIXUP_3172.w = _RESERVED_IDENTIFIER_FIXUP_1553;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3172.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1553;
            float _RESERVED_IDENTIFIER_FIXUP_1593 = _RESERVED_IDENTIFIER_FIXUP_1564 + hdLod6(param_24, param_25).x;
            _RESERVED_IDENTIFIER_FIXUP_3782.w = _RESERVED_IDENTIFIER_FIXUP_1593;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1600 = _RESERVED_IDENTIFIER_FIXUP_3782.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3185;
            _RESERVED_IDENTIFIER_FIXUP_3185.x = _RESERVED_IDENTIFIER_FIXUP_1600.x;
            _RESERVED_IDENTIFIER_FIXUP_3185.y = _RESERVED_IDENTIFIER_FIXUP_1600.y;
            _RESERVED_IDENTIFIER_FIXUP_3185.w = _RESERVED_IDENTIFIER_FIXUP_1553;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3185.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1553;
            float _RESERVED_IDENTIFIER_FIXUP_1622 = _RESERVED_IDENTIFIER_FIXUP_1593 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_3782.w = _RESERVED_IDENTIFIER_FIXUP_1622;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_3782.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3198;
            _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_1629.x;
            _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1629.y;
            _RESERVED_IDENTIFIER_FIXUP_3198.w = _RESERVED_IDENTIFIER_FIXUP_1553;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3198.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1553;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1646 = hdLod6(param_28, param_29);
            float _RESERVED_IDENTIFIER_FIXUP_1651 = _RESERVED_IDENTIFIER_FIXUP_1622 + _RESERVED_IDENTIFIER_FIXUP_1646.x;
            _RESERVED_IDENTIFIER_FIXUP_3782.y = _RESERVED_IDENTIFIER_FIXUP_1651;
            _RESERVED_IDENTIFIER_FIXUP_3782.x = _RESERVED_IDENTIFIER_FIXUP_1651 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3757 = _RESERVED_IDENTIFIER_FIXUP_1646;
            _RESERVED_IDENTIFIER_FIXUP_3754 = _RESERVED_IDENTIFIER_FIXUP_3782;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3758;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3755;
            if (max(abs(texcoord6.x), abs(texcoord6.y)) < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1673 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3781 = vec4(_RESERVED_IDENTIFIER_FIXUP_1243, (texcoord6.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1172);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1693 = _RESERVED_IDENTIFIER_FIXUP_3781.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3099;
                _RESERVED_IDENTIFIER_FIXUP_3099.x = _RESERVED_IDENTIFIER_FIXUP_1693.x;
                _RESERVED_IDENTIFIER_FIXUP_3099.y = _RESERVED_IDENTIFIER_FIXUP_1693.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1700 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_1700.y;
                _RESERVED_IDENTIFIER_FIXUP_3099.w = _RESERVED_IDENTIFIER_FIXUP_1704;
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1673.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1673.w;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3099.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1704;
                float _RESERVED_IDENTIFIER_FIXUP_1715 = hdLod7(param_30, param_31).x + hdLod7(param_32, param_33).x;
                _RESERVED_IDENTIFIER_FIXUP_3781.w = _RESERVED_IDENTIFIER_FIXUP_1715;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1722 = _RESERVED_IDENTIFIER_FIXUP_3781.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3112;
                _RESERVED_IDENTIFIER_FIXUP_3112.x = _RESERVED_IDENTIFIER_FIXUP_1722.x;
                _RESERVED_IDENTIFIER_FIXUP_3112.y = _RESERVED_IDENTIFIER_FIXUP_1722.y;
                _RESERVED_IDENTIFIER_FIXUP_3112.w = _RESERVED_IDENTIFIER_FIXUP_1704;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3112.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1704;
                float _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_1715 + hdLod7(param_34, param_35).x;
                _RESERVED_IDENTIFIER_FIXUP_3781.w = _RESERVED_IDENTIFIER_FIXUP_1744;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1751 = _RESERVED_IDENTIFIER_FIXUP_3781.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3125;
                _RESERVED_IDENTIFIER_FIXUP_3125.x = _RESERVED_IDENTIFIER_FIXUP_1751.x;
                _RESERVED_IDENTIFIER_FIXUP_3125.y = _RESERVED_IDENTIFIER_FIXUP_1751.y;
                _RESERVED_IDENTIFIER_FIXUP_3125.w = _RESERVED_IDENTIFIER_FIXUP_1704;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3125.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1704;
                float _RESERVED_IDENTIFIER_FIXUP_1773 = _RESERVED_IDENTIFIER_FIXUP_1744 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_3781.w = _RESERVED_IDENTIFIER_FIXUP_1773;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1780 = _RESERVED_IDENTIFIER_FIXUP_3781.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3138;
                _RESERVED_IDENTIFIER_FIXUP_3138.x = _RESERVED_IDENTIFIER_FIXUP_1780.x;
                _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_1780.y;
                _RESERVED_IDENTIFIER_FIXUP_3138.w = _RESERVED_IDENTIFIER_FIXUP_1704;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3138.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1704;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1797 = hdLod7(param_38, param_39);
                float _RESERVED_IDENTIFIER_FIXUP_1802 = _RESERVED_IDENTIFIER_FIXUP_1773 + _RESERVED_IDENTIFIER_FIXUP_1797.x;
                _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_1802;
                _RESERVED_IDENTIFIER_FIXUP_3781.x = _RESERVED_IDENTIFIER_FIXUP_1802 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3758 = _RESERVED_IDENTIFIER_FIXUP_1797;
                _RESERVED_IDENTIFIER_FIXUP_3755 = _RESERVED_IDENTIFIER_FIXUP_3781;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1818 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1822 = _RESERVED_IDENTIFIER_FIXUP_1818.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1833 = vec4(_RESERVED_IDENTIFIER_FIXUP_1818.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1822).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3779 = vec4(_RESERVED_IDENTIFIER_FIXUP_1833 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1822);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1870 = _RESERVED_IDENTIFIER_FIXUP_1833 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3053 = _RESERVED_IDENTIFIER_FIXUP_3779;
                _RESERVED_IDENTIFIER_FIXUP_3053.x = _RESERVED_IDENTIFIER_FIXUP_1870.x;
                _RESERVED_IDENTIFIER_FIXUP_3053.y = _RESERVED_IDENTIFIER_FIXUP_1870.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1892 = _RESERVED_IDENTIFIER_FIXUP_1833 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3062 = _RESERVED_IDENTIFIER_FIXUP_3053;
                _RESERVED_IDENTIFIER_FIXUP_3062.x = _RESERVED_IDENTIFIER_FIXUP_1892.x;
                _RESERVED_IDENTIFIER_FIXUP_3062.y = _RESERVED_IDENTIFIER_FIXUP_1892.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1914 = _RESERVED_IDENTIFIER_FIXUP_1833 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3071 = _RESERVED_IDENTIFIER_FIXUP_3062;
                _RESERVED_IDENTIFIER_FIXUP_3071.x = _RESERVED_IDENTIFIER_FIXUP_1914.x;
                _RESERVED_IDENTIFIER_FIXUP_3071.y = _RESERVED_IDENTIFIER_FIXUP_1914.y;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3071.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1822;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1924 = hdLod8(param_40, param_41);
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_1833;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1822;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3779.xy;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1822;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3053.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1822;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3062.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1822;
                float _RESERVED_IDENTIFIER_FIXUP_1929 = (((hdLod8(param_42, param_43).x + hdLod8(param_44, param_45).x) + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + _RESERVED_IDENTIFIER_FIXUP_1924.x;
                float _RESERVED_IDENTIFIER_FIXUP_1937 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3082 = _RESERVED_IDENTIFIER_FIXUP_1924;
                _RESERVED_IDENTIFIER_FIXUP_3082.x = _RESERVED_IDENTIFIER_FIXUP_1937;
                float _RESERVED_IDENTIFIER_FIXUP_1943 = clamp((_RESERVED_IDENTIFIER_FIXUP_1937 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1948 = (_RESERVED_IDENTIFIER_FIXUP_1929 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3758 = _RESERVED_IDENTIFIER_FIXUP_3082;
                _RESERVED_IDENTIFIER_FIXUP_3755 = vec4((_RESERVED_IDENTIFIER_FIXUP_1943 * _RESERVED_IDENTIFIER_FIXUP_1948) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1943, _RESERVED_IDENTIFIER_FIXUP_1948, _RESERVED_IDENTIFIER_FIXUP_1929);
            }
            _RESERVED_IDENTIFIER_FIXUP_3757 = _RESERVED_IDENTIFIER_FIXUP_3758;
            _RESERVED_IDENTIFIER_FIXUP_3754 = _RESERVED_IDENTIFIER_FIXUP_3755;
        }
        _RESERVED_IDENTIFIER_FIXUP_3756 = _RESERVED_IDENTIFIER_FIXUP_3757;
        _RESERVED_IDENTIFIER_FIXUP_3753 = _RESERVED_IDENTIFIER_FIXUP_3754;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3329 = _RESERVED_IDENTIFIER_FIXUP_3753;
    _RESERVED_IDENTIFIER_FIXUP_3329.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3331 = _RESERVED_IDENTIFIER_FIXUP_3756;
    _RESERVED_IDENTIFIER_FIXUP_3331.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3331.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3331.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_3329.xxx * _RESERVED_IDENTIFIER_FIXUP_3331.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3783 = vec4(_RESERVED_IDENTIFIER_FIXUP_1987.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_1987.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2001 = (_RESERVED_IDENTIFIER_FIXUP_1224.xyz * _RESERVED_IDENTIFIER_FIXUP_3783.yyy) + _RESERVED_IDENTIFIER_FIXUP_3783.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3343 = _RESERVED_IDENTIFIER_FIXUP_1224;
    _RESERVED_IDENTIFIER_FIXUP_3343.x = _RESERVED_IDENTIFIER_FIXUP_2001.x;
    _RESERVED_IDENTIFIER_FIXUP_3343.y = _RESERVED_IDENTIFIER_FIXUP_2001.y;
    _RESERVED_IDENTIFIER_FIXUP_3343.z = _RESERVED_IDENTIFIER_FIXUP_2001.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2014 = _RESERVED_IDENTIFIER_FIXUP_3343.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3349 = _RESERVED_IDENTIFIER_FIXUP_3343;
    _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_2014.x;
    _RESERVED_IDENTIFIER_FIXUP_3349.y = _RESERVED_IDENTIFIER_FIXUP_2014.y;
    _RESERVED_IDENTIFIER_FIXUP_3349.z = _RESERVED_IDENTIFIER_FIXUP_2014.z;
    vec2 param_50 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2067 = hdTex0(param_50);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2071 = hdTex1(param_51);
    _RESERVED_IDENTIFIER_FIXUP_2071.w = _RESERVED_IDENTIFIER_FIXUP_1172;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2077 = _RESERVED_IDENTIFIER_FIXUP_2067.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2080 = _RESERVED_IDENTIFIER_FIXUP_2077 * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3365 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3365.x = _RESERVED_IDENTIFIER_FIXUP_2080.x;
    _RESERVED_IDENTIFIER_FIXUP_3365.y = _RESERVED_IDENTIFIER_FIXUP_2080.y;
    _RESERVED_IDENTIFIER_FIXUP_3365.z = _RESERVED_IDENTIFIER_FIXUP_2080.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2091 = _RESERVED_IDENTIFIER_FIXUP_3365.xyz + _RESERVED_IDENTIFIER_FIXUP_3365.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_3365;
    _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_2091.x;
    _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_2091.y;
    _RESERVED_IDENTIFIER_FIXUP_3371.z = _RESERVED_IDENTIFIER_FIXUP_2091.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2106 = mix(_RESERVED_IDENTIFIER_FIXUP_3371.xyz, _RESERVED_IDENTIFIER_FIXUP_2077, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2071.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3377 = _RESERVED_IDENTIFIER_FIXUP_2067;
    _RESERVED_IDENTIFIER_FIXUP_3377.x = _RESERVED_IDENTIFIER_FIXUP_2106.x;
    _RESERVED_IDENTIFIER_FIXUP_3377.y = _RESERVED_IDENTIFIER_FIXUP_2106.y;
    _RESERVED_IDENTIFIER_FIXUP_3377.z = _RESERVED_IDENTIFIER_FIXUP_2106.z;
    float _RESERVED_IDENTIFIER_FIXUP_2116 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2071.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3383 = _RESERVED_IDENTIFIER_FIXUP_2071;
    _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_2116;
    _RESERVED_IDENTIFIER_FIXUP_3383.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2116;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2126 = _RESERVED_IDENTIFIER_FIXUP_3377 * _RESERVED_IDENTIFIER_FIXUP_3383.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_2145 = ((-clamp((_RESERVED_IDENTIFIER_FIXUP_1231 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0)) >= 0.0) ? 0.0 : 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3771;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3765;
    if (_RESERVED_IDENTIFIER_FIXUP_2145 != (-_RESERVED_IDENTIFIER_FIXUP_2145))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2157 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2157.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2157.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2163 = hdLod5(param_52, param_53);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2167 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3602 = _RESERVED_IDENTIFIER_FIXUP_2163;
        _RESERVED_IDENTIFIER_FIXUP_3602.y = _RESERVED_IDENTIFIER_FIXUP_2167.x;
        _RESERVED_IDENTIFIER_FIXUP_3602.z = _RESERVED_IDENTIFIER_FIXUP_2167.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2177 = _RESERVED_IDENTIFIER_FIXUP_3602.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3606;
        _RESERVED_IDENTIFIER_FIXUP_3606.x = _RESERVED_IDENTIFIER_FIXUP_2177.x;
        _RESERVED_IDENTIFIER_FIXUP_3606.y = _RESERVED_IDENTIFIER_FIXUP_2177.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2184 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2188 = _RESERVED_IDENTIFIER_FIXUP_2184.y;
        _RESERVED_IDENTIFIER_FIXUP_3606.w = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3606.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2188;
        float _RESERVED_IDENTIFIER_FIXUP_2199 = _RESERVED_IDENTIFIER_FIXUP_2163.x + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2199;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2206 = _RESERVED_IDENTIFIER_FIXUP_3602.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3619;
        _RESERVED_IDENTIFIER_FIXUP_3619.x = _RESERVED_IDENTIFIER_FIXUP_2206.x;
        _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_2206.y;
        _RESERVED_IDENTIFIER_FIXUP_3619.w = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3619.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2188;
        float _RESERVED_IDENTIFIER_FIXUP_2228 = _RESERVED_IDENTIFIER_FIXUP_2199 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2228;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2235 = _RESERVED_IDENTIFIER_FIXUP_3602.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3632;
        _RESERVED_IDENTIFIER_FIXUP_3632.x = _RESERVED_IDENTIFIER_FIXUP_2235.x;
        _RESERVED_IDENTIFIER_FIXUP_3632.y = _RESERVED_IDENTIFIER_FIXUP_2235.y;
        _RESERVED_IDENTIFIER_FIXUP_3632.w = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3632.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2188;
        float _RESERVED_IDENTIFIER_FIXUP_2257 = _RESERVED_IDENTIFIER_FIXUP_2228 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2257;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2264 = _RESERVED_IDENTIFIER_FIXUP_3602.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3645;
        _RESERVED_IDENTIFIER_FIXUP_3645.x = _RESERVED_IDENTIFIER_FIXUP_2264.x;
        _RESERVED_IDENTIFIER_FIXUP_3645.y = _RESERVED_IDENTIFIER_FIXUP_2264.y;
        _RESERVED_IDENTIFIER_FIXUP_3645.w = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3645.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2188;
        float _RESERVED_IDENTIFIER_FIXUP_2286 = _RESERVED_IDENTIFIER_FIXUP_2257 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2286;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2293 = _RESERVED_IDENTIFIER_FIXUP_3602.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3658;
        _RESERVED_IDENTIFIER_FIXUP_3658.x = _RESERVED_IDENTIFIER_FIXUP_2293.x;
        _RESERVED_IDENTIFIER_FIXUP_3658.y = _RESERVED_IDENTIFIER_FIXUP_2293.y;
        _RESERVED_IDENTIFIER_FIXUP_3658.w = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3658.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2188;
        float _RESERVED_IDENTIFIER_FIXUP_2315 = _RESERVED_IDENTIFIER_FIXUP_2286 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2315;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2322 = _RESERVED_IDENTIFIER_FIXUP_3602.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3671;
        _RESERVED_IDENTIFIER_FIXUP_3671.x = _RESERVED_IDENTIFIER_FIXUP_2322.x;
        _RESERVED_IDENTIFIER_FIXUP_3671.y = _RESERVED_IDENTIFIER_FIXUP_2322.y;
        _RESERVED_IDENTIFIER_FIXUP_3671.w = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3671.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2188;
        float _RESERVED_IDENTIFIER_FIXUP_2344 = _RESERVED_IDENTIFIER_FIXUP_2315 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2344;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2351 = _RESERVED_IDENTIFIER_FIXUP_3602.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3684;
        _RESERVED_IDENTIFIER_FIXUP_3684.x = _RESERVED_IDENTIFIER_FIXUP_2351.x;
        _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2351.y;
        _RESERVED_IDENTIFIER_FIXUP_3684.w = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3684.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2188;
        float _RESERVED_IDENTIFIER_FIXUP_2373 = _RESERVED_IDENTIFIER_FIXUP_2344 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2373;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2380 = _RESERVED_IDENTIFIER_FIXUP_3602.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3697;
        _RESERVED_IDENTIFIER_FIXUP_3697.x = _RESERVED_IDENTIFIER_FIXUP_2380.x;
        _RESERVED_IDENTIFIER_FIXUP_3697.y = _RESERVED_IDENTIFIER_FIXUP_2380.y;
        _RESERVED_IDENTIFIER_FIXUP_3697.w = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3697.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2188;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2397 = hdLod5(param_68, param_69);
        float _RESERVED_IDENTIFIER_FIXUP_2402 = _RESERVED_IDENTIFIER_FIXUP_2373 + _RESERVED_IDENTIFIER_FIXUP_2397.x;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2402;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2402 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3771 = _RESERVED_IDENTIFIER_FIXUP_2397;
        _RESERVED_IDENTIFIER_FIXUP_3765 = _RESERVED_IDENTIFIER_FIXUP_3602;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3772;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3766;
        if (max(abs(texcoord5.x), abs(texcoord5.y)) < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2424 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3790 = vec4(_RESERVED_IDENTIFIER_FIXUP_2145, (texcoord5.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1172);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2444 = _RESERVED_IDENTIFIER_FIXUP_3790.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3546;
            _RESERVED_IDENTIFIER_FIXUP_3546.x = _RESERVED_IDENTIFIER_FIXUP_2444.x;
            _RESERVED_IDENTIFIER_FIXUP_3546.y = _RESERVED_IDENTIFIER_FIXUP_2444.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2451 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2455 = _RESERVED_IDENTIFIER_FIXUP_2451.y;
            _RESERVED_IDENTIFIER_FIXUP_3546.w = _RESERVED_IDENTIFIER_FIXUP_2455;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2424.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2424.w;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3546.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2455;
            float _RESERVED_IDENTIFIER_FIXUP_2466 = hdLod6(param_70, param_71).x + hdLod6(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3790.w = _RESERVED_IDENTIFIER_FIXUP_2466;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2473 = _RESERVED_IDENTIFIER_FIXUP_3790.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3559;
            _RESERVED_IDENTIFIER_FIXUP_3559.x = _RESERVED_IDENTIFIER_FIXUP_2473.x;
            _RESERVED_IDENTIFIER_FIXUP_3559.y = _RESERVED_IDENTIFIER_FIXUP_2473.y;
            _RESERVED_IDENTIFIER_FIXUP_3559.w = _RESERVED_IDENTIFIER_FIXUP_2455;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3559.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2455;
            float _RESERVED_IDENTIFIER_FIXUP_2495 = _RESERVED_IDENTIFIER_FIXUP_2466 + hdLod6(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3790.w = _RESERVED_IDENTIFIER_FIXUP_2495;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2502 = _RESERVED_IDENTIFIER_FIXUP_3790.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3572;
            _RESERVED_IDENTIFIER_FIXUP_3572.x = _RESERVED_IDENTIFIER_FIXUP_2502.x;
            _RESERVED_IDENTIFIER_FIXUP_3572.y = _RESERVED_IDENTIFIER_FIXUP_2502.y;
            _RESERVED_IDENTIFIER_FIXUP_3572.w = _RESERVED_IDENTIFIER_FIXUP_2455;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3572.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2455;
            float _RESERVED_IDENTIFIER_FIXUP_2524 = _RESERVED_IDENTIFIER_FIXUP_2495 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3790.w = _RESERVED_IDENTIFIER_FIXUP_2524;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2531 = _RESERVED_IDENTIFIER_FIXUP_3790.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3585;
            _RESERVED_IDENTIFIER_FIXUP_3585.x = _RESERVED_IDENTIFIER_FIXUP_2531.x;
            _RESERVED_IDENTIFIER_FIXUP_3585.y = _RESERVED_IDENTIFIER_FIXUP_2531.y;
            _RESERVED_IDENTIFIER_FIXUP_3585.w = _RESERVED_IDENTIFIER_FIXUP_2455;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3585.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2455;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2548 = hdLod6(param_78, param_79);
            float _RESERVED_IDENTIFIER_FIXUP_2553 = _RESERVED_IDENTIFIER_FIXUP_2524 + _RESERVED_IDENTIFIER_FIXUP_2548.x;
            _RESERVED_IDENTIFIER_FIXUP_3790.y = _RESERVED_IDENTIFIER_FIXUP_2553;
            _RESERVED_IDENTIFIER_FIXUP_3790.x = _RESERVED_IDENTIFIER_FIXUP_2553 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3772 = _RESERVED_IDENTIFIER_FIXUP_2548;
            _RESERVED_IDENTIFIER_FIXUP_3766 = _RESERVED_IDENTIFIER_FIXUP_3790;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3773;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3767;
            if (max(abs(texcoord6.x), abs(texcoord6.y)) < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2575 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3789 = vec4(_RESERVED_IDENTIFIER_FIXUP_2145, (texcoord6.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1172);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2595 = _RESERVED_IDENTIFIER_FIXUP_3789.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3486;
                _RESERVED_IDENTIFIER_FIXUP_3486.x = _RESERVED_IDENTIFIER_FIXUP_2595.x;
                _RESERVED_IDENTIFIER_FIXUP_3486.y = _RESERVED_IDENTIFIER_FIXUP_2595.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2602 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2606 = _RESERVED_IDENTIFIER_FIXUP_2602.y;
                _RESERVED_IDENTIFIER_FIXUP_3486.w = _RESERVED_IDENTIFIER_FIXUP_2606;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2575.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2575.w;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3486.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2606;
                float _RESERVED_IDENTIFIER_FIXUP_2617 = hdLod7(param_80, param_81).x + hdLod7(param_82, param_83).x;
                _RESERVED_IDENTIFIER_FIXUP_3789.w = _RESERVED_IDENTIFIER_FIXUP_2617;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2624 = _RESERVED_IDENTIFIER_FIXUP_3789.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3499;
                _RESERVED_IDENTIFIER_FIXUP_3499.x = _RESERVED_IDENTIFIER_FIXUP_2624.x;
                _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_2624.y;
                _RESERVED_IDENTIFIER_FIXUP_3499.w = _RESERVED_IDENTIFIER_FIXUP_2606;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3499.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2606;
                float _RESERVED_IDENTIFIER_FIXUP_2646 = _RESERVED_IDENTIFIER_FIXUP_2617 + hdLod7(param_84, param_85).x;
                _RESERVED_IDENTIFIER_FIXUP_3789.w = _RESERVED_IDENTIFIER_FIXUP_2646;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2653 = _RESERVED_IDENTIFIER_FIXUP_3789.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3512;
                _RESERVED_IDENTIFIER_FIXUP_3512.x = _RESERVED_IDENTIFIER_FIXUP_2653.x;
                _RESERVED_IDENTIFIER_FIXUP_3512.y = _RESERVED_IDENTIFIER_FIXUP_2653.y;
                _RESERVED_IDENTIFIER_FIXUP_3512.w = _RESERVED_IDENTIFIER_FIXUP_2606;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3512.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2606;
                float _RESERVED_IDENTIFIER_FIXUP_2675 = _RESERVED_IDENTIFIER_FIXUP_2646 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3789.w = _RESERVED_IDENTIFIER_FIXUP_2675;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2682 = _RESERVED_IDENTIFIER_FIXUP_3789.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3525;
                _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2682.x;
                _RESERVED_IDENTIFIER_FIXUP_3525.y = _RESERVED_IDENTIFIER_FIXUP_2682.y;
                _RESERVED_IDENTIFIER_FIXUP_3525.w = _RESERVED_IDENTIFIER_FIXUP_2606;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3525.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2606;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2699 = hdLod7(param_88, param_89);
                float _RESERVED_IDENTIFIER_FIXUP_2704 = _RESERVED_IDENTIFIER_FIXUP_2675 + _RESERVED_IDENTIFIER_FIXUP_2699.x;
                _RESERVED_IDENTIFIER_FIXUP_3789.y = _RESERVED_IDENTIFIER_FIXUP_2704;
                _RESERVED_IDENTIFIER_FIXUP_3789.x = _RESERVED_IDENTIFIER_FIXUP_2704 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3773 = _RESERVED_IDENTIFIER_FIXUP_2699;
                _RESERVED_IDENTIFIER_FIXUP_3767 = _RESERVED_IDENTIFIER_FIXUP_3789;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2720 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2724 = _RESERVED_IDENTIFIER_FIXUP_2720.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2735 = vec4(_RESERVED_IDENTIFIER_FIXUP_2720.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2724).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3787 = vec4(_RESERVED_IDENTIFIER_FIXUP_2735 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2724);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2772 = _RESERVED_IDENTIFIER_FIXUP_2735 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3440 = _RESERVED_IDENTIFIER_FIXUP_3787;
                _RESERVED_IDENTIFIER_FIXUP_3440.x = _RESERVED_IDENTIFIER_FIXUP_2772.x;
                _RESERVED_IDENTIFIER_FIXUP_3440.y = _RESERVED_IDENTIFIER_FIXUP_2772.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2794 = _RESERVED_IDENTIFIER_FIXUP_2735 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3449 = _RESERVED_IDENTIFIER_FIXUP_3440;
                _RESERVED_IDENTIFIER_FIXUP_3449.x = _RESERVED_IDENTIFIER_FIXUP_2794.x;
                _RESERVED_IDENTIFIER_FIXUP_3449.y = _RESERVED_IDENTIFIER_FIXUP_2794.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2816 = _RESERVED_IDENTIFIER_FIXUP_2735 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3458 = _RESERVED_IDENTIFIER_FIXUP_3449;
                _RESERVED_IDENTIFIER_FIXUP_3458.x = _RESERVED_IDENTIFIER_FIXUP_2816.x;
                _RESERVED_IDENTIFIER_FIXUP_3458.y = _RESERVED_IDENTIFIER_FIXUP_2816.y;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3458.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2724;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2826 = hdLod8(param_90, param_91);
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_2735;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2724;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3787.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2724;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3440.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2724;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3449.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2724;
                float _RESERVED_IDENTIFIER_FIXUP_2831 = (((hdLod8(param_92, param_93).x + hdLod8(param_94, param_95).x) + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + _RESERVED_IDENTIFIER_FIXUP_2826.x;
                float _RESERVED_IDENTIFIER_FIXUP_2839 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3469 = _RESERVED_IDENTIFIER_FIXUP_2826;
                _RESERVED_IDENTIFIER_FIXUP_3469.x = _RESERVED_IDENTIFIER_FIXUP_2839;
                float _RESERVED_IDENTIFIER_FIXUP_2845 = clamp((_RESERVED_IDENTIFIER_FIXUP_2839 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2850 = (_RESERVED_IDENTIFIER_FIXUP_2831 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3773 = _RESERVED_IDENTIFIER_FIXUP_3469;
                _RESERVED_IDENTIFIER_FIXUP_3767 = vec4((_RESERVED_IDENTIFIER_FIXUP_2845 * _RESERVED_IDENTIFIER_FIXUP_2850) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2845, _RESERVED_IDENTIFIER_FIXUP_2850, _RESERVED_IDENTIFIER_FIXUP_2831);
            }
            _RESERVED_IDENTIFIER_FIXUP_3772 = _RESERVED_IDENTIFIER_FIXUP_3773;
            _RESERVED_IDENTIFIER_FIXUP_3766 = _RESERVED_IDENTIFIER_FIXUP_3767;
        }
        _RESERVED_IDENTIFIER_FIXUP_3771 = _RESERVED_IDENTIFIER_FIXUP_3772;
        _RESERVED_IDENTIFIER_FIXUP_3765 = _RESERVED_IDENTIFIER_FIXUP_3766;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2865 = (_RESERVED_IDENTIFIER_FIXUP_3765.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3714 = _RESERVED_IDENTIFIER_FIXUP_3765;
    _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_2865;
    _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_2865;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2878 = _RESERVED_IDENTIFIER_FIXUP_2126.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3720 = _RESERVED_IDENTIFIER_FIXUP_3771;
    _RESERVED_IDENTIFIER_FIXUP_3720.x = _RESERVED_IDENTIFIER_FIXUP_2878.x;
    _RESERVED_IDENTIFIER_FIXUP_3720.y = _RESERVED_IDENTIFIER_FIXUP_2878.y;
    _RESERVED_IDENTIFIER_FIXUP_3720.z = _RESERVED_IDENTIFIER_FIXUP_2878.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2889 = _RESERVED_IDENTIFIER_FIXUP_3714.xxx * _RESERVED_IDENTIFIER_FIXUP_3720.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3791 = vec4(_RESERVED_IDENTIFIER_FIXUP_2889.x, _RESERVED_IDENTIFIER_FIXUP_2865, _RESERVED_IDENTIFIER_FIXUP_2889.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2903 = (_RESERVED_IDENTIFIER_FIXUP_2126.xyz * _RESERVED_IDENTIFIER_FIXUP_3791.yyy) + _RESERVED_IDENTIFIER_FIXUP_3791.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3732 = _RESERVED_IDENTIFIER_FIXUP_2126;
    _RESERVED_IDENTIFIER_FIXUP_3732.x = _RESERVED_IDENTIFIER_FIXUP_2903.x;
    _RESERVED_IDENTIFIER_FIXUP_3732.y = _RESERVED_IDENTIFIER_FIXUP_2903.y;
    _RESERVED_IDENTIFIER_FIXUP_3732.z = _RESERVED_IDENTIFIER_FIXUP_2903.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2916 = _RESERVED_IDENTIFIER_FIXUP_3732.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3738 = _RESERVED_IDENTIFIER_FIXUP_3732;
    _RESERVED_IDENTIFIER_FIXUP_3738.x = _RESERVED_IDENTIFIER_FIXUP_2916.x;
    _RESERVED_IDENTIFIER_FIXUP_3738.y = _RESERVED_IDENTIFIER_FIXUP_2916.y;
    _RESERVED_IDENTIFIER_FIXUP_3738.z = _RESERVED_IDENTIFIER_FIXUP_2916.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3738.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1027 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1036;
    if (_RESERVED_IDENTIFIER_FIXUP_1027)
    {
        _RESERVED_IDENTIFIER_FIXUP_1036 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1036 = _RESERVED_IDENTIFIER_FIXUP_1027;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1036)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1073 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3349.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1099 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2969;
    if (_RESERVED_IDENTIFIER_FIXUP_1073 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2969 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1073), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1099);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2969 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1099);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2969;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2865);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB84 = r0.xyz * v0.xyz;
    r2.x = hdB84.x;
    r2.y = hdB84.y;
    r2.z = hdB84.z;
    vec4 hdB93 = r2;
    vec4 hdB95 = r2;
    vec3 hdB97 = hdB93.xyz + hdB95.xyz;
    r2.x = hdB97.x;
    r2.y = hdB97.y;
    r2.z = hdB97.z;
    vec4 hdB106 = r0;
    vec3 hdB115 = mix(r2.xyz, hdB106.xyz, greaterThanEqual(-r1.www, vec3(0.0)));
    r0.x = hdB115.x;
    r0.y = hdB115.y;
    r0.z = hdB115.z;
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r1.xy;
        float param_3 = r1.w;
        r1 = hdLod5(param_2, param_3);
        vec2 hdB186 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB186.x;
        r1.z = hdB186.y;
        vec2 hdB198 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB198.x;
        r2.y = hdB198.y;
        vec2 hdB206 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB206.x;
        r2.w = hdB206.y;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r1.x += r2.x;
        vec2 hdB229 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB229.x;
        r2.y = hdB229.y;
        vec2 hdB236 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB236.x;
        r2.w = hdB236.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.x += r2.x;
        vec2 hdB259 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB259.x;
        r2.y = hdB259.y;
        vec2 hdB266 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB266.x;
        r2.w = hdB266.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.x += r2.x;
        vec2 hdB289 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB289.x;
        r2.y = hdB289.y;
        vec2 hdB296 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB296.x;
        r2.w = hdB296.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.x += r2.x;
        vec2 hdB319 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB319.x;
        r2.y = hdB319.y;
        vec2 hdB326 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB326.x;
        r2.w = hdB326.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.x += r2.x;
        vec2 hdB349 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB349.x;
        r2.y = hdB349.y;
        vec2 hdB356 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB356.x;
        r2.w = hdB356.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r1.x += r2.x;
        vec2 hdB379 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB379.x;
        r2.y = hdB379.y;
        vec2 hdB386 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB386.x;
        r2.w = hdB386.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r1.x += r2.x;
        vec2 hdB409 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB409.x;
        r2.y = hdB409.y;
        vec2 hdB416 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB416.x;
        r2.w = hdB416.y;
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
            vec2 hdB466 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB466.x;
            r1.z = hdB466.y;
            vec2 hdB476 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB476.x;
            r3.y = hdB476.y;
            vec2 hdB483 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB483.x;
            r3.w = hdB483.y;
            vec2 param_22 = r3.xy;
            float param_23 = r3.w;
            r3 = hdLod6(param_22, param_23);
            r1.w = r2.x + r3.x;
            vec2 hdB505 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB505.x;
            r2.y = hdB505.y;
            vec2 hdB512 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB512.x;
            r2.w = hdB512.y;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod6(param_24, param_25);
            r1.w += r2.x;
            vec2 hdB534 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB534.x;
            r2.y = hdB534.y;
            vec2 hdB541 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB541.x;
            r2.w = hdB541.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r1.w += r2.x;
            vec2 hdB563 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB563.x;
            r2.y = hdB563.y;
            vec2 hdB570 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB570.x;
            r2.w = hdB570.y;
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
                vec2 hdB620 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB620.x;
                r1.z = hdB620.y;
                vec2 hdB630 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB630.x;
                r3.y = hdB630.y;
                vec2 hdB637 = vec2(1.0, 0.0) * v6.zx;
                r3.z = hdB637.x;
                r3.w = hdB637.y;
                vec2 param_32 = r3.xy;
                float param_33 = r3.w;
                r3 = hdLod7(param_32, param_33);
                r1.w = r2.x + r3.x;
                vec2 hdB659 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB659.x;
                r2.y = hdB659.y;
                vec2 hdB666 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB666.x;
                r2.w = hdB666.y;
                vec2 param_34 = r2.xy;
                float param_35 = r2.w;
                r2 = hdLod7(param_34, param_35);
                r1.w += r2.x;
                vec2 hdB688 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB688.x;
                r2.y = hdB688.y;
                vec2 hdB695 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB695.x;
                r2.w = hdB695.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r1.w += r2.x;
                vec2 hdB717 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB717.x;
                r2.y = hdB717.y;
                vec2 hdB724 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB724.x;
                r2.w = hdB724.y;
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
                vec2 hdB756 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB756.x;
                r2.w = hdB756.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                vec2 param_40 = r2.xy;
                float param_41 = r2.w;
                r3 = hdLod8(param_40, param_41);
                vec2 hdB781 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB781.x;
                r4.y = hdB781.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_42 = r4.xy;
                float param_43 = r4.w;
                r5 = hdLod8(param_42, param_43);
                r1.w = r3.x + r5.x;
                vec2 hdB809 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB809.x;
                r4.y = hdB809.y;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r3 = hdLod8(param_44, param_45);
                r1.w += r3.x;
                vec2 hdB831 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB831.x;
                r4.y = hdB831.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r1.w += r3.x;
                vec2 hdB853 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB853.x;
                r4.y = hdB853.y;
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
    vec3 hdB910 = r0.www * v1.xyz;
    r2.x = hdB910.x;
    r2.y = hdB910.y;
    r2.z = hdB910.z;
    vec4 hdB917 = r1;
    vec3 hdB921 = hdB917.xxx * r2.xyz;
    r1.x = hdB921.x;
    r1.z = hdB921.y;
    r1.w = hdB921.z;
    vec4 hdB928 = r0;
    vec3 hdB935 = (hdB928.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB935.x;
    r0.y = hdB935.y;
    r0.z = hdB935.z;
    vec4 hdB942 = r0;
    vec3 hdB949 = hdB942.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB949.x;
    r0.y = hdB949.y;
    r0.z = hdB949.z;
    vec3 hdB964 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB964.x;
    oC0.y = hdB964.y;
    oC0.z = hdB964.z;
    oC0.w = 1.0;
    bool hdB975 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB983;
    if (hdB975)
    {
        hdB983 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB983 = hdB975;
    }
    if (hdB983)
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
    bool _3359 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3369;
    if (_3359)
    {
        _3369 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 483u) != 0u;
    }
    else
    {
        _3369 = _3359;
    }
    if (_3369)
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
        bool _3394 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3409;
        if (!_3394)
        {
            _3409 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 483u) != 0u;
        }
        else
        {
            _3409 = _3394;
        }
        if (_3409)
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
