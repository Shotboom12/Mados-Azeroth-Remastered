#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

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
float _RESERVED_IDENTIFIER_FIXUP_3724;
vec4 _RESERVED_IDENTIFIER_FIXUP_3725;


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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _64 = hdOverride >= 0;
    bool _84;
    if (_64)
    {
        _84 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _84 = _64;
    }
    vec4 _85;
    if (_84)
    {
        _85 = vec4(float(hdOverride));
    }
    else
    {
        _85 = value;
    }
    return _85;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _102 = hdOverride >= 0;
    bool _111;
    if (_102)
    {
        _111 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _111 = _102;
    }
    vec4 _112;
    if (_111)
    {
        _112 = vec4(float(hdOverride));
    }
    else
    {
        _112 = value;
    }
    return _112;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _129 = hdOverride >= 0;
    bool _139;
    if (_129)
    {
        _139 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _139 = _129;
    }
    vec4 _140;
    if (_139)
    {
        _140 = vec4(float(hdOverride));
    }
    else
    {
        _140 = value;
    }
    return _140;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _157 = hdOverride >= 0;
    bool _167;
    if (_157)
    {
        _167 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _167 = _157;
    }
    vec4 _168;
    if (_167)
    {
        _168 = vec4(float(hdOverride));
    }
    else
    {
        _168 = value;
    }
    return _168;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _186 = hdOverride >= 0;
    bool _196;
    if (_186)
    {
        _196 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _196 = _186;
    }
    vec4 _197;
    if (_196)
    {
        _197 = vec4(float(hdOverride));
    }
    else
    {
        _197 = value;
    }
    return _197;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _215 = hdOverride >= 0;
    bool _225;
    if (_215)
    {
        _225 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _225 = _215;
    }
    vec4 _226;
    if (_225)
    {
        _226 = vec4(float(hdOverride));
    }
    else
    {
        _226 = value;
    }
    return _226;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _244 = hdOverride >= 0;
    bool _254;
    if (_244)
    {
        _254 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _254 = _244;
    }
    vec4 _255;
    if (_254)
    {
        _255 = vec4(float(hdOverride));
    }
    else
    {
        _255 = value;
    }
    return _255;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _273 = hdOverride >= 0;
    bool _283;
    if (_273)
    {
        _283 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _283 = _273;
    }
    vec4 _284;
    if (_283)
    {
        _284 = vec4(float(hdOverride));
    }
    else
    {
        _284 = value;
    }
    return _284;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1149 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1153 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1157 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1161 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1165 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2925;
    _RESERVED_IDENTIFIER_FIXUP_2925.x = _RESERVED_IDENTIFIER_FIXUP_1165.x;
    _RESERVED_IDENTIFIER_FIXUP_2925.y = _RESERVED_IDENTIFIER_FIXUP_1165.y;
    float _RESERVED_IDENTIFIER_FIXUP_1171 = _RESERVED_IDENTIFIER_FIXUP_1165.z;
    _RESERVED_IDENTIFIER_FIXUP_2925.z = _RESERVED_IDENTIFIER_FIXUP_1171;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1173 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3724).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1176 = _RESERVED_IDENTIFIER_FIXUP_1173 + _RESERVED_IDENTIFIER_FIXUP_1173;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2931 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2931.x = _RESERVED_IDENTIFIER_FIXUP_1176.x;
    _RESERVED_IDENTIFIER_FIXUP_2931.y = _RESERVED_IDENTIFIER_FIXUP_1176.y;
    _RESERVED_IDENTIFIER_FIXUP_2931.z = _RESERVED_IDENTIFIER_FIXUP_1176.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_1149.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1187 = _RESERVED_IDENTIFIER_FIXUP_1184 * _RESERVED_IDENTIFIER_FIXUP_2931.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2937 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2937.x = _RESERVED_IDENTIFIER_FIXUP_1187.x;
    _RESERVED_IDENTIFIER_FIXUP_2937.y = _RESERVED_IDENTIFIER_FIXUP_1187.y;
    _RESERVED_IDENTIFIER_FIXUP_2937.z = _RESERVED_IDENTIFIER_FIXUP_1187.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1201 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2925.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = mix(_RESERVED_IDENTIFIER_FIXUP_2937.xyz, _RESERVED_IDENTIFIER_FIXUP_1184, _RESERVED_IDENTIFIER_FIXUP_1201);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2943 = _RESERVED_IDENTIFIER_FIXUP_1149;
    _RESERVED_IDENTIFIER_FIXUP_2943.x = _RESERVED_IDENTIFIER_FIXUP_1202.x;
    _RESERVED_IDENTIFIER_FIXUP_2943.y = _RESERVED_IDENTIFIER_FIXUP_1202.y;
    _RESERVED_IDENTIFIER_FIXUP_2943.z = _RESERVED_IDENTIFIER_FIXUP_1202.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1210 = _RESERVED_IDENTIFIER_FIXUP_1153.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1213 = _RESERVED_IDENTIFIER_FIXUP_1210 * _RESERVED_IDENTIFIER_FIXUP_2931.xyz;
    _RESERVED_IDENTIFIER_FIXUP_2937.x = _RESERVED_IDENTIFIER_FIXUP_1213.x;
    _RESERVED_IDENTIFIER_FIXUP_2937.y = _RESERVED_IDENTIFIER_FIXUP_1213.y;
    _RESERVED_IDENTIFIER_FIXUP_2937.z = _RESERVED_IDENTIFIER_FIXUP_1213.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1227 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2925.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1228 = mix(_RESERVED_IDENTIFIER_FIXUP_2937.xyz, _RESERVED_IDENTIFIER_FIXUP_1210, _RESERVED_IDENTIFIER_FIXUP_1227);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2955 = _RESERVED_IDENTIFIER_FIXUP_1153;
    _RESERVED_IDENTIFIER_FIXUP_2955.x = _RESERVED_IDENTIFIER_FIXUP_1228.x;
    _RESERVED_IDENTIFIER_FIXUP_2955.y = _RESERVED_IDENTIFIER_FIXUP_1228.y;
    _RESERVED_IDENTIFIER_FIXUP_2955.z = _RESERVED_IDENTIFIER_FIXUP_1228.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1236 = _RESERVED_IDENTIFIER_FIXUP_1157.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1236 * _RESERVED_IDENTIFIER_FIXUP_2931.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3750 = vec4(_RESERVED_IDENTIFIER_FIXUP_1239.xy, _RESERVED_IDENTIFIER_FIXUP_1171, _RESERVED_IDENTIFIER_FIXUP_1239.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1254 = mix(_RESERVED_IDENTIFIER_FIXUP_3750.xyw, _RESERVED_IDENTIFIER_FIXUP_1236, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3750.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2967 = _RESERVED_IDENTIFIER_FIXUP_1157;
    _RESERVED_IDENTIFIER_FIXUP_2967.x = _RESERVED_IDENTIFIER_FIXUP_1254.x;
    _RESERVED_IDENTIFIER_FIXUP_2967.y = _RESERVED_IDENTIFIER_FIXUP_1254.y;
    _RESERVED_IDENTIFIER_FIXUP_2967.z = _RESERVED_IDENTIFIER_FIXUP_1254.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2943, _RESERVED_IDENTIFIER_FIXUP_2955, _RESERVED_IDENTIFIER_FIXUP_1161.xxxx), _RESERVED_IDENTIFIER_FIXUP_2967, _RESERVED_IDENTIFIER_FIXUP_1161.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1277 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2975 = _RESERVED_IDENTIFIER_FIXUP_2955;
    _RESERVED_IDENTIFIER_FIXUP_2975.x = _RESERVED_IDENTIFIER_FIXUP_1277;
    float _RESERVED_IDENTIFIER_FIXUP_1283 = clamp((_RESERVED_IDENTIFIER_FIXUP_1277 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2975.x = _RESERVED_IDENTIFIER_FIXUP_1283;
    float _RESERVED_IDENTIFIER_FIXUP_1289 = ((-_RESERVED_IDENTIFIER_FIXUP_1283) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2975.y = _RESERVED_IDENTIFIER_FIXUP_1289;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3727;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3726;
    if (_RESERVED_IDENTIFIER_FIXUP_1289 != (-_RESERVED_IDENTIFIER_FIXUP_1289))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1301 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2987 = _RESERVED_IDENTIFIER_FIXUP_2975;
        _RESERVED_IDENTIFIER_FIXUP_2987.y = _RESERVED_IDENTIFIER_FIXUP_1301.x;
        _RESERVED_IDENTIFIER_FIXUP_2987.z = _RESERVED_IDENTIFIER_FIXUP_1301.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1311 = _RESERVED_IDENTIFIER_FIXUP_2987.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2991;
        _RESERVED_IDENTIFIER_FIXUP_2991.x = _RESERVED_IDENTIFIER_FIXUP_1311.x;
        _RESERVED_IDENTIFIER_FIXUP_2991.y = _RESERVED_IDENTIFIER_FIXUP_1311.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1321 = _RESERVED_IDENTIFIER_FIXUP_2987.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2995;
        _RESERVED_IDENTIFIER_FIXUP_2995.x = _RESERVED_IDENTIFIER_FIXUP_1321.x;
        _RESERVED_IDENTIFIER_FIXUP_2995.y = _RESERVED_IDENTIFIER_FIXUP_1321.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1331 = _RESERVED_IDENTIFIER_FIXUP_2987.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2999;
        _RESERVED_IDENTIFIER_FIXUP_2999.x = _RESERVED_IDENTIFIER_FIXUP_1331.x;
        _RESERVED_IDENTIFIER_FIXUP_2999.y = _RESERVED_IDENTIFIER_FIXUP_1331.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1341 = _RESERVED_IDENTIFIER_FIXUP_2987.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3003;
        _RESERVED_IDENTIFIER_FIXUP_3003.x = _RESERVED_IDENTIFIER_FIXUP_1341.x;
        _RESERVED_IDENTIFIER_FIXUP_3003.y = _RESERVED_IDENTIFIER_FIXUP_1341.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1349 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1349.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1349.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1355 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_2991.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2995.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2999.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3003.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2991.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1355.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2995.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1355.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2999.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1355.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1412 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1355 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3003.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1418 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2987.y = _RESERVED_IDENTIFIER_FIXUP_1418;
        float _RESERVED_IDENTIFIER_FIXUP_1423 = float(_RESERVED_IDENTIFIER_FIXUP_1418 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2987.y = _RESERVED_IDENTIFIER_FIXUP_1423;
        float _RESERVED_IDENTIFIER_FIXUP_1426 = dot(_RESERVED_IDENTIFIER_FIXUP_1412, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2987.z = _RESERVED_IDENTIFIER_FIXUP_1426;
        float _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_1423 + _RESERVED_IDENTIFIER_FIXUP_1426;
        _RESERVED_IDENTIFIER_FIXUP_2987.y = _RESERVED_IDENTIFIER_FIXUP_1432;
        float _RESERVED_IDENTIFIER_FIXUP_1437 = (_RESERVED_IDENTIFIER_FIXUP_1432 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2987.y = _RESERVED_IDENTIFIER_FIXUP_1437;
        _RESERVED_IDENTIFIER_FIXUP_2987.x = (_RESERVED_IDENTIFIER_FIXUP_1283 * _RESERVED_IDENTIFIER_FIXUP_1437) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3727 = _RESERVED_IDENTIFIER_FIXUP_1412;
        _RESERVED_IDENTIFIER_FIXUP_3726 = _RESERVED_IDENTIFIER_FIXUP_2987;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2985 = _RESERVED_IDENTIFIER_FIXUP_2975;
        _RESERVED_IDENTIFIER_FIXUP_2985.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3727 = _RESERVED_IDENTIFIER_FIXUP_2967;
        _RESERVED_IDENTIFIER_FIXUP_3726 = _RESERVED_IDENTIFIER_FIXUP_2985;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1455 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3059 = _RESERVED_IDENTIFIER_FIXUP_3726;
    _RESERVED_IDENTIFIER_FIXUP_3059.y = _RESERVED_IDENTIFIER_FIXUP_1455;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3730;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3728;
    if (_RESERVED_IDENTIFIER_FIXUP_1455 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1464 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3220 = _RESERVED_IDENTIFIER_FIXUP_3059;
        _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1464.x;
        _RESERVED_IDENTIFIER_FIXUP_3220.z = _RESERVED_IDENTIFIER_FIXUP_1464.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_3220.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3224;
        _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_1474.x;
        _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_1474.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1484 = _RESERVED_IDENTIFIER_FIXUP_3220.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
        _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_1484.x;
        _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_1484.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1494 = _RESERVED_IDENTIFIER_FIXUP_3220.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3232;
        _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_1494.x;
        _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_1494.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_3220.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3236;
        _RESERVED_IDENTIFIER_FIXUP_3236.x = _RESERVED_IDENTIFIER_FIXUP_1504.x;
        _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_1504.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1512 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1512.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1512.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1518 = hdLod6(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_3224.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3228.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3232.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3236.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3224.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1518.y = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3228.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1518.z = hdLod6(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3232.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1518.w = hdLod6(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1575 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1518 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3236.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1581 = hdLod6(param_22, param_23).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1581;
        float _RESERVED_IDENTIFIER_FIXUP_1586 = float(_RESERVED_IDENTIFIER_FIXUP_1581 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1586;
        float _RESERVED_IDENTIFIER_FIXUP_1589 = dot(_RESERVED_IDENTIFIER_FIXUP_1575, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3220.z = _RESERVED_IDENTIFIER_FIXUP_1589;
        float _RESERVED_IDENTIFIER_FIXUP_1595 = _RESERVED_IDENTIFIER_FIXUP_1586 + _RESERVED_IDENTIFIER_FIXUP_1589;
        _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1595;
        _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1595 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3730 = _RESERVED_IDENTIFIER_FIXUP_1575;
        _RESERVED_IDENTIFIER_FIXUP_3728 = _RESERVED_IDENTIFIER_FIXUP_3220;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1608 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3064 = _RESERVED_IDENTIFIER_FIXUP_3059;
        _RESERVED_IDENTIFIER_FIXUP_3064.z = _RESERVED_IDENTIFIER_FIXUP_1608;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3731;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3729;
        if (_RESERVED_IDENTIFIER_FIXUP_1608 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1617 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3154 = _RESERVED_IDENTIFIER_FIXUP_3064;
            _RESERVED_IDENTIFIER_FIXUP_3154.z = _RESERVED_IDENTIFIER_FIXUP_1617.x;
            _RESERVED_IDENTIFIER_FIXUP_3154.w = _RESERVED_IDENTIFIER_FIXUP_1617.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1627 = _RESERVED_IDENTIFIER_FIXUP_3154.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3158;
            _RESERVED_IDENTIFIER_FIXUP_3158.x = _RESERVED_IDENTIFIER_FIXUP_1627.x;
            _RESERVED_IDENTIFIER_FIXUP_3158.y = _RESERVED_IDENTIFIER_FIXUP_1627.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1637 = _RESERVED_IDENTIFIER_FIXUP_3154.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3162;
            _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1637.x;
            _RESERVED_IDENTIFIER_FIXUP_3162.y = _RESERVED_IDENTIFIER_FIXUP_1637.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1647 = _RESERVED_IDENTIFIER_FIXUP_3154.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3166;
            _RESERVED_IDENTIFIER_FIXUP_3166.x = _RESERVED_IDENTIFIER_FIXUP_1647.x;
            _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_1647.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1657 = _RESERVED_IDENTIFIER_FIXUP_3154.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3170;
            _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_1657.x;
            _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1657.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1665 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1665.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1665.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1671 = hdLod7(param_24, param_25);
            _RESERVED_IDENTIFIER_FIXUP_3158.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3162.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3166.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3170.w = 0.0;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3158.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1671.y = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3162.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1671.z = hdLod7(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3166.xy;
            float param_31 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1671.w = hdLod7(param_30, param_31).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1728 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1671 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3170.xy;
            float param_33 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1734 = hdLod7(param_32, param_33).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3154.z = _RESERVED_IDENTIFIER_FIXUP_1734;
            float _RESERVED_IDENTIFIER_FIXUP_1739 = float(_RESERVED_IDENTIFIER_FIXUP_1734 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3154.z = _RESERVED_IDENTIFIER_FIXUP_1739;
            float _RESERVED_IDENTIFIER_FIXUP_1742 = dot(_RESERVED_IDENTIFIER_FIXUP_1728, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3154.w = _RESERVED_IDENTIFIER_FIXUP_1742;
            float _RESERVED_IDENTIFIER_FIXUP_1748 = _RESERVED_IDENTIFIER_FIXUP_1739 + _RESERVED_IDENTIFIER_FIXUP_1742;
            _RESERVED_IDENTIFIER_FIXUP_3154.z = _RESERVED_IDENTIFIER_FIXUP_1748;
            _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_1748 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3731 = _RESERVED_IDENTIFIER_FIXUP_1728;
            _RESERVED_IDENTIFIER_FIXUP_3729 = _RESERVED_IDENTIFIER_FIXUP_3154;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3068 = _RESERVED_IDENTIFIER_FIXUP_3727;
            _RESERVED_IDENTIFIER_FIXUP_3068.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3068.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1764 = (_RESERVED_IDENTIFIER_FIXUP_3068.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3073;
            _RESERVED_IDENTIFIER_FIXUP_3073.x = _RESERVED_IDENTIFIER_FIXUP_1764.x;
            _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1764.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1774 = _RESERVED_IDENTIFIER_FIXUP_3073.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3077;
            _RESERVED_IDENTIFIER_FIXUP_3077.x = _RESERVED_IDENTIFIER_FIXUP_1774.x;
            _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_1774.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1784 = _RESERVED_IDENTIFIER_FIXUP_3073.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3081;
            _RESERVED_IDENTIFIER_FIXUP_3081.x = _RESERVED_IDENTIFIER_FIXUP_1784.x;
            _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1784.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1794 = _RESERVED_IDENTIFIER_FIXUP_3073.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3085;
            _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_1794.x;
            _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1794.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1804 = _RESERVED_IDENTIFIER_FIXUP_3073.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3089;
            _RESERVED_IDENTIFIER_FIXUP_3089.x = _RESERVED_IDENTIFIER_FIXUP_1804.x;
            _RESERVED_IDENTIFIER_FIXUP_3089.y = _RESERVED_IDENTIFIER_FIXUP_1804.y;
            _RESERVED_IDENTIFIER_FIXUP_3073.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3073.xy;
            float param_35 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1818 = hdLod8(param_34, param_35);
            _RESERVED_IDENTIFIER_FIXUP_3077.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3081.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3085.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3089.w = 0.0;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3077.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1818.y = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3081.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1818.z = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3085.xy;
            float param_41 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1818.w = hdLod8(param_40, param_41).x;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3089.xy;
            float param_43 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1881 = hdLod8(param_42, param_43).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3129 = _RESERVED_IDENTIFIER_FIXUP_3064;
            _RESERVED_IDENTIFIER_FIXUP_3129.z = _RESERVED_IDENTIFIER_FIXUP_1881;
            float _RESERVED_IDENTIFIER_FIXUP_1886 = float(_RESERVED_IDENTIFIER_FIXUP_1881 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3129.z = _RESERVED_IDENTIFIER_FIXUP_1886;
            float _RESERVED_IDENTIFIER_FIXUP_1889 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1818 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3129.w = _RESERVED_IDENTIFIER_FIXUP_1889;
            float _RESERVED_IDENTIFIER_FIXUP_1895 = _RESERVED_IDENTIFIER_FIXUP_1886 + _RESERVED_IDENTIFIER_FIXUP_1889;
            _RESERVED_IDENTIFIER_FIXUP_3129.z = _RESERVED_IDENTIFIER_FIXUP_1895;
            float _RESERVED_IDENTIFIER_FIXUP_1903 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3129.w = _RESERVED_IDENTIFIER_FIXUP_1903;
            float _RESERVED_IDENTIFIER_FIXUP_1909 = clamp((_RESERVED_IDENTIFIER_FIXUP_1903 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3129.w = _RESERVED_IDENTIFIER_FIXUP_1909;
            float _RESERVED_IDENTIFIER_FIXUP_1914 = (_RESERVED_IDENTIFIER_FIXUP_1895 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3129.z = _RESERVED_IDENTIFIER_FIXUP_1914;
            _RESERVED_IDENTIFIER_FIXUP_3129.y = (_RESERVED_IDENTIFIER_FIXUP_1909 * _RESERVED_IDENTIFIER_FIXUP_1914) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3731 = _RESERVED_IDENTIFIER_FIXUP_3068;
            _RESERVED_IDENTIFIER_FIXUP_3729 = _RESERVED_IDENTIFIER_FIXUP_3129;
        }
        _RESERVED_IDENTIFIER_FIXUP_3730 = _RESERVED_IDENTIFIER_FIXUP_3731;
        _RESERVED_IDENTIFIER_FIXUP_3728 = _RESERVED_IDENTIFIER_FIXUP_3729;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1929 = min(_RESERVED_IDENTIFIER_FIXUP_3728.y, _RESERVED_IDENTIFIER_FIXUP_3728.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3288 = _RESERVED_IDENTIFIER_FIXUP_3730;
    _RESERVED_IDENTIFIER_FIXUP_3288.x = _RESERVED_IDENTIFIER_FIXUP_1929;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3751 = vec4((_RESERVED_IDENTIFIER_FIXUP_1929 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1951 = _RESERVED_IDENTIFIER_FIXUP_3288.xxx * _RESERVED_IDENTIFIER_FIXUP_3751.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3299 = _RESERVED_IDENTIFIER_FIXUP_3751;
    _RESERVED_IDENTIFIER_FIXUP_3299.y = _RESERVED_IDENTIFIER_FIXUP_1951.x;
    _RESERVED_IDENTIFIER_FIXUP_3299.z = _RESERVED_IDENTIFIER_FIXUP_1951.y;
    _RESERVED_IDENTIFIER_FIXUP_3299.w = _RESERVED_IDENTIFIER_FIXUP_1951.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1965 = (_RESERVED_IDENTIFIER_FIXUP_1270.xyz * _RESERVED_IDENTIFIER_FIXUP_3299.xxx) + _RESERVED_IDENTIFIER_FIXUP_3299.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3305 = _RESERVED_IDENTIFIER_FIXUP_1270;
    _RESERVED_IDENTIFIER_FIXUP_3305.x = _RESERVED_IDENTIFIER_FIXUP_1965.x;
    _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_1965.y;
    _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_1965.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1978 = _RESERVED_IDENTIFIER_FIXUP_3305.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3311 = _RESERVED_IDENTIFIER_FIXUP_3305;
    _RESERVED_IDENTIFIER_FIXUP_3311.x = _RESERVED_IDENTIFIER_FIXUP_1978.x;
    _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_1978.y;
    _RESERVED_IDENTIFIER_FIXUP_3311.z = _RESERVED_IDENTIFIER_FIXUP_1978.z;
    vec2 param_44 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2035 = hdTex0(param_44);
    vec2 param_45 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2039 = hdTex1(param_45);
    vec2 param_46 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2043 = hdTex2(param_46);
    vec2 param_47 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2047 = hdTex3(param_47);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2062 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3331 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3331.x = _RESERVED_IDENTIFIER_FIXUP_2062.x;
    _RESERVED_IDENTIFIER_FIXUP_3331.y = _RESERVED_IDENTIFIER_FIXUP_2062.y;
    _RESERVED_IDENTIFIER_FIXUP_3331.z = _RESERVED_IDENTIFIER_FIXUP_2062.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2070 = _RESERVED_IDENTIFIER_FIXUP_2035.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2073 = _RESERVED_IDENTIFIER_FIXUP_2070 * _RESERVED_IDENTIFIER_FIXUP_3331.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3337 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_2073.x;
    _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_2073.y;
    _RESERVED_IDENTIFIER_FIXUP_3337.z = _RESERVED_IDENTIFIER_FIXUP_2073.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2088 = mix(_RESERVED_IDENTIFIER_FIXUP_3337.xyz, _RESERVED_IDENTIFIER_FIXUP_2070, _RESERVED_IDENTIFIER_FIXUP_1201);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3343 = _RESERVED_IDENTIFIER_FIXUP_2035;
    _RESERVED_IDENTIFIER_FIXUP_3343.x = _RESERVED_IDENTIFIER_FIXUP_2088.x;
    _RESERVED_IDENTIFIER_FIXUP_3343.y = _RESERVED_IDENTIFIER_FIXUP_2088.y;
    _RESERVED_IDENTIFIER_FIXUP_3343.z = _RESERVED_IDENTIFIER_FIXUP_2088.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2096 = _RESERVED_IDENTIFIER_FIXUP_2039.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2099 = _RESERVED_IDENTIFIER_FIXUP_2096 * _RESERVED_IDENTIFIER_FIXUP_3331.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3337.x = _RESERVED_IDENTIFIER_FIXUP_2099.x;
    _RESERVED_IDENTIFIER_FIXUP_3337.y = _RESERVED_IDENTIFIER_FIXUP_2099.y;
    _RESERVED_IDENTIFIER_FIXUP_3337.z = _RESERVED_IDENTIFIER_FIXUP_2099.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2114 = mix(_RESERVED_IDENTIFIER_FIXUP_3337.xyz, _RESERVED_IDENTIFIER_FIXUP_2096, _RESERVED_IDENTIFIER_FIXUP_1227);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_2039;
    _RESERVED_IDENTIFIER_FIXUP_3355.x = _RESERVED_IDENTIFIER_FIXUP_2114.x;
    _RESERVED_IDENTIFIER_FIXUP_3355.y = _RESERVED_IDENTIFIER_FIXUP_2114.y;
    _RESERVED_IDENTIFIER_FIXUP_3355.z = _RESERVED_IDENTIFIER_FIXUP_2114.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2122 = _RESERVED_IDENTIFIER_FIXUP_2043.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2125 = _RESERVED_IDENTIFIER_FIXUP_2122 * _RESERVED_IDENTIFIER_FIXUP_3331.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3753 = vec4(_RESERVED_IDENTIFIER_FIXUP_2125.xy, _RESERVED_IDENTIFIER_FIXUP_1171, _RESERVED_IDENTIFIER_FIXUP_2125.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2140 = mix(_RESERVED_IDENTIFIER_FIXUP_3753.xyw, _RESERVED_IDENTIFIER_FIXUP_2122, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3753.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3367 = _RESERVED_IDENTIFIER_FIXUP_2043;
    _RESERVED_IDENTIFIER_FIXUP_3367.x = _RESERVED_IDENTIFIER_FIXUP_2140.x;
    _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_2140.y;
    _RESERVED_IDENTIFIER_FIXUP_3367.z = _RESERVED_IDENTIFIER_FIXUP_2140.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2156 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3343, _RESERVED_IDENTIFIER_FIXUP_3355, _RESERVED_IDENTIFIER_FIXUP_2047.xxxx), _RESERVED_IDENTIFIER_FIXUP_3367, _RESERVED_IDENTIFIER_FIXUP_2047.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3375 = _RESERVED_IDENTIFIER_FIXUP_3355;
    _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_1277;
    float _RESERVED_IDENTIFIER_FIXUP_2169 = clamp((_RESERVED_IDENTIFIER_FIXUP_1277 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_2169;
    float _RESERVED_IDENTIFIER_FIXUP_2175 = ((-_RESERVED_IDENTIFIER_FIXUP_2169) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3375.y = _RESERVED_IDENTIFIER_FIXUP_2175;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3739;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3738;
    if (_RESERVED_IDENTIFIER_FIXUP_2175 != (-_RESERVED_IDENTIFIER_FIXUP_2175))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2187 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3387 = _RESERVED_IDENTIFIER_FIXUP_3375;
        _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_2187.x;
        _RESERVED_IDENTIFIER_FIXUP_3387.z = _RESERVED_IDENTIFIER_FIXUP_2187.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2197 = _RESERVED_IDENTIFIER_FIXUP_3387.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3391;
        _RESERVED_IDENTIFIER_FIXUP_3391.x = _RESERVED_IDENTIFIER_FIXUP_2197.x;
        _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_2197.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2207 = _RESERVED_IDENTIFIER_FIXUP_3387.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3395;
        _RESERVED_IDENTIFIER_FIXUP_3395.x = _RESERVED_IDENTIFIER_FIXUP_2207.x;
        _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_2207.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2217 = _RESERVED_IDENTIFIER_FIXUP_3387.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3399;
        _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_2217.x;
        _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2217.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2227 = _RESERVED_IDENTIFIER_FIXUP_3387.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3403;
        _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_2227.x;
        _RESERVED_IDENTIFIER_FIXUP_3403.y = _RESERVED_IDENTIFIER_FIXUP_2227.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2235 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2235.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2235.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2241 = hdLod5(param_48, param_49);
        _RESERVED_IDENTIFIER_FIXUP_3391.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3395.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3399.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3403.w = 0.0;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3391.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2241.y = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3395.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2241.z = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3399.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2241.w = hdLod5(param_54, param_55).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2298 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2241 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3403.xy;
        float param_57 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2304 = hdLod5(param_56, param_57).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_2304;
        float _RESERVED_IDENTIFIER_FIXUP_2309 = float(_RESERVED_IDENTIFIER_FIXUP_2304 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_2309;
        float _RESERVED_IDENTIFIER_FIXUP_2312 = dot(_RESERVED_IDENTIFIER_FIXUP_2298, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3387.z = _RESERVED_IDENTIFIER_FIXUP_2312;
        float _RESERVED_IDENTIFIER_FIXUP_2318 = _RESERVED_IDENTIFIER_FIXUP_2309 + _RESERVED_IDENTIFIER_FIXUP_2312;
        _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_2318;
        float _RESERVED_IDENTIFIER_FIXUP_2323 = (_RESERVED_IDENTIFIER_FIXUP_2318 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_2323;
        _RESERVED_IDENTIFIER_FIXUP_3387.x = (_RESERVED_IDENTIFIER_FIXUP_2169 * _RESERVED_IDENTIFIER_FIXUP_2323) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3739 = _RESERVED_IDENTIFIER_FIXUP_2298;
        _RESERVED_IDENTIFIER_FIXUP_3738 = _RESERVED_IDENTIFIER_FIXUP_3387;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3385 = _RESERVED_IDENTIFIER_FIXUP_3375;
        _RESERVED_IDENTIFIER_FIXUP_3385.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3739 = _RESERVED_IDENTIFIER_FIXUP_3367;
        _RESERVED_IDENTIFIER_FIXUP_3738 = _RESERVED_IDENTIFIER_FIXUP_3385;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3459 = _RESERVED_IDENTIFIER_FIXUP_3738;
    _RESERVED_IDENTIFIER_FIXUP_3459.y = _RESERVED_IDENTIFIER_FIXUP_1455;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3742;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3740;
    if (_RESERVED_IDENTIFIER_FIXUP_1455 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2350 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3620 = _RESERVED_IDENTIFIER_FIXUP_3459;
        _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_2350.x;
        _RESERVED_IDENTIFIER_FIXUP_3620.z = _RESERVED_IDENTIFIER_FIXUP_2350.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2360 = _RESERVED_IDENTIFIER_FIXUP_3620.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3624;
        _RESERVED_IDENTIFIER_FIXUP_3624.x = _RESERVED_IDENTIFIER_FIXUP_2360.x;
        _RESERVED_IDENTIFIER_FIXUP_3624.y = _RESERVED_IDENTIFIER_FIXUP_2360.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2370 = _RESERVED_IDENTIFIER_FIXUP_3620.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3628;
        _RESERVED_IDENTIFIER_FIXUP_3628.x = _RESERVED_IDENTIFIER_FIXUP_2370.x;
        _RESERVED_IDENTIFIER_FIXUP_3628.y = _RESERVED_IDENTIFIER_FIXUP_2370.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2380 = _RESERVED_IDENTIFIER_FIXUP_3620.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3632;
        _RESERVED_IDENTIFIER_FIXUP_3632.x = _RESERVED_IDENTIFIER_FIXUP_2380.x;
        _RESERVED_IDENTIFIER_FIXUP_3632.y = _RESERVED_IDENTIFIER_FIXUP_2380.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2390 = _RESERVED_IDENTIFIER_FIXUP_3620.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3636;
        _RESERVED_IDENTIFIER_FIXUP_3636.x = _RESERVED_IDENTIFIER_FIXUP_2390.x;
        _RESERVED_IDENTIFIER_FIXUP_3636.y = _RESERVED_IDENTIFIER_FIXUP_2390.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2398 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2398.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2398.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2404 = hdLod6(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3624.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3628.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3632.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3636.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3624.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2404.y = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3628.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2404.z = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3632.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2404.w = hdLod6(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2461 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2404 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3636.xy;
        float param_67 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2467 = hdLod6(param_66, param_67).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_2467;
        float _RESERVED_IDENTIFIER_FIXUP_2472 = float(_RESERVED_IDENTIFIER_FIXUP_2467 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_2472;
        float _RESERVED_IDENTIFIER_FIXUP_2475 = dot(_RESERVED_IDENTIFIER_FIXUP_2461, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3620.z = _RESERVED_IDENTIFIER_FIXUP_2475;
        float _RESERVED_IDENTIFIER_FIXUP_2481 = _RESERVED_IDENTIFIER_FIXUP_2472 + _RESERVED_IDENTIFIER_FIXUP_2475;
        _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_2481;
        _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_2481 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_2461;
        _RESERVED_IDENTIFIER_FIXUP_3740 = _RESERVED_IDENTIFIER_FIXUP_3620;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2494 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_3459;
        _RESERVED_IDENTIFIER_FIXUP_3464.z = _RESERVED_IDENTIFIER_FIXUP_2494;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3743;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3741;
        if (_RESERVED_IDENTIFIER_FIXUP_2494 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2503 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3554 = _RESERVED_IDENTIFIER_FIXUP_3464;
            _RESERVED_IDENTIFIER_FIXUP_3554.z = _RESERVED_IDENTIFIER_FIXUP_2503.x;
            _RESERVED_IDENTIFIER_FIXUP_3554.w = _RESERVED_IDENTIFIER_FIXUP_2503.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2513 = _RESERVED_IDENTIFIER_FIXUP_3554.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3558;
            _RESERVED_IDENTIFIER_FIXUP_3558.x = _RESERVED_IDENTIFIER_FIXUP_2513.x;
            _RESERVED_IDENTIFIER_FIXUP_3558.y = _RESERVED_IDENTIFIER_FIXUP_2513.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2523 = _RESERVED_IDENTIFIER_FIXUP_3554.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3562;
            _RESERVED_IDENTIFIER_FIXUP_3562.x = _RESERVED_IDENTIFIER_FIXUP_2523.x;
            _RESERVED_IDENTIFIER_FIXUP_3562.y = _RESERVED_IDENTIFIER_FIXUP_2523.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2533 = _RESERVED_IDENTIFIER_FIXUP_3554.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3566;
            _RESERVED_IDENTIFIER_FIXUP_3566.x = _RESERVED_IDENTIFIER_FIXUP_2533.x;
            _RESERVED_IDENTIFIER_FIXUP_3566.y = _RESERVED_IDENTIFIER_FIXUP_2533.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2543 = _RESERVED_IDENTIFIER_FIXUP_3554.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3570;
            _RESERVED_IDENTIFIER_FIXUP_3570.x = _RESERVED_IDENTIFIER_FIXUP_2543.x;
            _RESERVED_IDENTIFIER_FIXUP_3570.y = _RESERVED_IDENTIFIER_FIXUP_2543.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2551 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2551.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2551.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2557 = hdLod7(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3558.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3562.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3566.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3570.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3558.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2557.y = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3562.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2557.z = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3566.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2557.w = hdLod7(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2614 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2557 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3570.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2620 = hdLod7(param_76, param_77).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3554.z = _RESERVED_IDENTIFIER_FIXUP_2620;
            float _RESERVED_IDENTIFIER_FIXUP_2625 = float(_RESERVED_IDENTIFIER_FIXUP_2620 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3554.z = _RESERVED_IDENTIFIER_FIXUP_2625;
            float _RESERVED_IDENTIFIER_FIXUP_2628 = dot(_RESERVED_IDENTIFIER_FIXUP_2614, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3554.w = _RESERVED_IDENTIFIER_FIXUP_2628;
            float _RESERVED_IDENTIFIER_FIXUP_2634 = _RESERVED_IDENTIFIER_FIXUP_2625 + _RESERVED_IDENTIFIER_FIXUP_2628;
            _RESERVED_IDENTIFIER_FIXUP_3554.z = _RESERVED_IDENTIFIER_FIXUP_2634;
            _RESERVED_IDENTIFIER_FIXUP_3554.y = _RESERVED_IDENTIFIER_FIXUP_2634 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3743 = _RESERVED_IDENTIFIER_FIXUP_2614;
            _RESERVED_IDENTIFIER_FIXUP_3741 = _RESERVED_IDENTIFIER_FIXUP_3554;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3468 = _RESERVED_IDENTIFIER_FIXUP_3739;
            _RESERVED_IDENTIFIER_FIXUP_3468.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3468.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2650 = (_RESERVED_IDENTIFIER_FIXUP_3468.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3473;
            _RESERVED_IDENTIFIER_FIXUP_3473.x = _RESERVED_IDENTIFIER_FIXUP_2650.x;
            _RESERVED_IDENTIFIER_FIXUP_3473.y = _RESERVED_IDENTIFIER_FIXUP_2650.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2660 = _RESERVED_IDENTIFIER_FIXUP_3473.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3477;
            _RESERVED_IDENTIFIER_FIXUP_3477.x = _RESERVED_IDENTIFIER_FIXUP_2660.x;
            _RESERVED_IDENTIFIER_FIXUP_3477.y = _RESERVED_IDENTIFIER_FIXUP_2660.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2670 = _RESERVED_IDENTIFIER_FIXUP_3473.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3481;
            _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2670.x;
            _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2670.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2680 = _RESERVED_IDENTIFIER_FIXUP_3473.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3485;
            _RESERVED_IDENTIFIER_FIXUP_3485.x = _RESERVED_IDENTIFIER_FIXUP_2680.x;
            _RESERVED_IDENTIFIER_FIXUP_3485.y = _RESERVED_IDENTIFIER_FIXUP_2680.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2690 = _RESERVED_IDENTIFIER_FIXUP_3473.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3489;
            _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_2690.x;
            _RESERVED_IDENTIFIER_FIXUP_3489.y = _RESERVED_IDENTIFIER_FIXUP_2690.y;
            _RESERVED_IDENTIFIER_FIXUP_3473.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3473.xy;
            float param_79 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2704 = hdLod8(param_78, param_79);
            _RESERVED_IDENTIFIER_FIXUP_3477.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3481.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3485.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3489.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3477.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2704.y = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3481.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2704.z = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3485.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2704.w = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3489.xy;
            float param_87 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2767 = hdLod8(param_86, param_87).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3529 = _RESERVED_IDENTIFIER_FIXUP_3464;
            _RESERVED_IDENTIFIER_FIXUP_3529.z = _RESERVED_IDENTIFIER_FIXUP_2767;
            float _RESERVED_IDENTIFIER_FIXUP_2772 = float(_RESERVED_IDENTIFIER_FIXUP_2767 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3529.z = _RESERVED_IDENTIFIER_FIXUP_2772;
            float _RESERVED_IDENTIFIER_FIXUP_2775 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2704 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3529.w = _RESERVED_IDENTIFIER_FIXUP_2775;
            float _RESERVED_IDENTIFIER_FIXUP_2781 = _RESERVED_IDENTIFIER_FIXUP_2772 + _RESERVED_IDENTIFIER_FIXUP_2775;
            _RESERVED_IDENTIFIER_FIXUP_3529.z = _RESERVED_IDENTIFIER_FIXUP_2781;
            float _RESERVED_IDENTIFIER_FIXUP_2789 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3529.w = _RESERVED_IDENTIFIER_FIXUP_2789;
            float _RESERVED_IDENTIFIER_FIXUP_2795 = clamp((_RESERVED_IDENTIFIER_FIXUP_2789 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3529.w = _RESERVED_IDENTIFIER_FIXUP_2795;
            float _RESERVED_IDENTIFIER_FIXUP_2800 = (_RESERVED_IDENTIFIER_FIXUP_2781 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3529.z = _RESERVED_IDENTIFIER_FIXUP_2800;
            _RESERVED_IDENTIFIER_FIXUP_3529.y = (_RESERVED_IDENTIFIER_FIXUP_2795 * _RESERVED_IDENTIFIER_FIXUP_2800) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3743 = _RESERVED_IDENTIFIER_FIXUP_3468;
            _RESERVED_IDENTIFIER_FIXUP_3741 = _RESERVED_IDENTIFIER_FIXUP_3529;
        }
        _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3743;
        _RESERVED_IDENTIFIER_FIXUP_3740 = _RESERVED_IDENTIFIER_FIXUP_3741;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2815 = min(_RESERVED_IDENTIFIER_FIXUP_3740.y, _RESERVED_IDENTIFIER_FIXUP_3740.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3688 = _RESERVED_IDENTIFIER_FIXUP_3742;
    _RESERVED_IDENTIFIER_FIXUP_3688.x = _RESERVED_IDENTIFIER_FIXUP_2815;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3754 = vec4((_RESERVED_IDENTIFIER_FIXUP_2815 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2156.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2837 = _RESERVED_IDENTIFIER_FIXUP_3688.xxx * _RESERVED_IDENTIFIER_FIXUP_3754.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3699 = _RESERVED_IDENTIFIER_FIXUP_3754;
    _RESERVED_IDENTIFIER_FIXUP_3699.y = _RESERVED_IDENTIFIER_FIXUP_2837.x;
    _RESERVED_IDENTIFIER_FIXUP_3699.z = _RESERVED_IDENTIFIER_FIXUP_2837.y;
    _RESERVED_IDENTIFIER_FIXUP_3699.w = _RESERVED_IDENTIFIER_FIXUP_2837.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2851 = (_RESERVED_IDENTIFIER_FIXUP_2156.xyz * _RESERVED_IDENTIFIER_FIXUP_3699.xxx) + _RESERVED_IDENTIFIER_FIXUP_3699.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3705 = _RESERVED_IDENTIFIER_FIXUP_2156;
    _RESERVED_IDENTIFIER_FIXUP_3705.x = _RESERVED_IDENTIFIER_FIXUP_2851.x;
    _RESERVED_IDENTIFIER_FIXUP_3705.y = _RESERVED_IDENTIFIER_FIXUP_2851.y;
    _RESERVED_IDENTIFIER_FIXUP_3705.z = _RESERVED_IDENTIFIER_FIXUP_2851.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2864 = _RESERVED_IDENTIFIER_FIXUP_3705.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3711 = _RESERVED_IDENTIFIER_FIXUP_3705;
    _RESERVED_IDENTIFIER_FIXUP_3711.x = _RESERVED_IDENTIFIER_FIXUP_2864.x;
    _RESERVED_IDENTIFIER_FIXUP_3711.y = _RESERVED_IDENTIFIER_FIXUP_2864.y;
    _RESERVED_IDENTIFIER_FIXUP_3711.z = _RESERVED_IDENTIFIER_FIXUP_2864.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3711.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1008 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1017;
    if (_RESERVED_IDENTIFIER_FIXUP_1008)
    {
        _RESERVED_IDENTIFIER_FIXUP_1017 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1017 = _RESERVED_IDENTIFIER_FIXUP_1008;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1017)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1054 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3311.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1080 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2917;
    if (_RESERVED_IDENTIFIER_FIXUP_1054 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2917 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1054), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1080);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2917 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1080);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2917;
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    vec3 hdB91 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB91.x;
    r4.y = hdB91.y;
    r4.z = hdB91.z;
    vec3 hdB106 = v0.xyz + v0.xyz;
    r5.x = hdB106.x;
    r5.y = hdB106.y;
    r5.z = hdB106.z;
    vec3 hdB117 = r0.xyz * r5.xyz;
    r6.x = hdB117.x;
    r6.y = hdB117.y;
    r6.z = hdB117.z;
    vec4 hdB126 = r0;
    vec3 hdB135 = mix(r6.xyz, hdB126.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB135.x;
    r0.y = hdB135.y;
    r0.z = hdB135.z;
    vec3 hdB146 = r1.xyz * r5.xyz;
    r6.x = hdB146.x;
    r6.y = hdB146.y;
    r6.z = hdB146.z;
    vec4 hdB155 = r1;
    vec3 hdB161 = mix(r6.xyz, hdB155.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB161.x;
    r1.y = hdB161.y;
    r1.z = hdB161.z;
    vec3 hdB172 = r2.xyz * r5.xyz;
    r4.x = hdB172.x;
    r4.y = hdB172.y;
    r4.w = hdB172.z;
    vec4 hdB182 = r2;
    vec3 hdB188 = mix(r4.xyw, hdB182.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB188.x;
    r2.y = hdB188.y;
    r2.z = hdB188.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB241 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB241.x;
        r1.z = hdB241.y;
        vec2 hdB252 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB252.x;
        r2.y = hdB252.y;
        vec2 hdB263 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB263.x;
        r3.y = hdB263.y;
        vec2 hdB274 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB274.x;
        r4.y = hdB274.y;
        vec2 hdB285 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB285.x;
        r5.y = hdB285.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r6.xy;
        float param_5 = r6.w;
        r6 = hdLod5(param_4, param_5);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_10 = r4.xy;
        float param_11 = r4.w;
        r4 = hdLod5(param_10, param_11);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_12 = r5.xy;
        float param_13 = r5.w;
        r5 = hdLod5(param_12, param_13);
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
        vec2 hdB415 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB415.x;
        r1.z = hdB415.y;
        vec2 hdB425 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB425.x;
        r2.y = hdB425.y;
        vec2 hdB435 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB435.x;
        r3.y = hdB435.y;
        vec2 hdB445 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB445.x;
        r4.y = hdB445.y;
        vec2 hdB455 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB455.x;
        r5.y = hdB455.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = r6.xy;
        float param_15 = r6.w;
        r6 = hdLod6(param_14, param_15);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_16 = r2.xy;
        float param_17 = r2.w;
        r2 = hdLod6(param_16, param_17);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_18 = r3.xy;
        float param_19 = r3.w;
        r3 = hdLod6(param_18, param_19);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_20 = r4.xy;
        float param_21 = r4.w;
        r4 = hdLod6(param_20, param_21);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_22 = r5.xy;
        float param_23 = r5.w;
        r5 = hdLod6(param_22, param_23);
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
            vec2 hdB570 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB570.x;
            r1.w = hdB570.y;
            vec2 hdB580 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB580.x;
            r2.y = hdB580.y;
            vec2 hdB590 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB590.x;
            r3.y = hdB590.y;
            vec2 hdB600 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB600.x;
            r4.y = hdB600.y;
            vec2 hdB610 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB610.x;
            r5.y = hdB610.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r6.xy;
            float param_25 = r6.w;
            r6 = hdLod7(param_24, param_25);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_26 = r2.xy;
            float param_27 = r2.w;
            r2 = hdLod7(param_26, param_27);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_30 = r4.xy;
            float param_31 = r4.w;
            r4 = hdLod7(param_30, param_31);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_32 = r5.xy;
            float param_33 = r5.w;
            r5 = hdLod7(param_32, param_33);
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
            vec2 hdB718 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB718.x;
            r3.y = hdB718.y;
            vec2 hdB728 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB728.x;
            r4.y = hdB728.y;
            vec2 hdB738 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB738.x;
            r5.y = hdB738.y;
            vec2 hdB748 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB748.x;
            r6.y = hdB748.y;
            vec2 hdB758 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB758.x;
            r7.y = hdB758.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_34 = r3.xy;
            float param_35 = r3.w;
            r3 = hdLod8(param_34, param_35);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r4 = hdLod8(param_36, param_37);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_38 = r5.xy;
            float param_39 = r5.w;
            r5 = hdLod8(param_38, param_39);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_40 = r6.xy;
            float param_41 = r6.w;
            r6 = hdLod8(param_40, param_41);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_42 = r7.xy;
            float param_43 = r7.w;
            r7 = hdLod8(param_42, param_43);
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
    vec3 hdB897 = r0.www * v1.xyz;
    r1.y = hdB897.x;
    r1.z = hdB897.y;
    r1.w = hdB897.z;
    vec4 hdB906 = r1;
    vec3 hdB908 = r2.xxx * hdB906.yzw;
    r1.y = hdB908.x;
    r1.z = hdB908.y;
    r1.w = hdB908.z;
    vec4 hdB915 = r0;
    vec3 hdB922 = (hdB915.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB922.x;
    r0.y = hdB922.y;
    r0.z = hdB922.z;
    vec4 hdB929 = r0;
    vec3 hdB936 = hdB929.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB936.x;
    r0.y = hdB936.y;
    r0.z = hdB936.z;
    vec3 hdB951 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB951.x;
    oC0.y = hdB951.y;
    oC0.z = hdB951.z;
    oC0.w = 1.0;
    bool hdB963 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB971;
    if (hdB963)
    {
        hdB971 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB971 = hdB963;
    }
    if (hdB971)
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
    bool _3377 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3387;
    if (_3377)
    {
        _3387 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3387 = _3377;
    }
    if (_3387)
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
        bool _3412 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3427;
        if (!_3412)
        {
            _3427 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3427 = _3412;
        }
        if (_3427)
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
