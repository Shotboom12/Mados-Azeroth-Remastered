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
float _RESERVED_IDENTIFIER_FIXUP_3725;
vec4 _RESERVED_IDENTIFIER_FIXUP_3726;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1168 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1172 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1176 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1180 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1194 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1168, _RESERVED_IDENTIFIER_FIXUP_1172, _RESERVED_IDENTIFIER_FIXUP_1184.xxxx), _RESERVED_IDENTIFIER_FIXUP_1176, _RESERVED_IDENTIFIER_FIXUP_1184.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1199 = mix(_RESERVED_IDENTIFIER_FIXUP_1194, _RESERVED_IDENTIFIER_FIXUP_1180, _RESERVED_IDENTIFIER_FIXUP_1184.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_1206 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2978 = _RESERVED_IDENTIFIER_FIXUP_1194;
    _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1206;
    float _RESERVED_IDENTIFIER_FIXUP_1212 = clamp((_RESERVED_IDENTIFIER_FIXUP_1206 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1212;
    float _RESERVED_IDENTIFIER_FIXUP_1218 = ((-_RESERVED_IDENTIFIER_FIXUP_1212) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1218;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3727;
    if (_RESERVED_IDENTIFIER_FIXUP_1218 != (-_RESERVED_IDENTIFIER_FIXUP_1218))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1230 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1230.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1230.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1236 = hdLod5(param_4, param_5);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1240 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3190 = _RESERVED_IDENTIFIER_FIXUP_1236;
        _RESERVED_IDENTIFIER_FIXUP_3190.y = _RESERVED_IDENTIFIER_FIXUP_1240.x;
        _RESERVED_IDENTIFIER_FIXUP_3190.z = _RESERVED_IDENTIFIER_FIXUP_1240.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1250 = _RESERVED_IDENTIFIER_FIXUP_3190.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3194;
        _RESERVED_IDENTIFIER_FIXUP_3194.x = _RESERVED_IDENTIFIER_FIXUP_1250.x;
        _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_1250.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1257 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_1257.y;
        _RESERVED_IDENTIFIER_FIXUP_3194.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3194.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_1236.x + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1272;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1279 = _RESERVED_IDENTIFIER_FIXUP_3190.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3207;
        _RESERVED_IDENTIFIER_FIXUP_3207.x = _RESERVED_IDENTIFIER_FIXUP_1279.x;
        _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_1279.y;
        _RESERVED_IDENTIFIER_FIXUP_3207.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3207.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1301 = _RESERVED_IDENTIFIER_FIXUP_1272 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1301;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1308 = _RESERVED_IDENTIFIER_FIXUP_3190.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3220;
        _RESERVED_IDENTIFIER_FIXUP_3220.x = _RESERVED_IDENTIFIER_FIXUP_1308.x;
        _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1308.y;
        _RESERVED_IDENTIFIER_FIXUP_3220.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3220.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_1301 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1330;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1337 = _RESERVED_IDENTIFIER_FIXUP_3190.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3233;
        _RESERVED_IDENTIFIER_FIXUP_3233.x = _RESERVED_IDENTIFIER_FIXUP_1337.x;
        _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_1337.y;
        _RESERVED_IDENTIFIER_FIXUP_3233.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3233.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_1330 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1359;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1366 = _RESERVED_IDENTIFIER_FIXUP_3190.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3246;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1366.x;
        _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1366.y;
        _RESERVED_IDENTIFIER_FIXUP_3246.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3246.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1388 = _RESERVED_IDENTIFIER_FIXUP_1359 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1388;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1395 = _RESERVED_IDENTIFIER_FIXUP_3190.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3259;
        _RESERVED_IDENTIFIER_FIXUP_3259.x = _RESERVED_IDENTIFIER_FIXUP_1395.x;
        _RESERVED_IDENTIFIER_FIXUP_3259.y = _RESERVED_IDENTIFIER_FIXUP_1395.y;
        _RESERVED_IDENTIFIER_FIXUP_3259.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3259.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_1388 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1417;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1424 = _RESERVED_IDENTIFIER_FIXUP_3190.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3272;
        _RESERVED_IDENTIFIER_FIXUP_3272.x = _RESERVED_IDENTIFIER_FIXUP_1424.x;
        _RESERVED_IDENTIFIER_FIXUP_3272.y = _RESERVED_IDENTIFIER_FIXUP_1424.y;
        _RESERVED_IDENTIFIER_FIXUP_3272.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3272.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_1417 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1446;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1453 = _RESERVED_IDENTIFIER_FIXUP_3190.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3285;
        _RESERVED_IDENTIFIER_FIXUP_3285.x = _RESERVED_IDENTIFIER_FIXUP_1453.x;
        _RESERVED_IDENTIFIER_FIXUP_3285.y = _RESERVED_IDENTIFIER_FIXUP_1453.y;
        _RESERVED_IDENTIFIER_FIXUP_3285.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3285.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1475 = _RESERVED_IDENTIFIER_FIXUP_1446 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1475;
        _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1475 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3727 = _RESERVED_IDENTIFIER_FIXUP_3190;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1488 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2978.y = _RESERVED_IDENTIFIER_FIXUP_1488;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3728;
        if (_RESERVED_IDENTIFIER_FIXUP_1488 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1497 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1507 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1509 = _RESERVED_IDENTIFIER_FIXUP_1507.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3130 = _RESERVED_IDENTIFIER_FIXUP_2978;
            _RESERVED_IDENTIFIER_FIXUP_3130.y = _RESERVED_IDENTIFIER_FIXUP_1509;
            _RESERVED_IDENTIFIER_FIXUP_3130.z = _RESERVED_IDENTIFIER_FIXUP_1507.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_3130.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3134;
            _RESERVED_IDENTIFIER_FIXUP_3134.x = _RESERVED_IDENTIFIER_FIXUP_1517.x;
            _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1517.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1524 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_1524.y;
            _RESERVED_IDENTIFIER_FIXUP_3134.w = _RESERVED_IDENTIFIER_FIXUP_1528;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1497.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1497.w;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3134.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1528;
            float _RESERVED_IDENTIFIER_FIXUP_1539 = hdLod6(param_22, param_23).x + hdLod6(param_24, param_25).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3750 = vec4(_RESERVED_IDENTIFIER_FIXUP_1218, _RESERVED_IDENTIFIER_FIXUP_1509, _RESERVED_IDENTIFIER_FIXUP_1507.y, _RESERVED_IDENTIFIER_FIXUP_1539);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_3750.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3147;
            _RESERVED_IDENTIFIER_FIXUP_3147.x = _RESERVED_IDENTIFIER_FIXUP_1546.x;
            _RESERVED_IDENTIFIER_FIXUP_3147.y = _RESERVED_IDENTIFIER_FIXUP_1546.y;
            _RESERVED_IDENTIFIER_FIXUP_3147.w = _RESERVED_IDENTIFIER_FIXUP_1528;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3147.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1528;
            float _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1539 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_3750.w = _RESERVED_IDENTIFIER_FIXUP_1568;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_3750.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3160;
            _RESERVED_IDENTIFIER_FIXUP_3160.x = _RESERVED_IDENTIFIER_FIXUP_1575.x;
            _RESERVED_IDENTIFIER_FIXUP_3160.y = _RESERVED_IDENTIFIER_FIXUP_1575.y;
            _RESERVED_IDENTIFIER_FIXUP_3160.w = _RESERVED_IDENTIFIER_FIXUP_1528;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3160.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1528;
            float _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_1568 + hdLod6(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_3750.w = _RESERVED_IDENTIFIER_FIXUP_1597;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_3750.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3173;
            _RESERVED_IDENTIFIER_FIXUP_3173.x = _RESERVED_IDENTIFIER_FIXUP_1604.x;
            _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1604.y;
            _RESERVED_IDENTIFIER_FIXUP_3173.w = _RESERVED_IDENTIFIER_FIXUP_1528;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3173.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1528;
            float _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_1597 + hdLod6(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_1626;
            _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_1626 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3728 = _RESERVED_IDENTIFIER_FIXUP_3750;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1639 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2995 = _RESERVED_IDENTIFIER_FIXUP_2978;
            _RESERVED_IDENTIFIER_FIXUP_2995.y = _RESERVED_IDENTIFIER_FIXUP_1639;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3729;
            if (_RESERVED_IDENTIFIER_FIXUP_1639 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1648 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1658 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1660 = _RESERVED_IDENTIFIER_FIXUP_1658.x;
                _RESERVED_IDENTIFIER_FIXUP_2995.y = _RESERVED_IDENTIFIER_FIXUP_1660;
                _RESERVED_IDENTIFIER_FIXUP_2995.z = _RESERVED_IDENTIFIER_FIXUP_1658.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_2995.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3074;
                _RESERVED_IDENTIFIER_FIXUP_3074.x = _RESERVED_IDENTIFIER_FIXUP_1668.x;
                _RESERVED_IDENTIFIER_FIXUP_3074.y = _RESERVED_IDENTIFIER_FIXUP_1668.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1675 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1679 = _RESERVED_IDENTIFIER_FIXUP_1675.y;
                _RESERVED_IDENTIFIER_FIXUP_3074.w = _RESERVED_IDENTIFIER_FIXUP_1679;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1648.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1648.w;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3074.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1679;
                float _RESERVED_IDENTIFIER_FIXUP_1690 = hdLod7(param_32, param_33).x + hdLod7(param_34, param_35).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3749 = vec4(_RESERVED_IDENTIFIER_FIXUP_1218, _RESERVED_IDENTIFIER_FIXUP_1660, _RESERVED_IDENTIFIER_FIXUP_1658.y, _RESERVED_IDENTIFIER_FIXUP_1690);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_3749.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3087;
                _RESERVED_IDENTIFIER_FIXUP_3087.x = _RESERVED_IDENTIFIER_FIXUP_1697.x;
                _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1697.y;
                _RESERVED_IDENTIFIER_FIXUP_3087.w = _RESERVED_IDENTIFIER_FIXUP_1679;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3087.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1679;
                float _RESERVED_IDENTIFIER_FIXUP_1719 = _RESERVED_IDENTIFIER_FIXUP_1690 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_3749.w = _RESERVED_IDENTIFIER_FIXUP_1719;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1726 = _RESERVED_IDENTIFIER_FIXUP_3749.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3100;
                _RESERVED_IDENTIFIER_FIXUP_3100.x = _RESERVED_IDENTIFIER_FIXUP_1726.x;
                _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1726.y;
                _RESERVED_IDENTIFIER_FIXUP_3100.w = _RESERVED_IDENTIFIER_FIXUP_1679;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3100.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1679;
                float _RESERVED_IDENTIFIER_FIXUP_1748 = _RESERVED_IDENTIFIER_FIXUP_1719 + hdLod7(param_38, param_39).x;
                _RESERVED_IDENTIFIER_FIXUP_3749.w = _RESERVED_IDENTIFIER_FIXUP_1748;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1755 = _RESERVED_IDENTIFIER_FIXUP_3749.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3113;
                _RESERVED_IDENTIFIER_FIXUP_3113.x = _RESERVED_IDENTIFIER_FIXUP_1755.x;
                _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1755.y;
                _RESERVED_IDENTIFIER_FIXUP_3113.w = _RESERVED_IDENTIFIER_FIXUP_1679;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3113.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1679;
                float _RESERVED_IDENTIFIER_FIXUP_1777 = _RESERVED_IDENTIFIER_FIXUP_1748 + hdLod7(param_40, param_41).x;
                _RESERVED_IDENTIFIER_FIXUP_3749.y = _RESERVED_IDENTIFIER_FIXUP_1777;
                _RESERVED_IDENTIFIER_FIXUP_3749.x = _RESERVED_IDENTIFIER_FIXUP_1777 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3729 = _RESERVED_IDENTIFIER_FIXUP_3749;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1793 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_1793.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1808 = vec4(_RESERVED_IDENTIFIER_FIXUP_1793.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1797).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3746 = vec4(_RESERVED_IDENTIFIER_FIXUP_1808 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1797);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1845 = _RESERVED_IDENTIFIER_FIXUP_1808 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3028 = _RESERVED_IDENTIFIER_FIXUP_3746;
                _RESERVED_IDENTIFIER_FIXUP_3028.x = _RESERVED_IDENTIFIER_FIXUP_1845.x;
                _RESERVED_IDENTIFIER_FIXUP_3028.y = _RESERVED_IDENTIFIER_FIXUP_1845.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1867 = _RESERVED_IDENTIFIER_FIXUP_1808 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3037 = _RESERVED_IDENTIFIER_FIXUP_3028;
                _RESERVED_IDENTIFIER_FIXUP_3037.x = _RESERVED_IDENTIFIER_FIXUP_1867.x;
                _RESERVED_IDENTIFIER_FIXUP_3037.y = _RESERVED_IDENTIFIER_FIXUP_1867.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1889 = _RESERVED_IDENTIFIER_FIXUP_1808 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3046 = _RESERVED_IDENTIFIER_FIXUP_3037;
                _RESERVED_IDENTIFIER_FIXUP_3046.x = _RESERVED_IDENTIFIER_FIXUP_1889.x;
                _RESERVED_IDENTIFIER_FIXUP_3046.y = _RESERVED_IDENTIFIER_FIXUP_1889.y;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_1808;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1797;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3746.xy;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1797;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3028.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1797;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3037.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1797;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3046.xy;
                float param_51 = _RESERVED_IDENTIFIER_FIXUP_1797;
                float _RESERVED_IDENTIFIER_FIXUP_1904 = (((hdLod8(param_42, param_43).x + hdLod8(param_44, param_45).x) + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + hdLod8(param_50, param_51).x;
                float _RESERVED_IDENTIFIER_FIXUP_1918 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1923 = (_RESERVED_IDENTIFIER_FIXUP_1904 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3729 = vec4((_RESERVED_IDENTIFIER_FIXUP_1918 * _RESERVED_IDENTIFIER_FIXUP_1923) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1918, _RESERVED_IDENTIFIER_FIXUP_1923, _RESERVED_IDENTIFIER_FIXUP_1904);
            }
            _RESERVED_IDENTIFIER_FIXUP_3728 = _RESERVED_IDENTIFIER_FIXUP_3729;
        }
        _RESERVED_IDENTIFIER_FIXUP_3727 = _RESERVED_IDENTIFIER_FIXUP_3728;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3304 = _RESERVED_IDENTIFIER_FIXUP_3727;
    _RESERVED_IDENTIFIER_FIXUP_3304.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1951 = _RESERVED_IDENTIFIER_FIXUP_1199.xyz * _RESERVED_IDENTIFIER_FIXUP_3304.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3306 = _RESERVED_IDENTIFIER_FIXUP_3304;
    _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_1951.x;
    _RESERVED_IDENTIFIER_FIXUP_3306.z = _RESERVED_IDENTIFIER_FIXUP_1951.y;
    _RESERVED_IDENTIFIER_FIXUP_3306.w = _RESERVED_IDENTIFIER_FIXUP_1951.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1962 = _RESERVED_IDENTIFIER_FIXUP_3306.yzw * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3725).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3312 = _RESERVED_IDENTIFIER_FIXUP_3306;
    _RESERVED_IDENTIFIER_FIXUP_3312.y = _RESERVED_IDENTIFIER_FIXUP_1962.x;
    _RESERVED_IDENTIFIER_FIXUP_3312.z = _RESERVED_IDENTIFIER_FIXUP_1962.y;
    _RESERVED_IDENTIFIER_FIXUP_3312.w = _RESERVED_IDENTIFIER_FIXUP_1962.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1973 = _RESERVED_IDENTIFIER_FIXUP_3312.yzw + _RESERVED_IDENTIFIER_FIXUP_3312.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1975 = _RESERVED_IDENTIFIER_FIXUP_1973.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3318 = _RESERVED_IDENTIFIER_FIXUP_3312;
    _RESERVED_IDENTIFIER_FIXUP_3318.y = _RESERVED_IDENTIFIER_FIXUP_1975;
    _RESERVED_IDENTIFIER_FIXUP_3318.z = _RESERVED_IDENTIFIER_FIXUP_1973.y;
    _RESERVED_IDENTIFIER_FIXUP_3318.w = _RESERVED_IDENTIFIER_FIXUP_1973.z;
    _RESERVED_IDENTIFIER_FIXUP_1199.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1199.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1199.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1998 = (_RESERVED_IDENTIFIER_FIXUP_1199.xyz * _RESERVED_IDENTIFIER_FIXUP_3318.xxx) + _RESERVED_IDENTIFIER_FIXUP_3318.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3751 = vec4(_RESERVED_IDENTIFIER_FIXUP_1998.x, _RESERVED_IDENTIFIER_FIXUP_1975, _RESERVED_IDENTIFIER_FIXUP_1973.yz);
    _RESERVED_IDENTIFIER_FIXUP_3751.y = _RESERVED_IDENTIFIER_FIXUP_1998.y;
    _RESERVED_IDENTIFIER_FIXUP_3751.z = _RESERVED_IDENTIFIER_FIXUP_1998.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2011 = _RESERVED_IDENTIFIER_FIXUP_3751.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3336 = _RESERVED_IDENTIFIER_FIXUP_3751;
    _RESERVED_IDENTIFIER_FIXUP_3336.x = _RESERVED_IDENTIFIER_FIXUP_2011.x;
    _RESERVED_IDENTIFIER_FIXUP_3336.y = _RESERVED_IDENTIFIER_FIXUP_2011.y;
    _RESERVED_IDENTIFIER_FIXUP_3336.z = _RESERVED_IDENTIFIER_FIXUP_2011.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2066 = OptTex0( texcoord0.xyz);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2070 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2074 = hdTex2(param_53);
    vec2 param_54 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2078 = hdTex3(param_54);
    vec2 param_55 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2082 = hdTex4(param_55);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2092 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2066, _RESERVED_IDENTIFIER_FIXUP_2070, _RESERVED_IDENTIFIER_FIXUP_2082.xxxx), _RESERVED_IDENTIFIER_FIXUP_2074, _RESERVED_IDENTIFIER_FIXUP_2082.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2097 = mix(_RESERVED_IDENTIFIER_FIXUP_2092, _RESERVED_IDENTIFIER_FIXUP_2078, _RESERVED_IDENTIFIER_FIXUP_2082.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3352 = _RESERVED_IDENTIFIER_FIXUP_2092;
    _RESERVED_IDENTIFIER_FIXUP_3352.x = _RESERVED_IDENTIFIER_FIXUP_1206;
    float _RESERVED_IDENTIFIER_FIXUP_2110 = clamp((_RESERVED_IDENTIFIER_FIXUP_1206 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3352.x = _RESERVED_IDENTIFIER_FIXUP_2110;
    float _RESERVED_IDENTIFIER_FIXUP_2116 = ((-_RESERVED_IDENTIFIER_FIXUP_2110) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3352.x = _RESERVED_IDENTIFIER_FIXUP_2116;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3736;
    if (_RESERVED_IDENTIFIER_FIXUP_2116 != (-_RESERVED_IDENTIFIER_FIXUP_2116))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2128 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2128.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2128.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2134 = hdLod5(param_56, param_57);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2138 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3564 = _RESERVED_IDENTIFIER_FIXUP_2134;
        _RESERVED_IDENTIFIER_FIXUP_3564.y = _RESERVED_IDENTIFIER_FIXUP_2138.x;
        _RESERVED_IDENTIFIER_FIXUP_3564.z = _RESERVED_IDENTIFIER_FIXUP_2138.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2148 = _RESERVED_IDENTIFIER_FIXUP_3564.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3568;
        _RESERVED_IDENTIFIER_FIXUP_3568.x = _RESERVED_IDENTIFIER_FIXUP_2148.x;
        _RESERVED_IDENTIFIER_FIXUP_3568.y = _RESERVED_IDENTIFIER_FIXUP_2148.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2155 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2159 = _RESERVED_IDENTIFIER_FIXUP_2155.y;
        _RESERVED_IDENTIFIER_FIXUP_3568.w = _RESERVED_IDENTIFIER_FIXUP_2159;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3568.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2159;
        float _RESERVED_IDENTIFIER_FIXUP_2170 = _RESERVED_IDENTIFIER_FIXUP_2134.x + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2170;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2177 = _RESERVED_IDENTIFIER_FIXUP_3564.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3581;
        _RESERVED_IDENTIFIER_FIXUP_3581.x = _RESERVED_IDENTIFIER_FIXUP_2177.x;
        _RESERVED_IDENTIFIER_FIXUP_3581.y = _RESERVED_IDENTIFIER_FIXUP_2177.y;
        _RESERVED_IDENTIFIER_FIXUP_3581.w = _RESERVED_IDENTIFIER_FIXUP_2159;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3581.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2159;
        float _RESERVED_IDENTIFIER_FIXUP_2199 = _RESERVED_IDENTIFIER_FIXUP_2170 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2199;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2206 = _RESERVED_IDENTIFIER_FIXUP_3564.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3594;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2206.x;
        _RESERVED_IDENTIFIER_FIXUP_3594.y = _RESERVED_IDENTIFIER_FIXUP_2206.y;
        _RESERVED_IDENTIFIER_FIXUP_3594.w = _RESERVED_IDENTIFIER_FIXUP_2159;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3594.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2159;
        float _RESERVED_IDENTIFIER_FIXUP_2228 = _RESERVED_IDENTIFIER_FIXUP_2199 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2228;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2235 = _RESERVED_IDENTIFIER_FIXUP_3564.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3607;
        _RESERVED_IDENTIFIER_FIXUP_3607.x = _RESERVED_IDENTIFIER_FIXUP_2235.x;
        _RESERVED_IDENTIFIER_FIXUP_3607.y = _RESERVED_IDENTIFIER_FIXUP_2235.y;
        _RESERVED_IDENTIFIER_FIXUP_3607.w = _RESERVED_IDENTIFIER_FIXUP_2159;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3607.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2159;
        float _RESERVED_IDENTIFIER_FIXUP_2257 = _RESERVED_IDENTIFIER_FIXUP_2228 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2257;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2264 = _RESERVED_IDENTIFIER_FIXUP_3564.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3620;
        _RESERVED_IDENTIFIER_FIXUP_3620.x = _RESERVED_IDENTIFIER_FIXUP_2264.x;
        _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_2264.y;
        _RESERVED_IDENTIFIER_FIXUP_3620.w = _RESERVED_IDENTIFIER_FIXUP_2159;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3620.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2159;
        float _RESERVED_IDENTIFIER_FIXUP_2286 = _RESERVED_IDENTIFIER_FIXUP_2257 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2286;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2293 = _RESERVED_IDENTIFIER_FIXUP_3564.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3633;
        _RESERVED_IDENTIFIER_FIXUP_3633.x = _RESERVED_IDENTIFIER_FIXUP_2293.x;
        _RESERVED_IDENTIFIER_FIXUP_3633.y = _RESERVED_IDENTIFIER_FIXUP_2293.y;
        _RESERVED_IDENTIFIER_FIXUP_3633.w = _RESERVED_IDENTIFIER_FIXUP_2159;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3633.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2159;
        float _RESERVED_IDENTIFIER_FIXUP_2315 = _RESERVED_IDENTIFIER_FIXUP_2286 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2315;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2322 = _RESERVED_IDENTIFIER_FIXUP_3564.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3646;
        _RESERVED_IDENTIFIER_FIXUP_3646.x = _RESERVED_IDENTIFIER_FIXUP_2322.x;
        _RESERVED_IDENTIFIER_FIXUP_3646.y = _RESERVED_IDENTIFIER_FIXUP_2322.y;
        _RESERVED_IDENTIFIER_FIXUP_3646.w = _RESERVED_IDENTIFIER_FIXUP_2159;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3646.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2159;
        float _RESERVED_IDENTIFIER_FIXUP_2344 = _RESERVED_IDENTIFIER_FIXUP_2315 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2344;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2351 = _RESERVED_IDENTIFIER_FIXUP_3564.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3659;
        _RESERVED_IDENTIFIER_FIXUP_3659.x = _RESERVED_IDENTIFIER_FIXUP_2351.x;
        _RESERVED_IDENTIFIER_FIXUP_3659.y = _RESERVED_IDENTIFIER_FIXUP_2351.y;
        _RESERVED_IDENTIFIER_FIXUP_3659.w = _RESERVED_IDENTIFIER_FIXUP_2159;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3659.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2159;
        float _RESERVED_IDENTIFIER_FIXUP_2373 = _RESERVED_IDENTIFIER_FIXUP_2344 + hdLod5(param_72, param_73).x;
        _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2373;
        _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2373 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3736 = _RESERVED_IDENTIFIER_FIXUP_3564;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2386 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3352.y = _RESERVED_IDENTIFIER_FIXUP_2386;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3737;
        if (_RESERVED_IDENTIFIER_FIXUP_2386 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2395 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2405 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2407 = _RESERVED_IDENTIFIER_FIXUP_2405.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3504 = _RESERVED_IDENTIFIER_FIXUP_3352;
            _RESERVED_IDENTIFIER_FIXUP_3504.y = _RESERVED_IDENTIFIER_FIXUP_2407;
            _RESERVED_IDENTIFIER_FIXUP_3504.z = _RESERVED_IDENTIFIER_FIXUP_2405.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2415 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3508;
            _RESERVED_IDENTIFIER_FIXUP_3508.x = _RESERVED_IDENTIFIER_FIXUP_2415.x;
            _RESERVED_IDENTIFIER_FIXUP_3508.y = _RESERVED_IDENTIFIER_FIXUP_2415.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2422 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2426 = _RESERVED_IDENTIFIER_FIXUP_2422.y;
            _RESERVED_IDENTIFIER_FIXUP_3508.w = _RESERVED_IDENTIFIER_FIXUP_2426;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2395.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2395.w;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3508.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2426;
            float _RESERVED_IDENTIFIER_FIXUP_2437 = hdLod6(param_74, param_75).x + hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3758 = vec4(_RESERVED_IDENTIFIER_FIXUP_2116, _RESERVED_IDENTIFIER_FIXUP_2407, _RESERVED_IDENTIFIER_FIXUP_2405.y, _RESERVED_IDENTIFIER_FIXUP_2437);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2444 = _RESERVED_IDENTIFIER_FIXUP_3758.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3521;
            _RESERVED_IDENTIFIER_FIXUP_3521.x = _RESERVED_IDENTIFIER_FIXUP_2444.x;
            _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2444.y;
            _RESERVED_IDENTIFIER_FIXUP_3521.w = _RESERVED_IDENTIFIER_FIXUP_2426;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3521.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2426;
            float _RESERVED_IDENTIFIER_FIXUP_2466 = _RESERVED_IDENTIFIER_FIXUP_2437 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3758.w = _RESERVED_IDENTIFIER_FIXUP_2466;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2473 = _RESERVED_IDENTIFIER_FIXUP_3758.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3534;
            _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_2473.x;
            _RESERVED_IDENTIFIER_FIXUP_3534.y = _RESERVED_IDENTIFIER_FIXUP_2473.y;
            _RESERVED_IDENTIFIER_FIXUP_3534.w = _RESERVED_IDENTIFIER_FIXUP_2426;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3534.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2426;
            float _RESERVED_IDENTIFIER_FIXUP_2495 = _RESERVED_IDENTIFIER_FIXUP_2466 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3758.w = _RESERVED_IDENTIFIER_FIXUP_2495;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2502 = _RESERVED_IDENTIFIER_FIXUP_3758.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3547;
            _RESERVED_IDENTIFIER_FIXUP_3547.x = _RESERVED_IDENTIFIER_FIXUP_2502.x;
            _RESERVED_IDENTIFIER_FIXUP_3547.y = _RESERVED_IDENTIFIER_FIXUP_2502.y;
            _RESERVED_IDENTIFIER_FIXUP_3547.w = _RESERVED_IDENTIFIER_FIXUP_2426;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3547.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2426;
            float _RESERVED_IDENTIFIER_FIXUP_2524 = _RESERVED_IDENTIFIER_FIXUP_2495 + hdLod6(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3758.y = _RESERVED_IDENTIFIER_FIXUP_2524;
            _RESERVED_IDENTIFIER_FIXUP_3758.x = _RESERVED_IDENTIFIER_FIXUP_2524 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3737 = _RESERVED_IDENTIFIER_FIXUP_3758;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2537 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3369 = _RESERVED_IDENTIFIER_FIXUP_3352;
            _RESERVED_IDENTIFIER_FIXUP_3369.y = _RESERVED_IDENTIFIER_FIXUP_2537;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3738;
            if (_RESERVED_IDENTIFIER_FIXUP_2537 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2546 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2556 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2558 = _RESERVED_IDENTIFIER_FIXUP_2556.x;
                _RESERVED_IDENTIFIER_FIXUP_3369.y = _RESERVED_IDENTIFIER_FIXUP_2558;
                _RESERVED_IDENTIFIER_FIXUP_3369.z = _RESERVED_IDENTIFIER_FIXUP_2556.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2566 = _RESERVED_IDENTIFIER_FIXUP_3369.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
                _RESERVED_IDENTIFIER_FIXUP_3448.x = _RESERVED_IDENTIFIER_FIXUP_2566.x;
                _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2566.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2573 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2577 = _RESERVED_IDENTIFIER_FIXUP_2573.y;
                _RESERVED_IDENTIFIER_FIXUP_3448.w = _RESERVED_IDENTIFIER_FIXUP_2577;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2546.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2546.w;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3448.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2577;
                float _RESERVED_IDENTIFIER_FIXUP_2588 = hdLod7(param_84, param_85).x + hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3757 = vec4(_RESERVED_IDENTIFIER_FIXUP_2116, _RESERVED_IDENTIFIER_FIXUP_2558, _RESERVED_IDENTIFIER_FIXUP_2556.y, _RESERVED_IDENTIFIER_FIXUP_2588);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2595 = _RESERVED_IDENTIFIER_FIXUP_3757.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3461;
                _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_2595.x;
                _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_2595.y;
                _RESERVED_IDENTIFIER_FIXUP_3461.w = _RESERVED_IDENTIFIER_FIXUP_2577;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3461.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2577;
                float _RESERVED_IDENTIFIER_FIXUP_2617 = _RESERVED_IDENTIFIER_FIXUP_2588 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3757.w = _RESERVED_IDENTIFIER_FIXUP_2617;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2624 = _RESERVED_IDENTIFIER_FIXUP_3757.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3474;
                _RESERVED_IDENTIFIER_FIXUP_3474.x = _RESERVED_IDENTIFIER_FIXUP_2624.x;
                _RESERVED_IDENTIFIER_FIXUP_3474.y = _RESERVED_IDENTIFIER_FIXUP_2624.y;
                _RESERVED_IDENTIFIER_FIXUP_3474.w = _RESERVED_IDENTIFIER_FIXUP_2577;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3474.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2577;
                float _RESERVED_IDENTIFIER_FIXUP_2646 = _RESERVED_IDENTIFIER_FIXUP_2617 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_3757.w = _RESERVED_IDENTIFIER_FIXUP_2646;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2653 = _RESERVED_IDENTIFIER_FIXUP_3757.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3487;
                _RESERVED_IDENTIFIER_FIXUP_3487.x = _RESERVED_IDENTIFIER_FIXUP_2653.x;
                _RESERVED_IDENTIFIER_FIXUP_3487.y = _RESERVED_IDENTIFIER_FIXUP_2653.y;
                _RESERVED_IDENTIFIER_FIXUP_3487.w = _RESERVED_IDENTIFIER_FIXUP_2577;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3487.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2577;
                float _RESERVED_IDENTIFIER_FIXUP_2675 = _RESERVED_IDENTIFIER_FIXUP_2646 + hdLod7(param_92, param_93).x;
                _RESERVED_IDENTIFIER_FIXUP_3757.y = _RESERVED_IDENTIFIER_FIXUP_2675;
                _RESERVED_IDENTIFIER_FIXUP_3757.x = _RESERVED_IDENTIFIER_FIXUP_2675 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3738 = _RESERVED_IDENTIFIER_FIXUP_3757;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2691 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2695 = _RESERVED_IDENTIFIER_FIXUP_2691.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2706 = vec4(_RESERVED_IDENTIFIER_FIXUP_2691.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2695).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3754 = vec4(_RESERVED_IDENTIFIER_FIXUP_2706 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2695);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2743 = _RESERVED_IDENTIFIER_FIXUP_2706 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_3754;
                _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_2743.x;
                _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2743.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2765 = _RESERVED_IDENTIFIER_FIXUP_2706 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3411 = _RESERVED_IDENTIFIER_FIXUP_3402;
                _RESERVED_IDENTIFIER_FIXUP_3411.x = _RESERVED_IDENTIFIER_FIXUP_2765.x;
                _RESERVED_IDENTIFIER_FIXUP_3411.y = _RESERVED_IDENTIFIER_FIXUP_2765.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2787 = _RESERVED_IDENTIFIER_FIXUP_2706 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3420 = _RESERVED_IDENTIFIER_FIXUP_3411;
                _RESERVED_IDENTIFIER_FIXUP_3420.x = _RESERVED_IDENTIFIER_FIXUP_2787.x;
                _RESERVED_IDENTIFIER_FIXUP_3420.y = _RESERVED_IDENTIFIER_FIXUP_2787.y;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_2706;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2695;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3754.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2695;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3402.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2695;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3411.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2695;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3420.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_2695;
                float _RESERVED_IDENTIFIER_FIXUP_2802 = (((hdLod8(param_94, param_95).x + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x;
                float _RESERVED_IDENTIFIER_FIXUP_2816 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2821 = (_RESERVED_IDENTIFIER_FIXUP_2802 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3738 = vec4((_RESERVED_IDENTIFIER_FIXUP_2816 * _RESERVED_IDENTIFIER_FIXUP_2821) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2816, _RESERVED_IDENTIFIER_FIXUP_2821, _RESERVED_IDENTIFIER_FIXUP_2802);
            }
            _RESERVED_IDENTIFIER_FIXUP_3737 = _RESERVED_IDENTIFIER_FIXUP_3738;
        }
        _RESERVED_IDENTIFIER_FIXUP_3736 = _RESERVED_IDENTIFIER_FIXUP_3737;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2836 = (_RESERVED_IDENTIFIER_FIXUP_3736.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3676 = _RESERVED_IDENTIFIER_FIXUP_3736;
    _RESERVED_IDENTIFIER_FIXUP_3676.y = _RESERVED_IDENTIFIER_FIXUP_2836;
    _RESERVED_IDENTIFIER_FIXUP_3676.y = _RESERVED_IDENTIFIER_FIXUP_2836;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2849 = _RESERVED_IDENTIFIER_FIXUP_2097.xyz * _RESERVED_IDENTIFIER_FIXUP_3676.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3682 = _RESERVED_IDENTIFIER_FIXUP_3676;
    _RESERVED_IDENTIFIER_FIXUP_3682.y = _RESERVED_IDENTIFIER_FIXUP_2849.x;
    _RESERVED_IDENTIFIER_FIXUP_3682.z = _RESERVED_IDENTIFIER_FIXUP_2849.y;
    _RESERVED_IDENTIFIER_FIXUP_3682.w = _RESERVED_IDENTIFIER_FIXUP_2849.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2860 = _RESERVED_IDENTIFIER_FIXUP_3682.yzw * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3688 = _RESERVED_IDENTIFIER_FIXUP_3682;
    _RESERVED_IDENTIFIER_FIXUP_3688.y = _RESERVED_IDENTIFIER_FIXUP_2860.x;
    _RESERVED_IDENTIFIER_FIXUP_3688.z = _RESERVED_IDENTIFIER_FIXUP_2860.y;
    _RESERVED_IDENTIFIER_FIXUP_3688.w = _RESERVED_IDENTIFIER_FIXUP_2860.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2871 = _RESERVED_IDENTIFIER_FIXUP_3688.yzw + _RESERVED_IDENTIFIER_FIXUP_3688.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2873 = _RESERVED_IDENTIFIER_FIXUP_2871.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3694 = _RESERVED_IDENTIFIER_FIXUP_3688;
    _RESERVED_IDENTIFIER_FIXUP_3694.y = _RESERVED_IDENTIFIER_FIXUP_2873;
    _RESERVED_IDENTIFIER_FIXUP_3694.z = _RESERVED_IDENTIFIER_FIXUP_2871.y;
    _RESERVED_IDENTIFIER_FIXUP_3694.w = _RESERVED_IDENTIFIER_FIXUP_2871.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2882 = _RESERVED_IDENTIFIER_FIXUP_2097.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3700 = _RESERVED_IDENTIFIER_FIXUP_2097;
    _RESERVED_IDENTIFIER_FIXUP_3700.x = _RESERVED_IDENTIFIER_FIXUP_2882.x;
    _RESERVED_IDENTIFIER_FIXUP_3700.y = _RESERVED_IDENTIFIER_FIXUP_2882.y;
    _RESERVED_IDENTIFIER_FIXUP_3700.z = _RESERVED_IDENTIFIER_FIXUP_2882.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2896 = (_RESERVED_IDENTIFIER_FIXUP_3700.xyz * _RESERVED_IDENTIFIER_FIXUP_3694.xxx) + _RESERVED_IDENTIFIER_FIXUP_3694.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3759 = vec4(_RESERVED_IDENTIFIER_FIXUP_2896.x, _RESERVED_IDENTIFIER_FIXUP_2873, _RESERVED_IDENTIFIER_FIXUP_2871.yz);
    _RESERVED_IDENTIFIER_FIXUP_3759.y = _RESERVED_IDENTIFIER_FIXUP_2896.y;
    _RESERVED_IDENTIFIER_FIXUP_3759.z = _RESERVED_IDENTIFIER_FIXUP_2896.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2909 = _RESERVED_IDENTIFIER_FIXUP_3759.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3712 = _RESERVED_IDENTIFIER_FIXUP_3759;
    _RESERVED_IDENTIFIER_FIXUP_3712.x = _RESERVED_IDENTIFIER_FIXUP_2909.x;
    _RESERVED_IDENTIFIER_FIXUP_3712.y = _RESERVED_IDENTIFIER_FIXUP_2909.y;
    _RESERVED_IDENTIFIER_FIXUP_3712.z = _RESERVED_IDENTIFIER_FIXUP_2909.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3712.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3336.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1100 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2968;
    if (_RESERVED_IDENTIFIER_FIXUP_1073 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2968 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1073), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1100);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2968 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1100);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2968;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2836);
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
    vec2 param_3 = v4.wz;
    r4 = hdTex4(param_3);
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r0.xy;
        float param_5 = r0.w;
        r0 = hdLod5(param_4, param_5);
        vec2 hdB152 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB152.x;
        r0.z = hdB152.y;
        vec2 hdB174 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB174.x;
        r2.y = hdB174.y;
        vec2 hdB182 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB182.x;
        r2.w = hdB182.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r0.x += r2.x;
        vec2 hdB205 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB205.x;
        r2.y = hdB205.y;
        vec2 hdB212 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB212.x;
        r2.w = hdB212.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r0.x += r2.x;
        vec2 hdB235 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB235.x;
        r2.y = hdB235.y;
        vec2 hdB242 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB242.x;
        r2.w = hdB242.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r0.x += r2.x;
        vec2 hdB265 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB265.x;
        r2.y = hdB265.y;
        vec2 hdB272 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB272.x;
        r2.w = hdB272.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r0.x += r2.x;
        vec2 hdB295 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB295.x;
        r2.y = hdB295.y;
        vec2 hdB302 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB302.x;
        r2.w = hdB302.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r0.x += r2.x;
        vec2 hdB325 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB325.x;
        r2.y = hdB325.y;
        vec2 hdB332 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB332.x;
        r2.w = hdB332.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r0.x += r2.x;
        vec2 hdB355 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB355.x;
        r2.y = hdB355.y;
        vec2 hdB362 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB362.x;
        r2.w = hdB362.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod5(param_18, param_19);
        r0.x += r2.x;
        vec2 hdB385 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB385.x;
        r2.y = hdB385.y;
        vec2 hdB392 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB392.x;
        r2.w = hdB392.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod5(param_20, param_21);
        r0.x += r2.x;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v6.x), abs(v6.y));
        if (r0.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r2.xy;
            float param_23 = r2.w;
            r2 = hdLod6(param_22, param_23);
            vec2 hdB442 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB442.x;
            r0.z = hdB442.y;
            vec2 hdB452 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB452.x;
            r3.y = hdB452.y;
            vec2 hdB459 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB459.x;
            r3.w = hdB459.y;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod6(param_24, param_25);
            r0.w = r2.x + r3.x;
            vec2 hdB481 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB481.x;
            r2.y = hdB481.y;
            vec2 hdB488 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB488.x;
            r2.w = hdB488.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r0.w += r2.x;
            vec2 hdB510 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB510.x;
            r2.y = hdB510.y;
            vec2 hdB517 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB517.x;
            r2.w = hdB517.y;
            vec2 param_28 = r2.xy;
            float param_29 = r2.w;
            r2 = hdLod6(param_28, param_29);
            r0.w += r2.x;
            vec2 hdB539 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB539.x;
            r2.y = hdB539.y;
            vec2 hdB546 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB546.x;
            r2.w = hdB546.y;
            vec2 param_30 = r2.xy;
            float param_31 = r2.w;
            r2 = hdLod6(param_30, param_31);
            r0.y = r0.w + r2.x;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v7.x), abs(v7.y));
            if (r0.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = r2.xy;
                float param_33 = r2.w;
                r2 = hdLod7(param_32, param_33);
                vec2 hdB596 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB596.x;
                r0.z = hdB596.y;
                vec2 hdB606 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB606.x;
                r3.y = hdB606.y;
                vec2 hdB613 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB613.x;
                r3.w = hdB613.y;
                vec2 param_34 = r3.xy;
                float param_35 = r3.w;
                r3 = hdLod7(param_34, param_35);
                r0.w = r2.x + r3.x;
                vec2 hdB635 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB635.x;
                r2.y = hdB635.y;
                vec2 hdB642 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB642.x;
                r2.w = hdB642.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r0.w += r2.x;
                vec2 hdB664 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB664.x;
                r2.y = hdB664.y;
                vec2 hdB671 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB671.x;
                r2.w = hdB671.y;
                vec2 param_38 = r2.xy;
                float param_39 = r2.w;
                r2 = hdLod7(param_38, param_39);
                r0.w += r2.x;
                vec2 hdB693 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB693.x;
                r2.y = hdB693.y;
                vec2 hdB700 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB700.x;
                r2.w = hdB700.y;
                vec2 param_40 = r2.xy;
                float param_41 = r2.w;
                r2 = hdLod7(param_40, param_41);
                r0.y = r0.w + r2.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v5.w;
                r0.z = v6.w;
                vec2 hdB732 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB732.x;
                r2.w = hdB732.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_42 = r2.xy;
                float param_43 = r2.w;
                r3 = hdLod8(param_42, param_43);
                vec2 hdB757 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB757.x;
                r4.y = hdB757.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r5 = hdLod8(param_44, param_45);
                r0.w = r3.x + r5.x;
                vec2 hdB785 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB785.x;
                r4.y = hdB785.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r0.w += r3.x;
                vec2 hdB807 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB807.x;
                r4.y = hdB807.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r3 = hdLod8(param_48, param_49);
                r0.w += r3.x;
                vec2 hdB829 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB829.x;
                r4.y = hdB829.y;
                vec2 param_50 = r4.xy;
                float param_51 = r4.w;
                r2 = hdLod8(param_50, param_51);
                r0.w += r2.x;
                r2.x = max(abs(r0.y), abs(r0.z));
                r0.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.z = (r0.w * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.y * r0.z) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB884 = r0;
    vec3 hdB886 = r1.xyz * hdB884.yyy;
    r0.y = hdB886.x;
    r0.z = hdB886.y;
    r0.w = hdB886.z;
    vec4 hdB893 = r0;
    vec3 hdB897 = hdB893.yzw * v0.xyz;
    r0.y = hdB897.x;
    r0.z = hdB897.y;
    r0.w = hdB897.z;
    vec4 hdB904 = r0;
    vec4 hdB906 = r0;
    vec3 hdB908 = hdB904.yzw + hdB906.yzw;
    r0.y = hdB908.x;
    r0.z = hdB908.y;
    r0.w = hdB908.z;
    vec4 hdB915 = r1;
    vec3 hdB919 = hdB915.www * v1.xyz;
    r1.x = hdB919.x;
    r1.y = hdB919.y;
    r1.z = hdB919.z;
    vec4 hdB928 = r0;
    vec4 hdB931 = r0;
    vec3 hdB933 = (r1.xyz * hdB928.xxx) + hdB931.yzw;
    r0.x = hdB933.x;
    r0.y = hdB933.y;
    r0.z = hdB933.z;
    vec4 hdB940 = r0;
    vec3 hdB947 = hdB940.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB947.x;
    r0.y = hdB947.y;
    r0.z = hdB947.z;
    vec3 hdB962 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB962.x;
    oC0.y = hdB962.y;
    oC0.z = hdB962.z;
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
    bool _3443 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3453;
    if (_3443)
    {
        _3453 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3453 = _3443;
    }
    if (_3453)
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
        bool _3478 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3493;
        if (!_3478)
        {
            _3493 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3493 = _3478;
        }
        if (_3493)
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
