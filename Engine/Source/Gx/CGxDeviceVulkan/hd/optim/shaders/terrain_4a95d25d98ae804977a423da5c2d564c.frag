#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

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
float _RESERVED_IDENTIFIER_FIXUP_3683;
vec4 _RESERVED_IDENTIFIER_FIXUP_3684;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
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
    bool _58 = hdOverride >= 0;
    bool _78;
    if (_58)
    {
        _78 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _78 = _58;
    }
    vec4 _79;
    if (_78)
    {
        _79 = vec4(float(hdOverride));
    }
    else
    {
        _79 = value;
    }
    return _79;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _96 = hdOverride >= 0;
    bool _105;
    if (_96)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _105 = _96;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1145 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1149 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1153 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1149.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2924 = _RESERVED_IDENTIFIER_FIXUP_1149;
    _RESERVED_IDENTIFIER_FIXUP_2924.x = _RESERVED_IDENTIFIER_FIXUP_1153;
    _RESERVED_IDENTIFIER_FIXUP_2924.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1153;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1163 = _RESERVED_IDENTIFIER_FIXUP_1145 * _RESERVED_IDENTIFIER_FIXUP_2924.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_1170 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2931 = _RESERVED_IDENTIFIER_FIXUP_2924;
    _RESERVED_IDENTIFIER_FIXUP_2931.x = _RESERVED_IDENTIFIER_FIXUP_1170;
    float _RESERVED_IDENTIFIER_FIXUP_1176 = clamp((_RESERVED_IDENTIFIER_FIXUP_1170 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2931.x = _RESERVED_IDENTIFIER_FIXUP_1176;
    float _RESERVED_IDENTIFIER_FIXUP_1182 = ((-_RESERVED_IDENTIFIER_FIXUP_1176) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2931.x = _RESERVED_IDENTIFIER_FIXUP_1182;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3685;
    if (_RESERVED_IDENTIFIER_FIXUP_1182 != (-_RESERVED_IDENTIFIER_FIXUP_1182))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1194 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1194.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1194.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1200 = hdLod5(param_2, param_3);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1204 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3143 = _RESERVED_IDENTIFIER_FIXUP_1200;
        _RESERVED_IDENTIFIER_FIXUP_3143.y = _RESERVED_IDENTIFIER_FIXUP_1204.x;
        _RESERVED_IDENTIFIER_FIXUP_3143.z = _RESERVED_IDENTIFIER_FIXUP_1204.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1214 = _RESERVED_IDENTIFIER_FIXUP_3143.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3147;
        _RESERVED_IDENTIFIER_FIXUP_3147.x = _RESERVED_IDENTIFIER_FIXUP_1214.x;
        _RESERVED_IDENTIFIER_FIXUP_3147.y = _RESERVED_IDENTIFIER_FIXUP_1214.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1221 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_1221.y;
        _RESERVED_IDENTIFIER_FIXUP_3147.w = _RESERVED_IDENTIFIER_FIXUP_1225;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3147.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1225;
        float _RESERVED_IDENTIFIER_FIXUP_1236 = _RESERVED_IDENTIFIER_FIXUP_1200.x + hdLod5(param_4, param_5).x;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1236;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1243 = _RESERVED_IDENTIFIER_FIXUP_3143.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3160;
        _RESERVED_IDENTIFIER_FIXUP_3160.x = _RESERVED_IDENTIFIER_FIXUP_1243.x;
        _RESERVED_IDENTIFIER_FIXUP_3160.y = _RESERVED_IDENTIFIER_FIXUP_1243.y;
        _RESERVED_IDENTIFIER_FIXUP_3160.w = _RESERVED_IDENTIFIER_FIXUP_1225;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3160.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1225;
        float _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1236 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1265;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_3143.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3173;
        _RESERVED_IDENTIFIER_FIXUP_3173.x = _RESERVED_IDENTIFIER_FIXUP_1272.x;
        _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1272.y;
        _RESERVED_IDENTIFIER_FIXUP_3173.w = _RESERVED_IDENTIFIER_FIXUP_1225;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3173.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1225;
        float _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_1265 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1294;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1301 = _RESERVED_IDENTIFIER_FIXUP_3143.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3186;
        _RESERVED_IDENTIFIER_FIXUP_3186.x = _RESERVED_IDENTIFIER_FIXUP_1301.x;
        _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_1301.y;
        _RESERVED_IDENTIFIER_FIXUP_3186.w = _RESERVED_IDENTIFIER_FIXUP_1225;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3186.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1225;
        float _RESERVED_IDENTIFIER_FIXUP_1323 = _RESERVED_IDENTIFIER_FIXUP_1294 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1323;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_3143.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3199;
        _RESERVED_IDENTIFIER_FIXUP_3199.x = _RESERVED_IDENTIFIER_FIXUP_1330.x;
        _RESERVED_IDENTIFIER_FIXUP_3199.y = _RESERVED_IDENTIFIER_FIXUP_1330.y;
        _RESERVED_IDENTIFIER_FIXUP_3199.w = _RESERVED_IDENTIFIER_FIXUP_1225;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3199.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1225;
        float _RESERVED_IDENTIFIER_FIXUP_1352 = _RESERVED_IDENTIFIER_FIXUP_1323 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1352;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_3143.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3212;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_1359.x;
        _RESERVED_IDENTIFIER_FIXUP_3212.y = _RESERVED_IDENTIFIER_FIXUP_1359.y;
        _RESERVED_IDENTIFIER_FIXUP_3212.w = _RESERVED_IDENTIFIER_FIXUP_1225;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3212.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1225;
        float _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_1352 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1381;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1388 = _RESERVED_IDENTIFIER_FIXUP_3143.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3225;
        _RESERVED_IDENTIFIER_FIXUP_3225.x = _RESERVED_IDENTIFIER_FIXUP_1388.x;
        _RESERVED_IDENTIFIER_FIXUP_3225.y = _RESERVED_IDENTIFIER_FIXUP_1388.y;
        _RESERVED_IDENTIFIER_FIXUP_3225.w = _RESERVED_IDENTIFIER_FIXUP_1225;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3225.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1225;
        float _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_1381 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1410;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_3143.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3238;
        _RESERVED_IDENTIFIER_FIXUP_3238.x = _RESERVED_IDENTIFIER_FIXUP_1417.x;
        _RESERVED_IDENTIFIER_FIXUP_3238.y = _RESERVED_IDENTIFIER_FIXUP_1417.y;
        _RESERVED_IDENTIFIER_FIXUP_3238.w = _RESERVED_IDENTIFIER_FIXUP_1225;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3238.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1225;
        float _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_1410 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1439;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1439 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3685 = _RESERVED_IDENTIFIER_FIXUP_3143;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1452 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2931.y = _RESERVED_IDENTIFIER_FIXUP_1452;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3686;
        if (_RESERVED_IDENTIFIER_FIXUP_1452 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1461 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1471 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1473 = _RESERVED_IDENTIFIER_FIXUP_1471.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3083 = _RESERVED_IDENTIFIER_FIXUP_2931;
            _RESERVED_IDENTIFIER_FIXUP_3083.y = _RESERVED_IDENTIFIER_FIXUP_1473;
            _RESERVED_IDENTIFIER_FIXUP_3083.z = _RESERVED_IDENTIFIER_FIXUP_1471.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1481 = _RESERVED_IDENTIFIER_FIXUP_3083.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3087;
            _RESERVED_IDENTIFIER_FIXUP_3087.x = _RESERVED_IDENTIFIER_FIXUP_1481.x;
            _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1481.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1488 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1492 = _RESERVED_IDENTIFIER_FIXUP_1488.y;
            _RESERVED_IDENTIFIER_FIXUP_3087.w = _RESERVED_IDENTIFIER_FIXUP_1492;
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1461.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1461.w;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3087.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1492;
            float _RESERVED_IDENTIFIER_FIXUP_1503 = hdLod6(param_20, param_21).x + hdLod6(param_22, param_23).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3708 = vec4(_RESERVED_IDENTIFIER_FIXUP_1182, _RESERVED_IDENTIFIER_FIXUP_1473, _RESERVED_IDENTIFIER_FIXUP_1471.y, _RESERVED_IDENTIFIER_FIXUP_1503);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_3708.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3100;
            _RESERVED_IDENTIFIER_FIXUP_3100.x = _RESERVED_IDENTIFIER_FIXUP_1510.x;
            _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1510.y;
            _RESERVED_IDENTIFIER_FIXUP_3100.w = _RESERVED_IDENTIFIER_FIXUP_1492;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3100.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1492;
            float _RESERVED_IDENTIFIER_FIXUP_1532 = _RESERVED_IDENTIFIER_FIXUP_1503 + hdLod6(param_24, param_25).x;
            _RESERVED_IDENTIFIER_FIXUP_3708.w = _RESERVED_IDENTIFIER_FIXUP_1532;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1539 = _RESERVED_IDENTIFIER_FIXUP_3708.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3113;
            _RESERVED_IDENTIFIER_FIXUP_3113.x = _RESERVED_IDENTIFIER_FIXUP_1539.x;
            _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1539.y;
            _RESERVED_IDENTIFIER_FIXUP_3113.w = _RESERVED_IDENTIFIER_FIXUP_1492;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3113.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1492;
            float _RESERVED_IDENTIFIER_FIXUP_1561 = _RESERVED_IDENTIFIER_FIXUP_1532 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_3708.w = _RESERVED_IDENTIFIER_FIXUP_1561;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_3708.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3126;
            _RESERVED_IDENTIFIER_FIXUP_3126.x = _RESERVED_IDENTIFIER_FIXUP_1568.x;
            _RESERVED_IDENTIFIER_FIXUP_3126.y = _RESERVED_IDENTIFIER_FIXUP_1568.y;
            _RESERVED_IDENTIFIER_FIXUP_3126.w = _RESERVED_IDENTIFIER_FIXUP_1492;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3126.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1492;
            float _RESERVED_IDENTIFIER_FIXUP_1590 = _RESERVED_IDENTIFIER_FIXUP_1561 + hdLod6(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_3708.y = _RESERVED_IDENTIFIER_FIXUP_1590;
            _RESERVED_IDENTIFIER_FIXUP_3708.x = _RESERVED_IDENTIFIER_FIXUP_1590 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3686 = _RESERVED_IDENTIFIER_FIXUP_3708;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1603 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2948 = _RESERVED_IDENTIFIER_FIXUP_2931;
            _RESERVED_IDENTIFIER_FIXUP_2948.y = _RESERVED_IDENTIFIER_FIXUP_1603;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3687;
            if (_RESERVED_IDENTIFIER_FIXUP_1603 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1612 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1622 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1624 = _RESERVED_IDENTIFIER_FIXUP_1622.x;
                _RESERVED_IDENTIFIER_FIXUP_2948.y = _RESERVED_IDENTIFIER_FIXUP_1624;
                _RESERVED_IDENTIFIER_FIXUP_2948.z = _RESERVED_IDENTIFIER_FIXUP_1622.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_2948.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3027;
                _RESERVED_IDENTIFIER_FIXUP_3027.x = _RESERVED_IDENTIFIER_FIXUP_1632.x;
                _RESERVED_IDENTIFIER_FIXUP_3027.y = _RESERVED_IDENTIFIER_FIXUP_1632.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1639 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1643 = _RESERVED_IDENTIFIER_FIXUP_1639.y;
                _RESERVED_IDENTIFIER_FIXUP_3027.w = _RESERVED_IDENTIFIER_FIXUP_1643;
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1612.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1612.w;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3027.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1643;
                float _RESERVED_IDENTIFIER_FIXUP_1654 = hdLod7(param_30, param_31).x + hdLod7(param_32, param_33).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3707 = vec4(_RESERVED_IDENTIFIER_FIXUP_1182, _RESERVED_IDENTIFIER_FIXUP_1624, _RESERVED_IDENTIFIER_FIXUP_1622.y, _RESERVED_IDENTIFIER_FIXUP_1654);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1661 = _RESERVED_IDENTIFIER_FIXUP_3707.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3040;
                _RESERVED_IDENTIFIER_FIXUP_3040.x = _RESERVED_IDENTIFIER_FIXUP_1661.x;
                _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1661.y;
                _RESERVED_IDENTIFIER_FIXUP_3040.w = _RESERVED_IDENTIFIER_FIXUP_1643;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3040.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1643;
                float _RESERVED_IDENTIFIER_FIXUP_1683 = _RESERVED_IDENTIFIER_FIXUP_1654 + hdLod7(param_34, param_35).x;
                _RESERVED_IDENTIFIER_FIXUP_3707.w = _RESERVED_IDENTIFIER_FIXUP_1683;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1690 = _RESERVED_IDENTIFIER_FIXUP_3707.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3053;
                _RESERVED_IDENTIFIER_FIXUP_3053.x = _RESERVED_IDENTIFIER_FIXUP_1690.x;
                _RESERVED_IDENTIFIER_FIXUP_3053.y = _RESERVED_IDENTIFIER_FIXUP_1690.y;
                _RESERVED_IDENTIFIER_FIXUP_3053.w = _RESERVED_IDENTIFIER_FIXUP_1643;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3053.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1643;
                float _RESERVED_IDENTIFIER_FIXUP_1712 = _RESERVED_IDENTIFIER_FIXUP_1683 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_3707.w = _RESERVED_IDENTIFIER_FIXUP_1712;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1719 = _RESERVED_IDENTIFIER_FIXUP_3707.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3066;
                _RESERVED_IDENTIFIER_FIXUP_3066.x = _RESERVED_IDENTIFIER_FIXUP_1719.x;
                _RESERVED_IDENTIFIER_FIXUP_3066.y = _RESERVED_IDENTIFIER_FIXUP_1719.y;
                _RESERVED_IDENTIFIER_FIXUP_3066.w = _RESERVED_IDENTIFIER_FIXUP_1643;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3066.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1643;
                float _RESERVED_IDENTIFIER_FIXUP_1741 = _RESERVED_IDENTIFIER_FIXUP_1712 + hdLod7(param_38, param_39).x;
                _RESERVED_IDENTIFIER_FIXUP_3707.y = _RESERVED_IDENTIFIER_FIXUP_1741;
                _RESERVED_IDENTIFIER_FIXUP_3707.x = _RESERVED_IDENTIFIER_FIXUP_1741 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3687 = _RESERVED_IDENTIFIER_FIXUP_3707;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1757 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1761 = _RESERVED_IDENTIFIER_FIXUP_1757.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1772 = vec4(_RESERVED_IDENTIFIER_FIXUP_1757.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1761).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3704 = vec4(_RESERVED_IDENTIFIER_FIXUP_1772 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1761);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1809 = _RESERVED_IDENTIFIER_FIXUP_1772 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2981 = _RESERVED_IDENTIFIER_FIXUP_3704;
                _RESERVED_IDENTIFIER_FIXUP_2981.x = _RESERVED_IDENTIFIER_FIXUP_1809.x;
                _RESERVED_IDENTIFIER_FIXUP_2981.y = _RESERVED_IDENTIFIER_FIXUP_1809.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1831 = _RESERVED_IDENTIFIER_FIXUP_1772 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2990 = _RESERVED_IDENTIFIER_FIXUP_2981;
                _RESERVED_IDENTIFIER_FIXUP_2990.x = _RESERVED_IDENTIFIER_FIXUP_1831.x;
                _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1831.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1853 = _RESERVED_IDENTIFIER_FIXUP_1772 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2999 = _RESERVED_IDENTIFIER_FIXUP_2990;
                _RESERVED_IDENTIFIER_FIXUP_2999.x = _RESERVED_IDENTIFIER_FIXUP_1853.x;
                _RESERVED_IDENTIFIER_FIXUP_2999.y = _RESERVED_IDENTIFIER_FIXUP_1853.y;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_1772;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1761;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3704.xy;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1761;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_2981.xy;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1761;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2990.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1761;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2999.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1761;
                float _RESERVED_IDENTIFIER_FIXUP_1868 = (((hdLod8(param_40, param_41).x + hdLod8(param_42, param_43).x) + hdLod8(param_44, param_45).x) + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x;
                float _RESERVED_IDENTIFIER_FIXUP_1882 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1887 = (_RESERVED_IDENTIFIER_FIXUP_1868 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3687 = vec4((_RESERVED_IDENTIFIER_FIXUP_1882 * _RESERVED_IDENTIFIER_FIXUP_1887) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1882, _RESERVED_IDENTIFIER_FIXUP_1887, _RESERVED_IDENTIFIER_FIXUP_1868);
            }
            _RESERVED_IDENTIFIER_FIXUP_3686 = _RESERVED_IDENTIFIER_FIXUP_3687;
        }
        _RESERVED_IDENTIFIER_FIXUP_3685 = _RESERVED_IDENTIFIER_FIXUP_3686;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3257 = _RESERVED_IDENTIFIER_FIXUP_3685;
    _RESERVED_IDENTIFIER_FIXUP_3257.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1915 = _RESERVED_IDENTIFIER_FIXUP_1163.xyz * _RESERVED_IDENTIFIER_FIXUP_3257.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3259 = _RESERVED_IDENTIFIER_FIXUP_1163;
    _RESERVED_IDENTIFIER_FIXUP_3259.x = _RESERVED_IDENTIFIER_FIXUP_1915.x;
    _RESERVED_IDENTIFIER_FIXUP_3259.y = _RESERVED_IDENTIFIER_FIXUP_1915.y;
    _RESERVED_IDENTIFIER_FIXUP_3259.z = _RESERVED_IDENTIFIER_FIXUP_1915.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1926 = _RESERVED_IDENTIFIER_FIXUP_3259.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3683).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3265 = _RESERVED_IDENTIFIER_FIXUP_3259;
    _RESERVED_IDENTIFIER_FIXUP_3265.x = _RESERVED_IDENTIFIER_FIXUP_1926.x;
    _RESERVED_IDENTIFIER_FIXUP_3265.y = _RESERVED_IDENTIFIER_FIXUP_1926.y;
    _RESERVED_IDENTIFIER_FIXUP_3265.z = _RESERVED_IDENTIFIER_FIXUP_1926.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1937 = _RESERVED_IDENTIFIER_FIXUP_3265.xyz + _RESERVED_IDENTIFIER_FIXUP_3265.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3271 = _RESERVED_IDENTIFIER_FIXUP_3265;
    _RESERVED_IDENTIFIER_FIXUP_3271.x = _RESERVED_IDENTIFIER_FIXUP_1937.x;
    _RESERVED_IDENTIFIER_FIXUP_3271.y = _RESERVED_IDENTIFIER_FIXUP_1937.y;
    _RESERVED_IDENTIFIER_FIXUP_3271.z = _RESERVED_IDENTIFIER_FIXUP_1937.z;
    _RESERVED_IDENTIFIER_FIXUP_3257.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3257.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3257.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1962 = (_RESERVED_IDENTIFIER_FIXUP_3257.yzw * _RESERVED_IDENTIFIER_FIXUP_3257.xxx) + _RESERVED_IDENTIFIER_FIXUP_3271.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3283 = _RESERVED_IDENTIFIER_FIXUP_3271;
    _RESERVED_IDENTIFIER_FIXUP_3283.x = _RESERVED_IDENTIFIER_FIXUP_1962.x;
    _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_1962.y;
    _RESERVED_IDENTIFIER_FIXUP_3283.z = _RESERVED_IDENTIFIER_FIXUP_1962.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1975 = _RESERVED_IDENTIFIER_FIXUP_3283.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3289 = _RESERVED_IDENTIFIER_FIXUP_3283;
    _RESERVED_IDENTIFIER_FIXUP_3289.x = _RESERVED_IDENTIFIER_FIXUP_1975.x;
    _RESERVED_IDENTIFIER_FIXUP_3289.y = _RESERVED_IDENTIFIER_FIXUP_1975.y;
    _RESERVED_IDENTIFIER_FIXUP_3289.z = _RESERVED_IDENTIFIER_FIXUP_1975.z;
    vec2 param_50 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2028 = hdTex0(param_50);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2032 = hdTex1(param_51);
    float _RESERVED_IDENTIFIER_FIXUP_2036 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2032.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3303 = _RESERVED_IDENTIFIER_FIXUP_2032;
    _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_2036;
    _RESERVED_IDENTIFIER_FIXUP_3303.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2036;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2046 = _RESERVED_IDENTIFIER_FIXUP_2028 * _RESERVED_IDENTIFIER_FIXUP_3303.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3310 = _RESERVED_IDENTIFIER_FIXUP_3303;
    _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_1170;
    float _RESERVED_IDENTIFIER_FIXUP_2059 = clamp((_RESERVED_IDENTIFIER_FIXUP_1170 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_2059;
    float _RESERVED_IDENTIFIER_FIXUP_2065 = ((-_RESERVED_IDENTIFIER_FIXUP_2059) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_2065;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3694;
    if (_RESERVED_IDENTIFIER_FIXUP_2065 != (-_RESERVED_IDENTIFIER_FIXUP_2065))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2077 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2077.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2077.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2083 = hdLod5(param_52, param_53);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2087 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3522 = _RESERVED_IDENTIFIER_FIXUP_2083;
        _RESERVED_IDENTIFIER_FIXUP_3522.y = _RESERVED_IDENTIFIER_FIXUP_2087.x;
        _RESERVED_IDENTIFIER_FIXUP_3522.z = _RESERVED_IDENTIFIER_FIXUP_2087.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2097 = _RESERVED_IDENTIFIER_FIXUP_3522.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3526;
        _RESERVED_IDENTIFIER_FIXUP_3526.x = _RESERVED_IDENTIFIER_FIXUP_2097.x;
        _RESERVED_IDENTIFIER_FIXUP_3526.y = _RESERVED_IDENTIFIER_FIXUP_2097.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2104 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2108 = _RESERVED_IDENTIFIER_FIXUP_2104.y;
        _RESERVED_IDENTIFIER_FIXUP_3526.w = _RESERVED_IDENTIFIER_FIXUP_2108;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3526.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2108;
        float _RESERVED_IDENTIFIER_FIXUP_2119 = _RESERVED_IDENTIFIER_FIXUP_2083.x + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2119;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2126 = _RESERVED_IDENTIFIER_FIXUP_3522.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3539;
        _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_2126.x;
        _RESERVED_IDENTIFIER_FIXUP_3539.y = _RESERVED_IDENTIFIER_FIXUP_2126.y;
        _RESERVED_IDENTIFIER_FIXUP_3539.w = _RESERVED_IDENTIFIER_FIXUP_2108;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3539.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2108;
        float _RESERVED_IDENTIFIER_FIXUP_2148 = _RESERVED_IDENTIFIER_FIXUP_2119 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2148;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2155 = _RESERVED_IDENTIFIER_FIXUP_3522.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3552;
        _RESERVED_IDENTIFIER_FIXUP_3552.x = _RESERVED_IDENTIFIER_FIXUP_2155.x;
        _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_2155.y;
        _RESERVED_IDENTIFIER_FIXUP_3552.w = _RESERVED_IDENTIFIER_FIXUP_2108;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3552.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2108;
        float _RESERVED_IDENTIFIER_FIXUP_2177 = _RESERVED_IDENTIFIER_FIXUP_2148 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2177;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2184 = _RESERVED_IDENTIFIER_FIXUP_3522.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3565;
        _RESERVED_IDENTIFIER_FIXUP_3565.x = _RESERVED_IDENTIFIER_FIXUP_2184.x;
        _RESERVED_IDENTIFIER_FIXUP_3565.y = _RESERVED_IDENTIFIER_FIXUP_2184.y;
        _RESERVED_IDENTIFIER_FIXUP_3565.w = _RESERVED_IDENTIFIER_FIXUP_2108;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3565.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2108;
        float _RESERVED_IDENTIFIER_FIXUP_2206 = _RESERVED_IDENTIFIER_FIXUP_2177 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2206;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2213 = _RESERVED_IDENTIFIER_FIXUP_3522.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3578;
        _RESERVED_IDENTIFIER_FIXUP_3578.x = _RESERVED_IDENTIFIER_FIXUP_2213.x;
        _RESERVED_IDENTIFIER_FIXUP_3578.y = _RESERVED_IDENTIFIER_FIXUP_2213.y;
        _RESERVED_IDENTIFIER_FIXUP_3578.w = _RESERVED_IDENTIFIER_FIXUP_2108;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3578.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2108;
        float _RESERVED_IDENTIFIER_FIXUP_2235 = _RESERVED_IDENTIFIER_FIXUP_2206 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2235;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2242 = _RESERVED_IDENTIFIER_FIXUP_3522.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3591;
        _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2242.x;
        _RESERVED_IDENTIFIER_FIXUP_3591.y = _RESERVED_IDENTIFIER_FIXUP_2242.y;
        _RESERVED_IDENTIFIER_FIXUP_3591.w = _RESERVED_IDENTIFIER_FIXUP_2108;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3591.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2108;
        float _RESERVED_IDENTIFIER_FIXUP_2264 = _RESERVED_IDENTIFIER_FIXUP_2235 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2264;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2271 = _RESERVED_IDENTIFIER_FIXUP_3522.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3604;
        _RESERVED_IDENTIFIER_FIXUP_3604.x = _RESERVED_IDENTIFIER_FIXUP_2271.x;
        _RESERVED_IDENTIFIER_FIXUP_3604.y = _RESERVED_IDENTIFIER_FIXUP_2271.y;
        _RESERVED_IDENTIFIER_FIXUP_3604.w = _RESERVED_IDENTIFIER_FIXUP_2108;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3604.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2108;
        float _RESERVED_IDENTIFIER_FIXUP_2293 = _RESERVED_IDENTIFIER_FIXUP_2264 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2293;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2300 = _RESERVED_IDENTIFIER_FIXUP_3522.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3617;
        _RESERVED_IDENTIFIER_FIXUP_3617.x = _RESERVED_IDENTIFIER_FIXUP_2300.x;
        _RESERVED_IDENTIFIER_FIXUP_3617.y = _RESERVED_IDENTIFIER_FIXUP_2300.y;
        _RESERVED_IDENTIFIER_FIXUP_3617.w = _RESERVED_IDENTIFIER_FIXUP_2108;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3617.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2108;
        float _RESERVED_IDENTIFIER_FIXUP_2322 = _RESERVED_IDENTIFIER_FIXUP_2293 + hdLod5(param_68, param_69).x;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2322;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2322 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3694 = _RESERVED_IDENTIFIER_FIXUP_3522;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2335 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2335;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3695;
        if (_RESERVED_IDENTIFIER_FIXUP_2335 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2344 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2354 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2356 = _RESERVED_IDENTIFIER_FIXUP_2354.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3462 = _RESERVED_IDENTIFIER_FIXUP_3310;
            _RESERVED_IDENTIFIER_FIXUP_3462.y = _RESERVED_IDENTIFIER_FIXUP_2356;
            _RESERVED_IDENTIFIER_FIXUP_3462.z = _RESERVED_IDENTIFIER_FIXUP_2354.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2364 = _RESERVED_IDENTIFIER_FIXUP_3462.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3466;
            _RESERVED_IDENTIFIER_FIXUP_3466.x = _RESERVED_IDENTIFIER_FIXUP_2364.x;
            _RESERVED_IDENTIFIER_FIXUP_3466.y = _RESERVED_IDENTIFIER_FIXUP_2364.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2371 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2375 = _RESERVED_IDENTIFIER_FIXUP_2371.y;
            _RESERVED_IDENTIFIER_FIXUP_3466.w = _RESERVED_IDENTIFIER_FIXUP_2375;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2344.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2344.w;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3466.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2375;
            float _RESERVED_IDENTIFIER_FIXUP_2386 = hdLod6(param_70, param_71).x + hdLod6(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3715 = vec4(_RESERVED_IDENTIFIER_FIXUP_2065, _RESERVED_IDENTIFIER_FIXUP_2356, _RESERVED_IDENTIFIER_FIXUP_2354.y, _RESERVED_IDENTIFIER_FIXUP_2386);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2393 = _RESERVED_IDENTIFIER_FIXUP_3715.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3479;
            _RESERVED_IDENTIFIER_FIXUP_3479.x = _RESERVED_IDENTIFIER_FIXUP_2393.x;
            _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2393.y;
            _RESERVED_IDENTIFIER_FIXUP_3479.w = _RESERVED_IDENTIFIER_FIXUP_2375;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3479.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2375;
            float _RESERVED_IDENTIFIER_FIXUP_2415 = _RESERVED_IDENTIFIER_FIXUP_2386 + hdLod6(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3715.w = _RESERVED_IDENTIFIER_FIXUP_2415;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2422 = _RESERVED_IDENTIFIER_FIXUP_3715.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3492;
            _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_2422.x;
            _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_2422.y;
            _RESERVED_IDENTIFIER_FIXUP_3492.w = _RESERVED_IDENTIFIER_FIXUP_2375;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3492.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2375;
            float _RESERVED_IDENTIFIER_FIXUP_2444 = _RESERVED_IDENTIFIER_FIXUP_2415 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3715.w = _RESERVED_IDENTIFIER_FIXUP_2444;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2451 = _RESERVED_IDENTIFIER_FIXUP_3715.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3505;
            _RESERVED_IDENTIFIER_FIXUP_3505.x = _RESERVED_IDENTIFIER_FIXUP_2451.x;
            _RESERVED_IDENTIFIER_FIXUP_3505.y = _RESERVED_IDENTIFIER_FIXUP_2451.y;
            _RESERVED_IDENTIFIER_FIXUP_3505.w = _RESERVED_IDENTIFIER_FIXUP_2375;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3505.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2375;
            float _RESERVED_IDENTIFIER_FIXUP_2473 = _RESERVED_IDENTIFIER_FIXUP_2444 + hdLod6(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3715.y = _RESERVED_IDENTIFIER_FIXUP_2473;
            _RESERVED_IDENTIFIER_FIXUP_3715.x = _RESERVED_IDENTIFIER_FIXUP_2473 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3695 = _RESERVED_IDENTIFIER_FIXUP_3715;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2486 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3327 = _RESERVED_IDENTIFIER_FIXUP_3310;
            _RESERVED_IDENTIFIER_FIXUP_3327.y = _RESERVED_IDENTIFIER_FIXUP_2486;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3696;
            if (_RESERVED_IDENTIFIER_FIXUP_2486 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2495 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2505 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2507 = _RESERVED_IDENTIFIER_FIXUP_2505.x;
                _RESERVED_IDENTIFIER_FIXUP_3327.y = _RESERVED_IDENTIFIER_FIXUP_2507;
                _RESERVED_IDENTIFIER_FIXUP_3327.z = _RESERVED_IDENTIFIER_FIXUP_2505.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2515 = _RESERVED_IDENTIFIER_FIXUP_3327.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3406;
                _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_2515.x;
                _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_2515.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2522 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2526 = _RESERVED_IDENTIFIER_FIXUP_2522.y;
                _RESERVED_IDENTIFIER_FIXUP_3406.w = _RESERVED_IDENTIFIER_FIXUP_2526;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2495.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2495.w;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3406.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2526;
                float _RESERVED_IDENTIFIER_FIXUP_2537 = hdLod7(param_80, param_81).x + hdLod7(param_82, param_83).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3714 = vec4(_RESERVED_IDENTIFIER_FIXUP_2065, _RESERVED_IDENTIFIER_FIXUP_2507, _RESERVED_IDENTIFIER_FIXUP_2505.y, _RESERVED_IDENTIFIER_FIXUP_2537);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2544 = _RESERVED_IDENTIFIER_FIXUP_3714.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3419;
                _RESERVED_IDENTIFIER_FIXUP_3419.x = _RESERVED_IDENTIFIER_FIXUP_2544.x;
                _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_2544.y;
                _RESERVED_IDENTIFIER_FIXUP_3419.w = _RESERVED_IDENTIFIER_FIXUP_2526;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3419.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2526;
                float _RESERVED_IDENTIFIER_FIXUP_2566 = _RESERVED_IDENTIFIER_FIXUP_2537 + hdLod7(param_84, param_85).x;
                _RESERVED_IDENTIFIER_FIXUP_3714.w = _RESERVED_IDENTIFIER_FIXUP_2566;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2573 = _RESERVED_IDENTIFIER_FIXUP_3714.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3432;
                _RESERVED_IDENTIFIER_FIXUP_3432.x = _RESERVED_IDENTIFIER_FIXUP_2573.x;
                _RESERVED_IDENTIFIER_FIXUP_3432.y = _RESERVED_IDENTIFIER_FIXUP_2573.y;
                _RESERVED_IDENTIFIER_FIXUP_3432.w = _RESERVED_IDENTIFIER_FIXUP_2526;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3432.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2526;
                float _RESERVED_IDENTIFIER_FIXUP_2595 = _RESERVED_IDENTIFIER_FIXUP_2566 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3714.w = _RESERVED_IDENTIFIER_FIXUP_2595;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2602 = _RESERVED_IDENTIFIER_FIXUP_3714.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3445;
                _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_2602.x;
                _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2602.y;
                _RESERVED_IDENTIFIER_FIXUP_3445.w = _RESERVED_IDENTIFIER_FIXUP_2526;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3445.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2526;
                float _RESERVED_IDENTIFIER_FIXUP_2624 = _RESERVED_IDENTIFIER_FIXUP_2595 + hdLod7(param_88, param_89).x;
                _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_2624;
                _RESERVED_IDENTIFIER_FIXUP_3714.x = _RESERVED_IDENTIFIER_FIXUP_2624 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3696 = _RESERVED_IDENTIFIER_FIXUP_3714;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2640 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2644 = _RESERVED_IDENTIFIER_FIXUP_2640.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2655 = vec4(_RESERVED_IDENTIFIER_FIXUP_2640.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2644).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3711 = vec4(_RESERVED_IDENTIFIER_FIXUP_2655 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2644);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2692 = _RESERVED_IDENTIFIER_FIXUP_2655 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3360 = _RESERVED_IDENTIFIER_FIXUP_3711;
                _RESERVED_IDENTIFIER_FIXUP_3360.x = _RESERVED_IDENTIFIER_FIXUP_2692.x;
                _RESERVED_IDENTIFIER_FIXUP_3360.y = _RESERVED_IDENTIFIER_FIXUP_2692.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2714 = _RESERVED_IDENTIFIER_FIXUP_2655 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3369 = _RESERVED_IDENTIFIER_FIXUP_3360;
                _RESERVED_IDENTIFIER_FIXUP_3369.x = _RESERVED_IDENTIFIER_FIXUP_2714.x;
                _RESERVED_IDENTIFIER_FIXUP_3369.y = _RESERVED_IDENTIFIER_FIXUP_2714.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2736 = _RESERVED_IDENTIFIER_FIXUP_2655 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3378 = _RESERVED_IDENTIFIER_FIXUP_3369;
                _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_2736.x;
                _RESERVED_IDENTIFIER_FIXUP_3378.y = _RESERVED_IDENTIFIER_FIXUP_2736.y;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_2655;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2644;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3711.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2644;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3360.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2644;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3369.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2644;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3378.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2644;
                float _RESERVED_IDENTIFIER_FIXUP_2751 = (((hdLod8(param_90, param_91).x + hdLod8(param_92, param_93).x) + hdLod8(param_94, param_95).x) + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x;
                float _RESERVED_IDENTIFIER_FIXUP_2765 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2770 = (_RESERVED_IDENTIFIER_FIXUP_2751 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3696 = vec4((_RESERVED_IDENTIFIER_FIXUP_2765 * _RESERVED_IDENTIFIER_FIXUP_2770) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2765, _RESERVED_IDENTIFIER_FIXUP_2770, _RESERVED_IDENTIFIER_FIXUP_2751);
            }
            _RESERVED_IDENTIFIER_FIXUP_3695 = _RESERVED_IDENTIFIER_FIXUP_3696;
        }
        _RESERVED_IDENTIFIER_FIXUP_3694 = _RESERVED_IDENTIFIER_FIXUP_3695;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2785 = (_RESERVED_IDENTIFIER_FIXUP_3694.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3634 = _RESERVED_IDENTIFIER_FIXUP_3694;
    _RESERVED_IDENTIFIER_FIXUP_3634.y = _RESERVED_IDENTIFIER_FIXUP_2785;
    _RESERVED_IDENTIFIER_FIXUP_3634.y = _RESERVED_IDENTIFIER_FIXUP_2785;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2798 = _RESERVED_IDENTIFIER_FIXUP_2046.xyz * _RESERVED_IDENTIFIER_FIXUP_3634.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3640 = _RESERVED_IDENTIFIER_FIXUP_2046;
    _RESERVED_IDENTIFIER_FIXUP_3640.x = _RESERVED_IDENTIFIER_FIXUP_2798.x;
    _RESERVED_IDENTIFIER_FIXUP_3640.y = _RESERVED_IDENTIFIER_FIXUP_2798.y;
    _RESERVED_IDENTIFIER_FIXUP_3640.z = _RESERVED_IDENTIFIER_FIXUP_2798.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2809 = _RESERVED_IDENTIFIER_FIXUP_3640.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3646 = _RESERVED_IDENTIFIER_FIXUP_3640;
    _RESERVED_IDENTIFIER_FIXUP_3646.x = _RESERVED_IDENTIFIER_FIXUP_2809.x;
    _RESERVED_IDENTIFIER_FIXUP_3646.y = _RESERVED_IDENTIFIER_FIXUP_2809.y;
    _RESERVED_IDENTIFIER_FIXUP_3646.z = _RESERVED_IDENTIFIER_FIXUP_2809.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2820 = _RESERVED_IDENTIFIER_FIXUP_3646.xyz + _RESERVED_IDENTIFIER_FIXUP_3646.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3652 = _RESERVED_IDENTIFIER_FIXUP_3646;
    _RESERVED_IDENTIFIER_FIXUP_3652.x = _RESERVED_IDENTIFIER_FIXUP_2820.x;
    _RESERVED_IDENTIFIER_FIXUP_3652.y = _RESERVED_IDENTIFIER_FIXUP_2820.y;
    _RESERVED_IDENTIFIER_FIXUP_3652.z = _RESERVED_IDENTIFIER_FIXUP_2820.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2831 = _RESERVED_IDENTIFIER_FIXUP_3652.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3634.y = _RESERVED_IDENTIFIER_FIXUP_2831.x;
    _RESERVED_IDENTIFIER_FIXUP_3634.z = _RESERVED_IDENTIFIER_FIXUP_2831.y;
    _RESERVED_IDENTIFIER_FIXUP_3634.w = _RESERVED_IDENTIFIER_FIXUP_2831.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2845 = (_RESERVED_IDENTIFIER_FIXUP_3634.yzw * _RESERVED_IDENTIFIER_FIXUP_3634.xxx) + _RESERVED_IDENTIFIER_FIXUP_3652.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3664 = _RESERVED_IDENTIFIER_FIXUP_3652;
    _RESERVED_IDENTIFIER_FIXUP_3664.x = _RESERVED_IDENTIFIER_FIXUP_2845.x;
    _RESERVED_IDENTIFIER_FIXUP_3664.y = _RESERVED_IDENTIFIER_FIXUP_2845.y;
    _RESERVED_IDENTIFIER_FIXUP_3664.z = _RESERVED_IDENTIFIER_FIXUP_2845.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2858 = _RESERVED_IDENTIFIER_FIXUP_3664.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3670 = _RESERVED_IDENTIFIER_FIXUP_3664;
    _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2858.x;
    _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_2858.y;
    _RESERVED_IDENTIFIER_FIXUP_3670.z = _RESERVED_IDENTIFIER_FIXUP_2858.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3670.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1006 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1015;
    if (_RESERVED_IDENTIFIER_FIXUP_1006)
    {
        _RESERVED_IDENTIFIER_FIXUP_1015 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1015 = _RESERVED_IDENTIFIER_FIXUP_1006;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1015)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1052 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3289.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1079 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2917;
    if (_RESERVED_IDENTIFIER_FIXUP_1052 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2917 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1052), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1079);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2917 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1079);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2917;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2785);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r1.xy;
        float param_3 = r1.w;
        r1 = hdLod5(param_2, param_3);
        vec2 hdB131 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB131.x;
        r1.z = hdB131.y;
        vec2 hdB153 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB153.x;
        r2.y = hdB153.y;
        vec2 hdB161 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB161.x;
        r2.w = hdB161.y;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r1.x += r2.x;
        vec2 hdB184 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB184.x;
        r2.y = hdB184.y;
        vec2 hdB191 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB191.x;
        r2.w = hdB191.y;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r1.x += r2.x;
        vec2 hdB214 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB214.x;
        r2.y = hdB214.y;
        vec2 hdB221 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB221.x;
        r2.w = hdB221.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.x += r2.x;
        vec2 hdB244 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB244.x;
        r2.y = hdB244.y;
        vec2 hdB251 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB251.x;
        r2.w = hdB251.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.x += r2.x;
        vec2 hdB274 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB274.x;
        r2.y = hdB274.y;
        vec2 hdB281 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB281.x;
        r2.w = hdB281.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.x += r2.x;
        vec2 hdB304 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB304.x;
        r2.y = hdB304.y;
        vec2 hdB311 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB311.x;
        r2.w = hdB311.y;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod5(param_14, param_15);
        r1.x += r2.x;
        vec2 hdB334 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB334.x;
        r2.y = hdB334.y;
        vec2 hdB341 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB341.x;
        r2.w = hdB341.y;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod5(param_16, param_17);
        r1.x += r2.x;
        vec2 hdB364 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB364.x;
        r2.y = hdB364.y;
        vec2 hdB371 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB371.x;
        r2.w = hdB371.y;
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
            vec2 hdB421 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB421.x;
            r1.z = hdB421.y;
            vec2 hdB431 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB431.x;
            r3.y = hdB431.y;
            vec2 hdB438 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB438.x;
            r3.w = hdB438.y;
            vec2 param_22 = r3.xy;
            float param_23 = r3.w;
            r3 = hdLod6(param_22, param_23);
            r1.w = r2.x + r3.x;
            vec2 hdB460 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB460.x;
            r2.y = hdB460.y;
            vec2 hdB467 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB467.x;
            r2.w = hdB467.y;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod6(param_24, param_25);
            r1.w += r2.x;
            vec2 hdB489 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB489.x;
            r2.y = hdB489.y;
            vec2 hdB496 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB496.x;
            r2.w = hdB496.y;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod6(param_26, param_27);
            r1.w += r2.x;
            vec2 hdB518 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB518.x;
            r2.y = hdB518.y;
            vec2 hdB525 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB525.x;
            r2.w = hdB525.y;
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
                vec2 hdB575 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB575.x;
                r1.z = hdB575.y;
                vec2 hdB585 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB585.x;
                r3.y = hdB585.y;
                vec2 hdB592 = vec2(1.0, 0.0) * v6.zx;
                r3.z = hdB592.x;
                r3.w = hdB592.y;
                vec2 param_32 = r3.xy;
                float param_33 = r3.w;
                r3 = hdLod7(param_32, param_33);
                r1.w = r2.x + r3.x;
                vec2 hdB614 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB614.x;
                r2.y = hdB614.y;
                vec2 hdB621 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB621.x;
                r2.w = hdB621.y;
                vec2 param_34 = r2.xy;
                float param_35 = r2.w;
                r2 = hdLod7(param_34, param_35);
                r1.w += r2.x;
                vec2 hdB643 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB643.x;
                r2.y = hdB643.y;
                vec2 hdB650 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB650.x;
                r2.w = hdB650.y;
                vec2 param_36 = r2.xy;
                float param_37 = r2.w;
                r2 = hdLod7(param_36, param_37);
                r1.w += r2.x;
                vec2 hdB672 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB672.x;
                r2.y = hdB672.y;
                vec2 hdB679 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB679.x;
                r2.w = hdB679.y;
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
                vec2 hdB711 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB711.x;
                r2.w = hdB711.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                vec2 param_40 = r2.xy;
                float param_41 = r2.w;
                r3 = hdLod8(param_40, param_41);
                vec2 hdB736 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB736.x;
                r4.y = hdB736.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_42 = r4.xy;
                float param_43 = r4.w;
                r5 = hdLod8(param_42, param_43);
                r1.w = r3.x + r5.x;
                vec2 hdB764 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB764.x;
                r4.y = hdB764.y;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r3 = hdLod8(param_44, param_45);
                r1.w += r3.x;
                vec2 hdB786 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB786.x;
                r4.y = hdB786.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r3 = hdLod8(param_46, param_47);
                r1.w += r3.x;
                vec2 hdB808 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB808.x;
                r4.y = hdB808.y;
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
    vec4 hdB861 = r0;
    vec3 hdB865 = hdB861.xyz * r1.yyy;
    r0.x = hdB865.x;
    r0.y = hdB865.y;
    r0.z = hdB865.z;
    vec4 hdB872 = r0;
    vec3 hdB876 = hdB872.xyz * v0.xyz;
    r0.x = hdB876.x;
    r0.y = hdB876.y;
    r0.z = hdB876.z;
    vec4 hdB883 = r0;
    vec4 hdB885 = r0;
    vec3 hdB887 = hdB883.xyz + hdB885.xyz;
    r0.x = hdB887.x;
    r0.y = hdB887.y;
    r0.z = hdB887.z;
    vec3 hdB898 = r0.www * v1.xyz;
    r1.y = hdB898.x;
    r1.z = hdB898.y;
    r1.w = hdB898.z;
    vec4 hdB910 = r0;
    vec3 hdB912 = (r1.yzw * r1.xxx) + hdB910.xyz;
    r0.x = hdB912.x;
    r0.y = hdB912.y;
    r0.z = hdB912.z;
    vec4 hdB919 = r0;
    vec3 hdB926 = hdB919.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB926.x;
    r0.y = hdB926.y;
    r0.z = hdB926.z;
    vec3 hdB941 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB941.x;
    oC0.y = hdB941.y;
    oC0.z = hdB941.z;
    oC0.w = 1.0;
    bool hdB954 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB962;
    if (hdB954)
    {
        hdB962 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB962 = hdB954;
    }
    if (hdB962)
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
    bool _3316 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3326;
    if (_3316)
    {
        _3326 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 483u) != 0u;
    }
    else
    {
        _3326 = _3316;
    }
    if (_3326)
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
        bool _3351 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3366;
        if (!_3351)
        {
            _3366 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 483u) != 0u;
        }
        else
        {
            _3366 = _3351;
        }
        if (_3366)
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
