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
float _RESERVED_IDENTIFIER_FIXUP_3577;
vec4 _RESERVED_IDENTIFIER_FIXUP_3578;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1106 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1110 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1114 = hdTex2(param_2);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1118 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1118.x;
    _RESERVED_IDENTIFIER_FIXUP_1114.y = _RESERVED_IDENTIFIER_FIXUP_1120;
    float _RESERVED_IDENTIFIER_FIXUP_1122 = _RESERVED_IDENTIFIER_FIXUP_1118.y;
    _RESERVED_IDENTIFIER_FIXUP_1114.z = _RESERVED_IDENTIFIER_FIXUP_1122;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1124 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3577).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1127 = _RESERVED_IDENTIFIER_FIXUP_1124 + _RESERVED_IDENTIFIER_FIXUP_1124;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2810;
    _RESERVED_IDENTIFIER_FIXUP_2810.x = _RESERVED_IDENTIFIER_FIXUP_1127.x;
    _RESERVED_IDENTIFIER_FIXUP_2810.y = _RESERVED_IDENTIFIER_FIXUP_1127.y;
    _RESERVED_IDENTIFIER_FIXUP_2810.z = _RESERVED_IDENTIFIER_FIXUP_1127.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1135 = _RESERVED_IDENTIFIER_FIXUP_1106.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1138 = _RESERVED_IDENTIFIER_FIXUP_1135 * _RESERVED_IDENTIFIER_FIXUP_2810.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2816 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2816.x = _RESERVED_IDENTIFIER_FIXUP_1138.x;
    _RESERVED_IDENTIFIER_FIXUP_2816.y = _RESERVED_IDENTIFIER_FIXUP_1138.y;
    _RESERVED_IDENTIFIER_FIXUP_2816.z = _RESERVED_IDENTIFIER_FIXUP_1138.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1153 = mix(_RESERVED_IDENTIFIER_FIXUP_2816.xyz, _RESERVED_IDENTIFIER_FIXUP_1135, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1114.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2822 = _RESERVED_IDENTIFIER_FIXUP_1106;
    _RESERVED_IDENTIFIER_FIXUP_2822.x = _RESERVED_IDENTIFIER_FIXUP_1153.x;
    _RESERVED_IDENTIFIER_FIXUP_2822.y = _RESERVED_IDENTIFIER_FIXUP_1153.y;
    _RESERVED_IDENTIFIER_FIXUP_2822.z = _RESERVED_IDENTIFIER_FIXUP_1153.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1161 = _RESERVED_IDENTIFIER_FIXUP_1110.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1164 = _RESERVED_IDENTIFIER_FIXUP_1161 * _RESERVED_IDENTIFIER_FIXUP_2810.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2828;
    _RESERVED_IDENTIFIER_FIXUP_2828.x = _RESERVED_IDENTIFIER_FIXUP_1164.x;
    _RESERVED_IDENTIFIER_FIXUP_2828.y = _RESERVED_IDENTIFIER_FIXUP_1164.y;
    _RESERVED_IDENTIFIER_FIXUP_2828.z = _RESERVED_IDENTIFIER_FIXUP_1164.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1179 = mix(_RESERVED_IDENTIFIER_FIXUP_2828.xyz, _RESERVED_IDENTIFIER_FIXUP_1161, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1114.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2834 = _RESERVED_IDENTIFIER_FIXUP_1110;
    _RESERVED_IDENTIFIER_FIXUP_2834.x = _RESERVED_IDENTIFIER_FIXUP_1179.x;
    _RESERVED_IDENTIFIER_FIXUP_2834.y = _RESERVED_IDENTIFIER_FIXUP_1179.y;
    _RESERVED_IDENTIFIER_FIXUP_2834.z = _RESERVED_IDENTIFIER_FIXUP_1179.z;
    float _RESERVED_IDENTIFIER_FIXUP_1197 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2842 = _RESERVED_IDENTIFIER_FIXUP_2822;
    _RESERVED_IDENTIFIER_FIXUP_2842.x = _RESERVED_IDENTIFIER_FIXUP_1197;
    float _RESERVED_IDENTIFIER_FIXUP_1203 = clamp((_RESERVED_IDENTIFIER_FIXUP_1197 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2842.x = _RESERVED_IDENTIFIER_FIXUP_1203;
    float _RESERVED_IDENTIFIER_FIXUP_1209 = ((-_RESERVED_IDENTIFIER_FIXUP_1203) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2842.y = _RESERVED_IDENTIFIER_FIXUP_1209;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3580;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3579;
    if (_RESERVED_IDENTIFIER_FIXUP_1209 != (-_RESERVED_IDENTIFIER_FIXUP_1209))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1221 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2854 = _RESERVED_IDENTIFIER_FIXUP_2842;
        _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1221.x;
        _RESERVED_IDENTIFIER_FIXUP_2854.z = _RESERVED_IDENTIFIER_FIXUP_1221.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_2854.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2858;
        _RESERVED_IDENTIFIER_FIXUP_2858.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
        _RESERVED_IDENTIFIER_FIXUP_2858.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1241 = _RESERVED_IDENTIFIER_FIXUP_2854.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2862;
        _RESERVED_IDENTIFIER_FIXUP_2862.x = _RESERVED_IDENTIFIER_FIXUP_1241.x;
        _RESERVED_IDENTIFIER_FIXUP_2862.y = _RESERVED_IDENTIFIER_FIXUP_1241.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1251 = _RESERVED_IDENTIFIER_FIXUP_2854.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2866;
        _RESERVED_IDENTIFIER_FIXUP_2866.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
        _RESERVED_IDENTIFIER_FIXUP_2866.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_2854.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2870;
        _RESERVED_IDENTIFIER_FIXUP_2870.x = _RESERVED_IDENTIFIER_FIXUP_1261.x;
        _RESERVED_IDENTIFIER_FIXUP_2870.y = _RESERVED_IDENTIFIER_FIXUP_1261.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1269 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1269.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1269.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1275 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_2858.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2862.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2866.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2870.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2858.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1275.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2862.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1275.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2866.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1275.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1332 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1275 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2870.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1338 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1338;
        float _RESERVED_IDENTIFIER_FIXUP_1343 = float(_RESERVED_IDENTIFIER_FIXUP_1338 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1343;
        float _RESERVED_IDENTIFIER_FIXUP_1346 = dot(_RESERVED_IDENTIFIER_FIXUP_1332, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2854.z = _RESERVED_IDENTIFIER_FIXUP_1346;
        float _RESERVED_IDENTIFIER_FIXUP_1352 = _RESERVED_IDENTIFIER_FIXUP_1343 + _RESERVED_IDENTIFIER_FIXUP_1346;
        _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1352;
        float _RESERVED_IDENTIFIER_FIXUP_1357 = (_RESERVED_IDENTIFIER_FIXUP_1352 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1357;
        _RESERVED_IDENTIFIER_FIXUP_2854.x = (_RESERVED_IDENTIFIER_FIXUP_1203 * _RESERVED_IDENTIFIER_FIXUP_1357) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3580 = _RESERVED_IDENTIFIER_FIXUP_1332;
        _RESERVED_IDENTIFIER_FIXUP_3579 = _RESERVED_IDENTIFIER_FIXUP_2854;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2852 = _RESERVED_IDENTIFIER_FIXUP_2842;
        _RESERVED_IDENTIFIER_FIXUP_2852.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3580 = _RESERVED_IDENTIFIER_FIXUP_2834;
        _RESERVED_IDENTIFIER_FIXUP_3579 = _RESERVED_IDENTIFIER_FIXUP_2852;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1375 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2926 = _RESERVED_IDENTIFIER_FIXUP_3579;
    _RESERVED_IDENTIFIER_FIXUP_2926.y = _RESERVED_IDENTIFIER_FIXUP_1375;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3583;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3581;
    if (_RESERVED_IDENTIFIER_FIXUP_1375 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1384 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3087 = _RESERVED_IDENTIFIER_FIXUP_2926;
        _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1384.x;
        _RESERVED_IDENTIFIER_FIXUP_3087.z = _RESERVED_IDENTIFIER_FIXUP_1384.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1394 = _RESERVED_IDENTIFIER_FIXUP_3087.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3091;
        _RESERVED_IDENTIFIER_FIXUP_3091.x = _RESERVED_IDENTIFIER_FIXUP_1394.x;
        _RESERVED_IDENTIFIER_FIXUP_3091.y = _RESERVED_IDENTIFIER_FIXUP_1394.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1404 = _RESERVED_IDENTIFIER_FIXUP_3087.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3095;
        _RESERVED_IDENTIFIER_FIXUP_3095.x = _RESERVED_IDENTIFIER_FIXUP_1404.x;
        _RESERVED_IDENTIFIER_FIXUP_3095.y = _RESERVED_IDENTIFIER_FIXUP_1404.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1414 = _RESERVED_IDENTIFIER_FIXUP_3087.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3099;
        _RESERVED_IDENTIFIER_FIXUP_3099.x = _RESERVED_IDENTIFIER_FIXUP_1414.x;
        _RESERVED_IDENTIFIER_FIXUP_3099.y = _RESERVED_IDENTIFIER_FIXUP_1414.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1424 = _RESERVED_IDENTIFIER_FIXUP_3087.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3103;
        _RESERVED_IDENTIFIER_FIXUP_3103.x = _RESERVED_IDENTIFIER_FIXUP_1424.x;
        _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1424.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1432 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1432.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1432.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1438 = hdLod6(param_13, param_14);
        _RESERVED_IDENTIFIER_FIXUP_3091.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3095.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3099.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3103.w = 0.0;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3091.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1438.y = hdLod6(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3095.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1438.z = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3099.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1438.w = hdLod6(param_19, param_20).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1495 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1438 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3103.xy;
        float param_22 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1501 = hdLod6(param_21, param_22).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1501;
        float _RESERVED_IDENTIFIER_FIXUP_1506 = float(_RESERVED_IDENTIFIER_FIXUP_1501 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1506;
        float _RESERVED_IDENTIFIER_FIXUP_1509 = dot(_RESERVED_IDENTIFIER_FIXUP_1495, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3087.z = _RESERVED_IDENTIFIER_FIXUP_1509;
        float _RESERVED_IDENTIFIER_FIXUP_1515 = _RESERVED_IDENTIFIER_FIXUP_1506 + _RESERVED_IDENTIFIER_FIXUP_1509;
        _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1515;
        _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1515 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3583 = _RESERVED_IDENTIFIER_FIXUP_1495;
        _RESERVED_IDENTIFIER_FIXUP_3581 = _RESERVED_IDENTIFIER_FIXUP_3087;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1528 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2931 = _RESERVED_IDENTIFIER_FIXUP_2926;
        _RESERVED_IDENTIFIER_FIXUP_2931.z = _RESERVED_IDENTIFIER_FIXUP_1528;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3584;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3582;
        if (_RESERVED_IDENTIFIER_FIXUP_1528 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1537 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3021 = _RESERVED_IDENTIFIER_FIXUP_2931;
            _RESERVED_IDENTIFIER_FIXUP_3021.z = _RESERVED_IDENTIFIER_FIXUP_1537.x;
            _RESERVED_IDENTIFIER_FIXUP_3021.w = _RESERVED_IDENTIFIER_FIXUP_1537.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1547 = _RESERVED_IDENTIFIER_FIXUP_3021.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3025;
            _RESERVED_IDENTIFIER_FIXUP_3025.x = _RESERVED_IDENTIFIER_FIXUP_1547.x;
            _RESERVED_IDENTIFIER_FIXUP_3025.y = _RESERVED_IDENTIFIER_FIXUP_1547.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1557 = _RESERVED_IDENTIFIER_FIXUP_3021.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3029;
            _RESERVED_IDENTIFIER_FIXUP_3029.x = _RESERVED_IDENTIFIER_FIXUP_1557.x;
            _RESERVED_IDENTIFIER_FIXUP_3029.y = _RESERVED_IDENTIFIER_FIXUP_1557.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_3021.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3033;
            _RESERVED_IDENTIFIER_FIXUP_3033.x = _RESERVED_IDENTIFIER_FIXUP_1567.x;
            _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1567.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1577 = _RESERVED_IDENTIFIER_FIXUP_3021.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3037;
            _RESERVED_IDENTIFIER_FIXUP_3037.x = _RESERVED_IDENTIFIER_FIXUP_1577.x;
            _RESERVED_IDENTIFIER_FIXUP_3037.y = _RESERVED_IDENTIFIER_FIXUP_1577.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1585 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1585.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1585.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1591 = hdLod7(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_3025.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3029.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3033.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3037.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3025.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1591.y = hdLod7(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3029.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1591.z = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3033.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1591.w = hdLod7(param_29, param_30).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1648 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1591 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3037.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1654 = hdLod7(param_31, param_32).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3021.z = _RESERVED_IDENTIFIER_FIXUP_1654;
            float _RESERVED_IDENTIFIER_FIXUP_1659 = float(_RESERVED_IDENTIFIER_FIXUP_1654 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3021.z = _RESERVED_IDENTIFIER_FIXUP_1659;
            float _RESERVED_IDENTIFIER_FIXUP_1662 = dot(_RESERVED_IDENTIFIER_FIXUP_1648, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3021.w = _RESERVED_IDENTIFIER_FIXUP_1662;
            float _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_1659 + _RESERVED_IDENTIFIER_FIXUP_1662;
            _RESERVED_IDENTIFIER_FIXUP_3021.z = _RESERVED_IDENTIFIER_FIXUP_1668;
            _RESERVED_IDENTIFIER_FIXUP_3021.y = _RESERVED_IDENTIFIER_FIXUP_1668 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3584 = _RESERVED_IDENTIFIER_FIXUP_1648;
            _RESERVED_IDENTIFIER_FIXUP_3582 = _RESERVED_IDENTIFIER_FIXUP_3021;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2935 = _RESERVED_IDENTIFIER_FIXUP_3580;
            _RESERVED_IDENTIFIER_FIXUP_2935.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2935.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1684 = (_RESERVED_IDENTIFIER_FIXUP_2935.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2940;
            _RESERVED_IDENTIFIER_FIXUP_2940.x = _RESERVED_IDENTIFIER_FIXUP_1684.x;
            _RESERVED_IDENTIFIER_FIXUP_2940.y = _RESERVED_IDENTIFIER_FIXUP_1684.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_2940.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2944;
            _RESERVED_IDENTIFIER_FIXUP_2944.x = _RESERVED_IDENTIFIER_FIXUP_1694.x;
            _RESERVED_IDENTIFIER_FIXUP_2944.y = _RESERVED_IDENTIFIER_FIXUP_1694.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_2940.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2948;
            _RESERVED_IDENTIFIER_FIXUP_2948.x = _RESERVED_IDENTIFIER_FIXUP_1704.x;
            _RESERVED_IDENTIFIER_FIXUP_2948.y = _RESERVED_IDENTIFIER_FIXUP_1704.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1714 = _RESERVED_IDENTIFIER_FIXUP_2940.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2952;
            _RESERVED_IDENTIFIER_FIXUP_2952.x = _RESERVED_IDENTIFIER_FIXUP_1714.x;
            _RESERVED_IDENTIFIER_FIXUP_2952.y = _RESERVED_IDENTIFIER_FIXUP_1714.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1724 = _RESERVED_IDENTIFIER_FIXUP_2940.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2956;
            _RESERVED_IDENTIFIER_FIXUP_2956.x = _RESERVED_IDENTIFIER_FIXUP_1724.x;
            _RESERVED_IDENTIFIER_FIXUP_2956.y = _RESERVED_IDENTIFIER_FIXUP_1724.y;
            _RESERVED_IDENTIFIER_FIXUP_2940.w = 0.0;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2940.xy;
            float param_34 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1738 = hdLod8(param_33, param_34);
            _RESERVED_IDENTIFIER_FIXUP_2944.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2948.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2952.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2956.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_2944.xy;
            float param_36 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1738.y = hdLod8(param_35, param_36).x;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2948.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1738.z = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2952.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1738.w = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2956.xy;
            float param_42 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1801 = hdLod8(param_41, param_42).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2996 = _RESERVED_IDENTIFIER_FIXUP_2931;
            _RESERVED_IDENTIFIER_FIXUP_2996.z = _RESERVED_IDENTIFIER_FIXUP_1801;
            float _RESERVED_IDENTIFIER_FIXUP_1806 = float(_RESERVED_IDENTIFIER_FIXUP_1801 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2996.z = _RESERVED_IDENTIFIER_FIXUP_1806;
            float _RESERVED_IDENTIFIER_FIXUP_1809 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1738 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2996.w = _RESERVED_IDENTIFIER_FIXUP_1809;
            float _RESERVED_IDENTIFIER_FIXUP_1815 = _RESERVED_IDENTIFIER_FIXUP_1806 + _RESERVED_IDENTIFIER_FIXUP_1809;
            _RESERVED_IDENTIFIER_FIXUP_2996.z = _RESERVED_IDENTIFIER_FIXUP_1815;
            float _RESERVED_IDENTIFIER_FIXUP_1823 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2996.w = _RESERVED_IDENTIFIER_FIXUP_1823;
            float _RESERVED_IDENTIFIER_FIXUP_1829 = clamp((_RESERVED_IDENTIFIER_FIXUP_1823 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2996.w = _RESERVED_IDENTIFIER_FIXUP_1829;
            float _RESERVED_IDENTIFIER_FIXUP_1834 = (_RESERVED_IDENTIFIER_FIXUP_1815 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2996.z = _RESERVED_IDENTIFIER_FIXUP_1834;
            _RESERVED_IDENTIFIER_FIXUP_2996.y = (_RESERVED_IDENTIFIER_FIXUP_1829 * _RESERVED_IDENTIFIER_FIXUP_1834) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3584 = _RESERVED_IDENTIFIER_FIXUP_2935;
            _RESERVED_IDENTIFIER_FIXUP_3582 = _RESERVED_IDENTIFIER_FIXUP_2996;
        }
        _RESERVED_IDENTIFIER_FIXUP_3583 = _RESERVED_IDENTIFIER_FIXUP_3584;
        _RESERVED_IDENTIFIER_FIXUP_3581 = _RESERVED_IDENTIFIER_FIXUP_3582;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1849 = min(_RESERVED_IDENTIFIER_FIXUP_3581.y, _RESERVED_IDENTIFIER_FIXUP_3581.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3155 = _RESERVED_IDENTIFIER_FIXUP_3583;
    _RESERVED_IDENTIFIER_FIXUP_3155.x = _RESERVED_IDENTIFIER_FIXUP_1849;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3597 = vec4((_RESERVED_IDENTIFIER_FIXUP_1849 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1871 = _RESERVED_IDENTIFIER_FIXUP_3155.xxx * _RESERVED_IDENTIFIER_FIXUP_3597.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1873 = _RESERVED_IDENTIFIER_FIXUP_1871.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3166 = _RESERVED_IDENTIFIER_FIXUP_3597;
    _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_1873;
    _RESERVED_IDENTIFIER_FIXUP_3166.z = _RESERVED_IDENTIFIER_FIXUP_1871.y;
    _RESERVED_IDENTIFIER_FIXUP_3166.w = _RESERVED_IDENTIFIER_FIXUP_1871.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1885 = (mix(_RESERVED_IDENTIFIER_FIXUP_2822, _RESERVED_IDENTIFIER_FIXUP_2834, _RESERVED_IDENTIFIER_FIXUP_1114.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_3166.xxx) + _RESERVED_IDENTIFIER_FIXUP_3166.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3598 = vec4(_RESERVED_IDENTIFIER_FIXUP_1885.x, _RESERVED_IDENTIFIER_FIXUP_1873, _RESERVED_IDENTIFIER_FIXUP_1871.yz);
    _RESERVED_IDENTIFIER_FIXUP_3598.y = _RESERVED_IDENTIFIER_FIXUP_1885.y;
    _RESERVED_IDENTIFIER_FIXUP_3598.z = _RESERVED_IDENTIFIER_FIXUP_1885.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1898 = _RESERVED_IDENTIFIER_FIXUP_3598.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3178 = _RESERVED_IDENTIFIER_FIXUP_3598;
    _RESERVED_IDENTIFIER_FIXUP_3178.x = _RESERVED_IDENTIFIER_FIXUP_1898.x;
    _RESERVED_IDENTIFIER_FIXUP_3178.y = _RESERVED_IDENTIFIER_FIXUP_1898.y;
    _RESERVED_IDENTIFIER_FIXUP_3178.z = _RESERVED_IDENTIFIER_FIXUP_1898.z;
    vec2 param_43 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1953 = hdTex0(param_43);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1957 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1961 = hdTex2(param_45);
    _RESERVED_IDENTIFIER_FIXUP_1961.y = _RESERVED_IDENTIFIER_FIXUP_1120;
    _RESERVED_IDENTIFIER_FIXUP_1961.z = _RESERVED_IDENTIFIER_FIXUP_1122;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1974 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3196;
    _RESERVED_IDENTIFIER_FIXUP_3196.x = _RESERVED_IDENTIFIER_FIXUP_1974.x;
    _RESERVED_IDENTIFIER_FIXUP_3196.y = _RESERVED_IDENTIFIER_FIXUP_1974.y;
    _RESERVED_IDENTIFIER_FIXUP_3196.z = _RESERVED_IDENTIFIER_FIXUP_1974.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1982 = _RESERVED_IDENTIFIER_FIXUP_1953.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1985 = _RESERVED_IDENTIFIER_FIXUP_1982 * _RESERVED_IDENTIFIER_FIXUP_3196.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3202 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3202.x = _RESERVED_IDENTIFIER_FIXUP_1985.x;
    _RESERVED_IDENTIFIER_FIXUP_3202.y = _RESERVED_IDENTIFIER_FIXUP_1985.y;
    _RESERVED_IDENTIFIER_FIXUP_3202.z = _RESERVED_IDENTIFIER_FIXUP_1985.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2000 = mix(_RESERVED_IDENTIFIER_FIXUP_3202.xyz, _RESERVED_IDENTIFIER_FIXUP_1982, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1961.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3208 = _RESERVED_IDENTIFIER_FIXUP_1953;
    _RESERVED_IDENTIFIER_FIXUP_3208.x = _RESERVED_IDENTIFIER_FIXUP_2000.x;
    _RESERVED_IDENTIFIER_FIXUP_3208.y = _RESERVED_IDENTIFIER_FIXUP_2000.y;
    _RESERVED_IDENTIFIER_FIXUP_3208.z = _RESERVED_IDENTIFIER_FIXUP_2000.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2008 = _RESERVED_IDENTIFIER_FIXUP_1957.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2011 = _RESERVED_IDENTIFIER_FIXUP_2008 * _RESERVED_IDENTIFIER_FIXUP_3196.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3214;
    _RESERVED_IDENTIFIER_FIXUP_3214.x = _RESERVED_IDENTIFIER_FIXUP_2011.x;
    _RESERVED_IDENTIFIER_FIXUP_3214.y = _RESERVED_IDENTIFIER_FIXUP_2011.y;
    _RESERVED_IDENTIFIER_FIXUP_3214.z = _RESERVED_IDENTIFIER_FIXUP_2011.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2026 = mix(_RESERVED_IDENTIFIER_FIXUP_3214.xyz, _RESERVED_IDENTIFIER_FIXUP_2008, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1961.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3220 = _RESERVED_IDENTIFIER_FIXUP_1957;
    _RESERVED_IDENTIFIER_FIXUP_3220.x = _RESERVED_IDENTIFIER_FIXUP_2026.x;
    _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_2026.y;
    _RESERVED_IDENTIFIER_FIXUP_3220.z = _RESERVED_IDENTIFIER_FIXUP_2026.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2037 = mix(_RESERVED_IDENTIFIER_FIXUP_3208, _RESERVED_IDENTIFIER_FIXUP_3220, _RESERVED_IDENTIFIER_FIXUP_1961.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3228 = _RESERVED_IDENTIFIER_FIXUP_3208;
    _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_1197;
    float _RESERVED_IDENTIFIER_FIXUP_2050 = clamp((_RESERVED_IDENTIFIER_FIXUP_1197 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_2050;
    float _RESERVED_IDENTIFIER_FIXUP_2056 = ((-_RESERVED_IDENTIFIER_FIXUP_2050) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_2056;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3589;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3588;
    if (_RESERVED_IDENTIFIER_FIXUP_2056 != (-_RESERVED_IDENTIFIER_FIXUP_2056))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2068 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3240 = _RESERVED_IDENTIFIER_FIXUP_3228;
        _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_2068.x;
        _RESERVED_IDENTIFIER_FIXUP_3240.z = _RESERVED_IDENTIFIER_FIXUP_2068.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2078 = _RESERVED_IDENTIFIER_FIXUP_3240.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3244;
        _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_2078.x;
        _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_2078.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2088 = _RESERVED_IDENTIFIER_FIXUP_3240.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3248;
        _RESERVED_IDENTIFIER_FIXUP_3248.x = _RESERVED_IDENTIFIER_FIXUP_2088.x;
        _RESERVED_IDENTIFIER_FIXUP_3248.y = _RESERVED_IDENTIFIER_FIXUP_2088.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2098 = _RESERVED_IDENTIFIER_FIXUP_3240.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3252;
        _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_2098.x;
        _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_2098.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2108 = _RESERVED_IDENTIFIER_FIXUP_3240.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3256;
        _RESERVED_IDENTIFIER_FIXUP_3256.x = _RESERVED_IDENTIFIER_FIXUP_2108.x;
        _RESERVED_IDENTIFIER_FIXUP_3256.y = _RESERVED_IDENTIFIER_FIXUP_2108.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2116 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2116.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_2116.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2122 = hdLod5(param_46, param_47);
        _RESERVED_IDENTIFIER_FIXUP_3244.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3248.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3252.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3256.w = 0.0;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3244.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2122.y = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3248.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2122.z = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3252.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2122.w = hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2179 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2122 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3256.xy;
        float param_55 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2185 = hdLod5(param_54, param_55).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_2185;
        float _RESERVED_IDENTIFIER_FIXUP_2190 = float(_RESERVED_IDENTIFIER_FIXUP_2185 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_2190;
        float _RESERVED_IDENTIFIER_FIXUP_2193 = dot(_RESERVED_IDENTIFIER_FIXUP_2179, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3240.z = _RESERVED_IDENTIFIER_FIXUP_2193;
        float _RESERVED_IDENTIFIER_FIXUP_2199 = _RESERVED_IDENTIFIER_FIXUP_2190 + _RESERVED_IDENTIFIER_FIXUP_2193;
        _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_2199;
        float _RESERVED_IDENTIFIER_FIXUP_2204 = (_RESERVED_IDENTIFIER_FIXUP_2199 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_2204;
        _RESERVED_IDENTIFIER_FIXUP_3240.x = (_RESERVED_IDENTIFIER_FIXUP_2050 * _RESERVED_IDENTIFIER_FIXUP_2204) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3589 = _RESERVED_IDENTIFIER_FIXUP_2179;
        _RESERVED_IDENTIFIER_FIXUP_3588 = _RESERVED_IDENTIFIER_FIXUP_3240;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3238 = _RESERVED_IDENTIFIER_FIXUP_3228;
        _RESERVED_IDENTIFIER_FIXUP_3238.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3589 = _RESERVED_IDENTIFIER_FIXUP_3220;
        _RESERVED_IDENTIFIER_FIXUP_3588 = _RESERVED_IDENTIFIER_FIXUP_3238;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3312 = _RESERVED_IDENTIFIER_FIXUP_3588;
    _RESERVED_IDENTIFIER_FIXUP_3312.y = _RESERVED_IDENTIFIER_FIXUP_1375;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3592;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3590;
    if (_RESERVED_IDENTIFIER_FIXUP_1375 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2231 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3473 = _RESERVED_IDENTIFIER_FIXUP_3312;
        _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2231.x;
        _RESERVED_IDENTIFIER_FIXUP_3473.z = _RESERVED_IDENTIFIER_FIXUP_2231.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2241 = _RESERVED_IDENTIFIER_FIXUP_3473.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3477;
        _RESERVED_IDENTIFIER_FIXUP_3477.x = _RESERVED_IDENTIFIER_FIXUP_2241.x;
        _RESERVED_IDENTIFIER_FIXUP_3477.y = _RESERVED_IDENTIFIER_FIXUP_2241.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2251 = _RESERVED_IDENTIFIER_FIXUP_3473.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3481;
        _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2251.x;
        _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2251.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2261 = _RESERVED_IDENTIFIER_FIXUP_3473.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3485;
        _RESERVED_IDENTIFIER_FIXUP_3485.x = _RESERVED_IDENTIFIER_FIXUP_2261.x;
        _RESERVED_IDENTIFIER_FIXUP_3485.y = _RESERVED_IDENTIFIER_FIXUP_2261.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2271 = _RESERVED_IDENTIFIER_FIXUP_3473.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3489;
        _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_2271.x;
        _RESERVED_IDENTIFIER_FIXUP_3489.y = _RESERVED_IDENTIFIER_FIXUP_2271.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2279 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2279.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2279.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2285 = hdLod6(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3477.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3481.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3485.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3489.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3477.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2285.y = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3481.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2285.z = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3485.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2285.w = hdLod6(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2342 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2285 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3489.xy;
        float param_65 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2348 = hdLod6(param_64, param_65).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2348;
        float _RESERVED_IDENTIFIER_FIXUP_2353 = float(_RESERVED_IDENTIFIER_FIXUP_2348 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2353;
        float _RESERVED_IDENTIFIER_FIXUP_2356 = dot(_RESERVED_IDENTIFIER_FIXUP_2342, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3473.z = _RESERVED_IDENTIFIER_FIXUP_2356;
        float _RESERVED_IDENTIFIER_FIXUP_2362 = _RESERVED_IDENTIFIER_FIXUP_2353 + _RESERVED_IDENTIFIER_FIXUP_2356;
        _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2362;
        _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2362 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3592 = _RESERVED_IDENTIFIER_FIXUP_2342;
        _RESERVED_IDENTIFIER_FIXUP_3590 = _RESERVED_IDENTIFIER_FIXUP_3473;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2375 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3317 = _RESERVED_IDENTIFIER_FIXUP_3312;
        _RESERVED_IDENTIFIER_FIXUP_3317.z = _RESERVED_IDENTIFIER_FIXUP_2375;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3593;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3591;
        if (_RESERVED_IDENTIFIER_FIXUP_2375 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2384 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3407 = _RESERVED_IDENTIFIER_FIXUP_3317;
            _RESERVED_IDENTIFIER_FIXUP_3407.z = _RESERVED_IDENTIFIER_FIXUP_2384.x;
            _RESERVED_IDENTIFIER_FIXUP_3407.w = _RESERVED_IDENTIFIER_FIXUP_2384.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2394 = _RESERVED_IDENTIFIER_FIXUP_3407.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3411;
            _RESERVED_IDENTIFIER_FIXUP_3411.x = _RESERVED_IDENTIFIER_FIXUP_2394.x;
            _RESERVED_IDENTIFIER_FIXUP_3411.y = _RESERVED_IDENTIFIER_FIXUP_2394.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2404 = _RESERVED_IDENTIFIER_FIXUP_3407.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3415;
            _RESERVED_IDENTIFIER_FIXUP_3415.x = _RESERVED_IDENTIFIER_FIXUP_2404.x;
            _RESERVED_IDENTIFIER_FIXUP_3415.y = _RESERVED_IDENTIFIER_FIXUP_2404.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2414 = _RESERVED_IDENTIFIER_FIXUP_3407.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3419;
            _RESERVED_IDENTIFIER_FIXUP_3419.x = _RESERVED_IDENTIFIER_FIXUP_2414.x;
            _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_2414.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2424 = _RESERVED_IDENTIFIER_FIXUP_3407.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3423;
            _RESERVED_IDENTIFIER_FIXUP_3423.x = _RESERVED_IDENTIFIER_FIXUP_2424.x;
            _RESERVED_IDENTIFIER_FIXUP_3423.y = _RESERVED_IDENTIFIER_FIXUP_2424.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2432 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2432.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2432.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2438 = hdLod7(param_66, param_67);
            _RESERVED_IDENTIFIER_FIXUP_3411.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3415.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3419.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3423.w = 0.0;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3411.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2438.y = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3415.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2438.z = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3419.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2438.w = hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2495 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2438 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3423.xy;
            float param_75 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2501 = hdLod7(param_74, param_75).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3407.z = _RESERVED_IDENTIFIER_FIXUP_2501;
            float _RESERVED_IDENTIFIER_FIXUP_2506 = float(_RESERVED_IDENTIFIER_FIXUP_2501 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3407.z = _RESERVED_IDENTIFIER_FIXUP_2506;
            float _RESERVED_IDENTIFIER_FIXUP_2509 = dot(_RESERVED_IDENTIFIER_FIXUP_2495, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3407.w = _RESERVED_IDENTIFIER_FIXUP_2509;
            float _RESERVED_IDENTIFIER_FIXUP_2515 = _RESERVED_IDENTIFIER_FIXUP_2506 + _RESERVED_IDENTIFIER_FIXUP_2509;
            _RESERVED_IDENTIFIER_FIXUP_3407.z = _RESERVED_IDENTIFIER_FIXUP_2515;
            _RESERVED_IDENTIFIER_FIXUP_3407.y = _RESERVED_IDENTIFIER_FIXUP_2515 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3593 = _RESERVED_IDENTIFIER_FIXUP_2495;
            _RESERVED_IDENTIFIER_FIXUP_3591 = _RESERVED_IDENTIFIER_FIXUP_3407;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3321 = _RESERVED_IDENTIFIER_FIXUP_3589;
            _RESERVED_IDENTIFIER_FIXUP_3321.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3321.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2531 = (_RESERVED_IDENTIFIER_FIXUP_3321.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3326;
            _RESERVED_IDENTIFIER_FIXUP_3326.x = _RESERVED_IDENTIFIER_FIXUP_2531.x;
            _RESERVED_IDENTIFIER_FIXUP_3326.y = _RESERVED_IDENTIFIER_FIXUP_2531.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2541 = _RESERVED_IDENTIFIER_FIXUP_3326.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3330;
            _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_2541.x;
            _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_2541.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2551 = _RESERVED_IDENTIFIER_FIXUP_3326.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3334;
            _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_2551.x;
            _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_2551.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2561 = _RESERVED_IDENTIFIER_FIXUP_3326.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3338;
            _RESERVED_IDENTIFIER_FIXUP_3338.x = _RESERVED_IDENTIFIER_FIXUP_2561.x;
            _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2561.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2571 = _RESERVED_IDENTIFIER_FIXUP_3326.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3342;
            _RESERVED_IDENTIFIER_FIXUP_3342.x = _RESERVED_IDENTIFIER_FIXUP_2571.x;
            _RESERVED_IDENTIFIER_FIXUP_3342.y = _RESERVED_IDENTIFIER_FIXUP_2571.y;
            _RESERVED_IDENTIFIER_FIXUP_3326.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3326.xy;
            float param_77 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2585 = hdLod8(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3330.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3334.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3338.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3342.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3330.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2585.y = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3334.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2585.z = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3338.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2585.w = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3342.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2648 = hdLod8(param_84, param_85).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3382 = _RESERVED_IDENTIFIER_FIXUP_3317;
            _RESERVED_IDENTIFIER_FIXUP_3382.z = _RESERVED_IDENTIFIER_FIXUP_2648;
            float _RESERVED_IDENTIFIER_FIXUP_2653 = float(_RESERVED_IDENTIFIER_FIXUP_2648 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3382.z = _RESERVED_IDENTIFIER_FIXUP_2653;
            float _RESERVED_IDENTIFIER_FIXUP_2656 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2585 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3382.w = _RESERVED_IDENTIFIER_FIXUP_2656;
            float _RESERVED_IDENTIFIER_FIXUP_2662 = _RESERVED_IDENTIFIER_FIXUP_2653 + _RESERVED_IDENTIFIER_FIXUP_2656;
            _RESERVED_IDENTIFIER_FIXUP_3382.z = _RESERVED_IDENTIFIER_FIXUP_2662;
            float _RESERVED_IDENTIFIER_FIXUP_2670 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3382.w = _RESERVED_IDENTIFIER_FIXUP_2670;
            float _RESERVED_IDENTIFIER_FIXUP_2676 = clamp((_RESERVED_IDENTIFIER_FIXUP_2670 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3382.w = _RESERVED_IDENTIFIER_FIXUP_2676;
            float _RESERVED_IDENTIFIER_FIXUP_2681 = (_RESERVED_IDENTIFIER_FIXUP_2662 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3382.z = _RESERVED_IDENTIFIER_FIXUP_2681;
            _RESERVED_IDENTIFIER_FIXUP_3382.y = (_RESERVED_IDENTIFIER_FIXUP_2676 * _RESERVED_IDENTIFIER_FIXUP_2681) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3593 = _RESERVED_IDENTIFIER_FIXUP_3321;
            _RESERVED_IDENTIFIER_FIXUP_3591 = _RESERVED_IDENTIFIER_FIXUP_3382;
        }
        _RESERVED_IDENTIFIER_FIXUP_3592 = _RESERVED_IDENTIFIER_FIXUP_3593;
        _RESERVED_IDENTIFIER_FIXUP_3590 = _RESERVED_IDENTIFIER_FIXUP_3591;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2696 = min(_RESERVED_IDENTIFIER_FIXUP_3590.y, _RESERVED_IDENTIFIER_FIXUP_3590.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3541 = _RESERVED_IDENTIFIER_FIXUP_3592;
    _RESERVED_IDENTIFIER_FIXUP_3541.x = _RESERVED_IDENTIFIER_FIXUP_2696;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3600 = vec4((_RESERVED_IDENTIFIER_FIXUP_2696 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2037.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2718 = _RESERVED_IDENTIFIER_FIXUP_3541.xxx * _RESERVED_IDENTIFIER_FIXUP_3600.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2720 = _RESERVED_IDENTIFIER_FIXUP_2718.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3552 = _RESERVED_IDENTIFIER_FIXUP_3600;
    _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_2720;
    _RESERVED_IDENTIFIER_FIXUP_3552.z = _RESERVED_IDENTIFIER_FIXUP_2718.y;
    _RESERVED_IDENTIFIER_FIXUP_3552.w = _RESERVED_IDENTIFIER_FIXUP_2718.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2732 = (_RESERVED_IDENTIFIER_FIXUP_2037.xyz * _RESERVED_IDENTIFIER_FIXUP_3552.xxx) + _RESERVED_IDENTIFIER_FIXUP_3552.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3601 = vec4(_RESERVED_IDENTIFIER_FIXUP_2732.x, _RESERVED_IDENTIFIER_FIXUP_2720, _RESERVED_IDENTIFIER_FIXUP_2718.yz);
    _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_2732.y;
    _RESERVED_IDENTIFIER_FIXUP_3601.z = _RESERVED_IDENTIFIER_FIXUP_2732.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2745 = _RESERVED_IDENTIFIER_FIXUP_3601.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3564 = _RESERVED_IDENTIFIER_FIXUP_3601;
    _RESERVED_IDENTIFIER_FIXUP_3564.x = _RESERVED_IDENTIFIER_FIXUP_2745.x;
    _RESERVED_IDENTIFIER_FIXUP_3564.y = _RESERVED_IDENTIFIER_FIXUP_2745.y;
    _RESERVED_IDENTIFIER_FIXUP_3564.z = _RESERVED_IDENTIFIER_FIXUP_2745.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3564.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_967 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_976;
    if (_RESERVED_IDENTIFIER_FIXUP_967)
    {
        _RESERVED_IDENTIFIER_FIXUP_976 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_976 = _RESERVED_IDENTIFIER_FIXUP_967;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_976)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1013 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3178.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1039 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2798;
    if (_RESERVED_IDENTIFIER_FIXUP_1013 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2798 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1013), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1039);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2798 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1039);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2798;
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 hdB82 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = hdB82.x;
    r2.z = hdB82.y;
    vec3 hdB95 = v0.xyz + v0.xyz;
    r3.x = hdB95.x;
    r3.y = hdB95.y;
    r3.z = hdB95.z;
    vec3 hdB107 = r0.xyz * r3.xyz;
    r4.x = hdB107.x;
    r4.y = hdB107.y;
    r4.z = hdB107.z;
    vec4 hdB116 = r0;
    vec3 hdB125 = mix(r4.xyz, hdB116.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = hdB125.x;
    r0.y = hdB125.y;
    r0.z = hdB125.z;
    vec4 hdB134 = r3;
    vec3 hdB136 = r1.xyz * hdB134.xyz;
    r3.x = hdB136.x;
    r3.y = hdB136.y;
    r3.z = hdB136.z;
    vec4 hdB145 = r1;
    vec3 hdB151 = mix(r3.xyz, hdB145.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = hdB151.x;
    r1.y = hdB151.y;
    r1.z = hdB151.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB199 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB199.x;
        r0.z = hdB199.y;
        vec2 hdB210 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB210.x;
        r1.y = hdB210.y;
        vec2 hdB221 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB221.x;
        r2.y = hdB221.y;
        vec2 hdB232 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB232.x;
        r4.y = hdB232.y;
        vec2 hdB243 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB243.x;
        r5.y = hdB243.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r6.xy;
        float param_4 = r6.w;
        r6 = hdLod5(param_3, param_4);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_5 = r1.xy;
        float param_6 = r1.w;
        r1 = hdLod5(param_5, param_6);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
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
        r6.y = r1.x;
        r6.z = r2.x;
        r6.w = r4.x;
        r1 = r6 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r0.y = r5.x + (-v4.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r1, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v5.x), abs(v5.y));
    if (r0.y < 1.0)
    {
        vec2 hdB374 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB374.x;
        r0.z = hdB374.y;
        vec2 hdB384 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB384.x;
        r1.y = hdB384.y;
        vec2 hdB394 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB394.x;
        r2.y = hdB394.y;
        vec2 hdB404 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB404.x;
        r4.y = hdB404.y;
        vec2 hdB414 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB414.x;
        r5.y = hdB414.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod6(param_13, param_14);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_15 = r1.xy;
        float param_16 = r1.w;
        r1 = hdLod6(param_15, param_16);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod6(param_17, param_18);
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
        r6.y = r1.x;
        r6.z = r2.x;
        r6.w = r4.x;
        r1 = r6 + (-v5.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r0.y = r5.x + (-v5.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r1, vec4(1.0));
        r0.y += r0.z;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v6.x), abs(v6.y));
        if (r0.z < 1.0)
        {
            vec2 hdB529 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB529.x;
            r0.w = hdB529.y;
            vec2 hdB539 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = hdB539.x;
            r1.y = hdB539.y;
            vec2 hdB549 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB549.x;
            r2.y = hdB549.y;
            vec2 hdB559 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB559.x;
            r4.y = hdB559.y;
            vec2 hdB569 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB569.x;
            r5.y = hdB569.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r6.xy;
            float param_24 = r6.w;
            r6 = hdLod7(param_23, param_24);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_25 = r1.xy;
            float param_26 = r1.w;
            r1 = hdLod7(param_25, param_26);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod7(param_27, param_28);
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
            r6.y = r1.x;
            r6.z = r2.x;
            r6.w = r4.x;
            r1 = r6 + (-v6.zzzz);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r0.z = r5.x + (-v6.z);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r1, vec4(1.0));
            r0.z += r0.w;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.x = v4.w;
            r1.y = v5.w;
            vec2 hdB677 = (r1.xy * vec2(0.5)) + vec2(0.5);
            r2.x = hdB677.x;
            r2.y = hdB677.y;
            vec2 hdB687 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB687.x;
            r4.y = hdB687.y;
            vec2 hdB697 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB697.x;
            r5.y = hdB697.y;
            vec2 hdB707 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB707.x;
            r6.y = hdB707.y;
            vec2 hdB717 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB717.x;
            r7.y = hdB717.y;
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_33 = r2.xy;
            float param_34 = r2.w;
            r2 = hdLod8(param_33, param_34);
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
            r2.y = r4.x;
            r2.z = r5.x;
            r2.w = r6.x;
            r2 += (-v6.wwww);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r0.z = r7.x + (-v6.w);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r2, vec4(1.0));
            r0.z += r0.w;
            r0.w = max(abs(r1.x), abs(r1.y));
            r0.w = clamp((r0.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.z = (r0.z * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.w * r0.z) + 1.0;
        }
    }
    r1.x = min(r0.y, r0.x);
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB856 = r3.www * v1.xyz;
    r0.y = hdB856.x;
    r0.z = hdB856.y;
    r0.w = hdB856.z;
    vec4 hdB865 = r0;
    vec3 hdB867 = r1.xxx * hdB865.yzw;
    r0.y = hdB867.x;
    r0.z = hdB867.y;
    r0.w = hdB867.z;
    vec4 hdB876 = r0;
    vec4 hdB879 = r0;
    vec3 hdB881 = (r3.xyz * hdB876.xxx) + hdB879.yzw;
    r0.x = hdB881.x;
    r0.y = hdB881.y;
    r0.z = hdB881.z;
    vec4 hdB888 = r0;
    vec3 hdB895 = hdB888.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB895.x;
    r0.y = hdB895.y;
    r0.z = hdB895.z;
    vec3 hdB910 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB910.x;
    oC0.y = hdB910.y;
    oC0.z = hdB910.z;
    oC0.w = 1.0;
    bool hdB922 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB930;
    if (hdB922)
    {
        hdB930 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB930 = hdB922;
    }
    if (hdB930)
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
    bool _3222 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3232;
    if (_3222)
    {
        _3232 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3232 = _3222;
    }
    if (_3232)
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
        bool _3257 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3272;
        if (!_3257)
        {
            _3272 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3272 = _3257;
        }
        if (_3272)
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
