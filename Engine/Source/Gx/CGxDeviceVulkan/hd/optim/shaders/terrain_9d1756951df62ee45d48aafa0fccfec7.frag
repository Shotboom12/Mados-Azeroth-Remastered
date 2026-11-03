#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3457;
vec4 _RESERVED_IDENTIFIER_FIXUP_3458;


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
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
    bool _64 = hdOverride >= 0;
    bool _83;
    if (_64)
    {
        _83 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _83 = _64;
    }
    vec4 _84;
    if (_83)
    {
        _84 = vec4(float(hdOverride));
    }
    else
    {
        _84 = value;
    }
    return _84;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _101 = hdOverride >= 0;
    bool _111;
    if (_101)
    {
        _111 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _111 = _101;
    }
    vec4 _112;
    if (_111)
    {
        _112 = vec4(float(hdOverride));
    }
    else
    {
        _112 = value;
    }
    return _112;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _129 = hdOverride >= 0;
    bool _139;
    if (_129)
    {
        _139 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _139 = _129;
    }
    vec4 _140;
    if (_139)
    {
        _140 = vec4(float(hdOverride));
    }
    else
    {
        _140 = value;
    }
    return _140;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _157 = hdOverride >= 0;
    bool _166;
    if (_157)
    {
        _166 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _166 = _157;
    }
    vec4 _167;
    if (_166)
    {
        _167 = vec4(float(hdOverride));
    }
    else
    {
        _167 = value;
    }
    return _167;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _185 = hdOverride >= 0;
    bool _195;
    if (_185)
    {
        _195 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _195 = _185;
    }
    vec4 _196;
    if (_195)
    {
        _196 = vec4(float(hdOverride));
    }
    else
    {
        _196 = value;
    }
    return _196;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _214 = hdOverride >= 0;
    bool _224;
    if (_214)
    {
        _224 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _224 = _214;
    }
    vec4 _225;
    if (_224)
    {
        _225 = vec4(float(hdOverride));
    }
    else
    {
        _225 = value;
    }
    return _225;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _243 = hdOverride >= 0;
    bool _253;
    if (_243)
    {
        _253 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _253 = _243;
    }
    vec4 _254;
    if (_253)
    {
        _254 = vec4(float(hdOverride));
    }
    else
    {
        _254 = value;
    }
    return _254;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _272 = hdOverride >= 0;
    bool _282;
    if (_272)
    {
        _282 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _282 = _272;
    }
    vec4 _283;
    if (_282)
    {
        _283 = vec4(float(hdOverride));
    }
    else
    {
        _283 = value;
    }
    return _283;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1084 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1088 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1092 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1096 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1100 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1110 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1084, _RESERVED_IDENTIFIER_FIXUP_1088, _RESERVED_IDENTIFIER_FIXUP_1100.xxxx), _RESERVED_IDENTIFIER_FIXUP_1092, _RESERVED_IDENTIFIER_FIXUP_1100.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1115 = mix(_RESERVED_IDENTIFIER_FIXUP_1110, _RESERVED_IDENTIFIER_FIXUP_1096, _RESERVED_IDENTIFIER_FIXUP_1100.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_1122 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2732 = _RESERVED_IDENTIFIER_FIXUP_1110;
    _RESERVED_IDENTIFIER_FIXUP_2732.x = _RESERVED_IDENTIFIER_FIXUP_1122;
    float _RESERVED_IDENTIFIER_FIXUP_1128 = clamp((_RESERVED_IDENTIFIER_FIXUP_1122 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2732.x = _RESERVED_IDENTIFIER_FIXUP_1128;
    float _RESERVED_IDENTIFIER_FIXUP_1134 = ((-_RESERVED_IDENTIFIER_FIXUP_1128) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2732.y = _RESERVED_IDENTIFIER_FIXUP_1134;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3460;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3459;
    if (_RESERVED_IDENTIFIER_FIXUP_1134 != (-_RESERVED_IDENTIFIER_FIXUP_1134))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1146 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2744 = _RESERVED_IDENTIFIER_FIXUP_2732;
        _RESERVED_IDENTIFIER_FIXUP_2744.y = _RESERVED_IDENTIFIER_FIXUP_1146.x;
        _RESERVED_IDENTIFIER_FIXUP_2744.z = _RESERVED_IDENTIFIER_FIXUP_1146.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1156 = _RESERVED_IDENTIFIER_FIXUP_2744.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2748;
        _RESERVED_IDENTIFIER_FIXUP_2748.x = _RESERVED_IDENTIFIER_FIXUP_1156.x;
        _RESERVED_IDENTIFIER_FIXUP_2748.y = _RESERVED_IDENTIFIER_FIXUP_1156.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1166 = _RESERVED_IDENTIFIER_FIXUP_2744.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2752;
        _RESERVED_IDENTIFIER_FIXUP_2752.x = _RESERVED_IDENTIFIER_FIXUP_1166.x;
        _RESERVED_IDENTIFIER_FIXUP_2752.y = _RESERVED_IDENTIFIER_FIXUP_1166.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1176 = _RESERVED_IDENTIFIER_FIXUP_2744.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2756;
        _RESERVED_IDENTIFIER_FIXUP_2756.x = _RESERVED_IDENTIFIER_FIXUP_1176.x;
        _RESERVED_IDENTIFIER_FIXUP_2756.y = _RESERVED_IDENTIFIER_FIXUP_1176.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1186 = _RESERVED_IDENTIFIER_FIXUP_2744.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2760;
        _RESERVED_IDENTIFIER_FIXUP_2760.x = _RESERVED_IDENTIFIER_FIXUP_1186.x;
        _RESERVED_IDENTIFIER_FIXUP_2760.y = _RESERVED_IDENTIFIER_FIXUP_1186.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1194 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1194.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1194.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1200 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_2748.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2752.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2756.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2760.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2748.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1200.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2752.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1200.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2756.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1200.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1257 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1200 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_2760.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1263 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2744.y = _RESERVED_IDENTIFIER_FIXUP_1263;
        float _RESERVED_IDENTIFIER_FIXUP_1268 = float(_RESERVED_IDENTIFIER_FIXUP_1263 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2744.y = _RESERVED_IDENTIFIER_FIXUP_1268;
        float _RESERVED_IDENTIFIER_FIXUP_1271 = dot(_RESERVED_IDENTIFIER_FIXUP_1257, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2744.z = _RESERVED_IDENTIFIER_FIXUP_1271;
        float _RESERVED_IDENTIFIER_FIXUP_1277 = _RESERVED_IDENTIFIER_FIXUP_1268 + _RESERVED_IDENTIFIER_FIXUP_1271;
        _RESERVED_IDENTIFIER_FIXUP_2744.y = _RESERVED_IDENTIFIER_FIXUP_1277;
        float _RESERVED_IDENTIFIER_FIXUP_1282 = (_RESERVED_IDENTIFIER_FIXUP_1277 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2744.y = _RESERVED_IDENTIFIER_FIXUP_1282;
        _RESERVED_IDENTIFIER_FIXUP_2744.x = (_RESERVED_IDENTIFIER_FIXUP_1128 * _RESERVED_IDENTIFIER_FIXUP_1282) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3460 = _RESERVED_IDENTIFIER_FIXUP_1257;
        _RESERVED_IDENTIFIER_FIXUP_3459 = _RESERVED_IDENTIFIER_FIXUP_2744;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2742 = _RESERVED_IDENTIFIER_FIXUP_2732;
        _RESERVED_IDENTIFIER_FIXUP_2742.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3460 = _RESERVED_IDENTIFIER_FIXUP_1092;
        _RESERVED_IDENTIFIER_FIXUP_3459 = _RESERVED_IDENTIFIER_FIXUP_2742;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1300 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2816 = _RESERVED_IDENTIFIER_FIXUP_3459;
    _RESERVED_IDENTIFIER_FIXUP_2816.y = _RESERVED_IDENTIFIER_FIXUP_1300;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3463;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3461;
    if (_RESERVED_IDENTIFIER_FIXUP_1300 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1309 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2977 = _RESERVED_IDENTIFIER_FIXUP_2816;
        _RESERVED_IDENTIFIER_FIXUP_2977.y = _RESERVED_IDENTIFIER_FIXUP_1309.x;
        _RESERVED_IDENTIFIER_FIXUP_2977.z = _RESERVED_IDENTIFIER_FIXUP_1309.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_2977.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2981;
        _RESERVED_IDENTIFIER_FIXUP_2981.x = _RESERVED_IDENTIFIER_FIXUP_1319.x;
        _RESERVED_IDENTIFIER_FIXUP_2981.y = _RESERVED_IDENTIFIER_FIXUP_1319.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1329 = _RESERVED_IDENTIFIER_FIXUP_2977.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2985;
        _RESERVED_IDENTIFIER_FIXUP_2985.x = _RESERVED_IDENTIFIER_FIXUP_1329.x;
        _RESERVED_IDENTIFIER_FIXUP_2985.y = _RESERVED_IDENTIFIER_FIXUP_1329.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_2977.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2989;
        _RESERVED_IDENTIFIER_FIXUP_2989.x = _RESERVED_IDENTIFIER_FIXUP_1339.x;
        _RESERVED_IDENTIFIER_FIXUP_2989.y = _RESERVED_IDENTIFIER_FIXUP_1339.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1349 = _RESERVED_IDENTIFIER_FIXUP_2977.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2993;
        _RESERVED_IDENTIFIER_FIXUP_2993.x = _RESERVED_IDENTIFIER_FIXUP_1349.x;
        _RESERVED_IDENTIFIER_FIXUP_2993.y = _RESERVED_IDENTIFIER_FIXUP_1349.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1357 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1357.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1357.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1363 = hdLod6(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_2981.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2985.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2989.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2993.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2981.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1363.y = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2985.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1363.z = hdLod6(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2989.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1363.w = hdLod6(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1363 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_2993.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1426 = hdLod6(param_22, param_23).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2977.y = _RESERVED_IDENTIFIER_FIXUP_1426;
        float _RESERVED_IDENTIFIER_FIXUP_1431 = float(_RESERVED_IDENTIFIER_FIXUP_1426 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2977.y = _RESERVED_IDENTIFIER_FIXUP_1431;
        float _RESERVED_IDENTIFIER_FIXUP_1434 = dot(_RESERVED_IDENTIFIER_FIXUP_1420, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2977.z = _RESERVED_IDENTIFIER_FIXUP_1434;
        float _RESERVED_IDENTIFIER_FIXUP_1440 = _RESERVED_IDENTIFIER_FIXUP_1431 + _RESERVED_IDENTIFIER_FIXUP_1434;
        _RESERVED_IDENTIFIER_FIXUP_2977.y = _RESERVED_IDENTIFIER_FIXUP_1440;
        _RESERVED_IDENTIFIER_FIXUP_2977.y = _RESERVED_IDENTIFIER_FIXUP_1440 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3463 = _RESERVED_IDENTIFIER_FIXUP_1420;
        _RESERVED_IDENTIFIER_FIXUP_3461 = _RESERVED_IDENTIFIER_FIXUP_2977;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1453 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2821 = _RESERVED_IDENTIFIER_FIXUP_2816;
        _RESERVED_IDENTIFIER_FIXUP_2821.z = _RESERVED_IDENTIFIER_FIXUP_1453;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3464;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3462;
        if (_RESERVED_IDENTIFIER_FIXUP_1453 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1462 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2911 = _RESERVED_IDENTIFIER_FIXUP_2821;
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1462.x;
            _RESERVED_IDENTIFIER_FIXUP_2911.w = _RESERVED_IDENTIFIER_FIXUP_1462.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1472 = _RESERVED_IDENTIFIER_FIXUP_2911.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2915;
            _RESERVED_IDENTIFIER_FIXUP_2915.x = _RESERVED_IDENTIFIER_FIXUP_1472.x;
            _RESERVED_IDENTIFIER_FIXUP_2915.y = _RESERVED_IDENTIFIER_FIXUP_1472.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_2911.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2919;
            _RESERVED_IDENTIFIER_FIXUP_2919.x = _RESERVED_IDENTIFIER_FIXUP_1482.x;
            _RESERVED_IDENTIFIER_FIXUP_2919.y = _RESERVED_IDENTIFIER_FIXUP_1482.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_2911.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2923;
            _RESERVED_IDENTIFIER_FIXUP_2923.x = _RESERVED_IDENTIFIER_FIXUP_1492.x;
            _RESERVED_IDENTIFIER_FIXUP_2923.y = _RESERVED_IDENTIFIER_FIXUP_1492.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1502 = _RESERVED_IDENTIFIER_FIXUP_2911.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2927;
            _RESERVED_IDENTIFIER_FIXUP_2927.x = _RESERVED_IDENTIFIER_FIXUP_1502.x;
            _RESERVED_IDENTIFIER_FIXUP_2927.y = _RESERVED_IDENTIFIER_FIXUP_1502.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1510 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1510.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1510.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1516 = hdLod7(param_24, param_25);
            _RESERVED_IDENTIFIER_FIXUP_2915.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2919.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2923.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2927.w = 0.0;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2915.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1516.y = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2919.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1516.z = hdLod7(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2923.xy;
            float param_31 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1516.w = hdLod7(param_30, param_31).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1573 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1516 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2927.xy;
            float param_33 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1579 = hdLod7(param_32, param_33).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1579;
            float _RESERVED_IDENTIFIER_FIXUP_1584 = float(_RESERVED_IDENTIFIER_FIXUP_1579 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1584;
            float _RESERVED_IDENTIFIER_FIXUP_1587 = dot(_RESERVED_IDENTIFIER_FIXUP_1573, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2911.w = _RESERVED_IDENTIFIER_FIXUP_1587;
            float _RESERVED_IDENTIFIER_FIXUP_1593 = _RESERVED_IDENTIFIER_FIXUP_1584 + _RESERVED_IDENTIFIER_FIXUP_1587;
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1593;
            _RESERVED_IDENTIFIER_FIXUP_2911.y = _RESERVED_IDENTIFIER_FIXUP_1593 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_1573;
            _RESERVED_IDENTIFIER_FIXUP_3462 = _RESERVED_IDENTIFIER_FIXUP_2911;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2825 = _RESERVED_IDENTIFIER_FIXUP_3460;
            _RESERVED_IDENTIFIER_FIXUP_2825.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2825.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1609 = (_RESERVED_IDENTIFIER_FIXUP_2825.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2830;
            _RESERVED_IDENTIFIER_FIXUP_2830.x = _RESERVED_IDENTIFIER_FIXUP_1609.x;
            _RESERVED_IDENTIFIER_FIXUP_2830.y = _RESERVED_IDENTIFIER_FIXUP_1609.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1619 = _RESERVED_IDENTIFIER_FIXUP_2830.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2834;
            _RESERVED_IDENTIFIER_FIXUP_2834.x = _RESERVED_IDENTIFIER_FIXUP_1619.x;
            _RESERVED_IDENTIFIER_FIXUP_2834.y = _RESERVED_IDENTIFIER_FIXUP_1619.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_2830.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2838;
            _RESERVED_IDENTIFIER_FIXUP_2838.x = _RESERVED_IDENTIFIER_FIXUP_1629.x;
            _RESERVED_IDENTIFIER_FIXUP_2838.y = _RESERVED_IDENTIFIER_FIXUP_1629.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1639 = _RESERVED_IDENTIFIER_FIXUP_2830.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2842;
            _RESERVED_IDENTIFIER_FIXUP_2842.x = _RESERVED_IDENTIFIER_FIXUP_1639.x;
            _RESERVED_IDENTIFIER_FIXUP_2842.y = _RESERVED_IDENTIFIER_FIXUP_1639.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1649 = _RESERVED_IDENTIFIER_FIXUP_2830.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2846;
            _RESERVED_IDENTIFIER_FIXUP_2846.x = _RESERVED_IDENTIFIER_FIXUP_1649.x;
            _RESERVED_IDENTIFIER_FIXUP_2846.y = _RESERVED_IDENTIFIER_FIXUP_1649.y;
            _RESERVED_IDENTIFIER_FIXUP_2830.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_2830.xy;
            float param_35 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1663 = hdLod8(param_34, param_35);
            _RESERVED_IDENTIFIER_FIXUP_2834.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2838.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2842.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2846.w = 0.0;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2834.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1663.y = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2838.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1663.z = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2842.xy;
            float param_41 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1663.w = hdLod8(param_40, param_41).x;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_2846.xy;
            float param_43 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1726 = hdLod8(param_42, param_43).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2886 = _RESERVED_IDENTIFIER_FIXUP_2821;
            _RESERVED_IDENTIFIER_FIXUP_2886.z = _RESERVED_IDENTIFIER_FIXUP_1726;
            float _RESERVED_IDENTIFIER_FIXUP_1731 = float(_RESERVED_IDENTIFIER_FIXUP_1726 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2886.z = _RESERVED_IDENTIFIER_FIXUP_1731;
            float _RESERVED_IDENTIFIER_FIXUP_1734 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1663 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2886.w = _RESERVED_IDENTIFIER_FIXUP_1734;
            float _RESERVED_IDENTIFIER_FIXUP_1740 = _RESERVED_IDENTIFIER_FIXUP_1731 + _RESERVED_IDENTIFIER_FIXUP_1734;
            _RESERVED_IDENTIFIER_FIXUP_2886.z = _RESERVED_IDENTIFIER_FIXUP_1740;
            float _RESERVED_IDENTIFIER_FIXUP_1748 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2886.w = _RESERVED_IDENTIFIER_FIXUP_1748;
            float _RESERVED_IDENTIFIER_FIXUP_1754 = clamp((_RESERVED_IDENTIFIER_FIXUP_1748 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2886.w = _RESERVED_IDENTIFIER_FIXUP_1754;
            float _RESERVED_IDENTIFIER_FIXUP_1759 = (_RESERVED_IDENTIFIER_FIXUP_1740 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2886.z = _RESERVED_IDENTIFIER_FIXUP_1759;
            _RESERVED_IDENTIFIER_FIXUP_2886.y = (_RESERVED_IDENTIFIER_FIXUP_1754 * _RESERVED_IDENTIFIER_FIXUP_1759) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_2825;
            _RESERVED_IDENTIFIER_FIXUP_3462 = _RESERVED_IDENTIFIER_FIXUP_2886;
        }
        _RESERVED_IDENTIFIER_FIXUP_3463 = _RESERVED_IDENTIFIER_FIXUP_3464;
        _RESERVED_IDENTIFIER_FIXUP_3461 = _RESERVED_IDENTIFIER_FIXUP_3462;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1774 = min(_RESERVED_IDENTIFIER_FIXUP_3461.y, _RESERVED_IDENTIFIER_FIXUP_3461.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3045 = _RESERVED_IDENTIFIER_FIXUP_3463;
    _RESERVED_IDENTIFIER_FIXUP_3045.x = _RESERVED_IDENTIFIER_FIXUP_1774;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3048 = _RESERVED_IDENTIFIER_FIXUP_3461;
    _RESERVED_IDENTIFIER_FIXUP_3048.x = (_RESERVED_IDENTIFIER_FIXUP_1774 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1785 = _RESERVED_IDENTIFIER_FIXUP_1115.xyz * _RESERVED_IDENTIFIER_FIXUP_3048.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3050 = _RESERVED_IDENTIFIER_FIXUP_3048;
    _RESERVED_IDENTIFIER_FIXUP_3050.x = _RESERVED_IDENTIFIER_FIXUP_1785.x;
    _RESERVED_IDENTIFIER_FIXUP_3050.y = _RESERVED_IDENTIFIER_FIXUP_1785.y;
    _RESERVED_IDENTIFIER_FIXUP_3050.z = _RESERVED_IDENTIFIER_FIXUP_1785.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1796 = _RESERVED_IDENTIFIER_FIXUP_3050.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3457).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3056 = _RESERVED_IDENTIFIER_FIXUP_3050;
    _RESERVED_IDENTIFIER_FIXUP_3056.x = _RESERVED_IDENTIFIER_FIXUP_1796.x;
    _RESERVED_IDENTIFIER_FIXUP_3056.y = _RESERVED_IDENTIFIER_FIXUP_1796.y;
    _RESERVED_IDENTIFIER_FIXUP_3056.z = _RESERVED_IDENTIFIER_FIXUP_1796.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1807 = _RESERVED_IDENTIFIER_FIXUP_3056.xyz + _RESERVED_IDENTIFIER_FIXUP_3056.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3062 = _RESERVED_IDENTIFIER_FIXUP_3056;
    _RESERVED_IDENTIFIER_FIXUP_3062.x = _RESERVED_IDENTIFIER_FIXUP_1807.x;
    _RESERVED_IDENTIFIER_FIXUP_3062.y = _RESERVED_IDENTIFIER_FIXUP_1807.y;
    _RESERVED_IDENTIFIER_FIXUP_3062.z = _RESERVED_IDENTIFIER_FIXUP_1807.z;
    _RESERVED_IDENTIFIER_FIXUP_1115.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1115.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1115.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1832 = (_RESERVED_IDENTIFIER_FIXUP_1115.xyz * _RESERVED_IDENTIFIER_FIXUP_3045.xxx) + _RESERVED_IDENTIFIER_FIXUP_3062.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3074 = _RESERVED_IDENTIFIER_FIXUP_3062;
    _RESERVED_IDENTIFIER_FIXUP_3074.x = _RESERVED_IDENTIFIER_FIXUP_1832.x;
    _RESERVED_IDENTIFIER_FIXUP_3074.y = _RESERVED_IDENTIFIER_FIXUP_1832.y;
    _RESERVED_IDENTIFIER_FIXUP_3074.z = _RESERVED_IDENTIFIER_FIXUP_1832.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1845 = _RESERVED_IDENTIFIER_FIXUP_3074.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3080 = _RESERVED_IDENTIFIER_FIXUP_3074;
    _RESERVED_IDENTIFIER_FIXUP_3080.x = _RESERVED_IDENTIFIER_FIXUP_1845.x;
    _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_1845.y;
    _RESERVED_IDENTIFIER_FIXUP_3080.z = _RESERVED_IDENTIFIER_FIXUP_1845.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1902 = OptTex0( texcoord0.xyz);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1906 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1910 = hdTex2(param_45);
    vec2 param_46 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1914 = hdTex3(param_46);
    vec2 param_47 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1918 = hdTex4(param_47);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1928 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1902, _RESERVED_IDENTIFIER_FIXUP_1906, _RESERVED_IDENTIFIER_FIXUP_1918.xxxx), _RESERVED_IDENTIFIER_FIXUP_1910, _RESERVED_IDENTIFIER_FIXUP_1918.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1933 = mix(_RESERVED_IDENTIFIER_FIXUP_1928, _RESERVED_IDENTIFIER_FIXUP_1914, _RESERVED_IDENTIFIER_FIXUP_1918.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3096 = _RESERVED_IDENTIFIER_FIXUP_1928;
    _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_1122;
    float _RESERVED_IDENTIFIER_FIXUP_1946 = clamp((_RESERVED_IDENTIFIER_FIXUP_1122 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_1946;
    float _RESERVED_IDENTIFIER_FIXUP_1952 = ((-_RESERVED_IDENTIFIER_FIXUP_1946) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3096.y = _RESERVED_IDENTIFIER_FIXUP_1952;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3472;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3471;
    if (_RESERVED_IDENTIFIER_FIXUP_1952 != (-_RESERVED_IDENTIFIER_FIXUP_1952))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1964 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3108 = _RESERVED_IDENTIFIER_FIXUP_3096;
        _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_1964.x;
        _RESERVED_IDENTIFIER_FIXUP_3108.z = _RESERVED_IDENTIFIER_FIXUP_1964.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1974 = _RESERVED_IDENTIFIER_FIXUP_3108.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3112;
        _RESERVED_IDENTIFIER_FIXUP_3112.x = _RESERVED_IDENTIFIER_FIXUP_1974.x;
        _RESERVED_IDENTIFIER_FIXUP_3112.y = _RESERVED_IDENTIFIER_FIXUP_1974.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1984 = _RESERVED_IDENTIFIER_FIXUP_3108.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3116;
        _RESERVED_IDENTIFIER_FIXUP_3116.x = _RESERVED_IDENTIFIER_FIXUP_1984.x;
        _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1984.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1994 = _RESERVED_IDENTIFIER_FIXUP_3108.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3120;
        _RESERVED_IDENTIFIER_FIXUP_3120.x = _RESERVED_IDENTIFIER_FIXUP_1994.x;
        _RESERVED_IDENTIFIER_FIXUP_3120.y = _RESERVED_IDENTIFIER_FIXUP_1994.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2004 = _RESERVED_IDENTIFIER_FIXUP_3108.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3124;
        _RESERVED_IDENTIFIER_FIXUP_3124.x = _RESERVED_IDENTIFIER_FIXUP_2004.x;
        _RESERVED_IDENTIFIER_FIXUP_3124.y = _RESERVED_IDENTIFIER_FIXUP_2004.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2012 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2012.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2012.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2018 = hdLod5(param_48, param_49);
        _RESERVED_IDENTIFIER_FIXUP_3112.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3116.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3120.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3124.w = 0.0;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3112.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2018.y = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3116.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2018.z = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3120.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2018.w = hdLod5(param_54, param_55).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2075 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2018 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3124.xy;
        float param_57 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2081 = hdLod5(param_56, param_57).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_2081;
        float _RESERVED_IDENTIFIER_FIXUP_2086 = float(_RESERVED_IDENTIFIER_FIXUP_2081 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_2086;
        float _RESERVED_IDENTIFIER_FIXUP_2089 = dot(_RESERVED_IDENTIFIER_FIXUP_2075, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3108.z = _RESERVED_IDENTIFIER_FIXUP_2089;
        float _RESERVED_IDENTIFIER_FIXUP_2095 = _RESERVED_IDENTIFIER_FIXUP_2086 + _RESERVED_IDENTIFIER_FIXUP_2089;
        _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_2095;
        float _RESERVED_IDENTIFIER_FIXUP_2100 = (_RESERVED_IDENTIFIER_FIXUP_2095 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_2100;
        _RESERVED_IDENTIFIER_FIXUP_3108.x = (_RESERVED_IDENTIFIER_FIXUP_1946 * _RESERVED_IDENTIFIER_FIXUP_2100) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3472 = _RESERVED_IDENTIFIER_FIXUP_2075;
        _RESERVED_IDENTIFIER_FIXUP_3471 = _RESERVED_IDENTIFIER_FIXUP_3108;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3106 = _RESERVED_IDENTIFIER_FIXUP_3096;
        _RESERVED_IDENTIFIER_FIXUP_3106.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3472 = _RESERVED_IDENTIFIER_FIXUP_1910;
        _RESERVED_IDENTIFIER_FIXUP_3471 = _RESERVED_IDENTIFIER_FIXUP_3106;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3180 = _RESERVED_IDENTIFIER_FIXUP_3471;
    _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_1300;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3475;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3473;
    if (_RESERVED_IDENTIFIER_FIXUP_1300 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2127 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3341 = _RESERVED_IDENTIFIER_FIXUP_3180;
        _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2127.x;
        _RESERVED_IDENTIFIER_FIXUP_3341.z = _RESERVED_IDENTIFIER_FIXUP_2127.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2137 = _RESERVED_IDENTIFIER_FIXUP_3341.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3345;
        _RESERVED_IDENTIFIER_FIXUP_3345.x = _RESERVED_IDENTIFIER_FIXUP_2137.x;
        _RESERVED_IDENTIFIER_FIXUP_3345.y = _RESERVED_IDENTIFIER_FIXUP_2137.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2147 = _RESERVED_IDENTIFIER_FIXUP_3341.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3349;
        _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_2147.x;
        _RESERVED_IDENTIFIER_FIXUP_3349.y = _RESERVED_IDENTIFIER_FIXUP_2147.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2157 = _RESERVED_IDENTIFIER_FIXUP_3341.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3353;
        _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_2157.x;
        _RESERVED_IDENTIFIER_FIXUP_3353.y = _RESERVED_IDENTIFIER_FIXUP_2157.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2167 = _RESERVED_IDENTIFIER_FIXUP_3341.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3357;
        _RESERVED_IDENTIFIER_FIXUP_3357.x = _RESERVED_IDENTIFIER_FIXUP_2167.x;
        _RESERVED_IDENTIFIER_FIXUP_3357.y = _RESERVED_IDENTIFIER_FIXUP_2167.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2175 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2175.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2175.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2181 = hdLod6(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3345.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3349.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3353.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3357.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3345.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2181.y = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3349.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2181.z = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3353.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2181.w = hdLod6(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2238 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2181 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3357.xy;
        float param_67 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2244 = hdLod6(param_66, param_67).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2244;
        float _RESERVED_IDENTIFIER_FIXUP_2249 = float(_RESERVED_IDENTIFIER_FIXUP_2244 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2249;
        float _RESERVED_IDENTIFIER_FIXUP_2252 = dot(_RESERVED_IDENTIFIER_FIXUP_2238, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3341.z = _RESERVED_IDENTIFIER_FIXUP_2252;
        float _RESERVED_IDENTIFIER_FIXUP_2258 = _RESERVED_IDENTIFIER_FIXUP_2249 + _RESERVED_IDENTIFIER_FIXUP_2252;
        _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2258;
        _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2258 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3475 = _RESERVED_IDENTIFIER_FIXUP_2238;
        _RESERVED_IDENTIFIER_FIXUP_3473 = _RESERVED_IDENTIFIER_FIXUP_3341;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2271 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3185 = _RESERVED_IDENTIFIER_FIXUP_3180;
        _RESERVED_IDENTIFIER_FIXUP_3185.z = _RESERVED_IDENTIFIER_FIXUP_2271;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3476;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3474;
        if (_RESERVED_IDENTIFIER_FIXUP_2271 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2280 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3275 = _RESERVED_IDENTIFIER_FIXUP_3185;
            _RESERVED_IDENTIFIER_FIXUP_3275.z = _RESERVED_IDENTIFIER_FIXUP_2280.x;
            _RESERVED_IDENTIFIER_FIXUP_3275.w = _RESERVED_IDENTIFIER_FIXUP_2280.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2290 = _RESERVED_IDENTIFIER_FIXUP_3275.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3279;
            _RESERVED_IDENTIFIER_FIXUP_3279.x = _RESERVED_IDENTIFIER_FIXUP_2290.x;
            _RESERVED_IDENTIFIER_FIXUP_3279.y = _RESERVED_IDENTIFIER_FIXUP_2290.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2300 = _RESERVED_IDENTIFIER_FIXUP_3275.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3283;
            _RESERVED_IDENTIFIER_FIXUP_3283.x = _RESERVED_IDENTIFIER_FIXUP_2300.x;
            _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_2300.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2310 = _RESERVED_IDENTIFIER_FIXUP_3275.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3287;
            _RESERVED_IDENTIFIER_FIXUP_3287.x = _RESERVED_IDENTIFIER_FIXUP_2310.x;
            _RESERVED_IDENTIFIER_FIXUP_3287.y = _RESERVED_IDENTIFIER_FIXUP_2310.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2320 = _RESERVED_IDENTIFIER_FIXUP_3275.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3291;
            _RESERVED_IDENTIFIER_FIXUP_3291.x = _RESERVED_IDENTIFIER_FIXUP_2320.x;
            _RESERVED_IDENTIFIER_FIXUP_3291.y = _RESERVED_IDENTIFIER_FIXUP_2320.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2328 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2328.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2328.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2334 = hdLod7(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3279.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3283.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3287.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3291.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3279.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2334.y = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3283.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2334.z = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3287.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2334.w = hdLod7(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2391 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2334 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3291.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2397 = hdLod7(param_76, param_77).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3275.z = _RESERVED_IDENTIFIER_FIXUP_2397;
            float _RESERVED_IDENTIFIER_FIXUP_2402 = float(_RESERVED_IDENTIFIER_FIXUP_2397 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3275.z = _RESERVED_IDENTIFIER_FIXUP_2402;
            float _RESERVED_IDENTIFIER_FIXUP_2405 = dot(_RESERVED_IDENTIFIER_FIXUP_2391, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3275.w = _RESERVED_IDENTIFIER_FIXUP_2405;
            float _RESERVED_IDENTIFIER_FIXUP_2411 = _RESERVED_IDENTIFIER_FIXUP_2402 + _RESERVED_IDENTIFIER_FIXUP_2405;
            _RESERVED_IDENTIFIER_FIXUP_3275.z = _RESERVED_IDENTIFIER_FIXUP_2411;
            _RESERVED_IDENTIFIER_FIXUP_3275.y = _RESERVED_IDENTIFIER_FIXUP_2411 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3476 = _RESERVED_IDENTIFIER_FIXUP_2391;
            _RESERVED_IDENTIFIER_FIXUP_3474 = _RESERVED_IDENTIFIER_FIXUP_3275;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3189 = _RESERVED_IDENTIFIER_FIXUP_3472;
            _RESERVED_IDENTIFIER_FIXUP_3189.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3189.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2427 = (_RESERVED_IDENTIFIER_FIXUP_3189.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3194;
            _RESERVED_IDENTIFIER_FIXUP_3194.x = _RESERVED_IDENTIFIER_FIXUP_2427.x;
            _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_2427.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2437 = _RESERVED_IDENTIFIER_FIXUP_3194.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3198;
            _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_2437.x;
            _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_2437.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2447 = _RESERVED_IDENTIFIER_FIXUP_3194.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3202;
            _RESERVED_IDENTIFIER_FIXUP_3202.x = _RESERVED_IDENTIFIER_FIXUP_2447.x;
            _RESERVED_IDENTIFIER_FIXUP_3202.y = _RESERVED_IDENTIFIER_FIXUP_2447.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2457 = _RESERVED_IDENTIFIER_FIXUP_3194.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3206;
            _RESERVED_IDENTIFIER_FIXUP_3206.x = _RESERVED_IDENTIFIER_FIXUP_2457.x;
            _RESERVED_IDENTIFIER_FIXUP_3206.y = _RESERVED_IDENTIFIER_FIXUP_2457.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2467 = _RESERVED_IDENTIFIER_FIXUP_3194.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3210;
            _RESERVED_IDENTIFIER_FIXUP_3210.x = _RESERVED_IDENTIFIER_FIXUP_2467.x;
            _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_2467.y;
            _RESERVED_IDENTIFIER_FIXUP_3194.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3194.xy;
            float param_79 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2481 = hdLod8(param_78, param_79);
            _RESERVED_IDENTIFIER_FIXUP_3198.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3202.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3206.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3210.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3198.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2481.y = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3202.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2481.z = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3206.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2481.w = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3210.xy;
            float param_87 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2544 = hdLod8(param_86, param_87).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3250 = _RESERVED_IDENTIFIER_FIXUP_3185;
            _RESERVED_IDENTIFIER_FIXUP_3250.z = _RESERVED_IDENTIFIER_FIXUP_2544;
            float _RESERVED_IDENTIFIER_FIXUP_2549 = float(_RESERVED_IDENTIFIER_FIXUP_2544 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3250.z = _RESERVED_IDENTIFIER_FIXUP_2549;
            float _RESERVED_IDENTIFIER_FIXUP_2552 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2481 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3250.w = _RESERVED_IDENTIFIER_FIXUP_2552;
            float _RESERVED_IDENTIFIER_FIXUP_2558 = _RESERVED_IDENTIFIER_FIXUP_2549 + _RESERVED_IDENTIFIER_FIXUP_2552;
            _RESERVED_IDENTIFIER_FIXUP_3250.z = _RESERVED_IDENTIFIER_FIXUP_2558;
            float _RESERVED_IDENTIFIER_FIXUP_2566 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3250.w = _RESERVED_IDENTIFIER_FIXUP_2566;
            float _RESERVED_IDENTIFIER_FIXUP_2572 = clamp((_RESERVED_IDENTIFIER_FIXUP_2566 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3250.w = _RESERVED_IDENTIFIER_FIXUP_2572;
            float _RESERVED_IDENTIFIER_FIXUP_2577 = (_RESERVED_IDENTIFIER_FIXUP_2558 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3250.z = _RESERVED_IDENTIFIER_FIXUP_2577;
            _RESERVED_IDENTIFIER_FIXUP_3250.y = (_RESERVED_IDENTIFIER_FIXUP_2572 * _RESERVED_IDENTIFIER_FIXUP_2577) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3476 = _RESERVED_IDENTIFIER_FIXUP_3189;
            _RESERVED_IDENTIFIER_FIXUP_3474 = _RESERVED_IDENTIFIER_FIXUP_3250;
        }
        _RESERVED_IDENTIFIER_FIXUP_3475 = _RESERVED_IDENTIFIER_FIXUP_3476;
        _RESERVED_IDENTIFIER_FIXUP_3473 = _RESERVED_IDENTIFIER_FIXUP_3474;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2592 = min(_RESERVED_IDENTIFIER_FIXUP_3473.y, _RESERVED_IDENTIFIER_FIXUP_3473.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3409 = _RESERVED_IDENTIFIER_FIXUP_3475;
    _RESERVED_IDENTIFIER_FIXUP_3409.x = _RESERVED_IDENTIFIER_FIXUP_2592;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3412 = _RESERVED_IDENTIFIER_FIXUP_3473;
    _RESERVED_IDENTIFIER_FIXUP_3412.x = (_RESERVED_IDENTIFIER_FIXUP_2592 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2603 = _RESERVED_IDENTIFIER_FIXUP_1933.xyz * _RESERVED_IDENTIFIER_FIXUP_3412.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3414 = _RESERVED_IDENTIFIER_FIXUP_3412;
    _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_2603.x;
    _RESERVED_IDENTIFIER_FIXUP_3414.y = _RESERVED_IDENTIFIER_FIXUP_2603.y;
    _RESERVED_IDENTIFIER_FIXUP_3414.z = _RESERVED_IDENTIFIER_FIXUP_2603.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2614 = _RESERVED_IDENTIFIER_FIXUP_3414.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3420 = _RESERVED_IDENTIFIER_FIXUP_3414;
    _RESERVED_IDENTIFIER_FIXUP_3420.x = _RESERVED_IDENTIFIER_FIXUP_2614.x;
    _RESERVED_IDENTIFIER_FIXUP_3420.y = _RESERVED_IDENTIFIER_FIXUP_2614.y;
    _RESERVED_IDENTIFIER_FIXUP_3420.z = _RESERVED_IDENTIFIER_FIXUP_2614.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2625 = _RESERVED_IDENTIFIER_FIXUP_3420.xyz + _RESERVED_IDENTIFIER_FIXUP_3420.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3426 = _RESERVED_IDENTIFIER_FIXUP_3420;
    _RESERVED_IDENTIFIER_FIXUP_3426.x = _RESERVED_IDENTIFIER_FIXUP_2625.x;
    _RESERVED_IDENTIFIER_FIXUP_3426.y = _RESERVED_IDENTIFIER_FIXUP_2625.y;
    _RESERVED_IDENTIFIER_FIXUP_3426.z = _RESERVED_IDENTIFIER_FIXUP_2625.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2636 = _RESERVED_IDENTIFIER_FIXUP_1933.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_1933;
    _RESERVED_IDENTIFIER_FIXUP_3432.x = _RESERVED_IDENTIFIER_FIXUP_2636.x;
    _RESERVED_IDENTIFIER_FIXUP_3432.y = _RESERVED_IDENTIFIER_FIXUP_2636.y;
    _RESERVED_IDENTIFIER_FIXUP_3432.z = _RESERVED_IDENTIFIER_FIXUP_2636.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2650 = (_RESERVED_IDENTIFIER_FIXUP_3432.xyz * _RESERVED_IDENTIFIER_FIXUP_3409.xxx) + _RESERVED_IDENTIFIER_FIXUP_3426.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3438 = _RESERVED_IDENTIFIER_FIXUP_3426;
    _RESERVED_IDENTIFIER_FIXUP_3438.x = _RESERVED_IDENTIFIER_FIXUP_2650.x;
    _RESERVED_IDENTIFIER_FIXUP_3438.y = _RESERVED_IDENTIFIER_FIXUP_2650.y;
    _RESERVED_IDENTIFIER_FIXUP_3438.z = _RESERVED_IDENTIFIER_FIXUP_2650.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2663 = _RESERVED_IDENTIFIER_FIXUP_3438.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3444 = _RESERVED_IDENTIFIER_FIXUP_3438;
    _RESERVED_IDENTIFIER_FIXUP_3444.x = _RESERVED_IDENTIFIER_FIXUP_2663.x;
    _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_2663.y;
    _RESERVED_IDENTIFIER_FIXUP_3444.z = _RESERVED_IDENTIFIER_FIXUP_2663.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3444.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_942 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_951;
    if (_RESERVED_IDENTIFIER_FIXUP_942)
    {
        _RESERVED_IDENTIFIER_FIXUP_951 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_951 = _RESERVED_IDENTIFIER_FIXUP_942;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_951)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_988 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3080.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1015 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2722;
    if (_RESERVED_IDENTIFIER_FIXUP_988 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2722 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_988), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1015);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2722 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1015);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2722;
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
    vec2 param_3 = v4.wz;
    r4 = hdTex4(param_3);
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB140 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB140.x;
        r0.z = hdB140.y;
        vec2 hdB162 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB162.x;
        r2.y = hdB162.y;
        vec2 hdB173 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB173.x;
        r3.y = hdB173.y;
        vec2 hdB184 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB184.x;
        r4.y = hdB184.y;
        vec2 hdB195 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB195.x;
        r5.y = hdB195.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r6.xy;
        float param_5 = r6.w;
        r6 = hdLod5(param_4, param_5);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_10 = r4.xy;
        float param_11 = r4.w;
        r4 = hdLod5(param_10, param_11);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_12 = r5.xy;
        float param_13 = r5.w;
        r5 = hdLod5(param_12, param_13);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r0.y = r5.x + (-v5.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v6.x), abs(v6.y));
    if (r0.y < 1.0)
    {
        vec2 hdB326 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB326.x;
        r0.z = hdB326.y;
        vec2 hdB336 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB336.x;
        r2.y = hdB336.y;
        vec2 hdB346 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB346.x;
        r3.y = hdB346.y;
        vec2 hdB356 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB356.x;
        r4.y = hdB356.y;
        vec2 hdB366 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB366.x;
        r5.y = hdB366.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = r6.xy;
        float param_15 = r6.w;
        r6 = hdLod6(param_14, param_15);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod6(param_16, param_17);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_18 = r3.xy;
        float param_19 = r3.w;
        r3 = hdLod6(param_18, param_19);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_20 = r4.xy;
        float param_21 = r4.w;
        r4 = hdLod6(param_20, param_21);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_22 = r5.xy;
        float param_23 = r5.w;
        r5 = hdLod6(param_22, param_23);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v6.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r0.y = r5.x + (-v6.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v7.x), abs(v7.y));
        if (r0.z < 1.0)
        {
            vec2 hdB481 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB481.x;
            r0.w = hdB481.y;
            vec2 hdB491 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB491.x;
            r2.y = hdB491.y;
            vec2 hdB501 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB501.x;
            r3.y = hdB501.y;
            vec2 hdB511 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB511.x;
            r4.y = hdB511.y;
            vec2 hdB521 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB521.x;
            r5.y = hdB521.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r6.xy;
            float param_25 = r6.w;
            r6 = hdLod7(param_24, param_25);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod7(param_26, param_27);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_30 = r4.xy;
            float param_31 = r4.w;
            r4 = hdLod7(param_30, param_31);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_32 = r5.xy;
            float param_33 = r5.w;
            r5 = hdLod7(param_32, param_33);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v7.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r0.z = r5.x + (-v7.z);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r2, vec4(1.0));
            r0.z += r0.w;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v5.w;
            r2.y = v6.w;
            vec2 hdB629 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB629.x;
            r3.y = hdB629.y;
            vec2 hdB639 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB639.x;
            r4.y = hdB639.y;
            vec2 hdB649 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB649.x;
            r5.y = hdB649.y;
            vec2 hdB659 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB659.x;
            r6.y = hdB659.y;
            vec2 hdB669 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB669.x;
            r7.y = hdB669.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_34 = r3.xy;
            float param_35 = r3.w;
            r3 = hdLod8(param_34, param_35);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r4 = hdLod8(param_36, param_37);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_38 = r5.xy;
            float param_39 = r5.w;
            r5 = hdLod8(param_38, param_39);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_40 = r6.xy;
            float param_41 = r6.w;
            r6 = hdLod8(param_40, param_41);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_42 = r7.xy;
            float param_43 = r7.w;
            r7 = hdLod8(param_42, param_43);
            r3.y = r4.x;
            r3.z = r5.x;
            r3.w = r6.x;
            r3 += (-v7.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r0.z = r7.x + (-v7.w);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r3, vec4(1.0));
            r0.z += r0.w;
            r0.w = max(abs(r2.x), abs(r2.y));
            r0.w = clamp((r0.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.z = (r0.z * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.w * r0.z) + 1.0;
        }
    }
    r2.x = min(r0.y, r0.x);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB806 = r0;
    vec3 hdB808 = r1.xyz * hdB806.xxx;
    r0.x = hdB808.x;
    r0.y = hdB808.y;
    r0.z = hdB808.z;
    vec4 hdB815 = r0;
    vec3 hdB819 = hdB815.xyz * v0.xyz;
    r0.x = hdB819.x;
    r0.y = hdB819.y;
    r0.z = hdB819.z;
    vec4 hdB826 = r0;
    vec4 hdB828 = r0;
    vec3 hdB830 = hdB826.xyz + hdB828.xyz;
    r0.x = hdB830.x;
    r0.y = hdB830.y;
    r0.z = hdB830.z;
    vec4 hdB837 = r1;
    vec3 hdB841 = hdB837.www * v1.xyz;
    r1.x = hdB841.x;
    r1.y = hdB841.y;
    r1.z = hdB841.z;
    vec4 hdB853 = r0;
    vec3 hdB855 = (r1.xyz * r2.xxx) + hdB853.xyz;
    r0.x = hdB855.x;
    r0.y = hdB855.y;
    r0.z = hdB855.z;
    vec4 hdB862 = r0;
    vec3 hdB869 = hdB862.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB869.x;
    r0.y = hdB869.y;
    r0.z = hdB869.z;
    vec3 hdB884 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB884.x;
    oC0.y = hdB884.y;
    oC0.z = hdB884.z;
    oC0.w = 1.0;
    bool hdB897 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB905;
    if (hdB897)
    {
        hdB905 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB905 = hdB897;
    }
    if (hdB905)
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
    bool _3121 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3131;
    if (_3121)
    {
        _3131 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3131 = _3121;
    }
    if (_3131)
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
        bool _3156 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3171;
        if (!_3156)
        {
            _3171 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3171 = _3156;
        }
        if (_3171)
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
