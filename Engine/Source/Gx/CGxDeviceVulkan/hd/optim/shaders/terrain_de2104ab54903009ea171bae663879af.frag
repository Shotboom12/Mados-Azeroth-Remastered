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
float _RESERVED_IDENTIFIER_FIXUP_3635;
vec4 _RESERVED_IDENTIFIER_FIXUP_3636;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1125 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1129 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1133 = hdTex2(param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1137 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2854 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2854.x = _RESERVED_IDENTIFIER_FIXUP_1137.x;
    float _RESERVED_IDENTIFIER_FIXUP_1141 = _RESERVED_IDENTIFIER_FIXUP_1137.y;
    _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1141;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1143 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3635).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1143 + _RESERVED_IDENTIFIER_FIXUP_1143;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2858 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2858.x = _RESERVED_IDENTIFIER_FIXUP_1146.x;
    _RESERVED_IDENTIFIER_FIXUP_2858.y = _RESERVED_IDENTIFIER_FIXUP_1146.y;
    _RESERVED_IDENTIFIER_FIXUP_2858.z = _RESERVED_IDENTIFIER_FIXUP_1146.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_1125.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1157 = _RESERVED_IDENTIFIER_FIXUP_1154 * _RESERVED_IDENTIFIER_FIXUP_2858.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2864 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2864.x = _RESERVED_IDENTIFIER_FIXUP_1157.x;
    _RESERVED_IDENTIFIER_FIXUP_2864.y = _RESERVED_IDENTIFIER_FIXUP_1157.y;
    _RESERVED_IDENTIFIER_FIXUP_2864.z = _RESERVED_IDENTIFIER_FIXUP_1157.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1171 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2854.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1172 = mix(_RESERVED_IDENTIFIER_FIXUP_2864.xyz, _RESERVED_IDENTIFIER_FIXUP_1154, _RESERVED_IDENTIFIER_FIXUP_1171);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2870 = _RESERVED_IDENTIFIER_FIXUP_1125;
    _RESERVED_IDENTIFIER_FIXUP_2870.x = _RESERVED_IDENTIFIER_FIXUP_1172.x;
    _RESERVED_IDENTIFIER_FIXUP_2870.y = _RESERVED_IDENTIFIER_FIXUP_1172.y;
    _RESERVED_IDENTIFIER_FIXUP_2870.z = _RESERVED_IDENTIFIER_FIXUP_1172.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_1129.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_1180 * _RESERVED_IDENTIFIER_FIXUP_2858.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3661 = vec4(_RESERVED_IDENTIFIER_FIXUP_1183.x, _RESERVED_IDENTIFIER_FIXUP_1141, _RESERVED_IDENTIFIER_FIXUP_1183.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1198 = mix(_RESERVED_IDENTIFIER_FIXUP_3661.xzw, _RESERVED_IDENTIFIER_FIXUP_1180, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3661.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2882 = _RESERVED_IDENTIFIER_FIXUP_1129;
    _RESERVED_IDENTIFIER_FIXUP_2882.x = _RESERVED_IDENTIFIER_FIXUP_1198.x;
    _RESERVED_IDENTIFIER_FIXUP_2882.y = _RESERVED_IDENTIFIER_FIXUP_1198.y;
    _RESERVED_IDENTIFIER_FIXUP_2882.z = _RESERVED_IDENTIFIER_FIXUP_1198.z;
    float _RESERVED_IDENTIFIER_FIXUP_1208 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1133.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2888 = _RESERVED_IDENTIFIER_FIXUP_1133;
    _RESERVED_IDENTIFIER_FIXUP_2888.y = _RESERVED_IDENTIFIER_FIXUP_1208;
    _RESERVED_IDENTIFIER_FIXUP_2888.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1208;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218 = _RESERVED_IDENTIFIER_FIXUP_2888.xxxx * _RESERVED_IDENTIFIER_FIXUP_2882;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1224 = (_RESERVED_IDENTIFIER_FIXUP_2870 * _RESERVED_IDENTIFIER_FIXUP_2888.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1218;
    float _RESERVED_IDENTIFIER_FIXUP_1231 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2895 = _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_2895.x = _RESERVED_IDENTIFIER_FIXUP_1231;
    float _RESERVED_IDENTIFIER_FIXUP_1237 = clamp((_RESERVED_IDENTIFIER_FIXUP_1231 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2895.x = _RESERVED_IDENTIFIER_FIXUP_1237;
    float _RESERVED_IDENTIFIER_FIXUP_1243 = ((-_RESERVED_IDENTIFIER_FIXUP_1237) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2895.y = _RESERVED_IDENTIFIER_FIXUP_1243;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3638;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3637;
    if (_RESERVED_IDENTIFIER_FIXUP_1243 != (-_RESERVED_IDENTIFIER_FIXUP_1243))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1255 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2907 = _RESERVED_IDENTIFIER_FIXUP_2895;
        _RESERVED_IDENTIFIER_FIXUP_2907.y = _RESERVED_IDENTIFIER_FIXUP_1255.x;
        _RESERVED_IDENTIFIER_FIXUP_2907.z = _RESERVED_IDENTIFIER_FIXUP_1255.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_2907.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2911;
        _RESERVED_IDENTIFIER_FIXUP_2911.x = _RESERVED_IDENTIFIER_FIXUP_1265.x;
        _RESERVED_IDENTIFIER_FIXUP_2911.y = _RESERVED_IDENTIFIER_FIXUP_1265.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_2907.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2915;
        _RESERVED_IDENTIFIER_FIXUP_2915.x = _RESERVED_IDENTIFIER_FIXUP_1275.x;
        _RESERVED_IDENTIFIER_FIXUP_2915.y = _RESERVED_IDENTIFIER_FIXUP_1275.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1285 = _RESERVED_IDENTIFIER_FIXUP_2907.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2919;
        _RESERVED_IDENTIFIER_FIXUP_2919.x = _RESERVED_IDENTIFIER_FIXUP_1285.x;
        _RESERVED_IDENTIFIER_FIXUP_2919.y = _RESERVED_IDENTIFIER_FIXUP_1285.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_2907.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2923;
        _RESERVED_IDENTIFIER_FIXUP_2923.x = _RESERVED_IDENTIFIER_FIXUP_1295.x;
        _RESERVED_IDENTIFIER_FIXUP_2923.y = _RESERVED_IDENTIFIER_FIXUP_1295.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1303 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1303.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1303.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1309 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_2911.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2915.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2919.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2923.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_2911.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1309.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2915.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1309.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2919.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1309.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1366 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1309 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2923.xy;
        float param_11 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1372 = hdLod5(param_10, param_11).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2907.y = _RESERVED_IDENTIFIER_FIXUP_1372;
        float _RESERVED_IDENTIFIER_FIXUP_1377 = float(_RESERVED_IDENTIFIER_FIXUP_1372 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2907.y = _RESERVED_IDENTIFIER_FIXUP_1377;
        float _RESERVED_IDENTIFIER_FIXUP_1380 = dot(_RESERVED_IDENTIFIER_FIXUP_1366, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2907.z = _RESERVED_IDENTIFIER_FIXUP_1380;
        float _RESERVED_IDENTIFIER_FIXUP_1386 = _RESERVED_IDENTIFIER_FIXUP_1377 + _RESERVED_IDENTIFIER_FIXUP_1380;
        _RESERVED_IDENTIFIER_FIXUP_2907.y = _RESERVED_IDENTIFIER_FIXUP_1386;
        float _RESERVED_IDENTIFIER_FIXUP_1391 = (_RESERVED_IDENTIFIER_FIXUP_1386 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2907.y = _RESERVED_IDENTIFIER_FIXUP_1391;
        _RESERVED_IDENTIFIER_FIXUP_2907.x = (_RESERVED_IDENTIFIER_FIXUP_1237 * _RESERVED_IDENTIFIER_FIXUP_1391) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3638 = _RESERVED_IDENTIFIER_FIXUP_1366;
        _RESERVED_IDENTIFIER_FIXUP_3637 = _RESERVED_IDENTIFIER_FIXUP_2907;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2905 = _RESERVED_IDENTIFIER_FIXUP_2895;
        _RESERVED_IDENTIFIER_FIXUP_2905.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3638 = _RESERVED_IDENTIFIER_FIXUP_2888;
        _RESERVED_IDENTIFIER_FIXUP_3637 = _RESERVED_IDENTIFIER_FIXUP_2905;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1409 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2979 = _RESERVED_IDENTIFIER_FIXUP_3637;
    _RESERVED_IDENTIFIER_FIXUP_2979.y = _RESERVED_IDENTIFIER_FIXUP_1409;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3641;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3639;
    if (_RESERVED_IDENTIFIER_FIXUP_1409 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1418 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3140 = _RESERVED_IDENTIFIER_FIXUP_2979;
        _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_1418.x;
        _RESERVED_IDENTIFIER_FIXUP_3140.z = _RESERVED_IDENTIFIER_FIXUP_1418.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1428 = _RESERVED_IDENTIFIER_FIXUP_3140.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3144;
        _RESERVED_IDENTIFIER_FIXUP_3144.x = _RESERVED_IDENTIFIER_FIXUP_1428.x;
        _RESERVED_IDENTIFIER_FIXUP_3144.y = _RESERVED_IDENTIFIER_FIXUP_1428.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1438 = _RESERVED_IDENTIFIER_FIXUP_3140.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3148;
        _RESERVED_IDENTIFIER_FIXUP_3148.x = _RESERVED_IDENTIFIER_FIXUP_1438.x;
        _RESERVED_IDENTIFIER_FIXUP_3148.y = _RESERVED_IDENTIFIER_FIXUP_1438.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_3140.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3152;
        _RESERVED_IDENTIFIER_FIXUP_3152.x = _RESERVED_IDENTIFIER_FIXUP_1448.x;
        _RESERVED_IDENTIFIER_FIXUP_3152.y = _RESERVED_IDENTIFIER_FIXUP_1448.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_3140.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3156;
        _RESERVED_IDENTIFIER_FIXUP_3156.x = _RESERVED_IDENTIFIER_FIXUP_1458.x;
        _RESERVED_IDENTIFIER_FIXUP_3156.y = _RESERVED_IDENTIFIER_FIXUP_1458.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1466 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1466.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1466.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1472 = hdLod6(param_12, param_13);
        _RESERVED_IDENTIFIER_FIXUP_3144.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3148.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3152.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3156.w = 0.0;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3144.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1472.y = hdLod6(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3148.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1472.z = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3152.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1472.w = hdLod6(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1529 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1472 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3156.xy;
        float param_21 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1535 = hdLod6(param_20, param_21).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_1535;
        float _RESERVED_IDENTIFIER_FIXUP_1540 = float(_RESERVED_IDENTIFIER_FIXUP_1535 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_1540;
        float _RESERVED_IDENTIFIER_FIXUP_1543 = dot(_RESERVED_IDENTIFIER_FIXUP_1529, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3140.z = _RESERVED_IDENTIFIER_FIXUP_1543;
        float _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_1540 + _RESERVED_IDENTIFIER_FIXUP_1543;
        _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_1549;
        _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_1549 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3641 = _RESERVED_IDENTIFIER_FIXUP_1529;
        _RESERVED_IDENTIFIER_FIXUP_3639 = _RESERVED_IDENTIFIER_FIXUP_3140;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1562 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2984 = _RESERVED_IDENTIFIER_FIXUP_2979;
        _RESERVED_IDENTIFIER_FIXUP_2984.z = _RESERVED_IDENTIFIER_FIXUP_1562;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3642;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3640;
        if (_RESERVED_IDENTIFIER_FIXUP_1562 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1571 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3074 = _RESERVED_IDENTIFIER_FIXUP_2984;
            _RESERVED_IDENTIFIER_FIXUP_3074.z = _RESERVED_IDENTIFIER_FIXUP_1571.x;
            _RESERVED_IDENTIFIER_FIXUP_3074.w = _RESERVED_IDENTIFIER_FIXUP_1571.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_3074.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3078;
            _RESERVED_IDENTIFIER_FIXUP_3078.x = _RESERVED_IDENTIFIER_FIXUP_1581.x;
            _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1581.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1591 = _RESERVED_IDENTIFIER_FIXUP_3074.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3082;
            _RESERVED_IDENTIFIER_FIXUP_3082.x = _RESERVED_IDENTIFIER_FIXUP_1591.x;
            _RESERVED_IDENTIFIER_FIXUP_3082.y = _RESERVED_IDENTIFIER_FIXUP_1591.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_3074.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3086;
            _RESERVED_IDENTIFIER_FIXUP_3086.x = _RESERVED_IDENTIFIER_FIXUP_1601.x;
            _RESERVED_IDENTIFIER_FIXUP_3086.y = _RESERVED_IDENTIFIER_FIXUP_1601.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1611 = _RESERVED_IDENTIFIER_FIXUP_3074.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3090;
            _RESERVED_IDENTIFIER_FIXUP_3090.x = _RESERVED_IDENTIFIER_FIXUP_1611.x;
            _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1611.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1619 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1619.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1619.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1625 = hdLod7(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_3078.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3082.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3086.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3090.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3078.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1625.y = hdLod7(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3082.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1625.z = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3086.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1625.w = hdLod7(param_28, param_29).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1682 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1625 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3090.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1688 = hdLod7(param_30, param_31).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3074.z = _RESERVED_IDENTIFIER_FIXUP_1688;
            float _RESERVED_IDENTIFIER_FIXUP_1693 = float(_RESERVED_IDENTIFIER_FIXUP_1688 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3074.z = _RESERVED_IDENTIFIER_FIXUP_1693;
            float _RESERVED_IDENTIFIER_FIXUP_1696 = dot(_RESERVED_IDENTIFIER_FIXUP_1682, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3074.w = _RESERVED_IDENTIFIER_FIXUP_1696;
            float _RESERVED_IDENTIFIER_FIXUP_1702 = _RESERVED_IDENTIFIER_FIXUP_1693 + _RESERVED_IDENTIFIER_FIXUP_1696;
            _RESERVED_IDENTIFIER_FIXUP_3074.z = _RESERVED_IDENTIFIER_FIXUP_1702;
            _RESERVED_IDENTIFIER_FIXUP_3074.y = _RESERVED_IDENTIFIER_FIXUP_1702 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3642 = _RESERVED_IDENTIFIER_FIXUP_1682;
            _RESERVED_IDENTIFIER_FIXUP_3640 = _RESERVED_IDENTIFIER_FIXUP_3074;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2988 = _RESERVED_IDENTIFIER_FIXUP_3638;
            _RESERVED_IDENTIFIER_FIXUP_2988.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2988.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1718 = (_RESERVED_IDENTIFIER_FIXUP_2988.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2993;
            _RESERVED_IDENTIFIER_FIXUP_2993.x = _RESERVED_IDENTIFIER_FIXUP_1718.x;
            _RESERVED_IDENTIFIER_FIXUP_2993.y = _RESERVED_IDENTIFIER_FIXUP_1718.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1728 = _RESERVED_IDENTIFIER_FIXUP_2993.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2997;
            _RESERVED_IDENTIFIER_FIXUP_2997.x = _RESERVED_IDENTIFIER_FIXUP_1728.x;
            _RESERVED_IDENTIFIER_FIXUP_2997.y = _RESERVED_IDENTIFIER_FIXUP_1728.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1738 = _RESERVED_IDENTIFIER_FIXUP_2993.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3001;
            _RESERVED_IDENTIFIER_FIXUP_3001.x = _RESERVED_IDENTIFIER_FIXUP_1738.x;
            _RESERVED_IDENTIFIER_FIXUP_3001.y = _RESERVED_IDENTIFIER_FIXUP_1738.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1748 = _RESERVED_IDENTIFIER_FIXUP_2993.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3005;
            _RESERVED_IDENTIFIER_FIXUP_3005.x = _RESERVED_IDENTIFIER_FIXUP_1748.x;
            _RESERVED_IDENTIFIER_FIXUP_3005.y = _RESERVED_IDENTIFIER_FIXUP_1748.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1758 = _RESERVED_IDENTIFIER_FIXUP_2993.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3009;
            _RESERVED_IDENTIFIER_FIXUP_3009.x = _RESERVED_IDENTIFIER_FIXUP_1758.x;
            _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1758.y;
            _RESERVED_IDENTIFIER_FIXUP_2993.w = 0.0;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2993.xy;
            float param_33 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1772 = hdLod8(param_32, param_33);
            _RESERVED_IDENTIFIER_FIXUP_2997.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3001.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3005.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3009.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_2997.xy;
            float param_35 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1772.y = hdLod8(param_34, param_35).x;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3001.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1772.z = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3005.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1772.w = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3009.xy;
            float param_41 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1835 = hdLod8(param_40, param_41).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3049 = _RESERVED_IDENTIFIER_FIXUP_2984;
            _RESERVED_IDENTIFIER_FIXUP_3049.z = _RESERVED_IDENTIFIER_FIXUP_1835;
            float _RESERVED_IDENTIFIER_FIXUP_1840 = float(_RESERVED_IDENTIFIER_FIXUP_1835 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3049.z = _RESERVED_IDENTIFIER_FIXUP_1840;
            float _RESERVED_IDENTIFIER_FIXUP_1843 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1772 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3049.w = _RESERVED_IDENTIFIER_FIXUP_1843;
            float _RESERVED_IDENTIFIER_FIXUP_1849 = _RESERVED_IDENTIFIER_FIXUP_1840 + _RESERVED_IDENTIFIER_FIXUP_1843;
            _RESERVED_IDENTIFIER_FIXUP_3049.z = _RESERVED_IDENTIFIER_FIXUP_1849;
            float _RESERVED_IDENTIFIER_FIXUP_1857 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3049.w = _RESERVED_IDENTIFIER_FIXUP_1857;
            float _RESERVED_IDENTIFIER_FIXUP_1863 = clamp((_RESERVED_IDENTIFIER_FIXUP_1857 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3049.w = _RESERVED_IDENTIFIER_FIXUP_1863;
            float _RESERVED_IDENTIFIER_FIXUP_1868 = (_RESERVED_IDENTIFIER_FIXUP_1849 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3049.z = _RESERVED_IDENTIFIER_FIXUP_1868;
            _RESERVED_IDENTIFIER_FIXUP_3049.y = (_RESERVED_IDENTIFIER_FIXUP_1863 * _RESERVED_IDENTIFIER_FIXUP_1868) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3642 = _RESERVED_IDENTIFIER_FIXUP_2988;
            _RESERVED_IDENTIFIER_FIXUP_3640 = _RESERVED_IDENTIFIER_FIXUP_3049;
        }
        _RESERVED_IDENTIFIER_FIXUP_3641 = _RESERVED_IDENTIFIER_FIXUP_3642;
        _RESERVED_IDENTIFIER_FIXUP_3639 = _RESERVED_IDENTIFIER_FIXUP_3640;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1883 = min(_RESERVED_IDENTIFIER_FIXUP_3639.y, _RESERVED_IDENTIFIER_FIXUP_3639.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3208 = _RESERVED_IDENTIFIER_FIXUP_3641;
    _RESERVED_IDENTIFIER_FIXUP_3208.x = _RESERVED_IDENTIFIER_FIXUP_1883;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3662 = vec4((_RESERVED_IDENTIFIER_FIXUP_1883 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1905 = _RESERVED_IDENTIFIER_FIXUP_3208.xxx * _RESERVED_IDENTIFIER_FIXUP_3662.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3219 = _RESERVED_IDENTIFIER_FIXUP_3662;
    _RESERVED_IDENTIFIER_FIXUP_3219.y = _RESERVED_IDENTIFIER_FIXUP_1905.x;
    _RESERVED_IDENTIFIER_FIXUP_3219.z = _RESERVED_IDENTIFIER_FIXUP_1905.y;
    _RESERVED_IDENTIFIER_FIXUP_3219.w = _RESERVED_IDENTIFIER_FIXUP_1905.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1919 = (_RESERVED_IDENTIFIER_FIXUP_1224.xyz * _RESERVED_IDENTIFIER_FIXUP_3219.xxx) + _RESERVED_IDENTIFIER_FIXUP_3219.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3225 = _RESERVED_IDENTIFIER_FIXUP_1224;
    _RESERVED_IDENTIFIER_FIXUP_3225.x = _RESERVED_IDENTIFIER_FIXUP_1919.x;
    _RESERVED_IDENTIFIER_FIXUP_3225.y = _RESERVED_IDENTIFIER_FIXUP_1919.y;
    _RESERVED_IDENTIFIER_FIXUP_3225.z = _RESERVED_IDENTIFIER_FIXUP_1919.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1932 = _RESERVED_IDENTIFIER_FIXUP_3225.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3231 = _RESERVED_IDENTIFIER_FIXUP_3225;
    _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_1932.x;
    _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_1932.y;
    _RESERVED_IDENTIFIER_FIXUP_3231.z = _RESERVED_IDENTIFIER_FIXUP_1932.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1987 = OptTex0( texcoord0.xyz);
    vec2 param_42 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1991 = hdTex1(param_42);
    vec2 param_43 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1995 = hdTex2(param_43);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2008 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3249 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3249.x = _RESERVED_IDENTIFIER_FIXUP_2008.x;
    _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_2008.y;
    _RESERVED_IDENTIFIER_FIXUP_3249.z = _RESERVED_IDENTIFIER_FIXUP_2008.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2016 = _RESERVED_IDENTIFIER_FIXUP_1987.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2019 = _RESERVED_IDENTIFIER_FIXUP_2016 * _RESERVED_IDENTIFIER_FIXUP_3249.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3255 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_2019.x;
    _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_2019.y;
    _RESERVED_IDENTIFIER_FIXUP_3255.z = _RESERVED_IDENTIFIER_FIXUP_2019.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2034 = mix(_RESERVED_IDENTIFIER_FIXUP_3255.xyz, _RESERVED_IDENTIFIER_FIXUP_2016, _RESERVED_IDENTIFIER_FIXUP_1171);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3261 = _RESERVED_IDENTIFIER_FIXUP_1987;
    _RESERVED_IDENTIFIER_FIXUP_3261.x = _RESERVED_IDENTIFIER_FIXUP_2034.x;
    _RESERVED_IDENTIFIER_FIXUP_3261.y = _RESERVED_IDENTIFIER_FIXUP_2034.y;
    _RESERVED_IDENTIFIER_FIXUP_3261.z = _RESERVED_IDENTIFIER_FIXUP_2034.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2042 = _RESERVED_IDENTIFIER_FIXUP_1991.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2045 = _RESERVED_IDENTIFIER_FIXUP_2042 * _RESERVED_IDENTIFIER_FIXUP_3249.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3664 = vec4(_RESERVED_IDENTIFIER_FIXUP_2045.x, _RESERVED_IDENTIFIER_FIXUP_1141, _RESERVED_IDENTIFIER_FIXUP_2045.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2060 = mix(_RESERVED_IDENTIFIER_FIXUP_3664.xzw, _RESERVED_IDENTIFIER_FIXUP_2042, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3664.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3273 = _RESERVED_IDENTIFIER_FIXUP_1991;
    _RESERVED_IDENTIFIER_FIXUP_3273.x = _RESERVED_IDENTIFIER_FIXUP_2060.x;
    _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_2060.y;
    _RESERVED_IDENTIFIER_FIXUP_3273.z = _RESERVED_IDENTIFIER_FIXUP_2060.z;
    float _RESERVED_IDENTIFIER_FIXUP_2070 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1995.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3279 = _RESERVED_IDENTIFIER_FIXUP_1995;
    _RESERVED_IDENTIFIER_FIXUP_3279.y = _RESERVED_IDENTIFIER_FIXUP_2070;
    _RESERVED_IDENTIFIER_FIXUP_3279.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2070;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2080 = _RESERVED_IDENTIFIER_FIXUP_3279.xxxx * _RESERVED_IDENTIFIER_FIXUP_3273;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2086 = (_RESERVED_IDENTIFIER_FIXUP_3261 * _RESERVED_IDENTIFIER_FIXUP_3279.yyyy) + _RESERVED_IDENTIFIER_FIXUP_2080;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3286 = _RESERVED_IDENTIFIER_FIXUP_2080;
    _RESERVED_IDENTIFIER_FIXUP_3286.x = _RESERVED_IDENTIFIER_FIXUP_1231;
    float _RESERVED_IDENTIFIER_FIXUP_2099 = clamp((_RESERVED_IDENTIFIER_FIXUP_1231 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3286.x = _RESERVED_IDENTIFIER_FIXUP_2099;
    float _RESERVED_IDENTIFIER_FIXUP_2105 = ((-_RESERVED_IDENTIFIER_FIXUP_2099) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3286.y = _RESERVED_IDENTIFIER_FIXUP_2105;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3650;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3649;
    if (_RESERVED_IDENTIFIER_FIXUP_2105 != (-_RESERVED_IDENTIFIER_FIXUP_2105))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2117 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3298 = _RESERVED_IDENTIFIER_FIXUP_3286;
        _RESERVED_IDENTIFIER_FIXUP_3298.y = _RESERVED_IDENTIFIER_FIXUP_2117.x;
        _RESERVED_IDENTIFIER_FIXUP_3298.z = _RESERVED_IDENTIFIER_FIXUP_2117.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2127 = _RESERVED_IDENTIFIER_FIXUP_3298.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3302;
        _RESERVED_IDENTIFIER_FIXUP_3302.x = _RESERVED_IDENTIFIER_FIXUP_2127.x;
        _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_2127.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2137 = _RESERVED_IDENTIFIER_FIXUP_3298.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3306;
        _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_2137.x;
        _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_2137.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2147 = _RESERVED_IDENTIFIER_FIXUP_3298.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
        _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_2147.x;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2147.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2157 = _RESERVED_IDENTIFIER_FIXUP_3298.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3314;
        _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_2157.x;
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_2157.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2165 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_2165.xy;
        float param_45 = _RESERVED_IDENTIFIER_FIXUP_2165.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2171 = hdLod5(param_44, param_45);
        _RESERVED_IDENTIFIER_FIXUP_3302.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3306.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3310.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3314.w = 0.0;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3302.xy;
        float param_47 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2171.y = hdLod5(param_46, param_47).x;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3306.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2171.z = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3310.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2171.w = hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2228 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2171 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3314.xy;
        float param_53 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2234 = hdLod5(param_52, param_53).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3298.y = _RESERVED_IDENTIFIER_FIXUP_2234;
        float _RESERVED_IDENTIFIER_FIXUP_2239 = float(_RESERVED_IDENTIFIER_FIXUP_2234 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3298.y = _RESERVED_IDENTIFIER_FIXUP_2239;
        float _RESERVED_IDENTIFIER_FIXUP_2242 = dot(_RESERVED_IDENTIFIER_FIXUP_2228, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3298.z = _RESERVED_IDENTIFIER_FIXUP_2242;
        float _RESERVED_IDENTIFIER_FIXUP_2248 = _RESERVED_IDENTIFIER_FIXUP_2239 + _RESERVED_IDENTIFIER_FIXUP_2242;
        _RESERVED_IDENTIFIER_FIXUP_3298.y = _RESERVED_IDENTIFIER_FIXUP_2248;
        float _RESERVED_IDENTIFIER_FIXUP_2253 = (_RESERVED_IDENTIFIER_FIXUP_2248 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3298.y = _RESERVED_IDENTIFIER_FIXUP_2253;
        _RESERVED_IDENTIFIER_FIXUP_3298.x = (_RESERVED_IDENTIFIER_FIXUP_2099 * _RESERVED_IDENTIFIER_FIXUP_2253) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3650 = _RESERVED_IDENTIFIER_FIXUP_2228;
        _RESERVED_IDENTIFIER_FIXUP_3649 = _RESERVED_IDENTIFIER_FIXUP_3298;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3296 = _RESERVED_IDENTIFIER_FIXUP_3286;
        _RESERVED_IDENTIFIER_FIXUP_3296.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3650 = _RESERVED_IDENTIFIER_FIXUP_3279;
        _RESERVED_IDENTIFIER_FIXUP_3649 = _RESERVED_IDENTIFIER_FIXUP_3296;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3370 = _RESERVED_IDENTIFIER_FIXUP_3649;
    _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_1409;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3653;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3651;
    if (_RESERVED_IDENTIFIER_FIXUP_1409 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2280 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3531 = _RESERVED_IDENTIFIER_FIXUP_3370;
        _RESERVED_IDENTIFIER_FIXUP_3531.y = _RESERVED_IDENTIFIER_FIXUP_2280.x;
        _RESERVED_IDENTIFIER_FIXUP_3531.z = _RESERVED_IDENTIFIER_FIXUP_2280.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2290 = _RESERVED_IDENTIFIER_FIXUP_3531.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3535;
        _RESERVED_IDENTIFIER_FIXUP_3535.x = _RESERVED_IDENTIFIER_FIXUP_2290.x;
        _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_2290.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2300 = _RESERVED_IDENTIFIER_FIXUP_3531.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3539;
        _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_2300.x;
        _RESERVED_IDENTIFIER_FIXUP_3539.y = _RESERVED_IDENTIFIER_FIXUP_2300.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2310 = _RESERVED_IDENTIFIER_FIXUP_3531.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3543;
        _RESERVED_IDENTIFIER_FIXUP_3543.x = _RESERVED_IDENTIFIER_FIXUP_2310.x;
        _RESERVED_IDENTIFIER_FIXUP_3543.y = _RESERVED_IDENTIFIER_FIXUP_2310.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2320 = _RESERVED_IDENTIFIER_FIXUP_3531.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3547;
        _RESERVED_IDENTIFIER_FIXUP_3547.x = _RESERVED_IDENTIFIER_FIXUP_2320.x;
        _RESERVED_IDENTIFIER_FIXUP_3547.y = _RESERVED_IDENTIFIER_FIXUP_2320.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2328 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2328.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2328.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2334 = hdLod6(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3535.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3539.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3543.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3547.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3535.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2334.y = hdLod6(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3539.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2334.z = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3543.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2334.w = hdLod6(param_60, param_61).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2391 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2334 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3547.xy;
        float param_63 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2397 = hdLod6(param_62, param_63).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3531.y = _RESERVED_IDENTIFIER_FIXUP_2397;
        float _RESERVED_IDENTIFIER_FIXUP_2402 = float(_RESERVED_IDENTIFIER_FIXUP_2397 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3531.y = _RESERVED_IDENTIFIER_FIXUP_2402;
        float _RESERVED_IDENTIFIER_FIXUP_2405 = dot(_RESERVED_IDENTIFIER_FIXUP_2391, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3531.z = _RESERVED_IDENTIFIER_FIXUP_2405;
        float _RESERVED_IDENTIFIER_FIXUP_2411 = _RESERVED_IDENTIFIER_FIXUP_2402 + _RESERVED_IDENTIFIER_FIXUP_2405;
        _RESERVED_IDENTIFIER_FIXUP_3531.y = _RESERVED_IDENTIFIER_FIXUP_2411;
        _RESERVED_IDENTIFIER_FIXUP_3531.y = _RESERVED_IDENTIFIER_FIXUP_2411 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3653 = _RESERVED_IDENTIFIER_FIXUP_2391;
        _RESERVED_IDENTIFIER_FIXUP_3651 = _RESERVED_IDENTIFIER_FIXUP_3531;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2424 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3375 = _RESERVED_IDENTIFIER_FIXUP_3370;
        _RESERVED_IDENTIFIER_FIXUP_3375.z = _RESERVED_IDENTIFIER_FIXUP_2424;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3654;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3652;
        if (_RESERVED_IDENTIFIER_FIXUP_2424 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2433 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3465 = _RESERVED_IDENTIFIER_FIXUP_3375;
            _RESERVED_IDENTIFIER_FIXUP_3465.z = _RESERVED_IDENTIFIER_FIXUP_2433.x;
            _RESERVED_IDENTIFIER_FIXUP_3465.w = _RESERVED_IDENTIFIER_FIXUP_2433.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2443 = _RESERVED_IDENTIFIER_FIXUP_3465.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3469;
            _RESERVED_IDENTIFIER_FIXUP_3469.x = _RESERVED_IDENTIFIER_FIXUP_2443.x;
            _RESERVED_IDENTIFIER_FIXUP_3469.y = _RESERVED_IDENTIFIER_FIXUP_2443.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2453 = _RESERVED_IDENTIFIER_FIXUP_3465.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3473;
            _RESERVED_IDENTIFIER_FIXUP_3473.x = _RESERVED_IDENTIFIER_FIXUP_2453.x;
            _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2453.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2463 = _RESERVED_IDENTIFIER_FIXUP_3465.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3477;
            _RESERVED_IDENTIFIER_FIXUP_3477.x = _RESERVED_IDENTIFIER_FIXUP_2463.x;
            _RESERVED_IDENTIFIER_FIXUP_3477.y = _RESERVED_IDENTIFIER_FIXUP_2463.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2473 = _RESERVED_IDENTIFIER_FIXUP_3465.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3481;
            _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2473.x;
            _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2473.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2481 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_2481.xy;
            float param_65 = _RESERVED_IDENTIFIER_FIXUP_2481.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2487 = hdLod7(param_64, param_65);
            _RESERVED_IDENTIFIER_FIXUP_3469.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3473.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3477.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3481.w = 0.0;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3469.xy;
            float param_67 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2487.y = hdLod7(param_66, param_67).x;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3473.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2487.z = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3477.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2487.w = hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2544 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2487 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3481.xy;
            float param_73 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2550 = hdLod7(param_72, param_73).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3465.z = _RESERVED_IDENTIFIER_FIXUP_2550;
            float _RESERVED_IDENTIFIER_FIXUP_2555 = float(_RESERVED_IDENTIFIER_FIXUP_2550 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3465.z = _RESERVED_IDENTIFIER_FIXUP_2555;
            float _RESERVED_IDENTIFIER_FIXUP_2558 = dot(_RESERVED_IDENTIFIER_FIXUP_2544, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3465.w = _RESERVED_IDENTIFIER_FIXUP_2558;
            float _RESERVED_IDENTIFIER_FIXUP_2564 = _RESERVED_IDENTIFIER_FIXUP_2555 + _RESERVED_IDENTIFIER_FIXUP_2558;
            _RESERVED_IDENTIFIER_FIXUP_3465.z = _RESERVED_IDENTIFIER_FIXUP_2564;
            _RESERVED_IDENTIFIER_FIXUP_3465.y = _RESERVED_IDENTIFIER_FIXUP_2564 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3654 = _RESERVED_IDENTIFIER_FIXUP_2544;
            _RESERVED_IDENTIFIER_FIXUP_3652 = _RESERVED_IDENTIFIER_FIXUP_3465;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3379 = _RESERVED_IDENTIFIER_FIXUP_3650;
            _RESERVED_IDENTIFIER_FIXUP_3379.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3379.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2580 = (_RESERVED_IDENTIFIER_FIXUP_3379.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3384;
            _RESERVED_IDENTIFIER_FIXUP_3384.x = _RESERVED_IDENTIFIER_FIXUP_2580.x;
            _RESERVED_IDENTIFIER_FIXUP_3384.y = _RESERVED_IDENTIFIER_FIXUP_2580.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2590 = _RESERVED_IDENTIFIER_FIXUP_3384.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3388;
            _RESERVED_IDENTIFIER_FIXUP_3388.x = _RESERVED_IDENTIFIER_FIXUP_2590.x;
            _RESERVED_IDENTIFIER_FIXUP_3388.y = _RESERVED_IDENTIFIER_FIXUP_2590.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2600 = _RESERVED_IDENTIFIER_FIXUP_3384.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3392;
            _RESERVED_IDENTIFIER_FIXUP_3392.x = _RESERVED_IDENTIFIER_FIXUP_2600.x;
            _RESERVED_IDENTIFIER_FIXUP_3392.y = _RESERVED_IDENTIFIER_FIXUP_2600.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2610 = _RESERVED_IDENTIFIER_FIXUP_3384.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3396;
            _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_2610.x;
            _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_2610.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2620 = _RESERVED_IDENTIFIER_FIXUP_3384.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3400;
            _RESERVED_IDENTIFIER_FIXUP_3400.x = _RESERVED_IDENTIFIER_FIXUP_2620.x;
            _RESERVED_IDENTIFIER_FIXUP_3400.y = _RESERVED_IDENTIFIER_FIXUP_2620.y;
            _RESERVED_IDENTIFIER_FIXUP_3384.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3384.xy;
            float param_75 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2634 = hdLod8(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3388.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3392.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3396.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3400.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3388.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2634.y = hdLod8(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3392.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2634.z = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3396.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2634.w = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3400.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2697 = hdLod8(param_82, param_83).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3440 = _RESERVED_IDENTIFIER_FIXUP_3375;
            _RESERVED_IDENTIFIER_FIXUP_3440.z = _RESERVED_IDENTIFIER_FIXUP_2697;
            float _RESERVED_IDENTIFIER_FIXUP_2702 = float(_RESERVED_IDENTIFIER_FIXUP_2697 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3440.z = _RESERVED_IDENTIFIER_FIXUP_2702;
            float _RESERVED_IDENTIFIER_FIXUP_2705 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2634 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3440.w = _RESERVED_IDENTIFIER_FIXUP_2705;
            float _RESERVED_IDENTIFIER_FIXUP_2711 = _RESERVED_IDENTIFIER_FIXUP_2702 + _RESERVED_IDENTIFIER_FIXUP_2705;
            _RESERVED_IDENTIFIER_FIXUP_3440.z = _RESERVED_IDENTIFIER_FIXUP_2711;
            float _RESERVED_IDENTIFIER_FIXUP_2719 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3440.w = _RESERVED_IDENTIFIER_FIXUP_2719;
            float _RESERVED_IDENTIFIER_FIXUP_2725 = clamp((_RESERVED_IDENTIFIER_FIXUP_2719 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3440.w = _RESERVED_IDENTIFIER_FIXUP_2725;
            float _RESERVED_IDENTIFIER_FIXUP_2730 = (_RESERVED_IDENTIFIER_FIXUP_2711 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3440.z = _RESERVED_IDENTIFIER_FIXUP_2730;
            _RESERVED_IDENTIFIER_FIXUP_3440.y = (_RESERVED_IDENTIFIER_FIXUP_2725 * _RESERVED_IDENTIFIER_FIXUP_2730) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3654 = _RESERVED_IDENTIFIER_FIXUP_3379;
            _RESERVED_IDENTIFIER_FIXUP_3652 = _RESERVED_IDENTIFIER_FIXUP_3440;
        }
        _RESERVED_IDENTIFIER_FIXUP_3653 = _RESERVED_IDENTIFIER_FIXUP_3654;
        _RESERVED_IDENTIFIER_FIXUP_3651 = _RESERVED_IDENTIFIER_FIXUP_3652;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2745 = min(_RESERVED_IDENTIFIER_FIXUP_3651.y, _RESERVED_IDENTIFIER_FIXUP_3651.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3599 = _RESERVED_IDENTIFIER_FIXUP_3653;
    _RESERVED_IDENTIFIER_FIXUP_3599.x = _RESERVED_IDENTIFIER_FIXUP_2745;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3665 = vec4((_RESERVED_IDENTIFIER_FIXUP_2745 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2086.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2767 = _RESERVED_IDENTIFIER_FIXUP_3599.xxx * _RESERVED_IDENTIFIER_FIXUP_3665.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3610 = _RESERVED_IDENTIFIER_FIXUP_3665;
    _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2767.x;
    _RESERVED_IDENTIFIER_FIXUP_3610.z = _RESERVED_IDENTIFIER_FIXUP_2767.y;
    _RESERVED_IDENTIFIER_FIXUP_3610.w = _RESERVED_IDENTIFIER_FIXUP_2767.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2781 = (_RESERVED_IDENTIFIER_FIXUP_2086.xyz * _RESERVED_IDENTIFIER_FIXUP_3610.xxx) + _RESERVED_IDENTIFIER_FIXUP_3610.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3616 = _RESERVED_IDENTIFIER_FIXUP_2086;
    _RESERVED_IDENTIFIER_FIXUP_3616.x = _RESERVED_IDENTIFIER_FIXUP_2781.x;
    _RESERVED_IDENTIFIER_FIXUP_3616.y = _RESERVED_IDENTIFIER_FIXUP_2781.y;
    _RESERVED_IDENTIFIER_FIXUP_3616.z = _RESERVED_IDENTIFIER_FIXUP_2781.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2794 = _RESERVED_IDENTIFIER_FIXUP_3616.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3622 = _RESERVED_IDENTIFIER_FIXUP_3616;
    _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2794.x;
    _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2794.y;
    _RESERVED_IDENTIFIER_FIXUP_3622.z = _RESERVED_IDENTIFIER_FIXUP_2794.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3622.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_986 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_995;
    if (_RESERVED_IDENTIFIER_FIXUP_986)
    {
        _RESERVED_IDENTIFIER_FIXUP_995 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_995 = _RESERVED_IDENTIFIER_FIXUP_986;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_995)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1032 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3231.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1058 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2847;
    if (_RESERVED_IDENTIFIER_FIXUP_1032 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2847 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1032), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1058);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2847 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1058);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2847;
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 hdB86 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = hdB86.x;
    r3.y = hdB86.y;
    vec3 hdB98 = v0.xyz + v0.xyz;
    r4.x = hdB98.x;
    r4.y = hdB98.y;
    r4.z = hdB98.z;
    vec3 hdB110 = r0.xyz * r4.xyz;
    r5.x = hdB110.x;
    r5.y = hdB110.y;
    r5.z = hdB110.z;
    vec4 hdB119 = r0;
    vec3 hdB128 = mix(r5.xyz, hdB119.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB128.x;
    r0.y = hdB128.y;
    r0.z = hdB128.z;
    vec3 hdB139 = r1.xyz * r4.xyz;
    r3.x = hdB139.x;
    r3.z = hdB139.y;
    r3.w = hdB139.z;
    vec4 hdB149 = r1;
    vec3 hdB155 = mix(r3.xzw, hdB149.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = hdB155.x;
    r1.y = hdB155.y;
    r1.z = hdB155.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB219 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB219.x;
        r1.z = hdB219.y;
        vec2 hdB230 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB230.x;
        r2.y = hdB230.y;
        vec2 hdB241 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB241.x;
        r3.y = hdB241.y;
        vec2 hdB252 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB252.x;
        r4.y = hdB252.y;
        vec2 hdB263 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB263.x;
        r5.y = hdB263.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r6.xy;
        float param_3 = r6.w;
        r6 = hdLod5(param_2, param_3);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
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
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
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
    r1.y = max(abs(v5.x), abs(v5.y));
    if (r1.y < 1.0)
    {
        vec2 hdB393 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB393.x;
        r1.z = hdB393.y;
        vec2 hdB403 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB403.x;
        r2.y = hdB403.y;
        vec2 hdB413 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB413.x;
        r3.y = hdB413.y;
        vec2 hdB423 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB423.x;
        r4.y = hdB423.y;
        vec2 hdB433 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB433.x;
        r5.y = hdB433.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod6(param_12, param_13);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_18 = r4.xy;
        float param_19 = r4.w;
        r4 = hdLod6(param_18, param_19);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_20 = r5.xy;
        float param_21 = r5.w;
        r5 = hdLod6(param_20, param_21);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            vec2 hdB548 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB548.x;
            r1.w = hdB548.y;
            vec2 hdB558 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB558.x;
            r2.y = hdB558.y;
            vec2 hdB568 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB568.x;
            r3.y = hdB568.y;
            vec2 hdB578 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB578.x;
            r4.y = hdB578.y;
            vec2 hdB588 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB588.x;
            r5.y = hdB588.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r6.xy;
            float param_23 = r6.w;
            r6 = hdLod7(param_22, param_23);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_28 = r4.xy;
            float param_29 = r4.w;
            r4 = hdLod7(param_28, param_29);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_30 = r5.xy;
            float param_31 = r5.w;
            r5 = hdLod7(param_30, param_31);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v6.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v4.w;
            r2.y = v5.w;
            vec2 hdB696 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB696.x;
            r3.y = hdB696.y;
            vec2 hdB706 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB706.x;
            r4.y = hdB706.y;
            vec2 hdB716 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB716.x;
            r5.y = hdB716.y;
            vec2 hdB726 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB726.x;
            r6.y = hdB726.y;
            vec2 hdB736 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB736.x;
            r7.y = hdB736.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod8(param_32, param_33);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_34 = r4.xy;
            float param_35 = r4.w;
            r4 = hdLod8(param_34, param_35);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_36 = r5.xy;
            float param_37 = r5.w;
            r5 = hdLod8(param_36, param_37);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_38 = r6.xy;
            float param_39 = r6.w;
            r6 = hdLod8(param_38, param_39);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_40 = r7.xy;
            float param_41 = r7.w;
            r7 = hdLod8(param_40, param_41);
            r3.y = r4.x;
            r3.z = r5.x;
            r3.w = r6.x;
            r3 += (-v6.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v6.w);
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
    vec3 hdB875 = r0.www * v1.xyz;
    r1.y = hdB875.x;
    r1.z = hdB875.y;
    r1.w = hdB875.z;
    vec4 hdB884 = r1;
    vec3 hdB886 = r2.xxx * hdB884.yzw;
    r1.y = hdB886.x;
    r1.z = hdB886.y;
    r1.w = hdB886.z;
    vec4 hdB893 = r0;
    vec3 hdB900 = (hdB893.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB900.x;
    r0.y = hdB900.y;
    r0.z = hdB900.z;
    vec4 hdB907 = r0;
    vec3 hdB914 = hdB907.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB914.x;
    r0.y = hdB914.y;
    r0.z = hdB914.z;
    vec3 hdB929 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB929.x;
    oC0.y = hdB929.y;
    oC0.z = hdB929.z;
    oC0.w = 1.0;
    bool hdB941 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB949;
    if (hdB941)
    {
        hdB949 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB949 = hdB941;
    }
    if (hdB949)
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
    bool _3227 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3237;
    if (_3227)
    {
        _3237 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3237 = _3227;
    }
    if (_3237)
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
        bool _3262 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3277;
        if (!_3262)
        {
            _3277 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3277 = _3262;
        }
        if (_3277)
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
