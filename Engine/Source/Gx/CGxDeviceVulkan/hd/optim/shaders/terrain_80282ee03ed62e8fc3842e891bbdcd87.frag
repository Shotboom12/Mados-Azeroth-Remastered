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
float _RESERVED_IDENTIFIER_FIXUP_3429;
vec4 _RESERVED_IDENTIFIER_FIXUP_3430;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1074 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1078 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1082 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1086 = hdTex3(param_2);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1096 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1074, _RESERVED_IDENTIFIER_FIXUP_1078, _RESERVED_IDENTIFIER_FIXUP_1086.xxxx), _RESERVED_IDENTIFIER_FIXUP_1082, _RESERVED_IDENTIFIER_FIXUP_1086.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1103 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2704 = _RESERVED_IDENTIFIER_FIXUP_1078;
    _RESERVED_IDENTIFIER_FIXUP_2704.x = _RESERVED_IDENTIFIER_FIXUP_1103;
    float _RESERVED_IDENTIFIER_FIXUP_1109 = clamp((_RESERVED_IDENTIFIER_FIXUP_1103 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2704.x = _RESERVED_IDENTIFIER_FIXUP_1109;
    float _RESERVED_IDENTIFIER_FIXUP_1115 = ((-_RESERVED_IDENTIFIER_FIXUP_1109) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2704.y = _RESERVED_IDENTIFIER_FIXUP_1115;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3432;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3431;
    if (_RESERVED_IDENTIFIER_FIXUP_1115 != (-_RESERVED_IDENTIFIER_FIXUP_1115))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1127 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2716 = _RESERVED_IDENTIFIER_FIXUP_2704;
        _RESERVED_IDENTIFIER_FIXUP_2716.y = _RESERVED_IDENTIFIER_FIXUP_1127.x;
        _RESERVED_IDENTIFIER_FIXUP_2716.z = _RESERVED_IDENTIFIER_FIXUP_1127.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1137 = _RESERVED_IDENTIFIER_FIXUP_2716.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2720;
        _RESERVED_IDENTIFIER_FIXUP_2720.x = _RESERVED_IDENTIFIER_FIXUP_1137.x;
        _RESERVED_IDENTIFIER_FIXUP_2720.y = _RESERVED_IDENTIFIER_FIXUP_1137.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1147 = _RESERVED_IDENTIFIER_FIXUP_2716.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2724;
        _RESERVED_IDENTIFIER_FIXUP_2724.x = _RESERVED_IDENTIFIER_FIXUP_1147.x;
        _RESERVED_IDENTIFIER_FIXUP_2724.y = _RESERVED_IDENTIFIER_FIXUP_1147.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1157 = _RESERVED_IDENTIFIER_FIXUP_2716.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2728;
        _RESERVED_IDENTIFIER_FIXUP_2728.x = _RESERVED_IDENTIFIER_FIXUP_1157.x;
        _RESERVED_IDENTIFIER_FIXUP_2728.y = _RESERVED_IDENTIFIER_FIXUP_1157.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1167 = _RESERVED_IDENTIFIER_FIXUP_2716.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2732;
        _RESERVED_IDENTIFIER_FIXUP_2732.x = _RESERVED_IDENTIFIER_FIXUP_1167.x;
        _RESERVED_IDENTIFIER_FIXUP_2732.y = _RESERVED_IDENTIFIER_FIXUP_1167.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1175 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1175.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1175.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_2720.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2724.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2728.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2732.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2720.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1181.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2724.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1181.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2728.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1181.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1238 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1181 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2732.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1244 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2716.y = _RESERVED_IDENTIFIER_FIXUP_1244;
        float _RESERVED_IDENTIFIER_FIXUP_1249 = float(_RESERVED_IDENTIFIER_FIXUP_1244 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2716.y = _RESERVED_IDENTIFIER_FIXUP_1249;
        float _RESERVED_IDENTIFIER_FIXUP_1252 = dot(_RESERVED_IDENTIFIER_FIXUP_1238, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2716.z = _RESERVED_IDENTIFIER_FIXUP_1252;
        float _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_1249 + _RESERVED_IDENTIFIER_FIXUP_1252;
        _RESERVED_IDENTIFIER_FIXUP_2716.y = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1263 = (_RESERVED_IDENTIFIER_FIXUP_1258 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2716.y = _RESERVED_IDENTIFIER_FIXUP_1263;
        _RESERVED_IDENTIFIER_FIXUP_2716.x = (_RESERVED_IDENTIFIER_FIXUP_1109 * _RESERVED_IDENTIFIER_FIXUP_1263) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_1238;
        _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_2716;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2714 = _RESERVED_IDENTIFIER_FIXUP_2704;
        _RESERVED_IDENTIFIER_FIXUP_2714.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_1082;
        _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_2714;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1281 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2788 = _RESERVED_IDENTIFIER_FIXUP_3431;
    _RESERVED_IDENTIFIER_FIXUP_2788.y = _RESERVED_IDENTIFIER_FIXUP_1281;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3435;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3433;
    if (_RESERVED_IDENTIFIER_FIXUP_1281 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1290 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2949 = _RESERVED_IDENTIFIER_FIXUP_2788;
        _RESERVED_IDENTIFIER_FIXUP_2949.y = _RESERVED_IDENTIFIER_FIXUP_1290.x;
        _RESERVED_IDENTIFIER_FIXUP_2949.z = _RESERVED_IDENTIFIER_FIXUP_1290.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1300 = _RESERVED_IDENTIFIER_FIXUP_2949.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2953;
        _RESERVED_IDENTIFIER_FIXUP_2953.x = _RESERVED_IDENTIFIER_FIXUP_1300.x;
        _RESERVED_IDENTIFIER_FIXUP_2953.y = _RESERVED_IDENTIFIER_FIXUP_1300.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1310 = _RESERVED_IDENTIFIER_FIXUP_2949.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2957;
        _RESERVED_IDENTIFIER_FIXUP_2957.x = _RESERVED_IDENTIFIER_FIXUP_1310.x;
        _RESERVED_IDENTIFIER_FIXUP_2957.y = _RESERVED_IDENTIFIER_FIXUP_1310.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1320 = _RESERVED_IDENTIFIER_FIXUP_2949.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2961;
        _RESERVED_IDENTIFIER_FIXUP_2961.x = _RESERVED_IDENTIFIER_FIXUP_1320.x;
        _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1320.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_2949.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2965;
        _RESERVED_IDENTIFIER_FIXUP_2965.x = _RESERVED_IDENTIFIER_FIXUP_1330.x;
        _RESERVED_IDENTIFIER_FIXUP_2965.y = _RESERVED_IDENTIFIER_FIXUP_1330.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1338 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1338.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1338.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1344 = hdLod6(param_13, param_14);
        _RESERVED_IDENTIFIER_FIXUP_2953.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2957.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2961.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2965.w = 0.0;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_2953.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1344.y = hdLod6(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2957.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1344.z = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2961.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1344.w = hdLod6(param_19, param_20).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1401 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1344 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_2965.xy;
        float param_22 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1407 = hdLod6(param_21, param_22).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2949.y = _RESERVED_IDENTIFIER_FIXUP_1407;
        float _RESERVED_IDENTIFIER_FIXUP_1412 = float(_RESERVED_IDENTIFIER_FIXUP_1407 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2949.y = _RESERVED_IDENTIFIER_FIXUP_1412;
        float _RESERVED_IDENTIFIER_FIXUP_1415 = dot(_RESERVED_IDENTIFIER_FIXUP_1401, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2949.z = _RESERVED_IDENTIFIER_FIXUP_1415;
        float _RESERVED_IDENTIFIER_FIXUP_1421 = _RESERVED_IDENTIFIER_FIXUP_1412 + _RESERVED_IDENTIFIER_FIXUP_1415;
        _RESERVED_IDENTIFIER_FIXUP_2949.y = _RESERVED_IDENTIFIER_FIXUP_1421;
        _RESERVED_IDENTIFIER_FIXUP_2949.y = _RESERVED_IDENTIFIER_FIXUP_1421 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3435 = _RESERVED_IDENTIFIER_FIXUP_1401;
        _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_2949;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1434 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2793 = _RESERVED_IDENTIFIER_FIXUP_2788;
        _RESERVED_IDENTIFIER_FIXUP_2793.z = _RESERVED_IDENTIFIER_FIXUP_1434;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3436;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3434;
        if (_RESERVED_IDENTIFIER_FIXUP_1434 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1443 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2883 = _RESERVED_IDENTIFIER_FIXUP_2793;
            _RESERVED_IDENTIFIER_FIXUP_2883.z = _RESERVED_IDENTIFIER_FIXUP_1443.x;
            _RESERVED_IDENTIFIER_FIXUP_2883.w = _RESERVED_IDENTIFIER_FIXUP_1443.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1453 = _RESERVED_IDENTIFIER_FIXUP_2883.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2887;
            _RESERVED_IDENTIFIER_FIXUP_2887.x = _RESERVED_IDENTIFIER_FIXUP_1453.x;
            _RESERVED_IDENTIFIER_FIXUP_2887.y = _RESERVED_IDENTIFIER_FIXUP_1453.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1463 = _RESERVED_IDENTIFIER_FIXUP_2883.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2891;
            _RESERVED_IDENTIFIER_FIXUP_2891.x = _RESERVED_IDENTIFIER_FIXUP_1463.x;
            _RESERVED_IDENTIFIER_FIXUP_2891.y = _RESERVED_IDENTIFIER_FIXUP_1463.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1473 = _RESERVED_IDENTIFIER_FIXUP_2883.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2895;
            _RESERVED_IDENTIFIER_FIXUP_2895.x = _RESERVED_IDENTIFIER_FIXUP_1473.x;
            _RESERVED_IDENTIFIER_FIXUP_2895.y = _RESERVED_IDENTIFIER_FIXUP_1473.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1483 = _RESERVED_IDENTIFIER_FIXUP_2883.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2899;
            _RESERVED_IDENTIFIER_FIXUP_2899.x = _RESERVED_IDENTIFIER_FIXUP_1483.x;
            _RESERVED_IDENTIFIER_FIXUP_2899.y = _RESERVED_IDENTIFIER_FIXUP_1483.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1491 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1491.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1491.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1497 = hdLod7(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_2887.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2891.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2895.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2899.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_2887.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1497.y = hdLod7(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2891.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1497.z = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2895.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1497.w = hdLod7(param_29, param_30).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1554 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1497 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2899.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1560 = hdLod7(param_31, param_32).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2883.z = _RESERVED_IDENTIFIER_FIXUP_1560;
            float _RESERVED_IDENTIFIER_FIXUP_1565 = float(_RESERVED_IDENTIFIER_FIXUP_1560 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2883.z = _RESERVED_IDENTIFIER_FIXUP_1565;
            float _RESERVED_IDENTIFIER_FIXUP_1568 = dot(_RESERVED_IDENTIFIER_FIXUP_1554, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2883.w = _RESERVED_IDENTIFIER_FIXUP_1568;
            float _RESERVED_IDENTIFIER_FIXUP_1574 = _RESERVED_IDENTIFIER_FIXUP_1565 + _RESERVED_IDENTIFIER_FIXUP_1568;
            _RESERVED_IDENTIFIER_FIXUP_2883.z = _RESERVED_IDENTIFIER_FIXUP_1574;
            _RESERVED_IDENTIFIER_FIXUP_2883.y = _RESERVED_IDENTIFIER_FIXUP_1574 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_1554;
            _RESERVED_IDENTIFIER_FIXUP_3434 = _RESERVED_IDENTIFIER_FIXUP_2883;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2797 = _RESERVED_IDENTIFIER_FIXUP_3432;
            _RESERVED_IDENTIFIER_FIXUP_2797.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2797.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1590 = (_RESERVED_IDENTIFIER_FIXUP_2797.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2802;
            _RESERVED_IDENTIFIER_FIXUP_2802.x = _RESERVED_IDENTIFIER_FIXUP_1590.x;
            _RESERVED_IDENTIFIER_FIXUP_2802.y = _RESERVED_IDENTIFIER_FIXUP_1590.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1600 = _RESERVED_IDENTIFIER_FIXUP_2802.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2806;
            _RESERVED_IDENTIFIER_FIXUP_2806.x = _RESERVED_IDENTIFIER_FIXUP_1600.x;
            _RESERVED_IDENTIFIER_FIXUP_2806.y = _RESERVED_IDENTIFIER_FIXUP_1600.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1610 = _RESERVED_IDENTIFIER_FIXUP_2802.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2810;
            _RESERVED_IDENTIFIER_FIXUP_2810.x = _RESERVED_IDENTIFIER_FIXUP_1610.x;
            _RESERVED_IDENTIFIER_FIXUP_2810.y = _RESERVED_IDENTIFIER_FIXUP_1610.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1620 = _RESERVED_IDENTIFIER_FIXUP_2802.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2814;
            _RESERVED_IDENTIFIER_FIXUP_2814.x = _RESERVED_IDENTIFIER_FIXUP_1620.x;
            _RESERVED_IDENTIFIER_FIXUP_2814.y = _RESERVED_IDENTIFIER_FIXUP_1620.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1630 = _RESERVED_IDENTIFIER_FIXUP_2802.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2818;
            _RESERVED_IDENTIFIER_FIXUP_2818.x = _RESERVED_IDENTIFIER_FIXUP_1630.x;
            _RESERVED_IDENTIFIER_FIXUP_2818.y = _RESERVED_IDENTIFIER_FIXUP_1630.y;
            _RESERVED_IDENTIFIER_FIXUP_2802.w = 0.0;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2802.xy;
            float param_34 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1644 = hdLod8(param_33, param_34);
            _RESERVED_IDENTIFIER_FIXUP_2806.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2810.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2814.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2818.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_2806.xy;
            float param_36 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1644.y = hdLod8(param_35, param_36).x;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2810.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1644.z = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2814.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1644.w = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2818.xy;
            float param_42 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1707 = hdLod8(param_41, param_42).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2858 = _RESERVED_IDENTIFIER_FIXUP_2793;
            _RESERVED_IDENTIFIER_FIXUP_2858.z = _RESERVED_IDENTIFIER_FIXUP_1707;
            float _RESERVED_IDENTIFIER_FIXUP_1712 = float(_RESERVED_IDENTIFIER_FIXUP_1707 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2858.z = _RESERVED_IDENTIFIER_FIXUP_1712;
            float _RESERVED_IDENTIFIER_FIXUP_1715 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1644 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2858.w = _RESERVED_IDENTIFIER_FIXUP_1715;
            float _RESERVED_IDENTIFIER_FIXUP_1721 = _RESERVED_IDENTIFIER_FIXUP_1712 + _RESERVED_IDENTIFIER_FIXUP_1715;
            _RESERVED_IDENTIFIER_FIXUP_2858.z = _RESERVED_IDENTIFIER_FIXUP_1721;
            float _RESERVED_IDENTIFIER_FIXUP_1729 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2858.w = _RESERVED_IDENTIFIER_FIXUP_1729;
            float _RESERVED_IDENTIFIER_FIXUP_1735 = clamp((_RESERVED_IDENTIFIER_FIXUP_1729 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2858.w = _RESERVED_IDENTIFIER_FIXUP_1735;
            float _RESERVED_IDENTIFIER_FIXUP_1740 = (_RESERVED_IDENTIFIER_FIXUP_1721 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2858.z = _RESERVED_IDENTIFIER_FIXUP_1740;
            _RESERVED_IDENTIFIER_FIXUP_2858.y = (_RESERVED_IDENTIFIER_FIXUP_1735 * _RESERVED_IDENTIFIER_FIXUP_1740) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_2797;
            _RESERVED_IDENTIFIER_FIXUP_3434 = _RESERVED_IDENTIFIER_FIXUP_2858;
        }
        _RESERVED_IDENTIFIER_FIXUP_3435 = _RESERVED_IDENTIFIER_FIXUP_3436;
        _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_3434;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1755 = min(_RESERVED_IDENTIFIER_FIXUP_3433.y, _RESERVED_IDENTIFIER_FIXUP_3433.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3017 = _RESERVED_IDENTIFIER_FIXUP_3435;
    _RESERVED_IDENTIFIER_FIXUP_3017.x = _RESERVED_IDENTIFIER_FIXUP_1755;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3020 = _RESERVED_IDENTIFIER_FIXUP_3433;
    _RESERVED_IDENTIFIER_FIXUP_3020.x = (_RESERVED_IDENTIFIER_FIXUP_1755 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1766 = _RESERVED_IDENTIFIER_FIXUP_1096.xyz * _RESERVED_IDENTIFIER_FIXUP_3020.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3022 = _RESERVED_IDENTIFIER_FIXUP_1096;
    _RESERVED_IDENTIFIER_FIXUP_3022.x = _RESERVED_IDENTIFIER_FIXUP_1766.x;
    _RESERVED_IDENTIFIER_FIXUP_3022.y = _RESERVED_IDENTIFIER_FIXUP_1766.y;
    _RESERVED_IDENTIFIER_FIXUP_3022.z = _RESERVED_IDENTIFIER_FIXUP_1766.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1777 = _RESERVED_IDENTIFIER_FIXUP_3022.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3429).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3028 = _RESERVED_IDENTIFIER_FIXUP_3022;
    _RESERVED_IDENTIFIER_FIXUP_3028.x = _RESERVED_IDENTIFIER_FIXUP_1777.x;
    _RESERVED_IDENTIFIER_FIXUP_3028.y = _RESERVED_IDENTIFIER_FIXUP_1777.y;
    _RESERVED_IDENTIFIER_FIXUP_3028.z = _RESERVED_IDENTIFIER_FIXUP_1777.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1788 = _RESERVED_IDENTIFIER_FIXUP_3028.xyz + _RESERVED_IDENTIFIER_FIXUP_3028.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3034 = _RESERVED_IDENTIFIER_FIXUP_3028;
    _RESERVED_IDENTIFIER_FIXUP_3034.x = _RESERVED_IDENTIFIER_FIXUP_1788.x;
    _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1788.y;
    _RESERVED_IDENTIFIER_FIXUP_3034.z = _RESERVED_IDENTIFIER_FIXUP_1788.z;
    _RESERVED_IDENTIFIER_FIXUP_3020.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3020.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3020.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1813 = (_RESERVED_IDENTIFIER_FIXUP_3020.xyz * _RESERVED_IDENTIFIER_FIXUP_3017.xxx) + _RESERVED_IDENTIFIER_FIXUP_3034.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3046 = _RESERVED_IDENTIFIER_FIXUP_3034;
    _RESERVED_IDENTIFIER_FIXUP_3046.x = _RESERVED_IDENTIFIER_FIXUP_1813.x;
    _RESERVED_IDENTIFIER_FIXUP_3046.y = _RESERVED_IDENTIFIER_FIXUP_1813.y;
    _RESERVED_IDENTIFIER_FIXUP_3046.z = _RESERVED_IDENTIFIER_FIXUP_1813.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1826 = _RESERVED_IDENTIFIER_FIXUP_3046.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3052 = _RESERVED_IDENTIFIER_FIXUP_3046;
    _RESERVED_IDENTIFIER_FIXUP_3052.x = _RESERVED_IDENTIFIER_FIXUP_1826.x;
    _RESERVED_IDENTIFIER_FIXUP_3052.y = _RESERVED_IDENTIFIER_FIXUP_1826.y;
    _RESERVED_IDENTIFIER_FIXUP_3052.z = _RESERVED_IDENTIFIER_FIXUP_1826.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1883 = OptTex0( texcoord0.xyz);
    vec2 param_43 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1887 = hdTex1(param_43);
    vec2 param_44 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1891 = hdTex2(param_44);
    vec2 param_45 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1895 = hdTex3(param_45);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1905 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1883, _RESERVED_IDENTIFIER_FIXUP_1887, _RESERVED_IDENTIFIER_FIXUP_1895.xxxx), _RESERVED_IDENTIFIER_FIXUP_1891, _RESERVED_IDENTIFIER_FIXUP_1895.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3068 = _RESERVED_IDENTIFIER_FIXUP_1887;
    _RESERVED_IDENTIFIER_FIXUP_3068.x = _RESERVED_IDENTIFIER_FIXUP_1103;
    float _RESERVED_IDENTIFIER_FIXUP_1918 = clamp((_RESERVED_IDENTIFIER_FIXUP_1103 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3068.x = _RESERVED_IDENTIFIER_FIXUP_1918;
    float _RESERVED_IDENTIFIER_FIXUP_1924 = ((-_RESERVED_IDENTIFIER_FIXUP_1918) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3068.y = _RESERVED_IDENTIFIER_FIXUP_1924;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3444;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3443;
    if (_RESERVED_IDENTIFIER_FIXUP_1924 != (-_RESERVED_IDENTIFIER_FIXUP_1924))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1936 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3080 = _RESERVED_IDENTIFIER_FIXUP_3068;
        _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_1936.x;
        _RESERVED_IDENTIFIER_FIXUP_3080.z = _RESERVED_IDENTIFIER_FIXUP_1936.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1946 = _RESERVED_IDENTIFIER_FIXUP_3080.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3084;
        _RESERVED_IDENTIFIER_FIXUP_3084.x = _RESERVED_IDENTIFIER_FIXUP_1946.x;
        _RESERVED_IDENTIFIER_FIXUP_3084.y = _RESERVED_IDENTIFIER_FIXUP_1946.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1956 = _RESERVED_IDENTIFIER_FIXUP_3080.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3088;
        _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_1956.x;
        _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_1956.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1966 = _RESERVED_IDENTIFIER_FIXUP_3080.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3092;
        _RESERVED_IDENTIFIER_FIXUP_3092.x = _RESERVED_IDENTIFIER_FIXUP_1966.x;
        _RESERVED_IDENTIFIER_FIXUP_3092.y = _RESERVED_IDENTIFIER_FIXUP_1966.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1976 = _RESERVED_IDENTIFIER_FIXUP_3080.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3096;
        _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_1976.x;
        _RESERVED_IDENTIFIER_FIXUP_3096.y = _RESERVED_IDENTIFIER_FIXUP_1976.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1984 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_1984.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_1984.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1990 = hdLod5(param_46, param_47);
        _RESERVED_IDENTIFIER_FIXUP_3084.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3088.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3092.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3096.w = 0.0;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3084.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1990.y = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3088.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1990.z = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3092.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1990.w = hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2047 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1990 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3096.xy;
        float param_55 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2053 = hdLod5(param_54, param_55).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_2053;
        float _RESERVED_IDENTIFIER_FIXUP_2058 = float(_RESERVED_IDENTIFIER_FIXUP_2053 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_2058;
        float _RESERVED_IDENTIFIER_FIXUP_2061 = dot(_RESERVED_IDENTIFIER_FIXUP_2047, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3080.z = _RESERVED_IDENTIFIER_FIXUP_2061;
        float _RESERVED_IDENTIFIER_FIXUP_2067 = _RESERVED_IDENTIFIER_FIXUP_2058 + _RESERVED_IDENTIFIER_FIXUP_2061;
        _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_2067;
        float _RESERVED_IDENTIFIER_FIXUP_2072 = (_RESERVED_IDENTIFIER_FIXUP_2067 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_2072;
        _RESERVED_IDENTIFIER_FIXUP_3080.x = (_RESERVED_IDENTIFIER_FIXUP_1918 * _RESERVED_IDENTIFIER_FIXUP_2072) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3444 = _RESERVED_IDENTIFIER_FIXUP_2047;
        _RESERVED_IDENTIFIER_FIXUP_3443 = _RESERVED_IDENTIFIER_FIXUP_3080;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3078 = _RESERVED_IDENTIFIER_FIXUP_3068;
        _RESERVED_IDENTIFIER_FIXUP_3078.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3444 = _RESERVED_IDENTIFIER_FIXUP_1891;
        _RESERVED_IDENTIFIER_FIXUP_3443 = _RESERVED_IDENTIFIER_FIXUP_3078;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3152 = _RESERVED_IDENTIFIER_FIXUP_3443;
    _RESERVED_IDENTIFIER_FIXUP_3152.y = _RESERVED_IDENTIFIER_FIXUP_1281;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3447;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3445;
    if (_RESERVED_IDENTIFIER_FIXUP_1281 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2099 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3313 = _RESERVED_IDENTIFIER_FIXUP_3152;
        _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_2099.x;
        _RESERVED_IDENTIFIER_FIXUP_3313.z = _RESERVED_IDENTIFIER_FIXUP_2099.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2109 = _RESERVED_IDENTIFIER_FIXUP_3313.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3317;
        _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_2109.x;
        _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_2109.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2119 = _RESERVED_IDENTIFIER_FIXUP_3313.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3321;
        _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_2119.x;
        _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_2119.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2129 = _RESERVED_IDENTIFIER_FIXUP_3313.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3325;
        _RESERVED_IDENTIFIER_FIXUP_3325.x = _RESERVED_IDENTIFIER_FIXUP_2129.x;
        _RESERVED_IDENTIFIER_FIXUP_3325.y = _RESERVED_IDENTIFIER_FIXUP_2129.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2139 = _RESERVED_IDENTIFIER_FIXUP_3313.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3329;
        _RESERVED_IDENTIFIER_FIXUP_3329.x = _RESERVED_IDENTIFIER_FIXUP_2139.x;
        _RESERVED_IDENTIFIER_FIXUP_3329.y = _RESERVED_IDENTIFIER_FIXUP_2139.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2147 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2147.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2147.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2153 = hdLod6(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3317.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3321.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3325.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3329.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3317.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2153.y = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3321.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2153.z = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3325.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2153.w = hdLod6(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2210 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2153 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3329.xy;
        float param_65 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2216 = hdLod6(param_64, param_65).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_2216;
        float _RESERVED_IDENTIFIER_FIXUP_2221 = float(_RESERVED_IDENTIFIER_FIXUP_2216 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_2221;
        float _RESERVED_IDENTIFIER_FIXUP_2224 = dot(_RESERVED_IDENTIFIER_FIXUP_2210, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3313.z = _RESERVED_IDENTIFIER_FIXUP_2224;
        float _RESERVED_IDENTIFIER_FIXUP_2230 = _RESERVED_IDENTIFIER_FIXUP_2221 + _RESERVED_IDENTIFIER_FIXUP_2224;
        _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_2230;
        _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_2230 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3447 = _RESERVED_IDENTIFIER_FIXUP_2210;
        _RESERVED_IDENTIFIER_FIXUP_3445 = _RESERVED_IDENTIFIER_FIXUP_3313;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2243 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3157 = _RESERVED_IDENTIFIER_FIXUP_3152;
        _RESERVED_IDENTIFIER_FIXUP_3157.z = _RESERVED_IDENTIFIER_FIXUP_2243;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3446;
        if (_RESERVED_IDENTIFIER_FIXUP_2243 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2252 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3247 = _RESERVED_IDENTIFIER_FIXUP_3157;
            _RESERVED_IDENTIFIER_FIXUP_3247.z = _RESERVED_IDENTIFIER_FIXUP_2252.x;
            _RESERVED_IDENTIFIER_FIXUP_3247.w = _RESERVED_IDENTIFIER_FIXUP_2252.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2262 = _RESERVED_IDENTIFIER_FIXUP_3247.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3251;
            _RESERVED_IDENTIFIER_FIXUP_3251.x = _RESERVED_IDENTIFIER_FIXUP_2262.x;
            _RESERVED_IDENTIFIER_FIXUP_3251.y = _RESERVED_IDENTIFIER_FIXUP_2262.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2272 = _RESERVED_IDENTIFIER_FIXUP_3247.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3255;
            _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_2272.x;
            _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_2272.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2282 = _RESERVED_IDENTIFIER_FIXUP_3247.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3259;
            _RESERVED_IDENTIFIER_FIXUP_3259.x = _RESERVED_IDENTIFIER_FIXUP_2282.x;
            _RESERVED_IDENTIFIER_FIXUP_3259.y = _RESERVED_IDENTIFIER_FIXUP_2282.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2292 = _RESERVED_IDENTIFIER_FIXUP_3247.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3263;
            _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_2292.x;
            _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_2292.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2300 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2300.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2300.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2306 = hdLod7(param_66, param_67);
            _RESERVED_IDENTIFIER_FIXUP_3251.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3255.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3259.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3263.w = 0.0;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3251.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2306.y = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3255.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2306.z = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3259.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2306.w = hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2363 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2306 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3263.xy;
            float param_75 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2369 = hdLod7(param_74, param_75).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3247.z = _RESERVED_IDENTIFIER_FIXUP_2369;
            float _RESERVED_IDENTIFIER_FIXUP_2374 = float(_RESERVED_IDENTIFIER_FIXUP_2369 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3247.z = _RESERVED_IDENTIFIER_FIXUP_2374;
            float _RESERVED_IDENTIFIER_FIXUP_2377 = dot(_RESERVED_IDENTIFIER_FIXUP_2363, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3247.w = _RESERVED_IDENTIFIER_FIXUP_2377;
            float _RESERVED_IDENTIFIER_FIXUP_2383 = _RESERVED_IDENTIFIER_FIXUP_2374 + _RESERVED_IDENTIFIER_FIXUP_2377;
            _RESERVED_IDENTIFIER_FIXUP_3247.z = _RESERVED_IDENTIFIER_FIXUP_2383;
            _RESERVED_IDENTIFIER_FIXUP_3247.y = _RESERVED_IDENTIFIER_FIXUP_2383 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3448 = _RESERVED_IDENTIFIER_FIXUP_2363;
            _RESERVED_IDENTIFIER_FIXUP_3446 = _RESERVED_IDENTIFIER_FIXUP_3247;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3161 = _RESERVED_IDENTIFIER_FIXUP_3444;
            _RESERVED_IDENTIFIER_FIXUP_3161.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3161.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2399 = (_RESERVED_IDENTIFIER_FIXUP_3161.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3166;
            _RESERVED_IDENTIFIER_FIXUP_3166.x = _RESERVED_IDENTIFIER_FIXUP_2399.x;
            _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_2399.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2409 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3170;
            _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_2409.x;
            _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_2409.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2419 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3174;
            _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_2419.x;
            _RESERVED_IDENTIFIER_FIXUP_3174.y = _RESERVED_IDENTIFIER_FIXUP_2419.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2429 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3178;
            _RESERVED_IDENTIFIER_FIXUP_3178.x = _RESERVED_IDENTIFIER_FIXUP_2429.x;
            _RESERVED_IDENTIFIER_FIXUP_3178.y = _RESERVED_IDENTIFIER_FIXUP_2429.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2439 = _RESERVED_IDENTIFIER_FIXUP_3166.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3182;
            _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_2439.x;
            _RESERVED_IDENTIFIER_FIXUP_3182.y = _RESERVED_IDENTIFIER_FIXUP_2439.y;
            _RESERVED_IDENTIFIER_FIXUP_3166.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3166.xy;
            float param_77 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2453 = hdLod8(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3170.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3174.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3178.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3182.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3170.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2453.y = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3174.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2453.z = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3178.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2453.w = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3182.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2516 = hdLod8(param_84, param_85).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3222 = _RESERVED_IDENTIFIER_FIXUP_3157;
            _RESERVED_IDENTIFIER_FIXUP_3222.z = _RESERVED_IDENTIFIER_FIXUP_2516;
            float _RESERVED_IDENTIFIER_FIXUP_2521 = float(_RESERVED_IDENTIFIER_FIXUP_2516 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3222.z = _RESERVED_IDENTIFIER_FIXUP_2521;
            float _RESERVED_IDENTIFIER_FIXUP_2524 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2453 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3222.w = _RESERVED_IDENTIFIER_FIXUP_2524;
            float _RESERVED_IDENTIFIER_FIXUP_2530 = _RESERVED_IDENTIFIER_FIXUP_2521 + _RESERVED_IDENTIFIER_FIXUP_2524;
            _RESERVED_IDENTIFIER_FIXUP_3222.z = _RESERVED_IDENTIFIER_FIXUP_2530;
            float _RESERVED_IDENTIFIER_FIXUP_2538 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3222.w = _RESERVED_IDENTIFIER_FIXUP_2538;
            float _RESERVED_IDENTIFIER_FIXUP_2544 = clamp((_RESERVED_IDENTIFIER_FIXUP_2538 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3222.w = _RESERVED_IDENTIFIER_FIXUP_2544;
            float _RESERVED_IDENTIFIER_FIXUP_2549 = (_RESERVED_IDENTIFIER_FIXUP_2530 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3222.z = _RESERVED_IDENTIFIER_FIXUP_2549;
            _RESERVED_IDENTIFIER_FIXUP_3222.y = (_RESERVED_IDENTIFIER_FIXUP_2544 * _RESERVED_IDENTIFIER_FIXUP_2549) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3448 = _RESERVED_IDENTIFIER_FIXUP_3161;
            _RESERVED_IDENTIFIER_FIXUP_3446 = _RESERVED_IDENTIFIER_FIXUP_3222;
        }
        _RESERVED_IDENTIFIER_FIXUP_3447 = _RESERVED_IDENTIFIER_FIXUP_3448;
        _RESERVED_IDENTIFIER_FIXUP_3445 = _RESERVED_IDENTIFIER_FIXUP_3446;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2564 = min(_RESERVED_IDENTIFIER_FIXUP_3445.y, _RESERVED_IDENTIFIER_FIXUP_3445.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3381 = _RESERVED_IDENTIFIER_FIXUP_3447;
    _RESERVED_IDENTIFIER_FIXUP_3381.x = _RESERVED_IDENTIFIER_FIXUP_2564;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3384 = _RESERVED_IDENTIFIER_FIXUP_3445;
    _RESERVED_IDENTIFIER_FIXUP_3384.x = (_RESERVED_IDENTIFIER_FIXUP_2564 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2575 = _RESERVED_IDENTIFIER_FIXUP_1905.xyz * _RESERVED_IDENTIFIER_FIXUP_3384.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3386 = _RESERVED_IDENTIFIER_FIXUP_1905;
    _RESERVED_IDENTIFIER_FIXUP_3386.x = _RESERVED_IDENTIFIER_FIXUP_2575.x;
    _RESERVED_IDENTIFIER_FIXUP_3386.y = _RESERVED_IDENTIFIER_FIXUP_2575.y;
    _RESERVED_IDENTIFIER_FIXUP_3386.z = _RESERVED_IDENTIFIER_FIXUP_2575.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2586 = _RESERVED_IDENTIFIER_FIXUP_3386.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3392 = _RESERVED_IDENTIFIER_FIXUP_3386;
    _RESERVED_IDENTIFIER_FIXUP_3392.x = _RESERVED_IDENTIFIER_FIXUP_2586.x;
    _RESERVED_IDENTIFIER_FIXUP_3392.y = _RESERVED_IDENTIFIER_FIXUP_2586.y;
    _RESERVED_IDENTIFIER_FIXUP_3392.z = _RESERVED_IDENTIFIER_FIXUP_2586.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2597 = _RESERVED_IDENTIFIER_FIXUP_3392.xyz + _RESERVED_IDENTIFIER_FIXUP_3392.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3398 = _RESERVED_IDENTIFIER_FIXUP_3392;
    _RESERVED_IDENTIFIER_FIXUP_3398.x = _RESERVED_IDENTIFIER_FIXUP_2597.x;
    _RESERVED_IDENTIFIER_FIXUP_3398.y = _RESERVED_IDENTIFIER_FIXUP_2597.y;
    _RESERVED_IDENTIFIER_FIXUP_3398.z = _RESERVED_IDENTIFIER_FIXUP_2597.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2608 = _RESERVED_IDENTIFIER_FIXUP_3398.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3384.x = _RESERVED_IDENTIFIER_FIXUP_2608.x;
    _RESERVED_IDENTIFIER_FIXUP_3384.y = _RESERVED_IDENTIFIER_FIXUP_2608.y;
    _RESERVED_IDENTIFIER_FIXUP_3384.z = _RESERVED_IDENTIFIER_FIXUP_2608.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2622 = (_RESERVED_IDENTIFIER_FIXUP_3384.xyz * _RESERVED_IDENTIFIER_FIXUP_3381.xxx) + _RESERVED_IDENTIFIER_FIXUP_3398.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3410 = _RESERVED_IDENTIFIER_FIXUP_3398;
    _RESERVED_IDENTIFIER_FIXUP_3410.x = _RESERVED_IDENTIFIER_FIXUP_2622.x;
    _RESERVED_IDENTIFIER_FIXUP_3410.y = _RESERVED_IDENTIFIER_FIXUP_2622.y;
    _RESERVED_IDENTIFIER_FIXUP_3410.z = _RESERVED_IDENTIFIER_FIXUP_2622.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2635 = _RESERVED_IDENTIFIER_FIXUP_3410.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3416 = _RESERVED_IDENTIFIER_FIXUP_3410;
    _RESERVED_IDENTIFIER_FIXUP_3416.x = _RESERVED_IDENTIFIER_FIXUP_2635.x;
    _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2635.y;
    _RESERVED_IDENTIFIER_FIXUP_3416.z = _RESERVED_IDENTIFIER_FIXUP_2635.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3416.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_932 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_941;
    if (_RESERVED_IDENTIFIER_FIXUP_932)
    {
        _RESERVED_IDENTIFIER_FIXUP_941 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_941 = _RESERVED_IDENTIFIER_FIXUP_932;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_941)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_978 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3052.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1005 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2694;
    if (_RESERVED_IDENTIFIER_FIXUP_978 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2694 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_978), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1005);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2694 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1005);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2694;
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
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB130 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB130.x;
        r1.z = hdB130.y;
        vec2 hdB152 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB152.x;
        r2.y = hdB152.y;
        vec2 hdB163 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB163.x;
        r3.y = hdB163.y;
        vec2 hdB174 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB174.x;
        r4.y = hdB174.y;
        vec2 hdB185 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB185.x;
        r5.y = hdB185.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r6.xy;
        float param_4 = r6.w;
        r6 = hdLod5(param_3, param_4);
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
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v5.z);
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
    r1.y = max(abs(v6.x), abs(v6.y));
    if (r1.y < 1.0)
    {
        vec2 hdB316 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB316.x;
        r1.z = hdB316.y;
        vec2 hdB326 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB326.x;
        r2.y = hdB326.y;
        vec2 hdB336 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB336.x;
        r3.y = hdB336.y;
        vec2 hdB346 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB346.x;
        r4.y = hdB346.y;
        vec2 hdB356 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB356.x;
        r5.y = hdB356.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod6(param_13, param_14);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod6(param_15, param_16);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_17 = r3.xy;
        float param_18 = r3.w;
        r3 = hdLod6(param_17, param_18);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_19 = r4.xy;
        float param_20 = r4.w;
        r4 = hdLod6(param_19, param_20);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_21 = r5.xy;
        float param_22 = r5.w;
        r5 = hdLod6(param_21, param_22);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v6.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v6.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            vec2 hdB471 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB471.x;
            r1.w = hdB471.y;
            vec2 hdB481 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB481.x;
            r2.y = hdB481.y;
            vec2 hdB491 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB491.x;
            r3.y = hdB491.y;
            vec2 hdB501 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB501.x;
            r4.y = hdB501.y;
            vec2 hdB511 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB511.x;
            r5.y = hdB511.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r6.xy;
            float param_24 = r6.w;
            r6 = hdLod7(param_23, param_24);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod7(param_25, param_26);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_29 = r4.xy;
            float param_30 = r4.w;
            r4 = hdLod7(param_29, param_30);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_31 = r5.xy;
            float param_32 = r5.w;
            r5 = hdLod7(param_31, param_32);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v7.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v7.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v5.w;
            r2.y = v6.w;
            vec2 hdB619 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB619.x;
            r3.y = hdB619.y;
            vec2 hdB629 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB629.x;
            r4.y = hdB629.y;
            vec2 hdB639 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB639.x;
            r5.y = hdB639.y;
            vec2 hdB649 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB649.x;
            r6.y = hdB649.y;
            vec2 hdB659 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB659.x;
            r7.y = hdB659.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod8(param_33, param_34);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r4 = hdLod8(param_35, param_36);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_37 = r5.xy;
            float param_38 = r5.w;
            r5 = hdLod8(param_37, param_38);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_39 = r6.xy;
            float param_40 = r6.w;
            r6 = hdLod8(param_39, param_40);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_41 = r7.xy;
            float param_42 = r7.w;
            r7 = hdLod8(param_41, param_42);
            r3.y = r4.x;
            r3.z = r5.x;
            r3.w = r6.x;
            r3 += (-v7.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v7.w);
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
    vec4 hdB794 = r0;
    vec3 hdB798 = hdB794.xyz * r1.xxx;
    r0.x = hdB798.x;
    r0.y = hdB798.y;
    r0.z = hdB798.z;
    vec4 hdB805 = r0;
    vec3 hdB809 = hdB805.xyz * v0.xyz;
    r0.x = hdB809.x;
    r0.y = hdB809.y;
    r0.z = hdB809.z;
    vec4 hdB816 = r0;
    vec4 hdB818 = r0;
    vec3 hdB820 = hdB816.xyz + hdB818.xyz;
    r0.x = hdB820.x;
    r0.y = hdB820.y;
    r0.z = hdB820.z;
    vec3 hdB831 = r0.www * v1.xyz;
    r1.x = hdB831.x;
    r1.y = hdB831.y;
    r1.z = hdB831.z;
    vec4 hdB843 = r0;
    vec3 hdB845 = (r1.xyz * r2.xxx) + hdB843.xyz;
    r0.x = hdB845.x;
    r0.y = hdB845.y;
    r0.z = hdB845.z;
    vec4 hdB852 = r0;
    vec3 hdB859 = hdB852.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB859.x;
    r0.y = hdB859.y;
    r0.z = hdB859.z;
    vec3 hdB874 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB874.x;
    oC0.y = hdB874.y;
    oC0.z = hdB874.z;
    oC0.w = 1.0;
    bool hdB887 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB895;
    if (hdB887)
    {
        hdB895 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB895 = hdB887;
    }
    if (hdB895)
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
    bool _3056 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3066;
    if (_3056)
    {
        _3066 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3066 = _3056;
    }
    if (_3066)
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
        bool _3091 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3106;
        if (!_3091)
        {
            _3106 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3106 = _3091;
        }
        if (_3106)
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
