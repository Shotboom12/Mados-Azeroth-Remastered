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
float _RESERVED_IDENTIFIER_FIXUP_3400;
vec4 _RESERVED_IDENTIFIER_FIXUP_3401;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1059 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1063 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1067 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1079 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2675 = _RESERVED_IDENTIFIER_FIXUP_1059;
    _RESERVED_IDENTIFIER_FIXUP_2675.x = _RESERVED_IDENTIFIER_FIXUP_1079;
    float _RESERVED_IDENTIFIER_FIXUP_1085 = clamp((_RESERVED_IDENTIFIER_FIXUP_1079 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2675.x = _RESERVED_IDENTIFIER_FIXUP_1085;
    float _RESERVED_IDENTIFIER_FIXUP_1091 = ((-_RESERVED_IDENTIFIER_FIXUP_1085) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2675.y = _RESERVED_IDENTIFIER_FIXUP_1091;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3403;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3402;
    if (_RESERVED_IDENTIFIER_FIXUP_1091 != (-_RESERVED_IDENTIFIER_FIXUP_1091))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1103 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2687 = _RESERVED_IDENTIFIER_FIXUP_2675;
        _RESERVED_IDENTIFIER_FIXUP_2687.y = _RESERVED_IDENTIFIER_FIXUP_1103.x;
        _RESERVED_IDENTIFIER_FIXUP_2687.z = _RESERVED_IDENTIFIER_FIXUP_1103.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1113 = _RESERVED_IDENTIFIER_FIXUP_2687.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2691;
        _RESERVED_IDENTIFIER_FIXUP_2691.x = _RESERVED_IDENTIFIER_FIXUP_1113.x;
        _RESERVED_IDENTIFIER_FIXUP_2691.y = _RESERVED_IDENTIFIER_FIXUP_1113.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_2687.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2695;
        _RESERVED_IDENTIFIER_FIXUP_2695.x = _RESERVED_IDENTIFIER_FIXUP_1123.x;
        _RESERVED_IDENTIFIER_FIXUP_2695.y = _RESERVED_IDENTIFIER_FIXUP_1123.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1133 = _RESERVED_IDENTIFIER_FIXUP_2687.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2699;
        _RESERVED_IDENTIFIER_FIXUP_2699.x = _RESERVED_IDENTIFIER_FIXUP_1133.x;
        _RESERVED_IDENTIFIER_FIXUP_2699.y = _RESERVED_IDENTIFIER_FIXUP_1133.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1143 = _RESERVED_IDENTIFIER_FIXUP_2687.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2703;
        _RESERVED_IDENTIFIER_FIXUP_2703.x = _RESERVED_IDENTIFIER_FIXUP_1143.x;
        _RESERVED_IDENTIFIER_FIXUP_2703.y = _RESERVED_IDENTIFIER_FIXUP_1143.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1151 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1151.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1151.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1157 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_2691.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2695.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2699.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2703.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_2691.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1157.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2695.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1157.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2699.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1157.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1214 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1157 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2703.xy;
        float param_11 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1220 = hdLod5(param_10, param_11).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2687.y = _RESERVED_IDENTIFIER_FIXUP_1220;
        float _RESERVED_IDENTIFIER_FIXUP_1225 = float(_RESERVED_IDENTIFIER_FIXUP_1220 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2687.y = _RESERVED_IDENTIFIER_FIXUP_1225;
        float _RESERVED_IDENTIFIER_FIXUP_1228 = dot(_RESERVED_IDENTIFIER_FIXUP_1214, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2687.z = _RESERVED_IDENTIFIER_FIXUP_1228;
        float _RESERVED_IDENTIFIER_FIXUP_1234 = _RESERVED_IDENTIFIER_FIXUP_1225 + _RESERVED_IDENTIFIER_FIXUP_1228;
        _RESERVED_IDENTIFIER_FIXUP_2687.y = _RESERVED_IDENTIFIER_FIXUP_1234;
        float _RESERVED_IDENTIFIER_FIXUP_1239 = (_RESERVED_IDENTIFIER_FIXUP_1234 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2687.y = _RESERVED_IDENTIFIER_FIXUP_1239;
        _RESERVED_IDENTIFIER_FIXUP_2687.x = (_RESERVED_IDENTIFIER_FIXUP_1085 * _RESERVED_IDENTIFIER_FIXUP_1239) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3403 = _RESERVED_IDENTIFIER_FIXUP_1214;
        _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_2687;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2685 = _RESERVED_IDENTIFIER_FIXUP_2675;
        _RESERVED_IDENTIFIER_FIXUP_2685.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3403 = _RESERVED_IDENTIFIER_FIXUP_1063;
        _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_2685;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1257 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2759 = _RESERVED_IDENTIFIER_FIXUP_3402;
    _RESERVED_IDENTIFIER_FIXUP_2759.y = _RESERVED_IDENTIFIER_FIXUP_1257;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3404;
    if (_RESERVED_IDENTIFIER_FIXUP_1257 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1266 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2920 = _RESERVED_IDENTIFIER_FIXUP_2759;
        _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1266.x;
        _RESERVED_IDENTIFIER_FIXUP_2920.z = _RESERVED_IDENTIFIER_FIXUP_1266.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1276 = _RESERVED_IDENTIFIER_FIXUP_2920.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2924;
        _RESERVED_IDENTIFIER_FIXUP_2924.x = _RESERVED_IDENTIFIER_FIXUP_1276.x;
        _RESERVED_IDENTIFIER_FIXUP_2924.y = _RESERVED_IDENTIFIER_FIXUP_1276.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_2920.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2928;
        _RESERVED_IDENTIFIER_FIXUP_2928.x = _RESERVED_IDENTIFIER_FIXUP_1286.x;
        _RESERVED_IDENTIFIER_FIXUP_2928.y = _RESERVED_IDENTIFIER_FIXUP_1286.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_2920.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2932;
        _RESERVED_IDENTIFIER_FIXUP_2932.x = _RESERVED_IDENTIFIER_FIXUP_1296.x;
        _RESERVED_IDENTIFIER_FIXUP_2932.y = _RESERVED_IDENTIFIER_FIXUP_1296.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_2920.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2936;
        _RESERVED_IDENTIFIER_FIXUP_2936.x = _RESERVED_IDENTIFIER_FIXUP_1306.x;
        _RESERVED_IDENTIFIER_FIXUP_2936.y = _RESERVED_IDENTIFIER_FIXUP_1306.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1314 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1314.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1314.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1320 = hdLod6(param_12, param_13);
        _RESERVED_IDENTIFIER_FIXUP_2924.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2928.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2932.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2936.w = 0.0;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_2924.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1320.y = hdLod6(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_2928.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1320.z = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_2932.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1320.w = hdLod6(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_2936.xy;
        float param_21 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1383 = hdLod6(param_20, param_21).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1383;
        float _RESERVED_IDENTIFIER_FIXUP_1388 = float(_RESERVED_IDENTIFIER_FIXUP_1383 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1388;
        float _RESERVED_IDENTIFIER_FIXUP_1391 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1320 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2920.z = _RESERVED_IDENTIFIER_FIXUP_1391;
        float _RESERVED_IDENTIFIER_FIXUP_1397 = _RESERVED_IDENTIFIER_FIXUP_1388 + _RESERVED_IDENTIFIER_FIXUP_1391;
        _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1397;
        _RESERVED_IDENTIFIER_FIXUP_2920.y = _RESERVED_IDENTIFIER_FIXUP_1397 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3404 = _RESERVED_IDENTIFIER_FIXUP_2920;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1410 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2764 = _RESERVED_IDENTIFIER_FIXUP_2759;
        _RESERVED_IDENTIFIER_FIXUP_2764.z = _RESERVED_IDENTIFIER_FIXUP_1410;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3405;
        if (_RESERVED_IDENTIFIER_FIXUP_1410 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1419 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2854 = _RESERVED_IDENTIFIER_FIXUP_2764;
            _RESERVED_IDENTIFIER_FIXUP_2854.z = _RESERVED_IDENTIFIER_FIXUP_1419.x;
            _RESERVED_IDENTIFIER_FIXUP_2854.w = _RESERVED_IDENTIFIER_FIXUP_1419.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1429 = _RESERVED_IDENTIFIER_FIXUP_2854.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2858;
            _RESERVED_IDENTIFIER_FIXUP_2858.x = _RESERVED_IDENTIFIER_FIXUP_1429.x;
            _RESERVED_IDENTIFIER_FIXUP_2858.y = _RESERVED_IDENTIFIER_FIXUP_1429.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_2854.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2862;
            _RESERVED_IDENTIFIER_FIXUP_2862.x = _RESERVED_IDENTIFIER_FIXUP_1439.x;
            _RESERVED_IDENTIFIER_FIXUP_2862.y = _RESERVED_IDENTIFIER_FIXUP_1439.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_2854.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2866;
            _RESERVED_IDENTIFIER_FIXUP_2866.x = _RESERVED_IDENTIFIER_FIXUP_1449.x;
            _RESERVED_IDENTIFIER_FIXUP_2866.y = _RESERVED_IDENTIFIER_FIXUP_1449.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1459 = _RESERVED_IDENTIFIER_FIXUP_2854.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2870;
            _RESERVED_IDENTIFIER_FIXUP_2870.x = _RESERVED_IDENTIFIER_FIXUP_1459.x;
            _RESERVED_IDENTIFIER_FIXUP_2870.y = _RESERVED_IDENTIFIER_FIXUP_1459.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1467 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1467.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1467.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1473 = hdLod7(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_2858.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2862.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2866.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2870.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_2858.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1473.y = hdLod7(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2862.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1473.z = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2866.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1473.w = hdLod7(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2870.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1536 = hdLod7(param_30, param_31).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2854.z = _RESERVED_IDENTIFIER_FIXUP_1536;
            float _RESERVED_IDENTIFIER_FIXUP_1541 = float(_RESERVED_IDENTIFIER_FIXUP_1536 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2854.z = _RESERVED_IDENTIFIER_FIXUP_1541;
            float _RESERVED_IDENTIFIER_FIXUP_1544 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1473 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2854.w = _RESERVED_IDENTIFIER_FIXUP_1544;
            float _RESERVED_IDENTIFIER_FIXUP_1550 = _RESERVED_IDENTIFIER_FIXUP_1541 + _RESERVED_IDENTIFIER_FIXUP_1544;
            _RESERVED_IDENTIFIER_FIXUP_2854.z = _RESERVED_IDENTIFIER_FIXUP_1550;
            _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1550 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3405 = _RESERVED_IDENTIFIER_FIXUP_2854;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2768 = _RESERVED_IDENTIFIER_FIXUP_3403;
            _RESERVED_IDENTIFIER_FIXUP_2768.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2768.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1566 = (_RESERVED_IDENTIFIER_FIXUP_2768.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2773;
            _RESERVED_IDENTIFIER_FIXUP_2773.x = _RESERVED_IDENTIFIER_FIXUP_1566.x;
            _RESERVED_IDENTIFIER_FIXUP_2773.y = _RESERVED_IDENTIFIER_FIXUP_1566.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1576 = _RESERVED_IDENTIFIER_FIXUP_2773.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2777;
            _RESERVED_IDENTIFIER_FIXUP_2777.x = _RESERVED_IDENTIFIER_FIXUP_1576.x;
            _RESERVED_IDENTIFIER_FIXUP_2777.y = _RESERVED_IDENTIFIER_FIXUP_1576.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1586 = _RESERVED_IDENTIFIER_FIXUP_2773.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2781;
            _RESERVED_IDENTIFIER_FIXUP_2781.x = _RESERVED_IDENTIFIER_FIXUP_1586.x;
            _RESERVED_IDENTIFIER_FIXUP_2781.y = _RESERVED_IDENTIFIER_FIXUP_1586.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1596 = _RESERVED_IDENTIFIER_FIXUP_2773.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2785;
            _RESERVED_IDENTIFIER_FIXUP_2785.x = _RESERVED_IDENTIFIER_FIXUP_1596.x;
            _RESERVED_IDENTIFIER_FIXUP_2785.y = _RESERVED_IDENTIFIER_FIXUP_1596.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1606 = _RESERVED_IDENTIFIER_FIXUP_2773.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2789;
            _RESERVED_IDENTIFIER_FIXUP_2789.x = _RESERVED_IDENTIFIER_FIXUP_1606.x;
            _RESERVED_IDENTIFIER_FIXUP_2789.y = _RESERVED_IDENTIFIER_FIXUP_1606.y;
            _RESERVED_IDENTIFIER_FIXUP_2773.w = 0.0;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2773.xy;
            float param_33 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1620 = hdLod8(param_32, param_33);
            _RESERVED_IDENTIFIER_FIXUP_2777.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2781.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2785.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2789.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_2777.xy;
            float param_35 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1620.y = hdLod8(param_34, param_35).x;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2781.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1620.z = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2785.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1620.w = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2789.xy;
            float param_41 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1683 = hdLod8(param_40, param_41).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2829 = _RESERVED_IDENTIFIER_FIXUP_2764;
            _RESERVED_IDENTIFIER_FIXUP_2829.z = _RESERVED_IDENTIFIER_FIXUP_1683;
            float _RESERVED_IDENTIFIER_FIXUP_1688 = float(_RESERVED_IDENTIFIER_FIXUP_1683 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2829.z = _RESERVED_IDENTIFIER_FIXUP_1688;
            float _RESERVED_IDENTIFIER_FIXUP_1691 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1620 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2829.w = _RESERVED_IDENTIFIER_FIXUP_1691;
            float _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_1688 + _RESERVED_IDENTIFIER_FIXUP_1691;
            _RESERVED_IDENTIFIER_FIXUP_2829.z = _RESERVED_IDENTIFIER_FIXUP_1697;
            float _RESERVED_IDENTIFIER_FIXUP_1705 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2829.w = _RESERVED_IDENTIFIER_FIXUP_1705;
            float _RESERVED_IDENTIFIER_FIXUP_1711 = clamp((_RESERVED_IDENTIFIER_FIXUP_1705 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2829.w = _RESERVED_IDENTIFIER_FIXUP_1711;
            float _RESERVED_IDENTIFIER_FIXUP_1716 = (_RESERVED_IDENTIFIER_FIXUP_1697 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2829.z = _RESERVED_IDENTIFIER_FIXUP_1716;
            _RESERVED_IDENTIFIER_FIXUP_2829.y = (_RESERVED_IDENTIFIER_FIXUP_1711 * _RESERVED_IDENTIFIER_FIXUP_1716) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3405 = _RESERVED_IDENTIFIER_FIXUP_2829;
        }
        _RESERVED_IDENTIFIER_FIXUP_3404 = _RESERVED_IDENTIFIER_FIXUP_3405;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1731 = min(_RESERVED_IDENTIFIER_FIXUP_3404.y, _RESERVED_IDENTIFIER_FIXUP_3404.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2991 = _RESERVED_IDENTIFIER_FIXUP_3404;
    _RESERVED_IDENTIFIER_FIXUP_2991.x = (_RESERVED_IDENTIFIER_FIXUP_1731 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1742 = mix(_RESERVED_IDENTIFIER_FIXUP_1059, _RESERVED_IDENTIFIER_FIXUP_1063, _RESERVED_IDENTIFIER_FIXUP_1067.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_2991.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2993 = _RESERVED_IDENTIFIER_FIXUP_2991;
    _RESERVED_IDENTIFIER_FIXUP_2993.x = _RESERVED_IDENTIFIER_FIXUP_1742.x;
    _RESERVED_IDENTIFIER_FIXUP_2993.y = _RESERVED_IDENTIFIER_FIXUP_1742.y;
    _RESERVED_IDENTIFIER_FIXUP_2993.z = _RESERVED_IDENTIFIER_FIXUP_1742.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1753 = _RESERVED_IDENTIFIER_FIXUP_2993.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3400).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2999 = _RESERVED_IDENTIFIER_FIXUP_2993;
    _RESERVED_IDENTIFIER_FIXUP_2999.x = _RESERVED_IDENTIFIER_FIXUP_1753.x;
    _RESERVED_IDENTIFIER_FIXUP_2999.y = _RESERVED_IDENTIFIER_FIXUP_1753.y;
    _RESERVED_IDENTIFIER_FIXUP_2999.z = _RESERVED_IDENTIFIER_FIXUP_1753.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1764 = _RESERVED_IDENTIFIER_FIXUP_2999.xyz + _RESERVED_IDENTIFIER_FIXUP_2999.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3005 = _RESERVED_IDENTIFIER_FIXUP_2999;
    _RESERVED_IDENTIFIER_FIXUP_3005.x = _RESERVED_IDENTIFIER_FIXUP_1764.x;
    _RESERVED_IDENTIFIER_FIXUP_3005.y = _RESERVED_IDENTIFIER_FIXUP_1764.y;
    _RESERVED_IDENTIFIER_FIXUP_3005.z = _RESERVED_IDENTIFIER_FIXUP_1764.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3420 = vec4(_RESERVED_IDENTIFIER_FIXUP_1731, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1789 = (_RESERVED_IDENTIFIER_FIXUP_3420.yzw * _RESERVED_IDENTIFIER_FIXUP_3420.xxx) + _RESERVED_IDENTIFIER_FIXUP_3005.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3017 = _RESERVED_IDENTIFIER_FIXUP_3005;
    _RESERVED_IDENTIFIER_FIXUP_3017.x = _RESERVED_IDENTIFIER_FIXUP_1789.x;
    _RESERVED_IDENTIFIER_FIXUP_3017.y = _RESERVED_IDENTIFIER_FIXUP_1789.y;
    _RESERVED_IDENTIFIER_FIXUP_3017.z = _RESERVED_IDENTIFIER_FIXUP_1789.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1802 = _RESERVED_IDENTIFIER_FIXUP_3017.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3023 = _RESERVED_IDENTIFIER_FIXUP_3017;
    _RESERVED_IDENTIFIER_FIXUP_3023.x = _RESERVED_IDENTIFIER_FIXUP_1802.x;
    _RESERVED_IDENTIFIER_FIXUP_3023.y = _RESERVED_IDENTIFIER_FIXUP_1802.y;
    _RESERVED_IDENTIFIER_FIXUP_3023.z = _RESERVED_IDENTIFIER_FIXUP_1802.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1857 = OptTex0( texcoord0.xyz);
    vec2 param_42 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1861 = hdTex1(param_42);
    vec2 param_43 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1865 = hdTex2(param_43);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1870 = mix(_RESERVED_IDENTIFIER_FIXUP_1857, _RESERVED_IDENTIFIER_FIXUP_1861, _RESERVED_IDENTIFIER_FIXUP_1865.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3039 = _RESERVED_IDENTIFIER_FIXUP_1857;
    _RESERVED_IDENTIFIER_FIXUP_3039.x = _RESERVED_IDENTIFIER_FIXUP_1079;
    float _RESERVED_IDENTIFIER_FIXUP_1883 = clamp((_RESERVED_IDENTIFIER_FIXUP_1079 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3039.x = _RESERVED_IDENTIFIER_FIXUP_1883;
    float _RESERVED_IDENTIFIER_FIXUP_1889 = ((-_RESERVED_IDENTIFIER_FIXUP_1883) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3039.y = _RESERVED_IDENTIFIER_FIXUP_1889;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3412;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3411;
    if (_RESERVED_IDENTIFIER_FIXUP_1889 != (-_RESERVED_IDENTIFIER_FIXUP_1889))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1901 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3051 = _RESERVED_IDENTIFIER_FIXUP_3039;
        _RESERVED_IDENTIFIER_FIXUP_3051.y = _RESERVED_IDENTIFIER_FIXUP_1901.x;
        _RESERVED_IDENTIFIER_FIXUP_3051.z = _RESERVED_IDENTIFIER_FIXUP_1901.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1911 = _RESERVED_IDENTIFIER_FIXUP_3051.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3055;
        _RESERVED_IDENTIFIER_FIXUP_3055.x = _RESERVED_IDENTIFIER_FIXUP_1911.x;
        _RESERVED_IDENTIFIER_FIXUP_3055.y = _RESERVED_IDENTIFIER_FIXUP_1911.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1921 = _RESERVED_IDENTIFIER_FIXUP_3051.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3059;
        _RESERVED_IDENTIFIER_FIXUP_3059.x = _RESERVED_IDENTIFIER_FIXUP_1921.x;
        _RESERVED_IDENTIFIER_FIXUP_3059.y = _RESERVED_IDENTIFIER_FIXUP_1921.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1931 = _RESERVED_IDENTIFIER_FIXUP_3051.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3063;
        _RESERVED_IDENTIFIER_FIXUP_3063.x = _RESERVED_IDENTIFIER_FIXUP_1931.x;
        _RESERVED_IDENTIFIER_FIXUP_3063.y = _RESERVED_IDENTIFIER_FIXUP_1931.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1941 = _RESERVED_IDENTIFIER_FIXUP_3051.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3067;
        _RESERVED_IDENTIFIER_FIXUP_3067.x = _RESERVED_IDENTIFIER_FIXUP_1941.x;
        _RESERVED_IDENTIFIER_FIXUP_3067.y = _RESERVED_IDENTIFIER_FIXUP_1941.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1949 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_1949.xy;
        float param_45 = _RESERVED_IDENTIFIER_FIXUP_1949.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1955 = hdLod5(param_44, param_45);
        _RESERVED_IDENTIFIER_FIXUP_3055.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3059.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3063.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3067.w = 0.0;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3055.xy;
        float param_47 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1955.y = hdLod5(param_46, param_47).x;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3059.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1955.z = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3063.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1955.w = hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2012 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1955 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3067.xy;
        float param_53 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2018 = hdLod5(param_52, param_53).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3051.y = _RESERVED_IDENTIFIER_FIXUP_2018;
        float _RESERVED_IDENTIFIER_FIXUP_2023 = float(_RESERVED_IDENTIFIER_FIXUP_2018 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3051.y = _RESERVED_IDENTIFIER_FIXUP_2023;
        float _RESERVED_IDENTIFIER_FIXUP_2026 = dot(_RESERVED_IDENTIFIER_FIXUP_2012, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3051.z = _RESERVED_IDENTIFIER_FIXUP_2026;
        float _RESERVED_IDENTIFIER_FIXUP_2032 = _RESERVED_IDENTIFIER_FIXUP_2023 + _RESERVED_IDENTIFIER_FIXUP_2026;
        _RESERVED_IDENTIFIER_FIXUP_3051.y = _RESERVED_IDENTIFIER_FIXUP_2032;
        float _RESERVED_IDENTIFIER_FIXUP_2037 = (_RESERVED_IDENTIFIER_FIXUP_2032 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3051.y = _RESERVED_IDENTIFIER_FIXUP_2037;
        _RESERVED_IDENTIFIER_FIXUP_3051.x = (_RESERVED_IDENTIFIER_FIXUP_1883 * _RESERVED_IDENTIFIER_FIXUP_2037) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3412 = _RESERVED_IDENTIFIER_FIXUP_2012;
        _RESERVED_IDENTIFIER_FIXUP_3411 = _RESERVED_IDENTIFIER_FIXUP_3051;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3049 = _RESERVED_IDENTIFIER_FIXUP_3039;
        _RESERVED_IDENTIFIER_FIXUP_3049.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3412 = _RESERVED_IDENTIFIER_FIXUP_1861;
        _RESERVED_IDENTIFIER_FIXUP_3411 = _RESERVED_IDENTIFIER_FIXUP_3049;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3123 = _RESERVED_IDENTIFIER_FIXUP_3411;
    _RESERVED_IDENTIFIER_FIXUP_3123.y = _RESERVED_IDENTIFIER_FIXUP_1257;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3413;
    if (_RESERVED_IDENTIFIER_FIXUP_1257 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2064 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3284 = _RESERVED_IDENTIFIER_FIXUP_3123;
        _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_2064.x;
        _RESERVED_IDENTIFIER_FIXUP_3284.z = _RESERVED_IDENTIFIER_FIXUP_2064.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2074 = _RESERVED_IDENTIFIER_FIXUP_3284.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3288;
        _RESERVED_IDENTIFIER_FIXUP_3288.x = _RESERVED_IDENTIFIER_FIXUP_2074.x;
        _RESERVED_IDENTIFIER_FIXUP_3288.y = _RESERVED_IDENTIFIER_FIXUP_2074.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2084 = _RESERVED_IDENTIFIER_FIXUP_3284.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3292;
        _RESERVED_IDENTIFIER_FIXUP_3292.x = _RESERVED_IDENTIFIER_FIXUP_2084.x;
        _RESERVED_IDENTIFIER_FIXUP_3292.y = _RESERVED_IDENTIFIER_FIXUP_2084.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2094 = _RESERVED_IDENTIFIER_FIXUP_3284.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3296;
        _RESERVED_IDENTIFIER_FIXUP_3296.x = _RESERVED_IDENTIFIER_FIXUP_2094.x;
        _RESERVED_IDENTIFIER_FIXUP_3296.y = _RESERVED_IDENTIFIER_FIXUP_2094.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2104 = _RESERVED_IDENTIFIER_FIXUP_3284.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3300;
        _RESERVED_IDENTIFIER_FIXUP_3300.x = _RESERVED_IDENTIFIER_FIXUP_2104.x;
        _RESERVED_IDENTIFIER_FIXUP_3300.y = _RESERVED_IDENTIFIER_FIXUP_2104.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2112 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2112.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2112.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2118 = hdLod6(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3288.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3292.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3296.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3300.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3288.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2118.y = hdLod6(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3292.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2118.z = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3296.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2118.w = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3300.xy;
        float param_63 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2181 = hdLod6(param_62, param_63).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_2181;
        float _RESERVED_IDENTIFIER_FIXUP_2186 = float(_RESERVED_IDENTIFIER_FIXUP_2181 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_2186;
        float _RESERVED_IDENTIFIER_FIXUP_2189 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2118 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3284.z = _RESERVED_IDENTIFIER_FIXUP_2189;
        float _RESERVED_IDENTIFIER_FIXUP_2195 = _RESERVED_IDENTIFIER_FIXUP_2186 + _RESERVED_IDENTIFIER_FIXUP_2189;
        _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_2195;
        _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_2195 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3413 = _RESERVED_IDENTIFIER_FIXUP_3284;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2208 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3128 = _RESERVED_IDENTIFIER_FIXUP_3123;
        _RESERVED_IDENTIFIER_FIXUP_3128.z = _RESERVED_IDENTIFIER_FIXUP_2208;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3414;
        if (_RESERVED_IDENTIFIER_FIXUP_2208 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2217 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3218 = _RESERVED_IDENTIFIER_FIXUP_3128;
            _RESERVED_IDENTIFIER_FIXUP_3218.z = _RESERVED_IDENTIFIER_FIXUP_2217.x;
            _RESERVED_IDENTIFIER_FIXUP_3218.w = _RESERVED_IDENTIFIER_FIXUP_2217.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2227 = _RESERVED_IDENTIFIER_FIXUP_3218.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3222;
            _RESERVED_IDENTIFIER_FIXUP_3222.x = _RESERVED_IDENTIFIER_FIXUP_2227.x;
            _RESERVED_IDENTIFIER_FIXUP_3222.y = _RESERVED_IDENTIFIER_FIXUP_2227.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2237 = _RESERVED_IDENTIFIER_FIXUP_3218.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3226;
            _RESERVED_IDENTIFIER_FIXUP_3226.x = _RESERVED_IDENTIFIER_FIXUP_2237.x;
            _RESERVED_IDENTIFIER_FIXUP_3226.y = _RESERVED_IDENTIFIER_FIXUP_2237.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2247 = _RESERVED_IDENTIFIER_FIXUP_3218.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3230;
            _RESERVED_IDENTIFIER_FIXUP_3230.x = _RESERVED_IDENTIFIER_FIXUP_2247.x;
            _RESERVED_IDENTIFIER_FIXUP_3230.y = _RESERVED_IDENTIFIER_FIXUP_2247.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2257 = _RESERVED_IDENTIFIER_FIXUP_3218.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3234;
            _RESERVED_IDENTIFIER_FIXUP_3234.x = _RESERVED_IDENTIFIER_FIXUP_2257.x;
            _RESERVED_IDENTIFIER_FIXUP_3234.y = _RESERVED_IDENTIFIER_FIXUP_2257.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2265 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_2265.xy;
            float param_65 = _RESERVED_IDENTIFIER_FIXUP_2265.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2271 = hdLod7(param_64, param_65);
            _RESERVED_IDENTIFIER_FIXUP_3222.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3226.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3230.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3234.w = 0.0;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3222.xy;
            float param_67 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2271.y = hdLod7(param_66, param_67).x;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3226.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2271.z = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3230.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2271.w = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3234.xy;
            float param_73 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2334 = hdLod7(param_72, param_73).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3218.z = _RESERVED_IDENTIFIER_FIXUP_2334;
            float _RESERVED_IDENTIFIER_FIXUP_2339 = float(_RESERVED_IDENTIFIER_FIXUP_2334 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3218.z = _RESERVED_IDENTIFIER_FIXUP_2339;
            float _RESERVED_IDENTIFIER_FIXUP_2342 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2271 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3218.w = _RESERVED_IDENTIFIER_FIXUP_2342;
            float _RESERVED_IDENTIFIER_FIXUP_2348 = _RESERVED_IDENTIFIER_FIXUP_2339 + _RESERVED_IDENTIFIER_FIXUP_2342;
            _RESERVED_IDENTIFIER_FIXUP_3218.z = _RESERVED_IDENTIFIER_FIXUP_2348;
            _RESERVED_IDENTIFIER_FIXUP_3218.y = _RESERVED_IDENTIFIER_FIXUP_2348 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3414 = _RESERVED_IDENTIFIER_FIXUP_3218;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3132 = _RESERVED_IDENTIFIER_FIXUP_3412;
            _RESERVED_IDENTIFIER_FIXUP_3132.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3132.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2364 = (_RESERVED_IDENTIFIER_FIXUP_3132.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3137;
            _RESERVED_IDENTIFIER_FIXUP_3137.x = _RESERVED_IDENTIFIER_FIXUP_2364.x;
            _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_2364.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2374 = _RESERVED_IDENTIFIER_FIXUP_3137.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3141;
            _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_2374.x;
            _RESERVED_IDENTIFIER_FIXUP_3141.y = _RESERVED_IDENTIFIER_FIXUP_2374.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2384 = _RESERVED_IDENTIFIER_FIXUP_3137.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3145;
            _RESERVED_IDENTIFIER_FIXUP_3145.x = _RESERVED_IDENTIFIER_FIXUP_2384.x;
            _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_2384.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2394 = _RESERVED_IDENTIFIER_FIXUP_3137.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3149;
            _RESERVED_IDENTIFIER_FIXUP_3149.x = _RESERVED_IDENTIFIER_FIXUP_2394.x;
            _RESERVED_IDENTIFIER_FIXUP_3149.y = _RESERVED_IDENTIFIER_FIXUP_2394.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2404 = _RESERVED_IDENTIFIER_FIXUP_3137.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3153;
            _RESERVED_IDENTIFIER_FIXUP_3153.x = _RESERVED_IDENTIFIER_FIXUP_2404.x;
            _RESERVED_IDENTIFIER_FIXUP_3153.y = _RESERVED_IDENTIFIER_FIXUP_2404.y;
            _RESERVED_IDENTIFIER_FIXUP_3137.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3137.xy;
            float param_75 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2418 = hdLod8(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3141.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3145.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3149.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3153.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3141.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2418.y = hdLod8(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3145.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2418.z = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3149.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2418.w = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3153.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2481 = hdLod8(param_82, param_83).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3193 = _RESERVED_IDENTIFIER_FIXUP_3128;
            _RESERVED_IDENTIFIER_FIXUP_3193.z = _RESERVED_IDENTIFIER_FIXUP_2481;
            float _RESERVED_IDENTIFIER_FIXUP_2486 = float(_RESERVED_IDENTIFIER_FIXUP_2481 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3193.z = _RESERVED_IDENTIFIER_FIXUP_2486;
            float _RESERVED_IDENTIFIER_FIXUP_2489 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2418 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3193.w = _RESERVED_IDENTIFIER_FIXUP_2489;
            float _RESERVED_IDENTIFIER_FIXUP_2495 = _RESERVED_IDENTIFIER_FIXUP_2486 + _RESERVED_IDENTIFIER_FIXUP_2489;
            _RESERVED_IDENTIFIER_FIXUP_3193.z = _RESERVED_IDENTIFIER_FIXUP_2495;
            float _RESERVED_IDENTIFIER_FIXUP_2503 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3193.w = _RESERVED_IDENTIFIER_FIXUP_2503;
            float _RESERVED_IDENTIFIER_FIXUP_2509 = clamp((_RESERVED_IDENTIFIER_FIXUP_2503 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3193.w = _RESERVED_IDENTIFIER_FIXUP_2509;
            float _RESERVED_IDENTIFIER_FIXUP_2514 = (_RESERVED_IDENTIFIER_FIXUP_2495 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3193.z = _RESERVED_IDENTIFIER_FIXUP_2514;
            _RESERVED_IDENTIFIER_FIXUP_3193.y = (_RESERVED_IDENTIFIER_FIXUP_2509 * _RESERVED_IDENTIFIER_FIXUP_2514) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3414 = _RESERVED_IDENTIFIER_FIXUP_3193;
        }
        _RESERVED_IDENTIFIER_FIXUP_3413 = _RESERVED_IDENTIFIER_FIXUP_3414;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2529 = min(_RESERVED_IDENTIFIER_FIXUP_3413.y, _RESERVED_IDENTIFIER_FIXUP_3413.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_3413;
    _RESERVED_IDENTIFIER_FIXUP_3355.x = (_RESERVED_IDENTIFIER_FIXUP_2529 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2540 = _RESERVED_IDENTIFIER_FIXUP_1870.xyz * _RESERVED_IDENTIFIER_FIXUP_3355.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3357 = _RESERVED_IDENTIFIER_FIXUP_3355;
    _RESERVED_IDENTIFIER_FIXUP_3357.x = _RESERVED_IDENTIFIER_FIXUP_2540.x;
    _RESERVED_IDENTIFIER_FIXUP_3357.y = _RESERVED_IDENTIFIER_FIXUP_2540.y;
    _RESERVED_IDENTIFIER_FIXUP_3357.z = _RESERVED_IDENTIFIER_FIXUP_2540.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2551 = _RESERVED_IDENTIFIER_FIXUP_3357.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3363 = _RESERVED_IDENTIFIER_FIXUP_3357;
    _RESERVED_IDENTIFIER_FIXUP_3363.x = _RESERVED_IDENTIFIER_FIXUP_2551.x;
    _RESERVED_IDENTIFIER_FIXUP_3363.y = _RESERVED_IDENTIFIER_FIXUP_2551.y;
    _RESERVED_IDENTIFIER_FIXUP_3363.z = _RESERVED_IDENTIFIER_FIXUP_2551.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2562 = _RESERVED_IDENTIFIER_FIXUP_3363.xyz + _RESERVED_IDENTIFIER_FIXUP_3363.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3369 = _RESERVED_IDENTIFIER_FIXUP_3363;
    _RESERVED_IDENTIFIER_FIXUP_3369.x = _RESERVED_IDENTIFIER_FIXUP_2562.x;
    _RESERVED_IDENTIFIER_FIXUP_3369.y = _RESERVED_IDENTIFIER_FIXUP_2562.y;
    _RESERVED_IDENTIFIER_FIXUP_3369.z = _RESERVED_IDENTIFIER_FIXUP_2562.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3422 = vec4(_RESERVED_IDENTIFIER_FIXUP_2529, _RESERVED_IDENTIFIER_FIXUP_1870.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2587 = (_RESERVED_IDENTIFIER_FIXUP_3422.yzw * _RESERVED_IDENTIFIER_FIXUP_3422.xxx) + _RESERVED_IDENTIFIER_FIXUP_3369.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3381 = _RESERVED_IDENTIFIER_FIXUP_3369;
    _RESERVED_IDENTIFIER_FIXUP_3381.x = _RESERVED_IDENTIFIER_FIXUP_2587.x;
    _RESERVED_IDENTIFIER_FIXUP_3381.y = _RESERVED_IDENTIFIER_FIXUP_2587.y;
    _RESERVED_IDENTIFIER_FIXUP_3381.z = _RESERVED_IDENTIFIER_FIXUP_2587.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2600 = _RESERVED_IDENTIFIER_FIXUP_3381.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3387 = _RESERVED_IDENTIFIER_FIXUP_3381;
    _RESERVED_IDENTIFIER_FIXUP_3387.x = _RESERVED_IDENTIFIER_FIXUP_2600.x;
    _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_2600.y;
    _RESERVED_IDENTIFIER_FIXUP_3387.z = _RESERVED_IDENTIFIER_FIXUP_2600.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3387.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_919 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_928;
    if (_RESERVED_IDENTIFIER_FIXUP_919)
    {
        _RESERVED_IDENTIFIER_FIXUP_928 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_928 = _RESERVED_IDENTIFIER_FIXUP_919;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_928)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_965 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3023.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_992 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2665;
    if (_RESERVED_IDENTIFIER_FIXUP_965 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2665 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_965), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_992);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2665 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_992);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2665;
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
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB117 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB117.x;
        r0.z = hdB117.y;
        vec2 hdB139 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB139.x;
        r1.y = hdB139.y;
        vec2 hdB150 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB150.x;
        r2.y = hdB150.y;
        vec2 hdB161 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB161.x;
        r4.y = hdB161.y;
        vec2 hdB172 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB172.x;
        r5.y = hdB172.y;
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
        vec2 hdB303 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB303.x;
        r0.z = hdB303.y;
        vec2 hdB313 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB313.x;
        r1.y = hdB313.y;
        vec2 hdB323 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB323.x;
        r2.y = hdB323.y;
        vec2 hdB333 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB333.x;
        r4.y = hdB333.y;
        vec2 hdB343 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB343.x;
        r5.y = hdB343.y;
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
            vec2 hdB458 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB458.x;
            r0.w = hdB458.y;
            vec2 hdB468 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = hdB468.x;
            r1.y = hdB468.y;
            vec2 hdB478 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB478.x;
            r2.y = hdB478.y;
            vec2 hdB488 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB488.x;
            r4.y = hdB488.y;
            vec2 hdB498 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB498.x;
            r5.y = hdB498.y;
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
            vec2 hdB606 = (r1.xy * vec2(0.5)) + vec2(0.5);
            r2.x = hdB606.x;
            r2.y = hdB606.y;
            vec2 hdB616 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB616.x;
            r4.y = hdB616.y;
            vec2 hdB626 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB626.x;
            r5.y = hdB626.y;
            vec2 hdB636 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB636.x;
            r6.y = hdB636.y;
            vec2 hdB646 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB646.x;
            r7.y = hdB646.y;
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
    vec4 hdB783 = r0;
    vec3 hdB785 = r3.xyz * hdB783.xxx;
    r0.x = hdB785.x;
    r0.y = hdB785.y;
    r0.z = hdB785.z;
    vec4 hdB792 = r0;
    vec3 hdB796 = hdB792.xyz * v0.xyz;
    r0.x = hdB796.x;
    r0.y = hdB796.y;
    r0.z = hdB796.z;
    vec4 hdB803 = r0;
    vec4 hdB805 = r0;
    vec3 hdB807 = hdB803.xyz + hdB805.xyz;
    r0.x = hdB807.x;
    r0.y = hdB807.y;
    r0.z = hdB807.z;
    vec3 hdB818 = r3.www * v1.xyz;
    r1.y = hdB818.x;
    r1.z = hdB818.y;
    r1.w = hdB818.z;
    vec4 hdB830 = r0;
    vec3 hdB832 = (r1.yzw * r1.xxx) + hdB830.xyz;
    r0.x = hdB832.x;
    r0.y = hdB832.y;
    r0.z = hdB832.z;
    vec4 hdB839 = r0;
    vec3 hdB846 = hdB839.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB846.x;
    r0.y = hdB846.y;
    r0.z = hdB846.z;
    vec3 hdB861 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB861.x;
    oC0.y = hdB861.y;
    oC0.z = hdB861.z;
    oC0.w = 1.0;
    bool hdB874 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB882;
    if (hdB874)
    {
        hdB882 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB882 = hdB874;
    }
    if (hdB882)
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
    bool _2961 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _2971;
    if (_2961)
    {
        _2971 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _2971 = _2961;
    }
    if (_2971)
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
        bool _2996 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3011;
        if (!_2996)
        {
            _3011 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3011 = _2996;
        }
        if (_3011)
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
