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
float _RESERVED_IDENTIFIER_FIXUP_3782;
vec4 _RESERVED_IDENTIFIER_FIXUP_3783;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1166 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1170 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1174 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1182 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2973 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2973.x = _RESERVED_IDENTIFIER_FIXUP_1182.x;
    _RESERVED_IDENTIFIER_FIXUP_2973.y = _RESERVED_IDENTIFIER_FIXUP_1182.y;
    float _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_1182.z;
    _RESERVED_IDENTIFIER_FIXUP_2973.z = _RESERVED_IDENTIFIER_FIXUP_1188;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1190 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3782).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1193 = _RESERVED_IDENTIFIER_FIXUP_1190 + _RESERVED_IDENTIFIER_FIXUP_1190;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2979 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2979.x = _RESERVED_IDENTIFIER_FIXUP_1193.x;
    _RESERVED_IDENTIFIER_FIXUP_2979.y = _RESERVED_IDENTIFIER_FIXUP_1193.y;
    _RESERVED_IDENTIFIER_FIXUP_2979.z = _RESERVED_IDENTIFIER_FIXUP_1193.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1201 = _RESERVED_IDENTIFIER_FIXUP_1166.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1204 = _RESERVED_IDENTIFIER_FIXUP_1201 * _RESERVED_IDENTIFIER_FIXUP_2979.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2985 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2985.x = _RESERVED_IDENTIFIER_FIXUP_1204.x;
    _RESERVED_IDENTIFIER_FIXUP_2985.y = _RESERVED_IDENTIFIER_FIXUP_1204.y;
    _RESERVED_IDENTIFIER_FIXUP_2985.z = _RESERVED_IDENTIFIER_FIXUP_1204.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1218 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2973.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1219 = mix(_RESERVED_IDENTIFIER_FIXUP_2985.xyz, _RESERVED_IDENTIFIER_FIXUP_1201, _RESERVED_IDENTIFIER_FIXUP_1218);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2991 = _RESERVED_IDENTIFIER_FIXUP_1166;
    _RESERVED_IDENTIFIER_FIXUP_2991.x = _RESERVED_IDENTIFIER_FIXUP_1219.x;
    _RESERVED_IDENTIFIER_FIXUP_2991.y = _RESERVED_IDENTIFIER_FIXUP_1219.y;
    _RESERVED_IDENTIFIER_FIXUP_2991.z = _RESERVED_IDENTIFIER_FIXUP_1219.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1227 = _RESERVED_IDENTIFIER_FIXUP_1170.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_1227 * _RESERVED_IDENTIFIER_FIXUP_2979.xyz;
    _RESERVED_IDENTIFIER_FIXUP_2985.x = _RESERVED_IDENTIFIER_FIXUP_1230.x;
    _RESERVED_IDENTIFIER_FIXUP_2985.y = _RESERVED_IDENTIFIER_FIXUP_1230.y;
    _RESERVED_IDENTIFIER_FIXUP_2985.z = _RESERVED_IDENTIFIER_FIXUP_1230.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1244 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2973.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1245 = mix(_RESERVED_IDENTIFIER_FIXUP_2985.xyz, _RESERVED_IDENTIFIER_FIXUP_1227, _RESERVED_IDENTIFIER_FIXUP_1244);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3003 = _RESERVED_IDENTIFIER_FIXUP_1170;
    _RESERVED_IDENTIFIER_FIXUP_3003.x = _RESERVED_IDENTIFIER_FIXUP_1245.x;
    _RESERVED_IDENTIFIER_FIXUP_3003.y = _RESERVED_IDENTIFIER_FIXUP_1245.y;
    _RESERVED_IDENTIFIER_FIXUP_3003.z = _RESERVED_IDENTIFIER_FIXUP_1245.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1253 = _RESERVED_IDENTIFIER_FIXUP_1174.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1256 = _RESERVED_IDENTIFIER_FIXUP_1253 * _RESERVED_IDENTIFIER_FIXUP_2979.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3808 = vec4(_RESERVED_IDENTIFIER_FIXUP_1256.xy, _RESERVED_IDENTIFIER_FIXUP_1188, _RESERVED_IDENTIFIER_FIXUP_1256.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1271 = mix(_RESERVED_IDENTIFIER_FIXUP_3808.xyw, _RESERVED_IDENTIFIER_FIXUP_1253, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3808.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3015 = _RESERVED_IDENTIFIER_FIXUP_1174;
    _RESERVED_IDENTIFIER_FIXUP_3015.x = _RESERVED_IDENTIFIER_FIXUP_1271.x;
    _RESERVED_IDENTIFIER_FIXUP_3015.y = _RESERVED_IDENTIFIER_FIXUP_1271.y;
    _RESERVED_IDENTIFIER_FIXUP_3015.z = _RESERVED_IDENTIFIER_FIXUP_1271.z;
    float _RESERVED_IDENTIFIER_FIXUP_1281 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1178.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3021 = _RESERVED_IDENTIFIER_FIXUP_1178;
    _RESERVED_IDENTIFIER_FIXUP_3021.z = _RESERVED_IDENTIFIER_FIXUP_1281;
    _RESERVED_IDENTIFIER_FIXUP_3021.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1281;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_3021.xxxx * _RESERVED_IDENTIFIER_FIXUP_3003;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303 = (_RESERVED_IDENTIFIER_FIXUP_3015 * _RESERVED_IDENTIFIER_FIXUP_3021.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2991 * _RESERVED_IDENTIFIER_FIXUP_3021.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1291);
    float _RESERVED_IDENTIFIER_FIXUP_1310 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3028 = _RESERVED_IDENTIFIER_FIXUP_1291;
    _RESERVED_IDENTIFIER_FIXUP_3028.x = _RESERVED_IDENTIFIER_FIXUP_1310;
    float _RESERVED_IDENTIFIER_FIXUP_1316 = clamp((_RESERVED_IDENTIFIER_FIXUP_1310 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3028.x = _RESERVED_IDENTIFIER_FIXUP_1316;
    float _RESERVED_IDENTIFIER_FIXUP_1322 = ((-_RESERVED_IDENTIFIER_FIXUP_1316) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3028.y = _RESERVED_IDENTIFIER_FIXUP_1322;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3785;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3784;
    if (_RESERVED_IDENTIFIER_FIXUP_1322 != (-_RESERVED_IDENTIFIER_FIXUP_1322))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1334 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3040 = _RESERVED_IDENTIFIER_FIXUP_3028;
        _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1334.x;
        _RESERVED_IDENTIFIER_FIXUP_3040.z = _RESERVED_IDENTIFIER_FIXUP_1334.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_3040.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3044;
        _RESERVED_IDENTIFIER_FIXUP_3044.x = _RESERVED_IDENTIFIER_FIXUP_1344.x;
        _RESERVED_IDENTIFIER_FIXUP_3044.y = _RESERVED_IDENTIFIER_FIXUP_1344.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_3040.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3048;
        _RESERVED_IDENTIFIER_FIXUP_3048.x = _RESERVED_IDENTIFIER_FIXUP_1354.x;
        _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_1354.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_3040.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3052;
        _RESERVED_IDENTIFIER_FIXUP_3052.x = _RESERVED_IDENTIFIER_FIXUP_1364.x;
        _RESERVED_IDENTIFIER_FIXUP_3052.y = _RESERVED_IDENTIFIER_FIXUP_1364.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1374 = _RESERVED_IDENTIFIER_FIXUP_3040.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3056;
        _RESERVED_IDENTIFIER_FIXUP_3056.x = _RESERVED_IDENTIFIER_FIXUP_1374.x;
        _RESERVED_IDENTIFIER_FIXUP_3056.y = _RESERVED_IDENTIFIER_FIXUP_1374.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1382 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1382.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1382.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1388 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3044.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3048.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3052.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3056.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3044.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1388.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3048.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1388.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3052.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1388.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1445 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1388 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3056.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1451 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1451;
        float _RESERVED_IDENTIFIER_FIXUP_1456 = float(_RESERVED_IDENTIFIER_FIXUP_1451 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1456;
        float _RESERVED_IDENTIFIER_FIXUP_1459 = dot(_RESERVED_IDENTIFIER_FIXUP_1445, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3040.z = _RESERVED_IDENTIFIER_FIXUP_1459;
        float _RESERVED_IDENTIFIER_FIXUP_1465 = _RESERVED_IDENTIFIER_FIXUP_1456 + _RESERVED_IDENTIFIER_FIXUP_1459;
        _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1465;
        float _RESERVED_IDENTIFIER_FIXUP_1470 = (_RESERVED_IDENTIFIER_FIXUP_1465 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1470;
        _RESERVED_IDENTIFIER_FIXUP_3040.x = (_RESERVED_IDENTIFIER_FIXUP_1316 * _RESERVED_IDENTIFIER_FIXUP_1470) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3785 = _RESERVED_IDENTIFIER_FIXUP_1445;
        _RESERVED_IDENTIFIER_FIXUP_3784 = _RESERVED_IDENTIFIER_FIXUP_3040;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3038 = _RESERVED_IDENTIFIER_FIXUP_3028;
        _RESERVED_IDENTIFIER_FIXUP_3038.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3785 = _RESERVED_IDENTIFIER_FIXUP_3015;
        _RESERVED_IDENTIFIER_FIXUP_3784 = _RESERVED_IDENTIFIER_FIXUP_3038;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1488 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3112 = _RESERVED_IDENTIFIER_FIXUP_3784;
    _RESERVED_IDENTIFIER_FIXUP_3112.y = _RESERVED_IDENTIFIER_FIXUP_1488;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3788;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3786;
    if (_RESERVED_IDENTIFIER_FIXUP_1488 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1497 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3273 = _RESERVED_IDENTIFIER_FIXUP_3112;
        _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1497.x;
        _RESERVED_IDENTIFIER_FIXUP_3273.z = _RESERVED_IDENTIFIER_FIXUP_1497.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_3273.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3277;
        _RESERVED_IDENTIFIER_FIXUP_3277.x = _RESERVED_IDENTIFIER_FIXUP_1507.x;
        _RESERVED_IDENTIFIER_FIXUP_3277.y = _RESERVED_IDENTIFIER_FIXUP_1507.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_3273.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3281;
        _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_1517.x;
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_1517.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_3273.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3285;
        _RESERVED_IDENTIFIER_FIXUP_3285.x = _RESERVED_IDENTIFIER_FIXUP_1527.x;
        _RESERVED_IDENTIFIER_FIXUP_3285.y = _RESERVED_IDENTIFIER_FIXUP_1527.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1537 = _RESERVED_IDENTIFIER_FIXUP_3273.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3289;
        _RESERVED_IDENTIFIER_FIXUP_3289.x = _RESERVED_IDENTIFIER_FIXUP_1537.x;
        _RESERVED_IDENTIFIER_FIXUP_3289.y = _RESERVED_IDENTIFIER_FIXUP_1537.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1545 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1545.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1545.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1551 = hdLod6(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_3277.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3281.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3285.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3289.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3277.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1551.y = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3281.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1551.z = hdLod6(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3285.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1551.w = hdLod6(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1608 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1551 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3289.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1614 = hdLod6(param_22, param_23).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1614;
        float _RESERVED_IDENTIFIER_FIXUP_1619 = float(_RESERVED_IDENTIFIER_FIXUP_1614 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1619;
        float _RESERVED_IDENTIFIER_FIXUP_1622 = dot(_RESERVED_IDENTIFIER_FIXUP_1608, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3273.z = _RESERVED_IDENTIFIER_FIXUP_1622;
        float _RESERVED_IDENTIFIER_FIXUP_1628 = _RESERVED_IDENTIFIER_FIXUP_1619 + _RESERVED_IDENTIFIER_FIXUP_1622;
        _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1628;
        _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1628 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3788 = _RESERVED_IDENTIFIER_FIXUP_1608;
        _RESERVED_IDENTIFIER_FIXUP_3786 = _RESERVED_IDENTIFIER_FIXUP_3273;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1641 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3117 = _RESERVED_IDENTIFIER_FIXUP_3112;
        _RESERVED_IDENTIFIER_FIXUP_3117.z = _RESERVED_IDENTIFIER_FIXUP_1641;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3789;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3787;
        if (_RESERVED_IDENTIFIER_FIXUP_1641 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1650 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3207 = _RESERVED_IDENTIFIER_FIXUP_3117;
            _RESERVED_IDENTIFIER_FIXUP_3207.z = _RESERVED_IDENTIFIER_FIXUP_1650.x;
            _RESERVED_IDENTIFIER_FIXUP_3207.w = _RESERVED_IDENTIFIER_FIXUP_1650.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1660 = _RESERVED_IDENTIFIER_FIXUP_3207.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3211;
            _RESERVED_IDENTIFIER_FIXUP_3211.x = _RESERVED_IDENTIFIER_FIXUP_1660.x;
            _RESERVED_IDENTIFIER_FIXUP_3211.y = _RESERVED_IDENTIFIER_FIXUP_1660.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1670 = _RESERVED_IDENTIFIER_FIXUP_3207.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3215;
            _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1670.x;
            _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_1670.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1680 = _RESERVED_IDENTIFIER_FIXUP_3207.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3219;
            _RESERVED_IDENTIFIER_FIXUP_3219.x = _RESERVED_IDENTIFIER_FIXUP_1680.x;
            _RESERVED_IDENTIFIER_FIXUP_3219.y = _RESERVED_IDENTIFIER_FIXUP_1680.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1690 = _RESERVED_IDENTIFIER_FIXUP_3207.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3223;
            _RESERVED_IDENTIFIER_FIXUP_3223.x = _RESERVED_IDENTIFIER_FIXUP_1690.x;
            _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_1690.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1698 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1698.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1698.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1704 = hdLod7(param_24, param_25);
            _RESERVED_IDENTIFIER_FIXUP_3211.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3215.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3219.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3223.w = 0.0;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3211.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1704.y = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3215.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1704.z = hdLod7(param_28, param_29).x;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3219.xy;
            float param_31 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1704.w = hdLod7(param_30, param_31).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1761 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1704 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3223.xy;
            float param_33 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1767 = hdLod7(param_32, param_33).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3207.z = _RESERVED_IDENTIFIER_FIXUP_1767;
            float _RESERVED_IDENTIFIER_FIXUP_1772 = float(_RESERVED_IDENTIFIER_FIXUP_1767 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3207.z = _RESERVED_IDENTIFIER_FIXUP_1772;
            float _RESERVED_IDENTIFIER_FIXUP_1775 = dot(_RESERVED_IDENTIFIER_FIXUP_1761, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3207.w = _RESERVED_IDENTIFIER_FIXUP_1775;
            float _RESERVED_IDENTIFIER_FIXUP_1781 = _RESERVED_IDENTIFIER_FIXUP_1772 + _RESERVED_IDENTIFIER_FIXUP_1775;
            _RESERVED_IDENTIFIER_FIXUP_3207.z = _RESERVED_IDENTIFIER_FIXUP_1781;
            _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_1781 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_1761;
            _RESERVED_IDENTIFIER_FIXUP_3787 = _RESERVED_IDENTIFIER_FIXUP_3207;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3121 = _RESERVED_IDENTIFIER_FIXUP_3785;
            _RESERVED_IDENTIFIER_FIXUP_3121.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3121.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1797 = (_RESERVED_IDENTIFIER_FIXUP_3121.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3126;
            _RESERVED_IDENTIFIER_FIXUP_3126.x = _RESERVED_IDENTIFIER_FIXUP_1797.x;
            _RESERVED_IDENTIFIER_FIXUP_3126.y = _RESERVED_IDENTIFIER_FIXUP_1797.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1807 = _RESERVED_IDENTIFIER_FIXUP_3126.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3130;
            _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1807.x;
            _RESERVED_IDENTIFIER_FIXUP_3130.y = _RESERVED_IDENTIFIER_FIXUP_1807.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1817 = _RESERVED_IDENTIFIER_FIXUP_3126.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3134;
            _RESERVED_IDENTIFIER_FIXUP_3134.x = _RESERVED_IDENTIFIER_FIXUP_1817.x;
            _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1817.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1827 = _RESERVED_IDENTIFIER_FIXUP_3126.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3138;
            _RESERVED_IDENTIFIER_FIXUP_3138.x = _RESERVED_IDENTIFIER_FIXUP_1827.x;
            _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_1827.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1837 = _RESERVED_IDENTIFIER_FIXUP_3126.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3142;
            _RESERVED_IDENTIFIER_FIXUP_3142.x = _RESERVED_IDENTIFIER_FIXUP_1837.x;
            _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1837.y;
            _RESERVED_IDENTIFIER_FIXUP_3126.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3126.xy;
            float param_35 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1851 = hdLod8(param_34, param_35);
            _RESERVED_IDENTIFIER_FIXUP_3130.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3134.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3138.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3142.w = 0.0;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3130.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1851.y = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3134.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1851.z = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3138.xy;
            float param_41 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1851.w = hdLod8(param_40, param_41).x;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3142.xy;
            float param_43 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1914 = hdLod8(param_42, param_43).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3182 = _RESERVED_IDENTIFIER_FIXUP_3117;
            _RESERVED_IDENTIFIER_FIXUP_3182.z = _RESERVED_IDENTIFIER_FIXUP_1914;
            float _RESERVED_IDENTIFIER_FIXUP_1919 = float(_RESERVED_IDENTIFIER_FIXUP_1914 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3182.z = _RESERVED_IDENTIFIER_FIXUP_1919;
            float _RESERVED_IDENTIFIER_FIXUP_1922 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1851 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3182.w = _RESERVED_IDENTIFIER_FIXUP_1922;
            float _RESERVED_IDENTIFIER_FIXUP_1928 = _RESERVED_IDENTIFIER_FIXUP_1919 + _RESERVED_IDENTIFIER_FIXUP_1922;
            _RESERVED_IDENTIFIER_FIXUP_3182.z = _RESERVED_IDENTIFIER_FIXUP_1928;
            float _RESERVED_IDENTIFIER_FIXUP_1936 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3182.w = _RESERVED_IDENTIFIER_FIXUP_1936;
            float _RESERVED_IDENTIFIER_FIXUP_1942 = clamp((_RESERVED_IDENTIFIER_FIXUP_1936 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3182.w = _RESERVED_IDENTIFIER_FIXUP_1942;
            float _RESERVED_IDENTIFIER_FIXUP_1947 = (_RESERVED_IDENTIFIER_FIXUP_1928 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3182.z = _RESERVED_IDENTIFIER_FIXUP_1947;
            _RESERVED_IDENTIFIER_FIXUP_3182.y = (_RESERVED_IDENTIFIER_FIXUP_1942 * _RESERVED_IDENTIFIER_FIXUP_1947) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_3121;
            _RESERVED_IDENTIFIER_FIXUP_3787 = _RESERVED_IDENTIFIER_FIXUP_3182;
        }
        _RESERVED_IDENTIFIER_FIXUP_3788 = _RESERVED_IDENTIFIER_FIXUP_3789;
        _RESERVED_IDENTIFIER_FIXUP_3786 = _RESERVED_IDENTIFIER_FIXUP_3787;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1962 = min(_RESERVED_IDENTIFIER_FIXUP_3786.y, _RESERVED_IDENTIFIER_FIXUP_3786.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3341 = _RESERVED_IDENTIFIER_FIXUP_3788;
    _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_1962;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3809 = vec4((_RESERVED_IDENTIFIER_FIXUP_1962 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1984 = _RESERVED_IDENTIFIER_FIXUP_3341.xxx * _RESERVED_IDENTIFIER_FIXUP_3809.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3352 = _RESERVED_IDENTIFIER_FIXUP_3809;
    _RESERVED_IDENTIFIER_FIXUP_3352.y = _RESERVED_IDENTIFIER_FIXUP_1984.x;
    _RESERVED_IDENTIFIER_FIXUP_3352.z = _RESERVED_IDENTIFIER_FIXUP_1984.y;
    _RESERVED_IDENTIFIER_FIXUP_3352.w = _RESERVED_IDENTIFIER_FIXUP_1984.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1998 = (_RESERVED_IDENTIFIER_FIXUP_1303.xyz * _RESERVED_IDENTIFIER_FIXUP_3352.xxx) + _RESERVED_IDENTIFIER_FIXUP_3352.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_1998.x;
    _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_1998.y;
    _RESERVED_IDENTIFIER_FIXUP_3358.z = _RESERVED_IDENTIFIER_FIXUP_1998.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2011 = _RESERVED_IDENTIFIER_FIXUP_3358.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3364 = _RESERVED_IDENTIFIER_FIXUP_3358;
    _RESERVED_IDENTIFIER_FIXUP_3364.x = _RESERVED_IDENTIFIER_FIXUP_2011.x;
    _RESERVED_IDENTIFIER_FIXUP_3364.y = _RESERVED_IDENTIFIER_FIXUP_2011.y;
    _RESERVED_IDENTIFIER_FIXUP_3364.z = _RESERVED_IDENTIFIER_FIXUP_2011.z;
    vec2 param_44 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2068 = hdTex0(param_44);
    vec2 param_45 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2072 = hdTex1(param_45);
    vec2 param_46 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2076 = hdTex2(param_46);
    vec2 param_47 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2080 = hdTex3(param_47);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2095 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3384 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3384.x = _RESERVED_IDENTIFIER_FIXUP_2095.x;
    _RESERVED_IDENTIFIER_FIXUP_3384.y = _RESERVED_IDENTIFIER_FIXUP_2095.y;
    _RESERVED_IDENTIFIER_FIXUP_3384.z = _RESERVED_IDENTIFIER_FIXUP_2095.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2103 = _RESERVED_IDENTIFIER_FIXUP_2068.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2106 = _RESERVED_IDENTIFIER_FIXUP_2103 * _RESERVED_IDENTIFIER_FIXUP_3384.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3390 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3390.x = _RESERVED_IDENTIFIER_FIXUP_2106.x;
    _RESERVED_IDENTIFIER_FIXUP_3390.y = _RESERVED_IDENTIFIER_FIXUP_2106.y;
    _RESERVED_IDENTIFIER_FIXUP_3390.z = _RESERVED_IDENTIFIER_FIXUP_2106.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2121 = mix(_RESERVED_IDENTIFIER_FIXUP_3390.xyz, _RESERVED_IDENTIFIER_FIXUP_2103, _RESERVED_IDENTIFIER_FIXUP_1218);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3396 = _RESERVED_IDENTIFIER_FIXUP_2068;
    _RESERVED_IDENTIFIER_FIXUP_3396.x = _RESERVED_IDENTIFIER_FIXUP_2121.x;
    _RESERVED_IDENTIFIER_FIXUP_3396.y = _RESERVED_IDENTIFIER_FIXUP_2121.y;
    _RESERVED_IDENTIFIER_FIXUP_3396.z = _RESERVED_IDENTIFIER_FIXUP_2121.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2129 = _RESERVED_IDENTIFIER_FIXUP_2072.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2132 = _RESERVED_IDENTIFIER_FIXUP_2129 * _RESERVED_IDENTIFIER_FIXUP_3384.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3390.x = _RESERVED_IDENTIFIER_FIXUP_2132.x;
    _RESERVED_IDENTIFIER_FIXUP_3390.y = _RESERVED_IDENTIFIER_FIXUP_2132.y;
    _RESERVED_IDENTIFIER_FIXUP_3390.z = _RESERVED_IDENTIFIER_FIXUP_2132.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2147 = mix(_RESERVED_IDENTIFIER_FIXUP_3390.xyz, _RESERVED_IDENTIFIER_FIXUP_2129, _RESERVED_IDENTIFIER_FIXUP_1244);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3408 = _RESERVED_IDENTIFIER_FIXUP_2072;
    _RESERVED_IDENTIFIER_FIXUP_3408.x = _RESERVED_IDENTIFIER_FIXUP_2147.x;
    _RESERVED_IDENTIFIER_FIXUP_3408.y = _RESERVED_IDENTIFIER_FIXUP_2147.y;
    _RESERVED_IDENTIFIER_FIXUP_3408.z = _RESERVED_IDENTIFIER_FIXUP_2147.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2155 = _RESERVED_IDENTIFIER_FIXUP_2076.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2158 = _RESERVED_IDENTIFIER_FIXUP_2155 * _RESERVED_IDENTIFIER_FIXUP_3384.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3811 = vec4(_RESERVED_IDENTIFIER_FIXUP_2158.xy, _RESERVED_IDENTIFIER_FIXUP_1188, _RESERVED_IDENTIFIER_FIXUP_2158.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2173 = mix(_RESERVED_IDENTIFIER_FIXUP_3811.xyw, _RESERVED_IDENTIFIER_FIXUP_2155, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3811.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3420 = _RESERVED_IDENTIFIER_FIXUP_2076;
    _RESERVED_IDENTIFIER_FIXUP_3420.x = _RESERVED_IDENTIFIER_FIXUP_2173.x;
    _RESERVED_IDENTIFIER_FIXUP_3420.y = _RESERVED_IDENTIFIER_FIXUP_2173.y;
    _RESERVED_IDENTIFIER_FIXUP_3420.z = _RESERVED_IDENTIFIER_FIXUP_2173.z;
    float _RESERVED_IDENTIFIER_FIXUP_2183 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2080.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3426 = _RESERVED_IDENTIFIER_FIXUP_2080;
    _RESERVED_IDENTIFIER_FIXUP_3426.z = _RESERVED_IDENTIFIER_FIXUP_2183;
    _RESERVED_IDENTIFIER_FIXUP_3426.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2183;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2193 = _RESERVED_IDENTIFIER_FIXUP_3426.xxxx * _RESERVED_IDENTIFIER_FIXUP_3408;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2205 = (_RESERVED_IDENTIFIER_FIXUP_3420 * _RESERVED_IDENTIFIER_FIXUP_3426.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3396 * _RESERVED_IDENTIFIER_FIXUP_3426.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2193);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_2193;
    _RESERVED_IDENTIFIER_FIXUP_3433.x = _RESERVED_IDENTIFIER_FIXUP_1310;
    float _RESERVED_IDENTIFIER_FIXUP_2218 = clamp((_RESERVED_IDENTIFIER_FIXUP_1310 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3433.x = _RESERVED_IDENTIFIER_FIXUP_2218;
    float _RESERVED_IDENTIFIER_FIXUP_2224 = ((-_RESERVED_IDENTIFIER_FIXUP_2218) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3433.y = _RESERVED_IDENTIFIER_FIXUP_2224;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3797;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3796;
    if (_RESERVED_IDENTIFIER_FIXUP_2224 != (-_RESERVED_IDENTIFIER_FIXUP_2224))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2236 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3445 = _RESERVED_IDENTIFIER_FIXUP_3433;
        _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2236.x;
        _RESERVED_IDENTIFIER_FIXUP_3445.z = _RESERVED_IDENTIFIER_FIXUP_2236.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2246 = _RESERVED_IDENTIFIER_FIXUP_3445.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3449;
        _RESERVED_IDENTIFIER_FIXUP_3449.x = _RESERVED_IDENTIFIER_FIXUP_2246.x;
        _RESERVED_IDENTIFIER_FIXUP_3449.y = _RESERVED_IDENTIFIER_FIXUP_2246.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2256 = _RESERVED_IDENTIFIER_FIXUP_3445.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3453;
        _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_2256.x;
        _RESERVED_IDENTIFIER_FIXUP_3453.y = _RESERVED_IDENTIFIER_FIXUP_2256.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2266 = _RESERVED_IDENTIFIER_FIXUP_3445.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3457;
        _RESERVED_IDENTIFIER_FIXUP_3457.x = _RESERVED_IDENTIFIER_FIXUP_2266.x;
        _RESERVED_IDENTIFIER_FIXUP_3457.y = _RESERVED_IDENTIFIER_FIXUP_2266.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2276 = _RESERVED_IDENTIFIER_FIXUP_3445.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3461;
        _RESERVED_IDENTIFIER_FIXUP_3461.x = _RESERVED_IDENTIFIER_FIXUP_2276.x;
        _RESERVED_IDENTIFIER_FIXUP_3461.y = _RESERVED_IDENTIFIER_FIXUP_2276.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2284 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2284.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2284.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2290 = hdLod5(param_48, param_49);
        _RESERVED_IDENTIFIER_FIXUP_3449.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3453.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3457.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3461.w = 0.0;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3449.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2290.y = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3453.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2290.z = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3457.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2290.w = hdLod5(param_54, param_55).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2347 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2290 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3461.xy;
        float param_57 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2353 = hdLod5(param_56, param_57).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2353;
        float _RESERVED_IDENTIFIER_FIXUP_2358 = float(_RESERVED_IDENTIFIER_FIXUP_2353 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2358;
        float _RESERVED_IDENTIFIER_FIXUP_2361 = dot(_RESERVED_IDENTIFIER_FIXUP_2347, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3445.z = _RESERVED_IDENTIFIER_FIXUP_2361;
        float _RESERVED_IDENTIFIER_FIXUP_2367 = _RESERVED_IDENTIFIER_FIXUP_2358 + _RESERVED_IDENTIFIER_FIXUP_2361;
        _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2367;
        float _RESERVED_IDENTIFIER_FIXUP_2372 = (_RESERVED_IDENTIFIER_FIXUP_2367 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2372;
        _RESERVED_IDENTIFIER_FIXUP_3445.x = (_RESERVED_IDENTIFIER_FIXUP_2218 * _RESERVED_IDENTIFIER_FIXUP_2372) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3797 = _RESERVED_IDENTIFIER_FIXUP_2347;
        _RESERVED_IDENTIFIER_FIXUP_3796 = _RESERVED_IDENTIFIER_FIXUP_3445;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3443 = _RESERVED_IDENTIFIER_FIXUP_3433;
        _RESERVED_IDENTIFIER_FIXUP_3443.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3797 = _RESERVED_IDENTIFIER_FIXUP_3420;
        _RESERVED_IDENTIFIER_FIXUP_3796 = _RESERVED_IDENTIFIER_FIXUP_3443;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3517 = _RESERVED_IDENTIFIER_FIXUP_3796;
    _RESERVED_IDENTIFIER_FIXUP_3517.y = _RESERVED_IDENTIFIER_FIXUP_1488;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3800;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3798;
    if (_RESERVED_IDENTIFIER_FIXUP_1488 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2399 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3678 = _RESERVED_IDENTIFIER_FIXUP_3517;
        _RESERVED_IDENTIFIER_FIXUP_3678.y = _RESERVED_IDENTIFIER_FIXUP_2399.x;
        _RESERVED_IDENTIFIER_FIXUP_3678.z = _RESERVED_IDENTIFIER_FIXUP_2399.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2409 = _RESERVED_IDENTIFIER_FIXUP_3678.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3682;
        _RESERVED_IDENTIFIER_FIXUP_3682.x = _RESERVED_IDENTIFIER_FIXUP_2409.x;
        _RESERVED_IDENTIFIER_FIXUP_3682.y = _RESERVED_IDENTIFIER_FIXUP_2409.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2419 = _RESERVED_IDENTIFIER_FIXUP_3678.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3686;
        _RESERVED_IDENTIFIER_FIXUP_3686.x = _RESERVED_IDENTIFIER_FIXUP_2419.x;
        _RESERVED_IDENTIFIER_FIXUP_3686.y = _RESERVED_IDENTIFIER_FIXUP_2419.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2429 = _RESERVED_IDENTIFIER_FIXUP_3678.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3690;
        _RESERVED_IDENTIFIER_FIXUP_3690.x = _RESERVED_IDENTIFIER_FIXUP_2429.x;
        _RESERVED_IDENTIFIER_FIXUP_3690.y = _RESERVED_IDENTIFIER_FIXUP_2429.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2439 = _RESERVED_IDENTIFIER_FIXUP_3678.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3694;
        _RESERVED_IDENTIFIER_FIXUP_3694.x = _RESERVED_IDENTIFIER_FIXUP_2439.x;
        _RESERVED_IDENTIFIER_FIXUP_3694.y = _RESERVED_IDENTIFIER_FIXUP_2439.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2447 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2447.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2447.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2453 = hdLod6(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3682.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3686.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3690.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3694.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3682.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2453.y = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3686.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2453.z = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3690.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2453.w = hdLod6(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2510 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2453 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3694.xy;
        float param_67 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2516 = hdLod6(param_66, param_67).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3678.y = _RESERVED_IDENTIFIER_FIXUP_2516;
        float _RESERVED_IDENTIFIER_FIXUP_2521 = float(_RESERVED_IDENTIFIER_FIXUP_2516 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3678.y = _RESERVED_IDENTIFIER_FIXUP_2521;
        float _RESERVED_IDENTIFIER_FIXUP_2524 = dot(_RESERVED_IDENTIFIER_FIXUP_2510, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3678.z = _RESERVED_IDENTIFIER_FIXUP_2524;
        float _RESERVED_IDENTIFIER_FIXUP_2530 = _RESERVED_IDENTIFIER_FIXUP_2521 + _RESERVED_IDENTIFIER_FIXUP_2524;
        _RESERVED_IDENTIFIER_FIXUP_3678.y = _RESERVED_IDENTIFIER_FIXUP_2530;
        _RESERVED_IDENTIFIER_FIXUP_3678.y = _RESERVED_IDENTIFIER_FIXUP_2530 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3800 = _RESERVED_IDENTIFIER_FIXUP_2510;
        _RESERVED_IDENTIFIER_FIXUP_3798 = _RESERVED_IDENTIFIER_FIXUP_3678;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2543 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3522 = _RESERVED_IDENTIFIER_FIXUP_3517;
        _RESERVED_IDENTIFIER_FIXUP_3522.z = _RESERVED_IDENTIFIER_FIXUP_2543;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3801;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3799;
        if (_RESERVED_IDENTIFIER_FIXUP_2543 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2552 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3612 = _RESERVED_IDENTIFIER_FIXUP_3522;
            _RESERVED_IDENTIFIER_FIXUP_3612.z = _RESERVED_IDENTIFIER_FIXUP_2552.x;
            _RESERVED_IDENTIFIER_FIXUP_3612.w = _RESERVED_IDENTIFIER_FIXUP_2552.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2562 = _RESERVED_IDENTIFIER_FIXUP_3612.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3616;
            _RESERVED_IDENTIFIER_FIXUP_3616.x = _RESERVED_IDENTIFIER_FIXUP_2562.x;
            _RESERVED_IDENTIFIER_FIXUP_3616.y = _RESERVED_IDENTIFIER_FIXUP_2562.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2572 = _RESERVED_IDENTIFIER_FIXUP_3612.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3620;
            _RESERVED_IDENTIFIER_FIXUP_3620.x = _RESERVED_IDENTIFIER_FIXUP_2572.x;
            _RESERVED_IDENTIFIER_FIXUP_3620.y = _RESERVED_IDENTIFIER_FIXUP_2572.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2582 = _RESERVED_IDENTIFIER_FIXUP_3612.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3624;
            _RESERVED_IDENTIFIER_FIXUP_3624.x = _RESERVED_IDENTIFIER_FIXUP_2582.x;
            _RESERVED_IDENTIFIER_FIXUP_3624.y = _RESERVED_IDENTIFIER_FIXUP_2582.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2592 = _RESERVED_IDENTIFIER_FIXUP_3612.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3628;
            _RESERVED_IDENTIFIER_FIXUP_3628.x = _RESERVED_IDENTIFIER_FIXUP_2592.x;
            _RESERVED_IDENTIFIER_FIXUP_3628.y = _RESERVED_IDENTIFIER_FIXUP_2592.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2600 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2600.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2600.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2606 = hdLod7(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3616.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3620.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3624.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3628.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3616.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2606.y = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3620.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2606.z = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3624.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2606.w = hdLod7(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2663 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2606 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3628.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2669 = hdLod7(param_76, param_77).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3612.z = _RESERVED_IDENTIFIER_FIXUP_2669;
            float _RESERVED_IDENTIFIER_FIXUP_2674 = float(_RESERVED_IDENTIFIER_FIXUP_2669 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3612.z = _RESERVED_IDENTIFIER_FIXUP_2674;
            float _RESERVED_IDENTIFIER_FIXUP_2677 = dot(_RESERVED_IDENTIFIER_FIXUP_2663, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3612.w = _RESERVED_IDENTIFIER_FIXUP_2677;
            float _RESERVED_IDENTIFIER_FIXUP_2683 = _RESERVED_IDENTIFIER_FIXUP_2674 + _RESERVED_IDENTIFIER_FIXUP_2677;
            _RESERVED_IDENTIFIER_FIXUP_3612.z = _RESERVED_IDENTIFIER_FIXUP_2683;
            _RESERVED_IDENTIFIER_FIXUP_3612.y = _RESERVED_IDENTIFIER_FIXUP_2683 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3801 = _RESERVED_IDENTIFIER_FIXUP_2663;
            _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_3612;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3526 = _RESERVED_IDENTIFIER_FIXUP_3797;
            _RESERVED_IDENTIFIER_FIXUP_3526.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3526.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2699 = (_RESERVED_IDENTIFIER_FIXUP_3526.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3531;
            _RESERVED_IDENTIFIER_FIXUP_3531.x = _RESERVED_IDENTIFIER_FIXUP_2699.x;
            _RESERVED_IDENTIFIER_FIXUP_3531.y = _RESERVED_IDENTIFIER_FIXUP_2699.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2709 = _RESERVED_IDENTIFIER_FIXUP_3531.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3535;
            _RESERVED_IDENTIFIER_FIXUP_3535.x = _RESERVED_IDENTIFIER_FIXUP_2709.x;
            _RESERVED_IDENTIFIER_FIXUP_3535.y = _RESERVED_IDENTIFIER_FIXUP_2709.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2719 = _RESERVED_IDENTIFIER_FIXUP_3531.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3539;
            _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_2719.x;
            _RESERVED_IDENTIFIER_FIXUP_3539.y = _RESERVED_IDENTIFIER_FIXUP_2719.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2729 = _RESERVED_IDENTIFIER_FIXUP_3531.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3543;
            _RESERVED_IDENTIFIER_FIXUP_3543.x = _RESERVED_IDENTIFIER_FIXUP_2729.x;
            _RESERVED_IDENTIFIER_FIXUP_3543.y = _RESERVED_IDENTIFIER_FIXUP_2729.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2739 = _RESERVED_IDENTIFIER_FIXUP_3531.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3547;
            _RESERVED_IDENTIFIER_FIXUP_3547.x = _RESERVED_IDENTIFIER_FIXUP_2739.x;
            _RESERVED_IDENTIFIER_FIXUP_3547.y = _RESERVED_IDENTIFIER_FIXUP_2739.y;
            _RESERVED_IDENTIFIER_FIXUP_3531.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3531.xy;
            float param_79 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2753 = hdLod8(param_78, param_79);
            _RESERVED_IDENTIFIER_FIXUP_3535.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3539.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3543.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3547.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3535.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2753.y = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3539.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2753.z = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3543.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2753.w = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3547.xy;
            float param_87 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2816 = hdLod8(param_86, param_87).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3587 = _RESERVED_IDENTIFIER_FIXUP_3522;
            _RESERVED_IDENTIFIER_FIXUP_3587.z = _RESERVED_IDENTIFIER_FIXUP_2816;
            float _RESERVED_IDENTIFIER_FIXUP_2821 = float(_RESERVED_IDENTIFIER_FIXUP_2816 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3587.z = _RESERVED_IDENTIFIER_FIXUP_2821;
            float _RESERVED_IDENTIFIER_FIXUP_2824 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2753 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3587.w = _RESERVED_IDENTIFIER_FIXUP_2824;
            float _RESERVED_IDENTIFIER_FIXUP_2830 = _RESERVED_IDENTIFIER_FIXUP_2821 + _RESERVED_IDENTIFIER_FIXUP_2824;
            _RESERVED_IDENTIFIER_FIXUP_3587.z = _RESERVED_IDENTIFIER_FIXUP_2830;
            float _RESERVED_IDENTIFIER_FIXUP_2838 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3587.w = _RESERVED_IDENTIFIER_FIXUP_2838;
            float _RESERVED_IDENTIFIER_FIXUP_2844 = clamp((_RESERVED_IDENTIFIER_FIXUP_2838 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3587.w = _RESERVED_IDENTIFIER_FIXUP_2844;
            float _RESERVED_IDENTIFIER_FIXUP_2849 = (_RESERVED_IDENTIFIER_FIXUP_2830 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3587.z = _RESERVED_IDENTIFIER_FIXUP_2849;
            _RESERVED_IDENTIFIER_FIXUP_3587.y = (_RESERVED_IDENTIFIER_FIXUP_2844 * _RESERVED_IDENTIFIER_FIXUP_2849) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3801 = _RESERVED_IDENTIFIER_FIXUP_3526;
            _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_3587;
        }
        _RESERVED_IDENTIFIER_FIXUP_3800 = _RESERVED_IDENTIFIER_FIXUP_3801;
        _RESERVED_IDENTIFIER_FIXUP_3798 = _RESERVED_IDENTIFIER_FIXUP_3799;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2864 = min(_RESERVED_IDENTIFIER_FIXUP_3798.y, _RESERVED_IDENTIFIER_FIXUP_3798.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3746 = _RESERVED_IDENTIFIER_FIXUP_3800;
    _RESERVED_IDENTIFIER_FIXUP_3746.x = _RESERVED_IDENTIFIER_FIXUP_2864;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3812 = vec4((_RESERVED_IDENTIFIER_FIXUP_2864 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2205.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2886 = _RESERVED_IDENTIFIER_FIXUP_3746.xxx * _RESERVED_IDENTIFIER_FIXUP_3812.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3757 = _RESERVED_IDENTIFIER_FIXUP_3812;
    _RESERVED_IDENTIFIER_FIXUP_3757.y = _RESERVED_IDENTIFIER_FIXUP_2886.x;
    _RESERVED_IDENTIFIER_FIXUP_3757.z = _RESERVED_IDENTIFIER_FIXUP_2886.y;
    _RESERVED_IDENTIFIER_FIXUP_3757.w = _RESERVED_IDENTIFIER_FIXUP_2886.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2900 = (_RESERVED_IDENTIFIER_FIXUP_2205.xyz * _RESERVED_IDENTIFIER_FIXUP_3757.xxx) + _RESERVED_IDENTIFIER_FIXUP_3757.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3763 = _RESERVED_IDENTIFIER_FIXUP_2205;
    _RESERVED_IDENTIFIER_FIXUP_3763.x = _RESERVED_IDENTIFIER_FIXUP_2900.x;
    _RESERVED_IDENTIFIER_FIXUP_3763.y = _RESERVED_IDENTIFIER_FIXUP_2900.y;
    _RESERVED_IDENTIFIER_FIXUP_3763.z = _RESERVED_IDENTIFIER_FIXUP_2900.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2913 = _RESERVED_IDENTIFIER_FIXUP_3763.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3769 = _RESERVED_IDENTIFIER_FIXUP_3763;
    _RESERVED_IDENTIFIER_FIXUP_3769.x = _RESERVED_IDENTIFIER_FIXUP_2913.x;
    _RESERVED_IDENTIFIER_FIXUP_3769.y = _RESERVED_IDENTIFIER_FIXUP_2913.y;
    _RESERVED_IDENTIFIER_FIXUP_3769.z = _RESERVED_IDENTIFIER_FIXUP_2913.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3769.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1025 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1034;
    if (_RESERVED_IDENTIFIER_FIXUP_1025)
    {
        _RESERVED_IDENTIFIER_FIXUP_1034 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1034 = _RESERVED_IDENTIFIER_FIXUP_1025;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1034)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1071 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3364.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1097 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2966;
    if (_RESERVED_IDENTIFIER_FIXUP_1071 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2966 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1071), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1097);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2966 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1097);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2966;
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
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 = r3.xxxx * r1;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB258 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB258.x;
        r1.z = hdB258.y;
        vec2 hdB269 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB269.x;
        r2.y = hdB269.y;
        vec2 hdB280 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB280.x;
        r3.y = hdB280.y;
        vec2 hdB291 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB291.x;
        r4.y = hdB291.y;
        vec2 hdB302 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB302.x;
        r5.y = hdB302.y;
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
        vec2 hdB432 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB432.x;
        r1.z = hdB432.y;
        vec2 hdB442 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB442.x;
        r2.y = hdB442.y;
        vec2 hdB452 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB452.x;
        r3.y = hdB452.y;
        vec2 hdB462 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB462.x;
        r4.y = hdB462.y;
        vec2 hdB472 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB472.x;
        r5.y = hdB472.y;
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
            vec2 hdB587 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB587.x;
            r1.w = hdB587.y;
            vec2 hdB597 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB597.x;
            r2.y = hdB597.y;
            vec2 hdB607 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB607.x;
            r3.y = hdB607.y;
            vec2 hdB617 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB617.x;
            r4.y = hdB617.y;
            vec2 hdB627 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB627.x;
            r5.y = hdB627.y;
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
            vec2 hdB735 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB735.x;
            r3.y = hdB735.y;
            vec2 hdB745 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB745.x;
            r4.y = hdB745.y;
            vec2 hdB755 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB755.x;
            r5.y = hdB755.y;
            vec2 hdB765 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB765.x;
            r6.y = hdB765.y;
            vec2 hdB775 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB775.x;
            r7.y = hdB775.y;
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
    vec3 hdB914 = r0.www * v1.xyz;
    r1.y = hdB914.x;
    r1.z = hdB914.y;
    r1.w = hdB914.z;
    vec4 hdB923 = r1;
    vec3 hdB925 = r2.xxx * hdB923.yzw;
    r1.y = hdB925.x;
    r1.z = hdB925.y;
    r1.w = hdB925.z;
    vec4 hdB932 = r0;
    vec3 hdB939 = (hdB932.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB939.x;
    r0.y = hdB939.y;
    r0.z = hdB939.z;
    vec4 hdB946 = r0;
    vec3 hdB953 = hdB946.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB953.x;
    r0.y = hdB953.y;
    r0.z = hdB953.z;
    vec3 hdB968 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB968.x;
    oC0.y = hdB968.y;
    oC0.z = hdB968.z;
    oC0.w = 1.0;
    bool hdB980 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB988;
    if (hdB980)
    {
        hdB988 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB988 = hdB980;
    }
    if (hdB988)
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
    bool _3432 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3442;
    if (_3432)
    {
        _3442 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3442 = _3432;
    }
    if (_3442)
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
        bool _3467 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3482;
        if (!_3467)
        {
            _3482 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3482 = _3467;
        }
        if (_3482)
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
