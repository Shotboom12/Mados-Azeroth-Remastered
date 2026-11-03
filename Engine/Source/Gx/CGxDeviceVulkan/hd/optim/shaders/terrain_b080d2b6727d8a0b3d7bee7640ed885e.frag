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
float _RESERVED_IDENTIFIER_FIXUP_3632;
vec4 _RESERVED_IDENTIFIER_FIXUP_3633;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1122 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1126 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1130 = hdTex2(param_2);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1134 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2851 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2851.x = _RESERVED_IDENTIFIER_FIXUP_1134.x;
    float _RESERVED_IDENTIFIER_FIXUP_1138 = _RESERVED_IDENTIFIER_FIXUP_1134.y;
    _RESERVED_IDENTIFIER_FIXUP_2851.y = _RESERVED_IDENTIFIER_FIXUP_1138;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1140 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3632).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1143 = _RESERVED_IDENTIFIER_FIXUP_1140 + _RESERVED_IDENTIFIER_FIXUP_1140;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2855 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2855.x = _RESERVED_IDENTIFIER_FIXUP_1143.x;
    _RESERVED_IDENTIFIER_FIXUP_2855.y = _RESERVED_IDENTIFIER_FIXUP_1143.y;
    _RESERVED_IDENTIFIER_FIXUP_2855.z = _RESERVED_IDENTIFIER_FIXUP_1143.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_1122.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_1151 * _RESERVED_IDENTIFIER_FIXUP_2855.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2861 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2861.x = _RESERVED_IDENTIFIER_FIXUP_1154.x;
    _RESERVED_IDENTIFIER_FIXUP_2861.y = _RESERVED_IDENTIFIER_FIXUP_1154.y;
    _RESERVED_IDENTIFIER_FIXUP_2861.z = _RESERVED_IDENTIFIER_FIXUP_1154.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1168 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2851.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1169 = mix(_RESERVED_IDENTIFIER_FIXUP_2861.xyz, _RESERVED_IDENTIFIER_FIXUP_1151, _RESERVED_IDENTIFIER_FIXUP_1168);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2867 = _RESERVED_IDENTIFIER_FIXUP_1122;
    _RESERVED_IDENTIFIER_FIXUP_2867.x = _RESERVED_IDENTIFIER_FIXUP_1169.x;
    _RESERVED_IDENTIFIER_FIXUP_2867.y = _RESERVED_IDENTIFIER_FIXUP_1169.y;
    _RESERVED_IDENTIFIER_FIXUP_2867.z = _RESERVED_IDENTIFIER_FIXUP_1169.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1126.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_1177 * _RESERVED_IDENTIFIER_FIXUP_2855.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3658 = vec4(_RESERVED_IDENTIFIER_FIXUP_1180.x, _RESERVED_IDENTIFIER_FIXUP_1138, _RESERVED_IDENTIFIER_FIXUP_1180.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1195 = mix(_RESERVED_IDENTIFIER_FIXUP_3658.xzw, _RESERVED_IDENTIFIER_FIXUP_1177, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3658.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2879 = _RESERVED_IDENTIFIER_FIXUP_1126;
    _RESERVED_IDENTIFIER_FIXUP_2879.x = _RESERVED_IDENTIFIER_FIXUP_1195.x;
    _RESERVED_IDENTIFIER_FIXUP_2879.y = _RESERVED_IDENTIFIER_FIXUP_1195.y;
    _RESERVED_IDENTIFIER_FIXUP_2879.z = _RESERVED_IDENTIFIER_FIXUP_1195.z;
    float _RESERVED_IDENTIFIER_FIXUP_1205 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1130.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2885 = _RESERVED_IDENTIFIER_FIXUP_1130;
    _RESERVED_IDENTIFIER_FIXUP_2885.y = _RESERVED_IDENTIFIER_FIXUP_1205;
    _RESERVED_IDENTIFIER_FIXUP_2885.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1205;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = _RESERVED_IDENTIFIER_FIXUP_2885.xxxx * _RESERVED_IDENTIFIER_FIXUP_2879;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1221 = (_RESERVED_IDENTIFIER_FIXUP_2867 * _RESERVED_IDENTIFIER_FIXUP_2885.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1215;
    float _RESERVED_IDENTIFIER_FIXUP_1228 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2892 = _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_2892.x = _RESERVED_IDENTIFIER_FIXUP_1228;
    float _RESERVED_IDENTIFIER_FIXUP_1234 = clamp((_RESERVED_IDENTIFIER_FIXUP_1228 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2892.x = _RESERVED_IDENTIFIER_FIXUP_1234;
    float _RESERVED_IDENTIFIER_FIXUP_1240 = ((-_RESERVED_IDENTIFIER_FIXUP_1234) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2892.y = _RESERVED_IDENTIFIER_FIXUP_1240;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3635;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3634;
    if (_RESERVED_IDENTIFIER_FIXUP_1240 != (-_RESERVED_IDENTIFIER_FIXUP_1240))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1252 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2904 = _RESERVED_IDENTIFIER_FIXUP_2892;
        _RESERVED_IDENTIFIER_FIXUP_2904.y = _RESERVED_IDENTIFIER_FIXUP_1252.x;
        _RESERVED_IDENTIFIER_FIXUP_2904.z = _RESERVED_IDENTIFIER_FIXUP_1252.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_2904.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2908;
        _RESERVED_IDENTIFIER_FIXUP_2908.x = _RESERVED_IDENTIFIER_FIXUP_1262.x;
        _RESERVED_IDENTIFIER_FIXUP_2908.y = _RESERVED_IDENTIFIER_FIXUP_1262.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_2904.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2912;
        _RESERVED_IDENTIFIER_FIXUP_2912.x = _RESERVED_IDENTIFIER_FIXUP_1272.x;
        _RESERVED_IDENTIFIER_FIXUP_2912.y = _RESERVED_IDENTIFIER_FIXUP_1272.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1282 = _RESERVED_IDENTIFIER_FIXUP_2904.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2916;
        _RESERVED_IDENTIFIER_FIXUP_2916.x = _RESERVED_IDENTIFIER_FIXUP_1282.x;
        _RESERVED_IDENTIFIER_FIXUP_2916.y = _RESERVED_IDENTIFIER_FIXUP_1282.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1292 = _RESERVED_IDENTIFIER_FIXUP_2904.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2920;
        _RESERVED_IDENTIFIER_FIXUP_2920.x = _RESERVED_IDENTIFIER_FIXUP_1292.x;
        _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1292.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1300 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1300.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1300.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1306 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_2908.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2912.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2916.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2920.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2908.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1306.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2912.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1306.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2916.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1306.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1363 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1306 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2920.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1369 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2904.y = _RESERVED_IDENTIFIER_FIXUP_1369;
        float _RESERVED_IDENTIFIER_FIXUP_1374 = float(_RESERVED_IDENTIFIER_FIXUP_1369 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2904.y = _RESERVED_IDENTIFIER_FIXUP_1374;
        float _RESERVED_IDENTIFIER_FIXUP_1377 = dot(_RESERVED_IDENTIFIER_FIXUP_1363, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2904.z = _RESERVED_IDENTIFIER_FIXUP_1377;
        float _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_1374 + _RESERVED_IDENTIFIER_FIXUP_1377;
        _RESERVED_IDENTIFIER_FIXUP_2904.y = _RESERVED_IDENTIFIER_FIXUP_1383;
        float _RESERVED_IDENTIFIER_FIXUP_1388 = (_RESERVED_IDENTIFIER_FIXUP_1383 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2904.y = _RESERVED_IDENTIFIER_FIXUP_1388;
        _RESERVED_IDENTIFIER_FIXUP_2904.x = (_RESERVED_IDENTIFIER_FIXUP_1234 * _RESERVED_IDENTIFIER_FIXUP_1388) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3635 = _RESERVED_IDENTIFIER_FIXUP_1363;
        _RESERVED_IDENTIFIER_FIXUP_3634 = _RESERVED_IDENTIFIER_FIXUP_2904;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2902 = _RESERVED_IDENTIFIER_FIXUP_2892;
        _RESERVED_IDENTIFIER_FIXUP_2902.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3635 = _RESERVED_IDENTIFIER_FIXUP_2885;
        _RESERVED_IDENTIFIER_FIXUP_3634 = _RESERVED_IDENTIFIER_FIXUP_2902;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1406 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2976 = _RESERVED_IDENTIFIER_FIXUP_3634;
    _RESERVED_IDENTIFIER_FIXUP_2976.y = _RESERVED_IDENTIFIER_FIXUP_1406;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3638;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3636;
    if (_RESERVED_IDENTIFIER_FIXUP_1406 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1415 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3137 = _RESERVED_IDENTIFIER_FIXUP_2976;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1415.x;
        _RESERVED_IDENTIFIER_FIXUP_3137.z = _RESERVED_IDENTIFIER_FIXUP_1415.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1425 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3141;
        _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_1425.x;
        _RESERVED_IDENTIFIER_FIXUP_3141.y = _RESERVED_IDENTIFIER_FIXUP_1425.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1435 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3145;
        _RESERVED_IDENTIFIER_FIXUP_3145.x = _RESERVED_IDENTIFIER_FIXUP_1435.x;
        _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1435.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1445 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3149;
        _RESERVED_IDENTIFIER_FIXUP_3149.x = _RESERVED_IDENTIFIER_FIXUP_1445.x;
        _RESERVED_IDENTIFIER_FIXUP_3149.y = _RESERVED_IDENTIFIER_FIXUP_1445.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1455 = _RESERVED_IDENTIFIER_FIXUP_3137.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3153;
        _RESERVED_IDENTIFIER_FIXUP_3153.x = _RESERVED_IDENTIFIER_FIXUP_1455.x;
        _RESERVED_IDENTIFIER_FIXUP_3153.y = _RESERVED_IDENTIFIER_FIXUP_1455.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1463 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1463.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1463.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1469 = hdLod6(param_13, param_14);
        _RESERVED_IDENTIFIER_FIXUP_3141.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3145.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3149.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3153.w = 0.0;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3141.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1469.y = hdLod6(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3145.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1469.z = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3149.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1469.w = hdLod6(param_19, param_20).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1526 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1469 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3153.xy;
        float param_22 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1532 = hdLod6(param_21, param_22).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1532;
        float _RESERVED_IDENTIFIER_FIXUP_1537 = float(_RESERVED_IDENTIFIER_FIXUP_1532 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1537;
        float _RESERVED_IDENTIFIER_FIXUP_1540 = dot(_RESERVED_IDENTIFIER_FIXUP_1526, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3137.z = _RESERVED_IDENTIFIER_FIXUP_1540;
        float _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1537 + _RESERVED_IDENTIFIER_FIXUP_1540;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1546;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1546 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3638 = _RESERVED_IDENTIFIER_FIXUP_1526;
        _RESERVED_IDENTIFIER_FIXUP_3636 = _RESERVED_IDENTIFIER_FIXUP_3137;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1559 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2981 = _RESERVED_IDENTIFIER_FIXUP_2976;
        _RESERVED_IDENTIFIER_FIXUP_2981.z = _RESERVED_IDENTIFIER_FIXUP_1559;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3639;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3637;
        if (_RESERVED_IDENTIFIER_FIXUP_1559 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1568 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3071 = _RESERVED_IDENTIFIER_FIXUP_2981;
            _RESERVED_IDENTIFIER_FIXUP_3071.z = _RESERVED_IDENTIFIER_FIXUP_1568.x;
            _RESERVED_IDENTIFIER_FIXUP_3071.w = _RESERVED_IDENTIFIER_FIXUP_1568.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_3071.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3075;
            _RESERVED_IDENTIFIER_FIXUP_3075.x = _RESERVED_IDENTIFIER_FIXUP_1578.x;
            _RESERVED_IDENTIFIER_FIXUP_3075.y = _RESERVED_IDENTIFIER_FIXUP_1578.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1588 = _RESERVED_IDENTIFIER_FIXUP_3071.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3079;
            _RESERVED_IDENTIFIER_FIXUP_3079.x = _RESERVED_IDENTIFIER_FIXUP_1588.x;
            _RESERVED_IDENTIFIER_FIXUP_3079.y = _RESERVED_IDENTIFIER_FIXUP_1588.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1598 = _RESERVED_IDENTIFIER_FIXUP_3071.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3083;
            _RESERVED_IDENTIFIER_FIXUP_3083.x = _RESERVED_IDENTIFIER_FIXUP_1598.x;
            _RESERVED_IDENTIFIER_FIXUP_3083.y = _RESERVED_IDENTIFIER_FIXUP_1598.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1608 = _RESERVED_IDENTIFIER_FIXUP_3071.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3087;
            _RESERVED_IDENTIFIER_FIXUP_3087.x = _RESERVED_IDENTIFIER_FIXUP_1608.x;
            _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1608.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1616 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1616.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1616.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1622 = hdLod7(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_3075.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3079.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3083.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3087.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3075.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1622.y = hdLod7(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3079.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1622.z = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3083.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1622.w = hdLod7(param_29, param_30).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1679 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1622 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3087.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1685 = hdLod7(param_31, param_32).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3071.z = _RESERVED_IDENTIFIER_FIXUP_1685;
            float _RESERVED_IDENTIFIER_FIXUP_1690 = float(_RESERVED_IDENTIFIER_FIXUP_1685 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3071.z = _RESERVED_IDENTIFIER_FIXUP_1690;
            float _RESERVED_IDENTIFIER_FIXUP_1693 = dot(_RESERVED_IDENTIFIER_FIXUP_1679, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3071.w = _RESERVED_IDENTIFIER_FIXUP_1693;
            float _RESERVED_IDENTIFIER_FIXUP_1699 = _RESERVED_IDENTIFIER_FIXUP_1690 + _RESERVED_IDENTIFIER_FIXUP_1693;
            _RESERVED_IDENTIFIER_FIXUP_3071.z = _RESERVED_IDENTIFIER_FIXUP_1699;
            _RESERVED_IDENTIFIER_FIXUP_3071.y = _RESERVED_IDENTIFIER_FIXUP_1699 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3639 = _RESERVED_IDENTIFIER_FIXUP_1679;
            _RESERVED_IDENTIFIER_FIXUP_3637 = _RESERVED_IDENTIFIER_FIXUP_3071;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2985 = _RESERVED_IDENTIFIER_FIXUP_3635;
            _RESERVED_IDENTIFIER_FIXUP_2985.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2985.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1715 = (_RESERVED_IDENTIFIER_FIXUP_2985.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2990;
            _RESERVED_IDENTIFIER_FIXUP_2990.x = _RESERVED_IDENTIFIER_FIXUP_1715.x;
            _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1715.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1725 = _RESERVED_IDENTIFIER_FIXUP_2990.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2994;
            _RESERVED_IDENTIFIER_FIXUP_2994.x = _RESERVED_IDENTIFIER_FIXUP_1725.x;
            _RESERVED_IDENTIFIER_FIXUP_2994.y = _RESERVED_IDENTIFIER_FIXUP_1725.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1735 = _RESERVED_IDENTIFIER_FIXUP_2990.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2998;
            _RESERVED_IDENTIFIER_FIXUP_2998.x = _RESERVED_IDENTIFIER_FIXUP_1735.x;
            _RESERVED_IDENTIFIER_FIXUP_2998.y = _RESERVED_IDENTIFIER_FIXUP_1735.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1745 = _RESERVED_IDENTIFIER_FIXUP_2990.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3002;
            _RESERVED_IDENTIFIER_FIXUP_3002.x = _RESERVED_IDENTIFIER_FIXUP_1745.x;
            _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1745.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1755 = _RESERVED_IDENTIFIER_FIXUP_2990.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3006;
            _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1755.x;
            _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1755.y;
            _RESERVED_IDENTIFIER_FIXUP_2990.w = 0.0;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2990.xy;
            float param_34 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1769 = hdLod8(param_33, param_34);
            _RESERVED_IDENTIFIER_FIXUP_2994.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2998.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3002.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3006.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_2994.xy;
            float param_36 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1769.y = hdLod8(param_35, param_36).x;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2998.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1769.z = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3002.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1769.w = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3006.xy;
            float param_42 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1832 = hdLod8(param_41, param_42).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3046 = _RESERVED_IDENTIFIER_FIXUP_2981;
            _RESERVED_IDENTIFIER_FIXUP_3046.z = _RESERVED_IDENTIFIER_FIXUP_1832;
            float _RESERVED_IDENTIFIER_FIXUP_1837 = float(_RESERVED_IDENTIFIER_FIXUP_1832 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3046.z = _RESERVED_IDENTIFIER_FIXUP_1837;
            float _RESERVED_IDENTIFIER_FIXUP_1840 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1769 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3046.w = _RESERVED_IDENTIFIER_FIXUP_1840;
            float _RESERVED_IDENTIFIER_FIXUP_1846 = _RESERVED_IDENTIFIER_FIXUP_1837 + _RESERVED_IDENTIFIER_FIXUP_1840;
            _RESERVED_IDENTIFIER_FIXUP_3046.z = _RESERVED_IDENTIFIER_FIXUP_1846;
            float _RESERVED_IDENTIFIER_FIXUP_1854 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3046.w = _RESERVED_IDENTIFIER_FIXUP_1854;
            float _RESERVED_IDENTIFIER_FIXUP_1860 = clamp((_RESERVED_IDENTIFIER_FIXUP_1854 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3046.w = _RESERVED_IDENTIFIER_FIXUP_1860;
            float _RESERVED_IDENTIFIER_FIXUP_1865 = (_RESERVED_IDENTIFIER_FIXUP_1846 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3046.z = _RESERVED_IDENTIFIER_FIXUP_1865;
            _RESERVED_IDENTIFIER_FIXUP_3046.y = (_RESERVED_IDENTIFIER_FIXUP_1860 * _RESERVED_IDENTIFIER_FIXUP_1865) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3639 = _RESERVED_IDENTIFIER_FIXUP_2985;
            _RESERVED_IDENTIFIER_FIXUP_3637 = _RESERVED_IDENTIFIER_FIXUP_3046;
        }
        _RESERVED_IDENTIFIER_FIXUP_3638 = _RESERVED_IDENTIFIER_FIXUP_3639;
        _RESERVED_IDENTIFIER_FIXUP_3636 = _RESERVED_IDENTIFIER_FIXUP_3637;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1880 = min(_RESERVED_IDENTIFIER_FIXUP_3636.y, _RESERVED_IDENTIFIER_FIXUP_3636.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3205 = _RESERVED_IDENTIFIER_FIXUP_3638;
    _RESERVED_IDENTIFIER_FIXUP_3205.x = _RESERVED_IDENTIFIER_FIXUP_1880;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3659 = vec4((_RESERVED_IDENTIFIER_FIXUP_1880 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1902 = _RESERVED_IDENTIFIER_FIXUP_3205.xxx * _RESERVED_IDENTIFIER_FIXUP_3659.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3216 = _RESERVED_IDENTIFIER_FIXUP_3659;
    _RESERVED_IDENTIFIER_FIXUP_3216.y = _RESERVED_IDENTIFIER_FIXUP_1902.x;
    _RESERVED_IDENTIFIER_FIXUP_3216.z = _RESERVED_IDENTIFIER_FIXUP_1902.y;
    _RESERVED_IDENTIFIER_FIXUP_3216.w = _RESERVED_IDENTIFIER_FIXUP_1902.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1916 = (_RESERVED_IDENTIFIER_FIXUP_1221.xyz * _RESERVED_IDENTIFIER_FIXUP_3216.xxx) + _RESERVED_IDENTIFIER_FIXUP_3216.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3222 = _RESERVED_IDENTIFIER_FIXUP_1221;
    _RESERVED_IDENTIFIER_FIXUP_3222.x = _RESERVED_IDENTIFIER_FIXUP_1916.x;
    _RESERVED_IDENTIFIER_FIXUP_3222.y = _RESERVED_IDENTIFIER_FIXUP_1916.y;
    _RESERVED_IDENTIFIER_FIXUP_3222.z = _RESERVED_IDENTIFIER_FIXUP_1916.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1929 = _RESERVED_IDENTIFIER_FIXUP_3222.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3228 = _RESERVED_IDENTIFIER_FIXUP_3222;
    _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_1929.x;
    _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_1929.y;
    _RESERVED_IDENTIFIER_FIXUP_3228.z = _RESERVED_IDENTIFIER_FIXUP_1929.z;
    vec2 param_43 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1984 = hdTex0(param_43);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1988 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1992 = hdTex2(param_45);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2005 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3246 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_2005.x;
    _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_2005.y;
    _RESERVED_IDENTIFIER_FIXUP_3246.z = _RESERVED_IDENTIFIER_FIXUP_2005.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2013 = _RESERVED_IDENTIFIER_FIXUP_1984.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2016 = _RESERVED_IDENTIFIER_FIXUP_2013 * _RESERVED_IDENTIFIER_FIXUP_3246.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3252 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_2016.x;
    _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_2016.y;
    _RESERVED_IDENTIFIER_FIXUP_3252.z = _RESERVED_IDENTIFIER_FIXUP_2016.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2031 = mix(_RESERVED_IDENTIFIER_FIXUP_3252.xyz, _RESERVED_IDENTIFIER_FIXUP_2013, _RESERVED_IDENTIFIER_FIXUP_1168);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3258 = _RESERVED_IDENTIFIER_FIXUP_1984;
    _RESERVED_IDENTIFIER_FIXUP_3258.x = _RESERVED_IDENTIFIER_FIXUP_2031.x;
    _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_2031.y;
    _RESERVED_IDENTIFIER_FIXUP_3258.z = _RESERVED_IDENTIFIER_FIXUP_2031.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2039 = _RESERVED_IDENTIFIER_FIXUP_1988.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2042 = _RESERVED_IDENTIFIER_FIXUP_2039 * _RESERVED_IDENTIFIER_FIXUP_3246.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3661 = vec4(_RESERVED_IDENTIFIER_FIXUP_2042.x, _RESERVED_IDENTIFIER_FIXUP_1138, _RESERVED_IDENTIFIER_FIXUP_2042.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2057 = mix(_RESERVED_IDENTIFIER_FIXUP_3661.xzw, _RESERVED_IDENTIFIER_FIXUP_2039, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3661.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3270 = _RESERVED_IDENTIFIER_FIXUP_1988;
    _RESERVED_IDENTIFIER_FIXUP_3270.x = _RESERVED_IDENTIFIER_FIXUP_2057.x;
    _RESERVED_IDENTIFIER_FIXUP_3270.y = _RESERVED_IDENTIFIER_FIXUP_2057.y;
    _RESERVED_IDENTIFIER_FIXUP_3270.z = _RESERVED_IDENTIFIER_FIXUP_2057.z;
    float _RESERVED_IDENTIFIER_FIXUP_2067 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1992.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3276 = _RESERVED_IDENTIFIER_FIXUP_1992;
    _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_2067;
    _RESERVED_IDENTIFIER_FIXUP_3276.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2067;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2077 = _RESERVED_IDENTIFIER_FIXUP_3276.xxxx * _RESERVED_IDENTIFIER_FIXUP_3270;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2083 = (_RESERVED_IDENTIFIER_FIXUP_3258 * _RESERVED_IDENTIFIER_FIXUP_3276.yyyy) + _RESERVED_IDENTIFIER_FIXUP_2077;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3283 = _RESERVED_IDENTIFIER_FIXUP_2077;
    _RESERVED_IDENTIFIER_FIXUP_3283.x = _RESERVED_IDENTIFIER_FIXUP_1228;
    float _RESERVED_IDENTIFIER_FIXUP_2096 = clamp((_RESERVED_IDENTIFIER_FIXUP_1228 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3283.x = _RESERVED_IDENTIFIER_FIXUP_2096;
    float _RESERVED_IDENTIFIER_FIXUP_2102 = ((-_RESERVED_IDENTIFIER_FIXUP_2096) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_2102;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3647;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3646;
    if (_RESERVED_IDENTIFIER_FIXUP_2102 != (-_RESERVED_IDENTIFIER_FIXUP_2102))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2114 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3295 = _RESERVED_IDENTIFIER_FIXUP_3283;
        _RESERVED_IDENTIFIER_FIXUP_3295.y = _RESERVED_IDENTIFIER_FIXUP_2114.x;
        _RESERVED_IDENTIFIER_FIXUP_3295.z = _RESERVED_IDENTIFIER_FIXUP_2114.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2124 = _RESERVED_IDENTIFIER_FIXUP_3295.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3299;
        _RESERVED_IDENTIFIER_FIXUP_3299.x = _RESERVED_IDENTIFIER_FIXUP_2124.x;
        _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_2124.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2134 = _RESERVED_IDENTIFIER_FIXUP_3295.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3303;
        _RESERVED_IDENTIFIER_FIXUP_3303.x = _RESERVED_IDENTIFIER_FIXUP_2134.x;
        _RESERVED_IDENTIFIER_FIXUP_3303.y = _RESERVED_IDENTIFIER_FIXUP_2134.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2144 = _RESERVED_IDENTIFIER_FIXUP_3295.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3307;
        _RESERVED_IDENTIFIER_FIXUP_3307.x = _RESERVED_IDENTIFIER_FIXUP_2144.x;
        _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_2144.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2154 = _RESERVED_IDENTIFIER_FIXUP_3295.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3311;
        _RESERVED_IDENTIFIER_FIXUP_3311.x = _RESERVED_IDENTIFIER_FIXUP_2154.x;
        _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_2154.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2162 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2162.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_2162.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2168 = hdLod5(param_46, param_47);
        _RESERVED_IDENTIFIER_FIXUP_3299.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3303.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3307.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3311.w = 0.0;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3299.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2168.y = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3303.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2168.z = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3307.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2168.w = hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2225 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2168 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3311.xy;
        float param_55 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2231 = hdLod5(param_54, param_55).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3295.y = _RESERVED_IDENTIFIER_FIXUP_2231;
        float _RESERVED_IDENTIFIER_FIXUP_2236 = float(_RESERVED_IDENTIFIER_FIXUP_2231 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3295.y = _RESERVED_IDENTIFIER_FIXUP_2236;
        float _RESERVED_IDENTIFIER_FIXUP_2239 = dot(_RESERVED_IDENTIFIER_FIXUP_2225, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3295.z = _RESERVED_IDENTIFIER_FIXUP_2239;
        float _RESERVED_IDENTIFIER_FIXUP_2245 = _RESERVED_IDENTIFIER_FIXUP_2236 + _RESERVED_IDENTIFIER_FIXUP_2239;
        _RESERVED_IDENTIFIER_FIXUP_3295.y = _RESERVED_IDENTIFIER_FIXUP_2245;
        float _RESERVED_IDENTIFIER_FIXUP_2250 = (_RESERVED_IDENTIFIER_FIXUP_2245 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3295.y = _RESERVED_IDENTIFIER_FIXUP_2250;
        _RESERVED_IDENTIFIER_FIXUP_3295.x = (_RESERVED_IDENTIFIER_FIXUP_2096 * _RESERVED_IDENTIFIER_FIXUP_2250) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3647 = _RESERVED_IDENTIFIER_FIXUP_2225;
        _RESERVED_IDENTIFIER_FIXUP_3646 = _RESERVED_IDENTIFIER_FIXUP_3295;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3293 = _RESERVED_IDENTIFIER_FIXUP_3283;
        _RESERVED_IDENTIFIER_FIXUP_3293.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3647 = _RESERVED_IDENTIFIER_FIXUP_3276;
        _RESERVED_IDENTIFIER_FIXUP_3646 = _RESERVED_IDENTIFIER_FIXUP_3293;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3367 = _RESERVED_IDENTIFIER_FIXUP_3646;
    _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_1406;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3650;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3648;
    if (_RESERVED_IDENTIFIER_FIXUP_1406 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2277 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3528 = _RESERVED_IDENTIFIER_FIXUP_3367;
        _RESERVED_IDENTIFIER_FIXUP_3528.y = _RESERVED_IDENTIFIER_FIXUP_2277.x;
        _RESERVED_IDENTIFIER_FIXUP_3528.z = _RESERVED_IDENTIFIER_FIXUP_2277.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2287 = _RESERVED_IDENTIFIER_FIXUP_3528.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3532;
        _RESERVED_IDENTIFIER_FIXUP_3532.x = _RESERVED_IDENTIFIER_FIXUP_2287.x;
        _RESERVED_IDENTIFIER_FIXUP_3532.y = _RESERVED_IDENTIFIER_FIXUP_2287.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2297 = _RESERVED_IDENTIFIER_FIXUP_3528.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3536;
        _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2297.x;
        _RESERVED_IDENTIFIER_FIXUP_3536.y = _RESERVED_IDENTIFIER_FIXUP_2297.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2307 = _RESERVED_IDENTIFIER_FIXUP_3528.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3540;
        _RESERVED_IDENTIFIER_FIXUP_3540.x = _RESERVED_IDENTIFIER_FIXUP_2307.x;
        _RESERVED_IDENTIFIER_FIXUP_3540.y = _RESERVED_IDENTIFIER_FIXUP_2307.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2317 = _RESERVED_IDENTIFIER_FIXUP_3528.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3544;
        _RESERVED_IDENTIFIER_FIXUP_3544.x = _RESERVED_IDENTIFIER_FIXUP_2317.x;
        _RESERVED_IDENTIFIER_FIXUP_3544.y = _RESERVED_IDENTIFIER_FIXUP_2317.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2325 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2325.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2325.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2331 = hdLod6(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3532.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3536.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3540.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3544.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3532.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2331.y = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3536.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2331.z = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3540.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2331.w = hdLod6(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2388 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2331 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3544.xy;
        float param_65 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2394 = hdLod6(param_64, param_65).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3528.y = _RESERVED_IDENTIFIER_FIXUP_2394;
        float _RESERVED_IDENTIFIER_FIXUP_2399 = float(_RESERVED_IDENTIFIER_FIXUP_2394 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3528.y = _RESERVED_IDENTIFIER_FIXUP_2399;
        float _RESERVED_IDENTIFIER_FIXUP_2402 = dot(_RESERVED_IDENTIFIER_FIXUP_2388, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3528.z = _RESERVED_IDENTIFIER_FIXUP_2402;
        float _RESERVED_IDENTIFIER_FIXUP_2408 = _RESERVED_IDENTIFIER_FIXUP_2399 + _RESERVED_IDENTIFIER_FIXUP_2402;
        _RESERVED_IDENTIFIER_FIXUP_3528.y = _RESERVED_IDENTIFIER_FIXUP_2408;
        _RESERVED_IDENTIFIER_FIXUP_3528.y = _RESERVED_IDENTIFIER_FIXUP_2408 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3650 = _RESERVED_IDENTIFIER_FIXUP_2388;
        _RESERVED_IDENTIFIER_FIXUP_3648 = _RESERVED_IDENTIFIER_FIXUP_3528;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2421 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_3367;
        _RESERVED_IDENTIFIER_FIXUP_3372.z = _RESERVED_IDENTIFIER_FIXUP_2421;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3651;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3649;
        if (_RESERVED_IDENTIFIER_FIXUP_2421 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2430 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3462 = _RESERVED_IDENTIFIER_FIXUP_3372;
            _RESERVED_IDENTIFIER_FIXUP_3462.z = _RESERVED_IDENTIFIER_FIXUP_2430.x;
            _RESERVED_IDENTIFIER_FIXUP_3462.w = _RESERVED_IDENTIFIER_FIXUP_2430.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2440 = _RESERVED_IDENTIFIER_FIXUP_3462.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3466;
            _RESERVED_IDENTIFIER_FIXUP_3466.x = _RESERVED_IDENTIFIER_FIXUP_2440.x;
            _RESERVED_IDENTIFIER_FIXUP_3466.y = _RESERVED_IDENTIFIER_FIXUP_2440.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2450 = _RESERVED_IDENTIFIER_FIXUP_3462.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3470;
            _RESERVED_IDENTIFIER_FIXUP_3470.x = _RESERVED_IDENTIFIER_FIXUP_2450.x;
            _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_2450.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2460 = _RESERVED_IDENTIFIER_FIXUP_3462.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3474;
            _RESERVED_IDENTIFIER_FIXUP_3474.x = _RESERVED_IDENTIFIER_FIXUP_2460.x;
            _RESERVED_IDENTIFIER_FIXUP_3474.y = _RESERVED_IDENTIFIER_FIXUP_2460.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2470 = _RESERVED_IDENTIFIER_FIXUP_3462.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3478;
            _RESERVED_IDENTIFIER_FIXUP_3478.x = _RESERVED_IDENTIFIER_FIXUP_2470.x;
            _RESERVED_IDENTIFIER_FIXUP_3478.y = _RESERVED_IDENTIFIER_FIXUP_2470.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2478 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2478.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2478.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2484 = hdLod7(param_66, param_67);
            _RESERVED_IDENTIFIER_FIXUP_3466.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3470.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3474.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3478.w = 0.0;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3466.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2484.y = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3470.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2484.z = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3474.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2484.w = hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2541 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2484 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3478.xy;
            float param_75 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2547 = hdLod7(param_74, param_75).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3462.z = _RESERVED_IDENTIFIER_FIXUP_2547;
            float _RESERVED_IDENTIFIER_FIXUP_2552 = float(_RESERVED_IDENTIFIER_FIXUP_2547 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3462.z = _RESERVED_IDENTIFIER_FIXUP_2552;
            float _RESERVED_IDENTIFIER_FIXUP_2555 = dot(_RESERVED_IDENTIFIER_FIXUP_2541, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3462.w = _RESERVED_IDENTIFIER_FIXUP_2555;
            float _RESERVED_IDENTIFIER_FIXUP_2561 = _RESERVED_IDENTIFIER_FIXUP_2552 + _RESERVED_IDENTIFIER_FIXUP_2555;
            _RESERVED_IDENTIFIER_FIXUP_3462.z = _RESERVED_IDENTIFIER_FIXUP_2561;
            _RESERVED_IDENTIFIER_FIXUP_3462.y = _RESERVED_IDENTIFIER_FIXUP_2561 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3651 = _RESERVED_IDENTIFIER_FIXUP_2541;
            _RESERVED_IDENTIFIER_FIXUP_3649 = _RESERVED_IDENTIFIER_FIXUP_3462;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3376 = _RESERVED_IDENTIFIER_FIXUP_3647;
            _RESERVED_IDENTIFIER_FIXUP_3376.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3376.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2577 = (_RESERVED_IDENTIFIER_FIXUP_3376.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3381;
            _RESERVED_IDENTIFIER_FIXUP_3381.x = _RESERVED_IDENTIFIER_FIXUP_2577.x;
            _RESERVED_IDENTIFIER_FIXUP_3381.y = _RESERVED_IDENTIFIER_FIXUP_2577.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2587 = _RESERVED_IDENTIFIER_FIXUP_3381.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3385;
            _RESERVED_IDENTIFIER_FIXUP_3385.x = _RESERVED_IDENTIFIER_FIXUP_2587.x;
            _RESERVED_IDENTIFIER_FIXUP_3385.y = _RESERVED_IDENTIFIER_FIXUP_2587.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2597 = _RESERVED_IDENTIFIER_FIXUP_3381.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3389;
            _RESERVED_IDENTIFIER_FIXUP_3389.x = _RESERVED_IDENTIFIER_FIXUP_2597.x;
            _RESERVED_IDENTIFIER_FIXUP_3389.y = _RESERVED_IDENTIFIER_FIXUP_2597.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2607 = _RESERVED_IDENTIFIER_FIXUP_3381.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3393;
            _RESERVED_IDENTIFIER_FIXUP_3393.x = _RESERVED_IDENTIFIER_FIXUP_2607.x;
            _RESERVED_IDENTIFIER_FIXUP_3393.y = _RESERVED_IDENTIFIER_FIXUP_2607.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2617 = _RESERVED_IDENTIFIER_FIXUP_3381.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3397;
            _RESERVED_IDENTIFIER_FIXUP_3397.x = _RESERVED_IDENTIFIER_FIXUP_2617.x;
            _RESERVED_IDENTIFIER_FIXUP_3397.y = _RESERVED_IDENTIFIER_FIXUP_2617.y;
            _RESERVED_IDENTIFIER_FIXUP_3381.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3381.xy;
            float param_77 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2631 = hdLod8(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3385.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3389.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3393.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3397.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3385.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2631.y = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3389.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2631.z = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3393.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2631.w = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3397.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2694 = hdLod8(param_84, param_85).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3437 = _RESERVED_IDENTIFIER_FIXUP_3372;
            _RESERVED_IDENTIFIER_FIXUP_3437.z = _RESERVED_IDENTIFIER_FIXUP_2694;
            float _RESERVED_IDENTIFIER_FIXUP_2699 = float(_RESERVED_IDENTIFIER_FIXUP_2694 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3437.z = _RESERVED_IDENTIFIER_FIXUP_2699;
            float _RESERVED_IDENTIFIER_FIXUP_2702 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2631 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3437.w = _RESERVED_IDENTIFIER_FIXUP_2702;
            float _RESERVED_IDENTIFIER_FIXUP_2708 = _RESERVED_IDENTIFIER_FIXUP_2699 + _RESERVED_IDENTIFIER_FIXUP_2702;
            _RESERVED_IDENTIFIER_FIXUP_3437.z = _RESERVED_IDENTIFIER_FIXUP_2708;
            float _RESERVED_IDENTIFIER_FIXUP_2716 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3437.w = _RESERVED_IDENTIFIER_FIXUP_2716;
            float _RESERVED_IDENTIFIER_FIXUP_2722 = clamp((_RESERVED_IDENTIFIER_FIXUP_2716 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3437.w = _RESERVED_IDENTIFIER_FIXUP_2722;
            float _RESERVED_IDENTIFIER_FIXUP_2727 = (_RESERVED_IDENTIFIER_FIXUP_2708 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3437.z = _RESERVED_IDENTIFIER_FIXUP_2727;
            _RESERVED_IDENTIFIER_FIXUP_3437.y = (_RESERVED_IDENTIFIER_FIXUP_2722 * _RESERVED_IDENTIFIER_FIXUP_2727) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3651 = _RESERVED_IDENTIFIER_FIXUP_3376;
            _RESERVED_IDENTIFIER_FIXUP_3649 = _RESERVED_IDENTIFIER_FIXUP_3437;
        }
        _RESERVED_IDENTIFIER_FIXUP_3650 = _RESERVED_IDENTIFIER_FIXUP_3651;
        _RESERVED_IDENTIFIER_FIXUP_3648 = _RESERVED_IDENTIFIER_FIXUP_3649;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2742 = min(_RESERVED_IDENTIFIER_FIXUP_3648.y, _RESERVED_IDENTIFIER_FIXUP_3648.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3596 = _RESERVED_IDENTIFIER_FIXUP_3650;
    _RESERVED_IDENTIFIER_FIXUP_3596.x = _RESERVED_IDENTIFIER_FIXUP_2742;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3662 = vec4((_RESERVED_IDENTIFIER_FIXUP_2742 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2083.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2764 = _RESERVED_IDENTIFIER_FIXUP_3596.xxx * _RESERVED_IDENTIFIER_FIXUP_3662.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3607 = _RESERVED_IDENTIFIER_FIXUP_3662;
    _RESERVED_IDENTIFIER_FIXUP_3607.y = _RESERVED_IDENTIFIER_FIXUP_2764.x;
    _RESERVED_IDENTIFIER_FIXUP_3607.z = _RESERVED_IDENTIFIER_FIXUP_2764.y;
    _RESERVED_IDENTIFIER_FIXUP_3607.w = _RESERVED_IDENTIFIER_FIXUP_2764.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2778 = (_RESERVED_IDENTIFIER_FIXUP_2083.xyz * _RESERVED_IDENTIFIER_FIXUP_3607.xxx) + _RESERVED_IDENTIFIER_FIXUP_3607.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3613 = _RESERVED_IDENTIFIER_FIXUP_2083;
    _RESERVED_IDENTIFIER_FIXUP_3613.x = _RESERVED_IDENTIFIER_FIXUP_2778.x;
    _RESERVED_IDENTIFIER_FIXUP_3613.y = _RESERVED_IDENTIFIER_FIXUP_2778.y;
    _RESERVED_IDENTIFIER_FIXUP_3613.z = _RESERVED_IDENTIFIER_FIXUP_2778.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2791 = _RESERVED_IDENTIFIER_FIXUP_3613.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3619 = _RESERVED_IDENTIFIER_FIXUP_3613;
    _RESERVED_IDENTIFIER_FIXUP_3619.x = _RESERVED_IDENTIFIER_FIXUP_2791.x;
    _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_2791.y;
    _RESERVED_IDENTIFIER_FIXUP_3619.z = _RESERVED_IDENTIFIER_FIXUP_2791.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3619.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_983 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_992;
    if (_RESERVED_IDENTIFIER_FIXUP_983)
    {
        _RESERVED_IDENTIFIER_FIXUP_992 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_992 = _RESERVED_IDENTIFIER_FIXUP_983;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_992)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1029 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3228.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1055 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2844;
    if (_RESERVED_IDENTIFIER_FIXUP_1029 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2844 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1029), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1055);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2844 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1055);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2844;
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
    r3.x = hdB82.x;
    r3.y = hdB82.y;
    vec3 hdB95 = v0.xyz + v0.xyz;
    r4.x = hdB95.x;
    r4.y = hdB95.y;
    r4.z = hdB95.z;
    vec3 hdB107 = r0.xyz * r4.xyz;
    r5.x = hdB107.x;
    r5.y = hdB107.y;
    r5.z = hdB107.z;
    vec4 hdB116 = r0;
    vec3 hdB125 = mix(r5.xyz, hdB116.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB125.x;
    r0.y = hdB125.y;
    r0.z = hdB125.z;
    vec3 hdB136 = r1.xyz * r4.xyz;
    r3.x = hdB136.x;
    r3.z = hdB136.y;
    r3.w = hdB136.z;
    vec4 hdB146 = r1;
    vec3 hdB152 = mix(r3.xzw, hdB146.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = hdB152.x;
    r1.y = hdB152.y;
    r1.z = hdB152.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB216 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB216.x;
        r1.z = hdB216.y;
        vec2 hdB227 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB227.x;
        r2.y = hdB227.y;
        vec2 hdB238 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB238.x;
        r3.y = hdB238.y;
        vec2 hdB249 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB249.x;
        r4.y = hdB249.y;
        vec2 hdB260 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB260.x;
        r5.y = hdB260.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
        vec2 hdB390 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB390.x;
        r1.z = hdB390.y;
        vec2 hdB400 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB400.x;
        r2.y = hdB400.y;
        vec2 hdB410 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB410.x;
        r3.y = hdB410.y;
        vec2 hdB420 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB420.x;
        r4.y = hdB420.y;
        vec2 hdB430 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB430.x;
        r5.y = hdB430.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
            vec2 hdB545 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB545.x;
            r1.w = hdB545.y;
            vec2 hdB555 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB555.x;
            r2.y = hdB555.y;
            vec2 hdB565 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB565.x;
            r3.y = hdB565.y;
            vec2 hdB575 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB575.x;
            r4.y = hdB575.y;
            vec2 hdB585 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB585.x;
            r5.y = hdB585.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
            vec2 hdB693 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB693.x;
            r3.y = hdB693.y;
            vec2 hdB703 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB703.x;
            r4.y = hdB703.y;
            vec2 hdB713 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB713.x;
            r5.y = hdB713.y;
            vec2 hdB723 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB723.x;
            r6.y = hdB723.y;
            vec2 hdB733 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB733.x;
            r7.y = hdB733.y;
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
    vec3 hdB872 = r0.www * v1.xyz;
    r1.y = hdB872.x;
    r1.z = hdB872.y;
    r1.w = hdB872.z;
    vec4 hdB881 = r1;
    vec3 hdB883 = r2.xxx * hdB881.yzw;
    r1.y = hdB883.x;
    r1.z = hdB883.y;
    r1.w = hdB883.z;
    vec4 hdB890 = r0;
    vec3 hdB897 = (hdB890.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB897.x;
    r0.y = hdB897.y;
    r0.z = hdB897.z;
    vec4 hdB904 = r0;
    vec3 hdB911 = hdB904.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB911.x;
    r0.y = hdB911.y;
    r0.z = hdB911.z;
    vec3 hdB926 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB926.x;
    oC0.y = hdB926.y;
    oC0.z = hdB926.z;
    oC0.w = 1.0;
    bool hdB938 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB946;
    if (hdB938)
    {
        hdB946 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB946 = hdB938;
    }
    if (hdB946)
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
    bool _3253 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3263;
    if (_3253)
    {
        _3263 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3263 = _3253;
    }
    if (_3263)
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
        bool _3288 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3303;
        if (!_3288)
        {
            _3303 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3303 = _3288;
        }
        if (_3303)
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
