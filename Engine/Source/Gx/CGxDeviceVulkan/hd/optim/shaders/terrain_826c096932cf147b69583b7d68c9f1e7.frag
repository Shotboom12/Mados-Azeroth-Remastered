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
float _RESERVED_IDENTIFIER_FIXUP_3794;
vec4 _RESERVED_IDENTIFIER_FIXUP_3795;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1167 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1171 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1175 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1187 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2981 = _RESERVED_IDENTIFIER_FIXUP_1167;
    _RESERVED_IDENTIFIER_FIXUP_2981.x = _RESERVED_IDENTIFIER_FIXUP_1187;
    float _RESERVED_IDENTIFIER_FIXUP_1193 = clamp((_RESERVED_IDENTIFIER_FIXUP_1187 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2981.x = _RESERVED_IDENTIFIER_FIXUP_1193;
    float _RESERVED_IDENTIFIER_FIXUP_1199 = ((-_RESERVED_IDENTIFIER_FIXUP_1193) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2981.x = _RESERVED_IDENTIFIER_FIXUP_1199;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3799;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3796;
    if (_RESERVED_IDENTIFIER_FIXUP_1199 != (-_RESERVED_IDENTIFIER_FIXUP_1199))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1211 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3220;
        _RESERVED_IDENTIFIER_FIXUP_3220.x = _RESERVED_IDENTIFIER_FIXUP_1211.x;
        _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1211.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1221 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3224;
        _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_1221.x;
        _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_1221.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
        _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
        _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1241 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3232;
        _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_1241.x;
        _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_1241.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1251 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3236;
        _RESERVED_IDENTIFIER_FIXUP_3236.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
        _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3240;
        _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_1261.x;
        _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_1261.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1271 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3244;
        _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_1271.x;
        _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_1271.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1281 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3248;
        _RESERVED_IDENTIFIER_FIXUP_3248.x = _RESERVED_IDENTIFIER_FIXUP_1281.x;
        _RESERVED_IDENTIFIER_FIXUP_3248.y = _RESERVED_IDENTIFIER_FIXUP_1281.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3252;
        _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_1291.x;
        _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_1291.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1299 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1299.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1299.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1305 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_3224.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3228.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3232.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3236.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3236.xy;
        float param_5 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1345 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3240.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3244.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3248.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3252.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3252.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1385 = hdLod5(param_6, param_7);
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3224.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1305.y = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3228.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1305.z = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3232.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1305.w = hdLod5(param_12, param_13).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1402 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1305 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3240.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1345.y = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3244.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1345.z = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3248.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1345.w = hdLod5(param_18, param_19).x;
        float _RESERVED_IDENTIFIER_FIXUP_1425 = _RESERVED_IDENTIFIER_FIXUP_1385.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3317 = _RESERVED_IDENTIFIER_FIXUP_1385;
        _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_1425;
        float _RESERVED_IDENTIFIER_FIXUP_1430 = float(_RESERVED_IDENTIFIER_FIXUP_1425 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_1430;
        float _RESERVED_IDENTIFIER_FIXUP_1433 = dot(_RESERVED_IDENTIFIER_FIXUP_1402, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_1433;
        float _RESERVED_IDENTIFIER_FIXUP_1436 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1345 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3317.z = _RESERVED_IDENTIFIER_FIXUP_1436;
        float _RESERVED_IDENTIFIER_FIXUP_1442 = _RESERVED_IDENTIFIER_FIXUP_1433 + _RESERVED_IDENTIFIER_FIXUP_1436;
        _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_1442;
        float _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_1430 + _RESERVED_IDENTIFIER_FIXUP_1442;
        _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_1448;
        _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_1448 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_1402;
        _RESERVED_IDENTIFIER_FIXUP_3796 = _RESERVED_IDENTIFIER_FIXUP_3317;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1461 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2981.y = _RESERVED_IDENTIFIER_FIXUP_1461;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3800;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3797;
        if (_RESERVED_IDENTIFIER_FIXUP_1461 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1470 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3154 = _RESERVED_IDENTIFIER_FIXUP_2981;
            _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_1470.x;
            _RESERVED_IDENTIFIER_FIXUP_3154.z = _RESERVED_IDENTIFIER_FIXUP_1470.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1480 = _RESERVED_IDENTIFIER_FIXUP_3154.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3158;
            _RESERVED_IDENTIFIER_FIXUP_3158.x = _RESERVED_IDENTIFIER_FIXUP_1480.x;
            _RESERVED_IDENTIFIER_FIXUP_3158.y = _RESERVED_IDENTIFIER_FIXUP_1480.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1490 = _RESERVED_IDENTIFIER_FIXUP_3154.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3162;
            _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1490.x;
            _RESERVED_IDENTIFIER_FIXUP_3162.y = _RESERVED_IDENTIFIER_FIXUP_1490.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_3154.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3166;
            _RESERVED_IDENTIFIER_FIXUP_3166.x = _RESERVED_IDENTIFIER_FIXUP_1500.x;
            _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_1500.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_3154.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3170;
            _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_1510.x;
            _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1510.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1518 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1518.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1518.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1524 = hdLod6(param_20, param_21);
            _RESERVED_IDENTIFIER_FIXUP_3158.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3162.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3166.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3170.w = 0.0;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3158.xy;
            float param_23 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1524.y = hdLod6(param_22, param_23).x;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3162.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1524.z = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3166.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1524.w = hdLod6(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1581 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1524 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3170.xy;
            float param_29 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1587 = hdLod6(param_28, param_29).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_1587;
            float _RESERVED_IDENTIFIER_FIXUP_1592 = float(_RESERVED_IDENTIFIER_FIXUP_1587 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_1592;
            float _RESERVED_IDENTIFIER_FIXUP_1595 = dot(_RESERVED_IDENTIFIER_FIXUP_1581, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3154.z = _RESERVED_IDENTIFIER_FIXUP_1595;
            float _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_1592 + _RESERVED_IDENTIFIER_FIXUP_1595;
            _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_1601;
            _RESERVED_IDENTIFIER_FIXUP_3154.x = _RESERVED_IDENTIFIER_FIXUP_1601 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3800 = _RESERVED_IDENTIFIER_FIXUP_1581;
            _RESERVED_IDENTIFIER_FIXUP_3797 = _RESERVED_IDENTIFIER_FIXUP_3154;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1614 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2998 = _RESERVED_IDENTIFIER_FIXUP_2981;
            _RESERVED_IDENTIFIER_FIXUP_2998.y = _RESERVED_IDENTIFIER_FIXUP_1614;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3801;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3798;
            if (_RESERVED_IDENTIFIER_FIXUP_1614 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1623 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3088 = _RESERVED_IDENTIFIER_FIXUP_2998;
                _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_1623.x;
                _RESERVED_IDENTIFIER_FIXUP_3088.z = _RESERVED_IDENTIFIER_FIXUP_1623.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1633 = _RESERVED_IDENTIFIER_FIXUP_3088.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3092;
                _RESERVED_IDENTIFIER_FIXUP_3092.x = _RESERVED_IDENTIFIER_FIXUP_1633.x;
                _RESERVED_IDENTIFIER_FIXUP_3092.y = _RESERVED_IDENTIFIER_FIXUP_1633.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1643 = _RESERVED_IDENTIFIER_FIXUP_3088.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3096;
                _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_1643.x;
                _RESERVED_IDENTIFIER_FIXUP_3096.y = _RESERVED_IDENTIFIER_FIXUP_1643.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1653 = _RESERVED_IDENTIFIER_FIXUP_3088.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3100;
                _RESERVED_IDENTIFIER_FIXUP_3100.x = _RESERVED_IDENTIFIER_FIXUP_1653.x;
                _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1653.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1663 = _RESERVED_IDENTIFIER_FIXUP_3088.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3104;
                _RESERVED_IDENTIFIER_FIXUP_3104.x = _RESERVED_IDENTIFIER_FIXUP_1663.x;
                _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_1663.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1671 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1671.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1671.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1677 = hdLod7(param_30, param_31);
                _RESERVED_IDENTIFIER_FIXUP_3092.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3096.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3100.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3104.w = 0.0;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3092.xy;
                float param_33 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1677.y = hdLod7(param_32, param_33).x;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3096.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1677.z = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3100.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1677.w = hdLod7(param_36, param_37).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1734 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1677 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3104.xy;
                float param_39 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1740 = hdLod7(param_38, param_39).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_1740;
                float _RESERVED_IDENTIFIER_FIXUP_1745 = float(_RESERVED_IDENTIFIER_FIXUP_1740 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_1745;
                float _RESERVED_IDENTIFIER_FIXUP_1748 = dot(_RESERVED_IDENTIFIER_FIXUP_1734, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3088.z = _RESERVED_IDENTIFIER_FIXUP_1748;
                float _RESERVED_IDENTIFIER_FIXUP_1754 = _RESERVED_IDENTIFIER_FIXUP_1745 + _RESERVED_IDENTIFIER_FIXUP_1748;
                _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_1754;
                _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_1754 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3801 = _RESERVED_IDENTIFIER_FIXUP_1734;
                _RESERVED_IDENTIFIER_FIXUP_3798 = _RESERVED_IDENTIFIER_FIXUP_3088;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3002 = _RESERVED_IDENTIFIER_FIXUP_1171;
                _RESERVED_IDENTIFIER_FIXUP_3002.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3002.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1770 = (_RESERVED_IDENTIFIER_FIXUP_3002.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3007;
                _RESERVED_IDENTIFIER_FIXUP_3007.x = _RESERVED_IDENTIFIER_FIXUP_1770.x;
                _RESERVED_IDENTIFIER_FIXUP_3007.y = _RESERVED_IDENTIFIER_FIXUP_1770.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1780 = _RESERVED_IDENTIFIER_FIXUP_3007.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3011;
                _RESERVED_IDENTIFIER_FIXUP_3011.x = _RESERVED_IDENTIFIER_FIXUP_1780.x;
                _RESERVED_IDENTIFIER_FIXUP_3011.y = _RESERVED_IDENTIFIER_FIXUP_1780.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1790 = _RESERVED_IDENTIFIER_FIXUP_3007.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3015;
                _RESERVED_IDENTIFIER_FIXUP_3015.x = _RESERVED_IDENTIFIER_FIXUP_1790.x;
                _RESERVED_IDENTIFIER_FIXUP_3015.y = _RESERVED_IDENTIFIER_FIXUP_1790.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1800 = _RESERVED_IDENTIFIER_FIXUP_3007.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3019;
                _RESERVED_IDENTIFIER_FIXUP_3019.x = _RESERVED_IDENTIFIER_FIXUP_1800.x;
                _RESERVED_IDENTIFIER_FIXUP_3019.y = _RESERVED_IDENTIFIER_FIXUP_1800.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1810 = _RESERVED_IDENTIFIER_FIXUP_3007.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3023;
                _RESERVED_IDENTIFIER_FIXUP_3023.x = _RESERVED_IDENTIFIER_FIXUP_1810.x;
                _RESERVED_IDENTIFIER_FIXUP_3023.y = _RESERVED_IDENTIFIER_FIXUP_1810.y;
                _RESERVED_IDENTIFIER_FIXUP_3007.w = 0.0;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3007.xy;
                float param_41 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1824 = hdLod8(param_40, param_41);
                _RESERVED_IDENTIFIER_FIXUP_3011.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3015.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3019.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3023.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3011.xy;
                float param_43 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1824.y = hdLod8(param_42, param_43).x;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3015.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1824.z = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3019.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1824.w = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3023.xy;
                float param_49 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1887 = hdLod8(param_48, param_49).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3063 = _RESERVED_IDENTIFIER_FIXUP_2998;
                _RESERVED_IDENTIFIER_FIXUP_3063.y = _RESERVED_IDENTIFIER_FIXUP_1887;
                float _RESERVED_IDENTIFIER_FIXUP_1892 = float(_RESERVED_IDENTIFIER_FIXUP_1887 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3063.y = _RESERVED_IDENTIFIER_FIXUP_1892;
                float _RESERVED_IDENTIFIER_FIXUP_1895 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1824 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3063.z = _RESERVED_IDENTIFIER_FIXUP_1895;
                float _RESERVED_IDENTIFIER_FIXUP_1901 = _RESERVED_IDENTIFIER_FIXUP_1892 + _RESERVED_IDENTIFIER_FIXUP_1895;
                _RESERVED_IDENTIFIER_FIXUP_3063.y = _RESERVED_IDENTIFIER_FIXUP_1901;
                float _RESERVED_IDENTIFIER_FIXUP_1909 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3063.z = _RESERVED_IDENTIFIER_FIXUP_1909;
                float _RESERVED_IDENTIFIER_FIXUP_1915 = clamp((_RESERVED_IDENTIFIER_FIXUP_1909 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3063.z = _RESERVED_IDENTIFIER_FIXUP_1915;
                float _RESERVED_IDENTIFIER_FIXUP_1920 = (_RESERVED_IDENTIFIER_FIXUP_1901 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3063.y = _RESERVED_IDENTIFIER_FIXUP_1920;
                _RESERVED_IDENTIFIER_FIXUP_3063.x = (_RESERVED_IDENTIFIER_FIXUP_1915 * _RESERVED_IDENTIFIER_FIXUP_1920) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3801 = _RESERVED_IDENTIFIER_FIXUP_3002;
                _RESERVED_IDENTIFIER_FIXUP_3798 = _RESERVED_IDENTIFIER_FIXUP_3063;
            }
            _RESERVED_IDENTIFIER_FIXUP_3800 = _RESERVED_IDENTIFIER_FIXUP_3801;
            _RESERVED_IDENTIFIER_FIXUP_3797 = _RESERVED_IDENTIFIER_FIXUP_3798;
        }
        _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_3800;
        _RESERVED_IDENTIFIER_FIXUP_3796 = _RESERVED_IDENTIFIER_FIXUP_3797;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3340 = _RESERVED_IDENTIFIER_FIXUP_3796;
    _RESERVED_IDENTIFIER_FIXUP_3340.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1948 = mix(_RESERVED_IDENTIFIER_FIXUP_1167, _RESERVED_IDENTIFIER_FIXUP_1171, _RESERVED_IDENTIFIER_FIXUP_1175.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_3340.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3342 = _RESERVED_IDENTIFIER_FIXUP_3340;
    _RESERVED_IDENTIFIER_FIXUP_3342.y = _RESERVED_IDENTIFIER_FIXUP_1948.x;
    _RESERVED_IDENTIFIER_FIXUP_3342.z = _RESERVED_IDENTIFIER_FIXUP_1948.y;
    _RESERVED_IDENTIFIER_FIXUP_3342.w = _RESERVED_IDENTIFIER_FIXUP_1948.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1959 = _RESERVED_IDENTIFIER_FIXUP_3342.yzw * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3794).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3348 = _RESERVED_IDENTIFIER_FIXUP_3342;
    _RESERVED_IDENTIFIER_FIXUP_3348.y = _RESERVED_IDENTIFIER_FIXUP_1959.x;
    _RESERVED_IDENTIFIER_FIXUP_3348.z = _RESERVED_IDENTIFIER_FIXUP_1959.y;
    _RESERVED_IDENTIFIER_FIXUP_3348.w = _RESERVED_IDENTIFIER_FIXUP_1959.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1970 = _RESERVED_IDENTIFIER_FIXUP_3348.yzw + _RESERVED_IDENTIFIER_FIXUP_3348.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1972 = _RESERVED_IDENTIFIER_FIXUP_1970.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3354 = _RESERVED_IDENTIFIER_FIXUP_3348;
    _RESERVED_IDENTIFIER_FIXUP_3354.y = _RESERVED_IDENTIFIER_FIXUP_1972;
    _RESERVED_IDENTIFIER_FIXUP_3354.z = _RESERVED_IDENTIFIER_FIXUP_1970.y;
    _RESERVED_IDENTIFIER_FIXUP_3354.w = _RESERVED_IDENTIFIER_FIXUP_1970.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3360 = _RESERVED_IDENTIFIER_FIXUP_3799;
    _RESERVED_IDENTIFIER_FIXUP_3360.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3360.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3360.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1995 = (_RESERVED_IDENTIFIER_FIXUP_3360.xyz * _RESERVED_IDENTIFIER_FIXUP_3354.xxx) + _RESERVED_IDENTIFIER_FIXUP_3354.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3814 = vec4(_RESERVED_IDENTIFIER_FIXUP_1995.x, _RESERVED_IDENTIFIER_FIXUP_1972, _RESERVED_IDENTIFIER_FIXUP_1970.yz);
    _RESERVED_IDENTIFIER_FIXUP_3814.y = _RESERVED_IDENTIFIER_FIXUP_1995.y;
    _RESERVED_IDENTIFIER_FIXUP_3814.z = _RESERVED_IDENTIFIER_FIXUP_1995.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2008 = _RESERVED_IDENTIFIER_FIXUP_3814.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_3814;
    _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_2008.x;
    _RESERVED_IDENTIFIER_FIXUP_3372.y = _RESERVED_IDENTIFIER_FIXUP_2008.y;
    _RESERVED_IDENTIFIER_FIXUP_3372.z = _RESERVED_IDENTIFIER_FIXUP_2008.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2065 = OptTex0( texcoord0.xyz);
    vec2 param_50 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2069 = hdTex1(param_50);
    vec2 param_51 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2073 = hdTex2(param_51);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2078 = mix(_RESERVED_IDENTIFIER_FIXUP_2065, _RESERVED_IDENTIFIER_FIXUP_2069, _RESERVED_IDENTIFIER_FIXUP_2073.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3388 = _RESERVED_IDENTIFIER_FIXUP_2065;
    _RESERVED_IDENTIFIER_FIXUP_3388.x = _RESERVED_IDENTIFIER_FIXUP_1187;
    float _RESERVED_IDENTIFIER_FIXUP_2091 = clamp((_RESERVED_IDENTIFIER_FIXUP_1187 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3388.x = _RESERVED_IDENTIFIER_FIXUP_2091;
    float _RESERVED_IDENTIFIER_FIXUP_2097 = ((-_RESERVED_IDENTIFIER_FIXUP_2091) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3388.x = _RESERVED_IDENTIFIER_FIXUP_2097;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3808;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3805;
    if (_RESERVED_IDENTIFIER_FIXUP_2097 != (-_RESERVED_IDENTIFIER_FIXUP_2097))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2109 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3627;
        _RESERVED_IDENTIFIER_FIXUP_3627.x = _RESERVED_IDENTIFIER_FIXUP_2109.x;
        _RESERVED_IDENTIFIER_FIXUP_3627.y = _RESERVED_IDENTIFIER_FIXUP_2109.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2119 = _RESERVED_IDENTIFIER_FIXUP_3627.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3631;
        _RESERVED_IDENTIFIER_FIXUP_3631.x = _RESERVED_IDENTIFIER_FIXUP_2119.x;
        _RESERVED_IDENTIFIER_FIXUP_3631.y = _RESERVED_IDENTIFIER_FIXUP_2119.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2129 = _RESERVED_IDENTIFIER_FIXUP_3627.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3635;
        _RESERVED_IDENTIFIER_FIXUP_3635.x = _RESERVED_IDENTIFIER_FIXUP_2129.x;
        _RESERVED_IDENTIFIER_FIXUP_3635.y = _RESERVED_IDENTIFIER_FIXUP_2129.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2139 = _RESERVED_IDENTIFIER_FIXUP_3627.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3639;
        _RESERVED_IDENTIFIER_FIXUP_3639.x = _RESERVED_IDENTIFIER_FIXUP_2139.x;
        _RESERVED_IDENTIFIER_FIXUP_3639.y = _RESERVED_IDENTIFIER_FIXUP_2139.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2149 = _RESERVED_IDENTIFIER_FIXUP_3627.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3643;
        _RESERVED_IDENTIFIER_FIXUP_3643.x = _RESERVED_IDENTIFIER_FIXUP_2149.x;
        _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_2149.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2159 = _RESERVED_IDENTIFIER_FIXUP_3627.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3647;
        _RESERVED_IDENTIFIER_FIXUP_3647.x = _RESERVED_IDENTIFIER_FIXUP_2159.x;
        _RESERVED_IDENTIFIER_FIXUP_3647.y = _RESERVED_IDENTIFIER_FIXUP_2159.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2169 = _RESERVED_IDENTIFIER_FIXUP_3627.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3651;
        _RESERVED_IDENTIFIER_FIXUP_3651.x = _RESERVED_IDENTIFIER_FIXUP_2169.x;
        _RESERVED_IDENTIFIER_FIXUP_3651.y = _RESERVED_IDENTIFIER_FIXUP_2169.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2179 = _RESERVED_IDENTIFIER_FIXUP_3627.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3655;
        _RESERVED_IDENTIFIER_FIXUP_3655.x = _RESERVED_IDENTIFIER_FIXUP_2179.x;
        _RESERVED_IDENTIFIER_FIXUP_3655.y = _RESERVED_IDENTIFIER_FIXUP_2179.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2189 = _RESERVED_IDENTIFIER_FIXUP_3627.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3659;
        _RESERVED_IDENTIFIER_FIXUP_3659.x = _RESERVED_IDENTIFIER_FIXUP_2189.x;
        _RESERVED_IDENTIFIER_FIXUP_3659.y = _RESERVED_IDENTIFIER_FIXUP_2189.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2197 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2197.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2197.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2203 = hdLod5(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3631.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3635.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3639.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3643.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3643.xy;
        float param_55 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2243 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3647.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3651.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3655.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3659.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3659.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2283 = hdLod5(param_56, param_57);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3631.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2203.y = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3635.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2203.z = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3639.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2203.w = hdLod5(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2300 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2203 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3647.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2243.y = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3651.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2243.z = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3655.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2243.w = hdLod5(param_68, param_69).x;
        float _RESERVED_IDENTIFIER_FIXUP_2323 = _RESERVED_IDENTIFIER_FIXUP_2283.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3724 = _RESERVED_IDENTIFIER_FIXUP_2283;
        _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2323;
        float _RESERVED_IDENTIFIER_FIXUP_2328 = float(_RESERVED_IDENTIFIER_FIXUP_2323 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2328;
        float _RESERVED_IDENTIFIER_FIXUP_2331 = dot(_RESERVED_IDENTIFIER_FIXUP_2300, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3724.y = _RESERVED_IDENTIFIER_FIXUP_2331;
        float _RESERVED_IDENTIFIER_FIXUP_2334 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2243 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3724.z = _RESERVED_IDENTIFIER_FIXUP_2334;
        float _RESERVED_IDENTIFIER_FIXUP_2340 = _RESERVED_IDENTIFIER_FIXUP_2331 + _RESERVED_IDENTIFIER_FIXUP_2334;
        _RESERVED_IDENTIFIER_FIXUP_3724.y = _RESERVED_IDENTIFIER_FIXUP_2340;
        float _RESERVED_IDENTIFIER_FIXUP_2346 = _RESERVED_IDENTIFIER_FIXUP_2328 + _RESERVED_IDENTIFIER_FIXUP_2340;
        _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2346;
        _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2346 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3808 = _RESERVED_IDENTIFIER_FIXUP_2300;
        _RESERVED_IDENTIFIER_FIXUP_3805 = _RESERVED_IDENTIFIER_FIXUP_3724;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2359 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3388.y = _RESERVED_IDENTIFIER_FIXUP_2359;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3809;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3806;
        if (_RESERVED_IDENTIFIER_FIXUP_2359 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2368 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3561 = _RESERVED_IDENTIFIER_FIXUP_3388;
            _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_2368.x;
            _RESERVED_IDENTIFIER_FIXUP_3561.z = _RESERVED_IDENTIFIER_FIXUP_2368.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2378 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3565;
            _RESERVED_IDENTIFIER_FIXUP_3565.x = _RESERVED_IDENTIFIER_FIXUP_2378.x;
            _RESERVED_IDENTIFIER_FIXUP_3565.y = _RESERVED_IDENTIFIER_FIXUP_2378.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2388 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3569;
            _RESERVED_IDENTIFIER_FIXUP_3569.x = _RESERVED_IDENTIFIER_FIXUP_2388.x;
            _RESERVED_IDENTIFIER_FIXUP_3569.y = _RESERVED_IDENTIFIER_FIXUP_2388.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2398 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3573;
            _RESERVED_IDENTIFIER_FIXUP_3573.x = _RESERVED_IDENTIFIER_FIXUP_2398.x;
            _RESERVED_IDENTIFIER_FIXUP_3573.y = _RESERVED_IDENTIFIER_FIXUP_2398.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2408 = _RESERVED_IDENTIFIER_FIXUP_3561.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3577;
            _RESERVED_IDENTIFIER_FIXUP_3577.x = _RESERVED_IDENTIFIER_FIXUP_2408.x;
            _RESERVED_IDENTIFIER_FIXUP_3577.y = _RESERVED_IDENTIFIER_FIXUP_2408.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2416 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2416.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2416.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2422 = hdLod6(param_70, param_71);
            _RESERVED_IDENTIFIER_FIXUP_3565.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3569.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3573.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3577.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3565.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2422.y = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3569.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2422.z = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3573.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2422.w = hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2479 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2422 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3577.xy;
            float param_79 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2485 = hdLod6(param_78, param_79).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_2485;
            float _RESERVED_IDENTIFIER_FIXUP_2490 = float(_RESERVED_IDENTIFIER_FIXUP_2485 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_2490;
            float _RESERVED_IDENTIFIER_FIXUP_2493 = dot(_RESERVED_IDENTIFIER_FIXUP_2479, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3561.z = _RESERVED_IDENTIFIER_FIXUP_2493;
            float _RESERVED_IDENTIFIER_FIXUP_2499 = _RESERVED_IDENTIFIER_FIXUP_2490 + _RESERVED_IDENTIFIER_FIXUP_2493;
            _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_2499;
            _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2499 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3809 = _RESERVED_IDENTIFIER_FIXUP_2479;
            _RESERVED_IDENTIFIER_FIXUP_3806 = _RESERVED_IDENTIFIER_FIXUP_3561;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2512 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3405 = _RESERVED_IDENTIFIER_FIXUP_3388;
            _RESERVED_IDENTIFIER_FIXUP_3405.y = _RESERVED_IDENTIFIER_FIXUP_2512;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3810;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3807;
            if (_RESERVED_IDENTIFIER_FIXUP_2512 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2521 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3495 = _RESERVED_IDENTIFIER_FIXUP_3405;
                _RESERVED_IDENTIFIER_FIXUP_3495.y = _RESERVED_IDENTIFIER_FIXUP_2521.x;
                _RESERVED_IDENTIFIER_FIXUP_3495.z = _RESERVED_IDENTIFIER_FIXUP_2521.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2531 = _RESERVED_IDENTIFIER_FIXUP_3495.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3499;
                _RESERVED_IDENTIFIER_FIXUP_3499.x = _RESERVED_IDENTIFIER_FIXUP_2531.x;
                _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_2531.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2541 = _RESERVED_IDENTIFIER_FIXUP_3495.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3503;
                _RESERVED_IDENTIFIER_FIXUP_3503.x = _RESERVED_IDENTIFIER_FIXUP_2541.x;
                _RESERVED_IDENTIFIER_FIXUP_3503.y = _RESERVED_IDENTIFIER_FIXUP_2541.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2551 = _RESERVED_IDENTIFIER_FIXUP_3495.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3507;
                _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2551.x;
                _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_2551.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2561 = _RESERVED_IDENTIFIER_FIXUP_3495.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3511;
                _RESERVED_IDENTIFIER_FIXUP_3511.x = _RESERVED_IDENTIFIER_FIXUP_2561.x;
                _RESERVED_IDENTIFIER_FIXUP_3511.y = _RESERVED_IDENTIFIER_FIXUP_2561.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2569 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2569.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2569.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2575 = hdLod7(param_80, param_81);
                _RESERVED_IDENTIFIER_FIXUP_3499.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3503.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3507.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3511.w = 0.0;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3499.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2575.y = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3503.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2575.z = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3507.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2575.w = hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2632 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2575 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3511.xy;
                float param_89 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2638 = hdLod7(param_88, param_89).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3495.y = _RESERVED_IDENTIFIER_FIXUP_2638;
                float _RESERVED_IDENTIFIER_FIXUP_2643 = float(_RESERVED_IDENTIFIER_FIXUP_2638 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3495.y = _RESERVED_IDENTIFIER_FIXUP_2643;
                float _RESERVED_IDENTIFIER_FIXUP_2646 = dot(_RESERVED_IDENTIFIER_FIXUP_2632, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3495.z = _RESERVED_IDENTIFIER_FIXUP_2646;
                float _RESERVED_IDENTIFIER_FIXUP_2652 = _RESERVED_IDENTIFIER_FIXUP_2643 + _RESERVED_IDENTIFIER_FIXUP_2646;
                _RESERVED_IDENTIFIER_FIXUP_3495.y = _RESERVED_IDENTIFIER_FIXUP_2652;
                _RESERVED_IDENTIFIER_FIXUP_3495.x = _RESERVED_IDENTIFIER_FIXUP_2652 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3810 = _RESERVED_IDENTIFIER_FIXUP_2632;
                _RESERVED_IDENTIFIER_FIXUP_3807 = _RESERVED_IDENTIFIER_FIXUP_3495;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_2069.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2069.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2668 = (_RESERVED_IDENTIFIER_FIXUP_2069.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3414;
                _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_2668.x;
                _RESERVED_IDENTIFIER_FIXUP_3414.y = _RESERVED_IDENTIFIER_FIXUP_2668.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2678 = _RESERVED_IDENTIFIER_FIXUP_3414.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3418;
                _RESERVED_IDENTIFIER_FIXUP_3418.x = _RESERVED_IDENTIFIER_FIXUP_2678.x;
                _RESERVED_IDENTIFIER_FIXUP_3418.y = _RESERVED_IDENTIFIER_FIXUP_2678.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2688 = _RESERVED_IDENTIFIER_FIXUP_3414.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3422;
                _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_2688.x;
                _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_2688.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2698 = _RESERVED_IDENTIFIER_FIXUP_3414.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3426;
                _RESERVED_IDENTIFIER_FIXUP_3426.x = _RESERVED_IDENTIFIER_FIXUP_2698.x;
                _RESERVED_IDENTIFIER_FIXUP_3426.y = _RESERVED_IDENTIFIER_FIXUP_2698.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2708 = _RESERVED_IDENTIFIER_FIXUP_3414.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3430;
                _RESERVED_IDENTIFIER_FIXUP_3430.x = _RESERVED_IDENTIFIER_FIXUP_2708.x;
                _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_2708.y;
                _RESERVED_IDENTIFIER_FIXUP_3414.w = 0.0;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3414.xy;
                float param_91 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2722 = hdLod8(param_90, param_91);
                _RESERVED_IDENTIFIER_FIXUP_3418.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3422.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3426.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3430.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3418.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2722.y = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3422.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2722.z = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3426.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2722.w = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3430.xy;
                float param_99 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2785 = hdLod8(param_98, param_99).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3470 = _RESERVED_IDENTIFIER_FIXUP_3405;
                _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_2785;
                float _RESERVED_IDENTIFIER_FIXUP_2790 = float(_RESERVED_IDENTIFIER_FIXUP_2785 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_2790;
                float _RESERVED_IDENTIFIER_FIXUP_2793 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2722 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3470.z = _RESERVED_IDENTIFIER_FIXUP_2793;
                float _RESERVED_IDENTIFIER_FIXUP_2799 = _RESERVED_IDENTIFIER_FIXUP_2790 + _RESERVED_IDENTIFIER_FIXUP_2793;
                _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_2799;
                float _RESERVED_IDENTIFIER_FIXUP_2807 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3470.z = _RESERVED_IDENTIFIER_FIXUP_2807;
                float _RESERVED_IDENTIFIER_FIXUP_2813 = clamp((_RESERVED_IDENTIFIER_FIXUP_2807 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3470.z = _RESERVED_IDENTIFIER_FIXUP_2813;
                float _RESERVED_IDENTIFIER_FIXUP_2818 = (_RESERVED_IDENTIFIER_FIXUP_2799 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_2818;
                _RESERVED_IDENTIFIER_FIXUP_3470.x = (_RESERVED_IDENTIFIER_FIXUP_2813 * _RESERVED_IDENTIFIER_FIXUP_2818) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3810 = _RESERVED_IDENTIFIER_FIXUP_2069;
                _RESERVED_IDENTIFIER_FIXUP_3807 = _RESERVED_IDENTIFIER_FIXUP_3470;
            }
            _RESERVED_IDENTIFIER_FIXUP_3809 = _RESERVED_IDENTIFIER_FIXUP_3810;
            _RESERVED_IDENTIFIER_FIXUP_3806 = _RESERVED_IDENTIFIER_FIXUP_3807;
        }
        _RESERVED_IDENTIFIER_FIXUP_3808 = _RESERVED_IDENTIFIER_FIXUP_3809;
        _RESERVED_IDENTIFIER_FIXUP_3805 = _RESERVED_IDENTIFIER_FIXUP_3806;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2833 = (_RESERVED_IDENTIFIER_FIXUP_3805.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_3805;
    _RESERVED_IDENTIFIER_FIXUP_3745.y = _RESERVED_IDENTIFIER_FIXUP_2833;
    _RESERVED_IDENTIFIER_FIXUP_3745.y = _RESERVED_IDENTIFIER_FIXUP_2833;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2846 = _RESERVED_IDENTIFIER_FIXUP_2078.xyz * _RESERVED_IDENTIFIER_FIXUP_3745.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3751 = _RESERVED_IDENTIFIER_FIXUP_3745;
    _RESERVED_IDENTIFIER_FIXUP_3751.y = _RESERVED_IDENTIFIER_FIXUP_2846.x;
    _RESERVED_IDENTIFIER_FIXUP_3751.z = _RESERVED_IDENTIFIER_FIXUP_2846.y;
    _RESERVED_IDENTIFIER_FIXUP_3751.w = _RESERVED_IDENTIFIER_FIXUP_2846.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2857 = _RESERVED_IDENTIFIER_FIXUP_3751.yzw * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3757 = _RESERVED_IDENTIFIER_FIXUP_3751;
    _RESERVED_IDENTIFIER_FIXUP_3757.y = _RESERVED_IDENTIFIER_FIXUP_2857.x;
    _RESERVED_IDENTIFIER_FIXUP_3757.z = _RESERVED_IDENTIFIER_FIXUP_2857.y;
    _RESERVED_IDENTIFIER_FIXUP_3757.w = _RESERVED_IDENTIFIER_FIXUP_2857.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2868 = _RESERVED_IDENTIFIER_FIXUP_3757.yzw + _RESERVED_IDENTIFIER_FIXUP_3757.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2870 = _RESERVED_IDENTIFIER_FIXUP_2868.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3763 = _RESERVED_IDENTIFIER_FIXUP_3757;
    _RESERVED_IDENTIFIER_FIXUP_3763.y = _RESERVED_IDENTIFIER_FIXUP_2870;
    _RESERVED_IDENTIFIER_FIXUP_3763.z = _RESERVED_IDENTIFIER_FIXUP_2868.y;
    _RESERVED_IDENTIFIER_FIXUP_3763.w = _RESERVED_IDENTIFIER_FIXUP_2868.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2879 = _RESERVED_IDENTIFIER_FIXUP_2078.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3769 = _RESERVED_IDENTIFIER_FIXUP_3808;
    _RESERVED_IDENTIFIER_FIXUP_3769.x = _RESERVED_IDENTIFIER_FIXUP_2879.x;
    _RESERVED_IDENTIFIER_FIXUP_3769.y = _RESERVED_IDENTIFIER_FIXUP_2879.y;
    _RESERVED_IDENTIFIER_FIXUP_3769.z = _RESERVED_IDENTIFIER_FIXUP_2879.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2893 = (_RESERVED_IDENTIFIER_FIXUP_3769.xyz * _RESERVED_IDENTIFIER_FIXUP_3763.xxx) + _RESERVED_IDENTIFIER_FIXUP_3763.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3816 = vec4(_RESERVED_IDENTIFIER_FIXUP_2893.x, _RESERVED_IDENTIFIER_FIXUP_2870, _RESERVED_IDENTIFIER_FIXUP_2868.yz);
    _RESERVED_IDENTIFIER_FIXUP_3816.y = _RESERVED_IDENTIFIER_FIXUP_2893.y;
    _RESERVED_IDENTIFIER_FIXUP_3816.z = _RESERVED_IDENTIFIER_FIXUP_2893.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2906 = _RESERVED_IDENTIFIER_FIXUP_3816.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3781 = _RESERVED_IDENTIFIER_FIXUP_3816;
    _RESERVED_IDENTIFIER_FIXUP_3781.x = _RESERVED_IDENTIFIER_FIXUP_2906.x;
    _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2906.y;
    _RESERVED_IDENTIFIER_FIXUP_3781.z = _RESERVED_IDENTIFIER_FIXUP_2906.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3781.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1024 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1033;
    if (_RESERVED_IDENTIFIER_FIXUP_1024)
    {
        _RESERVED_IDENTIFIER_FIXUP_1033 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1033 = _RESERVED_IDENTIFIER_FIXUP_1024;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1033)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1070 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3372.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1097 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2971;
    if (_RESERVED_IDENTIFIER_FIXUP_1070 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2971 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1070), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1097);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2971 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1097);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2971;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2833);
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
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        vec2 hdB119 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.x = hdB119.x;
        r0.y = hdB119.y;
        vec2 hdB140 = r0.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB140.x;
        r1.y = hdB140.y;
        vec2 hdB151 = r0.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB151.x;
        r2.y = hdB151.y;
        vec2 hdB162 = r0.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB162.x;
        r4.y = hdB162.y;
        vec2 hdB173 = r0.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB173.x;
        r5.y = hdB173.y;
        vec2 hdB184 = r0.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB184.x;
        r6.y = hdB184.y;
        vec2 hdB195 = r0.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB195.x;
        r7.y = hdB195.y;
        vec2 hdB206 = r0.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB206.x;
        r8.y = hdB206.y;
        vec4 hdB211 = r0;
        vec2 hdB217 = hdB211.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r0.x = hdB217.x;
        r0.y = hdB217.y;
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
            vec2 hdB405 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB405.x;
            r0.z = hdB405.y;
            vec2 hdB415 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = hdB415.x;
            r1.y = hdB415.y;
            vec2 hdB425 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB425.x;
            r2.y = hdB425.y;
            vec2 hdB435 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB435.x;
            r4.y = hdB435.y;
            vec2 hdB445 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB445.x;
            r5.y = hdB445.y;
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
                vec2 hdB561 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB561.x;
                r0.z = hdB561.y;
                vec2 hdB571 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r1.x = hdB571.x;
                r1.y = hdB571.y;
                vec2 hdB581 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB581.x;
                r2.y = hdB581.y;
                vec2 hdB591 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB591.x;
                r4.y = hdB591.y;
                vec2 hdB601 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB601.x;
                r5.y = hdB601.y;
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
                vec2 hdB709 = (r1.xy * vec2(0.5)) + vec2(0.5);
                r2.x = hdB709.x;
                r2.y = hdB709.y;
                vec2 hdB719 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB719.x;
                r4.y = hdB719.y;
                vec2 hdB729 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB729.x;
                r5.y = hdB729.y;
                vec2 hdB739 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB739.x;
                r6.y = hdB739.y;
                vec2 hdB749 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB749.x;
                r7.y = hdB749.y;
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
    vec4 hdB881 = r0;
    vec3 hdB883 = r3.xyz * hdB881.yyy;
    r0.y = hdB883.x;
    r0.z = hdB883.y;
    r0.w = hdB883.z;
    vec4 hdB890 = r0;
    vec3 hdB894 = hdB890.yzw * v0.xyz;
    r0.y = hdB894.x;
    r0.z = hdB894.y;
    r0.w = hdB894.z;
    vec4 hdB901 = r0;
    vec4 hdB903 = r0;
    vec3 hdB905 = hdB901.yzw + hdB903.yzw;
    r0.y = hdB905.x;
    r0.z = hdB905.y;
    r0.w = hdB905.z;
    vec3 hdB916 = r3.www * v1.xyz;
    r1.x = hdB916.x;
    r1.y = hdB916.y;
    r1.z = hdB916.z;
    vec4 hdB925 = r0;
    vec4 hdB928 = r0;
    vec3 hdB930 = (r1.xyz * hdB925.xxx) + hdB928.yzw;
    r0.x = hdB930.x;
    r0.y = hdB930.y;
    r0.z = hdB930.z;
    vec4 hdB937 = r0;
    vec3 hdB944 = hdB937.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB944.x;
    r0.y = hdB944.y;
    r0.z = hdB944.z;
    vec3 hdB959 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB959.x;
    oC0.y = hdB959.y;
    oC0.z = hdB959.z;
    oC0.w = 1.0;
    bool hdB972 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB980;
    if (hdB972)
    {
        hdB980 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB980 = hdB972;
    }
    if (hdB980)
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
    bool _3294 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3304;
    if (_3294)
    {
        _3304 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3304 = _3294;
    }
    if (_3304)
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
        bool _3329 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3344;
        if (!_3329)
        {
            _3344 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3344 = _3329;
        }
        if (_3344)
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
