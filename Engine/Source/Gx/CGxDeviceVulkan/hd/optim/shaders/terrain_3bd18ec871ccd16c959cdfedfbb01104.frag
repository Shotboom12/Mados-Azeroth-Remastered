#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_4026;
vec4 _RESERVED_IDENTIFIER_FIXUP_4027;


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
    bool _61 = hdOverride >= 0;
    bool _81;
    if (_61)
    {
        _81 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _81 = _61;
    }
    vec4 _82;
    if (_81)
    {
        _82 = vec4(float(hdOverride));
    }
    else
    {
        _82 = value;
    }
    return _82;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _99 = hdOverride >= 0;
    bool _108;
    if (_99)
    {
        _108 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _108 = _99;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _126 = hdOverride >= 0;
    bool _136;
    if (_126)
    {
        _136 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1230 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1234 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1238 = hdTex2(param_2);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1242 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3157 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3157.x = _RESERVED_IDENTIFIER_FIXUP_1242.x;
    float _RESERVED_IDENTIFIER_FIXUP_1246 = _RESERVED_IDENTIFIER_FIXUP_1242.y;
    _RESERVED_IDENTIFIER_FIXUP_3157.y = _RESERVED_IDENTIFIER_FIXUP_1246;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1248 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4026).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1251 = _RESERVED_IDENTIFIER_FIXUP_1248 + _RESERVED_IDENTIFIER_FIXUP_1248;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3161 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3161.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
    _RESERVED_IDENTIFIER_FIXUP_3161.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
    _RESERVED_IDENTIFIER_FIXUP_3161.z = _RESERVED_IDENTIFIER_FIXUP_1251.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1259 = _RESERVED_IDENTIFIER_FIXUP_1230.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_1259 * _RESERVED_IDENTIFIER_FIXUP_3161.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3167 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_1262.x;
    _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1262.y;
    _RESERVED_IDENTIFIER_FIXUP_3167.z = _RESERVED_IDENTIFIER_FIXUP_1262.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1276 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3157.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1277 = mix(_RESERVED_IDENTIFIER_FIXUP_3167.xyz, _RESERVED_IDENTIFIER_FIXUP_1259, _RESERVED_IDENTIFIER_FIXUP_1276);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3173 = _RESERVED_IDENTIFIER_FIXUP_1230;
    _RESERVED_IDENTIFIER_FIXUP_3173.x = _RESERVED_IDENTIFIER_FIXUP_1277.x;
    _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1277.y;
    _RESERVED_IDENTIFIER_FIXUP_3173.z = _RESERVED_IDENTIFIER_FIXUP_1277.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1285 = _RESERVED_IDENTIFIER_FIXUP_1234.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_1285 * _RESERVED_IDENTIFIER_FIXUP_3161.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4052 = vec4(_RESERVED_IDENTIFIER_FIXUP_1288.x, _RESERVED_IDENTIFIER_FIXUP_1246, _RESERVED_IDENTIFIER_FIXUP_1288.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1303 = mix(_RESERVED_IDENTIFIER_FIXUP_4052.xzw, _RESERVED_IDENTIFIER_FIXUP_1285, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4052.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3185 = _RESERVED_IDENTIFIER_FIXUP_1234;
    _RESERVED_IDENTIFIER_FIXUP_3185.x = _RESERVED_IDENTIFIER_FIXUP_1303.x;
    _RESERVED_IDENTIFIER_FIXUP_3185.y = _RESERVED_IDENTIFIER_FIXUP_1303.y;
    _RESERVED_IDENTIFIER_FIXUP_3185.z = _RESERVED_IDENTIFIER_FIXUP_1303.z;
    float _RESERVED_IDENTIFIER_FIXUP_1313 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1238.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3191 = _RESERVED_IDENTIFIER_FIXUP_1238;
    _RESERVED_IDENTIFIER_FIXUP_3191.y = _RESERVED_IDENTIFIER_FIXUP_1313;
    _RESERVED_IDENTIFIER_FIXUP_3191.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1313;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1323 = _RESERVED_IDENTIFIER_FIXUP_3191.xxxx * _RESERVED_IDENTIFIER_FIXUP_3185;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1329 = (_RESERVED_IDENTIFIER_FIXUP_3173 * _RESERVED_IDENTIFIER_FIXUP_3191.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1323;
    float _RESERVED_IDENTIFIER_FIXUP_1336 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3198 = _RESERVED_IDENTIFIER_FIXUP_1323;
    _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_1336;
    float _RESERVED_IDENTIFIER_FIXUP_1342 = clamp((_RESERVED_IDENTIFIER_FIXUP_1336 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_1342;
    float _RESERVED_IDENTIFIER_FIXUP_1348 = ((-_RESERVED_IDENTIFIER_FIXUP_1342) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_1348;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4031;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4028;
    if (_RESERVED_IDENTIFIER_FIXUP_1348 != (-_RESERVED_IDENTIFIER_FIXUP_1348))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1360 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3437;
        _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_1360.x;
        _RESERVED_IDENTIFIER_FIXUP_3437.y = _RESERVED_IDENTIFIER_FIXUP_1360.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1370 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3441;
        _RESERVED_IDENTIFIER_FIXUP_3441.x = _RESERVED_IDENTIFIER_FIXUP_1370.x;
        _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_1370.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1380 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3445;
        _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_1380.x;
        _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_1380.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1390 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3449;
        _RESERVED_IDENTIFIER_FIXUP_3449.x = _RESERVED_IDENTIFIER_FIXUP_1390.x;
        _RESERVED_IDENTIFIER_FIXUP_3449.y = _RESERVED_IDENTIFIER_FIXUP_1390.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1400 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3453;
        _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_1400.x;
        _RESERVED_IDENTIFIER_FIXUP_3453.y = _RESERVED_IDENTIFIER_FIXUP_1400.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3457;
        _RESERVED_IDENTIFIER_FIXUP_3457.x = _RESERVED_IDENTIFIER_FIXUP_1410.x;
        _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_1410.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3461;
        _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_1420.x;
        _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_1420.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1430 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3465;
        _RESERVED_IDENTIFIER_FIXUP_3465.x = _RESERVED_IDENTIFIER_FIXUP_1430.x;
        _RESERVED_IDENTIFIER_FIXUP_3465.y = _RESERVED_IDENTIFIER_FIXUP_1430.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1440 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3469;
        _RESERVED_IDENTIFIER_FIXUP_3469.x = _RESERVED_IDENTIFIER_FIXUP_1440.x;
        _RESERVED_IDENTIFIER_FIXUP_3469.y = _RESERVED_IDENTIFIER_FIXUP_1440.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1448 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1448.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1448.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1454 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3441.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3445.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3449.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3453.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3453.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1494 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3457.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3461.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3465.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3469.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3469.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1534 = hdLod5(param_7, param_8);
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3441.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1454.y = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3445.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1454.z = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3449.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1454.w = hdLod5(param_13, param_14).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1551 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1454 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3457.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1494.y = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3461.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1494.z = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3465.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1494.w = hdLod5(param_19, param_20).x;
        float _RESERVED_IDENTIFIER_FIXUP_1574 = _RESERVED_IDENTIFIER_FIXUP_1534.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3534 = _RESERVED_IDENTIFIER_FIXUP_1534;
        _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_1574;
        float _RESERVED_IDENTIFIER_FIXUP_1579 = float(_RESERVED_IDENTIFIER_FIXUP_1574 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_1579;
        float _RESERVED_IDENTIFIER_FIXUP_1582 = dot(_RESERVED_IDENTIFIER_FIXUP_1551, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3534.y = _RESERVED_IDENTIFIER_FIXUP_1582;
        float _RESERVED_IDENTIFIER_FIXUP_1585 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1494 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3534.z = _RESERVED_IDENTIFIER_FIXUP_1585;
        float _RESERVED_IDENTIFIER_FIXUP_1591 = _RESERVED_IDENTIFIER_FIXUP_1582 + _RESERVED_IDENTIFIER_FIXUP_1585;
        _RESERVED_IDENTIFIER_FIXUP_3534.y = _RESERVED_IDENTIFIER_FIXUP_1591;
        float _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_1579 + _RESERVED_IDENTIFIER_FIXUP_1591;
        _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_1597;
        _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_1597 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4031 = _RESERVED_IDENTIFIER_FIXUP_1551;
        _RESERVED_IDENTIFIER_FIXUP_4028 = _RESERVED_IDENTIFIER_FIXUP_3534;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1610 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1610;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4032;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4029;
        if (_RESERVED_IDENTIFIER_FIXUP_1610 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1619 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_3198;
            _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_1619.x;
            _RESERVED_IDENTIFIER_FIXUP_3371.z = _RESERVED_IDENTIFIER_FIXUP_1619.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_3371.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3375;
            _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_1629.x;
            _RESERVED_IDENTIFIER_FIXUP_3375.y = _RESERVED_IDENTIFIER_FIXUP_1629.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1639 = _RESERVED_IDENTIFIER_FIXUP_3371.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3379;
            _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_1639.x;
            _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_1639.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1649 = _RESERVED_IDENTIFIER_FIXUP_3371.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3383;
            _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_1649.x;
            _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_1649.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1659 = _RESERVED_IDENTIFIER_FIXUP_3371.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3387;
            _RESERVED_IDENTIFIER_FIXUP_3387.x = _RESERVED_IDENTIFIER_FIXUP_1659.x;
            _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_1659.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1667 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1667.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1667.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1673 = hdLod6(param_21, param_22);
            _RESERVED_IDENTIFIER_FIXUP_3375.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3379.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3383.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3387.w = 0.0;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3375.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1673.y = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3379.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1673.z = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3383.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1673.w = hdLod6(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1730 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1673 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3387.xy;
            float param_30 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1736 = hdLod6(param_29, param_30).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_1736;
            float _RESERVED_IDENTIFIER_FIXUP_1741 = float(_RESERVED_IDENTIFIER_FIXUP_1736 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_1741;
            float _RESERVED_IDENTIFIER_FIXUP_1744 = dot(_RESERVED_IDENTIFIER_FIXUP_1730, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3371.z = _RESERVED_IDENTIFIER_FIXUP_1744;
            float _RESERVED_IDENTIFIER_FIXUP_1750 = _RESERVED_IDENTIFIER_FIXUP_1741 + _RESERVED_IDENTIFIER_FIXUP_1744;
            _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_1750;
            _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_1750 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4032 = _RESERVED_IDENTIFIER_FIXUP_1730;
            _RESERVED_IDENTIFIER_FIXUP_4029 = _RESERVED_IDENTIFIER_FIXUP_3371;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1763 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3215 = _RESERVED_IDENTIFIER_FIXUP_3198;
            _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_1763;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4033;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4030;
            if (_RESERVED_IDENTIFIER_FIXUP_1763 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1772 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_3215;
                _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_1772.x;
                _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_1772.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1782 = _RESERVED_IDENTIFIER_FIXUP_3305.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3309;
                _RESERVED_IDENTIFIER_FIXUP_3309.x = _RESERVED_IDENTIFIER_FIXUP_1782.x;
                _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_1782.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1792 = _RESERVED_IDENTIFIER_FIXUP_3305.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3313;
                _RESERVED_IDENTIFIER_FIXUP_3313.x = _RESERVED_IDENTIFIER_FIXUP_1792.x;
                _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_1792.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1802 = _RESERVED_IDENTIFIER_FIXUP_3305.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3317;
                _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_1802.x;
                _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_1802.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1812 = _RESERVED_IDENTIFIER_FIXUP_3305.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3321;
                _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_1812.x;
                _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_1812.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1820 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1820.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1820.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1826 = hdLod7(param_31, param_32);
                _RESERVED_IDENTIFIER_FIXUP_3309.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3313.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3317.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3321.w = 0.0;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3309.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1826.y = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3313.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1826.z = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3317.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1826.w = hdLod7(param_37, param_38).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1883 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1826 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3321.xy;
                float param_40 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1889 = hdLod7(param_39, param_40).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_1889;
                float _RESERVED_IDENTIFIER_FIXUP_1894 = float(_RESERVED_IDENTIFIER_FIXUP_1889 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_1894;
                float _RESERVED_IDENTIFIER_FIXUP_1897 = dot(_RESERVED_IDENTIFIER_FIXUP_1883, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_1897;
                float _RESERVED_IDENTIFIER_FIXUP_1903 = _RESERVED_IDENTIFIER_FIXUP_1894 + _RESERVED_IDENTIFIER_FIXUP_1897;
                _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_1903;
                _RESERVED_IDENTIFIER_FIXUP_3305.x = _RESERVED_IDENTIFIER_FIXUP_1903 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4033 = _RESERVED_IDENTIFIER_FIXUP_1883;
                _RESERVED_IDENTIFIER_FIXUP_4030 = _RESERVED_IDENTIFIER_FIXUP_3305;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3219 = _RESERVED_IDENTIFIER_FIXUP_3191;
                _RESERVED_IDENTIFIER_FIXUP_3219.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3219.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1919 = (_RESERVED_IDENTIFIER_FIXUP_3219.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3224;
                _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_1919.x;
                _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_1919.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1929 = _RESERVED_IDENTIFIER_FIXUP_3224.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
                _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_1929.x;
                _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_1929.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1939 = _RESERVED_IDENTIFIER_FIXUP_3224.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3232;
                _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_1939.x;
                _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_1939.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1949 = _RESERVED_IDENTIFIER_FIXUP_3224.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3236;
                _RESERVED_IDENTIFIER_FIXUP_3236.x = _RESERVED_IDENTIFIER_FIXUP_1949.x;
                _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_1949.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1959 = _RESERVED_IDENTIFIER_FIXUP_3224.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3240;
                _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_1959.x;
                _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_1959.y;
                _RESERVED_IDENTIFIER_FIXUP_3224.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3224.xy;
                float param_42 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1973 = hdLod8(param_41, param_42);
                _RESERVED_IDENTIFIER_FIXUP_3228.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3232.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3236.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3240.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3228.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1973.y = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3232.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1973.z = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3236.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1973.w = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3240.xy;
                float param_50 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2036 = hdLod8(param_49, param_50).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3280 = _RESERVED_IDENTIFIER_FIXUP_3215;
                _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_2036;
                float _RESERVED_IDENTIFIER_FIXUP_2041 = float(_RESERVED_IDENTIFIER_FIXUP_2036 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_2041;
                float _RESERVED_IDENTIFIER_FIXUP_2044 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1973 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3280.z = _RESERVED_IDENTIFIER_FIXUP_2044;
                float _RESERVED_IDENTIFIER_FIXUP_2050 = _RESERVED_IDENTIFIER_FIXUP_2041 + _RESERVED_IDENTIFIER_FIXUP_2044;
                _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_2050;
                float _RESERVED_IDENTIFIER_FIXUP_2058 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3280.z = _RESERVED_IDENTIFIER_FIXUP_2058;
                float _RESERVED_IDENTIFIER_FIXUP_2064 = clamp((_RESERVED_IDENTIFIER_FIXUP_2058 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3280.z = _RESERVED_IDENTIFIER_FIXUP_2064;
                float _RESERVED_IDENTIFIER_FIXUP_2069 = (_RESERVED_IDENTIFIER_FIXUP_2050 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_2069;
                _RESERVED_IDENTIFIER_FIXUP_3280.x = (_RESERVED_IDENTIFIER_FIXUP_2064 * _RESERVED_IDENTIFIER_FIXUP_2069) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4033 = _RESERVED_IDENTIFIER_FIXUP_3219;
                _RESERVED_IDENTIFIER_FIXUP_4030 = _RESERVED_IDENTIFIER_FIXUP_3280;
            }
            _RESERVED_IDENTIFIER_FIXUP_4032 = _RESERVED_IDENTIFIER_FIXUP_4033;
            _RESERVED_IDENTIFIER_FIXUP_4029 = _RESERVED_IDENTIFIER_FIXUP_4030;
        }
        _RESERVED_IDENTIFIER_FIXUP_4031 = _RESERVED_IDENTIFIER_FIXUP_4032;
        _RESERVED_IDENTIFIER_FIXUP_4028 = _RESERVED_IDENTIFIER_FIXUP_4029;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3557 = _RESERVED_IDENTIFIER_FIXUP_4028;
    _RESERVED_IDENTIFIER_FIXUP_3557.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3559 = _RESERVED_IDENTIFIER_FIXUP_4031;
    _RESERVED_IDENTIFIER_FIXUP_3559.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3559.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3559.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2108 = _RESERVED_IDENTIFIER_FIXUP_3557.xxx * _RESERVED_IDENTIFIER_FIXUP_3559.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4053 = vec4(_RESERVED_IDENTIFIER_FIXUP_2108.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2108.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2122 = (_RESERVED_IDENTIFIER_FIXUP_1329.xyz * _RESERVED_IDENTIFIER_FIXUP_4053.yyy) + _RESERVED_IDENTIFIER_FIXUP_4053.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3571 = _RESERVED_IDENTIFIER_FIXUP_1329;
    _RESERVED_IDENTIFIER_FIXUP_3571.x = _RESERVED_IDENTIFIER_FIXUP_2122.x;
    _RESERVED_IDENTIFIER_FIXUP_3571.y = _RESERVED_IDENTIFIER_FIXUP_2122.y;
    _RESERVED_IDENTIFIER_FIXUP_3571.z = _RESERVED_IDENTIFIER_FIXUP_2122.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2135 = _RESERVED_IDENTIFIER_FIXUP_3571.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3577 = _RESERVED_IDENTIFIER_FIXUP_3571;
    _RESERVED_IDENTIFIER_FIXUP_3577.x = _RESERVED_IDENTIFIER_FIXUP_2135.x;
    _RESERVED_IDENTIFIER_FIXUP_3577.y = _RESERVED_IDENTIFIER_FIXUP_2135.y;
    _RESERVED_IDENTIFIER_FIXUP_3577.z = _RESERVED_IDENTIFIER_FIXUP_2135.z;
    vec2 param_51 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2192 = hdTex0(param_51);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2196 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2200 = hdTex2(param_53);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2213 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3595 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3595.x = _RESERVED_IDENTIFIER_FIXUP_2213.x;
    _RESERVED_IDENTIFIER_FIXUP_3595.y = _RESERVED_IDENTIFIER_FIXUP_2213.y;
    _RESERVED_IDENTIFIER_FIXUP_3595.z = _RESERVED_IDENTIFIER_FIXUP_2213.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2221 = _RESERVED_IDENTIFIER_FIXUP_2192.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2224 = _RESERVED_IDENTIFIER_FIXUP_2221 * _RESERVED_IDENTIFIER_FIXUP_3595.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3601 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3601.x = _RESERVED_IDENTIFIER_FIXUP_2224.x;
    _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_2224.y;
    _RESERVED_IDENTIFIER_FIXUP_3601.z = _RESERVED_IDENTIFIER_FIXUP_2224.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2239 = mix(_RESERVED_IDENTIFIER_FIXUP_3601.xyz, _RESERVED_IDENTIFIER_FIXUP_2221, _RESERVED_IDENTIFIER_FIXUP_1276);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3607 = _RESERVED_IDENTIFIER_FIXUP_2192;
    _RESERVED_IDENTIFIER_FIXUP_3607.x = _RESERVED_IDENTIFIER_FIXUP_2239.x;
    _RESERVED_IDENTIFIER_FIXUP_3607.y = _RESERVED_IDENTIFIER_FIXUP_2239.y;
    _RESERVED_IDENTIFIER_FIXUP_3607.z = _RESERVED_IDENTIFIER_FIXUP_2239.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2247 = _RESERVED_IDENTIFIER_FIXUP_2196.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2250 = _RESERVED_IDENTIFIER_FIXUP_2247 * _RESERVED_IDENTIFIER_FIXUP_3595.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4055 = vec4(_RESERVED_IDENTIFIER_FIXUP_2250.x, _RESERVED_IDENTIFIER_FIXUP_1246, _RESERVED_IDENTIFIER_FIXUP_2250.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2265 = mix(_RESERVED_IDENTIFIER_FIXUP_4055.xzw, _RESERVED_IDENTIFIER_FIXUP_2247, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4055.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3619 = _RESERVED_IDENTIFIER_FIXUP_2196;
    _RESERVED_IDENTIFIER_FIXUP_3619.x = _RESERVED_IDENTIFIER_FIXUP_2265.x;
    _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_2265.y;
    _RESERVED_IDENTIFIER_FIXUP_3619.z = _RESERVED_IDENTIFIER_FIXUP_2265.z;
    float _RESERVED_IDENTIFIER_FIXUP_2275 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2200.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3625 = _RESERVED_IDENTIFIER_FIXUP_2200;
    _RESERVED_IDENTIFIER_FIXUP_3625.y = _RESERVED_IDENTIFIER_FIXUP_2275;
    _RESERVED_IDENTIFIER_FIXUP_3625.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2275;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2285 = _RESERVED_IDENTIFIER_FIXUP_3625.xxxx * _RESERVED_IDENTIFIER_FIXUP_3619;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2291 = (_RESERVED_IDENTIFIER_FIXUP_3607 * _RESERVED_IDENTIFIER_FIXUP_3625.yyyy) + _RESERVED_IDENTIFIER_FIXUP_2285;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3632 = _RESERVED_IDENTIFIER_FIXUP_2285;
    _RESERVED_IDENTIFIER_FIXUP_3632.x = _RESERVED_IDENTIFIER_FIXUP_1336;
    float _RESERVED_IDENTIFIER_FIXUP_2304 = clamp((_RESERVED_IDENTIFIER_FIXUP_1336 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3632.x = _RESERVED_IDENTIFIER_FIXUP_2304;
    float _RESERVED_IDENTIFIER_FIXUP_2310 = ((-_RESERVED_IDENTIFIER_FIXUP_2304) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3632.x = _RESERVED_IDENTIFIER_FIXUP_2310;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4046;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4040;
    if (_RESERVED_IDENTIFIER_FIXUP_2310 != (-_RESERVED_IDENTIFIER_FIXUP_2310))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2322 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3871;
        _RESERVED_IDENTIFIER_FIXUP_3871.x = _RESERVED_IDENTIFIER_FIXUP_2322.x;
        _RESERVED_IDENTIFIER_FIXUP_3871.y = _RESERVED_IDENTIFIER_FIXUP_2322.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2332 = _RESERVED_IDENTIFIER_FIXUP_3871.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3875;
        _RESERVED_IDENTIFIER_FIXUP_3875.x = _RESERVED_IDENTIFIER_FIXUP_2332.x;
        _RESERVED_IDENTIFIER_FIXUP_3875.y = _RESERVED_IDENTIFIER_FIXUP_2332.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2342 = _RESERVED_IDENTIFIER_FIXUP_3871.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3879;
        _RESERVED_IDENTIFIER_FIXUP_3879.x = _RESERVED_IDENTIFIER_FIXUP_2342.x;
        _RESERVED_IDENTIFIER_FIXUP_3879.y = _RESERVED_IDENTIFIER_FIXUP_2342.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2352 = _RESERVED_IDENTIFIER_FIXUP_3871.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3883;
        _RESERVED_IDENTIFIER_FIXUP_3883.x = _RESERVED_IDENTIFIER_FIXUP_2352.x;
        _RESERVED_IDENTIFIER_FIXUP_3883.y = _RESERVED_IDENTIFIER_FIXUP_2352.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2362 = _RESERVED_IDENTIFIER_FIXUP_3871.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3887;
        _RESERVED_IDENTIFIER_FIXUP_3887.x = _RESERVED_IDENTIFIER_FIXUP_2362.x;
        _RESERVED_IDENTIFIER_FIXUP_3887.y = _RESERVED_IDENTIFIER_FIXUP_2362.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2372 = _RESERVED_IDENTIFIER_FIXUP_3871.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3891;
        _RESERVED_IDENTIFIER_FIXUP_3891.x = _RESERVED_IDENTIFIER_FIXUP_2372.x;
        _RESERVED_IDENTIFIER_FIXUP_3891.y = _RESERVED_IDENTIFIER_FIXUP_2372.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2382 = _RESERVED_IDENTIFIER_FIXUP_3871.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3895;
        _RESERVED_IDENTIFIER_FIXUP_3895.x = _RESERVED_IDENTIFIER_FIXUP_2382.x;
        _RESERVED_IDENTIFIER_FIXUP_3895.y = _RESERVED_IDENTIFIER_FIXUP_2382.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2392 = _RESERVED_IDENTIFIER_FIXUP_3871.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3899;
        _RESERVED_IDENTIFIER_FIXUP_3899.x = _RESERVED_IDENTIFIER_FIXUP_2392.x;
        _RESERVED_IDENTIFIER_FIXUP_3899.y = _RESERVED_IDENTIFIER_FIXUP_2392.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2402 = _RESERVED_IDENTIFIER_FIXUP_3871.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3903;
        _RESERVED_IDENTIFIER_FIXUP_3903.x = _RESERVED_IDENTIFIER_FIXUP_2402.x;
        _RESERVED_IDENTIFIER_FIXUP_3903.y = _RESERVED_IDENTIFIER_FIXUP_2402.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2410 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2410.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2410.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2416 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3875.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3879.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3883.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3887.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3887.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2456 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3891.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3895.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3899.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3903.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3903.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2496 = hdLod5(param_58, param_59);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3875.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2416.y = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3879.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2416.z = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3883.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2416.w = hdLod5(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2513 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2416 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3891.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2456.y = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3895.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2456.z = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3899.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2456.w = hdLod5(param_70, param_71).x;
        float _RESERVED_IDENTIFIER_FIXUP_2536 = _RESERVED_IDENTIFIER_FIXUP_2496.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3968 = _RESERVED_IDENTIFIER_FIXUP_2496;
        _RESERVED_IDENTIFIER_FIXUP_3968.x = _RESERVED_IDENTIFIER_FIXUP_2536;
        float _RESERVED_IDENTIFIER_FIXUP_2541 = float(_RESERVED_IDENTIFIER_FIXUP_2536 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3968.x = _RESERVED_IDENTIFIER_FIXUP_2541;
        float _RESERVED_IDENTIFIER_FIXUP_2544 = dot(_RESERVED_IDENTIFIER_FIXUP_2513, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3968.y = _RESERVED_IDENTIFIER_FIXUP_2544;
        float _RESERVED_IDENTIFIER_FIXUP_2547 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2456 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3968.z = _RESERVED_IDENTIFIER_FIXUP_2547;
        float _RESERVED_IDENTIFIER_FIXUP_2553 = _RESERVED_IDENTIFIER_FIXUP_2544 + _RESERVED_IDENTIFIER_FIXUP_2547;
        _RESERVED_IDENTIFIER_FIXUP_3968.y = _RESERVED_IDENTIFIER_FIXUP_2553;
        float _RESERVED_IDENTIFIER_FIXUP_2559 = _RESERVED_IDENTIFIER_FIXUP_2541 + _RESERVED_IDENTIFIER_FIXUP_2553;
        _RESERVED_IDENTIFIER_FIXUP_3968.x = _RESERVED_IDENTIFIER_FIXUP_2559;
        _RESERVED_IDENTIFIER_FIXUP_3968.x = _RESERVED_IDENTIFIER_FIXUP_2559 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4046 = _RESERVED_IDENTIFIER_FIXUP_2513;
        _RESERVED_IDENTIFIER_FIXUP_4040 = _RESERVED_IDENTIFIER_FIXUP_3968;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2572 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3632.y = _RESERVED_IDENTIFIER_FIXUP_2572;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4047;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4041;
        if (_RESERVED_IDENTIFIER_FIXUP_2572 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2581 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3805 = _RESERVED_IDENTIFIER_FIXUP_3632;
            _RESERVED_IDENTIFIER_FIXUP_3805.y = _RESERVED_IDENTIFIER_FIXUP_2581.x;
            _RESERVED_IDENTIFIER_FIXUP_3805.z = _RESERVED_IDENTIFIER_FIXUP_2581.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2591 = _RESERVED_IDENTIFIER_FIXUP_3805.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3809;
            _RESERVED_IDENTIFIER_FIXUP_3809.x = _RESERVED_IDENTIFIER_FIXUP_2591.x;
            _RESERVED_IDENTIFIER_FIXUP_3809.y = _RESERVED_IDENTIFIER_FIXUP_2591.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2601 = _RESERVED_IDENTIFIER_FIXUP_3805.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3813;
            _RESERVED_IDENTIFIER_FIXUP_3813.x = _RESERVED_IDENTIFIER_FIXUP_2601.x;
            _RESERVED_IDENTIFIER_FIXUP_3813.y = _RESERVED_IDENTIFIER_FIXUP_2601.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2611 = _RESERVED_IDENTIFIER_FIXUP_3805.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3817;
            _RESERVED_IDENTIFIER_FIXUP_3817.x = _RESERVED_IDENTIFIER_FIXUP_2611.x;
            _RESERVED_IDENTIFIER_FIXUP_3817.y = _RESERVED_IDENTIFIER_FIXUP_2611.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2621 = _RESERVED_IDENTIFIER_FIXUP_3805.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3821;
            _RESERVED_IDENTIFIER_FIXUP_3821.x = _RESERVED_IDENTIFIER_FIXUP_2621.x;
            _RESERVED_IDENTIFIER_FIXUP_3821.y = _RESERVED_IDENTIFIER_FIXUP_2621.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2629 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2629.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2629.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2635 = hdLod6(param_72, param_73);
            _RESERVED_IDENTIFIER_FIXUP_3809.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3813.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3817.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3821.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3809.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2635.y = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3813.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2635.z = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3817.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2635.w = hdLod6(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2692 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2635 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3821.xy;
            float param_81 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2698 = hdLod6(param_80, param_81).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3805.y = _RESERVED_IDENTIFIER_FIXUP_2698;
            float _RESERVED_IDENTIFIER_FIXUP_2703 = float(_RESERVED_IDENTIFIER_FIXUP_2698 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3805.y = _RESERVED_IDENTIFIER_FIXUP_2703;
            float _RESERVED_IDENTIFIER_FIXUP_2706 = dot(_RESERVED_IDENTIFIER_FIXUP_2692, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3805.z = _RESERVED_IDENTIFIER_FIXUP_2706;
            float _RESERVED_IDENTIFIER_FIXUP_2712 = _RESERVED_IDENTIFIER_FIXUP_2703 + _RESERVED_IDENTIFIER_FIXUP_2706;
            _RESERVED_IDENTIFIER_FIXUP_3805.y = _RESERVED_IDENTIFIER_FIXUP_2712;
            _RESERVED_IDENTIFIER_FIXUP_3805.x = _RESERVED_IDENTIFIER_FIXUP_2712 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4047 = _RESERVED_IDENTIFIER_FIXUP_2692;
            _RESERVED_IDENTIFIER_FIXUP_4041 = _RESERVED_IDENTIFIER_FIXUP_3805;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2725 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3649 = _RESERVED_IDENTIFIER_FIXUP_3632;
            _RESERVED_IDENTIFIER_FIXUP_3649.y = _RESERVED_IDENTIFIER_FIXUP_2725;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4048;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4042;
            if (_RESERVED_IDENTIFIER_FIXUP_2725 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2734 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3739 = _RESERVED_IDENTIFIER_FIXUP_3649;
                _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2734.x;
                _RESERVED_IDENTIFIER_FIXUP_3739.z = _RESERVED_IDENTIFIER_FIXUP_2734.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2744 = _RESERVED_IDENTIFIER_FIXUP_3739.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3743;
                _RESERVED_IDENTIFIER_FIXUP_3743.x = _RESERVED_IDENTIFIER_FIXUP_2744.x;
                _RESERVED_IDENTIFIER_FIXUP_3743.y = _RESERVED_IDENTIFIER_FIXUP_2744.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2754 = _RESERVED_IDENTIFIER_FIXUP_3739.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3747;
                _RESERVED_IDENTIFIER_FIXUP_3747.x = _RESERVED_IDENTIFIER_FIXUP_2754.x;
                _RESERVED_IDENTIFIER_FIXUP_3747.y = _RESERVED_IDENTIFIER_FIXUP_2754.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2764 = _RESERVED_IDENTIFIER_FIXUP_3739.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3751;
                _RESERVED_IDENTIFIER_FIXUP_3751.x = _RESERVED_IDENTIFIER_FIXUP_2764.x;
                _RESERVED_IDENTIFIER_FIXUP_3751.y = _RESERVED_IDENTIFIER_FIXUP_2764.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2774 = _RESERVED_IDENTIFIER_FIXUP_3739.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3755;
                _RESERVED_IDENTIFIER_FIXUP_3755.x = _RESERVED_IDENTIFIER_FIXUP_2774.x;
                _RESERVED_IDENTIFIER_FIXUP_3755.y = _RESERVED_IDENTIFIER_FIXUP_2774.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2782 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2782.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2782.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2788 = hdLod7(param_82, param_83);
                _RESERVED_IDENTIFIER_FIXUP_3743.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3747.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3751.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3755.w = 0.0;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3743.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2788.y = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3747.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2788.z = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3751.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2788.w = hdLod7(param_88, param_89).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2845 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2788 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3755.xy;
                float param_91 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2851 = hdLod7(param_90, param_91).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2851;
                float _RESERVED_IDENTIFIER_FIXUP_2856 = float(_RESERVED_IDENTIFIER_FIXUP_2851 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2856;
                float _RESERVED_IDENTIFIER_FIXUP_2859 = dot(_RESERVED_IDENTIFIER_FIXUP_2845, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3739.z = _RESERVED_IDENTIFIER_FIXUP_2859;
                float _RESERVED_IDENTIFIER_FIXUP_2865 = _RESERVED_IDENTIFIER_FIXUP_2856 + _RESERVED_IDENTIFIER_FIXUP_2859;
                _RESERVED_IDENTIFIER_FIXUP_3739.y = _RESERVED_IDENTIFIER_FIXUP_2865;
                _RESERVED_IDENTIFIER_FIXUP_3739.x = _RESERVED_IDENTIFIER_FIXUP_2865 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4048 = _RESERVED_IDENTIFIER_FIXUP_2845;
                _RESERVED_IDENTIFIER_FIXUP_4042 = _RESERVED_IDENTIFIER_FIXUP_3739;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3653 = _RESERVED_IDENTIFIER_FIXUP_3625;
                _RESERVED_IDENTIFIER_FIXUP_3653.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3653.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2881 = (_RESERVED_IDENTIFIER_FIXUP_3653.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3658;
                _RESERVED_IDENTIFIER_FIXUP_3658.x = _RESERVED_IDENTIFIER_FIXUP_2881.x;
                _RESERVED_IDENTIFIER_FIXUP_3658.y = _RESERVED_IDENTIFIER_FIXUP_2881.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2891 = _RESERVED_IDENTIFIER_FIXUP_3658.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3662;
                _RESERVED_IDENTIFIER_FIXUP_3662.x = _RESERVED_IDENTIFIER_FIXUP_2891.x;
                _RESERVED_IDENTIFIER_FIXUP_3662.y = _RESERVED_IDENTIFIER_FIXUP_2891.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2901 = _RESERVED_IDENTIFIER_FIXUP_3658.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3666;
                _RESERVED_IDENTIFIER_FIXUP_3666.x = _RESERVED_IDENTIFIER_FIXUP_2901.x;
                _RESERVED_IDENTIFIER_FIXUP_3666.y = _RESERVED_IDENTIFIER_FIXUP_2901.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2911 = _RESERVED_IDENTIFIER_FIXUP_3658.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3670;
                _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2911.x;
                _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_2911.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2921 = _RESERVED_IDENTIFIER_FIXUP_3658.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3674;
                _RESERVED_IDENTIFIER_FIXUP_3674.x = _RESERVED_IDENTIFIER_FIXUP_2921.x;
                _RESERVED_IDENTIFIER_FIXUP_3674.y = _RESERVED_IDENTIFIER_FIXUP_2921.y;
                _RESERVED_IDENTIFIER_FIXUP_3658.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3658.xy;
                float param_93 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2935 = hdLod8(param_92, param_93);
                _RESERVED_IDENTIFIER_FIXUP_3662.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3666.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3670.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3674.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3662.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2935.y = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3666.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2935.z = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3670.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2935.w = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3674.xy;
                float param_101 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2998 = hdLod8(param_100, param_101).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3714 = _RESERVED_IDENTIFIER_FIXUP_3649;
                _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_2998;
                float _RESERVED_IDENTIFIER_FIXUP_3003 = float(_RESERVED_IDENTIFIER_FIXUP_2998 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_3003;
                float _RESERVED_IDENTIFIER_FIXUP_3006 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2935 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3714.z = _RESERVED_IDENTIFIER_FIXUP_3006;
                float _RESERVED_IDENTIFIER_FIXUP_3012 = _RESERVED_IDENTIFIER_FIXUP_3003 + _RESERVED_IDENTIFIER_FIXUP_3006;
                _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_3012;
                float _RESERVED_IDENTIFIER_FIXUP_3020 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3714.z = _RESERVED_IDENTIFIER_FIXUP_3020;
                float _RESERVED_IDENTIFIER_FIXUP_3026 = clamp((_RESERVED_IDENTIFIER_FIXUP_3020 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3714.z = _RESERVED_IDENTIFIER_FIXUP_3026;
                float _RESERVED_IDENTIFIER_FIXUP_3031 = (_RESERVED_IDENTIFIER_FIXUP_3012 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_3031;
                _RESERVED_IDENTIFIER_FIXUP_3714.x = (_RESERVED_IDENTIFIER_FIXUP_3026 * _RESERVED_IDENTIFIER_FIXUP_3031) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4048 = _RESERVED_IDENTIFIER_FIXUP_3653;
                _RESERVED_IDENTIFIER_FIXUP_4042 = _RESERVED_IDENTIFIER_FIXUP_3714;
            }
            _RESERVED_IDENTIFIER_FIXUP_4047 = _RESERVED_IDENTIFIER_FIXUP_4048;
            _RESERVED_IDENTIFIER_FIXUP_4041 = _RESERVED_IDENTIFIER_FIXUP_4042;
        }
        _RESERVED_IDENTIFIER_FIXUP_4046 = _RESERVED_IDENTIFIER_FIXUP_4047;
        _RESERVED_IDENTIFIER_FIXUP_4040 = _RESERVED_IDENTIFIER_FIXUP_4041;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3046 = (_RESERVED_IDENTIFIER_FIXUP_4040.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3989 = _RESERVED_IDENTIFIER_FIXUP_4040;
    _RESERVED_IDENTIFIER_FIXUP_3989.y = _RESERVED_IDENTIFIER_FIXUP_3046;
    _RESERVED_IDENTIFIER_FIXUP_3989.y = _RESERVED_IDENTIFIER_FIXUP_3046;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3059 = _RESERVED_IDENTIFIER_FIXUP_2291.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3995 = _RESERVED_IDENTIFIER_FIXUP_4046;
    _RESERVED_IDENTIFIER_FIXUP_3995.x = _RESERVED_IDENTIFIER_FIXUP_3059.x;
    _RESERVED_IDENTIFIER_FIXUP_3995.y = _RESERVED_IDENTIFIER_FIXUP_3059.y;
    _RESERVED_IDENTIFIER_FIXUP_3995.z = _RESERVED_IDENTIFIER_FIXUP_3059.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3070 = _RESERVED_IDENTIFIER_FIXUP_3989.xxx * _RESERVED_IDENTIFIER_FIXUP_3995.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4056 = vec4(_RESERVED_IDENTIFIER_FIXUP_3070.x, _RESERVED_IDENTIFIER_FIXUP_3046, _RESERVED_IDENTIFIER_FIXUP_3070.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3084 = (_RESERVED_IDENTIFIER_FIXUP_2291.xyz * _RESERVED_IDENTIFIER_FIXUP_4056.yyy) + _RESERVED_IDENTIFIER_FIXUP_4056.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4007 = _RESERVED_IDENTIFIER_FIXUP_2291;
    _RESERVED_IDENTIFIER_FIXUP_4007.x = _RESERVED_IDENTIFIER_FIXUP_3084.x;
    _RESERVED_IDENTIFIER_FIXUP_4007.y = _RESERVED_IDENTIFIER_FIXUP_3084.y;
    _RESERVED_IDENTIFIER_FIXUP_4007.z = _RESERVED_IDENTIFIER_FIXUP_3084.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3097 = _RESERVED_IDENTIFIER_FIXUP_4007.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4013 = _RESERVED_IDENTIFIER_FIXUP_4007;
    _RESERVED_IDENTIFIER_FIXUP_4013.x = _RESERVED_IDENTIFIER_FIXUP_3097.x;
    _RESERVED_IDENTIFIER_FIXUP_4013.y = _RESERVED_IDENTIFIER_FIXUP_3097.y;
    _RESERVED_IDENTIFIER_FIXUP_4013.z = _RESERVED_IDENTIFIER_FIXUP_3097.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4013.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1088 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1097;
    if (_RESERVED_IDENTIFIER_FIXUP_1088)
    {
        _RESERVED_IDENTIFIER_FIXUP_1097 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1097 = _RESERVED_IDENTIFIER_FIXUP_1088;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1097)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1134 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3577.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1160 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3150;
    if (_RESERVED_IDENTIFIER_FIXUP_1134 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3150 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1134), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1160);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3150 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1160);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3150;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3046);
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 hdB84 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = hdB84.x;
    r3.y = hdB84.y;
    vec3 hdB97 = v0.xyz + v0.xyz;
    r4.x = hdB97.x;
    r4.y = hdB97.y;
    r4.z = hdB97.z;
    vec3 hdB109 = r0.xyz * r4.xyz;
    r5.x = hdB109.x;
    r5.y = hdB109.y;
    r5.z = hdB109.z;
    vec4 hdB118 = r0;
    vec3 hdB127 = mix(r5.xyz, hdB118.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB127.x;
    r0.y = hdB127.y;
    r0.z = hdB127.z;
    vec3 hdB138 = r1.xyz * r4.xyz;
    r3.x = hdB138.x;
    r3.z = hdB138.y;
    r3.w = hdB138.z;
    vec4 hdB148 = r1;
    vec3 hdB154 = mix(r3.xzw, hdB148.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = hdB154.x;
    r1.y = hdB154.y;
    r1.z = hdB154.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB218 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB218.x;
        r1.y = hdB218.y;
        vec2 hdB229 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB229.x;
        r2.y = hdB229.y;
        vec2 hdB240 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB240.x;
        r3.y = hdB240.y;
        vec2 hdB251 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB251.x;
        r4.y = hdB251.y;
        vec2 hdB262 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB262.x;
        r5.y = hdB262.y;
        vec2 hdB273 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB273.x;
        r6.y = hdB273.y;
        vec2 hdB284 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB284.x;
        r7.y = hdB284.y;
        vec2 hdB295 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB295.x;
        r8.y = hdB295.y;
        vec4 hdB300 = r1;
        vec2 hdB306 = hdB300.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB306.x;
        r1.y = hdB306.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
        r2 = r9 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v4.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.x += (-v4.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v5.x), abs(v5.y));
        if (r1.y < 1.0)
        {
            vec2 hdB492 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB492.x;
            r1.z = hdB492.y;
            vec2 hdB502 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB502.x;
            r2.y = hdB502.y;
            vec2 hdB512 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB512.x;
            r3.y = hdB512.y;
            vec2 hdB522 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB522.x;
            r4.y = hdB522.y;
            vec2 hdB532 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB532.x;
            r5.y = hdB532.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
            r2 = r6 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v5.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v6.x), abs(v6.y));
            if (r1.y < 1.0)
            {
                vec2 hdB648 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB648.x;
                r1.z = hdB648.y;
                vec2 hdB658 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB658.x;
                r2.y = hdB658.y;
                vec2 hdB668 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB668.x;
                r3.y = hdB668.y;
                vec2 hdB678 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB678.x;
                r4.y = hdB678.y;
                vec2 hdB688 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB688.x;
                r5.y = hdB688.y;
                r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
                r2.x = v4.w;
                r2.y = v5.w;
                vec2 hdB796 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB796.x;
                r3.y = hdB796.y;
                vec2 hdB806 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB806.x;
                r4.y = hdB806.y;
                vec2 hdB816 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB816.x;
                r5.y = hdB816.y;
                vec2 hdB826 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB826.x;
                r6.y = hdB826.y;
                vec2 hdB836 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB836.x;
                r7.y = hdB836.y;
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
                r3 += (-v6.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v6.w);
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
    vec3 hdB970 = r0.www * v1.xyz;
    r2.x = hdB970.x;
    r2.y = hdB970.y;
    r2.z = hdB970.z;
    vec4 hdB977 = r1;
    vec3 hdB981 = hdB977.xxx * r2.xyz;
    r1.x = hdB981.x;
    r1.z = hdB981.y;
    r1.w = hdB981.z;
    vec4 hdB988 = r0;
    vec3 hdB995 = (hdB988.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB995.x;
    r0.y = hdB995.y;
    r0.z = hdB995.z;
    vec4 hdB1002 = r0;
    vec3 hdB1009 = hdB1002.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1009.x;
    r0.y = hdB1009.y;
    r0.z = hdB1009.z;
    vec3 hdB1024 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1024.x;
    oC0.y = hdB1024.y;
    oC0.z = hdB1024.z;
    oC0.w = 1.0;
    bool hdB1036 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1044;
    if (hdB1036)
    {
        hdB1044 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1044 = hdB1036;
    }
    if (hdB1044)
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
    bool _3549 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3559;
    if (_3549)
    {
        _3559 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3559 = _3549;
    }
    if (_3559)
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
        bool _3584 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3599;
        if (!_3584)
        {
            _3599 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3599 = _3584;
        }
        if (_3599)
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
