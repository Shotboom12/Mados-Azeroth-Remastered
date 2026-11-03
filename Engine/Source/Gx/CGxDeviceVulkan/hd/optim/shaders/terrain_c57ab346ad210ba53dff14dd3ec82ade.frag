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
float _RESERVED_IDENTIFIER_FIXUP_3278;
vec4 _RESERVED_IDENTIFIER_FIXUP_3279;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1045 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1049 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1053 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1057 = hdTex3(param_2);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1067 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1045, _RESERVED_IDENTIFIER_FIXUP_1049, _RESERVED_IDENTIFIER_FIXUP_1057.xxxx), _RESERVED_IDENTIFIER_FIXUP_1053, _RESERVED_IDENTIFIER_FIXUP_1057.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1074 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2621 = _RESERVED_IDENTIFIER_FIXUP_1049;
    _RESERVED_IDENTIFIER_FIXUP_2621.x = _RESERVED_IDENTIFIER_FIXUP_1074;
    float _RESERVED_IDENTIFIER_FIXUP_1080 = clamp((_RESERVED_IDENTIFIER_FIXUP_1074 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2621.x = _RESERVED_IDENTIFIER_FIXUP_1080;
    float _RESERVED_IDENTIFIER_FIXUP_1086 = ((-_RESERVED_IDENTIFIER_FIXUP_1080) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2621.y = _RESERVED_IDENTIFIER_FIXUP_1086;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3280;
    if (_RESERVED_IDENTIFIER_FIXUP_1086 != (-_RESERVED_IDENTIFIER_FIXUP_1086))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1098 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1108 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1110 = _RESERVED_IDENTIFIER_FIXUP_1108.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2634 = _RESERVED_IDENTIFIER_FIXUP_2621;
        _RESERVED_IDENTIFIER_FIXUP_2634.y = _RESERVED_IDENTIFIER_FIXUP_1110;
        _RESERVED_IDENTIFIER_FIXUP_2634.z = _RESERVED_IDENTIFIER_FIXUP_1108.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1118 = _RESERVED_IDENTIFIER_FIXUP_2634.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2638;
        _RESERVED_IDENTIFIER_FIXUP_2638.x = _RESERVED_IDENTIFIER_FIXUP_1118.x;
        _RESERVED_IDENTIFIER_FIXUP_2638.y = _RESERVED_IDENTIFIER_FIXUP_1118.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1125 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1129 = _RESERVED_IDENTIFIER_FIXUP_1125.y;
        _RESERVED_IDENTIFIER_FIXUP_2638.w = _RESERVED_IDENTIFIER_FIXUP_1129;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1098.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1098.w;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2638.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1129;
        float _RESERVED_IDENTIFIER_FIXUP_1140 = hdLod5(param_3, param_4).x + hdLod5(param_5, param_6).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3306 = vec4(_RESERVED_IDENTIFIER_FIXUP_1080, _RESERVED_IDENTIFIER_FIXUP_1110, _RESERVED_IDENTIFIER_FIXUP_1108.y, _RESERVED_IDENTIFIER_FIXUP_1140);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1147 = _RESERVED_IDENTIFIER_FIXUP_3306.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2651;
        _RESERVED_IDENTIFIER_FIXUP_2651.x = _RESERVED_IDENTIFIER_FIXUP_1147.x;
        _RESERVED_IDENTIFIER_FIXUP_2651.y = _RESERVED_IDENTIFIER_FIXUP_1147.y;
        _RESERVED_IDENTIFIER_FIXUP_2651.w = _RESERVED_IDENTIFIER_FIXUP_1129;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2651.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1129;
        float _RESERVED_IDENTIFIER_FIXUP_1169 = _RESERVED_IDENTIFIER_FIXUP_1140 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3306.w = _RESERVED_IDENTIFIER_FIXUP_1169;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1176 = _RESERVED_IDENTIFIER_FIXUP_3306.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2664;
        _RESERVED_IDENTIFIER_FIXUP_2664.x = _RESERVED_IDENTIFIER_FIXUP_1176.x;
        _RESERVED_IDENTIFIER_FIXUP_2664.y = _RESERVED_IDENTIFIER_FIXUP_1176.y;
        _RESERVED_IDENTIFIER_FIXUP_2664.w = _RESERVED_IDENTIFIER_FIXUP_1129;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2664.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1129;
        float _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_1169 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3306.w = _RESERVED_IDENTIFIER_FIXUP_1198;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_3306.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2677;
        _RESERVED_IDENTIFIER_FIXUP_2677.x = _RESERVED_IDENTIFIER_FIXUP_1205.x;
        _RESERVED_IDENTIFIER_FIXUP_2677.y = _RESERVED_IDENTIFIER_FIXUP_1205.y;
        _RESERVED_IDENTIFIER_FIXUP_2677.w = _RESERVED_IDENTIFIER_FIXUP_1129;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2677.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1129;
        float _RESERVED_IDENTIFIER_FIXUP_1227 = _RESERVED_IDENTIFIER_FIXUP_1198 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_1227;
        float _RESERVED_IDENTIFIER_FIXUP_1232 = (_RESERVED_IDENTIFIER_FIXUP_1227 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_1232;
        _RESERVED_IDENTIFIER_FIXUP_3306.x = (_RESERVED_IDENTIFIER_FIXUP_1080 * _RESERVED_IDENTIFIER_FIXUP_1232) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3280 = _RESERVED_IDENTIFIER_FIXUP_3306;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2631 = _RESERVED_IDENTIFIER_FIXUP_2621;
        _RESERVED_IDENTIFIER_FIXUP_2631.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3280 = _RESERVED_IDENTIFIER_FIXUP_2631;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1250 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2699 = _RESERVED_IDENTIFIER_FIXUP_3280;
    _RESERVED_IDENTIFIER_FIXUP_2699.y = _RESERVED_IDENTIFIER_FIXUP_1250;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3285;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3283;
    if (_RESERVED_IDENTIFIER_FIXUP_1250 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1259 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1269 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2839 = _RESERVED_IDENTIFIER_FIXUP_2699;
        _RESERVED_IDENTIFIER_FIXUP_2839.y = _RESERVED_IDENTIFIER_FIXUP_1269.x;
        _RESERVED_IDENTIFIER_FIXUP_2839.z = _RESERVED_IDENTIFIER_FIXUP_1269.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1279 = _RESERVED_IDENTIFIER_FIXUP_2839.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2843;
        _RESERVED_IDENTIFIER_FIXUP_2843.x = _RESERVED_IDENTIFIER_FIXUP_1279.x;
        _RESERVED_IDENTIFIER_FIXUP_2843.y = _RESERVED_IDENTIFIER_FIXUP_1279.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1286 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1290 = _RESERVED_IDENTIFIER_FIXUP_1286.y;
        _RESERVED_IDENTIFIER_FIXUP_2843.w = _RESERVED_IDENTIFIER_FIXUP_1290;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1259.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1259.w;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_2843.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1290;
        float _RESERVED_IDENTIFIER_FIXUP_1301 = hdLod6(param_13, param_14).x + hdLod6(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_2839.w = _RESERVED_IDENTIFIER_FIXUP_1301;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1308 = _RESERVED_IDENTIFIER_FIXUP_2839.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2856;
        _RESERVED_IDENTIFIER_FIXUP_2856.x = _RESERVED_IDENTIFIER_FIXUP_1308.x;
        _RESERVED_IDENTIFIER_FIXUP_2856.y = _RESERVED_IDENTIFIER_FIXUP_1308.y;
        _RESERVED_IDENTIFIER_FIXUP_2856.w = _RESERVED_IDENTIFIER_FIXUP_1290;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2856.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1290;
        float _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_1301 + hdLod6(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_2839.w = _RESERVED_IDENTIFIER_FIXUP_1330;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1337 = _RESERVED_IDENTIFIER_FIXUP_2839.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2869;
        _RESERVED_IDENTIFIER_FIXUP_2869.x = _RESERVED_IDENTIFIER_FIXUP_1337.x;
        _RESERVED_IDENTIFIER_FIXUP_2869.y = _RESERVED_IDENTIFIER_FIXUP_1337.y;
        _RESERVED_IDENTIFIER_FIXUP_2869.w = _RESERVED_IDENTIFIER_FIXUP_1290;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2869.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1290;
        float _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_1330 + hdLod6(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_2839.w = _RESERVED_IDENTIFIER_FIXUP_1359;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1366 = _RESERVED_IDENTIFIER_FIXUP_2839.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2882;
        _RESERVED_IDENTIFIER_FIXUP_2882.x = _RESERVED_IDENTIFIER_FIXUP_1366.x;
        _RESERVED_IDENTIFIER_FIXUP_2882.y = _RESERVED_IDENTIFIER_FIXUP_1366.y;
        _RESERVED_IDENTIFIER_FIXUP_2882.w = _RESERVED_IDENTIFIER_FIXUP_1290;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_2882.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1290;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1383 = hdLod6(param_21, param_22);
        float _RESERVED_IDENTIFIER_FIXUP_1388 = _RESERVED_IDENTIFIER_FIXUP_1359 + _RESERVED_IDENTIFIER_FIXUP_1383.x;
        _RESERVED_IDENTIFIER_FIXUP_2839.y = _RESERVED_IDENTIFIER_FIXUP_1388;
        _RESERVED_IDENTIFIER_FIXUP_2839.y = _RESERVED_IDENTIFIER_FIXUP_1388 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3285 = _RESERVED_IDENTIFIER_FIXUP_1383;
        _RESERVED_IDENTIFIER_FIXUP_3283 = _RESERVED_IDENTIFIER_FIXUP_2839;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1401 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2704 = _RESERVED_IDENTIFIER_FIXUP_2699;
        _RESERVED_IDENTIFIER_FIXUP_2704.z = _RESERVED_IDENTIFIER_FIXUP_1401;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3286;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3284;
        if (_RESERVED_IDENTIFIER_FIXUP_1401 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1410.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1410.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1416 = hdLod7(param_23, param_24);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1420 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2779 = _RESERVED_IDENTIFIER_FIXUP_2704;
            _RESERVED_IDENTIFIER_FIXUP_2779.z = _RESERVED_IDENTIFIER_FIXUP_1420.x;
            _RESERVED_IDENTIFIER_FIXUP_2779.w = _RESERVED_IDENTIFIER_FIXUP_1420.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1430 = _RESERVED_IDENTIFIER_FIXUP_2779.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2783;
            _RESERVED_IDENTIFIER_FIXUP_2783.x = _RESERVED_IDENTIFIER_FIXUP_1430.x;
            _RESERVED_IDENTIFIER_FIXUP_2783.y = _RESERVED_IDENTIFIER_FIXUP_1430.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1437 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1441 = _RESERVED_IDENTIFIER_FIXUP_1437.y;
            _RESERVED_IDENTIFIER_FIXUP_2783.w = _RESERVED_IDENTIFIER_FIXUP_1441;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_2783.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1441;
            float _RESERVED_IDENTIFIER_FIXUP_1452 = _RESERVED_IDENTIFIER_FIXUP_1416.x + hdLod7(param_25, param_26).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2794 = _RESERVED_IDENTIFIER_FIXUP_1416;
            _RESERVED_IDENTIFIER_FIXUP_2794.x = _RESERVED_IDENTIFIER_FIXUP_1452;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1459 = _RESERVED_IDENTIFIER_FIXUP_2779.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2796;
            _RESERVED_IDENTIFIER_FIXUP_2796.x = _RESERVED_IDENTIFIER_FIXUP_1459.x;
            _RESERVED_IDENTIFIER_FIXUP_2796.y = _RESERVED_IDENTIFIER_FIXUP_1459.y;
            _RESERVED_IDENTIFIER_FIXUP_2796.w = _RESERVED_IDENTIFIER_FIXUP_1441;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2796.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1441;
            float _RESERVED_IDENTIFIER_FIXUP_1481 = _RESERVED_IDENTIFIER_FIXUP_1452 + hdLod7(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_2794.x = _RESERVED_IDENTIFIER_FIXUP_1481;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1488 = _RESERVED_IDENTIFIER_FIXUP_2779.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2809;
            _RESERVED_IDENTIFIER_FIXUP_2809.x = _RESERVED_IDENTIFIER_FIXUP_1488.x;
            _RESERVED_IDENTIFIER_FIXUP_2809.y = _RESERVED_IDENTIFIER_FIXUP_1488.y;
            _RESERVED_IDENTIFIER_FIXUP_2809.w = _RESERVED_IDENTIFIER_FIXUP_1441;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2809.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1441;
            float _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_1481 + hdLod7(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_2794.x = _RESERVED_IDENTIFIER_FIXUP_1510;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_2779.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2822;
            _RESERVED_IDENTIFIER_FIXUP_2822.x = _RESERVED_IDENTIFIER_FIXUP_1517.x;
            _RESERVED_IDENTIFIER_FIXUP_2822.y = _RESERVED_IDENTIFIER_FIXUP_1517.y;
            _RESERVED_IDENTIFIER_FIXUP_2822.w = _RESERVED_IDENTIFIER_FIXUP_1441;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2822.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1441;
            float _RESERVED_IDENTIFIER_FIXUP_1539 = _RESERVED_IDENTIFIER_FIXUP_1510 + hdLod7(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_2779.z = _RESERVED_IDENTIFIER_FIXUP_1539;
            _RESERVED_IDENTIFIER_FIXUP_2779.y = _RESERVED_IDENTIFIER_FIXUP_1539 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3286 = _RESERVED_IDENTIFIER_FIXUP_2794;
            _RESERVED_IDENTIFIER_FIXUP_3284 = _RESERVED_IDENTIFIER_FIXUP_2779;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2708 = _RESERVED_IDENTIFIER_FIXUP_2704;
            _RESERVED_IDENTIFIER_FIXUP_2708.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2708.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1555 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1559 = _RESERVED_IDENTIFIER_FIXUP_1555.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3307 = vec4(_RESERVED_IDENTIFIER_FIXUP_1555.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1559);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1570 = _RESERVED_IDENTIFIER_FIXUP_3307.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3308 = vec4(_RESERVED_IDENTIFIER_FIXUP_1570 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1559);
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1570;
            float param_34 = _RESERVED_IDENTIFIER_FIXUP_1559;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3308.xy;
            float param_36 = _RESERVED_IDENTIFIER_FIXUP_1559;
            float _RESERVED_IDENTIFIER_FIXUP_1600 = hdLod8(param_33, param_34).x + hdLod8(param_35, param_36).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2735 = _RESERVED_IDENTIFIER_FIXUP_3307;
            _RESERVED_IDENTIFIER_FIXUP_2735.z = _RESERVED_IDENTIFIER_FIXUP_1600;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_2735.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2737 = _RESERVED_IDENTIFIER_FIXUP_3308;
            _RESERVED_IDENTIFIER_FIXUP_2737.x = _RESERVED_IDENTIFIER_FIXUP_1607.x;
            _RESERVED_IDENTIFIER_FIXUP_2737.y = _RESERVED_IDENTIFIER_FIXUP_1607.y;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2737.xy;
            float param_38 = _RESERVED_IDENTIFIER_FIXUP_1559;
            float _RESERVED_IDENTIFIER_FIXUP_1622 = _RESERVED_IDENTIFIER_FIXUP_1600 + hdLod8(param_37, param_38).x;
            _RESERVED_IDENTIFIER_FIXUP_2735.z = _RESERVED_IDENTIFIER_FIXUP_1622;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_2735.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2746 = _RESERVED_IDENTIFIER_FIXUP_2737;
            _RESERVED_IDENTIFIER_FIXUP_2746.x = _RESERVED_IDENTIFIER_FIXUP_1629.x;
            _RESERVED_IDENTIFIER_FIXUP_2746.y = _RESERVED_IDENTIFIER_FIXUP_1629.y;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2746.xy;
            float param_40 = _RESERVED_IDENTIFIER_FIXUP_1559;
            float _RESERVED_IDENTIFIER_FIXUP_1644 = _RESERVED_IDENTIFIER_FIXUP_1622 + hdLod8(param_39, param_40).x;
            _RESERVED_IDENTIFIER_FIXUP_2735.z = _RESERVED_IDENTIFIER_FIXUP_1644;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1651 = _RESERVED_IDENTIFIER_FIXUP_2735.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2755 = _RESERVED_IDENTIFIER_FIXUP_2746;
            _RESERVED_IDENTIFIER_FIXUP_2755.x = _RESERVED_IDENTIFIER_FIXUP_1651.x;
            _RESERVED_IDENTIFIER_FIXUP_2755.y = _RESERVED_IDENTIFIER_FIXUP_1651.y;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2755.xy;
            float param_42 = _RESERVED_IDENTIFIER_FIXUP_1559;
            float _RESERVED_IDENTIFIER_FIXUP_1666 = _RESERVED_IDENTIFIER_FIXUP_1644 + hdLod8(param_41, param_42).x;
            _RESERVED_IDENTIFIER_FIXUP_2735.x = _RESERVED_IDENTIFIER_FIXUP_1666;
            float _RESERVED_IDENTIFIER_FIXUP_1674 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2735.y = _RESERVED_IDENTIFIER_FIXUP_1674;
            float _RESERVED_IDENTIFIER_FIXUP_1680 = clamp((_RESERVED_IDENTIFIER_FIXUP_1674 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2708.z = _RESERVED_IDENTIFIER_FIXUP_1680;
            float _RESERVED_IDENTIFIER_FIXUP_1685 = (_RESERVED_IDENTIFIER_FIXUP_1666 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2708.w = _RESERVED_IDENTIFIER_FIXUP_1685;
            _RESERVED_IDENTIFIER_FIXUP_2708.y = (_RESERVED_IDENTIFIER_FIXUP_1680 * _RESERVED_IDENTIFIER_FIXUP_1685) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3286 = _RESERVED_IDENTIFIER_FIXUP_2735;
            _RESERVED_IDENTIFIER_FIXUP_3284 = _RESERVED_IDENTIFIER_FIXUP_2708;
        }
        _RESERVED_IDENTIFIER_FIXUP_3285 = _RESERVED_IDENTIFIER_FIXUP_3286;
        _RESERVED_IDENTIFIER_FIXUP_3283 = _RESERVED_IDENTIFIER_FIXUP_3284;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1700 = min(_RESERVED_IDENTIFIER_FIXUP_3283.y, _RESERVED_IDENTIFIER_FIXUP_3283.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2900 = _RESERVED_IDENTIFIER_FIXUP_3285;
    _RESERVED_IDENTIFIER_FIXUP_2900.x = _RESERVED_IDENTIFIER_FIXUP_1700;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2903 = _RESERVED_IDENTIFIER_FIXUP_3283;
    _RESERVED_IDENTIFIER_FIXUP_2903.x = (_RESERVED_IDENTIFIER_FIXUP_1700 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_1067.xyz * _RESERVED_IDENTIFIER_FIXUP_2903.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2905 = _RESERVED_IDENTIFIER_FIXUP_1067;
    _RESERVED_IDENTIFIER_FIXUP_2905.x = _RESERVED_IDENTIFIER_FIXUP_1711.x;
    _RESERVED_IDENTIFIER_FIXUP_2905.y = _RESERVED_IDENTIFIER_FIXUP_1711.y;
    _RESERVED_IDENTIFIER_FIXUP_2905.z = _RESERVED_IDENTIFIER_FIXUP_1711.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1722 = _RESERVED_IDENTIFIER_FIXUP_2905.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3278).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2911 = _RESERVED_IDENTIFIER_FIXUP_2905;
    _RESERVED_IDENTIFIER_FIXUP_2911.x = _RESERVED_IDENTIFIER_FIXUP_1722.x;
    _RESERVED_IDENTIFIER_FIXUP_2911.y = _RESERVED_IDENTIFIER_FIXUP_1722.y;
    _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1722.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1733 = _RESERVED_IDENTIFIER_FIXUP_2911.xyz + _RESERVED_IDENTIFIER_FIXUP_2911.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2917 = _RESERVED_IDENTIFIER_FIXUP_2911;
    _RESERVED_IDENTIFIER_FIXUP_2917.x = _RESERVED_IDENTIFIER_FIXUP_1733.x;
    _RESERVED_IDENTIFIER_FIXUP_2917.y = _RESERVED_IDENTIFIER_FIXUP_1733.y;
    _RESERVED_IDENTIFIER_FIXUP_2917.z = _RESERVED_IDENTIFIER_FIXUP_1733.z;
    _RESERVED_IDENTIFIER_FIXUP_2903.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2903.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_2903.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1758 = (_RESERVED_IDENTIFIER_FIXUP_2903.xyz * _RESERVED_IDENTIFIER_FIXUP_2900.xxx) + _RESERVED_IDENTIFIER_FIXUP_2917.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2929 = _RESERVED_IDENTIFIER_FIXUP_2917;
    _RESERVED_IDENTIFIER_FIXUP_2929.x = _RESERVED_IDENTIFIER_FIXUP_1758.x;
    _RESERVED_IDENTIFIER_FIXUP_2929.y = _RESERVED_IDENTIFIER_FIXUP_1758.y;
    _RESERVED_IDENTIFIER_FIXUP_2929.z = _RESERVED_IDENTIFIER_FIXUP_1758.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1771 = _RESERVED_IDENTIFIER_FIXUP_2929.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2935 = _RESERVED_IDENTIFIER_FIXUP_2929;
    _RESERVED_IDENTIFIER_FIXUP_2935.x = _RESERVED_IDENTIFIER_FIXUP_1771.x;
    _RESERVED_IDENTIFIER_FIXUP_2935.y = _RESERVED_IDENTIFIER_FIXUP_1771.y;
    _RESERVED_IDENTIFIER_FIXUP_2935.z = _RESERVED_IDENTIFIER_FIXUP_1771.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1826 = OptTex0( texcoord0.xyz);
    vec2 param_43 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1830 = hdTex1(param_43);
    vec2 param_44 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1834 = hdTex2(param_44);
    vec2 param_45 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1838 = hdTex3(param_45);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1848 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1826, _RESERVED_IDENTIFIER_FIXUP_1830, _RESERVED_IDENTIFIER_FIXUP_1838.xxxx), _RESERVED_IDENTIFIER_FIXUP_1834, _RESERVED_IDENTIFIER_FIXUP_1838.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2951 = _RESERVED_IDENTIFIER_FIXUP_1830;
    _RESERVED_IDENTIFIER_FIXUP_2951.x = _RESERVED_IDENTIFIER_FIXUP_1074;
    float _RESERVED_IDENTIFIER_FIXUP_1861 = clamp((_RESERVED_IDENTIFIER_FIXUP_1074 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2951.x = _RESERVED_IDENTIFIER_FIXUP_1861;
    float _RESERVED_IDENTIFIER_FIXUP_1867 = ((-_RESERVED_IDENTIFIER_FIXUP_1861) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2951.y = _RESERVED_IDENTIFIER_FIXUP_1867;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3293;
    if (_RESERVED_IDENTIFIER_FIXUP_1867 != (-_RESERVED_IDENTIFIER_FIXUP_1867))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1879 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1889 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1891 = _RESERVED_IDENTIFIER_FIXUP_1889.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2964 = _RESERVED_IDENTIFIER_FIXUP_2951;
        _RESERVED_IDENTIFIER_FIXUP_2964.y = _RESERVED_IDENTIFIER_FIXUP_1891;
        _RESERVED_IDENTIFIER_FIXUP_2964.z = _RESERVED_IDENTIFIER_FIXUP_1889.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1899 = _RESERVED_IDENTIFIER_FIXUP_2964.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2968;
        _RESERVED_IDENTIFIER_FIXUP_2968.x = _RESERVED_IDENTIFIER_FIXUP_1899.x;
        _RESERVED_IDENTIFIER_FIXUP_2968.y = _RESERVED_IDENTIFIER_FIXUP_1899.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1906 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1910 = _RESERVED_IDENTIFIER_FIXUP_1906.y;
        _RESERVED_IDENTIFIER_FIXUP_2968.w = _RESERVED_IDENTIFIER_FIXUP_1910;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_1879.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_1879.w;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2968.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_1910;
        float _RESERVED_IDENTIFIER_FIXUP_1921 = hdLod5(param_46, param_47).x + hdLod5(param_48, param_49).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3310 = vec4(_RESERVED_IDENTIFIER_FIXUP_1861, _RESERVED_IDENTIFIER_FIXUP_1891, _RESERVED_IDENTIFIER_FIXUP_1889.y, _RESERVED_IDENTIFIER_FIXUP_1921);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1928 = _RESERVED_IDENTIFIER_FIXUP_3310.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2981;
        _RESERVED_IDENTIFIER_FIXUP_2981.x = _RESERVED_IDENTIFIER_FIXUP_1928.x;
        _RESERVED_IDENTIFIER_FIXUP_2981.y = _RESERVED_IDENTIFIER_FIXUP_1928.y;
        _RESERVED_IDENTIFIER_FIXUP_2981.w = _RESERVED_IDENTIFIER_FIXUP_1910;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2981.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_1910;
        float _RESERVED_IDENTIFIER_FIXUP_1950 = _RESERVED_IDENTIFIER_FIXUP_1921 + hdLod5(param_50, param_51).x;
        _RESERVED_IDENTIFIER_FIXUP_3310.w = _RESERVED_IDENTIFIER_FIXUP_1950;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1957 = _RESERVED_IDENTIFIER_FIXUP_3310.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2994;
        _RESERVED_IDENTIFIER_FIXUP_2994.x = _RESERVED_IDENTIFIER_FIXUP_1957.x;
        _RESERVED_IDENTIFIER_FIXUP_2994.y = _RESERVED_IDENTIFIER_FIXUP_1957.y;
        _RESERVED_IDENTIFIER_FIXUP_2994.w = _RESERVED_IDENTIFIER_FIXUP_1910;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2994.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_1910;
        float _RESERVED_IDENTIFIER_FIXUP_1979 = _RESERVED_IDENTIFIER_FIXUP_1950 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3310.w = _RESERVED_IDENTIFIER_FIXUP_1979;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1986 = _RESERVED_IDENTIFIER_FIXUP_3310.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3007;
        _RESERVED_IDENTIFIER_FIXUP_3007.x = _RESERVED_IDENTIFIER_FIXUP_1986.x;
        _RESERVED_IDENTIFIER_FIXUP_3007.y = _RESERVED_IDENTIFIER_FIXUP_1986.y;
        _RESERVED_IDENTIFIER_FIXUP_3007.w = _RESERVED_IDENTIFIER_FIXUP_1910;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3007.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_1910;
        float _RESERVED_IDENTIFIER_FIXUP_2008 = _RESERVED_IDENTIFIER_FIXUP_1979 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2008;
        float _RESERVED_IDENTIFIER_FIXUP_2013 = (_RESERVED_IDENTIFIER_FIXUP_2008 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2013;
        _RESERVED_IDENTIFIER_FIXUP_3310.x = (_RESERVED_IDENTIFIER_FIXUP_1861 * _RESERVED_IDENTIFIER_FIXUP_2013) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3293 = _RESERVED_IDENTIFIER_FIXUP_3310;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2961 = _RESERVED_IDENTIFIER_FIXUP_2951;
        _RESERVED_IDENTIFIER_FIXUP_2961.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3293 = _RESERVED_IDENTIFIER_FIXUP_2961;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3029 = _RESERVED_IDENTIFIER_FIXUP_3293;
    _RESERVED_IDENTIFIER_FIXUP_3029.y = _RESERVED_IDENTIFIER_FIXUP_1250;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3298;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3296;
    if (_RESERVED_IDENTIFIER_FIXUP_1250 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2040 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2050 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3169 = _RESERVED_IDENTIFIER_FIXUP_3029;
        _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_2050.x;
        _RESERVED_IDENTIFIER_FIXUP_3169.z = _RESERVED_IDENTIFIER_FIXUP_2050.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2060 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3173;
        _RESERVED_IDENTIFIER_FIXUP_3173.x = _RESERVED_IDENTIFIER_FIXUP_2060.x;
        _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_2060.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2067 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2071 = _RESERVED_IDENTIFIER_FIXUP_2067.y;
        _RESERVED_IDENTIFIER_FIXUP_3173.w = _RESERVED_IDENTIFIER_FIXUP_2071;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2040.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2040.w;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3173.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2071;
        float _RESERVED_IDENTIFIER_FIXUP_2082 = hdLod6(param_56, param_57).x + hdLod6(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3169.w = _RESERVED_IDENTIFIER_FIXUP_2082;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2089 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3186;
        _RESERVED_IDENTIFIER_FIXUP_3186.x = _RESERVED_IDENTIFIER_FIXUP_2089.x;
        _RESERVED_IDENTIFIER_FIXUP_3186.y = _RESERVED_IDENTIFIER_FIXUP_2089.y;
        _RESERVED_IDENTIFIER_FIXUP_3186.w = _RESERVED_IDENTIFIER_FIXUP_2071;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3186.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2071;
        float _RESERVED_IDENTIFIER_FIXUP_2111 = _RESERVED_IDENTIFIER_FIXUP_2082 + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3169.w = _RESERVED_IDENTIFIER_FIXUP_2111;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2118 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3199;
        _RESERVED_IDENTIFIER_FIXUP_3199.x = _RESERVED_IDENTIFIER_FIXUP_2118.x;
        _RESERVED_IDENTIFIER_FIXUP_3199.y = _RESERVED_IDENTIFIER_FIXUP_2118.y;
        _RESERVED_IDENTIFIER_FIXUP_3199.w = _RESERVED_IDENTIFIER_FIXUP_2071;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3199.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2071;
        float _RESERVED_IDENTIFIER_FIXUP_2140 = _RESERVED_IDENTIFIER_FIXUP_2111 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3169.w = _RESERVED_IDENTIFIER_FIXUP_2140;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2147 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3212;
        _RESERVED_IDENTIFIER_FIXUP_3212.x = _RESERVED_IDENTIFIER_FIXUP_2147.x;
        _RESERVED_IDENTIFIER_FIXUP_3212.y = _RESERVED_IDENTIFIER_FIXUP_2147.y;
        _RESERVED_IDENTIFIER_FIXUP_3212.w = _RESERVED_IDENTIFIER_FIXUP_2071;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3212.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2071;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2164 = hdLod6(param_64, param_65);
        float _RESERVED_IDENTIFIER_FIXUP_2169 = _RESERVED_IDENTIFIER_FIXUP_2140 + _RESERVED_IDENTIFIER_FIXUP_2164.x;
        _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_2169;
        _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_2169 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3298 = _RESERVED_IDENTIFIER_FIXUP_2164;
        _RESERVED_IDENTIFIER_FIXUP_3296 = _RESERVED_IDENTIFIER_FIXUP_3169;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2182 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3034 = _RESERVED_IDENTIFIER_FIXUP_3029;
        _RESERVED_IDENTIFIER_FIXUP_3034.z = _RESERVED_IDENTIFIER_FIXUP_2182;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3299;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3297;
        if (_RESERVED_IDENTIFIER_FIXUP_2182 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2191 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2191.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2191.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2197 = hdLod7(param_66, param_67);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2201 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3109 = _RESERVED_IDENTIFIER_FIXUP_3034;
            _RESERVED_IDENTIFIER_FIXUP_3109.z = _RESERVED_IDENTIFIER_FIXUP_2201.x;
            _RESERVED_IDENTIFIER_FIXUP_3109.w = _RESERVED_IDENTIFIER_FIXUP_2201.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2211 = _RESERVED_IDENTIFIER_FIXUP_3109.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3113;
            _RESERVED_IDENTIFIER_FIXUP_3113.x = _RESERVED_IDENTIFIER_FIXUP_2211.x;
            _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_2211.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2218 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2222 = _RESERVED_IDENTIFIER_FIXUP_2218.y;
            _RESERVED_IDENTIFIER_FIXUP_3113.w = _RESERVED_IDENTIFIER_FIXUP_2222;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3113.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2222;
            float _RESERVED_IDENTIFIER_FIXUP_2233 = _RESERVED_IDENTIFIER_FIXUP_2197.x + hdLod7(param_68, param_69).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3124 = _RESERVED_IDENTIFIER_FIXUP_2197;
            _RESERVED_IDENTIFIER_FIXUP_3124.x = _RESERVED_IDENTIFIER_FIXUP_2233;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2240 = _RESERVED_IDENTIFIER_FIXUP_3109.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3126;
            _RESERVED_IDENTIFIER_FIXUP_3126.x = _RESERVED_IDENTIFIER_FIXUP_2240.x;
            _RESERVED_IDENTIFIER_FIXUP_3126.y = _RESERVED_IDENTIFIER_FIXUP_2240.y;
            _RESERVED_IDENTIFIER_FIXUP_3126.w = _RESERVED_IDENTIFIER_FIXUP_2222;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3126.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2222;
            float _RESERVED_IDENTIFIER_FIXUP_2262 = _RESERVED_IDENTIFIER_FIXUP_2233 + hdLod7(param_70, param_71).x;
            _RESERVED_IDENTIFIER_FIXUP_3124.x = _RESERVED_IDENTIFIER_FIXUP_2262;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2269 = _RESERVED_IDENTIFIER_FIXUP_3109.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3139;
            _RESERVED_IDENTIFIER_FIXUP_3139.x = _RESERVED_IDENTIFIER_FIXUP_2269.x;
            _RESERVED_IDENTIFIER_FIXUP_3139.y = _RESERVED_IDENTIFIER_FIXUP_2269.y;
            _RESERVED_IDENTIFIER_FIXUP_3139.w = _RESERVED_IDENTIFIER_FIXUP_2222;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3139.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2222;
            float _RESERVED_IDENTIFIER_FIXUP_2291 = _RESERVED_IDENTIFIER_FIXUP_2262 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3124.x = _RESERVED_IDENTIFIER_FIXUP_2291;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2298 = _RESERVED_IDENTIFIER_FIXUP_3109.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3152;
            _RESERVED_IDENTIFIER_FIXUP_3152.x = _RESERVED_IDENTIFIER_FIXUP_2298.x;
            _RESERVED_IDENTIFIER_FIXUP_3152.y = _RESERVED_IDENTIFIER_FIXUP_2298.y;
            _RESERVED_IDENTIFIER_FIXUP_3152.w = _RESERVED_IDENTIFIER_FIXUP_2222;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3152.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2222;
            float _RESERVED_IDENTIFIER_FIXUP_2320 = _RESERVED_IDENTIFIER_FIXUP_2291 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3109.z = _RESERVED_IDENTIFIER_FIXUP_2320;
            _RESERVED_IDENTIFIER_FIXUP_3109.y = _RESERVED_IDENTIFIER_FIXUP_2320 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3299 = _RESERVED_IDENTIFIER_FIXUP_3124;
            _RESERVED_IDENTIFIER_FIXUP_3297 = _RESERVED_IDENTIFIER_FIXUP_3109;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3038 = _RESERVED_IDENTIFIER_FIXUP_3034;
            _RESERVED_IDENTIFIER_FIXUP_3038.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3038.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2336 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2340 = _RESERVED_IDENTIFIER_FIXUP_2336.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3311 = vec4(_RESERVED_IDENTIFIER_FIXUP_2336.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2340);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2351 = _RESERVED_IDENTIFIER_FIXUP_3311.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3312 = vec4(_RESERVED_IDENTIFIER_FIXUP_2351 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2340);
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2351;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2340;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3312.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2340;
            float _RESERVED_IDENTIFIER_FIXUP_2381 = hdLod8(param_76, param_77).x + hdLod8(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3065 = _RESERVED_IDENTIFIER_FIXUP_3311;
            _RESERVED_IDENTIFIER_FIXUP_3065.z = _RESERVED_IDENTIFIER_FIXUP_2381;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2388 = _RESERVED_IDENTIFIER_FIXUP_3065.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3067 = _RESERVED_IDENTIFIER_FIXUP_3312;
            _RESERVED_IDENTIFIER_FIXUP_3067.x = _RESERVED_IDENTIFIER_FIXUP_2388.x;
            _RESERVED_IDENTIFIER_FIXUP_3067.y = _RESERVED_IDENTIFIER_FIXUP_2388.y;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3067.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2340;
            float _RESERVED_IDENTIFIER_FIXUP_2403 = _RESERVED_IDENTIFIER_FIXUP_2381 + hdLod8(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3065.z = _RESERVED_IDENTIFIER_FIXUP_2403;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2410 = _RESERVED_IDENTIFIER_FIXUP_3065.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3076 = _RESERVED_IDENTIFIER_FIXUP_3067;
            _RESERVED_IDENTIFIER_FIXUP_3076.x = _RESERVED_IDENTIFIER_FIXUP_2410.x;
            _RESERVED_IDENTIFIER_FIXUP_3076.y = _RESERVED_IDENTIFIER_FIXUP_2410.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3076.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2340;
            float _RESERVED_IDENTIFIER_FIXUP_2425 = _RESERVED_IDENTIFIER_FIXUP_2403 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3065.z = _RESERVED_IDENTIFIER_FIXUP_2425;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2432 = _RESERVED_IDENTIFIER_FIXUP_3065.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3085 = _RESERVED_IDENTIFIER_FIXUP_3076;
            _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_2432.x;
            _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_2432.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3085.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2340;
            float _RESERVED_IDENTIFIER_FIXUP_2447 = _RESERVED_IDENTIFIER_FIXUP_2425 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3065.x = _RESERVED_IDENTIFIER_FIXUP_2447;
            float _RESERVED_IDENTIFIER_FIXUP_2455 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3065.y = _RESERVED_IDENTIFIER_FIXUP_2455;
            float _RESERVED_IDENTIFIER_FIXUP_2461 = clamp((_RESERVED_IDENTIFIER_FIXUP_2455 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3038.z = _RESERVED_IDENTIFIER_FIXUP_2461;
            float _RESERVED_IDENTIFIER_FIXUP_2466 = (_RESERVED_IDENTIFIER_FIXUP_2447 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3038.w = _RESERVED_IDENTIFIER_FIXUP_2466;
            _RESERVED_IDENTIFIER_FIXUP_3038.y = (_RESERVED_IDENTIFIER_FIXUP_2461 * _RESERVED_IDENTIFIER_FIXUP_2466) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3299 = _RESERVED_IDENTIFIER_FIXUP_3065;
            _RESERVED_IDENTIFIER_FIXUP_3297 = _RESERVED_IDENTIFIER_FIXUP_3038;
        }
        _RESERVED_IDENTIFIER_FIXUP_3298 = _RESERVED_IDENTIFIER_FIXUP_3299;
        _RESERVED_IDENTIFIER_FIXUP_3296 = _RESERVED_IDENTIFIER_FIXUP_3297;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2481 = min(_RESERVED_IDENTIFIER_FIXUP_3296.y, _RESERVED_IDENTIFIER_FIXUP_3296.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3230 = _RESERVED_IDENTIFIER_FIXUP_3298;
    _RESERVED_IDENTIFIER_FIXUP_3230.x = _RESERVED_IDENTIFIER_FIXUP_2481;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3233 = _RESERVED_IDENTIFIER_FIXUP_3296;
    _RESERVED_IDENTIFIER_FIXUP_3233.x = (_RESERVED_IDENTIFIER_FIXUP_2481 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2492 = _RESERVED_IDENTIFIER_FIXUP_1848.xyz * _RESERVED_IDENTIFIER_FIXUP_3233.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3235 = _RESERVED_IDENTIFIER_FIXUP_1848;
    _RESERVED_IDENTIFIER_FIXUP_3235.x = _RESERVED_IDENTIFIER_FIXUP_2492.x;
    _RESERVED_IDENTIFIER_FIXUP_3235.y = _RESERVED_IDENTIFIER_FIXUP_2492.y;
    _RESERVED_IDENTIFIER_FIXUP_3235.z = _RESERVED_IDENTIFIER_FIXUP_2492.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2503 = _RESERVED_IDENTIFIER_FIXUP_3235.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3241 = _RESERVED_IDENTIFIER_FIXUP_3235;
    _RESERVED_IDENTIFIER_FIXUP_3241.x = _RESERVED_IDENTIFIER_FIXUP_2503.x;
    _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_2503.y;
    _RESERVED_IDENTIFIER_FIXUP_3241.z = _RESERVED_IDENTIFIER_FIXUP_2503.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2514 = _RESERVED_IDENTIFIER_FIXUP_3241.xyz + _RESERVED_IDENTIFIER_FIXUP_3241.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3247 = _RESERVED_IDENTIFIER_FIXUP_3241;
    _RESERVED_IDENTIFIER_FIXUP_3247.x = _RESERVED_IDENTIFIER_FIXUP_2514.x;
    _RESERVED_IDENTIFIER_FIXUP_3247.y = _RESERVED_IDENTIFIER_FIXUP_2514.y;
    _RESERVED_IDENTIFIER_FIXUP_3247.z = _RESERVED_IDENTIFIER_FIXUP_2514.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2525 = _RESERVED_IDENTIFIER_FIXUP_3247.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3233.x = _RESERVED_IDENTIFIER_FIXUP_2525.x;
    _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_2525.y;
    _RESERVED_IDENTIFIER_FIXUP_3233.z = _RESERVED_IDENTIFIER_FIXUP_2525.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2539 = (_RESERVED_IDENTIFIER_FIXUP_3233.xyz * _RESERVED_IDENTIFIER_FIXUP_3230.xxx) + _RESERVED_IDENTIFIER_FIXUP_3247.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3259 = _RESERVED_IDENTIFIER_FIXUP_3247;
    _RESERVED_IDENTIFIER_FIXUP_3259.x = _RESERVED_IDENTIFIER_FIXUP_2539.x;
    _RESERVED_IDENTIFIER_FIXUP_3259.y = _RESERVED_IDENTIFIER_FIXUP_2539.y;
    _RESERVED_IDENTIFIER_FIXUP_3259.z = _RESERVED_IDENTIFIER_FIXUP_2539.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2552 = _RESERVED_IDENTIFIER_FIXUP_3259.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3265 = _RESERVED_IDENTIFIER_FIXUP_3259;
    _RESERVED_IDENTIFIER_FIXUP_3265.x = _RESERVED_IDENTIFIER_FIXUP_2552.x;
    _RESERVED_IDENTIFIER_FIXUP_3265.y = _RESERVED_IDENTIFIER_FIXUP_2552.y;
    _RESERVED_IDENTIFIER_FIXUP_3265.z = _RESERVED_IDENTIFIER_FIXUP_2552.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3265.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_904 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_913;
    if (_RESERVED_IDENTIFIER_FIXUP_904)
    {
        _RESERVED_IDENTIFIER_FIXUP_913 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_913 = _RESERVED_IDENTIFIER_FIXUP_904;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_913)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_950 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_2935.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_977 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2611;
    if (_RESERVED_IDENTIFIER_FIXUP_950 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2611 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_950), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_977);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2611 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_977);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2611;
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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        vec2 hdB142 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB142.x;
        r1.z = hdB142.y;
        vec2 hdB164 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB164.x;
        r3.y = hdB164.y;
        vec2 hdB172 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB172.x;
        r3.w = hdB172.y;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r1.w = r2.x + r3.x;
        vec2 hdB195 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB195.x;
        r2.y = hdB195.y;
        vec2 hdB202 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB202.x;
        r2.w = hdB202.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.w += r2.x;
        vec2 hdB225 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB225.x;
        r2.y = hdB225.y;
        vec2 hdB232 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB232.x;
        r2.w = hdB232.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB255 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB255.x;
        r2.y = hdB255.y;
        vec2 hdB262 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB262.x;
        r2.w = hdB262.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.y = r1.w + r2.x;
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
        r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod6(param_13, param_14);
        vec2 hdB322 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB322.x;
        r1.z = hdB322.y;
        vec2 hdB332 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB332.x;
        r3.y = hdB332.y;
        vec2 hdB339 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB339.x;
        r3.w = hdB339.y;
        vec2 param_15 = r3.xy;
        float param_16 = r3.w;
        r3 = hdLod6(param_15, param_16);
        r1.w = r2.x + r3.x;
        vec2 hdB361 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB361.x;
        r2.y = hdB361.y;
        vec2 hdB368 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB368.x;
        r2.w = hdB368.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod6(param_17, param_18);
        r1.w += r2.x;
        vec2 hdB390 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB390.x;
        r2.y = hdB390.y;
        vec2 hdB397 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB397.x;
        r2.w = hdB397.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod6(param_19, param_20);
        r1.w += r2.x;
        vec2 hdB419 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB419.x;
        r2.y = hdB419.y;
        vec2 hdB426 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB426.x;
        r2.w = hdB426.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod6(param_21, param_22);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod7(param_23, param_24);
            vec2 hdB475 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB475.x;
            r1.w = hdB475.y;
            vec2 hdB485 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB485.x;
            r3.y = hdB485.y;
            vec2 hdB492 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB492.x;
            r3.w = hdB492.y;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod7(param_25, param_26);
            r2.x += r3.x;
            vec2 hdB514 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB514.x;
            r3.y = hdB514.y;
            vec2 hdB521 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB521.x;
            r3.w = hdB521.y;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r2.x += r3.x;
            vec2 hdB543 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB543.x;
            r3.y = hdB543.y;
            vec2 hdB550 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB550.x;
            r3.w = hdB550.y;
            vec2 param_29 = r3.xy;
            float param_30 = r3.w;
            r3 = hdLod7(param_29, param_30);
            r2.x += r3.x;
            vec2 hdB572 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB572.x;
            r3.y = hdB572.y;
            vec2 hdB579 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB579.x;
            r3.w = hdB579.y;
            vec2 param_31 = r3.xy;
            float param_32 = r3.w;
            r3 = hdLod7(param_31, param_32);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 hdB611 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB611.x;
            r2.w = hdB611.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_33 = r2.xy;
            float param_34 = r2.w;
            r3 = hdLod8(param_33, param_34);
            vec2 hdB636 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB636.x;
            r4.y = hdB636.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r5 = hdLod8(param_35, param_36);
            r2.z = r3.x + r5.x;
            vec2 hdB664 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB664.x;
            r4.y = hdB664.y;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r3 = hdLod8(param_37, param_38);
            r2.z += r3.x;
            vec2 hdB686 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB686.x;
            r4.y = hdB686.y;
            vec2 param_39 = r4.xy;
            float param_40 = r4.w;
            r3 = hdLod8(param_39, param_40);
            r2.z += r3.x;
            vec2 hdB708 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB708.x;
            r4.y = hdB708.y;
            vec2 param_41 = r4.xy;
            float param_42 = r4.w;
            r3 = hdLod8(param_41, param_42);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB766 = r0;
    vec3 hdB770 = hdB766.xyz * r1.xxx;
    r0.x = hdB770.x;
    r0.y = hdB770.y;
    r0.z = hdB770.z;
    vec4 hdB777 = r0;
    vec3 hdB781 = hdB777.xyz * v0.xyz;
    r0.x = hdB781.x;
    r0.y = hdB781.y;
    r0.z = hdB781.z;
    vec4 hdB788 = r0;
    vec4 hdB790 = r0;
    vec3 hdB792 = hdB788.xyz + hdB790.xyz;
    r0.x = hdB792.x;
    r0.y = hdB792.y;
    r0.z = hdB792.z;
    vec3 hdB803 = r0.www * v1.xyz;
    r1.x = hdB803.x;
    r1.y = hdB803.y;
    r1.z = hdB803.z;
    vec4 hdB815 = r0;
    vec3 hdB817 = (r1.xyz * r2.xxx) + hdB815.xyz;
    r0.x = hdB817.x;
    r0.y = hdB817.y;
    r0.z = hdB817.z;
    vec4 hdB824 = r0;
    vec3 hdB831 = hdB824.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB831.x;
    r0.y = hdB831.y;
    r0.z = hdB831.z;
    vec3 hdB846 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB846.x;
    oC0.y = hdB846.y;
    oC0.z = hdB846.z;
    oC0.w = 1.0;
    bool hdB859 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB867;
    if (hdB859)
    {
        hdB867 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB867 = hdB859;
    }
    if (hdB867)
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
    bool _3121 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3131;
    if (_3121)
    {
        _3131 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3131 = _3121;
    }
    if (_3131)
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
        bool _3156 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3171;
        if (!_3156)
        {
            _3171 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3171 = _3156;
        }
        if (_3171)
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
