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
float _RESERVED_IDENTIFIER_FIXUP_3449;
vec4 _RESERVED_IDENTIFIER_FIXUP_3450;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1075 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1079 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1083 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1087 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1083.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2712 = _RESERVED_IDENTIFIER_FIXUP_1083;
    _RESERVED_IDENTIFIER_FIXUP_2712.y = _RESERVED_IDENTIFIER_FIXUP_1087;
    _RESERVED_IDENTIFIER_FIXUP_2712.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1087;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1097 = _RESERVED_IDENTIFIER_FIXUP_1079 * _RESERVED_IDENTIFIER_FIXUP_2712.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1103 = (_RESERVED_IDENTIFIER_FIXUP_1075 * _RESERVED_IDENTIFIER_FIXUP_2712.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1097;
    float _RESERVED_IDENTIFIER_FIXUP_1110 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2719 = _RESERVED_IDENTIFIER_FIXUP_1097;
    _RESERVED_IDENTIFIER_FIXUP_2719.x = _RESERVED_IDENTIFIER_FIXUP_1110;
    float _RESERVED_IDENTIFIER_FIXUP_1116 = clamp((_RESERVED_IDENTIFIER_FIXUP_1110 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2719.x = _RESERVED_IDENTIFIER_FIXUP_1116;
    float _RESERVED_IDENTIFIER_FIXUP_1122 = ((-_RESERVED_IDENTIFIER_FIXUP_1116) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2719.y = _RESERVED_IDENTIFIER_FIXUP_1122;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3452;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3451;
    if (_RESERVED_IDENTIFIER_FIXUP_1122 != (-_RESERVED_IDENTIFIER_FIXUP_1122))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1134 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2731 = _RESERVED_IDENTIFIER_FIXUP_2719;
        _RESERVED_IDENTIFIER_FIXUP_2731.y = _RESERVED_IDENTIFIER_FIXUP_1134.x;
        _RESERVED_IDENTIFIER_FIXUP_2731.z = _RESERVED_IDENTIFIER_FIXUP_1134.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1144 = _RESERVED_IDENTIFIER_FIXUP_2731.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2735;
        _RESERVED_IDENTIFIER_FIXUP_2735.x = _RESERVED_IDENTIFIER_FIXUP_1144.x;
        _RESERVED_IDENTIFIER_FIXUP_2735.y = _RESERVED_IDENTIFIER_FIXUP_1144.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_2731.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2739;
        _RESERVED_IDENTIFIER_FIXUP_2739.x = _RESERVED_IDENTIFIER_FIXUP_1154.x;
        _RESERVED_IDENTIFIER_FIXUP_2739.y = _RESERVED_IDENTIFIER_FIXUP_1154.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1164 = _RESERVED_IDENTIFIER_FIXUP_2731.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2743;
        _RESERVED_IDENTIFIER_FIXUP_2743.x = _RESERVED_IDENTIFIER_FIXUP_1164.x;
        _RESERVED_IDENTIFIER_FIXUP_2743.y = _RESERVED_IDENTIFIER_FIXUP_1164.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_2731.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2747;
        _RESERVED_IDENTIFIER_FIXUP_2747.x = _RESERVED_IDENTIFIER_FIXUP_1174.x;
        _RESERVED_IDENTIFIER_FIXUP_2747.y = _RESERVED_IDENTIFIER_FIXUP_1174.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1182 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1182.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1182.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1188 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_2735.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2739.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2743.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2747.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_2735.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1188.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2739.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1188.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2743.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1188.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1245 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1188 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2747.xy;
        float param_11 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1251 = hdLod5(param_10, param_11).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2731.y = _RESERVED_IDENTIFIER_FIXUP_1251;
        float _RESERVED_IDENTIFIER_FIXUP_1256 = float(_RESERVED_IDENTIFIER_FIXUP_1251 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2731.y = _RESERVED_IDENTIFIER_FIXUP_1256;
        float _RESERVED_IDENTIFIER_FIXUP_1259 = dot(_RESERVED_IDENTIFIER_FIXUP_1245, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2731.z = _RESERVED_IDENTIFIER_FIXUP_1259;
        float _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1256 + _RESERVED_IDENTIFIER_FIXUP_1259;
        _RESERVED_IDENTIFIER_FIXUP_2731.y = _RESERVED_IDENTIFIER_FIXUP_1265;
        float _RESERVED_IDENTIFIER_FIXUP_1270 = (_RESERVED_IDENTIFIER_FIXUP_1265 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2731.y = _RESERVED_IDENTIFIER_FIXUP_1270;
        _RESERVED_IDENTIFIER_FIXUP_2731.x = (_RESERVED_IDENTIFIER_FIXUP_1116 * _RESERVED_IDENTIFIER_FIXUP_1270) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3452 = _RESERVED_IDENTIFIER_FIXUP_1245;
        _RESERVED_IDENTIFIER_FIXUP_3451 = _RESERVED_IDENTIFIER_FIXUP_2731;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2729 = _RESERVED_IDENTIFIER_FIXUP_2719;
        _RESERVED_IDENTIFIER_FIXUP_2729.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3452 = _RESERVED_IDENTIFIER_FIXUP_2712;
        _RESERVED_IDENTIFIER_FIXUP_3451 = _RESERVED_IDENTIFIER_FIXUP_2729;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1288 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2803 = _RESERVED_IDENTIFIER_FIXUP_3451;
    _RESERVED_IDENTIFIER_FIXUP_2803.y = _RESERVED_IDENTIFIER_FIXUP_1288;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3455;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3453;
    if (_RESERVED_IDENTIFIER_FIXUP_1288 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1297 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2964 = _RESERVED_IDENTIFIER_FIXUP_2803;
        _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1297.x;
        _RESERVED_IDENTIFIER_FIXUP_2964.z = _RESERVED_IDENTIFIER_FIXUP_1297.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1307 = _RESERVED_IDENTIFIER_FIXUP_2964.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2968;
        _RESERVED_IDENTIFIER_FIXUP_2968.x = _RESERVED_IDENTIFIER_FIXUP_1307.x;
        _RESERVED_IDENTIFIER_FIXUP_2968.y = _RESERVED_IDENTIFIER_FIXUP_1307.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1317 = _RESERVED_IDENTIFIER_FIXUP_2964.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2972;
        _RESERVED_IDENTIFIER_FIXUP_2972.x = _RESERVED_IDENTIFIER_FIXUP_1317.x;
        _RESERVED_IDENTIFIER_FIXUP_2972.y = _RESERVED_IDENTIFIER_FIXUP_1317.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_2964.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2976;
        _RESERVED_IDENTIFIER_FIXUP_2976.x = _RESERVED_IDENTIFIER_FIXUP_1327.x;
        _RESERVED_IDENTIFIER_FIXUP_2976.y = _RESERVED_IDENTIFIER_FIXUP_1327.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1337 = _RESERVED_IDENTIFIER_FIXUP_2964.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2980;
        _RESERVED_IDENTIFIER_FIXUP_2980.x = _RESERVED_IDENTIFIER_FIXUP_1337.x;
        _RESERVED_IDENTIFIER_FIXUP_2980.y = _RESERVED_IDENTIFIER_FIXUP_1337.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1345 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1345.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1345.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1351 = hdLod6(param_12, param_13);
        _RESERVED_IDENTIFIER_FIXUP_2968.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2972.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2976.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2980.w = 0.0;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_2968.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1351.y = hdLod6(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2972.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1351.z = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2976.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1351.w = hdLod6(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1408 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1351 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2980.xy;
        float param_21 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1414 = hdLod6(param_20, param_21).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1414;
        float _RESERVED_IDENTIFIER_FIXUP_1419 = float(_RESERVED_IDENTIFIER_FIXUP_1414 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1419;
        float _RESERVED_IDENTIFIER_FIXUP_1422 = dot(_RESERVED_IDENTIFIER_FIXUP_1408, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2964.z = _RESERVED_IDENTIFIER_FIXUP_1422;
        float _RESERVED_IDENTIFIER_FIXUP_1428 = _RESERVED_IDENTIFIER_FIXUP_1419 + _RESERVED_IDENTIFIER_FIXUP_1422;
        _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1428;
        _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1428 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3455 = _RESERVED_IDENTIFIER_FIXUP_1408;
        _RESERVED_IDENTIFIER_FIXUP_3453 = _RESERVED_IDENTIFIER_FIXUP_2964;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1441 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2808 = _RESERVED_IDENTIFIER_FIXUP_2803;
        _RESERVED_IDENTIFIER_FIXUP_2808.z = _RESERVED_IDENTIFIER_FIXUP_1441;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3456;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3454;
        if (_RESERVED_IDENTIFIER_FIXUP_1441 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1450 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2898 = _RESERVED_IDENTIFIER_FIXUP_2808;
            _RESERVED_IDENTIFIER_FIXUP_2898.z = _RESERVED_IDENTIFIER_FIXUP_1450.x;
            _RESERVED_IDENTIFIER_FIXUP_2898.w = _RESERVED_IDENTIFIER_FIXUP_1450.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1460 = _RESERVED_IDENTIFIER_FIXUP_2898.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2902;
            _RESERVED_IDENTIFIER_FIXUP_2902.x = _RESERVED_IDENTIFIER_FIXUP_1460.x;
            _RESERVED_IDENTIFIER_FIXUP_2902.y = _RESERVED_IDENTIFIER_FIXUP_1460.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_2898.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2906;
            _RESERVED_IDENTIFIER_FIXUP_2906.x = _RESERVED_IDENTIFIER_FIXUP_1470.x;
            _RESERVED_IDENTIFIER_FIXUP_2906.y = _RESERVED_IDENTIFIER_FIXUP_1470.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1480 = _RESERVED_IDENTIFIER_FIXUP_2898.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2910;
            _RESERVED_IDENTIFIER_FIXUP_2910.x = _RESERVED_IDENTIFIER_FIXUP_1480.x;
            _RESERVED_IDENTIFIER_FIXUP_2910.y = _RESERVED_IDENTIFIER_FIXUP_1480.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1490 = _RESERVED_IDENTIFIER_FIXUP_2898.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2914;
            _RESERVED_IDENTIFIER_FIXUP_2914.x = _RESERVED_IDENTIFIER_FIXUP_1490.x;
            _RESERVED_IDENTIFIER_FIXUP_2914.y = _RESERVED_IDENTIFIER_FIXUP_1490.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1498 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1498.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1498.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1504 = hdLod7(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_2902.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2906.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2910.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2914.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_2902.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1504.y = hdLod7(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2906.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1504.z = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2910.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1504.w = hdLod7(param_28, param_29).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1561 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1504 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2914.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1567 = hdLod7(param_30, param_31).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2898.z = _RESERVED_IDENTIFIER_FIXUP_1567;
            float _RESERVED_IDENTIFIER_FIXUP_1572 = float(_RESERVED_IDENTIFIER_FIXUP_1567 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2898.z = _RESERVED_IDENTIFIER_FIXUP_1572;
            float _RESERVED_IDENTIFIER_FIXUP_1575 = dot(_RESERVED_IDENTIFIER_FIXUP_1561, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2898.w = _RESERVED_IDENTIFIER_FIXUP_1575;
            float _RESERVED_IDENTIFIER_FIXUP_1581 = _RESERVED_IDENTIFIER_FIXUP_1572 + _RESERVED_IDENTIFIER_FIXUP_1575;
            _RESERVED_IDENTIFIER_FIXUP_2898.z = _RESERVED_IDENTIFIER_FIXUP_1581;
            _RESERVED_IDENTIFIER_FIXUP_2898.y = _RESERVED_IDENTIFIER_FIXUP_1581 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3456 = _RESERVED_IDENTIFIER_FIXUP_1561;
            _RESERVED_IDENTIFIER_FIXUP_3454 = _RESERVED_IDENTIFIER_FIXUP_2898;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2812 = _RESERVED_IDENTIFIER_FIXUP_3452;
            _RESERVED_IDENTIFIER_FIXUP_2812.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2812.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1597 = (_RESERVED_IDENTIFIER_FIXUP_2812.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2817;
            _RESERVED_IDENTIFIER_FIXUP_2817.x = _RESERVED_IDENTIFIER_FIXUP_1597.x;
            _RESERVED_IDENTIFIER_FIXUP_2817.y = _RESERVED_IDENTIFIER_FIXUP_1597.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_2817.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2821;
            _RESERVED_IDENTIFIER_FIXUP_2821.x = _RESERVED_IDENTIFIER_FIXUP_1607.x;
            _RESERVED_IDENTIFIER_FIXUP_2821.y = _RESERVED_IDENTIFIER_FIXUP_1607.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1617 = _RESERVED_IDENTIFIER_FIXUP_2817.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2825;
            _RESERVED_IDENTIFIER_FIXUP_2825.x = _RESERVED_IDENTIFIER_FIXUP_1617.x;
            _RESERVED_IDENTIFIER_FIXUP_2825.y = _RESERVED_IDENTIFIER_FIXUP_1617.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1627 = _RESERVED_IDENTIFIER_FIXUP_2817.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2829;
            _RESERVED_IDENTIFIER_FIXUP_2829.x = _RESERVED_IDENTIFIER_FIXUP_1627.x;
            _RESERVED_IDENTIFIER_FIXUP_2829.y = _RESERVED_IDENTIFIER_FIXUP_1627.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1637 = _RESERVED_IDENTIFIER_FIXUP_2817.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2833;
            _RESERVED_IDENTIFIER_FIXUP_2833.x = _RESERVED_IDENTIFIER_FIXUP_1637.x;
            _RESERVED_IDENTIFIER_FIXUP_2833.y = _RESERVED_IDENTIFIER_FIXUP_1637.y;
            _RESERVED_IDENTIFIER_FIXUP_2817.w = 0.0;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2817.xy;
            float param_33 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1651 = hdLod8(param_32, param_33);
            _RESERVED_IDENTIFIER_FIXUP_2821.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2825.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2829.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2833.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_2821.xy;
            float param_35 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1651.y = hdLod8(param_34, param_35).x;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2825.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1651.z = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2829.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1651.w = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2833.xy;
            float param_41 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1714 = hdLod8(param_40, param_41).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2873 = _RESERVED_IDENTIFIER_FIXUP_2808;
            _RESERVED_IDENTIFIER_FIXUP_2873.z = _RESERVED_IDENTIFIER_FIXUP_1714;
            float _RESERVED_IDENTIFIER_FIXUP_1719 = float(_RESERVED_IDENTIFIER_FIXUP_1714 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2873.z = _RESERVED_IDENTIFIER_FIXUP_1719;
            float _RESERVED_IDENTIFIER_FIXUP_1722 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1651 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2873.w = _RESERVED_IDENTIFIER_FIXUP_1722;
            float _RESERVED_IDENTIFIER_FIXUP_1728 = _RESERVED_IDENTIFIER_FIXUP_1719 + _RESERVED_IDENTIFIER_FIXUP_1722;
            _RESERVED_IDENTIFIER_FIXUP_2873.z = _RESERVED_IDENTIFIER_FIXUP_1728;
            float _RESERVED_IDENTIFIER_FIXUP_1736 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2873.w = _RESERVED_IDENTIFIER_FIXUP_1736;
            float _RESERVED_IDENTIFIER_FIXUP_1742 = clamp((_RESERVED_IDENTIFIER_FIXUP_1736 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2873.w = _RESERVED_IDENTIFIER_FIXUP_1742;
            float _RESERVED_IDENTIFIER_FIXUP_1747 = (_RESERVED_IDENTIFIER_FIXUP_1728 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2873.z = _RESERVED_IDENTIFIER_FIXUP_1747;
            _RESERVED_IDENTIFIER_FIXUP_2873.y = (_RESERVED_IDENTIFIER_FIXUP_1742 * _RESERVED_IDENTIFIER_FIXUP_1747) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3456 = _RESERVED_IDENTIFIER_FIXUP_2812;
            _RESERVED_IDENTIFIER_FIXUP_3454 = _RESERVED_IDENTIFIER_FIXUP_2873;
        }
        _RESERVED_IDENTIFIER_FIXUP_3455 = _RESERVED_IDENTIFIER_FIXUP_3456;
        _RESERVED_IDENTIFIER_FIXUP_3453 = _RESERVED_IDENTIFIER_FIXUP_3454;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1762 = min(_RESERVED_IDENTIFIER_FIXUP_3453.y, _RESERVED_IDENTIFIER_FIXUP_3453.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3032 = _RESERVED_IDENTIFIER_FIXUP_3455;
    _RESERVED_IDENTIFIER_FIXUP_3032.x = _RESERVED_IDENTIFIER_FIXUP_1762;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3035 = _RESERVED_IDENTIFIER_FIXUP_3453;
    _RESERVED_IDENTIFIER_FIXUP_3035.x = (_RESERVED_IDENTIFIER_FIXUP_1762 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1773 = _RESERVED_IDENTIFIER_FIXUP_1103.xyz * _RESERVED_IDENTIFIER_FIXUP_3035.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3037 = _RESERVED_IDENTIFIER_FIXUP_1103;
    _RESERVED_IDENTIFIER_FIXUP_3037.x = _RESERVED_IDENTIFIER_FIXUP_1773.x;
    _RESERVED_IDENTIFIER_FIXUP_3037.y = _RESERVED_IDENTIFIER_FIXUP_1773.y;
    _RESERVED_IDENTIFIER_FIXUP_3037.z = _RESERVED_IDENTIFIER_FIXUP_1773.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1784 = _RESERVED_IDENTIFIER_FIXUP_3037.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3449).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3043 = _RESERVED_IDENTIFIER_FIXUP_3037;
    _RESERVED_IDENTIFIER_FIXUP_3043.x = _RESERVED_IDENTIFIER_FIXUP_1784.x;
    _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1784.y;
    _RESERVED_IDENTIFIER_FIXUP_3043.z = _RESERVED_IDENTIFIER_FIXUP_1784.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1795 = _RESERVED_IDENTIFIER_FIXUP_3043.xyz + _RESERVED_IDENTIFIER_FIXUP_3043.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3049 = _RESERVED_IDENTIFIER_FIXUP_3043;
    _RESERVED_IDENTIFIER_FIXUP_3049.x = _RESERVED_IDENTIFIER_FIXUP_1795.x;
    _RESERVED_IDENTIFIER_FIXUP_3049.y = _RESERVED_IDENTIFIER_FIXUP_1795.y;
    _RESERVED_IDENTIFIER_FIXUP_3049.z = _RESERVED_IDENTIFIER_FIXUP_1795.z;
    _RESERVED_IDENTIFIER_FIXUP_3035.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3035.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3035.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1820 = (_RESERVED_IDENTIFIER_FIXUP_3035.xyz * _RESERVED_IDENTIFIER_FIXUP_3032.xxx) + _RESERVED_IDENTIFIER_FIXUP_3049.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3061 = _RESERVED_IDENTIFIER_FIXUP_3049;
    _RESERVED_IDENTIFIER_FIXUP_3061.x = _RESERVED_IDENTIFIER_FIXUP_1820.x;
    _RESERVED_IDENTIFIER_FIXUP_3061.y = _RESERVED_IDENTIFIER_FIXUP_1820.y;
    _RESERVED_IDENTIFIER_FIXUP_3061.z = _RESERVED_IDENTIFIER_FIXUP_1820.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1833 = _RESERVED_IDENTIFIER_FIXUP_3061.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3067 = _RESERVED_IDENTIFIER_FIXUP_3061;
    _RESERVED_IDENTIFIER_FIXUP_3067.x = _RESERVED_IDENTIFIER_FIXUP_1833.x;
    _RESERVED_IDENTIFIER_FIXUP_3067.y = _RESERVED_IDENTIFIER_FIXUP_1833.y;
    _RESERVED_IDENTIFIER_FIXUP_3067.z = _RESERVED_IDENTIFIER_FIXUP_1833.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1888 = OptTex0( texcoord0.xyz);
    vec2 param_42 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1892 = hdTex1(param_42);
    vec2 param_43 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1896 = hdTex2(param_43);
    float _RESERVED_IDENTIFIER_FIXUP_1900 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1896.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3081 = _RESERVED_IDENTIFIER_FIXUP_1896;
    _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1900;
    _RESERVED_IDENTIFIER_FIXUP_3081.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1900;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1910 = _RESERVED_IDENTIFIER_FIXUP_1892 * _RESERVED_IDENTIFIER_FIXUP_3081.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1916 = (_RESERVED_IDENTIFIER_FIXUP_1888 * _RESERVED_IDENTIFIER_FIXUP_3081.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1910;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3088 = _RESERVED_IDENTIFIER_FIXUP_1910;
    _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_1110;
    float _RESERVED_IDENTIFIER_FIXUP_1929 = clamp((_RESERVED_IDENTIFIER_FIXUP_1110 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_1929;
    float _RESERVED_IDENTIFIER_FIXUP_1935 = ((-_RESERVED_IDENTIFIER_FIXUP_1929) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_1935;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3464;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3463;
    if (_RESERVED_IDENTIFIER_FIXUP_1935 != (-_RESERVED_IDENTIFIER_FIXUP_1935))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1947 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3100 = _RESERVED_IDENTIFIER_FIXUP_3088;
        _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_1947.x;
        _RESERVED_IDENTIFIER_FIXUP_3100.z = _RESERVED_IDENTIFIER_FIXUP_1947.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1957 = _RESERVED_IDENTIFIER_FIXUP_3100.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3104;
        _RESERVED_IDENTIFIER_FIXUP_3104.x = _RESERVED_IDENTIFIER_FIXUP_1957.x;
        _RESERVED_IDENTIFIER_FIXUP_3104.y = _RESERVED_IDENTIFIER_FIXUP_1957.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1967 = _RESERVED_IDENTIFIER_FIXUP_3100.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3108;
        _RESERVED_IDENTIFIER_FIXUP_3108.x = _RESERVED_IDENTIFIER_FIXUP_1967.x;
        _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_1967.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1977 = _RESERVED_IDENTIFIER_FIXUP_3100.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3112;
        _RESERVED_IDENTIFIER_FIXUP_3112.x = _RESERVED_IDENTIFIER_FIXUP_1977.x;
        _RESERVED_IDENTIFIER_FIXUP_3112.y = _RESERVED_IDENTIFIER_FIXUP_1977.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_3100.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3116;
        _RESERVED_IDENTIFIER_FIXUP_3116.x = _RESERVED_IDENTIFIER_FIXUP_1987.x;
        _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1987.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1995 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_1995.xy;
        float param_45 = _RESERVED_IDENTIFIER_FIXUP_1995.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2001 = hdLod5(param_44, param_45);
        _RESERVED_IDENTIFIER_FIXUP_3104.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3108.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3112.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3116.w = 0.0;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3104.xy;
        float param_47 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2001.y = hdLod5(param_46, param_47).x;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3108.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2001.z = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3112.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2001.w = hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2058 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2001 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3116.xy;
        float param_53 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2064 = hdLod5(param_52, param_53).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_2064;
        float _RESERVED_IDENTIFIER_FIXUP_2069 = float(_RESERVED_IDENTIFIER_FIXUP_2064 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_2069;
        float _RESERVED_IDENTIFIER_FIXUP_2072 = dot(_RESERVED_IDENTIFIER_FIXUP_2058, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3100.z = _RESERVED_IDENTIFIER_FIXUP_2072;
        float _RESERVED_IDENTIFIER_FIXUP_2078 = _RESERVED_IDENTIFIER_FIXUP_2069 + _RESERVED_IDENTIFIER_FIXUP_2072;
        _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_2078;
        float _RESERVED_IDENTIFIER_FIXUP_2083 = (_RESERVED_IDENTIFIER_FIXUP_2078 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3100.y = _RESERVED_IDENTIFIER_FIXUP_2083;
        _RESERVED_IDENTIFIER_FIXUP_3100.x = (_RESERVED_IDENTIFIER_FIXUP_1929 * _RESERVED_IDENTIFIER_FIXUP_2083) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_2058;
        _RESERVED_IDENTIFIER_FIXUP_3463 = _RESERVED_IDENTIFIER_FIXUP_3100;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3098 = _RESERVED_IDENTIFIER_FIXUP_3088;
        _RESERVED_IDENTIFIER_FIXUP_3098.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_3081;
        _RESERVED_IDENTIFIER_FIXUP_3463 = _RESERVED_IDENTIFIER_FIXUP_3098;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3172 = _RESERVED_IDENTIFIER_FIXUP_3463;
    _RESERVED_IDENTIFIER_FIXUP_3172.y = _RESERVED_IDENTIFIER_FIXUP_1288;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3467;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3465;
    if (_RESERVED_IDENTIFIER_FIXUP_1288 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2110 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3333 = _RESERVED_IDENTIFIER_FIXUP_3172;
        _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_2110.x;
        _RESERVED_IDENTIFIER_FIXUP_3333.z = _RESERVED_IDENTIFIER_FIXUP_2110.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2120 = _RESERVED_IDENTIFIER_FIXUP_3333.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3337;
        _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_2120.x;
        _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_2120.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2130 = _RESERVED_IDENTIFIER_FIXUP_3333.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3341;
        _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_2130.x;
        _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2130.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2140 = _RESERVED_IDENTIFIER_FIXUP_3333.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3345;
        _RESERVED_IDENTIFIER_FIXUP_3345.x = _RESERVED_IDENTIFIER_FIXUP_2140.x;
        _RESERVED_IDENTIFIER_FIXUP_3345.y = _RESERVED_IDENTIFIER_FIXUP_2140.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2150 = _RESERVED_IDENTIFIER_FIXUP_3333.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3349;
        _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_2150.x;
        _RESERVED_IDENTIFIER_FIXUP_3349.y = _RESERVED_IDENTIFIER_FIXUP_2150.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2158 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2158.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2158.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2164 = hdLod6(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3337.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3341.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3345.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3349.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3337.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2164.y = hdLod6(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3341.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2164.z = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3345.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2164.w = hdLod6(param_60, param_61).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2221 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2164 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3349.xy;
        float param_63 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2227 = hdLod6(param_62, param_63).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_2227;
        float _RESERVED_IDENTIFIER_FIXUP_2232 = float(_RESERVED_IDENTIFIER_FIXUP_2227 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_2232;
        float _RESERVED_IDENTIFIER_FIXUP_2235 = dot(_RESERVED_IDENTIFIER_FIXUP_2221, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3333.z = _RESERVED_IDENTIFIER_FIXUP_2235;
        float _RESERVED_IDENTIFIER_FIXUP_2241 = _RESERVED_IDENTIFIER_FIXUP_2232 + _RESERVED_IDENTIFIER_FIXUP_2235;
        _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_2241;
        _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_2241 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3467 = _RESERVED_IDENTIFIER_FIXUP_2221;
        _RESERVED_IDENTIFIER_FIXUP_3465 = _RESERVED_IDENTIFIER_FIXUP_3333;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2254 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3177 = _RESERVED_IDENTIFIER_FIXUP_3172;
        _RESERVED_IDENTIFIER_FIXUP_3177.z = _RESERVED_IDENTIFIER_FIXUP_2254;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3468;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3466;
        if (_RESERVED_IDENTIFIER_FIXUP_2254 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2263 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3267 = _RESERVED_IDENTIFIER_FIXUP_3177;
            _RESERVED_IDENTIFIER_FIXUP_3267.z = _RESERVED_IDENTIFIER_FIXUP_2263.x;
            _RESERVED_IDENTIFIER_FIXUP_3267.w = _RESERVED_IDENTIFIER_FIXUP_2263.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2273 = _RESERVED_IDENTIFIER_FIXUP_3267.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3271;
            _RESERVED_IDENTIFIER_FIXUP_3271.x = _RESERVED_IDENTIFIER_FIXUP_2273.x;
            _RESERVED_IDENTIFIER_FIXUP_3271.y = _RESERVED_IDENTIFIER_FIXUP_2273.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2283 = _RESERVED_IDENTIFIER_FIXUP_3267.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3275;
            _RESERVED_IDENTIFIER_FIXUP_3275.x = _RESERVED_IDENTIFIER_FIXUP_2283.x;
            _RESERVED_IDENTIFIER_FIXUP_3275.y = _RESERVED_IDENTIFIER_FIXUP_2283.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2293 = _RESERVED_IDENTIFIER_FIXUP_3267.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3279;
            _RESERVED_IDENTIFIER_FIXUP_3279.x = _RESERVED_IDENTIFIER_FIXUP_2293.x;
            _RESERVED_IDENTIFIER_FIXUP_3279.y = _RESERVED_IDENTIFIER_FIXUP_2293.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2303 = _RESERVED_IDENTIFIER_FIXUP_3267.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3283;
            _RESERVED_IDENTIFIER_FIXUP_3283.x = _RESERVED_IDENTIFIER_FIXUP_2303.x;
            _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_2303.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2311 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_2311.xy;
            float param_65 = _RESERVED_IDENTIFIER_FIXUP_2311.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2317 = hdLod7(param_64, param_65);
            _RESERVED_IDENTIFIER_FIXUP_3271.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3275.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3279.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3283.w = 0.0;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3271.xy;
            float param_67 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2317.y = hdLod7(param_66, param_67).x;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3275.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2317.z = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3279.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2317.w = hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2374 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2317 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3283.xy;
            float param_73 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2380 = hdLod7(param_72, param_73).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3267.z = _RESERVED_IDENTIFIER_FIXUP_2380;
            float _RESERVED_IDENTIFIER_FIXUP_2385 = float(_RESERVED_IDENTIFIER_FIXUP_2380 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3267.z = _RESERVED_IDENTIFIER_FIXUP_2385;
            float _RESERVED_IDENTIFIER_FIXUP_2388 = dot(_RESERVED_IDENTIFIER_FIXUP_2374, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3267.w = _RESERVED_IDENTIFIER_FIXUP_2388;
            float _RESERVED_IDENTIFIER_FIXUP_2394 = _RESERVED_IDENTIFIER_FIXUP_2385 + _RESERVED_IDENTIFIER_FIXUP_2388;
            _RESERVED_IDENTIFIER_FIXUP_3267.z = _RESERVED_IDENTIFIER_FIXUP_2394;
            _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_2394 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3468 = _RESERVED_IDENTIFIER_FIXUP_2374;
            _RESERVED_IDENTIFIER_FIXUP_3466 = _RESERVED_IDENTIFIER_FIXUP_3267;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3181 = _RESERVED_IDENTIFIER_FIXUP_3464;
            _RESERVED_IDENTIFIER_FIXUP_3181.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3181.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2410 = (_RESERVED_IDENTIFIER_FIXUP_3181.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3186;
            _RESERVED_IDENTIFIER_FIXUP_3186.x = _RESERVED_IDENTIFIER_FIXUP_2410.x;
            _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_2410.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2420 = _RESERVED_IDENTIFIER_FIXUP_3186.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3190;
            _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_2420.x;
            _RESERVED_IDENTIFIER_FIXUP_3190.y = _RESERVED_IDENTIFIER_FIXUP_2420.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2430 = _RESERVED_IDENTIFIER_FIXUP_3186.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3194;
            _RESERVED_IDENTIFIER_FIXUP_3194.x = _RESERVED_IDENTIFIER_FIXUP_2430.x;
            _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_2430.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2440 = _RESERVED_IDENTIFIER_FIXUP_3186.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3198;
            _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_2440.x;
            _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_2440.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2450 = _RESERVED_IDENTIFIER_FIXUP_3186.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3202;
            _RESERVED_IDENTIFIER_FIXUP_3202.x = _RESERVED_IDENTIFIER_FIXUP_2450.x;
            _RESERVED_IDENTIFIER_FIXUP_3202.y = _RESERVED_IDENTIFIER_FIXUP_2450.y;
            _RESERVED_IDENTIFIER_FIXUP_3186.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3186.xy;
            float param_75 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2464 = hdLod8(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3190.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3194.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3198.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3202.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3190.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2464.y = hdLod8(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3194.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2464.z = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3198.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2464.w = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3202.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2527 = hdLod8(param_82, param_83).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3242 = _RESERVED_IDENTIFIER_FIXUP_3177;
            _RESERVED_IDENTIFIER_FIXUP_3242.z = _RESERVED_IDENTIFIER_FIXUP_2527;
            float _RESERVED_IDENTIFIER_FIXUP_2532 = float(_RESERVED_IDENTIFIER_FIXUP_2527 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3242.z = _RESERVED_IDENTIFIER_FIXUP_2532;
            float _RESERVED_IDENTIFIER_FIXUP_2535 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2464 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3242.w = _RESERVED_IDENTIFIER_FIXUP_2535;
            float _RESERVED_IDENTIFIER_FIXUP_2541 = _RESERVED_IDENTIFIER_FIXUP_2532 + _RESERVED_IDENTIFIER_FIXUP_2535;
            _RESERVED_IDENTIFIER_FIXUP_3242.z = _RESERVED_IDENTIFIER_FIXUP_2541;
            float _RESERVED_IDENTIFIER_FIXUP_2549 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3242.w = _RESERVED_IDENTIFIER_FIXUP_2549;
            float _RESERVED_IDENTIFIER_FIXUP_2555 = clamp((_RESERVED_IDENTIFIER_FIXUP_2549 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3242.w = _RESERVED_IDENTIFIER_FIXUP_2555;
            float _RESERVED_IDENTIFIER_FIXUP_2560 = (_RESERVED_IDENTIFIER_FIXUP_2541 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3242.z = _RESERVED_IDENTIFIER_FIXUP_2560;
            _RESERVED_IDENTIFIER_FIXUP_3242.y = (_RESERVED_IDENTIFIER_FIXUP_2555 * _RESERVED_IDENTIFIER_FIXUP_2560) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3468 = _RESERVED_IDENTIFIER_FIXUP_3181;
            _RESERVED_IDENTIFIER_FIXUP_3466 = _RESERVED_IDENTIFIER_FIXUP_3242;
        }
        _RESERVED_IDENTIFIER_FIXUP_3467 = _RESERVED_IDENTIFIER_FIXUP_3468;
        _RESERVED_IDENTIFIER_FIXUP_3465 = _RESERVED_IDENTIFIER_FIXUP_3466;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2575 = min(_RESERVED_IDENTIFIER_FIXUP_3465.y, _RESERVED_IDENTIFIER_FIXUP_3465.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3401 = _RESERVED_IDENTIFIER_FIXUP_3467;
    _RESERVED_IDENTIFIER_FIXUP_3401.x = _RESERVED_IDENTIFIER_FIXUP_2575;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3404 = _RESERVED_IDENTIFIER_FIXUP_3465;
    _RESERVED_IDENTIFIER_FIXUP_3404.x = (_RESERVED_IDENTIFIER_FIXUP_2575 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2586 = _RESERVED_IDENTIFIER_FIXUP_1916.xyz * _RESERVED_IDENTIFIER_FIXUP_3404.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3406 = _RESERVED_IDENTIFIER_FIXUP_1916;
    _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_2586.x;
    _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_2586.y;
    _RESERVED_IDENTIFIER_FIXUP_3406.z = _RESERVED_IDENTIFIER_FIXUP_2586.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2597 = _RESERVED_IDENTIFIER_FIXUP_3406.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3412 = _RESERVED_IDENTIFIER_FIXUP_3406;
    _RESERVED_IDENTIFIER_FIXUP_3412.x = _RESERVED_IDENTIFIER_FIXUP_2597.x;
    _RESERVED_IDENTIFIER_FIXUP_3412.y = _RESERVED_IDENTIFIER_FIXUP_2597.y;
    _RESERVED_IDENTIFIER_FIXUP_3412.z = _RESERVED_IDENTIFIER_FIXUP_2597.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2608 = _RESERVED_IDENTIFIER_FIXUP_3412.xyz + _RESERVED_IDENTIFIER_FIXUP_3412.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3418 = _RESERVED_IDENTIFIER_FIXUP_3412;
    _RESERVED_IDENTIFIER_FIXUP_3418.x = _RESERVED_IDENTIFIER_FIXUP_2608.x;
    _RESERVED_IDENTIFIER_FIXUP_3418.y = _RESERVED_IDENTIFIER_FIXUP_2608.y;
    _RESERVED_IDENTIFIER_FIXUP_3418.z = _RESERVED_IDENTIFIER_FIXUP_2608.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2619 = _RESERVED_IDENTIFIER_FIXUP_3418.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3404.x = _RESERVED_IDENTIFIER_FIXUP_2619.x;
    _RESERVED_IDENTIFIER_FIXUP_3404.y = _RESERVED_IDENTIFIER_FIXUP_2619.y;
    _RESERVED_IDENTIFIER_FIXUP_3404.z = _RESERVED_IDENTIFIER_FIXUP_2619.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2633 = (_RESERVED_IDENTIFIER_FIXUP_3404.xyz * _RESERVED_IDENTIFIER_FIXUP_3401.xxx) + _RESERVED_IDENTIFIER_FIXUP_3418.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3430 = _RESERVED_IDENTIFIER_FIXUP_3418;
    _RESERVED_IDENTIFIER_FIXUP_3430.x = _RESERVED_IDENTIFIER_FIXUP_2633.x;
    _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_2633.y;
    _RESERVED_IDENTIFIER_FIXUP_3430.z = _RESERVED_IDENTIFIER_FIXUP_2633.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2646 = _RESERVED_IDENTIFIER_FIXUP_3430.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_3430;
    _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_2646.x;
    _RESERVED_IDENTIFIER_FIXUP_3436.y = _RESERVED_IDENTIFIER_FIXUP_2646.y;
    _RESERVED_IDENTIFIER_FIXUP_3436.z = _RESERVED_IDENTIFIER_FIXUP_2646.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3436.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_935 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_944;
    if (_RESERVED_IDENTIFIER_FIXUP_935)
    {
        _RESERVED_IDENTIFIER_FIXUP_944 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_944 = _RESERVED_IDENTIFIER_FIXUP_935;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_944)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_981 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3067.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1008 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2705;
    if (_RESERVED_IDENTIFIER_FIXUP_981 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2705 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_981), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1008);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2705 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1008);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2705;
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
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB133 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB133.x;
        r1.z = hdB133.y;
        vec2 hdB155 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB155.x;
        r2.y = hdB155.y;
        vec2 hdB166 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB166.x;
        r3.y = hdB166.y;
        vec2 hdB177 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB177.x;
        r4.y = hdB177.y;
        vec2 hdB188 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB188.x;
        r5.y = hdB188.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r6.xy;
        float param_3 = r6.w;
        r6 = hdLod5(param_2, param_3);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
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
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
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
    r1.y = max(abs(v5.x), abs(v5.y));
    if (r1.y < 1.0)
    {
        vec2 hdB319 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB319.x;
        r1.z = hdB319.y;
        vec2 hdB329 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB329.x;
        r2.y = hdB329.y;
        vec2 hdB339 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB339.x;
        r3.y = hdB339.y;
        vec2 hdB349 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB349.x;
        r4.y = hdB349.y;
        vec2 hdB359 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB359.x;
        r5.y = hdB359.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod6(param_12, param_13);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_18 = r4.xy;
        float param_19 = r4.w;
        r4 = hdLod6(param_18, param_19);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_20 = r5.xy;
        float param_21 = r5.w;
        r5 = hdLod6(param_20, param_21);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            vec2 hdB474 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB474.x;
            r1.w = hdB474.y;
            vec2 hdB484 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB484.x;
            r2.y = hdB484.y;
            vec2 hdB494 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB494.x;
            r3.y = hdB494.y;
            vec2 hdB504 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB504.x;
            r4.y = hdB504.y;
            vec2 hdB514 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB514.x;
            r5.y = hdB514.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r6.xy;
            float param_23 = r6.w;
            r6 = hdLod7(param_22, param_23);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_28 = r4.xy;
            float param_29 = r4.w;
            r4 = hdLod7(param_28, param_29);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_30 = r5.xy;
            float param_31 = r5.w;
            r5 = hdLod7(param_30, param_31);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v6.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v4.w;
            r2.y = v5.w;
            vec2 hdB622 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB622.x;
            r3.y = hdB622.y;
            vec2 hdB632 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB632.x;
            r4.y = hdB632.y;
            vec2 hdB642 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB642.x;
            r5.y = hdB642.y;
            vec2 hdB652 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB652.x;
            r6.y = hdB652.y;
            vec2 hdB662 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB662.x;
            r7.y = hdB662.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod8(param_32, param_33);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_34 = r4.xy;
            float param_35 = r4.w;
            r4 = hdLod8(param_34, param_35);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_36 = r5.xy;
            float param_37 = r5.w;
            r5 = hdLod8(param_36, param_37);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_38 = r6.xy;
            float param_39 = r6.w;
            r6 = hdLod8(param_38, param_39);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_40 = r7.xy;
            float param_41 = r7.w;
            r7 = hdLod8(param_40, param_41);
            r3.y = r4.x;
            r3.z = r5.x;
            r3.w = r6.x;
            r3 += (-v6.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v6.w);
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
    vec4 hdB797 = r0;
    vec3 hdB801 = hdB797.xyz * r1.xxx;
    r0.x = hdB801.x;
    r0.y = hdB801.y;
    r0.z = hdB801.z;
    vec4 hdB808 = r0;
    vec3 hdB812 = hdB808.xyz * v0.xyz;
    r0.x = hdB812.x;
    r0.y = hdB812.y;
    r0.z = hdB812.z;
    vec4 hdB819 = r0;
    vec4 hdB821 = r0;
    vec3 hdB823 = hdB819.xyz + hdB821.xyz;
    r0.x = hdB823.x;
    r0.y = hdB823.y;
    r0.z = hdB823.z;
    vec3 hdB834 = r0.www * v1.xyz;
    r1.x = hdB834.x;
    r1.y = hdB834.y;
    r1.z = hdB834.z;
    vec4 hdB846 = r0;
    vec3 hdB848 = (r1.xyz * r2.xxx) + hdB846.xyz;
    r0.x = hdB848.x;
    r0.y = hdB848.y;
    r0.z = hdB848.z;
    vec4 hdB855 = r0;
    vec3 hdB862 = hdB855.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB862.x;
    r0.y = hdB862.y;
    r0.z = hdB862.z;
    vec3 hdB877 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB877.x;
    oC0.y = hdB877.y;
    oC0.z = hdB877.z;
    oC0.w = 1.0;
    bool hdB890 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB898;
    if (hdB890)
    {
        hdB898 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB898 = hdB890;
    }
    if (hdB898)
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
    bool _3047 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3057;
    if (_3047)
    {
        _3057 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3057 = _3047;
    }
    if (_3057)
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
        bool _3082 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3097;
        if (!_3082)
        {
            _3097 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3097 = _3082;
        }
        if (_3097)
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
