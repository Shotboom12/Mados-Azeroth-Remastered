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
float _RESERVED_IDENTIFIER_FIXUP_3484;
vec4 _RESERVED_IDENTIFIER_FIXUP_3485;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1088 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1092 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1096 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1100 = hdTex3(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_1104 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1100.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2747 = _RESERVED_IDENTIFIER_FIXUP_1100;
    _RESERVED_IDENTIFIER_FIXUP_2747.z = _RESERVED_IDENTIFIER_FIXUP_1104;
    _RESERVED_IDENTIFIER_FIXUP_2747.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1104;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_1092 * _RESERVED_IDENTIFIER_FIXUP_2747.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1126 = (_RESERVED_IDENTIFIER_FIXUP_1096 * _RESERVED_IDENTIFIER_FIXUP_2747.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1088 * _RESERVED_IDENTIFIER_FIXUP_2747.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1114);
    float _RESERVED_IDENTIFIER_FIXUP_1133 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2754 = _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_2754.x = _RESERVED_IDENTIFIER_FIXUP_1133;
    float _RESERVED_IDENTIFIER_FIXUP_1139 = clamp((_RESERVED_IDENTIFIER_FIXUP_1133 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2754.x = _RESERVED_IDENTIFIER_FIXUP_1139;
    float _RESERVED_IDENTIFIER_FIXUP_1145 = ((-_RESERVED_IDENTIFIER_FIXUP_1139) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2754.y = _RESERVED_IDENTIFIER_FIXUP_1145;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3487;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3486;
    if (_RESERVED_IDENTIFIER_FIXUP_1145 != (-_RESERVED_IDENTIFIER_FIXUP_1145))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1157 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2766 = _RESERVED_IDENTIFIER_FIXUP_2754;
        _RESERVED_IDENTIFIER_FIXUP_2766.y = _RESERVED_IDENTIFIER_FIXUP_1157.x;
        _RESERVED_IDENTIFIER_FIXUP_2766.z = _RESERVED_IDENTIFIER_FIXUP_1157.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1167 = _RESERVED_IDENTIFIER_FIXUP_2766.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2770;
        _RESERVED_IDENTIFIER_FIXUP_2770.x = _RESERVED_IDENTIFIER_FIXUP_1167.x;
        _RESERVED_IDENTIFIER_FIXUP_2770.y = _RESERVED_IDENTIFIER_FIXUP_1167.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_2766.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2774;
        _RESERVED_IDENTIFIER_FIXUP_2774.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
        _RESERVED_IDENTIFIER_FIXUP_2774.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1187 = _RESERVED_IDENTIFIER_FIXUP_2766.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2778;
        _RESERVED_IDENTIFIER_FIXUP_2778.x = _RESERVED_IDENTIFIER_FIXUP_1187.x;
        _RESERVED_IDENTIFIER_FIXUP_2778.y = _RESERVED_IDENTIFIER_FIXUP_1187.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1197 = _RESERVED_IDENTIFIER_FIXUP_2766.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2782;
        _RESERVED_IDENTIFIER_FIXUP_2782.x = _RESERVED_IDENTIFIER_FIXUP_1197.x;
        _RESERVED_IDENTIFIER_FIXUP_2782.y = _RESERVED_IDENTIFIER_FIXUP_1197.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1205 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1205.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1205.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1211 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_2770.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2774.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2778.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2782.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2770.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1211.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2774.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1211.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2778.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1211.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1268 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1211 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_2782.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1274 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2766.y = _RESERVED_IDENTIFIER_FIXUP_1274;
        float _RESERVED_IDENTIFIER_FIXUP_1279 = float(_RESERVED_IDENTIFIER_FIXUP_1274 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2766.y = _RESERVED_IDENTIFIER_FIXUP_1279;
        float _RESERVED_IDENTIFIER_FIXUP_1282 = dot(_RESERVED_IDENTIFIER_FIXUP_1268, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2766.z = _RESERVED_IDENTIFIER_FIXUP_1282;
        float _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_1279 + _RESERVED_IDENTIFIER_FIXUP_1282;
        _RESERVED_IDENTIFIER_FIXUP_2766.y = _RESERVED_IDENTIFIER_FIXUP_1288;
        float _RESERVED_IDENTIFIER_FIXUP_1293 = (_RESERVED_IDENTIFIER_FIXUP_1288 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2766.y = _RESERVED_IDENTIFIER_FIXUP_1293;
        _RESERVED_IDENTIFIER_FIXUP_2766.x = (_RESERVED_IDENTIFIER_FIXUP_1139 * _RESERVED_IDENTIFIER_FIXUP_1293) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3487 = _RESERVED_IDENTIFIER_FIXUP_1268;
        _RESERVED_IDENTIFIER_FIXUP_3486 = _RESERVED_IDENTIFIER_FIXUP_2766;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2764 = _RESERVED_IDENTIFIER_FIXUP_2754;
        _RESERVED_IDENTIFIER_FIXUP_2764.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3487 = _RESERVED_IDENTIFIER_FIXUP_1096;
        _RESERVED_IDENTIFIER_FIXUP_3486 = _RESERVED_IDENTIFIER_FIXUP_2764;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1311 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2838 = _RESERVED_IDENTIFIER_FIXUP_3486;
    _RESERVED_IDENTIFIER_FIXUP_2838.y = _RESERVED_IDENTIFIER_FIXUP_1311;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3490;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3488;
    if (_RESERVED_IDENTIFIER_FIXUP_1311 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1320 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2999 = _RESERVED_IDENTIFIER_FIXUP_2838;
        _RESERVED_IDENTIFIER_FIXUP_2999.y = _RESERVED_IDENTIFIER_FIXUP_1320.x;
        _RESERVED_IDENTIFIER_FIXUP_2999.z = _RESERVED_IDENTIFIER_FIXUP_1320.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_2999.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3003;
        _RESERVED_IDENTIFIER_FIXUP_3003.x = _RESERVED_IDENTIFIER_FIXUP_1330.x;
        _RESERVED_IDENTIFIER_FIXUP_3003.y = _RESERVED_IDENTIFIER_FIXUP_1330.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1340 = _RESERVED_IDENTIFIER_FIXUP_2999.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3007;
        _RESERVED_IDENTIFIER_FIXUP_3007.x = _RESERVED_IDENTIFIER_FIXUP_1340.x;
        _RESERVED_IDENTIFIER_FIXUP_3007.y = _RESERVED_IDENTIFIER_FIXUP_1340.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1350 = _RESERVED_IDENTIFIER_FIXUP_2999.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3011;
        _RESERVED_IDENTIFIER_FIXUP_3011.x = _RESERVED_IDENTIFIER_FIXUP_1350.x;
        _RESERVED_IDENTIFIER_FIXUP_3011.y = _RESERVED_IDENTIFIER_FIXUP_1350.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1360 = _RESERVED_IDENTIFIER_FIXUP_2999.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3015;
        _RESERVED_IDENTIFIER_FIXUP_3015.x = _RESERVED_IDENTIFIER_FIXUP_1360.x;
        _RESERVED_IDENTIFIER_FIXUP_3015.y = _RESERVED_IDENTIFIER_FIXUP_1360.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1368 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1368.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1368.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1374 = hdLod6(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_3003.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3007.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3011.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3015.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3003.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1374.y = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3007.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1374.z = hdLod6(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3011.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1374.w = hdLod6(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1431 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1374 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3015.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1437 = hdLod6(param_22, param_23).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2999.y = _RESERVED_IDENTIFIER_FIXUP_1437;
        float _RESERVED_IDENTIFIER_FIXUP_1442 = float(_RESERVED_IDENTIFIER_FIXUP_1437 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2999.y = _RESERVED_IDENTIFIER_FIXUP_1442;
        float _RESERVED_IDENTIFIER_FIXUP_1445 = dot(_RESERVED_IDENTIFIER_FIXUP_1431, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2999.z = _RESERVED_IDENTIFIER_FIXUP_1445;
        float _RESERVED_IDENTIFIER_FIXUP_1451 = _RESERVED_IDENTIFIER_FIXUP_1442 + _RESERVED_IDENTIFIER_FIXUP_1445;
        _RESERVED_IDENTIFIER_FIXUP_2999.y = _RESERVED_IDENTIFIER_FIXUP_1451;
        _RESERVED_IDENTIFIER_FIXUP_2999.y = _RESERVED_IDENTIFIER_FIXUP_1451 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3490 = _RESERVED_IDENTIFIER_FIXUP_1431;
        _RESERVED_IDENTIFIER_FIXUP_3488 = _RESERVED_IDENTIFIER_FIXUP_2999;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1464 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2843 = _RESERVED_IDENTIFIER_FIXUP_2838;
        _RESERVED_IDENTIFIER_FIXUP_2843.z = _RESERVED_IDENTIFIER_FIXUP_1464;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3491;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3489;
        if (_RESERVED_IDENTIFIER_FIXUP_1464 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1473 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2933 = _RESERVED_IDENTIFIER_FIXUP_2843;
            _RESERVED_IDENTIFIER_FIXUP_2933.z = _RESERVED_IDENTIFIER_FIXUP_1473.x;
            _RESERVED_IDENTIFIER_FIXUP_2933.w = _RESERVED_IDENTIFIER_FIXUP_1473.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1483 = _RESERVED_IDENTIFIER_FIXUP_2933.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2937;
            _RESERVED_IDENTIFIER_FIXUP_2937.x = _RESERVED_IDENTIFIER_FIXUP_1483.x;
            _RESERVED_IDENTIFIER_FIXUP_2937.y = _RESERVED_IDENTIFIER_FIXUP_1483.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1493 = _RESERVED_IDENTIFIER_FIXUP_2933.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2941;
            _RESERVED_IDENTIFIER_FIXUP_2941.x = _RESERVED_IDENTIFIER_FIXUP_1493.x;
            _RESERVED_IDENTIFIER_FIXUP_2941.y = _RESERVED_IDENTIFIER_FIXUP_1493.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1503 = _RESERVED_IDENTIFIER_FIXUP_2933.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2945;
            _RESERVED_IDENTIFIER_FIXUP_2945.x = _RESERVED_IDENTIFIER_FIXUP_1503.x;
            _RESERVED_IDENTIFIER_FIXUP_2945.y = _RESERVED_IDENTIFIER_FIXUP_1503.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_2933.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2949;
            _RESERVED_IDENTIFIER_FIXUP_2949.x = _RESERVED_IDENTIFIER_FIXUP_1513.x;
            _RESERVED_IDENTIFIER_FIXUP_2949.y = _RESERVED_IDENTIFIER_FIXUP_1513.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1521 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1521.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1521.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1527 = hdLod7(param_24, param_25);
            _RESERVED_IDENTIFIER_FIXUP_2937.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2941.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2945.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2949.w = 0.0;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2937.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1527.y = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2941.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1527.z = hdLod7(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2945.xy;
            float param_31 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1527.w = hdLod7(param_30, param_31).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1584 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1527 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2949.xy;
            float param_33 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1590 = hdLod7(param_32, param_33).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2933.z = _RESERVED_IDENTIFIER_FIXUP_1590;
            float _RESERVED_IDENTIFIER_FIXUP_1595 = float(_RESERVED_IDENTIFIER_FIXUP_1590 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2933.z = _RESERVED_IDENTIFIER_FIXUP_1595;
            float _RESERVED_IDENTIFIER_FIXUP_1598 = dot(_RESERVED_IDENTIFIER_FIXUP_1584, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2933.w = _RESERVED_IDENTIFIER_FIXUP_1598;
            float _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_1595 + _RESERVED_IDENTIFIER_FIXUP_1598;
            _RESERVED_IDENTIFIER_FIXUP_2933.z = _RESERVED_IDENTIFIER_FIXUP_1604;
            _RESERVED_IDENTIFIER_FIXUP_2933.y = _RESERVED_IDENTIFIER_FIXUP_1604 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3491 = _RESERVED_IDENTIFIER_FIXUP_1584;
            _RESERVED_IDENTIFIER_FIXUP_3489 = _RESERVED_IDENTIFIER_FIXUP_2933;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2847 = _RESERVED_IDENTIFIER_FIXUP_3487;
            _RESERVED_IDENTIFIER_FIXUP_2847.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2847.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1620 = (_RESERVED_IDENTIFIER_FIXUP_2847.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2852;
            _RESERVED_IDENTIFIER_FIXUP_2852.x = _RESERVED_IDENTIFIER_FIXUP_1620.x;
            _RESERVED_IDENTIFIER_FIXUP_2852.y = _RESERVED_IDENTIFIER_FIXUP_1620.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1630 = _RESERVED_IDENTIFIER_FIXUP_2852.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2856;
            _RESERVED_IDENTIFIER_FIXUP_2856.x = _RESERVED_IDENTIFIER_FIXUP_1630.x;
            _RESERVED_IDENTIFIER_FIXUP_2856.y = _RESERVED_IDENTIFIER_FIXUP_1630.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1640 = _RESERVED_IDENTIFIER_FIXUP_2852.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2860;
            _RESERVED_IDENTIFIER_FIXUP_2860.x = _RESERVED_IDENTIFIER_FIXUP_1640.x;
            _RESERVED_IDENTIFIER_FIXUP_2860.y = _RESERVED_IDENTIFIER_FIXUP_1640.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1650 = _RESERVED_IDENTIFIER_FIXUP_2852.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2864;
            _RESERVED_IDENTIFIER_FIXUP_2864.x = _RESERVED_IDENTIFIER_FIXUP_1650.x;
            _RESERVED_IDENTIFIER_FIXUP_2864.y = _RESERVED_IDENTIFIER_FIXUP_1650.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1660 = _RESERVED_IDENTIFIER_FIXUP_2852.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2868;
            _RESERVED_IDENTIFIER_FIXUP_2868.x = _RESERVED_IDENTIFIER_FIXUP_1660.x;
            _RESERVED_IDENTIFIER_FIXUP_2868.y = _RESERVED_IDENTIFIER_FIXUP_1660.y;
            _RESERVED_IDENTIFIER_FIXUP_2852.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_2852.xy;
            float param_35 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1674 = hdLod8(param_34, param_35);
            _RESERVED_IDENTIFIER_FIXUP_2856.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2860.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2864.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2868.w = 0.0;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2856.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1674.y = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2860.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1674.z = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2864.xy;
            float param_41 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1674.w = hdLod8(param_40, param_41).x;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_2868.xy;
            float param_43 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1737 = hdLod8(param_42, param_43).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2908 = _RESERVED_IDENTIFIER_FIXUP_2843;
            _RESERVED_IDENTIFIER_FIXUP_2908.z = _RESERVED_IDENTIFIER_FIXUP_1737;
            float _RESERVED_IDENTIFIER_FIXUP_1742 = float(_RESERVED_IDENTIFIER_FIXUP_1737 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2908.z = _RESERVED_IDENTIFIER_FIXUP_1742;
            float _RESERVED_IDENTIFIER_FIXUP_1745 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1674 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2908.w = _RESERVED_IDENTIFIER_FIXUP_1745;
            float _RESERVED_IDENTIFIER_FIXUP_1751 = _RESERVED_IDENTIFIER_FIXUP_1742 + _RESERVED_IDENTIFIER_FIXUP_1745;
            _RESERVED_IDENTIFIER_FIXUP_2908.z = _RESERVED_IDENTIFIER_FIXUP_1751;
            float _RESERVED_IDENTIFIER_FIXUP_1759 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2908.w = _RESERVED_IDENTIFIER_FIXUP_1759;
            float _RESERVED_IDENTIFIER_FIXUP_1765 = clamp((_RESERVED_IDENTIFIER_FIXUP_1759 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2908.w = _RESERVED_IDENTIFIER_FIXUP_1765;
            float _RESERVED_IDENTIFIER_FIXUP_1770 = (_RESERVED_IDENTIFIER_FIXUP_1751 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2908.z = _RESERVED_IDENTIFIER_FIXUP_1770;
            _RESERVED_IDENTIFIER_FIXUP_2908.y = (_RESERVED_IDENTIFIER_FIXUP_1765 * _RESERVED_IDENTIFIER_FIXUP_1770) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3491 = _RESERVED_IDENTIFIER_FIXUP_2847;
            _RESERVED_IDENTIFIER_FIXUP_3489 = _RESERVED_IDENTIFIER_FIXUP_2908;
        }
        _RESERVED_IDENTIFIER_FIXUP_3490 = _RESERVED_IDENTIFIER_FIXUP_3491;
        _RESERVED_IDENTIFIER_FIXUP_3488 = _RESERVED_IDENTIFIER_FIXUP_3489;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1785 = min(_RESERVED_IDENTIFIER_FIXUP_3488.y, _RESERVED_IDENTIFIER_FIXUP_3488.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3067 = _RESERVED_IDENTIFIER_FIXUP_3490;
    _RESERVED_IDENTIFIER_FIXUP_3067.x = _RESERVED_IDENTIFIER_FIXUP_1785;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3070 = _RESERVED_IDENTIFIER_FIXUP_3488;
    _RESERVED_IDENTIFIER_FIXUP_3070.x = (_RESERVED_IDENTIFIER_FIXUP_1785 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1796 = _RESERVED_IDENTIFIER_FIXUP_1126.xyz * _RESERVED_IDENTIFIER_FIXUP_3070.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3072 = _RESERVED_IDENTIFIER_FIXUP_1126;
    _RESERVED_IDENTIFIER_FIXUP_3072.x = _RESERVED_IDENTIFIER_FIXUP_1796.x;
    _RESERVED_IDENTIFIER_FIXUP_3072.y = _RESERVED_IDENTIFIER_FIXUP_1796.y;
    _RESERVED_IDENTIFIER_FIXUP_3072.z = _RESERVED_IDENTIFIER_FIXUP_1796.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1807 = _RESERVED_IDENTIFIER_FIXUP_3072.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3484).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3078 = _RESERVED_IDENTIFIER_FIXUP_3072;
    _RESERVED_IDENTIFIER_FIXUP_3078.x = _RESERVED_IDENTIFIER_FIXUP_1807.x;
    _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1807.y;
    _RESERVED_IDENTIFIER_FIXUP_3078.z = _RESERVED_IDENTIFIER_FIXUP_1807.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1818 = _RESERVED_IDENTIFIER_FIXUP_3078.xyz + _RESERVED_IDENTIFIER_FIXUP_3078.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3084 = _RESERVED_IDENTIFIER_FIXUP_3078;
    _RESERVED_IDENTIFIER_FIXUP_3084.x = _RESERVED_IDENTIFIER_FIXUP_1818.x;
    _RESERVED_IDENTIFIER_FIXUP_3084.y = _RESERVED_IDENTIFIER_FIXUP_1818.y;
    _RESERVED_IDENTIFIER_FIXUP_3084.z = _RESERVED_IDENTIFIER_FIXUP_1818.z;
    _RESERVED_IDENTIFIER_FIXUP_3070.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3070.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3070.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1843 = (_RESERVED_IDENTIFIER_FIXUP_3070.xyz * _RESERVED_IDENTIFIER_FIXUP_3067.xxx) + _RESERVED_IDENTIFIER_FIXUP_3084.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3096 = _RESERVED_IDENTIFIER_FIXUP_3084;
    _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_1843.x;
    _RESERVED_IDENTIFIER_FIXUP_3096.y = _RESERVED_IDENTIFIER_FIXUP_1843.y;
    _RESERVED_IDENTIFIER_FIXUP_3096.z = _RESERVED_IDENTIFIER_FIXUP_1843.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1856 = _RESERVED_IDENTIFIER_FIXUP_3096.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3102 = _RESERVED_IDENTIFIER_FIXUP_3096;
    _RESERVED_IDENTIFIER_FIXUP_3102.x = _RESERVED_IDENTIFIER_FIXUP_1856.x;
    _RESERVED_IDENTIFIER_FIXUP_3102.y = _RESERVED_IDENTIFIER_FIXUP_1856.y;
    _RESERVED_IDENTIFIER_FIXUP_3102.z = _RESERVED_IDENTIFIER_FIXUP_1856.z;
    vec2 param_44 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1913 = hdTex0(param_44);
    vec2 param_45 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1917 = hdTex1(param_45);
    vec2 param_46 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1921 = hdTex2(param_46);
    vec2 param_47 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1925 = hdTex3(param_47);
    float _RESERVED_IDENTIFIER_FIXUP_1929 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1925.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3116 = _RESERVED_IDENTIFIER_FIXUP_1925;
    _RESERVED_IDENTIFIER_FIXUP_3116.z = _RESERVED_IDENTIFIER_FIXUP_1929;
    _RESERVED_IDENTIFIER_FIXUP_3116.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1929;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1939 = _RESERVED_IDENTIFIER_FIXUP_1917 * _RESERVED_IDENTIFIER_FIXUP_3116.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1951 = (_RESERVED_IDENTIFIER_FIXUP_1921 * _RESERVED_IDENTIFIER_FIXUP_3116.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1913 * _RESERVED_IDENTIFIER_FIXUP_3116.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1939);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3123 = _RESERVED_IDENTIFIER_FIXUP_1939;
    _RESERVED_IDENTIFIER_FIXUP_3123.x = _RESERVED_IDENTIFIER_FIXUP_1133;
    float _RESERVED_IDENTIFIER_FIXUP_1964 = clamp((_RESERVED_IDENTIFIER_FIXUP_1133 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3123.x = _RESERVED_IDENTIFIER_FIXUP_1964;
    float _RESERVED_IDENTIFIER_FIXUP_1970 = ((-_RESERVED_IDENTIFIER_FIXUP_1964) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3123.y = _RESERVED_IDENTIFIER_FIXUP_1970;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3499;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3498;
    if (_RESERVED_IDENTIFIER_FIXUP_1970 != (-_RESERVED_IDENTIFIER_FIXUP_1970))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1982 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3135 = _RESERVED_IDENTIFIER_FIXUP_3123;
        _RESERVED_IDENTIFIER_FIXUP_3135.y = _RESERVED_IDENTIFIER_FIXUP_1982.x;
        _RESERVED_IDENTIFIER_FIXUP_3135.z = _RESERVED_IDENTIFIER_FIXUP_1982.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1992 = _RESERVED_IDENTIFIER_FIXUP_3135.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3139;
        _RESERVED_IDENTIFIER_FIXUP_3139.x = _RESERVED_IDENTIFIER_FIXUP_1992.x;
        _RESERVED_IDENTIFIER_FIXUP_3139.y = _RESERVED_IDENTIFIER_FIXUP_1992.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2002 = _RESERVED_IDENTIFIER_FIXUP_3135.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3143;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_2002.x;
        _RESERVED_IDENTIFIER_FIXUP_3143.y = _RESERVED_IDENTIFIER_FIXUP_2002.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2012 = _RESERVED_IDENTIFIER_FIXUP_3135.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3147;
        _RESERVED_IDENTIFIER_FIXUP_3147.x = _RESERVED_IDENTIFIER_FIXUP_2012.x;
        _RESERVED_IDENTIFIER_FIXUP_3147.y = _RESERVED_IDENTIFIER_FIXUP_2012.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2022 = _RESERVED_IDENTIFIER_FIXUP_3135.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3151;
        _RESERVED_IDENTIFIER_FIXUP_3151.x = _RESERVED_IDENTIFIER_FIXUP_2022.x;
        _RESERVED_IDENTIFIER_FIXUP_3151.y = _RESERVED_IDENTIFIER_FIXUP_2022.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2030 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2030.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2030.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2036 = hdLod5(param_48, param_49);
        _RESERVED_IDENTIFIER_FIXUP_3139.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3143.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3147.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3151.w = 0.0;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3139.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2036.y = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3143.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2036.z = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3147.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2036.w = hdLod5(param_54, param_55).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2093 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2036 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3151.xy;
        float param_57 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2099 = hdLod5(param_56, param_57).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3135.y = _RESERVED_IDENTIFIER_FIXUP_2099;
        float _RESERVED_IDENTIFIER_FIXUP_2104 = float(_RESERVED_IDENTIFIER_FIXUP_2099 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3135.y = _RESERVED_IDENTIFIER_FIXUP_2104;
        float _RESERVED_IDENTIFIER_FIXUP_2107 = dot(_RESERVED_IDENTIFIER_FIXUP_2093, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3135.z = _RESERVED_IDENTIFIER_FIXUP_2107;
        float _RESERVED_IDENTIFIER_FIXUP_2113 = _RESERVED_IDENTIFIER_FIXUP_2104 + _RESERVED_IDENTIFIER_FIXUP_2107;
        _RESERVED_IDENTIFIER_FIXUP_3135.y = _RESERVED_IDENTIFIER_FIXUP_2113;
        float _RESERVED_IDENTIFIER_FIXUP_2118 = (_RESERVED_IDENTIFIER_FIXUP_2113 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3135.y = _RESERVED_IDENTIFIER_FIXUP_2118;
        _RESERVED_IDENTIFIER_FIXUP_3135.x = (_RESERVED_IDENTIFIER_FIXUP_1964 * _RESERVED_IDENTIFIER_FIXUP_2118) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3499 = _RESERVED_IDENTIFIER_FIXUP_2093;
        _RESERVED_IDENTIFIER_FIXUP_3498 = _RESERVED_IDENTIFIER_FIXUP_3135;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3133 = _RESERVED_IDENTIFIER_FIXUP_3123;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3499 = _RESERVED_IDENTIFIER_FIXUP_1921;
        _RESERVED_IDENTIFIER_FIXUP_3498 = _RESERVED_IDENTIFIER_FIXUP_3133;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3207 = _RESERVED_IDENTIFIER_FIXUP_3498;
    _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_1311;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3502;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3500;
    if (_RESERVED_IDENTIFIER_FIXUP_1311 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2145 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3368 = _RESERVED_IDENTIFIER_FIXUP_3207;
        _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_2145.x;
        _RESERVED_IDENTIFIER_FIXUP_3368.z = _RESERVED_IDENTIFIER_FIXUP_2145.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2155 = _RESERVED_IDENTIFIER_FIXUP_3368.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3372;
        _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_2155.x;
        _RESERVED_IDENTIFIER_FIXUP_3372.y = _RESERVED_IDENTIFIER_FIXUP_2155.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2165 = _RESERVED_IDENTIFIER_FIXUP_3368.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3376;
        _RESERVED_IDENTIFIER_FIXUP_3376.x = _RESERVED_IDENTIFIER_FIXUP_2165.x;
        _RESERVED_IDENTIFIER_FIXUP_3376.y = _RESERVED_IDENTIFIER_FIXUP_2165.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2175 = _RESERVED_IDENTIFIER_FIXUP_3368.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3380;
        _RESERVED_IDENTIFIER_FIXUP_3380.x = _RESERVED_IDENTIFIER_FIXUP_2175.x;
        _RESERVED_IDENTIFIER_FIXUP_3380.y = _RESERVED_IDENTIFIER_FIXUP_2175.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2185 = _RESERVED_IDENTIFIER_FIXUP_3368.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3384;
        _RESERVED_IDENTIFIER_FIXUP_3384.x = _RESERVED_IDENTIFIER_FIXUP_2185.x;
        _RESERVED_IDENTIFIER_FIXUP_3384.y = _RESERVED_IDENTIFIER_FIXUP_2185.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2193 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2193.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2193.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2199 = hdLod6(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3372.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3376.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3380.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3384.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3372.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2199.y = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3376.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2199.z = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3380.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2199.w = hdLod6(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2256 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2199 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3384.xy;
        float param_67 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2262 = hdLod6(param_66, param_67).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_2262;
        float _RESERVED_IDENTIFIER_FIXUP_2267 = float(_RESERVED_IDENTIFIER_FIXUP_2262 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_2267;
        float _RESERVED_IDENTIFIER_FIXUP_2270 = dot(_RESERVED_IDENTIFIER_FIXUP_2256, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3368.z = _RESERVED_IDENTIFIER_FIXUP_2270;
        float _RESERVED_IDENTIFIER_FIXUP_2276 = _RESERVED_IDENTIFIER_FIXUP_2267 + _RESERVED_IDENTIFIER_FIXUP_2270;
        _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_2276;
        _RESERVED_IDENTIFIER_FIXUP_3368.y = _RESERVED_IDENTIFIER_FIXUP_2276 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3502 = _RESERVED_IDENTIFIER_FIXUP_2256;
        _RESERVED_IDENTIFIER_FIXUP_3500 = _RESERVED_IDENTIFIER_FIXUP_3368;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2289 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3212 = _RESERVED_IDENTIFIER_FIXUP_3207;
        _RESERVED_IDENTIFIER_FIXUP_3212.z = _RESERVED_IDENTIFIER_FIXUP_2289;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3503;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3501;
        if (_RESERVED_IDENTIFIER_FIXUP_2289 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2298 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3302 = _RESERVED_IDENTIFIER_FIXUP_3212;
            _RESERVED_IDENTIFIER_FIXUP_3302.z = _RESERVED_IDENTIFIER_FIXUP_2298.x;
            _RESERVED_IDENTIFIER_FIXUP_3302.w = _RESERVED_IDENTIFIER_FIXUP_2298.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2308 = _RESERVED_IDENTIFIER_FIXUP_3302.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3306;
            _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_2308.x;
            _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_2308.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2318 = _RESERVED_IDENTIFIER_FIXUP_3302.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
            _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_2318.x;
            _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2318.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2328 = _RESERVED_IDENTIFIER_FIXUP_3302.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3314;
            _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_2328.x;
            _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_2328.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2338 = _RESERVED_IDENTIFIER_FIXUP_3302.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3318;
            _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_2338.x;
            _RESERVED_IDENTIFIER_FIXUP_3318.y = _RESERVED_IDENTIFIER_FIXUP_2338.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2346 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2346.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2346.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2352 = hdLod7(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3306.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3310.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3314.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3318.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3306.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2352.y = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3310.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2352.z = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3314.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2352.w = hdLod7(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2409 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2352 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3318.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2415 = hdLod7(param_76, param_77).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3302.z = _RESERVED_IDENTIFIER_FIXUP_2415;
            float _RESERVED_IDENTIFIER_FIXUP_2420 = float(_RESERVED_IDENTIFIER_FIXUP_2415 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3302.z = _RESERVED_IDENTIFIER_FIXUP_2420;
            float _RESERVED_IDENTIFIER_FIXUP_2423 = dot(_RESERVED_IDENTIFIER_FIXUP_2409, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3302.w = _RESERVED_IDENTIFIER_FIXUP_2423;
            float _RESERVED_IDENTIFIER_FIXUP_2429 = _RESERVED_IDENTIFIER_FIXUP_2420 + _RESERVED_IDENTIFIER_FIXUP_2423;
            _RESERVED_IDENTIFIER_FIXUP_3302.z = _RESERVED_IDENTIFIER_FIXUP_2429;
            _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_2429 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3503 = _RESERVED_IDENTIFIER_FIXUP_2409;
            _RESERVED_IDENTIFIER_FIXUP_3501 = _RESERVED_IDENTIFIER_FIXUP_3302;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3216 = _RESERVED_IDENTIFIER_FIXUP_3499;
            _RESERVED_IDENTIFIER_FIXUP_3216.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3216.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2445 = (_RESERVED_IDENTIFIER_FIXUP_3216.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3221;
            _RESERVED_IDENTIFIER_FIXUP_3221.x = _RESERVED_IDENTIFIER_FIXUP_2445.x;
            _RESERVED_IDENTIFIER_FIXUP_3221.y = _RESERVED_IDENTIFIER_FIXUP_2445.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2455 = _RESERVED_IDENTIFIER_FIXUP_3221.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3225;
            _RESERVED_IDENTIFIER_FIXUP_3225.x = _RESERVED_IDENTIFIER_FIXUP_2455.x;
            _RESERVED_IDENTIFIER_FIXUP_3225.y = _RESERVED_IDENTIFIER_FIXUP_2455.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2465 = _RESERVED_IDENTIFIER_FIXUP_3221.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3229;
            _RESERVED_IDENTIFIER_FIXUP_3229.x = _RESERVED_IDENTIFIER_FIXUP_2465.x;
            _RESERVED_IDENTIFIER_FIXUP_3229.y = _RESERVED_IDENTIFIER_FIXUP_2465.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2475 = _RESERVED_IDENTIFIER_FIXUP_3221.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3233;
            _RESERVED_IDENTIFIER_FIXUP_3233.x = _RESERVED_IDENTIFIER_FIXUP_2475.x;
            _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_2475.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2485 = _RESERVED_IDENTIFIER_FIXUP_3221.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3237;
            _RESERVED_IDENTIFIER_FIXUP_3237.x = _RESERVED_IDENTIFIER_FIXUP_2485.x;
            _RESERVED_IDENTIFIER_FIXUP_3237.y = _RESERVED_IDENTIFIER_FIXUP_2485.y;
            _RESERVED_IDENTIFIER_FIXUP_3221.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3221.xy;
            float param_79 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2499 = hdLod8(param_78, param_79);
            _RESERVED_IDENTIFIER_FIXUP_3225.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3229.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3233.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3237.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3225.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2499.y = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3229.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2499.z = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3233.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2499.w = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3237.xy;
            float param_87 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2562 = hdLod8(param_86, param_87).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3277 = _RESERVED_IDENTIFIER_FIXUP_3212;
            _RESERVED_IDENTIFIER_FIXUP_3277.z = _RESERVED_IDENTIFIER_FIXUP_2562;
            float _RESERVED_IDENTIFIER_FIXUP_2567 = float(_RESERVED_IDENTIFIER_FIXUP_2562 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3277.z = _RESERVED_IDENTIFIER_FIXUP_2567;
            float _RESERVED_IDENTIFIER_FIXUP_2570 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2499 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3277.w = _RESERVED_IDENTIFIER_FIXUP_2570;
            float _RESERVED_IDENTIFIER_FIXUP_2576 = _RESERVED_IDENTIFIER_FIXUP_2567 + _RESERVED_IDENTIFIER_FIXUP_2570;
            _RESERVED_IDENTIFIER_FIXUP_3277.z = _RESERVED_IDENTIFIER_FIXUP_2576;
            float _RESERVED_IDENTIFIER_FIXUP_2584 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3277.w = _RESERVED_IDENTIFIER_FIXUP_2584;
            float _RESERVED_IDENTIFIER_FIXUP_2590 = clamp((_RESERVED_IDENTIFIER_FIXUP_2584 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3277.w = _RESERVED_IDENTIFIER_FIXUP_2590;
            float _RESERVED_IDENTIFIER_FIXUP_2595 = (_RESERVED_IDENTIFIER_FIXUP_2576 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3277.z = _RESERVED_IDENTIFIER_FIXUP_2595;
            _RESERVED_IDENTIFIER_FIXUP_3277.y = (_RESERVED_IDENTIFIER_FIXUP_2590 * _RESERVED_IDENTIFIER_FIXUP_2595) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3503 = _RESERVED_IDENTIFIER_FIXUP_3216;
            _RESERVED_IDENTIFIER_FIXUP_3501 = _RESERVED_IDENTIFIER_FIXUP_3277;
        }
        _RESERVED_IDENTIFIER_FIXUP_3502 = _RESERVED_IDENTIFIER_FIXUP_3503;
        _RESERVED_IDENTIFIER_FIXUP_3500 = _RESERVED_IDENTIFIER_FIXUP_3501;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2610 = min(_RESERVED_IDENTIFIER_FIXUP_3500.y, _RESERVED_IDENTIFIER_FIXUP_3500.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_3502;
    _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_2610;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3439 = _RESERVED_IDENTIFIER_FIXUP_3500;
    _RESERVED_IDENTIFIER_FIXUP_3439.x = (_RESERVED_IDENTIFIER_FIXUP_2610 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2621 = _RESERVED_IDENTIFIER_FIXUP_1951.xyz * _RESERVED_IDENTIFIER_FIXUP_3439.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3441 = _RESERVED_IDENTIFIER_FIXUP_1951;
    _RESERVED_IDENTIFIER_FIXUP_3441.x = _RESERVED_IDENTIFIER_FIXUP_2621.x;
    _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_2621.y;
    _RESERVED_IDENTIFIER_FIXUP_3441.z = _RESERVED_IDENTIFIER_FIXUP_2621.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2632 = _RESERVED_IDENTIFIER_FIXUP_3441.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3447 = _RESERVED_IDENTIFIER_FIXUP_3441;
    _RESERVED_IDENTIFIER_FIXUP_3447.x = _RESERVED_IDENTIFIER_FIXUP_2632.x;
    _RESERVED_IDENTIFIER_FIXUP_3447.y = _RESERVED_IDENTIFIER_FIXUP_2632.y;
    _RESERVED_IDENTIFIER_FIXUP_3447.z = _RESERVED_IDENTIFIER_FIXUP_2632.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2643 = _RESERVED_IDENTIFIER_FIXUP_3447.xyz + _RESERVED_IDENTIFIER_FIXUP_3447.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3453 = _RESERVED_IDENTIFIER_FIXUP_3447;
    _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_2643.x;
    _RESERVED_IDENTIFIER_FIXUP_3453.y = _RESERVED_IDENTIFIER_FIXUP_2643.y;
    _RESERVED_IDENTIFIER_FIXUP_3453.z = _RESERVED_IDENTIFIER_FIXUP_2643.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2654 = _RESERVED_IDENTIFIER_FIXUP_3453.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_2654.x;
    _RESERVED_IDENTIFIER_FIXUP_3439.y = _RESERVED_IDENTIFIER_FIXUP_2654.y;
    _RESERVED_IDENTIFIER_FIXUP_3439.z = _RESERVED_IDENTIFIER_FIXUP_2654.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2668 = (_RESERVED_IDENTIFIER_FIXUP_3439.xyz * _RESERVED_IDENTIFIER_FIXUP_3436.xxx) + _RESERVED_IDENTIFIER_FIXUP_3453.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3465 = _RESERVED_IDENTIFIER_FIXUP_3453;
    _RESERVED_IDENTIFIER_FIXUP_3465.x = _RESERVED_IDENTIFIER_FIXUP_2668.x;
    _RESERVED_IDENTIFIER_FIXUP_3465.y = _RESERVED_IDENTIFIER_FIXUP_2668.y;
    _RESERVED_IDENTIFIER_FIXUP_3465.z = _RESERVED_IDENTIFIER_FIXUP_2668.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2681 = _RESERVED_IDENTIFIER_FIXUP_3465.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3471 = _RESERVED_IDENTIFIER_FIXUP_3465;
    _RESERVED_IDENTIFIER_FIXUP_3471.x = _RESERVED_IDENTIFIER_FIXUP_2681.x;
    _RESERVED_IDENTIFIER_FIXUP_3471.y = _RESERVED_IDENTIFIER_FIXUP_2681.y;
    _RESERVED_IDENTIFIER_FIXUP_3471.z = _RESERVED_IDENTIFIER_FIXUP_2681.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3471.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_946 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_955;
    if (_RESERVED_IDENTIFIER_FIXUP_946)
    {
        _RESERVED_IDENTIFIER_FIXUP_955 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_955 = _RESERVED_IDENTIFIER_FIXUP_946;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_955)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_992 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3102.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1019 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2740;
    if (_RESERVED_IDENTIFIER_FIXUP_992 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2740 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_992), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1019);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2740 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1019);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2740;
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
        vec2 hdB145 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB145.x;
        r1.z = hdB145.y;
        vec2 hdB166 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB166.x;
        r2.y = hdB166.y;
        vec2 hdB177 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB177.x;
        r3.y = hdB177.y;
        vec2 hdB188 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB188.x;
        r4.y = hdB188.y;
        vec2 hdB199 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB199.x;
        r5.y = hdB199.y;
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
        vec2 hdB330 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB330.x;
        r1.z = hdB330.y;
        vec2 hdB340 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB340.x;
        r2.y = hdB340.y;
        vec2 hdB350 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB350.x;
        r3.y = hdB350.y;
        vec2 hdB360 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB360.x;
        r4.y = hdB360.y;
        vec2 hdB370 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB370.x;
        r5.y = hdB370.y;
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
            vec2 hdB485 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB485.x;
            r1.w = hdB485.y;
            vec2 hdB495 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB495.x;
            r2.y = hdB495.y;
            vec2 hdB505 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB505.x;
            r3.y = hdB505.y;
            vec2 hdB515 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB515.x;
            r4.y = hdB515.y;
            vec2 hdB525 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB525.x;
            r5.y = hdB525.y;
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
            vec2 hdB633 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB633.x;
            r3.y = hdB633.y;
            vec2 hdB643 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB643.x;
            r4.y = hdB643.y;
            vec2 hdB653 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB653.x;
            r5.y = hdB653.y;
            vec2 hdB663 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB663.x;
            r6.y = hdB663.y;
            vec2 hdB673 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB673.x;
            r7.y = hdB673.y;
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
    vec4 hdB808 = r0;
    vec3 hdB812 = hdB808.xyz * r1.xxx;
    r0.x = hdB812.x;
    r0.y = hdB812.y;
    r0.z = hdB812.z;
    vec4 hdB819 = r0;
    vec3 hdB823 = hdB819.xyz * v0.xyz;
    r0.x = hdB823.x;
    r0.y = hdB823.y;
    r0.z = hdB823.z;
    vec4 hdB830 = r0;
    vec4 hdB832 = r0;
    vec3 hdB834 = hdB830.xyz + hdB832.xyz;
    r0.x = hdB834.x;
    r0.y = hdB834.y;
    r0.z = hdB834.z;
    vec3 hdB845 = r0.www * v1.xyz;
    r1.x = hdB845.x;
    r1.y = hdB845.y;
    r1.z = hdB845.z;
    vec4 hdB857 = r0;
    vec3 hdB859 = (r1.xyz * r2.xxx) + hdB857.xyz;
    r0.x = hdB859.x;
    r0.y = hdB859.y;
    r0.z = hdB859.z;
    vec4 hdB866 = r0;
    vec3 hdB873 = hdB866.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB873.x;
    r0.y = hdB873.y;
    r0.z = hdB873.z;
    vec3 hdB888 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB888.x;
    oC0.y = hdB888.y;
    oC0.z = hdB888.z;
    oC0.w = 1.0;
    bool hdB901 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB909;
    if (hdB901)
    {
        hdB909 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB909 = hdB901;
    }
    if (hdB909)
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
    bool _3137 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3147;
    if (_3137)
    {
        _3147 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3147 = _3137;
    }
    if (_3147)
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
        bool _3172 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3187;
        if (!_3172)
        {
            _3187 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3187 = _3172;
        }
        if (_3187)
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
