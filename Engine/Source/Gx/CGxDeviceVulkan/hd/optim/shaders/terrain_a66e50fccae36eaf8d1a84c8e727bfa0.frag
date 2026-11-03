#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3686;
vec4 _RESERVED_IDENTIFIER_FIXUP_3687;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _55 = hdOverride >= 0;
    bool _74;
    if (_55)
    {
        _74 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _74 = _55;
    }
    vec4 _75;
    if (_74)
    {
        _75 = vec4(float(hdOverride));
    }
    else
    {
        _75 = value;
    }
    return _75;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _93 = hdOverride >= 0;
    bool _103;
    if (_93)
    {
        _103 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _103 = _93;
    }
    vec4 _104;
    if (_103)
    {
        _104 = vec4(float(hdOverride));
    }
    else
    {
        _104 = value;
    }
    return _104;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _122 = hdOverride >= 0;
    bool _132;
    if (_122)
    {
        _132 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _132 = _122;
    }
    vec4 _133;
    if (_132)
    {
        _133 = vec4(float(hdOverride));
    }
    else
    {
        _133 = value;
    }
    return _133;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _151 = hdOverride >= 0;
    bool _161;
    if (_151)
    {
        _161 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _161 = _151;
    }
    vec4 _162;
    if (_161)
    {
        _162 = vec4(float(hdOverride));
    }
    else
    {
        _162 = value;
    }
    return _162;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _180 = hdOverride >= 0;
    bool _190;
    if (_180)
    {
        _190 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _190 = _180;
    }
    vec4 _191;
    if (_190)
    {
        _191 = vec4(float(hdOverride));
    }
    else
    {
        _191 = value;
    }
    return _191;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1148 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1152 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_1156 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1152.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2927 = _RESERVED_IDENTIFIER_FIXUP_1152;
    _RESERVED_IDENTIFIER_FIXUP_2927.x = _RESERVED_IDENTIFIER_FIXUP_1156;
    _RESERVED_IDENTIFIER_FIXUP_2927.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1156;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1166 = _RESERVED_IDENTIFIER_FIXUP_1148 * _RESERVED_IDENTIFIER_FIXUP_2927.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_1173 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2934 = _RESERVED_IDENTIFIER_FIXUP_2927;
    _RESERVED_IDENTIFIER_FIXUP_2934.x = _RESERVED_IDENTIFIER_FIXUP_1173;
    float _RESERVED_IDENTIFIER_FIXUP_1179 = clamp((_RESERVED_IDENTIFIER_FIXUP_1173 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2934.x = _RESERVED_IDENTIFIER_FIXUP_1179;
    float _RESERVED_IDENTIFIER_FIXUP_1185 = ((-_RESERVED_IDENTIFIER_FIXUP_1179) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2934.x = _RESERVED_IDENTIFIER_FIXUP_1185;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3688;
    if (_RESERVED_IDENTIFIER_FIXUP_1185 != (-_RESERVED_IDENTIFIER_FIXUP_1185))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1197 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_1197.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_1197.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1203 = hdLod5(param_1, param_2);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1207 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3146 = _RESERVED_IDENTIFIER_FIXUP_1203;
        _RESERVED_IDENTIFIER_FIXUP_3146.y = _RESERVED_IDENTIFIER_FIXUP_1207.x;
        _RESERVED_IDENTIFIER_FIXUP_3146.z = _RESERVED_IDENTIFIER_FIXUP_1207.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1217 = _RESERVED_IDENTIFIER_FIXUP_3146.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3150;
        _RESERVED_IDENTIFIER_FIXUP_3150.x = _RESERVED_IDENTIFIER_FIXUP_1217.x;
        _RESERVED_IDENTIFIER_FIXUP_3150.y = _RESERVED_IDENTIFIER_FIXUP_1217.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1224 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_1224.y;
        _RESERVED_IDENTIFIER_FIXUP_3150.w = _RESERVED_IDENTIFIER_FIXUP_1228;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_3150.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1228;
        float _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1203.x + hdLod5(param_3, param_4).x;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1239;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1246 = _RESERVED_IDENTIFIER_FIXUP_3146.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3163;
        _RESERVED_IDENTIFIER_FIXUP_3163.x = _RESERVED_IDENTIFIER_FIXUP_1246.x;
        _RESERVED_IDENTIFIER_FIXUP_3163.y = _RESERVED_IDENTIFIER_FIXUP_1246.y;
        _RESERVED_IDENTIFIER_FIXUP_3163.w = _RESERVED_IDENTIFIER_FIXUP_1228;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3163.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1228;
        float _RESERVED_IDENTIFIER_FIXUP_1268 = _RESERVED_IDENTIFIER_FIXUP_1239 + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1268;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_3146.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3176;
        _RESERVED_IDENTIFIER_FIXUP_3176.x = _RESERVED_IDENTIFIER_FIXUP_1275.x;
        _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1275.y;
        _RESERVED_IDENTIFIER_FIXUP_3176.w = _RESERVED_IDENTIFIER_FIXUP_1228;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3176.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1228;
        float _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_1268 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1297;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1304 = _RESERVED_IDENTIFIER_FIXUP_3146.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3189;
        _RESERVED_IDENTIFIER_FIXUP_3189.x = _RESERVED_IDENTIFIER_FIXUP_1304.x;
        _RESERVED_IDENTIFIER_FIXUP_3189.y = _RESERVED_IDENTIFIER_FIXUP_1304.y;
        _RESERVED_IDENTIFIER_FIXUP_3189.w = _RESERVED_IDENTIFIER_FIXUP_1228;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3189.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1228;
        float _RESERVED_IDENTIFIER_FIXUP_1326 = _RESERVED_IDENTIFIER_FIXUP_1297 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1326;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1333 = _RESERVED_IDENTIFIER_FIXUP_3146.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3202;
        _RESERVED_IDENTIFIER_FIXUP_3202.x = _RESERVED_IDENTIFIER_FIXUP_1333.x;
        _RESERVED_IDENTIFIER_FIXUP_3202.y = _RESERVED_IDENTIFIER_FIXUP_1333.y;
        _RESERVED_IDENTIFIER_FIXUP_3202.w = _RESERVED_IDENTIFIER_FIXUP_1228;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3202.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1228;
        float _RESERVED_IDENTIFIER_FIXUP_1355 = _RESERVED_IDENTIFIER_FIXUP_1326 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1355;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_3146.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3215;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1362.x;
        _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_1362.y;
        _RESERVED_IDENTIFIER_FIXUP_3215.w = _RESERVED_IDENTIFIER_FIXUP_1228;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3215.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1228;
        float _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_1355 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1384;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_3146.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
        _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_1391.x;
        _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_1391.y;
        _RESERVED_IDENTIFIER_FIXUP_3228.w = _RESERVED_IDENTIFIER_FIXUP_1228;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3228.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1228;
        float _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_1384 + hdLod5(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1413;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_3146.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3241;
        _RESERVED_IDENTIFIER_FIXUP_3241.x = _RESERVED_IDENTIFIER_FIXUP_1420.x;
        _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_1420.y;
        _RESERVED_IDENTIFIER_FIXUP_3241.w = _RESERVED_IDENTIFIER_FIXUP_1228;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3241.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1228;
        float _RESERVED_IDENTIFIER_FIXUP_1442 = _RESERVED_IDENTIFIER_FIXUP_1413 + hdLod5(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1442;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1442 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3688 = _RESERVED_IDENTIFIER_FIXUP_3146;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1455 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2934.y = _RESERVED_IDENTIFIER_FIXUP_1455;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3689;
        if (_RESERVED_IDENTIFIER_FIXUP_1455 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1464 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1474 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1476 = _RESERVED_IDENTIFIER_FIXUP_1474.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3086 = _RESERVED_IDENTIFIER_FIXUP_2934;
            _RESERVED_IDENTIFIER_FIXUP_3086.y = _RESERVED_IDENTIFIER_FIXUP_1476;
            _RESERVED_IDENTIFIER_FIXUP_3086.z = _RESERVED_IDENTIFIER_FIXUP_1474.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1484 = _RESERVED_IDENTIFIER_FIXUP_3086.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3090;
            _RESERVED_IDENTIFIER_FIXUP_3090.x = _RESERVED_IDENTIFIER_FIXUP_1484.x;
            _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1484.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1491 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_1491.y;
            _RESERVED_IDENTIFIER_FIXUP_3090.w = _RESERVED_IDENTIFIER_FIXUP_1495;
            vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1464.xy;
            float param_20 = _RESERVED_IDENTIFIER_FIXUP_1464.w;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3090.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1495;
            float _RESERVED_IDENTIFIER_FIXUP_1506 = hdLod6(param_19, param_20).x + hdLod6(param_21, param_22).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3711 = vec4(_RESERVED_IDENTIFIER_FIXUP_1185, _RESERVED_IDENTIFIER_FIXUP_1476, _RESERVED_IDENTIFIER_FIXUP_1474.y, _RESERVED_IDENTIFIER_FIXUP_1506);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_3711.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3103;
            _RESERVED_IDENTIFIER_FIXUP_3103.x = _RESERVED_IDENTIFIER_FIXUP_1513.x;
            _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1513.y;
            _RESERVED_IDENTIFIER_FIXUP_3103.w = _RESERVED_IDENTIFIER_FIXUP_1495;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3103.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1495;
            float _RESERVED_IDENTIFIER_FIXUP_1535 = _RESERVED_IDENTIFIER_FIXUP_1506 + hdLod6(param_23, param_24).x;
            _RESERVED_IDENTIFIER_FIXUP_3711.w = _RESERVED_IDENTIFIER_FIXUP_1535;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1542 = _RESERVED_IDENTIFIER_FIXUP_3711.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3116;
            _RESERVED_IDENTIFIER_FIXUP_3116.x = _RESERVED_IDENTIFIER_FIXUP_1542.x;
            _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1542.y;
            _RESERVED_IDENTIFIER_FIXUP_3116.w = _RESERVED_IDENTIFIER_FIXUP_1495;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3116.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1495;
            float _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_1535 + hdLod6(param_25, param_26).x;
            _RESERVED_IDENTIFIER_FIXUP_3711.w = _RESERVED_IDENTIFIER_FIXUP_1564;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_3711.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3129;
            _RESERVED_IDENTIFIER_FIXUP_3129.x = _RESERVED_IDENTIFIER_FIXUP_1571.x;
            _RESERVED_IDENTIFIER_FIXUP_3129.y = _RESERVED_IDENTIFIER_FIXUP_1571.y;
            _RESERVED_IDENTIFIER_FIXUP_3129.w = _RESERVED_IDENTIFIER_FIXUP_1495;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3129.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1495;
            float _RESERVED_IDENTIFIER_FIXUP_1593 = _RESERVED_IDENTIFIER_FIXUP_1564 + hdLod6(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_3711.y = _RESERVED_IDENTIFIER_FIXUP_1593;
            _RESERVED_IDENTIFIER_FIXUP_3711.x = _RESERVED_IDENTIFIER_FIXUP_1593 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3689 = _RESERVED_IDENTIFIER_FIXUP_3711;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1606 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2951 = _RESERVED_IDENTIFIER_FIXUP_2934;
            _RESERVED_IDENTIFIER_FIXUP_2951.y = _RESERVED_IDENTIFIER_FIXUP_1606;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3690;
            if (_RESERVED_IDENTIFIER_FIXUP_1606 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1615 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1625 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1627 = _RESERVED_IDENTIFIER_FIXUP_1625.x;
                _RESERVED_IDENTIFIER_FIXUP_2951.y = _RESERVED_IDENTIFIER_FIXUP_1627;
                _RESERVED_IDENTIFIER_FIXUP_2951.z = _RESERVED_IDENTIFIER_FIXUP_1625.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1635 = _RESERVED_IDENTIFIER_FIXUP_2951.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3030;
                _RESERVED_IDENTIFIER_FIXUP_3030.x = _RESERVED_IDENTIFIER_FIXUP_1635.x;
                _RESERVED_IDENTIFIER_FIXUP_3030.y = _RESERVED_IDENTIFIER_FIXUP_1635.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1642 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1646 = _RESERVED_IDENTIFIER_FIXUP_1642.y;
                _RESERVED_IDENTIFIER_FIXUP_3030.w = _RESERVED_IDENTIFIER_FIXUP_1646;
                vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_1615.xy;
                float param_30 = _RESERVED_IDENTIFIER_FIXUP_1615.w;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3030.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1646;
                float _RESERVED_IDENTIFIER_FIXUP_1657 = hdLod7(param_29, param_30).x + hdLod7(param_31, param_32).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3710 = vec4(_RESERVED_IDENTIFIER_FIXUP_1185, _RESERVED_IDENTIFIER_FIXUP_1627, _RESERVED_IDENTIFIER_FIXUP_1625.y, _RESERVED_IDENTIFIER_FIXUP_1657);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1664 = _RESERVED_IDENTIFIER_FIXUP_3710.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3043;
                _RESERVED_IDENTIFIER_FIXUP_3043.x = _RESERVED_IDENTIFIER_FIXUP_1664.x;
                _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1664.y;
                _RESERVED_IDENTIFIER_FIXUP_3043.w = _RESERVED_IDENTIFIER_FIXUP_1646;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3043.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1646;
                float _RESERVED_IDENTIFIER_FIXUP_1686 = _RESERVED_IDENTIFIER_FIXUP_1657 + hdLod7(param_33, param_34).x;
                _RESERVED_IDENTIFIER_FIXUP_3710.w = _RESERVED_IDENTIFIER_FIXUP_1686;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1693 = _RESERVED_IDENTIFIER_FIXUP_3710.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3056;
                _RESERVED_IDENTIFIER_FIXUP_3056.x = _RESERVED_IDENTIFIER_FIXUP_1693.x;
                _RESERVED_IDENTIFIER_FIXUP_3056.y = _RESERVED_IDENTIFIER_FIXUP_1693.y;
                _RESERVED_IDENTIFIER_FIXUP_3056.w = _RESERVED_IDENTIFIER_FIXUP_1646;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3056.xy;
                float param_36 = _RESERVED_IDENTIFIER_FIXUP_1646;
                float _RESERVED_IDENTIFIER_FIXUP_1715 = _RESERVED_IDENTIFIER_FIXUP_1686 + hdLod7(param_35, param_36).x;
                _RESERVED_IDENTIFIER_FIXUP_3710.w = _RESERVED_IDENTIFIER_FIXUP_1715;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1722 = _RESERVED_IDENTIFIER_FIXUP_3710.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3069;
                _RESERVED_IDENTIFIER_FIXUP_3069.x = _RESERVED_IDENTIFIER_FIXUP_1722.x;
                _RESERVED_IDENTIFIER_FIXUP_3069.y = _RESERVED_IDENTIFIER_FIXUP_1722.y;
                _RESERVED_IDENTIFIER_FIXUP_3069.w = _RESERVED_IDENTIFIER_FIXUP_1646;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3069.xy;
                float param_38 = _RESERVED_IDENTIFIER_FIXUP_1646;
                float _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_1715 + hdLod7(param_37, param_38).x;
                _RESERVED_IDENTIFIER_FIXUP_3710.y = _RESERVED_IDENTIFIER_FIXUP_1744;
                _RESERVED_IDENTIFIER_FIXUP_3710.x = _RESERVED_IDENTIFIER_FIXUP_1744 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3690 = _RESERVED_IDENTIFIER_FIXUP_3710;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1760 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1764 = _RESERVED_IDENTIFIER_FIXUP_1760.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1775 = vec4(_RESERVED_IDENTIFIER_FIXUP_1760.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1764).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3707 = vec4(_RESERVED_IDENTIFIER_FIXUP_1775 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1764);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1812 = _RESERVED_IDENTIFIER_FIXUP_1775 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2984 = _RESERVED_IDENTIFIER_FIXUP_3707;
                _RESERVED_IDENTIFIER_FIXUP_2984.x = _RESERVED_IDENTIFIER_FIXUP_1812.x;
                _RESERVED_IDENTIFIER_FIXUP_2984.y = _RESERVED_IDENTIFIER_FIXUP_1812.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1834 = _RESERVED_IDENTIFIER_FIXUP_1775 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2993 = _RESERVED_IDENTIFIER_FIXUP_2984;
                _RESERVED_IDENTIFIER_FIXUP_2993.x = _RESERVED_IDENTIFIER_FIXUP_1834.x;
                _RESERVED_IDENTIFIER_FIXUP_2993.y = _RESERVED_IDENTIFIER_FIXUP_1834.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1856 = _RESERVED_IDENTIFIER_FIXUP_1775 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3002 = _RESERVED_IDENTIFIER_FIXUP_2993;
                _RESERVED_IDENTIFIER_FIXUP_3002.x = _RESERVED_IDENTIFIER_FIXUP_1856.x;
                _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1856.y;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_1775;
                float param_40 = _RESERVED_IDENTIFIER_FIXUP_1764;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3707.xy;
                float param_42 = _RESERVED_IDENTIFIER_FIXUP_1764;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_2984.xy;
                float param_44 = _RESERVED_IDENTIFIER_FIXUP_1764;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_2993.xy;
                float param_46 = _RESERVED_IDENTIFIER_FIXUP_1764;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3002.xy;
                float param_48 = _RESERVED_IDENTIFIER_FIXUP_1764;
                float _RESERVED_IDENTIFIER_FIXUP_1871 = (((hdLod8(param_39, param_40).x + hdLod8(param_41, param_42).x) + hdLod8(param_43, param_44).x) + hdLod8(param_45, param_46).x) + hdLod8(param_47, param_48).x;
                float _RESERVED_IDENTIFIER_FIXUP_1885 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1890 = (_RESERVED_IDENTIFIER_FIXUP_1871 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3690 = vec4((_RESERVED_IDENTIFIER_FIXUP_1885 * _RESERVED_IDENTIFIER_FIXUP_1890) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1885, _RESERVED_IDENTIFIER_FIXUP_1890, _RESERVED_IDENTIFIER_FIXUP_1871);
            }
            _RESERVED_IDENTIFIER_FIXUP_3689 = _RESERVED_IDENTIFIER_FIXUP_3690;
        }
        _RESERVED_IDENTIFIER_FIXUP_3688 = _RESERVED_IDENTIFIER_FIXUP_3689;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3260 = _RESERVED_IDENTIFIER_FIXUP_3688;
    _RESERVED_IDENTIFIER_FIXUP_3260.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1918 = _RESERVED_IDENTIFIER_FIXUP_1166.xyz * _RESERVED_IDENTIFIER_FIXUP_3260.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3262 = _RESERVED_IDENTIFIER_FIXUP_1166;
    _RESERVED_IDENTIFIER_FIXUP_3262.x = _RESERVED_IDENTIFIER_FIXUP_1918.x;
    _RESERVED_IDENTIFIER_FIXUP_3262.y = _RESERVED_IDENTIFIER_FIXUP_1918.y;
    _RESERVED_IDENTIFIER_FIXUP_3262.z = _RESERVED_IDENTIFIER_FIXUP_1918.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1929 = _RESERVED_IDENTIFIER_FIXUP_3262.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3686).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3268 = _RESERVED_IDENTIFIER_FIXUP_3262;
    _RESERVED_IDENTIFIER_FIXUP_3268.x = _RESERVED_IDENTIFIER_FIXUP_1929.x;
    _RESERVED_IDENTIFIER_FIXUP_3268.y = _RESERVED_IDENTIFIER_FIXUP_1929.y;
    _RESERVED_IDENTIFIER_FIXUP_3268.z = _RESERVED_IDENTIFIER_FIXUP_1929.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1940 = _RESERVED_IDENTIFIER_FIXUP_3268.xyz + _RESERVED_IDENTIFIER_FIXUP_3268.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3274 = _RESERVED_IDENTIFIER_FIXUP_3268;
    _RESERVED_IDENTIFIER_FIXUP_3274.x = _RESERVED_IDENTIFIER_FIXUP_1940.x;
    _RESERVED_IDENTIFIER_FIXUP_3274.y = _RESERVED_IDENTIFIER_FIXUP_1940.y;
    _RESERVED_IDENTIFIER_FIXUP_3274.z = _RESERVED_IDENTIFIER_FIXUP_1940.z;
    _RESERVED_IDENTIFIER_FIXUP_3260.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3260.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3260.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1965 = (_RESERVED_IDENTIFIER_FIXUP_3260.yzw * _RESERVED_IDENTIFIER_FIXUP_3260.xxx) + _RESERVED_IDENTIFIER_FIXUP_3274.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3286 = _RESERVED_IDENTIFIER_FIXUP_3274;
    _RESERVED_IDENTIFIER_FIXUP_3286.x = _RESERVED_IDENTIFIER_FIXUP_1965.x;
    _RESERVED_IDENTIFIER_FIXUP_3286.y = _RESERVED_IDENTIFIER_FIXUP_1965.y;
    _RESERVED_IDENTIFIER_FIXUP_3286.z = _RESERVED_IDENTIFIER_FIXUP_1965.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1978 = _RESERVED_IDENTIFIER_FIXUP_3286.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3292 = _RESERVED_IDENTIFIER_FIXUP_3286;
    _RESERVED_IDENTIFIER_FIXUP_3292.x = _RESERVED_IDENTIFIER_FIXUP_1978.x;
    _RESERVED_IDENTIFIER_FIXUP_3292.y = _RESERVED_IDENTIFIER_FIXUP_1978.y;
    _RESERVED_IDENTIFIER_FIXUP_3292.z = _RESERVED_IDENTIFIER_FIXUP_1978.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2031 = OptTex0( texcoord0.xyz);
    vec2 param_49 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2035 = hdTex1(param_49);
    float _RESERVED_IDENTIFIER_FIXUP_2039 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2035.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3306 = _RESERVED_IDENTIFIER_FIXUP_2035;
    _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_2039;
    _RESERVED_IDENTIFIER_FIXUP_3306.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2039;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2049 = _RESERVED_IDENTIFIER_FIXUP_2031 * _RESERVED_IDENTIFIER_FIXUP_3306.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3313 = _RESERVED_IDENTIFIER_FIXUP_3306;
    _RESERVED_IDENTIFIER_FIXUP_3313.x = _RESERVED_IDENTIFIER_FIXUP_1173;
    float _RESERVED_IDENTIFIER_FIXUP_2062 = clamp((_RESERVED_IDENTIFIER_FIXUP_1173 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3313.x = _RESERVED_IDENTIFIER_FIXUP_2062;
    float _RESERVED_IDENTIFIER_FIXUP_2068 = ((-_RESERVED_IDENTIFIER_FIXUP_2062) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3313.x = _RESERVED_IDENTIFIER_FIXUP_2068;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3697;
    if (_RESERVED_IDENTIFIER_FIXUP_2068 != (-_RESERVED_IDENTIFIER_FIXUP_2068))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2080 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2080.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2080.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2086 = hdLod5(param_50, param_51);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2090 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3525 = _RESERVED_IDENTIFIER_FIXUP_2086;
        _RESERVED_IDENTIFIER_FIXUP_3525.y = _RESERVED_IDENTIFIER_FIXUP_2090.x;
        _RESERVED_IDENTIFIER_FIXUP_3525.z = _RESERVED_IDENTIFIER_FIXUP_2090.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2100 = _RESERVED_IDENTIFIER_FIXUP_3525.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3529;
        _RESERVED_IDENTIFIER_FIXUP_3529.x = _RESERVED_IDENTIFIER_FIXUP_2100.x;
        _RESERVED_IDENTIFIER_FIXUP_3529.y = _RESERVED_IDENTIFIER_FIXUP_2100.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2107 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2111 = _RESERVED_IDENTIFIER_FIXUP_2107.y;
        _RESERVED_IDENTIFIER_FIXUP_3529.w = _RESERVED_IDENTIFIER_FIXUP_2111;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3529.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2111;
        float _RESERVED_IDENTIFIER_FIXUP_2122 = _RESERVED_IDENTIFIER_FIXUP_2086.x + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2122;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2129 = _RESERVED_IDENTIFIER_FIXUP_3525.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3542;
        _RESERVED_IDENTIFIER_FIXUP_3542.x = _RESERVED_IDENTIFIER_FIXUP_2129.x;
        _RESERVED_IDENTIFIER_FIXUP_3542.y = _RESERVED_IDENTIFIER_FIXUP_2129.y;
        _RESERVED_IDENTIFIER_FIXUP_3542.w = _RESERVED_IDENTIFIER_FIXUP_2111;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3542.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2111;
        float _RESERVED_IDENTIFIER_FIXUP_2151 = _RESERVED_IDENTIFIER_FIXUP_2122 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2151;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2158 = _RESERVED_IDENTIFIER_FIXUP_3525.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3555;
        _RESERVED_IDENTIFIER_FIXUP_3555.x = _RESERVED_IDENTIFIER_FIXUP_2158.x;
        _RESERVED_IDENTIFIER_FIXUP_3555.y = _RESERVED_IDENTIFIER_FIXUP_2158.y;
        _RESERVED_IDENTIFIER_FIXUP_3555.w = _RESERVED_IDENTIFIER_FIXUP_2111;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3555.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2111;
        float _RESERVED_IDENTIFIER_FIXUP_2180 = _RESERVED_IDENTIFIER_FIXUP_2151 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2180;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2187 = _RESERVED_IDENTIFIER_FIXUP_3525.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3568;
        _RESERVED_IDENTIFIER_FIXUP_3568.x = _RESERVED_IDENTIFIER_FIXUP_2187.x;
        _RESERVED_IDENTIFIER_FIXUP_3568.y = _RESERVED_IDENTIFIER_FIXUP_2187.y;
        _RESERVED_IDENTIFIER_FIXUP_3568.w = _RESERVED_IDENTIFIER_FIXUP_2111;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3568.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2111;
        float _RESERVED_IDENTIFIER_FIXUP_2209 = _RESERVED_IDENTIFIER_FIXUP_2180 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2209;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2216 = _RESERVED_IDENTIFIER_FIXUP_3525.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3581;
        _RESERVED_IDENTIFIER_FIXUP_3581.x = _RESERVED_IDENTIFIER_FIXUP_2216.x;
        _RESERVED_IDENTIFIER_FIXUP_3581.y = _RESERVED_IDENTIFIER_FIXUP_2216.y;
        _RESERVED_IDENTIFIER_FIXUP_3581.w = _RESERVED_IDENTIFIER_FIXUP_2111;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3581.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2111;
        float _RESERVED_IDENTIFIER_FIXUP_2238 = _RESERVED_IDENTIFIER_FIXUP_2209 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2238;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2245 = _RESERVED_IDENTIFIER_FIXUP_3525.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3594;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2245.x;
        _RESERVED_IDENTIFIER_FIXUP_3594.y = _RESERVED_IDENTIFIER_FIXUP_2245.y;
        _RESERVED_IDENTIFIER_FIXUP_3594.w = _RESERVED_IDENTIFIER_FIXUP_2111;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3594.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2111;
        float _RESERVED_IDENTIFIER_FIXUP_2267 = _RESERVED_IDENTIFIER_FIXUP_2238 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2267;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2274 = _RESERVED_IDENTIFIER_FIXUP_3525.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3607;
        _RESERVED_IDENTIFIER_FIXUP_3607.x = _RESERVED_IDENTIFIER_FIXUP_2274.x;
        _RESERVED_IDENTIFIER_FIXUP_3607.y = _RESERVED_IDENTIFIER_FIXUP_2274.y;
        _RESERVED_IDENTIFIER_FIXUP_3607.w = _RESERVED_IDENTIFIER_FIXUP_2111;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3607.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2111;
        float _RESERVED_IDENTIFIER_FIXUP_2296 = _RESERVED_IDENTIFIER_FIXUP_2267 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2296;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2303 = _RESERVED_IDENTIFIER_FIXUP_3525.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3620;
        _RESERVED_IDENTIFIER_FIXUP_3620.x = _RESERVED_IDENTIFIER_FIXUP_2303.x;
        _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_2303.y;
        _RESERVED_IDENTIFIER_FIXUP_3620.w = _RESERVED_IDENTIFIER_FIXUP_2111;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3620.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2111;
        float _RESERVED_IDENTIFIER_FIXUP_2325 = _RESERVED_IDENTIFIER_FIXUP_2296 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2325;
        _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2325 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3697 = _RESERVED_IDENTIFIER_FIXUP_3525;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2338 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_2338;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3698;
        if (_RESERVED_IDENTIFIER_FIXUP_2338 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2347 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2357 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2359 = _RESERVED_IDENTIFIER_FIXUP_2357.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3465 = _RESERVED_IDENTIFIER_FIXUP_3313;
            _RESERVED_IDENTIFIER_FIXUP_3465.y = _RESERVED_IDENTIFIER_FIXUP_2359;
            _RESERVED_IDENTIFIER_FIXUP_3465.z = _RESERVED_IDENTIFIER_FIXUP_2357.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2367 = _RESERVED_IDENTIFIER_FIXUP_3465.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3469;
            _RESERVED_IDENTIFIER_FIXUP_3469.x = _RESERVED_IDENTIFIER_FIXUP_2367.x;
            _RESERVED_IDENTIFIER_FIXUP_3469.y = _RESERVED_IDENTIFIER_FIXUP_2367.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2374 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2378 = _RESERVED_IDENTIFIER_FIXUP_2374.y;
            _RESERVED_IDENTIFIER_FIXUP_3469.w = _RESERVED_IDENTIFIER_FIXUP_2378;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2347.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2347.w;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3469.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2378;
            float _RESERVED_IDENTIFIER_FIXUP_2389 = hdLod6(param_68, param_69).x + hdLod6(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3718 = vec4(_RESERVED_IDENTIFIER_FIXUP_2068, _RESERVED_IDENTIFIER_FIXUP_2359, _RESERVED_IDENTIFIER_FIXUP_2357.y, _RESERVED_IDENTIFIER_FIXUP_2389);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2396 = _RESERVED_IDENTIFIER_FIXUP_3718.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3482;
            _RESERVED_IDENTIFIER_FIXUP_3482.x = _RESERVED_IDENTIFIER_FIXUP_2396.x;
            _RESERVED_IDENTIFIER_FIXUP_3482.y = _RESERVED_IDENTIFIER_FIXUP_2396.y;
            _RESERVED_IDENTIFIER_FIXUP_3482.w = _RESERVED_IDENTIFIER_FIXUP_2378;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3482.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2378;
            float _RESERVED_IDENTIFIER_FIXUP_2418 = _RESERVED_IDENTIFIER_FIXUP_2389 + hdLod6(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3718.w = _RESERVED_IDENTIFIER_FIXUP_2418;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2425 = _RESERVED_IDENTIFIER_FIXUP_3718.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3495;
            _RESERVED_IDENTIFIER_FIXUP_3495.x = _RESERVED_IDENTIFIER_FIXUP_2425.x;
            _RESERVED_IDENTIFIER_FIXUP_3495.y = _RESERVED_IDENTIFIER_FIXUP_2425.y;
            _RESERVED_IDENTIFIER_FIXUP_3495.w = _RESERVED_IDENTIFIER_FIXUP_2378;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3495.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2378;
            float _RESERVED_IDENTIFIER_FIXUP_2447 = _RESERVED_IDENTIFIER_FIXUP_2418 + hdLod6(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3718.w = _RESERVED_IDENTIFIER_FIXUP_2447;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2454 = _RESERVED_IDENTIFIER_FIXUP_3718.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3508;
            _RESERVED_IDENTIFIER_FIXUP_3508.x = _RESERVED_IDENTIFIER_FIXUP_2454.x;
            _RESERVED_IDENTIFIER_FIXUP_3508.y = _RESERVED_IDENTIFIER_FIXUP_2454.y;
            _RESERVED_IDENTIFIER_FIXUP_3508.w = _RESERVED_IDENTIFIER_FIXUP_2378;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3508.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2378;
            float _RESERVED_IDENTIFIER_FIXUP_2476 = _RESERVED_IDENTIFIER_FIXUP_2447 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3718.y = _RESERVED_IDENTIFIER_FIXUP_2476;
            _RESERVED_IDENTIFIER_FIXUP_3718.x = _RESERVED_IDENTIFIER_FIXUP_2476 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3698 = _RESERVED_IDENTIFIER_FIXUP_3718;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2489 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3330 = _RESERVED_IDENTIFIER_FIXUP_3313;
            _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2489;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3699;
            if (_RESERVED_IDENTIFIER_FIXUP_2489 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2498 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2508 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2510 = _RESERVED_IDENTIFIER_FIXUP_2508.x;
                _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2510;
                _RESERVED_IDENTIFIER_FIXUP_3330.z = _RESERVED_IDENTIFIER_FIXUP_2508.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2518 = _RESERVED_IDENTIFIER_FIXUP_3330.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3409;
                _RESERVED_IDENTIFIER_FIXUP_3409.x = _RESERVED_IDENTIFIER_FIXUP_2518.x;
                _RESERVED_IDENTIFIER_FIXUP_3409.y = _RESERVED_IDENTIFIER_FIXUP_2518.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2525 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2529 = _RESERVED_IDENTIFIER_FIXUP_2525.y;
                _RESERVED_IDENTIFIER_FIXUP_3409.w = _RESERVED_IDENTIFIER_FIXUP_2529;
                vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2498.xy;
                float param_79 = _RESERVED_IDENTIFIER_FIXUP_2498.w;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3409.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2529;
                float _RESERVED_IDENTIFIER_FIXUP_2540 = hdLod7(param_78, param_79).x + hdLod7(param_80, param_81).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3717 = vec4(_RESERVED_IDENTIFIER_FIXUP_2068, _RESERVED_IDENTIFIER_FIXUP_2510, _RESERVED_IDENTIFIER_FIXUP_2508.y, _RESERVED_IDENTIFIER_FIXUP_2540);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2547 = _RESERVED_IDENTIFIER_FIXUP_3717.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3422;
                _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_2547.x;
                _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_2547.y;
                _RESERVED_IDENTIFIER_FIXUP_3422.w = _RESERVED_IDENTIFIER_FIXUP_2529;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3422.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2529;
                float _RESERVED_IDENTIFIER_FIXUP_2569 = _RESERVED_IDENTIFIER_FIXUP_2540 + hdLod7(param_82, param_83).x;
                _RESERVED_IDENTIFIER_FIXUP_3717.w = _RESERVED_IDENTIFIER_FIXUP_2569;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2576 = _RESERVED_IDENTIFIER_FIXUP_3717.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3435;
                _RESERVED_IDENTIFIER_FIXUP_3435.x = _RESERVED_IDENTIFIER_FIXUP_2576.x;
                _RESERVED_IDENTIFIER_FIXUP_3435.y = _RESERVED_IDENTIFIER_FIXUP_2576.y;
                _RESERVED_IDENTIFIER_FIXUP_3435.w = _RESERVED_IDENTIFIER_FIXUP_2529;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3435.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2529;
                float _RESERVED_IDENTIFIER_FIXUP_2598 = _RESERVED_IDENTIFIER_FIXUP_2569 + hdLod7(param_84, param_85).x;
                _RESERVED_IDENTIFIER_FIXUP_3717.w = _RESERVED_IDENTIFIER_FIXUP_2598;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2605 = _RESERVED_IDENTIFIER_FIXUP_3717.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
                _RESERVED_IDENTIFIER_FIXUP_3448.x = _RESERVED_IDENTIFIER_FIXUP_2605.x;
                _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2605.y;
                _RESERVED_IDENTIFIER_FIXUP_3448.w = _RESERVED_IDENTIFIER_FIXUP_2529;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3448.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2529;
                float _RESERVED_IDENTIFIER_FIXUP_2627 = _RESERVED_IDENTIFIER_FIXUP_2598 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_2627;
                _RESERVED_IDENTIFIER_FIXUP_3717.x = _RESERVED_IDENTIFIER_FIXUP_2627 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3699 = _RESERVED_IDENTIFIER_FIXUP_3717;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2643 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2647 = _RESERVED_IDENTIFIER_FIXUP_2643.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2658 = vec4(_RESERVED_IDENTIFIER_FIXUP_2643.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2647).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3714 = vec4(_RESERVED_IDENTIFIER_FIXUP_2658 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2647);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2695 = _RESERVED_IDENTIFIER_FIXUP_2658 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3363 = _RESERVED_IDENTIFIER_FIXUP_3714;
                _RESERVED_IDENTIFIER_FIXUP_3363.x = _RESERVED_IDENTIFIER_FIXUP_2695.x;
                _RESERVED_IDENTIFIER_FIXUP_3363.y = _RESERVED_IDENTIFIER_FIXUP_2695.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2717 = _RESERVED_IDENTIFIER_FIXUP_2658 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_3363;
                _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_2717.x;
                _RESERVED_IDENTIFIER_FIXUP_3372.y = _RESERVED_IDENTIFIER_FIXUP_2717.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2739 = _RESERVED_IDENTIFIER_FIXUP_2658 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3381 = _RESERVED_IDENTIFIER_FIXUP_3372;
                _RESERVED_IDENTIFIER_FIXUP_3381.x = _RESERVED_IDENTIFIER_FIXUP_2739.x;
                _RESERVED_IDENTIFIER_FIXUP_3381.y = _RESERVED_IDENTIFIER_FIXUP_2739.y;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_2658;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2647;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3714.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2647;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3363.xy;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2647;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3372.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2647;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3381.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2647;
                float _RESERVED_IDENTIFIER_FIXUP_2754 = (((hdLod8(param_88, param_89).x + hdLod8(param_90, param_91).x) + hdLod8(param_92, param_93).x) + hdLod8(param_94, param_95).x) + hdLod8(param_96, param_97).x;
                float _RESERVED_IDENTIFIER_FIXUP_2768 = clamp((max(abs(texcoord4.w), abs(texcoord5.w)) * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2773 = (_RESERVED_IDENTIFIER_FIXUP_2754 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3699 = vec4((_RESERVED_IDENTIFIER_FIXUP_2768 * _RESERVED_IDENTIFIER_FIXUP_2773) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2768, _RESERVED_IDENTIFIER_FIXUP_2773, _RESERVED_IDENTIFIER_FIXUP_2754);
            }
            _RESERVED_IDENTIFIER_FIXUP_3698 = _RESERVED_IDENTIFIER_FIXUP_3699;
        }
        _RESERVED_IDENTIFIER_FIXUP_3697 = _RESERVED_IDENTIFIER_FIXUP_3698;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2788 = (_RESERVED_IDENTIFIER_FIXUP_3697.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3637 = _RESERVED_IDENTIFIER_FIXUP_3697;
    _RESERVED_IDENTIFIER_FIXUP_3637.y = _RESERVED_IDENTIFIER_FIXUP_2788;
    _RESERVED_IDENTIFIER_FIXUP_3637.y = _RESERVED_IDENTIFIER_FIXUP_2788;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2801 = _RESERVED_IDENTIFIER_FIXUP_2049.xyz * _RESERVED_IDENTIFIER_FIXUP_3637.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3643 = _RESERVED_IDENTIFIER_FIXUP_2049;
    _RESERVED_IDENTIFIER_FIXUP_3643.x = _RESERVED_IDENTIFIER_FIXUP_2801.x;
    _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_2801.y;
    _RESERVED_IDENTIFIER_FIXUP_3643.z = _RESERVED_IDENTIFIER_FIXUP_2801.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2812 = _RESERVED_IDENTIFIER_FIXUP_3643.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3649 = _RESERVED_IDENTIFIER_FIXUP_3643;
    _RESERVED_IDENTIFIER_FIXUP_3649.x = _RESERVED_IDENTIFIER_FIXUP_2812.x;
    _RESERVED_IDENTIFIER_FIXUP_3649.y = _RESERVED_IDENTIFIER_FIXUP_2812.y;
    _RESERVED_IDENTIFIER_FIXUP_3649.z = _RESERVED_IDENTIFIER_FIXUP_2812.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2823 = _RESERVED_IDENTIFIER_FIXUP_3649.xyz + _RESERVED_IDENTIFIER_FIXUP_3649.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3655 = _RESERVED_IDENTIFIER_FIXUP_3649;
    _RESERVED_IDENTIFIER_FIXUP_3655.x = _RESERVED_IDENTIFIER_FIXUP_2823.x;
    _RESERVED_IDENTIFIER_FIXUP_3655.y = _RESERVED_IDENTIFIER_FIXUP_2823.y;
    _RESERVED_IDENTIFIER_FIXUP_3655.z = _RESERVED_IDENTIFIER_FIXUP_2823.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2834 = _RESERVED_IDENTIFIER_FIXUP_3655.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3637.y = _RESERVED_IDENTIFIER_FIXUP_2834.x;
    _RESERVED_IDENTIFIER_FIXUP_3637.z = _RESERVED_IDENTIFIER_FIXUP_2834.y;
    _RESERVED_IDENTIFIER_FIXUP_3637.w = _RESERVED_IDENTIFIER_FIXUP_2834.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2848 = (_RESERVED_IDENTIFIER_FIXUP_3637.yzw * _RESERVED_IDENTIFIER_FIXUP_3637.xxx) + _RESERVED_IDENTIFIER_FIXUP_3655.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3667 = _RESERVED_IDENTIFIER_FIXUP_3655;
    _RESERVED_IDENTIFIER_FIXUP_3667.x = _RESERVED_IDENTIFIER_FIXUP_2848.x;
    _RESERVED_IDENTIFIER_FIXUP_3667.y = _RESERVED_IDENTIFIER_FIXUP_2848.y;
    _RESERVED_IDENTIFIER_FIXUP_3667.z = _RESERVED_IDENTIFIER_FIXUP_2848.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2861 = _RESERVED_IDENTIFIER_FIXUP_3667.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3673 = _RESERVED_IDENTIFIER_FIXUP_3667;
    _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_2861.x;
    _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_2861.y;
    _RESERVED_IDENTIFIER_FIXUP_3673.z = _RESERVED_IDENTIFIER_FIXUP_2861.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3673.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1009 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1018;
    if (_RESERVED_IDENTIFIER_FIXUP_1009)
    {
        _RESERVED_IDENTIFIER_FIXUP_1018 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1018 = _RESERVED_IDENTIFIER_FIXUP_1009;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1018)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1055 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3292.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1082 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2920;
    if (_RESERVED_IDENTIFIER_FIXUP_1055 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2920 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1055), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1082);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2920 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1082);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2920;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2788);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r1.xy;
        float param_2 = r1.w;
        r1 = hdLod5(param_1, param_2);
        vec2 hdB134 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB134.x;
        r1.z = hdB134.y;
        vec2 hdB156 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB156.x;
        r2.y = hdB156.y;
        vec2 hdB164 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB164.x;
        r2.w = hdB164.y;
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        r1.x += r2.x;
        vec2 hdB187 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB187.x;
        r2.y = hdB187.y;
        vec2 hdB194 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB194.x;
        r2.w = hdB194.y;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r1.x += r2.x;
        vec2 hdB217 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB217.x;
        r2.y = hdB217.y;
        vec2 hdB224 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB224.x;
        r2.w = hdB224.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.x += r2.x;
        vec2 hdB247 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = hdB247.x;
        r2.y = hdB247.y;
        vec2 hdB254 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB254.x;
        r2.w = hdB254.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.x += r2.x;
        vec2 hdB277 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB277.x;
        r2.y = hdB277.y;
        vec2 hdB284 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB284.x;
        r2.w = hdB284.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.x += r2.x;
        vec2 hdB307 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = hdB307.x;
        r2.y = hdB307.y;
        vec2 hdB314 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB314.x;
        r2.w = hdB314.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r1.x += r2.x;
        vec2 hdB337 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB337.x;
        r2.y = hdB337.y;
        vec2 hdB344 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB344.x;
        r2.w = hdB344.y;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod5(param_15, param_16);
        r1.x += r2.x;
        vec2 hdB367 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = hdB367.x;
        r2.y = hdB367.y;
        vec2 hdB374 = vec2(1.0, 0.0) * v4.zx;
        r2.z = hdB374.x;
        r2.w = hdB374.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod5(param_17, param_18);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v5.x), abs(v5.y));
        if (r1.y < 1.0)
        {
            r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_19 = r2.xy;
            float param_20 = r2.w;
            r2 = hdLod6(param_19, param_20);
            vec2 hdB424 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB424.x;
            r1.z = hdB424.y;
            vec2 hdB434 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB434.x;
            r3.y = hdB434.y;
            vec2 hdB441 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB441.x;
            r3.w = hdB441.y;
            vec2 param_21 = r3.xy;
            float param_22 = r3.w;
            r3 = hdLod6(param_21, param_22);
            r1.w = r2.x + r3.x;
            vec2 hdB463 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB463.x;
            r2.y = hdB463.y;
            vec2 hdB470 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB470.x;
            r2.w = hdB470.y;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            r1.w += r2.x;
            vec2 hdB492 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB492.x;
            r2.y = hdB492.y;
            vec2 hdB499 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB499.x;
            r2.w = hdB499.y;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
            r1.w += r2.x;
            vec2 hdB521 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB521.x;
            r2.y = hdB521.y;
            vec2 hdB528 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB528.x;
            r2.w = hdB528.y;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod6(param_27, param_28);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v6.x), abs(v6.y));
            if (r1.y < 1.0)
            {
                r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_29 = r2.xy;
                float param_30 = r2.w;
                r2 = hdLod7(param_29, param_30);
                vec2 hdB578 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB578.x;
                r1.z = hdB578.y;
                vec2 hdB588 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = hdB588.x;
                r3.y = hdB588.y;
                vec2 hdB595 = vec2(1.0, 0.0) * v6.zx;
                r3.z = hdB595.x;
                r3.w = hdB595.y;
                vec2 param_31 = r3.xy;
                float param_32 = r3.w;
                r3 = hdLod7(param_31, param_32);
                r1.w = r2.x + r3.x;
                vec2 hdB617 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB617.x;
                r2.y = hdB617.y;
                vec2 hdB624 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB624.x;
                r2.w = hdB624.y;
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                r1.w += r2.x;
                vec2 hdB646 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = hdB646.x;
                r2.y = hdB646.y;
                vec2 hdB653 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB653.x;
                r2.w = hdB653.y;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
                r1.w += r2.x;
                vec2 hdB675 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = hdB675.x;
                r2.y = hdB675.y;
                vec2 hdB682 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB682.x;
                r2.w = hdB682.y;
                vec2 param_37 = r2.xy;
                float param_38 = r2.w;
                r2 = hdLod7(param_37, param_38);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 hdB714 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = hdB714.x;
                r2.w = hdB714.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                vec2 param_39 = r2.xy;
                float param_40 = r2.w;
                r3 = hdLod8(param_39, param_40);
                vec2 hdB739 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB739.x;
                r4.y = hdB739.y;
                r4.z = r2.z;
                r4.w = r2.w;
                vec2 param_41 = r4.xy;
                float param_42 = r4.w;
                r5 = hdLod8(param_41, param_42);
                r1.w = r3.x + r5.x;
                vec2 hdB767 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB767.x;
                r4.y = hdB767.y;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r3 = hdLod8(param_43, param_44);
                r1.w += r3.x;
                vec2 hdB789 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB789.x;
                r4.y = hdB789.y;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r3 = hdLod8(param_45, param_46);
                r1.w += r3.x;
                vec2 hdB811 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB811.x;
                r4.y = hdB811.y;
                vec2 param_47 = r4.xy;
                float param_48 = r4.w;
                r2 = hdLod8(param_47, param_48);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB864 = r0;
    vec3 hdB868 = hdB864.xyz * r1.yyy;
    r0.x = hdB868.x;
    r0.y = hdB868.y;
    r0.z = hdB868.z;
    vec4 hdB875 = r0;
    vec3 hdB879 = hdB875.xyz * v0.xyz;
    r0.x = hdB879.x;
    r0.y = hdB879.y;
    r0.z = hdB879.z;
    vec4 hdB886 = r0;
    vec4 hdB888 = r0;
    vec3 hdB890 = hdB886.xyz + hdB888.xyz;
    r0.x = hdB890.x;
    r0.y = hdB890.y;
    r0.z = hdB890.z;
    vec3 hdB901 = r0.www * v1.xyz;
    r1.y = hdB901.x;
    r1.z = hdB901.y;
    r1.w = hdB901.z;
    vec4 hdB913 = r0;
    vec3 hdB915 = (r1.yzw * r1.xxx) + hdB913.xyz;
    r0.x = hdB915.x;
    r0.y = hdB915.y;
    r0.z = hdB915.z;
    vec4 hdB922 = r0;
    vec3 hdB929 = hdB922.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB929.x;
    r0.y = hdB929.y;
    r0.z = hdB929.z;
    vec3 hdB944 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB944.x;
    oC0.y = hdB944.y;
    oC0.z = hdB944.z;
    oC0.w = 1.0;
    bool hdB957 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB965;
    if (hdB957)
    {
        hdB965 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB965 = hdB957;
    }
    if (hdB965)
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
    bool _3290 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3300;
    if (_3290)
    {
        _3300 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 482u) != 0u;
    }
    else
    {
        _3300 = _3290;
    }
    if (_3300)
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
        bool _3325 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3340;
        if (!_3325)
        {
            _3340 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 482u) != 0u;
        }
        else
        {
            _3340 = _3325;
        }
        if (_3340)
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
