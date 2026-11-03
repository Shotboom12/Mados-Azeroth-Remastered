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
float _RESERVED_IDENTIFIER_FIXUP_3717;
vec4 _RESERVED_IDENTIFIER_FIXUP_3718;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1159 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1163 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1167 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1171 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1167.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2958 = _RESERVED_IDENTIFIER_FIXUP_1167;
    _RESERVED_IDENTIFIER_FIXUP_2958.y = _RESERVED_IDENTIFIER_FIXUP_1171;
    _RESERVED_IDENTIFIER_FIXUP_2958.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1171;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_1163 * _RESERVED_IDENTIFIER_FIXUP_2958.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1187 = (_RESERVED_IDENTIFIER_FIXUP_1159 * _RESERVED_IDENTIFIER_FIXUP_2958.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1181;
    float _RESERVED_IDENTIFIER_FIXUP_1194 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2965 = _RESERVED_IDENTIFIER_FIXUP_1181;
    _RESERVED_IDENTIFIER_FIXUP_2965.x = _RESERVED_IDENTIFIER_FIXUP_1194;
    float _RESERVED_IDENTIFIER_FIXUP_1200 = clamp((_RESERVED_IDENTIFIER_FIXUP_1194 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2965.x = _RESERVED_IDENTIFIER_FIXUP_1200;
    float _RESERVED_IDENTIFIER_FIXUP_1206 = ((-_RESERVED_IDENTIFIER_FIXUP_1200) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2965.x = _RESERVED_IDENTIFIER_FIXUP_1206;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3719;
    if (_RESERVED_IDENTIFIER_FIXUP_1206 != (-_RESERVED_IDENTIFIER_FIXUP_1206))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1218 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1218.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1218.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1224 = hdLod5(param_2, param_3);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1228 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3177 = _RESERVED_IDENTIFIER_FIXUP_1224;
        _RESERVED_IDENTIFIER_FIXUP_3177.y = _RESERVED_IDENTIFIER_FIXUP_1228.x;
        _RESERVED_IDENTIFIER_FIXUP_3177.z = _RESERVED_IDENTIFIER_FIXUP_1228.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_3177.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3181;
        _RESERVED_IDENTIFIER_FIXUP_3181.x = _RESERVED_IDENTIFIER_FIXUP_1238.x;
        _RESERVED_IDENTIFIER_FIXUP_3181.y = _RESERVED_IDENTIFIER_FIXUP_1238.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1245 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1249 = _RESERVED_IDENTIFIER_FIXUP_1245.y;
        _RESERVED_IDENTIFIER_FIXUP_3181.w = _RESERVED_IDENTIFIER_FIXUP_1249;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3181.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1249;
        float _RESERVED_IDENTIFIER_FIXUP_1260 = _RESERVED_IDENTIFIER_FIXUP_1224.x + hdLod5(param_4, param_5).x;
        _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1260;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1267 = _RESERVED_IDENTIFIER_FIXUP_3177.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3194;
        _RESERVED_IDENTIFIER_FIXUP_3194.x = _RESERVED_IDENTIFIER_FIXUP_1267.x;
        _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_1267.y;
        _RESERVED_IDENTIFIER_FIXUP_3194.w = _RESERVED_IDENTIFIER_FIXUP_1249;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3194.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1249;
        float _RESERVED_IDENTIFIER_FIXUP_1289 = _RESERVED_IDENTIFIER_FIXUP_1260 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1289;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_3177.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3207;
        _RESERVED_IDENTIFIER_FIXUP_3207.x = _RESERVED_IDENTIFIER_FIXUP_1296.x;
        _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_1296.y;
        _RESERVED_IDENTIFIER_FIXUP_3207.w = _RESERVED_IDENTIFIER_FIXUP_1249;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3207.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1249;
        float _RESERVED_IDENTIFIER_FIXUP_1318 = _RESERVED_IDENTIFIER_FIXUP_1289 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1318;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1325 = _RESERVED_IDENTIFIER_FIXUP_3177.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3220;
        _RESERVED_IDENTIFIER_FIXUP_3220.x = _RESERVED_IDENTIFIER_FIXUP_1325.x;
        _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1325.y;
        _RESERVED_IDENTIFIER_FIXUP_3220.w = _RESERVED_IDENTIFIER_FIXUP_1249;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3220.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1249;
        float _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1318 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1347;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_3177.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3233;
        _RESERVED_IDENTIFIER_FIXUP_3233.x = _RESERVED_IDENTIFIER_FIXUP_1354.x;
        _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_1354.y;
        _RESERVED_IDENTIFIER_FIXUP_3233.w = _RESERVED_IDENTIFIER_FIXUP_1249;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3233.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1249;
        float _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_1347 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1376;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_3177.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3246;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1383.x;
        _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1383.y;
        _RESERVED_IDENTIFIER_FIXUP_3246.w = _RESERVED_IDENTIFIER_FIXUP_1249;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3246.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1249;
        float _RESERVED_IDENTIFIER_FIXUP_1405 = _RESERVED_IDENTIFIER_FIXUP_1376 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1405;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1412 = _RESERVED_IDENTIFIER_FIXUP_3177.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3259;
        _RESERVED_IDENTIFIER_FIXUP_3259.x = _RESERVED_IDENTIFIER_FIXUP_1412.x;
        _RESERVED_IDENTIFIER_FIXUP_3259.y = _RESERVED_IDENTIFIER_FIXUP_1412.y;
        _RESERVED_IDENTIFIER_FIXUP_3259.w = _RESERVED_IDENTIFIER_FIXUP_1249;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3259.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1249;
        float _RESERVED_IDENTIFIER_FIXUP_1434 = _RESERVED_IDENTIFIER_FIXUP_1405 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1434;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1441 = _RESERVED_IDENTIFIER_FIXUP_3177.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3272;
        _RESERVED_IDENTIFIER_FIXUP_3272.x = _RESERVED_IDENTIFIER_FIXUP_1441.x;
        _RESERVED_IDENTIFIER_FIXUP_3272.y = _RESERVED_IDENTIFIER_FIXUP_1441.y;
        _RESERVED_IDENTIFIER_FIXUP_3272.w = _RESERVED_IDENTIFIER_FIXUP_1249;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3272.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1249;
        float _RESERVED_IDENTIFIER_FIXUP_1463 = _RESERVED_IDENTIFIER_FIXUP_1434 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1463;
        _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1463 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3719 = _RESERVED_IDENTIFIER_FIXUP_3177;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1476 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2965.y = _RESERVED_IDENTIFIER_FIXUP_1476;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3720;
        if (_RESERVED_IDENTIFIER_FIXUP_1476 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1485 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1495 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_1495.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3117 = _RESERVED_IDENTIFIER_FIXUP_2965;
            _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1497;
            _RESERVED_IDENTIFIER_FIXUP_3117.z = _RESERVED_IDENTIFIER_FIXUP_1495.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1505 = _RESERVED_IDENTIFIER_FIXUP_3117.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3121;
            _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_1505.x;
            _RESERVED_IDENTIFIER_FIXUP_3121.y = _RESERVED_IDENTIFIER_FIXUP_1505.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1512 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_1512.y;
            _RESERVED_IDENTIFIER_FIXUP_3121.w = _RESERVED_IDENTIFIER_FIXUP_1516;
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1485.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1485.w;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3121.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1516;
            float _RESERVED_IDENTIFIER_FIXUP_1527 = hdLod6(param_20, param_21).x + hdLod6(param_22, param_23).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3742 = vec4(_RESERVED_IDENTIFIER_FIXUP_1206, _RESERVED_IDENTIFIER_FIXUP_1497, _RESERVED_IDENTIFIER_FIXUP_1495.y, _RESERVED_IDENTIFIER_FIXUP_1527);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_3742.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3134;
            _RESERVED_IDENTIFIER_FIXUP_3134.x = _RESERVED_IDENTIFIER_FIXUP_1534.x;
            _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1534.y;
            _RESERVED_IDENTIFIER_FIXUP_3134.w = _RESERVED_IDENTIFIER_FIXUP_1516;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3134.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1516;
            float _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_1527 + hdLod6(param_24, param_25).x;
            _RESERVED_IDENTIFIER_FIXUP_3742.w = _RESERVED_IDENTIFIER_FIXUP_1556;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1563 = _RESERVED_IDENTIFIER_FIXUP_3742.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3147;
            _RESERVED_IDENTIFIER_FIXUP_3147.x = _RESERVED_IDENTIFIER_FIXUP_1563.x;
            _RESERVED_IDENTIFIER_FIXUP_3147.y = _RESERVED_IDENTIFIER_FIXUP_1563.y;
            _RESERVED_IDENTIFIER_FIXUP_3147.w = _RESERVED_IDENTIFIER_FIXUP_1516;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3147.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1516;
            float _RESERVED_IDENTIFIER_FIXUP_1585 = _RESERVED_IDENTIFIER_FIXUP_1556 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_3742.w = _RESERVED_IDENTIFIER_FIXUP_1585;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1592 = _RESERVED_IDENTIFIER_FIXUP_3742.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3160;
            _RESERVED_IDENTIFIER_FIXUP_3160.x = _RESERVED_IDENTIFIER_FIXUP_1592.x;
            _RESERVED_IDENTIFIER_FIXUP_3160.y = _RESERVED_IDENTIFIER_FIXUP_1592.y;
            _RESERVED_IDENTIFIER_FIXUP_3160.w = _RESERVED_IDENTIFIER_FIXUP_1516;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3160.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1516;
            float _RESERVED_IDENTIFIER_FIXUP_1614 = _RESERVED_IDENTIFIER_FIXUP_1585 + hdLod6(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_1614;
            _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_1614 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3720 = _RESERVED_IDENTIFIER_FIXUP_3742;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1627 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2982 = _RESERVED_IDENTIFIER_FIXUP_2965;
            _RESERVED_IDENTIFIER_FIXUP_2982.y = _RESERVED_IDENTIFIER_FIXUP_1627;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3721;
            if (_RESERVED_IDENTIFIER_FIXUP_1627 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1636 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1646 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1648 = _RESERVED_IDENTIFIER_FIXUP_1646.x;
                _RESERVED_IDENTIFIER_FIXUP_2982.y = _RESERVED_IDENTIFIER_FIXUP_1648;
                _RESERVED_IDENTIFIER_FIXUP_2982.z = _RESERVED_IDENTIFIER_FIXUP_1646.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1656 = _RESERVED_IDENTIFIER_FIXUP_2982.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3061;
                _RESERVED_IDENTIFIER_FIXUP_3061.x = _RESERVED_IDENTIFIER_FIXUP_1656.x;
                _RESERVED_IDENTIFIER_FIXUP_3061.y = _RESERVED_IDENTIFIER_FIXUP_1656.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1663 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1667 = _RESERVED_IDENTIFIER_FIXUP_1663.y;
                _RESERVED_IDENTIFIER_FIXUP_3061.w = _RESERVED_IDENTIFIER_FIXUP_1667;
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1636.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1636.w;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3061.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1667;
                float _RESERVED_IDENTIFIER_FIXUP_1678 = hdLod7(param_30, param_31).x + hdLod7(param_32, param_33).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3741 = vec4(_RESERVED_IDENTIFIER_FIXUP_1206, _RESERVED_IDENTIFIER_FIXUP_1648, _RESERVED_IDENTIFIER_FIXUP_1646.y, _RESERVED_IDENTIFIER_FIXUP_1678);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1685 = _RESERVED_IDENTIFIER_FIXUP_3741.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3074;
                _RESERVED_IDENTIFIER_FIXUP_3074.x = _RESERVED_IDENTIFIER_FIXUP_1685.x;
                _RESERVED_IDENTIFIER_FIXUP_3074.y = _RESERVED_IDENTIFIER_FIXUP_1685.y;
                _RESERVED_IDENTIFIER_FIXUP_3074.w = _RESERVED_IDENTIFIER_FIXUP_1667;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3074.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1667;
                float _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_1678 + hdLod7(param_34, param_35).x;
                _RESERVED_IDENTIFIER_FIXUP_3741.w = _RESERVED_IDENTIFIER_FIXUP_1707;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1714 = _RESERVED_IDENTIFIER_FIXUP_3741.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3087;
                _RESERVED_IDENTIFIER_FIXUP_3087.x = _RESERVED_IDENTIFIER_FIXUP_1714.x;
                _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1714.y;
                _RESERVED_IDENTIFIER_FIXUP_3087.w = _RESERVED_IDENTIFIER_FIXUP_1667;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3087.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1667;
                float _RESERVED_IDENTIFIER_FIXUP_1736 = _RESERVED_IDENTIFIER_FIXUP_1707 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_3741.w = _RESERVED_IDENTIFIER_FIXUP_1736;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1743 = _RESERVED_IDENTIFIER_FIXUP_3741.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3100;
                _RESERVED_IDENTIFIER_FIXUP_3100.x = _RESERVED_IDENTIFIER_FIXUP_1743.x;
                _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1743.y;
                _RESERVED_IDENTIFIER_FIXUP_3100.w = _RESERVED_IDENTIFIER_FIXUP_1667;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3100.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1667;
                float _RESERVED_IDENTIFIER_FIXUP_1765 = _RESERVED_IDENTIFIER_FIXUP_1736 + hdLod7(param_38, param_39).x;
                _RESERVED_IDENTIFIER_FIXUP_3741.y = _RESERVED_IDENTIFIER_FIXUP_1765;
                _RESERVED_IDENTIFIER_FIXUP_3741.x = _RESERVED_IDENTIFIER_FIXUP_1765 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3721 = _RESERVED_IDENTIFIER_FIXUP_3741;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1781 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1785 = _RESERVED_IDENTIFIER_FIXUP_1781.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1796 = vec4(_RESERVED_IDENTIFIER_FIXUP_1781.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1785).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3738 = vec4(_RESERVED_IDENTIFIER_FIXUP_1796 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1785);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1833 = _RESERVED_IDENTIFIER_FIXUP_1796 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3015 = _RESERVED_IDENTIFIER_FIXUP_3738;
                _RESERVED_IDENTIFIER_FIXUP_3015.x = _RESERVED_IDENTIFIER_FIXUP_1833.x;
                _RESERVED_IDENTIFIER_FIXUP_3015.y = _RESERVED_IDENTIFIER_FIXUP_1833.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1855 = _RESERVED_IDENTIFIER_FIXUP_1796 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3024 = _RESERVED_IDENTIFIER_FIXUP_3015;
                _RESERVED_IDENTIFIER_FIXUP_3024.x = _RESERVED_IDENTIFIER_FIXUP_1855.x;
                _RESERVED_IDENTIFIER_FIXUP_3024.y = _RESERVED_IDENTIFIER_FIXUP_1855.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1877 = _RESERVED_IDENTIFIER_FIXUP_1796 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3033 = _RESERVED_IDENTIFIER_FIXUP_3024;
                _RESERVED_IDENTIFIER_FIXUP_3033.x = _RESERVED_IDENTIFIER_FIXUP_1877.x;
                _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1877.y;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_1796;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1785;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3738.xy;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1785;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3015.xy;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1785;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3024.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1785;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3033.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1785;
                float _RESERVED_IDENTIFIER_FIXUP_1892 = (((hdLod8(param_40, param_41).x + hdLod8(param_42, param_43).x) + hdLod8(param_44, param_45).x) + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x;
                float _RESERVED_IDENTIFIER_FIXUP_1906 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1911 = (_RESERVED_IDENTIFIER_FIXUP_1892 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3721 = vec4((_RESERVED_IDENTIFIER_FIXUP_1906 * _RESERVED_IDENTIFIER_FIXUP_1911) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1906, _RESERVED_IDENTIFIER_FIXUP_1911, _RESERVED_IDENTIFIER_FIXUP_1892);
            }
            _RESERVED_IDENTIFIER_FIXUP_3720 = _RESERVED_IDENTIFIER_FIXUP_3721;
        }
        _RESERVED_IDENTIFIER_FIXUP_3719 = _RESERVED_IDENTIFIER_FIXUP_3720;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3291 = _RESERVED_IDENTIFIER_FIXUP_3719;
    _RESERVED_IDENTIFIER_FIXUP_3291.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1939 = _RESERVED_IDENTIFIER_FIXUP_1187.xyz * _RESERVED_IDENTIFIER_FIXUP_3291.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3293 = _RESERVED_IDENTIFIER_FIXUP_1187;
    _RESERVED_IDENTIFIER_FIXUP_3293.x = _RESERVED_IDENTIFIER_FIXUP_1939.x;
    _RESERVED_IDENTIFIER_FIXUP_3293.y = _RESERVED_IDENTIFIER_FIXUP_1939.y;
    _RESERVED_IDENTIFIER_FIXUP_3293.z = _RESERVED_IDENTIFIER_FIXUP_1939.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1950 = _RESERVED_IDENTIFIER_FIXUP_3293.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3717).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3299 = _RESERVED_IDENTIFIER_FIXUP_3293;
    _RESERVED_IDENTIFIER_FIXUP_3299.x = _RESERVED_IDENTIFIER_FIXUP_1950.x;
    _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_1950.y;
    _RESERVED_IDENTIFIER_FIXUP_3299.z = _RESERVED_IDENTIFIER_FIXUP_1950.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1961 = _RESERVED_IDENTIFIER_FIXUP_3299.xyz + _RESERVED_IDENTIFIER_FIXUP_3299.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_3299;
    _RESERVED_IDENTIFIER_FIXUP_3305.x = _RESERVED_IDENTIFIER_FIXUP_1961.x;
    _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_1961.y;
    _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_1961.z;
    _RESERVED_IDENTIFIER_FIXUP_3291.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3291.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3291.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1986 = (_RESERVED_IDENTIFIER_FIXUP_3291.yzw * _RESERVED_IDENTIFIER_FIXUP_3291.xxx) + _RESERVED_IDENTIFIER_FIXUP_3305.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3317 = _RESERVED_IDENTIFIER_FIXUP_3305;
    _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_1986.x;
    _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_1986.y;
    _RESERVED_IDENTIFIER_FIXUP_3317.z = _RESERVED_IDENTIFIER_FIXUP_1986.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1999 = _RESERVED_IDENTIFIER_FIXUP_3317.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3323 = _RESERVED_IDENTIFIER_FIXUP_3317;
    _RESERVED_IDENTIFIER_FIXUP_3323.x = _RESERVED_IDENTIFIER_FIXUP_1999.x;
    _RESERVED_IDENTIFIER_FIXUP_3323.y = _RESERVED_IDENTIFIER_FIXUP_1999.y;
    _RESERVED_IDENTIFIER_FIXUP_3323.z = _RESERVED_IDENTIFIER_FIXUP_1999.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2052 = OptTex0( texcoord0.xyz);
    vec2 param_50 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2056 = hdTex1(param_50);
    vec2 param_51 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2060 = hdTex2(param_51);
    float _RESERVED_IDENTIFIER_FIXUP_2064 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2060.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3337 = _RESERVED_IDENTIFIER_FIXUP_2060;
    _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_2064;
    _RESERVED_IDENTIFIER_FIXUP_3337.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2064;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2074 = _RESERVED_IDENTIFIER_FIXUP_2056 * _RESERVED_IDENTIFIER_FIXUP_3337.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2080 = (_RESERVED_IDENTIFIER_FIXUP_2052 * _RESERVED_IDENTIFIER_FIXUP_3337.yyyy) + _RESERVED_IDENTIFIER_FIXUP_2074;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3344 = _RESERVED_IDENTIFIER_FIXUP_2074;
    _RESERVED_IDENTIFIER_FIXUP_3344.x = _RESERVED_IDENTIFIER_FIXUP_1194;
    float _RESERVED_IDENTIFIER_FIXUP_2093 = clamp((_RESERVED_IDENTIFIER_FIXUP_1194 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3344.x = _RESERVED_IDENTIFIER_FIXUP_2093;
    float _RESERVED_IDENTIFIER_FIXUP_2099 = ((-_RESERVED_IDENTIFIER_FIXUP_2093) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3344.x = _RESERVED_IDENTIFIER_FIXUP_2099;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3728;
    if (_RESERVED_IDENTIFIER_FIXUP_2099 != (-_RESERVED_IDENTIFIER_FIXUP_2099))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2111 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2111.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2111.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2117 = hdLod5(param_52, param_53);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2121 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3556 = _RESERVED_IDENTIFIER_FIXUP_2117;
        _RESERVED_IDENTIFIER_FIXUP_3556.y = _RESERVED_IDENTIFIER_FIXUP_2121.x;
        _RESERVED_IDENTIFIER_FIXUP_3556.z = _RESERVED_IDENTIFIER_FIXUP_2121.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2131 = _RESERVED_IDENTIFIER_FIXUP_3556.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3560;
        _RESERVED_IDENTIFIER_FIXUP_3560.x = _RESERVED_IDENTIFIER_FIXUP_2131.x;
        _RESERVED_IDENTIFIER_FIXUP_3560.y = _RESERVED_IDENTIFIER_FIXUP_2131.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2138 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2142 = _RESERVED_IDENTIFIER_FIXUP_2138.y;
        _RESERVED_IDENTIFIER_FIXUP_3560.w = _RESERVED_IDENTIFIER_FIXUP_2142;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3560.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2142;
        float _RESERVED_IDENTIFIER_FIXUP_2153 = _RESERVED_IDENTIFIER_FIXUP_2117.x + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2153;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2160 = _RESERVED_IDENTIFIER_FIXUP_3556.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3573;
        _RESERVED_IDENTIFIER_FIXUP_3573.x = _RESERVED_IDENTIFIER_FIXUP_2160.x;
        _RESERVED_IDENTIFIER_FIXUP_3573.y = _RESERVED_IDENTIFIER_FIXUP_2160.y;
        _RESERVED_IDENTIFIER_FIXUP_3573.w = _RESERVED_IDENTIFIER_FIXUP_2142;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3573.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2142;
        float _RESERVED_IDENTIFIER_FIXUP_2182 = _RESERVED_IDENTIFIER_FIXUP_2153 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2182;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2189 = _RESERVED_IDENTIFIER_FIXUP_3556.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3586;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_2189.x;
        _RESERVED_IDENTIFIER_FIXUP_3586.y = _RESERVED_IDENTIFIER_FIXUP_2189.y;
        _RESERVED_IDENTIFIER_FIXUP_3586.w = _RESERVED_IDENTIFIER_FIXUP_2142;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3586.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2142;
        float _RESERVED_IDENTIFIER_FIXUP_2211 = _RESERVED_IDENTIFIER_FIXUP_2182 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2211;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2218 = _RESERVED_IDENTIFIER_FIXUP_3556.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3599;
        _RESERVED_IDENTIFIER_FIXUP_3599.x = _RESERVED_IDENTIFIER_FIXUP_2218.x;
        _RESERVED_IDENTIFIER_FIXUP_3599.y = _RESERVED_IDENTIFIER_FIXUP_2218.y;
        _RESERVED_IDENTIFIER_FIXUP_3599.w = _RESERVED_IDENTIFIER_FIXUP_2142;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3599.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2142;
        float _RESERVED_IDENTIFIER_FIXUP_2240 = _RESERVED_IDENTIFIER_FIXUP_2211 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2240;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2247 = _RESERVED_IDENTIFIER_FIXUP_3556.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3612;
        _RESERVED_IDENTIFIER_FIXUP_3612.x = _RESERVED_IDENTIFIER_FIXUP_2247.x;
        _RESERVED_IDENTIFIER_FIXUP_3612.y = _RESERVED_IDENTIFIER_FIXUP_2247.y;
        _RESERVED_IDENTIFIER_FIXUP_3612.w = _RESERVED_IDENTIFIER_FIXUP_2142;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3612.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2142;
        float _RESERVED_IDENTIFIER_FIXUP_2269 = _RESERVED_IDENTIFIER_FIXUP_2240 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2269;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2276 = _RESERVED_IDENTIFIER_FIXUP_3556.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3625;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2276.x;
        _RESERVED_IDENTIFIER_FIXUP_3625.y = _RESERVED_IDENTIFIER_FIXUP_2276.y;
        _RESERVED_IDENTIFIER_FIXUP_3625.w = _RESERVED_IDENTIFIER_FIXUP_2142;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3625.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2142;
        float _RESERVED_IDENTIFIER_FIXUP_2298 = _RESERVED_IDENTIFIER_FIXUP_2269 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2298;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2305 = _RESERVED_IDENTIFIER_FIXUP_3556.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3638;
        _RESERVED_IDENTIFIER_FIXUP_3638.x = _RESERVED_IDENTIFIER_FIXUP_2305.x;
        _RESERVED_IDENTIFIER_FIXUP_3638.y = _RESERVED_IDENTIFIER_FIXUP_2305.y;
        _RESERVED_IDENTIFIER_FIXUP_3638.w = _RESERVED_IDENTIFIER_FIXUP_2142;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3638.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2142;
        float _RESERVED_IDENTIFIER_FIXUP_2327 = _RESERVED_IDENTIFIER_FIXUP_2298 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2327;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2334 = _RESERVED_IDENTIFIER_FIXUP_3556.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3651;
        _RESERVED_IDENTIFIER_FIXUP_3651.x = _RESERVED_IDENTIFIER_FIXUP_2334.x;
        _RESERVED_IDENTIFIER_FIXUP_3651.y = _RESERVED_IDENTIFIER_FIXUP_2334.y;
        _RESERVED_IDENTIFIER_FIXUP_3651.w = _RESERVED_IDENTIFIER_FIXUP_2142;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3651.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2142;
        float _RESERVED_IDENTIFIER_FIXUP_2356 = _RESERVED_IDENTIFIER_FIXUP_2327 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2356;
        _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2356 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3728 = _RESERVED_IDENTIFIER_FIXUP_3556;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2369 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3344.y = _RESERVED_IDENTIFIER_FIXUP_2369;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3729;
        if (_RESERVED_IDENTIFIER_FIXUP_2369 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2378 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2388 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2390 = _RESERVED_IDENTIFIER_FIXUP_2388.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3496 = _RESERVED_IDENTIFIER_FIXUP_3344;
            _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2390;
            _RESERVED_IDENTIFIER_FIXUP_3496.z = _RESERVED_IDENTIFIER_FIXUP_2388.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2398 = _RESERVED_IDENTIFIER_FIXUP_3496.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3500;
            _RESERVED_IDENTIFIER_FIXUP_3500.x = _RESERVED_IDENTIFIER_FIXUP_2398.x;
            _RESERVED_IDENTIFIER_FIXUP_3500.y = _RESERVED_IDENTIFIER_FIXUP_2398.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2405 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2409 = _RESERVED_IDENTIFIER_FIXUP_2405.y;
            _RESERVED_IDENTIFIER_FIXUP_3500.w = _RESERVED_IDENTIFIER_FIXUP_2409;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2378.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2378.w;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3500.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2409;
            float _RESERVED_IDENTIFIER_FIXUP_2420 = hdLod6(param_70, param_71).x + hdLod6(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3749 = vec4(_RESERVED_IDENTIFIER_FIXUP_2099, _RESERVED_IDENTIFIER_FIXUP_2390, _RESERVED_IDENTIFIER_FIXUP_2388.y, _RESERVED_IDENTIFIER_FIXUP_2420);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2427 = _RESERVED_IDENTIFIER_FIXUP_3749.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3513;
            _RESERVED_IDENTIFIER_FIXUP_3513.x = _RESERVED_IDENTIFIER_FIXUP_2427.x;
            _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2427.y;
            _RESERVED_IDENTIFIER_FIXUP_3513.w = _RESERVED_IDENTIFIER_FIXUP_2409;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3513.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2409;
            float _RESERVED_IDENTIFIER_FIXUP_2449 = _RESERVED_IDENTIFIER_FIXUP_2420 + hdLod6(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3749.w = _RESERVED_IDENTIFIER_FIXUP_2449;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2456 = _RESERVED_IDENTIFIER_FIXUP_3749.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3526;
            _RESERVED_IDENTIFIER_FIXUP_3526.x = _RESERVED_IDENTIFIER_FIXUP_2456.x;
            _RESERVED_IDENTIFIER_FIXUP_3526.y = _RESERVED_IDENTIFIER_FIXUP_2456.y;
            _RESERVED_IDENTIFIER_FIXUP_3526.w = _RESERVED_IDENTIFIER_FIXUP_2409;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3526.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2409;
            float _RESERVED_IDENTIFIER_FIXUP_2478 = _RESERVED_IDENTIFIER_FIXUP_2449 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3749.w = _RESERVED_IDENTIFIER_FIXUP_2478;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2485 = _RESERVED_IDENTIFIER_FIXUP_3749.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3539;
            _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_2485.x;
            _RESERVED_IDENTIFIER_FIXUP_3539.y = _RESERVED_IDENTIFIER_FIXUP_2485.y;
            _RESERVED_IDENTIFIER_FIXUP_3539.w = _RESERVED_IDENTIFIER_FIXUP_2409;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3539.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2409;
            float _RESERVED_IDENTIFIER_FIXUP_2507 = _RESERVED_IDENTIFIER_FIXUP_2478 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3749.y = _RESERVED_IDENTIFIER_FIXUP_2507;
            _RESERVED_IDENTIFIER_FIXUP_3749.x = _RESERVED_IDENTIFIER_FIXUP_2507 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3729 = _RESERVED_IDENTIFIER_FIXUP_3749;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2520 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3361 = _RESERVED_IDENTIFIER_FIXUP_3344;
            _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_2520;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3730;
            if (_RESERVED_IDENTIFIER_FIXUP_2520 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2529 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2539 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2541 = _RESERVED_IDENTIFIER_FIXUP_2539.x;
                _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_2541;
                _RESERVED_IDENTIFIER_FIXUP_3361.z = _RESERVED_IDENTIFIER_FIXUP_2539.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2549 = _RESERVED_IDENTIFIER_FIXUP_3361.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3440;
                _RESERVED_IDENTIFIER_FIXUP_3440.x = _RESERVED_IDENTIFIER_FIXUP_2549.x;
                _RESERVED_IDENTIFIER_FIXUP_3440.y = _RESERVED_IDENTIFIER_FIXUP_2549.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2556 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2560 = _RESERVED_IDENTIFIER_FIXUP_2556.y;
                _RESERVED_IDENTIFIER_FIXUP_3440.w = _RESERVED_IDENTIFIER_FIXUP_2560;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2529.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2529.w;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3440.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2560;
                float _RESERVED_IDENTIFIER_FIXUP_2571 = hdLod7(param_80, param_81).x + hdLod7(param_82, param_83).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3748 = vec4(_RESERVED_IDENTIFIER_FIXUP_2099, _RESERVED_IDENTIFIER_FIXUP_2541, _RESERVED_IDENTIFIER_FIXUP_2539.y, _RESERVED_IDENTIFIER_FIXUP_2571);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2578 = _RESERVED_IDENTIFIER_FIXUP_3748.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3453;
                _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_2578.x;
                _RESERVED_IDENTIFIER_FIXUP_3453.y = _RESERVED_IDENTIFIER_FIXUP_2578.y;
                _RESERVED_IDENTIFIER_FIXUP_3453.w = _RESERVED_IDENTIFIER_FIXUP_2560;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3453.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2560;
                float _RESERVED_IDENTIFIER_FIXUP_2600 = _RESERVED_IDENTIFIER_FIXUP_2571 + hdLod7(param_84, param_85).x;
                _RESERVED_IDENTIFIER_FIXUP_3748.w = _RESERVED_IDENTIFIER_FIXUP_2600;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2607 = _RESERVED_IDENTIFIER_FIXUP_3748.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3466;
                _RESERVED_IDENTIFIER_FIXUP_3466.x = _RESERVED_IDENTIFIER_FIXUP_2607.x;
                _RESERVED_IDENTIFIER_FIXUP_3466.y = _RESERVED_IDENTIFIER_FIXUP_2607.y;
                _RESERVED_IDENTIFIER_FIXUP_3466.w = _RESERVED_IDENTIFIER_FIXUP_2560;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3466.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2560;
                float _RESERVED_IDENTIFIER_FIXUP_2629 = _RESERVED_IDENTIFIER_FIXUP_2600 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3748.w = _RESERVED_IDENTIFIER_FIXUP_2629;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2636 = _RESERVED_IDENTIFIER_FIXUP_3748.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3479;
                _RESERVED_IDENTIFIER_FIXUP_3479.x = _RESERVED_IDENTIFIER_FIXUP_2636.x;
                _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2636.y;
                _RESERVED_IDENTIFIER_FIXUP_3479.w = _RESERVED_IDENTIFIER_FIXUP_2560;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3479.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2560;
                float _RESERVED_IDENTIFIER_FIXUP_2658 = _RESERVED_IDENTIFIER_FIXUP_2629 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3748.y = _RESERVED_IDENTIFIER_FIXUP_2658;
                _RESERVED_IDENTIFIER_FIXUP_3748.x = _RESERVED_IDENTIFIER_FIXUP_2658 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3730 = _RESERVED_IDENTIFIER_FIXUP_3748;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2674 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2678 = _RESERVED_IDENTIFIER_FIXUP_2674.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2689 = vec4(_RESERVED_IDENTIFIER_FIXUP_2674.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2678).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3745 = vec4(_RESERVED_IDENTIFIER_FIXUP_2689 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2678);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2726 = _RESERVED_IDENTIFIER_FIXUP_2689 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3394 = _RESERVED_IDENTIFIER_FIXUP_3745;
                _RESERVED_IDENTIFIER_FIXUP_3394.x = _RESERVED_IDENTIFIER_FIXUP_2726.x;
                _RESERVED_IDENTIFIER_FIXUP_3394.y = _RESERVED_IDENTIFIER_FIXUP_2726.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2748 = _RESERVED_IDENTIFIER_FIXUP_2689 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3403 = _RESERVED_IDENTIFIER_FIXUP_3394;
                _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_2748.x;
                _RESERVED_IDENTIFIER_FIXUP_3403.y = _RESERVED_IDENTIFIER_FIXUP_2748.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2770 = _RESERVED_IDENTIFIER_FIXUP_2689 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3412 = _RESERVED_IDENTIFIER_FIXUP_3403;
                _RESERVED_IDENTIFIER_FIXUP_3412.x = _RESERVED_IDENTIFIER_FIXUP_2770.x;
                _RESERVED_IDENTIFIER_FIXUP_3412.y = _RESERVED_IDENTIFIER_FIXUP_2770.y;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_2689;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2678;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3745.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2678;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3394.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2678;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3403.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2678;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3412.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2678;
                float _RESERVED_IDENTIFIER_FIXUP_2785 = (((hdLod8(param_90, param_91).x + hdLod8(param_92, param_93).x) + hdLod8(param_94, param_95).x) + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x;
                float _RESERVED_IDENTIFIER_FIXUP_2799 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2804 = (_RESERVED_IDENTIFIER_FIXUP_2785 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3730 = vec4((_RESERVED_IDENTIFIER_FIXUP_2799 * _RESERVED_IDENTIFIER_FIXUP_2804) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2799, _RESERVED_IDENTIFIER_FIXUP_2804, _RESERVED_IDENTIFIER_FIXUP_2785);
            }
            _RESERVED_IDENTIFIER_FIXUP_3729 = _RESERVED_IDENTIFIER_FIXUP_3730;
        }
        _RESERVED_IDENTIFIER_FIXUP_3728 = _RESERVED_IDENTIFIER_FIXUP_3729;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2819 = (_RESERVED_IDENTIFIER_FIXUP_3728.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3668 = _RESERVED_IDENTIFIER_FIXUP_3728;
    _RESERVED_IDENTIFIER_FIXUP_3668.y = _RESERVED_IDENTIFIER_FIXUP_2819;
    _RESERVED_IDENTIFIER_FIXUP_3668.y = _RESERVED_IDENTIFIER_FIXUP_2819;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2832 = _RESERVED_IDENTIFIER_FIXUP_2080.xyz * _RESERVED_IDENTIFIER_FIXUP_3668.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3674 = _RESERVED_IDENTIFIER_FIXUP_2080;
    _RESERVED_IDENTIFIER_FIXUP_3674.x = _RESERVED_IDENTIFIER_FIXUP_2832.x;
    _RESERVED_IDENTIFIER_FIXUP_3674.y = _RESERVED_IDENTIFIER_FIXUP_2832.y;
    _RESERVED_IDENTIFIER_FIXUP_3674.z = _RESERVED_IDENTIFIER_FIXUP_2832.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2843 = _RESERVED_IDENTIFIER_FIXUP_3674.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3680 = _RESERVED_IDENTIFIER_FIXUP_3674;
    _RESERVED_IDENTIFIER_FIXUP_3680.x = _RESERVED_IDENTIFIER_FIXUP_2843.x;
    _RESERVED_IDENTIFIER_FIXUP_3680.y = _RESERVED_IDENTIFIER_FIXUP_2843.y;
    _RESERVED_IDENTIFIER_FIXUP_3680.z = _RESERVED_IDENTIFIER_FIXUP_2843.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2854 = _RESERVED_IDENTIFIER_FIXUP_3680.xyz + _RESERVED_IDENTIFIER_FIXUP_3680.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3686 = _RESERVED_IDENTIFIER_FIXUP_3680;
    _RESERVED_IDENTIFIER_FIXUP_3686.x = _RESERVED_IDENTIFIER_FIXUP_2854.x;
    _RESERVED_IDENTIFIER_FIXUP_3686.y = _RESERVED_IDENTIFIER_FIXUP_2854.y;
    _RESERVED_IDENTIFIER_FIXUP_3686.z = _RESERVED_IDENTIFIER_FIXUP_2854.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2865 = _RESERVED_IDENTIFIER_FIXUP_3686.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3668.y = _RESERVED_IDENTIFIER_FIXUP_2865.x;
    _RESERVED_IDENTIFIER_FIXUP_3668.z = _RESERVED_IDENTIFIER_FIXUP_2865.y;
    _RESERVED_IDENTIFIER_FIXUP_3668.w = _RESERVED_IDENTIFIER_FIXUP_2865.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2879 = (_RESERVED_IDENTIFIER_FIXUP_3668.yzw * _RESERVED_IDENTIFIER_FIXUP_3668.xxx) + _RESERVED_IDENTIFIER_FIXUP_3686.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3698 = _RESERVED_IDENTIFIER_FIXUP_3686;
    _RESERVED_IDENTIFIER_FIXUP_3698.x = _RESERVED_IDENTIFIER_FIXUP_2879.x;
    _RESERVED_IDENTIFIER_FIXUP_3698.y = _RESERVED_IDENTIFIER_FIXUP_2879.y;
    _RESERVED_IDENTIFIER_FIXUP_3698.z = _RESERVED_IDENTIFIER_FIXUP_2879.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2892 = _RESERVED_IDENTIFIER_FIXUP_3698.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3704 = _RESERVED_IDENTIFIER_FIXUP_3698;
    _RESERVED_IDENTIFIER_FIXUP_3704.x = _RESERVED_IDENTIFIER_FIXUP_2892.x;
    _RESERVED_IDENTIFIER_FIXUP_3704.y = _RESERVED_IDENTIFIER_FIXUP_2892.y;
    _RESERVED_IDENTIFIER_FIXUP_3704.z = _RESERVED_IDENTIFIER_FIXUP_2892.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3704.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1020 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1029;
    if (_RESERVED_IDENTIFIER_FIXUP_1020)
    {
        _RESERVED_IDENTIFIER_FIXUP_1029 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1029 = _RESERVED_IDENTIFIER_FIXUP_1020;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1029)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1066 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3323.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1093 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2951;
    if (_RESERVED_IDENTIFIER_FIXUP_1066 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2951 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1066), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1093);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2951 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1093);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2951;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2819);
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
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 *= r2.xxxx;
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
        vec2 hdB145 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB145.x;
        r1.z = hdB145.y;
        vec2 hdB167 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB167.x;
        r2.y = hdB167.y;
        vec2 hdB175 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB175.x;
        r2.w = hdB175.y;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r1.x += r2.x;
        vec2 hdB198 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB198.x;
        r2.y = hdB198.y;
        vec2 hdB205 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB205.x;
        r2.w = hdB205.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.x += r2.x;
        vec2 hdB228 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB228.x;
        r2.y = hdB228.y;
        vec2 hdB235 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB235.x;
        r2.w = hdB235.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.x += r2.x;
        vec2 hdB258 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB258.x;
        r2.y = hdB258.y;
        vec2 hdB265 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB265.x;
        r2.w = hdB265.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.x += r2.x;
        vec2 hdB288 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB288.x;
        r2.y = hdB288.y;
        vec2 hdB295 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB295.x;
        r2.w = hdB295.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.x += r2.x;
        vec2 hdB318 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB318.x;
        r2.y = hdB318.y;
        vec2 hdB325 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB325.x;
        r2.w = hdB325.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r1.x += r2.x;
        vec2 hdB348 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB348.x;
        r2.y = hdB348.y;
        vec2 hdB355 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB355.x;
        r2.w = hdB355.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r1.x += r2.x;
        vec2 hdB378 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB378.x;
        r2.y = hdB378.y;
        vec2 hdB385 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB385.x;
        r2.w = hdB385.y;
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
            vec2 hdB435 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB435.x;
            r1.z = hdB435.y;
            vec2 hdB445 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB445.x;
            r3.y = hdB445.y;
            vec2 hdB452 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB452.x;
            r3.w = hdB452.y;
            vec2 param_22 = r3.xy;
            float param_23 = r3.w;
            r3 = hdLod6(param_22, param_23);
            r1.w = r2.x + r3.x;
            vec2 hdB474 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB474.x;
            r2.y = hdB474.y;
            vec2 hdB481 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB481.x;
            r2.w = hdB481.y;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod6(param_24, param_25);
            r1.w += r2.x;
            vec2 hdB503 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB503.x;
            r2.y = hdB503.y;
            vec2 hdB510 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB510.x;
            r2.w = hdB510.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r1.w += r2.x;
            vec2 hdB532 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB532.x;
            r2.y = hdB532.y;
            vec2 hdB539 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB539.x;
            r2.w = hdB539.y;
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
                vec2 hdB589 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB589.x;
                r1.z = hdB589.y;
                vec2 hdB599 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB599.x;
                r3.y = hdB599.y;
                vec2 hdB606 = vec2(1.0, 0.0) * v6.zx;
                r3.z = hdB606.x;
                r3.w = hdB606.y;
                vec2 param_32 = r3.xy;
                float param_33 = r3.w;
                r3 = hdLod7(param_32, param_33);
                r1.w = r2.x + r3.x;
                vec2 hdB628 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB628.x;
                r2.y = hdB628.y;
                vec2 hdB635 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB635.x;
                r2.w = hdB635.y;
                vec2 param_34 = r2.xy;
                float param_35 = r2.w;
                r2 = hdLod7(param_34, param_35);
                r1.w += r2.x;
                vec2 hdB657 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB657.x;
                r2.y = hdB657.y;
                vec2 hdB664 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB664.x;
                r2.w = hdB664.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r1.w += r2.x;
                vec2 hdB686 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB686.x;
                r2.y = hdB686.y;
                vec2 hdB693 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB693.x;
                r2.w = hdB693.y;
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
                vec2 hdB725 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB725.x;
                r2.w = hdB725.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                vec2 param_40 = r2.xy;
                float param_41 = r2.w;
                r3 = hdLod8(param_40, param_41);
                vec2 hdB750 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB750.x;
                r4.y = hdB750.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_42 = r4.xy;
                float param_43 = r4.w;
                r5 = hdLod8(param_42, param_43);
                r1.w = r3.x + r5.x;
                vec2 hdB778 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB778.x;
                r4.y = hdB778.y;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r3 = hdLod8(param_44, param_45);
                r1.w += r3.x;
                vec2 hdB800 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB800.x;
                r4.y = hdB800.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r1.w += r3.x;
                vec2 hdB822 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB822.x;
                r4.y = hdB822.y;
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
    vec4 hdB875 = r0;
    vec3 hdB879 = hdB875.xyz * r1.yyy;
    r0.x = hdB879.x;
    r0.y = hdB879.y;
    r0.z = hdB879.z;
    vec4 hdB886 = r0;
    vec3 hdB890 = hdB886.xyz * v0.xyz;
    r0.x = hdB890.x;
    r0.y = hdB890.y;
    r0.z = hdB890.z;
    vec4 hdB897 = r0;
    vec4 hdB899 = r0;
    vec3 hdB901 = hdB897.xyz + hdB899.xyz;
    r0.x = hdB901.x;
    r0.y = hdB901.y;
    r0.z = hdB901.z;
    vec3 hdB912 = r0.www * v1.xyz;
    r1.y = hdB912.x;
    r1.z = hdB912.y;
    r1.w = hdB912.z;
    vec4 hdB924 = r0;
    vec3 hdB926 = (r1.yzw * r1.xxx) + hdB924.xyz;
    r0.x = hdB926.x;
    r0.y = hdB926.y;
    r0.z = hdB926.z;
    vec4 hdB933 = r0;
    vec3 hdB940 = hdB933.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB940.x;
    r0.y = hdB940.y;
    r0.z = hdB940.z;
    vec3 hdB955 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB955.x;
    oC0.y = hdB955.y;
    oC0.z = hdB955.z;
    oC0.w = 1.0;
    bool hdB968 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB976;
    if (hdB968)
    {
        hdB976 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB976 = hdB968;
    }
    if (hdB976)
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
    bool _3355 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3365;
    if (_3355)
    {
        _3365 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3365 = _3355;
    }
    if (_3365)
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
        bool _3390 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3405;
        if (!_3390)
        {
            _3405 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3405 = _3390;
        }
        if (_3405)
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
