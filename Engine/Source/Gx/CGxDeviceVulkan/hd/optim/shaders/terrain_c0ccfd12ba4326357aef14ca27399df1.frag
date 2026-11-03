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
float _RESERVED_IDENTIFIER_FIXUP_3634;
vec4 _RESERVED_IDENTIFIER_FIXUP_3635;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1139 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1143 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1147 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1151 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1155 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2893 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2893.x = _RESERVED_IDENTIFIER_FIXUP_1155.x;
    _RESERVED_IDENTIFIER_FIXUP_2893.y = _RESERVED_IDENTIFIER_FIXUP_1155.y;
    float _RESERVED_IDENTIFIER_FIXUP_1161 = _RESERVED_IDENTIFIER_FIXUP_1155.z;
    _RESERVED_IDENTIFIER_FIXUP_2893.z = _RESERVED_IDENTIFIER_FIXUP_1161;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1163 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3634).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1166 = _RESERVED_IDENTIFIER_FIXUP_1163 + _RESERVED_IDENTIFIER_FIXUP_1163;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2899;
    _RESERVED_IDENTIFIER_FIXUP_2899.x = _RESERVED_IDENTIFIER_FIXUP_1166.x;
    _RESERVED_IDENTIFIER_FIXUP_2899.y = _RESERVED_IDENTIFIER_FIXUP_1166.y;
    _RESERVED_IDENTIFIER_FIXUP_2899.z = _RESERVED_IDENTIFIER_FIXUP_1166.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1139.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1174 * _RESERVED_IDENTIFIER_FIXUP_2899.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2905;
    _RESERVED_IDENTIFIER_FIXUP_2905.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
    _RESERVED_IDENTIFIER_FIXUP_2905.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
    _RESERVED_IDENTIFIER_FIXUP_2905.z = _RESERVED_IDENTIFIER_FIXUP_1177.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1191 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2893.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1192 = mix(_RESERVED_IDENTIFIER_FIXUP_2905.xyz, _RESERVED_IDENTIFIER_FIXUP_1174, _RESERVED_IDENTIFIER_FIXUP_1191);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2911 = _RESERVED_IDENTIFIER_FIXUP_1139;
    _RESERVED_IDENTIFIER_FIXUP_2911.x = _RESERVED_IDENTIFIER_FIXUP_1192.x;
    _RESERVED_IDENTIFIER_FIXUP_2911.y = _RESERVED_IDENTIFIER_FIXUP_1192.y;
    _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1192.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_1143.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1203 = _RESERVED_IDENTIFIER_FIXUP_1200 * _RESERVED_IDENTIFIER_FIXUP_2899.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2917;
    _RESERVED_IDENTIFIER_FIXUP_2917.x = _RESERVED_IDENTIFIER_FIXUP_1203.x;
    _RESERVED_IDENTIFIER_FIXUP_2917.y = _RESERVED_IDENTIFIER_FIXUP_1203.y;
    _RESERVED_IDENTIFIER_FIXUP_2917.z = _RESERVED_IDENTIFIER_FIXUP_1203.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1217 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2893.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1218 = mix(_RESERVED_IDENTIFIER_FIXUP_2917.xyz, _RESERVED_IDENTIFIER_FIXUP_1200, _RESERVED_IDENTIFIER_FIXUP_1217);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2923 = _RESERVED_IDENTIFIER_FIXUP_1143;
    _RESERVED_IDENTIFIER_FIXUP_2923.x = _RESERVED_IDENTIFIER_FIXUP_1218.x;
    _RESERVED_IDENTIFIER_FIXUP_2923.y = _RESERVED_IDENTIFIER_FIXUP_1218.y;
    _RESERVED_IDENTIFIER_FIXUP_2923.z = _RESERVED_IDENTIFIER_FIXUP_1218.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_1147.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1229 = _RESERVED_IDENTIFIER_FIXUP_1226 * _RESERVED_IDENTIFIER_FIXUP_2899.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3662 = vec4(_RESERVED_IDENTIFIER_FIXUP_1229.xy, _RESERVED_IDENTIFIER_FIXUP_1161, _RESERVED_IDENTIFIER_FIXUP_1229.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1244 = mix(_RESERVED_IDENTIFIER_FIXUP_3662.xyw, _RESERVED_IDENTIFIER_FIXUP_1226, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3662.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2935 = _RESERVED_IDENTIFIER_FIXUP_1147;
    _RESERVED_IDENTIFIER_FIXUP_2935.x = _RESERVED_IDENTIFIER_FIXUP_1244.x;
    _RESERVED_IDENTIFIER_FIXUP_2935.y = _RESERVED_IDENTIFIER_FIXUP_1244.y;
    _RESERVED_IDENTIFIER_FIXUP_2935.z = _RESERVED_IDENTIFIER_FIXUP_1244.z;
    float _RESERVED_IDENTIFIER_FIXUP_1254 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1151.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2941 = _RESERVED_IDENTIFIER_FIXUP_1151;
    _RESERVED_IDENTIFIER_FIXUP_2941.z = _RESERVED_IDENTIFIER_FIXUP_1254;
    _RESERVED_IDENTIFIER_FIXUP_2941.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1254;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_2941.xxxx * _RESERVED_IDENTIFIER_FIXUP_2923;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1276 = (_RESERVED_IDENTIFIER_FIXUP_2935 * _RESERVED_IDENTIFIER_FIXUP_2941.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2911 * _RESERVED_IDENTIFIER_FIXUP_2941.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1264);
    float _RESERVED_IDENTIFIER_FIXUP_1283 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2948 = _RESERVED_IDENTIFIER_FIXUP_1264;
    _RESERVED_IDENTIFIER_FIXUP_2948.x = _RESERVED_IDENTIFIER_FIXUP_1283;
    float _RESERVED_IDENTIFIER_FIXUP_1289 = clamp((_RESERVED_IDENTIFIER_FIXUP_1283 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2948.x = _RESERVED_IDENTIFIER_FIXUP_1289;
    float _RESERVED_IDENTIFIER_FIXUP_1295 = ((-_RESERVED_IDENTIFIER_FIXUP_1289) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2948.y = _RESERVED_IDENTIFIER_FIXUP_1295;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3636;
    if (_RESERVED_IDENTIFIER_FIXUP_1295 != (-_RESERVED_IDENTIFIER_FIXUP_1295))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1307 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1317 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_1317.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2961 = _RESERVED_IDENTIFIER_FIXUP_2948;
        _RESERVED_IDENTIFIER_FIXUP_2961.y = _RESERVED_IDENTIFIER_FIXUP_1319;
        _RESERVED_IDENTIFIER_FIXUP_2961.z = _RESERVED_IDENTIFIER_FIXUP_1317.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_2961.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2965;
        _RESERVED_IDENTIFIER_FIXUP_2965.x = _RESERVED_IDENTIFIER_FIXUP_1327.x;
        _RESERVED_IDENTIFIER_FIXUP_2965.y = _RESERVED_IDENTIFIER_FIXUP_1327.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1334 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_1334.y;
        _RESERVED_IDENTIFIER_FIXUP_2965.w = _RESERVED_IDENTIFIER_FIXUP_1338;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1307.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1307.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2965.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1338;
        float _RESERVED_IDENTIFIER_FIXUP_1349 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3663 = vec4(_RESERVED_IDENTIFIER_FIXUP_1289, _RESERVED_IDENTIFIER_FIXUP_1319, _RESERVED_IDENTIFIER_FIXUP_1317.y, _RESERVED_IDENTIFIER_FIXUP_1349);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1356 = _RESERVED_IDENTIFIER_FIXUP_3663.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2978;
        _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1356.x;
        _RESERVED_IDENTIFIER_FIXUP_2978.y = _RESERVED_IDENTIFIER_FIXUP_1356.y;
        _RESERVED_IDENTIFIER_FIXUP_2978.w = _RESERVED_IDENTIFIER_FIXUP_1338;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2978.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1338;
        float _RESERVED_IDENTIFIER_FIXUP_1378 = _RESERVED_IDENTIFIER_FIXUP_1349 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3663.w = _RESERVED_IDENTIFIER_FIXUP_1378;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1385 = _RESERVED_IDENTIFIER_FIXUP_3663.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2991;
        _RESERVED_IDENTIFIER_FIXUP_2991.x = _RESERVED_IDENTIFIER_FIXUP_1385.x;
        _RESERVED_IDENTIFIER_FIXUP_2991.y = _RESERVED_IDENTIFIER_FIXUP_1385.y;
        _RESERVED_IDENTIFIER_FIXUP_2991.w = _RESERVED_IDENTIFIER_FIXUP_1338;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2991.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1338;
        float _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_1378 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3663.w = _RESERVED_IDENTIFIER_FIXUP_1407;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1414 = _RESERVED_IDENTIFIER_FIXUP_3663.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3004;
        _RESERVED_IDENTIFIER_FIXUP_3004.x = _RESERVED_IDENTIFIER_FIXUP_1414.x;
        _RESERVED_IDENTIFIER_FIXUP_3004.y = _RESERVED_IDENTIFIER_FIXUP_1414.y;
        _RESERVED_IDENTIFIER_FIXUP_3004.w = _RESERVED_IDENTIFIER_FIXUP_1338;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3004.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1338;
        float _RESERVED_IDENTIFIER_FIXUP_1436 = _RESERVED_IDENTIFIER_FIXUP_1407 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3663.y = _RESERVED_IDENTIFIER_FIXUP_1436;
        float _RESERVED_IDENTIFIER_FIXUP_1441 = (_RESERVED_IDENTIFIER_FIXUP_1436 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3663.y = _RESERVED_IDENTIFIER_FIXUP_1441;
        _RESERVED_IDENTIFIER_FIXUP_3663.x = (_RESERVED_IDENTIFIER_FIXUP_1289 * _RESERVED_IDENTIFIER_FIXUP_1441) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3636 = _RESERVED_IDENTIFIER_FIXUP_3663;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2958 = _RESERVED_IDENTIFIER_FIXUP_2948;
        _RESERVED_IDENTIFIER_FIXUP_2958.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3636 = _RESERVED_IDENTIFIER_FIXUP_2958;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1459 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3026 = _RESERVED_IDENTIFIER_FIXUP_3636;
    _RESERVED_IDENTIFIER_FIXUP_3026.y = _RESERVED_IDENTIFIER_FIXUP_1459;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3641;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3639;
    if (_RESERVED_IDENTIFIER_FIXUP_1459 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1468 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1478 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3166 = _RESERVED_IDENTIFIER_FIXUP_3026;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_1478.x;
        _RESERVED_IDENTIFIER_FIXUP_3166.z = _RESERVED_IDENTIFIER_FIXUP_1478.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1488 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3170;
        _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_1488.x;
        _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1488.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1495 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_1495.y;
        _RESERVED_IDENTIFIER_FIXUP_3170.w = _RESERVED_IDENTIFIER_FIXUP_1499;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1468.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1468.w;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3170.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1499;
        float _RESERVED_IDENTIFIER_FIXUP_1510 = hdLod6(param_14, param_15).x + hdLod6(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3166.w = _RESERVED_IDENTIFIER_FIXUP_1510;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3183;
        _RESERVED_IDENTIFIER_FIXUP_3183.x = _RESERVED_IDENTIFIER_FIXUP_1517.x;
        _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1517.y;
        _RESERVED_IDENTIFIER_FIXUP_3183.w = _RESERVED_IDENTIFIER_FIXUP_1499;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3183.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1499;
        float _RESERVED_IDENTIFIER_FIXUP_1539 = _RESERVED_IDENTIFIER_FIXUP_1510 + hdLod6(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3166.w = _RESERVED_IDENTIFIER_FIXUP_1539;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3196;
        _RESERVED_IDENTIFIER_FIXUP_3196.x = _RESERVED_IDENTIFIER_FIXUP_1546.x;
        _RESERVED_IDENTIFIER_FIXUP_3196.y = _RESERVED_IDENTIFIER_FIXUP_1546.y;
        _RESERVED_IDENTIFIER_FIXUP_3196.w = _RESERVED_IDENTIFIER_FIXUP_1499;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3196.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1499;
        float _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1539 + hdLod6(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_3166.w = _RESERVED_IDENTIFIER_FIXUP_1568;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_3166.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3209;
        _RESERVED_IDENTIFIER_FIXUP_3209.x = _RESERVED_IDENTIFIER_FIXUP_1575.x;
        _RESERVED_IDENTIFIER_FIXUP_3209.y = _RESERVED_IDENTIFIER_FIXUP_1575.y;
        _RESERVED_IDENTIFIER_FIXUP_3209.w = _RESERVED_IDENTIFIER_FIXUP_1499;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3209.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1499;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1592 = hdLod6(param_22, param_23);
        float _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_1568 + _RESERVED_IDENTIFIER_FIXUP_1592.x;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_1597;
        _RESERVED_IDENTIFIER_FIXUP_3166.y = _RESERVED_IDENTIFIER_FIXUP_1597 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3641 = _RESERVED_IDENTIFIER_FIXUP_1592;
        _RESERVED_IDENTIFIER_FIXUP_3639 = _RESERVED_IDENTIFIER_FIXUP_3166;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1610 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3031 = _RESERVED_IDENTIFIER_FIXUP_3026;
        _RESERVED_IDENTIFIER_FIXUP_3031.z = _RESERVED_IDENTIFIER_FIXUP_1610;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3642;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3640;
        if (_RESERVED_IDENTIFIER_FIXUP_1610 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1619 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1619.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1619.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1625 = hdLod7(param_24, param_25);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1629 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3106 = _RESERVED_IDENTIFIER_FIXUP_3031;
            _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_1629.x;
            _RESERVED_IDENTIFIER_FIXUP_3106.w = _RESERVED_IDENTIFIER_FIXUP_1629.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1639 = _RESERVED_IDENTIFIER_FIXUP_3106.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3110;
            _RESERVED_IDENTIFIER_FIXUP_3110.x = _RESERVED_IDENTIFIER_FIXUP_1639.x;
            _RESERVED_IDENTIFIER_FIXUP_3110.y = _RESERVED_IDENTIFIER_FIXUP_1639.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1646 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1650 = _RESERVED_IDENTIFIER_FIXUP_1646.y;
            _RESERVED_IDENTIFIER_FIXUP_3110.w = _RESERVED_IDENTIFIER_FIXUP_1650;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3110.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1650;
            float _RESERVED_IDENTIFIER_FIXUP_1661 = _RESERVED_IDENTIFIER_FIXUP_1625.x + hdLod7(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3121 = _RESERVED_IDENTIFIER_FIXUP_1625;
            _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_1661;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_3106.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3123;
            _RESERVED_IDENTIFIER_FIXUP_3123.x = _RESERVED_IDENTIFIER_FIXUP_1668.x;
            _RESERVED_IDENTIFIER_FIXUP_3123.y = _RESERVED_IDENTIFIER_FIXUP_1668.y;
            _RESERVED_IDENTIFIER_FIXUP_3123.w = _RESERVED_IDENTIFIER_FIXUP_1650;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3123.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1650;
            float _RESERVED_IDENTIFIER_FIXUP_1690 = _RESERVED_IDENTIFIER_FIXUP_1661 + hdLod7(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_1690;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_3106.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3136;
            _RESERVED_IDENTIFIER_FIXUP_3136.x = _RESERVED_IDENTIFIER_FIXUP_1697.x;
            _RESERVED_IDENTIFIER_FIXUP_3136.y = _RESERVED_IDENTIFIER_FIXUP_1697.y;
            _RESERVED_IDENTIFIER_FIXUP_3136.w = _RESERVED_IDENTIFIER_FIXUP_1650;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3136.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1650;
            float _RESERVED_IDENTIFIER_FIXUP_1719 = _RESERVED_IDENTIFIER_FIXUP_1690 + hdLod7(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_1719;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1726 = _RESERVED_IDENTIFIER_FIXUP_3106.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3149;
            _RESERVED_IDENTIFIER_FIXUP_3149.x = _RESERVED_IDENTIFIER_FIXUP_1726.x;
            _RESERVED_IDENTIFIER_FIXUP_3149.y = _RESERVED_IDENTIFIER_FIXUP_1726.y;
            _RESERVED_IDENTIFIER_FIXUP_3149.w = _RESERVED_IDENTIFIER_FIXUP_1650;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3149.xy;
            float param_33 = _RESERVED_IDENTIFIER_FIXUP_1650;
            float _RESERVED_IDENTIFIER_FIXUP_1748 = _RESERVED_IDENTIFIER_FIXUP_1719 + hdLod7(param_32, param_33).x;
            _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_1748;
            _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1748 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3642 = _RESERVED_IDENTIFIER_FIXUP_3121;
            _RESERVED_IDENTIFIER_FIXUP_3640 = _RESERVED_IDENTIFIER_FIXUP_3106;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3035 = _RESERVED_IDENTIFIER_FIXUP_3031;
            _RESERVED_IDENTIFIER_FIXUP_3035.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3035.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1764 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1768 = _RESERVED_IDENTIFIER_FIXUP_1764.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3664 = vec4(_RESERVED_IDENTIFIER_FIXUP_1764.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1768);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1779 = _RESERVED_IDENTIFIER_FIXUP_3664.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3665 = vec4(_RESERVED_IDENTIFIER_FIXUP_1779 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1768);
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_1779;
            float param_35 = _RESERVED_IDENTIFIER_FIXUP_1768;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3665.xy;
            float param_37 = _RESERVED_IDENTIFIER_FIXUP_1768;
            float _RESERVED_IDENTIFIER_FIXUP_1809 = hdLod8(param_34, param_35).x + hdLod8(param_36, param_37).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3062 = _RESERVED_IDENTIFIER_FIXUP_3664;
            _RESERVED_IDENTIFIER_FIXUP_3062.z = _RESERVED_IDENTIFIER_FIXUP_1809;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1816 = _RESERVED_IDENTIFIER_FIXUP_3062.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3064 = _RESERVED_IDENTIFIER_FIXUP_3665;
            _RESERVED_IDENTIFIER_FIXUP_3064.x = _RESERVED_IDENTIFIER_FIXUP_1816.x;
            _RESERVED_IDENTIFIER_FIXUP_3064.y = _RESERVED_IDENTIFIER_FIXUP_1816.y;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3064.xy;
            float param_39 = _RESERVED_IDENTIFIER_FIXUP_1768;
            float _RESERVED_IDENTIFIER_FIXUP_1831 = _RESERVED_IDENTIFIER_FIXUP_1809 + hdLod8(param_38, param_39).x;
            _RESERVED_IDENTIFIER_FIXUP_3062.z = _RESERVED_IDENTIFIER_FIXUP_1831;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1838 = _RESERVED_IDENTIFIER_FIXUP_3062.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3073 = _RESERVED_IDENTIFIER_FIXUP_3064;
            _RESERVED_IDENTIFIER_FIXUP_3073.x = _RESERVED_IDENTIFIER_FIXUP_1838.x;
            _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1838.y;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3073.xy;
            float param_41 = _RESERVED_IDENTIFIER_FIXUP_1768;
            float _RESERVED_IDENTIFIER_FIXUP_1853 = _RESERVED_IDENTIFIER_FIXUP_1831 + hdLod8(param_40, param_41).x;
            _RESERVED_IDENTIFIER_FIXUP_3062.z = _RESERVED_IDENTIFIER_FIXUP_1853;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1860 = _RESERVED_IDENTIFIER_FIXUP_3062.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3082 = _RESERVED_IDENTIFIER_FIXUP_3073;
            _RESERVED_IDENTIFIER_FIXUP_3082.x = _RESERVED_IDENTIFIER_FIXUP_1860.x;
            _RESERVED_IDENTIFIER_FIXUP_3082.y = _RESERVED_IDENTIFIER_FIXUP_1860.y;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3082.xy;
            float param_43 = _RESERVED_IDENTIFIER_FIXUP_1768;
            float _RESERVED_IDENTIFIER_FIXUP_1875 = _RESERVED_IDENTIFIER_FIXUP_1853 + hdLod8(param_42, param_43).x;
            _RESERVED_IDENTIFIER_FIXUP_3062.x = _RESERVED_IDENTIFIER_FIXUP_1875;
            float _RESERVED_IDENTIFIER_FIXUP_1883 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3062.y = _RESERVED_IDENTIFIER_FIXUP_1883;
            float _RESERVED_IDENTIFIER_FIXUP_1889 = clamp((_RESERVED_IDENTIFIER_FIXUP_1883 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3035.z = _RESERVED_IDENTIFIER_FIXUP_1889;
            float _RESERVED_IDENTIFIER_FIXUP_1894 = (_RESERVED_IDENTIFIER_FIXUP_1875 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3035.w = _RESERVED_IDENTIFIER_FIXUP_1894;
            _RESERVED_IDENTIFIER_FIXUP_3035.y = (_RESERVED_IDENTIFIER_FIXUP_1889 * _RESERVED_IDENTIFIER_FIXUP_1894) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3642 = _RESERVED_IDENTIFIER_FIXUP_3062;
            _RESERVED_IDENTIFIER_FIXUP_3640 = _RESERVED_IDENTIFIER_FIXUP_3035;
        }
        _RESERVED_IDENTIFIER_FIXUP_3641 = _RESERVED_IDENTIFIER_FIXUP_3642;
        _RESERVED_IDENTIFIER_FIXUP_3639 = _RESERVED_IDENTIFIER_FIXUP_3640;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1909 = min(_RESERVED_IDENTIFIER_FIXUP_3639.y, _RESERVED_IDENTIFIER_FIXUP_3639.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3227 = _RESERVED_IDENTIFIER_FIXUP_3641;
    _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_1909;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3666 = vec4((_RESERVED_IDENTIFIER_FIXUP_1909 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1931 = _RESERVED_IDENTIFIER_FIXUP_3227.xxx * _RESERVED_IDENTIFIER_FIXUP_3666.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3238 = _RESERVED_IDENTIFIER_FIXUP_3666;
    _RESERVED_IDENTIFIER_FIXUP_3238.y = _RESERVED_IDENTIFIER_FIXUP_1931.x;
    _RESERVED_IDENTIFIER_FIXUP_3238.z = _RESERVED_IDENTIFIER_FIXUP_1931.y;
    _RESERVED_IDENTIFIER_FIXUP_3238.w = _RESERVED_IDENTIFIER_FIXUP_1931.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1945 = (_RESERVED_IDENTIFIER_FIXUP_1276.xyz * _RESERVED_IDENTIFIER_FIXUP_3238.xxx) + _RESERVED_IDENTIFIER_FIXUP_3238.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3244 = _RESERVED_IDENTIFIER_FIXUP_1276;
    _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_1945.x;
    _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_1945.y;
    _RESERVED_IDENTIFIER_FIXUP_3244.z = _RESERVED_IDENTIFIER_FIXUP_1945.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1958 = _RESERVED_IDENTIFIER_FIXUP_3244.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3250 = _RESERVED_IDENTIFIER_FIXUP_3244;
    _RESERVED_IDENTIFIER_FIXUP_3250.x = _RESERVED_IDENTIFIER_FIXUP_1958.x;
    _RESERVED_IDENTIFIER_FIXUP_3250.y = _RESERVED_IDENTIFIER_FIXUP_1958.y;
    _RESERVED_IDENTIFIER_FIXUP_3250.z = _RESERVED_IDENTIFIER_FIXUP_1958.z;
    vec2 param_44 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2014 = hdTex0(param_44);
    vec2 param_45 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2018 = hdTex1(param_45);
    vec2 param_46 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2022 = hdTex2(param_46);
    vec2 param_47 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2026 = hdTex3(param_47);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2041 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3270;
    _RESERVED_IDENTIFIER_FIXUP_3270.x = _RESERVED_IDENTIFIER_FIXUP_2041.x;
    _RESERVED_IDENTIFIER_FIXUP_3270.y = _RESERVED_IDENTIFIER_FIXUP_2041.y;
    _RESERVED_IDENTIFIER_FIXUP_3270.z = _RESERVED_IDENTIFIER_FIXUP_2041.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2049 = _RESERVED_IDENTIFIER_FIXUP_2014.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2052 = _RESERVED_IDENTIFIER_FIXUP_2049 * _RESERVED_IDENTIFIER_FIXUP_3270.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3276;
    _RESERVED_IDENTIFIER_FIXUP_3276.x = _RESERVED_IDENTIFIER_FIXUP_2052.x;
    _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_2052.y;
    _RESERVED_IDENTIFIER_FIXUP_3276.z = _RESERVED_IDENTIFIER_FIXUP_2052.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2067 = mix(_RESERVED_IDENTIFIER_FIXUP_3276.xyz, _RESERVED_IDENTIFIER_FIXUP_2049, _RESERVED_IDENTIFIER_FIXUP_1191);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3282 = _RESERVED_IDENTIFIER_FIXUP_2014;
    _RESERVED_IDENTIFIER_FIXUP_3282.x = _RESERVED_IDENTIFIER_FIXUP_2067.x;
    _RESERVED_IDENTIFIER_FIXUP_3282.y = _RESERVED_IDENTIFIER_FIXUP_2067.y;
    _RESERVED_IDENTIFIER_FIXUP_3282.z = _RESERVED_IDENTIFIER_FIXUP_2067.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2075 = _RESERVED_IDENTIFIER_FIXUP_2018.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2078 = _RESERVED_IDENTIFIER_FIXUP_2075 * _RESERVED_IDENTIFIER_FIXUP_3270.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3288;
    _RESERVED_IDENTIFIER_FIXUP_3288.x = _RESERVED_IDENTIFIER_FIXUP_2078.x;
    _RESERVED_IDENTIFIER_FIXUP_3288.y = _RESERVED_IDENTIFIER_FIXUP_2078.y;
    _RESERVED_IDENTIFIER_FIXUP_3288.z = _RESERVED_IDENTIFIER_FIXUP_2078.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2093 = mix(_RESERVED_IDENTIFIER_FIXUP_3288.xyz, _RESERVED_IDENTIFIER_FIXUP_2075, _RESERVED_IDENTIFIER_FIXUP_1217);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3294 = _RESERVED_IDENTIFIER_FIXUP_2018;
    _RESERVED_IDENTIFIER_FIXUP_3294.x = _RESERVED_IDENTIFIER_FIXUP_2093.x;
    _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_2093.y;
    _RESERVED_IDENTIFIER_FIXUP_3294.z = _RESERVED_IDENTIFIER_FIXUP_2093.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2101 = _RESERVED_IDENTIFIER_FIXUP_2022.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2104 = _RESERVED_IDENTIFIER_FIXUP_2101 * _RESERVED_IDENTIFIER_FIXUP_3270.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3668 = vec4(_RESERVED_IDENTIFIER_FIXUP_2104.xy, _RESERVED_IDENTIFIER_FIXUP_1161, _RESERVED_IDENTIFIER_FIXUP_2104.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2119 = mix(_RESERVED_IDENTIFIER_FIXUP_3668.xyw, _RESERVED_IDENTIFIER_FIXUP_2101, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3668.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3306 = _RESERVED_IDENTIFIER_FIXUP_2022;
    _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_2119.x;
    _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_2119.y;
    _RESERVED_IDENTIFIER_FIXUP_3306.z = _RESERVED_IDENTIFIER_FIXUP_2119.z;
    float _RESERVED_IDENTIFIER_FIXUP_2129 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2026.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3312 = _RESERVED_IDENTIFIER_FIXUP_2026;
    _RESERVED_IDENTIFIER_FIXUP_3312.z = _RESERVED_IDENTIFIER_FIXUP_2129;
    _RESERVED_IDENTIFIER_FIXUP_3312.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2129;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2139 = _RESERVED_IDENTIFIER_FIXUP_3312.xxxx * _RESERVED_IDENTIFIER_FIXUP_3294;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2151 = (_RESERVED_IDENTIFIER_FIXUP_3306 * _RESERVED_IDENTIFIER_FIXUP_3312.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3282 * _RESERVED_IDENTIFIER_FIXUP_3312.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2139);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3319 = _RESERVED_IDENTIFIER_FIXUP_2139;
    _RESERVED_IDENTIFIER_FIXUP_3319.x = _RESERVED_IDENTIFIER_FIXUP_1283;
    float _RESERVED_IDENTIFIER_FIXUP_2164 = clamp((_RESERVED_IDENTIFIER_FIXUP_1283 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3319.x = _RESERVED_IDENTIFIER_FIXUP_2164;
    float _RESERVED_IDENTIFIER_FIXUP_2170 = ((-_RESERVED_IDENTIFIER_FIXUP_2164) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3319.y = _RESERVED_IDENTIFIER_FIXUP_2170;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3649;
    if (_RESERVED_IDENTIFIER_FIXUP_2170 != (-_RESERVED_IDENTIFIER_FIXUP_2170))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2182 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2192 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_2194 = _RESERVED_IDENTIFIER_FIXUP_2192.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3332 = _RESERVED_IDENTIFIER_FIXUP_3319;
        _RESERVED_IDENTIFIER_FIXUP_3332.y = _RESERVED_IDENTIFIER_FIXUP_2194;
        _RESERVED_IDENTIFIER_FIXUP_3332.z = _RESERVED_IDENTIFIER_FIXUP_2192.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2202 = _RESERVED_IDENTIFIER_FIXUP_3332.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3336;
        _RESERVED_IDENTIFIER_FIXUP_3336.x = _RESERVED_IDENTIFIER_FIXUP_2202.x;
        _RESERVED_IDENTIFIER_FIXUP_3336.y = _RESERVED_IDENTIFIER_FIXUP_2202.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2209 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2213 = _RESERVED_IDENTIFIER_FIXUP_2209.y;
        _RESERVED_IDENTIFIER_FIXUP_3336.w = _RESERVED_IDENTIFIER_FIXUP_2213;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2182.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2182.w;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3336.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2213;
        float _RESERVED_IDENTIFIER_FIXUP_2224 = hdLod5(param_48, param_49).x + hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3669 = vec4(_RESERVED_IDENTIFIER_FIXUP_2164, _RESERVED_IDENTIFIER_FIXUP_2194, _RESERVED_IDENTIFIER_FIXUP_2192.y, _RESERVED_IDENTIFIER_FIXUP_2224);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2231 = _RESERVED_IDENTIFIER_FIXUP_3669.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3349;
        _RESERVED_IDENTIFIER_FIXUP_3349.x = _RESERVED_IDENTIFIER_FIXUP_2231.x;
        _RESERVED_IDENTIFIER_FIXUP_3349.y = _RESERVED_IDENTIFIER_FIXUP_2231.y;
        _RESERVED_IDENTIFIER_FIXUP_3349.w = _RESERVED_IDENTIFIER_FIXUP_2213;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3349.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2213;
        float _RESERVED_IDENTIFIER_FIXUP_2253 = _RESERVED_IDENTIFIER_FIXUP_2224 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3669.w = _RESERVED_IDENTIFIER_FIXUP_2253;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2260 = _RESERVED_IDENTIFIER_FIXUP_3669.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3362;
        _RESERVED_IDENTIFIER_FIXUP_3362.x = _RESERVED_IDENTIFIER_FIXUP_2260.x;
        _RESERVED_IDENTIFIER_FIXUP_3362.y = _RESERVED_IDENTIFIER_FIXUP_2260.y;
        _RESERVED_IDENTIFIER_FIXUP_3362.w = _RESERVED_IDENTIFIER_FIXUP_2213;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3362.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2213;
        float _RESERVED_IDENTIFIER_FIXUP_2282 = _RESERVED_IDENTIFIER_FIXUP_2253 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3669.w = _RESERVED_IDENTIFIER_FIXUP_2282;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2289 = _RESERVED_IDENTIFIER_FIXUP_3669.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3375;
        _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_2289.x;
        _RESERVED_IDENTIFIER_FIXUP_3375.y = _RESERVED_IDENTIFIER_FIXUP_2289.y;
        _RESERVED_IDENTIFIER_FIXUP_3375.w = _RESERVED_IDENTIFIER_FIXUP_2213;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3375.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2213;
        float _RESERVED_IDENTIFIER_FIXUP_2311 = _RESERVED_IDENTIFIER_FIXUP_2282 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3669.y = _RESERVED_IDENTIFIER_FIXUP_2311;
        float _RESERVED_IDENTIFIER_FIXUP_2316 = (_RESERVED_IDENTIFIER_FIXUP_2311 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3669.y = _RESERVED_IDENTIFIER_FIXUP_2316;
        _RESERVED_IDENTIFIER_FIXUP_3669.x = (_RESERVED_IDENTIFIER_FIXUP_2164 * _RESERVED_IDENTIFIER_FIXUP_2316) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3649 = _RESERVED_IDENTIFIER_FIXUP_3669;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3329 = _RESERVED_IDENTIFIER_FIXUP_3319;
        _RESERVED_IDENTIFIER_FIXUP_3329.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3649 = _RESERVED_IDENTIFIER_FIXUP_3329;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3397 = _RESERVED_IDENTIFIER_FIXUP_3649;
    _RESERVED_IDENTIFIER_FIXUP_3397.y = _RESERVED_IDENTIFIER_FIXUP_1459;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3654;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3652;
    if (_RESERVED_IDENTIFIER_FIXUP_1459 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2343 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2353 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3537 = _RESERVED_IDENTIFIER_FIXUP_3397;
        _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_2353.x;
        _RESERVED_IDENTIFIER_FIXUP_3537.z = _RESERVED_IDENTIFIER_FIXUP_2353.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2363 = _RESERVED_IDENTIFIER_FIXUP_3537.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3541;
        _RESERVED_IDENTIFIER_FIXUP_3541.x = _RESERVED_IDENTIFIER_FIXUP_2363.x;
        _RESERVED_IDENTIFIER_FIXUP_3541.y = _RESERVED_IDENTIFIER_FIXUP_2363.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2370 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2374 = _RESERVED_IDENTIFIER_FIXUP_2370.y;
        _RESERVED_IDENTIFIER_FIXUP_3541.w = _RESERVED_IDENTIFIER_FIXUP_2374;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2343.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2343.w;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3541.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2374;
        float _RESERVED_IDENTIFIER_FIXUP_2385 = hdLod6(param_58, param_59).x + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3537.w = _RESERVED_IDENTIFIER_FIXUP_2385;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2392 = _RESERVED_IDENTIFIER_FIXUP_3537.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3554;
        _RESERVED_IDENTIFIER_FIXUP_3554.x = _RESERVED_IDENTIFIER_FIXUP_2392.x;
        _RESERVED_IDENTIFIER_FIXUP_3554.y = _RESERVED_IDENTIFIER_FIXUP_2392.y;
        _RESERVED_IDENTIFIER_FIXUP_3554.w = _RESERVED_IDENTIFIER_FIXUP_2374;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3554.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2374;
        float _RESERVED_IDENTIFIER_FIXUP_2414 = _RESERVED_IDENTIFIER_FIXUP_2385 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3537.w = _RESERVED_IDENTIFIER_FIXUP_2414;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2421 = _RESERVED_IDENTIFIER_FIXUP_3537.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3567;
        _RESERVED_IDENTIFIER_FIXUP_3567.x = _RESERVED_IDENTIFIER_FIXUP_2421.x;
        _RESERVED_IDENTIFIER_FIXUP_3567.y = _RESERVED_IDENTIFIER_FIXUP_2421.y;
        _RESERVED_IDENTIFIER_FIXUP_3567.w = _RESERVED_IDENTIFIER_FIXUP_2374;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3567.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2374;
        float _RESERVED_IDENTIFIER_FIXUP_2443 = _RESERVED_IDENTIFIER_FIXUP_2414 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3537.w = _RESERVED_IDENTIFIER_FIXUP_2443;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2450 = _RESERVED_IDENTIFIER_FIXUP_3537.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3580;
        _RESERVED_IDENTIFIER_FIXUP_3580.x = _RESERVED_IDENTIFIER_FIXUP_2450.x;
        _RESERVED_IDENTIFIER_FIXUP_3580.y = _RESERVED_IDENTIFIER_FIXUP_2450.y;
        _RESERVED_IDENTIFIER_FIXUP_3580.w = _RESERVED_IDENTIFIER_FIXUP_2374;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3580.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2374;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2467 = hdLod6(param_66, param_67);
        float _RESERVED_IDENTIFIER_FIXUP_2472 = _RESERVED_IDENTIFIER_FIXUP_2443 + _RESERVED_IDENTIFIER_FIXUP_2467.x;
        _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_2472;
        _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_2472 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3654 = _RESERVED_IDENTIFIER_FIXUP_2467;
        _RESERVED_IDENTIFIER_FIXUP_3652 = _RESERVED_IDENTIFIER_FIXUP_3537;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2485 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_3397;
        _RESERVED_IDENTIFIER_FIXUP_3402.z = _RESERVED_IDENTIFIER_FIXUP_2485;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3655;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3653;
        if (_RESERVED_IDENTIFIER_FIXUP_2485 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2494 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2494.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2494.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2500 = hdLod7(param_68, param_69);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2504 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3477 = _RESERVED_IDENTIFIER_FIXUP_3402;
            _RESERVED_IDENTIFIER_FIXUP_3477.z = _RESERVED_IDENTIFIER_FIXUP_2504.x;
            _RESERVED_IDENTIFIER_FIXUP_3477.w = _RESERVED_IDENTIFIER_FIXUP_2504.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2514 = _RESERVED_IDENTIFIER_FIXUP_3477.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3481;
            _RESERVED_IDENTIFIER_FIXUP_3481.x = _RESERVED_IDENTIFIER_FIXUP_2514.x;
            _RESERVED_IDENTIFIER_FIXUP_3481.y = _RESERVED_IDENTIFIER_FIXUP_2514.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2521 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2525 = _RESERVED_IDENTIFIER_FIXUP_2521.y;
            _RESERVED_IDENTIFIER_FIXUP_3481.w = _RESERVED_IDENTIFIER_FIXUP_2525;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3481.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2525;
            float _RESERVED_IDENTIFIER_FIXUP_2536 = _RESERVED_IDENTIFIER_FIXUP_2500.x + hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3492 = _RESERVED_IDENTIFIER_FIXUP_2500;
            _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_2536;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2543 = _RESERVED_IDENTIFIER_FIXUP_3477.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3494;
            _RESERVED_IDENTIFIER_FIXUP_3494.x = _RESERVED_IDENTIFIER_FIXUP_2543.x;
            _RESERVED_IDENTIFIER_FIXUP_3494.y = _RESERVED_IDENTIFIER_FIXUP_2543.y;
            _RESERVED_IDENTIFIER_FIXUP_3494.w = _RESERVED_IDENTIFIER_FIXUP_2525;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3494.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2525;
            float _RESERVED_IDENTIFIER_FIXUP_2565 = _RESERVED_IDENTIFIER_FIXUP_2536 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_2565;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2572 = _RESERVED_IDENTIFIER_FIXUP_3477.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3507;
            _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2572.x;
            _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_2572.y;
            _RESERVED_IDENTIFIER_FIXUP_3507.w = _RESERVED_IDENTIFIER_FIXUP_2525;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3507.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2525;
            float _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_2565 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_2594;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2601 = _RESERVED_IDENTIFIER_FIXUP_3477.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3520;
            _RESERVED_IDENTIFIER_FIXUP_3520.x = _RESERVED_IDENTIFIER_FIXUP_2601.x;
            _RESERVED_IDENTIFIER_FIXUP_3520.y = _RESERVED_IDENTIFIER_FIXUP_2601.y;
            _RESERVED_IDENTIFIER_FIXUP_3520.w = _RESERVED_IDENTIFIER_FIXUP_2525;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3520.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2525;
            float _RESERVED_IDENTIFIER_FIXUP_2623 = _RESERVED_IDENTIFIER_FIXUP_2594 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3477.z = _RESERVED_IDENTIFIER_FIXUP_2623;
            _RESERVED_IDENTIFIER_FIXUP_3477.y = _RESERVED_IDENTIFIER_FIXUP_2623 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3655 = _RESERVED_IDENTIFIER_FIXUP_3492;
            _RESERVED_IDENTIFIER_FIXUP_3653 = _RESERVED_IDENTIFIER_FIXUP_3477;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3406 = _RESERVED_IDENTIFIER_FIXUP_3402;
            _RESERVED_IDENTIFIER_FIXUP_3406.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3406.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2639 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2643 = _RESERVED_IDENTIFIER_FIXUP_2639.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3670 = vec4(_RESERVED_IDENTIFIER_FIXUP_2639.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2643);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2654 = _RESERVED_IDENTIFIER_FIXUP_3670.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3671 = vec4(_RESERVED_IDENTIFIER_FIXUP_2654 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2643);
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2654;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2643;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3671.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2643;
            float _RESERVED_IDENTIFIER_FIXUP_2684 = hdLod8(param_78, param_79).x + hdLod8(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_3670;
            _RESERVED_IDENTIFIER_FIXUP_3433.z = _RESERVED_IDENTIFIER_FIXUP_2684;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2691 = _RESERVED_IDENTIFIER_FIXUP_3433.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3435 = _RESERVED_IDENTIFIER_FIXUP_3671;
            _RESERVED_IDENTIFIER_FIXUP_3435.x = _RESERVED_IDENTIFIER_FIXUP_2691.x;
            _RESERVED_IDENTIFIER_FIXUP_3435.y = _RESERVED_IDENTIFIER_FIXUP_2691.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3435.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2643;
            float _RESERVED_IDENTIFIER_FIXUP_2706 = _RESERVED_IDENTIFIER_FIXUP_2684 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3433.z = _RESERVED_IDENTIFIER_FIXUP_2706;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2713 = _RESERVED_IDENTIFIER_FIXUP_3433.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3444 = _RESERVED_IDENTIFIER_FIXUP_3435;
            _RESERVED_IDENTIFIER_FIXUP_3444.x = _RESERVED_IDENTIFIER_FIXUP_2713.x;
            _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_2713.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3444.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2643;
            float _RESERVED_IDENTIFIER_FIXUP_2728 = _RESERVED_IDENTIFIER_FIXUP_2706 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3433.z = _RESERVED_IDENTIFIER_FIXUP_2728;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2735 = _RESERVED_IDENTIFIER_FIXUP_3433.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3453 = _RESERVED_IDENTIFIER_FIXUP_3444;
            _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_2735.x;
            _RESERVED_IDENTIFIER_FIXUP_3453.y = _RESERVED_IDENTIFIER_FIXUP_2735.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3453.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2643;
            float _RESERVED_IDENTIFIER_FIXUP_2750 = _RESERVED_IDENTIFIER_FIXUP_2728 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3433.x = _RESERVED_IDENTIFIER_FIXUP_2750;
            float _RESERVED_IDENTIFIER_FIXUP_2758 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3433.y = _RESERVED_IDENTIFIER_FIXUP_2758;
            float _RESERVED_IDENTIFIER_FIXUP_2764 = clamp((_RESERVED_IDENTIFIER_FIXUP_2758 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3406.z = _RESERVED_IDENTIFIER_FIXUP_2764;
            float _RESERVED_IDENTIFIER_FIXUP_2769 = (_RESERVED_IDENTIFIER_FIXUP_2750 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3406.w = _RESERVED_IDENTIFIER_FIXUP_2769;
            _RESERVED_IDENTIFIER_FIXUP_3406.y = (_RESERVED_IDENTIFIER_FIXUP_2764 * _RESERVED_IDENTIFIER_FIXUP_2769) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3655 = _RESERVED_IDENTIFIER_FIXUP_3433;
            _RESERVED_IDENTIFIER_FIXUP_3653 = _RESERVED_IDENTIFIER_FIXUP_3406;
        }
        _RESERVED_IDENTIFIER_FIXUP_3654 = _RESERVED_IDENTIFIER_FIXUP_3655;
        _RESERVED_IDENTIFIER_FIXUP_3652 = _RESERVED_IDENTIFIER_FIXUP_3653;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2784 = min(_RESERVED_IDENTIFIER_FIXUP_3652.y, _RESERVED_IDENTIFIER_FIXUP_3652.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3598 = _RESERVED_IDENTIFIER_FIXUP_3654;
    _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2784;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3672 = vec4((_RESERVED_IDENTIFIER_FIXUP_2784 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2151.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2806 = _RESERVED_IDENTIFIER_FIXUP_3598.xxx * _RESERVED_IDENTIFIER_FIXUP_3672.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3609 = _RESERVED_IDENTIFIER_FIXUP_3672;
    _RESERVED_IDENTIFIER_FIXUP_3609.y = _RESERVED_IDENTIFIER_FIXUP_2806.x;
    _RESERVED_IDENTIFIER_FIXUP_3609.z = _RESERVED_IDENTIFIER_FIXUP_2806.y;
    _RESERVED_IDENTIFIER_FIXUP_3609.w = _RESERVED_IDENTIFIER_FIXUP_2806.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2820 = (_RESERVED_IDENTIFIER_FIXUP_2151.xyz * _RESERVED_IDENTIFIER_FIXUP_3609.xxx) + _RESERVED_IDENTIFIER_FIXUP_3609.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3615 = _RESERVED_IDENTIFIER_FIXUP_2151;
    _RESERVED_IDENTIFIER_FIXUP_3615.x = _RESERVED_IDENTIFIER_FIXUP_2820.x;
    _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_2820.y;
    _RESERVED_IDENTIFIER_FIXUP_3615.z = _RESERVED_IDENTIFIER_FIXUP_2820.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2833 = _RESERVED_IDENTIFIER_FIXUP_3615.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3621 = _RESERVED_IDENTIFIER_FIXUP_3615;
    _RESERVED_IDENTIFIER_FIXUP_3621.x = _RESERVED_IDENTIFIER_FIXUP_2833.x;
    _RESERVED_IDENTIFIER_FIXUP_3621.y = _RESERVED_IDENTIFIER_FIXUP_2833.y;
    _RESERVED_IDENTIFIER_FIXUP_3621.z = _RESERVED_IDENTIFIER_FIXUP_2833.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3621.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_998 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1007;
    if (_RESERVED_IDENTIFIER_FIXUP_998)
    {
        _RESERVED_IDENTIFIER_FIXUP_1007 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1007 = _RESERVED_IDENTIFIER_FIXUP_998;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1007)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1044 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3250.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1070 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2886;
    if (_RESERVED_IDENTIFIER_FIXUP_1044 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2886 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1044), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1070);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2886 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1070);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2886;
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
    vec3 hdB90 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB90.x;
    r4.y = hdB90.y;
    r4.z = hdB90.z;
    vec3 hdB105 = v0.xyz + v0.xyz;
    r5.x = hdB105.x;
    r5.y = hdB105.y;
    r5.z = hdB105.z;
    vec3 hdB116 = r0.xyz * r5.xyz;
    r6.x = hdB116.x;
    r6.y = hdB116.y;
    r6.z = hdB116.z;
    vec4 hdB125 = r0;
    vec3 hdB134 = mix(r6.xyz, hdB125.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB134.x;
    r0.y = hdB134.y;
    r0.z = hdB134.z;
    vec3 hdB145 = r1.xyz * r5.xyz;
    r6.x = hdB145.x;
    r6.y = hdB145.y;
    r6.z = hdB145.z;
    vec4 hdB154 = r1;
    vec3 hdB160 = mix(r6.xyz, hdB154.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB160.x;
    r1.y = hdB160.y;
    r1.z = hdB160.z;
    vec3 hdB171 = r2.xyz * r5.xyz;
    r4.x = hdB171.x;
    r4.y = hdB171.y;
    r4.w = hdB171.z;
    vec4 hdB181 = r2;
    vec3 hdB187 = mix(r4.xyw, hdB181.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB187.x;
    r2.y = hdB187.y;
    r2.z = hdB187.z;
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB270 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB270.x;
        r1.z = hdB270.y;
        vec2 hdB281 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB281.x;
        r3.y = hdB281.y;
        vec2 hdB289 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB289.x;
        r3.w = hdB289.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r1.w = r2.x + r3.x;
        vec2 hdB312 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB312.x;
        r2.y = hdB312.y;
        vec2 hdB319 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB319.x;
        r2.w = hdB319.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB342 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB342.x;
        r2.y = hdB342.y;
        vec2 hdB349 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB349.x;
        r2.w = hdB349.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB372 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB372.x;
        r2.y = hdB372.y;
        vec2 hdB379 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB379.x;
        r2.w = hdB379.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
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
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        vec2 hdB439 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB439.x;
        r1.z = hdB439.y;
        vec2 hdB449 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB449.x;
        r3.y = hdB449.y;
        vec2 hdB456 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB456.x;
        r3.w = hdB456.y;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r1.w = r2.x + r3.x;
        vec2 hdB478 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB478.x;
        r2.y = hdB478.y;
        vec2 hdB485 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB485.x;
        r2.w = hdB485.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod6(param_18, param_19);
        r1.w += r2.x;
        vec2 hdB507 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB507.x;
        r2.y = hdB507.y;
        vec2 hdB514 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB514.x;
        r2.w = hdB514.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod6(param_20, param_21);
        r1.w += r2.x;
        vec2 hdB536 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB536.x;
        r2.y = hdB536.y;
        vec2 hdB543 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB543.x;
        r2.w = hdB543.y;
        vec2 param_22 = r2.xy;
        float param_23 = r2.w;
        r2 = hdLod6(param_22, param_23);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            vec2 hdB592 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB592.x;
            r1.w = hdB592.y;
            vec2 hdB602 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB602.x;
            r3.y = hdB602.y;
            vec2 hdB609 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB609.x;
            r3.w = hdB609.y;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r2.x += r3.x;
            vec2 hdB631 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB631.x;
            r3.y = hdB631.y;
            vec2 hdB638 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB638.x;
            r3.w = hdB638.y;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r2.x += r3.x;
            vec2 hdB660 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB660.x;
            r3.y = hdB660.y;
            vec2 hdB667 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB667.x;
            r3.w = hdB667.y;
            vec2 param_30 = r3.xy;
            float param_31 = r3.w;
            r3 = hdLod7(param_30, param_31);
            r2.x += r3.x;
            vec2 hdB689 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB689.x;
            r3.y = hdB689.y;
            vec2 hdB696 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB696.x;
            r3.w = hdB696.y;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod7(param_32, param_33);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 hdB728 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB728.x;
            r2.w = hdB728.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_34 = r2.xy;
            float param_35 = r2.w;
            r3 = hdLod8(param_34, param_35);
            vec2 hdB753 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB753.x;
            r4.y = hdB753.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r5 = hdLod8(param_36, param_37);
            r2.z = r3.x + r5.x;
            vec2 hdB781 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB781.x;
            r4.y = hdB781.y;
            vec2 param_38 = r4.xy;
            float param_39 = r4.w;
            r3 = hdLod8(param_38, param_39);
            r2.z += r3.x;
            vec2 hdB803 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB803.x;
            r4.y = hdB803.y;
            vec2 param_40 = r4.xy;
            float param_41 = r4.w;
            r3 = hdLod8(param_40, param_41);
            r2.z += r3.x;
            vec2 hdB825 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB825.x;
            r4.y = hdB825.y;
            vec2 param_42 = r4.xy;
            float param_43 = r4.w;
            r3 = hdLod8(param_42, param_43);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB887 = r0.www * v1.xyz;
    r1.y = hdB887.x;
    r1.z = hdB887.y;
    r1.w = hdB887.z;
    vec4 hdB896 = r1;
    vec3 hdB898 = r2.xxx * hdB896.yzw;
    r1.y = hdB898.x;
    r1.z = hdB898.y;
    r1.w = hdB898.z;
    vec4 hdB905 = r0;
    vec3 hdB912 = (hdB905.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB912.x;
    r0.y = hdB912.y;
    r0.z = hdB912.z;
    vec4 hdB919 = r0;
    vec3 hdB926 = hdB919.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB926.x;
    r0.y = hdB926.y;
    r0.z = hdB926.z;
    vec3 hdB941 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB941.x;
    oC0.y = hdB941.y;
    oC0.z = hdB941.z;
    oC0.w = 1.0;
    bool hdB953 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB961;
    if (hdB953)
    {
        hdB961 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB961 = hdB953;
    }
    if (hdB961)
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
    bool _3500 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3510;
    if (_3500)
    {
        _3510 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3510 = _3500;
    }
    if (_3510)
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
        bool _3535 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3550;
        if (!_3535)
        {
            _3550 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3550 = _3535;
        }
        if (_3550)
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
