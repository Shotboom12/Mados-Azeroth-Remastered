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
float _RESERVED_IDENTIFIER_FIXUP_3694;
vec4 _RESERVED_IDENTIFIER_FIXUP_3695;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1155 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1159 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1163 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1167 = hdTex3(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1177 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1155, _RESERVED_IDENTIFIER_FIXUP_1159, _RESERVED_IDENTIFIER_FIXUP_1167.xxxx), _RESERVED_IDENTIFIER_FIXUP_1163, _RESERVED_IDENTIFIER_FIXUP_1167.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1184 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2947 = _RESERVED_IDENTIFIER_FIXUP_1159;
    _RESERVED_IDENTIFIER_FIXUP_2947.x = _RESERVED_IDENTIFIER_FIXUP_1184;
    float _RESERVED_IDENTIFIER_FIXUP_1190 = clamp((_RESERVED_IDENTIFIER_FIXUP_1184 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2947.x = _RESERVED_IDENTIFIER_FIXUP_1190;
    float _RESERVED_IDENTIFIER_FIXUP_1196 = ((-_RESERVED_IDENTIFIER_FIXUP_1190) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2947.x = _RESERVED_IDENTIFIER_FIXUP_1196;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3696;
    if (_RESERVED_IDENTIFIER_FIXUP_1196 != (-_RESERVED_IDENTIFIER_FIXUP_1196))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1208 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1208.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1208.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1214 = hdLod5(param_4, param_5);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1218 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3159 = _RESERVED_IDENTIFIER_FIXUP_1214;
        _RESERVED_IDENTIFIER_FIXUP_3159.y = _RESERVED_IDENTIFIER_FIXUP_1218.x;
        _RESERVED_IDENTIFIER_FIXUP_3159.z = _RESERVED_IDENTIFIER_FIXUP_1218.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_3159.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3163;
        _RESERVED_IDENTIFIER_FIXUP_3163.x = _RESERVED_IDENTIFIER_FIXUP_1228.x;
        _RESERVED_IDENTIFIER_FIXUP_3163.y = _RESERVED_IDENTIFIER_FIXUP_1228.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1235 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1235.y;
        _RESERVED_IDENTIFIER_FIXUP_3163.w = _RESERVED_IDENTIFIER_FIXUP_1239;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3163.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1239;
        float _RESERVED_IDENTIFIER_FIXUP_1250 = _RESERVED_IDENTIFIER_FIXUP_1214.x + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1250;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_3159.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3176;
        _RESERVED_IDENTIFIER_FIXUP_3176.x = _RESERVED_IDENTIFIER_FIXUP_1257.x;
        _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1257.y;
        _RESERVED_IDENTIFIER_FIXUP_3176.w = _RESERVED_IDENTIFIER_FIXUP_1239;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3176.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1239;
        float _RESERVED_IDENTIFIER_FIXUP_1279 = _RESERVED_IDENTIFIER_FIXUP_1250 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1279;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_3159.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3189;
        _RESERVED_IDENTIFIER_FIXUP_3189.x = _RESERVED_IDENTIFIER_FIXUP_1286.x;
        _RESERVED_IDENTIFIER_FIXUP_3189.y = _RESERVED_IDENTIFIER_FIXUP_1286.y;
        _RESERVED_IDENTIFIER_FIXUP_3189.w = _RESERVED_IDENTIFIER_FIXUP_1239;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3189.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1239;
        float _RESERVED_IDENTIFIER_FIXUP_1308 = _RESERVED_IDENTIFIER_FIXUP_1279 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1308;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_3159.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3202;
        _RESERVED_IDENTIFIER_FIXUP_3202.x = _RESERVED_IDENTIFIER_FIXUP_1315.x;
        _RESERVED_IDENTIFIER_FIXUP_3202.y = _RESERVED_IDENTIFIER_FIXUP_1315.y;
        _RESERVED_IDENTIFIER_FIXUP_3202.w = _RESERVED_IDENTIFIER_FIXUP_1239;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3202.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1239;
        float _RESERVED_IDENTIFIER_FIXUP_1337 = _RESERVED_IDENTIFIER_FIXUP_1308 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1337;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_3159.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3215;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1344.x;
        _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_1344.y;
        _RESERVED_IDENTIFIER_FIXUP_3215.w = _RESERVED_IDENTIFIER_FIXUP_1239;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3215.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1239;
        float _RESERVED_IDENTIFIER_FIXUP_1366 = _RESERVED_IDENTIFIER_FIXUP_1337 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1366;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1373 = _RESERVED_IDENTIFIER_FIXUP_3159.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
        _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_1373.x;
        _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_1373.y;
        _RESERVED_IDENTIFIER_FIXUP_3228.w = _RESERVED_IDENTIFIER_FIXUP_1239;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3228.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1239;
        float _RESERVED_IDENTIFIER_FIXUP_1395 = _RESERVED_IDENTIFIER_FIXUP_1366 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1395;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1402 = _RESERVED_IDENTIFIER_FIXUP_3159.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3241;
        _RESERVED_IDENTIFIER_FIXUP_3241.x = _RESERVED_IDENTIFIER_FIXUP_1402.x;
        _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_1402.y;
        _RESERVED_IDENTIFIER_FIXUP_3241.w = _RESERVED_IDENTIFIER_FIXUP_1239;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3241.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1239;
        float _RESERVED_IDENTIFIER_FIXUP_1424 = _RESERVED_IDENTIFIER_FIXUP_1395 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1424;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1431 = _RESERVED_IDENTIFIER_FIXUP_3159.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3254;
        _RESERVED_IDENTIFIER_FIXUP_3254.x = _RESERVED_IDENTIFIER_FIXUP_1431.x;
        _RESERVED_IDENTIFIER_FIXUP_3254.y = _RESERVED_IDENTIFIER_FIXUP_1431.y;
        _RESERVED_IDENTIFIER_FIXUP_3254.w = _RESERVED_IDENTIFIER_FIXUP_1239;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3254.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1239;
        float _RESERVED_IDENTIFIER_FIXUP_1453 = _RESERVED_IDENTIFIER_FIXUP_1424 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1453;
        _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1453 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3696 = _RESERVED_IDENTIFIER_FIXUP_3159;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1466 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2947.y = _RESERVED_IDENTIFIER_FIXUP_1466;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3697;
        if (_RESERVED_IDENTIFIER_FIXUP_1466 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1475 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1485 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1487 = _RESERVED_IDENTIFIER_FIXUP_1485.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3099 = _RESERVED_IDENTIFIER_FIXUP_2947;
            _RESERVED_IDENTIFIER_FIXUP_3099.y = _RESERVED_IDENTIFIER_FIXUP_1487;
            _RESERVED_IDENTIFIER_FIXUP_3099.z = _RESERVED_IDENTIFIER_FIXUP_1485.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_3099.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3103;
            _RESERVED_IDENTIFIER_FIXUP_3103.x = _RESERVED_IDENTIFIER_FIXUP_1495.x;
            _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1495.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1502 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_1502.y;
            _RESERVED_IDENTIFIER_FIXUP_3103.w = _RESERVED_IDENTIFIER_FIXUP_1506;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1475.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1475.w;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3103.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1506;
            float _RESERVED_IDENTIFIER_FIXUP_1517 = hdLod6(param_22, param_23).x + hdLod6(param_24, param_25).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3719 = vec4(_RESERVED_IDENTIFIER_FIXUP_1196, _RESERVED_IDENTIFIER_FIXUP_1487, _RESERVED_IDENTIFIER_FIXUP_1485.y, _RESERVED_IDENTIFIER_FIXUP_1517);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_3719.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3116;
            _RESERVED_IDENTIFIER_FIXUP_3116.x = _RESERVED_IDENTIFIER_FIXUP_1524.x;
            _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1524.y;
            _RESERVED_IDENTIFIER_FIXUP_3116.w = _RESERVED_IDENTIFIER_FIXUP_1506;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3116.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1506;
            float _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1517 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_3719.w = _RESERVED_IDENTIFIER_FIXUP_1546;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1553 = _RESERVED_IDENTIFIER_FIXUP_3719.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3129;
            _RESERVED_IDENTIFIER_FIXUP_3129.x = _RESERVED_IDENTIFIER_FIXUP_1553.x;
            _RESERVED_IDENTIFIER_FIXUP_3129.y = _RESERVED_IDENTIFIER_FIXUP_1553.y;
            _RESERVED_IDENTIFIER_FIXUP_3129.w = _RESERVED_IDENTIFIER_FIXUP_1506;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3129.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1506;
            float _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_1546 + hdLod6(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_3719.w = _RESERVED_IDENTIFIER_FIXUP_1575;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1582 = _RESERVED_IDENTIFIER_FIXUP_3719.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3142;
            _RESERVED_IDENTIFIER_FIXUP_3142.x = _RESERVED_IDENTIFIER_FIXUP_1582.x;
            _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1582.y;
            _RESERVED_IDENTIFIER_FIXUP_3142.w = _RESERVED_IDENTIFIER_FIXUP_1506;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3142.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1506;
            float _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_1575 + hdLod6(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_3719.y = _RESERVED_IDENTIFIER_FIXUP_1604;
            _RESERVED_IDENTIFIER_FIXUP_3719.x = _RESERVED_IDENTIFIER_FIXUP_1604 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3697 = _RESERVED_IDENTIFIER_FIXUP_3719;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1617 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2964 = _RESERVED_IDENTIFIER_FIXUP_2947;
            _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1617;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3698;
            if (_RESERVED_IDENTIFIER_FIXUP_1617 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1626 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1636 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1638 = _RESERVED_IDENTIFIER_FIXUP_1636.x;
                _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1638;
                _RESERVED_IDENTIFIER_FIXUP_2964.z = _RESERVED_IDENTIFIER_FIXUP_1636.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1646 = _RESERVED_IDENTIFIER_FIXUP_2964.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3043;
                _RESERVED_IDENTIFIER_FIXUP_3043.x = _RESERVED_IDENTIFIER_FIXUP_1646.x;
                _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1646.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1653 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1657 = _RESERVED_IDENTIFIER_FIXUP_1653.y;
                _RESERVED_IDENTIFIER_FIXUP_3043.w = _RESERVED_IDENTIFIER_FIXUP_1657;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_1626.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1626.w;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3043.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1657;
                float _RESERVED_IDENTIFIER_FIXUP_1668 = hdLod7(param_32, param_33).x + hdLod7(param_34, param_35).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3718 = vec4(_RESERVED_IDENTIFIER_FIXUP_1196, _RESERVED_IDENTIFIER_FIXUP_1638, _RESERVED_IDENTIFIER_FIXUP_1636.y, _RESERVED_IDENTIFIER_FIXUP_1668);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1675 = _RESERVED_IDENTIFIER_FIXUP_3718.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3056;
                _RESERVED_IDENTIFIER_FIXUP_3056.x = _RESERVED_IDENTIFIER_FIXUP_1675.x;
                _RESERVED_IDENTIFIER_FIXUP_3056.y = _RESERVED_IDENTIFIER_FIXUP_1675.y;
                _RESERVED_IDENTIFIER_FIXUP_3056.w = _RESERVED_IDENTIFIER_FIXUP_1657;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3056.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1657;
                float _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_1668 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_3718.w = _RESERVED_IDENTIFIER_FIXUP_1697;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_3718.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3069;
                _RESERVED_IDENTIFIER_FIXUP_3069.x = _RESERVED_IDENTIFIER_FIXUP_1704.x;
                _RESERVED_IDENTIFIER_FIXUP_3069.y = _RESERVED_IDENTIFIER_FIXUP_1704.y;
                _RESERVED_IDENTIFIER_FIXUP_3069.w = _RESERVED_IDENTIFIER_FIXUP_1657;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3069.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1657;
                float _RESERVED_IDENTIFIER_FIXUP_1726 = _RESERVED_IDENTIFIER_FIXUP_1697 + hdLod7(param_38, param_39).x;
                _RESERVED_IDENTIFIER_FIXUP_3718.w = _RESERVED_IDENTIFIER_FIXUP_1726;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1733 = _RESERVED_IDENTIFIER_FIXUP_3718.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3082;
                _RESERVED_IDENTIFIER_FIXUP_3082.x = _RESERVED_IDENTIFIER_FIXUP_1733.x;
                _RESERVED_IDENTIFIER_FIXUP_3082.y = _RESERVED_IDENTIFIER_FIXUP_1733.y;
                _RESERVED_IDENTIFIER_FIXUP_3082.w = _RESERVED_IDENTIFIER_FIXUP_1657;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3082.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1657;
                float _RESERVED_IDENTIFIER_FIXUP_1755 = _RESERVED_IDENTIFIER_FIXUP_1726 + hdLod7(param_40, param_41).x;
                _RESERVED_IDENTIFIER_FIXUP_3718.y = _RESERVED_IDENTIFIER_FIXUP_1755;
                _RESERVED_IDENTIFIER_FIXUP_3718.x = _RESERVED_IDENTIFIER_FIXUP_1755 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3698 = _RESERVED_IDENTIFIER_FIXUP_3718;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1771 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1775 = _RESERVED_IDENTIFIER_FIXUP_1771.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1786 = vec4(_RESERVED_IDENTIFIER_FIXUP_1771.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1775).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3715 = vec4(_RESERVED_IDENTIFIER_FIXUP_1786 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1775);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1823 = _RESERVED_IDENTIFIER_FIXUP_1786 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2997 = _RESERVED_IDENTIFIER_FIXUP_3715;
                _RESERVED_IDENTIFIER_FIXUP_2997.x = _RESERVED_IDENTIFIER_FIXUP_1823.x;
                _RESERVED_IDENTIFIER_FIXUP_2997.y = _RESERVED_IDENTIFIER_FIXUP_1823.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1845 = _RESERVED_IDENTIFIER_FIXUP_1786 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3006 = _RESERVED_IDENTIFIER_FIXUP_2997;
                _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1845.x;
                _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1845.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1867 = _RESERVED_IDENTIFIER_FIXUP_1786 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3015 = _RESERVED_IDENTIFIER_FIXUP_3006;
                _RESERVED_IDENTIFIER_FIXUP_3015.x = _RESERVED_IDENTIFIER_FIXUP_1867.x;
                _RESERVED_IDENTIFIER_FIXUP_3015.y = _RESERVED_IDENTIFIER_FIXUP_1867.y;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_1786;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1775;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3715.xy;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1775;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2997.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1775;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3006.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1775;
                vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3015.xy;
                float param_51 = _RESERVED_IDENTIFIER_FIXUP_1775;
                float _RESERVED_IDENTIFIER_FIXUP_1882 = (((hdLod8(param_42, param_43).x + hdLod8(param_44, param_45).x) + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + hdLod8(param_50, param_51).x;
                float _RESERVED_IDENTIFIER_FIXUP_1896 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1901 = (_RESERVED_IDENTIFIER_FIXUP_1882 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3698 = vec4((_RESERVED_IDENTIFIER_FIXUP_1896 * _RESERVED_IDENTIFIER_FIXUP_1901) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1896, _RESERVED_IDENTIFIER_FIXUP_1901, _RESERVED_IDENTIFIER_FIXUP_1882);
            }
            _RESERVED_IDENTIFIER_FIXUP_3697 = _RESERVED_IDENTIFIER_FIXUP_3698;
        }
        _RESERVED_IDENTIFIER_FIXUP_3696 = _RESERVED_IDENTIFIER_FIXUP_3697;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3273 = _RESERVED_IDENTIFIER_FIXUP_3696;
    _RESERVED_IDENTIFIER_FIXUP_3273.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1929 = _RESERVED_IDENTIFIER_FIXUP_1177.xyz * _RESERVED_IDENTIFIER_FIXUP_3273.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3275 = _RESERVED_IDENTIFIER_FIXUP_1177;
    _RESERVED_IDENTIFIER_FIXUP_3275.x = _RESERVED_IDENTIFIER_FIXUP_1929.x;
    _RESERVED_IDENTIFIER_FIXUP_3275.y = _RESERVED_IDENTIFIER_FIXUP_1929.y;
    _RESERVED_IDENTIFIER_FIXUP_3275.z = _RESERVED_IDENTIFIER_FIXUP_1929.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1940 = _RESERVED_IDENTIFIER_FIXUP_3275.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3694).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3281 = _RESERVED_IDENTIFIER_FIXUP_3275;
    _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_1940.x;
    _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_1940.y;
    _RESERVED_IDENTIFIER_FIXUP_3281.z = _RESERVED_IDENTIFIER_FIXUP_1940.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1951 = _RESERVED_IDENTIFIER_FIXUP_3281.xyz + _RESERVED_IDENTIFIER_FIXUP_3281.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3287 = _RESERVED_IDENTIFIER_FIXUP_3281;
    _RESERVED_IDENTIFIER_FIXUP_3287.x = _RESERVED_IDENTIFIER_FIXUP_1951.x;
    _RESERVED_IDENTIFIER_FIXUP_3287.y = _RESERVED_IDENTIFIER_FIXUP_1951.y;
    _RESERVED_IDENTIFIER_FIXUP_3287.z = _RESERVED_IDENTIFIER_FIXUP_1951.z;
    _RESERVED_IDENTIFIER_FIXUP_3273.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3273.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3273.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1976 = (_RESERVED_IDENTIFIER_FIXUP_3273.yzw * _RESERVED_IDENTIFIER_FIXUP_3273.xxx) + _RESERVED_IDENTIFIER_FIXUP_3287.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3299 = _RESERVED_IDENTIFIER_FIXUP_3287;
    _RESERVED_IDENTIFIER_FIXUP_3299.x = _RESERVED_IDENTIFIER_FIXUP_1976.x;
    _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_1976.y;
    _RESERVED_IDENTIFIER_FIXUP_3299.z = _RESERVED_IDENTIFIER_FIXUP_1976.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1989 = _RESERVED_IDENTIFIER_FIXUP_3299.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_3299;
    _RESERVED_IDENTIFIER_FIXUP_3305.x = _RESERVED_IDENTIFIER_FIXUP_1989.x;
    _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_1989.y;
    _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_1989.z;
    vec2 param_52 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2044 = hdTex0(param_52);
    vec2 param_53 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2048 = hdTex1(param_53);
    vec2 param_54 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2052 = hdTex2(param_54);
    vec2 param_55 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2056 = hdTex3(param_55);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2066 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2044, _RESERVED_IDENTIFIER_FIXUP_2048, _RESERVED_IDENTIFIER_FIXUP_2056.xxxx), _RESERVED_IDENTIFIER_FIXUP_2052, _RESERVED_IDENTIFIER_FIXUP_2056.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3321 = _RESERVED_IDENTIFIER_FIXUP_2048;
    _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_1184;
    float _RESERVED_IDENTIFIER_FIXUP_2079 = clamp((_RESERVED_IDENTIFIER_FIXUP_1184 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_2079;
    float _RESERVED_IDENTIFIER_FIXUP_2085 = ((-_RESERVED_IDENTIFIER_FIXUP_2079) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_2085;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3705;
    if (_RESERVED_IDENTIFIER_FIXUP_2085 != (-_RESERVED_IDENTIFIER_FIXUP_2085))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2097 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2097.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2097.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2103 = hdLod5(param_56, param_57);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2107 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3533 = _RESERVED_IDENTIFIER_FIXUP_2103;
        _RESERVED_IDENTIFIER_FIXUP_3533.y = _RESERVED_IDENTIFIER_FIXUP_2107.x;
        _RESERVED_IDENTIFIER_FIXUP_3533.z = _RESERVED_IDENTIFIER_FIXUP_2107.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2117 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3537;
        _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_2117.x;
        _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_2117.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2124 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2128 = _RESERVED_IDENTIFIER_FIXUP_2124.y;
        _RESERVED_IDENTIFIER_FIXUP_3537.w = _RESERVED_IDENTIFIER_FIXUP_2128;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3537.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2128;
        float _RESERVED_IDENTIFIER_FIXUP_2139 = _RESERVED_IDENTIFIER_FIXUP_2103.x + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2139;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2146 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3550;
        _RESERVED_IDENTIFIER_FIXUP_3550.x = _RESERVED_IDENTIFIER_FIXUP_2146.x;
        _RESERVED_IDENTIFIER_FIXUP_3550.y = _RESERVED_IDENTIFIER_FIXUP_2146.y;
        _RESERVED_IDENTIFIER_FIXUP_3550.w = _RESERVED_IDENTIFIER_FIXUP_2128;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3550.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2128;
        float _RESERVED_IDENTIFIER_FIXUP_2168 = _RESERVED_IDENTIFIER_FIXUP_2139 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2168;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2175 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3563;
        _RESERVED_IDENTIFIER_FIXUP_3563.x = _RESERVED_IDENTIFIER_FIXUP_2175.x;
        _RESERVED_IDENTIFIER_FIXUP_3563.y = _RESERVED_IDENTIFIER_FIXUP_2175.y;
        _RESERVED_IDENTIFIER_FIXUP_3563.w = _RESERVED_IDENTIFIER_FIXUP_2128;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3563.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2128;
        float _RESERVED_IDENTIFIER_FIXUP_2197 = _RESERVED_IDENTIFIER_FIXUP_2168 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2197;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2204 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3576;
        _RESERVED_IDENTIFIER_FIXUP_3576.x = _RESERVED_IDENTIFIER_FIXUP_2204.x;
        _RESERVED_IDENTIFIER_FIXUP_3576.y = _RESERVED_IDENTIFIER_FIXUP_2204.y;
        _RESERVED_IDENTIFIER_FIXUP_3576.w = _RESERVED_IDENTIFIER_FIXUP_2128;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3576.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2128;
        float _RESERVED_IDENTIFIER_FIXUP_2226 = _RESERVED_IDENTIFIER_FIXUP_2197 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2226;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2233 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3589;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_2233.x;
        _RESERVED_IDENTIFIER_FIXUP_3589.y = _RESERVED_IDENTIFIER_FIXUP_2233.y;
        _RESERVED_IDENTIFIER_FIXUP_3589.w = _RESERVED_IDENTIFIER_FIXUP_2128;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3589.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2128;
        float _RESERVED_IDENTIFIER_FIXUP_2255 = _RESERVED_IDENTIFIER_FIXUP_2226 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2255;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2262 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3602;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2262.x;
        _RESERVED_IDENTIFIER_FIXUP_3602.y = _RESERVED_IDENTIFIER_FIXUP_2262.y;
        _RESERVED_IDENTIFIER_FIXUP_3602.w = _RESERVED_IDENTIFIER_FIXUP_2128;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3602.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2128;
        float _RESERVED_IDENTIFIER_FIXUP_2284 = _RESERVED_IDENTIFIER_FIXUP_2255 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2284;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2291 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3615;
        _RESERVED_IDENTIFIER_FIXUP_3615.x = _RESERVED_IDENTIFIER_FIXUP_2291.x;
        _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_2291.y;
        _RESERVED_IDENTIFIER_FIXUP_3615.w = _RESERVED_IDENTIFIER_FIXUP_2128;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3615.xy;
        float param_71 = _RESERVED_IDENTIFIER_FIXUP_2128;
        float _RESERVED_IDENTIFIER_FIXUP_2313 = _RESERVED_IDENTIFIER_FIXUP_2284 + hdLod5(param_70, param_71).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2313;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2320 = _RESERVED_IDENTIFIER_FIXUP_3533.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3628;
        _RESERVED_IDENTIFIER_FIXUP_3628.x = _RESERVED_IDENTIFIER_FIXUP_2320.x;
        _RESERVED_IDENTIFIER_FIXUP_3628.y = _RESERVED_IDENTIFIER_FIXUP_2320.y;
        _RESERVED_IDENTIFIER_FIXUP_3628.w = _RESERVED_IDENTIFIER_FIXUP_2128;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3628.xy;
        float param_73 = _RESERVED_IDENTIFIER_FIXUP_2128;
        float _RESERVED_IDENTIFIER_FIXUP_2342 = _RESERVED_IDENTIFIER_FIXUP_2313 + hdLod5(param_72, param_73).x;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2342;
        _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2342 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3705 = _RESERVED_IDENTIFIER_FIXUP_3533;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2355 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_2355;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3706;
        if (_RESERVED_IDENTIFIER_FIXUP_2355 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2364 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2374 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2376 = _RESERVED_IDENTIFIER_FIXUP_2374.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3473 = _RESERVED_IDENTIFIER_FIXUP_3321;
            _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2376;
            _RESERVED_IDENTIFIER_FIXUP_3473.z = _RESERVED_IDENTIFIER_FIXUP_2374.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2384 = _RESERVED_IDENTIFIER_FIXUP_3473.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3477;
            _RESERVED_IDENTIFIER_FIXUP_3477.x = _RESERVED_IDENTIFIER_FIXUP_2384.x;
            _RESERVED_IDENTIFIER_FIXUP_3477.y = _RESERVED_IDENTIFIER_FIXUP_2384.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2391 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2395 = _RESERVED_IDENTIFIER_FIXUP_2391.y;
            _RESERVED_IDENTIFIER_FIXUP_3477.w = _RESERVED_IDENTIFIER_FIXUP_2395;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_2364.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2364.w;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3477.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2395;
            float _RESERVED_IDENTIFIER_FIXUP_2406 = hdLod6(param_74, param_75).x + hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3726 = vec4(_RESERVED_IDENTIFIER_FIXUP_2085, _RESERVED_IDENTIFIER_FIXUP_2376, _RESERVED_IDENTIFIER_FIXUP_2374.y, _RESERVED_IDENTIFIER_FIXUP_2406);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2413 = _RESERVED_IDENTIFIER_FIXUP_3726.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3490;
            _RESERVED_IDENTIFIER_FIXUP_3490.x = _RESERVED_IDENTIFIER_FIXUP_2413.x;
            _RESERVED_IDENTIFIER_FIXUP_3490.y = _RESERVED_IDENTIFIER_FIXUP_2413.y;
            _RESERVED_IDENTIFIER_FIXUP_3490.w = _RESERVED_IDENTIFIER_FIXUP_2395;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3490.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2395;
            float _RESERVED_IDENTIFIER_FIXUP_2435 = _RESERVED_IDENTIFIER_FIXUP_2406 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3726.w = _RESERVED_IDENTIFIER_FIXUP_2435;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2442 = _RESERVED_IDENTIFIER_FIXUP_3726.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3503;
            _RESERVED_IDENTIFIER_FIXUP_3503.x = _RESERVED_IDENTIFIER_FIXUP_2442.x;
            _RESERVED_IDENTIFIER_FIXUP_3503.y = _RESERVED_IDENTIFIER_FIXUP_2442.y;
            _RESERVED_IDENTIFIER_FIXUP_3503.w = _RESERVED_IDENTIFIER_FIXUP_2395;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3503.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2395;
            float _RESERVED_IDENTIFIER_FIXUP_2464 = _RESERVED_IDENTIFIER_FIXUP_2435 + hdLod6(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3726.w = _RESERVED_IDENTIFIER_FIXUP_2464;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2471 = _RESERVED_IDENTIFIER_FIXUP_3726.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3516;
            _RESERVED_IDENTIFIER_FIXUP_3516.x = _RESERVED_IDENTIFIER_FIXUP_2471.x;
            _RESERVED_IDENTIFIER_FIXUP_3516.y = _RESERVED_IDENTIFIER_FIXUP_2471.y;
            _RESERVED_IDENTIFIER_FIXUP_3516.w = _RESERVED_IDENTIFIER_FIXUP_2395;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3516.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2395;
            float _RESERVED_IDENTIFIER_FIXUP_2493 = _RESERVED_IDENTIFIER_FIXUP_2464 + hdLod6(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3726.y = _RESERVED_IDENTIFIER_FIXUP_2493;
            _RESERVED_IDENTIFIER_FIXUP_3726.x = _RESERVED_IDENTIFIER_FIXUP_2493 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3706 = _RESERVED_IDENTIFIER_FIXUP_3726;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2506 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3338 = _RESERVED_IDENTIFIER_FIXUP_3321;
            _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2506;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3707;
            if (_RESERVED_IDENTIFIER_FIXUP_2506 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2515 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2525 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2527 = _RESERVED_IDENTIFIER_FIXUP_2525.x;
                _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2527;
                _RESERVED_IDENTIFIER_FIXUP_3338.z = _RESERVED_IDENTIFIER_FIXUP_2525.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2535 = _RESERVED_IDENTIFIER_FIXUP_3338.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3417;
                _RESERVED_IDENTIFIER_FIXUP_3417.x = _RESERVED_IDENTIFIER_FIXUP_2535.x;
                _RESERVED_IDENTIFIER_FIXUP_3417.y = _RESERVED_IDENTIFIER_FIXUP_2535.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2542 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2546 = _RESERVED_IDENTIFIER_FIXUP_2542.y;
                _RESERVED_IDENTIFIER_FIXUP_3417.w = _RESERVED_IDENTIFIER_FIXUP_2546;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_2515.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2515.w;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3417.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2546;
                float _RESERVED_IDENTIFIER_FIXUP_2557 = hdLod7(param_84, param_85).x + hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3725 = vec4(_RESERVED_IDENTIFIER_FIXUP_2085, _RESERVED_IDENTIFIER_FIXUP_2527, _RESERVED_IDENTIFIER_FIXUP_2525.y, _RESERVED_IDENTIFIER_FIXUP_2557);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2564 = _RESERVED_IDENTIFIER_FIXUP_3725.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3430;
                _RESERVED_IDENTIFIER_FIXUP_3430.x = _RESERVED_IDENTIFIER_FIXUP_2564.x;
                _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_2564.y;
                _RESERVED_IDENTIFIER_FIXUP_3430.w = _RESERVED_IDENTIFIER_FIXUP_2546;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3430.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2546;
                float _RESERVED_IDENTIFIER_FIXUP_2586 = _RESERVED_IDENTIFIER_FIXUP_2557 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3725.w = _RESERVED_IDENTIFIER_FIXUP_2586;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2593 = _RESERVED_IDENTIFIER_FIXUP_3725.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3443;
                _RESERVED_IDENTIFIER_FIXUP_3443.x = _RESERVED_IDENTIFIER_FIXUP_2593.x;
                _RESERVED_IDENTIFIER_FIXUP_3443.y = _RESERVED_IDENTIFIER_FIXUP_2593.y;
                _RESERVED_IDENTIFIER_FIXUP_3443.w = _RESERVED_IDENTIFIER_FIXUP_2546;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3443.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2546;
                float _RESERVED_IDENTIFIER_FIXUP_2615 = _RESERVED_IDENTIFIER_FIXUP_2586 + hdLod7(param_90, param_91).x;
                _RESERVED_IDENTIFIER_FIXUP_3725.w = _RESERVED_IDENTIFIER_FIXUP_2615;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2622 = _RESERVED_IDENTIFIER_FIXUP_3725.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3456;
                _RESERVED_IDENTIFIER_FIXUP_3456.x = _RESERVED_IDENTIFIER_FIXUP_2622.x;
                _RESERVED_IDENTIFIER_FIXUP_3456.y = _RESERVED_IDENTIFIER_FIXUP_2622.y;
                _RESERVED_IDENTIFIER_FIXUP_3456.w = _RESERVED_IDENTIFIER_FIXUP_2546;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3456.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2546;
                float _RESERVED_IDENTIFIER_FIXUP_2644 = _RESERVED_IDENTIFIER_FIXUP_2615 + hdLod7(param_92, param_93).x;
                _RESERVED_IDENTIFIER_FIXUP_3725.y = _RESERVED_IDENTIFIER_FIXUP_2644;
                _RESERVED_IDENTIFIER_FIXUP_3725.x = _RESERVED_IDENTIFIER_FIXUP_2644 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3707 = _RESERVED_IDENTIFIER_FIXUP_3725;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2660 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2664 = _RESERVED_IDENTIFIER_FIXUP_2660.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2675 = vec4(_RESERVED_IDENTIFIER_FIXUP_2660.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2664).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3722 = vec4(_RESERVED_IDENTIFIER_FIXUP_2675 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2664);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2712 = _RESERVED_IDENTIFIER_FIXUP_2675 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_3722;
                _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_2712.x;
                _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_2712.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2734 = _RESERVED_IDENTIFIER_FIXUP_2675 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3380 = _RESERVED_IDENTIFIER_FIXUP_3371;
                _RESERVED_IDENTIFIER_FIXUP_3380.x = _RESERVED_IDENTIFIER_FIXUP_2734.x;
                _RESERVED_IDENTIFIER_FIXUP_3380.y = _RESERVED_IDENTIFIER_FIXUP_2734.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2756 = _RESERVED_IDENTIFIER_FIXUP_2675 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3389 = _RESERVED_IDENTIFIER_FIXUP_3380;
                _RESERVED_IDENTIFIER_FIXUP_3389.x = _RESERVED_IDENTIFIER_FIXUP_2756.x;
                _RESERVED_IDENTIFIER_FIXUP_3389.y = _RESERVED_IDENTIFIER_FIXUP_2756.y;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_2675;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2664;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3722.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2664;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3371.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2664;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3380.xy;
                float param_101 = _RESERVED_IDENTIFIER_FIXUP_2664;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3389.xy;
                float param_103 = _RESERVED_IDENTIFIER_FIXUP_2664;
                float _RESERVED_IDENTIFIER_FIXUP_2771 = (((hdLod8(param_94, param_95).x + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + hdLod8(param_100, param_101).x) + hdLod8(param_102, param_103).x;
                float _RESERVED_IDENTIFIER_FIXUP_2785 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2790 = (_RESERVED_IDENTIFIER_FIXUP_2771 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3707 = vec4((_RESERVED_IDENTIFIER_FIXUP_2785 * _RESERVED_IDENTIFIER_FIXUP_2790) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2785, _RESERVED_IDENTIFIER_FIXUP_2790, _RESERVED_IDENTIFIER_FIXUP_2771);
            }
            _RESERVED_IDENTIFIER_FIXUP_3706 = _RESERVED_IDENTIFIER_FIXUP_3707;
        }
        _RESERVED_IDENTIFIER_FIXUP_3705 = _RESERVED_IDENTIFIER_FIXUP_3706;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2805 = (_RESERVED_IDENTIFIER_FIXUP_3705.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3645 = _RESERVED_IDENTIFIER_FIXUP_3705;
    _RESERVED_IDENTIFIER_FIXUP_3645.y = _RESERVED_IDENTIFIER_FIXUP_2805;
    _RESERVED_IDENTIFIER_FIXUP_3645.y = _RESERVED_IDENTIFIER_FIXUP_2805;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2818 = _RESERVED_IDENTIFIER_FIXUP_2066.xyz * _RESERVED_IDENTIFIER_FIXUP_3645.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3651 = _RESERVED_IDENTIFIER_FIXUP_2066;
    _RESERVED_IDENTIFIER_FIXUP_3651.x = _RESERVED_IDENTIFIER_FIXUP_2818.x;
    _RESERVED_IDENTIFIER_FIXUP_3651.y = _RESERVED_IDENTIFIER_FIXUP_2818.y;
    _RESERVED_IDENTIFIER_FIXUP_3651.z = _RESERVED_IDENTIFIER_FIXUP_2818.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2829 = _RESERVED_IDENTIFIER_FIXUP_3651.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3657 = _RESERVED_IDENTIFIER_FIXUP_3651;
    _RESERVED_IDENTIFIER_FIXUP_3657.x = _RESERVED_IDENTIFIER_FIXUP_2829.x;
    _RESERVED_IDENTIFIER_FIXUP_3657.y = _RESERVED_IDENTIFIER_FIXUP_2829.y;
    _RESERVED_IDENTIFIER_FIXUP_3657.z = _RESERVED_IDENTIFIER_FIXUP_2829.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2840 = _RESERVED_IDENTIFIER_FIXUP_3657.xyz + _RESERVED_IDENTIFIER_FIXUP_3657.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3663 = _RESERVED_IDENTIFIER_FIXUP_3657;
    _RESERVED_IDENTIFIER_FIXUP_3663.x = _RESERVED_IDENTIFIER_FIXUP_2840.x;
    _RESERVED_IDENTIFIER_FIXUP_3663.y = _RESERVED_IDENTIFIER_FIXUP_2840.y;
    _RESERVED_IDENTIFIER_FIXUP_3663.z = _RESERVED_IDENTIFIER_FIXUP_2840.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2851 = _RESERVED_IDENTIFIER_FIXUP_3663.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3645.y = _RESERVED_IDENTIFIER_FIXUP_2851.x;
    _RESERVED_IDENTIFIER_FIXUP_3645.z = _RESERVED_IDENTIFIER_FIXUP_2851.y;
    _RESERVED_IDENTIFIER_FIXUP_3645.w = _RESERVED_IDENTIFIER_FIXUP_2851.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2865 = (_RESERVED_IDENTIFIER_FIXUP_3645.yzw * _RESERVED_IDENTIFIER_FIXUP_3645.xxx) + _RESERVED_IDENTIFIER_FIXUP_3663.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3675 = _RESERVED_IDENTIFIER_FIXUP_3663;
    _RESERVED_IDENTIFIER_FIXUP_3675.x = _RESERVED_IDENTIFIER_FIXUP_2865.x;
    _RESERVED_IDENTIFIER_FIXUP_3675.y = _RESERVED_IDENTIFIER_FIXUP_2865.y;
    _RESERVED_IDENTIFIER_FIXUP_3675.z = _RESERVED_IDENTIFIER_FIXUP_2865.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2878 = _RESERVED_IDENTIFIER_FIXUP_3675.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3681 = _RESERVED_IDENTIFIER_FIXUP_3675;
    _RESERVED_IDENTIFIER_FIXUP_3681.x = _RESERVED_IDENTIFIER_FIXUP_2878.x;
    _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2878.y;
    _RESERVED_IDENTIFIER_FIXUP_3681.z = _RESERVED_IDENTIFIER_FIXUP_2878.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3681.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1014 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1023;
    if (_RESERVED_IDENTIFIER_FIXUP_1014)
    {
        _RESERVED_IDENTIFIER_FIXUP_1023 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1023 = _RESERVED_IDENTIFIER_FIXUP_1014;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1023)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1060 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3305.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1087 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2937;
    if (_RESERVED_IDENTIFIER_FIXUP_1060 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2937 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1060), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1087);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2937 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1087);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2937;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2805);
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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
        vec2 hdB138 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB138.x;
        r1.z = hdB138.y;
        vec2 hdB160 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB160.x;
        r2.y = hdB160.y;
        vec2 hdB168 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB168.x;
        r2.w = hdB168.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.x += r2.x;
        vec2 hdB191 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB191.x;
        r2.y = hdB191.y;
        vec2 hdB198 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB198.x;
        r2.w = hdB198.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.x += r2.x;
        vec2 hdB221 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB221.x;
        r2.y = hdB221.y;
        vec2 hdB228 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB228.x;
        r2.w = hdB228.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.x += r2.x;
        vec2 hdB251 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB251.x;
        r2.y = hdB251.y;
        vec2 hdB258 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB258.x;
        r2.w = hdB258.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.x += r2.x;
        vec2 hdB281 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB281.x;
        r2.y = hdB281.y;
        vec2 hdB288 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB288.x;
        r2.w = hdB288.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r1.x += r2.x;
        vec2 hdB311 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB311.x;
        r2.y = hdB311.y;
        vec2 hdB318 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB318.x;
        r2.w = hdB318.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r1.x += r2.x;
        vec2 hdB341 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB341.x;
        r2.y = hdB341.y;
        vec2 hdB348 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB348.x;
        r2.w = hdB348.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod5(param_18, param_19);
        r1.x += r2.x;
        vec2 hdB371 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB371.x;
        r2.y = hdB371.y;
        vec2 hdB378 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB378.x;
        r2.w = hdB378.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod5(param_20, param_21);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r2.xy;
            float param_23 = r2.w;
            r2 = hdLod6(param_22, param_23);
            vec2 hdB428 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB428.x;
            r1.z = hdB428.y;
            vec2 hdB438 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB438.x;
            r3.y = hdB438.y;
            vec2 hdB445 = vec2(1.0, 0.0) * v6.zx;
            r3.z = hdB445.x;
            r3.w = hdB445.y;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod6(param_24, param_25);
            r1.w = r2.x + r3.x;
            vec2 hdB467 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB467.x;
            r2.y = hdB467.y;
            vec2 hdB474 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB474.x;
            r2.w = hdB474.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r1.w += r2.x;
            vec2 hdB496 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB496.x;
            r2.y = hdB496.y;
            vec2 hdB503 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB503.x;
            r2.w = hdB503.y;
            vec2 param_28 = r2.xy;
            float param_29 = r2.w;
            r2 = hdLod6(param_28, param_29);
            r1.w += r2.x;
            vec2 hdB525 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB525.x;
            r2.y = hdB525.y;
            vec2 hdB532 = vec2(1.0, 0.0) * v6.zx;
            r2.z = hdB532.x;
            r2.w = hdB532.y;
            vec2 param_30 = r2.xy;
            float param_31 = r2.w;
            r2 = hdLod6(param_30, param_31);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_32 = r2.xy;
                float param_33 = r2.w;
                r2 = hdLod7(param_32, param_33);
                vec2 hdB582 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB582.x;
                r1.z = hdB582.y;
                vec2 hdB592 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB592.x;
                r3.y = hdB592.y;
                vec2 hdB599 = vec2(1.0, 0.0) * v7.zx;
                r3.z = hdB599.x;
                r3.w = hdB599.y;
                vec2 param_34 = r3.xy;
                float param_35 = r3.w;
                r3 = hdLod7(param_34, param_35);
                r1.w = r2.x + r3.x;
                vec2 hdB621 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB621.x;
                r2.y = hdB621.y;
                vec2 hdB628 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB628.x;
                r2.w = hdB628.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r1.w += r2.x;
                vec2 hdB650 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB650.x;
                r2.y = hdB650.y;
                vec2 hdB657 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB657.x;
                r2.w = hdB657.y;
                vec2 param_38 = r2.xy;
                float param_39 = r2.w;
                r2 = hdLod7(param_38, param_39);
                r1.w += r2.x;
                vec2 hdB679 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB679.x;
                r2.y = hdB679.y;
                vec2 hdB686 = vec2(1.0, 0.0) * v7.zx;
                r2.z = hdB686.x;
                r2.w = hdB686.y;
                vec2 param_40 = r2.xy;
                float param_41 = r2.w;
                r2 = hdLod7(param_40, param_41);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 hdB718 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB718.x;
                r2.w = hdB718.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                vec2 param_42 = r2.xy;
                float param_43 = r2.w;
                r3 = hdLod8(param_42, param_43);
                vec2 hdB743 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB743.x;
                r4.y = hdB743.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r5 = hdLod8(param_44, param_45);
                r1.w = r3.x + r5.x;
                vec2 hdB771 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB771.x;
                r4.y = hdB771.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r1.w += r3.x;
                vec2 hdB793 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB793.x;
                r4.y = hdB793.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r3 = hdLod8(param_48, param_49);
                r1.w += r3.x;
                vec2 hdB815 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB815.x;
                r4.y = hdB815.y;
                vec2 param_50 = r4.xy;
                float param_51 = r4.w;
                r2 = hdLod8(param_50, param_51);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB869 = r0;
    vec3 hdB873 = hdB869.xyz * r1.yyy;
    r0.x = hdB873.x;
    r0.y = hdB873.y;
    r0.z = hdB873.z;
    vec4 hdB880 = r0;
    vec3 hdB884 = hdB880.xyz * v0.xyz;
    r0.x = hdB884.x;
    r0.y = hdB884.y;
    r0.z = hdB884.z;
    vec4 hdB891 = r0;
    vec4 hdB893 = r0;
    vec3 hdB895 = hdB891.xyz + hdB893.xyz;
    r0.x = hdB895.x;
    r0.y = hdB895.y;
    r0.z = hdB895.z;
    vec3 hdB906 = r0.www * v1.xyz;
    r1.y = hdB906.x;
    r1.z = hdB906.y;
    r1.w = hdB906.z;
    vec4 hdB918 = r0;
    vec3 hdB920 = (r1.yzw * r1.xxx) + hdB918.xyz;
    r0.x = hdB920.x;
    r0.y = hdB920.y;
    r0.z = hdB920.z;
    vec4 hdB927 = r0;
    vec3 hdB934 = hdB927.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB934.x;
    r0.y = hdB934.y;
    r0.z = hdB934.z;
    vec3 hdB949 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB949.x;
    oC0.y = hdB949.y;
    oC0.z = hdB949.z;
    oC0.w = 1.0;
    bool hdB962 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB970;
    if (hdB962)
    {
        hdB970 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB970 = hdB962;
    }
    if (hdB970)
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
    bool _3390 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3400;
    if (_3390)
    {
        _3400 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3400 = _3390;
    }
    if (_3400)
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
        bool _3425 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3440;
        if (!_3425)
        {
            _3440 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3440 = _3425;
        }
        if (_3440)
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
