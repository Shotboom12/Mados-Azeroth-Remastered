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
float _RESERVED_IDENTIFIER_FIXUP_3727;
vec4 _RESERVED_IDENTIFIER_FIXUP_3728;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1152 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1156 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1160 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1164 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1168 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2928;
    _RESERVED_IDENTIFIER_FIXUP_2928.x = _RESERVED_IDENTIFIER_FIXUP_1168.x;
    _RESERVED_IDENTIFIER_FIXUP_2928.y = _RESERVED_IDENTIFIER_FIXUP_1168.y;
    float _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1168.z;
    _RESERVED_IDENTIFIER_FIXUP_2928.z = _RESERVED_IDENTIFIER_FIXUP_1174;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1176 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3727).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1179 = _RESERVED_IDENTIFIER_FIXUP_1176 + _RESERVED_IDENTIFIER_FIXUP_1176;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2934 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2934.x = _RESERVED_IDENTIFIER_FIXUP_1179.x;
    _RESERVED_IDENTIFIER_FIXUP_2934.y = _RESERVED_IDENTIFIER_FIXUP_1179.y;
    _RESERVED_IDENTIFIER_FIXUP_2934.z = _RESERVED_IDENTIFIER_FIXUP_1179.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1187 = _RESERVED_IDENTIFIER_FIXUP_1152.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1190 = _RESERVED_IDENTIFIER_FIXUP_1187 * _RESERVED_IDENTIFIER_FIXUP_2934.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2940 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2940.x = _RESERVED_IDENTIFIER_FIXUP_1190.x;
    _RESERVED_IDENTIFIER_FIXUP_2940.y = _RESERVED_IDENTIFIER_FIXUP_1190.y;
    _RESERVED_IDENTIFIER_FIXUP_2940.z = _RESERVED_IDENTIFIER_FIXUP_1190.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1204 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2928.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1205 = mix(_RESERVED_IDENTIFIER_FIXUP_2940.xyz, _RESERVED_IDENTIFIER_FIXUP_1187, _RESERVED_IDENTIFIER_FIXUP_1204);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2946 = _RESERVED_IDENTIFIER_FIXUP_1152;
    _RESERVED_IDENTIFIER_FIXUP_2946.x = _RESERVED_IDENTIFIER_FIXUP_1205.x;
    _RESERVED_IDENTIFIER_FIXUP_2946.y = _RESERVED_IDENTIFIER_FIXUP_1205.y;
    _RESERVED_IDENTIFIER_FIXUP_2946.z = _RESERVED_IDENTIFIER_FIXUP_1205.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1213 = _RESERVED_IDENTIFIER_FIXUP_1156.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1216 = _RESERVED_IDENTIFIER_FIXUP_1213 * _RESERVED_IDENTIFIER_FIXUP_2934.xyz;
    _RESERVED_IDENTIFIER_FIXUP_2940.x = _RESERVED_IDENTIFIER_FIXUP_1216.x;
    _RESERVED_IDENTIFIER_FIXUP_2940.y = _RESERVED_IDENTIFIER_FIXUP_1216.y;
    _RESERVED_IDENTIFIER_FIXUP_2940.z = _RESERVED_IDENTIFIER_FIXUP_1216.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1230 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2928.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = mix(_RESERVED_IDENTIFIER_FIXUP_2940.xyz, _RESERVED_IDENTIFIER_FIXUP_1213, _RESERVED_IDENTIFIER_FIXUP_1230);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2958 = _RESERVED_IDENTIFIER_FIXUP_1156;
    _RESERVED_IDENTIFIER_FIXUP_2958.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
    _RESERVED_IDENTIFIER_FIXUP_2958.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
    _RESERVED_IDENTIFIER_FIXUP_2958.z = _RESERVED_IDENTIFIER_FIXUP_1231.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1160.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1242 = _RESERVED_IDENTIFIER_FIXUP_1239 * _RESERVED_IDENTIFIER_FIXUP_2934.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3753 = vec4(_RESERVED_IDENTIFIER_FIXUP_1242.xy, _RESERVED_IDENTIFIER_FIXUP_1174, _RESERVED_IDENTIFIER_FIXUP_1242.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1257 = mix(_RESERVED_IDENTIFIER_FIXUP_3753.xyw, _RESERVED_IDENTIFIER_FIXUP_1239, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3753.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2970 = _RESERVED_IDENTIFIER_FIXUP_1160;
    _RESERVED_IDENTIFIER_FIXUP_2970.x = _RESERVED_IDENTIFIER_FIXUP_1257.x;
    _RESERVED_IDENTIFIER_FIXUP_2970.y = _RESERVED_IDENTIFIER_FIXUP_1257.y;
    _RESERVED_IDENTIFIER_FIXUP_2970.z = _RESERVED_IDENTIFIER_FIXUP_1257.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1273 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2946, _RESERVED_IDENTIFIER_FIXUP_2958, _RESERVED_IDENTIFIER_FIXUP_1164.xxxx), _RESERVED_IDENTIFIER_FIXUP_2970, _RESERVED_IDENTIFIER_FIXUP_1164.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1280 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2978 = _RESERVED_IDENTIFIER_FIXUP_2958;
    _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1280;
    float _RESERVED_IDENTIFIER_FIXUP_1286 = clamp((_RESERVED_IDENTIFIER_FIXUP_1280 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1286;
    float _RESERVED_IDENTIFIER_FIXUP_1292 = ((-_RESERVED_IDENTIFIER_FIXUP_1286) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2978.y = _RESERVED_IDENTIFIER_FIXUP_1292;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3730;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3729;
    if (_RESERVED_IDENTIFIER_FIXUP_1292 != (-_RESERVED_IDENTIFIER_FIXUP_1292))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1304 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2990 = _RESERVED_IDENTIFIER_FIXUP_2978;
        _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1304.x;
        _RESERVED_IDENTIFIER_FIXUP_2990.z = _RESERVED_IDENTIFIER_FIXUP_1304.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1314 = _RESERVED_IDENTIFIER_FIXUP_2990.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2994;
        _RESERVED_IDENTIFIER_FIXUP_2994.x = _RESERVED_IDENTIFIER_FIXUP_1314.x;
        _RESERVED_IDENTIFIER_FIXUP_2994.y = _RESERVED_IDENTIFIER_FIXUP_1314.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1324 = _RESERVED_IDENTIFIER_FIXUP_2990.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2998;
        _RESERVED_IDENTIFIER_FIXUP_2998.x = _RESERVED_IDENTIFIER_FIXUP_1324.x;
        _RESERVED_IDENTIFIER_FIXUP_2998.y = _RESERVED_IDENTIFIER_FIXUP_1324.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_2990.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3002;
        _RESERVED_IDENTIFIER_FIXUP_3002.x = _RESERVED_IDENTIFIER_FIXUP_1334.x;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1334.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_2990.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3006;
        _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1344.x;
        _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1344.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1352 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1352.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1352.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1358 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_2994.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2998.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3002.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3006.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2994.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1358.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2998.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1358.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3002.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1358.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1415 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1358 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3006.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1421 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1421;
        float _RESERVED_IDENTIFIER_FIXUP_1426 = float(_RESERVED_IDENTIFIER_FIXUP_1421 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1426;
        float _RESERVED_IDENTIFIER_FIXUP_1429 = dot(_RESERVED_IDENTIFIER_FIXUP_1415, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2990.z = _RESERVED_IDENTIFIER_FIXUP_1429;
        float _RESERVED_IDENTIFIER_FIXUP_1435 = _RESERVED_IDENTIFIER_FIXUP_1426 + _RESERVED_IDENTIFIER_FIXUP_1429;
        _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1435;
        float _RESERVED_IDENTIFIER_FIXUP_1440 = (_RESERVED_IDENTIFIER_FIXUP_1435 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1440;
        _RESERVED_IDENTIFIER_FIXUP_2990.x = (_RESERVED_IDENTIFIER_FIXUP_1286 * _RESERVED_IDENTIFIER_FIXUP_1440) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3730 = _RESERVED_IDENTIFIER_FIXUP_1415;
        _RESERVED_IDENTIFIER_FIXUP_3729 = _RESERVED_IDENTIFIER_FIXUP_2990;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2988 = _RESERVED_IDENTIFIER_FIXUP_2978;
        _RESERVED_IDENTIFIER_FIXUP_2988.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3730 = _RESERVED_IDENTIFIER_FIXUP_2970;
        _RESERVED_IDENTIFIER_FIXUP_3729 = _RESERVED_IDENTIFIER_FIXUP_2988;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1458 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3062 = _RESERVED_IDENTIFIER_FIXUP_3729;
    _RESERVED_IDENTIFIER_FIXUP_3062.y = _RESERVED_IDENTIFIER_FIXUP_1458;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3733;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3731;
    if (_RESERVED_IDENTIFIER_FIXUP_1458 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1467 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3223 = _RESERVED_IDENTIFIER_FIXUP_3062;
        _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_1467.x;
        _RESERVED_IDENTIFIER_FIXUP_3223.z = _RESERVED_IDENTIFIER_FIXUP_1467.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_3223.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3227;
        _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_1477.x;
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_1477.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1487 = _RESERVED_IDENTIFIER_FIXUP_3223.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3231;
        _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_1487.x;
        _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_1487.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_3223.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3235;
        _RESERVED_IDENTIFIER_FIXUP_3235.x = _RESERVED_IDENTIFIER_FIXUP_1497.x;
        _RESERVED_IDENTIFIER_FIXUP_3235.y = _RESERVED_IDENTIFIER_FIXUP_1497.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_3223.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3239;
        _RESERVED_IDENTIFIER_FIXUP_3239.x = _RESERVED_IDENTIFIER_FIXUP_1507.x;
        _RESERVED_IDENTIFIER_FIXUP_3239.y = _RESERVED_IDENTIFIER_FIXUP_1507.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1515 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1515.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1515.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1521 = hdLod6(param_13, param_14);
        _RESERVED_IDENTIFIER_FIXUP_3227.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3231.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3235.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3239.w = 0.0;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3227.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1521.y = hdLod6(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3231.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1521.z = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3235.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1521.w = hdLod6(param_19, param_20).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1578 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1521 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3239.xy;
        float param_22 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1584 = hdLod6(param_21, param_22).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_1584;
        float _RESERVED_IDENTIFIER_FIXUP_1589 = float(_RESERVED_IDENTIFIER_FIXUP_1584 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_1589;
        float _RESERVED_IDENTIFIER_FIXUP_1592 = dot(_RESERVED_IDENTIFIER_FIXUP_1578, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3223.z = _RESERVED_IDENTIFIER_FIXUP_1592;
        float _RESERVED_IDENTIFIER_FIXUP_1598 = _RESERVED_IDENTIFIER_FIXUP_1589 + _RESERVED_IDENTIFIER_FIXUP_1592;
        _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_1598;
        _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_1598 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3733 = _RESERVED_IDENTIFIER_FIXUP_1578;
        _RESERVED_IDENTIFIER_FIXUP_3731 = _RESERVED_IDENTIFIER_FIXUP_3223;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1611 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3067 = _RESERVED_IDENTIFIER_FIXUP_3062;
        _RESERVED_IDENTIFIER_FIXUP_3067.z = _RESERVED_IDENTIFIER_FIXUP_1611;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3734;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3732;
        if (_RESERVED_IDENTIFIER_FIXUP_1611 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1620 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3157 = _RESERVED_IDENTIFIER_FIXUP_3067;
            _RESERVED_IDENTIFIER_FIXUP_3157.z = _RESERVED_IDENTIFIER_FIXUP_1620.x;
            _RESERVED_IDENTIFIER_FIXUP_3157.w = _RESERVED_IDENTIFIER_FIXUP_1620.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1630 = _RESERVED_IDENTIFIER_FIXUP_3157.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3161;
            _RESERVED_IDENTIFIER_FIXUP_3161.x = _RESERVED_IDENTIFIER_FIXUP_1630.x;
            _RESERVED_IDENTIFIER_FIXUP_3161.y = _RESERVED_IDENTIFIER_FIXUP_1630.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1640 = _RESERVED_IDENTIFIER_FIXUP_3157.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3165;
            _RESERVED_IDENTIFIER_FIXUP_3165.x = _RESERVED_IDENTIFIER_FIXUP_1640.x;
            _RESERVED_IDENTIFIER_FIXUP_3165.y = _RESERVED_IDENTIFIER_FIXUP_1640.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1650 = _RESERVED_IDENTIFIER_FIXUP_3157.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3169;
            _RESERVED_IDENTIFIER_FIXUP_3169.x = _RESERVED_IDENTIFIER_FIXUP_1650.x;
            _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_1650.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1660 = _RESERVED_IDENTIFIER_FIXUP_3157.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3173;
            _RESERVED_IDENTIFIER_FIXUP_3173.x = _RESERVED_IDENTIFIER_FIXUP_1660.x;
            _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1660.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1668 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1668.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1668.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1674 = hdLod7(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_3161.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3165.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3169.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3173.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3161.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1674.y = hdLod7(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3165.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1674.z = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3169.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1674.w = hdLod7(param_29, param_30).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1731 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1674 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3173.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1737 = hdLod7(param_31, param_32).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3157.z = _RESERVED_IDENTIFIER_FIXUP_1737;
            float _RESERVED_IDENTIFIER_FIXUP_1742 = float(_RESERVED_IDENTIFIER_FIXUP_1737 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3157.z = _RESERVED_IDENTIFIER_FIXUP_1742;
            float _RESERVED_IDENTIFIER_FIXUP_1745 = dot(_RESERVED_IDENTIFIER_FIXUP_1731, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3157.w = _RESERVED_IDENTIFIER_FIXUP_1745;
            float _RESERVED_IDENTIFIER_FIXUP_1751 = _RESERVED_IDENTIFIER_FIXUP_1742 + _RESERVED_IDENTIFIER_FIXUP_1745;
            _RESERVED_IDENTIFIER_FIXUP_3157.z = _RESERVED_IDENTIFIER_FIXUP_1751;
            _RESERVED_IDENTIFIER_FIXUP_3157.y = _RESERVED_IDENTIFIER_FIXUP_1751 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3734 = _RESERVED_IDENTIFIER_FIXUP_1731;
            _RESERVED_IDENTIFIER_FIXUP_3732 = _RESERVED_IDENTIFIER_FIXUP_3157;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3071 = _RESERVED_IDENTIFIER_FIXUP_3730;
            _RESERVED_IDENTIFIER_FIXUP_3071.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3071.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1767 = (_RESERVED_IDENTIFIER_FIXUP_3071.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3076;
            _RESERVED_IDENTIFIER_FIXUP_3076.x = _RESERVED_IDENTIFIER_FIXUP_1767.x;
            _RESERVED_IDENTIFIER_FIXUP_3076.y = _RESERVED_IDENTIFIER_FIXUP_1767.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1777 = _RESERVED_IDENTIFIER_FIXUP_3076.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3080;
            _RESERVED_IDENTIFIER_FIXUP_3080.x = _RESERVED_IDENTIFIER_FIXUP_1777.x;
            _RESERVED_IDENTIFIER_FIXUP_3080.y = _RESERVED_IDENTIFIER_FIXUP_1777.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1787 = _RESERVED_IDENTIFIER_FIXUP_3076.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3084;
            _RESERVED_IDENTIFIER_FIXUP_3084.x = _RESERVED_IDENTIFIER_FIXUP_1787.x;
            _RESERVED_IDENTIFIER_FIXUP_3084.y = _RESERVED_IDENTIFIER_FIXUP_1787.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_3076.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3088;
            _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_1797.x;
            _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_1797.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1807 = _RESERVED_IDENTIFIER_FIXUP_3076.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3092;
            _RESERVED_IDENTIFIER_FIXUP_3092.x = _RESERVED_IDENTIFIER_FIXUP_1807.x;
            _RESERVED_IDENTIFIER_FIXUP_3092.y = _RESERVED_IDENTIFIER_FIXUP_1807.y;
            _RESERVED_IDENTIFIER_FIXUP_3076.w = 0.0;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3076.xy;
            float param_34 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1821 = hdLod8(param_33, param_34);
            _RESERVED_IDENTIFIER_FIXUP_3080.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3084.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3088.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3092.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3080.xy;
            float param_36 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1821.y = hdLod8(param_35, param_36).x;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3084.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1821.z = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3088.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1821.w = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3092.xy;
            float param_42 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1884 = hdLod8(param_41, param_42).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3132 = _RESERVED_IDENTIFIER_FIXUP_3067;
            _RESERVED_IDENTIFIER_FIXUP_3132.z = _RESERVED_IDENTIFIER_FIXUP_1884;
            float _RESERVED_IDENTIFIER_FIXUP_1889 = float(_RESERVED_IDENTIFIER_FIXUP_1884 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3132.z = _RESERVED_IDENTIFIER_FIXUP_1889;
            float _RESERVED_IDENTIFIER_FIXUP_1892 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1821 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3132.w = _RESERVED_IDENTIFIER_FIXUP_1892;
            float _RESERVED_IDENTIFIER_FIXUP_1898 = _RESERVED_IDENTIFIER_FIXUP_1889 + _RESERVED_IDENTIFIER_FIXUP_1892;
            _RESERVED_IDENTIFIER_FIXUP_3132.z = _RESERVED_IDENTIFIER_FIXUP_1898;
            float _RESERVED_IDENTIFIER_FIXUP_1906 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3132.w = _RESERVED_IDENTIFIER_FIXUP_1906;
            float _RESERVED_IDENTIFIER_FIXUP_1912 = clamp((_RESERVED_IDENTIFIER_FIXUP_1906 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3132.w = _RESERVED_IDENTIFIER_FIXUP_1912;
            float _RESERVED_IDENTIFIER_FIXUP_1917 = (_RESERVED_IDENTIFIER_FIXUP_1898 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3132.z = _RESERVED_IDENTIFIER_FIXUP_1917;
            _RESERVED_IDENTIFIER_FIXUP_3132.y = (_RESERVED_IDENTIFIER_FIXUP_1912 * _RESERVED_IDENTIFIER_FIXUP_1917) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3734 = _RESERVED_IDENTIFIER_FIXUP_3071;
            _RESERVED_IDENTIFIER_FIXUP_3732 = _RESERVED_IDENTIFIER_FIXUP_3132;
        }
        _RESERVED_IDENTIFIER_FIXUP_3733 = _RESERVED_IDENTIFIER_FIXUP_3734;
        _RESERVED_IDENTIFIER_FIXUP_3731 = _RESERVED_IDENTIFIER_FIXUP_3732;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1932 = min(_RESERVED_IDENTIFIER_FIXUP_3731.y, _RESERVED_IDENTIFIER_FIXUP_3731.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3291 = _RESERVED_IDENTIFIER_FIXUP_3733;
    _RESERVED_IDENTIFIER_FIXUP_3291.x = _RESERVED_IDENTIFIER_FIXUP_1932;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3754 = vec4((_RESERVED_IDENTIFIER_FIXUP_1932 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1954 = _RESERVED_IDENTIFIER_FIXUP_3291.xxx * _RESERVED_IDENTIFIER_FIXUP_3754.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3302 = _RESERVED_IDENTIFIER_FIXUP_3754;
    _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_1954.x;
    _RESERVED_IDENTIFIER_FIXUP_3302.z = _RESERVED_IDENTIFIER_FIXUP_1954.y;
    _RESERVED_IDENTIFIER_FIXUP_3302.w = _RESERVED_IDENTIFIER_FIXUP_1954.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1968 = (_RESERVED_IDENTIFIER_FIXUP_1273.xyz * _RESERVED_IDENTIFIER_FIXUP_3302.xxx) + _RESERVED_IDENTIFIER_FIXUP_3302.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3308 = _RESERVED_IDENTIFIER_FIXUP_1273;
    _RESERVED_IDENTIFIER_FIXUP_3308.x = _RESERVED_IDENTIFIER_FIXUP_1968.x;
    _RESERVED_IDENTIFIER_FIXUP_3308.y = _RESERVED_IDENTIFIER_FIXUP_1968.y;
    _RESERVED_IDENTIFIER_FIXUP_3308.z = _RESERVED_IDENTIFIER_FIXUP_1968.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1981 = _RESERVED_IDENTIFIER_FIXUP_3308.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3314 = _RESERVED_IDENTIFIER_FIXUP_3308;
    _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_1981.x;
    _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1981.y;
    _RESERVED_IDENTIFIER_FIXUP_3314.z = _RESERVED_IDENTIFIER_FIXUP_1981.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2038 = OptTex0( texcoord0.xyz);
    vec2 param_43 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2042 = hdTex1(param_43);
    vec2 param_44 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2046 = hdTex2(param_44);
    vec2 param_45 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2050 = hdTex3(param_45);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2065 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3334 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_2065.x;
    _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_2065.y;
    _RESERVED_IDENTIFIER_FIXUP_3334.z = _RESERVED_IDENTIFIER_FIXUP_2065.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2073 = _RESERVED_IDENTIFIER_FIXUP_2038.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2076 = _RESERVED_IDENTIFIER_FIXUP_2073 * _RESERVED_IDENTIFIER_FIXUP_3334.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3340 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3340.x = _RESERVED_IDENTIFIER_FIXUP_2076.x;
    _RESERVED_IDENTIFIER_FIXUP_3340.y = _RESERVED_IDENTIFIER_FIXUP_2076.y;
    _RESERVED_IDENTIFIER_FIXUP_3340.z = _RESERVED_IDENTIFIER_FIXUP_2076.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2091 = mix(_RESERVED_IDENTIFIER_FIXUP_3340.xyz, _RESERVED_IDENTIFIER_FIXUP_2073, _RESERVED_IDENTIFIER_FIXUP_1204);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3346 = _RESERVED_IDENTIFIER_FIXUP_2038;
    _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_2091.x;
    _RESERVED_IDENTIFIER_FIXUP_3346.y = _RESERVED_IDENTIFIER_FIXUP_2091.y;
    _RESERVED_IDENTIFIER_FIXUP_3346.z = _RESERVED_IDENTIFIER_FIXUP_2091.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2099 = _RESERVED_IDENTIFIER_FIXUP_2042.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2102 = _RESERVED_IDENTIFIER_FIXUP_2099 * _RESERVED_IDENTIFIER_FIXUP_3334.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3340.x = _RESERVED_IDENTIFIER_FIXUP_2102.x;
    _RESERVED_IDENTIFIER_FIXUP_3340.y = _RESERVED_IDENTIFIER_FIXUP_2102.y;
    _RESERVED_IDENTIFIER_FIXUP_3340.z = _RESERVED_IDENTIFIER_FIXUP_2102.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2117 = mix(_RESERVED_IDENTIFIER_FIXUP_3340.xyz, _RESERVED_IDENTIFIER_FIXUP_2099, _RESERVED_IDENTIFIER_FIXUP_1230);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_2042;
    _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_2117.x;
    _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_2117.y;
    _RESERVED_IDENTIFIER_FIXUP_3358.z = _RESERVED_IDENTIFIER_FIXUP_2117.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2125 = _RESERVED_IDENTIFIER_FIXUP_2046.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2128 = _RESERVED_IDENTIFIER_FIXUP_2125 * _RESERVED_IDENTIFIER_FIXUP_3334.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3756 = vec4(_RESERVED_IDENTIFIER_FIXUP_2128.xy, _RESERVED_IDENTIFIER_FIXUP_1174, _RESERVED_IDENTIFIER_FIXUP_2128.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2143 = mix(_RESERVED_IDENTIFIER_FIXUP_3756.xyw, _RESERVED_IDENTIFIER_FIXUP_2125, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3756.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3370 = _RESERVED_IDENTIFIER_FIXUP_2046;
    _RESERVED_IDENTIFIER_FIXUP_3370.x = _RESERVED_IDENTIFIER_FIXUP_2143.x;
    _RESERVED_IDENTIFIER_FIXUP_3370.y = _RESERVED_IDENTIFIER_FIXUP_2143.y;
    _RESERVED_IDENTIFIER_FIXUP_3370.z = _RESERVED_IDENTIFIER_FIXUP_2143.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2159 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3346, _RESERVED_IDENTIFIER_FIXUP_3358, _RESERVED_IDENTIFIER_FIXUP_2050.xxxx), _RESERVED_IDENTIFIER_FIXUP_3370, _RESERVED_IDENTIFIER_FIXUP_2050.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3378 = _RESERVED_IDENTIFIER_FIXUP_3358;
    _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_1280;
    float _RESERVED_IDENTIFIER_FIXUP_2172 = clamp((_RESERVED_IDENTIFIER_FIXUP_1280 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_2172;
    float _RESERVED_IDENTIFIER_FIXUP_2178 = ((-_RESERVED_IDENTIFIER_FIXUP_2172) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3378.y = _RESERVED_IDENTIFIER_FIXUP_2178;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3742;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3741;
    if (_RESERVED_IDENTIFIER_FIXUP_2178 != (-_RESERVED_IDENTIFIER_FIXUP_2178))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2190 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3390 = _RESERVED_IDENTIFIER_FIXUP_3378;
        _RESERVED_IDENTIFIER_FIXUP_3390.y = _RESERVED_IDENTIFIER_FIXUP_2190.x;
        _RESERVED_IDENTIFIER_FIXUP_3390.z = _RESERVED_IDENTIFIER_FIXUP_2190.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2200 = _RESERVED_IDENTIFIER_FIXUP_3390.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3394;
        _RESERVED_IDENTIFIER_FIXUP_3394.x = _RESERVED_IDENTIFIER_FIXUP_2200.x;
        _RESERVED_IDENTIFIER_FIXUP_3394.y = _RESERVED_IDENTIFIER_FIXUP_2200.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2210 = _RESERVED_IDENTIFIER_FIXUP_3390.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3398;
        _RESERVED_IDENTIFIER_FIXUP_3398.x = _RESERVED_IDENTIFIER_FIXUP_2210.x;
        _RESERVED_IDENTIFIER_FIXUP_3398.y = _RESERVED_IDENTIFIER_FIXUP_2210.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2220 = _RESERVED_IDENTIFIER_FIXUP_3390.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3402;
        _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_2220.x;
        _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2220.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2230 = _RESERVED_IDENTIFIER_FIXUP_3390.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3406;
        _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_2230.x;
        _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_2230.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2238 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2238.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_2238.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2244 = hdLod5(param_46, param_47);
        _RESERVED_IDENTIFIER_FIXUP_3394.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3398.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3402.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3406.w = 0.0;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3394.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2244.y = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3398.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2244.z = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3402.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2244.w = hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2301 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2244 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3406.xy;
        float param_55 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2307 = hdLod5(param_54, param_55).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3390.y = _RESERVED_IDENTIFIER_FIXUP_2307;
        float _RESERVED_IDENTIFIER_FIXUP_2312 = float(_RESERVED_IDENTIFIER_FIXUP_2307 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3390.y = _RESERVED_IDENTIFIER_FIXUP_2312;
        float _RESERVED_IDENTIFIER_FIXUP_2315 = dot(_RESERVED_IDENTIFIER_FIXUP_2301, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3390.z = _RESERVED_IDENTIFIER_FIXUP_2315;
        float _RESERVED_IDENTIFIER_FIXUP_2321 = _RESERVED_IDENTIFIER_FIXUP_2312 + _RESERVED_IDENTIFIER_FIXUP_2315;
        _RESERVED_IDENTIFIER_FIXUP_3390.y = _RESERVED_IDENTIFIER_FIXUP_2321;
        float _RESERVED_IDENTIFIER_FIXUP_2326 = (_RESERVED_IDENTIFIER_FIXUP_2321 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3390.y = _RESERVED_IDENTIFIER_FIXUP_2326;
        _RESERVED_IDENTIFIER_FIXUP_3390.x = (_RESERVED_IDENTIFIER_FIXUP_2172 * _RESERVED_IDENTIFIER_FIXUP_2326) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_2301;
        _RESERVED_IDENTIFIER_FIXUP_3741 = _RESERVED_IDENTIFIER_FIXUP_3390;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3388 = _RESERVED_IDENTIFIER_FIXUP_3378;
        _RESERVED_IDENTIFIER_FIXUP_3388.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3370;
        _RESERVED_IDENTIFIER_FIXUP_3741 = _RESERVED_IDENTIFIER_FIXUP_3388;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3462 = _RESERVED_IDENTIFIER_FIXUP_3741;
    _RESERVED_IDENTIFIER_FIXUP_3462.y = _RESERVED_IDENTIFIER_FIXUP_1458;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3745;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3743;
    if (_RESERVED_IDENTIFIER_FIXUP_1458 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2353 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3623 = _RESERVED_IDENTIFIER_FIXUP_3462;
        _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_2353.x;
        _RESERVED_IDENTIFIER_FIXUP_3623.z = _RESERVED_IDENTIFIER_FIXUP_2353.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2363 = _RESERVED_IDENTIFIER_FIXUP_3623.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3627;
        _RESERVED_IDENTIFIER_FIXUP_3627.x = _RESERVED_IDENTIFIER_FIXUP_2363.x;
        _RESERVED_IDENTIFIER_FIXUP_3627.y = _RESERVED_IDENTIFIER_FIXUP_2363.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2373 = _RESERVED_IDENTIFIER_FIXUP_3623.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3631;
        _RESERVED_IDENTIFIER_FIXUP_3631.x = _RESERVED_IDENTIFIER_FIXUP_2373.x;
        _RESERVED_IDENTIFIER_FIXUP_3631.y = _RESERVED_IDENTIFIER_FIXUP_2373.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2383 = _RESERVED_IDENTIFIER_FIXUP_3623.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3635;
        _RESERVED_IDENTIFIER_FIXUP_3635.x = _RESERVED_IDENTIFIER_FIXUP_2383.x;
        _RESERVED_IDENTIFIER_FIXUP_3635.y = _RESERVED_IDENTIFIER_FIXUP_2383.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2393 = _RESERVED_IDENTIFIER_FIXUP_3623.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3639;
        _RESERVED_IDENTIFIER_FIXUP_3639.x = _RESERVED_IDENTIFIER_FIXUP_2393.x;
        _RESERVED_IDENTIFIER_FIXUP_3639.y = _RESERVED_IDENTIFIER_FIXUP_2393.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2401 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2401.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2401.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2407 = hdLod6(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3627.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3631.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3635.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3639.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3627.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2407.y = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3631.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2407.z = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3635.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2407.w = hdLod6(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2464 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2407 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3639.xy;
        float param_65 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2470 = hdLod6(param_64, param_65).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_2470;
        float _RESERVED_IDENTIFIER_FIXUP_2475 = float(_RESERVED_IDENTIFIER_FIXUP_2470 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_2475;
        float _RESERVED_IDENTIFIER_FIXUP_2478 = dot(_RESERVED_IDENTIFIER_FIXUP_2464, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3623.z = _RESERVED_IDENTIFIER_FIXUP_2478;
        float _RESERVED_IDENTIFIER_FIXUP_2484 = _RESERVED_IDENTIFIER_FIXUP_2475 + _RESERVED_IDENTIFIER_FIXUP_2478;
        _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_2484;
        _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_2484 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_2464;
        _RESERVED_IDENTIFIER_FIXUP_3743 = _RESERVED_IDENTIFIER_FIXUP_3623;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2497 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3467 = _RESERVED_IDENTIFIER_FIXUP_3462;
        _RESERVED_IDENTIFIER_FIXUP_3467.z = _RESERVED_IDENTIFIER_FIXUP_2497;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3746;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3744;
        if (_RESERVED_IDENTIFIER_FIXUP_2497 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2506 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3557 = _RESERVED_IDENTIFIER_FIXUP_3467;
            _RESERVED_IDENTIFIER_FIXUP_3557.z = _RESERVED_IDENTIFIER_FIXUP_2506.x;
            _RESERVED_IDENTIFIER_FIXUP_3557.w = _RESERVED_IDENTIFIER_FIXUP_2506.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2516 = _RESERVED_IDENTIFIER_FIXUP_3557.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3561;
            _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2516.x;
            _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_2516.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2526 = _RESERVED_IDENTIFIER_FIXUP_3557.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3565;
            _RESERVED_IDENTIFIER_FIXUP_3565.x = _RESERVED_IDENTIFIER_FIXUP_2526.x;
            _RESERVED_IDENTIFIER_FIXUP_3565.y = _RESERVED_IDENTIFIER_FIXUP_2526.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2536 = _RESERVED_IDENTIFIER_FIXUP_3557.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3569;
            _RESERVED_IDENTIFIER_FIXUP_3569.x = _RESERVED_IDENTIFIER_FIXUP_2536.x;
            _RESERVED_IDENTIFIER_FIXUP_3569.y = _RESERVED_IDENTIFIER_FIXUP_2536.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2546 = _RESERVED_IDENTIFIER_FIXUP_3557.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3573;
            _RESERVED_IDENTIFIER_FIXUP_3573.x = _RESERVED_IDENTIFIER_FIXUP_2546.x;
            _RESERVED_IDENTIFIER_FIXUP_3573.y = _RESERVED_IDENTIFIER_FIXUP_2546.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2554 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2554.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2554.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2560 = hdLod7(param_66, param_67);
            _RESERVED_IDENTIFIER_FIXUP_3561.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3565.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3569.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3573.w = 0.0;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3561.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2560.y = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3565.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2560.z = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3569.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2560.w = hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2617 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2560 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3573.xy;
            float param_75 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2623 = hdLod7(param_74, param_75).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3557.z = _RESERVED_IDENTIFIER_FIXUP_2623;
            float _RESERVED_IDENTIFIER_FIXUP_2628 = float(_RESERVED_IDENTIFIER_FIXUP_2623 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3557.z = _RESERVED_IDENTIFIER_FIXUP_2628;
            float _RESERVED_IDENTIFIER_FIXUP_2631 = dot(_RESERVED_IDENTIFIER_FIXUP_2617, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3557.w = _RESERVED_IDENTIFIER_FIXUP_2631;
            float _RESERVED_IDENTIFIER_FIXUP_2637 = _RESERVED_IDENTIFIER_FIXUP_2628 + _RESERVED_IDENTIFIER_FIXUP_2631;
            _RESERVED_IDENTIFIER_FIXUP_3557.z = _RESERVED_IDENTIFIER_FIXUP_2637;
            _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2637 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3746 = _RESERVED_IDENTIFIER_FIXUP_2617;
            _RESERVED_IDENTIFIER_FIXUP_3744 = _RESERVED_IDENTIFIER_FIXUP_3557;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3471 = _RESERVED_IDENTIFIER_FIXUP_3742;
            _RESERVED_IDENTIFIER_FIXUP_3471.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3471.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2653 = (_RESERVED_IDENTIFIER_FIXUP_3471.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3476;
            _RESERVED_IDENTIFIER_FIXUP_3476.x = _RESERVED_IDENTIFIER_FIXUP_2653.x;
            _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2653.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2663 = _RESERVED_IDENTIFIER_FIXUP_3476.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3480;
            _RESERVED_IDENTIFIER_FIXUP_3480.x = _RESERVED_IDENTIFIER_FIXUP_2663.x;
            _RESERVED_IDENTIFIER_FIXUP_3480.y = _RESERVED_IDENTIFIER_FIXUP_2663.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2673 = _RESERVED_IDENTIFIER_FIXUP_3476.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3484;
            _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_2673.x;
            _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2673.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2683 = _RESERVED_IDENTIFIER_FIXUP_3476.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3488;
            _RESERVED_IDENTIFIER_FIXUP_3488.x = _RESERVED_IDENTIFIER_FIXUP_2683.x;
            _RESERVED_IDENTIFIER_FIXUP_3488.y = _RESERVED_IDENTIFIER_FIXUP_2683.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2693 = _RESERVED_IDENTIFIER_FIXUP_3476.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3492;
            _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_2693.x;
            _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_2693.y;
            _RESERVED_IDENTIFIER_FIXUP_3476.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3476.xy;
            float param_77 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2707 = hdLod8(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3480.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3484.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3488.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3492.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3480.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2707.y = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3484.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2707.z = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3488.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2707.w = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3492.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2770 = hdLod8(param_84, param_85).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3532 = _RESERVED_IDENTIFIER_FIXUP_3467;
            _RESERVED_IDENTIFIER_FIXUP_3532.z = _RESERVED_IDENTIFIER_FIXUP_2770;
            float _RESERVED_IDENTIFIER_FIXUP_2775 = float(_RESERVED_IDENTIFIER_FIXUP_2770 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3532.z = _RESERVED_IDENTIFIER_FIXUP_2775;
            float _RESERVED_IDENTIFIER_FIXUP_2778 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2707 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3532.w = _RESERVED_IDENTIFIER_FIXUP_2778;
            float _RESERVED_IDENTIFIER_FIXUP_2784 = _RESERVED_IDENTIFIER_FIXUP_2775 + _RESERVED_IDENTIFIER_FIXUP_2778;
            _RESERVED_IDENTIFIER_FIXUP_3532.z = _RESERVED_IDENTIFIER_FIXUP_2784;
            float _RESERVED_IDENTIFIER_FIXUP_2792 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3532.w = _RESERVED_IDENTIFIER_FIXUP_2792;
            float _RESERVED_IDENTIFIER_FIXUP_2798 = clamp((_RESERVED_IDENTIFIER_FIXUP_2792 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3532.w = _RESERVED_IDENTIFIER_FIXUP_2798;
            float _RESERVED_IDENTIFIER_FIXUP_2803 = (_RESERVED_IDENTIFIER_FIXUP_2784 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3532.z = _RESERVED_IDENTIFIER_FIXUP_2803;
            _RESERVED_IDENTIFIER_FIXUP_3532.y = (_RESERVED_IDENTIFIER_FIXUP_2798 * _RESERVED_IDENTIFIER_FIXUP_2803) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3746 = _RESERVED_IDENTIFIER_FIXUP_3471;
            _RESERVED_IDENTIFIER_FIXUP_3744 = _RESERVED_IDENTIFIER_FIXUP_3532;
        }
        _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_3746;
        _RESERVED_IDENTIFIER_FIXUP_3743 = _RESERVED_IDENTIFIER_FIXUP_3744;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2818 = min(_RESERVED_IDENTIFIER_FIXUP_3743.y, _RESERVED_IDENTIFIER_FIXUP_3743.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3691 = _RESERVED_IDENTIFIER_FIXUP_3745;
    _RESERVED_IDENTIFIER_FIXUP_3691.x = _RESERVED_IDENTIFIER_FIXUP_2818;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3757 = vec4((_RESERVED_IDENTIFIER_FIXUP_2818 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2159.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2840 = _RESERVED_IDENTIFIER_FIXUP_3691.xxx * _RESERVED_IDENTIFIER_FIXUP_3757.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3702 = _RESERVED_IDENTIFIER_FIXUP_3757;
    _RESERVED_IDENTIFIER_FIXUP_3702.y = _RESERVED_IDENTIFIER_FIXUP_2840.x;
    _RESERVED_IDENTIFIER_FIXUP_3702.z = _RESERVED_IDENTIFIER_FIXUP_2840.y;
    _RESERVED_IDENTIFIER_FIXUP_3702.w = _RESERVED_IDENTIFIER_FIXUP_2840.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2854 = (_RESERVED_IDENTIFIER_FIXUP_2159.xyz * _RESERVED_IDENTIFIER_FIXUP_3702.xxx) + _RESERVED_IDENTIFIER_FIXUP_3702.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3708 = _RESERVED_IDENTIFIER_FIXUP_2159;
    _RESERVED_IDENTIFIER_FIXUP_3708.x = _RESERVED_IDENTIFIER_FIXUP_2854.x;
    _RESERVED_IDENTIFIER_FIXUP_3708.y = _RESERVED_IDENTIFIER_FIXUP_2854.y;
    _RESERVED_IDENTIFIER_FIXUP_3708.z = _RESERVED_IDENTIFIER_FIXUP_2854.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2867 = _RESERVED_IDENTIFIER_FIXUP_3708.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3714 = _RESERVED_IDENTIFIER_FIXUP_3708;
    _RESERVED_IDENTIFIER_FIXUP_3714.x = _RESERVED_IDENTIFIER_FIXUP_2867.x;
    _RESERVED_IDENTIFIER_FIXUP_3714.y = _RESERVED_IDENTIFIER_FIXUP_2867.y;
    _RESERVED_IDENTIFIER_FIXUP_3714.z = _RESERVED_IDENTIFIER_FIXUP_2867.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3714.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1011 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1020;
    if (_RESERVED_IDENTIFIER_FIXUP_1011)
    {
        _RESERVED_IDENTIFIER_FIXUP_1020 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1020 = _RESERVED_IDENTIFIER_FIXUP_1011;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1020)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1057 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3314.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1083 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2920;
    if (_RESERVED_IDENTIFIER_FIXUP_1057 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2920 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1057), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1083);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2920 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1083);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2920;
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
    vec3 hdB94 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB94.x;
    r4.y = hdB94.y;
    r4.z = hdB94.z;
    vec3 hdB109 = v0.xyz + v0.xyz;
    r5.x = hdB109.x;
    r5.y = hdB109.y;
    r5.z = hdB109.z;
    vec3 hdB120 = r0.xyz * r5.xyz;
    r6.x = hdB120.x;
    r6.y = hdB120.y;
    r6.z = hdB120.z;
    vec4 hdB129 = r0;
    vec3 hdB138 = mix(r6.xyz, hdB129.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB138.x;
    r0.y = hdB138.y;
    r0.z = hdB138.z;
    vec3 hdB149 = r1.xyz * r5.xyz;
    r6.x = hdB149.x;
    r6.y = hdB149.y;
    r6.z = hdB149.z;
    vec4 hdB158 = r1;
    vec3 hdB164 = mix(r6.xyz, hdB158.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB164.x;
    r1.y = hdB164.y;
    r1.z = hdB164.z;
    vec3 hdB175 = r2.xyz * r5.xyz;
    r4.x = hdB175.x;
    r4.y = hdB175.y;
    r4.w = hdB175.z;
    vec4 hdB185 = r2;
    vec3 hdB191 = mix(r4.xyw, hdB185.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB191.x;
    r2.y = hdB191.y;
    r2.z = hdB191.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB244 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB244.x;
        r1.z = hdB244.y;
        vec2 hdB255 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB255.x;
        r2.y = hdB255.y;
        vec2 hdB266 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB266.x;
        r3.y = hdB266.y;
        vec2 hdB277 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB277.x;
        r4.y = hdB277.y;
        vec2 hdB288 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB288.x;
        r5.y = hdB288.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r6.xy;
        float param_4 = r6.w;
        r6 = hdLod5(param_3, param_4);
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
        vec2 hdB418 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB418.x;
        r1.z = hdB418.y;
        vec2 hdB428 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB428.x;
        r2.y = hdB428.y;
        vec2 hdB438 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB438.x;
        r3.y = hdB438.y;
        vec2 hdB448 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB448.x;
        r4.y = hdB448.y;
        vec2 hdB458 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB458.x;
        r5.y = hdB458.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod6(param_13, param_14);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod6(param_15, param_16);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_17 = r3.xy;
        float param_18 = r3.w;
        r3 = hdLod6(param_17, param_18);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_19 = r4.xy;
        float param_20 = r4.w;
        r4 = hdLod6(param_19, param_20);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_21 = r5.xy;
        float param_22 = r5.w;
        r5 = hdLod6(param_21, param_22);
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
            vec2 hdB573 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB573.x;
            r1.w = hdB573.y;
            vec2 hdB583 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB583.x;
            r2.y = hdB583.y;
            vec2 hdB593 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB593.x;
            r3.y = hdB593.y;
            vec2 hdB603 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB603.x;
            r4.y = hdB603.y;
            vec2 hdB613 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB613.x;
            r5.y = hdB613.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r6.xy;
            float param_24 = r6.w;
            r6 = hdLod7(param_23, param_24);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod7(param_25, param_26);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_29 = r4.xy;
            float param_30 = r4.w;
            r4 = hdLod7(param_29, param_30);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_31 = r5.xy;
            float param_32 = r5.w;
            r5 = hdLod7(param_31, param_32);
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
            vec2 hdB721 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB721.x;
            r3.y = hdB721.y;
            vec2 hdB731 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB731.x;
            r4.y = hdB731.y;
            vec2 hdB741 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB741.x;
            r5.y = hdB741.y;
            vec2 hdB751 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB751.x;
            r6.y = hdB751.y;
            vec2 hdB761 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB761.x;
            r7.y = hdB761.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod8(param_33, param_34);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r4 = hdLod8(param_35, param_36);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_37 = r5.xy;
            float param_38 = r5.w;
            r5 = hdLod8(param_37, param_38);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_39 = r6.xy;
            float param_40 = r6.w;
            r6 = hdLod8(param_39, param_40);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_41 = r7.xy;
            float param_42 = r7.w;
            r7 = hdLod8(param_41, param_42);
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
    vec3 hdB900 = r0.www * v1.xyz;
    r1.y = hdB900.x;
    r1.z = hdB900.y;
    r1.w = hdB900.z;
    vec4 hdB909 = r1;
    vec3 hdB911 = r2.xxx * hdB909.yzw;
    r1.y = hdB911.x;
    r1.z = hdB911.y;
    r1.w = hdB911.z;
    vec4 hdB918 = r0;
    vec3 hdB925 = (hdB918.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB925.x;
    r0.y = hdB925.y;
    r0.z = hdB925.z;
    vec4 hdB932 = r0;
    vec3 hdB939 = hdB932.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB939.x;
    r0.y = hdB939.y;
    r0.z = hdB939.z;
    vec3 hdB954 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB954.x;
    oC0.y = hdB954.y;
    oC0.z = hdB954.z;
    oC0.w = 1.0;
    bool hdB966 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB974;
    if (hdB966)
    {
        hdB974 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB974 = hdB966;
    }
    if (hdB974)
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
    bool _3351 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3361;
    if (_3351)
    {
        _3361 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3361 = _3351;
    }
    if (_3361)
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
        bool _3386 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3401;
        if (!_3386)
        {
            _3401 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3401 = _3386;
        }
        if (_3401)
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
