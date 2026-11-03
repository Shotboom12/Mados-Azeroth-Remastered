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
float _RESERVED_IDENTIFIER_FIXUP_3881;
vec4 _RESERVED_IDENTIFIER_FIXUP_3882;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1199 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1203 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1207 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211 = hdTex3(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1215 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1211.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3056 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_3056.z = _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_3056.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1215;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_1203 * _RESERVED_IDENTIFIER_FIXUP_3056.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1237 = (_RESERVED_IDENTIFIER_FIXUP_1207 * _RESERVED_IDENTIFIER_FIXUP_3056.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1199 * _RESERVED_IDENTIFIER_FIXUP_3056.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1225);
    float _RESERVED_IDENTIFIER_FIXUP_1244 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3063 = _RESERVED_IDENTIFIER_FIXUP_1225;
    _RESERVED_IDENTIFIER_FIXUP_3063.x = _RESERVED_IDENTIFIER_FIXUP_1244;
    float _RESERVED_IDENTIFIER_FIXUP_1250 = clamp((_RESERVED_IDENTIFIER_FIXUP_1244 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3063.x = _RESERVED_IDENTIFIER_FIXUP_1250;
    float _RESERVED_IDENTIFIER_FIXUP_1256 = ((-_RESERVED_IDENTIFIER_FIXUP_1250) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3063.x = _RESERVED_IDENTIFIER_FIXUP_1256;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3883;
    if (_RESERVED_IDENTIFIER_FIXUP_1256 != (-_RESERVED_IDENTIFIER_FIXUP_1256))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1268 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3302;
        _RESERVED_IDENTIFIER_FIXUP_3302.x = _RESERVED_IDENTIFIER_FIXUP_1268.x;
        _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_1268.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1278 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3306;
        _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_1278.x;
        _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_1278.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
        _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_1288.x;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_1288.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1298 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3314;
        _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_1298.x;
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1298.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1308 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3318;
        _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_1308.x;
        _RESERVED_IDENTIFIER_FIXUP_3318.y = _RESERVED_IDENTIFIER_FIXUP_1308.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1318 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3322;
        _RESERVED_IDENTIFIER_FIXUP_3322.x = _RESERVED_IDENTIFIER_FIXUP_1318.x;
        _RESERVED_IDENTIFIER_FIXUP_3322.y = _RESERVED_IDENTIFIER_FIXUP_1318.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1328 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3326;
        _RESERVED_IDENTIFIER_FIXUP_3326.x = _RESERVED_IDENTIFIER_FIXUP_1328.x;
        _RESERVED_IDENTIFIER_FIXUP_3326.y = _RESERVED_IDENTIFIER_FIXUP_1328.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3330;
        _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_1338.x;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_1338.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1348 = _RESERVED_IDENTIFIER_FIXUP_3302.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3334;
        _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_1348.x;
        _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_1348.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1356 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1356.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1356.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1362 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3306.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3310.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3314.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3318.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3318.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1402 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3322.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3326.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3330.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3334.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3334.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1442 = hdLod5(param_7, param_8);
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3306.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1362.y = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3310.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1362.z = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3314.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1362.w = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3322.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1402.y = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3326.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1402.z = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3330.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1402.w = hdLod5(param_19, param_20).x;
        float _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_1442.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_1442;
        _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1482;
        float _RESERVED_IDENTIFIER_FIXUP_1487 = float(_RESERVED_IDENTIFIER_FIXUP_1482 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1487;
        float _RESERVED_IDENTIFIER_FIXUP_1490 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1362 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_1490;
        float _RESERVED_IDENTIFIER_FIXUP_1493 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1402 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3399.z = _RESERVED_IDENTIFIER_FIXUP_1493;
        float _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_1490 + _RESERVED_IDENTIFIER_FIXUP_1493;
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_1499;
        float _RESERVED_IDENTIFIER_FIXUP_1505 = _RESERVED_IDENTIFIER_FIXUP_1487 + _RESERVED_IDENTIFIER_FIXUP_1499;
        _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1505;
        _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_1505 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3883 = _RESERVED_IDENTIFIER_FIXUP_3399;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1518 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3063.y = _RESERVED_IDENTIFIER_FIXUP_1518;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3884;
        if (_RESERVED_IDENTIFIER_FIXUP_1518 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1527 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3236 = _RESERVED_IDENTIFIER_FIXUP_3063;
            _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_1527.x;
            _RESERVED_IDENTIFIER_FIXUP_3236.z = _RESERVED_IDENTIFIER_FIXUP_1527.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1537 = _RESERVED_IDENTIFIER_FIXUP_3236.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3240;
            _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_1537.x;
            _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_1537.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1547 = _RESERVED_IDENTIFIER_FIXUP_3236.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3244;
            _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_1547.x;
            _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_1547.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1557 = _RESERVED_IDENTIFIER_FIXUP_3236.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3248;
            _RESERVED_IDENTIFIER_FIXUP_3248.x = _RESERVED_IDENTIFIER_FIXUP_1557.x;
            _RESERVED_IDENTIFIER_FIXUP_3248.y = _RESERVED_IDENTIFIER_FIXUP_1557.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_3236.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3252;
            _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_1567.x;
            _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_1567.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1575 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1575.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1575.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1581 = hdLod6(param_21, param_22);
            _RESERVED_IDENTIFIER_FIXUP_3240.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3244.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3248.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3252.w = 0.0;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3240.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1581.y = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3244.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1581.z = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3248.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1581.w = hdLod6(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3252.xy;
            float param_30 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1644 = hdLod6(param_29, param_30).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_1644;
            float _RESERVED_IDENTIFIER_FIXUP_1649 = float(_RESERVED_IDENTIFIER_FIXUP_1644 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_1649;
            float _RESERVED_IDENTIFIER_FIXUP_1652 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1581 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3236.z = _RESERVED_IDENTIFIER_FIXUP_1652;
            float _RESERVED_IDENTIFIER_FIXUP_1658 = _RESERVED_IDENTIFIER_FIXUP_1649 + _RESERVED_IDENTIFIER_FIXUP_1652;
            _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_1658;
            _RESERVED_IDENTIFIER_FIXUP_3236.x = _RESERVED_IDENTIFIER_FIXUP_1658 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3884 = _RESERVED_IDENTIFIER_FIXUP_3236;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1671 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3080 = _RESERVED_IDENTIFIER_FIXUP_3063;
            _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_1671;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3885;
            if (_RESERVED_IDENTIFIER_FIXUP_1671 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1680 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3170 = _RESERVED_IDENTIFIER_FIXUP_3080;
                _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1680.x;
                _RESERVED_IDENTIFIER_FIXUP_3170.z = _RESERVED_IDENTIFIER_FIXUP_1680.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1690 = _RESERVED_IDENTIFIER_FIXUP_3170.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3174;
                _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1690.x;
                _RESERVED_IDENTIFIER_FIXUP_3174.y = _RESERVED_IDENTIFIER_FIXUP_1690.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1700 = _RESERVED_IDENTIFIER_FIXUP_3170.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3178;
                _RESERVED_IDENTIFIER_FIXUP_3178.x = _RESERVED_IDENTIFIER_FIXUP_1700.x;
                _RESERVED_IDENTIFIER_FIXUP_3178.y = _RESERVED_IDENTIFIER_FIXUP_1700.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1710 = _RESERVED_IDENTIFIER_FIXUP_3170.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3182;
                _RESERVED_IDENTIFIER_FIXUP_3182.x = _RESERVED_IDENTIFIER_FIXUP_1710.x;
                _RESERVED_IDENTIFIER_FIXUP_3182.y = _RESERVED_IDENTIFIER_FIXUP_1710.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1720 = _RESERVED_IDENTIFIER_FIXUP_3170.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3186;
                _RESERVED_IDENTIFIER_FIXUP_3186.x = _RESERVED_IDENTIFIER_FIXUP_1720.x;
                _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_1720.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1728 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1728.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1728.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1734 = hdLod7(param_31, param_32);
                _RESERVED_IDENTIFIER_FIXUP_3174.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3178.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3182.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3186.w = 0.0;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3174.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1734.y = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3178.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1734.z = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3182.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1734.w = hdLod7(param_37, param_38).x;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3186.xy;
                float param_40 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1797 = hdLod7(param_39, param_40).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1797;
                float _RESERVED_IDENTIFIER_FIXUP_1802 = float(_RESERVED_IDENTIFIER_FIXUP_1797 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1802;
                float _RESERVED_IDENTIFIER_FIXUP_1805 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1734 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3170.z = _RESERVED_IDENTIFIER_FIXUP_1805;
                float _RESERVED_IDENTIFIER_FIXUP_1811 = _RESERVED_IDENTIFIER_FIXUP_1802 + _RESERVED_IDENTIFIER_FIXUP_1805;
                _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1811;
                _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_1811 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3885 = _RESERVED_IDENTIFIER_FIXUP_3170;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_1207.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_1207.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1827 = (_RESERVED_IDENTIFIER_FIXUP_1207.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3089;
                _RESERVED_IDENTIFIER_FIXUP_3089.x = _RESERVED_IDENTIFIER_FIXUP_1827.x;
                _RESERVED_IDENTIFIER_FIXUP_3089.y = _RESERVED_IDENTIFIER_FIXUP_1827.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1837 = _RESERVED_IDENTIFIER_FIXUP_3089.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3093;
                _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_1837.x;
                _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_1837.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1847 = _RESERVED_IDENTIFIER_FIXUP_3089.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3097;
                _RESERVED_IDENTIFIER_FIXUP_3097.x = _RESERVED_IDENTIFIER_FIXUP_1847.x;
                _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1847.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1857 = _RESERVED_IDENTIFIER_FIXUP_3089.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3101;
                _RESERVED_IDENTIFIER_FIXUP_3101.x = _RESERVED_IDENTIFIER_FIXUP_1857.x;
                _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1857.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1867 = _RESERVED_IDENTIFIER_FIXUP_3089.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3105;
                _RESERVED_IDENTIFIER_FIXUP_3105.x = _RESERVED_IDENTIFIER_FIXUP_1867.x;
                _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_1867.y;
                _RESERVED_IDENTIFIER_FIXUP_3089.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3089.xy;
                float param_42 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1881 = hdLod8(param_41, param_42);
                _RESERVED_IDENTIFIER_FIXUP_3093.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3097.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3101.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3105.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3093.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1881.y = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3097.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1881.z = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3101.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1881.w = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3105.xy;
                float param_50 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1944 = hdLod8(param_49, param_50).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3145 = _RESERVED_IDENTIFIER_FIXUP_3080;
                _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1944;
                float _RESERVED_IDENTIFIER_FIXUP_1949 = float(_RESERVED_IDENTIFIER_FIXUP_1944 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1949;
                float _RESERVED_IDENTIFIER_FIXUP_1952 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1881 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3145.z = _RESERVED_IDENTIFIER_FIXUP_1952;
                float _RESERVED_IDENTIFIER_FIXUP_1958 = _RESERVED_IDENTIFIER_FIXUP_1949 + _RESERVED_IDENTIFIER_FIXUP_1952;
                _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1958;
                float _RESERVED_IDENTIFIER_FIXUP_1966 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3145.z = _RESERVED_IDENTIFIER_FIXUP_1966;
                float _RESERVED_IDENTIFIER_FIXUP_1972 = clamp((_RESERVED_IDENTIFIER_FIXUP_1966 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3145.z = _RESERVED_IDENTIFIER_FIXUP_1972;
                float _RESERVED_IDENTIFIER_FIXUP_1977 = (_RESERVED_IDENTIFIER_FIXUP_1958 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1977;
                _RESERVED_IDENTIFIER_FIXUP_3145.x = (_RESERVED_IDENTIFIER_FIXUP_1972 * _RESERVED_IDENTIFIER_FIXUP_1977) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3885 = _RESERVED_IDENTIFIER_FIXUP_3145;
            }
            _RESERVED_IDENTIFIER_FIXUP_3884 = _RESERVED_IDENTIFIER_FIXUP_3885;
        }
        _RESERVED_IDENTIFIER_FIXUP_3883 = _RESERVED_IDENTIFIER_FIXUP_3884;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3422 = _RESERVED_IDENTIFIER_FIXUP_3883;
    _RESERVED_IDENTIFIER_FIXUP_3422.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2005 = _RESERVED_IDENTIFIER_FIXUP_1237.xyz * _RESERVED_IDENTIFIER_FIXUP_3422.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3424 = _RESERVED_IDENTIFIER_FIXUP_1237;
    _RESERVED_IDENTIFIER_FIXUP_3424.x = _RESERVED_IDENTIFIER_FIXUP_2005.x;
    _RESERVED_IDENTIFIER_FIXUP_3424.y = _RESERVED_IDENTIFIER_FIXUP_2005.y;
    _RESERVED_IDENTIFIER_FIXUP_3424.z = _RESERVED_IDENTIFIER_FIXUP_2005.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2016 = _RESERVED_IDENTIFIER_FIXUP_3424.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3881).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3430 = _RESERVED_IDENTIFIER_FIXUP_3424;
    _RESERVED_IDENTIFIER_FIXUP_3430.x = _RESERVED_IDENTIFIER_FIXUP_2016.x;
    _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_2016.y;
    _RESERVED_IDENTIFIER_FIXUP_3430.z = _RESERVED_IDENTIFIER_FIXUP_2016.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2027 = _RESERVED_IDENTIFIER_FIXUP_3430.xyz + _RESERVED_IDENTIFIER_FIXUP_3430.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_3430;
    _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_2027.x;
    _RESERVED_IDENTIFIER_FIXUP_3436.y = _RESERVED_IDENTIFIER_FIXUP_2027.y;
    _RESERVED_IDENTIFIER_FIXUP_3436.z = _RESERVED_IDENTIFIER_FIXUP_2027.z;
    _RESERVED_IDENTIFIER_FIXUP_3422.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3422.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3422.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2052 = (_RESERVED_IDENTIFIER_FIXUP_3422.yzw * _RESERVED_IDENTIFIER_FIXUP_3422.xxx) + _RESERVED_IDENTIFIER_FIXUP_3436.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3448 = _RESERVED_IDENTIFIER_FIXUP_3436;
    _RESERVED_IDENTIFIER_FIXUP_3448.x = _RESERVED_IDENTIFIER_FIXUP_2052.x;
    _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2052.y;
    _RESERVED_IDENTIFIER_FIXUP_3448.z = _RESERVED_IDENTIFIER_FIXUP_2052.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2065 = _RESERVED_IDENTIFIER_FIXUP_3448.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3454 = _RESERVED_IDENTIFIER_FIXUP_3448;
    _RESERVED_IDENTIFIER_FIXUP_3454.x = _RESERVED_IDENTIFIER_FIXUP_2065.x;
    _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_2065.y;
    _RESERVED_IDENTIFIER_FIXUP_3454.z = _RESERVED_IDENTIFIER_FIXUP_2065.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2124 = OptTex0( texcoord0.xyz);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2128 = hdTex1(param_51);
    vec2 param_52 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2132 = hdTex2(param_52);
    vec2 param_53 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2136 = hdTex3(param_53);
    float _RESERVED_IDENTIFIER_FIXUP_2140 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2136.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3468 = _RESERVED_IDENTIFIER_FIXUP_2136;
    _RESERVED_IDENTIFIER_FIXUP_3468.z = _RESERVED_IDENTIFIER_FIXUP_2140;
    _RESERVED_IDENTIFIER_FIXUP_3468.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2140;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2150 = _RESERVED_IDENTIFIER_FIXUP_2128 * _RESERVED_IDENTIFIER_FIXUP_3468.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2162 = (_RESERVED_IDENTIFIER_FIXUP_2132 * _RESERVED_IDENTIFIER_FIXUP_3468.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2124 * _RESERVED_IDENTIFIER_FIXUP_3468.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2150);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3475 = _RESERVED_IDENTIFIER_FIXUP_2150;
    _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_1244;
    float _RESERVED_IDENTIFIER_FIXUP_2175 = clamp((_RESERVED_IDENTIFIER_FIXUP_1244 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_2175;
    float _RESERVED_IDENTIFIER_FIXUP_2181 = ((-_RESERVED_IDENTIFIER_FIXUP_2175) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_2181;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3892;
    if (_RESERVED_IDENTIFIER_FIXUP_2181 != (-_RESERVED_IDENTIFIER_FIXUP_2181))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2193 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3714;
        _RESERVED_IDENTIFIER_FIXUP_3714.x = _RESERVED_IDENTIFIER_FIXUP_2193.x;
        _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_2193.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2203 = _RESERVED_IDENTIFIER_FIXUP_3714.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3718;
        _RESERVED_IDENTIFIER_FIXUP_3718.x = _RESERVED_IDENTIFIER_FIXUP_2203.x;
        _RESERVED_IDENTIFIER_FIXUP_3718.y = _RESERVED_IDENTIFIER_FIXUP_2203.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2213 = _RESERVED_IDENTIFIER_FIXUP_3714.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3722;
        _RESERVED_IDENTIFIER_FIXUP_3722.x = _RESERVED_IDENTIFIER_FIXUP_2213.x;
        _RESERVED_IDENTIFIER_FIXUP_3722.y = _RESERVED_IDENTIFIER_FIXUP_2213.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2223 = _RESERVED_IDENTIFIER_FIXUP_3714.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3726;
        _RESERVED_IDENTIFIER_FIXUP_3726.x = _RESERVED_IDENTIFIER_FIXUP_2223.x;
        _RESERVED_IDENTIFIER_FIXUP_3726.y = _RESERVED_IDENTIFIER_FIXUP_2223.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2233 = _RESERVED_IDENTIFIER_FIXUP_3714.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3730;
        _RESERVED_IDENTIFIER_FIXUP_3730.x = _RESERVED_IDENTIFIER_FIXUP_2233.x;
        _RESERVED_IDENTIFIER_FIXUP_3730.y = _RESERVED_IDENTIFIER_FIXUP_2233.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2243 = _RESERVED_IDENTIFIER_FIXUP_3714.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3734;
        _RESERVED_IDENTIFIER_FIXUP_3734.x = _RESERVED_IDENTIFIER_FIXUP_2243.x;
        _RESERVED_IDENTIFIER_FIXUP_3734.y = _RESERVED_IDENTIFIER_FIXUP_2243.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2253 = _RESERVED_IDENTIFIER_FIXUP_3714.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3738;
        _RESERVED_IDENTIFIER_FIXUP_3738.x = _RESERVED_IDENTIFIER_FIXUP_2253.x;
        _RESERVED_IDENTIFIER_FIXUP_3738.y = _RESERVED_IDENTIFIER_FIXUP_2253.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2263 = _RESERVED_IDENTIFIER_FIXUP_3714.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3742;
        _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2263.x;
        _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2263.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2273 = _RESERVED_IDENTIFIER_FIXUP_3714.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3746;
        _RESERVED_IDENTIFIER_FIXUP_3746.x = _RESERVED_IDENTIFIER_FIXUP_2273.x;
        _RESERVED_IDENTIFIER_FIXUP_3746.y = _RESERVED_IDENTIFIER_FIXUP_2273.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2281 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2281.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2281.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2287 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3718.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3722.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3726.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3730.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3730.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2327 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3734.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3738.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3742.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3746.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3746.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2367 = hdLod5(param_58, param_59);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3718.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2287.y = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3722.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2287.z = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3726.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2287.w = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3734.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2327.y = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3738.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2327.z = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3742.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2327.w = hdLod5(param_70, param_71).x;
        float _RESERVED_IDENTIFIER_FIXUP_2407 = _RESERVED_IDENTIFIER_FIXUP_2367.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3811 = _RESERVED_IDENTIFIER_FIXUP_2367;
        _RESERVED_IDENTIFIER_FIXUP_3811.x = _RESERVED_IDENTIFIER_FIXUP_2407;
        float _RESERVED_IDENTIFIER_FIXUP_2412 = float(_RESERVED_IDENTIFIER_FIXUP_2407 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3811.x = _RESERVED_IDENTIFIER_FIXUP_2412;
        float _RESERVED_IDENTIFIER_FIXUP_2415 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2287 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3811.y = _RESERVED_IDENTIFIER_FIXUP_2415;
        float _RESERVED_IDENTIFIER_FIXUP_2418 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2327 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3811.z = _RESERVED_IDENTIFIER_FIXUP_2418;
        float _RESERVED_IDENTIFIER_FIXUP_2424 = _RESERVED_IDENTIFIER_FIXUP_2415 + _RESERVED_IDENTIFIER_FIXUP_2418;
        _RESERVED_IDENTIFIER_FIXUP_3811.y = _RESERVED_IDENTIFIER_FIXUP_2424;
        float _RESERVED_IDENTIFIER_FIXUP_2430 = _RESERVED_IDENTIFIER_FIXUP_2412 + _RESERVED_IDENTIFIER_FIXUP_2424;
        _RESERVED_IDENTIFIER_FIXUP_3811.x = _RESERVED_IDENTIFIER_FIXUP_2430;
        _RESERVED_IDENTIFIER_FIXUP_3811.x = _RESERVED_IDENTIFIER_FIXUP_2430 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3892 = _RESERVED_IDENTIFIER_FIXUP_3811;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2443 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3475.y = _RESERVED_IDENTIFIER_FIXUP_2443;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3893;
        if (_RESERVED_IDENTIFIER_FIXUP_2443 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2452 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3648 = _RESERVED_IDENTIFIER_FIXUP_3475;
            _RESERVED_IDENTIFIER_FIXUP_3648.y = _RESERVED_IDENTIFIER_FIXUP_2452.x;
            _RESERVED_IDENTIFIER_FIXUP_3648.z = _RESERVED_IDENTIFIER_FIXUP_2452.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2462 = _RESERVED_IDENTIFIER_FIXUP_3648.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3652;
            _RESERVED_IDENTIFIER_FIXUP_3652.x = _RESERVED_IDENTIFIER_FIXUP_2462.x;
            _RESERVED_IDENTIFIER_FIXUP_3652.y = _RESERVED_IDENTIFIER_FIXUP_2462.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2472 = _RESERVED_IDENTIFIER_FIXUP_3648.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3656;
            _RESERVED_IDENTIFIER_FIXUP_3656.x = _RESERVED_IDENTIFIER_FIXUP_2472.x;
            _RESERVED_IDENTIFIER_FIXUP_3656.y = _RESERVED_IDENTIFIER_FIXUP_2472.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2482 = _RESERVED_IDENTIFIER_FIXUP_3648.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3660;
            _RESERVED_IDENTIFIER_FIXUP_3660.x = _RESERVED_IDENTIFIER_FIXUP_2482.x;
            _RESERVED_IDENTIFIER_FIXUP_3660.y = _RESERVED_IDENTIFIER_FIXUP_2482.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2492 = _RESERVED_IDENTIFIER_FIXUP_3648.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3664;
            _RESERVED_IDENTIFIER_FIXUP_3664.x = _RESERVED_IDENTIFIER_FIXUP_2492.x;
            _RESERVED_IDENTIFIER_FIXUP_3664.y = _RESERVED_IDENTIFIER_FIXUP_2492.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2500 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2500.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2500.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2506 = hdLod6(param_72, param_73);
            _RESERVED_IDENTIFIER_FIXUP_3652.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3656.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3660.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3664.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3652.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2506.y = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3656.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2506.z = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3660.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2506.w = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3664.xy;
            float param_81 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2569 = hdLod6(param_80, param_81).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3648.y = _RESERVED_IDENTIFIER_FIXUP_2569;
            float _RESERVED_IDENTIFIER_FIXUP_2574 = float(_RESERVED_IDENTIFIER_FIXUP_2569 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3648.y = _RESERVED_IDENTIFIER_FIXUP_2574;
            float _RESERVED_IDENTIFIER_FIXUP_2577 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2506 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3648.z = _RESERVED_IDENTIFIER_FIXUP_2577;
            float _RESERVED_IDENTIFIER_FIXUP_2583 = _RESERVED_IDENTIFIER_FIXUP_2574 + _RESERVED_IDENTIFIER_FIXUP_2577;
            _RESERVED_IDENTIFIER_FIXUP_3648.y = _RESERVED_IDENTIFIER_FIXUP_2583;
            _RESERVED_IDENTIFIER_FIXUP_3648.x = _RESERVED_IDENTIFIER_FIXUP_2583 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3893 = _RESERVED_IDENTIFIER_FIXUP_3648;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2596 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3492 = _RESERVED_IDENTIFIER_FIXUP_3475;
            _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_2596;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3894;
            if (_RESERVED_IDENTIFIER_FIXUP_2596 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2605 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3582 = _RESERVED_IDENTIFIER_FIXUP_3492;
                _RESERVED_IDENTIFIER_FIXUP_3582.y = _RESERVED_IDENTIFIER_FIXUP_2605.x;
                _RESERVED_IDENTIFIER_FIXUP_3582.z = _RESERVED_IDENTIFIER_FIXUP_2605.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2615 = _RESERVED_IDENTIFIER_FIXUP_3582.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3586;
                _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_2615.x;
                _RESERVED_IDENTIFIER_FIXUP_3586.y = _RESERVED_IDENTIFIER_FIXUP_2615.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2625 = _RESERVED_IDENTIFIER_FIXUP_3582.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3590;
                _RESERVED_IDENTIFIER_FIXUP_3590.x = _RESERVED_IDENTIFIER_FIXUP_2625.x;
                _RESERVED_IDENTIFIER_FIXUP_3590.y = _RESERVED_IDENTIFIER_FIXUP_2625.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2635 = _RESERVED_IDENTIFIER_FIXUP_3582.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3594;
                _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2635.x;
                _RESERVED_IDENTIFIER_FIXUP_3594.y = _RESERVED_IDENTIFIER_FIXUP_2635.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2645 = _RESERVED_IDENTIFIER_FIXUP_3582.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3598;
                _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2645.x;
                _RESERVED_IDENTIFIER_FIXUP_3598.y = _RESERVED_IDENTIFIER_FIXUP_2645.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2653 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2653.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2653.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2659 = hdLod7(param_82, param_83);
                _RESERVED_IDENTIFIER_FIXUP_3586.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3590.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3594.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3598.w = 0.0;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3586.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2659.y = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3590.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2659.z = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3594.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2659.w = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3598.xy;
                float param_91 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2722 = hdLod7(param_90, param_91).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3582.y = _RESERVED_IDENTIFIER_FIXUP_2722;
                float _RESERVED_IDENTIFIER_FIXUP_2727 = float(_RESERVED_IDENTIFIER_FIXUP_2722 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3582.y = _RESERVED_IDENTIFIER_FIXUP_2727;
                float _RESERVED_IDENTIFIER_FIXUP_2730 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2659 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3582.z = _RESERVED_IDENTIFIER_FIXUP_2730;
                float _RESERVED_IDENTIFIER_FIXUP_2736 = _RESERVED_IDENTIFIER_FIXUP_2727 + _RESERVED_IDENTIFIER_FIXUP_2730;
                _RESERVED_IDENTIFIER_FIXUP_3582.y = _RESERVED_IDENTIFIER_FIXUP_2736;
                _RESERVED_IDENTIFIER_FIXUP_3582.x = _RESERVED_IDENTIFIER_FIXUP_2736 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3894 = _RESERVED_IDENTIFIER_FIXUP_3582;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_2132.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2132.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2752 = (_RESERVED_IDENTIFIER_FIXUP_2132.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3501;
                _RESERVED_IDENTIFIER_FIXUP_3501.x = _RESERVED_IDENTIFIER_FIXUP_2752.x;
                _RESERVED_IDENTIFIER_FIXUP_3501.y = _RESERVED_IDENTIFIER_FIXUP_2752.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2762 = _RESERVED_IDENTIFIER_FIXUP_3501.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3505;
                _RESERVED_IDENTIFIER_FIXUP_3505.x = _RESERVED_IDENTIFIER_FIXUP_2762.x;
                _RESERVED_IDENTIFIER_FIXUP_3505.y = _RESERVED_IDENTIFIER_FIXUP_2762.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2772 = _RESERVED_IDENTIFIER_FIXUP_3501.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3509;
                _RESERVED_IDENTIFIER_FIXUP_3509.x = _RESERVED_IDENTIFIER_FIXUP_2772.x;
                _RESERVED_IDENTIFIER_FIXUP_3509.y = _RESERVED_IDENTIFIER_FIXUP_2772.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2782 = _RESERVED_IDENTIFIER_FIXUP_3501.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3513;
                _RESERVED_IDENTIFIER_FIXUP_3513.x = _RESERVED_IDENTIFIER_FIXUP_2782.x;
                _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2782.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2792 = _RESERVED_IDENTIFIER_FIXUP_3501.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3517;
                _RESERVED_IDENTIFIER_FIXUP_3517.x = _RESERVED_IDENTIFIER_FIXUP_2792.x;
                _RESERVED_IDENTIFIER_FIXUP_3517.y = _RESERVED_IDENTIFIER_FIXUP_2792.y;
                _RESERVED_IDENTIFIER_FIXUP_3501.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3501.xy;
                float param_93 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2806 = hdLod8(param_92, param_93);
                _RESERVED_IDENTIFIER_FIXUP_3505.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3509.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3513.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3517.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3505.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2806.y = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3509.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2806.z = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3513.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2806.w = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3517.xy;
                float param_101 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2869 = hdLod8(param_100, param_101).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3557 = _RESERVED_IDENTIFIER_FIXUP_3492;
                _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2869;
                float _RESERVED_IDENTIFIER_FIXUP_2874 = float(_RESERVED_IDENTIFIER_FIXUP_2869 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2874;
                float _RESERVED_IDENTIFIER_FIXUP_2877 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2806 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3557.z = _RESERVED_IDENTIFIER_FIXUP_2877;
                float _RESERVED_IDENTIFIER_FIXUP_2883 = _RESERVED_IDENTIFIER_FIXUP_2874 + _RESERVED_IDENTIFIER_FIXUP_2877;
                _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2883;
                float _RESERVED_IDENTIFIER_FIXUP_2891 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3557.z = _RESERVED_IDENTIFIER_FIXUP_2891;
                float _RESERVED_IDENTIFIER_FIXUP_2897 = clamp((_RESERVED_IDENTIFIER_FIXUP_2891 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3557.z = _RESERVED_IDENTIFIER_FIXUP_2897;
                float _RESERVED_IDENTIFIER_FIXUP_2902 = (_RESERVED_IDENTIFIER_FIXUP_2883 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2902;
                _RESERVED_IDENTIFIER_FIXUP_3557.x = (_RESERVED_IDENTIFIER_FIXUP_2897 * _RESERVED_IDENTIFIER_FIXUP_2902) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3894 = _RESERVED_IDENTIFIER_FIXUP_3557;
            }
            _RESERVED_IDENTIFIER_FIXUP_3893 = _RESERVED_IDENTIFIER_FIXUP_3894;
        }
        _RESERVED_IDENTIFIER_FIXUP_3892 = _RESERVED_IDENTIFIER_FIXUP_3893;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2917 = (_RESERVED_IDENTIFIER_FIXUP_3892.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3832 = _RESERVED_IDENTIFIER_FIXUP_3892;
    _RESERVED_IDENTIFIER_FIXUP_3832.y = _RESERVED_IDENTIFIER_FIXUP_2917;
    _RESERVED_IDENTIFIER_FIXUP_3832.y = _RESERVED_IDENTIFIER_FIXUP_2917;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2930 = _RESERVED_IDENTIFIER_FIXUP_2162.xyz * _RESERVED_IDENTIFIER_FIXUP_3832.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3838 = _RESERVED_IDENTIFIER_FIXUP_2162;
    _RESERVED_IDENTIFIER_FIXUP_3838.x = _RESERVED_IDENTIFIER_FIXUP_2930.x;
    _RESERVED_IDENTIFIER_FIXUP_3838.y = _RESERVED_IDENTIFIER_FIXUP_2930.y;
    _RESERVED_IDENTIFIER_FIXUP_3838.z = _RESERVED_IDENTIFIER_FIXUP_2930.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2941 = _RESERVED_IDENTIFIER_FIXUP_3838.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3844 = _RESERVED_IDENTIFIER_FIXUP_3838;
    _RESERVED_IDENTIFIER_FIXUP_3844.x = _RESERVED_IDENTIFIER_FIXUP_2941.x;
    _RESERVED_IDENTIFIER_FIXUP_3844.y = _RESERVED_IDENTIFIER_FIXUP_2941.y;
    _RESERVED_IDENTIFIER_FIXUP_3844.z = _RESERVED_IDENTIFIER_FIXUP_2941.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2952 = _RESERVED_IDENTIFIER_FIXUP_3844.xyz + _RESERVED_IDENTIFIER_FIXUP_3844.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3850 = _RESERVED_IDENTIFIER_FIXUP_3844;
    _RESERVED_IDENTIFIER_FIXUP_3850.x = _RESERVED_IDENTIFIER_FIXUP_2952.x;
    _RESERVED_IDENTIFIER_FIXUP_3850.y = _RESERVED_IDENTIFIER_FIXUP_2952.y;
    _RESERVED_IDENTIFIER_FIXUP_3850.z = _RESERVED_IDENTIFIER_FIXUP_2952.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2963 = _RESERVED_IDENTIFIER_FIXUP_3850.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3832.y = _RESERVED_IDENTIFIER_FIXUP_2963.x;
    _RESERVED_IDENTIFIER_FIXUP_3832.z = _RESERVED_IDENTIFIER_FIXUP_2963.y;
    _RESERVED_IDENTIFIER_FIXUP_3832.w = _RESERVED_IDENTIFIER_FIXUP_2963.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2977 = (_RESERVED_IDENTIFIER_FIXUP_3832.yzw * _RESERVED_IDENTIFIER_FIXUP_3832.xxx) + _RESERVED_IDENTIFIER_FIXUP_3850.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3862 = _RESERVED_IDENTIFIER_FIXUP_3850;
    _RESERVED_IDENTIFIER_FIXUP_3862.x = _RESERVED_IDENTIFIER_FIXUP_2977.x;
    _RESERVED_IDENTIFIER_FIXUP_3862.y = _RESERVED_IDENTIFIER_FIXUP_2977.y;
    _RESERVED_IDENTIFIER_FIXUP_3862.z = _RESERVED_IDENTIFIER_FIXUP_2977.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2990 = _RESERVED_IDENTIFIER_FIXUP_3862.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3868 = _RESERVED_IDENTIFIER_FIXUP_3862;
    _RESERVED_IDENTIFIER_FIXUP_3868.x = _RESERVED_IDENTIFIER_FIXUP_2990.x;
    _RESERVED_IDENTIFIER_FIXUP_3868.y = _RESERVED_IDENTIFIER_FIXUP_2990.y;
    _RESERVED_IDENTIFIER_FIXUP_3868.z = _RESERVED_IDENTIFIER_FIXUP_2990.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3868.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1054 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1063;
    if (_RESERVED_IDENTIFIER_FIXUP_1054)
    {
        _RESERVED_IDENTIFIER_FIXUP_1063 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1063 = _RESERVED_IDENTIFIER_FIXUP_1054;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1063)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1100 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3454.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1127 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3049;
    if (_RESERVED_IDENTIFIER_FIXUP_1100 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3049 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1100), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1127);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3049 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1127);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3049;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2917);
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
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
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
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 *= r3.xxxx;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB150 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB150.x;
        r1.y = hdB150.y;
        vec2 hdB171 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB171.x;
        r2.y = hdB171.y;
        vec2 hdB182 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB182.x;
        r3.y = hdB182.y;
        vec2 hdB193 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB193.x;
        r4.y = hdB193.y;
        vec2 hdB204 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB204.x;
        r5.y = hdB204.y;
        vec2 hdB215 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB215.x;
        r6.y = hdB215.y;
        vec2 hdB226 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB226.x;
        r7.y = hdB226.y;
        vec2 hdB237 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB237.x;
        r8.y = hdB237.y;
        vec4 hdB242 = r1;
        vec2 hdB248 = hdB242.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB248.x;
        r1.y = hdB248.y;
        r9 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r9.xy;
        float param_4 = r9.w;
        r9 = hdLod5(param_3, param_4);
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
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod5(param_13, param_14);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_15 = r7.xy;
        float param_16 = r7.w;
        r7 = hdLod5(param_15, param_16);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_17 = r8.xy;
        float param_18 = r8.w;
        r8 = hdLod5(param_17, param_18);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_19 = r1.xy;
        float param_20 = r1.w;
        r1 = hdLod5(param_19, param_20);
        r9.y = r2.x;
        r9.z = r3.x;
        r9.w = r4.x;
        r2 = r9 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v5.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.x += (-v5.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            vec2 hdB435 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB435.x;
            r1.z = hdB435.y;
            vec2 hdB445 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB445.x;
            r2.y = hdB445.y;
            vec2 hdB455 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB455.x;
            r3.y = hdB455.y;
            vec2 hdB465 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB465.x;
            r4.y = hdB465.y;
            vec2 hdB475 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB475.x;
            r5.y = hdB475.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod6(param_21, param_22);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod6(param_25, param_26);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_27 = r4.xy;
            float param_28 = r4.w;
            r4 = hdLod6(param_27, param_28);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_29 = r5.xy;
            float param_30 = r5.w;
            r5 = hdLod6(param_29, param_30);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v6.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                vec2 hdB591 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB591.x;
                r1.z = hdB591.y;
                vec2 hdB601 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB601.x;
                r2.y = hdB601.y;
                vec2 hdB611 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB611.x;
                r3.y = hdB611.y;
                vec2 hdB621 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB621.x;
                r4.y = hdB621.y;
                vec2 hdB631 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB631.x;
                r5.y = hdB631.y;
                r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r6.xy;
                float param_32 = r6.w;
                r6 = hdLod7(param_31, param_32);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_35 = r3.xy;
                float param_36 = r3.w;
                r3 = hdLod7(param_35, param_36);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_37 = r4.xy;
                float param_38 = r4.w;
                r4 = hdLod7(param_37, param_38);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_39 = r5.xy;
                float param_40 = r5.w;
                r5 = hdLod7(param_39, param_40);
                r6.y = r2.x;
                r6.z = r3.x;
                r6.w = r4.x;
                r2 = r6 + (-v7.zzzz);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r1.y = r5.x + (-v7.z);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r2, vec4(1.0));
                r1.y += r1.z;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v5.w;
                r2.y = v6.w;
                vec2 hdB739 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB739.x;
                r3.y = hdB739.y;
                vec2 hdB749 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB749.x;
                r4.y = hdB749.y;
                vec2 hdB759 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB759.x;
                r5.y = hdB759.y;
                vec2 hdB769 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB769.x;
                r6.y = hdB769.y;
                vec2 hdB779 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB779.x;
                r7.y = hdB779.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_41 = r3.xy;
                float param_42 = r3.w;
                r3 = hdLod8(param_41, param_42);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r4 = hdLod8(param_43, param_44);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_45 = r5.xy;
                float param_46 = r5.w;
                r5 = hdLod8(param_45, param_46);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_47 = r6.xy;
                float param_48 = r6.w;
                r6 = hdLod8(param_47, param_48);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_49 = r7.xy;
                float param_50 = r7.w;
                r7 = hdLod8(param_49, param_50);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v7.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v7.w);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r3, vec4(1.0));
                r1.y += r1.z;
                r1.z = max(abs(r2.x), abs(r2.y));
                r1.z = clamp((r1.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.z * r1.y) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB909 = r0;
    vec3 hdB913 = hdB909.xyz * r1.yyy;
    r0.x = hdB913.x;
    r0.y = hdB913.y;
    r0.z = hdB913.z;
    vec4 hdB920 = r0;
    vec3 hdB924 = hdB920.xyz * v0.xyz;
    r0.x = hdB924.x;
    r0.y = hdB924.y;
    r0.z = hdB924.z;
    vec4 hdB931 = r0;
    vec4 hdB933 = r0;
    vec3 hdB935 = hdB931.xyz + hdB933.xyz;
    r0.x = hdB935.x;
    r0.y = hdB935.y;
    r0.z = hdB935.z;
    vec3 hdB946 = r0.www * v1.xyz;
    r1.y = hdB946.x;
    r1.z = hdB946.y;
    r1.w = hdB946.z;
    vec4 hdB958 = r0;
    vec3 hdB960 = (r1.yzw * r1.xxx) + hdB958.xyz;
    r0.x = hdB960.x;
    r0.y = hdB960.y;
    r0.z = hdB960.z;
    vec4 hdB967 = r0;
    vec3 hdB974 = hdB967.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB974.x;
    r0.y = hdB974.y;
    r0.z = hdB974.z;
    vec3 hdB989 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB989.x;
    oC0.y = hdB989.y;
    oC0.z = hdB989.z;
    oC0.w = 1.0;
    bool hdB1002 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1010;
    if (hdB1002)
    {
        hdB1010 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1010 = hdB1002;
    }
    if (hdB1010)
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
    bool _3362 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3372;
    if (_3362)
    {
        _3372 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3372 = _3362;
    }
    if (_3372)
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
        bool _3397 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3412;
        if (!_3397)
        {
            _3412 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3412 = _3397;
        }
        if (_3412)
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
