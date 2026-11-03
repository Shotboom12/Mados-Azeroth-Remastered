#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

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
float _RESERVED_IDENTIFIER_FIXUP_3333;
vec4 _RESERVED_IDENTIFIER_FIXUP_3334;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _64 = hdOverride >= 0;
    bool _84;
    if (_64)
    {
        _84 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _84 = _64;
    }
    vec4 _85;
    if (_84)
    {
        _85 = vec4(float(hdOverride));
    }
    else
    {
        _85 = value;
    }
    return _85;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _102 = hdOverride >= 0;
    bool _111;
    if (_102)
    {
        _111 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _111 = _102;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _129 = hdOverride >= 0;
    bool _139;
    if (_129)
    {
        _139 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _157 = hdOverride >= 0;
    bool _167;
    if (_157)
    {
        _167 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _167 = _157;
    }
    vec4 _168;
    if (_167)
    {
        _168 = vec4(float(hdOverride));
    }
    else
    {
        _168 = value;
    }
    return _168;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _186 = hdOverride >= 0;
    bool _196;
    if (_186)
    {
        _196 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _196 = _186;
    }
    vec4 _197;
    if (_196)
    {
        _197 = vec4(float(hdOverride));
    }
    else
    {
        _197 = value;
    }
    return _197;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _215 = hdOverride >= 0;
    bool _225;
    if (_215)
    {
        _225 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _225 = _215;
    }
    vec4 _226;
    if (_225)
    {
        _226 = vec4(float(hdOverride));
    }
    else
    {
        _226 = value;
    }
    return _226;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _244 = hdOverride >= 0;
    bool _254;
    if (_244)
    {
        _254 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _254 = _244;
    }
    vec4 _255;
    if (_254)
    {
        _255 = vec4(float(hdOverride));
    }
    else
    {
        _255 = value;
    }
    return _255;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _273 = hdOverride >= 0;
    bool _283;
    if (_273)
    {
        _283 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _283 = _273;
    }
    vec4 _284;
    if (_283)
    {
        _284 = vec4(float(hdOverride));
    }
    else
    {
        _284 = value;
    }
    return _284;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1059 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1063 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1067 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1071 = hdTex3(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_1075 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1071.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2664 = _RESERVED_IDENTIFIER_FIXUP_1071;
    _RESERVED_IDENTIFIER_FIXUP_2664.z = _RESERVED_IDENTIFIER_FIXUP_1075;
    _RESERVED_IDENTIFIER_FIXUP_2664.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1075;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1085 = _RESERVED_IDENTIFIER_FIXUP_1063 * _RESERVED_IDENTIFIER_FIXUP_2664.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1097 = (_RESERVED_IDENTIFIER_FIXUP_1067 * _RESERVED_IDENTIFIER_FIXUP_2664.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1059 * _RESERVED_IDENTIFIER_FIXUP_2664.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1085);
    float _RESERVED_IDENTIFIER_FIXUP_1104 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2671 = _RESERVED_IDENTIFIER_FIXUP_1085;
    _RESERVED_IDENTIFIER_FIXUP_2671.x = _RESERVED_IDENTIFIER_FIXUP_1104;
    float _RESERVED_IDENTIFIER_FIXUP_1110 = clamp((_RESERVED_IDENTIFIER_FIXUP_1104 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2671.x = _RESERVED_IDENTIFIER_FIXUP_1110;
    float _RESERVED_IDENTIFIER_FIXUP_1116 = ((-_RESERVED_IDENTIFIER_FIXUP_1110) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2671.y = _RESERVED_IDENTIFIER_FIXUP_1116;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3335;
    if (_RESERVED_IDENTIFIER_FIXUP_1116 != (-_RESERVED_IDENTIFIER_FIXUP_1116))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1128 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1138 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1140 = _RESERVED_IDENTIFIER_FIXUP_1138.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2684 = _RESERVED_IDENTIFIER_FIXUP_2671;
        _RESERVED_IDENTIFIER_FIXUP_2684.y = _RESERVED_IDENTIFIER_FIXUP_1140;
        _RESERVED_IDENTIFIER_FIXUP_2684.z = _RESERVED_IDENTIFIER_FIXUP_1138.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1148 = _RESERVED_IDENTIFIER_FIXUP_2684.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2688;
        _RESERVED_IDENTIFIER_FIXUP_2688.x = _RESERVED_IDENTIFIER_FIXUP_1148.x;
        _RESERVED_IDENTIFIER_FIXUP_2688.y = _RESERVED_IDENTIFIER_FIXUP_1148.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1155 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1159 = _RESERVED_IDENTIFIER_FIXUP_1155.y;
        _RESERVED_IDENTIFIER_FIXUP_2688.w = _RESERVED_IDENTIFIER_FIXUP_1159;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1128.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1128.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2688.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1159;
        float _RESERVED_IDENTIFIER_FIXUP_1170 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3361 = vec4(_RESERVED_IDENTIFIER_FIXUP_1110, _RESERVED_IDENTIFIER_FIXUP_1140, _RESERVED_IDENTIFIER_FIXUP_1138.y, _RESERVED_IDENTIFIER_FIXUP_1170);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_3361.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2701;
        _RESERVED_IDENTIFIER_FIXUP_2701.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
        _RESERVED_IDENTIFIER_FIXUP_2701.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
        _RESERVED_IDENTIFIER_FIXUP_2701.w = _RESERVED_IDENTIFIER_FIXUP_1159;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2701.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1159;
        float _RESERVED_IDENTIFIER_FIXUP_1199 = _RESERVED_IDENTIFIER_FIXUP_1170 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3361.w = _RESERVED_IDENTIFIER_FIXUP_1199;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1206 = _RESERVED_IDENTIFIER_FIXUP_3361.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2714;
        _RESERVED_IDENTIFIER_FIXUP_2714.x = _RESERVED_IDENTIFIER_FIXUP_1206.x;
        _RESERVED_IDENTIFIER_FIXUP_2714.y = _RESERVED_IDENTIFIER_FIXUP_1206.y;
        _RESERVED_IDENTIFIER_FIXUP_2714.w = _RESERVED_IDENTIFIER_FIXUP_1159;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2714.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1159;
        float _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_1199 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3361.w = _RESERVED_IDENTIFIER_FIXUP_1228;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_3361.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2727;
        _RESERVED_IDENTIFIER_FIXUP_2727.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
        _RESERVED_IDENTIFIER_FIXUP_2727.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
        _RESERVED_IDENTIFIER_FIXUP_2727.w = _RESERVED_IDENTIFIER_FIXUP_1159;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_2727.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1159;
        float _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_1228 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_1257;
        float _RESERVED_IDENTIFIER_FIXUP_1262 = (_RESERVED_IDENTIFIER_FIXUP_1257 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_1262;
        _RESERVED_IDENTIFIER_FIXUP_3361.x = (_RESERVED_IDENTIFIER_FIXUP_1110 * _RESERVED_IDENTIFIER_FIXUP_1262) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3335 = _RESERVED_IDENTIFIER_FIXUP_3361;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2681 = _RESERVED_IDENTIFIER_FIXUP_2671;
        _RESERVED_IDENTIFIER_FIXUP_2681.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3335 = _RESERVED_IDENTIFIER_FIXUP_2681;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1280 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2749 = _RESERVED_IDENTIFIER_FIXUP_3335;
    _RESERVED_IDENTIFIER_FIXUP_2749.y = _RESERVED_IDENTIFIER_FIXUP_1280;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3340;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3338;
    if (_RESERVED_IDENTIFIER_FIXUP_1280 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1289 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1299 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2889 = _RESERVED_IDENTIFIER_FIXUP_2749;
        _RESERVED_IDENTIFIER_FIXUP_2889.y = _RESERVED_IDENTIFIER_FIXUP_1299.x;
        _RESERVED_IDENTIFIER_FIXUP_2889.z = _RESERVED_IDENTIFIER_FIXUP_1299.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_2889.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2893;
        _RESERVED_IDENTIFIER_FIXUP_2893.x = _RESERVED_IDENTIFIER_FIXUP_1309.x;
        _RESERVED_IDENTIFIER_FIXUP_2893.y = _RESERVED_IDENTIFIER_FIXUP_1309.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1316 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1320 = _RESERVED_IDENTIFIER_FIXUP_1316.y;
        _RESERVED_IDENTIFIER_FIXUP_2893.w = _RESERVED_IDENTIFIER_FIXUP_1320;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1289.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1289.w;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2893.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1320;
        float _RESERVED_IDENTIFIER_FIXUP_1331 = hdLod6(param_14, param_15).x + hdLod6(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_2889.w = _RESERVED_IDENTIFIER_FIXUP_1331;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_2889.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2906;
        _RESERVED_IDENTIFIER_FIXUP_2906.x = _RESERVED_IDENTIFIER_FIXUP_1338.x;
        _RESERVED_IDENTIFIER_FIXUP_2906.y = _RESERVED_IDENTIFIER_FIXUP_1338.y;
        _RESERVED_IDENTIFIER_FIXUP_2906.w = _RESERVED_IDENTIFIER_FIXUP_1320;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2906.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1320;
        float _RESERVED_IDENTIFIER_FIXUP_1360 = _RESERVED_IDENTIFIER_FIXUP_1331 + hdLod6(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_2889.w = _RESERVED_IDENTIFIER_FIXUP_1360;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_2889.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2919;
        _RESERVED_IDENTIFIER_FIXUP_2919.x = _RESERVED_IDENTIFIER_FIXUP_1367.x;
        _RESERVED_IDENTIFIER_FIXUP_2919.y = _RESERVED_IDENTIFIER_FIXUP_1367.y;
        _RESERVED_IDENTIFIER_FIXUP_2919.w = _RESERVED_IDENTIFIER_FIXUP_1320;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2919.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1320;
        float _RESERVED_IDENTIFIER_FIXUP_1389 = _RESERVED_IDENTIFIER_FIXUP_1360 + hdLod6(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_2889.w = _RESERVED_IDENTIFIER_FIXUP_1389;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1396 = _RESERVED_IDENTIFIER_FIXUP_2889.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2932;
        _RESERVED_IDENTIFIER_FIXUP_2932.x = _RESERVED_IDENTIFIER_FIXUP_1396.x;
        _RESERVED_IDENTIFIER_FIXUP_2932.y = _RESERVED_IDENTIFIER_FIXUP_1396.y;
        _RESERVED_IDENTIFIER_FIXUP_2932.w = _RESERVED_IDENTIFIER_FIXUP_1320;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_2932.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1320;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = hdLod6(param_22, param_23);
        float _RESERVED_IDENTIFIER_FIXUP_1418 = _RESERVED_IDENTIFIER_FIXUP_1389 + _RESERVED_IDENTIFIER_FIXUP_1413.x;
        _RESERVED_IDENTIFIER_FIXUP_2889.y = _RESERVED_IDENTIFIER_FIXUP_1418;
        _RESERVED_IDENTIFIER_FIXUP_2889.y = _RESERVED_IDENTIFIER_FIXUP_1418 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3340 = _RESERVED_IDENTIFIER_FIXUP_1413;
        _RESERVED_IDENTIFIER_FIXUP_3338 = _RESERVED_IDENTIFIER_FIXUP_2889;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1431 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2754 = _RESERVED_IDENTIFIER_FIXUP_2749;
        _RESERVED_IDENTIFIER_FIXUP_2754.z = _RESERVED_IDENTIFIER_FIXUP_1431;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3341;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3339;
        if (_RESERVED_IDENTIFIER_FIXUP_1431 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1440 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1440.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1440.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1446 = hdLod7(param_24, param_25);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1450 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2829 = _RESERVED_IDENTIFIER_FIXUP_2754;
            _RESERVED_IDENTIFIER_FIXUP_2829.z = _RESERVED_IDENTIFIER_FIXUP_1450.x;
            _RESERVED_IDENTIFIER_FIXUP_2829.w = _RESERVED_IDENTIFIER_FIXUP_1450.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1460 = _RESERVED_IDENTIFIER_FIXUP_2829.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2833;
            _RESERVED_IDENTIFIER_FIXUP_2833.x = _RESERVED_IDENTIFIER_FIXUP_1460.x;
            _RESERVED_IDENTIFIER_FIXUP_2833.y = _RESERVED_IDENTIFIER_FIXUP_1460.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1467 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1471 = _RESERVED_IDENTIFIER_FIXUP_1467.y;
            _RESERVED_IDENTIFIER_FIXUP_2833.w = _RESERVED_IDENTIFIER_FIXUP_1471;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2833.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1471;
            float _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_1446.x + hdLod7(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2844 = _RESERVED_IDENTIFIER_FIXUP_1446;
            _RESERVED_IDENTIFIER_FIXUP_2844.x = _RESERVED_IDENTIFIER_FIXUP_1482;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1489 = _RESERVED_IDENTIFIER_FIXUP_2829.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2846;
            _RESERVED_IDENTIFIER_FIXUP_2846.x = _RESERVED_IDENTIFIER_FIXUP_1489.x;
            _RESERVED_IDENTIFIER_FIXUP_2846.y = _RESERVED_IDENTIFIER_FIXUP_1489.y;
            _RESERVED_IDENTIFIER_FIXUP_2846.w = _RESERVED_IDENTIFIER_FIXUP_1471;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2846.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1471;
            float _RESERVED_IDENTIFIER_FIXUP_1511 = _RESERVED_IDENTIFIER_FIXUP_1482 + hdLod7(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_2844.x = _RESERVED_IDENTIFIER_FIXUP_1511;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1518 = _RESERVED_IDENTIFIER_FIXUP_2829.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2859;
            _RESERVED_IDENTIFIER_FIXUP_2859.x = _RESERVED_IDENTIFIER_FIXUP_1518.x;
            _RESERVED_IDENTIFIER_FIXUP_2859.y = _RESERVED_IDENTIFIER_FIXUP_1518.y;
            _RESERVED_IDENTIFIER_FIXUP_2859.w = _RESERVED_IDENTIFIER_FIXUP_1471;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2859.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1471;
            float _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_1511 + hdLod7(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_2844.x = _RESERVED_IDENTIFIER_FIXUP_1540;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1547 = _RESERVED_IDENTIFIER_FIXUP_2829.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2872;
            _RESERVED_IDENTIFIER_FIXUP_2872.x = _RESERVED_IDENTIFIER_FIXUP_1547.x;
            _RESERVED_IDENTIFIER_FIXUP_2872.y = _RESERVED_IDENTIFIER_FIXUP_1547.y;
            _RESERVED_IDENTIFIER_FIXUP_2872.w = _RESERVED_IDENTIFIER_FIXUP_1471;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2872.xy;
            float param_33 = _RESERVED_IDENTIFIER_FIXUP_1471;
            float _RESERVED_IDENTIFIER_FIXUP_1569 = _RESERVED_IDENTIFIER_FIXUP_1540 + hdLod7(param_32, param_33).x;
            _RESERVED_IDENTIFIER_FIXUP_2829.z = _RESERVED_IDENTIFIER_FIXUP_1569;
            _RESERVED_IDENTIFIER_FIXUP_2829.y = _RESERVED_IDENTIFIER_FIXUP_1569 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3341 = _RESERVED_IDENTIFIER_FIXUP_2844;
            _RESERVED_IDENTIFIER_FIXUP_3339 = _RESERVED_IDENTIFIER_FIXUP_2829;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2758 = _RESERVED_IDENTIFIER_FIXUP_2754;
            _RESERVED_IDENTIFIER_FIXUP_2758.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2758.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1585 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1589 = _RESERVED_IDENTIFIER_FIXUP_1585.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3362 = vec4(_RESERVED_IDENTIFIER_FIXUP_1585.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1589);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1600 = _RESERVED_IDENTIFIER_FIXUP_3362.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3363 = vec4(_RESERVED_IDENTIFIER_FIXUP_1600 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1589);
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_1600;
            float param_35 = _RESERVED_IDENTIFIER_FIXUP_1589;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3363.xy;
            float param_37 = _RESERVED_IDENTIFIER_FIXUP_1589;
            float _RESERVED_IDENTIFIER_FIXUP_1630 = hdLod8(param_34, param_35).x + hdLod8(param_36, param_37).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2785 = _RESERVED_IDENTIFIER_FIXUP_3362;
            _RESERVED_IDENTIFIER_FIXUP_2785.z = _RESERVED_IDENTIFIER_FIXUP_1630;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1637 = _RESERVED_IDENTIFIER_FIXUP_2785.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2787 = _RESERVED_IDENTIFIER_FIXUP_3363;
            _RESERVED_IDENTIFIER_FIXUP_2787.x = _RESERVED_IDENTIFIER_FIXUP_1637.x;
            _RESERVED_IDENTIFIER_FIXUP_2787.y = _RESERVED_IDENTIFIER_FIXUP_1637.y;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2787.xy;
            float param_39 = _RESERVED_IDENTIFIER_FIXUP_1589;
            float _RESERVED_IDENTIFIER_FIXUP_1652 = _RESERVED_IDENTIFIER_FIXUP_1630 + hdLod8(param_38, param_39).x;
            _RESERVED_IDENTIFIER_FIXUP_2785.z = _RESERVED_IDENTIFIER_FIXUP_1652;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1659 = _RESERVED_IDENTIFIER_FIXUP_2785.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2796 = _RESERVED_IDENTIFIER_FIXUP_2787;
            _RESERVED_IDENTIFIER_FIXUP_2796.x = _RESERVED_IDENTIFIER_FIXUP_1659.x;
            _RESERVED_IDENTIFIER_FIXUP_2796.y = _RESERVED_IDENTIFIER_FIXUP_1659.y;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2796.xy;
            float param_41 = _RESERVED_IDENTIFIER_FIXUP_1589;
            float _RESERVED_IDENTIFIER_FIXUP_1674 = _RESERVED_IDENTIFIER_FIXUP_1652 + hdLod8(param_40, param_41).x;
            _RESERVED_IDENTIFIER_FIXUP_2785.z = _RESERVED_IDENTIFIER_FIXUP_1674;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1681 = _RESERVED_IDENTIFIER_FIXUP_2785.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2805 = _RESERVED_IDENTIFIER_FIXUP_2796;
            _RESERVED_IDENTIFIER_FIXUP_2805.x = _RESERVED_IDENTIFIER_FIXUP_1681.x;
            _RESERVED_IDENTIFIER_FIXUP_2805.y = _RESERVED_IDENTIFIER_FIXUP_1681.y;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_2805.xy;
            float param_43 = _RESERVED_IDENTIFIER_FIXUP_1589;
            float _RESERVED_IDENTIFIER_FIXUP_1696 = _RESERVED_IDENTIFIER_FIXUP_1674 + hdLod8(param_42, param_43).x;
            _RESERVED_IDENTIFIER_FIXUP_2785.x = _RESERVED_IDENTIFIER_FIXUP_1696;
            float _RESERVED_IDENTIFIER_FIXUP_1704 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2785.y = _RESERVED_IDENTIFIER_FIXUP_1704;
            float _RESERVED_IDENTIFIER_FIXUP_1710 = clamp((_RESERVED_IDENTIFIER_FIXUP_1704 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2758.z = _RESERVED_IDENTIFIER_FIXUP_1710;
            float _RESERVED_IDENTIFIER_FIXUP_1715 = (_RESERVED_IDENTIFIER_FIXUP_1696 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2758.w = _RESERVED_IDENTIFIER_FIXUP_1715;
            _RESERVED_IDENTIFIER_FIXUP_2758.y = (_RESERVED_IDENTIFIER_FIXUP_1710 * _RESERVED_IDENTIFIER_FIXUP_1715) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3341 = _RESERVED_IDENTIFIER_FIXUP_2785;
            _RESERVED_IDENTIFIER_FIXUP_3339 = _RESERVED_IDENTIFIER_FIXUP_2758;
        }
        _RESERVED_IDENTIFIER_FIXUP_3340 = _RESERVED_IDENTIFIER_FIXUP_3341;
        _RESERVED_IDENTIFIER_FIXUP_3338 = _RESERVED_IDENTIFIER_FIXUP_3339;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1730 = min(_RESERVED_IDENTIFIER_FIXUP_3338.y, _RESERVED_IDENTIFIER_FIXUP_3338.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2950 = _RESERVED_IDENTIFIER_FIXUP_3340;
    _RESERVED_IDENTIFIER_FIXUP_2950.x = _RESERVED_IDENTIFIER_FIXUP_1730;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2953 = _RESERVED_IDENTIFIER_FIXUP_3338;
    _RESERVED_IDENTIFIER_FIXUP_2953.x = (_RESERVED_IDENTIFIER_FIXUP_1730 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1741 = _RESERVED_IDENTIFIER_FIXUP_1097.xyz * _RESERVED_IDENTIFIER_FIXUP_2953.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2955 = _RESERVED_IDENTIFIER_FIXUP_1097;
    _RESERVED_IDENTIFIER_FIXUP_2955.x = _RESERVED_IDENTIFIER_FIXUP_1741.x;
    _RESERVED_IDENTIFIER_FIXUP_2955.y = _RESERVED_IDENTIFIER_FIXUP_1741.y;
    _RESERVED_IDENTIFIER_FIXUP_2955.z = _RESERVED_IDENTIFIER_FIXUP_1741.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1752 = _RESERVED_IDENTIFIER_FIXUP_2955.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3333).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2961 = _RESERVED_IDENTIFIER_FIXUP_2955;
    _RESERVED_IDENTIFIER_FIXUP_2961.x = _RESERVED_IDENTIFIER_FIXUP_1752.x;
    _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1752.y;
    _RESERVED_IDENTIFIER_FIXUP_2961.z = _RESERVED_IDENTIFIER_FIXUP_1752.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1763 = _RESERVED_IDENTIFIER_FIXUP_2961.xyz + _RESERVED_IDENTIFIER_FIXUP_2961.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2967 = _RESERVED_IDENTIFIER_FIXUP_2961;
    _RESERVED_IDENTIFIER_FIXUP_2967.x = _RESERVED_IDENTIFIER_FIXUP_1763.x;
    _RESERVED_IDENTIFIER_FIXUP_2967.y = _RESERVED_IDENTIFIER_FIXUP_1763.y;
    _RESERVED_IDENTIFIER_FIXUP_2967.z = _RESERVED_IDENTIFIER_FIXUP_1763.z;
    _RESERVED_IDENTIFIER_FIXUP_2953.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2953.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2953.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1788 = (_RESERVED_IDENTIFIER_FIXUP_2953.xyz * _RESERVED_IDENTIFIER_FIXUP_2950.xxx) + _RESERVED_IDENTIFIER_FIXUP_2967.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2979 = _RESERVED_IDENTIFIER_FIXUP_2967;
    _RESERVED_IDENTIFIER_FIXUP_2979.x = _RESERVED_IDENTIFIER_FIXUP_1788.x;
    _RESERVED_IDENTIFIER_FIXUP_2979.y = _RESERVED_IDENTIFIER_FIXUP_1788.y;
    _RESERVED_IDENTIFIER_FIXUP_2979.z = _RESERVED_IDENTIFIER_FIXUP_1788.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1801 = _RESERVED_IDENTIFIER_FIXUP_2979.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2985 = _RESERVED_IDENTIFIER_FIXUP_2979;
    _RESERVED_IDENTIFIER_FIXUP_2985.x = _RESERVED_IDENTIFIER_FIXUP_1801.x;
    _RESERVED_IDENTIFIER_FIXUP_2985.y = _RESERVED_IDENTIFIER_FIXUP_1801.y;
    _RESERVED_IDENTIFIER_FIXUP_2985.z = _RESERVED_IDENTIFIER_FIXUP_1801.z;
    vec2 param_44 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1856 = hdTex0(param_44);
    vec2 param_45 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1860 = hdTex1(param_45);
    vec2 param_46 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1864 = hdTex2(param_46);
    vec2 param_47 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1868 = hdTex3(param_47);
    float _RESERVED_IDENTIFIER_FIXUP_1872 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1868.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2999 = _RESERVED_IDENTIFIER_FIXUP_1868;
    _RESERVED_IDENTIFIER_FIXUP_2999.z = _RESERVED_IDENTIFIER_FIXUP_1872;
    _RESERVED_IDENTIFIER_FIXUP_2999.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1872;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1882 = _RESERVED_IDENTIFIER_FIXUP_1860 * _RESERVED_IDENTIFIER_FIXUP_2999.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1894 = (_RESERVED_IDENTIFIER_FIXUP_1864 * _RESERVED_IDENTIFIER_FIXUP_2999.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1856 * _RESERVED_IDENTIFIER_FIXUP_2999.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1882);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3006 = _RESERVED_IDENTIFIER_FIXUP_1882;
    _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1104;
    float _RESERVED_IDENTIFIER_FIXUP_1907 = clamp((_RESERVED_IDENTIFIER_FIXUP_1104 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1907;
    float _RESERVED_IDENTIFIER_FIXUP_1913 = ((-_RESERVED_IDENTIFIER_FIXUP_1907) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1913;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3348;
    if (_RESERVED_IDENTIFIER_FIXUP_1913 != (-_RESERVED_IDENTIFIER_FIXUP_1913))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1925 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1935 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1937 = _RESERVED_IDENTIFIER_FIXUP_1935.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3019 = _RESERVED_IDENTIFIER_FIXUP_3006;
        _RESERVED_IDENTIFIER_FIXUP_3019.y = _RESERVED_IDENTIFIER_FIXUP_1937;
        _RESERVED_IDENTIFIER_FIXUP_3019.z = _RESERVED_IDENTIFIER_FIXUP_1935.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1945 = _RESERVED_IDENTIFIER_FIXUP_3019.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3023;
        _RESERVED_IDENTIFIER_FIXUP_3023.x = _RESERVED_IDENTIFIER_FIXUP_1945.x;
        _RESERVED_IDENTIFIER_FIXUP_3023.y = _RESERVED_IDENTIFIER_FIXUP_1945.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1952 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1956 = _RESERVED_IDENTIFIER_FIXUP_1952.y;
        _RESERVED_IDENTIFIER_FIXUP_3023.w = _RESERVED_IDENTIFIER_FIXUP_1956;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_1925.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1925.w;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3023.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1956;
        float _RESERVED_IDENTIFIER_FIXUP_1967 = hdLod5(param_48, param_49).x + hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3365 = vec4(_RESERVED_IDENTIFIER_FIXUP_1907, _RESERVED_IDENTIFIER_FIXUP_1937, _RESERVED_IDENTIFIER_FIXUP_1935.y, _RESERVED_IDENTIFIER_FIXUP_1967);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1974 = _RESERVED_IDENTIFIER_FIXUP_3365.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3036;
        _RESERVED_IDENTIFIER_FIXUP_3036.x = _RESERVED_IDENTIFIER_FIXUP_1974.x;
        _RESERVED_IDENTIFIER_FIXUP_3036.y = _RESERVED_IDENTIFIER_FIXUP_1974.y;
        _RESERVED_IDENTIFIER_FIXUP_3036.w = _RESERVED_IDENTIFIER_FIXUP_1956;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3036.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1956;
        float _RESERVED_IDENTIFIER_FIXUP_1996 = _RESERVED_IDENTIFIER_FIXUP_1967 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3365.w = _RESERVED_IDENTIFIER_FIXUP_1996;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2003 = _RESERVED_IDENTIFIER_FIXUP_3365.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3049;
        _RESERVED_IDENTIFIER_FIXUP_3049.x = _RESERVED_IDENTIFIER_FIXUP_2003.x;
        _RESERVED_IDENTIFIER_FIXUP_3049.y = _RESERVED_IDENTIFIER_FIXUP_2003.y;
        _RESERVED_IDENTIFIER_FIXUP_3049.w = _RESERVED_IDENTIFIER_FIXUP_1956;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3049.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_1956;
        float _RESERVED_IDENTIFIER_FIXUP_2025 = _RESERVED_IDENTIFIER_FIXUP_1996 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3365.w = _RESERVED_IDENTIFIER_FIXUP_2025;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2032 = _RESERVED_IDENTIFIER_FIXUP_3365.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3062;
        _RESERVED_IDENTIFIER_FIXUP_3062.x = _RESERVED_IDENTIFIER_FIXUP_2032.x;
        _RESERVED_IDENTIFIER_FIXUP_3062.y = _RESERVED_IDENTIFIER_FIXUP_2032.y;
        _RESERVED_IDENTIFIER_FIXUP_3062.w = _RESERVED_IDENTIFIER_FIXUP_1956;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3062.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_1956;
        float _RESERVED_IDENTIFIER_FIXUP_2054 = _RESERVED_IDENTIFIER_FIXUP_2025 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3365.y = _RESERVED_IDENTIFIER_FIXUP_2054;
        float _RESERVED_IDENTIFIER_FIXUP_2059 = (_RESERVED_IDENTIFIER_FIXUP_2054 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3365.y = _RESERVED_IDENTIFIER_FIXUP_2059;
        _RESERVED_IDENTIFIER_FIXUP_3365.x = (_RESERVED_IDENTIFIER_FIXUP_1907 * _RESERVED_IDENTIFIER_FIXUP_2059) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3348 = _RESERVED_IDENTIFIER_FIXUP_3365;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3016 = _RESERVED_IDENTIFIER_FIXUP_3006;
        _RESERVED_IDENTIFIER_FIXUP_3016.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3348 = _RESERVED_IDENTIFIER_FIXUP_3016;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3084 = _RESERVED_IDENTIFIER_FIXUP_3348;
    _RESERVED_IDENTIFIER_FIXUP_3084.y = _RESERVED_IDENTIFIER_FIXUP_1280;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3353;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3351;
    if (_RESERVED_IDENTIFIER_FIXUP_1280 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2086 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2096 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3224 = _RESERVED_IDENTIFIER_FIXUP_3084;
        _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_2096.x;
        _RESERVED_IDENTIFIER_FIXUP_3224.z = _RESERVED_IDENTIFIER_FIXUP_2096.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2106 = _RESERVED_IDENTIFIER_FIXUP_3224.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
        _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_2106.x;
        _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_2106.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2113 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2117 = _RESERVED_IDENTIFIER_FIXUP_2113.y;
        _RESERVED_IDENTIFIER_FIXUP_3228.w = _RESERVED_IDENTIFIER_FIXUP_2117;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2086.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2086.w;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3228.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2117;
        float _RESERVED_IDENTIFIER_FIXUP_2128 = hdLod6(param_58, param_59).x + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3224.w = _RESERVED_IDENTIFIER_FIXUP_2128;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2135 = _RESERVED_IDENTIFIER_FIXUP_3224.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3241;
        _RESERVED_IDENTIFIER_FIXUP_3241.x = _RESERVED_IDENTIFIER_FIXUP_2135.x;
        _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_2135.y;
        _RESERVED_IDENTIFIER_FIXUP_3241.w = _RESERVED_IDENTIFIER_FIXUP_2117;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3241.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2117;
        float _RESERVED_IDENTIFIER_FIXUP_2157 = _RESERVED_IDENTIFIER_FIXUP_2128 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3224.w = _RESERVED_IDENTIFIER_FIXUP_2157;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2164 = _RESERVED_IDENTIFIER_FIXUP_3224.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3254;
        _RESERVED_IDENTIFIER_FIXUP_3254.x = _RESERVED_IDENTIFIER_FIXUP_2164.x;
        _RESERVED_IDENTIFIER_FIXUP_3254.y = _RESERVED_IDENTIFIER_FIXUP_2164.y;
        _RESERVED_IDENTIFIER_FIXUP_3254.w = _RESERVED_IDENTIFIER_FIXUP_2117;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3254.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2117;
        float _RESERVED_IDENTIFIER_FIXUP_2186 = _RESERVED_IDENTIFIER_FIXUP_2157 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3224.w = _RESERVED_IDENTIFIER_FIXUP_2186;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2193 = _RESERVED_IDENTIFIER_FIXUP_3224.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3267;
        _RESERVED_IDENTIFIER_FIXUP_3267.x = _RESERVED_IDENTIFIER_FIXUP_2193.x;
        _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_2193.y;
        _RESERVED_IDENTIFIER_FIXUP_3267.w = _RESERVED_IDENTIFIER_FIXUP_2117;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3267.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2117;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2210 = hdLod6(param_66, param_67);
        float _RESERVED_IDENTIFIER_FIXUP_2215 = _RESERVED_IDENTIFIER_FIXUP_2186 + _RESERVED_IDENTIFIER_FIXUP_2210.x;
        _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_2215;
        _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_2215 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3353 = _RESERVED_IDENTIFIER_FIXUP_2210;
        _RESERVED_IDENTIFIER_FIXUP_3351 = _RESERVED_IDENTIFIER_FIXUP_3224;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2228 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3089 = _RESERVED_IDENTIFIER_FIXUP_3084;
        _RESERVED_IDENTIFIER_FIXUP_3089.z = _RESERVED_IDENTIFIER_FIXUP_2228;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3354;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3352;
        if (_RESERVED_IDENTIFIER_FIXUP_2228 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2237 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2237.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2237.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2243 = hdLod7(param_68, param_69);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2247 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3164 = _RESERVED_IDENTIFIER_FIXUP_3089;
            _RESERVED_IDENTIFIER_FIXUP_3164.z = _RESERVED_IDENTIFIER_FIXUP_2247.x;
            _RESERVED_IDENTIFIER_FIXUP_3164.w = _RESERVED_IDENTIFIER_FIXUP_2247.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2257 = _RESERVED_IDENTIFIER_FIXUP_3164.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3168;
            _RESERVED_IDENTIFIER_FIXUP_3168.x = _RESERVED_IDENTIFIER_FIXUP_2257.x;
            _RESERVED_IDENTIFIER_FIXUP_3168.y = _RESERVED_IDENTIFIER_FIXUP_2257.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2264 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2268 = _RESERVED_IDENTIFIER_FIXUP_2264.y;
            _RESERVED_IDENTIFIER_FIXUP_3168.w = _RESERVED_IDENTIFIER_FIXUP_2268;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3168.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2268;
            float _RESERVED_IDENTIFIER_FIXUP_2279 = _RESERVED_IDENTIFIER_FIXUP_2243.x + hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3179 = _RESERVED_IDENTIFIER_FIXUP_2243;
            _RESERVED_IDENTIFIER_FIXUP_3179.x = _RESERVED_IDENTIFIER_FIXUP_2279;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2286 = _RESERVED_IDENTIFIER_FIXUP_3164.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3181;
            _RESERVED_IDENTIFIER_FIXUP_3181.x = _RESERVED_IDENTIFIER_FIXUP_2286.x;
            _RESERVED_IDENTIFIER_FIXUP_3181.y = _RESERVED_IDENTIFIER_FIXUP_2286.y;
            _RESERVED_IDENTIFIER_FIXUP_3181.w = _RESERVED_IDENTIFIER_FIXUP_2268;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3181.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2268;
            float _RESERVED_IDENTIFIER_FIXUP_2308 = _RESERVED_IDENTIFIER_FIXUP_2279 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3179.x = _RESERVED_IDENTIFIER_FIXUP_2308;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2315 = _RESERVED_IDENTIFIER_FIXUP_3164.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3194;
            _RESERVED_IDENTIFIER_FIXUP_3194.x = _RESERVED_IDENTIFIER_FIXUP_2315.x;
            _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_2315.y;
            _RESERVED_IDENTIFIER_FIXUP_3194.w = _RESERVED_IDENTIFIER_FIXUP_2268;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3194.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2268;
            float _RESERVED_IDENTIFIER_FIXUP_2337 = _RESERVED_IDENTIFIER_FIXUP_2308 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3179.x = _RESERVED_IDENTIFIER_FIXUP_2337;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2344 = _RESERVED_IDENTIFIER_FIXUP_3164.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3207;
            _RESERVED_IDENTIFIER_FIXUP_3207.x = _RESERVED_IDENTIFIER_FIXUP_2344.x;
            _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_2344.y;
            _RESERVED_IDENTIFIER_FIXUP_3207.w = _RESERVED_IDENTIFIER_FIXUP_2268;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3207.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2268;
            float _RESERVED_IDENTIFIER_FIXUP_2366 = _RESERVED_IDENTIFIER_FIXUP_2337 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3164.z = _RESERVED_IDENTIFIER_FIXUP_2366;
            _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_2366 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3354 = _RESERVED_IDENTIFIER_FIXUP_3179;
            _RESERVED_IDENTIFIER_FIXUP_3352 = _RESERVED_IDENTIFIER_FIXUP_3164;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3093 = _RESERVED_IDENTIFIER_FIXUP_3089;
            _RESERVED_IDENTIFIER_FIXUP_3093.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3093.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2382 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2386 = _RESERVED_IDENTIFIER_FIXUP_2382.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3366 = vec4(_RESERVED_IDENTIFIER_FIXUP_2382.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2386);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2397 = _RESERVED_IDENTIFIER_FIXUP_3366.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3367 = vec4(_RESERVED_IDENTIFIER_FIXUP_2397 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2386);
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2397;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2386;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3367.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2386;
            float _RESERVED_IDENTIFIER_FIXUP_2427 = hdLod8(param_78, param_79).x + hdLod8(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3120 = _RESERVED_IDENTIFIER_FIXUP_3366;
            _RESERVED_IDENTIFIER_FIXUP_3120.z = _RESERVED_IDENTIFIER_FIXUP_2427;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2434 = _RESERVED_IDENTIFIER_FIXUP_3120.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3122 = _RESERVED_IDENTIFIER_FIXUP_3367;
            _RESERVED_IDENTIFIER_FIXUP_3122.x = _RESERVED_IDENTIFIER_FIXUP_2434.x;
            _RESERVED_IDENTIFIER_FIXUP_3122.y = _RESERVED_IDENTIFIER_FIXUP_2434.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3122.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2386;
            float _RESERVED_IDENTIFIER_FIXUP_2449 = _RESERVED_IDENTIFIER_FIXUP_2427 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3120.z = _RESERVED_IDENTIFIER_FIXUP_2449;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2456 = _RESERVED_IDENTIFIER_FIXUP_3120.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3131 = _RESERVED_IDENTIFIER_FIXUP_3122;
            _RESERVED_IDENTIFIER_FIXUP_3131.x = _RESERVED_IDENTIFIER_FIXUP_2456.x;
            _RESERVED_IDENTIFIER_FIXUP_3131.y = _RESERVED_IDENTIFIER_FIXUP_2456.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3131.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2386;
            float _RESERVED_IDENTIFIER_FIXUP_2471 = _RESERVED_IDENTIFIER_FIXUP_2449 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3120.z = _RESERVED_IDENTIFIER_FIXUP_2471;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2478 = _RESERVED_IDENTIFIER_FIXUP_3120.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3140 = _RESERVED_IDENTIFIER_FIXUP_3131;
            _RESERVED_IDENTIFIER_FIXUP_3140.x = _RESERVED_IDENTIFIER_FIXUP_2478.x;
            _RESERVED_IDENTIFIER_FIXUP_3140.y = _RESERVED_IDENTIFIER_FIXUP_2478.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3140.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2386;
            float _RESERVED_IDENTIFIER_FIXUP_2493 = _RESERVED_IDENTIFIER_FIXUP_2471 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3120.x = _RESERVED_IDENTIFIER_FIXUP_2493;
            float _RESERVED_IDENTIFIER_FIXUP_2501 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3120.y = _RESERVED_IDENTIFIER_FIXUP_2501;
            float _RESERVED_IDENTIFIER_FIXUP_2507 = clamp((_RESERVED_IDENTIFIER_FIXUP_2501 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3093.z = _RESERVED_IDENTIFIER_FIXUP_2507;
            float _RESERVED_IDENTIFIER_FIXUP_2512 = (_RESERVED_IDENTIFIER_FIXUP_2493 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3093.w = _RESERVED_IDENTIFIER_FIXUP_2512;
            _RESERVED_IDENTIFIER_FIXUP_3093.y = (_RESERVED_IDENTIFIER_FIXUP_2507 * _RESERVED_IDENTIFIER_FIXUP_2512) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3354 = _RESERVED_IDENTIFIER_FIXUP_3120;
            _RESERVED_IDENTIFIER_FIXUP_3352 = _RESERVED_IDENTIFIER_FIXUP_3093;
        }
        _RESERVED_IDENTIFIER_FIXUP_3353 = _RESERVED_IDENTIFIER_FIXUP_3354;
        _RESERVED_IDENTIFIER_FIXUP_3351 = _RESERVED_IDENTIFIER_FIXUP_3352;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2527 = min(_RESERVED_IDENTIFIER_FIXUP_3351.y, _RESERVED_IDENTIFIER_FIXUP_3351.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3285 = _RESERVED_IDENTIFIER_FIXUP_3353;
    _RESERVED_IDENTIFIER_FIXUP_3285.x = _RESERVED_IDENTIFIER_FIXUP_2527;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3288 = _RESERVED_IDENTIFIER_FIXUP_3351;
    _RESERVED_IDENTIFIER_FIXUP_3288.x = (_RESERVED_IDENTIFIER_FIXUP_2527 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2538 = _RESERVED_IDENTIFIER_FIXUP_1894.xyz * _RESERVED_IDENTIFIER_FIXUP_3288.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3290 = _RESERVED_IDENTIFIER_FIXUP_1894;
    _RESERVED_IDENTIFIER_FIXUP_3290.x = _RESERVED_IDENTIFIER_FIXUP_2538.x;
    _RESERVED_IDENTIFIER_FIXUP_3290.y = _RESERVED_IDENTIFIER_FIXUP_2538.y;
    _RESERVED_IDENTIFIER_FIXUP_3290.z = _RESERVED_IDENTIFIER_FIXUP_2538.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2549 = _RESERVED_IDENTIFIER_FIXUP_3290.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3296 = _RESERVED_IDENTIFIER_FIXUP_3290;
    _RESERVED_IDENTIFIER_FIXUP_3296.x = _RESERVED_IDENTIFIER_FIXUP_2549.x;
    _RESERVED_IDENTIFIER_FIXUP_3296.y = _RESERVED_IDENTIFIER_FIXUP_2549.y;
    _RESERVED_IDENTIFIER_FIXUP_3296.z = _RESERVED_IDENTIFIER_FIXUP_2549.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2560 = _RESERVED_IDENTIFIER_FIXUP_3296.xyz + _RESERVED_IDENTIFIER_FIXUP_3296.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3302 = _RESERVED_IDENTIFIER_FIXUP_3296;
    _RESERVED_IDENTIFIER_FIXUP_3302.x = _RESERVED_IDENTIFIER_FIXUP_2560.x;
    _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_2560.y;
    _RESERVED_IDENTIFIER_FIXUP_3302.z = _RESERVED_IDENTIFIER_FIXUP_2560.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2571 = _RESERVED_IDENTIFIER_FIXUP_3302.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3288.x = _RESERVED_IDENTIFIER_FIXUP_2571.x;
    _RESERVED_IDENTIFIER_FIXUP_3288.y = _RESERVED_IDENTIFIER_FIXUP_2571.y;
    _RESERVED_IDENTIFIER_FIXUP_3288.z = _RESERVED_IDENTIFIER_FIXUP_2571.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2585 = (_RESERVED_IDENTIFIER_FIXUP_3288.xyz * _RESERVED_IDENTIFIER_FIXUP_3285.xxx) + _RESERVED_IDENTIFIER_FIXUP_3302.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3314 = _RESERVED_IDENTIFIER_FIXUP_3302;
    _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_2585.x;
    _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_2585.y;
    _RESERVED_IDENTIFIER_FIXUP_3314.z = _RESERVED_IDENTIFIER_FIXUP_2585.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2598 = _RESERVED_IDENTIFIER_FIXUP_3314.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3320 = _RESERVED_IDENTIFIER_FIXUP_3314;
    _RESERVED_IDENTIFIER_FIXUP_3320.x = _RESERVED_IDENTIFIER_FIXUP_2598.x;
    _RESERVED_IDENTIFIER_FIXUP_3320.y = _RESERVED_IDENTIFIER_FIXUP_2598.y;
    _RESERVED_IDENTIFIER_FIXUP_3320.z = _RESERVED_IDENTIFIER_FIXUP_2598.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3320.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_918 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_927;
    if (_RESERVED_IDENTIFIER_FIXUP_918)
    {
        _RESERVED_IDENTIFIER_FIXUP_927 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_927 = _RESERVED_IDENTIFIER_FIXUP_918;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_927)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_964 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2985.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_991 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2657;
    if (_RESERVED_IDENTIFIER_FIXUP_964 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2657 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_964), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_991);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2657 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_991);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2657;
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 *= r3.xxxx;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB157 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB157.x;
        r1.z = hdB157.y;
        vec2 hdB178 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB178.x;
        r3.y = hdB178.y;
        vec2 hdB186 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB186.x;
        r3.w = hdB186.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r1.w = r2.x + r3.x;
        vec2 hdB209 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB209.x;
        r2.y = hdB209.y;
        vec2 hdB216 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB216.x;
        r2.w = hdB216.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB239 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB239.x;
        r2.y = hdB239.y;
        vec2 hdB246 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB246.x;
        r2.w = hdB246.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB269 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB269.x;
        r2.y = hdB269.y;
        vec2 hdB276 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB276.x;
        r2.w = hdB276.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.y = r1.w + r2.x;
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
        r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        vec2 hdB336 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB336.x;
        r1.z = hdB336.y;
        vec2 hdB346 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB346.x;
        r3.y = hdB346.y;
        vec2 hdB353 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB353.x;
        r3.w = hdB353.y;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r1.w = r2.x + r3.x;
        vec2 hdB375 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB375.x;
        r2.y = hdB375.y;
        vec2 hdB382 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB382.x;
        r2.w = hdB382.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod6(param_18, param_19);
        r1.w += r2.x;
        vec2 hdB404 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB404.x;
        r2.y = hdB404.y;
        vec2 hdB411 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB411.x;
        r2.w = hdB411.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod6(param_20, param_21);
        r1.w += r2.x;
        vec2 hdB433 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB433.x;
        r2.y = hdB433.y;
        vec2 hdB440 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB440.x;
        r2.w = hdB440.y;
        vec2 param_22 = r2.xy;
        float param_23 = r2.w;
        r2 = hdLod6(param_22, param_23);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            vec2 hdB489 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB489.x;
            r1.w = hdB489.y;
            vec2 hdB499 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB499.x;
            r3.y = hdB499.y;
            vec2 hdB506 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB506.x;
            r3.w = hdB506.y;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r2.x += r3.x;
            vec2 hdB528 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB528.x;
            r3.y = hdB528.y;
            vec2 hdB535 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB535.x;
            r3.w = hdB535.y;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r2.x += r3.x;
            vec2 hdB557 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB557.x;
            r3.y = hdB557.y;
            vec2 hdB564 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB564.x;
            r3.w = hdB564.y;
            vec2 param_30 = r3.xy;
            float param_31 = r3.w;
            r3 = hdLod7(param_30, param_31);
            r2.x += r3.x;
            vec2 hdB586 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB586.x;
            r3.y = hdB586.y;
            vec2 hdB593 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB593.x;
            r3.w = hdB593.y;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod7(param_32, param_33);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 hdB625 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB625.x;
            r2.w = hdB625.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_34 = r2.xy;
            float param_35 = r2.w;
            r3 = hdLod8(param_34, param_35);
            vec2 hdB650 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB650.x;
            r4.y = hdB650.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r5 = hdLod8(param_36, param_37);
            r2.z = r3.x + r5.x;
            vec2 hdB678 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB678.x;
            r4.y = hdB678.y;
            vec2 param_38 = r4.xy;
            float param_39 = r4.w;
            r3 = hdLod8(param_38, param_39);
            r2.z += r3.x;
            vec2 hdB700 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB700.x;
            r4.y = hdB700.y;
            vec2 param_40 = r4.xy;
            float param_41 = r4.w;
            r3 = hdLod8(param_40, param_41);
            r2.z += r3.x;
            vec2 hdB722 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB722.x;
            r4.y = hdB722.y;
            vec2 param_42 = r4.xy;
            float param_43 = r4.w;
            r3 = hdLod8(param_42, param_43);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB780 = r0;
    vec3 hdB784 = hdB780.xyz * r1.xxx;
    r0.x = hdB784.x;
    r0.y = hdB784.y;
    r0.z = hdB784.z;
    vec4 hdB791 = r0;
    vec3 hdB795 = hdB791.xyz * v0.xyz;
    r0.x = hdB795.x;
    r0.y = hdB795.y;
    r0.z = hdB795.z;
    vec4 hdB802 = r0;
    vec4 hdB804 = r0;
    vec3 hdB806 = hdB802.xyz + hdB804.xyz;
    r0.x = hdB806.x;
    r0.y = hdB806.y;
    r0.z = hdB806.z;
    vec3 hdB817 = r0.www * v1.xyz;
    r1.x = hdB817.x;
    r1.y = hdB817.y;
    r1.z = hdB817.z;
    vec4 hdB829 = r0;
    vec3 hdB831 = (r1.xyz * r2.xxx) + hdB829.xyz;
    r0.x = hdB831.x;
    r0.y = hdB831.y;
    r0.z = hdB831.z;
    vec4 hdB838 = r0;
    vec3 hdB845 = hdB838.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB845.x;
    r0.y = hdB845.y;
    r0.z = hdB845.z;
    vec3 hdB860 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB860.x;
    oC0.y = hdB860.y;
    oC0.z = hdB860.z;
    oC0.w = 1.0;
    bool hdB873 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB881;
    if (hdB873)
    {
        hdB881 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB881 = hdB873;
    }
    if (hdB881)
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
    bool _3202 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3212;
    if (_3202)
    {
        _3212 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3212 = _3202;
    }
    if (_3212)
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
        bool _3237 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3252;
        if (!_3237)
        {
            _3252 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3252 = _3237;
        }
        if (_3252)
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
