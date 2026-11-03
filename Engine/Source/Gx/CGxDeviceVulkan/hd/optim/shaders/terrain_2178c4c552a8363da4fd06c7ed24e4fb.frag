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
float _RESERVED_IDENTIFIER_FIXUP_3697;
vec4 _RESERVED_IDENTIFIER_FIXUP_3698;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1158 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1162 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1166 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1170 = hdTex3(param_2);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1180 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1158, _RESERVED_IDENTIFIER_FIXUP_1162, _RESERVED_IDENTIFIER_FIXUP_1170.xxxx), _RESERVED_IDENTIFIER_FIXUP_1166, _RESERVED_IDENTIFIER_FIXUP_1170.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1187 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2950 = _RESERVED_IDENTIFIER_FIXUP_1162;
    _RESERVED_IDENTIFIER_FIXUP_2950.x = _RESERVED_IDENTIFIER_FIXUP_1187;
    float _RESERVED_IDENTIFIER_FIXUP_1193 = clamp((_RESERVED_IDENTIFIER_FIXUP_1187 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2950.x = _RESERVED_IDENTIFIER_FIXUP_1193;
    float _RESERVED_IDENTIFIER_FIXUP_1199 = ((-_RESERVED_IDENTIFIER_FIXUP_1193) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2950.x = _RESERVED_IDENTIFIER_FIXUP_1199;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3699;
    if (_RESERVED_IDENTIFIER_FIXUP_1199 != (-_RESERVED_IDENTIFIER_FIXUP_1199))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1211 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1211.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1211.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1217 = hdLod5(param_3, param_4);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1221 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3162 = _RESERVED_IDENTIFIER_FIXUP_1217;
        _RESERVED_IDENTIFIER_FIXUP_3162.y = _RESERVED_IDENTIFIER_FIXUP_1221.x;
        _RESERVED_IDENTIFIER_FIXUP_3162.z = _RESERVED_IDENTIFIER_FIXUP_1221.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_3162.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3166;
        _RESERVED_IDENTIFIER_FIXUP_3166.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1238 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1242 = _RESERVED_IDENTIFIER_FIXUP_1238.y;
        _RESERVED_IDENTIFIER_FIXUP_3166.w = _RESERVED_IDENTIFIER_FIXUP_1242;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3166.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1242;
        float _RESERVED_IDENTIFIER_FIXUP_1253 = _RESERVED_IDENTIFIER_FIXUP_1217.x + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1253;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1260 = _RESERVED_IDENTIFIER_FIXUP_3162.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3179;
        _RESERVED_IDENTIFIER_FIXUP_3179.x = _RESERVED_IDENTIFIER_FIXUP_1260.x;
        _RESERVED_IDENTIFIER_FIXUP_3179.y = _RESERVED_IDENTIFIER_FIXUP_1260.y;
        _RESERVED_IDENTIFIER_FIXUP_3179.w = _RESERVED_IDENTIFIER_FIXUP_1242;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3179.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1242;
        float _RESERVED_IDENTIFIER_FIXUP_1282 = _RESERVED_IDENTIFIER_FIXUP_1253 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1282;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1289 = _RESERVED_IDENTIFIER_FIXUP_3162.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3192;
        _RESERVED_IDENTIFIER_FIXUP_3192.x = _RESERVED_IDENTIFIER_FIXUP_1289.x;
        _RESERVED_IDENTIFIER_FIXUP_3192.y = _RESERVED_IDENTIFIER_FIXUP_1289.y;
        _RESERVED_IDENTIFIER_FIXUP_3192.w = _RESERVED_IDENTIFIER_FIXUP_1242;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3192.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1242;
        float _RESERVED_IDENTIFIER_FIXUP_1311 = _RESERVED_IDENTIFIER_FIXUP_1282 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1311;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1318 = _RESERVED_IDENTIFIER_FIXUP_3162.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3205;
        _RESERVED_IDENTIFIER_FIXUP_3205.x = _RESERVED_IDENTIFIER_FIXUP_1318.x;
        _RESERVED_IDENTIFIER_FIXUP_3205.y = _RESERVED_IDENTIFIER_FIXUP_1318.y;
        _RESERVED_IDENTIFIER_FIXUP_3205.w = _RESERVED_IDENTIFIER_FIXUP_1242;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3205.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1242;
        float _RESERVED_IDENTIFIER_FIXUP_1340 = _RESERVED_IDENTIFIER_FIXUP_1311 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1340;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_3162.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3218;
        _RESERVED_IDENTIFIER_FIXUP_3218.x = _RESERVED_IDENTIFIER_FIXUP_1347.x;
        _RESERVED_IDENTIFIER_FIXUP_3218.y = _RESERVED_IDENTIFIER_FIXUP_1347.y;
        _RESERVED_IDENTIFIER_FIXUP_3218.w = _RESERVED_IDENTIFIER_FIXUP_1242;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3218.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1242;
        float _RESERVED_IDENTIFIER_FIXUP_1369 = _RESERVED_IDENTIFIER_FIXUP_1340 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1369;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_3162.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3231;
        _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_1376.x;
        _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_1376.y;
        _RESERVED_IDENTIFIER_FIXUP_3231.w = _RESERVED_IDENTIFIER_FIXUP_1242;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3231.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1242;
        float _RESERVED_IDENTIFIER_FIXUP_1398 = _RESERVED_IDENTIFIER_FIXUP_1369 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1398;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1405 = _RESERVED_IDENTIFIER_FIXUP_3162.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3244;
        _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_1405.x;
        _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_1405.y;
        _RESERVED_IDENTIFIER_FIXUP_3244.w = _RESERVED_IDENTIFIER_FIXUP_1242;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3244.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1242;
        float _RESERVED_IDENTIFIER_FIXUP_1427 = _RESERVED_IDENTIFIER_FIXUP_1398 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1427;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1434 = _RESERVED_IDENTIFIER_FIXUP_3162.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3257;
        _RESERVED_IDENTIFIER_FIXUP_3257.x = _RESERVED_IDENTIFIER_FIXUP_1434.x;
        _RESERVED_IDENTIFIER_FIXUP_3257.y = _RESERVED_IDENTIFIER_FIXUP_1434.y;
        _RESERVED_IDENTIFIER_FIXUP_3257.w = _RESERVED_IDENTIFIER_FIXUP_1242;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3257.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1242;
        float _RESERVED_IDENTIFIER_FIXUP_1456 = _RESERVED_IDENTIFIER_FIXUP_1427 + hdLod5(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1456;
        _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1456 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3699 = _RESERVED_IDENTIFIER_FIXUP_3162;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1469 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2950.y = _RESERVED_IDENTIFIER_FIXUP_1469;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3700;
        if (_RESERVED_IDENTIFIER_FIXUP_1469 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1478 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1488 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1490 = _RESERVED_IDENTIFIER_FIXUP_1488.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3102 = _RESERVED_IDENTIFIER_FIXUP_2950;
            _RESERVED_IDENTIFIER_FIXUP_3102.y = _RESERVED_IDENTIFIER_FIXUP_1490;
            _RESERVED_IDENTIFIER_FIXUP_3102.z = _RESERVED_IDENTIFIER_FIXUP_1488.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1498 = _RESERVED_IDENTIFIER_FIXUP_3102.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3106;
            _RESERVED_IDENTIFIER_FIXUP_3106.x = _RESERVED_IDENTIFIER_FIXUP_1498.x;
            _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1498.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1505 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1509 = _RESERVED_IDENTIFIER_FIXUP_1505.y;
            _RESERVED_IDENTIFIER_FIXUP_3106.w = _RESERVED_IDENTIFIER_FIXUP_1509;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1478.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1478.w;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3106.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1509;
            float _RESERVED_IDENTIFIER_FIXUP_1520 = hdLod6(param_21, param_22).x + hdLod6(param_23, param_24).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3722 = vec4(_RESERVED_IDENTIFIER_FIXUP_1199, _RESERVED_IDENTIFIER_FIXUP_1490, _RESERVED_IDENTIFIER_FIXUP_1488.y, _RESERVED_IDENTIFIER_FIXUP_1520);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_3722.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3119;
            _RESERVED_IDENTIFIER_FIXUP_3119.x = _RESERVED_IDENTIFIER_FIXUP_1527.x;
            _RESERVED_IDENTIFIER_FIXUP_3119.y = _RESERVED_IDENTIFIER_FIXUP_1527.y;
            _RESERVED_IDENTIFIER_FIXUP_3119.w = _RESERVED_IDENTIFIER_FIXUP_1509;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3119.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1509;
            float _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_1520 + hdLod6(param_25, param_26).x;
            _RESERVED_IDENTIFIER_FIXUP_3722.w = _RESERVED_IDENTIFIER_FIXUP_1549;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_3722.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3132;
            _RESERVED_IDENTIFIER_FIXUP_3132.x = _RESERVED_IDENTIFIER_FIXUP_1556.x;
            _RESERVED_IDENTIFIER_FIXUP_3132.y = _RESERVED_IDENTIFIER_FIXUP_1556.y;
            _RESERVED_IDENTIFIER_FIXUP_3132.w = _RESERVED_IDENTIFIER_FIXUP_1509;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3132.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1509;
            float _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_1549 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_3722.w = _RESERVED_IDENTIFIER_FIXUP_1578;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1585 = _RESERVED_IDENTIFIER_FIXUP_3722.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3145;
            _RESERVED_IDENTIFIER_FIXUP_3145.x = _RESERVED_IDENTIFIER_FIXUP_1585.x;
            _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1585.y;
            _RESERVED_IDENTIFIER_FIXUP_3145.w = _RESERVED_IDENTIFIER_FIXUP_1509;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3145.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1509;
            float _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_1578 + hdLod6(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_3722.y = _RESERVED_IDENTIFIER_FIXUP_1607;
            _RESERVED_IDENTIFIER_FIXUP_3722.x = _RESERVED_IDENTIFIER_FIXUP_1607 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3700 = _RESERVED_IDENTIFIER_FIXUP_3722;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1620 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2967 = _RESERVED_IDENTIFIER_FIXUP_2950;
            _RESERVED_IDENTIFIER_FIXUP_2967.y = _RESERVED_IDENTIFIER_FIXUP_1620;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3701;
            if (_RESERVED_IDENTIFIER_FIXUP_1620 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1629 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1639 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1641 = _RESERVED_IDENTIFIER_FIXUP_1639.x;
                _RESERVED_IDENTIFIER_FIXUP_2967.y = _RESERVED_IDENTIFIER_FIXUP_1641;
                _RESERVED_IDENTIFIER_FIXUP_2967.z = _RESERVED_IDENTIFIER_FIXUP_1639.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1649 = _RESERVED_IDENTIFIER_FIXUP_2967.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3046;
                _RESERVED_IDENTIFIER_FIXUP_3046.x = _RESERVED_IDENTIFIER_FIXUP_1649.x;
                _RESERVED_IDENTIFIER_FIXUP_3046.y = _RESERVED_IDENTIFIER_FIXUP_1649.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1656 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1660 = _RESERVED_IDENTIFIER_FIXUP_1656.y;
                _RESERVED_IDENTIFIER_FIXUP_3046.w = _RESERVED_IDENTIFIER_FIXUP_1660;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1629.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1629.w;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3046.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1660;
                float _RESERVED_IDENTIFIER_FIXUP_1671 = hdLod7(param_31, param_32).x + hdLod7(param_33, param_34).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3721 = vec4(_RESERVED_IDENTIFIER_FIXUP_1199, _RESERVED_IDENTIFIER_FIXUP_1641, _RESERVED_IDENTIFIER_FIXUP_1639.y, _RESERVED_IDENTIFIER_FIXUP_1671);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1678 = _RESERVED_IDENTIFIER_FIXUP_3721.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3059;
                _RESERVED_IDENTIFIER_FIXUP_3059.x = _RESERVED_IDENTIFIER_FIXUP_1678.x;
                _RESERVED_IDENTIFIER_FIXUP_3059.y = _RESERVED_IDENTIFIER_FIXUP_1678.y;
                _RESERVED_IDENTIFIER_FIXUP_3059.w = _RESERVED_IDENTIFIER_FIXUP_1660;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3059.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1660;
                float _RESERVED_IDENTIFIER_FIXUP_1700 = _RESERVED_IDENTIFIER_FIXUP_1671 + hdLod7(param_35, param_36).x;
                _RESERVED_IDENTIFIER_FIXUP_3721.w = _RESERVED_IDENTIFIER_FIXUP_1700;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_3721.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3072;
                _RESERVED_IDENTIFIER_FIXUP_3072.x = _RESERVED_IDENTIFIER_FIXUP_1707.x;
                _RESERVED_IDENTIFIER_FIXUP_3072.y = _RESERVED_IDENTIFIER_FIXUP_1707.y;
                _RESERVED_IDENTIFIER_FIXUP_3072.w = _RESERVED_IDENTIFIER_FIXUP_1660;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3072.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1660;
                float _RESERVED_IDENTIFIER_FIXUP_1729 = _RESERVED_IDENTIFIER_FIXUP_1700 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_3721.w = _RESERVED_IDENTIFIER_FIXUP_1729;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1736 = _RESERVED_IDENTIFIER_FIXUP_3721.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3085;
                _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_1736.x;
                _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1736.y;
                _RESERVED_IDENTIFIER_FIXUP_3085.w = _RESERVED_IDENTIFIER_FIXUP_1660;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3085.xy;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1660;
                float _RESERVED_IDENTIFIER_FIXUP_1758 = _RESERVED_IDENTIFIER_FIXUP_1729 + hdLod7(param_39, param_40).x;
                _RESERVED_IDENTIFIER_FIXUP_3721.y = _RESERVED_IDENTIFIER_FIXUP_1758;
                _RESERVED_IDENTIFIER_FIXUP_3721.x = _RESERVED_IDENTIFIER_FIXUP_1758 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3701 = _RESERVED_IDENTIFIER_FIXUP_3721;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1774 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1778 = _RESERVED_IDENTIFIER_FIXUP_1774.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1789 = vec4(_RESERVED_IDENTIFIER_FIXUP_1774.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1778).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3718 = vec4(_RESERVED_IDENTIFIER_FIXUP_1789 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1778);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1826 = _RESERVED_IDENTIFIER_FIXUP_1789 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3000 = _RESERVED_IDENTIFIER_FIXUP_3718;
                _RESERVED_IDENTIFIER_FIXUP_3000.x = _RESERVED_IDENTIFIER_FIXUP_1826.x;
                _RESERVED_IDENTIFIER_FIXUP_3000.y = _RESERVED_IDENTIFIER_FIXUP_1826.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1848 = _RESERVED_IDENTIFIER_FIXUP_1789 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3009 = _RESERVED_IDENTIFIER_FIXUP_3000;
                _RESERVED_IDENTIFIER_FIXUP_3009.x = _RESERVED_IDENTIFIER_FIXUP_1848.x;
                _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1848.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1870 = _RESERVED_IDENTIFIER_FIXUP_1789 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3018 = _RESERVED_IDENTIFIER_FIXUP_3009;
                _RESERVED_IDENTIFIER_FIXUP_3018.x = _RESERVED_IDENTIFIER_FIXUP_1870.x;
                _RESERVED_IDENTIFIER_FIXUP_3018.y = _RESERVED_IDENTIFIER_FIXUP_1870.y;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_1789;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1778;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3718.xy;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1778;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3000.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1778;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3009.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1778;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3018.xy;
                float param_50 = _RESERVED_IDENTIFIER_FIXUP_1778;
                float _RESERVED_IDENTIFIER_FIXUP_1885 = (((hdLod8(param_41, param_42).x + hdLod8(param_43, param_44).x) + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x) + hdLod8(param_49, param_50).x;
                float _RESERVED_IDENTIFIER_FIXUP_1899 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1904 = (_RESERVED_IDENTIFIER_FIXUP_1885 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3701 = vec4((_RESERVED_IDENTIFIER_FIXUP_1899 * _RESERVED_IDENTIFIER_FIXUP_1904) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1899, _RESERVED_IDENTIFIER_FIXUP_1904, _RESERVED_IDENTIFIER_FIXUP_1885);
            }
            _RESERVED_IDENTIFIER_FIXUP_3700 = _RESERVED_IDENTIFIER_FIXUP_3701;
        }
        _RESERVED_IDENTIFIER_FIXUP_3699 = _RESERVED_IDENTIFIER_FIXUP_3700;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3276 = _RESERVED_IDENTIFIER_FIXUP_3699;
    _RESERVED_IDENTIFIER_FIXUP_3276.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1932 = _RESERVED_IDENTIFIER_FIXUP_1180.xyz * _RESERVED_IDENTIFIER_FIXUP_3276.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3278 = _RESERVED_IDENTIFIER_FIXUP_1180;
    _RESERVED_IDENTIFIER_FIXUP_3278.x = _RESERVED_IDENTIFIER_FIXUP_1932.x;
    _RESERVED_IDENTIFIER_FIXUP_3278.y = _RESERVED_IDENTIFIER_FIXUP_1932.y;
    _RESERVED_IDENTIFIER_FIXUP_3278.z = _RESERVED_IDENTIFIER_FIXUP_1932.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1943 = _RESERVED_IDENTIFIER_FIXUP_3278.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3697).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3284 = _RESERVED_IDENTIFIER_FIXUP_3278;
    _RESERVED_IDENTIFIER_FIXUP_3284.x = _RESERVED_IDENTIFIER_FIXUP_1943.x;
    _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_1943.y;
    _RESERVED_IDENTIFIER_FIXUP_3284.z = _RESERVED_IDENTIFIER_FIXUP_1943.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1954 = _RESERVED_IDENTIFIER_FIXUP_3284.xyz + _RESERVED_IDENTIFIER_FIXUP_3284.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3290 = _RESERVED_IDENTIFIER_FIXUP_3284;
    _RESERVED_IDENTIFIER_FIXUP_3290.x = _RESERVED_IDENTIFIER_FIXUP_1954.x;
    _RESERVED_IDENTIFIER_FIXUP_3290.y = _RESERVED_IDENTIFIER_FIXUP_1954.y;
    _RESERVED_IDENTIFIER_FIXUP_3290.z = _RESERVED_IDENTIFIER_FIXUP_1954.z;
    _RESERVED_IDENTIFIER_FIXUP_3276.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3276.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3276.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1979 = (_RESERVED_IDENTIFIER_FIXUP_3276.yzw * _RESERVED_IDENTIFIER_FIXUP_3276.xxx) + _RESERVED_IDENTIFIER_FIXUP_3290.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3302 = _RESERVED_IDENTIFIER_FIXUP_3290;
    _RESERVED_IDENTIFIER_FIXUP_3302.x = _RESERVED_IDENTIFIER_FIXUP_1979.x;
    _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_1979.y;
    _RESERVED_IDENTIFIER_FIXUP_3302.z = _RESERVED_IDENTIFIER_FIXUP_1979.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1992 = _RESERVED_IDENTIFIER_FIXUP_3302.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3308 = _RESERVED_IDENTIFIER_FIXUP_3302;
    _RESERVED_IDENTIFIER_FIXUP_3308.x = _RESERVED_IDENTIFIER_FIXUP_1992.x;
    _RESERVED_IDENTIFIER_FIXUP_3308.y = _RESERVED_IDENTIFIER_FIXUP_1992.y;
    _RESERVED_IDENTIFIER_FIXUP_3308.z = _RESERVED_IDENTIFIER_FIXUP_1992.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2047 = OptTex0( texcoord0.xyz);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2051 = hdTex1(param_51);
    vec2 param_52 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2055 = hdTex2(param_52);
    vec2 param_53 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2059 = hdTex3(param_53);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2069 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2047, _RESERVED_IDENTIFIER_FIXUP_2051, _RESERVED_IDENTIFIER_FIXUP_2059.xxxx), _RESERVED_IDENTIFIER_FIXUP_2055, _RESERVED_IDENTIFIER_FIXUP_2059.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_2051;
    _RESERVED_IDENTIFIER_FIXUP_3324.x = _RESERVED_IDENTIFIER_FIXUP_1187;
    float _RESERVED_IDENTIFIER_FIXUP_2082 = clamp((_RESERVED_IDENTIFIER_FIXUP_1187 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3324.x = _RESERVED_IDENTIFIER_FIXUP_2082;
    float _RESERVED_IDENTIFIER_FIXUP_2088 = ((-_RESERVED_IDENTIFIER_FIXUP_2082) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3324.x = _RESERVED_IDENTIFIER_FIXUP_2088;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3708;
    if (_RESERVED_IDENTIFIER_FIXUP_2088 != (-_RESERVED_IDENTIFIER_FIXUP_2088))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2100 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2100.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2100.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2106 = hdLod5(param_54, param_55);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2110 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3536 = _RESERVED_IDENTIFIER_FIXUP_2106;
        _RESERVED_IDENTIFIER_FIXUP_3536.y = _RESERVED_IDENTIFIER_FIXUP_2110.x;
        _RESERVED_IDENTIFIER_FIXUP_3536.z = _RESERVED_IDENTIFIER_FIXUP_2110.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2120 = _RESERVED_IDENTIFIER_FIXUP_3536.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3540;
        _RESERVED_IDENTIFIER_FIXUP_3540.x = _RESERVED_IDENTIFIER_FIXUP_2120.x;
        _RESERVED_IDENTIFIER_FIXUP_3540.y = _RESERVED_IDENTIFIER_FIXUP_2120.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2127 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2131 = _RESERVED_IDENTIFIER_FIXUP_2127.y;
        _RESERVED_IDENTIFIER_FIXUP_3540.w = _RESERVED_IDENTIFIER_FIXUP_2131;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3540.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2131;
        float _RESERVED_IDENTIFIER_FIXUP_2142 = _RESERVED_IDENTIFIER_FIXUP_2106.x + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2142;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2149 = _RESERVED_IDENTIFIER_FIXUP_3536.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3553;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2149.x;
        _RESERVED_IDENTIFIER_FIXUP_3553.y = _RESERVED_IDENTIFIER_FIXUP_2149.y;
        _RESERVED_IDENTIFIER_FIXUP_3553.w = _RESERVED_IDENTIFIER_FIXUP_2131;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3553.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2131;
        float _RESERVED_IDENTIFIER_FIXUP_2171 = _RESERVED_IDENTIFIER_FIXUP_2142 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2171;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2178 = _RESERVED_IDENTIFIER_FIXUP_3536.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3566;
        _RESERVED_IDENTIFIER_FIXUP_3566.x = _RESERVED_IDENTIFIER_FIXUP_2178.x;
        _RESERVED_IDENTIFIER_FIXUP_3566.y = _RESERVED_IDENTIFIER_FIXUP_2178.y;
        _RESERVED_IDENTIFIER_FIXUP_3566.w = _RESERVED_IDENTIFIER_FIXUP_2131;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3566.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2131;
        float _RESERVED_IDENTIFIER_FIXUP_2200 = _RESERVED_IDENTIFIER_FIXUP_2171 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2200;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2207 = _RESERVED_IDENTIFIER_FIXUP_3536.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3579;
        _RESERVED_IDENTIFIER_FIXUP_3579.x = _RESERVED_IDENTIFIER_FIXUP_2207.x;
        _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2207.y;
        _RESERVED_IDENTIFIER_FIXUP_3579.w = _RESERVED_IDENTIFIER_FIXUP_2131;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3579.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2131;
        float _RESERVED_IDENTIFIER_FIXUP_2229 = _RESERVED_IDENTIFIER_FIXUP_2200 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2229;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2236 = _RESERVED_IDENTIFIER_FIXUP_3536.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3592;
        _RESERVED_IDENTIFIER_FIXUP_3592.x = _RESERVED_IDENTIFIER_FIXUP_2236.x;
        _RESERVED_IDENTIFIER_FIXUP_3592.y = _RESERVED_IDENTIFIER_FIXUP_2236.y;
        _RESERVED_IDENTIFIER_FIXUP_3592.w = _RESERVED_IDENTIFIER_FIXUP_2131;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3592.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2131;
        float _RESERVED_IDENTIFIER_FIXUP_2258 = _RESERVED_IDENTIFIER_FIXUP_2229 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2258;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2265 = _RESERVED_IDENTIFIER_FIXUP_3536.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3605;
        _RESERVED_IDENTIFIER_FIXUP_3605.x = _RESERVED_IDENTIFIER_FIXUP_2265.x;
        _RESERVED_IDENTIFIER_FIXUP_3605.y = _RESERVED_IDENTIFIER_FIXUP_2265.y;
        _RESERVED_IDENTIFIER_FIXUP_3605.w = _RESERVED_IDENTIFIER_FIXUP_2131;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3605.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2131;
        float _RESERVED_IDENTIFIER_FIXUP_2287 = _RESERVED_IDENTIFIER_FIXUP_2258 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2287;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2294 = _RESERVED_IDENTIFIER_FIXUP_3536.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3618;
        _RESERVED_IDENTIFIER_FIXUP_3618.x = _RESERVED_IDENTIFIER_FIXUP_2294.x;
        _RESERVED_IDENTIFIER_FIXUP_3618.y = _RESERVED_IDENTIFIER_FIXUP_2294.y;
        _RESERVED_IDENTIFIER_FIXUP_3618.w = _RESERVED_IDENTIFIER_FIXUP_2131;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3618.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2131;
        float _RESERVED_IDENTIFIER_FIXUP_2316 = _RESERVED_IDENTIFIER_FIXUP_2287 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2316;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2323 = _RESERVED_IDENTIFIER_FIXUP_3536.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3631;
        _RESERVED_IDENTIFIER_FIXUP_3631.x = _RESERVED_IDENTIFIER_FIXUP_2323.x;
        _RESERVED_IDENTIFIER_FIXUP_3631.y = _RESERVED_IDENTIFIER_FIXUP_2323.y;
        _RESERVED_IDENTIFIER_FIXUP_3631.w = _RESERVED_IDENTIFIER_FIXUP_2131;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3631.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2131;
        float _RESERVED_IDENTIFIER_FIXUP_2345 = _RESERVED_IDENTIFIER_FIXUP_2316 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2345;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2345 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3708 = _RESERVED_IDENTIFIER_FIXUP_3536;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2358 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3324.y = _RESERVED_IDENTIFIER_FIXUP_2358;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3709;
        if (_RESERVED_IDENTIFIER_FIXUP_2358 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2367 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2377 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2379 = _RESERVED_IDENTIFIER_FIXUP_2377.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3476 = _RESERVED_IDENTIFIER_FIXUP_3324;
            _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2379;
            _RESERVED_IDENTIFIER_FIXUP_3476.z = _RESERVED_IDENTIFIER_FIXUP_2377.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2387 = _RESERVED_IDENTIFIER_FIXUP_3476.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3480;
            _RESERVED_IDENTIFIER_FIXUP_3480.x = _RESERVED_IDENTIFIER_FIXUP_2387.x;
            _RESERVED_IDENTIFIER_FIXUP_3480.y = _RESERVED_IDENTIFIER_FIXUP_2387.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2394 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2398 = _RESERVED_IDENTIFIER_FIXUP_2394.y;
            _RESERVED_IDENTIFIER_FIXUP_3480.w = _RESERVED_IDENTIFIER_FIXUP_2398;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2367.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2367.w;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3480.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2398;
            float _RESERVED_IDENTIFIER_FIXUP_2409 = hdLod6(param_72, param_73).x + hdLod6(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3729 = vec4(_RESERVED_IDENTIFIER_FIXUP_2088, _RESERVED_IDENTIFIER_FIXUP_2379, _RESERVED_IDENTIFIER_FIXUP_2377.y, _RESERVED_IDENTIFIER_FIXUP_2409);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2416 = _RESERVED_IDENTIFIER_FIXUP_3729.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3493;
            _RESERVED_IDENTIFIER_FIXUP_3493.x = _RESERVED_IDENTIFIER_FIXUP_2416.x;
            _RESERVED_IDENTIFIER_FIXUP_3493.y = _RESERVED_IDENTIFIER_FIXUP_2416.y;
            _RESERVED_IDENTIFIER_FIXUP_3493.w = _RESERVED_IDENTIFIER_FIXUP_2398;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3493.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2398;
            float _RESERVED_IDENTIFIER_FIXUP_2438 = _RESERVED_IDENTIFIER_FIXUP_2409 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3729.w = _RESERVED_IDENTIFIER_FIXUP_2438;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2445 = _RESERVED_IDENTIFIER_FIXUP_3729.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3506;
            _RESERVED_IDENTIFIER_FIXUP_3506.x = _RESERVED_IDENTIFIER_FIXUP_2445.x;
            _RESERVED_IDENTIFIER_FIXUP_3506.y = _RESERVED_IDENTIFIER_FIXUP_2445.y;
            _RESERVED_IDENTIFIER_FIXUP_3506.w = _RESERVED_IDENTIFIER_FIXUP_2398;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3506.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2398;
            float _RESERVED_IDENTIFIER_FIXUP_2467 = _RESERVED_IDENTIFIER_FIXUP_2438 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3729.w = _RESERVED_IDENTIFIER_FIXUP_2467;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2474 = _RESERVED_IDENTIFIER_FIXUP_3729.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3519;
            _RESERVED_IDENTIFIER_FIXUP_3519.x = _RESERVED_IDENTIFIER_FIXUP_2474.x;
            _RESERVED_IDENTIFIER_FIXUP_3519.y = _RESERVED_IDENTIFIER_FIXUP_2474.y;
            _RESERVED_IDENTIFIER_FIXUP_3519.w = _RESERVED_IDENTIFIER_FIXUP_2398;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3519.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2398;
            float _RESERVED_IDENTIFIER_FIXUP_2496 = _RESERVED_IDENTIFIER_FIXUP_2467 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3729.y = _RESERVED_IDENTIFIER_FIXUP_2496;
            _RESERVED_IDENTIFIER_FIXUP_3729.x = _RESERVED_IDENTIFIER_FIXUP_2496 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3709 = _RESERVED_IDENTIFIER_FIXUP_3729;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2509 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3341 = _RESERVED_IDENTIFIER_FIXUP_3324;
            _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2509;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3710;
            if (_RESERVED_IDENTIFIER_FIXUP_2509 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2518 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2528 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2530 = _RESERVED_IDENTIFIER_FIXUP_2528.x;
                _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2530;
                _RESERVED_IDENTIFIER_FIXUP_3341.z = _RESERVED_IDENTIFIER_FIXUP_2528.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2538 = _RESERVED_IDENTIFIER_FIXUP_3341.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3420;
                _RESERVED_IDENTIFIER_FIXUP_3420.x = _RESERVED_IDENTIFIER_FIXUP_2538.x;
                _RESERVED_IDENTIFIER_FIXUP_3420.y = _RESERVED_IDENTIFIER_FIXUP_2538.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2545 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2549 = _RESERVED_IDENTIFIER_FIXUP_2545.y;
                _RESERVED_IDENTIFIER_FIXUP_3420.w = _RESERVED_IDENTIFIER_FIXUP_2549;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2518.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2518.w;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3420.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2549;
                float _RESERVED_IDENTIFIER_FIXUP_2560 = hdLod7(param_82, param_83).x + hdLod7(param_84, param_85).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3728 = vec4(_RESERVED_IDENTIFIER_FIXUP_2088, _RESERVED_IDENTIFIER_FIXUP_2530, _RESERVED_IDENTIFIER_FIXUP_2528.y, _RESERVED_IDENTIFIER_FIXUP_2560);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2567 = _RESERVED_IDENTIFIER_FIXUP_3728.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3433;
                _RESERVED_IDENTIFIER_FIXUP_3433.x = _RESERVED_IDENTIFIER_FIXUP_2567.x;
                _RESERVED_IDENTIFIER_FIXUP_3433.y = _RESERVED_IDENTIFIER_FIXUP_2567.y;
                _RESERVED_IDENTIFIER_FIXUP_3433.w = _RESERVED_IDENTIFIER_FIXUP_2549;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3433.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2549;
                float _RESERVED_IDENTIFIER_FIXUP_2589 = _RESERVED_IDENTIFIER_FIXUP_2560 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3728.w = _RESERVED_IDENTIFIER_FIXUP_2589;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2596 = _RESERVED_IDENTIFIER_FIXUP_3728.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3446;
                _RESERVED_IDENTIFIER_FIXUP_3446.x = _RESERVED_IDENTIFIER_FIXUP_2596.x;
                _RESERVED_IDENTIFIER_FIXUP_3446.y = _RESERVED_IDENTIFIER_FIXUP_2596.y;
                _RESERVED_IDENTIFIER_FIXUP_3446.w = _RESERVED_IDENTIFIER_FIXUP_2549;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3446.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2549;
                float _RESERVED_IDENTIFIER_FIXUP_2618 = _RESERVED_IDENTIFIER_FIXUP_2589 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3728.w = _RESERVED_IDENTIFIER_FIXUP_2618;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2625 = _RESERVED_IDENTIFIER_FIXUP_3728.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3459;
                _RESERVED_IDENTIFIER_FIXUP_3459.x = _RESERVED_IDENTIFIER_FIXUP_2625.x;
                _RESERVED_IDENTIFIER_FIXUP_3459.y = _RESERVED_IDENTIFIER_FIXUP_2625.y;
                _RESERVED_IDENTIFIER_FIXUP_3459.w = _RESERVED_IDENTIFIER_FIXUP_2549;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3459.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2549;
                float _RESERVED_IDENTIFIER_FIXUP_2647 = _RESERVED_IDENTIFIER_FIXUP_2618 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_3728.y = _RESERVED_IDENTIFIER_FIXUP_2647;
                _RESERVED_IDENTIFIER_FIXUP_3728.x = _RESERVED_IDENTIFIER_FIXUP_2647 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3710 = _RESERVED_IDENTIFIER_FIXUP_3728;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2663 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2667 = _RESERVED_IDENTIFIER_FIXUP_2663.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2678 = vec4(_RESERVED_IDENTIFIER_FIXUP_2663.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2667).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3725 = vec4(_RESERVED_IDENTIFIER_FIXUP_2678 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2667);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2715 = _RESERVED_IDENTIFIER_FIXUP_2678 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_3725;
                _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_2715.x;
                _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_2715.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2737 = _RESERVED_IDENTIFIER_FIXUP_2678 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3383 = _RESERVED_IDENTIFIER_FIXUP_3374;
                _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_2737.x;
                _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_2737.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2759 = _RESERVED_IDENTIFIER_FIXUP_2678 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3392 = _RESERVED_IDENTIFIER_FIXUP_3383;
                _RESERVED_IDENTIFIER_FIXUP_3392.x = _RESERVED_IDENTIFIER_FIXUP_2759.x;
                _RESERVED_IDENTIFIER_FIXUP_3392.y = _RESERVED_IDENTIFIER_FIXUP_2759.y;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_2678;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2667;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3725.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2667;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3374.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2667;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3383.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2667;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3392.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2667;
                float _RESERVED_IDENTIFIER_FIXUP_2774 = (((hdLod8(param_92, param_93).x + hdLod8(param_94, param_95).x) + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x;
                float _RESERVED_IDENTIFIER_FIXUP_2788 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2793 = (_RESERVED_IDENTIFIER_FIXUP_2774 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3710 = vec4((_RESERVED_IDENTIFIER_FIXUP_2788 * _RESERVED_IDENTIFIER_FIXUP_2793) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2788, _RESERVED_IDENTIFIER_FIXUP_2793, _RESERVED_IDENTIFIER_FIXUP_2774);
            }
            _RESERVED_IDENTIFIER_FIXUP_3709 = _RESERVED_IDENTIFIER_FIXUP_3710;
        }
        _RESERVED_IDENTIFIER_FIXUP_3708 = _RESERVED_IDENTIFIER_FIXUP_3709;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2808 = (_RESERVED_IDENTIFIER_FIXUP_3708.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3648 = _RESERVED_IDENTIFIER_FIXUP_3708;
    _RESERVED_IDENTIFIER_FIXUP_3648.y = _RESERVED_IDENTIFIER_FIXUP_2808;
    _RESERVED_IDENTIFIER_FIXUP_3648.y = _RESERVED_IDENTIFIER_FIXUP_2808;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2821 = _RESERVED_IDENTIFIER_FIXUP_2069.xyz * _RESERVED_IDENTIFIER_FIXUP_3648.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3654 = _RESERVED_IDENTIFIER_FIXUP_2069;
    _RESERVED_IDENTIFIER_FIXUP_3654.x = _RESERVED_IDENTIFIER_FIXUP_2821.x;
    _RESERVED_IDENTIFIER_FIXUP_3654.y = _RESERVED_IDENTIFIER_FIXUP_2821.y;
    _RESERVED_IDENTIFIER_FIXUP_3654.z = _RESERVED_IDENTIFIER_FIXUP_2821.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2832 = _RESERVED_IDENTIFIER_FIXUP_3654.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3660 = _RESERVED_IDENTIFIER_FIXUP_3654;
    _RESERVED_IDENTIFIER_FIXUP_3660.x = _RESERVED_IDENTIFIER_FIXUP_2832.x;
    _RESERVED_IDENTIFIER_FIXUP_3660.y = _RESERVED_IDENTIFIER_FIXUP_2832.y;
    _RESERVED_IDENTIFIER_FIXUP_3660.z = _RESERVED_IDENTIFIER_FIXUP_2832.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2843 = _RESERVED_IDENTIFIER_FIXUP_3660.xyz + _RESERVED_IDENTIFIER_FIXUP_3660.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3666 = _RESERVED_IDENTIFIER_FIXUP_3660;
    _RESERVED_IDENTIFIER_FIXUP_3666.x = _RESERVED_IDENTIFIER_FIXUP_2843.x;
    _RESERVED_IDENTIFIER_FIXUP_3666.y = _RESERVED_IDENTIFIER_FIXUP_2843.y;
    _RESERVED_IDENTIFIER_FIXUP_3666.z = _RESERVED_IDENTIFIER_FIXUP_2843.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2854 = _RESERVED_IDENTIFIER_FIXUP_3666.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3648.y = _RESERVED_IDENTIFIER_FIXUP_2854.x;
    _RESERVED_IDENTIFIER_FIXUP_3648.z = _RESERVED_IDENTIFIER_FIXUP_2854.y;
    _RESERVED_IDENTIFIER_FIXUP_3648.w = _RESERVED_IDENTIFIER_FIXUP_2854.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2868 = (_RESERVED_IDENTIFIER_FIXUP_3648.yzw * _RESERVED_IDENTIFIER_FIXUP_3648.xxx) + _RESERVED_IDENTIFIER_FIXUP_3666.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3678 = _RESERVED_IDENTIFIER_FIXUP_3666;
    _RESERVED_IDENTIFIER_FIXUP_3678.x = _RESERVED_IDENTIFIER_FIXUP_2868.x;
    _RESERVED_IDENTIFIER_FIXUP_3678.y = _RESERVED_IDENTIFIER_FIXUP_2868.y;
    _RESERVED_IDENTIFIER_FIXUP_3678.z = _RESERVED_IDENTIFIER_FIXUP_2868.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2881 = _RESERVED_IDENTIFIER_FIXUP_3678.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3684 = _RESERVED_IDENTIFIER_FIXUP_3678;
    _RESERVED_IDENTIFIER_FIXUP_3684.x = _RESERVED_IDENTIFIER_FIXUP_2881.x;
    _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2881.y;
    _RESERVED_IDENTIFIER_FIXUP_3684.z = _RESERVED_IDENTIFIER_FIXUP_2881.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3684.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1017 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1026;
    if (_RESERVED_IDENTIFIER_FIXUP_1017)
    {
        _RESERVED_IDENTIFIER_FIXUP_1026 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1026 = _RESERVED_IDENTIFIER_FIXUP_1017;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1026)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1063 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3308.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1090 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2940;
    if (_RESERVED_IDENTIFIER_FIXUP_1063 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2940 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1063), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1090);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2940 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1090);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2940;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2808);
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
        vec2 hdB142 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB142.x;
        r1.z = hdB142.y;
        vec2 hdB164 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB164.x;
        r2.y = hdB164.y;
        vec2 hdB172 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB172.x;
        r2.w = hdB172.y;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r1.x += r2.x;
        vec2 hdB195 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB195.x;
        r2.y = hdB195.y;
        vec2 hdB202 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB202.x;
        r2.w = hdB202.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.x += r2.x;
        vec2 hdB225 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB225.x;
        r2.y = hdB225.y;
        vec2 hdB232 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB232.x;
        r2.w = hdB232.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.x += r2.x;
        vec2 hdB255 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB255.x;
        r2.y = hdB255.y;
        vec2 hdB262 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB262.x;
        r2.w = hdB262.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.x += r2.x;
        vec2 hdB285 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB285.x;
        r2.y = hdB285.y;
        vec2 hdB292 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB292.x;
        r2.w = hdB292.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.x += r2.x;
        vec2 hdB315 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB315.x;
        r2.y = hdB315.y;
        vec2 hdB322 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB322.x;
        r2.w = hdB322.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r1.x += r2.x;
        vec2 hdB345 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB345.x;
        r2.y = hdB345.y;
        vec2 hdB352 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB352.x;
        r2.w = hdB352.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r1.x += r2.x;
        vec2 hdB375 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB375.x;
        r2.y = hdB375.y;
        vec2 hdB382 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB382.x;
        r2.w = hdB382.y;
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
            vec2 hdB432 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB432.x;
            r1.z = hdB432.y;
            vec2 hdB442 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB442.x;
            r3.y = hdB442.y;
            vec2 hdB449 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB449.x;
            r3.w = hdB449.y;
            vec2 param_23 = r3.xy;
            float param_24 = r3.w;
            r3 = hdLod6(param_23, param_24);
            r1.w = r2.x + r3.x;
            vec2 hdB471 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB471.x;
            r2.y = hdB471.y;
            vec2 hdB478 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB478.x;
            r2.w = hdB478.y;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
            r1.w += r2.x;
            vec2 hdB500 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB500.x;
            r2.y = hdB500.y;
            vec2 hdB507 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB507.x;
            r2.w = hdB507.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r1.w += r2.x;
            vec2 hdB529 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB529.x;
            r2.y = hdB529.y;
            vec2 hdB536 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB536.x;
            r2.w = hdB536.y;
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
                vec2 hdB586 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB586.x;
                r1.z = hdB586.y;
                vec2 hdB596 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB596.x;
                r3.y = hdB596.y;
                vec2 hdB603 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB603.x;
                r3.w = hdB603.y;
                vec2 param_33 = r3.xy;
                float param_34 = r3.w;
                r3 = hdLod7(param_33, param_34);
                r1.w = r2.x + r3.x;
                vec2 hdB625 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB625.x;
                r2.y = hdB625.y;
                vec2 hdB632 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB632.x;
                r2.w = hdB632.y;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
                r1.w += r2.x;
                vec2 hdB654 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB654.x;
                r2.y = hdB654.y;
                vec2 hdB661 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB661.x;
                r2.w = hdB661.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r1.w += r2.x;
                vec2 hdB683 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB683.x;
                r2.y = hdB683.y;
                vec2 hdB690 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB690.x;
                r2.w = hdB690.y;
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
                vec2 hdB722 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB722.x;
                r2.w = hdB722.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r3 = hdLod8(param_41, param_42);
                vec2 hdB747 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB747.x;
                r4.y = hdB747.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r5 = hdLod8(param_43, param_44);
                r1.w = r3.x + r5.x;
                vec2 hdB775 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB775.x;
                r4.y = hdB775.y;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r3 = hdLod8(param_45, param_46);
                r1.w += r3.x;
                vec2 hdB797 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB797.x;
                r4.y = hdB797.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r3 = hdLod8(param_47, param_48);
                r1.w += r3.x;
                vec2 hdB819 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB819.x;
                r4.y = hdB819.y;
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
    vec4 hdB872 = r0;
    vec3 hdB876 = hdB872.xyz * r1.yyy;
    r0.x = hdB876.x;
    r0.y = hdB876.y;
    r0.z = hdB876.z;
    vec4 hdB883 = r0;
    vec3 hdB887 = hdB883.xyz * v0.xyz;
    r0.x = hdB887.x;
    r0.y = hdB887.y;
    r0.z = hdB887.z;
    vec4 hdB894 = r0;
    vec4 hdB896 = r0;
    vec3 hdB898 = hdB894.xyz + hdB896.xyz;
    r0.x = hdB898.x;
    r0.y = hdB898.y;
    r0.z = hdB898.z;
    vec3 hdB909 = r0.www * v1.xyz;
    r1.y = hdB909.x;
    r1.z = hdB909.y;
    r1.w = hdB909.z;
    vec4 hdB921 = r0;
    vec3 hdB923 = (r1.yzw * r1.xxx) + hdB921.xyz;
    r0.x = hdB923.x;
    r0.y = hdB923.y;
    r0.z = hdB923.z;
    vec4 hdB930 = r0;
    vec3 hdB937 = hdB930.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB937.x;
    r0.y = hdB937.y;
    r0.z = hdB937.z;
    vec3 hdB952 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB952.x;
    oC0.y = hdB952.y;
    oC0.z = hdB952.z;
    oC0.w = 1.0;
    bool hdB965 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB973;
    if (hdB965)
    {
        hdB973 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB973 = hdB965;
    }
    if (hdB973)
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
    bool _3364 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3374;
    if (_3364)
    {
        _3374 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3374 = _3364;
    }
    if (_3374)
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
        bool _3399 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3414;
        if (!_3399)
        {
            _3414 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3414 = _3399;
        }
        if (_3414)
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
