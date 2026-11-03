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
float _RESERVED_IDENTIFIER_FIXUP_3580;
vec4 _RESERVED_IDENTIFIER_FIXUP_3581;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1109 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1113 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1117 = hdTex2(param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1121 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_1121.x;
    _RESERVED_IDENTIFIER_FIXUP_1117.y = _RESERVED_IDENTIFIER_FIXUP_1123;
    float _RESERVED_IDENTIFIER_FIXUP_1125 = _RESERVED_IDENTIFIER_FIXUP_1121.y;
    _RESERVED_IDENTIFIER_FIXUP_1117.z = _RESERVED_IDENTIFIER_FIXUP_1125;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1127 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3580).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1130 = _RESERVED_IDENTIFIER_FIXUP_1127 + _RESERVED_IDENTIFIER_FIXUP_1127;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2813;
    _RESERVED_IDENTIFIER_FIXUP_2813.x = _RESERVED_IDENTIFIER_FIXUP_1130.x;
    _RESERVED_IDENTIFIER_FIXUP_2813.y = _RESERVED_IDENTIFIER_FIXUP_1130.y;
    _RESERVED_IDENTIFIER_FIXUP_2813.z = _RESERVED_IDENTIFIER_FIXUP_1130.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1138 = _RESERVED_IDENTIFIER_FIXUP_1109.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1141 = _RESERVED_IDENTIFIER_FIXUP_1138 * _RESERVED_IDENTIFIER_FIXUP_2813.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2819 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2819.x = _RESERVED_IDENTIFIER_FIXUP_1141.x;
    _RESERVED_IDENTIFIER_FIXUP_2819.y = _RESERVED_IDENTIFIER_FIXUP_1141.y;
    _RESERVED_IDENTIFIER_FIXUP_2819.z = _RESERVED_IDENTIFIER_FIXUP_1141.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1156 = mix(_RESERVED_IDENTIFIER_FIXUP_2819.xyz, _RESERVED_IDENTIFIER_FIXUP_1138, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1117.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2825 = _RESERVED_IDENTIFIER_FIXUP_1109;
    _RESERVED_IDENTIFIER_FIXUP_2825.x = _RESERVED_IDENTIFIER_FIXUP_1156.x;
    _RESERVED_IDENTIFIER_FIXUP_2825.y = _RESERVED_IDENTIFIER_FIXUP_1156.y;
    _RESERVED_IDENTIFIER_FIXUP_2825.z = _RESERVED_IDENTIFIER_FIXUP_1156.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1164 = _RESERVED_IDENTIFIER_FIXUP_1113.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1167 = _RESERVED_IDENTIFIER_FIXUP_1164 * _RESERVED_IDENTIFIER_FIXUP_2813.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2831;
    _RESERVED_IDENTIFIER_FIXUP_2831.x = _RESERVED_IDENTIFIER_FIXUP_1167.x;
    _RESERVED_IDENTIFIER_FIXUP_2831.y = _RESERVED_IDENTIFIER_FIXUP_1167.y;
    _RESERVED_IDENTIFIER_FIXUP_2831.z = _RESERVED_IDENTIFIER_FIXUP_1167.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1182 = mix(_RESERVED_IDENTIFIER_FIXUP_2831.xyz, _RESERVED_IDENTIFIER_FIXUP_1164, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1117.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2837 = _RESERVED_IDENTIFIER_FIXUP_1113;
    _RESERVED_IDENTIFIER_FIXUP_2837.x = _RESERVED_IDENTIFIER_FIXUP_1182.x;
    _RESERVED_IDENTIFIER_FIXUP_2837.y = _RESERVED_IDENTIFIER_FIXUP_1182.y;
    _RESERVED_IDENTIFIER_FIXUP_2837.z = _RESERVED_IDENTIFIER_FIXUP_1182.z;
    float _RESERVED_IDENTIFIER_FIXUP_1200 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2845 = _RESERVED_IDENTIFIER_FIXUP_2825;
    _RESERVED_IDENTIFIER_FIXUP_2845.x = _RESERVED_IDENTIFIER_FIXUP_1200;
    float _RESERVED_IDENTIFIER_FIXUP_1206 = clamp((_RESERVED_IDENTIFIER_FIXUP_1200 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2845.x = _RESERVED_IDENTIFIER_FIXUP_1206;
    float _RESERVED_IDENTIFIER_FIXUP_1212 = ((-_RESERVED_IDENTIFIER_FIXUP_1206) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2845.y = _RESERVED_IDENTIFIER_FIXUP_1212;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3583;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3582;
    if (_RESERVED_IDENTIFIER_FIXUP_1212 != (-_RESERVED_IDENTIFIER_FIXUP_1212))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1224 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2857 = _RESERVED_IDENTIFIER_FIXUP_2845;
        _RESERVED_IDENTIFIER_FIXUP_2857.y = _RESERVED_IDENTIFIER_FIXUP_1224.x;
        _RESERVED_IDENTIFIER_FIXUP_2857.z = _RESERVED_IDENTIFIER_FIXUP_1224.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1234 = _RESERVED_IDENTIFIER_FIXUP_2857.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2861;
        _RESERVED_IDENTIFIER_FIXUP_2861.x = _RESERVED_IDENTIFIER_FIXUP_1234.x;
        _RESERVED_IDENTIFIER_FIXUP_2861.y = _RESERVED_IDENTIFIER_FIXUP_1234.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1244 = _RESERVED_IDENTIFIER_FIXUP_2857.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2865;
        _RESERVED_IDENTIFIER_FIXUP_2865.x = _RESERVED_IDENTIFIER_FIXUP_1244.x;
        _RESERVED_IDENTIFIER_FIXUP_2865.y = _RESERVED_IDENTIFIER_FIXUP_1244.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1254 = _RESERVED_IDENTIFIER_FIXUP_2857.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2869;
        _RESERVED_IDENTIFIER_FIXUP_2869.x = _RESERVED_IDENTIFIER_FIXUP_1254.x;
        _RESERVED_IDENTIFIER_FIXUP_2869.y = _RESERVED_IDENTIFIER_FIXUP_1254.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_2857.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2873;
        _RESERVED_IDENTIFIER_FIXUP_2873.x = _RESERVED_IDENTIFIER_FIXUP_1264.x;
        _RESERVED_IDENTIFIER_FIXUP_2873.y = _RESERVED_IDENTIFIER_FIXUP_1264.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1272 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1272.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1272.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1278 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_2861.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2865.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2869.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2873.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_2861.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1278.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2865.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1278.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2869.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1278.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1335 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1278 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2873.xy;
        float param_11 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1341 = hdLod5(param_10, param_11).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2857.y = _RESERVED_IDENTIFIER_FIXUP_1341;
        float _RESERVED_IDENTIFIER_FIXUP_1346 = float(_RESERVED_IDENTIFIER_FIXUP_1341 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2857.y = _RESERVED_IDENTIFIER_FIXUP_1346;
        float _RESERVED_IDENTIFIER_FIXUP_1349 = dot(_RESERVED_IDENTIFIER_FIXUP_1335, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2857.z = _RESERVED_IDENTIFIER_FIXUP_1349;
        float _RESERVED_IDENTIFIER_FIXUP_1355 = _RESERVED_IDENTIFIER_FIXUP_1346 + _RESERVED_IDENTIFIER_FIXUP_1349;
        _RESERVED_IDENTIFIER_FIXUP_2857.y = _RESERVED_IDENTIFIER_FIXUP_1355;
        float _RESERVED_IDENTIFIER_FIXUP_1360 = (_RESERVED_IDENTIFIER_FIXUP_1355 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2857.y = _RESERVED_IDENTIFIER_FIXUP_1360;
        _RESERVED_IDENTIFIER_FIXUP_2857.x = (_RESERVED_IDENTIFIER_FIXUP_1206 * _RESERVED_IDENTIFIER_FIXUP_1360) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3583 = _RESERVED_IDENTIFIER_FIXUP_1335;
        _RESERVED_IDENTIFIER_FIXUP_3582 = _RESERVED_IDENTIFIER_FIXUP_2857;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2855 = _RESERVED_IDENTIFIER_FIXUP_2845;
        _RESERVED_IDENTIFIER_FIXUP_2855.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3583 = _RESERVED_IDENTIFIER_FIXUP_2837;
        _RESERVED_IDENTIFIER_FIXUP_3582 = _RESERVED_IDENTIFIER_FIXUP_2855;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1378 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2929 = _RESERVED_IDENTIFIER_FIXUP_3582;
    _RESERVED_IDENTIFIER_FIXUP_2929.y = _RESERVED_IDENTIFIER_FIXUP_1378;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3586;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3584;
    if (_RESERVED_IDENTIFIER_FIXUP_1378 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1387 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3090 = _RESERVED_IDENTIFIER_FIXUP_2929;
        _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1387.x;
        _RESERVED_IDENTIFIER_FIXUP_3090.z = _RESERVED_IDENTIFIER_FIXUP_1387.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1397 = _RESERVED_IDENTIFIER_FIXUP_3090.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3094;
        _RESERVED_IDENTIFIER_FIXUP_3094.x = _RESERVED_IDENTIFIER_FIXUP_1397.x;
        _RESERVED_IDENTIFIER_FIXUP_3094.y = _RESERVED_IDENTIFIER_FIXUP_1397.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_3090.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3098;
        _RESERVED_IDENTIFIER_FIXUP_3098.x = _RESERVED_IDENTIFIER_FIXUP_1407.x;
        _RESERVED_IDENTIFIER_FIXUP_3098.y = _RESERVED_IDENTIFIER_FIXUP_1407.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_3090.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3102;
        _RESERVED_IDENTIFIER_FIXUP_3102.x = _RESERVED_IDENTIFIER_FIXUP_1417.x;
        _RESERVED_IDENTIFIER_FIXUP_3102.y = _RESERVED_IDENTIFIER_FIXUP_1417.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1427 = _RESERVED_IDENTIFIER_FIXUP_3090.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3106;
        _RESERVED_IDENTIFIER_FIXUP_3106.x = _RESERVED_IDENTIFIER_FIXUP_1427.x;
        _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1427.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1435 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1435.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1435.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1441 = hdLod6(param_12, param_13);
        _RESERVED_IDENTIFIER_FIXUP_3094.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3098.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3102.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3106.w = 0.0;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3094.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1441.y = hdLod6(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3098.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1441.z = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3102.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1441.w = hdLod6(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1498 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1441 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3106.xy;
        float param_21 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1504 = hdLod6(param_20, param_21).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1504;
        float _RESERVED_IDENTIFIER_FIXUP_1509 = float(_RESERVED_IDENTIFIER_FIXUP_1504 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1509;
        float _RESERVED_IDENTIFIER_FIXUP_1512 = dot(_RESERVED_IDENTIFIER_FIXUP_1498, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3090.z = _RESERVED_IDENTIFIER_FIXUP_1512;
        float _RESERVED_IDENTIFIER_FIXUP_1518 = _RESERVED_IDENTIFIER_FIXUP_1509 + _RESERVED_IDENTIFIER_FIXUP_1512;
        _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1518;
        _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1518 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3586 = _RESERVED_IDENTIFIER_FIXUP_1498;
        _RESERVED_IDENTIFIER_FIXUP_3584 = _RESERVED_IDENTIFIER_FIXUP_3090;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1531 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2934 = _RESERVED_IDENTIFIER_FIXUP_2929;
        _RESERVED_IDENTIFIER_FIXUP_2934.z = _RESERVED_IDENTIFIER_FIXUP_1531;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3587;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3585;
        if (_RESERVED_IDENTIFIER_FIXUP_1531 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1540 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3024 = _RESERVED_IDENTIFIER_FIXUP_2934;
            _RESERVED_IDENTIFIER_FIXUP_3024.z = _RESERVED_IDENTIFIER_FIXUP_1540.x;
            _RESERVED_IDENTIFIER_FIXUP_3024.w = _RESERVED_IDENTIFIER_FIXUP_1540.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1550 = _RESERVED_IDENTIFIER_FIXUP_3024.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3028;
            _RESERVED_IDENTIFIER_FIXUP_3028.x = _RESERVED_IDENTIFIER_FIXUP_1550.x;
            _RESERVED_IDENTIFIER_FIXUP_3028.y = _RESERVED_IDENTIFIER_FIXUP_1550.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_3024.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3032;
            _RESERVED_IDENTIFIER_FIXUP_3032.x = _RESERVED_IDENTIFIER_FIXUP_1560.x;
            _RESERVED_IDENTIFIER_FIXUP_3032.y = _RESERVED_IDENTIFIER_FIXUP_1560.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1570 = _RESERVED_IDENTIFIER_FIXUP_3024.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3036;
            _RESERVED_IDENTIFIER_FIXUP_3036.x = _RESERVED_IDENTIFIER_FIXUP_1570.x;
            _RESERVED_IDENTIFIER_FIXUP_3036.y = _RESERVED_IDENTIFIER_FIXUP_1570.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1580 = _RESERVED_IDENTIFIER_FIXUP_3024.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3040;
            _RESERVED_IDENTIFIER_FIXUP_3040.x = _RESERVED_IDENTIFIER_FIXUP_1580.x;
            _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1580.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1588 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1588.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1588.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1594 = hdLod7(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_3028.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3032.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3036.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3040.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3028.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1594.y = hdLod7(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3032.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1594.z = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3036.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1594.w = hdLod7(param_28, param_29).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1651 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1594 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3040.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1657 = hdLod7(param_30, param_31).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3024.z = _RESERVED_IDENTIFIER_FIXUP_1657;
            float _RESERVED_IDENTIFIER_FIXUP_1662 = float(_RESERVED_IDENTIFIER_FIXUP_1657 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3024.z = _RESERVED_IDENTIFIER_FIXUP_1662;
            float _RESERVED_IDENTIFIER_FIXUP_1665 = dot(_RESERVED_IDENTIFIER_FIXUP_1651, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3024.w = _RESERVED_IDENTIFIER_FIXUP_1665;
            float _RESERVED_IDENTIFIER_FIXUP_1671 = _RESERVED_IDENTIFIER_FIXUP_1662 + _RESERVED_IDENTIFIER_FIXUP_1665;
            _RESERVED_IDENTIFIER_FIXUP_3024.z = _RESERVED_IDENTIFIER_FIXUP_1671;
            _RESERVED_IDENTIFIER_FIXUP_3024.y = _RESERVED_IDENTIFIER_FIXUP_1671 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3587 = _RESERVED_IDENTIFIER_FIXUP_1651;
            _RESERVED_IDENTIFIER_FIXUP_3585 = _RESERVED_IDENTIFIER_FIXUP_3024;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2938 = _RESERVED_IDENTIFIER_FIXUP_3583;
            _RESERVED_IDENTIFIER_FIXUP_2938.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2938.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1687 = (_RESERVED_IDENTIFIER_FIXUP_2938.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2943;
            _RESERVED_IDENTIFIER_FIXUP_2943.x = _RESERVED_IDENTIFIER_FIXUP_1687.x;
            _RESERVED_IDENTIFIER_FIXUP_2943.y = _RESERVED_IDENTIFIER_FIXUP_1687.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_2943.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2947;
            _RESERVED_IDENTIFIER_FIXUP_2947.x = _RESERVED_IDENTIFIER_FIXUP_1697.x;
            _RESERVED_IDENTIFIER_FIXUP_2947.y = _RESERVED_IDENTIFIER_FIXUP_1697.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_2943.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2951;
            _RESERVED_IDENTIFIER_FIXUP_2951.x = _RESERVED_IDENTIFIER_FIXUP_1707.x;
            _RESERVED_IDENTIFIER_FIXUP_2951.y = _RESERVED_IDENTIFIER_FIXUP_1707.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1717 = _RESERVED_IDENTIFIER_FIXUP_2943.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2955;
            _RESERVED_IDENTIFIER_FIXUP_2955.x = _RESERVED_IDENTIFIER_FIXUP_1717.x;
            _RESERVED_IDENTIFIER_FIXUP_2955.y = _RESERVED_IDENTIFIER_FIXUP_1717.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1727 = _RESERVED_IDENTIFIER_FIXUP_2943.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2959;
            _RESERVED_IDENTIFIER_FIXUP_2959.x = _RESERVED_IDENTIFIER_FIXUP_1727.x;
            _RESERVED_IDENTIFIER_FIXUP_2959.y = _RESERVED_IDENTIFIER_FIXUP_1727.y;
            _RESERVED_IDENTIFIER_FIXUP_2943.w = 0.0;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2943.xy;
            float param_33 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1741 = hdLod8(param_32, param_33);
            _RESERVED_IDENTIFIER_FIXUP_2947.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2951.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2955.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2959.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_2947.xy;
            float param_35 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1741.y = hdLod8(param_34, param_35).x;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2951.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1741.z = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2955.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1741.w = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2959.xy;
            float param_41 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1804 = hdLod8(param_40, param_41).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2999 = _RESERVED_IDENTIFIER_FIXUP_2934;
            _RESERVED_IDENTIFIER_FIXUP_2999.z = _RESERVED_IDENTIFIER_FIXUP_1804;
            float _RESERVED_IDENTIFIER_FIXUP_1809 = float(_RESERVED_IDENTIFIER_FIXUP_1804 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2999.z = _RESERVED_IDENTIFIER_FIXUP_1809;
            float _RESERVED_IDENTIFIER_FIXUP_1812 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1741 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2999.w = _RESERVED_IDENTIFIER_FIXUP_1812;
            float _RESERVED_IDENTIFIER_FIXUP_1818 = _RESERVED_IDENTIFIER_FIXUP_1809 + _RESERVED_IDENTIFIER_FIXUP_1812;
            _RESERVED_IDENTIFIER_FIXUP_2999.z = _RESERVED_IDENTIFIER_FIXUP_1818;
            float _RESERVED_IDENTIFIER_FIXUP_1826 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2999.w = _RESERVED_IDENTIFIER_FIXUP_1826;
            float _RESERVED_IDENTIFIER_FIXUP_1832 = clamp((_RESERVED_IDENTIFIER_FIXUP_1826 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2999.w = _RESERVED_IDENTIFIER_FIXUP_1832;
            float _RESERVED_IDENTIFIER_FIXUP_1837 = (_RESERVED_IDENTIFIER_FIXUP_1818 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2999.z = _RESERVED_IDENTIFIER_FIXUP_1837;
            _RESERVED_IDENTIFIER_FIXUP_2999.y = (_RESERVED_IDENTIFIER_FIXUP_1832 * _RESERVED_IDENTIFIER_FIXUP_1837) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3587 = _RESERVED_IDENTIFIER_FIXUP_2938;
            _RESERVED_IDENTIFIER_FIXUP_3585 = _RESERVED_IDENTIFIER_FIXUP_2999;
        }
        _RESERVED_IDENTIFIER_FIXUP_3586 = _RESERVED_IDENTIFIER_FIXUP_3587;
        _RESERVED_IDENTIFIER_FIXUP_3584 = _RESERVED_IDENTIFIER_FIXUP_3585;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1852 = min(_RESERVED_IDENTIFIER_FIXUP_3584.y, _RESERVED_IDENTIFIER_FIXUP_3584.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3158 = _RESERVED_IDENTIFIER_FIXUP_3586;
    _RESERVED_IDENTIFIER_FIXUP_3158.x = _RESERVED_IDENTIFIER_FIXUP_1852;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3600 = vec4((_RESERVED_IDENTIFIER_FIXUP_1852 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1874 = _RESERVED_IDENTIFIER_FIXUP_3158.xxx * _RESERVED_IDENTIFIER_FIXUP_3600.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1876 = _RESERVED_IDENTIFIER_FIXUP_1874.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3169 = _RESERVED_IDENTIFIER_FIXUP_3600;
    _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_1876;
    _RESERVED_IDENTIFIER_FIXUP_3169.z = _RESERVED_IDENTIFIER_FIXUP_1874.y;
    _RESERVED_IDENTIFIER_FIXUP_3169.w = _RESERVED_IDENTIFIER_FIXUP_1874.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1888 = (mix(_RESERVED_IDENTIFIER_FIXUP_2825, _RESERVED_IDENTIFIER_FIXUP_2837, _RESERVED_IDENTIFIER_FIXUP_1117.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_3169.xxx) + _RESERVED_IDENTIFIER_FIXUP_3169.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3601 = vec4(_RESERVED_IDENTIFIER_FIXUP_1888.x, _RESERVED_IDENTIFIER_FIXUP_1876, _RESERVED_IDENTIFIER_FIXUP_1874.yz);
    _RESERVED_IDENTIFIER_FIXUP_3601.y = _RESERVED_IDENTIFIER_FIXUP_1888.y;
    _RESERVED_IDENTIFIER_FIXUP_3601.z = _RESERVED_IDENTIFIER_FIXUP_1888.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1901 = _RESERVED_IDENTIFIER_FIXUP_3601.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3181 = _RESERVED_IDENTIFIER_FIXUP_3601;
    _RESERVED_IDENTIFIER_FIXUP_3181.x = _RESERVED_IDENTIFIER_FIXUP_1901.x;
    _RESERVED_IDENTIFIER_FIXUP_3181.y = _RESERVED_IDENTIFIER_FIXUP_1901.y;
    _RESERVED_IDENTIFIER_FIXUP_3181.z = _RESERVED_IDENTIFIER_FIXUP_1901.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1956 = OptTex0( texcoord0.xyz);
    vec2 param_42 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1960 = hdTex1(param_42);
    vec2 param_43 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1964 = hdTex2(param_43);
    _RESERVED_IDENTIFIER_FIXUP_1964.y = _RESERVED_IDENTIFIER_FIXUP_1123;
    _RESERVED_IDENTIFIER_FIXUP_1964.z = _RESERVED_IDENTIFIER_FIXUP_1125;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1977 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3199;
    _RESERVED_IDENTIFIER_FIXUP_3199.x = _RESERVED_IDENTIFIER_FIXUP_1977.x;
    _RESERVED_IDENTIFIER_FIXUP_3199.y = _RESERVED_IDENTIFIER_FIXUP_1977.y;
    _RESERVED_IDENTIFIER_FIXUP_3199.z = _RESERVED_IDENTIFIER_FIXUP_1977.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1985 = _RESERVED_IDENTIFIER_FIXUP_1956.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1988 = _RESERVED_IDENTIFIER_FIXUP_1985 * _RESERVED_IDENTIFIER_FIXUP_3199.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3205 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3205.x = _RESERVED_IDENTIFIER_FIXUP_1988.x;
    _RESERVED_IDENTIFIER_FIXUP_3205.y = _RESERVED_IDENTIFIER_FIXUP_1988.y;
    _RESERVED_IDENTIFIER_FIXUP_3205.z = _RESERVED_IDENTIFIER_FIXUP_1988.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2003 = mix(_RESERVED_IDENTIFIER_FIXUP_3205.xyz, _RESERVED_IDENTIFIER_FIXUP_1985, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1964.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3211 = _RESERVED_IDENTIFIER_FIXUP_1956;
    _RESERVED_IDENTIFIER_FIXUP_3211.x = _RESERVED_IDENTIFIER_FIXUP_2003.x;
    _RESERVED_IDENTIFIER_FIXUP_3211.y = _RESERVED_IDENTIFIER_FIXUP_2003.y;
    _RESERVED_IDENTIFIER_FIXUP_3211.z = _RESERVED_IDENTIFIER_FIXUP_2003.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2011 = _RESERVED_IDENTIFIER_FIXUP_1960.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2014 = _RESERVED_IDENTIFIER_FIXUP_2011 * _RESERVED_IDENTIFIER_FIXUP_3199.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3217;
    _RESERVED_IDENTIFIER_FIXUP_3217.x = _RESERVED_IDENTIFIER_FIXUP_2014.x;
    _RESERVED_IDENTIFIER_FIXUP_3217.y = _RESERVED_IDENTIFIER_FIXUP_2014.y;
    _RESERVED_IDENTIFIER_FIXUP_3217.z = _RESERVED_IDENTIFIER_FIXUP_2014.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2029 = mix(_RESERVED_IDENTIFIER_FIXUP_3217.xyz, _RESERVED_IDENTIFIER_FIXUP_2011, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1964.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3223 = _RESERVED_IDENTIFIER_FIXUP_1960;
    _RESERVED_IDENTIFIER_FIXUP_3223.x = _RESERVED_IDENTIFIER_FIXUP_2029.x;
    _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_2029.y;
    _RESERVED_IDENTIFIER_FIXUP_3223.z = _RESERVED_IDENTIFIER_FIXUP_2029.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2040 = mix(_RESERVED_IDENTIFIER_FIXUP_3211, _RESERVED_IDENTIFIER_FIXUP_3223, _RESERVED_IDENTIFIER_FIXUP_1964.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3231 = _RESERVED_IDENTIFIER_FIXUP_3211;
    _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_1200;
    float _RESERVED_IDENTIFIER_FIXUP_2053 = clamp((_RESERVED_IDENTIFIER_FIXUP_1200 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_2053;
    float _RESERVED_IDENTIFIER_FIXUP_2059 = ((-_RESERVED_IDENTIFIER_FIXUP_2053) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_2059;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3592;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3591;
    if (_RESERVED_IDENTIFIER_FIXUP_2059 != (-_RESERVED_IDENTIFIER_FIXUP_2059))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2071 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3243 = _RESERVED_IDENTIFIER_FIXUP_3231;
        _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_2071.x;
        _RESERVED_IDENTIFIER_FIXUP_3243.z = _RESERVED_IDENTIFIER_FIXUP_2071.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2081 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3247;
        _RESERVED_IDENTIFIER_FIXUP_3247.x = _RESERVED_IDENTIFIER_FIXUP_2081.x;
        _RESERVED_IDENTIFIER_FIXUP_3247.y = _RESERVED_IDENTIFIER_FIXUP_2081.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2091 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3251;
        _RESERVED_IDENTIFIER_FIXUP_3251.x = _RESERVED_IDENTIFIER_FIXUP_2091.x;
        _RESERVED_IDENTIFIER_FIXUP_3251.y = _RESERVED_IDENTIFIER_FIXUP_2091.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2101 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3255;
        _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_2101.x;
        _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_2101.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2111 = _RESERVED_IDENTIFIER_FIXUP_3243.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3259;
        _RESERVED_IDENTIFIER_FIXUP_3259.x = _RESERVED_IDENTIFIER_FIXUP_2111.x;
        _RESERVED_IDENTIFIER_FIXUP_3259.y = _RESERVED_IDENTIFIER_FIXUP_2111.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2119 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_2119.xy;
        float param_45 = _RESERVED_IDENTIFIER_FIXUP_2119.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2125 = hdLod5(param_44, param_45);
        _RESERVED_IDENTIFIER_FIXUP_3247.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3251.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3255.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3259.w = 0.0;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3247.xy;
        float param_47 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2125.y = hdLod5(param_46, param_47).x;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3251.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2125.z = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3255.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2125.w = hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2182 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2125 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3259.xy;
        float param_53 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2188 = hdLod5(param_52, param_53).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_2188;
        float _RESERVED_IDENTIFIER_FIXUP_2193 = float(_RESERVED_IDENTIFIER_FIXUP_2188 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_2193;
        float _RESERVED_IDENTIFIER_FIXUP_2196 = dot(_RESERVED_IDENTIFIER_FIXUP_2182, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3243.z = _RESERVED_IDENTIFIER_FIXUP_2196;
        float _RESERVED_IDENTIFIER_FIXUP_2202 = _RESERVED_IDENTIFIER_FIXUP_2193 + _RESERVED_IDENTIFIER_FIXUP_2196;
        _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_2202;
        float _RESERVED_IDENTIFIER_FIXUP_2207 = (_RESERVED_IDENTIFIER_FIXUP_2202 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_2207;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = (_RESERVED_IDENTIFIER_FIXUP_2053 * _RESERVED_IDENTIFIER_FIXUP_2207) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3592 = _RESERVED_IDENTIFIER_FIXUP_2182;
        _RESERVED_IDENTIFIER_FIXUP_3591 = _RESERVED_IDENTIFIER_FIXUP_3243;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3241 = _RESERVED_IDENTIFIER_FIXUP_3231;
        _RESERVED_IDENTIFIER_FIXUP_3241.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3592 = _RESERVED_IDENTIFIER_FIXUP_3223;
        _RESERVED_IDENTIFIER_FIXUP_3591 = _RESERVED_IDENTIFIER_FIXUP_3241;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3315 = _RESERVED_IDENTIFIER_FIXUP_3591;
    _RESERVED_IDENTIFIER_FIXUP_3315.y = _RESERVED_IDENTIFIER_FIXUP_1378;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3595;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3593;
    if (_RESERVED_IDENTIFIER_FIXUP_1378 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2234 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3476 = _RESERVED_IDENTIFIER_FIXUP_3315;
        _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2234.x;
        _RESERVED_IDENTIFIER_FIXUP_3476.z = _RESERVED_IDENTIFIER_FIXUP_2234.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2244 = _RESERVED_IDENTIFIER_FIXUP_3476.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3480;
        _RESERVED_IDENTIFIER_FIXUP_3480.x = _RESERVED_IDENTIFIER_FIXUP_2244.x;
        _RESERVED_IDENTIFIER_FIXUP_3480.y = _RESERVED_IDENTIFIER_FIXUP_2244.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2254 = _RESERVED_IDENTIFIER_FIXUP_3476.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3484;
        _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_2254.x;
        _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2254.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2264 = _RESERVED_IDENTIFIER_FIXUP_3476.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3488;
        _RESERVED_IDENTIFIER_FIXUP_3488.x = _RESERVED_IDENTIFIER_FIXUP_2264.x;
        _RESERVED_IDENTIFIER_FIXUP_3488.y = _RESERVED_IDENTIFIER_FIXUP_2264.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2274 = _RESERVED_IDENTIFIER_FIXUP_3476.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3492;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_2274.x;
        _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_2274.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2282 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2282.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2282.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2288 = hdLod6(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3480.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3484.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3488.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3492.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3480.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2288.y = hdLod6(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3484.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2288.z = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3488.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2288.w = hdLod6(param_60, param_61).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2345 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2288 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3492.xy;
        float param_63 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2351 = hdLod6(param_62, param_63).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2351;
        float _RESERVED_IDENTIFIER_FIXUP_2356 = float(_RESERVED_IDENTIFIER_FIXUP_2351 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2356;
        float _RESERVED_IDENTIFIER_FIXUP_2359 = dot(_RESERVED_IDENTIFIER_FIXUP_2345, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3476.z = _RESERVED_IDENTIFIER_FIXUP_2359;
        float _RESERVED_IDENTIFIER_FIXUP_2365 = _RESERVED_IDENTIFIER_FIXUP_2356 + _RESERVED_IDENTIFIER_FIXUP_2359;
        _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2365;
        _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2365 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3595 = _RESERVED_IDENTIFIER_FIXUP_2345;
        _RESERVED_IDENTIFIER_FIXUP_3593 = _RESERVED_IDENTIFIER_FIXUP_3476;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2378 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3320 = _RESERVED_IDENTIFIER_FIXUP_3315;
        _RESERVED_IDENTIFIER_FIXUP_3320.z = _RESERVED_IDENTIFIER_FIXUP_2378;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3596;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3594;
        if (_RESERVED_IDENTIFIER_FIXUP_2378 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2387 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3410 = _RESERVED_IDENTIFIER_FIXUP_3320;
            _RESERVED_IDENTIFIER_FIXUP_3410.z = _RESERVED_IDENTIFIER_FIXUP_2387.x;
            _RESERVED_IDENTIFIER_FIXUP_3410.w = _RESERVED_IDENTIFIER_FIXUP_2387.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2397 = _RESERVED_IDENTIFIER_FIXUP_3410.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3414;
            _RESERVED_IDENTIFIER_FIXUP_3414.x = _RESERVED_IDENTIFIER_FIXUP_2397.x;
            _RESERVED_IDENTIFIER_FIXUP_3414.y = _RESERVED_IDENTIFIER_FIXUP_2397.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2407 = _RESERVED_IDENTIFIER_FIXUP_3410.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3418;
            _RESERVED_IDENTIFIER_FIXUP_3418.x = _RESERVED_IDENTIFIER_FIXUP_2407.x;
            _RESERVED_IDENTIFIER_FIXUP_3418.y = _RESERVED_IDENTIFIER_FIXUP_2407.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2417 = _RESERVED_IDENTIFIER_FIXUP_3410.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3422;
            _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_2417.x;
            _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_2417.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2427 = _RESERVED_IDENTIFIER_FIXUP_3410.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3426;
            _RESERVED_IDENTIFIER_FIXUP_3426.x = _RESERVED_IDENTIFIER_FIXUP_2427.x;
            _RESERVED_IDENTIFIER_FIXUP_3426.y = _RESERVED_IDENTIFIER_FIXUP_2427.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2435 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_2435.xy;
            float param_65 = _RESERVED_IDENTIFIER_FIXUP_2435.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2441 = hdLod7(param_64, param_65);
            _RESERVED_IDENTIFIER_FIXUP_3414.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3418.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3422.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3426.w = 0.0;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3414.xy;
            float param_67 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2441.y = hdLod7(param_66, param_67).x;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3418.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2441.z = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3422.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2441.w = hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2498 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2441 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3426.xy;
            float param_73 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2504 = hdLod7(param_72, param_73).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3410.z = _RESERVED_IDENTIFIER_FIXUP_2504;
            float _RESERVED_IDENTIFIER_FIXUP_2509 = float(_RESERVED_IDENTIFIER_FIXUP_2504 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3410.z = _RESERVED_IDENTIFIER_FIXUP_2509;
            float _RESERVED_IDENTIFIER_FIXUP_2512 = dot(_RESERVED_IDENTIFIER_FIXUP_2498, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3410.w = _RESERVED_IDENTIFIER_FIXUP_2512;
            float _RESERVED_IDENTIFIER_FIXUP_2518 = _RESERVED_IDENTIFIER_FIXUP_2509 + _RESERVED_IDENTIFIER_FIXUP_2512;
            _RESERVED_IDENTIFIER_FIXUP_3410.z = _RESERVED_IDENTIFIER_FIXUP_2518;
            _RESERVED_IDENTIFIER_FIXUP_3410.y = _RESERVED_IDENTIFIER_FIXUP_2518 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3596 = _RESERVED_IDENTIFIER_FIXUP_2498;
            _RESERVED_IDENTIFIER_FIXUP_3594 = _RESERVED_IDENTIFIER_FIXUP_3410;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_3592;
            _RESERVED_IDENTIFIER_FIXUP_3324.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3324.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2534 = (_RESERVED_IDENTIFIER_FIXUP_3324.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3329;
            _RESERVED_IDENTIFIER_FIXUP_3329.x = _RESERVED_IDENTIFIER_FIXUP_2534.x;
            _RESERVED_IDENTIFIER_FIXUP_3329.y = _RESERVED_IDENTIFIER_FIXUP_2534.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2544 = _RESERVED_IDENTIFIER_FIXUP_3329.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3333;
            _RESERVED_IDENTIFIER_FIXUP_3333.x = _RESERVED_IDENTIFIER_FIXUP_2544.x;
            _RESERVED_IDENTIFIER_FIXUP_3333.y = _RESERVED_IDENTIFIER_FIXUP_2544.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2554 = _RESERVED_IDENTIFIER_FIXUP_3329.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3337;
            _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_2554.x;
            _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_2554.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2564 = _RESERVED_IDENTIFIER_FIXUP_3329.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3341;
            _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_2564.x;
            _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2564.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2574 = _RESERVED_IDENTIFIER_FIXUP_3329.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3345;
            _RESERVED_IDENTIFIER_FIXUP_3345.x = _RESERVED_IDENTIFIER_FIXUP_2574.x;
            _RESERVED_IDENTIFIER_FIXUP_3345.y = _RESERVED_IDENTIFIER_FIXUP_2574.y;
            _RESERVED_IDENTIFIER_FIXUP_3329.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3329.xy;
            float param_75 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2588 = hdLod8(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3333.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3337.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3341.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3345.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3333.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2588.y = hdLod8(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3337.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2588.z = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3341.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2588.w = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3345.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2651 = hdLod8(param_82, param_83).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3385 = _RESERVED_IDENTIFIER_FIXUP_3320;
            _RESERVED_IDENTIFIER_FIXUP_3385.z = _RESERVED_IDENTIFIER_FIXUP_2651;
            float _RESERVED_IDENTIFIER_FIXUP_2656 = float(_RESERVED_IDENTIFIER_FIXUP_2651 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3385.z = _RESERVED_IDENTIFIER_FIXUP_2656;
            float _RESERVED_IDENTIFIER_FIXUP_2659 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2588 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3385.w = _RESERVED_IDENTIFIER_FIXUP_2659;
            float _RESERVED_IDENTIFIER_FIXUP_2665 = _RESERVED_IDENTIFIER_FIXUP_2656 + _RESERVED_IDENTIFIER_FIXUP_2659;
            _RESERVED_IDENTIFIER_FIXUP_3385.z = _RESERVED_IDENTIFIER_FIXUP_2665;
            float _RESERVED_IDENTIFIER_FIXUP_2673 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3385.w = _RESERVED_IDENTIFIER_FIXUP_2673;
            float _RESERVED_IDENTIFIER_FIXUP_2679 = clamp((_RESERVED_IDENTIFIER_FIXUP_2673 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3385.w = _RESERVED_IDENTIFIER_FIXUP_2679;
            float _RESERVED_IDENTIFIER_FIXUP_2684 = (_RESERVED_IDENTIFIER_FIXUP_2665 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3385.z = _RESERVED_IDENTIFIER_FIXUP_2684;
            _RESERVED_IDENTIFIER_FIXUP_3385.y = (_RESERVED_IDENTIFIER_FIXUP_2679 * _RESERVED_IDENTIFIER_FIXUP_2684) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3596 = _RESERVED_IDENTIFIER_FIXUP_3324;
            _RESERVED_IDENTIFIER_FIXUP_3594 = _RESERVED_IDENTIFIER_FIXUP_3385;
        }
        _RESERVED_IDENTIFIER_FIXUP_3595 = _RESERVED_IDENTIFIER_FIXUP_3596;
        _RESERVED_IDENTIFIER_FIXUP_3593 = _RESERVED_IDENTIFIER_FIXUP_3594;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2699 = min(_RESERVED_IDENTIFIER_FIXUP_3593.y, _RESERVED_IDENTIFIER_FIXUP_3593.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3544 = _RESERVED_IDENTIFIER_FIXUP_3595;
    _RESERVED_IDENTIFIER_FIXUP_3544.x = _RESERVED_IDENTIFIER_FIXUP_2699;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3603 = vec4((_RESERVED_IDENTIFIER_FIXUP_2699 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2040.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2721 = _RESERVED_IDENTIFIER_FIXUP_3544.xxx * _RESERVED_IDENTIFIER_FIXUP_3603.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2723 = _RESERVED_IDENTIFIER_FIXUP_2721.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3555 = _RESERVED_IDENTIFIER_FIXUP_3603;
    _RESERVED_IDENTIFIER_FIXUP_3555.y = _RESERVED_IDENTIFIER_FIXUP_2723;
    _RESERVED_IDENTIFIER_FIXUP_3555.z = _RESERVED_IDENTIFIER_FIXUP_2721.y;
    _RESERVED_IDENTIFIER_FIXUP_3555.w = _RESERVED_IDENTIFIER_FIXUP_2721.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2735 = (_RESERVED_IDENTIFIER_FIXUP_2040.xyz * _RESERVED_IDENTIFIER_FIXUP_3555.xxx) + _RESERVED_IDENTIFIER_FIXUP_3555.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3604 = vec4(_RESERVED_IDENTIFIER_FIXUP_2735.x, _RESERVED_IDENTIFIER_FIXUP_2723, _RESERVED_IDENTIFIER_FIXUP_2721.yz);
    _RESERVED_IDENTIFIER_FIXUP_3604.y = _RESERVED_IDENTIFIER_FIXUP_2735.y;
    _RESERVED_IDENTIFIER_FIXUP_3604.z = _RESERVED_IDENTIFIER_FIXUP_2735.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2748 = _RESERVED_IDENTIFIER_FIXUP_3604.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3567 = _RESERVED_IDENTIFIER_FIXUP_3604;
    _RESERVED_IDENTIFIER_FIXUP_3567.x = _RESERVED_IDENTIFIER_FIXUP_2748.x;
    _RESERVED_IDENTIFIER_FIXUP_3567.y = _RESERVED_IDENTIFIER_FIXUP_2748.y;
    _RESERVED_IDENTIFIER_FIXUP_3567.z = _RESERVED_IDENTIFIER_FIXUP_2748.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3567.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_970 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_979;
    if (_RESERVED_IDENTIFIER_FIXUP_970)
    {
        _RESERVED_IDENTIFIER_FIXUP_979 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_979 = _RESERVED_IDENTIFIER_FIXUP_970;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_979)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1016 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3181.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1042 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2801;
    if (_RESERVED_IDENTIFIER_FIXUP_1016 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2801 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1016), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1042);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2801 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1042);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2801;
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
    vec2 hdB86 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = hdB86.x;
    r2.z = hdB86.y;
    vec3 hdB98 = v0.xyz + v0.xyz;
    r3.x = hdB98.x;
    r3.y = hdB98.y;
    r3.z = hdB98.z;
    vec3 hdB110 = r0.xyz * r3.xyz;
    r4.x = hdB110.x;
    r4.y = hdB110.y;
    r4.z = hdB110.z;
    vec4 hdB119 = r0;
    vec3 hdB128 = mix(r4.xyz, hdB119.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = hdB128.x;
    r0.y = hdB128.y;
    r0.z = hdB128.z;
    vec4 hdB137 = r3;
    vec3 hdB139 = r1.xyz * hdB137.xyz;
    r3.x = hdB139.x;
    r3.y = hdB139.y;
    r3.z = hdB139.z;
    vec4 hdB148 = r1;
    vec3 hdB154 = mix(r3.xyz, hdB148.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = hdB154.x;
    r1.y = hdB154.y;
    r1.z = hdB154.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB202 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB202.x;
        r0.z = hdB202.y;
        vec2 hdB213 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB213.x;
        r1.y = hdB213.y;
        vec2 hdB224 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB224.x;
        r2.y = hdB224.y;
        vec2 hdB235 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB235.x;
        r4.y = hdB235.y;
        vec2 hdB246 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB246.x;
        r5.y = hdB246.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r6.xy;
        float param_3 = r6.w;
        r6 = hdLod5(param_2, param_3);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
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
        vec2 hdB377 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB377.x;
        r0.z = hdB377.y;
        vec2 hdB387 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB387.x;
        r1.y = hdB387.y;
        vec2 hdB397 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB397.x;
        r2.y = hdB397.y;
        vec2 hdB407 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB407.x;
        r4.y = hdB407.y;
        vec2 hdB417 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB417.x;
        r5.y = hdB417.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod6(param_12, param_13);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_14 = r1.xy;
        float param_15 = r1.w;
        r1 = hdLod6(param_14, param_15);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod6(param_16, param_17);
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
            vec2 hdB532 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB532.x;
            r0.w = hdB532.y;
            vec2 hdB542 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = hdB542.x;
            r1.y = hdB542.y;
            vec2 hdB552 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB552.x;
            r2.y = hdB552.y;
            vec2 hdB562 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB562.x;
            r4.y = hdB562.y;
            vec2 hdB572 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB572.x;
            r5.y = hdB572.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r6.xy;
            float param_23 = r6.w;
            r6 = hdLod7(param_22, param_23);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_24 = r1.xy;
            float param_25 = r1.w;
            r1 = hdLod7(param_24, param_25);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod7(param_26, param_27);
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
            vec2 hdB680 = (r1.xy * vec2(0.5)) + vec2(0.5);
            r2.x = hdB680.x;
            r2.y = hdB680.y;
            vec2 hdB690 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB690.x;
            r4.y = hdB690.y;
            vec2 hdB700 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB700.x;
            r5.y = hdB700.y;
            vec2 hdB710 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB710.x;
            r6.y = hdB710.y;
            vec2 hdB720 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB720.x;
            r7.y = hdB720.y;
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_32 = r2.xy;
            float param_33 = r2.w;
            r2 = hdLod8(param_32, param_33);
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
    vec3 hdB859 = r3.www * v1.xyz;
    r0.y = hdB859.x;
    r0.z = hdB859.y;
    r0.w = hdB859.z;
    vec4 hdB868 = r0;
    vec3 hdB870 = r1.xxx * hdB868.yzw;
    r0.y = hdB870.x;
    r0.z = hdB870.y;
    r0.w = hdB870.z;
    vec4 hdB879 = r0;
    vec4 hdB882 = r0;
    vec3 hdB884 = (r3.xyz * hdB879.xxx) + hdB882.yzw;
    r0.x = hdB884.x;
    r0.y = hdB884.y;
    r0.z = hdB884.z;
    vec4 hdB891 = r0;
    vec3 hdB898 = hdB891.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB898.x;
    r0.y = hdB898.y;
    r0.z = hdB898.z;
    vec3 hdB913 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB913.x;
    oC0.y = hdB913.y;
    oC0.z = hdB913.z;
    oC0.w = 1.0;
    bool hdB925 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB933;
    if (hdB925)
    {
        hdB933 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB933 = hdB925;
    }
    if (hdB933)
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
    bool _3196 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3206;
    if (_3196)
    {
        _3206 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3206 = _3196;
    }
    if (_3206)
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
        bool _3231 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3246;
        if (!_3231)
        {
            _3246 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3246 = _3231;
        }
        if (_3246)
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
